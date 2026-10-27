((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,A_,W,F,N,A0,X,A1,L,H,A2,A3,T,A4,U,A5,P,A6,A7,R,M,S,A8,A9,O,I,E,B={
bvl(d){return B.hvR(d)},
hvR(d){var w=0,v=C.j(x.dk),u,t=2,s=[],r,q,p,o
var $async$bvl=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qh(C.mH(""),d,A.h8,null).cJ(0,A.UO),$async$bvl)
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
return C.i($async$bvl,v)},
hGX(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<16;++u){t=D.O1[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.dm(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.ae(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.kZ(D.O1,new B.fdy())
if(w==null)w=A.d.gK(D.O1)
s=C.S(x.N,x.E)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.K)(r),++u){l=r[u].a
k=l[0]
l=$.Fn().h(0,l[1])
l.toString
s.m(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.K)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gK(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new B.aho(w.a,w.b,m,w,s,!1)},
hAU(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.J(D.Np,new B.f5l(),x.bd).aG(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
hOH(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cP(b2,"{")
v=A.a.o_(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.Q.aD(0,A.a.an(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aZ(a5)
r=0
for(a6=x.a,a7=J.aV(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gT(a7)
p=C.t(J.q(q,"kind"))
o=C.t(J.q(q,"id"))
if(!$.Fn().am(0,p)||J.eQ(s,o)||J.a9(t)>=8)continue
J.cg(s,o)
n=C.S(a5,a8)
for(a9=0;a9<4;++a9){m=D.cZt[a9]
l=J.q(q,m)
if(typeof l=="number")J.aE(n,m,l)}k=A.k.D(typeof J.q(q,"x")=="number"?C.fa(J.q(q,"x")):0.2+A.k.H(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.q(q,"y")=="number"?C.fa(J.q(q,"y")):0.25+A.k.aj(r,3)*0.3,0.1,0.9)
J.cg(t,new C.f9([o,p,k,j,n]));++r}if(J.a9(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aV(a6.a(J.q(u,"wires")));a5.C();){h=a5.gT(a5)
g=a6.a(h)
if(J.a9(g)<4)continue
f=C.t(J.q(g,0))
e=C.t(J.q(g,2))
d=A.o.D(A.k.N(C.fa(J.q(g,1))),0,1)
a0=A.o.D(A.k.N(C.fa(J.q(g,3))),0,1)
if(J.eQ(s,f)&&J.eQ(s,e)&&!J.y(f,e))J.cg(i,new C.cK([f,d,e,a0]))}if(J.a9(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.Q.a(J.q(u,"steps"))
a0=J.aV(a0==null?A.cP:a0)
while(a0.C()){a2=a0.gT(a0)
J.cg(a1,C.t(a2))}a3=a1
a0=J.q(u,"title")
a0=C.t(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new B.nm(a0,C.t(a1==null?"":a1),t,i,A.U)
a0=a4.a
a1=a4.b
d=J.a9(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.t(a5==null?"":a5)
return new B.aho(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hFB(d){var w,v,u=B.fzp()
d.B(u)
for(w=0;w<60;++w)u.a5e(0,0.03333333333333333)
v=u.a
return A.d.bg(v,new B.faW(u))&&!A.d.e9(v,new B.faX())},
hFA(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.S(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.K)(l),++u){t=l[u];++v
k.m(0,t.a,$.Fn().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.K)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.t(t.e)+" V")
if(p==="resistor")q.push(""+A.k.U(t.r)+" ohms")
if(A.d.t(D.cY5,p))q.push("level "+A.k.U(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.cx
o=p>0.05?"working (glow "+A.k.U(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aG(q,", ")+")"
s.push(C.t(p)+n+": "+o+", current "+A.k.aa(Math.abs(t.CW)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.K)(w),++u){m=w[u]
l.push(C.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aG(s,"\n")+"\nWires: "+A.d.aG(l,"; ")},
hut(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.K)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aG(v,"\n")+"\n\n"}v=A.d.aG(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
hGW(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.Fn().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<46;++u){s=D.Np[u]
if(A.d.bg(w,new B.fdv(s)))if(!C.dm(r,s.b.toLowerCase(),0))v=C.dm(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.ae("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a4(w,new B.fdw(e),C.U(w).k("a4<1>")).gah(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.ae("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.aa(A.d.cI(w,0,new B.fdx())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.ae("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gK(w)
w=$.Fn().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
aho:function aho(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fdy:function fdy(){},
f5l:function f5l(){},
faW:function faW(d){this.a=d},
faX:function faX(){},
fdv:function fdv(d){this.a=d},
fdw:function fdw(d){this.a=d},
fdx:function fdx(){},
Tw:function Tw(d){this.a=d},
bgf:function bgf(d,e,f,g,h,i){var _=this
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
dVC:function dVC(d){this.a=d},
dVD:function dVD(d,e,f){this.a=d
this.b=e
this.c=f},
dVE:function dVE(d){this.a=d},
dVP:function dVP(d){this.a=d},
dVQ:function dVQ(d,e){this.a=d
this.b=e},
dVL:function dVL(d){this.a=d},
dVJ:function dVJ(d,e){this.a=d
this.b=e},
dVK:function dVK(d,e,f){this.a=d
this.b=e
this.c=f},
dVM:function dVM(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dVH:function dVH(d){this.a=d},
dVI:function dVI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dVN:function dVN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dVG:function dVG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dVO:function dVO(d,e){this.a=d
this.b=e},
dVF:function dVF(d,e){this.a=d
this.b=e},
dVT:function dVT(d){this.a=d},
dVS:function dVS(d){this.a=d},
dVU:function dVU(d){this.a=d},
dVR:function dVR(d){this.a=d},
dVV:function dVV(d,e){this.a=d
this.b=e},
dVW:function dVW(d,e){this.a=d
this.b=e},
dVX:function dVX(d,e){this.a=d
this.b=e},
dVY:function dVY(d,e){this.a=d
this.b=e},
bvG(d,e,f){var w=null
return C.u(C.a([C.d(d,w,w,w,w,w,w,D.aJD,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.R,0,A.p)},
h_0(d,e,f,g){var w=null,v=C.m(24),u=C.H(f.j(0.6),A.r,1)
return C.at(C.p(w,C.u(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.ar,C.d(e,w,w,w,w,w,w,A.Hq,A.L,w,w),A.ay,C.c8(A.fF,g,A.bx,0,8)],x.p),A.m,w,A.e,A.R,0,A.p),A.h,w,w,new C.o(D.Ti,w,u,v,w,w,A.n),w,w,w,w,A.a8,w,w,w),w,w,w)},
EE:function EE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ua:function ua(d,e,f,g){var _=this
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
ea_:function ea_(){},
eaj:function eaj(d){this.a=d},
eai:function eai(d,e){this.a=d
this.b=e},
eak:function eak(){},
eal:function eal(){},
ea1:function ea1(d,e,f){this.a=d
this.b=e
this.c=f},
ea0:function ea0(d,e){this.a=d
this.b=e},
e9R:function e9R(d){this.a=d},
e9S:function e9S(d){this.a=d},
e9T:function e9T(d){this.a=d},
e9U:function e9U(d){this.a=d},
e9V:function e9V(d){this.a=d},
e9W:function e9W(d){this.a=d},
e9X:function e9X(d){this.a=d},
e9Y:function e9Y(d){this.a=d},
e9Z:function e9Z(d){this.a=d},
e9P:function e9P(d){this.a=d},
e9Q:function e9Q(d){this.a=d},
e9O:function e9O(d){this.a=d},
eac:function eac(d,e){this.a=d
this.b=e},
ea7:function ea7(d){this.a=d},
ea8:function ea8(d){this.a=d},
ea4:function ea4(d){this.a=d},
ea9:function ea9(d){this.a=d},
ea3:function ea3(d){this.a=d},
eaa:function eaa(d){this.a=d},
eab:function eab(d){this.a=d},
ea2:function ea2(d){this.a=d},
ead:function ead(d,e){this.a=d
this.b=e},
ea6:function ea6(d,e){this.a=d
this.b=e},
eae:function eae(d){this.a=d},
eaf:function eaf(d){this.a=d},
eag:function eag(d){this.a=d},
eah:function eah(d){this.a=d},
ea5:function ea5(d){this.a=d},
bdi:function bdi(d,e){this.b=d
this.a=e},
aJ5:function aJ5(){},
btj:function btj(){},
cz2(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cz2=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.tt().jT(0,"assets/data/body3d.bin"),$async$cz2)
case 3:d=a1
$.fVs=J.eO(A.dA.gaL(d),d.byteOffset,d.byteLength)
t=C.bDn(d)
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
e=D.cOr[i]
g=C.aY((l<<16|h<<8|g|4278190080)>>>0)
r.push(new B.a11(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aPh))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new B.b6u(q,l,h,new Int32Array(0),r)
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
b6u:function b6u(d,e,f,g,h){var _=this
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
bWm:function bWm(d){var _=this
_.a=d
_.d=_.c=_.b=null},
bWn:function bWn(d,e){this.a=d
this.b=e},
bWo:function bWo(d){this.a=d},
avm(d,e,f,g,h){return new B.b7c(d,e,f,g,h)},
fDV(d,e,f,g,h,i){return $.hrU.ce(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.cFP(d,e,f,i,g,h))},
xd:function xd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
B8:function B8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
mY:function mY(d,e,f){this.a=d
this.b=e
this.c=f},
b7c:function b7c(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f_X:function f_X(){},
f_Y:function f_Y(){},
f_Z:function f_Z(){},
f03:function f03(){},
f04:function f04(){},
f05:function f05(){},
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
b7u:function b7u(d,e){this.b=d
this.a=e},
cFP:function cFP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aIe:function aIe(){},
bt3:function bt3(){},
hiP(){return new B.LD(null)},
nv(d,e,f,g,h){return new B.boH(d,e,f,g,h)},
bn8(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
fEq(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
LD:function LD(d){this.a=d},
IM:function IM(d,e){this.a=d
this.b=e},
zr:function zr(d,e,f,g,h,i,j){var _=this
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
boH:function boH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f0l:function f0l(){},
f0m:function f0m(){},
f0n:function f0n(){},
f0y:function f0y(){},
f0B:function f0B(){},
f0C:function f0C(){},
f0D:function f0D(){},
f0E:function f0E(){},
f0F:function f0F(){},
f0G:function f0G(){},
f0H:function f0H(){},
f0o:function f0o(){},
f0p:function f0p(){},
f0q:function f0q(){},
f0r:function f0r(){},
f0s:function f0s(){},
f0t:function f0t(){},
f0u:function f0u(){},
f0v:function f0v(){},
f0w:function f0w(){},
f0x:function f0x(){},
f0z:function f0z(){},
f0A:function f0A(){},
bn9:function bn9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eHZ:function eHZ(d){this.a=d},
eHY:function eHY(d,e){this.a=d
this.b=e},
eHW:function eHW(d){this.a=d},
eI_:function eI_(d){this.a=d},
eHX:function eHX(d,e){this.a=d
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
bo7:function bo7(d,e){this.b=d
this.a=e},
bnD:function bnD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b6b:function b6b(d,e){this.b=d
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
eHF:function eHF(d){this.a=d},
eHE:function eHE(d){this.a=d},
eHD:function eHD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHC:function eHC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHA:function eHA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHz:function eHz(d,e,f){this.a=d
this.b=e
this.c=f},
eHB:function eHB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eHy:function eHy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHN:function eHN(d){this.a=d},
eHM:function eHM(d){this.a=d},
eHO:function eHO(d,e){this.a=d
this.b=e},
eHP:function eHP(d,e){this.a=d
this.b=e},
eHQ:function eHQ(d,e){this.a=d
this.b=e},
eHL:function eHL(d,e,f){this.a=d
this.b=e
this.c=f},
eHR:function eHR(d,e,f){this.a=d
this.b=e
this.c=f},
eHK:function eHK(d){this.a=d},
eHG:function eHG(d){this.a=d},
eHS:function eHS(d){this.a=d},
eHT:function eHT(d){this.a=d},
eHJ:function eHJ(d,e){this.a=d
this.b=e},
eHU:function eHU(d,e){this.a=d
this.b=e},
eHI:function eHI(d,e){this.a=d
this.b=e},
eHV:function eHV(d,e){this.a=d
this.b=e},
eHH:function eHH(d,e){this.a=d
this.b=e},
eHw:function eHw(){},
eHx:function eHx(){},
bmO:function bmO(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bmg:function bmg(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b6R:function b6R(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bmi:function bmi(d,e,f){this.b=d
this.c=e
this.a=f},
bqa:function bqa(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aJU:function aJU(){},
h0n(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ao(0,new C.v(w,0)),u=e.aE(0,new C.v(w,0)),t=1-f,s=3*t
return d.aM(0,t*t*t).ao(0,v.aM(0,s*t*f)).ao(0,u.aM(0,s*f*f)).ao(0,e.aM(0,f*f*f))},
bdh(d,e,f,g,h,i){return $.hsu.ce(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.d9g(d,e,f,i,g,h))},
Zf:function Zf(d,e){this.a=d
this.b=e},
py:function py(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qc:function qc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Bc:function Bc(d,e){this.a=d
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
Bm:function Bm(d,e,f,g){var _=this
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
bdf:function bdf(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bs$=_.bJ$=0},
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
Er:function Er(d,e,f,g){var _=this
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
e9k:function e9k(d){this.a=d},
e99:function e99(d){this.a=d},
e9b:function e9b(){},
e9c:function e9c(){},
e9f:function e9f(){},
e9g:function e9g(d,e,f){this.a=d
this.b=e
this.c=f},
e9h:function e9h(d){this.a=d},
e9i:function e9i(d){this.a=d},
e9d:function e9d(){},
e9e:function e9e(d){this.a=d},
e9K:function e9K(d){this.a=d},
e9j:function e9j(){},
e95:function e95(d){this.a=d},
e9m:function e9m(d){this.a=d},
e9l:function e9l(d){this.a=d},
e9o:function e9o(){},
e9n:function e9n(d,e){this.a=d
this.b=e},
e98:function e98(){},
e96:function e96(d){this.a=d},
e97:function e97(d){this.a=d},
e9I:function e9I(d){this.a=d},
e9H:function e9H(d){this.a=d},
e9J:function e9J(d){this.a=d},
e9y:function e9y(d,e){this.a=d
this.b=e},
e9G:function e9G(d){this.a=d},
e9E:function e9E(d){this.a=d},
e9F:function e9F(d){this.a=d},
e9D:function e9D(d){this.a=d},
e9C:function e9C(d){this.a=d},
e9z:function e9z(d){this.a=d},
e9A:function e9A(d){this.a=d},
e9B:function e9B(d){this.a=d},
e9a:function e9a(){},
e9u:function e9u(d){this.a=d},
e9v:function e9v(d){this.a=d},
e9t:function e9t(d){this.a=d},
e9w:function e9w(d){this.a=d},
e9s:function e9s(d){this.a=d},
e9x:function e9x(d){this.a=d},
e9r:function e9r(d){this.a=d},
e9q:function e9q(d){this.a=d},
e9p:function e9p(d,e){this.a=d
this.b=e},
bdg:function bdg(d,e,f,g,h){var _=this
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
bhL:function bhL(d,e,f,g,h){var _=this
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
bgQ:function bgQ(d,e,f,g,h,i,j,k){var _=this
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
ejv:function ejv(d){this.a=d},
ejt:function ejt(d){this.a=d},
eju:function eju(){},
ej6:function ej6(){},
ej5:function ej5(){},
ejf:function ejf(d,e){this.a=d
this.b=e},
ejh:function ejh(d){this.a=d},
ejl:function ejl(d){this.a=d},
ejg:function ejg(d){this.a=d},
ejm:function ejm(d){this.a=d},
ejn:function ejn(d){this.a=d},
ejo:function ejo(d,e){this.a=d
this.b=e},
eje:function eje(d,e){this.a=d
this.b=e},
ejp:function ejp(d){this.a=d},
ejd:function ejd(d){this.a=d},
ejq:function ejq(d,e){this.a=d
this.b=e},
ejc:function ejc(d,e){this.a=d
this.b=e},
ejr:function ejr(d){this.a=d},
ejb:function ejb(d,e){this.a=d
this.b=e},
ejs:function ejs(d){this.a=d},
eja:function eja(d){this.a=d},
eji:function eji(d){this.a=d},
ej9:function ej9(d){this.a=d},
ejj:function ejj(d){this.a=d},
ej8:function ej8(d){this.a=d},
ejk:function ejk(d,e){this.a=d
this.b=e},
ej7:function ej7(d,e){this.a=d
this.b=e},
bo2:function bo2(d,e,f,g,h){var _=this
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
eq4:function eq4(d,e){this.a=d
this.b=e},
eq5:function eq5(d,e,f){this.a=d
this.b=e
this.c=f},
eq6:function eq6(d){this.a=d},
eq3:function eq3(){},
eq7:function eq7(d,e){this.a=d
this.b=e},
eq2:function eq2(d,e){this.a=d
this.b=e},
eq8:function eq8(d,e){this.a=d
this.b=e},
eq1:function eq1(d,e){this.a=d
this.b=e},
eq9:function eq9(d){this.a=d},
eq0:function eq0(d){this.a=d},
eqa:function eqa(d,e){this.a=d
this.b=e},
eq_:function eq_(d,e){this.a=d
this.b=e},
eqb:function eqb(d){this.a=d},
eqc:function eqc(d){this.a=d},
epZ:function epZ(d,e){this.a=d
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
e6k:function e6k(d){this.a=d},
e6l:function e6l(d,e){this.a=d
this.b=e},
e68:function e68(d,e){this.a=d
this.b=e},
e69:function e69(d){this.a=d},
e66:function e66(d){this.a=d},
e67:function e67(d){this.a=d},
e65:function e65(d){this.a=d},
e6a:function e6a(d){this.a=d},
e64:function e64(d,e){this.a=d
this.b=e},
e6c:function e6c(d){this.a=d},
e63:function e63(d,e){this.a=d
this.b=e},
e6d:function e6d(d){this.a=d},
e62:function e62(d,e){this.a=d
this.b=e},
e6e:function e6e(d){this.a=d},
e61:function e61(d){this.a=d},
e6f:function e6f(d){this.a=d},
e60:function e60(d){this.a=d},
e6g:function e6g(d){this.a=d},
e6_:function e6_(d){this.a=d},
e6h:function e6h(d){this.a=d},
e6i:function e6i(d){this.a=d},
e6j:function e6j(d){this.a=d},
e5Z:function e5Z(d){this.a=d},
e6b:function e6b(d){this.a=d},
bhy:function bhy(d,e,f,g,h,i,j){var _=this
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
bgV:function bgV(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
epw:function epw(d){this.a=d},
epx:function epx(d){this.a=d},
epv:function epv(d){this.a=d},
epl:function epl(d,e){this.a=d
this.b=e},
epm:function epm(d){this.a=d},
epj:function epj(d){this.a=d},
epk:function epk(d){this.a=d},
epi:function epi(d){this.a=d},
epb:function epb(d){this.a=d},
epc:function epc(d){this.a=d},
epa:function epa(d){this.a=d},
epn:function epn(d,e){this.a=d
this.b=e},
eph:function eph(d,e){this.a=d
this.b=e},
epo:function epo(d,e){this.a=d
this.b=e},
epg:function epg(d,e){this.a=d
this.b=e},
epp:function epp(d){this.a=d},
epf:function epf(d){this.a=d},
epq:function epq(d){this.a=d},
epe:function epe(d,e){this.a=d
this.b=e},
epr:function epr(d){this.a=d},
epd:function epd(d,e){this.a=d
this.b=e},
eps:function eps(d){this.a=d},
ep9:function ep9(d,e){this.a=d
this.b=e},
ept:function ept(d){this.a=d},
ep8:function ep8(d,e){this.a=d
this.b=e},
epu:function epu(d){this.a=d},
ep7:function ep7(d,e){this.a=d
this.b=e},
boT:function boT(d,e,f,g,h,i,j){var _=this
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
b7b:function b7b(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cFm:function cFm(d){this.a=d},
aIc:function aIc(){},
bt2:function bt2(){},
aJ0:function aJ0(){},
bti:function bti(){},
aJf:function aJf(){},
btq:function btq(){},
En:function En(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
aaJ:function aaJ(d,e,f){this.a=d
this.b=e
this.c=f},
TO:function TO(d){this.a=d},
bgu:function bgu(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
e1O:function e1O(d,e){this.a=d
this.b=e},
e2c:function e2c(d){this.a=d},
e21:function e21(d){this.a=d},
e1T:function e1T(d){this.a=d},
e22:function e22(d,e){this.a=d
this.b=e},
e23:function e23(d){this.a=d},
e1S:function e1S(d){this.a=d},
e2_:function e2_(d){this.a=d},
e20:function e20(d){this.a=d},
e1Z:function e1Z(d){this.a=d},
e24:function e24(d,e){this.a=d
this.b=e},
e1Y:function e1Y(d,e){this.a=d
this.b=e},
e25:function e25(d,e){this.a=d
this.b=e},
e1X:function e1X(d,e){this.a=d
this.b=e},
e26:function e26(d,e){this.a=d
this.b=e},
e1W:function e1W(d,e){this.a=d
this.b=e},
e27:function e27(d){this.a=d},
e1V:function e1V(d,e){this.a=d
this.b=e},
e28:function e28(d){this.a=d},
e1U:function e1U(d){this.a=d},
e29:function e29(d){this.a=d},
e1R:function e1R(d){this.a=d},
e2a:function e2a(d){this.a=d},
e1Q:function e1Q(d){this.a=d},
e2b:function e2b(d){this.a=d},
e1P:function e1P(d){this.a=d},
bea:function bea(d,e,f,g,h,i){var _=this
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
e5I:function e5I(d,e){this.a=d
this.b=e},
e5J:function e5J(d,e,f){this.a=d
this.b=e
this.c=f},
e5Q:function e5Q(d){this.a=d},
e5P:function e5P(d){this.a=d},
e5R:function e5R(d,e){this.a=d
this.b=e},
e5S:function e5S(d){this.a=d},
e5O:function e5O(d){this.a=d},
e5T:function e5T(d){this.a=d},
e5N:function e5N(d,e){this.a=d
this.b=e},
e5U:function e5U(d,e){this.a=d
this.b=e},
e5M:function e5M(d,e){this.a=d
this.b=e},
e5V:function e5V(d,e){this.a=d
this.b=e},
e5L:function e5L(d,e){this.a=d
this.b=e},
e5W:function e5W(d){this.a=d},
e5X:function e5X(d){this.a=d},
e5K:function e5K(d){this.a=d},
e5Y:function e5Y(d){this.a=d},
bhz:function bhz(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aIZ:function aIZ(){},
btg:function btg(){},
aJ_:function aJ_(){},
bth:function bth(){},
eXm(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.H(e.j(0.4),A.r,1),s=x.p,r=C.a([C.D(C.d(d,w,w,w,w,w,w,D.a4D,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.aa,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.h,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.iI,w,w,1/0)},
hHl(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
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
e.bE(0,new B.fdP(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.uX.h(0,d[n]).a)return!1
m=C.eN([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.K)(j),++u){k=j[u]
if(m.J(0,k))l.push(k)}return m.a===d.length},
fGS(d){var w="TCAG",v=C.aJ(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cP(w,v[0])*16+A.a.cP(w,v[1])*4+A.a.cP(w,v[2])]},
rB:function rB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b64:function b64(d,e){this.a=d
this.b=e},
fdP:function fdP(d,e){this.a=d
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
e5c:function e5c(d){this.a=d},
e5b:function e5b(d,e){this.a=d
this.b=e},
e4Z:function e4Z(d,e){this.a=d
this.b=e},
e4T:function e4T(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e4U:function e4U(d){this.a=d},
e4Y:function e4Y(d,e){this.a=d
this.b=e},
e4X:function e4X(d,e){this.a=d
this.b=e},
e4V:function e4V(d){this.a=d},
e4W:function e4W(d,e){this.a=d
this.b=e},
e56:function e56(){},
e57:function e57(d){this.a=d},
e55:function e55(d){this.a=d},
e58:function e58(d){this.a=d},
e54:function e54(d){this.a=d},
e52:function e52(d){this.a=d},
e53:function e53(d,e){this.a=d
this.b=e},
e5_:function e5_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e51:function e51(d){this.a=d},
e59:function e59(d,e){this.a=d
this.b=e},
e50:function e50(d,e){this.a=d
this.b=e},
e5a:function e5a(d,e){this.a=d
this.b=e},
beR:function beR(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dhn:function dhn(d,e){this.a=d
this.b=e},
SP:function SP(d){this.a=d},
bfK:function bfK(d,e){var _=this
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
bad:function bad(d,e,f,g){var _=this
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
bwb(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.H(e.j(0.4),A.r,1),s=x.p,r=C.a([C.D(C.d(d,w,w,w,w,w,w,D.a4D,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.aa,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.h,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.iI,w,w,1/0)},
f8K(d,e,f,g,h){var w,v,u=null,t=C.iS(u,u,u,u,C.dq(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),e),A.a6,A.cn,u,A.eE,A.cm)
t.fq()
w=t.b
v=w.c
w=w.a.c
w=f.aE(0,new C.v(v/2,w.gbh(w)/2))
t.a6(d,w)},
hEv(){var w,v,u,t,s,r,q,p,o=new C.f0()
o.dX(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.aj(t,4)
r=C.aZ(v)
q=C.a([],u)
while(q.length<s){p=1+o.aB(5)
if(r.J(0,p))q.push(new C.A(p,1+o.aB(2+A.o.aj(t,3))))}A.d.aY(q,new B.f9G())
w.push(new B.aOI(q))}return w},
a_E(d,e){var w,v,u,t
for(w=new C.Vm(d),v="";w.C();){u=C.jv(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jv(65+A.o.H(A.o.H(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
hQT(d,e){var w,v,u,t,s,r,q,p=C.ae("[^A-Z]",!0,!1,!1,!1),o=C.aJ(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.Vm(d),v=0,u="";w.C();){t=C.jv(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.H(v,p)
u+=C.jv(65+A.o.H(A.o.H(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aOI:function aOI(d){this.a=d},
bC5:function bC5(){},
f9G:function f9G(){},
Sk:function Sk(d){this.a=d},
bfr:function bfr(d,e,f,g,h,i){var _=this
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
b6g:function b6g(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cxU:function cxU(d,e){this.a=d
this.b=e},
Ti:function Ti(d){this.a=d},
bfW:function bfW(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bq$=g
_.a5$=h
_.c=_.a=null},
dNj:function dNj(d){this.a=d},
dNi:function dNi(d,e){this.a=d
this.b=e},
dNk:function dNk(d){this.a=d},
dNh:function dNh(d,e){this.a=d
this.b=e},
dN9:function dN9(d,e,f){this.a=d
this.b=e
this.c=f},
dNd:function dNd(d){this.a=d},
dNc:function dNc(d){this.a=d},
dNe:function dNe(d,e){this.a=d
this.b=e},
dNb:function dNb(d,e){this.a=d
this.b=e},
dNf:function dNf(d){this.a=d},
dNa:function dNa(d,e){this.a=d
this.b=e},
dNg:function dNg(d,e){this.a=d
this.b=e},
bbG:function bbG(d,e,f){this.b=d
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
bfE:function bfE(d,e,f){var _=this
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
h5h(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aE(0,e).gcj()*0.1
return new C.v((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
fzp(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new B.a2i(w,v,u,A.cB,C.S(x.N,x.y))},
hcM(d,e,f){var w=d.c,v=e===0?-42:42
return new C.v(w*f.a+v,d.d*f.b)},
fF:function fF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
vj:function vj(d,e,f,g){var _=this
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
bHB:function bHB(){},
bHM:function bHM(d){this.a=d},
bHH:function bHH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bHO:function bHO(d){this.a=d},
bHP:function bHP(d){this.a=d},
bHN:function bHN(d){this.a=d},
bHQ:function bHQ(d,e,f){this.a=d
this.b=e
this.c=f},
bHR:function bHR(d){this.a=d},
bHD:function bHD(d){this.a=d},
bHE:function bHE(d){this.a=d},
bHC:function bHC(d){this.a=d},
bHF:function bHF(d,e,f){this.a=d
this.b=e
this.c=f},
bHG:function bHG(d){this.a=d},
bHA:function bHA(d){this.a=d},
bHS:function bHS(d,e){this.a=d
this.b=e},
bHI:function bHI(d,e){this.a=d
this.b=e},
bHL:function bHL(d){this.a=d},
bHK:function bHK(d){this.a=d},
bHJ:function bHJ(d){this.a=d},
agb:function agb(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bD2:function bD2(){},
bD3:function bD3(){},
nm:function nm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cfr:function cfr(d){this.a=d},
hOF(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b1.cx>0&&!b1.x,a6=new B.fpe(),a7=new B.fpg(),a8=new B.fph(),a9=new B.fpf()
switch(b1.b){case"fridge":w=a8.$4(-16,-28,32,54)
b0.b0(w,a9.$3(new C.ac(w.a,w.b,w.c,w.d),A.bM,A.bK))
b0.bK(D.dMF,D.dKG,a7.$2(A.dw,1.4))
b0.bK(D.dKw,D.dKv,a7.$2(A.bw,2.4))
b0.bK(D.dKx,U.aB2,a7.$2(A.bw,2.4))
if(a5){v=a6.$1(A.fx.j(0.5))
v.z=A.OF
b0.ak(D.dKi,14,v)
for(v=b2*0.6,u=0;u<3;++u){t=A.k.H(v+u/3,1)
b3.$5(b0,"\u2744",new C.v(-12+u*9,4+t*16),A.c.j(1-t),9)}}return!0
case"washer":b0.b0(a8.$4(-22,-26,44,50),a9.$3(D.aGw,A.aN,A.cp))
b0.ak(A.cA,16,a6.$1(A.bw))
b0.ak(A.cA,13,a6.$1(a5?A.b_.j(0.85):A.M))
if(a5){v=b0.a
J.bH(v.save())
v.translate(0,4)
b0.kG(0,b1.y*0.6)
for(u=0;u<3;++u){s=u*2.09
r=Math.cos(s)
s=Math.sin(s)
q=a7.$2(A.al,3).L()
v.drawLine.apply(v,[0,0,r*11,s*11,q])
q.delete()}v.restore()
for(s=b2*0.8,u=0;u<4;++u){t=A.k.H(s+u*0.25,1)
r=Math.sin(u*2+b2)
q=a6.$1(A.c.j(0.8*(1-t))).L()
v.drawCircle(r*9,4-t*12,1.6+t*2,q)
q.delete()}}b0.ak(D.dMB,2.4,a6.$1(a5?A.bn:A.ai))
b0.ak(D.dNe,2.4,a6.$1(A.ai))
return!0
case"blender":b0.b0(a8.$5(-14,14,28,12,4),a6.$1(A.f4))
v=$.a_().r
s=x.v
p=new C.aR(v,A.aq,a4,a4,C.a([],s))
p.E(new C.b7(-16,-26))
p.E(new C.ao(16,-26))
p.E(new C.ao(12,14))
p.E(new C.ao(-12,14))
p.E(new C.bE())
b0.aQ(p,a6.$1(A.fx.j(0.35)))
if(a5){v=new C.aR(v,A.aq,a4,a4,C.a([],s))
v.E(new C.b7(-14,-10))
v.E(new C.ao(14,-10))
v.E(new C.ao(12,14))
v.E(new C.ao(-12,14))
v.E(new C.bE())
b0.aQ(v,a6.$1(A.aF.j(0.7)))}b0.aQ(p,a7.$2(A.al,1.6))
v=b0.a
J.bH(v.save())
v.translate(0,10)
b0.kG(0,b1.y)
b0.bK(D.dNg,D.dLD,a7.$2(A.c4,3))
v.restore()
if(a5)for(s=b2*9,r=b2*1.6,u=0;u<3;++u){o=Math.sin(s+u*2)
n=A.k.H(r+u*0.33,1)
q=a6.$1(A.fg).L()
v.drawCircle(o*9,-10-n*12,2.4,q)
q.delete()}return!0
case"drone":b0.b0(a8.$5(-10,-4,20,10,4),a6.$1(A.aI))
b0.ak(A.i5,3,a6.$1(a5?A.bn:A.ai))
m=a5?-3+Math.sin(b2*4)*2:4
for(v=b0.a,s=-4+m,r=-6+m,l=0;l<2;++l){k=D.ask[l]
q=a7.$2(A.bw,3).L()
v.drawLine.apply(v,[k*0.4,1,k,s,q])
q.delete()
J.bH(v.save())
v.translate(k,r)
q=a7.$2(A.c.j(a5?0.35:0.9),3).L()
v.drawLine.apply(v,[-11,0,11,0,q])
q.delete()
if(a5){o=C.d9(A.J,6,24+Math.sin(b1.y*3)*4)
q=a6.$1(A.c.j(0.25)).L()
v.drawOval(C.cp(o),q)
q.delete()}v.restore()}return!0
case"drill":w=new C.aR($.a_().r,A.aq,a4,a4,C.a([],x.v))
w.E(new C.b7(-24,-12))
w.E(new C.ao(10,-12))
w.E(new C.ao(10,2))
w.E(new C.ao(-2,2))
w.E(new C.ao(-6,22))
w.E(new C.ao(-16,22))
w.E(new C.ao(-14,2))
w.E(new C.ao(-24,2))
w.E(new C.bE())
b0.aQ(w,a9.$3(D.elK,A.aL,A.du))
b0.bd(D.ele,a6.$1(A.eP))
v=b0.a
J.bH(v.save())
v.translate(18,-5)
b0.kG(0,b1.y*2)
b0.bK(A.J,D.dKA,a7.$2(A.c4,2.4))
b0.bK(A.a1N,D.dKz,a7.$2(A.hN,1))
v.restore()
if(a5)for(s=b2*3,r=b2*20,u=0;u<4;++u){t=A.k.H(s+u*0.25,1)
o=Math.sin(u*3+r)
q=a6.$1(A.f_.j(1-t)).L()
v.drawCircle(34+t*6,-5+o*6*t,1.4,q)
q.delete()}return!0
case"torch":if(a5){u=A.k.D(0.5+0.12*(Math.abs(b1.ch)-2),0.5,1)
v=new C.aR($.a_().r,A.aq,a4,a4,C.a([],x.v))
v.E(new C.b7(16,-6))
v.E(new C.ao(52,-26))
v.E(new C.ao(52,18))
v.E(new C.ao(16,4))
v.E(new C.bE())
b0.aQ(v,a6.$1(A.bI.j(0.35*u)))}b0.b0(a8.$5(-26,-6,30,12,3),a9.$3(D.elO,A.bu,A.cV))
j=new C.aR($.a_().r,A.aq,a4,a4,C.a([],x.v))
j.E(new C.b7(4,-6))
j.E(new C.ao(18,-12))
j.E(new C.ao(18,12))
j.E(new C.ao(4,6))
j.E(new C.bE())
b0.aQ(j,a6.$1(A.f4))
b0.ak(D.dKE,7,a6.$1(a5?A.c:A.eP))
return!0
case"neon":b0.b0(a8.$5(-30,-14,60,28,6),a6.$1(K.rn))
if(a5)i=b1.ax>0.5||A.o.H(A.k.bH(b2*17),3)!==0
else i=!1
h=i?A.c3:D.b7c
if(i){v=a8.$5(-28,-12,56,24,6)
s=a6.$1(A.c3.j(0.35))
s.z=A.lA
b0.b0(v,s)}b0.b0(a8.$5(-27,-11,54,22,5),a7.$2(h,2.2))
b3.$5(b0,"OPEN",D.dMK,h,17)
return!0
case"microwave":b0.b0(a8.$4(-30,-18,60,38),a9.$3(D.elU,A.c4,A.bu))
v=a8.$5(-26,-14,38,30,3)
b0.b0(v,a6.$1(a5?A.bI.j(0.75):A.aG))
if(a5){v=b0.a
J.bH(v.save())
v.translate(-7,8)
b0.kG(0,b1.y*0.5)
b0.j1(C.d9(A.J,7,22),a6.$1(A.du))
v.restore()}b0.b0(a8.$5(15,-14,12,12,2),a6.$1(K.rn))
if(a5)b3.$5(b0,"0:"+A.a.aT(A.o.u(59-A.o.H(A.k.bH(b2),60)),2,"0"),D.dKF,A.bl,6.5)
b0.ak(D.dKP,4,a6.$1(A.eP))
return!0
case"doorbell":b0.b0(a8.$5(-16,-26,32,52,8),a6.$1(A.aJ))
b0.ak(A.Pu,10,a6.$1(a5?A.cJ:A.bw))
v=b0.a
J.bH(v.save())
v.translate(0,-8)
b0.kG(0,a5?Math.sin(b2*16)*0.45:0)
b3.$5(b0,"\ud83d\udd14",D.dNf,A.c,16)
v.restore()
b0.ak(A.jN,6,a6.$1(A.d9))
b0.ak(A.jN,6,a7.$2(A.c,1.6))
if(a5)for(s=b2*14,u=1;u<=2;++u){r=C.bV(A.Pu,14+u*6+A.k.H(s,6))
q=a7.$2(A.cJ.j(0.9-u*0.3),1.8).L()
v.drawArc.apply(v,[C.cp(r),-51.56620156177409,103.13240312354819,!1,q])
q.delete()}return!0
case"camera":b0.bK(D.dMJ,D.dNc,a7.$2(A.bw,4))
v=b0.a
J.bH(v.save())
b0.kG(0,a5?Math.sin(b2*0.9)*0.18:0)
b0.b0(a8.$5(-24,-14,46,22,5),a9.$3(D.elL,A.c4,A.ai))
b0.ak(D.aB3,8,a6.$1(A.aG))
b0.ak(D.aB3,4.5,a6.$1(a5?A.b_:A.cV))
b0.ak(D.dMH,2.2,a6.$1(a5&&A.o.H(A.k.bH(b2*1.6),2)===0?A.aF:A.jZ))
v.restore()
if(a5)b3.$5(b0,"REC",D.dMR,A.aF,9)
return!0
case"console":b0.b0(a8.$5(-28,-22,56,44,8),a9.$3(D.elR,A.je,A.fe))
b0.b0(a8.$5(-20,-17,40,22,3),a6.$1(A.dI))
if(a5){v=b2*2.3
b0.ak(new C.v(Math.sin(v)*14,-6+Math.cos(b2*3.1)*6),2.6,a6.$1(A.c))
s=-9+Math.sin(v+0.4)*6
b0.bd(new C.ac(-18,s,-15.6,s+8),a6.$1(A.bl))
v=-9+Math.sin(v-0.4)*6
b0.bd(new C.ac(15.6,v,18,v+8),a6.$1(A.c3))}b0.ak(D.dME,4,a6.$1(A.aV))
b0.ak(D.dKB,2.4,a6.$1(A.aF))
b0.ak(D.dKN,2.4,a6.$1(A.bn))
return!0
case"heartmon":b0.b0(a8.$5(-30,-22,60,44,6),a6.$1(A.aG))
b0.b0(a8.$5(-26,-18,52,28,3),a6.$1(A.dI))
if(a5){v=$.a_()
s=C.a([],x.v)
g=new C.aR(v.r,A.aq,a4,a4,s)
for(v=b2*0.5,k=-25;k<=25;++k){t=A.k.H((k+25)/50-v,1)
if(t<0.1)f=Math.sin(t/0.1*3.141592653589793)*-1
else if(t<0.14)f=0.6
else{r=t<0.2?-0.4:0
f=r}e=-4+f*11
if(k===-25){r=new C.b7(k,e)
s.push(r)
o=g.f
if(o!=null)r.bC(o)
r=g.e
if(r!=null)r.a.delete()
g.e=null}else{r=new C.ao(k,e)
s.push(r)
o=g.f
if(o!=null)r.bC(o)
r=g.e
if(r!=null)r.a.delete()
g.e=null}}b0.aQ(g,a7.$2(A.bl,1.8))
b3.$5(b0,"72",D.dKC,A.hp,11)
v=b2*9
b3.$5(b0,"\u2665",D.dMV,A.hp.j((Math.sin(v)+1.4)/2.4),9+Math.sin(v)*1.2)}b0.ak(D.dMM,3,a6.$1(a5?A.bn:A.bw))
return!0
case"aquarium":v=a8.$5(-26,-20,52,40,4)
b0.b0(v,a6.$1(A.cC.j(a5?0.5:0.3)))
b0.b0(a8.$5(-26,-20,52,40,4),a7.$2(A.al,1.6))
b0.bd(D.elN,a6.$1(D.b2e))
if(a5){v=b2*1.1
s=Math.sin(v)
r=b0.a
J.bH(r.save())
r.translate(s*14,-2+Math.sin(b2*2)*3)
if(Math.cos(v)<0)b0.w9(0,-1,1)
b0.j1(C.d9(A.J,8,14),a6.$1(A.cX))
v=new C.aR($.a_().r,A.aq,a4,a4,C.a([],x.v))
v.E(new C.b7(-6,0))
v.E(new C.ao(-12,-4))
v.E(new C.ao(-12,4))
v.E(new C.bE())
b0.aQ(v,a6.$1(A.cl))
b0.ak(D.dLe,1.2,a6.$1(A.x))
r.restore()
for(v=b2*0.7,u=0;u<5;++u){t=A.k.H(v+u*0.2,1)
s=Math.sin(t*8+u)
o=A.o.H(u,2)
q=a7.$2(A.al,1).L()
r.drawCircle(-18+s*2,13-t*30,1.4+o,q)
q.delete()}}return!0
case"lighthouse":v=$.a_().r
s=x.v
d=new C.aR(v,A.aq,a4,a4,C.a([],s))
d.E(new C.b7(-9,22))
d.E(new C.ao(-5,-16))
d.E(new C.ao(5,-16))
d.E(new C.ao(9,22))
d.E(new C.bE())
b0.aQ(d,a9.$3(D.emc,A.c,A.bQ))
b0.bd(D.ema,a6.$1(a5?A.f_:A.bw))
r=new C.aR(v,A.aq,a4,a4,C.a([],s))
r.E(new C.b7(-7,-22))
r.E(new C.ao(0,-29))
r.E(new C.ao(7,-22))
r.E(new C.bE())
b0.aQ(r,a6.$1(A.eZ))
if(a5){a0=Math.sin(b1.y*0.3)
v=new C.aR(v,A.aq,a4,a4,C.a([],s))
v.E(new C.b7(0,-19))
s=a0*34
v.E(new C.ao(s,-26))
v.E(new C.ao(s,-12))
v.E(new C.bE())
b0.aQ(v,a6.$1(A.f_.j(0.45)))
v=a6.$1(A.f_.j(0.35))
v.z=A.OF
b0.ak(D.dKj,14,v)}return!0
case"discoball":b0.bK(D.dKn,E.aB0,a7.$2(A.eP,1.4))
b0.ak(A.J,16,a9.$3(D.elz,A.aN,A.ai))
for(v=b0.a,u=0;u<8;++u){s=-12+u*3.4
q=a7.$2(A.dq,0.7).L()
v.drawLine.apply(v,[-16,s,16,s,q])
q.delete()}for(u=0;u<5;++u){a0=b1.y*0.5+u*1.26
s=Math.cos(a0)
r=Math.sin(a0)
o=Math.cos(a0)
q=a7.$2(A.dq,0.7).L()
v.drawLine.apply(v,[s*16*0.3,r*16*0.3,o*16,0,q])
q.delete()}if(a5)for(s=b2*2,r=b2*9,u=0;u<10;++u){a0=s+u*0.63
a1=22+A.o.H(u,3)*6
o=Math.cos(a0)
n=Math.sin(a0)
q=a6.$1(D.cPj[A.o.H(u,4)].j(0.5+0.5*Math.sin(r+u))).L()
v.drawCircle(o*a1,n*a1*0.8,1.8,q)
q.delete()}return!0
case"robot":b0.b0(a8.$5(-14,-4,28,24,5),a9.$3(D.elx,A.cp,A.ai))
b0.b0(a8.$5(-12,-26,24,20,5),a9.$3(D.els,A.aJ,A.bK))
b0.bK(D.dKm,D.dKo,a7.$2(A.bw,1.6))
b0.ak(D.dKp,2.2,a6.$1(a5?A.aF:A.bw))
a2=a5&&A.k.H(b2*0.8,1)>0.08
for(v=b0.a,l=0;l<2;++l){k=D.cUo[l]
if(a5)s=a2?A.b9:A.j0
else s=A.cV
q=a6.$1(s).L()
v.drawCircle(k,-17,3.2,q)
q.delete()}J.bH(v.save())
v.translate(14,0)
b0.kG(0,a5?-0.6+Math.sin(b2*5)*0.6:0.3)
b0.bK(A.J,D.a1K,a7.$2(A.bK,4))
v.restore()
b0.bK(D.dMy,D.dMQ,a7.$2(A.bK,4))
b0.bd(D.em9,a6.$1(a5?A.b9.j(0.7):A.aI))
return!0
case"toaster":a3=a5?Math.min(1,b1.ax/3):0
for(v=-4-a3*14,s=b0.a,l=0;l<2;++l){r=a8.$5(D.asj[l]+1,v,10,14,2)
o=C.aq(A.bI,A.du,a3)
o.toString
q=a6.$1(o).L()
s.drawRRect(C.fs(r),q)
q.delete()}b0.b0(a8.$5(-24,-6,48,26,8),a9.$3(D.elM,A.c4,A.bu))
for(l=0;l<2;++l){k=D.asj[l]
v=a8.$5(k,-5,12,5,2)
q=a6.$1(a5?A.fS:A.aG).L()
s.drawRRect(C.fs(v),q)
q.delete()
if(a5){v=a8.$5(k,-5,12,5,2)
r=a6.$1(A.cX.j(0.5))
r.z=H.om
q=r.L()
s.drawRRect(C.fs(v),q)
q.delete()}}b0.bK(D.dKT,D.dL9,a7.$2(A.aG,3))
return!0}return!1},
fpe:function fpe(){},
fpg:function fpg(){},
fph:function fph(){},
fpf:function fpf(){},
fLJ(d,e,f,g){return new B.ag9(d,g,f,e)},
NI(d,e,f){return new B.b7d(d,e,f)},
ag9:function ag9(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
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
bCI:function bCI(d,e){this.a=d
this.b=e},
bCJ:function bCJ(d){this.a=d},
bCH:function bCH(d){this.a=d},
bCK:function bCK(){},
bCL:function bCL(d){this.a=d},
bD_:function bD_(d){this.a=d},
bD0:function bD0(){},
bCp:function bCp(){},
bD1:function bD1(d,e){this.a=d
this.b=e},
bCZ:function bCZ(d,e,f){this.a=d
this.b=e
this.c=f},
bCU:function bCU(d){this.a=d},
bCR:function bCR(d,e,f){this.a=d
this.b=e
this.c=f},
bCS:function bCS(d,e){this.a=d
this.b=e},
bCV:function bCV(d){this.a=d},
bCP:function bCP(d,e){this.a=d
this.b=e},
bCQ:function bCQ(d,e){this.a=d
this.b=e},
bCT:function bCT(d){this.a=d},
bCW:function bCW(d){this.a=d},
bCN:function bCN(d,e){this.a=d
this.b=e},
bCO:function bCO(d,e){this.a=d
this.b=e},
bCX:function bCX(d){this.a=d},
bCM:function bCM(d){this.a=d},
bCY:function bCY(d){this.a=d},
bCq:function bCq(d,e){this.a=d
this.b=e},
bCE:function bCE(d,e){this.a=d
this.b=e},
bCG:function bCG(d,e){this.a=d
this.b=e},
bCF:function bCF(d,e){this.a=d
this.b=e},
bCv:function bCv(d,e){this.a=d
this.b=e},
bCw:function bCw(d){this.a=d},
bCu:function bCu(d){this.a=d},
bCx:function bCx(d,e,f){this.a=d
this.b=e
this.c=f},
bCt:function bCt(d,e){this.a=d
this.b=e},
bCy:function bCy(d,e){this.a=d
this.b=e},
bCz:function bCz(d,e,f){this.a=d
this.b=e
this.c=f},
bCs:function bCs(d,e){this.a=d
this.b=e},
bCA:function bCA(d,e,f){this.a=d
this.b=e
this.c=f},
bCr:function bCr(d,e){this.a=d
this.b=e},
bCB:function bCB(d){this.a=d},
bCC:function bCC(d){this.a=d},
bCD:function bCD(d){this.a=d},
b7d:function b7d(d,e,f){this.a=d
this.b=e
this.c=f},
f06:function f06(){},
f07:function f07(){},
f08:function f08(){},
f_W:function f_W(){},
f09:function f09(){},
f_V:function f_V(){},
f0a:function f0a(){},
f0_:function f0_(){},
f_U:function f_U(){},
f00:function f00(){},
f_T:function f_T(){},
f01:function f01(){},
f_S:function f_S(){},
f02:function f02(){},
f_R:function f_R(){},
T5:function T5(d){this.a=d},
aAj:function aAj(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.y=_.x=_.w=0
_.c=_.a=null},
dJx:function dJx(d){this.a=d},
dJy:function dJy(){},
dJz:function dJz(d,e,f){this.a=d
this.b=e
this.c=f},
dJA:function dJA(){},
dJw:function dJw(d){this.a=d},
dJv:function dJv(d,e,f){this.a=d
this.b=e
this.c=f},
dJu:function dJu(d,e){this.a=d
this.b=e},
dJC:function dJC(d){this.a=d},
dJD:function dJD(d){this.a=d},
dJE:function dJE(d){this.a=d},
dJF:function dJF(d,e){this.a=d
this.b=e},
dJG:function dJG(d){this.a=d},
dJB:function dJB(d){this.a=d},
auO:function auO(){},
auP:function auP(){},
hOG(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.cx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bV(A.v3,23)
$.a_()
b8=C.N()
b8.r=A.aG.gq(0)
b9.ak(A.v3,25,b8)
b8=C.N()
b8.sar(D.dUg.az(0,v))
b9.ak(A.v3,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
o.r=A.bh.gq(0)
o.c=A.o.H(u,5)===0?1.8:1
n=o.L()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.ch):Math.abs(c0.CW)
t=2.5132741228718345+A.k.D(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=C.N()
r.r=A.bQ.gq(0)
r.c=2
r.d=A.bV
b9.bK(A.v3,new C.v(b8*18,s*18-2),r)
r=C.N()
r.r=A.bh.gq(0)
b9.ak(A.v3,3,r)
c2.$5(b9,w?"V":"A",D.dN5,A.bh,12)
c2.$5(b9,w?A.k.aa(m,1)+" V":""+A.k.U(m*1000)+" mA",D.dMD,A.aG,9.5)
return!0
case"fan":b8=C.bN(D.elp,A.iO)
$.a_()
s=C.N()
s.r=A.bw.gq(0)
b9.b0(b8,s)
s=C.N()
s.r=A.ai.gq(0)
b9.bd(D.em2,s)
s=C.N()
s.r=A.M.j(0.6).gq(0)
b9.ak(D.v4,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bH(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.d9(A.aAZ,18,10)
r=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
r.r=A.hv.j(b7&&c0.cx>0.5?0.55:0.95).gq(0)
n=r.L()
b8.drawOval(C.cp(s),n)
n.delete()
b8.restore()}b8=C.N()
b8.r=A.bi.gq(0)
b9.ak(D.v4,4,b8)
b8=C.N()
b8.b=A.ad
b8.c=2
b8.r=A.cp.gq(0)
b9.ak(D.v4,22,b8)
b8=C.N()
b8.b=A.ad
b8.c=0.8
b8.r=A.j_.gq(0)
b9.ak(D.v4,14,b8)
return!0
case"speaker":l=C.bN(D.aGw,A.ty)
$.a_()
b8=C.N()
b8.sar(D.ajx.az(0,new C.ac(l.a,l.b,l.c,l.d)))
b9.b0(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.N()
b8.sar(D.dUB.az(0,C.bV(A.cs,15)))
b9.ak(A.cs,14+k,b8)
b8=C.N()
b8.r=A.eP.gq(0)
b9.ak(A.cs,5,b8)
b8=C.N()
b8.r=A.bu.gq(0)
b9.ak(D.aB_,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bV(D.dKS,6+u*6+A.k.H(b8,6))
q=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
q.b=A.ad
q.c=1.8
q.r=A.c3.j(0.9-u*0.2).gq(0)
n=q.L()
s.drawArc.apply(s,[C.cp(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.bN(D.elX,A.ty)
$.a_()
b8=C.N()
b8.sar(D.bHi.az(0,new C.ac(j.a,j.b,j.c,j.d)))
b9.b0(j,b8)
b8=C.bN(D.aGy,A.j7)
s=C.N()
s.r=A.hI.gq(0)
b9.b0(b8,s)
if(b7){i=new C.Q(Date.now(),0,!1)
h=C.AL(i)<500?":":" "
g=A.a.aT(A.o.u(C.dk(i)),2,"0")
f=A.a.aT(A.o.u(C.hf(i)),2,"0")
b8=C.N()
b8.r=A.bl.j(0.12).gq(0)
b9.bd(D.aGy,b8)
c2.$5(b9,g+h+f,D.dMT,A.bl,21)}b8=C.N()
b8.r=A.cp.gq(0)
b9.ak(D.dMS,2.4,b8)
b8=C.N()
b8.r=A.cp.gq(0)
b9.ak(D.dKW,2.4,b8)
return!0
case"calculator":j=C.bN(D.elG,A.hD)
$.a_()
b8=C.N()
b8.sar(D.bH1.az(0,new C.ac(j.a,j.b,j.c,j.d)))
b9.b0(j,b8)
b8=C.bN(D.elB,A.fZ)
s=C.N()
s.r=(b7?A.U3:D.b7G).gq(0)
b9.b0(b8,s)
if(b7)c2.$5(b9,"3.14159",D.dMC,A.Tb,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.bN(new C.ac(q,s,q+6,r),A.PX)
$.a_()
p=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
p.r=(d===3?A.cl:A.c4).gq(0)
n=p.L()
b8.drawRRect(C.fs(q),n)
n.delete()}return!0
case"phone":j=C.bN(D.ely,A.hD)
$.a_()
b8=C.N()
b8.r=K.rn.gq(0)
b9.b0(j,b8)
b8=C.N()
b8.b=A.ad
b8.c=1.6
b8.r=A.bK.gq(0)
b9.b0(j,b8)
a0=C.bN(D.elr,A.iO)
if(b7){b8=C.N()
b8.sar(D.bIA.az(0,new C.ac(a0.a,a0.b,a0.c,a0.d)))
b9.b0(a0,b8)
a1=A.k.H(c1*0.12,1)
b8=C.bN(D.emb,A.fZ)
s=C.N()
s.b=A.ad
s.c=1.4
s.r=A.c.gq(0)
b9.b0(b8,s)
s=19*a1
b8=12.5-s
r=C.N()
r.r=A.bl.gq(0)
b9.bd(new C.ac(-5.5,b8,5.5,b8+s),r)
c2.$5(b9,"\u26a1",D.dNb,A.c,11)
c2.$5(b9,""+A.k.U(a1*100)+"%",D.dNh,A.c,8)}else{b8=C.N()
b8.r=D.aaL.gq(0)
b9.b0(a0,b8)}return!0
case"router":j=C.bN(D.elW,A.tx)
$.a_()
b8=C.N()
b8.sar(D.bHy.az(0,new C.ac(j.a,j.b,j.c,j.d)))
b9.b0(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=D.cUl[a2]
s=a3<0?-4:4
r=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
r.r=A.cV.gq(0)
r.c=4
r.d=A.bV
n=r.L()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.H(A.k.bH(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
s.r=(a4?A.bn:A.aI).gq(0)
n=s.L()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bV(D.v4,8+u*6+A.k.H(s,6))
q=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
q.b=A.ad
q.c=1.8
q.r=A.ht.j(0.9-u*0.2).gq(0)
n=q.L()
b8.drawArc.apply(b8,[C.cp(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.bN(D.elF,A.iO)
s=$.a_()
r=C.N()
r.r=A.f4.gq(0)
b9.b0(b8,r)
if(b7){b8=C.N()
b8.r=A.aF.j(0.5*a5).gq(0)
b8.z=A.AW
b9.ak(A.v3,34,b8)}a6=new C.aR(s.r,A.aq,b6,b6,C.a([],x.v))
a6.E(new C.b7(-16,12))
a6.E(new C.ao(-16,-2))
a6.E(new C.d_(0,-30,16,-2))
a6.E(new C.ao(16,12))
a6.E(new C.bE())
b8=C.N()
b8.r=C.aq(A.eZ,D.b10,a5).gq(0)
b9.aQ(a6,b8)
b8=C.N()
b8.b=A.ad
b8.c=1.4
b8.r=A.c1.gq(0)
b9.aQ(a6,b8)
if(b7){b8=b9.a
J.bH(b8.save())
b8.translate(0,-2)
b9.kG(0,c1*7)
s=C.N()
s.r=A.c.j(0.7).gq(0)
s.c=3
b9.bK(A.J,D.aB_,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.bH(b8.save())
b8.translate(0,a7)
s=$.a_().r
r=x.v
j=new C.aR(s,A.aq,b6,b6,C.a([],r))
j.E(new C.b7(-28,8))
j.E(new C.ao(-28,-2))
j.E(new C.ao(-16,-4))
j.E(new C.ao(-10,-16))
j.E(new C.ao(10,-16))
j.E(new C.ao(18,-4))
j.E(new C.ao(28,-2))
j.E(new C.ao(28,8))
j.E(new C.bE())
q=C.N()
q.sar(D.bFI.az(0,D.elQ))
b9.aQ(j,q)
q=new C.aR(s,A.aq,b6,b6,C.a([],r))
q.E(new C.b7(-8,-4))
q.E(new C.ao(-4,-13))
q.E(new C.ao(4,-13))
q.E(new C.ao(4,-4))
q.E(new C.bE())
p=C.N()
p.r=A.fx.gq(0)
b9.aQ(q,p)
r=new C.aR(s,A.aq,b6,b6,C.a([],r))
r.E(new C.b7(8,-4))
r.E(new C.ao(8,-13))
r.E(new C.ao(11,-13))
r.E(new C.ao(15,-4))
r.E(new C.bE())
s=C.N()
s.r=A.fx.gq(0)
b9.aQ(r,s)
for(a2=0;a2<2;++a2){a3=D.cUi[a2]
s=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
s.r=A.aG.gq(0)
n=s.L()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.bH(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
q.r=A.c4.gq(0)
q.c=1.6
n=q.L()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.H(s+u*8,14)
q=-4+u*5
p=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
p.r=A.aA.gq(0)
p.c=1.6
n=p.L()
b8.drawLine.apply(b8,[-34-r,q,-42-r,q,n])
n.delete()}return!0
case"kettle":b8=$.a_().r
s=x.v
j=new C.aR(b8,A.aq,b6,b6,C.a([],s))
j.E(new C.b7(-18,20))
j.E(new C.ao(-14,-12))
j.E(new C.d_(0,-20,14,-12))
j.E(new C.ao(18,20))
j.E(new C.bE())
r=C.N()
r.sar(D.bGJ.az(0,D.elE))
b9.aQ(j,r)
r=new C.aR(b8,A.aq,b6,b6,C.a([],s))
r.E(new C.b7(14,-10))
r.E(new C.ao(30,-22))
r.E(new C.ao(32,-18))
r.E(new C.ao(16,-4))
r.E(new C.bE())
q=C.N()
q.r=A.em.gq(0)
b9.aQ(r,q)
s=new C.aR(b8,A.aq,b6,b6,C.a([],s))
s.E(new C.b7(-14,-8))
s.E(new C.d_(-34,-6,-18,12))
b8=C.N()
b8.b=A.ad
b8.c=5
b8.r=A.aG.gq(0)
b9.aQ(s,b8)
b8=C.N()
if(b7){s=C.aq(A.cX,A.u6,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.f4
b8.r=s.gq(0)
b9.bd(D.elD,b8)
if(b7){b8=C.N()
b8.r=A.cX.j(0.3).gq(0)
b8.z=A.lA
b9.ak(A.aAX,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.H(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
q.r=A.c.j(0.6*(1-a8)).gq(0)
n=q.L()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.N()
b8.r=A.aG.gq(0)
b9.ak(D.dKh,3,b8)
return!0
case"lamp":if(b7){u=A.k.D(0.4+0.12*(Math.abs(c0.ch)-3),0.4,1)
b8=new C.aR($.a_().r,A.aq,b6,b6,C.a([],x.v))
b8.E(new C.b7(-10,-14))
b8.E(new C.ao(-30,24))
b8.E(new C.ao(10,24))
b8.E(new C.ao(8,-14))
b8.E(new C.bE())
s=C.N()
s.r=A.f_.j(0.28*u).gq(0)
b9.aQ(b8,s)
s=C.N()
s.r=A.f_.j(0.5*u).gq(0)
s.z=R.FU
b9.ak(D.dMW,24,s)}b8=C.bN(D.em8,A.iO)
s=$.a_()
r=C.N()
r.r=A.f4.gq(0)
b9.b0(b8,r)
r=C.N()
r.r=A.eP.gq(0)
r.c=3
r.d=A.bV
b9.bK(D.dKt,D.aB4,r)
r=C.N()
r.r=A.eP.gq(0)
r.c=3
r.d=A.bV
b9.bK(D.aB4,D.dMX,r)
a9=new C.aR(s.r,A.aq,b6,b6,C.a([],x.v))
a9.E(new C.b7(-14,-16))
a9.E(new C.ao(6,-26))
a9.E(new C.ao(10,-12))
a9.E(new C.ao(-10,-6))
a9.E(new C.bE())
s=C.N()
s.r=(b7?A.aL:A.kq).gq(0)
b9.aQ(a9,s)
b8=C.N()
b8.r=(b7?A.c:A.bu).gq(0)
b9.ak(D.dMY,4,b8)
return!0
case"lights":b8=$.a_().r
s=x.v
b0=new C.aR(b8,A.aq,b6,b6,C.a([],s))
b0.E(new C.b7(-34,-6))
b0.E(new C.d_(0,22,34,-6))
r=C.N()
r.b=A.ad
r.c=2
r.r=A.hh.gq(0)
b9.aQ(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.H(q+u*0.7,1.8)<1.1
if(b2){b3=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
b3.r=D.ZO[u].j(0.6).gq(0)
b3.z=A.OF
n=b3.L()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=C.a([],s)
b4=new C.aR(b8,A.aq,b6,b6,b3)
b3.push(new C.b7(p-3,o))
b3.push(new C.ao(p+3,o))
b5=o+11
b3.push(new C.ao(p+5,b5))
b3.push(new C.d_(p,o+17,p-5,b5))
b3.push(new C.bE())
p=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
if(b2)o=D.ZO[u]
else{o=C.aq(D.ZO[u],A.x,0.65)
o.toString}p.r=o.gq(0)
n=p.L()
p=b4.gbM().a.snapshot()
r.drawPath((b4.e=new C.cG(p)).a,n)
n.delete()}return!0}return B.hOF(b9,c0,c1,c2)},
jB:function jB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h4n(d,e,f,g,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.a
J.bH(h.save())
w=e.a
v=e.b
u=0+w
t=0+v
h.clipRect(C.cp(new C.ac(0,0,u,t)),$.uG()[1],!0)
if(a0<3){$.a_()
s=C.N()
s.r=D.aZx.gq(0)
d.bd(new C.ac(0,0,u,t),s)
if(a0<0.5)t=a0/0.5
else t=a0>2.4?(3-a0)/0.6:1
r=A.k.D(t,0,1)
t=e.ef(A.J)
s=e.ge8()
q=C.N()
q.sar(new C.bR(A.A,0.5,A.w,i,0,C.a([A.b_.j(0.35*r),A.K],x.O),i,i).az(0,C.bV(e.ef(A.J),e.ge8()*0.5)))
d.ak(t,s*0.5,q)
B.J9(d,"NGMY",new C.v(0,v*0.36),v*0.2,A.c.j(r),A.L,v*0.03,w)
B.J9(d,"T V",new C.v(0,v*0.6),v*0.08,A.b_.j(r),A.L,v*0.05,w)
q=w*0.3
s=v*0.78
t=C.N()
t.r=A.b_.j(r).gq(0)
d.bd(new C.ac(q,s,q+w*0.4*(a0/3),s+3),t)}else{p=A.k.D((a0-3)/0.5,0,1)
o=A.o.H(f,6)
switch(o){case 0:B.hDw(d,e,g)
break
case 1:B.hvs(d,e,g)
break
case 2:B.hCU(d,e,g)
break
case 3:B.hzT(d,e,g)
break
case 4:B.hB4(d,e,g)
break
default:B.hCV(d,e,g)}s=w-v*0.34
q=v*0.04
n=v*0.03
m=C.bN(new C.ac(s,q,s+v*0.3,q+v*0.1),new C.b3(n,n))
$.a_()
n=C.N()
n.r=A.x.j(0.55).gq(0)
d.b0(m,n)
B.J9(d,"NGMY",new C.v(m.a+v*0.025,m.b+v*0.012),v*0.07,A.c,A.be,1,i)
n=v*0.86
s=C.N()
s.r=A.x.j(0.6).gq(0)
d.bd(new C.ac(0,n,u,n+v*0.14),s)
B.J9(d,"CH "+(f+1)+"  \xb7  "+D.Nw[o].a,new C.v(q,v*0.885),v*0.075,A.c,A.be,0,w-v*0.08)
if(p<1){s=C.N()
s.r=A.c.j(0.6*(1-p)).gq(0)
d.bd(new C.ac(0,0,u,t),s)}}l=C.N()
l.r=A.x.j(0.07).gq(0)
for(k=0;k<v;k+=3){j=l.L()
h.drawRect(C.cp(new C.ac(0,k,u,k+1)),j)
j.delete()}u=new C.aR($.a_().r,A.aq,i,i,C.a([],x.v))
u.E(new C.b7(0,0))
u.E(new C.ao(w*0.45,0))
u.E(new C.ao(0,v*0.5))
u.E(new C.bE())
v=C.N()
v.r=A.c.j(0.04).gq(0)
d.aQ(u,v)
h.restore()},
J9(d,e,f,g,h,i,j,k){var w=null,v=C.iS(w,w,1,w,C.dq(w,w,w,w,w,w,w,w,w,C.l(w,w,h,w,w,w,w,w,w,w,w,g,w,w,A.u,w,w,!0,w,j,w,w,w,w,w,w),e),i,A.cn,w,A.eE,A.cm),u=k==null
v.AP(u?9999:k)
v.a6(d,f.ao(0,new C.v(i===A.L&&!u?(k-v.b.c)/2:0,0)))},
hDw(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=A.k.H(f,14),i=0+l,h=0+k
$.a_()
w=C.N()
w.sar(D.bHC.az(0,new C.ac(0,0,i,h)))
d.bd(new C.ac(0,0,i,h),w)
w=C.N()
w.r=A.f_.gq(0)
d.ak(new C.v(l*0.85,k*0.18),k*0.08,w)
w=k*0.78
h=C.N()
h.r=A.CQ.gq(0)
d.bd(new C.ac(0,w,i,w+k*0.22),h)
new B.f8Q(d,f,k).$5(new C.v(l*0.5,k*0.8),1.5707963267948966,k*0.24,5,A.k.D(j/5,0,1)*1.4)
for(i=k*0.26,h=k*0.11,w=k*0.05,v=d.a,u=-k,t=u*0.1,u*=0.04,s=k*0.065,r=0;r<6;++r){q=A.k.D((j-(5+r*1.3))/0.5,0,1)
if(q<=0)continue
p=(r&1)===1?0.04:0
o=A.o.H(r,3)
n=A.nO.av(0,q)
J.bH(v.save())
v.translate(l*(0.2+0.12*r+p),k*(0.16+0.14*o))
v.scale(n,n)
p=C.bN(C.d9(A.J,h,i),new C.b3(w,w))
$.a_()
o=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
o.r=A.c.gq(0)
m=o.L()
v.drawRRect(C.fs(p),m)
m.delete()
p=C.bN(C.d9(A.J,h,i),new C.b3(w,w))
o=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
o.b=A.ad
o.c=2
o.r=A.bz.gq(0)
m=o.L()
v.drawRRect(C.fs(p),m)
m.delete()
B.J9(d,"\u2665 "+D.cCp[r],new C.v(t,u),s,A.tW,A.be,0,null)
v.restore()}if(j>11.5)B.J9(d,"Family is everything",new C.v(0,k*0.62),k*0.09,A.hJ,A.L,0,l)},
hvs(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a0.a,i=a0.b,h=0+j,g=0+i,f=$.a_(),e=C.N()
e.sar(D.bFV.az(0,new C.ac(0,0,h,g)))
d.bd(new C.ac(0,0,h,g),e)
w=a1*40
for(h=d.a,g=x.v,v=0;v<2;++v,f=e){e=C.a([],g)
u=new C.aR(f.r,A.aq,k,k,e)
e.push(new C.b7(0,i))
for(f=v===0,t=0;t<=j;t+=6){s=f?0.4:1
r=f?0.62:0.78
q=f?40:28
q=new C.ao(t,i*r+Math.sin((t+w*s)/q)*i*0.05)
e.push(q)
s=u.f
if(s!=null)q.bC(s)
s=u.e
if(s!=null)s.a.delete()
u.e=null}s=new C.ao(j,i)
e.push(s)
e=u.f
if(e!=null)s.bC(e)
e=u.e
if(e!=null)e.a.delete()
u.e=null
e=$.a_()
s=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
s.r=(f?A.jw:A.eF).gq(0)
p=s.L()
f=u.e
h.drawPath((f==null?u.e=new C.cG(u.gbM().a.snapshot()):f).a,p)
p.delete()}for(h=i*0.04,g=w*1.3,f=j+60,e=j*0.3,o=0,n=0;n<6;++n){t=A.k.H(n*90-g,f)-30
s=Math.sin(n*1.7+a1)
if(Math.abs(t-e)<12)++o
B.hCZ(d,new C.v(t,i*(0.35+0.08*s)),h,A.f_)}m=Math.abs(Math.sin(a1*5))
l=new C.v(e,i*0.72-m*i*0.22)
h=C.d9(new C.v(e,i*0.82),i*0.025,i*0.14*(1-m*0.4))
$.a_()
g=C.N()
g.r=A.dq.gq(0)
d.j1(h,g)
g=i*0.085
h=C.N()
h.sar(D.dUl.az(0,C.bV(l,g)))
d.ak(l,g,h)
h=C.N()
h.b=A.ad
h.c=2
h.r=A.w7.gq(0)
d.ak(l,g,h)
h=-i
B.J9(d,"$",l.ao(0,new C.v(h*0.03,h*0.045)),i*0.09,A.w7,A.be,0,k)
g=h*0.01
h=l.ao(0,new C.v(h*0.028,g))
f=C.N()
f.r=A.x.gq(0)
d.ak(h,2.4,f)
g=l.ao(0,new C.v(i*0.028,g))
f=C.N()
f.r=A.x.gq(0)
d.ak(g,2.4,f)
B.J9(d,"Saved: $"+(A.o.H(A.k.bH(a1*3),1000)+o),new C.v(i*0.05,i*0.06),i*0.08,A.c,A.be,0,k)},
hCZ(d,e,f,g){var w,v,u,t,s,r,q,p=$.a_(),o=C.a([],x.v),n=new C.aR(p.r,A.aq,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?f:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new C.b7(r,q)
o.push(r)
q=n.f
if(q!=null)r.bC(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new C.ao(r,q)
o.push(r)
q=n.f
if(q!=null)r.bC(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.E(new C.bE())
$.a_()
p=C.N()
p.r=g.gq(0)
d.aQ(n,p)},
hCU(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a3.a,d=a3.b,a0=$.a_(),a1=C.N()
a1.r=D.b4B.gq(0)
a2.bd(new C.ac(0,0,0+e,0+d),a1)
w=new C.f0()
w.dX(7)
for(a1=a4*3,v=a2.a,u=0;u<60;++u){t=A.k.H(A.k.H(w.ae()*e-a4*(10+w.ae()*60),e)+e,e)
s=w.ae()
r=w.ae()
q=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
q.r=A.c.j(0.5+0.5*Math.sin(a1+u)).gq(0)
p=q.L()
v.drawCircle(t,s*d*0.85,0.6+r*1.4,p)
p.delete()}o=e*1.2-A.k.H(a4*22,e*1.6)
a1=d*0.3
s=d*0.2
r=C.N()
r.sar(D.dUj.az(0,C.bV(new C.v(o,a1),s)))
a2.ak(new C.v(o,a1),s,r)
a1=C.d9(new C.v(o,a1),d*0.07,d*0.6)
r=C.N()
r.b=A.ad
r.c=3
r.r=A.bI.j(0.7).gq(0)
a2.j1(a1,r)
r=Math.sin(a4*2)
J.bH(v.save())
v.translate(e*0.42,d*0.52+r*d*0.04)
a2.kG(0,-0.25)
a0=a0.r
r=x.v
n=new C.aR(a0,A.aq,f,f,C.a([],r))
a1=-d
s=a1*0.04
q=d*0.1
n.E(new C.b7(s,q))
m=d*0.04
n.E(new C.d_(0,d*(0.2+0.05*Math.sin(a4*30)),m,q))
n.E(new C.bE())
l=C.N()
k=d*0.12
l.sar(D.bGA.az(0,new C.ac(s,q,s+d*0.08,q+k)))
a2.aQ(n,l)
j=new C.aR(a0,A.aq,f,f,C.a([],r))
l=a1*0.17
j.E(new C.b7(0,l))
s=a1*0.05
i=d*0.05
j.E(new C.d_(d*0.09,s,i,q))
j.E(new C.ao(s,q))
j.E(new C.d_(a1*0.09,s,0,l))
j.E(new C.bE())
h=C.N()
g=a1*0.08
h.sar(D.bGN.az(0,new C.ac(g,l,g+d*0.16,l+d*0.27)))
a2.aQ(j,h)
h=C.N()
h.r=A.b_.gq(0)
a2.ak(new C.v(0,s),d*0.035,h)
h=new C.aR(a0,A.aq,f,f,C.a([],r))
h.E(new C.b7(s,m))
h.E(new C.ao(a1*0.1,k))
h.E(new C.ao(s,q))
h.E(new C.bE())
s=C.N()
s.r=A.aF.gq(0)
a2.aQ(h,s)
r=new C.aR(a0,A.aq,f,f,C.a([],r))
r.E(new C.b7(i,m))
r.E(new C.ao(q,k))
r.E(new C.ao(i,q))
r.E(new C.bE())
q=C.N()
q.r=A.aF.gq(0)
a2.aQ(r,q)
v.restore()},
hzT(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=0+g,d=0+f,a0=$.a_(),a1=C.N()
a1.sar(D.bFD.az(0,new C.ac(0,0,e,d)))
a2.bd(new C.ac(0,0,e,d),a1)
for(e=a2.a,d=f*0.85,a1=f*0.7,w=x.v,a0=a0.r,v=0;v<4;++v){u=g*(0.1+0.25*v)
t=C.a([],w)
s=new C.aR(a0,A.aq,h,h,t)
t.push(new C.b7(u,f))
t.push(new C.d_(u+Math.sin(a4+v)*10,d,u+4,a1+v*6))
t=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
t.b=A.ad
t.c=5
t.r=A.dk.gq(0)
r=t.L()
t=s.gbM().a.snapshot()
e.drawPath((s.e=new C.cG(t)).a,r)
r.delete()}d=A.k.H(a4*18,g*1.5)
J.bH(e.save())
e.translate(d-g*0.25,f*0.35+Math.sin(a4)*6)
d=C.d9(A.J,f*0.22,f*0.5)
a1=C.N()
a1.r=A.bw.gq(0)
a2.j1(d,a1)
a1=new C.aR(a0,A.aq,h,h,C.a([],w))
d=-f
t=d*0.22
a1.E(new C.b7(t,0))
a1.E(new C.d_(d*0.36,d*0.12+Math.sin(a4*3)*5,d*0.34,d*0.16))
s=d*0.02
a1.E(new C.d_(d*0.28,s,t,0))
t=C.N()
t.r=A.bw.gq(0)
a2.aQ(a1,t)
t=f*0.03
a1=f*0.1
q=C.d9(new C.v(0,t),a1,f*0.34)
p=C.N()
p.r=A.aJ.gq(0)
a2.j1(q,p)
p=C.N()
p.r=A.c.gq(0)
a2.ak(new C.v(f*0.15,s),3,p)
p=C.N()
p.r=A.x.gq(0)
a2.ak(new C.v(f*0.155,s),1.5,p)
e.restore()
for(s=d*0.005,q=d*0.08,p=d*0.03,o=f*0.06,d*=0.04,n=g+40,m=a4*2,v=0;v<6;++v){l=(v&1)===0?1:-1
k=A.k.H(A.k.H(a4*(24+v*7)*l+v*80,n)+g+40,n)
j=Math.sin(m+v)
J.bH(e.save())
e.translate(k-20,f*(0.52+0.06*v)+j*6)
e.scale(l,1)
k=C.d9(A.J,o,a1)
j=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
i=A.o.H(v,4)
j.r=D.aqk[i].gq(0)
r=j.L()
e.drawOval(C.cp(k),r)
r.delete()
k=C.a([],w)
j=new C.aR(a0,A.aq,h,h,k)
k.push(new C.b7(d,0))
k.push(new C.ao(q,p))
k.push(new C.ao(q,t))
k.push(new C.bE())
k=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
k.r=D.aqk[i].gq(0)
r=k.L()
k=j.gbM().a.snapshot()
e.drawPath((j.e=new C.cG(k)).a,r)
r.delete()
k=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
k.r=A.x.gq(0)
r=k.L()
e.drawCircle(t,s,1.8,r)
r.delete()
e.restore()}for(v=0;v<14;++v){d=A.k.H(v*0.071+0.05,1)
a0=A.k.H(a4*(14+v*3)+v*40,f)
a1=Math.sin(m+v)
w=A.o.H(v,3)
t=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
t.b=A.ad
t.c=1.2
t.r=A.c.j(0.7).gq(0)
r=t.L()
e.drawCircle(g*d+a1*4,f-a0,2+w,r)
r.delete()}},
hB4(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a9.a,a1=a9.b,a2=A.k.H(b0,12),a3=a2<7,a4=0+a0,a5=0+a1,a6=$.a_(),a7=C.N()
a7.sar(new C.a7(A.b1,A.b5,A.w,a3?D.cUY:D.cJL,d,d).az(0,new C.ac(0,0,a4,a5)))
a8.bd(new C.ac(0,0,a4,a5),a7)
a7=a1*0.74
w=C.N()
w.r=(a3?D.b87:A.CQ).gq(0)
a8.bd(new C.ac(0,a7,a4,a7+a1*0.26),w)
for(w=a8.a,v=a1*0.07,u=a1*0.06,t=a1*0.2,s=a1*0.1,r=a1*0.09,q=x.v,p=b0*2,a6=a6.r,o=0;o<4;++o){n=a0*(0.08+0.24*o)
m=a1*(0.14+0.03*A.o.H(o,2))
l=a7-m
k=n+t
j=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
j.r=D.cxy[o].gq(0)
i=j.L()
w.drawRect(C.cp(new C.ac(n,l,k,l+m)),i)
i.delete()
j=C.a([],q)
h=new C.aR(a6,A.aq,d,d,j)
j.push(new C.b7(n-4,l))
j.push(new C.ao(n+s,l-r))
j.push(new C.ao(k+4,l))
j.push(new C.bE())
l=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
l.r=A.eZ.gq(0)
i=l.L()
l=h.gbM().a.snapshot()
w.drawPath((h.e=new C.cG(l)).a,i)
i.delete()
l=n+v
k=m*0.55
j=a7-k
h=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
h.r=(a3&&A.o.H(A.k.bH(p),2)===0?A.li:A.hK).gq(0)
i=h.L()
w.drawRect(C.cp(new C.ac(l,j,l+u,j+k)),i)
i.delete()}if(a3){for(a7=b0*20,u=b0*260,t=a1*0.8,o=0;o<70;++o){n=A.k.H(o*37+a7,a0)
g=A.k.H(o*53+u,t)
r=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
r.r=A.fx.gq(0)
r.c=1.4
i=r.L()
w.drawLine.apply(w,[n,g,n-3,g+9,i])
i.delete()}a7=b0*3
if(A.o.H(A.k.bH(a7),7)===0&&A.k.H(a7,1)<0.3){a7=C.N()
a7.r=A.c.j(0.5).gq(0)
a8.bd(new C.ac(0,0,a4,a5),a7)
q=new C.aR(a6,A.aq,d,d,C.a([],q))
q.E(new C.b7(a0*0.6,s))
s=a0*0.55
a6=a1*0.3
q.E(new C.ao(s,a6))
q.E(new C.ao(a0*0.62,a6))
q.E(new C.ao(s,a1*0.55))
s=C.N()
s.b=A.ad
s.c=4
s.r=A.li.gq(0)
a8.aQ(q,s)}}else{for(a4=a0*0.5,a5=a1*0.035,a6=3.141592653589793*A.k.D((a2-7)/2,0,1)*57.29577951308232,o=0;o<6;++o){u=a0*(0.9-o*0.07)
u=C.d9(new C.v(a4,a7),u,u)
t=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
t.b=A.ad
t.c=a5
t.r=D.cYE[o].j(0.9).gq(0)
i=t.L()
w.drawArc.apply(w,[C.cp(u),180,a6,!1,i])
i.delete()}a4=C.N()
a4.r=A.f_.gq(0)
a8.ak(new C.v(a0*0.86,a1*0.16),a1*0.08,a4)}for(a4=a0+120,o=0;o<3;++o){n=A.k.H(b0*(8+o*4)+o*120,a4)-60
for(a5=a1*(0.12+0.1*o),f=0;f<4;++f){e=D.c30[f]
$.a_()
a6=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
a6.r=(a3?A.bi:A.c.j(0.95)).gq(0)
i=a6.L()
w.drawCircle(n+e.a,a5+e.b,v,i)
i.delete()}}},
hCV(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a3.a,a1=a3.b
$.a_()
w=C.N()
w.r=A.da.gq(0)
a2.bd(new C.ac(0,0,0+a0,0+a1),w)
v=C.N()
v.r=A.c.j(0.05).gq(0)
for(w=a2.a,u=0;u<a0;u+=16){t=v.L()
w.drawLine.apply(w,[u,0,u,a1,t])
t.delete()}for(s=0;s<a1;s+=16){t=v.L()
w.drawLine.apply(w,[0,s,a0,s,t])
t.delete()}r=a0*0.14
q=a1*0.2
p=a1*0.08
o=C.bN(new C.ac(r,q,r+a0*0.72,q+a1*0.5),new C.b3(p,p))
n=new C.aR($.a_().r,A.aq,null,null,C.a([],x.v))
n.E(new C.iV(o))
q=C.N()
q.b=A.ad
q.c=5
q.r=A.bw.gq(0)
a2.aQ(n,q)
m=new C.a2q(new C.wj(C.xW(n),!1,C.a([],x.T))).gK(0)
q=m.a
l=m.b
q.jN()
k=q.e
j=k[l].b
j===$&&C.c()
j=j.a.length()
q.jN()
i=k[l].b
i===$&&C.c()
h=A.k.H(a4*j/5,i.a.length())
for(g=0;g<10;++g){q.jN()
j=k[l].b
j===$&&C.c()
j=A.k.H(h-g*9,j.a.length())
q.jN()
f=k[l].T2(j).a
j=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
j.r=A.f_.j(1-g*0.09).gq(0)
j.z=E.OD
t=j.L()
w.drawCircle(f.a,f.b,6-g*0.5,t)
t.delete()}w=a1*0.45
q=C.bN(C.d9(new C.v(r,w),a1*0.22,a1*0.12),A.j7)
l=C.N()
l.r=A.dk.gq(0)
a2.b0(q,l)
B.J9(a2,"+",new C.v(r-5,a1*0.33),a1*0.07,A.c,A.be,0,null)
e=(Math.sin(a4*2)+1)/2
d=new C.v(a0*0.86,w)
w=C.N()
w.r=A.f_.j(0.25+0.5*e).gq(0)
w.z=R.FU
a2.ak(d,a1*0.16,w)
w=C.N()
w.r=C.aq(A.bK,A.u9,e).gq(0)
a2.ak(d,p,w)
B.J9(a2,"Electricity needs a full loop!",new C.v(0,a1*0.74),a1*0.075,A.hv,A.L,0,a0)},
hQk(d,e,f,g){return C.a8(d,!1).cr(C.vi(null,!1,!0,!0,new B.fwP(e,g,f),A.eS,null,A.rB,new B.fwQ(),x.S))},
Hh:function Hh(d,e){this.a=d
this.b=e},
f8Q:function f8Q(d,e,f){this.a=d
this.b=e
this.c=f},
fwP:function fwP(d,e,f){this.a=d
this.b=e
this.c=f},
fwQ:function fwQ(){},
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
eqf:function eqf(d){this.a=d},
eqe:function eqe(d){this.a=d},
eqd:function eqd(d,e){this.a=d
this.b=e},
eqk:function eqk(d){this.a=d},
eqg:function eqg(d){this.a=d},
eqh:function eqh(d){this.a=d},
eqi:function eqi(d){this.a=d},
eqj:function eqj(d){this.a=d},
bqC:function bqC(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aJj:function aJj(){},
f4j(d,e,f,g){var w=null,v=C.m(24),u=C.H(f.j(0.6),A.r,1)
return C.at(C.p(w,C.u(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.ar,C.d(e,w,w,w,w,w,w,A.Hq,A.L,w,w),A.ay,C.c8(A.fF,g,A.bx,0,8)],x.p),A.m,w,A.e,A.R,0,A.p),A.h,w,w,new C.o(D.Ti,w,u,v,w,w,A.n),w,w,w,A.en,A.a8,w,w,w),w,w,w)},
fHl(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.f0()
b4.dX(b5*977+13)
w=A.o.D(1+A.o.aj(b5,5),1,5)
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
if(A.d.t(p,a1)||a1===q){j=!1
break}p.push(a1);++e}if(!j||e>=99||m===0)break
a2=b4.he()?new C.A(f,-g):new C.A(-f,g)
a3=new C.A(-f,-g).A(0,a2)
a4=l+a2.a
a5=r+a2.b
if(a4<0||a5<0||a4>=7||a5>=7)break A
o.push(r*7+l);--m
g=A.d.gai(o)
n.m(0,g,a3?"/":"\\")
k=a2}}if(!j||o.length<w||p.length<5)continue
g=C.a([],v)
for(f=p.length,a6=0;a6<p.length;p.length===f||(0,C.K)(p),++a6){a7=p[a6]
if(!A.d.t(o,a7))g.push(a7)}if(g.length<3)continue
a8=A.o.D(2+A.o.aj(b5,8),2,4)
a9=C.eN([A.d.gai(g)],u)
A.d.fw(g,b4)
for(v=g.length,a6=0;a6<g.length;g.length===v||(0,C.K)(g),++a6){a7=g[a6]
if(a9.a>=a8)break
a9.J(0,a7)}b0=C.aZ(u)
b1=3+A.o.aj(b5,3)
v=q+1
b2=0
for(;;){if(b0.a<b1){b3=b2+1
g=b2<200
b2=b3}else g=!1
if(!g)break
B:{a7=b4.aB(49)
if(A.d.t(p,a7)||a7===q||a9.t(0,a7)||A.d.t(o,a7))break B
if(a7===v)break B
b0.J(0,a7)}}v=b5>=10?1:0
return new B.aT8(b0,a9,C.S(u,t),q,L.ps,w+v)}return new B.aT8(C.aZ(u),C.eN([25],u),C.S(u,t),21,L.ps,1)},
h5c(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aZ(x.S),n=d.e,m=A.o.H(n,7),l=A.o.aj(n,7),k=d.f
p.push(n)
for(n=d.c,w=d.b,v=d.d,u=0;u<200;++u){t=k.a
m+=t
s=k.b
l+=s
if(m<0||l<0||m>=7||l>=7)break
r=l*7+m
if(w.t(0,r))break
p.push(r)
if(n.t(0,r))o.J(0,r)
q=e.h(0,r)
if(q==null)q=v.h(0,r)
if(q==="/")k=new C.A(-s,-t)
if(q==="\\")k=new C.A(k.b,k.a)}return new C.bky(p,o)},
h0B(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aT8:function aT8(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
TB:function TB(d){this.a=d},
bgh:function bgh(d,e,f,g,h,i,j,k,l){var _=this
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
dYC:function dYC(d){this.a=d},
dYB:function dYB(d,e){this.a=d
this.b=e},
dYD:function dYD(){},
dYs:function dYs(d,e){this.a=d
this.b=e},
dYt:function dYt(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dYw:function dYw(d,e){this.a=d
this.b=e},
dYu:function dYu(d){this.a=d},
dYv:function dYv(d){this.a=d},
dYx:function dYx(d){this.a=d},
dYy:function dYy(d){this.a=d},
dYz:function dYz(d){this.a=d},
dYA:function dYA(d,e){this.a=d
this.b=e},
bdl:function bdl(d,e,f,g,h,i,j){var _=this
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
dYV:function dYV(d){this.a=d},
dYU:function dYU(d,e){this.a=d
this.b=e},
dYW:function dYW(){},
dYG:function dYG(){},
dYP:function dYP(d,e){this.a=d
this.b=e},
dYM:function dYM(d){this.a=d},
dYI:function dYI(d){this.a=d},
dYN:function dYN(d){this.a=d},
dYO:function dYO(d){this.a=d},
dYH:function dYH(d){this.a=d},
dYQ:function dYQ(d){this.a=d},
dYL:function dYL(d,e){this.a=d
this.b=e},
dYR:function dYR(d){this.a=d},
dYK:function dYK(d,e){this.a=d
this.b=e},
dYS:function dYS(d){this.a=d},
dYJ:function dYJ(d,e){this.a=d
this.b=e},
dYT:function dYT(d){this.a=d},
bdA:function bdA(d,e){this.b=d
this.a=e},
aIO:function aIO(){},
bt9:function bt9(){},
aIP:function aIP(){},
bta:function bta(){},
ZK(d,e,f,g,h,i){return new B.bq0(d,e,f,g,h,i)},
bq0:function bq0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f0P:function f0P(){},
f0Q:function f0Q(){},
f0R:function f0R(){},
f0S:function f0S(){},
f0T:function f0T(){},
f0U:function f0U(){},
f0V:function f0V(){},
f0W:function f0W(){},
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
eui:function eui(d){this.a=d},
eue:function eue(d){this.a=d},
eud:function eud(d,e){this.a=d
this.b=e},
eug:function eug(d,e){this.a=d
this.b=e},
euf:function euf(d,e){this.a=d
this.b=e},
euh:function euh(d){this.a=d},
brm:function brm(d,e,f){this.b=d
this.c=e
this.a=f},
Tc:function Tc(d){this.a=d},
bfR:function bfR(d,e,f,g,h,i){var _=this
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
dLC:function dLC(){},
dLD:function dLD(){},
dLx:function dLx(d,e){this.a=d
this.b=e},
dLz:function dLz(d,e){this.a=d
this.b=e},
dLA:function dLA(d){this.a=d},
dLy:function dLy(d){this.a=d},
dLB:function dLB(d){this.a=d},
bmh:function bmh(d,e,f){this.b=d
this.c=e
this.a=f},
Sq:function Sq(d){this.a=d},
bfw:function bfw(d,e,f,g,h,i){var _=this
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
bfL:function bfL(d,e,f,g){var _=this
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
bhM:function bhM(d,e,f){this.b=d
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
e32:function e32(d,e){this.a=d
this.b=e},
e33:function e33(d,e,f){this.a=d
this.b=e
this.c=f},
e31:function e31(d,e,f){this.a=d
this.b=e
this.c=f},
e34:function e34(d){this.a=d},
e30:function e30(d){this.a=d},
e38:function e38(d){this.a=d},
e37:function e37(d,e){this.a=d
this.b=e},
e36:function e36(d,e){this.a=d
this.b=e},
e39:function e39(d,e){this.a=d
this.b=e},
e35:function e35(d,e){this.a=d
this.b=e},
e3a:function e3a(d){this.a=d},
U0:function U0(d){this.a=d},
aBp:function aBp(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
ebx:function ebx(d){this.a=d},
eby:function eby(d){this.a=d},
ebv:function ebv(d,e){this.a=d
this.b=e},
ebw:function ebw(d){this.a=d},
ebu:function ebu(d){this.a=d},
ebz:function ebz(d){this.a=d},
ebA:function ebA(d){this.a=d},
ebB:function ebB(d){this.a=d},
ebC:function ebC(d,e){this.a=d
this.b=e},
Ul:function Ul(d){this.a=d},
bgZ:function bgZ(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
epP:function epP(){},
epY:function epY(){},
epU:function epU(d){this.a=d},
epT:function epT(){},
epV:function epV(d,e){this.a=d
this.b=e},
epS:function epS(d,e){this.a=d
this.b=e},
epW:function epW(d){this.a=d},
epR:function epR(d,e){this.a=d
this.b=e},
epX:function epX(d){this.a=d},
epQ:function epQ(d){this.a=d},
TN:function TN(d){this.a=d},
bgs:function bgs(d,e,f,g,h,i,j,k){var _=this
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
e1I:function e1I(){},
e1J:function e1J(){},
e1B:function e1B(d){this.a=d},
e1A:function e1A(d){this.a=d},
e1C:function e1C(d){this.a=d},
e1z:function e1z(d){this.a=d},
e1D:function e1D(d){this.a=d},
e1y:function e1y(d){this.a=d},
e1E:function e1E(d,e){this.a=d
this.b=e},
e1x:function e1x(d,e){this.a=d
this.b=e},
e1F:function e1F(d){this.a=d},
e1w:function e1w(d,e){this.a=d
this.b=e},
e1G:function e1G(d){this.a=d},
e1v:function e1v(d,e){this.a=d
this.b=e},
e1H:function e1H(d){this.a=d},
e1u:function e1u(d,e){this.a=d
this.b=e},
b9z:function b9z(d,e,f){this.c=d
this.d=e
this.a=f},
aIa:function aIa(){},
bt1:function bt1(){},
aIs:function aIs(){},
bt5:function bt5(){},
aIX:function aIX(){},
btf:function btf(){},
aJq:function aJq(){},
btr:function btr(){},
jw(d,e,f,g,h,i){return new B.b3g(h,d,f,g,i,e,null)},
h53(d,e,f,g){var w=null
return C.cf(w,w,!0,w,new B.fxf(g,e,f),d,w,!0,!0,x.H)},
hp(d,e,f,g,h,i,j){return new B.asX(f,j,i,h,g,d,e,null)},
qj(d,e,f){return B.hQw(d,e,f)},
hQw(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qj=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aT.af$.x.h(0,e)
n=n==null?null:n.gb5()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.lQ(2),$async$qj)
case 7:q=h
w=8
return C.b(q.hf(A.fM),$async$qj)
case 8:p=h
if(p==null){w=1
break}o=J.f2(A.dA.gaL(p))
w=9
return C.b(B.ckr(C.a([B.fVd(o,"image/png",f+".png")],x.D),"Made in NGMY Core Protocol"),$async$qj)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.G(x.gV).f.P(D.aIt)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qj,v)},
hmA(b4,b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=A.o.aj(22050*b5,1000),b1=b0*2,b2=new DataView(new ArrayBuffer(44+b1)),b3=new B.cab(b2)
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
switch(b8){case"piano":r=D.cDC
q=D.cIn
v=3.4
break
case"organ":r=D.cHn
q=D.cV1
u=0.02
t=!0
break
case"bell":r=D.czD
q=D.cyC
v=2.4
break
case"pluck":r=D.cDB
q=D.ckJ
v=7
break
case"synth":r=D.cVQ
q=D.cXp
u=0.012
t=!0
break
case"flute":r=D.d04
q=D.bWt
u=0.07
t=!0
s=0.035
break
default:r=D.ak0
q=D.ak0}b1=r.length
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
break A}if(o){a4=A.k.H(d/6.283185307179586,1)*1.2-0.6
break A}a4=Math.sin(d)
break A}a5=a4*(Math.min(1,a0/120)*Math.pow(a2,1.6))}b2.setInt16(44+a0*2,A.o.D(A.k.U(a5*0.8*32e3),-32768,32767),!0)}return J.f2(A.dA.gaL(b2))},
dL(d,e,f,g,h,i){return B.hmB(d,e,f,g,h,i)},
hmB(d,e,f,g,h,i){var w=0,v=C.j(x.H),u=1,t=[],s,r,q,p,o,n
var $async$dL=C.e(function(j,k){if(j===1){t.push(k)
w=u}for(;;)switch(w){case 0:u=3
s=""+A.k.U(d)+"|"+f+"|"+i+"|"+C.t(g)+"|"+e
r=$.hmz.ce(0,s,new B.cad(d,f,i,g,e))
if($.caa.length<12){p=C.afX()
p.Lm(A.aGz)
$.caa.push(p)}p=$.fSw
$.fSw=p+1
q=$.caa[A.o.H(p,$.caa.length)]
w=6
return C.b(J.h9W(q,new C.a17(r,null),h),$async$dL)
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
l1(d,e,f,g){var w,v=$.aZk
if(v==="music")return B.dL(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return B.dL(261.63*v,w,f,0,g,"sine")}return B.vd(v,e,f,g)},
vd(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return B.dL(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return B.dL(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return B.dL(140+A.o.H(e,12)*9,"",150,0.9,g,v)
case"bubble":return B.dL(260+A.o.H(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":B.dL(t,"",160,-0.7,g*0.4,w)
return B.dL(900,"",90,0,g*0.45,u)
case"zap":return B.dL(t*3,"",150,1.6,g*0.4,"square")
case"click":return B.dL(2600+A.o.H(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":B.dL(320,"",220,-0.7,g*0.35,v)
return B.dL(1500,"",200,0,g*0.22,u)
case"organic":return B.dL(85+A.o.H(e,12)*5,"",190,1.1,g,v)
case"lab":return B.dL(t*1.6,"",140,-0.3,g*0.55,w)
default:return B.dL(t,"",s,0,g*0.5,w)}},
Ay(d,e,f,g){var w,v,u,t,s,r,q,p=$.aZk
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.K)(e),++w)B.l1(d,e[w],f,g)
return}for(p=C.de(e,0,C.dJ(4,"count",x.S),C.U(e).c),v=p.$ti,p=new C.bU(p,p.gI(0),v.k("bU<ai.E>")),u=x.H,v=v.k("ai.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)B.l1(d,s,f,g)
else C.bM(new C.b8(1000*q),new B.cac(d,s,f,g),u)}},
a67(d,e){var w="sine",v="noise"
switch(d){case"kick":B.dL(95,"",200,1.8,e,w)
break
case"snare":B.dL(220,"",140,0,e*0.65,v)
break
case"hat":B.dL(5000,"",50,0,e*0.35,v)
break
case"open":B.dL(5200,"",220,0,e*0.35,v)
break
case"clap":B.dL(1100,"",100,0,e*0.5,v)
break
case"tom":B.dL(150,"",230,1,e,w)
break
case"low":B.dL(100,"",260,0.9,e,w)
break
case"rim":B.dL(1700,"",60,0,e*0.4,"square")
break
case"cow":B.dL(820,"",240,0,e*0.3,"square")
break
case"crash":B.dL(3200,"",650,0,e*0.4,v)
break
case"shake":B.dL(7000,"",90,0,e*0.3,v)
break
default:B.dL(60,"",300,0,e,w)}},
yw(d){return B.hlP(d)},
hlP(d){var w=0,v=C.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l
var $async$yw=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.ax(),$async$yw)
case 7:r=f
q=C.aS(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=C.S(x.N,x.z)
w=1
break}p=A.Q.aD(0,q,null)
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
return C.i($async$yw,v)},
va(d,e){return B.hlQ(d,e)},
hlQ(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$va=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ax(),$async$va)
case 6:s=g
w=7
return C.b(s.ap("String","ngmy_play_progress_v1_"+d,A.Q.al(e,null)),$async$va)
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
return C.i($async$va,v)},
b3g:function b3g(d,e,f,g,h,i,j){var _=this
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
fxf:function fxf(d,e,f){this.a=d
this.b=e
this.c=f},
fxe:function fxe(d){this.a=d},
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
DW:function DW(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cmo:function cmo(d){this.a=d},
mc:function mc(){},
cmj:function cmj(d,e,f){this.a=d
this.b=e
this.c=f},
cml:function cml(d){this.a=d},
cmk:function cmk(){},
cab:function cab(d){this.a=d},
cad:function cad(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cac:function cac(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
coT(){var w=0,v=C.j(x.cL),u,t
var $async$coT=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=B
w=3
return C.b($.tt().baF("assets/data/world110.json"),$async$coT)
case 3:u=t.hql(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$coT,v)},
hql(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.a,a0=d.a(A.Q.aD(0,a2,null)),a1=C.a([],x.C)
for(w=J.aV(a0),v=x.n,u=x.b,t=x.h,s=x.gO;w.C();){r=t.a(w.gT(w))
q=C.a([],s)
for(p=J.a6(r),o=J.aV(d.a(p.h(r,"r")));o.C();){n=o.gT(o)
m=C.a([],u)
for(l=J.aV(d.a(n));l.C();){k=l.gT(l)
j=J.a6(k)
m.push(C.a([C.fa(j.h(k,0)),C.fa(j.h(k,1))],v))}q.push(m)}o=C.cI(p.h(r,"n"))
m=C.cI(p.h(r,"a"))
l=C.cI(p.h(r,"ct"))
j=C.cI(p.h(r,"sr"))
i=C.fa(p.h(r,"pop"))
h=C.fa(p.h(r,"gdp"))
g=C.cI(p.h(r,"inc"))
f=C.ae("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aNd(g,f,"",0)
f=C.fa(J.q(p.h(r,"c"),0))
p=C.fa(J.q(p.h(r,"c"),1))
e=new B.a8O(o,m,l,j,i,h,g,f,p,q)
e.bss(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new B.a8P(a1)},
fbx(d){if(d>=1e12)return A.k.aa(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.aa(d/1e9,2)+" billion"
if(d>=1e6)return A.k.aa(d/1e6,1)+" million"
if(d>=1000)return A.k.aa(d/1000,1)+" thousand"
return A.k.aa(d,0)},
Fk(d){var w,v,u,t=A.o.u(A.k.U(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.H(w-v,3)===0)u+=","
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
un:function un(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
xb:function xb(d,e,f){this.a=d
this.b=e
this.c=f},
Np:function Np(d){this.a=0
this.b=d
this.c=0},
hse(d,e,f){return $.hsf.ce(0,d+"|"+C.t(e)+"|"+f.l(),new B.d5D(d,e,f))},
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
dOk:function dOk(d){this.a=d},
dOj:function dOj(d,e){this.a=d
this.b=e},
dNN:function dNN(d){this.a=d},
dNL:function dNL(d){this.a=d},
dNM:function dNM(d,e,f){this.a=d
this.b=e
this.c=f},
dNK:function dNK(d){this.a=d},
dNJ:function dNJ(){},
dNI:function dNI(d){this.a=d},
dO5:function dO5(d,e){this.a=d
this.b=e},
dO6:function dO6(d,e){this.a=d
this.b=e},
dNV:function dNV(d){this.a=d},
dNW:function dNW(d){this.a=d},
dNU:function dNU(d){this.a=d},
dNX:function dNX(d){this.a=d},
dNO:function dNO(d,e){this.a=d
this.b=e},
dNP:function dNP(d){this.a=d},
dO7:function dO7(d,e){this.a=d
this.b=e},
dNT:function dNT(d,e){this.a=d
this.b=e},
dOb:function dOb(d){this.a=d},
dO4:function dO4(d){this.a=d},
dOc:function dOc(d,e){this.a=d
this.b=e},
dO3:function dO3(d,e){this.a=d
this.b=e},
dOd:function dOd(d){this.a=d},
dO2:function dO2(d,e){this.a=d
this.b=e},
dOe:function dOe(d){this.a=d},
dO1:function dO1(d,e){this.a=d
this.b=e},
dOf:function dOf(d){this.a=d},
dO0:function dO0(d,e){this.a=d
this.b=e},
dOg:function dOg(d){this.a=d},
dO_:function dO_(d,e){this.a=d
this.b=e},
dOh:function dOh(d){this.a=d},
dNZ:function dNZ(d){this.a=d},
dOi:function dOi(d){this.a=d},
dNY:function dNY(d){this.a=d},
dO8:function dO8(d){this.a=d},
dNS:function dNS(d){this.a=d},
dO9:function dO9(d){this.a=d},
dNR:function dNR(d){this.a=d},
dOa:function dOa(d){this.a=d},
dNQ:function dNQ(d){this.a=d},
dNH:function dNH(){},
dNG:function dNG(d){this.a=d},
dNF:function dNF(d){this.a=d},
bbN:function bbN(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
acO(d,e,f,g,h){return new B.bpW(d,e,f,g,h)},
bpW:function bpW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f0I:function f0I(){},
f0J:function f0J(){},
f0K:function f0K(){},
f0L:function f0L(){},
f0M:function f0M(){},
f0N:function f0N(){},
f0O:function f0O(){},
Uo:function Uo(d){this.a=d},
bh1:function bh1(){this.d=$
this.c=this.a=null},
eqt:function eqt(d){this.a=d},
equ:function equ(d){this.a=d},
eqs:function eqs(d){this.a=d},
eqv:function eqv(){},
eqr:function eqr(d,e){this.a=d
this.b=e},
eqq:function eqq(d){this.a=d},
hsG(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.f0()
v.dX(w)
t.push(v.ae()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.f0()
v.dX(w+900)
u.push(2.2+v.ae())}return new B.bgP(new C.cn(null,x.A),new B.Np(A.cB),A.J,A.at,t,u,$,A.bv,0,C.a([],x.X),null,null)},
hsI(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hsH(d){return 1.5+1.6*Math.log(d.d/1000+1)},
fWp(d,e,f){return $.hth.ce(0,d+"|"+C.t(e)+"|"+f.l(),new B.eKh(d,e,f))},
U9:function U9(d){this.a=d},
bgP:function bgP(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
eiL:function eiL(d,e){this.a=d
this.b=e},
eiW:function eiW(d,e){this.a=d
this.b=e},
eiX:function eiX(d,e){this.a=d
this.b=e},
eiT:function eiT(d){this.a=d},
eiU:function eiU(d){this.a=d},
eiV:function eiV(d){this.a=d},
eiY:function eiY(d){this.a=d},
eiS:function eiS(d){this.a=d},
eiZ:function eiZ(d,e){this.a=d
this.b=e},
ej_:function ej_(d){this.a=d},
eiR:function eiR(d,e){this.a=d
this.b=e},
ej0:function ej0(d){this.a=d},
eiQ:function eiQ(d,e){this.a=d
this.b=e},
ej1:function ej1(d){this.a=d},
eiP:function eiP(d){this.a=d},
ej2:function ej2(d){this.a=d},
eiO:function eiO(d){this.a=d},
ej3:function ej3(d){this.a=d},
eiN:function eiN(d){this.a=d},
ej4:function ej4(d){this.a=d},
eiM:function eiM(d){this.a=d},
eiK:function eiK(){},
eiJ:function eiJ(){},
eiI:function eiI(d){this.a=d},
eiH:function eiH(d){this.a=d},
bo0:function bo0(d,e){this.b=d
this.a=e},
eKh:function eKh(d,e,f){this.a=d
this.b=e
this.c=f},
eKi:function eKi(){},
eKj:function eKj(){},
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
dOo:function dOo(){},
dOR:function dOR(){},
dOD:function dOD(d,e){this.a=d
this.b=e},
dOu:function dOu(d,e){this.a=d
this.b=e},
dOE:function dOE(d){this.a=d},
dOt:function dOt(d){this.a=d},
dOF:function dOF(d){this.a=d},
dOC:function dOC(d){this.a=d},
dOJ:function dOJ(d){this.a=d},
dOB:function dOB(d){this.a=d},
dOK:function dOK(d){this.a=d},
dOA:function dOA(d,e){this.a=d
this.b=e},
dOL:function dOL(d){this.a=d},
dOM:function dOM(d){this.a=d},
dOz:function dOz(d,e){this.a=d
this.b=e},
dON:function dON(d){this.a=d},
dOy:function dOy(d,e){this.a=d
this.b=e},
dOO:function dOO(d){this.a=d},
dOx:function dOx(d,e){this.a=d
this.b=e},
dOP:function dOP(d){this.a=d},
dOw:function dOw(d,e){this.a=d
this.b=e},
dOQ:function dOQ(d){this.a=d},
dOv:function dOv(d){this.a=d},
dOG:function dOG(d){this.a=d},
dOs:function dOs(d){this.a=d},
dOH:function dOH(d){this.a=d},
dOr:function dOr(d){this.a=d},
dOI:function dOI(d){this.a=d},
dOq:function dOq(d){this.a=d},
dOn:function dOn(d){this.a=d},
dOm:function dOm(){},
dOp:function dOp(d,e){this.a=d
this.b=e},
dOl:function dOl(d){this.a=d},
b72:function b72(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
U1:function U1(d){this.a=d},
bgM:function bgM(d,e,f,g,h,i,j){var _=this
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
ebF:function ebF(d,e){this.a=d
this.b=e},
ebG:function ebG(d,e){this.a=d
this.b=e},
ebE:function ebE(d,e){this.a=d
this.b=e},
ebH:function ebH(d,e){this.a=d
this.b=e},
ebD:function ebD(d,e){this.a=d
this.b=e},
bnz:function bnz(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eIr:function eIr(d){this.a=d},
aIA:function aIA(){},
bt7:function bt7(){},
aJ8:function aJ8(){},
btl:function btl(){},
aJb:function aJb(){},
btn:function btn(){},
hsE(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.f0()
v.dX(w)
v=v.ae()
u=new C.f0()
u.dX(w+500)
s.push(new C.v(v,u.ae()))}return new B.bfv(new C.cn(null,x.A),new B.Np(A.cB),t,A.at,s,$,A.bv,0,C.a([],x.X),null,null)},
NT:function NT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
So:function So(d){this.a=d},
bfv:function bfv(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
b6r:function b6r(d,e){this.b=d
this.a=e},
acs:function acs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Tg:function Tg(d){this.a=d},
bfU:function bfU(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
dMW:function dMW(d){this.a=d},
dMM:function dMM(d,e){this.a=d
this.b=e},
dMN:function dMN(d,e){this.a=d
this.b=e},
dML:function dML(d,e){this.a=d
this.b=e},
dMO:function dMO(d){this.a=d},
dMK:function dMK(d){this.a=d},
dMP:function dMP(d){this.a=d},
dMJ:function dMJ(d,e){this.a=d
this.b=e},
dMQ:function dMQ(d){this.a=d},
dMI:function dMI(d,e){this.a=d
this.b=e},
dMR:function dMR(d){this.a=d},
dMH:function dMH(d,e){this.a=d
this.b=e},
dMS:function dMS(d){this.a=d},
dMG:function dMG(d,e){this.a=d
this.b=e},
dMT:function dMT(d){this.a=d},
dMF:function dMF(d){this.a=d},
dMU:function dMU(d){this.a=d},
dME:function dME(d){this.a=d},
dMV:function dMV(d){this.a=d},
dMD:function dMD(d){this.a=d},
bbD:function bbD(d,e){this.b=d
this.a=e},
d2M:function d2M(d){this.a=d},
TY:function TY(d){this.a=d},
bgL:function bgL(d,e,f,g,h,i,j,k){var _=this
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
ebl:function ebl(d,e){this.a=d
this.b=e},
ebm:function ebm(d){this.a=d},
ebk:function ebk(d){this.a=d},
ebn:function ebn(d){this.a=d},
ebj:function ebj(d){this.a=d},
ebo:function ebo(d){this.a=d},
ebi:function ebi(d){this.a=d},
ebp:function ebp(d){this.a=d},
ebh:function ebh(d){this.a=d},
ebq:function ebq(d){this.a=d},
ebg:function ebg(d,e){this.a=d
this.b=e},
ebr:function ebr(d){this.a=d},
ebf:function ebf(d,e){this.a=d
this.b=e},
ebs:function ebs(d){this.a=d},
ebe:function ebe(d,e){this.a=d
this.b=e},
ebt:function ebt(d){this.a=d},
ebd:function ebd(d,e){this.a=d
this.b=e},
bmR:function bmR(d,e){this.b=d
this.a=e},
aI7:function aI7(){},
bt0:function bt0(){},
aIv:function aIv(){},
bt6:function bt6(){},
aJ7:function aJ7(){},
btk:function btk(){},
fVd(d,e,f){var w,v
C.fK(0,0,!1)
w=new C.l4(e,f,$,null)
v=w.bCi(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
ckr(d,e){var w=0,v=C.j(x.fA),u
var $async$ckr=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.fJW().wg(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$ckr,v)}},D,K,G,Q,V,Aa,Y,Ab,Ac,Z,Ad
J=c[1]
C=c[0]
A=c[2]
A_=c[111]
W=c[101]
F=c[88]
N=c[96]
A0=c[103]
X=c[108]
A1=c[109]
L=c[113]
H=c[92]
A2=c[86]
A3=c[102]
T=c[100]
A4=c[64]
U=c[73]
A5=c[81]
P=c[84]
A6=c[115]
A7=c[107]
R=c[87]
M=c[89]
S=c[110]
A8=c[68]
A9=c[106]
O=c[91]
I=c[104]
E=c[93]
B=a.updateHolder(c[17],B)
D=c[85]
K=c[99]
G=c[39]
Q=c[97]
V=c[95]
Aa=c[114]
Y=c[90]
Ab=c[98]
Ac=c[105]
Z=c[112]
Ad=c[94]
B.aho.prototype={}
B.Tw.prototype={
S(){var w=B.fzp()
return new B.bgf(w,C.S(x.N,x.i),new C.ap(A.as,$.au()),C.a([],x.X),C.a([],x.L),C.m9(0,null,null))}}
B.bgf.prototype={
p(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
this.ch.p()
this.a2()},
LR(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$LR=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aT.af$.d.c
if(s!=null)s.jd()
p.bI(0,A.c_)
t.n(new B.dVC(t))
t.a.toString
p=t.d
w=3
return C.b(B.bvl(B.hut(q,B.hFA(p),o,t.ay)),$async$LR)
case 3:s=e
r=s==null?null:J.iL(s)
if(r==null||r.length===0||A.a.a_(r,"{"))r=B.hGW(q,p,o)
if(t.c==null){w=1
break}t.n(new B.dVD(t,o,r))
$.aT.x1$.push(new B.dVE(t))
case 1:return C.h(u,v)}})
return C.i($async$LR,v)},
W9(d){return this.bSL(d)},
aRn(){return this.W9(null)},
bSL(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$W9=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aT.af$.d.c
if(s!=null)s.jd()
t.f.saS(0,o)
t.n(new B.dVP(t))
B.dL(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=B
w=3
return C.b(B.bvl(B.hAU(o)),$async$W9)
case 3:r=n.a=m.hOH(f)
p.b=""
if(r!=null&&!B.hFB(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=B.hGX(o)
q=C.ae(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new B.aho(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.n(new B.dVQ(p,t))
t.bXS(p.a)
case 1:return C.h(u,v)}})
return C.i($async$W9,v)},
bXS(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
A.d.a7(w)
w=++m.as
v=m.d
A.d.a7(v.a)
A.d.a7(v.b)
m.e.a7(0)
m.n(new B.dVL(m))
t=d.d
s=C.S(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new B.dVJ(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new B.dVM(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.K)(r),++u){p.$2(o,new B.dVN(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new B.dVO(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bE.j(0.1),g=C.m(16),f=C.H(A.bE.j(0.35),A.r,1)
if(m.x)j=C.B(C.a([D.erX,A.bc,C.D(C.d(m.Q,l,l,l,l,l,l,A.QL,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.eQp
else{w=C.D(C.d(k.a,l,l,l,l,l,l,A2.R5,l,l,l),1)
v=x.p
w=C.a([C.B(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.eCb,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.C(A.uf,C.d(u,l,l,l,l,l,l,D.eEK,l,l,l),l))
w.push(A.d5)
w.push(C.d(k.b,l,l,l,l,l,l,D.Rc,l,l,l))
u=k.e
if(u.length!==0){t=A.aL.j(0.12)
s=C.m(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.eGZ,l,l,l),A.h,l,l,new C.o(t,l,l,s,l,l,A.n),l,l,l,A.im,A.ch,l,l,l))}w.push(A.ar)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aA
w.push(new C.C(A.JM,new C.cC(A.aZ,A.e,A.j,A.F,l,A.p,l,0,C.a([new C.x(t,l,A.mX,l,l,l,l,l,l,l,l,l),A.bq,new C.bF(1,A.bp,new C.x(q,l,new C.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.K)(j),++p){o=j[p]
t=new C.b3(12,12)
s=new C.b3(12,12)
A.d.v(w,C.a([A.P,new C.bG(A.a7,l,l,C.p(l,new C.x(o.a,l,A.a42,l,l,l,l,l,l,l,l,l),A.h,l,l,new C.o(A.bE.j(0.3),l,l,new C.bv(t,t,t,t),l,l,A.n),l,l,l,l,A.fJ,l,l,l),l),A.av,C.p(l,new C.x(o.b,l,D.eM9,l,l,l,l,l,l,l,l,l),A.h,l,l,new C.o(A.c.j(0.07),l,l,new C.bv(s,s,s,s),l,l,A.n),l,l,l,l,A.bR,l,l,l)],v))}if(m.ax)w.push(D.dO7)
j=C.ch(C.u(w,A.F,l,A.e,A.j,0,A.p),A.q,m.ch,A.z,l,l,l,l,A.aj)}w=x.p
g=C.u(C.a([C.afD(C.p(l,j,A.h,l,new C.aX(0,1/0,0,i),new C.o(h,l,f,g,l,l,A.n),l,l,l,D.bfr,A.ei,l,l,1/0),A.b8,A.i1),C.D(B.fLJ(m.d,l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new B.dy("Ask about it",i,new B.dVT(m),l,A.bE,l),new B.dy("Invent something new",!i,new B.dVU(m),l,A.bE,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.cWn[p]
i.push(new B.dy(n,!1,new B.dVV(m,n),l,A.bE,l))}f.push(new B.eE(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.cHB[p]
i.push(new B.dy(r,!1,new B.dVW(m,r),l,A.bE,l))}f.push(new B.eE(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=C.D(C.aK(l,A.U,!1,l,!0,A.q,l,C.aL(),m.f,l,l,l,l,l,2,C.bm(l,new C.b2(4,C.m(16),A.V),l,A.eH,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kh,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.ag,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new B.dVX(m,k),l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,A.di,!0,A.a6,l,A.am,l,A.aJa,l,l),1)
h=m.at
v=h&&j?D.brJ:A.dP
j=h&&j?"Ask":"Invent"
f.push(C.B(C.a([i,A.aa,new B.fe(v,j,new B.dVY(m,k),A.bE,l)],w),A.m,l,A.e,A.j,0,l,l))
return B.jw(A.bE,A.fX,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.u(f,A.m,l,A.e,A.R,0,A.p))}}
B.EE.prototype={}
B.ua.prototype={}
B.TX.prototype={
S(){return new B.aBl(A.J,A.J,A.at,C.aZ(x.S),$,A.bv,0,C.a([],x.X),null,null)}}
B.aBl.prototype={
gaSv(){var w,v,u,t=this,s=D.Fp[t.cx],r=D.O8[t.cy],q=D.AG[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ef(w,w.r,C.a2(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aqS[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cI(p,0,new B.ea_())},
ga09(){return D.Fp[this.cx].d/this.gaSv()},
gaKa(){return 0.1*(D.Fp[this.cx].d/0.9)/D.O8[this.cy].d},
Z(){this.a0()
this.kM()
B.yw("rocket_lander").bw(new B.eaj(this),x.P)},
bY_(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cB.ae()*0.6
w.f=new C.v(0.15+A.cB.ae()*0.7,0.08)
w.r=new C.v((A.cB.ae()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
l4(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.n(new B.eak())
return}w=D.qt[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.v(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga09()
v=v.ao(0,new C.v(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaKa())}if(m.dy){t=m.r
v=v.aE(0,t.aM(0,t.gcj()*6*D.asv[m.d]))}t=m.r=m.r.ao(0,v.aM(0,d))
s=m.f=m.f.ao(0,t.aM(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new C.v(-t.a*0.4,t.b)
t=new C.v(A.k.D(r,0.02,0.98),m.f.b)
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
B.va("rocket_lander",C.E(["unlocked",t],x.N,x.z))
B.Ay("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga09()/(D.qt[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.aa(m.ga09()/(D.qt[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
B.dL(80,"",500,0,0.6,"noise")
C.fV()}}if(m.Q&&m.x>0&&A.o.H(A.k.bH(m.CW*20),2)===0)B.dL(90,"",70,0,0.12,"noise")
m.n(new B.eal())},
acT(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.eEh,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new B.dy(e[w].a,f.$1(w),new B.ea1(this,g,w),v,h,v))
return new C.C(A.fo,C.u(C.a([u,A.d5,C.c8(A.bH,s,A.bx,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bxD(d){var w,v,u,t,s=this,r=null,q=s.ga09()/(D.qt[s.d].b/9.81*0.28)>=1,p=A.k.U(1/s.gaKa()),o=D.asv[s.d],n=C.m(24),m=d.c,l=C.H(m.j(0.6),A.r,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.av,C.d(d.d+" Gravity here: "+C.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,D.aKg,r,r,r),A.T,s.acT("ENGINE: "+D.Fp[s.cx].b,D.Fp,new B.e9R(s),new B.e9S(s),A.cX),s.acT("FUEL TANK: "+D.O8[s.cy].b,D.O8,new B.e9T(s),new B.e9U(s),A.bl),s.acT("LANDING GEAR: "+D.AG[s.db].b,D.AG,new B.e9V(s),new B.e9W(s),A.b_),s.acT("EXTRAS (tap to add)",D.aqS,new B.e9X(s),new B.e9Y(s),A.bE)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.f65)
o=(q?A.bl:A.cH).j(0.14)
w=C.m(12)
v=A.k.aa(s.gaSv(),2)
u=A.k.aa(s.ga09()/(D.qt[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.U(D.AG[s.db].d*100)+".",r,r,r,r,r,r,D.eEQ,r,r,r),A.h,r,r,new C.o(o,r,r,w,r,r,A.n),r,r,r,A.im,A.bR,r,r,r))
m.push(A.T)
m.push(new C.bG(A.A,r,r,new B.fe(A.mI,"Launch",new B.e9Z(s),A.bl,r),r))
return C.at(C.p(r,C.ch(C.u(m,A.F,r,A.e,A.R,0,A.p),A.q,r,A.z,r,A.c2,r,r,A.aj),A.h,r,A.ld,new C.o(D.b7k,r,l,n,r,r,A.n),r,r,r,A.bR,r,r,r,r),r,r,r)},
aTB(d,e,f,g){var w=null,v=f?A.cX:A.c.j(0.1),u=C.m(18),t=C.H(A.bf,A.r,1)
return C.ph(A.jF,C.p(w,C.V(d,A.c,w,w,w,30),A.h,w,w,new C.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new B.e9O(e),new B.e9P(e),w,w,w,w,new B.e9Q(e))},
aTA(d,e,f){return this.aTB(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cj(new B.eac(s,D.qt[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.qt[w].a:"\ud83d\udd12"
o.push(new B.dy(v,s.d===w,new B.ead(s,w),r,D.qt[w].c,r))}v=C.a([s.aTA(D.brQ,new B.eae(s),s.y),A.bc,s.aTB(A.uB,new B.eaf(s),s.Q,130),A.bc,s.aTA(A.Y2,new B.eag(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.b_:A.c.j(0.1)
t=C.m(18)
A.d.v(v,C.a([A.bc,C.aH(r,C.p(r,D.bvS,A.h,r,r,new C.o(u,r,C.H(A.bf,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.eah(s),r,r,r,r,r,r,!1,A.ae)],p))}return B.jw(A.cX,A.fX,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.u(C.a([new B.eE(o,"WORLD",r),C.B(v,A.m,r,A.b6,A.j,0,r,r)],p),A.m,r,A.e,A.R,0,A.p))}}
B.bdi.prototype={
a6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.qt[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.a_(),d=C.N(),a0=j.c,a1=C.aq(D.b9B,a0,0.25)
a1.toString
d.sar(new C.a7(A.b1,A.b5,A.w,C.a([D.b2s,a1],x.O),l,l).az(0,new C.ac(0,0,g,f)))
a2.bd(new C.ac(0,0,g,f),d)
w=new C.f0()
w.dX(5)
for(g=a2.a,v=0;v<70;++v){f=w.ae()
d=w.ae()
a1=w.ae()
u=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
u.r=A.c.j(0.2+w.ae()*0.5).gq(0)
t=u.L()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=C.a([],f)
r=new C.aR(e.r,A.aq,l,l,d)
r.E(new C.b7(0,s+14))
q=new C.f0()
q.dX(2)
for(p=0;p<=i;p+=18){e=new C.ao(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.ae()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bC(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.E(new C.ao(i,h))
r.E(new C.ao(0,h))
r.E(new C.bE())
e=$.a_()
d=C.N()
d.r=C.aq(a0,A.x,0.6).gq(0)
a2.aQ(r,d)
o=C.d9(new C.v(k.ax*i,s+10),8,k.ay*i)
d=C.bN(o,A.j7)
a0=C.N()
a0.r=A.bn.gq(0)
a2.b0(d,a0)
a0=C.bN(o.cD(2),A.tx)
d=C.N()
d.b=A.ad
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gq(0)
a2.b0(a0,d)
if(k.as==="ready")return
d=k.f
J.bH(g.save())
g.translate(d.a*i,d.b*h)
a2.kG(0,k.w)
i=k.as
if(i==="crashed"){k=C.N()
k.r=A.cX.j(0.6).gq(0)
k.z=R.FU
a2.ak(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new C.aR(i,A.aq,l,l,C.a([],f))
n.E(new C.b7(-8,18))
n.E(new C.ao(0,44+Math.sin(k.CW*40)*8))
n.E(new C.ao(8,18))
n.E(new C.bE())
k=C.N()
k.r=A.aL.gq(0)
a2.aQ(n,k)
i=new C.aR(i,A.aq,l,l,C.a([],f))
i.E(new C.b7(-4,18))
i.E(new C.ao(0,32))
i.E(new C.ao(4,18))
i.E(new C.bE())
k=C.N()
k.r=A.c.gq(0)
a2.aQ(i,k)}k=e.r
m=new C.aR(k,A.aq,l,l,C.a([],f))
m.E(new C.b7(0,-26))
m.E(new C.d_(14,-10,11,18))
m.E(new C.ao(-11,18))
m.E(new C.d_(-14,-10,0,-26))
m.E(new C.bE())
i=C.N()
i.sar(D.bHa.az(0,D.elw))
a2.aQ(m,i)
i=C.N()
i.r=A.b_.gq(0)
a2.ak(D.v4,5,i)
i=new C.aR(k,A.aq,l,l,C.a([],f))
i.E(new C.b7(-11,6))
i.E(new C.ao(-20,20))
i.E(new C.ao(-11,18))
i.E(new C.bE())
h=C.N()
h.r=A.aF.gq(0)
a2.aQ(i,h)
f=new C.aR(k,A.aq,l,l,C.a([],f))
f.E(new C.b7(11,6))
f.E(new C.ao(20,20))
f.E(new C.ao(11,18))
f.E(new C.bE())
k=C.N()
k.r=A.aF.gq(0)
a2.aQ(f,k)
g.restore()},
aq(d){return!0}}
B.aJ5.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.btj.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bq5()}}
B.aOS.prototype={}
B.a11.prototype={}
B.b6u.prototype={}
B.Sp.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.eN(["skin"],x.N),o=new Float32Array(0)
return new B.azN(w,v,u,t,s,r,q,new C.cn(null,x.A),p,D.Ih,D.Ih,A.at,A.cB,o,new Int32Array(0),$,A.bv,0,C.a([],x.X),null,null)}}
B.azN.prototype={
Z(){var w=this
w.a0()
w.kM()
w.as=new B.bWm(w.gc4s())
new B.dxo(w).$0()
return},
p(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a9(0)
v.d=null}this.bp7()},
c4t(d){var w,v=this
if(v.c==null)return
w=J.a6(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eM(0,C.E(["t","init","data",$.fVs],x.N,x.z))
v.at=!0
v.ax=""
v.av6()
break
case"pick":v.n(new B.dx0(v,d))
break
case"shot":v.aeL(C.t(w.h(d,"data")))
break
case"error":$.al.$1("[body viewer] "+C.t(w.h(d,"text")))
break}},
av6(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aoW[q.CW]
v=new B.dx1()
u=q.ay
u=C.z(u,C.a2(u).k("ck.E"))
A.d.fz(u)
t=x.N
s=C.E(["layers",u,"skinMode",q.ch,"tone","#"+C.t(v.$1(w.b))+C.t(v.$1(w.c))+C.t(v.$1(w.d)),"sel",q.cx,"bpm",A.k.U(q.k3),"spin",q.fy],t,x.cK)
r=A.Q.al(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.S(t,x.z)
u.m(0,"t","state")
u.v(0,s)
v.eM(0,u)}},
aeL(d){return this.ckE(d)},
ckE(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aeL=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cw.aF(A.a.aW(d,A.a.cP(d,",")+1))
w=6
return C.b(B.ckr(C.a([B.fVd(r,"image/png","body.png")],x.D),"Made in NGMY Core Protocol"),$async$aeL)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.G(x.gV).f.P(D.aIt)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$aeL,v)},
auA(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
l4(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bH(w)!==A.k.bH(v.ok)){B.a67("kick",0.4)
v.a2G(170,new B.dxp())}v.ok=w
return},
aeA(d){var w,v,u,t,s=this
s.n(new B.dx2(s,d))
if(d==null){s.fx=D.Ih
s.dy=1
w=s.as
if(w!=null)w.eM(0,C.E(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.U(w).k("a4<1>")
u=C.z(new C.a4(w,new B.dx3(d),v),v.k("G.E"))
t=A.d.gK(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.J(0,t)
if(s.ch===2)s.ch=1}s.av6()
w=s.as
if(w!=null)w.eM(0,C.E(["t","focus","group",d],x.N,x.z))
s.go=0
s.cn0(t,d)
return},
cn0(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){B.a67("kick",0.8)
this.a2G(260,new B.dx4())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")B.dL(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a2G(w*70,new B.dx5(this))
else if(A.a.t(e,"intestine")||e==="Stomach")B.dL(110,"",360,0.7,0.3,"saw")
else B.vd("organic",6+A.o.H(e.length,8),200,0.6)
break
case"bone":B.dL(210+e.length*4,"",80,0.6,0.55,"tri")
B.dL(2400,"",20,0,0.3,v)
break
case"muscle":B.dL(70,"",150,1,0.6,"sine")
break
case"vessel":B.dL(300,"",380,0.4,0.22,v)
B.a67("kick",0.3)
break
default:B.vd("organic",2+A.o.H(e.length,6),200,0.4)}},
crl(d){this.n(new B.dx7(this,d))},
aTT(){var w,v,u,t,s,r,q,p=this,o=C.aZ(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(p.auA(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.J(0,s.a)}q=C.z(o,o.$ti.k("ck.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aB(w)]
p.p4=""},
bOq(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.n(new B.dwY(u,w,d))
v=x.t
B.Ay("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a2G(1100,new B.dwZ(u))
return}if(d==null){if(u.cx!=null)u.aeA(null)
return}u.aeA(d)},
bS4(d,e){var w,v=this,u=null,t=C.m(18),s=C.H(A.c3.j(0.5),A.r,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.eAQ,u,u,u)}else if(d==null||e==null)w=D.eO5
else{w=x.p
w=C.B(C.a([C.D(C.u(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.j8,u,u,u),A.d5,C.d(e.b,u,u,u,u,u,u,D.Rc,u,u,u)],w),A.F,u,A.e,A.R,0,A.p),1),C.aF(u,u,u,u,D.bye,u,u,u,new B.dx_(v),u,u,u,u,"Back to the whole body",A.c8)],w),A.F,u,A.e,A.j,0,u,u)}return C.p(u,w,A.h,u,u,new C.o(D.Th,u,s,t,u,u,A.n),u,u,u,u,F.acK,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.d5d.h(0,g)
i.av6()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.cQb
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(i.auA(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aF(h,h,h,h,D.m6,h,h,h,new B.dxe(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bF:C.CC(h,A.pq,q)}else q=A.kd
q=C.u(C.a([C.D(q,1),new C.C(D.bfs,i.bS4(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.cIV[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new B.dy(l,n,new B.dxf(i,o),o.c,A.c3,h))}p=C.a([new B.eE(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.K)(w),++s){k=w[s]
n.push(new B.dy(k,k===i.cx,new B.dxg(i,k),h,A.aL,h))}p.push(new B.eE(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(B.hp(A.cH,""+A.k.U(n)+" beats/min","Heart rate",180,40,new B.dxh(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new B.DW(D.aoW[j],i.CW===j,new B.dxi(i,j),!1,h))
p.push(new B.eE(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new B.dy("Spin",n,new B.dxj(i),D.afN,A.b_,h),new B.fe(A.jI,"Reset view",new B.dxk(i),A.c,h),new B.dy(l,m,new B.dxl(i),A.EC,A.aL,h)],v)
if(t.t(0,"organ"))v.push(new B.dy("Heartbeat sound",i.k4,new B.dxm(i),A.nu,A.cH,h))
p.push(new B.eE(v,h,h))
return B.jw(A.c3,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.u(p,A.m,h,A.e,A.R,0,A.p))}}
B.aI8.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.aI9.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bp6()}}
B.bWm.prototype={
k7(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aJ(e,"</script","<\\/script")
v=$.h0m
$.h0m=v+1
u="ngmy-body-viewer-"+v
$.xK()
$.pJ().p8(u,new B.bWn(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fB(v,"message",new B.bWo(t),!1,x.gA)
t.b=u},
eM(d,e){var w,v
try{w=this.c
if(w!=null){w=C.bvi(w.contentWindow)
if(w!=null)J.fyD(w,e,"*")}}catch(v){}}}
B.xd.prototype={}
B.B8.prototype={}
B.mY.prototype={}
B.b7c.prototype={}
B.Su.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new B.azQ(C.S(w,x.a2),C.a([],x.cB),C.S(w,v),C.S(w,v),C.S(w,u),A.at,A.J,A.J,C.aZ(u),$,A.bv,0,C.a([],x.X),null,null)}}
B.azQ.prototype={
Z(){var w=this
w.a0()
w.kM()
w.a9N()
$.aT.x1$.push(new B.dzz(w))},
a9N(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$a9N=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ax(),$async$a9N)
case 6:q=e.rn("ngmy_circuit_passed_v1")
r=q==null?A.U:q
if(s.c!=null)s.n(new B.dzd(s,r))
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
aa6(d){return this.bVG(d)},
bVG(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$aa6=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.J(0,d)
u=3
w=6
return C.b(C.ax(),$async$aa6)
case 6:r=f
q=s.cx
p=C.a2(q).k("jC<ck.E,n>")
q=C.z(new C.jC(q,new B.dzg(),p),p.k("G.E"))
r.ap("StringList","ngmy_circuit_passed_v1",q)
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
atn(d,e,f,g){var w="c"+this.y++,v=new B.B8(w,e,f,g)
this.d.m(0,w,v)
return v},
m2(d,e,f){return this.atn(0,e,f,0)},
a99(d,e){var w
if(D.xO.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ao(0,new C.v(-36,w))},
rN(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aO3(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fE$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.dv(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ed(m,D.cu4[A.o.H(q.d,4)])&1)===0
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
bHn(){return this.aO3(null)},
l4(d){var w,v,u,t,s,r,q,p,o,n=this
n.bHn()
if(!n.ax)return
for(w=n.d,w=new C.bg(w,C.a2(w).k("bg<2>")).gag(0),v=new C.hK(w,new B.dzA()),u=n.f,t=n.w,s=0;v.C();){r=w.gT(0).a
if(u.h(0,r)===!0){q=n.fE$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.m(0,r,n.fE$)
o=s+1
B.dL(520+90*A.o.H(s,4),"",200,0,0.25,"square")
s=o}}},
ato(d){var w=this
w.d.a7(0)
A.d.a7(w.e)
w.f.a7(0)
w.r.a7(0)
w.cy=null},
lv(d,e){var w=this.x
return new C.v(d*w.a,e*w.b)},
apP(d){var w=this
if(w.x.A(0,A.at)){$.aT.x1$.push(new B.dzb(w,d))
return}w.n(new B.dzc(w,d))},
cng(d){this.n(new B.dzh(this,d,$.bA0()[d]))},
bZs(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bA0()[a0]
v=d.d
u=C.a2(v).k("bg<2>")
t=u.k("a4<G.E>")
s=t.k("G.E")
r=C.z(new C.a4(new C.bg(v,u),new B.dz6(),t),s)
A.d.aY(r,new B.dz7())
q=C.z(new C.a4(new C.bg(v,u),new B.dz8(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.n(new B.dz9(d,w))
return}u=d.r
p=C.dS(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=A.o.dq(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((A.o.fP(k,i)&1)===1)
for(i=0;i<v;++i)u.m(0,r[i].a,j[i])
d.aO3(0)
h=m.h(0,A.d.gK(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.jv(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aG(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a7(0)
u.v(0,p)
d.n(new B.dza(d,o,a0))},
au6(d){var w,v,u,t,s=this.d,r=C.a2(s).k("bg<2>")
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
c6J(d){var w,v,u,t,s,r=this.d,q=C.a2(r).k("bg<2>")
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
bRY(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.dv(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.xO.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.a99(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.A(p,o)
s=l}}}return t},
bGl(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
bZu(d){var w,v,u,t=this,s=t.au6(d)
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
B.dL(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.n(new B.dzi())
return}u=t.bGl(d)
if(u!=null)t.n(new B.dzj(t,u))
else t.n(new B.dzk(t))},
asm(d){return this.bUL(d)},
bUL(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$asm=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.au6(d)
if(s==null){w=1
break}C.j7()
t.n(new B.dzf(t,s))
case 1:return C.h(u,v)}})
return C.i($async$asm,v)},
btF(d){if(this.x.A(0,A.at))return
this.n(new B.dz5(this,d,A.cB))
C.eG()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bA0()[g]
g=x.p
v=C.a([C.aF(h,h,h,h,C.V(i.ax?A.nu:M.qo,A.al,h,h,h,21),h,h,h,new B.dzt(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.m(16)
s=A.cF.j(0.14)
r=C.H(A.cF.j(0.5),A.r,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.eA4,h,h,h),C.d(w.b,h,h,h,h,h,h,D.eHR,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.C(A.nn,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?A.bl:A.fg,h,h,h,h,h,h,h,h,12,h,h,A.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.B(C.a([C.D(C.u(q,A.F,h,A.e,A.j,0,A.p),1),C.bK(D.eYh,i.gbZr(),C.bk(A.cF,h,h,h,h,h,h,h,h,h,h,A.c8))],g),A.m,h,A.e,A.j,0,h,h),A.h,h,h,new C.o(s,h,r,t,h,h,A.n),h,h,h,U.JU,D.bg5,h,h,1/0))}u.push(C.D(C.cj(new B.dzu(i)),1))
if(f!=null){t=C.m(14)
s=A.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.xO.h(0,r).a+": "+D.xO.h(0,r).e,h,h,h,h,h,h,A.vk,h,h,h),A.h,h,h,new C.o(s,h,h,t,h,h,A.n),h,h,h,Y.acs,A.bR,h,h,1/0))}u=C.u(u,A.m,h,A.e,A.j,0,A.p)
t=C.a([],g)
for(s=D.xO.gdH(D.xO),s=s.gag(s);s.C();){r=s.gT(s)
q=new C.b3(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.ay(o.j(0.5),1,A.r,-1)
t.push(C.aH(h,C.p(h,C.u(C.a([C.V(p.b,o,h,h,h,20),A.bA,new C.x(p.a,h,D.aKi,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.R,0,A.p),A.h,h,h,new C.o(n,h,new C.c2(m,m,m,m),new C.bv(q,q,q,q),h,h,A.n),h,h,h,A.hi,O.V7,h,h,58),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.dzv(i,r),h,h,h,h,h,h,!1,A.ae))}s=C.a([],g)
for(l=0;l<4;++l){k=D.cTT[l]
s.push(new B.fe(A.Lo,k.b,new B.dzw(i,k),A.cF,h))}s.push(new B.fe(D.wX,"Clear",new B.dzx(i),A.cH,h))
r=C.a([],g)
for(j=0;q=$.bA0(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.ej:A.lt
o=i.ay
n=i.cx.t(0,j)?A.bl:A.cJ
r.push(new B.dy(q.a,o===j,new B.dzy(i,j),p,n,h))}return B.jw(A.cF,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.u(C.a([new B.eE(t,"PARTS",h),new B.eE(s,"TRY",h),new B.eE(r,"TASKS",h)],g),A.m,h,A.e,A.R,0,A.p))}}
B.b7u.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.a_()
w=C.N()
w.r=D.a84.gq(0)
a7.bd(new C.ac(0,0,0+a5,0+a6),w)
v=C.N()
v.r=A.c.j(0.05).gq(0)
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
l=$.a_()
e=C.a([],p)
d=new C.aR(l.r,A.aq,a4,a4,e)
e.push(new C.b7(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.p6(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
l.b=A.ad
l.c=9
l.r=A.cJ.j(0.28).gq(0)
l.z=H.om
s=l.L()
l=d.gbM().a.snapshot()
w.drawPath((d.e=new C.cG(l)).a,s)
s.delete()}l=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
l.b=A.ad
l.c=3.2
l.d=A.bV
l.r=(f?A.f_:A.bw).gq(0)
s=l.L()
l=d.e
w.drawPath((l==null?d.e=new C.cG(d.gbM().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ao(0,D.Gp)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new C.aR($.a_().r,A.aq,a4,a4,C.a([],p))
w=a3.b
p.E(new C.b7(a6,w))
r=g.b
p.E(new C.p6(a6+a0,w,a5-a0,r,a5,r))
r=C.N()
r.b=A.ad
r.c=3
r.r=A.al.gq(0)
a7.aQ(p,r)}for(a5=new C.dv(o,o.r,o.e);a5.C();)this.bZt(a7,a5.d)},
bZt(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.xO.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.d9(a0.c,64,64)
s=C.bN(t,A.kL)
r=w.cy===v
q=s.eH(A.cs)
$.a_()
p=C.N()
p.r=A.x.j(0.55).gq(0)
p.z=A.lA
d.b0(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.N()
p.sar(new C.bR(A.A,0.5,A.w,g,0,C.a([e.c.j(0.6),A.K],x.O),g,g).az(0,C.bV(a0.c,52)))
d.ak(q,52,p)}q=s.eH(A.cA)
p=C.N()
o=e.c
p.r=C.aq(o,A.x,0.65).gq(0)
d.b0(q,p)
n=u?0.35:0
q=C.N()
p=C.aq(o,A.c,0.1+n)
p.toString
m=C.aq(o,A.x,u?0.2:0.45)
m.toString
q.sar(new C.a7(A.b1,A.b5,A.w,C.a([p,m],x.O),g,g).az(0,t))
d.b0(s,q)
q=C.N()
q.b=A.ad
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gq(0)
d.b0(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?D.ahc:D.bsd}else l=e.b
k=B.fDV(C.jv(l.a),30,A.c,l.b,g,A.I)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a6(d,v.aE(0,new C.v(p/2,q.gbh(q)/2)))
j=B.fDV(e.a,10.5,A.c,g,g,A.I)
j.a6(d,a0.c.ao(0,new C.v(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=B.fDV(f,9,u?A.f_:A.c1,g,g,A.u)
i.a6(d,a0.c.ao(0,new C.v(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aUd(d,w.a99(a0,h),o)
this.aUd(d,a0.c.ao(0,D.Gp),o)},
aUd(d,e,f){var w
$.a_()
w=C.N()
w.r=D.a84.gq(0)
d.ak(e,8.5,w)
w=C.N()
w.b=A.ad
w.c=2.2
w.r=f.gq(0)
d.ak(e,8.5,w)
w=C.N()
w.r=A.c.gq(0)
d.ak(e,3.2,w)},
aq(d){return!0}}
B.aIe.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.bt3.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpc()}}
B.LD.prototype={
S(){return new B.aA6(C.m9(0,null,null))}}
B.IM.prototype={
a3(){return"_UnfoldStyle."+this.b}}
B.zr.prototype={}
B.aA6.prototype={
bZy(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gco(0).at
v.toString
w.f=v}w.n(new B.dEM(w,e))},
bTJ(){var w=this
w.e.p()
w.e=C.m9(w.f,null,null)
w.n(new B.dEL(w))},
p(){this.e.p()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.nX(t,C.cd(v,A.bW,t?new B.bn9(w.e,w.gbZx(w),new B.dEN(d),v):new B.aEg(u,new C.cx(u.b,x.gj)),v,!1,!1,v,!1),new B.dEO(w,u),x.K)}}
B.boH.prototype={}
B.bn9.prototype={
aUe(d,e){var w=null
return new C.C(F.VB,C.u(C.a([C.d(d,w,w,w,w,w,w,D.eAA,w,w,w),A.bA,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.B(C.a([C.aF(v,v,v,v,E.qq,v,v,v,w.e,v,v,v,v,v,v),A.tB,D.blN],u),A.m,v,A.e,A.j,0,v,v),s=w.aUe("STUDIOS","Play, make things, and keep what you make")
$.bA2()
return C.bq(!0,C.u(C.a([new C.C(D.bkX,t,v),C.D(C.uP(0,v,A.q,w.c,A.z,v,v,v,v,v,!1,v,A.aj,!1,C.a([new C.lN(s,v),new C.nq(A.iH,C.Nb(new C.o_(new B.eHZ(d),23,!0,!0,!0,0,C.rh(),v),D.aIi),v),new C.lN(w.aUe("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nq(D.bgb,C.Nb(new C.o_(new B.eI_(w),6,!0,!0,!0,0,C.rh(),v),D.aIi),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0)}}
B.acx.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.m(20),n=C.m(20),m=C.aq(D.rr,p,0.3)
m.toString
w=x.O
m=C.a([m,D.aaf],w)
v=C.H(p.j(0.6),A.r,1.2)
u=x.V
t=C.a([new C.aa(-4,A.G,p.j(0.22),A.J,14)],u)
s=C.aq(p,A.x,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.aa(0,A.G,p.j(0.5),A.J,12)],u)
return C.aD(!1,A.Y,!0,r,C.aI(!1,o,!0,C.eq(C.u(C.a([C.p(r,C.V(q.c,A.c,r,r,r,24),A.h,r,r,new C.o(r,r,r,r,u,new C.a7(A.ax,A.aC,A.w,w,r,r),A.a5),r,44,r,r,r,r,r,44),A.P,C.d(q.a,r,2,A.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.d5,C.d(q.b,r,2,A.a2,r,r,r,C.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.b6,A.j,0,A.p),r,new C.o(r,r,v,n,t,new C.a7(A.ax,A.aC,A.w,m,r,r),A.n),r,A.DU,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.h,A.K,0,r,r,r,r,r,A.ac)}}
B.abs.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.m(20),g=C.m(20),f=C.aq(D.rr,A.d.gK(i),0.24)
f.toString
w=x.O
f=C.a([f,D.aaf],w)
v=C.H(A.d.gK(i).j(0.35),A.r,1)
u=x.V
t=C.a([new C.aa(0,A.G,A.x.j(0.4),A.cs,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.b3(6,6)
m=C.a([A.d.gK(i),A.d.gai(i)],w)
l=C.a([new C.aa(0,A.G,A.x.j(0.45),F.aBl,0)],u)
r.push(C.p(k,C.V(q[p],A.c,k,k,k,11),A.h,k,k,new C.o(k,k,k,new C.bv(n,n,n,n),l,new C.a7(A.a3,A.a7,A.w,m,k,k),A.n),k,17,k,new C.M(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.u(r,A.m,k,A.e,A.R,0,A.p)
u=C.aq(A.d.gK(i),A.d.gai(i),0.4)
u.toString
return C.aD(!1,A.Y,!0,k,C.aI(!1,h,!0,C.eq(C.u(C.a([new C.a3(58,k,w,k),A.T,C.d(j.b,k,2,A.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.av,C.V(Ad.EL,A.d.gK(i),k,k,k,18)],s),A.m,k,A.b6,A.j,0,A.p),k,new C.o(k,k,v,g,t,new C.a7(A.ax,A.aC,A.w,f,k,k),A.n),k,A.DU,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.h,A.K,0,k,k,k,k,k,A.ac)}}
B.Oi.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(A.d.gai(i),A.x,0.62)
h.toString
w=k.c
v=k.d
h=C.an(-8,C.bT(j,new C.o(h,j,j,C.m(22),j,j,A.n),A.ba),j,j,2,2,8,j)
u=C.m(22)
t=k.y
s=x.V
r=C.a([new C.aa(0,A.G,A.x.j(0.55),A.Ps,26),new C.aa(-6,A.G,A.d.gK(i).j(0.1+0.4*t),A.J,30)],s)
q=C.m(22)
p=C.aq(A.d.gK(i),A.c,0.14)
p.toString
o=A.d.gK(i)
n=A.d.gai(i)
i=C.aq(A.d.gai(i),A.x,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bZ(0,C.bT(j,new C.o(j,j,j,j,j,new C.a7(A.ax,A.aC,A.w,C.a([p,o,n,i],m),D.cYt,j),A.n),A.ba),0,0,0),C.an(j,C.bT(j,new C.o(j,j,j,j,j,new C.a7(A.b1,A.b5,A.w,C.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.ba),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bZ(0,C.b1(j,j,j,new B.bo7(i,j),A.at),0,0,0))
i=A.c.j(0.16)
p=C.H(A.c.j(0.5),A.r,1.4)
s=C.a([new C.aa(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=C.p(j,C.V(k.f,A.c,j,j,j,28),A.h,j,j,new C.o(i,j,p,j,s,j,A.a5),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.eC2,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,C.a([A.av,C.d(i,j,1,A.a2,j,j,j,C.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a4,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.H5)
p.push(C.p(j,j,A.h,j,j,new C.o(A.c.j(0.28),j,j,C.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.C(A.fz,C.B(C.a([s,A.ep,C.D(C.u(p,A.F,j,A.e,A.R,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bZ(0,C.e1(C.ec(j,A.x.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.m(22)
m.push(C.bZ(0,C.e1(C.bT(j,new C.o(j,j,C.H(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.ba),!0,j),0,0,0))
return new C.a3(w,v,new C.am(A.W,j,A.a9,A.h,C.a([h,C.bZ(0,C.bT(C.bu(q,new C.am(A.W,j,A.a9,A.q,m,j),A.ap),new C.o(j,j,j,u,r,j,A.n),A.ba),0,0,0)],l),j),j)}}
B.bo7.prototype={
a6(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.ac(r,-10,s,w)
u=d.a
J.bH(u.save())
u.translate(v.gbO().a,v.gbO().b)
d.kG(0,0.35)
t=C.d9(A.J,(w- -10)*1.6,s-r)
$.a_()
s=C.N()
s.sar(new C.a7(A.a3,A.a7,A.w,C.a([A.K,A.c.j(0.3),A.K],x.O),null,null).az(0,t))
d.bd(t,s)
u.restore()},
aq(d){return d.b!==this.b}}
B.bnD.prototype={
B(d){var w=null,v=C.m(22),u=C.a([D.b5L,D.a9D],x.O),t=this.e,s=C.H(A.d.gK(t).j(0.4),A.r,1.2),r=C.a([new C.aa(0,A.G,A.x.j(0.5),A.jN,24)],x.V),q=C.m(22),p=A.d.gK(t)
return new C.a3(this.c,this.d,C.bT(C.bu(q,C.b1(C.at(C.V(A.j3,A.d.gK(t).j(0.7),w,w,w,34),w,w,w),w,w,new B.b6b(p,w),A.at),A.ap),new C.o(w,w,s,v,r,new C.a7(A.ax,A.aC,A.w,u,w,w),A.n),A.ba),w)}}
B.b6b.prototype={
a6(d,e){var w,v,u,t,s,r,q,p
$.a_()
w=C.N()
v=this.b
w.r=v.j(0.09).gq(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.L()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.L()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.ef(A.J)
$.a_()
t=C.N()
t.b=A.ad
t.c=1.4
t.r=v.j(0.35).gq(0)
d.ak(u,30,t)},
aq(d){return!1}}
B.aEg.prototype={
S(){return new B.aEh(new C.cn(null,x.A),null,null)}}
B.aEh.prototype={
gt6(){var w,v=this,u=v.d
if(u===$){w=C.bi(null,D.bdA,null,1,null,v)
w.cF(0)
v.d!==$&&C.bJ()
v.d=w
u=w}return u},
gXn(){var w,v=this,u=v.e
if(u===$){w=C.bi(null,A.fI,null,1,null,v)
w.f1(0,!0)
v.e!==$&&C.bJ()
v.e=w
u=w}return u},
gatp(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gbZv(){var w=this.w
if(w===$){w=C.z(this.a.c.d,x.G)
this.w=w}return w},
gaR6(){var w=this.x
if(w===$){w=C.z(this.a.c.e,x.Z)
this.x=w}return w},
gaRL(){var w=this.y
if(w===$){w=C.z(this.a.c.f,x.N)
this.y=w}return w},
gb1u(){var w=this.z
if(w===$){w=C.z(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a0()
var w=this.gt6()
w.d5()
w.dM$.J(0,this.gcn1())},
cn2(){var w,v,u,t,s,r,q,p=this,o=p.gt6().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gatp().a){case 0:w=D.mM
break
case 1:w=D.t7
break
case 2:w=D.ZR
break
case 3:w=D.mM
break
case 4:w=D.cNr
break
case 5:w=D.t7
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a5S)r=0.09
else r=s===D.a5T?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){B.dL(260+90*v,"",260,1.6,0.18,"tri")
u=D.bJB[v]
B.l1("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
B.Ay("bell",D.bSk,1400,0.35)}}p.ax=o},
p(){this.gt6().p()
this.gXn().p()
this.br_()},
adk(){var w=this
w.gt6().cL9(0,C.dB(0,0,0,A.k.U(11e3/w.Q),0,0))
w.n(new B.eHF(w))},
c8I(){this.gt6().bU(0)
this.n(new B.eHE(this))},
ab0(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$ab0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaRL(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){q=t[r]
l.push(new C.ap(new C.bc(q,A.b0,A.aM),$.au()))}m=C.a([],m)
for(t=u.gb1u(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){p=t[r]
m.push(new C.ap(new C.bc(p,A.b0,A.aM),$.au()))}o=C.z(u.gaR6(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.c1(D.rr,null,new B.eHD(u,l,m,o),t,!0,!0,!0,A.l4,!1,!1,x.H),$async$ab0)
case 2:l=C.z(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.R$=$.au()
n.O$=0}return C.h(null,v)}})
return C.i($async$ab0,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gatp(),f=i.a.c,e=f.b,d=i.gbZv(),a0=new B.zr(g,e,f.c,d,i.gaR6(),i.gaRL(),i.gb1u())
f=C.aq(A.d.gK(d),A.d.gai(d),0.4)
f.toString
g=x.p
w=C.a([C.aF(h,h,h,h,C.V(i.at?A.nu:M.qo,A.al,h,h,h,21),h,h,h,new B.eHN(i),h,h,h,h,"Sound",h),C.aF(h,h,h,h,D.bBB,h,h,h,i.gbZw(),h,h,h,h,"Edit words and pictures",h),C.aF(h,h,h,h,D.m6,h,h,h,new B.eHO(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c4(i.gXn(),new B.eHP(i,a0),h),C.cj(new B.eHQ(i,a0))],g)
u=i.as
t=u?i.gc8H():i.gcaZ()
u=u?D.bru:A.rY
s=C.aq(A.d.gK(d),A.d.gai(d),0.4)
s.toString
t=C.B(C.a([C.aF(h,h,h,h,C.V(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.c8),C.D(C.c4(i.gt6(),new B.eHR(i,a1,a0),h),1),C.aF(h,h,h,h,D.by4,h,h,h,new B.eHS(i),h,h,h,h,"Replay",A.c8)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.aa(s,1)
r=C.aq(A.d.gK(d),A.d.gai(d),0.4)
r.toString
s=B.hp(r,u+"x","Speed",2.5,0.4,new B.eHT(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.cW0[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(A.d.gK(d),A.d.gai(d),0.4)
r.toString
u.push(new B.dy(p.b,o===p.a,new B.eHU(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bJW[q]
o=i.w
if(o===$){o=C.z(i.a.c.d,r)
i.w=o}m=A.d.gK(o).A(0,A.d.gK(n))?34:28
o=i.w
if(o===$){o=C.z(i.a.c.d,r)
i.w=o}l=A.d.gK(o).A(0,A.d.gK(n))?34:28
o=i.w
if(o===$){o=C.z(i.a.c.d,r)
i.w=o}k=A.d.gK(o).A(0,A.d.gK(n))?A.c:A.bf
o=i.w
if(o===$){o=C.z(i.a.c.d,r)
i.w=o}j=new C.ay(k,A.d.gK(o).A(0,A.d.gK(n))?2.5:1,A.r,-1)
d.push(C.aH(h,C.p(h,h,A.h,h,h,new C.o(h,h,new C.c2(j,j,j,j),h,h,new C.a7(A.ax,A.aC,A.w,n,h,h),A.a5),h,l,h,D.acf,h,h,h,m),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.eHV(i,n),h,h,h,h,h,h,!1,A.ae))}return B.jw(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.en(new C.am(A.W,h,A.aY,A.q,v,h),i.f),e,C.u(C.a([t,s,new B.eE(u,"STYLE",h),new B.eE(d,"THEME",h)],g),A.m,h,A.e,A.R,0,A.p))},
bsT(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.mM[r]
p=A.k.D((1-A.ex.av(0,A.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.D(p/1.5707963267948966,0,1)
q=D.mM[r]
n=q+0.12
m=A.k.D((a0-n)/(q+0.2-n),0,1)
n=D.mM[r]
q=n-0.01
q=A.k.D((a0-q)/(n+0.03-q),0,1)
n=C.dh()
l=n.a
l.$flags&2&&C.ah(l)
l[11]=0.0013
n.jx(p)
l=v[r]
k=u[r]
j=t[r]
i=D.mM[r]
h=i+0.1
if(A.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.mM[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.mM[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cF(0,r*118,0,f,f,f,new C.kI(q,new C.iw(n,f,A.b1,!0,f,new B.Oi(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.mM[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gK(w)
v=D.mM[r]
t=v+0.12
e.push(new C.cF(0,r*118-3-2,0,f,f,4,new C.lW(new B.bmO(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.at,f,f),f))}return new C.a3(a2,358,new C.am(A.W,f,A.a9,A.h,e,f),f)},
bIL(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.t7[r]
p=A.oU.av(0,A.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.t7[r]
m=q+0.15
l=A.k.D((a0-m)/(q+0.25-m),0,1)
m=D.t7[r]
q=m-0.03
q=A.k.D((a0-q)/(m+0.01-q),0,1)
m=C.dh()
k=m.a
k.$flags&2&&C.ah(k)
k[11]=0.0011
m.jg(n,n,n,1)
m.fk(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new B.Oi(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dh()
k.fk(3.141592653589793)
k=new C.iw(k,f,A.A,!0,f,new B.bnD(a2,108,w,f),f)}e.push(new C.cF(0,r*130,0,f,f,f,new C.kI(q,new C.iw(m,f,A.A,!0,f,k,f),f),f))}return new C.a3(a2,378,new C.am(A.W,f,A.a9,A.h,e,f),f)},
crN(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.ZR[w]
l.push(A.co.av(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bZ(0,C.b1(n,n,n,new B.bqa(d.d,l,D.aqw,m,B.bn8(e,0.4,0.62),f,B.bn8(e,0.45,0.7),n),A.at),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=B.fEq(g,w)
q=D.aqw[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cF(r,s-q*m*p+12,n,n,t,n,new C.kI(o,C.V(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=B.fEq(g,w)
r=D.ZR[w]
q=r+0.15
v.push(new C.cF(s,l,n,n,t,n,new C.kI(A.k.D((e-q)/(r+0.25-q),0,1),new C.x(u[w],n,A.a4v,n,A.L,n,n,n,n,n,n,n),n),n))}return new C.a3(g,m+90,new C.am(A.W,n,A.a9,A.h,v,n),n)},
byQ(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.co.av(0,B.bn8(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bZ(0,C.at(C.dP(C.b1(f,f,f,new B.bmg(A.d.gK(a1),B.bn8(a3,0,0.2),a4,f),new C.ar(a5*0.95,70)),D.dK7),f,f,f),0,0,0))
w=C.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.D((a3-l)/(0.12+m-l),0,1)
j=A.dG.av(0,A.k.D((o-0.7)/0.3,0,1))
l=C.dh()
m=l.a
m.$flags&2&&C.ah(m)
m[11]=0.001
l.fk(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jg(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.H(r,1):-1
w.push(new C.A(o,new C.cF(0,0,0,0,f,f,new C.cw(A.A,f,f,new C.kI(k*(0.45+0.55*o),C.dP(new C.iw(l,f,A.A,!0,f,new B.Oi(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.v(n*a5*0.34,-o*18)),f),f),f)))}A.d.aY(w,new B.eHw())
A.d.v(a0,new C.J(w,new B.eHx(),x.fR))
return new C.a3(a5,330,new C.am(A.W,f,A.a9,A.h,a0,f),f)},
by3(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.t7[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.nO.av(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.t7[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.asi[q]
k=C.dh()
k.mf(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jg(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.t7[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cF(0,0,0,0,e,e,new C.cw(A.A,e,e,new C.kI(m,C.dP(new C.iw(k,e,A.A,!0,e,new B.Oi(d,92,w,p,j,i,0,g*s,h,e),e),new C.v(0,l)),e),e),e))
l=D.t7[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cF(0,0,0,0,e,e,new C.cw(A.A,e,e,C.dP(new C.lW(new B.b6R(w,f,q,e),e,new C.ar(r,212),e,e),new C.v(0,D.asi[q])),e),e))}return new C.a3(a4,330,new C.am(A.W,e,A.a9,A.h,a0,e),e)},
bvJ(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.v(-b0,-150),new C.v(b0,-40),D.dKc],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.mM[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.co.av(0,p)
q=D.asm[r]
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
e=A.k.D((a8-f)/(g+0.3-f),0,1)
f=D.mM[r]
g=f-0.01
g=A.k.D((a8-g)/(f+0.03-g),0,1)
f=C.dh()
d=f.a
d.$flags&2&&C.ah(d)
d[11]=0.001
f.mf(l*h+D.cR0[r]*o)
f.fk(l*0.9)
h=0.55+0.45*o
f.jg(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cF(0,0,0,0,a3,a3,new C.cw(A.A,a3,a3,new C.kI(g,C.dP(new C.iw(f,a3,A.A,!0,a3,new B.Oi(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.v(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.mM[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.asm[r]
a6.push(new C.cF(0,0,0,0,a3,a3,new C.cw(A.A,a3,a3,C.dP(new C.lW(new B.bmi(A.d.gK(w),a2,a3),a3,new C.ar(a4,30),a3,a3),new C.v(0,q+48-4)),a3),a3))}}return new C.a3(b0,330,new C.am(A.W,a3,A.a9,A.h,a6,a3),a3)}}
B.bmO.prototype={
a6(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.ac(w-v,0,w+v,e.b)
q=C.bN(u,A.fZ)
$.a_()
t=C.N()
s=0.9*r.d
t.r=r.b.j(s).gq(0)
t.z=H.om
d.b0(q,t)
t=C.bN(u,A.fZ)
q=C.N()
q.r=A.c.j(s).gq(0)
d.b0(t,q)},
aq(d){return d.c!==this.c||d.d!==this.d}}
B.bmg.prototype={
a6(d,e){var w,v,u=this.c,t=C.d9(e.ef(A.J),e.b*u,e.a*u)
$.a_()
u=C.N()
u.b=A.ad
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gq(0)
u.z=R.FU
d.j1(t,u)
u=C.N()
u.b=A.ad
u.c=2.5
u.r=w.j(0.7).gq(0)
d.j1(t,u)
u=t.cD(-14)
v=C.N()
v.b=A.ad
v.c=1
v.r=w.j(0.3).gq(0)
d.j1(u,v)},
aq(d){return!0}}
B.b6R.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ef(A.J),f=this.c,e=A.co.av(0,f)
$.a_()
w=C.N()
w.b=A.ad
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gK(u).j(0.6*v).gq(0)
d.ak(g,40+e*a0.a*0.42,w)
t=new C.f0()
t.dX(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.ae()*3.141592653589793*2
n=(40+t.ae()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.ae()
j=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
i=(p&1)===0?A.d.gK(u):A.c
j.r=i.j(A.k.D(v,0,1)).gq(0)
h=j.L()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
aq(d){return!0}}
B.bmi.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ef(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.d9(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.a_()
o=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
o.b=A.ad
o.c=2
o.r=u.j((1-q)*0.7).gq(0)
n=o.L()
t.drawOval(C.cp(p),n)
n.delete()}},
aq(d){return d.c!==this.c}}
B.bqa.prototype={
a6(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.ac(0,d0,0+c5,d0+60)
$.a_()
d0=C.N()
w=c1.b
v=x.O
d0.sar(new C.a7(A.b1,A.b5,A.w,C.a([A.d.gK(w).j(0.18),A.K],v),c2,c2).az(0,d1))
d2.bd(d1,d0)
d0=C.N()
d0.r=A.c.j(0.18).gq(0)
d0.c=1
d2.bK(new C.v(0,c4),new C.v(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=B.fEq(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.a_()
a3=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
a3.r=A.x.j(0.5).gq(0)
a3.z=A.lA
a4=a3.L()
t.drawOval(C.cp(new C.ac(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.ac(d,a1,a3,a1+a0)
a6=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
a7=C.aq(A.d.gK(w),A.c,0.1)
a7.toString
a6.sar(new C.a7(A.b1,A.b5,A.w,C.a([a7,A.d.gai(w)],v),c2,c2).az(0,a5))
a4=a6.L()
t.drawRect(C.cp(a5),a4)
a4.delete()
a2=a2.r
a6=C.a([],n)
a8=new C.aR(a2,A.aq,c2,c2,a6)
a6.push(new C.b7(a3,a1))
a7=a3+c8
a9=a1+c9
a6.push(new C.ao(a7,a9))
a6.push(new C.ao(a7,m))
a6.push(new C.ao(a3,c4))
a6.push(new C.bE())
a6=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
a6.r=C.aq(A.d.gai(w),A.x,0.5).gq(0)
a4=a6.L()
a6=a8.gbM().a.snapshot()
t.drawPath((a8.e=new C.cG(a6)).a,a4)
a4.delete()
a6=C.a([],n)
b0=new C.aR(a2,A.aq,c2,c2,a6)
a6.push(new C.b7(d,a1))
a6.push(new C.ao(d+c8,a9))
a6.push(new C.ao(a7,a9))
a6.push(new C.ao(a3,a1))
a6.push(new C.bE())
a2=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
a2.r=C.aq(A.d.gK(w),A.c,0.45).gq(0)
a4=a2.L()
a2=b0.gbM().a.snapshot()
t.drawPath((b0.e=new C.cG(a2)).a,a4)
a4.delete()
b1=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
b1.b=A.ad
b1.c=1
b1.r=A.c.j(0.28).gq(0)
a4=b1.L()
t.drawRect(C.cp(a5),a4)
a4.delete()
a4=b1.L()
a2=a8.e
t.drawPath((a2==null?a8.e=new C.cG(a8.gbM().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.L()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cG(b0.gbM().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bH(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=C.bN(new C.ac(b7,a7,b7+r,b5),A.fZ)
$.a_()
b9=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
b9.r=(b4?A.c.j(q):A.x.j(0.22)).gq(0)
a4=b9.L()
t.drawRRect(C.fs(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.ac(d,a1,a3,a1+28)
J.bH(t.save())
t.clipRect(C.cp(a5),$.uG()[1],!0)
$.a_()
a1=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
a1.sar(new C.a7(A.b1,A.b5,A.w,C.a([A.K,A.c.j(0.4),A.K],v),c2,c2).az(0,c0))
a4=a1.L()
t.drawRect(C.cp(c0),a4)
a4.delete()
t.restore()}}},
aq(d){return!0}}
B.aJU.prototype={
aN(){this.aV()
this.aU()
this.dD()},
p(){var w=this,v=w.aZ$
if(v!=null)v.a1(0,w.gdB())
w.aZ$=null
w.a2()}}
B.Zf.prototype={
a3(){return"_Role."+this.b}}
B.py.prototype={}
B.qc.prototype={}
B.Bc.prototype={}
B.Xe.prototype={}
B.acn.prototype={}
B.Zs.prototype={
gX(d){return this.d}}
B.Bm.prototype={}
B.a9l.prototype={}
B.a9C.prototype={}
B.abw.prototype={}
B.bdf.prototype={
a0i(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
B.dL(d,"",e,g,h,f)},
b2v(d,e,f){return this.a0i(d,e,f,0,0.55)},
axN(d,e,f,g){return this.a0i(d,e,f,0,g)},
b2w(d,e,f,g){return this.a0i(d,e,f,g,0.55)},
a7(d){var w=this
w.a.a7(0)
A.d.a7(w.b)
A.d.a7(w.c)
A.d.a7(w.d)
A.d.a7(w.e)
A.d.a7(w.f)
A.d.a7(w.r)
A.d.a7(w.w)
A.d.a7(w.x)
w.y.a7(0)
w.Q.a7(0)
w.as.a7(0)
w.b1()},
agT(d,e,f,g){var w="n"+this.ay++,v=new B.qc(w,e,f,g)
this.a.m(0,w,v)
this.b1()
return v},
A2(d,e,f){return this.agT(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bm(w.b,new B.d9k(e))
A.d.bm(w.c,new B.d9l(e))
w.b1()},
b6f(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.m9.h(0,v.b).c===D.vC)return!1
w=this.b
if(A.d.bg(w,new B.d9h(d,e)))return!1
w.push(new B.Bc(d,e))
this.b1()
return!0},
bSI(d){var w
if(d.b==="beat")return D.bSt[A.o.H(d.d,4)]
w=this.at
switch(A.o.H(d.d,3)){case 1:return 350+w.aB(500)
case 2:return 1400+w.aB(2200)
default:return 450+w.aB(2000)}},
aB8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.m(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.m(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.H(w,6)
t=D.asA[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new B.Bm(u,t,j.ax,90))
w.push(new B.Bm(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ae()*3.141592653589793*2
v.push(new B.Zs(u,new C.v(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b2v(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.H(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ae()*3.141592653589793*2
p=100+w.ae()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,A.c,w.ae()*0.5)
m.toString
v.push(new B.Zs(u,new C.v(o*p,n*p),m,3+w.ae()*4.5,1000+w.aB(700),j.ax))}j.f.push(new B.Bm(u,t,j.ax,120))
j.axN(120,200,"noise",0.5)
j.b2v(261.63*Math.pow(2,([7,12,16,19][w.aB(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new B.Bm(u,t,j.ax,230))
w.push(new B.Bm(u,t,j.ax+160,160))
w.push(new B.Bm(u,t,j.ax+320,100))
j.b2w(180+j.at.aB(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new B.a9l(u,new C.v((w.ae()-0.5)*220,-260-w.ae()*180),t,j.ax))
j.b2w(300+w.aB(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ae()*3.141592653589793*2
j.w.push(new B.a9C(u,u.ao(0,new C.v(Math.cos(q),Math.sin(q)).aM(0,260+w.ae()*200)),t,j.ax))
j.a0i(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fV()
j.a0i(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new B.abw(u,D.as6[v],t,j.ax))
j.axN(261.63*Math.pow(2,([0,5,9,12][j.at.aB(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.axN(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.bOA[A.o.H(w,3)]
for(k=1;k<=3;++k)j.cik(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gag(j.b),v=new C.hK(w,new B.d9i(d));v.C();)j.awl(w.gT(0),j.ax+D.c_N[A.o.H(g.d,4)])
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
case"chance":s=j.at.aB(100)<D.cgu[A.o.H(g.d,3)]
break
default:break}if(s)for(w=A.d.gag(j.b),v=new C.hK(w,new B.d9j(d));v.C();)j.awl(w.gT(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.yh(w,0,v-700)},
cik(d,e,f){var w=this.c
if(w.length>260)return
w.push(new B.Xe(e,"~"+d))},
awl(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new B.acn(d.a,v,e,w))
u.push(new B.Xe(w,v))},
cLN(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aB8(r)
u.m(0,r,o.ax+o.bSI(s))}}w=o.c
v=C.U(w).k("a4<1>")
q=C.z(new C.a4(w,new B.d9m(o),v),v.k("G.E"))
if(q.length!==0){A.d.bm(w,new B.d9n(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.K)(q),++t){u=q[t].b
if(A.a.a_(u,"~")){p=A.a.aW(u,1)
for(u=A.d.gag(v),r=new C.hK(u,new B.d9o(p));r.C();)o.awl(u.gT(0),o.ax)}else o.aB8(u)}}A.d.bm(o.d,new B.d9p(o))
A.d.bm(o.e,new B.d9q(o))
A.d.bm(o.f,new B.d9r(o))
A.d.bm(o.w,new B.d9s(o))
A.d.bm(o.x,new B.d9t(o))
A.d.bm(o.r,new B.d9u(o))
o.b1()},
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
v.push(C.a([n.a,n.b],r))}return A.Q.al(C.E(["nodes",m,"edges",v],u,x.ew),null)},
cD9(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.h.a(A.Q.aD(0,d,null))
k.a7(0)
for(o=x.a,n=J.aV(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gT(n)
u=C.t(J.q(v,"k"))
if(!D.m9.am(0,u))continue
t=C.t(J.q(v,"id"))
m.m(0,t,new B.qc(t,u,new C.v(C.fa(J.q(v,"x"))*k.cy.a,C.fa(J.q(v,"y"))*k.cy.b),A.k.N(C.fa(J.q(v,"p")))))
s=C.c3(C.aJ(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aV(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gT(o)
q=C.t(J.q(r,0))
p=C.t(J.q(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new B.Bc(q,p))}k.b1()
return!0}catch(l){return!1}},
cG6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a7(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.m(0,n,new B.qc(n,r,new C.v(q*p.a,o*p.b),s))
l.b1()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.b6f(w[m.a],w[m.b])}},
gX(d){return this.cy}}
B.Er.prototype={}
B.TW.prototype={
S(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new B.aBk(new B.bdf(C.S(w,x.f3),v,u,t,s,r,q,p,o,C.S(w,n),C.S(w,n),C.S(w,n),C.S(w,n),A.cB,A.K,A.at,$.au()),A.bv,A.J,A.J,A.U,null,null)}}
B.aBk.prototype={
a9G(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$a9G=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.ax(),$async$a9G)
case 6:q=n.ks(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.n(new B.e9k(s))
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
w=u}for(;;)switch(w){case 0:s.n(new B.e99(s))
u=3
w=6
return C.b(C.ax(),$async$a6K)
case 6:e.ap("Bool","ngmy_core_lab_coach_v1",!0)
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
bEH(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a2(n).k("bg<2>")
v=""+n.a+"|"+o.length+"|"+new C.bg(n,w).cI(0,0,new B.e9b())+"|"+A.d.cI(o,0,new B.e9c())
if(v===p.ch)return p.CW
u=new B.e9f()
t=x.s
s=C.a([],t)
r=new B.e9g(p,s,u)
for(n=new C.bg(n,w).gag(0),w=new C.hK(n,new B.e9d());w.C();){q=n.gT(0)
if(!A.d.bg(o,new B.e9e(q)))s.push(C.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.de(s,0,C.dJ(5,"count",x.S),x.N).dA(0)},
Z(){var w,v=this
v.a0()
v.a9G()
v.d.db=v.ay
w=v.qR(new B.e9K(v))
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
w.bq3()},
a9d(d){return this.bSa(d)},
bSa(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
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
case 6:q=m.aS(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cD9(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aSa(A.d.gK(D.arE))
if(s.c!=null)s.n(new B.e9j())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$a9d,v)},
aSa(d){this.d.cG6(0,d.c,d.d)
this.CY()},
CY(){var w=this.as
if(w!=null)w.a9(0)
this.as=C.cN(A.lm,new B.e95(this))},
atq(d){var w,v,u,t,s=this.d.a,r=C.a2(s).k("bg<2>")
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
c6K(d){var w,v,u,t,s,r=this.d.a,q=C.a2(r).k("bg<2>")
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
bRZ(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.dv(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.m9.h(0,r.b).c===D.vC)continue
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
bZB(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=B.h0n(new C.v(n.a+36,n.b+0),new C.v(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cpG(d){var w,v,u,t,s,r,q=this,p=q.atq(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eG()
u=v.b
if(u==="button"){w.aB8(p)
return}if(q.r)return
t=D.m9.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.pJ)s=6
else s=1
v.d=A.o.H(v.d+1,s)
w.b1()
q.CY()
return}if(q.r)return
r=q.bZB(d)
if(r!=null){w=q.d
A.d.cu(w.b,r)
w.b1()
q.CY()}},
c8_(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.c6K(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.atq(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aE(0,d)}},
c80(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b1()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.v(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b1()}}},
aWP(){var w,v,u=this
if(u.z!=null){w=u.bRZ(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.b6f(v,w)}else v=!1
if(v){C.jE()
u.CY()}u.z=null
u.d.b1()}else if(u.x!=null){if(u.at)u.CY()
u.x=null}},
a9T(d){return this.bUM(d)},
bUM(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$a9T=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.atq(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.j7()
p=t.c
p.toString
w=3
return C.b(C.c1(D.rr,null,new B.e9m(q),p,!0,!0,!1,A.l4,!1,!1,x.y),$async$a9T)
case 3:if(f===!0){r.W(0,s)
t.CY()}case 1:return C.h(u,v)}})
return C.i($async$a9T,v)},
bZz(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.A2(0,d,new C.v(v.a*(0.25+u.ae()*0.5),v.b*(0.2+u.ae()*0.55)))
C.eG()
this.CY()},
ads(){var w=0,v=C.j(x.H),u=this,t,s
var $async$ads=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.c1(D.rr,null,new B.e9o(),s,!0,!0,!0,A.l4,!1,!1,x.es),$async$ads)
case 2:t=e
if(t!=null)u.aSa(t)
return C.h(null,v)}})
return C.i($async$ads,v)},
ab1(d){var w=0,v=C.j(x.H),u=this,t
var $async$ab1=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.cf(null,null,!0,null,new B.e98(),t,null,!0,!0,x.y),$async$ab1)
case 2:if(f===!0){u.d.a7(0)
u.CY()}return C.h(null,v)}})
return C.i($async$ab1,v)},
B(d){var w=this,v=null,u=C.a([C.afD(w.r?new C.bG(A.a3,v,v,new C.C(A.DW,C.hh(D.bw7,D.eRM,new B.e9I(w),v),v),v):w.bZC(),A.b8,A.ij),C.D(C.cj(new B.e9J(w)),1)],x.p)
if(!w.r)u.push(w.ckH())
return C.cd(v,A.bW,C.bq(!0,C.u(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0),v,!1,!1,v,v)},
bAt(){var w=null,v=new B.e9a(),u=A.x.j(0.7),t=C.m(26),s=C.H(A.bs.j(0.5),A.r,1)
return C.bZ(0,C.ec(C.at(C.p(w,C.ch(C.u(C.a([D.f10,A.av,D.f7R,A.ay,v.$4(A.od,A.bs,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(V.EJ,A.cF,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kX,A.c3,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(D.bpW,A.cJ,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.f7e,new C.bG(A.a7,w,w,C.bI(!1,D.eZm,w,w,!0,w,w,this.gbAm(),w,w),w)],x.p),A.F,w,A.e,A.R,0,A.p),A.q,w,A.z,w,w,w,w,A.aj),A.h,w,A.SE,new C.o(D.rr,w,s,t,w,w,A.n),w,w,w,A.fA,Y.ads,w,w,w),w,w,w),u,!0),0,0,0)},
bZC(){var w=this,v=null,u=C.aF(v,v,v,v,E.qq,v,v,v,new B.e9u(w),v,v,v,v,v,v),t=w.a6c(A.Lg,"How it works",new B.e9v(w),!0),s=w.ay?A.nu:M.qo
return new C.C(D.bkd,C.B(C.a([u,D.blB,t,w.a6c(s,"Sound",new B.e9w(w),!0),w.a6c(A.dP,"Ideas",w.gcbD(),!0),w.a6c(D.wX,"Clear",w.gbZA(w),!0),w.aJt(A.iK,"Show",new B.e9x(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aJt(d,e,f,g,h){var w=null,v=h?A.bs:A.c.j(0.08),u=C.m(14),t=C.m(14),s=C.a([C.V(d,h?A.x:A.c,w,w,w,20)],x.p)
return new C.C(A4.uo,C.aD(!1,A.Y,!0,u,C.aI(!1,t,!0,C.hA(new C.C(new C.M(8,8,8,8),C.B(s,A.m,w,A.e,A.R,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.h,v,0,w,w,w,w,w,A.ac),w)},
a6c(d,e,f,g){return this.aJt(d,e,f,g,!1)},
ckH(){var w=null,v=new B.e9q(this),u=A.c.j(0.08)
return C.p(w,C.ch(C.B(C.a([v.$2("START",D.vC),v.$2("CHANGE",D.Ch),v.$2("REACT",D.pJ)],x.p),A.F,w,A.e,A.j,0,w,w),A.q,w,A.z,w,w,w,w,A.aZ),A.h,w,w,new C.o(D.TT,w,new C.c2(new C.ay(u,1,A.r,-1),A.V,A.V,A.V),w,w,w,A.n),w,w,w,w,D.bfu,w,w,w)},
ckI(d){var w,v,u,t,s=null,r=D.m9.h(0,d)
r.toString
w=C.m(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.H(v.j(0.5),A.r,1)
return new C.C(A.hi,C.aH(s,C.p(s,C.u(C.a([C.V(r.b,v,s,s,s,22),A.d5,C.d(r.a,s,1,A.a2,s,s,s,D.aKi,s,s,s)],x.p),A.m,s,A.e,A.R,0,A.p),A.h,s,s,new C.o(s,s,t,w,s,new C.a7(A.b1,A.b5,A.w,u,s,s),A.n),s,s,s,s,A.hx,s,s,62),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.e9p(this,d),s,s,s,s,s,s,!1,A.ae),s)}}
B.bdg.prototype={
a6(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bH(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.a_()
u=C.N()
u.r=A.c.j(0.05).gq(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.L()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.a_()
o=C.N()
o.r=b5.cx.j(0.4*((p-b6)/800)).gq(0)
b8.bd(new C.ac(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){l=w[m]
k=n.h(0,l.a)
j=n.h(0,l.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=j.c
f=g.a-36
g=g.b
e=$.a_()
d=C.a([],o)
a0=new C.aR(e.r,A.aq,b4,b4,d)
d.push(new C.b7(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new C.p6(h+a1,i,f-a1,g,f,g))
a2=D.m9.h(0,k.b).d
a3=D.m9.h(0,j.b).d
e=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
e.b=A.ad
e.c=3
e.d=A.bV
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.qU(new C.v(h,i),new C.v(f,g))
e.sar(new C.a7(A.a3,A.a7,A.w,d,b4,b4).az(0,new C.ac(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.L()
i=a0.gbM().a.snapshot()
b7.drawPath((a0.e=new C.cG(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=B.h0n(new C.v(i.a+36,i.b+0),new C.v(h.a-36,h.b),a5)
$.a_()
h=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
h.r=A.c.j(0.35).gq(0)
h.z=H.om
q=h.L()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
g.r=A.c.gq(0)
q=g.L()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ao(0,D.Gp)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new C.aR($.a_().r,A.aq,b4,b4,C.a([],o))
o=a8.b
a0.E(new C.b7(t,o))
i=a9.b
a0.E(new C.p6(t+a1,o,w-a1,i,w,i))
i=C.N()
i.b=A.ad
i.c=3
i.r=A.c.j(0.7).gq(0)
b8.aQ(a0,i)
i=C.N()
i.r=A.c.gq(0)
b8.ak(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b0=w[m]
o=b0.c
v=A.k.D((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dU.av(0,v)
$.a_()
h=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
h.b=A.ad
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gq(0)
q=h.L()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b1=w[m]
v=A.k.D((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=C.l2(o,i,A.dU.av(0,v))
h.toString
i=C.l2(o,i,A.dU.av(0,A.k.D(v-0.35,0,1)))
i.toString
$.a_()
o=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
o.c=5
o.d=A.bV
g=b1.c
f=C.a([g.j(0),g],p)
e=C.qU(i,h)
o.sar(new C.a7(A.a3,A.a7,A.w,f,b4,b4).az(0,new C.ac(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.L()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
i.r=A.c.gq(0)
q=i.L()
b7.drawCircle(o,h,6,q)
q.delete()
i=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
i.r=g.j(0.5*(1-v)).gq(0)
i.z=A.jj
q=i.L()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){a4=w[m]
v=A.k.D((b6-a4.f)/a4.e,0,1)
o=a4.a
$.a_()
i=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
i.r=a4.c.j(1-v).gq(0)
q=i.L()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){j=w[m]
o=j.a
$.a_()
i=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
h=j.c
i.r=h.j(0.35).gq(0)
i.z=A.jj
q=i.L()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
i.sar(new C.bR(N.pK,0.5,A.w,b4,0,C.a([A.c,h],p),b4,b4).az(0,C.bV(j.a,8)))
q=i.L()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.K)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=B.bdh(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a6(b8,new C.v(t.a-o/2,t.b-(40+60*v+p.gbh(p)/2)))}for(b5=new C.dv(n,n.r,n.e);b5.C();)b3.c7z(b8,b5.d,b6)
b7.restore()},
c7z(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.m9.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=C.d9(e.c,64,64)
t=C.bN(u,A.jP)
s=t.eH(A.cs)
$.a_()
r=C.N()
r.r=A.x.j(0.55).gq(0)
r.z=A.lA
d.b0(s,r)
if(v>0){s=t.cD(6)
r=C.N()
r.r=h.d.j(0.6*v).gq(0)
r.z=A.AW
d.b0(s,r)}s=t.eH(A.cA)
r=C.N()
q=h.d
r.r=C.aq(q,A.x,0.65).gq(0)
d.b0(s,r)
r=C.N()
s=C.aq(q,A.c,0.18+0.4*v)
s.toString
p=C.aq(q,A.x,0.35)
p.toString
r.sar(new C.a7(A.b1,A.b5,A.w,C.a([s,p],x.O),j,j).az(0,u))
d.b0(t,r)
r=C.N()
r.b=A.ad
r.c=1.2
r.r=A.c.j(0.35).gq(0)
d.b0(t,r)
r=h.b
p=e.c
o=B.bdh(C.jv(r.a),30,A.c,r.b,j,A.I)
r=o.b
s=r.c
r=r.a.c
o.a6(d,p.aE(0,new C.v(s/2,r.gbh(r)/2)))
n=B.bdh(h.a,11,A.c,j,j,A.I)
n.a6(d,e.c.ao(0,new C.v(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.H(e.d,r)]
else m=i==="pop"?D.as6[A.o.H(e.d,6)]:j
h=h.c
if(h===D.pJ){s=e.c.ao(0,new C.v(0,62))
r=C.N()
r.r=D.asA[A.o.H(e.d,6)].gq(0)
d.ak(s,5,r)}else if(m!=null){l=B.bdh(m,9.5,A.aA,j,j,A.O)
l.a6(d,e.c.ao(0,new C.v(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=B.bdh(m,9.5,A.aA,j,j,A.O)
l.a6(d,e.c.ao(0,new C.v(-l.b.c/2,54)))}if(k.c)return
if(h!==D.vC)k.aXB(d,e.c.aE(0,D.Gp),q)
k.aXB(d,e.c.ao(0,D.Gp),q)},
aXB(d,e,f){var w
$.a_()
w=C.N()
w.r=A.bW.gq(0)
d.ak(e,9,w)
w=C.N()
w.b=A.ad
w.c=2.2
w.r=f.gq(0)
d.ak(e,9,w)
w=C.N()
w.r=A.c.gq(0)
d.ak(e,3.5,w)},
aq(d){return!0}}
B.aJ3.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.bhL.prototype={}
B.O9.prototype={
gX(d){return this.d}}
B.Ua.prototype={
S(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new B.bgQ(new C.cn(null,x.A),w,v,A.cB,A.bv,D.D8,null,null)}}
B.bgQ.prototype={
aVo(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bH((1-d.b/(C.aG(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.ar8[A.o.H(v,5)]+12*A.o.aj(v,5)+12
switch(t.z){case"glow":B.l1("synth",u,420,0.3)
break
case"rainbow":B.l1("bell",u,700,0.35)
break
case"stars":B.l1("pluck",u+12,400,0.4)
break
case"sparks":B.dL(2400+t.r.aB(2000),"",60,0,0.18,"noise")
break
default:B.dL(110+t.r.aB(60),"",140,0,0.22,"noise")}},
c1v(d){return this.aVo(d,!1)},
Z(){var w,v=this
v.a0()
w=v.qR(new B.ejv(v))
w.kn(0)
v.w!==$&&C.aO()
v.w=w},
p(){var w=this.w
w===$&&C.c()
w.p()
this.bqc()},
gaX8(){var w=this.Q
return w<0?new G.mS(1,A.k.H(this.y*0.18,360),0.85,1).iF():D.Oa[w]},
aNJ(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gaX8(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.ae()*3.141592653589793*2
switch(l.z){case"fire":q=v.ae()
p=l.as
o=v.ae()
n=v.ae()
m=C.aq(A.cJ,A.aF,v.ae())
m.toString
j.push(new B.O9(new C.v(u+(q-0.5)*p,t),new C.v((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.ae()*0.4),l.y,700+v.aB(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.ae()*200
n=C.aq(k,A.c,v.ae()*0.6)
n.toString
j.push(new B.O9(d,new C.v(q*o,p*o),n,1.5+v.ae()*3,l.y,600+v.aB(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.ae()*40
j.push(new B.O9(d,new C.v(q*o,p*o),k,1.2+v.ae()*1.8,l.y,500))}}},
aUg(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gaX8()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new B.bhL(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aNJ(e)
r.aVo(e,!0)
r.n(new B.ej6())},
aUf(){this.ax=null
this.n(new B.ej5())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aF(n,n,n,n,D.m6,n,n,n,new B.ejf(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b1(n,n,n,new B.bo2(k,o.f,o.y,o.at,n),A.at)],m)
if(!o.ay&&k.length===0)j.push(D.aXb)
k=C.aH(A.c5,new C.am(A.W,n,A.aY,A.q,j,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,new B.ejg(o),new B.ejh(o),new B.ejl(o),n,n,n,n,n,n,n,n,n,new B.ejm(o),new B.ejn(o),n,n,n,!1,A.ae)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cDN[w]
j.push(new B.dy(v.b,o.z===v.a,new B.ejo(o,v),v.c,A.c3,n))}u=C.a([new B.DW(A.c,o.Q<0,new B.ejp(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new B.DW(D.Oa[t],o.Q===t,new B.ejq(o,t),!1,n))
s=o.as
s=B.hp(A.c3,A.o.u(A.k.U(s)),"Size",36,4,new B.ejr(o),s)
r=o.ch
q=r?A.nu:M.qo
q=C.a([new B.dy("Sound",r,new B.ejs(o),q,A.c3,n),new B.fe(A.uJ,"Undo",new B.eji(o),A.c,n),new B.fe(D.wX,"Clear",new B.ejj(o),A.cH,n)],m)
for(w=0;w<4;++w){p=D.cSo[w]
q.push(new B.DW(p,o.at.A(0,p),new B.ejk(o,p),!1,n))}return B.jw(A.c3,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.en(k,o.d),"SPARK PAINTER",C.u(C.a([new B.eE(j,"BRUSH",n),new B.eE(u,"COLOUR",n),s,new B.eE(q,n,n)],m),A.m,n,A.e,A.R,0,A.p))}}
B.bo2.prototype={
a6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.a_()
w=C.N()
v=a4.e
w.r=v.gq(v)
a6.bd(new C.ac(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.a_()
o=C.a([],t)
n=new C.aR(p.r,A.aq,a5,a5,o)
o.push(new C.b7(A.d.gK(q).a,A.d.gK(q).b))
for(p=C.U(q),m=p.k("pu<1>"),l=new C.pu(q,1,a5,m),l.FV(q,1,a5,p.c),l=new C.bU(l,l.gI(0),m.k("bU<ai.E>")),m=m.k("ai.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.ao(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bC(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gK(q)
$.a_()
p=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
p.r=r.c.gq(0)
j=p.L()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.a_()
q=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
q.b=A.ad
q.d=A.bV
q.e=A.fq
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gq(0)
q.z=new C.hH(A.G,p)
j=q.L()
q=n.e
u.drawPath((q==null?n.e=new C.cG(n.gbM().a.snapshot()):q).a,j)
j.delete()
q=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
q.b=A.ad
q.d=A.bV
q.e=A.fq
q.c=p
q.r=o.gq(0)
j=q.L()
q=n.e
u.drawPath((q==null?n.e=new C.cG(n.gbM().a.snapshot()):q).a,j)
j.delete()
q=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
q.b=A.ad
q.d=A.bV
q.e=A.fq
q.c=p*0.35
q.r=A.c.j(0.85).gq(0)
j=q.L()
q=n.e
u.drawPath((q==null?n.e=new C.cG(n.gbM().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new G.mS(1,A.o.H(i*5,360),0.85,1).iF()
o=q[i-1]
m=q[i]
$.a_()
l=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
l.c=p
l.d=A.bV
l.r=h.gq(0)
j=l.L()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,C.K)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gK(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new G.mS(1,A.o.H(a3*23,360),0.7,1).iF():l
a4.bZD(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.a_()
p=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
p.r=a0.c.j((1-e)*0.9).gq(0)
p.z=E.OD
j=p.L()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
bZD(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.a_(),o=C.a([],x.v),n=new C.aR(p.r,A.aq,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new C.b7(r,q)
o.push(r)
q=n.f
if(q!=null)r.bC(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new C.ao(r,q)
o.push(r)
q=n.f
if(q!=null)r.bC(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.E(new C.bE())
$.a_()
p=C.N()
p.r=h.j(0.4).gq(0)
p.z=A.jj
d.aQ(n,p)
p=C.N()
p.r=h.gq(0)
d.aQ(n,p)},
aq(d){return!0}}
B.Um.prototype={
S(){return new B.aBy(new C.cn(null,x.A),new C.ap(new C.bc("NGMY",A.b0,A.aM),$.au()),null,null)}}
B.aBy.prototype={
gHo(){var w,v=this,u=v.e
if(u===$){w=C.bi(null,A.rC,null,1,null,v)
w.cF(0)
v.e!==$&&C.bJ()
v.e=w
u=w}return u},
Z(){this.a0()
var w=this.gHo()
w.d5()
w.dM$.J(0,this.gbR9())},
bRa(){var w,v,u,t,s,r,q,p=this,o=p.gHo().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.lE:new C.lO(w)).gI(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)B.dL(1500,"",35,0,0.18,"square")
else if(s==="glitch")B.dL(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
B.l1(s,D.aq8[A.o.H(t,8)]+12,450,0.35)}}p.Q=o},
p(){this.gHo().p()
var w=this.f
w.R$=$.au()
w.O$=0
this.bqi()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.lO(h)
w=C.z(h,C.a2(h).k("G.E"))}v=D.Oa[k.w]
h=x.p
u=C.a([C.aF(j,j,j,j,D.m6,j,j,j,new B.eq4(k,d),j,j,j,j,"Share",j)],h)
t=C.m(26)
s=D.as7[k.y]
s=C.bu(t,C.bT(C.at(C.c4(k.gHo(),new B.eq5(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a7(A.ax,A.aC,A.w,s,j,j),A.n),A.ba),A.ap)
t=A.c.j(0.06)
t=C.aK(j,A.U,!1,j,!0,A.q,j,C.aL(),i,j,j,j,j,j,2,C.bm(j,new C.b2(4,C.m(14),A.V),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,H.BU,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.z,!0,j,!0,j,!1,j,A.ag,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new B.eq6(k),j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,A.hb,!0,A.a6,j,A.am,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.cgi[r]
i.push(new B.dy(q.b,k.r===q.a,new B.eq7(k,q),j,A.cJ,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new B.DW(D.Oa[o],k.w===o,new B.eq8(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.nu:M.qo
l=C.a([new B.dy(m,n,new B.eq9(k),l,A.cJ,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new B.DW(D.as7[o][0],k.y===o,new B.eqa(k,o),!1,j))
n.push(A.bq)
n.push(new B.fe(A.m4,"Replay",new B.eqb(k),A.c,j))
m=k.x
return B.jw(A.cJ,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.C(A.bB,new C.en(s,k.d),j),"TITLE ANIMATOR",C.u(C.a([t,A.P,new B.eE(i,"MOVE",j),new B.eE(p,"COLOUR",j),new B.eE(l,"SOUND",j),new B.eE(n,"BACK",j),B.hp(A.cJ,A.o.u(A.k.U(m)),"Size",96,28,new B.eqc(k),m)],h),A.m,j,A.e,A.R,0,A.p))},
bTS(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cJ(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<A.k.bH(g*1.6*f)?1:0
w=h
break
case"bounce":o=-Math.abs(Math.sin(A.k.H(g*2-q*0.5,1)*3.141592653589793))*s.x*0.5
w=h
break
case"wave":o=Math.sin(g*3.141592653589793*2-q*3)*s.x*0.28
w=h
break
case"neon":v=Math.sin(g*40+e*7)>0.92?0.25:1
A.d.a7(p)
p.push(new C.cJ(h,A.J,30*v))
p.push(new C.cJ(h.j(0.8),A.J,60*v))
w=h
m=v
break
case"glitch":u=A.o.H(A.k.bH(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.b9
else w=u?A.c3:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.nO.av(0,t)
w=h
m=t
break
case"rainbow":w=new G.mS(1,A.k.H(g*360+e*40,360),0.75,1).iF()
A.d.a7(p)
p.push(new C.cJ(w.j(0.7),A.J,18))
break
default:w=h}return C.d7(C.dP(C.e5(A.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.v(l,o)),m)}}
B.aJc.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.aJi.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.YL.prototype={}
B.TU.prototype={
S(){var w=C.a([],x.aS)
return new B.aBd(new C.cn(null,x.A),w,A.cB,A.at,$,A.bv,0,C.a([],x.X),null,null)}}
B.aBd.prototype={
gab2(){var w=this.r
return new C.v(w.a/2,w.b/2)},
aYg(){return new G.mS(1,this.f.ae()*360,0.6,1).iF()},
ao9(d,e,f,g){var w=this,v=w.gab2().ao(0,new C.v(Math.cos(e),Math.sin(e)).aM(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new B.YL(v,new C.v(-t,s).aM(0,r).aM(0,u*f),w.Q*(0.6+w.f.ae()*0.9),w.aYg(),C.a([],x.g)))},
bzQ(d,e,f){return this.ao9(d,e,f,!1)},
bzP(d,e){return this.ao9(d,e,1,!1)},
cmX(){var w,v,u,t=this
A.d.a7(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bzP(40+w*u/5,v.ae()*3.141592653589793*2)},
bAI(){var w=this.r
this.bzQ(Math.min(w.a,w.b)*0.42,this.f.ae()*3.141592653589793*2,0.45)},
Z(){this.a0()
this.kM()},
l4(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.at))return
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
if(o.length!==0){m=A.d.gai(o)
j=n.a
f=m.a-j.a
j=m.b-j.b
j=Math.sqrt(f*f+j*j)>3
m=j}else m=!0
if(m)o.push(n.a)
if(o.length>260)A.d.cu(o,0)}else A.d.a7(n.e)}for(p=0;p<w.length;w.length===o||(0,C.K)(w),++p){n=w[p]
v=n.a
a1=!1
if(v.b<r)if(J.lD(v.a-s)!==J.lD(n.f-s)){v=n.a
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
B.l1("bell",D.aq8[A.k.U((1-A.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a4(w,new B.e6k(u),C.U(w).k("a4<1>")).gI(0)>0&&a2.ax)B.dL(70,"",300,0.6,0.8,"sine")
A.d.bm(w,new B.e6l(a2,u))},
cbw(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gab2()
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
if(A.o.H(s,3)===0)k.push(t)
if(m<16)break}return k},
gaRQ(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aE(0,w).aM(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aF(r,r,r,r,D.m6,r,r,r,new B.e68(s,d),r,r,r,r,"Share",r)],q),o=C.cj(new B.e69(s)),n=s.w
n=B.hp(A.cX,A.k.aa(n,1)+"x","Sun mass",2.5,0.3,new B.e6a(s),n)
w=s.x
w=B.hp(A.cX,A.k.aa(w,1)+"x","Time",3,0.2,new B.e6c(s),w)
v=s.Q
v=B.hp(A.cX,A.o.u(A.k.U(v)),"Planet size",16,3,new B.e6d(s),v)
u=s.ax
t=u?A.nu:M.qo
return B.jw(A.cX,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.u(C.a([n,w,v,new B.eE(C.a([new B.dy("Sound",u,new B.e6e(s),t,A.cX,r),new B.dy("Trails",s.z,new B.e6f(s),A.Ls,A.cX,r),new B.dy("Planets pull each other",s.y,new B.e6g(s),A.xl,A.cX,r)],q),r,r),new B.eE(C.a([new B.fe(A.m3,"Solar system",new B.e6h(s),A.cX,r),new B.fe(A.mI,"Comet",new B.e6i(s),A.c,r),new B.fe(A.m0,"Cluster",new B.e6j(s),A.c,r),new B.fe(D.wX,"Clear",new B.e6b(s),A.cH,r)],q),r,r)],q),A.m,r,A.e,A.R,0,A.p))}}
B.bhy.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.a_()
w=C.N()
w.r=D.TM.gq(0)
d.bd(new C.ac(0,0,0+g,0+f),w)
v=new C.f0()
v.dX(5)
for(w=d.a,u=0;u<70;++u){t=v.ae()
s=v.ae()
r=v.ae()
q=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
q.r=A.c.j(0.25+v.ae()*0.4).gq(0)
p=q.L()
w.drawCircle(t*g,s*f,r*1.2+0.3,p)
p.delete()}o=16+i.d*6
g=i.c
f=o*3.2
t=C.N()
s=x.O
t.sar(new C.bR(A.A,0.5,A.w,h,0,C.a([A.cX.j(0.45),A.K],s),h,h).az(0,C.bV(g,f)))
d.ak(g,f,t)
t=C.N()
t.sar(D.dUy.az(0,C.bV(g,o)))
d.ak(g,o,t)
for(g=i.b,f=g.length,n=0;n<g.length;g.length===f||(0,C.K)(g),++n){m=g[n]
t=m.e
if(t.length>1)for(r=m.d,u=1;q=t.length,u<q;++u){l=u/q
q=t[u-1]
k=t[u]
j=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
j.c=2.2*l+0.4
j.d=A.bV
j.r=r.j(l*0.8).gq(0)
p=j.L()
w.drawLine.apply(w,[q.a,q.b,k.a,k.b,p])
p.delete()}t=m.a
r=m.c
q=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
k=m.d
q.r=k.j(0.3).gq(0)
q.z=H.om
p=q.L()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
j=C.aq(k,A.x,0.5)
j.toString
q.sar(new C.bR(N.pK,0.5,A.w,h,0,C.a([A.c,k,j],s),h,h).az(0,C.bV(m.a,r)))
p=q.L()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.N()
t.c=2
t.r=A.j_.gq(0)
d.bK(g,f,t)
t=C.N()
t.r=A.c.gq(0)
d.ak(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,C.K)(g),++n){m=g[n]
t=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
t.r=A.c.j(0.7).gq(0)
p=t.L()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
aq(d){return!0}}
B.a9s.prototype={}
B.Uh.prototype={
S(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new B.bgV(new C.cn(null,x.A),w,v,A.cB,A.at,$,A.bv,0,C.a([],x.X),null,null)}}
B.bgV.prototype={
Z(){this.a0()
this.kM()},
bZE(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.e,v=k.r;w.length<A.k.U(k.x);){u=v.ae()*3.141592653589793*2
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
w.push(new B.a9s(new C.v(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.v(p*n,o*n),A.k.H(m*60+l,360)))}while(w.length>A.k.U(k.x))w.pop()},
l4(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.at))return
a2.bZE()
w=a2.f
A.d.bm(w,new B.epw(a2))
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
A.d.bm(w,new B.epx(a2))
if(w.length<a1&&a2.ch)B.l1("bell",12+a2.r.aB(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fE$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fE$
B.l1("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aF(l,l,l,l,D.m6,l,l,l,new B.epl(m,d),l,l,l,l,"Share",l)],k),i=C.cj(new B.epm(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cFh[w]
h.push(new B.dy(v.b,m.at===v.a,new B.epn(m,v),v.c,A.bl,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cq0[w]
u.push(new B.dy(t.b,m.ax===t.a,new B.epo(m,t),l,A.bl,l))}s=m.ch
r=s?A.nu:M.qo
r=C.a([new B.dy("Sound",s,new B.epp(m),r,A.bl,l)],k)
s=m.x
s=B.hp(A.bl,A.o.u(A.k.U(s)),"How many",150,15,new B.epq(m),s)
q=B.hp(A.bl,l,"Together",2.5,0,new B.epr(m),m.y)
p=B.hp(A.bl,l,"Apart",2.5,0,new B.eps(m),m.z)
o=B.hp(A.bl,l,"Same way",2.5,0,new B.ept(m),m.Q)
n=m.as
return B.jw(A.bl,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.u(C.a([new B.eE(h,"TOUCH",l),new B.eE(u,"LOOK",l),new B.eE(r,l,l),s,q,p,o,B.hp(A.bl,A.o.u(A.k.U(n)),"Speed",280,50,new B.epu(m),n)],k),A.m,l,A.e,A.R,0,A.p))}}
B.boT.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.a9s,D.b9W],x.O)
else{v=x.O
w=a4==="fly"?C.a([A.da,Q.aaT],v):C.a([D.b7n,D.b_L],v)}v=0+a6.a
u=0+a6.b
t=$.a_()
s=C.N()
s.sar(new C.a7(A.b1,A.b5,A.w,w,a3,a3).az(0,new C.ac(0,0,v,u)))
a5.bd(new C.ac(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){q=v[r].a
p=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
p.r=A.cJ.gq(0)
o=p.L()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
n.r=A.cJ.j(0.25).gq(0)
n.z=H.om
o=n.L()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new G.mS(1,j,0.7,1).iF()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
f.r=h.j(0.35*g).gq(0)
f.z=A.jj
o=f.L()
s.drawCircle(j.a,j.b,9,o)
o.delete()
j=k.a
f=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
f.r=A.c.j(g).gq(0)
o=f.L()
s.drawCircle(j.a,j.b,2.6,o)
o.delete()
break
case"bird":J.bH(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
e=Math.sin(l+j)*5
j=C.a([],m)
d=new C.aR(t,A.aq,a3,a3,j)
j.push(new C.b7(8,0))
j.push(new C.ao(-6,-7-e))
j.push(new C.ao(-2,0))
j.push(new C.ao(-6,7+e))
j.push(new C.bE())
j=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
j.r=h.gq(0)
o=j.L()
j=d.gbM().a.snapshot()
s.drawPath((d.e=new C.cG(j)).a,o)
o.delete()
s.restore()
break
default:J.bH(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
a0=Math.sin(n+j)*3
j=C.a([],m)
d=new C.aR(t,A.aq,a3,a3,j)
j.push(new C.b7(9,0))
j.push(new C.d_(0,-6,-7,a0))
j.push(new C.ao(-12,-4+a0))
j.push(new C.ao(-12,4+a0))
j.push(new C.ao(-7,a0))
j.push(new C.d_(0,6,9,0))
j=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
f=C.aq(h,A.cC,0.6)
f.toString
j.sar(new C.a7(A.a3,A.a7,A.w,C.a([h,f],q),a3,a3).az(0,D.elt))
o=j.L()
j=d.gbM().a.snapshot()
s.drawPath((d.e=new C.cG(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=A.cH
else a1=v==="scare"?A.cJ:A.bl
v=u?12:22
u=C.N()
u.b=A.ad
u.c=2.5
u.r=a1.j(0.8).gq(0)
a5.ak(a4,v,u)}},
aq(d){return!0}}
B.a9V.prototype={}
B.Ss.prototype={
S(){var w=C.a([],x.bi)
return new B.azP(w,A.cB,A.at,C.S(x.N,x.S),$,A.bv,0,C.a([],x.X),null,null)}}
B.azP.prototype={
gGR(){var w=this.r,v=18+A.k.U(w*0.85)
return A.o.D(A.k.U(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gaa9(){return 54-8*(this.r/100)},
Z(){this.a0()
this.kM()
B.yw("chain_burst").bw(new B.dyI(this),x.P)},
aUi(){return B.va("chain_burst",C.E(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
awo(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
A.d.a7(k)
l.z=l.y=!1
w=l.as=0
l.at=null
v=18+A.k.U(l.r*0.85)
for(u=l.e;w<v;++w){t=u.ae()*3.141592653589793*2
s=u.ae()
r=l.f
q=u.ae()
p=l.f
o=Math.cos(t)
n=Math.sin(t)
m=(30+l.r*0.45)*(0.6+u.ae()*0.8)
k.push(new B.a9V(new C.v(20+s*(r.a-40),20+q*(p.b-40)),new C.v(o*m,n*m),new G.mS(1,u.ae()*360,0.6,1).iF()))}},
Xo(d){var w,v=this
if(d==null)return 0
w=(v.fE$-d)/1000
if(w<0.4)return v.gaa9()*A.dU.av(0,w/0.4)
if(w<1.1)return v.gaa9()
if(w<1.5)return v.gaa9()*(1-(w-1.1)/0.4)
return 0},
l4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.at)||!j.Q)return
w=j.d
if(w.length===0)j.awo()
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
if(v!=null)n.push(new C.A(v,j.Xo(j.ax)))
for(v=A.d.gag(w),s=new C.hK(v,new B.dyJ());s.C();){r=v.gT(0)
n.push(new C.A(r.a,j.Xo(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.K)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fE$
B.dL(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eG()
break}}}if(!(j.at!=null&&j.Xo(j.ax)>0||A.d.bg(w,new B.dyK(j)))&&j.fE$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gGR()){if(j.as>=j.gGR()*1.5)k=3
else k=j.as>=j.gGR()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.m(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
B.Ay("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aUi()}else B.dL(120,"",300,0,0.3,"saw")}}},
aUh(d){this.n(new B.dyy(this,d))
this.aUi()},
ab3(){var w=0,v=C.j(x.H),u=this,t,s
var $async$ab3=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.cf(null,null,!0,null,new B.dyB(u),s,null,!0,!0,x.S),$async$ab3)
case 2:t=e
if(t!=null)u.aUh(t)
return C.h(null,v)}})
return C.i($async$ab3,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gGR(),t=w.x.h(0,""+w.r)
return B.jw(A.c3,A.fX,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cj(new B.dyF(w,t==null?0:t,u)),"CHAIN BURST",C.B(C.a([new B.fe(A.qk,"Levels",w.gbZF(),A.c3,v),new B.fe(A.jI,"New board",new B.dyG(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
arD(d,e,f){var w=null
return C.u(C.a([C.d(d,w,w,w,w,w,w,D.aJD,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bRB(d,e){return this.arD(d,e,A.c)}}
B.b7b.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.a_()
w=C.N()
w.r=D.D8.gq(0)
d.bd(new C.ac(0,0,0+e.a,0+e.b),w)
v=new B.cFm(d)
w=l.c
if(w!=null)v.$3(w,l.r.$1(l.d),A.c)
for(w=l.b,u=w.length,t=d.a,s=l.r,r=0;r<w.length;w.length===u||(0,C.K)(w),++r){q=w[r]
p=q.d
o=q.a
n=q.c
if(p!=null)v.$3(o,s.$1(p),n)
else{$.a_()
p=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
p.r=n.j(0.25).gq(0)
p.z=H.om
m=p.L()
t.drawCircle(o.a,o.b,12,m)
m.delete()
o=q.a
p=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
p.r=n.gq(0)
m=p.L()
t.drawCircle(o.a,o.b,8,m)
m.delete()}}},
aq(d){return!0}}
B.aIc.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.bt2.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpa()}}
B.aJ0.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.bti.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bq0()}}
B.aJf.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.btq.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bqf()}}
B.En.prototype={
gcFo(){return this.a.aE(0,this.b).gcj()>4}}
B.aaJ.prototype={}
B.TO.prototype={
S(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new B.bgu(new C.cn(null,x.A),w,v,A.cB,A.at,$,A.bv,0,C.a([],x.X),null,null)}}
B.bgu.prototype={
aLt(d){return new G.mS(1,A.o.H(d*29,360),0.6,1).iF()},
Y6(d){var w,v=D.AS.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.D(A.k.bH(d.a/s*t),0,t-1)
return v[A.o.H(w,u)]+12*A.o.ed(w,u)},
aNZ(d){A.d.bm(this.e,new B.e1O(this,d))},
cja(d,e,f){var w=f.aE(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aE(0,e).gcj()
return d.aE(0,e.ao(0,w.aM(0,A.k.D((d.aE(0,e).a*v+d.aE(0,e).b*u)/t,0,1)))).gcj()},
auX(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
A.d.a7(f)
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
k=g.Y6(new C.v((q+n)/2,(p+m)/2))
p=r?o:new C.v(n,p)
r=r?l:new C.v(q,m)
f.push(new B.En(p,r,k,new G.mS(1,A.o.H(k*29,360),0.6,1).iF()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.v(v*(0.1+i*0.16+r),w)
k=g.Y6(h)
f.push(new B.En(h,h,k,new G.mS(1,A.o.H(k*29,360),0.6,1).iF()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.v(v*(0.08+w.ae()*0.84),u*(0.2+w.ae()*0.65))
k=g.Y6(h)
f.push(new B.En(h,h,k,new G.mS(1,A.o.H(k*29,360),0.6,1).iF()))}}},
Z(){this.a0()
this.kM()},
bZH(d,e){var w,v=this.fE$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
B.l1(v,d.c+12,w,A.k.D(0.25+e/900,0.25,0.8))}},
l4(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.at))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new B.aaJ(new C.v(a2.w.a*(0.2+v.ae()*0.6),6),new C.v((v.ae()-0.5)*40,0),new G.mS(1,v.ae()*360,0.5,1).iF()))}if(u>3)a2.as=0
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
if(a1<0){a2.bZH(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.v(m.a-l*k,m.b-n*k)}}}}}A.d.bm(w,new B.e2c(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aF(p,p,p,p,C.V(q.ay?A.nu:M.qo,A.al,p,p,p,21),p,p,p,new B.e21(q),p,p,p,p,"Sound",p),C.aF(p,p,p,p,D.m6,p,p,p,new B.e22(q,d),p,p,p,p,"Share",p)],o),m=C.cj(new B.e23(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.cIo[w]
l.push(new B.dy(v.b,q.x===v.a,new B.e24(q,v),v.c,A.b9,p))}u=C.a([],o)
for(t=J.aV(D.AS.geb(D.AS));t.C();){s=t.gT(t)
u.push(new B.dy(s,q.y===s,new B.e25(q,s),p,A.b9,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.asW[w]
t.push(new B.dy(r.b,q.z===r.a,new B.e26(q,r),p,A.b9,p))}s=q.Q
return B.jw(A.b9,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.u(C.a([new B.eE(l,"TOOL",p),new B.eE(u,"SCALE",p),new B.eE(t,"SOUND",p),B.hp(A.b9,A.k.aa(s,1)+"/s","Marbles",4,0.3,new B.e27(q),s),new B.eE(C.a([new B.fe(D.bs2,"Stairs",new B.e28(q),A.b9,p),new B.fe(Ab.Lf,"Pinball",new B.e29(q),A.c,p),new B.fe(A.m0,"Random",new B.e2a(q),A.c,p),new B.fe(D.wX,"Clear",new B.e2b(q),A.cH,p)],o),p,p)],o),A.m,p,A.e,A.R,0,A.p))}}
B.bea.prototype={
a6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.a_()
w=C.N()
w.sar(D.bHL.az(0,new C.ac(0,0,a0,a1)))
a2.bd(new C.ac(0,0,a0,a1),w)
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
if(Math.sqrt(m*m+k*k)>4){q=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
q.b=A.ad
q.d=A.bV
q.c=12+j
q.r=i.j(0.2+h).gq(0)
q.z=A.jj
g=q.L()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()
q=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
q.b=A.ad
q.d=A.bV
q.c=6
q.r=C.aq(i,A.c,r*0.7).gq(0)
g=q.L()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()}else{p=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
p.r=i.j(0.25+h).gq(0)
p.z=A.jj
g=p.L()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
p=C.aq(i,A.x,0.4)
p.toString
j.sar(new C.bR(N.pK,0.5,A.w,d,0,C.a([A.c,i,p],v),d,d).az(0,C.bV(q,9)))
g=j.L()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=C.N()
u.c=5
u.d=A.bV
u.r=A.aA.gq(0)
a2.bK(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,C.K)(a0),++t){f=a0[t]
u=f.a
q=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
p=f.c
q.r=p.j(0.3).gq(0)
q.z=A.qz
g=q.L()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
q.sar(new C.bR(N.pK,0.5,A.w,d,0,C.a([A.c,p],v),d,d).az(0,C.bV(f.a,7)))
g=q.L()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
aq(d){return!0}}
B.abd.prototype={}
B.TT.prototype={
S(){var w=C.a([],x.gB)
return new B.aBc(new C.cn(null,x.A),w,A.cB,A.at,$,A.bv,0,C.a([],x.X),null,null)}}
B.aBc.prototype={
gaUj(){var w=this.w
return new C.v(w.a/2,w.b/2)},
av7(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
awk(d){var w=D.AS.h(0,this.y),v=5-d,u=w.length
return w[A.o.H(v,u)]+12*A.o.ed(v,u)},
Z(){this.a0()
this.kM()},
aMO(){var w,v,u,t,s=this.e
A.d.a7(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new B.abd(w,A.k.H(t/v+u,1)))}},
l4(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.at))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fE$
if(p.Q){r=p.z
s=p.awk(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
B.l1(r,s+12,q,0.55)}}}},
bZI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aE(0,h.gaUj()),e=f.gcj()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.av7(v)-e)
if(u<w){g.a=v
w=u}}if(w>28)return
t=A.k.H((Math.atan2(f.b,f.a)+1.5707963267948966)/6.283185307179586+1,1)
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
m=h.av7(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new B.e5I(h,n).$0()
h.c.e3()
return}}h.n(new B.e5J(g,h,t))
if(h.Q)B.l1(h.z,h.awk(g.a)+12,700,0.5)
C.eG()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aF(q,q,q,q,C.V(r.Q?A.nu:M.qo,A.al,q,q,q,21),q,q,q,new B.e5Q(r),q,q,q,q,"Sound",q),C.aF(q,q,q,q,D.m6,q,q,q,new B.e5R(r,d),q,q,q,q,"Share",q)],p),n=C.cj(new B.e5S(r)),m=r.x
m=B.hp(A.bE,""+A.k.U(m),"Tempo",180,40,new B.e5T(r),m)
w=C.a([],p)
for(v=J.aV(D.AS.geb(D.AS));v.C();){u=v.gT(v)
w.push(new B.dy(u,r.y===u,new B.e5U(r,u),q,A.bE,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.asW[t]
v.push(new B.dy(s.b,r.z===s.a,new B.e5V(r,s),q,A.bE,q))}return B.jw(A.bE,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.u(C.a([m,new B.eE(w,"SCALE",q),new B.eE(v,"SOUND",q),new B.eE(C.a([new B.fe(A.dP,"Demo",new B.e5W(r),A.bE,q),new B.fe(A.m0,"Random",new B.e5X(r),A.c,q),new B.fe(D.wX,"Clear",new B.e5Y(r),A.cH,q)],p),q,q)],p),A.m,q,A.e,A.R,0,A.p))}}
B.bhz.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.a_()
w=C.N()
w.r=D.TM.gq(0)
a5.bd(new C.ac(0,0,0+a6.a,0+a6.b),w)
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
r.sar(new C.a7(A.b5,A.b1,A.w,C.a([A.c.j(0.05),A.c.j(0.5)],q),a4,a4).az(0,new C.ac(o,m,o+2,m+u)))
a5.bK(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new G.mS(1,A.k.H(s.$1(l)*23,360),0.55,1).iF()
o=v.$1(l)
m=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
m.b=A.ad
m.c=1.6
m.r=k.j(0.35).gq(0)
j=m.L()
r.drawCircle(p,n,o,j)
j.delete()
o=D.cYp[A.o.H(A.o.H(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.lP(new C.es(o,a4,a4,A.cU,a4,a4,a4,a4,a4,a4,new C.F(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a6,A.cn,new C.k4(1),a4,a4,a4,a4,A.cm,a4)
i.fq()
o=i.b.c
m=J.fyj(v.$1(l))
h=i.b.a.c
i.a6(a5,new C.v(p+-o/2,n+(m-h.gbh(h)-2)))}w=C.N()
w.sar(D.dUc.az(0,C.bV(t,16)))
a5.ak(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.K)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new G.mS(1,A.k.H(s.$1(a0)*23,360),0.55,1).iF()
a2=A.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fyj(v.$1(a0))
a0=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
a0.b=A.ad
a0.c=3*a2
a0.r=k.j(a2).gq(0)
j=a0.L()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
d.r=k.j(0.35).gq(0)
d.z=A.jj
j=d.L()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
d.sar(new C.bR(N.pK,0.5,A.w,a4,0,C.a([A.c,k],q),a4,a4).az(0,C.bV(new C.v(h,a1),8.5)))
j=d.L()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
aq(d){return!0}}
B.aIZ.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.btg.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpZ()}}
B.aJ_.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.bth.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bq_()}}
B.rB.prototype={}
B.b64.prototype={}
B.TR.prototype={
S(){var w=x.S
return new B.aBa(C.a([],x.aq),C.S(w,w),C.aZ(w),D.eqB)}}
B.aBa.prototype={
Z(){this.a0()
B.yw("molecule_maker").bw(new B.e5c(this),x.P)},
ags(d){var w={}
w.a=0
this.f.bE(0,new B.e4Z(w,d))
return w.a},
gaUp(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)t.push(w[u].a)
return B.hHl(t,this.f,D.a_k[this.d])},
bZZ(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.f0()
w.dX(t*7+3)
t=v.y
v.n(new B.e4T(v,e,t.a,w,t.b))
B.vd("pop",u.length,90,0.35)},
atu(d){return this.n(new B.e4U(this))},
aUq(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c_4(d){this.n(new B.e4Y(this,this.aUq(d)))},
cfM(){var w=this.r
if(w==null)return
this.n(new B.e4X(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a_k[k.d],h=k.gaUp()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.uX.h(0,w[u].a).a-k.ags(u)
w=i.c
w=w.gdH(w)
t=w.di(w,new B.e56(),x.N).aG(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.bl:A.ht
r=x.p
s=C.u(C.a([new C.C(A.fJ,B.eXm(w,s,h&&k.d<12?new B.fe(A.ji,"Next",new B.e57(k),A.bl,j):j),j),C.D(C.cj(new B.e58(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new B.dy(p+D.a_k[u].b,k.d===u,new B.e59(k,u),j,A.ht,j))}q=C.a([],r)
for(p=D.uX.gdH(D.uX),p=p.gag(p);p.C();){o=p.gT(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.eP:m.b
q.push(new B.dy(n+" \xb7 "+m.a,!1,new B.e5a(k,o),j,l,j))}return B.jw(A.ht,A.fX,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.u(C.a([new B.eE(w,"GOAL",j),new B.eE(q,"ADD",j),new B.eE(C.a([new B.dy("Remove selected atom",!1,k.gcfL(),A.e4,A.cH,j),new B.dy("Clear all",!1,k.gc__(k),A.jI,A.aL,j)],r),j,j)],r),A.m,j,A.e,A.R,0,A.p))}}
B.beR.prototype={
a6(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.H(t*37,10)
r=A.o.H(t*53,10)
$.a_()
q=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
q.r=A.ht.j(0.03).gq(0)
p=q.L()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bE(0,new B.dhn(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.uX.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.bV(j,26)
if(q===t){$.a_()
h=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
h.r=A.aL.j(0.4).gq(0)
h.z=A.jj
p=h.L()
u.drawCircle(j.a,j.b,34,p)
p.delete()}j=m.b
$.a_()
h=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
g=l.b
f=C.aq(g,A.c,0.5)
f.toString
e=C.aq(g,A.x,0.5)
e.toString
h.sar(new C.bR(A.I_,0.5,A.w,a3,0,C.a([f,g,e],r),F.arg,a3).az(0,i))
p=h.L()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?A.aG:A.c
d=new C.lP(new C.es(n,a3,a3,A.cU,a3,a3,a3,a3,a3,a3,new C.F(!0,j,a3,a3,a3,a3,19,A.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),A.a6,A.cn,new C.k4(1),a3,a3,a3,a3,A.cm,a3)
d.fq()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a6(a4,new C.v(n.a-h/2,n.b-j.gbh(j)/2))
n=k===0
a0=n?A.bn:A.aX
j=m.b
h=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
h.r=a0.gq(0)
p=h.L()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.t(k)
a1=new C.lP(new C.es(n,a3,a3,A.cU,a3,a3,a3,a3,a3,a3,A.ox),A.a6,A.cn,new C.k4(1),a3,a3,a3,a3,A.cm,a3)
a1.fq()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a6(a4,new C.v(n.a+(20-h/2),n.b+(-20-j.gbh(j)/2)))}if(n===0){d=C.iS(a3,a3,a3,a3,D.ez0,A.a6,A.cn,a3,A.eE,A.cm)
d.fq()
d.a6(a4,new C.v((w-d.b.c)/2,v/2))}},
aq(d){return!0}}
B.SP.prototype={
S(){var w=x.s
return new B.bfK(C.a([],w),C.a([],w))}}
B.bfK.prototype={
Z(){this.a0()
this.asV()
B.yw("dna_lab").bw(new B.dGC(this),x.P)},
gaZt(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a0i.h(0,w[u])
t.toString
s.push(t)}return A.d.fM(s)},
ga6L(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.an(this.gaZt(),w,v))}return u},
asV(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.f0()
k.dX(l.e*31+l.d*7+C.AL(new C.Q(Date.now(),0,!1)))
w=new B.dGr(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mh(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=A.a.an(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a0i.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.fM(r))}if(!A.d.bg(t,new B.dGq()))break}l.f=v
A.d.a7(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.aXj()},
aXj(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=B.fGS(s.ga6L()[r])
v=J.dE(D.AT.geb(D.AT),new B.dGs(w)).dA(0)
u=new C.f0()
u.dX(r+s.e)
A.d.fw(v,u)
u=C.a([w],x.s)
A.d.v(u,C.de(v,0,C.dJ(3,"count",x.S),C.U(v).c))
t=new C.f0()
t.dX(s.e*3+r)
A.d.fw(u,t)
s.z=u},
aUo(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.d2Z.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a0i.h(0,w.f[v])
u.toString
break A}u=B.fGS(w.ga6L()[v])
break A}w.n(new B.dGp(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new B.dGA(),e=new B.dGv(),d=h.d===2?h.gaZt():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,P.mg,g,g,g),A.av],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.c3.j(0.18):A.K
q=new C.b3(10,10)
p=new C.ay(t.length===s?A.c3:A.bG,1,A.r,-1)
o=C.a([],a0)
for(n=h.ga6L()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.cC(A.aZ,A.e,A.R,A.m,g,A.p,g,0,o,g),A.h,g,g,new C.o(r,g,new C.c2(p,p,p,p),new C.bv(q,q,q,q),g,g,A.n),g,g,g,D.beC,A.ef,g,g,g))}v.push(C.c8(A.bH,u,A.bx,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.c8(A.bH,u,A.bx,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a3(34,g,new C.cw(A.A,g,g,C.V(A8.Lm,j<t.length?A.aA:A.bG,g,g,g,14),g),g))
A.d.v(v,C.a([new C.C(A.JO,C.c8(A.bH,u,A.bx,0,0),g)],a0))}v.push(A.ar)
v.push(C.d(w,g,g,g,g,g,g,P.mg,g,g,g))
v.push(A.av)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.bl.j(0.25):A.dv
q=new C.b3(12,12)
o=j<t.length
p=new C.ay(o?A.bl:A.bf,1,A.r,-1)
if(o){o=D.AT.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.c1
u.push(C.p(g,new C.x(o,g,new C.F(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.h,g,g,new C.o(r,g,new C.c2(p,p,p,p),new C.bv(q,q,q,q),g,g,A.n),g,g,g,g,A.ei,g,g,g))}v.push(C.c8(A.bH,u,A.bx,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(C.c8(A.bH,u,A.bx,0,0))}v.push(A.ay)
u=h.w
if(u.length!==0){t=h.r.length
v.push(B.eXm(u,t>=(h.d===2?3:9)?A.bl:A.c3,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(B.eXm(u,A.c3,g))}v.push(A.T)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,E.R3,g,g,g))
v=C.ch(C.u(v,A.F,g,A.e,A.j,0,A.p),A.q,g,A.z,g,A.bB,g,g,A.aj)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new B.dy(D.cNF[j],h.d===j,new B.dGw(h,j),g,A.c3,g))
u=C.a([new B.eE(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bG(A.a3,g,g,new B.fe(A.jI,"New strand",new B.dGx(h),A.bl,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.K)(t),++l){i=t[l]
q=D.AT.h(0,i)
q.toString
a0.push(new B.fe(D.Xk,q,new B.dGy(h,i),A.c3,g))}u.push(C.c8(A.bH,a0,A.bx,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.aqd:D.cy4
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.b3(14,14)
a0.push(C.aH(g,C.p(A.A,new C.x(k,g,D.ezg,g,g,g,g,g,g,g,g,g),A.h,g,g,new C.o(e.$1(k),g,g,new C.bv(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new B.dGz(h,k),g,g,g,g,g,g,!1,A.ae))}u.push(C.B(a0,A.m,g,A.qy,A.j,0,g,g))}return B.jw(A.c3,A.fX,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.u(u,A.m,g,A.e,A.R,0,A.p))}}
B.T4.prototype={
S(){return new B.aAi(A.bv,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
B.aAi.prototype={
Z(){var w,v=this
v.a0()
w=v.qR(v.gc_0())
w.kn(0)
v.d!==$&&C.aO()
v.d=w
B.yw("ecosystem").bw(new B.dJr(v),x.P)},
p(){var w=this.d
w===$&&C.c()
w.p()
this.bpo()},
gaIO(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c_1(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length===0||w-A.d.gai(v)[3]>0.25){w=C.z(m.f,x.i)
w.push(m.w)
v.push(w)
if(v.length>160)A.d.cu(v,0)}if(m.gaIO()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.H(A.k.bH(w),5)===0)B.va("ecosystem",C.E(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.n(new B.dJe())},
a7V(d){this.n(new B.dJd(this,d))
B.vd("pop",3,120,0.4)},
c_3(){return this.n(new B.dJf(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.u(C.a([new C.C(D.V9,B.eXm(r,t.gaIO()?A.bl:A.cH,s),s),C.D(new C.C(D.bf8,C.bu(C.m(18),C.b1(s,s,s,new B.bad(t.f,t.r,t.w,s),A.fi),A.ap),s),1),new C.C(A.fo,C.d("Alive together: "+A.k.U(t.Q)+" s     Best: "+A.k.U(t.as)+" s",s,s,s,s,s,s,D.eFW,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=B.hp(A.bl,A.k.aa(w,1)+"\xd7","Grass growth",2,0.2,new B.dJj(t),w)
v=t.y
v=B.hp(A.c4,A.k.aa(v,1)+"\xd7","Rabbit breeding",2,0.3,new B.dJk(t),v)
u=t.z
return B.jw(A.bl,A.fX,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.u(C.a([w,v,B.hp(A.cX,A.k.aa(u,1)+"\xd7","Fox hunting",2,0.3,new B.dJl(t),u),new B.eE(C.a([new B.dy("Drought",!1,new B.dJm(t),A.xj,A.aL,s),new B.dy("Disease",!1,new B.dJn(t),D.brX,A.bE,s),new B.dy("+ Foxes",!1,new B.dJo(t),s,A.cX,s),new B.dy("+ Rabbits",!1,new B.dJp(t),s,A.c4,s),new B.dy("Reset",!1,t.gc_2(),A.jI,A.b_,s)],q),s,s)],q),A.m,s,A.e,A.R,0,A.p))}}
B.bad.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.a_()
w=C.N()
w.sar(D.bFQ.az(0,new C.ac(0,0,d,a0)))
a1.bd(new C.ac(0,0,d,a0),w)
w=h.b
a0=C.aq(A.tY,A.bn,A.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.N()
t.r=a0.gq(0)
a1.bd(new C.ac(0,v,d,v+u),t)
s=A.k.U(w[0]*0.9)
r=new C.f0()
r.dX(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.ae()*e
o=f*(0.6+0.4*r.ae())
t=Math.sin(a0+q)
n=r.ae()
m=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
m.r=A.hh.gq(0)
m.c=1.6
l=m.L()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new B.cYR(h,a2,f,a1)
k.$5(Math.min(A.k.U(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.U(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.ac(10,a0,e,u)
t=C.N()
t.r=D.b3K.gq(0)
a1.bd(new C.ac(0,f,d,f+g),t)
i=C.N()
i.r=A.dv.gq(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.L()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new B.cYT(h,j,a1)
g.$3(0,100,A.bn)
g.$3(1,120,A.c4)
g.$3(2,24,A.cX)
g=new B.cYS(a1,j)
g.$3("Grass "+A.k.U(w[0]),A.bn,16)
g.$3("Rabbits "+A.k.U(w[1]),A.c4,102)
g.$3("Foxes "+A.k.U(w[2]),A.cX,200)},
aq(d){return!0}}
B.aIp.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.aOI.prototype={
gu7(){return A.d.cI(this.a,0,new B.bC5())}}
B.Sk.prototype={
S(){var w=x.S
return new B.bfr(B.hEv(),C.bY(5,0,!1,w),C.aZ(w),A.bv,null,null)}}
B.bfr.prototype={
gv4(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cI(t,0,new B.duT())},
Z(){var w,v=this
v.a0()
w=v.qR(new B.dv5(v))
w.kn(0)
v.x!==$&&C.aO()
v.x=w
B.yw("balance_lab").bw(new B.dv6(v),x.P)},
p(){var w=this.x
w===$&&C.c()
w.p()
this.bp2()},
cpT(d){var w,v=this
v.n(new B.duU(v,d))
B.vd("click",v.f[d],60,0.4)
if(v.gv4()===v.d[v.e].gu7()&&v.r.J(0,v.e)){B.vd("zap",10,260,0.5)
w=v.r
w=C.z(w,C.a2(w).k("ck.E"))
B.va("balance_lab",C.E(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.J(k,new B.duZ(),C.U(k).k("J<1,n>")).aG(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aG(k," + ")
if(o.gv4()===m[o.e].gu7())s="\u2696\ufe0f Balanced! "+m[o.e].gu7()+" = "+o.gv4()+". The torques are equal, so the seesaw stays level."
else s=o.gv4()>m[o.e].gu7()?"The right side is too strong ("+o.gv4()+" vs "+m[o.e].gu7()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].gu7()+" vs "+o.gv4()+"). Add weight to the right, or place it further from the middle."
k=o.gv4()===m[o.e].gu7()?A.bl:A.aL
k=B.bwb(s,k,o.gv4()===m[o.e].gu7()&&o.e<m.length-1?new B.fe(A.ji,"Next",new B.dv_(o),A.bl,n):n)
w=C.D(C.cj(new B.dv0(o,l)),1)
u=j.length===0?"0":j
u=C.D(C.d("Left torque\n"+u+" = "+m[o.e].gu7(),n,n,n,n,n,n,D.aKN,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.u(C.a([new C.C(D.V9,k,n),w,new C.C(D.acF,C.B(C.a([u,C.D(C.d("Right torque\n"+r+" = "+o.gv4(),n,n,n,n,n,n,D.aKN,A.dM,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new B.dy(w+p,o.e===v,new B.dv1(o,v),n,A.aL,n))}return B.jw(A.aL,A.fX,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.u(C.a([new B.eE(u,"LEVEL",n),new B.eE(C.a([new B.dy("Clear right side",!1,new B.dv2(o),A.jI,A.cH,n)],q),n,n)],q),A.m,n,A.e,A.R,0,A.p))}}
B.b6g.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.aR($.a_().r,A.aq,null,null,C.a([],x.v))
i.E(new C.b7(h,f))
w=f+70
i.E(new C.ao(h-30,w))
i.E(new C.ao(h+30,w))
i.E(new C.bE())
v=C.N()
v.r=A.ai.gq(0)
d.aQ(i,v)
v=h-120
i=C.N()
i.r=A.aI.gq(0)
d.bd(new C.ac(v,w,v+240,w+8),i)
i=d.a
J.bH(i.save())
i.translate(h,f)
d.kG(0,j.b)
u=g*5.8
t=C.bN(new C.ac(-u,-9,u,9),A.hD)
w=C.N()
w.sar(D.bIs.az(0,new C.ac(t.a,t.b,t.c,t.d)))
d.b0(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.a_()
v=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
v.r=A.hN.gq(0)
v.c=1.5
r=v.L()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
B.f8K(d,""+Math.abs(s),new C.v(w,22),A.c1,10)}q=new B.cxU(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,A.b_)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],A.c3)
if(w[s]===0){l=C.bN(C.d9(new C.v(m,-22),22,v),A.hD)
$.a_()
k=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
k.b=A.ad
k.c=1.4
k.r=A.bf.gq(0)
r=k.L()
i.drawRRect(C.fs(l),r)
r.delete()
B.f8K(d,"+",new C.v(m,-22),A.c1,14)}}i.restore()
$.a_()
i=C.N()
i.r=(j.e?A.bl:A.aJ).gq(0)
d.ak(new C.v(h,f),7,i)},
aq(d){return!0},
gju(){return this.e}}
B.Ti.prototype={
S(){return new B.bfW(C.a([16,32,12,24],x.t),C.aZ(x.S),A.bv,null,null)}}
B.bfW.prototype={
gZw(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gabc(){var w=this.gZw(),v=this.r,u=D.asF[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.d6(this.d,x.S).a<4)
else w=!1
return w},
Z(){var w,v=this
v.a0()
w=v.qR(new B.dNj(v))
w.kn(0)
v.x!==$&&C.aO()
v.x=w
B.yw("gear_lab").bw(new B.dNk(v),x.P)},
p(){var w=this.x
w===$&&C.c()
w.p()
this.bpw()},
c_5(d,e){var w,v=this
v.n(new B.dN9(v,d,e))
if(v.gabc()&&v.w.J(0,v.r)){B.vd("zap",8,240,0.45)
w=v.w
w=C.z(w,C.a2(w).k("ck.E"))
B.va("gear_lab",C.E(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.gZw(),n=r.gZw(),m=D.asF[r.r].a
m=r.gabc()?"\u2705 Done! Ratio "+A.k.aa(r.gZw(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gabc()?A.bl:A.cX
v=r.d
u=x.p
n=C.u(C.a([new C.C(D.V9,B.bwb(m,w,r.gabc()&&r.r<7?new B.fe(A.ji,"Next",new B.dNd(r),A.bl,q):q),q),C.D(C.b1(q,q,q,new B.bbG(v,r.f,q),A.fi),1),new C.C(D.acF,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.aa(r.gZw(),2)+"   \xb7   Output "+A.k.aa(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.aa(1/n,2),q,q,q,q,q,q,O.a3X,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new B.dy(m+s,r.r===t,new B.dNe(r,t),q,A.cX,q))}p=r.e
u=C.a([new B.eE(o,"GOAL",q),B.hp(A.b_,""+A.k.U(p)+" rpm","Input speed",120,10,new B.dNf(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new B.asX("Gear "+s+" teeth",p,new B.dNg(r,t),8,40,D.cWb[t],""+p,q))}return B.jw(A.cX,A.fX,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.u(u,A.m,q,A.e,A.R,0,A.p))}}
B.bbG.prototype={
bJG(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.a_(),j=C.a([],x.v),i=new C.aR(k.r,A.aq,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.dVi,D.dZO,D.eds,D.e5q],s=v===0,r=0;r<4;++r){q=t[r]
p=q.a
o=u+p*h
n=e+q.b
m=k+Math.cos(o)*n
l=w+Math.sin(o)*n
if(s&&p===0){p=new C.b7(m,l)
j.push(p)
m=i.f
if(m!=null)p.bC(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}else{p=new C.ao(m,l)
j.push(p)
m=i.f
if(m!=null)p.bC(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}}}i.E(new C.bE())
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
n=A.d.ft(g,A.pP)
m=-n-6
l=n+6
r=e.a
u=e.b
k=Math.min(r/(o-p),u/(l-m))*0.96
s=d.a
J.bH(s.save())
s.translate(r/2-(p+o)/2*k,u/2-(m+l)/2*k)
d.bV(0,k)
j=this.c
u=w[0]
r=w[1]
i=-j*u/r+3.141592653589793/r
r=w[2]
u=w[3]
h=new B.d4P(this,d)
h.$6$back(new C.v(t,0),g[2],r,i,A.du,!0)
h.$5(new C.v(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.dk)
h.$5(new C.v(0,0),g[0],w[0],j,A.mq)
h.$5(new C.v(t,0),g[1],w[1],i,A.fS)
s.restore()
s=new B.d4Q(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.b_)
s.$3("2+3 \xb7 shared axle",t,A.cX)
s.$3("4 \xb7 output",q,A.bl)},
aq(d){return!0}}
B.St.prototype={
S(){var w=$.au()
return new B.bfE(new C.ap(new C.bc("Meet me at noon",A.b0,A.aM),w),new C.ap(new C.bc("LEMON",A.b0,A.aM),w),C.aZ(x.S))}}
B.bfE.prototype={
Z(){this.a0()
this.aTk()
B.yw("cipher_lab").bw(new B.dz4(this),x.P)},
p(){var w=this.d,v=$.au()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
aTk(){this.y=1+A.cB.aB(25)
this.z=0},
ga7c(){var w=this
return B.a_E(B.a_E(D.Fo[w.x],w.y),-w.z)===D.Fo[w.x]},
gaun(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=B.a_E(u,v.w)
break A}if(1===t){w=new C.J(C.a(B.a_E(u,0).split(""),x.s),new B.dyN(),x.dv).fM(0)
break A}w=B.hQT(u,v.e.a.a)
break A}return w},
aOR(d){var w,v,u,t,s,r=null,q=C.bY(26,0,!1,x.S)
for(w=new C.cY(d.toUpperCase()),v=x.e8,w=new C.bU(w,w.gI(0),v.k("bU<bS.E>")),v=v.k("bS.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.ft(q,A.yS))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.b3(2,2)
v.push(new C.bF(1,A.bp,C.u(C.a([C.p(r,r,A.h,r,r,new C.o(A.b_,r,r,new C.bv(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.K7,r,r,r,r),new C.x(C.jv(65+s),r,D.eHD,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.m8,A.j,0,A.p),r))}return new C.a3(r,70,C.B(v,A.dF,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=C.a([C.aK(o,A.U,!1,o,!0,A.q,o,C.aL(),p.d,o,o,o,o,o,2,C.bm(o,new C.b2(4,C.m(14),A.V),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l7,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dyW(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,D.eC9,!0,A.a6,o,A.am,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,C.a([A.T,C.aK(o,A.U,!1,o,!0,A.q,o,C.aL(),p.e,o,o,o,o,o,2,C.bm(o,new C.b2(4,C.m(14),A.V),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l7,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dyX(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.ix,!0,A.a6,o,A.am,o,o,o,o)],v))}w.push(A.ay)
w.push(D.f5A)
w.push(A.av)
v=A.b_.j(0.12)
u=C.m(14)
t=C.H(A.b_.j(0.4),A.r,1)
w.push(C.p(o,C.yO(p.gaun().length===0?"\u2026":p.gaun(),D.eGG,o),A.h,o,o,new C.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bB,o,o,o))
w.push(A.ab)
w.push(B.bwb(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.b_,o))
w.push(A.ab)
w.push(D.eOu)
w.push(A.av)
w.push(p.aOR(p.gaun()))
w.push(A.av)
w.push(D.eQL)
s=C.cL(w,o,A.bB,o,o,A.aj,!1)}else{w=B.bwb("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aL,o)
v=C.d(B.a_E(D.Fo[p.x],p.y),o,o,o,o,o,o,D.eHb,o,o,o)
u=(p.ga7c()?A.bl:A.b_).j(0.14)
t=C.m(14)
r=C.H((p.ga7c()?A.bl:A.b_).j(0.5),A.r,1)
t=C.a([w,A.ab,D.f_I,v,A.T,D.eVy,C.p(o,C.d(B.a_E(B.a_E(D.Fo[p.x],p.y),-p.z),o,o,o,o,o,o,D.eIC,o,o,o),A.h,o,o,new C.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bB,o,o,o),A.ab,p.aOR(B.a_E(D.Fo[p.x],p.y)),A.P],x.p)
if(p.ga7c())t.push(B.bwb("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.bl,new B.fe(A.jI,"Next",new B.dyY(p),A.bl,o)))
s=C.cL(t,o,A.bB,o,o,A.aj,!1)}w=p.f
v=x.p
w=C.a([new B.eE(C.a([new B.dy("Make a secret",w===0,new B.dyZ(p),A.j3,A.b_,o),new B.dy("Crack a code",w===1,new B.dz_(p),A.ql,A.aL,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new B.dy(n[q],p.r===q,new B.dz0(p,q),o,A.b_,o))
v=C.a([new B.eE(u,o,o)],v)
if(p.r===0){u=p.w
v.push(B.hp(A.b_,""+u,"Shift",25,1,new B.dz1(p),u))}A.d.v(w,v)}else{v=p.z
w.push(B.hp(A.aL,""+v,"Shift back",25,0,new B.dz2(p),v))}return B.jw(A.b_,A.fX,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.u(w,A.m,o,A.e,A.R,0,A.p))}}
B.aI4.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.aIx.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.fF.prototype={}
B.vj.prototype={
aI3(d,e,f,g){var w=this
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
B.a83.prototype={}
B.a97.prototype={}
B.a2i.prototype={
b80(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.he()?-1:1
v=t.ae()*3.141592653589793*2
u=f*(0.3+t.ae())
s.push(new B.a83(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ae()*0.45));++r}},
bWO(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bm(w,new B.bHB())},
agT(d,e,f,g){var w="p"+this.c++,v=new B.vj(w,e,f,g)
v.aI3(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bm(this.b,new B.bHM(e))},
a7(d){A.d.a7(this.a)
A.d.a7(this.b)},
cxt(d,e,f,g,h){return A.d.bg(this.b,new B.bHH(e,f,g,h))},
azI(d,e,f,g){var w
if(d===f||this.cxt(0,d,e,f,g))return null
w=new B.a97(d,e,f,g)
this.b.push(w)
return w},
b0R(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
b0Q(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
aju(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c_6(d){var w,v=d.b
switch(v){case"bulb":return 10
case"motor":return 6
case"buzzer":return 25
case"heater":return 4
case"radio":return 30
case"tv":return 50
case"resistor":return d.r
case"pot":return 1+99*d.f
case"voltmeter":return 1e6
case"ammeter":return 0.02}w=D.t9.h(0,v)
if(w!=null)return w.a
return 100},
a5e(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.d+=a1
d.bWO(a1)
d.w=Math.max(0,d.w-a1)
w=Math.min(a1*6,0.12)
for(v=d.a,u=v.length,t=a1*0.25,s=0;s<u;++s){r=v[s]
if(r.b==="crank")r.f=Math.max(0,r.f-t)}u=x.S
q=C.S(x.N,u)
p=new B.bHO(q)
o=C.a([],x.t)
n=new B.bHN(o)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.K)(v),++s){r=v[s]
p.$2(r,0)
p.$2(r,1)}for(m=0;m<q.a;++m)o.push(m)
for(t=d.b,l=t.length,s=0;s<t.length;t.length===l||(0,C.K)(t),++s){k=t[s]
j=n.$1(p.$2(k.a,k.b))
i=n.$1(p.$2(k.c,k.d))
if(j!==i)o[j]=i}h=C.S(u,u)
g=new B.bHQ(h,n,p)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,C.K)(v),++s){r=v[s]
g.$2(r,0)
g.$2(r,1)}f=h.a
if(f===0)return
s=0
for(;;){if(!(s<t)){e=0
break}r=v[s]
u=r.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){e=g.$2(r,1)
break}++s}d.cmY(f,e,w,!0)
d.bGL(a1)},
cmY(b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=x.S,b3=C.S(x.N,b2),b4=new B.bHD(b3),b5=C.a([],x.t)
for(w=b1.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
b4.$2(t,0)
b4.$2(t,1)}for(s=0;s<b3.a;++s)b5.push(s)
r=new B.bHC(b5)
for(v=b1.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.K)(v),++u){p=v[u]
o=r.$1(b4.$2(p.a,p.b))
n=r.$1(b4.$2(p.c,p.d))
if(o!==n)b5[o]=n}m=new B.bHF(C.S(b2,b2),r,b4)
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
if(h)C.b9(C.dF(g,null))
e=C.a(new Array(b6),q)
for(d=0;d<b6;++d)e[d]=C.bY(b6,0,!1,b2)
a0=C.bY(b6,0,!1,b2)
k.a7(0)
j.a7(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,C.K)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/b1.b0Q(t)
a4=b1.b0R(t)*a3}else{a5=t.x
a4=0
if(a5&&a2!=="capacitor")a3=1e-9
else if(a2==="switch")a3=t.w?100:1e-9
else if(a2==="fuse")a3=20
else if(a2==="led"){a2=v.h(0,t.a)
a6=a2===!0
a3=a6?0.06666666666666667:1e-9
a4=a6?a3*1.9:0}else if(a2==="capacitor"){a4=i*t.z
a3=a5?1e-9:i}else a3=1/b1.c_6(t)}k.m(0,t,a3)
j.m(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b6;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b1.bJF(e,a0,b7)
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
bJF(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
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
bGL(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=d.a,v=w.length,u=a0*0.015,t=a0*0.2,s=a0*0.8,r=a0*0.9,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
o=p.b
n=o==="battery"
if(n&&p.e===1.5&&!p.x){m=p.CW
if(m>0.003)p.as=Math.min(1,p.as+t*Math.min(m,1))
else if(m<-0.003)p.as=Math.max(0,p.as-u*Math.min(-m,1))}if((n||o==="solar"||o==="crank"||o==="turbine")&&!p.x){l=d.b0R(p)/d.b0Q(p)
if(l>0.3){n=Math.abs(p.CW)
n=n>0.4&&n>l*0.55&&!d.bz7(p)}else n=!1
m=p.Q
if(n){p.Q=m+r
d.b80(p,3,260)
if(d.w<=0){d.w=0.35
n=d.e
if(n!=null)n.$2("short",p)}if(p.Q>1.4)d.D0(p,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else p.Q=Math.max(0,m-s)}n=p.ch
m=p.CW
k=Math.abs(n*m)
j=Math.abs(m)
i=D.t9.h(0,o)
if(i!=null){n=i.d
h=p.ch
g=n?h:Math.abs(h)
n=!p.x
f=n&&g>=i.b
if(n&&Math.abs(h)>i.c){n=$.Fn().h(0,o).b
m=i.b
m=m===A.k.kk(m)?""+A.k.U(m):C.t(m)
e=i.c
e=e===A.k.kk(e)?""+A.k.U(e):C.t(e)
d.D0(p,"The "+n+" is made for "+m+" to "+e+" volts but got "+A.k.aa(Math.abs(p.ch),1)+" V, so it burnt out.")}n=f&&!p.x?1:0
p.cx=n
p.ax=n>0?p.ax+a0:0
if(D.eou.t(0,o)){n=p.cx>0?A.k.D((Math.abs(p.ch)-1)/6,0.15,1.4):0
p.cx=n
m=p.y
e=o==="fan"?30:26
p.y=m+n*a0*e}}switch(o){case"bulb":p.cx=p.x?0:A.k.D(k/0.9,0,1)
if(!p.x&&k>2.4)d.D0(p,"The bulb got "+A.k.aa(Math.abs(p.ch),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":p.cx=p.x?0:A.k.D((j-0.001)/0.02,0,1)
if(!p.x&&j>0.045)d.D0(p,"The LED had "+A.k.U(j*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":p.cx=A.k.D(k/14,0,1)
break
case"motor":o=A.k.D(j/0.5,0,1.6)
p.cx=o
p.y=p.y+o*a0*24
break
case"buzzer":p.cx=A.k.D(j/0.05,0,1)
break
case"ammeter":if(!p.x&&j>1.5)d.D0(p,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":p.cx=p.x?0:A.k.D(j/1,0,1)
if(!p.x&&j>1)d.D0(p,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!p.x&&k>0.8)d.D0(p,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":p.cx=A.k.D(Math.abs(p.z)/9,0,1)
if(!p.x&&Math.abs(p.z)>13)d.D0(p,"The capacitor was charged to "+A.k.aa(Math.abs(p.z),1)+" V, more than it can hold.")
break
case"crank":p.y=p.y+p.f*a0*22
break
case"turbine":p.y=p.y+p.f*a0*14
break
case"solar":p.cx=p.f
break}}},
bz7(d){return A.d.bg(this.a,new B.bHA(d))},
D0(d,e){var w
d.x=!0
d.ay=e
this.b80(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bct(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.x.a7(0)},
b9n(d){var w,v=!0
if(!this.aju(d)){w=d.b
if(w!=="led"){v=D.t9.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
SM(d,e){var w=this.b
return new C.a4(w,new B.bHS(d,e),C.U(w).k("a4<1>")).gI(0)},
SO(d){var w,v
if(d.x)return!1
w=d.b
if(D.t9.am(0,w))return d.cx>0
v=d.cx
return v>(w==="led"?0.02:0.05)},
b7x(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=d.b,h=$.Fn().h(0,i).b
if(d.x){i=d.ay
return(i.length===0?"The "+h+" burnt out.":i)+" Press the spanner at the top to fit a new one."}if(!(D.Qg.t(0,i)||D.t9.am(0,i))||j.SO(d))return null
w=j.SM(d,0)
v=j.SM(d,1)
u=w===0
if(u&&v===0)return"The "+h+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){i=u?"left (+)":"right"
return"Only one end of the "+h+" is wired. Electricity needs a full loop, so wire the "+i+" dot as well, and bring it back to the battery."}u=j.a
t=C.U(u).k("a4<1>")
s=C.z(new C.a4(u,j.gcFG(),t),t.k("G.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
r=D.t9.h(0,i)
i=i==="led"
if(!i){t=r==null?null:r.d
q=t===!0}else q=!0
if(q&&d.ch<-0.3)return"The "+h+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=j.aCR("battery"),p=J.aV(t.a),t=new C.hK(p,t.b);t.C();){o=p.gT(p)
if(o.e===1.5&&o.as<=0.02&&j.SM(o,0)+j.SM(o,1)>0){if(o.ch<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+h+"."}}for(t=j.aCR("switch"),p=J.aV(t.a),t=new C.hK(p,t.b);t.C();)if(!p.gT(p).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,n=0;n<t;++n){m=u[n]
if(m.x&&m!==d)return"The "+$.Fn().h(0,m.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,n=0;n<t;++n){l=s[n]
p=l.b
if(p==="solar"&&l.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(p==="turbine"&&l.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(p==="crank"&&l.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}if(r!=null&&Math.abs(d.ch)<r.b&&Math.abs(d.CW)>0.0005){k=A.d.bg(u,new B.bHI(j,d))
i=r.b
i=i===A.k.kk(i)?""+A.k.U(i):C.t(i)
u=A.k.aa(Math.abs(d.ch),1)
t=k?", or take out parts that share the voltage with it":""
return"The "+h+" needs at least "+i+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(i&&Math.abs(d.CW)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.aa(Math.abs(d.ch),1)+" V. Use a bigger battery."
if(Math.abs(d.CW)<0.0005)return"No current is flowing through the "+h+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+h+" is not getting enough power ("+A.k.aa(Math.abs(d.ch),1)+" V). Try a bigger battery."},
aCR(d){var w=this.a
return new C.a4(w,new B.bHL(d),C.U(w).k("a4<1>"))},
aCr(d){return this.aCR(d).bg(0,new B.bHK(0.35))},
aBB(d,e){return A.d.bg(this.a,new B.bHJ(e))}}
B.agb.prototype={
a6(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=b2.a,a8=b2.b,a9=0+a7,b0=0+a8
$.a_()
w=C.N()
w.r=D.a9U.gq(0)
b1.bd(new C.ac(0,0,a9,b0),w)
v=C.N()
v.r=A.c.j(0.06).gq(0)
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
a5.cuE(b1,new C.v(k*a7+j,l*a8),new C.v(h*a7+g,i.d*a8),m,m===o)}q=a5.d
if(q!=null&&a5.e!=null){f=B.hcM(q.a,q.b,b2)
q=a5.e
q.toString
$.a_()
p=C.N()
p.r=A.al.gq(0)
p.c=3
p.d=A.bV
b1.bK(f,q,p)}for(q=r.a,p=q.length,o=a5.c,l=a5.r,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){e=q[n]
k=e.c*a7
j=e.d*a8
if(e.Q>0){i=Math.sin(r.d*30)
$.a_()
h=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
h.r=D.a97.j(A.k.D(e.Q*0.45,0,0.6)).gq(0)
h.z=A.AW
s=h.L()
w.drawCircle(k,j,46+14*i,s)
s.delete()}d=l.h(0,e.a)
if(d==null)d=1
J.bH(w.save())
w.translate(k,j)
i=A.k.D(A.nO.av(0,A.k.D(d,0,1)),0.01,1.4)
w.scale(i,i)
a5.c8w(b1,e,e===o)
w.restore()
if(!e.x){i=e.b
i=(D.Qg.t(0,i)||D.t9.am(0,i))&&!r.SO(e)&&r.SM(e,0)+r.SM(e,1)>0}else i=!1
if(i){k+=0
j+=-40
$.a_()
i=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
i.r=A.aX.gq(0)
s=i.L()
w.drawCircle(k,j,10,s)
s.delete()
a0=new C.lP(new C.es("!",a6,a6,A.cU,a6,a6,a6,a6,a6,a6,new C.F(!0,A.x,a6,a6,a6,a6,14,A.u,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6)),A.a6,A.cn,new C.k4(1),a6,a6,a6,a6,A.cm,a6)
a0.fq()
a0.a6(b1,new C.v(k+-3,j+-8))}for(a1=0;a1<2;++a1){k=e.c
j=a1===0
i=j?-42:42
i=k*a7+i
k=e.d*a8
$.a_()
h=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
h.r=D.a9U.gq(0)
s=h.L()
w.drawCircle(i,k,7,s)
s.delete()
h=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
h.b=A.ad
h.c=2.4
h.r=(j&&r.b9n(e)?A.cH:A.al).gq(0)
s=h.L()
w.drawCircle(i,k,6,s)
s.delete()
if(j&&r.b9n(e)){a0=new C.lP(new C.es("+",a6,a6,A.cU,a6,a6,a6,a6,a6,a6,new C.F(!0,A.cH,a6,a6,a6,a6,13,A.u,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6)),A.a6,A.cn,new C.k4(1),a6,a6,a6,a6,A.cm,a6)
a0.fq()
a0.a6(b1,new C.v(i+-4,k+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n){a2=p[n]
l=a2.a*a7+a2.c
k=a2.b*a8+a2.d
a3=A.k.D(a2.r/0.8,0,1)
j=C.aq(D.b93,D.b9S,a3)
j.toString
i=a2.f
$.a_()
h=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
h.r=j.gq(0)
h.c=2.4
h.d=A.bV
s=h.L()
w.drawLine.apply(w,[l,k,l-a2.e*0.035,k-i*0.035,s])
s.delete()
i=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
i.r=j.j(0.35*a3).gq(0)
i.z=A.OE
s=i.L()
w.drawCircle(l,k,4.5*a3+1,s)
s.delete()}if(A.d.bg(q,new B.bD2())){a4=A.d.cI(q,0,new B.bD3())
$.a_()
a8=C.N()
a8.r=D.b_y.j(0.05+0.09*a4*(0.5+0.5*Math.sin(r.d*22))).gq(0)
b1.bd(new C.ac(0,0,a9,b0),a8)
a0=C.iS(a6,a6,a6,a6,D.eyW,A.a6,A.cn,a6,A.eE,A.cm)
a0.AP(a7-24)
a0.a6(b1,new C.v(12,10))}},
pA(d,e,f,g,h){var w=null,v=C.iS(w,w,w,w,C.dq(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a6,A.cn,w,A.eE,A.cm)
v.fq()
v.a6(d,f)},
cuE(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aR($.a_().r,A.aq,null,null,C.a([],x.v))
d.E(new C.b7(a1.a,a1.b))
w=B.h5h(a1,a2,a3)
d.E(new C.d_(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.CW)
t=a3.c
s=Math.abs(t.CW)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.aq(A.aL,D.a97,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.aq(A.b_,A.aL,A.k.D(r*1.2,0,1))
u.toString
o=u}else o=A.bu
u=C.N()
u.b=A.ad
u.c=a4?7:5
u.d=A.bV
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gq(0)
a0.aQ(d,u)
u=C.N()
u.b=A.ad
u.c=2.4
u.d=A.bV
u.r=(a4?A.c:o).gq(0)
a0.aQ(d,u)
if(q){n=new C.a2q(new C.wj(C.xW(d),!1,C.a([],x.T))).gK(0)
m=40+A.k.D(r*120,0,160)
l=v.CW+t.CW>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.jN()
i=t[u].b
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.jN()
h=t[u].b
h===$&&C.c()
h=A.k.H(j*22+i*m*l,h.a.length())
v.jN()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.jN()
g=t[u].b
g===$&&C.c()
f=A.k.H(h+i,g.a.length())
v.jN()
i=t[u].T2(f).a
h=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
h.r=A.c.gq(0)
e=h.L()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
Nm(d,e,f,g){var w,v,u,t
$.a_()
w=C.N()
v=g?A.b1:A.a3
u=g?A.b5:A.a7
t=C.aq(e,A.x,0.3)
t.toString
w.sar(new C.a7(v,u,A.w,C.a([e,f,e,t],x.O),A.Fq,null).az(0,d))
return w},
asM(d,e,f){return this.Nm(d,e,f,!0)},
bWp(d,e){return this.Nm(d,A.bu,A.iV,e)},
aex(d,e){var w,v,u
$.a_()
w=C.N()
w.sar(D.aG7.az(0,C.bV(e,4.2)))
d.ak(e,4.2,w)
w=e.ao(0,D.dLH)
v=e.ao(0,D.dLQ)
u=C.N()
u.r=A.f4.gq(0)
u.c=1.2
d.bK(w,v,u)},
c8w(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=4294626325,b4=4286331629,b5=4287322667,b6=4293870660,b7=$.a_(),b8=C.N()
b8.sar(D.bFx.az(0,D.em5))
b8.c=3.4
b8.d=A.bV
w=C.N()
w.r=A.x.j(0.45).gq(0)
w.z=H.om
b9.j1(D.elZ,w)
if(c1){w=C.bN(D.em4,A.kb)
v=C.N()
v.r=A.c.j(0.14).gq(0)
b9.b0(w,v)}b9.bK(D.dN2,D.dMU,b8)
b9.bK(D.dKY,D.dLh,b8)
u=c0.x
switch(c0.b){case"battery":b1.bw9(b9,c0)
break
case"solar":t=C.bN(D.em1,A.j7)
b9.b0(t,b1.Nm(new C.ac(t.a,t.b,t.c,t.d),A.eP,A.c4,!1))
b7=C.N()
w=C.aq(D.b2n,A.d9,0.25+0.55*c0.f)
w.toString
v=C.aq(D.b9c,A.lT,0.3+0.4*c0.f)
v.toString
b7.sar(new C.a7(A.ax,A.aC,A.w,C.a([w,v],x.O),b2,b2).az(0,D.a2E))
b9.bd(D.a2E,b7)
s=C.N()
s.r=A.c.j(0.35).gq(0)
s.c=0.8
for(b7=b9.a,r=1;r<6;++r){w=-34+r*68/6
q=s.L()
b7.drawLine.apply(b7,[w,-18,w,18,q])
q.delete()}for(r=1;r<4;++r){w=-18+r*9
q=s.L()
b7.drawLine.apply(b7,[-34,w,34,w,q])
q.delete()}for(r=0;r<6;++r){w=-34+(r+0.5)*68/6
$.a_()
v=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
v.r=A.cp.j(0.5).gq(0)
v.c=0.6
q=v.L()
b7.drawLine.apply(b7,[w,-18,w,18,q])
q.delete()}b7=new C.aR($.a_().r,A.aq,b2,b2,C.a([],x.v))
b7.E(new C.b7(-34,18))
b7.E(new C.ao(-6+40*c0.f,-18))
b7.E(new C.ao(4+40*c0.f,-18))
b7.E(new C.ao(-24,18))
b7.E(new C.bE())
w=C.N()
w.r=A.c.j(0.1+0.22*c0.f).gq(0)
b9.aQ(b7,w)
w=c0.f
b7=C.N()
b7.r=A.f_.j(0.9).gq(0)
b9.ak(D.dL3,4+4*w,b7)
break
case"crank":p=C.bN(D.elP,A.h_)
b9.b0(p,b1.asM(new C.ac(p.a,p.b,p.c,p.d),A.bw,A.bK))
b7=C.N()
b7.sar(D.aG8.az(0,C.bV(A.J,12)))
b9.ak(A.J,12,b7)
o=new C.v(Math.cos(c0.y)*22,Math.sin(c0.y)*22)
b7=C.N()
b7.r=A.cp.gq(0)
b7.c=5
b7.d=A.bV
b9.bK(A.J,o,b7)
b7=C.N()
b7.sar(D.dUu.az(0,C.bV(o,7)))
b9.ak(o,7,b7)
b1.aex(b9,D.dMO)
b1.aex(b9,D.dKR)
break
case"turbine":b7=b7.r
w=x.v
v=new C.aR(b7,A.aq,b2,b2,C.a([],w))
v.E(new C.b7(-3,24))
v.E(new C.ao(3,24))
v.E(new C.ao(1.5,0))
v.E(new C.ao(-1.5,0))
v.E(new C.bE())
n=C.N()
n.r=A.c4.gq(0)
b9.aQ(v,n)
for(v=b9.a,m=0;m<3;++m){n=c0.y
J.bH(v.save())
v.rotate((n+m*2.094)*180/3.141592653589793,0,0)
n=C.a([],w)
l=new C.aR(b7,A.aq,b2,b2,n)
n.push(new C.b7(0,-2))
n.push(new C.d_(6,-14,2,-30))
n.push(new C.d_(-2,-14,0,-2))
n.push(new C.bE())
n=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
n.r=A.c.gq(0)
q=n.L()
n=l.gbM().a.snapshot()
v.drawPath((l.e=new C.cG(n)).a,q)
q.delete()
v.restore()}b7=C.N()
b7.sar(D.dUb.az(0,C.bV(A.J,4.5)))
b9.ak(A.J,4.5,b7)
break
case"switch":p=C.bN(D.elV,A.tx)
b7=C.N()
b7.sar(D.ajx.az(0,new C.ac(p.a,p.b,p.c,p.d)))
b9.b0(p,b7)
b1.aex(b9,D.Px)
b1.aex(b9,D.aB9)
k=c0.w?D.aB9:D.dKD
b7=C.N()
b7.r=A.aG.gq(0)
b7.c=6
b7.d=A.bV
b9.bK(D.Px,k,b7)
b7=C.N()
b7.r=(c0.w?A.bl:A.c4).gq(0)
b7.c=4
b7.d=A.bV
b9.bK(D.Px,k,b7)
b7=C.l2(D.Px,k,0.85)
b7.toString
w=C.N()
w.r=A.aF.gq(0)
b9.ak(b7,5,w)
break
case"fuse":j=C.bN(D.aGx,D.aGd)
b7=C.N()
b7.r=A.fx.j(0.25).gq(0)
b9.b0(j,b7)
b7=C.N()
b7.b=A.ad
b7.c=1.4
b7.r=A.aA.gq(0)
b9.b0(j,b7)
if(!u){b7=C.N()
b7.c=1.6
b7.r=C.aq(A.c4,A.cX,c0.cx).gq(0)
b9.bK(D.aBn,D.aB8,b7)}else{b7=C.N()
b7.c=1.6
b7.r=A.c1.gq(0)
b9.bK(D.aBn,D.dN8,b7)
b7=C.N()
b7.c=1.6
b7.r=A.c1.gq(0)
b9.bK(D.dLs,D.aB8,b7)
b7=C.N()
b7.r=A.dw.gq(0)
b9.ak(A.J,6,b7)}for(b7=b9.a,i=0;i<2;++i){h=C.d9(new C.v(D.cUj[i]*22,0),20,9)
w=C.bN(h,A.iO)
q=b1.Nm(h,A.du,A.nR,!0).L()
b7.drawRRect(C.fs(w),q)
q.delete()}break
case"pot":b7=C.N()
b7.sar(D.dUm.az(0,C.bV(A.J,21)))
b9.ak(A.J,21,b7)
for(b7=b9.a,m=0;m<=10;++m){g=2.356194490192345+m*3.141592653589793*1.5/10
w=Math.cos(g)
v=Math.sin(g)
n=Math.cos(g)
l=Math.sin(g)
f=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
f.r=A.aA.gq(0)
f.c=1.2
q=f.L()
b7.drawLine.apply(b7,[w*18,v*18,n*22,l*22,q])
q.delete()}b7=C.N()
b7.sar(D.dU9.az(0,C.bV(A.J,13)))
b9.ak(A.J,13,b7)
e=2.356194490192345+c0.f*3.141592653589793*1.5
b7=Math.cos(e)
w=Math.sin(e)
v=Math.cos(e)
n=Math.sin(e)
l=C.N()
l.r=A.aL.gq(0)
l.c=3
l.d=A.bV
b9.bK(new C.v(b7*3,w*3),new C.v(v*12,n*12),l)
break
case"resistor":d=C.bN(D.aGx,D.aGd)
b7=C.N()
b7.sar(D.bII.az(0,new C.ac(d.a,d.b,d.c,d.d)))
b9.b0(d,b7)
b7=x.O
a0=C.E([47,C.a([C.aY(b3),C.aY(b4),A.x],b7),100,C.a([C.aY(b5),A.x,C.aY(b5)],b7),220,C.a([C.aY(b6),C.aY(b6),C.aY(b5)],b7),470,C.a([C.aY(b3),C.aY(b4),C.aY(b5)],b7),1000,C.a([C.aY(b5),A.x,C.aY(b6)],b7)],x.i,x.bF)
a1=a0.h(0,c0.r)
if(a1==null){b7=a0.h(0,100)
b7.toString
a1=b7}for(b7=b9.a,r=0;r<3;++r){w=-14+r*9
v=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
v.r=a1[r].gq(0)
q=v.L()
b7.drawRect(C.cp(new C.ac(w,-9,w+4.5,9)),q)
q.delete()}b7=C.N()
b7.r=A.aL.gq(0)
b9.bd(D.eme,b7)
b7=c0.r
b1.pA(b9,b7>=1000?"1k\u03a9":""+A.k.U(b7)+"\u03a9",D.dMv,A.al,10)
break
case"bulb":w=c0.cx
if(w>0){v=C.N()
v.r=A.f_.j(0.55*w).gq(0)
v.z=A.AW
b9.ak(D.v4,34,v)}p=C.d9(D.dK9,12,18)
b9.b0(C.bN(p,A.iO),b1.Nm(p,A.bu,A.em,!0))
for(w=b9.a,r=0;r<3;++r){v=13+r*3.5
n=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
n.r=A.dq.gq(0)
n.c=1
q=n.L()
w.drawLine.apply(w,[-9,v,9,v,q])
q.delete()}w=C.N()
if(u)v=A.Tm
else{v=C.aq(A.em,A.hL,c0.cx)
n=c0.cx
v=v.j(0.25+0.7*n)}if(u)n=A.D2
else{n=C.aq(A.eP,A.f_,c0.cx)
n.toString}w.sar(new C.bR(A.tR,0.5,A.w,b2,0,C.a([v,n.j(0.18+0.5*c0.cx)],x.O),b2,b2).az(0,C.bV(A.tq,17)))
b9.ak(A.tq,17,w)
w=C.N()
w.b=A.ad
w.c=1.4
w.r=A.c.j(0.6).gq(0)
b9.ak(A.tq,17,w)
b7=b7.r
w=x.v
n=new C.aR(b7,A.aq,b2,b2,C.a([],w))
n.E(new C.b7(-9,-12))
n.E(new C.d_(-12,-4,-9,0))
v=C.N()
v.b=A.ad
v.c=2
v.r=A.c.j(0.45).gq(0)
b9.aQ(n,v)
v=C.N()
v.r=A.cT.gq(0)
v.c=1.4
b9.bK(D.dN4,D.dN6,v)
v=C.N()
v.r=A.cT.gq(0)
v.c=1.4
b9.bK(D.dLl,D.dLo,v)
w=C.a([],w)
a2=new C.aR(b7,A.aq,b2,b2,w)
a2.E(new C.b7(-4,-2))
for(m=0;m<6;m=a3){a3=m+1
b7=(m&1)===0?-6:1
b7=new C.ao(-4+a3*8/6,-2+b7)
w.push(b7)
v=a2.f
if(v!=null)b7.bC(v)
b7=a2.e
if(b7!=null)b7.a.delete()
a2.e=null}$.a_()
b7=C.N()
b7.b=A.ad
b7.c=1.8
if(u)w=A.aV
else{w=C.aq(A.eP,D.b32,c0.cx)
w.toString}b7.r=w.gq(0)
b9.aQ(a2,b7)
break
case"led":w=c0.cx
if(w>0){v=C.N()
v.r=A.aF.j(0.6*w).gq(0)
v.z=D.d5f
b9.ak(A.tq,30,v)}w=C.N()
w.r=A.em.gq(0)
w.c=2.4
b9.bK(D.dNa,D.dN9,w)
w=C.N()
w.r=A.em.gq(0)
w.c=2.4
b9.bK(D.dLu,D.dLt,w)
b7=b7.r
w=x.v
a4=new C.aR(b7,A.aq,b2,b2,C.a([],w))
a4.E(new C.b7(-12,8))
a4.E(new C.ao(-12,-6))
a4.E(new C.d_(0,-26,12,-6))
a4.E(new C.ao(12,8))
a4.E(new C.bE())
v=C.N()
if(u)n=A.Jm
else{n=C.aq(A.eZ,D.a9I,c0.cx)
n.toString}if(u)l=A.k1
else{l=C.aq(A.jZ,A.aF,c0.cx)
l.toString}v.sar(new C.a7(A.ax,A.aC,A.w,C.a([n,l],x.O),b2,b2).az(0,D.elq))
b9.aQ(a4,v)
v=C.N()
v.b=A.ad
v.c=1.2
v.r=A.j_.gq(0)
b9.aQ(a4,v)
v=C.N()
v.r=A.f0.gq(0)
b9.bd(D.elv,v)
w=new C.aR(b7,A.aq,b2,b2,C.a([],w))
w.E(new C.b7(-7,-4))
w.E(new C.d_(-6,-12,0,-15))
b7=C.N()
b7.b=A.ad
b7.c=2
b7.r=A.c.j(0.5).gq(0)
b9.aQ(w,b7)
break
case"motor":a5=new C.ac(-28,-14,20,14)
b9.b0(C.bN(a5,A.hD),b1.asM(a5,A.ai,A.aJ))
b7=C.N()
b7.r=A.cV.gq(0)
b9.bd(D.elf,b7)
b7=C.N()
b7.r=A.cp.gq(0)
b9.bd(D.elg,b7)
b7=b9.a
J.bH(b7.save())
b7.translate(31,0)
for(m=0;m<3;++m){J.bH(b7.save())
b7.rotate((c0.y+m*2.094)*180/3.141592653589793,0,0)
w=C.d9(D.dKr,15,7)
v=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
v.r=A.cX.j(0.9).gq(0)
q=v.L()
b7.drawOval(C.cp(w),q)
q.delete()
b7.restore()}w=C.N()
w.r=A.aG.gq(0)
b9.ak(A.J,3,w)
b7.restore()
b1.pA(b9,"M",D.dMN,A.aG,14)
break
case"buzzer":a6=C.d9(A.J,42,42)
b7=C.N()
b7.sar(D.dUq.az(0,a6))
b9.j1(a6,b7)
b7=C.N()
b7.r=A.x.gq(0)
b9.ak(A.J,6,b7)
b7=C.N()
b7.b=A.ad
b7.c=1.4
b7.r=A.bf.gq(0)
b9.ak(A.J,6,b7)
b1.pA(b9,"+",D.dMG,A.al,12)
for(b7=b9.a,w=b1.b,m=1;m<=3;++m){v=c0.cx
n=v>0?A.k.H(w.d*14,5):0
n=C.bV(A.J,24+m*5+n)
l=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
l.b=A.ad
l.c=2
l.r=A.c3.j(v*(1-m*0.22)).gq(0)
q=l.L()
b7.drawArc.apply(b7,[C.cp(n),-40.10704565915762,80.21409131831524,!1,q])
q.delete()}break
case"heater":p=C.bN(D.elS,A.hD)
w=C.N()
w.sar(D.bGt.az(0,new C.ac(p.a,p.b,p.c,p.d)))
b9.b0(p,w)
w=C.a([],x.v)
a7=new C.aR(b7.r,A.aq,b2,b2,w)
a7.E(new C.b7(-24,0))
for(m=0;m<8;m=a3){b7=(m&1)===0?-10:10
a3=m+1
b7=new C.d_(-24+m*6+3,b7,-24+a3*6,0)
w.push(b7)
v=a7.f
if(v!=null)b7.bC(v)
b7=a7.e
if(b7!=null)b7.a.delete()
a7.e=null}b7=c0.cx
if(b7>0.1){$.a_()
w=C.N()
w.b=A.ad
w.c=10
w.r=D.b3D.j(0.5*b7).gq(0)
w.z=A.jj
b9.aQ(a7,w)}$.a_()
b7=C.N()
b7.b=A.ad
b7.c=3.2
b7.d=A.bV
b7.r=C.aq(A.lj,F.aaH,c0.cx).gq(0)
b9.aQ(a7,b7)
break
case"capacitor":a5=new C.ac(-16,-22,16,18)
b7=C.bN(a5,A.hD)
w=C.N()
w.sar(D.bFp.az(0,a5))
b9.b0(b7,w)
w=C.N()
w.r=A.c4.gq(0)
b9.bd(D.elA,w)
for(r=0;r<4;++r){a8=new C.lP(new C.es("\u2212",b2,b2,A.cU,b2,b2,b2,b2,b2,b2,new C.F(!0,A.aG,b2,b2,b2,b2,11,A.u,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2)),A.a6,A.cn,new C.k4(1),b2,b2,b2,b2,A.cm,b2)
a8.fq()
a8.a6(b9,new C.v(-14,-18+r*9))}a9=new C.ac(-16,-24,16,-17)
b9.b0(C.bN(a9,A.iO),b1.bWp(a9,!1))
b7=38*c0.cx
w=18-b7
$.a_()
v=C.N()
v.r=A.bl.j(0.5).gq(0)
b9.bd(new C.ac(-3,w,11,w+b7),v)
b1.pA(b9,"1F",D.v4,A.c,11)
break
case"radio":d=C.bN(D.a2E,A.h_)
b7=C.N()
b7.sar(D.bIX.az(0,new C.ac(d.a,d.b,d.c,d.d)))
b9.b0(d,b7)
b7=C.N()
b7.b=A.ad
b7.c=1.4
b7.r=A.nR.j(0.6).gq(0)
b9.b0(d,b7)
b7=C.bN(D.elT,A.j7)
w=C.N()
w.r=A.dy.gq(0)
b9.b0(b7,w)
for(b7=b9.a,r=0;r<6;++r){w=-10+r*4.4
v=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
v.r=A.lj.gq(0)
v.c=1.4
q=v.L()
b7.drawLine.apply(b7,[-27,w,-3,w,q])
q.delete()}w=C.N()
w.r=(c0.cx>0?A.hg:A.n9).gq(0)
b9.bd(D.eli,w)
if(c0.cx>0){w=8+A.k.H(b1.b.d*7,18)
v=C.N()
v.r=A.bQ.gq(0)
v.c=1.6
b9.bK(new C.v(w,-13),new C.v(w,-3),v)}w=C.N()
w.sar(D.aG8.az(0,C.bV(D.a1K,6)))
b9.ak(D.a1K,6,w)
w=C.N()
w.r=A.nR.gq(0)
b9.ak(D.dKX,4,w)
w=C.N()
w.r=A.em.gq(0)
w.c=1.8
b9.bK(D.dKV,D.aBc,w)
if(c0.cx>0)for(w=b1.b,m=1;m<=2;++m){v=C.bV(D.aBc,4+m*5+A.k.H(w.d*8,5))
n=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
n.b=A.ad
n.c=1.4
n.r=A.nd.j(0.7).gq(0)
q=n.L()
b7.drawArc.apply(b7,[C.cp(v),-137.50987083139756,91.67324722093173,!1,q])
q.delete()}break
case"tv":w=C.bN(D.em0,A.hD)
v=C.N()
v.r=K.rn.gq(0)
b9.b0(w,v)
b0=C.bN(D.elY,A.iO)
if(c0.cx>0&&!c0.x){b7=b9.a
J.bH(b7.save())
b7.clipRRect(C.fs(b0),$.BQ(),!0)
b7.translate(-33,-21)
B.h4n(b9,D.er0,c0.at,b1.b.d,c0.ax)
b7.restore()
b7=C.N()
b7.r=A.bl.gq(0)
b9.ak(D.dL8,1.6,b7)}else{w=C.N()
w.r=D.aaL.gq(0)
b9.b0(b0,w)
b7=new C.aR(b7.r,A.aq,b2,b2,C.a([],x.v))
b7.E(new C.b7(-33,-21))
b7.E(new C.ao(-10,-21))
b7.E(new C.ao(-33,0))
b7.E(new C.bE())
w=C.N()
w.r=A.c.j(0.05).gq(0)
b9.aQ(b7,w)}b7=C.N()
b7.r=A.bw.gq(0)
b9.bd(D.elu,b7)
break}B.hOG(b9,c0,b1.b.d,b1.gc_7())
if(u)b1.pA(b9,"\u2716",D.dNd,A.aF,14)},
bw9(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.ac(-28,-13,28,13)
d.b0(C.bN(w,A.tx),m.asM(w,A.eP,A.ih))
v=new C.ac(-22,-13,22,13)
$.a_()
u=C.N()
u.sar(D.ajq.az(0,v))
d.bd(v,u)
u=C.N()
u.r=A.dZ.gq(0)
d.bd(D.elI,u)
t=new C.ac(28,-5,34,5)
d.b0(C.bN(t,A.fZ),m.Nm(t,A.eP,A.iV,!0))
m.pA(d,"+",D.dKH,A.aL,11)
m.pA(d,"\u2212",D.dMP,A.al,11)
m.pA(d,C.t(l===A.k.kk(l)?A.k.U(l):l)+"V",D.dMA,A.aL,13)
if(l===1.5){u=C.N()
u.r=A.bG.gq(0)
d.bd(D.elH,u)
u=e.as
s=C.N()
s.r=C.aq(A.aF,A.bl,u).gq(0)
d.bd(new C.ac(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.pA(d,"FLAT",D.dMu,A.cH,9)}if(l>2){u=C.N()
u.r=A.bf.gq(0)
u.c=1
d.bK(D.dKg,D.dK8,u)
m.pA(d,l>3?"3 cells":"2 cells",D.dMz,A.aA,8)}}else if(l<=9){r=new C.ac(-22,-17,22,17)
u=C.bN(r,A.tx)
$.a_()
s=C.N()
s.sar(D.bIx.az(0,r))
d.b0(u,s)
s=C.N()
s.r=A.dk.gq(0)
d.bd(D.elJ,s)
for(u=d.a,q=0;q<2;++q){p=D.cUp[q]
s=p<0?5:3.6
o=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
o.sar(D.aG7.az(0,C.bV(new C.v(p,-18),5)))
n=o.L()
u.drawCircle(p,-18,s,n)
n.delete()}m.pA(d,"9V",D.dMw,A.c,16)}else{r=new C.ac(-34,-16,34,16)
u=C.bN(r,A.j7)
$.a_()
s=C.N()
s.sar(D.ajq.az(0,r))
d.b0(u,s)
s=C.N()
s.r=A.cJ.gq(0)
d.bd(D.em_,s)
for(u=d.a,q=0;q<2;++q){s=C.bN(C.d9(new C.v(D.ask[q],-20),8,10),A.fZ)
o=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
o.r=A.cp.gq(0)
n=o.L()
u.drawRRect(C.fs(s),n)
n.delete()}m.pA(d,"+",D.dKO,A.aF,10)
m.pA(d,"12V",D.dMx,A.aG,15)}},
aq(d){return!0}}
B.nm.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a7(k)
A.d.a7(d.b)
w=C.S(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new B.vj(o,r,q,p)
n.aI3(o,r,q,p)
k.push(n)
J.id(s[4],new B.cfr(n))
w.m(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.K)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.azI(m,u[1],l,u[3])}}}
B.ag9.prototype={
S(){var w=x.N
return new B.aga(A.J,A.at,C.S(w,x.gl),C.aZ(w),$,A.bv,0,C.a([],x.X),null,null)}}
B.aga.prototype={
atv(d){var w=this,v=w.as
if(v!=null)v.a9(0)
w.n(new B.bCI(w,d))
w.as=C.cN(A.nm,new B.bCJ(w))},
p(){var w=this.as
if(w!=null)w.a9(0)
this.bmg()},
YE(d,e){return this.c6y(d,e)},
aWi(d){return this.YE(d,!1)},
c6y(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$YE=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.qc:A.Dz
w=3
return C.b(B.hQk(s,r,d.ax<3.2,q),$async$YE)
case 3:p=g
t.ay=!1
if(p!=null)d.at=p
case 1:return C.h(u,v)}})
return C.i($async$YE,v)},
csi(d){var w=this,v=new C.Q(Date.now(),0,!1),u=w.at.ce(0,d.a,new B.bCK()),t=J.cA(u)
t.J(u,v)
t.bm(u,new B.bCL(v))
if(t.gI(u)<3)return
t.a7(u)
if(w.a.c.SO(d))w.aWi(d)
else{t=w.a.c.b7x(d)
w.atv(t==null?"The TV is off. Give it power first.":t)}},
Z(){var w=this
w.a0()
w.a.c.e=new B.bD_(w)
w.kM()},
l4(d){var w,v,u,t,s,r=this,q="tri",p="noise"
r.a.c.a5e(0,d)
for(w=r.a.c.a,v=w.length,u=r.ax,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(s.b!=="tv")continue
if(s.cx>0&&!s.x){r.a.toString
if(!u.t(0,s.a)&&!r.ay){u.J(0,s.a)
r.YE(s,!0)}}else u.W(0,s.a)}if((r.z+=d)>0.16){r.z=0
for(w=r.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.cx
if(u>0.2)B.dL(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.cx
if(u>0.08)B.dL(60+u*55,"",130,0,0.12,q)
break
case"heater":if(s.cx>0.2)u=A.cB.ae()<0.5
else u=!1
if(u)B.dL(2400,"",25,0,0.12*s.cx,p)
break
case"radio":if(s.cx>0){B.dL(900+A.cB.aB(800),"",90,0,0.1,p)
if(A.cB.ae()<0.35)B.dL(300+A.cB.aB(6)*70,"",150,0,0.12,q)}break
case"tv":if(s.cx>0)u=A.cB.ae()<0.4
else u=!1
if(u)B.dL(3000,"",40,0,0.07,p)
break
case"speaker":if(s.cx>0)B.dL(330+A.o.H(110*A.k.bH(r.a.c.d*3),4),"",140,0,0.14,q)
break
case"siren":if(s.cx>0)B.dL((A.k.bH(r.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.cx
if(u>0.1)B.dL(90+u*40,"",140,0,0.04,p)
break
case"toycar":u=s.cx
if(u>0.1)B.dL(70+u*60,"",130,0,0.1,q)
break
case"kettle":if(s.cx>0)u=A.cB.ae()<0.5
else u=!1
if(u)B.dL(1200,"",30,0,0.07,p)
break
case"turbine":u=s.f
if(u>0.1)B.dL(80,"",150,0,0.05*u,p)
break
case"crank":u=s.f
if(u>0.15)B.dL(110+u*140,"",70,0,0.08,"saw")
break}}}w=r.a.w
if(w!=null)w.$0()
r.n(new B.bD0())},
b21(d){var w,v,u,t,s,r,q,p,o,n,m,l,k
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
for(o=0;o<2;++o){n=this.y
m=p.c
l=o===0?-42:42
l=m*n.a+l-u
n=p.d*n.b-t
k=Math.sqrt(l*l+n*n)
if(k<r){s=new C.A(p,o)
r=k}}}return s},
aWZ(d){var w,v,u,t,s,r,q,p
for(w=this.a.c.a,v=C.U(w).k("dx<1>"),w=new C.dx(w,v),w=new C.bU(w,w.gI(0),v.k("bU<ai.E>")),u=d.a,v=v.k("ai.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
if(Math.abs(u-r*q.a)<36&&Math.abs(t-p*q.b)<26)return s}return null},
cuF(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
h=B.h5h(new C.v(k,o),new C.v(i,n),p)
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
abe(){this.a.toString
this.n(new B.bCp())},
bj4(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cId[v]
if(!A.d.bg(p.a.c.a,new B.bD1(u,w))){o=new C.v(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?E.Gr:o
s=s?E.Gr:o
q=t.agT(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.m(0,q.a,0)
p.d=q
p.e=null
B.dL(1200,"",50,0,0.3,"tri")
p.abe()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<46;++v)w.push(D.Np[v].a)
u=w.length
t=u>8
s=t?A.d.dt(w,0,A.o.aj(u+1,2)):w
r=t?A.d.fO(w,A.o.aj(w.length+1,2)):A.U
q=n.a.d
if(q!=null){w=C.a2(q).k("cu<1>")
w=C.z(new C.cu(q,w),w.k("G.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,C.K)(w),++v){p=w[v]
o=q.h(0,p)
q.m(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=C.a([],x.p)
n.a.toString
w.push(n.aWO(s,!0))
n.a.toString
if(t)w.push(n.aWO(r,!0))
w.push(C.D(C.cj(new B.bCZ(n,q,m)),1))
return C.u(w,A.m,null,A.e,A.j,0,A.p)},
aWO(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.K)(d),++v){u=d[v]
t=$.Fn()
s=t.h(0,u).d.j(0.14)
r=new C.b3(14,14)
q=new C.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(C.aH(p,C.p(p,C.u(C.a([new C.x(t.h(0,u).c,p,A.Ho,p,p,p,p,p,p,p,p,p),new C.x(t.h(0,u).b,p,A.mT,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.b6,A.j,0,A.p),A.h,p,p,new C.o(s,p,new C.c2(q,q,q,q),new C.bv(r,r,r,r),p,p,A.n),p,p,p,D.V0,p,p,p,62),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bCq(this,u),p,p,p,p,p,p,!1,A.ae))}return C.p(p,C.cL(m,p,A.fV,p,p,A.aZ,!1),A.h,p,p,new C.o(D.TT,p,new C.c2(A.V,A.V,new C.ay(o,1,A.r,-1),A.V),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aUr(d){var w=null,v=C.m(18)
return C.p(w,d,A.h,w,w,new C.o(D.aZc,w,C.H(A.bG,A.r,1),v,w,w,A.n),w,w,w,w,D.bgc,w,w,w)},
c8x(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.Fn().h(0,o),m=d.ch,l=d.CW,k=new B.bCE(q,n),j=C.d(n.c,p,p,p,p,p,p,A.QZ,p,p,p),i=n.b,h=n.d,g=x.p
i=C.B(C.a([j,A.aa,C.D(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aF(p,p,p,p,D.bxQ,p,p,p,new B.bCv(q,d),p,p,p,p,"Remove part",A.c8),C.aF(p,p,p,p,A.LB,p,p,p,new B.bCw(q),p,p,p,p,p,A.c8)],g),A.m,p,A.e,A.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,D.Rc,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.eH2,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.aa(Math.abs(d.ch),2)+" volts  \xb7  "+A.k.aa(Math.abs(d.CW)*1000,0)+" milliamps  \xb7  "+A.k.aa(Math.abs(m*l),2)+" watts"
m=C.a([i,j,A.av,w,A.ar,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?A.cH:A.aL,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.b7x(d)
if(v!=null){l=(d.x?A.aF:A.aX).j(0.14)
j=C.m(10)
i=C.H((d.x?A.aF:A.aX).j(0.5),A.r,1)
m.push(new C.C(A.im,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.eNf,p,p,p),A.h,p,p,new C.o(l,p,i,j,p,p,A.n),p,p,p,p,A.ch,p,p,p),p))}if(o==="tv"){l=C.a([],g)
for(u=0;u<6;u=t){t=u+1
l.push(new B.dy("CH "+t,d.at===u,new B.bCx(q,d,u),p,h,p))}l=C.c8(A.bH,l,A.bx,4,6)
l=C.a([A.ar,l,A.av,C.d(q.a.c.SO(d)?"Showing: "+D.Nw[A.o.H(d.at,6)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hY,p,p,p)],g)
if(q.a.c.SO(d))l.push(new B.fe(A.Er,"Open big screen",new B.bCy(q,d),h,p))
A.d.v(m,l)}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.U(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.C(A.im,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.eC6,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.cOf[s]
j=r===1.5?"1.5 V (rechargeable)":C.t(r)+" V"
l.push(new B.dy(j,d.e===r,new B.bCz(q,d,r),p,h,p))}m.push(C.c8(A.bH,l,A.bx,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cFT[s]
j=r>=1000?"1 k\u03a9":""+A.o.U(r)+" \u03a9"
l.push(new B.dy(j,d.r===r,new B.bCA(q,d,r),p,h,p))}m.push(C.c8(A.bH,l,A.bx,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new B.bCB(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new B.bCC(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new B.bCD(d)))
if(o==="crank")m.push(D.eZV)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hY,p,p,p))
return q.aUr(new C.d1(D.aRe,C.ch(C.u(m,A.F,p,A.e,A.R,0,A.p),A.q,p,A.z,p,p,p,p,A.aj),p))}}
B.b7d.prototype={}
B.T5.prototype={
S(){return new B.aAj(B.fzp(),new C.cn(null,x.gJ),C.aZ(x.S))}}
B.aAj.prototype={
c_9(){var w,v,u,t,s=this
if(++s.w%15===0){w=s.d.a
v=C.U(w).k("a4<1>")
u=new C.a4(w,new B.dJx(s),v).gI(0)
t=new C.a4(w,new B.dJy(),v).gI(0)
if(u!==s.x||t!==s.y)s.n(new B.dJz(s,u,t))}if(A.o.H(s.w,10)===0){w=s.f
$.bA1()
w=w>=9}else w=!0
if(w)return
w=s.r
if(!w.t(0,s.f)&&$.bA1()[s.f].c.$1(s.d)){w.J(0,s.f)
B.Ay("bell",C.a([0,4,7,12],x.t),700,0.45)
s.n(new B.dJA())}},
adO(){var w=0,v=C.j(x.H),u=this,t
var $async$adO=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.cf(null,null,!0,null,new B.dJw(u),t,null,!0,!0,x.H),$async$adO)
case 2:return C.h(null,v)}})
return C.i($async$adO,v)},
abd(d,e,f,g){var w=null,v=f.j(0.16),u=C.m(12),t=C.H(f.j(0.5),A.r,1)
return C.aH(w,C.hA(C.p(w,C.V(d,f,w,w,w,18),A.h,w,w,new C.o(v,w,t,u,w,w,A.n),w,34,w,A.un,w,w,w,34),w,e,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.ae)},
c_a(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.f,i=$.bA1(),h=j<9?i[j]:k
i=h==null
w=!i&&l.r.t(0,j)
v=w?A.bl:A.b_
j=A.b_.j(0.45)
u=x.V
t=C.a([new C.aa(0,A.G,A.b_.j(0.18),A.cA,14)],u)
s=C.aH(k,C.p(k,D.bz3,A.h,k,k,new C.o(A.c.j(0.08),k,k,k,k,k,A.a5),k,34,k,k,k,k,k,34),A.z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.dJC(d),k,k,k,k,k,k,!1,A.ae)
u=C.p(k,D.aXw,A.h,k,k,new C.o(k,k,k,C.m(13),C.a([new C.aa(0,A.G,A.b_.j(0.5),A.J,10)],u),D.bHY,A.n),k,36,k,k,k,k,k,36)
r=l.d.a.length
if(r===0)r="Pick a part to start"
else{q=l.x
p=l.y
p=p>0?" \xb7 "+p+" burnt":""
p=""+r+" parts \xb7 "+q+" working"+p
r=p}q=x.p
r=C.B(C.a([s,A.aa,u,A.aa,C.D(C.u(C.a([D.f1h,C.d(r,k,1,A.a2,k,k,k,C.l(k,k,l.y>0?A.fg:A.hv,k,k,k,k,k,k,k,k,11.5,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],q),A.F,k,A.e,A.j,0,A.p),1),l.abd(A.p7,"Ready-made circuits",A.bE,l.gcei()),l.abd(A.wV,"Repair burnt parts",A.aL,new B.dJD(l)),l.abd(D.wX,"Clear the board",A.cH,new B.dJE(l)),l.abd(A.Lg,"How to play",A.b_,new B.dJF(d,e))],q),A.m,k,A.e,A.j,0,k,k)
u=A.x.j(0.28)
s=C.m(14)
p=C.H(v.j(0.45),A.r,1)
if(i)i=D.eSk
else{i=w?"\u2705":"\ud83c\udfaf"
i=C.D(C.d(i+" "+h.a,k,1,A.a2,k,k,k,T.Hg,k,k,k),1)
o=C.d(""+(l.f+1)+"/9",k,k,k,k,k,k,C.l(k,k,v,k,k,k,k,k,k,k,k,12,k,k,A.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
n=C.fm(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,A.at,k,A.lo,k,k,k,k,k,k,k,k)
m=w?"Next \u25b6":"Skip"
n=C.B(C.a([i,o,new C.a3(k,28,C.bI(!1,C.d(m,k,k,k,k,k,k,C.l(k,k,v,k,k,k,k,k,k,k,k,k,k,k,A.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,!0,k,k,new B.dJG(l),k,n),k)],q),A.m,k,A.e,A.j,0,k,k)
i=C.u(C.a([n,C.d(w?"Well done!":h.b,k,2,A.a2,k,k,k,D.eC4,k,k,k),A.ar,C.bu(C.m(4),C.mq(A.bG,k,k,4,k,l.r.a/9,new C.mK(v,x.dw)),A.ap)],q),A.F,k,A.e,A.j,0,A.p)}return C.p(k,C.u(C.a([r,A.H5,C.p(k,i,A.h,k,k,new C.o(u,k,p,s,k,k,A.n),k,k,k,k,A.acE,k,k,k)],q),A.m,k,A.e,A.R,0,A.p),A.h,k,k,new C.o(k,k,new C.c2(A.V,A.V,new C.ay(j,1.4,A.r,-1),A.V),A.a6s,t,D.bHf,A.n),k,k,k,k,D.bkZ,k,k,k)},
B(d){var w=this,v=null
$.aZk="tech"
return C.cd(v,A.bW,C.bq(!0,C.u(C.a([w.c_a(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nLots of tools: two rows above the board (swipe sideways to see them all). Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows NGMY animations: tap it 3 times quickly for the big screen. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, loop not finished...).\n\nTry the challenges at the top bar, or open Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.D(B.fLJ(w.d,w.e,w.gc_8(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0),v,!1,!1,v,v)}}
B.auO.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.auP.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bmf()}}
B.jB.prototype={}
B.Hh.prototype={}
B.Un.prototype={
S(){return new B.aBz(null,null)}}
B.aBz.prototype={
ga6I(){var w,v=this,u=v.d
if(u===$){w=C.bi(null,A.o4,null,1,null,v)
w.cn(0)
v.d!==$&&C.bJ()
v.d=w
u=w}return u},
gC8(){var w=this.e
return w===$?this.e=this.a.c:w},
Z(){var w=this
w.a0()
w.f=C.cN(w.a.e,w.gaUs())
w.arz()
B.dL(520,"",80,0,0.25,"tri")},
arz(){var w=this.x
if(w!=null)w.a9(0)
this.x=C.cN(A.S,new B.eqf(this))},
c_b(){var w=this.c
if(w!=null&&C.a8(w,!1).oP()){w=this.c
w.toString
C.a8(w,!1).M(this.gC8())}},
aUt(d){this.n(new B.eqd(this,d))
B.dL(900,"",40,0,0.3,"noise")
this.arz()},
p(){var w=this,v=w.f
if(v!=null)v.a9(0)
v=w.x
if(v!=null)v.a9(0)
w.ga6I().p()
w.bqj()},
B(d){var w,v,u,t,s=this,r=null,q=C.m(10),p=C.H(A.cV,A.r,6),o=C.a([new C.aa(0,A.G,A.b_.j(0.25),A.J,40)],x.V)
o=C.at(new C.fJ(1.7777777777777777,C.p(r,C.bu(C.m(4),C.c4(s.ga6I(),new B.eqh(s),r),A.ap),A.h,r,r,new C.o(r,r,p,q,o,r,A.n),r,r,r,r,r,r,r,r),r),r,r,r)
q=s.w
p=q?1:0
w=s.atw(A.ct,"Back to the board",s.gaUs())
v=C.m(20)
u=x.p
v=C.B(C.a([w,A.b7,C.p(r,C.d("NGMY TV \xb7 CH "+(s.gC8()+1),r,r,r,r,r,r,K.a4_,r,r,r),A.h,r,r,new C.o(A.aV,r,r,v,r,r,A.n),r,r,r,r,A.lX,r,r,r)],u),A.m,r,A.e,A.j,0,r,r)
w=A.x.j(0.65)
t=C.m(18)
return C.cd(r,A.x,C.bq(!0,C.aH(A.c5,new C.am(A.W,r,A.aY,A.q,C.a([o,C.BY(C.e1(C.u(C.a([new C.C(A.bR,v,r),A.b7,C.p(r,C.B(C.a([s.atw(D.ah_,"Previous channel",new B.eqi(s)),C.D(C.u(C.a([C.d(D.Nw[s.gC8()].a,r,r,r,r,r,r,A.j8,A.L,r,r),C.d(D.Nw[s.gC8()].b,r,r,r,r,r,r,O.aJX,A.L,r,r)],u),A.m,r,A.e,A.R,0,A.p),1),s.atw(D.agZ,"Next channel",new B.eqj(s))],u),A.m,r,A.e,A.j,0,r,r),A.h,r,r,new C.o(w,r,r,t,r,r,A.n),r,r,r,A.bk,A.bR,r,r,r)],u),A.m,r,A.e,A.j,0,A.p),!q,r),A.b8,A.i1,p)],u),r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.eqk(s),r,r,r,r,r,r,!1,A.ae),!0,!1,A.ah,!0,!0),r,!1,!1,r,r)},
atw(d,e,f){var w=null,v=C.nN(w,A.aV,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return C.aF(w,w,w,w,C.V(d,A.c,w,w,w,w),w,w,w,f,w,w,w,v,e,w)}}
B.bqC.prototype={
a6(d,e){return B.h4n(d,e,this.b,this.c,this.d)},
aq(d){return!0}}
B.aJj.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.aT8.prototype={}
B.TB.prototype={
S(){return new B.bgh(C.S(x.S,x.N),A.at,C.a([],x.U),$,A.bv,0,C.a([],x.X),null,null)}}
B.bgh.prototype={
guF(){var w=this.f
return w===$?this.f=B.fHl(0):w},
Z(){this.a0()
this.kM()
B.yw("laser_maze").bw(new B.dYC(this),x.P)},
l4(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.A(u.a,t)
if(t>0.8)A.d.cu(w,v)}this.n(new B.dYD())},
abg(d){var w=this
w.n(new B.dYs(w,d))
B.va("laser_maze",C.E(["best",w.e,"level",w.d],x.N,x.z))},
c_o(d){var w,v,u,t,s,r,q,p,o=this
if(o.x)return
w=o.y
v=w.ge8()/7
u=v*7
t=(w.a-u)/2
s=A.k.D((w.b-u)/2,8,300)
r=A.k.bH((d.a-t)/v)
q=A.k.bH((d.b-s)/v)
if(r<0||q<0||r>=7||q>=7)return
p=q*7+r
if(o.guF().b.t(0,p)||p===o.guF().e||o.guF().d.am(0,p))return
o.n(new B.dYt(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cj(new B.dYw(t,B.h5c(t.guF(),t.r))),q=x.p,p=C.a([new B.dy("Clear mirrors",!1,new B.dYx(t),A.jI,A.aL,s),new B.dy("Skip",!1,new B.dYy(t),D.agZ,A.b_,s)],q)
if(t.d>0)p.push(new B.dy("Back",!1,new B.dYz(t),D.ah_,A.b_,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new B.dy(""+u,v===t.d,new B.dYA(t,v),s,A.aF,s))}return B.jw(A.aF,A.fX,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.u(C.a([new B.eE(p,s,s),new B.eE(w,"LEVEL",s)],q),A.m,s,A.e,A.R,0,A.p))}}
B.bdl.prototype={
a6(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.ge8()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.D((b0.b-a4)/2,8,300),a7=new B.d9D(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.bN(new C.ac(a5,a6,a8,a4),A.kb)
v=$.a_()
u=C.N()
u.r=K.rn.gq(0)
a9.b0(w,u)
for(w=a9.a,t=0;t<=7;++t){u=t*a3
s=a5+u
r=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
r.r=A.dv.gq(0)
q=r.L()
w.drawLine.apply(w,[s,a6,s,a4,q])
q.delete()
u=a6+u
s=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
s.r=A.dv.gq(0)
q=s.L()
w.drawLine.apply(w,[a5,u,a8,u,q])
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.ef(a8,a8.r,C.a2(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.bN(C.d9(p,u,u),A.h_)
o=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
o.sar(D.bJ2.az(0,C.d9(p,a3,a3)))
q=o.L()
w.drawRRect(C.fs(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.aR(v.r,A.aq,a2,a2,u)
n.E(new C.b7(a7.$1(A.d.gK(a8)).a,a7.$1(A.d.gK(a8)).b))
for(a8=C.de(a8,1,a2,C.U(a8).c),v=a8.$ti,a8=new C.bU(a8,a8.gI(0),v.k("bU<ai.E>")),v=v.k("ai.E");a8.C();){s=a8.d
if(s==null)s=v.a(s)
s=new C.ao(a7.$1(s).a,a7.$1(s).b)
u.push(s)
r=n.f
if(r!=null)s.bC(r)
s=n.e
if(s!=null)s.a.delete()
n.e=null}$.a_()
a8=C.N()
a8.b=A.ad
a8.c=14
a8.e=A.fq
a8.r=A.aF.j(0.28+0.08*Math.sin(a1.f*12)).gq(0)
a8.z=A.lA
a9.aQ(n,a8)
a8=C.N()
a8.b=A.ad
a8.c=4
a8.e=A.fq
a8.r=D.a9I.gq(0)
a9.aQ(n,a8)
a8=C.N()
a8.b=A.ad
a8.c=1.6
a8.e=A.fq
a8.r=A.c.gq(0)
a9.aQ(n,a8)}for(a8=a4.c,a8=C.ef(a8,a8.r,C.a2(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.t(0,m)
if(l){m=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
m.r=A.aL.j(0.5).gq(0)
m.z=A.AV
q=m.L()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
m.r=(l?A.aL:A.bw).gq(0)
q=m.L()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?A.c:A.aA
i=new C.lP(new C.es("\u2605",a2,a2,A.cU,a2,a2,a2,a2,a2,a2,new C.F(!0,j,a2,a2,a2,a2,v,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a6,A.cn,new C.k4(1),a2,a2,a2,a2,A.cm,a2)
i.fq()
j=i.b
h=j.c
j=j.a.c
i.a6(a9,new C.v(m-h/2,k-j.gbh(j)/2))}g=new B.d9G(a7,a3,a9)
a1.c.bE(0,new B.d9E(g))
a4.d.bE(0,new B.d9F(g))
f=a7.$1(a4.e)
a4=C.bN(C.d9(f,o,a3*0.8),A.h_)
a8=C.N()
a8.r=A.aF.gq(0)
a9.b0(a4,a8)
v=f.ao(0,new C.v(v,0))
a8=C.N()
a8.r=A.c.gq(0)
a9.ak(v,5,a8)
for(a4=a1.r,a8=a4.length,e=0;e<a4.length;a4.length===a8||(0,C.K)(a4),++e){d=a4[e]
a0=d.b/0.8
v=d.a
u=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
u.b=A.ad
s=1-a0
u.c=4*s
u.r=A.aL.j(s).gq(0)
q=u.L()
w.drawCircle(v.a,v.b,a3*(0.3+a0),q)
q.delete()}},
aq(d){return!0}}
B.TD.prototype={
S(){var w=x.n
return new B.aAX(A.cB,C.a([1,0.5,0],w),C.a([0,0,0],w),$,A.bv,0,C.a([],x.X),null,null)}}
B.aAX.prototype={
Z(){this.a0()
this.kM()
B.yw("light_mixer").bw(new B.dYV(this),x.P)},
l4(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aUu()
w.n(new B.dYW())},
aty(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aB(5)/4)
u.e=t
if(A.d.e9(t,new B.dYG()))u.e[w.aB(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aUu(){var w,v,u=this
if(u.z!=="play")return
w=A.k.U(A.k.D(1-B.h0B(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
B.vd(v,A.o.aj(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
B.va("light_mixer",C.E(["best",v],x.N,x.z))}}else u.z="result"},
gcpW(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.E(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.czR[A.o.H(A.k.U(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cj(new B.dYP(v,B.h0B(v.e,t))),r=t[0]
r=B.hp(A.aF,""+A.k.U(r*100)+"%","Red",1,0,new B.dYQ(v),r)
w=t[1]
w=B.hp(A.bn,""+A.k.U(w*100)+"%","Green",1,0,new B.dYR(v),w)
t=t[2]
return B.jw(A.b9,A.fX,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.u(C.a([r,w,B.hp(A.d9,""+A.k.U(t*100)+"%","Blue",1,0,new B.dYS(v),t),new C.bG(A.a7,u,u,new B.fe(A.hl,"Lock it in",new B.dYT(v),A.bl,u),u)],x.p),A.m,u,A.e,A.R,0,A.p))}}
B.bdA.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.bN(new C.ac(0,0,n,m),A.pr)
$.a_()
w=C.N()
w.r=A.x.gq(0)
d.b0(l,w)
w=d.a
J.bH(w.save())
w.clipRRect(C.fs(C.bN(new C.ac(0,0,n,m),A.pr)),$.BQ(),!0)
v=e.ge8()*0.3
u=e.ef(A.J)
l=-v*0.55
t=v*0.45
s=[u.ao(0,new C.v(0,l)),u.ao(0,new C.v(l,t)),u.ao(0,new C.v(v*0.55,t))]
r=[A.CO,F.a8X,F.a9h]
d.kK(new C.ac(0,0,n,m),C.N())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
p.a=A.n1
p.r=r[q].j(l[q]).gq(0)
o=p.L()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.bN(new C.ac(0,0,n,m),A.pr)
m=C.N()
m.b=A.ad
m.c=2
m.r=A.bf.gq(0)
d.b0(n,m)},
aq(d){return!0}}
B.aIO.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.bt9.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpO()}}
B.aIP.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.bta.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpP()}}
B.bq0.prototype={}
B.a68.prototype={
B(d){var w=null
return C.cd(C.eA(w,w,w,!0,!0,D.a9Q,w,1,!0,w,0,!1,w,!1,w,w,C.aF(w,w,w,w,D.aip,w,w,w,new B.cag(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.f94,w,w,w,1,w,!0),D.a9Q,C.cL(C.a([D.dOp,C.cj(new B.cah())],x.p),w,D.bhb,w,w,A.aj,!1),w,!1,!1,w,w)}}
B.Us.prototype={
S(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new B.aBL(w,new C.ap(A.as,$.au()),$,A.bv,0,C.a([],x.X),null,null)}}
B.aBL.prototype={
Z(){this.a0()
this.kM()},
b_j(d){var w=this.d.length
return A.o.H(A.k.bH(A.k.H(A.k.H(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
l4(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b_j(v.f)
if(w!==v.x){v.x=w
B.l1("bell",24+A.o.H(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.n(new B.eui(v))
B.Ay("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c0i(){if(this.d.length<2)return
this.n(new B.eue(this))},
aUO(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.n(new B.eud(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc0h(),p=s.d,o=C.D(C.aH(r,C.b1(r,r,r,new B.brm(p,s.f,r),A.fi),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.ae),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.u(C.a([o,new C.a3(r,40,C.at(C.d(n,r,r,r,r,r,r,D.eLP,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.arK[A.o.H(v,8)].j(0.9)
t=new C.b3(20,20)
o.push(C.aH(r,C.p(r,new C.x(p[v],r,D.eL5,r,r,r,r,r,r,r,r,r),A.h,r,r,new C.o(u,r,r,new C.bv(t,t,t,t),r,r,A.n),r,r,r,A.hi,A.h4,r,r,r),A.z,!1,r,r,r,r,r,r,r,new B.eug(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.ae))}p=A.c.j(0.07)
return B.jw(A.aL,A.fX,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.u(C.a([new B.eE(o,r,r),C.B(C.a([C.D(C.aK(r,A.U,!1,r,!0,A.q,r,C.aL(),s.e,r,r,r,r,r,2,C.bm(r,new C.b2(4,C.m(14),A.V),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kh,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.z,!0,r,!0,r,!1,r,A.ag,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new B.euh(s),r,!1,r,r,!1,r,!0,r,A.a8,r,r,r,r,r,r,r,r,r,r,r,A.di,!0,A.a6,r,A.am,r,r,r,r),1),A.aa,new B.fe(A.hQ,"Add",s.gc0f(s),A.c,r),A.bq,new B.fe(A.m0,"Spin",q,A.bl,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.R,0,A.p))}}
B.brm.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.v(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.a_()
w=C.N()
w.r=D.b0M.gq(0)
a1.ak(d,f,w)
w=C.N()
w.b=A.ad
w.c=3
w.r=A.aL.gq(0)
a1.ak(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=C.bV(d,a0)
n=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
n.r=D.arK[A.o.H(q,8)].gq(0)
m=n.L()
n=p*57.29577951308232
f.drawArc.apply(f,[C.cp(o),n,s,!0,m])
m.delete()
o=C.bV(d,a0)
l=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
l.b=A.ad
l.c=2
l.r=A.c.j(0.6).gq(0)
m=l.L()
f.drawArc.apply(f,[C.cp(o),n,s,!0,m])
m.delete()
J.bH(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.an(o,0,11)+"\u2026"
k=new C.lP(new C.es(o,i,i,A.cU,i,i,i,i,i,i,D.ezN),A.a6,A.cn,new C.k4(1),i,i,i,i,A.cm,i)
k.fq()
o=k.b
n=o.c
o=o.a.c
k.a6(a1,new C.v(a0-n-16,-o.gbh(o)/2))
f.restore()}f=C.N()
f.r=D.a9D.gq(0)
a1.ak(d,20,f)
f=C.N()
f.b=A.ad
f.c=3
f.r=A.aL.gq(0)
a1.ak(d,20,f)
j=new C.aR(h.r,A.aq,i,i,C.a([],x.v))
e-=a0
j.E(new C.b7(g,e+26))
e-=10
j.E(new C.ao(g-14,e))
j.E(new C.ao(g+14,e))
j.E(new C.bE())
e=C.N()
e.r=A.c.gq(0)
a1.aQ(j,e)
e=C.N()
e.b=A.ad
e.c=2
e.r=A.aV.gq(0)
a1.aQ(j,e)},
aq(d){return!0}}
B.Tc.prototype={
S(){return new B.bfR($,A.bv,0,C.a([],x.X),null,null)}}
B.bfR.prototype={
Z(){this.a0()
this.kM()},
l4(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
B.Ay("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a2G(900,new B.dLC())}w.n(new B.dLD())},
aUQ(d){return this.n(new B.dLx(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aT(A.o.u(A.k.aj(m,60)),2,"0")
v=A.a.aT(A.o.u(A.o.H(A.k.dF(m),60)),2,"0")
m=C.b1(n,n,n,new B.bmh(l,A.cH,n),A.aHX)
u=C.d(w+":"+v,n,n,n,n,n,n,D.eDP,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.at(new C.a3(280,280,new C.am(A.A,n,A.a9,A.q,C.a([m,C.u(C.a([u,C.d(t,n,n,n,n,n,n,D.eCU,n,n,n),A.av,C.d("Sessions done: "+o.r,n,n,n,n,n,n,A.BO,n,n,n)],s),A.m,n,A.e,A.R,0,A.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.cQI[r]
u.push(new B.dy(""+q+" min",o.d===q,new B.dLz(o,q),n,A.cH,n))}m=o.f
p=m?W.x5:A.iK
m=m?"Pause":"Start"
return B.jw(A.cH,A.fX,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.u(C.a([new B.eE(u,n,n),new B.eE(C.a([new B.fe(p,m,new B.dLA(o),A.bl,n),new B.fe(A.jI,"Reset",new B.dLB(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.R,0,A.p))}}
B.bmh.prototype={
a6(d,e){var w,v,u,t,s=e.ef(A.J),r=e.a/2-14
$.a_()
w=C.N()
w.b=A.ad
w.c=16
w.r=A.c.j(0.08).gq(0)
d.ak(s,r,w)
w=C.bV(s,r)
v=C.N()
v.b=A.ad
v.c=16
v.d=A.bV
u=this.c
t=C.aq(u,A.c,0.4)
t.toString
v.sar(new C.fR(A.A,-1.5707963267948966,4.71238898038469,A.w,C.a([u,t,u],x.O),null,null).az(0,C.bV(s,r)))
d.fQ(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aq(d){return d.b!==this.b}}
B.Sq.prototype={
S(){return new B.bfw($,A.bv,0,C.a([],x.X),null,null)}}
B.bfw.prototype={
Z(){this.a0()
this.kM()},
l4(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Oz.h(0,p.d)
w.toString
v=A.d.ft(w,new B.dxv())
u=A.k.H(p.f,v)
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
B.l1("flute",D.bJC[t]+5,1400,0.35)}p.n(new B.dxw())},
gc0l(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.Iz("Press Start",0.5)
w=D.Oz.h(0,this.d)
w.toString
v=A.d.ft(w,new B.dxq())
u=A.k.H(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.Iz("Breathe in",0.5+0.5*A.dG.av(0,p))
case 1:return new C.Iz("Hold",1)
case 2:return new C.Iz("Breathe out",1-0.5*A.dG.av(0,p))
default:return new C.Iz("Hold",0.5)}}}return new C.Iz("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc0l(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.ht.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,A.h,q,q,new C.o(s,q,q,q,u===0?C.a([new C.aa(0,A.G,A.ht.j(0.35),A.J,40)],v):q,q,A.a5),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,A.BX,q,q,q))
n.push(C.an(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,A.kh,q,q,q),q,q,q,q,q,q))
n=C.at(new C.a3(300,340,new C.am(A.A,q,A.a9,A.q,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aV(D.Oz.geb(D.Oz));w.C();){v=w.gT(w)
o.push(new B.dy(v,r.d===v,new B.dxt(r,v),q,A.ht,q))}w=r.e
v=w?A.Y6:A.iK
w=w?"Stop":"Start"
o.push(new B.fe(v,w,new B.dxu(r),A.bl,q))
return B.jw(A.ht,A.fX,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new B.eE(o,q,q))}}
B.aF6.prototype={}
B.T3.prototype={
S(){return new B.bfL(new C.cn(null,x.A),C.a([],x.au),A.aG,A.c)}}
B.bfL.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aF(s,s,s,s,D.m6,s,s,s,new B.dJ3(t,d),s,s,s,s,"Share",s)],r),p=C.bu(C.m(18),new C.en(C.aH(s,C.b1(s,s,s,new B.bhM(t.e,t.x,s),A.fi),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dJ4(t),new B.dJ5(t),s,s,s,s,s,s,s,s,s,new B.dJ6(t),s,s,s,s,!1,A.ae),t.d),A.ap),o=C.a([],r)
for(w=0;w<9;++w){v=D.czh[w]
u=!t.w&&t.f.A(0,v)
o.push(new B.DW(v,u,new B.dJ7(t,v),!1,s))}u=t.r
return B.jw(A.bz,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.C(A.bR,p,s),"DRAW PAD",C.u(C.a([new B.eE(o,s,s),B.hp(A.bz,""+A.k.U(u),"Brush",30,2,new B.dJ8(t),u),new B.eE(C.a([new B.dy("Eraser",t.w,new B.dJ9(t),A.L1,A.bz,s),new B.fe(A.uJ,"Undo",new B.dJa(t),A.c,s),new B.fe(A.e4,"Clear",new B.dJb(t),A.c,s),new B.fe(A.Lc,"Paper",new B.dJc(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.R,0,A.p))}}
B.bhM.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.a_()
w=C.N()
w.r=this.c.gq(0)
d.bd(new C.ac(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=$.a_()
p=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
o=r.a
p.r=o.gq(o)
n=r.b
p.c=n
p.d=A.bV
p.e=A.fq
p.b=A.ad
m=r.c
if(m.length===1){q=A.d.gK(m)
m=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
m.r=o.gq(o)
l=m.L()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=C.a([],t)
k=new C.aR(q.r,A.aq,null,null,o)
o.push(new C.b7(A.d.gK(m).a,A.d.gK(m).b))
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
k.e=null}q=new C.ao(A.d.gai(m).a,A.d.gai(m).b)
o.push(q)
o=k.f
if(o!=null)q.bC(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.L()
q=k.e
u.drawPath((q==null?k.e=new C.cG(k.gbM().a.snapshot()):q).a,l)
l.delete()}}},
aq(d){return!0}}
B.TP.prototype={
S(){var w=x.S
return new B.aB6(C.aZ(w),C.aZ(w))}}
B.aB6.prototype={
Z(){this.a0()
this.ap_()},
ap_(){var w,v,u=this,t=x.N,s=C.bj(D.cUJ,!0,t)
A.d.BG(s)
w=x.S
v=C.U(s).c
t=C.z(C.de(s,0,C.dJ(u.d,"count",w),v),t)
A.d.v(t,C.de(s,0,C.dJ(u.d,"count",w),v))
A.d.BG(t)
u.e=t
u.f.a7(0)
u.r.a7(0)
u.w=0
u.x=!1},
c0g(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
B.l1("bell",12+A.o.H(d,9),150,0.35)
s.n(new B.e32(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gK(0)
u=w.gai(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bM(A.nk,new B.e33(s,v,u),t)
else{s.x=!0
C.bM(A3.DB,new B.e34(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,A.aKa,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.aj(p,2)+" / "+o
o=x.p
p=C.u(C.a([new C.C(A.wy,C.B(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?A.aL:A.al,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hz,A.j,0,q,q),q),C.D(C.ih(!0,q,q,A.z,new C.hJ(v,8,8,1,q),new B.e38(r),r.e.length,A.bk,q,A.aj,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cAE[t]
o.push(new B.dy(s.b,r.d===s.a,new B.e39(r,s),q,A.b_,q))}o.push(new B.fe(D.brW,"New game",new B.e3a(r),A.bl,q))
return B.jw(A.b_,A.fX,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new B.eE(o,q,q))}}
B.U0.prototype={
S(){return new B.aBp(C.a([],x.t))}}
B.aBp.prototype={
c0k(d){A.d.a7(this.d)
this.w=!0
this.aUP()},
aUP(){this.d.push(A.cB.aB(4))
this.e=0
this.XM()},
XM(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$XM=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.n(new B.ebx(t))
s=x.H
w=3
return C.b(C.bM(A.lm,null,s),$async$XM)
case 3:r=t.d,q=C.bj(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aOB(n)
w=7
return C.b(C.bM(new C.b8(1000*Math.max(280,600-r.length*18)),null,s),$async$XM)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.n(new B.eby(t))
case 1:return C.h(u,v)}})
return C.i($async$XM,v)},
aOB(d){this.n(new B.ebv(this,d))
B.l1("marimba",D.ajY[d]+5,450,0.55)
C.bM(A.Dy,new B.ebw(this),x.H)},
c0m(d){var w,v,u=this
if(!u.w||u.r)return
u.aOB(d)
w=u.d
v=u.e
if(w[v]!==d){B.dL(90,"",600,0,0.5,"saw")
u.n(new B.ebz(u))
return}++v
u.e=v
if(v===w.length){u.n(new B.ebA(u))
C.bM(A.il,new B.ebB(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,E.R3,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.eMc,A.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aqK[v]
u=u.j(q.f===v?1:0.35)
t=new C.b3(28,28)
s=q.f===v?C.a([new C.aa(0,A.G,D.aqK[v].j(0.8),A.J,30)],w):p
r=new C.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(C.aH(p,C.di(p,p,p,p,A.b8,new C.o(u,p,new C.c2(r,r,r,r),new C.bv(t,t,t,t),s,p,A.n),A.jf,p,p,p,p,p,p,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.ebC(q,v),p,p,p,p,p,p,!1,A.ae))}o=C.at(new C.C(A.a8,C.u(C.a([o,A.ar,n,A.d3,new C.fJ(1,C.m_(1,l,2,12,12,p,A.dL,!1),p)],m),A.m,p,A.b6,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return B.jw(A.cJ,A.fX,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new B.eE(C.a([new B.fe(A.iK,n,q.gc0j(q),A.bl,p)],m),p,p))}}
B.Ul.prototype={
S(){return new B.bgZ(new C.ap(A.as,$.au()))}}
B.bgZ.prototype={
ast(d){return C.of(A.k.aa(d,2),C.ae("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new B.epP(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d8(C.aJ(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new B.epY()
l=C.aK(m,A.U,!1,m,!0,A.q,m,C.aL(),l,m,m,m,m,m,2,C.bm(m,m,m,m,m,m,m,m,!0,new C.b2(4,C.m(16),A0.vI),m,m,m,m,m,m,m,m,m,m,m,new C.b2(4,C.m(16),D.aPO),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.l7,"Bill amount",!0,!0,!1,m,m,m,m,D.eJM,"$ ",m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ag,m,m,m,m,m,A.dX,m,m,m,1,m,m,!1,"\u2022",m,new B.epU(n),m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.aJp,!0,A.a6,m,A.am,m,m,m,m)
k=A.bl.j(0.1)
s=C.m(20)
r=C.H(A.bl.j(0.35),A.r,1)
q=x.p
s=C.cL(C.a([l,A.bt,C.p(m,C.u(C.a([t.$2("Tip ("+A.k.U(n.e)+"%)","$"+n.ast(w)),t.$2("Total","$"+n.ast(v)),Q.UJ,t.$3$big("Each of "+n.f+" pays","$"+n.ast(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.h,m,m,new C.o(k,m,r,s,m,m,A.n),m,m,m,m,A.c2,m,m,m)],q),m,A.fA,m,m,A.aj,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.clU[p]
r.push(new B.dy(""+o+"%",A.k.U(n.e)===o,new B.epV(n,o),m,A.bl,m))}l=n.f
return B.jw(A.bl,A.fX,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.u(C.a([new B.eE(r,"TIP",m),B.hp(A.b_,""+l,"People",20,1,new B.epW(n),l),new B.eE(C.a([new B.dy("Round up",n.r,new B.epX(n),m,A.aL,m)],q),m,m)],q),A.m,m,A.e,A.R,0,A.p))}}
B.TN.prototype={
S(){var w=C.a([3,5],x.t)
return new B.bgs(w,A.cB,$,A.bv,0,C.a([],x.X),null,null)}}
B.bgs.prototype={
Z(){this.a0()
this.kM()},
l4(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.H(A.k.bH(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t
B.a67("snare",0.5)}u.n(new B.e1I())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.he()
u.w=t
u.x=t?0:3.141592653589793
B.l1("bell",24,400,0.5)}u.n(new B.e1J())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new B.b9z(v,o.r>0,n))}u=C.aH(n,C.at(C.c8(A.fF,m,A.bx,18,18),n,n,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.e1B(o),n,n,n,n,n,n,!1,A.ae)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.H(A.du,A.r,6)
s=C.a([new C.aa(0,A.G,A.aL.j(0.4),A.J,30)],x.V)
u=C.aH(n,C.at(C.e5(A.A,C.p(A.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.eJ1,n,n,n),A.h,n,n,new C.o(n,n,v,n,s,D.dUp,A.a5),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.e1C(o),n,n,n,n,n,n,!1,A.ae)}else{m=o.as
u=C.aH(n,C.at(C.u(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.ezi,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kh,n,n,n)],x.p),A.m,n,A.e,A.R,0,A.p),n,n,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.e1D(o),n,n,n,n,n,n,!1,A.ae)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.cOo[r]
v.push(new B.dy(q.b,o.d===q.a,new B.e1E(o,q),q.c,A.bE,n))}v=C.a([new B.eE(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(B.hp(A.bE,""+s,"Dice",4,1,new B.e1F(o),s))}if(o.d==="num"){s=o.z
s=B.hp(A.bE,""+s,"From",100,1,new B.e1G(o),s)
p=o.Q
A.d.v(v,C.a([s,B.hp(A.bE,""+p,"To",1000,2,new B.e1H(o),p)],m))}return B.jw(A.bE,A.fX,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.u(v,A.m,n,A.e,A.R,0,A.p))}}
B.b9z.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cB.ae()-0.5)*0.6
else w=0
v=C.m(22)
u=C.a([new C.aa(0,A.G,A.x.j(0.4),A.cs,14)],x.V)
t=C.a([],x.p)
for(s=D.d48.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bG(s[q],p,p,C.p(p,p,A.h,p,p,I.a7b,p,18,p,p,p,p,p,18),p))
return C.et(A.A,w,C.p(p,new C.am(A.W,p,A.a9,A.q,t,p),A.h,p,p,new C.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bB,p,p,100),p)}}
B.aIa.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.bt1.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bp8()}}
B.aIs.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.bt5.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpr()}}
B.aIX.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.btf.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpX()}}
B.aJq.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.btr.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bqq()}}
B.b3g.prototype={
B(d){var w,v=this,u=null,t=v.c,s=D.ayu.h(0,t)
$.aZk=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aF(u,u,u,u,E.qq,u,u,u,new B.cmm(d),u,u,u,u,u,u),C.D(C.d(t,u,1,A.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(C.aF(u,u,u,u,C.V(A.Lg,s,u,u,u,22),u,u,u,new B.cmn(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.C(D.bkb,C.B(t,A.m,u,A.e,A.j,0,u,u),u),C.D(v.f,1)],w)
w.push(C.p(u,v.r,A.h,u,u,new C.o(D.TT,u,new C.c2(new C.ay(A.c.j(0.08),1,A.r,-1),A.V,A.V,A.V),u,u,u,A.n),u,u,u,u,A.DE,u,u,1/0))
return C.cd(u,A.bW,C.bq(!0,C.u(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0),u,!1,!1,u,u)}}
B.dy.prototype={
B(d){var w,v,u,t=this,s=null,r=C.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=C.H(o,A.r,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)A.d.v(v,C.a([C.V(u,q?t.r:A.aQ,s,s,s,16),A.eA],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?A.c:A.al,s,s,s,s,s,s,s,s,12,s,s,A.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.C(D.V0,C.aH(s,C.di(s,C.B(v,A.m,s,A.e,A.R,0,s,s),s,s,A.b8,new C.o(p,s,o,r,s,s,A.n),A.eG,s,s,s,A.h4,s,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.cmi(t),s,s,s,s,s,s,!1,A.ae),s)}}
B.eE.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a3(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.D(C.ch(C.B(this.c,A.m,w,A.e,A.j,0,w,w),A.q,w,A.z,w,w,w,w,A.aZ),1))
return new C.C(A.cK,C.B(v,A.m,w,A.e,A.j,0,w,w),w)}}
B.asX.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.asw(d).cA2(q,A.bG,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.D(C.a7Q(C.mb(s,s,s,u,v,t.e,A.k.D(w,v,u)),q),1)
u=t.x
return new C.a3(s,34,C.B(C.a([new C.a3(78,s,r,s),q,new C.a3(38,s,C.d(u==null?A.k.aa(w,1):u,s,s,s,s,s,s,Ac.QQ,A.dM,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
B.fe.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.C(D.V0,C.aD(!1,A.Y,!0,C.m(12),C.aI(!1,C.m(12),!0,new C.C(A9.acr,C.B(C.a([C.V(w.c,u,v,v,v,17),A.eA,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.R,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new B.cmh(w),v,v,v,v,v,v,v),A.h,t,0,v,v,v,v,v,A.ac),v)}}
B.DW.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.exO:u
w=t?A.c:A.bf
w=C.H(w,A.r,t?2.5:1)
return C.aH(u,C.di(u,u,u,u,A.b8,new C.o(p,u,w,u,t?C.a([new C.aa(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a5),A.hP,u,r,D.acf,u,u,u,s),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.cmo(v),u,u,u,u,u,u,!1,A.ae)}}
B.mc.prototype={
a2G(d,e){var w=C.dc()
w.sex(C.cN(C.dB(0,0,0,d,0,0),new B.cmj(this,w,e)))
this.fb$.push(w.b8())},
kM(){var w=this,v=w.qR(new B.cml(w))
v.kn(0)
w.fa$!==$&&C.aO()
w.fa$=v}}
B.a8O.prototype={
bss(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,C.K)(w),++q)for(p=A.d.gag(w[q]);p.C();){o=p.gT(0)
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
for(m=0,q=0;q<w.length;w.length===p||(0,C.K)(w),++q){for(v=A.d.gag(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gT(0)
n=J.a6(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&C.aO()
g.ax=m
w=g.bvz()
g.ay!==$&&C.aO()
g.ay=w},
bvz(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
B.a8P.prototype={
cw8(d,e){var w,v,u,t,s,r,q,p
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
B.un.prototype={}
B.Nq.prototype={}
B.xb.prototype={}
B.Np.prototype={
f8(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.ajU[w.aB(7)]
w=w.he()?0:12
u=A.o.H(t.c++,3)===0?"flute":"bell"
B.l1(u,v+w-12,2200,0.1)}}
B.Tj.prototype={
S(){var w=$.au()
return new B.aAu(new C.cn(null,x.A),new C.ap(A.as,w),new B.Np(A.cB),D.cQc,A.at,D.a_u,$,A.bv,0,C.a([],x.X),null,null)}}
B.aAu.prototype={
Z(){var w,v=this
v.a0()
v.kM()
v.a.toString
w=$.fUO
if(w==null)w=$.fUO=B.coT()
w.bw(new B.dOk(v),x.P)},
p(){var w=this.e
w.R$=$.au()
w.O$=0
this.bpz()},
ckk(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.x)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n)q.push(new B.dNN(p[n]).$0())
w.push(q)}this.w=w},
gUa(){var w=this.fy
return w.A(0,A.at)?100:Math.min(w.a,w.b)*0.43},
aq9(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
atZ(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.aq9(d.x,d.w,105/Math.max(w,3))
C.eG()
B.l1("bell",(A.d.cP(D.a_5,d.c)+1)*3+12,900,0.45)
B.dL(300,"",280,1.4,0.15,"tri")},
l4(d){var w,v,u,t,s,r,q,p=this
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
p.x=A.k.D(p.x+p.as*d,-85,85)
q=Math.exp(-d*2.2)
v=p.Q*=q
p.as*=q
if(p.ch&&Math.abs(v)<3)p.y=p.y+7*d/Math.sqrt(p.z)}while(v=p.y,v>180)p.y=v-360
while(v<-180){v+=360
p.y=v}},
c10(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.at))return null
w=n.fy
v=n.gUa()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gUa()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cw8((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c1_(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.n(new B.dNL(w))
return}w.n(new B.dNM(w,v,A.a.i(d).toLowerCase()))},
bHX(){var w=null,v=this.c
v.toString
C.cf(w,w,!0,w,new B.dNJ(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aF(n,n,n,n,D.bux,n,n,n,o.gbHW(),n,n,n,n,"Earth facts",n),C.aF(n,n,n,n,D.m6,n,n,n,new B.dO5(o,d),n,n,n,n,"Share",n)],l),j=C.cj(new B.dO6(o,m)),i=A.c.j(0.06)
i=C.a([C.aK(n,A.U,!1,n,!0,A.q,n,C.aL(),o.e,n,n,n,n,n,2,C.bm(n,new C.b2(4,C.m(14),A.V),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,H.BU,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bCq,n,n,n,n,n,n,n,n,n,n,n,n),A.z,!0,n,!0,n,!1,n,A.ag,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc0Z(),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.ix,!0,A.a6,n,A.am,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
w.push(new B.dy(s.a,!1,new B.dO7(o,s),A.mF,A.b_,n))}i.push(new C.C(A.im,new C.a3(n,38,C.cL(w,n,n,n,n,A.aZ,!1),n),n))}i.push(A.ar)
w=C.a([new B.dy("Whole Earth",!1,new B.dOb(o),A.h6,A.b_,n)],l)
for(v=D.ayl.gdH(D.ayl),v=v.gag(v);v.C();){u=v.gT(v)
w.push(new B.dy(u.a,!1,new B.dOc(o,u),n,A.b_,n))}w.push(new B.dy("Random",!1,new B.dOd(o),A.m0,A.b_,n))
i.push(new B.eE(w,"GO TO",n))
w=o.z
i.push(B.hp(A.b_,A.k.aa(w,1)+"x","Zoom",16,0.8,new B.dOe(o),w))
w=o.dy
i.push(B.hp(A.cJ,A.a.aT(A.o.u(A.k.bH(w)),2,"0")+":00","Time",24,0,new B.dOf(o),w))
w=o.fr
i.push(B.hp(A.bl,o.cj7(),"Season",365,0,new B.dOg(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lu:D.Ey
i.push(new B.eE(C.a([new B.dy("Spin",w,new B.dOh(o),D.bpO,A.b_,n),new B.dy("Night",v,new B.dOi(o),A.ut,A.b_,n),new B.dy("Borders",u,new B.dO8(o),D.bpS,A.b_,n),new B.dy("Names",r,new B.dO9(o),Q.agz,A.b_,n),new B.dy("Music",q,new B.dOa(o),p,A.b_,n)],l),n,n))
return B.jw(A.b_,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.u(i,A.m,n,A.e,A.R,0,A.p))},
cj7(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.arl[u])v=u
return A.i2[v]+" "+(A.k.bH(w-D.arl[v])+1)},
c0Y(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new G.mS(1,A.o.H((A.d.cP(D.a_5,t)+1)*47,360),0.55,1).iF()
r=new B.dNH()
q=C.m(20)
p=C.H(s.j(0.6),A.r,1)
o=x.p
n=C.B(C.a([C.p(j,j,A.h,j,j,new C.o(s,j,j,j,j,j,A.a5),j,10,j,j,j,j,j,10),A.aa,C.D(C.d(d.a,j,1,A.a2,j,j,j,A.dQ,j,j,j),1),C.aF(j,j,j,j,A.LB,j,j,j,new B.dNG(this),j,j,j,j,j,A.c8)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hY,j,j,j)
m=D.d2R.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.B(C.a([m,A.aa,r.$2("PEOPLE",l?B.fbx(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",B.Fk(i)+" km\xb2")
if(l)m=(w<10?A.k.aa(w,1):B.Fk(w))+" per km\xb2"
else m="\u2014"
m=C.B(C.a([i,A.aa,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.aa(u,3):A.k.aa(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.u(C.a([n,t,A.P,v,A.P,m,A.P,C.B(C.a([i,A.aa,r.$2("ECONOMY",l>0?"$"+B.fbx(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.R,0,A.p),A.h,j,j,new C.o(D.Th,j,p,q,j,j,A.n),j,j,j,j,D.acL,j,j,j)}}
B.bbN.prototype={
a6(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.a_(),d7=C.N()
d7.r=D.za.gq(0)
d8.bd(new C.ac(0,0,0+d4,0+d5),d7)
w=new C.f0()
w.dX(4)
for(d7=d8.a,v=0;v<90;++v){u=w.ae()
t=w.ae()
s=w.ae()
r=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
r.r=A.c.j(0.25+w.ae()*0.5).gq(0)
q=r.L()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new C.v(d4,d5)
o=d2.f
u=C.N()
t=x.O
u.sar(new C.bR(A.A,0.5,A.w,d3,0,C.a([A.K,A.b_.j(0.35),A.K],t),D.cC7,d3).az(0,C.bV(p,o*1.1)))
d8.ak(p,o*1.05,u)
n=C.bV(p,o)
u=C.N()
u.sar(D.dUt.az(0,n))
d8.ak(p,o,u)
J.bH(d7.save())
u=x.v
d6=new C.aR(d6.r,A.aq,d3,d3,C.a([],u))
d6.E(new C.ky(n))
d8.tj(0,d6)
m=d2.d*3.141592653589793/180
l=d2.e*3.141592653589793/180
k=Math.sin(m)
j=Math.cos(m)
i=Math.sin(l)
h=Math.cos(l)
g=C.N()
g.b=A.ad
m=g.c=0.7
g.r=A.c.j(0.1).gq(0)
f=new B.d5E(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.L()
s=d.e
d7.drawPath((s==null?d.e=new C.cG(d.gbM().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.a_()
a3=C.a([],u)
d=new C.aR(a2.r,A.aq,d3,d3,a3)
a3.push(new C.b7(s,r))}else{s=new C.ao(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bC(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.L()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cG(d.gbM().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.L()
s=d.e
d7.drawPath((s==null?d.e=new C.cG(d.gbM().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.a_()
a3=C.a([],u)
d=new C.aR(a2.r,A.aq,d3,d3,a3)
a3.push(new C.b7(s,r))}else{s=new C.ao(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bC(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.L()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cG(d.gbM().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.H((A.d.cP(D.a_5,a7.c)+1)*47,360)
$.a_()
b0=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
a3=a8?0.35:0.5
b0.r=new G.mS(1,a9,a3,a8?1:0.62).iF().gq(0)
b1=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
b1.b=A.ad
b1.c=a8?2.2:m
b1.e=A.fq
b1.r=(a8?A.c:A.x.j(0.55)).gq(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,C.K)(a3),++b3){b4=a3[b3]
b5=b4.length/4|0
b6=$.a_()
b7=C.a([],u)
b8=new C.aR(b6.r,A.aq,d3,d3,b7)
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
if(v===0){b6=new C.b7(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bC(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new C.ao(b6,c8)
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
q=b0.L()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cG(b8.gbM().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.L()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cG(b8.gbM().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.K)(a5),++b3){d=a5[b3]
$.a_()
s=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
s.b=A.ad
s.c=5
s.r=A.c.j(0.25).gq(0)
s.z=A.qz
q=s.L()
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
b2=a8?A.c:A.c.j(0.9)
c9=B.hse(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbh(b2)
c9.a6(d8,new C.v(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.D(k*c0+j*c1*c4,-1,1)
$.a_()
u=C.N()
u.sar(new C.bR(A.A,0.5,A.w,d3,0,C.a([A.K,A.K,D.aZP.j(0.78)],t),D.cQx,d3).az(0,C.bV(new C.v(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.ak(p,o,u)}$.a_()
d4=C.N()
d4.sar(new C.bR(A.A,0.5,A.w,d3,0,C.a([A.K,A.x.j(0.4)],t),D.d0r,d3).az(0,n))
d8.ak(p,o,d4)
d7.restore()
d7=C.N()
d7.b=A.ad
d7.c=1.4
d7.r=A.hv.j(0.5).gq(0)
d8.ak(p,o,d7)},
aq(d){return!0}}
B.aIy.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.aIz.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpy()}}
B.bpW.prototype={}
B.Uo.prototype={
S(){return new B.bh1()}}
B.bh1.prototype={
gaOb(){var w=this.d
if(w===$)w=this.d=A.cB.aB(16)
return w},
B(d){var w=null,v=C.eA(w,w,w,!0,!0,D.za,w,1,!0,w,0,!1,w,!1,w,w,C.aF(w,w,w,w,D.aip,w,w,w,new B.eqt(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.f3i,w,w,w,1,w,!0),u=C.m(18),t=A.b_.j(0.1),s=C.H(A.b_.j(0.35),A.r,1),r=x.p
return C.cd(v,D.za,C.cL(C.a([C.p(w,C.B(C.a([D.btg,A.aw,C.D(C.d(D.cFF[this.gaOb()],w,w,w,w,w,w,D.a4D,w,w,w),1),C.aF(w,w,w,w,D.bDm,w,w,w,new B.equ(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new C.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bB,w,w,w),A.ay,C.cj(new B.eqv())],r),w,A.Vl,w,w,A.aj,!1),w,!1,!1,w,w)}}
B.U9.prototype={
S(){return B.hsG()}}
B.bgP.prototype={
cbg(d){var w=d.c,v=B.hsI(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.v(Math.cos(t)*v,Math.sin(t)*v)},
Z(){this.a0()
this.kM()},
l4(d){var w,v,u,t=this
t.e.f8(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.cbg(w)
u=new C.v(-v.a,-v.b).aM(0,t.w)
v=C.l2(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc11(){var w=this.ch
return new C.v(w.a/2,w.b/2).ao(0,this.x)},
c15(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
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
aVa(d){this.n(new B.eiL(this,d))
C.eG()
B.l1("bell",D.d0B[A.o.H(A.d.cP(D.AM,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aF(m,m,m,m,D.m6,m,m,m,new B.eiW(n,d),m,m,m,m,"Share",m)],k),i=C.cj(new B.eiX(n,l)),h=C.a([new B.dy("All",!1,new B.eiY(n),A.Ye,A.aL,m)],k)
for(w=0;w<10;++w){v=D.AM[w]
h.push(new B.dy(v.a,n.z===v,new B.eiZ(n,v),m,C.aY(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.aa(s,0)+" d/s":""+A.k.U(s)+" d/s"
t=B.hp(A.aL,s,"Time",1,0,new B.ej_(n),u/t)
u=n.w
u=B.hp(A.aL,A.k.aa(u,1)+"x","Zoom",9,0.5,new B.ej0(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lu:D.Ey
return B.jw(A.aL,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.u(C.a([new B.eE(h,"GO TO",m),t,u,new B.eE(C.a([new B.dy("Orbits",s,new B.ej1(n),m,A.aL,m),new B.dy("Names",r,new B.ej2(n),m,A.aL,m),new B.dy("Asteroids",q,new B.ej3(n),m,A.aL,m),new B.dy("Music",p,new B.ej4(n),o,A.aL,m)],k),m,m)],k),A.m,m,A.e,A.R,0,A.p))},
c12(d){var w,v,u,t,s,r=null,q=C.aY(d.z),p=d.c,o=p*8.317,n=new B.eiJ(),m=C.m(20),l=C.H(q.j(0.6),A.r,1),k=C.p(r,r,A.h,r,r,new C.o(q,r,r,r,r,r,A.a5),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.B(C.a([k,A.aa,C.D(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.l6,r,r,r),1),C.aF(r,r,r,r,A.LB,r,r,r,new B.eiI(this),r,r,r,r,r,A.c8)],w),A.m,r,A.e,A.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,D.Rc,r,r,r)
v=n.$2("WIDTH",B.Fk(d.d*2)+" km")
u=p===0
p=C.B(C.a([v,A.aa,n.$2("FROM THE SUN",u?"\u2014":C.t(p)+" AU ("+B.Fk(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new B.eiK().$1(v))
t=d.f
v=C.B(C.a([v,A.aa,n.$2("ONE DAY",t>=48?A.k.aa(t/24,0)+" Earth days":A.k.aa(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.B(C.a([n.$2("GRAVITY",C.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.aa(50*t/9.81,s)+" kg"),A.aa,n.$2("TEMPERATURE",""+A.o.U(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.aa(o,1)+" minutes":A.k.aa(o/60,1)+" hours"
return C.p(r,C.u(C.a([j,A.av,k,A.P,p,A.P,v,A.P,s,A.P,C.B(C.a([t,A.aa,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.R,0,A.p),A.h,r,r,new C.o(D.Th,r,l,m,r,r,A.n),r,r,r,r,D.acL,r,r,r)}}
B.bo0.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.a_()
w=C.N()
w.r=D.za.gq(0)
a7.bd(new C.ac(0,0,0+a5,0+a6),w)
v=new C.f0()
v.dX(8)
for(w=a7.a,u=0;u<110;++u){t=v.ae()
s=v.ae()
r=v.ae()
q=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
q.r=A.c.j(0.2+v.ae()*0.5).gq(0)
p=q.L()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc11()
n=a5.w
if(a5.as)for(a6=A.d.gag(D.AM),t=new C.hK(a6,new B.eKi()),s=o.a,r=o.b;t.C();){q=a6.gT(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
m.b=A.ad
m.c=1
m.r=A.c.j(0.12).gq(0)
p=m.L()
w.drawCircle(s,r,q*n,p)
p.delete()}if(a5.ax)for(a6=a5.CW,t=o.a,s=o.b,r=a5.cx,u=0;u<a6.length;++u){q=a6[u]
m=a5.f
l=r[u]
k=q+m*0.0016/l
j=(l===0?0:30+150*Math.sqrt(l/30.1))*n
q=Math.cos(k)
m=Math.sin(k)
l=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
l.r=A.c.j(0.5).gq(0)
p=l.L()
w.drawCircle(t+q*j,s+m*j,0.9,p)
p.delete()}i=B.hsH(A.d.gK(D.AM))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.N()
s=x.O
t.sar(new C.bR(A.A,0.5,A.w,a4,0,C.a([A.aL.j(0.5),A.K],s),a4,a4).az(0,C.bV(o,a6)))
a7.ak(o,a6,t)
t=C.N()
t.sar(D.dUn.az(0,C.bV(o,i)))
a7.ak(o,i,t)
if(a5.at){h=B.fWp("Sun",10.5,A.al)
h.a6(a7,o.ao(0,new C.v(-h.b.c/2,i+4)))}for(a6=A.d.gag(D.AM),t=new C.hK(a6,new B.eKj()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gT(0)
g=l.c
j=g===0?0:30+150*Math.sqrt(g/30.1)
f=l.e
k=f<=0?0:6.283185307179586*(a5.f/f)+g*1.7
g=q+Math.cos(k)*j*n
f=m+Math.sin(k)*j*n
j=(1.5+1.6*Math.log(l.d/1000+1))*Math.sqrt(n)
e=C.aY(l.z)
d=l.a
if(d==="Saturn"){J.bH(w.save())
w.translate(g,f)
w.rotate(-22.91831180523293,0,0)
a0=C.d9(A.J,j*1.3,j*4.2)
a1=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
a1.b=A.ad
a1.c=j*0.45
a1.r=A.bI.j(0.55).gq(0)
p=a1.L()
w.drawOval(C.cp(a0),p)
p.delete()
w.restore()}a0=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
a0.r=e.j(0.3).gq(0)
a0.z=A.qz
p=a0.L()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
a1=C.aq(e,A.x,0.55)
a1.toString
a0.sar(new C.bR(N.pK,0.5,A.w,a4,0,C.a([A.c,e,a1],s),F.ZK,a4).az(0,C.bV(new C.v(g,f),j)))
p=a0.L()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
l.b=A.ad
l.c=2
l.r=A.c.gq(0)
p=l.L()
w.drawCircle(g,f,j+7,p)
p.delete()}if(r&&d==="Earth"){k=a5.f/27.3*2*3.141592653589793
a2=j+11*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
a3.r=A.c.gq(0)
p=a3.L()
w.drawCircle(g+l*a2,f+a0*a2,1.8*a1,p)
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.cKr[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
a3.r=A.al.gq(0)
p=a3.L()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=B.fWp(d,10.5,A.al)
h.a6(a7,new C.v(g+-h.b.c/2,f+(j+4)))}}},
aq(d){return!0}}
B.Tk.prototype={
S(){var w=x.i
return new B.aAv(new B.Np(A.cB),C.bY(5,0,!1,w),C.bY(5,0,!1,w),C.bY(5,null,!1,x.cD),A.J,A.J,C.a([],x.g),$,A.bv,0,C.a([],x.X),null,null)}}
B.aAv.prototype={
cns(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c14(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.dKq
s.cy=new C.v(s.ay,0)
w=s.db
A.d.a7(w)
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
B.dL(150,"",400,0,0.5,"noise")
B.dL(90,"",300,1.5,0.6,"sine")
s.n(new B.dOo())},
Z(){this.a0()
this.kM()},
l4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
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
if(q.a!=="Sun")B.dL(60+p*5,"",220,0.6,0.55,"sine")
break}}}if(A.d.e9(s,new B.dOR()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
B.dL(70,"",350,0,0.7,"noise")
break}}v=i.db
if(v.length===0||A.d.gai(v).aE(0,i.cx).gcj()>120)v.push(i.cx)
if(v.length>700)A.d.cu(v,0)
if(i.cx.gcj()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bGg()
else n=n==="weight"?p.cuu():p.byE()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.cZ2[u]
v.push(new B.dy(t.b,p.d===t.a,new B.dOD(p,t),t.c,A.cX,o))}v=C.a([new B.eE(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new B.dy("Hammer",!s,new B.dOE(p),A7.XF,A.cX,o),new B.dy("Feather",s,new B.dOF(p),Q.Xf,A.cX,o),new B.dy(q,r,new B.dOJ(p),A.Ej,A.b_,o)],w)
q=p.w
A.d.v(v,C.a([new B.eE(r,o,o),B.hp(A.cX,""+A.k.U(q*100)+"%","Slow motion",1,0.05,new B.dOK(p),q),new B.eE(C.a([new B.fe(A.uw,"Drop!",new B.dOL(p),A.bl,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=B.hp(A.cX,""+A.k.U(s)+" kg","Your weight",120,20,new B.dOM(p),s)
r=p.ax
A.d.v(v,C.a([s,B.hp(A.cX,""+A.k.U(r*100)+" cm","Your jump",1.2,0.1,new B.dON(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=B.hp(A.cX,A.k.aa(s,1)+" km/s","Speed",13,0,new B.dOO(p),s)
r=p.ch
A.d.v(v,C.a([s,B.hp(A.cX,A.k.aa(r,1)+"x out","View",8,0.5,new B.dOP(p),r),new B.eE(C.a([new B.fe(A.mI,"Fire!",p.gc13(),A.bl,o),new B.fe(A.uw,"Falls",new B.dOQ(p),A.c,o),new B.fe(A.rO,"Orbit 7.7",new B.dOG(p),A.c,o),new B.fe(D.bsI,"Oval 9",new B.dOH(p),A.c,o),new B.fe(A.Ez,"Escape",new B.dOI(p),A.c,o)],w),o,o)],w))}return B.jw(A.cX,A.fX,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.u(v,A.m,o,A.e,A.R,0,A.p))},
bGg(){return new C.C(D.bfc,C.cj(new B.dOn(this)),null)},
cuu(){var w,v,u,t=null,s=[D.efW,D.ehd,D.ehl,D.ehE,D.ehj,D.ehI,D.egr,D.ei0,D.eh_],r=x.p,q=C.a([D.eTb,A.T],r)
for(w=0;w<9;++w){v=s[w]
u=C.aY(v.c)
q.push(new C.C(A.cK,new C.cC(A.aZ,A.e,A.j,A.m,t,A.p,t,0,C.a([new C.a3(62,t,new C.x(v.a,t,new C.F(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bF(1,A.bp,new C.Ae(new B.dOp(this,v),t),t)],r),t),t))}q.push(A.av)
q.push(D.eVj)
return C.cL(q,t,A.iI,t,t,A.aj,!1)},
byE(){return C.cj(new B.dOl(this))}}
B.b72.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.a_(),e=C.N()
e.r=D.za.gq(0)
d.bd(new C.ac(0,0,0+h,0+g),e)
w=new C.f0()
w.dX(2)
for(e=d.a,v=0;v<80;++v){u=w.ae()
t=w.ae()
s=w.ae()
r=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
r.r=A.c.j(0.2+w.ae()*0.5).gq(0)
q=r.L()
e.drawCircle(u*h,t*g,s*1.1+0.3,q)
q.delete()}h=j.c
p=6371*h
g=j.b
e=C.N()
e.sar(new C.bR(A.A,0.5,A.w,i,0,C.a([A.K,A.b_.j(0.35),A.K],x.O),D.cRn,i).az(0,C.bV(g,p*1.1)))
d.ak(g,p*1.06,e)
e=C.N()
e.sar(D.dUi.az(0,C.bV(g,p)))
d.ak(g,p,e)
o=g.ao(0,new C.v(0,-p))
f=f.r
e=x.v
n=new C.aR(f,A.aq,i,i,C.a([],e))
u=o.a
t=o.b
s=t+3
n.E(new C.b7(u-16,s))
n.E(new C.ao(u,t-400*h-4))
n.E(new C.ao(u+16,s))
n.E(new C.bE())
s=C.N()
s.r=A.ai.gq(0)
d.aQ(n,s)
s=o.ao(0,new C.v(0,-400*h-6))
u=C.N()
u.r=A.c.gq(0)
d.ak(s,4,u)
u=j.e
if(u.length>1){e=C.a([],e)
m=new C.aR(f,A.aq,i,i,e)
f=g.a
t=g.b
m.E(new C.b7(f+A.d.gK(u).a*h,t+A.d.gK(u).b*h))
for(u=C.de(u,1,i,C.U(u).c),s=u.$ti,u=new C.bU(u,u.gI(0),s.k("bU<ai.E>")),s=s.k("ai.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new C.ao(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bC(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.a_()
f=C.N()
f.b=A.ad
f.c=2.4
f.d=A.bV
f.r=A.cX.j(0.9).gq(0)
d.aQ(m,f)}if(j.f){f=j.d
k=g.ao(0,new C.v(f.a*h,f.b*h))
h=C.N()
h.r=A.cX.j(0.4).gq(0)
h.z=H.om
d.ak(k,7,h)
h=C.N()
h.r=A.c.gq(0)
d.ak(k,4,h)}},
aq(d){return!0}}
B.U1.prototype={
S(){return new B.bgM(new C.cn(null,x.A),$,A.bv,0,C.a([],x.X),null,null)}}
B.bgM.prototype={
Z(){this.a0()
this.kM()},
l4(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.Ny[l.e],i=D.Ny[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aF(k,k,k,k,D.m6,k,k,k,new B.ebF(l,d),k,k,k,k,"Share",k)],u)
s=C.D(C.b1(k,k,k,new B.bnz(f,g,v,k),A.fi),1)
r=g.a
q=v<10?A.k.aa(v,1):B.Fk(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.j8,A.L,k,k)
o=B.Fk(v*v*v)
n=A.a.c7(p,"s")?"":"s"
h=C.u(C.a([s,C.p(k,C.u(C.a([q,A.av,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,X.a44,A.L,k,k),A.bA,C.d(p+": "+B.Fk(w*2)+" km wide. "+r+": "+B.Fk(h*2)+" km wide.",k,k,k,k,k,k,X.a4h,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.h,k,k,k,k,k,k,k,D.bhl,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.Ny[m]
r.push(new B.dy(w.a,l.e===m,new B.ebG(l,m),k,C.aY(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.Ny[m]
w.push(new B.dy(s.a,l.f===m,new B.ebH(l,m),k,C.aY(s.c),k))}return B.jw(A.c3,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.en(h,l.d),"SIZE COMPARE",C.u(C.a([new B.eE(r,"FIRST",k),new B.eE(w,"SECOND",k)],u),A.m,k,A.e,A.R,0,A.p))}}
B.bnz.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.a_()
w=C.N()
w.r=D.TM.gq(0)
d.bd(new C.ac(0,0,0+h,0+g),w)
v=new C.f0()
v.dX(6)
for(w=d.a,u=0;u<70;++u){t=v.ae()
s=v.ae()
r=v.ae()
q=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
q.r=A.c.j(0.2+v.ae()*0.4).gq(0)
p=q.L()
w.drawCircle(t*h,s*g,r+0.3,p)
p.delete()}o=Math.min(h/2-16,g/2-10)*0.98
n=Math.max(o/this.d,0.8)
h*=0.5
g*=0.5
m=new C.v(h,g)
w=new B.eIr(d)
t=this.c
w.$3(m,o,C.aY(t.c))
s=o-n
l=new C.v(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,C.aY(s.c))
w=C.N()
w.b=A.ad
w.c=1.4
w.r=A.al.gq(0)
d.ak(l,n+3,w)
k=C.iS(i,i,i,i,C.dq(i,i,i,i,i,i,i,i,i,D.eFv,s.a),A.a6,A.cn,i,A.eE,A.cm)
k.fq()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbh(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbh(g)-6
h=g}k.a6(d,l.ao(0,new C.v(-w/2,h)))
j=C.iS(i,i,i,i,C.dq(i,i,i,i,i,i,i,i,i,D.eID,t.a),A.a6,A.cn,i,A.eE,A.cm)
j.fq()
t=j.b
h=t.c
t=t.a.c
j.a6(d,m.ao(0,new C.v(-h/2,-t.gbh(t)/2)))},
aq(d){return!0}}
B.aIA.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.bt7.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpA()}}
B.aJ8.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.btl.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bq8()}}
B.aJb.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.btn.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bqb()}}
B.NT.prototype={}
B.So.prototype={
S(){return B.hsE()}}
B.bfv.prototype={
Z(){this.a0()
this.kM()},
l4(d){var w,v,u,t,s,r=this
r.f+=d
r.e.f8(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
B.dL(70,"",500,0.3,0.5,"sine")}}A.d.bm(w,new B.dwX())},
aVb(d){var w,v,u,t=this.Q
if(t.A(0,A.at))return
w=this.gb2O()
v=d.aE(0,new C.v(t.a/2,t.b*0.42))
u=A.k.D(v.gcj()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new B.NT(t,u,1.2,new C.wo(1,30+A.cB.ae()*40,0.9,0.7).iF()))
B.l1("bell",60+A.k.U(12-u)*2,400,0.35)},
gb2O(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new C.J(m,new B.dwL(),C.U(m).k("J<1,P>")).ft(0,A.vP),1.0001,99))
m=x.p
w=C.a([C.aF(n,n,n,n,D.m6,n,n,n,new B.dwM(o,d),n,n,n,n,"Share",n)],m)
v=C.cj(new B.dwN(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.aa(s,0)+" Suns":B.fbx(s)+" Suns"
t=B.hp(A.bE,s,"Mass",1,0,new B.dwP(o),u/t)
u=C.a([new B.dy("Star (10)",!1,new B.dwQ(o),n,A.bE,n),new B.dy("Cygnus X-1 (21)",!1,new B.dwR(o),n,A.bE,n),new B.dy("Milky Way core (4 million)",!1,new B.dwS(o),n,A.bE,n),new B.dy("M87 (6.5 billion)",!1,new B.dwT(o),n,A.bE,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lu:D.Ey
return B.jw(A.bE,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.u(C.a([t,new B.eE(u,"LIKE",n),new B.eE(C.a([new B.dy("Glowing ring",s,new B.dwU(o),n,A.bE,n),new B.dy("Bent light",r,new B.dwV(o),n,A.bE,n),new B.dy("Music",q,new B.dwW(o),p,A.bE,n),new B.fe(A.jI,"Clear",new B.dwO(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.R,0,A.p))},
abV(d,e){var w=null
return C.D(C.u(C.a([C.d(d,w,w,w,w,w,w,D.eBA,w,w,w),A.bA,C.d(e,w,2,w,w,w,w,K.a4_,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
B.b6r.prototype={
a6(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.a_()
w=C.N()
w.r=D.b5R.gq(0)
b2.bd(new C.ac(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.v(w,v)
t=this.b
s=t.gb2O()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,C.K)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new C.v(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+A.k.D(o/h,0,n)
i=new C.v(w+k/h*g,v+j/h*g)}}k=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
k.r=A.c.j(0.6).gq(0)
f=k.L()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=C.N()
b0.b=A.ad
b0.c=2
b0.r=A.c.j(0.25).gq(0)
b0.z=E.OD
b2.ak(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.aq(A.w3,A.fS,d)
n.toString
k=Math.cos(a4)
$.a_()
j=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
g=a5?1:0.85
j.r=n.j(r*(0.4+(0.5+0.5*k)*0.6)*g).gq(0)
f=j.L()
p.drawCircle(w+a6,v+o*a0*0.28,1.3,f)
f.delete()
if(!a5&&t.x){o=Math.sin(-a4)
k=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
k.r=n.j(b1).gq(0)
f=k.L()
p.drawCircle(w+a6*0.5,v+(q*Math.abs(o)*0.6-b0),1,f)
f.delete()}}}b0=s*1.25
$.a_()
b1=C.N()
b1.sar(new C.bR(A.A,0.5,A.w,null,0,C.a([A.x,A.x.j(0)],x.O),D.cxz,null).az(0,C.bV(u,b0)))
b2.ak(u,b0,b1)
b1=C.N()
b1.r=A.x.gq(0)
b2.ak(u,s,b1)
b1=C.N()
b1.b=A.ad
b1.c=1
b1.r=A.bE.j(0.55).gq(0)
b2.ak(u,s,b1)
for(b0=t.z,b1=b0.length,m=0;m<b0.length;b0.length===b1||(0,C.K)(b0),++m){a7=b0[m]
a0=s*a7.b
t=w+Math.cos(a7.a)*a0
r=v+Math.sin(a7.a)*a0*0.9
a8=1+A.k.D(3.5/a7.b,0,5)
a9=3*a8
q=-Math.sin(a7.a)*a9
o=Math.cos(a7.a)*a9
n=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
n.c=4.2/Math.sqrt(a8)
n.d=A.bV
k=a7.d
n.r=k.j(A.k.D(a7.b/2,0.2,1)).gq(0)
f=n.L()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
o.r=k.j(0.2).gq(0)
o.z=H.om
f=o.L()
p.drawCircle(t,r,6,f)
f.delete()}},
aq(d){return!0}}
B.acs.prototype={}
B.Tg.prototype={
S(){var w=x.r,v=x.g
return new B.bfU(new C.cn(null,x.A),new B.Np(A.cB),C.a([],w),A.J,A.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),A.J,A.J,$,A.bv,0,C.a([],x.X),null,null)}}
B.bfU.prototype={
Z(){this.a0()
this.XZ()
this.kM()},
XZ(){var w,v,u,t,s,r,q,p,o=this,n=new C.f0()
n.dX(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.ae(),1.6)
w.push(new B.acs(t,n.ae()*3.141592653589793*2,(n.ae()-0.5)*0.5*t,25+n.ae()*20))}else{t=Math.pow(n.ae(),0.8)
s=n.aB(o.f)
r=n.ae()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.he()?0:3.141592653589793
q=r+(n.ae()-0.5)*0.25}r=n.ae()
p=t<0.25?35+n.ae()*15:205+n.ae()*50
w.push(new B.acs(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cnj(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.dLI
k.cx=D.dLL
w=new C.f0()
w.dX(9)
v=k.cy
A.d.a7(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new B.acs(Math.pow(w.ae(),0.8)*0.7,w.ae()*3.141592653589793*2,0,320+w.ae()*30))
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
for(s=k.ay,r=x.S,s=C.de(s,0,C.dJ(900,"count",r),C.U(s).c),o=s.$ti,s=new C.bU(s,s.gI(0),o.k("bU<ai.E>")),o=o.k("ai.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new C.v(l*n,Math.sin(m)*n))}k.db=v
v=C.a([],u)
for(u=k.ay,u=C.de(u,0,C.dJ(900,"count",r),C.U(u).c),r=u.$ti,u=new C.bU(u,u.gI(0),r.k("bU<ai.E>")),r=r.k("ai.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new C.v(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
B.dL(110,"",900,0.5,0.45,"sine")},
l4(d){var w,v,u,t,s,r,q,p=this
p.e.f8(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aE(0,p.fx)
s=Math.max(0.25,t.gcj())
r=t.ez(0,s).aM(0,0.9/(s*s))
w=p.fy.ao(0,r.aM(0,u))
p.fy=w
v=p.cx.aE(0,r.aM(0,u))
p.cx=v
w=p.fx.ao(0,w.aM(0,u))
p.fx=w
v=p.CW.ao(0,v.aM(0,u))
p.CW=v
q=new B.dMW(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aF(r,r,r,r,D.m6,r,r,r,new B.dMM(s,d),r,r,r,r,"Share",r)],q),o=C.b1(r,r,r,new B.bbD(s,r),A.at),n=A.x.j(0.5),m=C.m(14),l=C.H(A.bG,A.r,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.an(8,C.p(r,C.d(w,r,r,r,r,r,r,A5.a3S,r,r,r),A.h,r,r,new C.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bR,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.cNj[v]
o=s.Q===u.a&&!s.ch
l.push(new B.dy(u.b,o,new B.dMN(s,u),r,A.h2,r))}l.push(new B.dy("Collide",s.ch,new B.dMO(s),A.wU,A.c3,r))
o=C.a([new B.eE(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=B.hp(A.h2,""+n,"Arms",6,2,new B.dMP(s),n)
l=s.r
A.d.v(o,C.a([n,B.hp(A.h2,A.k.aa(l,1),"Winding",6,0.8,new B.dMQ(s),l)],q))}n=s.as
o.push(B.hp(A.h2,""+A.k.U(n*90)+"\xb0","Tilt",1,0.15,new B.dMR(s),n))
n=s.ax
o.push(B.hp(A.h2,A.k.aa(n,1)+"x","Speed",4,0,new B.dMS(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lu:D.Ey
o.push(new B.eE(C.a([new B.dy("Dark matter",n,new B.dMT(s),r,A.bE,r),new B.dy("You are here",l,new B.dMU(s),r,A.aL,r),new B.dy("Music",w,new B.dMV(s),t,A.h2,r)],q),r,r))
return B.jw(A.h2,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.en(new C.am(A.W,r,A.aY,A.q,m,r),s.d),"GALAXY",C.u(o,A.m,r,A.e,A.R,0,A.p))}}
B.bbD.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.a_()
w=C.N()
w.r=D.b7z.gq(0)
a3.bd(new C.ac(0,0,0+a1,0+a2),w)
v=new C.f0()
v.dX(3)
for(w=a3.a,u=0;u<90;++u){t=v.ae()
s=v.ae()
r=v.ae()
q=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
q.r=A.c.j(0.15+v.ae()*0.4).gq(0)
p=q.L()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new C.v(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=C.N()
t.sar(new C.bR(A.A,0.5,A.w,a0,0,C.a([A.aB.j(0.32),A.aB.j(0.12),A.K],x.O),D.bWF,a0).az(0,C.bV(o,a2)))
a3.ak(o,a2,t)}m=new B.d2M(a1.as)
a2=n*0.3
t=C.N()
t.sar(new C.bR(A.A,0.5,A.w,a0,0,C.a([A.hg.j(0.85),A.aX.j(0.3),A.K],x.O),a0,a0).az(0,C.bV(o,a2)))
a3.ak(o,a2,t)
if(!a1.ch){l=C.N()
for(a2=a1.ay,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){j=a2[k]
s=j.a
i=a1.x?1/(0.25+s*0.9):1/Math.pow(s+0.18,1.5)*0.35
r=a1.at
q=Math.min(i,6)
h=j.b
g=m.$6(Math.cos(h)*s,Math.sin(h)*s,j.c,o,r*q*0.5,n)
q=j.d
r=A.k.H(q,360)
l.r=new G.mS(1,r,q>200?0.45:0.55,1).iF().j(0.35+(1-s)*0.5).gq(0)
s=s<0.3?1.3:1
p=l.L()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.a_()
a2=C.N()
a2.b=A.ad
a2.c=1.6
a2.r=A.aL.gq(0)
a3.ak(g,9,a2)
f=C.iS(a0,a0,a0,a0,D.eyS,A.a6,A.cn,a0,A.eE,A.cm)
f.fq()
f.a6(a3,g.ao(0,new C.v(-f.b.c/2,12)))}}else{e=n*0.8
l=C.N()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.b8A.j(0.6).gq(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.L()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.b4e.j(0.6).gq(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.L()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.a_()
w=C.N()
w.r=A.hg.gq(0)
a3.ak(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.N()
w.r=A.ib.gq(0)
a3.ak(a1,5,w)}},
aq(d){return!0}}
B.TY.prototype={
S(){return new B.bgL(new C.cn(null,x.A),new B.Np(A.cB),$,A.bv,0,C.a([],x.X),null,null)}}
B.bgL.prototype={
Z(){this.a0()
this.kM()},
l4(d){var w,v,u,t=this
t.e.f8(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.H(t.r+d*0.04*v,1)
else{w=A.k.H(t.w+d*0.05*v,1)
t.w=w
u=A.k.bH(w*4)
if(u!==A.k.bH(t.as))B.l1("bell",60+u*4,500,0.35)
t.as=u}},
gcj6(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gc9V(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aF(q,q,q,q,D.m6,q,q,q,new B.ebl(r,d),q,q,q,q,"Share",q)],p),n=C.D(new C.en(C.b1(q,q,q,new B.bmR(r,q),A.fi),r.d),1)
if(r.f==="seasons")w=r.gcj6()
else{w=r.gc9V()
v=A.k.aj(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.u(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,T.Hg,A.L,q,q),A.h,q,q,q,q,q,q,q,E.acV,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?W.x5:A.iK
t=r.Q
s=t?A.lu:D.Ey
s=C.a([new B.eE(C.a([new B.dy("Seasons",n==="seasons",new B.ebm(r),A.xj,A.bs,q),new B.dy("Moon phases",n==="moon",new B.ebn(r),A.ut,A.bs,q),new B.dy(u,!1,new B.ebo(r),v,A.bs,q),new B.dy("Music",t,new B.ebp(r),s,A.bs,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=B.hp(A.bs,D.cMG[A.o.H(A.k.bH(n*12),12)],"Month",1,0,new B.ebq(r),n)
v=r.z
A.d.v(s,C.a([n,B.hp(A.bs,A.k.aa(v,1)+"\xb0","Tilt",90,0,new B.ebr(r),v)],p))}else{p=r.w
s.push(B.hp(A.bs,""+(A.k.bH(p*29.5)+1),"Day of month",1,0,new B.ebs(r),p))}p=r.y
s.push(B.hp(A.bs,A.k.aa(p,1)+"x","Speed",4,0.2,new B.ebt(r),p))
return B.jw(A.bs,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.u(s,A.m,q,A.e,A.R,0,A.p))}}
B.bmR.prototype={
a6(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.a_(),b8=C.N()
b8.r=D.za.gq(0)
b9.bd(new C.ac(0,0,0+b5,0+b6),b8)
w=new C.f0()
w.dX(4)
for(b8=b9.a,v=0;v<70;++v){u=w.ae()
t=w.ae()
s=w.ae()
r=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
r.r=A.c.j(0.2+w.ae()*0.4).gq(0)
q=r.L()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new C.v(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=C.d9(p,n*2,o*2)
t=C.N()
t.b=A.ad
t.c=1
t.r=A.bf.gq(0)
b9.j1(u,t)
t=C.N()
t.sar(D.dUk.az(0,C.bV(p,34)))
b9.ak(p,22,t)
m=s.r*2*3.141592653589793
l=p.ao(0,new C.v(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aE(0,l).ez(0,p.aE(0,l).gcj())
J.bH(b8.save())
b8.translate(l.a,l.b)
s=C.N()
s.r=D.b5N.gq(0)
b9.ak(A.J,k,s)
J.bH(b8.save())
b7=new C.aR(b7.r,A.aq,b4,b4,C.a([],x.v))
b7.E(new C.ky(C.bV(A.J,k)))
b9.tj(0,b7)
b7=i.aM(0,k).aM(0,0.35)
s=k*1.1
b6=C.N()
b6.sar(D.dUs.az(0,C.bV(A.J,s)))
b9.ak(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.v(s,b6)
b7=new C.v(-s,-b6).aM(0,k).aM(0,1.7)
b5=h.aM(0,k).aM(0,1.7)
t=C.N()
t.c=2
t.r=A.cH.gq(0)
b9.bK(b7,b5,t)
t=h.aM(0,k).aM(0,1.7)
b5=C.N()
b5.r=A.cH.gq(0)
b9.ak(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.iS(b4,b4,b4,b4,C.dq(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aKQ,b5),A.a6,A.cn,b4,A.eE,A.cm)
f.fq()
f.a6(b9,l.ao(0,new C.v(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.N()
r.b=A.ad
r.c=1
r.r=A.bf.gq(0)
b9.ak(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
a0.r=A.aL.j(0.6).gq(0)
a0.c=2
q=a0.L()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=C.N()
r.sar(new C.bR(new C.d5(-0.5,0),1.1,A.w,b4,0,C.a([D.b1Y,D.ab2],x.O),D.cEH,b4).az(0,C.bV(p,k)))
b9.ak(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ao(0,new C.v(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.N()
r.r=D.b_H.gq(0)
b9.ak(a1,a2,r)
J.bH(b8.save())
b7=b7.r
r=x.v
d=new C.aR(b7,A.aq,b4,b4,C.a([],r))
d.E(new C.ky(C.bV(a1,a2)))
b9.tj(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.N()
a3.r=A.c4.gq(0)
b9.bd(new C.ac(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aE(0,p).ez(0,a1.aE(0,p).gcj())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=D.bWE[a5]
a7=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
a7.r=A.b_.j(0.45).gq(0)
a7.z=A.jj
q=a7.L()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.v(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.N()
b6.r=D.b_D.gq(0)
b9.ak(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bH(b8.save())
b6=new C.aR(b7,A.aq,b4,b4,C.a([],r))
b6.E(new C.ky(C.bV(a8,a9)))
b9.tj(0,b6)
s=s.w
b1=new C.aR(b7,A.aq,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.E(new C.b7(u,b5))
b6=b2>0
b1.az0(new C.v(u,t+a9),b6,new C.b3(a9,a9))
if(b0<0.5)b6=b2<0
b1.az0(new C.v(u,b5),b6,new C.b3(a9*Math.abs(1-2*b0),a9))
b6=C.N()
b6.r=A.c4.gq(0)
b9.aQ(b1,b6)
b8.restore()
b8=C.N()
b8.b=A.ad
b8.c=1
b8.r=A.bf.gq(0)
b9.ak(a8,a9,b8)
b3=C.iS(b4,b4,b4,b4,D.eyT,A.a6,A.cn,b4,A.eE,A.cm)
b3.fq()
b3.a6(b9,a8.ao(0,new C.v(-b3.b.c/2,a9+6)))}},
aq(d){return!0}}
B.aI7.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.bt0.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bp5()}}
B.aIv.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.bt6.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpu()}}
B.aJ7.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
B.btk.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bq7()}}
var z=a.updateTypes(["~()","T(vj)","T(a2i)","T(Bc)","aw<~>()","I(vj,I)","T(B8)","T(Xe)","T(a97)","T(un)","P(P,vj)","T(a11)","T(mY)","T(YL)","T(a9V)","I(I)","Ss()","SP()","T4()","Sk()","Ti()","TB()","TD()","St()","TW()","Ua()","TX()","TU()","Uh()","T(nm)","Um()","Su()","TO()","TT()","acx(X,I)","abs(X,I)","~(a1<@,@>)","I(B8,B8)","n(fF)","T(acn)","T(Zs)","T(Bm)","T(a9C)","T(abw)","T(a9l)","I(I,qc)","I(I,Bc)","n(qc)","~(qc,ak<n>,I)","qc?(Bc)","T(qc)","r(n,Zf)","T(O9)","~(zr)","T(a9s)","P(I?)","Uo()","T(En)","T(aaJ)","P(NT)","T5()","~(b8)","T(a83)","Tw()","Sp()","~(ago,n,v,w,P)","~(n,vj)","a68()","Un(X,bo<P>,bo<P>)","Us()","Tc()","Sq()","T3()","TP()","U0()","Ul()","TN()","~(n)","co(a8P)","T(a8O)","Tj()","U9()","Tk()","So()","Tg()","U1()","TY()","TR()","T(NT)","P(I)"])
B.fdy.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+29}
B.f5l.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gK(d.e.split(". "))+"."},
$S:z+38}
B.faW.prototype={
$1(d){var w
if(!this.a.aju(d))w=Math.abs(d.CW)>0.002||d.cx>0.05
else w=!1
return w},
$S:z+1}
B.faX.prototype={
$1(d){return d.x},
$S:z+1}
B.fdv.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
B.fdw.prototype={
$1(d){var w
if(!this.a.aju(d))w=d.cx>0.05||Math.abs(d.CW)>0.002
else w=!1
return w},
$S:z+1}
B.fdx.prototype={
$2(d,e){var w=Math.abs(e.CW)
return w>d?w:d},
$S:z+10}
B.dVC.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.dVD.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.A(this.b,this.c))},
$S:0}
B.dVE.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gcV(v).Q
v.toString
w.lE(v,A.dU,A.i1)}},
$S:8}
B.dVP.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a7(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
B.dVQ.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
B.dVL.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
B.dVJ.prototype={
$2(d,e){var w=this.a
w.r.push(C.cN(C.dB(0,0,0,d,0,0),new B.dVK(w,this.b,e)))},
$S:1798}
B.dVK.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
B.dVM.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.d.agT(0,u[1],u[2],u[3])
u[4].bE(0,new B.dVH(t))
v.e.m(0,t.a,0)
w.d.m(0,u[0],t)
B.dL(700+w.e*120,"",80,0,0.25,"square")
v.n(new B.dVI(w.a,v,w.f,w.r))},
$S:0}
B.dVH.prototype={
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
B.dVI.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bH(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.dVN.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.d.azI(t,u[1],s,u[3])
B.dL(1500,"",45,0,0.25,"tri")
v=w.b
v.n(new B.dVG(w.a,v,w.e,w.f))},
$S:0}
B.dVG.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bH(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.dVO.prototype={
$0(){B.dL(300,"",360,-1.2,0.3,"square")
var w=this.a
w.n(new B.dVF(w,this.b))},
$S:0}
B.dVF.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
B.dVT.prototype={
$0(){var w=this.a
return w.n(new B.dVS(w))},
$S:0}
B.dVS.prototype={
$0(){return this.a.at=!0},
$S:0}
B.dVU.prototype={
$0(){var w=this.a
return w.n(new B.dVR(w))},
$S:0}
B.dVR.prototype={
$0(){return this.a.at=!1},
$S:0}
B.dVV.prototype={
$0(){var w=this.a
w.f.saS(0,this.b)
w.LR()},
$S:0}
B.dVW.prototype={
$0(){return this.a.W9(this.b)},
$S:0}
B.dVX.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.LR():w.aRn()},
$S:2}
B.dVY.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.LR():w.aRn()},
$S:0}
B.ea_.prototype={
$2(d,e){return d+e},
$S:1799}
B.eaj.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new B.eai(w,d))},
$S:131}
B.eai.prototype={
$0(){var w=C.aQ(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
B.eak.prototype={
$0(){},
$S:0}
B.eal.prototype={
$0(){},
$S:0}
B.ea1.prototype={
$0(){return this.a.n(new B.ea0(this.b,this.c))},
$S:0}
B.ea0.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.e9R.prototype={
$1(d){return this.a.cx===d},
$S:60}
B.e9S.prototype={
$1(d){return this.a.cx=d},
$S:27}
B.e9T.prototype={
$1(d){return this.a.cy===d},
$S:60}
B.e9U.prototype={
$1(d){return this.a.cy=d},
$S:27}
B.e9V.prototype={
$1(d){return this.a.db===d},
$S:60}
B.e9W.prototype={
$1(d){return this.a.db=d},
$S:27}
B.e9X.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:60}
B.e9Y.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.J(0,d)},
$S:27}
B.e9Z.prototype={
$0(){var w=this.a
return w.n(w.gat3())},
$S:0}
B.e9P.prototype={
$1(d){return this.a.$1(!0)},
$S:82}
B.e9Q.prototype={
$1(d){return this.a.$1(!1)},
$S:152}
B.e9O.prototype={
$1(d){return this.a.$1(!1)},
$S:207}
B.eac.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ar(e.b,e.d)
o.ch=n
n=C.b1(p,p,p,new B.bdi(o,p),n)
w=this.b
v=B.bvG("WORLD",w.a,w.c)
u=B.bvG("GRAVITY",C.t(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.U(t*100)
t=t<0.25?A.cH:A.bl
t=B.bvG("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.U(s*100)
s=s>D.AG[o.db].d?A.cH:A.c
q=x.p
s=C.a([v,u,t,B.bvG("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(B.bvG("HEIGHT",""+A.k.U(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=C.a([n,C.an(p,C.B(s,A.m,p,A.hz,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bxD(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.qt[w].a+".":"You landed on every world!"
v=C.a([new B.fe(A.m4,"Again",new B.ea7(o),A.c,p),new B.fe(A.wV,"Rebuild",new B.ea8(o),A.aL,p)],q)
if(o.d+1<7)v.push(new B.fe(A.ji,"Next world",new B.ea9(o),A.bl,p))
n.push(B.h_0("Perfect landing!",w,A.bl,v))}if(o.as==="crashed")n.push(B.h_0("Crash!",o.at,A.cH,C.a([new B.fe(A.m4,"Try again",new B.eaa(o),A.bl,p),new B.fe(A.wV,"Rebuild",new B.eab(o),A.aL,p)],q)))
return new C.am(A.W,p,A.aY,A.q,n,p)},
$S:61}
B.ea7.prototype={
$0(){var w=this.a
return w.n(w.gat3())},
$S:0}
B.ea8.prototype={
$0(){var w=this.a
return w.n(new B.ea4(w))},
$S:0}
B.ea4.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.ea9.prototype={
$0(){var w=this.a
return w.n(new B.ea3(w))},
$S:0}
B.ea3.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
B.eaa.prototype={
$0(){var w=this.a
return w.n(w.gat3())},
$S:0}
B.eab.prototype={
$0(){var w=this.a
return w.n(new B.ea2(w))},
$S:0}
B.ea2.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.ead.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.n(new B.ea6(v,w))},
$S:0}
B.ea6.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
B.eae.prototype={
$1(d){return this.a.y=d},
$S:9}
B.eaf.prototype={
$1(d){return this.a.Q=d},
$S:9}
B.eag.prototype={
$1(d){return this.a.z=d},
$S:9}
B.eah.prototype={
$0(){var w=this.a
return w.n(new B.ea5(w))},
$S:0}
B.ea5.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
B.dxo.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.fVr
if(q==null)q=$.fVr=B.cz2()
w=3
return C.b(C.iB(C.a([q,$.tt().baF("assets/data/three.min.js")],x.aJ),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.k7(0,C.cI(J.q(s,1)))
q.n(new B.dxn(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:52}
B.dxn.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
B.dx0.prototype={
$0(){return this.a.bOq(C.aS(J.q(this.b,"group")))},
$S:0}
B.dx1.prototype={
$1(d){return A.a.aT(A.o.fF(A.o.D(A.k.U(d*255),0,255),16),2,"0")},
$S:362}
B.dxp.prototype={
$0(){return B.a67("kick",0.25)},
$S:0}
B.dx2.prototype={
$0(){return this.a.cx=this.b},
$S:0}
B.dx3.prototype={
$1(d){return d.a===this.a},
$S:z+11}
B.dx4.prototype={
$0(){return B.a67("kick",0.5)},
$S:0}
B.dx5.prototype={
$0(){return B.dL(1300+this.a.R8.aB(900),"",40,0,0.2,"square")},
$S:0}
B.dx7.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.ch
if(w===2)w=1
else w=w===1?0:2
u.ch=w}else{w=this.a
v=w.ay
if(v.t(0,u))v.W(0,u)
else{v.J(0,u)
if(w.ch===2)w.ch=1}if(v.a===0&&w.ch===0)w.ch=2
u=w}if(u.cx!=null&&!A.d.bg(u.d.e,new B.dx6(u)))u.cx=null
u.go=0},
$S:0}
B.dx6.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.auA(d)},
$S:z+11}
B.dwY.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
B.dwZ.prototype={
$0(){var w=this.a
return w.n(w.gbYv())},
$S:0}
B.dx_.prototype={
$0(){return this.a.aeA(null)},
$S:0}
B.dxe.prototype={
$0(){var w=this.a.as
return w==null?null:w.eM(0,C.E(["t","shot"],x.N,x.z))},
$S:0}
B.dxf.prototype={
$0(){return this.a.crl(this.b.a)},
$S:0}
B.dxg.prototype={
$0(){return this.a.aeA(this.b)},
$S:0}
B.dxh.prototype={
$1(d){var w=this.a
return w.n(new B.dxd(w,d))},
$S:6}
B.dxd.prototype={
$0(){return this.a.k3=this.b},
$S:0}
B.dxi.prototype={
$0(){var w=this.a
return w.n(new B.dxc(w,this.b))},
$S:0}
B.dxc.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dxj.prototype={
$0(){var w=this.a
return w.n(new B.dxb(w))},
$S:0}
B.dxb.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
B.dxk.prototype={
$0(){var w=this.a
return w.n(new B.dxa(w))},
$S:0}
B.dxa.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eM(0,C.E(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.Ih},
$S:0}
B.dxl.prototype={
$0(){var w=this.a
return w.n(new B.dx9(w))},
$S:0}
B.dx9.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aTT()
else w.p2=null},
$S:0}
B.dxm.prototype={
$0(){var w=this.a
return w.n(new B.dx8(w))},
$S:0}
B.dx8.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
B.bWn.prototype={
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
B.bWo.prototype={
$1(d){var w=new C.r7([],[]).oS(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:478}
B.f_X.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)},
$S:231}
B.f_Y.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)||w.h(d,1)},
$S:231}
B.f_Z.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)!==w.h(d,1)},
$S:231}
B.f03.prototype={
$1(d){return!J.q(d,0)},
$S:231}
B.f04.prototype={
$1(d){var w=J.a6(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:231}
B.f05.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:231}
B.dzz.prototype={
$1(d){return this.a.apP(0)},
$S:8}
B.dzd.prototype={
$0(){var w=this.b
return this.a.cx=new C.J(w,C.hFe(),C.U(w).k("J<1,I>")).fG(0)},
$S:0}
B.dzg.prototype={
$1(d){return""+d},
$S:83}
B.dzA.prototype={
$1(d){return d.b==="buzzer"},
$S:z+6}
B.dzb.prototype={
$1(d){return this.a.apP(this.b)},
$S:8}
B.dzc.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.ato(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.m2(0,d,a1.lv(0.15,0.3))
u=a1.m2(0,d,a1.lv(0.15,0.62))
t=a1.m2(0,"and",a1.lv(0.48,0.46))
s=a1.m2(0,a0,a1.lv(0.82,0.46))
a1=t.a
w.push(new B.mY(v.a,a1,0))
w.push(new B.mY(u.a,a1,1))
w.push(new B.mY(a1,s.a,0))
break
case 1:v=a1.m2(0,d,a1.lv(0.12,0.25))
u=a1.m2(0,d,a1.lv(0.12,0.65))
r=a1.m2(0,"xor",a1.lv(0.46,0.25))
q=a1.m2(0,"and",a1.lv(0.46,0.65))
p=a1.atn(0,a0,a1.lv(0.82,0.25),0)
o=a1.atn(0,a0,a1.lv(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new B.mY(a1,n,0))
m=u.a
w.push(new B.mY(m,n,1))
l=q.a
w.push(new B.mY(a1,l,0))
w.push(new B.mY(m,l,1))
w.push(new B.mY(n,p.a,0))
w.push(new B.mY(l,o.a,0))
break
case 2:k=a1.m2(0,"clock",a1.lv(0.15,0.4))
j=a1.m2(0,"not",a1.lv(0.45,0.65))
s=a1.m2(0,a0,a1.lv(0.82,0.3))
i=a1.m2(0,"buzzer",a1.lv(0.82,0.65))
a1=k.a
w.push(new B.mY(a1,s.a,0))
n=j.a
w.push(new B.mY(a1,n,0))
w.push(new B.mY(n,i.a,0))
break
default:h=a1.m2(0,d,a1.lv(0.12,0.25))
g=a1.m2(0,d,a1.lv(0.12,0.7))
f=a1.m2(0,"nor",a1.lv(0.5,0.25))
e=a1.m2(0,"nor",a1.lv(0.5,0.7))
s=a1.m2(0,a0,a1.lv(0.86,0.25))
a1=f.a
w.push(new B.mY(g.a,a1,0))
n=e.a
w.push(new B.mY(n,a1,1))
w.push(new B.mY(h.a,n,0))
w.push(new B.mY(a1,n,1))
w.push(new B.mY(a1,s.a,0))}},
$S:0}
B.dzh.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.ato(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.m(0,p,new B.B8(p,"switch",new C.v(0.14*q.a,r*q.b),0))}o.m2(0,w.e,o.lv(0.86,0.5))},
$S:0}
B.dz6.prototype={
$1(d){return d.b==="switch"},
$S:z+6}
B.dz7.prototype={
$2(d,e){return A.k.aI(d.c.b,e.c.b)},
$S:z+37}
B.dz8.prototype={
$1(d){return d.b===this.a.e},
$S:z+6}
B.dz9.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
B.dza.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.aa6(this.c)
if(v.ax)B.Ay("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gK(w)
v.CW=!1
if(v.ax)B.dL(140,"",250,0,0.3,"square")}},
$S:0}
B.dzi.prototype={
$0(){},
$S:0}
B.dzj.prototype={
$0(){return A.d.cu(this.a.e,this.b)},
$S:0}
B.dzk.prototype={
$0(){return this.a.cy=null},
$S:0}
B.dzf.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bm(w.e,new B.dze(v))
w.cy=null},
$S:0}
B.dze.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
B.dz5.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.m2(0,this.b,new C.v(w.x.a*(0.3+v.ae()*0.4),w.x.b*(0.2+v.ae()*0.6))).a},
$S:0}
B.dzt.prototype={
$0(){var w=this.a
return w.n(new B.dzs(w))},
$S:0}
B.dzs.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.dzu.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.x=u
return C.aH(A.c5,C.jz(C.b1(w,w,w,new B.b7u(v,w),u),A.q,w),A.z,!1,w,w,w,w,w,w,w,w,new B.dzn(v),w,w,w,new B.dzo(v),new B.dzp(v),new B.dzq(v),w,w,w,w,w,w,w,w,w,w,new B.dzr(v),w,w,w,!1,A.ae)},
$S:33}
B.dzr.prototype={
$1(d){return this.a.bZu(d.b)},
$S:53}
B.dzp.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.c6J(u)
if(t!=null){v.as=t
v.at=u
return}w=v.au6(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aE(0,u)}},
$S:40}
B.dzq.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.v(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
B.dzo.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bRY(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bm(v,new B.dzl(w))
u=t.as
u.toString
v.push(new B.mY(u,w.a,w.b))
C.jE()}}t.z=t.as=null},
$S:36}
B.dzl.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
B.dzn.prototype={
$1(d){return this.a.asm(d.b)},
$S:312}
B.dzv.prototype={
$0(){return this.a.btF(this.b.a)},
$S:0}
B.dzw.prototype={
$0(){return this.a.apP(this.b.a)},
$S:0}
B.dzx.prototype={
$0(){var w=this.a
return w.n(new B.dzm(w))},
$S:0}
B.dzm.prototype={
$0(){var w=this.a
w.ato(0)
w.ay=null},
$S:0}
B.dzy.prototype={
$0(){return this.a.cng(this.b)},
$S:0}
B.cFP.prototype={
$0(){var w=this,v=null,u=C.iS(v,v,v,v,C.dq(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a6,A.cn,v,A.eE,A.cm)
u.fq()
return u},
$S:328}
B.dEM.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dEL.prototype={
$0(){return this.a.d=null},
$S:0}
B.dEO.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.bTJ()},
$S:118}
B.dEN.prototype={
$0(){return C.a8(this.a,!1).o3()},
$S:0}
B.f0l.prototype={
$0(){return D.dGF},
$S:z+56}
B.f0m.prototype={
$0(){return D.deS},
$S:z+60}
B.f0n.prototype={
$0(){return D.di8},
$S:z+63}
B.f0y.prototype={
$0(){return D.dbL},
$S:z+64}
B.f0B.prototype={
$0(){return D.dG8},
$S:z+67}
B.f0C.prototype={
$0(){return D.dlg},
$S:z+87}
B.f0D.prototype={
$0(){return D.deO},
$S:z+17}
B.f0E.prototype={
$0(){return D.deR},
$S:z+18}
B.f0F.prototype={
$0(){return D.d7W},
$S:z+19}
B.f0G.prototype={
$0(){return D.dhl},
$S:z+20}
B.f0H.prototype={
$0(){return D.diZ},
$S:z+21}
B.f0o.prototype={
$0(){return D.dj0},
$S:z+22}
B.f0p.prototype={
$0(){return D.de_},
$S:z+23}
B.f0q.prototype={
$0(){return D.do_},
$S:z+24}
B.f0r.prototype={
$0(){return D.dFQ},
$S:z+25}
B.f0s.prototype={
$0(){return D.dDT},
$S:z+26}
B.f0t.prototype={
$0(){return D.dmF},
$S:z+27}
B.f0u.prototype={
$0(){return D.dFY},
$S:z+28}
B.f0v.prototype={
$0(){return D.ddZ},
$S:z+16}
B.f0w.prototype={
$0(){return D.dG7},
$S:z+30}
B.f0x.prototype={
$0(){return D.de0},
$S:z+31}
B.f0z.prototype={
$0(){return D.djg},
$S:z+32}
B.f0A.prototype={
$0(){return D.dmE},
$S:z+33}
B.eHZ.prototype={
$2(d,e){return new B.acx($.bA2()[e],new B.eHY(e,this.a),null)},
$S:z+34}
B.eHY.prototype={
$0(){var w=this.a,v=D.ayu.h(0,$.bA2()[w].a)
$.aZk=v==null?"music":v
C.a8(this.b,!1).cr(C.eH(new B.eHW(w),!1,null,x.H))},
$S:0}
B.eHW.prototype={
$1(d){return $.bA2()[this.a].e.$0()},
$S:43}
B.eI_.prototype={
$2(d,e){return new B.abs(D.arm[e],new B.eHX(this.a,e),null)},
$S:z+35}
B.eHX.prototype={
$0(){return this.a.d.$1(D.arm[this.b])},
$S:0}
B.eHF.prototype={
$0(){return this.a.as=!0},
$S:0}
B.eHE.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eHD.prototype={
$1(d){var w=this
return new C.ed(new B.eHC(w.a,w.b,w.c,w.d),null)},
$S:21}
B.eHC.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aG(a2,d,a0).w
a0=C.aG(a2,d,a0).w
w=x.p
v=C.a([D.eSX,A.av,D.eYU,A.ab],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.b3(12,12)
m=new C.b3(12,12)
m=C.a([new C.bF(1,A.bp,C.aK(d,A.U,!1,d,!0,A.q,d,C.aL(),r[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Title",d,H.BU,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b2(4,new C.bv(n,n,n,n),A.V),!0,d,d,d,d),A.z,!0,d,!0,d,!1,d,A.ag,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,A.ix,!0,A.a6,d,A.am,d,d,d,d),d),A.aa,new C.bF(2,A.bp,C.aK(d,A.U,!1,d,!0,A.q,d,C.aL(),q[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Small line",d,H.BU,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b2(4,new C.bv(m,m,m,m),A.V),!0,d,d,d,d),A.z,!0,d,!0,d,!1,d,A.ag,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,A.ix,!0,A.a6,d,A.am,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.d_z[l]
j=new C.b3(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.z(t.a.c.d,s)
t.w=i}h=A.d.gK(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.z(t.a.c.d,s)
t.w=i}g=A.d.gK(i)}else g=A.bG
f=new C.ay(g,u[p].A(0,k)?1.8:1,A.r,-1)
n.push(C.aH(d,C.p(d,C.V(k,u[p].A(0,k)?A.c:A.aQ,d,d,d,22),A.h,d,d,new C.o(h,d,new C.c2(f,f,f,f),new C.bv(j,j,j,j),d,d,A.n),d,d,d,A.hi,d,d,d,42),A.z,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new B.eHA(a3,p,u,k),d,d,d,d,d,d,!1,A.ae))}A.d.v(v,C.a([new C.x("SLAB "+o,d,D.eJh,d,d,d,d,d,d,d,d,d),A.ar,new C.cC(A.aZ,A.e,A.j,A.m,d,A.p,d,0,m,d),A.P,new C.a3(d,44,C.cL(n,d,d,d,d,A.aZ,!1),d),A.ay],w))}v.push(C.bK(A.C0,new B.eHB(t,r,q,u,a2),d))
return new C.C(new C.M(0,0,0,a1.f.d),C.bq(!0,new C.d1(new C.aX(0,1/0,0,a0.a.b*0.86),C.cL(v,d,A1.DJ,d,d,A.aj,!0),d),!0,!1,A.ah,!0,!0),d)},
$S:105}
B.eHA.prototype={
$0(){var w=this
return w.a.$1(new B.eHz(w.b,w.c,w.d))},
$S:0}
B.eHz.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
B.eHB.prototype={
$0(){var w=this,v=w.a
v.n(new B.eHy(v,w.b,w.c,w.d))
C.a8(w.e,!1).M(null)},
$S:0}
B.eHy.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this
for(w=m.d,v=m.c,u=m.a,t=m.b,s=x.N,r=x.Z,q=0;q<3;++q){p=u.y
if(p===$){p=C.z(u.a.c.f,s)
u.y=p
o=p}else o=p
n=A.a.i(t[q].a.a)
if(n.length===0)n=o[q]
p[q]=n
p=u.z
if(p===$){p=C.z(u.a.c.r,s)
u.z=p}p[q]=A.a.i(v[q].a.a)
p=u.x
if(p===$){p=C.z(u.a.c.e,r)
u.x=p}p[q]=w[q]}},
$S:0}
B.eHN.prototype={
$0(){var w=this.a
return w.n(new B.eHM(w))},
$S:0}
B.eHM.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eHO.prototype={
$0(){return B.qj(this.b,this.a.f,"scene")},
$S:0}
B.eHP.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(A.d.gK(u),A.d.gai(u),0.4)
u.toString
w=this.a.gXn().x
w===$&&C.c()
return C.bT(v,new C.o(v,v,v,v,v,new C.bR(D.aOf,0.9,A.w,v,0,C.a([u.j(0.06+0.03*w),A.bW],x.O),v,v),A.n),A.ba)},
$S:284}
B.eHQ.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.at(C.eX(A.A,C.c4(new C.h3(C.a([u.gt6(),u.gXn()],x.dS)),new B.eHL(u,this.b,v),w),A.h,A.e8),w,w,w)},
$S:246}
B.eHL.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gt6().x
r===$&&C.c()
w=r<0.9?1:1-B.bn8(r,0.9,0.98)
v=s.gXn().x
v===$&&C.c()
u=A.dG.av(0,v)
switch(s.gatp().a){case 0:s=s.bsT(t.b,r,u,t.c)
break
case 1:s=s.bIL(t.b,r,u,t.c)
break
case 2:s=s.crN(t.b,r,u,t.c)
break
case 3:s=s.bvJ(t.b,r,u,t.c)
break
case 4:s=s.byQ(t.b,r,u,t.c)
break
case 5:s=s.by3(t.b,r,u,t.c)
break
default:s=null}return C.d7(s,w)},
$S:213}
B.eHR.prototype={
$2(d,e){var w=C.asw(this.b),v=this.c.d,u=C.aq(A.d.gK(v),A.d.gai(v),0.4)
u.toString
v=C.aq(A.d.gK(v),A.d.gai(v),0.4)
v.toString
v=w.czX(u,A.bG,v,3.5)
u=this.a
w=u.gt6().x
w===$&&C.c()
return C.a7Q(C.mb(null,null,null,1,0,new B.eHK(u),A.k.D(w,0,1)),v)},
$S:1803}
B.eHK.prototype={
$1(d){var w=this.a
w.gt6().sq(0,d)
if(w.as)w.n(new B.eHG(w))},
$S:6}
B.eHG.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eHS.prototype={
$0(){var w=this.a
w.gt6().sq(0,0)
w.adk()},
$S:0}
B.eHT.prototype={
$1(d){var w=this.a
w.n(new B.eHJ(w,d))
if(w.as)w.adk()},
$S:6}
B.eHJ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eHU.prototype={
$0(){var w=this.a
w.n(new B.eHI(w,this.b))
w.gt6().sq(0,0)
if(w.as)w.adk()},
$S:0}
B.eHI.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eHV.prototype={
$0(){var w=this.a
return w.n(new B.eHH(w,this.b))},
$S:0}
B.eHH.prototype={
$0(){var w=C.z(this.b,x.G)
return this.a.w=w},
$S:0}
B.eHw.prototype={
$2(d,e){return A.k.aI(d.a,e.a)},
$S:1804}
B.eHx.prototype={
$1(d){return d.b},
$S:1805}
B.d9k.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+3}
B.d9l.prototype={
$1(d){return d.b===this.a},
$S:z+7}
B.d9h.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+3}
B.d9i.prototype={
$1(d){return d.a===this.a},
$S:z+3}
B.d9j.prototype={
$1(d){return d.a===this.a},
$S:z+3}
B.d9m.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+7}
B.d9n.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+7}
B.d9o.prototype={
$1(d){return d.a===this.a},
$S:z+3}
B.d9p.prototype={
$1(d){return d.d<this.a.ax},
$S:z+39}
B.d9q.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+40}
B.d9r.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+41}
B.d9s.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+42}
B.d9t.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+43}
B.d9u.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+44}
B.e9k.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e99.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.e9b.prototype={
$2(d,e){return d+e.d*7+A.o.H(A.a.gV(e.b),97)},
$S:z+45}
B.e9c.prototype={
$2(d,e){return d+A.o.H(A.a.gV(e.a),31)+A.o.H(A.a.gV(e.b),17)},
$S:z+46}
B.e9f.prototype={
$1(d){var w=D.m9.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.H(d.d,u)]+")":t},
$S:z+47}
B.e9g.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.U(q),o=x.dg,n=C.z(new C.e3(new C.cS(new C.a4(q,new B.e9h(d),p.k("a4<1>")),new B.e9i(r),p.k("cS<1,qc?>")),o),o.k("G.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aG(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.K)(n),++v){u=n[v]
if(w.length>=6)return
t=C.z(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+48}
B.e9h.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
B.e9i.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+49}
B.e9d.prototype={
$1(d){return D.m9.h(0,d.b).c===D.vC},
$S:z+50}
B.e9e.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
B.e9K.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.a5e(0,u)
w.cLN(A.o.aj(v,1000))},
$S:8}
B.e9j.prototype={
$0(){},
$S:0}
B.e95.prototype={
$0(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ax(),$async$$0)
case 6:e.ap("String","ngmy_core_reaction_lab_v1",s.a.d.ac())
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
B.e9m.prototype={
$1(d){var w=null,v=this.a.b
return C.bq(!0,C.u(C.a([A.P,C.dK(!1,w,w,w,!0,w,w,w,!0,w,C.V(D.m9.h(0,v).b,D.m9.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.f8b,w,C.d(D.m9.h(0,v).a,w,w,w,w,w,w,A.hb,w,w,w),w,w,w),C.dK(!1,w,w,w,!0,w,w,w,!0,w,S.ait,w,w,w,w,new B.e9l(d),!1,w,w,w,w,w,w,w,D.f0v,w,w,w)],x.p),A.m,w,A.e,A.R,0,A.p),!0,!1,A.ah,!0,!0)},
$S:34}
B.e9l.prototype={
$0(){C.a8(this.a,!1).M(!0)
return null},
$S:0}
B.e9o.prototype={
$1(d){var w,v,u=null,t=C.aG(d,u,x.m).w,s=C.a([D.dOh],x.p)
for(w=0;w<6;++w){v=D.arE[w]
s.push(C.dK(!1,u,u,u,!0,u,u,u,!0,u,D.bD2,u,u,u,u,new B.e9n(d,v),!1,u,u,u,u,u,new C.x(v.b,u,A.l7,u,u,u,u,u,u,u,u,u),u,new C.x(v.a,u,A.hb,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bq(!0,new C.d1(new C.aX(0,1/0,0,t.a.b*0.7),C.cL(s,u,D.bkM,u,u,A.aj,!0),u),!0,!1,A.ah,!0,!0)},
$S:34}
B.e9n.prototype={
$0(){C.a8(this.a,!1).M(this.b)
return null},
$S:0}
B.e98.prototype={
$1(d){var w=null
return C.eo(C.a([C.bI(!1,A.df,w,w,!0,w,w,new B.e96(d),w,w),C.bI(!1,A.C_,w,w,!0,w,w,new B.e97(d),w,w)],x.p),w,w,D.rr,D.eZ3,w,w,w,w,D.f0M,w)},
$S:20}
B.e96.prototype={
$0(){C.a8(this.a,!1).M(!1)
return null},
$S:0}
B.e97.prototype={
$0(){C.a8(this.a,!1).M(!0)
return null},
$S:0}
B.e9I.prototype={
$0(){var w=this.a
return w.n(new B.e9H(w))},
$S:0}
B.e9H.prototype={
$0(){return this.a.r=!1},
$S:0}
B.e9J.prototype={
$2(d,e){var w,v,u,t=null,s=new C.ar(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.lU(new B.e9y(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.aXt:t
v=C.a([C.b1(u,t,t,new B.bdg(w,v,new B.e9z(r),new B.e9A(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.an(t,C.e1(C.c4(w,new B.e9B(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bAt())
return C.aH(A.c5,C.jz(new C.am(A.W,t,A.aY,A.q,v,t),A.q,t),A.z,!1,t,t,t,t,t,t,t,t,new B.e9C(r),t,r.gc7Z(),t,new B.e9D(r),new B.e9E(r),new B.e9F(r),t,t,t,t,t,t,t,t,t,t,new B.e9G(r),t,t,t,!1,A.ae)},
$S:33}
B.e9y.prototype={
$0(){return this.a.a9d(this.b)},
$S:0}
B.e9G.prototype={
$1(d){return this.a.cpG(d.b)},
$S:53}
B.e9E.prototype={
$1(d){return this.a.c8_(d.b)},
$S:40}
B.e9F.prototype={
$1(d){return this.a.c80(d.b)},
$S:18}
B.e9D.prototype={
$1(d){return this.a.aWP()},
$S:36}
B.e9C.prototype={
$1(d){return this.a.a9T(d.b)},
$S:312}
B.e9z.prototype={
$0(){return this.a.z},
$S:646}
B.e9A.prototype={
$0(){return this.a.Q},
$S:708}
B.e9B.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bEH()
if(p.length===0)return A.bF
w=A.x.j(0.55)
v=C.m(14)
u=C.H(A.bG,A.r,1)
t=C.a([D.eWL,A.d5],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.K)(p),++r)t.push(new C.x(p[r],q,D.eI5,q,q,q,q,A.a2,q,2,q,q))
return C.p(q,C.u(t,A.F,q,A.e,A.R,0,A.p),A.h,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h4,q,q,q)},
$S:59}
B.e9a.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.m(12),t=C.H(e.j(0.6),A.r,1),s=x.p
return new C.C(A.e_,C.B(C.a([C.p(w,C.V(d,e,w,w,w,21),A.h,w,w,new C.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bc,C.D(C.u(C.a([C.d(f,w,w,w,w,w,w,T.Hg,w,w,w),A.bA,C.d(g,w,w,w,w,w,w,D.aKg,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1807}
B.e9u.prototype={
$0(){var w=this.a.c
w.toString
return C.a8(w,!1).o3()},
$S:0}
B.e9v.prototype={
$0(){var w=this.a
return w.n(new B.e9t(w))},
$S:0}
B.e9t.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e9w.prototype={
$0(){var w=this.a
return w.n(new B.e9s(w))},
$S:0}
B.e9s.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
B.e9x.prototype={
$0(){var w=this.a
return w.n(new B.e9r(w))},
$S:0}
B.e9r.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e9q.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.m9.gdH(D.m9),w=w.gag(w);w.C();){v=w.gT(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.K)(p),++r)u.push(s.ckI(p[r]))
return new C.C(F.acb,C.u(C.a([new C.C(O.adP,w,q),C.B(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+51}
B.e9p.prototype={
$0(){return this.a.bZz(this.b)},
$S:0}
B.d9g.prototype={
$0(){var w=this,v=null,u=C.iS(v,v,v,v,C.dq(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a6,A.cn,v,A.eE,A.cm)
u.fq()
return u},
$S:328}
B.ejv.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.aj(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.v(s.a+q*n,s.b+r*n)
t.b=new C.v(q*v,r*v)}A.d.bm(o,new B.ejt(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.n(new B.eju())},
$S:8}
B.ejt.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+52}
B.eju.prototype={
$0(){},
$S:0}
B.ej6.prototype={
$0(){},
$S:0}
B.ej5.prototype={
$0(){},
$S:0}
B.ejf.prototype={
$0(){return B.qj(this.b,this.a.d,"spark-painter")},
$S:0}
B.ejh.prototype={
$1(d){return this.a.aUg(0,d.b)},
$S:40}
B.ejl.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gai(w).aE(0,u).gcj()>2.5}else w=!1
if(w)t.a.push(u)
v.aNJ(u)
v.c1v(u)
return null},
$S:18}
B.ejg.prototype={
$1(d){return this.a.aUf()},
$S:36}
B.ejm.prototype={
$1(d){return this.a.aUg(0,d.b)},
$S:23}
B.ejn.prototype={
$1(d){return this.a.aUf()},
$S:53}
B.ejo.prototype={
$0(){var w=this.a
return w.n(new B.eje(w,this.b))},
$S:0}
B.eje.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ejp.prototype={
$0(){var w=this.a
return w.n(new B.ejd(w))},
$S:0}
B.ejd.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.ejq.prototype={
$0(){var w=this.a
return w.n(new B.ejc(w,this.b))},
$S:0}
B.ejc.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ejr.prototype={
$1(d){var w=this.a
return w.n(new B.ejb(w,d))},
$S:6}
B.ejb.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.ejs.prototype={
$0(){var w=this.a
return w.n(new B.eja(w))},
$S:0}
B.eja.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eji.prototype={
$0(){var w=this.a
return w.n(new B.ej9(w))},
$S:0}
B.ej9.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.ejj.prototype={
$0(){var w=this.a
return w.n(new B.ej8(w))},
$S:0}
B.ej8.prototype={
$0(){var w=this.a
A.d.a7(w.e)
A.d.a7(w.f)},
$S:0}
B.ejk.prototype={
$0(){var w=this.a
return w.n(new B.ej7(w,this.b))},
$S:0}
B.ej7.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.eq4.prototype={
$0(){return B.qj(this.b,this.a.d,"title")},
$S:0}
B.eq5.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gHo().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.bTS(v[t],t,s,q,u))
return new C.C(A.fA,C.c8(A.fF,w,A.qY,0,0),null)},
$S:681}
B.eq6.prototype={
$1(d){return this.a.n(new B.eq3())},
$S:2}
B.eq3.prototype={
$0(){},
$S:0}
B.eq7.prototype={
$0(){var w=this.a
w.n(new B.eq2(w,this.b))
w=w.gHo()
w.ie(0,0)
w.cF(0)},
$S:0}
B.eq2.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eq8.prototype={
$0(){var w=this.a
return w.n(new B.eq1(w,this.b))},
$S:0}
B.eq1.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eq9.prototype={
$0(){var w=this.a
return w.n(new B.eq0(w))},
$S:0}
B.eq0.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eqa.prototype={
$0(){var w=this.a
return w.n(new B.eq_(w,this.b))},
$S:0}
B.eq_.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eqb.prototype={
$0(){var w=this.a.gHo()
w.ie(0,0)
w.cF(0)},
$S:0}
B.eqc.prototype={
$1(d){var w=this.a
return w.n(new B.epZ(w,d))},
$S:6}
B.epZ.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.e6k.prototype={
$1(d){return d.a.aE(0,this.a).gcj()<16},
$S:z+13}
B.e6l.prototype={
$1(d){var w=this.b
return d.a.aE(0,w).gcj()<16||d.a.aE(0,w).gcj()>this.a.r.gajB()*2.2},
$S:z+13}
B.e68.prototype={
$0(){return B.qj(this.b,this.a.d,"orbits")},
$S:0}
B.e69.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.ar(e.b,e.d)
q.r=p
w=q.gab2()
v=q.w
u=q.as
t=q.at
s=u==null?A.a_n:q.cbw(u,q.gaRQ())
return new C.en(C.aH(A.c5,C.b1(r,r,r,new B.bhy(q.e,w,v,u,t,s,r),p),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,new B.e65(q),new B.e66(q),new B.e67(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.ae),q.d)},
$S:199}
B.e66.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:40}
B.e67.prototype={
$1(d){return this.a.at=d.b},
$S:18}
B.e65.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aE(0,w).gcj()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new B.YL(u,v.gaRQ(),v.Q,v.aYg(),C.a([],x.g)))
C.jE()
if(v.ax)B.dL(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:36}
B.e6a.prototype={
$1(d){var w=this.a
return w.n(new B.e64(w,d))},
$S:6}
B.e64.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.e6c.prototype={
$1(d){var w=this.a
return w.n(new B.e63(w,d))},
$S:6}
B.e63.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.e6d.prototype={
$1(d){var w=this.a
return w.n(new B.e62(w,d))},
$S:6}
B.e62.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.e6e.prototype={
$0(){var w=this.a
return w.n(new B.e61(w))},
$S:0}
B.e61.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.e6f.prototype={
$0(){var w=this.a
return w.n(new B.e60(w))},
$S:0}
B.e60.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.e6g.prototype={
$0(){var w=this.a
return w.n(new B.e6_(w))},
$S:0}
B.e6_.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.e6h.prototype={
$0(){var w=this.a
return w.n(w.gcmW())},
$S:0}
B.e6i.prototype={
$0(){var w=this.a
return w.n(w.gbAH())},
$S:0}
B.e6j.prototype={
$0(){var w=this.a
return w.n(new B.e5Z(w))},
$S:0}
B.e5Z.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.ae()
s=w.r
w.ao9(50+t*(Math.min(s.a,s.b)/2-70),v.ae()*3.141592653589793*2,0.7+v.ae()*0.5,v.he())}},
$S:0}
B.e6b.prototype={
$0(){var w=this.a
return w.n(A.d.gqN(w.e))},
$S:0}
B.epw.prototype={
$1(d){return this.a.fE$-d.b>6000},
$S:710}
B.epx.prototype={
$1(d){var w=this.a.e
return new C.a4(w,new B.epv(d),C.U(w).k("a4<1>")).gI(0)>=3},
$S:710}
B.epv.prototype={
$1(d){return d.a.aE(0,this.a.a).gcj()<14},
$S:z+54}
B.epl.prototype={
$0(){return B.qj(this.b,this.a.d,"swarm")},
$S:0}
B.epm.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.w=u
return new C.en(C.aH(A.c5,C.b1(w,w,w,new B.boT(v.e,v.f,v.ax,v.at,v.ay,v.fE$,w),u),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new B.epi(v),new B.epj(v),new B.epk(v),w,w,w,w,w,w,w,w,new B.epa(v),new B.epb(v),new B.epc(v),w,w,w,!1,A.ae),v.d)},
$S:199}
B.epj.prototype={
$1(d){return this.a.ay=d.b},
$S:40}
B.epk.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
B.epi.prototype={
$1(d){return this.a.ay=null},
$S:36}
B.epb.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.A(v,w.fE$))
if(w.ch)B.dL(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)B.l1("flute",7,500,0.3)},
$S:23}
B.epc.prototype={
$1(d){return this.a.ay=null},
$S:53}
B.epa.prototype={
$0(){return this.a.ay=null},
$S:0}
B.epn.prototype={
$0(){var w=this.a
return w.n(new B.eph(w,this.b))},
$S:0}
B.eph.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
B.epo.prototype={
$0(){var w=this.a
return w.n(new B.epg(w,this.b))},
$S:0}
B.epg.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a7(w.e)},
$S:0}
B.epp.prototype={
$0(){var w=this.a
return w.n(new B.epf(w))},
$S:0}
B.epf.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.epq.prototype={
$1(d){var w=this.a
return w.n(new B.epe(w,d))},
$S:6}
B.epe.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.epr.prototype={
$1(d){var w=this.a
return w.n(new B.epd(w,d))},
$S:6}
B.epd.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eps.prototype={
$1(d){var w=this.a
return w.n(new B.ep9(w,d))},
$S:6}
B.ep9.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.ept.prototype={
$1(d){var w=this.a
return w.n(new B.ep8(w,d))},
$S:6}
B.ep8.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.epu.prototype={
$1(d){var w=this.a
return w.n(new B.ep7(w,d))},
$S:6}
B.ep7.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dyI.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new B.dyH(w,d))},
$S:131}
B.dyH.prototype={
$0(){var w=this.a,v=this.b,u=J.a6(v),t=C.aQ(u.h(v,"unlocked"))
t=t==null?null:A.k.N(t)
w.w=A.o.D(t==null?1:t,1,100)
t=C.aQ(u.h(v,"level"))
t=t==null?null:A.k.N(t)
if(t==null)t=w.w
w.r=A.o.D(t,1,w.w)
t=C.S(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.jj(v==null?A.uY:v)
v=v.gag(v)
while(v.C()){u=v.gT(v)
t.m(0,C.t(u.a),A.k.N(C.fa(u.b)))}w.x=t
w.Q=!0
A.d.a7(w.d)},
$S:0}
B.dyJ.prototype={
$1(d){return d.d!=null},
$S:z+14}
B.dyK.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Xo(w)>0},
$S:z+14}
B.dyy.prototype={
$0(){var w=this.a
w.r=A.o.D(this.b,1,w.w)
w.awo()},
$S:0}
B.dyB.prototype={
$1(d){var w=null,v=C.m(22),u=this.a
return C.ew(w,D.aap,new C.C(A.bB,new C.a3(340,480,C.u(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.j8,w,w,w),A.T,C.D(C.ih(!0,w,w,A.z,K.aIh,new B.dyA(u,d),100,w,w,A.aj,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.cZ,w,new C.b5(v,A.V),w)},
$S:46}
B.dyA.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new B.dyz(this.b,r):s
v=C.m(12)
if(p)q=r===q.r?A.c3:A.c.j(0.1)
else q=A.c.j(0.03)
u=C.H(p?A.bf:A.dv,A.r,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.j_
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(A.a.aM("\u2605",n)+A.a.aM("\u2606",3-n),s,s,s,s,s,s,D.eLI,s,s,s))
return C.aH(s,C.p(s,C.u(o,A.m,s,A.b6,A.j,0,A.p),A.h,s,s,new C.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.ae)},
$S:76}
B.dyz.prototype={
$0(){C.a8(this.a,!1).M(this.b)
return null},
$S:0}
B.dyF.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gaa9()
o=C.b1(q,q,q,new B.b7b(p.d,w,v,p.gbZG(),q),o)
v=p.bRB("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gGR()
t=p.as>=p.gGR()?A.bl:A.c
s=this.b
r=x.p
s=C.a([o,C.an(q,C.B(C.a([v,p.arD("GOAL",""+w+" / "+u,t),p.arD("STARS",A.a.aM("\u2605",s)+A.a.aM("\u2606",3-s),A.aL)],r),A.m,q,A.hz,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lM)
if(p.Q&&!p.y)s.push(D.aNY)
if(p.z){o=C.m(24)
w=this.c
v=C.H((w?A.bl:A.cH).j(0.6),A.r,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?A.bl:A.cH,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.ar,C.d("You blasted "+p.as+" dots. The goal was "+p.gGR()+".",q,q,q,q,q,q,A.hn,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(A.a.aM("\u2605",t==null?1:t),q,q,q,q,q,q,D.eCz,q,q,q))}u.push(A.ay)
t=C.a([new B.fe(A.m4,"Try again",new B.dyC(p),A.c,q)],r)
if(w&&p.r<100)t.push(new B.fe(A.ji,"Next level",new B.dyD(p),A.bl,q))
u.push(C.B(t,A.m,q,A.e,A.R,0,q,q))
s.push(C.at(C.p(q,C.u(u,A.m,q,A.e,A.R,0,A.p),A.h,q,q,new C.o(D.Ti,q,v,o,q,q,A.n),q,q,q,q,A.a8,q,q,q),q,q,q))}return C.aH(A.c5,new C.am(A.W,q,A.aY,A.q,s,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dyE(p),q,q,q,q,!1,A.ae)},
$S:33}
B.dyE.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fE$
B.dL(180,"",200,1,0.4,"sine")
C.j7()},
$S:23}
B.dyC.prototype={
$0(){var w=this.a
return w.n(w.gb_T())},
$S:0}
B.dyD.prototype={
$0(){var w=this.a
return w.aUh(w.r+1)},
$S:0}
B.dyG.prototype={
$0(){var w=this.a
return w.n(w.gb_T())},
$S:0}
B.cFm.prototype={
$3(d,e,f){var w,v
if(e<=0)return
w=this.a
$.a_()
v=C.N()
v.r=f.j(0.18).gq(0)
w.ak(d,e,v)
v=C.N()
v.b=A.ad
v.c=3
v.r=f.j(0.9).gq(0)
w.ak(d,e,v)
v=C.N()
v.r=f.j(0.25).gq(0)
v.z=A.lA
w.ak(d,e*0.5,v)},
$S:711}
B.e1O.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcFo()?this.a.cja(w,v,d.b):w.aE(0,v).gcj())<24},
$S:z+57}
B.e2c.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+58}
B.e21.prototype={
$0(){var w=this.a
return w.n(new B.e1T(w))},
$S:0}
B.e1T.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.e22.prototype={
$0(){return B.qj(this.b,this.a.d,"marble-music")},
$S:0}
B.e23.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.w=u
return new C.en(C.aH(A.c5,C.b1(w,w,w,new B.bea(v.e,v.f,v.at,v.ax,v.fE$,w),u),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new B.e1Z(v),new B.e2_(v),new B.e20(v),w,w,w,w,w,w,w,w,w,w,new B.e1S(v),w,w,w,!1,A.ae),v.d)},
$S:199}
B.e1S.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.Y6(w)
u.e.push(new B.En(w,w,v,u.aLt(v)))
if(u.ay)B.l1(u.z,v+12,700,0.5)}if(u.x==="erase")u.aNZ(d.b)},
$S:53}
B.e2_.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:40}
B.e20.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aNZ(d.b)},
$S:18}
B.e1Z.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aE(0,w).gcj()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.Y6(t.ao(0,w).ez(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new B.En(w,t,v,u.aLt(v)))
if(u.ay)B.l1(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:36}
B.e24.prototype={
$0(){var w=this.a
return w.n(new B.e1Y(w,this.b))},
$S:0}
B.e1Y.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.e25.prototype={
$0(){var w=this.a
return w.n(new B.e1X(w,this.b))},
$S:0}
B.e1X.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.e26.prototype={
$0(){var w=this.a
return w.n(new B.e1W(w,this.b))},
$S:0}
B.e1W.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.e27.prototype={
$1(d){var w=this.a
return w.n(new B.e1V(w,d))},
$S:6}
B.e1V.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.e28.prototype={
$0(){var w=this.a
return w.n(new B.e1U(w))},
$S:0}
B.e1U.prototype={
$0(){return this.a.auX("stairs")},
$S:0}
B.e29.prototype={
$0(){var w=this.a
return w.n(new B.e1R(w))},
$S:0}
B.e1R.prototype={
$0(){return this.a.auX("pinball")},
$S:0}
B.e2a.prototype={
$0(){var w=this.a
return w.n(new B.e1Q(w))},
$S:0}
B.e1Q.prototype={
$0(){return this.a.auX("random")},
$S:0}
B.e2b.prototype={
$0(){var w=this.a
return w.n(new B.e1P(w))},
$S:0}
B.e1P.prototype={
$0(){var w=this.a
A.d.a7(w.e)
A.d.a7(w.f)},
$S:0}
B.e5I.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
B.e5J.prototype={
$0(){var w=this.b,v=new B.abd(this.a.a,this.c)
v.c=w.fE$
return w.e.push(v)},
$S:0}
B.e5Q.prototype={
$0(){var w=this.a
return w.n(new B.e5P(w))},
$S:0}
B.e5P.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.e5R.prototype={
$0(){return B.qj(this.b,this.a.d,"orbit-sequencer")},
$S:0}
B.e5S.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.ar(e.b,e.d)
if(!u.f){u.f=!0
u.aMO()}w=u.w
return new C.en(C.aH(A.c5,C.b1(v,v,v,new B.bhz(u.e,u.gaUj(),6,u.gcdx(),u.gcjB(),u.fE$,v),w),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.e5O(u),v,v,v,!1,A.ae),u.d)},
$S:199}
B.e5O.prototype={
$1(d){return this.a.bZI(d.b)},
$S:53}
B.e5T.prototype={
$1(d){var w=this.a
return w.n(new B.e5N(w,d))},
$S:6}
B.e5N.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.e5U.prototype={
$0(){var w=this.a
return w.n(new B.e5M(w,this.b))},
$S:0}
B.e5M.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.e5V.prototype={
$0(){var w=this.a
return w.n(new B.e5L(w,this.b))},
$S:0}
B.e5L.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.e5W.prototype={
$0(){var w=this.a
return w.n(w.gbED())},
$S:0}
B.e5X.prototype={
$0(){var w=this.a
return w.n(new B.e5K(w))},
$S:0}
B.e5K.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a7(u)
for(v=v.r,w=0;w<9;++w)u.push(new B.abd(v.aB(6),v.ae()))},
$S:0}
B.e5Y.prototype={
$0(){var w=this.a
return w.n(A.d.gqN(w.e))},
$S:0}
B.fdP.prototype={
$2(d,e){var w=A.o.aj(d,100),v=A.o.H(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:132}
B.e5c.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new B.e5b(w,d))},
$S:131}
B.e5b.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cP:v)
while(v.C())w.push(A.k.N(C.fa(v.gT(v))))
return this.a.x.v(0,w)},
$S:0}
B.e4Z.prototype={
$2(d,e){var w=this.b
if(A.o.aj(d,100)===w||A.o.H(d,100)===w)this.a.a+=e},
$S:132}
B.e4T.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new B.b64(w.b,new C.v(w.c*(0.2+0.6*v.ae()),w.e*(0.2+0.6*v.ae()))))},
$S:0}
B.e4U.prototype={
$0(){var w=this.a
A.d.a7(w.e)
w.f.a7(0)
w.r=null},
$S:0}
B.e4Y.prototype={
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
p=D.uX.h(0,v[u].a).a
o=w.ags(u)
v=D.uX.h(0,v[t].a).a
n=w.ags(t)
if(q<=p-o+r&&q<=v-n+r){m.m(0,s,q)
B.vd("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaUp()&&w.x.J(0,w.d)){B.vd("zap",12,300,0.5)
m=w.x
m=C.z(m,C.a2(m).k("ck.E"))
B.va("molecule_maker",C.E(["done",m],x.N,x.z))}}}},
$S:0}
B.e4X.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a2(t).k("cu<1>"),r=this.b,q=s.k("a4<G.E>"),p=C.z(new C.a4(new C.cu(t,s),new B.e4V(r),q),q.k("G.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.K)(p),++w)t.W(0,p[w])
s=x.S
v=C.S(s,s)
t.bE(0,new B.e4W(r,v))
t.a7(0)
t.v(0,v)
A.d.cu(u.e,r)
u.r=null},
$S:0}
B.e4V.prototype={
$1(d){var w=this.a
return A.o.aj(d,100)===w||A.o.H(d,100)===w},
$S:60}
B.e4W.prototype={
$2(d,e){var w=A.o.aj(d,100),v=A.o.H(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.m(0,w*100+v,e)},
$S:132}
B.e56.prototype={
$1(d){return""+d.b+" "+D.uX.h(0,d.a).c.toLowerCase()},
$S:468}
B.e57.prototype={
$0(){var w=this.a
return w.n(new B.e55(w))},
$S:0}
B.e55.prototype={
$0(){var w=this.a;++w.d
w.atu(0)},
$S:0}
B.e58.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.ar(e.b,e.d)
return C.aH(A.c5,C.b1(w,w,w,new B.beR(v.e,v.f,v.r,v.gctS(),w),A.fi),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new B.e51(v),new B.e52(v),new B.e53(v,e),w,w,w,w,w,w,w,w,w,w,new B.e54(v),w,w,w,!1,A.ae)},
$S:33}
B.e54.prototype={
$1(d){return this.a.c_4(d.b)},
$S:53}
B.e52.prototype={
$1(d){var w=this.a
return w.w=w.aUq(d.b)},
$S:40}
B.e53.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.n(new B.e5_(w,v,d,this.b))},
$S:18}
B.e5_.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.v(A.k.D(t.b.a+s.a,26,r.b-26),A.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
B.e51.prototype={
$1(d){return this.a.w=null},
$S:36}
B.e59.prototype={
$0(){var w=this.a
return w.n(new B.e50(w,this.b))},
$S:0}
B.e50.prototype={
$0(){var w=this.a
w.d=this.b
w.atu(0)},
$S:0}
B.e5a.prototype={
$0(){return this.a.bZZ(0,this.b.a)},
$S:0}
B.dhn.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.aj(d,100)].b,i=k[A.o.H(d,100)].b,h=i.aE(0,j),g=new C.v(-h.b,h.a).ez(0,Math.max(h.gcj(),1))
for(k=(e-1)/2,w=g.a,v=g.b,u=j.a,t=j.b,s=i.a,r=i.b,q=this.b.a,p=0;p<e;++p){o=(p-k)*8
n=w*o
o=v*o
$.a_()
m=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
m.r=A.al.gq(0)
m.c=4
m.d=A.bV
l=m.L()
q.drawLine.apply(q,[u+n,t+o,s+n,r+o,l])
l.delete()}},
$S:132}
B.dGC.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new B.dGB(w,d))},
$S:131}
B.dGB.prototype={
$0(){var w=C.aQ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
B.dGr.prototype={
$0(){var w,v,u=J.e_(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.aqd[w.aB(4)]
return A.d.fM(u)},
$S:22}
B.dGq.prototype={
$1(d){return B.fGS(d)==="*"},
$S:3}
B.dGs.prototype={
$1(d){return d!==this.a},
$S:3}
B.dGp.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
B.va("dna_lab",C.E(["best",r],x.N,x.z))}r=s.d
B.vd("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga6L()[r]+" codes for "+C.t(D.AT.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.aXj()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.K)(w),++u)r.push(D.AT.h(0,w[u]))
r="Protein built: "+A.d.aG(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
B.vd("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
B.dGA.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dv:e,u=C.m(8),t=f?C.H(A.bf,A.r,1):w
return C.p(A.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?A.bf:A.x,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,w,w,new C.o(v,w,t,u,w,w,A.n),w,40,w,A.mB,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1811}
B.dGv.prototype={
$1(d){var w=D.d3d.h(0,d)
return w==null?A.c:w},
$S:712}
B.dGw.prototype={
$0(){var w=this.a
return w.n(new B.dGu(w,this.b))},
$S:0}
B.dGu.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.asV()},
$S:0}
B.dGx.prototype={
$0(){var w=this.a
return w.n(new B.dGt(w))},
$S:0}
B.dGt.prototype={
$0(){var w=this.a;++w.e
w.asV()},
$S:0}
B.dGy.prototype={
$0(){return this.a.aUo(this.b)},
$S:0}
B.dGz.prototype={
$0(){return this.a.aUo(this.b)},
$S:0}
B.dJr.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new B.dJq(w,d))},
$S:131}
B.dJq.prototype={
$0(){var w=C.aQ(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
B.dJe.prototype={
$0(){},
$S:0}
B.dJd.prototype={
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
B.dJf.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
A.d.a7(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
B.dJj.prototype={
$1(d){var w=this.a
return w.n(new B.dJi(w,d))},
$S:6}
B.dJi.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dJk.prototype={
$1(d){var w=this.a
return w.n(new B.dJh(w,d))},
$S:6}
B.dJh.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dJl.prototype={
$1(d){var w=this.a
return w.n(new B.dJg(w,d))},
$S:6}
B.dJg.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.dJm.prototype={
$0(){return this.a.a7V("drought")},
$S:0}
B.dJn.prototype={
$0(){return this.a.a7V("disease")},
$S:0}
B.dJo.prototype={
$0(){return this.a.a7V("foxes")},
$S:0}
B.dJp.prototype={
$0(){return this.a.a7V("rabbits")},
$S:0}
B.cYR.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.f0()
k.dX(A.o.N(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.ae()
p=k.ae()
o=(r&1)===0?1:-1
o=A.k.H(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.ae()
p=Math.sin(s+r*2)
n=new C.lP(new C.es(e,l,l,A.cU,l,l,l,l,l,l,new C.F(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a6,A.cn,new C.k4(1),l,l,l,l,A.cm,l)
n.fq()
n.a6(w,new C.v(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1813}
B.cYT.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this.a.c
if(l.length<2)return
w=$.a_()
v=C.a([],x.v)
u=new C.aR(w.r,A.aq,null,null,v)
for(w=this.b,t=w.a,s=w.c-t,r=w.d,w=r-w.b,q=0;q<l.length;++q){p=t+s*q/159
o=r-w*A.k.D(l[q][d]/e,0,1)
if(q===0){n=new C.b7(p,o)
v.push(n)
m=u.f
if(m!=null)n.bC(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}else{n=new C.ao(p,o)
v.push(n)
m=u.f
if(m!=null)n.bC(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}}$.a_()
l=C.N()
l.b=A.ad
l.c=2.6
l.r=f.gq(0)
l.e=A.fq
this.c.aQ(u,l)},
$S:1814}
B.cYS.prototype={
$3(d,e,f){var w=null,v=C.iS(w,w,w,w,C.dq(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a6,A.cn,w,A.eE,A.cm)
v.fq()
v.a6(this.a,new C.v(f,this.b.b+2))},
$S:1815}
B.bC5.prototype={
$2(d,e){return d+e.a*e.b},
$S:1816}
B.f9G.prototype={
$2(d,e){return e.a-d.a},
$S:1817}
B.duT.prototype={
$2(d,e){return d+e},
$S:75}
B.dv5.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.n(new B.dv4(v,A.k.D((v.gv4()-w[v.e].gu7())/Math.max(w[v.e].gu7(),8),-1,1)*0.32,u))},
$S:8}
B.dv4.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
B.dv6.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new B.dv3(w,d))},
$S:131}
B.dv3.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cP:v)
while(v.C())w.push(A.k.N(C.fa(v.gT(v))))
return this.a.r.v(0,w)},
$S:0}
B.duU.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.H(w[v]+1,6)
w[v]=u
return u},
$S:0}
B.duZ.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1818}
B.dv_.prototype={
$0(){var w=this.a
return w.n(new B.duY(w))},
$S:0}
B.duY.prototype={
$0(){var w=this.a;++w.e
A.d.hi(w.f,0,5,0)},
$S:0}
B.dv0.prototype={
$2(d,e){var w=null,v=this.a
return C.aH(A.c5,C.b1(w,w,w,new B.b6g(v.w,this.b.a,v.f,v.gv4()===v.d[v.e].gu7(),w),A.fi),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.duX(v,e),w,w,w,!1,A.ae)},
$S:33}
B.duX.prototype={
$1(d){var w=this.b.b,v=A.k.U((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cpT(v-1)},
$S:53}
B.dv1.prototype={
$0(){var w=this.a
return w.n(new B.duW(w,this.b))},
$S:0}
B.duW.prototype={
$0(){var w=this.a
w.e=this.b
A.d.hi(w.f,0,5,0)},
$S:0}
B.dv2.prototype={
$0(){var w=this.a
return w.n(new B.duV(w))},
$S:0}
B.duV.prototype={
$0(){return A.d.hi(this.a.f,0,5,0)},
$S:0}
B.cxU.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.bN(C.d9(new C.v(d,s),20,w),A.tx)
$.a_()
q=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
q.r=f.gq(0)
p=q.L()
u.drawRRect(C.fs(r),p)
p.delete()
q=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
q.b=A.ad
q.c=1.2
q.r=A.dw.gq(0)
p=q.L()
u.drawRRect(C.fs(r),p)
p.delete()
B.f8K(v,"1",new C.v(d,s),A.bh,11)}},
$S:1819}
B.dNj.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.n(new B.dNi(w,v))},
$S:8}
B.dNi.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
B.dNk.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new B.dNh(w,d))},
$S:131}
B.dNh.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cP:v)
while(v.C())w.push(A.k.N(C.fa(v.gT(v))))
return this.a.w.v(0,w)},
$S:0}
B.dN9.prototype={
$0(){var w=A.k.U(this.c)
this.a.d[this.b]=w
return w},
$S:0}
B.dNd.prototype={
$0(){var w=this.a
return w.n(new B.dNc(w))},
$S:0}
B.dNc.prototype={
$0(){return this.a.r++},
$S:0}
B.dNe.prototype={
$0(){var w=this.a
return w.n(new B.dNb(w,this.b))},
$S:0}
B.dNb.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dNf.prototype={
$1(d){var w=this.a
return w.n(new B.dNa(w,d))},
$S:6}
B.dNa.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.dNg.prototype={
$1(d){return this.a.c_5(this.b,d)},
$S:6}
B.d4P.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bJG(d,e,f,g),m=this.b
$.a_()
w=C.N()
v=C.aq(h,A.c,i?0.1:0.35)
v.toString
u=C.aq(h,A.x,0.5)
u.toString
w.sar(new C.bR(A.A,0.5,A.w,null,0,C.a([v,h,u],x.O),null,null).az(0,C.bV(d,e+6)))
m.aQ(n,w)
w=C.N()
w.b=A.ad
w.c=1.5
w.r=A.aV.gq(0)
m.aQ(n,w)
w=C.N()
w.r=A.x.j(0.28).gq(0)
m.ak(d,e*0.55,w)
for(w=d.a,v=d.b,u=m.a,t=0;t<4;++t){s=g+t*3.141592653589793/2
r=Math.cos(s)
q=Math.sin(s)
p=new C.av(A.Z,A.X,A.a0,A.a1,A.a_)
p.r=A.hN.gq(0)
p.c=3
o=p.L()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.N()
w.r=A.aJ.gq(0)
m.ak(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1820}
B.d4Q.prototype={
$3(d,e,f){var w=this,v=w.b
return B.f8K(w.a,d,new C.v(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1821}
B.dz4.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new B.dz3(w,d))},
$S:131}
B.dz3.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cP:v)
while(v.C())w.push(A.k.N(C.fa(v.gT(v))))
return this.a.Q.v(0,w)},
$S:0}
B.dyN.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jv(90-(w-65)):d},
$S:13}
B.dyW.prototype={
$1(d){return this.a.n(new B.dyV())},
$S:2}
B.dyV.prototype={
$0(){},
$S:0}
B.dyX.prototype={
$1(d){return this.a.n(new B.dyU())},
$S:2}
B.dyU.prototype={
$0(){},
$S:0}
B.dyY.prototype={
$0(){var w=this.a
return w.n(new B.dyT(w))},
$S:0}
B.dyT.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aTk()},
$S:0}
B.dyZ.prototype={
$0(){var w=this.a
return w.n(new B.dyS(w))},
$S:0}
B.dyS.prototype={
$0(){return this.a.f=0},
$S:0}
B.dz_.prototype={
$0(){var w=this.a
return w.n(new B.dyR(w))},
$S:0}
B.dyR.prototype={
$0(){return this.a.f=1},
$S:0}
B.dz0.prototype={
$0(){var w=this.a
return w.n(new B.dyQ(w,this.b))},
$S:0}
B.dyQ.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dz1.prototype={
$1(d){var w=this.a
return w.n(new B.dyP(w,d))},
$S:6}
B.dyP.prototype={
$0(){return this.a.w=A.k.U(this.b)},
$S:0}
B.dz2.prototype={
$1(d){var w=this.a
w.n(new B.dyO(w,d))
if(w.ga7c()&&w.Q.J(0,w.x)){B.vd("zap",9,220,0.45)
w=w.Q
w=C.z(w,C.a2(w).k("ck.E"))
B.va("cipher_lab",C.E(["done",w],x.N,x.z))}},
$S:6}
B.dyO.prototype={
$0(){return this.a.z=A.k.U(this.b)},
$S:0}
B.bHB.prototype={
$1(d){return d.r<=0},
$S:z+62}
B.bHM.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+8}
B.bHH.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+8}
B.bHO.prototype={
$2(d,e){var w=this.a
return w.ce(0,d.a+"."+e,new B.bHP(w))},
$S:z+5}
B.bHP.prototype={
$0(){return this.a.a},
$S:113}
B.bHN.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:86}
B.bHQ.prototype={
$2(d,e){var w=this.a
return w.ce(0,this.b.$1(this.c.$2(d,e)),new B.bHR(w))},
$S:z+5}
B.bHR.prototype={
$0(){return this.a.a},
$S:113}
B.bHD.prototype={
$2(d,e){var w=this.a
return w.ce(0,d.a+"."+e,new B.bHE(w))},
$S:z+5}
B.bHE.prototype={
$0(){return this.a.a},
$S:113}
B.bHC.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:86}
B.bHF.prototype={
$2(d,e){var w=this.a
return w.ce(0,this.b.$1(this.c.$2(d,e)),new B.bHG(w))},
$S:z+5}
B.bHG.prototype={
$0(){return this.a.a},
$S:113}
B.bHA.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.CW)>0.5*Math.abs(w.CW)},
$S:z+1}
B.bHS.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+8}
B.bHI.prototype={
$1(d){var w
if(d!==this.b){w=d.b
w=(D.Qg.t(0,w)||D.t9.am(0,w))&&Math.abs(d.CW)>0.0005}else w=!1
return w},
$S:z+1}
B.bHL.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bHK.prototype={
$1(d){return d.cx>=this.a&&!d.x},
$S:z+1}
B.bHJ.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bD2.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
B.bD3.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+10}
B.cfr.prototype={
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
B.fpe.prototype={
$1(d){var w
$.a_()
w=C.N()
w.r=d.gq(0)
return w},
$S:1822}
B.fpg.prototype={
$2(d,e){var w
$.a_()
w=C.N()
w.b=A.ad
w.c=e
w.r=d.gq(0)
w.d=A.bV
return w},
$S:1823}
B.fph.prototype={
$5(d,e,f,g,h){return C.bN(new C.ac(d,e,d+f,e+g),new C.b3(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1824}
B.fpf.prototype={
$3(d,e,f){var w
$.a_()
w=C.N()
w.sar(new C.a7(A.b1,A.b5,A.w,C.a([e,f],x.O),null,null).az(0,d))
return w},
$S:1825}
B.bCI.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bCJ.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new B.bCH(w))},
$S:0}
B.bCH.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bCK.prototype={
$0(){return C.a([],x.ey)},
$S:1826}
B.bCL.prototype={
$1(d){return this.a.bv(d).a>1e6},
$S:367}
B.bD_.prototype={
$2(d,e){var w
if(d==="short"){B.dL(1800,"",120,0,0.55,"noise")
B.dL(200,"",160,2.2,0.4,"saw")
C.fV()
w=this.a
if(w.c!=null)w.atv("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="burn"){w=this.a
if(w.c!=null)w.atv("Burnt out! "+e.ay)
B.dL(140,"",320,0,0.6,"noise")
B.dL(900,"",160,1.5,0.35,"square")}},
$S:z+66}
B.bD0.prototype={
$0(){},
$S:0}
B.bCp.prototype={
$0(){},
$S:0}
B.bD1.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
B.bCZ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ar(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aH(A.c5,C.b1(p,p,p,new B.agb(w,v,u,t,s,r==null?A.jK:r,p),n),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,new B.bCT(o),new B.bCU(o),new B.bCV(o),p,p,p,p,p,p,p,p,p,p,new B.bCW(o),p,p,p,!1,A.ae)],q)
if(o.a.c.a.length===0)n.push(D.aWR)
w=o.Q
if(w!=null){v=C.m(14)
u=C.H(A.cX,A.r,1)
n.push(C.an(p,C.aH(p,C.p(p,C.B(C.a([D.eNV,C.D(C.d(w,p,p,p,p,p,p,D.eGs,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.h,p,p,new C.o(D.b0H,p,u,v,p,p,A.n),p,p,p,p,A.qe,p,p,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bCX(o),p,p,p,p,p,p,!1,A.ae),p,p,10,10,8,p))}if(o.e!=null)n.push(C.an(8,o.aUr(C.B(C.a([D.bmC,new B.fe(A.Xt,"Cut wire",new B.bCY(o),A.cH,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.an(8,o.c8x(w),p,p,10,10,p,p))}return C.jz(new C.am(A.W,p,A.aY,A.q,n,p),A.q,p)},
$S:444}
B.bCU.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b21(s)
if(r!=null){t.n(new B.bCR(t,r,d))
return}w=t.aWZ(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.v(v*u.a,w.d*u.b).aE(0,s)
t.n(new B.bCS(t,w))}},
$S:40}
B.bCR.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
B.bCS.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bCV.prototype={
$1(d){var w=this.a
if(w.f!=null)w.n(new B.bCP(w,d))
else if(w.w!=null)w.n(new B.bCQ(w,d.b.ao(0,w.x)))},
$S:18}
B.bCP.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
B.bCQ.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
B.bCT.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b21(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.azI(u.a,u.b,v.a,v.b)!=null)B.dL(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.abe()},
$S:36}
B.bCW.prototype={
$1(d){var w=this.a,v=d.b,u=w.aWZ(v)
if(u!=null){w.n(new B.bCN(w,u))
if(u.b==="tv")w.csi(u)
w.a.toString
return}w.n(new B.bCO(w,w.cuF(v)))},
$S:53}
B.bCN.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
B.dL(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
B.dL(200,"",70,0,0.2,"saw")}},
$S:0}
B.bCO.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
B.bCX.prototype={
$0(){var w=this.a
return w.n(new B.bCM(w))},
$S:0}
B.bCM.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bCY.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
B.dL(300,"",50,0,0.35,"noise")
w.abe()},
$S:0}
B.bCq.prototype={
$0(){return this.a.bj4(this.b)},
$S:0}
B.bCE.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.B(C.a([C.d(d,w,w,w,w,w,w,D.eBe,w,w,w),C.D(C.mb(this.b.d,w,w,g,h,new B.bCG(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1827}
B.bCG.prototype={
$1(d){var w=this.a
w.n(new B.bCF(this.b,d))
w.a.toString},
$S:6}
B.bCF.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bCv.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
B.dL(260,"",70,0,0.35,"noise")
w.abe()},
$S:0}
B.bCw.prototype={
$0(){var w=this.a
return w.n(new B.bCu(w))},
$S:0}
B.bCu.prototype={
$0(){return this.a.d=null},
$S:0}
B.bCx.prototype={
$0(){this.a.n(new B.bCt(this.b,this.c))
B.dL(900,"",40,0,0.3,"noise")},
$S:0}
B.bCt.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bCy.prototype={
$0(){return this.a.aWi(this.b)},
$S:0}
B.bCz.prototype={
$0(){var w=this.a
w.n(new B.bCs(this.b,this.c))
w.a.toString},
$S:0}
B.bCs.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
B.bCA.prototype={
$0(){var w=this.a
w.n(new B.bCr(this.b,this.c))
w.a.toString},
$S:0}
B.bCr.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bCB.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bCC.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bCD.prototype={
$1(d){return this.a.f=d},
$S:6}
B.f06.prototype={
$1(d){return d.aCr("bulb")},
$S:z+2}
B.f07.prototype={
$1(d){return d.aBB(0,"switch")&&d.aCr("bulb")},
$S:z+2}
B.f08.prototype={
$1(d){return A.d.bg(d.a,new B.f_W())},
$S:z+2}
B.f_W.prototype={
$1(d){return d.b==="motor"&&d.cx>0.3},
$S:z+1}
B.f09.prototype={
$1(d){return d.aBB(0,"resistor")&&A.d.bg(d.a,new B.f_V())},
$S:z+2}
B.f_V.prototype={
$1(d){return d.b==="led"&&d.cx>0.3&&!d.x},
$S:z+1}
B.f0a.prototype={
$1(d){return!d.aBB(0,"battery")&&d.aCr("bulb")},
$S:z+2}
B.f0_.prototype={
$1(d){return A.d.bg(d.a,new B.f_U())},
$S:z+2}
B.f_U.prototype={
$1(d){return d.b==="radio"&&d.cx>0},
$S:z+1}
B.f00.prototype={
$1(d){return A.d.bg(d.a,new B.f_T())},
$S:z+2}
B.f_T.prototype={
$1(d){return d.b==="tv"&&d.cx>0},
$S:z+1}
B.f01.prototype={
$1(d){return A.d.bg(d.a,new B.f_S())},
$S:z+2}
B.f_S.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
B.f02.prototype={
$1(d){return A.d.bg(d.a,new B.f_R())},
$S:z+2}
B.f_R.prototype={
$1(d){return d.b==="heater"&&d.cx>0.5},
$S:z+1}
B.dJx.prototype={
$1(d){var w=d.b
return(D.Qg.t(0,w)||D.t9.am(0,w))&&this.a.d.SO(d)},
$S:z+1}
B.dJy.prototype={
$1(d){return d.x},
$S:z+1}
B.dJz.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
B.dJA.prototype={
$0(){},
$S:0}
B.dJw.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.m(22),o=x.p,n=C.a([D.f2t,A.av,D.ePt,A.T],o)
for(w=this.a,v=0;v<16;++v){u=D.O1[v]
t=A.c.j(0.06)
s=new C.b3(14,14)
r=new C.ay(A.bG,1,A.r,-1)
n.push(C.aH(q,C.p(q,C.u(C.a([new C.x(u.a,q,A.kg,q,q,q,q,q,q,q,q,q),A.bA,new C.x(u.b,q,D.eH5,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.h,q,q,new C.o(t,q,new C.c2(r,r,r,r),new C.bv(s,s,s,s),q,q,A.n),q,q,q,A.cK,A.bk,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dJv(w,d,u),q,q,q,q,q,q,!1,A.ae))}return C.ew(q,D.aap,new C.C(A.c2,new C.a3(340,q,C.cL(n,q,q,q,q,A.aj,!0),q),q),q,q,q,q,A.cZ,q,new C.b5(p,A.V),q)},
$S:46}
B.dJv.prototype={
$0(){C.a8(this.b,!1).M(null)
var w=this.a
w.n(new B.dJu(w,this.c))
B.dL(800,"",120,-0.5,0.3,"square")},
$S:0}
B.dJu.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bct()},
$S:0}
B.dJC.prototype={
$0(){return C.a8(this.a,!1).o3()},
$S:0}
B.dJD.prototype={
$0(){var w=this.a
return w.n(w.d.gcL8())},
$S:0}
B.dJE.prototype={
$0(){var w=this.a,v=w.d
return w.n(v.gqN(v))},
$S:0}
B.dJF.prototype={
$0(){return B.h53(this.a,"ELECTRONICS LAB",this.b,A.b_)},
$S:0}
B.dJG.prototype={
$0(){var w=this.a
return w.n(new B.dJB(w))},
$S:0}
B.dJB.prototype={
$0(){var w=this.a
$.bA1()
return w.f=Math.min(9,w.f+1)},
$S:0}
B.f8Q.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p=this
if(g===0||h<=0)return
w=f*A.k.D(h,0,1)
v=d.ao(0,new C.v(Math.cos(e)*w,-Math.sin(e)*w))
u=p.a
$.a_()
t=C.N()
t.r=A.hK.gq(0)
t.c=g*2.2
t.d=A.bV
u.bK(d,v,t)
if(h>0.95){s=Math.sin(p.b*1.6+g)*0.04
t=f*0.72
r=g-1
q=h*1.6-0.9
p.$5(v,e+0.5+s,t,r,q-(5-g)*0)
p.$5(v,e-0.5+s,t,r,q)}if(g===1&&h>0.5){t=C.N()
t.r=C.aq(A.dk,A.bl,(Math.sin(p.b*2+v.a)+1)/2).gq(0)
u.ak(v,p.c*0.035,t)}},
$S:1828}
B.fwP.prototype={
$3(d,e,f){return new B.Un(this.a,this.c,this.b,null)},
$C:"$3",
$R:3,
$S:z+68}
B.fwQ.prototype={
$4(d,e,f,g){var w=x.F
return new C.cZ(e,!1,C.iu(A.A,g,null,new C.bd(C.cE(A.co,e,null),new C.bl(0.85,1,w),w.k("bd<bC.T>"))),null)},
$C:"$4",
$R:4,
$S:30}
B.eqf.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new B.eqe(w))},
$S:0}
B.eqe.prototype={
$0(){return this.a.w=!1},
$S:0}
B.eqd.prototype={
$0(){var w,v=this.a
v.e=A.o.H(v.gC8()+this.b,6)
if(v.gC8()<0)v.e=v.gC8()+6
w=v.ga6I().y
w=w==null?null:A.o.aj(w.a,1000)
v.r=w==null?0:w
v.w=!0},
$S:0}
B.eqk.prototype={
$0(){var w=this.a
w.n(new B.eqg(w))
w.arz()},
$S:0}
B.eqg.prototype={
$0(){return this.a.w=!0},
$S:0}
B.eqh.prototype={
$2(d,e){var w=null,v=this.a,u=v.ga6I().y,t=u==null?w:A.o.aj(u.a,1000),s=(t==null?0:t)/1000,r=v.r===0&&v.a.d?s:99
return C.b1(w,w,w,new B.bqC(v.gC8(),s,r,w),A.fi)},
$S:70}
B.eqi.prototype={
$0(){return this.a.aUt(-1)},
$S:0}
B.eqj.prototype={
$0(){return this.a.aUt(1)},
$S:0}
B.dYC.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new B.dYB(w,d))},
$S:131}
B.dYB.prototype={
$0(){var w=this.a,v=this.b,u=J.a6(v),t=C.aQ(u.h(v,"best"))
t=t==null?null:A.k.N(t)
w.e=t==null?0:t
v=C.aQ(u.h(v,"level"))
v=v==null?null:A.k.N(v)
if(v==null)v=0
w.d=v
w.f=B.fHl(v)},
$S:0}
B.dYD.prototype={
$0(){},
$S:0}
B.dYs.prototype={
$0(){var w=this.a,v=A.o.D(this.b,0,59)
w.d=v
w.f=B.fHl(v)
w.r.a7(0)
w.x=!1},
$S:0}
B.dYt.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.guF().r){C.jE()
return}q.m(0,p,"/")}else if(o==="/")q.m(0,p,"\\")
else q.W(0,p)
B.vd("click",s.c+s.d,60,0.4)
if(B.h5c(r.guF(),q).b.a===r.guF().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}B.va("laser_maze",C.E(["best",p,"level",Math.min(q,59)],x.N,x.z))
B.Ay("bell",D.ajY,700,0.45)
for(q=r.guF().c,q=C.ef(q,q.r,C.a2(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.A(new C.v((A.o.H(t,7)+0.5)*p+w,(A.o.aj(t,7)+0.5)*p+v),0))}}},
$S:0}
B.dYw.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.ar(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aH(A.c5,C.b1(s,s,s,new B.bdl(r.guF(),w,v.a,u,r.w,r.z,s),q),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dYu(r),s,s,s,!1,A.ae),C.an(s,C.e1(C.B(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,E.aJO,s,s,s),C.d(""+u.a+"/"+r.guF().c.a+" \u2605   mirrors "+w.a+"/"+r.guF().r,s,s,s,s,s,s,O.a3V,s,s,s)],t),A.m,s,A.hz,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(B.f4j("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.bl,C.a([new B.fe(A.ji,"Next level",new B.dYv(r),A.bl,s)],t)))
return new C.am(A.W,s,A.aY,A.q,w,s)},
$S:61}
B.dYu.prototype={
$1(d){return this.a.c_o(d.b)},
$S:53}
B.dYv.prototype={
$0(){var w=this.a
return w.abg(w.d+1)},
$S:0}
B.dYx.prototype={
$0(){var w=this.a,v=w.r
return w.n(v.gqN(v))},
$S:0}
B.dYy.prototype={
$0(){var w=this.a
return w.abg(w.d+1)},
$S:0}
B.dYz.prototype={
$0(){var w=this.a
return w.abg(w.d-1)},
$S:0}
B.dYA.prototype={
$0(){return this.a.abg(this.b)},
$S:0}
B.d9D.prototype={
$1(d){var w=this.b
return new C.v(this.a+(A.o.H(d,7)+0.5)*w,this.c+(A.o.aj(d,7)+0.5)*w)},
$S:713}
B.d9G.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.v(r,s):new C.v(r,r),p=new C.v(-q.a,-q.b)
r=this.c
w=t.ao(0,q)
v=t.ao(0,p)
$.a_()
u=C.N()
u.r=(f?A.hv:A.aJ).gq(0)
u.c=7
u.d=A.bV
r.bK(w,v,u)
w=t.ao(0,q)
v=t.ao(0,p)
u=C.N()
u.r=A.c.gq(0)
u.c=2.4
u.d=A.bV
r.bK(w,v,u)},
$S:1830}
B.d9E.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:458}
B.d9F.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:458}
B.dYV.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new B.dYU(w,d))},
$S:131}
B.dYU.prototype={
$0(){var w=C.aQ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
B.dYW.prototype={
$0(){},
$S:0}
B.dYG.prototype={
$1(d){return d===0},
$S:126}
B.dYP.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.w(1,q[0],q[1],q[2],A.t)
q=C.d("ROUND "+C.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,E.a48,s,s,s)
w=r.z==="play"?A.k.dF(r.y):20
v=x.p
w=C.B(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?A.cH:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,O.a3V,s,s,s)],v),A.m,s,A.hz,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dv:p
t=C.m(22)
t=C.D(C.p(s,s,A.h,s,s,new C.o(u,s,C.H(A.bf,A.r,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.u(C.a([new C.C(D.bgJ,w,s),C.D(C.B(C.a([C.D(new C.C(A.bR,C.u(C.a([t,A.ar,C.d(q?"TARGET":"TARGET: "+r.gcpW(),s,s,s,s,s,s,D.aKB,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),C.D(new C.C(A.bR,C.u(C.a([C.D(C.b1(s,s,s,new B.bdA(r.f,s),A.fi),1),A.ar,C.d("YOURS \xb7 "+A.k.U(A.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aKB,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(B.f4j("Light Mixer","Match each colour with red, green and blue light."+q,A.b9,C.a([new B.fe(A.iK,"Start",new B.dYM(r),A.bl,s)],v)))}if(r.z==="result")w.push(B.f4j(r.Q,"Score so far: "+r.w,A.aL,C.a([new B.fe(A.ji,"Next colour",new B.dYN(r),A.bl,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(B.f4j("Finished! "+q,u,A.bl,C.a([new B.fe(A.m4,"Play again",new B.dYO(r),A.bl,s)],v)))}return new C.am(A.W,s,A.a9,A.q,w,s)},
$S:61}
B.dYM.prototype={
$0(){var w=this.a
return w.n(new B.dYI(w))},
$S:0}
B.dYI.prototype={
$0(){var w=this.a
w.w=w.r=0
w.aty()},
$S:0}
B.dYN.prototype={
$0(){var w=this.a
return w.n(w.gc_m())},
$S:0}
B.dYO.prototype={
$0(){var w=this.a
return w.n(new B.dYH(w))},
$S:0}
B.dYH.prototype={
$0(){var w=this.a
w.w=w.r=0
w.aty()},
$S:0}
B.dYQ.prototype={
$1(d){var w=this.a
return w.n(new B.dYL(w,d))},
$S:6}
B.dYL.prototype={
$0(){var w=A.k.U(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
B.dYR.prototype={
$1(d){var w=this.a
return w.n(new B.dYK(w,d))},
$S:6}
B.dYK.prototype={
$0(){var w=A.k.U(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
B.dYS.prototype={
$1(d){var w=this.a
return w.n(new B.dYJ(w,d))},
$S:6}
B.dYJ.prototype={
$0(){var w=A.k.U(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
B.dYT.prototype={
$0(){var w=this.a
return w.n(w.gc_n())},
$S:0}
B.f0P.prototype={
$0(){return D.dI7},
$S:z+69}
B.f0Q.prototype={
$0(){return D.dfp},
$S:z+70}
B.f0R.prototype={
$0(){return D.dbY},
$S:z+71}
B.f0S.prototype={
$0(){return D.deQ},
$S:z+72}
B.f0T.prototype={
$0(){return D.djM},
$S:z+73}
B.f0U.prototype={
$0(){return D.dDV},
$S:z+74}
B.f0V.prototype={
$0(){return D.dG6},
$S:z+75}
B.f0W.prototype={
$0(){return D.dj5},
$S:z+76}
B.cag.prototype={
$0(){return C.a8(this.a,!1).o3()},
$S:0}
B.cah.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.h8B(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.b3(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.aa(0,A.G,p.j(0.4),A.dm,16)],t)
n=A.c.j(0.85)
j.push(C.aH(m,C.p(m,new C.am(A.W,m,A.a9,A.q,C.a([new C.cF(m,-6,-6,m,m,m,new C.x(r.c,m,I.QV,m,m,m,m,m,m,m,m,m),m),new C.bG(A.lb,m,m,C.u(C.a([new C.x(r.a,m,D.eLz,m,m,m,m,m,m,m,m,m),A.d5,new C.x(r.b,m,new C.F(!0,n,m,m,m,m,12,A.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.R,0,A.p),m)],k),m),A.h,m,m,new C.o(m,m,m,new C.bv(q,q,q,q),p,new C.a7(A.ax,A.aC,A.w,o,m,m),A.n),m,v,m,m,A.bB,m,m,l),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.caf(d,r),m,m,m,m,m,m,!1,A.ae))}return C.c8(A.bH,j,A.bx,14,14)},
$S:168}
B.caf.prototype={
$0(){return C.a8(this.a,!1).cr(C.eH(new B.cae(this.b),!1,null,x.H))},
$S:0}
B.cae.prototype={
$1(d){return this.a.f.$0()},
$S:43}
B.eui.prototype={
$0(){var w=this.a
return w.w=w.d[w.b_j(w.f)]},
$S:0}
B.eue.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cB.ae()*7},
$S:0}
B.eud.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bI(0,A.c_)
w.w=""},
$S:0}
B.eug.prototype={
$0(){var w=this.a
return w.n(new B.euf(w,this.b))},
$S:0}
B.euf.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cu(w,this.b)},
$S:0}
B.euh.prototype={
$1(d){return this.a.aUO(0)},
$S:2}
B.dLC.prototype={
$0(){return B.Ay("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
B.dLD.prototype={
$0(){},
$S:0}
B.dLx.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
B.dLz.prototype={
$0(){return this.a.aUQ(this.b)},
$S:0}
B.dLA.prototype={
$0(){var w=this.a
return w.n(new B.dLy(w))},
$S:0}
B.dLy.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
B.dLB.prototype={
$0(){var w=this.a
return w.aUQ(w.d)},
$S:0}
B.dxv.prototype={
$2(d,e){return d+e},
$S:93}
B.dxw.prototype={
$0(){},
$S:0}
B.dxq.prototype={
$2(d,e){return d+e},
$S:93}
B.dxt.prototype={
$0(){var w=this.a
return w.n(new B.dxs(w,this.b))},
$S:0}
B.dxs.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
B.dxu.prototype={
$0(){var w=this.a
return w.n(new B.dxr(w))},
$S:0}
B.dxr.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
B.dJ3.prototype={
$0(){return B.qj(this.b,this.a.d,"drawing")},
$S:0}
B.dJ4.prototype={
$1(d){var w=this.a
return w.n(new B.dJ2(w,d))},
$S:40}
B.dJ2.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aF6(u,v,t))},
$S:0}
B.dJ5.prototype={
$1(d){var w=this.a
return w.n(new B.dJ1(w,d))},
$S:18}
B.dJ1.prototype={
$0(){return A.d.gai(this.a.e).c.push(this.b.b)},
$S:0}
B.dJ6.prototype={
$1(d){var w=this.a
return w.n(new B.dJ0(w,d))},
$S:23}
B.dJ0.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aF6(u,v,t))},
$S:0}
B.dJ7.prototype={
$0(){var w=this.a
return w.n(new B.dJ_(w,this.b))},
$S:0}
B.dJ_.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
B.dJ8.prototype={
$1(d){var w=this.a
return w.n(new B.dIZ(w,d))},
$S:6}
B.dIZ.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dJ9.prototype={
$0(){var w=this.a
return w.n(new B.dIY(w))},
$S:0}
B.dIY.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dJa.prototype={
$0(){var w=this.a
return w.n(new B.dIX(w))},
$S:0}
B.dIX.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.dJb.prototype={
$0(){var w=this.a
return w.n(A.d.gqN(w.e))},
$S:0}
B.dJc.prototype={
$0(){var w=this.a
return w.n(new B.dIW(w))},
$S:0}
B.dIW.prototype={
$0(){var w=this.a
w.x=D.aqG[A.o.H(A.d.cP(D.aqG,w.x)+1,4)]},
$S:0}
B.e32.prototype={
$0(){return this.a.f.J(0,this.b)},
$S:0}
B.e33.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
B.Ay("bell",C.a([0,4,7],w),500,0.45)
u.n(new B.e31(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)B.Ay("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
B.e31.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a7(0)},
$S:0}
B.e34.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new B.e30(w))},
$S:11}
B.e30.prototype={
$0(){var w=this.a
w.f.a7(0)
w.x=!1},
$S:0}
B.e38.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aH(w,C.mA(new B.e36(v,e),w,A.b8,A.rB,w,new C.bl(0,u,x.F),x.i),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.e37(v,e),w,w,w,w,w,w,!1,A.ae)},
$S:76}
B.e37.prototype={
$0(){return this.a.c0g(this.b)},
$S:0}
B.e36.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dh(),m=n.a
m.$flags&2&&C.ah(m)
m[11]=0.001
n.fk(3.141592653589793*e)
m=C.m(16)
w=o?p:D.bIm
if(o)v=q.a.r.t(0,q.b)?A.bl.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.H(u.r.t(0,t)?A.bl:A.bf,A.r,1)
if(o){r=C.dh()
r.fk(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fn(A.A,C.d(u[t],p,p,p,p,p,p,D.eIX,p,p,p),p,r,!0)
u=r}else u=D.f1j
return C.fn(A.A,C.p(A.A,u,A.h,p,p,new C.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:134}
B.e39.prototype={
$0(){var w=this.a
return w.n(new B.e35(w,this.b))},
$S:0}
B.e35.prototype={
$0(){var w=this.a
w.d=this.b.a
w.ap_()},
$S:0}
B.e3a.prototype={
$0(){var w=this.a
return w.n(w.gbDc())},
$S:0}
B.ebx.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
B.eby.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
B.ebv.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.ebw.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new B.ebu(w))},
$S:11}
B.ebu.prototype={
$0(){return this.a.f=-1},
$S:0}
B.ebz.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
B.ebA.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
B.ebB.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aUP()},
$S:11}
B.ebC.prototype={
$0(){return this.a.c0m(this.b)},
$S:0}
B.epP.prototype={
$1(d){return C.t(d.h(0,1))+","},
$S:69}
B.epY.prototype={
$3$big(d,e,f){var w=null,v=C.D(C.d(d,w,1,A.a2,w,w,w,C.l(w,w,A.aQ,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.C(A.ln,C.B(C.a([v,A.aa,new C.dp(1,A.cj,C.eX(A.A,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,A.e8),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1832}
B.epU.prototype={
$1(d){return this.a.n(new B.epT())},
$S:2}
B.epT.prototype={
$0(){},
$S:0}
B.epV.prototype={
$0(){var w=this.a
return w.n(new B.epS(w,this.b))},
$S:0}
B.epS.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.epW.prototype={
$1(d){var w=this.a
return w.n(new B.epR(w,d))},
$S:6}
B.epR.prototype={
$0(){return this.a.f=A.k.U(this.b)},
$S:0}
B.epX.prototype={
$0(){var w=this.a
return w.n(new B.epQ(w))},
$S:0}
B.epQ.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.e1I.prototype={
$0(){},
$S:0}
B.e1J.prototype={
$0(){},
$S:0}
B.e1B.prototype={
$0(){var w=this.a
return w.n(new B.e1A(w))},
$S:0}
B.e1A.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.bY(u,1,!1,x.S)
w.r=0.9
B.a67("hat",0.6)},
$S:0}
B.e1C.prototype={
$0(){var w=this.a
return w.n(new B.e1z(w))},
$S:0}
B.e1z.prototype={
$0(){this.a.y=1.1
B.l1("bell",36,200,0.4)},
$S:0}
B.e1D.prototype={
$0(){var w=this.a
return w.n(new B.e1y(w))},
$S:0}
B.e1y.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aB(Math.max(v,u)-t+1)
w.as=u
B.l1("bell",12+A.o.H(u,12),500,0.5)},
$S:0}
B.e1E.prototype={
$0(){var w=this.a
return w.n(new B.e1x(w,this.b))},
$S:0}
B.e1x.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.e1F.prototype={
$1(d){var w=this.a
return w.n(new B.e1w(w,d))},
$S:6}
B.e1w.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.U(this.b),r=J.e_(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
B.e1G.prototype={
$1(d){var w=this.a
return w.n(new B.e1v(w,d))},
$S:6}
B.e1v.prototype={
$0(){return this.a.z=A.k.U(this.b)},
$S:0}
B.e1H.prototype={
$1(d){var w=this.a
return w.n(new B.e1u(w,d))},
$S:6}
B.e1u.prototype={
$0(){return this.a.Q=A.k.U(this.b)},
$S:0}
B.cmm.prototype={
$0(){return C.a8(this.a,!1).o3()},
$S:0}
B.cmn.prototype={
$0(){var w=this.a
return B.h53(this.b,w.c,w.e,w.d)},
$S:0}
B.fxf.prototype={
$1(d){var w,v=null,u=C.m(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.eBK,v,v,v)
return C.eo(C.a([C.bI(!1,D.eSp,v,v,!0,v,v,new B.fxe(d),v,v)],x.p),v,v,D.rr,w,v,v,v,new C.b5(u,new C.ay(s,1,A.r,-1)),t,v)},
$S:20}
B.fxe.prototype={
$0(){C.a8(this.a,!1).M(null)
return null},
$S:0}
B.cmi.prototype={
$0(){C.eG()
this.a.e.$0()},
$S:0}
B.cmh.prototype={
$0(){C.eG()
this.a.e.$0()},
$S:0}
B.cmo.prototype={
$0(){C.eG()
this.a.e.$0()},
$S:0}
B.cmj.prototype={
$0(){var w=this.a
A.d.W(w.fb$,this.b.b8())
if(w.c!=null)this.c.$0()},
$S:0}
B.cml.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.ky$.a)/1e6,0,0.04)
w.ky$=d
w.fE$=A.o.aj(v,1000)
w.l4(u)
if(w.c!=null)w.n(new B.cmk())},
$S:8}
B.cmk.prototype={
$0(){},
$S:0}
B.cab.prototype={
$2(d,e){var w,v,u,t
for(w=e.length,v=this.a,u=v.$flags|0,t=0;t<w;++t){u&2&&C.ah(v,9)
v.setUint8(d+t,e.charCodeAt(t))}},
$S:458}
B.cad.prototype={
$0(){var w=this
return B.hmA(w.a,w.b,w.c,w.d,w.e)},
$S:323}
B.cac.prototype={
$0(){var w=this
return B.l1(w.a,w.b,w.c,w.d)},
$S:1}
B.dOk.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new B.dOj(w,d))},
$S:z+78}
B.dOj.prototype={
$0(){return this.a.ckk(this.b)},
$S:0}
B.dNN.prototype={
$0(){var w,v,u,t=this.a,s=J.a6(t),r=s.gI(t),q=new Float64Array(r*4)
for(w=0;w<s.gI(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:1833}
B.dNL.prototype={
$0(){return this.a.id=D.a_u},
$S:0}
B.dNM.prototype={
$0(){var w=this.b.a,v=C.U(w).k("a4<1>")
v=C.oK(new C.a4(w,new B.dNK(this.c),v),6,v.k("G.E"))
w=C.z(v,C.a2(v).k("G.E"))
return this.a.id=w},
$S:0}
B.dNK.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+79}
B.dNJ.prototype={
$1(d){var w=null,v=C.ch(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,A.al,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.q,w,A.z,w,w,w,w,A.aj)
return C.eo(C.a([C.bI(!1,A.pB,w,w,!0,w,w,new B.dNI(d),w,w)],x.p),w,w,D.rr,v,w,w,w,w,D.f1n,w)},
$S:20}
B.dNI.prototype={
$0(){C.a8(this.a,!1).M(null)
return null},
$S:0}
B.dO5.prototype={
$0(){return B.qj(this.b,this.a.d,"earth")},
$S:0}
B.dO6.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gUa()
r=p.z
o=C.a([C.aH(A.c5,C.b1(q,q,q,new B.bbN(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dNU(p),new B.dNV(p),new B.dNW(p),q,q,q,q,q,q,q,new B.dNX(p),q,q,q,!1,A.ae)],x.p)
if(p.r==null)o.push(A_.a7N)
w=this.b
if(w!=null)o.push(C.an(8,p.c0Y(w),q,q,10,10,q,q))
return new C.en(new C.am(A.W,q,A.aY,A.q,o,q),p.d)},
$S:199}
B.dNV.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:334}
B.dNW.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gUa()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:242}
B.dNU.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gUa()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:529}
B.dNX.prototype={
$1(d){var w=this.a,v=w.c10(d.b)
if(v!=null)w.n(new B.dNO(w,v))
else w.n(new B.dNP(w))},
$S:53}
B.dNO.prototype={
$0(){return this.a.atZ(this.b)},
$S:0}
B.dNP.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dO7.prototype={
$0(){var w=this.a
w.e.bI(0,A.c_)
w.n(new B.dNT(w,this.b))},
$S:0}
B.dNT.prototype={
$0(){var w=this.a
w.id=D.a_u
w.atZ(this.b)},
$S:0}
B.dOb.prototype={
$0(){var w=this.a
return w.n(new B.dO4(w))},
$S:0}
B.dO4.prototype={
$0(){var w=this.a
w.fx=null
w.aq9(15,w.y,1)},
$S:0}
B.dOc.prototype={
$0(){var w=this.a
return w.n(new B.dO3(w,this.b))},
$S:0}
B.dO3.prototype={
$0(){var w=this.b.b
return this.a.aq9(w.a,w.b,w.c)},
$S:0}
B.dOd.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.n(new B.dO2(w,v))},
$S:0}
B.dO2.prototype={
$0(){var w=this.b.a
return this.a.atZ(w[A.cB.aB(w.length)])},
$S:0}
B.dOe.prototype={
$1(d){var w=this.a
return w.n(new B.dO1(w,d))},
$S:6}
B.dO1.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
B.dOf.prototype={
$1(d){var w=this.a
return w.n(new B.dO0(w,d))},
$S:6}
B.dO0.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.dOg.prototype={
$1(d){var w=this.a
return w.n(new B.dO_(w,d))},
$S:6}
B.dO_.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.dOh.prototype={
$0(){var w=this.a
return w.n(new B.dNZ(w))},
$S:0}
B.dNZ.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.dOi.prototype={
$0(){var w=this.a
return w.n(new B.dNY(w))},
$S:0}
B.dNY.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
B.dO8.prototype={
$0(){var w=this.a
return w.n(new B.dNS(w))},
$S:0}
B.dNS.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
B.dO9.prototype={
$0(){var w=this.a
return w.n(new B.dNR(w))},
$S:0}
B.dNR.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
B.dOa.prototype={
$0(){var w=this.a
return w.n(new B.dNQ(w))},
$S:0}
B.dNQ.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
B.dNH.prototype={
$2(d,e){var w=null
return C.D(C.u(C.a([C.d(d,w,w,w,w,w,w,D.aJg,w,w,w),A.ve,C.d(e,w,2,A.a2,w,w,w,A.R9,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:129}
B.dNG.prototype={
$0(){var w=this.a
return w.n(new B.dNF(w))},
$S:0}
B.dNF.prototype={
$0(){return this.a.fx=null},
$S:0}
B.d5D.prototype={
$0(){var w=null,v=C.iS(w,w,w,w,C.dq(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.I,w,w,!0,w,w,w,w,w,D.cIy,w,w),this.a),A.a6,A.cn,w,A.eE,A.cm)
v.fq()
return v},
$S:328}
B.d5E.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.v(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1834}
B.f0I.prototype={
$0(){return D.dhm},
$S:z+80}
B.f0J.prototype={
$0(){return D.dFP},
$S:z+81}
B.f0K.prototype={
$0(){return D.dho},
$S:z+82}
B.f0L.prototype={
$0(){return D.dbK},
$S:z+83}
B.f0M.prototype={
$0(){return D.dhk},
$S:z+84}
B.f0N.prototype={
$0(){return D.dDW},
$S:z+85}
B.f0O.prototype={
$0(){return D.dDU},
$S:z+86}
B.eqt.prototype={
$0(){return C.a8(this.a,!1).o3()},
$S:0}
B.equ.prototype={
$0(){var w=this.a
return w.n(new B.eqs(w))},
$S:0}
B.eqs.prototype={
$0(){var w=this.a
return w.d=A.o.H(w.gaOb()+1,16)},
$S:0}
B.eqv.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.h8A(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.b3(18,18)
q=s.d
p=new C.ay(q.j(0.5),1,A.r,-1)
o=C.a([q.j(0.28),D.b7w],u)
k.push(C.aH(n,C.p(n,C.u(C.a([C.V(s.c,q,n,n,n,30),A.P,new C.x(s.a,n,D.eG3,n,A.L,n,n,n,n,2,n,n),A.d5,new C.x(s.b,n,D.eKY,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.b6,A.j,0,A.p),A.h,n,n,new C.o(n,n,new C.c2(p,p,p,p),new C.bv(r,r,r,r),n,new C.a7(A.ax,A.aC,A.w,o,n,n),A.n),n,v,n,n,A.ch,n,n,m),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eqr(d,s),n,n,n,n,n,n,!1,A.ae))}return C.c8(A.fF,k,A.bx,10,10)},
$S:168}
B.eqr.prototype={
$0(){return C.a8(this.a,!1).cr(C.eH(new B.eqq(this.b),!1,null,x.H))},
$S:0}
B.eqq.prototype={
$1(d){return this.a.e.$0()},
$S:43}
B.eiL.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
B.eiW.prototype={
$0(){return B.qj(this.b,this.a.d,"solar-system")},
$S:0}
B.eiX.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.ar(e.b,e.d)
u.ch=t
t=C.a([C.aH(A.c5,C.b1(v,v,v,new B.bo0(u,v),t),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.eiT(u),new B.eiU(u),v,v,v,v,v,v,v,new B.eiV(u),v,v,v,!1,A.ae)],x.p)
w=this.b
if(w!=null)t.push(C.an(8,u.c12(w),v,v,10,10,v,v))
return new C.en(new C.am(A.W,v,A.aY,A.q,t,v),u.d)},
$S:199}
B.eiT.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:334}
B.eiU.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ao(0,d.a)},
$S:242}
B.eiV.prototype={
$1(d){var w=this.a,v=w.c15(d.b)
if(v!=null)w.aVa(v)},
$S:53}
B.eiY.prototype={
$0(){var w=this.a
return w.n(new B.eiS(w))},
$S:0}
B.eiS.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
B.eiZ.prototype={
$0(){return this.a.aVa(this.b)},
$S:0}
B.ej_.prototype={
$1(d){var w=this.a
return w.n(new B.eiR(w,d))},
$S:6}
B.eiR.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.ej0.prototype={
$1(d){var w=this.a
return w.n(new B.eiQ(w,d))},
$S:6}
B.eiQ.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ej1.prototype={
$0(){var w=this.a
return w.n(new B.eiP(w))},
$S:0}
B.eiP.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
B.ej2.prototype={
$0(){var w=this.a
return w.n(new B.eiO(w))},
$S:0}
B.eiO.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.ej3.prototype={
$0(){var w=this.a
return w.n(new B.eiN(w))},
$S:0}
B.eiN.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.ej4.prototype={
$0(){var w=this.a
return w.n(new B.eiM(w))},
$S:0}
B.eiM.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.eiK.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.aa(d/365.25,w)+" Earth years"}else w=A.k.aa(d,0)+" Earth days"
return w},
$S:362}
B.eiJ.prototype={
$2(d,e){var w=null
return C.D(C.u(C.a([C.d(d,w,w,w,w,w,w,D.aJg,w,w,w),A.ve,C.d(e,w,2,A.a2,w,w,w,A.R9,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:129}
B.eiI.prototype={
$0(){var w=this.a
return w.n(new B.eiH(w))},
$S:0}
B.eiH.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
B.eKh.prototype={
$0(){var w=null,v=C.iS(w,w,w,w,C.dq(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.I,w,w,!0,w,w,w,w,w,E.NH,w,w),this.a),A.a6,A.cn,w,A.eE,A.cm)
v.fq()
return v},
$S:328}
B.eKi.prototype={
$1(d){return d.c>0},
$S:z+9}
B.eKj.prototype={
$1(d){return d.c>0},
$S:z+9}
B.dOo.prototype={
$0(){},
$S:0}
B.dOR.prototype={
$1(d){return d!=null},
$S:355}
B.dOD.prototype={
$0(){var w=this.a
return w.n(new B.dOu(w,this.b))},
$S:0}
B.dOu.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.dOE.prototype={
$0(){var w=this.a
return w.n(new B.dOt(w))},
$S:0}
B.dOt.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dOF.prototype={
$0(){var w=this.a
return w.n(new B.dOC(w))},
$S:0}
B.dOC.prototype={
$0(){return this.a.f=!0},
$S:0}
B.dOJ.prototype={
$0(){var w=this.a
return w.n(new B.dOB(w))},
$S:0}
B.dOB.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.dOK.prototype={
$1(d){var w=this.a
return w.n(new B.dOA(w,d))},
$S:6}
B.dOA.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dOL.prototype={
$0(){var w=this.a
return w.n(w.gcnr())},
$S:0}
B.dOM.prototype={
$1(d){var w=this.a
return w.n(new B.dOz(w,d))},
$S:6}
B.dOz.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.dON.prototype={
$1(d){var w=this.a
return w.n(new B.dOy(w,d))},
$S:6}
B.dOy.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dOO.prototype={
$1(d){var w=this.a
return w.n(new B.dOx(w,d))},
$S:6}
B.dOx.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.dOP.prototype={
$1(d){var w=this.a
return w.n(new B.dOw(w,d))},
$S:6}
B.dOw.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.dOQ.prototype={
$0(){var w=this.a
return w.n(new B.dOv(w))},
$S:0}
B.dOv.prototype={
$0(){return this.a.ay=4},
$S:0}
B.dOG.prototype={
$0(){var w=this.a
return w.n(new B.dOs(w))},
$S:0}
B.dOs.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.dOH.prototype={
$0(){var w=this.a
return w.n(new B.dOr(w))},
$S:0}
B.dOr.prototype={
$0(){return this.a.ay=9},
$S:0}
B.dOI.prototype={
$0(){var w=this.a
return w.n(new B.dOq(w))},
$S:0}
B.dOq.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.dOn.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bZ(0,C.bT(g,new C.o(D.b6g,g,g,C.m(20),g,g,A.n),A.ba),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.xC[q]
n=C.aY(o.d)
o=C.u(C.a([new C.x(o.a,g,new C.F(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.x(C.t(D.xC[q].b)+" m/s\xb2",g,D.eKj,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=C.p(g,g,A.h,A.dv,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.V(Q.Xf,C.aY(D.xC[q].d),g,g,g,22):C.p(g,g,A.h,g,g,new C.o(C.aY(D.xC[q].d),g,g,g,C.a([new C.aa(0,A.G,C.aY(D.xC[q].d).j(0.6),A.J,10)],u),g,A.a5),g,22,g,g,g,g,g,22)
j=C.p(g,g,A.h,C.aY(D.xC[q].d).j(0.6),g,g,g,3,g,A.fp,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.aa(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,C.a([new C.cF(p,8,g,g,f,g,o,g),new C.cF(n-0.5,54,g,e,g,g,m,g),new C.cF(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cF(p,g,g,8,f,g,C.u(C.a([j,A.av,new C.x(i,g,A.yp,g,g,g,g,g,g,g,g,g),new C.x(h,g,D.eCV,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.e9(v,new B.dOm()))a1.push(D.aX7)
return new C.am(A.W,g,A.a9,A.q,a1,g)},
$S:61}
B.dOm.prototype={
$1(d){return d==null},
$S:355}
B.dOp.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.m(8)
p=C.p(v,v,A.h,v,v,new C.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.di(v,v,v,v,A.b8,new C.o(v,v,v,C.m(8),v,new C.a7(A.a3,A.a7,A.w,C.a([C.aY(t).j(0.9),C.aY(t).j(0.4)],x.O),v,v),A.n),A.i1,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.aa(r,1):B.Fk(r)
u=u.ax*9.81/s
u=u<10?A.k.aa(u,2):A.k.aa(u,0)
return new C.am(A.W,v,A.a9,A.q,C.a([p,t,C.an(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.eII,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:61}
B.dOl.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b1(v,v,v,new B.b72(new C.v(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.at)
o=A.x.j(0.55)
p=C.m(14)
q=C.H(A.bG,A.r,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.bl
else u=A.a.t(u,"escapes")?A.b_:A.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.aa(Math.sqrt(58.86870477034412),1)
s=A.k.aa(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+B.Fk(A.k.D(r.cx.gcj()-6371,0,9e9))+" km":""
w=x.p
return new C.am(A.W,v,A.aY,A.q,C.a([n,C.an(v,C.p(v,C.u(C.a([u,A.bA,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,F.aKR,v,v,v)],w),A.F,v,A.e,A.R,0,A.p),A.h,v,v,new C.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bR,v,v,v),v,v,12,12,8,v)],w),v)},
$S:61}
B.ebF.prototype={
$0(){return B.qj(this.b,this.a.d,"size-compare")},
$S:0}
B.ebG.prototype={
$0(){var w=this.a
return w.n(new B.ebE(w,this.b))},
$S:0}
B.ebE.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.ebH.prototype={
$0(){var w=this.a
return w.n(new B.ebD(w,this.b))},
$S:0}
B.ebD.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eIr.prototype={
$3(d,e,f){var w,v,u=this.a
$.a_()
w=C.N()
w.r=f.j(0.2).gq(0)
w.z=new C.hH(A.G,Math.max(2,e*0.18))
u.ak(d,e*1.12,w)
w=C.N()
v=C.aq(f,A.x,0.6)
v.toString
w.sar(new C.bR(N.pK,0.5,A.w,null,0,C.a([A.c,f,v],x.O),F.ZK,null).az(0,C.bV(d,e)))
u.ak(d,e,w)},
$S:711}
B.dwX.prototype={
$1(d){return d.e<=0},
$S:z+88}
B.dwL.prototype={
$1(d){return d.b},
$S:z+59}
B.dwM.prototype={
$0(){return B.qj(this.b,this.a.d,"black-hole")},
$S:0}
B.dwN.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.Q=o
o=C.aH(A.c5,C.b1(q,q,q,new B.b6r(p,q),o),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dwJ(p),q,q,q,q,q,q,q,q,q,new B.dwK(p),q,q,q,q,!1,A.ae)
w=A.x.j(0.55)
v=C.m(14)
u=C.H(A.bG,A.r,1)
t=p.r
if(t<1000)t=A.k.aa(t,t<10?1:0)+" Suns"
else t=B.fbx(t)+" Suns"
t=p.abV("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.an(q,C.p(q,C.B(C.a([t,p.abV("EDGE WIDTH",(s<100?A.k.aa(s,1):B.Fk(s))+" km"),p.abV("TIME",A.k.aa(this.b*100,0)+"%"),p.abV("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.h,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bR,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.dTs)
return new C.en(new C.am(A.W,q,A.aY,A.q,r,q),p.d)},
$S:199}
B.dwK.prototype={
$1(d){return this.a.aVb(d.b)},
$S:23}
B.dwJ.prototype={
$1(d){if(A.cB.ae()<0.12)this.a.aVb(d.b)},
$S:18}
B.dwP.prototype={
$1(d){var w=this.a
return w.n(new B.dwI(w,d))},
$S:6}
B.dwI.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dwQ.prototype={
$0(){var w=this.a
return w.n(new B.dwH(w))},
$S:0}
B.dwH.prototype={
$0(){return this.a.r=10},
$S:0}
B.dwR.prototype={
$0(){var w=this.a
return w.n(new B.dwG(w))},
$S:0}
B.dwG.prototype={
$0(){return this.a.r=21},
$S:0}
B.dwS.prototype={
$0(){var w=this.a
return w.n(new B.dwF(w))},
$S:0}
B.dwF.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dwT.prototype={
$0(){var w=this.a
return w.n(new B.dwE(w))},
$S:0}
B.dwE.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dwU.prototype={
$0(){var w=this.a
return w.n(new B.dwD(w))},
$S:0}
B.dwD.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dwV.prototype={
$0(){var w=this.a
return w.n(new B.dwC(w))},
$S:0}
B.dwC.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dwW.prototype={
$0(){var w=this.a
return w.n(new B.dwB(w))},
$S:0}
B.dwB.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dwO.prototype={
$0(){var w=this.a
return w.n(new B.dwA(w))},
$S:0}
B.dwA.prototype={
$0(){var w=this.a
A.d.a7(w.z)
w.as=0},
$S:0}
B.dMW.prototype={
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
$S:1835}
B.dMM.prototype={
$0(){return B.qj(this.b,this.a.d,"galaxy")},
$S:0}
B.dMN.prototype={
$0(){var w=this.a
return w.n(new B.dML(w,this.b))},
$S:0}
B.dML.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.XZ()},
$S:0}
B.dMO.prototype={
$0(){var w=this.a
return w.n(new B.dMK(w))},
$S:0}
B.dMK.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.XZ()}w.cnj()},
$S:0}
B.dMP.prototype={
$1(d){var w=this.a
return w.n(new B.dMJ(w,d))},
$S:6}
B.dMJ.prototype={
$0(){var w=this.a
w.f=A.k.U(this.b)
w.XZ()},
$S:0}
B.dMQ.prototype={
$1(d){var w=this.a
return w.n(new B.dMI(w,d))},
$S:6}
B.dMI.prototype={
$0(){var w=this.a
w.r=this.b
w.XZ()},
$S:0}
B.dMR.prototype={
$1(d){var w=this.a
return w.n(new B.dMH(w,d))},
$S:6}
B.dMH.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dMS.prototype={
$1(d){var w=this.a
return w.n(new B.dMG(w,d))},
$S:6}
B.dMG.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dMT.prototype={
$0(){var w=this.a
return w.n(new B.dMF(w))},
$S:0}
B.dMF.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dMU.prototype={
$0(){var w=this.a
return w.n(new B.dME(w))},
$S:0}
B.dME.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.dMV.prototype={
$0(){var w=this.a
return w.n(new B.dMD(w))},
$S:0}
B.dMD.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.d2M.prototype={
$6(d,e,f,g,h,i){return g.ao(0,new C.v((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1836}
B.ebl.prototype={
$0(){return B.qj(this.b,this.a.d,"seasons-moon")},
$S:0}
B.ebm.prototype={
$0(){var w=this.a
return w.n(new B.ebk(w))},
$S:0}
B.ebk.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.ebn.prototype={
$0(){var w=this.a
return w.n(new B.ebj(w))},
$S:0}
B.ebj.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.ebo.prototype={
$0(){var w=this.a
return w.n(new B.ebi(w))},
$S:0}
B.ebi.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.ebp.prototype={
$0(){var w=this.a
return w.n(new B.ebh(w))},
$S:0}
B.ebh.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.ebq.prototype={
$1(d){var w=this.a
return w.n(new B.ebg(w,d))},
$S:6}
B.ebg.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.ebr.prototype={
$1(d){var w=this.a
return w.n(new B.ebf(w,d))},
$S:6}
B.ebf.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.ebs.prototype={
$1(d){var w=this.a
return w.n(new B.ebe(w,d))},
$S:6}
B.ebe.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ebt.prototype={
$1(d){var w=this.a
return w.n(new B.ebd(w,d))},
$S:6}
B.ebd.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=B.aJ5.prototype
w.bq5=w.p
w=B.aI8.prototype
w.bp6=w.p
w=B.aI9.prototype
w.bp7=w.p
w=B.aIe.prototype
w.bpc=w.p
w=B.aJU.prototype
w.br_=w.p
w=B.aJ3.prototype
w.bq3=w.p
w=B.aJc.prototype
w.bqc=w.p
w=B.aJi.prototype
w.bqi=w.p
w=B.aIc.prototype
w.bpa=w.p
w=B.aJ0.prototype
w.bq0=w.p
w=B.aJf.prototype
w.bqf=w.p
w=B.aIZ.prototype
w.bpZ=w.p
w=B.aJ_.prototype
w.bq_=w.p
w=B.aIp.prototype
w.bpo=w.p
w=B.aI4.prototype
w.bp2=w.p
w=B.aIx.prototype
w.bpw=w.p
w=B.auO.prototype
w.bmf=w.p
w=B.auP.prototype
w.bmg=w.p
w=B.aJj.prototype
w.bqj=w.p
w=B.aIO.prototype
w.bpO=w.p
w=B.aIP.prototype
w.bpP=w.p
w=B.aIa.prototype
w.bp8=w.p
w=B.aIs.prototype
w.bpr=w.p
w=B.aIX.prototype
w.bpX=w.p
w=B.aJq.prototype
w.bqq=w.p
w=B.aIy.prototype
w.bpy=w.p
w=B.aIz.prototype
w.bpz=w.p
w=B.aIA.prototype
w.bpA=w.p
w=B.aJ8.prototype
w.bq8=w.p
w=B.aJb.prototype
w.bqb=w.p
w=B.aI7.prototype
w.bp5=w.p
w=B.aIv.prototype
w.bpu=w.p
w=B.aJ7.prototype
w.bq7=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(B.aBl.prototype,"gat3","bY_",0)
var r
v(r=B.azN.prototype,"gc4s","c4t",36)
w(r,"gbYv","aTT",0)
w(B.azQ.prototype,"gbZr","bZs",0)
u(B.aA6.prototype,"gbZx","bZy",53)
w(r=B.aEh.prototype,"gcn1","cn2",0)
w(r,"gcaZ","adk",0)
w(r,"gc8H","c8I",0)
w(r,"gbZw","ab0",4)
w(r=B.aBk.prototype,"gbAm","a6K",4)
w(r,"gc7Z","aWP",0)
w(r,"gcbD","ads",4)
t(r,"gbZA","ab1",4)
w(B.aBy.prototype,"gbR9","bRa",0)
w(r=B.aBd.prototype,"gcmW","cmX",0)
w(r,"gbAH","bAI",0)
w(r=B.azP.prototype,"gb_T","awo",0)
v(r,"gbZG","Xo",55)
w(r,"gbZF","ab3",4)
v(r=B.aBc.prototype,"gcdx","av7",89)
v(r,"gcjB","awk",15)
w(r,"gbED","aMO",0)
v(r=B.aBa.prototype,"gctS","ags",15)
t(r,"gc__","atu",0)
w(r,"gcfL","cfM",0)
v(r=B.aAi.prototype,"gc_0","c_1",61)
w(r,"gc_2","c_3",0)
t(r=B.a2i.prototype,"gqN","a7",0)
v(r,"gcFG","aju",1)
w(r,"gcL8","bct",0)
s(B.agb.prototype,"gc_7",0,5,null,["$5"],["pA"],65,0,0)
w(r=B.aAj.prototype,"gc_8","c_9",0)
w(r,"gcei","adO",4)
w(B.aBz.prototype,"gaUs","c_b",0)
w(r=B.aAX.prototype,"gc_m","aty",0)
w(r,"gc_n","aUu",0)
w(r=B.aBL.prototype,"gc0h","c0i",0)
t(r,"gc0f","aUO",0)
w(B.aB6.prototype,"gbDc","ap_",0)
t(B.aBp.prototype,"gc0j","c0k",0)
v(r=B.aAu.prototype,"gc0Z","c1_",77)
w(r,"gbHW","bHX",0)
w(r=B.aAv.prototype,"gcnr","cns",0)
w(r,"gc13","c14",0)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(C.aB,[B.aho,B.EE,B.ua,B.aOS,B.a11,B.b6u,B.bWm,B.xd,B.B8,B.mY,B.b7c,B.zr,B.boH,B.py,B.qc,B.Bc,B.Xe,B.acn,B.Zs,B.Bm,B.a9l,B.a9C,B.abw,B.Er,B.bhL,B.O9,B.YL,B.a9s,B.a9V,B.En,B.aaJ,B.abd,B.rB,B.b64,B.aOI,B.fF,B.vj,B.a83,B.a97,B.a2i,B.nm,B.b7d,B.jB,B.Hh,B.aT8,B.bq0,B.aF6,B.mc,B.a8O,B.a8P,B.un,B.Nq,B.xb,B.Np,B.bpW,B.NT,B.acs])
v(C.i3,[B.fdy,B.f5l,B.faW,B.faX,B.fdv,B.fdw,B.dVE,B.dVX,B.eaj,B.e9R,B.e9S,B.e9T,B.e9U,B.e9V,B.e9W,B.e9X,B.e9Y,B.e9P,B.e9Q,B.e9O,B.eae,B.eaf,B.eag,B.dx1,B.dx3,B.dx6,B.dxh,B.bWn,B.bWo,B.f_X,B.f_Y,B.f_Z,B.f03,B.f04,B.f05,B.dzz,B.dzg,B.dzA,B.dzb,B.dz6,B.dz8,B.dze,B.dzr,B.dzp,B.dzq,B.dzo,B.dzl,B.dzn,B.eHW,B.eHD,B.eHK,B.eHT,B.eHx,B.d9k,B.d9l,B.d9h,B.d9i,B.d9j,B.d9m,B.d9n,B.d9o,B.d9p,B.d9q,B.d9r,B.d9s,B.d9t,B.d9u,B.e9f,B.e9g,B.e9h,B.e9i,B.e9d,B.e9e,B.e9K,B.e9m,B.e9o,B.e98,B.e9G,B.e9E,B.e9F,B.e9D,B.e9C,B.e9a,B.ejv,B.ejt,B.ejh,B.ejl,B.ejg,B.ejm,B.ejn,B.ejr,B.eq6,B.eqc,B.e6k,B.e6l,B.e66,B.e67,B.e65,B.e6a,B.e6c,B.e6d,B.epw,B.epx,B.epv,B.epj,B.epk,B.epi,B.epb,B.epc,B.epq,B.epr,B.eps,B.ept,B.epu,B.dyI,B.dyJ,B.dyK,B.dyB,B.dyE,B.cFm,B.e1O,B.e2c,B.e1S,B.e2_,B.e20,B.e1Z,B.e27,B.e5O,B.e5T,B.e5c,B.e4V,B.e56,B.e54,B.e52,B.e53,B.e51,B.dGC,B.dGq,B.dGs,B.dGA,B.dGv,B.dJr,B.dJj,B.dJk,B.dJl,B.cYR,B.cYT,B.cYS,B.dv5,B.dv6,B.duZ,B.duX,B.cxU,B.dNj,B.dNk,B.dNf,B.dNg,B.d4P,B.d4Q,B.dz4,B.dyN,B.dyW,B.dyX,B.dz1,B.dz2,B.bHB,B.bHM,B.bHH,B.bHN,B.bHC,B.bHA,B.bHS,B.bHI,B.bHL,B.bHK,B.bHJ,B.bD2,B.fpe,B.fph,B.fpf,B.bCL,B.bD1,B.bCU,B.bCV,B.bCT,B.bCW,B.bCE,B.bCG,B.bCB,B.bCC,B.bCD,B.f06,B.f07,B.f08,B.f_W,B.f09,B.f_V,B.f0a,B.f0_,B.f_U,B.f00,B.f_T,B.f01,B.f_S,B.f02,B.f_R,B.dJx,B.dJy,B.dJw,B.f8Q,B.fwP,B.fwQ,B.dYC,B.dYu,B.d9D,B.d9G,B.dYV,B.dYG,B.dYQ,B.dYR,B.dYS,B.cae,B.euh,B.dJ4,B.dJ5,B.dJ6,B.dJ8,B.e36,B.epP,B.epY,B.epU,B.epW,B.e1F,B.e1G,B.e1H,B.fxf,B.cml,B.dOk,B.dNK,B.dNJ,B.dNV,B.dNW,B.dNU,B.dNX,B.dOe,B.dOf,B.dOg,B.eqq,B.eiT,B.eiU,B.eiV,B.ej_,B.ej0,B.eiK,B.eKi,B.eKj,B.dOR,B.dOK,B.dOM,B.dON,B.dOO,B.dOP,B.dOm,B.eIr,B.dwX,B.dwL,B.dwK,B.dwJ,B.dwP,B.dMW,B.dMP,B.dMQ,B.dMR,B.dMS,B.d2M,B.ebq,B.ebr,B.ebs,B.ebt])
v(C.kz,[B.fdx,B.dVJ,B.dVH,B.ea_,B.eac,B.dz7,B.dzu,B.dEO,B.eHZ,B.eI_,B.eHC,B.eHP,B.eHQ,B.eHL,B.eHR,B.eHw,B.e9b,B.e9c,B.e9J,B.e9B,B.e9q,B.eq5,B.e69,B.epm,B.dyA,B.dyF,B.e23,B.e5S,B.fdP,B.e4Z,B.e4W,B.e58,B.dhn,B.bC5,B.f9G,B.duT,B.dv0,B.bHO,B.bHQ,B.bHD,B.bHF,B.bD3,B.cfr,B.fpg,B.bD_,B.bCZ,B.eqh,B.dYw,B.d9E,B.d9F,B.dYP,B.cah,B.dxv,B.dxq,B.e38,B.cab,B.dO6,B.dNH,B.d5E,B.eqv,B.eiX,B.eiJ,B.dOn,B.dOp,B.dOl,B.dwN])
v(C.af,[B.Tw,B.TX,B.Sp,B.Su,B.LD,B.aEg,B.TW,B.Ua,B.Um,B.TU,B.Uh,B.Ss,B.TO,B.TT,B.TR,B.SP,B.T4,B.Sk,B.Ti,B.St,B.ag9,B.T5,B.Un,B.TB,B.TD,B.Us,B.Tc,B.Sq,B.T3,B.TP,B.U0,B.Ul,B.TN,B.Tj,B.Uo,B.U9,B.Tk,B.U1,B.So,B.Tg,B.TY])
v(C.ag,[B.bgf,B.aJ5,B.aI8,B.aIe,B.aA6,B.aJU,B.aJ3,B.aJc,B.aJi,B.aJ0,B.aJf,B.aIc,B.aIZ,B.aJ_,B.aBa,B.bfK,B.aIp,B.aI4,B.aIx,B.bfE,B.auO,B.aAj,B.aJj,B.aIO,B.aIP,B.aJq,B.aIs,B.aIa,B.bfL,B.aB6,B.aBp,B.bgZ,B.aIX,B.aIy,B.bh1,B.aJb,B.aIA,B.aJ8,B.aI7,B.aIv,B.aJ7])
v(C.jk,[B.dVC,B.dVD,B.dVP,B.dVQ,B.dVL,B.dVK,B.dVM,B.dVI,B.dVN,B.dVG,B.dVO,B.dVF,B.dVT,B.dVS,B.dVU,B.dVR,B.dVV,B.dVW,B.dVY,B.eai,B.eak,B.eal,B.ea1,B.ea0,B.e9Z,B.ea7,B.ea8,B.ea4,B.ea9,B.ea3,B.eaa,B.eab,B.ea2,B.ead,B.ea6,B.eah,B.ea5,B.dxo,B.dxn,B.dx0,B.dxp,B.dx2,B.dx4,B.dx5,B.dx7,B.dwY,B.dwZ,B.dx_,B.dxe,B.dxf,B.dxg,B.dxd,B.dxi,B.dxc,B.dxj,B.dxb,B.dxk,B.dxa,B.dxl,B.dx9,B.dxm,B.dx8,B.dzd,B.dzc,B.dzh,B.dz9,B.dza,B.dzi,B.dzj,B.dzk,B.dzf,B.dz5,B.dzt,B.dzs,B.dzv,B.dzw,B.dzx,B.dzm,B.dzy,B.cFP,B.dEM,B.dEL,B.dEN,B.f0l,B.f0m,B.f0n,B.f0y,B.f0B,B.f0C,B.f0D,B.f0E,B.f0F,B.f0G,B.f0H,B.f0o,B.f0p,B.f0q,B.f0r,B.f0s,B.f0t,B.f0u,B.f0v,B.f0w,B.f0x,B.f0z,B.f0A,B.eHY,B.eHX,B.eHF,B.eHE,B.eHA,B.eHz,B.eHB,B.eHy,B.eHN,B.eHM,B.eHO,B.eHG,B.eHS,B.eHJ,B.eHU,B.eHI,B.eHV,B.eHH,B.e9k,B.e99,B.e9j,B.e95,B.e9l,B.e9n,B.e96,B.e97,B.e9I,B.e9H,B.e9y,B.e9z,B.e9A,B.e9u,B.e9v,B.e9t,B.e9w,B.e9s,B.e9x,B.e9r,B.e9p,B.d9g,B.eju,B.ej6,B.ej5,B.ejf,B.ejo,B.eje,B.ejp,B.ejd,B.ejq,B.ejc,B.ejb,B.ejs,B.eja,B.eji,B.ej9,B.ejj,B.ej8,B.ejk,B.ej7,B.eq4,B.eq3,B.eq7,B.eq2,B.eq8,B.eq1,B.eq9,B.eq0,B.eqa,B.eq_,B.eqb,B.epZ,B.e68,B.e64,B.e63,B.e62,B.e6e,B.e61,B.e6f,B.e60,B.e6g,B.e6_,B.e6h,B.e6i,B.e6j,B.e5Z,B.e6b,B.epl,B.epa,B.epn,B.eph,B.epo,B.epg,B.epp,B.epf,B.epe,B.epd,B.ep9,B.ep8,B.ep7,B.dyH,B.dyy,B.dyz,B.dyC,B.dyD,B.dyG,B.e21,B.e1T,B.e22,B.e24,B.e1Y,B.e25,B.e1X,B.e26,B.e1W,B.e1V,B.e28,B.e1U,B.e29,B.e1R,B.e2a,B.e1Q,B.e2b,B.e1P,B.e5I,B.e5J,B.e5Q,B.e5P,B.e5R,B.e5N,B.e5U,B.e5M,B.e5V,B.e5L,B.e5W,B.e5X,B.e5K,B.e5Y,B.e5b,B.e4T,B.e4U,B.e4Y,B.e4X,B.e57,B.e55,B.e5_,B.e59,B.e50,B.e5a,B.dGB,B.dGr,B.dGp,B.dGw,B.dGu,B.dGx,B.dGt,B.dGy,B.dGz,B.dJq,B.dJe,B.dJd,B.dJf,B.dJi,B.dJh,B.dJg,B.dJm,B.dJn,B.dJo,B.dJp,B.dv4,B.dv3,B.duU,B.dv_,B.duY,B.dv1,B.duW,B.dv2,B.duV,B.dNi,B.dNh,B.dN9,B.dNd,B.dNc,B.dNe,B.dNb,B.dNa,B.dz3,B.dyV,B.dyU,B.dyY,B.dyT,B.dyZ,B.dyS,B.dz_,B.dyR,B.dz0,B.dyQ,B.dyP,B.dyO,B.bHP,B.bHR,B.bHE,B.bHG,B.bCI,B.bCJ,B.bCH,B.bCK,B.bD0,B.bCp,B.bCR,B.bCS,B.bCP,B.bCQ,B.bCN,B.bCO,B.bCX,B.bCM,B.bCY,B.bCq,B.bCF,B.bCv,B.bCw,B.bCu,B.bCx,B.bCt,B.bCy,B.bCz,B.bCs,B.bCA,B.bCr,B.dJz,B.dJA,B.dJv,B.dJu,B.dJC,B.dJD,B.dJE,B.dJF,B.dJG,B.dJB,B.eqf,B.eqe,B.eqd,B.eqk,B.eqg,B.eqi,B.eqj,B.dYB,B.dYD,B.dYs,B.dYt,B.dYv,B.dYx,B.dYy,B.dYz,B.dYA,B.dYU,B.dYW,B.dYM,B.dYI,B.dYN,B.dYO,B.dYH,B.dYL,B.dYK,B.dYJ,B.dYT,B.f0P,B.f0Q,B.f0R,B.f0S,B.f0T,B.f0U,B.f0V,B.f0W,B.cag,B.caf,B.eui,B.eue,B.eud,B.eug,B.euf,B.dLC,B.dLD,B.dLx,B.dLz,B.dLA,B.dLy,B.dLB,B.dxw,B.dxt,B.dxs,B.dxu,B.dxr,B.dJ3,B.dJ2,B.dJ1,B.dJ0,B.dJ7,B.dJ_,B.dIZ,B.dJ9,B.dIY,B.dJa,B.dIX,B.dJb,B.dJc,B.dIW,B.e32,B.e33,B.e31,B.e34,B.e30,B.e37,B.e39,B.e35,B.e3a,B.ebx,B.eby,B.ebv,B.ebw,B.ebu,B.ebz,B.ebA,B.ebB,B.ebC,B.epT,B.epV,B.epS,B.epR,B.epX,B.epQ,B.e1I,B.e1J,B.e1B,B.e1A,B.e1C,B.e1z,B.e1D,B.e1y,B.e1E,B.e1x,B.e1w,B.e1v,B.e1u,B.cmm,B.cmn,B.fxe,B.cmi,B.cmh,B.cmo,B.cmj,B.cmk,B.cad,B.cac,B.dOj,B.dNN,B.dNL,B.dNM,B.dNI,B.dO5,B.dNO,B.dNP,B.dO7,B.dNT,B.dOb,B.dO4,B.dOc,B.dO3,B.dOd,B.dO2,B.dO1,B.dO0,B.dO_,B.dOh,B.dNZ,B.dOi,B.dNY,B.dO8,B.dNS,B.dO9,B.dNR,B.dOa,B.dNQ,B.dNG,B.dNF,B.d5D,B.f0I,B.f0J,B.f0K,B.f0L,B.f0M,B.f0N,B.f0O,B.eqt,B.equ,B.eqs,B.eqr,B.eiL,B.eiW,B.eiY,B.eiS,B.eiZ,B.eiR,B.eiQ,B.ej1,B.eiP,B.ej2,B.eiO,B.ej3,B.eiN,B.ej4,B.eiM,B.eiI,B.eiH,B.eKh,B.dOo,B.dOD,B.dOu,B.dOE,B.dOt,B.dOF,B.dOC,B.dOJ,B.dOB,B.dOA,B.dOL,B.dOz,B.dOy,B.dOx,B.dOw,B.dOQ,B.dOv,B.dOG,B.dOs,B.dOH,B.dOr,B.dOI,B.dOq,B.ebF,B.ebG,B.ebE,B.ebH,B.ebD,B.dwM,B.dwI,B.dwQ,B.dwH,B.dwR,B.dwG,B.dwS,B.dwF,B.dwT,B.dwE,B.dwU,B.dwD,B.dwV,B.dwC,B.dwW,B.dwB,B.dwO,B.dwA,B.dMM,B.dMN,B.dML,B.dMO,B.dMK,B.dMJ,B.dMI,B.dMH,B.dMG,B.dMT,B.dMF,B.dMU,B.dME,B.dMV,B.dMD,B.ebl,B.ebm,B.ebk,B.ebn,B.ebj,B.ebo,B.ebi,B.ebp,B.ebh,B.ebg,B.ebf,B.ebe,B.ebd])
u(B.btj,B.aJ5)
u(B.aBl,B.btj)
v(C.n6,[B.bdi,B.b7u,B.bo7,B.b6b,B.bmO,B.bmg,B.b6R,B.bmi,B.bqa,B.bdg,B.bo2,B.bhy,B.boT,B.b7b,B.bea,B.bhz,B.beR,B.bad,B.b6g,B.bbG,B.agb,B.bqC,B.bdl,B.bdA,B.brm,B.bmh,B.bhM,B.bbN,B.bo0,B.b72,B.bnz,B.b6r,B.bbD,B.bmR])
u(B.aI9,B.aI8)
u(B.azN,B.aI9)
u(B.bt3,B.aIe)
u(B.azQ,B.bt3)
v(C.md,[B.IM,B.Zf])
v(C.as,[B.bn9,B.acx,B.abs,B.Oi,B.bnD,B.a68,B.b9z,B.b3g,B.dy,B.eE,B.asX,B.fe,B.DW])
u(B.aEh,B.aJU)
u(B.bdf,C.p2)
u(B.aBk,B.aJ3)
u(B.bgQ,B.aJc)
u(B.aBy,B.aJi)
u(B.bti,B.aJ0)
u(B.aBd,B.bti)
u(B.btq,B.aJf)
u(B.bgV,B.btq)
u(B.bt2,B.aIc)
u(B.azP,B.bt2)
u(B.btg,B.aIZ)
u(B.bgu,B.btg)
u(B.bth,B.aJ_)
u(B.aBc,B.bth)
u(B.aAi,B.aIp)
u(B.bfr,B.aI4)
u(B.bfW,B.aIx)
u(B.auP,B.auO)
u(B.aga,B.auP)
u(B.aBz,B.aJj)
u(B.bt9,B.aIO)
u(B.bgh,B.bt9)
u(B.bta,B.aIP)
u(B.aAX,B.bta)
u(B.btr,B.aJq)
u(B.aBL,B.btr)
u(B.bt5,B.aIs)
u(B.bfR,B.bt5)
u(B.bt1,B.aIa)
u(B.bfw,B.bt1)
u(B.btf,B.aIX)
u(B.bgs,B.btf)
u(B.aIz,B.aIy)
u(B.aAu,B.aIz)
u(B.btn,B.aJb)
u(B.bgP,B.btn)
u(B.bt7,B.aIA)
u(B.aAv,B.bt7)
u(B.btl,B.aJ8)
u(B.bgM,B.btl)
u(B.bt0,B.aI7)
u(B.bfv,B.bt0)
u(B.bt6,B.aIv)
u(B.bfU,B.bt6)
u(B.btk,B.aJ7)
u(B.bgL,B.btk)
w(B.aJ5,C.c7)
w(B.btj,B.mc)
w(B.aI8,C.c7)
w(B.aI9,B.mc)
w(B.aIe,C.c7)
w(B.bt3,B.mc)
w(B.aJU,C.eJ)
w(B.aJ3,C.c7)
w(B.aJc,C.c7)
w(B.aJi,C.c7)
w(B.aIc,C.c7)
w(B.bt2,B.mc)
w(B.aJ0,C.c7)
w(B.bti,B.mc)
w(B.aJf,C.c7)
w(B.btq,B.mc)
w(B.aIZ,C.c7)
w(B.btg,B.mc)
w(B.aJ_,C.c7)
w(B.bth,B.mc)
w(B.aIp,C.c7)
w(B.aI4,C.c7)
w(B.aIx,C.c7)
w(B.auO,C.c7)
w(B.auP,B.mc)
w(B.aJj,C.c7)
w(B.aIO,C.c7)
w(B.bt9,B.mc)
w(B.aIP,C.c7)
w(B.bta,B.mc)
w(B.aIa,C.c7)
w(B.bt1,B.mc)
w(B.aIs,C.c7)
w(B.bt5,B.mc)
w(B.aIX,C.c7)
w(B.btf,B.mc)
w(B.aJq,C.c7)
w(B.btr,B.mc)
w(B.aIy,C.c7)
w(B.aIz,B.mc)
w(B.aIA,C.c7)
w(B.bt7,B.mc)
w(B.aJ8,C.c7)
w(B.btl,B.mc)
w(B.aJb,C.c7)
w(B.btn,B.mc)
w(B.aI7,C.c7)
w(B.bt0,B.mc)
w(B.aIv,C.c7)
w(B.bt6,B.mc)
w(B.aJ7,C.c7)
w(B.btk,B.mc)})()
C.kf(b.typeUniverse,JSON.parse('{"Tw":{"af":[],"r":[]},"bgf":{"ag":["Tw"]},"TX":{"af":[],"r":[]},"aBl":{"ag":["TX"]},"bdi":{"aA":[]},"Sp":{"af":[],"r":[]},"azN":{"ag":["Sp"]},"Su":{"af":[],"r":[]},"azQ":{"ag":["Su"]},"b7u":{"aA":[]},"acx":{"as":[],"r":[]},"abs":{"as":[],"r":[]},"aEg":{"af":[],"r":[]},"LD":{"af":[],"r":[]},"aA6":{"ag":["LD"]},"bn9":{"as":[],"r":[]},"Oi":{"as":[],"r":[]},"bo7":{"aA":[]},"bnD":{"as":[],"r":[]},"b6b":{"aA":[]},"aEh":{"ag":["aEg"]},"bmO":{"aA":[]},"bmg":{"aA":[]},"b6R":{"aA":[]},"bmi":{"aA":[]},"bqa":{"aA":[]},"TW":{"af":[],"r":[]},"bdf":{"aA":[]},"aBk":{"ag":["TW"]},"bdg":{"aA":[]},"Ua":{"af":[],"r":[]},"Um":{"af":[],"r":[]},"bgQ":{"ag":["Ua"]},"bo2":{"aA":[]},"aBy":{"ag":["Um"]},"TU":{"af":[],"r":[]},"Uh":{"af":[],"r":[]},"Ss":{"af":[],"r":[]},"aBd":{"ag":["TU"]},"bhy":{"aA":[]},"bgV":{"ag":["Uh"]},"boT":{"aA":[]},"azP":{"ag":["Ss"]},"b7b":{"aA":[]},"TO":{"af":[],"r":[]},"TT":{"af":[],"r":[]},"bgu":{"ag":["TO"]},"bea":{"aA":[]},"aBc":{"ag":["TT"]},"bhz":{"aA":[]},"TR":{"af":[],"r":[]},"SP":{"af":[],"r":[]},"T4":{"af":[],"r":[]},"aBa":{"ag":["TR"]},"beR":{"aA":[]},"bfK":{"ag":["SP"]},"aAi":{"ag":["T4"]},"bad":{"aA":[]},"Sk":{"af":[],"r":[]},"Ti":{"af":[],"r":[]},"St":{"af":[],"r":[]},"bfr":{"ag":["Sk"]},"b6g":{"aA":[]},"bfW":{"ag":["Ti"]},"bbG":{"aA":[]},"bfE":{"ag":["St"]},"agb":{"aA":[]},"ag9":{"af":[],"r":[]},"aga":{"ag":["ag9"]},"T5":{"af":[],"r":[]},"aAj":{"ag":["T5"]},"Un":{"af":[],"r":[]},"aBz":{"ag":["Un"]},"bqC":{"aA":[]},"TB":{"af":[],"r":[]},"TD":{"af":[],"r":[]},"bgh":{"ag":["TB"]},"bdl":{"aA":[]},"aAX":{"ag":["TD"]},"bdA":{"aA":[]},"a68":{"as":[],"r":[]},"Us":{"af":[],"r":[]},"Tc":{"af":[],"r":[]},"Sq":{"af":[],"r":[]},"T3":{"af":[],"r":[]},"TP":{"af":[],"r":[]},"U0":{"af":[],"r":[]},"Ul":{"af":[],"r":[]},"TN":{"af":[],"r":[]},"aBL":{"ag":["Us"]},"brm":{"aA":[]},"bfR":{"ag":["Tc"]},"bmh":{"aA":[]},"bfw":{"ag":["Sq"]},"bfL":{"ag":["T3"]},"bhM":{"aA":[]},"aB6":{"ag":["TP"]},"aBp":{"ag":["U0"]},"bgZ":{"ag":["Ul"]},"bgs":{"ag":["TN"]},"b9z":{"as":[],"r":[]},"b3g":{"as":[],"r":[]},"dy":{"as":[],"r":[]},"eE":{"as":[],"r":[]},"asX":{"as":[],"r":[]},"fe":{"as":[],"r":[]},"DW":{"as":[],"r":[]},"Tj":{"af":[],"r":[]},"aAu":{"ag":["Tj"]},"bbN":{"aA":[]},"Uo":{"af":[],"r":[]},"bh1":{"ag":["Uo"]},"U9":{"af":[],"r":[]},"Tk":{"af":[],"r":[]},"U1":{"af":[],"r":[]},"bgP":{"ag":["U9"]},"bo0":{"aA":[]},"aAv":{"ag":["Tk"]},"b72":{"aA":[]},"bgM":{"ag":["U1"]},"bnz":{"aA":[]},"So":{"af":[],"r":[]},"Tg":{"af":[],"r":[]},"TY":{"af":[],"r":[]},"bfv":{"ag":["So"]},"b6r":{"aA":[]},"bfU":{"ag":["Tg"]},"bbD":{"aA":[]},"bgL":{"ag":["TY"]},"bmR":{"aA":[]}}'))
C.Oq(b.typeUniverse,JSON.parse('{"mc":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.az
return{dw:w("mK<w?>"),e8:w("cY"),G:w("w"),l:w("bs<n,n>"),J:w("bs<n,P>"),I:w("bs<n,I>"),R:w("f6<n>"),Z:w("a0"),M:w("O<d5>"),T:w("O<ag1>"),gh:w("O<aOI>"),Y:w("O<a11>"),V:w("O<aa>"),O:w("O<w>"),ey:w("O<Q>"),dh:w("O<QY>"),aJ:w("O<aw<aB>>"),w:w("O<a0>"),k:w("O<ak<w>>"),x:w("O<ak<QY>>"),gO:w("O<ak<ak<P>>>"),bj:w("O<ak<n>>"),b:w("O<ak<P>>"),ez:w("O<a1<n,aB>>"),g:w("O<v>"),bz:w("O<vj>"),ds:w("O<aq4>"),v:w("O<hx>"),U:w("O<+(v,P)>"),ev:w("O<+(v,I)>"),L:w("O<+(n,n)>"),fT:w("O<+(P,r)>"),B:w("O<+(I,n)>"),u:w("O<+(I,I)>"),c:w("O<+(n,n,a0)>"),e:w("O<+(n,P,P,I)>"),o:w("O<+(n,I,n,I)>"),d:w("O<+(n,n,P,P,a1<n,P>)>"),_:w("O<ua>"),q:w("O<cJ>"),fQ:w("O<a83>"),s:w("O<n>"),cF:w("O<ap>"),X:w("O<vt>"),C:w("O<a8O>"),p:w("O<r>"),bL:w("O<a97>"),D:w("O<l4>"),aq:w("O<b64>"),a_:w("O<a9l>"),cS:w("O<a9s>"),cB:w("O<mY>"),ba:w("O<a9C>"),d9:w("O<NT>"),bi:w("O<a9V>"),eW:w("O<Bc>"),fY:w("O<Xe>"),aX:w("O<En>"),ea:w("O<aaJ>"),gB:w("O<abd>"),ed:w("O<O9>"),g4:w("O<bhL>"),aS:w("O<YL>"),ac:w("O<abw>"),cd:w("O<Bm>"),fr:w("O<acn>"),e4:w("O<Zs>"),r:w("O<acs>"),au:w("O<aF6>"),f7:w("O<T>"),n:w("O<P>"),t:w("O<I>"),dS:w("O<aA?>"),d4:w("O<n?>"),gJ:w("cn<aga>"),A:w("cn<ag<af>>"),bF:w("ak<w>"),gl:w("ak<Q>"),ew:w("ak<aB>"),a:w("ak<@>"),bW:w("ak<I>"),h:w("a1<n,@>"),f:w("a1<@,@>"),bd:w("J<fF,n>"),dv:w("J<n,n>"),fR:w("J<+(P,r),r>"),m:w("iC"),gA:w("yc"),P:w("co"),K:w("aB"),W:w("vj"),E:w("fF"),fA:w("AV"),N:w("n"),bO:w("ap"),j:w("lP"),F:w("bl<P>"),cL:w("a8P"),gj:w("cx<n>"),dg:w("e3<qc>"),e3:w("b6u"),a2:w("B8"),f3:w("qc"),es:w("Er"),gV:w("mC"),y:w("T"),i:w("P"),z:w("@"),S:w("I"),Q:w("ak<@>?"),fF:w("a1<@,@>?"),cK:w("aB?"),az:w("q1?"),dk:w("n?"),cD:w("P?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aOo=new C.d5(0,0.85)
D.f6I=new C.x("Tap once to start the chain",null,E.R3,null,null,null,null,null,null,null,null,null)
D.aNY=new C.bG(D.aOo,null,null,D.f6I,null)
D.aOf=new C.d5(0,0.1)
D.aPh=new B.aOS(0,0,0)
D.Ih=new B.aOS(0,0.5,0)
D.aPO=new C.ay(A.bl,1,A.r,-1)
D.aRe=new C.aX(0,1/0,0,290)
D.aKb=new C.F(!0,A.c1,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_A=new C.x("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aKb,null,A.L,null,null,null,null,null,null,null)
D.dO0=new C.C(A.no,D.f_A,null)
D.aWR=new C.cw(A.A,null,null,D.dO0,null)
D.f32=new C.x("Press Drop! and watch them fall from 20 metres.",null,A.kh,null,A.L,null,null,null,null,null,null,null)
D.dO4=new C.C(A.no,D.f32,null)
D.aX7=new C.cw(A.A,null,null,D.dO4,null)
D.eLi=new C.F(!0,A.j_,null,null,null,null,18,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7s=new C.x("Draw anywhere",null,D.eLi,null,null,null,null,null,null,null,null,null)
D.aXb=new C.cw(A.A,null,null,D.f7s,null)
D.eRw=new C.x("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aKb,null,A.L,null,null,null,null,null,null,null)
D.dOI=new C.C(A.DP,D.eRw,null)
D.aXt=new C.cw(A.A,null,null,D.dOI,null)
D.eJg=new C.F(!0,null,null,null,null,null,21,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXz=new C.x("\u26a1",null,D.eJg,null,null,null,null,null,null,null,null,null)
D.aXw=new C.cw(A.A,null,null,D.eXz,null)
D.a84=new C.w(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.aZc=new C.w(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.aZx=new C.w(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.t)
D.aZP=new C.w(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.b_y=new C.w(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.Th=new C.w(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b_D=new C.w(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.b_H=new C.w(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.b_L=new C.w(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.Ti=new C.w(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.b0H=new C.w(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.b0M=new C.w(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.b10=new C.w(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.b1Y=new C.w(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.a97=new C.w(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.b2e=new C.w(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.t)
D.b2n=new C.w(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.b2s=new C.w(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.t)
D.za=new C.w(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.b32=new C.w(1,1,0.9686274509803922,0.8,A.t)
D.a9s=new C.w(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.b3D=new C.w(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.b3K=new C.w(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.a9D=new C.w(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.TM=new C.w(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.b4e=new C.w(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.a9I=new C.w(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.b4B=new C.w(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,A.t)
D.TT=new C.w(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.a9Q=new C.w(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.a9U=new C.w(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.t)
D.b5L=new C.w(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.b5N=new C.w(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.b5R=new C.w(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.aaf=new C.w(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.b6g=new C.w(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.D8=new C.w(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.aap=new C.w(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.t)
D.b7c=new C.w(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.b7k=new C.w(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.b7n=new C.w(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.b7w=new C.w(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.b7z=new C.w(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.b7G=new C.w(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.aaL=new C.w(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.b87=new C.w(1,0.24705882352941178,0.3843137254901961,0.07058823529411765,A.t)
D.ab2=new C.w(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.b8A=new C.w(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.b93=new C.w(1,1,0.41568627450980394,0,A.t)
D.b9c=new C.w(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.rr=new C.w(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,A.t)
D.b9B=new C.w(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.b9S=new C.w(1,1,0.9529411764705882,0.6274509803921569,A.t)
D.b9W=new C.w(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.bdA=new C.b8(11e6)
D.V0=new C.M(0,0,7,0)
D.beC=new C.M(0,0,8,6)
D.acf=new C.M(0,0,9,0)
D.bf8=new C.M(10,0,10,4)
D.bfc=new C.M(10,10,10,6)
D.bfr=new C.M(10,6,10,2)
D.V9=new C.M(10,6,10,4)
D.bfs=new C.M(10,6,10,8)
D.bfu=new C.M(10,8,0,10)
D.bg5=new C.M(12,8,8,8)
D.bgb=new C.M(14,0,14,30)
D.acF=new C.M(14,0,14,6)
D.bgc=new C.M(14,10,10,10)
D.acL=new C.M(14,10,8,12)
D.bgJ=new C.M(14,8,14,6)
D.bhb=new C.M(16,4,16,28)
D.bhl=new C.M(16,8,16,12)
D.bkb=new C.M(4,4,6,2)
D.bkd=new C.M(4,4,8,2)
D.bkM=new C.M(8,14,8,12)
D.bkX=new C.M(8,6,16,0)
D.bkZ=new C.M(8,8,10,10)
D.eQI=new C.x("REACTION LAB",null,U.aKM,null,null,null,null,A.a2,null,1,null,null)
D.blB=new C.bF(1,A.bp,D.eQI,null)
D.eId=new C.F(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTD=new C.x("CORE PROTOCOL",null,D.eId,null,null,null,null,null,null,null,null,null)
D.blN=new C.bF(1,A.bp,D.eTD,null)
D.ePu=new C.x("Wire selected",null,A.hb,null,null,null,null,null,null,null,null,null)
D.bmC=new C.bF(1,A.bp,D.ePu,null)
D.afN=new C.a0(62712,"MaterialIcons",!1)
D.bpO=new C.a0(62878,"MaterialIcons",!1)
D.Xk=new C.a0(62908,"MaterialIcons",!1)
D.bpR=new C.a0(62918,"MaterialIcons",!1)
D.bpS=new C.a0(62931,"MaterialIcons",!1)
D.bpU=new C.a0(62951,"MaterialIcons",!1)
D.bpW=new C.a0(62970,"MaterialIcons",!1)
D.bqa=new C.a0(63064,"MaterialIcons",!1)
D.bqc=new C.a0(63070,"MaterialIcons",!1)
D.wX=new C.a0(63128,"MaterialIcons",!1)
D.Ey=new C.a0(63726,"MaterialIcons",!1)
D.bru=new C.a0(983122,"MaterialIcons",!1)
D.brJ=new C.a0(983247,"MaterialIcons",!1)
D.brQ=new C.a0(983316,"MaterialIcons",!1)
D.brW=new C.a0(983415,"MaterialIcons",!1)
D.brX=new C.a0(983417,"MaterialIcons",!1)
D.agZ=new C.a0(983442,"MaterialIcons",!1)
D.ah_=new C.a0(983443,"MaterialIcons",!1)
D.ah3=new C.a0(983467,"MaterialIcons",!1)
D.bs2=new C.a0(983501,"MaterialIcons",!1)
D.bsd=new C.a0(983616,"MaterialIcons",!1)
D.ahc=new C.a0(983617,"MaterialIcons",!1)
D.bse=new C.a0(983624,"MaterialIcons",!1)
D.bsq=new C.a0(983776,"MaterialIcons",!1)
D.bsI=new C.a0(984561,"MaterialIcons",!1)
D.btg=new C.ad(A.Ag,24,A.aL,null,null,null)
D.bux=new C.ad(A.m3,21,A.al,null,null,null)
D.brt=new C.a0(983117,"MaterialIcons",!1)
D.bvS=new C.ad(D.brt,28,A.c,null,null,null)
D.bw7=new C.ad(A.j2,18,null,null,null,null)
D.bxQ=new C.ad(A.e4,21,A.cH,null,null,null)
D.by4=new C.ad(A.m4,null,A.al,null,null,null)
D.bye=new C.ad(A.Ye,21,A.al,null,null,null)
D.bz3=new C.ad(A.eo,17,A.al,null,null,null)
D.aip=new C.ad(A.eo,19,null,null,null,null)
D.m6=new C.ad(A.uA,21,A.al,null,null,null)
D.bBB=new C.ad(A.j2,21,A.al,null,null,null)
D.bCq=new C.ad(A.fD,20,A.aA,null,null,null)
D.bD2=new C.ad(A.dP,null,A.aL,null,null,null)
D.bDm=new C.ad(A.jI,null,A.aA,null,null,null)
D.cVR=w([A.dD,A.d9,A.dD],x.O)
D.bFp=new C.a7(A.a3,A.a7,A.w,D.cVR,null,null)
D.cBH=w([A.c4,A.bu],x.O)
D.bFx=new C.a7(A.b1,A.b5,A.w,D.cBH,null,null)
D.clP=w([A.b_,A.k_,A.ri],x.O)
D.bFD=new C.a7(A.b1,A.b5,A.w,D.clP,null,null)
D.bFI=new C.a7(A.b1,A.b5,A.w,A.ase,null,null)
D.cC2=w([A.hv,A.fx],x.O)
D.bFQ=new C.a7(A.b1,A.b5,A.w,D.cC2,null,null)
D.ajq=new C.a7(A.b1,A.b5,A.w,I.ZT,null,null)
D.cFB=w([A.fe,A.dJ,A.cX],x.O)
D.bFV=new C.a7(A.b1,A.b5,A.w,D.cFB,null,null)
D.czz=w([A.nQ,A.i_],x.O)
D.bGt=new C.a7(A.b1,A.b5,A.w,D.czz,null,null)
D.cE0=w([A.f_,A.aF],x.O)
D.bGA=new C.a7(A.b1,A.b5,A.w,D.cE0,null,null)
D.cBq=w([A.f4,A.aG],x.O)
D.ajx=new C.a7(A.b1,A.b5,A.w,D.cBq,null,null)
D.cQS=w([A.eP,A.ih,A.bu],x.O)
D.bGJ=new C.a7(A.a3,A.a7,A.w,D.cQS,null,null)
D.cZ3=w([A.c4,A.c,A.bK],x.O)
D.bGN=new C.a7(A.a3,A.a7,A.w,D.cZ3,null,null)
D.cQY=w([A.lk,A.cV],x.O)
D.bH1=new C.a7(A.b1,A.b5,A.w,D.cQY,null,null)
D.c8T=w([A.c4,A.eP],x.O)
D.bHa=new C.a7(A.a3,A.a7,A.w,D.c8T,null,null)
D.cEo=w([A.iB,A.aG,A.dt],x.O)
D.bHf=new C.a7(A.ax,A.aC,A.w,D.cEo,null,null)
D.asO=w([A.f4,K.rn],x.O)
D.bHi=new C.a7(A.b1,A.b5,A.w,D.asO,null,null)
D.bHy=new C.a7(A.b1,A.b5,A.w,F.ajS,null,null)
D.cZx=w([A.hv,A.hg],x.O)
D.bHC=new C.a7(A.b1,A.b5,A.w,D.cZx,null,null)
D.b4i=new C.w(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.aZi=new C.w(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cxd=w([D.b4i,D.aZi],x.O)
D.bHL=new C.a7(A.b1,A.b5,A.w,D.cxd,null,null)
D.bHY=new C.a7(A.a3,A.a7,A.w,A.Nn,null,null)
D.bIm=new C.a7(A.ax,A.aC,A.w,A.Nn,null,null)
D.b88=new C.w(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.d_F=w([D.b88,A.IK],x.O)
D.bIs=new C.a7(A.b1,A.b5,A.w,D.d_F,null,null)
D.cJN=w([A.aG,A.x],x.O)
D.bIx=new C.a7(A.b1,A.b5,A.w,D.cJN,null,null)
D.bIA=new C.a7(A.b1,A.b5,A.w,K.ash,null,null)
D.b7D=new C.w(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.b8f=new C.w(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cln=w([A.Jf,D.b7D,D.b8f],x.O)
D.bII=new C.a7(A.b1,A.b5,A.w,D.cln,null,null)
D.c9d=w([A.du,A.hK],x.O)
D.bIX=new C.a7(A.b1,A.b5,A.w,D.c9d,null,null)
D.bJ2=new C.a7(A.ax,A.aC,A.w,A.a_C,null,null)
D.ajU=w([0,2,4,6,7,9,11],x.t)
D.bJB=w([0,4,7],x.t)
D.ajY=w([0,4,7,12],x.t)
D.bJC=w([0,4,7,4],x.t)
D.as_=w([A.h2,A.q6],x.O)
D.arA=w([A.ht,A.cY],x.O)
D.aq7=w([A.bE,A.dJ],x.O)
D.ctP=w([A.aL,A.du],x.O)
D.czV=w([A.cH,A.f0],x.O)
D.cRZ=w([A.c3,A.lO],x.O)
D.apD=w([A.cX,A.kq],x.O)
D.cyD=w([A.bK,A.aI],x.O)
D.bJW=w([D.as_,D.arA,A.ZX,D.aq7,D.ctP,D.czV,A.arb,D.cRZ,D.apD,D.cyD],x.k)
D.ak0=w([1],x.n)
D.bOA=w([120,220,380],x.t)
D.bSk=w([12,16,19,24],x.t)
D.bSt=w([1400,800,450,2400],x.t)
D.bWt=w([1,2,3],x.n)
D.bWE=w([1,-1],x.n)
D.bWF=w([0,0.6,1],x.n)
D.c_N=w([250,450,900,1500],x.t)
D.dL0=new C.v(26,-8)
D.dLr=new C.v(52,0)
D.dL_=new C.v(26,8)
D.c30=w([A.J,D.dL0,D.dLr,D.dL_],x.g)
D.b__=new C.w(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.b7W=new C.w(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.b6i=new C.w(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bav=new C.w(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.b5D=new C.w(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.aoW=w([D.b__,D.b7W,D.b6i,D.bav,D.b5D],x.O)
D.edJ=new C.A("type","Typewriter")
D.e7l=new C.A("bounce","Bounce")
D.ees=new C.A("wave","Wave")
D.efs=new C.A("zoom","Zoom")
D.cgi=w([D.edJ,D.e7l,D.ees,A.a2C,F.aGm,D.efs,F.aGo],x.L)
D.cgu=w([50,25,75],x.t)
D.ckJ=w([1,2,3,4,5,6,7],x.n)
D.clU=w([0,5,10,15,18,20,25],x.t)
D.e8V=new C.A("fish","Fish")
D.e8X=new C.A("fly","Fireflies")
D.e7j=new C.A("bird","Birds")
D.cq0=w([D.e8V,D.e8X,D.e7j],x.L)
D.cu4=w([900,500,250,1600],x.t)
D.cxy=w([A.fg,A.bI,A.Jc,A.eO],x.O)
D.cxz=w([0.78,1],x.n)
D.aq8=w([0,2,4,7,9,12,14,16],x.t)
D.aqd=w(["A","T","C","G"],x.s)
D.cy4=w(["A","U","C","G"],x.s)
D.ZO=w([A.aF,A.cJ,A.bn,A.b_,A.nd],x.O)
D.cyC=w([1,2.76,5.4,8.93,13.3],x.n)
D.dPh=new B.fF("battery","Battery","\ud83d\udd0b",A.bl,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.dPl=new B.fF("solar","Solar panel","\u2600\ufe0f",A.cJ,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.dPI=new B.fF("crank","Hand crank","\ud83d\udd04",A.cX,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.dPv=new B.fF("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.b_,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.dPo=new B.fF("switch","Switch","\ud83c\udf9a\ufe0f",A.bE,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.dPJ=new B.fF("fuse","Fuse","\ud83e\uddef",A.cH,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.dP7=new B.fF("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.ht,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.dPB=new B.fF("resistor","Resistor","\u3030\ufe0f",A.aL,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.dPD=new B.fF("bulb","Light bulb","\ud83d\udca1",A.f_,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.dPn=new B.fF("led","LED","\ud83d\udd34",A.aF,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.dPp=new B.fF("motor","Motor","\u2699\ufe0f",A.bK,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.dPz=new B.fF("buzzer","Buzzer","\ud83d\udd14",A.c3,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.dPi=new B.fF("heater","Heater","\ud83d\udd25",A.cX,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.dPx=new B.fF("capacitor","Capacitor","\ud83e\udeab",A.cF,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.dPr=new B.fF("radio","Radio","\ud83d\udcfb",A.nd,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.dPN=new B.fF("tv","TV","\ud83d\udcfa",A.b9,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.dPd=new B.fF("voltmeter","Voltmeter","\ud83e\udded",A.bs,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.dPg=new B.fF("ammeter","Ammeter","\ud83d\udcdf",A.aL,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.dPk=new B.fF("fan","Fan","\ud83c\udf00",A.b_,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.dPM=new B.fF("speaker","Speaker","\ud83d\udd0a",A.c3,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.dPF=new B.fF("clock","Digital clock","\u23f0",A.bl,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.dPu=new B.fF("calculator","Calculator","\ud83e\uddee",A.IE,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.dPO=new B.fF("phone","Phone charging","\ud83d\udcf1",A.cF,"Charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.dPL=new B.fF("router","WiFi router","\ud83d\udcf6",A.ht,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.dPP=new B.fF("siren","Siren","\ud83d\udea8",A.aF,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.dP9=new B.fF("toycar","Toy car","\ud83d\ude97",A.cX,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.dPQ=new B.fF("kettle","Kettle","\ud83e\uded6",A.nX,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.dPf=new B.fF("lamp","Desk lamp","\ud83e\ude94",A.f_,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.dPm=new B.fF("lights","Party lights","\ud83c\udf84",A.nd,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.dPs=new B.fF("fridge","Fridge","\ud83e\uddca",A.hv,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.dPb=new B.fF("washer","Washing machine","\ud83e\udee7",A.cF,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.dPG=new B.fF("blender","Blender","\ud83e\udd64",A.cH,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.dPq=new B.fF("drone","Drone","\ud83d\ude81",A.bK,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.dPe=new B.fF("drill","Power drill","\ud83d\udd29",A.aL,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.dPt=new B.fF("torch","Torch","\ud83d\udd26",A.bI,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.dPE=new B.fF("neon","Neon sign","\ud83e\udea7",A.c3,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.dPc=new B.fF("microwave","Microwave","\ud83c\udf72",A.cX,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.dPC=new B.fF("doorbell","Doorbell","\ud83d\udd14",A.cJ,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.dPj=new B.fF("camera","Security camera","\ud83d\udcf7",A.ai,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.dPy=new B.fF("console","Game console","\ud83c\udfae",A.bE,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.dPH=new B.fF("heartmon","Heart monitor","\ud83e\ude7a",A.hp,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.dPa=new B.fF("aquarium","Aquarium","\ud83d\udc20",A.b9,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.dPw=new B.fF("lighthouse","Lighthouse","\ud83d\uddfc",A.f_,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.dPA=new B.fF("discoball","Disco ball","\ud83e\udea9",A.nd,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.dPK=new B.fF("robot","Robot","\ud83e\udd16",A.b_,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.dP8=new B.fF("toaster","Toaster","\ud83c\udf5e",A.dZ,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.Np=w([D.dPh,D.dPl,D.dPI,D.dPv,D.dPo,D.dPJ,D.dP7,D.dPB,D.dPD,D.dPn,D.dPp,D.dPz,D.dPi,D.dPx,D.dPr,D.dPN,D.dPd,D.dPg,D.dPk,D.dPM,D.dPF,D.dPu,D.dPO,D.dPL,D.dPP,D.dP9,D.dPQ,D.dPf,D.dPm,D.dPs,D.dPb,D.dPG,D.dPq,D.dPe,D.dPt,D.dPE,D.dPc,D.dPC,D.dPj,D.dPy,D.dPH,D.dPa,D.dPw,D.dPA,D.dPK,D.dP8],C.az("O<fF>"))
D.aqk=w([A.cX,A.cJ,A.c3,A.bl],x.O)
D.czh=w([A.aG,A.aF,A.cX,A.cJ,A.bn,A.cC,A.cb,A.bz,A.IK],x.O)
D.ZR=w([0.04,0.17,0.3],x.n)
D.czD=w([1,0.6,0.38,0.22,0.12],x.n)
D.czR=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.Fo=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.emu=new B.ua("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.emA=new B.ua("Medium engine","A good all-rounder.",0.3,0.9)
D.emz=new B.ua("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Fp=w([D.emu,D.emA,D.emz],x._)
D.dYU=new C.A(6,"Easy")
D.dZr=new C.A(8,"Medium")
D.dVw=new C.A(10,"Hard")
D.cAE=w([D.dYU,D.dZr,D.dVw],x.B)
D.aqw=w([0.55,0.78,1],x.n)
D.cC7=w([0.93,0.975,1],x.n)
D.cCp=w(["Mama","Baba","Bibi","Babu","Dada","Kaka"],x.s)
D.aqG=w([A.c,A.hg,A.pV,A.aG],x.O)
D.dGD=new B.Hh("NGMY Tree Story","A family grows, one branch at a time")
D.dGA=new B.Hh("Coin Hero","A little coin saves up and wins the day")
D.dGE=new B.Hh("Space Voyage","The NGMY rocket explores the stars")
D.dGz=new B.Hh("Ocean Friends","Fish, bubbles and a friendly whale")
D.dGB=new B.Hh("Rainy Village","Storm clouds, then a rainbow")
D.dGC=new B.Hh("Spark Adventure","Follow a spark round a circuit")
D.Nw=w([D.dGD,D.dGA,D.dGE,D.dGz,D.dGB,D.dGC],C.az("O<Hh>"))
D.cDB=w([1,0.7,0.45,0.28,0.16,0.1,0.06],x.n)
D.cDC=w([1,0.55,0.32,0.2,0.12,0.07],x.n)
D.fbP=new B.xb("Moon",1737,4291941851)
D.fbM=new B.xb("Earth",6371,4281908728)
D.fbQ=new B.xb("Neptune",24622,4284524026)
D.fbR=new B.xb("Saturn",58232,4294829706)
D.fbN=new B.xb("Jupiter",69911,4294677052)
D.fbS=new B.xb("Sun",696340,4294688548)
D.fbT=new B.xb("Sirius A",119e4,4290763774)
D.fbK=new B.xb("Arcturus",179e5,4294818420)
D.fbL=new B.xb("Betelgeuse",531e6,4294472049)
D.fbO=new B.xb("UY Scuti",667e6,4293870660)
D.Ny=w([D.fbP,D.fbM,D.fbQ,D.fbR,D.fbN,D.fbS,D.fbT,D.fbK,D.fbL,D.fbO],C.az("O<xb>"))
D.eiz=new C.bz("glow","Glow",A.Xm)
D.egq=new C.bz("rainbow","Rainbow",A.nt)
D.egL=new C.bz("stars","Stars",A.hU)
D.ega=new C.bz("sparks","Sparks",A.dP)
D.ehV=new C.bz("fire","Fire",A.uB)
D.cDN=w([D.eiz,D.egq,D.egL,D.ega,D.ehV],x.c)
D.aqK=w([A.bn,A.aF,A.cJ,A.d9],x.O)
D.cEH=w([0.2,1],x.n)
D.emr=new B.ua("Radar","Shows your height above the ground.",0.1,0)
D.ems=new B.ua("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.emp=new B.ua("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aqS=w([D.emr,D.ems,D.emp],x._)
D.ehg=new C.bz("attract","Attract",A.xe)
D.eh4=new C.bz("scare","Scare",A.rU)
D.egj=new C.bz("food","Food",A.t0)
D.brz=new C.a0(983158,"MaterialIcons",!1)
D.ehz=new C.bz("hunt","Hunt",D.brz)
D.cFh=w([D.ehg,D.eh4,D.egj,D.ehz],x.c)
D.cFF=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cFT=w([47,100,220,470,1000],x.n)
D.ar8=w([0,2,4,7,9],x.t)
D.cHn=w([1,0.6,0.45,0.3,0.22,0.15],x.n)
D.flF=new B.EE("Moon",1.62,A.eP,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.flD=new B.EE("Mars",3.71,A.aF,"Mars has about 38 percent of Earth's gravity.")
D.flG=new B.EE("Mercury",3.7,A.jz,"Mercury is small, so its gravity is like Mars.")
D.flA=new B.EE("Venus",8.87,A.aL,"Venus is almost as heavy as Earth, with strong gravity.")
D.flC=new B.EE("Earth",9.81,A.b_,"On Earth gravity is strong, and the air also slows you down.")
D.flE=new B.EE("Neptune",11.15,A.d9,"Neptune pulls a little harder than Earth.")
D.flB=new B.EE("Jupiter",24.79,A.cX,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.qt=w([D.flF,D.flD,D.flG,D.flA,D.flC,D.flE,D.flB],C.az("O<EE>"))
D.cHB=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a_5=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cId=w([0.2,0.5,0.8],x.n)
D.cIn=w([1,2,3,4,5,6],x.n)
D.bq5=new C.a0(63040,"MaterialIcons",!1)
D.eh7=new C.bz("peg","Peg",D.bq5)
D.egn=new C.bz("bar","Bar",O.Ak)
D.egN=new C.bz("erase","Erase",A.KV)
D.cIo=w([D.eh7,D.egn,D.egN],x.c)
D.eoU=new C.cJ(A.bh,A.J,4)
D.cIy=w([D.eoU],x.q)
D.arl=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aNI=new B.IM(0,"accordion")
D.cyJ=w([A.j4,A.Al,A.Eh],x.w)
D.cF9=w(["Mail","SMS","Ad"],x.s)
D.cza=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.fjS=new B.zr(D.aNI,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.as_,D.cyJ,D.cF9,D.cza)
D.a5S=new B.IM(1,"flip")
D.cOD=w([A.ql,Z.EP,A.uH],x.w)
D.cJW=w(["Unlock","Verify","Secure"],x.s)
D.cxQ=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.fjR=new B.zr(D.a5S,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.arA,D.cOD,D.cJW,D.cxQ)
D.aNJ=new B.IM(2,"towers")
D.cIQ=w([A.x9,A.pb,A.hT],x.w)
D.cIu=w(["Save","Grow","Earn"],x.s)
D.cm2=w(["","",""],x.s)
D.fjT=new B.zr(D.aNJ,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.ZX,D.cIQ,D.cIu,D.cm2)
D.a5T=new B.IM(3,"assemble")
D.cPt=w([A.mI,A.hk,A.dP],x.w)
D.cEA=w(["Launch","Charge","Shine"],x.s)
D.cMi=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.fjV=new B.zr(D.a5T,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aq7,D.cPt,D.cEA,D.cMi)
D.aNK=new B.IM(4,"carousel")
D.cPi=w([A.b9,A.j0],x.O)
D.cFj=w([A.m3,A.age,A.Y8],x.w)
D.cAu=w(["Explore","Discover","Learn"],x.s)
D.cKj=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.fjQ=new B.zr(D.aNK,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.cPi,D.cFj,D.cAu,D.cKj)
D.aNL=new B.IM(5,"burst")
D.cIq=w([A.kp,A.u1],x.O)
D.cz5=w([A.kX,A.m1,A.hS],x.w)
D.czo=w(["Cheer","Win","Love"],x.s)
D.cBo=w(["Make some noise","First place","Share the joy"],x.s)
D.fjU=new B.zr(D.aNL,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cIq,D.cz5,D.czo,D.cBo)
D.arm=w([D.fjS,D.fjR,D.fjT,D.fjV,D.fjQ,D.fjU],C.az("O<zr>"))
D.eh9=new C.bz("skin","Skin",A.agf)
D.eim=new C.bz("muscle","Muscles",A.L7)
D.ei8=new C.bz("organ","Organs",A.hS)
D.bpx=new C.a0(62747,"MaterialIcons",!1)
D.eib=new C.bz("bone","Skeleton",D.bpx)
D.eis=new C.bz("vessel","Blood vessels",A.uK)
D.cIV=w([D.eh9,D.eim,D.ei8,D.eib,D.eis],x.c)
D.cJL=w([A.hv,A.u9],x.O)
D.emt=new B.ua("Simple legs","Light. Land gently.",0.15,0.2)
D.emv=new B.ua("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.emy=new B.ua("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.AG=w([D.emt,D.emv,D.emy],x._)
D.cKr=w([1.77,3.55,7.15,16.7],x.n)
D.cMG=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.edd=new C.A("spiral","Spiral")
D.dYS=new C.A("barred","Barred spiral")
D.e8r=new C.A("elliptical","Elliptical")
D.cNj=w([D.edd,D.dYS,D.e8r],x.L)
D.ej4=new C.cK(["beat",0.18,0.28,0])
D.ek5=new C.cK(["burst",0.7,0.2,0])
D.ekg=new C.cK(["delay",0.45,0.5,1])
D.ejO=new C.cK(["ripple",0.75,0.6,3])
D.cEj=w([D.ej4,D.ek5,D.ekg,D.ejO],x.e)
D.a2x=new C.A(2,3)
D.cO4=w([L.mQ,I.GJ,D.a2x],x.u)
D.fj7=new B.Er("First spark","A clock lights a burst and a ripple",D.cEj,D.cO4)
D.ejx=new C.cK(["beat",0.15,0.3,1])
D.eiK=new C.cK(["ripple",0.62,0.15,0])
D.ekd=new C.cK(["delay",0.4,0.45,0])
D.ejg=new C.cK(["ripple",0.7,0.45,0])
D.ej0=new C.cK(["delay",0.4,0.7,1])
D.ejR=new C.cK(["shake",0.75,0.75,0])
D.cZi=w([D.ejx,D.eiK,D.ekd,D.ejg,D.ej0,D.ejR],x.e)
D.dWl=new C.A(2,4)
D.aGg=new C.A(4,5)
D.cHs=w([L.mQ,I.GJ,D.a2x,D.dWl,D.aGg],x.u)
D.fj9=new B.Er("Heartbeat","Two thumps, then a shake",D.cZi,D.cHs)
D.ej9=new C.cK(["dice",0.15,0.7,1])
D.eki=new C.cK(["echo",0.4,0.7,0])
D.ejf=new C.cK(["comet",0.7,0.5,4])
D.ek6=new C.cK(["burst",0.72,0.2,1])
D.ejv=new C.cK(["burst",0.3,0.25,0])
D.eja=new C.cK(["pop",0.55,0.85,0])
D.c2A=w([D.ej9,D.eki,D.ejf,D.ek6,D.ejv,D.eja],x.e)
D.dVO=new C.A(1,3)
D.dVP=new C.A(1,4)
D.aGf=new C.A(0,5)
D.cPd=w([L.mQ,I.v8,D.dVO,D.dVP,D.aGf],x.u)
D.fj8=new B.Er("Fireworks","Dice launch comets that burst in colour",D.c2A,D.cPd)
D.ejd=new C.cK(["beat",0.15,0.2,2])
D.ejE=new C.cK(["chance",0.4,0.2,0])
D.ej6=new C.cK(["ball",0.7,0.12,3])
D.eiU=new C.cK(["chance",0.4,0.5,1])
D.ekh=new C.cK(["ball",0.3,0.08,1])
D.eiN=new C.cK(["ripple",0.7,0.55,3])
D.bWG=w([D.ejd,D.ejE,D.ej6,D.eiU,D.ekh,D.eiN],x.e)
D.a2y=new C.A(3,4)
D.dWm=new C.A(2,5)
D.ciw=w([L.mQ,I.v8,I.a2w,D.a2y,D.dWm],x.u)
D.fj6=new B.Er("Rain","Balls fall at random and splash",D.bWG,D.ciw)
D.ejF=new C.cK(["beat",0.12,0.45,2])
D.ek7=new C.cK(["toggle",0.38,0.2,0])
D.ekf=new C.cK(["wash",0.7,0.15,4])
D.ej8=new C.cK(["count3",0.38,0.45,0])
D.eka=new C.cK(["burst",0.72,0.4,0])
D.ejw=new C.cK(["light",0.55,0.7,1])
D.eiV=new C.cK(["pop",0.8,0.8,4])
D.cRF=w([D.ejF,D.ek7,D.ekf,D.ej8,D.eka,D.ejw,D.eiV],x.e)
D.dWH=new C.A(3,6)
D.bZN=w([L.mQ,I.v8,I.a2w,D.a2y,D.aGf,D.dWH],x.u)
D.fj4=new B.Er("Disco","A beat drives lights, washes and bursts",D.cRF,D.bZN)
D.ekk=new C.cK(["button",0.12,0.2,0])
D.eiP=new C.cK(["delay",0.34,0.2,1])
D.ekj=new C.cK(["light",0.56,0.2,1])
D.eke=new C.cK(["delay",0.56,0.45,1])
D.ejG=new C.cK(["ball",0.34,0.6,0])
D.eiT=new C.cK(["delay",0.34,0.8,1])
D.eiJ=new C.cK(["burst",0.7,0.8,5])
D.bJZ=w([D.ekk,D.eiP,D.ekj,D.eke,D.ejG,D.eiT,D.eiJ],x.e)
D.dYD=new C.A(5,6)
D.cW3=w([L.mQ,I.v8,D.a2x,D.a2y,D.aGg,D.dYD],x.u)
D.fj5=new B.Er("Domino","Tap the button and watch it run down the line",D.bJZ,D.cW3)
D.arE=w([D.fj7,D.fj9,D.fj8,D.fj6,D.fj4,D.fj5],C.az("O<Er>"))
D.cNr=w([0.05,0.15,0.25],x.n)
D.cNF=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.cOf=w([1.5,3,4.5,9,12],x.n)
D.efY=new C.bz("dice","Dice",A.m0)
D.egT=new C.bz("coin","Coin",E.x3)
D.ein=new C.bz("num","Number",A.xc)
D.cOo=w([D.efY,D.egT,D.ein],x.c)
D.cOr=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fbU=new B.Nq("Moon",1.62,0,4291941851)
D.fbV=new B.Nq("Mars",3.71,0.01,4294472049)
D.fbW=new B.Nq("Earth",9.81,1,4281908728)
D.fbY=new B.Nq("Jupiter",24.79,1.4,4294677052)
D.fbX=new B.Nq("Sun",274,2,4294688548)
D.xC=w([D.fbU,D.fbV,D.fbW,D.fbY,D.fbX],C.az("O<Nq>"))
D.arK=w([A.cH,A.aL,A.bl,A.b_,A.bE,A.c3,A.cX,A.ht],x.O)
D.dIz={H:0}
D.d4i=new C.bs(D.dIz,[2],x.I)
D.d5L=new B.rB("Hydrogen","H\u2082",D.d4i,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.dIA={H:0,Cl:1}
D.d4u=new C.bs(D.dIA,[1,1],x.I)
D.d5N=new B.rB("Hydrogen chloride","HCl",D.d4u,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.dIB={H:0,O:1}
D.d41=new C.bs(D.dIB,[2,1],x.I)
D.d5O=new B.rB("Water","H\u2082O",D.d41,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.dIO={N:0,H:1}
D.d4R=new C.bs(D.dIO,[1,3],x.I)
D.d5W=new B.rB("Ammonia","NH\u2083",D.d4R,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a1G={C:0,H:1}
D.d4M=new C.bs(D.a1G,[1,4],x.I)
D.d5P=new B.rB("Methane","CH\u2084",D.d4M,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.dIC={H:0,S:1}
D.d3a=new C.bs(D.dIC,[2,1],x.I)
D.d5V=new B.rB("Hydrogen sulfide","H\u2082S",D.d3a,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.dIT={O:0}
D.d4P=new C.bs(D.dIT,[2],x.I)
D.d5X=new B.rB("Oxygen","O\u2082",D.d4P,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.dIN={N:0}
D.d4j=new C.bs(D.dIN,[2],x.I)
D.d5M=new B.rB("Nitrogen","N\u2082",D.d4j,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.dIp={C:0,O:1}
D.d4X=new C.bs(D.dIp,[1,2],x.I)
D.d5T=new B.rB("Carbon dioxide","CO\u2082",D.d4X,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aAO={C:0,H:1,O:2}
D.d2X=new C.bs(D.aAO,[1,2,1],x.I)
D.d5U=new B.rB("Formaldehyde","CH\u2082O",D.d2X,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.d4L=new C.bs(D.a1G,[2,4],x.I)
D.d5R=new B.rB("Ethene","C\u2082H\u2084",D.d4L,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.d4K=new C.bs(D.a1G,[2,6],x.I)
D.d5Q=new B.rB("Ethane","C\u2082H\u2086",D.d4K,"Two carbons joined by a single bond, each holding three hydrogens.")
D.d2Y=new C.bs(D.aAO,[1,4,1],x.I)
D.d5S=new B.rB("Methanol","CH\u2083OH",D.d2Y,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a_k=w([D.d5L,D.d5N,D.d5O,D.d5W,D.d5P,D.d5V,D.d5X,D.d5M,D.d5T,D.d5U,D.d5R,D.d5Q,D.d5S],C.az("O<rB>"))
D.cPj=w([A.c3,A.b_,A.f_,A.bl],x.O)
D.cQb=w([],x.Y)
D.cQc=w([],x.x)
D.a_u=w([],x.C)
D.cQx=w([0,0.46,0.82],x.n)
D.cQI=w([5,10,15,25,45,60],x.t)
D.cR0=w([-0.045,0.03,-0.015],x.n)
D.cRn=w([0.9,0.97,1],x.n)
D.Pr={volts:0}
D.a0q=new C.bs(D.Pr,[3],x.J)
D.GK=new C.f9(["b","battery",0.2,0.3,D.a0q])
D.dJO={on:0}
D.d4h=new C.bs(D.dJO,[1],x.J)
D.BD=new C.f9(["s","switch",0.5,0.3,D.d4h])
D.ekU=new C.f9(["l","bulb",0.8,0.3,A.jK])
D.cBO=w([D.GK,D.BD,D.ekU],x.d)
D.BC=new C.cK(["b",0,"s",0])
D.ek0=new C.cK(["s",1,"l",0])
D.aGq=new C.cK(["l",1,"b",1])
D.cR2=w([D.BC,D.ek0,D.aGq],x.o)
D.cBi=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.dUU=new B.nm("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cBO,D.cR2,D.cBi)
D.aAR={ohms:0}
D.ayv=new C.bs(D.aAR,[220],x.J)
D.eks=new C.f9(["r","resistor",0.5,0.3,D.ayv])
D.el6=new C.f9(["d","led",0.8,0.3,A.jK])
D.cTI=w([D.GK,D.eks,D.el6],x.d)
D.ejo=new C.cK(["b",0,"r",0])
D.ejV=new C.cK(["r",1,"d",0])
D.ejt=new C.cK(["d",1,"b",1])
D.d09=w([D.ejo,D.ejV,D.ejt],x.o)
D.cU6=w(["led","diode","indicator"],x.s)
D.dV_=new B.nm("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.cTI,D.d09,D.cU6)
D.a1H={level:0}
D.d3G=new C.bs(D.a1H,[0.2],x.J)
D.ekw=new C.f9(["p","pot",0.5,0.3,D.d3G])
D.ekz=new C.f9(["m","motor",0.8,0.3,A.jK])
D.cC5=w([D.GK,D.ekw,D.ekz],x.d)
D.ejn=new C.cK(["b",0,"p",0])
D.ejQ=new C.cK(["p",1,"m",0])
D.ejM=new C.cK(["m",1,"b",1])
D.cXE=w([D.ejn,D.ejQ,D.ejM],x.o)
D.cQN=w(["fan","motor","spin","dimmer"],x.s)
D.dUS=new B.nm("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cC5,D.cXE,D.cQN)
D.a0n=new C.bs(D.a1H,[0.9],x.J)
D.aGt=new C.f9(["s","solar",0.25,0.3,D.a0n])
D.aGs=new C.f9(["l","bulb",0.75,0.3,A.jK])
D.cEp=w([D.aGt,D.aGs],x.d)
D.ejY=new C.cK(["s",0,"l",0])
D.ejL=new C.cK(["l",1,"s",1])
D.cCL=w([D.ejY,D.ejL],x.o)
D.cY8=w(["solar","sun","without battery","no battery","free"],x.s)
D.dUV=new B.nm("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cEp,D.cCL,D.cY8)
D.el9=new C.f9(["c","crank",0.25,0.3,D.a0n])
D.cPh=w([D.el9,D.aGs],x.d)
D.ejq=new C.cK(["c",0,"l",0])
D.ejK=new C.cK(["l",1,"c",1])
D.cPN=w([D.ejq,D.ejK],x.o)
D.cPq=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.dUR=new B.nm("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.cPh,D.cPN,D.cPq)
D.d3F=new C.bs(D.a1H,[0.7],x.J)
D.ekC=new C.f9(["t","turbine",0.25,0.3,D.d3F])
D.ekq=new C.f9(["m","motor",0.75,0.3,A.jK])
D.cKo=w([D.ekC,D.ekq],x.d)
D.ek8=new C.cK(["t",0,"m",0])
D.ejN=new C.cK(["m",1,"t",1])
D.cJu=w([D.ek8,D.ejN],x.o)
D.cOg=w(["wind","turbine","windmill","water","hydro"],x.s)
D.dUP=new B.nm("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.cKo,D.cJu,D.cOg)
D.d4I=new C.bs(D.Pr,[9],x.J)
D.aGr=new C.f9(["b","battery",0.2,0.3,D.d4I])
D.ekR=new C.f9(["r","radio",0.8,0.3,A.jK])
D.cYC=w([D.aGr,D.BD,D.ekR],x.d)
D.ek2=new C.cK(["s",1,"r",0])
D.ejT=new C.cK(["r",1,"b",1])
D.bJl=w([D.BC,D.ek2,D.ejT],x.o)
D.cXr=w(["radio","music","listen"],x.s)
D.dUZ=new B.nm("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.cYC,D.bJl,D.cXr)
D.d4J=new C.bs(D.Pr,[12],x.J)
D.eky=new C.f9(["b","battery",0.2,0.3,D.d4J])
D.ekV=new C.f9(["t","tv",0.8,0.3,A.jK])
D.cBP=w([D.eky,D.BD,D.ekV],x.d)
D.ek3=new C.cK(["s",1,"t",0])
D.ek9=new C.cK(["t",1,"b",1])
D.cS1=w([D.BC,D.ek3,D.ek9],x.o)
D.cYB=w(["tv","television","screen","watch"],x.s)
D.dUM=new B.nm("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cBP,D.cS1,D.cYB)
D.ekK=new C.f9(["z","buzzer",0.8,0.3,A.jK])
D.ciM=w([D.GK,D.BD,D.ekK],x.d)
D.ek4=new C.cK(["s",1,"z",0])
D.ekl=new C.cK(["z",1,"b",1])
D.cxo=w([D.BC,D.ek4,D.ekl],x.o)
D.cVV=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.dUW=new B.nm("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.ciM,D.cxo,D.cVV)
D.ekx=new C.f9(["h","heater",0.8,0.3,A.jK])
D.cN3=w([D.aGr,D.BD,D.ekx],x.d)
D.ek_=new C.cK(["s",1,"h",0])
D.ejA=new C.cK(["h",1,"b",1])
D.cy0=w([D.BC,D.ek_,D.ejA],x.o)
D.c3_=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.dUN=new B.nm("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.cN3,D.cy0,D.c3_)
D.ekX=new C.f9(["s","solar",0.2,0.25,D.a0n])
D.d4O=new C.bs(D.aAR,[100],x.J)
D.el_=new C.f9(["r","resistor",0.55,0.25,D.d4O])
D.el5=new C.f9(["c","capacitor",0.85,0.25,A.jK])
D.ekt=new C.f9(["q","resistor",0.55,0.6,D.ayv])
D.ekY=new C.f9(["d","led",0.85,0.6,A.jK])
D.cRH=w([D.ekX,D.el_,D.el5,D.ekt,D.ekY],x.d)
D.ejZ=new C.cK(["s",0,"r",0])
D.ejU=new C.cK(["r",1,"c",0])
D.ejs=new C.cK(["c",1,"s",1])
D.ejr=new C.cK(["c",0,"q",0])
D.ejS=new C.cK(["q",1,"d",0])
D.eju=new C.cK(["d",1,"c",1])
D.cHC=w([D.ejZ,D.ejU,D.ejs,D.ejr,D.ejS,D.eju],x.o)
D.cOJ=w(["capacitor","store","charge","flash"],x.s)
D.dUY=new B.nm("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.cRH,D.cHC,D.cOJ)
D.ekE=new C.f9(["b","battery",0.15,0.3,D.a0q])
D.ela=new C.f9(["l1","bulb",0.5,0.3,A.jK])
D.ekI=new C.f9(["l2","bulb",0.85,0.3,A.jK])
D.cA8=w([D.ekE,D.ela,D.ekI],x.d)
D.ejm=new C.cK(["b",0,"l1",0])
D.ejH=new C.cK(["l1",1,"l2",0])
D.ejI=new C.cK(["l2",1,"b",1])
D.cL0=w([D.ejm,D.ejH,D.ejI],x.o)
D.cYr=w(["series","two bulbs","dim"],x.s)
D.dUQ=new B.nm("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cA8,D.cL0,D.cYr)
D.dK_={volts:0,charge:1}
D.d4S=new C.bs(D.dK_,[1.5,0],x.J)
D.el3=new C.f9(["b","battery",0.75,0.3,D.d4S])
D.czA=w([D.aGt,D.el3],x.d)
D.ejX=new C.cK(["s",0,"b",0])
D.ejp=new C.cK(["b",1,"s",1])
D.cHS=w([D.ejX,D.ejp],x.o)
D.cOQ=w(["charge","rechargeable","flat","recharge"],x.s)
D.dUO=new B.nm("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.czA,D.cHS,D.cOQ)
D.d4H=new C.bs(D.Pr,[4.5],x.J)
D.ekA=new C.f9(["b","battery",0.2,0.3,D.d4H])
D.ekr=new C.f9(["p","phone",0.8,0.3,A.jK])
D.cKe=w([D.ekA,D.BD,D.ekr],x.d)
D.ek1=new C.cK(["s",1,"p",0])
D.ejP=new C.cK(["p",1,"b",1])
D.cUZ=w([D.BC,D.ek1,D.ejP],x.o)
D.cWi=w(["phone","charger","usb","mobile"],x.s)
D.dUT=new B.nm("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.cKe,D.cUZ,D.cWi)
D.ekn=new C.f9(["f","fan",0.8,0.3,A.jK])
D.bWg=w([D.GK,D.ekn],x.d)
D.ejl=new C.cK(["b",0,"f",0])
D.ejy=new C.cK(["f",1,"b",1])
D.cyr=w([D.ejl,D.ejy],x.o)
D.cQM=w(["fan","cool","air","wind"],x.s)
D.dV0=new B.nm("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.bWg,D.cyr,D.cQM)
D.ekO=new C.f9(["b","battery",0.15,0.2,D.a0q])
D.eko=new C.f9(["a","ammeter",0.5,0.2,A.jK])
D.ekm=new C.f9(["l","bulb",0.85,0.2,A.jK])
D.ekQ=new C.f9(["v","voltmeter",0.5,0.6,A.jK])
D.cP6=w([D.ekO,D.eko,D.ekm,D.ekQ],x.d)
D.ejk=new C.cK(["b",0,"a",0])
D.ejj=new C.cK(["a",1,"l",0])
D.ekb=new C.cK(["v",0,"l",0])
D.ekc=new C.cK(["v",1,"l",1])
D.cHJ=w([D.ejk,D.ejj,D.aGq,D.ekb,D.ekc],x.o)
D.d08=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.dUX=new B.nm("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.cP6,D.cHJ,D.d08)
D.O1=w([D.dUU,D.dV_,D.dUS,D.dUV,D.dUR,D.dUP,D.dUZ,D.dUM,D.dUW,D.dUN,D.dUY,D.dUQ,D.dUO,D.dUT,D.dV0,D.dUX],C.az("O<nm>"))
D.as6=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.t7=w([0.05,0.2,0.35],x.n)
D.czs=w([D.D8,D.D8],x.O)
D.cEg=w([A.Dj,A.M],x.O)
D.cDo=w([A.fS,A.hJ],x.O)
D.cxN=w([A.j0,A.nc],x.O)
D.bWe=w([A.lO,A.dt],x.O)
D.as7=w([D.czs,D.cEg,D.cDo,D.cxN,D.bWe],x.k)
D.fbI=new B.un("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fbJ=new B.un("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fbA=new B.un("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fbH=new B.un("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fbF=new B.un("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fbB=new B.un("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fbG=new B.un("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fbC=new B.un("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fbE=new B.un("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fbD=new B.un("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.AM=w([D.fbI,D.fbJ,D.fbA,D.fbH,D.fbF,D.fbB,D.fbG,D.fbC,D.fbE,D.fbD],C.az("O<un>"))
D.b5l=new C.w(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.cSo=w([D.D8,D.b5l,D.a9s,A.a94],x.O)
D.dVe=new C.A(0,"AND")
D.dVQ=new C.A(1,"Adder")
D.dWn=new C.A(2,"Blinker")
D.dWI=new C.A(3,"Memory")
D.cTT=w([D.dVe,D.dVQ,D.dWn,D.dWI],x.B)
D.asi=w([-104,0,104],x.n)
D.asj=w([-14,3],x.n)
D.cUi=w([-16,16],x.n)
D.cUj=w([-1,1],x.n)
D.cUl=w([-22,22],x.n)
D.ask=w([-24,24],x.n)
D.cUo=w([-5,5],x.n)
D.cUp=w([-8,8],x.n)
D.asm=w([-92,0,92],x.n)
D.cUJ=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.emq=new B.ua("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.emx=new B.ua("Medium tank","Balanced.",0.35,1)
D.emw=new B.ua("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.O8=w([D.emq,D.emx,D.emw],x._)
D.cUY=w([A.aI,A.ai],x.O)
D.cV1=w([1,2,3,4,6,8],x.n)
D.mM=w([0.04,0.2,0.36],x.n)
D.asv=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.cVQ=w([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],x.n)
D.ei7=new C.bz(D.aNI,"Fold",E.ahe)
D.ehn=new C.bz(D.a5S,"Flip",A.Ep)
D.bpQ=new C.a0(62889,"MaterialIcons",!1)
D.eil=new C.bz(D.aNJ,"Rise",D.bpQ)
D.ahs=new C.a0(983870,"MaterialIcons",!1)
D.efA=new C.bz(D.a5T,"Assemble",D.ahs)
D.efJ=new C.bz(D.aNK,"Spin",D.afN)
D.efG=new C.bz(D.aNL,"Pop",A.kX)
D.cW0=w([D.ei7,D.ehn,D.eil,D.efA,D.efJ,D.efG],C.az("O<+(IM,n,a0)>"))
D.asA=w([A.c3,A.f_,A.bs,A.b_,A.bE,A.cH],x.O)
D.cWb=w([A.b_,A.cX,A.cX,A.bl],x.O)
D.cWn=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.eeB=new C.A("Make the output turn HALF as fast as the input.",0.5)
D.e0N=new C.A("Make the output turn TWICE as fast.",2)
D.dW_=new C.A("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.edn=new C.A("Make the output turn 4 times faster.",4)
D.e65=new C.A("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.e90=new C.A("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.e7A=new C.A("Make the output turn 3 times faster.",3)
D.e8i=new C.A("Make the output spin at the same speed as the input, using four different gears.",1)
D.asF=w([D.eeB,D.e0N,D.dW_,D.edn,D.e65,D.e90,D.e7A,D.e8i],C.az("O<+(n,P)>"))
D.cXp=w([1,2,3,4,5,6,7,8],x.n)
D.Oa=w([A.c3,A.cJ,A.bl,A.b_,A.bE,A.cH,A.c,A.cX],x.O)
D.cY5=w(["solar","turbine","crank","pot"],x.s)
D.cYp=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.cYt=w([0,0.35,0.75,1],x.n)
D.cYE=w([A.aF,A.cl,A.cJ,A.bn,A.d9,A.b2],x.O)
D.efT=new C.bz("drop","Drop",D.ah3)
D.efV=new C.bz("weight","Weight",Q.ahu)
D.eig=new C.bz("cannon","Newton's cannon",A.agr)
D.cZ2=w([D.efT,D.efV,D.eig],x.c)
D.ec3=new C.A("piano","Piano")
D.ebK=new C.A("organ","Organ")
D.e7h=new C.A("bell","Bell")
D.ec5=new C.A("pluck","Pluck")
D.edm=new C.A("synth","Synth")
D.e8W=new C.A("flute","Flute")
D.asW=w([D.ec3,D.ebK,D.e7h,D.ec5,D.edm,D.e8W],x.L)
D.cZt=w(["volts","level","ohms","on"],x.s)
D.d_z=w([A.j4,A.Al,A.Eh,A.ql,Z.EP,A.uH,A.x9,A.pb,A.hT,A.mI,A.hk,A.dP,A.hS,A.hU,A.m1,A.m2,A.xa,A.qp,A.lu,A.Eg,A.t0,A.L9,A.Ac,A.agX,A.KZ,A.x6,A.L7,A.agC,K.aho,A.kX],x.w)
D.d04=w([1,0.18,0.06],x.n)
D.d0r=w([0.72,1],x.n)
D.d0B=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.dJT={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.d2R=new C.bs(D.dJT,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aAQ={A:0,T:1,C:2,G:3}
D.a0i=new C.bs(D.aAQ,["U","A","G","C"],x.l)
D.d2Z=new C.bs(D.aAQ,["T","A","G","C"],x.l)
D.dIK={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.cPn=w([0,2,4,5,7,9,11],x.t)
D.cyO=w([0,2,3,5,7,8,10],x.t)
D.cU4=w([0,3,5,6,7,10],x.t)
D.AS=new C.bs(D.dIK,[D.ar8,D.cPn,D.cyO,D.cU4,D.ajU],C.az("bs<n,ak<I>>"))
D.dJH={A:0,T:1,U:2,C:3,G:4}
D.d3d=new C.bs(D.dJH,[A.cH,A.cF,A.cF,A.aL,A.bl],C.az("bs<n,w>"))
D.dIa={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.fdm=new B.xd("Switch",D.ahc,A.cJ,0,"Tap it to turn it ON or OFF.")
D.fdi=new B.xd("Blinker",A.od,A.bs,0,"Turns itself ON and OFF. Tap to change the speed.")
D.fdj=new B.xd("AND",D.ahs,A.cF,2,"ON only when BOTH inputs are ON.")
D.brh=new C.a0(63671,"MaterialIcons",!1)
D.fdh=new B.xd("OR",D.brh,A.bE,2,"ON when EITHER input is ON.")
D.fdk=new B.xd("XOR",H.Xr,A.c3,2,"ON when the inputs are DIFFERENT.")
D.fde=new B.xd("NAND",A.rR,A.b_,2,"OFF only when BOTH inputs are ON.")
D.bqo=new C.a0(63176,"MaterialIcons",!1)
D.fdf=new B.xd("NOR",D.bqo,A.ht,2,"ON only when BOTH inputs are OFF.")
D.fdg=new B.xd("NOT",V.EJ,A.cX,1,"Flips the signal: ON becomes OFF.")
D.fdl=new B.xd("Light",A.Ag,A.f_,1,"Glows when its input is ON.")
D.fdn=new B.xd("Buzzer",A.nu,A.cH,1,"Beeps while its input is ON.")
D.xO=new C.bs(D.dIa,[D.fdm,D.fdi,D.fdj,D.fdh,D.fdk,D.fde,D.fdf,D.fdg,D.fdl,D.fdn],C.az("bs<n,xd>"))
D.dID={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,radio:17,tv:18,fan:19,speaker:20,clock:21,calculator:22,phone:23,router:24,siren:25,toycar:26,lamp:27,lights:28,kettle:29}
D.bcv=new B.jB(20,4,13,!1)
D.bcM=new B.jB(14,5,13.5,!1)
D.bcF=new B.jB(9,2.4,10,!1)
D.bcR=new B.jB(7,5,12.5,!1)
D.bcI=new B.jB(8,3.5,12,!1)
D.bcs=new B.jB(15,2,6,!1)
D.bcP=new B.jB(45,6,13.5,!0)
D.bcD=new B.jB(10,8,13.5,!1)
D.bcw=new B.jB(25,3,12,!0)
D.bcB=new B.jB(35,4,12,!0)
D.bcC=new B.jB(40,4.5,9.5,!0)
D.bcE=new B.jB(55,3,9,!0)
D.bct=new B.jB(18,3,9,!1)
D.bcO=new B.jB(22,4,13.5,!1)
D.bcJ=new B.jB(16,5,13.5,!1)
D.bcz=new B.jB(30,4,9,!0)
D.bcV=new B.jB(5,3.5,13,!1)
D.bcu=new B.jB(30,2.5,10.5,!0)
D.bcK=new B.jB(50,5.5,13.5,!0)
D.bcU=new B.jB(12,2,9.5,!1)
D.bcH=new B.jB(16,1.3,9.5,!0)
D.bcQ=new B.jB(40,2.5,7,!0)
D.bcT=new B.jB(60,1.2,4.8,!0)
D.bcx=new B.jB(25,4,7,!0)
D.bcA=new B.jB(30,8,14,!0)
D.bcS=new B.jB(18,5,13.5,!0)
D.bcN=new B.jB(8,2,9.5,!1)
D.bcG=new B.jB(12,2.5,8,!1)
D.bcy=new B.jB(20,3.5,13.5,!0)
D.bcL=new B.jB(3.5,3,13,!1)
D.t9=new C.bs(D.dID,[D.bcv,D.bcM,D.bcF,D.bcR,D.bcI,D.bcs,D.bcP,D.bcD,D.bcw,D.bcB,D.bcC,D.bcE,D.bct,D.bcO,D.bcJ,D.bcz,D.bcV,D.bcu,D.bcK,D.bcU,D.bcH,D.bcQ,D.bcT,D.bcx,D.bcA,D.bcS,D.bcN,D.bcG,D.bcy,D.bcL],C.az("bs<n,jB>"))
D.dJF={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.ege=new C.bz(3,20,1.9)
D.efP=new C.bz(33,90,1.6)
D.eiE=new C.bz(52,15,3.2)
D.eiC=new C.bz(45,-100,1.8)
D.ehh=new C.bz(-15,-60,1.9)
D.egP=new C.bz(-25,140,2.4)
D.egH=new C.bz(-82,0,2.2)
D.ayl=new C.bs(D.dJF,[D.ege,D.efP,D.eiE,D.eiC,D.ehh,D.egP,D.egH],C.az("bs<n,+(P,P,P)>"))
D.cyf=w([A.A],x.M)
D.cyx=w([A.ax,A.aC],x.M)
D.cGD=w([A.ax,A.A,A.aC],x.M)
D.cHX=w([A.ax,A.kO,A.A,A.lb,A.aC],x.M)
D.cTP=w([A.ax,A.kO,A.a3,A.a7,A.lb,A.aC],x.M)
D.d48=new C.dX([1,D.cyf,2,D.cyx,3,D.cGD,4,A.at0,5,D.cHX,6,D.cTP],C.az("dX<I,ak<d5>>"))
D.dIL={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.eht=new C.bz(1,A.c4,"Hydrogen")
D.egt=new C.bz(4,A.bu,"Carbon")
D.efB=new C.bz(3,A.d9,"Nitrogen")
D.ehK=new C.bz(2,A.aF,"Oxygen")
D.ehb=new C.bz(2,A.cJ,"Sulfur")
D.eie=new C.bz(1,A.bn,"Chlorine")
D.uX=new C.bs(D.dIL,[D.eht,D.egt,D.efB,D.ehK,D.ehb,D.eie],C.az("bs<n,+(I,w,n)>"))
D.dJY={Calm:0,Box:1,Sleep:2}
D.cg3=w([4,2,6,0],x.n)
D.cga=w([4,4,4,4],x.n)
D.cgb=w([4,7,8,0],x.n)
D.Oz=new C.bs(D.dJY,[D.cg3,D.cga,D.cgb],C.az("bs<n,ak<P>>"))
D.dIj={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.vC=new B.Zf(0,"source")
D.cHv=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.fhL=new B.py("Clock",A.od,D.vC,A.bs,D.cHv)
D.fhH=new B.py("Button",A.xe,D.vC,A.aL,A.U)
D.cXt=w(["random","quick","slow"],x.s)
D.fhS=new B.py("Dice",A.m0,D.vC,A.c3,D.cXt)
D.bqZ=new C.a0(63484,"MaterialIcons",!1)
D.Ch=new B.Zf(1,"logic")
D.d0m=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.fhO=new B.py("Delay",D.bqZ,D.Ch,A.cF,D.d0m)
D.cQP=w(["fast","mid","slow"],x.s)
D.fhT=new B.py("Echo",A.agQ,D.Ch,A.bE,D.cQP)
D.fhQ=new B.py("Every 2nd",V.EJ,D.Ch,A.ht,A.U)
D.bqC=new C.a0(63309,"MaterialIcons",!1)
D.fhN=new B.py("Every 3rd",D.bqC,D.Ch,A.b_,A.U)
D.bsy=new C.a0(983902,"MaterialIcons",!1)
D.bJp=w(["50%","25%","75%"],x.s)
D.fhV=new B.py("Chance",D.bsy,D.Ch,A.cX,D.bJp)
D.pJ=new B.Zf(2,"out")
D.fhJ=new B.py("Light",A.Ag,D.pJ,A.f_,A.U)
D.fhK=new B.py("Burst",A.kX,D.pJ,A.c3,A.U)
D.fhI=new B.py("Ripple",A.xi,D.pJ,A.b9,A.U)
D.fhR=new B.py("Ball",A.ah5,D.pJ,A.cX,A.U)
D.fhP=new B.py("Comet",A.mI,D.pJ,A.bE,A.U)
D.bsj=new C.a0(983669,"MaterialIcons",!1)
D.fhU=new B.py("Shake",D.bsj,D.pJ,A.cH,A.U)
D.fhW=new B.py("Pop",A.Ei,D.pJ,A.bl,A.U)
D.fhM=new B.py("Wash",A.Lc,D.pJ,A.oM,A.U)
D.m9=new C.bs(D.dIj,[D.fhL,D.fhH,D.fhS,D.fhO,D.fhT,D.fhQ,D.fhN,D.fhV,D.fhJ,D.fhK,D.fhI,D.fhR,D.fhP,D.fhU,D.fhW,D.fhM],C.az("bs<n,py>"))
D.dJE={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"ORBIT STUDIO":5,"SWARM STUDIO":6,"FIREWORK DESIGNER":7,"CHAIN BURST":8,"CIRCUIT LAB":9,"PERIODIC TABLE":10,"BODY EXPLORER":11,"SPIN THE WHEEL":12,"FOCUS TIMER":13,"MEMORY MATCH":14,"LUCKY POCKET":15,"ELECTRONICS LAB":16,"AI INVENTOR":17,"MAGNET LAB":18,"RADIO LAB":19,"POWER PLANT":20,"POWER GRID":21,"INTERNET JOURNEY":22,"ROBOT CODER":23,"BUG SMASHER":24,"ROCKET LANDER":25,"DATA SNAKE":26,"BINARY 2048":27,"SIGNAL BREAKER":28,"PASSWORD LAB":29,"WAVE LAB":30,"BUG HUNT":31,"MOLECULE MAKER":32,"DNA LAB":33,"ECOSYSTEM LAB":34,"BALANCE LAB":35,"GEAR LAB":36,"OPTICS LAB":37,"LASER MAZE":38,"LIGHT MIXER":39,"ATOM BUILDER":40,"CIPHER LAB":41,"PIXEL TV":42}
D.ayu=new C.bs(D.dJE,["sparkle","sparkle","whoosh","click","bounce","space","bubble","pop","zap","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","lab","organic","organic","click","tech","sparkle","zap","sparkle","lab","tech","tech"],x.l)
D.dJI={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.AT=new C.bs(D.dJI,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.dIi={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.ef9=new C.A("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.dYA=new C.A("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.dYv=new C.A("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.e8h=new C.A("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.e9b=new C.A("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.e8d=new C.A("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.dWN=new C.A("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.e6l=new C.A("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.efh=new C.A("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.e9w=new C.A("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.e0f=new C.A("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.dWy=new C.A("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.e_o=new C.A("Movement","They pull your legs together and help you balance.")
D.e15=new C.A("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.dYI=new C.A("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.ecY=new C.A("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.ee_=new C.A("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.e66=new C.A("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.edK=new C.A("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.e4S=new C.A("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.e9E=new C.A("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.dWC=new C.A("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.e1s=new C.A("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.e9l=new C.A("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.e59=new C.A("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.edS=new C.A("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.e7M=new C.A("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.dWL=new C.A("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.ea7=new C.A("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.ecC=new C.A("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eaX=new C.A("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.dVo=new C.A("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.e7u=new C.A("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.e7y=new C.A("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.e24=new C.A("Movement","The chest muscles push your arms forward, like when you push a door.")
D.dYO=new C.A("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.e0V=new C.A("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.e6u=new C.A("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.ebD=new C.A("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.efe=new C.A("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.e9B=new C.A("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.dVb=new C.A("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.e6E=new C.A("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.dVJ=new C.A("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.ebT=new C.A("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.ecU=new C.A("Movement","These lift your foot up so your toes do not drag on the ground.")
D.e72=new C.A("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.ec7=new C.A("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.dWE=new C.A("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.edp=new C.A("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.dZR=new C.A("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.ebl=new C.A("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.e1O=new C.A("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.e55=new C.A("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.e9S=new C.A("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.edz=new C.A("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.edr=new C.A("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.edv=new C.A("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.e5y=new C.A("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eaC=new C.A("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eaU=new C.A("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.ede=new C.A("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.e71=new C.A("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.e3A=new C.A("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.e2u=new C.A("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.e7p=new C.A("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.e9L=new C.A("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.e44=new C.A("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.e4G=new C.A("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.e_a=new C.A("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.ecR=new C.A("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.e_T=new C.A("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.dVG=new C.A("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.e23=new C.A("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.dVB=new C.A("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.dZ7=new C.A("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.e28=new C.A("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.e00=new C.A("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.ea3=new C.A("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.e18=new C.A("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eeY=new C.A("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.e2C=new C.A("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.e5s=new C.A("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.e7T=new C.A("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.e07=new C.A("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.e_V=new C.A("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.d5d=new C.bs(D.dIi,[D.ef9,D.dYA,D.dYv,D.e8h,D.e9b,D.e8d,D.dWN,D.e6l,D.efh,D.e9w,D.e0f,D.dWy,D.e_o,D.e15,D.dYI,D.ecY,D.ee_,D.e66,D.edK,D.e4S,D.e9E,D.dWC,D.e1s,D.e9l,D.e59,D.edS,D.e7M,D.dWL,D.ea7,D.ecC,D.eaX,D.dVo,D.e7u,D.e7y,D.e24,D.dYO,D.e0V,D.e6u,D.ebD,D.efe,D.e9B,D.dVb,D.e6E,D.dVJ,D.ebT,D.ecU,D.e72,D.ec7,D.dWE,D.edp,D.dZR,D.ebl,D.e1O,D.e55,D.e9S,D.edz,D.edr,D.edv,D.e5y,D.eaC,D.eaU,D.ede,D.e71,D.e3A,D.e2u,D.e7p,D.e9L,D.e44,D.e4G,D.e_a,D.ecR,D.e_T,D.dVG,D.e23,D.dVB,D.dZ7,D.e28,D.e00,D.ea3,D.e18,D.eeY,D.e2C,D.e5s,D.e7T,D.e07,D.e_V],C.az("bs<n,+(n,n)>"))
D.d5f=new C.hH(A.G,11)
D.d7W=new B.Sk(null)
D.dbK=new B.So(null)
D.dbL=new B.Sp(null)
D.dbY=new B.Sq(null)
D.ddZ=new B.Ss(null)
D.de_=new B.St(null)
D.de0=new B.Su(null)
D.deO=new B.SP(null)
D.deQ=new B.T3(null)
D.deR=new B.T4(null)
D.deS=new B.T5(null)
D.dfp=new B.Tc(null)
D.dhk=new B.Tg(null)
D.dhl=new B.Ti(null)
D.dhm=new B.Tj(null)
D.dho=new B.Tk(null)
D.di8=new B.Tw(null)
D.diZ=new B.TB(null)
D.dj0=new B.TD(null)
D.dj5=new B.TN(null)
D.djg=new B.TO(null)
D.djM=new B.TP(null)
D.dlg=new B.TR(null)
D.dmE=new B.TT(null)
D.dmF=new B.TU(null)
D.do_=new B.TW(null)
D.dDT=new B.TX(null)
D.dDU=new B.TY(null)
D.dDV=new B.U0(null)
D.dDW=new B.U1(null)
D.dFP=new B.U9(null)
D.dFQ=new B.Ua(null)
D.dFY=new B.Uh(null)
D.dG6=new B.Ul(null)
D.dG7=new B.Um(null)
D.dG8=new B.a68(null)
D.dGF=new B.Uo(null)
D.dI7=new B.Us(null)
D.dK7=new C.v(0,118)
D.dK8=new C.v(0,13)
D.dK9=new C.v(0,17)
D.dKc=new C.v(0,330)
D.dKg=new C.v(0,-13)
D.aB_=new C.v(0,-14)
D.dKh=new C.v(0,-17)
D.dKi=new C.v(0,-18)
D.dKj=new C.v(0,-19)
D.dKm=new C.v(0,-26)
D.dKn=new C.v(0,-28)
D.dKo=new C.v(0,-31)
D.dKp=new C.v(0,-32)
D.v4=new C.v(0,-6)
D.dKq=new C.v(0,-6771)
D.dKr=new C.v(0,-9)
D.dKt=new C.v(10,20)
D.dKv=new C.v(10,-13)
D.dKw=new C.v(10,-22)
D.dKx=new C.v(10,-4)
D.a1K=new C.v(11,8)
D.dKz=new C.v(12,2)
D.dKA=new C.v(14,0)
D.dKB=new C.v(14,12)
D.dKC=new C.v(14,-17)
D.dKD=new C.v(14,-18)
D.aB3=new C.v(14,-3)
D.aB4=new C.v(14,-4)
D.dKE=new C.v(15,0)
D.dKF=new C.v(15,-12)
D.dKG=new C.v(16,-8)
D.dKH=new C.v(18,-12)
D.aB8=new C.v(20,0)
D.dKN=new C.v(20,15)
D.dKO=new C.v(20,-17)
D.dKP=new C.v(21,8)
D.dKR=new C.v(22,10)
D.aB9=new C.v(22,8)
D.dKS=new C.v(24,0)
D.dKT=new C.v(24,2)
D.dKV=new C.v(24,-18)
D.dKW=new C.v(24,-22)
D.dKX=new C.v(25,8)
D.dKY=new C.v(26,0)
D.dL3=new C.v(28,-30)
D.dL8=new C.v(30,18)
D.dL9=new C.v(30,2)
D.aBc=new C.v(34,-32)
D.Gp=new C.v(36,0)
D.dLe=new C.v(3,-1)
D.dLh=new C.v(42,0)
D.dLl=new C.v(4,11)
D.dLo=new C.v(4,-2)
D.dLs=new C.v(5,0)
D.dLt=new C.v(5,17)
D.dLu=new C.v(5,6)
D.dLD=new C.v(9,0)
D.dLH=new C.v(-2.6,-1)
D.dLI=new C.v(1.9,-0.8)
D.dLL=new C.v(-0.22,0.09)
D.dLQ=new C.v(2.6,1)
D.dMu=new C.v(-10,0)
D.dMv=new C.v(-10,12)
D.dMw=new C.v(-11,-2)
D.dMx=new C.v(-13,-5)
D.dMy=new C.v(-14,0)
D.dMz=new C.v(-14,2)
D.dMA=new C.v(-14,-12)
D.dMB=new C.v(-14,-19)
D.dMC=new C.v(-14,-23)
D.dMD=new C.v(-15,6)
D.dME=new C.v(-16,14)
D.dMF=new C.v(-16,-8)
D.dMG=new C.v(-17,-18)
D.dMH=new C.v(-17,-8)
D.dMJ=new C.v(-18,20)
D.dMK=new C.v(-18,-9)
D.aBn=new C.v(-20,0)
D.dMM=new C.v(-20,16)
D.dMN=new C.v(-20,-9)
D.Px=new C.v(-22,8)
D.dMO=new C.v(-22,-10)
D.dMP=new C.v(-22,-11)
D.dMQ=new C.v(-24,10)
D.dMR=new C.v(-24,14)
D.dMS=new C.v(-24,-22)
D.dMT=new C.v(-25,-11)
D.dMU=new C.v(-26,0)
D.dMV=new C.v(-26,-18)
D.dMW=new C.v(-2,-10)
D.dMX=new C.v(-2,-20)
D.dMY=new C.v(-2,-9)
D.dN2=new C.v(-42,0)
D.dN4=new C.v(-4,11)
D.dN5=new C.v(-4,-17)
D.dN6=new C.v(-4,-2)
D.dN8=new C.v(-5,0)
D.dN9=new C.v(-5,20)
D.dNa=new C.v(-5,6)
D.dNb=new C.v(-5,-4)
D.dNc=new C.v(-6,6)
D.dNd=new C.v(-6,-42)
D.dNe=new C.v(-7,-19)
D.dNf=new C.v(-8,-9)
D.dNg=new C.v(-9,0)
D.dNh=new C.v(-9,-22)
D.eRh=new C.x("Thinking\u2026",null,A.hY,null,null,null,null,null,null,null,null,null)
D.dO7=new C.C(A.kw,D.eRh,null)
D.f53=new C.x("Start from a ready-made board",null,A.fQ,null,null,null,null,null,null,null,null,null)
D.dOh=new C.C(Aa.wx,D.f53,null)
D.bk_=new C.M(4,0,4,14)
D.eN1=new C.F(!0,A.aA,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eS9=new C.x("Games and little helpers for a spare minute.",null,D.eN1,null,null,null,null,null,null,null,null,null)
D.dOp=new C.C(D.bk_,D.eS9,null)
D.f2a=new C.x("Tap to throw in a star",null,A.kh,null,null,null,null,null,null,null,null,null)
D.aX9=new C.cw(A.A,null,null,D.f2a,null)
D.dTs=new C.cF(0,null,0,14,null,null,D.aX9,null)
D.cRl=w([A.iV,A.bu],x.O)
D.aG7=new C.bR(A.A,0.5,A.w,null,0,D.cRl,null,null)
D.dU9=new C.bR(A.A,0.5,A.w,null,0,D.asO,null,null)
D.cJA=w([A.c,A.bK],x.O)
D.dUb=new C.bR(A.A,0.5,A.w,null,0,D.cJA,null,null)
D.dUc=new C.bR(A.A,0.5,A.w,null,0,I.arZ,null,null)
D.cYh=w([A.c4,A.lk],x.O)
D.aG8=new C.bR(A.A,0.5,A.w,null,0,D.cYh,null,null)
D.cpE=w([A.c,A.c4],x.O)
D.dUg=new C.bR(A.tR,0.5,A.w,null,0,D.cpE,null,null)
D.b2C=new C.w(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.b7h=new C.w(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.cIF=w([D.b2C,D.ab2,D.b7h],x.O)
D.cPx=w([0,0.7,1],x.n)
D.dUi=new C.bR(A.tR,0.5,A.w,null,0,D.cIF,D.cPx,null)
D.c34=w([A.fg,A.f0,A.jZ],x.O)
D.dUj=new C.bR(N.pK,0.5,A.w,null,0,D.c34,null,null)
D.cgh=w([A.u9,A.aX,A.K],x.O)
D.cVm=w([0.3,0.7,1],x.n)
D.dUk=new C.bR(A.A,0.5,A.w,null,0,D.cgh,D.cVm,null)
D.ciL=w([A.li,A.nU],x.O)
D.dUl=new C.bR(I.a6_,0.5,A.w,null,0,D.ciL,null,null)
D.cj0=w([A.eP,A.cV],x.O)
D.dUm=new C.bR(A.A,0.5,A.w,null,0,D.cj0,null,null)
D.cEq=w([A.u9,A.aX,A.fS],x.O)
D.dUn=new C.bR(A.A,0.5,A.w,null,0,D.cEq,null,null)
D.cxm=w([A.hg,A.aL,A.du],x.O)
D.dUp=new C.bR(A.tR,0.5,A.w,null,0,D.cxm,null,null)
D.cRR=w([A.lk,K.rn],x.O)
D.dUq=new C.bR(A.tR,0.5,A.w,null,0,D.cRR,null,null)
D.b2N=new C.w(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.b16=new C.w(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cGx=w([D.b2N,D.b16],x.O)
D.dUs=new C.bR(A.A,0.5,A.w,null,0,D.cGx,null,null)
D.b6N=new C.w(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.b53=new C.w(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.b57=new C.w(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.d_d=w([D.b6N,D.b53,D.b57],x.O)
D.cDi=w([0,0.65,1],x.n)
D.dUt=new C.bR(I.a61,0.5,A.w,null,0,D.d_d,D.cDi,null)
D.dUu=new C.bR(A.A,0.5,A.w,null,0,D.apD,null,null)
D.cXA=w([A.li,A.aX,A.fS],x.O)
D.dUy=new C.bR(A.A,0.5,A.w,null,0,D.cXA,null,null)
D.cYY=w([A.lk,A.hI],x.O)
D.dUB=new C.bR(A.A,0.5,A.w,null,0,D.cYY,null,null)
D.aGd=new C.b3(9,9)
D.dVi=new C.A(0,-4)
D.dZO=new C.A(0.22,4)
D.e5q=new C.A(0.8,-4)
D.eds=new C.A(0.58,4)
D.efW=new C.bz("Moon",1.62,4291941851)
D.egr=new C.bz("Neptune",11.15,4284524026)
D.eh_=new C.bz("Sun",274,4294688548)
D.ehd=new C.bz("Mercury",3.7,4288455599)
D.ehj=new C.bz("Earth",9.81,4281908728)
D.ehl=new C.bz("Mars",3.71,4294472049)
D.ehE=new C.bz("Venus",8.87,4294759245)
D.ehI=new C.bz("Saturn",10.44,4294829706)
D.ei0=new C.bz("Jupiter",24.79,4294677052)
D.ele=new C.ac(10,-8,18,-2)
D.elf=new C.ac(14,-14,20,14)
D.elg=new C.ac(20,-2,30,2)
D.eli=new C.ac(4,-13,30,-3)
D.elp=new C.ac(-12,14,12,22)
D.elq=new C.ac(-12,-22,12,8)
D.elr=new C.ac(-12,-25,12,19)
D.els=new C.ac(-12,-26,12,-6)
D.elt=new C.ac(-12,-6,10,6)
D.elu=new C.ac(-14,20,14,24)
D.elv=new C.ac(-14,6,14,10)
D.elw=new C.ac(-14,-26,14,18)
D.elx=new C.ac(-14,-4,14,20)
D.ely=new C.ac(-15,-29,15,25)
D.elz=new C.ac(-16,-16,16,16)
D.elA=new C.ac(-16,-22,-9,18)
D.elB=new C.ac(-16,-24,16,-10)
D.elD=new C.ac(-18,20,18,24)
D.elE=new C.ac(-18,-18,18,20)
D.elF=new C.ac(-20,12,20,22)
D.elG=new C.ac(-20,-28,20,26)
D.elH=new C.ac(-22,14,22,18)
D.aGw=new C.ac(-22,-26,22,24)
D.elI=new C.ac(-22,-3,22,3)
D.elJ=new C.ac(-22,-4,22,12)
D.elK=new C.ac(-24,-12,10,22)
D.elL=new C.ac(-24,-14,22,8)
D.elM=new C.ac(-24,-6,24,20)
D.aGx=new C.ac(-24,-9,24,9)
D.elN=new C.ac(-25,14,25,19)
D.elO=new C.ac(-26,-6,4,6)
D.aGy=new C.ac(-28,-13,28,13)
D.elP=new C.ac(-28,-16,28,16)
D.elQ=new C.ac(-28,-16,28,8)
D.elR=new C.ac(-28,-22,28,22)
D.elS=new C.ac(-30,-12,30,14)
D.elT=new C.ac(-30,-14,0,14)
D.elU=new C.ac(-30,-18,30,20)
D.elV=new C.ac(-30,-2,30,18)
D.elW=new C.ac(-30,-4,30,18)
D.elX=new C.ac(-32,-17,32,17)
D.elY=new C.ac(-33,-21,33,17)
D.elZ=new C.ac(-34,14,34,26)
D.a2E=new C.ac(-34,-18,34,18)
D.em_=new C.ac(-34,-4,34,7)
D.em0=new C.ac(-36,-24,36,20)
D.em1=new C.ac(-38,-22,38,22)
D.em2=new C.ac(-3,5,3,15)
D.em4=new C.ac(-46,-34,46,28)
D.em5=new C.ac(-48,-3,48,3)
D.em8=new C.ac(-6,18,24,24)
D.em9=new C.ac(-6,5,6,12)
D.ema=new C.ac(-6,-22,6,-15)
D.emb=new C.ac(-7,-8,7,14)
D.emc=new C.ac(-9,-16,9,22)
D.eme=new C.ac(14,-9,17.5,9)
D.dJz={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7}
D.eou=new C.f6(D.dJz,8,x.R)
D.dJB={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.Qg=new C.f6(D.dJB,5,x.R)
D.eqB=new C.ar(300,300)
D.er0=new C.ar(66,38)
D.aYn=new C.fb(2,null,null,null,null,A.bE,null,null,null,null)
D.erX=new C.a3(16,16,D.aYn,null)
D.aIi=new C.hJ(3,12,12,0.82,null)
D.f6E=new C.x("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aIt=new C.b_(D.f6E,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.cRT=w([A.cH,A.cJ,A.bl,A.b_,A.oM,A.cH],x.O)
D.exO=new C.fR(A.A,0,6.283185307179586,A.w,D.cRT,null,null)
D.eGe=new C.F(!0,A.aL,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.NH,null,null,null)
D.eyS=new C.es("You are here (Sun)",null,null,A.cU,null,null,null,null,null,null,D.eGe)
D.aKQ=new C.F(!0,A.aA,null,null,null,null,10.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyT=new C.es("What we see",null,null,A.cU,null,null,null,null,null,null,D.aKQ)
D.eDM=new C.F(!0,F.a8w,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyW=new C.es("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cU,null,null,null,null,null,null,D.eDM)
D.eDx=new C.F(!0,A.c1,null,null,null,null,15,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ez0=new C.es("Add atoms with the buttons below",null,null,A.cU,null,null,null,null,null,null,D.eDx)
D.aJg=new C.F(!0,A.c1,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezg=new C.F(!0,A.x,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezi=new C.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezN=new C.F(!0,A.bh,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eA4=new C.F(!0,A.cF,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAA=new C.F(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAQ=new C.F(!0,A.c,null,null,null,null,13.5,A.I,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBe=new C.F(!0,A.aQ,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBA=new C.F(!0,A.c1,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBK=new C.F(!0,A.al,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ep6=new C.cJ(A.hN,A.dH,6)
D.cM3=w([D.ep6],x.q)
D.eC2=new C.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cM3,null,null,null)
D.eC4=new C.F(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eC6=new C.F(!0,A.eO,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eC9=new C.F(!0,A.c,null,null,null,null,17,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCb=new C.F(!0,A.c1,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCz=new C.F(!0,A.aL,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJD=new C.F(!0,A.c1,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCU=new C.F(!0,A.aA,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCV=new C.F(!0,A.c1,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDP=new C.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEh=new C.F(!0,A.aA,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEK=new C.F(!0,A.aL,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEQ=new C.F(!0,A.c,null,null,null,null,12.5,A.a4,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFv=new C.F(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.NH,null,null,null)
D.eFW=new C.F(!0,A.aA,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eG3=new C.F(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGs=new C.F(!0,A.u6,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGG=new C.F(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGZ=new C.F(!0,A.bI,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eH2=new C.F(!0,A.c1,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eH5=new C.F(!0,A.aA,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHb=new C.F(!0,A.aA,null,null,null,null,18,A.I,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHD=new C.F(!0,A.c1,null,null,null,null,8.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHR=new C.F(!0,A.al,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKg=new C.F(!0,A.al,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eI5=new C.F(!0,A.al,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKi=new C.F(!0,A.c,null,null,null,null,9.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIC=new C.F(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eoY=new C.cJ(A.x,A.J,5)
D.cB7=w([D.eoY],x.q)
D.eID=new C.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cB7,null,null,null)
D.ep9=new C.cJ(A.aV,A.J,3)
D.d_G=w([D.ep9],x.q)
D.eII=new C.F(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d_G,null,null,null)
D.eIX=new C.F(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJ1=new C.F(!0,A.hK,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJh=new C.F(!0,A.c1,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJM=new C.F(!0,A.bl,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKj=new C.F(!0,A.c1,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKY=new C.F(!0,A.aA,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eL5=new C.F(!0,A.x,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKB=new C.F(!0,A.aA,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLz=new C.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLI=new C.F(!0,A.aL,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLP=new C.F(!0,A.aL,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Rc=new C.F(!0,A.al,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eM9=new C.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKN=new C.F(!0,A.al,null,null,null,null,12,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMc=new C.F(!0,A.aL,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4D=new C.F(!0,A.c,null,null,null,null,13,A.a4,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNf=new C.F(!0,A.u6,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCe=new C.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNV=new C.x("\u26a0\ufe0f ",null,D.eCe,null,null,null,null,null,null,null,null,null)
D.eO5=new C.x("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.Ra,null,null,null,null,null,null,null,null,null)
D.eOu=new C.x("LETTER COUNT OF THE SECRET VERSION",null,P.mg,null,null,null,null,null,null,null,null,null)
D.ePt=new C.x("Pick one, then change it and see what happens.",null,A.Ra,null,null,null,null,null,null,null,null,null)
D.eDj=new C.F(!0,A.al,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQp=new C.x("What do you want to invent? Type it below, or tap an idea.",null,D.eDj,null,null,null,null,null,null,null,null,null)
D.eQL=new C.x("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,S.a3T,null,null,null,null,null,null,null,null,null)
D.eRM=new C.x("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.eSk=new C.x("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hb,null,null,null,null,null,null,null,null,null)
D.eSp=new C.x("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.eSX=new C.x("Make it yours",null,A.l6,null,null,null,null,null,null,null,null,null)
D.eCB=new C.F(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTb=new C.x("Your mass never changes. What changes is how hard each world pulls on it.",null,D.eCB,null,null,null,null,null,null,null,null,null)
D.eHg=new C.F(!0,A.j_,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVj=new C.x("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.eHg,null,null,null,null,null,null,null,null,null)
D.eVy=new C.x("YOUR DECODING",null,P.mg,null,null,null,null,null,null,null,null,null)
D.eJx=new C.F(!0,A.c1,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWL=new C.x("WHAT HAPPENS",null,D.eJx,null,null,null,null,null,null,null,null,null)
D.eYh=new C.x("Check",null,null,null,null,null,null,null,null,null,null,null)
D.eYU=new C.x("Change the words and pictures on the three slabs.",null,A.Ra,null,null,null,null,null,null,null,null,null)
D.eZ3=new C.x("All the parts and wires will be removed.",null,A.hn,null,null,null,null,null,null,null,null,null)
D.eZm=new C.x("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.eZV=new C.x("Tap the crank on the board again and again to spin it faster.",null,A.hY,null,null,null,null,null,null,null,null,null)
D.f_I=new C.x("INTERCEPTED",null,P.mg,null,null,null,null,null,null,null,null,null)
D.f0v=new C.x("Remove this part",null,S.aJj,null,null,null,null,null,null,null,null,null)
D.f0M=new C.x("Clear the board?",null,A.di,null,null,null,null,null,null,null,null,null)
D.eJ2=new C.F(!0,A.bs,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f10=new C.x("How the Lab works",null,D.eJ2,null,null,null,null,null,null,null,null,null)
D.eAZ=new C.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1h=new C.x("Electronics Lab",null,D.eAZ,null,null,null,null,A.a2,null,1,null,null)
D.f1j=new C.x("?",null,I.aKK,null,null,null,null,null,null,null,null,null)
D.eHa=new C.F(!0,A.b_,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1n=new C.x("Planet Earth",null,D.eHa,null,null,null,null,null,null,null,null,null)
D.f2t=new C.x("Ready-made circuits",null,A.dQ,null,null,null,null,null,null,null,null,null)
D.f3i=new C.x("UNIVERSE EXPLORER",null,F.a40,null,null,null,null,null,null,null,null,null)
D.f5A=new C.x("SECRET VERSION",null,P.mg,null,null,null,null,null,null,null,null,null)
D.eLT=new C.F(!0,A.aL,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f65=new C.x("\u26a0 There is no air here, so a parachute will not work.",null,D.eLT,null,null,null,null,null,null,null,null,null)
D.f7e=new C.x("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,S.a3T,null,null,null,null,null,null,null,null,null)
D.f7R=new C.x("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.a4n,null,null,null,null,null,null,null,null,null)
D.f8b=new C.x("Tap it to change its setting. Drag from the right dot to connect.",null,A.l7,null,null,null,null,null,null,null,null,null)
D.f94=new C.x("TOOLBOX",null,F.a40,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.fVs=null
$.fVr=null
$.h0m=0
$.hrU=C.S(x.N,x.j)
$.hsu=C.S(x.N,x.j)
$.hmz=C.S(x.N,C.az("dz"))
$.caa=C.a([],C.az("O<afW>"))
$.fSw=0
$.aZk="music"
$.fUO=null
$.hsf=C.S(x.N,x.j)
$.hth=C.S(x.N,x.j)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hXR","bA0",()=>{var v="led"
return C.a([B.avm("Both together","Make the light glow only when BOTH switches are ON.",2,new B.f_X(),v),B.avm("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new B.f_Y(),v),B.avm("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new B.f_Z(),v),B.avm("Flip it","One switch only: make the light glow when the switch is OFF.",1,new B.f03(),v),B.avm("Not both","Make the light go OFF only when both switches are ON.",2,new B.f04(),v),B.avm("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new B.f05(),"buzzer")],C.az("O<b7c>"))})
w($,"hYh","bA2",()=>C.a([B.nv("UNIVERSE","Earth, space and gravity",A.Y8,A.b_,new B.f0l()),B.nv("ELECTRONICS LAB","Batteries, wires, real circuits",A6.Xu,A.b_,new B.f0m()),B.nv("AI INVENTOR","Say it, watch it get built",A.dP,A.bE,new B.f0n()),B.nv("DISCOVERY LAB","Body Explorer: a real 3D human",D.Xk,A.bl,new B.f0y()),B.nv("TOOLBOX","Converter, clock, games",K.afZ,A.cX,new B.f0B()),B.nv("MOLECULE MAKER","Join atoms into real molecules",A.KY,A.ht,new B.f0C()),B.nv("DNA LAB","Copy DNA, build a protein",D.Xk,A.c3,new B.f0D()),B.nv("ECOSYSTEM LAB","Grass, rabbits and foxes",A.x6,A.bl,new B.f0E()),B.nv("BALANCE LAB","Levers, weight and torque",D.bsq,A.aL,new B.f0F()),B.nv("GEAR LAB","Teeth, speed and force",A.EF,A.cX,new B.f0G()),B.nv("LASER MAZE","Bend the beam with mirrors",F.agi,A.aF,new B.f0H()),B.nv("LIGHT MIXER","Match colours with light",D.bqa,A.b9,new B.f0o()),B.nv("CIPHER LAB","Make and crack secret codes",A.xh,A.b_,new B.f0p()),B.nv("REACTION LAB","Wire parts together",A.xl,A.bs,new B.f0q()),B.nv("SPARK PAINTER","Paint with light",A.Xm,A.c3,new B.f0r()),B.nv("ROCKET LANDER","Land softly on the pad",A.mI,A.b_,new B.f0s()),B.nv("ORBIT STUDIO","Slingshot planets",A.m3,A.cX,new B.f0t()),B.nv("SWARM STUDIO","A living school of fish",A.KY,A.bl,new B.f0u()),B.nv("CHAIN BURST","One tap, a whole chain",A.hk,A.c3,new B.f0v()),B.nv("TITLE ANIMATOR","Make a moving title",A.xd,A.cJ,new B.f0w()),B.nv("CIRCUIT LAB","Connect logic, learn it",A.XO,A.cF,new B.f0x()),B.nv("MARBLE MUSIC","Marbles ring the notes",D.bpR,A.b9,new B.f0z()),B.nv("ORBIT SEQUENCER","Planets play the tune",D.bse,A.bE,new B.f0A())],C.az("O<boH>")))
w($,"hZL","Fn",()=>{var v,u,t=C.S(x.N,x.E)
for(v=0;v<46;++v){u=D.Np[v]
t.m(0,u.a,u)}return t})
w($,"hXS","bA1",()=>C.a([B.NI("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new B.f06()),B.NI("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new B.f07()),B.NI("Spin the motor","A battery and a motor in a loop will make it spin.",new B.f08()),B.NI("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new B.f09()),B.NI("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new B.f0a()),B.NI("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new B.f0_()),B.NI("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new B.f00()),B.NI("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new B.f01()),B.NI("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new B.f02())],C.az("O<b7d>")))
w($,"hYj","h8B",()=>C.a([B.ZK("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aL,A.cl,new B.f0P()),B.ZK("Focus Timer","Work, then rest","\u23f1\ufe0f",A.cH,A.bQ,new B.f0Q()),B.ZK("Breathe","Calm down in a minute","\ud83e\udee7",A.ht,A.cC,new B.f0R()),B.ZK("Draw Pad","Sketch and share","\ud83c\udfa8",A.bz,A.b2,new B.f0S()),B.ZK("Memory Match","Find the pairs","\ud83c\udccf",A.b_,A.cb,new B.f0T()),B.ZK("Simon Sounds","Copy the tune","\ud83c\udfb5",A.cJ,A.bn,new B.f0U()),B.ZK("Tip & Split","Share the bill","\ud83e\uddfe",A.bl,A.aW,new B.f0V()),B.ZK("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bE,A.aB,new B.f0W())],C.az("O<bq0>")))
w($,"hYi","h8A",()=>C.a([B.acO("EARTH GLOBE","Turn it, tap a country",A.m3,A.b_,new B.f0I()),B.acO("SOLAR SYSTEM","The Sun and its worlds",D.bpU,A.aL,new B.f0J()),B.acO("GRAVITY LAB","Drop, weigh, orbit",D.ah3,A.cX,new B.f0K()),B.acO("BLACK HOLE","Throw in a star",A.E5,A.bE,new B.f0L()),B.acO("GALAXY","Build, tilt, collide",A.wU,A.h2,new B.f0M()),B.acO("SIZE COMPARE","Earth next to a star",D.bqc,A.c3,new B.f0N()),B.acO("SEASONS & MOON","Why it is summer",A.ut,A.bs,new B.f0O())],C.az("O<bpW>")))})()};
(a=>{a["0UZqbQvo6TEsx50WaqPLCHn59QQ="]=a.current})($__dart_deferred_initializers__);