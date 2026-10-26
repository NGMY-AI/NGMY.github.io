((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,U,F,N,A_,A0,V,K,H,A1,A2,S,A3,A4,W,O,A5,A6,X,L,R,A7,A8,P,I,E,A={
bv9(d){return A.hv_(d)},
hv_(d){var w=0,v=C.j(x.dk),u,t=2,s=[],r,q,p,o
var $async$bv9=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qg(C.mE(""),d,B.h5,null).cJ(0,B.Uz),$async$bv9)
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
return C.i($async$bv9,v)},
hG_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<12;++u){t=D.Nn[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.dj(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.ad(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=B.d.kU(D.Nn,new A.fcU())
if(w==null)w=B.d.gI(D.Nn)
s=C.S(x.N,x.D)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.K)(r),++u){l=r[u].a
k=l[0]
l=$.a0x().h(0,l[1])
l.toString
s.m(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.K)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+B.d.gI(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new A.ahf(w.a,w.b,m,w,s,!1)},
hA1(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.J(D.Nc,new A.f4I(),x.bd).aG(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
hNF(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=B.a.cP(b2,"{")
v=B.a.nZ(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(B.Q.aE(0,B.a.al(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aZ(a5)
r=0
for(a6=x.a,a7=J.aU(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gT(a7)
p=C.t(J.q(q,"kind"))
o=C.t(J.q(q,"id"))
if(!$.a0x().am(0,p)||J.eQ(s,o)||J.a9(t)>=8)continue
J.ch(s,o)
n=C.S(a5,a8)
for(a9=0;a9<4;++a9){m=D.cXS[a9]
l=J.q(q,m)
if(typeof l=="number")J.aE(n,m,l)}k=B.k.D(typeof J.q(q,"x")=="number"?C.f8(J.q(q,"x")):0.2+B.k.J(r,3)*0.3,0.16,0.84)
j=B.k.D(typeof J.q(q,"y")=="number"?C.f8(J.q(q,"y")):0.25+B.k.ak(r,3)*0.3,0.1,0.9)
J.ch(t,new C.fz([o,p,k,j,n]));++r}if(J.a9(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aU(a6.a(J.q(u,"wires")));a5.C();){h=a5.gT(a5)
g=a6.a(h)
if(J.a9(g)<4)continue
f=C.t(J.q(g,0))
e=C.t(J.q(g,2))
d=B.o.D(B.k.L(C.f8(J.q(g,1))),0,1)
a0=B.o.D(B.k.L(C.f8(J.q(g,3))),0,1)
if(J.eQ(s,f)&&J.eQ(s,e)&&!J.y(f,e))J.ch(i,new C.d7([f,d,e,a0]))}if(J.a9(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.Q.a(J.q(u,"steps"))
a0=J.aU(a0==null?B.cO:a0)
while(a0.C()){a2=a0.gT(a0)
J.ch(a1,C.t(a2))}a3=a1
a0=J.q(u,"title")
a0=C.t(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new A.q_(a0,C.t(a1==null?"":a1),t,i,B.U)
a0=a4.a
a1=a4.b
d=J.a9(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.t(a5==null?"":a5)
return new A.ahf(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hEE(d){var w,v,u=A.fyD()
d.B(u)
for(w=0;w<60;++w)u.a58(0,0.03333333333333333)
v=u.a
return B.d.bf(v,new A.fah(u))&&!B.d.e8(v,new A.fai())},
hED(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.S(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.K)(l),++u){t=l[u];++v
k.m(0,t.a,$.a0x().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.K)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.t(t.e)+" V")
if(p==="resistor")q.push(""+B.k.U(t.r)+" ohms")
if(B.d.q(D.cWx,p))q.push("level "+B.k.U(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.ax
o=p>0.05?"working (glow "+B.k.U(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+B.d.aG(q,", ")+")"
s.push(C.t(p)+n+": "+o+", current "+B.k.ab(Math.abs(t.at)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.K)(w),++u){m=w[u]
l.push(C.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+B.d.aG(s,"\n")+"\nWires: "+B.d.aG(l,"; ")},
htD(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.K)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+B.d.aG(v,"\n")+"\n\n"}v=B.d.aG(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
hFZ(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.a0x().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<16;++u){s=D.Nc[u]
if(B.d.bf(w,new A.fcR(s)))if(!C.dj(r,s.b.toLowerCase(),0))v=C.dj(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.ad("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a5(w,new A.fcS(e),C.T(w).k("a5<1>")).gah(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.ad("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+B.k.ab(B.d.cI(w,0,new A.fcT())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.ad("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=B.d.gI(w)
w=$.a0x().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ahf:function ahf(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fcU:function fcU(){},
f4I:function f4I(){},
fah:function fah(d){this.a=d},
fai:function fai(){},
fcR:function fcR(d){this.a=d},
fcS:function fcS(d){this.a=d},
fcT:function fcT(){},
To:function To(d){this.a=d},
bg4:function bg4(d,e,f,g,h,i){var _=this
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
dV8:function dV8(d){this.a=d},
dV9:function dV9(d,e,f){this.a=d
this.b=e
this.c=f},
dVa:function dVa(d){this.a=d},
dVl:function dVl(d){this.a=d},
dVm:function dVm(d,e){this.a=d
this.b=e},
dVh:function dVh(d){this.a=d},
dVf:function dVf(d,e){this.a=d
this.b=e},
dVg:function dVg(d,e,f){this.a=d
this.b=e
this.c=f},
dVi:function dVi(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dVd:function dVd(d){this.a=d},
dVe:function dVe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dVj:function dVj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dVc:function dVc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dVk:function dVk(d,e){this.a=d
this.b=e},
dVb:function dVb(d,e){this.a=d
this.b=e},
dVp:function dVp(d){this.a=d},
dVo:function dVo(d){this.a=d},
dVq:function dVq(d){this.a=d},
dVn:function dVn(d){this.a=d},
dVr:function dVr(d,e){this.a=d
this.b=e},
dVs:function dVs(d,e){this.a=d
this.b=e},
dVt:function dVt(d,e){this.a=d
this.b=e},
dVu:function dVu(d,e){this.a=d
this.b=e},
bvu(d,e,f){var w=null
return C.u(C.a([C.d(d,w,w,w,w,w,w,D.aJc,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.R,0,B.p)},
fZd(d,e,f,g){var w=null,v=C.m(24),u=C.H(f.j(0.6),B.r,1)
return C.as(C.p(w,C.u(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.ar,C.d(e,w,w,w,w,w,w,B.Hg,B.L,w,w),B.ay,C.cb(B.fA,g,B.bw,0,8)],x.p),B.m,w,B.e,B.R,0,B.p),B.h,w,w,new C.o(D.T2,w,u,v,w,w,B.n),w,w,w,w,B.a8,w,w,w),w,w,w)},
Ez:function Ez(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
u7:function u7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
TP:function TP(d){this.a=d},
aBc:function aBc(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fb$=h
_.ku$=i
_.fD$=j
_.fc$=k
_.bq$=l
_.a5$=m
_.c=_.a=null},
e9w:function e9w(){},
e9Q:function e9Q(d){this.a=d},
e9P:function e9P(d,e){this.a=d
this.b=e},
e9R:function e9R(){},
e9S:function e9S(){},
e9y:function e9y(d,e,f){this.a=d
this.b=e
this.c=f},
e9x:function e9x(d,e){this.a=d
this.b=e},
e9n:function e9n(d){this.a=d},
e9o:function e9o(d){this.a=d},
e9p:function e9p(d){this.a=d},
e9q:function e9q(d){this.a=d},
e9r:function e9r(d){this.a=d},
e9s:function e9s(d){this.a=d},
e9t:function e9t(d){this.a=d},
e9u:function e9u(d){this.a=d},
e9v:function e9v(d){this.a=d},
e9l:function e9l(d){this.a=d},
e9m:function e9m(d){this.a=d},
e9k:function e9k(d){this.a=d},
e9J:function e9J(d,e){this.a=d
this.b=e},
e9E:function e9E(d){this.a=d},
e9F:function e9F(d){this.a=d},
e9B:function e9B(d){this.a=d},
e9G:function e9G(d){this.a=d},
e9A:function e9A(d){this.a=d},
e9H:function e9H(d){this.a=d},
e9I:function e9I(d){this.a=d},
e9z:function e9z(d){this.a=d},
e9K:function e9K(d,e){this.a=d
this.b=e},
e9D:function e9D(d,e){this.a=d
this.b=e},
e9L:function e9L(d){this.a=d},
e9M:function e9M(d){this.a=d},
e9N:function e9N(d){this.a=d},
e9O:function e9O(d){this.a=d},
e9C:function e9C(d){this.a=d},
bd7:function bd7(d,e){this.b=d
this.a=e},
aIW:function aIW(){},
bt7:function bt7(){},
cyF(){var w=0,v=C.j(x.E),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cyF=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.tr().jR(0,"assets/data/body3d.bin"),$async$cyF)
case 3:d=a1
$.fUG=J.eO(B.dz.gaL(d),d.byteOffset,d.byteLength)
t=C.bD0(d)
s=t.getUint32(4,!0)
r=C.a([],x.Y)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=C.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=C.jd(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.cN0[i]
g=C.aX((l<<16|h<<8|g|4278190080)>>>0)
r.push(new A.a0W(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aOQ))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new A.b6j(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cyF,v)},
aOH:function aOH(d,e,f){this.a=d
this.b=e
this.c=f},
a0W:function a0W(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b6j:function b6j(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Sh:function Sh(d){this.a=d},
azE:function azE(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.fb$=s
_.ku$=t
_.fD$=u
_.fc$=v
_.bq$=w
_.a5$=a0
_.c=_.a=null},
dx_:function dx_(d){this.a=d},
dwZ:function dwZ(d,e){this.a=d
this.b=e},
dwC:function dwC(d,e){this.a=d
this.b=e},
dwD:function dwD(){},
dx0:function dx0(){},
dwE:function dwE(d,e){this.a=d
this.b=e},
dwF:function dwF(d){this.a=d},
dwG:function dwG(){},
dwH:function dwH(d){this.a=d},
dwJ:function dwJ(d,e){this.a=d
this.b=e},
dwI:function dwI(d){this.a=d},
dwz:function dwz(d,e,f){this.a=d
this.b=e
this.c=f},
dwA:function dwA(d){this.a=d},
dwB:function dwB(d){this.a=d},
dwQ:function dwQ(d){this.a=d},
dwR:function dwR(d,e){this.a=d
this.b=e},
dwS:function dwS(d,e){this.a=d
this.b=e},
dwT:function dwT(d){this.a=d},
dwP:function dwP(d,e){this.a=d
this.b=e},
dwU:function dwU(d,e){this.a=d
this.b=e},
dwO:function dwO(d,e){this.a=d
this.b=e},
dwV:function dwV(d){this.a=d},
dwN:function dwN(d){this.a=d},
dwW:function dwW(d){this.a=d},
dwM:function dwM(d){this.a=d},
dwX:function dwX(d){this.a=d},
dwL:function dwL(d){this.a=d},
dwY:function dwY(d){this.a=d},
dwK:function dwK(d){this.a=d},
aHZ:function aHZ(){},
aI_:function aI_(){},
bVY:function bVY(d){var _=this
_.a=d
_.d=_.c=_.b=null},
bVZ:function bVZ(d,e){this.a=d
this.b=e},
bW_:function bW_(d){this.a=d},
avd(d,e,f,g,h){return new A.b71(d,e,f,g,h)},
fD8(d,e,f,g,h,i){return $.hr3.ci(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new A.cFr(d,e,f,i,g,h))},
x8:function x8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
B3:function B3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
mW:function mW(d,e,f){this.a=d
this.b=e
this.c=f},
b71:function b71(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f_k:function f_k(){},
f_l:function f_l(){},
f_m:function f_m(){},
f_q:function f_q(){},
f_r:function f_r(){},
f_s:function f_s(){},
Sm:function Sm(d){this.a=d},
azH:function azH(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.fb$=m
_.ku$=n
_.fD$=o
_.fc$=p
_.bq$=q
_.a5$=r
_.c=_.a=null},
dza:function dza(d){this.a=d},
dyP:function dyP(d,e){this.a=d
this.b=e},
dyS:function dyS(){},
dzb:function dzb(){},
dyN:function dyN(d,e){this.a=d
this.b=e},
dyO:function dyO(d,e){this.a=d
this.b=e},
dyT:function dyT(d,e,f){this.a=d
this.b=e
this.c=f},
dyI:function dyI(){},
dyJ:function dyJ(){},
dyK:function dyK(d){this.a=d},
dyL:function dyL(d,e){this.a=d
this.b=e},
dyM:function dyM(d,e,f){this.a=d
this.b=e
this.c=f},
dyU:function dyU(){},
dyV:function dyV(d,e){this.a=d
this.b=e},
dyW:function dyW(d){this.a=d},
dyR:function dyR(d,e){this.a=d
this.b=e},
dyQ:function dyQ(d){this.a=d},
dyH:function dyH(d,e,f){this.a=d
this.b=e
this.c=f},
dz4:function dz4(d){this.a=d},
dz3:function dz3(d){this.a=d},
dz5:function dz5(d){this.a=d},
dz2:function dz2(d){this.a=d},
dz0:function dz0(d){this.a=d},
dz1:function dz1(d){this.a=d},
dz_:function dz_(d){this.a=d},
dyX:function dyX(d){this.a=d},
dyZ:function dyZ(d){this.a=d},
dz6:function dz6(d,e){this.a=d
this.b=e},
dz7:function dz7(d,e){this.a=d
this.b=e},
dz8:function dz8(d){this.a=d},
dyY:function dyY(d){this.a=d},
dz9:function dz9(d,e){this.a=d
this.b=e},
b7j:function b7j(d,e){this.b=d
this.a=e},
cFr:function cFr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aI4:function aI4(){},
bsS:function bsS(){},
hi_(){return new A.Lv(null)},
ns(d,e,f,g,h){return new A.bow(d,e,f,g,h)},
bmY(d,e,f){return B.k.D((d-e)/(f-e),0,1)},
fDE(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Lv:function Lv(d){this.a=d},
IG:function IG(d,e){this.a=d
this.b=e},
zl:function zl(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
azY:function azY(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dEn:function dEn(d,e){this.a=d
this.b=e},
dEm:function dEm(d){this.a=d},
dEp:function dEp(d,e){this.a=d
this.b=e},
dEo:function dEo(d){this.a=d},
bow:function bow(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f_I:function f_I(){},
f_J:function f_J(){},
f_K:function f_K(){},
f_V:function f_V(){},
f_Y:function f_Y(){},
f_Z:function f_Z(){},
f0_:function f0_(){},
f00:function f00(){},
f01:function f01(){},
f02:function f02(){},
f03:function f03(){},
f_L:function f_L(){},
f_M:function f_M(){},
f_N:function f_N(){},
f_O:function f_O(){},
f_P:function f_P(){},
f_Q:function f_Q(){},
f_R:function f_R(){},
f_S:function f_S(){},
f_T:function f_T(){},
f_U:function f_U(){},
f_W:function f_W(){},
f_X:function f_X(){},
bmZ:function bmZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eHn:function eHn(d){this.a=d},
eHm:function eHm(d,e){this.a=d
this.b=e},
eHk:function eHk(d){this.a=d},
eHo:function eHo(d){this.a=d},
eHl:function eHl(d,e){this.a=d
this.b=e},
acq:function acq(d,e,f){this.c=d
this.d=e
this.a=f},
abl:function abl(d,e,f){this.c=d
this.d=e
this.a=f},
O9:function O9(d,e,f,g,h,i,j,k,l,m){var _=this
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
bnX:function bnX(d,e){this.b=d
this.a=e},
bns:function bns(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b6_:function b6_(d,e){this.b=d
this.a=e},
aE6:function aE6(d,e){this.c=d
this.a=e},
aE7:function aE7(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cO$=e
_.aX$=f
_.c=_.a=null},
eH3:function eH3(d){this.a=d},
eH2:function eH2(d){this.a=d},
eH1:function eH1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eH0:function eH0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGZ:function eGZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGY:function eGY(d,e,f){this.a=d
this.b=e
this.c=f},
eH_:function eH_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGX:function eGX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHb:function eHb(d){this.a=d},
eHa:function eHa(d){this.a=d},
eHc:function eHc(d,e){this.a=d
this.b=e},
eHd:function eHd(d,e){this.a=d
this.b=e},
eHe:function eHe(d,e){this.a=d
this.b=e},
eH9:function eH9(d,e,f){this.a=d
this.b=e
this.c=f},
eHf:function eHf(d,e,f){this.a=d
this.b=e
this.c=f},
eH8:function eH8(d){this.a=d},
eH4:function eH4(d){this.a=d},
eHg:function eHg(d){this.a=d},
eHh:function eHh(d){this.a=d},
eH7:function eH7(d,e){this.a=d
this.b=e},
eHi:function eHi(d,e){this.a=d
this.b=e},
eH6:function eH6(d,e){this.a=d
this.b=e},
eHj:function eHj(d,e){this.a=d
this.b=e},
eH5:function eH5(d,e){this.a=d
this.b=e},
eGV:function eGV(){},
eGW:function eGW(){},
bmD:function bmD(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bm5:function bm5(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b6G:function b6G(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bm7:function bm7(d,e,f){this.b=d
this.c=e
this.a=f},
bq_:function bq_(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aJJ:function aJJ(){},
h_A(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ap(0,new C.v(w,0)),u=e.aD(0,new C.v(w,0)),t=1-f,s=3*t
return d.aM(0,t*t*t).ap(0,v.aM(0,s*t*f)).ap(0,u.aM(0,s*f*f)).ap(0,e.aM(0,f*f*f))},
bd6(d,e,f,g,h,i){return $.hrE.ci(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new A.d8T(d,e,f,i,g,h))},
Z7:function Z7(d,e){this.a=d
this.b=e},
pw:function pw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qb:function qb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
B7:function B7(d,e){this.a=d
this.b=e},
X6:function X6(d,e){this.a=d
this.b=e},
acg:function acg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Zk:function Zk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Bh:function Bh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a9e:function a9e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a9v:function a9v(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abp:function abp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bd4:function bd4(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bs$=_.bI$=0},
d8X:function d8X(d){this.a=d},
d8Y:function d8Y(d){this.a=d},
d8U:function d8U(d,e){this.a=d
this.b=e},
d8V:function d8V(d){this.a=d},
d8W:function d8W(d){this.a=d},
d8Z:function d8Z(d){this.a=d},
d9_:function d9_(d){this.a=d},
d90:function d90(d){this.a=d},
d91:function d91(d){this.a=d},
d92:function d92(d){this.a=d},
d93:function d93(d){this.a=d},
d94:function d94(d){this.a=d},
d95:function d95(d){this.a=d},
d96:function d96(d){this.a=d},
Em:function Em(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
TO:function TO(d){this.a=d},
aBb:function aBb(d,e,f,g,h,i,j){var _=this
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
e8R:function e8R(d){this.a=d},
e8G:function e8G(d){this.a=d},
e8I:function e8I(){},
e8J:function e8J(){},
e8M:function e8M(){},
e8N:function e8N(d,e,f){this.a=d
this.b=e
this.c=f},
e8O:function e8O(d){this.a=d},
e8P:function e8P(d){this.a=d},
e8K:function e8K(){},
e8L:function e8L(d){this.a=d},
e9g:function e9g(d){this.a=d},
e8Q:function e8Q(){},
e8C:function e8C(d){this.a=d},
e8T:function e8T(d){this.a=d},
e8S:function e8S(d){this.a=d},
e8V:function e8V(){},
e8U:function e8U(d,e){this.a=d
this.b=e},
e8F:function e8F(){},
e8D:function e8D(d){this.a=d},
e8E:function e8E(d){this.a=d},
e9e:function e9e(d){this.a=d},
e9d:function e9d(d){this.a=d},
e9f:function e9f(d){this.a=d},
e94:function e94(d,e){this.a=d
this.b=e},
e9c:function e9c(d){this.a=d},
e9a:function e9a(d){this.a=d},
e9b:function e9b(d){this.a=d},
e99:function e99(d){this.a=d},
e98:function e98(d){this.a=d},
e95:function e95(d){this.a=d},
e96:function e96(d){this.a=d},
e97:function e97(d){this.a=d},
e8H:function e8H(){},
e90:function e90(d){this.a=d},
e91:function e91(d){this.a=d},
e9_:function e9_(d){this.a=d},
e92:function e92(d){this.a=d},
e8Z:function e8Z(d){this.a=d},
e93:function e93(d){this.a=d},
e8Y:function e8Y(d){this.a=d},
e8X:function e8X(d){this.a=d},
e8W:function e8W(d,e){this.a=d
this.b=e},
bd5:function bd5(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
d8T:function d8T(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aIU:function aIU(){},
bhA:function bhA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
O0:function O0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
U2:function U2(d){this.a=d},
bgF:function bgF(d,e,f,g,h,i,j,k){var _=this
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
ej1:function ej1(d){this.a=d},
ej_:function ej_(d){this.a=d},
ej0:function ej0(){},
eiD:function eiD(){},
eiC:function eiC(){},
eiM:function eiM(d,e){this.a=d
this.b=e},
eiO:function eiO(d){this.a=d},
eiS:function eiS(d){this.a=d},
eiN:function eiN(d){this.a=d},
eiT:function eiT(d){this.a=d},
eiU:function eiU(d){this.a=d},
eiV:function eiV(d,e){this.a=d
this.b=e},
eiL:function eiL(d,e){this.a=d
this.b=e},
eiW:function eiW(d){this.a=d},
eiK:function eiK(d){this.a=d},
eiX:function eiX(d,e){this.a=d
this.b=e},
eiJ:function eiJ(d,e){this.a=d
this.b=e},
eiY:function eiY(d){this.a=d},
eiI:function eiI(d,e){this.a=d
this.b=e},
eiZ:function eiZ(d){this.a=d},
eiH:function eiH(d){this.a=d},
eiP:function eiP(d){this.a=d},
eiG:function eiG(d){this.a=d},
eiQ:function eiQ(d){this.a=d},
eiF:function eiF(d){this.a=d},
eiR:function eiR(d,e){this.a=d
this.b=e},
eiE:function eiE(d,e){this.a=d
this.b=e},
bnS:function bnS(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
Ue:function Ue(d){this.a=d},
aBp:function aBp(d,e,f,g){var _=this
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
epB:function epB(d,e){this.a=d
this.b=e},
epC:function epC(d,e,f){this.a=d
this.b=e
this.c=f},
epD:function epD(d){this.a=d},
epA:function epA(){},
epE:function epE(d,e){this.a=d
this.b=e},
epz:function epz(d,e){this.a=d
this.b=e},
epF:function epF(d,e){this.a=d
this.b=e},
epy:function epy(d,e){this.a=d
this.b=e},
epG:function epG(d){this.a=d},
epx:function epx(d){this.a=d},
epH:function epH(d,e){this.a=d
this.b=e},
epw:function epw(d,e){this.a=d
this.b=e},
epI:function epI(d){this.a=d},
epJ:function epJ(d){this.a=d},
epv:function epv(d,e){this.a=d
this.b=e},
aJ2:function aJ2(){},
aJ8:function aJ8(){},
YD:function YD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
TM:function TM(d){this.a=d},
aB4:function aB4(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fb$=h
_.ku$=i
_.fD$=j
_.fc$=k
_.bq$=l
_.a5$=m
_.c=_.a=null},
e5R:function e5R(d){this.a=d},
e5S:function e5S(d,e){this.a=d
this.b=e},
e5F:function e5F(d,e){this.a=d
this.b=e},
e5G:function e5G(d){this.a=d},
e5D:function e5D(d){this.a=d},
e5E:function e5E(d){this.a=d},
e5C:function e5C(d){this.a=d},
e5H:function e5H(d){this.a=d},
e5B:function e5B(d,e){this.a=d
this.b=e},
e5J:function e5J(d){this.a=d},
e5A:function e5A(d,e){this.a=d
this.b=e},
e5K:function e5K(d){this.a=d},
e5z:function e5z(d,e){this.a=d
this.b=e},
e5L:function e5L(d){this.a=d},
e5y:function e5y(d){this.a=d},
e5M:function e5M(d){this.a=d},
e5x:function e5x(d){this.a=d},
e5N:function e5N(d){this.a=d},
e5w:function e5w(d){this.a=d},
e5O:function e5O(d){this.a=d},
e5P:function e5P(d){this.a=d},
e5Q:function e5Q(d){this.a=d},
e5v:function e5v(d){this.a=d},
e5I:function e5I(d){this.a=d},
bhn:function bhn(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
a9l:function a9l(d,e,f){this.a=d
this.b=e
this.c=f},
U9:function U9(d){this.a=d},
bgK:function bgK(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fb$=i
_.ku$=j
_.fD$=k
_.fc$=l
_.bq$=m
_.a5$=n
_.c=_.a=null},
ep2:function ep2(d){this.a=d},
ep3:function ep3(d){this.a=d},
ep1:function ep1(d){this.a=d},
eoS:function eoS(d,e){this.a=d
this.b=e},
eoT:function eoT(d){this.a=d},
eoQ:function eoQ(d){this.a=d},
eoR:function eoR(d){this.a=d},
eoP:function eoP(d){this.a=d},
eoI:function eoI(d){this.a=d},
eoJ:function eoJ(d){this.a=d},
eoH:function eoH(d){this.a=d},
eoU:function eoU(d,e){this.a=d
this.b=e},
eoO:function eoO(d,e){this.a=d
this.b=e},
eoV:function eoV(d,e){this.a=d
this.b=e},
eoN:function eoN(d,e){this.a=d
this.b=e},
eoW:function eoW(d){this.a=d},
eoM:function eoM(d){this.a=d},
eoX:function eoX(d){this.a=d},
eoL:function eoL(d,e){this.a=d
this.b=e},
eoY:function eoY(d){this.a=d},
eoK:function eoK(d,e){this.a=d
this.b=e},
eoZ:function eoZ(d){this.a=d},
eoG:function eoG(d,e){this.a=d
this.b=e},
ep_:function ep_(d){this.a=d},
eoF:function eoF(d,e){this.a=d
this.b=e},
ep0:function ep0(d){this.a=d},
eoE:function eoE(d,e){this.a=d
this.b=e},
boI:function boI(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
a9O:function a9O(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
Sk:function Sk(d){this.a=d},
azG:function azG(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=1
_.x=g
_.Q=_.z=_.y=!1
_.as=0
_.at=null
_.ax=0
_.fb$=h
_.ku$=i
_.fD$=j
_.fc$=k
_.bq$=l
_.a5$=m
_.c=_.a=null},
dyj:function dyj(d){this.a=d},
dyi:function dyi(d,e){this.a=d
this.b=e},
dyk:function dyk(){},
dyl:function dyl(d){this.a=d},
dy9:function dy9(d,e){this.a=d
this.b=e},
dyc:function dyc(d){this.a=d},
dyb:function dyb(d,e){this.a=d
this.b=e},
dya:function dya(d,e){this.a=d
this.b=e},
dyg:function dyg(d,e,f){this.a=d
this.b=e
this.c=f},
dyf:function dyf(d){this.a=d},
dyd:function dyd(d){this.a=d},
dye:function dye(d){this.a=d},
dyh:function dyh(d){this.a=d},
b70:function b70(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cEZ:function cEZ(d){this.a=d},
aI2:function aI2(){},
bsR:function bsR(){},
aIR:function aIR(){},
bt6:function bt6(){},
aJ5:function aJ5(){},
bte:function bte(){},
Ei:function Ei(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
aaC:function aaC(d,e,f){this.a=d
this.b=e
this.c=f},
TG:function TG(d){this.a=d},
bgj:function bgj(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fb$=i
_.ku$=j
_.fD$=k
_.fc$=l
_.bq$=m
_.a5$=n
_.c=_.a=null},
e1k:function e1k(d,e){this.a=d
this.b=e},
e1J:function e1J(d){this.a=d},
e1y:function e1y(d){this.a=d},
e1p:function e1p(d){this.a=d},
e1z:function e1z(d,e){this.a=d
this.b=e},
e1A:function e1A(d){this.a=d},
e1o:function e1o(d){this.a=d},
e1w:function e1w(d){this.a=d},
e1x:function e1x(d){this.a=d},
e1v:function e1v(d){this.a=d},
e1B:function e1B(d,e){this.a=d
this.b=e},
e1u:function e1u(d,e){this.a=d
this.b=e},
e1C:function e1C(d,e){this.a=d
this.b=e},
e1t:function e1t(d,e){this.a=d
this.b=e},
e1D:function e1D(d,e){this.a=d
this.b=e},
e1s:function e1s(d,e){this.a=d
this.b=e},
e1E:function e1E(d){this.a=d},
e1r:function e1r(d,e){this.a=d
this.b=e},
e1F:function e1F(d){this.a=d},
e1q:function e1q(d){this.a=d},
e1G:function e1G(d){this.a=d},
e1n:function e1n(d){this.a=d},
e1H:function e1H(d){this.a=d},
e1m:function e1m(d){this.a=d},
e1I:function e1I(d){this.a=d},
e1l:function e1l(d){this.a=d},
be_:function be_(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
ab6:function ab6(d,e){this.a=d
this.b=e
this.c=-1000},
TL:function TL(d){this.a=d},
aB3:function aB3(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=!1
_.r=f
_.w=g
_.x=80
_.y="Pentatonic"
_.z="bell"
_.Q=!0
_.fb$=h
_.ku$=i
_.fD$=j
_.fc$=k
_.bq$=l
_.a5$=m
_.c=_.a=null},
e5e:function e5e(d,e){this.a=d
this.b=e},
e5f:function e5f(d,e,f){this.a=d
this.b=e
this.c=f},
e5m:function e5m(d){this.a=d},
e5l:function e5l(d){this.a=d},
e5n:function e5n(d,e){this.a=d
this.b=e},
e5o:function e5o(d){this.a=d},
e5k:function e5k(d){this.a=d},
e5p:function e5p(d){this.a=d},
e5j:function e5j(d,e){this.a=d
this.b=e},
e5q:function e5q(d,e){this.a=d
this.b=e},
e5i:function e5i(d,e){this.a=d
this.b=e},
e5r:function e5r(d,e){this.a=d
this.b=e},
e5h:function e5h(d,e){this.a=d
this.b=e},
e5s:function e5s(d){this.a=d},
e5t:function e5t(d){this.a=d},
e5g:function e5g(d){this.a=d},
e5u:function e5u(d){this.a=d},
bho:function bho(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aIP:function aIP(){},
bt4:function bt4(){},
aIQ:function aIQ(){},
bt5:function bt5(){},
eWL(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.H(e.j(0.4),B.r,1),s=x.p,r=C.a([C.D(C.d(d,w,w,w,w,w,w,D.a4q,w,w,w),1)],s)
if(f!=null)B.d.v(r,C.a([B.aa,f],s))
return C.p(w,C.B(r,B.m,w,B.e,B.j,0,w,w),B.h,w,w,new C.o(v,w,t,u,w,w,B.n),w,w,w,w,B.iE,w,w,1/0)},
hGo(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.S(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.K)(d),++u){t=d[u]
s=v.h(0,t)
v.m(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gH(j))return!1
for(j=j.gdH(j),j=j.gag(j);j.C();){s=j.gT(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.bU(d.length,0,!1,w)
q=d.length
p=J.dZ(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bD(0,new A.fda(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.uO.h(0,d[n]).a)return!1
m=C.eN([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.K)(j),++u){k=j[u]
if(m.G(0,k))l.push(k)}return m.a===d.length},
fG5(d){var w="TCAG",v=C.aI(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[B.a.cP(w,v[0])*16+B.a.cP(w,v[1])*4+B.a.cP(w,v[2])]},
rA:function rA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b5T:function b5T(d,e){this.a=d
this.b=e},
fda:function fda(d,e){this.a=d
this.b=e},
TJ:function TJ(d){this.a=d},
aB1:function aB1(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
e4J:function e4J(d){this.a=d},
e4I:function e4I(d,e){this.a=d
this.b=e},
e4v:function e4v(d,e){this.a=d
this.b=e},
e4p:function e4p(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e4q:function e4q(d){this.a=d},
e4u:function e4u(d,e){this.a=d
this.b=e},
e4t:function e4t(d,e){this.a=d
this.b=e},
e4r:function e4r(d){this.a=d},
e4s:function e4s(d,e){this.a=d
this.b=e},
e4D:function e4D(){},
e4E:function e4E(d){this.a=d},
e4C:function e4C(d){this.a=d},
e4F:function e4F(d){this.a=d},
e4B:function e4B(d){this.a=d},
e4z:function e4z(d){this.a=d},
e4A:function e4A(d,e){this.a=d
this.b=e},
e4w:function e4w(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4y:function e4y(d){this.a=d},
e4G:function e4G(d,e){this.a=d
this.b=e},
e4x:function e4x(d,e){this.a=d
this.b=e},
e4H:function e4H(d,e){this.a=d
this.b=e},
beG:function beG(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dh_:function dh_(d,e){this.a=d
this.b=e},
SH:function SH(d){this.a=d},
bfz:function bfz(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dGd:function dGd(d){this.a=d},
dGc:function dGc(d,e){this.a=d
this.b=e},
dG2:function dG2(d){this.a=d},
dG1:function dG1(){},
dG3:function dG3(d){this.a=d},
dG0:function dG0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dGb:function dGb(){},
dG6:function dG6(){},
dG7:function dG7(d,e){this.a=d
this.b=e},
dG5:function dG5(d,e){this.a=d
this.b=e},
dG8:function dG8(d){this.a=d},
dG4:function dG4(d){this.a=d},
dG9:function dG9(d,e){this.a=d
this.b=e},
dGa:function dGa(d,e){this.a=d
this.b=e},
SX:function SX(d){this.a=d},
aA9:function aA9(d,e,f,g,h){var _=this
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
dJ2:function dJ2(d){this.a=d},
dJ1:function dJ1(d,e){this.a=d
this.b=e},
dIQ:function dIQ(){},
dIP:function dIP(d,e){this.a=d
this.b=e},
dIR:function dIR(d){this.a=d},
dIV:function dIV(d){this.a=d},
dIU:function dIU(d,e){this.a=d
this.b=e},
dIW:function dIW(d){this.a=d},
dIT:function dIT(d,e){this.a=d
this.b=e},
dIX:function dIX(d){this.a=d},
dIS:function dIS(d,e){this.a=d
this.b=e},
dIY:function dIY(d){this.a=d},
dIZ:function dIZ(d){this.a=d},
dJ_:function dJ_(d){this.a=d},
dJ0:function dJ0(d){this.a=d},
ba2:function ba2(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
cYt:function cYt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cYv:function cYv(d,e,f){this.a=d
this.b=e
this.c=f},
cYu:function cYu(d,e){this.a=d
this.b=e},
aIf:function aIf(){},
bw_(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.H(e.j(0.4),B.r,1),s=x.p,r=C.a([C.D(C.d(d,w,w,w,w,w,w,D.a4q,w,w,w),1)],s)
if(f!=null)B.d.v(r,C.a([B.aa,f],s))
return C.p(w,C.B(r,B.m,w,B.e,B.j,0,w,w),B.h,w,w,new C.o(v,w,t,u,w,w,B.n),w,w,w,w,B.iE,w,w,1/0)},
f86(d,e,f,g,h){var w,v,u=null,t=C.j1(u,u,u,u,C.dr(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),e),B.a6,B.cn,u,B.eM,B.cm)
t.fE()
w=t.b
v=w.c
w=w.a.c
w=f.aD(0,new C.v(v/2,w.gbe(w)/2))
t.a6(d,w)},
hDy(){var w,v,u,t,s,r,q,p,o=new C.f5()
o.dZ(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+B.o.ak(t,4)
r=C.aZ(v)
q=C.a([],u)
while(q.length<s){p=1+o.aA(5)
if(r.G(0,p))q.push(new C.z(p,1+o.aA(2+B.o.ak(t,3))))}B.d.aZ(q,new A.f91())
w.push(new A.aOw(q))}return w},
a_w(d,e){var w,v,u,t
for(w=new C.Vd(d),v="";w.C();){u=C.jv(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jv(65+B.o.J(B.o.J(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
hPR(d,e){var w,v,u,t,s,r,q,p=C.ad("[^A-Z]",!0,!1,!1,!1),o=C.aI(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.Vd(d),v=0,u="";w.C();){t=C.jv(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=B.o.J(v,p)
u+=C.jv(65+B.o.J(B.o.J(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aOw:function aOw(d){this.a=d},
bBT:function bBT(){},
f91:function f91(){},
Sc:function Sc(d){this.a=d},
bfg:function bfg(d,e,f,g,h,i){var _=this
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
duu:function duu(){},
duH:function duH(d){this.a=d},
duG:function duG(d,e,f){this.a=d
this.b=e
this.c=f},
duI:function duI(d){this.a=d},
duF:function duF(d,e){this.a=d
this.b=e},
duv:function duv(d,e){this.a=d
this.b=e},
duA:function duA(){},
duB:function duB(d){this.a=d},
duz:function duz(d){this.a=d},
duC:function duC(d,e){this.a=d
this.b=e},
duy:function duy(d,e){this.a=d
this.b=e},
duD:function duD(d,e){this.a=d
this.b=e},
dux:function dux(d,e){this.a=d
this.b=e},
duE:function duE(d){this.a=d},
duw:function duw(d){this.a=d},
b64:function b64(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cxw:function cxw(d,e){this.a=d
this.b=e},
Ta:function Ta(d){this.a=d},
bfL:function bfL(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bq$=g
_.a5$=h
_.c=_.a=null},
dMQ:function dMQ(d){this.a=d},
dMP:function dMP(d,e){this.a=d
this.b=e},
dMR:function dMR(d){this.a=d},
dMO:function dMO(d,e){this.a=d
this.b=e},
dMG:function dMG(d,e,f){this.a=d
this.b=e
this.c=f},
dMK:function dMK(d){this.a=d},
dMJ:function dMJ(d){this.a=d},
dML:function dML(d,e){this.a=d
this.b=e},
dMI:function dMI(d,e){this.a=d
this.b=e},
dMM:function dMM(d){this.a=d},
dMH:function dMH(d,e){this.a=d
this.b=e},
dMN:function dMN(d,e){this.a=d
this.b=e},
bbv:function bbv(d,e,f){this.b=d
this.c=e
this.a=f},
d4r:function d4r(d,e){this.a=d
this.b=e},
d4s:function d4s(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Sl:function Sl(d){this.a=d},
bft:function bft(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dyG:function dyG(d){this.a=d},
dyF:function dyF(d,e){this.a=d
this.b=e},
dyo:function dyo(){},
dyx:function dyx(d){this.a=d},
dyw:function dyw(){},
dyy:function dyy(d){this.a=d},
dyv:function dyv(){},
dyz:function dyz(d){this.a=d},
dyu:function dyu(d){this.a=d},
dyA:function dyA(d){this.a=d},
dyt:function dyt(d){this.a=d},
dyB:function dyB(d){this.a=d},
dys:function dys(d){this.a=d},
dyC:function dyC(d,e){this.a=d
this.b=e},
dyr:function dyr(d,e){this.a=d
this.b=e},
dyD:function dyD(d){this.a=d},
dyq:function dyq(d,e){this.a=d
this.b=e},
dyE:function dyE(d){this.a=d},
dyp:function dyp(d,e){this.a=d
this.b=e},
aHV:function aHV(){},
aIn:function aIn(){},
h4s(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aD(0,e).gcj()*0.1
return new C.v((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
fyD(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new A.a2c(w,v,u,B.cA,C.S(x.N,x.y))},
hbX(d,e,f){var w=d.c,v=e===0?-42:42
return new C.v(w*f.a+v,d.d*f.b)},
mU:function mU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ve:function ve(d,e,f,g){var _=this
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
a7X:function a7X(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
a90:function a90(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2c:function a2c(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.w=0
_.x=h},
bHe:function bHe(){},
bHo:function bHo(d){this.a=d},
bHk:function bHk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bHq:function bHq(d){this.a=d},
bHr:function bHr(d){this.a=d},
bHp:function bHp(d){this.a=d},
bHs:function bHs(d,e,f){this.a=d
this.b=e
this.c=f},
bHt:function bHt(d){this.a=d},
bHg:function bHg(d){this.a=d},
bHh:function bHh(d){this.a=d},
bHf:function bHf(d){this.a=d},
bHi:function bHi(d,e,f){this.a=d
this.b=e
this.c=f},
bHj:function bHj(d){this.a=d},
bHn:function bHn(d){this.a=d},
bHm:function bHm(d){this.a=d},
bHl:function bHl(d){this.a=d},
aOG:function aOG(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bCG:function bCG(){},
bCH:function bCH(){},
q_:function q_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cf3:function cf3(d){this.a=d},
fKX(d,e,f,g,h){return new A.ag2(d,h,e,g,f)},
WC(d,e,f){return new A.b72(d,e,f)},
ag2:function ag2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.f=f
_.w=g
_.a=h},
ag3:function ag3(d,e,f,g,h,i,j,k){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.fb$=f
_.ku$=g
_.fD$=h
_.fc$=i
_.bq$=j
_.a5$=k
_.c=_.a=null},
bCD:function bCD(){},
bCE:function bCE(){},
bCc:function bCc(){},
bCF:function bCF(d,e){this.a=d
this.b=e},
bCB:function bCB(d,e,f){this.a=d
this.b=e
this.c=f},
bCx:function bCx(d){this.a=d},
bCu:function bCu(d,e,f){this.a=d
this.b=e
this.c=f},
bCv:function bCv(d,e){this.a=d
this.b=e},
bCy:function bCy(d){this.a=d},
bCs:function bCs(d,e){this.a=d
this.b=e},
bCt:function bCt(d,e){this.a=d
this.b=e},
bCw:function bCw(d){this.a=d},
bCz:function bCz(d){this.a=d},
bCq:function bCq(d,e){this.a=d
this.b=e},
bCr:function bCr(d,e){this.a=d
this.b=e},
bCA:function bCA(d){this.a=d},
bCC:function bCC(d,e){this.a=d
this.b=e},
bCn:function bCn(d,e){this.a=d
this.b=e},
bCp:function bCp(d,e){this.a=d
this.b=e},
bCo:function bCo(d,e){this.a=d
this.b=e},
bCg:function bCg(d,e){this.a=d
this.b=e},
bCh:function bCh(d){this.a=d},
bCf:function bCf(d){this.a=d},
bCi:function bCi(d,e,f){this.a=d
this.b=e
this.c=f},
bCe:function bCe(d,e){this.a=d
this.b=e},
bCj:function bCj(d,e,f){this.a=d
this.b=e
this.c=f},
bCd:function bCd(d,e){this.a=d
this.b=e},
bCk:function bCk(d){this.a=d},
bCl:function bCl(d){this.a=d},
bCm:function bCm(d){this.a=d},
b72:function b72(d,e,f){this.a=d
this.b=e
this.c=f},
f_t:function f_t(){},
f_u:function f_u(){},
f_v:function f_v(){},
f_j:function f_j(){},
f_w:function f_w(){},
f_i:function f_i(){},
f_x:function f_x(){},
f_n:function f_n(){},
f_h:function f_h(){},
f_o:function f_o(){},
f_g:function f_g(){},
f_p:function f_p(){},
f_f:function f_f(){},
SY:function SY(d){this.a=d},
aAa:function aAa(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.w=0
_.c=_.a=null},
dJ8:function dJ8(){},
dJ7:function dJ7(d){this.a=d},
dJ6:function dJ6(d,e,f){this.a=d
this.b=e
this.c=f},
dJ5:function dJ5(d,e){this.a=d
this.b=e},
dJa:function dJa(d,e){this.a=d
this.b=e},
dJ9:function dJ9(d,e){this.a=d
this.b=e},
dJb:function dJb(d){this.a=d},
dJc:function dJc(d){this.a=d},
auG:function auG(){},
b6h:function b6h(){},
f3G(d,e,f,g){var w=null,v=C.m(24),u=C.H(f.j(0.6),B.r,1)
return C.as(C.p(w,C.u(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.ar,C.d(e,w,w,w,w,w,w,B.Hg,B.L,w,w),B.ay,C.cb(B.fA,g,B.bw,0,8)],x.p),B.m,w,B.e,B.R,0,B.p),B.h,w,w,new C.o(D.T2,w,u,v,w,w,B.n),w,w,w,B.em,B.a8,w,w,w),w,w,w)},
fGz(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.f5()
b4.dZ(b5*977+13)
w=B.o.D(1+B.o.ak(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aA(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.S(u,t)
m=w
l=0
k=K.pr
j=!0
i=0
for(;;){if(!(j&&i<12))break
A:{++i
h=2+b4.aA(4)
for(g=k.a,f=k.b,e=0;e<h;r=a0,l=d){d=l+g
a0=r+f
if(d<0||a0<0||d>=7||a0>=7){e=99
break}a1=a0*7+d
if(B.d.q(p,a1)||a1===q){j=!1
break}p.push(a1);++e}if(!j||e>=99||m===0)break
a2=b4.he()?new C.z(f,-g):new C.z(-f,g)
a3=new C.z(-f,-g).A(0,a2)
a4=l+a2.a
a5=r+a2.b
if(a4<0||a5<0||a4>=7||a5>=7)break A
o.push(r*7+l);--m
g=B.d.gai(o)
n.m(0,g,a3?"/":"\\")
k=a2}}if(!j||o.length<w||p.length<5)continue
g=C.a([],v)
for(f=p.length,a6=0;a6<p.length;p.length===f||(0,C.K)(p),++a6){a7=p[a6]
if(!B.d.q(o,a7))g.push(a7)}if(g.length<3)continue
a8=B.o.D(2+B.o.ak(b5,8),2,4)
a9=C.eN([B.d.gai(g)],u)
B.d.fv(g,b4)
for(v=g.length,a6=0;a6<g.length;g.length===v||(0,C.K)(g),++a6){a7=g[a6]
if(a9.a>=a8)break
a9.G(0,a7)}b0=C.aZ(u)
b1=3+B.o.ak(b5,3)
v=q+1
b2=0
for(;;){if(b0.a<b1){b3=b2+1
g=b2<200
b2=b3}else g=!1
if(!g)break
B:{a7=b4.aA(49)
if(B.d.q(p,a7)||a7===q||a9.q(0,a7)||B.d.q(o,a7))break B
if(a7===v)break B
b0.G(0,a7)}}v=b5>=10?1:0
return new A.aSY(b0,a9,C.S(u,t),q,K.pr,w+v)}return new A.aSY(C.aZ(u),C.eN([25],u),C.S(u,t),21,K.pr,1)},
h4n(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aZ(x.S),n=d.e,m=B.o.J(n,7),l=B.o.ak(n,7),k=d.f
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
if(q==="/")k=new C.z(-s,-t)
if(q==="\\")k=new C.z(k.b,k.a)}return new C.bkn(p,o)},
h_O(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aSY:function aSY(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
Tt:function Tt(d){this.a=d},
bg6:function bg6(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.fb$=g
_.ku$=h
_.fD$=i
_.fc$=j
_.bq$=k
_.a5$=l
_.c=_.a=null},
dY8:function dY8(d){this.a=d},
dY7:function dY7(d,e){this.a=d
this.b=e},
dY9:function dY9(){},
dXZ:function dXZ(d,e){this.a=d
this.b=e},
dY_:function dY_(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dY2:function dY2(d,e){this.a=d
this.b=e},
dY0:function dY0(d){this.a=d},
dY1:function dY1(d){this.a=d},
dY3:function dY3(d){this.a=d},
dY4:function dY4(d){this.a=d},
dY5:function dY5(d){this.a=d},
dY6:function dY6(d,e){this.a=d
this.b=e},
bda:function bda(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
d9f:function d9f(d,e,f){this.a=d
this.b=e
this.c=f},
d9i:function d9i(d,e,f){this.a=d
this.b=e
this.c=f},
d9g:function d9g(d){this.a=d},
d9h:function d9h(d){this.a=d},
Tv:function Tv(d){this.a=d},
aAO:function aAO(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.fb$=g
_.ku$=h
_.fD$=i
_.fc$=j
_.bq$=k
_.a5$=l
_.c=_.a=null},
dYr:function dYr(d){this.a=d},
dYq:function dYq(d,e){this.a=d
this.b=e},
dYs:function dYs(){},
dYc:function dYc(){},
dYl:function dYl(d,e){this.a=d
this.b=e},
dYi:function dYi(d){this.a=d},
dYe:function dYe(d){this.a=d},
dYj:function dYj(d){this.a=d},
dYk:function dYk(d){this.a=d},
dYd:function dYd(d){this.a=d},
dYm:function dYm(d){this.a=d},
dYh:function dYh(d,e){this.a=d
this.b=e},
dYn:function dYn(d){this.a=d},
dYg:function dYg(d,e){this.a=d
this.b=e},
dYo:function dYo(d){this.a=d},
dYf:function dYf(d,e){this.a=d
this.b=e},
dYp:function dYp(d){this.a=d},
bdp:function bdp(d,e){this.b=d
this.a=e},
aIE:function aIE(){},
bsY:function bsY(){},
aIF:function aIF(){},
bsZ:function bsZ(){},
ZC(d,e,f,g,h,i){return new A.bpQ(d,e,f,g,h,i)},
bpQ:function bpQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f0b:function f0b(){},
f0c:function f0c(){},
f0d:function f0d(){},
f0e:function f0e(){},
f0f:function f0f(){},
f0g:function f0g(){},
f0h:function f0h(){},
f0i:function f0i(){},
a61:function a61(d){this.a=d},
c9T:function c9T(d){this.a=d},
c9U:function c9U(){},
c9S:function c9S(d,e){this.a=d
this.b=e},
c9R:function c9R(d){this.a=d},
Uj:function Uj(d){this.a=d},
aBB:function aBB(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.fb$=f
_.ku$=g
_.fD$=h
_.fc$=i
_.bq$=j
_.a5$=k
_.c=_.a=null},
etH:function etH(d){this.a=d},
etD:function etD(d){this.a=d},
etC:function etC(d,e){this.a=d
this.b=e},
etF:function etF(d,e){this.a=d
this.b=e},
etE:function etE(d,e){this.a=d
this.b=e},
etG:function etG(d){this.a=d},
bra:function bra(d,e,f){this.b=d
this.c=e
this.a=f},
T4:function T4(d){this.a=d},
bfG:function bfG(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.fb$=d
_.ku$=e
_.fD$=f
_.fc$=g
_.bq$=h
_.a5$=i
_.c=_.a=null},
dL8:function dL8(){},
dL9:function dL9(){},
dL3:function dL3(d,e){this.a=d
this.b=e},
dL5:function dL5(d,e){this.a=d
this.b=e},
dL6:function dL6(d){this.a=d},
dL4:function dL4(d){this.a=d},
dL7:function dL7(d){this.a=d},
bm6:function bm6(d,e,f){this.b=d
this.c=e
this.a=f},
Si:function Si(d){this.a=d},
bfl:function bfl(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.fb$=d
_.ku$=e
_.fD$=f
_.fc$=g
_.bq$=h
_.a5$=i
_.c=_.a=null},
dx6:function dx6(){},
dx7:function dx7(){},
dx1:function dx1(){},
dx4:function dx4(d,e){this.a=d
this.b=e},
dx3:function dx3(d,e){this.a=d
this.b=e},
dx5:function dx5(d){this.a=d},
dx2:function dx2(d){this.a=d},
aEX:function aEX(d,e,f){this.a=d
this.b=e
this.c=f},
SW:function SW(d){this.a=d},
bfA:function bfA(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dIF:function dIF(d,e){this.a=d
this.b=e},
dIG:function dIG(d){this.a=d},
dIE:function dIE(d,e){this.a=d
this.b=e},
dIH:function dIH(d){this.a=d},
dID:function dID(d,e){this.a=d
this.b=e},
dII:function dII(d){this.a=d},
dIC:function dIC(d,e){this.a=d
this.b=e},
dIJ:function dIJ(d,e){this.a=d
this.b=e},
dIB:function dIB(d,e){this.a=d
this.b=e},
dIK:function dIK(d){this.a=d},
dIA:function dIA(d,e){this.a=d
this.b=e},
dIL:function dIL(d){this.a=d},
dIz:function dIz(d){this.a=d},
dIM:function dIM(d){this.a=d},
dIy:function dIy(d){this.a=d},
dIN:function dIN(d){this.a=d},
dIO:function dIO(d){this.a=d},
dIx:function dIx(d){this.a=d},
bhB:function bhB(d,e,f){this.b=d
this.c=e
this.a=f},
TH:function TH(d){this.a=d},
aAY:function aAY(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
e2z:function e2z(d,e){this.a=d
this.b=e},
e2A:function e2A(d,e,f){this.a=d
this.b=e
this.c=f},
e2y:function e2y(d,e,f){this.a=d
this.b=e
this.c=f},
e2B:function e2B(d){this.a=d},
e2x:function e2x(d){this.a=d},
e2F:function e2F(d){this.a=d},
e2E:function e2E(d,e){this.a=d
this.b=e},
e2D:function e2D(d,e){this.a=d
this.b=e},
e2G:function e2G(d,e){this.a=d
this.b=e},
e2C:function e2C(d,e){this.a=d
this.b=e},
e2H:function e2H(d){this.a=d},
TT:function TT(d){this.a=d},
aBg:function aBg(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eb3:function eb3(d){this.a=d},
eb4:function eb4(d){this.a=d},
eb1:function eb1(d,e){this.a=d
this.b=e},
eb2:function eb2(d){this.a=d},
eb0:function eb0(d){this.a=d},
eb5:function eb5(d){this.a=d},
eb6:function eb6(d){this.a=d},
eb7:function eb7(d){this.a=d},
eb8:function eb8(d,e){this.a=d
this.b=e},
Ud:function Ud(d){this.a=d},
bgO:function bgO(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
epl:function epl(){},
epu:function epu(){},
epq:function epq(d){this.a=d},
epp:function epp(){},
epr:function epr(d,e){this.a=d
this.b=e},
epo:function epo(d,e){this.a=d
this.b=e},
eps:function eps(d){this.a=d},
epn:function epn(d,e){this.a=d
this.b=e},
ept:function ept(d){this.a=d},
epm:function epm(d){this.a=d},
TF:function TF(d){this.a=d},
bgh:function bgh(d,e,f,g,h,i,j,k){var _=this
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
_.fb$=f
_.ku$=g
_.fD$=h
_.fc$=i
_.bq$=j
_.a5$=k
_.c=_.a=null},
e1e:function e1e(){},
e1f:function e1f(){},
e17:function e17(d){this.a=d},
e16:function e16(d){this.a=d},
e18:function e18(d){this.a=d},
e15:function e15(d){this.a=d},
e19:function e19(d){this.a=d},
e14:function e14(d){this.a=d},
e1a:function e1a(d,e){this.a=d
this.b=e},
e13:function e13(d,e){this.a=d
this.b=e},
e1b:function e1b(d){this.a=d},
e12:function e12(d,e){this.a=d
this.b=e},
e1c:function e1c(d){this.a=d},
e11:function e11(d,e){this.a=d
this.b=e},
e1d:function e1d(d){this.a=d},
e10:function e10(d,e){this.a=d
this.b=e},
b9o:function b9o(d,e,f){this.c=d
this.d=e
this.a=f},
aI0:function aI0(){},
bsQ:function bsQ(){},
aIi:function aIi(){},
bsU:function bsU(){},
aIN:function aIN(){},
bt3:function bt3(){},
aJf:function aJf(){},
btf:function btf(){},
je(d,e,f,g,h,i){return new A.b34(h,d,f,g,i,e,null)},
hPm(d,e,f,g){var w=null
return C.ce(w,w,!0,w,new A.fwt(g,e,f),d,w,!0,!0,x.H)},
ho(d,e,f,g,h,i,j){return new A.asP(f,j,i,h,g,d,e,null)},
qi(d,e,f){return A.hPu(d,e,f)},
hPu(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qi=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aS.ae$.x.h(0,e)
n=n==null?null:n.gb3()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.lP(2),$async$qi)
case 7:q=h
w=8
return C.b(q.hf(B.fI),$async$qi)
case 8:p=h
if(p==null){w=1
break}o=J.f1(B.dz.gaL(p))
w=9
return C.b(A.ck3(C.a([A.fUr(o,"image/png",f+".png")],x.C),"Made in NGMY Core Protocol"),$async$qi)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.F(x.U).f.P(D.aI1)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qi,v)},
hlK(b4,b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=B.o.ak(22050*b5,1000),b1=b0*2,b2=new DataView(new ArrayBuffer(44+b1)),b3=new A.c9N(b2)
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
w=new C.f5()
w.dZ(3)
v=3
u=0.006
t=!1
s=0
switch(b8){case"piano":r=D.cCh
q=D.cGY
v=3.4
break
case"organ":r=D.cG_
q=D.cTt
u=0.02
t=!0
break
case"bell":r=D.cyk
q=D.cxk
v=2.4
break
case"pluck":r=D.cCg
q=D.cjv
v=7
break
case"synth":r=D.cUh
q=D.cVQ
u=0.012
t=!0
break
case"flute":r=D.cZs
q=D.bVh
u=0.07
t=!0
s=0.035
break
default:r=D.ajL
q=D.ajL}b1=r.length
p=C.bU(b1,0,!1,x.i)
for(o="saw"===b6,n="tri"===b6,m="noise"===b6,l="square"===b6,k=b8.length!==0,j=-v,i=j*0.12,h=s>0,g=b8!=="bell",f=b8!=="piano",e=b8==="pluck",d=0,a0=0;a0<b0;++a0){a1=a0/22050
a2=1-a0/b0
a3=b4*(1+b7*a2)
if(k){for(a2=6.283185307179586*a3,a4=j*a1,a5=0,a6=0;a6<b1;++a6){a7=p[a6]+a2*q[a6]/22050
p[a6]=a7
a8=!g||!f||e?Math.exp(a4*(1+a6*0.35)):1
a5+=Math.sin(a7)*r[a6]*a8}a5/=1.9
if(h)a5+=(w.af()*2-1)*s
a9=Math.min(1,a1/u)*Math.min(1,(b0-a0)/1984.5)
a5*=t?a9:a9*Math.exp(i*a1)}else{d+=6.283185307179586*a3/22050
A:{if(l){a4=Math.sin(d)>=0?0.6:-0.6
break A}if(m){a4=(w.af()*2-1)*0.8
break A}if(n){a4=0.6366197723675814*Math.asin(Math.sin(d))
break A}if(o){a4=B.k.J(d/6.283185307179586,1)*1.2-0.6
break A}a4=Math.sin(d)
break A}a5=a4*(Math.min(1,a0/120)*Math.pow(a2,1.6))}b2.setInt16(44+a0*2,B.o.D(B.k.U(a5*0.8*32e3),-32768,32767),!0)}return J.f1(B.dz.gaL(b2))},
e1(d,e,f,g,h,i){return A.hlL(d,e,f,g,h,i)},
hlL(d,e,f,g,h,i){var w=0,v=C.j(x.H),u=1,t=[],s,r,q,p,o,n
var $async$e1=C.e(function(j,k){if(j===1){t.push(k)
w=u}for(;;)switch(w){case 0:u=3
s=""+B.k.U(d)+"|"+f+"|"+i+"|"+C.t(g)+"|"+e
r=$.hlJ.ci(0,s,new A.c9P(d,f,i,g,e))
if($.c9M.length<12){p=C.afQ()
p.Lk(B.aG7)
$.c9M.push(p)}p=$.fRK
$.fRK=p+1
q=$.c9M[B.o.J(p,$.c9M.length)]
w=6
return C.b(J.h96(q,new C.a11(r,null),h),$async$e1)
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
l_(d,e,f,g){var w,v=$.c9Q
if(v==="music")return A.e1(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return A.e1(261.63*v,w,f,0,g,"sine")}return A.v9(v,e,f,g)},
v9(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,B.o.D(e,-12,36)/12),s=Math.min(f,260)
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
At(d,e,f,g){var w,v,u,t,s,r,q,p=$.c9Q
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.K)(e),++w)A.l_(d,e[w],f,g)
return}for(p=C.dc(e,0,C.dJ(4,"count",x.S),C.T(e).c),v=p.$ti,p=new C.bR(p,p.gH(0),v.k("bR<ai.E>")),u=x.H,v=v.k("ai.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)A.l_(d,s,f,g)
else C.bK(new C.b7(1000*q),new A.c9O(d,s,f,g),u)}},
a60(d,e){var w="sine",v="noise"
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
yq(d){return A.hl_(d)},
hl_(d){var w=0,v=C.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l
var $async$yq=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.aw(),$async$yq)
case 7:r=f
q=C.aR(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=C.S(x.N,x.z)
w=1
break}p=B.Q.aE(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?C.Z(p,o,n):C.S(o,n)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=C.S(x.N,x.z)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$yq,v)},
v6(d,e){return A.hl0(d,e)},
hl0(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$v6=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aw(),$async$v6)
case 6:s=g
w=7
return C.b(s.an("String","ngmy_play_progress_v1_"+d,B.Q.aj(e,null)),$async$v6)
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
return C.i($async$v6,v)},
b34:function b34(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
clZ:function clZ(d){this.a=d},
cm_:function cm_(d,e){this.a=d
this.b=e},
fwt:function fwt(d,e,f){this.a=d
this.b=e
this.c=f},
fws:function fws(d){this.a=d},
dx:function dx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
clV:function clV(d){this.a=d},
eE:function eE(d,e,f){this.c=d
this.d=e
this.a=f},
asP:function asP(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
fe:function fe(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
clU:function clU(d){this.a=d},
DR:function DR(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cm0:function cm0(d){this.a=d},
m9:function m9(){},
clW:function clW(d,e,f){this.a=d
this.b=e
this.c=f},
clY:function clY(d){this.a=d},
clX:function clX(){},
c9N:function c9N(d){this.a=d},
c9P:function c9P(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c9O:function c9O(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cov(){var w=0,v=C.j(x.cL),u,t
var $async$cov=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=A
w=3
return C.b($.tr().bao("assets/data/world110.json"),$async$cov)
case 3:u=t.hpv(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cov,v)},
hpv(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.a,a0=d.a(B.Q.aE(0,a2,null)),a1=C.a([],x.B)
for(w=J.aU(a0),v=x.n,u=x.b,t=x.h,s=x.gO;w.C();){r=t.a(w.gT(w))
q=C.a([],s)
for(p=J.a6(r),o=J.aU(d.a(p.h(r,"r")));o.C();){n=o.gT(o)
m=C.a([],u)
for(l=J.aU(d.a(n));l.C();){k=l.gT(l)
j=J.a6(k)
m.push(C.a([C.f8(j.h(k,0)),C.f8(j.h(k,1))],v))}q.push(m)}o=C.cI(p.h(r,"n"))
m=C.cI(p.h(r,"a"))
l=C.cI(p.h(r,"ct"))
j=C.cI(p.h(r,"sr"))
i=C.f8(p.h(r,"pop"))
h=C.f8(p.h(r,"gdp"))
g=C.cI(p.h(r,"inc"))
f=C.ad("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aN1(g,f,"",0)
f=C.f8(J.q(p.h(r,"c"),0))
p=C.f8(J.q(p.h(r,"c"),1))
e=new A.a8H(o,m,l,j,i,h,g,f,p,q)
e.bs9(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new A.a8I(a1)},
faT(d){if(d>=1e12)return B.k.ab(d/1e12,1)+" trillion"
if(d>=1e9)return B.k.ab(d/1e9,2)+" billion"
if(d>=1e6)return B.k.ab(d/1e6,1)+" million"
if(d>=1000)return B.k.ab(d/1000,1)+" thousand"
return B.k.ab(d,0)},
Fe(d){var w,v,u,t=B.o.u(B.k.U(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&B.o.J(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
a8H:function a8H(d,e,f,g,h,i,j,k,l,m){var _=this
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
a8I:function a8I(d){this.a=d},
uk:function uk(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
Ni:function Ni(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
x6:function x6(d,e,f){this.a=d
this.b=e
this.c=f},
Nh:function Nh(d){this.a=0
this.b=d
this.c=0},
hro(d,e,f){return $.hrp.ci(0,d+"|"+C.t(e)+"|"+f.l(),new A.d5f(d,e,f))},
Tb:function Tb(d){this.a=d},
aAl:function aAl(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fb$=j
_.ku$=k
_.fD$=l
_.fc$=m
_.bq$=n
_.a5$=o
_.c=_.a=null},
dNR:function dNR(d){this.a=d},
dNQ:function dNQ(d,e){this.a=d
this.b=e},
dNj:function dNj(d){this.a=d},
dNh:function dNh(d){this.a=d},
dNi:function dNi(d,e,f){this.a=d
this.b=e
this.c=f},
dNg:function dNg(d){this.a=d},
dNf:function dNf(){},
dNe:function dNe(d){this.a=d},
dNC:function dNC(d,e){this.a=d
this.b=e},
dND:function dND(d,e){this.a=d
this.b=e},
dNr:function dNr(d){this.a=d},
dNs:function dNs(d){this.a=d},
dNq:function dNq(d){this.a=d},
dNt:function dNt(d){this.a=d},
dNk:function dNk(d,e){this.a=d
this.b=e},
dNl:function dNl(d){this.a=d},
dNE:function dNE(d,e){this.a=d
this.b=e},
dNp:function dNp(d,e){this.a=d
this.b=e},
dNI:function dNI(d){this.a=d},
dNB:function dNB(d){this.a=d},
dNJ:function dNJ(d,e){this.a=d
this.b=e},
dNA:function dNA(d,e){this.a=d
this.b=e},
dNK:function dNK(d){this.a=d},
dNz:function dNz(d,e){this.a=d
this.b=e},
dNL:function dNL(d){this.a=d},
dNy:function dNy(d,e){this.a=d
this.b=e},
dNM:function dNM(d){this.a=d},
dNx:function dNx(d,e){this.a=d
this.b=e},
dNN:function dNN(d){this.a=d},
dNw:function dNw(d,e){this.a=d
this.b=e},
dNO:function dNO(d){this.a=d},
dNv:function dNv(d){this.a=d},
dNP:function dNP(d){this.a=d},
dNu:function dNu(d){this.a=d},
dNF:function dNF(d){this.a=d},
dNo:function dNo(d){this.a=d},
dNG:function dNG(d){this.a=d},
dNn:function dNn(d){this.a=d},
dNH:function dNH(d){this.a=d},
dNm:function dNm(d){this.a=d},
dNd:function dNd(){},
dNc:function dNc(d){this.a=d},
dNb:function dNb(d){this.a=d},
bbC:function bbC(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d5f:function d5f(d,e,f){this.a=d
this.b=e
this.c=f},
d5g:function d5g(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aIo:function aIo(){},
aIp:function aIp(){},
acH(d,e,f,g,h){return new A.bpL(d,e,f,g,h)},
bpL:function bpL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f04:function f04(){},
f05:function f05(){},
f06:function f06(){},
f07:function f07(){},
f08:function f08(){},
f09:function f09(){},
f0a:function f0a(){},
Uf:function Uf(d){this.a=d},
bgR:function bgR(){this.d=$
this.c=this.a=null},
epS:function epS(d){this.a=d},
epT:function epT(d){this.a=d},
epR:function epR(d){this.a=d},
epU:function epU(){},
epQ:function epQ(d,e){this.a=d
this.b=e},
epP:function epP(d){this.a=d},
hrQ(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.f5()
v.dZ(w)
t.push(v.af()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.f5()
v.dZ(w+900)
u.push(2.2+v.af())}return new A.bgE(new C.cn(null,x.A),new A.Nh(B.cA),B.J,B.as,t,u,$,B.bu,0,C.a([],x.X),null,null)},
hrS(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hrR(d){return 1.5+1.6*Math.log(d.d/1000+1)},
fVD(d,e,f){return $.hsr.ci(0,d+"|"+C.t(e)+"|"+f.l(),new A.eJG(d,e,f))},
U1:function U1(d){this.a=d},
bgE:function bgE(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fb$=j
_.ku$=k
_.fD$=l
_.fc$=m
_.bq$=n
_.a5$=o
_.c=_.a=null},
eih:function eih(d,e){this.a=d
this.b=e},
eis:function eis(d,e){this.a=d
this.b=e},
eit:function eit(d,e){this.a=d
this.b=e},
eip:function eip(d){this.a=d},
eiq:function eiq(d){this.a=d},
eir:function eir(d){this.a=d},
eiu:function eiu(d){this.a=d},
eio:function eio(d){this.a=d},
eiv:function eiv(d,e){this.a=d
this.b=e},
eiw:function eiw(d){this.a=d},
ein:function ein(d,e){this.a=d
this.b=e},
eix:function eix(d){this.a=d},
eim:function eim(d,e){this.a=d
this.b=e},
eiy:function eiy(d){this.a=d},
eil:function eil(d){this.a=d},
eiz:function eiz(d){this.a=d},
eik:function eik(d){this.a=d},
eiA:function eiA(d){this.a=d},
eij:function eij(d){this.a=d},
eiB:function eiB(d){this.a=d},
eii:function eii(d){this.a=d},
eig:function eig(){},
eif:function eif(){},
eie:function eie(d){this.a=d},
eid:function eid(d){this.a=d},
bnQ:function bnQ(d,e){this.b=d
this.a=e},
eJG:function eJG(d,e,f){this.a=d
this.b=e
this.c=f},
eJH:function eJH(){},
eJI:function eJI(){},
Tc:function Tc(d){this.a=d},
aAm:function aAm(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fb$=k
_.ku$=l
_.fD$=m
_.fc$=n
_.bq$=o
_.a5$=p
_.c=_.a=null},
dNV:function dNV(){},
dOn:function dOn(){},
dO9:function dO9(d,e){this.a=d
this.b=e},
dO0:function dO0(d,e){this.a=d
this.b=e},
dOa:function dOa(d){this.a=d},
dO_:function dO_(d){this.a=d},
dOb:function dOb(d){this.a=d},
dO8:function dO8(d){this.a=d},
dOf:function dOf(d){this.a=d},
dO7:function dO7(d){this.a=d},
dOg:function dOg(d){this.a=d},
dO6:function dO6(d,e){this.a=d
this.b=e},
dOh:function dOh(d){this.a=d},
dOi:function dOi(d){this.a=d},
dO5:function dO5(d,e){this.a=d
this.b=e},
dOj:function dOj(d){this.a=d},
dO4:function dO4(d,e){this.a=d
this.b=e},
dOk:function dOk(d){this.a=d},
dO3:function dO3(d,e){this.a=d
this.b=e},
dOl:function dOl(d){this.a=d},
dO2:function dO2(d,e){this.a=d
this.b=e},
dOm:function dOm(d){this.a=d},
dO1:function dO1(d){this.a=d},
dOc:function dOc(d){this.a=d},
dNZ:function dNZ(d){this.a=d},
dOd:function dOd(d){this.a=d},
dNY:function dNY(d){this.a=d},
dOe:function dOe(d){this.a=d},
dNX:function dNX(d){this.a=d},
dNU:function dNU(d){this.a=d},
dNT:function dNT(){},
dNW:function dNW(d,e){this.a=d
this.b=e},
dNS:function dNS(d){this.a=d},
b6S:function b6S(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
TU:function TU(d){this.a=d},
bgB:function bgB(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.fb$=e
_.ku$=f
_.fD$=g
_.fc$=h
_.bq$=i
_.a5$=j
_.c=_.a=null},
ebb:function ebb(d,e){this.a=d
this.b=e},
ebc:function ebc(d,e){this.a=d
this.b=e},
eba:function eba(d,e){this.a=d
this.b=e},
ebd:function ebd(d,e){this.a=d
this.b=e},
eb9:function eb9(d,e){this.a=d
this.b=e},
bno:function bno(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eHQ:function eHQ(d){this.a=d},
aIq:function aIq(){},
bsW:function bsW(){},
aIZ:function aIZ(){},
bt9:function bt9(){},
aJ1:function aJ1(){},
btb:function btb(){},
hrO(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.f5()
v.dZ(w)
v=v.af()
u=new C.f5()
u.dZ(w+500)
s.push(new C.v(v,u.af()))}return new A.bfk(new C.cn(null,x.A),new A.Nh(B.cA),t,B.as,s,$,B.bu,0,C.a([],x.X),null,null)},
NK:function NK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Sg:function Sg(d){this.a=d},
bfk:function bfk(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.fb$=i
_.ku$=j
_.fD$=k
_.fc$=l
_.bq$=m
_.a5$=n
_.c=_.a=null},
dwy:function dwy(){},
dwm:function dwm(){},
dwn:function dwn(d,e){this.a=d
this.b=e},
dwo:function dwo(d,e){this.a=d
this.b=e},
dwl:function dwl(d){this.a=d},
dwk:function dwk(d){this.a=d},
dwq:function dwq(d){this.a=d},
dwj:function dwj(d,e){this.a=d
this.b=e},
dwr:function dwr(d){this.a=d},
dwi:function dwi(d){this.a=d},
dws:function dws(d){this.a=d},
dwh:function dwh(d){this.a=d},
dwt:function dwt(d){this.a=d},
dwg:function dwg(d){this.a=d},
dwu:function dwu(d){this.a=d},
dwf:function dwf(d){this.a=d},
dwv:function dwv(d){this.a=d},
dwe:function dwe(d){this.a=d},
dww:function dww(d){this.a=d},
dwd:function dwd(d){this.a=d},
dwx:function dwx(d){this.a=d},
dwc:function dwc(d){this.a=d},
dwp:function dwp(d){this.a=d},
dwb:function dwb(d){this.a=d},
b6f:function b6f(d,e){this.b=d
this.a=e},
acl:function acl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
T8:function T8(d){this.a=d},
bfJ:function bfJ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.fb$=p
_.ku$=q
_.fD$=r
_.fc$=s
_.bq$=t
_.a5$=u
_.c=_.a=null},
dMs:function dMs(d){this.a=d},
dMi:function dMi(d,e){this.a=d
this.b=e},
dMj:function dMj(d,e){this.a=d
this.b=e},
dMh:function dMh(d,e){this.a=d
this.b=e},
dMk:function dMk(d){this.a=d},
dMg:function dMg(d){this.a=d},
dMl:function dMl(d){this.a=d},
dMf:function dMf(d,e){this.a=d
this.b=e},
dMm:function dMm(d){this.a=d},
dMe:function dMe(d,e){this.a=d
this.b=e},
dMn:function dMn(d){this.a=d},
dMd:function dMd(d,e){this.a=d
this.b=e},
dMo:function dMo(d){this.a=d},
dMc:function dMc(d,e){this.a=d
this.b=e},
dMp:function dMp(d){this.a=d},
dMb:function dMb(d){this.a=d},
dMq:function dMq(d){this.a=d},
dMa:function dMa(d){this.a=d},
dMr:function dMr(d){this.a=d},
dM9:function dM9(d){this.a=d},
bbs:function bbs(d,e){this.b=d
this.a=e},
d2o:function d2o(d){this.a=d},
TQ:function TQ(d){this.a=d},
bgA:function bgA(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.fb$=f
_.ku$=g
_.fD$=h
_.fc$=i
_.bq$=j
_.a5$=k
_.c=_.a=null},
eaS:function eaS(d,e){this.a=d
this.b=e},
eaT:function eaT(d){this.a=d},
eaR:function eaR(d){this.a=d},
eaU:function eaU(d){this.a=d},
eaQ:function eaQ(d){this.a=d},
eaV:function eaV(d){this.a=d},
eaP:function eaP(d){this.a=d},
eaW:function eaW(d){this.a=d},
eaO:function eaO(d){this.a=d},
eaX:function eaX(d){this.a=d},
eaN:function eaN(d,e){this.a=d
this.b=e},
eaY:function eaY(d){this.a=d},
eaM:function eaM(d,e){this.a=d
this.b=e},
eaZ:function eaZ(d){this.a=d},
eaL:function eaL(d,e){this.a=d
this.b=e},
eb_:function eb_(d){this.a=d},
eaK:function eaK(d,e){this.a=d
this.b=e},
bmG:function bmG(d,e){this.b=d
this.a=e},
aHY:function aHY(){},
bsP:function bsP(){},
aIl:function aIl(){},
bsV:function bsV(){},
aIY:function aIY(){},
bt8:function bt8(){},
fUr(d,e,f){var w,v
C.fH(0,0,!1)
w=new C.l2(e,f,$,null)
v=w.bBZ(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
ck3(d,e){var w=0,v=C.j(x.fA),u
var $async$ck3=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.fJ9().we(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$ck3,v)}},D,M,G,Q,T,A9,Y,Aa,Ab,Z,Ac,Ad
J=c[1]
C=c[0]
B=c[2]
U=c[101]
F=c[88]
N=c[96]
A_=c[103]
A0=c[109]
V=c[108]
K=c[113]
H=c[92]
A1=c[86]
A2=c[102]
S=c[100]
A3=c[64]
A4=c[81]
W=c[73]
O=c[84]
A5=c[115]
A6=c[107]
X=c[87]
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
G=c[39]
Q=c[97]
T=c[95]
A9=c[114]
Y=c[90]
Aa=c[98]
Ab=c[105]
Z=c[112]
Ac=c[94]
Ad=c[111]
A.ahf.prototype={}
A.To.prototype={
S(){var w=A.fyD()
return new A.bg4(w,C.S(x.N,x.i),new C.ao(B.aq,$.at()),C.a([],x.X),C.a([],x.L),C.m6(0,null,null))}}
A.bg4.prototype={
p(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
this.ch.p()
this.a2()},
LP(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$LP=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=B.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aS.ae$.d.c
if(s!=null)s.jc()
p.bG(0,B.c_)
t.n(new A.dV8(t))
t.a.toString
p=t.d
w=3
return C.b(A.bv9(A.htD(q,A.hED(p),o,t.ay)),$async$LP)
case 3:s=e
r=s==null?null:J.iK(s)
if(r==null||r.length===0||B.a.a_(r,"{"))r=A.hFZ(q,p,o)
if(t.c==null){w=1
break}t.n(new A.dV9(t,o,r))
$.aS.x1$.push(new A.dVa(t))
case 1:return C.h(u,v)}})
return C.i($async$LP,v)},
W3(d){return this.bSr(d)},
aRb(){return this.W3(null)},
bSr(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$W3=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=B.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aS.ae$.d.c
if(s!=null)s.jc()
t.f.saR(0,o)
t.n(new A.dVl(t))
A.e1(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=A
w=3
return C.b(A.bv9(A.hA1(o)),$async$W3)
case 3:r=n.a=m.hNF(f)
p.b=""
if(r!=null&&!A.hEE(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=A.hG_(o)
q=C.ad(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new A.ahf(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.n(new A.dVm(p,t))
t.bXy(p.a)
case 1:return C.h(u,v)}})
return C.i($async$W3,v)},
bXy(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
B.d.a8(w)
w=++m.as
v=m.d
B.d.a8(v.a)
B.d.a8(v.b)
m.e.a8(0)
m.n(new A.dVh(m))
t=d.d
s=C.S(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new A.dVf(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new A.dVi(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.K)(r),++u){p.$2(o,new A.dVj(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new A.dVk(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=B.bE.j(0.1),g=C.m(16),f=C.H(B.bE.j(0.35),B.r,1)
if(m.x)j=C.B(C.a([D.eo_,B.ba,C.D(C.d(m.Q,l,l,l,l,l,l,B.Qu,l,l,l),1)],x.p),B.m,l,B.e,B.j,0,l,l)
else if(k==null)j=D.eMm
else{w=C.D(C.d(k.a,l,l,l,l,l,l,A1.QQ,l,l,l),1)
v=x.p
w=C.a([C.B(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.eyc,l,l,l)],v),B.m,l,B.e,B.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.C(B.u7,C.d(u,l,l,l,l,l,l,D.eAK,l,l,l),l))
w.push(B.d4)
w.push(C.d(k.b,l,l,l,l,l,l,D.QX,l,l,l))
u=k.e
if(u.length!==0){t=B.aM.j(0.12)
s=C.m(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.eCZ,l,l,l),B.h,l,l,new C.o(t,l,l,s,l,l,B.n),l,l,l,B.iX,B.ch,l,l,l))}w.push(B.ar)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?B.c:B.aA
w.push(new C.C(B.JB,new C.cC(B.aY,B.e,B.j,B.F,l,B.p,l,0,C.a([new C.w(t,l,B.mV,l,l,l,l,l,l,l,l,l),B.bo,new C.bE(1,B.bn,new C.w(q,l,new C.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.K)(j),++p){o=j[p]
t=new C.b3(12,12)
s=new C.b3(12,12)
B.d.v(w,C.a([B.P,new C.bF(B.a7,l,l,C.p(l,new C.w(o.a,l,B.a3P,l,l,l,l,l,l,l,l,l),B.h,l,l,new C.o(B.bE.j(0.3),l,l,new C.bu(t,t,t,t),l,l,B.n),l,l,l,l,B.fF,l,l,l),l),B.au,C.p(l,new C.w(o.b,l,D.eI8,l,l,l,l,l,l,l,l,l),B.h,l,l,new C.o(B.c.j(0.07),l,l,new C.bu(s,s,s,s),l,l,B.n),l,l,l,l,B.bT,l,l,l)],v))}if(m.ax)w.push(D.dLv)
j=C.cg(C.u(w,B.F,l,B.e,B.j,0,B.p),B.q,m.ch,B.z,l,l,l,l,B.ah)}w=x.p
g=C.u(C.a([C.afw(C.p(l,j,B.h,l,new C.aW(0,1/0,0,i),new C.o(h,l,f,g,l,l,B.n),l,l,l,D.acb,B.ei,l,l,1/0),B.b9,B.ie),C.D(A.fKX(m.d,l,l,l,m.e),1)],w),B.m,l,B.e,B.j,0,B.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new A.dx("Ask about it",i,new A.dVp(m),l,B.bE,l),new A.dx("Invent something new",!i,new A.dVq(m),l,B.bE,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.cUO[p]
i.push(new A.dx(n,!1,new A.dVr(m,n),l,B.bE,l))}f.push(new A.eE(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.cGd[p]
i.push(new A.dx(r,!1,new A.dVs(m,r),l,B.bE,l))}f.push(new A.eE(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=B.c.j(0.07)
i=C.D(C.aK(l,B.U,!1,l,!0,B.q,l,C.aL(),m.f,l,l,l,l,l,2,C.bl(l,new C.b1(4,C.m(16),B.W),l,B.eF,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,B.ke,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.z,!0,l,!0,l,!1,l,B.af,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new A.dVt(m,k),l,!1,l,l,!1,l,!0,l,B.a8,l,l,l,l,l,l,l,l,l,l,l,B.di,!0,B.a6,l,B.am,l,B.aIJ,l,l),1)
h=m.at
v=h&&j?D.bqF:B.dO
j=h&&j?"Ask":"Invent"
f.push(C.B(C.a([i,B.aa,new A.fe(v,j,new A.dVu(m,k),B.bE,l)],w),B.m,l,B.e,B.j,0,l,l))
return A.je(B.bE,B.fT,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.u(f,B.m,l,B.e,B.R,0,B.p))}}
A.Ez.prototype={}
A.u7.prototype={}
A.TP.prototype={
S(){return new A.aBc(B.J,B.J,B.as,C.aZ(x.S),$,B.bu,0,C.a([],x.X),null,null)}}
A.aBc.prototype={
gaSj(){var w,v,u,t=this,s=D.Fg[t.cx],r=D.NW[t.cy],q=D.AB[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ef(w,w.r,C.a2(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aqB[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+B.d.cI(p,0,new A.e9w())},
ga02(){return D.Fg[this.cx].d/this.gaSj()},
gaJZ(){return 0.1*(D.Fg[this.cx].d/0.9)/D.NW[this.cy].d},
Z(){this.a0()
this.kH()
A.yq("rocket_lander").bw(new A.e9Q(this),x.P)},
bXG(){var w=this
w.ay=B.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+B.cA.af()*0.6
w.f=new C.v(0.15+B.cA.af()*0.7,0.08)
w.r=new C.v((B.cA.af()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
l_(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.n(new A.e9R())
return}w=D.qq[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=B.k.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.v(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga02()
v=v.ap(0,new C.v(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaJZ())}if(m.dy){t=m.r
v=v.aD(0,t.aM(0,t.gcj()*6*D.asa[m.d]))}t=m.r=m.r.ap(0,v.aM(0,d))
s=m.f=m.f.ap(0,t.aM(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new C.v(-t.a*0.4,t.b)
t=new C.v(B.k.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new C.v(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.AB[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
A.v6("rocket_lander",C.E(["unlocked",t],x.N,x.z))
A.At("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga02()/(D.qq[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+B.k.ab(m.ga02()/(D.qq[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
A.e1(80,"",500,0,0.6,"noise")
C.fU()}}if(m.Q&&m.x>0&&B.o.J(B.k.bK(m.CW*20),2)===0)A.e1(90,"",70,0,0.12,"noise")
m.n(new A.e9S())},
acL(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.eAh,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new A.dx(e[w].a,f.$1(w),new A.e9y(this,g,w),v,h,v))
return new C.C(B.fi,C.u(C.a([u,B.d4,C.cb(B.bH,s,B.bw,6,6)],t),B.F,v,B.e,B.j,0,B.p),v)},
bxk(d){var w,v,u,t,s=this,r=null,q=s.ga02()/(D.qq[s.d].b/9.81*0.28)>=1,p=B.k.U(1/s.gaJZ()),o=D.asa[s.d],n=C.m(24),m=d.c,l=C.H(m.j(0.6),B.r,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),B.au,C.d(d.d+" Gravity here: "+C.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,D.aJP,r,r,r),B.T,s.acL("ENGINE: "+D.Fg[s.cx].b,D.Fg,new A.e9n(s),new A.e9o(s),B.dh),s.acL("FUEL TANK: "+D.NW[s.cy].b,D.NW,new A.e9p(s),new A.e9q(s),B.bt),s.acL("LANDING GEAR: "+D.AB[s.db].b,D.AB,new A.e9r(s),new A.e9s(s),B.b4),s.acL("EXTRAS (tap to add)",D.aqB,new A.e9t(s),new A.e9u(s),B.bE)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.f20)
o=(q?B.bt:B.cN).j(0.14)
w=C.m(12)
v=B.k.ab(s.gaSj(),2)
u=B.k.ab(s.ga02()/(D.qq[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+B.k.U(D.AB[s.db].d*100)+".",r,r,r,r,r,r,D.eAQ,r,r,r),B.h,r,r,new C.o(o,r,r,w,r,r,B.n),r,r,r,B.iX,B.bT,r,r,r))
m.push(B.T)
m.push(new C.bF(B.B,r,r,new A.fe(B.mG,"Launch",new A.e9v(s),B.bt,r),r))
return C.as(C.p(r,C.cg(C.u(m,B.F,r,B.e,B.R,0,B.p),B.q,r,B.z,r,B.c1,r,r,B.ah),B.h,r,B.ld,new C.o(D.b6N,r,l,n,r,r,B.n),r,r,r,B.bT,r,r,r,r),r,r,r)},
aTp(d,e,f,g){var w=null,v=f?B.dh:B.c.j(0.1),u=C.m(18),t=C.H(B.be,B.r,1)
return C.pf(B.jC,C.p(w,C.V(d,B.c,w,w,w,30),B.h,w,w,new C.o(v,w,t,u,w,w,B.n),w,62,w,w,w,w,w,g),w,new A.e9k(e),new A.e9l(e),w,w,w,w,new A.e9m(e))},
aTo(d,e,f){return this.aTp(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cj(new A.e9J(s,D.qq[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.qq[w].a:"\ud83d\udd12"
o.push(new A.dx(v,s.d===w,new A.e9K(s,w),r,D.qq[w].c,r))}v=C.a([s.aTo(D.bqM,new A.e9L(s),s.y),B.ba,s.aTp(B.us,new A.e9M(s),s.Q,130),B.ba,s.aTo(B.XO,new A.e9N(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?B.b4:B.c.j(0.1)
t=C.m(18)
B.d.v(v,C.a([B.ba,C.aJ(r,C.p(r,D.buS,B.h,r,r,new C.o(u,r,C.H(B.be,B.r,1),t,r,r,B.n),r,62,r,r,r,r,r,62),B.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.e9O(s),r,r,r,r,r,r,!1,B.ae)],p))}return A.je(B.dh,B.fT,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.u(C.a([new A.eE(o,"WORLD",r),C.B(v,B.m,r,B.b5,B.j,0,r,r)],p),B.m,r,B.e,B.R,0,B.p))}}
A.bd7.prototype={
a6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.qq[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.a1(),d=C.U(),a0=j.c,a1=C.aq(D.b92,a0,0.25)
a1.toString
d.sav(new C.a8(B.b3,B.bb,B.x,C.a([D.b1X,a1],x.O),l,l).aC(0,new C.af(0,0,g,f)))
a2.bp(new C.af(0,0,g,f),d)
w=new C.f5()
w.dZ(5)
for(g=a2.a,v=0;v<70;++v){f=w.af()
d=w.af()
a1=w.af()
u=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
u.r=B.c.j(0.2+w.af()*0.5).gt(0)
t=u.M()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=C.a([],f)
r=new C.b0(e.r,B.aw,l,l,d)
r.N(new C.bj(0,s+14))
q=new C.f5()
q.dZ(2)
for(p=0;p<=i;p+=18){e=new C.av(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.af()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bH(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.N(new C.av(i,h))
r.N(new C.av(0,h))
r.N(new C.bX())
e=$.a1()
d=C.U()
d.r=C.aq(a0,B.w,0.6).gt(0)
a2.b4(r,d)
o=C.dy(new C.v(k.ax*i,s+10),8,k.ay*i)
d=C.c_(o,B.jL)
a0=C.U()
a0.r=B.br.gt(0)
a2.bj(d,a0)
a0=C.c_(o.cD(2),B.uX)
d=C.U()
d.b=B.ak
d.c=2
d.r=B.c.j(0.5+0.3*Math.sin(k.CW*4)).gt(0)
a2.bj(a0,d)
if(k.as==="ready")return
d=k.f
J.bP(g.save())
g.translate(d.a*i,d.b*h)
a2.q1(0,k.w)
i=k.as
if(i==="crashed"){k=C.U()
k.r=B.dh.j(0.6).gt(0)
k.z=X.a0e
a2.aw(B.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new C.b0(i,B.aw,l,l,C.a([],f))
n.N(new C.bj(-8,18))
n.N(new C.av(0,44+Math.sin(k.CW*40)*8))
n.N(new C.av(8,18))
n.N(new C.bX())
k=C.U()
k.r=B.aM.gt(0)
a2.b4(n,k)
i=new C.b0(i,B.aw,l,l,C.a([],f))
i.N(new C.bj(-4,18))
i.N(new C.av(0,32))
i.N(new C.av(4,18))
i.N(new C.bX())
k=C.U()
k.r=B.c.gt(0)
a2.b4(i,k)}k=e.r
m=new C.b0(k,B.aw,l,l,C.a([],f))
m.N(new C.bj(0,-26))
m.N(new C.dn(14,-10,11,18))
m.N(new C.av(-11,18))
m.N(new C.dn(-14,-10,0,-26))
m.N(new C.bX())
i=C.U()
i.sav(D.bG4.aC(0,D.ehZ))
a2.b4(m,i)
i=C.U()
i.r=B.b4.gt(0)
a2.aw(D.a1w,5,i)
i=new C.b0(k,B.aw,l,l,C.a([],f))
i.N(new C.bj(-11,6))
i.N(new C.av(-20,20))
i.N(new C.av(-11,18))
i.N(new C.bX())
h=C.U()
h.r=B.aH.gt(0)
a2.b4(i,h)
f=new C.b0(k,B.aw,l,l,C.a([],f))
f.N(new C.bj(11,6))
f.N(new C.av(20,20))
f.N(new C.av(11,18))
f.N(new C.bX())
k=C.U()
k.r=B.aH.gt(0)
a2.b4(f,k)
g.restore()},
ao(d){return!0}}
A.aIW.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.bt7.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpO()}}
A.aOH.prototype={}
A.a0W.prototype={}
A.b6j.prototype={}
A.Sh.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.eN(["skin"],x.N),o=new Float32Array(0)
return new A.azE(w,v,u,t,s,r,q,new C.cn(null,x.A),p,D.I7,D.I7,B.as,B.cA,o,new Int32Array(0),$,B.bu,0,C.a([],x.X),null,null)}}
A.azE.prototype={
Z(){var w=this
w.a0()
w.kH()
w.as=new A.bVY(w.gc45())
new A.dx_(w).$0()
return},
p(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a9(0)
v.d=null}this.boQ()},
c46(d){var w,v=this
if(v.c==null)return
w=J.a6(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eL(0,C.E(["t","init","data",$.fUG],x.N,x.z))
v.at=!0
v.ax=""
v.auW()
break
case"pick":v.n(new A.dwC(v,d))
break
case"shot":v.aeD(C.t(w.h(d,"data")))
break
case"error":$.al.$1("[body viewer] "+C.t(w.h(d,"text")))
break}},
auW(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aoG[q.CW]
v=new A.dwD()
u=q.ay
u=C.A(u,C.a2(u).k("ck.E"))
B.d.fw(u)
t=x.N
s=C.E(["layers",u,"skinMode",q.ch,"tone","#"+C.t(v.$1(w.b))+C.t(v.$1(w.c))+C.t(v.$1(w.d)),"sel",q.cx,"bpm",B.k.U(q.k3),"spin",q.fy],t,x.cK)
r=B.Q.aj(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.S(t,x.z)
u.m(0,"t","state")
u.v(0,s)
v.eL(0,u)}},
aeD(d){return this.ckg(d)},
ckg(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aeD=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=B.cw.aF(B.a.aV(d,B.a.cP(d,",")+1))
w=6
return C.b(A.ck3(C.a([A.fUr(r,"image/png","body.png")],x.C),"Made in NGMY Core Protocol"),$async$aeD)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.F(x.U).f.P(D.aI1)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$aeD,v)},
aup(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.q(0,w)},
l_(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.q(0,"organ")&&B.k.bK(w)!==B.k.bK(v.ok)){A.a60("kick",0.4)
v.a2z(170,new A.dx0())}v.ok=w
return},
aes(d){var w,v,u,t,s=this
s.n(new A.dwE(s,d))
if(d==null){s.fx=D.I7
s.dy=1
w=s.as
if(w!=null)w.eL(0,C.E(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.T(w).k("a5<1>")
u=C.A(new C.a5(w,new A.dwF(d),v),v.k("G.E"))
t=B.d.gI(u).b
if(t!=="skin"&&!s.ay.q(0,t)){s.ay.G(0,t)
if(s.ch===2)s.ch=1}s.auW()
w=s.as
if(w!=null)w.eL(0,C.E(["t","focus","group",d],x.N,x.z))
s.go=0
s.cmD(t,d)
return},
cmD(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){A.a60("kick",0.8)
this.a2z(260,new A.dwG())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")A.e1(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a2z(w*70,new A.dwH(this))
else if(B.a.q(e,"intestine")||e==="Stomach")A.e1(110,"",360,0.7,0.3,"saw")
else A.v9("organic",6+B.o.J(e.length,8),200,0.6)
break
case"bone":A.e1(210+e.length*4,"",80,0.6,0.55,"tri")
A.e1(2400,"",20,0,0.3,v)
break
case"muscle":A.e1(70,"",150,1,0.6,"sine")
break
case"vessel":A.e1(300,"",380,0.4,0.22,v)
A.a60("kick",0.3)
break
default:A.v9("organic",2+B.o.J(e.length,6),200,0.4)}},
cqY(d){this.n(new A.dwJ(this,d))},
aTH(){var w,v,u,t,s,r,q,p=this,o=C.aZ(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(p.aup(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.G(0,s.a)}q=C.A(o,o.$ti.k("ck.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aA(w)]
p.p4=""},
bO6(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.n(new A.dwz(u,w,d))
v=x.t
A.At("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a2z(1100,new A.dwA(u))
return}if(d==null){if(u.cx!=null)u.aes(null)
return}u.aes(d)},
bRL(d,e){var w,v=this,u=null,t=C.m(18),s=C.H(B.cd.j(0.5),B.r,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.ewT,u,u,u)}else if(d==null||e==null)w=D.eK2
else{w=x.p
w=C.B(C.a([C.D(C.u(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,B.jo,u,u,u),B.d4,C.d(e.b,u,u,u,u,u,u,D.QX,u,u,u)],w),B.F,u,B.e,B.R,0,B.p),1),C.aF(u,u,u,u,D.bxe,u,u,u,new A.dwB(v),u,u,u,u,"Back to the whole body",B.c6)],w),B.F,u,B.e,B.j,0,u,u)}return C.p(u,w,B.h,u,u,new C.o(D.T1,u,s,t,u,u,B.n),u,u,u,u,F.acy,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.d3y.h(0,g)
i.auW()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.cOI
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(i.aup(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!B.d.q(w,q))w.push(q)}v=x.p
u=C.a([C.aF(h,h,h,h,D.m1,h,h,h,new A.dwQ(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?B.bF:C.Cw(h,B.pp,q)}else q=B.ka
q=C.u(C.a([C.D(q,1),new C.C(D.bep,i.bRL(g,f),h)],v),B.m,h,B.e,B.j,0,B.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.cHv[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.q(0,n)
p.push(new A.dx(l,n,new A.dwR(i,o),o.c,B.cd,h))}p=C.a([new A.eE(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.K)(w),++s){k=w[s]
n.push(new A.dx(k,k===i.cx,new A.dwS(i,k),h,B.aM,h))}p.push(new A.eE(n,"FIND",h))}if(t.q(0,"organ")){n=i.k3
p.push(A.ho(B.cN,""+B.k.U(n)+" beats/min","Heart rate",180,40,new A.dwT(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new A.DR(D.aoG[j],i.CW===j,new A.dwU(i,j),!1,h))
p.push(new A.eE(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new A.dx("Spin",n,new A.dwV(i),D.afB,B.b4,h),new A.fe(B.jF,"Reset view",new A.dwW(i),B.c,h),new A.dx(l,m,new A.dwX(i),B.Et,B.aM,h)],v)
if(t.q(0,"organ"))v.push(new A.dx("Heartbeat sound",i.k4,new A.dwY(i),B.nr,B.cN,h))
p.push(new A.eE(v,h,h))
return A.je(B.cd,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.u(p,B.m,h,B.e,B.R,0,B.p))}}
A.aHZ.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.aI_.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.boP()}}
A.bVY.prototype={
k5(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aI(e,"</script","<\\/script")
v=$.h_z
$.h_z=v+1
u="ngmy-body-viewer-"+v
$.xF()
$.pH().p6(u,new A.bVZ(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fA(v,"message",new A.bW_(t),!1,x.gA)
t.b=u},
eL(d,e){var w,v
try{w=this.c
if(w!=null){w=C.bv6(w.contentWindow)
if(w!=null)J.fxR(w,e,"*")}}catch(v){}}}
A.x8.prototype={}
A.B3.prototype={}
A.mW.prototype={}
A.b71.prototype={}
A.Sm.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new A.azH(C.S(w,x.a2),C.a([],x.cB),C.S(w,v),C.S(w,v),C.S(w,u),B.as,B.J,B.J,C.aZ(u),$,B.bu,0,C.a([],x.X),null,null)}}
A.azH.prototype={
Z(){var w=this
w.a0()
w.kH()
w.a9F()
$.aS.x1$.push(new A.dza(w))},
a9F(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$a9F=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aw(),$async$a9F)
case 6:q=e.rm("ngmy_circuit_passed_v1")
r=q==null?B.U:q
if(s.c!=null)s.n(new A.dyP(s,r))
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
return C.i($async$a9F,v)},
aa_(d){return this.bVm(d)},
bVm(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$aa_=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.G(0,d)
u=3
w=6
return C.b(C.aw(),$async$aa_)
case 6:r=f
q=s.cx
p=C.a2(q).k("jA<ck.E,n>")
q=C.A(new C.jA(q,new A.dyS(),p),p.k("G.E"))
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
return C.i($async$aa_,v)},
ate(d,e,f,g){var w="c"+this.y++,v=new A.B3(w,e,f,g)
this.d.m(0,w,v)
return v},
m1(d,e,f){return this.ate(0,e,f,0)},
a91(d,e){var w
if(D.xH.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ap(0,new C.v(-36,w))},
rM(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aNS(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fD$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.dw(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(B.o.eb(m,D.csP[B.o.J(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.rM(p,0)&&n.rM(p,1)
break
case"or":p=q.a
o=n.rM(p,0)||n.rM(p,1)
break
case"xor":p=q.a
o=n.rM(p,0)!==n.rM(p,1)
break
case"nand":p=q.a
o=!(n.rM(p,0)&&n.rM(p,1))
break
case"nor":p=q.a
o=!(n.rM(p,0)||n.rM(p,1))
break
case"not":o=!n.rM(q.a,0)
break
default:o=n.rM(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.m(0,q,o)
r=!0}}if(!r)break}},
bH3(){return this.aNS(null)},
l_(d){var w,v,u,t,s,r,q,p,o,n=this
n.bH3()
if(!n.ax)return
for(w=n.d,w=new C.bf(w,C.a2(w).k("bf<2>")).gag(0),v=new C.hX(w,new A.dzb()),u=n.f,t=n.w,s=0;v.C();){r=w.gT(0).a
if(u.h(0,r)===!0){q=n.fD$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.m(0,r,n.fD$)
o=s+1
A.e1(520+90*B.o.J(s,4),"",200,0,0.25,"square")
s=o}}},
atf(d){var w=this
w.d.a8(0)
B.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
lu(d,e){var w=this.x
return new C.v(d*w.a,e*w.b)},
apH(d){var w=this
if(w.x.A(0,B.as)){$.aS.x1$.push(new A.dyN(w,d))
return}w.n(new A.dyO(w,d))},
cmT(d){this.n(new A.dyT(this,d,$.bzO()[d]))},
bZ8(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bzO()[a0]
v=d.d
u=C.a2(v).k("bf<2>")
t=u.k("a5<G.E>")
s=t.k("G.E")
r=C.A(new C.a5(new C.bf(v,u),new A.dyI(),t),s)
B.d.aZ(r,new A.dyJ())
q=C.A(new C.a5(new C.bf(v,u),new A.dyK(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.n(new A.dyL(d,w))
return}u=d.r
p=C.dR(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=B.o.dq(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((B.o.fO(k,i)&1)===1)
for(i=0;i<v;++i)u.m(0,r[i].a,j[i])
d.aNS(0)
h=m.h(0,B.d.gI(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.jv(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=B.d.aG(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.v(0,p)
d.n(new A.dyM(d,o,a0))},
atW(d){var w,v,u,t,s=this.d,r=C.a2(s).k("bf<2>")
s=C.A(new C.bf(s,r),r.k("G.E"))
r=C.T(s).k("dv<1>")
s=new C.dv(s,r)
s=new C.bR(s,s.gH(0),r.k("bR<ai.E>"))
w=d.a
r=r.k("ai.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
c6l(d){var w,v,u,t,s,r=this.d,q=C.a2(r).k("bf<2>")
r=C.A(new C.bf(r,q),q.k("G.E"))
q=C.T(r).k("dv<1>")
r=new C.dv(r,q)
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
bRE(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.dw(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.xH.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.a91(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.z(p,o)
s=l}}}return t},
bG1(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.a91(p,o)
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
bZa(d){var w,v,u,t=this,s=t.atW(d)
if(s!=null){w=t.d.h(0,s)
w.toString
C.eG()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.m(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
A.e1(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.n(new A.dyU())
return}u=t.bG1(d)
if(u!=null)t.n(new A.dyV(t,u))
else t.n(new A.dyW(t))},
asd(d){return this.bUr(d)},
bUr(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$asd=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.atW(d)
if(s==null){w=1
break}C.j6()
t.n(new A.dyR(t,s))
case 1:return C.h(u,v)}})
return C.i($async$asd,v)},
btm(d){if(this.x.A(0,B.as))return
this.n(new A.dyH(this,d,B.cA))
C.eG()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bzO()[g]
g=x.p
v=C.a([C.aF(h,h,h,h,C.V(i.ax?B.nr:L.ql,B.aj,h,h,h,21),h,h,h,new A.dz4(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.m(16)
s=B.cK.j(0.14)
r=C.H(B.cK.j(0.5),B.r,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.ew7,h,h,h),C.d(w.b,h,h,h,h,h,h,D.eDR,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.C(B.nk,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?B.bt:B.fP,h,h,h,h,h,h,h,h,12,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.B(C.a([C.D(C.u(q,B.F,h,B.e,B.j,0,B.p),1),C.bH(D.eUc,i.gbZ7(),C.bk(B.cK,h,h,h,h,h,h,h,h,h,h,B.c6))],g),B.m,h,B.e,B.j,0,h,h),B.h,h,h,new C.o(s,h,r,t,h,h,B.n),h,h,h,W.JJ,D.bf2,h,h,1/0))}u.push(C.D(C.cj(new A.dz5(i)),1))
if(f!=null){t=C.m(14)
s=B.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.xH.h(0,r).a+": "+D.xH.h(0,r).e,h,h,h,h,h,h,B.vb,h,h,h),B.h,h,h,new C.o(s,h,h,t,h,h,B.n),h,h,h,Y.acg,B.bT,h,h,1/0))}u=C.u(u,B.m,h,B.e,B.j,0,B.p)
t=C.a([],g)
for(s=D.xH.gdH(D.xH),s=s.gag(s);s.C();){r=s.gT(s)
q=new C.b3(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.ax(o.j(0.5),1,B.r,-1)
t.push(C.aJ(h,C.p(h,C.u(C.a([C.V(p.b,o,h,h,h,20),B.by,new C.w(p.a,h,D.a4a,h,h,h,h,h,h,h,h,h)],g),B.m,h,B.e,B.R,0,B.p),B.h,h,h,new C.o(n,h,new C.c1(m,m,m,m),new C.bu(q,q,q,q),h,h,B.n),h,h,h,B.hd,P.US,h,h,58),B.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.dz6(i,r),h,h,h,h,h,h,!1,B.ae))}s=C.a([],g)
for(l=0;l<4;++l){k=D.cSo[l]
s.push(new A.fe(B.Ld,k.b,new A.dz7(i,k),B.cK,h))}s.push(new A.fe(D.wQ,"Clear",new A.dz8(i),B.cN,h))
r=C.a([],g)
for(j=0;q=$.bzO(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?B.ej:B.lp
o=i.ay
n=i.cx.q(0,j)?B.bt:B.cV
r.push(new A.dx(q.a,o===j,new A.dz9(i,j),p,n,h))}return A.je(B.cK,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.u(C.a([new A.eE(t,"PARTS",h),new A.eE(s,"TRY",h),new A.eE(r,"TASKS",h)],g),B.m,h,B.e,B.R,0,B.p))}}
A.b7j.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.a1()
w=C.U()
w.r=D.a7Q.gt(0)
a7.bp(new C.af(0,0,0+a5,0+a6),w)
v=C.U()
v.r=B.c.j(0.05).gt(0)
for(w=a7.a,u=20;u<a6;u+=28)for(t=14;t<a5;t+=28){s=v.M()
w.drawCircle(t,u,1,s)
s.delete()}for(a5=this.b,a6=a5.e,r=a6.length,q=a5.f,p=x.v,o=a5.d,n=0;n<a6.length;a6.length===r||(0,C.K)(a6),++n){m=a6[n]
l=m.a
k=o.h(0,l)
j=o.h(0,m.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=a5.a91(j,m.c)
f=q.h(0,l)===!0
l=$.a1()
e=C.a([],p)
d=new C.b0(l.r,B.aw,a4,a4,e)
e.push(new C.bj(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.p4(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
l.b=B.ak
l.c=9
l.r=B.cV.j(0.28).gt(0)
l.z=H.ph
s=l.M()
l=d.gbM().a.snapshot()
w.drawPath((d.e=new C.cG(l)).a,s)
s.delete()}l=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
l.b=B.ak
l.c=3.2
l.d=B.bZ
l.r=(f?B.j5:B.bB).gt(0)
s=l.M()
l=d.e
w.drawPath((l==null?d.e=new C.cG(d.gbM().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ap(0,D.Gg)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new C.b0($.a1().r,B.aw,a4,a4,C.a([],p))
w=a3.b
p.N(new C.bj(a6,w))
r=g.b
p.N(new C.p4(a6+a0,w,a5-a0,r,a5,r))
r=C.U()
r.b=B.ak
r.c=3
r.r=B.aj.gt(0)
a7.b4(p,r)}for(a5=new C.dw(o,o.r,o.e);a5.C();)this.bZ9(a7,a5.d)},
bZ9(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.xH.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.dy(a0.c,64,64)
s=C.c_(t,B.kI)
r=w.cy===v
q=s.eG(B.cv)
$.a1()
p=C.U()
p.r=B.w.j(0.55).gt(0)
p.z=B.mN
d.bj(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.U()
p.sav(new C.bS(B.B,0.5,B.x,g,0,C.a([e.c.j(0.6),B.K],x.O),g,g).aC(0,C.c2(a0.c,52)))
d.aw(q,52,p)}q=s.eG(B.cG)
p=C.U()
o=e.c
p.r=C.aq(o,B.w,0.65).gt(0)
d.bj(q,p)
n=u?0.35:0
q=C.U()
p=C.aq(o,B.c,0.1+n)
p.toString
m=C.aq(o,B.w,u?0.2:0.45)
m.toString
q.sav(new C.a8(B.b3,B.bb,B.x,C.a([p,m],x.O),g,g).aC(0,t))
d.bj(s,q)
q=C.U()
q.b=B.ak
q.c=r?2.6:1.2
q.r=(r?B.c:B.c.j(0.35)).gt(0)
d.bj(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?D.agZ:D.brb}else l=e.b
k=A.fD8(C.jv(l.a),30,B.c,l.b,g,B.I)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a6(d,v.aD(0,new C.v(p/2,q.gbe(q)/2)))
j=A.fD8(e.a,10.5,B.c,g,g,B.I)
j.a6(d,a0.c.ap(0,new C.v(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=A.fD8(f,9,u?B.j5:B.c2,g,g,B.u)
i.a6(d,a0.c.ap(0,new C.v(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aU1(d,w.a91(a0,h),o)
this.aU1(d,a0.c.ap(0,D.Gg),o)},
aU1(d,e,f){var w
$.a1()
w=C.U()
w.r=D.a7Q.gt(0)
d.aw(e,8.5,w)
w=C.U()
w.b=B.ak
w.c=2.2
w.r=f.gt(0)
d.aw(e,8.5,w)
w=C.U()
w.r=B.c.gt(0)
d.aw(e,3.2,w)},
ao(d){return!0}}
A.aI4.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.bsS.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.boV()}}
A.Lv.prototype={
S(){return new A.azY(C.m6(0,null,null))}}
A.IG.prototype={
a3(){return"_UnfoldStyle."+this.b}}
A.zl.prototype={}
A.azY.prototype={
bZe(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcn(0).at
v.toString
w.f=v}w.n(new A.dEn(w,e))},
bTp(){var w=this
w.e.p()
w.e=C.m6(w.f,null,null)
w.n(new A.dEm(w))},
p(){this.e.p()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.nU(t,C.cf(v,B.bV,t?new A.bmZ(w.e,w.gbZd(w),new A.dEo(d),v):new A.aE6(u,new C.cv(u.b,x.gj)),v,!1,!1,v,!1),new A.dEp(w,u),x.K)}}
A.bow.prototype={}
A.bmZ.prototype={
aU2(d,e){var w=null
return new C.C(F.Vl,C.u(C.a([C.d(d,w,w,w,w,w,w,D.ewD,w,w,w),B.by,C.d(e,w,w,w,w,w,w,C.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.F,w,B.e,B.j,0,B.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.B(C.a([C.aF(v,v,v,v,E.qn,v,v,v,w.e,v,v,v,v,v,v),B.tv,D.bkJ],u),B.m,v,B.e,B.j,0,v,v),s=w.aU2("STUDIOS","Play, make things, and keep what you make")
$.bzQ()
return C.br(!0,C.u(C.a([new C.C(D.bjU,t,v),C.D(C.uL(0,v,B.q,w.c,B.z,v,v,v,v,v,!1,v,B.ah,!1,C.a([new C.lL(s,v),new C.nn(B.iD,C.N3(new C.nX(new A.eHn(d),23,!0,!0,!0,0,C.rg(),v),D.aHR),v),new C.lL(w.aU2("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nn(D.bf8,C.N3(new C.nX(new A.eHo(w),6,!0,!0,!0,0,C.rg(),v),D.aHR),v)],u)),1)],u),B.m,v,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)}}
A.acq.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.m(20),n=C.m(20),m=C.aq(D.rn,p,0.3)
m.toString
w=x.O
m=C.a([m,D.aa1],w)
v=C.H(p.j(0.6),B.r,1.2)
u=x.V
t=C.a([new C.aa(-4,B.G,p.j(0.22),B.J,14)],u)
s=C.aq(p,B.w,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.aa(0,B.G,p.j(0.5),B.J,12)],u)
return C.aD(!1,B.X,!0,r,C.aH(!1,o,!0,C.eq(C.u(C.a([C.p(r,C.V(q.c,B.c,r,r,r,24),B.h,r,r,new C.o(r,r,r,r,u,new C.a8(B.ax,B.aC,B.x,w,r,r),B.a5),r,44,r,r,r,r,r,44),B.P,C.d(q.a,r,2,B.Z,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,B.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),B.L,r,r),B.d4,C.d(q.b,r,2,B.Z,r,r,r,C.l(r,r,B.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),B.L,r,r)],x.p),B.m,r,B.b5,B.j,0,B.p),r,new C.o(r,r,v,n,t,new C.a8(B.ax,B.aC,B.x,m,r,r),B.n),r,B.DM,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac)}}
A.abl.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.m(20),g=C.m(20),f=C.aq(D.rn,B.d.gI(i),0.24)
f.toString
w=x.O
f=C.a([f,D.aa1],w)
v=C.H(B.d.gI(i).j(0.35),B.r,1)
u=x.V
t=C.a([new C.aa(0,B.G,B.w.j(0.4),B.cv,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.b3(6,6)
m=C.a([B.d.gI(i),B.d.gai(i)],w)
l=C.a([new C.aa(0,B.G,B.w.j(0.45),F.aAY,0)],u)
r.push(C.p(k,C.V(q[p],B.c,k,k,k,11),B.h,k,k,new C.o(k,k,k,new C.bu(n,n,n,n),l,new C.a8(B.a1,B.a7,B.x,m,k,k),B.n),k,17,k,new C.M(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.u(r,B.m,k,B.e,B.R,0,B.p)
u=C.aq(B.d.gI(i),B.d.gai(i),0.4)
u.toString
return C.aD(!1,B.X,!0,k,C.aH(!1,h,!0,C.eq(C.u(C.a([new C.a3(58,k,w,k),B.T,C.d(j.b,k,2,B.Z,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,B.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),B.L,k,k),B.au,C.V(Ac.EC,B.d.gI(i),k,k,k,18)],s),B.m,k,B.b5,B.j,0,B.p),k,new C.o(k,k,v,g,t,new C.a8(B.ax,B.aC,B.x,f,k,k),B.n),k,B.DM,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),B.h,B.K,0,k,k,k,k,k,B.ac)}}
A.O9.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(B.d.gai(i),B.w,0.62)
h.toString
w=k.c
v=k.d
h=C.an(-8,C.bQ(j,new C.o(h,j,j,C.m(22),j,j,B.n),B.b7),j,j,2,2,8,j)
u=C.m(22)
t=k.y
s=x.V
r=C.a([new C.aa(0,B.G,B.w.j(0.55),B.Pc,26),new C.aa(-6,B.G,B.d.gI(i).j(0.1+0.4*t),B.J,30)],s)
q=C.m(22)
p=C.aq(B.d.gI(i),B.c,0.14)
p.toString
o=B.d.gI(i)
n=B.d.gai(i)
i=C.aq(B.d.gai(i),B.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bV(0,C.bQ(j,new C.o(j,j,j,j,j,new C.a8(B.ax,B.aC,B.x,C.a([p,o,n,i],m),D.cWV,j),B.n),B.b7),0,0,0),C.an(j,C.bQ(j,new C.o(j,j,j,j,j,new C.a8(B.b3,B.bb,B.x,C.a([B.c.j(0.28),B.c.j(0)],m),j,j),B.n),B.b7),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bV(0,C.b2(j,j,j,new A.bnX(i,j),B.as),0,0,0))
i=B.c.j(0.16)
p=C.H(B.c.j(0.5),B.r,1.4)
s=C.a([new C.aa(0,B.G,B.c.j(0.25*t),B.J,14)],s)
s=C.p(j,C.V(k.f,B.c,j,j,j,28),B.h,j,j,new C.o(i,j,p,j,s,j,B.a5),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.ey4,j,j,j)],l)
i=k.w
if(i.length!==0)B.d.v(p,C.a([B.au,C.d(i,j,1,B.Z,j,j,j,C.l(j,j,B.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,B.a0,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(B.Qf)
p.push(C.p(j,j,B.h,j,j,new C.o(B.c.j(0.28),j,j,C.m(3),j,j,B.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.C(B.fu,C.B(C.a([s,B.en,C.D(C.u(p,B.F,j,B.e,B.R,0,B.p),1)],l),B.m,j,B.e,B.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bV(0,C.e3(C.ec(j,B.w.j(B.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.m(22)
m.push(C.bV(0,C.e3(C.bQ(j,new C.o(j,j,C.H(B.c.j(0.3),B.r,1.2),i,j,j,B.n),B.b7),!0,j),0,0,0))
return new C.a3(w,v,new C.am(B.V,j,B.a9,B.h,C.a([h,C.bV(0,C.bQ(C.bv(q,new C.am(B.V,j,B.a9,B.q,m,j),B.ap),new C.o(j,j,j,u,r,j,B.n),B.b7),0,0,0)],l),j),j)}}
A.bnX.prototype={
a6(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.af(r,-10,s,w)
u=d.a
J.bP(u.save())
u.translate(v.gbN().a,v.gbN().b)
d.q1(0,0.35)
t=C.dy(B.J,(w- -10)*1.6,s-r)
$.a1()
s=C.U()
s.sav(new C.a8(B.a1,B.a7,B.x,C.a([B.K,B.c.j(0.3),B.K],x.O),null,null).aC(0,t))
d.bp(t,s)
u.restore()},
ao(d){return d.b!==this.b}}
A.bns.prototype={
B(d){var w=null,v=C.m(22),u=C.a([D.b5e,D.a9p],x.O),t=this.e,s=C.H(B.d.gI(t).j(0.4),B.r,1.2),r=C.a([new C.aa(0,B.G,B.w.j(0.5),B.kG,24)],x.V),q=C.m(22),p=B.d.gI(t)
return new C.a3(this.c,this.d,C.bQ(C.bv(q,C.b2(C.as(C.V(B.iZ,B.d.gI(t).j(0.7),w,w,w,34),w,w,w),w,w,new A.b6_(p,w),B.as),B.ap),new C.o(w,w,s,v,r,new C.a8(B.ax,B.aC,B.x,u,w,w),B.n),B.b7),w)}}
A.b6_.prototype={
a6(d,e){var w,v,u,t,s,r,q,p
$.a1()
w=C.U()
v=this.b
w.r=v.j(0.09).gt(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.M()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.M()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.ej(B.J)
$.a1()
t=C.U()
t.b=B.ak
t.c=1.4
t.r=v.j(0.35).gt(0)
d.aw(u,30,t)},
ao(d){return!1}}
A.aE6.prototype={
S(){return new A.aE7(new C.cn(null,x.A),null,null)}}
A.aE7.prototype={
gt6(){var w,v=this,u=v.d
if(u===$){w=C.bi(null,D.bcy,null,1,null,v)
w.cF(0)
v.d!==$&&C.bI()
v.d=w
u=w}return u},
gXg(){var w,v=this,u=v.e
if(u===$){w=C.bi(null,B.fE,null,1,null,v)
w.f2(0,!0)
v.e!==$&&C.bI()
v.e=w
u=w}return u},
gatg(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gbZb(){var w=this.w
if(w===$){w=C.A(this.a.c.d,x.G)
this.w=w}return w},
gaQV(){var w=this.x
if(w===$){w=C.A(this.a.c.e,x.Z)
this.x=w}return w},
gaRz(){var w=this.y
if(w===$){w=C.A(this.a.c.f,x.N)
this.y=w}return w},
gb1e(){var w=this.z
if(w===$){w=C.A(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a0()
var w=this.gt6()
w.d5()
w.dM$.G(0,this.gcmE())},
cmF(){var w,v,u,t,s,r,q,p=this,o=p.gt6().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gatg().a){case 0:w=D.mK
break
case 1:w=D.t4
break
case 2:w=D.ZC
break
case 3:w=D.mK
break
case 4:w=D.cM_
break
case 5:w=D.t4
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a5F)r=0.09
else r=s===D.a5G?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){A.e1(260+90*v,"",260,1.6,0.18,"tri")
u=D.bIq[v]
A.l_("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
A.At("bell",D.bR9,1400,0.35)}}p.ax=o},
p(){this.gt6().p()
this.gXg().p()
this.bqH()},
adb(){var w=this
w.gt6().cKL(0,C.dB(0,0,0,B.k.U(11e3/w.Q),0,0))
w.n(new A.eH3(w))},
c8k(){this.gt6().bT(0)
this.n(new A.eH2(this))},
aaU(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$aaU=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaRz(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){q=t[r]
l.push(new C.ao(new C.bb(q,B.b_,B.aL),$.at()))}m=C.a([],m)
for(t=u.gb1e(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){p=t[r]
m.push(new C.ao(new C.bb(p,B.b_,B.aL),$.at()))}o=C.A(u.gaQV(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.c0(D.rn,null,new A.eH1(u,l,m,o),t,!0,!0,!0,B.l4,!1,!1,x.H),$async$aaU)
case 2:l=C.A(l,x.bO)
B.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.R$=$.at()
n.O$=0}return C.h(null,v)}})
return C.i($async$aaU,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gatg(),f=i.a.c,e=f.b,d=i.gbZb(),a0=new A.zl(g,e,f.c,d,i.gaQV(),i.gaRz(),i.gb1e())
f=C.aq(B.d.gI(d),B.d.gai(d),0.4)
f.toString
g=x.p
w=C.a([C.aF(h,h,h,h,C.V(i.at?B.nr:L.ql,B.aj,h,h,h,21),h,h,h,new A.eHb(i),h,h,h,h,"Sound",h),C.aF(h,h,h,h,D.bAB,h,h,h,i.gbZc(),h,h,h,h,"Edit words and pictures",h),C.aF(h,h,h,h,D.m1,h,h,h,new A.eHc(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c4(i.gXg(),new A.eHd(i,a0),h),C.cj(new A.eHe(i,a0))],g)
u=i.as
t=u?i.gc8j():i.gcaB()
u=u?D.bqq:B.rV
s=C.aq(B.d.gI(d),B.d.gai(d),0.4)
s.toString
t=C.B(C.a([C.aF(h,h,h,h,C.V(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,B.c6),C.D(C.c4(i.gt6(),new A.eHf(i,a1,a0),h),1),C.aF(h,h,h,h,D.bx4,h,h,h,new A.eHg(i),h,h,h,h,"Replay",B.c6)],g),B.m,h,B.e,B.j,0,h,h)
s=i.Q
u=B.k.ab(s,1)
r=C.aq(B.d.gI(d),B.d.gai(d),0.4)
r.toString
s=A.ho(r,u+"x","Speed",2.5,0.4,new A.eHh(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.cUs[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(B.d.gI(d),B.d.gai(d),0.4)
r.toString
u.push(new A.dx(p.b,o===p.a,new A.eHi(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bIL[q]
o=i.w
if(o===$){o=C.A(i.a.c.d,r)
i.w=o}m=B.d.gI(o).A(0,B.d.gI(n))?34:28
o=i.w
if(o===$){o=C.A(i.a.c.d,r)
i.w=o}l=B.d.gI(o).A(0,B.d.gI(n))?34:28
o=i.w
if(o===$){o=C.A(i.a.c.d,r)
i.w=o}k=B.d.gI(o).A(0,B.d.gI(n))?B.c:B.be
o=i.w
if(o===$){o=C.A(i.a.c.d,r)
i.w=o}j=new C.ax(k,B.d.gI(o).A(0,B.d.gI(n))?2.5:1,B.r,-1)
d.push(C.aJ(h,C.p(h,h,B.h,h,h,new C.o(h,h,new C.c1(j,j,j,j),h,h,new C.a8(B.ax,B.aC,B.x,n,h,h),B.a5),h,l,h,D.ac2,h,h,h,m),B.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.eHj(i,n),h,h,h,h,h,h,!1,B.ae))}return A.je(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.en(new C.am(B.V,h,B.aX,B.q,v,h),i.f),e,C.u(C.a([t,s,new A.eE(u,"STYLE",h),new A.eE(d,"THEME",h)],g),B.m,h,B.e,B.R,0,B.p))},
bsA(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.mK[r]
p=B.k.D((1-B.ex.ar(0,B.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=B.k.D(p/1.5707963267948966,0,1)
q=D.mK[r]
n=q+0.12
m=B.k.D((a0-n)/(q+0.2-n),0,1)
n=D.mK[r]
q=n-0.01
q=B.k.D((a0-q)/(n+0.03-q),0,1)
n=C.de()
l=n.a
l.$flags&2&&C.ah(l)
l[11]=0.0013
n.jw(p)
l=v[r]
k=u[r]
j=t[r]
i=D.mK[r]
h=i+0.1
if(B.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.mK[r]
h=i+0.1
h=B.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.mK[r]
h=i+0.1
h=B.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cE(0,r*118,0,f,f,f,new C.kG(q,new C.iu(n,f,B.b3,!0,f,new A.O9(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.mK[r]
u=v-0.02
g=B.k.D((a0-u)/(v+0.1-u),0,1)
u=B.d.gI(w)
v=D.mK[r]
t=v+0.12
e.push(new C.cE(0,r*118-3-2,0,f,f,4,new C.lT(new A.bmD(u,g,1-B.k.D((a0-t)/(v+0.22-t),0,1),f),f,B.as,f,f),f))}return new C.a3(a2,358,new C.am(B.V,f,B.a9,B.h,e,f),f)},
bIr(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.t4[r]
p=B.oR.ar(0,B.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.t4[r]
m=q+0.15
l=B.k.D((a0-m)/(q+0.25-m),0,1)
m=D.t4[r]
q=m-0.03
q=B.k.D((a0-q)/(m+0.01-q),0,1)
m=C.de()
k=m.a
k.$flags&2&&C.ah(k)
k[11]=0.0011
m.jf(n,n,n,1)
m.fk(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new A.O9(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.de()
k.fk(3.141592653589793)
k=new C.iu(k,f,B.B,!0,f,new A.bns(a2,108,w,f),f)}e.push(new C.cE(0,r*130,0,f,f,f,new C.kG(q,new C.iu(m,f,B.B,!0,f,k,f),f),f))}return new C.a3(a2,378,new C.am(B.V,f,B.a9,B.h,e,f),f)},
crp(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.ZC[w]
l.push(B.co.ar(0,B.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bV(0,C.b2(n,n,n,new A.bq_(d.d,l,D.aqf,m,A.bmY(e,0.4,0.62),f,A.bmY(e,0.45,0.7),n),B.as),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=A.fDE(g,w)
q=D.aqf[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cE(r,s-q*m*p+12,n,n,t,n,new C.kG(o,C.V(u[w],B.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=A.fDE(g,w)
r=D.ZC[w]
q=r+0.15
v.push(new C.cE(s,l,n,n,t,n,new C.kG(B.k.D((e-q)/(r+0.25-q),0,1),new C.w(u[w],n,B.a4i,n,B.L,n,n,n,n,n,n,n),n),n))}return new C.a3(g,m+90,new C.am(B.V,n,B.a9,B.h,v,n),n)},
byx(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-B.co.ar(0,A.bmY(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bV(0,C.as(C.dO(C.b2(f,f,f,new A.bm5(B.d.gI(a1),A.bmY(a3,0,0.2),a4,f),new C.ap(a5*0.95,70)),D.dIj),f,f,f),0,0,0))
w=C.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=B.k.D((a3-l)/(0.12+m-l),0,1)
j=B.dG.ar(0,B.k.D((o-0.7)/0.3,0,1))
l=C.de()
m=l.a
m.$flags&2&&C.ah(m)
m[11]=0.001
l.fk(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jf(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?B.k.J(r,1):-1
w.push(new C.z(o,new C.cE(0,0,0,0,f,f,new C.cw(B.B,f,f,new C.kG(k*(0.45+0.55*o),C.dO(new C.iu(l,f,B.B,!0,f,new A.O9(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.v(n*a5*0.34,-o*18)),f),f),f)))}B.d.aZ(w,new A.eGV())
B.d.v(a0,new C.J(w,new A.eGW(),x.fR))
return new C.a3(a5,330,new C.am(B.V,f,B.a9,B.h,a0,f),f)},
bxL(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.t4[q]
o=B.k.D((a2-p)/(p+0.22-p),0,1)
n=B.oB.ar(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.t4[q]
m=B.k.D((a2-m)/(m+0.02-m),0,1)
l=D.as_[q]
k=C.de()
k.me(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jf(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.t4[q]
g=h+0.1
g=B.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cE(0,0,0,0,e,e,new C.cw(B.B,e,e,new C.kG(m,C.dO(new C.iu(k,e,B.B,!0,e,new A.O9(d,92,w,p,j,i,0,g*s,h,e),e),new C.v(0,l)),e),e),e))
l=D.t4[q]
h=l+0.02
f=B.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cE(0,0,0,0,e,e,new C.cw(B.B,e,e,C.dO(new C.lT(new A.b6G(w,f,q,e),e,new C.ap(r,212),e,e),new C.v(0,D.as_[q])),e),e))}return new C.a3(a4,330,new C.am(B.V,e,B.a9,B.h,a0,e),e)},
bvq(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.v(-b0,-150),new C.v(b0,-40),D.dIp],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.mK[r]
p=B.k.D((a8-q)/(q+0.2-q),0,1)
o=B.co.ar(0,p)
q=D.as1[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.mK[r]
f=g+0.2
e=B.k.D((a8-f)/(g+0.3-f),0,1)
f=D.mK[r]
g=f-0.01
g=B.k.D((a8-g)/(f+0.03-g),0,1)
f=C.de()
d=f.a
d.$flags&2&&C.ah(d)
d[11]=0.001
f.me(l*h+D.cPu[r]*o)
f.fk(l*0.9)
h=0.55+0.45*o
f.jf(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cE(0,0,0,0,a3,a3,new C.cw(B.B,a3,a3,new C.kG(g,C.dO(new C.iu(f,a3,B.B,!0,a3,new A.O9(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.v(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.mK[r]
i=q+0.17
a2=B.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.as1[r]
a6.push(new C.cE(0,0,0,0,a3,a3,new C.cw(B.B,a3,a3,C.dO(new C.lT(new A.bm7(B.d.gI(w),a2,a3),a3,new C.ap(a4,30),a3,a3),new C.v(0,q+48-4)),a3),a3))}}return new C.a3(b0,330,new C.am(B.V,a3,B.a9,B.h,a6,a3),a3)}}
A.bmD.prototype={
a6(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.af(w-v,0,w+v,e.b)
q=C.c_(u,B.hi)
$.a1()
t=C.U()
s=0.9*r.d
t.r=r.b.j(s).gt(0)
t.z=H.ph
d.bj(q,t)
t=C.c_(u,B.hi)
q=C.U()
q.r=B.c.j(s).gt(0)
d.bj(t,q)},
ao(d){return d.c!==this.c||d.d!==this.d}}
A.bm5.prototype={
a6(d,e){var w,v,u=this.c,t=C.dy(e.ej(B.J),e.b*u,e.a*u)
$.a1()
u=C.U()
u.b=B.ak
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gt(0)
u.z=X.a0e
d.lf(t,u)
u=C.U()
u.b=B.ak
u.c=2.5
u.r=w.j(0.7).gt(0)
d.lf(t,u)
u=t.cD(-14)
v=C.U()
v.b=B.ak
v.c=1
v.r=w.j(0.3).gt(0)
d.lf(u,v)},
ao(d){return!0}}
A.b6G.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ej(B.J),f=this.c,e=B.co.ar(0,f)
$.a1()
w=C.U()
w.b=B.ak
v=1-f
w.c=5*v
u=this.b
w.r=B.d.gI(u).j(0.6*v).gt(0)
d.aw(g,40+e*a0.a*0.42,w)
t=new C.f5()
t.dZ(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.af()*3.141592653589793*2
n=(40+t.af()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.af()
j=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
i=(p&1)===0?B.d.gI(u):B.c
j.r=i.j(B.k.D(v,0,1)).gt(0)
h=j.M()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
ao(d){return!0}}
A.bm7.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ej(B.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=B.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.dy(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.a1()
o=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.b=B.ak
o.c=2
o.r=u.j((1-q)*0.7).gt(0)
n=o.M()
t.drawOval(C.cz(p),n)
n.delete()}},
ao(d){return d.c!==this.c}}
A.bq_.prototype={
a6(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.af(0,d0,0+c5,d0+60)
$.a1()
d0=C.U()
w=c1.b
v=x.O
d0.sav(new C.a8(B.b3,B.bb,B.x,C.a([B.d.gI(w).j(0.18),B.K],v),c2,c2).aC(0,d1))
d2.bp(d1,d0)
d0=C.U()
d0.r=B.c.j(0.18).gt(0)
d0.c=1
d2.bU(new C.v(0,c4),new C.v(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=A.fDE(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.a1()
a3=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a3.r=B.w.j(0.5).gt(0)
a3.z=B.mN
a4=a3.M()
t.drawOval(C.cz(new C.af(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.af(d,a1,a3,a1+a0)
a6=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a7=C.aq(B.d.gI(w),B.c,0.1)
a7.toString
a6.sav(new C.a8(B.b3,B.bb,B.x,C.a([a7,B.d.gai(w)],v),c2,c2).aC(0,a5))
a4=a6.M()
t.drawRect(C.cz(a5),a4)
a4.delete()
a2=a2.r
a6=C.a([],n)
a8=new C.b0(a2,B.aw,c2,c2,a6)
a6.push(new C.bj(a3,a1))
a7=a3+c8
a9=a1+c9
a6.push(new C.av(a7,a9))
a6.push(new C.av(a7,m))
a6.push(new C.av(a3,c4))
a6.push(new C.bX())
a6=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a6.r=C.aq(B.d.gai(w),B.w,0.5).gt(0)
a4=a6.M()
a6=a8.gbM().a.snapshot()
t.drawPath((a8.e=new C.cG(a6)).a,a4)
a4.delete()
a6=C.a([],n)
b0=new C.b0(a2,B.aw,c2,c2,a6)
a6.push(new C.bj(d,a1))
a6.push(new C.av(d+c8,a9))
a6.push(new C.av(a7,a9))
a6.push(new C.av(a3,a1))
a6.push(new C.bX())
a2=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a2.r=C.aq(B.d.gI(w),B.c,0.45).gt(0)
a4=a2.M()
a2=b0.gbM().a.snapshot()
t.drawPath((b0.e=new C.cG(a2)).a,a4)
a4.delete()
b1=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
b1.b=B.ak
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
b8=C.c_(new C.af(b7,a7,b7+r,b5),B.hi)
$.a1()
b9=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
b9.r=(b4?B.c.j(q):B.w.j(0.22)).gt(0)
a4=b9.M()
t.drawRRect(C.fL(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.af(d,a1,a3,a1+28)
J.bP(t.save())
t.clipRect(C.cz(a5),$.vX()[1],!0)
$.a1()
a1=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a1.sav(new C.a8(B.b3,B.bb,B.x,C.a([B.K,B.c.j(0.4),B.K],v),c2,c2).aC(0,c0))
a4=a1.M()
t.drawRect(C.cz(c0),a4)
a4.delete()
t.restore()}}},
ao(d){return!0}}
A.aJJ.prototype={
aO(){this.aU()
this.aS()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdB())
w.aX$=null
w.a2()}}
A.Z7.prototype={
a3(){return"_Role."+this.b}}
A.pw.prototype={}
A.qb.prototype={}
A.B7.prototype={}
A.X6.prototype={}
A.acg.prototype={}
A.Zk.prototype={
gX(d){return this.d}}
A.Bh.prototype={}
A.a9e.prototype={}
A.a9v.prototype={}
A.abp.prototype={}
A.bd4.prototype={
a0b(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
A.e1(d,"",e,g,h,f)},
b2f(d,e,f){return this.a0b(d,e,f,0,0.55)},
axC(d,e,f,g){return this.a0b(d,e,f,0,g)},
b2g(d,e,f,g){return this.a0b(d,e,f,g,0.55)},
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
w.b_()},
agL(d,e,f,g){var w="n"+this.ay++,v=new A.qb(w,e,f,g)
this.a.m(0,w,v)
this.b_()
return v},
A2(d,e,f){return this.agL(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
B.d.bm(w.b,new A.d8X(e))
B.d.bm(w.c,new A.d8Y(e))
w.b_()},
b6_(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.m5.h(0,v.b).c===D.vt)return!1
w=this.b
if(B.d.bf(w,new A.d8U(d,e)))return!1
w.push(new A.B7(d,e))
this.b_()
return!0},
bSo(d){var w
if(d.b==="beat")return D.bRi[B.o.J(d.d,4)]
w=this.at
switch(B.o.J(d.d,3)){case 1:return 350+w.aA(500)
case 2:return 1400+w.aA(2200)
default:return 450+w.aA(2000)}},
aAY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.m(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.m(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=B.o.J(w,6)
t=D.asf[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new A.Bh(u,t,j.ax,90))
w.push(new A.Bh(u,B.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.af()*3.141592653589793*2
v.push(new A.Zk(u,new C.v(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b2f(261.63*Math.pow(2,([0,4,7,12,16,19][B.o.J(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.af()*3.141592653589793*2
p=100+w.af()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,B.c,w.af()*0.5)
m.toString
v.push(new A.Zk(u,new C.v(o*p,n*p),m,3+w.af()*4.5,1000+w.aA(700),j.ax))}j.f.push(new A.Bh(u,t,j.ax,120))
j.axC(120,200,"noise",0.5)
j.b2f(261.63*Math.pow(2,([7,12,16,19][w.aA(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new A.Bh(u,t,j.ax,230))
w.push(new A.Bh(u,t,j.ax+160,160))
w.push(new A.Bh(u,t,j.ax+320,100))
j.b2g(180+j.at.aA(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new A.a9e(u,new C.v((w.af()-0.5)*220,-260-w.af()*180),t,j.ax))
j.b2g(300+w.aA(300),110,h,0.8)
break
case"comet":w=j.at
q=w.af()*3.141592653589793*2
j.w.push(new A.a9v(u,u.ap(0,new C.v(Math.cos(q),Math.sin(q)).aM(0,260+w.af()*200)),t,j.ax))
j.a0b(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fU()
j.a0b(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new A.abp(u,D.arQ[v],t,j.ax))
j.axC(261.63*Math.pow(2,([0,5,9,12][j.at.aA(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.axC(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.bNp[B.o.J(w,3)]
for(k=1;k<=3;++k)j.chX(d,j.ax+l*k,!0)
break
case"delay":for(w=B.d.gag(j.b),v=new C.hX(w,new A.d8V(d));v.C();)j.awa(w.gT(0),j.ax+D.bZB[B.o.J(g.d,4)])
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
case"chance":s=j.at.aA(100)<D.cfh[B.o.J(g.d,3)]
break
default:break}if(s)for(w=B.d.gag(j.b),v=new C.hX(w,new A.d8W(d));v.C();)j.awa(w.gT(0),j.ax)
w=j.e
v=w.length
if(v>700)B.d.yg(w,0,v-700)},
chX(d,e,f){var w=this.c
if(w.length>260)return
w.push(new A.X6(e,"~"+d))},
awa(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new A.acg(d.a,v,e,w))
u.push(new A.X6(w,v))},
cLo(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=C.a2(w).k("bf<2>")
w=C.A(new C.bf(w,v),v.k("G.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.m(0,r,o.ax+300)
else if(o.ax>=q){o.aAY(r)
u.m(0,r,o.ax+o.bSo(s))}}w=o.c
v=C.T(w).k("a5<1>")
q=C.A(new C.a5(w,new A.d8Z(o),v),v.k("G.E"))
if(q.length!==0){B.d.bm(w,new A.d9_(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.K)(q),++t){u=q[t].b
if(B.a.a_(u,"~")){p=B.a.aV(u,1)
for(u=B.d.gag(v),r=new C.hX(u,new A.d90(p));r.C();)o.awa(u.gT(0),o.ax)}else o.aAY(u)}}B.d.bm(o.d,new A.d91(o))
B.d.bm(o.e,new A.d92(o))
B.d.bm(o.f,new A.d93(o))
B.d.bm(o.w,new A.d94(o))
B.d.bm(o.x,new A.d95(o))
B.d.bm(o.r,new A.d96(o))
o.b_()},
a58(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
for(v=this.a,v=new C.dw(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(C.E(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=C.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,C.K)(t),++o){n=t[o]
v.push(C.a([n.a,n.b],r))}return B.Q.aj(C.E(["nodes",m,"edges",v],u,x.ew),null)},
cCL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.h.a(B.Q.aE(0,d,null))
k.a8(0)
for(o=x.a,n=J.aU(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gT(n)
u=C.t(J.q(v,"k"))
if(!D.m5.am(0,u))continue
t=C.t(J.q(v,"id"))
m.m(0,t,new A.qb(t,u,new C.v(C.f8(J.q(v,"x"))*k.cy.a,C.f8(J.q(v,"y"))*k.cy.b),B.k.L(C.f8(J.q(v,"p")))))
s=C.c3(C.aI(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aU(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gT(o)
q=C.t(J.q(r,0))
p=C.t(J.q(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new A.B7(q,p))}k.b_()
return!0}catch(l){return!1}},
cFH(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.m(0,n,new A.qb(n,r,new C.v(q*p.a,o*p.b),s))
l.b_()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.b6_(w[m.a],w[m.b])}},
gX(d){return this.cy}}
A.Em.prototype={}
A.TO.prototype={
S(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new A.aBb(new A.bd4(C.S(w,x.f3),v,u,t,s,r,q,p,o,C.S(w,n),C.S(w,n),C.S(w,n),C.S(w,n),B.cA,B.K,B.as,$.at()),B.bu,B.J,B.J,B.U,null,null)}}
A.aBb.prototype={
a9y(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$a9y=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.aw(),$async$a9y)
case 6:q=n.kq(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.n(new A.e8R(s))
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
return C.i($async$a9y,v)},
a6C(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a6C=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.n(new A.e8G(s))
u=3
w=6
return C.b(C.aw(),$async$a6C)
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
return C.i($async$a6C,v)},
bEn(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a2(n).k("bf<2>")
v=""+n.a+"|"+o.length+"|"+new C.bf(n,w).cI(0,0,new A.e8I())+"|"+B.d.cI(o,0,new A.e8J())
if(v===p.ch)return p.CW
u=new A.e8M()
t=x.s
s=C.a([],t)
r=new A.e8N(p,s,u)
for(n=new C.bf(n,w).gag(0),w=new C.hX(n,new A.e8K());w.C();){q=n.gT(0)
if(!B.d.bf(o,new A.e8L(q)))s.push(C.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.dc(s,0,C.dJ(5,"count",x.S),x.N).dz(0)},
Z(){var w,v=this
v.a0()
v.a9y()
v.d.db=v.ay
w=v.qQ(new A.e9g(v))
w.kj(0)
v.e!==$&&C.aO()
v.e=w},
p(){var w=this,v=w.as
if(v!=null)v.a9(0)
v=w.e
v===$&&C.c()
v.p()
v=w.d
v.R$=$.at()
v.O$=0
w.bpM()},
a95(d){return this.bRR(d)},
bRR(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$a95=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.aw(),$async$a95)
case 6:q=m.aR(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cCL(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aRZ(B.d.gI(D.arn))
if(s.c!=null)s.n(new A.e8Q())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$a95,v)},
aRZ(d){this.d.cFH(0,d.c,d.d)
this.CV()},
CV(){var w=this.as
if(w!=null)w.a9(0)
this.as=C.cV(B.lk,new A.e8C(this))},
ath(d){var w,v,u,t,s=this.d.a,r=C.a2(s).k("bf<2>")
s=C.A(new C.bf(s,r),r.k("G.E"))
r=C.T(s).k("dv<1>")
s=new C.dv(s,r)
s=new C.bR(s,s.gH(0),r.k("bR<ai.E>"))
w=d.a
r=r.k("ai.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
c6m(d){var w,v,u,t,s,r=this.d.a,q=C.a2(r).k("bf<2>")
r=C.A(new C.bf(r,q),q.k("G.E"))
q=C.T(r).k("dv<1>")
r=new C.dv(r,q)
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
bRF(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.dw(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.m5.h(0,r.b).c===D.vt)continue
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
bZh(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=A.h_A(new C.v(n.a+36,n.b+0),new C.v(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cpi(d){var w,v,u,t,s,r,q=this,p=q.ath(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eG()
u=v.b
if(u==="button"){w.aAY(p)
return}if(q.r)return
t=D.m5.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.pI)s=6
else s=1
v.d=B.o.J(v.d+1,s)
w.b_()
q.CV()
return}if(q.r)return
r=q.bZh(d)
if(r!=null){w=q.d
B.d.cu(w.b,r)
w.b_()
q.CV()}},
c7C(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.c6m(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.ath(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aD(0,d)}},
c7D(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b_()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.v(B.k.D(d.a+s.y.a,46,t.a-46),B.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b_()}}},
aWz(){var w,v,u=this
if(u.z!=null){w=u.bRF(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.b6_(v,w)}else v=!1
if(v){C.jC()
u.CV()}u.z=null
u.d.b_()}else if(u.x!=null){if(u.at)u.CV()
u.x=null}},
a9M(d){return this.bUs(d)},
bUs(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$a9M=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.ath(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.j6()
p=t.c
p.toString
w=3
return C.b(C.c0(D.rn,null,new A.e8T(q),p,!0,!0,!1,B.l4,!1,!1,x.y),$async$a9M)
case 3:if(f===!0){r.W(0,s)
t.CV()}case 1:return C.h(u,v)}})
return C.i($async$a9M,v)},
bZf(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.A2(0,d,new C.v(v.a*(0.25+u.af()*0.5),v.b*(0.2+u.af()*0.55)))
C.eG()
this.CV()},
adk(){var w=0,v=C.j(x.H),u=this,t,s
var $async$adk=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.c0(D.rn,null,new A.e8V(),s,!0,!0,!0,B.l4,!1,!1,x.es),$async$adk)
case 2:t=e
if(t!=null)u.aRZ(t)
return C.h(null,v)}})
return C.i($async$adk,v)},
aaV(d){var w=0,v=C.j(x.H),u=this,t
var $async$aaV=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ce(null,null,!0,null,new A.e8F(),t,null,!0,!0,x.y),$async$aaV)
case 2:if(f===!0){u.d.a8(0)
u.CV()}return C.h(null,v)}})
return C.i($async$aaV,v)},
B(d){var w=this,v=null,u=C.a([C.afw(w.r?new C.bF(B.a1,v,v,new C.C(B.DO,C.hf(D.bv7,D.eNJ,new A.e9e(w),v),v),v):w.bZi(),B.b9,B.id),C.D(C.cj(new A.e9f(w)),1)],x.p)
if(!w.r)u.push(w.ckj())
return C.cf(v,B.bV,C.br(!0,C.u(u,B.m,v,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),v,!1,!1,v,v)},
bA9(){var w=null,v=new A.e8H(),u=B.w.j(0.7),t=C.m(26),s=C.H(B.bq.j(0.5),B.r,1)
return C.bV(0,C.ec(C.as(C.p(w,C.cg(C.u(C.a([D.eXX,B.au,D.f3M,B.ay,v.$4(B.o8,B.bq,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(T.EA,B.cK,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(B.kX,B.cd,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(D.boS,B.cV,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.f39,new C.bF(B.a7,w,w,C.bG(!1,D.eVh,w,w,!0,w,w,this.gbA2(),w,w),w)],x.p),B.F,w,B.e,B.R,0,B.p),B.q,w,B.z,w,w,w,w,B.ah),B.h,w,B.So,new C.o(D.rn,w,s,t,w,w,B.n),w,w,w,B.fv,Y.adg,w,w,w),w,w,w),u,!0),0,0,0)},
bZi(){var w=this,v=null,u=C.aF(v,v,v,v,E.qn,v,v,v,new A.e90(w),v,v,v,v,v,v),t=w.a66(B.Xq,"How it works",new A.e91(w),!0),s=w.ay?B.nr:L.ql
return new C.C(D.bja,C.B(C.a([u,D.bkx,t,w.a66(s,"Sound",new A.e92(w),!0),w.a66(B.dO,"Ideas",w.gcbf(),!0),w.a66(D.wQ,"Clear",w.gbZg(w),!0),w.aJh(B.iG,"Show",new A.e93(w),!0,!0)],x.p),B.m,v,B.e,B.j,0,v,v),v)},
aJh(d,e,f,g,h){var w=null,v=h?B.bq:B.c.j(0.08),u=C.m(14),t=C.m(14),s=C.a([C.V(d,h?B.w:B.c,w,w,w,20)],x.p)
return new C.C(A3.uf,C.aD(!1,B.X,!0,u,C.aH(!1,t,!0,C.hI(new C.C(new C.M(8,8,8,8),C.B(s,B.m,w,B.e,B.R,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ac),w)},
a66(d,e,f,g){return this.aJh(d,e,f,g,!1)},
ckj(){var w=null,v=new A.e8X(this),u=B.c.j(0.08)
return C.p(w,C.cg(C.B(C.a([v.$2("START",D.vt),v.$2("CHANGE",D.C9),v.$2("REACT",D.pI)],x.p),B.F,w,B.e,B.j,0,w,w),B.q,w,B.z,w,w,w,w,B.aY),B.h,w,w,new C.o(D.TE,w,new C.c1(new C.ax(u,1,B.r,-1),B.W,B.W,B.W),w,w,w,B.n),w,w,w,w,D.ber,w,w,w)},
ckk(d){var w,v,u,t,s=null,r=D.m5.h(0,d)
r.toString
w=C.m(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.H(v.j(0.5),B.r,1)
return new C.C(B.hd,C.aJ(s,C.p(s,C.u(C.a([C.V(r.b,v,s,s,s,22),B.d4,C.d(r.a,s,1,B.Z,s,s,s,D.a4a,s,s,s)],x.p),B.m,s,B.e,B.R,0,B.p),B.h,s,s,new C.o(s,s,t,w,s,new C.a8(B.b3,B.bb,B.x,u,s,s),B.n),s,s,s,s,B.ht,s,s,62),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.e8W(this,d),s,s,s,s,s,s,!1,B.ae),s)}}
A.bd5.prototype={
a6(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bP(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.a1()
u=C.U()
u.r=B.c.j(0.05).gt(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.M()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.a1()
o=C.U()
o.r=b5.cx.j(0.4*((p-b6)/800)).gt(0)
b8.bp(new C.af(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){l=w[m]
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
a0=new C.b0(e.r,B.aw,b4,b4,d)
d.push(new C.bj(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new C.p4(h+a1,i,f-a1,g,f,g))
a2=D.m5.h(0,k.b).d
a3=D.m5.h(0,j.b).d
e=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
e.b=B.ak
e.c=3
e.d=B.bZ
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.qT(new C.v(h,i),new C.v(f,g))
e.sav(new C.a8(B.a1,B.a7,B.x,d,b4,b4).aC(0,new C.af(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.M()
i=a0.gbM().a.snapshot()
b7.drawPath((a0.e=new C.cG(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=B.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=A.h_A(new C.v(i.a+36,i.b+0),new C.v(h.a-36,h.b),a5)
$.a1()
h=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
h.r=B.c.j(0.35).gt(0)
h.z=H.ph
q=h.M()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
g.r=B.c.gt(0)
q=g.M()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ap(0,D.Gg)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new C.b0($.a1().r,B.aw,b4,b4,C.a([],o))
o=a8.b
a0.N(new C.bj(t,o))
i=a9.b
a0.N(new C.p4(t+a1,o,w-a1,i,w,i))
i=C.U()
i.b=B.ak
i.c=3
i.r=B.c.j(0.7).gt(0)
b8.b4(a0,i)
i=C.U()
i.r=B.c.gt(0)
b8.aw(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b0=w[m]
o=b0.c
v=B.k.D((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=B.dU.ar(0,v)
$.a1()
h=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
h.b=B.ak
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gt(0)
q=h.M()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b1=w[m]
v=B.k.D((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=C.l0(o,i,B.dU.ar(0,v))
h.toString
i=C.l0(o,i,B.dU.ar(0,B.k.D(v-0.35,0,1)))
i.toString
$.a1()
o=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.c=5
o.d=B.bZ
g=b1.c
f=C.a([g.j(0),g],p)
e=C.qT(i,h)
o.sav(new C.a8(B.a1,B.a7,B.x,f,b4,b4).aC(0,new C.af(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.M()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
i.r=B.c.gt(0)
q=i.M()
b7.drawCircle(o,h,6,q)
q.delete()
i=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
i.r=g.j(0.5*(1-v)).gt(0)
i.z=B.jf
q=i.M()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){a4=w[m]
v=B.k.D((b6-a4.f)/a4.e,0,1)
o=a4.a
$.a1()
i=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
i.r=a4.c.j(1-v).gt(0)
q=i.M()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){j=w[m]
o=j.a
$.a1()
i=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
h=j.c
i.r=h.j(0.35).gt(0)
i.z=B.jf
q=i.M()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
i.sav(new C.bS(N.qY,0.5,B.x,b4,0,C.a([B.c,h],p),b4,b4).aC(0,C.c2(j.a,8)))
q=i.M()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.K)(b5),++m){a6=b5[m]
v=B.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=A.bd6(a6.b,26+8*t,a6.c.j(t),b4,b4,B.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a6(b8,new C.v(t.a-o/2,t.b-(40+60*v+p.gbe(p)/2)))}for(b5=new C.dw(n,n.r,n.e);b5.C();)b3.c7b(b8,b5.d,b6)
b7.restore()},
c7b(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.m5.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:B.k.D(1-(f-w)/520,0,1)
u=C.dy(e.c,64,64)
t=C.c_(u,B.jK)
s=t.eG(B.cv)
$.a1()
r=C.U()
r.r=B.w.j(0.55).gt(0)
r.z=B.mN
d.bj(s,r)
if(v>0){s=t.cD(6)
r=C.U()
r.r=h.d.j(0.6*v).gt(0)
r.z=B.FL
d.bj(s,r)}s=t.eG(B.cG)
r=C.U()
q=h.d
r.r=C.aq(q,B.w,0.65).gt(0)
d.bj(s,r)
r=C.U()
s=C.aq(q,B.c,0.18+0.4*v)
s.toString
p=C.aq(q,B.w,0.35)
p.toString
r.sav(new C.a8(B.b3,B.bb,B.x,C.a([s,p],x.O),j,j).aC(0,u))
d.bj(t,r)
r=C.U()
r.b=B.ak
r.c=1.2
r.r=B.c.j(0.35).gt(0)
d.bj(t,r)
r=h.b
p=e.c
o=A.bd6(C.jv(r.a),30,B.c,r.b,j,B.I)
r=o.b
s=r.c
r=r.a.c
o.a6(d,p.aD(0,new C.v(s/2,r.gbe(r)/2)))
n=A.bd6(h.a,11,B.c,j,j,B.I)
n.a6(d,e.c.ap(0,new C.v(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[B.o.J(e.d,r)]
else m=i==="pop"?D.arQ[B.o.J(e.d,6)]:j
h=h.c
if(h===D.pI){s=e.c.ap(0,new C.v(0,62))
r=C.U()
r.r=D.asf[B.o.J(e.d,6)].gt(0)
d.aw(s,5,r)}else if(m!=null){l=A.bd6(m,9.5,B.aA,j,j,B.O)
l.a6(d,e.c.ap(0,new C.v(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=A.bd6(m,9.5,B.aA,j,j,B.O)
l.a6(d,e.c.ap(0,new C.v(-l.b.c/2,54)))}if(k.c)return
if(h!==D.vt)k.aXl(d,e.c.aD(0,D.Gg),q)
k.aXl(d,e.c.ap(0,D.Gg),q)},
aXl(d,e,f){var w
$.a1()
w=C.U()
w.r=B.bV.gt(0)
d.aw(e,9,w)
w=C.U()
w.b=B.ak
w.c=2.2
w.r=f.gt(0)
d.aw(e,9,w)
w=C.U()
w.r=B.c.gt(0)
d.aw(e,3.5,w)},
ao(d){return!0}}
A.aIU.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.bhA.prototype={}
A.O0.prototype={
gX(d){return this.d}}
A.U2.prototype={
S(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new A.bgF(new C.cn(null,x.A),w,v,B.cA,B.bu,D.D0,null,null)}}
A.bgF.prototype={
aVa(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=B.o.D(B.k.bK((1-d.b/(C.aG(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.aqS[B.o.J(v,5)]+12*B.o.ak(v,5)+12
switch(t.z){case"glow":A.l_("synth",u,420,0.3)
break
case"rainbow":A.l_("bell",u,700,0.35)
break
case"stars":A.l_("pluck",u+12,400,0.4)
break
case"sparks":A.e1(2400+t.r.aA(2000),"",60,0,0.18,"noise")
break
default:A.e1(110+t.r.aA(60),"",140,0,0.22,"noise")}},
c18(d){return this.aVa(d,!1)},
Z(){var w,v=this
v.a0()
w=v.qQ(new A.ej1(v))
w.kj(0)
v.w!==$&&C.aO()
v.w=w},
p(){var w=this.w
w===$&&C.c()
w.p()
this.bpV()},
gaWT(){var w=this.Q
return w<0?new G.mO(1,B.k.J(this.y*0.18,360),0.85,1).iE():D.NY[w]},
aNx(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gaWT(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.af()*3.141592653589793*2
switch(l.z){case"fire":q=v.af()
p=l.as
o=v.af()
n=v.af()
m=C.aq(B.cV,B.aH,v.af())
m.toString
j.push(new A.O0(new C.v(u+(q-0.5)*p,t),new C.v((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.af()*0.4),l.y,700+v.aA(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.af()*200
n=C.aq(k,B.c,v.af()*0.6)
n.toString
j.push(new A.O0(d,new C.v(q*o,p*o),n,1.5+v.af()*3,l.y,600+v.aA(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.af()*40
j.push(new A.O0(d,new C.v(q*o,p*o),k,1.2+v.af()*1.8,l.y,500))}}},
aU4(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gaWT()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new A.bhA(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aNx(e)
r.aVa(e,!0)
r.n(new A.eiD())},
aU3(){this.ax=null
this.n(new A.eiC())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aF(n,n,n,n,D.m1,n,n,n,new A.eiM(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b2(n,n,n,new A.bnS(k,o.f,o.y,o.at,n),B.as)],m)
if(!o.ay&&k.length===0)j.push(D.aWL)
k=C.aJ(B.c4,new C.am(B.V,n,B.aX,B.q,j,n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,new A.eiN(o),new A.eiO(o),new A.eiS(o),n,n,n,n,n,n,n,n,n,new A.eiT(o),new A.eiU(o),n,n,n,!1,B.ae)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cCs[w]
j.push(new A.dx(v.b,o.z===v.a,new A.eiV(o,v),v.c,B.cd,n))}u=C.a([new A.DR(B.c,o.Q<0,new A.eiW(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new A.DR(D.NY[t],o.Q===t,new A.eiX(o,t),!1,n))
s=o.as
s=A.ho(B.cd,B.o.u(B.k.U(s)),"Size",36,4,new A.eiY(o),s)
r=o.ch
q=r?B.nr:L.ql
q=C.a([new A.dx("Sound",r,new A.eiZ(o),q,B.cd,n),new A.fe(B.uA,"Undo",new A.eiP(o),B.c,n),new A.fe(D.wQ,"Clear",new A.eiQ(o),B.cN,n)],m)
for(w=0;w<4;++w){p=D.cQS[w]
q.push(new A.DR(p,o.at.A(0,p),new A.eiR(o,p),!1,n))}return A.je(B.cd,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.en(k,o.d),"SPARK PAINTER",C.u(C.a([new A.eE(j,"BRUSH",n),new A.eE(u,"COLOUR",n),s,new A.eE(q,n,n)],m),B.m,n,B.e,B.R,0,B.p))}}
A.bnS.prototype={
a6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.a1()
w=C.U()
v=a4.e
w.r=v.gt(v)
a6.bp(new C.af(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.a1()
o=C.a([],t)
n=new C.b0(p.r,B.aw,a5,a5,o)
o.push(new C.bj(B.d.gI(q).a,B.d.gI(q).b))
for(p=C.T(q),m=p.k("ps<1>"),l=new C.ps(q,1,a5,m),l.FT(q,1,a5,p.c),l=new C.bR(l,l.gH(0),m.k("bR<ai.E>")),m=m.k("ai.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.av(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bH(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=B.d.gI(q)
$.a1()
p=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=r.c.gt(0)
j=p.M()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.a1()
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.b=B.ak
q.d=B.bZ
q.e=B.fl
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gt(0)
q.z=new C.hF(B.G,p)
j=q.M()
q=n.e
u.drawPath((q==null?n.e=new C.cG(n.gbM().a.snapshot()):q).a,j)
j.delete()
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.b=B.ak
q.d=B.bZ
q.e=B.fl
q.c=p
q.r=o.gt(0)
j=q.M()
q=n.e
u.drawPath((q==null?n.e=new C.cG(n.gbM().a.snapshot()):q).a,j)
j.delete()
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.b=B.ak
q.d=B.bZ
q.e=B.fl
q.c=p*0.35
q.r=B.c.j(0.85).gt(0)
j=q.M()
q=n.e
u.drawPath((q==null?n.e=new C.cG(n.gbM().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new G.mO(1,B.o.J(i*5,360),0.85,1).iE()
o=q[i-1]
m=q[i]
$.a1()
l=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
l.c=p
l.d=B.bZ
l.r=h.gt(0)
j=l.M()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,C.K)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=B.d.gI(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new G.mO(1,B.o.J(a3*23,360),0.7,1).iE():l
a4.bZj(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){a0=w[s]
e=B.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.a1()
p=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=a0.c.j((1-e)*0.9).gt(0)
p.z=E.a0f
j=p.M()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
bZj(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.a1(),o=C.a([],x.v),n=new C.b0(p.r,B.aw,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new C.bj(r,q)
o.push(r)
q=n.f
if(q!=null)r.bH(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new C.av(r,q)
o.push(r)
q=n.f
if(q!=null)r.bH(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.N(new C.bX())
$.a1()
p=C.U()
p.r=h.j(0.4).gt(0)
p.z=B.jf
d.b4(n,p)
p=C.U()
p.r=h.gt(0)
d.b4(n,p)},
ao(d){return!0}}
A.Ue.prototype={
S(){return new A.aBp(new C.cn(null,x.A),new C.ao(new C.bb("NGMY",B.b_,B.aL),$.at()),null,null)}}
A.aBp.prototype={
gHm(){var w,v=this,u=v.e
if(u===$){w=C.bi(null,B.rx,null,1,null,v)
w.cF(0)
v.e!==$&&C.bI()
v.e=w
u=w}return u},
Z(){this.a0()
var w=this.gHm()
w.d5()
w.dM$.G(0,this.gbQQ())},
bQR(){var w,v,u,t,s,r,q,p=this,o=p.gHm().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?B.lz:new C.lM(w)).gH(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)A.e1(1500,"",35,0,0.18,"square")
else if(s==="glitch")A.e1(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
A.l_(s,D.apT[B.o.J(t,8)]+12,450,0.35)}}p.Q=o},
p(){this.gHm().p()
var w=this.f
w.R$=$.at()
w.O$=0
this.bq0()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.lM(h)
w=C.A(h,C.a2(h).k("G.E"))}v=D.NY[k.w]
h=x.p
u=C.a([C.aF(j,j,j,j,D.m1,j,j,j,new A.epB(k,d),j,j,j,j,"Share",j)],h)
t=C.m(26)
s=D.arR[k.y]
s=C.bv(t,C.bQ(C.as(C.c4(k.gHm(),new A.epC(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a8(B.ax,B.aC,B.x,s,j,j),B.n),B.b7),B.ap)
t=B.c.j(0.06)
t=C.aK(j,B.U,!1,j,!0,B.q,j,C.aL(),i,j,j,j,j,j,2,C.bl(j,new C.b1(4,C.m(14),B.W),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,H.BM,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),B.z,!0,j,!0,j,!1,j,B.af,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new A.epD(k),j,j,j,!1,j,j,!1,j,!0,j,B.a8,j,j,j,j,j,j,j,j,j,j,j,B.h8,!0,B.a6,j,B.am,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.cf5[r]
i.push(new A.dx(q.b,k.r===q.a,new A.epE(k,q),j,B.cV,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new A.DR(D.NY[o],k.w===o,new A.epF(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?B.nr:L.ql
l=C.a([new A.dx(m,n,new A.epG(k),l,B.cV,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new A.DR(D.arR[o][0],k.y===o,new A.epH(k,o),!1,j))
n.push(B.bo)
n.push(new A.fe(B.m_,"Replay",new A.epI(k),B.c,j))
m=k.x
return A.je(B.cV,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.C(B.bA,new C.en(s,k.d),j),"TITLE ANIMATOR",C.u(C.a([t,B.P,new A.eE(i,"MOVE",j),new A.eE(p,"COLOUR",j),new A.eE(l,"SOUND",j),new A.eE(n,"BACK",j),A.ho(B.cV,B.o.u(B.k.U(m)),"Size",96,28,new A.epJ(k),m)],h),B.m,j,B.e,B.R,0,B.p))},
bTy(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cJ(h.j(0.7),B.J,18)],x.q),o=0,n=1,m=1,l=0
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
p.push(new C.cJ(h,B.J,30*v))
p.push(new C.cJ(h.j(0.8),B.J,60*v))
w=h
m=v
break
case"glitch":u=B.o.J(B.k.bK(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=B.bd
else w=u?B.cd:h
break
case"zoom":t=B.k.D(g*1.4-q*0.5,0,1)
n=B.oB.ar(0,t)
w=h
m=t
break
case"rainbow":w=new G.mO(1,B.k.J(g*360+e*40,360),0.75,1).iE()
B.d.a8(p)
p.push(new C.cJ(w.j(0.7),B.J,18))
break
default:w=h}return C.d4(C.dO(C.e5(B.B,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,B.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.v(l,o)),m)}}
A.aJ2.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.aJ8.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.YD.prototype={}
A.TM.prototype={
S(){var w=C.a([],x.aS)
return new A.aB4(new C.cn(null,x.A),w,B.cA,B.as,$,B.bu,0,C.a([],x.X),null,null)}}
A.aB4.prototype={
gaaW(){var w=this.r
return new C.v(w.a/2,w.b/2)},
aY0(){return new G.mO(1,this.f.af()*360,0.6,1).iE()},
ao0(d,e,f,g){var w=this,v=w.gaaW().ap(0,new C.v(Math.cos(e),Math.sin(e)).aM(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new A.YD(v,new C.v(-t,s).aM(0,r).aM(0,u*f),w.Q*(0.6+w.f.af()*0.9),w.aY0(),C.a([],x.g)))},
bzw(d,e,f){return this.ao0(d,e,f,!1)},
bzv(d,e){return this.ao0(d,e,1,!1)},
cmz(){var w,v,u,t=this
B.d.a8(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bzv(40+w*u/5,v.af()*3.141592653589793*2)},
bAo(){var w=this.r
this.bzw(Math.min(w.a,w.b)*0.42,this.f.af()*3.141592653589793*2,0.45)},
Z(){this.a0()
this.kH()},
l_(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,B.as))return
w=a2.e
v=w.length
if(v===0&&a2.fD$<300)return
u=a2.gaaW()
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
if(o.length!==0){m=B.d.gai(o)
j=n.a
f=m.a-j.a
j=m.b-j.b
j=Math.sqrt(f*f+j*j)>3
m=j}else m=!0
if(m)o.push(n.a)
if(o.length>260)B.d.cu(o,0)}else B.d.a8(n.e)}for(p=0;p<w.length;w.length===o||(0,C.K)(w),++p){n=w[p]
v=n.a
a1=!1
if(v.b<r)if(J.lB(v.a-s)!==J.lB(n.f-s)){v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
m=v<Math.min(Math.abs(m.a),Math.abs(m.b))
a1=m}if(a1&&a2.ax&&a2.fD$-n.r>250){n.r=a2.fD$
v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
A.l_("bell",D.apT[B.k.U((1-B.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a5(w,new A.e5R(u),C.T(w).k("a5<1>")).gH(0)>0&&a2.ax)A.e1(70,"",300,0.6,0.8,"sine")
B.d.bm(w,new A.e5S(a2,u))},
cb8(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gaaW()
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
gaRE(){var w,v=this.as
if(v==null||this.at==null)v=B.J
else{w=this.at
w.toString
w=v.aD(0,w).aM(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aF(r,r,r,r,D.m1,r,r,r,new A.e5F(s,d),r,r,r,r,"Share",r)],q),o=C.cj(new A.e5G(s)),n=s.w
n=A.ho(B.dh,B.k.ab(n,1)+"x","Sun mass",2.5,0.3,new A.e5H(s),n)
w=s.x
w=A.ho(B.dh,B.k.ab(w,1)+"x","Time",3,0.2,new A.e5J(s),w)
v=s.Q
v=A.ho(B.dh,B.o.u(B.k.U(v)),"Planet size",16,3,new A.e5K(s),v)
u=s.ax
t=u?B.nr:L.ql
return A.je(B.dh,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.u(C.a([n,w,v,new A.eE(C.a([new A.dx("Sound",u,new A.e5L(s),t,B.dh,r),new A.dx("Trails",s.z,new A.e5M(s),B.Lh,B.dh,r),new A.dx("Planets pull each other",s.y,new A.e5N(s),B.xe,B.dh,r)],q),r,r),new A.eE(C.a([new A.fe(B.lZ,"Solar system",new A.e5O(s),B.dh,r),new A.fe(B.mG,"Comet",new A.e5P(s),B.c,r),new A.fe(B.lW,"Cluster",new A.e5Q(s),B.c,r),new A.fe(D.wQ,"Clear",new A.e5I(s),B.cN,r)],q),r,r)],q),B.m,r,B.e,B.R,0,B.p))}}
A.bhn.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.a1()
w=C.U()
w.r=D.Tx.gt(0)
d.bp(new C.af(0,0,0+g,0+f),w)
v=new C.f5()
v.dZ(5)
for(w=d.a,u=0;u<70;++u){t=v.af()
s=v.af()
r=v.af()
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=B.c.j(0.25+v.af()*0.4).gt(0)
p=q.M()
w.drawCircle(t*g,s*f,r*1.2+0.3,p)
p.delete()}o=16+i.d*6
g=i.c
f=o*3.2
t=C.U()
s=x.O
t.sav(new C.bS(B.B,0.5,B.x,h,0,C.a([B.dh.j(0.45),B.K],s),h,h).aC(0,C.c2(g,f)))
d.aw(g,f,t)
t=C.U()
t.sav(D.dRp.aC(0,C.c2(g,o)))
d.aw(g,o,t)
for(g=i.b,f=g.length,n=0;n<g.length;g.length===f||(0,C.K)(g),++n){m=g[n]
t=m.e
if(t.length>1)for(r=m.d,u=1;q=t.length,u<q;++u){l=u/q
q=t[u-1]
k=t[u]
j=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
j.c=2.2*l+0.4
j.d=B.bZ
j.r=r.j(l*0.8).gt(0)
p=j.M()
w.drawLine.apply(w,[q.a,q.b,k.a,k.b,p])
p.delete()}t=m.a
r=m.c
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
k=m.d
q.r=k.j(0.3).gt(0)
q.z=H.ph
p=q.M()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
j=C.aq(k,B.w,0.5)
j.toString
q.sav(new C.bS(N.qY,0.5,B.x,h,0,C.a([B.c,k,j],s),h,h).aC(0,C.c2(m.a,r)))
p=q.M()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.U()
t.c=2
t.r=B.j9.gt(0)
d.bU(g,f,t)
t=C.U()
t.r=B.c.gt(0)
d.aw(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,C.K)(g),++n){m=g[n]
t=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
t.r=B.c.j(0.7).gt(0)
p=t.M()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
ao(d){return!0}}
A.a9l.prototype={}
A.U9.prototype={
S(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new A.bgK(new C.cn(null,x.A),w,v,B.cA,B.as,$,B.bu,0,C.a([],x.X),null,null)}}
A.bgK.prototype={
Z(){this.a0()
this.kH()},
bZk(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.e,v=k.r;w.length<B.k.U(k.x);){u=v.af()*3.141592653589793*2
t=k.w
s=v.af()
r=k.w
q=v.af()
p=Math.cos(u)
o=Math.sin(u)
n=k.as
m=v.af()
l=k.ax
if(l==="fish")l=170
else l=l==="fly"?50:300
w.push(new A.a9l(new C.v(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.v(p*n,o*n),B.k.J(m*60+l,360)))}while(w.length>B.k.U(k.x))w.pop()},
l_(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,B.as))return
a2.bZk()
w=a2.f
B.d.bm(w,new A.ep2(a2))
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
k=B.k.D(a0,l*0.5,l*k)
s.b=new C.v(j.a/a0*k,j.b/a0*k)}l=s.a
k=s.b
s.a=new C.v(l.a+k.a*a3,l.b+k.b*a3)}a1=w.length
B.d.bm(w,new A.ep3(a2))
if(w.length<a1&&a2.ch)A.l_("bell",12+a2.r.aA(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fD$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fD$
A.l_("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aF(l,l,l,l,D.m1,l,l,l,new A.eoS(m,d),l,l,l,l,"Share",l)],k),i=C.cj(new A.eoT(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cDV[w]
h.push(new A.dx(v.b,m.at===v.a,new A.eoU(m,v),v.c,B.bt,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.coL[w]
u.push(new A.dx(t.b,m.ax===t.a,new A.eoV(m,t),l,B.bt,l))}s=m.ch
r=s?B.nr:L.ql
r=C.a([new A.dx("Sound",s,new A.eoW(m),r,B.bt,l)],k)
s=m.x
s=A.ho(B.bt,B.o.u(B.k.U(s)),"How many",150,15,new A.eoX(m),s)
q=A.ho(B.bt,l,"Together",2.5,0,new A.eoY(m),m.y)
p=A.ho(B.bt,l,"Apart",2.5,0,new A.eoZ(m),m.z)
o=A.ho(B.bt,l,"Same way",2.5,0,new A.ep_(m),m.Q)
n=m.as
return A.je(B.bt,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.u(C.a([new A.eE(h,"TOUCH",l),new A.eE(u,"LOOK",l),new A.eE(r,l,l),s,q,p,o,A.ho(B.bt,B.o.u(B.k.U(n)),"Speed",280,50,new A.ep0(m),n)],k),B.m,l,B.e,B.R,0,B.p))}}
A.boI.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.a9e,D.b9n],x.O)
else{v=x.O
w=a4==="fly"?C.a([B.dc,Q.aaF],v):C.a([D.b6Q,D.b_i],v)}v=0+a6.a
u=0+a6.b
t=$.a1()
s=C.U()
s.sav(new C.a8(B.b3,B.bb,B.x,w,a3,a3).aC(0,new C.af(0,0,v,u)))
a5.bp(new C.af(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){q=v[r].a
p=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=B.cV.gt(0)
o=p.M()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
n.r=B.cV.j(0.25).gt(0)
n.z=H.ph
o=n.M()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new G.mO(1,j,0.7,1).iE()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
f.r=h.j(0.35*g).gt(0)
f.z=B.jf
o=f.M()
s.drawCircle(j.a,j.b,9,o)
o.delete()
j=k.a
f=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
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
d=new C.b0(t,B.aw,a3,a3,j)
j.push(new C.bj(8,0))
j.push(new C.av(-6,-7-e))
j.push(new C.av(-2,0))
j.push(new C.av(-6,7+e))
j.push(new C.bX())
j=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
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
d=new C.b0(t,B.aw,a3,a3,j)
j.push(new C.bj(9,0))
j.push(new C.dn(0,-6,-7,a0))
j.push(new C.av(-12,-4+a0))
j.push(new C.av(-12,4+a0))
j.push(new C.av(-7,a0))
j.push(new C.dn(0,6,9,0))
j=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
f=C.aq(h,B.cE,0.6)
f.toString
j.sav(new C.a8(B.a1,B.a7,B.x,C.a([h,f],q),a3,a3).aC(0,D.ehW))
o=j.M()
j=d.gbM().a.snapshot()
s.drawPath((d.e=new C.cG(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=B.cN
else a1=v==="scare"?B.cV:B.bt
v=u?12:22
u=C.U()
u.b=B.ak
u.c=2.5
u.r=a1.j(0.8).gt(0)
a5.aw(a4,v,u)}},
ao(d){return!0}}
A.a9O.prototype={}
A.Sk.prototype={
S(){var w=C.a([],x.bi)
return new A.azG(w,B.cA,B.as,C.S(x.N,x.S),$,B.bu,0,C.a([],x.X),null,null)}}
A.azG.prototype={
gGP(){var w=this.r,v=18+B.k.U(w*0.85)
return B.o.D(B.k.U(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gaa2(){return 54-8*(this.r/100)},
Z(){this.a0()
this.kH()
A.yq("chain_burst").bw(new A.dyj(this),x.P)},
aU6(){return A.v6("chain_burst",C.E(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
awd(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
B.d.a8(k)
l.z=l.y=!1
w=l.as=0
l.at=null
v=18+B.k.U(l.r*0.85)
for(u=l.e;w<v;++w){t=u.af()*3.141592653589793*2
s=u.af()
r=l.f
q=u.af()
p=l.f
o=Math.cos(t)
n=Math.sin(t)
m=(30+l.r*0.45)*(0.6+u.af()*0.8)
k.push(new A.a9O(new C.v(20+s*(r.a-40),20+q*(p.b-40)),new C.v(o*m,n*m),new G.mO(1,u.af()*360,0.6,1).iE()))}},
Xh(d){var w,v=this
if(d==null)return 0
w=(v.fD$-d)/1000
if(w<0.4)return v.gaa2()*B.dU.ar(0,w/0.4)
if(w<1.1)return v.gaa2()
if(w<1.5)return v.gaa2()*(1-(w-1.1)/0.4)
return 0},
l_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,B.as)||!j.Q)return
w=j.d
if(w.length===0)j.awd()
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
if(v!=null)n.push(new C.z(v,j.Xh(j.ax)))
for(v=B.d.gag(w),s=new C.hX(v,new A.dyk());s.C();){r=v.gT(0)
n.push(new C.z(r.a,j.Xh(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.K)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fD$
A.e1(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eG()
break}}}if(!(j.at!=null&&j.Xh(j.ax)>0||B.d.bf(w,new A.dyl(j)))&&j.fD$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gGP()){if(j.as>=j.gGP()*1.5)k=3
else k=j.as>=j.gGP()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.m(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
A.At("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aU6()}else A.e1(120,"",300,0,0.3,"saw")}}},
aU5(d){this.n(new A.dy9(this,d))
this.aU6()},
aaX(){var w=0,v=C.j(x.H),u=this,t,s
var $async$aaX=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.ce(null,null,!0,null,new A.dyc(u),s,null,!0,!0,x.S),$async$aaX)
case 2:t=e
if(t!=null)u.aU5(t)
return C.h(null,v)}})
return C.i($async$aaX,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gGP(),t=w.x.h(0,""+w.r)
return A.je(B.cd,B.fT,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cj(new A.dyg(w,t==null?0:t,u)),"CHAIN BURST",C.B(C.a([new A.fe(B.qh,"Levels",w.gbZl(),B.cd,v),new A.fe(B.jF,"New board",new A.dyh(w),B.c,v)],x.p),B.m,v,B.e,B.j,0,v,v))},
aru(d,e,f){var w=null
return C.u(C.a([C.d(d,w,w,w,w,w,w,D.aJc,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p)},
bRh(d,e){return this.aru(d,e,B.c)}}
A.b70.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.a1()
w=C.U()
w.r=D.D0.gt(0)
d.bp(new C.af(0,0,0+e.a,0+e.b),w)
v=new A.cEZ(d)
w=l.c
if(w!=null)v.$3(w,l.r.$1(l.d),B.c)
for(w=l.b,u=w.length,t=d.a,s=l.r,r=0;r<w.length;w.length===u||(0,C.K)(w),++r){q=w[r]
p=q.d
o=q.a
n=q.c
if(p!=null)v.$3(o,s.$1(p),n)
else{$.a1()
p=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=n.j(0.25).gt(0)
p.z=H.ph
m=p.M()
t.drawCircle(o.a,o.b,12,m)
m.delete()
o=q.a
p=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=n.gt(0)
m=p.M()
t.drawCircle(o.a,o.b,8,m)
m.delete()}}},
ao(d){return!0}}
A.aI2.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.bsR.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.boT()}}
A.aIR.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.bt6.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpJ()}}
A.aJ5.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.bte.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpY()}}
A.Ei.prototype={
gcF_(){return this.a.aD(0,this.b).gcj()>4}}
A.aaC.prototype={}
A.TG.prototype={
S(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new A.bgj(new C.cn(null,x.A),w,v,B.cA,B.as,$,B.bu,0,C.a([],x.X),null,null)}}
A.bgj.prototype={
aLh(d){return new G.mO(1,B.o.J(d*29,360),0.6,1).iE()},
Y_(d){var w,v=D.AN.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=B.o.D(B.k.bK(d.a/s*t),0,t-1)
return v[B.o.J(w,u)]+12*B.o.eb(w,u)},
aNN(d){B.d.bm(this.e,new A.e1k(this,d))},
ciN(d,e,f){var w=f.aD(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aD(0,e).gcj()
return d.aD(0,e.ap(0,w.aM(0,B.k.D((d.aD(0,e).a*v+d.aD(0,e).b*u)/t,0,1)))).gcj()},
auM(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
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
k=g.Y_(new C.v((q+n)/2,(p+m)/2))
p=r?o:new C.v(n,p)
r=r?l:new C.v(q,m)
f.push(new A.Ei(p,r,k,new G.mO(1,B.o.J(k*29,360),0.6,1).iE()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.v(v*(0.1+i*0.16+r),w)
k=g.Y_(h)
f.push(new A.Ei(h,h,k,new G.mO(1,B.o.J(k*29,360),0.6,1).iE()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.v(v*(0.08+w.af()*0.84),u*(0.2+w.af()*0.65))
k=g.Y_(h)
f.push(new A.Ei(h,h,k,new G.mO(1,B.o.J(k*29,360),0.6,1).iE()))}}},
Z(){this.a0()
this.kH()},
bZn(d,e){var w,v=this.fD$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
A.l_(v,d.c+12,w,B.k.D(0.25+e/900,0.25,0.8))}},
l_(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,B.as))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new A.aaC(new C.v(a2.w.a*(0.2+v.af()*0.6),6),new C.v((v.af()-0.5)*40,0),new G.mO(1,v.af()*360,0.5,1).iE()))}if(u>3)a2.as=0
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
if(a1<0){a2.bZn(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.v(m.a-l*k,m.b-n*k)}}}}}B.d.bm(w,new A.e1J(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aF(p,p,p,p,C.V(q.ay?B.nr:L.ql,B.aj,p,p,p,21),p,p,p,new A.e1y(q),p,p,p,p,"Sound",p),C.aF(p,p,p,p,D.m1,p,p,p,new A.e1z(q,d),p,p,p,p,"Share",p)],o),m=C.cj(new A.e1A(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.cGZ[w]
l.push(new A.dx(v.b,q.x===v.a,new A.e1B(q,v),v.c,B.bd,p))}u=C.a([],o)
for(t=J.aU(D.AN.ge9(D.AN));t.C();){s=t.gT(t)
u.push(new A.dx(s,q.y===s,new A.e1C(q,s),p,B.bd,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.asA[w]
t.push(new A.dx(r.b,q.z===r.a,new A.e1D(q,r),p,B.bd,p))}s=q.Q
return A.je(B.bd,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.u(C.a([new A.eE(l,"TOOL",p),new A.eE(u,"SCALE",p),new A.eE(t,"SOUND",p),A.ho(B.bd,B.k.ab(s,1)+"/s","Marbles",4,0.3,new A.e1E(q),s),new A.eE(C.a([new A.fe(D.br0,"Stairs",new A.e1F(q),B.bd,p),new A.fe(Aa.L5,"Pinball",new A.e1G(q),B.c,p),new A.fe(B.lW,"Random",new A.e1H(q),B.c,p),new A.fe(D.wQ,"Clear",new A.e1I(q),B.cN,p)],o),p,p)],o),B.m,p,B.e,B.R,0,B.p))}}
A.be_.prototype={
a6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.a1()
w=C.U()
w.sav(D.bGB.aC(0,new C.af(0,0,a0,a1)))
a2.bp(new C.af(0,0,a0,a1),w)
for(a0=e.b,a1=a0.length,w=a2.a,v=x.O,u=e.f,t=0;t<a0.length;a0.length===a1||(0,C.K)(a0),++t){s=a0[t]
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
if(Math.sqrt(m*m+k*k)>4){q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.b=B.ak
q.d=B.bZ
q.c=12+j
q.r=i.j(0.2+h).gt(0)
q.z=B.jf
g=q.M()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.b=B.ak
q.d=B.bZ
q.c=6
q.r=C.aq(i,B.c,r*0.7).gt(0)
g=q.M()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()}else{p=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=i.j(0.25+h).gt(0)
p.z=B.jf
g=p.M()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p=C.aq(i,B.w,0.4)
p.toString
j.sav(new C.bS(N.qY,0.5,B.x,d,0,C.a([B.c,i,p],v),d,d).aC(0,C.c2(q,9)))
g=j.M()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=C.U()
u.c=5
u.d=B.bZ
u.r=B.aA.gt(0)
a2.bU(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,C.K)(a0),++t){f=a0[t]
u=f.a
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p=f.c
q.r=p.j(0.3).gt(0)
q.z=B.qw
g=q.M()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.sav(new C.bS(N.qY,0.5,B.x,d,0,C.a([B.c,p],v),d,d).aC(0,C.c2(f.a,7)))
g=q.M()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
ao(d){return!0}}
A.ab6.prototype={}
A.TL.prototype={
S(){var w=C.a([],x.gB)
return new A.aB3(new C.cn(null,x.A),w,B.cA,B.as,$,B.bu,0,C.a([],x.X),null,null)}}
A.aB3.prototype={
gaU7(){var w=this.w
return new C.v(w.a/2,w.b/2)},
auX(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
aw9(d){var w=D.AN.h(0,this.y),v=5-d,u=w.length
return w[B.o.J(v,u)]+12*B.o.eb(v,u)},
Z(){this.a0()
this.kH()},
aMC(){var w,v,u,t,s=this.e
B.d.a8(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new A.ab6(w,B.k.J(t/v+u,1)))}},
l_(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,B.as))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fD$
if(p.Q){r=p.z
s=p.aw9(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
A.l_(r,s+12,q,0.55)}}}},
bZo(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aD(0,h.gaU7()),e=f.gcj()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.auX(v)-e)
if(u<w){g.a=v
w=u}}if(w>28)return
t=B.k.J((Math.atan2(f.b,f.a)+1.5707963267948966)/6.283185307179586+1,1)
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
m=h.auX(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new A.e5e(h,n).$0()
h.c.e3()
return}}h.n(new A.e5f(g,h,t))
if(h.Q)A.l_(h.z,h.aw9(g.a)+12,700,0.5)
C.eG()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aF(q,q,q,q,C.V(r.Q?B.nr:L.ql,B.aj,q,q,q,21),q,q,q,new A.e5m(r),q,q,q,q,"Sound",q),C.aF(q,q,q,q,D.m1,q,q,q,new A.e5n(r,d),q,q,q,q,"Share",q)],p),n=C.cj(new A.e5o(r)),m=r.x
m=A.ho(B.bE,""+B.k.U(m),"Tempo",180,40,new A.e5p(r),m)
w=C.a([],p)
for(v=J.aU(D.AN.ge9(D.AN));v.C();){u=v.gT(v)
w.push(new A.dx(u,r.y===u,new A.e5q(r,u),q,B.bE,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.asA[t]
v.push(new A.dx(s.b,r.z===s.a,new A.e5r(r,s),q,B.bE,q))}return A.je(B.bE,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.u(C.a([m,new A.eE(w,"SCALE",q),new A.eE(v,"SOUND",q),new A.eE(C.a([new A.fe(B.dO,"Demo",new A.e5s(r),B.bE,q),new A.fe(B.lW,"Random",new A.e5t(r),B.c,q),new A.fe(D.wQ,"Clear",new A.e5u(r),B.cN,q)],p),q,q)],p),B.m,q,B.e,B.R,0,B.p))}}
A.bho.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.a1()
w=C.U()
w.r=D.Tx.gt(0)
a5.bp(new C.af(0,0,0+a6.a,0+a6.b),w)
w=a3.d
v=a3.e
u=v.$1(w-1)+14
t=a3.c
s=t.aD(0,new C.v(0,u))
r=C.U()
r.c=2
q=x.O
p=t.a
o=p-1
n=t.b
m=n-u
r.sav(new C.a8(B.bb,B.b3,B.x,C.a([B.c.j(0.05),B.c.j(0.5)],q),a4,a4).aC(0,new C.af(o,m,o+2,m+u)))
a5.bU(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new G.mO(1,B.k.J(s.$1(l)*23,360),0.55,1).iE()
o=v.$1(l)
m=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
m.b=B.ak
m.c=1.6
m.r=k.j(0.35).gt(0)
j=m.M()
r.drawCircle(p,n,o,j)
j.delete()
o=D.cWR[B.o.J(B.o.J(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.ma(new C.ez(o,a4,a4,B.cT,a4,a4,a4,a4,a4,a4,new C.F(!0,m,a4,a4,a4,a4,9.5,B.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),B.a6,B.cn,new C.kc(1),a4,a4,a4,a4,B.cm,a4)
i.fE()
o=i.b.c
m=J.fxx(v.$1(l))
h=i.b.a.c
i.a6(a5,new C.v(p+-o/2,n+(m-h.gbe(h)-2)))}w=C.U()
w.sav(D.dR6.aC(0,C.c2(t,16)))
a5.aw(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.K)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new G.mO(1,B.k.J(s.$1(a0)*23,360),0.55,1).iE()
a2=B.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fxx(v.$1(a0))
a0=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a0.b=B.ak
a0.c=3*a2
a0.r=k.j(a2).gt(0)
j=a0.M()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
d.r=k.j(0.35).gt(0)
d.z=B.jf
j=d.M()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
d.sav(new C.bS(N.qY,0.5,B.x,a4,0,C.a([B.c,k],q),a4,a4).aC(0,C.c2(new C.v(h,a1),8.5)))
j=d.M()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
ao(d){return!0}}
A.aIP.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.bt4.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpH()}}
A.aIQ.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.bt5.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpI()}}
A.rA.prototype={}
A.b5T.prototype={}
A.TJ.prototype={
S(){var w=x.S
return new A.aB1(C.a([],x.aq),C.S(w,w),C.aZ(w),D.emF)}}
A.aB1.prototype={
Z(){this.a0()
A.yq("molecule_maker").bw(new A.e4J(this),x.P)},
agk(d){var w={}
w.a=0
this.f.bD(0,new A.e4v(w,d))
return w.a},
gaUd(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)t.push(w[u].a)
return A.hGo(t,this.f,D.a_5[this.d])},
bZF(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.f5()
w.dZ(t*7+3)
t=v.y
v.n(new A.e4p(v,e,t.a,w,t.b))
A.v9("pop",u.length,90,0.35)},
atl(d){return this.n(new A.e4q(this))},
aUe(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
bZL(d){this.n(new A.e4u(this,this.aUe(d)))},
cfo(){var w=this.r
if(w==null)return
this.n(new A.e4t(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a_5[k.d],h=k.gaUd()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.uO.h(0,w[u].a).a-k.agk(u)
w=i.c
w=w.gdH(w)
t=w.di(w,new A.e4D(),x.N).aG(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?B.bt:B.hS
r=x.p
s=C.u(C.a([new C.C(B.fF,A.eWL(w,s,h&&k.d<12?new A.fe(B.je,"Next",new A.e4E(k),B.bt,j):j),j),C.D(C.cj(new A.e4F(k)),1)],r),B.m,j,B.e,B.j,0,B.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.q(0,u)?"\u2713 ":""
w.push(new A.dx(p+D.a_5[u].b,k.d===u,new A.e4G(k,u),j,B.hS,j))}q=C.a([],r)
for(p=D.uO.gdH(D.uO),p=p.gag(p);p.C();){o=p.gT(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?B.fN:m.b
q.push(new A.dx(n+" \xb7 "+m.a,!1,new A.e4H(k,o),j,l,j))}return A.je(B.hS,B.fT,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.u(C.a([new A.eE(w,"GOAL",j),new A.eE(q,"ADD",j),new A.eE(C.a([new A.dx("Remove selected atom",!1,k.gcfn(),B.e4,B.cN,j),new A.dx("Clear all",!1,k.gbZG(k),B.jF,B.aM,j)],r),j,j)],r),B.m,j,B.e,B.R,0,B.p))}}
A.beG.prototype={
a6(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=B.o.J(t*37,10)
r=B.o.J(t*53,10)
$.a1()
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=B.hS.j(0.03).gt(0)
p=q.M()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bD(0,new A.dh_(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.uO.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.c2(j,26)
if(q===t){$.a1()
h=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
h.r=B.aM.j(0.4).gt(0)
h.z=B.jf
p=h.M()
u.drawCircle(j.a,j.b,34,p)
p.delete()}j=m.b
$.a1()
h=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
g=l.b
f=C.aq(g,B.c,0.5)
f.toString
e=C.aq(g,B.w,0.5)
e.toString
h.sav(new C.bS(B.HQ,0.5,B.x,a3,0,C.a([f,g,e],r),F.ar_,a3).aC(0,i))
p=h.M()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?B.aG:B.c
d=new C.ma(new C.ez(n,a3,a3,B.cT,a3,a3,a3,a3,a3,a3,new C.F(!0,j,a3,a3,a3,a3,19,B.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),B.a6,B.cn,new C.kc(1),a3,a3,a3,a3,B.cm,a3)
d.fE()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a6(a4,new C.v(n.a-h/2,n.b-j.gbe(j)/2))
n=k===0
a0=n?B.br:B.aZ
j=m.b
h=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
h.r=a0.gt(0)
p=h.M()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.t(k)
a1=new C.ma(new C.ez(n,a3,a3,B.cT,a3,a3,a3,a3,a3,a3,B.or),B.a6,B.cn,new C.kc(1),a3,a3,a3,a3,B.cm,a3)
a1.fE()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a6(a4,new C.v(n.a+(20-h/2),n.b+(-20-j.gbe(j)/2)))}if(n===0){d=C.j1(a3,a3,a3,a3,D.ev3,B.a6,B.cn,a3,B.eM,B.cm)
d.fE()
d.a6(a4,new C.v((w-d.b.c)/2,v/2))}},
ao(d){return!0}}
A.SH.prototype={
S(){var w=x.s
return new A.bfz(C.a([],w),C.a([],w))}}
A.bfz.prototype={
Z(){this.a0()
this.asM()
A.yq("dna_lab").bw(new A.dGd(this),x.P)},
gaZd(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a03.h(0,w[u])
t.toString
s.push(t)}return B.d.fM(s)},
ga6D(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(B.a.al(this.gaZd(),w,v))}return u},
asM(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.f5()
k.dZ(l.e*31+l.d*7+C.Dw(new C.O(Date.now(),0,!1)))
w=new A.dG2(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mf(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=B.a.al(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a03.h(0,p[n])
m.toString
r.push(m)}t.push(B.d.fM(r))}if(!B.d.bf(t,new A.dG1()))break}l.f=v
B.d.a8(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.aX3()},
aX3(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=A.fG5(s.ga6D()[r])
v=J.dE(D.AO.ge9(D.AO),new A.dG3(w)).dz(0)
u=new C.f5()
u.dZ(r+s.e)
B.d.fv(v,u)
u=C.a([w],x.s)
B.d.v(u,C.dc(v,0,C.dJ(3,"count",x.S),C.T(v).c))
t=new C.f5()
t.dZ(s.e*3+r)
B.d.fv(u,t)
s.z=u},
aUc(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.d1l.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a03.h(0,w.f[v])
u.toString
break A}u=A.fG5(w.ga6D()[v])
break A}w.n(new A.dG0(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new A.dGb(),e=new A.dG6(),d=h.d===2?h.gaZd():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,O.mc,g,g,g),B.au],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?B.cd.j(0.18):B.K
q=new C.b3(10,10)
p=new C.ax(t.length===s?B.cd:B.bG,1,B.r,-1)
o=C.a([],a0)
for(n=h.ga6D()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.cC(B.aY,B.e,B.R,B.m,g,B.p,g,0,o,g),B.h,g,g,new C.o(r,g,new C.c1(p,p,p,p),new C.bu(q,q,q,q),g,g,B.n),g,g,g,D.bdA,B.ef,g,g,g))}v.push(C.cb(B.bH,u,B.bw,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.cb(B.bH,u,B.bw,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a3(34,g,new C.cw(B.B,g,g,C.V(A7.Lb,j<t.length?B.aA:B.bG,g,g,g,14),g),g))
B.d.v(v,C.a([new C.C(B.JD,C.cb(B.bH,u,B.bw,0,0),g)],a0))}v.push(B.ar)
v.push(C.d(w,g,g,g,g,g,g,O.mc,g,g,g))
v.push(B.au)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?B.bt.j(0.25):B.du
q=new C.b3(12,12)
o=j<t.length
p=new C.ax(o?B.bt:B.be,1,B.r,-1)
if(o){o=D.AO.h(0,t[j])
o.toString}else o="?"
n=j<t.length?B.c:B.c2
u.push(C.p(g,new C.w(o,g,new C.F(!0,n,g,g,g,g,g,B.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),B.h,g,g,new C.o(r,g,new C.c1(p,p,p,p),new C.bu(q,q,q,q),g,g,B.n),g,g,g,g,B.ei,g,g,g))}v.push(C.cb(B.bH,u,B.bw,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",B.c,!0)
u.push(r)}v.push(C.cb(B.bH,u,B.bw,0,0))}v.push(B.ay)
u=h.w
if(u.length!==0){t=h.r.length
v.push(A.eWL(u,t>=(h.d===2?3:9)?B.bt:B.cd,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(A.eWL(u,B.cd,g))}v.push(B.T)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,E.QN,g,g,g))
v=C.cg(C.u(v,B.F,g,B.e,B.j,0,B.p),B.q,g,B.z,g,B.bA,g,g,B.ah)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new A.dx(D.cMd[j],h.d===j,new A.dG7(h,j),g,B.cd,g))
u=C.a([new A.eE(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bF(B.a1,g,g,new A.fe(B.jF,"New strand",new A.dG8(h),B.bt,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.K)(t),++l){i=t[l]
q=D.AO.h(0,i)
q.toString
a0.push(new A.fe(D.X4,q,new A.dG9(h,i),B.cd,g))}u.push(C.cb(B.bH,a0,B.bw,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.apY:D.cwO
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.b3(14,14)
a0.push(C.aJ(g,C.p(B.B,new C.w(k,g,D.evj,g,g,g,g,g,g,g,g,g),B.h,g,g,new C.o(e.$1(k),g,g,new C.bu(q,q,q,q),g,g,B.n),g,54,g,g,g,g,g,64),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.dGa(h,k),g,g,g,g,g,g,!1,B.ae))}u.push(C.B(a0,B.m,g,B.qv,B.j,0,g,g))}return A.je(B.cd,B.fT,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.u(u,B.m,g,B.e,B.R,0,B.p))}}
A.SX.prototype={
S(){return new A.aA9(B.bu,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
A.aA9.prototype={
Z(){var w,v=this
v.a0()
w=v.qQ(v.gbZH())
w.kj(0)
v.d!==$&&C.aO()
v.d=w
A.yq("ecosystem").bw(new A.dJ2(v),x.P)},
p(){var w=this.d
w===$&&C.c()
w.p()
this.bp6()},
gaIC(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
bZI(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length===0||w-B.d.gai(v)[3]>0.25){w=C.A(m.f,x.i)
w.push(m.w)
v.push(w)
if(v.length>160)B.d.cu(v,0)}if(m.gaIC()){w=m.Q+=l
if(w>m.as){m.as=w
if(B.o.J(B.k.bK(w),5)===0)A.v6("ecosystem",C.E(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.n(new A.dIQ())},
a7N(d){this.n(new A.dIP(this,d))
A.v9("pop",3,120,0.4)},
bZK(){return this.n(new A.dIR(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.u(C.a([new C.C(D.UU,A.eWL(r,t.gaIC()?B.bt:B.cN,s),s),C.D(new C.C(D.be6,C.bv(C.m(18),C.b2(s,s,s,new A.ba2(t.f,t.r,t.w,s),B.fk),B.ap),s),1),new C.C(B.fi,C.d("Alive together: "+B.k.U(t.Q)+" s     Best: "+B.k.U(t.as)+" s",s,s,s,s,s,s,D.eBW,s,s,s),s)],q),B.m,s,B.e,B.j,0,B.p)
w=t.x
w=A.ho(B.bt,B.k.ab(w,1)+"\xd7","Grass growth",2,0.2,new A.dIV(t),w)
v=t.y
v=A.ho(B.cg,B.k.ab(v,1)+"\xd7","Rabbit breeding",2,0.3,new A.dIW(t),v)
u=t.z
return A.je(B.bt,B.fT,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.u(C.a([w,v,A.ho(B.dh,B.k.ab(u,1)+"\xd7","Fox hunting",2,0.3,new A.dIX(t),u),new A.eE(C.a([new A.dx("Drought",!1,new A.dIY(t),B.xc,B.aM,s),new A.dx("Disease",!1,new A.dIZ(t),D.bqT,B.bE,s),new A.dx("+ Foxes",!1,new A.dJ_(t),s,B.dh,s),new A.dx("+ Rabbits",!1,new A.dJ0(t),s,B.cg,s),new A.dx("Reset",!1,t.gbZJ(),B.jF,B.b4,s)],q),s,s)],q),B.m,s,B.e,B.R,0,B.p))}}
A.ba2.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.a1()
w=C.U()
w.sav(D.bEO.aC(0,new C.af(0,0,d,a0)))
a1.bp(new C.af(0,0,d,a0),w)
w=h.b
a0=C.aq(B.tQ,B.br,B.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.U()
t.r=a0.gt(0)
a1.bp(new C.af(0,v,d,v+u),t)
s=B.k.U(w[0]*0.9)
r=new C.f5()
r.dZ(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.af()*e
o=f*(0.6+0.4*r.af())
t=Math.sin(a0+q)
n=r.af()
m=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
m.r=B.hp.gt(0)
m.c=1.6
l=m.M()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new A.cYt(h,a2,f,a1)
k.$5(Math.min(B.k.U(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(B.k.U(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.af(10,a0,e,u)
t=C.U()
t.r=D.b3e.gt(0)
a1.bp(new C.af(0,f,d,f+g),t)
i=C.U()
i.r=B.du.gt(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.M()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new A.cYv(h,j,a1)
g.$3(0,100,B.br)
g.$3(1,120,B.cg)
g.$3(2,24,B.dh)
g=new A.cYu(a1,j)
g.$3("Grass "+B.k.U(w[0]),B.br,16)
g.$3("Rabbits "+B.k.U(w[1]),B.cg,102)
g.$3("Foxes "+B.k.U(w[2]),B.dh,200)},
ao(d){return!0}}
A.aIf.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.aOw.prototype={
gu7(){return B.d.cI(this.a,0,new A.bBT())}}
A.Sc.prototype={
S(){var w=x.S
return new A.bfg(A.hDy(),C.bU(5,0,!1,w),C.aZ(w),B.bu,null,null)}}
A.bfg.prototype={
gv3(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return B.d.cI(t,0,new A.duu())},
Z(){var w,v=this
v.a0()
w=v.qQ(new A.duH(v))
w.kj(0)
v.x!==$&&C.aO()
v.x=w
A.yq("balance_lab").bw(new A.duI(v),x.P)},
p(){var w=this.x
w===$&&C.c()
w.p()
this.boL()},
cpv(d){var w,v=this
v.n(new A.duv(v,d))
A.v9("click",v.f[d],60,0.4)
if(v.gv3()===v.d[v.e].gu7()&&v.r.G(0,v.e)){A.v9("zap",10,260,0.5)
w=v.r
w=C.A(w,C.a2(w).k("ck.E"))
A.v6("balance_lab",C.E(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.J(k,new A.duA(),C.T(k).k("J<1,n>")).aG(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=B.d.aG(k," + ")
if(o.gv3()===m[o.e].gu7())s="\u2696\ufe0f Balanced! "+m[o.e].gu7()+" = "+o.gv3()+". The torques are equal, so the seesaw stays level."
else s=o.gv3()>m[o.e].gu7()?"The right side is too strong ("+o.gv3()+" vs "+m[o.e].gu7()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].gu7()+" vs "+o.gv3()+"). Add weight to the right, or place it further from the middle."
k=o.gv3()===m[o.e].gu7()?B.bt:B.aM
k=A.bw_(s,k,o.gv3()===m[o.e].gu7()&&o.e<m.length-1?new A.fe(B.je,"Next",new A.duB(o),B.bt,n):n)
w=C.D(C.cj(new A.duC(o,l)),1)
u=j.length===0?"0":j
u=C.D(C.d("Left torque\n"+u+" = "+m[o.e].gu7(),n,n,n,n,n,n,D.aKk,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.u(C.a([new C.C(D.UU,k,n),w,new C.C(D.act,C.B(C.a([u,C.D(C.d("Right torque\n"+r+" = "+o.gv3(),n,n,n,n,n,n,D.aKk,B.dK,n,n),1)],q),B.m,n,B.e,B.j,0,n,n),n)],q),B.m,n,B.e,B.j,0,B.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.q(0,v)?"\u2713 ":""
p=v+1
u.push(new A.dx(w+p,o.e===v,new A.duD(o,v),n,B.aM,n))}return A.je(B.aM,B.fT,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.u(C.a([new A.eE(u,"LEVEL",n),new A.eE(C.a([new A.dx("Clear right side",!1,new A.duE(o),B.jF,B.cN,n)],q),n,n)],q),B.m,n,B.e,B.R,0,B.p))}}
A.b64.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.b0($.a1().r,B.aw,null,null,C.a([],x.v))
i.N(new C.bj(h,f))
w=f+70
i.N(new C.av(h-30,w))
i.N(new C.av(h+30,w))
i.N(new C.bX())
v=C.U()
v.r=B.al.gt(0)
d.b4(i,v)
v=h-120
i=C.U()
i.r=B.aI.gt(0)
d.bp(new C.af(v,w,v+240,w+8),i)
i=d.a
J.bP(i.save())
i.translate(h,f)
d.q1(0,j.b)
u=g*5.8
t=C.c_(new C.af(-u,-9,u,9),B.hZ)
w=C.U()
w.sav(D.bHh.aC(0,new C.af(t.a,t.b,t.c,t.d)))
d.bj(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.a1()
v=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
v.r=B.hT.gt(0)
v.c=1.5
r=v.M()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
A.f86(d,""+Math.abs(s),new C.v(w,22),B.c2,10)}q=new A.cxw(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,B.b4)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],B.cd)
if(w[s]===0){l=C.c_(C.dy(new C.v(m,-22),22,v),B.hZ)
$.a1()
k=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
k.b=B.ak
k.c=1.4
k.r=B.be.gt(0)
r=k.M()
i.drawRRect(C.fL(l),r)
r.delete()
A.f86(d,"+",new C.v(m,-22),B.c2,14)}}i.restore()
$.a1()
i=C.U()
i.r=(j.e?B.bt:B.aJ).gt(0)
d.aw(new C.v(h,f),7,i)},
ao(d){return!0},
gjt(){return this.e}}
A.Ta.prototype={
S(){return new A.bfL(C.a([16,32,12,24],x.t),C.aZ(x.S),B.bu,null,null)}}
A.bfL.prototype={
gZo(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gab5(){var w=this.gZo(),v=this.r,u=D.ask[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.d8(this.d,x.S).a<4)
else w=!1
return w},
Z(){var w,v=this
v.a0()
w=v.qQ(new A.dMQ(v))
w.kj(0)
v.x!==$&&C.aO()
v.x=w
A.yq("gear_lab").bw(new A.dMR(v),x.P)},
p(){var w=this.x
w===$&&C.c()
w.p()
this.bpe()},
bZM(d,e){var w,v=this
v.n(new A.dMG(v,d,e))
if(v.gab5()&&v.w.G(0,v.r)){A.v9("zap",8,240,0.45)
w=v.w
w=C.A(w,C.a2(w).k("ck.E"))
A.v6("gear_lab",C.E(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.gZo(),n=r.gZo(),m=D.ask[r.r].a
m=r.gab5()?"\u2705 Done! Ratio "+B.k.ab(r.gZo(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gab5()?B.bt:B.dh
v=r.d
u=x.p
n=C.u(C.a([new C.C(D.UU,A.bw_(m,w,r.gab5()&&r.r<7?new A.fe(B.je,"Next",new A.dMK(r),B.bt,q):q),q),C.D(C.b2(q,q,q,new A.bbv(v,r.f,q),B.fk),1),new C.C(D.act,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+B.k.ab(r.gZo(),2)+"   \xb7   Output "+B.k.ab(p*o,1)+" rpm   \xb7   Force \xd7"+B.k.ab(1/n,2),q,q,q,q,q,q,P.a3K,B.L,q,q),q)],u),B.m,q,B.e,B.j,0,B.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.q(0,t)?"\u2713 ":""
s=t+1
o.push(new A.dx(m+s,r.r===t,new A.dML(r,t),q,B.dh,q))}p=r.e
u=C.a([new A.eE(o,"GOAL",q),A.ho(B.b4,""+B.k.U(p)+" rpm","Input speed",120,10,new A.dMM(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new A.asP("Gear "+s+" teeth",p,new A.dMN(r,t),8,40,D.cUD[t],""+p,q))}return A.je(B.dh,B.fT,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.u(u,B.m,q,B.e,B.R,0,B.p))}}
A.bbv.prototype={
bJm(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.a1(),j=C.a([],x.v),i=new C.b0(k.r,B.aw,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.dS4,D.dWA,D.eae,D.e2c],s=v===0,r=0;r<4;++r){q=t[r]
p=q.a
o=u+p*h
n=e+q.b
m=k+Math.cos(o)*n
l=w+Math.sin(o)*n
if(s&&p===0){p=new C.bj(m,l)
j.push(p)
m=i.f
if(m!=null)p.bH(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}else{p=new C.av(m,l)
j.push(p)
m=i.f
if(m!=null)p.bH(m)
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
n=B.d.fs(g,B.pN)
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
h=new A.d4r(this,d)
h.$6$back(new C.v(t,0),g[2],r,i,B.dD,!0)
h.$5(new C.v(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,B.dp)
h.$5(new C.v(0,0),g[0],w[0],j,B.mm)
h.$5(new C.v(t,0),g[1],w[1],i,B.fZ)
s.restore()
s=new A.d4s(d,e,p,o,k)
s.$3("1 \xb7 input",0,B.b4)
s.$3("2+3 \xb7 shared axle",t,B.dh)
s.$3("4 \xb7 output",q,B.bt)},
ao(d){return!0}}
A.Sl.prototype={
S(){var w=$.at()
return new A.bft(new C.ao(new C.bb("Meet me at noon",B.b_,B.aL),w),new C.ao(new C.bb("LEMON",B.b_,B.aL),w),C.aZ(x.S))}}
A.bft.prototype={
Z(){this.a0()
this.aT8()
A.yq("cipher_lab").bw(new A.dyG(this),x.P)},
p(){var w=this.d,v=$.at()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
aT8(){this.y=1+B.cA.aA(25)
this.z=0},
ga74(){var w=this
return A.a_w(A.a_w(D.Ff[w.x],w.y),-w.z)===D.Ff[w.x]},
gauc(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=A.a_w(u,v.w)
break A}if(1===t){w=new C.J(C.a(A.a_w(u,0).split(""),x.s),new A.dyo(),x.dv).fM(0)
break A}w=A.hPR(u,v.e.a.a)
break A}return w},
aOF(d){var w,v,u,t,s,r=null,q=C.bU(26,0,!1,x.S)
for(w=new C.cX(d.toUpperCase()),v=x.F,w=new C.bR(w,w.gH(0),v.k("bR<bO.E>")),v=v.k("bO.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,B.d.fs(q,B.yL))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.b3(2,2)
v.push(new C.bE(1,B.bn,C.u(C.a([C.p(r,r,B.h,r,r,new C.o(B.b4,r,r,new C.bu(u,u,u,u),r,r,B.n),r,46*q[s]/t,r,B.JX,r,r,r,r),new C.w(C.jv(65+s),r,D.eDD,r,r,r,r,r,r,r,r,r)],w),B.m,r,B.m3,B.j,0,B.p),r))}return new C.a3(r,70,C.B(v,B.dF,r,B.e,B.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=B.c.j(0.07)
v=x.p
w=C.a([C.aK(o,B.U,!1,o,!0,B.q,o,C.aL(),p.d,o,o,o,o,o,2,C.bl(o,new C.b1(4,C.m(14),B.W),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.l7,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.af,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new A.dyx(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eya,!0,B.a6,o,B.am,o,o,o,o)],v)
if(p.r===2){u=B.c.j(0.07)
B.d.v(w,C.a([B.T,C.aK(o,B.U,!1,o,!0,B.q,o,C.aL(),p.e,o,o,o,o,o,2,C.bl(o,new C.b1(4,C.m(14),B.W),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.l7,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.af,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new A.dyy(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,B.it,!0,B.a6,o,B.am,o,o,o,o)],v))}w.push(B.ay)
w.push(D.f1v)
w.push(B.au)
v=B.b4.j(0.12)
u=C.m(14)
t=C.H(B.b4.j(0.4),B.r,1)
w.push(C.p(o,C.yI(p.gauc().length===0?"\u2026":p.gauc(),D.eCG,o),B.h,o,o,new C.o(v,o,t,u,o,o,B.n),o,o,o,o,B.bA,o,o,o))
w.push(B.ab)
w.push(A.bw_(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],B.b4,o))
w.push(B.ab)
w.push(D.eKr)
w.push(B.au)
w.push(p.aOF(p.gauc()))
w.push(B.au)
w.push(D.eMI)
s=C.cK(w,o,B.bA,o,o,B.ah,!1)}else{w=A.bw_("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",B.aM,o)
v=C.d(A.a_w(D.Ff[p.x],p.y),o,o,o,o,o,o,D.eDb,o,o,o)
u=(p.ga74()?B.bt:B.b4).j(0.14)
t=C.m(14)
r=C.H((p.ga74()?B.bt:B.b4).j(0.5),B.r,1)
t=C.a([w,B.ab,D.eWE,v,B.T,D.eRu,C.p(o,C.d(A.a_w(A.a_w(D.Ff[p.x],p.y),-p.z),o,o,o,o,o,o,D.eEC,o,o,o),B.h,o,o,new C.o(u,o,r,t,o,o,B.n),o,o,o,o,B.bA,o,o,o),B.ab,p.aOF(A.a_w(D.Ff[p.x],p.y)),B.P],x.p)
if(p.ga74())t.push(A.bw_("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",B.bt,new A.fe(B.jF,"Next",new A.dyz(p),B.bt,o)))
s=C.cK(t,o,B.bA,o,o,B.ah,!1)}w=p.f
v=x.p
w=C.a([new A.eE(C.a([new A.dx("Make a secret",w===0,new A.dyA(p),B.iZ,B.b4,o),new A.dx("Crack a code",w===1,new A.dyB(p),B.qi,B.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new A.dx(n[q],p.r===q,new A.dyC(p,q),o,B.b4,o))
v=C.a([new A.eE(u,o,o)],v)
if(p.r===0){u=p.w
v.push(A.ho(B.b4,""+u,"Shift",25,1,new A.dyD(p),u))}B.d.v(w,v)}else{v=p.z
w.push(A.ho(B.aM,""+v,"Shift back",25,0,new A.dyE(p),v))}return A.je(B.b4,B.fT,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.u(w,B.m,o,B.e,B.R,0,B.p))}}
A.aHV.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.aIn.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.mU.prototype={}
A.ve.prototype={
aHS(d,e,f,g){var w=this
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
A.a7X.prototype={}
A.a90.prototype={}
A.a2c.prototype={
b7K(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.he()?-1:1
v=t.af()*3.141592653589793*2
u=f*(0.3+t.af())
s.push(new A.a7X(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.af()*0.45));++r}},
bWu(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}B.d.bm(w,new A.bHe())},
agL(d,e,f,g){var w="p"+this.c++,v=new A.ve(w,e,f,g)
v.aHS(w,e,f,g)
this.a.push(v)
return v},
W(d,e){B.d.W(this.a,e)
B.d.bm(this.b,new A.bHo(e))},
a8(d){B.d.a8(this.a)
B.d.a8(this.b)},
cx4(d,e,f,g,h){return B.d.bf(this.b,new A.bHk(e,f,g,h))},
azx(d,e,f,g){var w
if(d===f||this.cx4(0,d,e,f,g))return null
w=new A.a90(d,e,f,g)
this.b.push(w)
return w},
b0B(d){switch(d.b){case"battery":return d.e
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
b0A(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
ba7(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
bZN(d){switch(d.b){case"bulb":return 10
case"motor":return 6
case"buzzer":return 25
case"heater":return 4
case"radio":return 30
case"tv":return 50
case"resistor":return d.r
case"pot":return 1+99*d.f}return 100},
a58(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.d+=a1
d.bWu(a1)
d.w=Math.max(0,d.w-a1)
w=Math.min(a1*6,0.12)
for(v=d.a,u=v.length,t=a1*0.25,s=0;s<u;++s){r=v[s]
if(r.b==="crank")r.f=Math.max(0,r.f-t)}u=x.S
q=C.S(x.N,u)
p=new A.bHq(q)
o=C.a([],x.t)
n=new A.bHp(o)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.K)(v),++s){r=v[s]
p.$2(r,0)
p.$2(r,1)}for(m=0;m<q.a;++m)o.push(m)
for(t=d.b,l=t.length,s=0;s<t.length;t.length===l||(0,C.K)(t),++s){k=t[s]
j=n.$1(p.$2(k.a,k.b))
i=n.$1(p.$2(k.c,k.d))
if(j!==i)o[j]=i}h=C.S(u,u)
g=new A.bHs(h,n,p)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,C.K)(v),++s){r=v[s]
g.$2(r,0)
g.$2(r,1)}f=h.a
if(f===0)return
s=0
for(;;){if(!(s<t)){e=0
break}r=v[s]
u=r.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){e=g.$2(r,1)
break}++s}d.cmA(f,e,w,!0)
d.bGr(a1)},
cmA(b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=x.S,b3=C.S(x.N,b2),b4=new A.bHg(b3),b5=C.a([],x.t)
for(w=b1.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
b4.$2(t,0)
b4.$2(t,1)}for(s=0;s<b3.a;++s)b5.push(s)
r=new A.bHf(b5)
for(v=b1.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.K)(v),++u){p=v[u]
o=r.$1(b4.$2(p.a,p.b))
n=r.$1(b4.$2(p.c,p.d))
if(o!==n)b5[o]=n}m=new A.bHi(C.S(b2,b2),r,b4)
for(b2=w.length,u=0;u<w.length;w.length===b2||(0,C.K)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b2=x.i
l=C.bU(b6,0,!1,b2)
v=x.W
k=C.S(v,b2)
j=C.S(v,b2)
v=b1.x
i=0.3/b8
q=x.b
h=b6<0
g="Length must be a non-negative integer: "+b6
f=0
for(;;){if(!(f<(b9?10:1)))break
if(h)C.b8(C.dF(g,null))
e=C.a(new Array(b6),q)
for(d=0;d<b6;++d)e[d]=C.bU(b6,0,!1,b2)
a0=C.bU(b6,0,!1,b2)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,C.K)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/b1.b0A(t)
a4=b1.b0B(t)*a3}else{a5=t.x
a4=0
if(a5&&a2!=="capacitor")a3=1e-9
else if(a2==="switch")a3=t.w?100:1e-9
else if(a2==="fuse")a3=20
else if(a2==="led"){a2=v.h(0,t.a)
a6=a2===!0
a3=a6?0.06666666666666667:1e-9
a4=a6?a3*1.9:0}else if(a2==="capacitor"){a4=i*t.z
a3=a5?1e-9:i}else a3=1/b1.bZN(t)}k.m(0,t,a3)
j.m(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b6;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b1.bJl(e,a0,b7)
if(!b9)break
for(a1=w.length,a7=!1,u=0;u<w.length;w.length===a1||(0,C.K)(w),++u){t=w[u]
if(t.b!=="led")continue
a8=l[m.$2(t,0)]-l[m.$2(t,1)]
a2=t.a
a5=v.h(0,a2)
a9=a5===!0
b0=a9?a8>1.8:a8>1.95
if(b0!==a9){v.m(0,a2,b0)
a7=!0}}if(!a7)break;++f
b9=!0}for(b2=w.length,u=0;u<w.length;w.length===b2||(0,C.K)(w),++u){t=w[u]
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
bJl(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return C.bU(d,0,!1,x.i)
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
t[m]=t[m]-g*u[l][m]}}}f=C.bU(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bGr(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.a,v=w.length,u=d*0.8,t=d*0.9,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=r.b
if((q==="battery"||q==="solar"||q==="crank"||q==="turbine")&&!r.x){p=k.b0B(r)/k.b0A(r)
if(p>0.3){o=Math.abs(r.at)
o=o>0.4&&o>p*0.55}else o=!1
n=r.Q
if(o){r.Q=n+t
k.b7K(r,3,260)
if(k.w<=0){k.w=0.35
o=k.e
if(o!=null)o.$2("short",r)}if(r.Q>1.4)k.NI(r,"source")}else r.Q=Math.max(0,n-u)}o=r.as
n=r.at
m=Math.abs(o*n)
l=Math.abs(n)
switch(q){case"bulb":r.ax=r.x?0:B.k.D(m/0.9,0,1)
if(!r.x&&m>2.4)k.NI(r,"bulb")
break
case"led":r.ax=r.x?0:B.k.D((l-0.001)/0.02,0,1)
if(!r.x&&l>0.045)k.NI(r,"led")
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
if(!r.x&&l>1)k.NI(r,"fuse")
break
case"resistor":if(!r.x&&m>0.8)k.NI(r,"resistor")
break
case"capacitor":r.ax=B.k.D(Math.abs(r.z)/9,0,1)
if(!r.x&&Math.abs(r.z)>13)k.NI(r,"capacitor")
break
case"crank":r.y=r.y+r.f*d*22
break
case"turbine":r.y=r.y+r.f*d*14
break
case"solar":r.ax=r.f
break}}},
NI(d,e){var w
d.x=!0
this.b7K(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bcc(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.z=0}this.x.a8(0)},
cGF(d){var w=this.a
return new C.a5(w,new A.bHn(d),C.T(w).k("a5<1>"))},
aCg(d){return this.cGF(d).bf(0,new A.bHm(0.35))},
aBq(d,e){return B.d.bf(this.a,new A.bHl(e))}}
A.aOG.prototype={
a6(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2=b7.a,b3=b7.b,b4=0+b2,b5=0+b3
$.a1()
w=C.U()
w.r=D.a9G.gt(0)
b6.bp(new C.af(0,0,b4,b5),w)
v=C.U()
v.r=B.c.j(0.06).gt(0)
for(w=b6.a,u=12;u<b2;u+=24)for(t=12;t<b3;t+=24){s=v.M()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b0.b,q=r.b,p=q.length,o=b0.f,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-42:42
l=l.d
i=m.c
h=i.c
g=m.d===0?-42:42
b0.cuf(b6,new C.v(k*b2+j,l*b3),new C.v(h*b2+g,i.d*b3),m,m===o)}q=b0.d
if(q!=null&&b0.e!=null){f=A.hbX(q.a,q.b,b7)
q=b0.e
q.toString
$.a1()
p=C.U()
p.r=B.aj.gt(0)
p.c=3
p.d=B.bZ
b6.bU(f,q,p)}for(q=r.a,p=q.length,o=b0.c,l=b0.r,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){e=q[n]
k=e.c*b2
j=e.d*b3
if(e.Q>0){i=Math.sin(r.d*30)
$.a1()
h=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
h.r=D.a8U.j(B.k.D(e.Q*0.45,0,0.6)).gt(0)
h.z=B.FL
s=h.M()
w.drawCircle(k,j,46+14*i,s)
s.delete()}d=l.h(0,e.a)
if(d==null)d=1
J.bP(w.save())
w.translate(k,j)
k=B.k.D(B.oB.ar(0,B.k.D(d,0,1)),0.01,1.4)
w.scale(k,k)
b0.c88(b6,e,e===o)
w.restore()
for(k=e.b,j=k!=="battery",i=k!=="solar",h=k!=="crank",g=k==="turbine",k=k==="led",a0=0;a0<2;++a0){a1=e.c
a2=a0===0
a3=a2?-42:42
a3=a1*b2+a3
a1=e.d*b3
$.a1()
a4=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a4.r=D.a9G.gt(0)
s=a4.M()
w.drawCircle(a3,a1,7,s)
s.delete()
a4=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a4.b=B.ak
a4.c=2.4
if(a2)a5=!j||!i||!h||g||k
else a5=!1
a4.r=(a5?B.cN:B.aj).gt(0)
s=a4.M()
w.drawCircle(a3,a1,6,s)
s.delete()
if(a2)a2=!j||!i||!h||g||k
else a2=!1
if(a2){a6=new C.ma(new C.ez("+",b1,b1,B.cT,b1,b1,b1,b1,b1,b1,new C.F(!0,B.cN,b1,b1,b1,b1,13,B.u,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1)),B.a6,B.cn,new C.kc(1),b1,b1,b1,b1,B.cm,b1)
a6.fE()
a6.a6(b6,new C.v(a3+-4,a1+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n){a7=p[n]
l=a7.a*b2+a7.c
k=a7.b*b3+a7.d
a8=B.k.D(a7.r/0.8,0,1)
j=C.aq(D.b8v,D.b9j,a8)
j.toString
i=a7.f
$.a1()
h=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
h.r=j.gt(0)
h.c=2.4
h.d=B.bZ
s=h.M()
w.drawLine.apply(w,[l,k,l-a7.e*0.035,k-i*0.035,s])
s.delete()
i=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
i.r=j.j(0.35*a8).gt(0)
i.z=B.Oq
s=i.M()
w.drawCircle(l,k,4.5*a8+1,s)
s.delete()}if(B.d.bf(q,new A.bCG())){a9=B.d.cI(q,0,new A.bCH())
$.a1()
b3=C.U()
b3.r=D.b_5.j(0.05+0.09*a9*(0.5+0.5*Math.sin(r.d*22))).gt(0)
b6.bp(new C.af(0,0,b4,b5),b3)
a6=C.j1(b1,b1,b1,b1,D.euZ,B.a6,B.cn,b1,B.eM,B.cm)
a6.EM(b2-24)
a6.a6(b6,new C.v(12,10))}},
rS(d,e,f,g,h){var w=null,v=C.j1(w,w,w,w,C.dr(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),e),B.a6,B.cn,w,B.eM,B.cm)
v.fE()
v.a6(d,f)},
cuf(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.b0($.a1().r,B.aw,null,null,C.a([],x.v))
d.N(new C.bj(a1.a,a1.b))
w=A.h4s(a1,a2,a3)
d.N(new C.dn(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.at)
t=a3.c
s=Math.abs(t.at)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.aq(B.aM,D.a8U,B.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.aq(B.b4,B.aM,B.k.D(r*1.2,0,1))
u.toString
o=u}else o=B.bv
u=C.U()
u.b=B.ak
u.c=a4?7:5
u.d=B.bZ
s=a4?B.c:o
u.r=s.j(q?0.4:0.55).gt(0)
a0.b4(d,u)
u=C.U()
u.b=B.ak
u.c=2.4
u.d=B.bZ
u.r=(a4?B.c:o).gt(0)
a0.b4(d,u)
if(q){n=new C.ahM(new C.xQ(C.zZ(d),!1,C.a([],x.f5))).gI(0)
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
i=t[u].a4l(f).a
h=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
h.r=B.c.gt(0)
e=h.M()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
Nj(d,e,f,g){var w,v,u,t
$.a1()
w=C.U()
v=g?B.b3:B.a1
u=g?B.bb:B.a7
t=C.aq(e,B.w,0.3)
t.toString
w.sav(new C.a8(v,u,B.x,C.a([e,f,e,t],x.O),B.Fh,null).aC(0,d))
return w},
asD(d,e,f){return this.Nj(d,e,f,!0)},
bW5(d,e){return this.Nj(d,B.bv,B.iR,e)},
aep(d,e){var w,v,u
$.a1()
w=C.U()
w.sav(D.aFK.aC(0,C.c2(e,4.2)))
d.aw(e,4.2,w)
w=e.ap(0,D.dJu)
v=e.ap(0,D.dJD)
u=C.U()
u.r=B.fD.gt(0)
u.c=1.2
d.bU(w,v,u)},
c88(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=4294626325,b4=4286331629,b5=4287322667,b6=4293870660,b7=$.a1(),b8=C.U()
b8.sav(D.bEx.aC(0,D.eif))
b8.c=3.4
b8.d=B.bZ
w=C.U()
w.r=B.w.j(0.45).gt(0)
w.z=H.ph
b9.lf(D.ei9,w)
if(c1){w=C.c_(D.eie,B.k7)
v=C.U()
v.r=B.c.j(0.14).gt(0)
b9.bj(w,v)}b9.bU(D.dKx,D.dKs,b8)
b9.bU(D.dIR,D.dJ6,b8)
u=c0.x
switch(c0.b){case"battery":b1.bvR(b9,c0)
break
case"solar":t=C.c_(D.eic,B.jL)
b9.bj(t,b1.Nj(new C.af(t.a,t.b,t.c,t.d),B.fN,B.cg,!1))
b7=C.U()
w=C.aq(D.b1S,B.dg,0.25+0.55*c0.f)
w.toString
v=C.aq(D.b8E,B.lO,0.3+0.4*c0.f)
v.toString
b7.sav(new C.a8(B.ax,B.aC,B.x,C.a([w,v],x.O),b2,b2).aC(0,D.a2r))
b9.bp(D.a2r,b7)
s=C.U()
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
v=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
v.r=B.cr.j(0.5).gt(0)
v.c=0.6
q=v.M()
b7.drawLine.apply(b7,[w,-18,w,18,q])
q.delete()}b7=new C.b0($.a1().r,B.aw,b2,b2,C.a([],x.v))
b7.N(new C.bj(-34,18))
b7.N(new C.av(-6+40*c0.f,-18))
b7.N(new C.av(4+40*c0.f,-18))
b7.N(new C.av(-24,18))
b7.N(new C.bX())
w=C.U()
w.r=B.c.j(0.1+0.22*c0.f).gt(0)
b9.b4(b7,w)
w=c0.f
b7=C.U()
b7.r=B.j5.j(0.9).gt(0)
b9.aw(D.dIV,4+4*w,b7)
break
case"crank":p=C.c_(D.ei3,B.fV)
b9.bj(p,b1.asD(new C.af(p.a,p.b,p.c,p.d),B.bB,B.bP))
b7=C.U()
b7.sav(D.aFL.aC(0,C.c2(B.J,12)))
b9.aw(B.J,12,b7)
o=new C.v(Math.cos(c0.y)*22,Math.sin(c0.y)*22)
b7=C.U()
b7.r=B.cr.gt(0)
b7.c=5
b7.d=B.bZ
b9.bU(B.J,o,b7)
b7=C.U()
b7.sav(D.dRl.aC(0,C.c2(o,7)))
b9.aw(o,7,b7)
b1.aep(b9,D.dKq)
b1.aep(b9,D.dIN)
break
case"turbine":b7=b7.r
w=x.v
v=new C.b0(b7,B.aw,b2,b2,C.a([],w))
v.N(new C.bj(-3,24))
v.N(new C.av(3,24))
v.N(new C.av(1.5,0))
v.N(new C.av(-1.5,0))
v.N(new C.bX())
n=C.U()
n.r=B.cg.gt(0)
b9.b4(v,n)
for(v=b9.a,m=0;m<3;++m){n=c0.y
J.bP(v.save())
v.rotate((n+m*2.094)*180/3.141592653589793,0,0)
n=C.a([],w)
l=new C.b0(b7,B.aw,b2,b2,n)
n.push(new C.bj(0,-2))
n.push(new C.dn(6,-14,2,-30))
n.push(new C.dn(-2,-14,0,-2))
n.push(new C.bX())
n=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
n.r=B.c.gt(0)
q=n.M()
n=l.gbM().a.snapshot()
v.drawPath((l.e=new C.cG(n)).a,q)
q.delete()
v.restore()}b7=C.U()
b7.sav(D.dR5.aC(0,C.c2(B.J,4.5)))
b9.aw(B.J,4.5,b7)
break
case"switch":p=C.c_(D.ei6,B.uX)
b7=C.U()
b7.sav(D.bFz.aC(0,new C.af(p.a,p.b,p.c,p.d)))
b9.bj(p,b7)
b1.aep(b9,D.Pg)
b1.aep(b9,D.aAL)
k=c0.w?D.aAL:D.dIE
b7=C.U()
b7.r=B.aG.gt(0)
b7.c=6
b7.d=B.bZ
b9.bU(D.Pg,k,b7)
b7=C.U()
b7.r=(c0.w?B.bt:B.cg).gt(0)
b7.c=4
b7.d=B.bZ
b9.bU(D.Pg,k,b7)
b7=C.l0(D.Pg,k,0.85)
b7.toString
w=C.U()
w.r=B.aH.gt(0)
b9.aw(b7,5,w)
break
case"fuse":j=C.c_(D.aG6,D.aFQ)
b7=C.U()
b7.r=B.hr.j(0.25).gt(0)
b9.bj(j,b7)
b7=C.U()
b7.b=B.ak
b7.c=1.4
b7.r=B.aA.gt(0)
b9.bj(j,b7)
if(!u){b7=C.U()
b7.c=1.6
b7.r=C.aq(B.cg,B.dh,c0.ax).gt(0)
b9.bU(D.aB_,D.aAK,b7)}else{b7=C.U()
b7.c=1.6
b7.r=B.c2.gt(0)
b9.bU(D.aB_,D.dKC,b7)
b7=C.U()
b7.c=1.6
b7.r=B.c2.gt(0)
b9.bU(D.dJg,D.aAK,b7)
b7=C.U()
b7.r=B.dx.gt(0)
b9.aw(B.J,6,b7)}for(b7=b9.a,i=0;i<2;++i){h=C.dy(new C.v(D.cSO[i]*22,0),20,9)
w=C.c_(h,B.k8)
q=b1.Nj(h,B.dD,B.nO,!0).M()
b7.drawRRect(C.fL(w),q)
q.delete()}break
case"pot":b7=C.U()
b7.sav(D.dRd.aC(0,C.c2(B.J,21)))
b9.aw(B.J,21,b7)
for(b7=b9.a,m=0;m<=10;++m){g=2.356194490192345+m*3.141592653589793*1.5/10
w=Math.cos(g)
v=Math.sin(g)
n=Math.cos(g)
l=Math.sin(g)
f=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
f.r=B.aA.gt(0)
f.c=1.2
q=f.M()
b7.drawLine.apply(b7,[w*18,v*18,n*22,l*22,q])
q.delete()}b7=C.U()
b7.sav(D.dR3.aC(0,C.c2(B.J,13)))
b9.aw(B.J,13,b7)
e=2.356194490192345+c0.f*3.141592653589793*1.5
b7=Math.cos(e)
w=Math.sin(e)
v=Math.cos(e)
n=Math.sin(e)
l=C.U()
l.r=B.aM.gt(0)
l.c=3
l.d=B.bZ
b9.bU(new C.v(b7*3,w*3),new C.v(v*12,n*12),l)
break
case"resistor":d=C.c_(D.aG6,D.aFQ)
b7=C.U()
b7.sav(D.bHw.aC(0,new C.af(d.a,d.b,d.c,d.d)))
b9.bj(d,b7)
b7=x.O
a0=C.E([47,C.a([C.aX(b3),C.aX(b4),B.w],b7),100,C.a([C.aX(b5),B.w,C.aX(b5)],b7),220,C.a([C.aX(b6),C.aX(b6),C.aX(b5)],b7),470,C.a([C.aX(b3),C.aX(b4),C.aX(b5)],b7),1000,C.a([C.aX(b5),B.w,C.aX(b6)],b7)],x.i,x.bF)
a1=a0.h(0,c0.r)
if(a1==null){b7=a0.h(0,100)
b7.toString
a1=b7}for(b7=b9.a,r=0;r<3;++r){w=-14+r*9
v=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
v.r=a1[r].gt(0)
q=v.M()
b7.drawRect(C.cz(new C.af(w,-9,w+4.5,9)),q)
q.delete()}b7=C.U()
b7.r=B.aM.gt(0)
b9.bp(D.eij,b7)
b7=c0.r
b1.rS(b9,b7>=1000?"1k\u03a9":""+B.k.U(b7)+"\u03a9",D.dKh,B.aj,10)
break
case"bulb":w=c0.ax
if(w>0){v=C.U()
v.r=B.j5.j(0.55*w).gt(0)
v.z=B.FL
b9.aw(D.a1w,34,v)}p=C.dy(D.dIl,12,18)
b9.bj(C.c_(p,B.k8),b1.Nj(p,B.bv,B.er,!0))
for(w=b9.a,r=0;r<3;++r){v=13+r*3.5
n=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
n.r=B.dt.gt(0)
n.c=1
q=n.M()
w.drawLine.apply(w,[-9,v,9,v,q])
q.delete()}w=C.U()
if(u)v=B.T6
else{v=C.aq(B.er,B.hD,c0.ax)
n=c0.ax
v=v.j(0.25+0.7*n)}if(u)n=B.CV
else{n=C.aq(B.fN,B.j5,c0.ax)
n.toString}w.sav(new C.bS(B.vw,0.5,B.x,b2,0,C.a([v,n.j(0.18+0.5*c0.ax)],x.O),b2,b2).aC(0,C.c2(B.tm,17)))
b9.aw(B.tm,17,w)
w=C.U()
w.b=B.ak
w.c=1.4
w.r=B.c.j(0.6).gt(0)
b9.aw(B.tm,17,w)
b7=b7.r
w=x.v
n=new C.b0(b7,B.aw,b2,b2,C.a([],w))
n.N(new C.bj(-9,-12))
n.N(new C.dn(-12,-4,-9,0))
v=C.U()
v.b=B.ak
v.c=2
v.r=B.c.j(0.45).gt(0)
b9.b4(n,v)
v=C.U()
v.r=B.cS.gt(0)
v.c=1.4
b9.bU(D.dKz,D.dKA,v)
v=C.U()
v.r=B.cS.gt(0)
v.c=1.4
b9.bU(D.dJa,D.dJd,v)
w=C.a([],w)
a2=new C.b0(b7,B.aw,b2,b2,w)
a2.N(new C.bj(-4,-2))
for(m=0;m<6;m=a3){a3=m+1
b7=(m&1)===0?-6:1
b7=new C.av(-4+a3*8/6,-2+b7)
w.push(b7)
v=a2.f
if(v!=null)b7.bH(v)
b7=a2.e
if(b7!=null)b7.a.delete()
a2.e=null}$.a1()
b7=C.U()
b7.b=B.ak
b7.c=1.8
if(u)w=B.aV
else{w=C.aq(B.fN,D.b2x,c0.ax)
w.toString}b7.r=w.gt(0)
b9.b4(a2,b7)
break
case"led":w=c0.ax
if(w>0){v=C.U()
v.r=B.aH.j(0.6*w).gt(0)
v.z=D.d3A
b9.aw(B.tm,30,v)}w=C.U()
w.r=B.er.gt(0)
w.c=2.4
b9.bU(D.dKE,D.dKD,w)
w=C.U()
w.r=B.er.gt(0)
w.c=2.4
b9.bU(D.dJi,D.dJh,w)
b7=b7.r
w=x.v
a4=new C.b0(b7,B.aw,b2,b2,C.a([],w))
a4.N(new C.bj(-12,8))
a4.N(new C.av(-12,-6))
a4.N(new C.dn(0,-26,12,-6))
a4.N(new C.av(12,8))
a4.N(new C.bX())
v=C.U()
if(u)n=B.Ja
else{n=C.aq(B.fg,D.a9u,c0.ax)
n.toString}if(u)l=B.jX
else{l=C.aq(B.kS,B.aH,c0.ax)
l.toString}v.sav(new C.a8(B.ax,B.aC,B.x,C.a([n,l],x.O),b2,b2).aC(0,D.ehV))
b9.b4(a4,v)
v=C.U()
v.b=B.ak
v.c=1.2
v.r=B.j9.gt(0)
b9.b4(a4,v)
v=C.U()
v.r=B.f5.gt(0)
b9.bp(D.ehY,v)
w=new C.b0(b7,B.aw,b2,b2,C.a([],w))
w.N(new C.bj(-7,-4))
w.N(new C.dn(-6,-12,0,-15))
b7=C.U()
b7.b=B.ak
b7.c=2
b7.r=B.c.j(0.5).gt(0)
b9.b4(w,b7)
break
case"motor":a5=new C.af(-28,-14,20,14)
b9.bj(C.c_(a5,B.hZ),b1.asD(a5,B.al,B.aJ))
b7=C.U()
b7.r=B.d3.gt(0)
b9.bp(D.ehL,b7)
b7=C.U()
b7.r=B.cr.gt(0)
b9.bp(D.ehM,b7)
b7=b9.a
J.bP(b7.save())
b7.translate(31,0)
for(m=0;m<3;++m){J.bP(b7.save())
b7.rotate((c0.y+m*2.094)*180/3.141592653589793,0,0)
w=C.dy(D.dIz,15,7)
v=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
v.r=B.dh.j(0.9).gt(0)
q=v.M()
b7.drawOval(C.cz(w),q)
q.delete()
b7.restore()}w=C.U()
w.r=B.aG.gt(0)
b9.aw(B.J,3,w)
b7.restore()
b1.rS(b9,"M",D.dKp,B.aG,14)
break
case"buzzer":a6=C.dy(B.J,42,42)
b7=C.U()
b7.sav(D.dRh.aC(0,a6))
b9.lf(a6,b7)
b7=C.U()
b7.r=B.w.gt(0)
b9.aw(B.J,6,b7)
b7=C.U()
b7.b=B.ak
b7.c=1.4
b7.r=B.be.gt(0)
b9.aw(B.J,6,b7)
b1.rS(b9,"+",D.dKm,B.aj,12)
for(b7=b9.a,w=b1.b,m=1;m<=3;++m){v=c0.ax
n=v>0?B.k.J(w.d*14,5):0
n=C.c2(B.J,24+m*5+n)
l=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
l.b=B.ak
l.c=2
l.r=B.cd.j(v*(1-m*0.22)).gt(0)
q=l.M()
b7.drawArc.apply(b7,[C.cz(n),-40.10704565915762,80.21409131831524,!1,q])
q.delete()}break
case"heater":p=C.c_(D.ei4,B.hZ)
w=C.U()
w.sav(D.bFq.aC(0,new C.af(p.a,p.b,p.c,p.d)))
b9.bj(p,w)
w=C.a([],x.v)
a7=new C.b0(b7.r,B.aw,b2,b2,w)
a7.N(new C.bj(-24,0))
for(m=0;m<8;m=a3){b7=(m&1)===0?-10:10
a3=m+1
b7=new C.dn(-24+m*6+3,b7,-24+a3*6,0)
w.push(b7)
v=a7.f
if(v!=null)b7.bH(v)
b7=a7.e
if(b7!=null)b7.a.delete()
a7.e=null}b7=c0.ax
if(b7>0.1){$.a1()
w=C.U()
w.b=B.ak
w.c=10
w.r=D.b37.j(0.5*b7).gt(0)
w.z=B.jf
b9.b4(a7,w)}$.a1()
b7=C.U()
b7.b=B.ak
b7.c=3.2
b7.d=B.bZ
b7.r=C.aq(B.li,F.aau,c0.ax).gt(0)
b9.b4(a7,b7)
break
case"capacitor":a5=new C.af(-16,-22,16,18)
b7=C.c_(a5,B.hZ)
w=C.U()
w.sav(D.bEp.aC(0,a5))
b9.bj(b7,w)
w=C.U()
w.r=B.cg.gt(0)
b9.bp(D.ei_,w)
for(r=0;r<4;++r){a8=new C.ma(new C.ez("\u2212",b2,b2,B.cT,b2,b2,b2,b2,b2,b2,new C.F(!0,B.aG,b2,b2,b2,b2,11,B.u,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2)),B.a6,B.cn,new C.kc(1),b2,b2,b2,b2,B.cm,b2)
a8.fE()
a8.a6(b9,new C.v(-14,-18+r*9))}a9=new C.af(-16,-24,16,-17)
b9.bj(C.c_(a9,B.k8),b1.bW5(a9,!1))
b7=38*c0.ax
w=18-b7
$.a1()
v=C.U()
v.r=B.bt.j(0.5).gt(0)
b9.bp(new C.af(-3,w,11,w+b7),v)
b1.rS(b9,"1F",D.a1w,B.c,11)
break
case"radio":d=C.c_(D.a2r,B.fV)
b7=C.U()
b7.sav(D.bHL.aC(0,new C.af(d.a,d.b,d.c,d.d)))
b9.bj(d,b7)
b7=C.U()
b7.b=B.ak
b7.c=1.4
b7.r=B.nO.j(0.6).gt(0)
b9.bj(d,b7)
b7=C.c_(D.ei5,B.jL)
w=C.U()
w.r=B.dw.gt(0)
b9.bj(b7,w)
for(b7=b9.a,r=0;r<6;++r){w=-10+r*4.4
v=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
v.r=B.li.gt(0)
v.c=1.4
q=v.M()
b7.drawLine.apply(b7,[-27,w,-3,w,q])
q.delete()}w=C.U()
w.r=(c0.ax>0?B.ho:B.n7).gt(0)
b9.bp(D.ehO,w)
if(c0.ax>0){w=8+B.k.J(b1.b.d*7,18)
v=C.U()
v.r=B.bS.gt(0)
v.c=1.6
b9.bU(new C.v(w,-13),new C.v(w,-3),v)}w=C.U()
w.sav(D.aFL.aC(0,C.c2(D.aAG,6)))
b9.aw(D.aAG,6,w)
w=C.U()
w.r=B.nO.gt(0)
b9.aw(D.dIQ,4,w)
w=C.U()
w.r=B.er.gt(0)
w.c=1.8
b9.bU(D.dIP,D.aAP,w)
if(c0.ax>0)for(w=b1.b,m=1;m<=2;++m){v=C.c2(D.aAP,4+m*5+B.k.J(w.d*8,5))
n=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
n.b=B.ak
n.c=1.4
n.r=B.q0.j(0.7).gt(0)
q=n.M()
b7.drawArc.apply(b7,[C.cz(v),-137.50987083139756,91.67324722093173,!1,q])
q.delete()}break
case"tv":w=C.c_(D.eib,B.hZ)
v=C.U()
v.r=M.zd.gt(0)
b9.bj(w,v)
b0=C.c_(D.ei8,B.k8)
if(c0.ax>0){b7=b9.a
J.bP(b7.save())
b7.clipRRect(C.fL(b0),$.BL(),!0)
for(w=b1.b,m=0;m<7;++m){v=-33+m*9.5
n=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
n.r=D.c7E[B.o.J(m+B.k.bK(w.d*2),7)].gt(0)
q=n.M()
b7.drawRect(C.cz(new C.af(v,-21,v+9.5,7)),q)
q.delete()}v=C.U()
v.r=B.aG.gt(0)
b9.bp(D.ei7,v)
w=-21+B.k.J(w.d*30,38)
v=C.U()
v.r=B.c.j(0.25).gt(0)
b9.bp(new C.af(-33,w,33,w+2),v)
b7.restore()
b7=C.U()
b7.r=B.c.j(0.06).gt(0)
b9.bj(b0,b7)}else{w=C.U()
w.r=D.b7m.gt(0)
b9.bj(b0,w)
b7=new C.b0(b7.r,B.aw,b2,b2,C.a([],x.v))
b7.N(new C.bj(-33,-21))
b7.N(new C.av(-10,-21))
b7.N(new C.av(-33,0))
b7.N(new C.bX())
w=C.U()
w.r=B.c.j(0.05).gt(0)
b9.b4(b7,w)}b7=C.U()
b7.r=B.bB.gt(0)
b9.bp(D.ehX,b7)
b7=C.U()
b7.r=(c0.ax>0?B.bt:B.aH).gt(0)
b9.aw(D.dJ_,1.6,b7)
break}if(u)b1.rS(b9,"\u2716",D.dKF,B.aH,14)},
bvR(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.af(-28,-13,28,13)
d.bj(C.c_(w,B.uX),m.asD(w,B.fN,B.iA))
v=new C.af(-22,-13,22,13)
$.a1()
u=C.U()
u.sav(D.ajc.aC(0,v))
d.bp(v,u)
u=C.U()
u.r=B.e2.gt(0)
d.bp(D.ei1,u)
t=new C.af(28,-5,34,5)
d.bj(C.c_(t,B.hi),m.Nj(t,B.fN,B.iR,!0))
m.rS(d,"+",D.dIF,B.aM,11)
m.rS(d,"\u2212",D.dKr,B.aj,11)
m.rS(d,C.t(l===B.k.lp(l)?B.k.U(l):l)+"V",D.dKl,B.aM,13)
if(l>2){u=C.U()
u.r=B.be.gt(0)
u.c=1
d.bU(D.dIu,D.dIk,u)
m.rS(d,l>3?"3 cells":"2 cells",D.dKk,B.aA,8)}}else if(l<=9){s=new C.af(-22,-17,22,17)
u=C.c_(s,B.uX)
$.a1()
r=C.U()
r.sav(D.bHm.aC(0,s))
d.bj(u,r)
r=C.U()
r.r=B.dp.gt(0)
d.bp(D.ei2,r)
for(u=d.a,q=0;q<2;++q){p=D.cST[q]
r=p<0?5:3.6
o=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.sav(D.aFK.aC(0,C.c2(new C.v(p,-18),5)))
n=o.M()
u.drawCircle(p,-18,r,n)
n.delete()}m.rS(d,"9V",D.dKi,B.c,16)}else{s=new C.af(-34,-16,34,16)
u=C.c_(s,B.jL)
$.a1()
r=C.U()
r.sav(D.ajc.aC(0,s))
d.bj(u,r)
r=C.U()
r.r=B.cV.gt(0)
d.bp(D.eia,r)
for(u=d.a,q=0;q<2;++q){r=C.c_(C.dy(new C.v(D.cSQ[q],-20),8,10),B.hi)
o=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.r=B.cr.gt(0)
n=o.M()
u.drawRRect(C.fL(r),n)
n.delete()}m.rS(d,"+",D.dIL,B.aH,10)
m.rS(d,"12V",D.dKj,B.aG,15)}},
ao(d){return!0}}
A.q_.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
B.d.a8(k)
B.d.a8(d.b)
w=C.S(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new A.ve(o,r,q,p)
n.aHS(o,r,q,p)
k.push(n)
J.ic(s[4],new A.cf3(n))
w.m(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.K)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.azx(m,u[1],l,u[3])}}}
A.ag2.prototype={
S(){return new A.ag3(B.J,B.as,$,B.bu,0,C.a([],x.X),null,null)}}
A.ag3.prototype={
Z(){this.a0()
this.a.c.e=new A.bCD()
this.kH()},
l_(d){var w,v,u,t,s,r=this,q="noise"
r.a.c.a58(0,d)
if((r.z+=d)>0.16){r.z=0
for(w=r.a.c.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
if(t.x)continue
switch(t.b){case"buzzer":s=t.ax
if(s>0.2)A.e1(520,"",110,0,0.16*s,"square")
break
case"motor":s=t.ax
if(s>0.08)A.e1(60+s*55,"",130,0,0.12,"tri")
break
case"heater":if(t.ax>0.2)s=B.cA.af()<0.5
else s=!1
if(s)A.e1(2400,"",25,0,0.12*t.ax,q)
break
case"radio":if(t.ax>0){A.e1(900+B.cA.aA(800),"",90,0,0.1,q)
if(B.cA.af()<0.35)A.e1(300+B.cA.aA(6)*70,"",150,0,0.12,"tri")}break
case"tv":if(t.ax>0)s=B.cA.af()<0.4
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
r.n(new A.bCE())},
b1M(d){var w,v,u,t,s,r,q,p,o,n,m,l,k
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
for(o=0;o<2;++o){n=this.y
m=p.c
l=o===0?-42:42
l=m*n.a+l-u
n=p.d*n.b-t
k=Math.sqrt(l*l+n*n)
if(k<r){s=new C.z(p,o)
r=k}}}return s},
aWJ(d){var w,v,u,t,s,r,q,p
for(w=this.a.c.a,v=C.T(w).k("dv<1>"),w=new C.dv(w,v),w=new C.bR(w,w.gH(0),v.k("bR<ai.E>")),u=d.a,v=v.k("ai.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
if(Math.abs(u-r*q.a)<36&&Math.abs(t-p*q.b)<26)return s}return null},
cug(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
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
h=A.h4s(new C.v(k,o),new C.v(i,n),p)
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
ab6(){this.a.toString
this.n(new A.bCc())},
biO(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cGO[v]
if(!B.d.bf(p.a.c.a,new A.bCF(u,w))){o=new C.v(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?E.Gi:o
s=s?E.Gi:o
q=t.agL(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.m(0,q.a,0)
p.d=q
p.e=null
A.e1(1200,"",50,0,0.3,"tri")
p.ab6()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d
j.a.toString
w=C.a([],x.s)
for(v=0;v<16;++v)w.push(D.Nc[v].a)
u=j.a.d
if(u!=null){t=C.a2(u).k("cu<1>")
t=C.A(new C.cu(u,t),t.k("G.E"))
s=t.length
v=0
for(;v<t.length;t.length===s||(0,C.K)(t),++v){r=t[v]
q=u.h(0,r)
u.m(0,r,Math.min(1,(q==null?1:q)+0.03))}}t=x.p
s=C.a([],t)
q=j.a.f
if(q!=null)s.push(q)
s.push(C.D(C.cj(new A.bCB(j,u,h)),1))
j.a.toString
q=B.c.j(0.08)
p=C.a([],t)
for(o=w.length,v=0;v<w.length;w.length===o||(0,C.K)(w),++v){r=w[v]
n=$.a0x()
m=n.h(0,r).d.j(0.14)
l=new C.b3(14,14)
k=new C.ax(n.h(0,r).d.j(0.5),1,B.r,-1)
p.push(C.aJ(i,C.p(i,C.u(C.a([new C.w(n.h(0,r).c,i,B.v9,i,i,i,i,i,i,i,i,i),B.by,new C.w(n.h(0,r).b,i,D.a4a,i,i,i,i,B.Z,i,1,i,i)],t),B.m,i,B.b5,B.j,0,B.p),B.h,i,i,new C.o(m,i,new C.c1(k,k,k,k),new C.bu(l,l,l,l),i,i,B.n),i,i,i,B.jY,i,i,i,68),B.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.bCC(j,r),i,i,i,i,i,i,!1,B.ae))}s.push(C.p(i,C.cK(p,i,B.kW,i,i,B.aY,!1),B.h,i,i,new C.o(D.TE,i,new C.c1(new C.ax(q,1,B.r,-1),B.W,B.W,B.W),i,i,i,B.n),i,78,i,i,i,i,i,i))
return C.u(s,B.m,i,B.e,B.j,0,B.p)},
aUf(d){var w=null,v=C.m(18)
return C.p(w,d,B.h,w,w,new C.o(D.aYL,w,C.H(B.bG,B.r,1),v,w,w,B.n),w,w,w,w,D.bf9,w,w,w)},
c89(d){var w,v,u,t=this,s=null,r=d.b,q=$.a0x().h(0,r),p=d.as,o=d.at,n=new A.bCn(t,q),m=C.d(q.c,s,s,s,s,s,s,B.QI,s,s,s),l=q.b,k=q.d,j=x.p
l=C.B(C.a([m,B.aa,C.D(C.d(l,s,s,s,s,s,s,C.l(s,s,k,s,s,s,s,s,s,s,s,16,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),C.aF(s,s,s,s,D.bwQ,s,s,s,new A.bCg(t,d),s,s,s,s,"Remove part",B.c6),C.aF(s,s,s,s,B.Lq,s,s,s,new A.bCh(t),s,s,s,s,s,B.c6)],j),B.m,s,B.e,B.j,0,s,s)
m=C.d(q.e,s,s,s,s,s,s,D.QX,s,s,s)
w=C.d("How it is made: "+q.f,s,s,s,s,s,s,D.eD2,s,s,s)
p=d.x?"Burnt out! Press Repair.":"Now: "+B.k.ab(Math.abs(d.as),2)+" volts  \xb7  "+B.k.ab(Math.abs(d.at)*1000,0)+" milliamps  \xb7  "+B.k.ab(Math.abs(p*o),2)+" watts"
p=C.a([l,m,B.au,w,B.ar,C.d(p,s,s,s,s,s,s,C.l(s,s,d.x?B.cN:B.aM,s,s,s,s,s,s,s,s,12.5,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],j)
if(r==="battery"){o=C.a([],j)
for(v=0;v<5;++v){u=D.cMP[v]
o.push(new A.dx(C.t(u)+" V",d.e===u,new A.bCi(t,d,u),s,k,s))}p.push(C.cb(B.bH,o,B.bw,0,6))}if(r==="resistor"){o=C.a([],j)
for(v=0;v<5;++v){u=D.cEv[v]
m=u>=1000?"1 k\u03a9":""+B.o.U(u)+" \u03a9"
o.push(new A.dx(m,d.r===u,new A.bCj(t,d,u),s,k,s))}p.push(C.cb(B.bH,o,B.bw,0,6))}if(r==="solar")p.push(n.$3("Sunlight",d.f,new A.bCk(d)))
if(r==="turbine")p.push(n.$3("Wind",d.f,new A.bCl(d)))
if(r==="pot")p.push(n.$3("Knob",d.f,new A.bCm(d)))
if(r==="crank")p.push(D.eVQ)
if(r==="switch")p.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",s,s,s,s,s,s,B.i0,s,s,s))
return t.aUf(new C.cZ(D.aQY,C.cg(C.u(p,B.F,s,B.e,B.R,0,B.p),B.q,s,B.z,s,s,s,s,B.ah),s))}}
A.b72.prototype={}
A.SY.prototype={
S(){return new A.aAa(A.fyD(),new C.cn(null,x.gJ),C.aZ(x.S))}}
A.aAa.prototype={
bZP(){var w,v=this
if(++v.w%10===0){w=v.f
$.bzP()
w=w>=8}else w=!0
if(w)return
w=v.r
if(!w.q(0,v.f)&&$.bzP()[v.f].c.$1(v.d)){w.G(0,v.f)
A.At("bell",C.a([0,4,7,12],x.t),700,0.45)
v.n(new A.dJ8())}},
adG(){var w=0,v=C.j(x.H),u=this,t
var $async$adG=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ce(null,null,!0,null,new A.dJ7(u),t,null,!0,!0,x.H),$async$adG)
case 2:return C.h(null,v)}})
return C.i($async$adG,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.f,o=$.bzP(),n=p<8?o[p]:q
o=n==null
w=!o
v=w&&r.r.q(0,p)
p=(v?B.bt:B.b4).j(0.12)
u=C.m(16)
t=C.H((v?B.bt:B.b4).j(0.4),B.r,1)
if(o)o=D.eVR
else{o=v?"\u2705":"\ud83c\udfaf"
o=C.d(o+" Challenge "+(r.f+1)+": "+n.a,q,q,q,q,q,q,S.H7,q,q,q)
o=C.u(C.a([o,C.d(v?"Well done!":n.b,q,2,B.Z,q,q,q,D.ey6,q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p)}s=x.p
o=C.a([C.D(o,1)],s)
if(w)o.push(C.bG(!1,C.d(v?"Next":"Skip",q,q,q,q,q,q,q,q,q,q),q,q,!0,q,q,new A.dJa(r,v),q,q))
p=A.fKX(r.d,C.p(q,C.B(o,B.m,q,B.e,B.j,0,q,q),B.h,q,q,new C.o(p,q,t,u,q,q,B.n),q,q,q,D.acb,B.acs,q,q,q),r.e,r.gbZO(),q)
return A.je(B.b4,C.a([C.aF(q,q,q,q,D.btW,q,q,q,r.gcdV(),q,q,q,q,"Ready-made circuits",q),C.aF(q,q,q,q,D.bAu,q,q,q,new A.dJb(r),q,q,q,q,"Repair burnt parts",q),C.aF(q,q,q,q,D.bsY,q,q,q,new A.dJc(r),q,q,q,q,"Clear the board",q)],s),"Build real circuits.\n\n1. Tap a part at the bottom to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nTry the challenges at the top, or open Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired.",p,"ELECTRONICS LAB",q)}}
A.auG.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.b6h.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.blZ()}}
A.aSY.prototype={}
A.Tt.prototype={
S(){return new A.bg6(C.S(x.S,x.N),B.as,C.a([],x.R),$,B.bu,0,C.a([],x.X),null,null)}}
A.bg6.prototype={
guE(){var w=this.f
return w===$?this.f=A.fGz(0):w},
Z(){this.a0()
this.kH()
A.yq("laser_maze").bw(new A.dY8(this),x.P)},
l_(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.z(u.a,t)
if(t>0.8)B.d.cu(w,v)}this.n(new A.dY9())},
ab8(d){var w=this
w.n(new A.dXZ(w,d))
A.v6("laser_maze",C.E(["best",w.e,"level",w.d],x.N,x.z))},
c_1(d){var w,v,u,t,s,r,q,p,o=this
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
if(o.guE().b.q(0,p)||p===o.guE().e||o.guE().d.am(0,p))return
o.n(new A.dY_(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cj(new A.dY2(t,A.h4n(t.guE(),t.r))),q=x.p,p=C.a([new A.dx("Clear mirrors",!1,new A.dY3(t),B.jF,B.aM,s),new A.dx("Skip",!1,new A.dY4(t),D.bqU,B.b4,s)],q)
if(t.d>0)p.push(new A.dx("Back",!1,new A.dY5(t),D.bqV,B.b4,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new A.dx(""+u,v===t.d,new A.dY6(t,v),s,B.aH,s))}return A.je(B.aH,B.fT,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.u(C.a([new A.eE(p,s,s),new A.eE(w,"LEVEL",s)],q),B.m,s,B.e,B.R,0,B.p))}}
A.bda.prototype={
a6(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.gef()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=B.k.D((b0.b-a4)/2,8,300),a7=new A.d9f(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.c_(new C.af(a5,a6,a8,a4),B.k7)
v=$.a1()
u=C.U()
u.r=M.zd.gt(0)
a9.bj(w,u)
for(w=a9.a,t=0;t<=7;++t){u=t*a3
s=a5+u
r=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
r.r=B.du.gt(0)
q=r.M()
w.drawLine.apply(w,[s,a6,s,a4,q])
q.delete()
u=a6+u
s=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
s.r=B.du.gt(0)
q=s.M()
w.drawLine.apply(w,[a5,u,a8,u,q])
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.ef(a8,a8.r,C.a2(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.c_(C.dy(p,u,u),B.fV)
o=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.sav(D.bHR.aC(0,C.dy(p,a3,a3)))
q=o.M()
w.drawRRect(C.fL(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.b0(v.r,B.aw,a2,a2,u)
n.N(new C.bj(a7.$1(B.d.gI(a8)).a,a7.$1(B.d.gI(a8)).b))
for(a8=C.dc(a8,1,a2,C.T(a8).c),v=a8.$ti,a8=new C.bR(a8,a8.gH(0),v.k("bR<ai.E>")),v=v.k("ai.E");a8.C();){s=a8.d
if(s==null)s=v.a(s)
s=new C.av(a7.$1(s).a,a7.$1(s).b)
u.push(s)
r=n.f
if(r!=null)s.bH(r)
s=n.e
if(s!=null)s.a.delete()
n.e=null}$.a1()
a8=C.U()
a8.b=B.ak
a8.c=14
a8.e=B.fl
a8.r=B.aH.j(0.28+0.08*Math.sin(a1.f*12)).gt(0)
a8.z=B.mN
a9.b4(n,a8)
a8=C.U()
a8.b=B.ak
a8.c=4
a8.e=B.fl
a8.r=D.a9u.gt(0)
a9.b4(n,a8)
a8=C.U()
a8.b=B.ak
a8.c=1.6
a8.e=B.fl
a8.r=B.c.gt(0)
a9.b4(n,a8)}for(a8=a4.c,a8=C.ef(a8,a8.r,C.a2(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.q(0,m)
if(l){m=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
m.r=B.aM.j(0.5).gt(0)
m.z=B.AQ
q=m.M()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
m.r=(l?B.aM:B.bB).gt(0)
q=m.M()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?B.c:B.aA
i=new C.ma(new C.ez("\u2605",a2,a2,B.cT,a2,a2,a2,a2,a2,a2,new C.F(!0,j,a2,a2,a2,a2,v,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),B.a6,B.cn,new C.kc(1),a2,a2,a2,a2,B.cm,a2)
i.fE()
j=i.b
h=j.c
j=j.a.c
i.a6(a9,new C.v(m-h/2,k-j.gbe(j)/2))}g=new A.d9i(a7,a3,a9)
a1.c.bD(0,new A.d9g(g))
a4.d.bD(0,new A.d9h(g))
f=a7.$1(a4.e)
a4=C.c_(C.dy(f,o,a3*0.8),B.fV)
a8=C.U()
a8.r=B.aH.gt(0)
a9.bj(a4,a8)
v=f.ap(0,new C.v(v,0))
a8=C.U()
a8.r=B.c.gt(0)
a9.aw(v,5,a8)
for(a4=a1.r,a8=a4.length,e=0;e<a4.length;a4.length===a8||(0,C.K)(a4),++e){d=a4[e]
a0=d.b/0.8
v=d.a
u=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
u.b=B.ak
s=1-a0
u.c=4*s
u.r=B.aM.j(s).gt(0)
q=u.M()
w.drawCircle(v.a,v.b,a3*(0.3+a0),q)
q.delete()}},
ao(d){return!0}}
A.Tv.prototype={
S(){var w=x.n
return new A.aAO(B.cA,C.a([1,0.5,0],w),C.a([0,0,0],w),$,B.bu,0,C.a([],x.X),null,null)}}
A.aAO.prototype={
Z(){this.a0()
this.kH()
A.yq("light_mixer").bw(new A.dYr(this),x.P)},
l_(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aUg()
w.n(new A.dYs())},
atn(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aA(5)/4)
u.e=t
if(B.d.e8(t,new A.dYc()))u.e[w.aA(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aUg(){var w,v,u=this
if(u.z!=="play")return
w=B.k.U(B.k.D(1-A.h_O(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
A.v9(v,B.o.ak(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
A.v6("light_mixer",C.E(["best",v],x.N,x.z))}}else u.z="result"},
gcpy(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.E(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cyy[B.o.J(B.k.U(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cj(new A.dYl(v,A.h_O(v.e,t))),r=t[0]
r=A.ho(B.aH,""+B.k.U(r*100)+"%","Red",1,0,new A.dYm(v),r)
w=t[1]
w=A.ho(B.br,""+B.k.U(w*100)+"%","Green",1,0,new A.dYn(v),w)
t=t[2]
return A.je(B.bd,B.fT,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.u(C.a([r,w,A.ho(B.dg,""+B.k.U(t*100)+"%","Blue",1,0,new A.dYo(v),t),new C.bF(B.a7,u,u,new A.fe(B.hg,"Lock it in",new A.dYp(v),B.bt,u),u)],x.p),B.m,u,B.e,B.R,0,B.p))}}
A.bdp.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.c_(new C.af(0,0,n,m),B.pq)
$.a1()
w=C.U()
w.r=B.w.gt(0)
d.bj(l,w)
w=d.a
J.bP(w.save())
w.clipRRect(C.fL(C.c_(new C.af(0,0,n,m),B.pq)),$.BL(),!0)
v=e.gef()*0.3
u=e.ej(B.J)
l=-v*0.55
t=v*0.45
s=[u.ap(0,new C.v(0,l)),u.ap(0,new C.v(l,t)),u.ap(0,new C.v(v*0.55,t))]
r=[B.CG,F.a8J,F.a93]
d.kF(new C.af(0,0,n,m),C.U())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.a=B.n_
p.r=r[q].j(l[q]).gt(0)
o=p.M()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.c_(new C.af(0,0,n,m),B.pq)
m=C.U()
m.b=B.ak
m.c=2
m.r=B.be.gt(0)
d.bj(n,m)},
ao(d){return!0}}
A.aIE.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.bsY.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpw()}}
A.aIF.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.bsZ.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpx()}}
A.bpQ.prototype={}
A.a61.prototype={
B(d){var w=null
return C.cf(C.eA(w,w,w,!0,!0,D.a9C,w,1,!0,w,0,!1,w,!1,w,w,C.aF(w,w,w,w,D.aib,w,w,w,new A.c9T(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.f5_,w,w,w,1,w,!0),D.a9C,C.cK(C.a([D.dLN,C.cj(new A.c9U())],x.p),w,D.bg8,w,w,B.ah,!1),w,!1,!1,w,w)}}
A.Uj.prototype={
S(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new A.aBB(w,new C.ao(B.aq,$.at()),$,B.bu,0,C.a([],x.X),null,null)}}
A.aBB.prototype={
Z(){this.a0()
this.kH()},
b_3(d){var w=this.d.length
return B.o.J(B.k.bK(B.k.J(B.k.J(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
l_(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b_3(v.f)
if(w!==v.x){v.x=w
A.l_("bell",24+B.o.J(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.n(new A.etH(v))
A.At("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c_W(){if(this.d.length<2)return
this.n(new A.etD(this))},
aUA(d){var w=this,v=B.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.n(new A.etC(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc_V(),p=s.d,o=C.D(C.aJ(r,C.b2(r,r,r,new A.bra(p,s.f,r),B.fk),B.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,B.ae),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.u(C.a([o,new C.a3(r,40,C.as(C.d(n,r,r,r,r,r,r,D.eHO,r,r,r),r,r,r),r)],w),B.m,r,B.e,B.j,0,B.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.art[B.o.J(v,8)].j(0.9)
t=new C.b3(20,20)
o.push(C.aJ(r,C.p(r,new C.w(p[v],r,D.eH4,r,r,r,r,r,r,r,r,r),B.h,r,r,new C.o(u,r,r,new C.bu(t,t,t,t),r,r,B.n),r,r,r,B.hd,B.h1,r,r,r),B.z,!1,r,r,r,r,r,r,r,new A.etF(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,B.ae))}p=B.c.j(0.07)
return A.je(B.aM,B.fT,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.u(C.a([new A.eE(o,r,r),C.B(C.a([C.D(C.aK(r,B.U,!1,r,!0,B.q,r,C.aL(),s.e,r,r,r,r,r,2,C.bl(r,new C.b1(4,C.m(14),B.W),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ke,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),B.z,!0,r,!0,r,!1,r,B.af,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new A.etG(s),r,!1,r,r,!1,r,!0,r,B.a8,r,r,r,r,r,r,r,r,r,r,r,B.di,!0,B.a6,r,B.am,r,r,r,r),1),B.aa,new A.fe(B.hH,"Add",s.gc_T(s),B.c,r),B.bo,new A.fe(B.lW,"Spin",q,B.bt,r)],w),B.m,r,B.e,B.j,0,r,r)],w),B.m,r,B.e,B.R,0,B.p))}}
A.bra.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.v(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.a1()
w=C.U()
w.r=D.b0i.gt(0)
a1.aw(d,f,w)
w=C.U()
w.b=B.ak
w.c=3
w.r=B.aM.gt(0)
a1.aw(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=C.c2(d,a0)
n=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
n.r=D.art[B.o.J(q,8)].gt(0)
m=n.M()
n=p*57.29577951308232
f.drawArc.apply(f,[C.cz(o),n,s,!0,m])
m.delete()
o=C.c2(d,a0)
l=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
l.b=B.ak
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
k=new C.ma(new C.ez(o,i,i,B.cT,i,i,i,i,i,i,D.evQ),B.a6,B.cn,new C.kc(1),i,i,i,i,B.cm,i)
k.fE()
o=k.b
n=o.c
o=o.a.c
k.a6(a1,new C.v(a0-n-16,-o.gbe(o)/2))
f.restore()}f=C.U()
f.r=D.a9p.gt(0)
a1.aw(d,20,f)
f=C.U()
f.b=B.ak
f.c=3
f.r=B.aM.gt(0)
a1.aw(d,20,f)
j=new C.b0(h.r,B.aw,i,i,C.a([],x.v))
e-=a0
j.N(new C.bj(g,e+26))
e-=10
j.N(new C.av(g-14,e))
j.N(new C.av(g+14,e))
j.N(new C.bX())
e=C.U()
e.r=B.c.gt(0)
a1.b4(j,e)
e=C.U()
e.b=B.ak
e.c=2
e.r=B.aV.gt(0)
a1.b4(j,e)},
ao(d){return!0}}
A.T4.prototype={
S(){return new A.bfG($,B.bu,0,C.a([],x.X),null,null)}}
A.bfG.prototype={
Z(){this.a0()
this.kH()},
l_(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
A.At("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a2z(900,new A.dL8())}w.n(new A.dL9())},
aUC(d){return this.n(new A.dL3(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=B.a.aT(B.o.u(B.k.ak(m,60)),2,"0")
v=B.a.aT(B.o.u(B.o.J(B.k.dF(m),60)),2,"0")
m=C.b2(n,n,n,new A.bm6(l,B.cN,n),B.aHv)
u=C.d(w+":"+v,n,n,n,n,n,n,D.ezP,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.as(new C.a3(280,280,new C.am(B.B,n,B.a9,B.q,C.a([m,C.u(C.a([u,C.d(t,n,n,n,n,n,n,D.eyU,n,n,n),B.au,C.d("Sessions done: "+o.r,n,n,n,n,n,n,B.BG,n,n,n)],s),B.m,n,B.e,B.R,0,B.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.cPe[r]
u.push(new A.dx(""+q+" min",o.d===q,new A.dL5(o,q),n,B.cN,n))}m=o.f
p=m?U.wZ:B.iG
m=m?"Pause":"Start"
return A.je(B.cN,B.fT,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.u(C.a([new A.eE(u,n,n),new A.eE(C.a([new A.fe(p,m,new A.dL6(o),B.bt,n),new A.fe(B.jF,"Reset",new A.dL7(o),B.c,n)],s),n,n)],s),B.m,n,B.e,B.R,0,B.p))}}
A.bm6.prototype={
a6(d,e){var w,v,u,t,s=e.ej(B.J),r=e.a/2-14
$.a1()
w=C.U()
w.b=B.ak
w.c=16
w.r=B.c.j(0.08).gt(0)
d.aw(s,r,w)
w=C.c2(s,r)
v=C.U()
v.b=B.ak
v.c=16
v.d=B.bZ
u=this.c
t=C.aq(u,B.c,0.4)
t.toString
v.sav(new C.fQ(B.B,-1.5707963267948966,4.71238898038469,B.x,C.a([u,t,u],x.O),null,null).aC(0,C.c2(s,r)))
d.fP(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
ao(d){return d.b!==this.b}}
A.Si.prototype={
S(){return new A.bfl($,B.bu,0,C.a([],x.X),null,null)}}
A.bfl.prototype={
Z(){this.a0()
this.kH()},
l_(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Om.h(0,p.d)
w.toString
v=B.d.fs(w,new A.dx6())
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
A.l_("flute",D.bIr[t]+5,1400,0.35)}p.n(new A.dx7())},
gc_Z(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.It("Press Start",0.5)
w=D.Om.h(0,this.d)
w.toString
v=B.d.fs(w,new A.dx1())
u=B.k.J(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.It("Breathe in",0.5+0.5*B.dG.ar(0,p))
case 1:return new C.It("Hold",1)
case 2:return new C.It("Breathe out",1-0.5*B.dG.ar(0,p))
default:return new C.It("Hold",0.5)}}}return new C.It("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc_Z(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=B.hS.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,B.h,q,q,new C.o(s,q,q,q,u===0?C.a([new C.aa(0,B.G,B.hS.j(0.35),B.J,40)],v):q,q,B.a5),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,B.BP,q,q,q))
n.push(C.an(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,B.ke,q,q,q),q,q,q,q,q,q))
n=C.as(new C.a3(300,340,new C.am(B.B,q,B.a9,B.q,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aU(D.Om.ge9(D.Om));w.C();){v=w.gT(w)
o.push(new A.dx(v,r.d===v,new A.dx4(r,v),q,B.hS,q))}w=r.e
v=w?B.XS:B.iG
w=w?"Stop":"Start"
o.push(new A.fe(v,w,new A.dx5(r),B.bt,q))
return A.je(B.hS,B.fT,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new A.eE(o,q,q))}}
A.aEX.prototype={}
A.SW.prototype={
S(){return new A.bfA(new C.cn(null,x.A),C.a([],x.au),B.aG,B.c)}}
A.bfA.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aF(s,s,s,s,D.m1,s,s,s,new A.dIF(t,d),s,s,s,s,"Share",s)],r),p=C.bv(C.m(18),new C.en(C.aJ(s,C.b2(s,s,s,new A.bhB(t.e,t.x,s),B.fk),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.dIG(t),new A.dIH(t),s,s,s,s,s,s,s,s,s,new A.dII(t),s,s,s,s,!1,B.ae),t.d),B.ap),o=C.a([],r)
for(w=0;w<9;++w){v=D.cy_[w]
u=!t.w&&t.f.A(0,v)
o.push(new A.DR(v,u,new A.dIJ(t,v),!1,s))}u=t.r
return A.je(B.bz,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.C(B.bT,p,s),"DRAW PAD",C.u(C.a([new A.eE(o,s,s),A.ho(B.bz,""+B.k.U(u),"Brush",30,2,new A.dIK(t),u),new A.eE(C.a([new A.dx("Eraser",t.w,new A.dIL(t),B.KR,B.bz,s),new A.fe(B.uA,"Undo",new A.dIM(t),B.c,s),new A.fe(B.e4,"Clear",new A.dIN(t),B.c,s),new A.fe(B.L1,"Paper",new A.dIO(t),B.c,s)],r),s,s)],r),B.m,s,B.e,B.R,0,B.p))}}
A.bhB.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.a1()
w=C.U()
w.r=this.c.gt(0)
d.bp(new C.af(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=$.a1()
p=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o=r.a
p.r=o.gt(o)
n=r.b
p.c=n
p.d=B.bZ
p.e=B.fl
p.b=B.ak
m=r.c
if(m.length===1){q=B.d.gI(m)
m=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
m.r=o.gt(o)
l=m.M()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=C.a([],t)
k=new C.b0(q.r,B.aw,null,null,o)
o.push(new C.bj(B.d.gI(m).a,B.d.gI(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new C.dn(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.bH(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new C.av(B.d.gai(m).a,B.d.gai(m).b)
o.push(q)
o=k.f
if(o!=null)q.bH(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.M()
q=k.e
u.drawPath((q==null?k.e=new C.cG(k.gbM().a.snapshot()):q).a,l)
l.delete()}}},
ao(d){return!0}}
A.TH.prototype={
S(){var w=x.S
return new A.aAY(C.aZ(w),C.aZ(w))}}
A.aAY.prototype={
Z(){this.a0()
this.aoS()},
aoS(){var w,v,u=this,t=x.N,s=C.bh(D.cTc,!0,t)
B.d.BF(s)
w=x.S
v=C.T(s).c
t=C.A(C.dc(s,0,C.dJ(u.d,"count",w),v),t)
B.d.v(t,C.dc(s,0,C.dJ(u.d,"count",w),v))
B.d.BF(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
c_U(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
A.l_("bell",12+B.o.J(d,9),150,0.35)
s.n(new A.e2z(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gI(0)
u=w.gai(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bK(B.ni,new A.e2A(s,v,u),t)
else{s.x=!0
C.bK(A2.Dt,new A.e2B(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,B.aJJ,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+B.o.ak(p,2)+" / "+o
o=x.p
p=C.u(C.a([new C.C(B.wq,C.B(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?B.aM:B.aj,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),B.m,q,B.hv,B.j,0,q,q),q),C.D(C.ig(!0,q,q,B.z,new C.hH(v,8,8,1,q),new A.e2F(r),r.e.length,B.bk,q,B.ah,!1),1)],o),B.m,q,B.e,B.j,0,B.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.czl[t]
o.push(new A.dx(s.b,r.d===s.a,new A.e2G(r,s),q,B.b4,q))}o.push(new A.fe(D.bqS,"New game",new A.e2H(r),B.bt,q))
return A.je(B.b4,B.fT,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new A.eE(o,q,q))}}
A.TT.prototype={
S(){return new A.aBg(C.a([],x.t))}}
A.aBg.prototype={
c_Y(d){B.d.a8(this.d)
this.w=!0
this.aUB()},
aUB(){this.d.push(B.cA.aA(4))
this.e=0
this.XF()},
XF(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$XF=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.n(new A.eb3(t))
s=x.H
w=3
return C.b(C.bK(B.lk,null,s),$async$XF)
case 3:r=t.d,q=C.bh(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aOp(n)
w=7
return C.b(C.bK(new C.b7(1000*Math.max(280,600-r.length*18)),null,s),$async$XF)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.n(new A.eb4(t))
case 1:return C.h(u,v)}})
return C.i($async$XF,v)},
aOp(d){this.n(new A.eb1(this,d))
A.l_("marimba",D.ajI[d]+5,450,0.55)
C.bK(B.Dr,new A.eb2(this),x.H)},
c0_(d){var w,v,u=this
if(!u.w||u.r)return
u.aOp(d)
w=u.d
v=u.e
if(w[v]!==d){A.e1(90,"",600,0,0.5,"saw")
u.n(new A.eb5(u))
return}++v
u.e=v
if(v===w.length){u.n(new A.eb6(u))
C.bK(B.ih,new A.eb7(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,E.QN,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.eIb,B.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aqt[v]
u=u.j(q.f===v?1:0.35)
t=new C.b3(28,28)
s=q.f===v?C.a([new C.aa(0,B.G,D.aqt[v].j(0.8),B.J,30)],w):p
r=new C.ax(B.c.j(q.f===v?0.9:0.15),2,B.r,-1)
l.push(C.aJ(p,C.dg(p,p,p,p,B.b9,new C.o(u,p,new C.c1(r,r,r,r),new C.bu(t,t,t,t),s,p,B.n),B.jb,p,p,p,p,p,p,p),B.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.eb8(q,v),p,p,p,p,p,p,!1,B.ae))}o=C.as(new C.C(B.a8,C.u(C.a([o,B.ar,n,B.d1,new C.fM(1,C.lX(1,l,2,12,12,p,B.dJ,!1),p)],m),B.m,p,B.b5,B.j,0,B.p),p),p,p,p)
n=q.w?"Restart":"Start"
return A.je(B.cV,B.fT,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new A.eE(C.a([new A.fe(B.iG,n,q.gc_X(q),B.bt,p)],m),p,p))}}
A.Ud.prototype={
S(){return new A.bgO(new C.ao(B.aq,$.at()))}}
A.bgO.prototype={
ask(d){return C.oc(B.k.ab(d,2),C.ad("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new A.epl(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d5(C.aI(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new A.epu()
l=C.aK(m,B.U,!1,m,!0,B.q,m,C.aL(),l,m,m,m,m,m,2,C.bl(m,m,m,m,m,m,m,m,!0,new C.b1(4,C.m(16),A_.vA),m,m,m,m,m,m,m,m,m,m,m,new C.b1(4,C.m(16),D.aPn),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.l7,"Bill amount",!0,!0,!1,m,m,m,m,D.eFL,"$ ",m,m,m,m,m,m,m,m),B.z,!0,m,!0,m,!1,m,B.af,m,m,m,m,m,B.dX,m,m,m,1,m,m,!1,"\u2022",m,new A.epq(n),m,m,m,!1,m,m,!1,m,!0,m,B.a8,m,m,m,m,m,m,m,m,m,m,m,B.aIY,!0,B.a6,m,B.am,m,m,m,m)
k=B.bt.j(0.1)
s=C.m(20)
r=C.H(B.bt.j(0.35),B.r,1)
q=x.p
s=C.cK(C.a([l,B.bs,C.p(m,C.u(C.a([t.$2("Tip ("+B.k.U(n.e)+"%)","$"+n.ask(w)),t.$2("Total","$"+n.ask(v)),Q.Uu,t.$3$big("Each of "+n.f+" pays","$"+n.ask(u),!0)],q),B.m,m,B.e,B.j,0,B.p),B.h,m,m,new C.o(k,m,r,s,m,m,B.n),m,m,m,m,B.c1,m,m,m)],q),m,B.fv,m,m,B.ah,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.ckF[p]
r.push(new A.dx(""+o+"%",B.k.U(n.e)===o,new A.epr(n,o),m,B.bt,m))}l=n.f
return A.je(B.bt,B.fT,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.u(C.a([new A.eE(r,"TIP",m),A.ho(B.b4,""+l,"People",20,1,new A.eps(n),l),new A.eE(C.a([new A.dx("Round up",n.r,new A.ept(n),m,B.aM,m)],q),m,m)],q),B.m,m,B.e,B.R,0,B.p))}}
A.TF.prototype={
S(){var w=C.a([3,5],x.t)
return new A.bgh(w,B.cA,$,B.bu,0,C.a([],x.X),null,null)}}
A.bgh.prototype={
Z(){this.a0()
this.kH()},
l_(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(B.o.J(B.k.bK(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aA(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aA(6)+1)
u.f=t
A.a60("snare",0.5)}u.n(new A.e1e())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.he()
u.w=t
u.x=t?0:3.141592653589793
A.l_("bell",24,400,0.5)}u.n(new A.e1f())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new A.b9o(v,o.r>0,n))}u=C.aJ(n,C.as(C.cb(B.fA,m,B.bw,18,18),n,n,n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e17(o),n,n,n,n,n,n,!1,B.ae)}else if(m==="coin"){t=B.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.H(B.dD,B.r,6)
s=C.a([new C.aa(0,B.G,B.aM.j(0.4),B.J,30)],x.V)
u=C.aJ(n,C.as(C.e5(B.B,C.p(B.B,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.eF1,n,n,n),B.h,n,n,new C.o(n,n,v,n,s,D.dRg,B.a5),n,190,n,n,n,n,n,190),n,n,t),n,n,n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e18(o),n,n,n,n,n,n,!1,B.ae)}else{m=o.as
u=C.aJ(n,C.as(C.u(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.evl,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,B.ke,n,n,n)],x.p),B.m,n,B.e,B.R,0,B.p),n,n,n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e19(o),n,n,n,n,n,n,!1,B.ae)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.cMY[r]
v.push(new A.dx(q.b,o.d===q.a,new A.e1a(o,q),q.c,B.bE,n))}v=C.a([new A.eE(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(A.ho(B.bE,""+s,"Dice",4,1,new A.e1b(o),s))}if(o.d==="num"){s=o.z
s=A.ho(B.bE,""+s,"From",100,1,new A.e1c(o),s)
p=o.Q
B.d.v(v,C.a([s,A.ho(B.bE,""+p,"To",1000,2,new A.e1d(o),p)],m))}return A.je(B.bE,B.fT,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.u(v,B.m,n,B.e,B.R,0,B.p))}}
A.b9o.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(B.cA.af()-0.5)*0.6
else w=0
v=C.m(22)
u=C.a([new C.aa(0,B.G,B.w.j(0.4),B.cv,14)],x.V)
t=C.a([],x.p)
for(s=D.d2v.h(0,B.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bF(s[q],p,p,C.p(p,p,B.h,p,p,I.a6X,p,18,p,p,p,p,p,18),p))
return C.es(B.B,w,C.p(p,new C.am(B.V,p,B.a9,B.q,t,p),B.h,p,p,new C.o(B.c,p,p,v,u,p,B.n),p,100,p,p,B.bA,p,p,100),p)}}
A.aI0.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.bsQ.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.boR()}}
A.aIi.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.bsU.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bp9()}}
A.aIN.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.bt3.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpF()}}
A.aJf.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.btf.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bq7()}}
A.b34.prototype={
B(d){var w,v=this,u=null,t=v.c,s=D.ay9.h(0,t)
$.c9Q=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aF(u,u,u,u,E.qn,u,u,u,new A.clZ(d),u,u,u,u,u,u),C.D(C.d(t,u,1,B.Z,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,B.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
B.d.v(t,v.w)
t.push(C.aF(u,u,u,u,C.V(B.Xq,s,u,u,u,22),u,u,u,new A.cm_(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.C(D.bj8,C.B(t,B.m,u,B.e,B.j,0,u,u),u),C.D(v.f,1)],w)
t=v.r
if(t!=null)w.push(C.p(u,t,B.h,u,u,new C.o(D.TE,u,new C.c1(new C.ax(B.c.j(0.08),1,B.r,-1),B.W,B.W,B.W),u,u,u,B.n),u,u,u,u,B.Dw,u,u,1/0))
return C.cf(u,B.bV,C.br(!0,C.u(w,B.m,u,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),u,!1,!1,u,u)}}
A.dx.prototype={
B(d){var w,v,u,t=this,s=null,r=C.m(999),q=t.d,p=q?t.r.j(0.22):B.c.j(0.06),o=q?t.r:B.c.j(0.12)
o=C.H(o,B.r,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)B.d.v(v,C.a([C.V(u,q?t.r:B.aQ,s,s,s,16),B.eA],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?B.c:B.aj,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.C(D.ac0,C.aJ(s,C.dg(s,C.B(v,B.m,s,B.e,B.R,0,s,s),s,s,B.b9,new C.o(p,s,o,r,s,s,B.n),B.eE,s,s,s,B.h1,s,s,s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.clV(t),s,s,s,s,s,s,!1,B.ae),s)}}
A.eE.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a3(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,B.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,B.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.D(C.cg(C.B(this.c,B.m,w,B.e,B.j,0,w,w),B.q,w,B.z,w,w,w,w,B.aY),1))
return new C.C(B.cH,C.B(v,B.m,w,B.e,B.j,0,w,w),w)}}
A.asP.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,B.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.aso(d).czE(q,B.bG,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.D(C.a7J(C.m8(s,s,s,u,v,t.e,B.k.D(w,v,u)),q),1)
u=t.x
return new C.a3(s,34,C.B(C.a([new C.a3(78,s,r,s),q,new C.a3(38,s,C.d(u==null?B.k.ab(w,1):u,s,s,s,s,s,s,Ab.Qz,B.dK,s,s),s)],x.p),B.m,s,B.e,B.j,0,s,s),s)}}
A.fe.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.C(D.ac0,C.aD(!1,B.X,!0,C.m(12),C.aH(!1,C.m(12),!0,new C.C(A8.acf,C.B(C.a([C.V(w.c,u,v,v,v,17),B.eA,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.R,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new A.clU(w),v,v,v,v,v,v,v),B.h,t,0,v,v,v,v,v,B.ac),v)}}
A.DR.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.etR:u
w=t?B.c:B.be
w=C.H(w,B.r,t?2.5:1)
return C.aJ(u,C.dg(u,u,u,u,B.b9,new C.o(p,u,w,u,t?C.a([new C.aa(0,B.G,v.c.j(0.6),B.J,10)],x.V):u,q,B.a5),B.hG,u,r,D.ac2,u,u,u,s),B.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.cm0(v),u,u,u,u,u,u,!1,B.ae)}}
A.m9.prototype={
a2z(d,e){var w=C.da()
w.sew(C.cV(C.dB(0,0,0,d,0,0),new A.clW(this,w,e)))
this.fc$.push(w.b7())},
kH(){var w=this,v=w.qQ(new A.clY(w))
v.kj(0)
w.fb$!==$&&C.aO()
w.fb$=v}}
A.a8H.prototype={
bs9(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,C.K)(w),++q)for(p=B.d.gag(w[q]);p.C();){o=p.gT(0)
n=J.a6(o)
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
for(m=0,q=0;q<w.length;w.length===p||(0,C.K)(w),++q){for(v=B.d.gag(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gT(0)
n=J.a6(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&C.aO()
g.ax=m
w=g.bvg()
g.ay!==$&&C.aO()
g.ay=w},
bvg(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
Eh(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
A.a8I.prototype={
cvK(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(r.Eh(0,w,e)){if(t!=null){q=r.ax
q===$&&C.c()
p=t.ax
p===$&&C.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
A.uk.prototype={}
A.Ni.prototype={}
A.x6.prototype={}
A.Nh.prototype={
f9(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.ajE[w.aA(7)]
w=w.he()?0:12
u=B.o.J(t.c++,3)===0?"flute":"bell"
A.l_(u,v+w-12,2200,0.1)}}
A.Tb.prototype={
S(){var w=$.at()
return new A.aAl(new C.cn(null,x.A),new C.ao(B.aq,w),new A.Nh(B.cA),D.cOJ,B.as,D.a_f,$,B.bu,0,C.a([],x.X),null,null)}}
A.aAl.prototype={
Z(){var w,v=this
v.a0()
v.kH()
v.a.toString
w=$.fU1
if(w==null)w=$.fU1=A.cov()
w.bw(new A.dNR(v),x.P)},
p(){var w=this.e
w.R$=$.at()
w.O$=0
this.bph()},
cjX(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.x)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n)q.push(new A.dNj(p[n]).$0())
w.push(q)}this.w=w},
gU4(){var w=this.fy
return w.A(0,B.as)?100:Math.min(w.a,w.b)*0.43},
aq1(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=B.k.D(f,1,16)
w.Q=w.as=0},
atO(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.aq1(d.x,d.w,105/Math.max(w,3))
C.eG()
A.l_("bell",(B.d.cP(D.ZR,d.c)+1)*3+12,900,0.45)
A.e1(300,"",280,1.4,0.15,"tri")},
l_(d){var w,v,u,t,s,r,q,p=this
p.f.f9(0,d,p.db)
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
c0E(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,B.as))return null
w=n.fy
v=n.gU4()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gU4()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(B.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cvK((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c0D(d){var w=this,v=w.r
if(v==null||B.a.i(d).length===0){w.n(new A.dNh(w))
return}w.n(new A.dNi(w,v,B.a.i(d).toLowerCase()))},
bHD(){var w=null,v=this.c
v.toString
C.ce(w,w,!0,w,new A.dNf(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aF(n,n,n,n,D.btw,n,n,n,o.gbHC(),n,n,n,n,"Earth facts",n),C.aF(n,n,n,n,D.m1,n,n,n,new A.dNC(o,d),n,n,n,n,"Share",n)],l),j=C.cj(new A.dND(o,m)),i=B.c.j(0.06)
i=C.a([C.aK(n,B.U,!1,n,!0,B.q,n,C.aL(),o.e,n,n,n,n,n,2,C.bl(n,new C.b1(4,C.m(14),B.W),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,H.BM,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bBq,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.af,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc0C(),n,n,n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,B.it,!0,B.a6,n,B.am,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
w.push(new A.dx(s.a,!1,new A.dNE(o,s),B.mD,B.b4,n))}i.push(new C.C(B.iX,new C.a3(n,38,C.cK(w,n,n,n,n,B.aY,!1),n),n))}i.push(B.ar)
w=C.a([new A.dx("Whole Earth",!1,new A.dNI(o),B.h3,B.b4,n)],l)
for(v=D.ay_.gdH(D.ay_),v=v.gag(v);v.C();){u=v.gT(v)
w.push(new A.dx(u.a,!1,new A.dNJ(o,u),n,B.b4,n))}w.push(new A.dx("Random",!1,new A.dNK(o),B.lW,B.b4,n))
i.push(new A.eE(w,"GO TO",n))
w=o.z
i.push(A.ho(B.b4,B.k.ab(w,1)+"x","Zoom",16,0.8,new A.dNL(o),w))
w=o.dy
i.push(A.ho(B.cV,B.a.aT(B.o.u(B.k.bK(w)),2,"0")+":00","Time",24,0,new A.dNM(o),w))
w=o.fr
i.push(A.ho(B.bt,o.ciK(),"Season",365,0,new A.dNN(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?B.lq:D.Ep
i.push(new A.eE(C.a([new A.dx("Spin",w,new A.dNO(o),D.boK,B.b4,n),new A.dx("Night",v,new A.dNP(o),B.uk,B.b4,n),new A.dx("Borders",u,new A.dNF(o),D.boO,B.b4,n),new A.dx("Names",r,new A.dNG(o),Q.agn,B.b4,n),new A.dx("Music",q,new A.dNH(o),p,B.b4,n)],l),n,n))
return A.je(B.b4,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.u(i,B.m,n,B.e,B.R,0,B.p))},
ciK(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.ar4[u])v=u
return B.hV[v]+" "+(B.k.bK(w-D.ar4[v])+1)},
c0B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new G.mO(1,B.o.J((B.d.cP(D.ZR,t)+1)*47,360),0.55,1).iE()
r=new A.dNd()
q=C.m(20)
p=C.H(s.j(0.6),B.r,1)
o=x.p
n=C.B(C.a([C.p(j,j,B.h,j,j,new C.o(s,j,j,j,j,j,B.a5),j,10,j,j,j,j,j,10),B.aa,C.D(C.d(d.a,j,1,B.Z,j,j,j,B.dP,j,j,j),1),C.aF(j,j,j,j,B.Lq,j,j,j,new A.dNc(this),j,j,j,j,j,B.c6)],o),B.m,j,B.e,B.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,B.i0,j,j,j)
m=D.d1d.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.B(C.a([m,B.aa,r.$2("PEOPLE",l?A.faT(v):"\u2014")],o),B.m,j,B.e,B.j,0,j,j)
i=r.$2("SIZE",A.Fe(i)+" km\xb2")
if(l)m=(w<10?B.k.ab(w,1):A.Fe(w))+" per km\xb2"
else m="\u2014"
m=C.B(C.a([i,B.aa,r.$2("CROWDING",m)],o),B.m,j,B.e,B.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?B.k.ab(u,3):B.k.ab(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.u(C.a([n,t,B.P,v,B.P,m,B.P,C.B(C.a([i,B.aa,r.$2("ECONOMY",l>0?"$"+A.faT(l*1e6)+" \xb7 "+k:k)],o),B.m,j,B.e,B.j,0,j,j)],o),B.F,j,B.e,B.R,0,B.p),B.h,j,j,new C.o(D.T1,j,p,q,j,j,B.n),j,j,j,j,D.acz,j,j,j)}}
A.bbC.prototype={
a6(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.a1(),d7=C.U()
d7.r=D.z3.gt(0)
d8.bp(new C.af(0,0,0+d4,0+d5),d7)
w=new C.f5()
w.dZ(4)
for(d7=d8.a,v=0;v<90;++v){u=w.af()
t=w.af()
s=w.af()
r=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
r.r=B.c.j(0.25+w.af()*0.5).gt(0)
q=r.M()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new C.v(d4,d5)
o=d2.f
u=C.U()
t=x.O
u.sav(new C.bS(B.B,0.5,B.x,d3,0,C.a([B.K,B.b4.j(0.35),B.K],t),D.cAO,d3).aC(0,C.c2(p,o*1.1)))
d8.aw(p,o*1.05,u)
n=C.c2(p,o)
u=C.U()
u.sav(D.dRk.aC(0,n))
d8.aw(p,o,u)
J.bP(d7.save())
u=x.v
d6=new C.b0(d6.r,B.aw,d3,d3,C.a([],u))
d6.N(new C.kw(n))
d8.tj(0,d6)
m=d2.d*3.141592653589793/180
l=d2.e*3.141592653589793/180
k=Math.sin(m)
j=Math.cos(m)
i=Math.sin(l)
h=Math.cos(l)
g=C.U()
g.b=B.ak
m=g.c=0.7
g.r=B.c.j(0.1).gt(0)
f=new A.d5g(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.M()
s=d.e
d7.drawPath((s==null?d.e=new C.cG(d.gbM().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.a1()
a3=C.a([],u)
d=new C.b0(a2.r,B.aw,d3,d3,a3)
a3.push(new C.bj(s,r))}else{s=new C.av(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bH(r)
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
d=new C.b0(a2.r,B.aw,d3,d3,a3)
a3.push(new C.bj(s,r))}else{s=new C.av(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bH(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.M()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cG(d.gbM().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=B.o.J((B.d.cP(D.ZR,a7.c)+1)*47,360)
$.a1()
b0=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a3=a8?0.35:0.5
b0.r=new G.mO(1,a9,a3,a8?1:0.62).iE().gt(0)
b1=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
b1.b=B.ak
b1.c=a8?2.2:m
b1.e=B.fl
b1.r=(a8?B.c:B.w.j(0.55)).gt(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,C.K)(a3),++b3){b4=a3[b3]
b5=b4.length/4|0
b6=$.a1()
b7=C.a([],u)
b8=new C.b0(b6.r,B.aw,d3,d3,b7)
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
if(c8!=null)b6.bH(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new C.av(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bH(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}}if(!b9)continue
b6=new C.bX()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bH(b7)
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
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.K)(a5),++b3){d=a5[b3]
$.a1()
s=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
s.b=B.ak
s.c=5
s.r=B.c.j(0.25).gt(0)
s.z=B.qw
q=s.M()
s=d.e
d7.drawPath((s==null?d.e=new C.cG(d.gbM().a.snapshot()):s).a,q)
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
b2=a8?B.c:B.c.j(0.9)
c9=A.hro(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbe(b2)
c9.a6(d8,new C.v(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=B.k.D(k*c0+j*c1*c4,-1,1)
$.a1()
u=C.U()
u.sav(new C.bS(B.B,0.5,B.x,d3,0,C.a([B.K,B.K,D.aZm.j(0.78)],t),D.cP3,d3).aC(0,C.c2(new C.v(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.aw(p,o,u)}$.a1()
d4=C.U()
d4.sav(new C.bS(B.B,0.5,B.x,d3,0,C.a([B.K,B.w.j(0.4)],t),D.cZO,d3).aC(0,n))
d8.aw(p,o,d4)
d7.restore()
d7=C.U()
d7.b=B.ak
d7.c=1.4
d7.r=B.j8.j(0.5).gt(0)
d8.aw(p,o,d7)},
ao(d){return!0}}
A.aIo.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.aIp.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpg()}}
A.bpL.prototype={}
A.Uf.prototype={
S(){return new A.bgR()}}
A.bgR.prototype={
gaO_(){var w=this.d
if(w===$)w=this.d=B.cA.aA(16)
return w},
B(d){var w=null,v=C.eA(w,w,w,!0,!0,D.z3,w,1,!0,w,0,!1,w,!1,w,w,C.aF(w,w,w,w,D.aib,w,w,w,new A.epS(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.f_d,w,w,w,1,w,!0),u=C.m(18),t=B.b4.j(0.1),s=C.H(B.b4.j(0.35),B.r,1),r=x.p
return C.cf(v,D.z3,C.cK(C.a([C.p(w,C.B(C.a([D.bse,B.av,C.D(C.d(D.cEh[this.gaO_()],w,w,w,w,w,w,D.a4q,w,w,w),1),C.aF(w,w,w,w,D.bCm,w,w,w,new A.epT(this),w,w,w,w,"Another fact",w)],r),B.m,w,B.e,B.j,0,w,w),B.h,w,w,new C.o(t,w,s,u,w,w,B.n),w,w,w,w,B.bA,w,w,w),B.ay,C.cj(new A.epU())],r),w,B.V5,w,w,B.ah,!1),w,!1,!1,w,w)}}
A.U1.prototype={
S(){return A.hrQ()}}
A.bgE.prototype={
caT(d){var w=d.c,v=A.hrS(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.v(Math.cos(t)*v,Math.sin(t)*v)},
Z(){this.a0()
this.kH()},
l_(d){var w,v,u,t=this
t.e.f9(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.caT(w)
u=new C.v(-v.a,-v.b).aM(0,t.w)
v=C.l0(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc0F(){var w=this.ch
return new C.v(w.a/2,w.b/2).ap(0,this.x)},
c0J(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.AH[s]
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
aUX(d){this.n(new A.eih(this,d))
C.eG()
A.l_("bell",D.cZY[B.o.J(B.d.cP(D.AH,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aF(m,m,m,m,D.m1,m,m,m,new A.eis(n,d),m,m,m,m,"Share",m)],k),i=C.cj(new A.eit(n,l)),h=C.a([new A.dx("All",!1,new A.eiu(n),B.Y_,B.aM,m)],k)
for(w=0;w<10;++w){v=D.AH[w]
h.push(new A.dx(v.a,n.z===v,new A.eiv(n,v),m,C.aX(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?B.k.ab(s,0)+" d/s":""+B.k.U(s)+" d/s"
t=A.ho(B.aM,s,"Time",1,0,new A.eiw(n),u/t)
u=n.w
u=A.ho(B.aM,B.k.ab(u,1)+"x","Zoom",9,0.5,new A.eix(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?B.lq:D.Ep
return A.je(B.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.u(C.a([new A.eE(h,"GO TO",m),t,u,new A.eE(C.a([new A.dx("Orbits",s,new A.eiy(n),m,B.aM,m),new A.dx("Names",r,new A.eiz(n),m,B.aM,m),new A.dx("Asteroids",q,new A.eiA(n),m,B.aM,m),new A.dx("Music",p,new A.eiB(n),o,B.aM,m)],k),m,m)],k),B.m,m,B.e,B.R,0,B.p))},
c0G(d){var w,v,u,t,s,r=null,q=C.aX(d.z),p=d.c,o=p*8.317,n=new A.eif(),m=C.m(20),l=C.H(q.j(0.6),B.r,1),k=C.p(r,r,B.h,r,r,new C.o(q,r,r,r,r,r,B.a5),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.B(C.a([k,B.aa,C.D(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,B.l6,r,r,r),1),C.aF(r,r,r,r,B.Lq,r,r,r,new A.eie(this),r,r,r,r,r,B.c6)],w),B.m,r,B.e,B.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,D.QX,r,r,r)
v=n.$2("WIDTH",A.Fe(d.d*2)+" km")
u=p===0
p=C.B(C.a([v,B.aa,n.$2("FROM THE SUN",u?"\u2014":C.t(p)+" AU ("+A.Fe(p*149.6)+" million km)")],w),B.m,r,B.e,B.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new A.eig().$1(v))
t=d.f
v=C.B(C.a([v,B.aa,n.$2("ONE DAY",t>=48?B.k.ab(t/24,0)+" Earth days":B.k.ab(t,1)+" hours")],w),B.m,r,B.e,B.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.B(C.a([n.$2("GRAVITY",C.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+B.k.ab(50*t/9.81,s)+" kg"),B.aa,n.$2("TEMPERATURE",""+B.o.U(d.x)+"\xb0C")],w),B.m,r,B.e,B.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?B.k.ab(o,1)+" minutes":B.k.ab(o/60,1)+" hours"
return C.p(r,C.u(C.a([j,B.au,k,B.P,p,B.P,v,B.P,s,B.P,C.B(C.a([t,B.aa,n.$2("SUNLIGHT TAKES",i)],w),B.m,r,B.e,B.j,0,r,r)],w),B.F,r,B.e,B.R,0,B.p),B.h,r,r,new C.o(D.T1,r,l,m,r,r,B.n),r,r,r,r,D.acz,r,r,r)}}
A.bnQ.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.a1()
w=C.U()
w.r=D.z3.gt(0)
a7.bp(new C.af(0,0,0+a5,0+a6),w)
v=new C.f5()
v.dZ(8)
for(w=a7.a,u=0;u<110;++u){t=v.af()
s=v.af()
r=v.af()
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=B.c.j(0.2+v.af()*0.5).gt(0)
p=q.M()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc0F()
n=a5.w
if(a5.as)for(a6=B.d.gag(D.AH),t=new C.hX(a6,new A.eJH()),s=o.a,r=o.b;t.C();){q=a6.gT(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
m.b=B.ak
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
l=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
l.r=B.c.j(0.5).gt(0)
p=l.M()
w.drawCircle(t+q*j,s+m*j,0.9,p)
p.delete()}i=A.hrR(B.d.gI(D.AH))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.U()
s=x.O
t.sav(new C.bS(B.B,0.5,B.x,a4,0,C.a([B.aM.j(0.5),B.K],s),a4,a4).aC(0,C.c2(o,a6)))
a7.aw(o,a6,t)
t=C.U()
t.sav(D.dRe.aC(0,C.c2(o,i)))
a7.aw(o,i,t)
if(a5.at){h=A.fVD("Sun",10.5,B.aj)
h.a6(a7,o.ap(0,new C.v(-h.b.c/2,i+4)))}for(a6=B.d.gag(D.AH),t=new C.hX(a6,new A.eJI()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gT(0)
g=l.c
j=g===0?0:30+150*Math.sqrt(g/30.1)
f=l.e
k=f<=0?0:6.283185307179586*(a5.f/f)+g*1.7
g=q+Math.cos(k)*j*n
f=m+Math.sin(k)*j*n
j=(1.5+1.6*Math.log(l.d/1000+1))*Math.sqrt(n)
e=C.aX(l.z)
d=l.a
if(d==="Saturn"){J.bP(w.save())
w.translate(g,f)
w.rotate(-22.91831180523293,0,0)
a0=C.dy(B.J,j*1.3,j*4.2)
a1=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a1.b=B.ak
a1.c=j*0.45
a1.r=B.bK.j(0.55).gt(0)
p=a1.M()
w.drawOval(C.cz(a0),p)
p.delete()
w.restore()}a0=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a0.r=e.j(0.3).gt(0)
a0.z=B.qw
p=a0.M()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a1=C.aq(e,B.w,0.55)
a1.toString
a0.sav(new C.bS(N.qY,0.5,B.x,a4,0,C.a([B.c,e,a1],s),F.Zv,a4).aC(0,C.c2(new C.v(g,f),j)))
p=a0.M()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
l.b=B.ak
l.c=2
l.r=B.c.gt(0)
p=l.M()
w.drawCircle(g,f,j+7,p)
p.delete()}if(r&&d==="Earth"){k=a5.f/27.3*2*3.141592653589793
a2=j+11*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a3.r=B.c.gt(0)
p=a3.M()
w.drawCircle(g+l*a2,f+a0*a2,1.8*a1,p)
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.cJ_[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a3.r=B.aj.gt(0)
p=a3.M()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=A.fVD(d,10.5,B.aj)
h.a6(a7,new C.v(g+-h.b.c/2,f+(j+4)))}}},
ao(d){return!0}}
A.Tc.prototype={
S(){var w=x.i
return new A.aAm(new A.Nh(B.cA),C.bU(5,0,!1,w),C.bU(5,0,!1,w),C.bU(5,null,!1,x.cD),B.J,B.J,C.a([],x.g),$,B.bu,0,C.a([],x.X),null,null)}}
A.aAm.prototype={
cn4(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c0I(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.dIy
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
s.n(new A.dNV())},
Z(){this.a0()
this.kH()},
l_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.f9(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.xv[r]
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
break}}}if(B.d.e8(s,new A.dOn()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
if(v.length===0||B.d.gai(v).aD(0,i.cx).gcj()>120)v.push(i.cx)
if(v.length>700)B.d.cu(v,0)
if(i.cx.gcj()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bFX()
else n=n==="weight"?p.cu5():p.byl()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.cXs[u]
v.push(new A.dx(t.b,p.d===t.a,new A.dO9(p,t),t.c,B.dh,o))}v=C.a([new A.eE(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new A.dx("Hammer",!s,new A.dOa(p),A6.Xp,B.dh,o),new A.dx("Feather",s,new A.dOb(p),Q.X_,B.dh,o),new A.dx(q,r,new A.dOf(p),B.Eb,B.b4,o)],w)
q=p.w
B.d.v(v,C.a([new A.eE(r,o,o),A.ho(B.dh,""+B.k.U(q*100)+"%","Slow motion",1,0.05,new A.dOg(p),q),new A.eE(C.a([new A.fe(B.un,"Drop!",new A.dOh(p),B.bt,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=A.ho(B.dh,""+B.k.U(s)+" kg","Your weight",120,20,new A.dOi(p),s)
r=p.ax
B.d.v(v,C.a([s,A.ho(B.dh,""+B.k.U(r*100)+" cm","Your jump",1.2,0.1,new A.dOj(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=A.ho(B.dh,B.k.ab(s,1)+" km/s","Speed",13,0,new A.dOk(p),s)
r=p.ch
B.d.v(v,C.a([s,A.ho(B.dh,B.k.ab(r,1)+"x out","View",8,0.5,new A.dOl(p),r),new A.eE(C.a([new A.fe(B.mG,"Fire!",p.gc0H(),B.bt,o),new A.fe(B.un,"Falls",new A.dOm(p),B.c,o),new A.fe(B.rL,"Orbit 7.7",new A.dOc(p),B.c,o),new A.fe(D.brG,"Oval 9",new A.dOd(p),B.c,o),new A.fe(B.Eq,"Escape",new A.dOe(p),B.c,o)],w),o,o)],w))}return A.je(B.dh,B.fT,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.u(v,B.m,o,B.e,B.R,0,B.p))},
bFX(){return new C.C(D.bea,C.cj(new A.dNU(this)),null)},
cu5(){var w,v,u,t=null,s=[D.ecI,D.ee_,D.ee7,D.eeq,D.ee5,D.eeu,D.edd,D.eeN,D.edM],r=x.p,q=C.a([D.eP7,B.T],r)
for(w=0;w<9;++w){v=s[w]
u=C.aX(v.c)
q.push(new C.C(B.cH,new C.cC(B.aY,B.e,B.j,B.m,t,B.p,t,0,C.a([new C.a3(62,t,new C.w(v.a,t,new C.F(!0,u,t,t,t,t,12.5,B.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bE(1,B.bn,new C.Aa(new A.dNW(this,v),t),t)],r),t),t))}q.push(B.au)
q.push(D.eRf)
return C.cK(q,t,B.iE,t,t,B.ah,!1)},
byl(){return C.cj(new A.dNS(this))}}
A.b6S.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.a1(),e=C.U()
e.r=D.z3.gt(0)
d.bp(new C.af(0,0,0+h,0+g),e)
w=new C.f5()
w.dZ(2)
for(e=d.a,v=0;v<80;++v){u=w.af()
t=w.af()
s=w.af()
r=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
r.r=B.c.j(0.2+w.af()*0.5).gt(0)
q=r.M()
e.drawCircle(u*h,t*g,s*1.1+0.3,q)
q.delete()}h=j.c
p=6371*h
g=j.b
e=C.U()
e.sav(new C.bS(B.B,0.5,B.x,i,0,C.a([B.K,B.b4.j(0.35),B.K],x.O),D.cPR,i).aC(0,C.c2(g,p*1.1)))
d.aw(g,p*1.06,e)
e=C.U()
e.sav(D.dRb.aC(0,C.c2(g,p)))
d.aw(g,p,e)
o=g.ap(0,new C.v(0,-p))
f=f.r
e=x.v
n=new C.b0(f,B.aw,i,i,C.a([],e))
u=o.a
t=o.b
s=t+3
n.N(new C.bj(u-16,s))
n.N(new C.av(u,t-400*h-4))
n.N(new C.av(u+16,s))
n.N(new C.bX())
s=C.U()
s.r=B.al.gt(0)
d.b4(n,s)
s=o.ap(0,new C.v(0,-400*h-6))
u=C.U()
u.r=B.c.gt(0)
d.aw(s,4,u)
u=j.e
if(u.length>1){e=C.a([],e)
m=new C.b0(f,B.aw,i,i,e)
f=g.a
t=g.b
m.N(new C.bj(f+B.d.gI(u).a*h,t+B.d.gI(u).b*h))
for(u=C.dc(u,1,i,C.T(u).c),s=u.$ti,u=new C.bR(u,u.gH(0),s.k("bR<ai.E>")),s=s.k("ai.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new C.av(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bH(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.a1()
f=C.U()
f.b=B.ak
f.c=2.4
f.d=B.bZ
f.r=B.dh.j(0.9).gt(0)
d.b4(m,f)}if(j.f){f=j.d
k=g.ap(0,new C.v(f.a*h,f.b*h))
h=C.U()
h.r=B.dh.j(0.4).gt(0)
h.z=H.ph
d.aw(k,7,h)
h=C.U()
h.r=B.c.gt(0)
d.aw(k,4,h)}},
ao(d){return!0}}
A.TU.prototype={
S(){return new A.bgB(new C.cn(null,x.A),$,B.bu,0,C.a([],x.X),null,null)}}
A.bgB.prototype={
Z(){this.a0()
this.kH()},
l_(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.Nl[l.e],i=D.Nl[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aF(k,k,k,k,D.m1,k,k,k,new A.ebb(l,d),k,k,k,k,"Share",k)],u)
s=C.D(C.b2(k,k,k,new A.bno(f,g,v,k),B.fk),1)
r=g.a
q=v<10?B.k.ab(v,1):A.Fe(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,B.jo,B.L,k,k)
o=A.Fe(v*v*v)
n=B.a.c7(p,"s")?"":"s"
h=C.u(C.a([s,C.p(k,C.u(C.a([q,B.au,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,V.a3R,B.L,k,k),B.by,C.d(p+": "+A.Fe(w*2)+" km wide. "+r+": "+A.Fe(h*2)+" km wide.",k,k,k,k,k,k,V.a43,B.L,k,k)],u),B.m,k,B.e,B.j,0,B.p),B.h,k,k,k,k,k,k,k,D.bgi,k,k,1/0)],u),B.m,k,B.e,B.j,0,B.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.Nl[m]
r.push(new A.dx(w.a,l.e===m,new A.ebc(l,m),k,C.aX(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.Nl[m]
w.push(new A.dx(s.a,l.f===m,new A.ebd(l,m),k,C.aX(s.c),k))}return A.je(B.cd,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.en(h,l.d),"SIZE COMPARE",C.u(C.a([new A.eE(r,"FIRST",k),new A.eE(w,"SECOND",k)],u),B.m,k,B.e,B.R,0,B.p))}}
A.bno.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.a1()
w=C.U()
w.r=D.Tx.gt(0)
d.bp(new C.af(0,0,0+h,0+g),w)
v=new C.f5()
v.dZ(6)
for(w=d.a,u=0;u<70;++u){t=v.af()
s=v.af()
r=v.af()
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=B.c.j(0.2+v.af()*0.4).gt(0)
p=q.M()
w.drawCircle(t*h,s*g,r+0.3,p)
p.delete()}o=Math.min(h/2-16,g/2-10)*0.98
n=Math.max(o/this.d,0.8)
h*=0.5
g*=0.5
m=new C.v(h,g)
w=new A.eHQ(d)
t=this.c
w.$3(m,o,C.aX(t.c))
s=o-n
l=new C.v(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,C.aX(s.c))
w=C.U()
w.b=B.ak
w.c=1.4
w.r=B.aj.gt(0)
d.aw(l,n+3,w)
k=C.j1(i,i,i,i,C.dr(i,i,i,i,i,i,i,i,i,D.eBv,s.a),B.a6,B.cn,i,B.eM,B.cm)
k.fE()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbe(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbe(g)-6
h=g}k.a6(d,l.ap(0,new C.v(-w/2,h)))
j=C.j1(i,i,i,i,C.dr(i,i,i,i,i,i,i,i,i,D.eED,t.a),B.a6,B.cn,i,B.eM,B.cm)
j.fE()
t=j.b
h=t.c
t=t.a.c
j.a6(d,m.ap(0,new C.v(-h/2,-t.gbe(t)/2)))},
ao(d){return!0}}
A.aIq.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.bsW.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpi()}}
A.aIZ.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.bt9.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpR()}}
A.aJ1.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.btb.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpU()}}
A.NK.prototype={}
A.Sg.prototype={
S(){return A.hrO()}}
A.bfk.prototype={
Z(){this.a0()
this.kH()},
l_(d){var w,v,u,t,s,r=this
r.f+=d
r.e.f9(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
A.e1(70,"",500,0.3,0.5,"sine")}}B.d.bm(w,new A.dwy())},
aUY(d){var w,v,u,t=this.Q
if(t.A(0,B.as))return
w=this.gb2y()
v=d.aD(0,new C.v(t.a/2,t.b*0.42))
u=B.k.D(v.gcj()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new A.NK(t,u,1.2,new C.wj(1,30+B.cA.af()*40,0.9,0.7).iE()))
A.l_("bell",60+B.k.U(12-u)*2,400,0.35)},
gb2y(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/B.k.D(m.length===0?3:new C.J(m,new A.dwm(),C.T(m).k("J<1,Q>")).fs(0,B.vH),1.0001,99))
m=x.p
w=C.a([C.aF(n,n,n,n,D.m1,n,n,n,new A.dwn(o,d),n,n,n,n,"Share",n)],m)
v=C.cj(new A.dwo(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?B.k.ab(s,0)+" Suns":A.faT(s)+" Suns"
t=A.ho(B.bE,s,"Mass",1,0,new A.dwq(o),u/t)
u=C.a([new A.dx("Star (10)",!1,new A.dwr(o),n,B.bE,n),new A.dx("Cygnus X-1 (21)",!1,new A.dws(o),n,B.bE,n),new A.dx("Milky Way core (4 million)",!1,new A.dwt(o),n,B.bE,n),new A.dx("M87 (6.5 billion)",!1,new A.dwu(o),n,B.bE,n)],m)
s=o.w
r=o.x
q=o.y
p=q?B.lq:D.Ep
return A.je(B.bE,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.u(C.a([t,new A.eE(u,"LIKE",n),new A.eE(C.a([new A.dx("Glowing ring",s,new A.dwv(o),n,B.bE,n),new A.dx("Bent light",r,new A.dww(o),n,B.bE,n),new A.dx("Music",q,new A.dwx(o),p,B.bE,n),new A.fe(B.jF,"Clear",new A.dwp(o),B.c,n)],m),n,n)],m),B.m,n,B.e,B.R,0,B.p))},
abN(d,e){var w=null
return C.D(C.u(C.a([C.d(d,w,w,w,w,w,w,D.exC,w,w,w),B.by,C.d(e,w,2,w,w,w,w,M.aJ0,B.L,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),1)}}
A.b6f.prototype={
a6(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.a1()
w=C.U()
w.r=D.b5k.gt(0)
b2.bp(new C.af(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.v(w,v)
t=this.b
s=t.gb2y()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,C.K)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new C.v(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+B.k.D(o/h,0,n)
i=new C.v(w+k/h*g,v+j/h*g)}}k=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
k.r=B.c.j(0.6).gt(0)
f=k.M()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=C.U()
b0.b=B.ak
b0.c=2
b0.r=B.c.j(0.25).gt(0)
b0.z=E.a0f
b2.aw(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.aq(B.vX,B.fZ,d)
n.toString
k=Math.cos(a4)
$.a1()
j=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
g=a5?1:0.85
j.r=n.j(r*(0.4+(0.5+0.5*k)*0.6)*g).gt(0)
f=j.M()
p.drawCircle(w+a6,v+o*a0*0.28,1.3,f)
f.delete()
if(!a5&&t.x){o=Math.sin(-a4)
k=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
k.r=n.j(b1).gt(0)
f=k.M()
p.drawCircle(w+a6*0.5,v+(q*Math.abs(o)*0.6-b0),1,f)
f.delete()}}}b0=s*1.25
$.a1()
b1=C.U()
b1.sav(new C.bS(B.B,0.5,B.x,null,0,C.a([B.w,B.w.j(0)],x.O),D.cwi,null).aC(0,C.c2(u,b0)))
b2.aw(u,b0,b1)
b1=C.U()
b1.r=B.w.gt(0)
b2.aw(u,s,b1)
b1=C.U()
b1.b=B.ak
b1.c=1
b1.r=B.bE.j(0.55).gt(0)
b2.aw(u,s,b1)
for(b0=t.z,b1=b0.length,m=0;m<b0.length;b0.length===b1||(0,C.K)(b0),++m){a7=b0[m]
a0=s*a7.b
t=w+Math.cos(a7.a)*a0
r=v+Math.sin(a7.a)*a0*0.9
a8=1+B.k.D(3.5/a7.b,0,5)
a9=3*a8
q=-Math.sin(a7.a)*a9
o=Math.cos(a7.a)*a9
n=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
n.c=4.2/Math.sqrt(a8)
n.d=B.bZ
k=a7.d
n.r=k.j(B.k.D(a7.b/2,0.2,1)).gt(0)
f=n.M()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.r=k.j(0.2).gt(0)
o.z=H.ph
f=o.M()
p.drawCircle(t,r,6,f)
f.delete()}},
ao(d){return!0}}
A.acl.prototype={}
A.T8.prototype={
S(){var w=x.r,v=x.g
return new A.bfJ(new C.cn(null,x.A),new A.Nh(B.cA),C.a([],w),B.J,B.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),B.J,B.J,$,B.bu,0,C.a([],x.X),null,null)}}
A.bfJ.prototype={
Z(){this.a0()
this.XS()
this.kH()},
XS(){var w,v,u,t,s,r,q,p,o=this,n=new C.f5()
n.dZ(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.af(),1.6)
w.push(new A.acl(t,n.af()*3.141592653589793*2,(n.af()-0.5)*0.5*t,25+n.af()*20))}else{t=Math.pow(n.af(),0.8)
s=n.aA(o.f)
r=n.af()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.he()?0:3.141592653589793
q=r+(n.af()-0.5)*0.25}r=n.af()
p=t<0.25?35+n.af()*15:205+n.af()*50
w.push(new A.acl(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cmW(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.dJv
k.cx=D.dJy
w=new C.f5()
w.dZ(9)
v=k.cy
B.d.a8(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new A.acl(Math.pow(w.af(),0.8)*0.7,w.af()*3.141592653589793*2,0,320+w.af()*30))
B.d.v(v,u)
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
for(s=k.ay,r=x.S,s=C.dc(s,0,C.dJ(900,"count",r),C.T(s).c),o=s.$ti,s=new C.bR(s,s.gH(0),o.k("bR<ai.E>")),o=o.k("ai.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new C.v(l*n,Math.sin(m)*n))}k.db=v
v=C.a([],u)
for(u=k.ay,u=C.dc(u,0,C.dJ(900,"count",r),C.T(u).c),r=u.$ti,u=new C.bR(u,u.gH(0),r.k("bR<ai.E>")),r=r.k("ai.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new C.v(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=B.J
A.e1(110,"",900,0.5,0.45,"sine")},
l_(d){var w,v,u,t,s,r,q,p=this
p.e.f9(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aD(0,p.fx)
s=Math.max(0.25,t.gcj())
r=t.ey(0,s).aM(0,0.9/(s*s))
w=p.fy.ap(0,r.aM(0,u))
p.fy=w
v=p.cx.aD(0,r.aM(0,u))
p.cx=v
w=p.fx.ap(0,w.aM(0,u))
p.fx=w
v=p.CW.ap(0,v.aM(0,u))
p.CW=v
q=new A.dMs(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aF(r,r,r,r,D.m1,r,r,r,new A.dMi(s,d),r,r,r,r,"Share",r)],q),o=C.b2(r,r,r,new A.bbs(s,r),B.as),n=B.w.j(0.5),m=C.m(14),l=C.H(B.bG,B.r,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.an(8,C.p(r,C.d(w,r,r,r,r,r,r,A4.a3F,r,r,r),B.h,r,r,new C.o(n,r,l,m,r,r,B.n),r,r,r,r,B.bT,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.cLS[v]
o=s.Q===u.a&&!s.ch
l.push(new A.dx(u.b,o,new A.dMj(s,u),r,B.fY,r))}l.push(new A.dx("Collide",s.ch,new A.dMk(s),B.wN,B.cd,r))
o=C.a([new A.eE(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=A.ho(B.fY,""+n,"Arms",6,2,new A.dMl(s),n)
l=s.r
B.d.v(o,C.a([n,A.ho(B.fY,B.k.ab(l,1),"Winding",6,0.8,new A.dMm(s),l)],q))}n=s.as
o.push(A.ho(B.fY,""+B.k.U(n*90)+"\xb0","Tilt",1,0.15,new A.dMn(s),n))
n=s.ax
o.push(A.ho(B.fY,B.k.ab(n,1)+"x","Speed",4,0,new A.dMo(s),n))
n=s.x
l=s.z
w=s.y
t=w?B.lq:D.Ep
o.push(new A.eE(C.a([new A.dx("Dark matter",n,new A.dMp(s),r,B.bE,r),new A.dx("You are here",l,new A.dMq(s),r,B.aM,r),new A.dx("Music",w,new A.dMr(s),t,B.fY,r)],q),r,r))
return A.je(B.fY,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.en(new C.am(B.V,r,B.aX,B.q,m,r),s.d),"GALAXY",C.u(o,B.m,r,B.e,B.R,0,B.p))}}
A.bbs.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.a1()
w=C.U()
w.r=D.b71.gt(0)
a3.bp(new C.af(0,0,0+a1,0+a2),w)
v=new C.f5()
v.dZ(3)
for(w=a3.a,u=0;u<90;++u){t=v.af()
s=v.af()
r=v.af()
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=B.c.j(0.15+v.af()*0.4).gt(0)
p=q.M()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new C.v(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=C.U()
t.sav(new C.bS(B.B,0.5,B.x,a0,0,C.a([B.aB.j(0.32),B.aB.j(0.12),B.K],x.O),D.bVt,a0).aC(0,C.c2(o,a2)))
a3.aw(o,a2,t)}m=new A.d2o(a1.as)
a2=n*0.3
t=C.U()
t.sav(new C.bS(B.B,0.5,B.x,a0,0,C.a([B.ho.j(0.85),B.aZ.j(0.3),B.K],x.O),a0,a0).aC(0,C.c2(o,a2)))
a3.aw(o,a2,t)
if(!a1.ch){l=C.U()
for(a2=a1.ay,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){j=a2[k]
s=j.a
i=a1.x?1/(0.25+s*0.9):1/Math.pow(s+0.18,1.5)*0.35
r=a1.at
q=Math.min(i,6)
h=j.b
g=m.$6(Math.cos(h)*s,Math.sin(h)*s,j.c,o,r*q*0.5,n)
q=j.d
r=B.k.J(q,360)
l.r=new G.mO(1,r,q>200?0.45:0.55,1).iE().j(0.35+(1-s)*0.5).gt(0)
s=s<0.3?1.3:1
p=l.M()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.a1()
a2=C.U()
a2.b=B.ak
a2.c=1.6
a2.r=B.aM.gt(0)
a3.aw(g,9,a2)
f=C.j1(a0,a0,a0,a0,D.euV,B.a6,B.cn,a0,B.eM,B.cm)
f.fE()
f.a6(a3,g.ap(0,new C.v(-f.b.c/2,12)))}}else{e=n*0.8
l=C.U()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.b81.j(0.6).gt(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.M()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.b3J.j(0.6).gt(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.M()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.a1()
w=C.U()
w.r=B.ho.gt(0)
a3.aw(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.U()
w.r=B.i6.gt(0)
a3.aw(a1,5,w)}},
ao(d){return!0}}
A.TQ.prototype={
S(){return new A.bgA(new C.cn(null,x.A),new A.Nh(B.cA),$,B.bu,0,C.a([],x.X),null,null)}}
A.bgA.prototype={
Z(){this.a0()
this.kH()},
l_(d){var w,v,u,t=this
t.e.f9(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=B.k.J(t.r+d*0.04*v,1)
else{w=B.k.J(t.w+d*0.05*v,1)
t.w=w
u=B.k.bK(w*4)
if(u!==B.k.bK(t.as))A.l_("bell",60+u*4,500,0.35)
t.as=u}},
gciJ(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gc9x(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aF(q,q,q,q,D.m1,q,q,q,new A.eaS(r,d),q,q,q,q,"Share",q)],p),n=C.D(new C.en(C.b2(q,q,q,new A.bmG(r,q),B.fk),r.d),1)
if(r.f==="seasons")w=r.gciJ()
else{w=r.gc9x()
v=B.k.ak(B.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.u(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,S.H7,B.L,q,q),B.h,q,q,q,q,q,q,q,E.acJ,q,q,1/0)],p),B.m,q,B.e,B.j,0,B.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?U.wZ:B.iG
t=r.Q
s=t?B.lq:D.Ep
s=C.a([new A.eE(C.a([new A.dx("Seasons",n==="seasons",new A.eaT(r),B.xc,B.bq,q),new A.dx("Moon phases",n==="moon",new A.eaU(r),B.uk,B.bq,q),new A.dx(u,!1,new A.eaV(r),v,B.bq,q),new A.dx("Music",t,new A.eaW(r),s,B.bq,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=A.ho(B.bq,D.cLe[B.o.J(B.k.bK(n*12),12)],"Month",1,0,new A.eaX(r),n)
v=r.z
B.d.v(s,C.a([n,A.ho(B.bq,B.k.ab(v,1)+"\xb0","Tilt",90,0,new A.eaY(r),v)],p))}else{p=r.w
s.push(A.ho(B.bq,""+(B.k.bK(p*29.5)+1),"Day of month",1,0,new A.eaZ(r),p))}p=r.y
s.push(A.ho(B.bq,B.k.ab(p,1)+"x","Speed",4,0.2,new A.eb_(r),p))
return A.je(B.bq,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.u(s,B.m,q,B.e,B.R,0,B.p))}}
A.bmG.prototype={
a6(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.a1(),b8=C.U()
b8.r=D.z3.gt(0)
b9.bp(new C.af(0,0,0+b5,0+b6),b8)
w=new C.f5()
w.dZ(4)
for(b8=b9.a,v=0;v<70;++v){u=w.af()
t=w.af()
s=w.af()
r=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
r.r=B.c.j(0.2+w.af()*0.4).gt(0)
q=r.M()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new C.v(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=C.dy(p,n*2,o*2)
t=C.U()
t.b=B.ak
t.c=1
t.r=B.be.gt(0)
b9.lf(u,t)
t=C.U()
t.sav(D.dRc.aC(0,C.c2(p,34)))
b9.aw(p,22,t)
m=s.r*2*3.141592653589793
l=p.ap(0,new C.v(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aD(0,l).ey(0,p.aD(0,l).gcj())
J.bP(b8.save())
b8.translate(l.a,l.b)
s=C.U()
s.r=D.b5g.gt(0)
b9.aw(B.J,k,s)
J.bP(b8.save())
b7=new C.b0(b7.r,B.aw,b4,b4,C.a([],x.v))
b7.N(new C.kw(C.c2(B.J,k)))
b9.tj(0,b7)
b7=i.aM(0,k).aM(0,0.35)
s=k*1.1
b6=C.U()
b6.sav(D.dRj.aC(0,C.c2(B.J,s)))
b9.aw(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.v(s,b6)
b7=new C.v(-s,-b6).aM(0,k).aM(0,1.7)
b5=h.aM(0,k).aM(0,1.7)
t=C.U()
t.c=2
t.r=B.cN.gt(0)
b9.bU(b7,b5,t)
t=h.aM(0,k).aM(0,1.7)
b5=C.U()
b5.r=B.cN.gt(0)
b9.aw(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.j1(b4,b4,b4,b4,C.dr(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aKn,b5),B.a6,B.cn,b4,B.eM,B.cm)
f.fE()
f.a6(b9,l.ap(0,new C.v(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.U()
r.b=B.ak
r.c=1
r.r=B.be.gt(0)
b9.aw(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a0.r=B.aM.j(0.6).gt(0)
a0.c=2
q=a0.M()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=C.U()
r.sav(new C.bS(new C.d3(-0.5,0),1.1,B.x,b4,0,C.a([D.b1t,D.aaP],x.O),D.cDk,b4).aC(0,C.c2(p,k)))
b9.aw(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ap(0,new C.v(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.U()
r.r=D.b_e.gt(0)
b9.aw(a1,a2,r)
J.bP(b8.save())
b7=b7.r
r=x.v
d=new C.b0(b7,B.aw,b4,b4,C.a([],r))
d.N(new C.kw(C.c2(a1,a2)))
b9.tj(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.U()
a3.r=B.cg.gt(0)
b9.bp(new C.af(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aD(0,p).ey(0,a1.aD(0,p).gcj())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=D.bVs[a5]
a7=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a7.r=B.b4.j(0.45).gt(0)
a7.z=B.jf
q=a7.M()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.v(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.U()
b6.r=D.b_a.gt(0)
b9.aw(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bP(b8.save())
b6=new C.b0(b7,B.aw,b4,b4,C.a([],r))
b6.N(new C.kw(C.c2(a8,a9)))
b9.tj(0,b6)
s=s.w
b1=new C.b0(b7,B.aw,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.N(new C.bj(u,b5))
b6=b2>0
b1.ayQ(new C.v(u,t+a9),b6,new C.b3(a9,a9))
if(b0<0.5)b6=b2<0
b1.ayQ(new C.v(u,b5),b6,new C.b3(a9*Math.abs(1-2*b0),a9))
b6=C.U()
b6.r=B.cg.gt(0)
b9.b4(b1,b6)
b8.restore()
b8=C.U()
b8.b=B.ak
b8.c=1
b8.r=B.be.gt(0)
b9.aw(a8,a9,b8)
b3=C.j1(b4,b4,b4,b4,D.euW,B.a6,B.cn,b4,B.eM,B.cm)
b3.fE()
b3.a6(b9,a8.ap(0,new C.v(-b3.b.c/2,a9+6)))}},
ao(d){return!0}}
A.aHY.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.bsP.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.boO()}}
A.aIl.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.bsV.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpc()}}
A.aIY.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
A.bt8.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpQ()}}
var z=a.updateTypes(["~()","R(ve)","R(a2c)","R(B7)","au<~>()","I(ve,I)","R(B3)","R(X6)","R(uk)","Q(Q,ve)","R(a0W)","R(mW)","R(YD)","R(a9O)","I(I)","R(a90)","Sk()","SH()","SX()","Sc()","Ta()","Tt()","Tv()","Sl()","TO()","U2()","TP()","TM()","U9()","R(q_)","Ue()","Sm()","TG()","TL()","acq(X,I)","abl(X,I)","~(a0<@,@>)","I(B3,B3)","n(mU)","R(acg)","R(Zk)","R(Bh)","R(a9v)","R(abp)","R(a9e)","I(I,qb)","I(I,B7)","n(qb)","~(qb,ak<n>,I)","qb?(B7)","R(qb)","r(n,Z7)","R(O0)","~(zl)","R(a9l)","Q(I?)","Uf()","Q(NK)","R(aaC)","Q(I)","SY()","~(b7)","R(a7X)","To()","Sh()","~(n,ve)","a61()","Uj()","T4()","Si()","SW()","TH()","TT()","Ud()","TF()","~(n)","co(a8I)","R(a8H)","Tb()","U1()","Tc()","Sg()","T8()","TU()","TQ()","TJ()","R(NK)","R(Ei)"])
A.fcU.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+29}
A.f4I.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+B.d.gI(d.e.split(". "))+"."},
$S:z+38}
A.fah.prototype={
$1(d){var w
if(!this.a.ba7(d))w=Math.abs(d.at)>0.002||d.ax>0.05
else w=!1
return w},
$S:z+1}
A.fai.prototype={
$1(d){return d.x},
$S:z+1}
A.fcR.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
A.fcS.prototype={
$1(d){var w
if(!this.a.ba7(d))w=d.ax>0.05||Math.abs(d.at)>0.002
else w=!1
return w},
$S:z+1}
A.fcT.prototype={
$2(d,e){var w=Math.abs(e.at)
return w>d?w:d},
$S:z+9}
A.dV8.prototype={
$0(){return this.a.ax=!0},
$S:0}
A.dV9.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.z(this.b,this.c))},
$S:0}
A.dVa.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=B.d.gcV(v).Q
v.toString
w.lD(v,B.dU,B.ie)}},
$S:8}
A.dVl.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
B.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
A.dVm.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
A.dVh.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
A.dVf.prototype={
$2(d,e){var w=this.a
w.r.push(C.cV(C.dB(0,0,0,d,0,0),new A.dVg(w,this.b,e)))},
$S:1796}
A.dVg.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
A.dVi.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.d.agL(0,u[1],u[2],u[3])
u[4].bD(0,new A.dVd(t))
v.e.m(0,t.a,0)
w.d.m(0,u[0],t)
A.e1(700+w.e*120,"",80,0,0.25,"square")
v.n(new A.dVe(w.a,v,w.f,w.r))},
$S:0}
A.dVd.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:191}
A.dVe.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=B.o.D(B.k.bK(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
A.dVj.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.d.azx(t,u[1],s,u[3])
A.e1(1500,"",45,0,0.25,"tri")
v=w.b
v.n(new A.dVc(w.a,v,w.e,w.f))},
$S:0}
A.dVc.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=B.o.D(B.k.bK(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
A.dVk.prototype={
$0(){A.e1(300,"",360,-1.2,0.3,"square")
var w=this.a
w.n(new A.dVb(w,this.b))},
$S:0}
A.dVb.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
A.dVp.prototype={
$0(){var w=this.a
return w.n(new A.dVo(w))},
$S:0}
A.dVo.prototype={
$0(){return this.a.at=!0},
$S:0}
A.dVq.prototype={
$0(){var w=this.a
return w.n(new A.dVn(w))},
$S:0}
A.dVn.prototype={
$0(){return this.a.at=!1},
$S:0}
A.dVr.prototype={
$0(){var w=this.a
w.f.saR(0,this.b)
w.LP()},
$S:0}
A.dVs.prototype={
$0(){return this.a.W3(this.b)},
$S:0}
A.dVt.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.LP():w.aRb()},
$S:2}
A.dVu.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.LP():w.aRb()},
$S:0}
A.e9w.prototype={
$2(d,e){return d+e},
$S:1797}
A.e9Q.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.e9P(w,d))},
$S:131}
A.e9P.prototype={
$0(){var w=C.aQ(J.q(this.b,"unlocked"))
w=w==null?null:B.k.L(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
A.e9R.prototype={
$0(){},
$S:0}
A.e9S.prototype={
$0(){},
$S:0}
A.e9y.prototype={
$0(){return this.a.n(new A.e9x(this.b,this.c))},
$S:0}
A.e9x.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.e9n.prototype={
$1(d){return this.a.cx===d},
$S:60}
A.e9o.prototype={
$1(d){return this.a.cx=d},
$S:27}
A.e9p.prototype={
$1(d){return this.a.cy===d},
$S:60}
A.e9q.prototype={
$1(d){return this.a.cy=d},
$S:27}
A.e9r.prototype={
$1(d){return this.a.db===d},
$S:60}
A.e9s.prototype={
$1(d){return this.a.db=d},
$S:27}
A.e9t.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:60}
A.e9u.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.G(0,d)},
$S:27}
A.e9v.prototype={
$0(){var w=this.a
return w.n(w.gasV())},
$S:0}
A.e9l.prototype={
$1(d){return this.a.$1(!0)},
$S:82}
A.e9m.prototype={
$1(d){return this.a.$1(!1)},
$S:152}
A.e9k.prototype={
$1(d){return this.a.$1(!1)},
$S:207}
A.e9J.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ap(e.b,e.d)
o.ch=n
n=C.b2(p,p,p,new A.bd7(o,p),n)
w=this.b
v=A.bvu("WORLD",w.a,w.c)
u=A.bvu("GRAVITY",C.t(w.b)+" m/s\xb2",B.c)
t=o.x
s=B.k.U(t*100)
t=t<0.25?B.cN:B.bt
t=A.bvu("FUEL",""+s+"%",t)
s=o.r.b
r=B.k.U(s*100)
s=s>D.AB[o.db].d?B.cN:B.c
q=x.p
s=C.a([v,u,t,A.bvu("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(A.bvu("HEIGHT",""+B.k.U(B.k.D(0.86-o.f.b,0,1)*1000)+" m",B.c))
n=C.a([n,C.an(p,C.B(s,B.m,p,B.hv,B.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bxk(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.qq[w].a+".":"You landed on every world!"
v=C.a([new A.fe(B.m_,"Again",new A.e9E(o),B.c,p),new A.fe(B.wO,"Rebuild",new A.e9F(o),B.aM,p)],q)
if(o.d+1<7)v.push(new A.fe(B.je,"Next world",new A.e9G(o),B.bt,p))
n.push(A.fZd("Perfect landing!",w,B.bt,v))}if(o.as==="crashed")n.push(A.fZd("Crash!",o.at,B.cN,C.a([new A.fe(B.m_,"Try again",new A.e9H(o),B.bt,p),new A.fe(B.wO,"Rebuild",new A.e9I(o),B.aM,p)],q)))
return new C.am(B.V,p,B.aX,B.q,n,p)},
$S:61}
A.e9E.prototype={
$0(){var w=this.a
return w.n(w.gasV())},
$S:0}
A.e9F.prototype={
$0(){var w=this.a
return w.n(new A.e9B(w))},
$S:0}
A.e9B.prototype={
$0(){return this.a.as="ready"},
$S:0}
A.e9G.prototype={
$0(){var w=this.a
return w.n(new A.e9A(w))},
$S:0}
A.e9A.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
A.e9H.prototype={
$0(){var w=this.a
return w.n(w.gasV())},
$S:0}
A.e9I.prototype={
$0(){var w=this.a
return w.n(new A.e9z(w))},
$S:0}
A.e9z.prototype={
$0(){return this.a.as="ready"},
$S:0}
A.e9K.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.n(new A.e9D(v,w))},
$S:0}
A.e9D.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
A.e9L.prototype={
$1(d){return this.a.y=d},
$S:9}
A.e9M.prototype={
$1(d){return this.a.Q=d},
$S:9}
A.e9N.prototype={
$1(d){return this.a.z=d},
$S:9}
A.e9O.prototype={
$0(){var w=this.a
return w.n(new A.e9C(w))},
$S:0}
A.e9C.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
A.dx_.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.fUF
if(q==null)q=$.fUF=A.cyF()
w=3
return C.b(C.iz(C.a([q,$.tr().bao("assets/data/three.min.js")],x.aJ),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.k5(0,C.cI(J.q(s,1)))
q.n(new A.dwZ(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:52}
A.dwZ.prototype={
$0(){return this.a.d=x.E.a(J.q(this.b,0))},
$S:0}
A.dwC.prototype={
$0(){return this.a.bO6(C.aR(J.q(this.b,"group")))},
$S:0}
A.dwD.prototype={
$1(d){return B.a.aT(B.o.fF(B.o.D(B.k.U(d*255),0,255),16),2,"0")},
$S:362}
A.dx0.prototype={
$0(){return A.a60("kick",0.25)},
$S:0}
A.dwE.prototype={
$0(){return this.a.cx=this.b},
$S:0}
A.dwF.prototype={
$1(d){return d.a===this.a},
$S:z+10}
A.dwG.prototype={
$0(){return A.a60("kick",0.5)},
$S:0}
A.dwH.prototype={
$0(){return A.e1(1300+this.a.R8.aA(900),"",40,0,0.2,"square")},
$S:0}
A.dwJ.prototype={
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
u=w}if(u.cx!=null&&!B.d.bf(u.d.e,new A.dwI(u)))u.cx=null
u.go=0},
$S:0}
A.dwI.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.aup(d)},
$S:z+10}
A.dwz.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
A.dwA.prototype={
$0(){var w=this.a
return w.n(w.gbYb())},
$S:0}
A.dwB.prototype={
$0(){return this.a.aes(null)},
$S:0}
A.dwQ.prototype={
$0(){var w=this.a.as
return w==null?null:w.eL(0,C.E(["t","shot"],x.N,x.z))},
$S:0}
A.dwR.prototype={
$0(){return this.a.cqY(this.b.a)},
$S:0}
A.dwS.prototype={
$0(){return this.a.aes(this.b)},
$S:0}
A.dwT.prototype={
$1(d){var w=this.a
return w.n(new A.dwP(w,d))},
$S:6}
A.dwP.prototype={
$0(){return this.a.k3=this.b},
$S:0}
A.dwU.prototype={
$0(){var w=this.a
return w.n(new A.dwO(w,this.b))},
$S:0}
A.dwO.prototype={
$0(){return this.a.CW=this.b},
$S:0}
A.dwV.prototype={
$0(){var w=this.a
return w.n(new A.dwN(w))},
$S:0}
A.dwN.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
A.dwW.prototype={
$0(){var w=this.a
return w.n(new A.dwM(w))},
$S:0}
A.dwM.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eL(0,C.E(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.I7},
$S:0}
A.dwX.prototype={
$0(){var w=this.a
return w.n(new A.dwL(w))},
$S:0}
A.dwL.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aTH()
else w.p2=null},
$S:0}
A.dwY.prototype={
$0(){var w=this.a
return w.n(new A.dwK(w))},
$S:0}
A.dwK.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
A.bVZ.prototype={
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
$S:286}
A.bW_.prototype={
$1(d){var w=new C.r6([],[]).oP(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:478}
A.f_k.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)},
$S:231}
A.f_l.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)||w.h(d,1)},
$S:231}
A.f_m.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)!==w.h(d,1)},
$S:231}
A.f_q.prototype={
$1(d){return!J.q(d,0)},
$S:231}
A.f_r.prototype={
$1(d){var w=J.a6(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:231}
A.f_s.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:231}
A.dza.prototype={
$1(d){return this.a.apH(0)},
$S:8}
A.dyP.prototype={
$0(){var w=this.b
return this.a.cx=new C.J(w,C.hEh(),C.T(w).k("J<1,I>")).fG(0)},
$S:0}
A.dyS.prototype={
$1(d){return""+d},
$S:83}
A.dzb.prototype={
$1(d){return d.b==="buzzer"},
$S:z+6}
A.dyN.prototype={
$1(d){return this.a.apH(this.b)},
$S:8}
A.dyO.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.atf(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.m1(0,d,a1.lu(0.15,0.3))
u=a1.m1(0,d,a1.lu(0.15,0.62))
t=a1.m1(0,"and",a1.lu(0.48,0.46))
s=a1.m1(0,a0,a1.lu(0.82,0.46))
a1=t.a
w.push(new A.mW(v.a,a1,0))
w.push(new A.mW(u.a,a1,1))
w.push(new A.mW(a1,s.a,0))
break
case 1:v=a1.m1(0,d,a1.lu(0.12,0.25))
u=a1.m1(0,d,a1.lu(0.12,0.65))
r=a1.m1(0,"xor",a1.lu(0.46,0.25))
q=a1.m1(0,"and",a1.lu(0.46,0.65))
p=a1.ate(0,a0,a1.lu(0.82,0.25),0)
o=a1.ate(0,a0,a1.lu(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new A.mW(a1,n,0))
m=u.a
w.push(new A.mW(m,n,1))
l=q.a
w.push(new A.mW(a1,l,0))
w.push(new A.mW(m,l,1))
w.push(new A.mW(n,p.a,0))
w.push(new A.mW(l,o.a,0))
break
case 2:k=a1.m1(0,"clock",a1.lu(0.15,0.4))
j=a1.m1(0,"not",a1.lu(0.45,0.65))
s=a1.m1(0,a0,a1.lu(0.82,0.3))
i=a1.m1(0,"buzzer",a1.lu(0.82,0.65))
a1=k.a
w.push(new A.mW(a1,s.a,0))
n=j.a
w.push(new A.mW(a1,n,0))
w.push(new A.mW(n,i.a,0))
break
default:h=a1.m1(0,d,a1.lu(0.12,0.25))
g=a1.m1(0,d,a1.lu(0.12,0.7))
f=a1.m1(0,"nor",a1.lu(0.5,0.25))
e=a1.m1(0,"nor",a1.lu(0.5,0.7))
s=a1.m1(0,a0,a1.lu(0.86,0.25))
a1=f.a
w.push(new A.mW(g.a,a1,0))
n=e.a
w.push(new A.mW(n,a1,1))
w.push(new A.mW(h.a,n,0))
w.push(new A.mW(a1,n,1))
w.push(new A.mW(a1,s.a,0))}},
$S:0}
A.dyT.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.atf(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.m(0,p,new A.B3(p,"switch",new C.v(0.14*q.a,r*q.b),0))}o.m1(0,w.e,o.lu(0.86,0.5))},
$S:0}
A.dyI.prototype={
$1(d){return d.b==="switch"},
$S:z+6}
A.dyJ.prototype={
$2(d,e){return B.k.aI(d.c.b,e.c.b)},
$S:z+37}
A.dyK.prototype={
$1(d){return d.b===this.a.e},
$S:z+6}
A.dyL.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
A.dyM.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.aa_(this.c)
if(v.ax)A.At("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+B.d.gI(w)
v.CW=!1
if(v.ax)A.e1(140,"",250,0,0.3,"square")}},
$S:0}
A.dyU.prototype={
$0(){},
$S:0}
A.dyV.prototype={
$0(){return B.d.cu(this.a.e,this.b)},
$S:0}
A.dyW.prototype={
$0(){return this.a.cy=null},
$S:0}
A.dyR.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
B.d.bm(w.e,new A.dyQ(v))
w.cy=null},
$S:0}
A.dyQ.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
A.dyH.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.m1(0,this.b,new C.v(w.x.a*(0.3+v.af()*0.4),w.x.b*(0.2+v.af()*0.6))).a},
$S:0}
A.dz4.prototype={
$0(){var w=this.a
return w.n(new A.dz3(w))},
$S:0}
A.dz3.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
A.dz5.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ap(e.b,e.d)
v.x=u
return C.aJ(B.c4,C.jy(C.b2(w,w,w,new A.b7j(v,w),u),B.q,w),B.z,!1,w,w,w,w,w,w,w,w,new A.dyZ(v),w,w,w,new A.dz_(v),new A.dz0(v),new A.dz1(v),w,w,w,w,w,w,w,w,w,w,new A.dz2(v),w,w,w,!1,B.ae)},
$S:33}
A.dz2.prototype={
$1(d){return this.a.bZa(d.b)},
$S:53}
A.dz0.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.c6l(u)
if(t!=null){v.as=t
v.at=u
return}w=v.atW(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aD(0,u)}},
$S:40}
A.dz1.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.v(B.k.D(w.a+u.Q.a,46,u.x.a-46),B.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
A.dz_.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bRE(t.at)
if(w!=null&&w.a!==t.as){v=t.e
B.d.bm(v,new A.dyX(w))
u=t.as
u.toString
v.push(new A.mW(u,w.a,w.b))
C.jC()}}t.z=t.as=null},
$S:36}
A.dyX.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
A.dyZ.prototype={
$1(d){return this.a.asd(d.b)},
$S:312}
A.dz6.prototype={
$0(){return this.a.btm(this.b.a)},
$S:0}
A.dz7.prototype={
$0(){return this.a.apH(this.b.a)},
$S:0}
A.dz8.prototype={
$0(){var w=this.a
return w.n(new A.dyY(w))},
$S:0}
A.dyY.prototype={
$0(){var w=this.a
w.atf(0)
w.ay=null},
$S:0}
A.dz9.prototype={
$0(){return this.a.cmT(this.b)},
$S:0}
A.cFr.prototype={
$0(){var w=this,v=null,u=C.j1(v,v,v,v,C.dr(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),B.a6,B.cn,v,B.eM,B.cm)
u.fE()
return u},
$S:328}
A.dEn.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.dEm.prototype={
$0(){return this.a.d=null},
$S:0}
A.dEp.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.bTp()},
$S:118}
A.dEo.prototype={
$0(){return C.a7(this.a,!1).oZ()},
$S:0}
A.f_I.prototype={
$0(){return D.dEV},
$S:z+56}
A.f_J.prototype={
$0(){return D.ddd},
$S:z+60}
A.f_K.prototype={
$0(){return D.dgu},
$S:z+63}
A.f_V.prototype={
$0(){return D.da6},
$S:z+64}
A.f_Y.prototype={
$0(){return D.dEu},
$S:z+66}
A.f_Z.prototype={
$0(){return D.djC},
$S:z+85}
A.f0_.prototype={
$0(){return D.dd9},
$S:z+17}
A.f00.prototype={
$0(){return D.ddc},
$S:z+18}
A.f01.prototype={
$0(){return D.d6h},
$S:z+19}
A.f02.prototype={
$0(){return D.dfH},
$S:z+20}
A.f03.prototype={
$0(){return D.dhk},
$S:z+21}
A.f_L.prototype={
$0(){return D.dhm},
$S:z+22}
A.f_M.prototype={
$0(){return D.dcl},
$S:z+23}
A.f_N.prototype={
$0(){return D.dml},
$S:z+24}
A.f_O.prototype={
$0(){return D.dEb},
$S:z+25}
A.f_P.prototype={
$0(){return D.dCe},
$S:z+26}
A.f_Q.prototype={
$0(){return D.dl0},
$S:z+27}
A.f_R.prototype={
$0(){return D.dEj},
$S:z+28}
A.f_S.prototype={
$0(){return D.dck},
$S:z+16}
A.f_T.prototype={
$0(){return D.dEt},
$S:z+30}
A.f_U.prototype={
$0(){return D.dcm},
$S:z+31}
A.f_W.prototype={
$0(){return D.dhC},
$S:z+32}
A.f_X.prototype={
$0(){return D.dl_},
$S:z+33}
A.eHn.prototype={
$2(d,e){return new A.acq($.bzQ()[e],new A.eHm(e,this.a),null)},
$S:z+34}
A.eHm.prototype={
$0(){var w=this.a,v=D.ay9.h(0,$.bzQ()[w].a)
$.c9Q=v==null?"music":v
C.a7(this.b,!1).cs(C.eH(new A.eHk(w),!1,null,x.H))},
$S:0}
A.eHk.prototype={
$1(d){return $.bzQ()[this.a].e.$0()},
$S:43}
A.eHo.prototype={
$2(d,e){return new A.abl(D.ar5[e],new A.eHl(this.a,e),null)},
$S:z+35}
A.eHl.prototype={
$0(){return this.a.d.$1(D.ar5[this.b])},
$S:0}
A.eH3.prototype={
$0(){return this.a.as=!0},
$S:0}
A.eH2.prototype={
$0(){return this.a.as=!1},
$S:0}
A.eH1.prototype={
$1(d){var w=this
return new C.ed(new A.eH0(w.a,w.b,w.c,w.d),null)},
$S:21}
A.eH0.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aG(a2,d,a0).w
a0=C.aG(a2,d,a0).w
w=x.p
v=C.a([D.eOT,B.au,D.eUP,B.ab],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.b3(12,12)
m=new C.b3(12,12)
m=C.a([new C.bE(1,B.bn,C.aK(d,B.U,!1,d,!0,B.q,d,C.aL(),r[p],d,d,d,d,d,2,new C.e0(d,d,d,d,d,d,d,d,d,d,"Title",d,H.BM,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,B.c.j(0.06),d,d,d,d,d,d,d,new C.b1(4,new C.bu(n,n,n,n),B.W),!0,d,d,d,d),B.z,!0,d,!0,d,!1,d,B.af,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,B.it,!0,B.a6,d,B.am,d,d,d,d),d),B.aa,new C.bE(2,B.bn,C.aK(d,B.U,!1,d,!0,B.q,d,C.aL(),q[p],d,d,d,d,d,2,new C.e0(d,d,d,d,d,d,d,d,d,d,"Small line",d,H.BM,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,B.c.j(0.06),d,d,d,d,d,d,d,new C.b1(4,new C.bu(m,m,m,m),B.W),!0,d,d,d,d),B.z,!0,d,!0,d,!1,d,B.af,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,B.it,!0,B.a6,d,B.am,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.cYX[l]
j=new C.b3(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.A(t.a.c.d,s)
t.w=i}h=B.d.gI(i).j(0.3)}else h=B.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.A(t.a.c.d,s)
t.w=i}g=B.d.gI(i)}else g=B.bG
f=new C.ax(g,u[p].A(0,k)?1.8:1,B.r,-1)
n.push(C.aJ(d,C.p(d,C.V(k,u[p].A(0,k)?B.c:B.aQ,d,d,d,22),B.h,d,d,new C.o(h,d,new C.c1(f,f,f,f),new C.bu(j,j,j,j),d,d,B.n),d,d,d,B.hd,d,d,d,42),B.z,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.eGZ(a3,p,u,k),d,d,d,d,d,d,!1,B.ae))}B.d.v(v,C.a([new C.w("SLAB "+o,d,D.eFg,d,d,d,d,d,d,d,d,d),B.ar,new C.cC(B.aY,B.e,B.j,B.m,d,B.p,d,0,m,d),B.P,new C.a3(d,44,C.cK(n,d,d,d,d,B.aY,!1),d),B.ay],w))}v.push(C.bH(B.BT,new A.eH_(t,r,q,u,a2),d))
return new C.C(new C.M(0,0,0,a1.f.d),C.br(!0,new C.cZ(new C.aW(0,1/0,0,a0.a.b*0.86),C.cK(v,d,A0.DB,d,d,B.ah,!0),d),!0,!1,B.ag,!0,!0),d)},
$S:105}
A.eGZ.prototype={
$0(){var w=this
return w.a.$1(new A.eGY(w.b,w.c,w.d))},
$S:0}
A.eGY.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
A.eH_.prototype={
$0(){var w=this,v=w.a
v.n(new A.eGX(v,w.b,w.c,w.d))
C.a7(w.e,!1).K(null)},
$S:0}
A.eGX.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this
for(w=m.d,v=m.c,u=m.a,t=m.b,s=x.N,r=x.Z,q=0;q<3;++q){p=u.y
if(p===$){p=C.A(u.a.c.f,s)
u.y=p
o=p}else o=p
n=B.a.i(t[q].a.a)
if(n.length===0)n=o[q]
p[q]=n
p=u.z
if(p===$){p=C.A(u.a.c.r,s)
u.z=p}p[q]=B.a.i(v[q].a.a)
p=u.x
if(p===$){p=C.A(u.a.c.e,r)
u.x=p}p[q]=w[q]}},
$S:0}
A.eHb.prototype={
$0(){var w=this.a
return w.n(new A.eHa(w))},
$S:0}
A.eHa.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
A.eHc.prototype={
$0(){return A.qi(this.b,this.a.f,"scene")},
$S:0}
A.eHd.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(B.d.gI(u),B.d.gai(u),0.4)
u.toString
w=this.a.gXg().x
w===$&&C.c()
return C.bQ(v,new C.o(v,v,v,v,v,new C.bS(D.aNO,0.9,B.x,v,0,C.a([u.j(0.06+0.03*w),B.bV],x.O),v,v),B.n),B.b7)},
$S:284}
A.eHe.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.as(C.eX(B.B,C.c4(new C.h2(C.a([u.gt6(),u.gXg()],x.dS)),new A.eH9(u,this.b,v),w),B.h,B.e8),w,w,w)},
$S:246}
A.eH9.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gt6().x
r===$&&C.c()
w=r<0.9?1:1-A.bmY(r,0.9,0.98)
v=s.gXg().x
v===$&&C.c()
u=B.dG.ar(0,v)
switch(s.gatg().a){case 0:s=s.bsA(t.b,r,u,t.c)
break
case 1:s=s.bIr(t.b,r,u,t.c)
break
case 2:s=s.crp(t.b,r,u,t.c)
break
case 3:s=s.bvq(t.b,r,u,t.c)
break
case 4:s=s.byx(t.b,r,u,t.c)
break
case 5:s=s.bxL(t.b,r,u,t.c)
break
default:s=null}return C.d4(s,w)},
$S:213}
A.eHf.prototype={
$2(d,e){var w=C.aso(this.b),v=this.c.d,u=C.aq(B.d.gI(v),B.d.gai(v),0.4)
u.toString
v=C.aq(B.d.gI(v),B.d.gai(v),0.4)
v.toString
v=w.czy(u,B.bG,v,3.5)
u=this.a
w=u.gt6().x
w===$&&C.c()
return C.a7J(C.m8(null,null,null,1,0,new A.eH8(u),B.k.D(w,0,1)),v)},
$S:1801}
A.eH8.prototype={
$1(d){var w=this.a
w.gt6().st(0,d)
if(w.as)w.n(new A.eH4(w))},
$S:6}
A.eH4.prototype={
$0(){return this.a.as=!1},
$S:0}
A.eHg.prototype={
$0(){var w=this.a
w.gt6().st(0,0)
w.adb()},
$S:0}
A.eHh.prototype={
$1(d){var w=this.a
w.n(new A.eH7(w,d))
if(w.as)w.adb()},
$S:6}
A.eH7.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.eHi.prototype={
$0(){var w=this.a
w.n(new A.eH6(w,this.b))
w.gt6().st(0,0)
if(w.as)w.adb()},
$S:0}
A.eH6.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
A.eHj.prototype={
$0(){var w=this.a
return w.n(new A.eH5(w,this.b))},
$S:0}
A.eH5.prototype={
$0(){var w=C.A(this.b,x.G)
return this.a.w=w},
$S:0}
A.eGV.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:1802}
A.eGW.prototype={
$1(d){return d.b},
$S:1803}
A.d8X.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+3}
A.d8Y.prototype={
$1(d){return d.b===this.a},
$S:z+7}
A.d8U.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+3}
A.d8V.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.d8W.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.d8Z.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+7}
A.d9_.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+7}
A.d90.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.d91.prototype={
$1(d){return d.d<this.a.ax},
$S:z+39}
A.d92.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+40}
A.d93.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+41}
A.d94.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+42}
A.d95.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+43}
A.d96.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+44}
A.e8R.prototype={
$0(){return this.a.ax=!0},
$S:0}
A.e8G.prototype={
$0(){return this.a.ax=!1},
$S:0}
A.e8I.prototype={
$2(d,e){return d+e.d*7+B.o.J(B.a.gV(e.b),97)},
$S:z+45}
A.e8J.prototype={
$2(d,e){return d+B.o.J(B.a.gV(e.a),31)+B.o.J(B.a.gV(e.b),17)},
$S:z+46}
A.e8M.prototype={
$1(d){var w=D.m5.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[B.o.J(d.d,u)]+")":t},
$S:z+47}
A.e8N.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.T(q),o=x.dg,n=C.A(new C.e2(new C.cQ(new C.a5(q,new A.e8O(d),p.k("a5<1>")),new A.e8P(r),p.k("cQ<1,qb?>")),o),o.k("G.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(B.d.aG(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.K)(n),++v){u=n[v]
if(w.length>=6)return
t=C.A(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+48}
A.e8O.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
A.e8P.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+49}
A.e8K.prototype={
$1(d){return D.m5.h(0,d.b).c===D.vt},
$S:z+50}
A.e8L.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
A.e9g.prototype={
$1(d){var w=this.a,v=d.a,u=B.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.a58(0,u)
w.cLo(B.o.ak(v,1000))},
$S:8}
A.e8Q.prototype={
$0(){},
$S:0}
A.e8C.prototype={
$0(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aw(),$async$$0)
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
A.e8T.prototype={
$1(d){var w=null,v=this.a.b
return C.br(!0,C.u(C.a([B.P,C.dK(!1,w,w,w,!0,w,w,w,!0,w,C.V(D.m5.h(0,v).b,D.m5.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.f46,w,C.d(D.m5.h(0,v).a,w,w,w,w,w,w,B.h8,w,w,w),w,w,w),C.dK(!1,w,w,w,!0,w,w,w,!0,w,R.aif,w,w,w,w,new A.e8S(d),!1,w,w,w,w,w,w,w,D.eXr,w,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),!0,!1,B.ag,!0,!0)},
$S:34}
A.e8S.prototype={
$0(){C.a7(this.a,!1).K(!0)
return null},
$S:0}
A.e8V.prototype={
$1(d){var w,v,u=null,t=C.aG(d,u,x.m).w,s=C.a([D.dLF],x.p)
for(w=0;w<6;++w){v=D.arn[w]
s.push(C.dK(!1,u,u,u,!0,u,u,u,!0,u,D.bC2,u,u,u,u,new A.e8U(d,v),!1,u,u,u,u,u,new C.w(v.b,u,B.l7,u,u,u,u,u,u,u,u,u),u,new C.w(v.a,u,B.h8,u,u,u,u,u,u,u,u,u),u,u,u))}return C.br(!0,new C.cZ(new C.aW(0,1/0,0,t.a.b*0.7),C.cK(s,u,D.bjJ,u,u,B.ah,!0),u),!0,!1,B.ag,!0,!0)},
$S:34}
A.e8U.prototype={
$0(){C.a7(this.a,!1).K(this.b)
return null},
$S:0}
A.e8F.prototype={
$1(d){var w=null
return C.eo(C.a([C.bG(!1,B.dd,w,w,!0,w,w,new A.e8D(d),w,w),C.bG(!1,B.BS,w,w,!0,w,w,new A.e8E(d),w,w)],x.p),w,w,D.rn,D.eUZ,w,w,w,w,D.eXI,w)},
$S:20}
A.e8D.prototype={
$0(){C.a7(this.a,!1).K(!1)
return null},
$S:0}
A.e8E.prototype={
$0(){C.a7(this.a,!1).K(!0)
return null},
$S:0}
A.e9e.prototype={
$0(){var w=this.a
return w.n(new A.e9d(w))},
$S:0}
A.e9d.prototype={
$0(){return this.a.r=!1},
$S:0}
A.e9f.prototype={
$2(d,e){var w,v,u,t=null,s=new C.ap(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.lR(new A.e94(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.aX2:t
v=C.a([C.b2(u,t,t,new A.bd5(w,v,new A.e95(r),new A.e96(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.an(t,C.e3(C.c4(w,new A.e97(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bA9())
return C.aJ(B.c4,C.jy(new C.am(B.V,t,B.aX,B.q,v,t),B.q,t),B.z,!1,t,t,t,t,t,t,t,t,new A.e98(r),t,r.gc7B(),t,new A.e99(r),new A.e9a(r),new A.e9b(r),t,t,t,t,t,t,t,t,t,t,new A.e9c(r),t,t,t,!1,B.ae)},
$S:33}
A.e94.prototype={
$0(){return this.a.a95(this.b)},
$S:0}
A.e9c.prototype={
$1(d){return this.a.cpi(d.b)},
$S:53}
A.e9a.prototype={
$1(d){return this.a.c7C(d.b)},
$S:40}
A.e9b.prototype={
$1(d){return this.a.c7D(d.b)},
$S:18}
A.e99.prototype={
$1(d){return this.a.aWz()},
$S:36}
A.e98.prototype={
$1(d){return this.a.a9M(d.b)},
$S:312}
A.e95.prototype={
$0(){return this.a.z},
$S:646}
A.e96.prototype={
$0(){return this.a.Q},
$S:708}
A.e97.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bEn()
if(p.length===0)return B.bF
w=B.w.j(0.55)
v=C.m(14)
u=C.H(B.bG,B.r,1)
t=C.a([D.eSH,B.d4],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.K)(p),++r)t.push(new C.w(p[r],q,D.eE5,q,q,q,q,B.Z,q,2,q,q))
return C.p(q,C.u(t,B.F,q,B.e,B.R,0,B.p),B.h,q,q,new C.o(w,q,u,v,q,q,B.n),q,q,q,q,B.h1,q,q,q)},
$S:59}
A.e8H.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.m(12),t=C.H(e.j(0.6),B.r,1),s=x.p
return new C.C(B.dZ,C.B(C.a([C.p(w,C.V(d,e,w,w,w,21),B.h,w,w,new C.o(v,w,t,u,w,w,B.n),w,38,w,w,w,w,w,38),B.ba,C.D(C.u(C.a([C.d(f,w,w,w,w,w,w,S.H7,w,w,w),B.by,C.d(g,w,w,w,w,w,w,D.aJP,w,w,w)],s),B.F,w,B.e,B.j,0,B.p),1)],s),B.F,w,B.e,B.j,0,w,w),w)},
$S:1805}
A.e90.prototype={
$0(){var w=this.a.c
w.toString
return C.a7(w,!1).oZ()},
$S:0}
A.e91.prototype={
$0(){var w=this.a
return w.n(new A.e9_(w))},
$S:0}
A.e9_.prototype={
$0(){return this.a.ax=!0},
$S:0}
A.e92.prototype={
$0(){var w=this.a
return w.n(new A.e8Z(w))},
$S:0}
A.e8Z.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
A.e93.prototype={
$0(){var w=this.a
return w.n(new A.e8Y(w))},
$S:0}
A.e8Y.prototype={
$0(){return this.a.r=!0},
$S:0}
A.e8X.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.m5.gdH(D.m5),w=w.gag(w);w.C();){v=w.gT(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,B.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,B.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.K)(p),++r)u.push(s.ckk(p[r]))
return new C.C(F.abY,C.u(C.a([new C.C(P.adD,w,q),C.B(u,B.m,q,B.e,B.j,0,q,q)],v),B.F,q,B.e,B.j,0,B.p),q)},
$S:z+51}
A.e8W.prototype={
$0(){return this.a.bZf(this.b)},
$S:0}
A.d8T.prototype={
$0(){var w=this,v=null,u=C.j1(v,v,v,v,C.dr(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),B.a6,B.cn,v,B.eM,B.cm)
u.fE()
return u},
$S:328}
A.ej1.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=B.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=B.o.ak(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.v(s.a+q*n,s.b+r*n)
t.b=new C.v(q*v,r*v)}B.d.bm(o,new A.ej_(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.n(new A.ej0())},
$S:8}
A.ej_.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+52}
A.ej0.prototype={
$0(){},
$S:0}
A.eiD.prototype={
$0(){},
$S:0}
A.eiC.prototype={
$0(){},
$S:0}
A.eiM.prototype={
$0(){return A.qi(this.b,this.a.d,"spark-painter")},
$S:0}
A.eiO.prototype={
$1(d){return this.a.aU4(0,d.b)},
$S:40}
A.eiS.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||B.d.gai(w).aD(0,u).gcj()>2.5}else w=!1
if(w)t.a.push(u)
v.aNx(u)
v.c18(u)
return null},
$S:18}
A.eiN.prototype={
$1(d){return this.a.aU3()},
$S:36}
A.eiT.prototype={
$1(d){return this.a.aU4(0,d.b)},
$S:23}
A.eiU.prototype={
$1(d){return this.a.aU3()},
$S:53}
A.eiV.prototype={
$0(){var w=this.a
return w.n(new A.eiL(w,this.b))},
$S:0}
A.eiL.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
A.eiW.prototype={
$0(){var w=this.a
return w.n(new A.eiK(w))},
$S:0}
A.eiK.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.eiX.prototype={
$0(){var w=this.a
return w.n(new A.eiJ(w,this.b))},
$S:0}
A.eiJ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.eiY.prototype={
$1(d){var w=this.a
return w.n(new A.eiI(w,d))},
$S:6}
A.eiI.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.eiZ.prototype={
$0(){var w=this.a
return w.n(new A.eiH(w))},
$S:0}
A.eiH.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
A.eiP.prototype={
$0(){var w=this.a
return w.n(new A.eiG(w))},
$S:0}
A.eiG.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
A.eiQ.prototype={
$0(){var w=this.a
return w.n(new A.eiF(w))},
$S:0}
A.eiF.prototype={
$0(){var w=this.a
B.d.a8(w.e)
B.d.a8(w.f)},
$S:0}
A.eiR.prototype={
$0(){var w=this.a
return w.n(new A.eiE(w,this.b))},
$S:0}
A.eiE.prototype={
$0(){return this.a.at=this.b},
$S:0}
A.epB.prototype={
$0(){return A.qi(this.b,this.a.d,"title")},
$S:0}
A.epC.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gHm().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.bTy(v[t],t,s,q,u))
return new C.C(B.fv,C.cb(B.fA,w,B.qV,0,0),null)},
$S:681}
A.epD.prototype={
$1(d){return this.a.n(new A.epA())},
$S:2}
A.epA.prototype={
$0(){},
$S:0}
A.epE.prototype={
$0(){var w=this.a
w.n(new A.epz(w,this.b))
w=w.gHm()
w.ic(0,0)
w.cF(0)},
$S:0}
A.epz.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
A.epF.prototype={
$0(){var w=this.a
return w.n(new A.epy(w,this.b))},
$S:0}
A.epy.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.epG.prototype={
$0(){var w=this.a
return w.n(new A.epx(w))},
$S:0}
A.epx.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
A.epH.prototype={
$0(){var w=this.a
return w.n(new A.epw(w,this.b))},
$S:0}
A.epw.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.epI.prototype={
$0(){var w=this.a.gHm()
w.ic(0,0)
w.cF(0)},
$S:0}
A.epJ.prototype={
$1(d){var w=this.a
return w.n(new A.epv(w,d))},
$S:6}
A.epv.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.e5R.prototype={
$1(d){return d.a.aD(0,this.a).gcj()<16},
$S:z+12}
A.e5S.prototype={
$1(d){var w=this.b
return d.a.aD(0,w).gcj()<16||d.a.aD(0,w).gcj()>this.a.r.gajs()*2.2},
$S:z+12}
A.e5F.prototype={
$0(){return A.qi(this.b,this.a.d,"orbits")},
$S:0}
A.e5G.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.ap(e.b,e.d)
q.r=p
w=q.gaaW()
v=q.w
u=q.as
t=q.at
s=u==null?B.a_8:q.cb8(u,q.gaRE())
return new C.en(C.aJ(B.c4,C.b2(r,r,r,new A.bhn(q.e,w,v,u,t,s,r),p),B.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,new A.e5C(q),new A.e5D(q),new A.e5E(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,B.ae),q.d)},
$S:199}
A.e5D.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:40}
A.e5E.prototype={
$1(d){return this.a.at=d.b},
$S:18}
A.e5C.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aD(0,w).gcj()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new A.YD(u,v.gaRE(),v.Q,v.aY0(),C.a([],x.g)))
C.jC()
if(v.ax)A.e1(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:36}
A.e5H.prototype={
$1(d){var w=this.a
return w.n(new A.e5B(w,d))},
$S:6}
A.e5B.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.e5J.prototype={
$1(d){var w=this.a
return w.n(new A.e5A(w,d))},
$S:6}
A.e5A.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.e5K.prototype={
$1(d){var w=this.a
return w.n(new A.e5z(w,d))},
$S:6}
A.e5z.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.e5L.prototype={
$0(){var w=this.a
return w.n(new A.e5y(w))},
$S:0}
A.e5y.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
A.e5M.prototype={
$0(){var w=this.a
return w.n(new A.e5x(w))},
$S:0}
A.e5x.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
A.e5N.prototype={
$0(){var w=this.a
return w.n(new A.e5w(w))},
$S:0}
A.e5w.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e5O.prototype={
$0(){var w=this.a
return w.n(w.gcmy())},
$S:0}
A.e5P.prototype={
$0(){var w=this.a
return w.n(w.gbAn())},
$S:0}
A.e5Q.prototype={
$0(){var w=this.a
return w.n(new A.e5v(w))},
$S:0}
A.e5v.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.af()
s=w.r
w.ao0(50+t*(Math.min(s.a,s.b)/2-70),v.af()*3.141592653589793*2,0.7+v.af()*0.5,v.he())}},
$S:0}
A.e5I.prototype={
$0(){var w=this.a
return w.n(B.d.gqM(w.e))},
$S:0}
A.ep2.prototype={
$1(d){return this.a.fD$-d.b>6000},
$S:710}
A.ep3.prototype={
$1(d){var w=this.a.e
return new C.a5(w,new A.ep1(d),C.T(w).k("a5<1>")).gH(0)>=3},
$S:710}
A.ep1.prototype={
$1(d){return d.a.aD(0,this.a.a).gcj()<14},
$S:z+54}
A.eoS.prototype={
$0(){return A.qi(this.b,this.a.d,"swarm")},
$S:0}
A.eoT.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ap(e.b,e.d)
v.w=u
return new C.en(C.aJ(B.c4,C.b2(w,w,w,new A.boI(v.e,v.f,v.ax,v.at,v.ay,v.fD$,w),u),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new A.eoP(v),new A.eoQ(v),new A.eoR(v),w,w,w,w,w,w,w,w,new A.eoH(v),new A.eoI(v),new A.eoJ(v),w,w,w,!1,B.ae),v.d)},
$S:199}
A.eoQ.prototype={
$1(d){return this.a.ay=d.b},
$S:40}
A.eoR.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
A.eoP.prototype={
$1(d){return this.a.ay=null},
$S:36}
A.eoI.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.z(v,w.fD$))
if(w.ch)A.e1(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)A.l_("flute",7,500,0.3)},
$S:23}
A.eoJ.prototype={
$1(d){return this.a.ay=null},
$S:53}
A.eoH.prototype={
$0(){return this.a.ay=null},
$S:0}
A.eoU.prototype={
$0(){var w=this.a
return w.n(new A.eoO(w,this.b))},
$S:0}
A.eoO.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
A.eoV.prototype={
$0(){var w=this.a
return w.n(new A.eoN(w,this.b))},
$S:0}
A.eoN.prototype={
$0(){var w=this.a
w.ax=this.b.a
B.d.a8(w.e)},
$S:0}
A.eoW.prototype={
$0(){var w=this.a
return w.n(new A.eoM(w))},
$S:0}
A.eoM.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
A.eoX.prototype={
$1(d){var w=this.a
return w.n(new A.eoL(w,d))},
$S:6}
A.eoL.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.eoY.prototype={
$1(d){var w=this.a
return w.n(new A.eoK(w,d))},
$S:6}
A.eoK.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.eoZ.prototype={
$1(d){var w=this.a
return w.n(new A.eoG(w,d))},
$S:6}
A.eoG.prototype={
$0(){return this.a.z=this.b},
$S:0}
A.ep_.prototype={
$1(d){var w=this.a
return w.n(new A.eoF(w,d))},
$S:6}
A.eoF.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.ep0.prototype={
$1(d){var w=this.a
return w.n(new A.eoE(w,d))},
$S:6}
A.eoE.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.dyj.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new A.dyi(w,d))},
$S:131}
A.dyi.prototype={
$0(){var w=this.a,v=this.b,u=J.a6(v),t=C.aQ(u.h(v,"unlocked"))
t=t==null?null:B.k.L(t)
w.w=B.o.D(t==null?1:t,1,100)
t=C.aQ(u.h(v,"level"))
t=t==null?null:B.k.L(t)
if(t==null)t=w.w
w.r=B.o.D(t,1,w.w)
t=C.S(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.jj(v==null?B.uP:v)
v=v.gag(v)
while(v.C()){u=v.gT(v)
t.m(0,C.t(u.a),B.k.L(C.f8(u.b)))}w.x=t
w.Q=!0
B.d.a8(w.d)},
$S:0}
A.dyk.prototype={
$1(d){return d.d!=null},
$S:z+13}
A.dyl.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Xh(w)>0},
$S:z+13}
A.dy9.prototype={
$0(){var w=this.a
w.r=B.o.D(this.b,1,w.w)
w.awd()},
$S:0}
A.dyc.prototype={
$1(d){var w=null,v=C.m(22),u=this.a
return C.ev(w,D.aac,new C.C(B.bA,new C.a3(340,480,C.u(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,B.jo,w,w,w),B.T,C.D(C.ig(!0,w,w,B.z,M.aHQ,new A.dyb(u,d),100,w,w,B.ah,!1),1)],x.p),B.m,w,B.e,B.j,0,B.p),w),w),w,w,w,w,B.cX,w,new C.b5(v,B.W),w)},
$S:46}
A.dyb.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new A.dya(this.b,r):s
v=C.m(12)
if(p)q=r===q.r?B.cd:B.c.j(0.1)
else q=B.c.j(0.03)
u=C.H(p?B.be:B.du,B.r,1)
o=p?o:"\ud83d\udd12"
t=p?B.c:B.j9
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(B.a.aM("\u2605",n)+B.a.aM("\u2606",3-n),s,s,s,s,s,s,D.eHH,s,s,s))
return C.aJ(s,C.p(s,C.u(o,B.m,s,B.b5,B.j,0,B.p),B.h,s,s,new C.o(q,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,B.ae)},
$S:76}
A.dya.prototype={
$0(){C.a7(this.a,!1).K(this.b)
return null},
$S:0}
A.dyg.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ap(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gaa2()
o=C.b2(q,q,q,new A.b70(p.d,w,v,p.gbZm(),q),o)
v=p.bRh("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gGP()
t=p.as>=p.gGP()?B.bt:B.c
s=this.b
r=x.p
s=C.a([o,C.an(q,C.B(C.a([v,p.aru("GOAL",""+w+" / "+u,t),p.aru("STARS",B.a.aM("\u2605",s)+B.a.aM("\u2606",3-s),B.aM)],r),B.m,q,B.hv,B.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(B.lH)
if(p.Q&&!p.y)s.push(D.aNv)
if(p.z){o=C.m(24)
w=this.c
v=C.H((w?B.bt:B.cN).j(0.6),B.r,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?B.bt:B.cN,q,q,q,q,q,q,q,q,22,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.ar,C.d("You blasted "+p.as+" dots. The goal was "+p.gGP()+".",q,q,q,q,q,q,B.hj,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(B.a.aM("\u2605",t==null?1:t),q,q,q,q,q,q,D.eyz,q,q,q))}u.push(B.ay)
t=C.a([new A.fe(B.m_,"Try again",new A.dyd(p),B.c,q)],r)
if(w&&p.r<100)t.push(new A.fe(B.je,"Next level",new A.dye(p),B.bt,q))
u.push(C.B(t,B.m,q,B.e,B.R,0,q,q))
s.push(C.as(C.p(q,C.u(u,B.m,q,B.e,B.R,0,B.p),B.h,q,q,new C.o(D.T2,q,v,o,q,q,B.n),q,q,q,q,B.a8,q,q,q),q,q,q))}return C.aJ(B.c4,new C.am(B.V,q,B.aX,B.q,s,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.dyf(p),q,q,q,q,!1,B.ae)},
$S:33}
A.dyf.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fD$
A.e1(180,"",200,1,0.4,"sine")
C.j6()},
$S:23}
A.dyd.prototype={
$0(){var w=this.a
return w.n(w.gb_D())},
$S:0}
A.dye.prototype={
$0(){var w=this.a
return w.aU5(w.r+1)},
$S:0}
A.dyh.prototype={
$0(){var w=this.a
return w.n(w.gb_D())},
$S:0}
A.cEZ.prototype={
$3(d,e,f){var w,v
if(e<=0)return
w=this.a
$.a1()
v=C.U()
v.r=f.j(0.18).gt(0)
w.aw(d,e,v)
v=C.U()
v.b=B.ak
v.c=3
v.r=f.j(0.9).gt(0)
w.aw(d,e,v)
v=C.U()
v.r=f.j(0.25).gt(0)
v.z=B.mN
w.aw(d,e*0.5,v)},
$S:711}
A.e1k.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcF_()?this.a.ciN(w,v,d.b):w.aD(0,v).gcj())<24},
$S:z+87}
A.e1J.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+58}
A.e1y.prototype={
$0(){var w=this.a
return w.n(new A.e1p(w))},
$S:0}
A.e1p.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
A.e1z.prototype={
$0(){return A.qi(this.b,this.a.d,"marble-music")},
$S:0}
A.e1A.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ap(e.b,e.d)
v.w=u
return new C.en(C.aJ(B.c4,C.b2(w,w,w,new A.be_(v.e,v.f,v.at,v.ax,v.fD$,w),u),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new A.e1v(v),new A.e1w(v),new A.e1x(v),w,w,w,w,w,w,w,w,w,w,new A.e1o(v),w,w,w,!1,B.ae),v.d)},
$S:199}
A.e1o.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.Y_(w)
u.e.push(new A.Ei(w,w,v,u.aLh(v)))
if(u.ay)A.l_(u.z,v+12,700,0.5)}if(u.x==="erase")u.aNN(d.b)},
$S:53}
A.e1w.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:40}
A.e1x.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aNN(d.b)},
$S:18}
A.e1v.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aD(0,w).gcj()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.Y_(t.ap(0,w).ey(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new A.Ei(w,t,v,u.aLh(v)))
if(u.ay)A.l_(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:36}
A.e1B.prototype={
$0(){var w=this.a
return w.n(new A.e1u(w,this.b))},
$S:0}
A.e1u.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
A.e1C.prototype={
$0(){var w=this.a
return w.n(new A.e1t(w,this.b))},
$S:0}
A.e1t.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.e1D.prototype={
$0(){var w=this.a
return w.n(new A.e1s(w,this.b))},
$S:0}
A.e1s.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
A.e1E.prototype={
$1(d){var w=this.a
return w.n(new A.e1r(w,d))},
$S:6}
A.e1r.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.e1F.prototype={
$0(){var w=this.a
return w.n(new A.e1q(w))},
$S:0}
A.e1q.prototype={
$0(){return this.a.auM("stairs")},
$S:0}
A.e1G.prototype={
$0(){var w=this.a
return w.n(new A.e1n(w))},
$S:0}
A.e1n.prototype={
$0(){return this.a.auM("pinball")},
$S:0}
A.e1H.prototype={
$0(){var w=this.a
return w.n(new A.e1m(w))},
$S:0}
A.e1m.prototype={
$0(){return this.a.auM("random")},
$S:0}
A.e1I.prototype={
$0(){var w=this.a
return w.n(new A.e1l(w))},
$S:0}
A.e1l.prototype={
$0(){var w=this.a
B.d.a8(w.e)
B.d.a8(w.f)},
$S:0}
A.e5e.prototype={
$0(){return B.d.W(this.a.e,this.b)},
$S:0}
A.e5f.prototype={
$0(){var w=this.b,v=new A.ab6(this.a.a,this.c)
v.c=w.fD$
return w.e.push(v)},
$S:0}
A.e5m.prototype={
$0(){var w=this.a
return w.n(new A.e5l(w))},
$S:0}
A.e5l.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
A.e5n.prototype={
$0(){return A.qi(this.b,this.a.d,"orbit-sequencer")},
$S:0}
A.e5o.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.ap(e.b,e.d)
if(!u.f){u.f=!0
u.aMC()}w=u.w
return new C.en(C.aJ(B.c4,C.b2(v,v,v,new A.bho(u.e,u.gaU7(),6,u.gcd9(),u.gcjd(),u.fD$,v),w),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.e5k(u),v,v,v,!1,B.ae),u.d)},
$S:199}
A.e5k.prototype={
$1(d){return this.a.bZo(d.b)},
$S:53}
A.e5p.prototype={
$1(d){var w=this.a
return w.n(new A.e5j(w,d))},
$S:6}
A.e5j.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.e5q.prototype={
$0(){var w=this.a
return w.n(new A.e5i(w,this.b))},
$S:0}
A.e5i.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.e5r.prototype={
$0(){var w=this.a
return w.n(new A.e5h(w,this.b))},
$S:0}
A.e5h.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
A.e5s.prototype={
$0(){var w=this.a
return w.n(w.gbEj())},
$S:0}
A.e5t.prototype={
$0(){var w=this.a
return w.n(new A.e5g(w))},
$S:0}
A.e5g.prototype={
$0(){var w,v=this.a,u=v.e
B.d.a8(u)
for(v=v.r,w=0;w<9;++w)u.push(new A.ab6(v.aA(6),v.af()))},
$S:0}
A.e5u.prototype={
$0(){var w=this.a
return w.n(B.d.gqM(w.e))},
$S:0}
A.fda.prototype={
$2(d,e){var w=B.o.ak(d,100),v=B.o.J(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:132}
A.e4J.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new A.e4I(w,d))},
$S:131}
A.e4I.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aU(v==null?B.cO:v)
while(v.C())w.push(B.k.L(C.f8(v.gT(v))))
return this.a.x.v(0,w)},
$S:0}
A.e4v.prototype={
$2(d,e){var w=this.b
if(B.o.ak(d,100)===w||B.o.J(d,100)===w)this.a.a+=e},
$S:132}
A.e4p.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new A.b5T(w.b,new C.v(w.c*(0.2+0.6*v.af()),w.e*(0.2+0.6*v.af()))))},
$S:0}
A.e4q.prototype={
$0(){var w=this.a
B.d.a8(w.e)
w.f.a8(0)
w.r=null},
$S:0}
A.e4u.prototype={
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
p=D.uO.h(0,v[u].a).a
o=w.agk(u)
v=D.uO.h(0,v[t].a).a
n=w.agk(t)
if(q<=p-o+r&&q<=v-n+r){m.m(0,s,q)
A.v9("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaUd()&&w.x.G(0,w.d)){A.v9("zap",12,300,0.5)
m=w.x
m=C.A(m,C.a2(m).k("ck.E"))
A.v6("molecule_maker",C.E(["done",m],x.N,x.z))}}}},
$S:0}
A.e4t.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a2(t).k("cu<1>"),r=this.b,q=s.k("a5<G.E>"),p=C.A(new C.a5(new C.cu(t,s),new A.e4r(r),q),q.k("G.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.K)(p),++w)t.W(0,p[w])
s=x.S
v=C.S(s,s)
t.bD(0,new A.e4s(r,v))
t.a8(0)
t.v(0,v)
B.d.cu(u.e,r)
u.r=null},
$S:0}
A.e4r.prototype={
$1(d){var w=this.a
return B.o.ak(d,100)===w||B.o.J(d,100)===w},
$S:60}
A.e4s.prototype={
$2(d,e){var w=B.o.ak(d,100),v=B.o.J(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.m(0,w*100+v,e)},
$S:132}
A.e4D.prototype={
$1(d){return""+d.b+" "+D.uO.h(0,d.a).c.toLowerCase()},
$S:423}
A.e4E.prototype={
$0(){var w=this.a
return w.n(new A.e4C(w))},
$S:0}
A.e4C.prototype={
$0(){var w=this.a;++w.d
w.atl(0)},
$S:0}
A.e4F.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.ap(e.b,e.d)
return C.aJ(B.c4,C.b2(w,w,w,new A.beG(v.e,v.f,v.r,v.gctt(),w),B.fk),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new A.e4y(v),new A.e4z(v),new A.e4A(v,e),w,w,w,w,w,w,w,w,w,w,new A.e4B(v),w,w,w,!1,B.ae)},
$S:33}
A.e4B.prototype={
$1(d){return this.a.bZL(d.b)},
$S:53}
A.e4z.prototype={
$1(d){var w=this.a
return w.w=w.aUe(d.b)},
$S:40}
A.e4A.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.n(new A.e4w(w,v,d,this.b))},
$S:18}
A.e4w.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.v(B.k.D(t.b.a+s.a,26,r.b-26),B.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
A.e4y.prototype={
$1(d){return this.a.w=null},
$S:36}
A.e4G.prototype={
$0(){var w=this.a
return w.n(new A.e4x(w,this.b))},
$S:0}
A.e4x.prototype={
$0(){var w=this.a
w.d=this.b
w.atl(0)},
$S:0}
A.e4H.prototype={
$0(){return this.a.bZF(0,this.b.a)},
$S:0}
A.dh_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[B.o.ak(d,100)].b,i=k[B.o.J(d,100)].b,h=i.aD(0,j),g=new C.v(-h.b,h.a).ey(0,Math.max(h.gcj(),1))
for(k=(e-1)/2,w=g.a,v=g.b,u=j.a,t=j.b,s=i.a,r=i.b,q=this.b.a,p=0;p<e;++p){o=(p-k)*8
n=w*o
o=v*o
$.a1()
m=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
m.r=B.aj.gt(0)
m.c=4
m.d=B.bZ
l=m.M()
q.drawLine.apply(q,[u+n,t+o,s+n,r+o,l])
l.delete()}},
$S:132}
A.dGd.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dGc(w,d))},
$S:131}
A.dGc.prototype={
$0(){var w=C.aQ(J.q(this.b,"best"))
w=w==null?null:B.k.L(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
A.dG2.prototype={
$0(){var w,v,u=J.dZ(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.apY[w.aA(4)]
return B.d.fM(u)},
$S:22}
A.dG1.prototype={
$1(d){return A.fG5(d)==="*"},
$S:3}
A.dG3.prototype={
$1(d){return d!==this.a},
$S:3}
A.dG0.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
A.v6("dna_lab",C.E(["best",r],x.N,x.z))}r=s.d
A.v9("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga6D()[r]+" codes for "+C.t(D.AO.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.aX3()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.K)(w),++u)r.push(D.AO.h(0,w[u]))
r="Protein built: "+B.d.aG(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
A.v9("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
A.dGb.prototype={
$3$ghost(d,e,f){var w=null,v=f?B.du:e,u=C.m(8),t=f?C.H(B.be,B.r,1):w
return C.p(B.B,C.d(d,w,w,w,w,w,w,C.l(w,w,f?B.be:B.w,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.h,w,w,new C.o(v,w,t,u,w,w,B.n),w,40,w,B.mz,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1809}
A.dG6.prototype={
$1(d){var w=D.d1A.h(0,d)
return w==null?B.c:w},
$S:712}
A.dG7.prototype={
$0(){var w=this.a
return w.n(new A.dG5(w,this.b))},
$S:0}
A.dG5.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.asM()},
$S:0}
A.dG8.prototype={
$0(){var w=this.a
return w.n(new A.dG4(w))},
$S:0}
A.dG4.prototype={
$0(){var w=this.a;++w.e
w.asM()},
$S:0}
A.dG9.prototype={
$0(){return this.a.aUc(this.b)},
$S:0}
A.dGa.prototype={
$0(){return this.a.aUc(this.b)},
$S:0}
A.dJ2.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dJ1(w,d))},
$S:131}
A.dJ1.prototype={
$0(){var w=C.aQ(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
A.dIQ.prototype={
$0(){},
$S:0}
A.dIP.prototype={
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
A.dIR.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
B.d.a8(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
A.dIV.prototype={
$1(d){var w=this.a
return w.n(new A.dIU(w,d))},
$S:6}
A.dIU.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.dIW.prototype={
$1(d){var w=this.a
return w.n(new A.dIT(w,d))},
$S:6}
A.dIT.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.dIX.prototype={
$1(d){var w=this.a
return w.n(new A.dIS(w,d))},
$S:6}
A.dIS.prototype={
$0(){return this.a.z=this.b},
$S:0}
A.dIY.prototype={
$0(){return this.a.a7N("drought")},
$S:0}
A.dIZ.prototype={
$0(){return this.a.a7N("disease")},
$S:0}
A.dJ_.prototype={
$0(){return this.a.a7N("foxes")},
$S:0}
A.dJ0.prototype={
$0(){return this.a.a7N("rabbits")},
$S:0}
A.cYt.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.f5()
k.dZ(B.o.L(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.af()
p=k.af()
o=(r&1)===0?1:-1
o=B.k.J(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.af()
p=Math.sin(s+r*2)
n=new C.ma(new C.ez(e,l,l,B.cT,l,l,l,l,l,l,new C.F(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),B.a6,B.cn,new C.kc(1),l,l,l,l,B.cm,l)
n.fE()
n.a6(w,new C.v(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1811}
A.cYv.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this.a.c
if(l.length<2)return
w=$.a1()
v=C.a([],x.v)
u=new C.b0(w.r,B.aw,null,null,v)
for(w=this.b,t=w.a,s=w.c-t,r=w.d,w=r-w.b,q=0;q<l.length;++q){p=t+s*q/159
o=r-w*B.k.D(l[q][d]/e,0,1)
if(q===0){n=new C.bj(p,o)
v.push(n)
m=u.f
if(m!=null)n.bH(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}else{n=new C.av(p,o)
v.push(n)
m=u.f
if(m!=null)n.bH(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}}$.a1()
l=C.U()
l.b=B.ak
l.c=2.6
l.r=f.gt(0)
l.e=B.fl
this.c.b4(u,l)},
$S:1812}
A.cYu.prototype={
$3(d,e,f){var w=null,v=C.j1(w,w,w,w,C.dr(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),d),B.a6,B.cn,w,B.eM,B.cm)
v.fE()
v.a6(this.a,new C.v(f,this.b.b+2))},
$S:1813}
A.bBT.prototype={
$2(d,e){return d+e.a*e.b},
$S:1814}
A.f91.prototype={
$2(d,e){return e.a-d.a},
$S:1815}
A.duu.prototype={
$2(d,e){return d+e},
$S:74}
A.duH.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.n(new A.duG(v,B.k.D((v.gv3()-w[v.e].gu7())/Math.max(w[v.e].gu7(),8),-1,1)*0.32,u))},
$S:8}
A.duG.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
A.duI.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.duF(w,d))},
$S:131}
A.duF.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aU(v==null?B.cO:v)
while(v.C())w.push(B.k.L(C.f8(v.gT(v))))
return this.a.r.v(0,w)},
$S:0}
A.duv.prototype={
$0(){var w=this.a.f,v=this.b,u=B.o.J(w[v]+1,6)
w[v]=u
return u},
$S:0}
A.duA.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1816}
A.duB.prototype={
$0(){var w=this.a
return w.n(new A.duz(w))},
$S:0}
A.duz.prototype={
$0(){var w=this.a;++w.e
B.d.hi(w.f,0,5,0)},
$S:0}
A.duC.prototype={
$2(d,e){var w=null,v=this.a
return C.aJ(B.c4,C.b2(w,w,w,new A.b64(v.w,this.b.a,v.f,v.gv3()===v.d[v.e].gu7(),w),B.fk),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.duy(v,e),w,w,w,!1,B.ae)},
$S:33}
A.duy.prototype={
$1(d){var w=this.b.b,v=B.k.U((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cpv(v-1)},
$S:53}
A.duD.prototype={
$0(){var w=this.a
return w.n(new A.dux(w,this.b))},
$S:0}
A.dux.prototype={
$0(){var w=this.a
w.e=this.b
B.d.hi(w.f,0,5,0)},
$S:0}
A.duE.prototype={
$0(){var w=this.a
return w.n(new A.duw(w))},
$S:0}
A.duw.prototype={
$0(){return B.d.hi(this.a.f,0,5,0)},
$S:0}
A.cxw.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.c_(C.dy(new C.v(d,s),20,w),B.uX)
$.a1()
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=f.gt(0)
p=q.M()
u.drawRRect(C.fL(r),p)
p.delete()
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.b=B.ak
q.c=1.2
q.r=B.dx.gt(0)
p=q.M()
u.drawRRect(C.fL(r),p)
p.delete()
A.f86(v,"1",new C.v(d,s),B.bi,11)}},
$S:1817}
A.dMQ.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.n(new A.dMP(w,v))},
$S:8}
A.dMP.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
A.dMR.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dMO(w,d))},
$S:131}
A.dMO.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aU(v==null?B.cO:v)
while(v.C())w.push(B.k.L(C.f8(v.gT(v))))
return this.a.w.v(0,w)},
$S:0}
A.dMG.prototype={
$0(){var w=B.k.U(this.c)
this.a.d[this.b]=w
return w},
$S:0}
A.dMK.prototype={
$0(){var w=this.a
return w.n(new A.dMJ(w))},
$S:0}
A.dMJ.prototype={
$0(){return this.a.r++},
$S:0}
A.dML.prototype={
$0(){var w=this.a
return w.n(new A.dMI(w,this.b))},
$S:0}
A.dMI.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dMM.prototype={
$1(d){var w=this.a
return w.n(new A.dMH(w,d))},
$S:6}
A.dMH.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.dMN.prototype={
$1(d){return this.a.bZM(this.b,d)},
$S:6}
A.d4r.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bJm(d,e,f,g),m=this.b
$.a1()
w=C.U()
v=C.aq(h,B.c,i?0.1:0.35)
v.toString
u=C.aq(h,B.w,0.5)
u.toString
w.sav(new C.bS(B.B,0.5,B.x,null,0,C.a([v,h,u],x.O),null,null).aC(0,C.c2(d,e+6)))
m.b4(n,w)
w=C.U()
w.b=B.ak
w.c=1.5
w.r=B.aV.gt(0)
m.b4(n,w)
w=C.U()
w.r=B.w.j(0.28).gt(0)
m.aw(d,e*0.55,w)
for(w=d.a,v=d.b,u=m.a,t=0;t<4;++t){s=g+t*3.141592653589793/2
r=Math.cos(s)
q=Math.sin(s)
p=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=B.hT.gt(0)
p.c=3
o=p.M()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.U()
w.r=B.aJ.gt(0)
m.aw(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1818}
A.d4s.prototype={
$3(d,e,f){var w=this,v=w.b
return A.f86(w.a,d,new C.v(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1819}
A.dyG.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dyF(w,d))},
$S:131}
A.dyF.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aU(v==null?B.cO:v)
while(v.C())w.push(B.k.L(C.f8(v.gT(v))))
return this.a.Q.v(0,w)},
$S:0}
A.dyo.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jv(90-(w-65)):d},
$S:13}
A.dyx.prototype={
$1(d){return this.a.n(new A.dyw())},
$S:2}
A.dyw.prototype={
$0(){},
$S:0}
A.dyy.prototype={
$1(d){return this.a.n(new A.dyv())},
$S:2}
A.dyv.prototype={
$0(){},
$S:0}
A.dyz.prototype={
$0(){var w=this.a
return w.n(new A.dyu(w))},
$S:0}
A.dyu.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aT8()},
$S:0}
A.dyA.prototype={
$0(){var w=this.a
return w.n(new A.dyt(w))},
$S:0}
A.dyt.prototype={
$0(){return this.a.f=0},
$S:0}
A.dyB.prototype={
$0(){var w=this.a
return w.n(new A.dys(w))},
$S:0}
A.dys.prototype={
$0(){return this.a.f=1},
$S:0}
A.dyC.prototype={
$0(){var w=this.a
return w.n(new A.dyr(w,this.b))},
$S:0}
A.dyr.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dyD.prototype={
$1(d){var w=this.a
return w.n(new A.dyq(w,d))},
$S:6}
A.dyq.prototype={
$0(){return this.a.w=B.k.U(this.b)},
$S:0}
A.dyE.prototype={
$1(d){var w=this.a
w.n(new A.dyp(w,d))
if(w.ga74()&&w.Q.G(0,w.x)){A.v9("zap",9,220,0.45)
w=w.Q
w=C.A(w,C.a2(w).k("ck.E"))
A.v6("cipher_lab",C.E(["done",w],x.N,x.z))}},
$S:6}
A.dyp.prototype={
$0(){return this.a.z=B.k.U(this.b)},
$S:0}
A.bHe.prototype={
$1(d){return d.r<=0},
$S:z+62}
A.bHo.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+15}
A.bHk.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+15}
A.bHq.prototype={
$2(d,e){var w=this.a
return w.ci(0,d.a+"."+e,new A.bHr(w))},
$S:z+5}
A.bHr.prototype={
$0(){return this.a.a},
$S:113}
A.bHp.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:86}
A.bHs.prototype={
$2(d,e){var w=this.a
return w.ci(0,this.b.$1(this.c.$2(d,e)),new A.bHt(w))},
$S:z+5}
A.bHt.prototype={
$0(){return this.a.a},
$S:113}
A.bHg.prototype={
$2(d,e){var w=this.a
return w.ci(0,d.a+"."+e,new A.bHh(w))},
$S:z+5}
A.bHh.prototype={
$0(){return this.a.a},
$S:113}
A.bHf.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:86}
A.bHi.prototype={
$2(d,e){var w=this.a
return w.ci(0,this.b.$1(this.c.$2(d,e)),new A.bHj(w))},
$S:z+5}
A.bHj.prototype={
$0(){return this.a.a},
$S:113}
A.bHn.prototype={
$1(d){return d.b===this.a},
$S:z+1}
A.bHm.prototype={
$1(d){return d.ax>=this.a&&!d.x},
$S:z+1}
A.bHl.prototype={
$1(d){return d.b===this.a},
$S:z+1}
A.bCG.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
A.bCH.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+9}
A.cf3.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:191}
A.bCD.prototype={
$2(d,e){if(d==="short"){A.e1(1800,"",120,0,0.55,"noise")
A.e1(200,"",160,2.2,0.4,"saw")
C.fU()}if(d==="burn"){A.e1(140,"",320,0,0.6,"noise")
A.e1(900,"",160,1.5,0.35,"square")}},
$S:z+65}
A.bCE.prototype={
$0(){},
$S:0}
A.bCc.prototype={
$0(){},
$S:0}
A.bCF.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
A.bCB.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ap(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aJ(B.c4,C.b2(p,p,p,new A.aOG(w,v,u,t,s,r==null?B.m4:r,p),n),B.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,new A.bCw(o),new A.bCx(o),new A.bCy(o),p,p,p,p,p,p,p,p,p,p,new A.bCz(o),p,p,p,!1,B.ae)],q)
if(o.a.c.a.length===0)n.push(D.aWq)
if(o.e!=null)n.push(C.an(8,o.aUf(C.B(C.a([D.bly,new A.fe(B.Xd,"Cut wire",new A.bCA(o),B.cN,p)],q),B.m,p,B.e,B.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.an(8,o.c89(w),p,p,10,10,p,p))}return C.jy(new C.am(B.V,p,B.aX,B.q,n,p),B.q,p)},
$S:443}
A.bCx.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b1M(s)
if(r!=null){t.n(new A.bCu(t,r,d))
return}w=t.aWJ(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.v(v*u.a,w.d*u.b).aD(0,s)
t.n(new A.bCv(t,w))}},
$S:40}
A.bCu.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
A.bCv.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bCy.prototype={
$1(d){var w=this.a
if(w.f!=null)w.n(new A.bCs(w,d))
else if(w.w!=null)w.n(new A.bCt(w,d.b.ap(0,w.x)))},
$S:18}
A.bCs.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
A.bCt.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=B.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=B.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
A.bCw.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b1M(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.azx(u.a,u.b,v.a,v.b)!=null)A.e1(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.ab6()},
$S:36}
A.bCz.prototype={
$1(d){var w=this.a,v=d.b,u=w.aWJ(v)
if(u!=null){w.n(new A.bCq(w,u))
w.a.toString
return}w.n(new A.bCr(w,w.cug(v)))},
$S:53}
A.bCq.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
A.e1(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
A.e1(200,"",70,0,0.2,"saw")}},
$S:0}
A.bCr.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
A.bCA.prototype={
$0(){var w=this.a
B.d.W(w.a.c.b,w.e)
w.e=null
A.e1(300,"",50,0,0.35,"noise")
w.ab6()},
$S:0}
A.bCC.prototype={
$0(){return this.a.biO(this.b)},
$S:0}
A.bCn.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.B(C.a([C.d(d,w,w,w,w,w,w,D.exg,w,w,w),C.D(C.m8(this.b.d,w,w,g,h,new A.bCp(this.a,f),B.k.D(e,h,g)),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1820}
A.bCp.prototype={
$1(d){var w=this.a
w.n(new A.bCo(this.b,d))
w.a.toString},
$S:6}
A.bCo.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.bCg.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
A.e1(260,"",70,0,0.35,"noise")
w.ab6()},
$S:0}
A.bCh.prototype={
$0(){var w=this.a
return w.n(new A.bCf(w))},
$S:0}
A.bCf.prototype={
$0(){return this.a.d=null},
$S:0}
A.bCi.prototype={
$0(){var w=this.a
w.n(new A.bCe(this.b,this.c))
w.a.toString},
$S:0}
A.bCe.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.bCj.prototype={
$0(){var w=this.a
w.n(new A.bCd(this.b,this.c))
w.a.toString},
$S:0}
A.bCd.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.bCk.prototype={
$1(d){return this.a.f=d},
$S:6}
A.bCl.prototype={
$1(d){return this.a.f=d},
$S:6}
A.bCm.prototype={
$1(d){return this.a.f=d},
$S:6}
A.f_t.prototype={
$1(d){return d.aCg("bulb")},
$S:z+2}
A.f_u.prototype={
$1(d){return d.aBq(0,"switch")&&d.aCg("bulb")},
$S:z+2}
A.f_v.prototype={
$1(d){return B.d.bf(d.a,new A.f_j())},
$S:z+2}
A.f_j.prototype={
$1(d){return d.b==="motor"&&d.ax>0.3},
$S:z+1}
A.f_w.prototype={
$1(d){return d.aBq(0,"resistor")&&B.d.bf(d.a,new A.f_i())},
$S:z+2}
A.f_i.prototype={
$1(d){return d.b==="led"&&d.ax>0.3&&!d.x},
$S:z+1}
A.f_x.prototype={
$1(d){return!d.aBq(0,"battery")&&d.aCg("bulb")},
$S:z+2}
A.f_n.prototype={
$1(d){return B.d.bf(d.a,new A.f_h())},
$S:z+2}
A.f_h.prototype={
$1(d){return d.b==="radio"&&d.ax>0},
$S:z+1}
A.f_o.prototype={
$1(d){return B.d.bf(d.a,new A.f_g())},
$S:z+2}
A.f_g.prototype={
$1(d){return d.b==="tv"&&d.ax>0},
$S:z+1}
A.f_p.prototype={
$1(d){return B.d.bf(d.a,new A.f_f())},
$S:z+2}
A.f_f.prototype={
$1(d){return d.b==="heater"&&d.ax>0.5},
$S:z+1}
A.dJ8.prototype={
$0(){},
$S:0}
A.dJ7.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.m(22),o=x.p,n=C.a([D.eZo,B.au,D.eLq,B.T],o)
for(w=this.a,v=0;v<12;++v){u=D.Nn[v]
t=B.c.j(0.06)
s=new C.b3(14,14)
r=new C.ax(B.bG,1,B.r,-1)
n.push(C.aJ(q,C.p(q,C.u(C.a([new C.w(u.a,q,B.kd,q,q,q,q,q,q,q,q,q),B.by,new C.w(u.b,q,D.eD5,q,q,q,q,B.Z,q,3,q,q)],o),B.F,q,B.e,B.j,0,B.p),B.h,q,q,new C.o(t,q,new C.c1(r,r,r,r),new C.bu(s,s,s,s),q,q,B.n),q,q,q,B.cH,B.bk,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.dJ6(w,d,u),q,q,q,q,q,q,!1,B.ae))}return C.ev(q,D.aac,new C.C(B.c1,new C.a3(340,q,C.cK(n,q,q,q,q,B.ah,!0),q),q),q,q,q,q,B.cX,q,new C.b5(p,B.W),q)},
$S:46}
A.dJ6.prototype={
$0(){C.a7(this.b,!1).K(null)
var w=this.a
w.n(new A.dJ5(w,this.c))
A.e1(800,"",120,-0.5,0.3,"square")},
$S:0}
A.dJ5.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bcc()},
$S:0}
A.dJa.prototype={
$0(){var w=this.a
return w.n(new A.dJ9(w,this.b))},
$S:0}
A.dJ9.prototype={
$0(){var w,v=this.a
if(this.b)w=v.f+1
else{$.bzP()
w=Math.min(8,v.f+1)}return v.f=w},
$S:0}
A.dJb.prototype={
$0(){var w=this.a
return w.n(w.d.gcKK())},
$S:0}
A.dJc.prototype={
$0(){var w=this.a,v=w.d
return w.n(v.gqM(v))},
$S:0}
A.dY8.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new A.dY7(w,d))},
$S:131}
A.dY7.prototype={
$0(){var w=this.a,v=this.b,u=J.a6(v),t=C.aQ(u.h(v,"best"))
t=t==null?null:B.k.L(t)
w.e=t==null?0:t
v=C.aQ(u.h(v,"level"))
v=v==null?null:B.k.L(v)
if(v==null)v=0
w.d=v
w.f=A.fGz(v)},
$S:0}
A.dY9.prototype={
$0(){},
$S:0}
A.dXZ.prototype={
$0(){var w=this.a,v=B.o.D(this.b,0,59)
w.d=v
w.f=A.fGz(v)
w.r.a8(0)
w.x=!1},
$S:0}
A.dY_.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.guE().r){C.jC()
return}q.m(0,p,"/")}else if(o==="/")q.m(0,p,"\\")
else q.W(0,p)
A.v9("click",s.c+s.d,60,0.4)
if(A.h4n(r.guE(),q).b.a===r.guE().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}A.v6("laser_maze",C.E(["best",p,"level",Math.min(q,59)],x.N,x.z))
A.At("bell",D.ajI,700,0.45)
for(q=r.guE().c,q=C.ef(q,q.r,C.a2(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.z(new C.v((B.o.J(t,7)+0.5)*p+w,(B.o.ak(t,7)+0.5)*p+v),0))}}},
$S:0}
A.dY2.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.ap(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aJ(B.c4,C.b2(s,s,s,new A.bda(r.guE(),w,v.a,u,r.w,r.z,s),q),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.dY0(r),s,s,s,!1,B.ae),C.an(s,C.e3(C.B(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,E.aJn,s,s,s),C.d(""+u.a+"/"+r.guE().c.a+" \u2605   mirrors "+w.a+"/"+r.guE().r,s,s,s,s,s,s,P.a3I,s,s,s)],t),B.m,s,B.hv,B.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(A.f3G("Beam delivered! \u2605","Level "+(r.d+1)+" done.",B.bt,C.a([new A.fe(B.je,"Next level",new A.dY1(r),B.bt,s)],t)))
return new C.am(B.V,s,B.aX,B.q,w,s)},
$S:61}
A.dY0.prototype={
$1(d){return this.a.c_1(d.b)},
$S:53}
A.dY1.prototype={
$0(){var w=this.a
return w.ab8(w.d+1)},
$S:0}
A.dY3.prototype={
$0(){var w=this.a,v=w.r
return w.n(v.gqM(v))},
$S:0}
A.dY4.prototype={
$0(){var w=this.a
return w.ab8(w.d+1)},
$S:0}
A.dY5.prototype={
$0(){var w=this.a
return w.ab8(w.d-1)},
$S:0}
A.dY6.prototype={
$0(){return this.a.ab8(this.b)},
$S:0}
A.d9f.prototype={
$1(d){var w=this.b
return new C.v(this.a+(B.o.J(d,7)+0.5)*w,this.c+(B.o.ak(d,7)+0.5)*w)},
$S:713}
A.d9i.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.v(r,s):new C.v(r,r),p=new C.v(-q.a,-q.b)
r=this.c
w=t.ap(0,q)
v=t.ap(0,p)
$.a1()
u=C.U()
u.r=(f?B.j8:B.aJ).gt(0)
u.c=7
u.d=B.bZ
r.bU(w,v,u)
w=t.ap(0,q)
v=t.ap(0,p)
u=C.U()
u.r=B.c.gt(0)
u.c=2.4
u.d=B.bZ
r.bU(w,v,u)},
$S:1822}
A.d9g.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:457}
A.d9h.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:457}
A.dYr.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dYq(w,d))},
$S:131}
A.dYq.prototype={
$0(){var w=C.aQ(J.q(this.b,"best"))
w=w==null?null:B.k.L(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
A.dYs.prototype={
$0(){},
$S:0}
A.dYc.prototype={
$1(d){return d===0},
$S:126}
A.dYl.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.x(1,q[0],q[1],q[2],B.t)
q=C.d("ROUND "+C.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,E.a3V,s,s,s)
w=r.z==="play"?B.k.dF(r.y):20
v=x.p
w=C.B(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?B.cN:B.c,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,P.a3I,s,s,s)],v),B.m,s,B.hv,B.j,0,s,s)
q=r.z==="ready"
u=q?B.du:p
t=C.m(22)
t=C.D(C.p(s,s,B.h,s,s,new C.o(u,s,C.H(B.be,B.r,2),t,s,s,B.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.u(C.a([new C.C(D.bfG,w,s),C.D(C.B(C.a([C.D(new C.C(B.bT,C.u(C.a([t,B.ar,C.d(q?"TARGET":"TARGET: "+r.gcpy(),s,s,s,s,s,s,D.aK8,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),1),C.D(new C.C(B.bT,C.u(C.a([C.D(C.b2(s,s,s,new A.bdp(r.f,s),B.fk),1),B.ar,C.d("YOURS \xb7 "+B.k.U(B.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aK8,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),1)],v),B.m,s,B.e,B.j,0,s,s),1)],v),B.m,s,B.e,B.j,0,B.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(A.f3G("Light Mixer","Match each colour with red, green and blue light."+q,B.bd,C.a([new A.fe(B.iG,"Start",new A.dYi(r),B.bt,s)],v)))}if(r.z==="result")w.push(A.f3G(r.Q,"Score so far: "+r.w,B.aM,C.a([new A.fe(B.je,"Next colour",new A.dYj(r),B.bt,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(A.f3G("Finished! "+q,u,B.bt,C.a([new A.fe(B.m_,"Play again",new A.dYk(r),B.bt,s)],v)))}return new C.am(B.V,s,B.a9,B.q,w,s)},
$S:61}
A.dYi.prototype={
$0(){var w=this.a
return w.n(new A.dYe(w))},
$S:0}
A.dYe.prototype={
$0(){var w=this.a
w.w=w.r=0
w.atn()},
$S:0}
A.dYj.prototype={
$0(){var w=this.a
return w.n(w.gc__())},
$S:0}
A.dYk.prototype={
$0(){var w=this.a
return w.n(new A.dYd(w))},
$S:0}
A.dYd.prototype={
$0(){var w=this.a
w.w=w.r=0
w.atn()},
$S:0}
A.dYm.prototype={
$1(d){var w=this.a
return w.n(new A.dYh(w,d))},
$S:6}
A.dYh.prototype={
$0(){var w=B.k.U(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
A.dYn.prototype={
$1(d){var w=this.a
return w.n(new A.dYg(w,d))},
$S:6}
A.dYg.prototype={
$0(){var w=B.k.U(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
A.dYo.prototype={
$1(d){var w=this.a
return w.n(new A.dYf(w,d))},
$S:6}
A.dYf.prototype={
$0(){var w=B.k.U(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
A.dYp.prototype={
$0(){var w=this.a
return w.n(w.gc_0())},
$S:0}
A.f0b.prototype={
$0(){return D.dGn},
$S:z+67}
A.f0c.prototype={
$0(){return D.ddL},
$S:z+68}
A.f0d.prototype={
$0(){return D.daj},
$S:z+69}
A.f0e.prototype={
$0(){return D.ddb},
$S:z+70}
A.f0f.prototype={
$0(){return D.di7},
$S:z+71}
A.f0g.prototype={
$0(){return D.dCg},
$S:z+72}
A.f0h.prototype={
$0(){return D.dEs},
$S:z+73}
A.f0i.prototype={
$0(){return D.dhr},
$S:z+74}
A.c9T.prototype={
$0(){return C.a7(this.a,!1).oZ()},
$S:0}
A.c9U.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.h7M(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.b3(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.aa(0,B.G,p.j(0.4),B.dl,16)],t)
n=B.c.j(0.85)
j.push(C.aJ(m,C.p(m,new C.am(B.V,m,B.a9,B.q,C.a([new C.cE(m,-6,-6,m,m,m,new C.w(r.c,m,I.QE,m,m,m,m,m,m,m,m,m),m),new C.bF(B.lb,m,m,C.u(C.a([new C.w(r.a,m,D.eHy,m,m,m,m,m,m,m,m,m),B.d4,new C.w(r.b,m,new C.F(!0,n,m,m,m,m,12,B.a0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),B.F,m,B.e,B.R,0,B.p),m)],k),m),B.h,m,m,new C.o(m,m,m,new C.bu(q,q,q,q),p,new C.a8(B.ax,B.aC,B.x,o,m,m),B.n),m,v,m,m,B.bA,m,m,l),B.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.c9S(d,r),m,m,m,m,m,m,!1,B.ae))}return C.cb(B.bH,j,B.bw,14,14)},
$S:168}
A.c9S.prototype={
$0(){return C.a7(this.a,!1).cs(C.eH(new A.c9R(this.b),!1,null,x.H))},
$S:0}
A.c9R.prototype={
$1(d){return this.a.f.$0()},
$S:43}
A.etH.prototype={
$0(){var w=this.a
return w.w=w.d[w.b_3(w.f)]},
$S:0}
A.etD.prototype={
$0(){var w=this.a
w.w=""
w.r=9+B.cA.af()*7},
$S:0}
A.etC.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bG(0,B.c_)
w.w=""},
$S:0}
A.etF.prototype={
$0(){var w=this.a
return w.n(new A.etE(w,this.b))},
$S:0}
A.etE.prototype={
$0(){var w=this.a.d
if(w.length>2)B.d.cu(w,this.b)},
$S:0}
A.etG.prototype={
$1(d){return this.a.aUA(0)},
$S:2}
A.dL8.prototype={
$0(){return A.At("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
A.dL9.prototype={
$0(){},
$S:0}
A.dL3.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
A.dL5.prototype={
$0(){return this.a.aUC(this.b)},
$S:0}
A.dL6.prototype={
$0(){var w=this.a
return w.n(new A.dL4(w))},
$S:0}
A.dL4.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
A.dL7.prototype={
$0(){var w=this.a
return w.aUC(w.d)},
$S:0}
A.dx6.prototype={
$2(d,e){return d+e},
$S:93}
A.dx7.prototype={
$0(){},
$S:0}
A.dx1.prototype={
$2(d,e){return d+e},
$S:93}
A.dx4.prototype={
$0(){var w=this.a
return w.n(new A.dx3(w,this.b))},
$S:0}
A.dx3.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
A.dx5.prototype={
$0(){var w=this.a
return w.n(new A.dx2(w))},
$S:0}
A.dx2.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
A.dIF.prototype={
$0(){return A.qi(this.b,this.a.d,"drawing")},
$S:0}
A.dIG.prototype={
$1(d){var w=this.a
return w.n(new A.dIE(w,d))},
$S:40}
A.dIE.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new A.aEX(u,v,t))},
$S:0}
A.dIH.prototype={
$1(d){var w=this.a
return w.n(new A.dID(w,d))},
$S:18}
A.dID.prototype={
$0(){return B.d.gai(this.a.e).c.push(this.b.b)},
$S:0}
A.dII.prototype={
$1(d){var w=this.a
return w.n(new A.dIC(w,d))},
$S:23}
A.dIC.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new A.aEX(u,v,t))},
$S:0}
A.dIJ.prototype={
$0(){var w=this.a
return w.n(new A.dIB(w,this.b))},
$S:0}
A.dIB.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
A.dIK.prototype={
$1(d){var w=this.a
return w.n(new A.dIA(w,d))},
$S:6}
A.dIA.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dIL.prototype={
$0(){var w=this.a
return w.n(new A.dIz(w))},
$S:0}
A.dIz.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
A.dIM.prototype={
$0(){var w=this.a
return w.n(new A.dIy(w))},
$S:0}
A.dIy.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
A.dIN.prototype={
$0(){var w=this.a
return w.n(B.d.gqM(w.e))},
$S:0}
A.dIO.prototype={
$0(){var w=this.a
return w.n(new A.dIx(w))},
$S:0}
A.dIx.prototype={
$0(){var w=this.a
w.x=D.aqp[B.o.J(B.d.cP(D.aqp,w.x)+1,4)]},
$S:0}
A.e2z.prototype={
$0(){return this.a.f.G(0,this.b)},
$S:0}
A.e2A.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
A.At("bell",C.a([0,4,7],w),500,0.45)
u.n(new A.e2y(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)A.At("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
A.e2y.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
A.e2B.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new A.e2x(w))},
$S:11}
A.e2x.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
A.e2F.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return C.aJ(w,C.mx(new A.e2D(v,e),w,B.b9,B.u4,w,new C.bm(0,u,x.e7),x.i),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e2E(v,e),w,w,w,w,w,w,!1,B.ae)},
$S:76}
A.e2E.prototype={
$0(){return this.a.c_U(this.b)},
$S:0}
A.e2D.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.de(),m=n.a
m.$flags&2&&C.ah(m)
m[11]=0.001
n.fk(3.141592653589793*e)
m=C.m(16)
w=o?p:D.bHb
if(o)v=q.a.r.q(0,q.b)?B.bt.j(0.25):B.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.H(u.r.q(0,t)?B.bt:B.be,B.r,1)
if(o){r=C.de()
r.fk(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fl(B.B,C.d(u[t],p,p,p,p,p,p,D.eEX,p,p,p),p,r,!0)
u=r}else u=D.eYe
return C.fl(B.B,C.p(B.B,u,B.h,p,p,new C.o(v,p,s,m,p,w,B.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:134}
A.e2G.prototype={
$0(){var w=this.a
return w.n(new A.e2C(w,this.b))},
$S:0}
A.e2C.prototype={
$0(){var w=this.a
w.d=this.b.a
w.aoS()},
$S:0}
A.e2H.prototype={
$0(){var w=this.a
return w.n(w.gbCT())},
$S:0}
A.eb3.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
A.eb4.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
A.eb1.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.eb2.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new A.eb0(w))},
$S:11}
A.eb0.prototype={
$0(){return this.a.f=-1},
$S:0}
A.eb5.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
A.eb6.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
A.eb7.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aUB()},
$S:11}
A.eb8.prototype={
$0(){return this.a.c0_(this.b)},
$S:0}
A.epl.prototype={
$1(d){return C.t(d.h(0,1))+","},
$S:69}
A.epu.prototype={
$3$big(d,e,f){var w=null,v=C.D(C.d(d,w,1,B.Z,w,w,w,C.l(w,w,B.aQ,w,w,w,w,w,w,w,w,f?16:14,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.C(B.ll,C.B(C.a([v,B.aa,new C.dl(1,B.cj,C.eX(B.B,C.d(e,w,w,w,w,w,w,C.l(w,w,B.c,w,w,w,w,w,w,w,w,f?30:18,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.h,B.e8),w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1824}
A.epq.prototype={
$1(d){return this.a.n(new A.epp())},
$S:2}
A.epp.prototype={
$0(){},
$S:0}
A.epr.prototype={
$0(){var w=this.a
return w.n(new A.epo(w,this.b))},
$S:0}
A.epo.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.eps.prototype={
$1(d){var w=this.a
return w.n(new A.epn(w,d))},
$S:6}
A.epn.prototype={
$0(){return this.a.f=B.k.U(this.b)},
$S:0}
A.ept.prototype={
$0(){var w=this.a
return w.n(new A.epm(w))},
$S:0}
A.epm.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
A.e1e.prototype={
$0(){},
$S:0}
A.e1f.prototype={
$0(){},
$S:0}
A.e17.prototype={
$0(){var w=this.a
return w.n(new A.e16(w))},
$S:0}
A.e16.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.bU(u,1,!1,x.S)
w.r=0.9
A.a60("hat",0.6)},
$S:0}
A.e18.prototype={
$0(){var w=this.a
return w.n(new A.e15(w))},
$S:0}
A.e15.prototype={
$0(){this.a.y=1.1
A.l_("bell",36,200,0.4)},
$S:0}
A.e19.prototype={
$0(){var w=this.a
return w.n(new A.e14(w))},
$S:0}
A.e14.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aA(Math.max(v,u)-t+1)
w.as=u
A.l_("bell",12+B.o.J(u,12),500,0.5)},
$S:0}
A.e1a.prototype={
$0(){var w=this.a
return w.n(new A.e13(w,this.b))},
$S:0}
A.e13.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
A.e1b.prototype={
$1(d){var w=this.a
return w.n(new A.e12(w,d))},
$S:6}
A.e12.prototype={
$0(){var w,v,u,t=this.a,s=t.e=B.k.U(this.b),r=J.dZ(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
A.e1c.prototype={
$1(d){var w=this.a
return w.n(new A.e11(w,d))},
$S:6}
A.e11.prototype={
$0(){return this.a.z=B.k.U(this.b)},
$S:0}
A.e1d.prototype={
$1(d){var w=this.a
return w.n(new A.e10(w,d))},
$S:6}
A.e10.prototype={
$0(){return this.a.Q=B.k.U(this.b)},
$S:0}
A.clZ.prototype={
$0(){return C.a7(this.a,!1).oZ()},
$S:0}
A.cm_.prototype={
$0(){var w=this.a
return A.hPm(this.b,w.c,w.e,w.d)},
$S:0}
A.fwt.prototype={
$1(d){var w,v=null,u=C.m(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,B.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.exM,v,v,v)
return C.eo(C.a([C.bG(!1,D.eOl,v,v,!0,v,v,new A.fws(d),v,v)],x.p),v,v,D.rn,w,v,v,v,new C.b5(u,new C.ax(s,1,B.r,-1)),t,v)},
$S:20}
A.fws.prototype={
$0(){C.a7(this.a,!1).K(null)
return null},
$S:0}
A.clV.prototype={
$0(){C.eG()
this.a.e.$0()},
$S:0}
A.clU.prototype={
$0(){C.eG()
this.a.e.$0()},
$S:0}
A.cm0.prototype={
$0(){C.eG()
this.a.e.$0()},
$S:0}
A.clW.prototype={
$0(){var w=this.a
B.d.W(w.fc$,this.b.b7())
if(w.c!=null)this.c.$0()},
$S:0}
A.clY.prototype={
$1(d){var w=this.a,v=d.a,u=B.k.D((v-w.ku$.a)/1e6,0,0.04)
w.ku$=d
w.fD$=B.o.ak(v,1000)
w.l_(u)
if(w.c!=null)w.n(new A.clX())},
$S:8}
A.clX.prototype={
$0(){},
$S:0}
A.c9N.prototype={
$2(d,e){var w,v,u,t
for(w=e.length,v=this.a,u=v.$flags|0,t=0;t<w;++t){u&2&&C.ah(v,9)
v.setUint8(d+t,e.charCodeAt(t))}},
$S:457}
A.c9P.prototype={
$0(){var w=this
return A.hlK(w.a,w.b,w.c,w.d,w.e)},
$S:323}
A.c9O.prototype={
$0(){var w=this
return A.l_(w.a,w.b,w.c,w.d)},
$S:1}
A.dNR.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dNQ(w,d))},
$S:z+76}
A.dNQ.prototype={
$0(){return this.a.cjX(this.b)},
$S:0}
A.dNj.prototype={
$0(){var w,v,u,t=this.a,s=J.a6(t),r=s.gH(t),q=new Float64Array(r*4)
for(w=0;w<s.gH(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:1825}
A.dNh.prototype={
$0(){return this.a.id=D.a_f},
$S:0}
A.dNi.prototype={
$0(){var w=this.b.a,v=C.T(w).k("a5<1>")
v=C.oI(new C.a5(w,new A.dNg(this.c),v),6,v.k("G.E"))
w=C.A(v,C.a2(v).k("G.E"))
return this.a.id=w},
$S:0}
A.dNg.prototype={
$1(d){return B.a.q(d.a.toLowerCase(),this.a)},
$S:z+77}
A.dNf.prototype={
$1(d){var w=null,v=C.cg(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,B.aj,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),B.q,w,B.z,w,w,w,w,B.ah)
return C.eo(C.a([C.bG(!1,B.pA,w,w,!0,w,w,new A.dNe(d),w,w)],x.p),w,w,D.rn,v,w,w,w,w,D.eYi,w)},
$S:20}
A.dNe.prototype={
$0(){C.a7(this.a,!1).K(null)
return null},
$S:0}
A.dNC.prototype={
$0(){return A.qi(this.b,this.a.d,"earth")},
$S:0}
A.dND.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ap(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gU4()
r=p.z
o=C.a([C.aJ(B.c4,C.b2(q,q,q,new A.bbC(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.dNq(p),new A.dNr(p),new A.dNs(p),q,q,q,q,q,q,q,new A.dNt(p),q,q,q,!1,B.ae)],x.p)
if(p.r==null)o.push(Ad.a7y)
w=this.b
if(w!=null)o.push(C.an(8,p.c0B(w),q,q,10,10,q,q))
return new C.en(new C.am(B.V,q,B.aX,B.q,o,q),p.d)},
$S:199}
A.dNr.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:334}
A.dNs.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=B.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gU4()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=B.k.D(u.x+v.b*w,-85,85)}},
$S:242}
A.dNq.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gU4()*u.z)
v=d.a.a
u.Q=B.k.D(-v.a*w,-160,160)
u.as=B.k.D(v.b*w,-100,100)},
$S:529}
A.dNt.prototype={
$1(d){var w=this.a,v=w.c0E(d.b)
if(v!=null)w.n(new A.dNk(w,v))
else w.n(new A.dNl(w))},
$S:53}
A.dNk.prototype={
$0(){return this.a.atO(this.b)},
$S:0}
A.dNl.prototype={
$0(){return this.a.fx=null},
$S:0}
A.dNE.prototype={
$0(){var w=this.a
w.e.bG(0,B.c_)
w.n(new A.dNp(w,this.b))},
$S:0}
A.dNp.prototype={
$0(){var w=this.a
w.id=D.a_f
w.atO(this.b)},
$S:0}
A.dNI.prototype={
$0(){var w=this.a
return w.n(new A.dNB(w))},
$S:0}
A.dNB.prototype={
$0(){var w=this.a
w.fx=null
w.aq1(15,w.y,1)},
$S:0}
A.dNJ.prototype={
$0(){var w=this.a
return w.n(new A.dNA(w,this.b))},
$S:0}
A.dNA.prototype={
$0(){var w=this.b.b
return this.a.aq1(w.a,w.b,w.c)},
$S:0}
A.dNK.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.n(new A.dNz(w,v))},
$S:0}
A.dNz.prototype={
$0(){var w=this.b.a
return this.a.atO(w[B.cA.aA(w.length)])},
$S:0}
A.dNL.prototype={
$1(d){var w=this.a
return w.n(new A.dNy(w,d))},
$S:6}
A.dNy.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
A.dNM.prototype={
$1(d){var w=this.a
return w.n(new A.dNx(w,d))},
$S:6}
A.dNx.prototype={
$0(){return this.a.dy=this.b},
$S:0}
A.dNN.prototype={
$1(d){var w=this.a
return w.n(new A.dNw(w,d))},
$S:6}
A.dNw.prototype={
$0(){return this.a.fr=this.b},
$S:0}
A.dNO.prototype={
$0(){var w=this.a
return w.n(new A.dNv(w))},
$S:0}
A.dNv.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
A.dNP.prototype={
$0(){var w=this.a
return w.n(new A.dNu(w))},
$S:0}
A.dNu.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
A.dNF.prototype={
$0(){var w=this.a
return w.n(new A.dNo(w))},
$S:0}
A.dNo.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
A.dNG.prototype={
$0(){var w=this.a
return w.n(new A.dNn(w))},
$S:0}
A.dNn.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
A.dNH.prototype={
$0(){var w=this.a
return w.n(new A.dNm(w))},
$S:0}
A.dNm.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
A.dNd.prototype={
$2(d,e){var w=null
return C.D(C.u(C.a([C.d(d,w,w,w,w,w,w,D.aIP,w,w,w),B.v4,C.d(e,w,2,B.Z,w,w,w,B.QU,w,w,w)],x.p),B.F,w,B.e,B.j,0,B.p),1)},
$S:129}
A.dNc.prototype={
$0(){var w=this.a
return w.n(new A.dNb(w))},
$S:0}
A.dNb.prototype={
$0(){return this.a.fx=null},
$S:0}
A.d5f.prototype={
$0(){var w=null,v=C.j1(w,w,w,w,C.dr(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,B.I,w,w,!0,w,w,w,w,w,D.cH8,w,w),this.a),B.a6,B.cn,w,B.eM,B.cm)
v.fE()
return v},
$S:328}
A.d5g.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.v(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1826}
A.f04.prototype={
$0(){return D.dfI},
$S:z+78}
A.f05.prototype={
$0(){return D.dEa},
$S:z+79}
A.f06.prototype={
$0(){return D.dfK},
$S:z+80}
A.f07.prototype={
$0(){return D.da5},
$S:z+81}
A.f08.prototype={
$0(){return D.dfG},
$S:z+82}
A.f09.prototype={
$0(){return D.dCh},
$S:z+83}
A.f0a.prototype={
$0(){return D.dCf},
$S:z+84}
A.epS.prototype={
$0(){return C.a7(this.a,!1).oZ()},
$S:0}
A.epT.prototype={
$0(){var w=this.a
return w.n(new A.epR(w))},
$S:0}
A.epR.prototype={
$0(){var w=this.a
return w.d=B.o.J(w.gaO_()+1,16)},
$S:0}
A.epU.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.h7L(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.b3(18,18)
q=s.d
p=new C.ax(q.j(0.5),1,B.r,-1)
o=C.a([q.j(0.28),D.b6Z],u)
k.push(C.aJ(n,C.p(n,C.u(C.a([C.V(s.c,q,n,n,n,30),B.P,new C.w(s.a,n,D.eC3,n,B.L,n,n,n,n,2,n,n),B.d4,new C.w(s.b,n,D.eGX,n,B.L,n,n,n,n,2,n,n)],l),B.m,n,B.b5,B.j,0,B.p),B.h,n,n,new C.o(n,n,new C.c1(p,p,p,p),new C.bu(r,r,r,r),n,new C.a8(B.ax,B.aC,B.x,o,n,n),B.n),n,v,n,n,B.ch,n,n,m),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.epQ(d,s),n,n,n,n,n,n,!1,B.ae))}return C.cb(B.fA,k,B.bw,10,10)},
$S:168}
A.epQ.prototype={
$0(){return C.a7(this.a,!1).cs(C.eH(new A.epP(this.b),!1,null,x.H))},
$S:0}
A.epP.prototype={
$1(d){return this.a.e.$0()},
$S:43}
A.eih.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
A.eis.prototype={
$0(){return A.qi(this.b,this.a.d,"solar-system")},
$S:0}
A.eit.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.ap(e.b,e.d)
u.ch=t
t=C.a([C.aJ(B.c4,C.b2(v,v,v,new A.bnQ(u,v),t),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.eip(u),new A.eiq(u),v,v,v,v,v,v,v,new A.eir(u),v,v,v,!1,B.ae)],x.p)
w=this.b
if(w!=null)t.push(C.an(8,u.c0G(w),v,v,10,10,v,v))
return new C.en(new C.am(B.V,v,B.aX,B.q,t,v),u.d)},
$S:199}
A.eip.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:334}
A.eiq.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=B.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ap(0,d.a)},
$S:242}
A.eir.prototype={
$1(d){var w=this.a,v=w.c0J(d.b)
if(v!=null)w.aUX(v)},
$S:53}
A.eiu.prototype={
$0(){var w=this.a
return w.n(new A.eio(w))},
$S:0}
A.eio.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=B.J
w.w=1},
$S:0}
A.eiv.prototype={
$0(){return this.a.aUX(this.b)},
$S:0}
A.eiw.prototype={
$1(d){var w=this.a
return w.n(new A.ein(w,d))},
$S:6}
A.ein.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
A.eix.prototype={
$1(d){var w=this.a
return w.n(new A.eim(w,d))},
$S:6}
A.eim.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eiy.prototype={
$0(){var w=this.a
return w.n(new A.eil(w))},
$S:0}
A.eil.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
A.eiz.prototype={
$0(){var w=this.a
return w.n(new A.eik(w))},
$S:0}
A.eik.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
A.eiA.prototype={
$0(){var w=this.a
return w.n(new A.eij(w))},
$S:0}
A.eij.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
A.eiB.prototype={
$0(){var w=this.a
return w.n(new A.eii(w))},
$S:0}
A.eii.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
A.eig.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=B.k.ab(d/365.25,w)+" Earth years"}else w=B.k.ab(d,0)+" Earth days"
return w},
$S:362}
A.eif.prototype={
$2(d,e){var w=null
return C.D(C.u(C.a([C.d(d,w,w,w,w,w,w,D.aIP,w,w,w),B.v4,C.d(e,w,2,B.Z,w,w,w,B.QU,w,w,w)],x.p),B.F,w,B.e,B.j,0,B.p),1)},
$S:129}
A.eie.prototype={
$0(){var w=this.a
return w.n(new A.eid(w))},
$S:0}
A.eid.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
A.eJG.prototype={
$0(){var w=null,v=C.j1(w,w,w,w,C.dr(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,B.I,w,w,!0,w,w,w,w,w,E.Nv,w,w),this.a),B.a6,B.cn,w,B.eM,B.cm)
v.fE()
return v},
$S:328}
A.eJH.prototype={
$1(d){return d.c>0},
$S:z+8}
A.eJI.prototype={
$1(d){return d.c>0},
$S:z+8}
A.dNV.prototype={
$0(){},
$S:0}
A.dOn.prototype={
$1(d){return d!=null},
$S:355}
A.dO9.prototype={
$0(){var w=this.a
return w.n(new A.dO0(w,this.b))},
$S:0}
A.dO0.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
A.dOa.prototype={
$0(){var w=this.a
return w.n(new A.dO_(w))},
$S:0}
A.dO_.prototype={
$0(){return this.a.f=!1},
$S:0}
A.dOb.prototype={
$0(){var w=this.a
return w.n(new A.dO8(w))},
$S:0}
A.dO8.prototype={
$0(){return this.a.f=!0},
$S:0}
A.dOf.prototype={
$0(){var w=this.a
return w.n(new A.dO7(w))},
$S:0}
A.dO7.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
A.dOg.prototype={
$1(d){var w=this.a
return w.n(new A.dO6(w,d))},
$S:6}
A.dO6.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dOh.prototype={
$0(){var w=this.a
return w.n(w.gcn3())},
$S:0}
A.dOi.prototype={
$1(d){var w=this.a
return w.n(new A.dO5(w,d))},
$S:6}
A.dO5.prototype={
$0(){return this.a.at=this.b},
$S:0}
A.dOj.prototype={
$1(d){var w=this.a
return w.n(new A.dO4(w,d))},
$S:6}
A.dO4.prototype={
$0(){return this.a.ax=this.b},
$S:0}
A.dOk.prototype={
$1(d){var w=this.a
return w.n(new A.dO3(w,d))},
$S:6}
A.dO3.prototype={
$0(){return this.a.ay=this.b},
$S:0}
A.dOl.prototype={
$1(d){var w=this.a
return w.n(new A.dO2(w,d))},
$S:6}
A.dO2.prototype={
$0(){return this.a.ch=this.b},
$S:0}
A.dOm.prototype={
$0(){var w=this.a
return w.n(new A.dO1(w))},
$S:0}
A.dO1.prototype={
$0(){return this.a.ay=4},
$S:0}
A.dOc.prototype={
$0(){var w=this.a
return w.n(new A.dNZ(w))},
$S:0}
A.dNZ.prototype={
$0(){return this.a.ay=7.67},
$S:0}
A.dOd.prototype={
$0(){var w=this.a
return w.n(new A.dNY(w))},
$S:0}
A.dNY.prototype={
$0(){return this.a.ay=9},
$S:0}
A.dOe.prototype={
$0(){var w=this.a
return w.n(new A.dNX(w))},
$S:0}
A.dNX.prototype={
$0(){return this.a.ay=11.3},
$S:0}
A.dNU.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bV(0,C.bQ(g,new C.o(D.b5K,g,g,C.m(20),g,g,B.n),B.b7),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.xv[q]
n=C.aX(o.d)
o=C.u(C.a([new C.w(o.a,g,new C.F(!0,n,g,g,g,g,12.5,B.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.w(C.t(D.xv[q].b)+" m/s\xb2",g,D.eGi,g,g,g,g,g,g,g,g,g)],a0),B.m,g,B.e,B.j,0,B.p)
n=p+t
m=C.p(g,g,B.h,B.du,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.V(Q.X_,C.aX(D.xv[q].d),g,g,g,22):C.p(g,g,B.h,g,g,new C.o(C.aX(D.xv[q].d),g,g,g,C.a([new C.aa(0,B.G,C.aX(D.xv[q].d).j(0.6),B.J,10)],u),g,B.a5),g,22,g,g,g,g,g,22)
j=C.p(g,g,B.h,C.aX(D.xv[q].d).j(0.6),g,g,g,3,g,B.fj,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=B.k.ab(i,2)+" s"
h=v[q]==null?"":"to land"
B.d.v(a1,C.a([new C.cE(p,8,g,g,f,g,o,g),new C.cE(n-0.5,54,g,e,g,g,m,g),new C.cE(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cE(p,g,g,8,f,g,C.u(C.a([j,B.au,new C.w(i,g,B.yi,g,g,g,g,g,g,g,g,g),new C.w(h,g,D.eyV,g,g,g,g,g,g,g,g,g)],a0),B.m,g,B.e,B.j,0,B.p),g)],a0))}if(!w.x&&B.d.e8(v,new A.dNT()))a1.push(D.aWH)
return new C.am(B.V,g,B.a9,B.q,a1,g)},
$S:61}
A.dNT.prototype={
$1(d){return d==null},
$S:355}
A.dNW.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=B.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.m(8)
p=C.p(v,v,B.h,v,v,new C.o(B.c.j(0.05),v,v,p,v,v,B.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.dg(v,v,v,v,B.b9,new C.o(v,v,v,C.m(8),v,new C.a8(B.a1,B.a7,B.x,C.a([C.aX(t).j(0.9),C.aX(t).j(0.4)],x.O),v,v),B.n),B.ie,v,26,v,v,v,v,e.b*q)
w=r<100?B.k.ab(r,1):A.Fe(r)
u=u.ax*9.81/s
u=u<10?B.k.ab(u,2):B.k.ab(u,0)
return new C.am(B.V,v,B.a9,B.q,C.a([p,t,C.an(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.eEI,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:61}
A.dNS.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b2(v,v,v,new A.b6S(new C.v(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),B.as)
o=B.w.j(0.55)
p=C.m(14)
q=C.H(B.bG,B.r,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(B.a.q(u,"forever")||B.a.q(u,"again"))u=B.bt
else u=B.a.q(u,"escapes")?B.b4:B.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=B.k.ab(Math.sqrt(58.86870477034412),1)
s=B.k.ab(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+A.Fe(B.k.D(r.cx.gcj()-6371,0,9e9))+" km":""
w=x.p
return new C.am(B.V,v,B.aX,B.q,C.a([n,C.an(v,C.p(v,C.u(C.a([u,B.by,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,F.aKo,v,v,v)],w),B.F,v,B.e,B.R,0,B.p),B.h,v,v,new C.o(o,v,q,p,v,v,B.n),v,v,v,v,B.bT,v,v,v),v,v,12,12,8,v)],w),v)},
$S:61}
A.ebb.prototype={
$0(){return A.qi(this.b,this.a.d,"size-compare")},
$S:0}
A.ebc.prototype={
$0(){var w=this.a
return w.n(new A.eba(w,this.b))},
$S:0}
A.eba.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.ebd.prototype={
$0(){var w=this.a
return w.n(new A.eb9(w,this.b))},
$S:0}
A.eb9.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.eHQ.prototype={
$3(d,e,f){var w,v,u=this.a
$.a1()
w=C.U()
w.r=f.j(0.2).gt(0)
w.z=new C.hF(B.G,Math.max(2,e*0.18))
u.aw(d,e*1.12,w)
w=C.U()
v=C.aq(f,B.w,0.6)
v.toString
w.sav(new C.bS(N.qY,0.5,B.x,null,0,C.a([B.c,f,v],x.O),F.Zv,null).aC(0,C.c2(d,e)))
u.aw(d,e,w)},
$S:711}
A.dwy.prototype={
$1(d){return d.e<=0},
$S:z+86}
A.dwm.prototype={
$1(d){return d.b},
$S:z+57}
A.dwn.prototype={
$0(){return A.qi(this.b,this.a.d,"black-hole")},
$S:0}
A.dwo.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ap(e.b,e.d)
p.Q=o
o=C.aJ(B.c4,C.b2(q,q,q,new A.b6f(p,q),o),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.dwk(p),q,q,q,q,q,q,q,q,q,new A.dwl(p),q,q,q,q,!1,B.ae)
w=B.w.j(0.55)
v=C.m(14)
u=C.H(B.bG,B.r,1)
t=p.r
if(t<1000)t=B.k.ab(t,t<10?1:0)+" Suns"
else t=A.faT(t)+" Suns"
t=p.abN("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.an(q,C.p(q,C.B(C.a([t,p.abN("EDGE WIDTH",(s<100?B.k.ab(s,1):A.Fe(s))+" km"),p.abN("TIME",B.k.ab(this.b*100,0)+"%"),p.abN("EATEN",""+p.as)],r),B.m,q,B.e,B.j,0,q,q),B.h,q,q,new C.o(w,q,u,v,q,q,B.n),q,q,q,q,B.bT,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.dQm)
return new C.en(new C.am(B.V,q,B.aX,B.q,r,q),p.d)},
$S:199}
A.dwl.prototype={
$1(d){return this.a.aUY(d.b)},
$S:23}
A.dwk.prototype={
$1(d){if(B.cA.af()<0.12)this.a.aUY(d.b)},
$S:18}
A.dwq.prototype={
$1(d){var w=this.a
return w.n(new A.dwj(w,d))},
$S:6}
A.dwj.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
A.dwr.prototype={
$0(){var w=this.a
return w.n(new A.dwi(w))},
$S:0}
A.dwi.prototype={
$0(){return this.a.r=10},
$S:0}
A.dws.prototype={
$0(){var w=this.a
return w.n(new A.dwh(w))},
$S:0}
A.dwh.prototype={
$0(){return this.a.r=21},
$S:0}
A.dwt.prototype={
$0(){var w=this.a
return w.n(new A.dwg(w))},
$S:0}
A.dwg.prototype={
$0(){return this.a.r=43e5},
$S:0}
A.dwu.prototype={
$0(){var w=this.a
return w.n(new A.dwf(w))},
$S:0}
A.dwf.prototype={
$0(){return this.a.r=65e8},
$S:0}
A.dwv.prototype={
$0(){var w=this.a
return w.n(new A.dwe(w))},
$S:0}
A.dwe.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
A.dww.prototype={
$0(){var w=this.a
return w.n(new A.dwd(w))},
$S:0}
A.dwd.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
A.dwx.prototype={
$0(){var w=this.a
return w.n(new A.dwc(w))},
$S:0}
A.dwc.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.dwp.prototype={
$0(){var w=this.a
return w.n(new A.dwb(w))},
$S:0}
A.dwb.prototype={
$0(){var w=this.a
B.d.a8(w.z)
w.as=0},
$S:0}
A.dMs.prototype={
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
$S:1827}
A.dMi.prototype={
$0(){return A.qi(this.b,this.a.d,"galaxy")},
$S:0}
A.dMj.prototype={
$0(){var w=this.a
return w.n(new A.dMh(w,this.b))},
$S:0}
A.dMh.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.XS()},
$S:0}
A.dMk.prototype={
$0(){var w=this.a
return w.n(new A.dMg(w))},
$S:0}
A.dMg.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.XS()}w.cmW()},
$S:0}
A.dMl.prototype={
$1(d){var w=this.a
return w.n(new A.dMf(w,d))},
$S:6}
A.dMf.prototype={
$0(){var w=this.a
w.f=B.k.U(this.b)
w.XS()},
$S:0}
A.dMm.prototype={
$1(d){var w=this.a
return w.n(new A.dMe(w,d))},
$S:6}
A.dMe.prototype={
$0(){var w=this.a
w.r=this.b
w.XS()},
$S:0}
A.dMn.prototype={
$1(d){var w=this.a
return w.n(new A.dMd(w,d))},
$S:6}
A.dMd.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.dMo.prototype={
$1(d){var w=this.a
return w.n(new A.dMc(w,d))},
$S:6}
A.dMc.prototype={
$0(){return this.a.ax=this.b},
$S:0}
A.dMp.prototype={
$0(){var w=this.a
return w.n(new A.dMb(w))},
$S:0}
A.dMb.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
A.dMq.prototype={
$0(){var w=this.a
return w.n(new A.dMa(w))},
$S:0}
A.dMa.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
A.dMr.prototype={
$0(){var w=this.a
return w.n(new A.dM9(w))},
$S:0}
A.dM9.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.d2o.prototype={
$6(d,e,f,g,h,i){return g.ap(0,new C.v((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1828}
A.eaS.prototype={
$0(){return A.qi(this.b,this.a.d,"seasons-moon")},
$S:0}
A.eaT.prototype={
$0(){var w=this.a
return w.n(new A.eaR(w))},
$S:0}
A.eaR.prototype={
$0(){return this.a.f="seasons"},
$S:0}
A.eaU.prototype={
$0(){var w=this.a
return w.n(new A.eaQ(w))},
$S:0}
A.eaQ.prototype={
$0(){return this.a.f="moon"},
$S:0}
A.eaV.prototype={
$0(){var w=this.a
return w.n(new A.eaP(w))},
$S:0}
A.eaP.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
A.eaW.prototype={
$0(){var w=this.a
return w.n(new A.eaO(w))},
$S:0}
A.eaO.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
A.eaX.prototype={
$1(d){var w=this.a
return w.n(new A.eaN(w,d))},
$S:6}
A.eaN.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.eaY.prototype={
$1(d){var w=this.a
return w.n(new A.eaM(w,d))},
$S:6}
A.eaM.prototype={
$0(){return this.a.z=this.b},
$S:0}
A.eaZ.prototype={
$1(d){var w=this.a
return w.n(new A.eaL(w,d))},
$S:6}
A.eaL.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eb_.prototype={
$1(d){var w=this.a
return w.n(new A.eaK(w,d))},
$S:6}
A.eaK.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=A.aIW.prototype
w.bpO=w.p
w=A.aHZ.prototype
w.boP=w.p
w=A.aI_.prototype
w.boQ=w.p
w=A.aI4.prototype
w.boV=w.p
w=A.aJJ.prototype
w.bqH=w.p
w=A.aIU.prototype
w.bpM=w.p
w=A.aJ2.prototype
w.bpV=w.p
w=A.aJ8.prototype
w.bq0=w.p
w=A.aI2.prototype
w.boT=w.p
w=A.aIR.prototype
w.bpJ=w.p
w=A.aJ5.prototype
w.bpY=w.p
w=A.aIP.prototype
w.bpH=w.p
w=A.aIQ.prototype
w.bpI=w.p
w=A.aIf.prototype
w.bp6=w.p
w=A.aHV.prototype
w.boL=w.p
w=A.aIn.prototype
w.bpe=w.p
w=A.auG.prototype
w.blZ=w.p
w=A.aIE.prototype
w.bpw=w.p
w=A.aIF.prototype
w.bpx=w.p
w=A.aI0.prototype
w.boR=w.p
w=A.aIi.prototype
w.bp9=w.p
w=A.aIN.prototype
w.bpF=w.p
w=A.aJf.prototype
w.bq7=w.p
w=A.aIo.prototype
w.bpg=w.p
w=A.aIp.prototype
w.bph=w.p
w=A.aIq.prototype
w.bpi=w.p
w=A.aIZ.prototype
w.bpR=w.p
w=A.aJ1.prototype
w.bpU=w.p
w=A.aHY.prototype
w.boO=w.p
w=A.aIl.prototype
w.bpc=w.p
w=A.aIY.prototype
w.bpQ=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i
w(A.aBc.prototype,"gasV","bXG",0)
var s
v(s=A.azE.prototype,"gc45","c46",36)
w(s,"gbYb","aTH",0)
w(A.azH.prototype,"gbZ7","bZ8",0)
u(A.azY.prototype,"gbZd","bZe",53)
w(s=A.aE7.prototype,"gcmE","cmF",0)
w(s,"gcaB","adb",0)
w(s,"gc8j","c8k",0)
w(s,"gbZc","aaU",4)
w(s=A.aBb.prototype,"gbA2","a6C",4)
w(s,"gc7B","aWz",0)
w(s,"gcbf","adk",4)
t(s,"gbZg","aaV",4)
w(A.aBp.prototype,"gbQQ","bQR",0)
w(s=A.aB4.prototype,"gcmy","cmz",0)
w(s,"gbAn","bAo",0)
w(s=A.azG.prototype,"gb_D","awd",0)
v(s,"gbZm","Xh",55)
w(s,"gbZl","aaX",4)
v(s=A.aB3.prototype,"gcd9","auX",59)
v(s,"gcjd","aw9",14)
w(s,"gbEj","aMC",0)
v(s=A.aB1.prototype,"gctt","agk",14)
t(s,"gbZG","atl",0)
w(s,"gcfn","cfo",0)
v(s=A.aA9.prototype,"gbZH","bZI",61)
w(s,"gbZJ","bZK",0)
t(s=A.a2c.prototype,"gqM","a8",0)
w(s,"gcKK","bcc",0)
w(s=A.aAa.prototype,"gbZO","bZP",0)
w(s,"gcdV","adG",4)
w(s=A.aAO.prototype,"gc__","atn",0)
w(s,"gc_0","aUg",0)
w(s=A.aBB.prototype,"gc_V","c_W",0)
t(s,"gc_T","aUA",0)
w(A.aAY.prototype,"gbCT","aoS",0)
t(A.aBg.prototype,"gc_X","c_Y",0)
v(s=A.aAl.prototype,"gc0C","c0D",75)
w(s,"gbHC","bHD",0)
w(s=A.aAm.prototype,"gcn3","cn4",0)
w(s,"gc0H","c0I",0)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(C.aB,[A.ahf,A.Ez,A.u7,A.aOH,A.a0W,A.b6j,A.bVY,A.x8,A.B3,A.mW,A.b71,A.zl,A.bow,A.pw,A.qb,A.B7,A.X6,A.acg,A.Zk,A.Bh,A.a9e,A.a9v,A.abp,A.Em,A.bhA,A.O0,A.YD,A.a9l,A.a9O,A.Ei,A.aaC,A.ab6,A.rA,A.b5T,A.aOw,A.mU,A.ve,A.a7X,A.a90,A.a2c,A.q_,A.b72,A.aSY,A.bpQ,A.aEX,A.m9,A.a8H,A.a8I,A.uk,A.Ni,A.x6,A.Nh,A.bpL,A.NK,A.acl])
v(C.i2,[A.fcU,A.f4I,A.fah,A.fai,A.fcR,A.fcS,A.dVa,A.dVt,A.e9Q,A.e9n,A.e9o,A.e9p,A.e9q,A.e9r,A.e9s,A.e9t,A.e9u,A.e9l,A.e9m,A.e9k,A.e9L,A.e9M,A.e9N,A.dwD,A.dwF,A.dwI,A.dwT,A.bVZ,A.bW_,A.f_k,A.f_l,A.f_m,A.f_q,A.f_r,A.f_s,A.dza,A.dyS,A.dzb,A.dyN,A.dyI,A.dyK,A.dyQ,A.dz2,A.dz0,A.dz1,A.dz_,A.dyX,A.dyZ,A.eHk,A.eH1,A.eH8,A.eHh,A.eGW,A.d8X,A.d8Y,A.d8U,A.d8V,A.d8W,A.d8Z,A.d9_,A.d90,A.d91,A.d92,A.d93,A.d94,A.d95,A.d96,A.e8M,A.e8N,A.e8O,A.e8P,A.e8K,A.e8L,A.e9g,A.e8T,A.e8V,A.e8F,A.e9c,A.e9a,A.e9b,A.e99,A.e98,A.e8H,A.ej1,A.ej_,A.eiO,A.eiS,A.eiN,A.eiT,A.eiU,A.eiY,A.epD,A.epJ,A.e5R,A.e5S,A.e5D,A.e5E,A.e5C,A.e5H,A.e5J,A.e5K,A.ep2,A.ep3,A.ep1,A.eoQ,A.eoR,A.eoP,A.eoI,A.eoJ,A.eoX,A.eoY,A.eoZ,A.ep_,A.ep0,A.dyj,A.dyk,A.dyl,A.dyc,A.dyf,A.cEZ,A.e1k,A.e1J,A.e1o,A.e1w,A.e1x,A.e1v,A.e1E,A.e5k,A.e5p,A.e4J,A.e4r,A.e4D,A.e4B,A.e4z,A.e4A,A.e4y,A.dGd,A.dG1,A.dG3,A.dGb,A.dG6,A.dJ2,A.dIV,A.dIW,A.dIX,A.cYt,A.cYv,A.cYu,A.duH,A.duI,A.duA,A.duy,A.cxw,A.dMQ,A.dMR,A.dMM,A.dMN,A.d4r,A.d4s,A.dyG,A.dyo,A.dyx,A.dyy,A.dyD,A.dyE,A.bHe,A.bHo,A.bHk,A.bHp,A.bHf,A.bHn,A.bHm,A.bHl,A.bCG,A.bCF,A.bCx,A.bCy,A.bCw,A.bCz,A.bCn,A.bCp,A.bCk,A.bCl,A.bCm,A.f_t,A.f_u,A.f_v,A.f_j,A.f_w,A.f_i,A.f_x,A.f_n,A.f_h,A.f_o,A.f_g,A.f_p,A.f_f,A.dJ7,A.dY8,A.dY0,A.d9f,A.d9i,A.dYr,A.dYc,A.dYm,A.dYn,A.dYo,A.c9R,A.etG,A.dIG,A.dIH,A.dII,A.dIK,A.e2D,A.epl,A.epu,A.epq,A.eps,A.e1b,A.e1c,A.e1d,A.fwt,A.clY,A.dNR,A.dNg,A.dNf,A.dNr,A.dNs,A.dNq,A.dNt,A.dNL,A.dNM,A.dNN,A.epP,A.eip,A.eiq,A.eir,A.eiw,A.eix,A.eig,A.eJH,A.eJI,A.dOn,A.dOg,A.dOi,A.dOj,A.dOk,A.dOl,A.dNT,A.eHQ,A.dwy,A.dwm,A.dwl,A.dwk,A.dwq,A.dMs,A.dMl,A.dMm,A.dMn,A.dMo,A.d2o,A.eaX,A.eaY,A.eaZ,A.eb_])
v(C.kx,[A.fcT,A.dVf,A.dVd,A.e9w,A.e9J,A.dyJ,A.dz5,A.dEp,A.eHn,A.eHo,A.eH0,A.eHd,A.eHe,A.eH9,A.eHf,A.eGV,A.e8I,A.e8J,A.e9f,A.e97,A.e8X,A.epC,A.e5G,A.eoT,A.dyb,A.dyg,A.e1A,A.e5o,A.fda,A.e4v,A.e4s,A.e4F,A.dh_,A.bBT,A.f91,A.duu,A.duC,A.bHq,A.bHs,A.bHg,A.bHi,A.bCH,A.cf3,A.bCD,A.bCB,A.dY2,A.d9g,A.d9h,A.dYl,A.c9U,A.dx6,A.dx1,A.e2F,A.c9N,A.dND,A.dNd,A.d5g,A.epU,A.eit,A.eif,A.dNU,A.dNW,A.dNS,A.dwo])
v(C.ae,[A.To,A.TP,A.Sh,A.Sm,A.Lv,A.aE6,A.TO,A.U2,A.Ue,A.TM,A.U9,A.Sk,A.TG,A.TL,A.TJ,A.SH,A.SX,A.Sc,A.Ta,A.Sl,A.ag2,A.SY,A.Tt,A.Tv,A.Uj,A.T4,A.Si,A.SW,A.TH,A.TT,A.Ud,A.TF,A.Tb,A.Uf,A.U1,A.Tc,A.TU,A.Sg,A.T8,A.TQ])
v(C.ag,[A.bg4,A.aIW,A.aHZ,A.aI4,A.azY,A.aJJ,A.aIU,A.aJ2,A.aJ8,A.aIR,A.aJ5,A.aI2,A.aIP,A.aIQ,A.aB1,A.bfz,A.aIf,A.aHV,A.aIn,A.bft,A.auG,A.aAa,A.aIE,A.aIF,A.aJf,A.aIi,A.aI0,A.bfA,A.aAY,A.aBg,A.bgO,A.aIN,A.aIo,A.bgR,A.aJ1,A.aIq,A.aIZ,A.aHY,A.aIl,A.aIY])
v(C.jk,[A.dV8,A.dV9,A.dVl,A.dVm,A.dVh,A.dVg,A.dVi,A.dVe,A.dVj,A.dVc,A.dVk,A.dVb,A.dVp,A.dVo,A.dVq,A.dVn,A.dVr,A.dVs,A.dVu,A.e9P,A.e9R,A.e9S,A.e9y,A.e9x,A.e9v,A.e9E,A.e9F,A.e9B,A.e9G,A.e9A,A.e9H,A.e9I,A.e9z,A.e9K,A.e9D,A.e9O,A.e9C,A.dx_,A.dwZ,A.dwC,A.dx0,A.dwE,A.dwG,A.dwH,A.dwJ,A.dwz,A.dwA,A.dwB,A.dwQ,A.dwR,A.dwS,A.dwP,A.dwU,A.dwO,A.dwV,A.dwN,A.dwW,A.dwM,A.dwX,A.dwL,A.dwY,A.dwK,A.dyP,A.dyO,A.dyT,A.dyL,A.dyM,A.dyU,A.dyV,A.dyW,A.dyR,A.dyH,A.dz4,A.dz3,A.dz6,A.dz7,A.dz8,A.dyY,A.dz9,A.cFr,A.dEn,A.dEm,A.dEo,A.f_I,A.f_J,A.f_K,A.f_V,A.f_Y,A.f_Z,A.f0_,A.f00,A.f01,A.f02,A.f03,A.f_L,A.f_M,A.f_N,A.f_O,A.f_P,A.f_Q,A.f_R,A.f_S,A.f_T,A.f_U,A.f_W,A.f_X,A.eHm,A.eHl,A.eH3,A.eH2,A.eGZ,A.eGY,A.eH_,A.eGX,A.eHb,A.eHa,A.eHc,A.eH4,A.eHg,A.eH7,A.eHi,A.eH6,A.eHj,A.eH5,A.e8R,A.e8G,A.e8Q,A.e8C,A.e8S,A.e8U,A.e8D,A.e8E,A.e9e,A.e9d,A.e94,A.e95,A.e96,A.e90,A.e91,A.e9_,A.e92,A.e8Z,A.e93,A.e8Y,A.e8W,A.d8T,A.ej0,A.eiD,A.eiC,A.eiM,A.eiV,A.eiL,A.eiW,A.eiK,A.eiX,A.eiJ,A.eiI,A.eiZ,A.eiH,A.eiP,A.eiG,A.eiQ,A.eiF,A.eiR,A.eiE,A.epB,A.epA,A.epE,A.epz,A.epF,A.epy,A.epG,A.epx,A.epH,A.epw,A.epI,A.epv,A.e5F,A.e5B,A.e5A,A.e5z,A.e5L,A.e5y,A.e5M,A.e5x,A.e5N,A.e5w,A.e5O,A.e5P,A.e5Q,A.e5v,A.e5I,A.eoS,A.eoH,A.eoU,A.eoO,A.eoV,A.eoN,A.eoW,A.eoM,A.eoL,A.eoK,A.eoG,A.eoF,A.eoE,A.dyi,A.dy9,A.dya,A.dyd,A.dye,A.dyh,A.e1y,A.e1p,A.e1z,A.e1B,A.e1u,A.e1C,A.e1t,A.e1D,A.e1s,A.e1r,A.e1F,A.e1q,A.e1G,A.e1n,A.e1H,A.e1m,A.e1I,A.e1l,A.e5e,A.e5f,A.e5m,A.e5l,A.e5n,A.e5j,A.e5q,A.e5i,A.e5r,A.e5h,A.e5s,A.e5t,A.e5g,A.e5u,A.e4I,A.e4p,A.e4q,A.e4u,A.e4t,A.e4E,A.e4C,A.e4w,A.e4G,A.e4x,A.e4H,A.dGc,A.dG2,A.dG0,A.dG7,A.dG5,A.dG8,A.dG4,A.dG9,A.dGa,A.dJ1,A.dIQ,A.dIP,A.dIR,A.dIU,A.dIT,A.dIS,A.dIY,A.dIZ,A.dJ_,A.dJ0,A.duG,A.duF,A.duv,A.duB,A.duz,A.duD,A.dux,A.duE,A.duw,A.dMP,A.dMO,A.dMG,A.dMK,A.dMJ,A.dML,A.dMI,A.dMH,A.dyF,A.dyw,A.dyv,A.dyz,A.dyu,A.dyA,A.dyt,A.dyB,A.dys,A.dyC,A.dyr,A.dyq,A.dyp,A.bHr,A.bHt,A.bHh,A.bHj,A.bCE,A.bCc,A.bCu,A.bCv,A.bCs,A.bCt,A.bCq,A.bCr,A.bCA,A.bCC,A.bCo,A.bCg,A.bCh,A.bCf,A.bCi,A.bCe,A.bCj,A.bCd,A.dJ8,A.dJ6,A.dJ5,A.dJa,A.dJ9,A.dJb,A.dJc,A.dY7,A.dY9,A.dXZ,A.dY_,A.dY1,A.dY3,A.dY4,A.dY5,A.dY6,A.dYq,A.dYs,A.dYi,A.dYe,A.dYj,A.dYk,A.dYd,A.dYh,A.dYg,A.dYf,A.dYp,A.f0b,A.f0c,A.f0d,A.f0e,A.f0f,A.f0g,A.f0h,A.f0i,A.c9T,A.c9S,A.etH,A.etD,A.etC,A.etF,A.etE,A.dL8,A.dL9,A.dL3,A.dL5,A.dL6,A.dL4,A.dL7,A.dx7,A.dx4,A.dx3,A.dx5,A.dx2,A.dIF,A.dIE,A.dID,A.dIC,A.dIJ,A.dIB,A.dIA,A.dIL,A.dIz,A.dIM,A.dIy,A.dIN,A.dIO,A.dIx,A.e2z,A.e2A,A.e2y,A.e2B,A.e2x,A.e2E,A.e2G,A.e2C,A.e2H,A.eb3,A.eb4,A.eb1,A.eb2,A.eb0,A.eb5,A.eb6,A.eb7,A.eb8,A.epp,A.epr,A.epo,A.epn,A.ept,A.epm,A.e1e,A.e1f,A.e17,A.e16,A.e18,A.e15,A.e19,A.e14,A.e1a,A.e13,A.e12,A.e11,A.e10,A.clZ,A.cm_,A.fws,A.clV,A.clU,A.cm0,A.clW,A.clX,A.c9P,A.c9O,A.dNQ,A.dNj,A.dNh,A.dNi,A.dNe,A.dNC,A.dNk,A.dNl,A.dNE,A.dNp,A.dNI,A.dNB,A.dNJ,A.dNA,A.dNK,A.dNz,A.dNy,A.dNx,A.dNw,A.dNO,A.dNv,A.dNP,A.dNu,A.dNF,A.dNo,A.dNG,A.dNn,A.dNH,A.dNm,A.dNc,A.dNb,A.d5f,A.f04,A.f05,A.f06,A.f07,A.f08,A.f09,A.f0a,A.epS,A.epT,A.epR,A.epQ,A.eih,A.eis,A.eiu,A.eio,A.eiv,A.ein,A.eim,A.eiy,A.eil,A.eiz,A.eik,A.eiA,A.eij,A.eiB,A.eii,A.eie,A.eid,A.eJG,A.dNV,A.dO9,A.dO0,A.dOa,A.dO_,A.dOb,A.dO8,A.dOf,A.dO7,A.dO6,A.dOh,A.dO5,A.dO4,A.dO3,A.dO2,A.dOm,A.dO1,A.dOc,A.dNZ,A.dOd,A.dNY,A.dOe,A.dNX,A.ebb,A.ebc,A.eba,A.ebd,A.eb9,A.dwn,A.dwj,A.dwr,A.dwi,A.dws,A.dwh,A.dwt,A.dwg,A.dwu,A.dwf,A.dwv,A.dwe,A.dww,A.dwd,A.dwx,A.dwc,A.dwp,A.dwb,A.dMi,A.dMj,A.dMh,A.dMk,A.dMg,A.dMf,A.dMe,A.dMd,A.dMc,A.dMp,A.dMb,A.dMq,A.dMa,A.dMr,A.dM9,A.eaS,A.eaT,A.eaR,A.eaU,A.eaQ,A.eaV,A.eaP,A.eaW,A.eaO,A.eaN,A.eaM,A.eaL,A.eaK])
u(A.bt7,A.aIW)
u(A.aBc,A.bt7)
v(C.n4,[A.bd7,A.b7j,A.bnX,A.b6_,A.bmD,A.bm5,A.b6G,A.bm7,A.bq_,A.bd5,A.bnS,A.bhn,A.boI,A.b70,A.be_,A.bho,A.beG,A.ba2,A.b64,A.bbv,A.aOG,A.bda,A.bdp,A.bra,A.bm6,A.bhB,A.bbC,A.bnQ,A.b6S,A.bno,A.b6f,A.bbs,A.bmG])
u(A.aI_,A.aHZ)
u(A.azE,A.aI_)
u(A.bsS,A.aI4)
u(A.azH,A.bsS)
v(C.mb,[A.IG,A.Z7])
v(C.ar,[A.bmZ,A.acq,A.abl,A.O9,A.bns,A.a61,A.b9o,A.b34,A.dx,A.eE,A.asP,A.fe,A.DR])
u(A.aE7,A.aJJ)
u(A.bd4,C.p0)
u(A.aBb,A.aIU)
u(A.bgF,A.aJ2)
u(A.aBp,A.aJ8)
u(A.bt6,A.aIR)
u(A.aB4,A.bt6)
u(A.bte,A.aJ5)
u(A.bgK,A.bte)
u(A.bsR,A.aI2)
u(A.azG,A.bsR)
u(A.bt4,A.aIP)
u(A.bgj,A.bt4)
u(A.bt5,A.aIQ)
u(A.aB3,A.bt5)
u(A.aA9,A.aIf)
u(A.bfg,A.aHV)
u(A.bfL,A.aIn)
u(A.b6h,A.auG)
u(A.ag3,A.b6h)
u(A.bsY,A.aIE)
u(A.bg6,A.bsY)
u(A.bsZ,A.aIF)
u(A.aAO,A.bsZ)
u(A.btf,A.aJf)
u(A.aBB,A.btf)
u(A.bsU,A.aIi)
u(A.bfG,A.bsU)
u(A.bsQ,A.aI0)
u(A.bfl,A.bsQ)
u(A.bt3,A.aIN)
u(A.bgh,A.bt3)
u(A.aIp,A.aIo)
u(A.aAl,A.aIp)
u(A.btb,A.aJ1)
u(A.bgE,A.btb)
u(A.bsW,A.aIq)
u(A.aAm,A.bsW)
u(A.bt9,A.aIZ)
u(A.bgB,A.bt9)
u(A.bsP,A.aHY)
u(A.bfk,A.bsP)
u(A.bsV,A.aIl)
u(A.bfJ,A.bsV)
u(A.bt8,A.aIY)
u(A.bgA,A.bt8)
w(A.aIW,C.c7)
w(A.bt7,A.m9)
w(A.aHZ,C.c7)
w(A.aI_,A.m9)
w(A.aI4,C.c7)
w(A.bsS,A.m9)
w(A.aJJ,C.eJ)
w(A.aIU,C.c7)
w(A.aJ2,C.c7)
w(A.aJ8,C.c7)
w(A.aI2,C.c7)
w(A.bsR,A.m9)
w(A.aIR,C.c7)
w(A.bt6,A.m9)
w(A.aJ5,C.c7)
w(A.bte,A.m9)
w(A.aIP,C.c7)
w(A.bt4,A.m9)
w(A.aIQ,C.c7)
w(A.bt5,A.m9)
w(A.aIf,C.c7)
w(A.aHV,C.c7)
w(A.aIn,C.c7)
w(A.auG,C.c7)
w(A.b6h,A.m9)
w(A.aIE,C.c7)
w(A.bsY,A.m9)
w(A.aIF,C.c7)
w(A.bsZ,A.m9)
w(A.aI0,C.c7)
w(A.bsQ,A.m9)
w(A.aIi,C.c7)
w(A.bsU,A.m9)
w(A.aIN,C.c7)
w(A.bt3,A.m9)
w(A.aJf,C.c7)
w(A.btf,A.m9)
w(A.aIo,C.c7)
w(A.aIp,A.m9)
w(A.aIq,C.c7)
w(A.bsW,A.m9)
w(A.aIZ,C.c7)
w(A.bt9,A.m9)
w(A.aJ1,C.c7)
w(A.btb,A.m9)
w(A.aHY,C.c7)
w(A.bsP,A.m9)
w(A.aIl,C.c7)
w(A.bsV,A.m9)
w(A.aIY,C.c7)
w(A.bt8,A.m9)})()
C.kd(b.typeUniverse,JSON.parse('{"To":{"ae":[],"r":[]},"bg4":{"ag":["To"]},"TP":{"ae":[],"r":[]},"aBc":{"ag":["TP"]},"bd7":{"az":[]},"Sh":{"ae":[],"r":[]},"azE":{"ag":["Sh"]},"Sm":{"ae":[],"r":[]},"azH":{"ag":["Sm"]},"b7j":{"az":[]},"acq":{"ar":[],"r":[]},"abl":{"ar":[],"r":[]},"aE6":{"ae":[],"r":[]},"Lv":{"ae":[],"r":[]},"azY":{"ag":["Lv"]},"bmZ":{"ar":[],"r":[]},"O9":{"ar":[],"r":[]},"bnX":{"az":[]},"bns":{"ar":[],"r":[]},"b6_":{"az":[]},"aE7":{"ag":["aE6"]},"bmD":{"az":[]},"bm5":{"az":[]},"b6G":{"az":[]},"bm7":{"az":[]},"bq_":{"az":[]},"TO":{"ae":[],"r":[]},"bd4":{"az":[]},"aBb":{"ag":["TO"]},"bd5":{"az":[]},"U2":{"ae":[],"r":[]},"Ue":{"ae":[],"r":[]},"bgF":{"ag":["U2"]},"bnS":{"az":[]},"aBp":{"ag":["Ue"]},"TM":{"ae":[],"r":[]},"U9":{"ae":[],"r":[]},"Sk":{"ae":[],"r":[]},"aB4":{"ag":["TM"]},"bhn":{"az":[]},"bgK":{"ag":["U9"]},"boI":{"az":[]},"azG":{"ag":["Sk"]},"b70":{"az":[]},"TG":{"ae":[],"r":[]},"TL":{"ae":[],"r":[]},"bgj":{"ag":["TG"]},"be_":{"az":[]},"aB3":{"ag":["TL"]},"bho":{"az":[]},"TJ":{"ae":[],"r":[]},"SH":{"ae":[],"r":[]},"SX":{"ae":[],"r":[]},"aB1":{"ag":["TJ"]},"beG":{"az":[]},"bfz":{"ag":["SH"]},"aA9":{"ag":["SX"]},"ba2":{"az":[]},"Sc":{"ae":[],"r":[]},"Ta":{"ae":[],"r":[]},"Sl":{"ae":[],"r":[]},"bfg":{"ag":["Sc"]},"b64":{"az":[]},"bfL":{"ag":["Ta"]},"bbv":{"az":[]},"bft":{"ag":["Sl"]},"aOG":{"az":[]},"ag2":{"ae":[],"r":[]},"ag3":{"ag":["ag2"]},"SY":{"ae":[],"r":[]},"aAa":{"ag":["SY"]},"Tt":{"ae":[],"r":[]},"Tv":{"ae":[],"r":[]},"bg6":{"ag":["Tt"]},"bda":{"az":[]},"aAO":{"ag":["Tv"]},"bdp":{"az":[]},"a61":{"ar":[],"r":[]},"Uj":{"ae":[],"r":[]},"T4":{"ae":[],"r":[]},"Si":{"ae":[],"r":[]},"SW":{"ae":[],"r":[]},"TH":{"ae":[],"r":[]},"TT":{"ae":[],"r":[]},"Ud":{"ae":[],"r":[]},"TF":{"ae":[],"r":[]},"aBB":{"ag":["Uj"]},"bra":{"az":[]},"bfG":{"ag":["T4"]},"bm6":{"az":[]},"bfl":{"ag":["Si"]},"bfA":{"ag":["SW"]},"bhB":{"az":[]},"aAY":{"ag":["TH"]},"aBg":{"ag":["TT"]},"bgO":{"ag":["Ud"]},"bgh":{"ag":["TF"]},"b9o":{"ar":[],"r":[]},"b34":{"ar":[],"r":[]},"dx":{"ar":[],"r":[]},"eE":{"ar":[],"r":[]},"asP":{"ar":[],"r":[]},"fe":{"ar":[],"r":[]},"DR":{"ar":[],"r":[]},"Tb":{"ae":[],"r":[]},"aAl":{"ag":["Tb"]},"bbC":{"az":[]},"Uf":{"ae":[],"r":[]},"bgR":{"ag":["Uf"]},"U1":{"ae":[],"r":[]},"Tc":{"ae":[],"r":[]},"TU":{"ae":[],"r":[]},"bgE":{"ag":["U1"]},"bnQ":{"az":[]},"aAm":{"ag":["Tc"]},"b6S":{"az":[]},"bgB":{"ag":["TU"]},"bno":{"az":[]},"Sg":{"ae":[],"r":[]},"T8":{"ae":[],"r":[]},"TQ":{"ae":[],"r":[]},"bfk":{"ag":["Sg"]},"b6f":{"az":[]},"bfJ":{"ag":["T8"]},"bbs":{"az":[]},"bgA":{"ag":["TQ"]},"bmG":{"az":[]}}'))
C.Oh(b.typeUniverse,JSON.parse('{"m9":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.aA
return{F:w("cX"),G:w("x"),l:w("bt<n,n>"),J:w("bt<n,Q>"),I:w("bt<n,I>"),Z:w("a_"),M:w("N<d3>"),f5:w("N<afV>"),gh:w("N<aOw>"),Y:w("N<a0W>"),V:w("N<aa>"),O:w("N<x>"),dh:w("N<QQ>"),aJ:w("N<au<aB>>"),w:w("N<a_>"),k:w("N<ak<x>>"),x:w("N<ak<QQ>>"),gO:w("N<ak<ak<Q>>>"),bj:w("N<ak<n>>"),b:w("N<ak<Q>>"),ez:w("N<a0<n,aB>>"),g:w("N<v>"),bz:w("N<ve>"),ds:w("N<apX>"),v:w("N<hw>"),R:w("N<+(v,Q)>"),ev:w("N<+(v,I)>"),L:w("N<+(n,n)>"),fT:w("N<+(Q,r)>"),T:w("N<+(I,n)>"),u:w("N<+(I,I)>"),c:w("N<+(n,n,a_)>"),e:w("N<+(n,Q,Q,I)>"),o:w("N<+(n,I,n,I)>"),d:w("N<+(n,n,Q,Q,a0<n,Q>)>"),_:w("N<u7>"),q:w("N<cJ>"),fQ:w("N<a7X>"),s:w("N<n>"),cF:w("N<ao>"),X:w("N<vo>"),B:w("N<a8H>"),p:w("N<r>"),bL:w("N<a90>"),C:w("N<l2>"),aq:w("N<b5T>"),a_:w("N<a9e>"),cS:w("N<a9l>"),cB:w("N<mW>"),ba:w("N<a9v>"),d9:w("N<NK>"),bi:w("N<a9O>"),eW:w("N<B7>"),fY:w("N<X6>"),aX:w("N<Ei>"),ea:w("N<aaC>"),gB:w("N<ab6>"),ed:w("N<O0>"),g4:w("N<bhA>"),aS:w("N<YD>"),ac:w("N<abp>"),cd:w("N<Bh>"),fr:w("N<acg>"),e4:w("N<Zk>"),r:w("N<acl>"),au:w("N<aEX>"),f7:w("N<R>"),n:w("N<Q>"),t:w("N<I>"),dS:w("N<az?>"),d4:w("N<n?>"),gJ:w("cn<ag3>"),A:w("cn<ag<ae>>"),bF:w("ak<x>"),ew:w("ak<aB>"),a:w("ak<@>"),bW:w("ak<I>"),h:w("a0<n,@>"),f:w("a0<@,@>"),bd:w("J<mU,n>"),dv:w("J<n,n>"),fR:w("J<+(Q,r),r>"),m:w("iA"),gA:w("y6"),P:w("co"),K:w("aB"),W:w("ve"),D:w("mU"),fA:w("AQ"),N:w("n"),bO:w("ao"),j:w("ma"),e7:w("bm<Q>"),cL:w("a8I"),gj:w("cv<n>"),dg:w("e2<qb>"),E:w("b6j"),a2:w("B3"),f3:w("qb"),es:w("Em"),U:w("mz"),y:w("R"),i:w("Q"),z:w("@"),S:w("I"),Q:w("ak<@>?"),fF:w("a0<@,@>?"),cK:w("aB?"),az:w("q0?"),dk:w("n?"),cD:w("Q?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aNX=new C.d3(0,0.85)
D.f2D=new C.w("Tap once to start the chain",null,E.QN,null,null,null,null,null,null,null,null,null)
D.aNv=new C.bF(D.aNX,null,null,D.f2D,null)
D.aNO=new C.d3(0,0.1)
D.aOQ=new A.aOH(0,0,0)
D.I7=new A.aOH(0,0.5,0)
D.aPn=new C.ax(B.bt,1,B.r,-1)
D.aQY=new C.aW(0,1/0,0,250)
D.aJK=new C.F(!0,B.c2,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWw=new C.w("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aJK,null,B.L,null,null,null,null,null,null,null)
D.dLo=new C.C(B.nl,D.eWw,null)
D.aWq=new C.cw(B.B,null,null,D.dLo,null)
D.eZY=new C.w("Press Drop! and watch them fall from 20 metres.",null,B.ke,null,B.L,null,null,null,null,null,null,null)
D.dLs=new C.C(B.nl,D.eZY,null)
D.aWH=new C.cw(B.B,null,null,D.dLs,null)
D.eHh=new C.F(!0,B.j9,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3n=new C.w("Draw anywhere",null,D.eHh,null,null,null,null,null,null,null,null,null)
D.aWL=new C.cw(B.B,null,null,D.f3n,null)
D.eNt=new C.w("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aJK,null,B.L,null,null,null,null,null,null,null)
D.dM5=new C.C(B.DH,D.eNt,null)
D.aX2=new C.cw(B.B,null,null,D.dM5,null)
D.a7Q=new C.x(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,B.t)
D.aYL=new C.x(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,B.t)
D.aZm=new C.x(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,B.t)
D.b_5=new C.x(1,1,0.16470588235294117,0.10196078431372549,B.t)
D.T1=new C.x(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,B.t)
D.b_a=new C.x(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,B.t)
D.b_e=new C.x(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,B.t)
D.b_i=new C.x(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,B.t)
D.T2=new C.x(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,B.t)
D.b0i=new C.x(1,0.16470588235294117,0.16470588235294117,0.2,B.t)
D.b1t=new C.x(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,B.t)
D.a8U=new C.x(1,1,0.23137254901960785,0.12156862745098039,B.t)
D.b1S=new C.x(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,B.t)
D.b1X=new C.x(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,B.t)
D.z3=new C.x(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,B.t)
D.b2x=new C.x(1,1,0.9686274509803922,0.8,B.t)
D.a9e=new C.x(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,B.t)
D.b37=new C.x(1,1,0.47843137254901963,0.09411764705882353,B.t)
D.b3e=new C.x(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,B.t)
D.a9p=new C.x(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,B.t)
D.Tx=new C.x(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,B.t)
D.b3J=new C.x(1,0.984313725490196,0.6509803921568628,0.8509803921568627,B.t)
D.a9u=new C.x(1,1,0.5411764705882353,0.5411764705882353,B.t)
D.TE=new C.x(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,B.t)
D.a9C=new C.x(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,B.t)
D.a9G=new C.x(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,B.t)
D.b5e=new C.x(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,B.t)
D.b5g=new C.x(1,0.043137254901960784,0.10588235294117647,0.2,B.t)
D.b5k=new C.x(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,B.t)
D.aa1=new C.x(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,B.t)
D.b5K=new C.x(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,B.t)
D.D0=new C.x(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,B.t)
D.aac=new C.x(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,B.t)
D.b6N=new C.x(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,B.t)
D.b6Q=new C.x(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,B.t)
D.b6Z=new C.x(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,B.t)
D.b71=new C.x(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,B.t)
D.b7m=new C.x(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,B.t)
D.aaP=new C.x(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,B.t)
D.b81=new C.x(1,0.7490196078431373,0.8431372549019608,1,B.t)
D.b8v=new C.x(1,1,0.41568627450980394,0,B.t)
D.b8E=new C.x(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,B.t)
D.rn=new C.x(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,B.t)
D.b92=new C.x(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,B.t)
D.b9j=new C.x(1,1,0.9529411764705882,0.6274509803921569,B.t)
D.b9n=new C.x(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,B.t)
D.bcy=new C.b7(11e6)
D.ac0=new C.M(0,0,7,0)
D.bdA=new C.M(0,0,8,6)
D.ac2=new C.M(0,0,9,0)
D.be6=new C.M(10,0,10,4)
D.bea=new C.M(10,10,10,6)
D.acb=new C.M(10,6,10,2)
D.UU=new C.M(10,6,10,4)
D.bep=new C.M(10,6,10,8)
D.ber=new C.M(10,8,0,10)
D.bf2=new C.M(12,8,8,8)
D.bf8=new C.M(14,0,14,30)
D.act=new C.M(14,0,14,6)
D.bf9=new C.M(14,10,10,10)
D.acz=new C.M(14,10,8,12)
D.bfG=new C.M(14,8,14,6)
D.bg8=new C.M(16,4,16,28)
D.bgi=new C.M(16,8,16,12)
D.bj8=new C.M(4,4,6,2)
D.bja=new C.M(4,4,8,2)
D.bjJ=new C.M(8,14,8,12)
D.bjU=new C.M(8,6,16,0)
D.eMF=new C.w("REACTION LAB",null,W.aKj,null,null,null,null,B.Z,null,1,null,null)
D.bkx=new C.bE(1,B.bn,D.eMF,null)
D.eEd=new C.F(!0,B.c,null,null,null,null,17,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePz=new C.w("CORE PROTOCOL",null,D.eEd,null,null,null,null,null,null,null,null,null)
D.bkJ=new C.bE(1,B.bn,D.ePz,null)
D.eLr=new C.w("Wire selected",null,B.h8,null,null,null,null,null,null,null,null,null)
D.bly=new C.bE(1,B.bn,D.eLr,null)
D.afB=new C.a_(62712,"MaterialIcons",!1)
D.boK=new C.a_(62878,"MaterialIcons",!1)
D.X4=new C.a_(62908,"MaterialIcons",!1)
D.boN=new C.a_(62918,"MaterialIcons",!1)
D.boO=new C.a_(62931,"MaterialIcons",!1)
D.boQ=new C.a_(62951,"MaterialIcons",!1)
D.boS=new C.a_(62970,"MaterialIcons",!1)
D.bp6=new C.a_(63064,"MaterialIcons",!1)
D.bp8=new C.a_(63070,"MaterialIcons",!1)
D.wQ=new C.a_(63128,"MaterialIcons",!1)
D.Ep=new C.a_(63726,"MaterialIcons",!1)
D.bqq=new C.a_(983122,"MaterialIcons",!1)
D.bqF=new C.a_(983247,"MaterialIcons",!1)
D.bqM=new C.a_(983316,"MaterialIcons",!1)
D.bqS=new C.a_(983415,"MaterialIcons",!1)
D.bqT=new C.a_(983417,"MaterialIcons",!1)
D.bqU=new C.a_(983442,"MaterialIcons",!1)
D.bqV=new C.a_(983443,"MaterialIcons",!1)
D.agQ=new C.a_(983467,"MaterialIcons",!1)
D.br0=new C.a_(983501,"MaterialIcons",!1)
D.brb=new C.a_(983616,"MaterialIcons",!1)
D.agZ=new C.a_(983617,"MaterialIcons",!1)
D.brc=new C.a_(983624,"MaterialIcons",!1)
D.bro=new C.a_(983776,"MaterialIcons",!1)
D.brG=new C.a_(984561,"MaterialIcons",!1)
D.bse=new C.ac(B.Ab,24,B.aM,null,null,null)
D.bsY=new C.ac(D.wQ,23,B.aj,null,null,null)
D.btw=new C.ac(B.lZ,21,B.aj,null,null,null)
D.btW=new C.ac(B.p5,22,B.aj,null,null,null)
D.bqp=new C.a_(983117,"MaterialIcons",!1)
D.buS=new C.ac(D.bqp,28,B.c,null,null,null)
D.bv7=new C.ac(B.iY,18,null,null,null,null)
D.bwQ=new C.ac(B.e4,21,B.cN,null,null,null)
D.bx4=new C.ac(B.m_,null,B.aj,null,null,null)
D.bxe=new C.ac(B.Y_,21,B.aj,null,null,null)
D.aib=new C.ac(B.et,19,null,null,null,null)
D.m1=new C.ac(B.ur,21,B.aj,null,null,null)
D.bAu=new C.ac(B.wO,21,B.aj,null,null,null)
D.bAB=new C.ac(B.iY,21,B.aj,null,null,null)
D.bBq=new C.ac(B.fy,20,B.aA,null,null,null)
D.bC2=new C.ac(B.dO,null,B.aM,null,null,null)
D.bCm=new C.ac(B.jF,null,B.aA,null,null,null)
D.cUi=w([B.dC,B.dg,B.dC],x.O)
D.bEp=new C.a8(B.a1,B.a7,B.x,D.cUi,null,null)
D.cAn=w([B.cg,B.bv],x.O)
D.bEx=new C.a8(B.b3,B.bb,B.x,D.cAn,null,null)
D.cAJ=w([B.j8,B.hr],x.O)
D.bEO=new C.a8(B.b3,B.bb,B.x,D.cAJ,null,null)
D.ajc=new C.a8(B.b3,B.bb,B.x,I.ZE,null,null)
D.cyh=w([B.nN,B.hQ],x.O)
D.bFq=new C.a8(B.b3,B.bb,B.x,D.cyh,null,null)
D.cA6=w([B.fD,B.aG],x.O)
D.bFz=new C.a8(B.b3,B.bb,B.x,D.cA6,null,null)
D.c7G=w([B.cg,B.fN],x.O)
D.bG4=new C.a8(B.a1,B.a7,B.x,D.c7G,null,null)
D.b3N=new C.x(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,B.t)
D.aYR=new C.x(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,B.t)
D.cvY=w([D.b3N,D.aYR],x.O)
D.bGB=new C.a8(B.b3,B.bb,B.x,D.cvY,null,null)
D.bHb=new C.a8(B.ax,B.aC,B.x,B.ZB,null,null)
D.b7A=new C.x(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,B.t)
D.cZ2=w([D.b7A,B.Iz],x.O)
D.bHh=new C.a8(B.b3,B.bb,B.x,D.cZ2,null,null)
D.cIm=w([B.aG,B.w],x.O)
D.bHm=new C.a8(B.b3,B.bb,B.x,D.cIm,null,null)
D.b75=new C.x(1,0.788235294117647,0.6509803921568628,0.4196078431372549,B.t)
D.b7H=new C.x(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,B.t)
D.ck9=w([B.J3,D.b75,D.b7H],x.O)
D.bHw=new C.a8(B.b3,B.bb,B.x,D.ck9,null,null)
D.c80=w([B.dD,B.ia],x.O)
D.bHL=new C.a8(B.b3,B.bb,B.x,D.c80,null,null)
D.bHR=new C.a8(B.ax,B.aC,B.x,B.a_n,null,null)
D.ajE=w([0,2,4,6,7,9,11],x.t)
D.bIq=w([0,4,7],x.t)
D.ajI=w([0,4,7,12],x.t)
D.bIr=w([0,4,7,4],x.t)
D.arJ=w([B.fY,B.q5],x.O)
D.arj=w([B.hS,B.cW],x.O)
D.apS=w([B.bE,B.dN],x.O)
D.csz=w([B.aM,B.dD],x.O)
D.cyC=w([B.cN,B.f5],x.O)
D.cQs=w([B.cd,B.lJ],x.O)
D.apn=w([B.dh,B.kT],x.O)
D.cxl=w([B.bP,B.aI],x.O)
D.bIL=w([D.arJ,D.arj,B.ZI,D.apS,D.csz,D.cyC,B.aqV,D.cQs,D.apn,D.cxl],x.k)
D.ajL=w([1],x.n)
D.bNp=w([120,220,380],x.t)
D.bR9=w([12,16,19,24],x.t)
D.bRi=w([1400,800,450,2400],x.t)
D.bVh=w([1,2,3],x.n)
D.bVs=w([1,-1],x.n)
D.bVt=w([0,0.6,1],x.n)
D.bZB=w([250,450,900,1500],x.t)
D.c7E=w([B.aH,B.cV,B.br,B.b4,B.bE,B.c,B.aG],x.O)
D.aZx=new C.x(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,B.t)
D.b7o=new C.x(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,B.t)
D.b5M=new C.x(1,0.7450980392156863,0.5411764705882353,0.4,B.t)
D.b9X=new C.x(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,B.t)
D.b56=new C.x(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,B.t)
D.aoG=w([D.aZx,D.b7o,D.b5M,D.b9X,D.b56],x.O)
D.eav=new C.z("type","Typewriter")
D.e47=new C.z("bounce","Bounce")
D.ebe=new C.z("wave","Wave")
D.ece=new C.z("zoom","Zoom")
D.cf5=w([D.eav,D.e47,D.ebe,B.a2p,F.aFZ,D.ece,F.aG0],x.L)
D.cfh=w([50,25,75],x.t)
D.cjv=w([1,2,3,4,5,6,7],x.n)
D.ckF=w([0,5,10,15,18,20,25],x.t)
D.e5H=new C.z("fish","Fish")
D.e5J=new C.z("fly","Fireflies")
D.e45=new C.z("bird","Birds")
D.coL=w([D.e5H,D.e5J,D.e45],x.L)
D.csP=w([900,500,250,1600],x.t)
D.cwi=w([0.78,1],x.n)
D.apT=w([0,2,4,7,9,12,14,16],x.t)
D.dMw=new A.mU("battery","Battery","\ud83d\udd0b",B.bt,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.dMy=new A.mU("solar","Solar panel","\u2600\ufe0f",B.cV,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.dMJ=new A.mU("crank","Hand crank","\ud83d\udd04",B.dh,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.dMD=new A.mU("turbine","Wind turbine","\ud83c\udf2c\ufe0f",B.b4,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.dMA=new A.mU("switch","Switch","\ud83c\udf9a\ufe0f",B.bE,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.dMK=new A.mU("fuse","Fuse","\ud83e\uddef",B.cN,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.dMv=new A.mU("pot","Dimmer knob","\ud83c\udf9b\ufe0f",B.hS,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.dMG=new A.mU("resistor","Resistor","\u3030\ufe0f",B.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.dMH=new A.mU("bulb","Light bulb","\ud83d\udca1",B.j5,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.dMz=new A.mU("led","LED","\ud83d\udd34",B.aH,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.dMB=new A.mU("motor","Motor","\u2699\ufe0f",B.bP,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.dMF=new A.mU("buzzer","Buzzer","\ud83d\udd14",B.cd,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.dMx=new A.mU("heater","Heater","\ud83d\udd25",B.dh,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.dME=new A.mU("capacitor","Capacitor","\ud83e\udeab",B.cK,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.dMC=new A.mU("radio","Radio","\ud83d\udcfb",B.q0,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.dMI=new A.mU("tv","TV","\ud83d\udcfa",B.bd,"Needs about 6 volts or more. With power it shows a picture made of millions of tiny coloured dots.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.Nc=w([D.dMw,D.dMy,D.dMJ,D.dMD,D.dMA,D.dMK,D.dMv,D.dMG,D.dMH,D.dMz,D.dMB,D.dMF,D.dMx,D.dME,D.dMC,D.dMI],C.aA("N<mU>"))
D.apY=w(["A","T","C","G"],x.s)
D.cwO=w(["A","U","C","G"],x.s)
D.cxk=w([1,2.76,5.4,8.93,13.3],x.n)
D.cy_=w([B.aG,B.aH,B.dh,B.cV,B.br,B.cE,B.c9,B.bz,B.Iz],x.O)
D.ZC=w([0.04,0.17,0.3],x.n)
D.cyk=w([1,0.6,0.38,0.22,0.12],x.n)
D.cyy=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.Ff=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eiz=new A.u7("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eiF=new A.u7("Medium engine","A good all-rounder.",0.3,0.9)
D.eiE=new A.u7("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Fg=w([D.eiz,D.eiF,D.eiE],x._)
D.dVG=new C.z(6,"Easy")
D.dWd=new C.z(8,"Medium")
D.dSi=new C.z(10,"Hard")
D.czl=w([D.dVG,D.dWd,D.dSi],x.T)
D.aqf=w([0.55,0.78,1],x.n)
D.cAO=w([0.93,0.975,1],x.n)
D.aqp=w([B.c,B.ho,B.pT,B.aG],x.O)
D.cCg=w([1,0.7,0.45,0.28,0.16,0.1,0.06],x.n)
D.cCh=w([1,0.55,0.32,0.2,0.12,0.07],x.n)
D.f7K=new A.x6("Moon",1737,4291941851)
D.f7H=new A.x6("Earth",6371,4281908728)
D.f7L=new A.x6("Neptune",24622,4284524026)
D.f7M=new A.x6("Saturn",58232,4294829706)
D.f7I=new A.x6("Jupiter",69911,4294677052)
D.f7N=new A.x6("Sun",696340,4294688548)
D.f7O=new A.x6("Sirius A",119e4,4290763774)
D.f7F=new A.x6("Arcturus",179e5,4294818420)
D.f7G=new A.x6("Betelgeuse",531e6,4294472049)
D.f7J=new A.x6("UY Scuti",667e6,4293870660)
D.Nl=w([D.f7K,D.f7H,D.f7L,D.f7M,D.f7I,D.f7N,D.f7O,D.f7F,D.f7G,D.f7J],C.aA("N<x6>"))
D.efl=new C.bz("glow","Glow",B.X6)
D.edc=new C.bz("rainbow","Rainbow",B.nq)
D.edx=new C.bz("stars","Stars",B.hL)
D.ecX=new C.bz("sparks","Sparks",B.dO)
D.eeH=new C.bz("fire","Fire",B.us)
D.cCs=w([D.efl,D.edc,D.edx,D.ecX,D.eeH],x.c)
D.aqt=w([B.br,B.aH,B.cV,B.dg],x.O)
D.cDk=w([0.2,1],x.n)
D.eiw=new A.u7("Radar","Shows your height above the ground.",0.1,0)
D.eix=new A.u7("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eiu=new A.u7("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aqB=w([D.eiw,D.eix,D.eiu],x._)
D.ee2=new C.bz("attract","Attract",B.x7)
D.edR=new C.bz("scare","Scare",B.rR)
D.ed5=new C.bz("food","Food",B.rY)
D.bqv=new C.a_(983158,"MaterialIcons",!1)
D.eel=new C.bz("hunt","Hunt",D.bqv)
D.cDV=w([D.ee2,D.edR,D.ed5,D.eel],x.c)
D.cEh=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cEv=w([47,100,220,470,1000],x.n)
D.aqS=w([0,2,4,7,9],x.t)
D.a1u={volts:0}
D.ay7=new C.bt(D.a1u,[3],x.J)
D.PG=new C.fz(["b","battery",0.2,0.3,D.ay7])
D.dI0={on:0}
D.d2E=new C.bt(D.dI0,[1],x.J)
D.GC=new C.fz(["s","switch",0.5,0.3,D.d2E])
D.ehq=new C.fz(["l","bulb",0.8,0.3,B.m4])
D.cAu=w([D.PG,D.GC,D.ehq],x.d)
D.GB=new C.d7(["b",0,"s",0])
D.egH=new C.d7(["s",1,"l",0])
D.egr=new C.d7(["l",1,"b",1])
D.cPw=w([D.GB,D.egH,D.egr],x.o)
D.czZ=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.dRI=new A.q_("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cAu,D.cPw,D.czZ)
D.aAw={ohms:0}
D.aya=new C.bt(D.aAw,[220],x.J)
D.eh1=new C.fz(["r","resistor",0.5,0.3,D.aya])
D.ehC=new C.fz(["d","led",0.8,0.3,B.m4])
D.cSc=w([D.PG,D.eh1,D.ehC],x.d)
D.eg7=new C.d7(["b",0,"r",0])
D.egC=new C.d7(["r",1,"d",0])
D.egb=new C.d7(["d",1,"b",1])
D.cZw=w([D.eg7,D.egC,D.egb],x.o)
D.cSC=w(["led","diode","indicator"],x.s)
D.dRN=new A.q_("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.cSc,D.cZw,D.cSC)
D.a1t={level:0}
D.d22=new C.bt(D.a1t,[0.2],x.J)
D.eh5=new C.fz(["p","pot",0.5,0.3,D.d22])
D.eh8=new C.fz(["m","motor",0.8,0.3,B.m4])
D.cAM=w([D.PG,D.eh5,D.eh8],x.d)
D.eg6=new C.d7(["b",0,"p",0])
D.egx=new C.d7(["p",1,"m",0])
D.egu=new C.d7(["m",1,"b",1])
D.cW4=w([D.eg6,D.egx,D.egu],x.o)
D.cPi=w(["fan","motor","spin","dimmer"],x.s)
D.dRH=new A.q_("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cAM,D.cW4,D.cPi)
D.a08=new C.bt(D.a1t,[0.9],x.J)
D.ehJ=new C.fz(["s","solar",0.25,0.3,D.a08])
D.aG3=new C.fz(["l","bulb",0.75,0.3,B.m4])
D.cD2=w([D.ehJ,D.aG3],x.d)
D.egE=new C.d7(["s",0,"l",0])
D.egt=new C.d7(["l",1,"s",1])
D.cBq=w([D.egE,D.egt],x.o)
D.cWA=w(["solar","sun","without battery","no battery","free"],x.s)
D.dRJ=new A.q_("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cD2,D.cBq,D.cWA)
D.ehF=new C.fz(["c","crank",0.25,0.3,D.a08])
D.cNP=w([D.ehF,D.aG3],x.d)
D.eg8=new C.d7(["c",0,"l",0])
D.egs=new C.d7(["l",1,"c",1])
D.cOj=w([D.eg8,D.egs],x.o)
D.cNX=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.dRG=new A.q_("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.cNP,D.cOj,D.cNX)
D.d21=new C.bt(D.a1t,[0.7],x.J)
D.eha=new C.fz(["t","turbine",0.25,0.3,D.d21])
D.eh0=new C.fz(["m","motor",0.75,0.3,B.m4])
D.cIX=w([D.eha,D.eh0],x.d)
D.egO=new C.d7(["t",0,"m",0])
D.egv=new C.d7(["m",1,"t",1])
D.cI4=w([D.egO,D.egv],x.o)
D.cMQ=w(["wind","turbine","windmill","water","hydro"],x.s)
D.dRE=new A.q_("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.cIX,D.cI4,D.cMQ)
D.d33=new C.bt(D.a1u,[9],x.J)
D.aG2=new C.fz(["b","battery",0.2,0.3,D.d33])
D.ehn=new C.fz(["r","radio",0.8,0.3,B.m4])
D.cX3=w([D.aG2,D.GC,D.ehn],x.d)
D.egI=new C.d7(["s",1,"r",0])
D.egA=new C.d7(["r",1,"b",1])
D.bIa=w([D.GB,D.egI,D.egA],x.o)
D.cVS=w(["radio","music","listen"],x.s)
D.dRM=new A.q_("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.cX3,D.bIa,D.cVS)
D.d34=new C.bt(D.a1u,[12],x.J)
D.eh7=new C.fz(["b","battery",0.2,0.3,D.d34])
D.ehr=new C.fz(["t","tv",0.8,0.3,B.m4])
D.cAv=w([D.eh7,D.GC,D.ehr],x.d)
D.egJ=new C.d7(["s",1,"t",0])
D.egP=new C.d7(["t",1,"b",1])
D.cQv=w([D.GB,D.egJ,D.egP],x.o)
D.cX2=w(["tv","television","screen","watch"],x.s)
D.dRC=new A.q_("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cAv,D.cQv,D.cX2)
D.ehi=new C.fz(["z","buzzer",0.8,0.3,B.m4])
D.chy=w([D.PG,D.GC,D.ehi],x.d)
D.egK=new C.d7(["s",1,"z",0])
D.egZ=new C.d7(["z",1,"b",1])
D.cw8=w([D.GB,D.egK,D.egZ],x.o)
D.cUm=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.dRK=new A.q_("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.chy,D.cw8,D.cUm)
D.eh6=new C.fz(["h","heater",0.8,0.3,B.m4])
D.cLC=w([D.aG2,D.GC,D.eh6],x.d)
D.egG=new C.d7(["s",1,"h",0])
D.egh=new C.d7(["h",1,"b",1])
D.cwK=w([D.GB,D.egG,D.egh],x.o)
D.c1O=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.dRD=new A.q_("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.cLC,D.cwK,D.c1O)
D.eht=new C.fz(["s","solar",0.2,0.25,D.a08])
D.d39=new C.bt(D.aAw,[100],x.J)
D.ehw=new C.fz(["r","resistor",0.55,0.25,D.d39])
D.ehB=new C.fz(["c","capacitor",0.85,0.25,B.m4])
D.eh2=new C.fz(["q","resistor",0.55,0.6,D.aya])
D.ehu=new C.fz(["d","led",0.85,0.6,B.m4])
D.cQa=w([D.eht,D.ehw,D.ehB,D.eh2,D.ehu],x.d)
D.egF=new C.d7(["s",0,"r",0])
D.egB=new C.d7(["r",1,"c",0])
D.ega=new C.d7(["c",1,"s",1])
D.eg9=new C.d7(["c",0,"q",0])
D.egz=new C.d7(["q",1,"d",0])
D.egc=new C.d7(["d",1,"c",1])
D.cGe=w([D.egF,D.egB,D.ega,D.eg9,D.egz,D.egc],x.o)
D.cNi=w(["capacitor","store","charge","flash"],x.s)
D.dRL=new A.q_("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.cQa,D.cGe,D.cNi)
D.ehc=new C.fz(["b","battery",0.15,0.3,D.ay7])
D.ehG=new C.fz(["l1","bulb",0.5,0.3,B.m4])
D.ehg=new C.fz(["l2","bulb",0.85,0.3,B.m4])
D.cyQ=w([D.ehc,D.ehG,D.ehg],x.d)
D.eg5=new C.d7(["b",0,"l1",0])
D.ego=new C.d7(["l1",1,"l2",0])
D.egp=new C.d7(["l2",1,"b",1])
D.cJz=w([D.eg5,D.ego,D.egp],x.o)
D.cWT=w(["series","two bulbs","dim"],x.s)
D.dRF=new A.q_("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cyQ,D.cJz,D.cWT)
D.Nn=w([D.dRI,D.dRN,D.dRH,D.dRJ,D.dRG,D.dRE,D.dRM,D.dRC,D.dRK,D.dRD,D.dRL,D.dRF],C.aA("N<q_>"))
D.cG_=w([1,0.6,0.45,0.3,0.22,0.15],x.n)
D.fhA=new A.Ez("Moon",1.62,B.fN,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.fhy=new A.Ez("Mars",3.71,B.aH,"Mars has about 38 percent of Earth's gravity.")
D.fhB=new A.Ez("Mercury",3.7,B.jv,"Mercury is small, so its gravity is like Mars.")
D.fhv=new A.Ez("Venus",8.87,B.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.fhx=new A.Ez("Earth",9.81,B.b4,"On Earth gravity is strong, and the air also slows you down.")
D.fhz=new A.Ez("Neptune",11.15,B.dg,"Neptune pulls a little harder than Earth.")
D.fhw=new A.Ez("Jupiter",24.79,B.dh,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.qq=w([D.fhA,D.fhy,D.fhB,D.fhv,D.fhx,D.fhz,D.fhw],C.aA("N<Ez>"))
D.cGd=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.ZR=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cGO=w([0.2,0.5,0.8],x.n)
D.cGY=w([1,2,3,4,5,6],x.n)
D.bp1=new C.a_(63040,"MaterialIcons",!1)
D.edU=new C.bz("peg","Peg",D.bp1)
D.ed9=new C.bz("bar","Bar",P.Af)
D.edz=new C.bz("erase","Erase",B.KK)
D.cGZ=w([D.edU,D.ed9,D.edz],x.c)
D.ekY=new C.cJ(B.bi,B.J,4)
D.cH8=w([D.ekY],x.q)
D.ar4=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aNf=new A.IG(0,"accordion")
D.cxr=w([B.j_,B.Ag,B.E9],x.w)
D.cDN=w(["Mail","SMS","Ad"],x.s)
D.cxT=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.ffN=new A.zl(D.aNf,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.arJ,D.cxr,D.cDN,D.cxT)
D.a5F=new A.IG(1,"flip")
D.cNc=w([B.qi,Z.EG,B.uy],x.w)
D.cIv=w(["Unlock","Verify","Secure"],x.s)
D.cwz=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.ffM=new A.zl(D.a5F,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.arj,D.cNc,D.cIv,D.cwz)
D.aNg=new A.IG(2,"towers")
D.cHq=w([B.x2,B.p9,B.hK],x.w)
D.cH4=w(["Save","Grow","Earn"],x.s)
D.ckO=w(["","",""],x.s)
D.ffO=new A.zl(D.aNg,"GROWTH SKYLINE","Solid towers rise from the floor and light up",B.ZI,D.cHq,D.cH4,D.ckO)
D.a5G=new A.IG(3,"assemble")
D.cO_=w([B.mG,B.hf,B.dO],x.w)
D.cDd=w(["Launch","Charge","Shine"],x.s)
D.cKR=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.ffQ=new A.zl(D.a5G,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.apS,D.cO_,D.cDd,D.cKR)
D.aNh=new A.IG(4,"carousel")
D.cNQ=w([B.bd,B.ja],x.O)
D.cDX=w([B.lZ,B.ag2,B.XU],x.w)
D.czb=w(["Explore","Discover","Learn"],x.s)
D.cIS=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.ffL=new A.zl(D.aNh,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.cNQ,D.cDX,D.czb,D.cIS)
D.aNi=new A.IG(5,"burst")
D.cH0=w([B.km,B.tU],x.O)
D.cxO=w([B.kX,B.lX,B.hJ],x.w)
D.cy6=w(["Cheer","Win","Love"],x.s)
D.cA4=w(["Make some noise","First place","Share the joy"],x.s)
D.ffP=new A.zl(D.aNi,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cH0,D.cxO,D.cy6,D.cA4)
D.ar5=w([D.ffN,D.ffM,D.ffO,D.ffQ,D.ffL,D.ffP],C.aA("N<zl>"))
D.edW=new C.bz("skin","Skin",B.ag3)
D.ef8=new C.bz("muscle","Muscles",B.KX)
D.eeV=new C.bz("organ","Organs",B.hJ)
D.bot=new C.a_(62747,"MaterialIcons",!1)
D.eeY=new C.bz("bone","Skeleton",D.bot)
D.efe=new C.bz("vessel","Blood vessels",B.uB)
D.cHv=w([D.edW,D.ef8,D.eeV,D.eeY,D.efe],x.c)
D.eiy=new A.u7("Simple legs","Light. Land gently.",0.15,0.2)
D.eiA=new A.u7("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eiD=new A.u7("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.AB=w([D.eiy,D.eiA,D.eiD],x._)
D.cJ_=w([1.77,3.55,7.15,16.7],x.n)
D.cLe=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.ea_=new C.z("spiral","Spiral")
D.dVE=new C.z("barred","Barred spiral")
D.e5d=new C.z("elliptical","Elliptical")
D.cLS=w([D.ea_,D.dVE,D.e5d],x.L)
D.efR=new C.d7(["beat",0.18,0.28,0])
D.egL=new C.d7(["burst",0.7,0.2,0])
D.egU=new C.d7(["delay",0.45,0.5,1])
D.egw=new C.d7(["ripple",0.75,0.6,3])
D.cCY=w([D.efR,D.egL,D.egU,D.egw],x.e)
D.a2k=new C.z(2,3)
D.cME=w([K.mP,I.GA,D.a2k],x.u)
D.ff2=new A.Em("First spark","A clock lights a burst and a ripple",D.cCY,D.cME)
D.egf=new C.d7(["beat",0.15,0.3,1])
D.efw=new C.d7(["ripple",0.62,0.15,0])
D.egR=new C.d7(["delay",0.4,0.45,0])
D.eg2=new C.d7(["ripple",0.7,0.45,0])
D.efN=new C.d7(["delay",0.4,0.7,1])
D.egy=new C.d7(["shake",0.75,0.75,0])
D.cXH=w([D.egf,D.efw,D.egR,D.eg2,D.efN,D.egy],x.e)
D.dT7=new C.z(2,4)
D.aFT=new C.z(4,5)
D.cG4=w([K.mP,I.GA,D.a2k,D.dT7,D.aFT],x.u)
D.ff4=new A.Em("Heartbeat","Two thumps, then a shake",D.cXH,D.cG4)
D.efW=new C.d7(["dice",0.15,0.7,1])
D.egW=new C.d7(["echo",0.4,0.7,0])
D.eg1=new C.d7(["comet",0.7,0.5,4])
D.egM=new C.d7(["burst",0.72,0.2,1])
D.egd=new C.d7(["burst",0.3,0.25,0])
D.efX=new C.d7(["pop",0.55,0.85,0])
D.c1o=w([D.efW,D.egW,D.eg1,D.egM,D.egd,D.efX],x.e)
D.dSA=new C.z(1,3)
D.dSB=new C.z(1,4)
D.aFS=new C.z(0,5)
D.cNL=w([K.mP,I.uZ,D.dSA,D.dSB,D.aFS],x.u)
D.ff3=new A.Em("Fireworks","Dice launch comets that burst in colour",D.c1o,D.cNL)
D.eg_=new C.d7(["beat",0.15,0.2,2])
D.egl=new C.d7(["chance",0.4,0.2,0])
D.efT=new C.d7(["ball",0.7,0.12,3])
D.efG=new C.d7(["chance",0.4,0.5,1])
D.egV=new C.d7(["ball",0.3,0.08,1])
D.efz=new C.d7(["ripple",0.7,0.55,3])
D.bVu=w([D.eg_,D.egl,D.efT,D.efG,D.egV,D.efz],x.e)
D.a2l=new C.z(3,4)
D.dT8=new C.z(2,5)
D.chj=w([K.mP,I.uZ,I.a2j,D.a2l,D.dT8],x.u)
D.ff1=new A.Em("Rain","Balls fall at random and splash",D.bVu,D.chj)
D.egm=new C.d7(["beat",0.12,0.45,2])
D.egN=new C.d7(["toggle",0.38,0.2,0])
D.egT=new C.d7(["wash",0.7,0.15,4])
D.efV=new C.d7(["count3",0.38,0.45,0])
D.egQ=new C.d7(["burst",0.72,0.4,0])
D.ege=new C.d7(["light",0.55,0.7,1])
D.efH=new C.d7(["pop",0.8,0.8,4])
D.cQ8=w([D.egm,D.egN,D.egT,D.efV,D.egQ,D.ege,D.efH],x.e)
D.dTt=new C.z(3,6)
D.bYB=w([K.mP,I.uZ,I.a2j,D.a2l,D.aFS,D.dTt],x.u)
D.ff_=new A.Em("Disco","A beat drives lights, washes and bursts",D.cQ8,D.bYB)
D.egY=new C.d7(["button",0.12,0.2,0])
D.efB=new C.d7(["delay",0.34,0.2,1])
D.egX=new C.d7(["light",0.56,0.2,1])
D.egS=new C.d7(["delay",0.56,0.45,1])
D.egn=new C.d7(["ball",0.34,0.6,0])
D.efF=new C.d7(["delay",0.34,0.8,1])
D.efv=new C.d7(["burst",0.7,0.8,5])
D.bIO=w([D.egY,D.efB,D.egX,D.egS,D.egn,D.efF,D.efv],x.e)
D.dVp=new C.z(5,6)
D.cUv=w([K.mP,I.uZ,D.a2k,D.a2l,D.aFT,D.dVp],x.u)
D.ff0=new A.Em("Domino","Tap the button and watch it run down the line",D.bIO,D.cUv)
D.arn=w([D.ff2,D.ff4,D.ff3,D.ff1,D.ff_,D.ff0],C.aA("N<Em>"))
D.cM_=w([0.05,0.15,0.25],x.n)
D.cMd=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.cMP=w([1.5,3,4.5,9,12],x.n)
D.ecK=new C.bz("dice","Dice",B.lW)
D.edF=new C.bz("coin","Coin",E.wX)
D.ef9=new C.bz("num","Number",B.x5)
D.cMY=w([D.ecK,D.edF,D.ef9],x.c)
D.cN0=w(["skin","muscle","organ","bone","vessel"],x.s)
D.f7P=new A.Ni("Moon",1.62,0,4291941851)
D.f7Q=new A.Ni("Mars",3.71,0.01,4294472049)
D.f7R=new A.Ni("Earth",9.81,1,4281908728)
D.f7T=new A.Ni("Jupiter",24.79,1.4,4294677052)
D.f7S=new A.Ni("Sun",274,2,4294688548)
D.xv=w([D.f7P,D.f7Q,D.f7R,D.f7T,D.f7S],C.aA("N<Ni>"))
D.art=w([B.cN,B.aM,B.bt,B.b4,B.bE,B.cd,B.dh,B.hS],x.O)
D.dGP={H:0}
D.d2F=new C.bt(D.dGP,[2],x.I)
D.d46=new A.rA("Hydrogen","H\u2082",D.d2F,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.dGQ={H:0,Cl:1}
D.d2R=new C.bt(D.dGQ,[1,1],x.I)
D.d48=new A.rA("Hydrogen chloride","HCl",D.d2R,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.dGR={H:0,O:1}
D.d2o=new C.bt(D.dGR,[2,1],x.I)
D.d49=new A.rA("Water","H\u2082O",D.d2o,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.dH2={N:0,H:1}
D.d3c=new C.bt(D.dH2,[1,3],x.I)
D.d4h=new A.rA("Ammonia","NH\u2083",D.d3c,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a1s={C:0,H:1}
D.d37=new C.bt(D.a1s,[1,4],x.I)
D.d4a=new A.rA("Methane","CH\u2084",D.d37,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.dGS={H:0,S:1}
D.d1x=new C.bt(D.dGS,[2,1],x.I)
D.d4g=new A.rA("Hydrogen sulfide","H\u2082S",D.d1x,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.dH7={O:0}
D.d3a=new C.bt(D.dH7,[2],x.I)
D.d4i=new A.rA("Oxygen","O\u2082",D.d3a,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.dH1={N:0}
D.d2G=new C.bt(D.dH1,[2],x.I)
D.d47=new A.rA("Nitrogen","N\u2082",D.d2G,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.dGF={C:0,O:1}
D.d3h=new C.bt(D.dGF,[1,2],x.I)
D.d4e=new A.rA("Carbon dioxide","CO\u2082",D.d3h,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aAt={C:0,H:1,O:2}
D.d1j=new C.bt(D.aAt,[1,2,1],x.I)
D.d4f=new A.rA("Formaldehyde","CH\u2082O",D.d1j,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.d36=new C.bt(D.a1s,[2,4],x.I)
D.d4c=new A.rA("Ethene","C\u2082H\u2084",D.d36,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.d35=new C.bt(D.a1s,[2,6],x.I)
D.d4b=new A.rA("Ethane","C\u2082H\u2086",D.d35,"Two carbons joined by a single bond, each holding three hydrogens.")
D.d1k=new C.bt(D.aAt,[1,4,1],x.I)
D.d4d=new A.rA("Methanol","CH\u2083OH",D.d1k,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a_5=w([D.d46,D.d48,D.d49,D.d4h,D.d4a,D.d4g,D.d4i,D.d47,D.d4e,D.d4f,D.d4c,D.d4b,D.d4d],C.aA("N<rA>"))
D.cOI=w([],x.Y)
D.cOJ=w([],x.x)
D.a_f=w([],x.B)
D.cP3=w([0,0.46,0.82],x.n)
D.cPe=w([5,10,15,25,45,60],x.t)
D.cPu=w([-0.045,0.03,-0.015],x.n)
D.cPR=w([0.9,0.97,1],x.n)
D.arQ=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.t4=w([0.05,0.2,0.35],x.n)
D.cya=w([D.D0,D.D0],x.O)
D.cCV=w([B.Dc,B.M],x.O)
D.cC3=w([B.fZ,B.hR],x.O)
D.cww=w([B.ja,B.na],x.O)
D.bV3=w([B.lJ,B.ds],x.O)
D.arR=w([D.cya,D.cCV,D.cC3,D.cww,D.bV3],x.k)
D.f7D=new A.uk("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.f7E=new A.uk("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.f7v=new A.uk("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.f7C=new A.uk("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.f7A=new A.uk("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.f7w=new A.uk("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.f7B=new A.uk("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.f7x=new A.uk("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.f7z=new A.uk("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.f7y=new A.uk("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.AH=w([D.f7D,D.f7E,D.f7v,D.f7C,D.f7A,D.f7w,D.f7B,D.f7x,D.f7z,D.f7y],C.aA("N<uk>"))
D.b4P=new C.x(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,B.t)
D.cQS=w([D.D0,D.b4P,D.a9e,B.a8R],x.O)
D.dS0=new C.z(0,"AND")
D.dSC=new C.z(1,"Adder")
D.dT9=new C.z(2,"Blinker")
D.dTu=new C.z(3,"Memory")
D.cSo=w([D.dS0,D.dSC,D.dT9,D.dTu],x.T)
D.as_=w([-104,0,104],x.n)
D.cSO=w([-1,1],x.n)
D.cSQ=w([-24,24],x.n)
D.cST=w([-8,8],x.n)
D.as1=w([-92,0,92],x.n)
D.cTc=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eiv=new A.u7("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eiC=new A.u7("Medium tank","Balanced.",0.35,1)
D.eiB=new A.u7("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.NW=w([D.eiv,D.eiC,D.eiB],x._)
D.cTt=w([1,2,3,4,6,8],x.n)
D.mK=w([0.04,0.2,0.36],x.n)
D.asa=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.cUh=w([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],x.n)
D.eeU=new C.bz(D.aNf,"Fold",E.ah0)
D.ee9=new C.bz(D.a5F,"Flip",B.Eh)
D.boM=new C.a_(62889,"MaterialIcons",!1)
D.ef7=new C.bz(D.aNg,"Rise",D.boM)
D.ahe=new C.a_(983870,"MaterialIcons",!1)
D.ecm=new C.bz(D.a5G,"Assemble",D.ahe)
D.ecv=new C.bz(D.aNh,"Spin",D.afB)
D.ecs=new C.bz(D.aNi,"Pop",B.kX)
D.cUs=w([D.eeU,D.ee9,D.ef7,D.ecm,D.ecv,D.ecs],C.aA("N<+(IG,n,a_)>"))
D.asf=w([B.cd,B.j5,B.bq,B.b4,B.bE,B.cN],x.O)
D.cUD=w([B.b4,B.dh,B.dh,B.bt],x.O)
D.cUO=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.ebn=new C.z("Make the output turn HALF as fast as the input.",0.5)
D.dYz=new C.z("Make the output turn TWICE as fast.",2)
D.dSM=new C.z("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.ea9=new C.z("Make the output turn 4 times faster.",4)
D.e2S=new C.z("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.e5N=new C.z("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.e4m=new C.z("Make the output turn 3 times faster.",3)
D.e54=new C.z("Make the output spin at the same speed as the input, using four different gears.",1)
D.ask=w([D.ebn,D.dYz,D.dSM,D.ea9,D.e2S,D.e5N,D.e4m,D.e54],C.aA("N<+(n,Q)>"))
D.cVQ=w([1,2,3,4,5,6,7,8],x.n)
D.NY=w([B.cd,B.cV,B.bt,B.b4,B.bE,B.cN,B.c,B.dh],x.O)
D.cWx=w(["solar","turbine","crank","pot"],x.s)
D.cWR=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.cWV=w([0,0.35,0.75,1],x.n)
D.ecF=new C.bz("drop","Drop",D.agQ)
D.ecH=new C.bz("weight","Weight",Q.ahg)
D.ef2=new C.bz("cannon","Newton's cannon",B.agf)
D.cXs=w([D.ecF,D.ecH,D.ef2],x.c)
D.e8Q=new C.z("piano","Piano")
D.e8w=new C.z("organ","Organ")
D.e43=new C.z("bell","Bell")
D.e8S=new C.z("pluck","Pluck")
D.ea8=new C.z("synth","Synth")
D.e5I=new C.z("flute","Flute")
D.asA=w([D.e8Q,D.e8w,D.e43,D.e8S,D.ea8,D.e5I],x.L)
D.cXS=w(["volts","level","ohms","on"],x.s)
D.cYX=w([B.j_,B.Ag,B.E9,B.qi,Z.EG,B.uy,B.x2,B.p9,B.hK,B.mG,B.hf,B.dO,B.hJ,B.hL,B.lX,B.lY,B.x3,B.qm,B.lq,B.E8,B.rY,B.KZ,B.A7,B.agL,B.KO,B.x_,B.KX,B.agq,M.aha,B.kX],x.w)
D.cZs=w([1,0.18,0.06],x.n)
D.cZO=w([0.72,1],x.n)
D.cZY=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.dI5={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.d1d=new C.bt(D.dI5,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aAv={A:0,T:1,C:2,G:3}
D.a03=new C.bt(D.aAv,["U","A","G","C"],x.l)
D.d1l=new C.bt(D.aAv,["T","A","G","C"],x.l)
D.dGZ={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.cNU=w([0,2,4,5,7,9,11],x.t)
D.cxw=w([0,2,3,5,7,8,10],x.t)
D.cSA=w([0,3,5,6,7,10],x.t)
D.AN=new C.bt(D.dGZ,[D.aqS,D.cNU,D.cxw,D.cSA,D.ajE],C.aA("bt<n,ak<I>>"))
D.dHU={A:0,T:1,U:2,C:3,G:4}
D.d1A=new C.bt(D.dHU,[B.cN,B.cK,B.cK,B.aM,B.bt],C.aA("bt<n,x>"))
D.dGq={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.f9h=new A.x8("Switch",D.agZ,B.cV,0,"Tap it to turn it ON or OFF.")
D.f9d=new A.x8("Blinker",B.o8,B.bq,0,"Turns itself ON and OFF. Tap to change the speed.")
D.f9e=new A.x8("AND",D.ahe,B.cK,2,"ON only when BOTH inputs are ON.")
D.bqd=new C.a_(63671,"MaterialIcons",!1)
D.f9c=new A.x8("OR",D.bqd,B.bE,2,"ON when EITHER input is ON.")
D.f9f=new A.x8("XOR",H.Xb,B.cd,2,"ON when the inputs are DIFFERENT.")
D.f99=new A.x8("NAND",B.rO,B.b4,2,"OFF only when BOTH inputs are ON.")
D.bpk=new C.a_(63176,"MaterialIcons",!1)
D.f9a=new A.x8("NOR",D.bpk,B.hS,2,"ON only when BOTH inputs are OFF.")
D.f9b=new A.x8("NOT",T.EA,B.dh,1,"Flips the signal: ON becomes OFF.")
D.f9g=new A.x8("Light",B.Ab,B.j5,1,"Glows when its input is ON.")
D.f9i=new A.x8("Buzzer",B.nr,B.cN,1,"Beeps while its input is ON.")
D.xH=new C.bt(D.dGq,[D.f9h,D.f9d,D.f9e,D.f9c,D.f9f,D.f99,D.f9a,D.f9b,D.f9g,D.f9i],C.aA("bt<n,x8>"))
D.dHS={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.ed0=new C.bz(3,20,1.9)
D.ecB=new C.bz(33,90,1.6)
D.efq=new C.bz(52,15,3.2)
D.efo=new C.bz(45,-100,1.8)
D.ee3=new C.bz(-15,-60,1.9)
D.edB=new C.bz(-25,140,2.4)
D.edt=new C.bz(-82,0,2.2)
D.ay_=new C.bt(D.dHS,[D.ed0,D.ecB,D.efq,D.efo,D.ee3,D.edB,D.edt],C.aA("bt<n,+(Q,Q,Q)>"))
D.cwZ=w([B.B],x.M)
D.cxf=w([B.ax,B.aC],x.M)
D.cFf=w([B.ax,B.B,B.aC],x.M)
D.cGx=w([B.ax,B.kL,B.B,B.lb,B.aC],x.M)
D.cSj=w([B.ax,B.kL,B.a1,B.a7,B.lb,B.aC],x.M)
D.d2v=new C.dW([1,D.cwZ,2,D.cxf,3,D.cFf,4,B.asF,5,D.cGx,6,D.cSj],C.aA("dW<I,ak<d3>>"))
D.dH_={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.eef=new C.bz(1,B.cg,"Hydrogen")
D.edf=new C.bz(4,B.bv,"Carbon")
D.ecn=new C.bz(3,B.dg,"Nitrogen")
D.eew=new C.bz(2,B.aH,"Oxygen")
D.edY=new C.bz(2,B.cV,"Sulfur")
D.ef0=new C.bz(1,B.br,"Chlorine")
D.uO=new C.bt(D.dH_,[D.eef,D.edf,D.ecn,D.eew,D.edY,D.ef0],C.aA("bt<n,+(I,x,n)>"))
D.dIa={Calm:0,Box:1,Sleep:2}
D.ceR=w([4,2,6,0],x.n)
D.ceY=w([4,4,4,4],x.n)
D.ceZ=w([4,7,8,0],x.n)
D.Om=new C.bt(D.dIa,[D.ceR,D.ceY,D.ceZ],C.aA("bt<n,ak<Q>>"))
D.dGz={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.vt=new A.Z7(0,"source")
D.cG7=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.fdG=new A.pw("Clock",B.o8,D.vt,B.bq,D.cG7)
D.fdC=new A.pw("Button",B.x7,D.vt,B.aM,B.U)
D.cVU=w(["random","quick","slow"],x.s)
D.fdN=new A.pw("Dice",B.lW,D.vt,B.cd,D.cVU)
D.bpV=new C.a_(63484,"MaterialIcons",!1)
D.C9=new A.Z7(1,"logic")
D.cZJ=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.fdJ=new A.pw("Delay",D.bpV,D.C9,B.cK,D.cZJ)
D.cPk=w(["fast","mid","slow"],x.s)
D.fdO=new A.pw("Echo",B.agE,D.C9,B.bE,D.cPk)
D.fdL=new A.pw("Every 2nd",T.EA,D.C9,B.hS,B.U)
D.bpy=new C.a_(63309,"MaterialIcons",!1)
D.fdI=new A.pw("Every 3rd",D.bpy,D.C9,B.b4,B.U)
D.brw=new C.a_(983902,"MaterialIcons",!1)
D.bIe=w(["50%","25%","75%"],x.s)
D.fdQ=new A.pw("Chance",D.brw,D.C9,B.dh,D.bIe)
D.pI=new A.Z7(2,"out")
D.fdE=new A.pw("Light",B.Ab,D.pI,B.j5,B.U)
D.fdF=new A.pw("Burst",B.kX,D.pI,B.cd,B.U)
D.fdD=new A.pw("Ripple",B.xb,D.pI,B.bd,B.U)
D.fdM=new A.pw("Ball",B.agS,D.pI,B.dh,B.U)
D.fdK=new A.pw("Comet",B.mG,D.pI,B.bE,B.U)
D.brh=new C.a_(983669,"MaterialIcons",!1)
D.fdP=new A.pw("Shake",D.brh,D.pI,B.cN,B.U)
D.fdR=new A.pw("Pop",B.Ea,D.pI,B.bt,B.U)
D.fdH=new A.pw("Wash",B.L1,D.pI,B.oH,B.U)
D.m5=new C.bt(D.dGz,[D.fdG,D.fdC,D.fdN,D.fdJ,D.fdO,D.fdL,D.fdI,D.fdQ,D.fdE,D.fdF,D.fdD,D.fdM,D.fdK,D.fdP,D.fdR,D.fdH],C.aA("bt<n,pw>"))
D.dHR={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"ORBIT STUDIO":5,"SWARM STUDIO":6,"FIREWORK DESIGNER":7,"CHAIN BURST":8,"CIRCUIT LAB":9,"PERIODIC TABLE":10,"BODY EXPLORER":11,"SPIN THE WHEEL":12,"FOCUS TIMER":13,"MEMORY MATCH":14,"LUCKY POCKET":15,"ELECTRONICS LAB":16,"AI INVENTOR":17,"MAGNET LAB":18,"RADIO LAB":19,"POWER PLANT":20,"POWER GRID":21,"INTERNET JOURNEY":22,"ROBOT CODER":23,"BUG SMASHER":24,"ROCKET LANDER":25,"DATA SNAKE":26,"BINARY 2048":27,"SIGNAL BREAKER":28,"PASSWORD LAB":29,"WAVE LAB":30,"BUG HUNT":31,"MOLECULE MAKER":32,"DNA LAB":33,"ECOSYSTEM LAB":34,"BALANCE LAB":35,"GEAR LAB":36,"OPTICS LAB":37,"LASER MAZE":38,"LIGHT MIXER":39,"ATOM BUILDER":40,"CIPHER LAB":41,"PIXEL TV":42}
D.ay9=new C.bt(D.dHR,["sparkle","sparkle","whoosh","click","bounce","space","bubble","pop","zap","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","lab","organic","organic","click","tech","sparkle","zap","sparkle","lab","tech","tech"],x.l)
D.dHV={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.AO=new C.bt(D.dHV,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.dGy={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.ebW=new C.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.dVm=new C.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.dVh=new C.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.e53=new C.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.e5Y=new C.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.e5_=new C.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.dTz=new C.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.e37=new C.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.ec3=new C.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.e6i=new C.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.dY1=new C.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.dTk=new C.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.dXa=new C.z("Movement","They pull your legs together and help you balance.")
D.dYS=new C.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.dVu=new C.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.e9K=new C.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eaM=new C.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.e2T=new C.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eaw=new C.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.e1E=new C.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.e6q=new C.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.dTo=new C.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.dZe=new C.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.e67=new C.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.e1W=new C.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eaE=new C.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.e4y=new C.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.dTx=new C.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.e6U=new C.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.e9o=new C.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.e7J=new C.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.dSa=new C.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.e4g=new C.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.e4k=new C.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.dZR=new C.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.dVA=new C.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.dYH=new C.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.e3g=new C.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.e8p=new C.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.ec0=new C.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.e6n=new C.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.dRY=new C.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.e3q=new C.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.dSv=new C.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.e8F=new C.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.e9G=new C.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.e3P=new C.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.e8U=new C.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.dTq=new C.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eab=new C.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.dWD=new C.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.e87=new C.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.dZA=new C.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.e1S=new C.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.e6E=new C.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eal=new C.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.ead=new C.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eah=new C.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.e2k=new C.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.e7o=new C.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.e7G=new C.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.ea0=new C.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.e3O=new C.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.e0m=new C.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.e_g=new C.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.e4b=new C.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.e6x=new C.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.e0R=new C.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.e1s=new C.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.dWX=new C.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.e9D=new C.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.dXF=new C.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.dSs=new C.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.dZQ=new C.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.dSn=new C.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.dVU=new C.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.dZV=new C.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.dXN=new C.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.e6Q=new C.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.dYV=new C.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.ebK=new C.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.e_o=new C.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.e2e=new C.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.e4F=new C.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.dXU=new C.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.dXH=new C.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.d3y=new C.bt(D.dGy,[D.ebW,D.dVm,D.dVh,D.e53,D.e5Y,D.e5_,D.dTz,D.e37,D.ec3,D.e6i,D.dY1,D.dTk,D.dXa,D.dYS,D.dVu,D.e9K,D.eaM,D.e2T,D.eaw,D.e1E,D.e6q,D.dTo,D.dZe,D.e67,D.e1W,D.eaE,D.e4y,D.dTx,D.e6U,D.e9o,D.e7J,D.dSa,D.e4g,D.e4k,D.dZR,D.dVA,D.dYH,D.e3g,D.e8p,D.ec0,D.e6n,D.dRY,D.e3q,D.dSv,D.e8F,D.e9G,D.e3P,D.e8U,D.dTq,D.eab,D.dWD,D.e87,D.dZA,D.e1S,D.e6E,D.eal,D.ead,D.eah,D.e2k,D.e7o,D.e7G,D.ea0,D.e3O,D.e0m,D.e_g,D.e4b,D.e6x,D.e0R,D.e1s,D.dWX,D.e9D,D.dXF,D.dSs,D.dZQ,D.dSn,D.dVU,D.dZV,D.dXN,D.e6Q,D.dYV,D.ebK,D.e_o,D.e2e,D.e4F,D.dXU,D.dXH],C.aA("bt<n,+(n,n)>"))
D.d3A=new C.hF(B.G,11)
D.d6h=new A.Sc(null)
D.da5=new A.Sg(null)
D.da6=new A.Sh(null)
D.daj=new A.Si(null)
D.dck=new A.Sk(null)
D.dcl=new A.Sl(null)
D.dcm=new A.Sm(null)
D.dd9=new A.SH(null)
D.ddb=new A.SW(null)
D.ddc=new A.SX(null)
D.ddd=new A.SY(null)
D.ddL=new A.T4(null)
D.dfG=new A.T8(null)
D.dfH=new A.Ta(null)
D.dfI=new A.Tb(null)
D.dfK=new A.Tc(null)
D.dgu=new A.To(null)
D.dhk=new A.Tt(null)
D.dhm=new A.Tv(null)
D.dhr=new A.TF(null)
D.dhC=new A.TG(null)
D.di7=new A.TH(null)
D.djC=new A.TJ(null)
D.dl_=new A.TL(null)
D.dl0=new A.TM(null)
D.dml=new A.TO(null)
D.dCe=new A.TP(null)
D.dCf=new A.TQ(null)
D.dCg=new A.TT(null)
D.dCh=new A.TU(null)
D.dEa=new A.U1(null)
D.dEb=new A.U2(null)
D.dEj=new A.U9(null)
D.dEs=new A.Ud(null)
D.dEt=new A.Ue(null)
D.dEu=new A.a61(null)
D.dEV=new A.Uf(null)
D.dGn=new A.Uj(null)
D.dIj=new C.v(0,118)
D.dIk=new C.v(0,13)
D.dIl=new C.v(0,17)
D.dIp=new C.v(0,330)
D.dIu=new C.v(0,-13)
D.a1w=new C.v(0,-6)
D.dIy=new C.v(0,-6771)
D.dIz=new C.v(0,-9)
D.aAG=new C.v(11,8)
D.dIE=new C.v(14,-18)
D.dIF=new C.v(18,-12)
D.aAK=new C.v(20,0)
D.dIL=new C.v(20,-17)
D.dIN=new C.v(22,10)
D.aAL=new C.v(22,8)
D.dIP=new C.v(24,-18)
D.dIQ=new C.v(25,8)
D.dIR=new C.v(26,0)
D.dIV=new C.v(28,-30)
D.dJ_=new C.v(30,18)
D.aAP=new C.v(34,-32)
D.Gg=new C.v(36,0)
D.dJ6=new C.v(42,0)
D.dJa=new C.v(4,11)
D.dJd=new C.v(4,-2)
D.dJg=new C.v(5,0)
D.dJh=new C.v(5,17)
D.dJi=new C.v(5,6)
D.dJu=new C.v(-2.6,-1)
D.dJv=new C.v(1.9,-0.8)
D.dJy=new C.v(-0.22,0.09)
D.dJD=new C.v(2.6,1)
D.dKh=new C.v(-10,12)
D.dKi=new C.v(-11,-2)
D.dKj=new C.v(-13,-5)
D.dKk=new C.v(-14,2)
D.dKl=new C.v(-14,-12)
D.dKm=new C.v(-17,-18)
D.aB_=new C.v(-20,0)
D.dKp=new C.v(-20,-9)
D.Pg=new C.v(-22,8)
D.dKq=new C.v(-22,-10)
D.dKr=new C.v(-22,-11)
D.dKs=new C.v(-26,0)
D.dKx=new C.v(-42,0)
D.dKz=new C.v(-4,11)
D.dKA=new C.v(-4,-2)
D.dKC=new C.v(-5,0)
D.dKD=new C.v(-5,20)
D.dKE=new C.v(-5,6)
D.dKF=new C.v(-6,-42)
D.eNe=new C.w("Thinking\u2026",null,B.i0,null,null,null,null,null,null,null,null,null)
D.dLv=new C.C(B.ks,D.eNe,null)
D.f0Z=new C.w("Start from a ready-made board",null,B.fM,null,null,null,null,null,null,null,null,null)
D.dLF=new C.C(A9.wp,D.f0Z,null)
D.biX=new C.M(4,0,4,14)
D.eJ0=new C.F(!0,B.aA,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eO6=new C.w("Games and little helpers for a spare minute.",null,D.eJ0,null,null,null,null,null,null,null,null,null)
D.dLN=new C.C(D.biX,D.eO6,null)
D.eZ5=new C.w("Tap to throw in a star",null,B.ke,null,null,null,null,null,null,null,null,null)
D.aWJ=new C.cw(B.B,null,null,D.eZ5,null)
D.dQm=new C.cE(0,null,0,14,null,null,D.aWJ,null)
D.cPP=w([B.iR,B.bv],x.O)
D.aFK=new C.bS(B.B,0.5,B.x,null,0,D.cPP,null,null)
D.cWr=w([B.fD,M.zd],x.O)
D.dR3=new C.bS(B.B,0.5,B.x,null,0,D.cWr,null,null)
D.cIa=w([B.c,B.bP],x.O)
D.dR5=new C.bS(B.B,0.5,B.x,null,0,D.cIa,null,null)
D.dR6=new C.bS(B.B,0.5,B.x,null,0,I.arI,null,null)
D.cWJ=w([B.cg,B.mr],x.O)
D.aFL=new C.bS(B.B,0.5,B.x,null,0,D.cWJ,null,null)
D.b26=new C.x(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,B.t)
D.b6K=new C.x(1,0.027450980392156862,0.10196078431372549,0.2,B.t)
D.cHf=w([D.b26,D.aaP,D.b6K],x.O)
D.cO3=w([0,0.7,1],x.n)
D.dRb=new C.bS(B.vw,0.5,B.x,null,0,D.cHf,D.cO3,null)
D.cf4=w([B.zg,B.aZ,B.K],x.O)
D.cTO=w([0.3,0.7,1],x.n)
D.dRc=new C.bS(B.B,0.5,B.x,null,0,D.cf4,D.cTO,null)
D.chN=w([B.fN,B.d3],x.O)
D.dRd=new C.bS(B.B,0.5,B.x,null,0,D.chN,null,null)
D.cD3=w([B.zg,B.aZ,B.fZ],x.O)
D.dRe=new C.bS(B.B,0.5,B.x,null,0,D.cD3,null,null)
D.cw6=w([B.ho,B.aM,B.dD],x.O)
D.dRg=new C.bS(B.vw,0.5,B.x,null,0,D.cw6,null,null)
D.cQk=w([B.mr,M.zd],x.O)
D.dRh=new C.bS(B.vw,0.5,B.x,null,0,D.cQk,null,null)
D.b2h=new C.x(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,B.t)
D.b0C=new C.x(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,B.t)
D.cF9=w([D.b2h,D.b0C],x.O)
D.dRj=new C.bS(B.B,0.5,B.x,null,0,D.cF9,null,null)
D.b6g=new C.x(1,0.11372549019607843,0.3607843137254902,0.611764705882353,B.t)
D.b4x=new C.x(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,B.t)
D.b4B=new C.x(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,B.t)
D.cYB=w([D.b6g,D.b4x,D.b4B],x.O)
D.cBY=w([0,0.65,1],x.n)
D.dRk=new C.bS(I.a5O,0.5,B.x,null,0,D.cYB,D.cBY,null)
D.dRl=new C.bS(B.B,0.5,B.x,null,0,D.apn,null,null)
D.cW0=w([B.nb,B.aZ,B.fZ],x.O)
D.dRp=new C.bS(B.B,0.5,B.x,null,0,D.cW0,null,null)
D.aFQ=new C.b3(9,9)
D.dS4=new C.z(0,-4)
D.dWA=new C.z(0.22,4)
D.e2c=new C.z(0.8,-4)
D.eae=new C.z(0.58,4)
D.ecI=new C.bz("Moon",1.62,4291941851)
D.edd=new C.bz("Neptune",11.15,4284524026)
D.edM=new C.bz("Sun",274,4294688548)
D.ee_=new C.bz("Mercury",3.7,4288455599)
D.ee5=new C.bz("Earth",9.81,4281908728)
D.ee7=new C.bz("Mars",3.71,4294472049)
D.eeq=new C.bz("Venus",8.87,4294759245)
D.eeu=new C.bz("Saturn",10.44,4294829706)
D.eeN=new C.bz("Jupiter",24.79,4294677052)
D.ehL=new C.af(14,-14,20,14)
D.ehM=new C.af(20,-2,30,2)
D.ehO=new C.af(4,-13,30,-3)
D.ehV=new C.af(-12,-22,12,8)
D.ehW=new C.af(-12,-6,10,6)
D.ehX=new C.af(-14,20,14,24)
D.ehY=new C.af(-14,6,14,10)
D.ehZ=new C.af(-14,-26,14,18)
D.ei_=new C.af(-16,-22,-9,18)
D.ei1=new C.af(-22,-3,22,3)
D.ei2=new C.af(-22,-4,22,12)
D.aG6=new C.af(-24,-9,24,9)
D.ei3=new C.af(-28,-16,28,16)
D.ei4=new C.af(-30,-12,30,14)
D.ei5=new C.af(-30,-14,0,14)
D.ei6=new C.af(-30,-2,30,18)
D.ei7=new C.af(-33,7,33,17)
D.ei8=new C.af(-33,-21,33,17)
D.ei9=new C.af(-34,14,34,26)
D.a2r=new C.af(-34,-18,34,18)
D.eia=new C.af(-34,-4,34,7)
D.eib=new C.af(-36,-24,36,20)
D.eic=new C.af(-38,-22,38,22)
D.eie=new C.af(-46,-34,46,28)
D.eif=new C.af(-48,-3,48,3)
D.eij=new C.af(14,-9,17.5,9)
D.emF=new C.ap(300,300)
D.aXW=new C.f9(2,null,null,null,null,B.bE,null,null,null,null)
D.eo_=new C.a3(16,16,D.aXW,null)
D.aHR=new C.hH(3,12,12,0.82,null)
D.f2z=new C.w("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aI1=new C.aY(D.f2z,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.cQm=w([B.cN,B.cV,B.bt,B.b4,B.oH,B.cN],x.O)
D.etR=new C.fQ(B.B,0,6.283185307179586,B.x,D.cQm,null,null)
D.eCf=new C.F(!0,B.aM,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.Nv,null,null,null)
D.euV=new C.ez("You are here (Sun)",null,null,B.cT,null,null,null,null,null,null,D.eCf)
D.aKn=new C.F(!0,B.aA,null,null,null,null,10.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euW=new C.ez("What we see",null,null,B.cT,null,null,null,null,null,null,D.aKn)
D.ezM=new C.F(!0,F.a8i,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euZ=new C.ez("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,B.cT,null,null,null,null,null,null,D.ezM)
D.ezx=new C.F(!0,B.c2,null,null,null,null,15,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ev3=new C.ez("Add atoms with the buttons below",null,null,B.cT,null,null,null,null,null,null,D.ezx)
D.aIP=new C.F(!0,B.c2,null,null,null,null,9.5,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evj=new C.F(!0,B.w,null,null,null,null,24,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evl=new C.F(!0,B.c,null,null,null,null,110,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evQ=new C.F(!0,B.bi,null,null,null,null,15,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ew7=new C.F(!0,B.cK,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewD=new C.F(!0,B.c,null,null,null,null,12.5,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewT=new C.F(!0,B.c,null,null,null,null,13.5,B.I,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exg=new C.F(!0,B.aQ,null,null,null,null,12,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exC=new C.F(!0,B.c2,null,null,null,null,9,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exM=new C.F(!0,B.aj,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ela=new C.cJ(B.hT,B.dH,6)
D.cKC=w([D.ela],x.q)
D.ey4=new C.F(!0,B.c,null,null,null,null,19,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cKC,null,null,null)
D.ey6=new C.F(!0,B.aQ,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eya=new C.F(!0,B.c,null,null,null,null,17,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyc=new C.F(!0,B.c2,null,null,null,null,10.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyz=new C.F(!0,B.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJc=new C.F(!0,B.c2,null,null,null,null,9.5,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyU=new C.F(!0,B.aA,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyV=new C.F(!0,B.c2,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezP=new C.F(!0,B.c,null,null,null,null,60,B.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAh=new C.F(!0,B.aA,null,null,null,null,10.5,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAK=new C.F(!0,B.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAQ=new C.F(!0,B.c,null,null,null,null,12.5,B.a0,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBv=new C.F(!0,B.c,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.Nv,null,null,null)
D.eBW=new C.F(!0,B.aA,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eC3=new C.F(!0,B.c,null,null,null,null,11.5,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCG=new C.F(!0,B.c,null,null,null,null,20,B.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCZ=new C.F(!0,B.bK,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eD2=new C.F(!0,B.c2,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eD5=new C.F(!0,B.aA,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDb=new C.F(!0,B.aA,null,null,null,null,18,B.I,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDD=new C.F(!0,B.c2,null,null,null,null,8.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDR=new C.F(!0,B.aj,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJP=new C.F(!0,B.aj,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eE5=new C.F(!0,B.aj,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4a=new C.F(!0,B.c,null,null,null,null,9.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEC=new C.F(!0,B.c,null,null,null,null,20,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.el1=new C.cJ(B.w,B.J,5)
D.czO=w([D.el1],x.q)
D.eED=new C.F(!0,B.c,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.czO,null,null,null)
D.eld=new C.cJ(B.aV,B.J,3)
D.cZ3=w([D.eld],x.q)
D.eEI=new C.F(!0,B.c,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cZ3,null,null,null)
D.eEX=new C.F(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eF1=new C.F(!0,B.ia,null,null,null,null,30,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFg=new C.F(!0,B.c2,null,null,null,null,10.5,B.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFL=new C.F(!0,B.bt,null,null,null,null,30,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGi=new C.F(!0,B.c2,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGX=new C.F(!0,B.aA,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eH4=new C.F(!0,B.w,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aK8=new C.F(!0,B.aA,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHy=new C.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHH=new C.F(!0,B.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHO=new C.F(!0,B.aM,null,null,null,null,26,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.QX=new C.F(!0,B.aj,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eI8=new C.F(!0,B.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKk=new C.F(!0,B.aj,null,null,null,null,12,B.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIb=new C.F(!0,B.aM,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4q=new C.F(!0,B.c,null,null,null,null,13,B.a0,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eK2=new C.w("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,B.QV,null,null,null,null,null,null,null,null,null)
D.eKr=new C.w("LETTER COUNT OF THE SECRET VERSION",null,O.mc,null,null,null,null,null,null,null,null,null)
D.eLq=new C.w("Pick one, then change it and see what happens.",null,B.QV,null,null,null,null,null,null,null,null,null)
D.ezj=new C.F(!0,B.aj,null,null,null,null,null,B.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMm=new C.w("What do you want to invent? Type it below, or tap an idea.",null,D.ezj,null,null,null,null,null,null,null,null,null)
D.eMI=new C.w("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,R.a3G,null,null,null,null,null,null,null,null,null)
D.eNJ=new C.w("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.eOl=new C.w("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.eOT=new C.w("Make it yours",null,B.l6,null,null,null,null,null,null,null,null,null)
D.eyB=new C.F(!0,B.aA,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eP7=new C.w("Your mass never changes. What changes is how hard each world pulls on it.",null,D.eyB,null,null,null,null,null,null,null,null,null)
D.eDg=new C.F(!0,B.j9,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRf=new C.w("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.eDg,null,null,null,null,null,null,null,null,null)
D.eRu=new C.w("YOUR DECODING",null,O.mc,null,null,null,null,null,null,null,null,null)
D.eFw=new C.F(!0,B.c2,null,null,null,null,9,B.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSH=new C.w("WHAT HAPPENS",null,D.eFw,null,null,null,null,null,null,null,null,null)
D.eUc=new C.w("Check",null,null,null,null,null,null,null,null,null,null,null)
D.eUP=new C.w("Change the words and pictures on the three slabs.",null,B.QV,null,null,null,null,null,null,null,null,null)
D.eUZ=new C.w("All the parts and wires will be removed.",null,B.hj,null,null,null,null,null,null,null,null,null)
D.eVh=new C.w("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.eVR=new C.w("All challenges done! Keep inventing.",null,B.h8,null,null,null,null,null,null,null,null,null)
D.eVQ=new C.w("Tap the crank on the board again and again to spin it faster.",null,B.i0,null,null,null,null,null,null,null,null,null)
D.eWE=new C.w("INTERCEPTED",null,O.mc,null,null,null,null,null,null,null,null,null)
D.eXr=new C.w("Remove this part",null,R.aIS,null,null,null,null,null,null,null,null,null)
D.eXI=new C.w("Clear the board?",null,B.di,null,null,null,null,null,null,null,null,null)
D.eF2=new C.F(!0,B.bq,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXX=new C.w("How the Lab works",null,D.eF2,null,null,null,null,null,null,null,null,null)
D.eYe=new C.w("?",null,I.aKh,null,null,null,null,null,null,null,null,null)
D.eDa=new C.F(!0,B.b4,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYi=new C.w("Planet Earth",null,D.eDa,null,null,null,null,null,null,null,null,null)
D.eZo=new C.w("Ready-made circuits",null,B.dP,null,null,null,null,null,null,null,null,null)
D.f_d=new C.w("UNIVERSE EXPLORER",null,F.a3N,null,null,null,null,null,null,null,null,null)
D.f1v=new C.w("SECRET VERSION",null,O.mc,null,null,null,null,null,null,null,null,null)
D.eHS=new C.F(!0,B.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f20=new C.w("\u26a0 There is no air here, so a parachute will not work.",null,D.eHS,null,null,null,null,null,null,null,null,null)
D.f39=new C.w("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,R.a3G,null,null,null,null,null,null,null,null,null)
D.f3M=new C.w("You build a machine. A little light runs along the wires, and every part it touches does something.",null,B.a49,null,null,null,null,null,null,null,null,null)
D.f46=new C.w("Tap it to change its setting. Drag from the right dot to connect.",null,B.l7,null,null,null,null,null,null,null,null,null)
D.f5_=new C.w("TOOLBOX",null,F.a3N,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.fUG=null
$.fUF=null
$.h_z=0
$.hr3=C.S(x.N,x.j)
$.hrE=C.S(x.N,x.j)
$.hlJ=C.S(x.N,C.aA("dz"))
$.c9M=C.a([],C.aA("N<afP>"))
$.fRK=0
$.c9Q="music"
$.fU1=null
$.hrp=C.S(x.N,x.j)
$.hsr=C.S(x.N,x.j)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hWO","bzO",()=>{var v="led"
return C.a([A.avd("Both together","Make the light glow only when BOTH switches are ON.",2,new A.f_k(),v),A.avd("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new A.f_l(),v),A.avd("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new A.f_m(),v),A.avd("Flip it","One switch only: make the light glow when the switch is OFF.",1,new A.f_q(),v),A.avd("Not both","Make the light go OFF only when both switches are ON.",2,new A.f_r(),v),A.avd("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new A.f_s(),"buzzer")],C.aA("N<b71>"))})
w($,"hXe","bzQ",()=>C.a([A.ns("UNIVERSE","Earth, space and gravity",B.XU,B.b4,new A.f_I()),A.ns("ELECTRONICS LAB","Batteries, wires, real circuits",A5.Xe,B.b4,new A.f_J()),A.ns("AI INVENTOR","Say it, watch it get built",B.dO,B.bE,new A.f_K()),A.ns("DISCOVERY LAB","Body Explorer: a real 3D human",D.X4,B.bt,new A.f_V()),A.ns("TOOLBOX","Converter, clock, games",M.afN,B.dh,new A.f_Y()),A.ns("MOLECULE MAKER","Join atoms into real molecules",B.KN,B.hS,new A.f_Z()),A.ns("DNA LAB","Copy DNA, build a protein",D.X4,B.cd,new A.f0_()),A.ns("ECOSYSTEM LAB","Grass, rabbits and foxes",B.x_,B.bt,new A.f00()),A.ns("BALANCE LAB","Levers, weight and torque",D.bro,B.aM,new A.f01()),A.ns("GEAR LAB","Teeth, speed and force",B.Ew,B.dh,new A.f02()),A.ns("LASER MAZE","Bend the beam with mirrors",F.ag6,B.aH,new A.f03()),A.ns("LIGHT MIXER","Match colours with light",D.bp6,B.bd,new A.f_L()),A.ns("CIPHER LAB","Make and crack secret codes",B.xa,B.b4,new A.f_M()),A.ns("REACTION LAB","Wire parts together",B.xe,B.bq,new A.f_N()),A.ns("SPARK PAINTER","Paint with light",B.X6,B.cd,new A.f_O()),A.ns("ROCKET LANDER","Land softly on the pad",B.mG,B.b4,new A.f_P()),A.ns("ORBIT STUDIO","Slingshot planets",B.lZ,B.dh,new A.f_Q()),A.ns("SWARM STUDIO","A living school of fish",B.KN,B.bt,new A.f_R()),A.ns("CHAIN BURST","One tap, a whole chain",B.hf,B.cd,new A.f_S()),A.ns("TITLE ANIMATOR","Make a moving title",B.x6,B.cV,new A.f_T()),A.ns("CIRCUIT LAB","Connect logic, learn it",B.Xz,B.cK,new A.f_U()),A.ns("MARBLE MUSIC","Marbles ring the notes",D.boN,B.bd,new A.f_W()),A.ns("ORBIT SEQUENCER","Planets play the tune",D.brc,B.bE,new A.f_X())],C.aA("N<bow>")))
w($,"hYI","a0x",()=>{var v,u,t=C.S(x.N,x.D)
for(v=0;v<16;++v){u=D.Nc[v]
t.m(0,u.a,u)}return t})
w($,"hWP","bzP",()=>C.a([A.WC("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new A.f_t()),A.WC("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new A.f_u()),A.WC("Spin the motor","A battery and a motor in a loop will make it spin.",new A.f_v()),A.WC("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new A.f_w()),A.WC("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new A.f_x()),A.WC("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new A.f_n()),A.WC("Watch TV","A TV needs more power. Set a battery to 12 volts.",new A.f_o()),A.WC("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new A.f_p())],C.aA("N<b72>")))
w($,"hXg","h7M",()=>C.a([A.ZC("Spin the Wheel","Let luck decide","\ud83c\udfa1",B.aM,B.cl,new A.f0b()),A.ZC("Focus Timer","Work, then rest","\u23f1\ufe0f",B.cN,B.bS,new A.f0c()),A.ZC("Breathe","Calm down in a minute","\ud83e\udee7",B.hS,B.cE,new A.f0d()),A.ZC("Draw Pad","Sketch and share","\ud83c\udfa8",B.bz,B.b0,new A.f0e()),A.ZC("Memory Match","Find the pairs","\ud83c\udccf",B.b4,B.c9,new A.f0f()),A.ZC("Simon Sounds","Copy the tune","\ud83c\udfb5",B.cV,B.br,new A.f0g()),A.ZC("Tip & Split","Share the bill","\ud83e\uddfe",B.bt,B.aW,new A.f0h()),A.ZC("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",B.bE,B.aB,new A.f0i())],C.aA("N<bpQ>")))
w($,"hXf","h7L",()=>C.a([A.acH("EARTH GLOBE","Turn it, tap a country",B.lZ,B.b4,new A.f04()),A.acH("SOLAR SYSTEM","The Sun and its worlds",D.boQ,B.aM,new A.f05()),A.acH("GRAVITY LAB","Drop, weigh, orbit",D.agQ,B.dh,new A.f06()),A.acH("BLACK HOLE","Throw in a star",B.DY,B.bE,new A.f07()),A.acH("GALAXY","Build, tilt, collide",B.wN,B.fY,new A.f08()),A.acH("SIZE COMPARE","Earth next to a star",D.bp8,B.cd,new A.f09()),A.acH("SEASONS & MOON","Why it is summer",B.uk,B.bq,new A.f0a())],C.aA("N<bpL>")))})()};
(a=>{a["uj5lgjNkxk5vo1FMdbrS1FK7P34="]=a.current})($__dart_deferred_initializers__);