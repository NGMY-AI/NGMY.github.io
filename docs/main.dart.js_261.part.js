((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,A_,V,F,N,A0,W,A1,L,I,A2,A3,T,A4,A5,X,P,A6,A7,R,M,S,A8,A9,O,H,E,A={
bvk(d){return A.hvH(d)},
hvH(d){var w=0,v=C.j(x.dk),u,t=2,s=[],r,q,p,o
var $async$bvk=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qg(C.mF(""),d,B.h8,null).cJ(0,B.UK),$async$bvk)
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
return C.i($async$bvk,v)},
hGN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<16;++u){t=D.NY[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.dm(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.ad(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=B.d.kY(D.NY,new A.fdt())
if(w==null)w=B.d.gJ(D.NY)
s=C.S(x.N,x.D)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.K)(r),++u){l=r[u].a
k=l[0]
l=$.Fm().h(0,l[1])
l.toString
s.m(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.K)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+B.d.gJ(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new A.aho(w.a,w.b,m,w,s,!1)},
hAK(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.J(D.N6,new A.f5g(),x.bd).aG(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
hOw(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=B.a.cP(b2,"{")
v=B.a.nZ(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(B.Q.aD(0,B.a.al(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aZ(a5)
r=0
for(a6=x.a,a7=J.aV(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gT(a7)
p=C.t(J.q(q,"kind"))
o=C.t(J.q(q,"id"))
if(!$.Fm().am(0,p)||J.eQ(s,o)||J.a9(t)>=8)continue
J.cg(s,o)
n=C.S(a5,a8)
for(a9=0;a9<4;++a9){m=D.cZ0[a9]
l=J.q(q,m)
if(typeof l=="number")J.aE(n,m,l)}k=B.k.D(typeof J.q(q,"x")=="number"?C.f9(J.q(q,"x")):0.2+B.k.K(r,3)*0.3,0.16,0.84)
j=B.k.D(typeof J.q(q,"y")=="number"?C.f9(J.q(q,"y")):0.25+B.k.aj(r,3)*0.3,0.1,0.9)
J.cg(t,new C.f8([o,p,k,j,n]));++r}if(J.a9(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aV(a6.a(J.q(u,"wires")));a5.C();){h=a5.gT(a5)
g=a6.a(h)
if(J.a9(g)<4)continue
f=C.t(J.q(g,0))
e=C.t(J.q(g,2))
d=B.o.D(B.k.N(C.f9(J.q(g,1))),0,1)
a0=B.o.D(B.k.N(C.f9(J.q(g,3))),0,1)
if(J.eQ(s,f)&&J.eQ(s,e)&&!J.y(f,e))J.cg(i,new C.cK([f,d,e,a0]))}if(J.a9(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.Q.a(J.q(u,"steps"))
a0=J.aV(a0==null?B.cO:a0)
while(a0.C()){a2=a0.gT(a0)
J.cg(a1,C.t(a2))}a3=a1
a0=J.q(u,"title")
a0=C.t(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new A.nk(a0,C.t(a1==null?"":a1),t,i,B.U)
a0=a4.a
a1=a4.b
d=J.a9(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.t(a5==null?"":a5)
return new A.aho(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hFr(d){var w,v,u=A.fzg()
d.B(u)
for(w=0;w<60;++w)u.a5e(0,0.03333333333333333)
v=u.a
return B.d.bf(v,new A.faR(u))&&!B.d.e9(v,new A.faS())},
hFq(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.S(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.K)(l),++u){t=l[u];++v
k.m(0,t.a,$.Fm().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.K)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.t(t.e)+" V")
if(p==="resistor")q.push(""+B.k.U(t.r)+" ohms")
if(B.d.t(D.cXC,p))q.push("level "+B.k.U(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.cx
o=p>0.05?"working (glow "+B.k.U(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+B.d.aG(q,", ")+")"
s.push(C.t(p)+n+": "+o+", current "+B.k.aa(Math.abs(t.CW)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.K)(w),++u){m=w[u]
l.push(C.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+B.d.aG(s,"\n")+"\nWires: "+B.d.aG(l,"; ")},
huj(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.K)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+B.d.aG(v,"\n")+"\n\n"}v=B.d.aG(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
hGM(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.Fm().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<29;++u){s=D.N6[u]
if(B.d.bf(w,new A.fdq(s)))if(!C.dm(r,s.b.toLowerCase(),0))v=C.dm(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.ad("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a5(w,new A.fdr(e),C.U(w).k("a5<1>")).gah(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.ad("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+B.k.aa(B.d.cI(w,0,new A.fds())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.ad("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=B.d.gJ(w)
w=$.Fm().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
aho:function aho(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fdt:function fdt(){},
f5g:function f5g(){},
faR:function faR(d){this.a=d},
faS:function faS(){},
fdq:function fdq(d){this.a=d},
fdr:function fdr(d){this.a=d},
fds:function fds(){},
Tw:function Tw(d){this.a=d},
bge:function bge(d,e,f,g,h,i){var _=this
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
dVx:function dVx(d){this.a=d},
dVy:function dVy(d,e,f){this.a=d
this.b=e
this.c=f},
dVz:function dVz(d){this.a=d},
dVK:function dVK(d){this.a=d},
dVL:function dVL(d,e){this.a=d
this.b=e},
dVG:function dVG(d){this.a=d},
dVE:function dVE(d,e){this.a=d
this.b=e},
dVF:function dVF(d,e,f){this.a=d
this.b=e
this.c=f},
dVH:function dVH(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dVC:function dVC(d){this.a=d},
dVD:function dVD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dVI:function dVI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dVB:function dVB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dVJ:function dVJ(d,e){this.a=d
this.b=e},
dVA:function dVA(d,e){this.a=d
this.b=e},
dVO:function dVO(d){this.a=d},
dVN:function dVN(d){this.a=d},
dVP:function dVP(d){this.a=d},
dVM:function dVM(d){this.a=d},
dVQ:function dVQ(d,e){this.a=d
this.b=e},
dVR:function dVR(d,e){this.a=d
this.b=e},
dVS:function dVS(d,e){this.a=d
this.b=e},
dVT:function dVT(d,e){this.a=d
this.b=e},
bvF(d,e,f){var w=null
return C.u(C.a([C.d(d,w,w,w,w,w,w,D.aJx,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.R,0,B.p)},
fZS(d,e,f,g){var w=null,v=C.m(24),u=C.H(f.j(0.6),B.r,1)
return C.at(C.p(w,C.u(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.ar,C.d(e,w,w,w,w,w,w,B.Ho,B.L,w,w),B.ay,C.c8(B.fE,g,B.bw,0,8)],x.p),B.m,w,B.e,B.R,0,B.p),B.h,w,w,new C.o(D.Te,w,u,v,w,w,B.n),w,w,w,w,B.a8,w,w,w),w,w,w)},
ED:function ED(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
u9:function u9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
TX:function TX(d){this.a=d},
aBl:function aBl(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.ky$=i
_.fE$=j
_.fb$=k
_.bq$=l
_.a5$=m
_.c=_.a=null},
e9V:function e9V(){},
eae:function eae(d){this.a=d},
ead:function ead(d,e){this.a=d
this.b=e},
eaf:function eaf(){},
eag:function eag(){},
e9X:function e9X(d,e,f){this.a=d
this.b=e
this.c=f},
e9W:function e9W(d,e){this.a=d
this.b=e},
e9M:function e9M(d){this.a=d},
e9N:function e9N(d){this.a=d},
e9O:function e9O(d){this.a=d},
e9P:function e9P(d){this.a=d},
e9Q:function e9Q(d){this.a=d},
e9R:function e9R(d){this.a=d},
e9S:function e9S(d){this.a=d},
e9T:function e9T(d){this.a=d},
e9U:function e9U(d){this.a=d},
e9K:function e9K(d){this.a=d},
e9L:function e9L(d){this.a=d},
e9J:function e9J(d){this.a=d},
ea7:function ea7(d,e){this.a=d
this.b=e},
ea2:function ea2(d){this.a=d},
ea3:function ea3(d){this.a=d},
ea_:function ea_(d){this.a=d},
ea4:function ea4(d){this.a=d},
e9Z:function e9Z(d){this.a=d},
ea5:function ea5(d){this.a=d},
ea6:function ea6(d){this.a=d},
e9Y:function e9Y(d){this.a=d},
ea8:function ea8(d,e){this.a=d
this.b=e},
ea1:function ea1(d,e){this.a=d
this.b=e},
ea9:function ea9(d){this.a=d},
eaa:function eaa(d){this.a=d},
eab:function eab(d){this.a=d},
eac:function eac(d){this.a=d},
ea0:function ea0(d){this.a=d},
bdh:function bdh(d,e){this.b=d
this.a=e},
aJ5:function aJ5(){},
bti:function bti(){},
cz2(){var w=0,v=C.j(x.F),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cz2=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.tt().jT(0,"assets/data/body3d.bin"),$async$cz2)
case 3:d=a1
$.fVj=J.eO(B.dz.gaL(d),d.byteOffset,d.byteLength)
t=C.bDm(d)
s=t.getUint32(4,!0)
r=C.a([],x.Y)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=C.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=C.je(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.cNZ[i]
g=C.aY((l<<16|h<<8|g|4278190080)>>>0)
r.push(new A.a11(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aPb))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new A.b6t(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cz2,v)},
aOS:function aOS(d,e,f){this.a=d
this.b=e
this.c=f},
a11:function a11(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b6t:function b6t(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Sp:function Sp(d){this.a=d},
azN:function azN(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.ky$=t
_.fE$=u
_.fb$=v
_.bq$=w
_.a5$=a0
_.c=_.a=null},
dxo:function dxo(d){this.a=d},
dxn:function dxn(d,e){this.a=d
this.b=e},
dx0:function dx0(d,e){this.a=d
this.b=e},
dx1:function dx1(){},
dxp:function dxp(){},
dx2:function dx2(d,e){this.a=d
this.b=e},
dx3:function dx3(d){this.a=d},
dx4:function dx4(){},
dx5:function dx5(d){this.a=d},
dx7:function dx7(d,e){this.a=d
this.b=e},
dx6:function dx6(d){this.a=d},
dwY:function dwY(d,e,f){this.a=d
this.b=e
this.c=f},
dwZ:function dwZ(d){this.a=d},
dx_:function dx_(d){this.a=d},
dxe:function dxe(d){this.a=d},
dxf:function dxf(d,e){this.a=d
this.b=e},
dxg:function dxg(d,e){this.a=d
this.b=e},
dxh:function dxh(d){this.a=d},
dxd:function dxd(d,e){this.a=d
this.b=e},
dxi:function dxi(d,e){this.a=d
this.b=e},
dxc:function dxc(d,e){this.a=d
this.b=e},
dxj:function dxj(d){this.a=d},
dxb:function dxb(d){this.a=d},
dxk:function dxk(d){this.a=d},
dxa:function dxa(d){this.a=d},
dxl:function dxl(d){this.a=d},
dx9:function dx9(d){this.a=d},
dxm:function dxm(d){this.a=d},
dx8:function dx8(d){this.a=d},
aI8:function aI8(){},
aI9:function aI9(){},
bWl:function bWl(d){var _=this
_.a=d
_.d=_.c=_.b=null},
bWm:function bWm(d,e){this.a=d
this.b=e},
bWn:function bWn(d){this.a=d},
avm(d,e,f,g,h){return new A.b7b(d,e,f,g,h)},
fDM(d,e,f,g,h,i){return $.hrK.ce(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new A.cFP(d,e,f,i,g,h))},
xb:function xb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
B7:function B7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
mW:function mW(d,e,f){this.a=d
this.b=e
this.c=f},
b7b:function b7b(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f_S:function f_S(){},
f_T:function f_T(){},
f_U:function f_U(){},
f_Z:function f_Z(){},
f0_:function f0_(){},
f00:function f00(){},
Su:function Su(d){this.a=d},
azQ:function azQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.ky$=n
_.fE$=o
_.fb$=p
_.bq$=q
_.a5$=r
_.c=_.a=null},
dzz:function dzz(d){this.a=d},
dzd:function dzd(d,e){this.a=d
this.b=e},
dzg:function dzg(){},
dzA:function dzA(){},
dzb:function dzb(d,e){this.a=d
this.b=e},
dzc:function dzc(d,e){this.a=d
this.b=e},
dzh:function dzh(d,e,f){this.a=d
this.b=e
this.c=f},
dz6:function dz6(){},
dz7:function dz7(){},
dz8:function dz8(d){this.a=d},
dz9:function dz9(d,e){this.a=d
this.b=e},
dza:function dza(d,e,f){this.a=d
this.b=e
this.c=f},
dzi:function dzi(){},
dzj:function dzj(d,e){this.a=d
this.b=e},
dzk:function dzk(d){this.a=d},
dzf:function dzf(d,e){this.a=d
this.b=e},
dze:function dze(d){this.a=d},
dz5:function dz5(d,e,f){this.a=d
this.b=e
this.c=f},
dzt:function dzt(d){this.a=d},
dzs:function dzs(d){this.a=d},
dzu:function dzu(d){this.a=d},
dzr:function dzr(d){this.a=d},
dzp:function dzp(d){this.a=d},
dzq:function dzq(d){this.a=d},
dzo:function dzo(d){this.a=d},
dzl:function dzl(d){this.a=d},
dzn:function dzn(d){this.a=d},
dzv:function dzv(d,e){this.a=d
this.b=e},
dzw:function dzw(d,e){this.a=d
this.b=e},
dzx:function dzx(d){this.a=d},
dzm:function dzm(d){this.a=d},
dzy:function dzy(d,e){this.a=d
this.b=e},
b7t:function b7t(d,e){this.b=d
this.a=e},
cFP:function cFP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aIe:function aIe(){},
bt2:function bt2(){},
hiF(){return new A.LD(null)},
nt(d,e,f,g,h){return new A.boG(d,e,f,g,h)},
bn7(d,e,f){return B.k.D((d-e)/(f-e),0,1)},
fEh(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
LD:function LD(d){this.a=d},
IM:function IM(d,e){this.a=d
this.b=e},
zp:function zp(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aA6:function aA6(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dEM:function dEM(d,e){this.a=d
this.b=e},
dEL:function dEL(d){this.a=d},
dEO:function dEO(d,e){this.a=d
this.b=e},
dEN:function dEN(d){this.a=d},
boG:function boG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f0g:function f0g(){},
f0h:function f0h(){},
f0i:function f0i(){},
f0t:function f0t(){},
f0w:function f0w(){},
f0x:function f0x(){},
f0y:function f0y(){},
f0z:function f0z(){},
f0A:function f0A(){},
f0B:function f0B(){},
f0C:function f0C(){},
f0j:function f0j(){},
f0k:function f0k(){},
f0l:function f0l(){},
f0m:function f0m(){},
f0n:function f0n(){},
f0o:function f0o(){},
f0p:function f0p(){},
f0q:function f0q(){},
f0r:function f0r(){},
f0s:function f0s(){},
f0u:function f0u(){},
f0v:function f0v(){},
bn8:function bn8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eHU:function eHU(d){this.a=d},
eHT:function eHT(d,e){this.a=d
this.b=e},
eHR:function eHR(d){this.a=d},
eHV:function eHV(d){this.a=d},
eHS:function eHS(d,e){this.a=d
this.b=e},
acx:function acx(d,e,f){this.c=d
this.d=e
this.a=f},
abs:function abs(d,e,f){this.c=d
this.d=e
this.a=f},
Oi:function Oi(d,e,f,g,h,i,j,k,l,m){var _=this
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
bo6:function bo6(d,e){this.b=d
this.a=e},
bnC:function bnC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b6a:function b6a(d,e){this.b=d
this.a=e},
aEg:function aEg(d,e){this.c=d
this.a=e},
aEh:function aEh(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cO$=e
_.aZ$=f
_.c=_.a=null},
eHA:function eHA(d){this.a=d},
eHz:function eHz(d){this.a=d},
eHy:function eHy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHx:function eHx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHv:function eHv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHu:function eHu(d,e,f){this.a=d
this.b=e
this.c=f},
eHw:function eHw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eHt:function eHt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHI:function eHI(d){this.a=d},
eHH:function eHH(d){this.a=d},
eHJ:function eHJ(d,e){this.a=d
this.b=e},
eHK:function eHK(d,e){this.a=d
this.b=e},
eHL:function eHL(d,e){this.a=d
this.b=e},
eHG:function eHG(d,e,f){this.a=d
this.b=e
this.c=f},
eHM:function eHM(d,e,f){this.a=d
this.b=e
this.c=f},
eHF:function eHF(d){this.a=d},
eHB:function eHB(d){this.a=d},
eHN:function eHN(d){this.a=d},
eHO:function eHO(d){this.a=d},
eHE:function eHE(d,e){this.a=d
this.b=e},
eHP:function eHP(d,e){this.a=d
this.b=e},
eHD:function eHD(d,e){this.a=d
this.b=e},
eHQ:function eHQ(d,e){this.a=d
this.b=e},
eHC:function eHC(d,e){this.a=d
this.b=e},
eHr:function eHr(){},
eHs:function eHs(){},
bmN:function bmN(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bmf:function bmf(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b6Q:function b6Q(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bmh:function bmh(d,e,f){this.b=d
this.c=e
this.a=f},
bq9:function bq9(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aJU:function aJU(){},
h0e(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.an(0,new C.v(w,0)),u=e.aE(0,new C.v(w,0)),t=1-f,s=3*t
return d.aM(0,t*t*t).an(0,v.aM(0,s*t*f)).an(0,u.aM(0,s*f*f)).an(0,e.aM(0,f*f*f))},
bdg(d,e,f,g,h,i){return $.hsk.ce(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new A.d9g(d,e,f,i,g,h))},
Zf:function Zf(d,e){this.a=d
this.b=e},
px:function px(d,e,f,g,h){var _=this
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
Bb:function Bb(d,e){this.a=d
this.b=e},
Xe:function Xe(d,e){this.a=d
this.b=e},
acn:function acn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Zs:function Zs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Bl:function Bl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a9l:function a9l(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a9C:function a9C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abw:function abw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bde:function bde(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
d9k:function d9k(d){this.a=d},
d9l:function d9l(d){this.a=d},
d9h:function d9h(d,e){this.a=d
this.b=e},
d9i:function d9i(d){this.a=d},
d9j:function d9j(d){this.a=d},
d9m:function d9m(d){this.a=d},
d9n:function d9n(d){this.a=d},
d9o:function d9o(d){this.a=d},
d9p:function d9p(d){this.a=d},
d9q:function d9q(d){this.a=d},
d9r:function d9r(d){this.a=d},
d9s:function d9s(d){this.a=d},
d9t:function d9t(d){this.a=d},
d9u:function d9u(d){this.a=d},
Eq:function Eq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
TW:function TW(d){this.a=d},
aBk:function aBk(d,e,f,g,h,i,j){var _=this
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
e9f:function e9f(d){this.a=d},
e94:function e94(d){this.a=d},
e96:function e96(){},
e97:function e97(){},
e9a:function e9a(){},
e9b:function e9b(d,e,f){this.a=d
this.b=e
this.c=f},
e9c:function e9c(d){this.a=d},
e9d:function e9d(d){this.a=d},
e98:function e98(){},
e99:function e99(d){this.a=d},
e9F:function e9F(d){this.a=d},
e9e:function e9e(){},
e90:function e90(d){this.a=d},
e9h:function e9h(d){this.a=d},
e9g:function e9g(d){this.a=d},
e9j:function e9j(){},
e9i:function e9i(d,e){this.a=d
this.b=e},
e93:function e93(){},
e91:function e91(d){this.a=d},
e92:function e92(d){this.a=d},
e9D:function e9D(d){this.a=d},
e9C:function e9C(d){this.a=d},
e9E:function e9E(d){this.a=d},
e9t:function e9t(d,e){this.a=d
this.b=e},
e9B:function e9B(d){this.a=d},
e9z:function e9z(d){this.a=d},
e9A:function e9A(d){this.a=d},
e9y:function e9y(d){this.a=d},
e9x:function e9x(d){this.a=d},
e9u:function e9u(d){this.a=d},
e9v:function e9v(d){this.a=d},
e9w:function e9w(d){this.a=d},
e95:function e95(){},
e9p:function e9p(d){this.a=d},
e9q:function e9q(d){this.a=d},
e9o:function e9o(d){this.a=d},
e9r:function e9r(d){this.a=d},
e9n:function e9n(d){this.a=d},
e9s:function e9s(d){this.a=d},
e9m:function e9m(d){this.a=d},
e9l:function e9l(d){this.a=d},
e9k:function e9k(d,e){this.a=d
this.b=e},
bdf:function bdf(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
d9g:function d9g(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aJ3:function aJ3(){},
bhK:function bhK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
O9:function O9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Ua:function Ua(d){this.a=d},
bgP:function bgP(d,e,f,g,h,i,j,k){var _=this
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
ejq:function ejq(d){this.a=d},
ejo:function ejo(d){this.a=d},
ejp:function ejp(){},
ej1:function ej1(){},
ej0:function ej0(){},
eja:function eja(d,e){this.a=d
this.b=e},
ejc:function ejc(d){this.a=d},
ejg:function ejg(d){this.a=d},
ejb:function ejb(d){this.a=d},
ejh:function ejh(d){this.a=d},
eji:function eji(d){this.a=d},
ejj:function ejj(d,e){this.a=d
this.b=e},
ej9:function ej9(d,e){this.a=d
this.b=e},
ejk:function ejk(d){this.a=d},
ej8:function ej8(d){this.a=d},
ejl:function ejl(d,e){this.a=d
this.b=e},
ej7:function ej7(d,e){this.a=d
this.b=e},
ejm:function ejm(d){this.a=d},
ej6:function ej6(d,e){this.a=d
this.b=e},
ejn:function ejn(d){this.a=d},
ej5:function ej5(d){this.a=d},
ejd:function ejd(d){this.a=d},
ej4:function ej4(d){this.a=d},
eje:function eje(d){this.a=d},
ej3:function ej3(d){this.a=d},
ejf:function ejf(d,e){this.a=d
this.b=e},
ej2:function ej2(d,e){this.a=d
this.b=e},
bo1:function bo1(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
Um:function Um(d){this.a=d},
aBy:function aBy(d,e,f,g){var _=this
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
eq_:function eq_(d,e){this.a=d
this.b=e},
eq0:function eq0(d,e,f){this.a=d
this.b=e
this.c=f},
eq1:function eq1(d){this.a=d},
epZ:function epZ(){},
eq2:function eq2(d,e){this.a=d
this.b=e},
epY:function epY(d,e){this.a=d
this.b=e},
eq3:function eq3(d,e){this.a=d
this.b=e},
epX:function epX(d,e){this.a=d
this.b=e},
eq4:function eq4(d){this.a=d},
epW:function epW(d){this.a=d},
eq5:function eq5(d,e){this.a=d
this.b=e},
epV:function epV(d,e){this.a=d
this.b=e},
eq6:function eq6(d){this.a=d},
eq7:function eq7(d){this.a=d},
epU:function epU(d,e){this.a=d
this.b=e},
aJc:function aJc(){},
aJi:function aJi(){},
YL:function YL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
TU:function TU(d){this.a=d},
aBd:function aBd(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.ky$=i
_.fE$=j
_.fb$=k
_.bq$=l
_.a5$=m
_.c=_.a=null},
e6f:function e6f(d){this.a=d},
e6g:function e6g(d,e){this.a=d
this.b=e},
e63:function e63(d,e){this.a=d
this.b=e},
e64:function e64(d){this.a=d},
e61:function e61(d){this.a=d},
e62:function e62(d){this.a=d},
e60:function e60(d){this.a=d},
e65:function e65(d){this.a=d},
e6_:function e6_(d,e){this.a=d
this.b=e},
e67:function e67(d){this.a=d},
e5Z:function e5Z(d,e){this.a=d
this.b=e},
e68:function e68(d){this.a=d},
e5Y:function e5Y(d,e){this.a=d
this.b=e},
e69:function e69(d){this.a=d},
e5X:function e5X(d){this.a=d},
e6a:function e6a(d){this.a=d},
e5W:function e5W(d){this.a=d},
e6b:function e6b(d){this.a=d},
e5V:function e5V(d){this.a=d},
e6c:function e6c(d){this.a=d},
e6d:function e6d(d){this.a=d},
e6e:function e6e(d){this.a=d},
e5U:function e5U(d){this.a=d},
e66:function e66(d){this.a=d},
bhx:function bhx(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
a9s:function a9s(d,e,f){this.a=d
this.b=e
this.c=f},
Uh:function Uh(d){this.a=d},
bgU:function bgU(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.ky$=j
_.fE$=k
_.fb$=l
_.bq$=m
_.a5$=n
_.c=_.a=null},
epr:function epr(d){this.a=d},
eps:function eps(d){this.a=d},
epq:function epq(d){this.a=d},
epg:function epg(d,e){this.a=d
this.b=e},
eph:function eph(d){this.a=d},
epe:function epe(d){this.a=d},
epf:function epf(d){this.a=d},
epd:function epd(d){this.a=d},
ep6:function ep6(d){this.a=d},
ep7:function ep7(d){this.a=d},
ep5:function ep5(d){this.a=d},
epi:function epi(d,e){this.a=d
this.b=e},
epc:function epc(d,e){this.a=d
this.b=e},
epj:function epj(d,e){this.a=d
this.b=e},
epb:function epb(d,e){this.a=d
this.b=e},
epk:function epk(d){this.a=d},
epa:function epa(d){this.a=d},
epl:function epl(d){this.a=d},
ep9:function ep9(d,e){this.a=d
this.b=e},
epm:function epm(d){this.a=d},
ep8:function ep8(d,e){this.a=d
this.b=e},
epn:function epn(d){this.a=d},
ep4:function ep4(d,e){this.a=d
this.b=e},
epo:function epo(d){this.a=d},
ep3:function ep3(d,e){this.a=d
this.b=e},
epp:function epp(d){this.a=d},
ep2:function ep2(d,e){this.a=d
this.b=e},
boS:function boS(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
a9V:function a9V(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
Ss:function Ss(d){this.a=d},
azP:function azP(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.ky$=i
_.fE$=j
_.fb$=k
_.bq$=l
_.a5$=m
_.c=_.a=null},
dyI:function dyI(d){this.a=d},
dyH:function dyH(d,e){this.a=d
this.b=e},
dyJ:function dyJ(){},
dyK:function dyK(d){this.a=d},
dyy:function dyy(d,e){this.a=d
this.b=e},
dyB:function dyB(d){this.a=d},
dyA:function dyA(d,e){this.a=d
this.b=e},
dyz:function dyz(d,e){this.a=d
this.b=e},
dyF:function dyF(d,e,f){this.a=d
this.b=e
this.c=f},
dyE:function dyE(d){this.a=d},
dyC:function dyC(d){this.a=d},
dyD:function dyD(d){this.a=d},
dyG:function dyG(d){this.a=d},
b7a:function b7a(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cFm:function cFm(d){this.a=d},
aIc:function aIc(){},
bt1:function bt1(){},
aJ0:function aJ0(){},
bth:function bth(){},
aJf:function aJf(){},
btp:function btp(){},
Em:function Em(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
aaJ:function aaJ(d,e,f){this.a=d
this.b=e
this.c=f},
TO:function TO(d){this.a=d},
bgt:function bgt(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.ky$=j
_.fE$=k
_.fb$=l
_.bq$=m
_.a5$=n
_.c=_.a=null},
e1J:function e1J(d,e){this.a=d
this.b=e},
e27:function e27(d){this.a=d},
e1X:function e1X(d){this.a=d},
e1O:function e1O(d){this.a=d},
e1Y:function e1Y(d,e){this.a=d
this.b=e},
e1Z:function e1Z(d){this.a=d},
e1N:function e1N(d){this.a=d},
e1V:function e1V(d){this.a=d},
e1W:function e1W(d){this.a=d},
e1U:function e1U(d){this.a=d},
e2_:function e2_(d,e){this.a=d
this.b=e},
e1T:function e1T(d,e){this.a=d
this.b=e},
e20:function e20(d,e){this.a=d
this.b=e},
e1S:function e1S(d,e){this.a=d
this.b=e},
e21:function e21(d,e){this.a=d
this.b=e},
e1R:function e1R(d,e){this.a=d
this.b=e},
e22:function e22(d){this.a=d},
e1Q:function e1Q(d,e){this.a=d
this.b=e},
e23:function e23(d){this.a=d},
e1P:function e1P(d){this.a=d},
e24:function e24(d){this.a=d},
e1M:function e1M(d){this.a=d},
e25:function e25(d){this.a=d},
e1L:function e1L(d){this.a=d},
e26:function e26(d){this.a=d},
e1K:function e1K(d){this.a=d},
be9:function be9(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
abd:function abd(d,e){this.a=d
this.b=e
this.c=-1000},
TT:function TT(d){this.a=d},
aBc:function aBc(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.ky$=i
_.fE$=j
_.fb$=k
_.bq$=l
_.a5$=m
_.c=_.a=null},
e5D:function e5D(d,e){this.a=d
this.b=e},
e5E:function e5E(d,e,f){this.a=d
this.b=e
this.c=f},
e5L:function e5L(d){this.a=d},
e5K:function e5K(d){this.a=d},
e5M:function e5M(d,e){this.a=d
this.b=e},
e5N:function e5N(d){this.a=d},
e5J:function e5J(d){this.a=d},
e5O:function e5O(d){this.a=d},
e5I:function e5I(d,e){this.a=d
this.b=e},
e5P:function e5P(d,e){this.a=d
this.b=e},
e5H:function e5H(d,e){this.a=d
this.b=e},
e5Q:function e5Q(d,e){this.a=d
this.b=e},
e5G:function e5G(d,e){this.a=d
this.b=e},
e5R:function e5R(d){this.a=d},
e5S:function e5S(d){this.a=d},
e5F:function e5F(d){this.a=d},
e5T:function e5T(d){this.a=d},
bhy:function bhy(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aIZ:function aIZ(){},
btf:function btf(){},
aJ_:function aJ_(){},
btg:function btg(){},
eXh(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.H(e.j(0.4),B.r,1),s=x.p,r=C.a([C.D(C.d(d,w,w,w,w,w,w,D.a4y,w,w,w),1)],s)
if(f!=null)B.d.v(r,C.a([B.aa,f],s))
return C.p(w,C.B(r,B.m,w,B.e,B.j,0,w,w),B.h,w,w,new C.o(v,w,t,u,w,w,B.n),w,w,w,w,B.iH,w,w,1/0)},
hHb(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.S(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.K)(d),++u){t=d[u]
s=v.h(0,t)
v.m(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gI(j))return!1
for(j=j.gdH(j),j=j.gag(j);j.C();){s=j.gT(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.bY(d.length,0,!1,w)
q=d.length
p=J.e_(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bE(0,new A.fdK(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.uW.h(0,d[n]).a)return!1
m=C.eN([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.K)(j),++u){k=j[u]
if(m.H(0,k))l.push(k)}return m.a===d.length},
fGJ(d){var w="TCAG",v=C.aI(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[B.a.cP(w,v[0])*16+B.a.cP(w,v[1])*4+B.a.cP(w,v[2])]},
rB:function rB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b63:function b63(d,e){this.a=d
this.b=e},
fdK:function fdK(d,e){this.a=d
this.b=e},
TR:function TR(d){this.a=d},
aBa:function aBa(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
e57:function e57(d){this.a=d},
e56:function e56(d,e){this.a=d
this.b=e},
e4U:function e4U(d,e){this.a=d
this.b=e},
e4O:function e4O(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e4P:function e4P(d){this.a=d},
e4T:function e4T(d,e){this.a=d
this.b=e},
e4S:function e4S(d,e){this.a=d
this.b=e},
e4Q:function e4Q(d){this.a=d},
e4R:function e4R(d,e){this.a=d
this.b=e},
e51:function e51(){},
e52:function e52(d){this.a=d},
e50:function e50(d){this.a=d},
e53:function e53(d){this.a=d},
e5_:function e5_(d){this.a=d},
e4Y:function e4Y(d){this.a=d},
e4Z:function e4Z(d,e){this.a=d
this.b=e},
e4V:function e4V(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4X:function e4X(d){this.a=d},
e54:function e54(d,e){this.a=d
this.b=e},
e4W:function e4W(d,e){this.a=d
this.b=e},
e55:function e55(d,e){this.a=d
this.b=e},
beQ:function beQ(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dhn:function dhn(d,e){this.a=d
this.b=e},
SP:function SP(d){this.a=d},
bfJ:function bfJ(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dGC:function dGC(d){this.a=d},
dGB:function dGB(d,e){this.a=d
this.b=e},
dGr:function dGr(d){this.a=d},
dGq:function dGq(){},
dGs:function dGs(d){this.a=d},
dGp:function dGp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dGA:function dGA(){},
dGv:function dGv(){},
dGw:function dGw(d,e){this.a=d
this.b=e},
dGu:function dGu(d,e){this.a=d
this.b=e},
dGx:function dGx(d){this.a=d},
dGt:function dGt(d){this.a=d},
dGy:function dGy(d,e){this.a=d
this.b=e},
dGz:function dGz(d,e){this.a=d
this.b=e},
T4:function T4(d){this.a=d},
aAi:function aAi(d,e,f,g,h){var _=this
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
dJr:function dJr(d){this.a=d},
dJq:function dJq(d,e){this.a=d
this.b=e},
dJe:function dJe(){},
dJd:function dJd(d,e){this.a=d
this.b=e},
dJf:function dJf(d){this.a=d},
dJj:function dJj(d){this.a=d},
dJi:function dJi(d,e){this.a=d
this.b=e},
dJk:function dJk(d){this.a=d},
dJh:function dJh(d,e){this.a=d
this.b=e},
dJl:function dJl(d){this.a=d},
dJg:function dJg(d,e){this.a=d
this.b=e},
dJm:function dJm(d){this.a=d},
dJn:function dJn(d){this.a=d},
dJo:function dJo(d){this.a=d},
dJp:function dJp(d){this.a=d},
bac:function bac(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
cYR:function cYR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cYT:function cYT(d,e,f){this.a=d
this.b=e
this.c=f},
cYS:function cYS(d,e){this.a=d
this.b=e},
aIp:function aIp(){},
bwa(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.H(e.j(0.4),B.r,1),s=x.p,r=C.a([C.D(C.d(d,w,w,w,w,w,w,D.a4y,w,w,w),1)],s)
if(f!=null)B.d.v(r,C.a([B.aa,f],s))
return C.p(w,C.B(r,B.m,w,B.e,B.j,0,w,w),B.h,w,w,new C.o(v,w,t,u,w,w,B.n),w,w,w,w,B.iH,w,w,1/0)},
f8F(d,e,f,g,h){var w,v,u=null,t=C.iR(u,u,u,u,C.dq(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),e),B.a6,B.cn,u,B.eE,B.cm)
t.fq()
w=t.b
v=w.c
w=w.a.c
w=f.aE(0,new C.v(v/2,w.gbg(w)/2))
t.a6(d,w)},
hEl(){var w,v,u,t,s,r,q,p,o=new C.f0()
o.dX(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+B.o.aj(t,4)
r=C.aZ(v)
q=C.a([],u)
while(q.length<s){p=1+o.aB(5)
if(r.H(0,p))q.push(new C.A(p,1+o.aB(2+B.o.aj(t,3))))}B.d.aY(q,new A.f9B())
w.push(new A.aOI(q))}return w},
a_E(d,e){var w,v,u,t
for(w=new C.Vm(d),v="";w.C();){u=C.jw(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jw(65+B.o.K(B.o.K(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
hQJ(d,e){var w,v,u,t,s,r,q,p=C.ad("[^A-Z]",!0,!1,!1,!1),o=C.aI(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.Vm(d),v=0,u="";w.C();){t=C.jw(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=B.o.K(v,p)
u+=C.jw(65+B.o.K(B.o.K(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aOI:function aOI(d){this.a=d},
bC4:function bC4(){},
f9B:function f9B(){},
Sk:function Sk(d){this.a=d},
bfq:function bfq(d,e,f,g,h,i){var _=this
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
duT:function duT(){},
dv5:function dv5(d){this.a=d},
dv4:function dv4(d,e,f){this.a=d
this.b=e
this.c=f},
dv6:function dv6(d){this.a=d},
dv3:function dv3(d,e){this.a=d
this.b=e},
duU:function duU(d,e){this.a=d
this.b=e},
duZ:function duZ(){},
dv_:function dv_(d){this.a=d},
duY:function duY(d){this.a=d},
dv0:function dv0(d,e){this.a=d
this.b=e},
duX:function duX(d,e){this.a=d
this.b=e},
dv1:function dv1(d,e){this.a=d
this.b=e},
duW:function duW(d,e){this.a=d
this.b=e},
dv2:function dv2(d){this.a=d},
duV:function duV(d){this.a=d},
b6f:function b6f(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cxU:function cxU(d,e){this.a=d
this.b=e},
Ti:function Ti(d){this.a=d},
bfV:function bfV(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bq$=g
_.a5$=h
_.c=_.a=null},
dNe:function dNe(d){this.a=d},
dNd:function dNd(d,e){this.a=d
this.b=e},
dNf:function dNf(d){this.a=d},
dNc:function dNc(d,e){this.a=d
this.b=e},
dN4:function dN4(d,e,f){this.a=d
this.b=e
this.c=f},
dN8:function dN8(d){this.a=d},
dN7:function dN7(d){this.a=d},
dN9:function dN9(d,e){this.a=d
this.b=e},
dN6:function dN6(d,e){this.a=d
this.b=e},
dNa:function dNa(d){this.a=d},
dN5:function dN5(d,e){this.a=d
this.b=e},
dNb:function dNb(d,e){this.a=d
this.b=e},
bbF:function bbF(d,e,f){this.b=d
this.c=e
this.a=f},
d4P:function d4P(d,e){this.a=d
this.b=e},
d4Q:function d4Q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
St:function St(d){this.a=d},
bfD:function bfD(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dz4:function dz4(d){this.a=d},
dz3:function dz3(d,e){this.a=d
this.b=e},
dyN:function dyN(){},
dyW:function dyW(d){this.a=d},
dyV:function dyV(){},
dyX:function dyX(d){this.a=d},
dyU:function dyU(){},
dyY:function dyY(d){this.a=d},
dyT:function dyT(d){this.a=d},
dyZ:function dyZ(d){this.a=d},
dyS:function dyS(d){this.a=d},
dz_:function dz_(d){this.a=d},
dyR:function dyR(d){this.a=d},
dz0:function dz0(d,e){this.a=d
this.b=e},
dyQ:function dyQ(d,e){this.a=d
this.b=e},
dz1:function dz1(d){this.a=d},
dyP:function dyP(d,e){this.a=d
this.b=e},
dz2:function dz2(d){this.a=d},
dyO:function dyO(d,e){this.a=d
this.b=e},
aI4:function aI4(){},
aIx:function aIx(){},
h57(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aE(0,e).gcj()*0.1
return new C.v((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
fzg(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new A.a2i(w,v,u,B.cA,C.S(x.N,x.y))},
hcC(d,e,f){var w=d.c,v=e===0?-42:42
return new C.v(w*f.a+v,d.d*f.b)},
j0:function j0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
vi:function vi(d,e,f,g){var _=this
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
_.cx=_.CW=_.ch=0},
a83:function a83(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
a97:function a97(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2i:function a2i(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.w=0
_.x=h},
bHA:function bHA(){},
bHL:function bHL(d){this.a=d},
bHG:function bHG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bHN:function bHN(d){this.a=d},
bHO:function bHO(d){this.a=d},
bHM:function bHM(d){this.a=d},
bHP:function bHP(d,e,f){this.a=d
this.b=e
this.c=f},
bHQ:function bHQ(d){this.a=d},
bHC:function bHC(d){this.a=d},
bHD:function bHD(d){this.a=d},
bHB:function bHB(d){this.a=d},
bHE:function bHE(d,e,f){this.a=d
this.b=e
this.c=f},
bHF:function bHF(d){this.a=d},
bHz:function bHz(d){this.a=d},
bHR:function bHR(d,e){this.a=d
this.b=e},
bHH:function bHH(d,e){this.a=d
this.b=e},
bHK:function bHK(d){this.a=d},
bHJ:function bHJ(d){this.a=d},
bHI:function bHI(d){this.a=d},
agb:function agb(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bD1:function bD1(){},
bD2:function bD2(){},
nk:function nk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cfr:function cfr(d){this.a=d},
fLA(d,e,f,g,h){return new A.ag9(d,h,e,g,f)},
NI(d,e,f){return new A.b7c(d,e,f)},
ag9:function ag9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.f=f
_.w=g
_.a=h},
aga:function aga(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.fa$=h
_.ky$=i
_.fE$=j
_.fb$=k
_.bq$=l
_.a5$=m
_.c=_.a=null},
bCH:function bCH(d,e){this.a=d
this.b=e},
bCI:function bCI(d){this.a=d},
bCG:function bCG(d){this.a=d},
bCJ:function bCJ(){},
bCK:function bCK(d){this.a=d},
bCZ:function bCZ(d){this.a=d},
bD_:function bD_(){},
bCo:function bCo(){},
bD0:function bD0(d,e){this.a=d
this.b=e},
bCY:function bCY(d,e,f){this.a=d
this.b=e
this.c=f},
bCT:function bCT(d){this.a=d},
bCQ:function bCQ(d,e,f){this.a=d
this.b=e
this.c=f},
bCR:function bCR(d,e){this.a=d
this.b=e},
bCU:function bCU(d){this.a=d},
bCO:function bCO(d,e){this.a=d
this.b=e},
bCP:function bCP(d,e){this.a=d
this.b=e},
bCS:function bCS(d){this.a=d},
bCV:function bCV(d){this.a=d},
bCM:function bCM(d,e){this.a=d
this.b=e},
bCN:function bCN(d,e){this.a=d
this.b=e},
bCW:function bCW(d){this.a=d},
bCL:function bCL(d){this.a=d},
bCX:function bCX(d){this.a=d},
bCp:function bCp(d,e){this.a=d
this.b=e},
bCD:function bCD(d,e){this.a=d
this.b=e},
bCF:function bCF(d,e){this.a=d
this.b=e},
bCE:function bCE(d,e){this.a=d
this.b=e},
bCu:function bCu(d,e){this.a=d
this.b=e},
bCv:function bCv(d){this.a=d},
bCt:function bCt(d){this.a=d},
bCw:function bCw(d,e,f){this.a=d
this.b=e
this.c=f},
bCs:function bCs(d,e){this.a=d
this.b=e},
bCx:function bCx(d,e){this.a=d
this.b=e},
bCy:function bCy(d,e,f){this.a=d
this.b=e
this.c=f},
bCr:function bCr(d,e){this.a=d
this.b=e},
bCz:function bCz(d,e,f){this.a=d
this.b=e
this.c=f},
bCq:function bCq(d,e){this.a=d
this.b=e},
bCA:function bCA(d){this.a=d},
bCB:function bCB(d){this.a=d},
bCC:function bCC(d){this.a=d},
b7c:function b7c(d,e,f){this.a=d
this.b=e
this.c=f},
f01:function f01(){},
f02:function f02(){},
f03:function f03(){},
f_R:function f_R(){},
f04:function f04(){},
f_Q:function f_Q(){},
f05:function f05(){},
f_V:function f_V(){},
f_P:function f_P(){},
f_W:function f_W(){},
f_O:function f_O(){},
f_X:function f_X(){},
f_N:function f_N(){},
f_Y:function f_Y(){},
f_M:function f_M(){},
T5:function T5(d){this.a=d},
aAj:function aAj(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.w=0
_.c=_.a=null},
dJx:function dJx(){},
dJw:function dJw(d){this.a=d},
dJv:function dJv(d,e,f){this.a=d
this.b=e
this.c=f},
dJu:function dJu(d,e){this.a=d
this.b=e},
dJz:function dJz(d,e){this.a=d
this.b=e},
dJy:function dJy(d,e){this.a=d
this.b=e},
dJA:function dJA(d){this.a=d},
dJB:function dJB(d){this.a=d},
auO:function auO(){},
auP:function auP(){},
hOv(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.cx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bV(B.v2,23)
$.a0()
b8=C.N()
b8.r=B.aH.gq(0)
b9.ap(B.v2,25,b8)
b8=C.N()
b8.sar(D.dSY.az(0,v))
b9.ap(B.v2,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
o.r=B.bh.gq(0)
o.c=B.o.K(u,5)===0?1.8:1
n=o.L()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.ch):Math.abs(c0.CW)
t=2.5132741228718345+B.k.D(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=C.N()
r.r=B.bS.gq(0)
r.c=2
r.d=B.bV
b9.bQ(B.v2,new C.v(b8*18,s*18-2),r)
r=C.N()
r.r=B.bh.gq(0)
b9.ap(B.v2,3,r)
c2.$5(b9,w?"V":"A",D.dM7,B.bh,12)
c2.$5(b9,w?B.k.aa(m,1)+" V":""+B.k.U(m*1000)+" mA",D.dLO,B.aH,9.5)
return!0
case"fan":b8=C.bM(D.ek5,B.iN)
$.a0()
s=C.N()
s.r=B.bx.gq(0)
b9.b6(b8,s)
s=C.N()
s.r=B.ak.gq(0)
b9.bi(D.ekA,s)
s=C.N()
s.r=B.M.j(0.6).gq(0)
b9.ap(D.v3,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bN(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.dh(B.aAU,18,10)
r=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
r.r=B.hY.j(b7&&c0.cx>0.5?0.55:0.95).gq(0)
n=r.L()
b8.drawOval(C.cr(s),n)
n.delete()
b8.restore()}b8=C.N()
b8.r=B.bi.gq(0)
b9.ap(D.v3,4,b8)
b8=C.N()
b8.b=B.ad
b8.c=2
b8.r=B.cq.gq(0)
b9.ap(D.v3,22,b8)
b8=C.N()
b8.b=B.ad
b8.c=0.8
b8.r=B.j_.gq(0)
b9.ap(D.v3,14,b8)
return!0
case"speaker":l=C.bM(D.ekl,B.tw)
$.a0()
b8=C.N()
b8.sar(D.ajt.az(0,new C.ae(l.a,l.b,l.c,l.d)))
b9.b6(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.N()
b8.sar(D.dTi.az(0,C.bV(B.cs,15)))
b9.ap(B.cs,14+k,b8)
b8=C.N()
b8.r=B.fc.gq(0)
b9.ap(B.cs,5,b8)
b8=C.N()
b8.r=B.bv.gq(0)
b9.ap(D.aAV,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bV(D.dK8,6+u*6+B.k.K(b8,6))
q=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.b=B.ad
q.c=1.8
q.r=B.c8.j(0.9-u*0.2).gq(0)
n=q.L()
s.drawArc.apply(s,[C.cr(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.bM(D.eku,B.tw)
$.a0()
b8=C.N()
b8.sar(D.bGT.az(0,new C.ae(j.a,j.b,j.c,j.d)))
b9.b6(j,b8)
b8=C.bM(D.aGs,B.j6)
s=C.N()
s.r=B.hG.gq(0)
b9.b6(b8,s)
if(b7){i=new C.P(Date.now(),0,!1)
h=C.AJ(i)<500?":":" "
g=B.a.aT(B.o.u(C.dk(i)),2,"0")
f=B.a.aT(B.o.u(C.he(i)),2,"0")
b8=C.N()
b8.r=B.bm.j(0.12).gq(0)
b9.bi(D.aGs,b8)
c2.$5(b9,g+h+f,D.dLW,B.bm,21)}b8=C.N()
b8.r=B.cq.gq(0)
b9.ap(D.dLV,2.4,b8)
b8=C.N()
b8.r=B.cq.gq(0)
b9.ap(D.dKb,2.4,b8)
return!0
case"calculator":j=C.bM(D.ekj,B.hB)
$.a0()
b8=C.N()
b8.sar(D.bGD.az(0,new C.ae(j.a,j.b,j.c,j.d)))
b9.b6(j,b8)
b8=C.bM(D.eke,B.fX)
s=C.N()
s.r=(b7?B.U_:D.b7y).gq(0)
b9.b6(b8,s)
if(b7)c2.$5(b9,"3.14159",D.dLN,B.T7,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.bM(new C.ae(q,s,q+6,r),B.PR)
$.a0()
p=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
p.r=(d===3?B.cl:B.c9).gq(0)
n=p.L()
b8.drawRRect(C.fA(q),n)
n.delete()}return!0
case"phone":j=C.bM(D.ekc,B.hB)
$.a0()
b8=C.N()
b8.r=K.w9.gq(0)
b9.b6(j,b8)
b8=C.N()
b8.b=B.ad
b8.c=1.6
b8.r=B.bL.gq(0)
b9.b6(j,b8)
a0=C.bM(D.ek7,B.iN)
if(b7){b8=C.N()
b8.sar(D.bI9.az(0,new C.ae(a0.a,a0.b,a0.c,a0.d)))
b9.b6(a0,b8)
a1=B.k.K(c1*0.12,1)
b8=C.bM(D.ekH,B.fX)
s=C.N()
s.b=B.ad
s.c=1.4
s.r=B.c.gq(0)
b9.b6(b8,s)
s=19*a1
b8=12.5-s
r=C.N()
r.r=B.bm.gq(0)
b9.bi(new C.ae(-5.5,b8,5.5,b8+s),r)
c2.$5(b9,"\u26a1",D.dMd,B.c,11)
c2.$5(b9,""+B.k.U(a1*100)+"%",D.dMf,B.c,8)}else{b8=C.N()
b8.r=D.aaF.gq(0)
b9.b6(a0,b8)}return!0
case"router":j=C.bM(D.ekt,B.tv)
$.a0()
b8=C.N()
b8.sar(D.bH8.az(0,new C.ae(j.a,j.b,j.c,j.d)))
b9.b6(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=D.cTS[a2]
s=a3<0?-4:4
r=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
r.r=B.d_.gq(0)
r.c=4
r.d=B.bV
n=r.L()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=B.o.K(B.k.bJ(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
s.r=(a4?B.br:B.aI).gq(0)
n=s.L()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bV(D.v3,8+u*6+B.k.K(s,6))
q=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.b=B.ad
q.c=1.8
q.r=B.hs.j(0.9-u*0.2).gq(0)
n=q.L()
b8.drawArc.apply(b8,[C.cr(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.bM(D.eki,B.iN)
s=$.a0()
r=C.N()
r.r=B.fd.gq(0)
b9.b6(b8,r)
if(b7){b8=C.N()
b8.r=B.aG.j(0.5*a5).gq(0)
b8.z=B.AW
b9.ap(B.v2,34,b8)}a6=new C.aS(s.r,B.as,b6,b6,C.a([],x.v))
a6.G(new C.bc(-16,12))
a6.G(new C.ar(-16,-2))
a6.G(new C.d_(0,-30,16,-2))
a6.G(new C.ar(16,12))
a6.G(new C.bL())
b8=C.N()
b8.r=C.ap(B.f6,D.b0V,a5).gq(0)
b9.aU(a6,b8)
b8=C.N()
b8.b=B.ad
b8.c=1.4
b8.r=B.c1.gq(0)
b9.aU(a6,b8)
if(b7){b8=b9.a
J.bN(b8.save())
b8.translate(0,-2)
b9.o6(0,c1*7)
s=C.N()
s.r=B.c.j(0.7).gq(0)
s.c=3
b9.bQ(B.J,D.aAV,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.bN(b8.save())
b8.translate(0,a7)
s=$.a0().r
r=x.v
j=new C.aS(s,B.as,b6,b6,C.a([],r))
j.G(new C.bc(-28,8))
j.G(new C.ar(-28,-2))
j.G(new C.ar(-16,-4))
j.G(new C.ar(-10,-16))
j.G(new C.ar(10,-16))
j.G(new C.ar(18,-4))
j.G(new C.ar(28,-2))
j.G(new C.ar(28,8))
j.G(new C.bL())
q=C.N()
q.sar(D.bFj.az(0,D.ekp))
b9.aU(j,q)
q=new C.aS(s,B.as,b6,b6,C.a([],r))
q.G(new C.bc(-8,-4))
q.G(new C.ar(-4,-13))
q.G(new C.ar(4,-13))
q.G(new C.ar(4,-4))
q.G(new C.bL())
p=C.N()
p.r=B.fS.gq(0)
b9.aU(q,p)
r=new C.aS(s,B.as,b6,b6,C.a([],r))
r.G(new C.bc(8,-4))
r.G(new C.ar(8,-13))
r.G(new C.ar(11,-13))
r.G(new C.ar(15,-4))
r.G(new C.bL())
s=C.N()
s.r=B.fS.gq(0)
b9.aU(r,s)
for(a2=0;a2<2;++a2){a3=D.cTP[a2]
s=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
s.r=B.aH.gq(0)
n=s.L()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.bN(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.r=B.c9.gq(0)
q.c=1.6
n=q.L()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=B.k.K(s+u*8,14)
q=-4+u*5
p=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
p.r=B.aA.gq(0)
p.c=1.6
n=p.L()
b8.drawLine.apply(b8,[-34-r,q,-42-r,q,n])
n.delete()}return!0
case"kettle":b8=$.a0().r
s=x.v
j=new C.aS(b8,B.as,b6,b6,C.a([],s))
j.G(new C.bc(-18,20))
j.G(new C.ar(-14,-12))
j.G(new C.d_(0,-20,14,-12))
j.G(new C.ar(18,20))
j.G(new C.bL())
r=C.N()
r.sar(D.bGk.az(0,D.ekh))
b9.aU(j,r)
r=new C.aS(b8,B.as,b6,b6,C.a([],s))
r.G(new C.bc(14,-10))
r.G(new C.ar(30,-22))
r.G(new C.ar(32,-18))
r.G(new C.ar(16,-4))
r.G(new C.bL())
q=C.N()
q.r=B.em.gq(0)
b9.aU(r,q)
s=new C.aS(b8,B.as,b6,b6,C.a([],s))
s.G(new C.bc(-14,-8))
s.G(new C.d_(-34,-6,-18,12))
b8=C.N()
b8.b=B.ad
b8.c=5
b8.r=B.aH.gq(0)
b9.aU(s,b8)
b8=C.N()
if(b7){s=C.ap(B.d3,B.u5,(Math.sin(c1*6)+1)/2)
s.toString}else s=B.fd
b8.r=s.gq(0)
b9.bi(D.ekg,b8)
if(b7){b8=C.N()
b8.r=B.d3.j(0.3).gq(0)
b8.z=B.m9
b9.ap(B.aAS,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=B.k.K(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.r=B.c.j(0.6*(1-a8)).gq(0)
n=q.L()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.N()
b8.r=B.aH.gq(0)
b9.ap(D.dJP,3,b8)
return!0
case"lamp":if(b7){u=B.k.D(0.4+0.12*(Math.abs(c0.ch)-3),0.4,1)
b8=new C.aS($.a0().r,B.as,b6,b6,C.a([],x.v))
b8.G(new C.bc(-10,-14))
b8.G(new C.ar(-30,24))
b8.G(new C.ar(10,24))
b8.G(new C.ar(8,-14))
b8.G(new C.bL())
s=C.N()
s.r=B.fP.j(0.28*u).gq(0)
b9.aU(b8,s)
s=C.N()
s.r=B.fP.j(0.5*u).gq(0)
s.z=R.FU
b9.ap(D.dLY,24,s)}b8=C.bM(D.ekG,B.iN)
s=$.a0()
r=C.N()
r.r=B.fd.gq(0)
b9.b6(b8,r)
r=C.N()
r.r=B.fc.gq(0)
r.c=3
r.d=B.bV
b9.bQ(D.dJV,D.aAZ,r)
r=C.N()
r.r=B.fc.gq(0)
r.c=3
r.d=B.bV
b9.bQ(D.aAZ,D.dLZ,r)
a9=new C.aS(s.r,B.as,b6,b6,C.a([],x.v))
a9.G(new C.bc(-14,-16))
a9.G(new C.ar(6,-26))
a9.G(new C.ar(10,-12))
a9.G(new C.ar(-10,-6))
a9.G(new C.bL())
s=C.N()
s.r=(b7?B.aM:B.kq).gq(0)
b9.aU(a9,s)
b8=C.N()
b8.r=(b7?B.c:B.bv).gq(0)
b9.ap(D.dM_,4,b8)
return!0
case"lights":b8=$.a0().r
s=x.v
b0=new C.aS(b8,B.as,b6,b6,C.a([],s))
b0.G(new C.bc(-34,-6))
b0.G(new C.d_(0,22,34,-6))
r=C.N()
r.b=B.ad
r.c=2
r.r=B.hh.gq(0)
b9.aU(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&B.k.K(q+u*0.7,1.8)<1.1
if(b2){b3=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
b3.r=D.ZK[u].j(0.6).gq(0)
b3.z=B.ayy
n=b3.L()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=C.a([],s)
b4=new C.aS(b8,B.as,b6,b6,b3)
b3.push(new C.bc(p-3,o))
b3.push(new C.ar(p+3,o))
b5=o+11
b3.push(new C.ar(p+5,b5))
b3.push(new C.d_(p,o+17,p-5,b5))
b3.push(new C.bL())
p=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
if(b2)o=D.ZK[u]
else{o=C.ap(D.ZK[u],B.x,0.65)
o.toString}p.r=o.gq(0)
n=p.L()
p=b4.gbL().a.snapshot()
r.drawPath((b4.e=new C.cG(p)).a,n)
n.delete()}return!0}return!1},
ru:function ru(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h4e(d,e,f,g,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.a
J.bN(h.save())
w=e.a
v=e.b
u=0+w
t=0+v
h.clipRect(C.cr(new C.ae(0,0,u,t)),$.uF()[1],!0)
if(a0<3){$.a0()
s=C.N()
s.r=D.aZr.gq(0)
d.bi(new C.ae(0,0,u,t),s)
if(a0<0.5)t=a0/0.5
else t=a0>2.4?(3-a0)/0.6:1
r=B.k.D(t,0,1)
t=e.ef(B.J)
s=e.ge8()
q=C.N()
q.sar(new C.bR(B.A,0.5,B.w,i,0,C.a([B.b2.j(0.35*r),B.K],x.O),i,i).az(0,C.bV(e.ef(B.J),e.ge8()*0.5)))
d.ap(t,s*0.5,q)
A.J9(d,"NGMY",new C.v(0,v*0.36),v*0.2,B.c.j(r),B.L,v*0.03,w)
A.J9(d,"T V",new C.v(0,v*0.6),v*0.08,B.b2.j(r),B.L,v*0.05,w)
q=w*0.3
s=v*0.78
t=C.N()
t.r=B.b2.j(r).gq(0)
d.bi(new C.ae(q,s,q+w*0.4*(a0/3),s+3),t)}else{p=B.k.D((a0-3)/0.5,0,1)
o=B.o.K(f,6)
switch(o){case 0:A.hDm(d,e,g)
break
case 1:A.hvi(d,e,g)
break
case 2:A.hCK(d,e,g)
break
case 3:A.hzJ(d,e,g)
break
case 4:A.hAV(d,e,g)
break
default:A.hCL(d,e,g)}s=w-v*0.34
q=v*0.04
n=v*0.03
m=C.bM(new C.ae(s,q,s+v*0.3,q+v*0.1),new C.b3(n,n))
$.a0()
n=C.N()
n.r=B.x.j(0.55).gq(0)
d.b6(m,n)
A.J9(d,"NGMY",new C.v(m.a+v*0.025,m.b+v*0.012),v*0.07,B.c,B.be,1,i)
n=v*0.86
s=C.N()
s.r=B.x.j(0.6).gq(0)
d.bi(new C.ae(0,n,u,n+v*0.14),s)
A.J9(d,"CH "+(f+1)+"  \xb7  "+D.Ns[o].a,new C.v(q,v*0.885),v*0.075,B.c,B.be,0,w-v*0.08)
if(p<1){s=C.N()
s.r=B.c.j(0.6*(1-p)).gq(0)
d.bi(new C.ae(0,0,u,t),s)}}l=C.N()
l.r=B.x.j(0.07).gq(0)
for(k=0;k<v;k+=3){j=l.L()
h.drawRect(C.cr(new C.ae(0,k,u,k+1)),j)
j.delete()}u=new C.aS($.a0().r,B.as,i,i,C.a([],x.v))
u.G(new C.bc(0,0))
u.G(new C.ar(w*0.45,0))
u.G(new C.ar(0,v*0.5))
u.G(new C.bL())
v=C.N()
v.r=B.c.j(0.04).gq(0)
d.aU(u,v)
h.restore()},
J9(d,e,f,g,h,i,j,k){var w=null,v=C.iR(w,w,1,w,C.dq(w,w,w,w,w,w,w,w,w,C.l(w,w,h,w,w,w,w,w,w,w,w,g,w,w,B.u,w,w,!0,w,j,w,w,w,w,w,w),e),i,B.cn,w,B.eE,B.cm),u=k==null
v.AP(u?9999:k)
v.a6(d,f.an(0,new C.v(i===B.L&&!u?(k-v.b.c)/2:0,0)))},
hDm(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=B.k.K(f,14),i=0+l,h=0+k
$.a0()
w=C.N()
w.sar(D.bHc.az(0,new C.ae(0,0,i,h)))
d.bi(new C.ae(0,0,i,h),w)
w=C.N()
w.r=B.fP.gq(0)
d.ap(new C.v(l*0.85,k*0.18),k*0.08,w)
w=k*0.78
h=C.N()
h.r=B.CQ.gq(0)
d.bi(new C.ae(0,w,i,w+k*0.22),h)
new A.f8L(d,f,k).$5(new C.v(l*0.5,k*0.8),1.5707963267948966,k*0.24,5,B.k.D(j/5,0,1)*1.4)
for(i=k*0.26,h=k*0.11,w=k*0.05,v=d.a,u=-k,t=u*0.1,u*=0.04,s=k*0.065,r=0;r<6;++r){q=B.k.D((j-(5+r*1.3))/0.5,0,1)
if(q<=0)continue
p=(r&1)===1?0.04:0
o=B.o.K(r,3)
n=B.nN.av(0,q)
J.bN(v.save())
v.translate(l*(0.2+0.12*r+p),k*(0.16+0.14*o))
v.scale(n,n)
p=C.bM(C.dh(B.J,h,i),new C.b3(w,w))
$.a0()
o=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
o.r=B.c.gq(0)
m=o.L()
v.drawRRect(C.fA(p),m)
m.delete()
p=C.bM(C.dh(B.J,h,i),new C.b3(w,w))
o=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
o.b=B.ad
o.c=2
o.r=B.bz.gq(0)
m=o.L()
v.drawRRect(C.fA(p),m)
m.delete()
A.J9(d,"\u2665 "+D.cBY[r],new C.v(t,u),s,B.tV,B.be,0,null)
v.restore()}if(j>11.5)A.J9(d,"Family is everything",new C.v(0,k*0.62),k*0.09,B.hH,B.L,0,l)},
hvi(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a0.a,i=a0.b,h=0+j,g=0+i,f=$.a0(),e=C.N()
e.sar(D.bFw.az(0,new C.ae(0,0,h,g)))
d.bi(new C.ae(0,0,h,g),e)
w=a1*40
for(h=d.a,g=x.v,v=0;v<2;++v,f=e){e=C.a([],g)
u=new C.aS(f.r,B.as,k,k,e)
e.push(new C.bc(0,i))
for(f=v===0,t=0;t<=j;t+=6){s=f?0.4:1
r=f?0.62:0.78
q=f?40:28
q=new C.ar(t,i*r+Math.sin((t+w*s)/q)*i*0.05)
e.push(q)
s=u.f
if(s!=null)q.bC(s)
s=u.e
if(s!=null)s.a.delete()
u.e=null}s=new C.ar(j,i)
e.push(s)
e=u.f
if(e!=null)s.bC(e)
e=u.e
if(e!=null)e.a.delete()
u.e=null
e=$.a0()
s=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
s.r=(f?B.jv:B.eF).gq(0)
p=s.L()
f=u.e
h.drawPath((f==null?u.e=new C.cG(u.gbL().a.snapshot()):f).a,p)
p.delete()}for(h=i*0.04,g=w*1.3,f=j+60,e=j*0.3,o=0,n=0;n<6;++n){t=B.k.K(n*90-g,f)-30
s=Math.sin(n*1.7+a1)
if(Math.abs(t-e)<12)++o
A.hCP(d,new C.v(t,i*(0.35+0.08*s)),h,B.fP)}m=Math.abs(Math.sin(a1*5))
l=new C.v(e,i*0.72-m*i*0.22)
h=C.dh(new C.v(e,i*0.82),i*0.025,i*0.14*(1-m*0.4))
$.a0()
g=C.N()
g.r=B.ds.gq(0)
d.jQ(h,g)
g=i*0.085
h=C.N()
h.sar(D.dT2.az(0,C.bV(l,g)))
d.ap(l,g,h)
h=C.N()
h.b=B.ad
h.c=2
h.r=B.w5.gq(0)
d.ap(l,g,h)
h=-i
A.J9(d,"$",l.an(0,new C.v(h*0.03,h*0.045)),i*0.09,B.w5,B.be,0,k)
g=h*0.01
h=l.an(0,new C.v(h*0.028,g))
f=C.N()
f.r=B.x.gq(0)
d.ap(h,2.4,f)
g=l.an(0,new C.v(i*0.028,g))
f=C.N()
f.r=B.x.gq(0)
d.ap(g,2.4,f)
A.J9(d,"Saved: $"+(B.o.K(B.k.bJ(a1*3),1000)+o),new C.v(i*0.05,i*0.06),i*0.08,B.c,B.be,0,k)},
hCP(d,e,f,g){var w,v,u,t,s,r,q,p=$.a0(),o=C.a([],x.v),n=new C.aS(p.r,B.as,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?f:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new C.bc(r,q)
o.push(r)
q=n.f
if(q!=null)r.bC(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new C.ar(r,q)
o.push(r)
q=n.f
if(q!=null)r.bC(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.G(new C.bL())
$.a0()
p=C.N()
p.r=g.gq(0)
d.aU(n,p)},
hCK(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a3.a,d=a3.b,a0=$.a0(),a1=C.N()
a1.r=D.b4u.gq(0)
a2.bi(new C.ae(0,0,0+e,0+d),a1)
w=new C.f0()
w.dX(7)
for(a1=a4*3,v=a2.a,u=0;u<60;++u){t=B.k.K(B.k.K(w.ae()*e-a4*(10+w.ae()*60),e)+e,e)
s=w.ae()
r=w.ae()
q=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.r=B.c.j(0.5+0.5*Math.sin(a1+u)).gq(0)
p=q.L()
v.drawCircle(t,s*d*0.85,0.6+r*1.4,p)
p.delete()}o=e*1.2-B.k.K(a4*22,e*1.6)
a1=d*0.3
s=d*0.2
r=C.N()
r.sar(D.dT0.az(0,C.bV(new C.v(o,a1),s)))
a2.ap(new C.v(o,a1),s,r)
a1=C.dh(new C.v(o,a1),d*0.07,d*0.6)
r=C.N()
r.b=B.ad
r.c=3
r.r=B.bJ.j(0.7).gq(0)
a2.jQ(a1,r)
r=Math.sin(a4*2)
J.bN(v.save())
v.translate(e*0.42,d*0.52+r*d*0.04)
a2.o6(0,-0.25)
a0=a0.r
r=x.v
n=new C.aS(a0,B.as,f,f,C.a([],r))
a1=-d
s=a1*0.04
q=d*0.1
n.G(new C.bc(s,q))
m=d*0.04
n.G(new C.d_(0,d*(0.2+0.05*Math.sin(a4*30)),m,q))
n.G(new C.bL())
l=C.N()
k=d*0.12
l.sar(D.bGb.az(0,new C.ae(s,q,s+d*0.08,q+k)))
a2.aU(n,l)
j=new C.aS(a0,B.as,f,f,C.a([],r))
l=a1*0.17
j.G(new C.bc(0,l))
s=a1*0.05
i=d*0.05
j.G(new C.d_(d*0.09,s,i,q))
j.G(new C.ar(s,q))
j.G(new C.d_(a1*0.09,s,0,l))
j.G(new C.bL())
h=C.N()
g=a1*0.08
h.sar(D.bGo.az(0,new C.ae(g,l,g+d*0.16,l+d*0.27)))
a2.aU(j,h)
h=C.N()
h.r=B.b2.gq(0)
a2.ap(new C.v(0,s),d*0.035,h)
h=new C.aS(a0,B.as,f,f,C.a([],r))
h.G(new C.bc(s,m))
h.G(new C.ar(a1*0.1,k))
h.G(new C.ar(s,q))
h.G(new C.bL())
s=C.N()
s.r=B.aG.gq(0)
a2.aU(h,s)
r=new C.aS(a0,B.as,f,f,C.a([],r))
r.G(new C.bc(i,m))
r.G(new C.ar(q,k))
r.G(new C.ar(i,q))
r.G(new C.bL())
q=C.N()
q.r=B.aG.gq(0)
a2.aU(r,q)
v.restore()},
hzJ(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=0+g,d=0+f,a0=$.a0(),a1=C.N()
a1.sar(D.bFe.az(0,new C.ae(0,0,e,d)))
a2.bi(new C.ae(0,0,e,d),a1)
for(e=a2.a,d=f*0.85,a1=f*0.7,w=x.v,a0=a0.r,v=0;v<4;++v){u=g*(0.1+0.25*v)
t=C.a([],w)
s=new C.aS(a0,B.as,h,h,t)
t.push(new C.bc(u,f))
t.push(new C.d_(u+Math.sin(a4+v)*10,d,u+4,a1+v*6))
t=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
t.b=B.ad
t.c=5
t.r=B.dk.gq(0)
r=t.L()
t=s.gbL().a.snapshot()
e.drawPath((s.e=new C.cG(t)).a,r)
r.delete()}d=B.k.K(a4*18,g*1.5)
J.bN(e.save())
e.translate(d-g*0.25,f*0.35+Math.sin(a4)*6)
d=C.dh(B.J,f*0.22,f*0.5)
a1=C.N()
a1.r=B.bx.gq(0)
a2.jQ(d,a1)
a1=new C.aS(a0,B.as,h,h,C.a([],w))
d=-f
t=d*0.22
a1.G(new C.bc(t,0))
a1.G(new C.d_(d*0.36,d*0.12+Math.sin(a4*3)*5,d*0.34,d*0.16))
s=d*0.02
a1.G(new C.d_(d*0.28,s,t,0))
t=C.N()
t.r=B.bx.gq(0)
a2.aU(a1,t)
t=f*0.03
a1=f*0.1
q=C.dh(new C.v(0,t),a1,f*0.34)
p=C.N()
p.r=B.aJ.gq(0)
a2.jQ(q,p)
p=C.N()
p.r=B.c.gq(0)
a2.ap(new C.v(f*0.15,s),3,p)
p=C.N()
p.r=B.x.gq(0)
a2.ap(new C.v(f*0.155,s),1.5,p)
e.restore()
for(s=d*0.005,q=d*0.08,p=d*0.03,o=f*0.06,d*=0.04,n=g+40,m=a4*2,v=0;v<6;++v){l=(v&1)===0?1:-1
k=B.k.K(B.k.K(a4*(24+v*7)*l+v*80,n)+g+40,n)
j=Math.sin(m+v)
J.bN(e.save())
e.translate(k-20,f*(0.52+0.06*v)+j*6)
e.scale(l,1)
k=C.dh(B.J,o,a1)
j=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
i=B.o.K(v,4)
j.r=D.aqg[i].gq(0)
r=j.L()
e.drawOval(C.cr(k),r)
r.delete()
k=C.a([],w)
j=new C.aS(a0,B.as,h,h,k)
k.push(new C.bc(d,0))
k.push(new C.ar(q,p))
k.push(new C.ar(q,t))
k.push(new C.bL())
k=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
k.r=D.aqg[i].gq(0)
r=k.L()
k=j.gbL().a.snapshot()
e.drawPath((j.e=new C.cG(k)).a,r)
r.delete()
k=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
k.r=B.x.gq(0)
r=k.L()
e.drawCircle(t,s,1.8,r)
r.delete()
e.restore()}for(v=0;v<14;++v){d=B.k.K(v*0.071+0.05,1)
a0=B.k.K(a4*(14+v*3)+v*40,f)
a1=Math.sin(m+v)
w=B.o.K(v,3)
t=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
t.b=B.ad
t.c=1.2
t.r=B.c.j(0.7).gq(0)
r=t.L()
e.drawCircle(g*d+a1*4,f-a0,2+w,r)
r.delete()}},
hAV(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a9.a,a1=a9.b,a2=B.k.K(b0,12),a3=a2<7,a4=0+a0,a5=0+a1,a6=$.a0(),a7=C.N()
a7.sar(new C.a7(B.b0,B.b5,B.w,a3?D.cUu:D.cJi,d,d).az(0,new C.ae(0,0,a4,a5)))
a8.bi(new C.ae(0,0,a4,a5),a7)
a7=a1*0.74
w=C.N()
w.r=(a3?D.b8_:B.CQ).gq(0)
a8.bi(new C.ae(0,a7,a4,a7+a1*0.26),w)
for(w=a8.a,v=a1*0.07,u=a1*0.06,t=a1*0.2,s=a1*0.1,r=a1*0.09,q=x.v,p=b0*2,a6=a6.r,o=0;o<4;++o){n=a0*(0.08+0.24*o)
m=a1*(0.14+0.03*B.o.K(o,2))
l=a7-m
k=n+t
j=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
j.r=D.cx7[o].gq(0)
i=j.L()
w.drawRect(C.cr(new C.ae(n,l,k,l+m)),i)
i.delete()
j=C.a([],q)
h=new C.aS(a6,B.as,d,d,j)
j.push(new C.bc(n-4,l))
j.push(new C.ar(n+s,l-r))
j.push(new C.ar(k+4,l))
j.push(new C.bL())
l=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
l.r=B.f6.gq(0)
i=l.L()
l=h.gbL().a.snapshot()
w.drawPath((h.e=new C.cG(l)).a,i)
i.delete()
l=n+v
k=m*0.55
j=a7-k
h=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
h.r=(a3&&B.o.K(B.k.bJ(p),2)===0?B.li:B.hI).gq(0)
i=h.L()
w.drawRect(C.cr(new C.ae(l,j,l+u,j+k)),i)
i.delete()}if(a3){for(a7=b0*20,u=b0*260,t=a1*0.8,o=0;o<70;++o){n=B.k.K(o*37+a7,a0)
g=B.k.K(o*53+u,t)
r=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
r.r=B.fS.gq(0)
r.c=1.4
i=r.L()
w.drawLine.apply(w,[n,g,n-3,g+9,i])
i.delete()}a7=b0*3
if(B.o.K(B.k.bJ(a7),7)===0&&B.k.K(a7,1)<0.3){a7=C.N()
a7.r=B.c.j(0.5).gq(0)
a8.bi(new C.ae(0,0,a4,a5),a7)
q=new C.aS(a6,B.as,d,d,C.a([],q))
q.G(new C.bc(a0*0.6,s))
s=a0*0.55
a6=a1*0.3
q.G(new C.ar(s,a6))
q.G(new C.ar(a0*0.62,a6))
q.G(new C.ar(s,a1*0.55))
s=C.N()
s.b=B.ad
s.c=4
s.r=B.li.gq(0)
a8.aU(q,s)}}else{for(a4=a0*0.5,a5=a1*0.035,a6=3.141592653589793*B.k.D((a2-7)/2,0,1)*57.29577951308232,o=0;o<6;++o){u=a0*(0.9-o*0.07)
u=C.dh(new C.v(a4,a7),u,u)
t=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
t.b=B.ad
t.c=a5
t.r=D.cYa[o].j(0.9).gq(0)
i=t.L()
w.drawArc.apply(w,[C.cr(u),180,a6,!1,i])
i.delete()}a4=C.N()
a4.r=B.fP.gq(0)
a8.ap(new C.v(a0*0.86,a1*0.16),a1*0.08,a4)}for(a4=a0+120,o=0;o<3;++o){n=B.k.K(b0*(8+o*4)+o*120,a4)-60
for(a5=a1*(0.12+0.1*o),f=0;f<4;++f){e=D.c2A[f]
$.a0()
a6=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
a6.r=(a3?B.bi:B.c.j(0.95)).gq(0)
i=a6.L()
w.drawCircle(n+e.a,a5+e.b,v,i)
i.delete()}}},
hCL(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a3.a,a1=a3.b
$.a0()
w=C.N()
w.r=B.d9.gq(0)
a2.bi(new C.ae(0,0,0+a0,0+a1),w)
v=C.N()
v.r=B.c.j(0.05).gq(0)
for(w=a2.a,u=0;u<a0;u+=16){t=v.L()
w.drawLine.apply(w,[u,0,u,a1,t])
t.delete()}for(s=0;s<a1;s+=16){t=v.L()
w.drawLine.apply(w,[0,s,a0,s,t])
t.delete()}r=a0*0.14
q=a1*0.2
p=a1*0.08
o=C.bM(new C.ae(r,q,r+a0*0.72,q+a1*0.5),new C.b3(p,p))
n=new C.aS($.a0().r,B.as,null,null,C.a([],x.v))
n.G(new C.iU(o))
q=C.N()
q.b=B.ad
q.c=5
q.r=B.bx.gq(0)
a2.aU(n,q)
m=new C.a2q(new C.wi(C.xU(n),!1,C.a([],x.R))).gJ(0)
q=m.a
l=m.b
q.jM()
k=q.e
j=k[l].b
j===$&&C.c()
j=j.a.length()
q.jM()
i=k[l].b
i===$&&C.c()
h=B.k.K(a4*j/5,i.a.length())
for(g=0;g<10;++g){q.jM()
j=k[l].b
j===$&&C.c()
j=B.k.K(h-g*9,j.a.length())
q.jM()
f=k[l].T1(j).a
j=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
j.r=B.fP.j(1-g*0.09).gq(0)
j.z=E.Oz
t=j.L()
w.drawCircle(f.a,f.b,6-g*0.5,t)
t.delete()}w=a1*0.45
q=C.bM(C.dh(new C.v(r,w),a1*0.22,a1*0.12),B.j6)
l=C.N()
l.r=B.dk.gq(0)
a2.b6(q,l)
A.J9(a2,"+",new C.v(r-5,a1*0.33),a1*0.07,B.c,B.be,0,null)
e=(Math.sin(a4*2)+1)/2
d=new C.v(a0*0.86,w)
w=C.N()
w.r=B.fP.j(0.25+0.5*e).gq(0)
w.z=R.FU
a2.ap(d,a1*0.16,w)
w=C.N()
w.r=C.ap(B.bL,B.u8,e).gq(0)
a2.ap(d,p,w)
A.J9(a2,"Electricity needs a full loop!",new C.v(0,a1*0.74),a1*0.075,B.hY,B.L,0,a0)},
hQ9(d,e,f,g){return C.a8(d,!1).cr(C.vh(null,!1,!0,!0,new A.fwG(e,g,f),B.eR,null,B.rA,new A.fwH(),x.S))},
Hg:function Hg(d,e){this.a=d
this.b=e},
f8L:function f8L(d,e,f){this.a=d
this.b=e
this.c=f},
fwG:function fwG(d,e,f){this.a=d
this.b=e
this.c=f},
fwH:function fwH(){},
Un:function Un(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBz:function aBz(d,e){var _=this
_.e=_.d=$
_.f=null
_.r=0
_.w=!0
_.x=null
_.bq$=d
_.a5$=e
_.c=_.a=null},
eqa:function eqa(d){this.a=d},
eq9:function eq9(d){this.a=d},
eq8:function eq8(d,e){this.a=d
this.b=e},
eqf:function eqf(d){this.a=d},
eqb:function eqb(d){this.a=d},
eqc:function eqc(d){this.a=d},
eqd:function eqd(d){this.a=d},
eqe:function eqe(d){this.a=d},
bqB:function bqB(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aJj:function aJj(){},
f4e(d,e,f,g){var w=null,v=C.m(24),u=C.H(f.j(0.6),B.r,1)
return C.at(C.p(w,C.u(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.ar,C.d(e,w,w,w,w,w,w,B.Ho,B.L,w,w),B.ay,C.c8(B.fE,g,B.bw,0,8)],x.p),B.m,w,B.e,B.R,0,B.p),B.h,w,w,new C.o(D.Te,w,u,v,w,w,B.n),w,w,w,B.en,B.a8,w,w,w),w,w,w)},
fHc(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.f0()
b4.dX(b5*977+13)
w=B.o.D(1+B.o.aj(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aB(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.S(u,t)
m=w
l=0
k=L.ps
j=!0
i=0
for(;;){if(!(j&&i<12))break
A:{++i
h=2+b4.aB(4)
for(g=k.a,f=k.b,e=0;e<h;r=a0,l=d){d=l+g
a0=r+f
if(d<0||a0<0||d>=7||a0>=7){e=99
break}a1=a0*7+d
if(B.d.t(p,a1)||a1===q){j=!1
break}p.push(a1);++e}if(!j||e>=99||m===0)break
a2=b4.he()?new C.A(f,-g):new C.A(-f,g)
a3=new C.A(-f,-g).A(0,a2)
a4=l+a2.a
a5=r+a2.b
if(a4<0||a5<0||a4>=7||a5>=7)break A
o.push(r*7+l);--m
g=B.d.gai(o)
n.m(0,g,a3?"/":"\\")
k=a2}}if(!j||o.length<w||p.length<5)continue
g=C.a([],v)
for(f=p.length,a6=0;a6<p.length;p.length===f||(0,C.K)(p),++a6){a7=p[a6]
if(!B.d.t(o,a7))g.push(a7)}if(g.length<3)continue
a8=B.o.D(2+B.o.aj(b5,8),2,4)
a9=C.eN([B.d.gai(g)],u)
B.d.fw(g,b4)
for(v=g.length,a6=0;a6<g.length;g.length===v||(0,C.K)(g),++a6){a7=g[a6]
if(a9.a>=a8)break
a9.H(0,a7)}b0=C.aZ(u)
b1=3+B.o.aj(b5,3)
v=q+1
b2=0
for(;;){if(b0.a<b1){b3=b2+1
g=b2<200
b2=b3}else g=!1
if(!g)break
B:{a7=b4.aB(49)
if(B.d.t(p,a7)||a7===q||a9.t(0,a7)||B.d.t(o,a7))break B
if(a7===v)break B
b0.H(0,a7)}}v=b5>=10?1:0
return new A.aT8(b0,a9,C.S(u,t),q,L.ps,w+v)}return new A.aT8(C.aZ(u),C.eN([25],u),C.S(u,t),21,L.ps,1)},
h52(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aZ(x.S),n=d.e,m=B.o.K(n,7),l=B.o.aj(n,7),k=d.f
p.push(n)
for(n=d.c,w=d.b,v=d.d,u=0;u<200;++u){t=k.a
m+=t
s=k.b
l+=s
if(m<0||l<0||m>=7||l>=7)break
r=l*7+m
if(w.t(0,r))break
p.push(r)
if(n.t(0,r))o.H(0,r)
q=e.h(0,r)
if(q==null)q=v.h(0,r)
if(q==="/")k=new C.A(-s,-t)
if(q==="\\")k=new C.A(k.b,k.a)}return new C.bkx(p,o)},
h0s(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aT8:function aT8(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
TB:function TB(d){this.a=d},
bgg:function bgg(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.fa$=g
_.ky$=h
_.fE$=i
_.fb$=j
_.bq$=k
_.a5$=l
_.c=_.a=null},
dYx:function dYx(d){this.a=d},
dYw:function dYw(d,e){this.a=d
this.b=e},
dYy:function dYy(){},
dYn:function dYn(d,e){this.a=d
this.b=e},
dYo:function dYo(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dYr:function dYr(d,e){this.a=d
this.b=e},
dYp:function dYp(d){this.a=d},
dYq:function dYq(d){this.a=d},
dYs:function dYs(d){this.a=d},
dYt:function dYt(d){this.a=d},
dYu:function dYu(d){this.a=d},
dYv:function dYv(d,e){this.a=d
this.b=e},
bdk:function bdk(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
d9D:function d9D(d,e,f){this.a=d
this.b=e
this.c=f},
d9G:function d9G(d,e,f){this.a=d
this.b=e
this.c=f},
d9E:function d9E(d){this.a=d},
d9F:function d9F(d){this.a=d},
TD:function TD(d){this.a=d},
aAX:function aAX(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.fa$=g
_.ky$=h
_.fE$=i
_.fb$=j
_.bq$=k
_.a5$=l
_.c=_.a=null},
dYQ:function dYQ(d){this.a=d},
dYP:function dYP(d,e){this.a=d
this.b=e},
dYR:function dYR(){},
dYB:function dYB(){},
dYK:function dYK(d,e){this.a=d
this.b=e},
dYH:function dYH(d){this.a=d},
dYD:function dYD(d){this.a=d},
dYI:function dYI(d){this.a=d},
dYJ:function dYJ(d){this.a=d},
dYC:function dYC(d){this.a=d},
dYL:function dYL(d){this.a=d},
dYG:function dYG(d,e){this.a=d
this.b=e},
dYM:function dYM(d){this.a=d},
dYF:function dYF(d,e){this.a=d
this.b=e},
dYN:function dYN(d){this.a=d},
dYE:function dYE(d,e){this.a=d
this.b=e},
dYO:function dYO(d){this.a=d},
bdz:function bdz(d,e){this.b=d
this.a=e},
aIO:function aIO(){},
bt8:function bt8(){},
aIP:function aIP(){},
bt9:function bt9(){},
ZK(d,e,f,g,h,i){return new A.bq_(d,e,f,g,h,i)},
bq_:function bq_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f0K:function f0K(){},
f0L:function f0L(){},
f0M:function f0M(){},
f0N:function f0N(){},
f0O:function f0O(){},
f0P:function f0P(){},
f0Q:function f0Q(){},
f0R:function f0R(){},
a68:function a68(d){this.a=d},
cag:function cag(d){this.a=d},
cah:function cah(){},
caf:function caf(d,e){this.a=d
this.b=e},
cae:function cae(d){this.a=d},
Us:function Us(d){this.a=d},
aBL:function aBL(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.fa$=f
_.ky$=g
_.fE$=h
_.fb$=i
_.bq$=j
_.a5$=k
_.c=_.a=null},
eud:function eud(d){this.a=d},
eu9:function eu9(d){this.a=d},
eu8:function eu8(d,e){this.a=d
this.b=e},
eub:function eub(d,e){this.a=d
this.b=e},
eua:function eua(d,e){this.a=d
this.b=e},
euc:function euc(d){this.a=d},
brl:function brl(d,e,f){this.b=d
this.c=e
this.a=f},
Tc:function Tc(d){this.a=d},
bfQ:function bfQ(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.fa$=d
_.ky$=e
_.fE$=f
_.fb$=g
_.bq$=h
_.a5$=i
_.c=_.a=null},
dLx:function dLx(){},
dLy:function dLy(){},
dLs:function dLs(d,e){this.a=d
this.b=e},
dLu:function dLu(d,e){this.a=d
this.b=e},
dLv:function dLv(d){this.a=d},
dLt:function dLt(d){this.a=d},
dLw:function dLw(d){this.a=d},
bmg:function bmg(d,e,f){this.b=d
this.c=e
this.a=f},
Sq:function Sq(d){this.a=d},
bfv:function bfv(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.fa$=d
_.ky$=e
_.fE$=f
_.fb$=g
_.bq$=h
_.a5$=i
_.c=_.a=null},
dxv:function dxv(){},
dxw:function dxw(){},
dxq:function dxq(){},
dxt:function dxt(d,e){this.a=d
this.b=e},
dxs:function dxs(d,e){this.a=d
this.b=e},
dxu:function dxu(d){this.a=d},
dxr:function dxr(d){this.a=d},
aF6:function aF6(d,e,f){this.a=d
this.b=e
this.c=f},
T3:function T3(d){this.a=d},
bfK:function bfK(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dJ3:function dJ3(d,e){this.a=d
this.b=e},
dJ4:function dJ4(d){this.a=d},
dJ2:function dJ2(d,e){this.a=d
this.b=e},
dJ5:function dJ5(d){this.a=d},
dJ1:function dJ1(d,e){this.a=d
this.b=e},
dJ6:function dJ6(d){this.a=d},
dJ0:function dJ0(d,e){this.a=d
this.b=e},
dJ7:function dJ7(d,e){this.a=d
this.b=e},
dJ_:function dJ_(d,e){this.a=d
this.b=e},
dJ8:function dJ8(d){this.a=d},
dIZ:function dIZ(d,e){this.a=d
this.b=e},
dJ9:function dJ9(d){this.a=d},
dIY:function dIY(d){this.a=d},
dJa:function dJa(d){this.a=d},
dIX:function dIX(d){this.a=d},
dJb:function dJb(d){this.a=d},
dJc:function dJc(d){this.a=d},
dIW:function dIW(d){this.a=d},
bhL:function bhL(d,e,f){this.b=d
this.c=e
this.a=f},
TP:function TP(d){this.a=d},
aB6:function aB6(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
e2Y:function e2Y(d,e){this.a=d
this.b=e},
e2Z:function e2Z(d,e,f){this.a=d
this.b=e
this.c=f},
e2X:function e2X(d,e,f){this.a=d
this.b=e
this.c=f},
e3_:function e3_(d){this.a=d},
e2W:function e2W(d){this.a=d},
e33:function e33(d){this.a=d},
e32:function e32(d,e){this.a=d
this.b=e},
e31:function e31(d,e){this.a=d
this.b=e},
e34:function e34(d,e){this.a=d
this.b=e},
e30:function e30(d,e){this.a=d
this.b=e},
e35:function e35(d){this.a=d},
U0:function U0(d){this.a=d},
aBp:function aBp(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
ebs:function ebs(d){this.a=d},
ebt:function ebt(d){this.a=d},
ebq:function ebq(d,e){this.a=d
this.b=e},
ebr:function ebr(d){this.a=d},
ebp:function ebp(d){this.a=d},
ebu:function ebu(d){this.a=d},
ebv:function ebv(d){this.a=d},
ebw:function ebw(d){this.a=d},
ebx:function ebx(d,e){this.a=d
this.b=e},
Ul:function Ul(d){this.a=d},
bgY:function bgY(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
epK:function epK(){},
epT:function epT(){},
epP:function epP(d){this.a=d},
epO:function epO(){},
epQ:function epQ(d,e){this.a=d
this.b=e},
epN:function epN(d,e){this.a=d
this.b=e},
epR:function epR(d){this.a=d},
epM:function epM(d,e){this.a=d
this.b=e},
epS:function epS(d){this.a=d},
epL:function epL(d){this.a=d},
TN:function TN(d){this.a=d},
bgr:function bgr(d,e,f,g,h,i,j,k){var _=this
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
_.ky$=g
_.fE$=h
_.fb$=i
_.bq$=j
_.a5$=k
_.c=_.a=null},
e1D:function e1D(){},
e1E:function e1E(){},
e1w:function e1w(d){this.a=d},
e1v:function e1v(d){this.a=d},
e1x:function e1x(d){this.a=d},
e1u:function e1u(d){this.a=d},
e1y:function e1y(d){this.a=d},
e1t:function e1t(d){this.a=d},
e1z:function e1z(d,e){this.a=d
this.b=e},
e1s:function e1s(d,e){this.a=d
this.b=e},
e1A:function e1A(d){this.a=d},
e1r:function e1r(d,e){this.a=d
this.b=e},
e1B:function e1B(d){this.a=d},
e1q:function e1q(d,e){this.a=d
this.b=e},
e1C:function e1C(d){this.a=d},
e1p:function e1p(d,e){this.a=d
this.b=e},
b9y:function b9y(d,e,f){this.c=d
this.d=e
this.a=f},
aIa:function aIa(){},
bt0:function bt0(){},
aIs:function aIs(){},
bt4:function bt4(){},
aIX:function aIX(){},
bte:function bte(){},
aJq:function aJq(){},
btq:function btq(){},
jf(d,e,f,g,h,i){return new A.b3f(h,d,f,g,i,e,null)},
hQe(d,e,f,g){var w=null
return C.cf(w,w,!0,w,new A.fx6(g,e,f),d,w,!0,!0,x.H)},
ho(d,e,f,g,h,i,j){return new A.asX(f,j,i,h,g,d,e,null)},
qi(d,e,f){return A.hQm(d,e,f)},
hQm(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qi=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aT.af$.x.h(0,e)
n=n==null?null:n.gb4()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.lP(2),$async$qi)
case 7:q=h
w=8
return C.b(q.hf(B.fK),$async$qi)
case 8:p=h
if(p==null){w=1
break}o=J.f2(B.dz.gaL(p))
w=9
return C.b(A.ckr(C.a([A.fV4(o,"image/png",f+".png")],x.C),"Made in NGMY Core Protocol"),$async$qi)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.F(x.gV).f.P(D.aIn)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qi,v)},
hmq(b4,b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=B.o.aj(22050*b5,1000),b1=b0*2,b2=new DataView(new ArrayBuffer(44+b1)),b3=new A.caa(b2)
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
w=new C.f0()
w.dX(3)
v=3
u=0.006
t=!1
s=0
switch(b8){case"piano":r=D.cDa
q=D.cHV
v=3.4
break
case"organ":r=D.cGV
q=D.cUy
u=0.02
t=!0
break
case"bell":r=D.czc
q=D.cyb
v=2.4
break
case"pluck":r=D.cD9
q=D.cki
v=7
break
case"synth":r=D.cVm
q=D.cWW
u=0.012
t=!0
break
case"flute":r=D.d_C
q=D.bW2
u=0.07
t=!0
s=0.035
break
default:r=D.ajX
q=D.ajX}b1=r.length
p=C.bY(b1,0,!1,x.i)
for(o="saw"===b6,n="tri"===b6,m="noise"===b6,l="square"===b6,k=b8.length!==0,j=-v,i=j*0.12,h=s>0,g=b8!=="bell",f=b8!=="piano",e=b8==="pluck",d=0,a0=0;a0<b0;++a0){a1=a0/22050
a2=1-a0/b0
a3=b4*(1+b7*a2)
if(k){for(a2=6.283185307179586*a3,a4=j*a1,a5=0,a6=0;a6<b1;++a6){a7=p[a6]+a2*q[a6]/22050
p[a6]=a7
a8=!g||!f||e?Math.exp(a4*(1+a6*0.35)):1
a5+=Math.sin(a7)*r[a6]*a8}a5/=1.9
if(h)a5+=(w.ae()*2-1)*s
a9=Math.min(1,a1/u)*Math.min(1,(b0-a0)/1984.5)
a5*=t?a9:a9*Math.exp(i*a1)}else{d+=6.283185307179586*a3/22050
A:{if(l){a4=Math.sin(d)>=0?0.6:-0.6
break A}if(m){a4=(w.ae()*2-1)*0.8
break A}if(n){a4=0.6366197723675814*Math.asin(Math.sin(d))
break A}if(o){a4=B.k.K(d/6.283185307179586,1)*1.2-0.6
break A}a4=Math.sin(d)
break A}a5=a4*(Math.min(1,a0/120)*Math.pow(a2,1.6))}b2.setInt16(44+a0*2,B.o.D(B.k.U(a5*0.8*32e3),-32768,32767),!0)}return J.f2(B.dz.gaL(b2))},
dL(d,e,f,g,h,i){return A.hmr(d,e,f,g,h,i)},
hmr(d,e,f,g,h,i){var w=0,v=C.j(x.H),u=1,t=[],s,r,q,p,o,n
var $async$dL=C.e(function(j,k){if(j===1){t.push(k)
w=u}for(;;)switch(w){case 0:u=3
s=""+B.k.U(d)+"|"+f+"|"+i+"|"+C.t(g)+"|"+e
r=$.hmp.ce(0,s,new A.cac(d,f,i,g,e))
if($.ca9.length<12){p=C.afX()
p.Lm(B.aGt)
$.ca9.push(p)}p=$.fSn
$.fSn=p+1
q=$.ca9[B.o.K(p,$.ca9.length)]
w=6
return C.b(J.h9M(q,new C.a17(r,null),h),$async$dL)
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
return C.i($async$dL,v)},
l0(d,e,f,g){var w,v=$.cad
if(v==="music")return A.dL(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return A.dL(261.63*v,w,f,0,g,"sine")}return A.vc(v,e,f,g)},
vc(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,B.o.D(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return A.dL(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return A.dL(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return A.dL(140+B.o.K(e,12)*9,"",150,0.9,g,v)
case"bubble":return A.dL(260+B.o.K(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":A.dL(t,"",160,-0.7,g*0.4,w)
return A.dL(900,"",90,0,g*0.45,u)
case"zap":return A.dL(t*3,"",150,1.6,g*0.4,"square")
case"click":return A.dL(2600+B.o.K(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":A.dL(320,"",220,-0.7,g*0.35,v)
return A.dL(1500,"",200,0,g*0.22,u)
case"organic":return A.dL(85+B.o.K(e,12)*5,"",190,1.1,g,v)
case"lab":return A.dL(t*1.6,"",140,-0.3,g*0.55,w)
default:return A.dL(t,"",s,0,g*0.5,w)}},
Aw(d,e,f,g){var w,v,u,t,s,r,q,p=$.cad
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.K)(e),++w)A.l0(d,e[w],f,g)
return}for(p=C.dd(e,0,C.dJ(4,"count",x.S),C.U(e).c),v=p.$ti,p=new C.bU(p,p.gI(0),v.k("bU<ai.E>")),u=x.H,v=v.k("ai.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)A.l0(d,s,f,g)
else C.bK(new C.b7(1000*q),new A.cab(d,s,f,g),u)}},
a67(d,e){var w="sine",v="noise"
switch(d){case"kick":A.dL(95,"",200,1.8,e,w)
break
case"snare":A.dL(220,"",140,0,e*0.65,v)
break
case"hat":A.dL(5000,"",50,0,e*0.35,v)
break
case"open":A.dL(5200,"",220,0,e*0.35,v)
break
case"clap":A.dL(1100,"",100,0,e*0.5,v)
break
case"tom":A.dL(150,"",230,1,e,w)
break
case"low":A.dL(100,"",260,0.9,e,w)
break
case"rim":A.dL(1700,"",60,0,e*0.4,"square")
break
case"cow":A.dL(820,"",240,0,e*0.3,"square")
break
case"crash":A.dL(3200,"",650,0,e*0.4,v)
break
case"shake":A.dL(7000,"",90,0,e*0.3,v)
break
default:A.dL(60,"",300,0,e,w)}},
yu(d){return A.hlF(d)},
hlF(d){var w=0,v=C.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l
var $async$yu=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.ax(),$async$yu)
case 7:r=f
q=C.aR(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=C.S(x.N,x.z)
w=1
break}p=B.Q.aD(0,q,null)
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
return C.i($async$yu,v)},
v9(d,e){return A.hlG(d,e)},
hlG(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$v9=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ax(),$async$v9)
case 6:s=g
w=7
return C.b(s.ao("String","ngmy_play_progress_v1_"+d,B.Q.ak(e,null)),$async$v9)
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
return C.i($async$v9,v)},
b3f:function b3f(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cmm:function cmm(d){this.a=d},
cmn:function cmn(d,e){this.a=d
this.b=e},
fx6:function fx6(d,e,f){this.a=d
this.b=e
this.c=f},
fx5:function fx5(d){this.a=d},
dy:function dy(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cmi:function cmi(d){this.a=d},
eE:function eE(d,e,f){this.c=d
this.d=e
this.a=f},
asX:function asX(d,e,f,g,h,i,j,k){var _=this
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
cmh:function cmh(d){this.a=d},
DV:function DV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cmo:function cmo(d){this.a=d},
mb:function mb(){},
cmj:function cmj(d,e,f){this.a=d
this.b=e
this.c=f},
cml:function cml(d){this.a=d},
cmk:function cmk(){},
caa:function caa(d){this.a=d},
cac:function cac(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cab:function cab(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
coT(){var w=0,v=C.j(x.cL),u,t
var $async$coT=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=A
w=3
return C.b($.tt().baE("assets/data/world110.json"),$async$coT)
case 3:u=t.hqb(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$coT,v)},
hqb(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.a,a0=d.a(B.Q.aD(0,a2,null)),a1=C.a([],x.B)
for(w=J.aV(a0),v=x.n,u=x.b,t=x.h,s=x.gO;w.C();){r=t.a(w.gT(w))
q=C.a([],s)
for(p=J.a6(r),o=J.aV(d.a(p.h(r,"r")));o.C();){n=o.gT(o)
m=C.a([],u)
for(l=J.aV(d.a(n));l.C();){k=l.gT(l)
j=J.a6(k)
m.push(C.a([C.f9(j.h(k,0)),C.f9(j.h(k,1))],v))}q.push(m)}o=C.cI(p.h(r,"n"))
m=C.cI(p.h(r,"a"))
l=C.cI(p.h(r,"ct"))
j=C.cI(p.h(r,"sr"))
i=C.f9(p.h(r,"pop"))
h=C.f9(p.h(r,"gdp"))
g=C.cI(p.h(r,"inc"))
f=C.ad("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aNd(g,f,"",0)
f=C.f9(J.q(p.h(r,"c"),0))
p=C.f9(J.q(p.h(r,"c"),1))
e=new A.a8O(o,m,l,j,i,h,g,f,p,q)
e.bsr(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new A.a8P(a1)},
fbs(d){if(d>=1e12)return B.k.aa(d/1e12,1)+" trillion"
if(d>=1e9)return B.k.aa(d/1e9,2)+" billion"
if(d>=1e6)return B.k.aa(d/1e6,1)+" million"
if(d>=1000)return B.k.aa(d/1000,1)+" thousand"
return B.k.aa(d,0)},
Fj(d){var w,v,u,t=B.o.u(B.k.U(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&B.o.K(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
a8O:function a8O(d,e,f,g,h,i,j,k,l,m){var _=this
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
a8P:function a8P(d){this.a=d},
um:function um(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
Nq:function Nq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
x9:function x9(d,e,f){this.a=d
this.b=e
this.c=f},
Np:function Np(d){this.a=0
this.b=d
this.c=0},
hs4(d,e,f){return $.hs5.ce(0,d+"|"+C.t(e)+"|"+f.l(),new A.d5D(d,e,f))},
Tj:function Tj(d){this.a=d},
aAu:function aAu(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.ky$=k
_.fE$=l
_.fb$=m
_.bq$=n
_.a5$=o
_.c=_.a=null},
dOf:function dOf(d){this.a=d},
dOe:function dOe(d,e){this.a=d
this.b=e},
dNI:function dNI(d){this.a=d},
dNG:function dNG(d){this.a=d},
dNH:function dNH(d,e,f){this.a=d
this.b=e
this.c=f},
dNF:function dNF(d){this.a=d},
dNE:function dNE(){},
dND:function dND(d){this.a=d},
dO0:function dO0(d,e){this.a=d
this.b=e},
dO1:function dO1(d,e){this.a=d
this.b=e},
dNQ:function dNQ(d){this.a=d},
dNR:function dNR(d){this.a=d},
dNP:function dNP(d){this.a=d},
dNS:function dNS(d){this.a=d},
dNJ:function dNJ(d,e){this.a=d
this.b=e},
dNK:function dNK(d){this.a=d},
dO2:function dO2(d,e){this.a=d
this.b=e},
dNO:function dNO(d,e){this.a=d
this.b=e},
dO6:function dO6(d){this.a=d},
dO_:function dO_(d){this.a=d},
dO7:function dO7(d,e){this.a=d
this.b=e},
dNZ:function dNZ(d,e){this.a=d
this.b=e},
dO8:function dO8(d){this.a=d},
dNY:function dNY(d,e){this.a=d
this.b=e},
dO9:function dO9(d){this.a=d},
dNX:function dNX(d,e){this.a=d
this.b=e},
dOa:function dOa(d){this.a=d},
dNW:function dNW(d,e){this.a=d
this.b=e},
dOb:function dOb(d){this.a=d},
dNV:function dNV(d,e){this.a=d
this.b=e},
dOc:function dOc(d){this.a=d},
dNU:function dNU(d){this.a=d},
dOd:function dOd(d){this.a=d},
dNT:function dNT(d){this.a=d},
dO3:function dO3(d){this.a=d},
dNN:function dNN(d){this.a=d},
dO4:function dO4(d){this.a=d},
dNM:function dNM(d){this.a=d},
dO5:function dO5(d){this.a=d},
dNL:function dNL(d){this.a=d},
dNC:function dNC(){},
dNB:function dNB(d){this.a=d},
dNA:function dNA(d){this.a=d},
bbM:function bbM(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d5D:function d5D(d,e,f){this.a=d
this.b=e
this.c=f},
d5E:function d5E(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aIy:function aIy(){},
aIz:function aIz(){},
acO(d,e,f,g,h){return new A.bpV(d,e,f,g,h)},
bpV:function bpV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f0D:function f0D(){},
f0E:function f0E(){},
f0F:function f0F(){},
f0G:function f0G(){},
f0H:function f0H(){},
f0I:function f0I(){},
f0J:function f0J(){},
Uo:function Uo(d){this.a=d},
bh0:function bh0(){this.d=$
this.c=this.a=null},
eqo:function eqo(d){this.a=d},
eqp:function eqp(d){this.a=d},
eqn:function eqn(d){this.a=d},
eqq:function eqq(){},
eqm:function eqm(d,e){this.a=d
this.b=e},
eql:function eql(d){this.a=d},
hsw(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.f0()
v.dX(w)
t.push(v.ae()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.f0()
v.dX(w+900)
u.push(2.2+v.ae())}return new A.bgO(new C.cn(null,x.A),new A.Np(B.cA),B.J,B.at,t,u,$,B.bu,0,C.a([],x.X),null,null)},
hsy(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hsx(d){return 1.5+1.6*Math.log(d.d/1000+1)},
fWg(d,e,f){return $.ht7.ce(0,d+"|"+C.t(e)+"|"+f.l(),new A.eKc(d,e,f))},
U9:function U9(d){this.a=d},
bgO:function bgO(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.ky$=k
_.fE$=l
_.fb$=m
_.bq$=n
_.a5$=o
_.c=_.a=null},
eiG:function eiG(d,e){this.a=d
this.b=e},
eiR:function eiR(d,e){this.a=d
this.b=e},
eiS:function eiS(d,e){this.a=d
this.b=e},
eiO:function eiO(d){this.a=d},
eiP:function eiP(d){this.a=d},
eiQ:function eiQ(d){this.a=d},
eiT:function eiT(d){this.a=d},
eiN:function eiN(d){this.a=d},
eiU:function eiU(d,e){this.a=d
this.b=e},
eiV:function eiV(d){this.a=d},
eiM:function eiM(d,e){this.a=d
this.b=e},
eiW:function eiW(d){this.a=d},
eiL:function eiL(d,e){this.a=d
this.b=e},
eiX:function eiX(d){this.a=d},
eiK:function eiK(d){this.a=d},
eiY:function eiY(d){this.a=d},
eiJ:function eiJ(d){this.a=d},
eiZ:function eiZ(d){this.a=d},
eiI:function eiI(d){this.a=d},
ej_:function ej_(d){this.a=d},
eiH:function eiH(d){this.a=d},
eiF:function eiF(){},
eiE:function eiE(){},
eiD:function eiD(d){this.a=d},
eiC:function eiC(d){this.a=d},
bo_:function bo_(d,e){this.b=d
this.a=e},
eKc:function eKc(d,e,f){this.a=d
this.b=e
this.c=f},
eKd:function eKd(){},
eKe:function eKe(){},
Tk:function Tk(d){this.a=d},
aAv:function aAv(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.ky$=l
_.fE$=m
_.fb$=n
_.bq$=o
_.a5$=p
_.c=_.a=null},
dOj:function dOj(){},
dOM:function dOM(){},
dOy:function dOy(d,e){this.a=d
this.b=e},
dOp:function dOp(d,e){this.a=d
this.b=e},
dOz:function dOz(d){this.a=d},
dOo:function dOo(d){this.a=d},
dOA:function dOA(d){this.a=d},
dOx:function dOx(d){this.a=d},
dOE:function dOE(d){this.a=d},
dOw:function dOw(d){this.a=d},
dOF:function dOF(d){this.a=d},
dOv:function dOv(d,e){this.a=d
this.b=e},
dOG:function dOG(d){this.a=d},
dOH:function dOH(d){this.a=d},
dOu:function dOu(d,e){this.a=d
this.b=e},
dOI:function dOI(d){this.a=d},
dOt:function dOt(d,e){this.a=d
this.b=e},
dOJ:function dOJ(d){this.a=d},
dOs:function dOs(d,e){this.a=d
this.b=e},
dOK:function dOK(d){this.a=d},
dOr:function dOr(d,e){this.a=d
this.b=e},
dOL:function dOL(d){this.a=d},
dOq:function dOq(d){this.a=d},
dOB:function dOB(d){this.a=d},
dOn:function dOn(d){this.a=d},
dOC:function dOC(d){this.a=d},
dOm:function dOm(d){this.a=d},
dOD:function dOD(d){this.a=d},
dOl:function dOl(d){this.a=d},
dOi:function dOi(d){this.a=d},
dOh:function dOh(){},
dOk:function dOk(d,e){this.a=d
this.b=e},
dOg:function dOg(d){this.a=d},
b71:function b71(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
U1:function U1(d){this.a=d},
bgL:function bgL(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.fa$=e
_.ky$=f
_.fE$=g
_.fb$=h
_.bq$=i
_.a5$=j
_.c=_.a=null},
ebA:function ebA(d,e){this.a=d
this.b=e},
ebB:function ebB(d,e){this.a=d
this.b=e},
ebz:function ebz(d,e){this.a=d
this.b=e},
ebC:function ebC(d,e){this.a=d
this.b=e},
eby:function eby(d,e){this.a=d
this.b=e},
bny:function bny(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eIm:function eIm(d){this.a=d},
aIA:function aIA(){},
bt6:function bt6(){},
aJ8:function aJ8(){},
btk:function btk(){},
aJb:function aJb(){},
btm:function btm(){},
hsu(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.f0()
v.dX(w)
v=v.ae()
u=new C.f0()
u.dX(w+500)
s.push(new C.v(v,u.ae()))}return new A.bfu(new C.cn(null,x.A),new A.Np(B.cA),t,B.at,s,$,B.bu,0,C.a([],x.X),null,null)},
NT:function NT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
So:function So(d){this.a=d},
bfu:function bfu(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.ky$=j
_.fE$=k
_.fb$=l
_.bq$=m
_.a5$=n
_.c=_.a=null},
dwX:function dwX(){},
dwL:function dwL(){},
dwM:function dwM(d,e){this.a=d
this.b=e},
dwN:function dwN(d,e){this.a=d
this.b=e},
dwK:function dwK(d){this.a=d},
dwJ:function dwJ(d){this.a=d},
dwP:function dwP(d){this.a=d},
dwI:function dwI(d,e){this.a=d
this.b=e},
dwQ:function dwQ(d){this.a=d},
dwH:function dwH(d){this.a=d},
dwR:function dwR(d){this.a=d},
dwG:function dwG(d){this.a=d},
dwS:function dwS(d){this.a=d},
dwF:function dwF(d){this.a=d},
dwT:function dwT(d){this.a=d},
dwE:function dwE(d){this.a=d},
dwU:function dwU(d){this.a=d},
dwD:function dwD(d){this.a=d},
dwV:function dwV(d){this.a=d},
dwC:function dwC(d){this.a=d},
dwW:function dwW(d){this.a=d},
dwB:function dwB(d){this.a=d},
dwO:function dwO(d){this.a=d},
dwA:function dwA(d){this.a=d},
b6q:function b6q(d,e){this.b=d
this.a=e},
acs:function acs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Tg:function Tg(d){this.a=d},
bfT:function bfT(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.ky$=q
_.fE$=r
_.fb$=s
_.bq$=t
_.a5$=u
_.c=_.a=null},
dMR:function dMR(d){this.a=d},
dMH:function dMH(d,e){this.a=d
this.b=e},
dMI:function dMI(d,e){this.a=d
this.b=e},
dMG:function dMG(d,e){this.a=d
this.b=e},
dMJ:function dMJ(d){this.a=d},
dMF:function dMF(d){this.a=d},
dMK:function dMK(d){this.a=d},
dME:function dME(d,e){this.a=d
this.b=e},
dML:function dML(d){this.a=d},
dMD:function dMD(d,e){this.a=d
this.b=e},
dMM:function dMM(d){this.a=d},
dMC:function dMC(d,e){this.a=d
this.b=e},
dMN:function dMN(d){this.a=d},
dMB:function dMB(d,e){this.a=d
this.b=e},
dMO:function dMO(d){this.a=d},
dMA:function dMA(d){this.a=d},
dMP:function dMP(d){this.a=d},
dMz:function dMz(d){this.a=d},
dMQ:function dMQ(d){this.a=d},
dMy:function dMy(d){this.a=d},
bbC:function bbC(d,e){this.b=d
this.a=e},
d2M:function d2M(d){this.a=d},
TY:function TY(d){this.a=d},
bgK:function bgK(d,e,f,g,h,i,j,k){var _=this
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
_.ky$=g
_.fE$=h
_.fb$=i
_.bq$=j
_.a5$=k
_.c=_.a=null},
ebg:function ebg(d,e){this.a=d
this.b=e},
ebh:function ebh(d){this.a=d},
ebf:function ebf(d){this.a=d},
ebi:function ebi(d){this.a=d},
ebe:function ebe(d){this.a=d},
ebj:function ebj(d){this.a=d},
ebd:function ebd(d){this.a=d},
ebk:function ebk(d){this.a=d},
ebc:function ebc(d){this.a=d},
ebl:function ebl(d){this.a=d},
ebb:function ebb(d,e){this.a=d
this.b=e},
ebm:function ebm(d){this.a=d},
eba:function eba(d,e){this.a=d
this.b=e},
ebn:function ebn(d){this.a=d},
eb9:function eb9(d,e){this.a=d
this.b=e},
ebo:function ebo(d){this.a=d},
eb8:function eb8(d,e){this.a=d
this.b=e},
bmQ:function bmQ(d,e){this.b=d
this.a=e},
aI7:function aI7(){},
bt_:function bt_(){},
aIv:function aIv(){},
bt5:function bt5(){},
aJ7:function aJ7(){},
btj:function btj(){},
fV4(d,e,f){var w,v
C.fJ(0,0,!1)
w=new C.l3(e,f,$,null)
v=w.bCh(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
ckr(d,e){var w=0,v=C.j(x.fA),u
var $async$ckr=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.fJN().wf(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$ckr,v)}},D,K,G,Q,U,Aa,Y,Ab,Ac,Z,Ad
J=c[1]
C=c[0]
B=c[2]
A_=c[111]
V=c[101]
F=c[88]
N=c[96]
A0=c[103]
W=c[108]
A1=c[109]
L=c[113]
I=c[92]
A2=c[86]
A3=c[102]
T=c[100]
A4=c[64]
A5=c[81]
X=c[73]
P=c[84]
A6=c[115]
A7=c[107]
R=c[87]
M=c[89]
S=c[110]
A8=c[68]
A9=c[106]
O=c[91]
H=c[104]
E=c[93]
A=a.updateHolder(c[17],A)
D=c[85]
K=c[99]
G=c[39]
Q=c[97]
U=c[95]
Aa=c[114]
Y=c[90]
Ab=c[98]
Ac=c[105]
Z=c[112]
Ad=c[94]
A.aho.prototype={}
A.Tw.prototype={
S(){var w=A.fzg()
return new A.bge(w,C.S(x.N,x.i),new C.ao(B.aq,$.au()),C.a([],x.X),C.a([],x.L),C.m8(0,null,null))}}
A.bge.prototype={
p(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
this.ch.p()
this.a2()},
LR(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$LR=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=B.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aT.af$.d.c
if(s!=null)s.jc()
p.bH(0,B.c_)
t.n(new A.dVx(t))
t.a.toString
p=t.d
w=3
return C.b(A.bvk(A.huj(q,A.hFq(p),o,t.ay)),$async$LR)
case 3:s=e
r=s==null?null:J.iK(s)
if(r==null||r.length===0||B.a.a_(r,"{"))r=A.hGM(q,p,o)
if(t.c==null){w=1
break}t.n(new A.dVy(t,o,r))
$.aT.x1$.push(new A.dVz(t))
case 1:return C.h(u,v)}})
return C.i($async$LR,v)},
W8(d){return this.bSK(d)},
aRm(){return this.W8(null)},
bSK(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$W8=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=B.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aT.af$.d.c
if(s!=null)s.jc()
t.f.saR(0,o)
t.n(new A.dVK(t))
A.dL(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=A
w=3
return C.b(A.bvk(A.hAK(o)),$async$W8)
case 3:r=n.a=m.hOw(f)
p.b=""
if(r!=null&&!A.hFr(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=A.hGN(o)
q=C.ad(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new A.aho(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.n(new A.dVL(p,t))
t.bXR(p.a)
case 1:return C.h(u,v)}})
return C.i($async$W8,v)},
bXR(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
B.d.a7(w)
w=++m.as
v=m.d
B.d.a7(v.a)
B.d.a7(v.b)
m.e.a7(0)
m.n(new A.dVG(m))
t=d.d
s=C.S(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new A.dVE(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new A.dVH(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.K)(r),++u){p.$2(o,new A.dVI(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new A.dVJ(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=B.bF.j(0.1),g=C.m(16),f=C.H(B.bF.j(0.35),B.r,1)
if(m.x)j=C.B(C.a([D.eqq,B.bb,C.D(C.d(m.Q,l,l,l,l,l,l,B.QF,l,l,l),1)],x.p),B.m,l,B.e,B.j,0,l,l)
else if(k==null)j=D.eOR
else{w=C.D(C.d(k.a,l,l,l,l,l,l,A2.R0,l,l,l),1)
v=x.p
w=C.a([C.B(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.eAE,l,l,l)],v),B.m,l,B.e,B.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.C(B.ue,C.d(u,l,l,l,l,l,l,D.eDc,l,l,l),l))
w.push(B.d5)
w.push(C.d(k.b,l,l,l,l,l,l,D.R7,l,l,l))
u=k.e
if(u.length!==0){t=B.aM.j(0.12)
s=C.m(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.eFr,l,l,l),B.h,l,l,new C.o(t,l,l,s,l,l,B.n),l,l,l,B.il,B.ch,l,l,l))}w.push(B.ar)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?B.c:B.aA
w.push(new C.C(B.JK,new C.cC(B.aZ,B.e,B.j,B.F,l,B.p,l,0,C.a([new C.w(t,l,B.mX,l,l,l,l,l,l,l,l,l),B.bp,new C.bE(1,B.bo,new C.w(q,l,new C.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.K)(j),++p){o=j[p]
t=new C.b3(12,12)
s=new C.b3(12,12)
B.d.v(w,C.a([B.P,new C.bF(B.a7,l,l,C.p(l,new C.w(o.a,l,B.a3Z,l,l,l,l,l,l,l,l,l),B.h,l,l,new C.o(B.bF.j(0.3),l,l,new C.bv(t,t,t,t),l,l,B.n),l,l,l,l,B.fx,l,l,l),l),B.av,C.p(l,new C.w(o.b,l,D.eKB,l,l,l,l,l,l,l,l,l),B.h,l,l,new C.o(B.c.j(0.07),l,l,new C.bv(s,s,s,s),l,l,B.n),l,l,l,l,B.bQ,l,l,l)],v))}if(m.ax)w.push(D.dN5)
j=C.ch(C.u(w,B.F,l,B.e,B.j,0,B.p),B.q,m.ch,B.z,l,l,l,l,B.ai)}w=x.p
g=C.u(C.a([C.afD(C.p(l,j,B.h,l,new C.aX(0,1/0,0,i),new C.o(h,l,f,g,l,l,B.n),l,l,l,D.acj,B.ei,l,l,1/0),B.b8,B.i0),C.D(A.fLA(m.d,l,l,l,m.e),1)],w),B.m,l,B.e,B.j,0,B.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new A.dy("Ask about it",i,new A.dVO(m),l,B.bF,l),new A.dy("Invent something new",!i,new A.dVP(m),l,B.bF,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.cVU[p]
i.push(new A.dy(n,!1,new A.dVQ(m,n),l,B.bF,l))}f.push(new A.eE(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.cH8[p]
i.push(new A.dy(r,!1,new A.dVR(m,r),l,B.bF,l))}f.push(new A.eE(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=B.c.j(0.07)
i=C.D(C.aK(l,B.U,!1,l,!0,B.q,l,C.aL(),m.f,l,l,l,l,l,2,C.bm(l,new C.b2(4,C.m(16),B.W),l,B.eH,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,B.kg,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.z,!0,l,!0,l,!1,l,B.ag,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new A.dVS(m,k),l,!1,l,l,!1,l,!0,l,B.a8,l,l,l,l,l,l,l,l,l,l,l,B.di,!0,B.a6,l,B.am,l,B.aJ4,l,l),1)
h=m.at
v=h&&j?D.bri:B.dO
j=h&&j?"Ask":"Invent"
f.push(C.B(C.a([i,B.aa,new A.fe(v,j,new A.dVT(m,k),B.bF,l)],w),B.m,l,B.e,B.j,0,l,l))
return A.jf(B.bF,B.fV,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.u(f,B.m,l,B.e,B.R,0,B.p))}}
A.ED.prototype={}
A.u9.prototype={}
A.TX.prototype={
S(){return new A.aBl(B.J,B.J,B.at,C.aZ(x.S),$,B.bu,0,C.a([],x.X),null,null)}}
A.aBl.prototype={
gaSu(){var w,v,u,t=this,s=D.Fp[t.cx],r=D.O4[t.cy],q=D.AG[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ef(w,w.r,C.a2(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aqO[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+B.d.cI(p,0,new A.e9V())},
ga08(){return D.Fp[this.cx].d/this.gaSu()},
gaK9(){return 0.1*(D.Fp[this.cx].d/0.9)/D.O4[this.cy].d},
Z(){this.a0()
this.kL()
A.yu("rocket_lander").bw(new A.eae(this),x.P)},
bXZ(){var w=this
w.ay=B.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+B.cA.ae()*0.6
w.f=new C.v(0.15+B.cA.ae()*0.7,0.08)
w.r=new C.v((B.cA.ae()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
l3(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.n(new A.eaf())
return}w=D.qt[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=B.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.v(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga08()
v=v.an(0,new C.v(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaK9())}if(m.dy){t=m.r
v=v.aE(0,t.aM(0,t.gcj()*6*D.asp[m.d]))}t=m.r=m.r.an(0,v.aM(0,d))
s=m.f=m.f.an(0,t.aM(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new C.v(-t.a*0.4,t.b)
t=new C.v(B.k.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new C.v(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.AG[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
A.v9("rocket_lander",C.E(["unlocked",t],x.N,x.z))
A.Aw("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga08()/(D.qt[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+B.k.aa(m.ga08()/(D.qt[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
A.dL(80,"",500,0,0.6,"noise")
C.fU()}}if(m.Q&&m.x>0&&B.o.K(B.k.bJ(m.CW*20),2)===0)A.dL(90,"",70,0,0.12,"noise")
m.n(new A.eag())},
acS(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.eCK,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new A.dy(e[w].a,f.$1(w),new A.e9X(this,g,w),v,h,v))
return new C.C(B.fm,C.u(C.a([u,B.d5,C.c8(B.bH,s,B.bw,6,6)],t),B.F,v,B.e,B.j,0,B.p),v)},
bxC(d){var w,v,u,t,s=this,r=null,q=s.ga08()/(D.qt[s.d].b/9.81*0.28)>=1,p=B.k.U(1/s.gaK9()),o=D.asp[s.d],n=C.m(24),m=d.c,l=C.H(m.j(0.6),B.r,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),B.av,C.d(d.d+" Gravity here: "+C.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,D.aKa,r,r,r),B.T,s.acS("ENGINE: "+D.Fp[s.cx].b,D.Fp,new A.e9M(s),new A.e9N(s),B.d3),s.acS("FUEL TANK: "+D.O4[s.cy].b,D.O4,new A.e9O(s),new A.e9P(s),B.bm),s.acS("LANDING GEAR: "+D.AG[s.db].b,D.AG,new A.e9Q(s),new A.e9R(s),B.b2),s.acS("EXTRAS (tap to add)",D.aqO,new A.e9S(s),new A.e9T(s),B.bF)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.f4v)
o=(q?B.bm:B.cL).j(0.14)
w=C.m(12)
v=B.k.aa(s.gaSu(),2)
u=B.k.aa(s.ga08()/(D.qt[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+B.k.U(D.AG[s.db].d*100)+".",r,r,r,r,r,r,D.eDi,r,r,r),B.h,r,r,new C.o(o,r,r,w,r,r,B.n),r,r,r,B.il,B.bQ,r,r,r))
m.push(B.T)
m.push(new C.bF(B.A,r,r,new A.fe(B.mI,"Launch",new A.e9U(s),B.bm,r),r))
return C.at(C.p(r,C.ch(C.u(m,B.F,r,B.e,B.R,0,B.p),B.q,r,B.z,r,B.c2,r,r,B.ai),B.h,r,B.ld,new C.o(D.b7c,r,l,n,r,r,B.n),r,r,r,B.bQ,r,r,r,r),r,r,r)},
aTA(d,e,f,g){var w=null,v=f?B.d3:B.c.j(0.1),u=C.m(18),t=C.H(B.bf,B.r,1)
return C.pg(B.jF,C.p(w,C.V(d,B.c,w,w,w,30),B.h,w,w,new C.o(v,w,t,u,w,w,B.n),w,62,w,w,w,w,w,g),w,new A.e9J(e),new A.e9K(e),w,w,w,w,new A.e9L(e))},
aTz(d,e,f){return this.aTA(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cj(new A.ea7(s,D.qt[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.qt[w].a:"\ud83d\udd12"
o.push(new A.dy(v,s.d===w,new A.ea8(s,w),r,D.qt[w].c,r))}v=C.a([s.aTz(D.brp,new A.ea9(s),s.y),B.bb,s.aTA(B.uz,new A.eaa(s),s.Q,130),B.bb,s.aTz(B.XZ,new A.eab(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?B.b2:B.c.j(0.1)
t=C.m(18)
B.d.v(v,C.a([B.bb,C.aJ(r,C.p(r,D.bvt,B.h,r,r,new C.o(u,r,C.H(B.bf,B.r,1),t,r,r,B.n),r,62,r,r,r,r,r,62),B.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.eac(s),r,r,r,r,r,r,!1,B.ae)],p))}return A.jf(B.d3,B.fV,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.u(C.a([new A.eE(o,"WORLD",r),C.B(v,B.m,r,B.b6,B.j,0,r,r)],p),B.m,r,B.e,B.R,0,B.p))}}
A.bdh.prototype={
a6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.qt[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.a0(),d=C.N(),a0=j.c,a1=C.ap(D.b9t,a0,0.25)
a1.toString
d.sar(new C.a7(B.b0,B.b5,B.w,C.a([D.b2l,a1],x.O),l,l).az(0,new C.ae(0,0,g,f)))
a2.bi(new C.ae(0,0,g,f),d)
w=new C.f0()
w.dX(5)
for(g=a2.a,v=0;v<70;++v){f=w.ae()
d=w.ae()
a1=w.ae()
u=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
u.r=B.c.j(0.2+w.ae()*0.5).gq(0)
t=u.L()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=C.a([],f)
r=new C.aS(e.r,B.as,l,l,d)
r.G(new C.bc(0,s+14))
q=new C.f0()
q.dX(2)
for(p=0;p<=i;p+=18){e=new C.ar(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.ae()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bC(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.G(new C.ar(i,h))
r.G(new C.ar(0,h))
r.G(new C.bL())
e=$.a0()
d=C.N()
d.r=C.ap(a0,B.x,0.6).gq(0)
a2.aU(r,d)
o=C.dh(new C.v(k.ax*i,s+10),8,k.ay*i)
d=C.bM(o,B.j6)
a0=C.N()
a0.r=B.br.gq(0)
a2.b6(d,a0)
a0=C.bM(o.cD(2),B.tv)
d=C.N()
d.b=B.ad
d.c=2
d.r=B.c.j(0.5+0.3*Math.sin(k.CW*4)).gq(0)
a2.b6(a0,d)
if(k.as==="ready")return
d=k.f
J.bN(g.save())
g.translate(d.a*i,d.b*h)
a2.o6(0,k.w)
i=k.as
if(i==="crashed"){k=C.N()
k.r=B.d3.j(0.6).gq(0)
k.z=R.FU
a2.ap(B.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new C.aS(i,B.as,l,l,C.a([],f))
n.G(new C.bc(-8,18))
n.G(new C.ar(0,44+Math.sin(k.CW*40)*8))
n.G(new C.ar(8,18))
n.G(new C.bL())
k=C.N()
k.r=B.aM.gq(0)
a2.aU(n,k)
i=new C.aS(i,B.as,l,l,C.a([],f))
i.G(new C.bc(-4,18))
i.G(new C.ar(0,32))
i.G(new C.ar(4,18))
i.G(new C.bL())
k=C.N()
k.r=B.c.gq(0)
a2.aU(i,k)}k=e.r
m=new C.aS(k,B.as,l,l,C.a([],f))
m.G(new C.bc(0,-26))
m.G(new C.d_(14,-10,11,18))
m.G(new C.ar(-11,18))
m.G(new C.d_(-14,-10,0,-26))
m.G(new C.bL())
i=C.N()
i.sar(D.bGM.az(0,D.ekb))
a2.aU(m,i)
i=C.N()
i.r=B.b2.gq(0)
a2.ap(D.v3,5,i)
i=new C.aS(k,B.as,l,l,C.a([],f))
i.G(new C.bc(-11,6))
i.G(new C.ar(-20,20))
i.G(new C.ar(-11,18))
i.G(new C.bL())
h=C.N()
h.r=B.aG.gq(0)
a2.aU(i,h)
f=new C.aS(k,B.as,l,l,C.a([],f))
f.G(new C.bc(11,6))
f.G(new C.ar(20,20))
f.G(new C.ar(11,18))
f.G(new C.bL())
k=C.N()
k.r=B.aG.gq(0)
a2.aU(f,k)
g.restore()},
aq(d){return!0}}
A.aJ5.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bti.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bq4()}}
A.aOS.prototype={}
A.a11.prototype={}
A.b6t.prototype={}
A.Sp.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.eN(["skin"],x.N),o=new Float32Array(0)
return new A.azN(w,v,u,t,s,r,q,new C.cn(null,x.A),p,D.If,D.If,B.at,B.cA,o,new Int32Array(0),$,B.bu,0,C.a([],x.X),null,null)}}
A.azN.prototype={
Z(){var w=this
w.a0()
w.kL()
w.as=new A.bWl(w.gc4q())
new A.dxo(w).$0()
return},
p(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a9(0)
v.d=null}this.bp6()},
c4r(d){var w,v=this
if(v.c==null)return
w=J.a6(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eM(0,C.E(["t","init","data",$.fVj],x.N,x.z))
v.at=!0
v.ax=""
v.av5()
break
case"pick":v.n(new A.dx0(v,d))
break
case"shot":v.aeK(C.t(w.h(d,"data")))
break
case"error":$.al.$1("[body viewer] "+C.t(w.h(d,"text")))
break}},
av5(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aoS[q.CW]
v=new A.dx1()
u=q.ay
u=C.z(u,C.a2(u).k("ck.E"))
B.d.fz(u)
t=x.N
s=C.E(["layers",u,"skinMode",q.ch,"tone","#"+C.t(v.$1(w.b))+C.t(v.$1(w.c))+C.t(v.$1(w.d)),"sel",q.cx,"bpm",B.k.U(q.k3),"spin",q.fy],t,x.cK)
r=B.Q.ak(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.S(t,x.z)
u.m(0,"t","state")
u.v(0,s)
v.eM(0,u)}},
aeK(d){return this.ckD(d)},
ckD(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aeK=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=B.cw.aF(B.a.aW(d,B.a.cP(d,",")+1))
w=6
return C.b(A.ckr(C.a([A.fV4(r,"image/png","body.png")],x.C),"Made in NGMY Core Protocol"),$async$aeK)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.F(x.gV).f.P(D.aIn)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$aeK,v)},
auz(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
l3(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&B.k.bJ(w)!==B.k.bJ(v.ok)){A.a67("kick",0.4)
v.a2F(170,new A.dxp())}v.ok=w
return},
aez(d){var w,v,u,t,s=this
s.n(new A.dx2(s,d))
if(d==null){s.fx=D.If
s.dy=1
w=s.as
if(w!=null)w.eM(0,C.E(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.U(w).k("a5<1>")
u=C.z(new C.a5(w,new A.dx3(d),v),v.k("G.E"))
t=B.d.gJ(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.H(0,t)
if(s.ch===2)s.ch=1}s.av5()
w=s.as
if(w!=null)w.eM(0,C.E(["t","focus","group",d],x.N,x.z))
s.go=0
s.cn_(t,d)
return},
cn_(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){A.a67("kick",0.8)
this.a2F(260,new A.dx4())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")A.dL(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a2F(w*70,new A.dx5(this))
else if(B.a.t(e,"intestine")||e==="Stomach")A.dL(110,"",360,0.7,0.3,"saw")
else A.vc("organic",6+B.o.K(e.length,8),200,0.6)
break
case"bone":A.dL(210+e.length*4,"",80,0.6,0.55,"tri")
A.dL(2400,"",20,0,0.3,v)
break
case"muscle":A.dL(70,"",150,1,0.6,"sine")
break
case"vessel":A.dL(300,"",380,0.4,0.22,v)
A.a67("kick",0.3)
break
default:A.vc("organic",2+B.o.K(e.length,6),200,0.4)}},
crk(d){this.n(new A.dx7(this,d))},
aTS(){var w,v,u,t,s,r,q,p=this,o=C.aZ(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(p.auz(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.H(0,s.a)}q=C.z(o,o.$ti.k("ck.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aB(w)]
p.p4=""},
bOp(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.n(new A.dwY(u,w,d))
v=x.t
A.Aw("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a2F(1100,new A.dwZ(u))
return}if(d==null){if(u.cx!=null)u.aez(null)
return}u.aez(d)},
bS3(d,e){var w,v=this,u=null,t=C.m(18),s=C.H(B.c8.j(0.5),B.r,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.ezj,u,u,u)}else if(d==null||e==null)w=D.eMx
else{w=x.p
w=C.B(C.a([C.D(C.u(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,B.j7,u,u,u),B.d5,C.d(e.b,u,u,u,u,u,u,D.R7,u,u,u)],w),B.F,u,B.e,B.R,0,B.p),1),C.aF(u,u,u,u,D.bxQ,u,u,u,new A.dx_(v),u,u,u,u,"Back to the whole body",B.c6)],w),B.F,u,B.e,B.j,0,u,u)}return C.p(u,w,B.h,u,u,new C.o(D.Td,u,s,t,u,u,B.n),u,u,u,u,F.acG,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.d4L.h(0,g)
i.av5()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.cPI
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(i.auz(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!B.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aF(h,h,h,h,D.m5,h,h,h,new A.dxe(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?B.bE:C.CB(h,B.pq,q)}else q=B.kc
q=C.u(C.a([C.D(q,1),new C.C(D.bf2,i.bS3(g,f),h)],v),B.m,h,B.e,B.j,0,B.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.cIs[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new A.dy(l,n,new A.dxf(i,o),o.c,B.c8,h))}p=C.a([new A.eE(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.K)(w),++s){k=w[s]
n.push(new A.dy(k,k===i.cx,new A.dxg(i,k),h,B.aM,h))}p.push(new A.eE(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(A.ho(B.cL,""+B.k.U(n)+" beats/min","Heart rate",180,40,new A.dxh(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new A.DV(D.aoS[j],i.CW===j,new A.dxi(i,j),!1,h))
p.push(new A.eE(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new A.dy("Spin",n,new A.dxj(i),D.afJ,B.b2,h),new A.fe(B.jI,"Reset view",new A.dxk(i),B.c,h),new A.dy(l,m,new A.dxl(i),B.EC,B.aM,h)],v)
if(t.t(0,"organ"))v.push(new A.dy("Heartbeat sound",i.k4,new A.dxm(i),B.nt,B.cL,h))
p.push(new A.eE(v,h,h))
return A.jf(B.c8,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.u(p,B.m,h,B.e,B.R,0,B.p))}}
A.aI8.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.aI9.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bp5()}}
A.bWl.prototype={
k7(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aI(e,"</script","<\\/script")
v=$.h0d
$.h0d=v+1
u="ngmy-body-viewer-"+v
$.xI()
$.pI().p8(u,new A.bWm(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fB(v,"message",new A.bWn(t),!1,x.gA)
t.b=u},
eM(d,e){var w,v
try{w=this.c
if(w!=null){w=C.bvh(w.contentWindow)
if(w!=null)J.fyu(w,e,"*")}}catch(v){}}}
A.xb.prototype={}
A.B7.prototype={}
A.mW.prototype={}
A.b7b.prototype={}
A.Su.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new A.azQ(C.S(w,x.a2),C.a([],x.cB),C.S(w,v),C.S(w,v),C.S(w,u),B.at,B.J,B.J,C.aZ(u),$,B.bu,0,C.a([],x.X),null,null)}}
A.azQ.prototype={
Z(){var w=this
w.a0()
w.kL()
w.a9N()
$.aT.x1$.push(new A.dzz(w))},
a9N(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$a9N=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ax(),$async$a9N)
case 6:q=e.rn("ngmy_circuit_passed_v1")
r=q==null?B.U:q
if(s.c!=null)s.n(new A.dzd(s,r))
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
return C.i($async$a9N,v)},
aa6(d){return this.bVF(d)},
bVF(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$aa6=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.H(0,d)
u=3
w=6
return C.b(C.ax(),$async$aa6)
case 6:r=f
q=s.cx
p=C.a2(q).k("jB<ck.E,n>")
q=C.z(new C.jB(q,new A.dzg(),p),p.k("G.E"))
r.ao("StringList","ngmy_circuit_passed_v1",q)
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
return C.i($async$aa6,v)},
atm(d,e,f,g){var w="c"+this.y++,v=new A.B7(w,e,f,g)
this.d.m(0,w,v)
return v},
m1(d,e,f){return this.atm(0,e,f,0)},
a99(d,e){var w
if(D.xO.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.an(0,new C.v(-36,w))},
rN(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aO2(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fE$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.dv(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(B.o.ed(m,D.ctE[B.o.K(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.rN(p,0)&&n.rN(p,1)
break
case"or":p=q.a
o=n.rN(p,0)||n.rN(p,1)
break
case"xor":p=q.a
o=n.rN(p,0)!==n.rN(p,1)
break
case"nand":p=q.a
o=!(n.rN(p,0)&&n.rN(p,1))
break
case"nor":p=q.a
o=!(n.rN(p,0)||n.rN(p,1))
break
case"not":o=!n.rN(q.a,0)
break
default:o=n.rN(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.m(0,q,o)
r=!0}}if(!r)break}},
bHm(){return this.aO2(null)},
l3(d){var w,v,u,t,s,r,q,p,o,n=this
n.bHm()
if(!n.ax)return
for(w=n.d,w=new C.bg(w,C.a2(w).k("bg<2>")).gag(0),v=new C.hJ(w,new A.dzA()),u=n.f,t=n.w,s=0;v.C();){r=w.gT(0).a
if(u.h(0,r)===!0){q=n.fE$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.m(0,r,n.fE$)
o=s+1
A.dL(520+90*B.o.K(s,4),"",200,0,0.25,"square")
s=o}}},
atn(d){var w=this
w.d.a7(0)
B.d.a7(w.e)
w.f.a7(0)
w.r.a7(0)
w.cy=null},
lu(d,e){var w=this.x
return new C.v(d*w.a,e*w.b)},
apO(d){var w=this
if(w.x.A(0,B.at)){$.aT.x1$.push(new A.dzb(w,d))
return}w.n(new A.dzc(w,d))},
cnf(d){this.n(new A.dzh(this,d,$.bA_()[d]))},
bZr(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bA_()[a0]
v=d.d
u=C.a2(v).k("bg<2>")
t=u.k("a5<G.E>")
s=t.k("G.E")
r=C.z(new C.a5(new C.bg(v,u),new A.dz6(),t),s)
B.d.aY(r,new A.dz7())
q=C.z(new C.a5(new C.bg(v,u),new A.dz8(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.n(new A.dz9(d,w))
return}u=d.r
p=C.dS(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=B.o.dq(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((B.o.fP(k,i)&1)===1)
for(i=0;i<v;++i)u.m(0,r[i].a,j[i])
d.aO2(0)
h=m.h(0,B.d.gJ(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.jw(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=B.d.aG(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a7(0)
u.v(0,p)
d.n(new A.dza(d,o,a0))},
au5(d){var w,v,u,t,s=this.d,r=C.a2(s).k("bg<2>")
s=C.z(new C.bg(s,r),r.k("G.E"))
r=C.U(s).k("dx<1>")
s=new C.dx(s,r)
s=new C.bU(s,s.gI(0),r.k("bU<ai.E>"))
w=d.a
r=r.k("ai.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
c6H(d){var w,v,u,t,s,r=this.d,q=C.a2(r).k("bg<2>")
r=C.z(new C.bg(r,q),q.k("G.E"))
q=C.U(r).k("dx<1>")
r=new C.dx(r,q)
r=new C.bU(r,r.gI(0),q.k("bU<ai.E>"))
w=d.a
v=d.b
q=q.k("ai.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bRX(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.dv(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.xO.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.a99(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.A(p,o)
s=l}}}return t},
bGk(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.a99(p,o)
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
bZt(d){var w,v,u,t=this,s=t.au5(d)
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
A.dL(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.n(new A.dzi())
return}u=t.bGk(d)
if(u!=null)t.n(new A.dzj(t,u))
else t.n(new A.dzk(t))},
asl(d){return this.bUK(d)},
bUK(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$asl=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.au5(d)
if(s==null){w=1
break}C.j7()
t.n(new A.dzf(t,s))
case 1:return C.h(u,v)}})
return C.i($async$asl,v)},
btE(d){if(this.x.A(0,B.at))return
this.n(new A.dz5(this,d,B.cA))
C.eG()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bA_()[g]
g=x.p
v=C.a([C.aF(h,h,h,h,C.V(i.ax?B.nt:M.qo,B.al,h,h,h,21),h,h,h,new A.dzt(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.m(16)
s=B.cH.j(0.14)
r=C.H(B.cH.j(0.5),B.r,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.eyy,h,h,h),C.d(w.b,h,h,h,h,h,h,D.eGj,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.C(B.nm,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?B.bm:B.fv,h,h,h,h,h,h,h,h,12,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.B(C.a([C.D(C.u(q,B.F,h,B.e,B.j,0,B.p),1),C.bI(D.eWH,i.gbZq(),C.bk(B.cH,h,h,h,h,h,h,h,h,h,h,B.c6))],g),B.m,h,B.e,B.j,0,h,h),B.h,h,h,new C.o(s,h,r,t,h,h,B.n),h,h,h,X.JS,D.bfG,h,h,1/0))}u.push(C.D(C.cj(new A.dzu(i)),1))
if(f!=null){t=C.m(14)
s=B.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.xO.h(0,r).a+": "+D.xO.h(0,r).e,h,h,h,h,h,h,B.vi,h,h,h),B.h,h,h,new C.o(s,h,h,t,h,h,B.n),h,h,h,Y.aco,B.bQ,h,h,1/0))}u=C.u(u,B.m,h,B.e,B.j,0,B.p)
t=C.a([],g)
for(s=D.xO.gdH(D.xO),s=s.gag(s);s.C();){r=s.gT(s)
q=new C.b3(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.ay(o.j(0.5),1,B.r,-1)
t.push(C.aJ(h,C.p(h,C.u(C.a([C.V(p.b,o,h,h,h,20),B.bA,new C.w(p.a,h,D.aKc,h,h,h,h,h,h,h,h,h)],g),B.m,h,B.e,B.R,0,B.p),B.h,h,h,new C.o(n,h,new C.c2(m,m,m,m),new C.bv(q,q,q,q),h,h,B.n),h,h,h,B.hi,O.V2,h,h,58),B.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.dzv(i,r),h,h,h,h,h,h,!1,B.ae))}s=C.a([],g)
for(l=0;l<4;++l){k=D.cTp[l]
s.push(new A.fe(B.Ll,k.b,new A.dzw(i,k),B.cH,h))}s.push(new A.fe(D.wX,"Clear",new A.dzx(i),B.cL,h))
r=C.a([],g)
for(j=0;q=$.bA_(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?B.ej:B.ls
o=i.ay
n=i.cx.t(0,j)?B.bm:B.cS
r.push(new A.dy(q.a,o===j,new A.dzy(i,j),p,n,h))}return A.jf(B.cH,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.u(C.a([new A.eE(t,"PARTS",h),new A.eE(s,"TRY",h),new A.eE(r,"TASKS",h)],g),B.m,h,B.e,B.R,0,B.p))}}
A.b7t.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.a0()
w=C.N()
w.r=D.a7Z.gq(0)
a7.bi(new C.ae(0,0,0+a5,0+a6),w)
v=C.N()
v.r=B.c.j(0.05).gq(0)
for(w=a7.a,u=20;u<a6;u+=28)for(t=14;t<a5;t+=28){s=v.L()
w.drawCircle(t,u,1,s)
s.delete()}for(a5=this.b,a6=a5.e,r=a6.length,q=a5.f,p=x.v,o=a5.d,n=0;n<a6.length;a6.length===r||(0,C.K)(a6),++n){m=a6[n]
l=m.a
k=o.h(0,l)
j=o.h(0,m.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=a5.a99(j,m.c)
f=q.h(0,l)===!0
l=$.a0()
e=C.a([],p)
d=new C.aS(l.r,B.as,a4,a4,e)
e.push(new C.bc(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.p5(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
l.b=B.ad
l.c=9
l.r=B.cS.j(0.28).gq(0)
l.z=I.pi
s=l.L()
l=d.gbL().a.snapshot()
w.drawPath((d.e=new C.cG(l)).a,s)
s.delete()}l=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
l.b=B.ad
l.c=3.2
l.d=B.bV
l.r=(f?B.fP:B.bx).gq(0)
s=l.L()
l=d.e
w.drawPath((l==null?d.e=new C.cG(d.gbL().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.an(0,D.Gp)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new C.aS($.a0().r,B.as,a4,a4,C.a([],p))
w=a3.b
p.G(new C.bc(a6,w))
r=g.b
p.G(new C.p5(a6+a0,w,a5-a0,r,a5,r))
r=C.N()
r.b=B.ad
r.c=3
r.r=B.al.gq(0)
a7.aU(p,r)}for(a5=new C.dv(o,o.r,o.e);a5.C();)this.bZs(a7,a5.d)},
bZs(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.xO.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.dh(a0.c,64,64)
s=C.bM(t,B.kL)
r=w.cy===v
q=s.eH(B.cs)
$.a0()
p=C.N()
p.r=B.x.j(0.55).gq(0)
p.z=B.m9
d.b6(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.N()
p.sar(new C.bR(B.A,0.5,B.w,g,0,C.a([e.c.j(0.6),B.K],x.O),g,g).az(0,C.bV(a0.c,52)))
d.ap(q,52,p)}q=s.eH(B.cG)
p=C.N()
o=e.c
p.r=C.ap(o,B.x,0.65).gq(0)
d.b6(q,p)
n=u?0.35:0
q=C.N()
p=C.ap(o,B.c,0.1+n)
p.toString
m=C.ap(o,B.x,u?0.2:0.45)
m.toString
q.sar(new C.a7(B.b0,B.b5,B.w,C.a([p,m],x.O),g,g).az(0,t))
d.b6(s,q)
q=C.N()
q.b=B.ad
q.c=r?2.6:1.2
q.r=(r?B.c:B.c.j(0.35)).gq(0)
d.b6(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?D.ah8:D.brN}else l=e.b
k=A.fDM(C.jw(l.a),30,B.c,l.b,g,B.I)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a6(d,v.aE(0,new C.v(p/2,q.gbg(q)/2)))
j=A.fDM(e.a,10.5,B.c,g,g,B.I)
j.a6(d,a0.c.an(0,new C.v(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=A.fDM(f,9,u?B.fP:B.c1,g,g,B.u)
i.a6(d,a0.c.an(0,new C.v(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aUc(d,w.a99(a0,h),o)
this.aUc(d,a0.c.an(0,D.Gp),o)},
aUc(d,e,f){var w
$.a0()
w=C.N()
w.r=D.a7Z.gq(0)
d.ap(e,8.5,w)
w=C.N()
w.b=B.ad
w.c=2.2
w.r=f.gq(0)
d.ap(e,8.5,w)
w=C.N()
w.r=B.c.gq(0)
d.ap(e,3.2,w)},
aq(d){return!0}}
A.aIe.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bt2.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpb()}}
A.LD.prototype={
S(){return new A.aA6(C.m8(0,null,null))}}
A.IM.prototype={
a3(){return"_UnfoldStyle."+this.b}}
A.zp.prototype={}
A.aA6.prototype={
bZx(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gco(0).at
v.toString
w.f=v}w.n(new A.dEM(w,e))},
bTI(){var w=this
w.e.p()
w.e=C.m8(w.f,null,null)
w.n(new A.dEL(w))},
p(){this.e.p()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.nW(t,C.cd(v,B.bW,t?new A.bn8(w.e,w.gbZw(w),new A.dEN(d),v):new A.aEg(u,new C.cw(u.b,x.gj)),v,!1,!1,v,!1),new A.dEO(w,u),x.K)}}
A.boG.prototype={}
A.bn8.prototype={
aUd(d,e){var w=null
return new C.C(F.Vw,C.u(C.a([C.d(d,w,w,w,w,w,w,D.ez3,w,w,w),B.bA,C.d(e,w,w,w,w,w,w,C.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.F,w,B.e,B.j,0,B.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.B(C.a([C.aF(v,v,v,v,E.qq,v,v,v,w.e,v,v,v,v,v,v),B.tz,D.blm],u),B.m,v,B.e,B.j,0,v,v),s=w.aUd("STUDIOS","Play, make things, and keep what you make")
$.bA1()
return C.br(!0,C.u(C.a([new C.C(D.bkx,t,v),C.D(C.uO(0,v,B.q,w.c,B.z,v,v,v,v,v,!1,v,B.ai,!1,C.a([new C.lM(s,v),new C.no(B.iG,C.Nb(new C.nZ(new A.eHU(d),23,!0,!0,!0,0,C.rg(),v),D.aIc),v),new C.lM(w.aUd("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.no(D.bfM,C.Nb(new C.nZ(new A.eHV(w),6,!0,!0,!0,0,C.rg(),v),D.aIc),v)],u)),1)],u),B.m,v,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0)}}
A.acx.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.m(20),n=C.m(20),m=C.ap(D.rq,p,0.3)
m.toString
w=x.O
m=C.a([m,D.aa9],w)
v=C.H(p.j(0.6),B.r,1.2)
u=x.V
t=C.a([new C.aa(-4,B.G,p.j(0.22),B.J,14)],u)
s=C.ap(p,B.x,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.aa(0,B.G,p.j(0.5),B.J,12)],u)
return C.aD(!1,B.Y,!0,r,C.aH(!1,o,!0,C.eq(C.u(C.a([C.p(r,C.V(q.c,B.c,r,r,r,24),B.h,r,r,new C.o(r,r,r,r,u,new C.a7(B.ax,B.aC,B.w,w,r,r),B.a5),r,44,r,r,r,r,r,44),B.P,C.d(q.a,r,2,B.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,B.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),B.L,r,r),B.d5,C.d(q.b,r,2,B.a2,r,r,r,C.l(r,r,B.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),B.L,r,r)],x.p),B.m,r,B.b6,B.j,0,B.p),r,new C.o(r,r,v,n,t,new C.a7(B.ax,B.aC,B.w,m,r,r),B.n),r,B.DU,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac)}}
A.abs.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.m(20),g=C.m(20),f=C.ap(D.rq,B.d.gJ(i),0.24)
f.toString
w=x.O
f=C.a([f,D.aa9],w)
v=C.H(B.d.gJ(i).j(0.35),B.r,1)
u=x.V
t=C.a([new C.aa(0,B.G,B.x.j(0.4),B.cs,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.b3(6,6)
m=C.a([B.d.gJ(i),B.d.gai(i)],w)
l=C.a([new C.aa(0,B.G,B.x.j(0.45),F.aBg,0)],u)
r.push(C.p(k,C.V(q[p],B.c,k,k,k,11),B.h,k,k,new C.o(k,k,k,new C.bv(n,n,n,n),l,new C.a7(B.a3,B.a7,B.w,m,k,k),B.n),k,17,k,new C.M(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.u(r,B.m,k,B.e,B.R,0,B.p)
u=C.ap(B.d.gJ(i),B.d.gai(i),0.4)
u.toString
return C.aD(!1,B.Y,!0,k,C.aH(!1,h,!0,C.eq(C.u(C.a([new C.a3(58,k,w,k),B.T,C.d(j.b,k,2,B.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,B.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),B.L,k,k),B.av,C.V(Ad.EL,B.d.gJ(i),k,k,k,18)],s),B.m,k,B.b6,B.j,0,B.p),k,new C.o(k,k,v,g,t,new C.a7(B.ax,B.aC,B.w,f,k,k),B.n),k,B.DU,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),B.h,B.K,0,k,k,k,k,k,B.ac)}}
A.Oi.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.ap(B.d.gai(i),B.x,0.62)
h.toString
w=k.c
v=k.d
h=C.an(-8,C.bT(j,new C.o(h,j,j,C.m(22),j,j,B.n),B.b9),j,j,2,2,8,j)
u=C.m(22)
t=k.y
s=x.V
r=C.a([new C.aa(0,B.G,B.x.j(0.55),B.Pn,26),new C.aa(-6,B.G,B.d.gJ(i).j(0.1+0.4*t),B.J,30)],s)
q=C.m(22)
p=C.ap(B.d.gJ(i),B.c,0.14)
p.toString
o=B.d.gJ(i)
n=B.d.gai(i)
i=C.ap(B.d.gai(i),B.x,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bZ(0,C.bT(j,new C.o(j,j,j,j,j,new C.a7(B.ax,B.aC,B.w,C.a([p,o,n,i],m),D.cY_,j),B.n),B.b9),0,0,0),C.an(j,C.bT(j,new C.o(j,j,j,j,j,new C.a7(B.b0,B.b5,B.w,C.a([B.c.j(0.28),B.c.j(0)],m),j,j),B.n),B.b9),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bZ(0,C.b1(j,j,j,new A.bo6(i,j),B.at),0,0,0))
i=B.c.j(0.16)
p=C.H(B.c.j(0.5),B.r,1.4)
s=C.a([new C.aa(0,B.G,B.c.j(0.25*t),B.J,14)],s)
s=C.p(j,C.V(k.f,B.c,j,j,j,28),B.h,j,j,new C.o(i,j,p,j,s,j,B.a5),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.eAv,j,j,j)],l)
i=k.w
if(i.length!==0)B.d.v(p,C.a([B.av,C.d(i,j,1,B.a2,j,j,j,C.l(j,j,B.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,B.a4,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(B.Qq)
p.push(C.p(j,j,B.h,j,j,new C.o(B.c.j(0.28),j,j,C.m(3),j,j,B.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.C(B.fy,C.B(C.a([s,B.eo,C.D(C.u(p,B.F,j,B.e,B.R,0,B.p),1)],l),B.m,j,B.e,B.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bZ(0,C.e1(C.ec(j,B.x.j(B.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.m(22)
m.push(C.bZ(0,C.e1(C.bT(j,new C.o(j,j,C.H(B.c.j(0.3),B.r,1.2),i,j,j,B.n),B.b9),!0,j),0,0,0))
return new C.a3(w,v,new C.am(B.V,j,B.a9,B.h,C.a([h,C.bZ(0,C.bT(C.bu(q,new C.am(B.V,j,B.a9,B.q,m,j),B.ap),new C.o(j,j,j,u,r,j,B.n),B.b9),0,0,0)],l),j),j)}}
A.bo6.prototype={
a6(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.ae(r,-10,s,w)
u=d.a
J.bN(u.save())
u.translate(v.gbN().a,v.gbN().b)
d.o6(0,0.35)
t=C.dh(B.J,(w- -10)*1.6,s-r)
$.a0()
s=C.N()
s.sar(new C.a7(B.a3,B.a7,B.w,C.a([B.K,B.c.j(0.3),B.K],x.O),null,null).az(0,t))
d.bi(t,s)
u.restore()},
aq(d){return d.b!==this.b}}
A.bnC.prototype={
B(d){var w=null,v=C.m(22),u=C.a([D.b5E,D.a9x],x.O),t=this.e,s=C.H(B.d.gJ(t).j(0.4),B.r,1.2),r=C.a([new C.aa(0,B.G,B.x.j(0.5),B.kJ,24)],x.V),q=C.m(22),p=B.d.gJ(t)
return new C.a3(this.c,this.d,C.bT(C.bu(q,C.b1(C.at(C.V(B.j2,B.d.gJ(t).j(0.7),w,w,w,34),w,w,w),w,w,new A.b6a(p,w),B.at),B.ap),new C.o(w,w,s,v,r,new C.a7(B.ax,B.aC,B.w,u,w,w),B.n),B.b9),w)}}
A.b6a.prototype={
a6(d,e){var w,v,u,t,s,r,q,p
$.a0()
w=C.N()
v=this.b
w.r=v.j(0.09).gq(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.L()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.L()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.ef(B.J)
$.a0()
t=C.N()
t.b=B.ad
t.c=1.4
t.r=v.j(0.35).gq(0)
d.ap(u,30,t)},
aq(d){return!1}}
A.aEg.prototype={
S(){return new A.aEh(new C.cn(null,x.A),null,null)}}
A.aEh.prototype={
gt6(){var w,v=this,u=v.d
if(u===$){w=C.bi(null,D.bdb,null,1,null,v)
w.cF(0)
v.d!==$&&C.bH()
v.d=w
u=w}return u},
gXm(){var w,v=this,u=v.e
if(u===$){w=C.bi(null,B.fH,null,1,null,v)
w.f1(0,!0)
v.e!==$&&C.bH()
v.e=w
u=w}return u},
gato(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gbZu(){var w=this.w
if(w===$){w=C.z(this.a.c.d,x.G)
this.w=w}return w},
gaR5(){var w=this.x
if(w===$){w=C.z(this.a.c.e,x.Z)
this.x=w}return w},
gaRK(){var w=this.y
if(w===$){w=C.z(this.a.c.f,x.N)
this.y=w}return w},
gb1t(){var w=this.z
if(w===$){w=C.z(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a0()
var w=this.gt6()
w.d5()
w.dM$.H(0,this.gcn0())},
cn1(){var w,v,u,t,s,r,q,p=this,o=p.gt6().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gato().a){case 0:w=D.mM
break
case 1:w=D.t6
break
case 2:w=D.ZO
break
case 3:w=D.mM
break
case 4:w=D.cMZ
break
case 5:w=D.t6
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a5N)r=0.09
else r=s===D.a5O?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){A.dL(260+90*v,"",260,1.6,0.18,"tri")
u=D.bJa[v]
A.l0("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
A.Aw("bell",D.bRU,1400,0.35)}}p.ax=o},
p(){this.gt6().p()
this.gXm().p()
this.bqZ()},
adj(){var w=this
w.gt6().cL8(0,C.dB(0,0,0,B.k.U(11e3/w.Q),0,0))
w.n(new A.eHA(w))},
c8H(){this.gt6().bU(0)
this.n(new A.eHz(this))},
ab0(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$ab0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaRK(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){q=t[r]
l.push(new C.ao(new C.bb(q,B.b_,B.aL),$.au()))}m=C.a([],m)
for(t=u.gb1t(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){p=t[r]
m.push(new C.ao(new C.bb(p,B.b_,B.aL),$.au()))}o=C.z(u.gaR5(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.c1(D.rq,null,new A.eHy(u,l,m,o),t,!0,!0,!0,B.l4,!1,!1,x.H),$async$ab0)
case 2:l=C.z(l,x.bO)
B.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.R$=$.au()
n.O$=0}return C.h(null,v)}})
return C.i($async$ab0,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gato(),f=i.a.c,e=f.b,d=i.gbZu(),a0=new A.zp(g,e,f.c,d,i.gaR5(),i.gaRK(),i.gb1t())
f=C.ap(B.d.gJ(d),B.d.gai(d),0.4)
f.toString
g=x.p
w=C.a([C.aF(h,h,h,h,C.V(i.at?B.nt:M.qo,B.al,h,h,h,21),h,h,h,new A.eHI(i),h,h,h,h,"Sound",h),C.aF(h,h,h,h,D.bBc,h,h,h,i.gbZv(),h,h,h,h,"Edit words and pictures",h),C.aF(h,h,h,h,D.m5,h,h,h,new A.eHJ(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c4(i.gXm(),new A.eHK(i,a0),h),C.cj(new A.eHL(i,a0))],g)
u=i.as
t=u?i.gc8G():i.gcaY()
u=u?D.br3:B.rX
s=C.ap(B.d.gJ(d),B.d.gai(d),0.4)
s.toString
t=C.B(C.a([C.aF(h,h,h,h,C.V(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,B.c6),C.D(C.c4(i.gt6(),new A.eHM(i,a1,a0),h),1),C.aF(h,h,h,h,D.bxG,h,h,h,new A.eHN(i),h,h,h,h,"Replay",B.c6)],g),B.m,h,B.e,B.j,0,h,h)
s=i.Q
u=B.k.aa(s,1)
r=C.ap(B.d.gJ(d),B.d.gai(d),0.4)
r.toString
s=A.ho(r,u+"x","Speed",2.5,0.4,new A.eHO(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.cVx[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.ap(B.d.gJ(d),B.d.gai(d),0.4)
r.toString
u.push(new A.dy(p.b,o===p.a,new A.eHP(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bJv[q]
o=i.w
if(o===$){o=C.z(i.a.c.d,r)
i.w=o}m=B.d.gJ(o).A(0,B.d.gJ(n))?34:28
o=i.w
if(o===$){o=C.z(i.a.c.d,r)
i.w=o}l=B.d.gJ(o).A(0,B.d.gJ(n))?34:28
o=i.w
if(o===$){o=C.z(i.a.c.d,r)
i.w=o}k=B.d.gJ(o).A(0,B.d.gJ(n))?B.c:B.bf
o=i.w
if(o===$){o=C.z(i.a.c.d,r)
i.w=o}j=new C.ay(k,B.d.gJ(o).A(0,B.d.gJ(n))?2.5:1,B.r,-1)
d.push(C.aJ(h,C.p(h,h,B.h,h,h,new C.o(h,h,new C.c2(j,j,j,j),h,h,new C.a7(B.ax,B.aC,B.w,n,h,h),B.a5),h,l,h,D.aca,h,h,h,m),B.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.eHQ(i,n),h,h,h,h,h,h,!1,B.ae))}return A.jf(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.en(new C.am(B.V,h,B.aY,B.q,v,h),i.f),e,C.u(C.a([t,s,new A.eE(u,"STYLE",h),new A.eE(d,"THEME",h)],g),B.m,h,B.e,B.R,0,B.p))},
bsS(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.mM[r]
p=B.k.D((1-B.ex.av(0,B.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=B.k.D(p/1.5707963267948966,0,1)
q=D.mM[r]
n=q+0.12
m=B.k.D((a0-n)/(q+0.2-n),0,1)
n=D.mM[r]
q=n-0.01
q=B.k.D((a0-q)/(n+0.03-q),0,1)
n=C.dg()
l=n.a
l.$flags&2&&C.ah(l)
l[11]=0.0013
n.jw(p)
l=v[r]
k=u[r]
j=t[r]
i=D.mM[r]
h=i+0.1
if(B.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.mM[r]
h=i+0.1
h=B.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.mM[r]
h=i+0.1
h=B.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cF(0,r*118,0,f,f,f,new C.kH(q,new C.iv(n,f,B.b0,!0,f,new A.Oi(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.mM[r]
u=v-0.02
g=B.k.D((a0-u)/(v+0.1-u),0,1)
u=B.d.gJ(w)
v=D.mM[r]
t=v+0.12
e.push(new C.cF(0,r*118-3-2,0,f,f,4,new C.lV(new A.bmN(u,g,1-B.k.D((a0-t)/(v+0.22-t),0,1),f),f,B.at,f,f),f))}return new C.a3(a2,358,new C.am(B.V,f,B.a9,B.h,e,f),f)},
bIK(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.t6[r]
p=B.oT.av(0,B.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.t6[r]
m=q+0.15
l=B.k.D((a0-m)/(q+0.25-m),0,1)
m=D.t6[r]
q=m-0.03
q=B.k.D((a0-q)/(m+0.01-q),0,1)
m=C.dg()
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
g=new A.Oi(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dg()
k.fk(3.141592653589793)
k=new C.iv(k,f,B.A,!0,f,new A.bnC(a2,108,w,f),f)}e.push(new C.cF(0,r*130,0,f,f,f,new C.kH(q,new C.iv(m,f,B.A,!0,f,k,f),f),f))}return new C.a3(a2,378,new C.am(B.V,f,B.a9,B.h,e,f),f)},
crM(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.ZO[w]
l.push(B.co.av(0,B.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bZ(0,C.b1(n,n,n,new A.bq9(d.d,l,D.aqs,m,A.bn7(e,0.4,0.62),f,A.bn7(e,0.45,0.7),n),B.at),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=A.fEh(g,w)
q=D.aqs[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cF(r,s-q*m*p+12,n,n,t,n,new C.kH(o,C.V(u[w],B.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=A.fEh(g,w)
r=D.ZO[w]
q=r+0.15
v.push(new C.cF(s,l,n,n,t,n,new C.kH(B.k.D((e-q)/(r+0.25-q),0,1),new C.w(u[w],n,B.a4r,n,B.L,n,n,n,n,n,n,n),n),n))}return new C.a3(g,m+90,new C.am(B.V,n,B.a9,B.h,v,n),n)},
byP(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-B.co.av(0,A.bn7(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bZ(0,C.at(C.dP(C.b1(f,f,f,new A.bmf(B.d.gJ(a1),A.bn7(a3,0,0.2),a4,f),new C.aq(a5*0.95,70)),D.dJE),f,f,f),0,0,0))
w=C.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=B.k.D((a3-l)/(0.12+m-l),0,1)
j=B.dG.av(0,B.k.D((o-0.7)/0.3,0,1))
l=C.dg()
m=l.a
m.$flags&2&&C.ah(m)
m[11]=0.001
l.fk(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jf(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?B.k.K(r,1):-1
w.push(new C.A(o,new C.cF(0,0,0,0,f,f,new C.cx(B.A,f,f,new C.kH(k*(0.45+0.55*o),C.dP(new C.iv(l,f,B.A,!0,f,new A.Oi(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.v(n*a5*0.34,-o*18)),f),f),f)))}B.d.aY(w,new A.eHr())
B.d.v(a0,new C.J(w,new A.eHs(),x.fR))
return new C.a3(a5,330,new C.am(B.V,f,B.a9,B.h,a0,f),f)},
by2(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.t6[q]
o=B.k.D((a2-p)/(p+0.22-p),0,1)
n=B.nN.av(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.t6[q]
m=B.k.D((a2-m)/(m+0.02-m),0,1)
l=D.ase[q]
k=C.dg()
k.me(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jf(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.t6[q]
g=h+0.1
g=B.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cF(0,0,0,0,e,e,new C.cx(B.A,e,e,new C.kH(m,C.dP(new C.iv(k,e,B.A,!0,e,new A.Oi(d,92,w,p,j,i,0,g*s,h,e),e),new C.v(0,l)),e),e),e))
l=D.t6[q]
h=l+0.02
f=B.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cF(0,0,0,0,e,e,new C.cx(B.A,e,e,C.dP(new C.lV(new A.b6Q(w,f,q,e),e,new C.aq(r,212),e,e),new C.v(0,D.ase[q])),e),e))}return new C.a3(a4,330,new C.am(B.V,e,B.a9,B.h,a0,e),e)},
bvI(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.v(-b0,-150),new C.v(b0,-40),D.dJJ],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.mM[r]
p=B.k.D((a8-q)/(q+0.2-q),0,1)
o=B.co.av(0,p)
q=D.asg[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.mM[r]
f=g+0.2
e=B.k.D((a8-f)/(g+0.3-f),0,1)
f=D.mM[r]
g=f-0.01
g=B.k.D((a8-g)/(f+0.03-g),0,1)
f=C.dg()
d=f.a
d.$flags&2&&C.ah(d)
d[11]=0.001
f.me(l*h+D.cQx[r]*o)
f.fk(l*0.9)
h=0.55+0.45*o
f.jf(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cF(0,0,0,0,a3,a3,new C.cx(B.A,a3,a3,new C.kH(g,C.dP(new C.iv(f,a3,B.A,!0,a3,new A.Oi(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.v(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.mM[r]
i=q+0.17
a2=B.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.asg[r]
a6.push(new C.cF(0,0,0,0,a3,a3,new C.cx(B.A,a3,a3,C.dP(new C.lV(new A.bmh(B.d.gJ(w),a2,a3),a3,new C.aq(a4,30),a3,a3),new C.v(0,q+48-4)),a3),a3))}}return new C.a3(b0,330,new C.am(B.V,a3,B.a9,B.h,a6,a3),a3)}}
A.bmN.prototype={
a6(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.ae(w-v,0,w+v,e.b)
q=C.bM(u,B.fX)
$.a0()
t=C.N()
s=0.9*r.d
t.r=r.b.j(s).gq(0)
t.z=I.pi
d.b6(q,t)
t=C.bM(u,B.fX)
q=C.N()
q.r=B.c.j(s).gq(0)
d.b6(t,q)},
aq(d){return d.c!==this.c||d.d!==this.d}}
A.bmf.prototype={
a6(d,e){var w,v,u=this.c,t=C.dh(e.ef(B.J),e.b*u,e.a*u)
$.a0()
u=C.N()
u.b=B.ad
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gq(0)
u.z=R.FU
d.jQ(t,u)
u=C.N()
u.b=B.ad
u.c=2.5
u.r=w.j(0.7).gq(0)
d.jQ(t,u)
u=t.cD(-14)
v=C.N()
v.b=B.ad
v.c=1
v.r=w.j(0.3).gq(0)
d.jQ(u,v)},
aq(d){return!0}}
A.b6Q.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ef(B.J),f=this.c,e=B.co.av(0,f)
$.a0()
w=C.N()
w.b=B.ad
v=1-f
w.c=5*v
u=this.b
w.r=B.d.gJ(u).j(0.6*v).gq(0)
d.ap(g,40+e*a0.a*0.42,w)
t=new C.f0()
t.dX(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.ae()*3.141592653589793*2
n=(40+t.ae()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.ae()
j=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
i=(p&1)===0?B.d.gJ(u):B.c
j.r=i.j(B.k.D(v,0,1)).gq(0)
h=j.L()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
aq(d){return!0}}
A.bmh.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ef(B.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=B.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.dh(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.a0()
o=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
o.b=B.ad
o.c=2
o.r=u.j((1-q)*0.7).gq(0)
n=o.L()
t.drawOval(C.cr(p),n)
n.delete()}},
aq(d){return d.c!==this.c}}
A.bq9.prototype={
a6(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.ae(0,d0,0+c5,d0+60)
$.a0()
d0=C.N()
w=c1.b
v=x.O
d0.sar(new C.a7(B.b0,B.b5,B.w,C.a([B.d.gJ(w).j(0.18),B.K],v),c2,c2).az(0,d1))
d2.bi(d1,d0)
d0=C.N()
d0.r=B.c.j(0.18).gq(0)
d0.c=1
d2.bQ(new C.v(0,c4),new C.v(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=A.fEh(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.a0()
a3=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
a3.r=B.x.j(0.5).gq(0)
a3.z=B.m9
a4=a3.L()
t.drawOval(C.cr(new C.ae(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.ae(d,a1,a3,a1+a0)
a6=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
a7=C.ap(B.d.gJ(w),B.c,0.1)
a7.toString
a6.sar(new C.a7(B.b0,B.b5,B.w,C.a([a7,B.d.gai(w)],v),c2,c2).az(0,a5))
a4=a6.L()
t.drawRect(C.cr(a5),a4)
a4.delete()
a2=a2.r
a6=C.a([],n)
a8=new C.aS(a2,B.as,c2,c2,a6)
a6.push(new C.bc(a3,a1))
a7=a3+c8
a9=a1+c9
a6.push(new C.ar(a7,a9))
a6.push(new C.ar(a7,m))
a6.push(new C.ar(a3,c4))
a6.push(new C.bL())
a6=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
a6.r=C.ap(B.d.gai(w),B.x,0.5).gq(0)
a4=a6.L()
a6=a8.gbL().a.snapshot()
t.drawPath((a8.e=new C.cG(a6)).a,a4)
a4.delete()
a6=C.a([],n)
b0=new C.aS(a2,B.as,c2,c2,a6)
a6.push(new C.bc(d,a1))
a6.push(new C.ar(d+c8,a9))
a6.push(new C.ar(a7,a9))
a6.push(new C.ar(a3,a1))
a6.push(new C.bL())
a2=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
a2.r=C.ap(B.d.gJ(w),B.c,0.45).gq(0)
a4=a2.L()
a2=b0.gbL().a.snapshot()
t.drawPath((b0.e=new C.cG(a2)).a,a4)
a4.delete()
b1=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
b1.b=B.ad
b1.c=1
b1.r=B.c.j(0.28).gq(0)
a4=b1.L()
t.drawRect(C.cr(a5),a4)
a4.delete()
a4=b1.L()
a2=a8.e
t.drawPath((a2==null?a8.e=new C.cG(a8.gbL().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.L()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cG(b0.gbL().a.snapshot()):a2).a,a4)
a4.delete()
b2=B.k.bJ(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=C.bM(new C.ae(b7,a7,b7+r,b5),B.fX)
$.a0()
b9=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
b9.r=(b4?B.c.j(q):B.x.j(0.22)).gq(0)
a4=b9.L()
t.drawRRect(C.fA(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.ae(d,a1,a3,a1+28)
J.bN(t.save())
t.clipRect(C.cr(a5),$.uF()[1],!0)
$.a0()
a1=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
a1.sar(new C.a7(B.b0,B.b5,B.w,C.a([B.K,B.c.j(0.4),B.K],v),c2,c2).az(0,c0))
a4=a1.L()
t.drawRect(C.cr(c0),a4)
a4.delete()
t.restore()}}},
aq(d){return!0}}
A.aJU.prototype={
aN(){this.aV()
this.aS()
this.dD()},
p(){var w=this,v=w.aZ$
if(v!=null)v.a1(0,w.gdB())
w.aZ$=null
w.a2()}}
A.Zf.prototype={
a3(){return"_Role."+this.b}}
A.px.prototype={}
A.qb.prototype={}
A.Bb.prototype={}
A.Xe.prototype={}
A.acn.prototype={}
A.Zs.prototype={
gX(d){return this.d}}
A.Bl.prototype={}
A.a9l.prototype={}
A.a9C.prototype={}
A.abw.prototype={}
A.bde.prototype={
a0h(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
A.dL(d,"",e,g,h,f)},
b2u(d,e,f){return this.a0h(d,e,f,0,0.55)},
axM(d,e,f,g){return this.a0h(d,e,f,0,g)},
b2v(d,e,f,g){return this.a0h(d,e,f,g,0.55)},
a7(d){var w=this
w.a.a7(0)
B.d.a7(w.b)
B.d.a7(w.c)
B.d.a7(w.d)
B.d.a7(w.e)
B.d.a7(w.f)
B.d.a7(w.r)
B.d.a7(w.w)
B.d.a7(w.x)
w.y.a7(0)
w.Q.a7(0)
w.as.a7(0)
w.b0()},
agS(d,e,f,g){var w="n"+this.ay++,v=new A.qb(w,e,f,g)
this.a.m(0,w,v)
this.b0()
return v},
A2(d,e,f){return this.agS(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
B.d.bm(w.b,new A.d9k(e))
B.d.bm(w.c,new A.d9l(e))
w.b0()},
b6e(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.m8.h(0,v.b).c===D.vA)return!1
w=this.b
if(B.d.bf(w,new A.d9h(d,e)))return!1
w.push(new A.Bb(d,e))
this.b0()
return!0},
bSH(d){var w
if(d.b==="beat")return D.bS2[B.o.K(d.d,4)]
w=this.at
switch(B.o.K(d.d,3)){case 1:return 350+w.aB(500)
case 2:return 1400+w.aB(2200)
default:return 450+w.aB(2000)}},
aB7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.m(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.m(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=B.o.K(w,6)
t=D.asu[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new A.Bl(u,t,j.ax,90))
w.push(new A.Bl(u,B.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ae()*3.141592653589793*2
v.push(new A.Zs(u,new C.v(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b2u(261.63*Math.pow(2,([0,4,7,12,16,19][B.o.K(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ae()*3.141592653589793*2
p=100+w.ae()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.ap(t,B.c,w.ae()*0.5)
m.toString
v.push(new A.Zs(u,new C.v(o*p,n*p),m,3+w.ae()*4.5,1000+w.aB(700),j.ax))}j.f.push(new A.Bl(u,t,j.ax,120))
j.axM(120,200,"noise",0.5)
j.b2u(261.63*Math.pow(2,([7,12,16,19][w.aB(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new A.Bl(u,t,j.ax,230))
w.push(new A.Bl(u,t,j.ax+160,160))
w.push(new A.Bl(u,t,j.ax+320,100))
j.b2v(180+j.at.aB(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new A.a9l(u,new C.v((w.ae()-0.5)*220,-260-w.ae()*180),t,j.ax))
j.b2v(300+w.aB(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ae()*3.141592653589793*2
j.w.push(new A.a9C(u,u.an(0,new C.v(Math.cos(q),Math.sin(q)).aM(0,260+w.ae()*200)),t,j.ax))
j.a0h(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fU()
j.a0h(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new A.abw(u,D.as2[v],t,j.ax))
j.axM(261.63*Math.pow(2,([0,5,9,12][j.at.aB(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.axM(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.bO9[B.o.K(w,3)]
for(k=1;k<=3;++k)j.cij(d,j.ax+l*k,!0)
break
case"delay":for(w=B.d.gag(j.b),v=new C.hJ(w,new A.d9i(d));v.C();)j.awk(w.gT(0),j.ax+D.c_m[B.o.K(g.d,4)])
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
case"chance":s=j.at.aB(100)<D.cg3[B.o.K(g.d,3)]
break
default:break}if(s)for(w=B.d.gag(j.b),v=new C.hJ(w,new A.d9j(d));v.C();)j.awk(w.gT(0),j.ax)
w=j.e
v=w.length
if(v>700)B.d.yg(w,0,v-700)},
cij(d,e,f){var w=this.c
if(w.length>260)return
w.push(new A.Xe(e,"~"+d))},
awk(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new A.acn(d.a,v,e,w))
u.push(new A.Xe(w,v))},
cLM(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=C.a2(w).k("bg<2>")
w=C.z(new C.bg(w,v),v.k("G.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.m(0,r,o.ax+300)
else if(o.ax>=q){o.aB7(r)
u.m(0,r,o.ax+o.bSH(s))}}w=o.c
v=C.U(w).k("a5<1>")
q=C.z(new C.a5(w,new A.d9m(o),v),v.k("G.E"))
if(q.length!==0){B.d.bm(w,new A.d9n(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.K)(q),++t){u=q[t].b
if(B.a.a_(u,"~")){p=B.a.aW(u,1)
for(u=B.d.gag(v),r=new C.hJ(u,new A.d9o(p));r.C();)o.awk(u.gT(0),o.ax)}else o.aB7(u)}}B.d.bm(o.d,new A.d9p(o))
B.d.bm(o.e,new A.d9q(o))
B.d.bm(o.f,new A.d9r(o))
B.d.bm(o.w,new A.d9s(o))
B.d.bm(o.x,new A.d9t(o))
B.d.bm(o.r,new A.d9u(o))
o.b0()},
a5e(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
ac(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=C.a([],x.ez)
for(v=this.a,v=new C.dv(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(C.E(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=C.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,C.K)(t),++o){n=t[o]
v.push(C.a([n.a,n.b],r))}return B.Q.ak(C.E(["nodes",m,"edges",v],u,x.ew),null)},
cD8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.h.a(B.Q.aD(0,d,null))
k.a7(0)
for(o=x.a,n=J.aV(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gT(n)
u=C.t(J.q(v,"k"))
if(!D.m8.am(0,u))continue
t=C.t(J.q(v,"id"))
m.m(0,t,new A.qb(t,u,new C.v(C.f9(J.q(v,"x"))*k.cy.a,C.f9(J.q(v,"y"))*k.cy.b),B.k.N(C.f9(J.q(v,"p")))))
s=C.c3(C.aI(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aV(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gT(o)
q=C.t(J.q(r,0))
p=C.t(J.q(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new A.Bb(q,p))}k.b0()
return!0}catch(l){return!1}},
cG5(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a7(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.m(0,n,new A.qb(n,r,new C.v(q*p.a,o*p.b),s))
l.b0()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.b6e(w[m.a],w[m.b])}},
gX(d){return this.cy}}
A.Eq.prototype={}
A.TW.prototype={
S(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new A.aBk(new A.bde(C.S(w,x.f3),v,u,t,s,r,q,p,o,C.S(w,n),C.S(w,n),C.S(w,n),C.S(w,n),B.cA,B.K,B.at,$.au()),B.bu,B.J,B.J,B.U,null,null)}}
A.aBk.prototype={
a9G(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$a9G=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.ax(),$async$a9G)
case 6:q=n.kr(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.n(new A.e9f(s))
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
return C.i($async$a9G,v)},
a6K(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a6K=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.n(new A.e94(s))
u=3
w=6
return C.b(C.ax(),$async$a6K)
case 6:e.ao("Bool","ngmy_core_lab_coach_v1",!0)
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
return C.i($async$a6K,v)},
bEG(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a2(n).k("bg<2>")
v=""+n.a+"|"+o.length+"|"+new C.bg(n,w).cI(0,0,new A.e96())+"|"+B.d.cI(o,0,new A.e97())
if(v===p.ch)return p.CW
u=new A.e9a()
t=x.s
s=C.a([],t)
r=new A.e9b(p,s,u)
for(n=new C.bg(n,w).gag(0),w=new C.hJ(n,new A.e98());w.C();){q=n.gT(0)
if(!B.d.bf(o,new A.e99(q)))s.push(C.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.dd(s,0,C.dJ(5,"count",x.S),x.N).dA(0)},
Z(){var w,v=this
v.a0()
v.a9G()
v.d.db=v.ay
w=v.qR(new A.e9F(v))
w.kn(0)
v.e!==$&&C.aO()
v.e=w},
p(){var w=this,v=w.as
if(v!=null)v.a9(0)
v=w.e
v===$&&C.c()
v.p()
v=w.d
v.R$=$.au()
v.O$=0
w.bq2()},
a9d(d){return this.bS9(d)},
bS9(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$a9d=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.ax(),$async$a9d)
case 6:q=m.aR(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cD8(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aS9(B.d.gJ(D.arA))
if(s.c!=null)s.n(new A.e9e())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$a9d,v)},
aS9(d){this.d.cG5(0,d.c,d.d)
this.CY()},
CY(){var w=this.as
if(w!=null)w.a9(0)
this.as=C.cN(B.lm,new A.e90(this))},
atp(d){var w,v,u,t,s=this.d.a,r=C.a2(s).k("bg<2>")
s=C.z(new C.bg(s,r),r.k("G.E"))
r=C.U(s).k("dx<1>")
s=new C.dx(s,r)
s=new C.bU(s,s.gI(0),r.k("bU<ai.E>"))
w=d.a
r=r.k("ai.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
c6I(d){var w,v,u,t,s,r=this.d.a,q=C.a2(r).k("bg<2>")
r=C.z(new C.bg(r,q),q.k("G.E"))
q=C.U(r).k("dx<1>")
r=new C.dx(r,q)
r=new C.bU(r,r.gI(0),q.k("bU<ai.E>"))
w=d.a
v=d.b
q=q.k("ai.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bRY(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.dv(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.m8.h(0,r.b).c===D.vA)continue
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
bZA(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=A.h0e(new C.v(n.a+36,n.b+0),new C.v(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cpF(d){var w,v,u,t,s,r,q=this,p=q.atp(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eG()
u=v.b
if(u==="button"){w.aB7(p)
return}if(q.r)return
t=D.m8.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.pJ)s=6
else s=1
v.d=B.o.K(v.d+1,s)
w.b0()
q.CY()
return}if(q.r)return
r=q.bZA(d)
if(r!=null){w=q.d
B.d.cu(w.b,r)
w.b0()
q.CY()}},
c7Z(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.c6I(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.atp(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aE(0,d)}},
c8_(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b0()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.v(B.k.D(d.a+s.y.a,46,t.a-46),B.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b0()}}},
aWO(){var w,v,u=this
if(u.z!=null){w=u.bRY(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.b6e(v,w)}else v=!1
if(v){C.jD()
u.CY()}u.z=null
u.d.b0()}else if(u.x!=null){if(u.at)u.CY()
u.x=null}},
a9T(d){return this.bUL(d)},
bUL(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$a9T=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.atp(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.j7()
p=t.c
p.toString
w=3
return C.b(C.c1(D.rq,null,new A.e9h(q),p,!0,!0,!1,B.l4,!1,!1,x.y),$async$a9T)
case 3:if(f===!0){r.W(0,s)
t.CY()}case 1:return C.h(u,v)}})
return C.i($async$a9T,v)},
bZy(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.A2(0,d,new C.v(v.a*(0.25+u.ae()*0.5),v.b*(0.2+u.ae()*0.55)))
C.eG()
this.CY()},
adr(){var w=0,v=C.j(x.H),u=this,t,s
var $async$adr=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.c1(D.rq,null,new A.e9j(),s,!0,!0,!0,B.l4,!1,!1,x.es),$async$adr)
case 2:t=e
if(t!=null)u.aS9(t)
return C.h(null,v)}})
return C.i($async$adr,v)},
ab1(d){var w=0,v=C.j(x.H),u=this,t
var $async$ab1=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.cf(null,null,!0,null,new A.e93(),t,null,!0,!0,x.y),$async$ab1)
case 2:if(f===!0){u.d.a7(0)
u.CY()}return C.h(null,v)}})
return C.i($async$ab1,v)},
B(d){var w=this,v=null,u=C.a([C.afD(w.r?new C.bF(B.a3,v,v,new C.C(B.DW,C.hg(D.bvJ,D.eQd,new A.e9D(w),v),v),v):w.bZB(),B.b8,B.ii),C.D(C.cj(new A.e9E(w)),1)],x.p)
if(!w.r)u.push(w.ckG())
return C.cd(v,B.bW,C.br(!0,C.u(u,B.m,v,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),v,!1,!1,v,v)},
bAs(){var w=null,v=new A.e95(),u=B.x.j(0.7),t=C.m(26),s=C.H(B.bs.j(0.5),B.r,1)
return C.bZ(0,C.ec(C.at(C.p(w,C.ch(C.u(C.a([D.f_r,B.av,D.f6g,B.ay,v.$4(B.od,B.bs,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(U.EJ,B.cH,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(B.kX,B.c8,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(D.bpv,B.cS,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.f5E,new C.bF(B.a7,w,w,C.bG(!1,D.eXM,w,w,!0,w,w,this.gbAl(),w,w),w)],x.p),B.F,w,B.e,B.R,0,B.p),B.q,w,B.z,w,w,w,w,B.ai),B.h,w,B.SA,new C.o(D.rq,w,s,t,w,w,B.n),w,w,w,B.fz,Y.ado,w,w,w),w,w,w),u,!0),0,0,0)},
bZB(){var w=this,v=null,u=C.aF(v,v,v,v,E.qq,v,v,v,new A.e9p(w),v,v,v,v,v,v),t=w.a6c(B.XB,"How it works",new A.e9q(w),!0),s=w.ay?B.nt:M.qo
return new C.C(D.bjO,C.B(C.a([u,D.bla,t,w.a6c(s,"Sound",new A.e9r(w),!0),w.a6c(B.dO,"Ideas",w.gcbC(),!0),w.a6c(D.wX,"Clear",w.gbZz(w),!0),w.aJs(B.iJ,"Show",new A.e9s(w),!0,!0)],x.p),B.m,v,B.e,B.j,0,v,v),v)},
aJs(d,e,f,g,h){var w=null,v=h?B.bs:B.c.j(0.08),u=C.m(14),t=C.m(14),s=C.a([C.V(d,h?B.x:B.c,w,w,w,20)],x.p)
return new C.C(A4.um,C.aD(!1,B.Y,!0,u,C.aH(!1,t,!0,C.hI(new C.C(new C.M(8,8,8,8),C.B(s,B.m,w,B.e,B.R,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ac),w)},
a6c(d,e,f,g){return this.aJs(d,e,f,g,!1)},
ckG(){var w=null,v=new A.e9l(this),u=B.c.j(0.08)
return C.p(w,C.ch(C.B(C.a([v.$2("START",D.vA),v.$2("CHANGE",D.Ch),v.$2("REACT",D.pJ)],x.p),B.F,w,B.e,B.j,0,w,w),B.q,w,B.z,w,w,w,w,B.aZ),B.h,w,w,new C.o(D.TP,w,new C.c2(new C.ay(u,1,B.r,-1),B.W,B.W,B.W),w,w,w,B.n),w,w,w,w,D.bf4,w,w,w)},
ckH(d){var w,v,u,t,s=null,r=D.m8.h(0,d)
r.toString
w=C.m(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.H(v.j(0.5),B.r,1)
return new C.C(B.hi,C.aJ(s,C.p(s,C.u(C.a([C.V(r.b,v,s,s,s,22),B.d5,C.d(r.a,s,1,B.a2,s,s,s,D.aKc,s,s,s)],x.p),B.m,s,B.e,B.R,0,B.p),B.h,s,s,new C.o(s,s,t,w,s,new C.a7(B.b0,B.b5,B.w,u,s,s),B.n),s,s,s,s,B.hv,s,s,62),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.e9k(this,d),s,s,s,s,s,s,!1,B.ae),s)}}
A.bdf.prototype={
a6(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bN(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.a0()
u=C.N()
u.r=B.c.j(0.05).gq(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.L()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.a0()
o=C.N()
o.r=b5.cx.j(0.4*((p-b6)/800)).gq(0)
b8.bi(new C.ae(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){l=w[m]
k=n.h(0,l.a)
j=n.h(0,l.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=j.c
f=g.a-36
g=g.b
e=$.a0()
d=C.a([],o)
a0=new C.aS(e.r,B.as,b4,b4,d)
d.push(new C.bc(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new C.p5(h+a1,i,f-a1,g,f,g))
a2=D.m8.h(0,k.b).d
a3=D.m8.h(0,j.b).d
e=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
e.b=B.ad
e.c=3
e.d=B.bV
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.qT(new C.v(h,i),new C.v(f,g))
e.sar(new C.a7(B.a3,B.a7,B.w,d,b4,b4).az(0,new C.ae(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.L()
i=a0.gbL().a.snapshot()
b7.drawPath((a0.e=new C.cG(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=B.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=A.h0e(new C.v(i.a+36,i.b+0),new C.v(h.a-36,h.b),a5)
$.a0()
h=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
h.r=B.c.j(0.35).gq(0)
h.z=I.pi
q=h.L()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
g.r=B.c.gq(0)
q=g.L()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.an(0,D.Gp)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new C.aS($.a0().r,B.as,b4,b4,C.a([],o))
o=a8.b
a0.G(new C.bc(t,o))
i=a9.b
a0.G(new C.p5(t+a1,o,w-a1,i,w,i))
i=C.N()
i.b=B.ad
i.c=3
i.r=B.c.j(0.7).gq(0)
b8.aU(a0,i)
i=C.N()
i.r=B.c.gq(0)
b8.ap(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b0=w[m]
o=b0.c
v=B.k.D((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=B.dU.av(0,v)
$.a0()
h=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
h.b=B.ad
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gq(0)
q=h.L()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b1=w[m]
v=B.k.D((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=C.l1(o,i,B.dU.av(0,v))
h.toString
i=C.l1(o,i,B.dU.av(0,B.k.D(v-0.35,0,1)))
i.toString
$.a0()
o=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
o.c=5
o.d=B.bV
g=b1.c
f=C.a([g.j(0),g],p)
e=C.qT(i,h)
o.sar(new C.a7(B.a3,B.a7,B.w,f,b4,b4).az(0,new C.ae(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.L()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
i.r=B.c.gq(0)
q=i.L()
b7.drawCircle(o,h,6,q)
q.delete()
i=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
i.r=g.j(0.5*(1-v)).gq(0)
i.z=B.ji
q=i.L()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){a4=w[m]
v=B.k.D((b6-a4.f)/a4.e,0,1)
o=a4.a
$.a0()
i=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
i.r=a4.c.j(1-v).gq(0)
q=i.L()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){j=w[m]
o=j.a
$.a0()
i=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
h=j.c
i.r=h.j(0.35).gq(0)
i.z=B.ji
q=i.L()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
i.sar(new C.bR(N.pK,0.5,B.w,b4,0,C.a([B.c,h],p),b4,b4).az(0,C.bV(j.a,8)))
q=i.L()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.K)(b5),++m){a6=b5[m]
v=B.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=A.bdg(a6.b,26+8*t,a6.c.j(t),b4,b4,B.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a6(b8,new C.v(t.a-o/2,t.b-(40+60*v+p.gbg(p)/2)))}for(b5=new C.dv(n,n.r,n.e);b5.C();)b3.c7x(b8,b5.d,b6)
b7.restore()},
c7x(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.m8.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:B.k.D(1-(f-w)/520,0,1)
u=C.dh(e.c,64,64)
t=C.bM(u,B.jO)
s=t.eH(B.cs)
$.a0()
r=C.N()
r.r=B.x.j(0.55).gq(0)
r.z=B.m9
d.b6(s,r)
if(v>0){s=t.cD(6)
r=C.N()
r.r=h.d.j(0.6*v).gq(0)
r.z=B.AW
d.b6(s,r)}s=t.eH(B.cG)
r=C.N()
q=h.d
r.r=C.ap(q,B.x,0.65).gq(0)
d.b6(s,r)
r=C.N()
s=C.ap(q,B.c,0.18+0.4*v)
s.toString
p=C.ap(q,B.x,0.35)
p.toString
r.sar(new C.a7(B.b0,B.b5,B.w,C.a([s,p],x.O),j,j).az(0,u))
d.b6(t,r)
r=C.N()
r.b=B.ad
r.c=1.2
r.r=B.c.j(0.35).gq(0)
d.b6(t,r)
r=h.b
p=e.c
o=A.bdg(C.jw(r.a),30,B.c,r.b,j,B.I)
r=o.b
s=r.c
r=r.a.c
o.a6(d,p.aE(0,new C.v(s/2,r.gbg(r)/2)))
n=A.bdg(h.a,11,B.c,j,j,B.I)
n.a6(d,e.c.an(0,new C.v(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[B.o.K(e.d,r)]
else m=i==="pop"?D.as2[B.o.K(e.d,6)]:j
h=h.c
if(h===D.pJ){s=e.c.an(0,new C.v(0,62))
r=C.N()
r.r=D.asu[B.o.K(e.d,6)].gq(0)
d.ap(s,5,r)}else if(m!=null){l=A.bdg(m,9.5,B.aA,j,j,B.O)
l.a6(d,e.c.an(0,new C.v(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=A.bdg(m,9.5,B.aA,j,j,B.O)
l.a6(d,e.c.an(0,new C.v(-l.b.c/2,54)))}if(k.c)return
if(h!==D.vA)k.aXA(d,e.c.aE(0,D.Gp),q)
k.aXA(d,e.c.an(0,D.Gp),q)},
aXA(d,e,f){var w
$.a0()
w=C.N()
w.r=B.bW.gq(0)
d.ap(e,9,w)
w=C.N()
w.b=B.ad
w.c=2.2
w.r=f.gq(0)
d.ap(e,9,w)
w=C.N()
w.r=B.c.gq(0)
d.ap(e,3.5,w)},
aq(d){return!0}}
A.aJ3.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bhK.prototype={}
A.O9.prototype={
gX(d){return this.d}}
A.Ua.prototype={
S(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new A.bgP(new C.cn(null,x.A),w,v,B.cA,B.bu,D.D8,null,null)}}
A.bgP.prototype={
aVn(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=B.o.D(B.k.bJ((1-d.b/(C.aG(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.ar4[B.o.K(v,5)]+12*B.o.aj(v,5)+12
switch(t.z){case"glow":A.l0("synth",u,420,0.3)
break
case"rainbow":A.l0("bell",u,700,0.35)
break
case"stars":A.l0("pluck",u+12,400,0.4)
break
case"sparks":A.dL(2400+t.r.aB(2000),"",60,0,0.18,"noise")
break
default:A.dL(110+t.r.aB(60),"",140,0,0.22,"noise")}},
c1t(d){return this.aVn(d,!1)},
Z(){var w,v=this
v.a0()
w=v.qR(new A.ejq(v))
w.kn(0)
v.w!==$&&C.aO()
v.w=w},
p(){var w=this.w
w===$&&C.c()
w.p()
this.bqb()},
gaX7(){var w=this.Q
return w<0?new G.mP(1,B.k.K(this.y*0.18,360),0.85,1).iF():D.O6[w]},
aNI(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gaX7(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.ae()*3.141592653589793*2
switch(l.z){case"fire":q=v.ae()
p=l.as
o=v.ae()
n=v.ae()
m=C.ap(B.cS,B.aG,v.ae())
m.toString
j.push(new A.O9(new C.v(u+(q-0.5)*p,t),new C.v((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.ae()*0.4),l.y,700+v.aB(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.ae()*200
n=C.ap(k,B.c,v.ae()*0.6)
n.toString
j.push(new A.O9(d,new C.v(q*o,p*o),n,1.5+v.ae()*3,l.y,600+v.aB(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.ae()*40
j.push(new A.O9(d,new C.v(q*o,p*o),k,1.2+v.ae()*1.8,l.y,500))}}},
aUf(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gaX7()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new A.bhK(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aNI(e)
r.aVn(e,!0)
r.n(new A.ej1())},
aUe(){this.ax=null
this.n(new A.ej0())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aF(n,n,n,n,D.m5,n,n,n,new A.eja(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b1(n,n,n,new A.bo1(k,o.f,o.y,o.at,n),B.at)],m)
if(!o.ay&&k.length===0)j.push(D.aX6)
k=C.aJ(B.c3,new C.am(B.V,n,B.aY,B.q,j,n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,new A.ejb(o),new A.ejc(o),new A.ejg(o),n,n,n,n,n,n,n,n,n,new A.ejh(o),new A.eji(o),n,n,n,!1,B.ae)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cDl[w]
j.push(new A.dy(v.b,o.z===v.a,new A.ejj(o,v),v.c,B.c8,n))}u=C.a([new A.DV(B.c,o.Q<0,new A.ejk(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new A.DV(D.O6[t],o.Q===t,new A.ejl(o,t),!1,n))
s=o.as
s=A.ho(B.c8,B.o.u(B.k.U(s)),"Size",36,4,new A.ejm(o),s)
r=o.ch
q=r?B.nt:M.qo
q=C.a([new A.dy("Sound",r,new A.ejn(o),q,B.c8,n),new A.fe(B.uH,"Undo",new A.ejd(o),B.c,n),new A.fe(D.wX,"Clear",new A.eje(o),B.cL,n)],m)
for(w=0;w<4;++w){p=D.cRV[w]
q.push(new A.DV(p,o.at.A(0,p),new A.ejf(o,p),!1,n))}return A.jf(B.c8,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.en(k,o.d),"SPARK PAINTER",C.u(C.a([new A.eE(j,"BRUSH",n),new A.eE(u,"COLOUR",n),s,new A.eE(q,n,n)],m),B.m,n,B.e,B.R,0,B.p))}}
A.bo1.prototype={
a6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.a0()
w=C.N()
v=a4.e
w.r=v.gq(v)
a6.bi(new C.ae(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.a0()
o=C.a([],t)
n=new C.aS(p.r,B.as,a5,a5,o)
o.push(new C.bc(B.d.gJ(q).a,B.d.gJ(q).b))
for(p=C.U(q),m=p.k("pt<1>"),l=new C.pt(q,1,a5,m),l.FV(q,1,a5,p.c),l=new C.bU(l,l.gI(0),m.k("bU<ai.E>")),m=m.k("ai.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.ar(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bC(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=B.d.gJ(q)
$.a0()
p=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
p.r=r.c.gq(0)
j=p.L()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.a0()
q=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.b=B.ad
q.d=B.bV
q.e=B.fo
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gq(0)
q.z=new C.hF(B.G,p)
j=q.L()
q=n.e
u.drawPath((q==null?n.e=new C.cG(n.gbL().a.snapshot()):q).a,j)
j.delete()
q=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.b=B.ad
q.d=B.bV
q.e=B.fo
q.c=p
q.r=o.gq(0)
j=q.L()
q=n.e
u.drawPath((q==null?n.e=new C.cG(n.gbL().a.snapshot()):q).a,j)
j.delete()
q=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.b=B.ad
q.d=B.bV
q.e=B.fo
q.c=p*0.35
q.r=B.c.j(0.85).gq(0)
j=q.L()
q=n.e
u.drawPath((q==null?n.e=new C.cG(n.gbL().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new G.mP(1,B.o.K(i*5,360),0.85,1).iF()
o=q[i-1]
m=q[i]
$.a0()
l=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
l.c=p
l.d=B.bV
l.r=h.gq(0)
j=l.L()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,C.K)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=B.d.gJ(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new G.mP(1,B.o.K(a3*23,360),0.7,1).iF():l
a4.bZC(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){a0=w[s]
e=B.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.a0()
p=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
p.r=a0.c.j((1-e)*0.9).gq(0)
p.z=E.Oz
j=p.L()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
bZC(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.a0(),o=C.a([],x.v),n=new C.aS(p.r,B.as,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new C.bc(r,q)
o.push(r)
q=n.f
if(q!=null)r.bC(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new C.ar(r,q)
o.push(r)
q=n.f
if(q!=null)r.bC(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.G(new C.bL())
$.a0()
p=C.N()
p.r=h.j(0.4).gq(0)
p.z=B.ji
d.aU(n,p)
p=C.N()
p.r=h.gq(0)
d.aU(n,p)},
aq(d){return!0}}
A.Um.prototype={
S(){return new A.aBy(new C.cn(null,x.A),new C.ao(new C.bb("NGMY",B.b_,B.aL),$.au()),null,null)}}
A.aBy.prototype={
gHo(){var w,v=this,u=v.e
if(u===$){w=C.bi(null,B.rB,null,1,null,v)
w.cF(0)
v.e!==$&&C.bH()
v.e=w
u=w}return u},
Z(){this.a0()
var w=this.gHo()
w.d5()
w.dM$.H(0,this.gbR8())},
bR9(){var w,v,u,t,s,r,q,p=this,o=p.gHo().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?B.lC:new C.lN(w)).gI(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)A.dL(1500,"",35,0,0.18,"square")
else if(s==="glitch")A.dL(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
A.l0(s,D.aq4[B.o.K(t,8)]+12,450,0.35)}}p.Q=o},
p(){this.gHo().p()
var w=this.f
w.R$=$.au()
w.O$=0
this.bqh()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.lN(h)
w=C.z(h,C.a2(h).k("G.E"))}v=D.O6[k.w]
h=x.p
u=C.a([C.aF(j,j,j,j,D.m5,j,j,j,new A.eq_(k,d),j,j,j,j,"Share",j)],h)
t=C.m(26)
s=D.as3[k.y]
s=C.bu(t,C.bT(C.at(C.c4(k.gHo(),new A.eq0(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a7(B.ax,B.aC,B.w,s,j,j),B.n),B.b9),B.ap)
t=B.c.j(0.06)
t=C.aK(j,B.U,!1,j,!0,B.q,j,C.aL(),i,j,j,j,j,j,2,C.bm(j,new C.b2(4,C.m(14),B.W),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,I.BU,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),B.z,!0,j,!0,j,!1,j,B.ag,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new A.eq1(k),j,j,j,!1,j,j,!1,j,!0,j,B.a8,j,j,j,j,j,j,j,j,j,j,j,B.hb,!0,B.a6,j,B.am,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.cfS[r]
i.push(new A.dy(q.b,k.r===q.a,new A.eq2(k,q),j,B.cS,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new A.DV(D.O6[o],k.w===o,new A.eq3(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?B.nt:M.qo
l=C.a([new A.dy(m,n,new A.eq4(k),l,B.cS,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new A.DV(D.as3[o][0],k.y===o,new A.eq5(k,o),!1,j))
n.push(B.bp)
n.push(new A.fe(B.m3,"Replay",new A.eq6(k),B.c,j))
m=k.x
return A.jf(B.cS,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.C(B.bB,new C.en(s,k.d),j),"TITLE ANIMATOR",C.u(C.a([t,B.P,new A.eE(i,"MOVE",j),new A.eE(p,"COLOUR",j),new A.eE(l,"SOUND",j),new A.eE(n,"BACK",j),A.ho(B.cS,B.o.u(B.k.U(m)),"Size",96,28,new A.eq7(k),m)],h),B.m,j,B.e,B.R,0,B.p))},
bTR(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cJ(h.j(0.7),B.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<B.k.bJ(g*1.6*f)?1:0
w=h
break
case"bounce":o=-Math.abs(Math.sin(B.k.K(g*2-q*0.5,1)*3.141592653589793))*s.x*0.5
w=h
break
case"wave":o=Math.sin(g*3.141592653589793*2-q*3)*s.x*0.28
w=h
break
case"neon":v=Math.sin(g*40+e*7)>0.92?0.25:1
B.d.a7(p)
p.push(new C.cJ(h,B.J,30*v))
p.push(new C.cJ(h.j(0.8),B.J,60*v))
w=h
m=v
break
case"glitch":u=B.o.K(B.k.bJ(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=B.bd
else w=u?B.c8:h
break
case"zoom":t=B.k.D(g*1.4-q*0.5,0,1)
n=B.nN.av(0,t)
w=h
m=t
break
case"rainbow":w=new G.mP(1,B.k.K(g*360+e*40,360),0.75,1).iF()
B.d.a7(p)
p.push(new C.cJ(w.j(0.7),B.J,18))
break
default:w=h}return C.d7(C.dP(C.e5(B.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,B.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.v(l,o)),m)}}
A.aJc.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.aJi.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.YL.prototype={}
A.TU.prototype={
S(){var w=C.a([],x.aS)
return new A.aBd(new C.cn(null,x.A),w,B.cA,B.at,$,B.bu,0,C.a([],x.X),null,null)}}
A.aBd.prototype={
gab2(){var w=this.r
return new C.v(w.a/2,w.b/2)},
aYf(){return new G.mP(1,this.f.ae()*360,0.6,1).iF()},
ao8(d,e,f,g){var w=this,v=w.gab2().an(0,new C.v(Math.cos(e),Math.sin(e)).aM(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new A.YL(v,new C.v(-t,s).aM(0,r).aM(0,u*f),w.Q*(0.6+w.f.ae()*0.9),w.aYf(),C.a([],x.g)))},
bzP(d,e,f){return this.ao8(d,e,f,!1)},
bzO(d,e){return this.ao8(d,e,1,!1)},
cmW(){var w,v,u,t=this
B.d.a7(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bzO(40+w*u/5,v.ae()*3.141592653589793*2)},
bAH(){var w=this.r
this.bzP(Math.min(w.a,w.b)*0.42,this.f.ae()*3.141592653589793*2,0.45)},
Z(){this.a0()
this.kL()},
l3(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,B.at))return
w=a2.e
v=w.length
if(v===0&&a2.fE$<300)return
u=a2.gab2()
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
if(o.length>260)B.d.cu(o,0)}else B.d.a7(n.e)}for(p=0;p<w.length;w.length===o||(0,C.K)(w),++p){n=w[p]
v=n.a
a1=!1
if(v.b<r)if(J.lC(v.a-s)!==J.lC(n.f-s)){v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
m=v<Math.min(Math.abs(m.a),Math.abs(m.b))
a1=m}if(a1&&a2.ax&&a2.fE$-n.r>250){n.r=a2.fE$
v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
A.l0("bell",D.aq4[B.k.U((1-B.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a5(w,new A.e6f(u),C.U(w).k("a5<1>")).gI(0)>0&&a2.ax)A.dL(70,"",300,0.6,0.8,"sine")
B.d.bm(w,new A.e6g(a2,u))},
cbv(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gab2()
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
if(B.o.K(s,3)===0)k.push(t)
if(m<16)break}return k},
gaRP(){var w,v=this.as
if(v==null||this.at==null)v=B.J
else{w=this.at
w.toString
w=v.aE(0,w).aM(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aF(r,r,r,r,D.m5,r,r,r,new A.e63(s,d),r,r,r,r,"Share",r)],q),o=C.cj(new A.e64(s)),n=s.w
n=A.ho(B.d3,B.k.aa(n,1)+"x","Sun mass",2.5,0.3,new A.e65(s),n)
w=s.x
w=A.ho(B.d3,B.k.aa(w,1)+"x","Time",3,0.2,new A.e67(s),w)
v=s.Q
v=A.ho(B.d3,B.o.u(B.k.U(v)),"Planet size",16,3,new A.e68(s),v)
u=s.ax
t=u?B.nt:M.qo
return A.jf(B.d3,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.u(C.a([n,w,v,new A.eE(C.a([new A.dy("Sound",u,new A.e69(s),t,B.d3,r),new A.dy("Trails",s.z,new A.e6a(s),B.Lp,B.d3,r),new A.dy("Planets pull each other",s.y,new A.e6b(s),B.xl,B.d3,r)],q),r,r),new A.eE(C.a([new A.fe(B.m2,"Solar system",new A.e6c(s),B.d3,r),new A.fe(B.mI,"Comet",new A.e6d(s),B.c,r),new A.fe(B.m_,"Cluster",new A.e6e(s),B.c,r),new A.fe(D.wX,"Clear",new A.e66(s),B.cL,r)],q),r,r)],q),B.m,r,B.e,B.R,0,B.p))}}
A.bhx.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.a0()
w=C.N()
w.r=D.TI.gq(0)
d.bi(new C.ae(0,0,0+g,0+f),w)
v=new C.f0()
v.dX(5)
for(w=d.a,u=0;u<70;++u){t=v.ae()
s=v.ae()
r=v.ae()
q=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.r=B.c.j(0.25+v.ae()*0.4).gq(0)
p=q.L()
w.drawCircle(t*g,s*f,r*1.2+0.3,p)
p.delete()}o=16+i.d*6
g=i.c
f=o*3.2
t=C.N()
s=x.O
t.sar(new C.bR(B.A,0.5,B.w,h,0,C.a([B.d3.j(0.45),B.K],s),h,h).az(0,C.bV(g,f)))
d.ap(g,f,t)
t=C.N()
t.sar(D.dTf.az(0,C.bV(g,o)))
d.ap(g,o,t)
for(g=i.b,f=g.length,n=0;n<g.length;g.length===f||(0,C.K)(g),++n){m=g[n]
t=m.e
if(t.length>1)for(r=m.d,u=1;q=t.length,u<q;++u){l=u/q
q=t[u-1]
k=t[u]
j=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
j.c=2.2*l+0.4
j.d=B.bV
j.r=r.j(l*0.8).gq(0)
p=j.L()
w.drawLine.apply(w,[q.a,q.b,k.a,k.b,p])
p.delete()}t=m.a
r=m.c
q=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
k=m.d
q.r=k.j(0.3).gq(0)
q.z=I.pi
p=q.L()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
j=C.ap(k,B.x,0.5)
j.toString
q.sar(new C.bR(N.pK,0.5,B.w,h,0,C.a([B.c,k,j],s),h,h).az(0,C.bV(m.a,r)))
p=q.L()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.N()
t.c=2
t.r=B.j_.gq(0)
d.bQ(g,f,t)
t=C.N()
t.r=B.c.gq(0)
d.ap(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,C.K)(g),++n){m=g[n]
t=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
t.r=B.c.j(0.7).gq(0)
p=t.L()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
aq(d){return!0}}
A.a9s.prototype={}
A.Uh.prototype={
S(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new A.bgU(new C.cn(null,x.A),w,v,B.cA,B.at,$,B.bu,0,C.a([],x.X),null,null)}}
A.bgU.prototype={
Z(){this.a0()
this.kL()},
bZD(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.e,v=k.r;w.length<B.k.U(k.x);){u=v.ae()*3.141592653589793*2
t=k.w
s=v.ae()
r=k.w
q=v.ae()
p=Math.cos(u)
o=Math.sin(u)
n=k.as
m=v.ae()
l=k.ax
if(l==="fish")l=170
else l=l==="fly"?50:300
w.push(new A.a9s(new C.v(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.v(p*n,o*n),B.k.K(m*60+l,360)))}while(w.length>B.k.U(k.x))w.pop()},
l3(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,B.at))return
a2.bZD()
w=a2.f
B.d.bm(w,new A.epr(a2))
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
B.d.bm(w,new A.eps(a2))
if(w.length<a1&&a2.ch)A.l0("bell",12+a2.r.aB(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fE$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fE$
A.l0("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aF(l,l,l,l,D.m5,l,l,l,new A.epg(m,d),l,l,l,l,"Share",l)],k),i=C.cj(new A.eph(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cEP[w]
h.push(new A.dy(v.b,m.at===v.a,new A.epi(m,v),v.c,B.bm,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cpA[w]
u.push(new A.dy(t.b,m.ax===t.a,new A.epj(m,t),l,B.bm,l))}s=m.ch
r=s?B.nt:M.qo
r=C.a([new A.dy("Sound",s,new A.epk(m),r,B.bm,l)],k)
s=m.x
s=A.ho(B.bm,B.o.u(B.k.U(s)),"How many",150,15,new A.epl(m),s)
q=A.ho(B.bm,l,"Together",2.5,0,new A.epm(m),m.y)
p=A.ho(B.bm,l,"Apart",2.5,0,new A.epn(m),m.z)
o=A.ho(B.bm,l,"Same way",2.5,0,new A.epo(m),m.Q)
n=m.as
return A.jf(B.bm,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.u(C.a([new A.eE(h,"TOUCH",l),new A.eE(u,"LOOK",l),new A.eE(r,l,l),s,q,p,o,A.ho(B.bm,B.o.u(B.k.U(n)),"Speed",280,50,new A.epp(m),n)],k),B.m,l,B.e,B.R,0,B.p))}}
A.boS.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.a9m,D.b9O],x.O)
else{v=x.O
w=a4==="fly"?C.a([B.d9,Q.aaN],v):C.a([D.b7f,D.b_F],v)}v=0+a6.a
u=0+a6.b
t=$.a0()
s=C.N()
s.sar(new C.a7(B.b0,B.b5,B.w,w,a3,a3).az(0,new C.ae(0,0,v,u)))
a5.bi(new C.ae(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){q=v[r].a
p=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
p.r=B.cS.gq(0)
o=p.L()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
n.r=B.cS.j(0.25).gq(0)
n.z=I.pi
o=n.L()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new G.mP(1,j,0.7,1).iF()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
f.r=h.j(0.35*g).gq(0)
f.z=B.ji
o=f.L()
s.drawCircle(j.a,j.b,9,o)
o.delete()
j=k.a
f=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
f.r=B.c.j(g).gq(0)
o=f.L()
s.drawCircle(j.a,j.b,2.6,o)
o.delete()
break
case"bird":J.bN(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
e=Math.sin(l+j)*5
j=C.a([],m)
d=new C.aS(t,B.as,a3,a3,j)
j.push(new C.bc(8,0))
j.push(new C.ar(-6,-7-e))
j.push(new C.ar(-2,0))
j.push(new C.ar(-6,7+e))
j.push(new C.bL())
j=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
j.r=h.gq(0)
o=j.L()
j=d.gbL().a.snapshot()
s.drawPath((d.e=new C.cG(j)).a,o)
o.delete()
s.restore()
break
default:J.bN(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
a0=Math.sin(n+j)*3
j=C.a([],m)
d=new C.aS(t,B.as,a3,a3,j)
j.push(new C.bc(9,0))
j.push(new C.d_(0,-6,-7,a0))
j.push(new C.ar(-12,-4+a0))
j.push(new C.ar(-12,4+a0))
j.push(new C.ar(-7,a0))
j.push(new C.d_(0,6,9,0))
j=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
f=C.ap(h,B.cE,0.6)
f.toString
j.sar(new C.a7(B.a3,B.a7,B.w,C.a([h,f],q),a3,a3).az(0,D.ek8))
o=j.L()
j=d.gbL().a.snapshot()
s.drawPath((d.e=new C.cG(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=B.cL
else a1=v==="scare"?B.cS:B.bm
v=u?12:22
u=C.N()
u.b=B.ad
u.c=2.5
u.r=a1.j(0.8).gq(0)
a5.ap(a4,v,u)}},
aq(d){return!0}}
A.a9V.prototype={}
A.Ss.prototype={
S(){var w=C.a([],x.bi)
return new A.azP(w,B.cA,B.at,C.S(x.N,x.S),$,B.bu,0,C.a([],x.X),null,null)}}
A.azP.prototype={
gGR(){var w=this.r,v=18+B.k.U(w*0.85)
return B.o.D(B.k.U(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gaa9(){return 54-8*(this.r/100)},
Z(){this.a0()
this.kL()
A.yu("chain_burst").bw(new A.dyI(this),x.P)},
aUh(){return A.v9("chain_burst",C.E(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
awn(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
B.d.a7(k)
l.z=l.y=!1
w=l.as=0
l.at=null
v=18+B.k.U(l.r*0.85)
for(u=l.e;w<v;++w){t=u.ae()*3.141592653589793*2
s=u.ae()
r=l.f
q=u.ae()
p=l.f
o=Math.cos(t)
n=Math.sin(t)
m=(30+l.r*0.45)*(0.6+u.ae()*0.8)
k.push(new A.a9V(new C.v(20+s*(r.a-40),20+q*(p.b-40)),new C.v(o*m,n*m),new G.mP(1,u.ae()*360,0.6,1).iF()))}},
Xn(d){var w,v=this
if(d==null)return 0
w=(v.fE$-d)/1000
if(w<0.4)return v.gaa9()*B.dU.av(0,w/0.4)
if(w<1.1)return v.gaa9()
if(w<1.5)return v.gaa9()*(1-(w-1.1)/0.4)
return 0},
l3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,B.at)||!j.Q)return
w=j.d
if(w.length===0)j.awn()
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
if(s<8||s>j.f.b-8)t.b=new C.v(r.a,-r.b)}if(j.y){n=C.a([],x.T)
v=j.at
if(v!=null)n.push(new C.A(v,j.Xn(j.ax)))
for(v=B.d.gag(w),s=new C.hJ(v,new A.dyJ());s.C();){r=v.gT(0)
n.push(new C.A(r.a,j.Xn(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.K)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fE$
A.dL(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eG()
break}}}if(!(j.at!=null&&j.Xn(j.ax)>0||B.d.bf(w,new A.dyK(j)))&&j.fE$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gGR()){if(j.as>=j.gGR()*1.5)k=3
else k=j.as>=j.gGR()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.m(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
A.Aw("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aUh()}else A.dL(120,"",300,0,0.3,"saw")}}},
aUg(d){this.n(new A.dyy(this,d))
this.aUh()},
ab3(){var w=0,v=C.j(x.H),u=this,t,s
var $async$ab3=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.cf(null,null,!0,null,new A.dyB(u),s,null,!0,!0,x.S),$async$ab3)
case 2:t=e
if(t!=null)u.aUg(t)
return C.h(null,v)}})
return C.i($async$ab3,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gGR(),t=w.x.h(0,""+w.r)
return A.jf(B.c8,B.fV,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cj(new A.dyF(w,t==null?0:t,u)),"CHAIN BURST",C.B(C.a([new A.fe(B.qk,"Levels",w.gbZE(),B.c8,v),new A.fe(B.jI,"New board",new A.dyG(w),B.c,v)],x.p),B.m,v,B.e,B.j,0,v,v))},
arC(d,e,f){var w=null
return C.u(C.a([C.d(d,w,w,w,w,w,w,D.aJx,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p)},
bRA(d,e){return this.arC(d,e,B.c)}}
A.b7a.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.a0()
w=C.N()
w.r=D.D8.gq(0)
d.bi(new C.ae(0,0,0+e.a,0+e.b),w)
v=new A.cFm(d)
w=l.c
if(w!=null)v.$3(w,l.r.$1(l.d),B.c)
for(w=l.b,u=w.length,t=d.a,s=l.r,r=0;r<w.length;w.length===u||(0,C.K)(w),++r){q=w[r]
p=q.d
o=q.a
n=q.c
if(p!=null)v.$3(o,s.$1(p),n)
else{$.a0()
p=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
p.r=n.j(0.25).gq(0)
p.z=I.pi
m=p.L()
t.drawCircle(o.a,o.b,12,m)
m.delete()
o=q.a
p=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
p.r=n.gq(0)
m=p.L()
t.drawCircle(o.a,o.b,8,m)
m.delete()}}},
aq(d){return!0}}
A.aIc.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bt1.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bp9()}}
A.aJ0.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bth.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bq_()}}
A.aJf.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.btp.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bqe()}}
A.Em.prototype={
gcFn(){return this.a.aE(0,this.b).gcj()>4}}
A.aaJ.prototype={}
A.TO.prototype={
S(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new A.bgt(new C.cn(null,x.A),w,v,B.cA,B.at,$,B.bu,0,C.a([],x.X),null,null)}}
A.bgt.prototype={
aLs(d){return new G.mP(1,B.o.K(d*29,360),0.6,1).iF()},
Y5(d){var w,v=D.AS.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=B.o.D(B.k.bJ(d.a/s*t),0,t-1)
return v[B.o.K(w,u)]+12*B.o.ed(w,u)},
aNY(d){B.d.bm(this.e,new A.e1J(this,d))},
cj9(d,e,f){var w=f.aE(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aE(0,e).gcj()
return d.aE(0,e.an(0,w.aM(0,B.k.D((d.aE(0,e).a*v+d.aE(0,e).b*u)/t,0,1)))).gcj()},
auW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
B.d.a7(f)
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
k=g.Y5(new C.v((q+n)/2,(p+m)/2))
p=r?o:new C.v(n,p)
r=r?l:new C.v(q,m)
f.push(new A.Em(p,r,k,new G.mP(1,B.o.K(k*29,360),0.6,1).iF()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.v(v*(0.1+i*0.16+r),w)
k=g.Y5(h)
f.push(new A.Em(h,h,k,new G.mP(1,B.o.K(k*29,360),0.6,1).iF()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.v(v*(0.08+w.ae()*0.84),u*(0.2+w.ae()*0.65))
k=g.Y5(h)
f.push(new A.Em(h,h,k,new G.mP(1,B.o.K(k*29,360),0.6,1).iF()))}}},
Z(){this.a0()
this.kL()},
bZG(d,e){var w,v=this.fE$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
A.l0(v,d.c+12,w,B.k.D(0.25+e/900,0.25,0.8))}},
l3(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,B.at))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new A.aaJ(new C.v(a2.w.a*(0.2+v.ae()*0.6),6),new C.v((v.ae()-0.5)*40,0),new G.mP(1,v.ae()*360,0.5,1).iF()))}if(u>3)a2.as=0
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
if(a1<0){a2.bZG(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.v(m.a-l*k,m.b-n*k)}}}}}B.d.bm(w,new A.e27(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aF(p,p,p,p,C.V(q.ay?B.nt:M.qo,B.al,p,p,p,21),p,p,p,new A.e1X(q),p,p,p,p,"Sound",p),C.aF(p,p,p,p,D.m5,p,p,p,new A.e1Y(q,d),p,p,p,p,"Share",p)],o),m=C.cj(new A.e1Z(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.cHW[w]
l.push(new A.dy(v.b,q.x===v.a,new A.e2_(q,v),v.c,B.bd,p))}u=C.a([],o)
for(t=J.aV(D.AS.geb(D.AS));t.C();){s=t.gT(t)
u.push(new A.dy(s,q.y===s,new A.e20(q,s),p,B.bd,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.asQ[w]
t.push(new A.dy(r.b,q.z===r.a,new A.e21(q,r),p,B.bd,p))}s=q.Q
return A.jf(B.bd,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.u(C.a([new A.eE(l,"TOOL",p),new A.eE(u,"SCALE",p),new A.eE(t,"SOUND",p),A.ho(B.bd,B.k.aa(s,1)+"/s","Marbles",4,0.3,new A.e22(q),s),new A.eE(C.a([new A.fe(D.brC,"Stairs",new A.e23(q),B.bd,p),new A.fe(Ab.Ld,"Pinball",new A.e24(q),B.c,p),new A.fe(B.m_,"Random",new A.e25(q),B.c,p),new A.fe(D.wX,"Clear",new A.e26(q),B.cL,p)],o),p,p)],o),B.m,p,B.e,B.R,0,B.p))}}
A.be9.prototype={
a6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.a0()
w=C.N()
w.sar(D.bHl.az(0,new C.ae(0,0,a0,a1)))
a2.bi(new C.ae(0,0,a0,a1),w)
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
if(Math.sqrt(m*m+k*k)>4){q=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.b=B.ad
q.d=B.bV
q.c=12+j
q.r=i.j(0.2+h).gq(0)
q.z=B.ji
g=q.L()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()
q=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.b=B.ad
q.d=B.bV
q.c=6
q.r=C.ap(i,B.c,r*0.7).gq(0)
g=q.L()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()}else{p=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
p.r=i.j(0.25+h).gq(0)
p.z=B.ji
g=p.L()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
p=C.ap(i,B.x,0.4)
p.toString
j.sar(new C.bR(N.pK,0.5,B.w,d,0,C.a([B.c,i,p],v),d,d).az(0,C.bV(q,9)))
g=j.L()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=C.N()
u.c=5
u.d=B.bV
u.r=B.aA.gq(0)
a2.bQ(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,C.K)(a0),++t){f=a0[t]
u=f.a
q=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
p=f.c
q.r=p.j(0.3).gq(0)
q.z=B.qz
g=q.L()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.sar(new C.bR(N.pK,0.5,B.w,d,0,C.a([B.c,p],v),d,d).az(0,C.bV(f.a,7)))
g=q.L()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
aq(d){return!0}}
A.abd.prototype={}
A.TT.prototype={
S(){var w=C.a([],x.gB)
return new A.aBc(new C.cn(null,x.A),w,B.cA,B.at,$,B.bu,0,C.a([],x.X),null,null)}}
A.aBc.prototype={
gaUi(){var w=this.w
return new C.v(w.a/2,w.b/2)},
av6(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
awj(d){var w=D.AS.h(0,this.y),v=5-d,u=w.length
return w[B.o.K(v,u)]+12*B.o.ed(v,u)},
Z(){this.a0()
this.kL()},
aMN(){var w,v,u,t,s=this.e
B.d.a7(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new A.abd(w,B.k.K(t/v+u,1)))}},
l3(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,B.at))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fE$
if(p.Q){r=p.z
s=p.awj(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
A.l0(r,s+12,q,0.55)}}}},
bZH(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aE(0,h.gaUi()),e=f.gcj()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.av6(v)-e)
if(u<w){g.a=v
w=u}}if(w>28)return
t=B.k.K((Math.atan2(f.b,f.a)+1.5707963267948966)/6.283185307179586+1,1)
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
m=h.av6(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new A.e5D(h,n).$0()
h.c.e3()
return}}h.n(new A.e5E(g,h,t))
if(h.Q)A.l0(h.z,h.awj(g.a)+12,700,0.5)
C.eG()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aF(q,q,q,q,C.V(r.Q?B.nt:M.qo,B.al,q,q,q,21),q,q,q,new A.e5L(r),q,q,q,q,"Sound",q),C.aF(q,q,q,q,D.m5,q,q,q,new A.e5M(r,d),q,q,q,q,"Share",q)],p),n=C.cj(new A.e5N(r)),m=r.x
m=A.ho(B.bF,""+B.k.U(m),"Tempo",180,40,new A.e5O(r),m)
w=C.a([],p)
for(v=J.aV(D.AS.geb(D.AS));v.C();){u=v.gT(v)
w.push(new A.dy(u,r.y===u,new A.e5P(r,u),q,B.bF,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.asQ[t]
v.push(new A.dy(s.b,r.z===s.a,new A.e5Q(r,s),q,B.bF,q))}return A.jf(B.bF,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.u(C.a([m,new A.eE(w,"SCALE",q),new A.eE(v,"SOUND",q),new A.eE(C.a([new A.fe(B.dO,"Demo",new A.e5R(r),B.bF,q),new A.fe(B.m_,"Random",new A.e5S(r),B.c,q),new A.fe(D.wX,"Clear",new A.e5T(r),B.cL,q)],p),q,q)],p),B.m,q,B.e,B.R,0,B.p))}}
A.bhy.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.a0()
w=C.N()
w.r=D.TI.gq(0)
a5.bi(new C.ae(0,0,0+a6.a,0+a6.b),w)
w=a3.d
v=a3.e
u=v.$1(w-1)+14
t=a3.c
s=t.aE(0,new C.v(0,u))
r=C.N()
r.c=2
q=x.O
p=t.a
o=p-1
n=t.b
m=n-u
r.sar(new C.a7(B.b5,B.b0,B.w,C.a([B.c.j(0.05),B.c.j(0.5)],q),a4,a4).az(0,new C.ae(o,m,o+2,m+u)))
a5.bQ(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new G.mP(1,B.k.K(s.$1(l)*23,360),0.55,1).iF()
o=v.$1(l)
m=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
m.b=B.ad
m.c=1.6
m.r=k.j(0.35).gq(0)
j=m.L()
r.drawCircle(p,n,o,j)
j.delete()
o=D.cXW[B.o.K(B.o.K(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.lO(new C.es(o,a4,a4,B.cU,a4,a4,a4,a4,a4,a4,new C.F(!0,m,a4,a4,a4,a4,9.5,B.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),B.a6,B.cn,new C.k3(1),a4,a4,a4,a4,B.cm,a4)
i.fq()
o=i.b.c
m=J.fya(v.$1(l))
h=i.b.a.c
i.a6(a5,new C.v(p+-o/2,n+(m-h.gbg(h)-2)))}w=C.N()
w.sar(D.dSU.az(0,C.bV(t,16)))
a5.ap(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.K)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new G.mP(1,B.k.K(s.$1(a0)*23,360),0.55,1).iF()
a2=B.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fya(v.$1(a0))
a0=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
a0.b=B.ad
a0.c=3*a2
a0.r=k.j(a2).gq(0)
j=a0.L()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
d.r=k.j(0.35).gq(0)
d.z=B.ji
j=d.L()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
d.sar(new C.bR(N.pK,0.5,B.w,a4,0,C.a([B.c,k],q),a4,a4).az(0,C.bV(new C.v(h,a1),8.5)))
j=d.L()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
aq(d){return!0}}
A.aIZ.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.btf.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpY()}}
A.aJ_.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.btg.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpZ()}}
A.rB.prototype={}
A.b63.prototype={}
A.TR.prototype={
S(){var w=x.S
return new A.aBa(C.a([],x.aq),C.S(w,w),C.aZ(w),D.ep4)}}
A.aBa.prototype={
Z(){this.a0()
A.yu("molecule_maker").bw(new A.e57(this),x.P)},
agr(d){var w={}
w.a=0
this.f.bE(0,new A.e4U(w,d))
return w.a},
gaUo(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)t.push(w[u].a)
return A.hHb(t,this.f,D.a_h[this.d])},
bZY(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.f0()
w.dX(t*7+3)
t=v.y
v.n(new A.e4O(v,e,t.a,w,t.b))
A.vc("pop",u.length,90,0.35)},
att(d){return this.n(new A.e4P(this))},
aUp(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c_3(d){this.n(new A.e4T(this,this.aUp(d)))},
cfL(){var w=this.r
if(w==null)return
this.n(new A.e4S(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a_h[k.d],h=k.gaUo()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.uW.h(0,w[u].a).a-k.agr(u)
w=i.c
w=w.gdH(w)
t=w.di(w,new A.e51(),x.N).aG(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?B.bm:B.hs
r=x.p
s=C.u(C.a([new C.C(B.fx,A.eXh(w,s,h&&k.d<12?new A.fe(B.jh,"Next",new A.e52(k),B.bm,j):j),j),C.D(C.cj(new A.e53(k)),1)],r),B.m,j,B.e,B.j,0,B.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new A.dy(p+D.a_h[u].b,k.d===u,new A.e54(k,u),j,B.hs,j))}q=C.a([],r)
for(p=D.uW.gdH(D.uW),p=p.gag(p);p.C();){o=p.gT(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?B.fc:m.b
q.push(new A.dy(n+" \xb7 "+m.a,!1,new A.e55(k,o),j,l,j))}return A.jf(B.hs,B.fV,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.u(C.a([new A.eE(w,"GOAL",j),new A.eE(q,"ADD",j),new A.eE(C.a([new A.dy("Remove selected atom",!1,k.gcfK(),B.e4,B.cL,j),new A.dy("Clear all",!1,k.gbZZ(k),B.jI,B.aM,j)],r),j,j)],r),B.m,j,B.e,B.R,0,B.p))}}
A.beQ.prototype={
a6(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=B.o.K(t*37,10)
r=B.o.K(t*53,10)
$.a0()
q=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.r=B.hs.j(0.03).gq(0)
p=q.L()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bE(0,new A.dhn(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.uW.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.bV(j,26)
if(q===t){$.a0()
h=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
h.r=B.aM.j(0.4).gq(0)
h.z=B.ji
p=h.L()
u.drawCircle(j.a,j.b,34,p)
p.delete()}j=m.b
$.a0()
h=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
g=l.b
f=C.ap(g,B.c,0.5)
f.toString
e=C.ap(g,B.x,0.5)
e.toString
h.sar(new C.bR(B.HY,0.5,B.w,a3,0,C.a([f,g,e],r),F.arc,a3).az(0,i))
p=h.L()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?B.aH:B.c
d=new C.lO(new C.es(n,a3,a3,B.cU,a3,a3,a3,a3,a3,a3,new C.F(!0,j,a3,a3,a3,a3,19,B.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),B.a6,B.cn,new C.k3(1),a3,a3,a3,a3,B.cm,a3)
d.fq()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a6(a4,new C.v(n.a-h/2,n.b-j.gbg(j)/2))
n=k===0
a0=n?B.br:B.aX
j=m.b
h=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
h.r=a0.gq(0)
p=h.L()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.t(k)
a1=new C.lO(new C.es(n,a3,a3,B.cU,a3,a3,a3,a3,a3,a3,B.ow),B.a6,B.cn,new C.k3(1),a3,a3,a3,a3,B.cm,a3)
a1.fq()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a6(a4,new C.v(n.a+(20-h/2),n.b+(-20-j.gbg(j)/2)))}if(n===0){d=C.iR(a3,a3,a3,a3,D.exu,B.a6,B.cn,a3,B.eE,B.cm)
d.fq()
d.a6(a4,new C.v((w-d.b.c)/2,v/2))}},
aq(d){return!0}}
A.SP.prototype={
S(){var w=x.s
return new A.bfJ(C.a([],w),C.a([],w))}}
A.bfJ.prototype={
Z(){this.a0()
this.asU()
A.yu("dna_lab").bw(new A.dGC(this),x.P)},
gaZs(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a0f.h(0,w[u])
t.toString
s.push(t)}return B.d.fM(s)},
ga6L(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(B.a.al(this.gaZs(),w,v))}return u},
asU(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.f0()
k.dX(l.e*31+l.d*7+C.AJ(new C.P(Date.now(),0,!1)))
w=new A.dGr(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mg(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=B.a.al(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a0f.h(0,p[n])
m.toString
r.push(m)}t.push(B.d.fM(r))}if(!B.d.bf(t,new A.dGq()))break}l.f=v
B.d.a7(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.aXi()},
aXi(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=A.fGJ(s.ga6L()[r])
v=J.dE(D.AT.geb(D.AT),new A.dGs(w)).dA(0)
u=new C.f0()
u.dX(r+s.e)
B.d.fw(v,u)
u=C.a([w],x.s)
B.d.v(u,C.dd(v,0,C.dJ(3,"count",x.S),C.U(v).c))
t=new C.f0()
t.dX(s.e*3+r)
B.d.fw(u,t)
s.z=u},
aUn(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.d2w.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a0f.h(0,w.f[v])
u.toString
break A}u=A.fGJ(w.ga6L()[v])
break A}w.n(new A.dGp(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new A.dGA(),e=new A.dGv(),d=h.d===2?h.gaZs():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,P.mg,g,g,g),B.av],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?B.c8.j(0.18):B.K
q=new C.b3(10,10)
p=new C.ay(t.length===s?B.c8:B.bG,1,B.r,-1)
o=C.a([],a0)
for(n=h.ga6L()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.cC(B.aZ,B.e,B.R,B.m,g,B.p,g,0,o,g),B.h,g,g,new C.o(r,g,new C.c2(p,p,p,p),new C.bv(q,q,q,q),g,g,B.n),g,g,g,D.bed,B.ef,g,g,g))}v.push(C.c8(B.bH,u,B.bw,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.c8(B.bH,u,B.bw,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a3(34,g,new C.cx(B.A,g,g,C.V(A8.Lj,j<t.length?B.aA:B.bG,g,g,g,14),g),g))
B.d.v(v,C.a([new C.C(B.JM,C.c8(B.bH,u,B.bw,0,0),g)],a0))}v.push(B.ar)
v.push(C.d(w,g,g,g,g,g,g,P.mg,g,g,g))
v.push(B.av)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?B.bm.j(0.25):B.du
q=new C.b3(12,12)
o=j<t.length
p=new C.ay(o?B.bm:B.bf,1,B.r,-1)
if(o){o=D.AT.h(0,t[j])
o.toString}else o="?"
n=j<t.length?B.c:B.c1
u.push(C.p(g,new C.w(o,g,new C.F(!0,n,g,g,g,g,g,B.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),B.h,g,g,new C.o(r,g,new C.c2(p,p,p,p),new C.bv(q,q,q,q),g,g,B.n),g,g,g,g,B.ei,g,g,g))}v.push(C.c8(B.bH,u,B.bw,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",B.c,!0)
u.push(r)}v.push(C.c8(B.bH,u,B.bw,0,0))}v.push(B.ay)
u=h.w
if(u.length!==0){t=h.r.length
v.push(A.eXh(u,t>=(h.d===2?3:9)?B.bm:B.c8,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(A.eXh(u,B.c8,g))}v.push(B.T)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,E.QY,g,g,g))
v=C.ch(C.u(v,B.F,g,B.e,B.j,0,B.p),B.q,g,B.z,g,B.bB,g,g,B.ai)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new A.dy(D.cNc[j],h.d===j,new A.dGw(h,j),g,B.c8,g))
u=C.a([new A.eE(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bF(B.a3,g,g,new A.fe(B.jI,"New strand",new A.dGx(h),B.bm,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.K)(t),++l){i=t[l]
q=D.AT.h(0,i)
q.toString
a0.push(new A.fe(D.Xf,q,new A.dGy(h,i),B.c8,g))}u.push(C.c8(B.bH,a0,B.bw,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.aq9:D.cxE
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.b3(14,14)
a0.push(C.aJ(g,C.p(B.A,new C.w(k,g,D.exK,g,g,g,g,g,g,g,g,g),B.h,g,g,new C.o(e.$1(k),g,g,new C.bv(q,q,q,q),g,g,B.n),g,54,g,g,g,g,g,64),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.dGz(h,k),g,g,g,g,g,g,!1,B.ae))}u.push(C.B(a0,B.m,g,B.qy,B.j,0,g,g))}return A.jf(B.c8,B.fV,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.u(u,B.m,g,B.e,B.R,0,B.p))}}
A.T4.prototype={
S(){return new A.aAi(B.bu,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
A.aAi.prototype={
Z(){var w,v=this
v.a0()
w=v.qR(v.gc__())
w.kn(0)
v.d!==$&&C.aO()
v.d=w
A.yu("ecosystem").bw(new A.dJr(v),x.P)},
p(){var w=this.d
w===$&&C.c()
w.p()
this.bpn()},
gaIN(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c_0(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length>160)B.d.cu(v,0)}if(m.gaIN()){w=m.Q+=l
if(w>m.as){m.as=w
if(B.o.K(B.k.bJ(w),5)===0)A.v9("ecosystem",C.E(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.n(new A.dJe())},
a7V(d){this.n(new A.dJd(this,d))
A.vc("pop",3,120,0.4)},
c_2(){return this.n(new A.dJf(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.u(C.a([new C.C(D.V4,A.eXh(r,t.gaIN()?B.bm:B.cL,s),s),C.D(new C.C(D.beK,C.bu(C.m(18),C.b1(s,s,s,new A.bac(t.f,t.r,t.w,s),B.ff),B.ap),s),1),new C.C(B.fm,C.d("Alive together: "+B.k.U(t.Q)+" s     Best: "+B.k.U(t.as)+" s",s,s,s,s,s,s,D.eEo,s,s,s),s)],q),B.m,s,B.e,B.j,0,B.p)
w=t.x
w=A.ho(B.bm,B.k.aa(w,1)+"\xd7","Grass growth",2,0.2,new A.dJj(t),w)
v=t.y
v=A.ho(B.c9,B.k.aa(v,1)+"\xd7","Rabbit breeding",2,0.3,new A.dJk(t),v)
u=t.z
return A.jf(B.bm,B.fV,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.u(C.a([w,v,A.ho(B.d3,B.k.aa(u,1)+"\xd7","Fox hunting",2,0.3,new A.dJl(t),u),new A.eE(C.a([new A.dy("Drought",!1,new A.dJm(t),B.xj,B.aM,s),new A.dy("Disease",!1,new A.dJn(t),D.brw,B.bF,s),new A.dy("+ Foxes",!1,new A.dJo(t),s,B.d3,s),new A.dy("+ Rabbits",!1,new A.dJp(t),s,B.c9,s),new A.dy("Reset",!1,t.gc_1(),B.jI,B.b2,s)],q),s,s)],q),B.m,s,B.e,B.R,0,B.p))}}
A.bac.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.a0()
w=C.N()
w.sar(D.bFr.az(0,new C.ae(0,0,d,a0)))
a1.bi(new C.ae(0,0,d,a0),w)
w=h.b
a0=C.ap(B.tX,B.br,B.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.N()
t.r=a0.gq(0)
a1.bi(new C.ae(0,v,d,v+u),t)
s=B.k.U(w[0]*0.9)
r=new C.f0()
r.dX(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.ae()*e
o=f*(0.6+0.4*r.ae())
t=Math.sin(a0+q)
n=r.ae()
m=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
m.r=B.hh.gq(0)
m.c=1.6
l=m.L()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new A.cYR(h,a2,f,a1)
k.$5(Math.min(B.k.U(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(B.k.U(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.ae(10,a0,e,u)
t=C.N()
t.r=D.b3D.gq(0)
a1.bi(new C.ae(0,f,d,f+g),t)
i=C.N()
i.r=B.du.gq(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.L()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new A.cYT(h,j,a1)
g.$3(0,100,B.br)
g.$3(1,120,B.c9)
g.$3(2,24,B.d3)
g=new A.cYS(a1,j)
g.$3("Grass "+B.k.U(w[0]),B.br,16)
g.$3("Rabbits "+B.k.U(w[1]),B.c9,102)
g.$3("Foxes "+B.k.U(w[2]),B.d3,200)},
aq(d){return!0}}
A.aIp.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.aOI.prototype={
gu7(){return B.d.cI(this.a,0,new A.bC4())}}
A.Sk.prototype={
S(){var w=x.S
return new A.bfq(A.hEl(),C.bY(5,0,!1,w),C.aZ(w),B.bu,null,null)}}
A.bfq.prototype={
gv4(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return B.d.cI(t,0,new A.duT())},
Z(){var w,v=this
v.a0()
w=v.qR(new A.dv5(v))
w.kn(0)
v.x!==$&&C.aO()
v.x=w
A.yu("balance_lab").bw(new A.dv6(v),x.P)},
p(){var w=this.x
w===$&&C.c()
w.p()
this.bp1()},
cpS(d){var w,v=this
v.n(new A.duU(v,d))
A.vc("click",v.f[d],60,0.4)
if(v.gv4()===v.d[v.e].gu7()&&v.r.H(0,v.e)){A.vc("zap",10,260,0.5)
w=v.r
w=C.z(w,C.a2(w).k("ck.E"))
A.v9("balance_lab",C.E(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.J(k,new A.duZ(),C.U(k).k("J<1,n>")).aG(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=B.d.aG(k," + ")
if(o.gv4()===m[o.e].gu7())s="\u2696\ufe0f Balanced! "+m[o.e].gu7()+" = "+o.gv4()+". The torques are equal, so the seesaw stays level."
else s=o.gv4()>m[o.e].gu7()?"The right side is too strong ("+o.gv4()+" vs "+m[o.e].gu7()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].gu7()+" vs "+o.gv4()+"). Add weight to the right, or place it further from the middle."
k=o.gv4()===m[o.e].gu7()?B.bm:B.aM
k=A.bwa(s,k,o.gv4()===m[o.e].gu7()&&o.e<m.length-1?new A.fe(B.jh,"Next",new A.dv_(o),B.bm,n):n)
w=C.D(C.cj(new A.dv0(o,l)),1)
u=j.length===0?"0":j
u=C.D(C.d("Left torque\n"+u+" = "+m[o.e].gu7(),n,n,n,n,n,n,D.aKH,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.u(C.a([new C.C(D.V4,k,n),w,new C.C(D.acB,C.B(C.a([u,C.D(C.d("Right torque\n"+r+" = "+o.gv4(),n,n,n,n,n,n,D.aKH,B.dL,n,n),1)],q),B.m,n,B.e,B.j,0,n,n),n)],q),B.m,n,B.e,B.j,0,B.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new A.dy(w+p,o.e===v,new A.dv1(o,v),n,B.aM,n))}return A.jf(B.aM,B.fV,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.u(C.a([new A.eE(u,"LEVEL",n),new A.eE(C.a([new A.dy("Clear right side",!1,new A.dv2(o),B.jI,B.cL,n)],q),n,n)],q),B.m,n,B.e,B.R,0,B.p))}}
A.b6f.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.aS($.a0().r,B.as,null,null,C.a([],x.v))
i.G(new C.bc(h,f))
w=f+70
i.G(new C.ar(h-30,w))
i.G(new C.ar(h+30,w))
i.G(new C.bL())
v=C.N()
v.r=B.ak.gq(0)
d.aU(i,v)
v=h-120
i=C.N()
i.r=B.aI.gq(0)
d.bi(new C.ae(v,w,v+240,w+8),i)
i=d.a
J.bN(i.save())
i.translate(h,f)
d.o6(0,j.b)
u=g*5.8
t=C.bM(new C.ae(-u,-9,u,9),B.hB)
w=C.N()
w.sar(D.bI1.az(0,new C.ae(t.a,t.b,t.c,t.d)))
d.b6(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.a0()
v=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
v.r=B.hZ.gq(0)
v.c=1.5
r=v.L()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
A.f8F(d,""+Math.abs(s),new C.v(w,22),B.c1,10)}q=new A.cxU(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,B.b2)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],B.c8)
if(w[s]===0){l=C.bM(C.dh(new C.v(m,-22),22,v),B.hB)
$.a0()
k=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
k.b=B.ad
k.c=1.4
k.r=B.bf.gq(0)
r=k.L()
i.drawRRect(C.fA(l),r)
r.delete()
A.f8F(d,"+",new C.v(m,-22),B.c1,14)}}i.restore()
$.a0()
i=C.N()
i.r=(j.e?B.bm:B.aJ).gq(0)
d.ap(new C.v(h,f),7,i)},
aq(d){return!0},
gjt(){return this.e}}
A.Ti.prototype={
S(){return new A.bfV(C.a([16,32,12,24],x.t),C.aZ(x.S),B.bu,null,null)}}
A.bfV.prototype={
gZv(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gabc(){var w=this.gZv(),v=this.r,u=D.asz[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.d6(this.d,x.S).a<4)
else w=!1
return w},
Z(){var w,v=this
v.a0()
w=v.qR(new A.dNe(v))
w.kn(0)
v.x!==$&&C.aO()
v.x=w
A.yu("gear_lab").bw(new A.dNf(v),x.P)},
p(){var w=this.x
w===$&&C.c()
w.p()
this.bpv()},
c_4(d,e){var w,v=this
v.n(new A.dN4(v,d,e))
if(v.gabc()&&v.w.H(0,v.r)){A.vc("zap",8,240,0.45)
w=v.w
w=C.z(w,C.a2(w).k("ck.E"))
A.v9("gear_lab",C.E(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.gZv(),n=r.gZv(),m=D.asz[r.r].a
m=r.gabc()?"\u2705 Done! Ratio "+B.k.aa(r.gZv(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gabc()?B.bm:B.d3
v=r.d
u=x.p
n=C.u(C.a([new C.C(D.V4,A.bwa(m,w,r.gabc()&&r.r<7?new A.fe(B.jh,"Next",new A.dN8(r),B.bm,q):q),q),C.D(C.b1(q,q,q,new A.bbF(v,r.f,q),B.ff),1),new C.C(D.acB,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+B.k.aa(r.gZv(),2)+"   \xb7   Output "+B.k.aa(p*o,1)+" rpm   \xb7   Force \xd7"+B.k.aa(1/n,2),q,q,q,q,q,q,O.a3T,B.L,q,q),q)],u),B.m,q,B.e,B.j,0,B.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new A.dy(m+s,r.r===t,new A.dN9(r,t),q,B.d3,q))}p=r.e
u=C.a([new A.eE(o,"GOAL",q),A.ho(B.b2,""+B.k.U(p)+" rpm","Input speed",120,10,new A.dNa(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new A.asX("Gear "+s+" teeth",p,new A.dNb(r,t),8,40,D.cVI[t],""+p,q))}return A.jf(B.d3,B.fV,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.u(u,B.m,q,B.e,B.R,0,B.p))}}
A.bbF.prototype={
bJF(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.a0(),j=C.a([],x.v),i=new C.aS(k.r,B.as,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.dU_,D.dYv,D.ec9,D.e47],s=v===0,r=0;r<4;++r){q=t[r]
p=q.a
o=u+p*h
n=e+q.b
m=k+Math.cos(o)*n
l=w+Math.sin(o)*n
if(s&&p===0){p=new C.bc(m,l)
j.push(p)
m=i.f
if(m!=null)p.bC(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}else{p=new C.ar(m,l)
j.push(p)
m=i.f
if(m!=null)p.bC(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}}}i.G(new C.bL())
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
n=B.d.ft(g,B.pP)
m=-n-6
l=n+6
r=e.a
u=e.b
k=Math.min(r/(o-p),u/(l-m))*0.96
s=d.a
J.bN(s.save())
s.translate(r/2-(p+o)/2*k,u/2-(m+l)/2*k)
d.bV(0,k)
j=this.c
u=w[0]
r=w[1]
i=-j*u/r+3.141592653589793/r
r=w[2]
u=w[3]
h=new A.d4P(this,d)
h.$6$back(new C.v(t,0),g[2],r,i,B.dD,!0)
h.$5(new C.v(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,B.dk)
h.$5(new C.v(0,0),g[0],w[0],j,B.mq)
h.$5(new C.v(t,0),g[1],w[1],i,B.h1)
s.restore()
s=new A.d4Q(d,e,p,o,k)
s.$3("1 \xb7 input",0,B.b2)
s.$3("2+3 \xb7 shared axle",t,B.d3)
s.$3("4 \xb7 output",q,B.bm)},
aq(d){return!0}}
A.St.prototype={
S(){var w=$.au()
return new A.bfD(new C.ao(new C.bb("Meet me at noon",B.b_,B.aL),w),new C.ao(new C.bb("LEMON",B.b_,B.aL),w),C.aZ(x.S))}}
A.bfD.prototype={
Z(){this.a0()
this.aTj()
A.yu("cipher_lab").bw(new A.dz4(this),x.P)},
p(){var w=this.d,v=$.au()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
aTj(){this.y=1+B.cA.aB(25)
this.z=0},
ga7c(){var w=this
return A.a_E(A.a_E(D.Fo[w.x],w.y),-w.z)===D.Fo[w.x]},
gaum(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=A.a_E(u,v.w)
break A}if(1===t){w=new C.J(C.a(A.a_E(u,0).split(""),x.s),new A.dyN(),x.dv).fM(0)
break A}w=A.hQJ(u,v.e.a.a)
break A}return w},
aOQ(d){var w,v,u,t,s,r=null,q=C.bY(26,0,!1,x.S)
for(w=new C.cY(d.toUpperCase()),v=x.e8,w=new C.bU(w,w.gI(0),v.k("bU<bS.E>")),v=v.k("bS.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,B.d.ft(q,B.yS))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.b3(2,2)
v.push(new C.bE(1,B.bo,C.u(C.a([C.p(r,r,B.h,r,r,new C.o(B.b2,r,r,new C.bv(u,u,u,u),r,r,B.n),r,46*q[s]/t,r,B.K5,r,r,r,r),new C.w(C.jw(65+s),r,D.eG5,r,r,r,r,r,r,r,r,r)],w),B.m,r,B.m7,B.j,0,B.p),r))}return new C.a3(r,70,C.B(v,B.dF,r,B.e,B.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=B.c.j(0.07)
v=x.p
w=C.a([C.aK(o,B.U,!1,o,!0,B.q,o,C.aL(),p.d,o,o,o,o,o,2,C.bm(o,new C.b2(4,C.m(14),B.W),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.l7,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new A.dyW(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eAC,!0,B.a6,o,B.am,o,o,o,o)],v)
if(p.r===2){u=B.c.j(0.07)
B.d.v(w,C.a([B.T,C.aK(o,B.U,!1,o,!0,B.q,o,C.aL(),p.e,o,o,o,o,o,2,C.bm(o,new C.b2(4,C.m(14),B.W),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.l7,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new A.dyX(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,B.ix,!0,B.a6,o,B.am,o,o,o,o)],v))}w.push(B.ay)
w.push(D.f4_)
w.push(B.av)
v=B.b2.j(0.12)
u=C.m(14)
t=C.H(B.b2.j(0.4),B.r,1)
w.push(C.p(o,C.yM(p.gaum().length===0?"\u2026":p.gaum(),D.eF8,o),B.h,o,o,new C.o(v,o,t,u,o,o,B.n),o,o,o,o,B.bB,o,o,o))
w.push(B.ab)
w.push(A.bwa(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],B.b2,o))
w.push(B.ab)
w.push(D.eMW)
w.push(B.av)
w.push(p.aOQ(p.gaum()))
w.push(B.av)
w.push(D.ePc)
s=C.cL(w,o,B.bB,o,o,B.ai,!1)}else{w=A.bwa("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",B.aM,o)
v=C.d(A.a_E(D.Fo[p.x],p.y),o,o,o,o,o,o,D.eFE,o,o,o)
u=(p.ga7c()?B.bm:B.b2).j(0.14)
t=C.m(14)
r=C.H((p.ga7c()?B.bm:B.b2).j(0.5),B.r,1)
t=C.a([w,B.ab,D.eZ8,v,B.T,D.eTZ,C.p(o,C.d(A.a_E(A.a_E(D.Fo[p.x],p.y),-p.z),o,o,o,o,o,o,D.eH4,o,o,o),B.h,o,o,new C.o(u,o,r,t,o,o,B.n),o,o,o,o,B.bB,o,o,o),B.ab,p.aOQ(A.a_E(D.Fo[p.x],p.y)),B.P],x.p)
if(p.ga7c())t.push(A.bwa("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",B.bm,new A.fe(B.jI,"Next",new A.dyY(p),B.bm,o)))
s=C.cL(t,o,B.bB,o,o,B.ai,!1)}w=p.f
v=x.p
w=C.a([new A.eE(C.a([new A.dy("Make a secret",w===0,new A.dyZ(p),B.j2,B.b2,o),new A.dy("Crack a code",w===1,new A.dz_(p),B.ql,B.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new A.dy(n[q],p.r===q,new A.dz0(p,q),o,B.b2,o))
v=C.a([new A.eE(u,o,o)],v)
if(p.r===0){u=p.w
v.push(A.ho(B.b2,""+u,"Shift",25,1,new A.dz1(p),u))}B.d.v(w,v)}else{v=p.z
w.push(A.ho(B.aM,""+v,"Shift back",25,0,new A.dz2(p),v))}return A.jf(B.b2,B.fV,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.u(w,B.m,o,B.e,B.R,0,B.p))}}
A.aI4.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.aIx.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.j0.prototype={}
A.vi.prototype={
aI2(d,e,f,g){var w=this
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
A.a83.prototype={}
A.a97.prototype={}
A.a2i.prototype={
b8_(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.he()?-1:1
v=t.ae()*3.141592653589793*2
u=f*(0.3+t.ae())
s.push(new A.a83(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ae()*0.45));++r}},
bWN(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}B.d.bm(w,new A.bHA())},
agS(d,e,f,g){var w="p"+this.c++,v=new A.vi(w,e,f,g)
v.aI2(w,e,f,g)
this.a.push(v)
return v},
W(d,e){B.d.W(this.a,e)
B.d.bm(this.b,new A.bHL(e))},
a7(d){B.d.a7(this.a)
B.d.a7(this.b)},
cxs(d,e,f,g,h){return B.d.bf(this.b,new A.bHG(e,f,g,h))},
azH(d,e,f,g){var w
if(d===f||this.cxs(0,d,e,f,g))return null
w=new A.a97(d,e,f,g)
this.b.push(w)
return w},
b0Q(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
b0P(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
ajt(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c_5(d){var w,v=d.b
switch(v){case"bulb":return 10
case"motor":return 6
case"buzzer":return 25
case"heater":return 4
case"radio":return 30
case"tv":return 50
case"resistor":return d.r
case"pot":return 1+99*d.f
case"voltmeter":return 1e6
case"ammeter":return 0.02}w=D.uV.h(0,v)
if(w!=null)return w.a
return 100},
a5e(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.d+=a1
d.bWN(a1)
d.w=Math.max(0,d.w-a1)
w=Math.min(a1*6,0.12)
for(v=d.a,u=v.length,t=a1*0.25,s=0;s<u;++s){r=v[s]
if(r.b==="crank")r.f=Math.max(0,r.f-t)}u=x.S
q=C.S(x.N,u)
p=new A.bHN(q)
o=C.a([],x.t)
n=new A.bHM(o)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.K)(v),++s){r=v[s]
p.$2(r,0)
p.$2(r,1)}for(m=0;m<q.a;++m)o.push(m)
for(t=d.b,l=t.length,s=0;s<t.length;t.length===l||(0,C.K)(t),++s){k=t[s]
j=n.$1(p.$2(k.a,k.b))
i=n.$1(p.$2(k.c,k.d))
if(j!==i)o[j]=i}h=C.S(u,u)
g=new A.bHP(h,n,p)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,C.K)(v),++s){r=v[s]
g.$2(r,0)
g.$2(r,1)}f=h.a
if(f===0)return
s=0
for(;;){if(!(s<t)){e=0
break}r=v[s]
u=r.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){e=g.$2(r,1)
break}++s}d.cmX(f,e,w,!0)
d.bGK(a1)},
cmX(b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=x.S,b3=C.S(x.N,b2),b4=new A.bHC(b3),b5=C.a([],x.t)
for(w=b1.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
b4.$2(t,0)
b4.$2(t,1)}for(s=0;s<b3.a;++s)b5.push(s)
r=new A.bHB(b5)
for(v=b1.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.K)(v),++u){p=v[u]
o=r.$1(b4.$2(p.a,p.b))
n=r.$1(b4.$2(p.c,p.d))
if(o!==n)b5[o]=n}m=new A.bHE(C.S(b2,b2),r,b4)
for(b2=w.length,u=0;u<w.length;w.length===b2||(0,C.K)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b2=x.i
l=C.bY(b6,0,!1,b2)
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
for(d=0;d<b6;++d)e[d]=C.bY(b6,0,!1,b2)
a0=C.bY(b6,0,!1,b2)
k.a7(0)
j.a7(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,C.K)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/b1.b0P(t)
a4=b1.b0Q(t)*a3}else{a5=t.x
a4=0
if(a5&&a2!=="capacitor")a3=1e-9
else if(a2==="switch")a3=t.w?100:1e-9
else if(a2==="fuse")a3=20
else if(a2==="led"){a2=v.h(0,t.a)
a6=a2===!0
a3=a6?0.06666666666666667:1e-9
a4=a6?a3*1.9:0}else if(a2==="capacitor"){a4=i*t.z
a3=a5?1e-9:i}else a3=1/b1.c_5(t)}k.m(0,t,a3)
j.m(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b6;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b1.bJE(e,a0,b7)
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
t.ch=l[o]-l[n]
v=k.h(0,t)
if(v==null)v=0
q=t.ch
h=j.h(0,t)
if(h==null)h=0
t.CW=v*q-h
if(t.b==="capacitor"&&!t.x)t.z=t.ch}return!0},
bJE(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return C.bY(d,0,!1,x.i)
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
t[m]=t[m]-g*u[l][m]}}}f=C.bY(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bGK(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=d.a,v=w.length,u=a0*0.015,t=a0*0.2,s=a0*0.8,r=a0*0.9,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
o=p.b
n=o==="battery"
if(n&&p.e===1.5&&!p.x){m=p.CW
if(m>0.003)p.as=Math.min(1,p.as+t*Math.min(m,1))
else if(m<-0.003)p.as=Math.max(0,p.as-u*Math.min(-m,1))}if((n||o==="solar"||o==="crank"||o==="turbine")&&!p.x){l=d.b0Q(p)/d.b0P(p)
if(l>0.3){n=Math.abs(p.CW)
n=n>0.4&&n>l*0.55&&!d.bz6(p)}else n=!1
m=p.Q
if(n){p.Q=m+r
d.b8_(p,3,260)
if(d.w<=0){d.w=0.35
n=d.e
if(n!=null)n.$2("short",p)}if(p.Q>1.4)d.D0(p,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else p.Q=Math.max(0,m-s)}n=p.ch
m=p.CW
k=Math.abs(n*m)
j=Math.abs(m)
i=D.uV.h(0,o)
if(i!=null){n=i.d
h=p.ch
g=n?h:Math.abs(h)
n=!p.x
f=n&&g>=i.b
if(n&&Math.abs(h)>i.c){n=$.Fm().h(0,o).b
m=i.b
m=m===B.k.kk(m)?""+B.k.U(m):C.t(m)
e=i.c
e=e===B.k.kk(e)?""+B.k.U(e):C.t(e)
d.D0(p,"The "+n+" is made for "+m+" to "+e+" volts but got "+B.k.aa(Math.abs(p.ch),1)+" V, so it burnt out.")}n=f&&!p.x?1:0
p.cx=n
n=n>0
p.ax=n?p.ax+a0:0
m=o==="fan"
if(m||o==="toycar"){n=n?B.k.D((Math.abs(p.ch)-1)/6,0.15,1.4):0
p.cx=n
e=p.y
m=m?30:26
p.y=e+n*a0*m}}switch(o){case"bulb":p.cx=p.x?0:B.k.D(k/0.9,0,1)
if(!p.x&&k>2.4)d.D0(p,"The bulb got "+B.k.aa(Math.abs(p.ch),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":p.cx=p.x?0:B.k.D((j-0.001)/0.02,0,1)
if(!p.x&&j>0.045)d.D0(p,"The LED had "+B.k.U(j*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":p.cx=B.k.D(k/14,0,1)
break
case"motor":o=B.k.D(j/0.5,0,1.6)
p.cx=o
p.y=p.y+o*a0*24
break
case"buzzer":p.cx=B.k.D(j/0.05,0,1)
break
case"ammeter":if(!p.x&&j>1.5)d.D0(p,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":p.cx=p.x?0:B.k.D(j/1,0,1)
if(!p.x&&j>1)d.D0(p,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!p.x&&k>0.8)d.D0(p,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":p.cx=B.k.D(Math.abs(p.z)/9,0,1)
if(!p.x&&Math.abs(p.z)>13)d.D0(p,"The capacitor was charged to "+B.k.aa(Math.abs(p.z),1)+" V, more than it can hold.")
break
case"crank":p.y=p.y+p.f*a0*22
break
case"turbine":p.y=p.y+p.f*a0*14
break
case"solar":p.cx=p.f
break}}},
bz6(d){return B.d.bf(this.a,new A.bHz(d))},
D0(d,e){var w
d.x=!0
d.ay=e
this.b8_(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bcs(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.x.a7(0)},
b9m(d){var w,v=!0
if(!this.ajt(d)){w=d.b
if(w!=="led"){v=D.uV.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
SM(d,e){var w=this.b
return new C.a5(w,new A.bHR(d,e),C.U(w).k("a5<1>")).gI(0)},
a46(d){var w,v
if(d.x)return!1
w=d.b
if(D.uV.am(0,w))return d.cx>0
v=d.cx
return v>(w==="led"?0.02:0.05)},
b7w(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=d.b,h=$.Fm().h(0,i).b
if(d.x){i=d.ay
return(i.length===0?"The "+h+" burnt out.":i)+" Press the spanner at the top to fit a new one."}if(!(D.a2Z.t(0,i)||D.uV.am(0,i))||j.a46(d))return null
w=j.SM(d,0)
v=j.SM(d,1)
u=w===0
if(u&&v===0)return"The "+h+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){i=u?"left (+)":"right"
return"Only one end of the "+h+" is wired. Electricity needs a full loop, so wire the "+i+" dot as well, and bring it back to the battery."}u=j.a
t=C.U(u).k("a5<1>")
s=C.z(new C.a5(u,j.gcFF(),t),t.k("G.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
r=D.uV.h(0,i)
i=i==="led"
if(!i){t=r==null?null:r.d
q=t===!0}else q=!0
if(q&&d.ch<-0.3)return"The "+h+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=j.aCQ("battery"),p=J.aV(t.a),t=new C.hJ(p,t.b);t.C();){o=p.gT(p)
if(o.e===1.5&&o.as<=0.02&&j.SM(o,0)+j.SM(o,1)>0){if(o.ch<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+h+"."}}for(t=j.aCQ("switch"),p=J.aV(t.a),t=new C.hJ(p,t.b);t.C();)if(!p.gT(p).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,n=0;n<t;++n){m=u[n]
if(m.x&&m!==d)return"The "+$.Fm().h(0,m.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,n=0;n<t;++n){l=s[n]
p=l.b
if(p==="solar"&&l.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(p==="turbine"&&l.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(p==="crank"&&l.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}if(r!=null&&Math.abs(d.ch)<r.b&&Math.abs(d.CW)>0.0005){k=B.d.bf(u,new A.bHH(j,d))
i=r.b
i=i===B.k.kk(i)?""+B.k.U(i):C.t(i)
u=B.k.aa(Math.abs(d.ch),1)
t=k?", or take out parts that share the voltage with it":""
return"The "+h+" needs at least "+i+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(i&&Math.abs(d.CW)>0.0005)return"An LED needs about 2 volts to light up but only gets "+B.k.aa(Math.abs(d.ch),1)+" V. Use a bigger battery."
if(Math.abs(d.CW)<0.0005)return"No current is flowing through the "+h+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+h+" is not getting enough power ("+B.k.aa(Math.abs(d.ch),1)+" V). Try a bigger battery."},
aCQ(d){var w=this.a
return new C.a5(w,new A.bHK(d),C.U(w).k("a5<1>"))},
aCq(d){return this.aCQ(d).bf(0,new A.bHJ(0.35))},
aBA(d,e){return B.d.bf(this.a,new A.bHI(e))}}
A.agb.prototype={
a6(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=b2.a,a8=b2.b,a9=0+a7,b0=0+a8
$.a0()
w=C.N()
w.r=D.a9O.gq(0)
b1.bi(new C.ae(0,0,a9,b0),w)
v=C.N()
v.r=B.c.j(0.06).gq(0)
for(w=b1.a,u=12;u<a7;u+=24)for(t=12;t<a8;t+=24){s=v.L()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=a5.b,q=r.b,p=q.length,o=a5.f,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-42:42
l=l.d
i=m.c
h=i.c
g=m.d===0?-42:42
a5.cuD(b1,new C.v(k*a7+j,l*a8),new C.v(h*a7+g,i.d*a8),m,m===o)}q=a5.d
if(q!=null&&a5.e!=null){f=A.hcC(q.a,q.b,b2)
q=a5.e
q.toString
$.a0()
p=C.N()
p.r=B.al.gq(0)
p.c=3
p.d=B.bV
b1.bQ(f,q,p)}for(q=r.a,p=q.length,o=a5.c,l=a5.r,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){e=q[n]
k=e.c*a7
j=e.d*a8
if(e.Q>0){i=Math.sin(r.d*30)
$.a0()
h=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
h.r=D.a91.j(B.k.D(e.Q*0.45,0,0.6)).gq(0)
h.z=B.AW
s=h.L()
w.drawCircle(k,j,46+14*i,s)
s.delete()}d=l.h(0,e.a)
if(d==null)d=1
J.bN(w.save())
w.translate(k,j)
i=B.k.D(B.nN.av(0,B.k.D(d,0,1)),0.01,1.4)
w.scale(i,i)
a5.c8v(b1,e,e===o)
w.restore()
if(!e.x){i=e.b
i=(D.a2Z.t(0,i)||D.uV.am(0,i))&&!r.a46(e)&&r.SM(e,0)+r.SM(e,1)>0}else i=!1
if(i){k+=0
j+=-40
$.a0()
i=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
i.r=B.aX.gq(0)
s=i.L()
w.drawCircle(k,j,10,s)
s.delete()
a0=new C.lO(new C.es("!",a6,a6,B.cU,a6,a6,a6,a6,a6,a6,new C.F(!0,B.x,a6,a6,a6,a6,14,B.u,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6)),B.a6,B.cn,new C.k3(1),a6,a6,a6,a6,B.cm,a6)
a0.fq()
a0.a6(b1,new C.v(k+-3,j+-8))}for(a1=0;a1<2;++a1){k=e.c
j=a1===0
i=j?-42:42
i=k*a7+i
k=e.d*a8
$.a0()
h=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
h.r=D.a9O.gq(0)
s=h.L()
w.drawCircle(i,k,7,s)
s.delete()
h=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
h.b=B.ad
h.c=2.4
h.r=(j&&r.b9m(e)?B.cL:B.al).gq(0)
s=h.L()
w.drawCircle(i,k,6,s)
s.delete()
if(j&&r.b9m(e)){a0=new C.lO(new C.es("+",a6,a6,B.cU,a6,a6,a6,a6,a6,a6,new C.F(!0,B.cL,a6,a6,a6,a6,13,B.u,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6)),B.a6,B.cn,new C.k3(1),a6,a6,a6,a6,B.cm,a6)
a0.fq()
a0.a6(b1,new C.v(i+-4,k+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n){a2=p[n]
l=a2.a*a7+a2.c
k=a2.b*a8+a2.d
a3=B.k.D(a2.r/0.8,0,1)
j=C.ap(D.b8W,D.b9K,a3)
j.toString
i=a2.f
$.a0()
h=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
h.r=j.gq(0)
h.c=2.4
h.d=B.bV
s=h.L()
w.drawLine.apply(w,[l,k,l-a2.e*0.035,k-i*0.035,s])
s.delete()
i=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
i.r=j.j(0.35*a3).gq(0)
i.z=B.OA
s=i.L()
w.drawCircle(l,k,4.5*a3+1,s)
s.delete()}if(B.d.bf(q,new A.bD1())){a4=B.d.cI(q,0,new A.bD2())
$.a0()
a8=C.N()
a8.r=D.b_s.j(0.05+0.09*a4*(0.5+0.5*Math.sin(r.d*22))).gq(0)
b1.bi(new C.ae(0,0,a9,b0),a8)
a0=C.iR(a6,a6,a6,a6,D.exp,B.a6,B.cn,a6,B.eE,B.cm)
a0.AP(a7-24)
a0.a6(b1,new C.v(12,10))}},
pA(d,e,f,g,h){var w=null,v=C.iR(w,w,w,w,C.dq(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),e),B.a6,B.cn,w,B.eE,B.cm)
v.fq()
v.a6(d,f)},
cuD(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aS($.a0().r,B.as,null,null,C.a([],x.v))
d.G(new C.bc(a1.a,a1.b))
w=A.h57(a1,a2,a3)
d.G(new C.d_(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.CW)
t=a3.c
s=Math.abs(t.CW)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.ap(B.aM,D.a91,B.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.ap(B.b2,B.aM,B.k.D(r*1.2,0,1))
u.toString
o=u}else o=B.bv
u=C.N()
u.b=B.ad
u.c=a4?7:5
u.d=B.bV
s=a4?B.c:o
u.r=s.j(q?0.4:0.55).gq(0)
a0.aU(d,u)
u=C.N()
u.b=B.ad
u.c=2.4
u.d=B.bV
u.r=(a4?B.c:o).gq(0)
a0.aU(d,u)
if(q){n=new C.a2q(new C.wi(C.xU(d),!1,C.a([],x.R))).gJ(0)
m=40+B.k.D(r*120,0,160)
l=v.CW+t.CW>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.jM()
i=t[u].b
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.jM()
h=t[u].b
h===$&&C.c()
h=B.k.K(j*22+i*m*l,h.a.length())
v.jM()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.jM()
g=t[u].b
g===$&&C.c()
f=B.k.K(h+i,g.a.length())
v.jM()
i=t[u].T1(f).a
h=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
h.r=B.c.gq(0)
e=h.L()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
Nm(d,e,f,g){var w,v,u,t
$.a0()
w=C.N()
v=g?B.b0:B.a3
u=g?B.b5:B.a7
t=C.ap(e,B.x,0.3)
t.toString
w.sar(new C.a7(v,u,B.w,C.a([e,f,e,t],x.O),B.Fq,null).az(0,d))
return w},
asL(d,e,f){return this.Nm(d,e,f,!0)},
bWo(d,e){return this.Nm(d,B.bv,B.iV,e)},
aew(d,e){var w,v,u
$.a0()
w=C.N()
w.sar(D.aG2.az(0,C.bV(e,4.2)))
d.ap(e,4.2,w)
w=e.an(0,D.dKU)
v=e.an(0,D.dL2)
u=C.N()
u.r=B.fd.gq(0)
u.c=1.2
d.bQ(w,v,u)},
c8v(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=4294626325,b4=4286331629,b5=4287322667,b6=4293870660,b7=$.a0(),b8=C.N()
b8.sar(D.bF8.az(0,D.ekD))
b8.c=3.4
b8.d=B.bV
w=C.N()
w.r=B.x.j(0.45).gq(0)
w.z=I.pi
b9.jQ(D.ekw,w)
if(c1){w=C.bM(D.ekC,B.ka)
v=C.N()
v.r=B.c.j(0.14).gq(0)
b9.b6(w,v)}b9.bQ(D.dM4,D.dLX,b8)
b9.bQ(D.dKd,D.dKv,b8)
u=c0.x
switch(c0.b){case"battery":b1.bw8(b9,c0)
break
case"solar":t=C.bM(D.ekz,B.j6)
b9.b6(t,b1.Nm(new C.ae(t.a,t.b,t.c,t.d),B.fc,B.c9,!1))
b7=C.N()
w=C.ap(D.b2g,B.de,0.25+0.55*c0.f)
w.toString
v=C.ap(D.b94,B.lR,0.3+0.4*c0.f)
v.toString
b7.sar(new C.a7(B.ax,B.aC,B.w,C.a([w,v],x.O),b2,b2).az(0,D.a2z))
b9.bi(D.a2z,b7)
s=C.N()
s.r=B.c.j(0.35).gq(0)
s.c=0.8
for(b7=b9.a,r=1;r<6;++r){w=-34+r*68/6
q=s.L()
b7.drawLine.apply(b7,[w,-18,w,18,q])
q.delete()}for(r=1;r<4;++r){w=-18+r*9
q=s.L()
b7.drawLine.apply(b7,[-34,w,34,w,q])
q.delete()}for(r=0;r<6;++r){w=-34+(r+0.5)*68/6
$.a0()
v=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
v.r=B.cq.j(0.5).gq(0)
v.c=0.6
q=v.L()
b7.drawLine.apply(b7,[w,-18,w,18,q])
q.delete()}b7=new C.aS($.a0().r,B.as,b2,b2,C.a([],x.v))
b7.G(new C.bc(-34,18))
b7.G(new C.ar(-6+40*c0.f,-18))
b7.G(new C.ar(4+40*c0.f,-18))
b7.G(new C.ar(-24,18))
b7.G(new C.bL())
w=C.N()
w.r=B.c.j(0.1+0.22*c0.f).gq(0)
b9.aU(b7,w)
w=c0.f
b7=C.N()
b7.r=B.fP.j(0.9).gq(0)
b9.ap(D.dKj,4+4*w,b7)
break
case"crank":p=C.bM(D.eko,B.fY)
b9.b6(p,b1.asL(new C.ae(p.a,p.b,p.c,p.d),B.bx,B.bL))
b7=C.N()
b7.sar(D.aG3.az(0,C.bV(B.J,12)))
b9.ap(B.J,12,b7)
o=new C.v(Math.cos(c0.y)*22,Math.sin(c0.y)*22)
b7=C.N()
b7.r=B.cq.gq(0)
b7.c=5
b7.d=B.bV
b9.bQ(B.J,o,b7)
b7=C.N()
b7.sar(D.dTb.az(0,C.bV(o,7)))
b9.ap(o,7,b7)
b1.aew(b9,D.dLT)
b1.aew(b9,D.dK7)
break
case"turbine":b7=b7.r
w=x.v
v=new C.aS(b7,B.as,b2,b2,C.a([],w))
v.G(new C.bc(-3,24))
v.G(new C.ar(3,24))
v.G(new C.ar(1.5,0))
v.G(new C.ar(-1.5,0))
v.G(new C.bL())
n=C.N()
n.r=B.c9.gq(0)
b9.aU(v,n)
for(v=b9.a,m=0;m<3;++m){n=c0.y
J.bN(v.save())
v.rotate((n+m*2.094)*180/3.141592653589793,0,0)
n=C.a([],w)
l=new C.aS(b7,B.as,b2,b2,n)
n.push(new C.bc(0,-2))
n.push(new C.d_(6,-14,2,-30))
n.push(new C.d_(-2,-14,0,-2))
n.push(new C.bL())
n=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
n.r=B.c.gq(0)
q=n.L()
n=l.gbL().a.snapshot()
v.drawPath((l.e=new C.cG(n)).a,q)
q.delete()
v.restore()}b7=C.N()
b7.sar(D.dST.az(0,C.bV(B.J,4.5)))
b9.ap(B.J,4.5,b7)
break
case"switch":p=C.bM(D.eks,B.tv)
b7=C.N()
b7.sar(D.ajt.az(0,new C.ae(p.a,p.b,p.c,p.d)))
b9.b6(p,b7)
b1.aew(b9,D.Pr)
b1.aew(b9,D.aB3)
k=c0.w?D.aB3:D.dJZ
b7=C.N()
b7.r=B.aH.gq(0)
b7.c=6
b7.d=B.bV
b9.bQ(D.Pr,k,b7)
b7=C.N()
b7.r=(c0.w?B.bm:B.c9).gq(0)
b7.c=4
b7.d=B.bV
b9.bQ(D.Pr,k,b7)
b7=C.l1(D.Pr,k,0.85)
b7.toString
w=C.N()
w.r=B.aG.gq(0)
b9.ap(b7,5,w)
break
case"fuse":j=C.bM(D.aGr,D.aG8)
b7=C.N()
b7.r=B.fS.j(0.25).gq(0)
b9.b6(j,b7)
b7=C.N()
b7.b=B.ad
b7.c=1.4
b7.r=B.aA.gq(0)
b9.b6(j,b7)
if(!u){b7=C.N()
b7.c=1.6
b7.r=C.ap(B.c9,B.d3,c0.cx).gq(0)
b9.bQ(D.aBi,D.aB2,b7)}else{b7=C.N()
b7.c=1.6
b7.r=B.c1.gq(0)
b9.bQ(D.aBi,D.dMa,b7)
b7=C.N()
b7.c=1.6
b7.r=B.c1.gq(0)
b9.bQ(D.dKG,D.aB2,b7)
b7=C.N()
b7.r=B.dx.gq(0)
b9.ap(B.J,6,b7)}for(b7=b9.a,i=0;i<2;++i){h=C.dh(new C.v(D.cTQ[i]*22,0),20,9)
w=C.bM(h,B.iN)
q=b1.Nm(h,B.dD,B.nQ,!0).L()
b7.drawRRect(C.fA(w),q)
q.delete()}break
case"pot":b7=C.N()
b7.sar(D.dT3.az(0,C.bV(B.J,21)))
b9.ap(B.J,21,b7)
for(b7=b9.a,m=0;m<=10;++m){g=2.356194490192345+m*3.141592653589793*1.5/10
w=Math.cos(g)
v=Math.sin(g)
n=Math.cos(g)
l=Math.sin(g)
f=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
f.r=B.aA.gq(0)
f.c=1.2
q=f.L()
b7.drawLine.apply(b7,[w*18,v*18,n*22,l*22,q])
q.delete()}b7=C.N()
b7.sar(D.dSR.az(0,C.bV(B.J,13)))
b9.ap(B.J,13,b7)
e=2.356194490192345+c0.f*3.141592653589793*1.5
b7=Math.cos(e)
w=Math.sin(e)
v=Math.cos(e)
n=Math.sin(e)
l=C.N()
l.r=B.aM.gq(0)
l.c=3
l.d=B.bV
b9.bQ(new C.v(b7*3,w*3),new C.v(v*12,n*12),l)
break
case"resistor":d=C.bM(D.aGr,D.aG8)
b7=C.N()
b7.sar(D.bIh.az(0,new C.ae(d.a,d.b,d.c,d.d)))
b9.b6(d,b7)
b7=x.O
a0=C.E([47,C.a([C.aY(b3),C.aY(b4),B.x],b7),100,C.a([C.aY(b5),B.x,C.aY(b5)],b7),220,C.a([C.aY(b6),C.aY(b6),C.aY(b5)],b7),470,C.a([C.aY(b3),C.aY(b4),C.aY(b5)],b7),1000,C.a([C.aY(b5),B.x,C.aY(b6)],b7)],x.i,x.bF)
a1=a0.h(0,c0.r)
if(a1==null){b7=a0.h(0,100)
b7.toString
a1=b7}for(b7=b9.a,r=0;r<3;++r){w=-14+r*9
v=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
v.r=a1[r].gq(0)
q=v.L()
b7.drawRect(C.cr(new C.ae(w,-9,w+4.5,9)),q)
q.delete()}b7=C.N()
b7.r=B.aM.gq(0)
b9.bi(D.ekJ,b7)
b7=c0.r
b1.pA(b9,b7>=1000?"1k\u03a9":""+B.k.U(b7)+"\u03a9",D.dLI,B.al,10)
break
case"bulb":w=c0.cx
if(w>0){v=C.N()
v.r=B.fP.j(0.55*w).gq(0)
v.z=B.AW
b9.ap(D.v3,34,v)}p=C.dh(D.dJG,12,18)
b9.b6(C.bM(p,B.iN),b1.Nm(p,B.bv,B.em,!0))
for(w=b9.a,r=0;r<3;++r){v=13+r*3.5
n=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
n.r=B.ds.gq(0)
n.c=1
q=n.L()
w.drawLine.apply(w,[-9,v,9,v,q])
q.delete()}w=C.N()
if(u)v=B.Ti
else{v=C.ap(B.em,B.hJ,c0.cx)
n=c0.cx
v=v.j(0.25+0.7*n)}if(u)n=B.D2
else{n=C.ap(B.fc,B.fP,c0.cx)
n.toString}w.sar(new C.bR(B.tQ,0.5,B.w,b2,0,C.a([v,n.j(0.18+0.5*c0.cx)],x.O),b2,b2).az(0,C.bV(B.to,17)))
b9.ap(B.to,17,w)
w=C.N()
w.b=B.ad
w.c=1.4
w.r=B.c.j(0.6).gq(0)
b9.ap(B.to,17,w)
b7=b7.r
w=x.v
n=new C.aS(b7,B.as,b2,b2,C.a([],w))
n.G(new C.bc(-9,-12))
n.G(new C.d_(-12,-4,-9,0))
v=C.N()
v.b=B.ad
v.c=2
v.r=B.c.j(0.45).gq(0)
b9.aU(n,v)
v=C.N()
v.r=B.cT.gq(0)
v.c=1.4
b9.bQ(D.dM6,D.dM8,v)
v=C.N()
v.r=B.cT.gq(0)
v.c=1.4
b9.bQ(D.dKz,D.dKC,v)
w=C.a([],w)
a2=new C.aS(b7,B.as,b2,b2,w)
a2.G(new C.bc(-4,-2))
for(m=0;m<6;m=a3){a3=m+1
b7=(m&1)===0?-6:1
b7=new C.ar(-4+a3*8/6,-2+b7)
w.push(b7)
v=a2.f
if(v!=null)b7.bC(v)
b7=a2.e
if(b7!=null)b7.a.delete()
a2.e=null}$.a0()
b7=C.N()
b7.b=B.ad
b7.c=1.8
if(u)w=B.aV
else{w=C.ap(B.fc,D.b2W,c0.cx)
w.toString}b7.r=w.gq(0)
b9.aU(a2,b7)
break
case"led":w=c0.cx
if(w>0){v=C.N()
v.r=B.aG.j(0.6*w).gq(0)
v.z=D.d4N
b9.ap(B.to,30,v)}w=C.N()
w.r=B.em.gq(0)
w.c=2.4
b9.bQ(D.dMc,D.dMb,w)
w=C.N()
w.r=B.em.gq(0)
w.c=2.4
b9.bQ(D.dKI,D.dKH,w)
b7=b7.r
w=x.v
a4=new C.aS(b7,B.as,b2,b2,C.a([],w))
a4.G(new C.bc(-12,8))
a4.G(new C.ar(-12,-6))
a4.G(new C.d_(0,-26,12,-6))
a4.G(new C.ar(12,8))
a4.G(new C.bL())
v=C.N()
if(u)n=B.Jk
else{n=C.ap(B.f6,D.a9C,c0.cx)
n.toString}if(u)l=B.k_
else{l=C.ap(B.kp,B.aG,c0.cx)
l.toString}v.sar(new C.a7(B.ax,B.aC,B.w,C.a([n,l],x.O),b2,b2).az(0,D.ek6))
b9.aU(a4,v)
v=C.N()
v.b=B.ad
v.c=1.2
v.r=B.j_.gq(0)
b9.aU(a4,v)
v=C.N()
v.r=B.eY.gq(0)
b9.bi(D.eka,v)
w=new C.aS(b7,B.as,b2,b2,C.a([],w))
w.G(new C.bc(-7,-4))
w.G(new C.d_(-6,-12,0,-15))
b7=C.N()
b7.b=B.ad
b7.c=2
b7.r=B.c.j(0.5).gq(0)
b9.aU(w,b7)
break
case"motor":a5=new C.ae(-28,-14,20,14)
b9.b6(C.bM(a5,B.hB),b1.asL(a5,B.ak,B.aJ))
b7=C.N()
b7.r=B.d_.gq(0)
b9.bi(D.ejW,b7)
b7=C.N()
b7.r=B.cq.gq(0)
b9.bi(D.ejX,b7)
b7=b9.a
J.bN(b7.save())
b7.translate(31,0)
for(m=0;m<3;++m){J.bN(b7.save())
b7.rotate((c0.y+m*2.094)*180/3.141592653589793,0,0)
w=C.dh(D.dJT,15,7)
v=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
v.r=B.d3.j(0.9).gq(0)
q=v.L()
b7.drawOval(C.cr(w),q)
q.delete()
b7.restore()}w=C.N()
w.r=B.aH.gq(0)
b9.ap(B.J,3,w)
b7.restore()
b1.pA(b9,"M",D.dLS,B.aH,14)
break
case"buzzer":a6=C.dh(B.J,42,42)
b7=C.N()
b7.sar(D.dT7.az(0,a6))
b9.jQ(a6,b7)
b7=C.N()
b7.r=B.x.gq(0)
b9.ap(B.J,6,b7)
b7=C.N()
b7.b=B.ad
b7.c=1.4
b7.r=B.bf.gq(0)
b9.ap(B.J,6,b7)
b1.pA(b9,"+",D.dLP,B.al,12)
for(b7=b9.a,w=b1.b,m=1;m<=3;++m){v=c0.cx
n=v>0?B.k.K(w.d*14,5):0
n=C.bV(B.J,24+m*5+n)
l=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
l.b=B.ad
l.c=2
l.r=B.c8.j(v*(1-m*0.22)).gq(0)
q=l.L()
b7.drawArc.apply(b7,[C.cr(n),-40.10704565915762,80.21409131831524,!1,q])
q.delete()}break
case"heater":p=C.bM(D.ekq,B.hB)
w=C.N()
w.sar(D.bG4.az(0,new C.ae(p.a,p.b,p.c,p.d)))
b9.b6(p,w)
w=C.a([],x.v)
a7=new C.aS(b7.r,B.as,b2,b2,w)
a7.G(new C.bc(-24,0))
for(m=0;m<8;m=a3){b7=(m&1)===0?-10:10
a3=m+1
b7=new C.d_(-24+m*6+3,b7,-24+a3*6,0)
w.push(b7)
v=a7.f
if(v!=null)b7.bC(v)
b7=a7.e
if(b7!=null)b7.a.delete()
a7.e=null}b7=c0.cx
if(b7>0.1){$.a0()
w=C.N()
w.b=B.ad
w.c=10
w.r=D.b3w.j(0.5*b7).gq(0)
w.z=B.ji
b9.aU(a7,w)}$.a0()
b7=C.N()
b7.b=B.ad
b7.c=3.2
b7.d=B.bV
b7.r=C.ap(B.lj,F.aaB,c0.cx).gq(0)
b9.aU(a7,b7)
break
case"capacitor":a5=new C.ae(-16,-22,16,18)
b7=C.bM(a5,B.hB)
w=C.N()
w.sar(D.bF0.az(0,a5))
b9.b6(b7,w)
w=C.N()
w.r=B.c9.gq(0)
b9.bi(D.ekd,w)
for(r=0;r<4;++r){a8=new C.lO(new C.es("\u2212",b2,b2,B.cU,b2,b2,b2,b2,b2,b2,new C.F(!0,B.aH,b2,b2,b2,b2,11,B.u,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2)),B.a6,B.cn,new C.k3(1),b2,b2,b2,b2,B.cm,b2)
a8.fq()
a8.a6(b9,new C.v(-14,-18+r*9))}a9=new C.ae(-16,-24,16,-17)
b9.b6(C.bM(a9,B.iN),b1.bWo(a9,!1))
b7=38*c0.cx
w=18-b7
$.a0()
v=C.N()
v.r=B.bm.j(0.5).gq(0)
b9.bi(new C.ae(-3,w,11,w+b7),v)
b1.pA(b9,"1F",D.v3,B.c,11)
break
case"radio":d=C.bM(D.a2z,B.fY)
b7=C.N()
b7.sar(D.bIw.az(0,new C.ae(d.a,d.b,d.c,d.d)))
b9.b6(d,b7)
b7=C.N()
b7.b=B.ad
b7.c=1.4
b7.r=B.nQ.j(0.6).gq(0)
b9.b6(d,b7)
b7=C.bM(D.ekr,B.j6)
w=C.N()
w.r=B.dw.gq(0)
b9.b6(b7,w)
for(b7=b9.a,r=0;r<6;++r){w=-10+r*4.4
v=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
v.r=B.lj.gq(0)
v.c=1.4
q=v.L()
b7.drawLine.apply(b7,[-27,w,-3,w,q])
q.delete()}w=C.N()
w.r=(c0.cx>0?B.hg:B.n9).gq(0)
b9.bi(D.ejZ,w)
if(c0.cx>0){w=8+B.k.K(b1.b.d*7,18)
v=C.N()
v.r=B.bS.gq(0)
v.c=1.6
b9.bQ(new C.v(w,-13),new C.v(w,-3),v)}w=C.N()
w.sar(D.aG3.az(0,C.bV(D.aAY,6)))
b9.ap(D.aAY,6,w)
w=C.N()
w.r=B.nQ.gq(0)
b9.ap(D.dKc,4,w)
w=C.N()
w.r=B.em.gq(0)
w.c=1.8
b9.bQ(D.dKa,D.aB7,w)
if(c0.cx>0)for(w=b1.b,m=1;m<=2;++m){v=C.bV(D.aB7,4+m*5+B.k.K(w.d*8,5))
n=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
n.b=B.ad
n.c=1.4
n.r=B.nU.j(0.7).gq(0)
q=n.L()
b7.drawArc.apply(b7,[C.cr(v),-137.50987083139756,91.67324722093173,!1,q])
q.delete()}break
case"tv":w=C.bM(D.eky,B.hB)
v=C.N()
v.r=K.w9.gq(0)
b9.b6(w,v)
b0=C.bM(D.ekv,B.iN)
if(c0.cx>0&&!c0.x){b7=b9.a
J.bN(b7.save())
b7.clipRRect(C.fA(b0),$.BP(),!0)
b7.translate(-33,-21)
A.h4e(b9,D.epu,c0.at,b1.b.d,c0.ax)
b7.restore()
b7=C.N()
b7.r=B.bm.gq(0)
b9.ap(D.dKo,1.6,b7)}else{w=C.N()
w.r=D.aaF.gq(0)
b9.b6(b0,w)
b7=new C.aS(b7.r,B.as,b2,b2,C.a([],x.v))
b7.G(new C.bc(-33,-21))
b7.G(new C.ar(-10,-21))
b7.G(new C.ar(-33,0))
b7.G(new C.bL())
w=C.N()
w.r=B.c.j(0.05).gq(0)
b9.aU(b7,w)}b7=C.N()
b7.r=B.bx.gq(0)
b9.bi(D.ek9,b7)
break}A.hOv(b9,c0,b1.b.d,b1.gc_6())
if(u)b1.pA(b9,"\u2716",D.dMe,B.aG,14)},
bw8(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.ae(-28,-13,28,13)
d.b6(C.bM(w,B.tv),m.asL(w,B.fc,B.ig))
v=new C.ae(-22,-13,22,13)
$.a0()
u=C.N()
u.sar(D.ajm.az(0,v))
d.bi(v,u)
u=C.N()
u.r=B.e2.gq(0)
d.bi(D.ekm,u)
t=new C.ae(28,-5,34,5)
d.b6(C.bM(t,B.fX),m.Nm(t,B.fc,B.iV,!0))
m.pA(d,"+",D.dK_,B.aM,11)
m.pA(d,"\u2212",D.dLU,B.al,11)
m.pA(d,C.t(l===B.k.kk(l)?B.k.U(l):l)+"V",D.dLM,B.aM,13)
if(l===1.5){u=C.N()
u.r=B.bG.gq(0)
d.bi(D.ekk,u)
u=e.as
s=C.N()
s.r=C.ap(B.aG,B.bm,u).gq(0)
d.bi(new C.ae(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.pA(d,"FLAT",D.dLH,B.cL,9)}if(l>2){u=C.N()
u.r=B.bf.gq(0)
u.c=1
d.bQ(D.dJN,D.dJF,u)
m.pA(d,l>3?"3 cells":"2 cells",D.dLL,B.aA,8)}}else if(l<=9){r=new C.ae(-22,-17,22,17)
u=C.bM(r,B.tv)
$.a0()
s=C.N()
s.sar(D.bI6.az(0,r))
d.b6(u,s)
s=C.N()
s.r=B.dk.gq(0)
d.bi(D.ekn,s)
for(u=d.a,q=0;q<2;++q){p=D.cTW[q]
s=p<0?5:3.6
o=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
o.sar(D.aG2.az(0,C.bV(new C.v(p,-18),5)))
n=o.L()
u.drawCircle(p,-18,s,n)
n.delete()}m.pA(d,"9V",D.dLJ,B.c,16)}else{r=new C.ae(-34,-16,34,16)
u=C.bM(r,B.j6)
$.a0()
s=C.N()
s.sar(D.ajm.az(0,r))
d.b6(u,s)
s=C.N()
s.r=B.cS.gq(0)
d.bi(D.ekx,s)
for(u=d.a,q=0;q<2;++q){s=C.bM(C.dh(new C.v(D.cTT[q],-20),8,10),B.fX)
o=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
o.r=B.cq.gq(0)
n=o.L()
u.drawRRect(C.fA(s),n)
n.delete()}m.pA(d,"+",D.dK5,B.aG,10)
m.pA(d,"12V",D.dLK,B.aH,15)}},
aq(d){return!0}}
A.nk.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
B.d.a7(k)
B.d.a7(d.b)
w=C.S(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new A.vi(o,r,q,p)
n.aI2(o,r,q,p)
k.push(n)
J.ic(s[4],new A.cfr(n))
w.m(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.K)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.azH(m,u[1],l,u[3])}}}
A.ag9.prototype={
S(){var w=x.N
return new A.aga(B.J,B.at,C.S(w,x.gl),C.aZ(w),$,B.bu,0,C.a([],x.X),null,null)}}
A.aga.prototype={
atu(d){var w=this,v=w.as
if(v!=null)v.a9(0)
w.n(new A.bCH(w,d))
w.as=C.cN(B.nl,new A.bCI(w))},
p(){var w=this.as
if(w!=null)w.a9(0)
this.bmf()},
YD(d,e){return this.c6w(d,e)},
aWh(d){return this.YD(d,!1)},
c6w(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$YD=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?B.qc:B.Dz
w=3
return C.b(A.hQ9(s,r,d.ax<3.2,q),$async$YD)
case 3:p=g
t.ay=!1
if(p!=null)d.at=p
case 1:return C.h(u,v)}})
return C.i($async$YD,v)},
csh(d){var w=this,v=new C.P(Date.now(),0,!1),u=w.at.ce(0,d.a,new A.bCJ()),t=J.cA(u)
t.H(u,v)
t.bm(u,new A.bCK(v))
if(t.gI(u)<3)return
t.a7(u)
if(w.a.c.a46(d))w.aWh(d)
else{t=w.a.c.b7w(d)
w.atu(t==null?"The TV is off. Give it power first.":t)}},
Z(){var w=this
w.a0()
w.a.c.e=new A.bCZ(w)
w.kL()},
l3(d){var w,v,u,t,s,r=this,q="tri",p="noise"
r.a.c.a5e(0,d)
for(w=r.a.c.a,v=w.length,u=r.ax,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(s.b!=="tv")continue
if(s.cx>0&&!s.x){r.a.toString
if(!u.t(0,s.a)&&!r.ay){u.H(0,s.a)
r.YD(s,!0)}}else u.W(0,s.a)}if((r.z+=d)>0.16){r.z=0
for(w=r.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.cx
if(u>0.2)A.dL(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.cx
if(u>0.08)A.dL(60+u*55,"",130,0,0.12,q)
break
case"heater":if(s.cx>0.2)u=B.cA.ae()<0.5
else u=!1
if(u)A.dL(2400,"",25,0,0.12*s.cx,p)
break
case"radio":if(s.cx>0){A.dL(900+B.cA.aB(800),"",90,0,0.1,p)
if(B.cA.ae()<0.35)A.dL(300+B.cA.aB(6)*70,"",150,0,0.12,q)}break
case"tv":if(s.cx>0)u=B.cA.ae()<0.4
else u=!1
if(u)A.dL(3000,"",40,0,0.07,p)
break
case"speaker":if(s.cx>0)A.dL(330+B.o.K(110*B.k.bJ(r.a.c.d*3),4),"",140,0,0.14,q)
break
case"siren":if(s.cx>0)A.dL((B.k.bJ(r.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.cx
if(u>0.1)A.dL(90+u*40,"",140,0,0.04,p)
break
case"toycar":u=s.cx
if(u>0.1)A.dL(70+u*60,"",130,0,0.1,q)
break
case"kettle":if(s.cx>0)u=B.cA.ae()<0.5
else u=!1
if(u)A.dL(1200,"",30,0,0.07,p)
break
case"turbine":u=s.f
if(u>0.1)A.dL(80,"",150,0,0.05*u,p)
break
case"crank":u=s.f
if(u>0.15)A.dL(110+u*140,"",70,0,0.08,"saw")
break}}}w=r.a.w
if(w!=null)w.$0()
r.n(new A.bD_())},
b20(d){var w,v,u,t,s,r,q,p,o,n,m,l,k
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
for(o=0;o<2;++o){n=this.y
m=p.c
l=o===0?-42:42
l=m*n.a+l-u
n=p.d*n.b-t
k=Math.sqrt(l*l+n*n)
if(k<r){s=new C.A(p,o)
r=k}}}return s},
aWY(d){var w,v,u,t,s,r,q,p
for(w=this.a.c.a,v=C.U(w).k("dx<1>"),w=new C.dx(w,v),w=new C.bU(w,w.gI(0),v.k("bU<ai.E>")),u=d.a,v=v.k("ai.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
if(Math.abs(u-r*q.a)<36&&Math.abs(t-p*q.b)<26)return s}return null},
cuE(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
h=A.h57(new C.v(k,o),new C.v(i,n),p)
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
abd(){this.a.toString
this.n(new A.bCo())},
bj3(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cHL[v]
if(!B.d.bf(p.a.c.a,new A.bD0(u,w))){o=new C.v(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?E.Gr:o
s=s?E.Gr:o
q=t.agS(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.m(0,q.a,0)
p.d=q
p.e=null
A.dL(1200,"",50,0,0.3,"tri")
p.abd()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<29;++v)w.push(D.N6[v].a)
u=w.length
t=u>8
s=t?B.d.dt(w,0,B.o.aj(u+1,2)):B.U
r=t?B.d.fO(w,B.o.aj(w.length+1,2)):w
q=n.a.d
if(q!=null){w=C.a2(q).k("cu<1>")
w=C.z(new C.cu(q,w),w.k("G.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,C.K)(w),++v){p=w[v]
o=q.h(0,p)
q.m(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=C.a([],x.p)
u=n.a.f
if(u!=null)w.push(u)
n.a.toString
if(t)w.push(n.aWN(s,!0))
w.push(C.D(C.cj(new A.bCY(n,q,m)),1))
n.a.toString
w.push(n.c7X(r))
return C.u(w,B.m,null,B.e,B.j,0,B.p)},
aWN(d,e){var w,v,u,t,s,r,q,p=null,o=e?B.W:new C.ay(B.c.j(0.08),1,B.r,-1),n=e?new C.ay(B.c.j(0.08),1,B.r,-1):B.W,m=x.p,l=C.a([],m)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.K)(d),++v){u=d[v]
t=$.Fm()
s=t.h(0,u).d.j(0.14)
r=new C.b3(14,14)
q=new C.ay(t.h(0,u).d.j(0.5),1,B.r,-1)
l.push(C.aJ(p,C.p(p,C.u(C.a([new C.w(t.h(0,u).c,p,B.R9,p,p,p,p,p,p,p,p,p),B.tB,new C.w(t.h(0,u).b,p,B.mT,p,p,p,p,B.a2,p,1,p,p)],m),B.m,p,B.b6,B.j,0,B.p),B.h,p,p,new C.o(s,p,new C.c2(q,q,q,q),new C.bv(r,r,r,r),p,p,B.n),p,p,p,B.k0,p,p,p,66),B.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.bCp(this,u),p,p,p,p,p,p,!1,B.ae))}return C.p(p,C.cL(l,p,B.fx,p,p,B.aZ,!1),B.h,p,p,new C.o(D.TP,p,new C.c2(o,B.W,n,B.W),p,p,p,B.n),p,66,p,p,p,p,p,p)},
c7X(d){return this.aWN(d,!1)},
aUq(d){var w=null,v=C.m(18)
return C.p(w,d,B.h,w,w,new C.o(D.aZ6,w,C.H(B.bG,B.r,1),v,w,w,B.n),w,w,w,w,D.bfN,w,w,w)},
c8w(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.Fm().h(0,o),m=d.ch,l=d.CW,k=new A.bCD(q,n),j=C.d(n.c,p,p,p,p,p,p,B.QT,p,p,p),i=n.b,h=n.d,g=x.p
i=C.B(C.a([j,B.aa,C.D(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aF(p,p,p,p,D.bxr,p,p,p,new A.bCu(q,d),p,p,p,p,"Remove part",B.c6),C.aF(p,p,p,p,B.Ly,p,p,p,new A.bCv(q),p,p,p,p,p,B.c6)],g),B.m,p,B.e,B.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,D.R7,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.eFv,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+B.k.aa(Math.abs(d.ch),2)+" volts  \xb7  "+B.k.aa(Math.abs(d.CW)*1000,0)+" milliamps  \xb7  "+B.k.aa(Math.abs(m*l),2)+" watts"
m=C.a([i,j,B.av,w,B.ar,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?B.cL:B.aM,p,p,p,p,p,p,p,p,12.5,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.b7w(d)
if(v!=null){l=(d.x?B.aG:B.aX).j(0.14)
j=C.m(10)
i=C.H((d.x?B.aG:B.aX).j(0.5),B.r,1)
m.push(new C.C(B.il,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.eLH,p,p,p),B.h,p,p,new C.o(l,p,i,j,p,p,B.n),p,p,p,p,B.ch,p,p,p),p))}if(o==="tv"){l=C.a([],g)
for(u=0;u<6;u=t){t=u+1
l.push(new A.dy("CH "+t,d.at===u,new A.bCw(q,d,u),p,h,p))}l=C.c8(B.bH,l,B.bw,4,6)
l=C.a([B.ar,l,B.av,C.d(q.a.c.a46(d)?"Showing: "+D.Ns[B.o.K(d.at,6)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,B.hV,p,p,p)],g)
if(q.a.c.a46(d))l.push(new A.fe(B.Er,"Open big screen",new A.bCx(q,d),h,p))
B.d.v(m,l)}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=B.k.U(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.C(B.il,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.eAz,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.cNN[s]
j=r===1.5?"1.5 V (rechargeable)":C.t(r)+" V"
l.push(new A.dy(j,d.e===r,new A.bCy(q,d,r),p,h,p))}m.push(C.c8(B.bH,l,B.bw,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cFq[s]
j=r>=1000?"1 k\u03a9":""+B.o.U(r)+" \u03a9"
l.push(new A.dy(j,d.r===r,new A.bCz(q,d,r),p,h,p))}m.push(C.c8(B.bH,l,B.bw,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new A.bCA(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new A.bCB(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new A.bCC(d)))
if(o==="crank")m.push(D.eYk)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,B.hV,p,p,p))
return q.aUq(new C.d1(D.aR9,C.ch(C.u(m,B.F,p,B.e,B.R,0,B.p),B.q,p,B.z,p,p,p,p,B.ai),p))}}
A.b7c.prototype={}
A.T5.prototype={
S(){return new A.aAj(A.fzg(),new C.cn(null,x.gJ),C.aZ(x.S))}}
A.aAj.prototype={
c_8(){var w,v=this
if(++v.w%10===0){w=v.f
$.bA0()
w=w>=9}else w=!0
if(w)return
w=v.r
if(!w.t(0,v.f)&&$.bA0()[v.f].c.$1(v.d)){w.H(0,v.f)
A.Aw("bell",C.a([0,4,7,12],x.t),700,0.45)
v.n(new A.dJx())}},
adN(){var w=0,v=C.j(x.H),u=this,t
var $async$adN=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.cf(null,null,!0,null,new A.dJw(u),t,null,!0,!0,x.H),$async$adN)
case 2:return C.h(null,v)}})
return C.i($async$adN,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.f,o=$.bA0(),n=p<9?o[p]:q
o=n==null
w=!o
v=w&&r.r.t(0,p)
p=(v?B.bm:B.b2).j(0.12)
u=C.m(16)
t=C.H((v?B.bm:B.b2).j(0.4),B.r,1)
if(o)o=D.eYl
else{o=v?"\u2705":"\ud83c\udfaf"
o=C.d(o+" Challenge "+(r.f+1)+": "+n.a,q,q,q,q,q,q,T.Hf,q,q,q)
o=C.u(C.a([o,C.d(v?"Well done!":n.b,q,2,B.a2,q,q,q,D.eAx,q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p)}s=x.p
o=C.a([C.D(o,1)],s)
if(w)o.push(C.bG(!1,C.d(v?"Next":"Skip",q,q,q,q,q,q,q,q,q,q),q,q,!0,q,q,new A.dJz(r,v),q,q))
p=A.fLA(r.d,C.p(q,C.B(o,B.m,q,B.e,B.j,0,q,q),B.h,q,q,new C.o(p,q,t,u,q,q,B.n),q,q,q,D.acj,B.acA,q,q,q),r.e,r.gc_7(),q)
return A.jf(B.b2,C.a([C.aF(q,q,q,q,D.bux,q,q,q,r.gceh(),q,q,q,q,"Ready-made circuits",q),C.aF(q,q,q,q,D.bB5,q,q,q,new A.dJA(r),q,q,q,q,"Repair burnt parts",q),C.aF(q,q,q,q,D.btz,q,q,q,new A.dJB(r),q,q,q,q,"Clear the board",q)],s),"Build real circuits.\n\n1. Tap a part at the bottom to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nLots of tools: one row above the board and one below it. A TV needs 6+ volts and shows NGMY animations: tap it 3 times quickly for the big screen. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, loop not finished...).\n\nTry the challenges at the top, or open Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired.",p,"ELECTRONICS LAB",q)}}
A.auO.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.auP.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bme()}}
A.ru.prototype={}
A.Hg.prototype={}
A.Un.prototype={
S(){return new A.aBz(null,null)}}
A.aBz.prototype={
ga6I(){var w,v=this,u=v.d
if(u===$){w=C.bi(null,B.o4,null,1,null,v)
w.cn(0)
v.d!==$&&C.bH()
v.d=w
u=w}return u},
gC8(){var w=this.e
return w===$?this.e=this.a.c:w},
Z(){var w=this
w.a0()
w.f=C.cN(w.a.e,w.gaUr())
w.ary()
A.dL(520,"",80,0,0.25,"tri")},
ary(){var w=this.x
if(w!=null)w.a9(0)
this.x=C.cN(B.S,new A.eqa(this))},
c_9(){var w=this.c
if(w!=null&&C.a8(w,!1).oO()){w=this.c
w.toString
C.a8(w,!1).M(this.gC8())}},
aUs(d){this.n(new A.eq8(this,d))
A.dL(900,"",40,0,0.3,"noise")
this.ary()},
p(){var w=this,v=w.f
if(v!=null)v.a9(0)
v=w.x
if(v!=null)v.a9(0)
w.ga6I().p()
w.bqi()},
B(d){var w,v,u,t,s=this,r=null,q=C.m(10),p=C.H(B.d_,B.r,6),o=C.a([new C.aa(0,B.G,B.b2.j(0.25),B.J,40)],x.V)
o=C.at(new C.fI(1.7777777777777777,C.p(r,C.bu(C.m(4),C.c4(s.ga6I(),new A.eqc(s),r),B.ap),B.h,r,r,new C.o(r,r,p,q,o,r,B.n),r,r,r,r,r,r,r,r),r),r,r,r)
q=s.w
p=q?1:0
w=s.atv(B.ct,"Back to the board",s.gaUr())
v=C.m(20)
u=x.p
v=C.B(C.a([w,B.b7,C.p(r,C.d("NGMY TV \xb7 CH "+(s.gC8()+1),r,r,r,r,r,r,K.a3W,r,r,r),B.h,r,r,new C.o(B.aV,r,r,v,r,r,B.n),r,r,r,r,B.lW,r,r,r)],u),B.m,r,B.e,B.j,0,r,r)
w=B.x.j(0.65)
t=C.m(18)
return C.cd(r,B.x,C.br(!0,C.aJ(B.c3,new C.am(B.V,r,B.aY,B.q,C.a([o,C.BX(C.e1(C.u(C.a([new C.C(B.bQ,v,r),B.b7,C.p(r,C.B(C.a([s.atv(D.agW,"Previous channel",new A.eqd(s)),C.D(C.u(C.a([C.d(D.Ns[s.gC8()].a,r,r,r,r,r,r,B.j7,B.L,r,r),C.d(D.Ns[s.gC8()].b,r,r,r,r,r,r,O.aJR,B.L,r,r)],u),B.m,r,B.e,B.R,0,B.p),1),s.atv(D.agV,"Next channel",new A.eqe(s))],u),B.m,r,B.e,B.j,0,r,r),B.h,r,r,new C.o(w,r,r,t,r,r,B.n),r,r,r,B.bk,B.bQ,r,r,r)],u),B.m,r,B.e,B.j,0,B.p),!q,r),B.b8,B.i0,p)],u),r),B.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.eqf(s),r,r,r,r,r,r,!1,B.ae),!0,!1,B.ah,!0,!0),r,!1,!1,r,r)},
atv(d,e,f){var w=null,v=C.nM(w,B.aV,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return C.aF(w,w,w,w,C.V(d,B.c,w,w,w,w),w,w,w,f,w,w,w,v,e,w)}}
A.bqB.prototype={
a6(d,e){return A.h4e(d,e,this.b,this.c,this.d)},
aq(d){return!0}}
A.aJj.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.aT8.prototype={}
A.TB.prototype={
S(){return new A.bgg(C.S(x.S,x.N),B.at,C.a([],x.T),$,B.bu,0,C.a([],x.X),null,null)}}
A.bgg.prototype={
guF(){var w=this.f
return w===$?this.f=A.fHc(0):w},
Z(){this.a0()
this.kL()
A.yu("laser_maze").bw(new A.dYx(this),x.P)},
l3(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.A(u.a,t)
if(t>0.8)B.d.cu(w,v)}this.n(new A.dYy())},
abf(d){var w=this
w.n(new A.dYn(w,d))
A.v9("laser_maze",C.E(["best",w.e,"level",w.d],x.N,x.z))},
c_m(d){var w,v,u,t,s,r,q,p,o=this
if(o.x)return
w=o.y
v=w.ge8()/7
u=v*7
t=(w.a-u)/2
s=B.k.D((w.b-u)/2,8,300)
r=B.k.bJ((d.a-t)/v)
q=B.k.bJ((d.b-s)/v)
if(r<0||q<0||r>=7||q>=7)return
p=q*7+r
if(o.guF().b.t(0,p)||p===o.guF().e||o.guF().d.am(0,p))return
o.n(new A.dYo(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cj(new A.dYr(t,A.h52(t.guF(),t.r))),q=x.p,p=C.a([new A.dy("Clear mirrors",!1,new A.dYs(t),B.jI,B.aM,s),new A.dy("Skip",!1,new A.dYt(t),D.agV,B.b2,s)],q)
if(t.d>0)p.push(new A.dy("Back",!1,new A.dYu(t),D.agW,B.b2,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new A.dy(""+u,v===t.d,new A.dYv(t,v),s,B.aG,s))}return A.jf(B.aG,B.fV,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.u(C.a([new A.eE(p,s,s),new A.eE(w,"LEVEL",s)],q),B.m,s,B.e,B.R,0,B.p))}}
A.bdk.prototype={
a6(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.ge8()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=B.k.D((b0.b-a4)/2,8,300),a7=new A.d9D(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.bM(new C.ae(a5,a6,a8,a4),B.ka)
v=$.a0()
u=C.N()
u.r=K.w9.gq(0)
a9.b6(w,u)
for(w=a9.a,t=0;t<=7;++t){u=t*a3
s=a5+u
r=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
r.r=B.du.gq(0)
q=r.L()
w.drawLine.apply(w,[s,a6,s,a4,q])
q.delete()
u=a6+u
s=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
s.r=B.du.gq(0)
q=s.L()
w.drawLine.apply(w,[a5,u,a8,u,q])
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.ef(a8,a8.r,C.a2(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.bM(C.dh(p,u,u),B.fY)
o=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
o.sar(D.bIC.az(0,C.dh(p,a3,a3)))
q=o.L()
w.drawRRect(C.fA(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.aS(v.r,B.as,a2,a2,u)
n.G(new C.bc(a7.$1(B.d.gJ(a8)).a,a7.$1(B.d.gJ(a8)).b))
for(a8=C.dd(a8,1,a2,C.U(a8).c),v=a8.$ti,a8=new C.bU(a8,a8.gI(0),v.k("bU<ai.E>")),v=v.k("ai.E");a8.C();){s=a8.d
if(s==null)s=v.a(s)
s=new C.ar(a7.$1(s).a,a7.$1(s).b)
u.push(s)
r=n.f
if(r!=null)s.bC(r)
s=n.e
if(s!=null)s.a.delete()
n.e=null}$.a0()
a8=C.N()
a8.b=B.ad
a8.c=14
a8.e=B.fo
a8.r=B.aG.j(0.28+0.08*Math.sin(a1.f*12)).gq(0)
a8.z=B.m9
a9.aU(n,a8)
a8=C.N()
a8.b=B.ad
a8.c=4
a8.e=B.fo
a8.r=D.a9C.gq(0)
a9.aU(n,a8)
a8=C.N()
a8.b=B.ad
a8.c=1.6
a8.e=B.fo
a8.r=B.c.gq(0)
a9.aU(n,a8)}for(a8=a4.c,a8=C.ef(a8,a8.r,C.a2(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.t(0,m)
if(l){m=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
m.r=B.aM.j(0.5).gq(0)
m.z=B.AV
q=m.L()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
m.r=(l?B.aM:B.bx).gq(0)
q=m.L()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?B.c:B.aA
i=new C.lO(new C.es("\u2605",a2,a2,B.cU,a2,a2,a2,a2,a2,a2,new C.F(!0,j,a2,a2,a2,a2,v,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),B.a6,B.cn,new C.k3(1),a2,a2,a2,a2,B.cm,a2)
i.fq()
j=i.b
h=j.c
j=j.a.c
i.a6(a9,new C.v(m-h/2,k-j.gbg(j)/2))}g=new A.d9G(a7,a3,a9)
a1.c.bE(0,new A.d9E(g))
a4.d.bE(0,new A.d9F(g))
f=a7.$1(a4.e)
a4=C.bM(C.dh(f,o,a3*0.8),B.fY)
a8=C.N()
a8.r=B.aG.gq(0)
a9.b6(a4,a8)
v=f.an(0,new C.v(v,0))
a8=C.N()
a8.r=B.c.gq(0)
a9.ap(v,5,a8)
for(a4=a1.r,a8=a4.length,e=0;e<a4.length;a4.length===a8||(0,C.K)(a4),++e){d=a4[e]
a0=d.b/0.8
v=d.a
u=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
u.b=B.ad
s=1-a0
u.c=4*s
u.r=B.aM.j(s).gq(0)
q=u.L()
w.drawCircle(v.a,v.b,a3*(0.3+a0),q)
q.delete()}},
aq(d){return!0}}
A.TD.prototype={
S(){var w=x.n
return new A.aAX(B.cA,C.a([1,0.5,0],w),C.a([0,0,0],w),$,B.bu,0,C.a([],x.X),null,null)}}
A.aAX.prototype={
Z(){this.a0()
this.kL()
A.yu("light_mixer").bw(new A.dYQ(this),x.P)},
l3(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aUt()
w.n(new A.dYR())},
atx(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aB(5)/4)
u.e=t
if(B.d.e9(t,new A.dYB()))u.e[w.aB(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aUt(){var w,v,u=this
if(u.z!=="play")return
w=B.k.U(B.k.D(1-A.h0s(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
A.vc(v,B.o.aj(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
A.v9("light_mixer",C.E(["best",v],x.N,x.z))}}else u.z="result"},
gcpV(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.E(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.czq[B.o.K(B.k.U(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cj(new A.dYK(v,A.h0s(v.e,t))),r=t[0]
r=A.ho(B.aG,""+B.k.U(r*100)+"%","Red",1,0,new A.dYL(v),r)
w=t[1]
w=A.ho(B.br,""+B.k.U(w*100)+"%","Green",1,0,new A.dYM(v),w)
t=t[2]
return A.jf(B.bd,B.fV,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.u(C.a([r,w,A.ho(B.de,""+B.k.U(t*100)+"%","Blue",1,0,new A.dYN(v),t),new C.bF(B.a7,u,u,new A.fe(B.hl,"Lock it in",new A.dYO(v),B.bm,u),u)],x.p),B.m,u,B.e,B.R,0,B.p))}}
A.bdz.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.bM(new C.ae(0,0,n,m),B.pr)
$.a0()
w=C.N()
w.r=B.x.gq(0)
d.b6(l,w)
w=d.a
J.bN(w.save())
w.clipRRect(C.fA(C.bM(new C.ae(0,0,n,m),B.pr)),$.BP(),!0)
v=e.ge8()*0.3
u=e.ef(B.J)
l=-v*0.55
t=v*0.45
s=[u.an(0,new C.v(0,l)),u.an(0,new C.v(l,t)),u.an(0,new C.v(v*0.55,t))]
r=[B.CO,F.a8R,F.a9b]
d.kJ(new C.ae(0,0,n,m),C.N())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
p.a=B.n1
p.r=r[q].j(l[q]).gq(0)
o=p.L()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.bM(new C.ae(0,0,n,m),B.pr)
m=C.N()
m.b=B.ad
m.c=2
m.r=B.bf.gq(0)
d.b6(n,m)},
aq(d){return!0}}
A.aIO.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bt8.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpN()}}
A.aIP.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bt9.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpO()}}
A.bq_.prototype={}
A.a68.prototype={
B(d){var w=null
return C.cd(C.eA(w,w,w,!0,!0,D.a9K,w,1,!0,w,0,!1,w,!1,w,w,C.aF(w,w,w,w,D.ail,w,w,w,new A.cag(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.f7u,w,w,w,1,w,!0),D.a9K,C.cL(C.a([D.dNn,C.cj(new A.cah())],x.p),w,D.bgM,w,w,B.ai,!1),w,!1,!1,w,w)}}
A.Us.prototype={
S(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new A.aBL(w,new C.ao(B.aq,$.au()),$,B.bu,0,C.a([],x.X),null,null)}}
A.aBL.prototype={
Z(){this.a0()
this.kL()},
b_i(d){var w=this.d.length
return B.o.K(B.k.bJ(B.k.K(B.k.K(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
l3(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b_i(v.f)
if(w!==v.x){v.x=w
A.l0("bell",24+B.o.K(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.n(new A.eud(v))
A.Aw("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c0g(){if(this.d.length<2)return
this.n(new A.eu9(this))},
aUN(d){var w=this,v=B.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.n(new A.eu8(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc0f(),p=s.d,o=C.D(C.aJ(r,C.b1(r,r,r,new A.brl(p,s.f,r),B.ff),B.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,B.ae),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.u(C.a([o,new C.a3(r,40,C.at(C.d(n,r,r,r,r,r,r,D.eKg,r,r,r),r,r,r),r)],w),B.m,r,B.e,B.j,0,B.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.arG[B.o.K(v,8)].j(0.9)
t=new C.b3(20,20)
o.push(C.aJ(r,C.p(r,new C.w(p[v],r,D.eJx,r,r,r,r,r,r,r,r,r),B.h,r,r,new C.o(u,r,r,new C.bv(t,t,t,t),r,r,B.n),r,r,r,B.hi,B.h4,r,r,r),B.z,!1,r,r,r,r,r,r,r,new A.eub(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,B.ae))}p=B.c.j(0.07)
return A.jf(B.aM,B.fV,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.u(C.a([new A.eE(o,r,r),C.B(C.a([C.D(C.aK(r,B.U,!1,r,!0,B.q,r,C.aL(),s.e,r,r,r,r,r,2,C.bm(r,new C.b2(4,C.m(14),B.W),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,B.kg,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),B.z,!0,r,!0,r,!1,r,B.ag,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new A.euc(s),r,!1,r,r,!1,r,!0,r,B.a8,r,r,r,r,r,r,r,r,r,r,r,B.di,!0,B.a6,r,B.am,r,r,r,r),1),B.aa,new A.fe(B.hN,"Add",s.gc0d(s),B.c,r),B.bp,new A.fe(B.m_,"Spin",q,B.bm,r)],w),B.m,r,B.e,B.j,0,r,r)],w),B.m,r,B.e,B.R,0,B.p))}}
A.brl.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.v(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.a0()
w=C.N()
w.r=D.b0G.gq(0)
a1.ap(d,f,w)
w=C.N()
w.b=B.ad
w.c=3
w.r=B.aM.gq(0)
a1.ap(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=C.bV(d,a0)
n=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
n.r=D.arG[B.o.K(q,8)].gq(0)
m=n.L()
n=p*57.29577951308232
f.drawArc.apply(f,[C.cr(o),n,s,!0,m])
m.delete()
o=C.bV(d,a0)
l=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
l.b=B.ad
l.c=2
l.r=B.c.j(0.6).gq(0)
m=l.L()
f.drawArc.apply(f,[C.cr(o),n,s,!0,m])
m.delete()
J.bN(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=B.a.al(o,0,11)+"\u2026"
k=new C.lO(new C.es(o,i,i,B.cU,i,i,i,i,i,i,D.eyg),B.a6,B.cn,new C.k3(1),i,i,i,i,B.cm,i)
k.fq()
o=k.b
n=o.c
o=o.a.c
k.a6(a1,new C.v(a0-n-16,-o.gbg(o)/2))
f.restore()}f=C.N()
f.r=D.a9x.gq(0)
a1.ap(d,20,f)
f=C.N()
f.b=B.ad
f.c=3
f.r=B.aM.gq(0)
a1.ap(d,20,f)
j=new C.aS(h.r,B.as,i,i,C.a([],x.v))
e-=a0
j.G(new C.bc(g,e+26))
e-=10
j.G(new C.ar(g-14,e))
j.G(new C.ar(g+14,e))
j.G(new C.bL())
e=C.N()
e.r=B.c.gq(0)
a1.aU(j,e)
e=C.N()
e.b=B.ad
e.c=2
e.r=B.aV.gq(0)
a1.aU(j,e)},
aq(d){return!0}}
A.Tc.prototype={
S(){return new A.bfQ($,B.bu,0,C.a([],x.X),null,null)}}
A.bfQ.prototype={
Z(){this.a0()
this.kL()},
l3(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
A.Aw("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a2F(900,new A.dLx())}w.n(new A.dLy())},
aUP(d){return this.n(new A.dLs(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=B.a.aT(B.o.u(B.k.aj(m,60)),2,"0")
v=B.a.aT(B.o.u(B.o.K(B.k.dF(m),60)),2,"0")
m=C.b1(n,n,n,new A.bmg(l,B.cL,n),B.aHR)
u=C.d(w+":"+v,n,n,n,n,n,n,D.eCh,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.at(new C.a3(280,280,new C.am(B.A,n,B.a9,B.q,C.a([m,C.u(C.a([u,C.d(t,n,n,n,n,n,n,D.eBm,n,n,n),B.av,C.d("Sessions done: "+o.r,n,n,n,n,n,n,B.BO,n,n,n)],s),B.m,n,B.e,B.R,0,B.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.cQe[r]
u.push(new A.dy(""+q+" min",o.d===q,new A.dLu(o,q),n,B.cL,n))}m=o.f
p=m?V.x5:B.iJ
m=m?"Pause":"Start"
return A.jf(B.cL,B.fV,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.u(C.a([new A.eE(u,n,n),new A.eE(C.a([new A.fe(p,m,new A.dLv(o),B.bm,n),new A.fe(B.jI,"Reset",new A.dLw(o),B.c,n)],s),n,n)],s),B.m,n,B.e,B.R,0,B.p))}}
A.bmg.prototype={
a6(d,e){var w,v,u,t,s=e.ef(B.J),r=e.a/2-14
$.a0()
w=C.N()
w.b=B.ad
w.c=16
w.r=B.c.j(0.08).gq(0)
d.ap(s,r,w)
w=C.bV(s,r)
v=C.N()
v.b=B.ad
v.c=16
v.d=B.bV
u=this.c
t=C.ap(u,B.c,0.4)
t.toString
v.sar(new C.fQ(B.A,-1.5707963267948966,4.71238898038469,B.w,C.a([u,t,u],x.O),null,null).az(0,C.bV(s,r)))
d.fQ(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aq(d){return d.b!==this.b}}
A.Sq.prototype={
S(){return new A.bfv($,B.bu,0,C.a([],x.X),null,null)}}
A.bfv.prototype={
Z(){this.a0()
this.kL()},
l3(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Ov.h(0,p.d)
w.toString
v=B.d.ft(w,new A.dxv())
u=B.k.K(p.f,v)
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
A.l0("flute",D.bJb[t]+5,1400,0.35)}p.n(new A.dxw())},
gc0j(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.Iz("Press Start",0.5)
w=D.Ov.h(0,this.d)
w.toString
v=B.d.ft(w,new A.dxq())
u=B.k.K(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.Iz("Breathe in",0.5+0.5*B.dG.av(0,p))
case 1:return new C.Iz("Hold",1)
case 2:return new C.Iz("Breathe out",1-0.5*B.dG.av(0,p))
default:return new C.Iz("Hold",0.5)}}}return new C.Iz("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc0j(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=B.hs.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,B.h,q,q,new C.o(s,q,q,q,u===0?C.a([new C.aa(0,B.G,B.hs.j(0.35),B.J,40)],v):q,q,B.a5),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,B.BX,q,q,q))
n.push(C.an(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,B.kg,q,q,q),q,q,q,q,q,q))
n=C.at(new C.a3(300,340,new C.am(B.A,q,B.a9,B.q,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aV(D.Ov.geb(D.Ov));w.C();){v=w.gT(w)
o.push(new A.dy(v,r.d===v,new A.dxt(r,v),q,B.hs,q))}w=r.e
v=w?B.Y2:B.iJ
w=w?"Stop":"Start"
o.push(new A.fe(v,w,new A.dxu(r),B.bm,q))
return A.jf(B.hs,B.fV,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new A.eE(o,q,q))}}
A.aF6.prototype={}
A.T3.prototype={
S(){return new A.bfK(new C.cn(null,x.A),C.a([],x.au),B.aH,B.c)}}
A.bfK.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aF(s,s,s,s,D.m5,s,s,s,new A.dJ3(t,d),s,s,s,s,"Share",s)],r),p=C.bu(C.m(18),new C.en(C.aJ(s,C.b1(s,s,s,new A.bhL(t.e,t.x,s),B.ff),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.dJ4(t),new A.dJ5(t),s,s,s,s,s,s,s,s,s,new A.dJ6(t),s,s,s,s,!1,B.ae),t.d),B.ap),o=C.a([],r)
for(w=0;w<9;++w){v=D.cyR[w]
u=!t.w&&t.f.A(0,v)
o.push(new A.DV(v,u,new A.dJ7(t,v),!1,s))}u=t.r
return A.jf(B.bz,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.C(B.bQ,p,s),"DRAW PAD",C.u(C.a([new A.eE(o,s,s),A.ho(B.bz,""+B.k.U(u),"Brush",30,2,new A.dJ8(t),u),new A.eE(C.a([new A.dy("Eraser",t.w,new A.dJ9(t),B.L_,B.bz,s),new A.fe(B.uH,"Undo",new A.dJa(t),B.c,s),new A.fe(B.e4,"Clear",new A.dJb(t),B.c,s),new A.fe(B.La,"Paper",new A.dJc(t),B.c,s)],r),s,s)],r),B.m,s,B.e,B.R,0,B.p))}}
A.bhL.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.a0()
w=C.N()
w.r=this.c.gq(0)
d.bi(new C.ae(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=$.a0()
p=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
o=r.a
p.r=o.gq(o)
n=r.b
p.c=n
p.d=B.bV
p.e=B.fo
p.b=B.ad
m=r.c
if(m.length===1){q=B.d.gJ(m)
m=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
m.r=o.gq(o)
l=m.L()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=C.a([],t)
k=new C.aS(q.r,B.as,null,null,o)
o.push(new C.bc(B.d.gJ(m).a,B.d.gJ(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new C.d_(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.bC(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new C.ar(B.d.gai(m).a,B.d.gai(m).b)
o.push(q)
o=k.f
if(o!=null)q.bC(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.L()
q=k.e
u.drawPath((q==null?k.e=new C.cG(k.gbL().a.snapshot()):q).a,l)
l.delete()}}},
aq(d){return!0}}
A.TP.prototype={
S(){var w=x.S
return new A.aB6(C.aZ(w),C.aZ(w))}}
A.aB6.prototype={
Z(){this.a0()
this.aoZ()},
aoZ(){var w,v,u=this,t=x.N,s=C.bj(D.cUf,!0,t)
B.d.BG(s)
w=x.S
v=C.U(s).c
t=C.z(C.dd(s,0,C.dJ(u.d,"count",w),v),t)
B.d.v(t,C.dd(s,0,C.dJ(u.d,"count",w),v))
B.d.BG(t)
u.e=t
u.f.a7(0)
u.r.a7(0)
u.w=0
u.x=!1},
c0e(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
A.l0("bell",12+B.o.K(d,9),150,0.35)
s.n(new A.e2Y(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gJ(0)
u=w.gai(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bK(B.nj,new A.e2Z(s,v,u),t)
else{s.x=!0
C.bK(A3.DB,new A.e3_(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,B.aK4,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+B.o.aj(p,2)+" / "+o
o=x.p
p=C.u(C.a([new C.C(B.wx,C.B(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?B.aM:B.al,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),B.m,q,B.hx,B.j,0,q,q),q),C.D(C.ig(!0,q,q,B.z,new C.hH(v,8,8,1,q),new A.e33(r),r.e.length,B.bk,q,B.ai,!1),1)],o),B.m,q,B.e,B.j,0,B.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cAd[t]
o.push(new A.dy(s.b,r.d===s.a,new A.e34(r,s),q,B.b2,q))}o.push(new A.fe(D.brv,"New game",new A.e35(r),B.bm,q))
return A.jf(B.b2,B.fV,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new A.eE(o,q,q))}}
A.U0.prototype={
S(){return new A.aBp(C.a([],x.t))}}
A.aBp.prototype={
c0i(d){B.d.a7(this.d)
this.w=!0
this.aUO()},
aUO(){this.d.push(B.cA.aB(4))
this.e=0
this.XL()},
XL(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$XL=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.n(new A.ebs(t))
s=x.H
w=3
return C.b(C.bK(B.lm,null,s),$async$XL)
case 3:r=t.d,q=C.bj(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aOA(n)
w=7
return C.b(C.bK(new C.b7(1000*Math.max(280,600-r.length*18)),null,s),$async$XL)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.n(new A.ebt(t))
case 1:return C.h(u,v)}})
return C.i($async$XL,v)},
aOA(d){this.n(new A.ebq(this,d))
A.l0("marimba",D.ajU[d]+5,450,0.55)
C.bK(B.Dy,new A.ebr(this),x.H)},
c0k(d){var w,v,u=this
if(!u.w||u.r)return
u.aOA(d)
w=u.d
v=u.e
if(w[v]!==d){A.dL(90,"",600,0,0.5,"saw")
u.n(new A.ebu(u))
return}++v
u.e=v
if(v===w.length){u.n(new A.ebv(u))
C.bK(B.ik,new A.ebw(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,E.QY,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.eKE,B.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aqG[v]
u=u.j(q.f===v?1:0.35)
t=new C.b3(28,28)
s=q.f===v?C.a([new C.aa(0,B.G,D.aqG[v].j(0.8),B.J,30)],w):p
r=new C.ay(B.c.j(q.f===v?0.9:0.15),2,B.r,-1)
l.push(C.aJ(p,C.di(p,p,p,p,B.b8,new C.o(u,p,new C.c2(r,r,r,r),new C.bv(t,t,t,t),s,p,B.n),B.je,p,p,p,p,p,p,p),B.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.ebx(q,v),p,p,p,p,p,p,!1,B.ae))}o=C.at(new C.C(B.a8,C.u(C.a([o,B.ar,n,B.d2,new C.fI(1,C.lZ(1,l,2,12,12,p,B.dK,!1),p)],m),B.m,p,B.b6,B.j,0,B.p),p),p,p,p)
n=q.w?"Restart":"Start"
return A.jf(B.cS,B.fV,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new A.eE(C.a([new A.fe(B.iJ,n,q.gc0h(q),B.bm,p)],m),p,p))}}
A.Ul.prototype={
S(){return new A.bgY(new C.ao(B.aq,$.au()))}}
A.bgY.prototype={
ass(d){return C.oe(B.k.aa(d,2),C.ad("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new A.epK(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d8(C.aI(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new A.epT()
l=C.aK(m,B.U,!1,m,!0,B.q,m,C.aL(),l,m,m,m,m,m,2,C.bm(m,m,m,m,m,m,m,m,!0,new C.b2(4,C.m(16),A0.vG),m,m,m,m,m,m,m,m,m,m,m,new C.b2(4,C.m(16),D.aPJ),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.l7,"Bill amount",!0,!0,!1,m,m,m,m,D.eId,"$ ",m,m,m,m,m,m,m,m),B.z,!0,m,!0,m,!1,m,B.ag,m,m,m,m,m,B.dX,m,m,m,1,m,m,!1,"\u2022",m,new A.epP(n),m,m,m,!1,m,m,!1,m,!0,m,B.a8,m,m,m,m,m,m,m,m,m,m,m,B.aJj,!0,B.a6,m,B.am,m,m,m,m)
k=B.bm.j(0.1)
s=C.m(20)
r=C.H(B.bm.j(0.35),B.r,1)
q=x.p
s=C.cL(C.a([l,B.bt,C.p(m,C.u(C.a([t.$2("Tip ("+B.k.U(n.e)+"%)","$"+n.ass(w)),t.$2("Total","$"+n.ass(v)),Q.UF,t.$3$big("Each of "+n.f+" pays","$"+n.ass(u),!0)],q),B.m,m,B.e,B.j,0,B.p),B.h,m,m,new C.o(k,m,r,s,m,m,B.n),m,m,m,m,B.c2,m,m,m)],q),m,B.fz,m,m,B.ai,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.clt[p]
r.push(new A.dy(""+o+"%",B.k.U(n.e)===o,new A.epQ(n,o),m,B.bm,m))}l=n.f
return A.jf(B.bm,B.fV,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.u(C.a([new A.eE(r,"TIP",m),A.ho(B.b2,""+l,"People",20,1,new A.epR(n),l),new A.eE(C.a([new A.dy("Round up",n.r,new A.epS(n),m,B.aM,m)],q),m,m)],q),B.m,m,B.e,B.R,0,B.p))}}
A.TN.prototype={
S(){var w=C.a([3,5],x.t)
return new A.bgr(w,B.cA,$,B.bu,0,C.a([],x.X),null,null)}}
A.bgr.prototype={
Z(){this.a0()
this.kL()},
l3(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(B.o.K(B.k.bJ(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t
A.a67("snare",0.5)}u.n(new A.e1D())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.he()
u.w=t
u.x=t?0:3.141592653589793
A.l0("bell",24,400,0.5)}u.n(new A.e1E())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new A.b9y(v,o.r>0,n))}u=C.aJ(n,C.at(C.c8(B.fE,m,B.bw,18,18),n,n,n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e1w(o),n,n,n,n,n,n,!1,B.ae)}else if(m==="coin"){t=B.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.H(B.dD,B.r,6)
s=C.a([new C.aa(0,B.G,B.aM.j(0.4),B.J,30)],x.V)
u=C.aJ(n,C.at(C.e5(B.A,C.p(B.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.eHu,n,n,n),B.h,n,n,new C.o(n,n,v,n,s,D.dT6,B.a5),n,190,n,n,n,n,n,190),n,n,t),n,n,n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e1x(o),n,n,n,n,n,n,!1,B.ae)}else{m=o.as
u=C.aJ(n,C.at(C.u(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.exM,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,B.kg,n,n,n)],x.p),B.m,n,B.e,B.R,0,B.p),n,n,n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e1y(o),n,n,n,n,n,n,!1,B.ae)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.cNW[r]
v.push(new A.dy(q.b,o.d===q.a,new A.e1z(o,q),q.c,B.bF,n))}v=C.a([new A.eE(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(A.ho(B.bF,""+s,"Dice",4,1,new A.e1A(o),s))}if(o.d==="num"){s=o.z
s=A.ho(B.bF,""+s,"From",100,1,new A.e1B(o),s)
p=o.Q
B.d.v(v,C.a([s,A.ho(B.bF,""+p,"To",1000,2,new A.e1C(o),p)],m))}return A.jf(B.bF,B.fV,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.u(v,B.m,n,B.e,B.R,0,B.p))}}
A.b9y.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(B.cA.ae()-0.5)*0.6
else w=0
v=C.m(22)
u=C.a([new C.aa(0,B.G,B.x.j(0.4),B.cs,14)],x.V)
t=C.a([],x.p)
for(s=D.d3G.h(0,B.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bF(s[q],p,p,C.p(p,p,B.h,p,p,H.a75,p,18,p,p,p,p,p,18),p))
return C.et(B.A,w,C.p(p,new C.am(B.V,p,B.a9,B.q,t,p),B.h,p,p,new C.o(B.c,p,p,v,u,p,B.n),p,100,p,p,B.bB,p,p,100),p)}}
A.aIa.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bt0.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bp7()}}
A.aIs.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bt4.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpq()}}
A.aIX.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bte.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpW()}}
A.aJq.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.btq.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bqp()}}
A.b3f.prototype={
B(d){var w,v=this,u=null,t=v.c,s=D.ayo.h(0,t)
$.cad=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aF(u,u,u,u,E.qq,u,u,u,new A.cmm(d),u,u,u,u,u,u),C.D(C.d(t,u,1,B.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,B.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
B.d.v(t,v.w)
t.push(C.aF(u,u,u,u,C.V(B.XB,s,u,u,u,22),u,u,u,new A.cmn(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.C(D.bjM,C.B(t,B.m,u,B.e,B.j,0,u,u),u),C.D(v.f,1)],w)
t=v.r
if(t!=null)w.push(C.p(u,t,B.h,u,u,new C.o(D.TP,u,new C.c2(new C.ay(B.c.j(0.08),1,B.r,-1),B.W,B.W,B.W),u,u,u,B.n),u,u,u,u,B.DE,u,u,1/0))
return C.cd(u,B.bW,C.br(!0,C.u(w,B.m,u,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),u,!1,!1,u,u)}}
A.dy.prototype={
B(d){var w,v,u,t=this,s=null,r=C.m(999),q=t.d,p=q?t.r.j(0.22):B.c.j(0.06),o=q?t.r:B.c.j(0.12)
o=C.H(o,B.r,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)B.d.v(v,C.a([C.V(u,q?t.r:B.aQ,s,s,s,16),B.eA],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?B.c:B.al,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.C(D.ac8,C.aJ(s,C.di(s,C.B(v,B.m,s,B.e,B.R,0,s,s),s,s,B.b8,new C.o(p,s,o,r,s,s,B.n),B.eG,s,s,s,B.h4,s,s,s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.cmi(t),s,s,s,s,s,s,!1,B.ae),s)}}
A.eE.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a3(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,B.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,B.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.D(C.ch(C.B(this.c,B.m,w,B.e,B.j,0,w,w),B.q,w,B.z,w,w,w,w,B.aZ),1))
return new C.C(B.cI,C.B(v,B.m,w,B.e,B.j,0,w,w),w)}}
A.asX.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,B.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.asw(d).cA1(q,B.bG,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.D(C.a7Q(C.ma(s,s,s,u,v,t.e,B.k.D(w,v,u)),q),1)
u=t.x
return new C.a3(s,34,C.B(C.a([new C.a3(78,s,r,s),q,new C.a3(38,s,C.d(u==null?B.k.aa(w,1):u,s,s,s,s,s,s,Ac.QK,B.dL,s,s),s)],x.p),B.m,s,B.e,B.j,0,s,s),s)}}
A.fe.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.C(D.ac8,C.aD(!1,B.Y,!0,C.m(12),C.aH(!1,C.m(12),!0,new C.C(A9.acn,C.B(C.a([C.V(w.c,u,v,v,v,17),B.eA,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.R,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new A.cmh(w),v,v,v,v,v,v,v),B.h,t,0,v,v,v,v,v,B.ac),v)}}
A.DV.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.ewh:u
w=t?B.c:B.bf
w=C.H(w,B.r,t?2.5:1)
return C.aJ(u,C.di(u,u,u,u,B.b8,new C.o(p,u,w,u,t?C.a([new C.aa(0,B.G,v.c.j(0.6),B.J,10)],x.V):u,q,B.a5),B.hM,u,r,D.aca,u,u,u,s),B.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.cmo(v),u,u,u,u,u,u,!1,B.ae)}}
A.mb.prototype={
a2F(d,e){var w=C.db()
w.sex(C.cN(C.dB(0,0,0,d,0,0),new A.cmj(this,w,e)))
this.fb$.push(w.b8())},
kL(){var w=this,v=w.qR(new A.cml(w))
v.kn(0)
w.fa$!==$&&C.aO()
w.fa$=v}}
A.a8O.prototype={
bsr(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
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
w=g.bvy()
g.ay!==$&&C.aO()
g.ay=w},
bvy(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
Ek(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
A.a8P.prototype={
cw7(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(r.Ek(0,w,e)){if(t!=null){q=r.ax
q===$&&C.c()
p=t.ax
p===$&&C.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
A.um.prototype={}
A.Nq.prototype={}
A.x9.prototype={}
A.Np.prototype={
f8(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.ajQ[w.aB(7)]
w=w.he()?0:12
u=B.o.K(t.c++,3)===0?"flute":"bell"
A.l0(u,v+w-12,2200,0.1)}}
A.Tj.prototype={
S(){var w=$.au()
return new A.aAu(new C.cn(null,x.A),new C.ao(B.aq,w),new A.Np(B.cA),D.cPJ,B.at,D.a_r,$,B.bu,0,C.a([],x.X),null,null)}}
A.aAu.prototype={
Z(){var w,v=this
v.a0()
v.kL()
v.a.toString
w=$.fUF
if(w==null)w=$.fUF=A.coT()
w.bw(new A.dOf(v),x.P)},
p(){var w=this.e
w.R$=$.au()
w.O$=0
this.bpy()},
ckj(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.x)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n)q.push(new A.dNI(p[n]).$0())
w.push(q)}this.w=w},
gU9(){var w=this.fy
return w.A(0,B.at)?100:Math.min(w.a,w.b)*0.43},
aq8(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=B.k.D(f,1,16)
w.Q=w.as=0},
atY(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.aq8(d.x,d.w,105/Math.max(w,3))
C.eG()
A.l0("bell",(B.d.cP(D.a_2,d.c)+1)*3+12,900,0.45)
A.dL(300,"",280,1.4,0.15,"tri")},
l3(d){var w,v,u,t,s,r,q,p=this
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
c0Z(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,B.at))return null
w=n.fy
v=n.gU9()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gU9()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(B.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cw7((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c0Y(d){var w=this,v=w.r
if(v==null||B.a.i(d).length===0){w.n(new A.dNG(w))
return}w.n(new A.dNH(w,v,B.a.i(d).toLowerCase()))},
bHW(){var w=null,v=this.c
v.toString
C.cf(w,w,!0,w,new A.dNE(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aF(n,n,n,n,D.bu7,n,n,n,o.gbHV(),n,n,n,n,"Earth facts",n),C.aF(n,n,n,n,D.m5,n,n,n,new A.dO0(o,d),n,n,n,n,"Share",n)],l),j=C.cj(new A.dO1(o,m)),i=B.c.j(0.06)
i=C.a([C.aK(n,B.U,!1,n,!0,B.q,n,C.aL(),o.e,n,n,n,n,n,2,C.bm(n,new C.b2(4,C.m(14),B.W),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,I.BU,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bC1,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.ag,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc0X(),n,n,n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,B.ix,!0,B.a6,n,B.am,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
w.push(new A.dy(s.a,!1,new A.dO2(o,s),B.mF,B.b2,n))}i.push(new C.C(B.il,new C.a3(n,38,C.cL(w,n,n,n,n,B.aZ,!1),n),n))}i.push(B.ar)
w=C.a([new A.dy("Whole Earth",!1,new A.dO6(o),B.h6,B.b2,n)],l)
for(v=D.ayf.gdH(D.ayf),v=v.gag(v);v.C();){u=v.gT(v)
w.push(new A.dy(u.a,!1,new A.dO7(o,u),n,B.b2,n))}w.push(new A.dy("Random",!1,new A.dO8(o),B.m_,B.b2,n))
i.push(new A.eE(w,"GO TO",n))
w=o.z
i.push(A.ho(B.b2,B.k.aa(w,1)+"x","Zoom",16,0.8,new A.dO9(o),w))
w=o.dy
i.push(A.ho(B.cS,B.a.aT(B.o.u(B.k.bJ(w)),2,"0")+":00","Time",24,0,new A.dOa(o),w))
w=o.fr
i.push(A.ho(B.bm,o.cj6(),"Season",365,0,new A.dOb(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?B.lt:D.Ey
i.push(new A.eE(C.a([new A.dy("Spin",w,new A.dOc(o),D.bpn,B.b2,n),new A.dy("Night",v,new A.dOd(o),B.ur,B.b2,n),new A.dy("Borders",u,new A.dO3(o),D.bpr,B.b2,n),new A.dy("Names",r,new A.dO4(o),Q.agv,B.b2,n),new A.dy("Music",q,new A.dO5(o),p,B.b2,n)],l),n,n))
return A.jf(B.b2,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.u(i,B.m,n,B.e,B.R,0,B.p))},
cj6(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.arh[u])v=u
return B.i1[v]+" "+(B.k.bJ(w-D.arh[v])+1)},
c0W(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new G.mP(1,B.o.K((B.d.cP(D.a_2,t)+1)*47,360),0.55,1).iF()
r=new A.dNC()
q=C.m(20)
p=C.H(s.j(0.6),B.r,1)
o=x.p
n=C.B(C.a([C.p(j,j,B.h,j,j,new C.o(s,j,j,j,j,j,B.a5),j,10,j,j,j,j,j,10),B.aa,C.D(C.d(d.a,j,1,B.a2,j,j,j,B.dP,j,j,j),1),C.aF(j,j,j,j,B.Ly,j,j,j,new A.dNB(this),j,j,j,j,j,B.c6)],o),B.m,j,B.e,B.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,B.hV,j,j,j)
m=D.d2o.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.B(C.a([m,B.aa,r.$2("PEOPLE",l?A.fbs(v):"\u2014")],o),B.m,j,B.e,B.j,0,j,j)
i=r.$2("SIZE",A.Fj(i)+" km\xb2")
if(l)m=(w<10?B.k.aa(w,1):A.Fj(w))+" per km\xb2"
else m="\u2014"
m=C.B(C.a([i,B.aa,r.$2("CROWDING",m)],o),B.m,j,B.e,B.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?B.k.aa(u,3):B.k.aa(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.u(C.a([n,t,B.P,v,B.P,m,B.P,C.B(C.a([i,B.aa,r.$2("ECONOMY",l>0?"$"+A.fbs(l*1e6)+" \xb7 "+k:k)],o),B.m,j,B.e,B.j,0,j,j)],o),B.F,j,B.e,B.R,0,B.p),B.h,j,j,new C.o(D.Td,j,p,q,j,j,B.n),j,j,j,j,D.acH,j,j,j)}}
A.bbM.prototype={
a6(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.a0(),d7=C.N()
d7.r=D.za.gq(0)
d8.bi(new C.ae(0,0,0+d4,0+d5),d7)
w=new C.f0()
w.dX(4)
for(d7=d8.a,v=0;v<90;++v){u=w.ae()
t=w.ae()
s=w.ae()
r=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
r.r=B.c.j(0.25+w.ae()*0.5).gq(0)
q=r.L()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new C.v(d4,d5)
o=d2.f
u=C.N()
t=x.O
u.sar(new C.bR(B.A,0.5,B.w,d3,0,C.a([B.K,B.b2.j(0.35),B.K],t),D.cBG,d3).az(0,C.bV(p,o*1.1)))
d8.ap(p,o*1.05,u)
n=C.bV(p,o)
u=C.N()
u.sar(D.dTa.az(0,n))
d8.ap(p,o,u)
J.bN(d7.save())
u=x.v
d6=new C.aS(d6.r,B.as,d3,d3,C.a([],u))
d6.G(new C.kx(n))
d8.tj(0,d6)
m=d2.d*3.141592653589793/180
l=d2.e*3.141592653589793/180
k=Math.sin(m)
j=Math.cos(m)
i=Math.sin(l)
h=Math.cos(l)
g=C.N()
g.b=B.ad
m=g.c=0.7
g.r=B.c.j(0.1).gq(0)
f=new A.d5E(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.L()
s=d.e
d7.drawPath((s==null?d.e=new C.cG(d.gbL().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.a0()
a3=C.a([],u)
d=new C.aS(a2.r,B.as,d3,d3,a3)
a3.push(new C.bc(s,r))}else{s=new C.ar(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bC(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.L()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cG(d.gbL().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.L()
s=d.e
d7.drawPath((s==null?d.e=new C.cG(d.gbL().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.a0()
a3=C.a([],u)
d=new C.aS(a2.r,B.as,d3,d3,a3)
a3.push(new C.bc(s,r))}else{s=new C.ar(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bC(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.L()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cG(d.gbL().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=B.o.K((B.d.cP(D.a_2,a7.c)+1)*47,360)
$.a0()
b0=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
a3=a8?0.35:0.5
b0.r=new G.mP(1,a9,a3,a8?1:0.62).iF().gq(0)
b1=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
b1.b=B.ad
b1.c=a8?2.2:m
b1.e=B.fo
b1.r=(a8?B.c:B.x.j(0.55)).gq(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,C.K)(a3),++b3){b4=a3[b3]
b5=b4.length/4|0
b6=$.a0()
b7=C.a([],u)
b8=new C.aS(b6.r,B.as,d3,d3,b7)
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
if(v===0){b6=new C.bc(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bC(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new C.ar(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bC(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}}if(!b9)continue
b6=new C.bL()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bC(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.L()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cG(b8.gbL().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.L()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cG(b8.gbL().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.K)(a5),++b3){d=a5[b3]
$.a0()
s=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
s.b=B.ad
s.c=5
s.r=B.c.j(0.25).gq(0)
s.z=B.qz
q=s.L()
s=d.e
d7.drawPath((s==null?d.e=new C.cG(d.gbL().a.snapshot()):s).a,q)
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
c9=A.hs4(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbg(b2)
c9.a6(d8,new C.v(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=B.k.D(k*c0+j*c1*c4,-1,1)
$.a0()
u=C.N()
u.sar(new C.bR(B.A,0.5,B.w,d3,0,C.a([B.K,B.K,D.aZJ.j(0.78)],t),D.cQ3,d3).az(0,C.bV(new C.v(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.ap(p,o,u)}$.a0()
d4=C.N()
d4.sar(new C.bR(B.A,0.5,B.w,d3,0,C.a([B.K,B.x.j(0.4)],t),D.d_Z,d3).az(0,n))
d8.ap(p,o,d4)
d7.restore()
d7=C.N()
d7.b=B.ad
d7.c=1.4
d7.r=B.hY.j(0.5).gq(0)
d8.ap(p,o,d7)},
aq(d){return!0}}
A.aIy.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.aIz.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpx()}}
A.bpV.prototype={}
A.Uo.prototype={
S(){return new A.bh0()}}
A.bh0.prototype={
gaOa(){var w=this.d
if(w===$)w=this.d=B.cA.aB(16)
return w},
B(d){var w=null,v=C.eA(w,w,w,!0,!0,D.za,w,1,!0,w,0,!1,w,!1,w,w,C.aF(w,w,w,w,D.ail,w,w,w,new A.eqo(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.f1I,w,w,w,1,w,!0),u=C.m(18),t=B.b2.j(0.1),s=C.H(B.b2.j(0.35),B.r,1),r=x.p
return C.cd(v,D.za,C.cL(C.a([C.p(w,C.B(C.a([D.bsQ,B.aw,C.D(C.d(D.cFc[this.gaOa()],w,w,w,w,w,w,D.a4y,w,w,w),1),C.aF(w,w,w,w,D.bCY,w,w,w,new A.eqp(this),w,w,w,w,"Another fact",w)],r),B.m,w,B.e,B.j,0,w,w),B.h,w,w,new C.o(t,w,s,u,w,w,B.n),w,w,w,w,B.bB,w,w,w),B.ay,C.cj(new A.eqq())],r),w,B.Vg,w,w,B.ai,!1),w,!1,!1,w,w)}}
A.U9.prototype={
S(){return A.hsw()}}
A.bgO.prototype={
cbf(d){var w=d.c,v=A.hsy(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.v(Math.cos(t)*v,Math.sin(t)*v)},
Z(){this.a0()
this.kL()},
l3(d){var w,v,u,t=this
t.e.f8(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.cbf(w)
u=new C.v(-v.a,-v.b).aM(0,t.w)
v=C.l1(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc1_(){var w=this.ch
return new C.v(w.a/2,w.b/2).an(0,this.x)},
c13(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.AM[s]
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
aV9(d){this.n(new A.eiG(this,d))
C.eG()
A.l0("bell",D.d08[B.o.K(B.d.cP(D.AM,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aF(m,m,m,m,D.m5,m,m,m,new A.eiR(n,d),m,m,m,m,"Share",m)],k),i=C.cj(new A.eiS(n,l)),h=C.a([new A.dy("All",!1,new A.eiT(n),B.Ya,B.aM,m)],k)
for(w=0;w<10;++w){v=D.AM[w]
h.push(new A.dy(v.a,n.z===v,new A.eiU(n,v),m,C.aY(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?B.k.aa(s,0)+" d/s":""+B.k.U(s)+" d/s"
t=A.ho(B.aM,s,"Time",1,0,new A.eiV(n),u/t)
u=n.w
u=A.ho(B.aM,B.k.aa(u,1)+"x","Zoom",9,0.5,new A.eiW(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?B.lt:D.Ey
return A.jf(B.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.u(C.a([new A.eE(h,"GO TO",m),t,u,new A.eE(C.a([new A.dy("Orbits",s,new A.eiX(n),m,B.aM,m),new A.dy("Names",r,new A.eiY(n),m,B.aM,m),new A.dy("Asteroids",q,new A.eiZ(n),m,B.aM,m),new A.dy("Music",p,new A.ej_(n),o,B.aM,m)],k),m,m)],k),B.m,m,B.e,B.R,0,B.p))},
c10(d){var w,v,u,t,s,r=null,q=C.aY(d.z),p=d.c,o=p*8.317,n=new A.eiE(),m=C.m(20),l=C.H(q.j(0.6),B.r,1),k=C.p(r,r,B.h,r,r,new C.o(q,r,r,r,r,r,B.a5),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.B(C.a([k,B.aa,C.D(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,B.l6,r,r,r),1),C.aF(r,r,r,r,B.Ly,r,r,r,new A.eiD(this),r,r,r,r,r,B.c6)],w),B.m,r,B.e,B.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,D.R7,r,r,r)
v=n.$2("WIDTH",A.Fj(d.d*2)+" km")
u=p===0
p=C.B(C.a([v,B.aa,n.$2("FROM THE SUN",u?"\u2014":C.t(p)+" AU ("+A.Fj(p*149.6)+" million km)")],w),B.m,r,B.e,B.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new A.eiF().$1(v))
t=d.f
v=C.B(C.a([v,B.aa,n.$2("ONE DAY",t>=48?B.k.aa(t/24,0)+" Earth days":B.k.aa(t,1)+" hours")],w),B.m,r,B.e,B.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.B(C.a([n.$2("GRAVITY",C.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+B.k.aa(50*t/9.81,s)+" kg"),B.aa,n.$2("TEMPERATURE",""+B.o.U(d.x)+"\xb0C")],w),B.m,r,B.e,B.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?B.k.aa(o,1)+" minutes":B.k.aa(o/60,1)+" hours"
return C.p(r,C.u(C.a([j,B.av,k,B.P,p,B.P,v,B.P,s,B.P,C.B(C.a([t,B.aa,n.$2("SUNLIGHT TAKES",i)],w),B.m,r,B.e,B.j,0,r,r)],w),B.F,r,B.e,B.R,0,B.p),B.h,r,r,new C.o(D.Td,r,l,m,r,r,B.n),r,r,r,r,D.acH,r,r,r)}}
A.bo_.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.a0()
w=C.N()
w.r=D.za.gq(0)
a7.bi(new C.ae(0,0,0+a5,0+a6),w)
v=new C.f0()
v.dX(8)
for(w=a7.a,u=0;u<110;++u){t=v.ae()
s=v.ae()
r=v.ae()
q=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.r=B.c.j(0.2+v.ae()*0.5).gq(0)
p=q.L()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc1_()
n=a5.w
if(a5.as)for(a6=B.d.gag(D.AM),t=new C.hJ(a6,new A.eKd()),s=o.a,r=o.b;t.C();){q=a6.gT(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
m.b=B.ad
m.c=1
m.r=B.c.j(0.12).gq(0)
p=m.L()
w.drawCircle(s,r,q*n,p)
p.delete()}if(a5.ax)for(a6=a5.CW,t=o.a,s=o.b,r=a5.cx,u=0;u<a6.length;++u){q=a6[u]
m=a5.f
l=r[u]
k=q+m*0.0016/l
j=(l===0?0:30+150*Math.sqrt(l/30.1))*n
q=Math.cos(k)
m=Math.sin(k)
l=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
l.r=B.c.j(0.5).gq(0)
p=l.L()
w.drawCircle(t+q*j,s+m*j,0.9,p)
p.delete()}i=A.hsx(B.d.gJ(D.AM))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.N()
s=x.O
t.sar(new C.bR(B.A,0.5,B.w,a4,0,C.a([B.aM.j(0.5),B.K],s),a4,a4).az(0,C.bV(o,a6)))
a7.ap(o,a6,t)
t=C.N()
t.sar(D.dT4.az(0,C.bV(o,i)))
a7.ap(o,i,t)
if(a5.at){h=A.fWg("Sun",10.5,B.al)
h.a6(a7,o.an(0,new C.v(-h.b.c/2,i+4)))}for(a6=B.d.gag(D.AM),t=new C.hJ(a6,new A.eKe()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gT(0)
g=l.c
j=g===0?0:30+150*Math.sqrt(g/30.1)
f=l.e
k=f<=0?0:6.283185307179586*(a5.f/f)+g*1.7
g=q+Math.cos(k)*j*n
f=m+Math.sin(k)*j*n
j=(1.5+1.6*Math.log(l.d/1000+1))*Math.sqrt(n)
e=C.aY(l.z)
d=l.a
if(d==="Saturn"){J.bN(w.save())
w.translate(g,f)
w.rotate(-22.91831180523293,0,0)
a0=C.dh(B.J,j*1.3,j*4.2)
a1=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
a1.b=B.ad
a1.c=j*0.45
a1.r=B.bJ.j(0.55).gq(0)
p=a1.L()
w.drawOval(C.cr(a0),p)
p.delete()
w.restore()}a0=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
a0.r=e.j(0.3).gq(0)
a0.z=B.qz
p=a0.L()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
a1=C.ap(e,B.x,0.55)
a1.toString
a0.sar(new C.bR(N.pK,0.5,B.w,a4,0,C.a([B.c,e,a1],s),F.ZG,a4).az(0,C.bV(new C.v(g,f),j)))
p=a0.L()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
l.b=B.ad
l.c=2
l.r=B.c.gq(0)
p=l.L()
w.drawCircle(g,f,j+7,p)
p.delete()}if(r&&d==="Earth"){k=a5.f/27.3*2*3.141592653589793
a2=j+11*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
a3.r=B.c.gq(0)
p=a3.L()
w.drawCircle(g+l*a2,f+a0*a2,1.8*a1,p)
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.cJZ[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
a3.r=B.al.gq(0)
p=a3.L()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=A.fWg(d,10.5,B.al)
h.a6(a7,new C.v(g+-h.b.c/2,f+(j+4)))}}},
aq(d){return!0}}
A.Tk.prototype={
S(){var w=x.i
return new A.aAv(new A.Np(B.cA),C.bY(5,0,!1,w),C.bY(5,0,!1,w),C.bY(5,null,!1,x.cD),B.J,B.J,C.a([],x.g),$,B.bu,0,C.a([],x.X),null,null)}}
A.aAv.prototype={
cnr(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c12(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.dJS
s.cy=new C.v(s.ay,0)
w=s.db
B.d.a7(w)
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
A.dL(150,"",400,0,0.5,"noise")
A.dL(90,"",300,1.5,0.6,"sine")
s.n(new A.dOj())},
Z(){this.a0()
this.kL()},
l3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.f8(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.xC[r]
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
if(q.a!=="Sun")A.dL(60+p*5,"",220,0.6,0.55,"sine")
break}}}if(B.d.e9(s,new A.dOM()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
A.dL(70,"",350,0,0.7,"noise")
break}}v=i.db
if(v.length===0||B.d.gai(v).aE(0,i.cx).gcj()>120)v.push(i.cx)
if(v.length>700)B.d.cu(v,0)
if(i.cx.gcj()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bGf()
else n=n==="weight"?p.cut():p.byD()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.cYz[u]
v.push(new A.dy(t.b,p.d===t.a,new A.dOy(p,t),t.c,B.d3,o))}v=C.a([new A.eE(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new A.dy("Hammer",!s,new A.dOz(p),A7.XA,B.d3,o),new A.dy("Feather",s,new A.dOA(p),Q.Xa,B.d3,o),new A.dy(q,r,new A.dOE(p),B.Ej,B.b2,o)],w)
q=p.w
B.d.v(v,C.a([new A.eE(r,o,o),A.ho(B.d3,""+B.k.U(q*100)+"%","Slow motion",1,0.05,new A.dOF(p),q),new A.eE(C.a([new A.fe(B.uu,"Drop!",new A.dOG(p),B.bm,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=A.ho(B.d3,""+B.k.U(s)+" kg","Your weight",120,20,new A.dOH(p),s)
r=p.ax
B.d.v(v,C.a([s,A.ho(B.d3,""+B.k.U(r*100)+" cm","Your jump",1.2,0.1,new A.dOI(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=A.ho(B.d3,B.k.aa(s,1)+" km/s","Speed",13,0,new A.dOJ(p),s)
r=p.ch
B.d.v(v,C.a([s,A.ho(B.d3,B.k.aa(r,1)+"x out","View",8,0.5,new A.dOK(p),r),new A.eE(C.a([new A.fe(B.mI,"Fire!",p.gc11(),B.bm,o),new A.fe(B.uu,"Falls",new A.dOL(p),B.c,o),new A.fe(B.rN,"Orbit 7.7",new A.dOB(p),B.c,o),new A.fe(D.bsh,"Oval 9",new A.dOC(p),B.c,o),new A.fe(B.Ez,"Escape",new A.dOD(p),B.c,o)],w),o,o)],w))}return A.jf(B.d3,B.fV,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.u(v,B.m,o,B.e,B.R,0,B.p))},
bGf(){return new C.C(D.beO,C.cj(new A.dOi(this)),null)},
cut(){var w,v,u,t=null,s=[D.eeD,D.efV,D.eg2,D.egl,D.eg0,D.egp,D.ef8,D.egI,D.efH],r=x.p,q=C.a([D.eRC,B.T],r)
for(w=0;w<9;++w){v=s[w]
u=C.aY(v.c)
q.push(new C.C(B.cI,new C.cC(B.aZ,B.e,B.j,B.m,t,B.p,t,0,C.a([new C.a3(62,t,new C.w(v.a,t,new C.F(!0,u,t,t,t,t,12.5,B.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bE(1,B.bo,new C.Ac(new A.dOk(this,v),t),t)],r),t),t))}q.push(B.av)
q.push(D.eTK)
return C.cL(q,t,B.iH,t,t,B.ai,!1)},
byD(){return C.cj(new A.dOg(this))}}
A.b71.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.a0(),e=C.N()
e.r=D.za.gq(0)
d.bi(new C.ae(0,0,0+h,0+g),e)
w=new C.f0()
w.dX(2)
for(e=d.a,v=0;v<80;++v){u=w.ae()
t=w.ae()
s=w.ae()
r=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
r.r=B.c.j(0.2+w.ae()*0.5).gq(0)
q=r.L()
e.drawCircle(u*h,t*g,s*1.1+0.3,q)
q.delete()}h=j.c
p=6371*h
g=j.b
e=C.N()
e.sar(new C.bR(B.A,0.5,B.w,i,0,C.a([B.K,B.b2.j(0.35),B.K],x.O),D.cQU,i).az(0,C.bV(g,p*1.1)))
d.ap(g,p*1.06,e)
e=C.N()
e.sar(D.dT_.az(0,C.bV(g,p)))
d.ap(g,p,e)
o=g.an(0,new C.v(0,-p))
f=f.r
e=x.v
n=new C.aS(f,B.as,i,i,C.a([],e))
u=o.a
t=o.b
s=t+3
n.G(new C.bc(u-16,s))
n.G(new C.ar(u,t-400*h-4))
n.G(new C.ar(u+16,s))
n.G(new C.bL())
s=C.N()
s.r=B.ak.gq(0)
d.aU(n,s)
s=o.an(0,new C.v(0,-400*h-6))
u=C.N()
u.r=B.c.gq(0)
d.ap(s,4,u)
u=j.e
if(u.length>1){e=C.a([],e)
m=new C.aS(f,B.as,i,i,e)
f=g.a
t=g.b
m.G(new C.bc(f+B.d.gJ(u).a*h,t+B.d.gJ(u).b*h))
for(u=C.dd(u,1,i,C.U(u).c),s=u.$ti,u=new C.bU(u,u.gI(0),s.k("bU<ai.E>")),s=s.k("ai.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new C.ar(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bC(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.a0()
f=C.N()
f.b=B.ad
f.c=2.4
f.d=B.bV
f.r=B.d3.j(0.9).gq(0)
d.aU(m,f)}if(j.f){f=j.d
k=g.an(0,new C.v(f.a*h,f.b*h))
h=C.N()
h.r=B.d3.j(0.4).gq(0)
h.z=I.pi
d.ap(k,7,h)
h=C.N()
h.r=B.c.gq(0)
d.ap(k,4,h)}},
aq(d){return!0}}
A.U1.prototype={
S(){return new A.bgL(new C.cn(null,x.A),$,B.bu,0,C.a([],x.X),null,null)}}
A.bgL.prototype={
Z(){this.a0()
this.kL()},
l3(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.Nu[l.e],i=D.Nu[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aF(k,k,k,k,D.m5,k,k,k,new A.ebA(l,d),k,k,k,k,"Share",k)],u)
s=C.D(C.b1(k,k,k,new A.bny(f,g,v,k),B.ff),1)
r=g.a
q=v<10?B.k.aa(v,1):A.Fj(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,B.j7,B.L,k,k)
o=A.Fj(v*v*v)
n=B.a.c7(p,"s")?"":"s"
h=C.u(C.a([s,C.p(k,C.u(C.a([q,B.av,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,W.a40,B.L,k,k),B.bA,C.d(p+": "+A.Fj(w*2)+" km wide. "+r+": "+A.Fj(h*2)+" km wide.",k,k,k,k,k,k,W.a4d,B.L,k,k)],u),B.m,k,B.e,B.j,0,B.p),B.h,k,k,k,k,k,k,k,D.bgW,k,k,1/0)],u),B.m,k,B.e,B.j,0,B.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.Nu[m]
r.push(new A.dy(w.a,l.e===m,new A.ebB(l,m),k,C.aY(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.Nu[m]
w.push(new A.dy(s.a,l.f===m,new A.ebC(l,m),k,C.aY(s.c),k))}return A.jf(B.c8,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.en(h,l.d),"SIZE COMPARE",C.u(C.a([new A.eE(r,"FIRST",k),new A.eE(w,"SECOND",k)],u),B.m,k,B.e,B.R,0,B.p))}}
A.bny.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.a0()
w=C.N()
w.r=D.TI.gq(0)
d.bi(new C.ae(0,0,0+h,0+g),w)
v=new C.f0()
v.dX(6)
for(w=d.a,u=0;u<70;++u){t=v.ae()
s=v.ae()
r=v.ae()
q=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.r=B.c.j(0.2+v.ae()*0.4).gq(0)
p=q.L()
w.drawCircle(t*h,s*g,r+0.3,p)
p.delete()}o=Math.min(h/2-16,g/2-10)*0.98
n=Math.max(o/this.d,0.8)
h*=0.5
g*=0.5
m=new C.v(h,g)
w=new A.eIm(d)
t=this.c
w.$3(m,o,C.aY(t.c))
s=o-n
l=new C.v(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,C.aY(s.c))
w=C.N()
w.b=B.ad
w.c=1.4
w.r=B.al.gq(0)
d.ap(l,n+3,w)
k=C.iR(i,i,i,i,C.dq(i,i,i,i,i,i,i,i,i,D.eDY,s.a),B.a6,B.cn,i,B.eE,B.cm)
k.fq()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbg(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbg(g)-6
h=g}k.a6(d,l.an(0,new C.v(-w/2,h)))
j=C.iR(i,i,i,i,C.dq(i,i,i,i,i,i,i,i,i,D.eH5,t.a),B.a6,B.cn,i,B.eE,B.cm)
j.fq()
t=j.b
h=t.c
t=t.a.c
j.a6(d,m.an(0,new C.v(-h/2,-t.gbg(t)/2)))},
aq(d){return!0}}
A.aIA.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bt6.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpz()}}
A.aJ8.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.btk.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bq7()}}
A.aJb.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.btm.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bqa()}}
A.NT.prototype={}
A.So.prototype={
S(){return A.hsu()}}
A.bfu.prototype={
Z(){this.a0()
this.kL()},
l3(d){var w,v,u,t,s,r=this
r.f+=d
r.e.f8(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
A.dL(70,"",500,0.3,0.5,"sine")}}B.d.bm(w,new A.dwX())},
aVa(d){var w,v,u,t=this.Q
if(t.A(0,B.at))return
w=this.gb2N()
v=d.aE(0,new C.v(t.a/2,t.b*0.42))
u=B.k.D(v.gcj()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new A.NT(t,u,1.2,new C.wn(1,30+B.cA.ae()*40,0.9,0.7).iF()))
A.l0("bell",60+B.k.U(12-u)*2,400,0.35)},
gb2N(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/B.k.D(m.length===0?3:new C.J(m,new A.dwL(),C.U(m).k("J<1,Q>")).ft(0,B.vN),1.0001,99))
m=x.p
w=C.a([C.aF(n,n,n,n,D.m5,n,n,n,new A.dwM(o,d),n,n,n,n,"Share",n)],m)
v=C.cj(new A.dwN(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?B.k.aa(s,0)+" Suns":A.fbs(s)+" Suns"
t=A.ho(B.bF,s,"Mass",1,0,new A.dwP(o),u/t)
u=C.a([new A.dy("Star (10)",!1,new A.dwQ(o),n,B.bF,n),new A.dy("Cygnus X-1 (21)",!1,new A.dwR(o),n,B.bF,n),new A.dy("Milky Way core (4 million)",!1,new A.dwS(o),n,B.bF,n),new A.dy("M87 (6.5 billion)",!1,new A.dwT(o),n,B.bF,n)],m)
s=o.w
r=o.x
q=o.y
p=q?B.lt:D.Ey
return A.jf(B.bF,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.u(C.a([t,new A.eE(u,"LIKE",n),new A.eE(C.a([new A.dy("Glowing ring",s,new A.dwU(o),n,B.bF,n),new A.dy("Bent light",r,new A.dwV(o),n,B.bF,n),new A.dy("Music",q,new A.dwW(o),p,B.bF,n),new A.fe(B.jI,"Clear",new A.dwO(o),B.c,n)],m),n,n)],m),B.m,n,B.e,B.R,0,B.p))},
abU(d,e){var w=null
return C.D(C.u(C.a([C.d(d,w,w,w,w,w,w,D.eA2,w,w,w),B.bA,C.d(e,w,2,w,w,w,w,K.a3W,B.L,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),1)}}
A.b6q.prototype={
a6(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.a0()
w=C.N()
w.r=D.b5K.gq(0)
b2.bi(new C.ae(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.v(w,v)
t=this.b
s=t.gb2N()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,C.K)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new C.v(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+B.k.D(o/h,0,n)
i=new C.v(w+k/h*g,v+j/h*g)}}k=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
k.r=B.c.j(0.6).gq(0)
f=k.L()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=C.N()
b0.b=B.ad
b0.c=2
b0.r=B.c.j(0.25).gq(0)
b0.z=E.Oz
b2.ap(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.ap(B.w1,B.h1,d)
n.toString
k=Math.cos(a4)
$.a0()
j=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
g=a5?1:0.85
j.r=n.j(r*(0.4+(0.5+0.5*k)*0.6)*g).gq(0)
f=j.L()
p.drawCircle(w+a6,v+o*a0*0.28,1.3,f)
f.delete()
if(!a5&&t.x){o=Math.sin(-a4)
k=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
k.r=n.j(b1).gq(0)
f=k.L()
p.drawCircle(w+a6*0.5,v+(q*Math.abs(o)*0.6-b0),1,f)
f.delete()}}}b0=s*1.25
$.a0()
b1=C.N()
b1.sar(new C.bR(B.A,0.5,B.w,null,0,C.a([B.x,B.x.j(0)],x.O),D.cx8,null).az(0,C.bV(u,b0)))
b2.ap(u,b0,b1)
b1=C.N()
b1.r=B.x.gq(0)
b2.ap(u,s,b1)
b1=C.N()
b1.b=B.ad
b1.c=1
b1.r=B.bF.j(0.55).gq(0)
b2.ap(u,s,b1)
for(b0=t.z,b1=b0.length,m=0;m<b0.length;b0.length===b1||(0,C.K)(b0),++m){a7=b0[m]
a0=s*a7.b
t=w+Math.cos(a7.a)*a0
r=v+Math.sin(a7.a)*a0*0.9
a8=1+B.k.D(3.5/a7.b,0,5)
a9=3*a8
q=-Math.sin(a7.a)*a9
o=Math.cos(a7.a)*a9
n=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
n.c=4.2/Math.sqrt(a8)
n.d=B.bV
k=a7.d
n.r=k.j(B.k.D(a7.b/2,0.2,1)).gq(0)
f=n.L()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
o.r=k.j(0.2).gq(0)
o.z=I.pi
f=o.L()
p.drawCircle(t,r,6,f)
f.delete()}},
aq(d){return!0}}
A.acs.prototype={}
A.Tg.prototype={
S(){var w=x.r,v=x.g
return new A.bfT(new C.cn(null,x.A),new A.Np(B.cA),C.a([],w),B.J,B.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),B.J,B.J,$,B.bu,0,C.a([],x.X),null,null)}}
A.bfT.prototype={
Z(){this.a0()
this.XY()
this.kL()},
XY(){var w,v,u,t,s,r,q,p,o=this,n=new C.f0()
n.dX(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.ae(),1.6)
w.push(new A.acs(t,n.ae()*3.141592653589793*2,(n.ae()-0.5)*0.5*t,25+n.ae()*20))}else{t=Math.pow(n.ae(),0.8)
s=n.aB(o.f)
r=n.ae()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.he()?0:3.141592653589793
q=r+(n.ae()-0.5)*0.25}r=n.ae()
p=t<0.25?35+n.ae()*15:205+n.ae()*50
w.push(new A.acs(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cni(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.dKV
k.cx=D.dKY
w=new C.f0()
w.dX(9)
v=k.cy
B.d.a7(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new A.acs(Math.pow(w.ae(),0.8)*0.7,w.ae()*3.141592653589793*2,0,320+w.ae()*30))
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
for(s=k.ay,r=x.S,s=C.dd(s,0,C.dJ(900,"count",r),C.U(s).c),o=s.$ti,s=new C.bU(s,s.gI(0),o.k("bU<ai.E>")),o=o.k("ai.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new C.v(l*n,Math.sin(m)*n))}k.db=v
v=C.a([],u)
for(u=k.ay,u=C.dd(u,0,C.dJ(900,"count",r),C.U(u).c),r=u.$ti,u=new C.bU(u,u.gI(0),r.k("bU<ai.E>")),r=r.k("ai.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new C.v(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=B.J
A.dL(110,"",900,0.5,0.45,"sine")},
l3(d){var w,v,u,t,s,r,q,p=this
p.e.f8(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aE(0,p.fx)
s=Math.max(0.25,t.gcj())
r=t.ez(0,s).aM(0,0.9/(s*s))
w=p.fy.an(0,r.aM(0,u))
p.fy=w
v=p.cx.aE(0,r.aM(0,u))
p.cx=v
w=p.fx.an(0,w.aM(0,u))
p.fx=w
v=p.CW.an(0,v.aM(0,u))
p.CW=v
q=new A.dMR(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aF(r,r,r,r,D.m5,r,r,r,new A.dMH(s,d),r,r,r,r,"Share",r)],q),o=C.b1(r,r,r,new A.bbC(s,r),B.at),n=B.x.j(0.5),m=C.m(14),l=C.H(B.bG,B.r,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.an(8,C.p(r,C.d(w,r,r,r,r,r,r,A5.a3O,r,r,r),B.h,r,r,new C.o(n,r,l,m,r,r,B.n),r,r,r,r,B.bQ,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.cMR[v]
o=s.Q===u.a&&!s.ch
l.push(new A.dy(u.b,o,new A.dMI(s,u),r,B.h0,r))}l.push(new A.dy("Collide",s.ch,new A.dMJ(s),B.wU,B.c8,r))
o=C.a([new A.eE(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=A.ho(B.h0,""+n,"Arms",6,2,new A.dMK(s),n)
l=s.r
B.d.v(o,C.a([n,A.ho(B.h0,B.k.aa(l,1),"Winding",6,0.8,new A.dML(s),l)],q))}n=s.as
o.push(A.ho(B.h0,""+B.k.U(n*90)+"\xb0","Tilt",1,0.15,new A.dMM(s),n))
n=s.ax
o.push(A.ho(B.h0,B.k.aa(n,1)+"x","Speed",4,0,new A.dMN(s),n))
n=s.x
l=s.z
w=s.y
t=w?B.lt:D.Ey
o.push(new A.eE(C.a([new A.dy("Dark matter",n,new A.dMO(s),r,B.bF,r),new A.dy("You are here",l,new A.dMP(s),r,B.aM,r),new A.dy("Music",w,new A.dMQ(s),t,B.h0,r)],q),r,r))
return A.jf(B.h0,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.en(new C.am(B.V,r,B.aY,B.q,m,r),s.d),"GALAXY",C.u(o,B.m,r,B.e,B.R,0,B.p))}}
A.bbC.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.a0()
w=C.N()
w.r=D.b7r.gq(0)
a3.bi(new C.ae(0,0,0+a1,0+a2),w)
v=new C.f0()
v.dX(3)
for(w=a3.a,u=0;u<90;++u){t=v.ae()
s=v.ae()
r=v.ae()
q=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.r=B.c.j(0.15+v.ae()*0.4).gq(0)
p=q.L()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new C.v(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=C.N()
t.sar(new C.bR(B.A,0.5,B.w,a0,0,C.a([B.aB.j(0.32),B.aB.j(0.12),B.K],x.O),D.bWe,a0).az(0,C.bV(o,a2)))
a3.ap(o,a2,t)}m=new A.d2M(a1.as)
a2=n*0.3
t=C.N()
t.sar(new C.bR(B.A,0.5,B.w,a0,0,C.a([B.hg.j(0.85),B.aX.j(0.3),B.K],x.O),a0,a0).az(0,C.bV(o,a2)))
a3.ap(o,a2,t)
if(!a1.ch){l=C.N()
for(a2=a1.ay,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){j=a2[k]
s=j.a
i=a1.x?1/(0.25+s*0.9):1/Math.pow(s+0.18,1.5)*0.35
r=a1.at
q=Math.min(i,6)
h=j.b
g=m.$6(Math.cos(h)*s,Math.sin(h)*s,j.c,o,r*q*0.5,n)
q=j.d
r=B.k.K(q,360)
l.r=new G.mP(1,r,q>200?0.45:0.55,1).iF().j(0.35+(1-s)*0.5).gq(0)
s=s<0.3?1.3:1
p=l.L()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.a0()
a2=C.N()
a2.b=B.ad
a2.c=1.6
a2.r=B.aM.gq(0)
a3.ap(g,9,a2)
f=C.iR(a0,a0,a0,a0,D.exl,B.a6,B.cn,a0,B.eE,B.cm)
f.fq()
f.a6(a3,g.an(0,new C.v(-f.b.c/2,12)))}}else{e=n*0.8
l=C.N()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.b8s.j(0.6).gq(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.L()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.b47.j(0.6).gq(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.L()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.a0()
w=C.N()
w.r=B.hg.gq(0)
a3.ap(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.N()
w.r=B.ia.gq(0)
a3.ap(a1,5,w)}},
aq(d){return!0}}
A.TY.prototype={
S(){return new A.bgK(new C.cn(null,x.A),new A.Np(B.cA),$,B.bu,0,C.a([],x.X),null,null)}}
A.bgK.prototype={
Z(){this.a0()
this.kL()},
l3(d){var w,v,u,t=this
t.e.f8(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=B.k.K(t.r+d*0.04*v,1)
else{w=B.k.K(t.w+d*0.05*v,1)
t.w=w
u=B.k.bJ(w*4)
if(u!==B.k.bJ(t.as))A.l0("bell",60+u*4,500,0.35)
t.as=u}},
gcj5(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gc9U(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aF(q,q,q,q,D.m5,q,q,q,new A.ebg(r,d),q,q,q,q,"Share",q)],p),n=C.D(new C.en(C.b1(q,q,q,new A.bmQ(r,q),B.ff),r.d),1)
if(r.f==="seasons")w=r.gcj5()
else{w=r.gc9U()
v=B.k.aj(B.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.u(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,T.Hf,B.L,q,q),B.h,q,q,q,q,q,q,q,E.acR,q,q,1/0)],p),B.m,q,B.e,B.j,0,B.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?V.x5:B.iJ
t=r.Q
s=t?B.lt:D.Ey
s=C.a([new A.eE(C.a([new A.dy("Seasons",n==="seasons",new A.ebh(r),B.xj,B.bs,q),new A.dy("Moon phases",n==="moon",new A.ebi(r),B.ur,B.bs,q),new A.dy(u,!1,new A.ebj(r),v,B.bs,q),new A.dy("Music",t,new A.ebk(r),s,B.bs,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=A.ho(B.bs,D.cMd[B.o.K(B.k.bJ(n*12),12)],"Month",1,0,new A.ebl(r),n)
v=r.z
B.d.v(s,C.a([n,A.ho(B.bs,B.k.aa(v,1)+"\xb0","Tilt",90,0,new A.ebm(r),v)],p))}else{p=r.w
s.push(A.ho(B.bs,""+(B.k.bJ(p*29.5)+1),"Day of month",1,0,new A.ebn(r),p))}p=r.y
s.push(A.ho(B.bs,B.k.aa(p,1)+"x","Speed",4,0.2,new A.ebo(r),p))
return A.jf(B.bs,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.u(s,B.m,q,B.e,B.R,0,B.p))}}
A.bmQ.prototype={
a6(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.a0(),b8=C.N()
b8.r=D.za.gq(0)
b9.bi(new C.ae(0,0,0+b5,0+b6),b8)
w=new C.f0()
w.dX(4)
for(b8=b9.a,v=0;v<70;++v){u=w.ae()
t=w.ae()
s=w.ae()
r=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
r.r=B.c.j(0.2+w.ae()*0.4).gq(0)
q=r.L()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new C.v(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=C.dh(p,n*2,o*2)
t=C.N()
t.b=B.ad
t.c=1
t.r=B.bf.gq(0)
b9.jQ(u,t)
t=C.N()
t.sar(D.dT1.az(0,C.bV(p,34)))
b9.ap(p,22,t)
m=s.r*2*3.141592653589793
l=p.an(0,new C.v(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aE(0,l).ez(0,p.aE(0,l).gcj())
J.bN(b8.save())
b8.translate(l.a,l.b)
s=C.N()
s.r=D.b5G.gq(0)
b9.ap(B.J,k,s)
J.bN(b8.save())
b7=new C.aS(b7.r,B.as,b4,b4,C.a([],x.v))
b7.G(new C.kx(C.bV(B.J,k)))
b9.tj(0,b7)
b7=i.aM(0,k).aM(0,0.35)
s=k*1.1
b6=C.N()
b6.sar(D.dT9.az(0,C.bV(B.J,s)))
b9.ap(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.v(s,b6)
b7=new C.v(-s,-b6).aM(0,k).aM(0,1.7)
b5=h.aM(0,k).aM(0,1.7)
t=C.N()
t.c=2
t.r=B.cL.gq(0)
b9.bQ(b7,b5,t)
t=h.aM(0,k).aM(0,1.7)
b5=C.N()
b5.r=B.cL.gq(0)
b9.ap(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.iR(b4,b4,b4,b4,C.dq(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aKK,b5),B.a6,B.cn,b4,B.eE,B.cm)
f.fq()
f.a6(b9,l.an(0,new C.v(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.N()
r.b=B.ad
r.c=1
r.r=B.bf.gq(0)
b9.ap(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
a0.r=B.aM.j(0.6).gq(0)
a0.c=2
q=a0.L()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=C.N()
r.sar(new C.bR(new C.d5(-0.5,0),1.1,B.w,b4,0,C.a([D.b1S,D.aaX],x.O),D.cEe,b4).az(0,C.bV(p,k)))
b9.ap(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.an(0,new C.v(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.N()
r.r=D.b_B.gq(0)
b9.ap(a1,a2,r)
J.bN(b8.save())
b7=b7.r
r=x.v
d=new C.aS(b7,B.as,b4,b4,C.a([],r))
d.G(new C.kx(C.bV(a1,a2)))
b9.tj(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.N()
a3.r=B.c9.gq(0)
b9.bi(new C.ae(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aE(0,p).ez(0,a1.aE(0,p).gcj())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=D.bWd[a5]
a7=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
a7.r=B.b2.j(0.45).gq(0)
a7.z=B.ji
q=a7.L()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.v(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.N()
b6.r=D.b_x.gq(0)
b9.ap(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bN(b8.save())
b6=new C.aS(b7,B.as,b4,b4,C.a([],r))
b6.G(new C.kx(C.bV(a8,a9)))
b9.tj(0,b6)
s=s.w
b1=new C.aS(b7,B.as,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.G(new C.bc(u,b5))
b6=b2>0
b1.az_(new C.v(u,t+a9),b6,new C.b3(a9,a9))
if(b0<0.5)b6=b2<0
b1.az_(new C.v(u,b5),b6,new C.b3(a9*Math.abs(1-2*b0),a9))
b6=C.N()
b6.r=B.c9.gq(0)
b9.aU(b1,b6)
b8.restore()
b8=C.N()
b8.b=B.ad
b8.c=1
b8.r=B.bf.gq(0)
b9.ap(a8,a9,b8)
b3=C.iR(b4,b4,b4,b4,D.exm,B.a6,B.cn,b4,B.eE,B.cm)
b3.fq()
b3.a6(b9,a8.an(0,new C.v(-b3.b.c/2,a9+6)))}},
aq(d){return!0}}
A.aI7.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bt_.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bp4()}}
A.aIv.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bt5.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpt()}}
A.aJ7.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.btj.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bq6()}}
var z=a.updateTypes(["~()","T(vi)","T(a2i)","T(Bb)","aw<~>()","I(vi,I)","T(B7)","T(Xe)","T(a97)","T(um)","Q(Q,vi)","T(a11)","T(mW)","T(YL)","T(a9V)","I(I)","Ss()","SP()","T4()","Sk()","Ti()","TB()","TD()","St()","TW()","Ua()","TX()","TU()","Uh()","T(nk)","Um()","Su()","TO()","TT()","acx(X,I)","abs(X,I)","~(a1<@,@>)","I(B7,B7)","n(j0)","T(acn)","T(Zs)","T(Bl)","T(a9C)","T(abw)","T(a9l)","I(I,qb)","I(I,Bb)","n(qb)","~(qb,ak<n>,I)","qb?(Bb)","T(qb)","r(n,Zf)","T(O9)","~(zp)","T(a9s)","Q(I?)","Uo()","T(Em)","T(aaJ)","Q(NT)","T5()","~(b7)","T(a83)","Tw()","Sp()","~(ago,n,v,x,Q)","~(n,vi)","a68()","Un(X,bo<Q>,bo<Q>)","Us()","Tc()","Sq()","T3()","TP()","U0()","Ul()","TN()","~(n)","co(a8P)","T(a8O)","Tj()","U9()","Tk()","So()","Tg()","U1()","TY()","TR()","T(NT)","Q(I)"])
A.fdt.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+29}
A.f5g.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+B.d.gJ(d.e.split(". "))+"."},
$S:z+38}
A.faR.prototype={
$1(d){var w
if(!this.a.ajt(d))w=Math.abs(d.CW)>0.002||d.cx>0.05
else w=!1
return w},
$S:z+1}
A.faS.prototype={
$1(d){return d.x},
$S:z+1}
A.fdq.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
A.fdr.prototype={
$1(d){var w
if(!this.a.ajt(d))w=d.cx>0.05||Math.abs(d.CW)>0.002
else w=!1
return w},
$S:z+1}
A.fds.prototype={
$2(d,e){var w=Math.abs(e.CW)
return w>d?w:d},
$S:z+10}
A.dVx.prototype={
$0(){return this.a.ax=!0},
$S:0}
A.dVy.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.A(this.b,this.c))},
$S:0}
A.dVz.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=B.d.gcV(v).Q
v.toString
w.lD(v,B.dU,B.i0)}},
$S:8}
A.dVK.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
B.d.a7(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
A.dVL.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
A.dVG.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
A.dVE.prototype={
$2(d,e){var w=this.a
w.r.push(C.cN(C.dB(0,0,0,d,0,0),new A.dVF(w,this.b,e)))},
$S:1798}
A.dVF.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
A.dVH.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.d.agS(0,u[1],u[2],u[3])
u[4].bE(0,new A.dVC(t))
v.e.m(0,t.a,0)
w.d.m(0,u[0],t)
A.dL(700+w.e*120,"",80,0,0.25,"square")
v.n(new A.dVD(w.a,v,w.f,w.r))},
$S:0}
A.dVC.prototype={
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
A.dVD.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=B.o.D(B.k.bJ(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
A.dVI.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.d.azH(t,u[1],s,u[3])
A.dL(1500,"",45,0,0.25,"tri")
v=w.b
v.n(new A.dVB(w.a,v,w.e,w.f))},
$S:0}
A.dVB.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=B.o.D(B.k.bJ(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
A.dVJ.prototype={
$0(){A.dL(300,"",360,-1.2,0.3,"square")
var w=this.a
w.n(new A.dVA(w,this.b))},
$S:0}
A.dVA.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
A.dVO.prototype={
$0(){var w=this.a
return w.n(new A.dVN(w))},
$S:0}
A.dVN.prototype={
$0(){return this.a.at=!0},
$S:0}
A.dVP.prototype={
$0(){var w=this.a
return w.n(new A.dVM(w))},
$S:0}
A.dVM.prototype={
$0(){return this.a.at=!1},
$S:0}
A.dVQ.prototype={
$0(){var w=this.a
w.f.saR(0,this.b)
w.LR()},
$S:0}
A.dVR.prototype={
$0(){return this.a.W8(this.b)},
$S:0}
A.dVS.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.LR():w.aRm()},
$S:2}
A.dVT.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.LR():w.aRm()},
$S:0}
A.e9V.prototype={
$2(d,e){return d+e},
$S:1799}
A.eae.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.ead(w,d))},
$S:131}
A.ead.prototype={
$0(){var w=C.aQ(J.q(this.b,"unlocked"))
w=w==null?null:B.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
A.eaf.prototype={
$0(){},
$S:0}
A.eag.prototype={
$0(){},
$S:0}
A.e9X.prototype={
$0(){return this.a.n(new A.e9W(this.b,this.c))},
$S:0}
A.e9W.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.e9M.prototype={
$1(d){return this.a.cx===d},
$S:60}
A.e9N.prototype={
$1(d){return this.a.cx=d},
$S:27}
A.e9O.prototype={
$1(d){return this.a.cy===d},
$S:60}
A.e9P.prototype={
$1(d){return this.a.cy=d},
$S:27}
A.e9Q.prototype={
$1(d){return this.a.db===d},
$S:60}
A.e9R.prototype={
$1(d){return this.a.db=d},
$S:27}
A.e9S.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:60}
A.e9T.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.H(0,d)},
$S:27}
A.e9U.prototype={
$0(){var w=this.a
return w.n(w.gat2())},
$S:0}
A.e9K.prototype={
$1(d){return this.a.$1(!0)},
$S:82}
A.e9L.prototype={
$1(d){return this.a.$1(!1)},
$S:152}
A.e9J.prototype={
$1(d){return this.a.$1(!1)},
$S:207}
A.ea7.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.aq(e.b,e.d)
o.ch=n
n=C.b1(p,p,p,new A.bdh(o,p),n)
w=this.b
v=A.bvF("WORLD",w.a,w.c)
u=A.bvF("GRAVITY",C.t(w.b)+" m/s\xb2",B.c)
t=o.x
s=B.k.U(t*100)
t=t<0.25?B.cL:B.bm
t=A.bvF("FUEL",""+s+"%",t)
s=o.r.b
r=B.k.U(s*100)
s=s>D.AG[o.db].d?B.cL:B.c
q=x.p
s=C.a([v,u,t,A.bvF("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(A.bvF("HEIGHT",""+B.k.U(B.k.D(0.86-o.f.b,0,1)*1000)+" m",B.c))
n=C.a([n,C.an(p,C.B(s,B.m,p,B.hx,B.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bxC(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.qt[w].a+".":"You landed on every world!"
v=C.a([new A.fe(B.m3,"Again",new A.ea2(o),B.c,p),new A.fe(B.wV,"Rebuild",new A.ea3(o),B.aM,p)],q)
if(o.d+1<7)v.push(new A.fe(B.jh,"Next world",new A.ea4(o),B.bm,p))
n.push(A.fZS("Perfect landing!",w,B.bm,v))}if(o.as==="crashed")n.push(A.fZS("Crash!",o.at,B.cL,C.a([new A.fe(B.m3,"Try again",new A.ea5(o),B.bm,p),new A.fe(B.wV,"Rebuild",new A.ea6(o),B.aM,p)],q)))
return new C.am(B.V,p,B.aY,B.q,n,p)},
$S:61}
A.ea2.prototype={
$0(){var w=this.a
return w.n(w.gat2())},
$S:0}
A.ea3.prototype={
$0(){var w=this.a
return w.n(new A.ea_(w))},
$S:0}
A.ea_.prototype={
$0(){return this.a.as="ready"},
$S:0}
A.ea4.prototype={
$0(){var w=this.a
return w.n(new A.e9Z(w))},
$S:0}
A.e9Z.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
A.ea5.prototype={
$0(){var w=this.a
return w.n(w.gat2())},
$S:0}
A.ea6.prototype={
$0(){var w=this.a
return w.n(new A.e9Y(w))},
$S:0}
A.e9Y.prototype={
$0(){return this.a.as="ready"},
$S:0}
A.ea8.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.n(new A.ea1(v,w))},
$S:0}
A.ea1.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
A.ea9.prototype={
$1(d){return this.a.y=d},
$S:9}
A.eaa.prototype={
$1(d){return this.a.Q=d},
$S:9}
A.eab.prototype={
$1(d){return this.a.z=d},
$S:9}
A.eac.prototype={
$0(){var w=this.a
return w.n(new A.ea0(w))},
$S:0}
A.ea0.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
A.dxo.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.fVi
if(q==null)q=$.fVi=A.cz2()
w=3
return C.b(C.iA(C.a([q,$.tt().baE("assets/data/three.min.js")],x.aJ),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.k7(0,C.cI(J.q(s,1)))
q.n(new A.dxn(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:52}
A.dxn.prototype={
$0(){return this.a.d=x.F.a(J.q(this.b,0))},
$S:0}
A.dx0.prototype={
$0(){return this.a.bOp(C.aR(J.q(this.b,"group")))},
$S:0}
A.dx1.prototype={
$1(d){return B.a.aT(B.o.fF(B.o.D(B.k.U(d*255),0,255),16),2,"0")},
$S:362}
A.dxp.prototype={
$0(){return A.a67("kick",0.25)},
$S:0}
A.dx2.prototype={
$0(){return this.a.cx=this.b},
$S:0}
A.dx3.prototype={
$1(d){return d.a===this.a},
$S:z+11}
A.dx4.prototype={
$0(){return A.a67("kick",0.5)},
$S:0}
A.dx5.prototype={
$0(){return A.dL(1300+this.a.R8.aB(900),"",40,0,0.2,"square")},
$S:0}
A.dx7.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.ch
if(w===2)w=1
else w=w===1?0:2
u.ch=w}else{w=this.a
v=w.ay
if(v.t(0,u))v.W(0,u)
else{v.H(0,u)
if(w.ch===2)w.ch=1}if(v.a===0&&w.ch===0)w.ch=2
u=w}if(u.cx!=null&&!B.d.bf(u.d.e,new A.dx6(u)))u.cx=null
u.go=0},
$S:0}
A.dx6.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.auz(d)},
$S:z+11}
A.dwY.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
A.dwZ.prototype={
$0(){var w=this.a
return w.n(w.gbYu())},
$S:0}
A.dx_.prototype={
$0(){return this.a.aez(null)},
$S:0}
A.dxe.prototype={
$0(){var w=this.a.as
return w==null?null:w.eM(0,C.E(["t","shot"],x.N,x.z))},
$S:0}
A.dxf.prototype={
$0(){return this.a.crk(this.b.a)},
$S:0}
A.dxg.prototype={
$0(){return this.a.aez(this.b)},
$S:0}
A.dxh.prototype={
$1(d){var w=this.a
return w.n(new A.dxd(w,d))},
$S:6}
A.dxd.prototype={
$0(){return this.a.k3=this.b},
$S:0}
A.dxi.prototype={
$0(){var w=this.a
return w.n(new A.dxc(w,this.b))},
$S:0}
A.dxc.prototype={
$0(){return this.a.CW=this.b},
$S:0}
A.dxj.prototype={
$0(){var w=this.a
return w.n(new A.dxb(w))},
$S:0}
A.dxb.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
A.dxk.prototype={
$0(){var w=this.a
return w.n(new A.dxa(w))},
$S:0}
A.dxa.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eM(0,C.E(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.If},
$S:0}
A.dxl.prototype={
$0(){var w=this.a
return w.n(new A.dx9(w))},
$S:0}
A.dx9.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aTS()
else w.p2=null},
$S:0}
A.dxm.prototype={
$0(){var w=this.a
return w.n(new A.dx8(w))},
$S:0}
A.dx8.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
A.bWm.prototype={
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
A.bWn.prototype={
$1(d){var w=new C.r6([],[]).oR(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:478}
A.f_S.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)},
$S:231}
A.f_T.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)||w.h(d,1)},
$S:231}
A.f_U.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)!==w.h(d,1)},
$S:231}
A.f_Z.prototype={
$1(d){return!J.q(d,0)},
$S:231}
A.f0_.prototype={
$1(d){var w=J.a6(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:231}
A.f00.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:231}
A.dzz.prototype={
$1(d){return this.a.apO(0)},
$S:8}
A.dzd.prototype={
$0(){var w=this.b
return this.a.cx=new C.J(w,C.hF4(),C.U(w).k("J<1,I>")).fG(0)},
$S:0}
A.dzg.prototype={
$1(d){return""+d},
$S:83}
A.dzA.prototype={
$1(d){return d.b==="buzzer"},
$S:z+6}
A.dzb.prototype={
$1(d){return this.a.apO(this.b)},
$S:8}
A.dzc.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.atn(0)
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
p=a1.atm(0,a0,a1.lu(0.82,0.25),0)
o=a1.atm(0,a0,a1.lu(0.82,0.65),0)
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
A.dzh.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.atn(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.m(0,p,new A.B7(p,"switch",new C.v(0.14*q.a,r*q.b),0))}o.m1(0,w.e,o.lu(0.86,0.5))},
$S:0}
A.dz6.prototype={
$1(d){return d.b==="switch"},
$S:z+6}
A.dz7.prototype={
$2(d,e){return B.k.aI(d.c.b,e.c.b)},
$S:z+37}
A.dz8.prototype={
$1(d){return d.b===this.a.e},
$S:z+6}
A.dz9.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
A.dza.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.aa6(this.c)
if(v.ax)A.Aw("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+B.d.gJ(w)
v.CW=!1
if(v.ax)A.dL(140,"",250,0,0.3,"square")}},
$S:0}
A.dzi.prototype={
$0(){},
$S:0}
A.dzj.prototype={
$0(){return B.d.cu(this.a.e,this.b)},
$S:0}
A.dzk.prototype={
$0(){return this.a.cy=null},
$S:0}
A.dzf.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
B.d.bm(w.e,new A.dze(v))
w.cy=null},
$S:0}
A.dze.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
A.dz5.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.m1(0,this.b,new C.v(w.x.a*(0.3+v.ae()*0.4),w.x.b*(0.2+v.ae()*0.6))).a},
$S:0}
A.dzt.prototype={
$0(){var w=this.a
return w.n(new A.dzs(w))},
$S:0}
A.dzs.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
A.dzu.prototype={
$2(d,e){var w=null,v=this.a,u=new C.aq(e.b,e.d)
v.x=u
return C.aJ(B.c3,C.jz(C.b1(w,w,w,new A.b7t(v,w),u),B.q,w),B.z,!1,w,w,w,w,w,w,w,w,new A.dzn(v),w,w,w,new A.dzo(v),new A.dzp(v),new A.dzq(v),w,w,w,w,w,w,w,w,w,w,new A.dzr(v),w,w,w,!1,B.ae)},
$S:33}
A.dzr.prototype={
$1(d){return this.a.bZt(d.b)},
$S:53}
A.dzp.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.c6H(u)
if(t!=null){v.as=t
v.at=u
return}w=v.au5(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aE(0,u)}},
$S:40}
A.dzq.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.v(B.k.D(w.a+u.Q.a,46,u.x.a-46),B.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
A.dzo.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bRX(t.at)
if(w!=null&&w.a!==t.as){v=t.e
B.d.bm(v,new A.dzl(w))
u=t.as
u.toString
v.push(new A.mW(u,w.a,w.b))
C.jD()}}t.z=t.as=null},
$S:36}
A.dzl.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
A.dzn.prototype={
$1(d){return this.a.asl(d.b)},
$S:312}
A.dzv.prototype={
$0(){return this.a.btE(this.b.a)},
$S:0}
A.dzw.prototype={
$0(){return this.a.apO(this.b.a)},
$S:0}
A.dzx.prototype={
$0(){var w=this.a
return w.n(new A.dzm(w))},
$S:0}
A.dzm.prototype={
$0(){var w=this.a
w.atn(0)
w.ay=null},
$S:0}
A.dzy.prototype={
$0(){return this.a.cnf(this.b)},
$S:0}
A.cFP.prototype={
$0(){var w=this,v=null,u=C.iR(v,v,v,v,C.dq(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),B.a6,B.cn,v,B.eE,B.cm)
u.fq()
return u},
$S:328}
A.dEM.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.dEL.prototype={
$0(){return this.a.d=null},
$S:0}
A.dEO.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.bTI()},
$S:118}
A.dEN.prototype={
$0(){return C.a8(this.a,!1).p0()},
$S:0}
A.f0g.prototype={
$0(){return D.dGc},
$S:z+56}
A.f0h.prototype={
$0(){return D.dep},
$S:z+60}
A.f0i.prototype={
$0(){return D.dhG},
$S:z+63}
A.f0t.prototype={
$0(){return D.dbi},
$S:z+64}
A.f0w.prototype={
$0(){return D.dFG},
$S:z+67}
A.f0x.prototype={
$0(){return D.dkO},
$S:z+87}
A.f0y.prototype={
$0(){return D.del},
$S:z+17}
A.f0z.prototype={
$0(){return D.deo},
$S:z+18}
A.f0A.prototype={
$0(){return D.d7t},
$S:z+19}
A.f0B.prototype={
$0(){return D.dgT},
$S:z+20}
A.f0C.prototype={
$0(){return D.diw},
$S:z+21}
A.f0j.prototype={
$0(){return D.diy},
$S:z+22}
A.f0k.prototype={
$0(){return D.ddx},
$S:z+23}
A.f0l.prototype={
$0(){return D.dnx},
$S:z+24}
A.f0m.prototype={
$0(){return D.dFn},
$S:z+25}
A.f0n.prototype={
$0(){return D.dDq},
$S:z+26}
A.f0o.prototype={
$0(){return D.dmc},
$S:z+27}
A.f0p.prototype={
$0(){return D.dFv},
$S:z+28}
A.f0q.prototype={
$0(){return D.ddw},
$S:z+16}
A.f0r.prototype={
$0(){return D.dFF},
$S:z+30}
A.f0s.prototype={
$0(){return D.ddy},
$S:z+31}
A.f0u.prototype={
$0(){return D.diO},
$S:z+32}
A.f0v.prototype={
$0(){return D.dmb},
$S:z+33}
A.eHU.prototype={
$2(d,e){return new A.acx($.bA1()[e],new A.eHT(e,this.a),null)},
$S:z+34}
A.eHT.prototype={
$0(){var w=this.a,v=D.ayo.h(0,$.bA1()[w].a)
$.cad=v==null?"music":v
C.a8(this.b,!1).cr(C.eH(new A.eHR(w),!1,null,x.H))},
$S:0}
A.eHR.prototype={
$1(d){return $.bA1()[this.a].e.$0()},
$S:43}
A.eHV.prototype={
$2(d,e){return new A.abs(D.ari[e],new A.eHS(this.a,e),null)},
$S:z+35}
A.eHS.prototype={
$0(){return this.a.d.$1(D.ari[this.b])},
$S:0}
A.eHA.prototype={
$0(){return this.a.as=!0},
$S:0}
A.eHz.prototype={
$0(){return this.a.as=!1},
$S:0}
A.eHy.prototype={
$1(d){var w=this
return new C.ed(new A.eHx(w.a,w.b,w.c,w.d),null)},
$S:21}
A.eHx.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aG(a2,d,a0).w
a0=C.aG(a2,d,a0).w
w=x.p
v=C.a([D.eRn,B.av,D.eXj,B.ab],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.b3(12,12)
m=new C.b3(12,12)
m=C.a([new C.bE(1,B.bo,C.aK(d,B.U,!1,d,!0,B.q,d,C.aL(),r[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Title",d,I.BU,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,B.c.j(0.06),d,d,d,d,d,d,d,new C.b2(4,new C.bv(n,n,n,n),B.W),!0,d,d,d,d),B.z,!0,d,!0,d,!1,d,B.ag,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,B.ix,!0,B.a6,d,B.am,d,d,d,d),d),B.aa,new C.bE(2,B.bo,C.aK(d,B.U,!1,d,!0,B.q,d,C.aL(),q[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Small line",d,I.BU,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,B.c.j(0.06),d,d,d,d,d,d,d,new C.b2(4,new C.bv(m,m,m,m),B.W),!0,d,d,d,d),B.z,!0,d,!0,d,!1,d,B.ag,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,B.ix,!0,B.a6,d,B.am,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.d_6[l]
j=new C.b3(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.z(t.a.c.d,s)
t.w=i}h=B.d.gJ(i).j(0.3)}else h=B.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.z(t.a.c.d,s)
t.w=i}g=B.d.gJ(i)}else g=B.bG
f=new C.ay(g,u[p].A(0,k)?1.8:1,B.r,-1)
n.push(C.aJ(d,C.p(d,C.V(k,u[p].A(0,k)?B.c:B.aQ,d,d,d,22),B.h,d,d,new C.o(h,d,new C.c2(f,f,f,f),new C.bv(j,j,j,j),d,d,B.n),d,d,d,B.hi,d,d,d,42),B.z,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.eHv(a3,p,u,k),d,d,d,d,d,d,!1,B.ae))}B.d.v(v,C.a([new C.w("SLAB "+o,d,D.eHJ,d,d,d,d,d,d,d,d,d),B.ar,new C.cC(B.aZ,B.e,B.j,B.m,d,B.p,d,0,m,d),B.P,new C.a3(d,44,C.cL(n,d,d,d,d,B.aZ,!1),d),B.ay],w))}v.push(C.bI(B.C0,new A.eHw(t,r,q,u,a2),d))
return new C.C(new C.M(0,0,0,a1.f.d),C.br(!0,new C.d1(new C.aX(0,1/0,0,a0.a.b*0.86),C.cL(v,d,A1.DJ,d,d,B.ai,!0),d),!0,!1,B.ah,!0,!0),d)},
$S:105}
A.eHv.prototype={
$0(){var w=this
return w.a.$1(new A.eHu(w.b,w.c,w.d))},
$S:0}
A.eHu.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
A.eHw.prototype={
$0(){var w=this,v=w.a
v.n(new A.eHt(v,w.b,w.c,w.d))
C.a8(w.e,!1).M(null)},
$S:0}
A.eHt.prototype={
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
A.eHI.prototype={
$0(){var w=this.a
return w.n(new A.eHH(w))},
$S:0}
A.eHH.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
A.eHJ.prototype={
$0(){return A.qi(this.b,this.a.f,"scene")},
$S:0}
A.eHK.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.ap(B.d.gJ(u),B.d.gai(u),0.4)
u.toString
w=this.a.gXm().x
w===$&&C.c()
return C.bT(v,new C.o(v,v,v,v,v,new C.bR(D.aO9,0.9,B.w,v,0,C.a([u.j(0.06+0.03*w),B.bW],x.O),v,v),B.n),B.b9)},
$S:284}
A.eHL.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.at(C.eX(B.A,C.c4(new C.h2(C.a([u.gt6(),u.gXm()],x.dS)),new A.eHG(u,this.b,v),w),B.h,B.e8),w,w,w)},
$S:246}
A.eHG.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gt6().x
r===$&&C.c()
w=r<0.9?1:1-A.bn7(r,0.9,0.98)
v=s.gXm().x
v===$&&C.c()
u=B.dG.av(0,v)
switch(s.gato().a){case 0:s=s.bsS(t.b,r,u,t.c)
break
case 1:s=s.bIK(t.b,r,u,t.c)
break
case 2:s=s.crM(t.b,r,u,t.c)
break
case 3:s=s.bvI(t.b,r,u,t.c)
break
case 4:s=s.byP(t.b,r,u,t.c)
break
case 5:s=s.by2(t.b,r,u,t.c)
break
default:s=null}return C.d7(s,w)},
$S:213}
A.eHM.prototype={
$2(d,e){var w=C.asw(this.b),v=this.c.d,u=C.ap(B.d.gJ(v),B.d.gai(v),0.4)
u.toString
v=C.ap(B.d.gJ(v),B.d.gai(v),0.4)
v.toString
v=w.czW(u,B.bG,v,3.5)
u=this.a
w=u.gt6().x
w===$&&C.c()
return C.a7Q(C.ma(null,null,null,1,0,new A.eHF(u),B.k.D(w,0,1)),v)},
$S:1803}
A.eHF.prototype={
$1(d){var w=this.a
w.gt6().sq(0,d)
if(w.as)w.n(new A.eHB(w))},
$S:6}
A.eHB.prototype={
$0(){return this.a.as=!1},
$S:0}
A.eHN.prototype={
$0(){var w=this.a
w.gt6().sq(0,0)
w.adj()},
$S:0}
A.eHO.prototype={
$1(d){var w=this.a
w.n(new A.eHE(w,d))
if(w.as)w.adj()},
$S:6}
A.eHE.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.eHP.prototype={
$0(){var w=this.a
w.n(new A.eHD(w,this.b))
w.gt6().sq(0,0)
if(w.as)w.adj()},
$S:0}
A.eHD.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
A.eHQ.prototype={
$0(){var w=this.a
return w.n(new A.eHC(w,this.b))},
$S:0}
A.eHC.prototype={
$0(){var w=C.z(this.b,x.G)
return this.a.w=w},
$S:0}
A.eHr.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:1804}
A.eHs.prototype={
$1(d){return d.b},
$S:1805}
A.d9k.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+3}
A.d9l.prototype={
$1(d){return d.b===this.a},
$S:z+7}
A.d9h.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+3}
A.d9i.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.d9j.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.d9m.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+7}
A.d9n.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+7}
A.d9o.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.d9p.prototype={
$1(d){return d.d<this.a.ax},
$S:z+39}
A.d9q.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+40}
A.d9r.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+41}
A.d9s.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+42}
A.d9t.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+43}
A.d9u.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+44}
A.e9f.prototype={
$0(){return this.a.ax=!0},
$S:0}
A.e94.prototype={
$0(){return this.a.ax=!1},
$S:0}
A.e96.prototype={
$2(d,e){return d+e.d*7+B.o.K(B.a.gV(e.b),97)},
$S:z+45}
A.e97.prototype={
$2(d,e){return d+B.o.K(B.a.gV(e.a),31)+B.o.K(B.a.gV(e.b),17)},
$S:z+46}
A.e9a.prototype={
$1(d){var w=D.m8.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[B.o.K(d.d,u)]+")":t},
$S:z+47}
A.e9b.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.U(q),o=x.dg,n=C.z(new C.e3(new C.cS(new C.a5(q,new A.e9c(d),p.k("a5<1>")),new A.e9d(r),p.k("cS<1,qb?>")),o),o.k("G.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(B.d.aG(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.K)(n),++v){u=n[v]
if(w.length>=6)return
t=C.z(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+48}
A.e9c.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
A.e9d.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+49}
A.e98.prototype={
$1(d){return D.m8.h(0,d.b).c===D.vA},
$S:z+50}
A.e99.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
A.e9F.prototype={
$1(d){var w=this.a,v=d.a,u=B.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.a5e(0,u)
w.cLM(B.o.aj(v,1000))},
$S:8}
A.e9e.prototype={
$0(){},
$S:0}
A.e90.prototype={
$0(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ax(),$async$$0)
case 6:e.ao("String","ngmy_core_reaction_lab_v1",s.a.d.ac())
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
A.e9h.prototype={
$1(d){var w=null,v=this.a.b
return C.br(!0,C.u(C.a([B.P,C.dK(!1,w,w,w,!0,w,w,w,!0,w,C.V(D.m8.h(0,v).b,D.m8.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.f6B,w,C.d(D.m8.h(0,v).a,w,w,w,w,w,w,B.hb,w,w,w),w,w,w),C.dK(!1,w,w,w,!0,w,w,w,!0,w,S.aip,w,w,w,w,new A.e9g(d),!1,w,w,w,w,w,w,w,D.eZW,w,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),!0,!1,B.ah,!0,!0)},
$S:34}
A.e9g.prototype={
$0(){C.a8(this.a,!1).M(!0)
return null},
$S:0}
A.e9j.prototype={
$1(d){var w,v,u=null,t=C.aG(d,u,x.m).w,s=C.a([D.dNf],x.p)
for(w=0;w<6;++w){v=D.arA[w]
s.push(C.dK(!1,u,u,u,!0,u,u,u,!0,u,D.bCE,u,u,u,u,new A.e9i(d,v),!1,u,u,u,u,u,new C.w(v.b,u,B.l7,u,u,u,u,u,u,u,u,u),u,new C.w(v.a,u,B.hb,u,u,u,u,u,u,u,u,u),u,u,u))}return C.br(!0,new C.d1(new C.aX(0,1/0,0,t.a.b*0.7),C.cL(s,u,D.bkm,u,u,B.ai,!0),u),!0,!1,B.ah,!0,!0)},
$S:34}
A.e9i.prototype={
$0(){C.a8(this.a,!1).M(this.b)
return null},
$S:0}
A.e93.prototype={
$1(d){var w=null
return C.eo(C.a([C.bG(!1,B.df,w,w,!0,w,w,new A.e91(d),w,w),C.bG(!1,B.C_,w,w,!0,w,w,new A.e92(d),w,w)],x.p),w,w,D.rq,D.eXt,w,w,w,w,D.f_c,w)},
$S:20}
A.e91.prototype={
$0(){C.a8(this.a,!1).M(!1)
return null},
$S:0}
A.e92.prototype={
$0(){C.a8(this.a,!1).M(!0)
return null},
$S:0}
A.e9D.prototype={
$0(){var w=this.a
return w.n(new A.e9C(w))},
$S:0}
A.e9C.prototype={
$0(){return this.a.r=!1},
$S:0}
A.e9E.prototype={
$2(d,e){var w,v,u,t=null,s=new C.aq(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.lT(new A.e9t(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.aXo:t
v=C.a([C.b1(u,t,t,new A.bdf(w,v,new A.e9u(r),new A.e9v(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.an(t,C.e1(C.c4(w,new A.e9w(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bAs())
return C.aJ(B.c3,C.jz(new C.am(B.V,t,B.aY,B.q,v,t),B.q,t),B.z,!1,t,t,t,t,t,t,t,t,new A.e9x(r),t,r.gc7Y(),t,new A.e9y(r),new A.e9z(r),new A.e9A(r),t,t,t,t,t,t,t,t,t,t,new A.e9B(r),t,t,t,!1,B.ae)},
$S:33}
A.e9t.prototype={
$0(){return this.a.a9d(this.b)},
$S:0}
A.e9B.prototype={
$1(d){return this.a.cpF(d.b)},
$S:53}
A.e9z.prototype={
$1(d){return this.a.c7Z(d.b)},
$S:40}
A.e9A.prototype={
$1(d){return this.a.c8_(d.b)},
$S:18}
A.e9y.prototype={
$1(d){return this.a.aWO()},
$S:36}
A.e9x.prototype={
$1(d){return this.a.a9T(d.b)},
$S:312}
A.e9u.prototype={
$0(){return this.a.z},
$S:646}
A.e9v.prototype={
$0(){return this.a.Q},
$S:708}
A.e9w.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bEG()
if(p.length===0)return B.bE
w=B.x.j(0.55)
v=C.m(14)
u=C.H(B.bG,B.r,1)
t=C.a([D.eVb,B.d5],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.K)(p),++r)t.push(new C.w(p[r],q,D.eGy,q,q,q,q,B.a2,q,2,q,q))
return C.p(q,C.u(t,B.F,q,B.e,B.R,0,B.p),B.h,q,q,new C.o(w,q,u,v,q,q,B.n),q,q,q,q,B.h4,q,q,q)},
$S:59}
A.e95.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.m(12),t=C.H(e.j(0.6),B.r,1),s=x.p
return new C.C(B.dZ,C.B(C.a([C.p(w,C.V(d,e,w,w,w,21),B.h,w,w,new C.o(v,w,t,u,w,w,B.n),w,38,w,w,w,w,w,38),B.bb,C.D(C.u(C.a([C.d(f,w,w,w,w,w,w,T.Hf,w,w,w),B.bA,C.d(g,w,w,w,w,w,w,D.aKa,w,w,w)],s),B.F,w,B.e,B.j,0,B.p),1)],s),B.F,w,B.e,B.j,0,w,w),w)},
$S:1807}
A.e9p.prototype={
$0(){var w=this.a.c
w.toString
return C.a8(w,!1).p0()},
$S:0}
A.e9q.prototype={
$0(){var w=this.a
return w.n(new A.e9o(w))},
$S:0}
A.e9o.prototype={
$0(){return this.a.ax=!0},
$S:0}
A.e9r.prototype={
$0(){var w=this.a
return w.n(new A.e9n(w))},
$S:0}
A.e9n.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
A.e9s.prototype={
$0(){var w=this.a
return w.n(new A.e9m(w))},
$S:0}
A.e9m.prototype={
$0(){return this.a.r=!0},
$S:0}
A.e9l.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.m8.gdH(D.m8),w=w.gag(w);w.C();){v=w.gT(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,B.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,B.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.K)(p),++r)u.push(s.ckH(p[r]))
return new C.C(F.ac5,C.u(C.a([new C.C(O.adL,w,q),C.B(u,B.m,q,B.e,B.j,0,q,q)],v),B.F,q,B.e,B.j,0,B.p),q)},
$S:z+51}
A.e9k.prototype={
$0(){return this.a.bZy(this.b)},
$S:0}
A.d9g.prototype={
$0(){var w=this,v=null,u=C.iR(v,v,v,v,C.dq(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),B.a6,B.cn,v,B.eE,B.cm)
u.fq()
return u},
$S:328}
A.ejq.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=B.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=B.o.aj(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.v(s.a+q*n,s.b+r*n)
t.b=new C.v(q*v,r*v)}B.d.bm(o,new A.ejo(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.n(new A.ejp())},
$S:8}
A.ejo.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+52}
A.ejp.prototype={
$0(){},
$S:0}
A.ej1.prototype={
$0(){},
$S:0}
A.ej0.prototype={
$0(){},
$S:0}
A.eja.prototype={
$0(){return A.qi(this.b,this.a.d,"spark-painter")},
$S:0}
A.ejc.prototype={
$1(d){return this.a.aUf(0,d.b)},
$S:40}
A.ejg.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||B.d.gai(w).aE(0,u).gcj()>2.5}else w=!1
if(w)t.a.push(u)
v.aNI(u)
v.c1t(u)
return null},
$S:18}
A.ejb.prototype={
$1(d){return this.a.aUe()},
$S:36}
A.ejh.prototype={
$1(d){return this.a.aUf(0,d.b)},
$S:23}
A.eji.prototype={
$1(d){return this.a.aUe()},
$S:53}
A.ejj.prototype={
$0(){var w=this.a
return w.n(new A.ej9(w,this.b))},
$S:0}
A.ej9.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
A.ejk.prototype={
$0(){var w=this.a
return w.n(new A.ej8(w))},
$S:0}
A.ej8.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.ejl.prototype={
$0(){var w=this.a
return w.n(new A.ej7(w,this.b))},
$S:0}
A.ej7.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.ejm.prototype={
$1(d){var w=this.a
return w.n(new A.ej6(w,d))},
$S:6}
A.ej6.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.ejn.prototype={
$0(){var w=this.a
return w.n(new A.ej5(w))},
$S:0}
A.ej5.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
A.ejd.prototype={
$0(){var w=this.a
return w.n(new A.ej4(w))},
$S:0}
A.ej4.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
A.eje.prototype={
$0(){var w=this.a
return w.n(new A.ej3(w))},
$S:0}
A.ej3.prototype={
$0(){var w=this.a
B.d.a7(w.e)
B.d.a7(w.f)},
$S:0}
A.ejf.prototype={
$0(){var w=this.a
return w.n(new A.ej2(w,this.b))},
$S:0}
A.ej2.prototype={
$0(){return this.a.at=this.b},
$S:0}
A.eq_.prototype={
$0(){return A.qi(this.b,this.a.d,"title")},
$S:0}
A.eq0.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gHo().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.bTR(v[t],t,s,q,u))
return new C.C(B.fz,C.c8(B.fE,w,B.qY,0,0),null)},
$S:681}
A.eq1.prototype={
$1(d){return this.a.n(new A.epZ())},
$S:2}
A.epZ.prototype={
$0(){},
$S:0}
A.eq2.prototype={
$0(){var w=this.a
w.n(new A.epY(w,this.b))
w=w.gHo()
w.ie(0,0)
w.cF(0)},
$S:0}
A.epY.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
A.eq3.prototype={
$0(){var w=this.a
return w.n(new A.epX(w,this.b))},
$S:0}
A.epX.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eq4.prototype={
$0(){var w=this.a
return w.n(new A.epW(w))},
$S:0}
A.epW.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
A.eq5.prototype={
$0(){var w=this.a
return w.n(new A.epV(w,this.b))},
$S:0}
A.epV.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.eq6.prototype={
$0(){var w=this.a.gHo()
w.ie(0,0)
w.cF(0)},
$S:0}
A.eq7.prototype={
$1(d){var w=this.a
return w.n(new A.epU(w,d))},
$S:6}
A.epU.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.e6f.prototype={
$1(d){return d.a.aE(0,this.a).gcj()<16},
$S:z+13}
A.e6g.prototype={
$1(d){var w=this.b
return d.a.aE(0,w).gcj()<16||d.a.aE(0,w).gcj()>this.a.r.gajA()*2.2},
$S:z+13}
A.e63.prototype={
$0(){return A.qi(this.b,this.a.d,"orbits")},
$S:0}
A.e64.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.aq(e.b,e.d)
q.r=p
w=q.gab2()
v=q.w
u=q.as
t=q.at
s=u==null?B.a_k:q.cbv(u,q.gaRP())
return new C.en(C.aJ(B.c3,C.b1(r,r,r,new A.bhx(q.e,w,v,u,t,s,r),p),B.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,new A.e60(q),new A.e61(q),new A.e62(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,B.ae),q.d)},
$S:199}
A.e61.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:40}
A.e62.prototype={
$1(d){return this.a.at=d.b},
$S:18}
A.e60.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aE(0,w).gcj()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new A.YL(u,v.gaRP(),v.Q,v.aYf(),C.a([],x.g)))
C.jD()
if(v.ax)A.dL(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:36}
A.e65.prototype={
$1(d){var w=this.a
return w.n(new A.e6_(w,d))},
$S:6}
A.e6_.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.e67.prototype={
$1(d){var w=this.a
return w.n(new A.e5Z(w,d))},
$S:6}
A.e5Z.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.e68.prototype={
$1(d){var w=this.a
return w.n(new A.e5Y(w,d))},
$S:6}
A.e5Y.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.e69.prototype={
$0(){var w=this.a
return w.n(new A.e5X(w))},
$S:0}
A.e5X.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
A.e6a.prototype={
$0(){var w=this.a
return w.n(new A.e5W(w))},
$S:0}
A.e5W.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
A.e6b.prototype={
$0(){var w=this.a
return w.n(new A.e5V(w))},
$S:0}
A.e5V.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e6c.prototype={
$0(){var w=this.a
return w.n(w.gcmV())},
$S:0}
A.e6d.prototype={
$0(){var w=this.a
return w.n(w.gbAG())},
$S:0}
A.e6e.prototype={
$0(){var w=this.a
return w.n(new A.e5U(w))},
$S:0}
A.e5U.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.ae()
s=w.r
w.ao8(50+t*(Math.min(s.a,s.b)/2-70),v.ae()*3.141592653589793*2,0.7+v.ae()*0.5,v.he())}},
$S:0}
A.e66.prototype={
$0(){var w=this.a
return w.n(B.d.gqN(w.e))},
$S:0}
A.epr.prototype={
$1(d){return this.a.fE$-d.b>6000},
$S:710}
A.eps.prototype={
$1(d){var w=this.a.e
return new C.a5(w,new A.epq(d),C.U(w).k("a5<1>")).gI(0)>=3},
$S:710}
A.epq.prototype={
$1(d){return d.a.aE(0,this.a.a).gcj()<14},
$S:z+54}
A.epg.prototype={
$0(){return A.qi(this.b,this.a.d,"swarm")},
$S:0}
A.eph.prototype={
$2(d,e){var w=null,v=this.a,u=new C.aq(e.b,e.d)
v.w=u
return new C.en(C.aJ(B.c3,C.b1(w,w,w,new A.boS(v.e,v.f,v.ax,v.at,v.ay,v.fE$,w),u),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new A.epd(v),new A.epe(v),new A.epf(v),w,w,w,w,w,w,w,w,new A.ep5(v),new A.ep6(v),new A.ep7(v),w,w,w,!1,B.ae),v.d)},
$S:199}
A.epe.prototype={
$1(d){return this.a.ay=d.b},
$S:40}
A.epf.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
A.epd.prototype={
$1(d){return this.a.ay=null},
$S:36}
A.ep6.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.A(v,w.fE$))
if(w.ch)A.dL(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)A.l0("flute",7,500,0.3)},
$S:23}
A.ep7.prototype={
$1(d){return this.a.ay=null},
$S:53}
A.ep5.prototype={
$0(){return this.a.ay=null},
$S:0}
A.epi.prototype={
$0(){var w=this.a
return w.n(new A.epc(w,this.b))},
$S:0}
A.epc.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
A.epj.prototype={
$0(){var w=this.a
return w.n(new A.epb(w,this.b))},
$S:0}
A.epb.prototype={
$0(){var w=this.a
w.ax=this.b.a
B.d.a7(w.e)},
$S:0}
A.epk.prototype={
$0(){var w=this.a
return w.n(new A.epa(w))},
$S:0}
A.epa.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
A.epl.prototype={
$1(d){var w=this.a
return w.n(new A.ep9(w,d))},
$S:6}
A.ep9.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.epm.prototype={
$1(d){var w=this.a
return w.n(new A.ep8(w,d))},
$S:6}
A.ep8.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.epn.prototype={
$1(d){var w=this.a
return w.n(new A.ep4(w,d))},
$S:6}
A.ep4.prototype={
$0(){return this.a.z=this.b},
$S:0}
A.epo.prototype={
$1(d){var w=this.a
return w.n(new A.ep3(w,d))},
$S:6}
A.ep3.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.epp.prototype={
$1(d){var w=this.a
return w.n(new A.ep2(w,d))},
$S:6}
A.ep2.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.dyI.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new A.dyH(w,d))},
$S:131}
A.dyH.prototype={
$0(){var w=this.a,v=this.b,u=J.a6(v),t=C.aQ(u.h(v,"unlocked"))
t=t==null?null:B.k.N(t)
w.w=B.o.D(t==null?1:t,1,100)
t=C.aQ(u.h(v,"level"))
t=t==null?null:B.k.N(t)
if(t==null)t=w.w
w.r=B.o.D(t,1,w.w)
t=C.S(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.jk(v==null?B.uX:v)
v=v.gag(v)
while(v.C()){u=v.gT(v)
t.m(0,C.t(u.a),B.k.N(C.f9(u.b)))}w.x=t
w.Q=!0
B.d.a7(w.d)},
$S:0}
A.dyJ.prototype={
$1(d){return d.d!=null},
$S:z+14}
A.dyK.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Xn(w)>0},
$S:z+14}
A.dyy.prototype={
$0(){var w=this.a
w.r=B.o.D(this.b,1,w.w)
w.awn()},
$S:0}
A.dyB.prototype={
$1(d){var w=null,v=C.m(22),u=this.a
return C.ew(w,D.aaj,new C.C(B.bB,new C.a3(340,480,C.u(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,B.j7,w,w,w),B.T,C.D(C.ig(!0,w,w,B.z,K.aIb,new A.dyA(u,d),100,w,w,B.ai,!1),1)],x.p),B.m,w,B.e,B.j,0,B.p),w),w),w,w,w,w,B.cX,w,new C.b5(v,B.W),w)},
$S:46}
A.dyA.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new A.dyz(this.b,r):s
v=C.m(12)
if(p)q=r===q.r?B.c8:B.c.j(0.1)
else q=B.c.j(0.03)
u=C.H(p?B.bf:B.du,B.r,1)
o=p?o:"\ud83d\udd12"
t=p?B.c:B.j_
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(B.a.aM("\u2605",n)+B.a.aM("\u2606",3-n),s,s,s,s,s,s,D.eK9,s,s,s))
return C.aJ(s,C.p(s,C.u(o,B.m,s,B.b6,B.j,0,B.p),B.h,s,s,new C.o(q,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,B.ae)},
$S:76}
A.dyz.prototype={
$0(){C.a8(this.a,!1).M(this.b)
return null},
$S:0}
A.dyF.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.aq(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gaa9()
o=C.b1(q,q,q,new A.b7a(p.d,w,v,p.gbZF(),q),o)
v=p.bRA("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gGR()
t=p.as>=p.gGR()?B.bm:B.c
s=this.b
r=x.p
s=C.a([o,C.an(q,C.B(C.a([v,p.arC("GOAL",""+w+" / "+u,t),p.arC("STARS",B.a.aM("\u2605",s)+B.a.aM("\u2606",3-s),B.aM)],r),B.m,q,B.hx,B.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(B.lK)
if(p.Q&&!p.y)s.push(D.aNS)
if(p.z){o=C.m(24)
w=this.c
v=C.H((w?B.bm:B.cL).j(0.6),B.r,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?B.bm:B.cL,q,q,q,q,q,q,q,q,22,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.ar,C.d("You blasted "+p.as+" dots. The goal was "+p.gGR()+".",q,q,q,q,q,q,B.hn,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(B.a.aM("\u2605",t==null?1:t),q,q,q,q,q,q,D.eB1,q,q,q))}u.push(B.ay)
t=C.a([new A.fe(B.m3,"Try again",new A.dyC(p),B.c,q)],r)
if(w&&p.r<100)t.push(new A.fe(B.jh,"Next level",new A.dyD(p),B.bm,q))
u.push(C.B(t,B.m,q,B.e,B.R,0,q,q))
s.push(C.at(C.p(q,C.u(u,B.m,q,B.e,B.R,0,B.p),B.h,q,q,new C.o(D.Te,q,v,o,q,q,B.n),q,q,q,q,B.a8,q,q,q),q,q,q))}return C.aJ(B.c3,new C.am(B.V,q,B.aY,B.q,s,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.dyE(p),q,q,q,q,!1,B.ae)},
$S:33}
A.dyE.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fE$
A.dL(180,"",200,1,0.4,"sine")
C.j7()},
$S:23}
A.dyC.prototype={
$0(){var w=this.a
return w.n(w.gb_S())},
$S:0}
A.dyD.prototype={
$0(){var w=this.a
return w.aUg(w.r+1)},
$S:0}
A.dyG.prototype={
$0(){var w=this.a
return w.n(w.gb_S())},
$S:0}
A.cFm.prototype={
$3(d,e,f){var w,v
if(e<=0)return
w=this.a
$.a0()
v=C.N()
v.r=f.j(0.18).gq(0)
w.ap(d,e,v)
v=C.N()
v.b=B.ad
v.c=3
v.r=f.j(0.9).gq(0)
w.ap(d,e,v)
v=C.N()
v.r=f.j(0.25).gq(0)
v.z=B.m9
w.ap(d,e*0.5,v)},
$S:711}
A.e1J.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcFn()?this.a.cj9(w,v,d.b):w.aE(0,v).gcj())<24},
$S:z+57}
A.e27.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+58}
A.e1X.prototype={
$0(){var w=this.a
return w.n(new A.e1O(w))},
$S:0}
A.e1O.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
A.e1Y.prototype={
$0(){return A.qi(this.b,this.a.d,"marble-music")},
$S:0}
A.e1Z.prototype={
$2(d,e){var w=null,v=this.a,u=new C.aq(e.b,e.d)
v.w=u
return new C.en(C.aJ(B.c3,C.b1(w,w,w,new A.be9(v.e,v.f,v.at,v.ax,v.fE$,w),u),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new A.e1U(v),new A.e1V(v),new A.e1W(v),w,w,w,w,w,w,w,w,w,w,new A.e1N(v),w,w,w,!1,B.ae),v.d)},
$S:199}
A.e1N.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.Y5(w)
u.e.push(new A.Em(w,w,v,u.aLs(v)))
if(u.ay)A.l0(u.z,v+12,700,0.5)}if(u.x==="erase")u.aNY(d.b)},
$S:53}
A.e1V.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:40}
A.e1W.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aNY(d.b)},
$S:18}
A.e1U.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aE(0,w).gcj()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.Y5(t.an(0,w).ez(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new A.Em(w,t,v,u.aLs(v)))
if(u.ay)A.l0(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:36}
A.e2_.prototype={
$0(){var w=this.a
return w.n(new A.e1T(w,this.b))},
$S:0}
A.e1T.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
A.e20.prototype={
$0(){var w=this.a
return w.n(new A.e1S(w,this.b))},
$S:0}
A.e1S.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.e21.prototype={
$0(){var w=this.a
return w.n(new A.e1R(w,this.b))},
$S:0}
A.e1R.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
A.e22.prototype={
$1(d){var w=this.a
return w.n(new A.e1Q(w,d))},
$S:6}
A.e1Q.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.e23.prototype={
$0(){var w=this.a
return w.n(new A.e1P(w))},
$S:0}
A.e1P.prototype={
$0(){return this.a.auW("stairs")},
$S:0}
A.e24.prototype={
$0(){var w=this.a
return w.n(new A.e1M(w))},
$S:0}
A.e1M.prototype={
$0(){return this.a.auW("pinball")},
$S:0}
A.e25.prototype={
$0(){var w=this.a
return w.n(new A.e1L(w))},
$S:0}
A.e1L.prototype={
$0(){return this.a.auW("random")},
$S:0}
A.e26.prototype={
$0(){var w=this.a
return w.n(new A.e1K(w))},
$S:0}
A.e1K.prototype={
$0(){var w=this.a
B.d.a7(w.e)
B.d.a7(w.f)},
$S:0}
A.e5D.prototype={
$0(){return B.d.W(this.a.e,this.b)},
$S:0}
A.e5E.prototype={
$0(){var w=this.b,v=new A.abd(this.a.a,this.c)
v.c=w.fE$
return w.e.push(v)},
$S:0}
A.e5L.prototype={
$0(){var w=this.a
return w.n(new A.e5K(w))},
$S:0}
A.e5K.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
A.e5M.prototype={
$0(){return A.qi(this.b,this.a.d,"orbit-sequencer")},
$S:0}
A.e5N.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.aq(e.b,e.d)
if(!u.f){u.f=!0
u.aMN()}w=u.w
return new C.en(C.aJ(B.c3,C.b1(v,v,v,new A.bhy(u.e,u.gaUi(),6,u.gcdw(),u.gcjA(),u.fE$,v),w),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.e5J(u),v,v,v,!1,B.ae),u.d)},
$S:199}
A.e5J.prototype={
$1(d){return this.a.bZH(d.b)},
$S:53}
A.e5O.prototype={
$1(d){var w=this.a
return w.n(new A.e5I(w,d))},
$S:6}
A.e5I.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.e5P.prototype={
$0(){var w=this.a
return w.n(new A.e5H(w,this.b))},
$S:0}
A.e5H.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.e5Q.prototype={
$0(){var w=this.a
return w.n(new A.e5G(w,this.b))},
$S:0}
A.e5G.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
A.e5R.prototype={
$0(){var w=this.a
return w.n(w.gbEC())},
$S:0}
A.e5S.prototype={
$0(){var w=this.a
return w.n(new A.e5F(w))},
$S:0}
A.e5F.prototype={
$0(){var w,v=this.a,u=v.e
B.d.a7(u)
for(v=v.r,w=0;w<9;++w)u.push(new A.abd(v.aB(6),v.ae()))},
$S:0}
A.e5T.prototype={
$0(){var w=this.a
return w.n(B.d.gqN(w.e))},
$S:0}
A.fdK.prototype={
$2(d,e){var w=B.o.aj(d,100),v=B.o.K(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:132}
A.e57.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new A.e56(w,d))},
$S:131}
A.e56.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aV(v==null?B.cO:v)
while(v.C())w.push(B.k.N(C.f9(v.gT(v))))
return this.a.x.v(0,w)},
$S:0}
A.e4U.prototype={
$2(d,e){var w=this.b
if(B.o.aj(d,100)===w||B.o.K(d,100)===w)this.a.a+=e},
$S:132}
A.e4O.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new A.b63(w.b,new C.v(w.c*(0.2+0.6*v.ae()),w.e*(0.2+0.6*v.ae()))))},
$S:0}
A.e4P.prototype={
$0(){var w=this.a
B.d.a7(w.e)
w.f.a7(0)
w.r=null},
$S:0}
A.e4T.prototype={
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
p=D.uW.h(0,v[u].a).a
o=w.agr(u)
v=D.uW.h(0,v[t].a).a
n=w.agr(t)
if(q<=p-o+r&&q<=v-n+r){m.m(0,s,q)
A.vc("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaUo()&&w.x.H(0,w.d)){A.vc("zap",12,300,0.5)
m=w.x
m=C.z(m,C.a2(m).k("ck.E"))
A.v9("molecule_maker",C.E(["done",m],x.N,x.z))}}}},
$S:0}
A.e4S.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a2(t).k("cu<1>"),r=this.b,q=s.k("a5<G.E>"),p=C.z(new C.a5(new C.cu(t,s),new A.e4Q(r),q),q.k("G.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.K)(p),++w)t.W(0,p[w])
s=x.S
v=C.S(s,s)
t.bE(0,new A.e4R(r,v))
t.a7(0)
t.v(0,v)
B.d.cu(u.e,r)
u.r=null},
$S:0}
A.e4Q.prototype={
$1(d){var w=this.a
return B.o.aj(d,100)===w||B.o.K(d,100)===w},
$S:60}
A.e4R.prototype={
$2(d,e){var w=B.o.aj(d,100),v=B.o.K(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.m(0,w*100+v,e)},
$S:132}
A.e51.prototype={
$1(d){return""+d.b+" "+D.uW.h(0,d.a).c.toLowerCase()},
$S:468}
A.e52.prototype={
$0(){var w=this.a
return w.n(new A.e50(w))},
$S:0}
A.e50.prototype={
$0(){var w=this.a;++w.d
w.att(0)},
$S:0}
A.e53.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.aq(e.b,e.d)
return C.aJ(B.c3,C.b1(w,w,w,new A.beQ(v.e,v.f,v.r,v.gctR(),w),B.ff),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new A.e4X(v),new A.e4Y(v),new A.e4Z(v,e),w,w,w,w,w,w,w,w,w,w,new A.e5_(v),w,w,w,!1,B.ae)},
$S:33}
A.e5_.prototype={
$1(d){return this.a.c_3(d.b)},
$S:53}
A.e4Y.prototype={
$1(d){var w=this.a
return w.w=w.aUp(d.b)},
$S:40}
A.e4Z.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.n(new A.e4V(w,v,d,this.b))},
$S:18}
A.e4V.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.v(B.k.D(t.b.a+s.a,26,r.b-26),B.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
A.e4X.prototype={
$1(d){return this.a.w=null},
$S:36}
A.e54.prototype={
$0(){var w=this.a
return w.n(new A.e4W(w,this.b))},
$S:0}
A.e4W.prototype={
$0(){var w=this.a
w.d=this.b
w.att(0)},
$S:0}
A.e55.prototype={
$0(){return this.a.bZY(0,this.b.a)},
$S:0}
A.dhn.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[B.o.aj(d,100)].b,i=k[B.o.K(d,100)].b,h=i.aE(0,j),g=new C.v(-h.b,h.a).ez(0,Math.max(h.gcj(),1))
for(k=(e-1)/2,w=g.a,v=g.b,u=j.a,t=j.b,s=i.a,r=i.b,q=this.b.a,p=0;p<e;++p){o=(p-k)*8
n=w*o
o=v*o
$.a0()
m=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
m.r=B.al.gq(0)
m.c=4
m.d=B.bV
l=m.L()
q.drawLine.apply(q,[u+n,t+o,s+n,r+o,l])
l.delete()}},
$S:132}
A.dGC.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dGB(w,d))},
$S:131}
A.dGB.prototype={
$0(){var w=C.aQ(J.q(this.b,"best"))
w=w==null?null:B.k.N(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
A.dGr.prototype={
$0(){var w,v,u=J.e_(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.aq9[w.aB(4)]
return B.d.fM(u)},
$S:22}
A.dGq.prototype={
$1(d){return A.fGJ(d)==="*"},
$S:3}
A.dGs.prototype={
$1(d){return d!==this.a},
$S:3}
A.dGp.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
A.v9("dna_lab",C.E(["best",r],x.N,x.z))}r=s.d
A.vc("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga6L()[r]+" codes for "+C.t(D.AT.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.aXi()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.K)(w),++u)r.push(D.AT.h(0,w[u]))
r="Protein built: "+B.d.aG(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
A.vc("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
A.dGA.prototype={
$3$ghost(d,e,f){var w=null,v=f?B.du:e,u=C.m(8),t=f?C.H(B.bf,B.r,1):w
return C.p(B.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?B.bf:B.x,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.h,w,w,new C.o(v,w,t,u,w,w,B.n),w,40,w,B.mB,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1811}
A.dGv.prototype={
$1(d){var w=D.d2L.h(0,d)
return w==null?B.c:w},
$S:712}
A.dGw.prototype={
$0(){var w=this.a
return w.n(new A.dGu(w,this.b))},
$S:0}
A.dGu.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.asU()},
$S:0}
A.dGx.prototype={
$0(){var w=this.a
return w.n(new A.dGt(w))},
$S:0}
A.dGt.prototype={
$0(){var w=this.a;++w.e
w.asU()},
$S:0}
A.dGy.prototype={
$0(){return this.a.aUn(this.b)},
$S:0}
A.dGz.prototype={
$0(){return this.a.aUn(this.b)},
$S:0}
A.dJr.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dJq(w,d))},
$S:131}
A.dJq.prototype={
$0(){var w=C.aQ(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
A.dJe.prototype={
$0(){},
$S:0}
A.dJd.prototype={
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
A.dJf.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
B.d.a7(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
A.dJj.prototype={
$1(d){var w=this.a
return w.n(new A.dJi(w,d))},
$S:6}
A.dJi.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.dJk.prototype={
$1(d){var w=this.a
return w.n(new A.dJh(w,d))},
$S:6}
A.dJh.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.dJl.prototype={
$1(d){var w=this.a
return w.n(new A.dJg(w,d))},
$S:6}
A.dJg.prototype={
$0(){return this.a.z=this.b},
$S:0}
A.dJm.prototype={
$0(){return this.a.a7V("drought")},
$S:0}
A.dJn.prototype={
$0(){return this.a.a7V("disease")},
$S:0}
A.dJo.prototype={
$0(){return this.a.a7V("foxes")},
$S:0}
A.dJp.prototype={
$0(){return this.a.a7V("rabbits")},
$S:0}
A.cYR.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.f0()
k.dX(B.o.N(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.ae()
p=k.ae()
o=(r&1)===0?1:-1
o=B.k.K(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.ae()
p=Math.sin(s+r*2)
n=new C.lO(new C.es(e,l,l,B.cU,l,l,l,l,l,l,new C.F(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),B.a6,B.cn,new C.k3(1),l,l,l,l,B.cm,l)
n.fq()
n.a6(w,new C.v(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1813}
A.cYT.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this.a.c
if(l.length<2)return
w=$.a0()
v=C.a([],x.v)
u=new C.aS(w.r,B.as,null,null,v)
for(w=this.b,t=w.a,s=w.c-t,r=w.d,w=r-w.b,q=0;q<l.length;++q){p=t+s*q/159
o=r-w*B.k.D(l[q][d]/e,0,1)
if(q===0){n=new C.bc(p,o)
v.push(n)
m=u.f
if(m!=null)n.bC(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}else{n=new C.ar(p,o)
v.push(n)
m=u.f
if(m!=null)n.bC(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}}$.a0()
l=C.N()
l.b=B.ad
l.c=2.6
l.r=f.gq(0)
l.e=B.fo
this.c.aU(u,l)},
$S:1814}
A.cYS.prototype={
$3(d,e,f){var w=null,v=C.iR(w,w,w,w,C.dq(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),d),B.a6,B.cn,w,B.eE,B.cm)
v.fq()
v.a6(this.a,new C.v(f,this.b.b+2))},
$S:1815}
A.bC4.prototype={
$2(d,e){return d+e.a*e.b},
$S:1816}
A.f9B.prototype={
$2(d,e){return e.a-d.a},
$S:1817}
A.duT.prototype={
$2(d,e){return d+e},
$S:75}
A.dv5.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.n(new A.dv4(v,B.k.D((v.gv4()-w[v.e].gu7())/Math.max(w[v.e].gu7(),8),-1,1)*0.32,u))},
$S:8}
A.dv4.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
A.dv6.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dv3(w,d))},
$S:131}
A.dv3.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aV(v==null?B.cO:v)
while(v.C())w.push(B.k.N(C.f9(v.gT(v))))
return this.a.r.v(0,w)},
$S:0}
A.duU.prototype={
$0(){var w=this.a.f,v=this.b,u=B.o.K(w[v]+1,6)
w[v]=u
return u},
$S:0}
A.duZ.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1818}
A.dv_.prototype={
$0(){var w=this.a
return w.n(new A.duY(w))},
$S:0}
A.duY.prototype={
$0(){var w=this.a;++w.e
B.d.hi(w.f,0,5,0)},
$S:0}
A.dv0.prototype={
$2(d,e){var w=null,v=this.a
return C.aJ(B.c3,C.b1(w,w,w,new A.b6f(v.w,this.b.a,v.f,v.gv4()===v.d[v.e].gu7(),w),B.ff),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.duX(v,e),w,w,w,!1,B.ae)},
$S:33}
A.duX.prototype={
$1(d){var w=this.b.b,v=B.k.U((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cpS(v-1)},
$S:53}
A.dv1.prototype={
$0(){var w=this.a
return w.n(new A.duW(w,this.b))},
$S:0}
A.duW.prototype={
$0(){var w=this.a
w.e=this.b
B.d.hi(w.f,0,5,0)},
$S:0}
A.dv2.prototype={
$0(){var w=this.a
return w.n(new A.duV(w))},
$S:0}
A.duV.prototype={
$0(){return B.d.hi(this.a.f,0,5,0)},
$S:0}
A.cxU.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.bM(C.dh(new C.v(d,s),20,w),B.tv)
$.a0()
q=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.r=f.gq(0)
p=q.L()
u.drawRRect(C.fA(r),p)
p.delete()
q=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.b=B.ad
q.c=1.2
q.r=B.dx.gq(0)
p=q.L()
u.drawRRect(C.fA(r),p)
p.delete()
A.f8F(v,"1",new C.v(d,s),B.bh,11)}},
$S:1819}
A.dNe.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.n(new A.dNd(w,v))},
$S:8}
A.dNd.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
A.dNf.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dNc(w,d))},
$S:131}
A.dNc.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aV(v==null?B.cO:v)
while(v.C())w.push(B.k.N(C.f9(v.gT(v))))
return this.a.w.v(0,w)},
$S:0}
A.dN4.prototype={
$0(){var w=B.k.U(this.c)
this.a.d[this.b]=w
return w},
$S:0}
A.dN8.prototype={
$0(){var w=this.a
return w.n(new A.dN7(w))},
$S:0}
A.dN7.prototype={
$0(){return this.a.r++},
$S:0}
A.dN9.prototype={
$0(){var w=this.a
return w.n(new A.dN6(w,this.b))},
$S:0}
A.dN6.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dNa.prototype={
$1(d){var w=this.a
return w.n(new A.dN5(w,d))},
$S:6}
A.dN5.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.dNb.prototype={
$1(d){return this.a.c_4(this.b,d)},
$S:6}
A.d4P.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bJF(d,e,f,g),m=this.b
$.a0()
w=C.N()
v=C.ap(h,B.c,i?0.1:0.35)
v.toString
u=C.ap(h,B.x,0.5)
u.toString
w.sar(new C.bR(B.A,0.5,B.w,null,0,C.a([v,h,u],x.O),null,null).az(0,C.bV(d,e+6)))
m.aU(n,w)
w=C.N()
w.b=B.ad
w.c=1.5
w.r=B.aV.gq(0)
m.aU(n,w)
w=C.N()
w.r=B.x.j(0.28).gq(0)
m.ap(d,e*0.55,w)
for(w=d.a,v=d.b,u=m.a,t=0;t<4;++t){s=g+t*3.141592653589793/2
r=Math.cos(s)
q=Math.sin(s)
p=new C.av(B.Z,B.X,B.a0,B.a1,B.a_)
p.r=B.hZ.gq(0)
p.c=3
o=p.L()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.N()
w.r=B.aJ.gq(0)
m.ap(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1820}
A.d4Q.prototype={
$3(d,e,f){var w=this,v=w.b
return A.f8F(w.a,d,new C.v(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1821}
A.dz4.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dz3(w,d))},
$S:131}
A.dz3.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aV(v==null?B.cO:v)
while(v.C())w.push(B.k.N(C.f9(v.gT(v))))
return this.a.Q.v(0,w)},
$S:0}
A.dyN.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jw(90-(w-65)):d},
$S:13}
A.dyW.prototype={
$1(d){return this.a.n(new A.dyV())},
$S:2}
A.dyV.prototype={
$0(){},
$S:0}
A.dyX.prototype={
$1(d){return this.a.n(new A.dyU())},
$S:2}
A.dyU.prototype={
$0(){},
$S:0}
A.dyY.prototype={
$0(){var w=this.a
return w.n(new A.dyT(w))},
$S:0}
A.dyT.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aTj()},
$S:0}
A.dyZ.prototype={
$0(){var w=this.a
return w.n(new A.dyS(w))},
$S:0}
A.dyS.prototype={
$0(){return this.a.f=0},
$S:0}
A.dz_.prototype={
$0(){var w=this.a
return w.n(new A.dyR(w))},
$S:0}
A.dyR.prototype={
$0(){return this.a.f=1},
$S:0}
A.dz0.prototype={
$0(){var w=this.a
return w.n(new A.dyQ(w,this.b))},
$S:0}
A.dyQ.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dz1.prototype={
$1(d){var w=this.a
return w.n(new A.dyP(w,d))},
$S:6}
A.dyP.prototype={
$0(){return this.a.w=B.k.U(this.b)},
$S:0}
A.dz2.prototype={
$1(d){var w=this.a
w.n(new A.dyO(w,d))
if(w.ga7c()&&w.Q.H(0,w.x)){A.vc("zap",9,220,0.45)
w=w.Q
w=C.z(w,C.a2(w).k("ck.E"))
A.v9("cipher_lab",C.E(["done",w],x.N,x.z))}},
$S:6}
A.dyO.prototype={
$0(){return this.a.z=B.k.U(this.b)},
$S:0}
A.bHA.prototype={
$1(d){return d.r<=0},
$S:z+62}
A.bHL.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+8}
A.bHG.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+8}
A.bHN.prototype={
$2(d,e){var w=this.a
return w.ce(0,d.a+"."+e,new A.bHO(w))},
$S:z+5}
A.bHO.prototype={
$0(){return this.a.a},
$S:113}
A.bHM.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:86}
A.bHP.prototype={
$2(d,e){var w=this.a
return w.ce(0,this.b.$1(this.c.$2(d,e)),new A.bHQ(w))},
$S:z+5}
A.bHQ.prototype={
$0(){return this.a.a},
$S:113}
A.bHC.prototype={
$2(d,e){var w=this.a
return w.ce(0,d.a+"."+e,new A.bHD(w))},
$S:z+5}
A.bHD.prototype={
$0(){return this.a.a},
$S:113}
A.bHB.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:86}
A.bHE.prototype={
$2(d,e){var w=this.a
return w.ce(0,this.b.$1(this.c.$2(d,e)),new A.bHF(w))},
$S:z+5}
A.bHF.prototype={
$0(){return this.a.a},
$S:113}
A.bHz.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.CW)>0.5*Math.abs(w.CW)},
$S:z+1}
A.bHR.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+8}
A.bHH.prototype={
$1(d){var w
if(d!==this.b){w=d.b
w=(D.a2Z.t(0,w)||D.uV.am(0,w))&&Math.abs(d.CW)>0.0005}else w=!1
return w},
$S:z+1}
A.bHK.prototype={
$1(d){return d.b===this.a},
$S:z+1}
A.bHJ.prototype={
$1(d){return d.cx>=this.a&&!d.x},
$S:z+1}
A.bHI.prototype={
$1(d){return d.b===this.a},
$S:z+1}
A.bD1.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
A.bD2.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+10}
A.cfr.prototype={
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
$S:191}
A.bCH.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.bCI.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new A.bCG(w))},
$S:0}
A.bCG.prototype={
$0(){return this.a.Q=null},
$S:0}
A.bCJ.prototype={
$0(){return C.a([],x.ey)},
$S:1822}
A.bCK.prototype={
$1(d){return this.a.bv(d).a>1e6},
$S:367}
A.bCZ.prototype={
$2(d,e){var w
if(d==="short"){A.dL(1800,"",120,0,0.55,"noise")
A.dL(200,"",160,2.2,0.4,"saw")
C.fU()
w=this.a
if(w.c!=null)w.atu("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="burn"){w=this.a
if(w.c!=null)w.atu("Burnt out! "+e.ay)
A.dL(140,"",320,0,0.6,"noise")
A.dL(900,"",160,1.5,0.35,"square")}},
$S:z+66}
A.bD_.prototype={
$0(){},
$S:0}
A.bCo.prototype={
$0(){},
$S:0}
A.bD0.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
A.bCY.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.aq(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aJ(B.c3,C.b1(p,p,p,new A.agb(w,v,u,t,s,r==null?B.jK:r,p),n),B.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,new A.bCS(o),new A.bCT(o),new A.bCU(o),p,p,p,p,p,p,p,p,p,p,new A.bCV(o),p,p,p,!1,B.ae)],q)
if(o.a.c.a.length===0)n.push(D.aWM)
w=o.Q
if(w!=null){v=C.m(14)
u=C.H(B.d3,B.r,1)
n.push(C.an(p,C.aJ(p,C.p(p,C.B(C.a([D.eMm,C.D(C.d(w,p,p,p,p,p,p,D.eEV,p,p,p),1)],q),B.F,p,B.e,B.j,0,p,p),B.h,p,p,new C.o(D.b0B,p,u,v,p,p,B.n),p,p,p,p,B.qe,p,p,p),B.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.bCW(o),p,p,p,p,p,p,!1,B.ae),p,p,10,10,8,p))}if(o.e!=null)n.push(C.an(8,o.aUq(C.B(C.a([D.bmb,new A.fe(B.Xo,"Cut wire",new A.bCX(o),B.cL,p)],q),B.m,p,B.e,B.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.an(8,o.c8w(w),p,p,10,10,p,p))}return C.jz(new C.am(B.V,p,B.aY,B.q,n,p),B.q,p)},
$S:444}
A.bCT.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b20(s)
if(r!=null){t.n(new A.bCQ(t,r,d))
return}w=t.aWY(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.v(v*u.a,w.d*u.b).aE(0,s)
t.n(new A.bCR(t,w))}},
$S:40}
A.bCQ.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
A.bCR.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bCU.prototype={
$1(d){var w=this.a
if(w.f!=null)w.n(new A.bCO(w,d))
else if(w.w!=null)w.n(new A.bCP(w,d.b.an(0,w.x)))},
$S:18}
A.bCO.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
A.bCP.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=B.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=B.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
A.bCS.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b20(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.azH(u.a,u.b,v.a,v.b)!=null)A.dL(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.abd()},
$S:36}
A.bCV.prototype={
$1(d){var w=this.a,v=d.b,u=w.aWY(v)
if(u!=null){w.n(new A.bCM(w,u))
if(u.b==="tv")w.csh(u)
w.a.toString
return}w.n(new A.bCN(w,w.cuE(v)))},
$S:53}
A.bCM.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
A.dL(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
A.dL(200,"",70,0,0.2,"saw")}},
$S:0}
A.bCN.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
A.bCW.prototype={
$0(){var w=this.a
return w.n(new A.bCL(w))},
$S:0}
A.bCL.prototype={
$0(){return this.a.Q=null},
$S:0}
A.bCX.prototype={
$0(){var w=this.a
B.d.W(w.a.c.b,w.e)
w.e=null
A.dL(300,"",50,0,0.35,"noise")
w.abd()},
$S:0}
A.bCp.prototype={
$0(){return this.a.bj3(this.b)},
$S:0}
A.bCD.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.B(C.a([C.d(d,w,w,w,w,w,w,D.ezH,w,w,w),C.D(C.ma(this.b.d,w,w,g,h,new A.bCF(this.a,f),B.k.D(e,h,g)),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1823}
A.bCF.prototype={
$1(d){var w=this.a
w.n(new A.bCE(this.b,d))
w.a.toString},
$S:6}
A.bCE.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.bCu.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
A.dL(260,"",70,0,0.35,"noise")
w.abd()},
$S:0}
A.bCv.prototype={
$0(){var w=this.a
return w.n(new A.bCt(w))},
$S:0}
A.bCt.prototype={
$0(){return this.a.d=null},
$S:0}
A.bCw.prototype={
$0(){this.a.n(new A.bCs(this.b,this.c))
A.dL(900,"",40,0,0.3,"noise")},
$S:0}
A.bCs.prototype={
$0(){return this.a.at=this.b},
$S:0}
A.bCx.prototype={
$0(){return this.a.aWh(this.b)},
$S:0}
A.bCy.prototype={
$0(){var w=this.a
w.n(new A.bCr(this.b,this.c))
w.a.toString},
$S:0}
A.bCr.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
A.bCz.prototype={
$0(){var w=this.a
w.n(new A.bCq(this.b,this.c))
w.a.toString},
$S:0}
A.bCq.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.bCA.prototype={
$1(d){return this.a.f=d},
$S:6}
A.bCB.prototype={
$1(d){return this.a.f=d},
$S:6}
A.bCC.prototype={
$1(d){return this.a.f=d},
$S:6}
A.f01.prototype={
$1(d){return d.aCq("bulb")},
$S:z+2}
A.f02.prototype={
$1(d){return d.aBA(0,"switch")&&d.aCq("bulb")},
$S:z+2}
A.f03.prototype={
$1(d){return B.d.bf(d.a,new A.f_R())},
$S:z+2}
A.f_R.prototype={
$1(d){return d.b==="motor"&&d.cx>0.3},
$S:z+1}
A.f04.prototype={
$1(d){return d.aBA(0,"resistor")&&B.d.bf(d.a,new A.f_Q())},
$S:z+2}
A.f_Q.prototype={
$1(d){return d.b==="led"&&d.cx>0.3&&!d.x},
$S:z+1}
A.f05.prototype={
$1(d){return!d.aBA(0,"battery")&&d.aCq("bulb")},
$S:z+2}
A.f_V.prototype={
$1(d){return B.d.bf(d.a,new A.f_P())},
$S:z+2}
A.f_P.prototype={
$1(d){return d.b==="radio"&&d.cx>0},
$S:z+1}
A.f_W.prototype={
$1(d){return B.d.bf(d.a,new A.f_O())},
$S:z+2}
A.f_O.prototype={
$1(d){return d.b==="tv"&&d.cx>0},
$S:z+1}
A.f_X.prototype={
$1(d){return B.d.bf(d.a,new A.f_N())},
$S:z+2}
A.f_N.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
A.f_Y.prototype={
$1(d){return B.d.bf(d.a,new A.f_M())},
$S:z+2}
A.f_M.prototype={
$1(d){return d.b==="heater"&&d.cx>0.5},
$S:z+1}
A.dJx.prototype={
$0(){},
$S:0}
A.dJw.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.m(22),o=x.p,n=C.a([D.f0T,B.av,D.eNV,B.T],o)
for(w=this.a,v=0;v<16;++v){u=D.NY[v]
t=B.c.j(0.06)
s=new C.b3(14,14)
r=new C.ay(B.bG,1,B.r,-1)
n.push(C.aJ(q,C.p(q,C.u(C.a([new C.w(u.a,q,B.kf,q,q,q,q,q,q,q,q,q),B.bA,new C.w(u.b,q,D.eFy,q,q,q,q,B.a2,q,3,q,q)],o),B.F,q,B.e,B.j,0,B.p),B.h,q,q,new C.o(t,q,new C.c2(r,r,r,r),new C.bv(s,s,s,s),q,q,B.n),q,q,q,B.cI,B.bk,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.dJv(w,d,u),q,q,q,q,q,q,!1,B.ae))}return C.ew(q,D.aaj,new C.C(B.c2,new C.a3(340,q,C.cL(n,q,q,q,q,B.ai,!0),q),q),q,q,q,q,B.cX,q,new C.b5(p,B.W),q)},
$S:46}
A.dJv.prototype={
$0(){C.a8(this.b,!1).M(null)
var w=this.a
w.n(new A.dJu(w,this.c))
A.dL(800,"",120,-0.5,0.3,"square")},
$S:0}
A.dJu.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bcs()},
$S:0}
A.dJz.prototype={
$0(){var w=this.a
return w.n(new A.dJy(w,this.b))},
$S:0}
A.dJy.prototype={
$0(){var w,v=this.a
if(this.b)w=v.f+1
else{$.bA0()
w=Math.min(9,v.f+1)}return v.f=w},
$S:0}
A.dJA.prototype={
$0(){var w=this.a
return w.n(w.d.gcL7())},
$S:0}
A.dJB.prototype={
$0(){var w=this.a,v=w.d
return w.n(v.gqN(v))},
$S:0}
A.f8L.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p=this
if(g===0||h<=0)return
w=f*B.k.D(h,0,1)
v=d.an(0,new C.v(Math.cos(e)*w,-Math.sin(e)*w))
u=p.a
$.a0()
t=C.N()
t.r=B.hI.gq(0)
t.c=g*2.2
t.d=B.bV
u.bQ(d,v,t)
if(h>0.95){s=Math.sin(p.b*1.6+g)*0.04
t=f*0.72
r=g-1
q=h*1.6-0.9
p.$5(v,e+0.5+s,t,r,q-(5-g)*0)
p.$5(v,e-0.5+s,t,r,q)}if(g===1&&h>0.5){t=C.N()
t.r=C.ap(B.dk,B.bm,(Math.sin(p.b*2+v.a)+1)/2).gq(0)
u.ap(v,p.c*0.035,t)}},
$S:1824}
A.fwG.prototype={
$3(d,e,f){return new A.Un(this.a,this.c,this.b,null)},
$C:"$3",
$R:3,
$S:z+68}
A.fwH.prototype={
$4(d,e,f,g){var w=x.E
return new C.cZ(e,!1,C.it(B.A,g,null,new C.bd(C.cE(B.co,e,null),new C.bl(0.85,1,w),w.k("bd<bC.T>"))),null)},
$C:"$4",
$R:4,
$S:30}
A.eqa.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new A.eq9(w))},
$S:0}
A.eq9.prototype={
$0(){return this.a.w=!1},
$S:0}
A.eq8.prototype={
$0(){var w,v=this.a
v.e=B.o.K(v.gC8()+this.b,6)
if(v.gC8()<0)v.e=v.gC8()+6
w=v.ga6I().y
w=w==null?null:B.o.aj(w.a,1000)
v.r=w==null?0:w
v.w=!0},
$S:0}
A.eqf.prototype={
$0(){var w=this.a
w.n(new A.eqb(w))
w.ary()},
$S:0}
A.eqb.prototype={
$0(){return this.a.w=!0},
$S:0}
A.eqc.prototype={
$2(d,e){var w=null,v=this.a,u=v.ga6I().y,t=u==null?w:B.o.aj(u.a,1000),s=(t==null?0:t)/1000,r=v.r===0&&v.a.d?s:99
return C.b1(w,w,w,new A.bqB(v.gC8(),s,r,w),B.ff)},
$S:70}
A.eqd.prototype={
$0(){return this.a.aUs(-1)},
$S:0}
A.eqe.prototype={
$0(){return this.a.aUs(1)},
$S:0}
A.dYx.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new A.dYw(w,d))},
$S:131}
A.dYw.prototype={
$0(){var w=this.a,v=this.b,u=J.a6(v),t=C.aQ(u.h(v,"best"))
t=t==null?null:B.k.N(t)
w.e=t==null?0:t
v=C.aQ(u.h(v,"level"))
v=v==null?null:B.k.N(v)
if(v==null)v=0
w.d=v
w.f=A.fHc(v)},
$S:0}
A.dYy.prototype={
$0(){},
$S:0}
A.dYn.prototype={
$0(){var w=this.a,v=B.o.D(this.b,0,59)
w.d=v
w.f=A.fHc(v)
w.r.a7(0)
w.x=!1},
$S:0}
A.dYo.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.guF().r){C.jD()
return}q.m(0,p,"/")}else if(o==="/")q.m(0,p,"\\")
else q.W(0,p)
A.vc("click",s.c+s.d,60,0.4)
if(A.h52(r.guF(),q).b.a===r.guF().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}A.v9("laser_maze",C.E(["best",p,"level",Math.min(q,59)],x.N,x.z))
A.Aw("bell",D.ajU,700,0.45)
for(q=r.guF().c,q=C.ef(q,q.r,C.a2(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.A(new C.v((B.o.K(t,7)+0.5)*p+w,(B.o.aj(t,7)+0.5)*p+v),0))}}},
$S:0}
A.dYr.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.aq(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aJ(B.c3,C.b1(s,s,s,new A.bdk(r.guF(),w,v.a,u,r.w,r.z,s),q),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.dYp(r),s,s,s,!1,B.ae),C.an(s,C.e1(C.B(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,E.aJI,s,s,s),C.d(""+u.a+"/"+r.guF().c.a+" \u2605   mirrors "+w.a+"/"+r.guF().r,s,s,s,s,s,s,O.a3R,s,s,s)],t),B.m,s,B.hx,B.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(A.f4e("Beam delivered! \u2605","Level "+(r.d+1)+" done.",B.bm,C.a([new A.fe(B.jh,"Next level",new A.dYq(r),B.bm,s)],t)))
return new C.am(B.V,s,B.aY,B.q,w,s)},
$S:61}
A.dYp.prototype={
$1(d){return this.a.c_m(d.b)},
$S:53}
A.dYq.prototype={
$0(){var w=this.a
return w.abf(w.d+1)},
$S:0}
A.dYs.prototype={
$0(){var w=this.a,v=w.r
return w.n(v.gqN(v))},
$S:0}
A.dYt.prototype={
$0(){var w=this.a
return w.abf(w.d+1)},
$S:0}
A.dYu.prototype={
$0(){var w=this.a
return w.abf(w.d-1)},
$S:0}
A.dYv.prototype={
$0(){return this.a.abf(this.b)},
$S:0}
A.d9D.prototype={
$1(d){var w=this.b
return new C.v(this.a+(B.o.K(d,7)+0.5)*w,this.c+(B.o.aj(d,7)+0.5)*w)},
$S:713}
A.d9G.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.v(r,s):new C.v(r,r),p=new C.v(-q.a,-q.b)
r=this.c
w=t.an(0,q)
v=t.an(0,p)
$.a0()
u=C.N()
u.r=(f?B.hY:B.aJ).gq(0)
u.c=7
u.d=B.bV
r.bQ(w,v,u)
w=t.an(0,q)
v=t.an(0,p)
u=C.N()
u.r=B.c.gq(0)
u.c=2.4
u.d=B.bV
r.bQ(w,v,u)},
$S:1826}
A.d9E.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:458}
A.d9F.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:458}
A.dYQ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dYP(w,d))},
$S:131}
A.dYP.prototype={
$0(){var w=C.aQ(J.q(this.b,"best"))
w=w==null?null:B.k.N(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
A.dYR.prototype={
$0(){},
$S:0}
A.dYB.prototype={
$1(d){return d===0},
$S:126}
A.dYK.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.x(1,q[0],q[1],q[2],B.t)
q=C.d("ROUND "+C.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,E.a44,s,s,s)
w=r.z==="play"?B.k.dF(r.y):20
v=x.p
w=C.B(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?B.cL:B.c,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,O.a3R,s,s,s)],v),B.m,s,B.hx,B.j,0,s,s)
q=r.z==="ready"
u=q?B.du:p
t=C.m(22)
t=C.D(C.p(s,s,B.h,s,s,new C.o(u,s,C.H(B.bf,B.r,2),t,s,s,B.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.u(C.a([new C.C(D.bgj,w,s),C.D(C.B(C.a([C.D(new C.C(B.bQ,C.u(C.a([t,B.ar,C.d(q?"TARGET":"TARGET: "+r.gcpV(),s,s,s,s,s,s,D.aKv,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),1),C.D(new C.C(B.bQ,C.u(C.a([C.D(C.b1(s,s,s,new A.bdz(r.f,s),B.ff),1),B.ar,C.d("YOURS \xb7 "+B.k.U(B.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aKv,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),1)],v),B.m,s,B.e,B.j,0,s,s),1)],v),B.m,s,B.e,B.j,0,B.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(A.f4e("Light Mixer","Match each colour with red, green and blue light."+q,B.bd,C.a([new A.fe(B.iJ,"Start",new A.dYH(r),B.bm,s)],v)))}if(r.z==="result")w.push(A.f4e(r.Q,"Score so far: "+r.w,B.aM,C.a([new A.fe(B.jh,"Next colour",new A.dYI(r),B.bm,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(A.f4e("Finished! "+q,u,B.bm,C.a([new A.fe(B.m3,"Play again",new A.dYJ(r),B.bm,s)],v)))}return new C.am(B.V,s,B.a9,B.q,w,s)},
$S:61}
A.dYH.prototype={
$0(){var w=this.a
return w.n(new A.dYD(w))},
$S:0}
A.dYD.prototype={
$0(){var w=this.a
w.w=w.r=0
w.atx()},
$S:0}
A.dYI.prototype={
$0(){var w=this.a
return w.n(w.gc_k())},
$S:0}
A.dYJ.prototype={
$0(){var w=this.a
return w.n(new A.dYC(w))},
$S:0}
A.dYC.prototype={
$0(){var w=this.a
w.w=w.r=0
w.atx()},
$S:0}
A.dYL.prototype={
$1(d){var w=this.a
return w.n(new A.dYG(w,d))},
$S:6}
A.dYG.prototype={
$0(){var w=B.k.U(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
A.dYM.prototype={
$1(d){var w=this.a
return w.n(new A.dYF(w,d))},
$S:6}
A.dYF.prototype={
$0(){var w=B.k.U(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
A.dYN.prototype={
$1(d){var w=this.a
return w.n(new A.dYE(w,d))},
$S:6}
A.dYE.prototype={
$0(){var w=B.k.U(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
A.dYO.prototype={
$0(){var w=this.a
return w.n(w.gc_l())},
$S:0}
A.f0K.prototype={
$0(){return D.dHF},
$S:z+69}
A.f0L.prototype={
$0(){return D.deX},
$S:z+70}
A.f0M.prototype={
$0(){return D.dbv},
$S:z+71}
A.f0N.prototype={
$0(){return D.den},
$S:z+72}
A.f0O.prototype={
$0(){return D.djj},
$S:z+73}
A.f0P.prototype={
$0(){return D.dDs},
$S:z+74}
A.f0Q.prototype={
$0(){return D.dFE},
$S:z+75}
A.f0R.prototype={
$0(){return D.diD},
$S:z+76}
A.cag.prototype={
$0(){return C.a8(this.a,!1).p0()},
$S:0}
A.cah.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.h8r(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.b3(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.aa(0,B.G,p.j(0.4),B.dm,16)],t)
n=B.c.j(0.85)
j.push(C.aJ(m,C.p(m,new C.am(B.V,m,B.a9,B.q,C.a([new C.cF(m,-6,-6,m,m,m,new C.w(r.c,m,H.QP,m,m,m,m,m,m,m,m,m),m),new C.bF(B.lb,m,m,C.u(C.a([new C.w(r.a,m,D.eK0,m,m,m,m,m,m,m,m,m),B.d5,new C.w(r.b,m,new C.F(!0,n,m,m,m,m,12,B.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),B.F,m,B.e,B.R,0,B.p),m)],k),m),B.h,m,m,new C.o(m,m,m,new C.bv(q,q,q,q),p,new C.a7(B.ax,B.aC,B.w,o,m,m),B.n),m,v,m,m,B.bB,m,m,l),B.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.caf(d,r),m,m,m,m,m,m,!1,B.ae))}return C.c8(B.bH,j,B.bw,14,14)},
$S:168}
A.caf.prototype={
$0(){return C.a8(this.a,!1).cr(C.eH(new A.cae(this.b),!1,null,x.H))},
$S:0}
A.cae.prototype={
$1(d){return this.a.f.$0()},
$S:43}
A.eud.prototype={
$0(){var w=this.a
return w.w=w.d[w.b_i(w.f)]},
$S:0}
A.eu9.prototype={
$0(){var w=this.a
w.w=""
w.r=9+B.cA.ae()*7},
$S:0}
A.eu8.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bH(0,B.c_)
w.w=""},
$S:0}
A.eub.prototype={
$0(){var w=this.a
return w.n(new A.eua(w,this.b))},
$S:0}
A.eua.prototype={
$0(){var w=this.a.d
if(w.length>2)B.d.cu(w,this.b)},
$S:0}
A.euc.prototype={
$1(d){return this.a.aUN(0)},
$S:2}
A.dLx.prototype={
$0(){return A.Aw("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
A.dLy.prototype={
$0(){},
$S:0}
A.dLs.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
A.dLu.prototype={
$0(){return this.a.aUP(this.b)},
$S:0}
A.dLv.prototype={
$0(){var w=this.a
return w.n(new A.dLt(w))},
$S:0}
A.dLt.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
A.dLw.prototype={
$0(){var w=this.a
return w.aUP(w.d)},
$S:0}
A.dxv.prototype={
$2(d,e){return d+e},
$S:93}
A.dxw.prototype={
$0(){},
$S:0}
A.dxq.prototype={
$2(d,e){return d+e},
$S:93}
A.dxt.prototype={
$0(){var w=this.a
return w.n(new A.dxs(w,this.b))},
$S:0}
A.dxs.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
A.dxu.prototype={
$0(){var w=this.a
return w.n(new A.dxr(w))},
$S:0}
A.dxr.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
A.dJ3.prototype={
$0(){return A.qi(this.b,this.a.d,"drawing")},
$S:0}
A.dJ4.prototype={
$1(d){var w=this.a
return w.n(new A.dJ2(w,d))},
$S:40}
A.dJ2.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new A.aF6(u,v,t))},
$S:0}
A.dJ5.prototype={
$1(d){var w=this.a
return w.n(new A.dJ1(w,d))},
$S:18}
A.dJ1.prototype={
$0(){return B.d.gai(this.a.e).c.push(this.b.b)},
$S:0}
A.dJ6.prototype={
$1(d){var w=this.a
return w.n(new A.dJ0(w,d))},
$S:23}
A.dJ0.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new A.aF6(u,v,t))},
$S:0}
A.dJ7.prototype={
$0(){var w=this.a
return w.n(new A.dJ_(w,this.b))},
$S:0}
A.dJ_.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
A.dJ8.prototype={
$1(d){var w=this.a
return w.n(new A.dIZ(w,d))},
$S:6}
A.dIZ.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dJ9.prototype={
$0(){var w=this.a
return w.n(new A.dIY(w))},
$S:0}
A.dIY.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
A.dJa.prototype={
$0(){var w=this.a
return w.n(new A.dIX(w))},
$S:0}
A.dIX.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
A.dJb.prototype={
$0(){var w=this.a
return w.n(B.d.gqN(w.e))},
$S:0}
A.dJc.prototype={
$0(){var w=this.a
return w.n(new A.dIW(w))},
$S:0}
A.dIW.prototype={
$0(){var w=this.a
w.x=D.aqC[B.o.K(B.d.cP(D.aqC,w.x)+1,4)]},
$S:0}
A.e2Y.prototype={
$0(){return this.a.f.H(0,this.b)},
$S:0}
A.e2Z.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
A.Aw("bell",C.a([0,4,7],w),500,0.45)
u.n(new A.e2X(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)A.Aw("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
A.e2X.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a7(0)},
$S:0}
A.e3_.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new A.e2W(w))},
$S:11}
A.e2W.prototype={
$0(){var w=this.a
w.f.a7(0)
w.x=!1},
$S:0}
A.e33.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aJ(w,C.my(new A.e31(v,e),w,B.b8,B.rA,w,new C.bl(0,u,x.E),x.i),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e32(v,e),w,w,w,w,w,w,!1,B.ae)},
$S:76}
A.e32.prototype={
$0(){return this.a.c0e(this.b)},
$S:0}
A.e31.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dg(),m=n.a
m.$flags&2&&C.ah(m)
m[11]=0.001
n.fk(3.141592653589793*e)
m=C.m(16)
w=o?p:D.bHW
if(o)v=q.a.r.t(0,q.b)?B.bm.j(0.25):B.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.H(u.r.t(0,t)?B.bm:B.bf,B.r,1)
if(o){r=C.dg()
r.fk(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fm(B.A,C.d(u[t],p,p,p,p,p,p,D.eHp,p,p,p),p,r,!0)
u=r}else u=D.f_J
return C.fm(B.A,C.p(B.A,u,B.h,p,p,new C.o(v,p,s,m,p,w,B.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:134}
A.e34.prototype={
$0(){var w=this.a
return w.n(new A.e30(w,this.b))},
$S:0}
A.e30.prototype={
$0(){var w=this.a
w.d=this.b.a
w.aoZ()},
$S:0}
A.e35.prototype={
$0(){var w=this.a
return w.n(w.gbDb())},
$S:0}
A.ebs.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
A.ebt.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
A.ebq.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.ebr.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new A.ebp(w))},
$S:11}
A.ebp.prototype={
$0(){return this.a.f=-1},
$S:0}
A.ebu.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
A.ebv.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
A.ebw.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aUO()},
$S:11}
A.ebx.prototype={
$0(){return this.a.c0k(this.b)},
$S:0}
A.epK.prototype={
$1(d){return C.t(d.h(0,1))+","},
$S:69}
A.epT.prototype={
$3$big(d,e,f){var w=null,v=C.D(C.d(d,w,1,B.a2,w,w,w,C.l(w,w,B.aQ,w,w,w,w,w,w,w,w,f?16:14,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.C(B.ln,C.B(C.a([v,B.aa,new C.dp(1,B.cj,C.eX(B.A,C.d(e,w,w,w,w,w,w,C.l(w,w,B.c,w,w,w,w,w,w,w,w,f?30:18,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.h,B.e8),w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1828}
A.epP.prototype={
$1(d){return this.a.n(new A.epO())},
$S:2}
A.epO.prototype={
$0(){},
$S:0}
A.epQ.prototype={
$0(){var w=this.a
return w.n(new A.epN(w,this.b))},
$S:0}
A.epN.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.epR.prototype={
$1(d){var w=this.a
return w.n(new A.epM(w,d))},
$S:6}
A.epM.prototype={
$0(){return this.a.f=B.k.U(this.b)},
$S:0}
A.epS.prototype={
$0(){var w=this.a
return w.n(new A.epL(w))},
$S:0}
A.epL.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
A.e1D.prototype={
$0(){},
$S:0}
A.e1E.prototype={
$0(){},
$S:0}
A.e1w.prototype={
$0(){var w=this.a
return w.n(new A.e1v(w))},
$S:0}
A.e1v.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.bY(u,1,!1,x.S)
w.r=0.9
A.a67("hat",0.6)},
$S:0}
A.e1x.prototype={
$0(){var w=this.a
return w.n(new A.e1u(w))},
$S:0}
A.e1u.prototype={
$0(){this.a.y=1.1
A.l0("bell",36,200,0.4)},
$S:0}
A.e1y.prototype={
$0(){var w=this.a
return w.n(new A.e1t(w))},
$S:0}
A.e1t.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aB(Math.max(v,u)-t+1)
w.as=u
A.l0("bell",12+B.o.K(u,12),500,0.5)},
$S:0}
A.e1z.prototype={
$0(){var w=this.a
return w.n(new A.e1s(w,this.b))},
$S:0}
A.e1s.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
A.e1A.prototype={
$1(d){var w=this.a
return w.n(new A.e1r(w,d))},
$S:6}
A.e1r.prototype={
$0(){var w,v,u,t=this.a,s=t.e=B.k.U(this.b),r=J.e_(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
A.e1B.prototype={
$1(d){var w=this.a
return w.n(new A.e1q(w,d))},
$S:6}
A.e1q.prototype={
$0(){return this.a.z=B.k.U(this.b)},
$S:0}
A.e1C.prototype={
$1(d){var w=this.a
return w.n(new A.e1p(w,d))},
$S:6}
A.e1p.prototype={
$0(){return this.a.Q=B.k.U(this.b)},
$S:0}
A.cmm.prototype={
$0(){return C.a8(this.a,!1).p0()},
$S:0}
A.cmn.prototype={
$0(){var w=this.a
return A.hQe(this.b,w.c,w.e,w.d)},
$S:0}
A.fx6.prototype={
$1(d){var w,v=null,u=C.m(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,B.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.eAc,v,v,v)
return C.eo(C.a([C.bG(!1,D.eQQ,v,v,!0,v,v,new A.fx5(d),v,v)],x.p),v,v,D.rq,w,v,v,v,new C.b5(u,new C.ay(s,1,B.r,-1)),t,v)},
$S:20}
A.fx5.prototype={
$0(){C.a8(this.a,!1).M(null)
return null},
$S:0}
A.cmi.prototype={
$0(){C.eG()
this.a.e.$0()},
$S:0}
A.cmh.prototype={
$0(){C.eG()
this.a.e.$0()},
$S:0}
A.cmo.prototype={
$0(){C.eG()
this.a.e.$0()},
$S:0}
A.cmj.prototype={
$0(){var w=this.a
B.d.W(w.fb$,this.b.b8())
if(w.c!=null)this.c.$0()},
$S:0}
A.cml.prototype={
$1(d){var w=this.a,v=d.a,u=B.k.D((v-w.ky$.a)/1e6,0,0.04)
w.ky$=d
w.fE$=B.o.aj(v,1000)
w.l3(u)
if(w.c!=null)w.n(new A.cmk())},
$S:8}
A.cmk.prototype={
$0(){},
$S:0}
A.caa.prototype={
$2(d,e){var w,v,u,t
for(w=e.length,v=this.a,u=v.$flags|0,t=0;t<w;++t){u&2&&C.ah(v,9)
v.setUint8(d+t,e.charCodeAt(t))}},
$S:458}
A.cac.prototype={
$0(){var w=this
return A.hmq(w.a,w.b,w.c,w.d,w.e)},
$S:323}
A.cab.prototype={
$0(){var w=this
return A.l0(w.a,w.b,w.c,w.d)},
$S:1}
A.dOf.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dOe(w,d))},
$S:z+78}
A.dOe.prototype={
$0(){return this.a.ckj(this.b)},
$S:0}
A.dNI.prototype={
$0(){var w,v,u,t=this.a,s=J.a6(t),r=s.gI(t),q=new Float64Array(r*4)
for(w=0;w<s.gI(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:1829}
A.dNG.prototype={
$0(){return this.a.id=D.a_r},
$S:0}
A.dNH.prototype={
$0(){var w=this.b.a,v=C.U(w).k("a5<1>")
v=C.oJ(new C.a5(w,new A.dNF(this.c),v),6,v.k("G.E"))
w=C.z(v,C.a2(v).k("G.E"))
return this.a.id=w},
$S:0}
A.dNF.prototype={
$1(d){return B.a.t(d.a.toLowerCase(),this.a)},
$S:z+79}
A.dNE.prototype={
$1(d){var w=null,v=C.ch(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,B.al,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),B.q,w,B.z,w,w,w,w,B.ai)
return C.eo(C.a([C.bG(!1,B.pB,w,w,!0,w,w,new A.dND(d),w,w)],x.p),w,w,D.rq,v,w,w,w,w,D.f_N,w)},
$S:20}
A.dND.prototype={
$0(){C.a8(this.a,!1).M(null)
return null},
$S:0}
A.dO0.prototype={
$0(){return A.qi(this.b,this.a.d,"earth")},
$S:0}
A.dO1.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.aq(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gU9()
r=p.z
o=C.a([C.aJ(B.c3,C.b1(q,q,q,new A.bbM(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.dNP(p),new A.dNQ(p),new A.dNR(p),q,q,q,q,q,q,q,new A.dNS(p),q,q,q,!1,B.ae)],x.p)
if(p.r==null)o.push(A_.a7H)
w=this.b
if(w!=null)o.push(C.an(8,p.c0W(w),q,q,10,10,q,q))
return new C.en(new C.am(B.V,q,B.aY,B.q,o,q),p.d)},
$S:199}
A.dNQ.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:334}
A.dNR.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=B.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gU9()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=B.k.D(u.x+v.b*w,-85,85)}},
$S:242}
A.dNP.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gU9()*u.z)
v=d.a.a
u.Q=B.k.D(-v.a*w,-160,160)
u.as=B.k.D(v.b*w,-100,100)},
$S:529}
A.dNS.prototype={
$1(d){var w=this.a,v=w.c0Z(d.b)
if(v!=null)w.n(new A.dNJ(w,v))
else w.n(new A.dNK(w))},
$S:53}
A.dNJ.prototype={
$0(){return this.a.atY(this.b)},
$S:0}
A.dNK.prototype={
$0(){return this.a.fx=null},
$S:0}
A.dO2.prototype={
$0(){var w=this.a
w.e.bH(0,B.c_)
w.n(new A.dNO(w,this.b))},
$S:0}
A.dNO.prototype={
$0(){var w=this.a
w.id=D.a_r
w.atY(this.b)},
$S:0}
A.dO6.prototype={
$0(){var w=this.a
return w.n(new A.dO_(w))},
$S:0}
A.dO_.prototype={
$0(){var w=this.a
w.fx=null
w.aq8(15,w.y,1)},
$S:0}
A.dO7.prototype={
$0(){var w=this.a
return w.n(new A.dNZ(w,this.b))},
$S:0}
A.dNZ.prototype={
$0(){var w=this.b.b
return this.a.aq8(w.a,w.b,w.c)},
$S:0}
A.dO8.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.n(new A.dNY(w,v))},
$S:0}
A.dNY.prototype={
$0(){var w=this.b.a
return this.a.atY(w[B.cA.aB(w.length)])},
$S:0}
A.dO9.prototype={
$1(d){var w=this.a
return w.n(new A.dNX(w,d))},
$S:6}
A.dNX.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
A.dOa.prototype={
$1(d){var w=this.a
return w.n(new A.dNW(w,d))},
$S:6}
A.dNW.prototype={
$0(){return this.a.dy=this.b},
$S:0}
A.dOb.prototype={
$1(d){var w=this.a
return w.n(new A.dNV(w,d))},
$S:6}
A.dNV.prototype={
$0(){return this.a.fr=this.b},
$S:0}
A.dOc.prototype={
$0(){var w=this.a
return w.n(new A.dNU(w))},
$S:0}
A.dNU.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
A.dOd.prototype={
$0(){var w=this.a
return w.n(new A.dNT(w))},
$S:0}
A.dNT.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
A.dO3.prototype={
$0(){var w=this.a
return w.n(new A.dNN(w))},
$S:0}
A.dNN.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
A.dO4.prototype={
$0(){var w=this.a
return w.n(new A.dNM(w))},
$S:0}
A.dNM.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
A.dO5.prototype={
$0(){var w=this.a
return w.n(new A.dNL(w))},
$S:0}
A.dNL.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
A.dNC.prototype={
$2(d,e){var w=null
return C.D(C.u(C.a([C.d(d,w,w,w,w,w,w,D.aJa,w,w,w),B.tB,C.d(e,w,2,B.a2,w,w,w,B.R4,w,w,w)],x.p),B.F,w,B.e,B.j,0,B.p),1)},
$S:129}
A.dNB.prototype={
$0(){var w=this.a
return w.n(new A.dNA(w))},
$S:0}
A.dNA.prototype={
$0(){return this.a.fx=null},
$S:0}
A.d5D.prototype={
$0(){var w=null,v=C.iR(w,w,w,w,C.dq(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,B.I,w,w,!0,w,w,w,w,w,D.cI5,w,w),this.a),B.a6,B.cn,w,B.eE,B.cm)
v.fq()
return v},
$S:328}
A.d5E.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.v(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1830}
A.f0D.prototype={
$0(){return D.dgU},
$S:z+80}
A.f0E.prototype={
$0(){return D.dFm},
$S:z+81}
A.f0F.prototype={
$0(){return D.dgW},
$S:z+82}
A.f0G.prototype={
$0(){return D.dbh},
$S:z+83}
A.f0H.prototype={
$0(){return D.dgS},
$S:z+84}
A.f0I.prototype={
$0(){return D.dDt},
$S:z+85}
A.f0J.prototype={
$0(){return D.dDr},
$S:z+86}
A.eqo.prototype={
$0(){return C.a8(this.a,!1).p0()},
$S:0}
A.eqp.prototype={
$0(){var w=this.a
return w.n(new A.eqn(w))},
$S:0}
A.eqn.prototype={
$0(){var w=this.a
return w.d=B.o.K(w.gaOa()+1,16)},
$S:0}
A.eqq.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.h8q(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.b3(18,18)
q=s.d
p=new C.ay(q.j(0.5),1,B.r,-1)
o=C.a([q.j(0.28),D.b7o],u)
k.push(C.aJ(n,C.p(n,C.u(C.a([C.V(s.c,q,n,n,n,30),B.P,new C.w(s.a,n,D.eEw,n,B.L,n,n,n,n,2,n,n),B.d5,new C.w(s.b,n,D.eJp,n,B.L,n,n,n,n,2,n,n)],l),B.m,n,B.b6,B.j,0,B.p),B.h,n,n,new C.o(n,n,new C.c2(p,p,p,p),new C.bv(r,r,r,r),n,new C.a7(B.ax,B.aC,B.w,o,n,n),B.n),n,v,n,n,B.ch,n,n,m),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.eqm(d,s),n,n,n,n,n,n,!1,B.ae))}return C.c8(B.fE,k,B.bw,10,10)},
$S:168}
A.eqm.prototype={
$0(){return C.a8(this.a,!1).cr(C.eH(new A.eql(this.b),!1,null,x.H))},
$S:0}
A.eql.prototype={
$1(d){return this.a.e.$0()},
$S:43}
A.eiG.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
A.eiR.prototype={
$0(){return A.qi(this.b,this.a.d,"solar-system")},
$S:0}
A.eiS.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.aq(e.b,e.d)
u.ch=t
t=C.a([C.aJ(B.c3,C.b1(v,v,v,new A.bo_(u,v),t),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.eiO(u),new A.eiP(u),v,v,v,v,v,v,v,new A.eiQ(u),v,v,v,!1,B.ae)],x.p)
w=this.b
if(w!=null)t.push(C.an(8,u.c10(w),v,v,10,10,v,v))
return new C.en(new C.am(B.V,v,B.aY,B.q,t,v),u.d)},
$S:199}
A.eiO.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:334}
A.eiP.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=B.k.D(w.y*d.d,0.5,9)
else w.x=w.x.an(0,d.a)},
$S:242}
A.eiQ.prototype={
$1(d){var w=this.a,v=w.c13(d.b)
if(v!=null)w.aV9(v)},
$S:53}
A.eiT.prototype={
$0(){var w=this.a
return w.n(new A.eiN(w))},
$S:0}
A.eiN.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=B.J
w.w=1},
$S:0}
A.eiU.prototype={
$0(){return this.a.aV9(this.b)},
$S:0}
A.eiV.prototype={
$1(d){var w=this.a
return w.n(new A.eiM(w,d))},
$S:6}
A.eiM.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
A.eiW.prototype={
$1(d){var w=this.a
return w.n(new A.eiL(w,d))},
$S:6}
A.eiL.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eiX.prototype={
$0(){var w=this.a
return w.n(new A.eiK(w))},
$S:0}
A.eiK.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
A.eiY.prototype={
$0(){var w=this.a
return w.n(new A.eiJ(w))},
$S:0}
A.eiJ.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
A.eiZ.prototype={
$0(){var w=this.a
return w.n(new A.eiI(w))},
$S:0}
A.eiI.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
A.ej_.prototype={
$0(){var w=this.a
return w.n(new A.eiH(w))},
$S:0}
A.eiH.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
A.eiF.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=B.k.aa(d/365.25,w)+" Earth years"}else w=B.k.aa(d,0)+" Earth days"
return w},
$S:362}
A.eiE.prototype={
$2(d,e){var w=null
return C.D(C.u(C.a([C.d(d,w,w,w,w,w,w,D.aJa,w,w,w),B.tB,C.d(e,w,2,B.a2,w,w,w,B.R4,w,w,w)],x.p),B.F,w,B.e,B.j,0,B.p),1)},
$S:129}
A.eiD.prototype={
$0(){var w=this.a
return w.n(new A.eiC(w))},
$S:0}
A.eiC.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
A.eKc.prototype={
$0(){var w=null,v=C.iR(w,w,w,w,C.dq(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,B.I,w,w,!0,w,w,w,w,w,E.ND,w,w),this.a),B.a6,B.cn,w,B.eE,B.cm)
v.fq()
return v},
$S:328}
A.eKd.prototype={
$1(d){return d.c>0},
$S:z+9}
A.eKe.prototype={
$1(d){return d.c>0},
$S:z+9}
A.dOj.prototype={
$0(){},
$S:0}
A.dOM.prototype={
$1(d){return d!=null},
$S:355}
A.dOy.prototype={
$0(){var w=this.a
return w.n(new A.dOp(w,this.b))},
$S:0}
A.dOp.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
A.dOz.prototype={
$0(){var w=this.a
return w.n(new A.dOo(w))},
$S:0}
A.dOo.prototype={
$0(){return this.a.f=!1},
$S:0}
A.dOA.prototype={
$0(){var w=this.a
return w.n(new A.dOx(w))},
$S:0}
A.dOx.prototype={
$0(){return this.a.f=!0},
$S:0}
A.dOE.prototype={
$0(){var w=this.a
return w.n(new A.dOw(w))},
$S:0}
A.dOw.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
A.dOF.prototype={
$1(d){var w=this.a
return w.n(new A.dOv(w,d))},
$S:6}
A.dOv.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dOG.prototype={
$0(){var w=this.a
return w.n(w.gcnq())},
$S:0}
A.dOH.prototype={
$1(d){var w=this.a
return w.n(new A.dOu(w,d))},
$S:6}
A.dOu.prototype={
$0(){return this.a.at=this.b},
$S:0}
A.dOI.prototype={
$1(d){var w=this.a
return w.n(new A.dOt(w,d))},
$S:6}
A.dOt.prototype={
$0(){return this.a.ax=this.b},
$S:0}
A.dOJ.prototype={
$1(d){var w=this.a
return w.n(new A.dOs(w,d))},
$S:6}
A.dOs.prototype={
$0(){return this.a.ay=this.b},
$S:0}
A.dOK.prototype={
$1(d){var w=this.a
return w.n(new A.dOr(w,d))},
$S:6}
A.dOr.prototype={
$0(){return this.a.ch=this.b},
$S:0}
A.dOL.prototype={
$0(){var w=this.a
return w.n(new A.dOq(w))},
$S:0}
A.dOq.prototype={
$0(){return this.a.ay=4},
$S:0}
A.dOB.prototype={
$0(){var w=this.a
return w.n(new A.dOn(w))},
$S:0}
A.dOn.prototype={
$0(){return this.a.ay=7.67},
$S:0}
A.dOC.prototype={
$0(){var w=this.a
return w.n(new A.dOm(w))},
$S:0}
A.dOm.prototype={
$0(){return this.a.ay=9},
$S:0}
A.dOD.prototype={
$0(){var w=this.a
return w.n(new A.dOl(w))},
$S:0}
A.dOl.prototype={
$0(){return this.a.ay=11.3},
$S:0}
A.dOi.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bZ(0,C.bT(g,new C.o(D.b69,g,g,C.m(20),g,g,B.n),B.b9),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.xC[q]
n=C.aY(o.d)
o=C.u(C.a([new C.w(o.a,g,new C.F(!0,n,g,g,g,g,12.5,B.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.w(C.t(D.xC[q].b)+" m/s\xb2",g,D.eIL,g,g,g,g,g,g,g,g,g)],a0),B.m,g,B.e,B.j,0,B.p)
n=p+t
m=C.p(g,g,B.h,B.du,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.V(Q.Xa,C.aY(D.xC[q].d),g,g,g,22):C.p(g,g,B.h,g,g,new C.o(C.aY(D.xC[q].d),g,g,g,C.a([new C.aa(0,B.G,C.aY(D.xC[q].d).j(0.6),B.J,10)],u),g,B.a5),g,22,g,g,g,g,g,22)
j=C.p(g,g,B.h,C.aY(D.xC[q].d).j(0.6),g,g,g,3,g,B.fn,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=B.k.aa(i,2)+" s"
h=v[q]==null?"":"to land"
B.d.v(a1,C.a([new C.cF(p,8,g,g,f,g,o,g),new C.cF(n-0.5,54,g,e,g,g,m,g),new C.cF(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cF(p,g,g,8,f,g,C.u(C.a([j,B.av,new C.w(i,g,B.yp,g,g,g,g,g,g,g,g,g),new C.w(h,g,D.eBn,g,g,g,g,g,g,g,g,g)],a0),B.m,g,B.e,B.j,0,B.p),g)],a0))}if(!w.x&&B.d.e9(v,new A.dOh()))a1.push(D.aX2)
return new C.am(B.V,g,B.a9,B.q,a1,g)},
$S:61}
A.dOh.prototype={
$1(d){return d==null},
$S:355}
A.dOk.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=B.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.m(8)
p=C.p(v,v,B.h,v,v,new C.o(B.c.j(0.05),v,v,p,v,v,B.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.di(v,v,v,v,B.b8,new C.o(v,v,v,C.m(8),v,new C.a7(B.a3,B.a7,B.w,C.a([C.aY(t).j(0.9),C.aY(t).j(0.4)],x.O),v,v),B.n),B.i0,v,26,v,v,v,v,e.b*q)
w=r<100?B.k.aa(r,1):A.Fj(r)
u=u.ax*9.81/s
u=u<10?B.k.aa(u,2):B.k.aa(u,0)
return new C.am(B.V,v,B.a9,B.q,C.a([p,t,C.an(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.eHa,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:61}
A.dOg.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b1(v,v,v,new A.b71(new C.v(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),B.at)
o=B.x.j(0.55)
p=C.m(14)
q=C.H(B.bG,B.r,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(B.a.t(u,"forever")||B.a.t(u,"again"))u=B.bm
else u=B.a.t(u,"escapes")?B.b2:B.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=B.k.aa(Math.sqrt(58.86870477034412),1)
s=B.k.aa(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+A.Fj(B.k.D(r.cx.gcj()-6371,0,9e9))+" km":""
w=x.p
return new C.am(B.V,v,B.aY,B.q,C.a([n,C.an(v,C.p(v,C.u(C.a([u,B.bA,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,F.aKL,v,v,v)],w),B.F,v,B.e,B.R,0,B.p),B.h,v,v,new C.o(o,v,q,p,v,v,B.n),v,v,v,v,B.bQ,v,v,v),v,v,12,12,8,v)],w),v)},
$S:61}
A.ebA.prototype={
$0(){return A.qi(this.b,this.a.d,"size-compare")},
$S:0}
A.ebB.prototype={
$0(){var w=this.a
return w.n(new A.ebz(w,this.b))},
$S:0}
A.ebz.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.ebC.prototype={
$0(){var w=this.a
return w.n(new A.eby(w,this.b))},
$S:0}
A.eby.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.eIm.prototype={
$3(d,e,f){var w,v,u=this.a
$.a0()
w=C.N()
w.r=f.j(0.2).gq(0)
w.z=new C.hF(B.G,Math.max(2,e*0.18))
u.ap(d,e*1.12,w)
w=C.N()
v=C.ap(f,B.x,0.6)
v.toString
w.sar(new C.bR(N.pK,0.5,B.w,null,0,C.a([B.c,f,v],x.O),F.ZG,null).az(0,C.bV(d,e)))
u.ap(d,e,w)},
$S:711}
A.dwX.prototype={
$1(d){return d.e<=0},
$S:z+88}
A.dwL.prototype={
$1(d){return d.b},
$S:z+59}
A.dwM.prototype={
$0(){return A.qi(this.b,this.a.d,"black-hole")},
$S:0}
A.dwN.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.aq(e.b,e.d)
p.Q=o
o=C.aJ(B.c3,C.b1(q,q,q,new A.b6q(p,q),o),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.dwJ(p),q,q,q,q,q,q,q,q,q,new A.dwK(p),q,q,q,q,!1,B.ae)
w=B.x.j(0.55)
v=C.m(14)
u=C.H(B.bG,B.r,1)
t=p.r
if(t<1000)t=B.k.aa(t,t<10?1:0)+" Suns"
else t=A.fbs(t)+" Suns"
t=p.abU("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.an(q,C.p(q,C.B(C.a([t,p.abU("EDGE WIDTH",(s<100?B.k.aa(s,1):A.Fj(s))+" km"),p.abU("TIME",B.k.aa(this.b*100,0)+"%"),p.abU("EATEN",""+p.as)],r),B.m,q,B.e,B.j,0,q,q),B.h,q,q,new C.o(w,q,u,v,q,q,B.n),q,q,q,q,B.bQ,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.dS9)
return new C.en(new C.am(B.V,q,B.aY,B.q,r,q),p.d)},
$S:199}
A.dwK.prototype={
$1(d){return this.a.aVa(d.b)},
$S:23}
A.dwJ.prototype={
$1(d){if(B.cA.ae()<0.12)this.a.aVa(d.b)},
$S:18}
A.dwP.prototype={
$1(d){var w=this.a
return w.n(new A.dwI(w,d))},
$S:6}
A.dwI.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
A.dwQ.prototype={
$0(){var w=this.a
return w.n(new A.dwH(w))},
$S:0}
A.dwH.prototype={
$0(){return this.a.r=10},
$S:0}
A.dwR.prototype={
$0(){var w=this.a
return w.n(new A.dwG(w))},
$S:0}
A.dwG.prototype={
$0(){return this.a.r=21},
$S:0}
A.dwS.prototype={
$0(){var w=this.a
return w.n(new A.dwF(w))},
$S:0}
A.dwF.prototype={
$0(){return this.a.r=43e5},
$S:0}
A.dwT.prototype={
$0(){var w=this.a
return w.n(new A.dwE(w))},
$S:0}
A.dwE.prototype={
$0(){return this.a.r=65e8},
$S:0}
A.dwU.prototype={
$0(){var w=this.a
return w.n(new A.dwD(w))},
$S:0}
A.dwD.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
A.dwV.prototype={
$0(){var w=this.a
return w.n(new A.dwC(w))},
$S:0}
A.dwC.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
A.dwW.prototype={
$0(){var w=this.a
return w.n(new A.dwB(w))},
$S:0}
A.dwB.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.dwO.prototype={
$0(){var w=this.a
return w.n(new A.dwA(w))},
$S:0}
A.dwA.prototype={
$0(){var w=this.a
B.d.a7(w.z)
w.as=0},
$S:0}
A.dMR.prototype={
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
$S:1831}
A.dMH.prototype={
$0(){return A.qi(this.b,this.a.d,"galaxy")},
$S:0}
A.dMI.prototype={
$0(){var w=this.a
return w.n(new A.dMG(w,this.b))},
$S:0}
A.dMG.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.XY()},
$S:0}
A.dMJ.prototype={
$0(){var w=this.a
return w.n(new A.dMF(w))},
$S:0}
A.dMF.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.XY()}w.cni()},
$S:0}
A.dMK.prototype={
$1(d){var w=this.a
return w.n(new A.dME(w,d))},
$S:6}
A.dME.prototype={
$0(){var w=this.a
w.f=B.k.U(this.b)
w.XY()},
$S:0}
A.dML.prototype={
$1(d){var w=this.a
return w.n(new A.dMD(w,d))},
$S:6}
A.dMD.prototype={
$0(){var w=this.a
w.r=this.b
w.XY()},
$S:0}
A.dMM.prototype={
$1(d){var w=this.a
return w.n(new A.dMC(w,d))},
$S:6}
A.dMC.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.dMN.prototype={
$1(d){var w=this.a
return w.n(new A.dMB(w,d))},
$S:6}
A.dMB.prototype={
$0(){return this.a.ax=this.b},
$S:0}
A.dMO.prototype={
$0(){var w=this.a
return w.n(new A.dMA(w))},
$S:0}
A.dMA.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
A.dMP.prototype={
$0(){var w=this.a
return w.n(new A.dMz(w))},
$S:0}
A.dMz.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
A.dMQ.prototype={
$0(){var w=this.a
return w.n(new A.dMy(w))},
$S:0}
A.dMy.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.d2M.prototype={
$6(d,e,f,g,h,i){return g.an(0,new C.v((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1832}
A.ebg.prototype={
$0(){return A.qi(this.b,this.a.d,"seasons-moon")},
$S:0}
A.ebh.prototype={
$0(){var w=this.a
return w.n(new A.ebf(w))},
$S:0}
A.ebf.prototype={
$0(){return this.a.f="seasons"},
$S:0}
A.ebi.prototype={
$0(){var w=this.a
return w.n(new A.ebe(w))},
$S:0}
A.ebe.prototype={
$0(){return this.a.f="moon"},
$S:0}
A.ebj.prototype={
$0(){var w=this.a
return w.n(new A.ebd(w))},
$S:0}
A.ebd.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
A.ebk.prototype={
$0(){var w=this.a
return w.n(new A.ebc(w))},
$S:0}
A.ebc.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
A.ebl.prototype={
$1(d){var w=this.a
return w.n(new A.ebb(w,d))},
$S:6}
A.ebb.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.ebm.prototype={
$1(d){var w=this.a
return w.n(new A.eba(w,d))},
$S:6}
A.eba.prototype={
$0(){return this.a.z=this.b},
$S:0}
A.ebn.prototype={
$1(d){var w=this.a
return w.n(new A.eb9(w,d))},
$S:6}
A.eb9.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.ebo.prototype={
$1(d){var w=this.a
return w.n(new A.eb8(w,d))},
$S:6}
A.eb8.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=A.aJ5.prototype
w.bq4=w.p
w=A.aI8.prototype
w.bp5=w.p
w=A.aI9.prototype
w.bp6=w.p
w=A.aIe.prototype
w.bpb=w.p
w=A.aJU.prototype
w.bqZ=w.p
w=A.aJ3.prototype
w.bq2=w.p
w=A.aJc.prototype
w.bqb=w.p
w=A.aJi.prototype
w.bqh=w.p
w=A.aIc.prototype
w.bp9=w.p
w=A.aJ0.prototype
w.bq_=w.p
w=A.aJf.prototype
w.bqe=w.p
w=A.aIZ.prototype
w.bpY=w.p
w=A.aJ_.prototype
w.bpZ=w.p
w=A.aIp.prototype
w.bpn=w.p
w=A.aI4.prototype
w.bp1=w.p
w=A.aIx.prototype
w.bpv=w.p
w=A.auO.prototype
w.bme=w.p
w=A.auP.prototype
w.bmf=w.p
w=A.aJj.prototype
w.bqi=w.p
w=A.aIO.prototype
w.bpN=w.p
w=A.aIP.prototype
w.bpO=w.p
w=A.aIa.prototype
w.bp7=w.p
w=A.aIs.prototype
w.bpq=w.p
w=A.aIX.prototype
w.bpW=w.p
w=A.aJq.prototype
w.bqp=w.p
w=A.aIy.prototype
w.bpx=w.p
w=A.aIz.prototype
w.bpy=w.p
w=A.aIA.prototype
w.bpz=w.p
w=A.aJ8.prototype
w.bq7=w.p
w=A.aJb.prototype
w.bqa=w.p
w=A.aI7.prototype
w.bp4=w.p
w=A.aIv.prototype
w.bpt=w.p
w=A.aJ7.prototype
w.bq6=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(A.aBl.prototype,"gat2","bXZ",0)
var r
v(r=A.azN.prototype,"gc4q","c4r",36)
w(r,"gbYu","aTS",0)
w(A.azQ.prototype,"gbZq","bZr",0)
u(A.aA6.prototype,"gbZw","bZx",53)
w(r=A.aEh.prototype,"gcn0","cn1",0)
w(r,"gcaY","adj",0)
w(r,"gc8G","c8H",0)
w(r,"gbZv","ab0",4)
w(r=A.aBk.prototype,"gbAl","a6K",4)
w(r,"gc7Y","aWO",0)
w(r,"gcbC","adr",4)
t(r,"gbZz","ab1",4)
w(A.aBy.prototype,"gbR8","bR9",0)
w(r=A.aBd.prototype,"gcmV","cmW",0)
w(r,"gbAG","bAH",0)
w(r=A.azP.prototype,"gb_S","awn",0)
v(r,"gbZF","Xn",55)
w(r,"gbZE","ab3",4)
v(r=A.aBc.prototype,"gcdw","av6",89)
v(r,"gcjA","awj",15)
w(r,"gbEC","aMN",0)
v(r=A.aBa.prototype,"gctR","agr",15)
t(r,"gbZZ","att",0)
w(r,"gcfK","cfL",0)
v(r=A.aAi.prototype,"gc__","c_0",61)
w(r,"gc_1","c_2",0)
t(r=A.a2i.prototype,"gqN","a7",0)
v(r,"gcFF","ajt",1)
w(r,"gcL7","bcs",0)
s(A.agb.prototype,"gc_6",0,5,null,["$5"],["pA"],65,0,0)
w(r=A.aAj.prototype,"gc_7","c_8",0)
w(r,"gceh","adN",4)
w(A.aBz.prototype,"gaUr","c_9",0)
w(r=A.aAX.prototype,"gc_k","atx",0)
w(r,"gc_l","aUt",0)
w(r=A.aBL.prototype,"gc0f","c0g",0)
t(r,"gc0d","aUN",0)
w(A.aB6.prototype,"gbDb","aoZ",0)
t(A.aBp.prototype,"gc0h","c0i",0)
v(r=A.aAu.prototype,"gc0X","c0Y",77)
w(r,"gbHV","bHW",0)
w(r=A.aAv.prototype,"gcnq","cnr",0)
w(r,"gc11","c12",0)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(C.aB,[A.aho,A.ED,A.u9,A.aOS,A.a11,A.b6t,A.bWl,A.xb,A.B7,A.mW,A.b7b,A.zp,A.boG,A.px,A.qb,A.Bb,A.Xe,A.acn,A.Zs,A.Bl,A.a9l,A.a9C,A.abw,A.Eq,A.bhK,A.O9,A.YL,A.a9s,A.a9V,A.Em,A.aaJ,A.abd,A.rB,A.b63,A.aOI,A.j0,A.vi,A.a83,A.a97,A.a2i,A.nk,A.b7c,A.ru,A.Hg,A.aT8,A.bq_,A.aF6,A.mb,A.a8O,A.a8P,A.um,A.Nq,A.x9,A.Np,A.bpV,A.NT,A.acs])
v(C.i2,[A.fdt,A.f5g,A.faR,A.faS,A.fdq,A.fdr,A.dVz,A.dVS,A.eae,A.e9M,A.e9N,A.e9O,A.e9P,A.e9Q,A.e9R,A.e9S,A.e9T,A.e9K,A.e9L,A.e9J,A.ea9,A.eaa,A.eab,A.dx1,A.dx3,A.dx6,A.dxh,A.bWm,A.bWn,A.f_S,A.f_T,A.f_U,A.f_Z,A.f0_,A.f00,A.dzz,A.dzg,A.dzA,A.dzb,A.dz6,A.dz8,A.dze,A.dzr,A.dzp,A.dzq,A.dzo,A.dzl,A.dzn,A.eHR,A.eHy,A.eHF,A.eHO,A.eHs,A.d9k,A.d9l,A.d9h,A.d9i,A.d9j,A.d9m,A.d9n,A.d9o,A.d9p,A.d9q,A.d9r,A.d9s,A.d9t,A.d9u,A.e9a,A.e9b,A.e9c,A.e9d,A.e98,A.e99,A.e9F,A.e9h,A.e9j,A.e93,A.e9B,A.e9z,A.e9A,A.e9y,A.e9x,A.e95,A.ejq,A.ejo,A.ejc,A.ejg,A.ejb,A.ejh,A.eji,A.ejm,A.eq1,A.eq7,A.e6f,A.e6g,A.e61,A.e62,A.e60,A.e65,A.e67,A.e68,A.epr,A.eps,A.epq,A.epe,A.epf,A.epd,A.ep6,A.ep7,A.epl,A.epm,A.epn,A.epo,A.epp,A.dyI,A.dyJ,A.dyK,A.dyB,A.dyE,A.cFm,A.e1J,A.e27,A.e1N,A.e1V,A.e1W,A.e1U,A.e22,A.e5J,A.e5O,A.e57,A.e4Q,A.e51,A.e5_,A.e4Y,A.e4Z,A.e4X,A.dGC,A.dGq,A.dGs,A.dGA,A.dGv,A.dJr,A.dJj,A.dJk,A.dJl,A.cYR,A.cYT,A.cYS,A.dv5,A.dv6,A.duZ,A.duX,A.cxU,A.dNe,A.dNf,A.dNa,A.dNb,A.d4P,A.d4Q,A.dz4,A.dyN,A.dyW,A.dyX,A.dz1,A.dz2,A.bHA,A.bHL,A.bHG,A.bHM,A.bHB,A.bHz,A.bHR,A.bHH,A.bHK,A.bHJ,A.bHI,A.bD1,A.bCK,A.bD0,A.bCT,A.bCU,A.bCS,A.bCV,A.bCD,A.bCF,A.bCA,A.bCB,A.bCC,A.f01,A.f02,A.f03,A.f_R,A.f04,A.f_Q,A.f05,A.f_V,A.f_P,A.f_W,A.f_O,A.f_X,A.f_N,A.f_Y,A.f_M,A.dJw,A.f8L,A.fwG,A.fwH,A.dYx,A.dYp,A.d9D,A.d9G,A.dYQ,A.dYB,A.dYL,A.dYM,A.dYN,A.cae,A.euc,A.dJ4,A.dJ5,A.dJ6,A.dJ8,A.e31,A.epK,A.epT,A.epP,A.epR,A.e1A,A.e1B,A.e1C,A.fx6,A.cml,A.dOf,A.dNF,A.dNE,A.dNQ,A.dNR,A.dNP,A.dNS,A.dO9,A.dOa,A.dOb,A.eql,A.eiO,A.eiP,A.eiQ,A.eiV,A.eiW,A.eiF,A.eKd,A.eKe,A.dOM,A.dOF,A.dOH,A.dOI,A.dOJ,A.dOK,A.dOh,A.eIm,A.dwX,A.dwL,A.dwK,A.dwJ,A.dwP,A.dMR,A.dMK,A.dML,A.dMM,A.dMN,A.d2M,A.ebl,A.ebm,A.ebn,A.ebo])
v(C.ky,[A.fds,A.dVE,A.dVC,A.e9V,A.ea7,A.dz7,A.dzu,A.dEO,A.eHU,A.eHV,A.eHx,A.eHK,A.eHL,A.eHG,A.eHM,A.eHr,A.e96,A.e97,A.e9E,A.e9w,A.e9l,A.eq0,A.e64,A.eph,A.dyA,A.dyF,A.e1Z,A.e5N,A.fdK,A.e4U,A.e4R,A.e53,A.dhn,A.bC4,A.f9B,A.duT,A.dv0,A.bHN,A.bHP,A.bHC,A.bHE,A.bD2,A.cfr,A.bCZ,A.bCY,A.eqc,A.dYr,A.d9E,A.d9F,A.dYK,A.cah,A.dxv,A.dxq,A.e33,A.caa,A.dO1,A.dNC,A.d5E,A.eqq,A.eiS,A.eiE,A.dOi,A.dOk,A.dOg,A.dwN])
v(C.af,[A.Tw,A.TX,A.Sp,A.Su,A.LD,A.aEg,A.TW,A.Ua,A.Um,A.TU,A.Uh,A.Ss,A.TO,A.TT,A.TR,A.SP,A.T4,A.Sk,A.Ti,A.St,A.ag9,A.T5,A.Un,A.TB,A.TD,A.Us,A.Tc,A.Sq,A.T3,A.TP,A.U0,A.Ul,A.TN,A.Tj,A.Uo,A.U9,A.Tk,A.U1,A.So,A.Tg,A.TY])
v(C.ag,[A.bge,A.aJ5,A.aI8,A.aIe,A.aA6,A.aJU,A.aJ3,A.aJc,A.aJi,A.aJ0,A.aJf,A.aIc,A.aIZ,A.aJ_,A.aBa,A.bfJ,A.aIp,A.aI4,A.aIx,A.bfD,A.auO,A.aAj,A.aJj,A.aIO,A.aIP,A.aJq,A.aIs,A.aIa,A.bfK,A.aB6,A.aBp,A.bgY,A.aIX,A.aIy,A.bh0,A.aJb,A.aIA,A.aJ8,A.aI7,A.aIv,A.aJ7])
v(C.jl,[A.dVx,A.dVy,A.dVK,A.dVL,A.dVG,A.dVF,A.dVH,A.dVD,A.dVI,A.dVB,A.dVJ,A.dVA,A.dVO,A.dVN,A.dVP,A.dVM,A.dVQ,A.dVR,A.dVT,A.ead,A.eaf,A.eag,A.e9X,A.e9W,A.e9U,A.ea2,A.ea3,A.ea_,A.ea4,A.e9Z,A.ea5,A.ea6,A.e9Y,A.ea8,A.ea1,A.eac,A.ea0,A.dxo,A.dxn,A.dx0,A.dxp,A.dx2,A.dx4,A.dx5,A.dx7,A.dwY,A.dwZ,A.dx_,A.dxe,A.dxf,A.dxg,A.dxd,A.dxi,A.dxc,A.dxj,A.dxb,A.dxk,A.dxa,A.dxl,A.dx9,A.dxm,A.dx8,A.dzd,A.dzc,A.dzh,A.dz9,A.dza,A.dzi,A.dzj,A.dzk,A.dzf,A.dz5,A.dzt,A.dzs,A.dzv,A.dzw,A.dzx,A.dzm,A.dzy,A.cFP,A.dEM,A.dEL,A.dEN,A.f0g,A.f0h,A.f0i,A.f0t,A.f0w,A.f0x,A.f0y,A.f0z,A.f0A,A.f0B,A.f0C,A.f0j,A.f0k,A.f0l,A.f0m,A.f0n,A.f0o,A.f0p,A.f0q,A.f0r,A.f0s,A.f0u,A.f0v,A.eHT,A.eHS,A.eHA,A.eHz,A.eHv,A.eHu,A.eHw,A.eHt,A.eHI,A.eHH,A.eHJ,A.eHB,A.eHN,A.eHE,A.eHP,A.eHD,A.eHQ,A.eHC,A.e9f,A.e94,A.e9e,A.e90,A.e9g,A.e9i,A.e91,A.e92,A.e9D,A.e9C,A.e9t,A.e9u,A.e9v,A.e9p,A.e9q,A.e9o,A.e9r,A.e9n,A.e9s,A.e9m,A.e9k,A.d9g,A.ejp,A.ej1,A.ej0,A.eja,A.ejj,A.ej9,A.ejk,A.ej8,A.ejl,A.ej7,A.ej6,A.ejn,A.ej5,A.ejd,A.ej4,A.eje,A.ej3,A.ejf,A.ej2,A.eq_,A.epZ,A.eq2,A.epY,A.eq3,A.epX,A.eq4,A.epW,A.eq5,A.epV,A.eq6,A.epU,A.e63,A.e6_,A.e5Z,A.e5Y,A.e69,A.e5X,A.e6a,A.e5W,A.e6b,A.e5V,A.e6c,A.e6d,A.e6e,A.e5U,A.e66,A.epg,A.ep5,A.epi,A.epc,A.epj,A.epb,A.epk,A.epa,A.ep9,A.ep8,A.ep4,A.ep3,A.ep2,A.dyH,A.dyy,A.dyz,A.dyC,A.dyD,A.dyG,A.e1X,A.e1O,A.e1Y,A.e2_,A.e1T,A.e20,A.e1S,A.e21,A.e1R,A.e1Q,A.e23,A.e1P,A.e24,A.e1M,A.e25,A.e1L,A.e26,A.e1K,A.e5D,A.e5E,A.e5L,A.e5K,A.e5M,A.e5I,A.e5P,A.e5H,A.e5Q,A.e5G,A.e5R,A.e5S,A.e5F,A.e5T,A.e56,A.e4O,A.e4P,A.e4T,A.e4S,A.e52,A.e50,A.e4V,A.e54,A.e4W,A.e55,A.dGB,A.dGr,A.dGp,A.dGw,A.dGu,A.dGx,A.dGt,A.dGy,A.dGz,A.dJq,A.dJe,A.dJd,A.dJf,A.dJi,A.dJh,A.dJg,A.dJm,A.dJn,A.dJo,A.dJp,A.dv4,A.dv3,A.duU,A.dv_,A.duY,A.dv1,A.duW,A.dv2,A.duV,A.dNd,A.dNc,A.dN4,A.dN8,A.dN7,A.dN9,A.dN6,A.dN5,A.dz3,A.dyV,A.dyU,A.dyY,A.dyT,A.dyZ,A.dyS,A.dz_,A.dyR,A.dz0,A.dyQ,A.dyP,A.dyO,A.bHO,A.bHQ,A.bHD,A.bHF,A.bCH,A.bCI,A.bCG,A.bCJ,A.bD_,A.bCo,A.bCQ,A.bCR,A.bCO,A.bCP,A.bCM,A.bCN,A.bCW,A.bCL,A.bCX,A.bCp,A.bCE,A.bCu,A.bCv,A.bCt,A.bCw,A.bCs,A.bCx,A.bCy,A.bCr,A.bCz,A.bCq,A.dJx,A.dJv,A.dJu,A.dJz,A.dJy,A.dJA,A.dJB,A.eqa,A.eq9,A.eq8,A.eqf,A.eqb,A.eqd,A.eqe,A.dYw,A.dYy,A.dYn,A.dYo,A.dYq,A.dYs,A.dYt,A.dYu,A.dYv,A.dYP,A.dYR,A.dYH,A.dYD,A.dYI,A.dYJ,A.dYC,A.dYG,A.dYF,A.dYE,A.dYO,A.f0K,A.f0L,A.f0M,A.f0N,A.f0O,A.f0P,A.f0Q,A.f0R,A.cag,A.caf,A.eud,A.eu9,A.eu8,A.eub,A.eua,A.dLx,A.dLy,A.dLs,A.dLu,A.dLv,A.dLt,A.dLw,A.dxw,A.dxt,A.dxs,A.dxu,A.dxr,A.dJ3,A.dJ2,A.dJ1,A.dJ0,A.dJ7,A.dJ_,A.dIZ,A.dJ9,A.dIY,A.dJa,A.dIX,A.dJb,A.dJc,A.dIW,A.e2Y,A.e2Z,A.e2X,A.e3_,A.e2W,A.e32,A.e34,A.e30,A.e35,A.ebs,A.ebt,A.ebq,A.ebr,A.ebp,A.ebu,A.ebv,A.ebw,A.ebx,A.epO,A.epQ,A.epN,A.epM,A.epS,A.epL,A.e1D,A.e1E,A.e1w,A.e1v,A.e1x,A.e1u,A.e1y,A.e1t,A.e1z,A.e1s,A.e1r,A.e1q,A.e1p,A.cmm,A.cmn,A.fx5,A.cmi,A.cmh,A.cmo,A.cmj,A.cmk,A.cac,A.cab,A.dOe,A.dNI,A.dNG,A.dNH,A.dND,A.dO0,A.dNJ,A.dNK,A.dO2,A.dNO,A.dO6,A.dO_,A.dO7,A.dNZ,A.dO8,A.dNY,A.dNX,A.dNW,A.dNV,A.dOc,A.dNU,A.dOd,A.dNT,A.dO3,A.dNN,A.dO4,A.dNM,A.dO5,A.dNL,A.dNB,A.dNA,A.d5D,A.f0D,A.f0E,A.f0F,A.f0G,A.f0H,A.f0I,A.f0J,A.eqo,A.eqp,A.eqn,A.eqm,A.eiG,A.eiR,A.eiT,A.eiN,A.eiU,A.eiM,A.eiL,A.eiX,A.eiK,A.eiY,A.eiJ,A.eiZ,A.eiI,A.ej_,A.eiH,A.eiD,A.eiC,A.eKc,A.dOj,A.dOy,A.dOp,A.dOz,A.dOo,A.dOA,A.dOx,A.dOE,A.dOw,A.dOv,A.dOG,A.dOu,A.dOt,A.dOs,A.dOr,A.dOL,A.dOq,A.dOB,A.dOn,A.dOC,A.dOm,A.dOD,A.dOl,A.ebA,A.ebB,A.ebz,A.ebC,A.eby,A.dwM,A.dwI,A.dwQ,A.dwH,A.dwR,A.dwG,A.dwS,A.dwF,A.dwT,A.dwE,A.dwU,A.dwD,A.dwV,A.dwC,A.dwW,A.dwB,A.dwO,A.dwA,A.dMH,A.dMI,A.dMG,A.dMJ,A.dMF,A.dME,A.dMD,A.dMC,A.dMB,A.dMO,A.dMA,A.dMP,A.dMz,A.dMQ,A.dMy,A.ebg,A.ebh,A.ebf,A.ebi,A.ebe,A.ebj,A.ebd,A.ebk,A.ebc,A.ebb,A.eba,A.eb9,A.eb8])
u(A.bti,A.aJ5)
u(A.aBl,A.bti)
v(C.n4,[A.bdh,A.b7t,A.bo6,A.b6a,A.bmN,A.bmf,A.b6Q,A.bmh,A.bq9,A.bdf,A.bo1,A.bhx,A.boS,A.b7a,A.be9,A.bhy,A.beQ,A.bac,A.b6f,A.bbF,A.agb,A.bqB,A.bdk,A.bdz,A.brl,A.bmg,A.bhL,A.bbM,A.bo_,A.b71,A.bny,A.b6q,A.bbC,A.bmQ])
u(A.aI9,A.aI8)
u(A.azN,A.aI9)
u(A.bt2,A.aIe)
u(A.azQ,A.bt2)
v(C.mc,[A.IM,A.Zf])
v(C.as,[A.bn8,A.acx,A.abs,A.Oi,A.bnC,A.a68,A.b9y,A.b3f,A.dy,A.eE,A.asX,A.fe,A.DV])
u(A.aEh,A.aJU)
u(A.bde,C.p1)
u(A.aBk,A.aJ3)
u(A.bgP,A.aJc)
u(A.aBy,A.aJi)
u(A.bth,A.aJ0)
u(A.aBd,A.bth)
u(A.btp,A.aJf)
u(A.bgU,A.btp)
u(A.bt1,A.aIc)
u(A.azP,A.bt1)
u(A.btf,A.aIZ)
u(A.bgt,A.btf)
u(A.btg,A.aJ_)
u(A.aBc,A.btg)
u(A.aAi,A.aIp)
u(A.bfq,A.aI4)
u(A.bfV,A.aIx)
u(A.auP,A.auO)
u(A.aga,A.auP)
u(A.aBz,A.aJj)
u(A.bt8,A.aIO)
u(A.bgg,A.bt8)
u(A.bt9,A.aIP)
u(A.aAX,A.bt9)
u(A.btq,A.aJq)
u(A.aBL,A.btq)
u(A.bt4,A.aIs)
u(A.bfQ,A.bt4)
u(A.bt0,A.aIa)
u(A.bfv,A.bt0)
u(A.bte,A.aIX)
u(A.bgr,A.bte)
u(A.aIz,A.aIy)
u(A.aAu,A.aIz)
u(A.btm,A.aJb)
u(A.bgO,A.btm)
u(A.bt6,A.aIA)
u(A.aAv,A.bt6)
u(A.btk,A.aJ8)
u(A.bgL,A.btk)
u(A.bt_,A.aI7)
u(A.bfu,A.bt_)
u(A.bt5,A.aIv)
u(A.bfT,A.bt5)
u(A.btj,A.aJ7)
u(A.bgK,A.btj)
w(A.aJ5,C.c7)
w(A.bti,A.mb)
w(A.aI8,C.c7)
w(A.aI9,A.mb)
w(A.aIe,C.c7)
w(A.bt2,A.mb)
w(A.aJU,C.eJ)
w(A.aJ3,C.c7)
w(A.aJc,C.c7)
w(A.aJi,C.c7)
w(A.aIc,C.c7)
w(A.bt1,A.mb)
w(A.aJ0,C.c7)
w(A.bth,A.mb)
w(A.aJf,C.c7)
w(A.btp,A.mb)
w(A.aIZ,C.c7)
w(A.btf,A.mb)
w(A.aJ_,C.c7)
w(A.btg,A.mb)
w(A.aIp,C.c7)
w(A.aI4,C.c7)
w(A.aIx,C.c7)
w(A.auO,C.c7)
w(A.auP,A.mb)
w(A.aJj,C.c7)
w(A.aIO,C.c7)
w(A.bt8,A.mb)
w(A.aIP,C.c7)
w(A.bt9,A.mb)
w(A.aIa,C.c7)
w(A.bt0,A.mb)
w(A.aIs,C.c7)
w(A.bt4,A.mb)
w(A.aIX,C.c7)
w(A.bte,A.mb)
w(A.aJq,C.c7)
w(A.btq,A.mb)
w(A.aIy,C.c7)
w(A.aIz,A.mb)
w(A.aIA,C.c7)
w(A.bt6,A.mb)
w(A.aJ8,C.c7)
w(A.btk,A.mb)
w(A.aJb,C.c7)
w(A.btm,A.mb)
w(A.aI7,C.c7)
w(A.bt_,A.mb)
w(A.aIv,C.c7)
w(A.bt5,A.mb)
w(A.aJ7,C.c7)
w(A.btj,A.mb)})()
C.ke(b.typeUniverse,JSON.parse('{"Tw":{"af":[],"r":[]},"bge":{"ag":["Tw"]},"TX":{"af":[],"r":[]},"aBl":{"ag":["TX"]},"bdh":{"aA":[]},"Sp":{"af":[],"r":[]},"azN":{"ag":["Sp"]},"Su":{"af":[],"r":[]},"azQ":{"ag":["Su"]},"b7t":{"aA":[]},"acx":{"as":[],"r":[]},"abs":{"as":[],"r":[]},"aEg":{"af":[],"r":[]},"LD":{"af":[],"r":[]},"aA6":{"ag":["LD"]},"bn8":{"as":[],"r":[]},"Oi":{"as":[],"r":[]},"bo6":{"aA":[]},"bnC":{"as":[],"r":[]},"b6a":{"aA":[]},"aEh":{"ag":["aEg"]},"bmN":{"aA":[]},"bmf":{"aA":[]},"b6Q":{"aA":[]},"bmh":{"aA":[]},"bq9":{"aA":[]},"TW":{"af":[],"r":[]},"bde":{"aA":[]},"aBk":{"ag":["TW"]},"bdf":{"aA":[]},"Ua":{"af":[],"r":[]},"Um":{"af":[],"r":[]},"bgP":{"ag":["Ua"]},"bo1":{"aA":[]},"aBy":{"ag":["Um"]},"TU":{"af":[],"r":[]},"Uh":{"af":[],"r":[]},"Ss":{"af":[],"r":[]},"aBd":{"ag":["TU"]},"bhx":{"aA":[]},"bgU":{"ag":["Uh"]},"boS":{"aA":[]},"azP":{"ag":["Ss"]},"b7a":{"aA":[]},"TO":{"af":[],"r":[]},"TT":{"af":[],"r":[]},"bgt":{"ag":["TO"]},"be9":{"aA":[]},"aBc":{"ag":["TT"]},"bhy":{"aA":[]},"TR":{"af":[],"r":[]},"SP":{"af":[],"r":[]},"T4":{"af":[],"r":[]},"aBa":{"ag":["TR"]},"beQ":{"aA":[]},"bfJ":{"ag":["SP"]},"aAi":{"ag":["T4"]},"bac":{"aA":[]},"Sk":{"af":[],"r":[]},"Ti":{"af":[],"r":[]},"St":{"af":[],"r":[]},"bfq":{"ag":["Sk"]},"b6f":{"aA":[]},"bfV":{"ag":["Ti"]},"bbF":{"aA":[]},"bfD":{"ag":["St"]},"agb":{"aA":[]},"ag9":{"af":[],"r":[]},"aga":{"ag":["ag9"]},"T5":{"af":[],"r":[]},"aAj":{"ag":["T5"]},"Un":{"af":[],"r":[]},"aBz":{"ag":["Un"]},"bqB":{"aA":[]},"TB":{"af":[],"r":[]},"TD":{"af":[],"r":[]},"bgg":{"ag":["TB"]},"bdk":{"aA":[]},"aAX":{"ag":["TD"]},"bdz":{"aA":[]},"a68":{"as":[],"r":[]},"Us":{"af":[],"r":[]},"Tc":{"af":[],"r":[]},"Sq":{"af":[],"r":[]},"T3":{"af":[],"r":[]},"TP":{"af":[],"r":[]},"U0":{"af":[],"r":[]},"Ul":{"af":[],"r":[]},"TN":{"af":[],"r":[]},"aBL":{"ag":["Us"]},"brl":{"aA":[]},"bfQ":{"ag":["Tc"]},"bmg":{"aA":[]},"bfv":{"ag":["Sq"]},"bfK":{"ag":["T3"]},"bhL":{"aA":[]},"aB6":{"ag":["TP"]},"aBp":{"ag":["U0"]},"bgY":{"ag":["Ul"]},"bgr":{"ag":["TN"]},"b9y":{"as":[],"r":[]},"b3f":{"as":[],"r":[]},"dy":{"as":[],"r":[]},"eE":{"as":[],"r":[]},"asX":{"as":[],"r":[]},"fe":{"as":[],"r":[]},"DV":{"as":[],"r":[]},"Tj":{"af":[],"r":[]},"aAu":{"ag":["Tj"]},"bbM":{"aA":[]},"Uo":{"af":[],"r":[]},"bh0":{"ag":["Uo"]},"U9":{"af":[],"r":[]},"Tk":{"af":[],"r":[]},"U1":{"af":[],"r":[]},"bgO":{"ag":["U9"]},"bo_":{"aA":[]},"aAv":{"ag":["Tk"]},"b71":{"aA":[]},"bgL":{"ag":["U1"]},"bny":{"aA":[]},"So":{"af":[],"r":[]},"Tg":{"af":[],"r":[]},"TY":{"af":[],"r":[]},"bfu":{"ag":["So"]},"b6q":{"aA":[]},"bfT":{"ag":["Tg"]},"bbC":{"aA":[]},"bgK":{"ag":["TY"]},"bmQ":{"aA":[]}}'))
C.Oq(b.typeUniverse,JSON.parse('{"mb":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.az
return{e8:w("cY"),G:w("x"),l:w("bs<n,n>"),J:w("bs<n,Q>"),I:w("bs<n,I>"),Z:w("a_"),M:w("O<d5>"),R:w("O<ag1>"),gh:w("O<aOI>"),Y:w("O<a11>"),V:w("O<aa>"),O:w("O<x>"),ey:w("O<P>"),dh:w("O<QY>"),aJ:w("O<aw<aB>>"),w:w("O<a_>"),k:w("O<ak<x>>"),x:w("O<ak<QY>>"),gO:w("O<ak<ak<Q>>>"),bj:w("O<ak<n>>"),b:w("O<ak<Q>>"),ez:w("O<a1<n,aB>>"),g:w("O<v>"),bz:w("O<vi>"),ds:w("O<aq4>"),v:w("O<hw>"),T:w("O<+(v,Q)>"),ev:w("O<+(v,I)>"),L:w("O<+(n,n)>"),fT:w("O<+(Q,r)>"),U:w("O<+(I,n)>"),u:w("O<+(I,I)>"),c:w("O<+(n,n,a_)>"),e:w("O<+(n,Q,Q,I)>"),o:w("O<+(n,I,n,I)>"),d:w("O<+(n,n,Q,Q,a1<n,Q>)>"),_:w("O<u9>"),q:w("O<cJ>"),fQ:w("O<a83>"),s:w("O<n>"),cF:w("O<ao>"),X:w("O<vs>"),B:w("O<a8O>"),p:w("O<r>"),bL:w("O<a97>"),C:w("O<l3>"),aq:w("O<b63>"),a_:w("O<a9l>"),cS:w("O<a9s>"),cB:w("O<mW>"),ba:w("O<a9C>"),d9:w("O<NT>"),bi:w("O<a9V>"),eW:w("O<Bb>"),fY:w("O<Xe>"),aX:w("O<Em>"),ea:w("O<aaJ>"),gB:w("O<abd>"),ed:w("O<O9>"),g4:w("O<bhK>"),aS:w("O<YL>"),ac:w("O<abw>"),cd:w("O<Bl>"),fr:w("O<acn>"),e4:w("O<Zs>"),r:w("O<acs>"),au:w("O<aF6>"),f7:w("O<T>"),n:w("O<Q>"),t:w("O<I>"),dS:w("O<aA?>"),d4:w("O<n?>"),gJ:w("cn<aga>"),A:w("cn<ag<af>>"),bF:w("ak<x>"),gl:w("ak<P>"),ew:w("ak<aB>"),a:w("ak<@>"),bW:w("ak<I>"),h:w("a1<n,@>"),f:w("a1<@,@>"),bd:w("J<j0,n>"),dv:w("J<n,n>"),fR:w("J<+(Q,r),r>"),m:w("iB"),gA:w("ya"),P:w("co"),K:w("aB"),W:w("vi"),D:w("j0"),fA:w("AU"),N:w("n"),bO:w("ao"),j:w("lO"),E:w("bl<Q>"),cL:w("a8P"),gj:w("cw<n>"),dg:w("e3<qb>"),F:w("b6t"),a2:w("B7"),f3:w("qb"),es:w("Eq"),gV:w("mA"),y:w("T"),i:w("Q"),z:w("@"),S:w("I"),Q:w("ak<@>?"),fF:w("a1<@,@>?"),cK:w("aB?"),az:w("q0?"),dk:w("n?"),cD:w("Q?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aOi=new C.d5(0,0.85)
D.f57=new C.w("Tap once to start the chain",null,E.QY,null,null,null,null,null,null,null,null,null)
D.aNS=new C.bF(D.aOi,null,null,D.f57,null)
D.aO9=new C.d5(0,0.1)
D.aPb=new A.aOS(0,0,0)
D.If=new A.aOS(0,0.5,0)
D.aPJ=new C.ay(B.bm,1,B.r,-1)
D.aR9=new C.aX(0,1/0,0,290)
D.aK5=new C.F(!0,B.c1,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ0=new C.w("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aK5,null,B.L,null,null,null,null,null,null,null)
D.dMZ=new C.C(B.nn,D.eZ0,null)
D.aWM=new C.cx(B.A,null,null,D.dMZ,null)
D.f1s=new C.w("Press Drop! and watch them fall from 20 metres.",null,B.kg,null,B.L,null,null,null,null,null,null,null)
D.dN2=new C.C(B.nn,D.f1s,null)
D.aX2=new C.cx(B.A,null,null,D.dN2,null)
D.eJK=new C.F(!0,B.j_,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5S=new C.w("Draw anywhere",null,D.eJK,null,null,null,null,null,null,null,null,null)
D.aX6=new C.cx(B.A,null,null,D.f5S,null)
D.ePY=new C.w("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aK5,null,B.L,null,null,null,null,null,null,null)
D.dNG=new C.C(B.DP,D.ePY,null)
D.aXo=new C.cx(B.A,null,null,D.dNG,null)
D.a7Z=new C.x(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,B.t)
D.aZ6=new C.x(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,B.t)
D.aZr=new C.x(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,B.t)
D.aZJ=new C.x(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,B.t)
D.b_s=new C.x(1,1,0.16470588235294117,0.10196078431372549,B.t)
D.Td=new C.x(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,B.t)
D.b_x=new C.x(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,B.t)
D.b_B=new C.x(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,B.t)
D.b_F=new C.x(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,B.t)
D.Te=new C.x(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,B.t)
D.b0B=new C.x(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,B.t)
D.b0G=new C.x(1,0.16470588235294117,0.16470588235294117,0.2,B.t)
D.b0V=new C.x(1,1,0.4196078431372549,0.4196078431372549,B.t)
D.b1S=new C.x(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,B.t)
D.a91=new C.x(1,1,0.23137254901960785,0.12156862745098039,B.t)
D.b2g=new C.x(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,B.t)
D.b2l=new C.x(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,B.t)
D.za=new C.x(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,B.t)
D.b2W=new C.x(1,1,0.9686274509803922,0.8,B.t)
D.a9m=new C.x(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,B.t)
D.b3w=new C.x(1,1,0.47843137254901963,0.09411764705882353,B.t)
D.b3D=new C.x(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,B.t)
D.a9x=new C.x(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,B.t)
D.TI=new C.x(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,B.t)
D.b47=new C.x(1,0.984313725490196,0.6509803921568628,0.8509803921568627,B.t)
D.a9C=new C.x(1,1,0.5411764705882353,0.5411764705882353,B.t)
D.b4u=new C.x(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,B.t)
D.TP=new C.x(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,B.t)
D.a9K=new C.x(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,B.t)
D.a9O=new C.x(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,B.t)
D.b5E=new C.x(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,B.t)
D.b5G=new C.x(1,0.043137254901960784,0.10588235294117647,0.2,B.t)
D.b5K=new C.x(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,B.t)
D.aa9=new C.x(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,B.t)
D.b69=new C.x(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,B.t)
D.D8=new C.x(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,B.t)
D.aaj=new C.x(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,B.t)
D.b7c=new C.x(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,B.t)
D.b7f=new C.x(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,B.t)
D.b7o=new C.x(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,B.t)
D.b7r=new C.x(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,B.t)
D.b7y=new C.x(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,B.t)
D.aaF=new C.x(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,B.t)
D.b8_=new C.x(1,0.24705882352941178,0.3843137254901961,0.07058823529411765,B.t)
D.aaX=new C.x(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,B.t)
D.b8s=new C.x(1,0.7490196078431373,0.8431372549019608,1,B.t)
D.b8W=new C.x(1,1,0.41568627450980394,0,B.t)
D.b94=new C.x(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,B.t)
D.rq=new C.x(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,B.t)
D.b9t=new C.x(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,B.t)
D.b9K=new C.x(1,1,0.9529411764705882,0.6274509803921569,B.t)
D.b9O=new C.x(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,B.t)
D.bdb=new C.b7(11e6)
D.ac8=new C.M(0,0,7,0)
D.bed=new C.M(0,0,8,6)
D.aca=new C.M(0,0,9,0)
D.beK=new C.M(10,0,10,4)
D.beO=new C.M(10,10,10,6)
D.acj=new C.M(10,6,10,2)
D.V4=new C.M(10,6,10,4)
D.bf2=new C.M(10,6,10,8)
D.bf4=new C.M(10,8,0,10)
D.bfG=new C.M(12,8,8,8)
D.bfM=new C.M(14,0,14,30)
D.acB=new C.M(14,0,14,6)
D.bfN=new C.M(14,10,10,10)
D.acH=new C.M(14,10,8,12)
D.bgj=new C.M(14,8,14,6)
D.bgM=new C.M(16,4,16,28)
D.bgW=new C.M(16,8,16,12)
D.bjM=new C.M(4,4,6,2)
D.bjO=new C.M(4,4,8,2)
D.bkm=new C.M(8,14,8,12)
D.bkx=new C.M(8,6,16,0)
D.eP9=new C.w("REACTION LAB",null,X.aKG,null,null,null,null,B.a2,null,1,null,null)
D.bla=new C.bE(1,B.bo,D.eP9,null)
D.eGG=new C.F(!0,B.c,null,null,null,null,17,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eS3=new C.w("CORE PROTOCOL",null,D.eGG,null,null,null,null,null,null,null,null,null)
D.blm=new C.bE(1,B.bo,D.eS3,null)
D.eNW=new C.w("Wire selected",null,B.hb,null,null,null,null,null,null,null,null,null)
D.bmb=new C.bE(1,B.bo,D.eNW,null)
D.afJ=new C.a_(62712,"MaterialIcons",!1)
D.bpn=new C.a_(62878,"MaterialIcons",!1)
D.Xf=new C.a_(62908,"MaterialIcons",!1)
D.bpq=new C.a_(62918,"MaterialIcons",!1)
D.bpr=new C.a_(62931,"MaterialIcons",!1)
D.bpt=new C.a_(62951,"MaterialIcons",!1)
D.bpv=new C.a_(62970,"MaterialIcons",!1)
D.bpK=new C.a_(63064,"MaterialIcons",!1)
D.bpM=new C.a_(63070,"MaterialIcons",!1)
D.wX=new C.a_(63128,"MaterialIcons",!1)
D.Ey=new C.a_(63726,"MaterialIcons",!1)
D.br3=new C.a_(983122,"MaterialIcons",!1)
D.bri=new C.a_(983247,"MaterialIcons",!1)
D.brp=new C.a_(983316,"MaterialIcons",!1)
D.brv=new C.a_(983415,"MaterialIcons",!1)
D.brw=new C.a_(983417,"MaterialIcons",!1)
D.agV=new C.a_(983442,"MaterialIcons",!1)
D.agW=new C.a_(983443,"MaterialIcons",!1)
D.ah_=new C.a_(983467,"MaterialIcons",!1)
D.brC=new C.a_(983501,"MaterialIcons",!1)
D.brN=new C.a_(983616,"MaterialIcons",!1)
D.ah8=new C.a_(983617,"MaterialIcons",!1)
D.brO=new C.a_(983624,"MaterialIcons",!1)
D.bs_=new C.a_(983776,"MaterialIcons",!1)
D.bsh=new C.a_(984561,"MaterialIcons",!1)
D.bsQ=new C.ac(B.Ag,24,B.aM,null,null,null)
D.btz=new C.ac(D.wX,23,B.al,null,null,null)
D.bu7=new C.ac(B.m2,21,B.al,null,null,null)
D.bux=new C.ac(B.p6,22,B.al,null,null,null)
D.br2=new C.a_(983117,"MaterialIcons",!1)
D.bvt=new C.ac(D.br2,28,B.c,null,null,null)
D.bvJ=new C.ac(B.j1,18,null,null,null,null)
D.bxr=new C.ac(B.e4,21,B.cL,null,null,null)
D.bxG=new C.ac(B.m3,null,B.al,null,null,null)
D.bxQ=new C.ac(B.Ya,21,B.al,null,null,null)
D.ail=new C.ac(B.et,19,null,null,null,null)
D.m5=new C.ac(B.uy,21,B.al,null,null,null)
D.bB5=new C.ac(B.wV,21,B.al,null,null,null)
D.bBc=new C.ac(B.j1,21,B.al,null,null,null)
D.bC1=new C.ac(B.fC,20,B.aA,null,null,null)
D.bCE=new C.ac(B.dO,null,B.aM,null,null,null)
D.bCY=new C.ac(B.jI,null,B.aA,null,null,null)
D.cVn=w([B.dC,B.de,B.dC],x.O)
D.bF0=new C.a7(B.a3,B.a7,B.w,D.cVn,null,null)
D.cBf=w([B.c9,B.bv],x.O)
D.bF8=new C.a7(B.b0,B.b5,B.w,D.cBf,null,null)
D.clo=w([B.b2,B.jY,B.ri],x.O)
D.bFe=new C.a7(B.b0,B.b5,B.w,D.clo,null,null)
D.bFj=new C.a7(B.b0,B.b5,B.w,B.asa,null,null)
D.cBB=w([B.hY,B.fS],x.O)
D.bFr=new C.a7(B.b0,B.b5,B.w,D.cBB,null,null)
D.ajm=new C.a7(B.b0,B.b5,B.w,H.ZQ,null,null)
D.cF8=w([B.fk,B.dI,B.d3],x.O)
D.bFw=new C.a7(B.b0,B.b5,B.w,D.cF8,null,null)
D.cz8=w([B.nP,B.hX],x.O)
D.bG4=new C.a7(B.b0,B.b5,B.w,D.cz8,null,null)
D.cDz=w([B.fP,B.aG],x.O)
D.bGb=new C.a7(B.b0,B.b5,B.w,D.cDz,null,null)
D.cAZ=w([B.fd,B.aH],x.O)
D.ajt=new C.a7(B.b0,B.b5,B.w,D.cAZ,null,null)
D.cQo=w([B.fc,B.ig,B.bv],x.O)
D.bGk=new C.a7(B.a3,B.a7,B.w,D.cQo,null,null)
D.cYA=w([B.c9,B.c,B.bL],x.O)
D.bGo=new C.a7(B.a3,B.a7,B.w,D.cYA,null,null)
D.cQu=w([B.lk,B.d_],x.O)
D.bGD=new C.a7(B.b0,B.b5,B.w,D.cQu,null,null)
D.c8s=w([B.c9,B.fc],x.O)
D.bGM=new C.a7(B.a3,B.a7,B.w,D.c8s,null,null)
D.asI=w([B.fd,K.w9],x.O)
D.bGT=new C.a7(B.b0,B.b5,B.w,D.asI,null,null)
D.bH8=new C.a7(B.b0,B.b5,B.w,F.ajO,null,null)
D.cZ4=w([B.hY,B.hg],x.O)
D.bHc=new C.a7(B.b0,B.b5,B.w,D.cZ4,null,null)
D.b4b=new C.x(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,B.t)
D.aZc=new C.x(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,B.t)
D.cwN=w([D.b4b,D.aZc],x.O)
D.bHl=new C.a7(B.b0,B.b5,B.w,D.cwN,null,null)
D.bHW=new C.a7(B.ax,B.aC,B.w,B.ZN,null,null)
D.b80=new C.x(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,B.t)
D.d_c=w([D.b80,B.II],x.O)
D.bI1=new C.a7(B.b0,B.b5,B.w,D.d_c,null,null)
D.cJk=w([B.aH,B.x],x.O)
D.bI6=new C.a7(B.b0,B.b5,B.w,D.cJk,null,null)
D.bI9=new C.a7(B.b0,B.b5,B.w,K.asd,null,null)
D.b7v=new C.x(1,0.788235294117647,0.6509803921568628,0.4196078431372549,B.t)
D.b87=new C.x(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,B.t)
D.ckX=w([B.Jd,D.b7v,D.b87],x.O)
D.bIh=new C.a7(B.b0,B.b5,B.w,D.ckX,null,null)
D.c8N=w([B.dD,B.hI],x.O)
D.bIw=new C.a7(B.b0,B.b5,B.w,D.c8N,null,null)
D.bIC=new C.a7(B.ax,B.aC,B.w,B.a_z,null,null)
D.ajQ=w([0,2,4,6,7,9,11],x.t)
D.bJa=w([0,4,7],x.t)
D.ajU=w([0,4,7,12],x.t)
D.bJb=w([0,4,7,4],x.t)
D.arW=w([B.h0,B.q6],x.O)
D.arw=w([B.hs,B.cW],x.O)
D.aq3=w([B.bF,B.dI],x.O)
D.cto=w([B.aM,B.dD],x.O)
D.czu=w([B.cL,B.eY],x.O)
D.cRv=w([B.c8,B.lM],x.O)
D.apz=w([B.d3,B.kq],x.O)
D.cyc=w([B.bL,B.aI],x.O)
D.bJv=w([D.arW,D.arw,B.ZU,D.aq3,D.cto,D.czu,B.ar7,D.cRv,D.apz,D.cyc],x.k)
D.ajX=w([1],x.n)
D.bO9=w([120,220,380],x.t)
D.bRU=w([12,16,19,24],x.t)
D.bS2=w([1400,800,450,2400],x.t)
D.bW2=w([1,2,3],x.n)
D.bWd=w([1,-1],x.n)
D.bWe=w([0,0.6,1],x.n)
D.c_m=w([250,450,900,1500],x.t)
D.dKg=new C.v(26,-8)
D.dKF=new C.v(52,0)
D.dKf=new C.v(26,8)
D.c2A=w([B.J,D.dKg,D.dKF,D.dKf],x.g)
D.aZU=new C.x(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,B.t)
D.b7O=new C.x(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,B.t)
D.b6b=new C.x(1,0.7450980392156863,0.5411764705882353,0.4,B.t)
D.ban=new C.x(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,B.t)
D.b5w=new C.x(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,B.t)
D.aoS=w([D.aZU,D.b7O,D.b6b,D.ban,D.b5w],x.O)
D.ecq=new C.A("type","Typewriter")
D.e62=new C.A("bounce","Bounce")
D.ed9=new C.A("wave","Wave")
D.ee9=new C.A("zoom","Zoom")
D.cfS=w([D.ecq,D.e62,D.ed9,B.a2x,F.aGh,D.ee9,F.aGj],x.L)
D.cg3=w([50,25,75],x.t)
D.dOa=new A.j0("battery","Battery","\ud83d\udd0b",B.bm,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.dOd=new A.j0("solar","Solar panel","\u2600\ufe0f",B.cS,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.dOq=new A.j0("crank","Hand crank","\ud83d\udd04",B.d3,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.dOk=new A.j0("turbine","Wind turbine","\ud83c\udf2c\ufe0f",B.b2,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.dOg=new A.j0("switch","Switch","\ud83c\udf9a\ufe0f",B.bF,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.dOr=new A.j0("fuse","Fuse","\ud83e\uddef",B.cL,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.dO5=new A.j0("pot","Dimmer knob","\ud83c\udf9b\ufe0f",B.hs,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.dOn=new A.j0("resistor","Resistor","\u3030\ufe0f",B.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.dOo=new A.j0("bulb","Light bulb","\ud83d\udca1",B.fP,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.dOf=new A.j0("led","LED","\ud83d\udd34",B.aG,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.dOh=new A.j0("motor","Motor","\u2699\ufe0f",B.bL,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.dOm=new A.j0("buzzer","Buzzer","\ud83d\udd14",B.c8,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.dOb=new A.j0("heater","Heater","\ud83d\udd25",B.d3,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.dOl=new A.j0("capacitor","Capacitor","\ud83e\udeab",B.cH,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.dOi=new A.j0("radio","Radio","\ud83d\udcfb",B.nU,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.dOu=new A.j0("tv","TV","\ud83d\udcfa",B.bd,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.dO7=new A.j0("voltmeter","Voltmeter","\ud83e\udded",B.bs,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.dO9=new A.j0("ammeter","Ammeter","\ud83d\udcdf",B.aM,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.dOc=new A.j0("fan","Fan","\ud83c\udf00",B.b2,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.dOt=new A.j0("speaker","Speaker","\ud83d\udd0a",B.c8,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.dOp=new A.j0("clock","Digital clock","\u23f0",B.bm,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.dOj=new A.j0("calculator","Calculator","\ud83e\uddee",B.IC,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.dOv=new A.j0("phone","Phone charging","\ud83d\udcf1",B.cH,"Charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.dOs=new A.j0("router","WiFi router","\ud83d\udcf6",B.hs,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.dOw=new A.j0("siren","Siren","\ud83d\udea8",B.aG,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.dO6=new A.j0("toycar","Toy car","\ud83d\ude97",B.d3,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.dOx=new A.j0("kettle","Kettle","\ud83e\uded6",B.nX,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.dO8=new A.j0("lamp","Desk lamp","\ud83e\ude94",B.fP,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.dOe=new A.j0("lights","Party lights","\ud83c\udf84",B.nU,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.N6=w([D.dOa,D.dOd,D.dOq,D.dOk,D.dOg,D.dOr,D.dO5,D.dOn,D.dOo,D.dOf,D.dOh,D.dOm,D.dOb,D.dOl,D.dOi,D.dOu,D.dO7,D.dO9,D.dOc,D.dOt,D.dOp,D.dOj,D.dOv,D.dOs,D.dOw,D.dO6,D.dOx,D.dO8,D.dOe],C.az("O<j0>"))
D.cki=w([1,2,3,4,5,6,7],x.n)
D.clt=w([0,5,10,15,18,20,25],x.t)
D.e7C=new C.A("fish","Fish")
D.e7E=new C.A("fly","Fireflies")
D.e60=new C.A("bird","Birds")
D.cpA=w([D.e7C,D.e7E,D.e60],x.L)
D.ctE=w([900,500,250,1600],x.t)
D.cx7=w([B.fv,B.bJ,B.Ja,B.eO],x.O)
D.cx8=w([0.78,1],x.n)
D.aq4=w([0,2,4,7,9,12,14,16],x.t)
D.aq9=w(["A","T","C","G"],x.s)
D.cxE=w(["A","U","C","G"],x.s)
D.ZK=w([B.aG,B.cS,B.br,B.b2,B.nU],x.O)
D.cyb=w([1,2.76,5.4,8.93,13.3],x.n)
D.aqg=w([B.d3,B.cS,B.c8,B.bm],x.O)
D.cyR=w([B.aH,B.aG,B.d3,B.cS,B.br,B.cE,B.cb,B.bz,B.II],x.O)
D.ZO=w([0.04,0.17,0.3],x.n)
D.czc=w([1,0.6,0.38,0.22,0.12],x.n)
D.czq=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.Fo=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.ekZ=new A.u9("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.el4=new A.u9("Medium engine","A good all-rounder.",0.3,0.9)
D.el3=new A.u9("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Fp=w([D.ekZ,D.el4,D.el3],x._)
D.dXB=new C.A(6,"Easy")
D.dY8=new C.A(8,"Medium")
D.dUd=new C.A(10,"Hard")
D.cAd=w([D.dXB,D.dY8,D.dUd],x.U)
D.aqs=w([0.55,0.78,1],x.n)
D.cBG=w([0.93,0.975,1],x.n)
D.cBY=w(["Mama","Baba","Bibi","Babu","Dada","Kaka"],x.s)
D.aqC=w([B.c,B.hg,B.pV,B.aH],x.O)
D.dGa=new A.Hg("NGMY Tree Story","A family grows, one branch at a time")
D.dG7=new A.Hg("Coin Hero","A little coin saves up and wins the day")
D.dGb=new A.Hg("Space Voyage","The NGMY rocket explores the stars")
D.dG6=new A.Hg("Ocean Friends","Fish, bubbles and a friendly whale")
D.dG8=new A.Hg("Rainy Village","Storm clouds, then a rainbow")
D.dG9=new A.Hg("Spark Adventure","Follow a spark round a circuit")
D.Ns=w([D.dGa,D.dG7,D.dGb,D.dG6,D.dG8,D.dG9],C.az("O<Hg>"))
D.cD9=w([1,0.7,0.45,0.28,0.16,0.1,0.06],x.n)
D.cDa=w([1,0.55,0.32,0.2,0.12,0.07],x.n)
D.fae=new A.x9("Moon",1737,4291941851)
D.fab=new A.x9("Earth",6371,4281908728)
D.faf=new A.x9("Neptune",24622,4284524026)
D.fag=new A.x9("Saturn",58232,4294829706)
D.fac=new A.x9("Jupiter",69911,4294677052)
D.fah=new A.x9("Sun",696340,4294688548)
D.fai=new A.x9("Sirius A",119e4,4290763774)
D.fa9=new A.x9("Arcturus",179e5,4294818420)
D.faa=new A.x9("Betelgeuse",531e6,4294472049)
D.fad=new A.x9("UY Scuti",667e6,4293870660)
D.Nu=w([D.fae,D.fab,D.faf,D.fag,D.fac,D.fah,D.fai,D.fa9,D.faa,D.fad],C.az("O<x9>"))
D.ehg=new C.bz("glow","Glow",B.Xh)
D.ef7=new C.bz("rainbow","Rainbow",B.ns)
D.efs=new C.bz("stars","Stars",B.hR)
D.eeS=new C.bz("sparks","Sparks",B.dO)
D.egC=new C.bz("fire","Fire",B.uz)
D.cDl=w([D.ehg,D.ef7,D.efs,D.eeS,D.egC],x.c)
D.aqG=w([B.br,B.aG,B.cS,B.de],x.O)
D.cEe=w([0.2,1],x.n)
D.ekW=new A.u9("Radar","Shows your height above the ground.",0.1,0)
D.ekX=new A.u9("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.ekU=new A.u9("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aqO=w([D.ekW,D.ekX,D.ekU],x._)
D.efY=new C.bz("attract","Attract",B.xe)
D.efM=new C.bz("scare","Scare",B.rT)
D.ef0=new C.bz("food","Food",B.t_)
D.br8=new C.a_(983158,"MaterialIcons",!1)
D.egg=new C.bz("hunt","Hunt",D.br8)
D.cEP=w([D.efY,D.efM,D.ef0,D.egg],x.c)
D.cFc=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cFq=w([47,100,220,470,1000],x.n)
D.ar4=w([0,2,4,7,9],x.t)
D.cGV=w([1,0.6,0.45,0.3,0.22,0.15],x.n)
D.fk4=new A.ED("Moon",1.62,B.fc,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.fk2=new A.ED("Mars",3.71,B.aG,"Mars has about 38 percent of Earth's gravity.")
D.fk5=new A.ED("Mercury",3.7,B.jy,"Mercury is small, so its gravity is like Mars.")
D.fk_=new A.ED("Venus",8.87,B.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.fk1=new A.ED("Earth",9.81,B.b2,"On Earth gravity is strong, and the air also slows you down.")
D.fk3=new A.ED("Neptune",11.15,B.de,"Neptune pulls a little harder than Earth.")
D.fk0=new A.ED("Jupiter",24.79,B.d3,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.qt=w([D.fk4,D.fk2,D.fk5,D.fk_,D.fk1,D.fk3,D.fk0],C.az("O<ED>"))
D.cH8=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a_2=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cHL=w([0.2,0.5,0.8],x.n)
D.cHV=w([1,2,3,4,5,6],x.n)
D.bpF=new C.a_(63040,"MaterialIcons",!1)
D.efP=new C.bz("peg","Peg",D.bpF)
D.ef4=new C.bz("bar","Bar",O.Ak)
D.efu=new C.bz("erase","Erase",B.KT)
D.cHW=w([D.efP,D.ef4,D.efu],x.c)
D.enn=new C.cJ(B.bh,B.J,4)
D.cI5=w([D.enn],x.q)
D.arh=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aNC=new A.IM(0,"accordion")
D.cyi=w([B.j3,B.Al,B.Eh],x.w)
D.cEH=w(["Mail","SMS","Ad"],x.s)
D.cyK=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.fih=new A.zp(D.aNC,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.arW,D.cyi,D.cEH,D.cyK)
D.a5N=new A.IM(1,"flip")
D.cOa=w([B.ql,Z.EP,B.uF],x.w)
D.cJt=w(["Unlock","Verify","Secure"],x.s)
D.cxp=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.fig=new A.zp(D.a5N,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.arw,D.cOa,D.cJt,D.cxp)
D.aND=new A.IM(2,"towers")
D.cIn=w([B.x9,B.pa,B.hQ],x.w)
D.cI1=w(["Save","Grow","Earn"],x.s)
D.clC=w(["","",""],x.s)
D.fii=new A.zp(D.aND,"GROWTH SKYLINE","Solid towers rise from the floor and light up",B.ZU,D.cIn,D.cI1,D.clC)
D.a5O=new A.IM(3,"assemble")
D.cP_=w([B.mI,B.hk,B.dO],x.w)
D.cE7=w(["Launch","Charge","Shine"],x.s)
D.cLQ=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.fik=new A.zp(D.a5O,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aq3,D.cP_,D.cE7,D.cLQ)
D.aNE=new A.IM(4,"carousel")
D.cOQ=w([B.bd,B.jd],x.O)
D.cER=w([B.m2,B.aga,B.Y4],x.w)
D.cA3=w(["Explore","Discover","Learn"],x.s)
D.cJR=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.fif=new A.zp(D.aNE,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.cOQ,D.cER,D.cA3,D.cJR)
D.aNF=new A.IM(5,"burst")
D.cHY=w([B.ko,B.u0],x.O)
D.cyF=w([B.kX,B.m0,B.hP],x.w)
D.cyY=w(["Cheer","Win","Love"],x.s)
D.cAX=w(["Make some noise","First place","Share the joy"],x.s)
D.fij=new A.zp(D.aNF,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cHY,D.cyF,D.cyY,D.cAX)
D.ari=w([D.fih,D.fig,D.fii,D.fik,D.fif,D.fij],C.az("O<zp>"))
D.efR=new C.bz("skin","Skin",B.agb)
D.eh3=new C.bz("muscle","Muscles",B.L5)
D.egQ=new C.bz("organ","Organs",B.hP)
D.bp6=new C.a_(62747,"MaterialIcons",!1)
D.egT=new C.bz("bone","Skeleton",D.bp6)
D.eh9=new C.bz("vessel","Blood vessels",B.uI)
D.cIs=w([D.efR,D.eh3,D.egQ,D.egT,D.eh9],x.c)
D.cJi=w([B.hY,B.u8],x.O)
D.ekY=new A.u9("Simple legs","Light. Land gently.",0.15,0.2)
D.el_=new A.u9("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.el2=new A.u9("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.AG=w([D.ekY,D.el_,D.el2],x._)
D.cJZ=w([1.77,3.55,7.15,16.7],x.n)
D.cMd=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.ebV=new C.A("spiral","Spiral")
D.dXz=new C.A("barred","Barred spiral")
D.e78=new C.A("elliptical","Elliptical")
D.cMR=w([D.ebV,D.dXz,D.e78],x.L)
D.ehM=new C.cK(["beat",0.18,0.28,0])
D.eiN=new C.cK(["burst",0.7,0.2,0])
D.eiY=new C.cK(["delay",0.45,0.5,1])
D.eiv=new C.cK(["ripple",0.75,0.6,3])
D.cDS=w([D.ehM,D.eiN,D.eiY,D.eiv],x.e)
D.a2s=new C.A(2,3)
D.cNC=w([L.mQ,H.GJ,D.a2s],x.u)
D.fhx=new A.Eq("First spark","A clock lights a burst and a ripple",D.cDS,D.cNC)
D.eie=new C.cK(["beat",0.15,0.3,1])
D.ehr=new C.cK(["ripple",0.62,0.15,0])
D.eiV=new C.cK(["delay",0.4,0.45,0])
D.ehY=new C.cK(["ripple",0.7,0.45,0])
D.ehI=new C.cK(["delay",0.4,0.7,1])
D.eiy=new C.cK(["shake",0.75,0.75,0])
D.cYQ=w([D.eie,D.ehr,D.eiV,D.ehY,D.ehI,D.eiy],x.e)
D.dV2=new C.A(2,4)
D.aGb=new C.A(4,5)
D.cH_=w([L.mQ,H.GJ,D.a2s,D.dV2,D.aGb],x.u)
D.fhz=new A.Eq("Heartbeat","Two thumps, then a shake",D.cYQ,D.cH_)
D.ehR=new C.cK(["dice",0.15,0.7,1])
D.ej_=new C.cK(["echo",0.4,0.7,0])
D.ehX=new C.cK(["comet",0.7,0.5,4])
D.eiO=new C.cK(["burst",0.72,0.2,1])
D.eic=new C.cK(["burst",0.3,0.25,0])
D.ehS=new C.cK(["pop",0.55,0.85,0])
D.c29=w([D.ehR,D.ej_,D.ehX,D.eiO,D.eic,D.ehS],x.e)
D.dUv=new C.A(1,3)
D.dUw=new C.A(1,4)
D.aGa=new C.A(0,5)
D.cOL=w([L.mQ,H.v7,D.dUv,D.dUw,D.aGa],x.u)
D.fhy=new A.Eq("Fireworks","Dice launch comets that burst in colour",D.c29,D.cOL)
D.ehV=new C.cK(["beat",0.15,0.2,2])
D.eil=new C.cK(["chance",0.4,0.2,0])
D.ehO=new C.cK(["ball",0.7,0.12,3])
D.ehB=new C.cK(["chance",0.4,0.5,1])
D.eiZ=new C.cK(["ball",0.3,0.08,1])
D.ehu=new C.cK(["ripple",0.7,0.55,3])
D.bWf=w([D.ehV,D.eil,D.ehO,D.ehB,D.eiZ,D.ehu],x.e)
D.a2t=new C.A(3,4)
D.dV3=new C.A(2,5)
D.ci5=w([L.mQ,H.v7,H.a2r,D.a2t,D.dV3],x.u)
D.fhw=new A.Eq("Rain","Balls fall at random and splash",D.bWf,D.ci5)
D.eim=new C.cK(["beat",0.12,0.45,2])
D.eiP=new C.cK(["toggle",0.38,0.2,0])
D.eiX=new C.cK(["wash",0.7,0.15,4])
D.ehQ=new C.cK(["count3",0.38,0.45,0])
D.eiS=new C.cK(["burst",0.72,0.4,0])
D.eid=new C.cK(["light",0.55,0.7,1])
D.ehC=new C.cK(["pop",0.8,0.8,4])
D.cRb=w([D.eim,D.eiP,D.eiX,D.ehQ,D.eiS,D.eid,D.ehC],x.e)
D.dVo=new C.A(3,6)
D.bZm=w([L.mQ,H.v7,H.a2r,D.a2t,D.aGa,D.dVo],x.u)
D.fhu=new A.Eq("Disco","A beat drives lights, washes and bursts",D.cRb,D.bZm)
D.ej1=new C.cK(["button",0.12,0.2,0])
D.ehw=new C.cK(["delay",0.34,0.2,1])
D.ej0=new C.cK(["light",0.56,0.2,1])
D.eiW=new C.cK(["delay",0.56,0.45,1])
D.ein=new C.cK(["ball",0.34,0.6,0])
D.ehA=new C.cK(["delay",0.34,0.8,1])
D.ehq=new C.cK(["burst",0.7,0.8,5])
D.bJy=w([D.ej1,D.ehw,D.ej0,D.eiW,D.ein,D.ehA,D.ehq],x.e)
D.dXk=new C.A(5,6)
D.cVA=w([L.mQ,H.v7,D.a2s,D.a2t,D.aGb,D.dXk],x.u)
D.fhv=new A.Eq("Domino","Tap the button and watch it run down the line",D.bJy,D.cVA)
D.arA=w([D.fhx,D.fhz,D.fhy,D.fhw,D.fhu,D.fhv],C.az("O<Eq>"))
D.cMZ=w([0.05,0.15,0.25],x.n)
D.cNc=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.cNN=w([1.5,3,4.5,9,12],x.n)
D.eeF=new C.bz("dice","Dice",B.m_)
D.efA=new C.bz("coin","Coin",E.x3)
D.eh4=new C.bz("num","Number",B.xc)
D.cNW=w([D.eeF,D.efA,D.eh4],x.c)
D.cNZ=w(["skin","muscle","organ","bone","vessel"],x.s)
D.faj=new A.Nq("Moon",1.62,0,4291941851)
D.fak=new A.Nq("Mars",3.71,0.01,4294472049)
D.fal=new A.Nq("Earth",9.81,1,4281908728)
D.fan=new A.Nq("Jupiter",24.79,1.4,4294677052)
D.fam=new A.Nq("Sun",274,2,4294688548)
D.xC=w([D.faj,D.fak,D.fal,D.fan,D.fam],C.az("O<Nq>"))
D.arG=w([B.cL,B.aM,B.bm,B.b2,B.bF,B.c8,B.d3,B.hs],x.O)
D.dI7={H:0}
D.d3Q=new C.bs(D.dI7,[2],x.I)
D.d5i=new A.rB("Hydrogen","H\u2082",D.d3Q,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.dI8={H:0,Cl:1}
D.d41=new C.bs(D.dI8,[1,1],x.I)
D.d5k=new A.rB("Hydrogen chloride","HCl",D.d41,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.dI9={H:0,O:1}
D.d3z=new C.bs(D.dI9,[2,1],x.I)
D.d5l=new A.rB("Water","H\u2082O",D.d3z,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.dIl={N:0,H:1}
D.d4o=new C.bs(D.dIl,[1,3],x.I)
D.d5t=new A.rB("Ammonia","NH\u2083",D.d4o,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a1D={C:0,H:1}
D.d4j=new C.bs(D.a1D,[1,4],x.I)
D.d5m=new A.rB("Methane","CH\u2084",D.d4j,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.dIa={H:0,S:1}
D.d2I=new C.bs(D.dIa,[2,1],x.I)
D.d5s=new A.rB("Hydrogen sulfide","H\u2082S",D.d2I,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.dIq={O:0}
D.d4m=new C.bs(D.dIq,[2],x.I)
D.d5u=new A.rB("Oxygen","O\u2082",D.d4m,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.dIk={N:0}
D.d3R=new C.bs(D.dIk,[2],x.I)
D.d5j=new A.rB("Nitrogen","N\u2082",D.d3R,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.dHY={C:0,O:1}
D.d4u=new C.bs(D.dHY,[1,2],x.I)
D.d5q=new A.rB("Carbon dioxide","CO\u2082",D.d4u,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aAJ={C:0,H:1,O:2}
D.d2u=new C.bs(D.aAJ,[1,2,1],x.I)
D.d5r=new A.rB("Formaldehyde","CH\u2082O",D.d2u,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.d4i=new C.bs(D.a1D,[2,4],x.I)
D.d5o=new A.rB("Ethene","C\u2082H\u2084",D.d4i,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.d4h=new C.bs(D.a1D,[2,6],x.I)
D.d5n=new A.rB("Ethane","C\u2082H\u2086",D.d4h,"Two carbons joined by a single bond, each holding three hydrogens.")
D.d2v=new C.bs(D.aAJ,[1,4,1],x.I)
D.d5p=new A.rB("Methanol","CH\u2083OH",D.d2v,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a_h=w([D.d5i,D.d5k,D.d5l,D.d5t,D.d5m,D.d5s,D.d5u,D.d5j,D.d5q,D.d5r,D.d5o,D.d5n,D.d5p],C.az("O<rB>"))
D.cPI=w([],x.Y)
D.cPJ=w([],x.x)
D.a_r=w([],x.B)
D.cQ3=w([0,0.46,0.82],x.n)
D.cQe=w([5,10,15,25,45,60],x.t)
D.cQx=w([-0.045,0.03,-0.015],x.n)
D.cQU=w([0.9,0.97,1],x.n)
D.Pm={volts:0}
D.a0n=new C.bs(D.Pm,[3],x.J)
D.GK=new C.f8(["b","battery",0.2,0.3,D.a0n])
D.dJk={on:0}
D.d3P=new C.bs(D.dJk,[1],x.J)
D.BD=new C.f8(["s","switch",0.5,0.3,D.d3P])
D.ejB=new C.f8(["l","bulb",0.8,0.3,B.jK])
D.cBm=w([D.GK,D.BD,D.ejB],x.d)
D.BC=new C.cK(["b",0,"s",0])
D.eiI=new C.cK(["s",1,"l",0])
D.aGl=new C.cK(["l",1,"b",1])
D.cQz=w([D.BC,D.eiI,D.aGl],x.o)
D.cAR=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.dTB=new A.nk("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cBm,D.cQz,D.cAR)
D.aAM={ohms:0}
D.ayp=new C.bs(D.aAM,[220],x.J)
D.ej9=new C.f8(["r","resistor",0.5,0.3,D.ayp])
D.ejO=new C.f8(["d","led",0.8,0.3,B.jK])
D.cTe=w([D.GK,D.ej9,D.ejO],x.d)
D.ei5=new C.cK(["b",0,"r",0])
D.eiC=new C.cK(["r",1,"d",0])
D.eia=new C.cK(["d",1,"b",1])
D.d_H=w([D.ei5,D.eiC,D.eia],x.o)
D.cTD=w(["led","diode","indicator"],x.s)
D.dTH=new A.nk("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.cTe,D.d_H,D.cTD)
D.a1E={level:0}
D.d3d=new C.bs(D.a1E,[0.2],x.J)
D.ejd=new C.f8(["p","pot",0.5,0.3,D.d3d])
D.ejg=new C.f8(["m","motor",0.8,0.3,B.jK])
D.cBE=w([D.GK,D.ejd,D.ejg],x.d)
D.ei4=new C.cK(["b",0,"p",0])
D.eix=new C.cK(["p",1,"m",0])
D.eit=new C.cK(["m",1,"b",1])
D.cXa=w([D.ei4,D.eix,D.eit],x.o)
D.cQj=w(["fan","motor","spin","dimmer"],x.s)
D.dTz=new A.nk("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cBE,D.cXa,D.cQj)
D.a0k=new C.bs(D.a1E,[0.9],x.J)
D.aGo=new C.f8(["s","solar",0.25,0.3,D.a0k])
D.aGn=new C.f8(["l","bulb",0.75,0.3,B.jK])
D.cDX=w([D.aGo,D.aGn],x.d)
D.eiF=new C.cK(["s",0,"l",0])
D.eis=new C.cK(["l",1,"s",1])
D.cCj=w([D.eiF,D.eis],x.o)
D.cXF=w(["solar","sun","without battery","no battery","free"],x.s)
D.dTC=new A.nk("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cDX,D.cCj,D.cXF)
D.ejR=new C.f8(["c","crank",0.25,0.3,D.a0k])
D.cOP=w([D.ejR,D.aGn],x.d)
D.ei7=new C.cK(["c",0,"l",0])
D.eir=new C.cK(["l",1,"c",1])
D.cPj=w([D.ei7,D.eir],x.o)
D.cOX=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.dTy=new A.nk("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.cOP,D.cPj,D.cOX)
D.d3c=new C.bs(D.a1E,[0.7],x.J)
D.ejj=new C.f8(["t","turbine",0.25,0.3,D.d3c])
D.ej7=new C.f8(["m","motor",0.75,0.3,B.jK])
D.cJW=w([D.ejj,D.ej7],x.d)
D.eiQ=new C.cK(["t",0,"m",0])
D.eiu=new C.cK(["m",1,"t",1])
D.cJ1=w([D.eiQ,D.eiu],x.o)
D.cNO=w(["wind","turbine","windmill","water","hydro"],x.s)
D.dTw=new A.nk("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.cJW,D.cJ1,D.cNO)
D.d4f=new C.bs(D.Pm,[9],x.J)
D.aGm=new C.f8(["b","battery",0.2,0.3,D.d4f])
D.ejy=new C.f8(["r","radio",0.8,0.3,B.jK])
D.cY8=w([D.aGm,D.BD,D.ejy],x.d)
D.eiK=new C.cK(["s",1,"r",0])
D.eiA=new C.cK(["r",1,"b",1])
D.bIV=w([D.BC,D.eiK,D.eiA],x.o)
D.cWY=w(["radio","music","listen"],x.s)
D.dTG=new A.nk("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.cY8,D.bIV,D.cWY)
D.d4g=new C.bs(D.Pm,[12],x.J)
D.ejf=new C.f8(["b","battery",0.2,0.3,D.d4g])
D.ejC=new C.f8(["t","tv",0.8,0.3,B.jK])
D.cBn=w([D.ejf,D.BD,D.ejC],x.d)
D.eiL=new C.cK(["s",1,"t",0])
D.eiR=new C.cK(["t",1,"b",1])
D.cRy=w([D.BC,D.eiL,D.eiR],x.o)
D.cY7=w(["tv","television","screen","watch"],x.s)
D.dTt=new A.nk("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cBn,D.cRy,D.cY7)
D.ejr=new C.f8(["z","buzzer",0.8,0.3,B.jK])
D.cil=w([D.GK,D.BD,D.ejr],x.d)
D.eiM=new C.cK(["s",1,"z",0])
D.ej2=new C.cK(["z",1,"b",1])
D.cwY=w([D.BC,D.eiM,D.ej2],x.o)
D.cVr=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.dTD=new A.nk("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cil,D.cwY,D.cVr)
D.eje=new C.f8(["h","heater",0.8,0.3,B.jK])
D.cMB=w([D.aGm,D.BD,D.eje],x.d)
D.eiH=new C.cK(["s",1,"h",0])
D.eih=new C.cK(["h",1,"b",1])
D.cxA=w([D.BC,D.eiH,D.eih],x.o)
D.c2z=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.dTu=new A.nk("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.cMB,D.cxA,D.c2z)
D.ejE=new C.f8(["s","solar",0.2,0.25,D.a0k])
D.d4l=new C.bs(D.aAM,[100],x.J)
D.ejH=new C.f8(["r","resistor",0.55,0.25,D.d4l])
D.ejN=new C.f8(["c","capacitor",0.85,0.25,B.jK])
D.eja=new C.f8(["q","resistor",0.55,0.6,D.ayp])
D.ejF=new C.f8(["d","led",0.85,0.6,B.jK])
D.cRd=w([D.ejE,D.ejH,D.ejN,D.eja,D.ejF],x.d)
D.eiG=new C.cK(["s",0,"r",0])
D.eiB=new C.cK(["r",1,"c",0])
D.ei9=new C.cK(["c",1,"s",1])
D.ei8=new C.cK(["c",0,"q",0])
D.eiz=new C.cK(["q",1,"d",0])
D.eib=new C.cK(["d",1,"c",1])
D.cH9=w([D.eiG,D.eiB,D.ei9,D.ei8,D.eiz,D.eib],x.o)
D.cOg=w(["capacitor","store","charge","flash"],x.s)
D.dTF=new A.nk("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.cRd,D.cH9,D.cOg)
D.ejl=new C.f8(["b","battery",0.15,0.3,D.a0n])
D.ejS=new C.f8(["l1","bulb",0.5,0.3,B.jK])
D.ejp=new C.f8(["l2","bulb",0.85,0.3,B.jK])
D.czI=w([D.ejl,D.ejS,D.ejp],x.d)
D.ei3=new C.cK(["b",0,"l1",0])
D.eio=new C.cK(["l1",1,"l2",0])
D.eip=new C.cK(["l2",1,"b",1])
D.cKy=w([D.ei3,D.eio,D.eip],x.o)
D.cXY=w(["series","two bulbs","dim"],x.s)
D.dTx=new A.nk("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.czI,D.cKy,D.cXY)
D.dJw={volts:0,charge:1}
D.d4p=new C.bs(D.dJw,[1.5,0],x.J)
D.ejL=new C.f8(["b","battery",0.75,0.3,D.d4p])
D.cz9=w([D.aGo,D.ejL],x.d)
D.eiE=new C.cK(["s",0,"b",0])
D.ei6=new C.cK(["b",1,"s",1])
D.cHp=w([D.eiE,D.ei6],x.o)
D.cOn=w(["charge","rechargeable","flat","recharge"],x.s)
D.dTv=new A.nk("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cz9,D.cHp,D.cOn)
D.d4e=new C.bs(D.Pm,[4.5],x.J)
D.ejh=new C.f8(["b","battery",0.2,0.3,D.d4e])
D.ej8=new C.f8(["p","phone",0.8,0.3,B.jK])
D.cJM=w([D.ejh,D.BD,D.ej8],x.d)
D.eiJ=new C.cK(["s",1,"p",0])
D.eiw=new C.cK(["p",1,"b",1])
D.cUv=w([D.BC,D.eiJ,D.eiw],x.o)
D.cVP=w(["phone","charger","usb","mobile"],x.s)
D.dTA=new A.nk("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.cJM,D.cUv,D.cVP)
D.ej4=new C.f8(["f","fan",0.8,0.3,B.jK])
D.bVQ=w([D.GK,D.ej4],x.d)
D.ei2=new C.cK(["b",0,"f",0])
D.eif=new C.cK(["f",1,"b",1])
D.cy0=w([D.ei2,D.eif],x.o)
D.cQi=w(["fan","cool","air","wind"],x.s)
D.dTI=new A.nk("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.bVQ,D.cy0,D.cQi)
D.ejv=new C.f8(["b","battery",0.15,0.2,D.a0n])
D.ej5=new C.f8(["a","ammeter",0.5,0.2,B.jK])
D.ej3=new C.f8(["l","bulb",0.85,0.2,B.jK])
D.ejx=new C.f8(["v","voltmeter",0.5,0.6,B.jK])
D.cOE=w([D.ejv,D.ej5,D.ej3,D.ejx],x.d)
D.ei1=new C.cK(["b",0,"a",0])
D.ei0=new C.cK(["a",1,"l",0])
D.eiT=new C.cK(["v",0,"l",0])
D.eiU=new C.cK(["v",1,"l",1])
D.cHg=w([D.ei1,D.ei0,D.aGl,D.eiT,D.eiU],x.o)
D.d_G=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.dTE=new A.nk("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.cOE,D.cHg,D.d_G)
D.NY=w([D.dTB,D.dTH,D.dTz,D.dTC,D.dTy,D.dTw,D.dTG,D.dTt,D.dTD,D.dTu,D.dTF,D.dTx,D.dTv,D.dTA,D.dTI,D.dTE],C.az("O<nk>"))
D.as2=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.t6=w([0.05,0.2,0.35],x.n)
D.cz1=w([D.D8,D.D8],x.O)
D.cDP=w([B.Dj,B.M],x.O)
D.cCX=w([B.h1,B.hH],x.O)
D.cxm=w([B.jd,B.nc],x.O)
D.bVO=w([B.lM,B.dt],x.O)
D.as3=w([D.cz1,D.cDP,D.cCX,D.cxm,D.bVO],x.k)
D.fa7=new A.um("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fa8=new A.um("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fa_=new A.um("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fa6=new A.um("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fa4=new A.um("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fa0=new A.um("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fa5=new A.um("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fa1=new A.um("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fa3=new A.um("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fa2=new A.um("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.AM=w([D.fa7,D.fa8,D.fa_,D.fa6,D.fa4,D.fa0,D.fa5,D.fa1,D.fa3,D.fa2],C.az("O<um>"))
D.b5e=new C.x(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,B.t)
D.cRV=w([D.D8,D.b5e,D.a9m,B.a8Z],x.O)
D.dTW=new C.A(0,"AND")
D.dUx=new C.A(1,"Adder")
D.dV4=new C.A(2,"Blinker")
D.dVp=new C.A(3,"Memory")
D.cTp=w([D.dTW,D.dUx,D.dV4,D.dVp],x.U)
D.ase=w([-104,0,104],x.n)
D.cTP=w([-16,16],x.n)
D.cTQ=w([-1,1],x.n)
D.cTS=w([-22,22],x.n)
D.cTT=w([-24,24],x.n)
D.cTW=w([-8,8],x.n)
D.asg=w([-92,0,92],x.n)
D.cUf=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.ekV=new A.u9("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.el1=new A.u9("Medium tank","Balanced.",0.35,1)
D.el0=new A.u9("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.O4=w([D.ekV,D.el1,D.el0],x._)
D.cUu=w([B.aI,B.ak],x.O)
D.cUy=w([1,2,3,4,6,8],x.n)
D.mM=w([0.04,0.2,0.36],x.n)
D.asp=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.cVm=w([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],x.n)
D.egP=new C.bz(D.aNC,"Fold",E.aha)
D.eg4=new C.bz(D.a5N,"Flip",B.Ep)
D.bpp=new C.a_(62889,"MaterialIcons",!1)
D.eh2=new C.bz(D.aND,"Rise",D.bpp)
D.aho=new C.a_(983870,"MaterialIcons",!1)
D.eeh=new C.bz(D.a5O,"Assemble",D.aho)
D.eeq=new C.bz(D.aNE,"Spin",D.afJ)
D.een=new C.bz(D.aNF,"Pop",B.kX)
D.cVx=w([D.egP,D.eg4,D.eh2,D.eeh,D.eeq,D.een],C.az("O<+(IM,n,a_)>"))
D.asu=w([B.c8,B.fP,B.bs,B.b2,B.bF,B.cL],x.O)
D.cVI=w([B.b2,B.d3,B.d3,B.bm],x.O)
D.cVU=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.edi=new C.A("Make the output turn HALF as fast as the input.",0.5)
D.e_u=new C.A("Make the output turn TWICE as fast.",2)
D.dUH=new C.A("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.ec4=new C.A("Make the output turn 4 times faster.",4)
D.e4N=new C.A("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.e7I=new C.A("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.e6h=new C.A("Make the output turn 3 times faster.",3)
D.e7_=new C.A("Make the output spin at the same speed as the input, using four different gears.",1)
D.asz=w([D.edi,D.e_u,D.dUH,D.ec4,D.e4N,D.e7I,D.e6h,D.e7_],C.az("O<+(n,Q)>"))
D.cWW=w([1,2,3,4,5,6,7,8],x.n)
D.O6=w([B.c8,B.cS,B.bm,B.b2,B.bF,B.cL,B.c,B.d3],x.O)
D.cXC=w(["solar","turbine","crank","pot"],x.s)
D.cXW=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.cY_=w([0,0.35,0.75,1],x.n)
D.cYa=w([B.aG,B.cl,B.cS,B.br,B.de,B.b1],x.O)
D.eeA=new C.bz("drop","Drop",D.ah_)
D.eeC=new C.bz("weight","Weight",Q.ahq)
D.egY=new C.bz("cannon","Newton's cannon",B.agn)
D.cYz=w([D.eeA,D.eeC,D.egY],x.c)
D.eaL=new C.A("piano","Piano")
D.ear=new C.A("organ","Organ")
D.e5Z=new C.A("bell","Bell")
D.eaN=new C.A("pluck","Pluck")
D.ec3=new C.A("synth","Synth")
D.e7D=new C.A("flute","Flute")
D.asQ=w([D.eaL,D.ear,D.e5Z,D.eaN,D.ec3,D.e7D],x.L)
D.cZ0=w(["volts","level","ohms","on"],x.s)
D.d_6=w([B.j3,B.Al,B.Eh,B.ql,Z.EP,B.uF,B.x9,B.pa,B.hQ,B.mI,B.hk,B.dO,B.hP,B.hR,B.m0,B.m1,B.xa,B.qp,B.lt,B.Eg,B.t_,B.L7,B.Ac,B.agT,B.KX,B.x6,B.L5,B.agy,K.ahk,B.kX],x.w)
D.d_C=w([1,0.18,0.06],x.n)
D.d_Z=w([0.72,1],x.n)
D.d08=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.dJp={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.d2o=new C.bs(D.dJp,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aAL={A:0,T:1,C:2,G:3}
D.a0f=new C.bs(D.aAL,["U","A","G","C"],x.l)
D.d2w=new C.bs(D.aAL,["T","A","G","C"],x.l)
D.dHK={radio:0,tv:1,fan:2,speaker:3,clock:4,calculator:5,phone:6,router:7,siren:8,toycar:9,lamp:10,lights:11,kettle:12}
D.bck=new A.ru(30,2.5,10.5,!0)
D.bcq=new A.ru(50,5.5,13.5,!0)
D.bcw=new A.ru(12,2,9.5,!1)
D.bcp=new A.ru(16,1.3,9.5,!0)
D.bct=new A.ru(40,2.5,7,!0)
D.bcv=new A.ru(60,1.2,4.8,!0)
D.bcl=new A.ru(25,4,7,!0)
D.bcn=new A.ru(30,8,14,!0)
D.bcu=new A.ru(18,5,13.5,!0)
D.bcs=new A.ru(8,2,9.5,!1)
D.bco=new A.ru(12,2.5,8,!1)
D.bcm=new A.ru(20,3.5,13.5,!0)
D.bcr=new A.ru(3.5,3,13,!1)
D.uV=new C.bs(D.dHK,[D.bck,D.bcq,D.bcw,D.bcp,D.bct,D.bcv,D.bcl,D.bcn,D.bcu,D.bcs,D.bco,D.bcm,D.bcr],C.az("bs<n,ru>"))
D.dIh={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.cOU=w([0,2,4,5,7,9,11],x.t)
D.cyn=w([0,2,3,5,7,8,10],x.t)
D.cTB=w([0,3,5,6,7,10],x.t)
D.AS=new C.bs(D.dIh,[D.ar4,D.cOU,D.cyn,D.cTB,D.ajQ],C.az("bs<n,ak<I>>"))
D.dJd={A:0,T:1,U:2,C:3,G:4}
D.d2L=new C.bs(D.dJd,[B.cL,B.cH,B.cH,B.aM,B.bm],C.az("bs<n,x>"))
D.dHI={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.fbM=new A.xb("Switch",D.ah8,B.cS,0,"Tap it to turn it ON or OFF.")
D.fbI=new A.xb("Blinker",B.od,B.bs,0,"Turns itself ON and OFF. Tap to change the speed.")
D.fbJ=new A.xb("AND",D.aho,B.cH,2,"ON only when BOTH inputs are ON.")
D.bqR=new C.a_(63671,"MaterialIcons",!1)
D.fbH=new A.xb("OR",D.bqR,B.bF,2,"ON when EITHER input is ON.")
D.fbK=new A.xb("XOR",I.Xm,B.c8,2,"ON when the inputs are DIFFERENT.")
D.fbE=new A.xb("NAND",B.rQ,B.b2,2,"OFF only when BOTH inputs are ON.")
D.bpY=new C.a_(63176,"MaterialIcons",!1)
D.fbF=new A.xb("NOR",D.bpY,B.hs,2,"ON only when BOTH inputs are OFF.")
D.fbG=new A.xb("NOT",U.EJ,B.d3,1,"Flips the signal: ON becomes OFF.")
D.fbL=new A.xb("Light",B.Ag,B.fP,1,"Glows when its input is ON.")
D.fbN=new A.xb("Buzzer",B.nt,B.cL,1,"Beeps while its input is ON.")
D.xO=new C.bs(D.dHI,[D.fbM,D.fbI,D.fbJ,D.fbH,D.fbK,D.fbE,D.fbF,D.fbG,D.fbL,D.fbN],C.az("bs<n,xb>"))
D.dJb={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eeW=new C.bz(3,20,1.9)
D.eew=new C.bz(33,90,1.6)
D.ehl=new C.bz(52,15,3.2)
D.ehj=new C.bz(45,-100,1.8)
D.efZ=new C.bz(-15,-60,1.9)
D.efw=new C.bz(-25,140,2.4)
D.efo=new C.bz(-82,0,2.2)
D.ayf=new C.bs(D.dJb,[D.eeW,D.eew,D.ehl,D.ehj,D.efZ,D.efw,D.efo],C.az("bs<n,+(Q,Q,Q)>"))
D.cxP=w([B.A],x.M)
D.cy6=w([B.ax,B.aC],x.M)
D.cGa=w([B.ax,B.A,B.aC],x.M)
D.cHu=w([B.ax,B.kO,B.A,B.lb,B.aC],x.M)
D.cTl=w([B.ax,B.kO,B.a3,B.a7,B.lb,B.aC],x.M)
D.d3G=new C.dX([1,D.cxP,2,D.cy6,3,D.cGa,4,B.asV,5,D.cHu,6,D.cTl],C.az("dX<I,ak<d5>>"))
D.dIi={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.ega=new C.bz(1,B.c9,"Hydrogen")
D.efa=new C.bz(4,B.bv,"Carbon")
D.eei=new C.bz(3,B.de,"Nitrogen")
D.egr=new C.bz(2,B.aG,"Oxygen")
D.efT=new C.bz(2,B.cS,"Sulfur")
D.egW=new C.bz(1,B.br,"Chlorine")
D.uW=new C.bs(D.dIi,[D.ega,D.efa,D.eei,D.egr,D.efT,D.egW],C.az("bs<n,+(I,x,n)>"))
D.dJu={Calm:0,Box:1,Sleep:2}
D.cfD=w([4,2,6,0],x.n)
D.cfK=w([4,4,4,4],x.n)
D.cfL=w([4,7,8,0],x.n)
D.Ov=new C.bs(D.dJu,[D.cfD,D.cfK,D.cfL],C.az("bs<n,ak<Q>>"))
D.dHS={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.vA=new A.Zf(0,"source")
D.cH2=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.fga=new A.px("Clock",B.od,D.vA,B.bs,D.cH2)
D.fg6=new A.px("Button",B.xe,D.vA,B.aM,B.U)
D.cX_=w(["random","quick","slow"],x.s)
D.fgh=new A.px("Dice",B.m_,D.vA,B.c8,D.cX_)
D.bqy=new C.a_(63484,"MaterialIcons",!1)
D.Ch=new A.Zf(1,"logic")
D.d_U=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.fgd=new A.px("Delay",D.bqy,D.Ch,B.cH,D.d_U)
D.cQl=w(["fast","mid","slow"],x.s)
D.fgi=new A.px("Echo",B.agM,D.Ch,B.bF,D.cQl)
D.fgf=new A.px("Every 2nd",U.EJ,D.Ch,B.hs,B.U)
D.bqb=new C.a_(63309,"MaterialIcons",!1)
D.fgc=new A.px("Every 3rd",D.bqb,D.Ch,B.b2,B.U)
D.bs7=new C.a_(983902,"MaterialIcons",!1)
D.bIZ=w(["50%","25%","75%"],x.s)
D.fgk=new A.px("Chance",D.bs7,D.Ch,B.d3,D.bIZ)
D.pJ=new A.Zf(2,"out")
D.fg8=new A.px("Light",B.Ag,D.pJ,B.fP,B.U)
D.fg9=new A.px("Burst",B.kX,D.pJ,B.c8,B.U)
D.fg7=new A.px("Ripple",B.xi,D.pJ,B.bd,B.U)
D.fgg=new A.px("Ball",B.ah1,D.pJ,B.d3,B.U)
D.fge=new A.px("Comet",B.mI,D.pJ,B.bF,B.U)
D.brT=new C.a_(983669,"MaterialIcons",!1)
D.fgj=new A.px("Shake",D.brT,D.pJ,B.cL,B.U)
D.fgl=new A.px("Pop",B.Ei,D.pJ,B.bm,B.U)
D.fgb=new A.px("Wash",B.La,D.pJ,B.oL,B.U)
D.m8=new C.bs(D.dHS,[D.fga,D.fg6,D.fgh,D.fgd,D.fgi,D.fgf,D.fgc,D.fgk,D.fg8,D.fg9,D.fg7,D.fgg,D.fge,D.fgj,D.fgl,D.fgb],C.az("bs<n,px>"))
D.dJa={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"ORBIT STUDIO":5,"SWARM STUDIO":6,"FIREWORK DESIGNER":7,"CHAIN BURST":8,"CIRCUIT LAB":9,"PERIODIC TABLE":10,"BODY EXPLORER":11,"SPIN THE WHEEL":12,"FOCUS TIMER":13,"MEMORY MATCH":14,"LUCKY POCKET":15,"ELECTRONICS LAB":16,"AI INVENTOR":17,"MAGNET LAB":18,"RADIO LAB":19,"POWER PLANT":20,"POWER GRID":21,"INTERNET JOURNEY":22,"ROBOT CODER":23,"BUG SMASHER":24,"ROCKET LANDER":25,"DATA SNAKE":26,"BINARY 2048":27,"SIGNAL BREAKER":28,"PASSWORD LAB":29,"WAVE LAB":30,"BUG HUNT":31,"MOLECULE MAKER":32,"DNA LAB":33,"ECOSYSTEM LAB":34,"BALANCE LAB":35,"GEAR LAB":36,"OPTICS LAB":37,"LASER MAZE":38,"LIGHT MIXER":39,"ATOM BUILDER":40,"CIPHER LAB":41,"PIXEL TV":42}
D.ayo=new C.bs(D.dJa,["sparkle","sparkle","whoosh","click","bounce","space","bubble","pop","zap","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","lab","organic","organic","click","tech","sparkle","zap","sparkle","lab","tech","tech"],x.l)
D.dJe={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.AT=new C.bs(D.dJe,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.dHR={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.edR=new C.A("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.dXh=new C.A("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.dXc=new C.A("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.e6Z=new C.A("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.e7T=new C.A("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.e6V=new C.A("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.dVu=new C.A("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.e52=new C.A("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.edZ=new C.A("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.e8d=new C.A("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.dZX=new C.A("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.dVf=new C.A("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.dZ5=new C.A("Movement","They pull your legs together and help you balance.")
D.e_N=new C.A("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.dXp=new C.A("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.ebF=new C.A("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.ecH=new C.A("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.e4O=new C.A("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.ecr=new C.A("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.e3z=new C.A("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.e8l=new C.A("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.dVj=new C.A("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.e09=new C.A("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.e82=new C.A("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.e3R=new C.A("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.ecz=new C.A("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.e6t=new C.A("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.dVs=new C.A("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.e8P=new C.A("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.ebj=new C.A("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.e9E=new C.A("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.dU5=new C.A("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.e6b=new C.A("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.e6f=new C.A("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.e0M=new C.A("Movement","The chest muscles push your arms forward, like when you push a door.")
D.dXv=new C.A("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.e_C=new C.A("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.e5b=new C.A("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eak=new C.A("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.edW=new C.A("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.e8i=new C.A("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.dTT=new C.A("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.e5l=new C.A("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.dUq=new C.A("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eaA=new C.A("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.ebB=new C.A("Movement","These lift your foot up so your toes do not drag on the ground.")
D.e5K=new C.A("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eaP=new C.A("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.dVl=new C.A("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.ec6=new C.A("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.dYy=new C.A("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.ea2=new C.A("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.e0v=new C.A("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.e3N=new C.A("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.e8z=new C.A("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.ecg=new C.A("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.ec8=new C.A("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.ecc=new C.A("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.e4f=new C.A("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.e9j=new C.A("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.e9B=new C.A("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.ebW=new C.A("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.e5J=new C.A("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.e2h=new C.A("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.e1b=new C.A("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.e66=new C.A("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.e8s=new C.A("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.e2M=new C.A("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.e3n=new C.A("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.dYS=new C.A("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eby=new C.A("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.dZA=new C.A("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.dUn=new C.A("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.e0L=new C.A("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.dUi=new C.A("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.dXP=new C.A("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.e0Q=new C.A("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.dZI=new C.A("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.e8L=new C.A("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.e_Q=new C.A("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.edF=new C.A("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.e1j=new C.A("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.e49=new C.A("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.e6A=new C.A("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.dZP=new C.A("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.dZC=new C.A("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.d4L=new C.bs(D.dHR,[D.edR,D.dXh,D.dXc,D.e6Z,D.e7T,D.e6V,D.dVu,D.e52,D.edZ,D.e8d,D.dZX,D.dVf,D.dZ5,D.e_N,D.dXp,D.ebF,D.ecH,D.e4O,D.ecr,D.e3z,D.e8l,D.dVj,D.e09,D.e82,D.e3R,D.ecz,D.e6t,D.dVs,D.e8P,D.ebj,D.e9E,D.dU5,D.e6b,D.e6f,D.e0M,D.dXv,D.e_C,D.e5b,D.eak,D.edW,D.e8i,D.dTT,D.e5l,D.dUq,D.eaA,D.ebB,D.e5K,D.eaP,D.dVl,D.ec6,D.dYy,D.ea2,D.e0v,D.e3N,D.e8z,D.ecg,D.ec8,D.ecc,D.e4f,D.e9j,D.e9B,D.ebW,D.e5J,D.e2h,D.e1b,D.e66,D.e8s,D.e2M,D.e3n,D.dYS,D.eby,D.dZA,D.dUn,D.e0L,D.dUi,D.dXP,D.e0Q,D.dZI,D.e8L,D.e_Q,D.edF,D.e1j,D.e49,D.e6A,D.dZP,D.dZC],C.az("bs<n,+(n,n)>"))
D.d4N=new C.hF(B.G,11)
D.d7t=new A.Sk(null)
D.dbh=new A.So(null)
D.dbi=new A.Sp(null)
D.dbv=new A.Sq(null)
D.ddw=new A.Ss(null)
D.ddx=new A.St(null)
D.ddy=new A.Su(null)
D.del=new A.SP(null)
D.den=new A.T3(null)
D.deo=new A.T4(null)
D.dep=new A.T5(null)
D.deX=new A.Tc(null)
D.dgS=new A.Tg(null)
D.dgT=new A.Ti(null)
D.dgU=new A.Tj(null)
D.dgW=new A.Tk(null)
D.dhG=new A.Tw(null)
D.diw=new A.TB(null)
D.diy=new A.TD(null)
D.diD=new A.TN(null)
D.diO=new A.TO(null)
D.djj=new A.TP(null)
D.dkO=new A.TR(null)
D.dmb=new A.TT(null)
D.dmc=new A.TU(null)
D.dnx=new A.TW(null)
D.dDq=new A.TX(null)
D.dDr=new A.TY(null)
D.dDs=new A.U0(null)
D.dDt=new A.U1(null)
D.dFm=new A.U9(null)
D.dFn=new A.Ua(null)
D.dFv=new A.Uh(null)
D.dFE=new A.Ul(null)
D.dFF=new A.Um(null)
D.dFG=new A.a68(null)
D.dGc=new A.Uo(null)
D.dHF=new A.Us(null)
D.dJE=new C.v(0,118)
D.dJF=new C.v(0,13)
D.dJG=new C.v(0,17)
D.dJJ=new C.v(0,330)
D.dJN=new C.v(0,-13)
D.aAV=new C.v(0,-14)
D.dJP=new C.v(0,-17)
D.v3=new C.v(0,-6)
D.dJS=new C.v(0,-6771)
D.dJT=new C.v(0,-9)
D.dJV=new C.v(10,20)
D.aAY=new C.v(11,8)
D.dJZ=new C.v(14,-18)
D.aAZ=new C.v(14,-4)
D.dK_=new C.v(18,-12)
D.aB2=new C.v(20,0)
D.dK5=new C.v(20,-17)
D.dK7=new C.v(22,10)
D.aB3=new C.v(22,8)
D.dK8=new C.v(24,0)
D.dKa=new C.v(24,-18)
D.dKb=new C.v(24,-22)
D.dKc=new C.v(25,8)
D.dKd=new C.v(26,0)
D.dKj=new C.v(28,-30)
D.dKo=new C.v(30,18)
D.aB7=new C.v(34,-32)
D.Gp=new C.v(36,0)
D.dKv=new C.v(42,0)
D.dKz=new C.v(4,11)
D.dKC=new C.v(4,-2)
D.dKG=new C.v(5,0)
D.dKH=new C.v(5,17)
D.dKI=new C.v(5,6)
D.dKU=new C.v(-2.6,-1)
D.dKV=new C.v(1.9,-0.8)
D.dKY=new C.v(-0.22,0.09)
D.dL2=new C.v(2.6,1)
D.dLH=new C.v(-10,0)
D.dLI=new C.v(-10,12)
D.dLJ=new C.v(-11,-2)
D.dLK=new C.v(-13,-5)
D.dLL=new C.v(-14,2)
D.dLM=new C.v(-14,-12)
D.dLN=new C.v(-14,-23)
D.dLO=new C.v(-15,6)
D.dLP=new C.v(-17,-18)
D.aBi=new C.v(-20,0)
D.dLS=new C.v(-20,-9)
D.Pr=new C.v(-22,8)
D.dLT=new C.v(-22,-10)
D.dLU=new C.v(-22,-11)
D.dLV=new C.v(-24,-22)
D.dLW=new C.v(-25,-11)
D.dLX=new C.v(-26,0)
D.dLY=new C.v(-2,-10)
D.dLZ=new C.v(-2,-20)
D.dM_=new C.v(-2,-9)
D.dM4=new C.v(-42,0)
D.dM6=new C.v(-4,11)
D.dM7=new C.v(-4,-17)
D.dM8=new C.v(-4,-2)
D.dMa=new C.v(-5,0)
D.dMb=new C.v(-5,20)
D.dMc=new C.v(-5,6)
D.dMd=new C.v(-5,-4)
D.dMe=new C.v(-6,-42)
D.dMf=new C.v(-9,-22)
D.ePJ=new C.w("Thinking\u2026",null,B.hV,null,null,null,null,null,null,null,null,null)
D.dN5=new C.C(B.kv,D.ePJ,null)
D.f3t=new C.w("Start from a ready-made board",null,B.fO,null,null,null,null,null,null,null,null,null)
D.dNf=new C.C(Aa.ww,D.f3t,null)
D.bjA=new C.M(4,0,4,14)
D.eLt=new C.F(!0,B.aA,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQB=new C.w("Games and little helpers for a spare minute.",null,D.eLt,null,null,null,null,null,null,null,null,null)
D.dNn=new C.C(D.bjA,D.eQB,null)
D.f0A=new C.w("Tap to throw in a star",null,B.kg,null,null,null,null,null,null,null,null,null)
D.aX4=new C.cx(B.A,null,null,D.f0A,null)
D.dS9=new C.cF(0,null,0,14,null,null,D.aX4,null)
D.cQS=w([B.iV,B.bv],x.O)
D.aG2=new C.bR(B.A,0.5,B.w,null,0,D.cQS,null,null)
D.dSR=new C.bR(B.A,0.5,B.w,null,0,D.asI,null,null)
D.cJ7=w([B.c,B.bL],x.O)
D.dST=new C.bR(B.A,0.5,B.w,null,0,D.cJ7,null,null)
D.dSU=new C.bR(B.A,0.5,B.w,null,0,H.arV,null,null)
D.cXO=w([B.c9,B.lk],x.O)
D.aG3=new C.bR(B.A,0.5,B.w,null,0,D.cXO,null,null)
D.cpd=w([B.c,B.c9],x.O)
D.dSY=new C.bR(B.tQ,0.5,B.w,null,0,D.cpd,null,null)
D.b2v=new C.x(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,B.t)
D.b79=new C.x(1,0.027450980392156862,0.10196078431372549,0.2,B.t)
D.cIc=w([D.b2v,D.aaX,D.b79],x.O)
D.cP3=w([0,0.7,1],x.n)
D.dT_=new C.bR(B.tQ,0.5,B.w,null,0,D.cIc,D.cP3,null)
D.c2E=w([B.fv,B.eY,B.kp],x.O)
D.dT0=new C.bR(N.pK,0.5,B.w,null,0,D.c2E,null,null)
D.cfR=w([B.u8,B.aX,B.K],x.O)
D.cUT=w([0.3,0.7,1],x.n)
D.dT1=new C.bR(B.A,0.5,B.w,null,0,D.cfR,D.cUT,null)
D.cik=w([B.li,B.nT],x.O)
D.dT2=new C.bR(H.a5V,0.5,B.w,null,0,D.cik,null,null)
D.ciA=w([B.fc,B.d_],x.O)
D.dT3=new C.bR(B.A,0.5,B.w,null,0,D.ciA,null,null)
D.cDY=w([B.u8,B.aX,B.h1],x.O)
D.dT4=new C.bR(B.A,0.5,B.w,null,0,D.cDY,null,null)
D.cwW=w([B.hg,B.aM,B.dD],x.O)
D.dT6=new C.bR(B.tQ,0.5,B.w,null,0,D.cwW,null,null)
D.cRn=w([B.lk,K.w9],x.O)
D.dT7=new C.bR(B.tQ,0.5,B.w,null,0,D.cRn,null,null)
D.b2G=new C.x(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,B.t)
D.b10=new C.x(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,B.t)
D.cG4=w([D.b2G,D.b10],x.O)
D.dT9=new C.bR(B.A,0.5,B.w,null,0,D.cG4,null,null)
D.b6G=new C.x(1,0.11372549019607843,0.3607843137254902,0.611764705882353,B.t)
D.b4X=new C.x(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,B.t)
D.b50=new C.x(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,B.t)
D.cZL=w([D.b6G,D.b4X,D.b50],x.O)
D.cCR=w([0,0.65,1],x.n)
D.dTa=new C.bR(H.a5X,0.5,B.w,null,0,D.cZL,D.cCR,null)
D.dTb=new C.bR(B.A,0.5,B.w,null,0,D.apz,null,null)
D.cX6=w([B.li,B.aX,B.h1],x.O)
D.dTf=new C.bR(B.A,0.5,B.w,null,0,D.cX6,null,null)
D.cYu=w([B.lk,B.hG],x.O)
D.dTi=new C.bR(B.A,0.5,B.w,null,0,D.cYu,null,null)
D.aG8=new C.b3(9,9)
D.dU_=new C.A(0,-4)
D.dYv=new C.A(0.22,4)
D.e47=new C.A(0.8,-4)
D.ec9=new C.A(0.58,4)
D.eeD=new C.bz("Moon",1.62,4291941851)
D.ef8=new C.bz("Neptune",11.15,4284524026)
D.efH=new C.bz("Sun",274,4294688548)
D.efV=new C.bz("Mercury",3.7,4288455599)
D.eg0=new C.bz("Earth",9.81,4281908728)
D.eg2=new C.bz("Mars",3.71,4294472049)
D.egl=new C.bz("Venus",8.87,4294759245)
D.egp=new C.bz("Saturn",10.44,4294829706)
D.egI=new C.bz("Jupiter",24.79,4294677052)
D.ejW=new C.ae(14,-14,20,14)
D.ejX=new C.ae(20,-2,30,2)
D.ejZ=new C.ae(4,-13,30,-3)
D.ek5=new C.ae(-12,14,12,22)
D.ek6=new C.ae(-12,-22,12,8)
D.ek7=new C.ae(-12,-25,12,19)
D.ek8=new C.ae(-12,-6,10,6)
D.ek9=new C.ae(-14,20,14,24)
D.eka=new C.ae(-14,6,14,10)
D.ekb=new C.ae(-14,-26,14,18)
D.ekc=new C.ae(-15,-29,15,25)
D.ekd=new C.ae(-16,-22,-9,18)
D.eke=new C.ae(-16,-24,16,-10)
D.ekg=new C.ae(-18,20,18,24)
D.ekh=new C.ae(-18,-18,18,20)
D.eki=new C.ae(-20,12,20,22)
D.ekj=new C.ae(-20,-28,20,26)
D.ekk=new C.ae(-22,14,22,18)
D.ekl=new C.ae(-22,-26,22,24)
D.ekm=new C.ae(-22,-3,22,3)
D.ekn=new C.ae(-22,-4,22,12)
D.aGr=new C.ae(-24,-9,24,9)
D.aGs=new C.ae(-28,-13,28,13)
D.eko=new C.ae(-28,-16,28,16)
D.ekp=new C.ae(-28,-16,28,8)
D.ekq=new C.ae(-30,-12,30,14)
D.ekr=new C.ae(-30,-14,0,14)
D.eks=new C.ae(-30,-2,30,18)
D.ekt=new C.ae(-30,-4,30,18)
D.eku=new C.ae(-32,-17,32,17)
D.ekv=new C.ae(-33,-21,33,17)
D.ekw=new C.ae(-34,14,34,26)
D.a2z=new C.ae(-34,-18,34,18)
D.ekx=new C.ae(-34,-4,34,7)
D.eky=new C.ae(-36,-24,36,20)
D.ekz=new C.ae(-38,-22,38,22)
D.ekA=new C.ae(-3,5,3,15)
D.ekC=new C.ae(-46,-34,46,28)
D.ekD=new C.ae(-48,-3,48,3)
D.ekG=new C.ae(-6,18,24,24)
D.ekH=new C.ae(-7,-8,7,14)
D.ekJ=new C.ae(14,-9,17.5,9)
D.dJ7={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.a2Z=new C.fb(D.dJ7,5,C.az("fb<n>"))
D.ep4=new C.aq(300,300)
D.epu=new C.aq(66,38)
D.aYh=new C.fa(2,null,null,null,null,B.bF,null,null,null,null)
D.eqq=new C.a3(16,16,D.aYh,null)
D.aIc=new C.hH(3,12,12,0.82,null)
D.f53=new C.w("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aIn=new C.b_(D.f53,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.cRp=w([B.cL,B.cS,B.bm,B.b2,B.oL,B.cL],x.O)
D.ewh=new C.fQ(B.A,0,6.283185307179586,B.w,D.cRp,null,null)
D.eEH=new C.F(!0,B.aM,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.ND,null,null,null)
D.exl=new C.es("You are here (Sun)",null,null,B.cU,null,null,null,null,null,null,D.eEH)
D.aKK=new C.F(!0,B.aA,null,null,null,null,10.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exm=new C.es("What we see",null,null,B.cU,null,null,null,null,null,null,D.aKK)
D.eCe=new C.F(!0,F.a8q,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exp=new C.es("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,B.cU,null,null,null,null,null,null,D.eCe)
D.eC_=new C.F(!0,B.c1,null,null,null,null,15,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exu=new C.es("Add atoms with the buttons below",null,null,B.cU,null,null,null,null,null,null,D.eC_)
D.aJa=new C.F(!0,B.c1,null,null,null,null,9.5,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exK=new C.F(!0,B.x,null,null,null,null,24,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exM=new C.F(!0,B.c,null,null,null,null,110,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyg=new C.F(!0,B.bh,null,null,null,null,15,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyy=new C.F(!0,B.cH,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ez3=new C.F(!0,B.c,null,null,null,null,12.5,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezj=new C.F(!0,B.c,null,null,null,null,13.5,B.I,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezH=new C.F(!0,B.aQ,null,null,null,null,12,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eA2=new C.F(!0,B.c1,null,null,null,null,9,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAc=new C.F(!0,B.al,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.enA=new C.cJ(B.hZ,B.dH,6)
D.cLB=w([D.enA],x.q)
D.eAv=new C.F(!0,B.c,null,null,null,null,19,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cLB,null,null,null)
D.eAx=new C.F(!0,B.aQ,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAz=new C.F(!0,B.eO,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAC=new C.F(!0,B.c,null,null,null,null,17,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAE=new C.F(!0,B.c1,null,null,null,null,10.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eB1=new C.F(!0,B.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJx=new C.F(!0,B.c1,null,null,null,null,9.5,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBm=new C.F(!0,B.aA,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBn=new C.F(!0,B.c1,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCh=new C.F(!0,B.c,null,null,null,null,60,B.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCK=new C.F(!0,B.aA,null,null,null,null,10.5,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDc=new C.F(!0,B.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDi=new C.F(!0,B.c,null,null,null,null,12.5,B.a4,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDY=new C.F(!0,B.c,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.ND,null,null,null)
D.eEo=new C.F(!0,B.aA,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEw=new C.F(!0,B.c,null,null,null,null,11.5,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEV=new C.F(!0,B.u5,null,null,null,null,12.5,B.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eF8=new C.F(!0,B.c,null,null,null,null,20,B.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFr=new C.F(!0,B.bJ,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFv=new C.F(!0,B.c1,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFy=new C.F(!0,B.aA,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFE=new C.F(!0,B.aA,null,null,null,null,18,B.I,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eG5=new C.F(!0,B.c1,null,null,null,null,8.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGj=new C.F(!0,B.al,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKa=new C.F(!0,B.al,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGy=new C.F(!0,B.al,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKc=new C.F(!0,B.c,null,null,null,null,9.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eH4=new C.F(!0,B.c,null,null,null,null,20,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.enr=new C.cJ(B.x,B.J,5)
D.cAG=w([D.enr],x.q)
D.eH5=new C.F(!0,B.c,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cAG,null,null,null)
D.enD=new C.cJ(B.aV,B.J,3)
D.d_d=w([D.enD],x.q)
D.eHa=new C.F(!0,B.c,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d_d,null,null,null)
D.eHp=new C.F(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHu=new C.F(!0,B.hI,null,null,null,null,30,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHJ=new C.F(!0,B.c1,null,null,null,null,10.5,B.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eId=new C.F(!0,B.bm,null,null,null,null,30,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIL=new C.F(!0,B.c1,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJp=new C.F(!0,B.aA,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJx=new C.F(!0,B.x,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKv=new C.F(!0,B.aA,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eK0=new C.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eK9=new C.F(!0,B.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKg=new C.F(!0,B.aM,null,null,null,null,26,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.R7=new C.F(!0,B.al,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKB=new C.F(!0,B.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKH=new C.F(!0,B.al,null,null,null,null,12,B.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKE=new C.F(!0,B.aM,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4y=new C.F(!0,B.c,null,null,null,null,13,B.a4,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLH=new C.F(!0,B.u5,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAH=new C.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMm=new C.w("\u26a0\ufe0f ",null,D.eAH,null,null,null,null,null,null,null,null,null)
D.eMx=new C.w("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,B.R5,null,null,null,null,null,null,null,null,null)
D.eMW=new C.w("LETTER COUNT OF THE SECRET VERSION",null,P.mg,null,null,null,null,null,null,null,null,null)
D.eNV=new C.w("Pick one, then change it and see what happens.",null,B.R5,null,null,null,null,null,null,null,null,null)
D.eBM=new C.F(!0,B.al,null,null,null,null,null,B.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOR=new C.w("What do you want to invent? Type it below, or tap an idea.",null,D.eBM,null,null,null,null,null,null,null,null,null)
D.ePc=new C.w("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,S.a3P,null,null,null,null,null,null,null,null,null)
D.eQd=new C.w("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.eQQ=new C.w("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.eRn=new C.w("Make it yours",null,B.l6,null,null,null,null,null,null,null,null,null)
D.eB3=new C.F(!0,B.aA,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRC=new C.w("Your mass never changes. What changes is how hard each world pulls on it.",null,D.eB3,null,null,null,null,null,null,null,null,null)
D.eFJ=new C.F(!0,B.j_,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTK=new C.w("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.eFJ,null,null,null,null,null,null,null,null,null)
D.eTZ=new C.w("YOUR DECODING",null,P.mg,null,null,null,null,null,null,null,null,null)
D.eHZ=new C.F(!0,B.c1,null,null,null,null,9,B.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVb=new C.w("WHAT HAPPENS",null,D.eHZ,null,null,null,null,null,null,null,null,null)
D.eWH=new C.w("Check",null,null,null,null,null,null,null,null,null,null,null)
D.eXj=new C.w("Change the words and pictures on the three slabs.",null,B.R5,null,null,null,null,null,null,null,null,null)
D.eXt=new C.w("All the parts and wires will be removed.",null,B.hn,null,null,null,null,null,null,null,null,null)
D.eXM=new C.w("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.eYl=new C.w("All challenges done! Keep inventing.",null,B.hb,null,null,null,null,null,null,null,null,null)
D.eYk=new C.w("Tap the crank on the board again and again to spin it faster.",null,B.hV,null,null,null,null,null,null,null,null,null)
D.eZ8=new C.w("INTERCEPTED",null,P.mg,null,null,null,null,null,null,null,null,null)
D.eZW=new C.w("Remove this part",null,S.aJd,null,null,null,null,null,null,null,null,null)
D.f_c=new C.w("Clear the board?",null,B.di,null,null,null,null,null,null,null,null,null)
D.eHv=new C.F(!0,B.bs,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_r=new C.w("How the Lab works",null,D.eHv,null,null,null,null,null,null,null,null,null)
D.f_J=new C.w("?",null,H.aKE,null,null,null,null,null,null,null,null,null)
D.eFD=new C.F(!0,B.b2,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_N=new C.w("Planet Earth",null,D.eFD,null,null,null,null,null,null,null,null,null)
D.f0T=new C.w("Ready-made circuits",null,B.dP,null,null,null,null,null,null,null,null,null)
D.f1I=new C.w("UNIVERSE EXPLORER",null,F.a3X,null,null,null,null,null,null,null,null,null)
D.f4_=new C.w("SECRET VERSION",null,P.mg,null,null,null,null,null,null,null,null,null)
D.eKk=new C.F(!0,B.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4v=new C.w("\u26a0 There is no air here, so a parachute will not work.",null,D.eKk,null,null,null,null,null,null,null,null,null)
D.f5E=new C.w("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,S.a3P,null,null,null,null,null,null,null,null,null)
D.f6g=new C.w("You build a machine. A little light runs along the wires, and every part it touches does something.",null,B.a4j,null,null,null,null,null,null,null,null,null)
D.f6B=new C.w("Tap it to change its setting. Drag from the right dot to connect.",null,B.l7,null,null,null,null,null,null,null,null,null)
D.f7u=new C.w("TOOLBOX",null,F.a3X,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.fVj=null
$.fVi=null
$.h0d=0
$.hrK=C.S(x.N,x.j)
$.hsk=C.S(x.N,x.j)
$.hmp=C.S(x.N,C.az("dz"))
$.ca9=C.a([],C.az("O<afW>"))
$.fSn=0
$.cad="music"
$.fUF=null
$.hs5=C.S(x.N,x.j)
$.ht7=C.S(x.N,x.j)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hXH","bA_",()=>{var v="led"
return C.a([A.avm("Both together","Make the light glow only when BOTH switches are ON.",2,new A.f_S(),v),A.avm("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new A.f_T(),v),A.avm("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new A.f_U(),v),A.avm("Flip it","One switch only: make the light glow when the switch is OFF.",1,new A.f_Z(),v),A.avm("Not both","Make the light go OFF only when both switches are ON.",2,new A.f0_(),v),A.avm("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new A.f00(),"buzzer")],C.az("O<b7b>"))})
w($,"hY7","bA1",()=>C.a([A.nt("UNIVERSE","Earth, space and gravity",B.Y4,B.b2,new A.f0g()),A.nt("ELECTRONICS LAB","Batteries, wires, real circuits",A6.Xp,B.b2,new A.f0h()),A.nt("AI INVENTOR","Say it, watch it get built",B.dO,B.bF,new A.f0i()),A.nt("DISCOVERY LAB","Body Explorer: a real 3D human",D.Xf,B.bm,new A.f0t()),A.nt("TOOLBOX","Converter, clock, games",K.afV,B.d3,new A.f0w()),A.nt("MOLECULE MAKER","Join atoms into real molecules",B.KW,B.hs,new A.f0x()),A.nt("DNA LAB","Copy DNA, build a protein",D.Xf,B.c8,new A.f0y()),A.nt("ECOSYSTEM LAB","Grass, rabbits and foxes",B.x6,B.bm,new A.f0z()),A.nt("BALANCE LAB","Levers, weight and torque",D.bs_,B.aM,new A.f0A()),A.nt("GEAR LAB","Teeth, speed and force",B.EF,B.d3,new A.f0B()),A.nt("LASER MAZE","Bend the beam with mirrors",F.age,B.aG,new A.f0C()),A.nt("LIGHT MIXER","Match colours with light",D.bpK,B.bd,new A.f0j()),A.nt("CIPHER LAB","Make and crack secret codes",B.xh,B.b2,new A.f0k()),A.nt("REACTION LAB","Wire parts together",B.xl,B.bs,new A.f0l()),A.nt("SPARK PAINTER","Paint with light",B.Xh,B.c8,new A.f0m()),A.nt("ROCKET LANDER","Land softly on the pad",B.mI,B.b2,new A.f0n()),A.nt("ORBIT STUDIO","Slingshot planets",B.m2,B.d3,new A.f0o()),A.nt("SWARM STUDIO","A living school of fish",B.KW,B.bm,new A.f0p()),A.nt("CHAIN BURST","One tap, a whole chain",B.hk,B.c8,new A.f0q()),A.nt("TITLE ANIMATOR","Make a moving title",B.xd,B.cS,new A.f0r()),A.nt("CIRCUIT LAB","Connect logic, learn it",B.XK,B.cH,new A.f0s()),A.nt("MARBLE MUSIC","Marbles ring the notes",D.bpq,B.bd,new A.f0u()),A.nt("ORBIT SEQUENCER","Planets play the tune",D.brO,B.bF,new A.f0v())],C.az("O<boG>")))
w($,"hZB","Fm",()=>{var v,u,t=C.S(x.N,x.D)
for(v=0;v<29;++v){u=D.N6[v]
t.m(0,u.a,u)}return t})
w($,"hXI","bA0",()=>C.a([A.NI("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new A.f01()),A.NI("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new A.f02()),A.NI("Spin the motor","A battery and a motor in a loop will make it spin.",new A.f03()),A.NI("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new A.f04()),A.NI("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new A.f05()),A.NI("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new A.f_V()),A.NI("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new A.f_W()),A.NI("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new A.f_X()),A.NI("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new A.f_Y())],C.az("O<b7c>")))
w($,"hY9","h8r",()=>C.a([A.ZK("Spin the Wheel","Let luck decide","\ud83c\udfa1",B.aM,B.cl,new A.f0K()),A.ZK("Focus Timer","Work, then rest","\u23f1\ufe0f",B.cL,B.bS,new A.f0L()),A.ZK("Breathe","Calm down in a minute","\ud83e\udee7",B.hs,B.cE,new A.f0M()),A.ZK("Draw Pad","Sketch and share","\ud83c\udfa8",B.bz,B.b1,new A.f0N()),A.ZK("Memory Match","Find the pairs","\ud83c\udccf",B.b2,B.cb,new A.f0O()),A.ZK("Simon Sounds","Copy the tune","\ud83c\udfb5",B.cS,B.br,new A.f0P()),A.ZK("Tip & Split","Share the bill","\ud83e\uddfe",B.bm,B.aW,new A.f0Q()),A.ZK("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",B.bF,B.aB,new A.f0R())],C.az("O<bq_>")))
w($,"hY8","h8q",()=>C.a([A.acO("EARTH GLOBE","Turn it, tap a country",B.m2,B.b2,new A.f0D()),A.acO("SOLAR SYSTEM","The Sun and its worlds",D.bpt,B.aM,new A.f0E()),A.acO("GRAVITY LAB","Drop, weigh, orbit",D.ah_,B.d3,new A.f0F()),A.acO("BLACK HOLE","Throw in a star",B.E5,B.bF,new A.f0G()),A.acO("GALAXY","Build, tilt, collide",B.wU,B.h0,new A.f0H()),A.acO("SIZE COMPARE","Earth next to a star",D.bpM,B.c8,new A.f0I()),A.acO("SEASONS & MOON","Why it is summer",B.ur,B.bs,new A.f0J())],C.az("O<bpV>")))})()};
(a=>{a["I0Fska3lVBXduTa3rsy7Bh6bdOM="]=a.current})($__dart_deferred_initializers__);