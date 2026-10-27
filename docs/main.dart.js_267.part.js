((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A0,A1,V,A2,F,N,A3,W,X,L,G,A4,A5,Y,A6,T,A7,A8,Q,A9,Aa,R,M,Ab,S,Ac,Ad,P,I,E,C={
bvC(d){return C.hwZ(d)},
hwZ(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bvC=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.qi(B.mL(""),d,A.hc,null).cJ(0,A.UW),$async$bvC)
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
return B.i($async$bvC,v)},
hIg(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.NI[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.dp(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ae(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.kZ(D.NI,new C.few())
if(w==null)w=A.d.gL(D.NI)
s=B.T(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.K)(r),++u){l=r[u].a
k=l[0]
l=$.tx().h(0,l[1])
l.toString
s.m(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.K)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gL(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.ahv(w.a,w.b,m,w,s,!1)},
hC6(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.J(D.NZ,new C.f6h(),x.bd).aF(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
hQ0(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cP(b2,"{")
v=A.a.o0(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.Q.aD(0,A.a.am(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aZ(a5)
r=0
for(a6=x.j,a7=J.aU(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gT(a7)
p=B.t(J.q(q,"kind"))
o=B.t(J.q(q,"id"))
if(!$.tx().an(0,p)||J.eR(s,o)||J.aa(t)>=8)continue
J.cb(s,o)
n=B.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.d_J[a9]
l=J.q(q,m)
if(typeof l=="number")J.aE(n,m,l)}k=A.k.E(typeof J.q(q,"x")=="number"?B.f3(J.q(q,"x")):0.2+A.k.F(r,3)*0.3,0.16,0.84)
j=A.k.E(typeof J.q(q,"y")=="number"?B.f3(J.q(q,"y")):0.25+A.k.ak(r,3)*0.3,0.1,0.9)
J.cb(t,new B.eP([o,p,k,j,n]));++r}if(J.aa(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aU(a6.a(J.q(u,"wires")));a5.C();){h=a5.gT(a5)
g=a6.a(h)
if(J.aa(g)<4)continue
f=B.t(J.q(g,0))
e=B.t(J.q(g,2))
d=A.o.E(A.k.N(B.f3(J.q(g,1))),0,1)
a0=A.o.E(A.k.N(B.f3(J.q(g,3))),0,1)
if(J.eR(s,f)&&J.eR(s,e)&&!J.y(f,e))J.cb(i,new B.cH([f,d,e,a0]))}if(J.aa(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.L.a(J.q(u,"steps"))
a0=J.aU(a0==null?A.cL:a0)
while(a0.C()){a2=a0.gT(a0)
J.cb(a1,B.t(a2))}a3=a1
a0=J.q(u,"title")
a0=B.t(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new C.md(a0,B.t(a1==null?"":a1),t,i,A.U)
a0=a4.a
a1=a4.b
d=J.aa(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=B.t(a5==null?"":a5)
return new C.ahv(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hGU(d){var w,v,u=C.fNO()
d.B(u)
for(w=0;w<60;++w)u.a5j(0,0.03333333333333333)
v=u.a
return A.d.ba(v,new C.fbT(u))&&!A.d.ea(v,new C.fbU())},
hGT(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.K)(l),++u){t=l[u];++v
k.m(0,t.a,$.tx().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.K)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.t(t.e)+" V")
if(p==="resistor")q.push(""+A.k.U(t.r)+" ohms")
if(A.d.t(D.cZi,p))q.push("level "+A.k.U(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fr
o=p>0.05?"working (glow "+A.k.U(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aF(q,", ")+")"
s.push(B.t(p)+n+": "+o+", current "+A.k.a9(Math.abs(t.dy)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.K)(w),++u){m=w[u]
l.push(B.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aF(s,"\n")+"\nWires: "+A.d.aF(l,"; ")},
hvx(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.K)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aF(v,"\n")+"\n\n"}v=A.d.aF(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
hIf(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.tx().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<56;++u){s=D.NZ[u]
if(A.d.ba(w,new C.fet(s)))if(!B.dp(r,s.b.toLowerCase(),0))v=B.dp(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ae("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.a4(w,new C.feu(e),B.U(w).k("a4<1>")).gai(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ae("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.a9(A.d.cG(w,0,new C.fev())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ae("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gL(w)
w=$.tx().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ahv:function ahv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
few:function few(){},
f6h:function f6h(){},
fbT:function fbT(d){this.a=d},
fbU:function fbU(){},
fet:function fet(d){this.a=d},
feu:function feu(d){this.a=d},
fev:function fev(){},
TC:function TC(d,e){this.c=d
this.a=e},
bgt:function bgt(d,e,f,g,h){var _=this
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
dW8:function dW8(d){this.a=d},
dW9:function dW9(d,e,f){this.a=d
this.b=e
this.c=f},
dWa:function dWa(d){this.a=d},
dWl:function dWl(d){this.a=d},
dWm:function dWm(d,e){this.a=d
this.b=e},
dWh:function dWh(d){this.a=d},
dWf:function dWf(d,e){this.a=d
this.b=e},
dWg:function dWg(d,e,f){this.a=d
this.b=e
this.c=f},
dWi:function dWi(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dWd:function dWd(d){this.a=d},
dWe:function dWe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dWj:function dWj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dWc:function dWc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dWk:function dWk(d,e){this.a=d
this.b=e},
dWb:function dWb(d,e){this.a=d
this.b=e},
dWp:function dWp(d){this.a=d},
dWo:function dWo(d){this.a=d},
dWq:function dWq(d){this.a=d},
dWn:function dWn(d){this.a=d},
dWr:function dWr(d,e){this.a=d
this.b=e},
dWs:function dWs(d,e){this.a=d
this.b=e},
dWt:function dWt(d,e){this.a=d
this.b=e},
dWu:function dWu(d,e){this.a=d
this.b=e},
bvX(d,e,f){var w=null
return B.v(B.a([B.d(d,w,w,w,w,w,w,D.aK1,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.R,0,A.p)},
h01(d,e,f,g){var w=null,v=B.m(24),u=B.H(f.j(0.6),A.r,1)
return B.au(B.p(w,B.v(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.ar,B.d(e,w,w,w,w,w,w,A.Hv,A.L,w,w),A.ay,B.c9(A.fG,g,A.bx,0,8)],x.p),A.m,w,A.e,A.R,0,A.p),A.h,w,w,new B.o(D.Tr,w,u,v,w,w,A.n),w,w,w,w,A.a8,w,w,w),w,w,w)},
EN:function EN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uh:function uh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
U3:function U3(d){this.a=d},
aBt:function aBt(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.kA$=i
_.fF$=j
_.fc$=k
_.bp$=l
_.a6$=m
_.c=_.a=null},
eaE:function eaE(){},
eaY:function eaY(d){this.a=d},
eaX:function eaX(d,e){this.a=d
this.b=e},
eaZ:function eaZ(){},
eb_:function eb_(){},
eaG:function eaG(d,e,f){this.a=d
this.b=e
this.c=f},
eaF:function eaF(d,e){this.a=d
this.b=e},
eav:function eav(d){this.a=d},
eaw:function eaw(d){this.a=d},
eax:function eax(d){this.a=d},
eay:function eay(d){this.a=d},
eaz:function eaz(d){this.a=d},
eaA:function eaA(d){this.a=d},
eaB:function eaB(d){this.a=d},
eaC:function eaC(d){this.a=d},
eaD:function eaD(d){this.a=d},
eat:function eat(d){this.a=d},
eau:function eau(d){this.a=d},
eas:function eas(d){this.a=d},
eaR:function eaR(d,e){this.a=d
this.b=e},
eaM:function eaM(d){this.a=d},
eaN:function eaN(d){this.a=d},
eaJ:function eaJ(d){this.a=d},
eaO:function eaO(d){this.a=d},
eaI:function eaI(d){this.a=d},
eaP:function eaP(d){this.a=d},
eaQ:function eaQ(d){this.a=d},
eaH:function eaH(d){this.a=d},
eaS:function eaS(d,e){this.a=d
this.b=e},
eaL:function eaL(d,e){this.a=d
this.b=e},
eaT:function eaT(d){this.a=d},
eaU:function eaU(d){this.a=d},
eaV:function eaV(d){this.a=d},
eaW:function eaW(d){this.a=d},
eaK:function eaK(d){this.a=d},
bdw:function bdw(d,e){this.b=d
this.a=e},
aJg:function aJg(){},
btA:function btA(){},
czq(){var w=0,v=B.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$czq=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.ty().jV(0,"assets/data/body3d.bin"),$async$czq)
case 3:d=a1
$.fWt=J.eO(A.dD.gaO(d),d.byteOffset,d.byteLength)
t=B.bDI(d)
s=t.getUint32(4,!0)
r=B.a([],x.B)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jf(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.cPz[i]
g=B.aY((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a19(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aPE))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.b6I(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$czq,v)},
aP2:function aP2(d,e,f){this.a=d
this.b=e
this.c=f},
a19:function a19(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b6I:function b6I(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Sv:function Sv(d){this.a=d},
azV:function azV(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.kA$=t
_.fF$=u
_.fc$=v
_.bp$=w
_.a6$=a0
_.c=_.a=null},
dxM:function dxM(d){this.a=d},
dxL:function dxL(d,e){this.a=d
this.b=e},
dxo:function dxo(d,e){this.a=d
this.b=e},
dxp:function dxp(){},
dxN:function dxN(){},
dxq:function dxq(d,e){this.a=d
this.b=e},
dxr:function dxr(d){this.a=d},
dxs:function dxs(){},
dxt:function dxt(d){this.a=d},
dxv:function dxv(d,e){this.a=d
this.b=e},
dxu:function dxu(d){this.a=d},
dxl:function dxl(d,e,f){this.a=d
this.b=e
this.c=f},
dxm:function dxm(d){this.a=d},
dxn:function dxn(d){this.a=d},
dxC:function dxC(d){this.a=d},
dxD:function dxD(d,e){this.a=d
this.b=e},
dxE:function dxE(d,e){this.a=d
this.b=e},
dxF:function dxF(d){this.a=d},
dxB:function dxB(d,e){this.a=d
this.b=e},
dxG:function dxG(d,e){this.a=d
this.b=e},
dxA:function dxA(d,e){this.a=d
this.b=e},
dxH:function dxH(d){this.a=d},
dxz:function dxz(d){this.a=d},
dxI:function dxI(d){this.a=d},
dxy:function dxy(d){this.a=d},
dxJ:function dxJ(d){this.a=d},
dxx:function dxx(d){this.a=d},
dxK:function dxK(d){this.a=d},
dxw:function dxw(d){this.a=d},
aIi:function aIi(){},
aIj:function aIj(){},
bWJ:function bWJ(d){var _=this
_.a=d
_.d=_.c=_.b=null},
bWK:function bWK(d,e){this.a=d
this.b=e},
bWL:function bWL(d){this.a=d},
avu(d,e,f,g,h){return new C.b7q(d,e,f,g,h)},
fEU(d,e,f,g,h,i){return $.hsX.ce(0,d+"|"+B.t(e)+"|"+f.l()+"|"+B.t(g),new C.cGc(d,e,f,i,g,h))},
xi:function xi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Bg:function Bg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
n_:function n_(d,e,f){this.a=d
this.b=e
this.c=f},
b7q:function b7q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f0Q:function f0Q(){},
f0R:function f0R(){},
f0S:function f0S(){},
f0Z:function f0Z(){},
f1_:function f1_(){},
f10:function f10(){},
SA:function SA(d){this.a=d},
azY:function azY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.kA$=n
_.fF$=o
_.fc$=p
_.bp$=q
_.a6$=r
_.c=_.a=null},
dzX:function dzX(d){this.a=d},
dzB:function dzB(d,e){this.a=d
this.b=e},
dzE:function dzE(){},
dzY:function dzY(){},
dzz:function dzz(d,e){this.a=d
this.b=e},
dzA:function dzA(d,e){this.a=d
this.b=e},
dzF:function dzF(d,e,f){this.a=d
this.b=e
this.c=f},
dzu:function dzu(){},
dzv:function dzv(){},
dzw:function dzw(d){this.a=d},
dzx:function dzx(d,e){this.a=d
this.b=e},
dzy:function dzy(d,e,f){this.a=d
this.b=e
this.c=f},
dzG:function dzG(){},
dzH:function dzH(d,e){this.a=d
this.b=e},
dzI:function dzI(d){this.a=d},
dzD:function dzD(d,e){this.a=d
this.b=e},
dzC:function dzC(d){this.a=d},
dzt:function dzt(d,e,f){this.a=d
this.b=e
this.c=f},
dzR:function dzR(d){this.a=d},
dzQ:function dzQ(d){this.a=d},
dzS:function dzS(d){this.a=d},
dzP:function dzP(d){this.a=d},
dzN:function dzN(d){this.a=d},
dzO:function dzO(d){this.a=d},
dzM:function dzM(d){this.a=d},
dzJ:function dzJ(d){this.a=d},
dzL:function dzL(d){this.a=d},
dzT:function dzT(d,e){this.a=d
this.b=e},
dzU:function dzU(d,e){this.a=d
this.b=e},
dzV:function dzV(d){this.a=d},
dzK:function dzK(d){this.a=d},
dzW:function dzW(d,e){this.a=d
this.b=e},
b7I:function b7I(d,e){this.b=d
this.a=e},
cGc:function cGc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aIo:function aIo(){},
btj:function btj(){},
hjS(){return new C.LL(null)},
oa(d,e,f,g,h){return new C.boX(d,e,f,g,h)},
bno(d,e,f){return A.k.E((d-e)/(f-e),0,1)},
fFp(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
LL:function LL(d){this.a=d},
IU:function IU(d,e){this.a=d
this.b=e},
zz:function zz(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aAe:function aAe(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dF9:function dF9(d,e){this.a=d
this.b=e},
dF8:function dF8(d){this.a=d},
dFb:function dFb(d,e){this.a=d
this.b=e},
dFa:function dFa(d){this.a=d},
boX:function boX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f1g:function f1g(){},
f1h:function f1h(){},
f1i:function f1i(){},
f1t:function f1t(){},
f1v:function f1v(){},
f1w:function f1w(){},
f1x:function f1x(){},
f1y:function f1y(){},
f1z:function f1z(){},
f1A:function f1A(){},
f1B:function f1B(){},
f1j:function f1j(){},
f1k:function f1k(){},
f1l:function f1l(){},
f1m:function f1m(){},
f1n:function f1n(){},
f1o:function f1o(){},
f1p:function f1p(){},
f1q:function f1q(){},
f1r:function f1r(){},
f1s:function f1s(){},
f1u:function f1u(){},
bnp:function bnp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eIM:function eIM(d){this.a=d},
eIL:function eIL(d,e){this.a=d
this.b=e},
eIJ:function eIJ(d){this.a=d},
eIN:function eIN(d){this.a=d},
eIK:function eIK(d,e){this.a=d
this.b=e},
acD:function acD(d,e,f){this.c=d
this.d=e
this.a=f},
aby:function aby(d,e,f){this.c=d
this.d=e
this.a=f},
Op:function Op(d,e,f,g,h,i,j,k,l,m){var _=this
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
bon:function bon(d,e){this.b=d
this.a=e},
bnT:function bnT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b6p:function b6p(d,e){this.b=d
this.a=e},
aEp:function aEp(d,e){this.c=d
this.a=e},
aEq:function aEq(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cO$=e
_.b0$=f
_.c=_.a=null},
eIs:function eIs(d){this.a=d},
eIr:function eIr(d){this.a=d},
eIq:function eIq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIp:function eIp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIn:function eIn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIm:function eIm(d,e,f){this.a=d
this.b=e
this.c=f},
eIo:function eIo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eIl:function eIl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIA:function eIA(d){this.a=d},
eIz:function eIz(d){this.a=d},
eIB:function eIB(d,e){this.a=d
this.b=e},
eIC:function eIC(d,e){this.a=d
this.b=e},
eID:function eID(d,e){this.a=d
this.b=e},
eIy:function eIy(d,e,f){this.a=d
this.b=e
this.c=f},
eIE:function eIE(d,e,f){this.a=d
this.b=e
this.c=f},
eIx:function eIx(d){this.a=d},
eIt:function eIt(d){this.a=d},
eIF:function eIF(d){this.a=d},
eIG:function eIG(d){this.a=d},
eIw:function eIw(d,e){this.a=d
this.b=e},
eIH:function eIH(d,e){this.a=d
this.b=e},
eIv:function eIv(d,e){this.a=d
this.b=e},
eII:function eII(d,e){this.a=d
this.b=e},
eIu:function eIu(d,e){this.a=d
this.b=e},
eIj:function eIj(){},
eIk:function eIk(){},
bn3:function bn3(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bmw:function bmw(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b74:function b74(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bmy:function bmy(d,e,f){this.b=d
this.c=e
this.a=f},
bqq:function bqq(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aK4:function aK4(){},
h1p(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ao(0,new B.u(w,0)),u=e.aE(0,new B.u(w,0)),t=1-f,s=3*t
return d.aN(0,t*t*t).ao(0,v.aN(0,s*t*f)).ao(0,u.aN(0,s*f*f)).ao(0,e.aN(0,f*f*f))},
bdv(d,e,f,g,h,i){return $.htx.ce(0,d+"|"+B.t(e)+"|"+f.l()+"|"+B.t(g),new C.d9E(d,e,f,i,g,h))},
Zn:function Zn(d,e){this.a=d
this.b=e},
pz:function pz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qd:function qd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Bk:function Bk(d,e){this.a=d
this.b=e},
Xm:function Xm(d,e){this.a=d
this.b=e},
act:function act(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ZA:function ZA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Bu:function Bu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a9r:function a9r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a9I:function a9I(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abC:function abC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bdt:function bdt(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bs$=_.bK$=0},
d9I:function d9I(d){this.a=d},
d9J:function d9J(d){this.a=d},
d9F:function d9F(d,e){this.a=d
this.b=e},
d9G:function d9G(d){this.a=d},
d9H:function d9H(d){this.a=d},
d9K:function d9K(d){this.a=d},
d9L:function d9L(d){this.a=d},
d9M:function d9M(d){this.a=d},
d9N:function d9N(d){this.a=d},
d9O:function d9O(d){this.a=d},
d9P:function d9P(d){this.a=d},
d9Q:function d9Q(d){this.a=d},
d9R:function d9R(d){this.a=d},
d9S:function d9S(d){this.a=d},
EA:function EA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
U2:function U2(d){this.a=d},
aBs:function aBs(d,e,f,g,h,i,j){var _=this
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
_.bp$=i
_.a6$=j
_.c=_.a=null},
e9Z:function e9Z(d){this.a=d},
e9O:function e9O(d){this.a=d},
e9Q:function e9Q(){},
e9R:function e9R(){},
e9U:function e9U(){},
e9V:function e9V(d,e,f){this.a=d
this.b=e
this.c=f},
e9W:function e9W(d){this.a=d},
e9X:function e9X(d){this.a=d},
e9S:function e9S(){},
e9T:function e9T(d){this.a=d},
eao:function eao(d){this.a=d},
e9Y:function e9Y(){},
e9K:function e9K(d){this.a=d},
ea0:function ea0(d){this.a=d},
ea_:function ea_(d){this.a=d},
ea2:function ea2(){},
ea1:function ea1(d,e){this.a=d
this.b=e},
e9N:function e9N(){},
e9L:function e9L(d){this.a=d},
e9M:function e9M(d){this.a=d},
eam:function eam(d){this.a=d},
eal:function eal(d){this.a=d},
ean:function ean(d){this.a=d},
eac:function eac(d,e){this.a=d
this.b=e},
eak:function eak(d){this.a=d},
eai:function eai(d){this.a=d},
eaj:function eaj(d){this.a=d},
eah:function eah(d){this.a=d},
eag:function eag(d){this.a=d},
ead:function ead(d){this.a=d},
eae:function eae(d){this.a=d},
eaf:function eaf(d){this.a=d},
e9P:function e9P(){},
ea8:function ea8(d){this.a=d},
ea9:function ea9(d){this.a=d},
ea7:function ea7(d){this.a=d},
eaa:function eaa(d){this.a=d},
ea6:function ea6(d){this.a=d},
eab:function eab(d){this.a=d},
ea5:function ea5(d){this.a=d},
ea4:function ea4(d){this.a=d},
ea3:function ea3(d,e){this.a=d
this.b=e},
bdu:function bdu(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
d9E:function d9E(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aJe:function aJe(){},
bi_:function bi_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Og:function Og(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Uh:function Uh(d){this.a=d},
bh4:function bh4(d,e,f,g,h,i,j,k){var _=this
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
_.bp$=j
_.a6$=k
_.c=_.a=null},
ek9:function ek9(d){this.a=d},
ek7:function ek7(d){this.a=d},
ek8:function ek8(){},
ejL:function ejL(){},
ejK:function ejK(){},
ejU:function ejU(d,e){this.a=d
this.b=e},
ejW:function ejW(d){this.a=d},
ek_:function ek_(d){this.a=d},
ejV:function ejV(d){this.a=d},
ek0:function ek0(d){this.a=d},
ek1:function ek1(d){this.a=d},
ek2:function ek2(d,e){this.a=d
this.b=e},
ejT:function ejT(d,e){this.a=d
this.b=e},
ek3:function ek3(d){this.a=d},
ejS:function ejS(d){this.a=d},
ek4:function ek4(d,e){this.a=d
this.b=e},
ejR:function ejR(d,e){this.a=d
this.b=e},
ek5:function ek5(d){this.a=d},
ejQ:function ejQ(d,e){this.a=d
this.b=e},
ek6:function ek6(d){this.a=d},
ejP:function ejP(d){this.a=d},
ejX:function ejX(d){this.a=d},
ejO:function ejO(d){this.a=d},
ejY:function ejY(d){this.a=d},
ejN:function ejN(d){this.a=d},
ejZ:function ejZ(d,e){this.a=d
this.b=e},
ejM:function ejM(d,e){this.a=d
this.b=e},
boi:function boi(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
Ut:function Ut(d){this.a=d},
aBG:function aBG(d,e,f,g){var _=this
_.d=d
_.e=$
_.f=e
_.r="bounce"
_.w=3
_.x=56
_.y=0
_.z=!0
_.Q=0
_.bp$=f
_.a6$=g
_.c=_.a=null},
eqJ:function eqJ(d,e){this.a=d
this.b=e},
eqK:function eqK(d,e,f){this.a=d
this.b=e
this.c=f},
eqL:function eqL(d){this.a=d},
eqI:function eqI(){},
eqM:function eqM(d,e){this.a=d
this.b=e},
eqH:function eqH(d,e){this.a=d
this.b=e},
eqN:function eqN(d,e){this.a=d
this.b=e},
eqG:function eqG(d,e){this.a=d
this.b=e},
eqO:function eqO(d){this.a=d},
eqF:function eqF(d){this.a=d},
eqP:function eqP(d,e){this.a=d
this.b=e},
eqE:function eqE(d,e){this.a=d
this.b=e},
eqQ:function eqQ(d){this.a=d},
eqR:function eqR(d){this.a=d},
eqD:function eqD(d,e){this.a=d
this.b=e},
aJn:function aJn(){},
aJt:function aJt(){},
YT:function YT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
U_:function U_(d){this.a=d},
aBl:function aBl(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.kA$=i
_.fF$=j
_.fc$=k
_.bp$=l
_.a6$=m
_.c=_.a=null},
e6R:function e6R(d){this.a=d},
e6S:function e6S(d,e){this.a=d
this.b=e},
e6F:function e6F(d,e){this.a=d
this.b=e},
e6G:function e6G(d){this.a=d},
e6D:function e6D(d){this.a=d},
e6E:function e6E(d){this.a=d},
e6C:function e6C(d){this.a=d},
e6H:function e6H(d){this.a=d},
e6B:function e6B(d,e){this.a=d
this.b=e},
e6J:function e6J(d){this.a=d},
e6A:function e6A(d,e){this.a=d
this.b=e},
e6K:function e6K(d){this.a=d},
e6z:function e6z(d,e){this.a=d
this.b=e},
e6L:function e6L(d){this.a=d},
e6y:function e6y(d){this.a=d},
e6M:function e6M(d){this.a=d},
e6x:function e6x(d){this.a=d},
e6N:function e6N(d){this.a=d},
e6w:function e6w(d){this.a=d},
e6O:function e6O(d){this.a=d},
e6P:function e6P(d){this.a=d},
e6Q:function e6Q(d){this.a=d},
e6v:function e6v(d){this.a=d},
e6I:function e6I(d){this.a=d},
bhN:function bhN(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
a9y:function a9y(d,e,f){this.a=d
this.b=e
this.c=f},
Uo:function Uo(d){this.a=d},
bh9:function bh9(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.kA$=j
_.fF$=k
_.fc$=l
_.bp$=m
_.a6$=n
_.c=_.a=null},
eqa:function eqa(d){this.a=d},
eqb:function eqb(d){this.a=d},
eq9:function eq9(d){this.a=d},
eq_:function eq_(d,e){this.a=d
this.b=e},
eq0:function eq0(d){this.a=d},
epY:function epY(d){this.a=d},
epZ:function epZ(d){this.a=d},
epX:function epX(d){this.a=d},
epQ:function epQ(d){this.a=d},
epR:function epR(d){this.a=d},
epP:function epP(d){this.a=d},
eq1:function eq1(d,e){this.a=d
this.b=e},
epW:function epW(d,e){this.a=d
this.b=e},
eq2:function eq2(d,e){this.a=d
this.b=e},
epV:function epV(d,e){this.a=d
this.b=e},
eq3:function eq3(d){this.a=d},
epU:function epU(d){this.a=d},
eq4:function eq4(d){this.a=d},
epT:function epT(d,e){this.a=d
this.b=e},
eq5:function eq5(d){this.a=d},
epS:function epS(d,e){this.a=d
this.b=e},
eq6:function eq6(d){this.a=d},
epO:function epO(d,e){this.a=d
this.b=e},
eq7:function eq7(d){this.a=d},
epN:function epN(d,e){this.a=d
this.b=e},
eq8:function eq8(d){this.a=d},
epM:function epM(d,e){this.a=d
this.b=e},
bp8:function bp8(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aa0:function aa0(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
Sy:function Sy(d){this.a=d},
azX:function azX(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.kA$=i
_.fF$=j
_.fc$=k
_.bp$=l
_.a6$=m
_.c=_.a=null},
dz5:function dz5(d){this.a=d},
dz4:function dz4(d,e){this.a=d
this.b=e},
dz6:function dz6(){},
dz7:function dz7(d){this.a=d},
dyW:function dyW(d,e){this.a=d
this.b=e},
dyZ:function dyZ(d){this.a=d},
dyY:function dyY(d,e){this.a=d
this.b=e},
dyX:function dyX(d,e){this.a=d
this.b=e},
dz2:function dz2(d,e,f){this.a=d
this.b=e
this.c=f},
dz1:function dz1(d){this.a=d},
dz_:function dz_(d){this.a=d},
dz0:function dz0(d){this.a=d},
dz3:function dz3(d){this.a=d},
b7p:function b7p(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cFK:function cFK(d){this.a=d},
aIm:function aIm(){},
bti:function bti(){},
aJa:function aJa(){},
btz:function btz(){},
aJq:function aJq(){},
btH:function btH(){},
Ew:function Ew(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
aaP:function aaP(d,e,f){this.a=d
this.b=e
this.c=f},
TU:function TU(d){this.a=d},
bgI:function bgI(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.kA$=j
_.fF$=k
_.fc$=l
_.bp$=m
_.a6$=n
_.c=_.a=null},
e2k:function e2k(d,e){this.a=d
this.b=e},
e2J:function e2J(d){this.a=d},
e2y:function e2y(d){this.a=d},
e2p:function e2p(d){this.a=d},
e2z:function e2z(d,e){this.a=d
this.b=e},
e2A:function e2A(d){this.a=d},
e2o:function e2o(d){this.a=d},
e2w:function e2w(d){this.a=d},
e2x:function e2x(d){this.a=d},
e2v:function e2v(d){this.a=d},
e2B:function e2B(d,e){this.a=d
this.b=e},
e2u:function e2u(d,e){this.a=d
this.b=e},
e2C:function e2C(d,e){this.a=d
this.b=e},
e2t:function e2t(d,e){this.a=d
this.b=e},
e2D:function e2D(d,e){this.a=d
this.b=e},
e2s:function e2s(d,e){this.a=d
this.b=e},
e2E:function e2E(d){this.a=d},
e2r:function e2r(d,e){this.a=d
this.b=e},
e2F:function e2F(d){this.a=d},
e2q:function e2q(d){this.a=d},
e2G:function e2G(d){this.a=d},
e2n:function e2n(d){this.a=d},
e2H:function e2H(d){this.a=d},
e2m:function e2m(d){this.a=d},
e2I:function e2I(d){this.a=d},
e2l:function e2l(d){this.a=d},
beo:function beo(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
abj:function abj(d,e){this.a=d
this.b=e
this.c=-1000},
TZ:function TZ(d){this.a=d},
aBk:function aBk(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.kA$=i
_.fF$=j
_.fc$=k
_.bp$=l
_.a6$=m
_.c=_.a=null},
e6e:function e6e(d,e){this.a=d
this.b=e},
e6f:function e6f(d,e,f){this.a=d
this.b=e
this.c=f},
e6m:function e6m(d){this.a=d},
e6l:function e6l(d){this.a=d},
e6n:function e6n(d,e){this.a=d
this.b=e},
e6o:function e6o(d){this.a=d},
e6k:function e6k(d){this.a=d},
e6p:function e6p(d){this.a=d},
e6j:function e6j(d,e){this.a=d
this.b=e},
e6q:function e6q(d,e){this.a=d
this.b=e},
e6i:function e6i(d,e){this.a=d
this.b=e},
e6r:function e6r(d,e){this.a=d
this.b=e},
e6h:function e6h(d,e){this.a=d
this.b=e},
e6s:function e6s(d){this.a=d},
e6t:function e6t(d){this.a=d},
e6g:function e6g(d){this.a=d},
e6u:function e6u(d){this.a=d},
bhO:function bhO(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aJ8:function aJ8(){},
btx:function btx(){},
aJ9:function aJ9(){},
bty:function bty(){},
eYa(d,e,f){var w=null,v=e.j(0.12),u=B.m(16),t=B.H(e.j(0.4),A.r,1),s=x.p,r=B.a([B.D(B.d(d,w,w,w,w,w,w,D.a4O,w,w,w),1)],s)
if(f!=null)A.d.v(r,B.a([A.aa,f],s))
return B.p(w,B.B(r,A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.iK,w,w,1/0)},
hIF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=B.T(x.N,w)
for(u=0;u<d.length;d.length===j||(0,B.K)(d),++u){t=d[u]
s=v.h(0,t)
v.m(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gJ(j))return!1
for(j=j.gdH(j),j=j.gah(j);j.C();){s=j.gT(j)
if(v.h(0,s.a)!==s.b)return!1}r=B.bY(d.length,0,!1,w)
q=d.length
p=J.e_(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=B.a([],j)
e.bG(0,new C.feN(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.uY.h(0,d[n]).a)return!1
m=B.eN([0],w)
l=B.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,B.K)(j),++u){k=j[u]
if(m.K(0,k))l.push(k)}return m.a===d.length},
fHR(d){var w="TCAG",v=B.aJ(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cP(w,v[0])*16+A.a.cP(w,v[1])*4+A.a.cP(w,v[2])]},
rD:function rD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b6i:function b6i(d,e){this.a=d
this.b=e},
feN:function feN(d,e){this.a=d
this.b=e},
TX:function TX(d){this.a=d},
aBi:function aBi(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
e5J:function e5J(d){this.a=d},
e5I:function e5I(d,e){this.a=d
this.b=e},
e5v:function e5v(d,e){this.a=d
this.b=e},
e5p:function e5p(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e5q:function e5q(d){this.a=d},
e5u:function e5u(d,e){this.a=d
this.b=e},
e5t:function e5t(d,e){this.a=d
this.b=e},
e5r:function e5r(d){this.a=d},
e5s:function e5s(d,e){this.a=d
this.b=e},
e5D:function e5D(){},
e5E:function e5E(d){this.a=d},
e5C:function e5C(d){this.a=d},
e5F:function e5F(d){this.a=d},
e5B:function e5B(d){this.a=d},
e5z:function e5z(d){this.a=d},
e5A:function e5A(d,e){this.a=d
this.b=e},
e5w:function e5w(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5y:function e5y(d){this.a=d},
e5G:function e5G(d,e){this.a=d
this.b=e},
e5x:function e5x(d,e){this.a=d
this.b=e},
e5H:function e5H(d,e){this.a=d
this.b=e},
bf4:function bf4(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dhL:function dhL(d,e){this.a=d
this.b=e},
SV:function SV(d){this.a=d},
bfY:function bfY(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dH_:function dH_(d){this.a=d},
dGZ:function dGZ(d,e){this.a=d
this.b=e},
dGP:function dGP(d){this.a=d},
dGO:function dGO(){},
dGQ:function dGQ(d){this.a=d},
dGN:function dGN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dGY:function dGY(){},
dGT:function dGT(){},
dGU:function dGU(d,e){this.a=d
this.b=e},
dGS:function dGS(d,e){this.a=d
this.b=e},
dGV:function dGV(d){this.a=d},
dGR:function dGR(d){this.a=d},
dGW:function dGW(d,e){this.a=d
this.b=e},
dGX:function dGX(d,e){this.a=d
this.b=e},
Ta:function Ta(d){this.a=d},
aAq:function aAq(d,e,f,g,h){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=0
_.z=_.y=_.x=1
_.as=_.Q=0
_.at="Grass feeds rabbits, rabbits feed foxes. Keep all three alive!"
_.bp$=g
_.a6$=h
_.c=_.a=null},
dJP:function dJP(d){this.a=d},
dJO:function dJO(d,e){this.a=d
this.b=e},
dJC:function dJC(){},
dJB:function dJB(d,e){this.a=d
this.b=e},
dJD:function dJD(d){this.a=d},
dJH:function dJH(d){this.a=d},
dJG:function dJG(d,e){this.a=d
this.b=e},
dJI:function dJI(d){this.a=d},
dJF:function dJF(d,e){this.a=d
this.b=e},
dJJ:function dJJ(d){this.a=d},
dJE:function dJE(d,e){this.a=d
this.b=e},
dJK:function dJK(d){this.a=d},
dJL:function dJL(d){this.a=d},
dJM:function dJM(d){this.a=d},
dJN:function dJN(d){this.a=d},
bar:function bar(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
cZe:function cZe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cZg:function cZg(d,e,f){this.a=d
this.b=e
this.c=f},
cZf:function cZf(d,e){this.a=d
this.b=e},
aIz:function aIz(){},
bws(d,e,f){var w=null,v=e.j(0.12),u=B.m(16),t=B.H(e.j(0.4),A.r,1),s=x.p,r=B.a([B.D(B.d(d,w,w,w,w,w,w,D.a4O,w,w,w),1)],s)
if(f!=null)A.d.v(r,B.a([A.aa,f],s))
return B.p(w,B.B(r,A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.iK,w,w,1/0)},
f9H(d,e,f,g,h){var w,v,u=null,t=B.ib(u,u,u,u,B.dl(u,u,u,u,u,u,u,u,u,B.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),e),A.a5,A.cg,u,A.ek,A.cf)
t.f_()
w=t.b
v=w.c
w=w.a.c
w=f.aE(0,new B.u(v/2,w.gbh(w)/2))
t.a4(d,w)},
hFO(){var w,v,u,t,s,r,q,p,o=new B.eU()
o.dM(42)
w=B.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.ak(t,4)
r=B.aZ(v)
q=B.a([],u)
while(q.length<s){p=1+o.aB(5)
if(r.K(0,p))q.push(new B.A(p,1+o.aB(2+A.o.ak(t,3))))}A.d.b_(q,new C.faD())
w.push(new C.aOT(q))}return w},
a_M(d,e){var w,v,u,t
for(w=new B.Vt(d),v="";w.C();){u=B.jx(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+B.jx(65+A.o.F(A.o.F(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
hSf(d,e){var w,v,u,t,s,r,q,p=B.ae("[^A-Z]",!0,!1,!1,!1),o=B.aJ(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new B.Vt(d),v=0,u="";w.C();){t=B.jx(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.F(v,p)
u+=B.jx(65+A.o.F(A.o.F(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aOT:function aOT(d){this.a=d},
bCm:function bCm(){},
faD:function faD(){},
Sq:function Sq(d){this.a=d},
bfF:function bfF(d,e,f,g,h,i){var _=this
_.d=d
_.e=0
_.f=e
_.r=f
_.w=0
_.x=$
_.y=g
_.bp$=h
_.a6$=i
_.c=_.a=null},
dvg:function dvg(){},
dvt:function dvt(d){this.a=d},
dvs:function dvs(d,e,f){this.a=d
this.b=e
this.c=f},
dvu:function dvu(d){this.a=d},
dvr:function dvr(d,e){this.a=d
this.b=e},
dvh:function dvh(d,e){this.a=d
this.b=e},
dvm:function dvm(){},
dvn:function dvn(d){this.a=d},
dvl:function dvl(d){this.a=d},
dvo:function dvo(d,e){this.a=d
this.b=e},
dvk:function dvk(d,e){this.a=d
this.b=e},
dvp:function dvp(d,e){this.a=d
this.b=e},
dvj:function dvj(d,e){this.a=d
this.b=e},
dvq:function dvq(d){this.a=d},
dvi:function dvi(d){this.a=d},
b6u:function b6u(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cyh:function cyh(d,e){this.a=d
this.b=e},
To:function To(d){this.a=d},
bg9:function bg9(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bp$=g
_.a6$=h
_.c=_.a=null},
dNQ:function dNQ(d){this.a=d},
dNP:function dNP(d,e){this.a=d
this.b=e},
dNR:function dNR(d){this.a=d},
dNO:function dNO(d,e){this.a=d
this.b=e},
dNG:function dNG(d,e,f){this.a=d
this.b=e
this.c=f},
dNK:function dNK(d){this.a=d},
dNJ:function dNJ(d){this.a=d},
dNL:function dNL(d,e){this.a=d
this.b=e},
dNI:function dNI(d,e){this.a=d
this.b=e},
dNM:function dNM(d){this.a=d},
dNH:function dNH(d,e){this.a=d
this.b=e},
dNN:function dNN(d,e){this.a=d
this.b=e},
bbU:function bbU(d,e,f){this.b=d
this.c=e
this.a=f},
d5c:function d5c(d,e){this.a=d
this.b=e},
d5d:function d5d(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Sz:function Sz(d){this.a=d},
bfS:function bfS(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dzs:function dzs(d){this.a=d},
dzr:function dzr(d,e){this.a=d
this.b=e},
dza:function dza(){},
dzj:function dzj(d){this.a=d},
dzi:function dzi(){},
dzk:function dzk(d){this.a=d},
dzh:function dzh(){},
dzl:function dzl(d){this.a=d},
dzg:function dzg(d){this.a=d},
dzm:function dzm(d){this.a=d},
dzf:function dzf(d){this.a=d},
dzn:function dzn(d){this.a=d},
dze:function dze(d){this.a=d},
dzo:function dzo(d,e){this.a=d
this.b=e},
dzd:function dzd(d,e){this.a=d
this.b=e},
dzp:function dzp(d){this.a=d},
dzc:function dzc(d,e){this.a=d
this.b=e},
dzq:function dzq(d){this.a=d},
dzb:function dzb(d,e){this.a=d
this.b=e},
aIe:function aIe(){},
aIH:function aIH(){},
h6k(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aE(0,e).gcj()*0.1
return new B.u((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
fNO(){var w=B.a([],x.bz),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a2q(w,v,u,A.cB,B.T(x.N,x.y))},
hdP(d,e,f){var w=d.c,v=e===0?-42:42
return new B.u(w*f.a+v,d.d*f.b)},
fc:function fc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
rQ:function rQ(d,e,f,g){var _=this
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
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=0},
a89:function a89(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
a9d:function a9d(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2q:function a2q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bHW:function bHW(){},
bI6:function bI6(d){this.a=d},
bI1:function bI1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bI7:function bI7(d){this.a=d},
bI8:function bI8(d){this.a=d},
bIa:function bIa(d){this.a=d},
bIb:function bIb(d){this.a=d},
bI9:function bI9(d){this.a=d},
bIc:function bIc(d,e,f){this.a=d
this.b=e
this.c=f},
bId:function bId(d){this.a=d},
bHY:function bHY(d){this.a=d},
bHZ:function bHZ(d){this.a=d},
bHX:function bHX(d){this.a=d},
bI_:function bI_(d,e,f){this.a=d
this.b=e
this.c=f},
bI0:function bI0(d){this.a=d},
bHV:function bHV(d){this.a=d},
bIe:function bIe(d,e){this.a=d
this.b=e},
bI2:function bI2(d,e){this.a=d
this.b=e},
bI5:function bI5(d){this.a=d},
bI4:function bI4(d){this.a=d},
bI3:function bI3(d){this.a=d},
agi:function agi(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bDn:function bDn(){},
bDo:function bDo(){},
md:function md(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cfO:function cfO(d){this.a=d},
hPZ(b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=null,b1=b7.fr>0&&!b7.x,b2=new C.fqc(),b3=new C.fqe(),b4=new C.fqf(),b5=new C.fqd()
switch(b7.b){case"fridge":w=b4.$4(-16,-28,32,54)
b6.aJ(w,b5.$3(new B.a7(w.a,w.b,w.c,w.d),A.bN,A.bI))
b6.bE(D.dOo,D.dMg,b3.$2(A.dy,1.4))
b6.bE(D.dM6,D.dM5,b3.$2(A.bt,2.4))
b6.bE(D.dM7,T.aBh,b3.$2(A.bt,2.4))
if(b1){v=b2.$1(A.fe.j(0.5))
v.z=A.OO
b6.ae(D.dLR,14,v)
for(v=b8*0.6,u=0;u<3;++u){t=A.k.F(v+u/3,1)
b9.$5(b6,"\u2744",new B.u(-12+u*9,4+t*16),A.c.j(1-t),9)}}return!0
case"washer":b6.aJ(b4.$4(-22,-26,44,50),b5.$3(D.aGU,A.aN,A.cp))
b6.ae(A.cF,16,b2.$1(A.bt))
b6.ae(A.cF,13,b2.$1(b1?A.aY.j(0.85):A.M))
if(b1){v=b6.a
J.bD(v.save())
v.translate(0,4)
b6.iU(0,b7.y*0.6)
for(u=0;u<3;++u){s=u*2.09
r=Math.cos(s)
s=Math.sin(s)
q=b3.$2(A.af,3).I()
v.drawLine.apply(v,[0,0,r*11,s*11,q])
q.delete()}v.restore()
for(s=b8*0.8,u=0;u<4;++u){t=A.k.F(s+u*0.25,1)
r=Math.sin(u*2+b8)
q=b2.$1(A.c.j(0.8*(1-t))).I()
v.drawCircle(r*9,4-t*12,1.6+t*2,q)
q.delete()}}b6.ae(D.dOk,2.4,b2.$1(b1?A.bm:A.aj))
b6.ae(D.dP_,2.4,b2.$1(A.aj))
return!0
case"blender":b6.aJ(b4.$5(-14,14,28,12,4),b2.$1(A.ew))
v=$.W().r
s=x.v
p=new B.aO(v,A.ap,b0,b0,B.a([],s))
p.D(new B.b4(-16,-26))
p.D(new B.ao(16,-26))
p.D(new B.ao(12,14))
p.D(new B.ao(-12,14))
p.D(new B.bE())
b6.aM(p,b2.$1(A.fe.j(0.35)))
if(b1){v=new B.aO(v,A.ap,b0,b0,B.a([],s))
v.D(new B.b4(-14,-10))
v.D(new B.ao(14,-10))
v.D(new B.ao(12,14))
v.D(new B.ao(-12,14))
v.D(new B.bE())
b6.aM(v,b2.$1(A.aD.j(0.7)))}b6.aM(p,b3.$2(A.af,1.6))
v=b6.a
J.bD(v.save())
v.translate(0,10)
b6.iU(0,b7.y)
b6.bE(D.a1W,D.aBv,b3.$2(A.c3,3))
v.restore()
if(b1)for(s=b8*9,r=b8*1.6,u=0;u<3;++u){o=Math.sin(s+u*2)
n=A.k.F(r+u*0.33,1)
q=b2.$1(A.fj).I()
v.drawCircle(o*9,-10-n*12,2.4,q)
q.delete()}return!0
case"drone":b6.aJ(b4.$5(-10,-4,20,10,4),b2.$1(A.aI))
b6.ae(A.i8,3,b2.$1(b1?A.bm:A.aj))
m=b1?-3+Math.sin(b8*4)*2:4
for(v=b6.a,s=-4+m,r=-6+m,l=0;l<2;++l){k=D.asv[l]
q=b3.$2(A.bt,3).I()
v.drawLine.apply(v,[k*0.4,1,k,s,q])
q.delete()
J.bD(v.save())
v.translate(k,r)
q=b3.$2(A.c.j(b1?0.35:0.9),3).I()
v.drawLine.apply(v,[-11,0,11,0,q])
q.delete()
if(b1){o=B.cJ(A.J,6,24+Math.sin(b7.y*3)*4)
q=b2.$1(A.c.j(0.25)).I()
v.drawOval(B.c8(o),q)
q.delete()}v.restore()}return!0
case"drill":w=new B.aO($.W().r,A.ap,b0,b0,B.a([],x.v))
w.D(new B.b4(-24,-12))
w.D(new B.ao(10,-12))
w.D(new B.ao(10,2))
w.D(new B.ao(-2,2))
w.D(new B.ao(-6,22))
w.D(new B.ao(-16,22))
w.D(new B.ao(-14,2))
w.D(new B.ao(-24,2))
w.D(new B.bE())
b6.aM(w,b5.$3(D.enS,A.aK,A.dl))
b6.aX(D.enh,b2.$1(A.eC))
v=b6.a
J.bD(v.save())
v.translate(18,-5)
b6.iU(0,b7.y*2)
b6.bE(A.J,D.dMa,b3.$2(A.c3,2.4))
b6.bE(A.a1U,D.dM9,b3.$2(A.hQ,1))
v.restore()
if(b1)for(s=b8*3,r=b8*20,u=0;u<4;++u){t=A.k.F(s+u*0.25,1)
o=Math.sin(u*3+r)
q=b2.$1(A.dU.j(1-t)).I()
v.drawCircle(34+t*6,-5+o*6*t,1.4,q)
q.delete()}return!0
case"torch":if(b1){u=A.k.E(0.5+0.12*(Math.abs(b7.dx)-2),0.5,1)
v=new B.aO($.W().r,A.ap,b0,b0,B.a([],x.v))
v.D(new B.b4(16,-6))
v.D(new B.ao(52,-26))
v.D(new B.ao(52,18))
v.D(new B.ao(16,4))
v.D(new B.bE())
b6.aM(v,b2.$1(A.bH.j(0.35*u)))}b6.aJ(b4.$5(-26,-6,30,12,3),b5.$3(D.enX,A.bv,A.cJ))
j=new B.aO($.W().r,A.ap,b0,b0,B.a([],x.v))
j.D(new B.b4(4,-6))
j.D(new B.ao(18,-12))
j.D(new B.ao(18,12))
j.D(new B.ao(4,6))
j.D(new B.bE())
b6.aM(j,b2.$1(A.ew))
b6.ae(D.dMe,7,b2.$1(b1?A.c:A.eC))
return!0
case"neon":b6.aJ(b4.$5(-30,-14,60,28,6),b2.$1(K.q9))
if(b1)i=b7.ax>0.5||A.o.F(A.k.bt(b8*17),3)!==0
else i=!1
h=i?A.bU:D.b7C
if(i){v=b4.$5(-28,-12,56,24,6)
s=b2.$1(A.bU.j(0.35))
s.z=A.lz
b6.aJ(v,s)}b6.aJ(b4.$5(-27,-11,54,22,5),b3.$2(h,2.2))
b9.$5(b6,"OPEN",D.dOu,h,17)
return!0
case"microwave":b6.aJ(b4.$4(-30,-18,60,38),b5.$3(D.eo2,A.c3,A.bv))
v=b4.$5(-26,-14,38,30,3)
b6.aJ(v,b2.$1(b1?A.bH.j(0.75):A.aF))
if(b1){v=b6.a
J.bD(v.save())
v.translate(-7,8)
b6.iU(0,b7.y*0.5)
b6.j3(B.cJ(A.J,7,22),b2.$1(A.dl))
v.restore()}b6.aJ(b4.$5(15,-14,12,12,2),b2.$1(K.q9))
if(b1)b9.$5(b6,"0:"+A.a.aS(A.o.u(59-A.o.F(A.k.bt(b8),60)),2,"0"),D.dMf,A.bh,6.5)
b6.ae(D.dMr,4,b2.$1(A.eC))
return!0
case"doorbell":b6.aJ(b4.$5(-16,-26,32,52,8),b2.$1(A.aJ))
b6.ae(A.PC,10,b2.$1(b1?A.cz:A.bt))
v=b6.a
J.bD(v.save())
v.translate(0,-8)
b6.iU(0,b1?Math.sin(b8*16)*0.45:0)
b9.$5(b6,"\ud83d\udd14",D.dP1,A.c,16)
v.restore()
b6.ae(A.jQ,6,b2.$1(A.d6))
b6.ae(A.jQ,6,b3.$2(A.c,1.6))
if(b1)for(s=b8*14,u=1;u<=2;++u){r=B.bT(A.PC,14+u*6+A.k.F(s,6))
q=b3.$2(A.cz.j(0.9-u*0.3),1.8).I()
v.drawArc.apply(v,[B.c8(r),-51.56620156177409,103.13240312354819,!1,q])
q.delete()}return!0
case"camera":b6.bE(D.dOt,D.dOY,b3.$2(A.bt,4))
v=b6.a
J.bD(v.save())
b6.iU(0,b1?Math.sin(b8*0.9)*0.18:0)
b6.aJ(b4.$5(-24,-14,46,22,5),b5.$3(D.enT,A.c3,A.aj))
b6.ae(D.aBi,8,b2.$1(A.aF))
b6.ae(D.aBi,4.5,b2.$1(b1?A.aY:A.cJ))
b6.ae(D.dOr,2.2,b2.$1(b1&&A.o.F(A.k.bt(b8*1.6),2)===0?A.aD:A.k3))
v.restore()
if(b1)b9.$5(b6,"REC",D.dOC,A.aD,9)
return!0
case"console":b6.aJ(b4.$5(-28,-22,56,44,8),b5.$3(D.eo_,A.jh,A.eZ))
b6.aJ(b4.$5(-20,-17,40,22,3),b2.$1(A.dw))
if(b1){v=b8*2.3
b6.ae(new B.u(Math.sin(v)*14,-6+Math.cos(b8*3.1)*6),2.6,b2.$1(A.c))
s=-9+Math.sin(v+0.4)*6
b6.aX(new B.a7(-18,s,-15.6,s+8),b2.$1(A.bh))
v=-9+Math.sin(v-0.4)*6
b6.aX(new B.a7(15.6,v,18,v+8),b2.$1(A.bU))}b6.ae(D.dOn,4,b2.$1(A.aT))
b6.ae(D.dMb,2.4,b2.$1(A.aD))
b6.ae(D.dMo,2.4,b2.$1(A.bm))
return!0
case"heartmon":b6.aJ(b4.$5(-30,-22,60,44,6),b2.$1(A.aF))
b6.aJ(b4.$5(-26,-18,52,28,3),b2.$1(A.dw))
if(b1){v=$.W()
s=B.a([],x.v)
g=new B.aO(v.r,A.ap,b0,b0,s)
for(v=b8*0.5,k=-25;k<=25;++k){t=A.k.F((k+25)/50-v,1)
if(t<0.1)f=Math.sin(t/0.1*3.141592653589793)*-1
else if(t<0.14)f=0.6
else{r=t<0.2?-0.4:0
f=r}e=-4+f*11
if(k===-25){r=new B.b4(k,e)
s.push(r)
o=g.f
if(o!=null)r.bx(o)
r=g.e
if(r!=null)r.a.delete()
g.e=null}else{r=new B.ao(k,e)
s.push(r)
o=g.f
if(o!=null)r.bx(o)
r=g.e
if(r!=null)r.a.delete()
g.e=null}}b6.aM(g,b3.$2(A.bh,1.8))
b9.$5(b6,"72",D.dMc,A.hl,11)
v=b8*9
b9.$5(b6,"\u2665",D.dOG,A.hl.j((Math.sin(v)+1.4)/2.4),9+Math.sin(v)*1.2)}b6.ae(D.dOw,3,b2.$1(b1?A.bm:A.bt))
return!0
case"aquarium":v=b4.$5(-26,-20,52,40,4)
b6.aJ(v,b2.$1(A.cE.j(b1?0.5:0.3)))
b6.aJ(b4.$5(-26,-20,52,40,4),b3.$2(A.af,1.6))
b6.aX(D.enV,b2.$1(D.b2D))
if(b1){v=b8*1.1
s=Math.sin(v)
r=b6.a
J.bD(r.save())
r.translate(s*14,-2+Math.sin(b8*2)*3)
if(Math.cos(v)<0)b6.wa(0,-1,1)
b6.j3(B.cJ(A.J,8,14),b2.$1(A.cP))
v=new B.aO($.W().r,A.ap,b0,b0,B.a([],x.v))
v.D(new B.b4(-6,0))
v.D(new B.ao(-12,-4))
v.D(new B.ao(-12,4))
v.D(new B.bE())
b6.aM(v,b2.$1(A.cj))
b6.ae(D.dMR,1.2,b2.$1(A.x))
r.restore()
for(v=b8*0.7,u=0;u<5;++u){t=A.k.F(v+u*0.2,1)
s=Math.sin(t*8+u)
o=A.o.F(u,2)
q=b3.$2(A.af,1).I()
r.drawCircle(-18+s*2,13-t*30,1.4+o,q)
q.delete()}}return!0
case"lighthouse":v=$.W().r
s=x.v
d=new B.aO(v,A.ap,b0,b0,B.a([],s))
d.D(new B.b4(-9,22))
d.D(new B.ao(-5,-16))
d.D(new B.ao(5,-16))
d.D(new B.ao(9,22))
d.D(new B.bE())
b6.aM(d,b5.$3(D.eok,A.c,A.bO))
b6.aX(D.eoj,b2.$1(b1?A.dU:A.bt))
r=new B.aO(v,A.ap,b0,b0,B.a([],s))
r.D(new B.b4(-7,-22))
r.D(new B.ao(0,-29))
r.D(new B.ao(7,-22))
r.D(new B.bE())
b6.aM(r,b2.$1(A.f_))
if(b1){a0=Math.sin(b7.y*0.3)
v=new B.aO(v,A.ap,b0,b0,B.a([],s))
v.D(new B.b4(0,-19))
s=a0*34
v.D(new B.ao(s,-26))
v.D(new B.ao(s,-12))
v.D(new B.bE())
b6.aM(v,b2.$1(A.dU.j(0.45)))
v=b2.$1(A.dU.j(0.35))
v.z=A.OO
b6.ae(D.dLS,14,v)}return!0
case"discoball":b6.bE(D.dLX,E.aBf,b3.$2(A.eC,1.4))
b6.ae(A.J,16,b5.$3(D.enG,A.aN,A.aj))
for(v=b6.a,u=0;u<8;++u){s=-12+u*3.4
q=b3.$2(A.dr,0.7).I()
v.drawLine.apply(v,[-16,s,16,s,q])
q.delete()}for(u=0;u<5;++u){a0=b7.y*0.5+u*1.26
s=Math.cos(a0)
r=Math.sin(a0)
o=Math.cos(a0)
q=b3.$2(A.dr,0.7).I()
v.drawLine.apply(v,[s*16*0.3,r*16*0.3,o*16,0,q])
q.delete()}if(b1)for(s=b8*2,r=b8*9,u=0;u<10;++u){a0=s+u*0.63
a1=22+A.o.F(u,3)*6
o=Math.cos(a0)
n=Math.sin(a0)
q=b2.$1(D.cQr[A.o.F(u,4)].j(0.5+0.5*Math.sin(r+u))).I()
v.drawCircle(o*a1,n*a1*0.8,1.8,q)
q.delete()}return!0
case"robot":b6.aJ(b4.$5(-14,-4,28,24,5),b5.$3(D.enE,A.cp,A.aj))
b6.aJ(b4.$5(-12,-26,24,20,5),b5.$3(D.enx,A.aJ,A.bI))
b6.bE(D.dLW,D.dLY,b3.$2(A.bt,1.6))
b6.ae(D.dLZ,2.2,b2.$1(b1?A.aD:A.bt))
a2=b1&&A.k.F(b8*0.8,1)>0.08
for(v=b6.a,l=0;l<2;++l){k=D.cVx[l]
if(b1)s=a2?A.b6:A.im
else s=A.cJ
q=b2.$1(s).I()
v.drawCircle(k,-17,3.2,q)
q.delete()}J.bD(v.save())
v.translate(14,0)
b6.iU(0,b1?-0.6+Math.sin(b8*5)*0.6:0.3)
b6.bE(A.J,D.a1R,b3.$2(A.bI,4))
v.restore()
b6.bE(D.dOg,D.dOA,b3.$2(A.bI,4))
b6.aX(D.eoi,b2.$1(b1?A.b6.j(0.7):A.aI))
return!0
case"toaster":a3=b1?Math.min(1,b7.ax/3):0
for(v=-4-a3*14,s=b6.a,l=0;l<2;++l){r=b4.$5(D.ast[l]+1,v,10,14,2)
o=B.aq(A.bH,A.dl,a3)
o.toString
q=b2.$1(o).I()
s.drawRRect(B.eZ(r),q)
q.delete()}b6.aJ(b4.$5(-24,-6,48,26,8),b5.$3(D.enU,A.c3,A.bv))
for(l=0;l<2;++l){k=D.ast[l]
v=b4.$5(k,-5,12,5,2)
q=b2.$1(b1?A.fU:A.aF).I()
s.drawRRect(B.eZ(v),q)
q.delete()
if(b1){v=b4.$5(k,-5,12,5,2)
r=b2.$1(A.cP.j(0.5))
r.z=G.mc
q=r.I()
s.drawRRect(B.eZ(v),q)
q.delete()}}b6.bE(D.dMv,D.dMM,b3.$2(A.aF,3))
return!0
case"ledstrip":b6.aJ(b4.$5(-34,-4,68,10,4),b2.$1(A.cJ))
for(v=b6.a,s=b8*90,u=0;u<9;++u){a4=A.k.F(s+u*40,360)
h=b1?new H.mv(1,a4,0.8,1).iu():A.ew
if(b1){r=b2.$1(h.j(0.45))
r.z=G.mc
q=r.I()
v.drawCircle(-30+u*7.5,1,7,q)
q.delete()}q=b2.$1(h).I()
v.drawCircle(-30+u*7.5,1,2.6,q)
q.delete()}b6.aJ(b4.$5(-40,-2,6,6,1),b2.$1(A.eC))
return!0
case"pump":b6.aJ(b4.$5(-16,-2,32,22,6),b5.$3(D.enJ,A.cE,A.J2))
b6.ae(D.dOH,8,b2.$1(A.q6))
v=b6.a
J.bD(v.save())
v.translate(-2,9)
b6.iU(0,b7.y)
for(u=0;u<3;++u){s=u*2.09
r=Math.cos(s)
s=Math.sin(s)
q=b3.$2(A.fe,2.4).I()
v.drawLine.apply(v,[0,0,r*7,s*7,q])
q.delete()}v.restore()
s=new B.aO($.W().r,A.ap,b0,b0,B.a([],x.v))
s.D(new B.b4(16,6))
s.D(new B.ao(26,6))
s.D(new B.ao(26,-20))
s.D(new B.ao(10,-20))
b6.aM(s,b3.$2(A.bI,4))
if(b1){for(s=b8*0.9,u=0;u<5;++u){t=A.k.F(s+u*0.2,1)
q=b2.$1(A.fJ).I()
v.drawCircle(26,6-t*26,2.2,q)
q.delete()}b6.ae(D.dNg,3.2,b2.$1(A.fJ.j(0.7)))}return!0
case"hairdryer":v=b6.a
J.bD(v.save())
b6.iU(0,-0.15)
b6.aJ(b4.$5(-26,-14,40,22,10),b5.$3(D.enW,A.jz,A.rp))
b6.aJ(b4.$5(14,-10,12,14,3),b2.$1(A.cJ))
b6.aJ(b4.$5(-10,6,12,22,4),b2.$1(A.ew))
v.restore()
if(b1){for(s=b8*3,u=0;u<4;++u){t=A.k.F(s+u*0.25,1)
r=t*18
o=-10+u*5
q=b3.$2(A.c.j(1-t),1.8).I()
v.drawLine.apply(v,[24+r,o,32+r,o,q])
q.delete()}v=b2.$1(A.cP.j(0.4))
v.z=G.mc
b6.ae(D.dMq,8,v)}return!0
case"headphones":b6.fs(B.cJ(A.dE,44,44),3.141592653589793,3.141592653589793,!1,b3.$2(A.bt,4))
for(v=b6.a,s=b8*12,l=0;l<2;++l){k=D.asu[l]
r=k-7
o=b4.$5(r,0,14,20,6)
q=b5.$3(new B.a7(r,0,r+14,20),A.bB,A.oQ).I()
v.drawRRect(B.eZ(o),q)
q.delete()
if(b1)for(r=k<0,u=1;u<=2;++u){o=B.bT(new B.u(k,10),10+u*5+A.k.F(s,5))
n=r?2.2:-0.9
q=b3.$2(A.ex.j(0.9-u*0.3),1.6).I()
v.drawArc.apply(v,[B.c8(o),n*57.29577951308232,91.67324722093173,!1,q])
q.delete()}}if(b1)b9.$5(b6,"\u266a",new B.u(-4,-8-A.k.F(b8*14,8)),A.k_,12)
return!0
case"smartwatch":b6.aJ(b4.$5(-8,-30,16,14,3),b2.$1(A.cJ))
b6.aJ(b4.$5(-8,14,16,14,3),b2.$1(A.cJ))
b6.aJ(b4.$5(-14,-17,28,32,8),b5.$3(D.enC,A.eC,A.ew))
b6.aJ(b4.$5(-11,-14,22,26,6),b2.$1(A.dw))
if(b1){a5=new B.Q(Date.now(),0,!1)
b9.$5(b6,A.a.aS(A.o.u(B.dd(a5)),2,"0")+":"+A.a.aS(A.o.u(B.fM(a5)),2,"0"),D.dM2,A.bh,9.5)
f=(Math.sin(b8*9)+1)/2
v=B.aq(A.CR,A.hl,f)
v.toString
b9.$5(b6,"\u2665",new B.u(-8,1),v,8+f*2)
b9.$5(b6,""+(70+A.o.F(A.k.bt(b8*2),6)),A.dE,A.c,7)}return!0
case"tablet":b6.aJ(b4.$5(-30,-22,60,44,6),b2.$1(K.q9))
b6.aJ(b4.$5(-30,-22,60,44,6),b3.$2(A.bI,1.6))
a6=b4.$5(-27,-19,54,38,3)
if(b1){v=b6.a
J.bD(v.save())
v.clipRRect(B.eZ(a6),$.xQ(),!0)
v.translate(-27,-19)
C.fK6(b6,D.et3,b8)
v.restore()}else b6.aJ(a6,b2.$1(D.Uf))
return!0
case"buck":a7=b4.$5(-26,-22,52,42,5)
b6.aJ(a7,b5.$3(new B.a7(a7.a,a7.b,a7.c,a7.d),A.e4,A.dx))
b6.aJ(a7,b3.$2(A.b9,1.2))
b6.ae(D.aBC,9,b2.$1(A.aF))
b6.ae(D.aBC,6,b3.$2(A.dl,2))
b6.aJ(b4.$5(4,-2,14,10,2),b2.$1(A.aF))
b6.aJ(b4.$5(-22,-19,44,12,2),b2.$1(A.dw))
v=A.k.a9(b7.cy,1)
s=A.k.a9(b1?b7.db:b7.e,1)
r=b1?A.bh:A.aj
b9.$5(b6,v+"\u2192"+s+"V",D.dNj,r,8.2)
b6.ae(D.dMh,2.4,b2.$1(b1?A.bm:A.aI))
b9.$5(b6,"IN",D.dOB,A.af,6)
b9.$5(b6,"OUT",D.dN9,A.af,6)
return!0
case"regulator":a8=b1?A.k.E(b7.cx*Math.abs(b7.dy)/2.5,0,1):0
v=b4.$5(-14,-26,28,22,3)
s=B.aq(A.bI,A.aD,a8)
s.toString
b6.aJ(v,b2.$1(s))
b6.ae(D.dLT,3,b2.$1(A.aI))
b6.aJ(b4.$5(-12,-4,24,18,3),b5.$3(D.eny,A.ew,A.hv))
b9.$5(b6,"7805",D.a1W,A.af,8)
for(v=b6.a,l=0;l<3;++l){s=D.cVy[l]-1
q=b2.$1(A.e5).I()
v.drawRect(B.c8(new B.a7(s,14,s+2,22)),q)
q.delete()}if(a8>0.2)for(s=b8*0.9,u=0;u<3;++u){t=A.k.F(s+u*0.33,1)
q=b2.$1(A.c.j(0.5*(1-t))).I()
v.drawCircle(-6+u*6,-28-t*12,2+t*2,q)
q.delete()}b9.$5(b6,"5V",D.dP0,A.bg,9)
return!0
case"diode":b6.bE(D.aBG,D.aBr,b3.$2(A.e5,2.4))
b6.aJ(b4.$5(-14,-7,28,14,6),b2.$1(A.aZ.j(0.85)))
b6.aX(D.enn,b2.$1(A.bg))
if(b1){v=b4.$5(-14,-7,28,14,6)
s=b2.$1(A.dU.j(0.4))
s.z=A.j7
b6.aJ(v,s)}v=new B.aO($.W().r,A.ap,b0,b0,B.a([],x.v))
v.D(new B.b4(-8,-4))
v.D(new B.ao(-8,4))
v.D(new B.ao(-1,0))
v.D(new B.bE())
b6.aM(v,b2.$1(A.aT))
b9.$5(b6,"one way",D.dOp,A.az,8)
return!0
case"ldr":b6.bE(D.aBG,D.a1W,b3.$2(A.e5,2.4))
b6.bE(D.aBv,D.aBr,b3.$2(A.e5,2.4))
b6.ae(A.J,12,b2.$1(A.dl))
b6.ae(A.J,12,b3.$2(A.rx,1.6))
v=$.W()
s=B.a([],x.v)
a9=new B.aO(v.r,A.ap,b0,b0,s)
a9.D(new B.b4(-8,-6))
for(u=0;u<5;++u){v=(u&1)===0?8:-8
v=new B.ao(v,-6+u*3)
s.push(v)
r=a9.f
if(r!=null)v.bx(r)
v=a9.e
if(v!=null)v.a.delete()
a9.e=null}b6.aM(a9,b3.$2(A.bH,1.4))
v=B.aq(A.bt,A.dU,b7.f)
v.toString
b9.$5(b6,"\u2600",new B.u(-6,-26),v,14)
b9.$5(b6,""+A.k.U(20+980*(1-b7.f))+"\u03a9",D.dOh,A.af,8.5)
return!0}return!1},
fqc:function fqc(){},
fqe:function fqe(){},
fqf:function fqf(){},
fqd:function fqd(){},
fMJ(d,e,f,g){return new C.agg(d,g,f,e)},
El(d,e,f){return new C.b7r(d,e,f)},
agg:function agg(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
agh:function agh(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.fb$=h
_.kA$=i
_.fF$=j
_.fc$=k
_.bp$=l
_.a6$=m
_.c=_.a=null},
bD2:function bD2(d,e){this.a=d
this.b=e},
bD3:function bD3(d){this.a=d},
bD1:function bD1(d){this.a=d},
bD4:function bD4(){},
bD5:function bD5(d){this.a=d},
bDk:function bDk(d){this.a=d},
bDl:function bDl(){},
bCG:function bCG(){},
bDm:function bDm(d,e){this.a=d
this.b=e},
bDj:function bDj(d,e,f){this.a=d
this.b=e
this.c=f},
bDe:function bDe(d){this.a=d},
bDb:function bDb(d,e,f){this.a=d
this.b=e
this.c=f},
bDc:function bDc(d,e){this.a=d
this.b=e},
bDf:function bDf(d){this.a=d},
bD9:function bD9(d,e){this.a=d
this.b=e},
bDa:function bDa(d,e){this.a=d
this.b=e},
bDd:function bDd(d){this.a=d},
bDg:function bDg(d){this.a=d},
bD7:function bD7(d,e){this.a=d
this.b=e},
bD8:function bD8(d,e){this.a=d
this.b=e},
bDh:function bDh(d){this.a=d},
bD6:function bD6(d){this.a=d},
bDi:function bDi(d){this.a=d},
bCH:function bCH(d,e){this.a=d
this.b=e},
bCZ:function bCZ(d,e){this.a=d
this.b=e},
bD0:function bD0(d,e){this.a=d
this.b=e},
bD_:function bD_(d,e){this.a=d
this.b=e},
bCN:function bCN(d,e){this.a=d
this.b=e},
bCO:function bCO(d){this.a=d},
bCM:function bCM(d){this.a=d},
bCP:function bCP(d,e,f){this.a=d
this.b=e
this.c=f},
bCL:function bCL(d,e){this.a=d
this.b=e},
bCR:function bCR(d,e){this.a=d
this.b=e},
bCS:function bCS(d,e){this.a=d
this.b=e},
bCT:function bCT(d,e,f){this.a=d
this.b=e
this.c=f},
bCK:function bCK(d,e){this.a=d
this.b=e},
bCU:function bCU(d,e,f){this.a=d
this.b=e
this.c=f},
bCJ:function bCJ(d,e){this.a=d
this.b=e},
bCV:function bCV(d,e,f){this.a=d
this.b=e
this.c=f},
bCI:function bCI(d,e){this.a=d
this.b=e},
bCW:function bCW(d){this.a=d},
bCX:function bCX(d){this.a=d},
bCY:function bCY(d){this.a=d},
bCQ:function bCQ(d){this.a=d},
b7r:function b7r(d,e,f){this.a=d
this.b=e
this.c=f},
f11:function f11(){},
f12:function f12(){},
f13:function f13(){},
f0P:function f0P(){},
f14:function f14(){},
f0O:function f0O(){},
f15:function f15(){},
f0T:function f0T(){},
f0N:function f0N(){},
f0U:function f0U(){},
f0M:function f0M(){},
f0V:function f0V(){},
f0L:function f0L(){},
f0W:function f0W(){},
f0J:function f0J(){},
f0K:function f0K(){},
f0X:function f0X(){},
f0H:function f0H(){},
f0I:function f0I(){},
f0Y:function f0Y(){},
f0G:function f0G(){},
Tb:function Tb(d){this.a=d},
aAr:function aAr(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dJX:function dJX(d,e){this.a=d
this.b=e},
dK5:function dK5(d){this.a=d},
dK6:function dK6(){},
dK7:function dK7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dK8:function dK8(){},
dJW:function dJW(d){this.a=d},
dJV:function dJV(d,e,f){this.a=d
this.b=e
this.c=f},
dJU:function dJU(d,e){this.a=d
this.b=e},
dJS:function dJS(d){this.a=d},
dJT:function dJT(){},
dK4:function dK4(d){this.a=d},
dK3:function dK3(d){this.a=d},
dK1:function dK1(d,e){this.a=d
this.b=e},
dK_:function dK_(d){this.a=d},
dK0:function dK0(){},
dK2:function dK2(d,e,f){this.a=d
this.b=e
this.c=f},
dJY:function dJY(d,e){this.a=d
this.b=e},
dJZ:function dJZ(){},
dK9:function dK9(d){this.a=d},
dKa:function dKa(d,e){this.a=d
this.b=e},
dKb:function dKb(d){this.a=d},
dKc:function dKc(d){this.a=d},
auD:function auD(d,e){this.c=d
this.a=e},
b5D:function b5D(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
cvP:function cvP(d){this.a=d},
b5C:function b5C(d,e){this.b=d
this.a=e},
cvO:function cvO(d){this.a=d},
auW:function auW(){},
auX:function auX(){},
aGL:function aGL(){},
btl:function btl(){},
hQ_(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fr>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bT(A.v4,23)
$.W()
b8=B.L()
b8.r=A.aF.gq(0)
b9.ae(A.v4,25,b8)
b8=B.L()
b8.sap(D.dWc.au(0,v))
b9.ae(A.v4,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
o.r=A.bg.gq(0)
o.c=A.o.F(u,5)===0?1.8:1
n=o.I()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.dx):Math.abs(c0.dy)
t=2.5132741228718345+A.k.E(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.L()
r.r=A.bO.gq(0)
r.c=2
r.d=A.bL
b9.bE(A.v4,new B.u(b8*18,s*18-2),r)
r=B.L()
r.r=A.bg.gq(0)
b9.ae(A.v4,3,r)
c2.$5(b9,w?"V":"A",D.dOS,A.bg,12)
c2.$5(b9,w?A.k.a9(m,1)+" V":""+A.k.U(m*1000)+" mA",D.dOm,A.aF,9.5)
return!0
case"fan":b8=B.bC(D.enu,A.hd)
$.W()
s=B.L()
s.r=A.bt.gq(0)
b9.aJ(b8,s)
s=B.L()
s.r=A.aj.gq(0)
b9.aX(D.eob,s)
s=B.L()
s.r=A.M.j(0.6).gq(0)
b9.ae(D.v5,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bD(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.cJ(A.aBd,18,10)
r=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.fJ.j(b7&&c0.fr>0.5?0.55:0.95).gq(0)
n=r.I()
b8.drawOval(B.c8(s),n)
n.delete()
b8.restore()}b8=B.L()
b8.r=A.bj.gq(0)
b9.ae(D.v5,4,b8)
b8=B.L()
b8.b=A.ac
b8.c=2
b8.r=A.cp.gq(0)
b9.ae(D.v5,22,b8)
b8=B.L()
b8.b=A.ac
b8.c=0.8
b8.r=A.j1.gq(0)
b9.ae(D.v5,14,b8)
return!0
case"speaker":l=B.bC(D.aGU,A.tE)
$.W()
b8=B.L()
b8.sap(D.ajA.au(0,new B.a7(l.a,l.b,l.c,l.d)))
b9.aJ(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=B.L()
b8.sap(D.dWy.au(0,B.bT(A.cs,15)))
b9.ae(A.cs,14+k,b8)
b8=B.L()
b8.r=A.eC.gq(0)
b9.ae(A.cs,5,b8)
b8=B.L()
b8.r=A.bv.gq(0)
b9.ae(D.aBe,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=B.bT(D.dMu,6+u*6+A.k.F(b8,6))
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.b=A.ac
q.c=1.8
q.r=A.bU.j(0.9-u*0.2).gq(0)
n=q.I()
s.drawArc.apply(s,[B.c8(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=B.bC(D.eo5,A.tE)
$.W()
b8=B.L()
b8.sap(D.bHX.au(0,new B.a7(j.a,j.b,j.c,j.d)))
b9.aJ(j,b8)
b8=B.bC(D.aGW,A.j9)
s=B.L()
s.r=A.hv.gq(0)
b9.aJ(b8,s)
if(b7){i=new B.Q(Date.now(),0,!1)
h=B.yP(i)<500?":":" "
g=A.a.aS(A.o.u(B.dd(i)),2,"0")
f=A.a.aS(A.o.u(B.fM(i)),2,"0")
b8=B.L()
b8.r=A.bh.j(0.12).gq(0)
b9.aX(D.aGW,b8)
c2.$5(b9,g+h+f,D.dOE,A.bh,21)}b8=B.L()
b8.r=A.cp.gq(0)
b9.ae(D.dOD,2.4,b8)
b8=B.L()
b8.r=A.cp.gq(0)
b9.ae(D.dMy,2.4,b8)
return!0
case"calculator":j=B.bC(D.enO,A.hJ)
$.W()
b8=B.L()
b8.sap(D.bHH.au(0,new B.a7(j.a,j.b,j.c,j.d)))
b9.aJ(j,b8)
b8=B.bC(D.enI,A.h0)
s=B.L()
s.r=(b7?A.Ja:D.b85).gq(0)
b9.aJ(b8,s)
if(b7)c2.$5(b9,"3.14159",D.dOl,A.IH,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=B.bC(new B.a7(q,s,q+6,r),A.Q4)
$.W()
p=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=(d===3?A.cj:A.c3).gq(0)
n=p.I()
b8.drawRRect(B.eZ(q),n)
n.delete()}return!0
case"phone":j=B.bC(D.enF,A.hJ)
$.W()
b8=B.L()
b8.r=K.q9.gq(0)
b9.aJ(j,b8)
b8=B.L()
b8.b=A.ac
b8.c=1.6
b8.r=A.bI.gq(0)
b9.aJ(j,b8)
a0=B.bC(D.enw,A.hd)
if(b7){b8=B.L()
b8.sap(D.bJh.au(0,new B.a7(a0.a,a0.b,a0.c,a0.d)))
b9.aJ(a0,b8)
b8=b9.a
J.bD(b8.save())
b8.clipRRect(B.eZ(a0),$.xQ(),!0)
b8.translate(-12,-25)
C.fK6(b9,D.esF,c1)
b8.restore()
a1=A.k.F(c1*0.12,1)
b8=B.bC(D.ent,A.h0)
s=B.L()
s.r=A.aT.gq(0)
b9.aJ(b8,s)
s=B.L()
s.r=A.bh.gq(0)
b9.aX(new B.a7(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.U(a1*100)+"%",D.dND,A.c,6)}else{b8=B.L()
b8.r=D.Uf.gq(0)
b9.aJ(a0,b8)}return!0
case"router":j=B.bC(D.eo4,A.tD)
$.W()
b8=B.L()
b8.sap(D.bIe.au(0,new B.a7(j.a,j.b,j.c,j.d)))
b9.aJ(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=D.asu[a2]
s=a3<0?-4:4
r=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.cJ.gq(0)
r.c=4
r.d=A.bL
n=r.I()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.F(A.k.bt(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
s.r=(a4?A.bm:A.aI).gq(0)
n=s.I()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=B.bT(D.v5,8+u*6+A.k.F(s,6))
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.b=A.ac
q.c=1.8
q.r=A.hm.j(0.9-u*0.2).gq(0)
n=q.I()
b8.drawArc.apply(b8,[B.c8(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bC(D.enN,A.hd)
s=$.W()
r=B.L()
r.r=A.ew.gq(0)
b9.aJ(b8,r)
if(b7){b8=B.L()
b8.r=A.aD.j(0.5*a5).gq(0)
b8.z=A.B3
b9.ae(A.v4,34,b8)}a6=new B.aO(s.r,A.ap,b6,b6,B.a([],x.v))
a6.D(new B.b4(-16,12))
a6.D(new B.ao(-16,-2))
a6.D(new B.cO(0,-30,16,-2))
a6.D(new B.ao(16,12))
a6.D(new B.bE())
b8=B.L()
b8.r=B.aq(A.f_,D.b1p,a5).gq(0)
b9.aM(a6,b8)
b8=B.L()
b8.b=A.ac
b8.c=1.4
b8.r=A.c2.gq(0)
b9.aM(a6,b8)
if(b7){b8=b9.a
J.bD(b8.save())
b8.translate(0,-2)
b9.iU(0,c1*7)
s=B.L()
s.r=A.c.j(0.7).gq(0)
s.c=3
b9.bE(A.J,D.aBe,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.bD(b8.save())
b8.translate(0,a7)
s=$.W().r
r=x.v
j=new B.aO(s,A.ap,b6,b6,B.a([],r))
j.D(new B.b4(-28,8))
j.D(new B.ao(-28,-2))
j.D(new B.ao(-16,-4))
j.D(new B.ao(-10,-16))
j.D(new B.ao(10,-16))
j.D(new B.ao(18,-4))
j.D(new B.ao(28,-2))
j.D(new B.ao(28,8))
j.D(new B.bE())
q=B.L()
q.sap(D.bGj.au(0,D.enZ))
b9.aM(j,q)
q=new B.aO(s,A.ap,b6,b6,B.a([],r))
q.D(new B.b4(-8,-4))
q.D(new B.ao(-4,-13))
q.D(new B.ao(4,-13))
q.D(new B.ao(4,-4))
q.D(new B.bE())
p=B.L()
p.r=A.fe.gq(0)
b9.aM(q,p)
r=new B.aO(s,A.ap,b6,b6,B.a([],r))
r.D(new B.b4(8,-4))
r.D(new B.ao(8,-13))
r.D(new B.ao(11,-13))
r.D(new B.ao(15,-4))
r.D(new B.bE())
s=B.L()
s.r=A.fe.gq(0)
b9.aM(r,s)
for(a2=0;a2<2;++a2){a3=D.cVt[a2]
s=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
s.r=A.aF.gq(0)
n=s.I()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.bD(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=A.c3.gq(0)
q.c=1.6
n=q.I()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.F(s+u*8,14)
q=-4+u*5
p=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=A.az.gq(0)
p.c=1.6
n=p.I()
b8.drawLine.apply(b8,[-34-r,q,-42-r,q,n])
n.delete()}return!0
case"kettle":b8=$.W().r
s=x.v
j=new B.aO(b8,A.ap,b6,b6,B.a([],s))
j.D(new B.b4(-18,20))
j.D(new B.ao(-14,-12))
j.D(new B.cO(0,-20,14,-12))
j.D(new B.ao(18,20))
j.D(new B.bE())
r=B.L()
r.sap(D.bHn.au(0,D.enM))
b9.aM(j,r)
r=new B.aO(b8,A.ap,b6,b6,B.a([],s))
r.D(new B.b4(14,-10))
r.D(new B.ao(30,-22))
r.D(new B.ao(32,-18))
r.D(new B.ao(16,-4))
r.D(new B.bE())
q=B.L()
q.r=A.e5.gq(0)
b9.aM(r,q)
s=new B.aO(b8,A.ap,b6,b6,B.a([],s))
s.D(new B.b4(-14,-8))
s.D(new B.cO(-34,-6,-18,12))
b8=B.L()
b8.b=A.ac
b8.c=5
b8.r=A.aF.gq(0)
b9.aM(s,b8)
b8=B.L()
if(b7){s=B.aq(A.cP,A.ua,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.ew
b8.r=s.gq(0)
b9.aX(D.enL,b8)
if(b7){b8=B.L()
b8.r=A.cP.j(0.3).gq(0)
b8.z=A.lz
b9.ae(A.aBb,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.F(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gq(0)
n=q.I()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=B.L()
b8.r=A.aF.gq(0)
b9.ae(D.dLQ,3,b8)
return!0
case"lamp":if(b7){u=A.k.E(0.4+0.12*(Math.abs(c0.dx)-3),0.4,1)
b8=new B.aO($.W().r,A.ap,b6,b6,B.a([],x.v))
b8.D(new B.b4(-10,-14))
b8.D(new B.ao(-30,24))
b8.D(new B.ao(10,24))
b8.D(new B.ao(8,-14))
b8.D(new B.bE())
s=B.L()
s.r=A.dU.j(0.28*u).gq(0)
b9.aM(b8,s)
s=B.L()
s.r=A.dU.j(0.5*u).gq(0)
s.z=R.G_
b9.ae(D.dOI,24,s)}b8=B.bC(D.eoh,A.hd)
s=$.W()
r=B.L()
r.r=A.ew.gq(0)
b9.aJ(b8,r)
r=B.L()
r.r=A.eC.gq(0)
r.c=3
r.d=A.bL
b9.bE(D.dM3,D.aBj,r)
r=B.L()
r.r=A.eC.gq(0)
r.c=3
r.d=A.bL
b9.bE(D.aBj,D.dOJ,r)
a9=new B.aO(s.r,A.ap,b6,b6,B.a([],x.v))
a9.D(new B.b4(-14,-16))
a9.D(new B.ao(6,-26))
a9.D(new B.ao(10,-12))
a9.D(new B.ao(-10,-6))
a9.D(new B.bE())
s=B.L()
s.r=(b7?A.aK:A.kt).gq(0)
b9.aM(a9,s)
b8=B.L()
b8.r=(b7?A.c:A.bv).gq(0)
b9.ae(D.dOK,4,b8)
return!0
case"lights":b8=$.W().r
s=x.v
b0=new B.aO(b8,A.ap,b6,b6,B.a([],s))
b0.D(new B.b4(-34,-6))
b0.D(new B.cO(0,22,34,-6))
r=B.L()
r.b=A.ac
r.c=2
r.r=A.fx.gq(0)
b9.aM(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.F(q+u*0.7,1.8)<1.1
if(b2){b3=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
b3.r=D.ZV[u].j(0.6).gq(0)
b3.z=A.OO
n=b3.I()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=B.a([],s)
b4=new B.aO(b8,A.ap,b6,b6,b3)
b3.push(new B.b4(p-3,o))
b3.push(new B.ao(p+3,o))
b5=o+11
b3.push(new B.ao(p+5,b5))
b3.push(new B.cO(p,o+17,p-5,b5))
b3.push(new B.bE())
p=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
if(b2)o=D.ZV[u]
else{o=B.aq(D.ZV[u],A.x,0.65)
o.toString}p.r=o.gq(0)
n=p.I()
p=b4.gbL().a.snapshot()
r.drawPath((b4.e=new B.cD(p)).a,n)
n.delete()}return!0}return C.hPZ(b9,c0,c1,c2)},
is:function is(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
jk(d,e,f,g,h,i,j,k){var w=new C.f1S(e,h,i,k),v=w.$1(g),u=v.b.c
if(u>j&&u>0)v=w.$1(Math.max(2,g*j/u))
w=v.b
u=w.c
w=w.a.c
v.a4(d,f.aE(0,new B.u(u/2,w.gbh(w)/2)))},
h05(d,e,f,g,h,i){var w,v,u=null,t=B.ib(u,u,6,u,B.dl(u,u,u,u,u,u,u,u,u,B.l(u,u,h,u,u,u,u,u,u,u,u,g,u,u,i?A.I:A.a3,u,1.3,!0,u,u,u,u,u,u,u,u),e),A.L,A.cg,u,A.ek,A.cf),s=f.a
t.xY(f.c-s)
w=f.b
v=t.b.a.c
t.a4(d,new B.u(s,w+Math.max(0,(f.d-w-v.gbh(v))/2)))},
BM(d,e){var w
$.W()
w=B.L()
w.b=A.ac
w.c=e
w.r=d.gq(0)
w.d=A.bL
return w},
fK6(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=A.o.F(A.k.bt(a3/5),8),h=A.k.F(a3,5),g=D.cyR[i],f=a2.a,e=a2.b,d=0+f,a0=0+e
$.W()
w=B.L()
w.sap(new B.a3(A.ax,A.aC,A.w,B.a([g.d,g.e],x.O),null,null).au(0,new B.a7(0,0,d,a0)))
a1.aX(new B.a7(0,0,d,a0),w)
v=new B.eU()
v.dM(i+3)
for(d=a3*0.7,a0=e+20,w=a1.a,u=0;u<9;++u){t=A.k.F(v.af()*f+Math.sin(d+u)*f*0.05,f)
s=A.k.F(a3*(6+v.af()*14)+v.af()*e,a0)
r=v.af()
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.16).gq(0)
p=q.I()
w.drawCircle(t,e-s+10,2+r*e*0.05,p)
p.delete()}o=f>=e
n=A.n5.av(0,A.k.E(h/0.9,0,1))
d=f/2
a0=o?0.4:0.34
a0=e*a0+Math.sin(a3*3)*e*0.012
s=A.c.j(0.2)
r=B.L()
r.r=s.gq(0)
a1.ae(new B.u(d,a0),e*0.2*n,r)
J.bD(w.save())
w.translate(d,a0)
a1.bV(0,A.k.E(n,0.01,1.5))
a0=o?0.26:0.17
C.jk(a1,g.c,A.J,e*a0,A.c,!0,9999,0)
w.restore()
m=A.co.av(0,A.k.E((h-0.3)/0.6,0,1))
J.bD(w.save())
w.translate((1-m)*f*0.3,0)
l=A.k.E(m,0,1)
a0=o?0.68:0.58
s=o?0.1:0.07
r=f*0.92
C.jk(a1,g.a,new B.u(d,e*a0),e*s,A.c.j(l),!0,r,0)
a0=o?0.8:0.67
s=o?0.058:0.045
C.jk(a1,g.b,new B.u(d,e*a0),e*s,A.c.j(0.9*l),!1,r,0)
w.restore()
for(a0=e*0.94,s=e*0.011,r=e*0.005,u=0;u<8;++u){q=u===i
k=q?r:0
j=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(q?0.95:0.35).gq(0)
p=j.I()
w.drawCircle(d+(u-3.5)*e*0.04,a0,s+k,p)
p.delete()}d=f-e*0.07
a0=e*0.06
C.jk(a1,"AD",new B.u(d,a0),e*0.045,A.c.j(0.85),!0,9999,1)
w=e*0.02
a1.aJ(B.bC(B.cJ(new B.u(d,a0),e*0.065,e*0.1),new B.b1(w,w)),C.BM(A.af,1))},
h5p(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.a
J.bD(k.save())
w=e.a
v=e.b
u=0+w
t=0+v
k.clipRect(B.c8(new B.a7(0,0,u,t)),$.tw()[1],!0)
switch(A.o.F(f,14)){case 0:C.fK6(d,e,g)
break
case 1:C.hwy(d,e,g)
break
case 2:C.hFe(d,e,g)
break
case 3:C.hAh(d,e,g)
break
case 4:C.hBS(d,e,g)
break
case 5:C.hvr(d,e,g)
break
case 6:$.W()
s=B.L()
s.sap(D.bIA.au(0,new B.a7(0,0,u,t)))
d.aX(new B.a7(0,0,u,t),s)
s=B.L()
s.r=A.bO.gq(0)
d.aX(new B.a7(0,0,u,0+v*0.16),s)
s=w*0.8
C.jk(d,"NGMY NEWS",new B.u(w/2,v*0.08),v*0.09,A.c,!0,s,2)
r=A.k.bt(g/6)
q=A.co.av(0,A.k.E(A.k.F(g,6)/0.6,0,1))
J.bD(k.save())
k.translate((1-q)*w*0.4,0)
t=w*0.06
p=v*0.24
o=v*0.03
o=B.bC(new B.a7(t,p,t+w*0.88,p+v*0.4),new B.b1(o,o))
p=A.c.j(0.1*q+0.02)
t=B.L()
t.r=p.gq(0)
d.aJ(o,t)
t=w*0.1
o=v*0.26
C.h05(d,D.aqX[A.o.F(r,8)],new B.a7(t,o,t+s,o+v*0.36),v*0.072,A.c.j(q),!0)
k.restore()
o=v*0.76
s=B.L()
s.r=A.aT.gq(0)
d.aX(new B.a7(0,o,u,o+v*0.1),s)
n=A.d.aF(D.aqX,"   \u2022   ")
m=B.ib(l,l,1,l,B.dl(l,l,l,l,l,l,l,l,l,B.l(l,l,A.dU,l,l,l,l,l,l,l,l,v*0.05,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),n),A.a5,A.cg,l,A.ek,A.cf)
m.f_()
m.a4(d,new B.u(w-A.k.F(g*v*0.35,m.b.c+w),v*0.775))
C.jk(d,"LIVE",new B.u(w*0.08,v*0.22),v*0.04,A.aD,!0,9999,1)
break
case 7:C.hDv(d,e,g)
break
case 8:C.hvS(d,e,g)
break
case 9:C.hvT(d,e,g)
break
case 10:C.hzK(d,e,g)
break
case 11:C.hwb(d,e,g)
break
case 12:C.hE8(d,e,g)
break
default:C.hEj(d,e,g)}k.restore()},
hwy(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=B.L()
w.sap(D.bGz.au(0,new B.a7(0,0,a3,a4)))
a5.aX(new B.a7(0,0,a3,a4),w)
v=new B.Q(Date.now(),0,!1)
u=a1>=a2
a3=u?a1*0.3:a1/2
a4=u?a2/2:a2*0.34
t=new B.u(a3,a4)
w=u?a1*0.22:a1*0.38
s=Math.min(w,a2*(u?0.36:0.26))
w=B.L()
w.r=A.aF.gq(0)
a5.ae(t,s,w)
w=s*0.05
a5.ae(t,s,C.BM(A.aY,w))
for(r=a5.a,q=s*0.02,p=s*0.04,o=0;o<12;++o){n=o*3.141592653589793/6
m=Math.cos(n)
l=Math.sin(n)
k=Math.cos(n)
j=Math.sin(n)
i=A.o.F(o,3)===0?p:q
h=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
h.b=A.ac
h.c=i
h.r=A.af.gq(0)
h.d=A.bL
g=h.I()
r.drawLine.apply(r,[a3+m*s*0.82,a4+l*s*0.82,a3+k*s*0.94,a4+j*s*0.94,g])
g.delete()}a3=new C.eZ1(a5,t,s)
a3.$4((A.o.F(B.dd(v),12)+B.fM(v)/60)/12,0.5,s*0.07,A.c)
a4=(B.yQ(v)+B.yP(v)/1000)/60
a3.$4((B.fM(v)+a4)/60,0.75,w,A.c)
a3.$4(a4,0.88,s*0.025,A.aD)
a4=B.L()
a4.r=A.aD.gq(0)
a5.ae(t,s*0.06,a4)
f=A.a.aS(A.o.u(B.dd(v)),2,"0")
e=A.a.aS(A.o.u(B.fM(v)),2,"0")
d=A.a.aS(A.o.u(B.yQ(v)),2,"0")
a0=u?new B.u(a1*0.7,a2*0.45):new B.u(a1/2,a2*0.7)
a3=u?0.2:0.11
C.jk(a5,f+":"+e,a0,a2*a3,A.bh,!0,a1*0.42,0)
a3=a0.ao(0,new B.u(0,a2*(u?0.14:0.08)))
a4=u?0.07:0.045
C.jk(a5,":"+d,a3,a2*a4,A.el,!0,a1*0.4,0)
a4=A.AL[B.lP(v)-1]
a3=A.nC[B.bB(v)-1]
w=a0.ao(0,new B.u(0,a2*(u?0.24:0.15)))
r=u?0.05:0.035
C.jk(a5,a4+" "+B.bO(v)+" "+a3,w,a2*r,A.aQ,!1,a1*0.9,0)},
hFe(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a4.a,d=a4.b,a0=A.o.F(A.k.bt(a5/5),4),a1=0+e,a2=0+d
$.W()
w=B.L()
w.sap(new B.a3(A.aX,A.b1,A.w,D.cyo[a0],null,null).au(0,new B.a7(0,0,a1,a2)))
a3.aX(new B.a7(0,0,a1,a2),w)
v=e*0.5
u=d*0.34
if(a0===0){a1=a3.a
J.bD(a1.save())
a1.translate(v,u)
a3.iU(0,a5*0.4)
for(a2=d*0.014,t=0;t<12;++t){s=t*3.141592653589793/6
w=Math.cos(s)
r=Math.sin(s)
q=Math.cos(s)
p=Math.sin(s)
o=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
o.b=A.ac
o.c=a2
o.r=A.dU.gq(0)
o.d=A.bL
n=o.I()
a1.drawLine.apply(a1,[w*d*0.14,r*d*0.14,q*d*0.2,p*d*0.2,n])
n.delete()}a1.restore()
a1=B.L()
a1.r=A.dU.gq(0)
a3.ae(new B.u(v,u),d*0.11,a1)}else for(a1=a3.a,a2=a0===2,w=d*0.1,m=0;m<4;++m){l=D.cGB[m]
r=l.a
q=Math.sin(a5+r*9)
p=a2?A.bj:A.c
o=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
o.r=p.gq(0)
n=o.I()
a1.drawCircle(v+r*d+q*4,u+l.b*d,w,n)
n.delete()}if(a0===2)for(a1=a5*30,a2=a5*280,w=d*0.8,r=d*0.03,q=a3.a,t=0;t<36;++t){k=A.k.F(t*41+a1,e)
j=A.k.F(t*59+a2,w)
p=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
p.b=A.ac
p.c=1.4
p.r=A.fe.gq(0)
p.d=A.bL
n=p.I()
q.drawLine.apply(q,[k,j,k-3,j+r,n])
n.delete()}else if(a0===3)for(a1=a5*50,a2=d*0.85,w=a3.a,t=0;t<40;++t){k=A.k.F(t*47+Math.sin(a5+t)*12,e)
j=A.k.F(t*61+a1,a2)
r=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.c.gq(0)
n=r.I()
w.drawCircle(k,j,2.2,n)
n.delete()}C.jk(a3,D.ap4[a0],new B.u(v,d*0.62),d*0.16,A.c,!0,v,0)
C.jk(a3,D.cJH[a0],new B.u(v,d*0.74),d*0.06,A.c.j(0.9),!1,e*0.6,0)
for(a1=d*0.88,a2=e*0.16,w=d*0.14,r=d*0.03,q=a3.a,p=d*0.865,o=d*0.055,i=d*0.915,h=e*0.14,t=0;t<4;++t){k=e*(0.2+t*0.2)
g=B.bC(B.cJ(new B.u(k,a1),w,a2),new B.b1(r,r))
f=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
f.r=A.x.j(0.25).gq(0)
n=f.I()
q.drawRRect(B.eZ(g),n)
n.delete()
g=A.o.F(a0+t,4)
C.jk(a3,D.cDb[g],new B.u(k,p),o,A.c,!0,9999,0)
C.jk(a3,D.ap4[g],new B.u(k,i),r,A.af,!0,h,0)}},
hAh(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=0+f,a0=0+e
$.W()
w=B.L()
w.sap(D.bJk.au(0,new B.a7(0,0,d,a0)))
a1.aX(new B.a7(0,0,d,a0),w)
v=f>=e
d=v?f*0.27:f/2
a0=v?e*0.46:e*0.3
u=new B.u(d,a0)
w=v?f*0.2:f*0.3
t=Math.min(w,e*0.28)
w=B.L()
w.r=A.aF.gq(0)
a1.ae(u,t,w)
for(w=a1.a,s=1;s<5;++s){r=A.c.j(0.08)
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.b=A.ac
q.c=1
q.r=r.gq(0)
q.d=A.bL
p=q.I()
w.drawCircle(d,a0,t*(0.35+s*0.14),p)
p.delete()}J.bD(w.save())
w.translate(d,a0)
a1.iU(0,a3*1.6)
d=B.L()
d.r=A.bU.gq(0)
a1.ae(A.J,t*0.3,d)
d=B.L()
d.r=A.af.gq(0)
a1.ae(new B.u(t*0.16,0),t*0.04,d)
w.restore()
d=B.L()
d.r=A.x.gq(0)
a1.ae(u,t*0.05,d)
o=v?f*0.52:f*0.1
n=v?f*0.4:f*0.8
m=v?e*0.2:e*0.55
l=v?e*0.4:e*0.18
for(d=a3*3,a0=a3*5.1,r=n/18,q=r*0.7,s=0;s<18;++s){k=A.k.E((Math.sin(d+s*0.7)+Math.sin(a0+s*1.3)+2)/4,0.05,1)
j=o+r*s
i=m+l*(1-k)
i=B.bC(new B.a7(j,i,j+q,i+l*k),A.hd)
h=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
h.r=B.aq(A.b6,A.bU,s/18).gq(0)
p=h.I()
w.drawRRect(B.eZ(i),p)
p.delete()}g=v?new B.u(f*0.72,e*0.72):new B.u(f/2,e*0.8)
d=v?0.08:0.055
a0=f*0.8
C.jk(a1,"NGMY Beats",g,e*d,A.c,!0,a0,0)
d=A.o.F(A.k.bt(a3/20),9)
w=g.ao(0,new B.u(0,e*0.075))
r=v?0.045:0.032
C.jk(a1,"Now playing: Spark Song "+(d+1),w,e*r,A.af,!1,f*0.85,0)
r=A.k.F(a3,20)
w=f*0.1
d=e*0.93
q=d+e*0.012
i=B.bC(new B.a7(w,d,w+a0,q),A.hd)
h=B.L()
h.r=A.b9.gq(0)
a1.aJ(i,h)
q=B.bC(new B.a7(w,d,w+a0*(r/20),q),A.hd)
r=B.L()
r.r=A.c.gq(0)
a1.aJ(q,r)},
hBS(d,e,f){var w,v,u,t,s=A.o.F(A.k.bt(f/5),4),r=A.k.F(f,5),q=new C.f5v(e,d)
q.$3(s,1+0.06*(r/5),1)
if(r>4.2)q.$3(A.o.F(s+1,4),1,(r-4.2)/0.8)
w=e.a
v=e.b
q=w*0.04
u=v*0.84
t=v*0.03
t=B.bC(new B.a7(q,u,q+w*0.5,u+v*0.11),new B.b1(t,t))
$.W()
u=B.L()
u.r=A.aT.gq(0)
d.aJ(t,u)
C.jk(d,"\ud83d\uddbc\ufe0f "+D.cPo[s],new B.u(w*0.29,v*0.895),v*0.045,A.c,!0,w*0.46,0)},
hvr(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b
$.W()
w=B.L()
w.r=A.dw.gq(0)
d.aX(new B.a7(0,0,0+i,0+h),w)
for(v=h*0.04,w=h*0.07,u=i/2,t=u-1.5,s=h*0.035,r=t+3,q=d.a;v<h;v+=w){p=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=A.b9.gq(0)
o=p.I()
q.drawRect(B.c8(new B.a7(t,v,r,v+s)),o)
o.delete()}w=new C.eXT()
n=i*(0.08+0.84*w.$1(f*0.55))
t=f*0.83
m=h*(0.12+0.72*w.$1(t+0.3))
l=h*0.2
s=l/2
r=h-l
k=A.k.E(m-s,0,r)
j=A.k.E(h*(0.12+0.72*w.$1(t+0.45))-s,0,r)
r=i*0.04
s=i*0.02
r=B.bC(new B.a7(r,k,r+s,k+l),A.hd)
t=B.L()
t.r=A.bh.gq(0)
d.aJ(r,t)
t=i*0.94
s=B.bC(new B.a7(t,j,t+s,j+l),A.hd)
t=B.L()
t.r=A.bU.gq(0)
d.aJ(s,t)
t=B.L()
t.r=A.c.gq(0)
d.ae(new B.u(n,m),h*0.025,t)
t=A.c.j(0.15)
s=B.L()
s.r=t.gq(0)
d.ae(new B.u(n,m),h*0.05,s)
s=h*0.12
C.jk(d,""+A.o.F(A.k.bt(f/4),10),new B.u(i*0.4,s),s,A.bh,!0,9999,0)
C.jk(d,""+A.o.F(A.k.bt(f/5),10),new B.u(i*0.6,s),s,A.bU,!0,9999,0)
C.jk(d,"NGMY ARCADE",new B.u(u,h*0.94),h*0.055,A.az,!0,i*0.8,2)},
hDv(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a4.a,a0=a4.b,a1=$.W(),a2=B.L()
a2.r=D.b5Z.gq(0)
a3.aX(new B.a7(0,0,0+d,0+a0),a2)
a2=d*0.02
w=a0*0.03
w=B.bC(new B.a7(a2,w,a2+d*0.96,w+a0*0.94),new B.b1(w,w))
a2=B.L()
a2.r=A.eB.gq(0)
a3.aJ(w,a2)
v=D.cOZ[A.o.F(A.k.bt(a5/8),8)]
u=A.k.F(a5,8)
if(u<0.5)a2=u/0.5
else a2=u>7.5?(8-u)/0.5:1
t=A.k.E(a2,0,1)
a2=d/2
w=a0*0.085
s=d*0.86
C.jk(a3,"\ud83c\udf93 "+v.a,new B.u(a2,a0*0.14),w,A.dU.j(t),!0,s,1)
r=d*0.1
q=a0*0.22
p=d*0.8
C.h05(a3,v.b,new B.a7(r,q,r+p,q+a0*0.3),a0*0.055,A.c.j(t),!1)
q=d*0.2
r=a0*0.56
o=a0*0.05
n=B.bC(new B.a7(q,r,q+d*0.6,r+a0*0.2),new B.b1(o,o))
m=new B.aO(a1.r,A.ap,null,null,B.a([],x.v))
m.D(new B.iO(n))
a3.aM(m,C.BM(A.c.j(0.5*t),3))
l=new B.Kz(new B.tG(B.uY(m),!1,B.a([],x.Q))).gL(0)
for(a1=a5*v.d*0.12,r=l.a,o=l.b,k=r.e,j=a0*0.012,i=a3.a,h=0;h<14;++h){g=A.k.F(a1+h/14,1)
r.im()
f=k[o].b
f===$&&B.c()
f=f.a.length()
r.im()
f=k[o].FE(g*f).a
g=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
g.r=A.dU.j(t).gq(0)
e=g.I()
i.drawCircle(f.a,f.b,j,e)
e.delete()}a1=a0*0.66
r=a0*0.07
C.jk(a3,"\ud83d\udd0b",new B.u(q,a1),r,A.c.j(t),!0,9999,0)
C.jk(a3,"\ud83d\udca1",new B.u(p,a1),r,A.c.j(t),!0,9999,0)
C.jk(a3,v.c,new B.u(a2,a0*0.87),w,A.el.j(t),!0,s,0)},
hvS(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=b0.a,a6=b0.b,a7=0+a5,a8=0+a6
$.W()
w=B.L()
w.sap(D.ajM.au(0,new B.a7(0,0,a7,a8)))
a9.aX(new B.a7(0,0,a7,a8),w)
v=A.o.F(A.k.bt(b1/4),6)
u=A.o.E(A.k.bt(A.k.F(b1,4)*6),0,D.ak0[v].length)
t=Math.min(a5*0.7,a6*0.95)
s=a6*0.92
r=B.cJ(new B.u(a5/2,a6/2),s,t)
w=s*0.06
w=B.bC(r,new B.b1(w,w))
a8=B.L()
a8.r=A.cJ.gq(0)
a9.aJ(w,a8)
a8=r.a+t*0.06
w=r.b
a7=w+s*0.05
q=a8+t*0.88
p=new B.a7(a8,a7,q,a7+s*0.22)
a7=s*0.02
a7=B.bC(p,new B.b1(a7,a7))
o=B.L()
o.r=A.Ja.gq(0)
a9.aJ(a7,o)
C.jk(a9,A.a.am(D.ak0[v],0,u),p.gbO(),s*0.1,A.IH,!0,(q-a8)*0.94,0)
n=A.o.F(A.k.bt(b1*3),16)
for(a7=a9.a,m=t*0.2,l=s*0.12,q=t*0.235,w+=s*0.33,o=s*0.165,k=l*0.25,j=0;j<16;++j){i=A.o.ak(j,4)
h=A.o.F(j,4)
g=a8+h*q
f=w+i*o
e=g+m
d=f+l
a0=B.bC(new B.a7(g,f,e,d),new B.b1(k,k))
a1=j===n
if(a1)a2=A.c
else a2=h===3?A.cj:A.ew
a3=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a3.r=a2.gq(0)
a4=a3.I()
a7.drawRRect(B.eZ(a0),a4)
a4.delete()
a0=D.cZG[j]
a1=a1?A.x:A.c
C.jk(a9,a0,new B.u(g+(e-g)/2,f+(d-f)/2),l*0.55,a1,!0,m*0.8,0)}},
hvT(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a1.a,g=a1.b,f=new B.Q(Date.now(),0,!1),e=0+h,d=0+g
$.W()
w=B.L()
w.sap(D.bGk.au(0,new B.a7(0,0,e,d)))
a0.aX(new B.a7(0,0,e,d),w)
w=B.L()
w.r=A.bO.gq(0)
a0.aX(new B.a7(0,0,e,0+g*0.15),w)
C.jk(a0,A.nC[B.bB(f)-1]+" "+B.bw(f),new B.u(h/2,g*0.075),g*0.08,A.c,!0,h*0.9,0)
v=h/7
for(e=g*0.21,d=g*0.05,u=0;u<7;++u)C.jk(a0,D.d_G[u],new B.u(v*(u+0.5),e),d,A.az,!0,9999,0)
t=B.bW(B.bw(f),B.bB(f),1,0,0,0,0,0)
s=B.bO(B.bW(B.bw(f),B.bB(f)+1,0,0,0,0,0,0))
r=B.lP(t)-1
q=g*0.74/A.k.dE((r+s)/7)
for(e=g*0.26,d=a2*3,w=a0.a,p=1;p<=s;++p){o=r+p-1
n=v*(A.o.F(o,7)+0.5)
m=e+q*(A.o.ak(o,7)+0.5)
if(p===B.bO(f)){l=Math.min(v,q)
k=A.aY.j(0.5+0.2*Math.sin(d))
$.W()
j=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
j.r=k.gq(0)
i=j.I()
w.drawCircle(n,m,l*0.42,i)
i.delete()}l=Math.min(v,q)
k=p===B.bO(f)?A.c:A.af
C.jk(a0,""+p,new B.u(n,m),l*0.42,k,!0,9999,0)}},
hzK(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=e.a,i=e.b,h=$.W(),g=B.L()
g.r=A.c3.gq(0)
d.aX(new B.a7(0,0,0+j,0+i),g)
w=new B.eU()
w.dM(11)
for(g=d.a,v=0;v<18;++v){u=w.af()*j
t=w.af()*i
t=B.bC(new B.a7(u,t,u+j*(0.08+w.af()*0.1),t+i*(0.1+w.af()*0.15)),A.hd)
u=A.o.F(v,4)===0?A.i1:A.e5
s=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
s.r=u.gq(0)
r=s.I()
g.drawRRect(B.eZ(t),r)
r.delete()}g=x.v
u=B.a([],g)
q=new B.aO(h.r,A.ap,k,k,u)
h=i*0.7
q.D(new B.b4(0,h))
for(t=j*0.12,p=0;p<=j;p+=8){s=new B.ao(p,h+Math.sin(p/t)*i*0.06)
u.push(s)
o=q.f
if(o!=null)s.bx(o)
s=q.e
if(s!=null)s.a.delete()
q.e=null}h=i*0.06
d.aM(q,C.BM(A.fJ,h))
n=new B.aO($.W().r,A.ap,k,k,B.a([],g))
g=i*0.25
n.D(new B.b4(0,g))
u=j*0.4
n.D(new B.ao(u,g))
g=i*0.6
n.D(new B.ao(u,g))
u=j*0.8
n.D(new B.ao(u,g))
n.D(new B.ao(u,i))
d.aM(n,C.BM(A.c,i*0.045))
d.aM(n,C.BM(A.aK,i*0.012))
m=new B.Kz(new B.tG(B.uY(n),!1,B.a([],x.Q))).gL(0)
u=m.a
g=m.b
u.im()
t=u.e
s=t[g].b
s===$&&B.c()
s=s.a.length()
u.im()
o=t[g].b
o===$&&B.c()
o=A.k.F(f*s/14,o.a.length())
u.im()
l=t[g].FE(o).a
o=Math.sin(f*5)
g=A.d6.j(0.3)
t=B.L()
t.r=g.gq(0)
d.ae(l,h+Math.abs(o)*i*0.03,t)
t=i*0.028
o=B.L()
o.r=A.bk.gq(0)
d.ae(l,t,o)
d.ae(l,t,C.BM(A.c,2))
t=j*0.05
o=i*0.05
h=i*0.03
h=B.bC(new B.a7(t,o,t+j*0.55,o+i*0.11),new B.b1(h,h))
t=A.x.j(0.7)
g=B.L()
g.r=t.gq(0)
d.aJ(h,g)
C.jk(d,"\ud83d\udccd NGMY Map: you are here",new B.u(j*0.325,i*0.105),o,A.c,!0,j*0.52,0)},
hwb(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=B.L()
w.sap(D.bIH.au(0,new B.a7(0,0,a3,a4)))
a5.aX(new B.a7(0,0,a3,a4),w)
v=a1*(0.5+0.28*Math.sin(a7*0.8))
u=a2*0.58+Math.abs(Math.sin(a7*3))*-a2*0.06
w=B.L()
w.r=A.dU.gq(0)
a5.ae(new B.u(v,u),a2*0.14,w)
w=a2*0.045
t=a2*0.02
s=u-t
r=a2*0.015
q=B.L()
q.r=A.bg.gq(0)
a5.ae(new B.u(v-w,s),r,q)
q=B.L()
q.r=A.bg.gq(0)
a5.ae(new B.u(v+w,s),r,q)
a5.fs(B.cJ(new B.u(v,u+t),a2*0.08,a2*0.1),0.2,2.741592653589793,!1,C.BM(A.bg,2))
q=a2*0.34
p=B.cJ(new B.u(v,u),q,q)
o=(Math.sin(a7*6)+1)/2
for(s=p.a,r=p.b,q=p.c,n=p.d,m=[new B.u(s,r),new B.u(q,r),new B.u(s,n),new B.u(q,n)],l=a5.a,r+=(n-r)/2,s+=(q-s)/2,k=0;k<4;++k){j=m[k]
q=j.a
i=q<s?1:-1
n=j.b
h=n<r?1:-1
g=B.aq(A.c,A.cz,o)
g.toString
f=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
f.b=A.ac
f.c=3
f.r=g.gq(0)
f.d=A.bL
e=f.I()
l.drawLine.apply(l,[q,n,q+i*a2*0.05,n+0,e])
e.delete()
f=B.aq(A.c,A.cz,o)
f.toString
g=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
g.b=A.ac
g.c=3
g.r=f.gq(0)
g.d=A.bL
e=g.I()
l.drawLine.apply(l,[q,n,q+0,n+h*a2*0.05,e])
e.delete()}for(k=0;k<2;++k){d=D.cqu[k]
s=a1*d
r=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
r.b=A.ac
r.c=1
r.r=A.b9.gq(0)
r.d=A.bL
e=r.I()
l.drawLine.apply(l,[s,0,s,a2,e])
e.delete()
s=a2*d
r=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
r.b=A.ac
r.c=1
r.r=A.b9.gq(0)
r.d=A.bL
e=r.I()
l.drawLine.apply(l,[0,s,a1,s,e])
e.delete()}s=a2*0.07
r=(A.k.bt(a7*1.5)&1)===0?A.aD:A.f_
q=B.L()
q.r=r.gq(0)
a5.ae(new B.u(a1*0.06,s),t,q)
C.jk(a5,"REC",new B.u(a1*0.13,s),w,A.c,!0,9999,0)
a0=A.k.F(a7,6)
if(a0<0.25){w=A.c.j(1-a0/0.25)
t=B.L()
t.r=w.gq(0)
a5.aX(new B.a7(0,0,a3,a4),t)}if(a0>0.25&&a0<2)C.jk(a5,"\ud83d\udcf8 Photo saved",new B.u(a1/2,a2*0.9),a2*0.06,A.c,!0,a1*0.8,0)},
hE8(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=a1.b
$.W()
w=B.L()
w.r=A.k2.gq(0)
a0.aX(new B.a7(0,0,0+e,0+d),w)
v=e/20
u=d/11
for(w=a0.a,t=0;t<20;++t)for(s=t*v,r=s+v,q=0;q<11;++q)if((t+q&1)===0){p=q*u
o=A.eK.j(0.5)
$.W()
n=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
n.r=o.gq(0)
m=n.I()
w.drawRect(B.c8(new B.a7(s,p,r,p+u)),m)
m.delete()}l=new C.f99()
k=a2*4
for(s=v*0.9,r=u*0.9,p=v*0.3,j=11;j>=0;--j){i=l.$1(k-j*0.42)
o=B.bC(B.cJ(new B.u(i.a*v,i.b*u),r,s),new B.b1(p,p))
if(j===0)n=A.el
else{n=B.aq(A.bm,A.f2,j/11)
n.toString}$.W()
h=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
h.r=n.gq(0)
m=h.I()
w.drawRRect(B.eZ(o),m)
m.delete()}g=l.$1(k)
w=g.a
s=g.b
$.W()
r=B.L()
r.r=A.x.gq(0)
a0.ae(new B.u(w*v-v*0.15,s*u-u*0.15),v*0.09,r)
f=l.$1(k+2.2)
r=f.a
s=f.b
w=Math.sin(a2*8)
p=B.L()
p.r=A.aD.gq(0)
a0.ae(new B.u(r*v,s*u),v*0.35+Math.abs(w)*v*0.08,p)
p=d*0.06
C.jk(a0,"Score "+A.k.bt(a2/1.5)*10,new B.u(e*0.15,p),p,A.c,!0,e*0.25,0)},
hEj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=0+l,i=0+k
$.W()
w=B.L()
w.sap(D.ajM.au(0,new B.a7(0,0,j,i)))
d.aX(new B.a7(0,0,j,i),w)
v=A.k.F(f,60)
j=l>=k
i=j?0.3:0.5
w=j?0.5:0.36
u=new B.u(l*i,k*w)
i=j?l*0.22:l*0.34
t=Math.min(i,k*(j?0.38:0.26))
i=t*0.12
d.ae(u,t,C.BM(A.bG,i))
d.fs(B.bT(u,t),-1.5707963267948966,v/60*3.141592653589793*2,!1,C.BM(A.b6,i))
s=A.a.aS(A.o.u(A.k.ak(v,60)),2,"0")
r=A.a.aS(A.o.u(A.k.bt(v)),2,"0")
q=A.a.aS(A.o.u(A.k.bt(A.k.F(v,1)*100)),2,"0")
C.jk(d,s+":"+r,u,t*0.5,A.c,!0,t*1.5,0)
C.jk(d,"."+q,u.ao(0,new B.u(0,t*0.45)),t*0.3,A.b6,!0,t,0)
p=j?l*0.68:l*0.5
o=j?k*0.22:k*0.7
C.jk(d,"Laps",new B.u(p,o),k*0.06,A.az,!0,9999,0)
for(j=k*0.05,i=l*0.45,n=1;n<=4;++n){m=(v-A.k.F(v,10))/10-(n-1)
if(m<0)continue
C.jk(d,"Lap "+(A.k.bt(m)+1)+"   0:"+A.k.a9(10+A.k.F(m*3.7,4),2),new B.u(p,o+n*k*0.09),j,A.af,!1,i,0)}},
hRn(d,e){return B.a9(d,!1).cp(B.ua(null,!1,!0,!0,new C.fwx(e),A.eM,null,A.qg,new C.fwy(),x.H))},
f1S:function f1S(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Be:function Be(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qG:function qG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZ1:function eZ1(d,e,f){this.a=d
this.b=e
this.c=f},
f5v:function f5v(d,e){this.a=d
this.b=e},
eXT:function eXT(){},
Bv:function Bv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f99:function f99(){},
fwx:function fwx(d){this.a=d},
fwy:function fwy(){},
U0:function U0(d,e){this.c=d
this.a=e},
bgP:function bgP(d,e){var _=this
_.d=$
_.e=null
_.bp$=d
_.a6$=e
_.c=_.a=null},
e7f:function e7f(d){this.a=d},
e7g:function e7g(d){this.a=d},
e7d:function e7d(d){this.a=d},
e7c:function e7c(d){this.a=d},
e7e:function e7e(d,e){this.a=d
this.b=e},
e7b:function e7b(d,e){this.a=d
this.b=e},
e7a:function e7a(d){this.a=d},
e79:function e79(d){this.a=d},
aE5:function aE5(d,e,f){this.b=d
this.c=e
this.a=f},
aJc:function aJc(){},
h5q(d,e,f,g,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.a
J.bD(h.save())
w=e.a
v=e.b
u=0+w
t=0+v
h.clipRect(B.c8(new B.a7(0,0,u,t)),$.tw()[1],!0)
if(a0<3){$.W()
s=B.L()
s.r=D.aZW.gq(0)
d.aX(new B.a7(0,0,u,t),s)
if(a0<0.5)t=a0/0.5
else t=a0>2.4?(3-a0)/0.6:1
r=A.k.E(t,0,1)
t=e.e9(A.J)
s=e.ge8()
q=B.L()
q.sap(new B.bR(A.A,0.5,A.w,i,0,B.a([A.aY.j(0.35*r),A.K],x.O),i,i).au(0,B.bT(e.e9(A.J),e.ge8()*0.5)))
d.ae(t,s*0.5,q)
C.F2(d,"NGMY",new B.u(0,v*0.36),v*0.2,A.c.j(r),A.L,v*0.03,w)
C.F2(d,"T V",new B.u(0,v*0.6),v*0.08,A.aY.j(r),A.L,v*0.05,w)
q=w*0.3
s=v*0.78
t=B.L()
t.r=A.aY.j(r).gq(0)
d.aX(new B.a7(q,s,q+w*0.4*(a0/3),s+3),t)}else if(a1>=0)C.h5p(d,e,a1,g)
else{p=A.k.E((a0-3)/0.5,0,1)
o=A.o.F(f,10)
switch(o){case 0:C.hEO(d,e,g)
break
case 1:C.hwA(d,e,g)
break
case 2:C.hE9(d,e,g)
break
case 3:C.hB4(d,e,g)
break
case 4:C.hCh(d,e,g)
break
case 5:C.hEa(d,e,g)
break
case 6:C.hxN(d,e,g)
break
case 7:C.hEN(d,e,g)
break
case 8:C.hD2(d,e,g)
break
default:C.hxX(d,e,g)}s=w-v*0.34
q=v*0.04
n=v*0.03
m=B.bC(new B.a7(s,q,s+v*0.3,q+v*0.1),new B.b1(n,n))
$.W()
n=B.L()
n.r=A.x.j(0.55).gq(0)
d.aJ(m,n)
C.F2(d,"NGMY",new B.u(m.a+v*0.025,m.b+v*0.012),v*0.07,A.c,A.bf,1,i)
n=v*0.86
s=B.L()
s.r=A.x.j(0.6).gq(0)
d.aX(new B.a7(0,n,u,n+v*0.14),s)
C.F2(d,"CH "+(f+1)+"  \xb7  "+D.NJ[o].a,new B.u(q,v*0.885),v*0.075,A.c,A.bf,0,w-v*0.08)
if(p<1){s=B.L()
s.r=A.c.j(0.6*(1-p)).gq(0)
d.aX(new B.a7(0,0,u,t),s)}}$.W()
l=B.L()
l.r=A.x.j(0.07).gq(0)
for(k=0;k<v;k+=3){j=l.I()
h.drawRect(B.c8(new B.a7(0,k,u,k+1)),j)
j.delete()}u=new B.aO($.W().r,A.ap,i,i,B.a([],x.v))
u.D(new B.b4(0,0))
u.D(new B.ao(w*0.45,0))
u.D(new B.ao(0,v*0.5))
u.D(new B.bE())
v=B.L()
v.r=A.c.j(0.04).gq(0)
d.aM(u,v)
h.restore()},
F2(d,e,f,g,h,i,j,k){var w=null,v=B.ib(w,w,1,w,B.dl(w,w,w,w,w,w,w,w,w,B.l(w,w,h,w,w,w,w,w,w,w,w,g,w,w,A.u,w,w,!0,w,j,w,w,w,w,w,w),e),i,A.cg,w,A.ek,A.cf),u=k==null
v.xY(u?9999:k)
v.a4(d,f.ao(0,new B.u(i===A.L&&!u?(k-v.b.c)/2:0,0)))},
hEO(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=A.k.F(f,14),i=0+l,h=0+k
$.W()
w=B.L()
w.sap(D.ajG.au(0,new B.a7(0,0,i,h)))
d.aX(new B.a7(0,0,i,h),w)
w=B.L()
w.r=A.dU.gq(0)
d.ae(new B.u(l*0.85,k*0.18),k*0.08,w)
w=k*0.78
h=B.L()
h.r=A.w1.gq(0)
d.aX(new B.a7(0,w,i,w+k*0.22),h)
new C.f9N(d,f,k).$5(new B.u(l*0.5,k*0.8),1.5707963267948966,k*0.24,5,A.k.E(j/5,0,1)*1.4)
for(i=k*0.26,h=k*0.11,w=k*0.05,v=d.a,u=-k,t=u*0.1,u*=0.04,s=k*0.065,r=0;r<6;++r){q=A.k.E((j-(5+r*1.3))/0.5,0,1)
if(q<=0)continue
p=(r&1)===1?0.04:0
o=A.o.F(r,3)
n=A.n5.av(0,q)
J.bD(v.save())
v.translate(l*(0.2+0.12*r+p),k*(0.16+0.14*o))
v.scale(n,n)
p=B.bC(B.cJ(A.J,h,i),new B.b1(w,w))
$.W()
o=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
o.r=A.c.gq(0)
m=o.I()
v.drawRRect(B.eZ(p),m)
m.delete()
p=B.bC(B.cJ(A.J,h,i),new B.b1(w,w))
o=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
o.b=A.ac
o.c=2
o.r=A.by.gq(0)
m=o.I()
v.drawRRect(B.eZ(p),m)
m.delete()
C.F2(d,"\u2665 "+D.cDj[r],new B.u(t,u),s,A.rh,A.bf,0,null)
v.restore()}if(j>11.5)C.F2(d,"Family is everything",new B.u(0,k*0.62),k*0.09,A.hz,A.L,0,l)},
hwA(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a0.a,i=a0.b,h=0+j,g=0+i,f=$.W(),e=B.L()
e.sap(D.bGx.au(0,new B.a7(0,0,h,g)))
d.aX(new B.a7(0,0,h,g),e)
w=a1*40
for(h=d.a,g=x.v,v=0;v<2;++v,f=e){e=B.a([],g)
u=new B.aO(f.r,A.ap,k,k,e)
e.push(new B.b4(0,i))
for(f=v===0,t=0;t<=j;t+=6){s=f?0.4:1
r=f?0.62:0.78
q=f?40:28
q=new B.ao(t,i*r+Math.sin((t+w*s)/q)*i*0.05)
e.push(q)
s=u.f
if(s!=null)q.bx(s)
s=u.e
if(s!=null)s.a.delete()
u.e=null}s=new B.ao(j,i)
e.push(s)
e=u.f
if(e!=null)s.bx(e)
e=u.e
if(e!=null)e.a.delete()
u.e=null
e=$.W()
s=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
s.r=(f?A.je:A.eB).gq(0)
p=s.I()
f=u.e
h.drawPath((f==null?u.e=new B.cD(u.gbL().a.snapshot()):f).a,p)
p.delete()}for(h=i*0.04,g=w*1.3,f=j+60,e=j*0.3,o=0,n=0;n<6;++n){t=A.k.F(n*90-g,f)-30
s=Math.sin(n*1.7+a1)
if(Math.abs(t-e)<12)++o
C.hEe(d,new B.u(t,i*(0.35+0.08*s)),h,A.dU)}m=Math.abs(Math.sin(a1*5))
l=new B.u(e,i*0.72-m*i*0.22)
h=B.cJ(new B.u(e,i*0.82),i*0.025,i*0.14*(1-m*0.4))
$.W()
g=B.L()
g.r=A.dr.gq(0)
d.j3(h,g)
g=i*0.085
h=B.L()
h.sap(D.dWh.au(0,B.bT(l,g)))
d.ae(l,g,h)
h=B.L()
h.b=A.ac
h.c=2
h.r=A.w9.gq(0)
d.ae(l,g,h)
h=-i
C.F2(d,"$",l.ao(0,new B.u(h*0.03,h*0.045)),i*0.09,A.w9,A.bf,0,k)
g=h*0.01
h=l.ao(0,new B.u(h*0.028,g))
f=B.L()
f.r=A.x.gq(0)
d.ae(h,2.4,f)
g=l.ao(0,new B.u(i*0.028,g))
f=B.L()
f.r=A.x.gq(0)
d.ae(g,2.4,f)
C.F2(d,"Saved: $"+(A.o.F(A.k.bt(a1*3),1000)+o),new B.u(i*0.05,i*0.06),i*0.08,A.c,A.bf,0,k)},
hEe(d,e,f,g){var w,v,u,t,s,r,q,p=$.W(),o=B.a([],x.v),n=new B.aO(p.r,A.ap,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?f:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new B.b4(r,q)
o.push(r)
q=n.f
if(q!=null)r.bx(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new B.ao(r,q)
o.push(r)
q=n.f
if(q!=null)r.bx(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.D(new B.bE())
$.W()
p=B.L()
p.r=g.gq(0)
d.aM(n,p)},
hE9(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a3.a,d=a3.b,a0=$.W(),a1=B.L()
a1.r=D.b5_.gq(0)
a2.aX(new B.a7(0,0,0+e,0+d),a1)
w=new B.eU()
w.dM(7)
for(a1=a4*3,v=a2.a,u=0;u<60;++u){t=A.k.F(A.k.F(w.af()*e-a4*(10+w.af()*60),e)+e,e)
s=w.af()
r=w.af()
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.5+0.5*Math.sin(a1+u)).gq(0)
p=q.I()
v.drawCircle(t,s*d*0.85,0.6+r*1.4,p)
p.delete()}o=e*1.2-A.k.F(a4*22,e*1.6)
a1=d*0.3
s=d*0.2
r=B.L()
r.sap(D.dWf.au(0,B.bT(new B.u(o,a1),s)))
a2.ae(new B.u(o,a1),s,r)
a1=B.cJ(new B.u(o,a1),d*0.07,d*0.6)
r=B.L()
r.b=A.ac
r.c=3
r.r=A.bH.j(0.7).gq(0)
a2.j3(a1,r)
r=Math.sin(a4*2)
J.bD(v.save())
v.translate(e*0.42,d*0.52+r*d*0.04)
a2.iU(0,-0.25)
a0=a0.r
r=x.v
n=new B.aO(a0,A.ap,f,f,B.a([],r))
a1=-d
s=a1*0.04
q=d*0.1
n.D(new B.b4(s,q))
m=d*0.04
n.D(new B.cO(0,d*(0.2+0.05*Math.sin(a4*30)),m,q))
n.D(new B.bE())
l=B.L()
k=d*0.12
l.sap(D.bHe.au(0,new B.a7(s,q,s+d*0.08,q+k)))
a2.aM(n,l)
j=new B.aO(a0,A.ap,f,f,B.a([],r))
l=a1*0.17
j.D(new B.b4(0,l))
s=a1*0.05
i=d*0.05
j.D(new B.cO(d*0.09,s,i,q))
j.D(new B.ao(s,q))
j.D(new B.cO(a1*0.09,s,0,l))
j.D(new B.bE())
h=B.L()
g=a1*0.08
h.sap(D.bHs.au(0,new B.a7(g,l,g+d*0.16,l+d*0.27)))
a2.aM(j,h)
h=B.L()
h.r=A.aY.gq(0)
a2.ae(new B.u(0,s),d*0.035,h)
h=new B.aO(a0,A.ap,f,f,B.a([],r))
h.D(new B.b4(s,m))
h.D(new B.ao(a1*0.1,k))
h.D(new B.ao(s,q))
h.D(new B.bE())
s=B.L()
s.r=A.aD.gq(0)
a2.aM(h,s)
r=new B.aO(a0,A.ap,f,f,B.a([],r))
r.D(new B.b4(i,m))
r.D(new B.ao(q,k))
r.D(new B.ao(i,q))
r.D(new B.bE())
q=B.L()
q.r=A.aD.gq(0)
a2.aM(r,q)
v.restore()},
hB4(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=0+g,d=0+f,a0=$.W(),a1=B.L()
a1.sap(D.bGe.au(0,new B.a7(0,0,e,d)))
a2.aX(new B.a7(0,0,e,d),a1)
for(e=a2.a,d=f*0.85,a1=f*0.7,w=x.v,a0=a0.r,v=0;v<4;++v){u=g*(0.1+0.25*v)
t=B.a([],w)
s=new B.aO(a0,A.ap,h,h,t)
t.push(new B.b4(u,f))
t.push(new B.cO(u+Math.sin(a4+v)*10,d,u+4,a1+v*6))
t=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
t.b=A.ac
t.c=5
t.r=A.dk.gq(0)
r=t.I()
t=s.gbL().a.snapshot()
e.drawPath((s.e=new B.cD(t)).a,r)
r.delete()}d=A.k.F(a4*18,g*1.5)
J.bD(e.save())
e.translate(d-g*0.25,f*0.35+Math.sin(a4)*6)
d=B.cJ(A.J,f*0.22,f*0.5)
a1=B.L()
a1.r=A.bt.gq(0)
a2.j3(d,a1)
a1=new B.aO(a0,A.ap,h,h,B.a([],w))
d=-f
t=d*0.22
a1.D(new B.b4(t,0))
a1.D(new B.cO(d*0.36,d*0.12+Math.sin(a4*3)*5,d*0.34,d*0.16))
s=d*0.02
a1.D(new B.cO(d*0.28,s,t,0))
t=B.L()
t.r=A.bt.gq(0)
a2.aM(a1,t)
t=f*0.03
a1=f*0.1
q=B.cJ(new B.u(0,t),a1,f*0.34)
p=B.L()
p.r=A.aJ.gq(0)
a2.j3(q,p)
p=B.L()
p.r=A.c.gq(0)
a2.ae(new B.u(f*0.15,s),3,p)
p=B.L()
p.r=A.x.gq(0)
a2.ae(new B.u(f*0.155,s),1.5,p)
e.restore()
for(s=d*0.005,q=d*0.08,p=d*0.03,o=f*0.06,d*=0.04,n=g+40,m=a4*2,v=0;v<6;++v){l=(v&1)===0?1:-1
k=A.k.F(A.k.F(a4*(24+v*7)*l+v*80,n)+g+40,n)
j=Math.sin(m+v)
J.bD(e.save())
e.translate(k-20,f*(0.52+0.06*v)+j*6)
e.scale(l,1)
k=B.cJ(A.J,o,a1)
j=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
i=A.o.F(v,4)
j.r=D.aqs[i].gq(0)
r=j.I()
e.drawOval(B.c8(k),r)
r.delete()
k=B.a([],w)
j=new B.aO(a0,A.ap,h,h,k)
k.push(new B.b4(d,0))
k.push(new B.ao(q,p))
k.push(new B.ao(q,t))
k.push(new B.bE())
k=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
k.r=D.aqs[i].gq(0)
r=k.I()
k=j.gbL().a.snapshot()
e.drawPath((j.e=new B.cD(k)).a,r)
r.delete()
k=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
k.r=A.x.gq(0)
r=k.I()
e.drawCircle(t,s,1.8,r)
r.delete()
e.restore()}for(v=0;v<14;++v){d=A.k.F(v*0.071+0.05,1)
a0=A.k.F(a4*(14+v*3)+v*40,f)
a1=Math.sin(m+v)
w=A.o.F(v,3)
t=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
t.b=A.ac
t.c=1.2
t.r=A.c.j(0.7).gq(0)
r=t.I()
e.drawCircle(g*d+a1*4,f-a0,2+w,r)
r.delete()}},
hCh(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a9.a,a1=a9.b,a2=A.k.F(b0,12),a3=a2<7,a4=0+a0,a5=0+a1,a6=$.W(),a7=B.L()
a7.sap(new B.a3(A.aX,A.b1,A.w,a3?D.asC:D.cKM,d,d).au(0,new B.a7(0,0,a4,a5)))
a8.aX(new B.a7(0,0,a4,a5),a7)
a7=a1*0.74
w=B.L()
w.r=(a3?D.b8x:A.w1).gq(0)
a8.aX(new B.a7(0,a7,a4,a7+a1*0.26),w)
for(w=a8.a,v=a1*0.07,u=a1*0.06,t=a1*0.2,s=a1*0.1,r=a1*0.09,q=x.v,p=b0*2,a6=a6.r,o=0;o<4;++o){n=a0*(0.08+0.24*o)
m=a1*(0.14+0.03*A.o.F(o,2))
l=a7-m
k=n+t
j=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
j.r=D.cyn[o].gq(0)
i=j.I()
w.drawRect(B.c8(new B.a7(n,l,k,l+m)),i)
i.delete()
j=B.a([],q)
h=new B.aO(a6,A.ap,d,d,j)
j.push(new B.b4(n-4,l))
j.push(new B.ao(n+s,l-r))
j.push(new B.ao(k+4,l))
j.push(new B.bE())
l=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
l.r=A.f_.gq(0)
i=l.I()
l=h.gbL().a.snapshot()
w.drawPath((h.e=new B.cD(l)).a,i)
i.delete()
l=n+v
k=m*0.55
j=a7-k
h=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
h.r=(a3&&A.o.F(A.k.bt(p),2)===0?A.ll:A.h6).gq(0)
i=h.I()
w.drawRect(B.c8(new B.a7(l,j,l+u,j+k)),i)
i.delete()}if(a3){for(a7=b0*20,u=b0*260,t=a1*0.8,o=0;o<70;++o){n=A.k.F(o*37+a7,a0)
g=A.k.F(o*53+u,t)
r=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.fe.gq(0)
r.c=1.4
i=r.I()
w.drawLine.apply(w,[n,g,n-3,g+9,i])
i.delete()}a7=b0*3
if(A.o.F(A.k.bt(a7),7)===0&&A.k.F(a7,1)<0.3){a7=B.L()
a7.r=A.c.j(0.5).gq(0)
a8.aX(new B.a7(0,0,a4,a5),a7)
q=new B.aO(a6,A.ap,d,d,B.a([],q))
q.D(new B.b4(a0*0.6,s))
s=a0*0.55
a6=a1*0.3
q.D(new B.ao(s,a6))
q.D(new B.ao(a0*0.62,a6))
q.D(new B.ao(s,a1*0.55))
s=B.L()
s.b=A.ac
s.c=4
s.r=A.ll.gq(0)
a8.aM(q,s)}}else{for(a4=a0*0.5,a5=a1*0.035,a6=3.141592653589793*A.k.E((a2-7)/2,0,1)*57.29577951308232,o=0;o<6;++o){u=a0*(0.9-o*0.07)
u=B.cJ(new B.u(a4,a7),u,u)
t=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
t.b=A.ac
t.c=a5
t.r=D.cZT[o].j(0.9).gq(0)
i=t.I()
w.drawArc.apply(w,[B.c8(u),180,a6,!1,i])
i.delete()}a4=B.L()
a4.r=A.dU.gq(0)
a8.ae(new B.u(a0*0.86,a1*0.16),a1*0.08,a4)}for(a4=a0+120,o=0;o<3;++o){n=A.k.F(b0*(8+o*4)+o*120,a4)-60
for(a5=a1*(0.12+0.1*o),f=0;f<4;++f){e=D.c3N[f]
$.W()
a6=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a6.r=(a3?A.bj:A.c.j(0.95)).gq(0)
i=a6.I()
w.drawCircle(n+e.a,a5+e.b,v,i)
i.delete()}}},
hEa(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a3.a,a1=a3.b
$.W()
w=B.L()
w.r=A.d9.gq(0)
a2.aX(new B.a7(0,0,0+a0,0+a1),w)
v=B.L()
v.r=A.c.j(0.05).gq(0)
for(w=a2.a,u=0;u<a0;u+=16){t=v.I()
w.drawLine.apply(w,[u,0,u,a1,t])
t.delete()}for(s=0;s<a1;s+=16){t=v.I()
w.drawLine.apply(w,[0,s,a0,s,t])
t.delete()}r=a0*0.14
q=a1*0.2
p=a1*0.08
o=B.bC(new B.a7(r,q,r+a0*0.72,q+a1*0.5),new B.b1(p,p))
n=new B.aO($.W().r,A.ap,null,null,B.a([],x.v))
n.D(new B.iO(o))
q=B.L()
q.b=A.ac
q.c=5
q.r=A.bt.gq(0)
a2.aM(n,q)
m=new B.Kz(new B.tG(B.uY(n),!1,B.a([],x.Q))).gL(0)
q=m.a
l=m.b
q.im()
k=q.e
j=k[l].b
j===$&&B.c()
j=j.a.length()
q.im()
i=k[l].b
i===$&&B.c()
h=A.k.F(a4*j/5,i.a.length())
for(g=0;g<10;++g){q.im()
j=k[l].b
j===$&&B.c()
j=A.k.F(h-g*9,j.a.length())
q.im()
f=k[l].FE(j).a
j=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
j.r=A.dU.j(1-g*0.09).gq(0)
j.z=E.OM
t=j.I()
w.drawCircle(f.a,f.b,6-g*0.5,t)
t.delete()}w=a1*0.45
q=B.bC(B.cJ(new B.u(r,w),a1*0.22,a1*0.12),A.j9)
l=B.L()
l.r=A.dk.gq(0)
a2.aJ(q,l)
C.F2(a2,"+",new B.u(r-5,a1*0.33),a1*0.07,A.c,A.bf,0,null)
e=(Math.sin(a4*2)+1)/2
d=new B.u(a0*0.86,w)
w=B.L()
w.r=A.dU.j(0.25+0.5*e).gq(0)
w.z=R.G_
a2.ae(d,a1*0.16,w)
w=B.L()
w.r=B.aq(A.bI,A.qb,e).gq(0)
a2.ae(d,p,w)
C.F2(a2,"Electricity needs a full loop!",new B.u(0,a1*0.74),a1*0.075,A.fJ,A.L,0,a0)},
hxN(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=B.L()
w.sap(D.bJq.au(0,new B.a7(0,0,a3,a4)))
a5.aX(new B.a7(0,0,a3,a4),w)
w=a2*0.82
a4=B.L()
a4.r=A.d9.gq(0)
a5.aX(new B.a7(0,w,a3,w+a2*0.18),a4)
for(a3=a1*0.1,a4=a5.a,v=0;v<7;++v){u=a1*(0.05+v*0.15)
t=a2*(0.1+0.07*A.o.F(v*5,4))
s=w-t
r=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.aF.gq(0)
q=r.I()
a4.drawRect(B.c8(new B.a7(u,s,u+a3,s+t)),q)
q.delete()}for(a3=a2*0.2,s=a7*0.55,p=0;p<4;++p){r=s+p*0.27
o=A.k.F(r,1)
n=A.k.bt(r)*7+p*3
m=a1*(0.15+0.7*A.k.F(n*0.37,1))
l=a2*(0.2+0.25*A.k.F(n*0.53,1))
k=D.cjJ[A.o.F(Math.abs(n),5)]
if(o<0.3){$.W()
r=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.c.gq(0)
q=r.I()
a4.drawCircle(m,w-(w-l)*(o/0.3),2.5,q)
q.delete()}else{v=(o-0.3)/0.7
for(r=v*v*a2*0.08,j=1-v,i=2.4*j+0.4,h=0;h<28;++h){g=h*3.141592653589793*2/28
f=a3*A.dS.av(0,v)
e=Math.cos(g)
d=Math.sin(g)
$.W()
a0=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a0.r=k.j(A.k.E(j,0,1)).gq(0)
a0.z=D.d6C
q=a0.I()
a4.drawCircle(m+e*f,l+d*f+r,i,q)
q.delete()}}}},
hEN(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,a0=a6.b,a1=0+d,a2=0+a0,a3=$.W(),a4=B.L()
a4.sap(D.ajG.au(0,new B.a7(0,0,a1,a2)))
a5.aX(new B.a7(0,0,a1,a2),a4)
for(a2=a5.a,a4=x.v,w=0;w<2;++w,a3=v){v=B.a([],a4)
u=new B.aO(a3.r,A.ap,null,null,v)
v.push(new B.b4(0,a0))
for(a3=w===0,t=0;t<=d;t+=6){s=a3?8:20
r=a3?0.55:0.68
q=a3?50:34
q=new B.ao(t,a0*r+Math.sin((t+a7*s)/q)*a0*0.06)
v.push(q)
s=u.f
if(s!=null)q.bx(s)
s=u.e
if(s!=null)s.a.delete()
u.e=null}s=new B.ao(d,a0)
v.push(s)
v=u.f
if(v!=null)s.bx(v)
v=u.e
if(v!=null)v.a.delete()
u.e=null
v=$.W()
s=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
s.r=(a3?A.D0:A.w1).gq(0)
p=s.I()
a3=u.e
a2.drawPath((a3==null?u.e=new B.cD(u.gbL().a.snapshot()):a3).a,p)
p.delete()}a3=a0*0.8
a4=B.L()
a4.r=A.bt.gq(0)
a5.aX(new B.a7(0,a3,a1,a3+a0*0.04),a4)
for(t=-A.k.F(a7*80,24),a1=a0*0.84,a4=a0*0.03,v=a1+a4;t<d;t+=24){s=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
s.r=A.h6.gq(0)
p=s.I()
a2.drawRect(B.c8(new B.a7(t,a1,t+8,v)),p)
p.delete()}o=Math.sin(a7*14)*1.2
n=d*0.12
for(a1=a3+o,a3=a0*0.025,v=d*0.012,s=a0*0.02,r=a0*0.62+o,a4=r+a4,q=a4+a0*0.06,m=r+a0*0.18,l=0;l<4;++l){k=l===0
j=n+d*(k?0.16:0.15)
i=B.bC(new B.a7(n,r,j,m),new B.b1(s,s))
h=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
h.r=(k?A.bO:D.cKO[l-1]).gq(0)
p=h.I()
a2.drawRRect(B.eZ(i),p)
p.delete()
for(j-=n,i=j*0.18,g=0;g<3;++g){h=n+j*(0.12+g*0.28)
f=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
f.r=A.fe.gq(0)
p=f.I()
a2.drawRect(B.c8(new B.a7(h,a4,h+i,q)),p)
p.delete()}i=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=A.bg.gq(0)
p=i.I()
a2.drawCircle(n+j*0.25,a1,a3,p)
p.delete()
i=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=A.bg.gq(0)
p=i.I()
a2.drawCircle(n+j*0.75,a1,a3,p)
p.delete()
n+=j+v}for(a1=a7*0.8,a3=d*0.2,a4=a0*0.6,l=0;l<5;++l){e=A.k.F(a1+l*0.2,1)
v=e*a0
r=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.7*(1-e)).gq(0)
p=r.I()
a2.drawCircle(a3-e*d*0.12,a4-v*0.25,s+v*0.04,p)
p.delete()}},
hD2(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a4.a,a0=a4.b,a1=0+d,a2=0+a0
$.W()
w=B.L()
v=a5*2
u=B.aq(A.je,A.im,(Math.sin(v)+1)/2)
u.toString
w.sap(new B.a3(A.ax,A.aC,A.w,B.a([u,A.aF],x.O),null,null).au(0,new B.a7(0,0,a1,a2)))
a3.aX(new B.a7(0,0,a1,a2),w)
for(a1=a3.a,a2=a0*0.86,w=d/8-2,u=a0*0.14,t=a2+u,s=0;s<8;++s){r=d*s/8
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=(A.k.F(v+s,2)<1?A.bU:A.aY).j(0.5).gq(0)
p=q.I()
a1.drawRect(B.c8(new B.a7(r,a2,r+w,t)),p)
p.delete()}a2=a5*6
o=Math.sin(a2)
J.bD(a1.save())
w=-a0
a1.translate(d*0.5,a0*0.55+Math.abs(o)*w*0.03)
a3.iU(0,o*0.06)
t=a0*0.26
r=a0*0.3
q=a0*0.04
n=B.bC(B.cJ(A.J,r,t),new B.b1(q,q))
m=B.L()
m.sap(D.bJP.au(0,B.cJ(A.J,r,t)))
a3.aJ(n,m)
m=a0*0.08
u=B.cJ(new B.u(0,a0*0.02),m,u)
n=B.L()
n.r=A.b6.j(0.7).gq(0)
a3.aX(u,n)
n=B.bC(B.cJ(new B.u(0,w*0.25),a0*0.17,a0*0.22),new B.b1(q,q))
u=B.L()
u.r=A.cp.gq(0)
a3.aJ(n,u)
l=A.k.F(a5*1.3,1)>0.08
for(u=w*0.26,t=a0*0.025,k=0;k<2;++k){j=D.c3q[k]
r=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=(l?A.b6:A.im).gq(0)
p=r.I()
a1.drawCircle(j*a0,u,t,p)
p.delete()}u=B.L()
u.r=A.af.gq(0)
u.c=3
a3.bE(new B.u(0,w*0.335),new B.u(0,w*0.38),u)
u=B.L()
u.r=A.aD.gq(0)
a3.ae(new B.u(0,w*0.39),a0*0.015,u)
for(u=-o,t=a0*0.035,r=a0*0.15,n=a0*0.28,w*=0.08,k=0;k<2;++k){i=D.a_N[k]
J.bD(a1.save())
h=i*a0
a1.translate(h*0.14,w)
g=i>0
a1.rotate(i*(0.7+Math.sin(a2+(g?0:3.141592653589793))*0.8)*180/3.141592653589793,0,0)
f=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
f.r=A.bI.gq(0)
f.c=t
f.d=A.bL
p=f.I()
a1.drawLine.apply(a1,[0,0,h*0.16,0,p])
p.delete()
a1.restore()
g=g?o:u
f=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
f.r=A.bI.gq(0)
f.c=q
f.d=A.bL
p=f.I()
a1.drawLine.apply(a1,[h*0.06,r,h*0.08,n+g*a0*0.02,p])
p.delete()}a1.restore()
for(a1=a5*0.7,a2=a0*0.7,s=0;s<4;++s){e=A.k.F(a1+s*0.25,1)
C.F2(a3,"\u266a",new B.u(d*(0.2+0.18*s)+Math.sin(v+s)*8,a2-e*a0*0.5),m,A.c.j(1-e),A.bf,0,null)}},
hxX(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=0+e,a1=0+d
$.W()
w=B.L()
w.sap(D.bIo.au(0,new B.a7(0,0,a0,a1)))
a2.aX(new B.a7(0,0,a0,a1),w)
w=B.L()
w.r=A.dU.gq(0)
a2.ae(new B.u(e*0.12,d*0.16),d*0.07,w)
w=d*0.72
a1=B.L()
a1.r=A.D0.gq(0)
a2.aX(new B.a7(0,w,a0,w+d*0.28),a1)
for(a0=a4*0.25,a1=d*0.78,w=a2.a,v=d*0.016,u=a4*0.3,t=d*0.022,s=0;s<9;++s){r=e*(0.07+s*0.105)
q=A.k.E(A.k.F(a0-s*0.12,3),0,1)
p=A.o.F(s,3)
o=r+Math.sin(a4+s)*3
p=a1-d*(0.12+0.05*p)*q
n=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
n.r=A.fx.gq(0)
n.c=3
m=n.I()
w.drawLine.apply(w,[r,a1,o,p,m])
m.delete()
if(q>0.7){for(l=0;l<6;++l){k=l*3.141592653589793/3+u
n=Math.cos(k)
j=Math.sin(k)
i=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=D.ars[A.o.F(s,5)].gq(0)
m=i.I()
w.drawCircle(o+n*d*0.028,p+j*d*0.028,t,m)
m.delete()}n=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
n.r=A.dU.gq(0)
m=n.I()
w.drawCircle(o,p,v,m)
m.delete()}}for(a0=d*0.03,a1=d*0.05,v=d*0.06,u=a4*0.9,t=a4*1.3,p=a4*18,s=0;s<3;++s){r=e*(0.2+0.28*s)+Math.sin(u+s*2)*e*0.12
h=d*(0.3+0.1*s)+Math.cos(t+s)*d*0.06
g=Math.abs(Math.sin(p+s))
for(o=a1*g+2,n=(s+2)%5,f=0;f<2;++f){j=B.cJ(new B.u(r+D.a_N[f]*d*0.025*g,h),v,o)
i=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=D.ars[n].gq(0)
m=i.I()
w.drawOval(B.c8(j),m)
m.delete()}o=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
o.r=A.bg.gq(0)
o.c=2
m=o.I()
w.drawLine.apply(w,[r,h-a0,r,h+a0,m])
m.delete()}},
hRG(d,e,f,g){return B.a9(d,!1).cp(B.ua(null,!1,!0,!0,new C.fxP(e,g,f),A.eM,null,A.qg,new C.fxQ(),x.S))},
wV:function wV(d,e){this.a=d
this.b=e},
f9N:function f9N(d,e,f){this.a=d
this.b=e
this.c=f},
fxP:function fxP(d,e,f){this.a=d
this.b=e
this.c=f},
fxQ:function fxQ(){},
Uu:function Uu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBH:function aBH(d,e){var _=this
_.e=_.d=$
_.f=-1
_.r=!1
_.w=null
_.x=0
_.y=!0
_.z=null
_.bp$=d
_.a6$=e
_.c=_.a=null},
eqY:function eqY(d){this.a=d},
eqX:function eqX(d){this.a=d},
eqW:function eqW(d,e){this.a=d
this.b=e},
eqZ:function eqZ(d,e){this.a=d
this.b=e},
er7:function er7(d){this.a=d},
er6:function er6(d){this.a=d},
er5:function er5(){},
er0:function er0(d){this.a=d},
er1:function er1(d){this.a=d},
er2:function er2(d){this.a=d},
er3:function er3(d){this.a=d},
er_:function er_(d){this.a=d},
er4:function er4(d){this.a=d},
eqV:function eqV(d){this.a=d},
eqS:function eqS(d){this.a=d},
eqU:function eqU(d){this.a=d},
eqT:function eqT(d,e){this.a=d
this.b=e},
bqS:function bqS(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aJu:function aJu(){},
f5e(d,e,f,g){var w=null,v=B.m(24),u=B.H(f.j(0.6),A.r,1)
return B.au(B.p(w,B.v(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.ar,B.d(e,w,w,w,w,w,w,A.Hv,A.L,w,w),A.ay,B.c9(A.fG,g,A.bx,0,8)],x.p),A.m,w,A.e,A.R,0,A.p),A.h,w,w,new B.o(D.Tr,w,u,v,w,w,A.n),w,w,w,A.eq,A.a8,w,w,w),w,w,w)},
fIk(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new B.eU()
b4.dM(b5*977+13)
w=A.o.E(1+A.o.ak(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aB(5)
q=r*7
p=B.a([],v)
o=B.a([],v)
n=B.T(u,t)
m=w
l=0
k=L.pw
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
a2=b4.he()?new B.A(f,-g):new B.A(-f,g)
a3=new B.A(-f,-g).A(0,a2)
a4=l+a2.a
a5=r+a2.b
if(a4<0||a5<0||a4>=7||a5>=7)break A
o.push(r*7+l);--m
g=A.d.gaj(o)
n.m(0,g,a3?"/":"\\")
k=a2}}if(!j||o.length<w||p.length<5)continue
g=B.a([],v)
for(f=p.length,a6=0;a6<p.length;p.length===f||(0,B.K)(p),++a6){a7=p[a6]
if(!A.d.t(o,a7))g.push(a7)}if(g.length<3)continue
a8=A.o.E(2+A.o.ak(b5,8),2,4)
a9=B.eN([A.d.gaj(g)],u)
A.d.fA(g,b4)
for(v=g.length,a6=0;a6<g.length;g.length===v||(0,B.K)(g),++a6){a7=g[a6]
if(a9.a>=a8)break
a9.K(0,a7)}b0=B.aZ(u)
b1=3+A.o.ak(b5,3)
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
return new C.aTj(b0,a9,B.T(u,t),q,L.pw,w+v)}return new C.aTj(B.aZ(u),B.eN([25],u),B.T(u,t),21,L.pw,1)},
h6f(d,e){var w,v,u,t,s,r,q,p=B.a([],x.t),o=B.aZ(x.S),n=d.e,m=A.o.F(n,7),l=A.o.ak(n,7),k=d.f
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
if(q==="/")k=new B.A(-s,-t)
if(q==="\\")k=new B.A(k.b,k.a)}return new B.bkN(p,o)},
h1D(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aTj:function aTj(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
TH:function TH(d){this.a=d},
bgv:function bgv(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.fb$=g
_.kA$=h
_.fF$=i
_.fc$=j
_.bp$=k
_.a6$=l
_.c=_.a=null},
dZ8:function dZ8(d){this.a=d},
dZ7:function dZ7(d,e){this.a=d
this.b=e},
dZ9:function dZ9(){},
dYZ:function dYZ(d,e){this.a=d
this.b=e},
dZ_:function dZ_(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dZ2:function dZ2(d,e){this.a=d
this.b=e},
dZ0:function dZ0(d){this.a=d},
dZ1:function dZ1(d){this.a=d},
dZ3:function dZ3(d){this.a=d},
dZ4:function dZ4(d){this.a=d},
dZ5:function dZ5(d){this.a=d},
dZ6:function dZ6(d,e){this.a=d
this.b=e},
bdz:function bdz(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
da0:function da0(d,e,f){this.a=d
this.b=e
this.c=f},
da3:function da3(d,e,f){this.a=d
this.b=e
this.c=f},
da1:function da1(d){this.a=d},
da2:function da2(d){this.a=d},
TJ:function TJ(d){this.a=d},
aB4:function aB4(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.fb$=g
_.kA$=h
_.fF$=i
_.fc$=j
_.bp$=k
_.a6$=l
_.c=_.a=null},
dZr:function dZr(d){this.a=d},
dZq:function dZq(d,e){this.a=d
this.b=e},
dZs:function dZs(){},
dZc:function dZc(){},
dZl:function dZl(d,e){this.a=d
this.b=e},
dZi:function dZi(d){this.a=d},
dZe:function dZe(d){this.a=d},
dZj:function dZj(d){this.a=d},
dZk:function dZk(d){this.a=d},
dZd:function dZd(d){this.a=d},
dZm:function dZm(d){this.a=d},
dZh:function dZh(d,e){this.a=d
this.b=e},
dZn:function dZn(d){this.a=d},
dZg:function dZg(d,e){this.a=d
this.b=e},
dZo:function dZo(d){this.a=d},
dZf:function dZf(d,e){this.a=d
this.b=e},
dZp:function dZp(d){this.a=d},
bdO:function bdO(d,e){this.b=d
this.a=e},
aIY:function aIY(){},
btq:function btq(){},
aIZ:function aIZ(){},
btr:function btr(){},
ZS(d,e,f,g,h,i){return new C.bqg(d,e,f,g,h,i)},
bqg:function bqg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f1J:function f1J(){},
f1K:function f1K(){},
f1L:function f1L(){},
f1M:function f1M(){},
f1N:function f1N(){},
f1O:function f1O(){},
f1P:function f1P(){},
f1Q:function f1Q(){},
a6f:function a6f(d){this.a=d},
caD:function caD(d){this.a=d},
caE:function caE(){},
caC:function caC(d,e){this.a=d
this.b=e},
caB:function caB(d){this.a=d},
Uz:function Uz(d){this.a=d},
aBT:function aBT(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.fb$=f
_.kA$=g
_.fF$=h
_.fc$=i
_.bp$=j
_.a6$=k
_.c=_.a=null},
ev5:function ev5(d){this.a=d},
ev1:function ev1(d){this.a=d},
ev0:function ev0(d,e){this.a=d
this.b=e},
ev3:function ev3(d,e){this.a=d
this.b=e},
ev2:function ev2(d,e){this.a=d
this.b=e},
ev4:function ev4(d){this.a=d},
brC:function brC(d,e,f){this.b=d
this.c=e
this.a=f},
Ti:function Ti(d){this.a=d},
bg4:function bg4(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.fb$=d
_.kA$=e
_.fF$=f
_.fc$=g
_.bp$=h
_.a6$=i
_.c=_.a=null},
dM8:function dM8(){},
dM9:function dM9(){},
dM3:function dM3(d,e){this.a=d
this.b=e},
dM5:function dM5(d,e){this.a=d
this.b=e},
dM6:function dM6(d){this.a=d},
dM4:function dM4(d){this.a=d},
dM7:function dM7(d){this.a=d},
bmx:function bmx(d,e,f){this.b=d
this.c=e
this.a=f},
Sw:function Sw(d){this.a=d},
bfK:function bfK(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.fb$=d
_.kA$=e
_.fF$=f
_.fc$=g
_.bp$=h
_.a6$=i
_.c=_.a=null},
dxT:function dxT(){},
dxU:function dxU(){},
dxO:function dxO(){},
dxR:function dxR(d,e){this.a=d
this.b=e},
dxQ:function dxQ(d,e){this.a=d
this.b=e},
dxS:function dxS(d){this.a=d},
dxP:function dxP(d){this.a=d},
aFf:function aFf(d,e,f){this.a=d
this.b=e
this.c=f},
T9:function T9(d){this.a=d},
bfZ:function bfZ(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dJr:function dJr(d,e){this.a=d
this.b=e},
dJs:function dJs(d){this.a=d},
dJq:function dJq(d,e){this.a=d
this.b=e},
dJt:function dJt(d){this.a=d},
dJp:function dJp(d,e){this.a=d
this.b=e},
dJu:function dJu(d){this.a=d},
dJo:function dJo(d,e){this.a=d
this.b=e},
dJv:function dJv(d,e){this.a=d
this.b=e},
dJn:function dJn(d,e){this.a=d
this.b=e},
dJw:function dJw(d){this.a=d},
dJm:function dJm(d,e){this.a=d
this.b=e},
dJx:function dJx(d){this.a=d},
dJl:function dJl(d){this.a=d},
dJy:function dJy(d){this.a=d},
dJk:function dJk(d){this.a=d},
dJz:function dJz(d){this.a=d},
dJA:function dJA(d){this.a=d},
dJj:function dJj(d){this.a=d},
bi0:function bi0(d,e,f){this.b=d
this.c=e
this.a=f},
TV:function TV(d){this.a=d},
aBe:function aBe(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
e3z:function e3z(d,e){this.a=d
this.b=e},
e3A:function e3A(d,e,f){this.a=d
this.b=e
this.c=f},
e3y:function e3y(d,e,f){this.a=d
this.b=e
this.c=f},
e3B:function e3B(d){this.a=d},
e3x:function e3x(d){this.a=d},
e3F:function e3F(d){this.a=d},
e3E:function e3E(d,e){this.a=d
this.b=e},
e3D:function e3D(d,e){this.a=d
this.b=e},
e3G:function e3G(d,e){this.a=d
this.b=e},
e3C:function e3C(d,e){this.a=d
this.b=e},
e3H:function e3H(d){this.a=d},
U7:function U7(d){this.a=d},
aBx:function aBx(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
ecb:function ecb(d){this.a=d},
ecc:function ecc(d){this.a=d},
ec9:function ec9(d,e){this.a=d
this.b=e},
eca:function eca(d){this.a=d},
ec8:function ec8(d){this.a=d},
ecd:function ecd(d){this.a=d},
ece:function ece(d){this.a=d},
ecf:function ecf(d){this.a=d},
ecg:function ecg(d,e){this.a=d
this.b=e},
Us:function Us(d){this.a=d},
bhd:function bhd(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eqt:function eqt(){},
eqC:function eqC(){},
eqy:function eqy(d){this.a=d},
eqx:function eqx(){},
eqz:function eqz(d,e){this.a=d
this.b=e},
eqw:function eqw(d,e){this.a=d
this.b=e},
eqA:function eqA(d){this.a=d},
eqv:function eqv(d,e){this.a=d
this.b=e},
eqB:function eqB(d){this.a=d},
equ:function equ(d){this.a=d},
TT:function TT(d){this.a=d},
bgG:function bgG(d,e,f,g,h,i,j,k){var _=this
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
_.kA$=g
_.fF$=h
_.fc$=i
_.bp$=j
_.a6$=k
_.c=_.a=null},
e2e:function e2e(){},
e2f:function e2f(){},
e27:function e27(d){this.a=d},
e26:function e26(d){this.a=d},
e28:function e28(d){this.a=d},
e25:function e25(d){this.a=d},
e29:function e29(d){this.a=d},
e24:function e24(d){this.a=d},
e2a:function e2a(d,e){this.a=d
this.b=e},
e23:function e23(d,e){this.a=d
this.b=e},
e2b:function e2b(d){this.a=d},
e22:function e22(d,e){this.a=d
this.b=e},
e2c:function e2c(d){this.a=d},
e21:function e21(d,e){this.a=d
this.b=e},
e2d:function e2d(d){this.a=d},
e20:function e20(d,e){this.a=d
this.b=e},
b9N:function b9N(d,e,f){this.c=d
this.d=e
this.a=f},
aIk:function aIk(){},
bth:function bth(){},
aIC:function aIC(){},
btm:function btm(){},
aJ6:function aJ6(){},
btw:function btw(){},
aJB:function aJB(){},
btI:function btI(){},
jy(d,e,f,g,h,i){return new C.b3s(h,d,f,g,i,e,null)},
h66(d,e,f,g){var w=null
return B.ch(w,w,!0,w,new C.fyf(g,e,f),d,w,!0,!0,x.H)},
hp(d,e,f,g,h,i,j){return new C.at3(f,j,i,h,g,d,e,null)},
qk(d,e,f){return C.hRT(d,e,f)},
hRT(d,e,f){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qk=B.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aT.ag$.x.h(0,e)
n=n==null?null:n.gb6()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return B.b(r.lQ(2),$async$qk)
case 7:q=h
w=8
return B.b(q.hf(A.fO),$async$qk)
case 8:p=h
if(p==null){w=1
break}o=J.f5(A.dD.gaO(p))
w=9
return B.b(C.ckO(B.a([C.fWe(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qk)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.H(x.gV).f.P(D.aIS)
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$qk,v)},
hnD(b4,b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=A.o.ak(22050*b5,1000),b1=b0*2,b2=new DataView(new ArrayBuffer(44+b1)),b3=new C.cay(b2)
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
w=new B.eU()
w.dM(3)
v=3
u=0.006
t=!1
s=0
switch(b8){case"piano":r=D.cEx
q=D.cJm
v=3.4
break
case"organ":r=D.cIm
q=D.cWa
u=0.02
t=!0
break
case"bell":r=D.cAw
q=D.czv
v=2.4
break
case"pluck":r=D.cEw
q=D.clx
v=7
break
case"synth":r=D.cWZ
q=D.cYB
u=0.012
t=!0
break
case"flute":r=D.d1m
q=D.bXe
u=0.07
t=!0
s=0.035
break
default:r=D.ak6
q=D.ak6}b1=r.length
p=B.bY(b1,0,!1,x.i)
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
break A}if(o){a4=A.k.F(d/6.283185307179586,1)*1.2-0.6
break A}a4=Math.sin(d)
break A}a5=a4*(Math.min(1,a0/120)*Math.pow(a2,1.6))}b2.setInt16(44+a0*2,A.o.E(A.k.U(a5*0.8*32e3),-32768,32767),!0)}return J.f5(A.dD.gaO(b2))},
dG(d,e,f,g,h,i){return C.hnE(d,e,f,g,h,i)},
hnE(d,e,f,g,h,i){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n
var $async$dG=B.e(function(j,k){if(j===1){t.push(k)
w=u}for(;;)switch(w){case 0:u=3
s=""+A.k.U(d)+"|"+f+"|"+i+"|"+B.t(g)+"|"+e
r=$.hnC.ce(0,s,new C.caA(d,f,i,g,e))
if($.cax.length<12){p=B.ag3()
p.Lr(A.aGX)
$.cax.push(p)}p=$.fTx
$.fTx=p+1
q=$.cax[A.o.F(p,$.cax.length)]
w=6
return B.b(J.haZ(q,new B.a1f(r,null),h),$async$dG)
case 6:u=1
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
return B.i($async$dG,v)},
l3(d,e,f,g){var w,v=$.aZv
if(v==="music")return C.dG(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return C.dG(261.63*v,w,f,0,g,"sine")}return C.vk(v,e,f,g)},
vk(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.E(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return C.dG(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return C.dG(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return C.dG(140+A.o.F(e,12)*9,"",150,0.9,g,v)
case"bubble":return C.dG(260+A.o.F(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":C.dG(t,"",160,-0.7,g*0.4,w)
return C.dG(900,"",90,0,g*0.45,u)
case"zap":return C.dG(t*3,"",150,1.6,g*0.4,"square")
case"click":return C.dG(2600+A.o.F(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":C.dG(320,"",220,-0.7,g*0.35,v)
return C.dG(1500,"",200,0,g*0.22,u)
case"organic":return C.dG(85+A.o.F(e,12)*5,"",190,1.1,g,v)
case"lab":return C.dG(t*1.6,"",140,-0.3,g*0.55,w)
default:return C.dG(t,"",s,0,g*0.5,w)}},
AG(d,e,f,g){var w,v,u,t,s,r,q,p=$.aZv
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.K)(e),++w)C.l3(d,e[w],f,g)
return}for(p=B.df(e,0,B.dK(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bV(p,p.gJ(0),v.k("bV<ai.E>")),u=x.H,v=v.k("ai.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)C.l3(d,s,f,g)
else B.bN(new B.b8(1000*q),new C.caz(d,s,f,g),u)}},
a6e(d,e){var w="sine",v="noise"
switch(d){case"kick":C.dG(95,"",200,1.8,e,w)
break
case"snare":C.dG(220,"",140,0,e*0.65,v)
break
case"hat":C.dG(5000,"",50,0,e*0.35,v)
break
case"open":C.dG(5200,"",220,0,e*0.35,v)
break
case"clap":C.dG(1100,"",100,0,e*0.5,v)
break
case"tom":C.dG(150,"",230,1,e,w)
break
case"low":C.dG(100,"",260,0.9,e,w)
break
case"rim":C.dG(1700,"",60,0,e*0.4,"square")
break
case"cow":C.dG(820,"",240,0,e*0.3,"square")
break
case"crash":C.dG(3200,"",650,0,e*0.4,v)
break
case"shake":C.dG(7000,"",90,0,e*0.3,v)
break
default:C.dG(60,"",300,0,e,w)}},
yC(d){return C.hmS(d)},
hmS(d){var w=0,v=B.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
var $async$yC=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ax(),$async$yC)
case 7:r=f
q=B.aS(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.T(x.N,x.z)
w=1
break}p=A.Q.aD(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?B.a_(p,o,n):B.T(o,n)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=B.T(x.N,x.z)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$yC,v)},
vh(d,e){return C.hmT(d,e)},
hmT(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$vh=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$vh)
case 6:s=g
w=7
return B.b(s.aq("String","ngmy_play_progress_v1_"+d,A.Q.al(e,null)),$async$vh)
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
return B.i($async$vh,v)},
b3s:function b3s(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cmI:function cmI(d){this.a=d},
cmJ:function cmJ(d,e){this.a=d
this.b=e},
fyf:function fyf(d,e,f){this.a=d
this.b=e
this.c=f},
fye:function fye(d){this.a=d},
dw:function dw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cmE:function cmE(d){this.a=d},
eF:function eF(d,e,f){this.c=d
this.d=e
this.a=f},
at3:function at3(d,e,f,g,h,i,j,k){var _=this
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
cmD:function cmD(d){this.a=d},
E3:function E3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cmK:function cmK(d){this.a=d},
mh:function mh(){},
cmF:function cmF(d,e,f){this.a=d
this.b=e
this.c=f},
cmH:function cmH(d){this.a=d},
cmG:function cmG(){},
cay:function cay(d){this.a=d},
caA:function caA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
caz:function caz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cpe(){var w=0,v=B.j(x.cL),u,t
var $async$cpe=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=C
w=3
return B.b($.ty().baW("assets/data/world110.json"),$async$cpe)
case 3:u=t.hro(e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cpe,v)},
hro(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.Q.aD(0,a2,null)),a1=B.a([],x.dO)
for(w=J.aU(a0),v=x.n,u=x.b,t=x.a,s=x.gO;w.C();){r=t.a(w.gT(w))
q=B.a([],s)
for(p=J.a8(r),o=J.aU(d.a(p.h(r,"r")));o.C();){n=o.gT(o)
m=B.a([],u)
for(l=J.aU(d.a(n));l.C();){k=l.gT(l)
j=J.a8(k)
m.push(B.a([B.f3(j.h(k,0)),B.f3(j.h(k,1))],v))}q.push(m)}o=B.cK(p.h(r,"n"))
m=B.cK(p.h(r,"a"))
l=B.cK(p.h(r,"ct"))
j=B.cK(p.h(r,"sr"))
i=B.f3(p.h(r,"pop"))
h=B.f3(p.h(r,"gdp"))
g=B.cK(p.h(r,"inc"))
f=B.ae("^\\d\\.\\s*",!0,!1,!1,!1)
g=B.aNo(g,f,"",0)
f=B.f3(J.q(p.h(r,"c"),0))
p=B.f3(J.q(p.h(r,"c"),1))
e=new C.a8U(o,m,l,j,i,h,g,f,p,q)
e.bsL(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new C.a8V(a1)},
fcu(d){if(d>=1e12)return A.k.a9(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.a9(d/1e9,2)+" billion"
if(d>=1e6)return A.k.a9(d/1e6,1)+" million"
if(d>=1000)return A.k.a9(d/1000,1)+" thousand"
return A.k.a9(d,0)},
Fu(d){var w,v,u,t=A.o.u(A.k.U(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.F(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
a8U:function a8U(d,e,f,g,h,i,j,k,l,m){var _=this
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
a8V:function a8V(d){this.a=d},
uu:function uu(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
Ny:function Ny(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
xg:function xg(d,e,f){this.a=d
this.b=e
this.c=f},
Nx:function Nx(d){this.a=0
this.b=d
this.c=0},
hth(d,e,f){return $.hti.ce(0,d+"|"+B.t(e)+"|"+f.l(),new C.d60(d,e,f))},
Tp:function Tp(d){this.a=d},
aAC:function aAC(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.kA$=k
_.fF$=l
_.fc$=m
_.bp$=n
_.a6$=o
_.c=_.a=null},
dOR:function dOR(d){this.a=d},
dOQ:function dOQ(d,e){this.a=d
this.b=e},
dOj:function dOj(d){this.a=d},
dOh:function dOh(d){this.a=d},
dOi:function dOi(d,e,f){this.a=d
this.b=e
this.c=f},
dOg:function dOg(d){this.a=d},
dOf:function dOf(){},
dOe:function dOe(d){this.a=d},
dOC:function dOC(d,e){this.a=d
this.b=e},
dOD:function dOD(d,e){this.a=d
this.b=e},
dOr:function dOr(d){this.a=d},
dOs:function dOs(d){this.a=d},
dOq:function dOq(d){this.a=d},
dOt:function dOt(d){this.a=d},
dOk:function dOk(d,e){this.a=d
this.b=e},
dOl:function dOl(d){this.a=d},
dOE:function dOE(d,e){this.a=d
this.b=e},
dOp:function dOp(d,e){this.a=d
this.b=e},
dOI:function dOI(d){this.a=d},
dOB:function dOB(d){this.a=d},
dOJ:function dOJ(d,e){this.a=d
this.b=e},
dOA:function dOA(d,e){this.a=d
this.b=e},
dOK:function dOK(d){this.a=d},
dOz:function dOz(d,e){this.a=d
this.b=e},
dOL:function dOL(d){this.a=d},
dOy:function dOy(d,e){this.a=d
this.b=e},
dOM:function dOM(d){this.a=d},
dOx:function dOx(d,e){this.a=d
this.b=e},
dON:function dON(d){this.a=d},
dOw:function dOw(d,e){this.a=d
this.b=e},
dOO:function dOO(d){this.a=d},
dOv:function dOv(d){this.a=d},
dOP:function dOP(d){this.a=d},
dOu:function dOu(d){this.a=d},
dOF:function dOF(d){this.a=d},
dOo:function dOo(d){this.a=d},
dOG:function dOG(d){this.a=d},
dOn:function dOn(d){this.a=d},
dOH:function dOH(d){this.a=d},
dOm:function dOm(d){this.a=d},
dOd:function dOd(){},
dOc:function dOc(d){this.a=d},
dOb:function dOb(d){this.a=d},
bc0:function bc0(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d60:function d60(d,e,f){this.a=d
this.b=e
this.c=f},
d61:function d61(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aII:function aII(){},
aIJ:function aIJ(){},
acU(d,e,f,g,h){return new C.bqb(d,e,f,g,h)},
bqb:function bqb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f1C:function f1C(){},
f1D:function f1D(){},
f1E:function f1E(){},
f1F:function f1F(){},
f1G:function f1G(){},
f1H:function f1H(){},
f1I:function f1I(){},
Uv:function Uv(d){this.a=d},
bhg:function bhg(){this.d=$
this.c=this.a=null},
erg:function erg(d){this.a=d},
erh:function erh(d){this.a=d},
erf:function erf(d){this.a=d},
eri:function eri(){},
ere:function ere(d,e){this.a=d
this.b=e},
erd:function erd(d){this.a=d},
htJ(){var w,v,u=x.n,t=B.a([],u)
for(w=0;w<260;++w){v=new B.eU()
v.dM(w)
t.push(v.af()*3.141592653589793*2)}u=B.a([],u)
for(w=0;w<260;++w){v=new B.eU()
v.dM(w+900)
u.push(2.2+v.af())}return new C.bh3(new B.co(null,x.A),new C.Nx(A.cB),A.J,A.at,t,u,$,A.bw,0,B.a([],x.X),null,null)},
htL(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
htK(d){return 1.5+1.6*Math.log(d.d/1000+1)},
fXq(d,e,f){return $.huk.ce(0,d+"|"+B.t(e)+"|"+f.l(),new C.eL4(d,e,f))},
Ug:function Ug(d){this.a=d},
bh3:function bh3(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.kA$=k
_.fF$=l
_.fc$=m
_.bp$=n
_.a6$=o
_.c=_.a=null},
ejp:function ejp(d,e){this.a=d
this.b=e},
ejA:function ejA(d,e){this.a=d
this.b=e},
ejB:function ejB(d,e){this.a=d
this.b=e},
ejx:function ejx(d){this.a=d},
ejy:function ejy(d){this.a=d},
ejz:function ejz(d){this.a=d},
ejC:function ejC(d){this.a=d},
ejw:function ejw(d){this.a=d},
ejD:function ejD(d,e){this.a=d
this.b=e},
ejE:function ejE(d){this.a=d},
ejv:function ejv(d,e){this.a=d
this.b=e},
ejF:function ejF(d){this.a=d},
eju:function eju(d,e){this.a=d
this.b=e},
ejG:function ejG(d){this.a=d},
ejt:function ejt(d){this.a=d},
ejH:function ejH(d){this.a=d},
ejs:function ejs(d){this.a=d},
ejI:function ejI(d){this.a=d},
ejr:function ejr(d){this.a=d},
ejJ:function ejJ(d){this.a=d},
ejq:function ejq(d){this.a=d},
ejo:function ejo(){},
ejn:function ejn(){},
ejm:function ejm(d){this.a=d},
ejl:function ejl(d){this.a=d},
bog:function bog(d,e){this.b=d
this.a=e},
eL4:function eL4(d,e,f){this.a=d
this.b=e
this.c=f},
eL5:function eL5(){},
eL6:function eL6(){},
Tq:function Tq(d){this.a=d},
aAD:function aAD(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.kA$=l
_.fF$=m
_.fc$=n
_.bp$=o
_.a6$=p
_.c=_.a=null},
dOV:function dOV(){},
dPn:function dPn(){},
dP9:function dP9(d,e){this.a=d
this.b=e},
dP0:function dP0(d,e){this.a=d
this.b=e},
dPa:function dPa(d){this.a=d},
dP_:function dP_(d){this.a=d},
dPb:function dPb(d){this.a=d},
dP8:function dP8(d){this.a=d},
dPf:function dPf(d){this.a=d},
dP7:function dP7(d){this.a=d},
dPg:function dPg(d){this.a=d},
dP6:function dP6(d,e){this.a=d
this.b=e},
dPh:function dPh(d){this.a=d},
dPi:function dPi(d){this.a=d},
dP5:function dP5(d,e){this.a=d
this.b=e},
dPj:function dPj(d){this.a=d},
dP4:function dP4(d,e){this.a=d
this.b=e},
dPk:function dPk(d){this.a=d},
dP3:function dP3(d,e){this.a=d
this.b=e},
dPl:function dPl(d){this.a=d},
dP2:function dP2(d,e){this.a=d
this.b=e},
dPm:function dPm(d){this.a=d},
dP1:function dP1(d){this.a=d},
dPc:function dPc(d){this.a=d},
dOZ:function dOZ(d){this.a=d},
dPd:function dPd(d){this.a=d},
dOY:function dOY(d){this.a=d},
dPe:function dPe(d){this.a=d},
dOX:function dOX(d){this.a=d},
dOU:function dOU(d){this.a=d},
dOT:function dOT(){},
dOW:function dOW(d,e){this.a=d
this.b=e},
dOS:function dOS(d){this.a=d},
b7g:function b7g(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
U8:function U8(d){this.a=d},
bh0:function bh0(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.fb$=e
_.kA$=f
_.fF$=g
_.fc$=h
_.bp$=i
_.a6$=j
_.c=_.a=null},
ecj:function ecj(d,e){this.a=d
this.b=e},
eck:function eck(d,e){this.a=d
this.b=e},
eci:function eci(d,e){this.a=d
this.b=e},
ecl:function ecl(d,e){this.a=d
this.b=e},
ech:function ech(d,e){this.a=d
this.b=e},
bnP:function bnP(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eJe:function eJe(d){this.a=d},
aIK:function aIK(){},
bto:function bto(){},
aJj:function aJj(){},
btC:function btC(){},
aJm:function aJm(){},
btE:function btE(){},
htH(){var w,v,u,t=B.a([],x.d9),s=B.a([],x.g)
for(w=0;w<150;++w){v=new B.eU()
v.dM(w)
v=v.af()
u=new B.eU()
u.dM(w+500)
s.push(new B.u(v,u.af()))}return new C.bfJ(new B.co(null,x.A),new C.Nx(A.cB),t,A.at,s,$,A.bw,0,B.a([],x.X),null,null)},
O_:function O_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Su:function Su(d){this.a=d},
bfJ:function bfJ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.kA$=j
_.fF$=k
_.fc$=l
_.bp$=m
_.a6$=n
_.c=_.a=null},
dxk:function dxk(){},
dx8:function dx8(){},
dx9:function dx9(d,e){this.a=d
this.b=e},
dxa:function dxa(d,e){this.a=d
this.b=e},
dx7:function dx7(d){this.a=d},
dx6:function dx6(d){this.a=d},
dxc:function dxc(d){this.a=d},
dx5:function dx5(d,e){this.a=d
this.b=e},
dxd:function dxd(d){this.a=d},
dx4:function dx4(d){this.a=d},
dxe:function dxe(d){this.a=d},
dx3:function dx3(d){this.a=d},
dxf:function dxf(d){this.a=d},
dx2:function dx2(d){this.a=d},
dxg:function dxg(d){this.a=d},
dx1:function dx1(d){this.a=d},
dxh:function dxh(d){this.a=d},
dx0:function dx0(d){this.a=d},
dxi:function dxi(d){this.a=d},
dx_:function dx_(d){this.a=d},
dxj:function dxj(d){this.a=d},
dwZ:function dwZ(d){this.a=d},
dxb:function dxb(d){this.a=d},
dwY:function dwY(d){this.a=d},
b6F:function b6F(d,e){this.b=d
this.a=e},
acy:function acy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Tm:function Tm(d){this.a=d},
bg7:function bg7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.kA$=q
_.fF$=r
_.fc$=s
_.bp$=t
_.a6$=u
_.c=_.a=null},
dNs:function dNs(d){this.a=d},
dNi:function dNi(d,e){this.a=d
this.b=e},
dNj:function dNj(d,e){this.a=d
this.b=e},
dNh:function dNh(d,e){this.a=d
this.b=e},
dNk:function dNk(d){this.a=d},
dNg:function dNg(d){this.a=d},
dNl:function dNl(d){this.a=d},
dNf:function dNf(d,e){this.a=d
this.b=e},
dNm:function dNm(d){this.a=d},
dNe:function dNe(d,e){this.a=d
this.b=e},
dNn:function dNn(d){this.a=d},
dNd:function dNd(d,e){this.a=d
this.b=e},
dNo:function dNo(d){this.a=d},
dNc:function dNc(d,e){this.a=d
this.b=e},
dNp:function dNp(d){this.a=d},
dNb:function dNb(d){this.a=d},
dNq:function dNq(d){this.a=d},
dNa:function dNa(d){this.a=d},
dNr:function dNr(d){this.a=d},
dN9:function dN9(d){this.a=d},
bbR:function bbR(d,e){this.b=d
this.a=e},
d39:function d39(d){this.a=d},
U4:function U4(d){this.a=d},
bh_:function bh_(d,e,f,g,h,i,j,k){var _=this
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
_.kA$=g
_.fF$=h
_.fc$=i
_.bp$=j
_.a6$=k
_.c=_.a=null},
ec_:function ec_(d,e){this.a=d
this.b=e},
ec0:function ec0(d){this.a=d},
ebZ:function ebZ(d){this.a=d},
ec1:function ec1(d){this.a=d},
ebY:function ebY(d){this.a=d},
ec2:function ec2(d){this.a=d},
ebX:function ebX(d){this.a=d},
ec3:function ec3(d){this.a=d},
ebW:function ebW(d){this.a=d},
ec4:function ec4(d){this.a=d},
ebV:function ebV(d,e){this.a=d
this.b=e},
ec5:function ec5(d){this.a=d},
ebU:function ebU(d,e){this.a=d
this.b=e},
ec6:function ec6(d){this.a=d},
ebT:function ebT(d,e){this.a=d
this.b=e},
ec7:function ec7(d){this.a=d},
ebS:function ebS(d,e){this.a=d
this.b=e},
bn6:function bn6(d,e){this.b=d
this.a=e},
aIh:function aIh(){},
btg:function btg(){},
aIF:function aIF(){},
btn:function btn(){},
aJi:function aJi(){},
btB:function btB(){},
fWe(d,e,f){var w,v
B.fK(0,0,!1)
w=new B.l6(e,f,$,null)
v=w.bCE(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
hH1(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.m(0,w[v],v)
u=B.a([],x.E)
for(t=w.length,s=x.N,r=x.C,q=0;q<w.length;w.length===t||(0,B.K)(w),++q){p=w[q]
u.push(B.E(["k",p.b,"x",B.xH(A.k.a9(p.c,4)),"y",B.xH(A.k.a9(p.d,4)),"v",p.e,"l",B.xH(A.k.a9(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.xH(A.k.a9(p.as,3)),"ch",p.at,"vc",B.xH(A.k.a9(p.z,3))],s,r))}w=B.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.K)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.z(f,B.a2(f).k("cl.E"))
A.d.fm(l)
return A.Q.al(B.E(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
hQg(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.Q.aD(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a7(h)
A.d.a7(a6.b)
v=B.a([],x.fs)
g=x.L
f=g.a(J.q(w,"parts"))
f=J.aU(f==null?A.cL:f)
while(f.C()){u=f.gT(f)
t=i.a(u)
e=B.aS(J.q(t,"k"))
s=e==null?"":e
if(!$.tx().an(0,s)){J.cb(v,null)
continue}d=s
a0=B.aN(J.q(t,"x"))
if(a0==null)a0=0.5
a1=B.aN(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.rQ(a2,d,a0,a1)
a3.an6(a2,d,a0,a1)
h.push(a3)
r=a3
a1=B.aN(J.q(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=B.aN(J.q(t,"l"))
if(d==null)d=r.f
r.f=d
d=B.aN(J.q(t,"o"))
if(d==null)d=r.r
r.r=d
d=B.k6(J.q(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.k6(J.q(t,"b"))
r.x=d===!0
d=B.aS(J.q(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aN(J.q(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aN(J.q(t,"ch"))
r.at=A.k.N(d==null?0:d)
d=B.aN(J.q(t,"vc"))
if(d==null)d=0
r.z=d
J.cb(v,r)}i=g.a(J.q(w,"wires"))
i=J.aU(i==null?A.cL:i)
h=x.j
while(i.C()){q=i.gT(i)
p=h.a(q)
f=B.aN(J.q(p,0))
o=f==null?a5:A.k.N(f)
f=B.aN(J.q(p,2))
n=f==null?a5:A.k.N(f)
if(o==null||n==null||o<0||n<0||o>=J.aa(v)||n>=J.aa(v))continue
m=J.q(v,o)
l=J.q(v,n)
if(m!=null&&l!=null)a6.ahL(m,A.k.N(B.f3(J.q(p,1))),l,A.k.N(B.f3(J.q(p,3))))}i=B.aN(J.q(w,"challenge"))
i=A.k.N(i==null?0:i)
k=B.aZ(x.S)
h=g.a(J.q(w,"done"))
h=J.aU(h==null?A.cL:h)
while(h.C()){j=h.gT(h)
J.cb(k,A.k.N(B.f3(j)))}return new B.bkO(i,k)}catch(a4){return a5}},
fe8(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fe8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.ax(),$async$fe8)
case 7:r=o.aS(n.q(e.a,"ngmy_electronics_lab_v1"))
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
return B.i($async$fe8,v)},
bzY(d){return C.hRP(d)},
hRP(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bzY=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.ax(),$async$bzY)
case 7:w=6
return B.b(f.aq("String","ngmy_electronics_lab_v1",d),$async$bzY)
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
return B.i($async$bzY,v)},
ckO(d,e){var w=0,v=B.j(x.g7),u
var $async$ckO=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.fKW().wh(d,null,null,null,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ckO,v)}},D,K,H,O,U,Ae,Z,Af,Ag,A_
J=c[1]
B=c[0]
A=c[2]
A0=c[95]
A1=c[112]
V=c[101]
A2=c[27]
F=c[89]
N=c[97]
A3=c[103]
W=c[108]
X=c[110]
L=c[115]
G=c[93]
A4=c[87]
A5=c[102]
Y=c[109]
A6=c[65]
T=c[74]
A7=c[82]
A8=c[79]
Q=c[85]
A9=c[117]
Aa=c[107]
R=c[88]
M=c[90]
Ab=c[113]
S=c[111]
Ac=c[69]
Ad=c[106]
P=c[92]
I=c[104]
E=c[94]
C=a.updateHolder(c[17],C)
D=c[86]
K=c[100]
H=c[40]
O=c[98]
U=c[96]
Ae=c[116]
Z=c[91]
Af=c[99]
Ag=c[105]
A_=c[114]
C.ahv.prototype={}
C.TC.prototype={
S(){return new C.bgt(B.T(x.N,x.i),new B.ap(A.as,$.av()),B.a([],x.X),B.a([],x.K),B.me(0,null,null))}}
C.bgt.prototype={
gUf(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
p(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
this.ch.p()
this.a2()},
LW(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$LW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aT.ag$.d.c
if(s!=null)s.jf()
p.bJ(0,A.c0)
t.n(new C.dW8(t))
t.a.toString
p=t.gUf()
w=3
return B.b(C.bvC(C.hvx(q,C.hGT(p),o,t.ay)),$async$LW)
case 3:s=e
r=s==null?null:J.iN(s)
if(r==null||r.length===0||A.a.a_(r,"{"))r=C.hIf(q,p,o)
if(t.c==null){w=1
break}t.n(new C.dW9(t,o,r))
$.aT.x1$.push(new C.dWa(t))
case 1:return B.h(u,v)}})
return B.i($async$LW,v)},
Wd(d){return this.bT7(d)},
aRB(){return this.Wd(null)},
bT7(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Wd=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aT.ag$.d.c
if(s!=null)s.jf()
t.f.saU(0,o)
t.n(new C.dWl(t))
C.dG(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bvC(C.hC6(o)),$async$Wd)
case 3:r=n.a=m.hQ0(f)
p.b=""
if(r!=null&&!C.hGU(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.hIg(o)
q=B.ae(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.ahv(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.n(new C.dWm(p,t))
t.bYe(p.a)
case 1:return B.h(u,v)}})
return B.i($async$Wd,v)},
bYe(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
A.d.a7(w)
w=++m.as
v=m.gUf()
A.d.a7(v.a)
A.d.a7(v.b)
m.e.a7(0)
m.n(new C.dWh(m))
t=d.d
s=B.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.dWf(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.dWi(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.K)(r),++u){p.$2(o,new C.dWj(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.dWk(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bB.j(0.1),g=B.m(16),f=B.H(A.bB.j(0.35),A.r,1)
if(m.x)j=B.B(B.a([D.eu6,A.bd,B.D(B.d(m.Q,l,l,l,l,l,l,A.QT,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.eSI
else{w=B.D(B.d(k.a,l,l,l,l,l,l,A4.Rf,l,l,l),1)
v=x.p
w=B.a([B.B(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.eEp,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.C(A.uh,B.d(u,l,l,l,l,l,l,D.eGY,l,l,l),l))
w.push(A.d4)
w.push(B.d(k.b,l,l,l,l,l,l,D.Hu,l,l,l))
u=k.e
if(u.length!==0){t=A.aK.j(0.12)
s=B.m(10)
w.push(B.p(l,B.d(u,l,l,l,l,l,l,D.eJc,l,l,l),A.h,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.i4,A.ck,l,l,l))}w.push(A.ar)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.az
w.push(new B.C(A.JT,new B.cC(A.b0,A.e,A.j,A.F,l,A.p,l,0,B.a([new B.w(t,l,A.mZ,l,l,l,l,l,l,l,l,l),A.bp,new B.bH(1,A.bo,new B.w(q,l,new B.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.K)(j),++p){o=j[p]
t=new B.b1(12,12)
s=new B.b1(12,12)
A.d.v(w,B.a([A.P,new B.bI(A.a7,l,l,B.p(l,new B.w(o.a,l,A.a4d,l,l,l,l,l,l,l,l,l),A.h,l,l,new B.o(A.bB.j(0.3),l,l,new B.bv(t,t,t,t),l,l,A.n),l,l,l,l,A.fL,l,l,l),l),A.av,B.p(l,new B.w(o.b,l,D.eOq,l,l,l,l,l,l,l,l,l),A.h,l,l,new B.o(A.c.j(0.07),l,l,new B.bv(s,s,s,s),l,l,A.n),l,l,l,l,A.bS,l,l,l)],v))}if(m.ax)w.push(D.dPU)
j=B.ci(B.v(w,A.F,l,A.e,A.j,0,A.p),A.q,m.ch,A.z,l,l,l,l,A.ak)}w=x.p
g=B.v(B.a([B.afK(B.p(l,j,A.h,l,new B.aW(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.bfZ,A.em,l,l,1/0),A.ba,A.i3),B.D(C.fMJ(m.gUf(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new C.dw("Ask about it",i,new C.dWp(m),l,A.bB,l),new C.dw("Invent something new",!i,new C.dWq(m),l,A.bB,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.cXw[p]
i.push(new C.dw(n,!1,new C.dWr(m,n),l,A.bB,l))}f.push(new C.eF(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.cIA[p]
i.push(new C.dw(r,!1,new C.dWs(m,r),l,A.bB,l))}f.push(new C.eF(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.D(B.aK(l,A.U,!1,l,!0,A.q,l,B.aL(),m.f,l,l,l,l,l,2,B.bn(l,new B.b3(4,B.m(16),A.X),l,A.eN,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kl,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.dWt(m,k),l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,A.di,!0,A.a5,l,A.am,l,A.aJz,l,l),1)
h=m.at
v=h&&j?D.bsi:A.dQ
j=h&&j?"Ask":"Invent"
f.push(B.B(B.a([i,A.aa,new C.ff(v,j,new C.dWu(m,k),A.bB,l)],w),A.m,l,A.e,A.j,0,l,l))
return C.jy(A.bB,A.fZ,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.v(f,A.m,l,A.e,A.R,0,A.p))}}
C.EN.prototype={}
C.uh.prototype={}
C.U3.prototype={
S(){return new C.aBt(A.J,A.J,A.at,B.aZ(x.S),$,A.bw,0,B.a([],x.X),null,null)}}
C.aBt.prototype={
gaSJ(){var w,v,u,t=this,s=D.Fv[t.cx],r=D.Oh[t.cy],q=D.AO[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.ef(w,w.r,B.a2(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.ar0[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cG(p,0,new C.eaE())},
ga0e(){return D.Fv[this.cx].d/this.gaSJ()},
gaKn(){return 0.1*(D.Fv[this.cx].d/0.9)/D.Oh[this.cy].d},
Z(){this.a0()
this.kM()
C.yC("rocket_lander").by(new C.eaY(this),x.P)},
bYm(){var w=this
w.ay=A.k.E(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cB.af()*0.6
w.f=new B.u(0.15+A.cB.af()*0.7,0.08)
w.r=new B.u((A.cB.af()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
l4(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.n(new C.eaZ())
return}w=D.qx[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.E(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.u(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga0e()
v=v.ao(0,new B.u(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaKn())}if(m.dy){t=m.r
v=v.aE(0,t.aN(0,t.gcj()*6*D.asH[m.d]))}t=m.r=m.r.ao(0,v.aN(0,d))
s=m.f=m.f.ao(0,t.aN(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.u(-t.a*0.4,t.b)
t=new B.u(A.k.E(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.u(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.AO[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.vh("rocket_lander",B.E(["unlocked",t],x.N,x.z))
C.AG("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga0e()/(D.qx[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.a9(m.ga0e()/(D.qx[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
C.dG(80,"",500,0,0.6,"noise")
B.fW()}}if(m.Q&&m.x>0&&A.o.F(A.k.bt(m.CW*20),2)===0)C.dG(90,"",70,0,0.12,"noise")
m.n(new C.eb_())},
ad1(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.eGv,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new C.dw(e[w].a,f.$1(w),new C.eaG(this,g,w),v,h,v))
return new B.C(A.fk,B.v(B.a([u,A.d4,B.c9(A.bJ,s,A.bx,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bxY(d){var w,v,u,t,s=this,r=null,q=s.ga0e()/(D.qx[s.d].b/9.81*0.28)>=1,p=A.k.U(1/s.gaKn()),o=D.asH[s.d],n=B.m(24),m=d.c,l=B.H(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.av,B.d(d.d+" Gravity here: "+B.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,D.aKE,r,r,r),A.T,s.ad1("ENGINE: "+D.Fv[s.cx].b,D.Fv,new C.eav(s),new C.eaw(s),A.cP),s.ad1("FUEL TANK: "+D.Oh[s.cy].b,D.Oh,new C.eax(s),new C.eay(s),A.bh),s.ad1("LANDING GEAR: "+D.AO[s.db].b,D.AO,new C.eaz(s),new C.eaA(s),A.aY),s.ad1("EXTRAS (tap to add)",D.ar0,new C.eaB(s),new C.eaC(s),A.bB)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.f8q)
o=(q?A.bh:A.cD).j(0.14)
w=B.m(12)
v=A.k.a9(s.gaSJ(),2)
u=A.k.a9(s.ga0e()/(D.qx[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.U(D.AO[s.db].d*100)+".",r,r,r,r,r,r,D.eH3,r,r,r),A.h,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.i4,A.bS,r,r,r))
m.push(A.T)
m.push(new B.bI(A.A,r,r,new C.ff(A.mL,"Launch",new C.eaD(s),A.bh,r),r))
return B.au(B.p(r,B.ci(B.v(m,A.F,r,A.e,A.R,0,A.p),A.q,r,A.z,r,A.c4,r,r,A.ak),A.h,r,A.lh,new B.o(D.b7K,r,l,n,r,r,A.n),r,r,r,A.bS,r,r,r,r),r,r,r)},
aTP(d,e,f,g){var w=null,v=f?A.cP:A.c.j(0.1),u=B.m(18),t=B.H(A.b9,A.r,1)
return B.pi(A.jJ,B.p(w,B.V(d,A.c,w,w,w,30),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.eas(e),new C.eat(e),w,w,w,w,new C.eau(e))},
aTO(d,e,f){return this.aTP(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.ck(new C.eaR(s,D.qx[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.qx[w].a:"\ud83d\udd12"
o.push(new C.dw(v,s.d===w,new C.eaS(s,w),r,D.qx[w].c,r))}v=B.a([s.aTO(D.bsp,new C.eaT(s),s.y),A.bd,s.aTP(A.uC,new C.eaU(s),s.Q,130),A.bd,s.aTO(A.Y9,new C.eaV(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aY:A.c.j(0.1)
t=B.m(18)
A.d.v(v,B.a([A.bd,B.aH(r,B.p(r,D.bwt,A.h,r,r,new B.o(u,r,B.H(A.b9,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eaW(s),r,r,r,r,r,r,!1,A.ae)],p))}return C.jy(A.cP,A.fZ,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.v(B.a([new C.eF(o,"WORLD",r),B.B(v,A.m,r,A.b7,A.j,0,r,r)],p),A.m,r,A.e,A.R,0,A.p))}}
C.bdw.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.qx[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.W(),d=B.L(),a0=j.c,a1=B.aq(D.ba0,a0,0.25)
a1.toString
d.sap(new B.a3(A.aX,A.b1,A.w,B.a([D.b2R,a1],x.O),l,l).au(0,new B.a7(0,0,g,f)))
a2.aX(new B.a7(0,0,g,f),d)
w=new B.eU()
w.dM(5)
for(g=a2.a,v=0;v<70;++v){f=w.af()
d=w.af()
a1=w.af()
u=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
u.r=A.c.j(0.2+w.af()*0.5).gq(0)
t=u.I()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=B.a([],f)
r=new B.aO(e.r,A.ap,l,l,d)
r.D(new B.b4(0,s+14))
q=new B.eU()
q.dM(2)
for(p=0;p<=i;p+=18){e=new B.ao(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.af()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bx(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.D(new B.ao(i,h))
r.D(new B.ao(0,h))
r.D(new B.bE())
e=$.W()
d=B.L()
d.r=B.aq(a0,A.x,0.6).gq(0)
a2.aM(r,d)
o=B.cJ(new B.u(k.ax*i,s+10),8,k.ay*i)
d=B.bC(o,A.j9)
a0=B.L()
a0.r=A.bm.gq(0)
a2.aJ(d,a0)
a0=B.bC(o.cE(2),A.tD)
d=B.L()
d.b=A.ac
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gq(0)
a2.aJ(a0,d)
if(k.as==="ready")return
d=k.f
J.bD(g.save())
g.translate(d.a*i,d.b*h)
a2.iU(0,k.w)
i=k.as
if(i==="crashed"){k=B.L()
k.r=A.cP.j(0.6).gq(0)
k.z=R.G_
a2.ae(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new B.aO(i,A.ap,l,l,B.a([],f))
n.D(new B.b4(-8,18))
n.D(new B.ao(0,44+Math.sin(k.CW*40)*8))
n.D(new B.ao(8,18))
n.D(new B.bE())
k=B.L()
k.r=A.aK.gq(0)
a2.aM(n,k)
i=new B.aO(i,A.ap,l,l,B.a([],f))
i.D(new B.b4(-4,18))
i.D(new B.ao(0,32))
i.D(new B.ao(4,18))
i.D(new B.bE())
k=B.L()
k.r=A.c.gq(0)
a2.aM(i,k)}k=e.r
m=new B.aO(k,A.ap,l,l,B.a([],f))
m.D(new B.b4(0,-26))
m.D(new B.cO(14,-10,11,18))
m.D(new B.ao(-11,18))
m.D(new B.cO(-14,-10,0,-26))
m.D(new B.bE())
i=B.L()
i.sap(D.bHQ.au(0,D.enD))
a2.aM(m,i)
i=B.L()
i.r=A.aY.gq(0)
a2.ae(D.v5,5,i)
i=new B.aO(k,A.ap,l,l,B.a([],f))
i.D(new B.b4(-11,6))
i.D(new B.ao(-20,20))
i.D(new B.ao(-11,18))
i.D(new B.bE())
h=B.L()
h.r=A.aD.gq(0)
a2.aM(i,h)
f=new B.aO(k,A.ap,l,l,B.a([],f))
f.D(new B.b4(11,6))
f.D(new B.ao(20,20))
f.D(new B.ao(11,18))
f.D(new B.bE())
k=B.L()
k.r=A.aD.gq(0)
a2.aM(f,k)
g.restore()},
ar(d){return!0}}
C.aJg.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.btA.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
w=this.fb$
w===$&&B.c()
w.p()
this.bqo()}}
C.aP2.prototype={}
C.a19.prototype={}
C.b6I.prototype={}
C.Sv.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eN(["skin"],x.N),o=new Float32Array(0)
return new C.azV(w,v,u,t,s,r,q,new B.co(null,x.A),p,D.Im,D.Im,A.at,A.cB,o,new Int32Array(0),$,A.bw,0,B.a([],x.X),null,null)}}
C.azV.prototype={
Z(){var w=this
w.a0()
w.kM()
w.as=new C.bWJ(w.gc4T())
new C.dxM(w).$0()
return},
p(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.aa(0)
v.d=null}this.bpp()},
c4U(d){var w,v=this
if(v.c==null)return
w=J.a8(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eM(0,B.E(["t","init","data",$.fWt],x.N,x.z))
v.at=!0
v.ax=""
v.avn()
break
case"pick":v.n(new C.dxo(v,d))
break
case"shot":v.aeU(B.t(w.h(d,"data")))
break
case"error":$.al.$1("[body viewer] "+B.t(w.h(d,"text")))
break}},
avn(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.ap1[q.CW]
v=new C.dxp()
u=q.ay
u=B.z(u,B.a2(u).k("cl.E"))
A.d.fm(u)
t=x.N
s=B.E(["layers",u,"skinMode",q.ch,"tone","#"+B.t(v.$1(w.b))+B.t(v.$1(w.c))+B.t(v.$1(w.d)),"sel",q.cx,"bpm",A.k.U(q.k3),"spin",q.fy],t,x.cK)
r=A.Q.al(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=B.T(t,x.z)
u.m(0,"t","state")
u.v(0,s)
v.eM(0,u)}},
aeU(d){return this.cl7(d)},
cl7(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aeU=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cw.aG(A.a.aY(d,A.a.cP(d,",")+1))
w=6
return B.b(C.ckO(B.a([C.fWe(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$aeU)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.H(x.gV).f.P(D.aIS)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aeU,v)},
auQ(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
l4(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bt(w)!==A.k.bt(v.ok)){C.a6e("kick",0.4)
v.a2L(170,new C.dxN())}v.ok=w
return},
aeJ(d){var w,v,u,t,s=this
s.n(new C.dxq(s,d))
if(d==null){s.fx=D.Im
s.dy=1
w=s.as
if(w!=null)w.eM(0,B.E(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("a4<1>")
u=B.z(new B.a4(w,new C.dxr(d),v),v.k("G.E"))
t=A.d.gL(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.K(0,t)
if(s.ch===2)s.ch=1}s.avn()
w=s.as
if(w!=null)w.eM(0,B.E(["t","focus","group",d],x.N,x.z))
s.go=0
s.cnu(t,d)
return},
cnu(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){C.a6e("kick",0.8)
this.a2L(260,new C.dxs())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")C.dG(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a2L(w*70,new C.dxt(this))
else if(A.a.t(e,"intestine")||e==="Stomach")C.dG(110,"",360,0.7,0.3,"saw")
else C.vk("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":C.dG(210+e.length*4,"",80,0.6,0.55,"tri")
C.dG(2400,"",20,0,0.3,v)
break
case"muscle":C.dG(70,"",150,1,0.6,"sine")
break
case"vessel":C.dG(300,"",380,0.4,0.22,v)
C.a6e("kick",0.3)
break
default:C.vk("organic",2+A.o.F(e.length,6),200,0.4)}},
crM(d){this.n(new C.dxv(this,d))},
aU6(){var w,v,u,t,s,r,q,p=this,o=B.aZ(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
if(p.auQ(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.K(0,s.a)}q=B.z(o,o.$ti.k("cl.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aB(w)]
p.p4=""},
bOM(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.n(new C.dxl(u,w,d))
v=x.t
C.AG("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.a2L(1100,new C.dxm(u))
return}if(d==null){if(u.cx!=null)u.aeJ(null)
return}u.aeJ(d)},
bSr(d,e){var w,v=this,u=null,t=B.m(18),s=B.H(A.bU.j(0.5),A.r,1)
if(v.p1){w=v.p2
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.eD3,u,u,u)}else if(d==null||e==null)w=D.eQn
else{w=x.p
w=B.B(B.a([B.D(B.v(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.ja,u,u,u),A.d4,B.d(e.b,u,u,u,u,u,u,D.Hu,u,u,u)],w),A.F,u,A.e,A.R,0,A.p),1),B.aF(u,u,u,u,D.byQ,u,u,u,new C.dxn(v),u,u,u,u,"Back to the whole body",A.c8)],w),A.F,u,A.e,A.j,0,u,u)}return B.p(u,w,A.h,u,u,new B.o(D.Tq,u,s,t,u,u,A.n),u,u,u,u,F.acQ,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.d6u.h(0,g)
i.avn()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.cRj
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,B.K)(v),++s){r=v[s]
if(i.auQ(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=B.a([B.aF(h,h,h,h,D.m8,h,h,h,new C.dxC(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bF:B.CL(h,A.pu,q)}else q=A.kh
q=B.v(B.a([B.D(q,1),new B.C(D.bg_,i.bSr(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){o=D.cJW[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new C.dw(l,n,new C.dxD(i,o),o.c,A.bU,h))}p=B.a([new C.eF(p,h,h)],v)
if(!i.p1&&w.length!==0){n=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.K)(w),++s){k=w[s]
n.push(new C.dw(k,k===i.cx,new C.dxE(i,k),h,A.aK,h))}p.push(new C.eF(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(C.hp(A.cD,""+A.k.U(n)+" beats/min","Heart rate",180,40,new C.dxF(i),n))}if(i.ch>0&&t.a===0){n=B.a([],v)
for(j=0;j<5;++j)n.push(new C.E3(D.ap1[j],i.CW===j,new C.dxG(i,j),!1,h))
p.push(new C.eF(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=B.a([new C.dw("Spin",n,new C.dxH(i),D.afS,A.aY,h),new C.ff(A.jM,"Reset view",new C.dxI(i),A.c,h),new C.dw(l,m,new C.dxJ(i),A.EK,A.aK,h)],v)
if(t.t(0,"organ"))v.push(new C.dw("Heartbeat sound",i.k4,new C.dxK(i),A.ny,A.cD,h))
p.push(new C.eF(v,h,h))
return C.jy(A.bU,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.v(p,A.m,h,A.e,A.R,0,A.p))}}
C.aIi.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.aIj.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
w=this.fb$
w===$&&B.c()
w.p()
this.bpo()}}
C.bWJ.prototype={
k9(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aJ(e,"</script","<\\/script")
v=$.h1o
$.h1o=v+1
u="ngmy-body-viewer-"+v
$.xR()
$.pK().p8(u,new C.bWK(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fC(v,"message",new C.bWL(t),!1,x.gA)
t.b=u},
eM(d,e){var w,v
try{w=this.c
if(w!=null){w=B.bvz(w.contentWindow)
if(w!=null)J.fzD(w,e,"*")}}catch(v){}}}
C.xi.prototype={}
C.Bg.prototype={}
C.n_.prototype={}
C.b7q.prototype={}
C.SA.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new C.azY(B.T(w,x.a2),B.a([],x.cB),B.T(w,v),B.T(w,v),B.T(w,u),A.at,A.J,A.J,B.aZ(u),$,A.bw,0,B.a([],x.X),null,null)}}
C.azY.prototype={
Z(){var w=this
w.a0()
w.kM()
w.a9R()
$.aT.x1$.push(new C.dzX(w))},
a9R(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$a9R=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$a9R)
case 6:q=e.rn("ngmy_circuit_passed_v1")
r=q==null?A.U:q
if(s.c!=null)s.n(new C.dzB(s,r))
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
return B.i($async$a9R,v)},
aaa(d){return this.bW2(d)},
bW2(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$aaa=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.K(0,d)
u=3
w=6
return B.b(B.ax(),$async$aaa)
case 6:r=f
q=s.cx
p=B.a2(q).k("jD<cl.E,n>")
q=B.z(new B.jD(q,new C.dzE(),p),p.k("G.E"))
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
return B.i($async$aaa,v)},
atA(d,e,f,g){var w="c"+this.y++,v=new C.Bg(w,e,f,g)
this.d.m(0,w,v)
return v},
m2(d,e,f){return this.atA(0,e,f,0)},
a9d(d,e){var w
if(D.xR.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ao(0,new B.u(-36,w))},
rN(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aOg(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fF$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dv(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ee(m,D.cuU[A.o.F(q.d,4)])&1)===0
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
bHJ(){return this.aOg(null)},
l4(d){var w,v,u,t,s,r,q,p,o,n=this
n.bHJ()
if(!n.ax)return
for(w=n.d,w=new B.bg(w,B.a2(w).k("bg<2>")).gah(0),v=new B.hK(w,new C.dzY()),u=n.f,t=n.w,s=0;v.C();){r=w.gT(0).a
if(u.h(0,r)===!0){q=n.fF$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.m(0,r,n.fF$)
o=s+1
C.dG(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
atB(d){var w=this
w.d.a7(0)
A.d.a7(w.e)
w.f.a7(0)
w.r.a7(0)
w.cy=null},
lv(d,e){var w=this.x
return new B.u(d*w.a,e*w.b)},
aq2(d){var w=this
if(w.x.A(0,A.at)){$.aT.x1$.push(new C.dzz(w,d))
return}w.n(new C.dzA(w,d))},
cnK(d){this.n(new C.dzF(this,d,$.bAi()[d]))},
bZP(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bAi()[a0]
v=d.d
u=B.a2(v).k("bg<2>")
t=u.k("a4<G.E>")
s=t.k("G.E")
r=B.z(new B.a4(new B.bg(v,u),new C.dzu(),t),s)
A.d.b_(r,new C.dzv())
q=B.z(new B.a4(new B.bg(v,u),new C.dzw(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.n(new C.dzx(d,w))
return}u=d.r
p=B.dS(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dq(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.fQ(k,i)&1)===1)
for(i=0;i<v;++i)u.m(0,r[i].a,j[i])
d.aOg(0)
h=m.h(0,A.d.gL(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.jx(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aF(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a7(0)
u.v(0,p)
d.n(new C.dzy(d,o,a0))},
aum(d){var w,v,u,t,s=this.d,r=B.a2(s).k("bg<2>")
s=B.z(new B.bg(s,r),r.k("G.E"))
r=B.U(s).k("dy<1>")
s=new B.dy(s,r)
s=new B.bV(s,s.gJ(0),r.k("bV<ai.E>"))
w=d.a
r=r.k("ai.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
c7b(d){var w,v,u,t,s,r=this.d,q=B.a2(r).k("bg<2>")
r=B.z(new B.bg(r,q),q.k("G.E"))
q=B.U(r).k("dy<1>")
r=new B.dy(r,q)
r=new B.bV(r,r.gJ(0),q.k("bV<ai.E>"))
w=d.a
v=d.b
q=q.k("ai.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bSk(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dv(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.xR.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.a9d(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.A(p,o)
s=l}}}return t},
bGH(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.a9d(p,o)
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
bZR(d){var w,v,u,t=this,s=t.aum(d)
if(s!=null){w=t.d.h(0,s)
w.toString
B.eH()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.m(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
C.dG(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.n(new C.dzG())
return}u=t.bGH(d)
if(u!=null)t.n(new C.dzH(t,u))
else t.n(new C.dzI(t))},
asz(d){return this.bV7(d)},
bV7(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$asz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.aum(d)
if(s==null){w=1
break}B.j8()
t.n(new C.dzD(t,s))
case 1:return B.h(u,v)}})
return B.i($async$asz,v)},
btY(d){if(this.x.A(0,A.at))return
this.n(new C.dzt(this,d,A.cB))
B.eH()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bAi()[g]
g=x.p
v=B.a([B.aF(h,h,h,h,B.V(i.ax?A.ny:M.qs,A.af,h,h,h,21),h,h,h,new C.dzR(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.m(16)
s=A.cC.j(0.14)
r=B.H(A.cC.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.eCi,h,h,h),B.d(w.b,h,h,h,h,h,h,D.eK5,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.C(A.mC,B.d(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.bh:A.fj,h,h,h,h,h,h,h,h,12,h,h,A.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.B(B.a([B.D(B.v(q,A.F,h,A.e,A.j,0,A.p),1),B.bL(D.f_A,i.gbZO(),B.bk(A.cC,h,h,h,h,h,h,h,h,h,h,A.c8))],g),A.m,h,A.e,A.j,0,h,h),A.h,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,T.K0,D.bgE,h,h,1/0))}u.push(B.D(B.ck(new C.dzS(i)),1))
if(f!=null){t=B.m(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.d(D.xR.h(0,r).a+": "+D.xR.h(0,r).e,h,h,h,h,h,h,A.vl,h,h,h),A.h,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,Z.acz,A.bS,h,h,1/0))}u=B.v(u,A.m,h,A.e,A.j,0,A.p)
t=B.a([],g)
for(s=D.xR.gdH(D.xR),s=s.gah(s);s.C();){r=s.gT(s)
q=new B.b1(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.aH(h,B.p(h,B.v(B.a([B.V(p.b,o,h,h,h,20),A.bA,new B.w(p.a,h,D.a4z,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.R,0,A.p),A.h,h,h,new B.o(n,h,new B.c1(m,m,m,m),new B.bv(q,q,q,q),h,h,A.n),h,h,h,A.hn,P.Vf,h,h,58),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dzT(i,r),h,h,h,h,h,h,!1,A.ae))}s=B.a([],g)
for(l=0;l<4;++l){k=D.cV3[l]
s.push(new C.ff(A.Lw,k.b,new C.dzU(i,k),A.cC,h))}s.push(new C.ff(D.x_,"Clear",new C.dzV(i),A.cD,h))
r=B.a([],g)
for(j=0;q=$.bAi(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.en:A.l0
o=i.ay
n=i.cx.t(0,j)?A.bh:A.cz
r.push(new C.dw(q.a,o===j,new C.dzW(i,j),p,n,h))}return C.jy(A.cC,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.v(B.a([new C.eF(t,"PARTS",h),new C.eF(s,"TRY",h),new C.eF(r,"TASKS",h)],g),A.m,h,A.e,A.R,0,A.p))}}
C.b7I.prototype={
a4(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=B.L()
w.r=D.a8e.gq(0)
a7.aX(new B.a7(0,0,0+a5,0+a6),w)
v=B.L()
v.r=A.c.j(0.05).gq(0)
for(w=a7.a,u=20;u<a6;u+=28)for(t=14;t<a5;t+=28){s=v.I()
w.drawCircle(t,u,1,s)
s.delete()}for(a5=this.b,a6=a5.e,r=a6.length,q=a5.f,p=x.v,o=a5.d,n=0;n<a6.length;a6.length===r||(0,B.K)(a6),++n){m=a6[n]
l=m.a
k=o.h(0,l)
j=o.h(0,m.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=a5.a9d(j,m.c)
f=q.h(0,l)===!0
l=$.W()
e=B.a([],p)
d=new B.aO(l.r,A.ap,a4,a4,e)
e.push(new B.b4(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new B.p7(h+a0,i,l-a0,a1,l,a1))
if(f){l=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
l.b=A.ac
l.c=9
l.r=A.cz.j(0.28).gq(0)
l.z=G.mc
s=l.I()
l=d.gbL().a.snapshot()
w.drawPath((d.e=new B.cD(l)).a,s)
s.delete()}l=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
l.b=A.ac
l.c=3.2
l.d=A.bL
l.r=(f?A.dU:A.bt).gq(0)
s=l.I()
l=d.e
w.drawPath((l==null?d.e=new B.cD(d.gbL().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ao(0,D.Gw)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new B.aO($.W().r,A.ap,a4,a4,B.a([],p))
w=a3.b
p.D(new B.b4(a6,w))
r=g.b
p.D(new B.p7(a6+a0,w,a5-a0,r,a5,r))
r=B.L()
r.b=A.ac
r.c=3
r.r=A.af.gq(0)
a7.aM(p,r)}for(a5=new B.dv(o,o.r,o.e);a5.C();)this.bZQ(a7,a5.d)},
bZQ(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.xR.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.cJ(a0.c,64,64)
s=B.bC(t,A.kN)
r=w.cy===v
q=s.eH(A.cs)
$.W()
p=B.L()
p.r=A.x.j(0.55).gq(0)
p.z=A.lz
d.aJ(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.L()
p.sap(new B.bR(A.A,0.5,A.w,g,0,B.a([e.c.j(0.6),A.K],x.O),g,g).au(0,B.bT(a0.c,52)))
d.ae(q,52,p)}q=s.eH(A.cF)
p=B.L()
o=e.c
p.r=B.aq(o,A.x,0.65).gq(0)
d.aJ(q,p)
n=u?0.35:0
q=B.L()
p=B.aq(o,A.c,0.1+n)
p.toString
m=B.aq(o,A.x,u?0.2:0.45)
m.toString
q.sap(new B.a3(A.aX,A.b1,A.w,B.a([p,m],x.O),g,g).au(0,t))
d.aJ(s,q)
q=B.L()
q.b=A.ac
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gq(0)
d.aJ(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?D.ahf:D.bsP}else l=e.b
k=C.fEU(B.jx(l.a),30,A.c,l.b,g,A.I)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aE(0,new B.u(p/2,q.gbh(q)/2)))
j=C.fEU(e.a,10.5,A.c,g,g,A.I)
j.a4(d,a0.c.ao(0,new B.u(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.fEU(f,9,u?A.dU:A.c2,g,g,A.u)
i.a4(d,a0.c.ao(0,new B.u(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aUr(d,w.a9d(a0,h),o)
this.aUr(d,a0.c.ao(0,D.Gw),o)},
aUr(d,e,f){var w
$.W()
w=B.L()
w.r=D.a8e.gq(0)
d.ae(e,8.5,w)
w=B.L()
w.b=A.ac
w.c=2.2
w.r=f.gq(0)
d.ae(e,8.5,w)
w=B.L()
w.r=A.c.gq(0)
d.ae(e,3.2,w)},
ar(d){return!0}}
C.aIo.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.btj.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
w=this.fb$
w===$&&B.c()
w.p()
this.bpu()}}
C.LL.prototype={
S(){return new C.aAe(B.me(0,null,null))}}
C.IU.prototype={
a3(){return"_UnfoldStyle."+this.b}}
C.zz.prototype={}
C.aAe.prototype={
bZV(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gco(0).at
v.toString
w.f=v}w.n(new C.dF9(w,e))},
bU5(){var w=this
w.e.p()
w.e=B.me(w.f,null,null)
w.n(new C.dF8(w))},
p(){this.e.p()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return B.nX(t,B.ce(v,A.bX,t?new C.bnp(w.e,w.gbZU(w),new C.dFa(d),v):new C.aEp(u,new B.cx(u.b,x.gj)),v,!1,!1,v,!1),new C.dFb(w,u),x.C)}}
C.boX.prototype={}
C.bnp.prototype={
aUs(d,e){var w=null
return new B.C(F.VI,B.v(B.a([B.d(d,w,w,w,w,w,w,D.eCO,w,w,w),A.bA,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=B.B(B.a([B.aF(v,v,v,v,E.qu,v,v,v,w.e,v,v,v,v,v,v),A.qU,D.bmm],u),A.m,v,A.e,A.j,0,v,v),s=w.aUs("STUDIOS","Play, make things, and keep what you make")
$.bAj()
return B.bq(!0,B.v(B.a([new B.C(D.blw,t,v),B.D(B.uV(0,v,A.q,w.c,A.z,v,v,v,v,v,!1,v,A.ak,!1,B.a([new B.lR(s,v),new B.ns(A.is,B.Nj(new B.o_(new C.eIM(d),22,!0,!0,!0,0,B.rj(),v),D.aIH),v),new B.lR(w.aUs("SCENES","Each one is a studio too: change the style, colours and words"),v),new B.ns(D.bgK,B.Nj(new B.o_(new C.eIN(w),6,!0,!0,!0,0,B.rj(),v),D.aIH),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0)}}
C.acD.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=B.m(20),n=B.m(20),m=B.aq(D.rz,p,0.3)
m.toString
w=x.O
m=B.a([m,D.aap],w)
v=B.H(p.j(0.6),A.r,1.2)
u=x.V
t=B.a([new B.ab(-4,A.G,p.j(0.22),A.J,14)],u)
s=B.aq(p,A.x,0.45)
s.toString
w=B.a([p,s],w)
u=B.a([new B.ab(0,A.G,p.j(0.5),A.J,12)],u)
return B.aD(!1,A.a1,!0,r,B.aI(!1,o,!0,B.es(B.v(B.a([B.p(r,B.V(q.c,A.c,r,r,r,24),A.h,r,r,new B.o(r,r,r,r,u,new B.a3(A.ax,A.aC,A.w,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.P,B.d(q.a,r,2,A.a2,r,r,r,B.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.d4,B.d(q.b,r,2,A.a2,r,r,r,B.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.b7,A.j,0,A.p),r,new B.o(r,r,v,n,t,new B.a3(A.ax,A.aC,A.w,m,r,r),A.n),r,A.E2,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.h,A.K,0,r,r,r,r,r,A.ad)}}
C.aby.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=B.m(20),g=B.m(20),f=B.aq(D.rz,A.d.gL(i),0.24)
f.toString
w=x.O
f=B.a([f,D.aap],w)
v=B.H(A.d.gL(i).j(0.35),A.r,1)
u=x.V
t=B.a([new B.ab(0,A.G,A.x.j(0.4),A.cs,12)],u)
s=x.p
r=B.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new B.b1(6,6)
m=B.a([A.d.gL(i),A.d.gaj(i)],w)
l=B.a([new B.ab(0,A.G,A.x.j(0.45),F.aBB,0)],u)
r.push(B.p(k,B.V(q[p],A.c,k,k,k,11),A.h,k,k,new B.o(k,k,k,new B.bv(n,n,n,n),l,new B.a3(A.a4,A.a7,A.w,m,k,k),A.n),k,17,k,new B.N(p*4,0,(2-p)*4,o),k,k,k,k))}w=B.v(r,A.m,k,A.e,A.R,0,A.p)
u=B.aq(A.d.gL(i),A.d.gaj(i),0.4)
u.toString
return B.aD(!1,A.a1,!0,k,B.aI(!1,h,!0,B.es(B.v(B.a([new B.a5(58,k,w,k),A.T,B.d(j.b,k,2,A.a2,k,k,k,B.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.av,B.V(A0.ES,A.d.gL(i),k,k,k,18)],s),A.m,k,A.b7,A.j,0,A.p),k,new B.o(k,k,v,g,t,new B.a3(A.ax,A.aC,A.w,f,k,k),A.n),k,A.E2,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.h,A.K,0,k,k,k,k,k,A.ad)}}
C.Op.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.aq(A.d.gaj(i),A.x,0.62)
h.toString
w=k.c
v=k.d
h=B.an(-8,B.bU(j,new B.o(h,j,j,B.m(22),j,j,A.n),A.bb),j,j,2,2,8,j)
u=B.m(22)
t=k.y
s=x.V
r=B.a([new B.ab(0,A.G,A.x.j(0.55),A.PA,26),new B.ab(-6,A.G,A.d.gL(i).j(0.1+0.4*t),A.J,30)],s)
q=B.m(22)
p=B.aq(A.d.gL(i),A.c,0.14)
p.toString
o=A.d.gL(i)
n=A.d.gaj(i)
i=B.aq(A.d.gaj(i),A.x,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bZ(0,B.bU(j,new B.o(j,j,j,j,j,new B.a3(A.ax,A.aC,A.w,B.a([p,o,n,i],m),D.cZH,j),A.n),A.bb),0,0,0),B.an(j,B.bU(j,new B.o(j,j,j,j,j,new B.a3(A.aX,A.b1,A.w,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bb),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bZ(0,B.b2(j,j,j,new C.bon(i,j),A.at),0,0,0))
i=A.c.j(0.16)
p=B.H(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ab(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=B.p(j,B.V(k.f,A.c,j,j,j,28),A.h,j,j,new B.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.eEh,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,B.a([A.av,B.d(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a3,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.QE)
p.push(B.p(j,j,A.h,j,j,new B.o(A.c.j(0.28),j,j,B.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.C(A.fA,B.B(B.a([s,A.es,B.D(B.v(p,A.F,j,A.e,A.R,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(B.bZ(0,B.e1(B.ed(j,A.x.j(A.k.E(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=B.m(22)
m.push(B.bZ(0,B.e1(B.bU(j,new B.o(j,j,B.H(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bb),!0,j),0,0,0))
return new B.a5(w,v,new B.am(A.W,j,A.a9,A.h,B.a([h,B.bZ(0,B.bU(B.bu(q,new B.am(A.W,j,A.a9,A.q,m,j),A.ao),new B.o(j,j,j,u,r,j,A.n),A.bb),0,0,0)],l),j),j)}}
C.bon.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a7(r,-10,s,w)
u=d.a
J.bD(u.save())
u.translate(v.gbO().a,v.gbO().b)
d.iU(0,0.35)
t=B.cJ(A.J,(w- -10)*1.6,s-r)
$.W()
s=B.L()
s.sap(new B.a3(A.a4,A.a7,A.w,B.a([A.K,A.c.j(0.3),A.K],x.O),null,null).au(0,t))
d.aX(t,s)
u.restore()},
ar(d){return d.b!==this.b}}
C.bnT.prototype={
B(d){var w=null,v=B.m(22),u=B.a([D.b6a,D.a9N],x.O),t=this.e,s=B.H(A.d.gL(t).j(0.4),A.r,1.2),r=B.a([new B.ab(0,A.G,A.x.j(0.5),A.jQ,24)],x.V),q=B.m(22),p=A.d.gL(t)
return new B.a5(this.c,this.d,B.bU(B.bu(q,B.b2(B.au(B.V(A.j4,A.d.gL(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.b6p(p,w),A.at),A.ao),new B.o(w,w,s,v,r,new B.a3(A.ax,A.aC,A.w,u,w,w),A.n),A.bb),w)}}
C.b6p.prototype={
a4(d,e){var w,v,u,t,s,r,q,p
$.W()
w=B.L()
v=this.b
w.r=v.j(0.09).gq(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.I()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.I()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.e9(A.J)
$.W()
t=B.L()
t.b=A.ac
t.c=1.4
t.r=v.j(0.35).gq(0)
d.ae(u,30,t)},
ar(d){return!1}}
C.aEp.prototype={
S(){return new C.aEq(new B.co(null,x.A),null,null)}}
C.aEq.prototype={
gt7(){var w,v=this,u=v.d
if(u===$){w=B.bi(null,D.be6,null,1,null,v)
w.cD(0)
v.d!==$&&B.bJ()
v.d=w
u=w}return u},
gXr(){var w,v=this,u=v.e
if(u===$){w=B.bi(null,A.fK,null,1,null,v)
w.f2(0,!0)
v.e!==$&&B.bJ()
v.e=w
u=w}return u},
gatC(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gbZS(){var w=this.w
if(w===$){w=B.z(this.a.c.d,x.G)
this.w=w}return w},
gaRk(){var w=this.x
if(w===$){w=B.z(this.a.c.e,x.Z)
this.x=w}return w},
gaRZ(){var w=this.y
if(w===$){w=B.z(this.a.c.f,x.N)
this.y=w}return w},
gb1N(){var w=this.z
if(w===$){w=B.z(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a0()
var w=this.gt7()
w.d5()
w.dN$.K(0,this.gcnv())},
cnw(){var w,v,u,t,s,r,q,p=this,o=p.gt7().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gatC().a){case 0:w=D.mO
break
case 1:w=D.tf
break
case 2:w=D.ZZ
break
case 3:w=D.mO
break
case 4:w=D.cOw
break
case 5:w=D.tf
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a62)r=0.09
else r=s===D.a63?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){C.dG(260+90*v,"",260,1.6,0.18,"tri")
u=D.bKm[v]
C.l3("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.AG("bell",D.bT5,1400,0.35)}}p.ax=o},
p(){this.gt7().p()
this.gXr().p()
this.bri()},
adt(){var w=this
w.gt7().cLC(0,B.dB(0,0,0,A.k.U(11e3/w.Q),0,0))
w.n(new C.eIs(w))},
c9a(){this.gt7().bU(0)
this.n(new C.eIr(this))},
ab4(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$ab4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaRZ(),s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
l.push(new B.ap(new B.bc(q,A.b2,A.aM),$.av()))}m=B.a([],m)
for(t=u.gb1N(),s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){p=t[r]
m.push(new B.ap(new B.bc(p,A.b2,A.aM),$.av()))}o=B.z(u.gaRk(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.c2(D.rz,null,new C.eIq(u,l,m,o),t,!0,!0,!0,A.l8,!1,!1,x.H),$async$ab4)
case 2:l=B.z(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.R$=$.av()
n.O$=0}return B.h(null,v)}})
return B.i($async$ab4,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gatC(),f=i.a.c,e=f.b,d=i.gbZS(),a0=new C.zz(g,e,f.c,d,i.gaRk(),i.gaRZ(),i.gb1N())
f=B.aq(A.d.gL(d),A.d.gaj(d),0.4)
f.toString
g=x.p
w=B.a([B.aF(h,h,h,h,B.V(i.at?A.ny:M.qs,A.af,h,h,h,21),h,h,h,new C.eIA(i),h,h,h,h,"Sound",h),B.aF(h,h,h,h,D.bCc,h,h,h,i.gbZT(),h,h,h,h,"Edit words and pictures",h),B.aF(h,h,h,h,D.m8,h,h,h,new C.eIB(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c3(i.gXr(),new C.eIC(i,a0),h),B.ck(new C.eID(i,a0))],g)
u=i.as
t=u?i.gc99():i.gcbr()
u=u?D.bs3:A.t4
s=B.aq(A.d.gL(d),A.d.gaj(d),0.4)
s.toString
t=B.B(B.a([B.aF(h,h,h,h,B.V(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.c8),B.D(B.c3(i.gt7(),new C.eIE(i,a1,a0),h),1),B.aF(h,h,h,h,D.byG,h,h,h,new C.eIF(i),h,h,h,h,"Replay",A.c8)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.a9(s,1)
r=B.aq(A.d.gL(d),A.d.gaj(d),0.4)
r.toString
s=C.hp(r,u+"x","Speed",2.5,0.4,new C.eIG(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.cX9[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.aq(A.d.gL(d),A.d.gaj(d),0.4)
r.toString
u.push(new C.dw(p.b,o===p.a,new C.eIH(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bKH[q]
o=i.w
if(o===$){o=B.z(i.a.c.d,r)
i.w=o}m=A.d.gL(o).A(0,A.d.gL(n))?34:28
o=i.w
if(o===$){o=B.z(i.a.c.d,r)
i.w=o}l=A.d.gL(o).A(0,A.d.gL(n))?34:28
o=i.w
if(o===$){o=B.z(i.a.c.d,r)
i.w=o}k=A.d.gL(o).A(0,A.d.gL(n))?A.c:A.b9
o=i.w
if(o===$){o=B.z(i.a.c.d,r)
i.w=o}j=new B.ay(k,A.d.gL(o).A(0,A.d.gL(n))?2.5:1,A.r,-1)
d.push(B.aH(h,B.p(h,h,A.h,h,h,new B.o(h,h,new B.c1(j,j,j,j),h,h,new B.a3(A.ax,A.aC,A.w,n,h,h),A.a6),h,l,h,D.acm,h,h,h,m),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eII(i,n),h,h,h,h,h,h,!1,A.ae))}return C.jy(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.ep(new B.am(A.W,h,A.b_,A.q,v,h),i.f),e,B.v(B.a([t,s,new C.eF(u,"STYLE",h),new C.eF(d,"THEME",h)],g),A.m,h,A.e,A.R,0,A.p))},
btb(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.mO[r]
p=A.k.E((1-A.eE.av(0,A.k.E((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.E(p/1.5707963267948966,0,1)
q=D.mO[r]
n=q+0.12
m=A.k.E((a0-n)/(q+0.2-n),0,1)
n=D.mO[r]
q=n-0.01
q=A.k.E((a0-q)/(n+0.03-q),0,1)
n=B.di()
l=n.a
l.$flags&2&&B.ah(l)
l[11]=0.0013
n.jz(p)
l=v[r]
k=u[r]
j=t[r]
i=D.mO[r]
h=i+0.1
if(A.k.E((a0-h)/(i+0.3-h),0,1)>0){i=D.mO[r]
h=i+0.1
h=A.k.E((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.mO[r]
h=i+0.1
h=A.k.E((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cG(0,r*118,0,f,f,f,new B.kJ(q,new B.iy(n,f,A.aX,!0,f,new C.Op(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.mO[r]
u=v-0.02
g=A.k.E((a0-u)/(v+0.1-u),0,1)
u=A.d.gL(w)
v=D.mO[r]
t=v+0.12
e.push(new B.cG(0,r*118-3-2,0,f,f,4,new B.lZ(new C.bn3(u,g,1-A.k.E((a0-t)/(v+0.22-t),0,1),f),f,A.at,f,f),f))}return new B.a5(a2,358,new B.am(A.W,f,A.a9,A.h,e,f),f)},
bJ6(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.tf[r]
p=A.oY.av(0,A.k.E((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.tf[r]
m=q+0.15
l=A.k.E((a0-m)/(q+0.25-m),0,1)
m=D.tf[r]
q=m-0.03
q=A.k.E((a0-q)/(m+0.01-q),0,1)
m=B.di()
k=m.a
k.$flags&2&&B.ah(k)
k[11]=0.0011
m.ji(n,n,n,1)
m.fl(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.Op(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.di()
k.fl(3.141592653589793)
k=new B.iy(k,f,A.A,!0,f,new C.bnT(a2,108,w,f),f)}e.push(new B.cG(0,r*130,0,f,f,f,new B.kJ(q,new B.iy(m,f,A.A,!0,f,k,f),f),f))}return new B.a5(a2,378,new B.am(A.W,f,A.a9,A.h,e,f),f)},
cse(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.ZZ[w]
l.push(A.co.av(0,A.k.E((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bZ(0,B.b2(n,n,n,new C.bqq(d.d,l,D.aqE,m,C.bno(e,0.4,0.62),f,C.bno(e,0.45,0.7),n),A.at),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.fFp(g,w)
q=D.aqE[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cG(r,s-q*m*p+12,n,n,t,n,new B.kJ(o,B.V(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.fFp(g,w)
r=D.ZZ[w]
q=r+0.15
v.push(new B.cG(s,l,n,n,t,n,new B.kJ(A.k.E((e-q)/(r+0.25-q),0,1),new B.w(u[w],n,A.a4H,n,A.L,n,n,n,n,n,n,n),n),n))}return new B.a5(g,m+90,new B.am(A.W,n,A.a9,A.h,v,n),n)},
bza(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.co.av(0,C.bno(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bZ(0,B.au(B.dP(B.b2(f,f,f,new C.bmw(A.d.gL(a1),C.bno(a3,0,0.2),a4,f),new B.as(a5*0.95,70)),D.dLG),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.E((a3-l)/(0.12+m-l),0,1)
j=A.dJ.av(0,A.k.E((o-0.7)/0.3,0,1))
l=B.di()
m=l.a
m.$flags&2&&B.ah(m)
m[11]=0.001
l.fl(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.ji(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.F(r,1):-1
w.push(new B.A(o,new B.cG(0,0,0,0,f,f,new B.cw(A.A,f,f,new B.kJ(k*(0.45+0.55*o),B.dP(new B.iy(l,f,A.A,!0,f,new C.Op(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.u(n*a5*0.34,-o*18)),f),f),f)))}A.d.b_(w,new C.eIj())
A.d.v(a0,new B.J(w,new C.eIk(),x.fR))
return new B.a5(a5,330,new B.am(A.W,f,A.a9,A.h,a0,f),f)},
byo(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.tf[q]
o=A.k.E((a2-p)/(p+0.22-p),0,1)
n=A.n5.av(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.tf[q]
m=A.k.E((a2-m)/(m+0.02-m),0,1)
l=D.ass[q]
k=B.di()
k.mf(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.ji(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.tf[q]
g=h+0.1
g=A.k.E((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cG(0,0,0,0,e,e,new B.cw(A.A,e,e,new B.kJ(m,B.dP(new B.iy(k,e,A.A,!0,e,new C.Op(d,92,w,p,j,i,0,g*s,h,e),e),new B.u(0,l)),e),e),e))
l=D.tf[q]
h=l+0.02
f=A.k.E((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cG(0,0,0,0,e,e,new B.cw(A.A,e,e,B.dP(new B.lZ(new C.b74(w,f,q,e),e,new B.as(r,212),e,e),new B.u(0,D.ass[q])),e),e))}return new B.a5(a4,330,new B.am(A.W,e,A.a9,A.h,a0,e),e)},
bw3(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.u(-b0,-150),new B.u(b0,-40),D.dLL],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.mO[r]
p=A.k.E((a8-q)/(q+0.2-q),0,1)
o=A.co.av(0,p)
q=D.asx[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.mO[r]
f=g+0.2
e=A.k.E((a8-f)/(g+0.3-f),0,1)
f=D.mO[r]
g=f-0.01
g=A.k.E((a8-g)/(f+0.03-g),0,1)
f=B.di()
d=f.a
d.$flags&2&&B.ah(d)
d[11]=0.001
f.mf(l*h+D.cS8[r]*o)
f.fl(l*0.9)
h=0.55+0.45*o
f.ji(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cG(0,0,0,0,a3,a3,new B.cw(A.A,a3,a3,new B.kJ(g,B.dP(new B.iy(f,a3,A.A,!0,a3,new C.Op(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.u(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.mO[r]
i=q+0.17
a2=A.k.E((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.asx[r]
a6.push(new B.cG(0,0,0,0,a3,a3,new B.cw(A.A,a3,a3,B.dP(new B.lZ(new C.bmy(A.d.gL(w),a2,a3),a3,new B.as(a4,30),a3,a3),new B.u(0,q+48-4)),a3),a3))}}return new B.a5(b0,330,new B.am(A.W,a3,A.a9,A.h,a6,a3),a3)}}
C.bn3.prototype={
a4(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a7(w-v,0,w+v,e.b)
q=B.bC(u,A.h0)
$.W()
t=B.L()
s=0.9*r.d
t.r=r.b.j(s).gq(0)
t.z=G.mc
d.aJ(q,t)
t=B.bC(u,A.h0)
q=B.L()
q.r=A.c.j(s).gq(0)
d.aJ(t,q)},
ar(d){return d.c!==this.c||d.d!==this.d}}
C.bmw.prototype={
a4(d,e){var w,v,u=this.c,t=B.cJ(e.e9(A.J),e.b*u,e.a*u)
$.W()
u=B.L()
u.b=A.ac
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gq(0)
u.z=R.G_
d.j3(t,u)
u=B.L()
u.b=A.ac
u.c=2.5
u.r=w.j(0.7).gq(0)
d.j3(t,u)
u=t.cE(-14)
v=B.L()
v.b=A.ac
v.c=1
v.r=w.j(0.3).gq(0)
d.j3(u,v)},
ar(d){return!0}}
C.b74.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.e9(A.J),f=this.c,e=A.co.av(0,f)
$.W()
w=B.L()
w.b=A.ac
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gL(u).j(0.6*v).gq(0)
d.ae(g,40+e*a0.a*0.42,w)
t=new B.eU()
t.dM(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.af()*3.141592653589793*2
n=(40+t.af()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.af()
j=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
i=(p&1)===0?A.d.gL(u):A.c
j.r=i.j(A.k.E(v,0,1)).gq(0)
h=j.I()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
ar(d){return!0}}
C.bmy.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.e9(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.E(s-r*0.18,0,1)
if(q<=0)continue
p=B.cJ(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.W()
o=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
o.b=A.ac
o.c=2
o.r=u.j((1-q)*0.7).gq(0)
n=o.I()
t.drawOval(B.c8(p),n)
n.delete()}},
ar(d){return d.c!==this.c}}
C.bqq.prototype={
a4(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new B.a7(0,d0,0+c5,d0+60)
$.W()
d0=B.L()
w=c1.b
v=x.O
d0.sap(new B.a3(A.aX,A.b1,A.w,B.a([A.d.gL(w).j(0.18),A.K],v),c2,c2).au(0,d1))
d2.aX(d1,d0)
d0=B.L()
d0.r=A.c.j(0.18).gq(0)
d0.c=1
d2.bE(new B.u(0,c4),new B.u(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=C.fFp(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.W()
a3=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a3.r=A.x.j(0.5).gq(0)
a3.z=A.lz
a4=a3.I()
t.drawOval(B.c8(new B.a7(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new B.a7(d,a1,a3,a1+a0)
a6=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a7=B.aq(A.d.gL(w),A.c,0.1)
a7.toString
a6.sap(new B.a3(A.aX,A.b1,A.w,B.a([a7,A.d.gaj(w)],v),c2,c2).au(0,a5))
a4=a6.I()
t.drawRect(B.c8(a5),a4)
a4.delete()
a2=a2.r
a6=B.a([],n)
a8=new B.aO(a2,A.ap,c2,c2,a6)
a6.push(new B.b4(a3,a1))
a7=a3+c8
a9=a1+c9
a6.push(new B.ao(a7,a9))
a6.push(new B.ao(a7,m))
a6.push(new B.ao(a3,c4))
a6.push(new B.bE())
a6=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a6.r=B.aq(A.d.gaj(w),A.x,0.5).gq(0)
a4=a6.I()
a6=a8.gbL().a.snapshot()
t.drawPath((a8.e=new B.cD(a6)).a,a4)
a4.delete()
a6=B.a([],n)
b0=new B.aO(a2,A.ap,c2,c2,a6)
a6.push(new B.b4(d,a1))
a6.push(new B.ao(d+c8,a9))
a6.push(new B.ao(a7,a9))
a6.push(new B.ao(a3,a1))
a6.push(new B.bE())
a2=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a2.r=B.aq(A.d.gL(w),A.c,0.45).gq(0)
a4=a2.I()
a2=b0.gbL().a.snapshot()
t.drawPath((b0.e=new B.cD(a2)).a,a4)
a4.delete()
b1=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
b1.b=A.ac
b1.c=1
b1.r=A.c.j(0.28).gq(0)
a4=b1.I()
t.drawRect(B.c8(a5),a4)
a4.delete()
a4=b1.I()
a2=a8.e
t.drawPath((a2==null?a8.e=new B.cD(a8.gbL().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.I()
a2=b0.e
t.drawPath((a2==null?b0.e=new B.cD(b0.gbL().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bt(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=B.bC(new B.a7(b7,a7,b7+r,b5),A.h0)
$.W()
b9=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
b9.r=(b4?A.c.j(q):A.x.j(0.22)).gq(0)
a4=b9.I()
t.drawRRect(B.eZ(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new B.a7(d,a1,a3,a1+28)
J.bD(t.save())
t.clipRect(B.c8(a5),$.tw()[1],!0)
$.W()
a1=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a1.sap(new B.a3(A.aX,A.b1,A.w,B.a([A.K,A.c.j(0.4),A.K],v),c2,c2).au(0,c0))
a4=a1.I()
t.drawRect(B.c8(c0),a4)
a4.delete()
t.restore()}}},
ar(d){return!0}}
C.aK4.prototype={
aP(){this.aW()
this.aV()
this.dD()},
p(){var w=this,v=w.b0$
if(v!=null)v.a1(0,w.gdB())
w.b0$=null
w.a2()}}
C.Zn.prototype={
a3(){return"_Role."+this.b}}
C.pz.prototype={}
C.qd.prototype={}
C.Bk.prototype={}
C.Xm.prototype={}
C.act.prototype={}
C.ZA.prototype={
gX(d){return this.d}}
C.Bu.prototype={}
C.a9r.prototype={}
C.a9I.prototype={}
C.abC.prototype={}
C.bdt.prototype={
a0n(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
C.dG(d,"",e,g,h,f)},
b2L(d,e,f){return this.a0n(d,e,f,0,0.55)},
ay1(d,e,f,g){return this.a0n(d,e,f,0,g)},
b2M(d,e,f,g){return this.a0n(d,e,f,g,0.55)},
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
w.b2()},
ah1(d,e,f,g){var w="n"+this.ay++,v=new C.qd(w,e,f,g)
this.a.m(0,w,v)
this.b2()
return v},
A5(d,e,f){return this.ah1(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bm(w.b,new C.d9I(e))
A.d.bm(w.c,new C.d9J(e))
w.b2()},
b6v(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mb.h(0,v.b).c===D.vE)return!1
w=this.b
if(A.d.ba(w,new C.d9F(d,e)))return!1
w.push(new C.Bk(d,e))
this.b2()
return!0},
bT4(d){var w
if(d.b==="beat")return D.bTe[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.aB(500)
case 2:return 1400+w.aB(2200)
default:return 450+w.aB(2000)}},
aBm(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.m(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.m(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.asM[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.Bu(u,t,j.ax,90))
w.push(new C.Bu(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.af()*3.141592653589793*2
v.push(new C.ZA(u,new B.u(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b2L(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.af()*3.141592653589793*2
p=100+w.af()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.aq(t,A.c,w.af()*0.5)
m.toString
v.push(new C.ZA(u,new B.u(o*p,n*p),m,3+w.af()*4.5,1000+w.aB(700),j.ax))}j.f.push(new C.Bu(u,t,j.ax,120))
j.ay1(120,200,"noise",0.5)
j.b2L(261.63*Math.pow(2,([7,12,16,19][w.aB(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.Bu(u,t,j.ax,230))
w.push(new C.Bu(u,t,j.ax+160,160))
w.push(new C.Bu(u,t,j.ax+320,100))
j.b2M(180+j.at.aB(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.a9r(u,new B.u((w.af()-0.5)*220,-260-w.af()*180),t,j.ax))
j.b2M(300+w.aB(300),110,h,0.8)
break
case"comet":w=j.at
q=w.af()*3.141592653589793*2
j.w.push(new C.a9I(u,u.ao(0,new B.u(Math.cos(q),Math.sin(q)).aN(0,260+w.af()*200)),t,j.ax))
j.a0n(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fW()
j.a0n(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.abC(u,D.asg[v],t,j.ax))
j.ay1(261.63*Math.pow(2,([0,5,9,12][j.at.aB(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.ay1(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.bPl[A.o.F(w,3)]
for(k=1;k<=3;++k)j.ciO(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gah(j.b),v=new B.hK(w,new C.d9G(d));v.C();)j.awB(w.gT(0),j.ax+D.c0y[A.o.F(g.d,4)])
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
case"chance":s=j.at.aB(100)<D.chh[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gah(j.b),v=new B.hK(w,new C.d9H(d));v.C();)j.awB(w.gT(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.yj(w,0,v-700)},
ciO(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.Xm(e,"~"+d))},
awB(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.act(d.a,v,e,w))
u.push(new C.Xm(w,v))},
cMf(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a2(w).k("bg<2>")
w=B.z(new B.bg(w,v),v.k("G.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.m(0,r,o.ax+300)
else if(o.ax>=q){o.aBm(r)
u.m(0,r,o.ax+o.bT4(s))}}w=o.c
v=B.U(w).k("a4<1>")
q=B.z(new B.a4(w,new C.d9K(o),v),v.k("G.E"))
if(q.length!==0){A.d.bm(w,new C.d9L(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.K)(q),++t){u=q[t].b
if(A.a.a_(u,"~")){p=A.a.aY(u,1)
for(u=A.d.gah(v),r=new B.hK(u,new C.d9M(p));r.C();)o.awB(u.gT(0),o.ax)}else o.aBm(u)}}A.d.bm(o.d,new C.d9N(o))
A.d.bm(o.e,new C.d9O(o))
A.d.bm(o.f,new C.d9P(o))
A.d.bm(o.w,new C.d9Q(o))
A.d.bm(o.x,new C.d9R(o))
A.d.bm(o.r,new C.d9S(o))
o.b2()},
a5j(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new B.u(q.a+o*e,q.b+p*e)
r.b=new B.u(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new B.u(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new B.u(l,o)
if(o>n){p=m.a=new B.u(l,n)
t=m.b=new B.u(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new B.u(-t.a*0.8,t.b)}},
ac(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=B.a([],x.E)
for(v=this.a,v=new B.dv(v,v.r,v.e),u=x.N,t=x.C;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.E(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.K)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.Q.al(B.E(["nodes",m,"edges",v],u,x.ew),null)},
cDB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.a.a(A.Q.aD(0,d,null))
k.a7(0)
for(o=x.j,n=J.aU(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gT(n)
u=B.t(J.q(v,"k"))
if(!D.mb.an(0,u))continue
t=B.t(J.q(v,"id"))
m.m(0,t,new C.qd(t,u,new B.u(B.f3(J.q(v,"x"))*k.cy.a,B.f3(J.q(v,"y"))*k.cy.b),A.k.N(B.f3(J.q(v,"p")))))
s=B.c4(B.aJ(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aU(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gT(o)
q=B.t(J.q(r,0))
p=B.t(J.q(r,1))
if(m.an(0,q)&&m.an(0,p))n.push(new C.Bk(q,p))}k.b2()
return!0}catch(l){return!1}},
cGy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a7(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.m(0,n,new C.qd(n,r,new B.u(q*p.a,o*p.b),s))
l.b2()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.b6v(w[m.a],w[m.b])}},
gX(d){return this.cy}}
C.EA.prototype={}
C.U2.prototype={
S(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aBs(new C.bdt(B.T(w,x.f3),v,u,t,s,r,q,p,o,B.T(w,n),B.T(w,n),B.T(w,n),B.T(w,n),A.cB,A.K,A.at,$.av()),A.bw,A.J,A.J,A.U,null,null)}}
C.aBs.prototype={
a9K(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$a9K=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.ax(),$async$a9K)
case 6:q=n.k6(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.n(new C.e9Z(s))
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
return B.i($async$a9K,v)},
a6O(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$a6O=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.n(new C.e9O(s))
u=3
w=6
return B.b(B.ax(),$async$a6O)
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
return B.i($async$a6O,v)},
bF2(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a2(n).k("bg<2>")
v=""+n.a+"|"+o.length+"|"+new B.bg(n,w).cG(0,0,new C.e9Q())+"|"+A.d.cG(o,0,new C.e9R())
if(v===p.ch)return p.CW
u=new C.e9U()
t=x.s
s=B.a([],t)
r=new C.e9V(p,s,u)
for(n=new B.bg(n,w).gah(0),w=new B.hK(n,new C.e9S());w.C();){q=n.gT(0)
if(!A.d.ba(o,new C.e9T(q)))s.push(B.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.df(s,0,B.dK(5,"count",x.S),x.N).dA(0)},
Z(){var w,v=this
v.a0()
v.a9K()
v.d.db=v.ay
w=v.qR(new C.eao(v))
w.kp(0)
v.e!==$&&B.aQ()
v.e=w},
p(){var w=this,v=w.as
if(v!=null)v.aa(0)
v=w.e
v===$&&B.c()
v.p()
v=w.d
v.R$=$.av()
v.O$=0
w.bqm()},
a9h(d){return this.bSx(d)},
bSx(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$a9h=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.ax(),$async$a9h)
case 6:q=m.aS(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cDB(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aSo(A.d.gL(D.arO))
if(s.c!=null)s.n(new C.e9Y())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a9h,v)},
aSo(d){this.d.cGy(0,d.c,d.d)
this.D0()},
D0(){var w=this.as
if(w!=null)w.aa(0)
this.as=B.cP(A.lp,new C.e9K(this))},
atD(d){var w,v,u,t,s=this.d.a,r=B.a2(s).k("bg<2>")
s=B.z(new B.bg(s,r),r.k("G.E"))
r=B.U(s).k("dy<1>")
s=new B.dy(s,r)
s=new B.bV(s,s.gJ(0),r.k("bV<ai.E>"))
w=d.a
r=r.k("ai.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
c7c(d){var w,v,u,t,s,r=this.d.a,q=B.a2(r).k("bg<2>")
r=B.z(new B.bg(r,q),q.k("G.E"))
q=B.U(r).k("dy<1>")
r=new B.dy(r,q)
r=new B.bV(r,r.gJ(0),q.k("bV<ai.E>"))
w=d.a
v=d.b
q=q.k("ai.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bSl(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dv(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mb.h(0,r.b).c===D.vE)continue
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
bZY(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.h1p(new B.u(n.a+36,n.b+0),new B.u(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cq6(d){var w,v,u,t,s,r,q=this,p=q.atD(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.eH()
u=v.b
if(u==="button"){w.aBm(p)
return}if(q.r)return
t=D.mb.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.pM)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b2()
q.D0()
return}if(q.r)return
r=q.bZY(d)
if(r!=null){w=q.d
A.d.cu(w.b,r)
w.b2()
q.D0()}},
c8s(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.c7c(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.atD(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aE(0,d)}},
c8t(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b2()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.u(A.k.E(d.a+s.y.a,46,t.a-46),A.k.E(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b2()}}},
aX7(){var w,v,u=this
if(u.z!=null){w=u.bSl(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.b6v(v,w)}else v=!1
if(v){B.jF()
u.D0()}u.z=null
u.d.b2()}else if(u.x!=null){if(u.at)u.D0()
u.x=null}},
a9X(d){return this.bV8(d)},
bV8(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9X=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.atD(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.j8()
p=t.c
p.toString
w=3
return B.b(B.c2(D.rz,null,new C.ea0(q),p,!0,!0,!1,A.l8,!1,!1,x.y),$async$a9X)
case 3:if(f===!0){r.W(0,s)
t.D0()}case 1:return B.h(u,v)}})
return B.i($async$a9X,v)},
bZW(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.A5(0,d,new B.u(v.a*(0.25+u.af()*0.5),v.b*(0.2+u.af()*0.55)))
B.eH()
this.D0()},
adB(){var w=0,v=B.j(x.H),u=this,t,s
var $async$adB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.c2(D.rz,null,new C.ea2(),s,!0,!0,!0,A.l8,!1,!1,x.es),$async$adB)
case 2:t=e
if(t!=null)u.aSo(t)
return B.h(null,v)}})
return B.i($async$adB,v)},
ab5(d){var w=0,v=B.j(x.H),u=this,t
var $async$ab5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ch(null,null,!0,null,new C.e9N(),t,null,!0,!0,x.y),$async$ab5)
case 2:if(f===!0){u.d.a7(0)
u.D0()}return B.h(null,v)}})
return B.i($async$ab5,v)},
B(d){var w=this,v=null,u=B.a([B.afK(w.r?new B.bI(A.a4,v,v,new B.C(A.E4,B.hh(D.bwJ,D.eU4,new C.eam(w),v),v),v):w.bZZ(),A.ba,A.io),B.D(B.ck(new C.ean(w)),1)],x.p)
if(!w.r)u.push(w.cla())
return B.ce(v,A.bX,B.bq(!0,B.v(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0),v,!1,!1,v,v)},
bAP(){var w=null,v=new C.e9P(),u=A.x.j(0.7),t=B.m(26),s=B.H(A.br.j(0.5),A.r,1)
return B.bZ(0,B.ed(B.au(B.p(w,B.ci(B.v(B.a([D.f3k,A.av,D.fac,A.ay,v.$4(A.of,A.br,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(U.EQ,A.cC,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.l_,A.bU,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(D.bqv,A.cz,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.f9z,new B.bI(A.a7,w,w,B.bK(!1,D.f0F,w,w,!0,w,w,this.gbAI(),w,w),w)],x.p),A.F,w,A.e,A.R,0,A.p),A.q,w,A.z,w,w,w,w,A.ak),A.h,w,A.SO,new B.o(D.rz,w,s,t,w,w,A.n),w,w,w,A.fB,Z.ady,w,w,w),w,w,w),u,!0),0,0,0)},
bZZ(){var w=this,v=null,u=B.aF(v,v,v,v,E.qu,v,v,v,new C.ea8(w),v,v,v,v,v,v),t=w.a6h(A.Lo,"How it works",new C.ea9(w),!0),s=w.ay?A.ny:M.qs
return new B.C(D.bkM,B.B(B.a([u,D.bma,t,w.a6h(s,"Sound",new C.eaa(w),!0),w.a6h(A.dQ,"Ideas",w.gcc5(),!0),w.a6h(D.x_,"Clear",w.gbZX(w),!0),w.aJG(A.iM,"Show",new C.eab(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aJG(d,e,f,g,h){var w=null,v=h?A.br:A.c.j(0.08),u=B.m(14),t=B.m(14),s=B.a([B.V(d,h?A.x:A.c,w,w,w,20)],x.p)
return new B.C(A6.up,B.aD(!1,A.a1,!0,u,B.aI(!1,t,!0,B.hq(new B.C(new B.N(8,8,8,8),B.B(s,A.m,w,A.e,A.R,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.h,v,0,w,w,w,w,w,A.ad),w)},
a6h(d,e,f,g){return this.aJG(d,e,f,g,!1)},
cla(){var w=null,v=new C.ea4(this),u=A.c.j(0.08)
return B.p(w,B.ci(B.B(B.a([v.$2("START",D.vE),v.$2("CHANGE",D.Cp),v.$2("REACT",D.pM)],x.p),A.F,w,A.e,A.j,0,w,w),A.q,w,A.z,w,w,w,w,A.b0),A.h,w,w,new B.o(D.Da,w,new B.c1(new B.ay(u,1,A.r,-1),A.X,A.X,A.X),w,w,w,A.n),w,w,w,w,D.bg1,w,w,w)},
clb(d){var w,v,u,t,s=null,r=D.mb.h(0,d)
r.toString
w=B.m(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.H(v.j(0.5),A.r,1)
return new B.C(A.hn,B.aH(s,B.p(s,B.v(B.a([B.V(r.b,v,s,s,s,22),A.d4,B.d(r.a,s,1,A.a2,s,s,s,D.a4z,s,s,s)],x.p),A.m,s,A.e,A.R,0,A.p),A.h,s,s,new B.o(s,s,t,w,s,new B.a3(A.aX,A.b1,A.w,u,s,s),A.n),s,s,s,s,A.hC,s,s,62),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ea3(this,d),s,s,s,s,s,s,!1,A.ae),s)}}
C.bdu.prototype={
a4(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bD(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.W()
u=B.L()
u.r=A.c.j(0.05).gq(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.I()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.W()
o=B.L()
o.r=b5.cx.j(0.4*((p-b6)/800)).gq(0)
b8.aX(new B.a7(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,B.K)(w),++m){l=w[m]
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
a0=new B.aO(e.r,A.ap,b4,b4,d)
d.push(new B.b4(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new B.p7(h+a1,i,f-a1,g,f,g))
a2=D.mb.h(0,k.b).d
a3=D.mb.h(0,j.b).d
e=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
e.b=A.ac
e.c=3
e.d=A.bL
d=B.a([a2.j(0.55),a3.j(0.55)],p)
g=B.qW(new B.u(h,i),new B.u(f,g))
e.sap(new B.a3(A.a4,A.a7,A.w,d,b4,b4).au(0,new B.a7(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.I()
i=a0.gbL().a.snapshot()
b7.drawPath((a0.e=new B.cD(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,B.K)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.E((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=C.h1p(new B.u(i.a+36,i.b+0),new B.u(h.a-36,h.b),a5)
$.W()
h=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
h.r=A.c.j(0.35).gq(0)
h.z=G.mc
q=h.I()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
g.r=A.c.gq(0)
q=g.I()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ao(0,D.Gw)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new B.aO($.W().r,A.ap,b4,b4,B.a([],o))
o=a8.b
a0.D(new B.b4(t,o))
i=a9.b
a0.D(new B.p7(t+a1,o,w-a1,i,w,i))
i=B.L()
i.b=A.ac
i.c=3
i.r=A.c.j(0.7).gq(0)
b8.aM(a0,i)
i=B.L()
i.r=A.c.gq(0)
b8.ae(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,B.K)(w),++m){b0=w[m]
o=b0.c
v=A.k.E((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dS.av(0,v)
$.W()
h=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
h.b=A.ac
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gq(0)
q=h.I()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,B.K)(w),++m){b1=w[m]
v=A.k.E((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=B.l4(o,i,A.dS.av(0,v))
h.toString
i=B.l4(o,i,A.dS.av(0,A.k.E(v-0.35,0,1)))
i.toString
$.W()
o=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
o.c=5
o.d=A.bL
g=b1.c
f=B.a([g.j(0),g],p)
e=B.qW(i,h)
o.sap(new B.a3(A.a4,A.a7,A.w,f,b4,b4).au(0,new B.a7(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.I()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=A.c.gq(0)
q=i.I()
b7.drawCircle(o,h,6,q)
q.delete()
i=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=g.j(0.5*(1-v)).gq(0)
i.z=A.j7
q=i.I()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,B.K)(w),++m){a4=w[m]
v=A.k.E((b6-a4.f)/a4.e,0,1)
o=a4.a
$.W()
i=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=a4.c.j(1-v).gq(0)
q=i.I()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,B.K)(w),++m){j=w[m]
o=j.a
$.W()
i=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
h=j.c
i.r=h.j(0.35).gq(0)
i.z=A.j7
q=i.I()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
i.sap(new B.bR(N.pN,0.5,A.w,b4,0,B.a([A.c,h],p),b4,b4).au(0,B.bT(j.a,8)))
q=i.I()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,B.K)(b5),++m){a6=b5[m]
v=A.k.E((b6-a6.d)/1000,0,1)
t=1-v
b2=C.bdv(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a4(b8,new B.u(t.a-o/2,t.b-(40+60*v+p.gbh(p)/2)))}for(b5=new B.dv(n,n.r,n.e);b5.C();)b3.c81(b8,b5.d,b6)
b7.restore()},
c81(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mb.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.E(1-(f-w)/520,0,1)
u=B.cJ(e.c,64,64)
t=B.bC(u,A.jS)
s=t.eH(A.cs)
$.W()
r=B.L()
r.r=A.x.j(0.55).gq(0)
r.z=A.lz
d.aJ(s,r)
if(v>0){s=t.cE(6)
r=B.L()
r.r=h.d.j(0.6*v).gq(0)
r.z=A.B3
d.aJ(s,r)}s=t.eH(A.cF)
r=B.L()
q=h.d
r.r=B.aq(q,A.x,0.65).gq(0)
d.aJ(s,r)
r=B.L()
s=B.aq(q,A.c,0.18+0.4*v)
s.toString
p=B.aq(q,A.x,0.35)
p.toString
r.sap(new B.a3(A.aX,A.b1,A.w,B.a([s,p],x.O),j,j).au(0,u))
d.aJ(t,r)
r=B.L()
r.b=A.ac
r.c=1.2
r.r=A.c.j(0.35).gq(0)
d.aJ(t,r)
r=h.b
p=e.c
o=C.bdv(B.jx(r.a),30,A.c,r.b,j,A.I)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aE(0,new B.u(s/2,r.gbh(r)/2)))
n=C.bdv(h.a,11,A.c,j,j,A.I)
n.a4(d,e.c.ao(0,new B.u(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.asg[A.o.F(e.d,6)]:j
h=h.c
if(h===D.pM){s=e.c.ao(0,new B.u(0,62))
r=B.L()
r.r=D.asM[A.o.F(e.d,6)].gq(0)
d.ae(s,5,r)}else if(m!=null){l=C.bdv(m,9.5,A.az,j,j,A.O)
l.a4(d,e.c.ao(0,new B.u(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bdv(m,9.5,A.az,j,j,A.O)
l.a4(d,e.c.ao(0,new B.u(-l.b.c/2,54)))}if(k.c)return
if(h!==D.vE)k.aXU(d,e.c.aE(0,D.Gw),q)
k.aXU(d,e.c.ao(0,D.Gw),q)},
aXU(d,e,f){var w
$.W()
w=B.L()
w.r=A.bX.gq(0)
d.ae(e,9,w)
w=B.L()
w.b=A.ac
w.c=2.2
w.r=f.gq(0)
d.ae(e,9,w)
w=B.L()
w.r=A.c.gq(0)
d.ae(e,3.5,w)},
ar(d){return!0}}
C.aJe.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.bi_.prototype={}
C.Og.prototype={
gX(d){return this.d}}
C.Uh.prototype={
S(){var w=B.a([],x.g4),v=B.a([],x.ed)
return new C.bh4(new B.co(null,x.A),w,v,A.cB,A.bw,D.Di,null,null)}}
C.bh4.prototype={
aVG(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.E(A.k.bt((1-d.b/(B.aG(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.arh[A.o.F(v,5)]+12*A.o.ak(v,5)+12
switch(t.z){case"glow":C.l3("synth",u,420,0.3)
break
case"rainbow":C.l3("bell",u,700,0.35)
break
case"stars":C.l3("pluck",u+12,400,0.4)
break
case"sparks":C.dG(2400+t.r.aB(2000),"",60,0,0.18,"noise")
break
default:C.dG(110+t.r.aB(60),"",140,0,0.22,"noise")}},
c1W(d){return this.aVG(d,!1)},
Z(){var w,v=this
v.a0()
w=v.qR(new C.ek9(v))
w.kp(0)
v.w!==$&&B.aQ()
v.w=w},
p(){var w=this.w
w===$&&B.c()
w.p()
this.bqv()},
gaXr(){var w=this.Q
return w<0?new H.mv(1,A.k.F(this.y*0.18,360),0.85,1).iu():D.Oj[w]},
aNW(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gaXr(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.af()*3.141592653589793*2
switch(l.z){case"fire":q=v.af()
p=l.as
o=v.af()
n=v.af()
m=B.aq(A.cz,A.aD,v.af())
m.toString
j.push(new C.Og(new B.u(u+(q-0.5)*p,t),new B.u((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.af()*0.4),l.y,700+v.aB(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.af()*200
n=B.aq(k,A.c,v.af()*0.6)
n.toString
j.push(new C.Og(d,new B.u(q*o,p*o),n,1.5+v.af()*3,l.y,600+v.aB(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.af()*40
j.push(new C.Og(d,new B.u(q*o,p*o),k,1.2+v.af()*1.8,l.y,500))}}},
aUu(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gaXr()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=B.a([],x.g)
r.ax=new C.bi_(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aNW(e)
r.aVG(e,!0)
r.n(new C.ejL())},
aUt(){this.ax=null
this.n(new C.ejK())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([B.aF(n,n,n,n,D.m8,n,n,n,new C.ejU(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=B.a([B.b2(n,n,n,new C.boi(k,o.f,o.y,o.at,n),A.at)],m)
if(!o.ay&&k.length===0)j.push(D.aXB)
k=B.aH(A.c5,new B.am(A.W,n,A.b_,A.q,j,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,new C.ejV(o),new C.ejW(o),new C.ek_(o),n,n,n,n,n,n,n,n,n,new C.ek0(o),new C.ek1(o),n,n,n,!1,A.ae)
j=B.a([],m)
for(w=0;w<5;++w){v=D.cEJ[w]
j.push(new C.dw(v.b,o.z===v.a,new C.ek2(o,v),v.c,A.bU,n))}u=B.a([new C.E3(A.c,o.Q<0,new C.ek3(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new C.E3(D.Oj[t],o.Q===t,new C.ek4(o,t),!1,n))
s=o.as
s=C.hp(A.bU,A.o.u(A.k.U(s)),"Size",36,4,new C.ek5(o),s)
r=o.ch
q=r?A.ny:M.qs
q=B.a([new C.dw("Sound",r,new C.ek6(o),q,A.bU,n),new C.ff(A.uK,"Undo",new C.ejX(o),A.c,n),new C.ff(D.x_,"Clear",new C.ejY(o),A.cD,n)],m)
for(w=0;w<4;++w){p=D.cTy[w]
q.push(new C.E3(p,o.at.A(0,p),new C.ejZ(o,p),!1,n))}return C.jy(A.bU,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new B.ep(k,o.d),"SPARK PAINTER",B.v(B.a([new C.eF(j,"BRUSH",n),new C.eF(u,"COLOUR",n),s,new C.eF(q,n,n)],m),A.m,n,A.e,A.R,0,A.p))}}
C.boi.prototype={
a4(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.W()
w=B.L()
v=a4.e
w.r=v.gq(v)
a6.aX(new B.a7(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,B.K)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.W()
o=B.a([],t)
n=new B.aO(p.r,A.ap,a5,a5,o)
o.push(new B.b4(A.d.gL(q).a,A.d.gL(q).b))
for(p=B.U(q),m=p.k("pv<1>"),l=new B.pv(q,1,a5,m),l.FZ(q,1,a5,p.c),l=new B.bV(l,l.gJ(0),m.k("bV<ai.E>")),m=m.k("ai.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new B.ao(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bx(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gL(q)
$.W()
p=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=r.c.gq(0)
j=p.I()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.W()
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.b=A.ac
q.d=A.bL
q.e=A.ft
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gq(0)
q.z=new B.hy(A.G,p)
j=q.I()
q=n.e
u.drawPath((q==null?n.e=new B.cD(n.gbL().a.snapshot()):q).a,j)
j.delete()
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.b=A.ac
q.d=A.bL
q.e=A.ft
q.c=p
q.r=o.gq(0)
j=q.I()
q=n.e
u.drawPath((q==null?n.e=new B.cD(n.gbL().a.snapshot()):q).a,j)
j.delete()
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.b=A.ac
q.d=A.bL
q.e=A.ft
q.c=p*0.35
q.r=A.c.j(0.85).gq(0)
j=q.I()
q=n.e
u.drawPath((q==null?n.e=new B.cD(n.gbL().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new H.mv(1,A.o.F(i*5,360),0.85,1).iu()
o=q[i-1]
m=q[i]
$.W()
l=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
l.c=p
l.d=A.bL
l.r=h.gq(0)
j=l.I()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,B.K)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gL(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new H.mv(1,A.o.F(a3*23,360),0.7,1).iu():l
a4.c__(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,B.K)(w),++s){a0=w[s]
e=A.k.E((t-a0.e)/a0.f,0,1)
q=a0.a
$.W()
p=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=a0.c.j((1-e)*0.9).gq(0)
p.z=E.OM
j=p.I()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c__(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.W(),o=B.a([],x.v),n=new B.aO(p.r,A.ap,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new B.b4(r,q)
o.push(r)
q=n.f
if(q!=null)r.bx(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new B.ao(r,q)
o.push(r)
q=n.f
if(q!=null)r.bx(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.D(new B.bE())
$.W()
p=B.L()
p.r=h.j(0.4).gq(0)
p.z=A.j7
d.aM(n,p)
p=B.L()
p.r=h.gq(0)
d.aM(n,p)},
ar(d){return!0}}
C.Ut.prototype={
S(){return new C.aBG(new B.co(null,x.A),new B.ap(new B.bc("NGMY",A.b2,A.aM),$.av()),null,null)}}
C.aBG.prototype={
gHs(){var w,v=this,u=v.e
if(u===$){w=B.bi(null,A.rJ,null,1,null,v)
w.cD(0)
v.e!==$&&B.bJ()
v.e=w
u=w}return u},
Z(){this.a0()
var w=this.gHs()
w.d5()
w.dN$.K(0,this.gbRv())},
bRw(){var w,v,u,t,s,r,q,p=this,o=p.gHs().x
o===$&&B.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.lD:new B.lS(w)).gJ(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)C.dG(1500,"",35,0,0.18,"square")
else if(s==="glitch")C.dG(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
C.l3(s,D.aqg[A.o.F(t,8)]+12,450,0.35)}}p.Q=o},
p(){this.gHs().p()
var w=this.f
w.R$=$.av()
w.O$=0
this.bqB()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=B.a(["\u2026"],x.s)
else{h=new B.lS(h)
w=B.z(h,B.a2(h).k("G.E"))}v=D.Oj[k.w]
h=x.p
u=B.a([B.aF(j,j,j,j,D.m8,j,j,j,new C.eqJ(k,d),j,j,j,j,"Share",j)],h)
t=B.m(26)
s=D.ash[k.y]
s=B.bu(t,B.bU(B.au(B.c3(k.gHs(),new C.eqK(k,w,v),j),j,j,j),new B.o(j,j,j,j,j,new B.a3(A.ax,A.aC,A.w,s,j,j),A.n),A.bb),A.ao)
t=A.c.j(0.06)
t=B.aK(j,A.U,!1,j,!0,A.q,j,B.aL(),i,j,j,j,j,j,2,B.bn(j,new B.b3(4,B.m(14),A.X),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.C2,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.z,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new C.eqL(k),j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,A.hg,!0,A.a5,j,A.am,j,j,j,j)
i=B.a([],h)
for(r=0;r<7;++r){q=D.ch5[r]
i.push(new C.dw(q.b,k.r===q.a,new C.eqM(k,q),j,A.cz,j))}p=B.a([],h)
for(o=0;o<8;++o)p.push(new C.E3(D.Oj[o],k.w===o,new C.eqN(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.ny:M.qs
l=B.a([new C.dw(m,n,new C.eqO(k),l,A.cz,j)],h)
n=B.a([],h)
for(o=0;o<5;++o)n.push(new C.E3(D.ash[o][0],k.y===o,new C.eqP(k,o),!1,j))
n.push(A.bp)
n.push(new C.ff(A.m5,"Replay",new C.eqQ(k),A.c,j))
m=k.x
return C.jy(A.cz,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new B.C(A.bC,new B.ep(s,k.d),j),"TITLE ANIMATOR",B.v(B.a([t,A.P,new C.eF(i,"MOVE",j),new C.eF(p,"COLOUR",j),new C.eF(l,"SOUND",j),new C.eF(n,"BACK",j),C.hp(A.cz,A.o.u(A.k.U(m)),"Size",96,28,new C.eqR(k),m)],h),A.m,j,A.e,A.R,0,A.p))},
bUe(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=B.a([new B.cL(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<A.k.bt(g*1.6*f)?1:0
w=h
break
case"bounce":o=-Math.abs(Math.sin(A.k.F(g*2-q*0.5,1)*3.141592653589793))*s.x*0.5
w=h
break
case"wave":o=Math.sin(g*3.141592653589793*2-q*3)*s.x*0.28
w=h
break
case"neon":v=Math.sin(g*40+e*7)>0.92?0.25:1
A.d.a7(p)
p.push(new B.cL(h,A.J,30*v))
p.push(new B.cL(h.j(0.8),A.J,60*v))
w=h
m=v
break
case"glitch":u=A.o.F(A.k.bt(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.b6
else w=u?A.bU:h
break
case"zoom":t=A.k.E(g*1.4-q*0.5,0,1)
n=A.n5.av(0,t)
w=h
m=t
break
case"rainbow":w=new H.mv(1,A.k.F(g*360+e*40,360),0.75,1).iu()
A.d.a7(p)
p.push(new B.cL(w.j(0.7),A.J,18))
break
default:w=h}return B.d8(B.dP(B.e5(A.A,B.d(d,r,r,r,r,r,r,B.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new B.u(l,o)),m)}}
C.aJn.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.aJt.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.YT.prototype={}
C.U_.prototype={
S(){var w=B.a([],x.aS)
return new C.aBl(new B.co(null,x.A),w,A.cB,A.at,$,A.bw,0,B.a([],x.X),null,null)}}
C.aBl.prototype={
gab6(){var w=this.r
return new B.u(w.a/2,w.b/2)},
aYz(){return new H.mv(1,this.f.af()*360,0.6,1).iu()},
aom(d,e,f,g){var w=this,v=w.gab6().ao(0,new B.u(Math.cos(e),Math.sin(e)).aN(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new C.YT(v,new B.u(-t,s).aN(0,r).aN(0,u*f),w.Q*(0.6+w.f.af()*0.9),w.aYz(),B.a([],x.g)))},
bAb(d,e,f){return this.aom(d,e,f,!1)},
bAa(d,e){return this.aom(d,e,1,!1)},
cnr(){var w,v,u,t=this
A.d.a7(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bAa(40+w*u/5,v.af()*3.141592653589793*2)},
bB3(){var w=this.r
this.bAb(Math.min(w.a,w.b)*0.42,this.f.af()*3.141592653589793*2,0.45)},
Z(){this.a0()
this.kM()},
l4(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.at))return
w=a2.e
v=w.length
if(v===0&&a2.fF$<300)return
u=a2.gab6()
t=a3*a2.x/4
for(s=u.a,r=u.b,q=0;q<4;++q,v=o)for(p=0;o=w.length,p<o;w.length===v||(0,B.K)(w),++p){n=w[p]
o=n.a
m=s-o.a
o=r-o.b
l=Math.max(m*m+o*o,400)
k=Math.sqrt(l)
j=1e6*a2.w/l
i=new B.u(m/k*j,o/k*j)
if(a2.y)for(o=w.length,h=0;h<w.length;w.length===o||(0,B.K)(w),++h){g=w[h]
if(g===n)continue
m=g.a
j=n.a
f=m.a-j.a
j=m.b-j.b
e=Math.max(f*f+j*j,400)
m=Math.sqrt(e)
d=1e6*a2.w*0.02/e
a0=g.c/7
i=new B.u(i.a+f/m*d*a0,i.b+j/m*d*a0)}o=n.b
m=o.a+i.a*t
o=o.b+i.b*t
n.b=new B.u(m,o)
j=n.a
n.a=new B.u(j.a+m*t,j.b+o*t)}for(p=0;o=w.length,p<o;w.length===v||(0,B.K)(w),++p){n=w[p]
if(a2.z){o=n.e
if(o.length!==0){m=A.d.gaj(o)
j=n.a
f=m.a-j.a
j=m.b-j.b
j=Math.sqrt(f*f+j*j)>3
m=j}else m=!0
if(m)o.push(n.a)
if(o.length>260)A.d.cu(o,0)}else A.d.a7(n.e)}for(p=0;p<w.length;w.length===o||(0,B.K)(w),++p){n=w[p]
v=n.a
a1=!1
if(v.b<r)if(J.lF(v.a-s)!==J.lF(n.f-s)){v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
m=v<Math.min(Math.abs(m.a),Math.abs(m.b))
a1=m}if(a1&&a2.ax&&a2.fF$-n.r>250){n.r=a2.fF$
v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
C.l3("bell",D.aqg[A.k.U((1-A.k.E(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new B.a4(w,new C.e6R(u),B.U(w).k("a4<1>")).gJ(0)>0&&a2.ax)C.dG(70,"",300,0.6,0.8,"sine")
A.d.bm(w,new C.e6S(a2,u))},
cbZ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=B.a([],x.g),j=this.gab6()
for(w=j.a,v=j.b,u=e,t=d,s=0;s<220;++s){r=t.a
q=w-r
p=t.b
o=v-p
n=Math.max(q*q+o*o,400)
m=Math.sqrt(n)
l=1e6*this.w/n
q=u.a+q/m*l*0.016666666666666666
l=u.b+o/m*l*0.016666666666666666
u=new B.u(q,l)
t=new B.u(r+q*0.016666666666666666,p+l*0.016666666666666666)
if(A.o.F(s,3)===0)k.push(t)
if(m<16)break}return k},
gaS3(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aE(0,w).aN(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=B.a([B.aF(r,r,r,r,D.m8,r,r,r,new C.e6F(s,d),r,r,r,r,"Share",r)],q),o=B.ck(new C.e6G(s)),n=s.w
n=C.hp(A.cP,A.k.a9(n,1)+"x","Sun mass",2.5,0.3,new C.e6H(s),n)
w=s.x
w=C.hp(A.cP,A.k.a9(w,1)+"x","Time",3,0.2,new C.e6J(s),w)
v=s.Q
v=C.hp(A.cP,A.o.u(A.k.U(v)),"Planet size",16,3,new C.e6K(s),v)
u=s.ax
t=u?A.ny:M.qs
return C.jy(A.cP,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",B.v(B.a([n,w,v,new C.eF(B.a([new C.dw("Sound",u,new C.e6L(s),t,A.cP,r),new C.dw("Trails",s.z,new C.e6M(s),A.LA,A.cP,r),new C.dw("Planets pull each other",s.y,new C.e6N(s),A.xo,A.cP,r)],q),r,r),new C.eF(B.a([new C.ff(A.m4,"Solar system",new C.e6O(s),A.cP,r),new C.ff(A.mL,"Comet",new C.e6P(s),A.c,r),new C.ff(A.m1,"Cluster",new C.e6Q(s),A.c,r),new C.ff(D.x_,"Clear",new C.e6I(s),A.cD,r)],q),r,r)],q),A.m,r,A.e,A.R,0,A.p))}}
C.bhN.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.W()
w=B.L()
w.r=D.TT.gq(0)
d.aX(new B.a7(0,0,0+g,0+f),w)
v=new B.eU()
v.dM(5)
for(w=d.a,u=0;u<70;++u){t=v.af()
s=v.af()
r=v.af()
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.25+v.af()*0.4).gq(0)
p=q.I()
w.drawCircle(t*g,s*f,r*1.2+0.3,p)
p.delete()}o=16+i.d*6
g=i.c
f=o*3.2
t=B.L()
s=x.O
t.sap(new B.bR(A.A,0.5,A.w,h,0,B.a([A.cP.j(0.45),A.K],s),h,h).au(0,B.bT(g,f)))
d.ae(g,f,t)
t=B.L()
t.sap(D.dWv.au(0,B.bT(g,o)))
d.ae(g,o,t)
for(g=i.b,f=g.length,n=0;n<g.length;g.length===f||(0,B.K)(g),++n){m=g[n]
t=m.e
if(t.length>1)for(r=m.d,u=1;q=t.length,u<q;++u){l=u/q
q=t[u-1]
k=t[u]
j=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
j.c=2.2*l+0.4
j.d=A.bL
j.r=r.j(l*0.8).gq(0)
p=j.I()
w.drawLine.apply(w,[q.a,q.b,k.a,k.b,p])
p.delete()}t=m.a
r=m.c
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
k=m.d
q.r=k.j(0.3).gq(0)
q.z=G.mc
p=q.I()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
j=B.aq(k,A.x,0.5)
j.toString
q.sap(new B.bR(N.pN,0.5,A.w,h,0,B.a([A.c,k,j],s),h,h).au(0,B.bT(m.a,r)))
p=q.I()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=B.L()
t.c=2
t.r=A.j1.gq(0)
d.bE(g,f,t)
t=B.L()
t.r=A.c.gq(0)
d.ae(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,B.K)(g),++n){m=g[n]
t=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.7).gq(0)
p=t.I()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
ar(d){return!0}}
C.a9y.prototype={}
C.Uo.prototype={
S(){var w=B.a([],x.cS),v=B.a([],x.ev)
return new C.bh9(new B.co(null,x.A),w,v,A.cB,A.at,$,A.bw,0,B.a([],x.X),null,null)}}
C.bh9.prototype={
Z(){this.a0()
this.kM()},
c_0(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.e,v=k.r;w.length<A.k.U(k.x);){u=v.af()*3.141592653589793*2
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
w.push(new C.a9y(new B.u(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new B.u(p*n,o*n),A.k.F(m*60+l,360)))}while(w.length>A.k.U(k.x))w.pop()},
l4(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.at))return
a2.c_0()
w=a2.f
A.d.bm(w,new C.eqa(a2))
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
r=new B.u(r.a+j,r.b+l)
l=m.b
q=new B.u(q.a+l.a,q.b+l.b)
if(h<676&&h>0.01){l=Math.sqrt(h)
h=26-Math.sqrt(h)
p=new B.u(p.a-i/l*h,p.b-k/l*h)}}}if(o>0){l=s.a
k=0.8*a2.y
j=s.b
i=1.6*a2.Q
g=7*a2.z
f=new B.u(0+(r.a/o-l.a)*k+(q.a/o-j.a)*i+p.a*g,0+(r.b/o-l.b)*k+(q.b/o-j.b)*i+p.b*g)}else f=A.J
l=s.a
k=l.a
if(k<40)f=new B.u(f.a+(40-k)*6,f.b+0)
j=a2.w
i=j.a-40
if(k>i)f=new B.u(f.a-(k-i)*6,f.b)
l=l.b
if(l<40)f=new B.u(f.a+0,f.b+(40-l)*6)
j=j.b-40
if(l>j)f=new B.u(f.a,f.b-(l-j)*6)
j=a2.ay
if(j!=null){k=j.a-k
l=j.b-l
e=Math.sqrt(k*k+l*l)
j=a2.at
if(j==="attract"&&e<260&&e>1)f=new B.u(f.a+k/e*420,f.b+l/e*420)
if(j==="scare"&&e<170&&e>1){i=170-e
f=new B.u(f.a-k/e*i*22,f.b-l/e*i*22)}if(j==="hunt"&&e<220&&e>1){j=220-e
f=new B.u(f.a-k/e*j*30,f.b-l/e*j*30)}}for(l=w.length,d=0;d<w.length;w.length===l||(0,B.K)(w),++d){k=w[d].a
j=s.a
i=k.a-j.a
j=k.b-j.b
e=Math.sqrt(i*i+j*j)
if(e<220&&e>1)f=new B.u(f.a+i/e*360,f.b+j/e*360)}l=s.b
k=l.a+f.a*a3
l=l.b+f.b*a3
s.b=new B.u(k,l)
a0=Math.sqrt(k*k+l*l)
l=a2.as
k=a2.at==="hunt"&&a2.ay!=null?1.5:1
if(a0>0.01){j=s.b
k=A.k.E(a0,l*0.5,l*k)
s.b=new B.u(j.a/a0*k,j.b/a0*k)}l=s.a
k=s.b
s.a=new B.u(l.a+k.a*a3,l.b+k.b*a3)}a1=w.length
A.d.bm(w,new C.eqb(a2))
if(w.length<a1&&a2.ch)C.l3("bell",12+a2.r.aB(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fF$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fF$
C.l3("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=B.a([B.aF(l,l,l,l,D.m8,l,l,l,new C.eq_(m,d),l,l,l,l,"Share",l)],k),i=B.ck(new C.eq0(m)),h=B.a([],k)
for(w=0;w<4;++w){v=D.cGd[w]
h.push(new C.dw(v.b,m.at===v.a,new C.eq1(m,v),v.c,A.bh,l))}u=B.a([],k)
for(w=0;w<3;++w){t=D.cqQ[w]
u.push(new C.dw(t.b,m.ax===t.a,new C.eq2(m,t),l,A.bh,l))}s=m.ch
r=s?A.ny:M.qs
r=B.a([new C.dw("Sound",s,new C.eq3(m),r,A.bh,l)],k)
s=m.x
s=C.hp(A.bh,A.o.u(A.k.U(s)),"How many",150,15,new C.eq4(m),s)
q=C.hp(A.bh,l,"Together",2.5,0,new C.eq5(m),m.y)
p=C.hp(A.bh,l,"Apart",2.5,0,new C.eq6(m),m.z)
o=C.hp(A.bh,l,"Same way",2.5,0,new C.eq7(m),m.Q)
n=m.as
return C.jy(A.bh,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",B.v(B.a([new C.eF(h,"TOUCH",l),new C.eF(u,"LOOK",l),new C.eF(r,l,l),s,q,p,o,C.hp(A.bh,A.o.u(A.k.U(n)),"Speed",280,50,new C.eq8(m),n)],k),A.m,l,A.e,A.R,0,A.p))}}
C.bp8.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=B.a([D.a9C,D.bal],x.O)
else{v=x.O
w=a4==="fly"?B.a([A.d9,O.Ui],v):B.a([D.b7N,D.b09],v)}v=0+a6.a
u=0+a6.b
t=$.W()
s=B.L()
s.sap(new B.a3(A.aX,A.b1,A.w,w,a3,a3).au(0,new B.a7(0,0,v,u)))
a5.aX(new B.a7(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,B.K)(v),++r){q=v[r].a
p=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=A.cz.gq(0)
o=p.I()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
n.r=A.cz.j(0.25).gq(0)
n.z=G.mc
o=n.I()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,B.K)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new H.mv(1,j,0.7,1).iu()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
f.r=h.j(0.35*g).gq(0)
f.z=A.j7
o=f.I()
s.drawCircle(j.a,j.b,9,o)
o.delete()
j=k.a
f=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
f.r=A.c.j(g).gq(0)
o=f.I()
s.drawCircle(j.a,j.b,2.6,o)
o.delete()
break
case"bird":J.bD(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
e=Math.sin(l+j)*5
j=B.a([],m)
d=new B.aO(t,A.ap,a3,a3,j)
j.push(new B.b4(8,0))
j.push(new B.ao(-6,-7-e))
j.push(new B.ao(-2,0))
j.push(new B.ao(-6,7+e))
j.push(new B.bE())
j=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
j.r=h.gq(0)
o=j.I()
j=d.gbL().a.snapshot()
s.drawPath((d.e=new B.cD(j)).a,o)
o.delete()
s.restore()
break
default:J.bD(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
a0=Math.sin(n+j)*3
j=B.a([],m)
d=new B.aO(t,A.ap,a3,a3,j)
j.push(new B.b4(9,0))
j.push(new B.cO(0,-6,-7,a0))
j.push(new B.ao(-12,-4+a0))
j.push(new B.ao(-12,4+a0))
j.push(new B.ao(-7,a0))
j.push(new B.cO(0,6,9,0))
j=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
f=B.aq(h,A.cE,0.6)
f.toString
j.sap(new B.a3(A.a4,A.a7,A.w,B.a([h,f],q),a3,a3).au(0,D.enz))
o=j.I()
j=d.gbL().a.snapshot()
s.drawPath((d.e=new B.cD(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=A.cD
else a1=v==="scare"?A.cz:A.bh
v=u?12:22
u=B.L()
u.b=A.ac
u.c=2.5
u.r=a1.j(0.8).gq(0)
a5.ae(a4,v,u)}},
ar(d){return!0}}
C.aa0.prototype={}
C.Sy.prototype={
S(){var w=B.a([],x.bi)
return new C.azX(w,A.cB,A.at,B.T(x.N,x.S),$,A.bw,0,B.a([],x.X),null,null)}}
C.azX.prototype={
gGV(){var w=this.r,v=18+A.k.U(w*0.85)
return A.o.E(A.k.U(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gaad(){return 54-8*(this.r/100)},
Z(){this.a0()
this.kM()
C.yC("chain_burst").by(new C.dz5(this),x.P)},
aUw(){return C.vh("chain_burst",B.E(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
awE(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
A.d.a7(k)
l.z=l.y=!1
w=l.as=0
l.at=null
v=18+A.k.U(l.r*0.85)
for(u=l.e;w<v;++w){t=u.af()*3.141592653589793*2
s=u.af()
r=l.f
q=u.af()
p=l.f
o=Math.cos(t)
n=Math.sin(t)
m=(30+l.r*0.45)*(0.6+u.af()*0.8)
k.push(new C.aa0(new B.u(20+s*(r.a-40),20+q*(p.b-40)),new B.u(o*m,n*m),new H.mv(1,u.af()*360,0.6,1).iu()))}},
Xs(d){var w,v=this
if(d==null)return 0
w=(v.fF$-d)/1000
if(w<0.4)return v.gaad()*A.dS.av(0,w/0.4)
if(w<1.1)return v.gaad()
if(w<1.5)return v.gaad()*(1-(w-1.1)/0.4)
return 0},
l4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.at)||!j.Q)return
w=j.d
if(w.length===0)j.awE()
for(v=w.length,u=0;u<v;++u){t=w[u]
if(t.d!=null)continue
s=t.a
r=t.b
q=r.a
p=r.b
o=s.a+q*d
s=s.b+p*d
t.a=new B.u(o,s)
if(o<8||o>j.f.a-8)r=t.b=new B.u(-q,p)
if(s<8||s>j.f.b-8)t.b=new B.u(r.a,-r.b)}if(j.y){n=B.a([],x.U)
v=j.at
if(v!=null)n.push(new B.A(v,j.Xs(j.ax)))
for(v=A.d.gah(w),s=new B.hK(v,new C.dz6());s.C();){r=v.gT(0)
n.push(new B.A(r.a,j.Xs(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,B.K)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fF$
C.dG(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
B.eH()
break}}}if(!(j.at!=null&&j.Xs(j.ax)>0||A.d.ba(w,new C.dz7(j)))&&j.fF$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gGV()){if(j.as>=j.gGV()*1.5)k=3
else k=j.as>=j.gGV()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.m(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
C.AG("bell",B.a([0,4,7,12],x.t),600,0.45)
j.aUw()}else C.dG(120,"",300,0,0.3,"saw")}}},
aUv(d){this.n(new C.dyW(this,d))
this.aUw()},
ab7(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ab7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.ch(null,null,!0,null,new C.dyZ(u),s,null,!0,!0,x.S),$async$ab7)
case 2:t=e
if(t!=null)u.aUv(t)
return B.h(null,v)}})
return B.i($async$ab7,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gGV(),t=w.x.h(0,""+w.r)
return C.jy(A.bU,A.fZ,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",B.ck(new C.dz2(w,t==null?0:t,u)),"CHAIN BURST",B.B(B.a([new C.ff(A.qo,"Levels",w.gc_1(),A.bU,v),new C.ff(A.jM,"New board",new C.dz3(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
arQ(d,e,f){var w=null
return B.v(B.a([B.d(d,w,w,w,w,w,w,D.aK1,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bRY(d,e){return this.arQ(d,e,A.c)}}
C.b7p.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.W()
w=B.L()
w.r=D.Di.gq(0)
d.aX(new B.a7(0,0,0+e.a,0+e.b),w)
v=new C.cFK(d)
w=l.c
if(w!=null)v.$3(w,l.r.$1(l.d),A.c)
for(w=l.b,u=w.length,t=d.a,s=l.r,r=0;r<w.length;w.length===u||(0,B.K)(w),++r){q=w[r]
p=q.d
o=q.a
n=q.c
if(p!=null)v.$3(o,s.$1(p),n)
else{$.W()
p=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=n.j(0.25).gq(0)
p.z=G.mc
m=p.I()
t.drawCircle(o.a,o.b,12,m)
m.delete()
o=q.a
p=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=n.gq(0)
m=p.I()
t.drawCircle(o.a,o.b,8,m)
m.delete()}}},
ar(d){return!0}}
C.aIm.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.bti.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
w=this.fb$
w===$&&B.c()
w.p()
this.bps()}}
C.aJa.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.btz.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
w=this.fb$
w===$&&B.c()
w.p()
this.bqi()}}
C.aJq.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.btH.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
w=this.fb$
w===$&&B.c()
w.p()
this.bqy()}}
C.Ew.prototype={
gcFQ(){return this.a.aE(0,this.b).gcj()>4}}
C.aaP.prototype={}
C.TU.prototype={
S(){var w=B.a([],x.aX),v=B.a([],x.ea)
return new C.bgI(new B.co(null,x.A),w,v,A.cB,A.at,$,A.bw,0,B.a([],x.X),null,null)}}
C.bgI.prototype={
aLG(d){return new H.mv(1,A.o.F(d*29,360),0.6,1).iu()},
Ya(d){var w,v=D.B_.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.E(A.k.bt(d.a/s*t),0,t-1)
return v[A.o.F(w,u)]+12*A.o.ee(w,u)},
aOb(d){A.d.bm(this.e,new C.e2k(this,d))},
cjE(d,e,f){var w=f.aE(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aE(0,e).gcj()
return d.aE(0,e.ao(0,w.aN(0,A.k.E((d.aE(0,e).a*v+d.aE(0,e).b*u)/t,0,1)))).gcj()},
avc(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
A.d.a7(f)
w=g.w
v=w.a
u=w.b
switch(d){case"stairs":for(w=u*0.045,t=v*0.5,s=0;s<7;++s){r=(s&1)===0
q=v*(r?0.08:0.42)
p=u*(0.2+s*0.1)
o=new B.u(q,p)
n=q+t
m=p+w
l=new B.u(n,m)
k=g.Ya(new B.u((q+n)/2,(p+m)/2))
p=r?o:new B.u(n,p)
r=r?l:new B.u(q,m)
f.push(new C.Ew(p,r,k,new H.mv(1,A.o.F(k*29,360),0.6,1).iu()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new B.u(v*(0.1+i*0.16+r),w)
k=g.Ya(h)
f.push(new C.Ew(h,h,k,new H.mv(1,A.o.F(k*29,360),0.6,1).iu()))}break
default:for(w=g.r,s=0;s<28;++s){h=new B.u(v*(0.08+w.af()*0.84),u*(0.2+w.af()*0.65))
k=g.Ya(h)
f.push(new C.Ew(h,h,k,new H.mv(1,A.o.F(k*29,360),0.6,1).iu()))}}},
Z(){this.a0()
this.kM()},
c_3(d,e){var w,v=this.fF$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
C.l3(v,d.c+12,w,A.k.E(0.25+e/900,0.25,0.8))}},
l4(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.at))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new C.aaP(new B.u(a2.w.a*(0.2+v.af()*0.6),6),new B.u((v.af()-0.5)*40,0),new H.mv(1,v.af()*360,0.5,1).iu()))}if(u>3)a2.as=0
for(v=w.length,u=a2.e,t=a3/2,s=900*t,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
for(p=0;p<2;++p){o=q.b
n=o.a+0
o=o.b+s
m=q.b=new B.u(n,o)
l=q.a
k=l.a+n*t
l=l.b+o*t
j=q.a=new B.u(k,l)
if(k<7){m=q.a=new B.u(7,l)
o=q.b=new B.u(-n*0.6,o)
n=m}else{n=j
o=m}m=a2.w.a-7
if(n.a>m){q.a=new B.u(m,n.b)
q.b=new B.u(-o.a*0.6,o.b)}for(o=u.length,i=0;i<u.length;u.length===o||(0,B.K)(u),++i){h=u[i]
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
e=A.k.E(((k.a-m)*l+(k.b-j)*n)/(l*l+n*n),0,1)
g=new B.u(m+l*e,j+n*e)
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
q.a=new B.u(m+l*j,k+n*j)
j=q.b
a1=j.a*l+j.b*n
if(a1<0){a2.c_3(h,-a1)
m=q.b
k=a1*1.55
q.b=new B.u(m.a-l*k,m.b-n*k)}}}}}A.d.bm(w,new C.e2J(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.a([B.aF(p,p,p,p,B.V(q.ay?A.ny:M.qs,A.af,p,p,p,21),p,p,p,new C.e2y(q),p,p,p,p,"Sound",p),B.aF(p,p,p,p,D.m8,p,p,p,new C.e2z(q,d),p,p,p,p,"Share",p)],o),m=B.ck(new C.e2A(q)),l=B.a([],o)
for(w=0;w<3;++w){v=D.cJn[w]
l.push(new C.dw(v.b,q.x===v.a,new C.e2B(q,v),v.c,A.b6,p))}u=B.a([],o)
for(t=J.aU(D.B_.gec(D.B_));t.C();){s=t.gT(t)
u.push(new C.dw(s,q.y===s,new C.e2C(q,s),p,A.b6,p))}t=B.a([],o)
for(w=0;w<6;++w){r=D.at8[w]
t.push(new C.dw(r.b,q.z===r.a,new C.e2D(q,r),p,A.b6,p))}s=q.Q
return C.jy(A.b6,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",B.v(B.a([new C.eF(l,"TOOL",p),new C.eF(u,"SCALE",p),new C.eF(t,"SOUND",p),C.hp(A.b6,A.k.a9(s,1)+"/s","Marbles",4,0.3,new C.e2E(q),s),new C.eF(B.a([new C.ff(D.bsE,"Stairs",new C.e2F(q),A.b6,p),new C.ff(Af.Ln,"Pinball",new C.e2G(q),A.c,p),new C.ff(A.m1,"Random",new C.e2H(q),A.c,p),new C.ff(D.x_,"Clear",new C.e2I(q),A.cD,p)],o),p,p)],o),A.m,p,A.e,A.R,0,A.p))}}
C.beo.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.W()
w=B.L()
w.sap(D.bIr.au(0,new B.a7(0,0,a0,a1)))
a2.aX(new B.a7(0,0,a0,a1),w)
for(a0=e.b,a1=a0.length,w=a2.a,v=x.O,u=e.f,t=0;t<a0.length;a0.length===a1||(0,B.K)(a0),++t){s=a0[t]
r=A.k.E(1-(u-s.e)/280,0,1)
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
if(Math.sqrt(m*m+k*k)>4){q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.b=A.ac
q.d=A.bL
q.c=12+j
q.r=i.j(0.2+h).gq(0)
q.z=A.j7
g=q.I()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.b=A.ac
q.d=A.bL
q.c=6
q.r=B.aq(i,A.c,r*0.7).gq(0)
g=q.I()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()}else{p=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=i.j(0.25+h).gq(0)
p.z=A.j7
g=p.I()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
p=B.aq(i,A.x,0.4)
p.toString
j.sap(new B.bR(N.pN,0.5,A.w,d,0,B.a([A.c,i,p],v),d,d).au(0,B.bT(q,9)))
g=j.I()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=B.L()
u.c=5
u.d=A.bL
u.r=A.az.gq(0)
a2.bE(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,B.K)(a0),++t){f=a0[t]
u=f.a
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
p=f.c
q.r=p.j(0.3).gq(0)
q.z=A.qD
g=q.I()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.sap(new B.bR(N.pN,0.5,A.w,d,0,B.a([A.c,p],v),d,d).au(0,B.bT(f.a,7)))
g=q.I()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
ar(d){return!0}}
C.abj.prototype={}
C.TZ.prototype={
S(){var w=B.a([],x.gB)
return new C.aBk(new B.co(null,x.A),w,A.cB,A.at,$,A.bw,0,B.a([],x.X),null,null)}}
C.aBk.prototype={
gaUx(){var w=this.w
return new B.u(w.a/2,w.b/2)},
avo(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
awA(d){var w=D.B_.h(0,this.y),v=5-d,u=w.length
return w[A.o.F(v,u)]+12*A.o.ee(v,u)},
Z(){this.a0()
this.kM()},
aN0(){var w,v,u,t,s=this.e
A.d.a7(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new C.abj(w,A.k.F(t/v+u,1)))}},
l4(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.at))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fF$
if(p.Q){r=p.z
s=p.awA(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
C.l3(r,s+12,q,0.55)}}}},
c_4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aE(0,h.gaUx()),e=f.gcj()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.avo(v)-e)
if(u<w){g.a=v
w=u}}if(w>28)return
t=A.k.F((Math.atan2(f.b,f.a)+1.5707963267948966)/6.283185307179586+1,1)
s=h.e
s=B.a(s.slice(0),B.U(s))
r=s.length
q=d.a
p=d.b
o=0
for(;o<s.length;s.length===r||(0,B.K)(s),++o){n=s[o]
m=n.a
if(m!==g.a)continue
l=n.b*2*3.141592653589793-1.5707963267948966
k=h.w
j=Math.cos(l)
i=Math.sin(l)
m=h.avo(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new C.e6e(h,n).$0()
h.c.e3()
return}}h.n(new C.e6f(g,h,t))
if(h.Q)C.l3(h.z,h.awA(g.a)+12,700,0.5)
B.eH()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=B.a([B.aF(q,q,q,q,B.V(r.Q?A.ny:M.qs,A.af,q,q,q,21),q,q,q,new C.e6m(r),q,q,q,q,"Sound",q),B.aF(q,q,q,q,D.m8,q,q,q,new C.e6n(r,d),q,q,q,q,"Share",q)],p),n=B.ck(new C.e6o(r)),m=r.x
m=C.hp(A.bB,""+A.k.U(m),"Tempo",180,40,new C.e6p(r),m)
w=B.a([],p)
for(v=J.aU(D.B_.gec(D.B_));v.C();){u=v.gT(v)
w.push(new C.dw(u,r.y===u,new C.e6q(r,u),q,A.bB,q))}v=B.a([],p)
for(t=0;t<6;++t){s=D.at8[t]
v.push(new C.dw(s.b,r.z===s.a,new C.e6r(r,s),q,A.bB,q))}return C.jy(A.bB,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",B.v(B.a([m,new C.eF(w,"SCALE",q),new C.eF(v,"SOUND",q),new C.eF(B.a([new C.ff(A.dQ,"Demo",new C.e6s(r),A.bB,q),new C.ff(A.m1,"Random",new C.e6t(r),A.c,q),new C.ff(D.x_,"Clear",new C.e6u(r),A.cD,q)],p),q,q)],p),A.m,q,A.e,A.R,0,A.p))}}
C.bhO.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.W()
w=B.L()
w.r=D.TT.gq(0)
a5.aX(new B.a7(0,0,0+a6.a,0+a6.b),w)
w=a3.d
v=a3.e
u=v.$1(w-1)+14
t=a3.c
s=t.aE(0,new B.u(0,u))
r=B.L()
r.c=2
q=x.O
p=t.a
o=p-1
n=t.b
m=n-u
r.sap(new B.a3(A.b1,A.aX,A.w,B.a([A.c.j(0.05),A.c.j(0.5)],q),a4,a4).au(0,new B.a7(o,m,o+2,m+u)))
a5.bE(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new H.mv(1,A.k.F(s.$1(l)*23,360),0.55,1).iu()
o=v.$1(l)
m=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
m.b=A.ac
m.c=1.6
m.r=k.j(0.35).gq(0)
j=m.I()
r.drawCircle(p,n,o,j)
j.delete()
o=D.cZC[A.o.F(A.o.F(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new B.kN(new B.em(o,a4,a4,A.cS,a4,a4,a4,a4,a4,a4,new B.F(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a5,A.cg,new B.jM(1),a4,a4,a4,a4,A.cf,a4)
i.f_()
o=i.b.c
m=J.fzj(v.$1(l))
h=i.b.a.c
i.a4(a5,new B.u(p+-o/2,n+(m-h.gbh(h)-2)))}w=B.L()
w.sap(D.dW8.au(0,B.bT(t,16)))
a5.ae(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,B.K)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new H.mv(1,A.k.F(s.$1(a0)*23,360),0.55,1).iu()
a2=A.k.E(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fzj(v.$1(a0))
a0=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a0.b=A.ac
a0.c=3*a2
a0.r=k.j(a2).gq(0)
j=a0.I()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
d.r=k.j(0.35).gq(0)
d.z=A.j7
j=d.I()
r.drawCircle(h,a1,12,j)
j.delete()
d=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
d.sap(new B.bR(N.pN,0.5,A.w,a4,0,B.a([A.c,k],q),a4,a4).au(0,B.bT(new B.u(h,a1),8.5)))
j=d.I()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
ar(d){return!0}}
C.aJ8.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.btx.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
w=this.fb$
w===$&&B.c()
w.p()
this.bqg()}}
C.aJ9.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.bty.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
w=this.fb$
w===$&&B.c()
w.p()
this.bqh()}}
C.rD.prototype={}
C.b6i.prototype={}
C.TX.prototype={
S(){var w=x.S
return new C.aBi(B.a([],x.aq),B.T(w,w),B.aZ(w),D.esK)}}
C.aBi.prototype={
Z(){this.a0()
C.yC("molecule_maker").by(new C.e5J(this),x.P)},
agB(d){var w={}
w.a=0
this.f.bG(0,new C.e5v(w,d))
return w.a},
gaUD(){var w,v,u,t=B.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)t.push(w[u].a)
return C.hIF(t,this.f,D.a_q[this.d])},
c_l(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new B.eU()
w.dM(t*7+3)
t=v.y
v.n(new C.e5p(v,e,t.a,w,t.b))
C.vk("pop",u.length,90,0.35)},
atH(d){return this.n(new C.e5q(this))},
aUE(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c_r(d){this.n(new C.e5u(this,this.aUE(d)))},
cgf(){var w=this.r
if(w==null)return
this.n(new C.e5t(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a_q[k.d],h=k.gaUD()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.uY.h(0,w[u].a).a-k.agB(u)
w=i.c
w=w.gdH(w)
t=w.di(w,new C.e5D(),x.N).aF(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.bh:A.hm
r=x.p
s=B.v(B.a([new B.C(A.fL,C.eYa(w,s,h&&k.d<12?new C.ff(A.jl,"Next",new C.e5E(k),A.bh,j):j),j),B.D(B.ck(new C.e5F(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=B.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new C.dw(p+D.a_q[u].b,k.d===u,new C.e5G(k,u),j,A.hm,j))}q=B.a([],r)
for(p=D.uY.gdH(D.uY),p=p.gah(p);p.C();){o=p.gT(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.eC:m.b
q.push(new C.dw(n+" \xb7 "+m.a,!1,new C.e5H(k,o),j,l,j))}return C.jy(A.hm,A.fZ,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",B.v(B.a([new C.eF(w,"GOAL",j),new C.eF(q,"ADD",j),new C.eF(B.a([new C.dw("Remove selected atom",!1,k.gcge(),A.e7,A.cD,j),new C.dw("Clear all",!1,k.gc_m(k),A.jM,A.aK,j)],r),j,j)],r),A.m,j,A.e,A.R,0,A.p))}}
C.bf4.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.F(t*37,10)
r=A.o.F(t*53,10)
$.W()
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=A.hm.j(0.03).gq(0)
p=q.I()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bG(0,new C.dhL(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.uY.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=B.bT(j,26)
if(q===t){$.W()
h=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
h.r=A.aK.j(0.4).gq(0)
h.z=A.j7
p=h.I()
u.drawCircle(j.a,j.b,34,p)
p.delete()}j=m.b
$.W()
h=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
g=l.b
f=B.aq(g,A.c,0.5)
f.toString
e=B.aq(g,A.x,0.5)
e.toString
h.sap(new B.bR(A.I4,0.5,A.w,a3,0,B.a([f,g,e],r),F.arp,a3).au(0,i))
p=h.I()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?A.aF:A.c
d=new B.kN(new B.em(n,a3,a3,A.cS,a3,a3,a3,a3,a3,a3,new B.F(!0,j,a3,a3,a3,a3,19,A.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),A.a5,A.cg,new B.jM(1),a3,a3,a3,a3,A.cf,a3)
d.f_()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a4(a4,new B.u(n.a-h/2,n.b-j.gbh(j)/2))
n=k===0
a0=n?A.bm:A.aZ
j=m.b
h=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
h.r=a0.gq(0)
p=h.I()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":B.t(k)
a1=new B.kN(new B.em(n,a3,a3,A.cS,a3,a3,a3,a3,a3,a3,A.oy),A.a5,A.cg,new B.jM(1),a3,a3,a3,a3,A.cf,a3)
a1.f_()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a4(a4,new B.u(n.a+(20-h/2),n.b+(-20-j.gbh(j)/2)))}if(n===0){d=B.ib(a3,a3,a3,a3,D.eBd,A.a5,A.cg,a3,A.ek,A.cf)
d.f_()
d.a4(a4,new B.u((w-d.b.c)/2,v/2))}},
ar(d){return!0}}
C.SV.prototype={
S(){var w=x.s
return new C.bfY(B.a([],w),B.a([],w))}}
C.bfY.prototype={
Z(){this.a0()
this.at7()
C.yC("dna_lab").by(new C.dH_(this),x.P)},
gaZM(){var w,v,u,t,s=B.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a0p.h(0,w[u])
t.toString
s.push(t)}return A.d.fN(s)},
ga6P(){var w,v,u=B.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.am(this.gaZM(),w,v))}return u},
at7(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new B.eU()
k.dM(l.e*31+l.d*7+B.yP(new B.Q(Date.now(),0,!1)))
w=new C.dGP(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mm(w.$0(),3)
t=B.a([],u)
for(s=0;s<9;s=q){r=B.a([],u)
for(q=s+3,p=A.a.am(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a0p.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.fN(r))}if(!A.d.ba(t,new C.dGO()))break}l.f=v
A.d.a7(l.r)
l.w=""
l.z=B.a([],x.s)
if(l.d===2)l.aXC()},
aXC(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=B.a([],x.s)
return}w=C.fHR(s.ga6P()[r])
v=J.dE(D.B0.gec(D.B0),new C.dGQ(w)).dA(0)
u=new B.eU()
u.dM(r+s.e)
A.d.fA(v,u)
u=B.a([w],x.s)
A.d.v(u,B.df(v,0,B.dK(3,"count",x.S),B.U(v).c))
t=new B.eU()
t.dM(s.e*3+r)
A.d.fA(u,t)
s.z=u},
aUC(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.d4g.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a0p.h(0,w.f[v])
u.toString
break A}u=C.fHR(w.ga6P()[v])
break A}w.n(new C.dGN(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new C.dGY(),e=new C.dGT(),d=h.d===2?h.gaZM():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=B.a([B.d(a1,g,g,g,g,g,g,Q.mj,g,g,g),A.av],a0)
if(h.d===2){u=B.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.bU.j(0.18):A.K
q=new B.b1(10,10)
p=new B.ay(t.length===s?A.bU:A.bG,1,A.r,-1)
o=B.a([],a0)
for(n=h.ga6P()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(B.p(g,new B.cC(A.b0,A.e,A.R,A.m,g,A.p,g,0,o,g),A.h,g,g,new B.o(r,g,new B.c1(p,p,p,p),new B.bv(q,q,q,q),g,g,A.n),g,g,g,D.bf8,A.eh,g,g,g))}v.push(B.c9(A.bJ,u,A.bx,0,0))}else{u=B.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(B.c9(A.bJ,u,A.bx,0,0))}if(h.d!==2){u=B.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new B.a5(34,g,new B.cw(A.A,g,g,B.V(Ac.Lt,j<t.length?A.az:A.bG,g,g,g,14),g),g))
A.d.v(v,B.a([new B.C(A.JV,B.c9(A.bJ,u,A.bx,0,0),g)],a0))}v.push(A.ar)
v.push(B.d(w,g,g,g,g,g,g,Q.mj,g,g,g))
v.push(A.av)
if(h.d===2){u=B.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.bh.j(0.25):A.dv
q=new B.b1(12,12)
o=j<t.length
p=new B.ay(o?A.bh:A.b9,1,A.r,-1)
if(o){o=D.B0.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.c2
u.push(B.p(g,new B.w(o,g,new B.F(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.h,g,g,new B.o(r,g,new B.c1(p,p,p,p),new B.bv(q,q,q,q),g,g,A.n),g,g,g,g,A.em,g,g,g))}v.push(B.c9(A.bJ,u,A.bx,6,8))}else{u=B.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(B.c9(A.bJ,u,A.bx,0,0))}v.push(A.ay)
u=h.w
if(u.length!==0){t=h.r.length
v.push(C.eYa(u,t>=(h.d===2?3:9)?A.bh:A.bU,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(C.eYa(u,A.bU,g))}v.push(A.T)
v.push(B.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,E.Rd,g,g,g))
v=B.ci(B.v(v,A.F,g,A.e,A.j,0,A.p),A.q,g,A.z,g,A.bC,g,g,A.ak)
u=B.a([],a0)
for(j=0;j<3;++j)u.push(new C.dw(D.cOK[j],h.d===j,new C.dGU(h,j),g,A.bU,g))
u=B.a([new C.eF(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new B.bI(A.a4,g,g,new C.ff(A.jM,"New strand",new C.dGV(h),A.bh,g),g))
else if(r){a0=B.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,B.K)(t),++l){i=t[l]
q=D.B0.h(0,i)
q.toString
a0.push(new C.ff(D.Xs,q,new C.dGW(h,i),A.bU,g))}u.push(B.c9(A.bJ,a0,A.bx,8,8))}else{a0=B.a([],a0)
t=h.d===0?D.aql:D.cyY
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new B.b1(14,14)
a0.push(B.aH(g,B.p(A.A,new B.w(k,g,D.eBt,g,g,g,g,g,g,g,g,g),A.h,g,g,new B.o(e.$1(k),g,g,new B.bv(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new C.dGX(h,k),g,g,g,g,g,g,!1,A.ae))}u.push(B.B(a0,A.m,g,A.qC,A.j,0,g,g))}return C.jy(A.bU,A.fZ,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",B.v(u,A.m,g,A.e,A.R,0,A.p))}}
C.Ta.prototype={
S(){return new C.aAq(A.bw,B.a([80,30,6],x.n),B.a([],x.b),null,null)}}
C.aAq.prototype={
Z(){var w,v=this
v.a0()
w=v.qR(v.gc_n())
w.kp(0)
v.d!==$&&B.aQ()
v.d=w
C.yC("ecosystem").by(new C.dJP(v),x.P)},
p(){var w=this.d
w===$&&B.c()
w.p()
this.bpG()},
gaJ0(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c_o(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
m.e=d
if(l<=0)return
for(w=l*1.5/4,v=x.n,u=0;u<4;++u){t=m.f
s=m.x
r=m.y
q=m.z
p=t[0]
o=t[1]
n=t[2]
m.f=B.a([A.k.E(p+(s*(100-p)*0.05-0.0016*o*p)*w,0,100),A.k.E(o+(0.9*r*o*p/(p+40)-0.019*q*o*n-0.35*o)*w,0,400),A.k.E(n+(0.01*q*o*n-0.4*n)*w,0,200)],v)}w=m.w+=l
v=m.r
if(v.length===0||w-A.d.gaj(v)[3]>0.25){w=B.z(m.f,x.i)
w.push(m.w)
v.push(w)
if(v.length>160)A.d.cu(v,0)}if(m.gaJ0()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.F(A.k.bt(w),5)===0)C.vh("ecosystem",B.E(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.n(new C.dJC())},
a7Z(d){this.n(new C.dJB(this,d))
C.vk("pop",3,120,0.4)},
c_q(){return this.n(new C.dJD(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=B.v(B.a([new B.C(D.Vh,C.eYa(r,t.gaJ0()?A.bh:A.cD,s),s),B.D(new B.C(D.bfF,B.bu(B.m(18),B.b2(s,s,s,new C.bar(t.f,t.r,t.w,s),A.fa),A.ao),s),1),new B.C(A.fk,B.d("Alive together: "+A.k.U(t.Q)+" s     Best: "+A.k.U(t.as)+" s",s,s,s,s,s,s,D.eI9,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=C.hp(A.bh,A.k.a9(w,1)+"\xd7","Grass growth",2,0.2,new C.dJH(t),w)
v=t.y
v=C.hp(A.c3,A.k.a9(v,1)+"\xd7","Rabbit breeding",2,0.3,new C.dJI(t),v)
u=t.z
return C.jy(A.bh,A.fZ,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",B.v(B.a([w,v,C.hp(A.cP,A.k.a9(u,1)+"\xd7","Fox hunting",2,0.3,new C.dJJ(t),u),new C.eF(B.a([new C.dw("Drought",!1,new C.dJK(t),A.xm,A.aK,s),new C.dw("Disease",!1,new C.dJL(t),D.bsw,A.bB,s),new C.dw("+ Foxes",!1,new C.dJM(t),s,A.cP,s),new C.dw("+ Rabbits",!1,new C.dJN(t),s,A.c3,s),new C.dw("Reset",!1,t.gc_p(),A.jM,A.aY,s)],q),s,s)],q),A.m,s,A.e,A.R,0,A.p))}}
C.bar.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.W()
w=B.L()
w.sap(D.bGs.au(0,new B.a7(0,0,d,a0)))
a1.aX(new B.a7(0,0,d,a0),w)
w=h.b
a0=B.aq(A.u1,A.bm,A.k.E(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=B.L()
t.r=a0.gq(0)
a1.aX(new B.a7(0,v,d,v+u),t)
s=A.k.U(w[0]*0.9)
r=new B.eU()
r.dM(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.af()*e
o=f*(0.6+0.4*r.af())
t=Math.sin(a0+q)
n=r.af()
m=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
m.r=A.fx.gq(0)
m.c=1.6
l=m.I()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new C.cZe(h,a2,f,a1)
k.$5(Math.min(A.k.U(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.U(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new B.a7(10,a0,e,u)
t=B.L()
t.r=D.b48.gq(0)
a1.aX(new B.a7(0,f,d,f+g),t)
i=B.L()
i.r=A.dv.gq(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.I()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new C.cZg(h,j,a1)
g.$3(0,100,A.bm)
g.$3(1,120,A.c3)
g.$3(2,24,A.cP)
g=new C.cZf(a1,j)
g.$3("Grass "+A.k.U(w[0]),A.bm,16)
g.$3("Rabbits "+A.k.U(w[1]),A.c3,102)
g.$3("Foxes "+A.k.U(w[2]),A.cP,200)},
ar(d){return!0}}
C.aIz.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.aOT.prototype={
gu8(){return A.d.cG(this.a,0,new C.bCm())}}
C.Sq.prototype={
S(){var w=x.S
return new C.bfF(C.hFO(),B.bY(5,0,!1,w),B.aZ(w),A.bw,null,null)}}
C.bfF.prototype={
gv5(){var w,v,u,t=B.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cG(t,0,new C.dvg())},
Z(){var w,v=this
v.a0()
w=v.qR(new C.dvt(v))
w.kp(0)
v.x!==$&&B.aQ()
v.x=w
C.yC("balance_lab").by(new C.dvu(v),x.P)},
p(){var w=this.x
w===$&&B.c()
w.p()
this.bpk()},
cqj(d){var w,v=this
v.n(new C.dvh(v,d))
C.vk("click",v.f[d],60,0.4)
if(v.gv5()===v.d[v.e].gu8()&&v.r.K(0,v.e)){C.vk("zap",10,260,0.5)
w=v.r
w=B.z(w,B.a2(w).k("cl.E"))
C.vh("balance_lab",B.E(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new B.J(k,new C.dvm(),B.U(k).k("J<1,n>")).aF(0," + ")
k=B.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aF(k," + ")
if(o.gv5()===m[o.e].gu8())s="\u2696\ufe0f Balanced! "+m[o.e].gu8()+" = "+o.gv5()+". The torques are equal, so the seesaw stays level."
else s=o.gv5()>m[o.e].gu8()?"The right side is too strong ("+o.gv5()+" vs "+m[o.e].gu8()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].gu8()+" vs "+o.gv5()+"). Add weight to the right, or place it further from the middle."
k=o.gv5()===m[o.e].gu8()?A.bh:A.aK
k=C.bws(s,k,o.gv5()===m[o.e].gu8()&&o.e<m.length-1?new C.ff(A.jl,"Next",new C.dvn(o),A.bh,n):n)
w=B.D(B.ck(new C.dvo(o,l)),1)
u=j.length===0?"0":j
u=B.D(B.d("Left torque\n"+u+" = "+m[o.e].gu8(),n,n,n,n,n,n,D.aL9,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=B.v(B.a([new B.C(D.Vh,k,n),w,new B.C(D.acL,B.B(B.a([u,B.D(B.d("Right torque\n"+r+" = "+o.gv5(),n,n,n,n,n,n,D.aL9,A.dM,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=B.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new C.dw(w+p,o.e===v,new C.dvp(o,v),n,A.aK,n))}return C.jy(A.aK,A.fZ,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",B.v(B.a([new C.eF(u,"LEVEL",n),new C.eF(B.a([new C.dw("Clear right side",!1,new C.dvq(o),A.jM,A.cD,n)],q),n,n)],q),A.m,n,A.e,A.R,0,A.p))}}
C.b6u.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new B.aO($.W().r,A.ap,null,null,B.a([],x.v))
i.D(new B.b4(h,f))
w=f+70
i.D(new B.ao(h-30,w))
i.D(new B.ao(h+30,w))
i.D(new B.bE())
v=B.L()
v.r=A.aj.gq(0)
d.aM(i,v)
v=h-120
i=B.L()
i.r=A.aI.gq(0)
d.aX(new B.a7(v,w,v+240,w+8),i)
i=d.a
J.bD(i.save())
i.translate(h,f)
d.iU(0,j.b)
u=g*5.8
t=B.bC(new B.a7(-u,-9,u,9),A.hJ)
w=B.L()
w.sap(D.bJ9.au(0,new B.a7(t.a,t.b,t.c,t.d)))
d.aJ(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.W()
v=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
v.r=A.hQ.gq(0)
v.c=1.5
r=v.I()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
C.f9H(d,""+Math.abs(s),new B.u(w,22),A.c2,10)}q=new C.cyh(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,B.K)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,A.aY)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],A.bU)
if(w[s]===0){l=B.bC(B.cJ(new B.u(m,-22),22,v),A.hJ)
$.W()
k=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
k.b=A.ac
k.c=1.4
k.r=A.b9.gq(0)
r=k.I()
i.drawRRect(B.eZ(l),r)
r.delete()
C.f9H(d,"+",new B.u(m,-22),A.c2,14)}}i.restore()
$.W()
i=B.L()
i.r=(j.e?A.bh:A.aJ).gq(0)
d.ae(new B.u(h,f),7,i)},
ar(d){return!0},
gjw(){return this.e}}
C.To.prototype={
S(){return new C.bg9(B.a([16,32,12,24],x.t),B.aZ(x.S),A.bw,null,null)}}
C.bg9.prototype={
gZB(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gabg(){var w=this.gZB(),v=this.r,u=D.asR[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&B.d7(this.d,x.S).a<4)
else w=!1
return w},
Z(){var w,v=this
v.a0()
w=v.qR(new C.dNQ(v))
w.kp(0)
v.x!==$&&B.aQ()
v.x=w
C.yC("gear_lab").by(new C.dNR(v),x.P)},
p(){var w=this.x
w===$&&B.c()
w.p()
this.bpO()},
c_s(d,e){var w,v=this
v.n(new C.dNG(v,d,e))
if(v.gabg()&&v.w.K(0,v.r)){C.vk("zap",8,240,0.45)
w=v.w
w=B.z(w,B.a2(w).k("cl.E"))
C.vh("gear_lab",B.E(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.gZB(),n=r.gZB(),m=D.asR[r.r].a
m=r.gabg()?"\u2705 Done! Ratio "+A.k.a9(r.gZB(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gabg()?A.bh:A.cP
v=r.d
u=x.p
n=B.v(B.a([new B.C(D.Vh,C.bws(m,w,r.gabg()&&r.r<7?new C.ff(A.jl,"Next",new C.dNK(r),A.bh,q):q),q),B.D(B.b2(q,q,q,new C.bbU(v,r.f,q),A.fa),1),new B.C(D.acL,B.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.a9(r.gZB(),2)+"   \xb7   Output "+A.k.a9(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.a9(1/n,2),q,q,q,q,q,q,P.a47,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=B.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new C.dw(m+s,r.r===t,new C.dNL(r,t),q,A.cP,q))}p=r.e
u=B.a([new C.eF(o,"GOAL",q),C.hp(A.aY,""+A.k.U(p)+" rpm","Input speed",120,10,new C.dNM(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new C.at3("Gear "+s+" teeth",p,new C.dNN(r,t),8,40,D.cXk[t],""+p,q))}return C.jy(A.cP,A.fZ,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",B.v(u,A.m,q,A.e,A.R,0,A.p))}}
C.bbU.prototype={
bK1(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.W(),j=B.a([],x.v),i=new B.aO(k.r,A.ap,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.dXi,D.e0O,D.efs,D.e7q],s=v===0,r=0;r<4;++r){q=t[r]
p=q.a
o=u+p*h
n=e+q.b
m=k+Math.cos(o)*n
l=w+Math.sin(o)*n
if(s&&p===0){p=new B.b4(m,l)
j.push(p)
m=i.f
if(m!=null)p.bx(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}else{p=new B.ao(m,l)
j.push(p)
m=i.f
if(m!=null)p.bx(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}}}i.D(new B.bE())
return i},
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.a([],x.n)
for(w=this.b,v=0;v<4;++v)g.push(w[v]*2.2)
u=g[0]
t=u+g[1]+6
s=g[2]
r=g[3]
q=t+s+r+6
p=-u-6
o=q+r+6
n=A.d.fv(g,A.pS)
m=-n-6
l=n+6
r=e.a
u=e.b
k=Math.min(r/(o-p),u/(l-m))*0.96
s=d.a
J.bD(s.save())
s.translate(r/2-(p+o)/2*k,u/2-(m+l)/2*k)
d.bV(0,k)
j=this.c
u=w[0]
r=w[1]
i=-j*u/r+3.141592653589793/r
r=w[2]
u=w[3]
h=new C.d5c(this,d)
h.$6$back(new B.u(t,0),g[2],r,i,A.dl,!0)
h.$5(new B.u(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.dk)
h.$5(new B.u(0,0),g[0],w[0],j,A.mt)
h.$5(new B.u(t,0),g[1],w[1],i,A.fU)
s.restore()
s=new C.d5d(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aY)
s.$3("2+3 \xb7 shared axle",t,A.cP)
s.$3("4 \xb7 output",q,A.bh)},
ar(d){return!0}}
C.Sz.prototype={
S(){var w=$.av()
return new C.bfS(new B.ap(new B.bc("Meet me at noon",A.b2,A.aM),w),new B.ap(new B.bc("LEMON",A.b2,A.aM),w),B.aZ(x.S))}}
C.bfS.prototype={
Z(){this.a0()
this.aTy()
C.yC("cipher_lab").by(new C.dzs(this),x.P)},
p(){var w=this.d,v=$.av()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
aTy(){this.y=1+A.cB.aB(25)
this.z=0},
ga7g(){var w=this
return C.a_M(C.a_M(D.Fu[w.x],w.y),-w.z)===D.Fu[w.x]},
gauD(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=C.a_M(u,v.w)
break A}if(1===t){w=new B.J(B.a(C.a_M(u,0).split(""),x.s),new C.dza(),x.dv).fN(0)
break A}w=C.hSf(u,v.e.a.a)
break A}return w},
aP3(d){var w,v,u,t,s,r=null,q=B.bY(26,0,!1,x.S)
for(w=new B.d0(d.toUpperCase()),v=x.e8,w=new B.bV(w,w.gJ(0),v.k("bV<bS.E>")),v=v.k("bS.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.fv(q,A.yV))
w=x.p
v=B.a([],w)
for(s=0;s<26;++s){u=new B.b1(2,2)
v.push(new B.bH(1,A.bo,B.v(B.a([B.p(r,r,A.h,r,r,new B.o(A.aY,r,r,new B.bv(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.Kf,r,r,r,r),new B.w(B.jx(65+s),r,D.eJR,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.ma,A.j,0,A.p),r))}return new B.a5(r,70,B.B(v,A.dH,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=B.a([B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.d,o,o,o,o,o,2,B.bn(o,new B.b3(4,B.m(14),A.X),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.lb,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dzj(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,D.eEn,!0,A.a5,o,A.am,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,B.a([A.T,B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.e,o,o,o,o,o,2,B.bn(o,new B.b3(4,B.m(14),A.X),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.lb,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dzk(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.iB,!0,A.a5,o,A.am,o,o,o,o)],v))}w.push(A.ay)
w.push(D.f7V)
w.push(A.av)
v=A.aY.j(0.12)
u=B.m(14)
t=B.H(A.aY.j(0.4),A.r,1)
w.push(B.p(o,B.yW(p.gauD().length===0?"\u2026":p.gauD(),D.eIU,o),A.h,o,o,new B.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bC,o,o,o))
w.push(A.ab)
w.push(C.bws(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aY,o))
w.push(A.ab)
w.push(D.eQM)
w.push(A.av)
w.push(p.aP3(p.gauD()))
w.push(A.av)
w.push(D.eT3)
s=B.cM(w,o,A.bC,o,o,A.ak,!1)}else{w=C.bws("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aK,o)
v=B.d(C.a_M(D.Fu[p.x],p.y),o,o,o,o,o,o,D.eJp,o,o,o)
u=(p.ga7g()?A.bh:A.aY).j(0.14)
t=B.m(14)
r=B.H((p.ga7g()?A.bh:A.aY).j(0.5),A.r,1)
t=B.a([w,A.ab,D.f20,v,A.T,D.eXR,B.p(o,B.d(C.a_M(C.a_M(D.Fu[p.x],p.y),-p.z),o,o,o,o,o,o,D.eKS,o,o,o),A.h,o,o,new B.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bC,o,o,o),A.ab,p.aP3(C.a_M(D.Fu[p.x],p.y)),A.P],x.p)
if(p.ga7g())t.push(C.bws("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.bh,new C.ff(A.jM,"Next",new C.dzl(p),A.bh,o)))
s=B.cM(t,o,A.bC,o,o,A.ak,!1)}w=p.f
v=x.p
w=B.a([new C.eF(B.a([new C.dw("Make a secret",w===0,new C.dzm(p),A.j4,A.aY,o),new C.dw("Crack a code",w===1,new C.dzn(p),A.qp,A.aK,o)],v),o,o)],v)
if(p.f===0){u=B.a([],v)
for(q=0;q<3;++q)u.push(new C.dw(n[q],p.r===q,new C.dzo(p,q),o,A.aY,o))
v=B.a([new C.eF(u,o,o)],v)
if(p.r===0){u=p.w
v.push(C.hp(A.aY,""+u,"Shift",25,1,new C.dzp(p),u))}A.d.v(w,v)}else{v=p.z
w.push(C.hp(A.aK,""+v,"Shift back",25,0,new C.dzq(p),v))}return C.jy(A.aY,A.fZ,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",B.v(w,A.m,o,A.e,A.R,0,A.p))}}
C.aIe.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.aIH.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.fc.prototype={}
C.rQ.prototype={
an6(d,e,f,g){var w=this
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
C.a89.prototype={}
C.a9d.prototype={}
C.a2q.prototype={
b8g(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.he()?-1:1
v=t.af()*3.141592653589793*2
u=f*(0.3+t.af())
s.push(new C.a89(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.af()*0.45));++r}},
bXa(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bm(w,new C.bHW())},
ah1(d,e,f,g){var w="p"+this.c++,v=new C.rQ(w,e,f,g)
v.an6(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bm(this.b,new C.bI6(e))},
a7(d){A.d.a7(this.a)
A.d.a7(this.b)},
cxV(d,e,f,g,h){return A.d.ba(this.b,new C.bI1(e,f,g,h))},
ahL(d,e,f,g){var w
if(d===f||this.cxV(0,d,e,f,g))return null
w=new C.a9d(d,e,f,g)
this.b.push(w)
return w},
ax7(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
yL(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
akk(d){return this.Kd(d)&&!d.x&&d.CW>this.yL(d)},
b19(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Kd(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c_t(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.xS.h(0,v)
if(w!=null)return w.a
return 100},
a5j(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.bXa(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("a4<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.K)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.cy===0&&q.db===0){p=new B.a4(v,new C.bI7(a2),t).cG(0,0,new C.bI8(a2))
q.cx=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.T(x.N,u)
n=new C.bIa(o)
m=B.a([],x.t)
l=new C.bI9(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.K)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.K)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.T(u,u)
f=new C.bIc(g,l,n)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,B.K)(v),++s){q=v[s]
f.$2(q,0)
f.$2(q,1)}e=g.a
if(e===0)return
s=0
for(;;){if(!(s<t)){d=0
break}q=v[s]
u=q.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){d=f.$2(q,1)
break}++s}for(u=v.length,s=0;s<u;++s)v[s].ch=0
a2.b15(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.CW=0
continue}t=Math.max(0,-q.dy)
q.CW=t
a1=t/a2.yL(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.ch=t
if(t>0)a0=!0}if(a0)a2.b15(e,d,w,!0)
a2.bH6(a4)},
b15(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.T(x.N,b3),b5=new C.bHY(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bHX(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.K)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bI_(B.T(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.K)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.bY(b7,0,!1,b3)
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
if(h)B.b9(B.dF(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.bY(b7,0,!1,b3)
a0=B.bY(b7,0,!1,b3)
k.a7(0)
j.a7(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.K)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b19(t)*(1+t.ch))
a4=b2.ax7(t)*a3}else{a5=t.x
a3=1e-9
a4=0
if(!(a5&&a2!=="capacitor"))if(a2==="switch")a3=t.w?100:1e-9
else if(a2==="fuse")a3=20
else{a6=a2==="led"
if(a6||a2==="diode"){a2=v.h(0,t.a)
a7=a2===!0
if(a7)a3=a6?0.06666666666666667:1.25
if(a7)a4=a3*(a6?1.9:0.7)}else if(a2==="buck"||a2==="regulator"){a4=3.3333333333333335*t.cx
a3=3.3333333333333335}else if(a2==="capacitor"){a4=i*t.z
a3=a5?1e-9:i}else a3=1/b2.c_t(t)}}k.m(0,t,a3)
j.m(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bK0(e,a0,b8)
if(!c0)break
for(a1=w.length,a8=!1,u=0;u<w.length;w.length===a1||(0,B.K)(w),++u){t=w[u]
a2=t.b
a5=a2==="led"
if(!a5&&a2!=="diode")continue
a9=l[m.$2(t,0)]-l[m.$2(t,1)]
a2=t.a
a6=v.h(0,a2)
b0=a6===!0
if(b0)b1=a9>(a5?1.8:0.65)
else b1=a9>(a5?1.95:0.75)
if(b1!==b0){v.m(0,a2,b1)
a8=!0}}if(!a8)break;++f
c0=!0}for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.K)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
v=l[o]
q=l[n]
t.dx=v-q
h=t.b
if(h==="buck"||h==="regulator"){g=l[b8]
t.cy=v-g
t.db=q-g}v=k.h(0,t)
if(v==null)v=0
q=t.dx
g=j.h(0,t)
if(g==null)g=0
t.dy=v*q-g
if(h==="capacitor"&&!t.x)t.z=t.dx}return!0},
bK0(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.bY(d,0,!1,x.i)
u=B.a([],x.b)
for(t=a0.length,s=x.n,r=0;r<a0.length;a0.length===t||(0,B.K)(a0),++r){q=a0[r]
p=B.a([],s)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,B.K)(a0),++n){m=a0[n]
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
t[m]=t[m]-g*u[l][m]}}}f=B.bY(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bH6(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.K)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.dy
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.ax7(o)/a1.b19(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.CW>a1.yL(o)&&a1.x<=0&&o.CW<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.CW
m=m>0.4&&m>k*0.55&&!a1.bzt(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.b8g(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.rT(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dx
l=o.dy
j=Math.abs(m*l)
i=Math.abs(l)
if((n==="buck"||n==="regulator")&&!o.x){m=n==="regulator"
h=m?5:o.e
if(i<0.002)o.cx=A.k.E(o.cy-h,0,24)
else o.cx=A.k.E(o.cx+(o.db-h)*0.7,0,24)
l=o.cy
g=l>h+0.2&&Math.abs(o.db-h)<0.35?1:0
o.fr=g
o.ax=g>0?o.ax+a2:0
if(l>26)a1.rT(o,"The "+$.tx().h(0,n).b+" got "+A.k.a9(o.cy,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.rT(o,"More than 1.5 amps went through the "+$.tx().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cx*i>2.5)a1.rT(o,"The regulator had to turn "+A.k.a9(o.cx,1)+" V into heat while "+A.k.U(i*1000)+" mA flowed. That is "+A.k.a9(o.cx*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fr=m===!0?1:0
if(i>1.5)a1.rT(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.xS.h(0,n)
if(f!=null){m=f.d
e=o.dx
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.tx().h(0,n).b
l=f.b
l=l===A.k.jA(l)?""+A.k.U(l):B.t(l)
g=f.c
g=g===A.k.jA(g)?""+A.k.U(g):B.t(g)
a1.rT(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.a9(Math.abs(o.dx),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fr=m
o.ax=m>0?o.ax+a2:0
if(D.eqJ.t(0,n)){m=o.fr>0?A.k.E((Math.abs(o.dx)-1)/6,0.15,1.4):0
o.fr=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fr=o.x?0:A.k.E(j/0.9,0,1)
if(!o.x&&j>2.4)a1.rT(o,"The bulb got "+A.k.a9(Math.abs(o.dx),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fr=o.x?0:A.k.E((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.rT(o,"The LED had "+A.k.U(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fr=A.k.E(j/14,0,1)
break
case"motor":n=A.k.E(i/0.5,0,1.6)
o.fr=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fr=A.k.E(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.rT(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fr=o.x?0:A.k.E(i/1,0,1)
if(!o.x&&i>1)a1.rT(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.rT(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fr=A.k.E(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.rT(o,"The capacitor was charged to "+A.k.a9(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fr=o.f
break}}},
bzt(d){return A.d.ba(this.a,new C.bHV(d))},
rT(d,e){var w
d.x=!0
d.ay=e
this.b8g(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bcK(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a7(0)},
aD_(d){var w=d.b
return D.aHJ.t(0,w)||D.xS.an(0,w)||w==="buck"||w==="regulator"},
b9D(d){var w,v=!0
if(!this.Kd(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.xS.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
SR(d,e){var w=this.b
return new B.a4(w,new C.bIe(d,e),B.U(w).k("a4<1>")).gJ(0)},
Bs(d){var w,v
if(d.x)return!1
w=d.b
if(D.xS.an(0,w))return d.fr>0
v=d.fr
return v>(w==="led"?0.02:0.05)},
b7N(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.tx().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aD_(d)||i.Bs(d))return null
w=i.SR(d,0)
v=i.SR(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("a4<1>")
s=B.z(new B.a4(u,i.gcG7(),t),t.k("G.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.cy
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jA(r)?""+A.k.U(r):B.t(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.a9(d.cy,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.xS.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dx<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aD4("battery"),o=J.aU(t.a),t=new B.hK(o,t.b);t.C();){n=o.gT(o)
if(n.e===1.5&&n.as<=0.02&&i.SR(n,0)+i.SR(n,1)>0){if(n.dx<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aD4("switch"),o=J.aU(t.a),t=new B.hK(o,t.b);t.C();)if(!o.gT(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.tx().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.CW>i.yL(k))return"The "+$.tx().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.a9(k.CW,2)+" amps, but it can only give about "+A.k.a9(i.yL(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dx)<q.b&&Math.abs(d.dy)>0.0005){j=A.d.ba(u,new C.bI2(i,d))
h=q.b
h=h===A.k.jA(h)?""+A.k.U(h):B.t(h)
u=A.k.a9(Math.abs(d.dx),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.dy)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.a9(Math.abs(d.dx),1)+" V. Use a bigger battery."
if(Math.abs(d.dy)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.a9(Math.abs(d.dx),1)+" V). Try a bigger battery."},
aD4(d){var w=this.a
return new B.a4(w,new C.bI5(d),B.U(w).k("a4<1>"))},
aCE(d){return this.aD4(d).ba(0,new C.bI4(0.35))},
ajg(d,e){return A.d.ba(this.a,new C.bI3(e))}}
C.agi.prototype={
a4(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.W()
w=B.L()
w.r=D.aa3.gq(0)
c0.aX(new B.a7(0,0,b8,b9),w)
v=B.L()
v.r=A.c.j(0.06).gq(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.I()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,B.K)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-42:42
l=l.d
i=m.c
h=i.c
g=m.d===0?-42:42
b4.cv5(c0,new B.u(k*b6+j,l*b7),new B.u(h*b6+g,i.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){f=C.hdP(q.a,q.b,c1)
q=b4.e
q.toString
$.W()
p=B.L()
p.r=A.af.gq(0)
p.c=3
p.d=A.bL
c0.bE(f,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,B.K)(q),++n){e=q[n]
j=e.c*b6
i=e.d*b7
if(e.Q>0){h=Math.sin(r.d*30)
$.W()
g=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
g.r=D.a9h.j(A.k.E(e.Q*0.45,0,0.6)).gq(0)
g.z=A.B3
s=g.I()
w.drawCircle(j,i,46+14*h,s)
s.delete()}d=l.h(0,e.a)
if(d==null)d=1
J.bD(w.save())
w.translate(j,i)
h=A.k.E(A.n5.av(0,A.k.E(d,0,1)),0.01,1.4)
w.scale(h,h)
b4.c8Z(c0,e,e===o)
w.restore()
h=e.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!e.x&&e.CW>r.yL(e)){g=j+0
a0=i+-40
a1=Math.sin(r.d*10)
a2=$.W().r
a3=B.a([],k)
a4=new B.aO(a2,A.ap,b5,b5,a3)
a5=a0-13
a3.push(new B.b4(g,a5))
a6=g+13
a7=a0+10
a3.push(new B.ao(a6,a7))
a8=g-13
a3.push(new B.ao(a8,a7))
a3.push(new B.bE())
a3=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a3.r=A.aD.j(0.65+0.35*a1).gq(0)
s=a3.I()
a1=a4.gbL().a.snapshot()
w.drawPath((a4.e=new B.cD(a1)).a,s)
s.delete()
a1=B.a([],k)
a2=new B.aO(a2,A.ap,b5,b5,a1)
a1.push(new B.b4(g,a5))
a1.push(new B.ao(a6,a7))
a1.push(new B.ao(a8,a7))
a1.push(new B.bE())
a1=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a1.b=A.ac
a1.c=1.6
a1.r=A.c.gq(0)
s=a1.I()
a1=a2.gbL().a.snapshot()
w.drawPath((a2.e=new B.cD(a1)).a,s)
s.delete()
a9=new B.kN(new B.em("!",b5,b5,A.cS,b5,b5,b5,b5,b5,b5,new B.F(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a5,A.cg,new B.jM(1),b5,b5,b5,b5,A.cf,b5)
a9.f_()
a9.a4(c0,new B.u(g+-3,a0+-8))}if(!e.x)h=(D.aHJ.t(0,h)||D.xS.an(0,h)||h==="buck"||h==="regulator")&&!r.Bs(e)&&r.SR(e,0)+r.SR(e,1)>0
else h=!1
if(h){j+=0
i+=-40
$.W()
h=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
h.r=A.aZ.gq(0)
s=h.I()
w.drawCircle(j,i,10,s)
s.delete()
a9=new B.kN(new B.em("!",b5,b5,A.cS,b5,b5,b5,b5,b5,b5,new B.F(!0,A.x,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a5,A.cg,new B.jM(1),b5,b5,b5,b5,A.cf,b5)
a9.f_()
a9.a4(c0,new B.u(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=e.c
i=b0===0
h=i?-42:42
h=j*b6+h
j=e.d*b7
$.W()
g=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
g.r=D.aa3.gq(0)
s=g.I()
w.drawCircle(h,j,7,s)
s.delete()
g=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
g.b=A.ac
g.c=2.4
g.r=(i&&r.b9D(e)?A.cD:A.af).gq(0)
s=g.I()
w.drawCircle(h,j,6,s)
s.delete()
if(i&&r.b9D(e)){a9=new B.kN(new B.em("+",b5,b5,A.cS,b5,b5,b5,b5,b5,b5,new B.F(!0,A.cD,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a5,A.cg,new B.jM(1),b5,b5,b5,b5,A.cf,b5)
a9.f_()
a9.a4(c0,new B.u(h+-4,j+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,B.K)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.E(b1.r/0.8,0,1)
j=B.aq(D.b9t,D.bah,b2)
j.toString
i=b1.f
$.W()
h=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
h.r=j.gq(0)
h.c=2.4
h.d=A.bL
s=h.I()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=j.j(0.35*b2).gq(0)
i.z=A.ON
s=i.I()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.ba(q,new C.bDn())){b3=A.d.cG(q,0,new C.bDo())
$.W()
b7=B.L()
b7.r=D.b_X.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gq(0)
c0.aX(new B.a7(0,0,b8,b9),b7)
a9=B.ib(b5,b5,b5,b5,D.eB7,A.a5,A.cg,b5,A.ek,A.cf)
a9.xY(b6-24)
a9.a4(c0,new B.u(12,10))}},
pA(d,e,f,g,h){var w=null,v=B.ib(w,w,w,w,B.dl(w,w,w,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a5,A.cg,w,A.ek,A.cf)
v.f_()
v.a4(d,f)},
cv5(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new B.aO($.W().r,A.ap,null,null,B.a([],x.v))
d.D(new B.b4(a1.a,a1.b))
w=C.h6k(a1,a2,a3)
d.D(new B.cO(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.dy)
t=a3.c
s=Math.abs(t.dy)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.aq(A.aK,D.a9h,A.k.E(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.aq(A.aY,A.aK,A.k.E(r*1.2,0,1))
u.toString
o=u}else o=A.bv
u=B.L()
u.b=A.ac
u.c=a4?7:5
u.d=A.bL
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gq(0)
a0.aM(d,u)
u=B.L()
u.b=A.ac
u.c=2.4
u.d=A.bL
u.r=(a4?A.c:o).gq(0)
a0.aM(d,u)
if(q){n=new B.Kz(new B.tG(B.uY(d),!1,B.a([],x.Q))).gL(0)
m=40+A.k.E(r*120,0,160)
l=v.dy+t.dy>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.im()
i=t[u].b
i===$&&B.c()
if(!(j<i.a.length()/22))break
i=k.d
v.im()
h=t[u].b
h===$&&B.c()
h=A.k.F(j*22+i*m*l,h.a.length())
v.im()
i=t[u].b
i===$&&B.c()
i=i.a.length()
v.im()
g=t[u].b
g===$&&B.c()
f=A.k.F(h+i,g.a.length())
v.im()
i=t[u].FE(f).a
h=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
h.r=A.c.gq(0)
e=h.I()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
Nr(d,e,f,g){var w,v,u,t
$.W()
w=B.L()
v=g?A.aX:A.a4
u=g?A.b1:A.a7
t=B.aq(e,A.x,0.3)
t.toString
w.sap(new B.a3(v,u,A.w,B.a([e,f,e,t],x.O),A.Fw,null).au(0,d))
return w},
asZ(d,e,f){return this.Nr(d,e,f,!0)},
bWM(d,e){return this.Nr(d,A.bv,A.iX,e)},
aeG(d,e){var w,v,u
$.W()
w=B.L()
w.sap(D.aGp.au(0,B.bT(e,4.2)))
d.ae(e,4.2,w)
w=e.ao(0,D.dNm)
v=e.ao(0,D.dNv)
u=B.L()
u.r=A.ew.gq(0)
u.c=1.2
d.bE(w,v,u)},
c8Z(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=4294626325,b4=4286331629,b5=4287322667,b6=4293870660,b7=$.W(),b8=B.L()
b8.sap(D.bG8.au(0,D.eoe))
b8.c=3.4
b8.d=A.bL
w=B.L()
w.r=A.x.j(0.45).gq(0)
w.z=G.mc
b9.j3(D.eo7,w)
if(c1){w=B.bC(D.eod,A.kf)
v=B.L()
v.r=A.c.j(0.14).gq(0)
b9.aJ(w,v)}b9.bE(D.dOP,D.dOF,b8)
b9.bE(D.dMA,D.dMU,b8)
u=c0.x
switch(c0.b){case"battery":b1.bwu(b9,c0)
break
case"solar":t=B.bC(D.eoa,A.j9)
b9.aJ(t,b1.Nr(new B.a7(t.a,t.b,t.c,t.d),A.eC,A.c3,!1))
b7=B.L()
w=B.aq(D.b2M,A.d6,0.25+0.55*c0.f)
w.toString
v=B.aq(D.b9C,A.lS,0.3+0.4*c0.f)
v.toString
b7.sap(new B.a3(A.ax,A.aC,A.w,B.a([w,v],x.O),b2,b2).au(0,D.a2P))
b9.aX(D.a2P,b7)
s=B.L()
s.r=A.c.j(0.35).gq(0)
s.c=0.8
for(b7=b9.a,r=1;r<6;++r){w=-34+r*68/6
q=s.I()
b7.drawLine.apply(b7,[w,-18,w,18,q])
q.delete()}for(r=1;r<4;++r){w=-18+r*9
q=s.I()
b7.drawLine.apply(b7,[-34,w,34,w,q])
q.delete()}for(r=0;r<6;++r){w=-34+(r+0.5)*68/6
$.W()
v=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
v.r=A.cp.j(0.5).gq(0)
v.c=0.6
q=v.I()
b7.drawLine.apply(b7,[w,-18,w,18,q])
q.delete()}b7=new B.aO($.W().r,A.ap,b2,b2,B.a([],x.v))
b7.D(new B.b4(-34,18))
b7.D(new B.ao(-6+40*c0.f,-18))
b7.D(new B.ao(4+40*c0.f,-18))
b7.D(new B.ao(-24,18))
b7.D(new B.bE())
w=B.L()
w.r=A.c.j(0.1+0.22*c0.f).gq(0)
b9.aM(b7,w)
w=c0.f
b7=B.L()
b7.r=A.dU.j(0.9).gq(0)
b9.ae(D.dMG,4+4*w,b7)
break
case"crank":p=B.bC(D.enY,A.h1)
b9.aJ(p,b1.asZ(new B.a7(p.a,p.b,p.c,p.d),A.bt,A.bI))
b7=B.L()
b7.sap(D.aGq.au(0,B.bT(A.J,12)))
b9.ae(A.J,12,b7)
o=new B.u(Math.cos(c0.y)*22,Math.sin(c0.y)*22)
b7=B.L()
b7.r=A.cp.gq(0)
b7.c=5
b7.d=A.bL
b9.bE(A.J,o,b7)
b7=B.L()
b7.sap(D.dWr.au(0,B.bT(o,7)))
b9.ae(o,7,b7)
b1.aeG(b9,D.dOy)
b1.aeG(b9,D.dMt)
break
case"turbine":b7=b7.r
w=x.v
v=new B.aO(b7,A.ap,b2,b2,B.a([],w))
v.D(new B.b4(-3,24))
v.D(new B.ao(3,24))
v.D(new B.ao(1.5,0))
v.D(new B.ao(-1.5,0))
v.D(new B.bE())
n=B.L()
n.r=A.c3.gq(0)
b9.aM(v,n)
for(v=b9.a,m=0;m<3;++m){n=c0.y
J.bD(v.save())
v.rotate((n+m*2.094)*180/3.141592653589793,0,0)
n=B.a([],w)
l=new B.aO(b7,A.ap,b2,b2,n)
n.push(new B.b4(0,-2))
n.push(new B.cO(6,-14,2,-30))
n.push(new B.cO(-2,-14,0,-2))
n.push(new B.bE())
n=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
n.r=A.c.gq(0)
q=n.I()
n=l.gbL().a.snapshot()
v.drawPath((l.e=new B.cD(n)).a,q)
q.delete()
v.restore()}b7=B.L()
b7.sap(D.dW7.au(0,B.bT(A.J,4.5)))
b9.ae(A.J,4.5,b7)
break
case"switch":p=B.bC(D.eo3,A.tD)
b7=B.L()
b7.sap(D.ajA.au(0,new B.a7(p.a,p.b,p.c,p.d)))
b9.aJ(p,b7)
b1.aeG(b9,D.PF)
b1.aeG(b9,D.aBo)
k=c0.w?D.aBo:D.dMd
b7=B.L()
b7.r=A.aF.gq(0)
b7.c=6
b7.d=A.bL
b9.bE(D.PF,k,b7)
b7=B.L()
b7.r=(c0.w?A.bh:A.c3).gq(0)
b7.c=4
b7.d=A.bL
b9.bE(D.PF,k,b7)
b7=B.l4(D.PF,k,0.85)
b7.toString
w=B.L()
w.r=A.aD.gq(0)
b9.ae(b7,5,w)
break
case"fuse":j=B.bC(D.aGV,D.aGv)
b7=B.L()
b7.r=A.fe.j(0.25).gq(0)
b9.aJ(j,b7)
b7=B.L()
b7.b=A.ac
b7.c=1.4
b7.r=A.az.gq(0)
b9.aJ(j,b7)
if(!u){b7=B.L()
b7.c=1.6
b7.r=B.aq(A.c3,A.cP,c0.fr).gq(0)
b9.bE(D.aBE,D.aBn,b7)}else{b7=B.L()
b7.c=1.6
b7.r=A.c2.gq(0)
b9.bE(D.aBE,D.dOV,b7)
b7=B.L()
b7.c=1.6
b7.r=A.c2.gq(0)
b9.bE(D.dN4,D.aBn,b7)
b7=B.L()
b7.r=A.dy.gq(0)
b9.ae(A.J,6,b7)}for(b7=b9.a,i=0;i<2;++i){h=B.cJ(new B.u(D.a_N[i]*22,0),20,9)
w=B.bC(h,A.hd)
q=b1.Nr(h,A.dl,A.nV,!0).I()
b7.drawRRect(B.eZ(w),q)
q.delete()}break
case"pot":b7=B.L()
b7.sap(D.dWj.au(0,B.bT(A.J,21)))
b9.ae(A.J,21,b7)
for(b7=b9.a,m=0;m<=10;++m){g=2.356194490192345+m*3.141592653589793*1.5/10
w=Math.cos(g)
v=Math.sin(g)
n=Math.cos(g)
l=Math.sin(g)
f=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
f.r=A.az.gq(0)
f.c=1.2
q=f.I()
b7.drawLine.apply(b7,[w*18,v*18,n*22,l*22,q])
q.delete()}b7=B.L()
b7.sap(D.dW5.au(0,B.bT(A.J,13)))
b9.ae(A.J,13,b7)
e=2.356194490192345+c0.f*3.141592653589793*1.5
b7=Math.cos(e)
w=Math.sin(e)
v=Math.cos(e)
n=Math.sin(e)
l=B.L()
l.r=A.aK.gq(0)
l.c=3
l.d=A.bL
b9.bE(new B.u(b7*3,w*3),new B.u(v*12,n*12),l)
break
case"resistor":d=B.bC(D.aGV,D.aGv)
b7=B.L()
b7.sap(D.bJr.au(0,new B.a7(d.a,d.b,d.c,d.d)))
b9.aJ(d,b7)
b7=x.O
a0=B.E([47,B.a([B.aY(b3),B.aY(b4),A.x],b7),100,B.a([B.aY(b5),A.x,B.aY(b5)],b7),220,B.a([B.aY(b6),B.aY(b6),B.aY(b5)],b7),470,B.a([B.aY(b3),B.aY(b4),B.aY(b5)],b7),1000,B.a([B.aY(b5),A.x,B.aY(b6)],b7)],x.i,x.bF)
a1=a0.h(0,c0.r)
if(a1==null){b7=a0.h(0,100)
b7.toString
a1=b7}for(b7=b9.a,r=0;r<3;++r){w=-14+r*9
v=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
v.r=a1[r].gq(0)
q=v.I()
b7.drawRect(B.c8(new B.a7(w,-9,w+4.5,9)),q)
q.delete()}b7=B.L()
b7.r=A.aK.gq(0)
b9.aX(D.eom,b7)
b7=c0.r
b1.pA(b9,b7>=1000?"1k\u03a9":""+A.k.U(b7)+"\u03a9",D.dOd,A.af,10)
break
case"bulb":w=c0.fr
if(w>0){v=B.L()
v.r=A.dU.j(0.55*w).gq(0)
v.z=A.B3
b9.ae(D.v5,34,v)}p=B.cJ(D.dLI,12,18)
b9.aJ(B.bC(p,A.hd),b1.Nr(p,A.bv,A.e5,!0))
for(w=b9.a,r=0;r<3;++r){v=13+r*3.5
n=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
n.r=A.dr.gq(0)
n.c=1
q=n.I()
w.drawLine.apply(w,[-9,v,9,v,q])
q.delete()}w=B.L()
if(u)v=A.Tv
else{v=B.aq(A.e5,A.hO,c0.fr)
n=c0.fr
v=v.j(0.25+0.7*n)}if(u)n=A.Dc
else{n=B.aq(A.eC,A.dU,c0.fr)
n.toString}w.sap(new B.bR(A.r6,0.5,A.w,b2,0,B.a([v,n.j(0.18+0.5*c0.fr)],x.O),b2,b2).au(0,B.bT(A.qM,17)))
b9.ae(A.qM,17,w)
w=B.L()
w.b=A.ac
w.c=1.4
w.r=A.c.j(0.6).gq(0)
b9.ae(A.qM,17,w)
b7=b7.r
w=x.v
n=new B.aO(b7,A.ap,b2,b2,B.a([],w))
n.D(new B.b4(-9,-12))
n.D(new B.cO(-12,-4,-9,0))
v=B.L()
v.b=A.ac
v.c=2
v.r=A.c.j(0.45).gq(0)
b9.aM(n,v)
v=B.L()
v.r=A.cW.gq(0)
v.c=1.4
b9.bE(D.dOR,D.dOT,v)
v=B.L()
v.r=A.cW.gq(0)
v.c=1.4
b9.bE(D.dMY,D.dN0,v)
w=B.a([],w)
a2=new B.aO(b7,A.ap,b2,b2,w)
a2.D(new B.b4(-4,-2))
for(m=0;m<6;m=a3){a3=m+1
b7=(m&1)===0?-6:1
b7=new B.ao(-4+a3*8/6,-2+b7)
w.push(b7)
v=a2.f
if(v!=null)b7.bx(v)
b7=a2.e
if(b7!=null)b7.a.delete()
a2.e=null}$.W()
b7=B.L()
b7.b=A.ac
b7.c=1.8
if(u)w=A.aT
else{w=B.aq(A.eC,D.b3r,c0.fr)
w.toString}b7.r=w.gq(0)
b9.aM(a2,b7)
break
case"led":w=c0.fr
if(w>0){v=B.L()
v.r=A.aD.j(0.6*w).gq(0)
v.z=D.d6w
b9.ae(A.qM,30,v)}w=B.L()
w.r=A.e5.gq(0)
w.c=2.4
b9.bE(D.dOX,D.dOW,w)
w=B.L()
w.r=A.e5.gq(0)
w.c=2.4
b9.bE(D.dN6,D.dN5,w)
b7=b7.r
w=x.v
a4=new B.aO(b7,A.ap,b2,b2,B.a([],w))
a4.D(new B.b4(-12,8))
a4.D(new B.ao(-12,-6))
a4.D(new B.cO(0,-26,12,-6))
a4.D(new B.ao(12,8))
a4.D(new B.bE())
v=B.L()
if(u)n=A.Jt
else{n=B.aq(A.f_,D.a9S,c0.fr)
n.toString}if(u)l=A.k5
else{l=B.aq(A.k3,A.aD,c0.fr)
l.toString}v.sap(new B.a3(A.ax,A.aC,A.w,B.a([n,l],x.O),b2,b2).au(0,D.env))
b9.aM(a4,v)
v=B.L()
v.b=A.ac
v.c=1.2
v.r=A.j1.gq(0)
b9.aM(a4,v)
v=B.L()
v.r=A.f3.gq(0)
b9.aX(D.enB,v)
w=new B.aO(b7,A.ap,b2,b2,B.a([],w))
w.D(new B.b4(-7,-4))
w.D(new B.cO(-6,-12,0,-15))
b7=B.L()
b7.b=A.ac
b7.c=2
b7.r=A.c.j(0.5).gq(0)
b9.aM(w,b7)
break
case"motor":a5=new B.a7(-28,-14,20,14)
b9.aJ(B.bC(a5,A.hJ),b1.asZ(a5,A.aj,A.aJ))
b7=B.L()
b7.r=A.cJ.gq(0)
b9.aX(D.eni,b7)
b7=B.L()
b7.r=A.cp.gq(0)
b9.aX(D.enj,b7)
b7=b9.a
J.bD(b7.save())
b7.translate(31,0)
for(m=0;m<3;++m){J.bD(b7.save())
b7.rotate((c0.y+m*2.094)*180/3.141592653589793,0,0)
w=B.cJ(D.dM0,15,7)
v=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
v.r=A.cP.j(0.9).gq(0)
q=v.I()
b7.drawOval(B.c8(w),q)
q.delete()
b7.restore()}w=B.L()
w.r=A.aF.gq(0)
b9.ae(A.J,3,w)
b7.restore()
b1.pA(b9,"M",D.dOx,A.aF,14)
break
case"buzzer":a6=B.cJ(A.J,42,42)
b7=B.L()
b7.sap(D.dWn.au(0,a6))
b9.j3(a6,b7)
b7=B.L()
b7.r=A.x.gq(0)
b9.ae(A.J,6,b7)
b7=B.L()
b7.b=A.ac
b7.c=1.4
b7.r=A.b9.gq(0)
b9.ae(A.J,6,b7)
b1.pA(b9,"+",D.dOq,A.af,12)
for(b7=b9.a,w=b1.b,m=1;m<=3;++m){v=c0.fr
n=v>0?A.k.F(w.d*14,5):0
n=B.bT(A.J,24+m*5+n)
l=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
l.b=A.ac
l.c=2
l.r=A.bU.j(v*(1-m*0.22)).gq(0)
q=l.I()
b7.drawArc.apply(b7,[B.c8(n),-40.10704565915762,80.21409131831524,!1,q])
q.delete()}break
case"heater":p=B.bC(D.eo0,A.hJ)
w=B.L()
w.sap(D.bH7.au(0,new B.a7(p.a,p.b,p.c,p.d)))
b9.aJ(p,w)
w=B.a([],x.v)
a7=new B.aO(b7.r,A.ap,b2,b2,w)
a7.D(new B.b4(-24,0))
for(m=0;m<8;m=a3){b7=(m&1)===0?-10:10
a3=m+1
b7=new B.cO(-24+m*6+3,b7,-24+a3*6,0)
w.push(b7)
v=a7.f
if(v!=null)b7.bx(v)
b7=a7.e
if(b7!=null)b7.a.delete()
a7.e=null}b7=c0.fr
if(b7>0.1){$.W()
w=B.L()
w.b=A.ac
w.c=10
w.r=D.b41.j(0.5*b7).gq(0)
w.z=A.j7
b9.aM(a7,w)}$.W()
b7=B.L()
b7.b=A.ac
b7.c=3.2
b7.d=A.bL
b7.r=B.aq(A.lm,F.aaQ,c0.fr).gq(0)
b9.aM(a7,b7)
break
case"capacitor":a5=new B.a7(-16,-22,16,18)
b7=B.bC(a5,A.hJ)
w=B.L()
w.sap(D.bG0.au(0,a5))
b9.aJ(b7,w)
w=B.L()
w.r=A.c3.gq(0)
b9.aX(D.enH,w)
for(r=0;r<4;++r){a8=new B.kN(new B.em("\u2212",b2,b2,A.cS,b2,b2,b2,b2,b2,b2,new B.F(!0,A.aF,b2,b2,b2,b2,11,A.u,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2)),A.a5,A.cg,new B.jM(1),b2,b2,b2,b2,A.cf,b2)
a8.f_()
a8.a4(b9,new B.u(-14,-18+r*9))}a9=new B.a7(-16,-24,16,-17)
b9.aJ(B.bC(a9,A.hd),b1.bWM(a9,!1))
b7=38*c0.fr
w=18-b7
$.W()
v=B.L()
v.r=A.bh.j(0.5).gq(0)
b9.aX(new B.a7(-3,w,11,w+b7),v)
b1.pA(b9,"1F",D.v5,A.c,11)
break
case"radio":d=B.bC(D.a2P,A.h1)
b7=B.L()
b7.sap(D.bJH.au(0,new B.a7(d.a,d.b,d.c,d.d)))
b9.aJ(d,b7)
b7=B.L()
b7.b=A.ac
b7.c=1.4
b7.r=A.nV.j(0.6).gq(0)
b9.aJ(d,b7)
b7=B.bC(D.eo1,A.j9)
w=B.L()
w.r=A.dA.gq(0)
b9.aJ(b7,w)
for(b7=b9.a,r=0;r<6;++r){w=-10+r*4.4
v=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
v.r=A.lm.gq(0)
v.c=1.4
q=v.I()
b7.drawLine.apply(b7,[-27,w,-3,w,q])
q.delete()}w=B.L()
w.r=(c0.fr>0?A.h5:A.nc).gq(0)
b9.aX(D.enl,w)
if(c0.fr>0){w=8+A.k.F(b1.b.d*7,18)
v=B.L()
v.r=A.bO.gq(0)
v.c=1.6
b9.bE(new B.u(w,-13),new B.u(w,-3),v)}w=B.L()
w.sap(D.aGq.au(0,B.bT(D.a1R,6)))
b9.ae(D.a1R,6,w)
w=B.L()
w.r=A.nV.gq(0)
b9.ae(D.dMz,4,w)
w=B.L()
w.r=A.e5.gq(0)
w.c=1.8
b9.bE(D.dMx,D.aBs,w)
if(c0.fr>0)for(w=b1.b,m=1;m<=2;++m){v=B.bT(D.aBs,4+m*5+A.k.F(w.d*8,5))
n=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
n.b=A.ac
n.c=1.4
n.r=A.ng.j(0.7).gq(0)
q=n.I()
b7.drawArc.apply(b7,[B.c8(v),-137.50987083139756,91.67324722093173,!1,q])
q.delete()}break
case"tv":w=B.bC(D.eo9,A.hJ)
v=B.L()
v.r=K.q9.gq(0)
b9.aJ(w,v)
b0=B.bC(D.eo6,A.hd)
if(c0.fr>0&&!c0.x){b7=b9.a
J.bD(b7.save())
b7.clipRRect(B.eZ(b0),$.xQ(),!0)
b7.translate(-33,-21)
C.h5q(b9,D.eta,c0.at,b1.b.d,c0.ax,-1)
b7.restore()
b7=B.L()
b7.r=A.bh.gq(0)
b9.ae(D.dML,1.6,b7)}else{w=B.L()
w.r=D.Uf.gq(0)
b9.aJ(b0,w)
b7=new B.aO(b7.r,A.ap,b2,b2,B.a([],x.v))
b7.D(new B.b4(-33,-21))
b7.D(new B.ao(-10,-21))
b7.D(new B.ao(-33,0))
b7.D(new B.bE())
w=B.L()
w.r=A.c.j(0.05).gq(0)
b9.aM(b7,w)}b7=B.L()
b7.r=A.bt.gq(0)
b9.aX(D.enA,b7)
break}C.hQ_(b9,c0,b1.b.d,b1.gc_u())
if(u)b1.pA(b9,"\u2716",D.dOZ,A.aD,14)},
bwu(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new B.a7(-28,-13,28,13)
d.aJ(B.bC(w,A.tD),m.asZ(w,A.eC,A.ik))
v=new B.a7(-22,-13,22,13)
$.W()
u=B.L()
u.sap(D.ajt.au(0,v))
d.aX(v,u)
u=B.L()
u.r=A.e_.gq(0)
d.aX(D.enQ,u)
t=new B.a7(28,-5,34,5)
d.aJ(B.bC(t,A.h0),m.Nr(t,A.eC,A.iX,!0))
m.pA(d,"+",D.dMi,A.aK,11)
m.pA(d,"\u2212",D.dOz,A.af,11)
m.pA(d,B.t(l===A.k.jA(l)?A.k.U(l):l)+"V",D.dOj,A.aK,13)
if(l===1.5){u=B.L()
u.r=A.bG.gq(0)
d.aX(D.enP,u)
u=e.as
s=B.L()
s.r=B.aq(A.aD,A.bh,u).gq(0)
d.aX(new B.a7(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.pA(d,"FLAT",D.dOc,A.cD,9)}if(l>2){u=B.L()
u.r=A.b9.gq(0)
u.c=1
d.bE(D.dLP,D.dLH,u)
m.pA(d,l>3?"3 cells":"2 cells",D.dOi,A.az,8)}}else if(l<=9){r=new B.a7(-22,-17,22,17)
u=B.bC(r,A.tD)
$.W()
s=B.L()
s.sap(D.bJe.au(0,r))
d.aJ(u,s)
s=B.L()
s.r=A.dk.gq(0)
d.aX(D.enR,s)
for(u=d.a,q=0;q<2;++q){p=D.cVz[q]
s=p<0?5:3.6
o=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
o.sap(D.aGp.au(0,B.bT(new B.u(p,-18),5)))
n=o.I()
u.drawCircle(p,-18,s,n)
n.delete()}m.pA(d,"9V",D.dOe,A.c,16)}else{r=new B.a7(-34,-16,34,16)
u=B.bC(r,A.j9)
$.W()
s=B.L()
s.sap(D.ajt.au(0,r))
d.aJ(u,s)
s=B.L()
s.r=A.cz.gq(0)
d.aX(D.eo8,s)
for(u=d.a,q=0;q<2;++q){s=B.bC(B.cJ(new B.u(D.asv[q],-20),8,10),A.h0)
o=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
o.r=A.cp.gq(0)
n=o.I()
u.drawRRect(B.eZ(s),n)
n.delete()}m.pA(d,"+",D.dMp,A.aD,10)
m.pA(d,"12V",D.dOf,A.aF,15)}},
ar(d){return!0}}
C.md.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a7(k)
A.d.a7(d.b)
w=B.T(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.rQ(o,r,q,p)
n.an6(o,r,q,p)
k.push(n)
J.ig(s[4],new C.cfO(n))
w.m(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.K)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.ahL(m,u[1],l,u[3])}}}
C.agg.prototype={
S(){var w=x.N
return new C.agh(A.J,A.at,B.T(w,x.gl),B.aZ(w),$,A.bw,0,B.a([],x.X),null,null)}}
C.agh.prototype={
abj(d){var w=this,v=w.as
if(v!=null)v.aa(0)
w.n(new C.bD2(w,d))
w.as=B.cP(A.nr,new C.bD3(w))},
p(){var w=this.as
if(w!=null)w.aa(0)
this.bmx()},
YJ(d,e){return this.c70(d,e)},
aWB(d){return this.YJ(d,!1)},
c70(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$YJ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.qh:A.DJ
w=3
return B.b(C.hRG(s,r,d.ax<3.2,q),$async$YJ)
case 3:p=g
t.ay=!1
if(p!=null)d.at=p
case 1:return B.h(u,v)}})
return B.i($async$YJ,v)},
csL(d){var w=this,v=new B.Q(Date.now(),0,!1),u=w.at.ce(0,d.a,new C.bD4()),t=J.cA(u)
t.K(u,v)
t.bm(u,new C.bD5(v))
if(t.gJ(u)<3)return
t.a7(u)
if(w.a.c.Bs(d))if(d.b==="tv")w.aWB(d)
else w.YC(d)
else{t=w.a.c.b7N(d)
w.abj(t==null?"The "+$.tx().h(0,d.b).b+" is off. Give it power first.":t)}},
YC(d){return this.c6v(d)},
c6v(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$YC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.hRn(s,A.k.U(A.k.F(t.a.c.d*0.12,1)*100)),$async$YC)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$YC,v)},
Z(){this.a0()
this.b9N()
this.kM()},
b9N(){this.a.c.e=new C.bDk(this)},
l4(d){var w,v,u,t,s,r=this,q="tri",p="noise"
r.a.c.a5j(0,d)
for(w=r.a.c.a,v=w.length,u=r.ax,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
if(s.b!=="tv")continue
if(s.fr>0&&!s.x){r.a.toString
if(!u.t(0,s.a)&&!r.ay){u.K(0,s.a)
r.YJ(s,!0)}}else u.W(0,s.a)}if((r.z+=d)>0.16){r.z=0
for(w=r.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fr
if(u>0.2)C.dG(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fr
if(u>0.08)C.dG(60+u*55,"",130,0,0.12,q)
break
case"heater":if(s.fr>0.2)u=A.cB.af()<0.5
else u=!1
if(u)C.dG(2400,"",25,0,0.12*s.fr,p)
break
case"radio":if(s.fr>0){C.dG(900+A.cB.aB(800),"",90,0,0.1,p)
if(A.cB.af()<0.35)C.dG(300+A.cB.aB(6)*70,"",150,0,0.12,q)}break
case"tv":if(s.fr>0)u=A.cB.af()<0.4
else u=!1
if(u)C.dG(3000,"",40,0,0.07,p)
break
case"speaker":if(s.fr>0)C.dG(330+A.o.F(110*A.k.bt(r.a.c.d*3),4),"",140,0,0.14,q)
break
case"siren":if(s.fr>0)C.dG((A.k.bt(r.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fr
if(u>0.1)C.dG(90+u*40,"",140,0,0.04,p)
break
case"toycar":u=s.fr
if(u>0.1)C.dG(70+u*60,"",130,0,0.1,q)
break
case"kettle":if(s.fr>0)u=A.cB.af()<0.5
else u=!1
if(u)C.dG(1200,"",30,0,0.07,p)
break
case"turbine":u=s.f
if(u>0.1)C.dG(80,"",150,0,0.05*u,p)
break
case"crank":u=s.f
if(u>0.15)C.dG(110+u*140,"",70,0,0.08,"saw")
break}}}w=r.a.w
if(w!=null)w.$0()
r.n(new C.bDl())},
b2h(d){var w,v,u,t,s,r,q,p,o,n,m,l,k
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.K)(w),++q){p=w[q]
for(o=0;o<2;++o){n=this.y
m=p.c
l=o===0?-42:42
l=m*n.a+l-u
n=p.d*n.b-t
k=Math.sqrt(l*l+n*n)
if(k<r){s=new B.A(p,o)
r=k}}}return s},
aXh(d){var w,v,u,t,s,r,q,p
for(w=this.a.c.a,v=B.U(w).k("dy<1>"),w=new B.dy(w,v),w=new B.bV(w,w.gJ(0),v.k("bV<ai.E>")),u=d.a,v=v.k("ai.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
if(Math.abs(u-r*q.a)<36&&Math.abs(t-p*q.b)<26)return s}return null},
cv6(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.K)(w),++q){p=w[q]
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
h=C.h6k(new B.u(k,o),new B.u(i,n),p)
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
abh(){this.a.toString
this.n(new C.bCG())},
bjl(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cJc[v]
if(!A.d.ba(p.a.c.a,new C.bDm(u,w))){o=new B.u(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?E.Gy:o
s=s?E.Gy:o
q=t.ah1(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.m(0,q.a,0)
p.d=q
p.e=null
C.dG(1200,"",50,0,0.3,"tri")
p.abh()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<56;++v)w.push(D.NZ[v].a)
u=w.length
t=u>8
s=t?A.d.dt(w,0,A.o.ak(u+1,2)):w
r=t?A.d.fP(w,A.o.ak(w.length+1,2)):A.U
q=n.a.d
if(q!=null){w=B.a2(q).k("cu<1>")
w=B.z(new B.cu(q,w),w.k("G.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.K)(w),++v){p=w[v]
o=q.h(0,p)
q.m(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.aX6(s,!0))
n.a.toString
if(t)w.push(n.aX6(r,!0))
w.push(B.D(B.ck(new C.bDj(n,q,m)),1))
return B.v(w,A.m,null,A.e,A.j,0,A.p)},
aX6(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.K)(d),++v){u=d[v]
t=$.tx()
s=t.h(0,u).d.j(0.14)
r=new B.b1(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aH(p,B.p(p,B.v(B.a([new B.w(t.h(0,u).c,p,A.Hs,p,p,p,p,p,p,p,p,p),new B.w(t.h(0,u).b,p,A.mV,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.b7,A.j,0,A.p),A.h,p,p,new B.o(s,p,new B.c1(q,q,q,q),new B.bv(r,r,r,r),p,p,A.n),p,p,p,D.V8,p,p,p,62),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bCH(this,u),p,p,p,p,p,p,!1,A.ae))}return B.p(p,B.cM(m,p,A.fX,p,p,A.b0,!1),A.h,p,p,new B.o(D.Da,p,new B.c1(A.X,A.X,new B.ay(o,1,A.r,-1),A.X),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aUG(d){var w=null,v=B.m(18)
return B.p(w,d,A.h,w,w,new B.o(D.aZB,w,B.H(A.bG,A.r,1),v,w,w,A.n),w,w,w,w,D.bgL,w,w,w)},
c9_(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.tx().h(0,o),m=d.dx,l=d.dy,k=new C.bCZ(q,n),j=B.d(n.c,p,p,p,p,p,p,A.R8,p,p,p),i=n.b,h=n.d,g=x.p
i=B.B(B.a([j,A.aa,B.D(B.d(i,p,p,p,p,p,p,B.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aF(p,p,p,p,D.byr,p,p,p,new C.bCN(q,d),p,p,p,p,"Remove part",A.c8),B.aF(p,p,p,p,A.LJ,p,p,p,new C.bCO(q),p,p,p,p,p,A.c8)],g),A.m,p,A.e,A.j,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,D.Hu,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.eJg,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.a9(Math.abs(d.dx),2)+" volts  \xb7  "+A.k.a9(Math.abs(d.dy)*1000,0)+" milliamps  \xb7  "+A.k.a9(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.av,w,A.ar,B.d(m,p,p,p,p,p,p,B.l(p,p,d.x?A.cD:A.aK,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.b7N(d)
if(v!=null){l=(d.x?A.aD:A.aZ).j(0.14)
j=B.m(10)
i=B.H((d.x?A.aD:A.aZ).j(0.5),A.r,1)
m.push(new B.C(A.i4,B.p(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.ePx,p,p,p),A.h,p,p,new B.o(l,p,i,j,p,p,A.n),p,p,p,p,A.ck,p,p,p),p))}if(o==="tv"){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new C.dw("CH "+t,d.at===u,new C.bCP(q,d,u),p,h,p))}l=B.c9(A.bJ,l,A.bx,4,6)
l=B.a([A.ar,l,A.av,B.d(q.a.c.Bs(d)?"Showing: "+D.NJ[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.ht,p,p,p)],g)
if(q.a.c.Bs(d))l.push(new C.ff(A.Ey,"Open big screen",new C.bCR(q,d),h,p))
A.d.v(m,l)}if(o==="phone"||o==="tablet"){l=B.a([A.ar,B.d(q.a.c.Bs(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.ht,p,p,p)],g)
if(q.a.c.Bs(d))l.push(new C.ff(A.Lu,"Open "+(o==="tablet"?"tablet":"phone"),new C.bCS(q,d),h,p))
A.d.v(m,l)}q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.a9(d.cy,1)
if(q.a.c.Bs(d))i=d.db
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.ar,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.a9(i,1)+" V",p,p,p,p,p,p,D.eK4,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.cYt[s]
j=r===A.k.jA(r)?A.k.U(r):r
l.push(new C.dw(B.t(j)+" V out",d.e===r,new C.bCT(q,d,r),p,h,p))}i.push(new B.C(A.mC,B.c9(A.bJ,l,A.bx,0,6),p))}if(o==="regulator")i.push(D.f5m)
A.d.v(m,i)}if(q.a.c.Kd(d)&&!d.x){l=A.k.a9(d.CW,2)
j=A.k.a9(q.a.c.yL(d),2)
i=q.a.c
w=i.akk(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.l(p,p,i.akk(d)?A.cD:A.el,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.m(4)
w=A.k.E(d.CW/q.a.c.yL(d),0,1)
i=q.a.c.akk(d)?A.aD:A.bh
m.push(new B.C(A.i4,B.v(B.a([l,A.d4,B.bu(j,B.m4(A.bG,p,p,5,p,w,new B.mo(i,x.x)),A.ao)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.U(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.C(A.i4,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.eEk,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.cPm[s]
j=r===1.5?"1.5 V (rechargeable)":B.t(r)+" V"
l.push(new C.dw(j,d.e===r,new C.bCU(q,d,r),p,h,p))}m.push(B.c9(A.bJ,l,A.bx,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.cGS[s]
j=r>=1000?"1 k\u03a9":""+A.o.U(r)+" \u03a9"
l.push(new C.dw(j,d.r===r,new C.bCV(q,d,r),p,h,p))}m.push(B.c9(A.bJ,l,A.bx,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bCW(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bCX(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bCY(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bCQ(d)))
if(o==="crank")m.push(D.f1d)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.ht,p,p,p))
return q.aUG(new B.d1(D.aRC,B.ci(B.v(m,A.F,p,A.e,A.R,0,A.p),A.q,p,A.z,p,p,p,p,A.ak),p))}}
C.b7r.prototype={}
C.Tb.prototype={
S(){return new C.aAr(C.fNO(),new B.co(null,x.gJ),B.aZ(x.S))}}
C.aAr.prototype={
Z(){this.a0()
$.aT.c_$.push(this)
this.abi()},
abi(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fe8(),$async$abi)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.hQg(t.d,r)
if(s!=null){t.n(new C.dJX(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$abi,v)},
DK(){var w,v=this
if(!v.as)return
w=C.hH1(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bzY(w)},
iE(d){if(d!==A.fo)this.DK()},
p(){$.aT.hv(this)
this.DK()
this.a2()},
c_x(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("a4<1>")
t=new B.a4(v,new C.dK5(q),u).gJ(0)
s=new B.a4(v,new C.dK6(),u).gJ(0)
r=new B.a4(v,w.gcJz(),u).gJ(0)
if(t!==q.x||s!==q.y||r!==q.z)q.n(new C.dK7(q,t,s,r))}if(A.o.F(q.w,45)===0)q.DK()
if(A.o.F(q.w,10)===0){w=q.f
$.aft()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.aft()[q.f].c.$1(q.d)){w.K(0,q.f)
C.AG("bell",B.a([0,4,7,12],x.t),700,0.45)
q.n(new C.dK8())
q.DK()
w=q.c
w.toString
w=B.Vv(w)
if(w!=null)w.P(B.b0(p,p,p,p,p,A.q,p,B.d("\u2705 Challenge done: "+$.aft()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.lU,p,p,p,p,p,p,p,p,p,p))}},
adX(){var w=0,v=B.j(x.H),u=this,t
var $async$adX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ch(null,null,!0,null,new C.dJW(u),t,null,!0,!0,x.H),$async$adX)
case 2:return B.h(null,v)}})
return B.i($async$adX,v)},
aUF(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.m(12),t=B.H(f.j(0.45),A.r,1)
u=B.a([B.an(w,B.p(w,B.V(d,f,w,w,w,18),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.an(w,h,w,w,w,-1,-3,w))
return B.aH(w,B.hq(new B.a5(40,38,new B.am(A.W,w,A.a9,A.h,u,w),w),w,e,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.ae)},
c_v(d,e,f,g){return this.aUF(d,e,f,g,null)},
anL(d,e,f,g){var w=null,v=f.j(0.1),u=B.m(10),t=B.H(f.j(0.4),A.r,1)
return B.D(B.aH(w,B.p(w,B.B(B.a([B.V(d,f,w,w,w,15),A.eA,new B.dm(1,A.cl,B.d(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b7,A.j,0,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.ae),1)},
acf(){var w=0,v=B.j(x.H),u=this,t
var $async$acf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a9(t,!1).cp(B.eD(new C.dJS(u),!1,null,x.H)),$async$acf)
case 2:t=u.e.gbb()
if(t!=null)t.b9N()
if(u.c!=null)u.n(new C.dJT())
u.DK()
return B.h(null,v)}})
return B.i($async$acf,v)},
bzm(){var w,v,u,t,s=null,r=this.f
$.aft()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bm:A.aD
u=B.m(9)
t=B.H(D.Da,A.r,1.5)
return B.p(s,B.au(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.ys,s,s,s),s,s,s),A.h,s,D.aRJ,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eV,s,s,s)},
af2(){var w=0,v=B.j(x.H),u=this,t
var $async$af2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.c2(D.U9,null,new C.dK4(u),t,!0,!0,!0,A.BM,!1,!1,x.H),$async$af2)
case 2:return B.h(null,v)}})
return B.i($async$af2,v)},
c_y(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aH(r,B.p(r,D.bzF,A.h,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dK9(d),r,r,r,r,r,r,!1,A.ae),o=B.m(11)
o=B.p(r,D.aX7,A.h,r,r,new B.o(A.bj,r,B.H(A.aY.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.v(B.a([B.B(B.a([p,A.aa,o,A.aa,B.D(B.v(B.a([D.f3B,B.d(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.fj:A.fJ,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new C.auD(s.gc58(),r),A.qU,s.aUF(A.l0,"Challenges",A.aK,s.gclC(),s.bzm()),s.c_v(A.Lo,"How to play",A.aY,new C.dKa(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.ar,B.B(B.a([s.anL(A.pc,"Circuits",A.bB,s.gceL()),A.bp,s.anL(A.wY,"Repair",A.aK,new C.dKb(s)),A.bp,s.anL(D.x_,"Clear",A.cD,new C.dKc(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.R,0,A.p),A.h,r,r,new B.o(D.Da,r,new B.c1(A.X,A.X,new B.ay(q,1,A.r,-1),A.X),r,r,r,A.n),r,r,r,r,D.blx,r,r,r)},
B(d){var w=this,v=null
$.aZv="tech"
return B.ce(v,A.bX,B.bq(!0,B.v(B.a([w.c_y(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.D(C.fMJ(w.d,w.e,w.gc_w(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0),v,!1,!1,v,v)}}
C.auD.prototype={
S(){return new C.b5D(null,null)}}
C.b5D.prototype={
gatI(){var w,v=this,u=v.d
if(u===$){w=B.bi(null,A.S,null,1,null,v)
w.cD(0)
v.d!==$&&B.bJ()
v.d=w
u=w}return u},
p(){this.gatI().p()
this.bnN()},
B(d){var w=null,v=this.a.c
return B.aH(w,B.hq(new B.a5(42,42,B.c3(this.gatI(),new C.cvP(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.ae)}}
C.b5C.prototype={
a4(d,e){var w,v,u,t=null,s=e.e9(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.W()
w=B.L()
w.r=A.b3.j(0.25+0.15*o).gq(0)
w.z=G.mc
d.ae(s,r+2+o*2,w)
w=B.L()
w.sap(D.dWi.au(0,B.bT(s,r)))
d.ae(s,r,w)
v=B.L()
v.b=A.ac
v.c=2.2
v.sap(new B.fN(A.A,0,6.283185307179586,A.w,D.cyX,t,new B.m2(p)).au(0,B.bT(s,r)))
d.ae(s,r,v)
p=new C.cvO(d)
p.$3(s.ao(0,A.qM),8+o*1.5,1)
q*=4
p.$3(s.ao(0,D.dNf),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ao(0,D.dP2),2.6,0.5+0.5*Math.cos(q))
u=B.ib(t,t,t,t,D.eBc,A.a5,A.cg,t,A.ek,A.cf)
u.f_()
u.a4(d,s.ao(0,new B.u(-u.b.c/2,5)))},
ar(d){return d.b!==this.b}}
C.auW.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.auX.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
w=this.fb$
w===$&&B.c()
w.p()
this.bmw()}}
C.aGL.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.btl.prototype={}
C.is.prototype={}
C.Be.prototype={}
C.qG.prototype={}
C.Bv.prototype={}
C.U0.prototype={
S(){return new C.bgP(null,null)}}
C.bgP.prototype={
gaoy(){var w,v=this,u=v.d
if(u===$){w=B.bi(null,A.nq,null,1,null,v)
w.cm(0)
v.d!==$&&B.bJ()
v.d=w
u=w}return u},
p(){this.gaoy().p()
this.bqk()},
gaxJ(){var w=this.gaoy().y
w=w==null?null:A.o.ak(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=B.m(34),u=B.H(A.aI,A.r,5),t=B.a([new B.ab(0,A.G,A.cC.j(0.25),A.J,36)],x.V)
return B.ce(w,O.Ui,B.bq(!0,new B.am(A.W,w,A.a9,A.q,B.a([B.au(new B.fD(0.4864864864864865,B.p(w,B.bu(B.m(28),B.c3(this.gaoy(),new C.e7f(this),w),A.ao),A.h,w,w,new B.o(w,w,u,v,t,w,A.n),w,w,w,A.bS,w,w,w,w),w),w,w,w),B.an(w,B.aF(w,w,w,w,A.m7,w,w,w,new C.e7g(d),w,w,w,B.nb(w,A.aT,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w)],x.p),w),!0,!1,A.ah,!0,!0),w,!1,!1,w,w)},
aUH(){var w=null,v=new B.Q(Date.now(),0,!1),u=A.o.E(this.a.c+A.k.bt(this.gaxJ()*0.4),0,100)
return new B.C(D.bkU,B.B(B.a([B.d(A.a.aS(A.o.u(B.dd(v)),2,"0")+":"+A.a.aS(A.o.u(B.fM(v)),2,"0"),w,w,w,w,w,w,A.vm,w,w,w),A.b8,D.f9F,B.d(""+u+"%",w,w,w,w,w,w,D.eMX,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
bRO(){var w,v,u,t,s,r,q=this,p=null,o=q.aUH(),n=B.m(20),m=B.H(A.b9,A.r,1)
n=B.aH(p,B.p(p,B.bu(B.m(19),B.b2(p,p,p,new C.aE5(0,q.gaxJ(),p),A.fa),A.ao),A.h,p,p,new B.o(p,p,m,n,p,p,A.n),p,140,p,A.is,p,p,p,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.e7d(q),p,p,p,p,p,p,!1,A.ae)
m=x.p
w=B.a([],m)
for(v=0;v<14;++v){u=D.tb[v].d.j(0.25)
t=new B.b1(16,16)
s=new B.ay(D.tb[v].d.j(0.7),1,A.r,-1)
r=D.tb[v]
w.push(B.aH(p,B.v(B.a([B.p(p,new B.cw(A.A,p,p,new B.w(r.b,p,A.vi,p,p,p,p,p,p,p,p,p),p),A.h,p,p,new B.o(u,p,new B.c1(s,s,s,s),new B.bv(t,t,t,t),p,p,A.n),p,52,p,p,p,p,p,52),A.av,new B.w(r.a,p,D.eKV,p,p,p,p,A.a2,p,1,p,p)],m),A.m,p,A.e,A.j,0,A.p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.e7e(q,v),p,p,p,p,p,p,!1,A.ae))}return B.p(p,B.v(B.a([o,A.av,D.eRP,A.T,n,A.ab,B.D(B.lK(0.86,w,4,8,12,A.K1,p,!1),1)],m),A.m,p,A.e,A.j,0,A.p),A.h,p,p,D.aSP,p,p,p,p,p,p,p,p)},
bv4(d){var w=null
return B.p(w,B.v(B.a([B.p(w,this.aUH(),A.h,A.x,w,w,w,w,w,w,w,w,w,w),B.D(B.b2(w,w,w,new C.aE5(d,this.gaxJ(),w),A.fa),1),B.aH(w,B.p(w,B.au(B.p(w,w,A.h,w,w,new B.o(A.af,w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,120),w,w,w),A.h,A.x,w,w,w,46,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e7a(this),w,w,w,w,w,w,!1,A.ae)],x.p),A.m,w,A.e,A.j,0,A.p),A.h,A.x,w,w,w,w,w,w,w,w,w,w)}}
C.aE5.prototype={
a4(d,e){return C.h5p(d,e,this.b,this.c)},
ar(d){return!0}}
C.aJc.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.wV.prototype={}
C.Uu.prototype={
S(){return new C.aBH(null,null)}}
C.aBH.prototype={
gabk(){var w,v=this,u=v.d
if(u===$){w=B.bi(null,A.nq,null,1,null,v)
w.cm(0)
v.d!==$&&B.bJ()
v.d=w
u=w}return u},
gCb(){var w=this.e
return w===$?this.e=this.a.c:w},
Z(){var w=this
w.a0()
w.w=B.cP(w.a.e,w.gaUI())
w.aRa()
C.dG(520,"",80,0,0.25,"tri")},
aRa(){var w=this.z
if(w!=null)w.aa(0)
this.z=B.cP(A.k6,new C.eqY(this))},
c_z(){var w=this.c
if(w!=null&&B.a9(w,!1).oP()){w=this.c
w.toString
B.a9(w,!1).M(this.gCb())}},
agd(){var w=this,v=w.w
if(v!=null)v.aa(0)
w.w=null
w.y=!0
w.aRa()},
atJ(d){this.n(new C.eqW(this,d))
C.dG(900,"",40,0,0.3,"noise")},
aWr(d){this.n(new C.eqZ(this,d))
C.dG(700,"",60,0,0.3,"tri")},
p(){var w=this,v=w.w
if(v!=null)v.aa(0)
v=w.z
if(v!=null)v.aa(0)
w.gabk().p()
w.bqC()},
B(d){var w,v,u,t,s=this,r=null,q=B.m(10),p=B.H(A.cJ,A.r,6),o=B.a([new B.ab(0,A.G,A.aY.j(0.25),A.J,40)],x.V),n=B.m(4),m=x.p,l=B.a([B.c3(s.gabk(),new C.er6(s),r)],m)
if(s.r)l.push(s.bvS())
q=B.au(new B.fD(1.7777777777777777,B.p(r,B.bu(n,new B.am(A.W,r,A.b_,A.q,l,r),A.ao),A.h,r,r,new B.o(r,r,p,q,o,r,A.n),r,r,r,r,r,r,r,r),r),r,r,r)
p=s.y
o=p?1:0
n=B.nb(r,A.aT,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
n=B.aF(r,r,r,r,B.V(A.ct,A.c,r,r,r,r),r,r,r,s.gaUI(),r,r,r,n,"Back to the board",r)
l=B.m(20)
w=s.f
n=B.B(B.a([n,A.b8,B.p(r,B.d(w>=0?"NGMY TV \xb7 "+D.tb[w].a:"NGMY TV \xb7 CH "+(s.gCb()+1),r,r,r,r,r,r,K.a4a,r,r,r),A.h,r,r,new B.o(A.aT,r,r,l,r,r,A.n),r,r,r,r,A.lY,r,r,r)],m),A.m,r,A.e,A.j,0,r,r)
l=s.cg_()
w=A.x.j(0.65)
v=B.m(18)
u=s.f
u=B.d(u>=0?D.tb[u].a:D.NJ[s.gCb()].a,r,r,r,r,r,r,A.ja,A.L,r,r)
t=s.f
return B.ce(r,A.x,B.bq(!0,B.aH(A.c5,new B.am(A.W,r,A.b_,A.q,B.a([q,B.C6(B.e1(B.v(B.a([new B.C(D.bfI,n,r),A.ar,l,A.b8,B.p(r,B.v(B.a([u,B.d(t>=0?D.tb[t].c:D.NJ[s.gCb()].b,r,r,r,r,r,r,P.aKl,A.L,r,r)],m),A.m,r,A.e,A.R,0,A.p),A.h,r,r,new B.o(w,r,r,v,r,r,A.n),r,r,r,A.bl,A.bS,r,r,r)],m),A.m,r,A.e,A.j,0,A.p),!p,r),A.ba,A.i3,o)],m),r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.er7(s),r,r,r,r,r,r,!1,A.ae),!0,!1,A.ah,!0,!0),r,!1,!1,r,r)},
cg_(){var w=this,v=null,u=new C.er5(),t=A.x.j(0.72),s=B.m(22),r=B.H(A.aY.j(0.5),A.r,1)
return B.p(v,B.B(B.a([u.$3(A.Aq,"CH \u2212",new C.er0(w)),u.$3(A.hD,"CH +",new C.er1(w)),u.$5$color$on(A.EC,"TV",new C.er2(w),A.aY,w.f<0),u.$5$color$on(A.Ad,"APPS",new C.er3(w),A.bB,w.r),u.$5$color$on(A.Ag,"ADS",new C.er4(w),A.bU,w.f===0)],x.p),A.m,v,A.e,A.R,0,v,v),A.h,v,v,new B.o(t,v,r,s,v,v,A.n),v,v,v,v,A.W_,v,v,v)},
bvS(){var w=null,v=A.x.j(0.9)
return B.aH(w,B.p(w,B.v(B.a([D.f_v,A.av,B.D(B.i7(!0,w,w,A.z,D.euS,new C.eqU(this),14,A.ah,w,A.ak,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),A.h,v,w,w,w,w,w,w,A.kZ,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eqV(this),w,w,w,w,w,w,!1,A.ae)}}
C.bqS.prototype={
a4(d,e){var w=this
return C.h5q(d,e,w.b,w.d,w.e,w.c)},
ar(d){return!0}}
C.aJu.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.aTj.prototype={}
C.TH.prototype={
S(){return new C.bgv(B.T(x.S,x.N),A.at,B.a([],x.U),$,A.bw,0,B.a([],x.X),null,null)}}
C.bgv.prototype={
guG(){var w=this.f
return w===$?this.f=C.fIk(0):w},
Z(){this.a0()
this.kM()
C.yC("laser_maze").by(new C.dZ8(this),x.P)},
l4(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new B.A(u.a,t)
if(t>0.8)A.d.cu(w,v)}this.n(new C.dZ9())},
abm(d){var w=this
w.n(new C.dYZ(w,d))
C.vh("laser_maze",B.E(["best",w.e,"level",w.d],x.N,x.z))},
c_M(d){var w,v,u,t,s,r,q,p,o=this
if(o.x)return
w=o.y
v=w.ge8()/7
u=v*7
t=(w.a-u)/2
s=A.k.E((w.b-u)/2,8,300)
r=A.k.bt((d.a-t)/v)
q=A.k.bt((d.b-s)/v)
if(r<0||q<0||r>=7||q>=7)return
p=q*7+r
if(o.guG().b.t(0,p)||p===o.guG().e||o.guG().d.an(0,p))return
o.n(new C.dZ_(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=B.ck(new C.dZ2(t,C.h6f(t.guG(),t.r))),q=x.p,p=B.a([new C.dw("Clear mirrors",!1,new C.dZ3(t),A.jM,A.aK,s),new C.dw("Skip",!1,new C.dZ4(t),D.bsx,A.aY,s)],q)
if(t.d>0)p.push(new C.dw("Back",!1,new C.dZ5(t),D.bsy,A.aY,s))
w=B.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new C.dw(""+u,v===t.d,new C.dZ6(t,v),s,A.aD,s))}return C.jy(A.aD,A.fZ,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",B.v(B.a([new C.eF(p,s,s),new C.eF(w,"LEVEL",s)],q),A.m,s,A.e,A.R,0,A.p))}}
C.bdz.prototype={
a4(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.ge8()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.E((b0.b-a4)/2,8,300),a7=new C.da0(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=B.bC(new B.a7(a5,a6,a8,a4),A.kf)
v=$.W()
u=B.L()
u.r=K.q9.gq(0)
a9.aJ(w,u)
for(w=a9.a,t=0;t<=7;++t){u=t*a3
s=a5+u
r=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.dv.gq(0)
q=r.I()
w.drawLine.apply(w,[s,a6,s,a4,q])
q.delete()
u=a6+u
s=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
s.r=A.dv.gq(0)
q=s.I()
w.drawLine.apply(w,[a5,u,a8,u,q])
q.delete()}for(a4=a1.b,a8=a4.b,a8=B.ef(a8,a8.r,B.a2(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=B.bC(B.cJ(p,u,u),A.h1)
o=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
o.sap(D.bJN.au(0,B.cJ(p,a3,a3)))
q=o.I()
w.drawRRect(B.eZ(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=B.a([],x.v)
n=new B.aO(v.r,A.ap,a2,a2,u)
n.D(new B.b4(a7.$1(A.d.gL(a8)).a,a7.$1(A.d.gL(a8)).b))
for(a8=B.df(a8,1,a2,B.U(a8).c),v=a8.$ti,a8=new B.bV(a8,a8.gJ(0),v.k("bV<ai.E>")),v=v.k("ai.E");a8.C();){s=a8.d
if(s==null)s=v.a(s)
s=new B.ao(a7.$1(s).a,a7.$1(s).b)
u.push(s)
r=n.f
if(r!=null)s.bx(r)
s=n.e
if(s!=null)s.a.delete()
n.e=null}$.W()
a8=B.L()
a8.b=A.ac
a8.c=14
a8.e=A.ft
a8.r=A.aD.j(0.28+0.08*Math.sin(a1.f*12)).gq(0)
a8.z=A.lz
a9.aM(n,a8)
a8=B.L()
a8.b=A.ac
a8.c=4
a8.e=A.ft
a8.r=D.a9S.gq(0)
a9.aM(n,a8)
a8=B.L()
a8.b=A.ac
a8.c=1.6
a8.e=A.ft
a8.r=A.c.gq(0)
a9.aM(n,a8)}for(a8=a4.c,a8=B.ef(a8,a8.r,B.a2(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.t(0,m)
if(l){m=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
m.r=A.aK.j(0.5).gq(0)
m.z=A.B2
q=m.I()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
m.r=(l?A.aK:A.bt).gq(0)
q=m.I()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?A.c:A.az
i=new B.kN(new B.em("\u2605",a2,a2,A.cS,a2,a2,a2,a2,a2,a2,new B.F(!0,j,a2,a2,a2,a2,v,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a5,A.cg,new B.jM(1),a2,a2,a2,a2,A.cf,a2)
i.f_()
j=i.b
h=j.c
j=j.a.c
i.a4(a9,new B.u(m-h/2,k-j.gbh(j)/2))}g=new C.da3(a7,a3,a9)
a1.c.bG(0,new C.da1(g))
a4.d.bG(0,new C.da2(g))
f=a7.$1(a4.e)
a4=B.bC(B.cJ(f,o,a3*0.8),A.h1)
a8=B.L()
a8.r=A.aD.gq(0)
a9.aJ(a4,a8)
v=f.ao(0,new B.u(v,0))
a8=B.L()
a8.r=A.c.gq(0)
a9.ae(v,5,a8)
for(a4=a1.r,a8=a4.length,e=0;e<a4.length;a4.length===a8||(0,B.K)(a4),++e){d=a4[e]
a0=d.b/0.8
v=d.a
u=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
u.b=A.ac
s=1-a0
u.c=4*s
u.r=A.aK.j(s).gq(0)
q=u.I()
w.drawCircle(v.a,v.b,a3*(0.3+a0),q)
q.delete()}},
ar(d){return!0}}
C.TJ.prototype={
S(){var w=x.n
return new C.aB4(A.cB,B.a([1,0.5,0],w),B.a([0,0,0],w),$,A.bw,0,B.a([],x.X),null,null)}}
C.aB4.prototype={
Z(){this.a0()
this.kM()
C.yC("light_mixer").by(new C.dZr(this),x.P)},
l4(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aUJ()
w.n(new C.dZs())},
atL(){var w,v,u=this,t=B.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aB(5)/4)
u.e=t
if(A.d.ea(t,new C.dZc()))u.e[w.aB(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aUJ(){var w,v,u=this
if(u.z!=="play")return
w=A.k.U(A.k.E(1-C.h1D(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
C.vk(v,A.o.ak(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
C.vh("light_mixer",B.E(["best",v],x.N,x.z))}}else u.z="result"},
gcqm(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=B.E(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cAK[A.o.F(A.k.U(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=B.ck(new C.dZl(v,C.h1D(v.e,t))),r=t[0]
r=C.hp(A.aD,""+A.k.U(r*100)+"%","Red",1,0,new C.dZm(v),r)
w=t[1]
w=C.hp(A.bm,""+A.k.U(w*100)+"%","Green",1,0,new C.dZn(v),w)
t=t[2]
return C.jy(A.b6,A.fZ,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",B.v(B.a([r,w,C.hp(A.d6,""+A.k.U(t*100)+"%","Blue",1,0,new C.dZo(v),t),new B.bI(A.a7,u,u,new C.ff(A.hq,"Lock it in",new C.dZp(v),A.bh,u),u)],x.p),A.m,u,A.e,A.R,0,A.p))}}
C.bdO.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=B.bC(new B.a7(0,0,n,m),A.pv)
$.W()
w=B.L()
w.r=A.x.gq(0)
d.aJ(l,w)
w=d.a
J.bD(w.save())
w.clipRRect(B.eZ(B.bC(new B.a7(0,0,n,m),A.pv)),$.xQ(),!0)
v=e.ge8()*0.3
u=e.e9(A.J)
l=-v*0.55
t=v*0.45
s=[u.ao(0,new B.u(0,l)),u.ao(0,new B.u(l,t)),u.ao(0,new B.u(v*0.55,t))]
r=[A.CX,F.a96,F.a9r]
d.ko(new B.a7(0,0,n,m),B.L())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
p.a=A.n3
p.r=r[q].j(l[q]).gq(0)
o=p.I()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=B.bC(new B.a7(0,0,n,m),A.pv)
m=B.L()
m.b=A.ac
m.c=2
m.r=A.b9.gq(0)
d.aJ(n,m)},
ar(d){return!0}}
C.aIY.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.btq.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
w=this.fb$
w===$&&B.c()
w.p()
this.bq5()}}
C.aIZ.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.btr.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
w=this.fb$
w===$&&B.c()
w.p()
this.bq6()}}
C.bqg.prototype={}
C.a6f.prototype={
B(d){var w=null
return B.ce(B.eA(w,w,w,!0,!0,D.aa_,w,1,!0,w,0,!1,w,!1,w,w,B.aF(w,w,w,w,D.ais,w,w,w,new C.caD(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fbr,w,w,w,1,w,!0),D.aa_,B.cM(B.a([D.dQb,B.ck(new C.caE())],x.p),w,D.bhK,w,w,A.ak,!1),w,!1,!1,w,w)}}
C.Uz.prototype={
S(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aBT(w,new B.ap(A.as,$.av()),$,A.bw,0,B.a([],x.X),null,null)}}
C.aBT.prototype={
Z(){this.a0()
this.kM()},
b_C(d){var w=this.d.length
return A.o.F(A.k.bt(A.k.F(A.k.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
l4(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b_C(v.f)
if(w!==v.x){v.x=w
C.l3("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.n(new C.ev5(v))
C.AG("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
c0J(){if(this.d.length<2)return
this.n(new C.ev1(this))},
aV5(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.n(new C.ev0(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc0I(),p=s.d,o=B.D(B.aH(r,B.b2(r,r,r,new C.brC(p,s.f,r),A.fa),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.ae),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.v(B.a([o,new B.a5(r,40,B.au(B.d(n,r,r,r,r,r,r,D.eO5,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.arU[A.o.F(v,8)].j(0.9)
t=new B.b1(20,20)
o.push(B.aH(r,B.p(r,new B.w(p[v],r,D.eNm,r,r,r,r,r,r,r,r,r),A.h,r,r,new B.o(u,r,r,new B.bv(t,t,t,t),r,r,A.n),r,r,r,A.hn,A.h8,r,r,r),A.z,!1,r,r,r,r,r,r,r,new C.ev3(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.ae))}p=A.c.j(0.07)
return C.jy(A.aK,A.fZ,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.v(B.a([new C.eF(o,r,r),B.B(B.a([B.D(B.aK(r,A.U,!1,r,!0,A.q,r,B.aL(),s.e,r,r,r,r,r,2,B.bn(r,new B.b3(4,B.m(14),A.X),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kl,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.z,!0,r,!0,r,!1,r,A.ai,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.ev4(s),r,!1,r,r,!1,r,!0,r,A.a8,r,r,r,r,r,r,r,r,r,r,r,A.di,!0,A.a5,r,A.am,r,r,r,r),1),A.aa,new C.ff(A.hD,"Add",s.gc0G(s),A.c,r),A.bp,new C.ff(A.m1,"Spin",q,A.bh,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.R,0,A.p))}}
C.brC.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new B.u(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.W()
w=B.L()
w.r=D.b1a.gq(0)
a1.ae(d,f,w)
w=B.L()
w.b=A.ac
w.c=3
w.r=A.aK.gq(0)
a1.ae(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=B.bT(d,a0)
n=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
n.r=D.arU[A.o.F(q,8)].gq(0)
m=n.I()
n=p*57.29577951308232
f.drawArc.apply(f,[B.c8(o),n,s,!0,m])
m.delete()
o=B.bT(d,a0)
l=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
l.b=A.ac
l.c=2
l.r=A.c.j(0.6).gq(0)
m=l.I()
f.drawArc.apply(f,[B.c8(o),n,s,!0,m])
m.delete()
J.bD(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.am(o,0,11)+"\u2026"
k=new B.kN(new B.em(o,i,i,A.cS,i,i,i,i,i,i,D.eC0),A.a5,A.cg,new B.jM(1),i,i,i,i,A.cf,i)
k.f_()
o=k.b
n=o.c
o=o.a.c
k.a4(a1,new B.u(a0-n-16,-o.gbh(o)/2))
f.restore()}f=B.L()
f.r=D.a9N.gq(0)
a1.ae(d,20,f)
f=B.L()
f.b=A.ac
f.c=3
f.r=A.aK.gq(0)
a1.ae(d,20,f)
j=new B.aO(h.r,A.ap,i,i,B.a([],x.v))
e-=a0
j.D(new B.b4(g,e+26))
e-=10
j.D(new B.ao(g-14,e))
j.D(new B.ao(g+14,e))
j.D(new B.bE())
e=B.L()
e.r=A.c.gq(0)
a1.aM(j,e)
e=B.L()
e.b=A.ac
e.c=2
e.r=A.aT.gq(0)
a1.aM(j,e)},
ar(d){return!0}}
C.Ti.prototype={
S(){return new C.bg4($,A.bw,0,B.a([],x.X),null,null)}}
C.bg4.prototype={
Z(){this.a0()
this.kM()},
l4(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.AG("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.a2L(900,new C.dM8())}w.n(new C.dM9())},
aV7(d){return this.n(new C.dM3(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aS(A.o.u(A.k.ak(m,60)),2,"0")
v=A.a.aS(A.o.u(A.o.F(A.k.dE(m),60)),2,"0")
m=B.b2(n,n,n,new C.bmx(l,A.cD,n),A.aIl)
u=B.d(w+":"+v,n,n,n,n,n,n,D.eG2,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.au(new B.a5(280,280,new B.am(A.A,n,A.a9,A.q,B.a([m,B.v(B.a([u,B.d(t,n,n,n,n,n,n,D.eF7,n,n,n),A.av,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.BX,n,n,n)],s),A.m,n,A.e,A.R,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.cRQ[r]
u.push(new C.dw(""+q+" min",o.d===q,new C.dM5(o,q),n,A.cD,n))}m=o.f
p=m?V.x8:A.iM
m=m?"Pause":"Start"
return C.jy(A.cD,A.fZ,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.v(B.a([new C.eF(u,n,n),new C.eF(B.a([new C.ff(p,m,new C.dM6(o),A.bh,n),new C.ff(A.jM,"Reset",new C.dM7(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.R,0,A.p))}}
C.bmx.prototype={
a4(d,e){var w,v,u,t,s=e.e9(A.J),r=e.a/2-14
$.W()
w=B.L()
w.b=A.ac
w.c=16
w.r=A.c.j(0.08).gq(0)
d.ae(s,r,w)
w=B.bT(s,r)
v=B.L()
v.b=A.ac
v.c=16
v.d=A.bL
u=this.c
t=B.aq(u,A.c,0.4)
t.toString
v.sap(new B.fN(A.A,-1.5707963267948966,4.71238898038469,A.w,B.a([u,t,u],x.O),null,null).au(0,B.bT(s,r)))
d.fs(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
ar(d){return d.b!==this.b}}
C.Sw.prototype={
S(){return new C.bfK($,A.bw,0,B.a([],x.X),null,null)}}
C.bfK.prototype={
Z(){this.a0()
this.kM()},
l4(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.OI.h(0,p.d)
w.toString
v=A.d.fv(w,new C.dxT())
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
C.l3("flute",D.bKn[t]+5,1400,0.35)}p.n(new C.dxU())},
gc0M(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.IH("Press Start",0.5)
w=D.OI.h(0,this.d)
w.toString
v=A.d.fv(w,new C.dxO())
u=A.k.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.IH("Breathe in",0.5+0.5*A.dJ.av(0,p))
case 1:return new B.IH("Hold",1)
case 2:return new B.IH("Breathe out",1-0.5*A.dJ.av(0,p))
default:return new B.IH("Hold",0.5)}}}return new B.IH("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc0M(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hm.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.h,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ab(0,A.G,A.hm.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.C4,q,q,q))
n.push(B.an(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kl,q,q,q),q,q,q,q,q,q))
n=B.au(new B.a5(300,340,new B.am(A.A,q,A.a9,A.q,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aU(D.OI.gec(D.OI));w.C();){v=w.gT(w)
o.push(new C.dw(v,r.d===v,new C.dxR(r,v),q,A.hm,q))}w=r.e
v=w?A.Yd:A.iM
w=w?"Stop":"Start"
o.push(new C.ff(v,w,new C.dxS(r),A.bh,q))
return C.jy(A.hm,A.fZ,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new C.eF(o,q,q))}}
C.aFf.prototype={}
C.T9.prototype={
S(){return new C.bfZ(new B.co(null,x.A),B.a([],x.au),A.aF,A.c)}}
C.bfZ.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aF(s,s,s,s,D.m8,s,s,s,new C.dJr(t,d),s,s,s,s,"Share",s)],r),p=B.bu(B.m(18),new B.ep(B.aH(s,B.b2(s,s,s,new C.bi0(t.e,t.x,s),A.fa),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dJs(t),new C.dJt(t),s,s,s,s,s,s,s,s,s,new C.dJu(t),s,s,s,s,!1,A.ae),t.d),A.ao),o=B.a([],r)
for(w=0;w<9;++w){v=D.cAa[w]
u=!t.w&&t.f.A(0,v)
o.push(new C.E3(v,u,new C.dJv(t,v),!1,s))}u=t.r
return C.jy(A.by,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.C(A.bS,p,s),"DRAW PAD",B.v(B.a([new C.eF(o,s,s),C.hp(A.by,""+A.k.U(u),"Brush",30,2,new C.dJw(t),u),new C.eF(B.a([new C.dw("Eraser",t.w,new C.dJx(t),A.L9,A.by,s),new C.ff(A.uK,"Undo",new C.dJy(t),A.c,s),new C.ff(A.e7,"Clear",new C.dJz(t),A.c,s),new C.ff(A.Lk,"Paper",new C.dJA(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.R,0,A.p))}}
C.bi0.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.W()
w=B.L()
w.r=this.c.gq(0)
d.aX(new B.a7(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,B.K)(w),++s){r=w[s]
q=$.W()
p=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
o=r.a
p.r=o.gq(o)
n=r.b
p.c=n
p.d=A.bL
p.e=A.ft
p.b=A.ac
m=r.c
if(m.length===1){q=A.d.gL(m)
m=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
m.r=o.gq(o)
l=m.I()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=B.a([],t)
k=new B.aO(q.r,A.ap,null,null,o)
o.push(new B.b4(A.d.gL(m).a,A.d.gL(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new B.cO(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.bx(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new B.ao(A.d.gaj(m).a,A.d.gaj(m).b)
o.push(q)
o=k.f
if(o!=null)q.bx(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.I()
q=k.e
u.drawPath((q==null?k.e=new B.cD(k.gbL().a.snapshot()):q).a,l)
l.delete()}}},
ar(d){return!0}}
C.TV.prototype={
S(){var w=x.S
return new C.aBe(B.aZ(w),B.aZ(w))}}
C.aBe.prototype={
Z(){this.a0()
this.apd()},
apd(){var w,v,u=this,t=x.N,s=B.bj(D.cVT,!0,t)
A.d.BJ(s)
w=x.S
v=B.U(s).c
t=B.z(B.df(s,0,B.dK(u.d,"count",w),v),t)
A.d.v(t,B.df(s,0,B.dK(u.d,"count",w),v))
A.d.BJ(t)
u.e=t
u.f.a7(0)
u.r.a7(0)
u.w=0
u.x=!1},
c0H(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
C.l3("bell",12+A.o.F(d,9),150,0.35)
s.n(new C.e3z(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gL(0)
u=w.gaj(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bN(A.no,new C.e3A(s,v,u),t)
else{s.x=!0
B.bN(A5.DL,new C.e3B(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.aKz,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.ak(p,2)+" / "+o
o=x.p
p=B.v(B.a([new B.C(A.wA,B.B(B.a([u,B.d(p,q,q,q,q,q,q,B.l(q,q,w?A.aK:A.af,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hF,A.j,0,q,q),q),B.D(B.i7(!0,q,q,A.z,new B.hJ(v,8,8,1,q),new C.e3F(r),r.e.length,A.bl,q,A.ak,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.cBx[t]
o.push(new C.dw(s.b,r.d===s.a,new C.e3G(r,s),q,A.aY,q))}o.push(new C.ff(D.bsv,"New game",new C.e3H(r),A.bh,q))
return C.jy(A.aY,A.fZ,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new C.eF(o,q,q))}}
C.U7.prototype={
S(){return new C.aBx(B.a([],x.t))}}
C.aBx.prototype={
c0L(d){A.d.a7(this.d)
this.w=!0
this.aV6()},
aV6(){this.d.push(A.cB.aB(4))
this.e=0
this.XQ()},
XQ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$XQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.n(new C.ecb(t))
s=x.H
w=3
return B.b(B.bN(A.lp,null,s),$async$XQ)
case 3:r=t.d,q=B.bj(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aOO(n)
w=7
return B.b(B.bN(new B.b8(1000*Math.max(280,600-r.length*18)),null,s),$async$XQ)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.n(new C.ecc(t))
case 1:return B.h(u,v)}})
return B.i($async$XQ,v)},
aOO(d){this.n(new C.ec9(this,d))
C.l3("marimba",D.ak3[d]+5,450,0.55)
B.bN(A.DI,new C.eca(this),x.H)},
c0N(d){var w,v,u=this
if(!u.w||u.r)return
u.aOO(d)
w=u.d
v=u.e
if(w[v]!==d){C.dG(90,"",600,0,0.5,"saw")
u.n(new C.ecd(u))
return}++v
u.e=v
if(v===w.length){u.n(new C.ece(u))
B.bN(A.iq,new C.ecf(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,E.Rd,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.eOt,A.L,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aqS[v]
u=u.j(q.f===v?1:0.35)
t=new B.b1(28,28)
s=q.f===v?B.a([new B.ab(0,A.G,D.aqS[v].j(0.8),A.J,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aH(p,B.dj(p,p,p,p,A.ba,new B.o(u,p,new B.c1(r,r,r,r),new B.bv(t,t,t,t),s,p,A.n),A.ji,p,p,p,p,p,p,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.ecg(q,v),p,p,p,p,p,p,!1,A.ae))}o=B.au(new B.C(A.a8,B.v(B.a([o,A.ar,n,A.d3,new B.fD(1,B.lK(1,l,2,12,12,p,A.dL,!1),p)],m),A.m,p,A.b7,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return C.jy(A.cz,A.fZ,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new C.eF(B.a([new C.ff(A.iM,n,q.gc0K(q),A.bh,p)],m),p,p))}}
C.Us.prototype={
S(){return new C.bhd(new B.ap(A.as,$.av()))}}
C.bhd.prototype={
asG(d){return B.og(A.k.a9(d,2),B.ae("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eqt(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.d9(B.aJ(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eqC()
l=B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),l,m,m,m,m,m,2,B.bn(m,m,m,m,m,m,m,m,!0,new B.b3(4,B.m(16),A3.vK),m,m,m,m,m,m,m,m,m,m,m,new B.b3(4,B.m(16),D.aQb),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lb,"Bill amount",!0,!0,!1,m,m,m,m,D.eM1,"$ ",m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,A.dY,m,m,m,1,m,m,!1,"\u2022",m,new C.eqy(n),m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.aJO,!0,A.a5,m,A.am,m,m,m,m)
k=A.bh.j(0.1)
s=B.m(20)
r=B.H(A.bh.j(0.35),A.r,1)
q=x.p
s=B.cM(B.a([l,A.bu,B.p(m,B.v(B.a([t.$2("Tip ("+A.k.U(n.e)+"%)","$"+n.asG(w)),t.$2("Total","$"+n.asG(v)),O.UR,t.$3$big("Each of "+n.f+" pays","$"+n.asG(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.h,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.c4,m,m,m)],q),m,A.fB,m,m,A.ak,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cmI[p]
r.push(new C.dw(""+o+"%",A.k.U(n.e)===o,new C.eqz(n,o),m,A.bh,m))}l=n.f
return C.jy(A.bh,A.fZ,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.v(B.a([new C.eF(r,"TIP",m),C.hp(A.aY,""+l,"People",20,1,new C.eqA(n),l),new C.eF(B.a([new C.dw("Round up",n.r,new C.eqB(n),m,A.aK,m)],q),m,m)],q),A.m,m,A.e,A.R,0,A.p))}}
C.TT.prototype={
S(){var w=B.a([3,5],x.t)
return new C.bgG(w,A.cB,$,A.bw,0,B.a([],x.X),null,null)}}
C.bgG.prototype={
Z(){this.a0()
this.kM()},
l4(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.k.bt(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t
C.a6e("snare",0.5)}u.n(new C.e2e())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.he()
u.w=t
u.x=t?0:3.141592653589793
C.l3("bell",24,400,0.5)}u.n(new C.e2f())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.b9N(v,o.r>0,n))}u=B.aH(n,B.au(B.c9(A.fG,m,A.bx,18,18),n,n,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.e27(o),n,n,n,n,n,n,!1,A.ae)}else if(m==="coin"){t=A.k.E(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.H(A.dl,A.r,6)
s=B.a([new B.ab(0,A.G,A.aK.j(0.4),A.J,30)],x.V)
u=B.aH(n,B.au(B.e5(A.A,B.p(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.eLi,n,n,n),A.h,n,n,new B.o(n,n,v,n,s,D.dWm,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.e28(o),n,n,n,n,n,n,!1,A.ae)}else{m=o.as
u=B.aH(n,B.au(B.v(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.eBw,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kl,n,n,n)],x.p),A.m,n,A.e,A.R,0,A.p),n,n,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.e29(o),n,n,n,n,n,n,!1,A.ae)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.cPw[r]
v.push(new C.dw(q.b,o.d===q.a,new C.e2a(o,q),q.c,A.bB,n))}v=B.a([new C.eF(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(C.hp(A.bB,""+s,"Dice",4,1,new C.e2b(o),s))}if(o.d==="num"){s=o.z
s=C.hp(A.bB,""+s,"From",100,1,new C.e2c(o),s)
p=o.Q
A.d.v(v,B.a([s,C.hp(A.bB,""+p,"To",1000,2,new C.e2d(o),p)],m))}return C.jy(A.bB,A.fZ,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.v(v,A.m,n,A.e,A.R,0,A.p))}}
C.b9N.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cB.af()-0.5)*0.6
else w=0
v=B.m(22)
u=B.a([new B.ab(0,A.G,A.x.j(0.4),A.cs,14)],x.V)
t=B.a([],x.p)
for(s=D.d5q.h(0,A.o.E(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bI(s[q],p,p,B.p(p,p,A.h,p,p,I.a7l,p,18,p,p,p,p,p,18),p))
return B.eu(A.A,w,B.p(p,new B.am(A.W,p,A.a9,A.q,t,p),A.h,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bC,p,p,100),p)}}
C.aIk.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.bth.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
w=this.fb$
w===$&&B.c()
w.p()
this.bpq()}}
C.aIC.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.btm.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
w=this.fb$
w===$&&B.c()
w.p()
this.bpJ()}}
C.aJ6.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.btw.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
w=this.fb$
w===$&&B.c()
w.p()
this.bqe()}}
C.aJB.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.btI.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
w=this.fb$
w===$&&B.c()
w.p()
this.bqJ()}}
C.b3s.prototype={
B(d){var w,v=this,u=null,t=v.c,s=D.ayJ.h(0,t)
$.aZv=s==null?"music":s
s=v.d
w=x.p
t=B.a([B.aF(u,u,u,u,E.qu,u,u,u,new C.cmI(d),u,u,u,u,u,u),B.D(B.d(t,u,1,A.a2,u,u,u,B.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(B.aF(u,u,u,u,B.V(A.Lo,s,u,u,u,22),u,u,u,new C.cmJ(v,d),u,u,u,u,"How to play",u))
w=B.a([new B.C(D.bkK,B.B(t,A.m,u,A.e,A.j,0,u,u),u),B.D(v.f,1)],w)
w.push(B.p(u,v.r,A.h,u,u,new B.o(D.Da,u,new B.c1(new B.ay(A.c.j(0.08),1,A.r,-1),A.X,A.X,A.X),u,u,u,A.n),u,u,u,u,A.DO,u,u,1/0))
return B.ce(u,A.bX,B.bq(!0,B.v(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0),u,!1,!1,u,u)}}
C.dw.prototype={
B(d){var w,v,u,t=this,s=null,r=B.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=B.H(o,A.r,q?1.6:1)
w=x.p
v=B.a([],w)
u=t.f
if(u!=null)A.d.v(v,B.a([B.V(u,q?t.r:A.aQ,s,s,s,16),A.eA],w))
v.push(B.d(t.c,s,s,s,s,s,s,B.l(s,s,q?A.c:A.af,s,s,s,s,s,s,s,s,12,s,s,A.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new B.C(D.V8,B.aH(s,B.dj(s,B.B(v,A.m,s,A.e,A.R,0,s,s),s,s,A.ba,new B.o(p,s,o,r,s,s,A.n),A.eL,s,s,s,A.h8,s,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cmE(t),s,s,s,s,s,s,!1,A.ae),s)}}
C.eF.prototype={
B(d){var w=null,v=B.a([],x.p),u=this.d
if(u!=null)v.push(new B.a5(54,w,B.d(u,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(B.D(B.ci(B.B(this.c,A.m,w,A.e,A.j,0,w,w),A.q,w,A.z,w,w,w,w,A.b0),1))
return new B.C(A.cM,B.B(v,A.m,w,A.e,A.j,0,w,w),w)}}
C.at3.prototype={
B(d){var w,v,u,t=this,s=null,r=B.d(t.c,s,s,s,s,s,s,B.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=B.asD(d).cAu(q,A.bG,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=B.D(B.a7W(B.mg(s,s,s,u,v,t.e,A.k.E(w,v,u)),q),1)
u=t.x
return new B.a5(s,34,B.B(B.a([new B.a5(78,s,r,s),q,new B.a5(38,s,B.d(u==null?A.k.a9(w,1):u,s,s,s,s,s,s,Ag.QY,A.dM,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
C.ff.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new B.C(D.V8,B.aD(!1,A.a1,!0,B.m(12),B.aI(!1,B.m(12),!0,new B.C(Ad.acy,B.B(B.a([B.V(w.c,u,v,v,v,17),A.eA,B.d(w.d,v,v,v,v,v,v,B.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.R,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.cmD(w),v,v,v,v,v,v,v),A.h,t,0,v,v,v,v,v,A.ad),v)}}
C.E3.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.eA_:u
w=t?A.c:A.b9
w=B.H(w,A.r,t?2.5:1)
return B.aH(u,B.dj(u,u,u,u,A.ba,new B.o(p,u,w,u,t?B.a([new B.ab(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a6),A.hS,u,r,D.acm,u,u,u,s),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cmK(v),u,u,u,u,u,u,!1,A.ae)}}
C.mh.prototype={
a2L(d,e){var w=B.dc()
w.sex(B.cP(B.dB(0,0,0,d,0,0),new C.cmF(this,w,e)))
this.fc$.push(w.b9())},
kM(){var w=this,v=w.qR(new C.cmH(w))
v.kp(0)
w.fb$!==$&&B.aQ()
w.fb$=v}}
C.a8U.prototype={
bsL(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,B.K)(w),++q)for(p=A.d.gah(w[q]);p.C();){o=p.gT(0)
n=J.a8(o)
if(n.h(o,0)<s)s=n.h(o,0)
if(n.h(o,0)>t)t=n.h(o,0)
if(n.h(o,1)<r)r=n.h(o,1)
if(n.h(o,1)>u)u=n.h(o,1)}g.z!==$&&B.aQ()
g.z=s
g.Q!==$&&B.aQ()
g.Q=t
g.as!==$&&B.aQ()
g.as=r
g.at!==$&&B.aQ()
g.at=u
for(m=0,q=0;q<w.length;w.length===p||(0,B.K)(w),++q){for(v=A.d.gah(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gT(0)
n=J.a8(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&B.aQ()
g.ax=m
w=g.bvU()
g.ay!==$&&B.aQ()
g.ay=w},
bvU(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
En(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
for(k=l.y,w=k.length,v=0;v<k.length;k.length===w||(0,B.K)(k),++v){u=k[v]
for(t=u.length-1,s=!1,r=0;r<u.length;q=r+1,t=r,r=q){p=J.q(u[r],0)
o=J.q(u[r],1)
n=J.q(u[t],0)
m=J.q(u[t],1)
if(o>f!==m>f&&e<(n-p)*(f-o)/(m-o)+p)s=!s}if(s)return!0}return!1}}
C.a8V.prototype={
cwA(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,B.K)(v),++s){r=v[s]
if(r.En(0,w,e)){if(t!=null){q=r.ax
q===$&&B.c()
p=t.ax
p===$&&B.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
C.uu.prototype={}
C.Ny.prototype={}
C.xg.prototype={}
C.Nx.prototype={
f9(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.ajZ[w.aB(7)]
w=w.he()?0:12
u=A.o.F(t.c++,3)===0?"flute":"bell"
C.l3(u,v+w-12,2200,0.1)}}
C.Tp.prototype={
S(){var w=$.av()
return new C.aAC(new B.co(null,x.A),new B.ap(A.as,w),new C.Nx(A.cB),D.cRk,A.at,D.a_A,$,A.bw,0,B.a([],x.X),null,null)}}
C.aAC.prototype={
Z(){var w,v=this
v.a0()
v.kM()
v.a.toString
w=$.fVP
if(w==null)w=$.fVP=C.cpe()
w.by(new C.dOR(v),x.P)},
p(){var w=this.e
w.R$=$.av()
w.O$=0
this.bpR()},
ckO(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=B.a([],x.D)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,B.K)(v),++s){r=v[s]
q=B.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,B.K)(p),++n)q.push(new C.dOj(p[n]).$0())
w.push(q)}this.w=w},
gUd(){var w=this.fy
return w.A(0,A.at)?100:Math.min(w.a,w.b)*0.43},
aqn(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.E(f,1,16)
w.Q=w.as=0},
aue(d){var w
this.fx=d
w=d.ax
w===$&&B.c()
this.aqn(d.x,d.w,105/Math.max(w,3))
B.eH()
C.l3("bell",(A.d.cP(D.a_b,d.c)+1)*3+12,900,0.45)
C.dG(300,"",280,1.4,0.15,"tri")},
l4(d){var w,v,u,t,s,r,q,p=this
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
p.x=A.k.E(p.x+p.as*d,-85,85)
q=Math.exp(-d*2.2)
v=p.Q*=q
p.as*=q
if(p.ch&&Math.abs(v)<3)p.y=p.y+7*d/Math.sqrt(p.z)}while(v=p.y,v>180)p.y=v-360
while(v<-180){v+=360
p.y=v}},
c1r(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.at))return null
w=n.fy
v=n.gUd()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gUd()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.E(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cwA((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c1q(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.n(new C.dOh(w))
return}w.n(new C.dOi(w,v,A.a.i(d).toLowerCase()))},
bIi(){var w=null,v=this.c
v.toString
B.ch(w,w,!0,w,new C.dOf(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=B.a([B.aF(n,n,n,n,D.bv8,n,n,n,o.gbIh(),n,n,n,n,"Earth facts",n),B.aF(n,n,n,n,D.m8,n,n,n,new C.dOC(o,d),n,n,n,n,"Share",n)],l),j=B.ck(new C.dOD(o,m)),i=A.c.j(0.06)
i=B.a([B.aK(n,A.U,!1,n,!0,A.q,n,B.aL(),o.e,n,n,n,n,n,2,B.bn(n,new B.b3(4,B.m(14),A.X),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.C2,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bD1,n,n,n,n,n,n,n,n,n,n,n,n),A.z,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc1p(),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.iB,!0,A.a5,n,A.am,n,n,n,n)],l)
if(o.id.length!==0){w=B.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t]
w.push(new C.dw(s.a,!1,new C.dOE(o,s),A.mI,A.aY,n))}i.push(new B.C(A.i4,new B.a5(n,38,B.cM(w,n,n,n,n,A.b0,!1),n),n))}i.push(A.ar)
w=B.a([new C.dw("Whole Earth",!1,new C.dOI(o),A.ha,A.aY,n)],l)
for(v=D.ayy.gdH(D.ayy),v=v.gah(v);v.C();){u=v.gT(v)
w.push(new C.dw(u.a,!1,new C.dOJ(o,u),n,A.aY,n))}w.push(new C.dw("Random",!1,new C.dOK(o),A.m1,A.aY,n))
i.push(new C.eF(w,"GO TO",n))
w=o.z
i.push(C.hp(A.aY,A.k.a9(w,1)+"x","Zoom",16,0.8,new C.dOL(o),w))
w=o.dy
i.push(C.hp(A.cz,A.a.aS(A.o.u(A.k.bt(w)),2,"0")+":00","Time",24,0,new C.dOM(o),w))
w=o.fr
i.push(C.hp(A.bh,o.cjB(),"Season",365,0,new C.dON(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lt:D.EG
i.push(new C.eF(B.a([new C.dw("Spin",w,new C.dOO(o),D.bqn,A.aY,n),new C.dw("Night",v,new C.dOP(o),A.uu,A.aY,n),new C.dw("Borders",u,new C.dOF(o),D.bqr,A.aY,n),new C.dw("Names",r,new C.dOG(o),O.agE,A.aY,n),new C.dw("Music",q,new C.dOH(o),p,A.aY,n)],l),n,n))
return C.jy(A.aY,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",B.v(i,A.m,n,A.e,A.R,0,A.p))},
cjB(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.arv[u])v=u
return A.i5[v]+" "+(A.k.bt(w-D.arv[v])+1)},
c1o(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&B.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.mv(1,A.o.F((A.d.cP(D.a_b,t)+1)*47,360),0.55,1).iu()
r=new C.dOd()
q=B.m(20)
p=B.H(s.j(0.6),A.r,1)
o=x.p
n=B.B(B.a([B.p(j,j,A.h,j,j,new B.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.aa,B.D(B.d(d.a,j,1,A.a2,j,j,j,A.dO,j,j,j),1),B.aF(j,j,j,j,A.LJ,j,j,j,new C.dOc(this),j,j,j,j,j,A.c8)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=B.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.ht,j,j,j)
m=D.d48.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=B.B(B.a([m,A.aa,r.$2("PEOPLE",l?C.fcu(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",C.Fu(i)+" km\xb2")
if(l)m=(w<10?A.k.a9(w,1):C.Fu(w))+" per km\xb2"
else m="\u2014"
m=B.B(B.a([i,A.aa,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.a9(u,3):A.k.a9(u,1))+"% of people")
l=d.f
k=d.r
return B.p(j,B.v(B.a([n,t,A.P,v,A.P,m,A.P,B.B(B.a([i,A.aa,r.$2("ECONOMY",l>0?"$"+C.fcu(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.R,0,A.p),A.h,j,j,new B.o(D.Tq,j,p,q,j,j,A.n),j,j,j,j,D.acR,j,j,j)}}
C.bc0.prototype={
a4(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.W(),d7=B.L()
d7.r=D.zd.gq(0)
d8.aX(new B.a7(0,0,0+d4,0+d5),d7)
w=new B.eU()
w.dM(4)
for(d7=d8.a,v=0;v<90;++v){u=w.af()
t=w.af()
s=w.af()
r=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.25+w.af()*0.5).gq(0)
q=r.I()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new B.u(d4,d5)
o=d2.f
u=B.L()
t=x.O
u.sap(new B.bR(A.A,0.5,A.w,d3,0,B.a([A.K,A.aY.j(0.35),A.K],t),D.cD_,d3).au(0,B.bT(p,o*1.1)))
d8.ae(p,o*1.05,u)
n=B.bT(p,o)
u=B.L()
u.sap(D.dWq.au(0,n))
d8.ae(p,o,u)
J.bD(d7.save())
u=x.v
d6=new B.aO(d6.r,A.ap,d3,d3,B.a([],u))
d6.D(new B.kz(n))
d8.tk(0,d6)
m=d2.d*3.141592653589793/180
l=d2.e*3.141592653589793/180
k=Math.sin(m)
j=Math.cos(m)
i=Math.sin(l)
h=Math.cos(l)
g=B.L()
g.b=A.ac
m=g.c=0.7
g.r=A.c.j(0.1).gq(0)
f=new C.d61(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.I()
s=d.e
d7.drawPath((s==null?d.e=new B.cD(d.gbL().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=B.a([],u)
d=new B.aO(a2.r,A.ap,d3,d3,a3)
a3.push(new B.b4(s,r))}else{s=new B.ao(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bx(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.I()
d6=d.e
d7.drawPath((d6==null?d.e=new B.cD(d.gbL().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.I()
s=d.e
d7.drawPath((s==null?d.e=new B.cD(d.gbL().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=B.a([],u)
d=new B.aO(a2.r,A.ap,d3,d3,a3)
a3.push(new B.b4(s,r))}else{s=new B.ao(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bx(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.I()
d6=d.e
d7.drawPath((d6==null?d.e=new B.cD(d.gbL().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=B.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.F((A.d.cP(D.a_b,a7.c)+1)*47,360)
$.W()
b0=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a3=a8?0.35:0.5
b0.r=new H.mv(1,a9,a3,a8?1:0.62).iu().gq(0)
b1=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
b1.b=A.ac
b1.c=a8?2.2:m
b1.e=A.ft
b1.r=(a8?A.c:A.x.j(0.55)).gq(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,B.K)(a3),++b3){b4=a3[b3]
b5=b4.length/4|0
b6=$.W()
b7=B.a([],u)
b8=new B.aO(b6.r,A.ap,d3,d3,b7)
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
if(v===0){b6=new B.b4(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bx(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new B.ao(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bx(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}}if(!b9)continue
b6=new B.bE()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bx(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.I()
b6=b8.e
d7.drawPath((b6==null?b8.e=new B.cD(b8.gbL().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.I()
b6=b8.e
d7.drawPath((b6==null?b8.e=new B.cD(b8.gbL().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,B.K)(a5),++b3){d=a5[b3]
$.W()
s=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
s.b=A.ac
s.c=5
s.r=A.c.j(0.25).gq(0)
s.z=A.qD
q=s.I()
s=d.e
d7.drawPath((s==null?d.e=new B.cD(d.gbL().a.snapshot()):s).a,q)
q.delete()}if(d2.z)for(u=d6.length,s=d2.r,r=!(s<1.8),s=14/s,b3=0;b3<d6.length;d6.length===u||(0,B.K)(d6),++b3){a7=d6[b3]
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
c9=C.hth(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbh(b2)
c9.a4(d8,new B.u(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.E(k*c0+j*c1*c4,-1,1)
$.W()
u=B.L()
u.sap(new B.bR(A.A,0.5,A.w,d3,0,B.a([A.K,A.K,D.b_d.j(0.78)],t),D.cRF,d3).au(0,B.bT(new B.u(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.ae(p,o,u)}$.W()
d4=B.L()
d4.sap(new B.bR(A.A,0.5,A.w,d3,0,B.a([A.K,A.x.j(0.4)],t),D.d1J,d3).au(0,n))
d8.ae(p,o,d4)
d7.restore()
d7=B.L()
d7.b=A.ac
d7.c=1.4
d7.r=A.fJ.j(0.5).gq(0)
d8.ae(p,o,d7)},
ar(d){return!0}}
C.aII.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.aIJ.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
w=this.fb$
w===$&&B.c()
w.p()
this.bpQ()}}
C.bqb.prototype={}
C.Uv.prototype={
S(){return new C.bhg()}}
C.bhg.prototype={
gaOo(){var w=this.d
if(w===$)w=this.d=A.cB.aB(16)
return w},
B(d){var w=null,v=B.eA(w,w,w,!0,!0,D.zd,w,1,!0,w,0,!1,w,!1,w,w,B.aF(w,w,w,w,D.ais,w,w,w,new C.erg(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.f5D,w,w,w,1,w,!0),u=B.m(18),t=A.aY.j(0.1),s=B.H(A.aY.j(0.35),A.r,1),r=x.p
return B.ce(v,D.zd,B.cM(B.a([B.p(w,B.B(B.a([D.btS,A.aw,B.D(B.d(D.cGC[this.gaOo()],w,w,w,w,w,w,D.a4O,w,w,w),1),B.aF(w,w,w,w,D.bDY,w,w,w,new C.erh(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bC,w,w,w),A.ay,B.ck(new C.eri())],r),w,A.Vs,w,w,A.ak,!1),w,!1,!1,w,w)}}
C.Ug.prototype={
S(){return C.htJ()}}
C.bh3.prototype={
cbJ(d){var w=d.c,v=C.htL(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new B.u(Math.cos(t)*v,Math.sin(t)*v)},
Z(){this.a0()
this.kM()},
l4(d){var w,v,u,t=this
t.e.f9(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.cbJ(w)
u=new B.u(-v.a,-v.b).aN(0,t.w)
v=B.l4(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc1s(){var w=this.ch
return new B.u(w.a/2,w.b/2).ao(0,this.x)},
c1w(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.AU[s]
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
aVs(d){this.n(new C.ejp(this,d))
B.eH()
C.l3("bell",D.d1T[A.o.F(A.d.cP(D.AU,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=B.a([B.aF(m,m,m,m,D.m8,m,m,m,new C.ejA(n,d),m,m,m,m,"Share",m)],k),i=B.ck(new C.ejB(n,l)),h=B.a([new C.dw("All",!1,new C.ejC(n),A.Yl,A.aK,m)],k)
for(w=0;w<10;++w){v=D.AU[w]
h.push(new C.dw(v.a,n.z===v,new C.ejD(n,v),m,B.aY(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.a9(s,0)+" d/s":""+A.k.U(s)+" d/s"
t=C.hp(A.aK,s,"Time",1,0,new C.ejE(n),u/t)
u=n.w
u=C.hp(A.aK,A.k.a9(u,1)+"x","Zoom",9,0.5,new C.ejF(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lt:D.EG
return C.jy(A.aK,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",B.v(B.a([new C.eF(h,"GO TO",m),t,u,new C.eF(B.a([new C.dw("Orbits",s,new C.ejG(n),m,A.aK,m),new C.dw("Names",r,new C.ejH(n),m,A.aK,m),new C.dw("Asteroids",q,new C.ejI(n),m,A.aK,m),new C.dw("Music",p,new C.ejJ(n),o,A.aK,m)],k),m,m)],k),A.m,m,A.e,A.R,0,A.p))},
c1t(d){var w,v,u,t,s,r=null,q=B.aY(d.z),p=d.c,o=p*8.317,n=new C.ejn(),m=B.m(20),l=B.H(q.j(0.6),A.r,1),k=B.p(r,r,A.h,r,r,new B.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=B.B(B.a([k,A.aa,B.D(B.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.la,r,r,r),1),B.aF(r,r,r,r,A.LJ,r,r,r,new C.ejm(this),r,r,r,r,r,A.c8)],w),A.m,r,A.e,A.j,0,r,r)
k=B.d(d.y,r,r,r,r,r,r,D.Hu,r,r,r)
v=n.$2("WIDTH",C.Fu(d.d*2)+" km")
u=p===0
p=B.B(B.a([v,A.aa,n.$2("FROM THE SUN",u?"\u2014":B.t(p)+" AU ("+C.Fu(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new C.ejo().$1(v))
t=d.f
v=B.B(B.a([v,A.aa,n.$2("ONE DAY",t>=48?A.k.a9(t/24,0)+" Earth days":A.k.a9(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=B.B(B.a([n.$2("GRAVITY",B.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.a9(50*t/9.81,s)+" kg"),A.aa,n.$2("TEMPERATURE",""+A.o.U(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.a9(o,1)+" minutes":A.k.a9(o/60,1)+" hours"
return B.p(r,B.v(B.a([j,A.av,k,A.P,p,A.P,v,A.P,s,A.P,B.B(B.a([t,A.aa,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.R,0,A.p),A.h,r,r,new B.o(D.Tq,r,l,m,r,r,A.n),r,r,r,r,D.acR,r,r,r)}}
C.bog.prototype={
a4(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=B.L()
w.r=D.zd.gq(0)
a7.aX(new B.a7(0,0,0+a5,0+a6),w)
v=new B.eU()
v.dM(8)
for(w=a7.a,u=0;u<110;++u){t=v.af()
s=v.af()
r=v.af()
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.af()*0.5).gq(0)
p=q.I()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc1s()
n=a5.w
if(a5.as)for(a6=A.d.gah(D.AU),t=new B.hK(a6,new C.eL5()),s=o.a,r=o.b;t.C();){q=a6.gT(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
m.b=A.ac
m.c=1
m.r=A.c.j(0.12).gq(0)
p=m.I()
w.drawCircle(s,r,q*n,p)
p.delete()}if(a5.ax)for(a6=a5.CW,t=o.a,s=o.b,r=a5.cx,u=0;u<a6.length;++u){q=a6[u]
m=a5.f
l=r[u]
k=q+m*0.0016/l
j=(l===0?0:30+150*Math.sqrt(l/30.1))*n
q=Math.cos(k)
m=Math.sin(k)
l=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
l.r=A.c.j(0.5).gq(0)
p=l.I()
w.drawCircle(t+q*j,s+m*j,0.9,p)
p.delete()}i=C.htK(A.d.gL(D.AU))*Math.sqrt(n)*1.4
a6=i*3.2
t=B.L()
s=x.O
t.sap(new B.bR(A.A,0.5,A.w,a4,0,B.a([A.aK.j(0.5),A.K],s),a4,a4).au(0,B.bT(o,a6)))
a7.ae(o,a6,t)
t=B.L()
t.sap(D.dWk.au(0,B.bT(o,i)))
a7.ae(o,i,t)
if(a5.at){h=C.fXq("Sun",10.5,A.af)
h.a4(a7,o.ao(0,new B.u(-h.b.c/2,i+4)))}for(a6=A.d.gah(D.AU),t=new B.hK(a6,new C.eL6()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gT(0)
g=l.c
j=g===0?0:30+150*Math.sqrt(g/30.1)
f=l.e
k=f<=0?0:6.283185307179586*(a5.f/f)+g*1.7
g=q+Math.cos(k)*j*n
f=m+Math.sin(k)*j*n
j=(1.5+1.6*Math.log(l.d/1000+1))*Math.sqrt(n)
e=B.aY(l.z)
d=l.a
if(d==="Saturn"){J.bD(w.save())
w.translate(g,f)
w.rotate(-22.91831180523293,0,0)
a0=B.cJ(A.J,j*1.3,j*4.2)
a1=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a1.b=A.ac
a1.c=j*0.45
a1.r=A.bH.j(0.55).gq(0)
p=a1.I()
w.drawOval(B.c8(a0),p)
p.delete()
w.restore()}a0=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a0.r=e.j(0.3).gq(0)
a0.z=A.qD
p=a0.I()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a1=B.aq(e,A.x,0.55)
a1.toString
a0.sap(new B.bR(N.pN,0.5,A.w,a4,0,B.a([A.c,e,a1],s),F.ZR,a4).au(0,B.bT(new B.u(g,f),j)))
p=a0.I()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
l.b=A.ac
l.c=2
l.r=A.c.gq(0)
p=l.I()
w.drawCircle(g,f,j+7,p)
p.delete()}if(r&&d==="Earth"){k=a5.f/27.3*2*3.141592653589793
a2=j+11*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a3.r=A.c.gq(0)
p=a3.I()
w.drawCircle(g+l*a2,f+a0*a2,1.8*a1,p)
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.cLu[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a3.r=A.af.gq(0)
p=a3.I()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=C.fXq(d,10.5,A.af)
h.a4(a7,new B.u(g+-h.b.c/2,f+(j+4)))}}},
ar(d){return!0}}
C.Tq.prototype={
S(){var w=x.i
return new C.aAD(new C.Nx(A.cB),B.bY(5,0,!1,w),B.bY(5,0,!1,w),B.bY(5,null,!1,x.cD),A.J,A.J,B.a([],x.g),$,A.bw,0,B.a([],x.X),null,null)}}
C.aAD.prototype={
cnW(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c1v(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.dM_
s.cy=new B.u(s.ay,0)
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
C.dG(150,"",400,0,0.5,"noise")
C.dG(90,"",300,1.5,0.6,"sine")
s.n(new C.dOV())},
Z(){this.a0()
this.kM()},
l4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.f9(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.xF[r]
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
if(q.a!=="Sun")C.dG(60+p*5,"",220,0.6,0.55,"sine")
break}}}if(A.d.ea(s,new C.dPn()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
i.cy=new B.u(k,s)
k=p+k*w
s=t+s*w
i.cx=new B.u(k,s)
j=Math.sqrt(k*k+s*s)
s=i.cy
k=i.cx
t=-398600/(j*j*j)
p=k.a
k=k.b
i.cy=new B.u(s.a+p*t*v,s.b+k*t*v)
i.dy+=w
if(Math.sqrt(p*p+k*k)<6371){i.CW=!1
C.dG(70,"",350,0,0.7,"noise")
break}}v=i.db
if(v.length===0||A.d.gaj(v).aE(0,i.cx).gcj()>120)v.push(i.cx)
if(v.length>700)A.d.cu(v,0)
if(i.cx.gcj()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bGC()
else n=n==="weight"?p.cuW():p.byZ()
w=x.p
v=B.a([],w)
for(u=0;u<3;++u){t=D.d_h[u]
v.push(new C.dw(t.b,p.d===t.a,new C.dP9(p,t),t.c,A.cP,o))}v=B.a([new C.eF(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=B.a([new C.dw("Hammer",!s,new C.dPa(p),Aa.XN,A.cP,o),new C.dw("Feather",s,new C.dPb(p),O.Xn,A.cP,o),new C.dw(q,r,new C.dPf(p),A.Eq,A.aY,o)],w)
q=p.w
A.d.v(v,B.a([new C.eF(r,o,o),C.hp(A.cP,""+A.k.U(q*100)+"%","Slow motion",1,0.05,new C.dPg(p),q),new C.eF(B.a([new C.ff(A.ux,"Drop!",new C.dPh(p),A.bh,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=C.hp(A.cP,""+A.k.U(s)+" kg","Your weight",120,20,new C.dPi(p),s)
r=p.ax
A.d.v(v,B.a([s,C.hp(A.cP,""+A.k.U(r*100)+" cm","Your jump",1.2,0.1,new C.dPj(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=C.hp(A.cP,A.k.a9(s,1)+" km/s","Speed",13,0,new C.dPk(p),s)
r=p.ch
A.d.v(v,B.a([s,C.hp(A.cP,A.k.a9(r,1)+"x out","View",8,0.5,new C.dPl(p),r),new C.eF(B.a([new C.ff(A.mL,"Fire!",p.gc1u(),A.bh,o),new C.ff(A.ux,"Falls",new C.dPm(p),A.c,o),new C.ff(A.rV,"Orbit 7.7",new C.dPc(p),A.c,o),new C.ff(D.btj,"Oval 9",new C.dPd(p),A.c,o),new C.ff(A.EH,"Escape",new C.dPe(p),A.c,o)],w),o,o)],w))}return C.jy(A.cP,A.fZ,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",B.v(v,A.m,o,A.e,A.R,0,A.p))},
bGC(){return new B.C(D.bfK,B.ck(new C.dOU(this)),null)},
cuW(){var w,v,u,t=null,s=[D.ehW,D.ejd,D.ejl,D.ejE,D.ejj,D.ejI,D.eir,D.ek0,D.ej_],r=x.p,q=B.a([D.eVu,A.T],r)
for(w=0;w<9;++w){v=s[w]
u=B.aY(v.c)
q.push(new B.C(A.cM,new B.cC(A.b0,A.e,A.j,A.m,t,A.p,t,0,B.a([new B.a5(62,t,new B.w(v.a,t,new B.F(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new B.bH(1,A.bo,new B.Am(new C.dOW(this,v),t),t)],r),t),t))}q.push(A.av)
q.push(D.eXC)
return B.cM(q,t,A.iK,t,t,A.ak,!1)},
byZ(){return B.ck(new C.dOS(this))}}
C.b7g.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.W(),e=B.L()
e.r=D.zd.gq(0)
d.aX(new B.a7(0,0,0+h,0+g),e)
w=new B.eU()
w.dM(2)
for(e=d.a,v=0;v<80;++v){u=w.af()
t=w.af()
s=w.af()
r=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.2+w.af()*0.5).gq(0)
q=r.I()
e.drawCircle(u*h,t*g,s*1.1+0.3,q)
q.delete()}h=j.c
p=6371*h
g=j.b
e=B.L()
e.sap(new B.bR(A.A,0.5,A.w,i,0,B.a([A.K,A.aY.j(0.35),A.K],x.O),D.cSw,i).au(0,B.bT(g,p*1.1)))
d.ae(g,p*1.06,e)
e=B.L()
e.sap(D.dWe.au(0,B.bT(g,p)))
d.ae(g,p,e)
o=g.ao(0,new B.u(0,-p))
f=f.r
e=x.v
n=new B.aO(f,A.ap,i,i,B.a([],e))
u=o.a
t=o.b
s=t+3
n.D(new B.b4(u-16,s))
n.D(new B.ao(u,t-400*h-4))
n.D(new B.ao(u+16,s))
n.D(new B.bE())
s=B.L()
s.r=A.aj.gq(0)
d.aM(n,s)
s=o.ao(0,new B.u(0,-400*h-6))
u=B.L()
u.r=A.c.gq(0)
d.ae(s,4,u)
u=j.e
if(u.length>1){e=B.a([],e)
m=new B.aO(f,A.ap,i,i,e)
f=g.a
t=g.b
m.D(new B.b4(f+A.d.gL(u).a*h,t+A.d.gL(u).b*h))
for(u=B.df(u,1,i,B.U(u).c),s=u.$ti,u=new B.bV(u,u.gJ(0),s.k("bV<ai.E>")),s=s.k("ai.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new B.ao(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bx(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.W()
f=B.L()
f.b=A.ac
f.c=2.4
f.d=A.bL
f.r=A.cP.j(0.9).gq(0)
d.aM(m,f)}if(j.f){f=j.d
k=g.ao(0,new B.u(f.a*h,f.b*h))
h=B.L()
h.r=A.cP.j(0.4).gq(0)
h.z=G.mc
d.ae(k,7,h)
h=B.L()
h.r=A.c.gq(0)
d.ae(k,4,h)}},
ar(d){return!0}}
C.U8.prototype={
S(){return new C.bh0(new B.co(null,x.A),$,A.bw,0,B.a([],x.X),null,null)}}
C.bh0.prototype={
Z(){this.a0()
this.kM()},
l4(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.NE[l.e],i=D.NE[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=B.a([B.aF(k,k,k,k,D.m8,k,k,k,new C.ecj(l,d),k,k,k,k,"Share",k)],u)
s=B.D(B.b2(k,k,k,new C.bnP(f,g,v,k),A.fa),1)
r=g.a
q=v<10?A.k.a9(v,1):C.Fu(v)
p=f.a
q=B.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.ja,A.L,k,k)
o=C.Fu(v*v*v)
n=A.a.c7(p,"s")?"":"s"
h=B.v(B.a([s,B.p(k,B.v(B.a([q,A.av,B.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,W.a4f,A.L,k,k),A.bA,B.d(p+": "+C.Fu(w*2)+" km wide. "+r+": "+C.Fu(h*2)+" km wide.",k,k,k,k,k,k,W.a4r,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.h,k,k,k,k,k,k,k,D.bhU,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=B.a([],u)
for(m=0;m<10;++m){w=D.NE[m]
r.push(new C.dw(w.a,l.e===m,new C.eck(l,m),k,B.aY(w.c),k))}w=B.a([],u)
for(m=0;m<10;++m){s=D.NE[m]
w.push(new C.dw(s.a,l.f===m,new C.ecl(l,m),k,B.aY(s.c),k))}return C.jy(A.bU,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new B.ep(h,l.d),"SIZE COMPARE",B.v(B.a([new C.eF(r,"FIRST",k),new C.eF(w,"SECOND",k)],u),A.m,k,A.e,A.R,0,A.p))}}
C.bnP.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.W()
w=B.L()
w.r=D.TT.gq(0)
d.aX(new B.a7(0,0,0+h,0+g),w)
v=new B.eU()
v.dM(6)
for(w=d.a,u=0;u<70;++u){t=v.af()
s=v.af()
r=v.af()
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.af()*0.4).gq(0)
p=q.I()
w.drawCircle(t*h,s*g,r+0.3,p)
p.delete()}o=Math.min(h/2-16,g/2-10)*0.98
n=Math.max(o/this.d,0.8)
h*=0.5
g*=0.5
m=new B.u(h,g)
w=new C.eJe(d)
t=this.c
w.$3(m,o,B.aY(t.c))
s=o-n
l=new B.u(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,B.aY(s.c))
w=B.L()
w.b=A.ac
w.c=1.4
w.r=A.af.gq(0)
d.ae(l,n+3,w)
k=B.ib(i,i,i,i,B.dl(i,i,i,i,i,i,i,i,i,D.eHJ,s.a),A.a5,A.cg,i,A.ek,A.cf)
k.f_()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbh(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbh(g)-6
h=g}k.a4(d,l.ao(0,new B.u(-w/2,h)))
j=B.ib(i,i,i,i,B.dl(i,i,i,i,i,i,i,i,i,D.eKT,t.a),A.a5,A.cg,i,A.ek,A.cf)
j.f_()
t=j.b
h=t.c
t=t.a.c
j.a4(d,m.ao(0,new B.u(-h/2,-t.gbh(t)/2)))},
ar(d){return!0}}
C.aIK.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.bto.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
w=this.fb$
w===$&&B.c()
w.p()
this.bpS()}}
C.aJj.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.btC.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
w=this.fb$
w===$&&B.c()
w.p()
this.bqr()}}
C.aJm.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.btE.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
w=this.fb$
w===$&&B.c()
w.p()
this.bqu()}}
C.O_.prototype={}
C.Su.prototype={
S(){return C.htH()}}
C.bfJ.prototype={
Z(){this.a0()
this.kM()},
l4(d){var w,v,u,t,s,r=this
r.f+=d
r.e.f9(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
C.dG(70,"",500,0.3,0.5,"sine")}}A.d.bm(w,new C.dxk())},
aVt(d){var w,v,u,t=this.Q
if(t.A(0,A.at))return
w=this.gb33()
v=d.aE(0,new B.u(t.a/2,t.b*0.42))
u=A.k.E(v.gcj()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new C.O_(t,u,1.2,new B.ws(1,30+A.cB.af()*40,0.9,0.7).iu()))
C.l3("bell",60+A.k.U(12-u)*2,400,0.35)},
gb33(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.E(m.length===0?3:new B.J(m,new C.dx8(),B.U(m).k("J<1,O>")).fv(0,A.vR),1.0001,99))
m=x.p
w=B.a([B.aF(n,n,n,n,D.m8,n,n,n,new C.dx9(o,d),n,n,n,n,"Share",n)],m)
v=B.ck(new C.dxa(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.a9(s,0)+" Suns":C.fcu(s)+" Suns"
t=C.hp(A.bB,s,"Mass",1,0,new C.dxc(o),u/t)
u=B.a([new C.dw("Star (10)",!1,new C.dxd(o),n,A.bB,n),new C.dw("Cygnus X-1 (21)",!1,new C.dxe(o),n,A.bB,n),new C.dw("Milky Way core (4 million)",!1,new C.dxf(o),n,A.bB,n),new C.dw("M87 (6.5 billion)",!1,new C.dxg(o),n,A.bB,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lt:D.EG
return C.jy(A.bB,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",B.v(B.a([t,new C.eF(u,"LIKE",n),new C.eF(B.a([new C.dw("Glowing ring",s,new C.dxh(o),n,A.bB,n),new C.dw("Bent light",r,new C.dxi(o),n,A.bB,n),new C.dw("Music",q,new C.dxj(o),p,A.bB,n),new C.ff(A.jM,"Clear",new C.dxb(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.R,0,A.p))},
ac2(d,e){var w=null
return B.D(B.v(B.a([B.d(d,w,w,w,w,w,w,D.eDP,w,w,w),A.bA,B.d(e,w,2,w,w,w,w,K.a4a,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
C.b6F.prototype={
a4(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.W()
w=B.L()
w.r=D.b6g.gq(0)
b2.aX(new B.a7(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new B.u(w,v)
t=this.b
s=t.gb33()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,B.K)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new B.u(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+A.k.E(o/h,0,n)
i=new B.u(w+k/h*g,v+j/h*g)}}k=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
k.r=A.c.j(0.6).gq(0)
f=k.I()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=B.L()
b0.b=A.ac
b0.c=2
b0.r=A.c.j(0.25).gq(0)
b0.z=E.OM
b2.ae(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=B.aq(A.w6,A.fU,d)
n.toString
k=Math.cos(a4)
$.W()
j=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
g=a5?1:0.85
j.r=n.j(r*(0.4+(0.5+0.5*k)*0.6)*g).gq(0)
f=j.I()
p.drawCircle(w+a6,v+o*a0*0.28,1.3,f)
f.delete()
if(!a5&&t.x){o=Math.sin(-a4)
k=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
k.r=n.j(b1).gq(0)
f=k.I()
p.drawCircle(w+a6*0.5,v+(q*Math.abs(o)*0.6-b0),1,f)
f.delete()}}}b0=s*1.25
$.W()
b1=B.L()
b1.sap(new B.bR(A.A,0.5,A.w,null,0,B.a([A.x,A.x.j(0)],x.O),D.cyp,null).au(0,B.bT(u,b0)))
b2.ae(u,b0,b1)
b1=B.L()
b1.r=A.x.gq(0)
b2.ae(u,s,b1)
b1=B.L()
b1.b=A.ac
b1.c=1
b1.r=A.bB.j(0.55).gq(0)
b2.ae(u,s,b1)
for(b0=t.z,b1=b0.length,m=0;m<b0.length;b0.length===b1||(0,B.K)(b0),++m){a7=b0[m]
a0=s*a7.b
t=w+Math.cos(a7.a)*a0
r=v+Math.sin(a7.a)*a0*0.9
a8=1+A.k.E(3.5/a7.b,0,5)
a9=3*a8
q=-Math.sin(a7.a)*a9
o=Math.cos(a7.a)*a9
n=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
n.c=4.2/Math.sqrt(a8)
n.d=A.bL
k=a7.d
n.r=k.j(A.k.E(a7.b/2,0.2,1)).gq(0)
f=n.I()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
o.r=k.j(0.2).gq(0)
o.z=G.mc
f=o.I()
p.drawCircle(t,r,6,f)
f.delete()}},
ar(d){return!0}}
C.acy.prototype={}
C.Tm.prototype={
S(){var w=x.r,v=x.g
return new C.bg7(new B.co(null,x.A),new C.Nx(A.cB),B.a([],w),A.J,A.J,B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.a([],v),A.J,A.J,$,A.bw,0,B.a([],x.X),null,null)}}
C.bg7.prototype={
Z(){this.a0()
this.Y2()
this.kM()},
Y2(){var w,v,u,t,s,r,q,p,o=this,n=new B.eU()
n.dM(5)
w=B.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.af(),1.6)
w.push(new C.acy(t,n.af()*3.141592653589793*2,(n.af()-0.5)*0.5*t,25+n.af()*20))}else{t=Math.pow(n.af(),0.8)
s=n.aB(o.f)
r=n.af()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.he()?0:3.141592653589793
q=r+(n.af()-0.5)*0.25}r=n.af()
p=t<0.25?35+n.af()*15:205+n.af()*50
w.push(new C.acy(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cnN(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.dNn
k.cx=D.dNq
w=new B.eU()
w.dM(9)
v=k.cy
A.d.a7(v)
u=B.a([],x.r)
for(t=0;t<900;++t)u.push(new C.acy(Math.pow(w.af(),0.8)*0.7,w.af()*3.141592653589793*2,0,320+w.af()*30))
A.d.v(v,u)
u=x.g
s=B.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,B.K)(v),++q){p=v[q]
o=p.b
n=p.a
s.push(new B.u(Math.cos(o)*n,Math.sin(o)*n))}k.dx=s
s=B.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,B.K)(v),++q){p=v[q]
o=p.b
n=p.a+0.2
s.push(new B.u(-Math.sin(o)*0.55/Math.sqrt(n),Math.cos(o)*0.55/Math.sqrt(n)))}k.fr=s
v=B.a([],u)
for(s=k.ay,r=x.S,s=B.df(s,0,B.dK(900,"count",r),B.U(s).c),o=s.$ti,s=new B.bV(s,s.gJ(0),o.k("bV<ai.E>")),o=o.k("ai.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new B.u(l*n,Math.sin(m)*n))}k.db=v
v=B.a([],u)
for(u=k.ay,u=B.df(u,0,B.dK(900,"count",r),B.U(u).c),r=u.$ti,u=new B.bV(u,u.gJ(0),r.k("bV<ai.E>")),r=r.k("ai.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new B.u(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
C.dG(110,"",900,0.5,0.45,"sine")},
l4(d){var w,v,u,t,s,r,q,p=this
p.e.f9(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aE(0,p.fx)
s=Math.max(0.25,t.gcj())
r=t.ez(0,s).aN(0,0.9/(s*s))
w=p.fy.ao(0,r.aN(0,u))
p.fy=w
v=p.cx.aE(0,r.aN(0,u))
p.cx=v
w=p.fx.ao(0,w.aN(0,u))
p.fx=w
v=p.CW.ao(0,v.aN(0,u))
p.CW=v
q=new C.dNs(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=B.a([B.aF(r,r,r,r,D.m8,r,r,r,new C.dNi(s,d),r,r,r,r,"Share",r)],q),o=B.b2(r,r,r,new C.bbR(s,r),A.at),n=A.x.j(0.5),m=B.m(14),l=B.H(A.bG,A.r,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=B.a([o,B.an(8,B.p(r,B.d(w,r,r,r,r,r,r,A7.a42,r,r,r),A.h,r,r,new B.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bS,r,r,r),r,r,10,10,r,r)],q)
l=B.a([],q)
for(v=0;v<3;++v){u=D.cOo[v]
o=s.Q===u.a&&!s.ch
l.push(new C.dw(u.b,o,new C.dNj(s,u),r,A.h4,r))}l.push(new C.dw("Collide",s.ch,new C.dNk(s),A.wX,A.bU,r))
o=B.a([new C.eF(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=C.hp(A.h4,""+n,"Arms",6,2,new C.dNl(s),n)
l=s.r
A.d.v(o,B.a([n,C.hp(A.h4,A.k.a9(l,1),"Winding",6,0.8,new C.dNm(s),l)],q))}n=s.as
o.push(C.hp(A.h4,""+A.k.U(n*90)+"\xb0","Tilt",1,0.15,new C.dNn(s),n))
n=s.ax
o.push(C.hp(A.h4,A.k.a9(n,1)+"x","Speed",4,0,new C.dNo(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lt:D.EG
o.push(new C.eF(B.a([new C.dw("Dark matter",n,new C.dNp(s),r,A.bB,r),new C.dw("You are here",l,new C.dNq(s),r,A.aK,r),new C.dw("Music",w,new C.dNr(s),t,A.h4,r)],q),r,r))
return C.jy(A.h4,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new B.ep(new B.am(A.W,r,A.b_,A.q,m,r),s.d),"GALAXY",B.v(o,A.m,r,A.e,A.R,0,A.p))}}
C.bbR.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.W()
w=B.L()
w.r=D.b7Z.gq(0)
a3.aX(new B.a7(0,0,0+a1,0+a2),w)
v=new B.eU()
v.dM(3)
for(w=a3.a,u=0;u<90;++u){t=v.af()
s=v.af()
r=v.af()
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.15+v.af()*0.4).gq(0)
p=q.I()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new B.u(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=B.L()
t.sap(new B.bR(A.A,0.5,A.w,a0,0,B.a([A.aB.j(0.32),A.aB.j(0.12),A.K],x.O),D.bXq,a0).au(0,B.bT(o,a2)))
a3.ae(o,a2,t)}m=new C.d39(a1.as)
a2=n*0.3
t=B.L()
t.sap(new B.bR(A.A,0.5,A.w,a0,0,B.a([A.h5.j(0.85),A.aZ.j(0.3),A.K],x.O),a0,a0).au(0,B.bT(o,a2)))
a3.ae(o,a2,t)
if(!a1.ch){l=B.L()
for(a2=a1.ay,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.K)(a2),++k){j=a2[k]
s=j.a
i=a1.x?1/(0.25+s*0.9):1/Math.pow(s+0.18,1.5)*0.35
r=a1.at
q=Math.min(i,6)
h=j.b
g=m.$6(Math.cos(h)*s,Math.sin(h)*s,j.c,o,r*q*0.5,n)
q=j.d
r=A.k.F(q,360)
l.r=new H.mv(1,r,q>200?0.45:0.55,1).iu().j(0.35+(1-s)*0.5).gq(0)
s=s<0.3?1.3:1
p=l.I()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.W()
a2=B.L()
a2.b=A.ac
a2.c=1.6
a2.r=A.aK.gq(0)
a3.ae(g,9,a2)
f=B.ib(a0,a0,a0,a0,D.eB3,A.a5,A.cg,a0,A.ek,A.cf)
f.f_()
f.a4(a3,g.ao(0,new B.u(-f.b.c/2,12)))}}else{e=n*0.8
l=B.L()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.K)(a2),++k){d=a2[k]
l.r=D.b9_.j(0.6).gq(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.I()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.K)(a2),++k){d=a2[k]
l.r=D.b4D.j(0.6).gq(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.I()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.W()
w=B.L()
w.r=A.h5.gq(0)
a3.ae(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=B.L()
w.r=A.ie.gq(0)
a3.ae(a1,5,w)}},
ar(d){return!0}}
C.U4.prototype={
S(){return new C.bh_(new B.co(null,x.A),new C.Nx(A.cB),$,A.bw,0,B.a([],x.X),null,null)}}
C.bh_.prototype={
Z(){this.a0()
this.kM()},
l4(d){var w,v,u,t=this
t.e.f9(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.F(t.r+d*0.04*v,1)
else{w=A.k.F(t.w+d*0.05*v,1)
t.w=w
u=A.k.bt(w*4)
if(u!==A.k.bt(t.as))C.l3("bell",60+u*4,500,0.35)
t.as=u}},
gcjA(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcan(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=B.a([B.aF(q,q,q,q,D.m8,q,q,q,new C.ec_(r,d),q,q,q,q,"Share",q)],p),n=B.D(new B.ep(B.b2(q,q,q,new C.bn6(r,q),A.fa),r.d),1)
if(r.f==="seasons")w=r.gcjA()
else{w=r.gcan()
v=A.k.ak(A.k.E(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=B.v(B.a([n,B.p(q,B.d(w,q,q,q,q,q,q,Y.R6,A.L,q,q),A.h,q,q,q,q,q,q,q,E.ad0,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?V.x8:A.iM
t=r.Q
s=t?A.lt:D.EG
s=B.a([new C.eF(B.a([new C.dw("Seasons",n==="seasons",new C.ec0(r),A.xm,A.br,q),new C.dw("Moon phases",n==="moon",new C.ec1(r),A.uu,A.br,q),new C.dw(u,!1,new C.ec2(r),v,A.br,q),new C.dw("Music",t,new C.ec3(r),s,A.br,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=C.hp(A.br,D.cNK[A.o.F(A.k.bt(n*12),12)],"Month",1,0,new C.ec4(r),n)
v=r.z
A.d.v(s,B.a([n,C.hp(A.br,A.k.a9(v,1)+"\xb0","Tilt",90,0,new C.ec5(r),v)],p))}else{p=r.w
s.push(C.hp(A.br,""+(A.k.bt(p*29.5)+1),"Day of month",1,0,new C.ec6(r),p))}p=r.y
s.push(C.hp(A.br,A.k.a9(p,1)+"x","Speed",4,0.2,new C.ec7(r),p))
return C.jy(A.br,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",B.v(s,A.m,q,A.e,A.R,0,A.p))}}
C.bn6.prototype={
a4(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.W(),b8=B.L()
b8.r=D.zd.gq(0)
b9.aX(new B.a7(0,0,0+b5,0+b6),b8)
w=new B.eU()
w.dM(4)
for(b8=b9.a,v=0;v<70;++v){u=w.af()
t=w.af()
s=w.af()
r=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.2+w.af()*0.4).gq(0)
q=r.I()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new B.u(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=B.cJ(p,n*2,o*2)
t=B.L()
t.b=A.ac
t.c=1
t.r=A.b9.gq(0)
b9.j3(u,t)
t=B.L()
t.sap(D.dWg.au(0,B.bT(p,34)))
b9.ae(p,22,t)
m=s.r*2*3.141592653589793
l=p.ao(0,new B.u(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aE(0,l).ez(0,p.aE(0,l).gcj())
J.bD(b8.save())
b8.translate(l.a,l.b)
s=B.L()
s.r=D.b6c.gq(0)
b9.ae(A.J,k,s)
J.bD(b8.save())
b7=new B.aO(b7.r,A.ap,b4,b4,B.a([],x.v))
b7.D(new B.kz(B.bT(A.J,k)))
b9.tk(0,b7)
b7=i.aN(0,k).aN(0,0.35)
s=k*1.1
b6=B.L()
b6.sap(D.dWp.au(0,B.bT(A.J,s)))
b9.ae(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new B.u(s,b6)
b7=new B.u(-s,-b6).aN(0,k).aN(0,1.7)
b5=h.aN(0,k).aN(0,1.7)
t=B.L()
t.c=2
t.r=A.cD.gq(0)
b9.bE(b7,b5,t)
t=h.aN(0,k).aN(0,1.7)
b5=B.L()
b5.r=A.cD.gq(0)
b9.ae(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=B.ib(b4,b4,b4,b4,B.dl(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aLc,b5),A.a5,A.cg,b4,A.ek,A.cf)
f.f_()
f.a4(b9,l.ao(0,new B.u(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=B.L()
r.b=A.ac
r.c=1
r.r=A.b9.gq(0)
b9.ae(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a0.r=A.aK.j(0.6).gq(0)
a0.c=2
q=a0.I()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=B.L()
r.sap(new B.bR(new B.d6(-0.5,0),1.1,A.w,b4,0,B.a([D.b2m,D.ab9],x.O),D.cFD,b4).au(0,B.bT(p,k)))
b9.ae(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ao(0,new B.u(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=B.L()
r.r=D.b05.gq(0)
b9.ae(a1,a2,r)
J.bD(b8.save())
b7=b7.r
r=x.v
d=new B.aO(b7,A.ap,b4,b4,B.a([],r))
d.D(new B.kz(B.bT(a1,a2)))
b9.tk(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=B.L()
a3.r=A.c3.gq(0)
b9.aX(new B.a7(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aE(0,p).ez(0,a1.aE(0,p).gcj())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=D.bXp[a5]
a7=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
a7.r=A.aY.j(0.45).gq(0)
a7.z=A.j7
q=a7.I()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new B.u(u,t)
a9=Math.min(b5,b6)*0.1
b6=B.L()
b6.r=D.b01.gq(0)
b9.ae(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bD(b8.save())
b6=new B.aO(b7,A.ap,b4,b4,B.a([],r))
b6.D(new B.kz(B.bT(a8,a9)))
b9.tk(0,b6)
s=s.w
b1=new B.aO(b7,A.ap,b4,b4,B.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.D(new B.b4(u,b5))
b6=b2>0
b1.azf(new B.u(u,t+a9),b6,new B.b1(a9,a9))
if(b0<0.5)b6=b2<0
b1.azf(new B.u(u,b5),b6,new B.b1(a9*Math.abs(1-2*b0),a9))
b6=B.L()
b6.r=A.c3.gq(0)
b9.aM(b1,b6)
b8.restore()
b8=B.L()
b8.b=A.ac
b8.c=1
b8.r=A.b9.gq(0)
b9.ae(a8,a9,b8)
b3=B.ib(b4,b4,b4,b4,D.eB4,A.a5,A.cg,b4,A.ek,A.cf)
b3.f_()
b3.a4(b9,a8.ao(0,new B.u(-b3.b.c/2,a9+6)))}},
ar(d){return!0}}
C.aIh.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.btg.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
w=this.fb$
w===$&&B.c()
w.p()
this.bpn()}}
C.aIF.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.btn.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
w=this.fb$
w===$&&B.c()
w.p()
this.bpM()}}
C.aJi.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.btB.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].aa(0)
w=this.fb$
w===$&&B.c()
w.p()
this.bqq()}}
var z=a.updateTypes(["~()","S(rQ)","S(a2q)","aw<~>()","S(Bk)","I(rQ,I)","O(O,rQ)","S(Bg)","S(Xm)","S(a9d)","S(uu)","S(a19)","S(n_)","S(YT)","S(aa0)","I(I)","SA()","Ta()","Sq()","To()","TH()","TJ()","Sz()","U2()","Uh()","U3()","U_()","Uo()","Sy()","Ut()","S(md)","TU()","TZ()","acD(Y,I)","aby(Y,I)","~(a1<@,@>)","I(Bg,Bg)","n(fc)","S(act)","S(ZA)","S(Bu)","S(a9I)","S(abC)","S(a9r)","I(I,qd)","I(I,Bk)","n(qd)","~(qd,ak<n>,I)","qd?(Bk)","S(qd)","r(n,Zn)","S(Og)","~(zz)","S(a9y)","O(I?)","Uv()","S(Ew)","S(aaP)","O(I)","Tb()","O(O_)","S(a89)","Sv()","a6f()","~(agv,n,u,x,O)","~(n,rQ)","TX()","TC(Y)","U0(Y,bm<O>,bm<O>)","Uu(Y,bm<O>,bm<O>)","Uz()","Ti()","Sw()","T9()","TV()","U7()","Us()","TT()","~(n)","cp(a8V)","S(a8U)","Tp()","Ug()","Tq()","Su()","Tm()","U8()","U4()","SV()","S(O_)","~(b8)"])
C.few.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
C.f6h.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gL(d.e.split(". "))+"."},
$S:z+37}
C.fbT.prototype={
$1(d){var w
if(!this.a.Kd(d))w=Math.abs(d.dy)>0.002||d.fr>0.05
else w=!1
return w},
$S:z+1}
C.fbU.prototype={
$1(d){return d.x},
$S:z+1}
C.fet.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
C.feu.prototype={
$1(d){var w
if(!this.a.Kd(d))w=d.fr>0.05||Math.abs(d.dy)>0.002
else w=!1
return w},
$S:z+1}
C.fev.prototype={
$2(d,e){var w=Math.abs(e.dy)
return w>d?w:d},
$S:z+6}
C.dW8.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dW9.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.A(this.b,this.c))},
$S:0}
C.dWa.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gcV(v).Q
v.toString
w.lE(v,A.dS,A.i3)}},
$S:8}
C.dWl.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a7(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.dWm.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.dWh.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.dWf.prototype={
$2(d,e){var w=this.a
w.r.push(B.cP(B.dB(0,0,0,d,0,0),new C.dWg(w,this.b,e)))},
$S:1798}
C.dWg.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.dWi.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gUf().ah1(0,u[1],u[2],u[3])
u[4].bG(0,new C.dWd(t))
v.e.m(0,t.a,0)
w.d.m(0,u[0],t)
C.dG(700+w.e*120,"",80,0,0.25,"square")
v.n(new C.dWe(w.a,v,w.f,w.r))},
$S:0}
C.dWd.prototype={
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
C.dWe.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.k.bt(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.dWj.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gUf().ahL(t,u[1],s,u[3])
C.dG(1500,"",45,0,0.25,"tri")
v=w.b
v.n(new C.dWc(w.a,v,w.e,w.f))},
$S:0}
C.dWc.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.k.bt(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.dWk.prototype={
$0(){C.dG(300,"",360,-1.2,0.3,"square")
var w=this.a
w.n(new C.dWb(w,this.b))},
$S:0}
C.dWb.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.dWp.prototype={
$0(){var w=this.a
return w.n(new C.dWo(w))},
$S:0}
C.dWo.prototype={
$0(){return this.a.at=!0},
$S:0}
C.dWq.prototype={
$0(){var w=this.a
return w.n(new C.dWn(w))},
$S:0}
C.dWn.prototype={
$0(){return this.a.at=!1},
$S:0}
C.dWr.prototype={
$0(){var w=this.a
w.f.saU(0,this.b)
w.LW()},
$S:0}
C.dWs.prototype={
$0(){return this.a.Wd(this.b)},
$S:0}
C.dWt.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.LW():w.aRB()},
$S:2}
C.dWu.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.LW():w.aRB()},
$S:0}
C.eaE.prototype={
$2(d,e){return d+e},
$S:1799}
C.eaY.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.eaX(w,d))},
$S:130}
C.eaX.prototype={
$0(){var w=B.aN(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eaZ.prototype={
$0(){},
$S:0}
C.eb_.prototype={
$0(){},
$S:0}
C.eaG.prototype={
$0(){return this.a.n(new C.eaF(this.b,this.c))},
$S:0}
C.eaF.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eav.prototype={
$1(d){return this.a.cx===d},
$S:60}
C.eaw.prototype={
$1(d){return this.a.cx=d},
$S:27}
C.eax.prototype={
$1(d){return this.a.cy===d},
$S:60}
C.eay.prototype={
$1(d){return this.a.cy=d},
$S:27}
C.eaz.prototype={
$1(d){return this.a.db===d},
$S:60}
C.eaA.prototype={
$1(d){return this.a.db=d},
$S:27}
C.eaB.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:60}
C.eaC.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.K(0,d)},
$S:27}
C.eaD.prototype={
$0(){var w=this.a
return w.n(w.gatg())},
$S:0}
C.eat.prototype={
$1(d){return this.a.$1(!0)},
$S:82}
C.eau.prototype={
$1(d){return this.a.$1(!1)},
$S:152}
C.eas.prototype={
$1(d){return this.a.$1(!1)},
$S:207}
C.eaR.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.as(e.b,e.d)
o.ch=n
n=B.b2(p,p,p,new C.bdw(o,p),n)
w=this.b
v=C.bvX("WORLD",w.a,w.c)
u=C.bvX("GRAVITY",B.t(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.U(t*100)
t=t<0.25?A.cD:A.bh
t=C.bvX("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.U(s*100)
s=s>D.AO[o.db].d?A.cD:A.c
q=x.p
s=B.a([v,u,t,C.bvX("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(C.bvX("HEIGHT",""+A.k.U(A.k.E(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.an(p,B.B(s,A.m,p,A.hF,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bxY(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.qx[w].a+".":"You landed on every world!"
v=B.a([new C.ff(A.m5,"Again",new C.eaM(o),A.c,p),new C.ff(A.wY,"Rebuild",new C.eaN(o),A.aK,p)],q)
if(o.d+1<7)v.push(new C.ff(A.jl,"Next world",new C.eaO(o),A.bh,p))
n.push(C.h01("Perfect landing!",w,A.bh,v))}if(o.as==="crashed")n.push(C.h01("Crash!",o.at,A.cD,B.a([new C.ff(A.m5,"Try again",new C.eaP(o),A.bh,p),new C.ff(A.wY,"Rebuild",new C.eaQ(o),A.aK,p)],q)))
return new B.am(A.W,p,A.b_,A.q,n,p)},
$S:61}
C.eaM.prototype={
$0(){var w=this.a
return w.n(w.gatg())},
$S:0}
C.eaN.prototype={
$0(){var w=this.a
return w.n(new C.eaJ(w))},
$S:0}
C.eaJ.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eaO.prototype={
$0(){var w=this.a
return w.n(new C.eaI(w))},
$S:0}
C.eaI.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.eaP.prototype={
$0(){var w=this.a
return w.n(w.gatg())},
$S:0}
C.eaQ.prototype={
$0(){var w=this.a
return w.n(new C.eaH(w))},
$S:0}
C.eaH.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eaS.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.n(new C.eaL(v,w))},
$S:0}
C.eaL.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.eaT.prototype={
$1(d){return this.a.y=d},
$S:9}
C.eaU.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.eaV.prototype={
$1(d){return this.a.z=d},
$S:9}
C.eaW.prototype={
$0(){var w=this.a
return w.n(new C.eaK(w))},
$S:0}
C.eaK.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dxM.prototype={
$0(){var w=0,v=B.j(x.P),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=$.fWs
if(q==null)q=$.fWs=C.czq()
w=3
return B.b(B.iD(B.a([q,$.ty().baW("assets/data/three.min.js")],x.aJ),x.C),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.k9(0,B.cK(J.q(s,1)))
q.n(new C.dxL(q,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:52}
C.dxL.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
C.dxo.prototype={
$0(){return this.a.bOM(B.aS(J.q(this.b,"group")))},
$S:0}
C.dxp.prototype={
$1(d){return A.a.aS(A.o.fG(A.o.E(A.k.U(d*255),0,255),16),2,"0")},
$S:362}
C.dxN.prototype={
$0(){return C.a6e("kick",0.25)},
$S:0}
C.dxq.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dxr.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.dxs.prototype={
$0(){return C.a6e("kick",0.5)},
$S:0}
C.dxt.prototype={
$0(){return C.dG(1300+this.a.R8.aB(900),"",40,0,0.2,"square")},
$S:0}
C.dxv.prototype={
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
u=w}if(u.cx!=null&&!A.d.ba(u.d.e,new C.dxu(u)))u.cx=null
u.go=0},
$S:0}
C.dxu.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.auQ(d)},
$S:z+11}
C.dxl.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
C.dxm.prototype={
$0(){var w=this.a
return w.n(w.gbYS())},
$S:0}
C.dxn.prototype={
$0(){return this.a.aeJ(null)},
$S:0}
C.dxC.prototype={
$0(){var w=this.a.as
return w==null?null:w.eM(0,B.E(["t","shot"],x.N,x.z))},
$S:0}
C.dxD.prototype={
$0(){return this.a.crM(this.b.a)},
$S:0}
C.dxE.prototype={
$0(){return this.a.aeJ(this.b)},
$S:0}
C.dxF.prototype={
$1(d){var w=this.a
return w.n(new C.dxB(w,d))},
$S:6}
C.dxB.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.dxG.prototype={
$0(){var w=this.a
return w.n(new C.dxA(w,this.b))},
$S:0}
C.dxA.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.dxH.prototype={
$0(){var w=this.a
return w.n(new C.dxz(w))},
$S:0}
C.dxz.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.dxI.prototype={
$0(){var w=this.a
return w.n(new C.dxy(w))},
$S:0}
C.dxy.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eM(0,B.E(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.Im},
$S:0}
C.dxJ.prototype={
$0(){var w=this.a
return w.n(new C.dxx(w))},
$S:0}
C.dxx.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aU6()
else w.p2=null},
$S:0}
C.dxK.prototype={
$0(){var w=this.a
return w.n(new C.dxw(w))},
$S:0}
C.dxw.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
C.bWK.prototype={
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
C.bWL.prototype={
$1(d){var w=new B.r9([],[]).oS(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:478}
C.f0Q.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)&&w.h(d,1)},
$S:231}
C.f0R.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)||w.h(d,1)},
$S:231}
C.f0S.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)!==w.h(d,1)},
$S:231}
C.f0Z.prototype={
$1(d){return!J.q(d,0)},
$S:231}
C.f1_.prototype={
$1(d){var w=J.a8(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:231}
C.f10.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:231}
C.dzX.prototype={
$1(d){return this.a.aq2(0)},
$S:8}
C.dzB.prototype={
$0(){var w=this.b
return this.a.cx=new B.J(w,B.hGx(),B.U(w).k("J<1,I>")).fH(0)},
$S:0}
C.dzE.prototype={
$1(d){return""+d},
$S:83}
C.dzY.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dzz.prototype={
$1(d){return this.a.aq2(this.b)},
$S:8}
C.dzA.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.atB(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.m2(0,d,a1.lv(0.15,0.3))
u=a1.m2(0,d,a1.lv(0.15,0.62))
t=a1.m2(0,"and",a1.lv(0.48,0.46))
s=a1.m2(0,a0,a1.lv(0.82,0.46))
a1=t.a
w.push(new C.n_(v.a,a1,0))
w.push(new C.n_(u.a,a1,1))
w.push(new C.n_(a1,s.a,0))
break
case 1:v=a1.m2(0,d,a1.lv(0.12,0.25))
u=a1.m2(0,d,a1.lv(0.12,0.65))
r=a1.m2(0,"xor",a1.lv(0.46,0.25))
q=a1.m2(0,"and",a1.lv(0.46,0.65))
p=a1.atA(0,a0,a1.lv(0.82,0.25),0)
o=a1.atA(0,a0,a1.lv(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.n_(a1,n,0))
m=u.a
w.push(new C.n_(m,n,1))
l=q.a
w.push(new C.n_(a1,l,0))
w.push(new C.n_(m,l,1))
w.push(new C.n_(n,p.a,0))
w.push(new C.n_(l,o.a,0))
break
case 2:k=a1.m2(0,"clock",a1.lv(0.15,0.4))
j=a1.m2(0,"not",a1.lv(0.45,0.65))
s=a1.m2(0,a0,a1.lv(0.82,0.3))
i=a1.m2(0,"buzzer",a1.lv(0.82,0.65))
a1=k.a
w.push(new C.n_(a1,s.a,0))
n=j.a
w.push(new C.n_(a1,n,0))
w.push(new C.n_(n,i.a,0))
break
default:h=a1.m2(0,d,a1.lv(0.12,0.25))
g=a1.m2(0,d,a1.lv(0.12,0.7))
f=a1.m2(0,"nor",a1.lv(0.5,0.25))
e=a1.m2(0,"nor",a1.lv(0.5,0.7))
s=a1.m2(0,a0,a1.lv(0.86,0.25))
a1=f.a
w.push(new C.n_(g.a,a1,0))
n=e.a
w.push(new C.n_(n,a1,1))
w.push(new C.n_(h.a,n,0))
w.push(new C.n_(a1,n,1))
w.push(new C.n_(a1,s.a,0))}},
$S:0}
C.dzF.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.atB(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.m(0,p,new C.Bg(p,"switch",new B.u(0.14*q.a,r*q.b),0))}o.m2(0,w.e,o.lv(0.86,0.5))},
$S:0}
C.dzu.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dzv.prototype={
$2(d,e){return A.k.aI(d.c.b,e.c.b)},
$S:z+36}
C.dzw.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dzx.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dzy.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.aaa(this.c)
if(v.ax)C.AG("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gL(w)
v.CW=!1
if(v.ax)C.dG(140,"",250,0,0.3,"square")}},
$S:0}
C.dzG.prototype={
$0(){},
$S:0}
C.dzH.prototype={
$0(){return A.d.cu(this.a.e,this.b)},
$S:0}
C.dzI.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dzD.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bm(w.e,new C.dzC(v))
w.cy=null},
$S:0}
C.dzC.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
C.dzt.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.m2(0,this.b,new B.u(w.x.a*(0.3+v.af()*0.4),w.x.b*(0.2+v.af()*0.6))).a},
$S:0}
C.dzR.prototype={
$0(){var w=this.a
return w.n(new C.dzQ(w))},
$S:0}
C.dzQ.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dzS.prototype={
$2(d,e){var w=null,v=this.a,u=new B.as(e.b,e.d)
v.x=u
return B.aH(A.c5,B.jB(B.b2(w,w,w,new C.b7I(v,w),u),A.q,w),A.z,!1,w,w,w,w,w,w,w,w,new C.dzL(v),w,w,w,new C.dzM(v),new C.dzN(v),new C.dzO(v),w,w,w,w,w,w,w,w,w,w,new C.dzP(v),w,w,w,!1,A.ae)},
$S:33}
C.dzP.prototype={
$1(d){return this.a.bZR(d.b)},
$S:53}
C.dzN.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.c7b(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aum(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aE(0,u)}},
$S:40}
C.dzO.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.u(A.k.E(w.a+u.Q.a,46,u.x.a-46),A.k.E(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
C.dzM.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bSk(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bm(v,new C.dzJ(w))
u=t.as
u.toString
v.push(new C.n_(u,w.a,w.b))
B.jF()}}t.z=t.as=null},
$S:36}
C.dzJ.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
C.dzL.prototype={
$1(d){return this.a.asz(d.b)},
$S:312}
C.dzT.prototype={
$0(){return this.a.btY(this.b.a)},
$S:0}
C.dzU.prototype={
$0(){return this.a.aq2(this.b.a)},
$S:0}
C.dzV.prototype={
$0(){var w=this.a
return w.n(new C.dzK(w))},
$S:0}
C.dzK.prototype={
$0(){var w=this.a
w.atB(0)
w.ay=null},
$S:0}
C.dzW.prototype={
$0(){return this.a.cnK(this.b)},
$S:0}
C.cGc.prototype={
$0(){var w=this,v=null,u=B.ib(v,v,v,v,B.dl(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.cg,v,A.ek,A.cf)
u.f_()
return u},
$S:328}
C.dF9.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dF8.prototype={
$0(){return this.a.d=null},
$S:0}
C.dFb.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.bU5()},
$S:118}
C.dFa.prototype={
$0(){return B.a9(this.a,!1).nh()},
$S:0}
C.f1g.prototype={
$0(){return D.dId},
$S:z+55}
C.f1h.prototype={
$0(){return D.dgn},
$S:z+59}
C.f1i.prototype={
$0(){return D.ddg},
$S:z+62}
C.f1t.prototype={
$0(){return D.dHD},
$S:z+63}
C.f1v.prototype={
$0(){return D.dmL},
$S:z+66}
C.f1w.prototype={
$0(){return D.dgj},
$S:z+88}
C.f1x.prototype={
$0(){return D.dgm},
$S:z+17}
C.f1y.prototype={
$0(){return D.d9r},
$S:z+18}
C.f1z.prototype={
$0(){return D.diR},
$S:z+19}
C.f1A.prototype={
$0(){return D.dkt},
$S:z+20}
C.f1B.prototype={
$0(){return D.dkv},
$S:z+21}
C.f1j.prototype={
$0(){return D.dfv},
$S:z+22}
C.f1k.prototype={
$0(){return D.dpu},
$S:z+23}
C.f1l.prototype={
$0(){return D.dHk},
$S:z+24}
C.f1m.prototype={
$0(){return D.dFn},
$S:z+25}
C.f1n.prototype={
$0(){return D.do9},
$S:z+26}
C.f1o.prototype={
$0(){return D.dHs},
$S:z+27}
C.f1p.prototype={
$0(){return D.dfu},
$S:z+28}
C.f1q.prototype={
$0(){return D.dHC},
$S:z+29}
C.f1r.prototype={
$0(){return D.dfw},
$S:z+16}
C.f1s.prototype={
$0(){return D.dkL},
$S:z+31}
C.f1u.prototype={
$0(){return D.do8},
$S:z+32}
C.eIM.prototype={
$2(d,e){return new C.acD($.bAj()[e],new C.eIL(e,this.a),null)},
$S:z+33}
C.eIL.prototype={
$0(){var w=this.a,v=D.ayJ.h(0,$.bAj()[w].a)
$.aZv=v==null?"music":v
B.a9(this.b,!1).cp(B.eD(new C.eIJ(w),!1,null,x.H))},
$S:0}
C.eIJ.prototype={
$1(d){return $.bAj()[this.a].e.$0()},
$S:43}
C.eIN.prototype={
$2(d,e){return new C.aby(D.arw[e],new C.eIK(this.a,e),null)},
$S:z+34}
C.eIK.prototype={
$0(){return this.a.d.$1(D.arw[this.b])},
$S:0}
C.eIs.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eIr.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eIq.prototype={
$1(d){var w=this
return new B.ea(new C.eIp(w.a,w.b,w.c,w.d),null)},
$S:20}
C.eIp.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=B.aG(a2,d,a0).w
a0=B.aG(a2,d,a0).w
w=x.p
v=B.a([D.eVf,A.av,D.f0c,A.ab],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new B.b1(12,12)
m=new B.b1(12,12)
m=B.a([new B.bH(1,A.bo,B.aK(d,A.U,!1,d,!0,A.q,d,B.aL(),r[p],d,d,d,d,d,2,new B.e2(d,d,d,d,d,d,d,d,d,d,"Title",d,G.C2,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b3(4,new B.bv(n,n,n,n),A.X),!0,d,d,d,d),A.z,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,A.iB,!0,A.a5,d,A.am,d,d,d,d),d),A.aa,new B.bH(2,A.bo,B.aK(d,A.U,!1,d,!0,A.q,d,B.aL(),q[p],d,d,d,d,d,2,new B.e2(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.C2,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b3(4,new B.bv(m,m,m,m),A.X),!0,d,d,d,d),A.z,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,A.iB,!0,A.a5,d,A.am,d,d,d,d),d)],w)
n=B.a([],w)
for(l=0;l<30;++l){k=D.d0R[l]
j=new B.b1(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.z(t.a.c.d,s)
t.w=i}h=A.d.gL(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.z(t.a.c.d,s)
t.w=i}g=A.d.gL(i)}else g=A.bG
f=new B.ay(g,u[p].A(0,k)?1.8:1,A.r,-1)
n.push(B.aH(d,B.p(d,B.V(k,u[p].A(0,k)?A.c:A.aQ,d,d,d,22),A.h,d,d,new B.o(h,d,new B.c1(f,f,f,f),new B.bv(j,j,j,j),d,d,A.n),d,d,d,A.hn,d,d,d,42),A.z,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eIn(a3,p,u,k),d,d,d,d,d,d,!1,A.ae))}A.d.v(v,B.a([new B.w("SLAB "+o,d,D.eLx,d,d,d,d,d,d,d,d,d),A.ar,new B.cC(A.b0,A.e,A.j,A.m,d,A.p,d,0,m,d),A.P,new B.a5(d,44,B.cM(n,d,d,d,d,A.b0,!1),d),A.ay],w))}v.push(B.bL(A.C8,new C.eIo(t,r,q,u,a2),d))
return new B.C(new B.N(0,0,0,a1.f.d),B.bq(!0,new B.d1(new B.aW(0,1/0,0,a0.a.b*0.86),B.cM(v,d,X.zM,d,d,A.ak,!0),d),!0,!1,A.ah,!0,!0),d)},
$S:105}
C.eIn.prototype={
$0(){var w=this
return w.a.$1(new C.eIm(w.b,w.c,w.d))},
$S:0}
C.eIm.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.eIo.prototype={
$0(){var w=this,v=w.a
v.n(new C.eIl(v,w.b,w.c,w.d))
B.a9(w.e,!1).M(null)},
$S:0}
C.eIl.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this
for(w=m.d,v=m.c,u=m.a,t=m.b,s=x.N,r=x.Z,q=0;q<3;++q){p=u.y
if(p===$){p=B.z(u.a.c.f,s)
u.y=p
o=p}else o=p
n=A.a.i(t[q].a.a)
if(n.length===0)n=o[q]
p[q]=n
p=u.z
if(p===$){p=B.z(u.a.c.r,s)
u.z=p}p[q]=A.a.i(v[q].a.a)
p=u.x
if(p===$){p=B.z(u.a.c.e,r)
u.x=p}p[q]=w[q]}},
$S:0}
C.eIA.prototype={
$0(){var w=this.a
return w.n(new C.eIz(w))},
$S:0}
C.eIz.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.eIB.prototype={
$0(){return C.qk(this.b,this.a.f,"scene")},
$S:0}
C.eIC.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.aq(A.d.gL(u),A.d.gaj(u),0.4)
u.toString
w=this.a.gXr().x
w===$&&B.c()
return B.bU(v,new B.o(v,v,v,v,v,new B.bR(D.aOC,0.9,A.w,v,0,B.a([u.j(0.06+0.03*w),A.bX],x.O),v,v),A.n),A.bb)},
$S:284}
C.eID.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.au(B.f_(A.A,B.c3(new B.h4(B.a([u.gt7(),u.gXr()],x.dS)),new C.eIy(u,this.b,v),w),A.h,A.eb),w,w,w)},
$S:246}
C.eIy.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gt7().x
r===$&&B.c()
w=r<0.9?1:1-C.bno(r,0.9,0.98)
v=s.gXr().x
v===$&&B.c()
u=A.dJ.av(0,v)
switch(s.gatC().a){case 0:s=s.btb(t.b,r,u,t.c)
break
case 1:s=s.bJ6(t.b,r,u,t.c)
break
case 2:s=s.cse(t.b,r,u,t.c)
break
case 3:s=s.bw3(t.b,r,u,t.c)
break
case 4:s=s.bza(t.b,r,u,t.c)
break
case 5:s=s.byo(t.b,r,u,t.c)
break
default:s=null}return B.d8(s,w)},
$S:213}
C.eIE.prototype={
$2(d,e){var w=B.asD(this.b),v=this.c.d,u=B.aq(A.d.gL(v),A.d.gaj(v),0.4)
u.toString
v=B.aq(A.d.gL(v),A.d.gaj(v),0.4)
v.toString
v=w.cAo(u,A.bG,v,3.5)
u=this.a
w=u.gt7().x
w===$&&B.c()
return B.a7W(B.mg(null,null,null,1,0,new C.eIx(u),A.k.E(w,0,1)),v)},
$S:1803}
C.eIx.prototype={
$1(d){var w=this.a
w.gt7().sq(0,d)
if(w.as)w.n(new C.eIt(w))},
$S:6}
C.eIt.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eIF.prototype={
$0(){var w=this.a
w.gt7().sq(0,0)
w.adt()},
$S:0}
C.eIG.prototype={
$1(d){var w=this.a
w.n(new C.eIw(w,d))
if(w.as)w.adt()},
$S:6}
C.eIw.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eIH.prototype={
$0(){var w=this.a
w.n(new C.eIv(w,this.b))
w.gt7().sq(0,0)
if(w.as)w.adt()},
$S:0}
C.eIv.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.eII.prototype={
$0(){var w=this.a
return w.n(new C.eIu(w,this.b))},
$S:0}
C.eIu.prototype={
$0(){var w=B.z(this.b,x.G)
return this.a.w=w},
$S:0}
C.eIj.prototype={
$2(d,e){return A.k.aI(d.a,e.a)},
$S:1804}
C.eIk.prototype={
$1(d){return d.b},
$S:1805}
C.d9I.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.d9J.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.d9F.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.d9G.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.d9H.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.d9K.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.d9L.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.d9M.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.d9N.prototype={
$1(d){return d.d<this.a.ax},
$S:z+38}
C.d9O.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+39}
C.d9P.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+40}
C.d9Q.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+41}
C.d9R.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+42}
C.d9S.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+43}
C.e9Z.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.e9O.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.e9Q.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gV(e.b),97)},
$S:z+44}
C.e9R.prototype={
$2(d,e){return d+A.o.F(A.a.gV(e.a),31)+A.o.F(A.a.gV(e.b),17)},
$S:z+45}
C.e9U.prototype={
$1(d){var w=D.mb.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+46}
C.e9V.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.z(new B.e3(new B.cU(new B.a4(q,new C.e9W(d),p.k("a4<1>")),new C.e9X(r),p.k("cU<1,qd?>")),o),o.k("G.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aF(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.K)(n),++v){u=n[v]
if(w.length>=6)return
t=B.z(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+47}
C.e9W.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.e9X.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+48}
C.e9S.prototype={
$1(d){return D.mb.h(0,d.b).c===D.vE},
$S:z+49}
C.e9T.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eao.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.E((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.a5j(0,u)
w.cMf(A.o.ak(v,1000))},
$S:8}
C.e9Y.prototype={
$0(){},
$S:0}
C.e9K.prototype={
$0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$$0)
case 6:e.aq("String","ngmy_core_reaction_lab_v1",s.a.d.ac())
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
C.ea0.prototype={
$1(d){var w=null,v=this.a.b
return B.bq(!0,B.v(B.a([A.P,B.dL(!1,w,w,w,!0,w,w,w,!0,w,B.V(D.mb.h(0,v).b,D.mb.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fax,w,B.d(D.mb.h(0,v).a,w,w,w,w,w,w,A.hg,w,w,w),w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,S.aiw,w,w,w,w,new C.ea_(d),!1,w,w,w,w,w,w,w,D.f2P,w,w,w)],x.p),A.m,w,A.e,A.R,0,A.p),!0,!1,A.ah,!0,!0)},
$S:34}
C.ea_.prototype={
$0(){B.a9(this.a,!1).M(!0)
return null},
$S:0}
C.ea2.prototype={
$1(d){var w,v,u=null,t=B.aG(d,u,x.m).w,s=B.a([D.dQ3],x.p)
for(w=0;w<6;++w){v=D.arO[w]
s.push(B.dL(!1,u,u,u,!0,u,u,u,!0,u,D.bDE,u,u,u,u,new C.ea1(d,v),!1,u,u,u,u,u,new B.w(v.b,u,A.lb,u,u,u,u,u,u,u,u,u),u,new B.w(v.a,u,A.hg,u,u,u,u,u,u,u,u,u),u,u,u))}return B.bq(!0,new B.d1(new B.aW(0,1/0,0,t.a.b*0.7),B.cM(s,u,D.bll,u,u,A.ak,!0),u),!0,!1,A.ah,!0,!0)},
$S:34}
C.ea1.prototype={
$0(){B.a9(this.a,!1).M(this.b)
return null},
$S:0}
C.e9N.prototype={
$1(d){var w=null
return B.eq(B.a([B.bK(!1,A.df,w,w,!0,w,w,new C.e9L(d),w,w),B.bK(!1,A.C7,w,w,!0,w,w,new C.e9M(d),w,w)],x.p),w,w,D.rz,D.f0m,w,w,w,w,D.f35,w)},
$S:21}
C.e9L.prototype={
$0(){B.a9(this.a,!1).M(!1)
return null},
$S:0}
C.e9M.prototype={
$0(){B.a9(this.a,!1).M(!0)
return null},
$S:0}
C.eam.prototype={
$0(){var w=this.a
return w.n(new C.eal(w))},
$S:0}
C.eal.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ean.prototype={
$2(d,e){var w,v,u,t=null,s=new B.as(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.lX(new C.eac(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.aXT:t
v=B.a([B.b2(u,t,t,new C.bdu(w,v,new C.ead(r),new C.eae(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.an(t,B.e1(B.c3(w,new C.eaf(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bAP())
return B.aH(A.c5,B.jB(new B.am(A.W,t,A.b_,A.q,v,t),A.q,t),A.z,!1,t,t,t,t,t,t,t,t,new C.eag(r),t,r.gc8r(),t,new C.eah(r),new C.eai(r),new C.eaj(r),t,t,t,t,t,t,t,t,t,t,new C.eak(r),t,t,t,!1,A.ae)},
$S:33}
C.eac.prototype={
$0(){return this.a.a9h(this.b)},
$S:0}
C.eak.prototype={
$1(d){return this.a.cq6(d.b)},
$S:53}
C.eai.prototype={
$1(d){return this.a.c8s(d.b)},
$S:40}
C.eaj.prototype={
$1(d){return this.a.c8t(d.b)},
$S:18}
C.eah.prototype={
$1(d){return this.a.aX7()},
$S:36}
C.eag.prototype={
$1(d){return this.a.a9X(d.b)},
$S:312}
C.ead.prototype={
$0(){return this.a.z},
$S:646}
C.eae.prototype={
$0(){return this.a.Q},
$S:709}
C.eaf.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bF2()
if(p.length===0)return A.bF
w=A.x.j(0.55)
v=B.m(14)
u=B.H(A.bG,A.r,1)
t=B.a([D.eZ3,A.d4],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.K)(p),++r)t.push(new B.w(p[r],q,D.eKk,q,q,q,q,A.a2,q,2,q,q))
return B.p(q,B.v(t,A.F,q,A.e,A.R,0,A.p),A.h,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h8,q,q,q)},
$S:56}
C.e9P.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.m(12),t=B.H(e.j(0.6),A.r,1),s=x.p
return new B.C(A.e0,B.B(B.a([B.p(w,B.V(d,e,w,w,w,21),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bd,B.D(B.v(B.a([B.d(f,w,w,w,w,w,w,Y.R6,w,w,w),A.bA,B.d(g,w,w,w,w,w,w,D.aKE,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1807}
C.ea8.prototype={
$0(){var w=this.a.c
w.toString
return B.a9(w,!1).nh()},
$S:0}
C.ea9.prototype={
$0(){var w=this.a
return w.n(new C.ea7(w))},
$S:0}
C.ea7.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eaa.prototype={
$0(){var w=this.a
return w.n(new C.ea6(w))},
$S:0}
C.ea6.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.eab.prototype={
$0(){var w=this.a
return w.n(new C.ea5(w))},
$S:0}
C.ea5.prototype={
$0(){return this.a.r=!0},
$S:0}
C.ea4.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.mb.gdH(D.mb),w=w.gah(w);w.C();){v=w.gT(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.K)(p),++r)u.push(s.clb(p[r]))
return new B.C(F.aci,B.v(B.a([new B.C(P.adV,w,q),B.B(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+50}
C.ea3.prototype={
$0(){return this.a.bZW(this.b)},
$S:0}
C.d9E.prototype={
$0(){var w=this,v=null,u=B.ib(v,v,v,v,B.dl(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.cg,v,A.ek,A.cf)
u.f_()
return u},
$S:328}
C.ek9.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.E((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.ak(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new B.u(s.a+q*n,s.b+r*n)
t.b=new B.u(q*v,r*v)}A.d.bm(o,new C.ek7(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.n(new C.ek8())},
$S:8}
C.ek7.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+51}
C.ek8.prototype={
$0(){},
$S:0}
C.ejL.prototype={
$0(){},
$S:0}
C.ejK.prototype={
$0(){},
$S:0}
C.ejU.prototype={
$0(){return C.qk(this.b,this.a.d,"spark-painter")},
$S:0}
C.ejW.prototype={
$1(d){return this.a.aUu(0,d.b)},
$S:40}
C.ek_.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gaj(w).aE(0,u).gcj()>2.5}else w=!1
if(w)t.a.push(u)
v.aNW(u)
v.c1W(u)
return null},
$S:18}
C.ejV.prototype={
$1(d){return this.a.aUt()},
$S:36}
C.ek0.prototype={
$1(d){return this.a.aUu(0,d.b)},
$S:23}
C.ek1.prototype={
$1(d){return this.a.aUt()},
$S:53}
C.ek2.prototype={
$0(){var w=this.a
return w.n(new C.ejT(w,this.b))},
$S:0}
C.ejT.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
C.ek3.prototype={
$0(){var w=this.a
return w.n(new C.ejS(w))},
$S:0}
C.ejS.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.ek4.prototype={
$0(){var w=this.a
return w.n(new C.ejR(w,this.b))},
$S:0}
C.ejR.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.ek5.prototype={
$1(d){var w=this.a
return w.n(new C.ejQ(w,d))},
$S:6}
C.ejQ.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.ek6.prototype={
$0(){var w=this.a
return w.n(new C.ejP(w))},
$S:0}
C.ejP.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.ejX.prototype={
$0(){var w=this.a
return w.n(new C.ejO(w))},
$S:0}
C.ejO.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.ejY.prototype={
$0(){var w=this.a
return w.n(new C.ejN(w))},
$S:0}
C.ejN.prototype={
$0(){var w=this.a
A.d.a7(w.e)
A.d.a7(w.f)},
$S:0}
C.ejZ.prototype={
$0(){var w=this.a
return w.n(new C.ejM(w,this.b))},
$S:0}
C.ejM.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eqJ.prototype={
$0(){return C.qk(this.b,this.a.d,"title")},
$S:0}
C.eqK.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gHs().x
q===$&&B.c()
w=B.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.bUe(v[t],t,s,q,u))
return new B.C(A.fB,B.c9(A.fG,w,A.r3,0,0),null)},
$S:682}
C.eqL.prototype={
$1(d){return this.a.n(new C.eqI())},
$S:2}
C.eqI.prototype={
$0(){},
$S:0}
C.eqM.prototype={
$0(){var w=this.a
w.n(new C.eqH(w,this.b))
w=w.gHs()
w.ie(0,0)
w.cD(0)},
$S:0}
C.eqH.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.eqN.prototype={
$0(){var w=this.a
return w.n(new C.eqG(w,this.b))},
$S:0}
C.eqG.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eqO.prototype={
$0(){var w=this.a
return w.n(new C.eqF(w))},
$S:0}
C.eqF.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
C.eqP.prototype={
$0(){var w=this.a
return w.n(new C.eqE(w,this.b))},
$S:0}
C.eqE.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eqQ.prototype={
$0(){var w=this.a.gHs()
w.ie(0,0)
w.cD(0)},
$S:0}
C.eqR.prototype={
$1(d){var w=this.a
return w.n(new C.eqD(w,d))},
$S:6}
C.eqD.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.e6R.prototype={
$1(d){return d.a.aE(0,this.a).gcj()<16},
$S:z+13}
C.e6S.prototype={
$1(d){var w=this.b
return d.a.aE(0,w).gcj()<16||d.a.aE(0,w).gcj()>this.a.r.gajL()*2.2},
$S:z+13}
C.e6F.prototype={
$0(){return C.qk(this.b,this.a.d,"orbits")},
$S:0}
C.e6G.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new B.as(e.b,e.d)
q.r=p
w=q.gab6()
v=q.w
u=q.as
t=q.at
s=u==null?A.a_t:q.cbZ(u,q.gaS3())
return new B.ep(B.aH(A.c5,B.b2(r,r,r,new C.bhN(q.e,w,v,u,t,s,r),p),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,new C.e6C(q),new C.e6D(q),new C.e6E(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.ae),q.d)},
$S:199}
C.e6D.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:40}
C.e6E.prototype={
$1(d){return this.a.at=d.b},
$S:18}
C.e6C.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aE(0,w).gcj()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new C.YT(u,v.gaS3(),v.Q,v.aYz(),B.a([],x.g)))
B.jF()
if(v.ax)C.dG(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:36}
C.e6H.prototype={
$1(d){var w=this.a
return w.n(new C.e6B(w,d))},
$S:6}
C.e6B.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e6J.prototype={
$1(d){var w=this.a
return w.n(new C.e6A(w,d))},
$S:6}
C.e6A.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.e6K.prototype={
$1(d){var w=this.a
return w.n(new C.e6z(w,d))},
$S:6}
C.e6z.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.e6L.prototype={
$0(){var w=this.a
return w.n(new C.e6y(w))},
$S:0}
C.e6y.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.e6M.prototype={
$0(){var w=this.a
return w.n(new C.e6x(w))},
$S:0}
C.e6x.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
C.e6N.prototype={
$0(){var w=this.a
return w.n(new C.e6w(w))},
$S:0}
C.e6w.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.e6O.prototype={
$0(){var w=this.a
return w.n(w.gcnq())},
$S:0}
C.e6P.prototype={
$0(){var w=this.a
return w.n(w.gbB2())},
$S:0}
C.e6Q.prototype={
$0(){var w=this.a
return w.n(new C.e6v(w))},
$S:0}
C.e6v.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.af()
s=w.r
w.aom(50+t*(Math.min(s.a,s.b)/2-70),v.af()*3.141592653589793*2,0.7+v.af()*0.5,v.he())}},
$S:0}
C.e6I.prototype={
$0(){var w=this.a
return w.n(A.d.gqN(w.e))},
$S:0}
C.eqa.prototype={
$1(d){return this.a.fF$-d.b>6000},
$S:711}
C.eqb.prototype={
$1(d){var w=this.a.e
return new B.a4(w,new C.eq9(d),B.U(w).k("a4<1>")).gJ(0)>=3},
$S:711}
C.eq9.prototype={
$1(d){return d.a.aE(0,this.a.a).gcj()<14},
$S:z+53}
C.eq_.prototype={
$0(){return C.qk(this.b,this.a.d,"swarm")},
$S:0}
C.eq0.prototype={
$2(d,e){var w=null,v=this.a,u=new B.as(e.b,e.d)
v.w=u
return new B.ep(B.aH(A.c5,B.b2(w,w,w,new C.bp8(v.e,v.f,v.ax,v.at,v.ay,v.fF$,w),u),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new C.epX(v),new C.epY(v),new C.epZ(v),w,w,w,w,w,w,w,w,new C.epP(v),new C.epQ(v),new C.epR(v),w,w,w,!1,A.ae),v.d)},
$S:199}
C.epY.prototype={
$1(d){return this.a.ay=d.b},
$S:40}
C.epZ.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
C.epX.prototype={
$1(d){return this.a.ay=null},
$S:36}
C.epQ.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new B.A(v,w.fF$))
if(w.ch)C.dG(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)C.l3("flute",7,500,0.3)},
$S:23}
C.epR.prototype={
$1(d){return this.a.ay=null},
$S:53}
C.epP.prototype={
$0(){return this.a.ay=null},
$S:0}
C.eq1.prototype={
$0(){var w=this.a
return w.n(new C.epW(w,this.b))},
$S:0}
C.epW.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
C.eq2.prototype={
$0(){var w=this.a
return w.n(new C.epV(w,this.b))},
$S:0}
C.epV.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a7(w.e)},
$S:0}
C.eq3.prototype={
$0(){var w=this.a
return w.n(new C.epU(w))},
$S:0}
C.epU.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eq4.prototype={
$1(d){var w=this.a
return w.n(new C.epT(w,d))},
$S:6}
C.epT.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eq5.prototype={
$1(d){var w=this.a
return w.n(new C.epS(w,d))},
$S:6}
C.epS.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eq6.prototype={
$1(d){var w=this.a
return w.n(new C.epO(w,d))},
$S:6}
C.epO.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eq7.prototype={
$1(d){var w=this.a
return w.n(new C.epN(w,d))},
$S:6}
C.epN.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eq8.prototype={
$1(d){var w=this.a
return w.n(new C.epM(w,d))},
$S:6}
C.epM.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dz5.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new C.dz4(w,d))},
$S:130}
C.dz4.prototype={
$0(){var w=this.a,v=this.b,u=J.a8(v),t=B.aN(u.h(v,"unlocked"))
t=t==null?null:A.k.N(t)
w.w=A.o.E(t==null?1:t,1,100)
t=B.aN(u.h(v,"level"))
t=t==null?null:A.k.N(t)
if(t==null)t=w.w
w.r=A.o.E(t,1,w.w)
t=B.T(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.jl(v==null?A.uZ:v)
v=v.gah(v)
while(v.C()){u=v.gT(v)
t.m(0,B.t(u.a),A.k.N(B.f3(u.b)))}w.x=t
w.Q=!0
A.d.a7(w.d)},
$S:0}
C.dz6.prototype={
$1(d){return d.d!=null},
$S:z+14}
C.dz7.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Xs(w)>0},
$S:z+14}
C.dyW.prototype={
$0(){var w=this.a
w.r=A.o.E(this.b,1,w.w)
w.awE()},
$S:0}
C.dyZ.prototype={
$1(d){var w=null,v=B.m(22),u=this.a
return B.ew(w,D.U9,new B.C(A.bC,new B.a5(340,480,B.v(B.a([B.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.ja,w,w,w),A.T,B.D(B.i7(!0,w,w,A.z,K.aIG,new C.dyY(u,d),100,w,w,A.ak,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.cZ,w,new B.b6(v,A.X),w)},
$S:46}
C.dyY.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new C.dyX(this.b,r):s
v=B.m(12)
if(p)q=r===q.r?A.bU:A.c.j(0.1)
else q=A.c.j(0.03)
u=B.H(p?A.b9:A.dv,A.r,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.j1
o=B.a([B.d(o,s,s,s,s,s,s,B.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(B.d(A.a.aN("\u2605",n)+A.a.aN("\u2606",3-n),s,s,s,s,s,s,D.eNZ,s,s,s))
return B.aH(s,B.p(s,B.v(o,A.m,s,A.b7,A.j,0,A.p),A.h,s,s,new B.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.ae)},
$S:73}
C.dyX.prototype={
$0(){B.a9(this.a,!1).M(this.b)
return null},
$S:0}
C.dz2.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new B.as(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gaad()
o=B.b2(q,q,q,new C.b7p(p.d,w,v,p.gc_2(),q),o)
v=p.bRY("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gGV()
t=p.as>=p.gGV()?A.bh:A.c
s=this.b
r=x.p
s=B.a([o,B.an(q,B.B(B.a([v,p.arQ("GOAL",""+w+" / "+u,t),p.arQ("STARS",A.a.aN("\u2605",s)+A.a.aN("\u2606",3-s),A.aK)],r),A.m,q,A.hF,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lL)
if(p.Q&&!p.y)s.push(D.aOk)
if(p.z){o=B.m(24)
w=this.c
v=B.H((w?A.bh:A.cD).j(0.6),A.r,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=B.a([B.d(u,q,q,q,q,q,q,B.l(q,q,w?A.bh:A.cD,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.ar,B.d("You blasted "+p.as+" dots. The goal was "+p.gGV()+".",q,q,q,q,q,q,A.hs,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(B.d(A.a.aN("\u2605",t==null?1:t),q,q,q,q,q,q,D.eEN,q,q,q))}u.push(A.ay)
t=B.a([new C.ff(A.m5,"Try again",new C.dz_(p),A.c,q)],r)
if(w&&p.r<100)t.push(new C.ff(A.jl,"Next level",new C.dz0(p),A.bh,q))
u.push(B.B(t,A.m,q,A.e,A.R,0,q,q))
s.push(B.au(B.p(q,B.v(u,A.m,q,A.e,A.R,0,A.p),A.h,q,q,new B.o(D.Tr,q,v,o,q,q,A.n),q,q,q,q,A.a8,q,q,q),q,q,q))}return B.aH(A.c5,new B.am(A.W,q,A.b_,A.q,s,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dz1(p),q,q,q,q,!1,A.ae)},
$S:33}
C.dz1.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fF$
C.dG(180,"",200,1,0.4,"sine")
B.j8()},
$S:23}
C.dz_.prototype={
$0(){var w=this.a
return w.n(w.gb0b())},
$S:0}
C.dz0.prototype={
$0(){var w=this.a
return w.aUv(w.r+1)},
$S:0}
C.dz3.prototype={
$0(){var w=this.a
return w.n(w.gb0b())},
$S:0}
C.cFK.prototype={
$3(d,e,f){var w,v
if(e<=0)return
w=this.a
$.W()
v=B.L()
v.r=f.j(0.18).gq(0)
w.ae(d,e,v)
v=B.L()
v.b=A.ac
v.c=3
v.r=f.j(0.9).gq(0)
w.ae(d,e,v)
v=B.L()
v.r=f.j(0.25).gq(0)
v.z=A.lz
w.ae(d,e*0.5,v)},
$S:712}
C.e2k.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcFQ()?this.a.cjE(w,v,d.b):w.aE(0,v).gcj())<24},
$S:z+56}
C.e2J.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+57}
C.e2y.prototype={
$0(){var w=this.a
return w.n(new C.e2p(w))},
$S:0}
C.e2p.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.e2z.prototype={
$0(){return C.qk(this.b,this.a.d,"marble-music")},
$S:0}
C.e2A.prototype={
$2(d,e){var w=null,v=this.a,u=new B.as(e.b,e.d)
v.w=u
return new B.ep(B.aH(A.c5,B.b2(w,w,w,new C.beo(v.e,v.f,v.at,v.ax,v.fF$,w),u),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new C.e2v(v),new C.e2w(v),new C.e2x(v),w,w,w,w,w,w,w,w,w,w,new C.e2o(v),w,w,w,!1,A.ae),v.d)},
$S:199}
C.e2o.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.Ya(w)
u.e.push(new C.Ew(w,w,v,u.aLG(v)))
if(u.ay)C.l3(u.z,v+12,700,0.5)}if(u.x==="erase")u.aOb(d.b)},
$S:53}
C.e2w.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:40}
C.e2x.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aOb(d.b)},
$S:18}
C.e2v.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aE(0,w).gcj()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.Ya(t.ao(0,w).ez(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new C.Ew(w,t,v,u.aLG(v)))
if(u.ay)C.l3(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:36}
C.e2B.prototype={
$0(){var w=this.a
return w.n(new C.e2u(w,this.b))},
$S:0}
C.e2u.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
C.e2C.prototype={
$0(){var w=this.a
return w.n(new C.e2t(w,this.b))},
$S:0}
C.e2t.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.e2D.prototype={
$0(){var w=this.a
return w.n(new C.e2s(w,this.b))},
$S:0}
C.e2s.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
C.e2E.prototype={
$1(d){var w=this.a
return w.n(new C.e2r(w,d))},
$S:6}
C.e2r.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.e2F.prototype={
$0(){var w=this.a
return w.n(new C.e2q(w))},
$S:0}
C.e2q.prototype={
$0(){return this.a.avc("stairs")},
$S:0}
C.e2G.prototype={
$0(){var w=this.a
return w.n(new C.e2n(w))},
$S:0}
C.e2n.prototype={
$0(){return this.a.avc("pinball")},
$S:0}
C.e2H.prototype={
$0(){var w=this.a
return w.n(new C.e2m(w))},
$S:0}
C.e2m.prototype={
$0(){return this.a.avc("random")},
$S:0}
C.e2I.prototype={
$0(){var w=this.a
return w.n(new C.e2l(w))},
$S:0}
C.e2l.prototype={
$0(){var w=this.a
A.d.a7(w.e)
A.d.a7(w.f)},
$S:0}
C.e6e.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
C.e6f.prototype={
$0(){var w=this.b,v=new C.abj(this.a.a,this.c)
v.c=w.fF$
return w.e.push(v)},
$S:0}
C.e6m.prototype={
$0(){var w=this.a
return w.n(new C.e6l(w))},
$S:0}
C.e6l.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
C.e6n.prototype={
$0(){return C.qk(this.b,this.a.d,"orbit-sequencer")},
$S:0}
C.e6o.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new B.as(e.b,e.d)
if(!u.f){u.f=!0
u.aN0()}w=u.w
return new B.ep(B.aH(A.c5,B.b2(v,v,v,new C.bhO(u.e,u.gaUx(),6,u.gce_(),u.gck4(),u.fF$,v),w),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e6k(u),v,v,v,!1,A.ae),u.d)},
$S:199}
C.e6k.prototype={
$1(d){return this.a.c_4(d.b)},
$S:53}
C.e6p.prototype={
$1(d){var w=this.a
return w.n(new C.e6j(w,d))},
$S:6}
C.e6j.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.e6q.prototype={
$0(){var w=this.a
return w.n(new C.e6i(w,this.b))},
$S:0}
C.e6i.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.e6r.prototype={
$0(){var w=this.a
return w.n(new C.e6h(w,this.b))},
$S:0}
C.e6h.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
C.e6s.prototype={
$0(){var w=this.a
return w.n(w.gbEZ())},
$S:0}
C.e6t.prototype={
$0(){var w=this.a
return w.n(new C.e6g(w))},
$S:0}
C.e6g.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a7(u)
for(v=v.r,w=0;w<9;++w)u.push(new C.abj(v.aB(6),v.af()))},
$S:0}
C.e6u.prototype={
$0(){var w=this.a
return w.n(A.d.gqN(w.e))},
$S:0}
C.feN.prototype={
$2(d,e){var w=A.o.ak(d,100),v=A.o.F(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:131}
C.e5J.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new C.e5I(w,d))},
$S:130}
C.e5I.prototype={
$0(){var w=B.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aU(v==null?A.cL:v)
while(v.C())w.push(A.k.N(B.f3(v.gT(v))))
return this.a.x.v(0,w)},
$S:0}
C.e5v.prototype={
$2(d,e){var w=this.b
if(A.o.ak(d,100)===w||A.o.F(d,100)===w)this.a.a+=e},
$S:131}
C.e5p.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new C.b6i(w.b,new B.u(w.c*(0.2+0.6*v.af()),w.e*(0.2+0.6*v.af()))))},
$S:0}
C.e5q.prototype={
$0(){var w=this.a
A.d.a7(w.e)
w.f.a7(0)
w.r=null},
$S:0}
C.e5u.prototype={
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
p=D.uY.h(0,v[u].a).a
o=w.agB(u)
v=D.uY.h(0,v[t].a).a
n=w.agB(t)
if(q<=p-o+r&&q<=v-n+r){m.m(0,s,q)
C.vk("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaUD()&&w.x.K(0,w.d)){C.vk("zap",12,300,0.5)
m=w.x
m=B.z(m,B.a2(m).k("cl.E"))
C.vh("molecule_maker",B.E(["done",m],x.N,x.z))}}}},
$S:0}
C.e5t.prototype={
$0(){var w,v,u=this.a,t=u.f,s=B.a2(t).k("cu<1>"),r=this.b,q=s.k("a4<G.E>"),p=B.z(new B.a4(new B.cu(t,s),new C.e5r(r),q),q.k("G.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,B.K)(p),++w)t.W(0,p[w])
s=x.S
v=B.T(s,s)
t.bG(0,new C.e5s(r,v))
t.a7(0)
t.v(0,v)
A.d.cu(u.e,r)
u.r=null},
$S:0}
C.e5r.prototype={
$1(d){var w=this.a
return A.o.ak(d,100)===w||A.o.F(d,100)===w},
$S:60}
C.e5s.prototype={
$2(d,e){var w=A.o.ak(d,100),v=A.o.F(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.m(0,w*100+v,e)},
$S:131}
C.e5D.prototype={
$1(d){return""+d.b+" "+D.uY.h(0,d.a).c.toLowerCase()},
$S:468}
C.e5E.prototype={
$0(){var w=this.a
return w.n(new C.e5C(w))},
$S:0}
C.e5C.prototype={
$0(){var w=this.a;++w.d
w.atH(0)},
$S:0}
C.e5F.prototype={
$2(d,e){var w=null,v=this.a
v.y=new B.as(e.b,e.d)
return B.aH(A.c5,B.b2(w,w,w,new C.bf4(v.e,v.f,v.r,v.gcuj(),w),A.fa),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new C.e5y(v),new C.e5z(v),new C.e5A(v,e),w,w,w,w,w,w,w,w,w,w,new C.e5B(v),w,w,w,!1,A.ae)},
$S:33}
C.e5B.prototype={
$1(d){return this.a.c_r(d.b)},
$S:53}
C.e5z.prototype={
$1(d){var w=this.a
return w.w=w.aUE(d.b)},
$S:40}
C.e5A.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.n(new C.e5w(w,v,d,this.b))},
$S:18}
C.e5w.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new B.u(A.k.E(t.b.a+s.a,26,r.b-26),A.k.E(v[u].b.b+s.b,26,r.d-26))},
$S:0}
C.e5y.prototype={
$1(d){return this.a.w=null},
$S:36}
C.e5G.prototype={
$0(){var w=this.a
return w.n(new C.e5x(w,this.b))},
$S:0}
C.e5x.prototype={
$0(){var w=this.a
w.d=this.b
w.atH(0)},
$S:0}
C.e5H.prototype={
$0(){return this.a.c_l(0,this.b.a)},
$S:0}
C.dhL.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.ak(d,100)].b,i=k[A.o.F(d,100)].b,h=i.aE(0,j),g=new B.u(-h.b,h.a).ez(0,Math.max(h.gcj(),1))
for(k=(e-1)/2,w=g.a,v=g.b,u=j.a,t=j.b,s=i.a,r=i.b,q=this.b.a,p=0;p<e;++p){o=(p-k)*8
n=w*o
o=v*o
$.W()
m=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
m.r=A.af.gq(0)
m.c=4
m.d=A.bL
l=m.I()
q.drawLine.apply(q,[u+n,t+o,s+n,r+o,l])
l.delete()}},
$S:131}
C.dH_.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.dGZ(w,d))},
$S:130}
C.dGZ.prototype={
$0(){var w=B.aN(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
C.dGP.prototype={
$0(){var w,v,u=J.e_(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.aql[w.aB(4)]
return A.d.fN(u)},
$S:22}
C.dGO.prototype={
$1(d){return C.fHR(d)==="*"},
$S:3}
C.dGQ.prototype={
$1(d){return d!==this.a},
$S:3}
C.dGN.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
C.vh("dna_lab",B.E(["best",r],x.N,x.z))}r=s.d
C.vk("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga6P()[r]+" codes for "+B.t(D.B0.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.aXC()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=B.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,B.K)(w),++u)r.push(D.B0.h(0,w[u]))
r="Protein built: "+A.d.aF(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
C.vk("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
C.dGY.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dv:e,u=B.m(8),t=f?B.H(A.b9,A.r,1):w
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,f?A.b9:A.x,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,40,w,A.mE,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1811}
C.dGT.prototype={
$1(d){var w=D.d4v.h(0,d)
return w==null?A.c:w},
$S:713}
C.dGU.prototype={
$0(){var w=this.a
return w.n(new C.dGS(w,this.b))},
$S:0}
C.dGS.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.at7()},
$S:0}
C.dGV.prototype={
$0(){var w=this.a
return w.n(new C.dGR(w))},
$S:0}
C.dGR.prototype={
$0(){var w=this.a;++w.e
w.at7()},
$S:0}
C.dGW.prototype={
$0(){return this.a.aUC(this.b)},
$S:0}
C.dGX.prototype={
$0(){return this.a.aUC(this.b)},
$S:0}
C.dJP.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.dJO(w,d))},
$S:130}
C.dJO.prototype={
$0(){var w=B.aN(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
C.dJC.prototype={
$0(){},
$S:0}
C.dJB.prototype={
$0(){var w,v,u=this
switch(u.b){case"drought":w=u.a
v=w.f
w.f=B.a([v[0]*0.2,v[1],v[2]],x.n)
break
case"disease":w=u.a
v=w.f
w.f=B.a([v[0],v[1]*0.3,v[2]],x.n)
break
case"foxes":w=u.a
v=w.f
w.f=B.a([v[0],v[1],v[2]+12],x.n)
break
case"rabbits":w=u.a
v=w.f
w.f=B.a([v[0],v[1]+40,v[2]],x.n)
break}},
$S:0}
C.dJD.prototype={
$0(){var w=this.a
w.f=B.a([80,30,6],x.n)
A.d.a7(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
C.dJH.prototype={
$1(d){var w=this.a
return w.n(new C.dJG(w,d))},
$S:6}
C.dJG.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.dJI.prototype={
$1(d){var w=this.a
return w.n(new C.dJF(w,d))},
$S:6}
C.dJF.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dJJ.prototype={
$1(d){var w=this.a
return w.n(new C.dJE(w,d))},
$S:6}
C.dJE.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dJK.prototype={
$0(){return this.a.a7Z("drought")},
$S:0}
C.dJL.prototype={
$0(){return this.a.a7Z("disease")},
$S:0}
C.dJM.prototype={
$0(){return this.a.a7Z("foxes")},
$S:0}
C.dJN.prototype={
$0(){return this.a.a7Z("rabbits")},
$S:0}
C.cZe.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new B.eU()
k.dM(A.o.N(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.af()
p=k.af()
o=(r&1)===0?1:-1
o=A.k.F(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.af()
p=Math.sin(s+r*2)
n=new B.kN(new B.em(e,l,l,A.cS,l,l,l,l,l,l,new B.F(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a5,A.cg,new B.jM(1),l,l,l,l,A.cf,l)
n.f_()
n.a4(w,new B.u(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1813}
C.cZg.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this.a.c
if(l.length<2)return
w=$.W()
v=B.a([],x.v)
u=new B.aO(w.r,A.ap,null,null,v)
for(w=this.b,t=w.a,s=w.c-t,r=w.d,w=r-w.b,q=0;q<l.length;++q){p=t+s*q/159
o=r-w*A.k.E(l[q][d]/e,0,1)
if(q===0){n=new B.b4(p,o)
v.push(n)
m=u.f
if(m!=null)n.bx(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}else{n=new B.ao(p,o)
v.push(n)
m=u.f
if(m!=null)n.bx(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}}$.W()
l=B.L()
l.b=A.ac
l.c=2.6
l.r=f.gq(0)
l.e=A.ft
this.c.aM(u,l)},
$S:1814}
C.cZf.prototype={
$3(d,e,f){var w=null,v=B.ib(w,w,w,w,B.dl(w,w,w,w,w,w,w,w,w,B.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a5,A.cg,w,A.ek,A.cf)
v.f_()
v.a4(this.a,new B.u(f,this.b.b+2))},
$S:1815}
C.bCm.prototype={
$2(d,e){return d+e.a*e.b},
$S:1816}
C.faD.prototype={
$2(d,e){return e.a-d.a},
$S:1817}
C.dvg.prototype={
$2(d,e){return d+e},
$S:76}
C.dvt.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.n(new C.dvs(v,A.k.E((v.gv5()-w[v.e].gu8())/Math.max(w[v.e].gu8(),8),-1,1)*0.32,u))},
$S:8}
C.dvs.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
C.dvu.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.dvr(w,d))},
$S:130}
C.dvr.prototype={
$0(){var w=B.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aU(v==null?A.cL:v)
while(v.C())w.push(A.k.N(B.f3(v.gT(v))))
return this.a.r.v(0,w)},
$S:0}
C.dvh.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.F(w[v]+1,6)
w[v]=u
return u},
$S:0}
C.dvm.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1818}
C.dvn.prototype={
$0(){var w=this.a
return w.n(new C.dvl(w))},
$S:0}
C.dvl.prototype={
$0(){var w=this.a;++w.e
A.d.hi(w.f,0,5,0)},
$S:0}
C.dvo.prototype={
$2(d,e){var w=null,v=this.a
return B.aH(A.c5,B.b2(w,w,w,new C.b6u(v.w,this.b.a,v.f,v.gv5()===v.d[v.e].gu8(),w),A.fa),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dvk(v,e),w,w,w,!1,A.ae)},
$S:33}
C.dvk.prototype={
$1(d){var w=this.b.b,v=A.k.U((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cqj(v-1)},
$S:53}
C.dvp.prototype={
$0(){var w=this.a
return w.n(new C.dvj(w,this.b))},
$S:0}
C.dvj.prototype={
$0(){var w=this.a
w.e=this.b
A.d.hi(w.f,0,5,0)},
$S:0}
C.dvq.prototype={
$0(){var w=this.a
return w.n(new C.dvi(w))},
$S:0}
C.dvi.prototype={
$0(){return A.d.hi(this.a.f,0,5,0)},
$S:0}
C.cyh.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=B.bC(B.cJ(new B.u(d,s),20,w),A.tD)
$.W()
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=f.gq(0)
p=q.I()
u.drawRRect(B.eZ(r),p)
p.delete()
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.b=A.ac
q.c=1.2
q.r=A.dy.gq(0)
p=q.I()
u.drawRRect(B.eZ(r),p)
p.delete()
C.f9H(v,"1",new B.u(d,s),A.bg,11)}},
$S:1819}
C.dNQ.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.n(new C.dNP(w,v))},
$S:8}
C.dNP.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
C.dNR.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.dNO(w,d))},
$S:130}
C.dNO.prototype={
$0(){var w=B.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aU(v==null?A.cL:v)
while(v.C())w.push(A.k.N(B.f3(v.gT(v))))
return this.a.w.v(0,w)},
$S:0}
C.dNG.prototype={
$0(){var w=A.k.U(this.c)
this.a.d[this.b]=w
return w},
$S:0}
C.dNK.prototype={
$0(){var w=this.a
return w.n(new C.dNJ(w))},
$S:0}
C.dNJ.prototype={
$0(){return this.a.r++},
$S:0}
C.dNL.prototype={
$0(){var w=this.a
return w.n(new C.dNI(w,this.b))},
$S:0}
C.dNI.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dNM.prototype={
$1(d){var w=this.a
return w.n(new C.dNH(w,d))},
$S:6}
C.dNH.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dNN.prototype={
$1(d){return this.a.c_s(this.b,d)},
$S:6}
C.d5c.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bK1(d,e,f,g),m=this.b
$.W()
w=B.L()
v=B.aq(h,A.c,i?0.1:0.35)
v.toString
u=B.aq(h,A.x,0.5)
u.toString
w.sap(new B.bR(A.A,0.5,A.w,null,0,B.a([v,h,u],x.O),null,null).au(0,B.bT(d,e+6)))
m.aM(n,w)
w=B.L()
w.b=A.ac
w.c=1.5
w.r=A.aT.gq(0)
m.aM(n,w)
w=B.L()
w.r=A.x.j(0.28).gq(0)
m.ae(d,e*0.55,w)
for(w=d.a,v=d.b,u=m.a,t=0;t<4;++t){s=g+t*3.141592653589793/2
r=Math.cos(s)
q=Math.sin(s)
p=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=A.hQ.gq(0)
p.c=3
o=p.I()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=B.L()
w.r=A.aJ.gq(0)
m.ae(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1820}
C.d5d.prototype={
$3(d,e,f){var w=this,v=w.b
return C.f9H(w.a,d,new B.u(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1821}
C.dzs.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.dzr(w,d))},
$S:130}
C.dzr.prototype={
$0(){var w=B.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aU(v==null?A.cL:v)
while(v.C())w.push(A.k.N(B.f3(v.gT(v))))
return this.a.Q.v(0,w)},
$S:0}
C.dza.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?B.jx(90-(w-65)):d},
$S:13}
C.dzj.prototype={
$1(d){return this.a.n(new C.dzi())},
$S:2}
C.dzi.prototype={
$0(){},
$S:0}
C.dzk.prototype={
$1(d){return this.a.n(new C.dzh())},
$S:2}
C.dzh.prototype={
$0(){},
$S:0}
C.dzl.prototype={
$0(){var w=this.a
return w.n(new C.dzg(w))},
$S:0}
C.dzg.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aTy()},
$S:0}
C.dzm.prototype={
$0(){var w=this.a
return w.n(new C.dzf(w))},
$S:0}
C.dzf.prototype={
$0(){return this.a.f=0},
$S:0}
C.dzn.prototype={
$0(){var w=this.a
return w.n(new C.dze(w))},
$S:0}
C.dze.prototype={
$0(){return this.a.f=1},
$S:0}
C.dzo.prototype={
$0(){var w=this.a
return w.n(new C.dzd(w,this.b))},
$S:0}
C.dzd.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dzp.prototype={
$1(d){var w=this.a
return w.n(new C.dzc(w,d))},
$S:6}
C.dzc.prototype={
$0(){return this.a.w=A.k.U(this.b)},
$S:0}
C.dzq.prototype={
$1(d){var w=this.a
w.n(new C.dzb(w,d))
if(w.ga7g()&&w.Q.K(0,w.x)){C.vk("zap",9,220,0.45)
w=w.Q
w=B.z(w,B.a2(w).k("cl.E"))
C.vh("cipher_lab",B.E(["done",w],x.N,x.z))}},
$S:6}
C.dzb.prototype={
$0(){return this.a.z=A.k.U(this.b)},
$S:0}
C.bHW.prototype={
$1(d){return d.r<=0},
$S:z+61}
C.bI6.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bI1.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bI7.prototype={
$1(d){return this.a.Kd(d)&&!d.x},
$S:z+1}
C.bI8.prototype={
$2(d,e){return Math.max(d,this.a.ax7(e))},
$S:z+6}
C.bIa.prototype={
$2(d,e){var w=this.a
return w.ce(0,d.a+"."+e,new C.bIb(w))},
$S:z+5}
C.bIb.prototype={
$0(){return this.a.a},
$S:114}
C.bI9.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:86}
C.bIc.prototype={
$2(d,e){var w=this.a
return w.ce(0,this.b.$1(this.c.$2(d,e)),new C.bId(w))},
$S:z+5}
C.bId.prototype={
$0(){return this.a.a},
$S:114}
C.bHY.prototype={
$2(d,e){var w=this.a
return w.ce(0,d.a+"."+e,new C.bHZ(w))},
$S:z+5}
C.bHZ.prototype={
$0(){return this.a.a},
$S:114}
C.bHX.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:86}
C.bI_.prototype={
$2(d,e){var w=this.a
return w.ce(0,this.b.$1(this.c.$2(d,e)),new C.bI0(w))},
$S:z+5}
C.bI0.prototype={
$0(){return this.a.a},
$S:114}
C.bHV.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.dy)>0.5*Math.abs(w.dy)},
$S:z+1}
C.bIe.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bI2.prototype={
$1(d){return d!==this.b&&this.a.aD_(d)&&Math.abs(d.dy)>0.0005},
$S:z+1}
C.bI5.prototype={
$1(d){return d.b===this.a},
$S:z+1}
C.bI4.prototype={
$1(d){return d.fr>=this.a&&!d.x},
$S:z+1}
C.bI3.prototype={
$1(d){return d.b===this.a},
$S:z+1}
C.bDn.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
C.bDo.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.cfO.prototype={
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
C.fqc.prototype={
$1(d){var w
$.W()
w=B.L()
w.r=d.gq(0)
return w},
$S:1822}
C.fqe.prototype={
$2(d,e){var w
$.W()
w=B.L()
w.b=A.ac
w.c=e
w.r=d.gq(0)
w.d=A.bL
return w},
$S:1823}
C.fqf.prototype={
$5(d,e,f,g,h){return B.bC(new B.a7(d,e,d+f,e+g),new B.b1(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1824}
C.fqd.prototype={
$3(d,e,f){var w
$.W()
w=B.L()
w.sap(new B.a3(A.aX,A.b1,A.w,B.a([e,f],x.O),null,null).au(0,d))
return w},
$S:1825}
C.bD2.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bD3.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.bD1(w))},
$S:0}
C.bD1.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bD4.prototype={
$0(){return B.a([],x.ey)},
$S:1826}
C.bD5.prototype={
$1(d){return this.a.bw(d).a>1e6},
$S:367}
C.bDk.prototype={
$2(d,e){var w
if(d==="short"){C.dG(1800,"",120,0,0.55,"noise")
C.dG(200,"",160,2.2,0.4,"saw")
B.fW()
w=this.a
if(w.c!=null)w.abj("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){C.dG(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.abj("\u26a0 Overloaded! The "+$.tx().h(0,e.b).b+" can only give about "+A.k.a9(w.a.c.yL(e),2)+" amps but your gadgets are asking for "+A.k.a9(e.CW,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.abj("Burnt out! "+e.ay)
C.dG(140,"",320,0,0.6,"noise")
C.dG(900,"",160,1.5,0.35,"square")}},
$S:z+65}
C.bDl.prototype={
$0(){},
$S:0}
C.bCG.prototype={
$0(){},
$S:0}
C.bDm.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
C.bDj.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.as(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.aH(A.c5,B.b2(p,p,p,new C.agi(w,v,u,t,s,r==null?A.iP:r,p),n),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,new C.bDd(o),new C.bDe(o),new C.bDf(o),p,p,p,p,p,p,p,p,p,p,new C.bDg(o),p,p,p,!1,A.ae)],q)
if(o.a.c.a.length===0)n.push(D.aXg)
w=o.Q
if(w!=null){v=B.m(14)
u=B.H(A.cP,A.r,1)
n.push(B.an(p,B.aH(p,B.p(p,B.B(B.a([D.eQc,B.D(B.d(w,p,p,p,p,p,p,D.eIG,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.h,p,p,new B.o(D.b15,p,u,v,p,p,A.n),p,p,p,p,A.p4,p,p,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bDh(o),p,p,p,p,p,p,!1,A.ae),p,p,10,10,8,p))}if(o.e!=null)n.push(B.an(8,o.aUG(B.B(B.a([D.bnb,new C.ff(A.XB,"Cut wire",new C.bDi(o),A.cD,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.an(8,o.c9_(w),p,p,10,10,p,p))}return B.jB(new B.am(A.W,p,A.b_,A.q,n,p),A.q,p)},
$S:444}
C.bDe.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b2h(s)
if(r!=null){t.n(new C.bDb(t,r,d))
return}w=t.aXh(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.u(v*u.a,w.d*u.b).aE(0,s)
t.n(new C.bDc(t,w))}},
$S:40}
C.bDb.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bDc.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bDf.prototype={
$1(d){var w=this.a
if(w.f!=null)w.n(new C.bD9(w,d))
else if(w.w!=null)w.n(new C.bDa(w,d.b.ao(0,w.x)))},
$S:18}
C.bD9.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bDa.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.E(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.E(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bDd.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b2h(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.ahL(u.a,u.b,v.a,v.b)!=null)C.dG(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.abh()},
$S:36}
C.bDg.prototype={
$1(d){var w=this.a,v=d.b,u=w.aXh(v)
if(u!=null){w.n(new C.bD7(w,u))
v=u.b
if(v==="tv"||v==="phone"||v==="tablet")w.csL(u)
w.a.toString
return}w.n(new C.bD8(w,w.cv6(v)))},
$S:53}
C.bD7.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
C.dG(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
C.dG(200,"",70,0,0.2,"saw")}},
$S:0}
C.bD8.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bDh.prototype={
$0(){var w=this.a
return w.n(new C.bD6(w))},
$S:0}
C.bD6.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bDi.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
C.dG(300,"",50,0,0.35,"noise")
w.abh()},
$S:0}
C.bCH.prototype={
$0(){return this.a.bjl(this.b)},
$S:0}
C.bCZ.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.B(B.a([B.d(d,w,w,w,w,w,w,D.eDt,w,w,w),B.D(B.mg(this.b.d,w,w,g,h,new C.bD0(this.a,f),A.k.E(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1827}
C.bD0.prototype={
$1(d){var w=this.a
w.n(new C.bD_(this.b,d))
w.a.toString},
$S:6}
C.bD_.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bCN.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
C.dG(260,"",70,0,0.35,"noise")
w.abh()},
$S:0}
C.bCO.prototype={
$0(){var w=this.a
return w.n(new C.bCM(w))},
$S:0}
C.bCM.prototype={
$0(){return this.a.d=null},
$S:0}
C.bCP.prototype={
$0(){this.a.n(new C.bCL(this.b,this.c))
C.dG(900,"",40,0,0.3,"noise")},
$S:0}
C.bCL.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bCR.prototype={
$0(){return this.a.aWB(this.b)},
$S:0}
C.bCS.prototype={
$0(){return this.a.YC(this.b)},
$S:0}
C.bCT.prototype={
$0(){var w=this.a
w.n(new C.bCK(this.b,this.c))
w.a.toString},
$S:0}
C.bCK.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bCU.prototype={
$0(){var w=this.a
w.n(new C.bCJ(this.b,this.c))
w.a.toString},
$S:0}
C.bCJ.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bCV.prototype={
$0(){var w=this.a
w.n(new C.bCI(this.b,this.c))
w.a.toString},
$S:0}
C.bCI.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bCW.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bCX.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bCY.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bCQ.prototype={
$1(d){return this.a.f=d},
$S:6}
C.f11.prototype={
$1(d){return d.aCE("bulb")},
$S:z+2}
C.f12.prototype={
$1(d){return d.ajg(0,"switch")&&d.aCE("bulb")},
$S:z+2}
C.f13.prototype={
$1(d){return A.d.ba(d.a,new C.f0P())},
$S:z+2}
C.f0P.prototype={
$1(d){return d.b==="motor"&&d.fr>0.3},
$S:z+1}
C.f14.prototype={
$1(d){return d.ajg(0,"resistor")&&A.d.ba(d.a,new C.f0O())},
$S:z+2}
C.f0O.prototype={
$1(d){return d.b==="led"&&d.fr>0.3&&!d.x},
$S:z+1}
C.f15.prototype={
$1(d){return!d.ajg(0,"battery")&&d.aCE("bulb")},
$S:z+2}
C.f0T.prototype={
$1(d){return A.d.ba(d.a,new C.f0N())},
$S:z+2}
C.f0N.prototype={
$1(d){return d.b==="radio"&&d.fr>0},
$S:z+1}
C.f0U.prototype={
$1(d){return A.d.ba(d.a,new C.f0M())},
$S:z+2}
C.f0M.prototype={
$1(d){return d.b==="tv"&&d.fr>0},
$S:z+1}
C.f0V.prototype={
$1(d){return A.d.ba(d.a,new C.f0L())},
$S:z+2}
C.f0L.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
C.f0W.prototype={
$1(d){var w=d.a
return A.d.ba(w,new C.f0J())&&A.d.ba(w,new C.f0K())&&d.ajg(0,"buck")},
$S:z+2}
C.f0J.prototype={
$1(d){return d.b==="tv"&&d.fr>0},
$S:z+1}
C.f0K.prototype={
$1(d){return d.b==="phone"&&d.fr>0},
$S:z+1}
C.f0X.prototype={
$1(d){var w=d.a
return A.d.ba(w,new C.f0H())&&A.d.ba(w,new C.f0I())},
$S:z+2}
C.f0H.prototype={
$1(d){return d.b==="diode"&&d.fr>0},
$S:z+1}
C.f0I.prototype={
$1(d){return d.b==="radio"&&d.fr>0},
$S:z+1}
C.f0Y.prototype={
$1(d){return A.d.ba(d.a,new C.f0G())},
$S:z+2}
C.f0G.prototype={
$1(d){return d.b==="heater"&&d.fr>0.5},
$S:z+1}
C.dJX.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a7(0)
w.v(0,v.b)},
$S:0}
C.dK5.prototype={
$1(d){var w=this.a.d
return w.aD_(d)&&w.Bs(d)},
$S:z+1}
C.dK6.prototype={
$1(d){return d.x},
$S:z+1}
C.dK7.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.dK8.prototype={
$0(){},
$S:0}
C.dJW.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.m(22),o=x.p,n=B.a([D.f4N,A.av,D.eRL,A.T],o)
for(w=this.a,v=0;v<19;++v){u=D.NI[v]
t=A.c.j(0.06)
s=new B.b1(14,14)
r=new B.ay(A.bG,1,A.r,-1)
n.push(B.aH(q,B.p(q,B.v(B.a([new B.w(u.a,q,A.kk,q,q,q,q,q,q,q,q,q),A.bA,new B.w(u.b,q,D.eJj,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.h,q,q,new B.o(t,q,new B.c1(r,r,r,r),new B.bv(s,s,s,s),q,q,A.n),q,q,q,A.cM,A.bl,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dJV(w,d,u),q,q,q,q,q,q,!1,A.ae))}return B.ew(q,D.U9,new B.C(A.c4,new B.a5(340,q,B.cM(n,q,q,q,q,A.ak,!0),q),q),q,q,q,q,A.cZ,q,new B.b6(p,A.X),q)},
$S:46}
C.dJV.prototype={
$0(){B.a9(this.b,!1).M(null)
var w=this.a
w.n(new C.dJU(w,this.c))
C.dG(800,"",120,-0.5,0.3,"square")},
$S:0}
C.dJU.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bcK()},
$S:0}
C.dJS.prototype={
$1(d){return new C.TC(this.a.d,null)},
$S:z+67}
C.dJT.prototype={
$0(){},
$S:0}
C.dK4.prototype={
$1(d){return new B.ea(new C.dK3(this.a),null)},
$S:20}
C.dK3.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.aft(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.bh:A.aY
k=B.aG(d,m,x.m).w
w=l.r
v=x.p
u=B.a([B.B(B.a([D.f2k,A.b8,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.P,B.bu(B.m(4),B.m4(A.bG,m,m,5,m,w.a/11,new B.mo(f,x.x)),A.ao),A.ab],v)
if(h)u.push(D.eUD)
else{h=f.j(0.1)
t=B.m(14)
s=B.H(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,A8.R3,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,D.Hu,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.v(B.a([r,A.av,q,new B.bI(A.a7,m,m,B.bK(!1,B.d(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new C.dK1(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.h,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bl,m,m,m))}u.push(A.T)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.b1(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dv,1,A.r,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.az:A.c
u.push(B.aH(m,B.p(m,new B.cC(A.b0,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.w(s,m,A.a4v,m,m,m,m,m,m,m,m,m),A.aw,new B.bH(1,A.bo,new B.w(r.a,m,new B.F(!0,q,m,m,m,m,13,A.I,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.h,m,m,new B.o(h,m,new B.c1(n,n,n,n),new B.bv(t,t,t,t),m,m,A.n),m,m,m,A.fk,A.p4,m,m,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.dK2(l,o,e),m,m,m,m,m,m,!1,A.ae))}return B.bq(!0,new B.d1(new B.aW(0,1/0,0,k.a.b*0.75),B.cM(u,m,X.zM,m,m,A.ak,!0),m),!0,!1,A.ah,!0,!0)},
$S:110}
C.dK1.prototype={
$0(){var w=this.a
w.n(new C.dK_(w))
this.b.$1(new C.dK0())
w.DK()},
$S:0}
C.dK_.prototype={
$0(){var w=this.a
$.aft()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.dK0.prototype={
$0(){},
$S:0}
C.dK2.prototype={
$0(){var w=this.a
w.n(new C.dJY(w,this.b))
this.c.$1(new C.dJZ())
w.DK()},
$S:0}
C.dJY.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dJZ.prototype={
$0(){},
$S:0}
C.dK9.prototype={
$0(){return B.a9(this.a,!1).nh()},
$S:0}
C.dKa.prototype={
$0(){return C.h66(this.a,"ELECTRONICS LAB",this.b,A.aY)},
$S:0}
C.dKb.prototype={
$0(){var w=this.a
return w.n(w.d.gcLB())},
$S:0}
C.dKc.prototype={
$0(){var w=this.a,v=w.d
w.n(v.gqN(v))
w.DK()},
$S:0}
C.cvP.prototype={
$2(d,e){var w=null,v=this.a.gatI().x
v===$&&B.c()
return B.b2(w,w,w,new C.b5C(v,w),A.at)},
$S:68}
C.cvO.prototype={
$3(d,e,f){var w=new B.aO($.W().r,A.ap,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.D(new B.b4(v,t))
w.D(new B.cO(v,u,v+e,u))
w.D(new B.cO(v,u,v,u+e))
w.D(new B.cO(v,u,v-e,u))
w.D(new B.cO(v,u,v,t))
w.D(new B.bE())
t=B.L()
t.r=A.c.j(f).gq(0)
this.a.aM(w,t)},
$S:666}
C.f1S.prototype={
$1(d){var w=this,v=null,u=w.c?A.u:A.a3
u=B.ib(v,v,1,v,B.dl(v,v,v,v,v,v,v,v,v,B.l(v,v,w.b,v,v,v,v,v,v,v,v,d,v,v,u,v,v,!0,v,w.d,v,v,v,v,v,v),w.a),A.a5,A.cg,v,A.ek,A.cf)
u.f_()
return u},
$S:1828}
C.eZ1.prototype={
$4(d,e,f,g){var w=d*3.141592653589793*2-1.5707963267948966,v=this.b
this.a.bE(v,v.ao(0,new B.u(Math.cos(w),Math.sin(w)).aN(0,this.c).aN(0,e)),C.BM(g,f))},
$S:1829}
C.f5v.prototype={
$3(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=this.a,a0=d.a,a1=d.b
d=this.b
w=0+a0
v=0+a1
u=$.W()
t=B.L()
t.r=A.c.j(a4).gq(0)
d.ko(new B.a7(0,0,w,v),t)
t=d.a
t.translate(a0/2,a1/2)
d.bV(0,a3)
t.translate(-a0/2,-a1/2)
switch(a2){case 0:s=B.L()
s.sap(D.bI0.au(0,new B.a7(0,0,w,v)))
d.aX(new B.a7(0,0,w,v),s)
u=u.r
s=x.v
v=new B.aO(u,A.ap,e,e,B.a([],s))
v.D(new B.b4(0,a1))
r=a0*0.25
q=a1*0.35
v.D(new B.ao(r,q))
v.D(new B.ao(a0*0.5,a1*0.7))
p=a0*0.75
o=a1*0.3
v.D(new B.ao(p,o))
v.D(new B.ao(a0,a1))
v.D(new B.bE())
n=B.L()
n.r=A.bt.gq(0)
d.aM(v,n)
n=new B.aO(u,A.ap,e,e,B.a([],s))
n.D(new B.b4(r,q))
q=a1*0.47
n.D(new B.ao(a0*0.2,q))
n.D(new B.ao(a0*0.3,q))
n.D(new B.bE())
q=B.L()
q.r=A.c.gq(0)
d.aM(n,q)
s=new B.aO(u,A.ap,e,e,B.a([],s))
s.D(new B.b4(p,o))
o=a1*0.44
s.D(new B.ao(a0*0.69,o))
s.D(new B.ao(a0*0.81,o))
s.D(new B.bE())
o=B.L()
o.r=A.c.gq(0)
d.aM(s,o)
o=a1*0.82
s=B.L()
s.r=A.fx.gq(0)
d.aX(new B.a7(0,o,w,o+a1*0.18),s)
break
case 1:u=B.L()
u.sap(D.bHq.au(0,new B.a7(0,0,w,v)))
d.aX(new B.a7(0,0,w,v),u)
u=B.L()
u.r=A.qb.gq(0)
d.ae(new B.u(a0*0.5,a1*0.52),a1*0.14,u)
u=a1*0.55
v=B.L()
v.r=A.jC.gq(0)
d.aX(new B.a7(0,u,w,u+a1*0.3),v)
v=a1*0.85
s=B.L()
s.r=A.bH.gq(0)
d.aX(new B.a7(0,v,w,v+a1*0.15),s)
s=a0*0.82
d.bE(new B.u(a0*0.8,a1*0.9),new B.u(s,u),C.BM(A.h6,a1*0.02))
for(d=a1*0.012,a2=0;a2<5;++a2){m=-2.6+a2*0.5
w=Math.cos(m)
v=Math.sin(m)
r=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
r.b=A.ac
r.c=d
r.r=A.f2.gq(0)
r.d=A.bL
l=r.I()
t.drawLine.apply(t,[s,u,s+w*a1*0.13,u+v*a1*0.1,l])
l.delete()}break
case 2:u=B.L()
u.sap(D.bGA.au(0,new B.a7(0,0,w,v)))
d.aX(new B.a7(0,0,w,v),u)
k=new B.eU()
k.dM(5)
for(w=a1*0.04,v=a1*0.03,j=a0*0.1,u=j*0.15,a2=0;a2<8;++a2){i=a1*(0.25+k.af()*0.4)
h=a0*(0.04+a2*0.12)
s=a1-i
$.W()
r=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.aF.gq(0)
l=r.I()
t.drawRect(B.c8(new B.a7(h,s,h+j,s+i)),l)
l.delete()
for(r=h+u,s+=w,g=0;g<14;++g)if(k.af()<0.6){q=r+A.o.F(g,3)*j*0.3
p=s+A.o.ak(g,3)*a1*0.06
$.W()
o=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
o.r=A.dU.gq(0)
l=o.I()
t.drawRect(B.c8(new B.a7(q,p,q+u,p+v)),l)
l.delete()}}$.W()
w=B.L()
w.r=A.bN.gq(0)
d.ae(new B.u(a0*0.85,a1*0.2),a1*0.05,w)
break
default:s=B.L()
s.sap(D.bJD.au(0,new B.a7(0,0,w,v)))
d.aX(new B.a7(0,0,w,v),s)
for(d=a1*0.08,w=a1*0.9,v=a1*0.012,s=a1*0.024,r=x.v,u=u.r,a2=0;a2<7;++a2){h=a0*(0.08+a2*0.14)
f=a1*(0.35+0.1*A.o.F(a2,3))
q=h-v
p=f*0.3
o=w-p
n=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
n.r=A.h6.gq(0)
l=n.I()
t.drawRect(B.c8(new B.a7(q,o,q+s,o+p)),l)
l.delete()
p=B.a([],r)
o=new B.aO(u,A.ap,e,e,p)
p.push(new B.b4(h,w-f))
q=w-f*0.25
p.push(new B.ao(h-d,q))
p.push(new B.ao(h+d,q))
p.push(new B.bE())
q=new B.ar(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=B.aq(A.f2,A.k2,a2/7).gq(0)
l=q.I()
q=o.gbL().a.snapshot()
t.drawPath((o.e=new B.cD(q)).a,l)
l.delete()}}t.restore()},
$S:1830}
C.eXT.prototype={
$1(d){var w=A.k.F(d,2)
return w<1?w:2-w},
$S:5}
C.f99.prototype={
$1(d){return new B.u(10+8.5*Math.sin(d*0.55),5.5+4*Math.sin(d*0.9+1))},
$S:1831}
C.fwx.prototype={
$3(d,e,f){return new C.U0(this.a,null)},
$C:"$3",
$R:3,
$S:z+68}
C.fwy.prototype={
$4(d,e,f,g){var w=x.Y
return new B.cX(e,!1,B.io(A.A,g,null,new B.bd(B.cF(A.co,e,null),new B.bl(0.85,1,w),w.k("bd<bF.T>"))),null)},
$C:"$4",
$R:4,
$S:30}
C.e7f.prototype={
$2(d,e){var w=this.a,v=w.e
return v==null?w.bRO():w.bv4(v)},
$S:56}
C.e7g.prototype={
$0(){return B.a9(this.a,!1).nh()},
$S:0}
C.e7d.prototype={
$0(){var w=this.a
return w.n(new C.e7c(w))},
$S:0}
C.e7c.prototype={
$0(){return this.a.e=0},
$S:0}
C.e7e.prototype={
$0(){var w=this.a
return w.n(new C.e7b(w,this.b))},
$S:0}
C.e7b.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e7a.prototype={
$0(){var w=this.a
return w.n(new C.e79(w))},
$S:0}
C.e79.prototype={
$0(){return this.a.e=null},
$S:0}
C.f9N.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p=this
if(g===0||h<=0)return
w=f*A.k.E(h,0,1)
v=d.ao(0,new B.u(Math.cos(e)*w,-Math.sin(e)*w))
u=p.a
$.W()
t=B.L()
t.r=A.h6.gq(0)
t.c=g*2.2
t.d=A.bL
u.bE(d,v,t)
if(h>0.95){s=Math.sin(p.b*1.6+g)*0.04
t=f*0.72
r=g-1
q=h*1.6-0.9
p.$5(v,e+0.5+s,t,r,q-(5-g)*0)
p.$5(v,e-0.5+s,t,r,q)}if(g===1&&h>0.5){t=B.L()
t.r=B.aq(A.dk,A.bh,(Math.sin(p.b*2+v.a)+1)/2).gq(0)
u.ae(v,p.c*0.035,t)}},
$S:1832}
C.fxP.prototype={
$3(d,e,f){return new C.Uu(this.a,this.c,this.b,null)},
$C:"$3",
$R:3,
$S:z+69}
C.fxQ.prototype={
$4(d,e,f,g){var w=x.Y
return new B.cX(e,!1,B.io(A.A,g,null,new B.bd(B.cF(A.co,e,null),new B.bl(0.85,1,w),w.k("bd<bF.T>"))),null)},
$C:"$4",
$R:4,
$S:30}
C.eqY.prototype={
$0(){var w=this.a
if(w.c!=null&&!w.r)w.n(new C.eqX(w))},
$S:0}
C.eqX.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eqW.prototype={
$0(){var w,v=this.a
v.f=-1
v.e=A.o.F(v.gCb()+this.b,10)
if(v.gCb()<0)v.e=v.gCb()+10
w=v.gabk().y
w=w==null?null:A.o.ak(w.a,1000)
v.x=w==null?0:w
v.agd()},
$S:0}
C.eqZ.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1
w.agd()},
$S:0}
C.er7.prototype={
$0(){var w=this.a
return w.n(w.gcsd())},
$S:0}
C.er6.prototype={
$2(d,e){var w=null,v=this.a,u=v.gabk().y,t=u==null?w:A.o.ak(u.a,1000),s=(t==null?0:t)/1000,r=v.x===0&&v.a.d?s:99
return B.b2(w,w,w,new C.bqS(v.gCb(),v.f,s,r,w),A.fa)},
$S:68}
C.er5.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.m(14),t=B.H(h?g:A.b9,A.r,1)
return B.aH(w,B.p(w,B.v(B.a([B.V(d,g,w,w,w,20),A.tI,B.d(e,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.R,0,A.p),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,A.jH,A.kY,w,w,56),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.ae)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$S:1833}
C.er0.prototype={
$0(){return this.a.atJ(-1)},
$S:0}
C.er1.prototype={
$0(){return this.a.atJ(1)},
$S:0}
C.er2.prototype={
$0(){return this.a.atJ(0)},
$S:0}
C.er3.prototype={
$0(){var w=this.a
return w.n(new C.er_(w))},
$S:0}
C.er_.prototype={
$0(){var w=this.a
w.r=!w.r
w.agd()},
$S:0}
C.er4.prototype={
$0(){return this.a.aWr(0)},
$S:0}
C.eqV.prototype={
$0(){var w=this.a
return w.n(new C.eqS(w))},
$S:0}
C.eqS.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eqU.prototype={
$2(d,e){var w=null,v=D.tb[e].d.j(0.18),u=B.m(12),t=B.H(D.tb[e].d.j(0.6),A.r,1),s=D.tb[e]
return B.aH(w,B.p(w,B.v(B.a([B.d(s.b,w,w,w,w,w,w,A.Rn,w,w,w),B.d(s.a,w,1,A.a2,w,w,w,D.a4z,w,w,w)],x.p),A.m,w,A.b7,A.j,0,A.p),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eqT(this.a,e),w,w,w,w,w,w,!1,A.ae)},
$S:73}
C.eqT.prototype={
$0(){return this.a.aWr(this.b)},
$S:0}
C.dZ8.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new C.dZ7(w,d))},
$S:130}
C.dZ7.prototype={
$0(){var w=this.a,v=this.b,u=J.a8(v),t=B.aN(u.h(v,"best"))
t=t==null?null:A.k.N(t)
w.e=t==null?0:t
v=B.aN(u.h(v,"level"))
v=v==null?null:A.k.N(v)
if(v==null)v=0
w.d=v
w.f=C.fIk(v)},
$S:0}
C.dZ9.prototype={
$0(){},
$S:0}
C.dYZ.prototype={
$0(){var w=this.a,v=A.o.E(this.b,0,59)
w.d=v
w.f=C.fIk(v)
w.r.a7(0)
w.x=!1},
$S:0}
C.dZ_.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.guG().r){B.jF()
return}q.m(0,p,"/")}else if(o==="/")q.m(0,p,"\\")
else q.W(0,p)
C.vk("click",s.c+s.d,60,0.4)
if(C.h6f(r.guG(),q).b.a===r.guG().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}C.vh("laser_maze",B.E(["best",p,"level",Math.min(q,59)],x.N,x.z))
C.AG("bell",D.ak3,700,0.45)
for(q=r.guG().c,q=B.ef(q,q.r,B.a2(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new B.A(new B.u((A.o.F(t,7)+0.5)*p+w,(A.o.ak(t,7)+0.5)*p+v),0))}}},
$S:0}
C.dZ2.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new B.as(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=B.a([B.aH(A.c5,B.b2(s,s,s,new C.bdz(r.guG(),w,v.a,u,r.w,r.z,s),q),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dZ0(r),s,s,s,!1,A.ae),B.an(s,B.e1(B.B(B.a([B.d("LEVEL "+(r.d+1),s,s,s,s,s,s,E.aKc,s,s,s),B.d(""+u.a+"/"+r.guG().c.a+" \u2605   mirrors "+w.a+"/"+r.guG().r,s,s,s,s,s,s,P.a45,s,s,s)],t),A.m,s,A.hF,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(C.f5e("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.bh,B.a([new C.ff(A.jl,"Next level",new C.dZ1(r),A.bh,s)],t)))
return new B.am(A.W,s,A.b_,A.q,w,s)},
$S:61}
C.dZ0.prototype={
$1(d){return this.a.c_M(d.b)},
$S:53}
C.dZ1.prototype={
$0(){var w=this.a
return w.abm(w.d+1)},
$S:0}
C.dZ3.prototype={
$0(){var w=this.a,v=w.r
return w.n(v.gqN(v))},
$S:0}
C.dZ4.prototype={
$0(){var w=this.a
return w.abm(w.d+1)},
$S:0}
C.dZ5.prototype={
$0(){var w=this.a
return w.abm(w.d-1)},
$S:0}
C.dZ6.prototype={
$0(){return this.a.abm(this.b)},
$S:0}
C.da0.prototype={
$1(d){var w=this.b
return new B.u(this.a+(A.o.F(d,7)+0.5)*w,this.c+(A.o.ak(d,7)+0.5)*w)},
$S:714}
C.da3.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new B.u(r,s):new B.u(r,r),p=new B.u(-q.a,-q.b)
r=this.c
w=t.ao(0,q)
v=t.ao(0,p)
$.W()
u=B.L()
u.r=(f?A.fJ:A.aJ).gq(0)
u.c=7
u.d=A.bL
r.bE(w,v,u)
w=t.ao(0,q)
v=t.ao(0,p)
u=B.L()
u.r=A.c.gq(0)
u.c=2.4
u.d=A.bL
r.bE(w,v,u)},
$S:1835}
C.da1.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:458}
C.da2.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:458}
C.dZr.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.dZq(w,d))},
$S:130}
C.dZq.prototype={
$0(){var w=B.aN(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
C.dZs.prototype={
$0(){},
$S:0}
C.dZc.prototype={
$1(d){return d===0},
$S:125}
C.dZl.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new B.x(1,q[0],q[1],q[2],A.t)
q=B.d("ROUND "+B.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,E.a4j,s,s,s)
w=r.z==="play"?A.k.dE(r.y):20
v=x.p
w=B.B(B.a([q,B.d(""+w+" s",s,s,s,s,s,s,B.l(s,s,r.y<6?A.cD:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.d("SCORE "+r.w,s,s,s,s,s,s,P.a45,s,s,s)],v),A.m,s,A.hF,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dv:p
t=B.m(22)
t=B.D(B.p(s,s,A.h,s,s,new B.o(u,s,B.H(A.b9,A.r,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=B.a([B.v(B.a([new B.C(D.bhh,w,s),B.D(B.B(B.a([B.D(new B.C(A.bS,B.v(B.a([t,A.ar,B.d(q?"TARGET":"TARGET: "+r.gcqm(),s,s,s,s,s,s,D.aKY,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),B.D(new B.C(A.bS,B.v(B.a([B.D(B.b2(s,s,s,new C.bdO(r.f,s),A.fa),1),A.ar,B.d("YOURS \xb7 "+A.k.U(A.k.E(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aKY,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(C.f5e("Light Mixer","Match each colour with red, green and blue light."+q,A.b6,B.a([new C.ff(A.iM,"Start",new C.dZi(r),A.bh,s)],v)))}if(r.z==="result")w.push(C.f5e(r.Q,"Score so far: "+r.w,A.aK,B.a([new C.ff(A.jl,"Next colour",new C.dZj(r),A.bh,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(C.f5e("Finished! "+q,u,A.bh,B.a([new C.ff(A.m5,"Play again",new C.dZk(r),A.bh,s)],v)))}return new B.am(A.W,s,A.a9,A.q,w,s)},
$S:61}
C.dZi.prototype={
$0(){var w=this.a
return w.n(new C.dZe(w))},
$S:0}
C.dZe.prototype={
$0(){var w=this.a
w.w=w.r=0
w.atL()},
$S:0}
C.dZj.prototype={
$0(){var w=this.a
return w.n(w.gc_K())},
$S:0}
C.dZk.prototype={
$0(){var w=this.a
return w.n(new C.dZd(w))},
$S:0}
C.dZd.prototype={
$0(){var w=this.a
w.w=w.r=0
w.atL()},
$S:0}
C.dZm.prototype={
$1(d){var w=this.a
return w.n(new C.dZh(w,d))},
$S:6}
C.dZh.prototype={
$0(){var w=A.k.U(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
C.dZn.prototype={
$1(d){var w=this.a
return w.n(new C.dZg(w,d))},
$S:6}
C.dZg.prototype={
$0(){var w=A.k.U(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
C.dZo.prototype={
$1(d){var w=this.a
return w.n(new C.dZf(w,d))},
$S:6}
C.dZf.prototype={
$0(){var w=A.k.U(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
C.dZp.prototype={
$0(){var w=this.a
return w.n(w.gc_L())},
$S:0}
C.f1J.prototype={
$0(){return D.dJG},
$S:z+70}
C.f1K.prototype={
$0(){return D.dgV},
$S:z+71}
C.f1L.prototype={
$0(){return D.ddt},
$S:z+72}
C.f1M.prototype={
$0(){return D.dgl},
$S:z+73}
C.f1N.prototype={
$0(){return D.dlg},
$S:z+74}
C.f1O.prototype={
$0(){return D.dFp},
$S:z+75}
C.f1P.prototype={
$0(){return D.dHB},
$S:z+76}
C.f1Q.prototype={
$0(){return D.dkA},
$S:z+77}
C.caD.prototype={
$0(){return B.a9(this.a,!1).nh()},
$S:0}
C.caE.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=B.a([],k)
for(w=$.h9E(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.b1(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ab(0,A.G,p.j(0.4),A.dn,16)],t)
n=A.c.j(0.85)
j.push(B.aH(m,B.p(m,new B.am(A.W,m,A.a9,A.q,B.a([new B.cG(m,-6,-6,m,m,m,new B.w(r.c,m,I.R2,m,m,m,m,m,m,m,m,m),m),new B.bI(A.lf,m,m,B.v(B.a([new B.w(r.a,m,D.eNQ,m,m,m,m,m,m,m,m,m),A.d4,new B.w(r.b,m,new B.F(!0,n,m,m,m,m,12,A.a3,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.R,0,A.p),m)],k),m),A.h,m,m,new B.o(m,m,m,new B.bv(q,q,q,q),p,new B.a3(A.ax,A.aC,A.w,o,m,m),A.n),m,v,m,m,A.bC,m,m,l),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.caC(d,r),m,m,m,m,m,m,!1,A.ae))}return B.c9(A.bJ,j,A.bx,14,14)},
$S:168}
C.caC.prototype={
$0(){return B.a9(this.a,!1).cp(B.eD(new C.caB(this.b),!1,null,x.H))},
$S:0}
C.caB.prototype={
$1(d){return this.a.f.$0()},
$S:43}
C.ev5.prototype={
$0(){var w=this.a
return w.w=w.d[w.b_C(w.f)]},
$S:0}
C.ev1.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cB.af()*7},
$S:0}
C.ev0.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bJ(0,A.c0)
w.w=""},
$S:0}
C.ev3.prototype={
$0(){var w=this.a
return w.n(new C.ev2(w,this.b))},
$S:0}
C.ev2.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cu(w,this.b)},
$S:0}
C.ev4.prototype={
$1(d){return this.a.aV5(0)},
$S:2}
C.dM8.prototype={
$0(){return C.AG("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.dM9.prototype={
$0(){},
$S:0}
C.dM3.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.dM5.prototype={
$0(){return this.a.aV7(this.b)},
$S:0}
C.dM6.prototype={
$0(){var w=this.a
return w.n(new C.dM4(w))},
$S:0}
C.dM4.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.dM7.prototype={
$0(){var w=this.a
return w.aV7(w.d)},
$S:0}
C.dxT.prototype={
$2(d,e){return d+e},
$S:93}
C.dxU.prototype={
$0(){},
$S:0}
C.dxO.prototype={
$2(d,e){return d+e},
$S:93}
C.dxR.prototype={
$0(){var w=this.a
return w.n(new C.dxQ(w,this.b))},
$S:0}
C.dxQ.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dxS.prototype={
$0(){var w=this.a
return w.n(new C.dxP(w))},
$S:0}
C.dxP.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.dJr.prototype={
$0(){return C.qk(this.b,this.a.d,"drawing")},
$S:0}
C.dJs.prototype={
$1(d){var w=this.a
return w.n(new C.dJq(w,d))},
$S:40}
C.dJq.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aFf(u,v,t))},
$S:0}
C.dJt.prototype={
$1(d){var w=this.a
return w.n(new C.dJp(w,d))},
$S:18}
C.dJp.prototype={
$0(){return A.d.gaj(this.a.e).c.push(this.b.b)},
$S:0}
C.dJu.prototype={
$1(d){var w=this.a
return w.n(new C.dJo(w,d))},
$S:23}
C.dJo.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aFf(u,v,t))},
$S:0}
C.dJv.prototype={
$0(){var w=this.a
return w.n(new C.dJn(w,this.b))},
$S:0}
C.dJn.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.dJw.prototype={
$1(d){var w=this.a
return w.n(new C.dJm(w,d))},
$S:6}
C.dJm.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dJx.prototype={
$0(){var w=this.a
return w.n(new C.dJl(w))},
$S:0}
C.dJl.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dJy.prototype={
$0(){var w=this.a
return w.n(new C.dJk(w))},
$S:0}
C.dJk.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.dJz.prototype={
$0(){var w=this.a
return w.n(A.d.gqN(w.e))},
$S:0}
C.dJA.prototype={
$0(){var w=this.a
return w.n(new C.dJj(w))},
$S:0}
C.dJj.prototype={
$0(){var w=this.a
w.x=D.aqO[A.o.F(A.d.cP(D.aqO,w.x)+1,4)]},
$S:0}
C.e3z.prototype={
$0(){return this.a.f.K(0,this.b)},
$S:0}
C.e3A.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.AG("bell",B.a([0,4,7],w),500,0.45)
u.n(new C.e3y(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.AG("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
C.e3y.prototype={
$0(){var w=this.a
w.r.v(0,B.a([this.b,this.c],x.t))
w.f.a7(0)},
$S:0}
C.e3B.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new C.e3x(w))},
$S:11}
C.e3x.prototype={
$0(){var w=this.a
w.f.a7(0)
w.x=!1},
$S:0}
C.e3F.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return B.aH(w,B.mE(new C.e3D(v,e),w,A.ba,A.qg,w,new B.bl(0,u,x.Y),x.i),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e3E(v,e),w,w,w,w,w,w,!1,A.ae)},
$S:73}
C.e3E.prototype={
$0(){return this.a.c0H(this.b)},
$S:0}
C.e3D.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.di(),m=n.a
m.$flags&2&&B.ah(m)
m[11]=0.001
n.fl(3.141592653589793*e)
m=B.m(16)
w=o?p:D.bJ3
if(o)v=q.a.r.t(0,q.b)?A.bh.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.H(u.r.t(0,t)?A.bh:A.b9,A.r,1)
if(o){r=B.di()
r.fl(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fo(A.A,B.d(u[t],p,p,p,p,p,p,D.eLd,p,p,p),p,r,!0)
u=r}else u=D.f3D
return B.fo(A.A,B.p(A.A,u,A.h,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:134}
C.e3G.prototype={
$0(){var w=this.a
return w.n(new C.e3C(w,this.b))},
$S:0}
C.e3C.prototype={
$0(){var w=this.a
w.d=this.b.a
w.apd()},
$S:0}
C.e3H.prototype={
$0(){var w=this.a
return w.n(w.gbDy())},
$S:0}
C.ecb.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.ecc.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.ec9.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eca.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.ec8(w))},
$S:11}
C.ec8.prototype={
$0(){return this.a.f=-1},
$S:0}
C.ecd.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.ece.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.ecf.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aV6()},
$S:11}
C.ecg.prototype={
$0(){return this.a.c0N(this.b)},
$S:0}
C.eqt.prototype={
$1(d){return B.t(d.h(0,1))+","},
$S:70}
C.eqC.prototype={
$3$big(d,e,f){var w=null,v=B.D(B.d(d,w,1,A.a2,w,w,w,B.l(w,w,A.aQ,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.C(A.kY,B.B(B.a([v,A.aa,new B.dm(1,A.cl,B.f_(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,A.eb),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1837}
C.eqy.prototype={
$1(d){return this.a.n(new C.eqx())},
$S:2}
C.eqx.prototype={
$0(){},
$S:0}
C.eqz.prototype={
$0(){var w=this.a
return w.n(new C.eqw(w,this.b))},
$S:0}
C.eqw.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eqA.prototype={
$1(d){var w=this.a
return w.n(new C.eqv(w,d))},
$S:6}
C.eqv.prototype={
$0(){return this.a.f=A.k.U(this.b)},
$S:0}
C.eqB.prototype={
$0(){var w=this.a
return w.n(new C.equ(w))},
$S:0}
C.equ.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.e2e.prototype={
$0(){},
$S:0}
C.e2f.prototype={
$0(){},
$S:0}
C.e27.prototype={
$0(){var w=this.a
return w.n(new C.e26(w))},
$S:0}
C.e26.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.bY(u,1,!1,x.S)
w.r=0.9
C.a6e("hat",0.6)},
$S:0}
C.e28.prototype={
$0(){var w=this.a
return w.n(new C.e25(w))},
$S:0}
C.e25.prototype={
$0(){this.a.y=1.1
C.l3("bell",36,200,0.4)},
$S:0}
C.e29.prototype={
$0(){var w=this.a
return w.n(new C.e24(w))},
$S:0}
C.e24.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aB(Math.max(v,u)-t+1)
w.as=u
C.l3("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.e2a.prototype={
$0(){var w=this.a
return w.n(new C.e23(w,this.b))},
$S:0}
C.e23.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.e2b.prototype={
$1(d){var w=this.a
return w.n(new C.e22(w,d))},
$S:6}
C.e22.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.U(this.b),r=J.e_(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.e2c.prototype={
$1(d){var w=this.a
return w.n(new C.e21(w,d))},
$S:6}
C.e21.prototype={
$0(){return this.a.z=A.k.U(this.b)},
$S:0}
C.e2d.prototype={
$1(d){var w=this.a
return w.n(new C.e20(w,d))},
$S:6}
C.e20.prototype={
$0(){return this.a.Q=A.k.U(this.b)},
$S:0}
C.cmI.prototype={
$0(){return B.a9(this.a,!1).nh()},
$S:0}
C.cmJ.prototype={
$0(){var w=this.a
return C.h66(this.b,w.c,w.e,w.d)},
$S:0}
C.fyf.prototype={
$1(d){var w,v=null,u=B.m(24),t=this.a,s=t.j(0.4)
t=B.d(this.b,v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=B.d(this.c,v,v,v,v,v,v,D.eDZ,v,v,v)
return B.eq(B.a([B.bK(!1,D.eUI,v,v,!0,v,v,new C.fye(d),v,v)],x.p),v,v,D.rz,w,v,v,v,new B.b6(u,new B.ay(s,1,A.r,-1)),t,v)},
$S:21}
C.fye.prototype={
$0(){B.a9(this.a,!1).M(null)
return null},
$S:0}
C.cmE.prototype={
$0(){B.eH()
this.a.e.$0()},
$S:0}
C.cmD.prototype={
$0(){B.eH()
this.a.e.$0()},
$S:0}
C.cmK.prototype={
$0(){B.eH()
this.a.e.$0()},
$S:0}
C.cmF.prototype={
$0(){var w=this.a
A.d.W(w.fc$,this.b.b9())
if(w.c!=null)this.c.$0()},
$S:0}
C.cmH.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.E((v-w.kA$.a)/1e6,0,0.04)
w.kA$=d
w.fF$=A.o.ak(v,1000)
w.l4(u)
if(w.c!=null)w.n(new C.cmG())},
$S:8}
C.cmG.prototype={
$0(){},
$S:0}
C.cay.prototype={
$2(d,e){var w,v,u,t
for(w=e.length,v=this.a,u=v.$flags|0,t=0;t<w;++t){u&2&&B.ah(v,9)
v.setUint8(d+t,e.charCodeAt(t))}},
$S:458}
C.caA.prototype={
$0(){var w=this
return C.hnD(w.a,w.b,w.c,w.d,w.e)},
$S:323}
C.caz.prototype={
$0(){var w=this
return C.l3(w.a,w.b,w.c,w.d)},
$S:1}
C.dOR.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.dOQ(w,d))},
$S:z+79}
C.dOQ.prototype={
$0(){return this.a.ckO(this.b)},
$S:0}
C.dOj.prototype={
$0(){var w,v,u,t=this.a,s=J.a8(t),r=s.gJ(t),q=new Float64Array(r*4)
for(w=0;w<s.gJ(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:1838}
C.dOh.prototype={
$0(){return this.a.id=D.a_A},
$S:0}
C.dOi.prototype={
$0(){var w=this.b.a,v=B.U(w).k("a4<1>")
v=B.oL(new B.a4(w,new C.dOg(this.c),v),6,v.k("G.E"))
w=B.z(v,B.a2(v).k("G.E"))
return this.a.id=w},
$S:0}
C.dOg.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+80}
C.dOf.prototype={
$1(d){var w=null,v=B.ci(B.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,B.l(w,w,A.af,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.q,w,A.z,w,w,w,w,A.ak)
return B.eq(B.a([B.bK(!1,A.pE,w,w,!0,w,w,new C.dOe(d),w,w)],x.p),w,w,D.rz,v,w,w,w,w,D.f3H,w)},
$S:21}
C.dOe.prototype={
$0(){B.a9(this.a,!1).M(null)
return null},
$S:0}
C.dOC.prototype={
$0(){return C.qk(this.b,this.a.d,"earth")},
$S:0}
C.dOD.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new B.as(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gUd()
r=p.z
o=B.a([B.aH(A.c5,B.b2(q,q,q,new C.bc0(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dOq(p),new C.dOr(p),new C.dOs(p),q,q,q,q,q,q,q,new C.dOt(p),q,q,q,!1,A.ae)],x.p)
if(p.r==null)o.push(A1.a7X)
w=this.b
if(w!=null)o.push(B.an(8,p.c1o(w),q,q,10,10,q,q))
return new B.ep(new B.am(A.W,q,A.b_,A.q,o,q),p.d)},
$S:199}
C.dOr.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:334}
C.dOs.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.E(u.go*d.d,0.8,16)
else{w=57.2958/(u.gUd()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.E(u.x+v.b*w,-85,85)}},
$S:242}
C.dOq.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gUd()*u.z)
v=d.a.a
u.Q=A.k.E(-v.a*w,-160,160)
u.as=A.k.E(v.b*w,-100,100)},
$S:529}
C.dOt.prototype={
$1(d){var w=this.a,v=w.c1r(d.b)
if(v!=null)w.n(new C.dOk(w,v))
else w.n(new C.dOl(w))},
$S:53}
C.dOk.prototype={
$0(){return this.a.aue(this.b)},
$S:0}
C.dOl.prototype={
$0(){return this.a.fx=null},
$S:0}
C.dOE.prototype={
$0(){var w=this.a
w.e.bJ(0,A.c0)
w.n(new C.dOp(w,this.b))},
$S:0}
C.dOp.prototype={
$0(){var w=this.a
w.id=D.a_A
w.aue(this.b)},
$S:0}
C.dOI.prototype={
$0(){var w=this.a
return w.n(new C.dOB(w))},
$S:0}
C.dOB.prototype={
$0(){var w=this.a
w.fx=null
w.aqn(15,w.y,1)},
$S:0}
C.dOJ.prototype={
$0(){var w=this.a
return w.n(new C.dOA(w,this.b))},
$S:0}
C.dOA.prototype={
$0(){var w=this.b.b
return this.a.aqn(w.a,w.b,w.c)},
$S:0}
C.dOK.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.n(new C.dOz(w,v))},
$S:0}
C.dOz.prototype={
$0(){var w=this.b.a
return this.a.aue(w[A.cB.aB(w.length)])},
$S:0}
C.dOL.prototype={
$1(d){var w=this.a
return w.n(new C.dOy(w,d))},
$S:6}
C.dOy.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
C.dOM.prototype={
$1(d){var w=this.a
return w.n(new C.dOx(w,d))},
$S:6}
C.dOx.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.dON.prototype={
$1(d){var w=this.a
return w.n(new C.dOw(w,d))},
$S:6}
C.dOw.prototype={
$0(){return this.a.fr=this.b},
$S:0}
C.dOO.prototype={
$0(){var w=this.a
return w.n(new C.dOv(w))},
$S:0}
C.dOv.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.dOP.prototype={
$0(){var w=this.a
return w.n(new C.dOu(w))},
$S:0}
C.dOu.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
C.dOF.prototype={
$0(){var w=this.a
return w.n(new C.dOo(w))},
$S:0}
C.dOo.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.dOG.prototype={
$0(){var w=this.a
return w.n(new C.dOn(w))},
$S:0}
C.dOn.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.dOH.prototype={
$0(){var w=this.a
return w.n(new C.dOm(w))},
$S:0}
C.dOm.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
C.dOd.prototype={
$2(d,e){var w=null
return B.D(B.v(B.a([B.d(d,w,w,w,w,w,w,D.aJF,w,w,w),A.tI,B.d(e,w,2,A.a2,w,w,w,A.Rj,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:129}
C.dOc.prototype={
$0(){var w=this.a
return w.n(new C.dOb(w))},
$S:0}
C.dOb.prototype={
$0(){return this.a.fx=null},
$S:0}
C.d60.prototype={
$0(){var w=null,v=B.ib(w,w,w,w,B.dl(w,w,w,w,w,w,w,w,w,B.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.I,w,w,!0,w,w,w,w,w,D.cJx,w,w),this.a),A.a5,A.cg,w,A.ek,A.cf)
v.f_()
return v},
$S:328}
C.d61.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new B.u(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1839}
C.f1C.prototype={
$0(){return D.diS},
$S:z+81}
C.f1D.prototype={
$0(){return D.dHj},
$S:z+82}
C.f1E.prototype={
$0(){return D.diU},
$S:z+83}
C.f1F.prototype={
$0(){return D.ddf},
$S:z+84}
C.f1G.prototype={
$0(){return D.diQ},
$S:z+85}
C.f1H.prototype={
$0(){return D.dFq},
$S:z+86}
C.f1I.prototype={
$0(){return D.dFo},
$S:z+87}
C.erg.prototype={
$0(){return B.a9(this.a,!1).nh()},
$S:0}
C.erh.prototype={
$0(){var w=this.a
return w.n(new C.erf(w))},
$S:0}
C.erf.prototype={
$0(){var w=this.a
return w.d=A.o.F(w.gaOo()+1,16)},
$S:0}
C.eri.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=B.a([],l)
for(w=$.h9D(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new B.b1(18,18)
q=s.d
p=new B.ay(q.j(0.5),1,A.r,-1)
o=B.a([q.j(0.28),D.b7W],u)
k.push(B.aH(n,B.p(n,B.v(B.a([B.V(s.c,q,n,n,n,30),A.P,new B.w(s.a,n,D.eIh,n,A.L,n,n,n,n,2,n,n),A.d4,new B.w(s.b,n,D.eNe,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.b7,A.j,0,A.p),A.h,n,n,new B.o(n,n,new B.c1(p,p,p,p),new B.bv(r,r,r,r),n,new B.a3(A.ax,A.aC,A.w,o,n,n),A.n),n,v,n,n,A.ck,n,n,m),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ere(d,s),n,n,n,n,n,n,!1,A.ae))}return B.c9(A.fG,k,A.bx,10,10)},
$S:168}
C.ere.prototype={
$0(){return B.a9(this.a,!1).cp(B.eD(new C.erd(this.b),!1,null,x.H))},
$S:0}
C.erd.prototype={
$1(d){return this.a.e.$0()},
$S:43}
C.ejp.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
C.ejA.prototype={
$0(){return C.qk(this.b,this.a.d,"solar-system")},
$S:0}
C.ejB.prototype={
$2(d,e){var w,v=null,u=this.a,t=new B.as(e.b,e.d)
u.ch=t
t=B.a([B.aH(A.c5,B.b2(v,v,v,new C.bog(u,v),t),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.ejx(u),new C.ejy(u),v,v,v,v,v,v,v,new C.ejz(u),v,v,v,!1,A.ae)],x.p)
w=this.b
if(w!=null)t.push(B.an(8,u.c1t(w),v,v,10,10,v,v))
return new B.ep(new B.am(A.W,v,A.b_,A.q,t,v),u.d)},
$S:199}
C.ejx.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:334}
C.ejy.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.E(w.y*d.d,0.5,9)
else w.x=w.x.ao(0,d.a)},
$S:242}
C.ejz.prototype={
$1(d){var w=this.a,v=w.c1w(d.b)
if(v!=null)w.aVs(v)},
$S:53}
C.ejC.prototype={
$0(){var w=this.a
return w.n(new C.ejw(w))},
$S:0}
C.ejw.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
C.ejD.prototype={
$0(){return this.a.aVs(this.b)},
$S:0}
C.ejE.prototype={
$1(d){var w=this.a
return w.n(new C.ejv(w,d))},
$S:6}
C.ejv.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
C.ejF.prototype={
$1(d){var w=this.a
return w.n(new C.eju(w,d))},
$S:6}
C.eju.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ejG.prototype={
$0(){var w=this.a
return w.n(new C.ejt(w))},
$S:0}
C.ejt.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
C.ejH.prototype={
$0(){var w=this.a
return w.n(new C.ejs(w))},
$S:0}
C.ejs.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.ejI.prototype={
$0(){var w=this.a
return w.n(new C.ejr(w))},
$S:0}
C.ejr.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.ejJ.prototype={
$0(){var w=this.a
return w.n(new C.ejq(w))},
$S:0}
C.ejq.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.ejo.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.a9(d/365.25,w)+" Earth years"}else w=A.k.a9(d,0)+" Earth days"
return w},
$S:362}
C.ejn.prototype={
$2(d,e){var w=null
return B.D(B.v(B.a([B.d(d,w,w,w,w,w,w,D.aJF,w,w,w),A.tI,B.d(e,w,2,A.a2,w,w,w,A.Rj,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:129}
C.ejm.prototype={
$0(){var w=this.a
return w.n(new C.ejl(w))},
$S:0}
C.ejl.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
C.eL4.prototype={
$0(){var w=null,v=B.ib(w,w,w,w,B.dl(w,w,w,w,w,w,w,w,w,B.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.I,w,w,!0,w,w,w,w,w,E.NQ,w,w),this.a),A.a5,A.cg,w,A.ek,A.cf)
v.f_()
return v},
$S:328}
C.eL5.prototype={
$1(d){return d.c>0},
$S:z+10}
C.eL6.prototype={
$1(d){return d.c>0},
$S:z+10}
C.dOV.prototype={
$0(){},
$S:0}
C.dPn.prototype={
$1(d){return d!=null},
$S:355}
C.dP9.prototype={
$0(){var w=this.a
return w.n(new C.dP0(w,this.b))},
$S:0}
C.dP0.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dPa.prototype={
$0(){var w=this.a
return w.n(new C.dP_(w))},
$S:0}
C.dP_.prototype={
$0(){return this.a.f=!1},
$S:0}
C.dPb.prototype={
$0(){var w=this.a
return w.n(new C.dP8(w))},
$S:0}
C.dP8.prototype={
$0(){return this.a.f=!0},
$S:0}
C.dPf.prototype={
$0(){var w=this.a
return w.n(new C.dP7(w))},
$S:0}
C.dP7.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dPg.prototype={
$1(d){var w=this.a
return w.n(new C.dP6(w,d))},
$S:6}
C.dP6.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.dPh.prototype={
$0(){var w=this.a
return w.n(w.gcnV())},
$S:0}
C.dPi.prototype={
$1(d){var w=this.a
return w.n(new C.dP5(w,d))},
$S:6}
C.dP5.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.dPj.prototype={
$1(d){var w=this.a
return w.n(new C.dP4(w,d))},
$S:6}
C.dP4.prototype={
$0(){return this.a.ax=this.b},
$S:0}
C.dPk.prototype={
$1(d){var w=this.a
return w.n(new C.dP3(w,d))},
$S:6}
C.dP3.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dPl.prototype={
$1(d){var w=this.a
return w.n(new C.dP2(w,d))},
$S:6}
C.dP2.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.dPm.prototype={
$0(){var w=this.a
return w.n(new C.dP1(w))},
$S:0}
C.dP1.prototype={
$0(){return this.a.ay=4},
$S:0}
C.dPc.prototype={
$0(){var w=this.a
return w.n(new C.dOZ(w))},
$S:0}
C.dOZ.prototype={
$0(){return this.a.ay=7.67},
$S:0}
C.dPd.prototype={
$0(){var w=this.a
return w.n(new C.dOY(w))},
$S:0}
C.dOY.prototype={
$0(){return this.a.ay=9},
$S:0}
C.dPe.prototype={
$0(){var w=this.a
return w.n(new C.dOX(w))},
$S:0}
C.dOX.prototype={
$0(){return this.a.ay=11.3},
$S:0}
C.dOU.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=B.a([B.bZ(0,B.bU(g,new B.o(D.b6G,g,g,B.m(20),g,g,A.n),A.bb),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.xF[q]
n=B.aY(o.d)
o=B.v(B.a([new B.w(o.a,g,new B.F(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new B.w(B.t(D.xF[q].b)+" m/s\xb2",g,D.eMz,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=B.p(g,g,A.h,A.dv,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?B.V(O.Xn,B.aY(D.xF[q].d),g,g,g,22):B.p(g,g,A.h,g,g,new B.o(B.aY(D.xF[q].d),g,g,g,B.a([new B.ab(0,A.G,B.aY(D.xF[q].d).j(0.6),A.J,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=B.p(g,g,A.h,B.aY(D.xF[q].d).j(0.6),g,g,g,3,g,A.fs,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.a9(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,B.a([new B.cG(p,8,g,g,f,g,o,g),new B.cG(n-0.5,54,g,e,g,g,m,g),new B.cG(n-11,54+s*(l/20),g,g,g,g,k,g),new B.cG(p,g,g,8,f,g,B.v(B.a([j,A.av,new B.w(i,g,A.vm,g,g,g,g,g,g,g,g,g),new B.w(h,g,D.eF8,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.ea(v,new C.dOT()))a1.push(D.aXx)
return new B.am(A.W,g,A.a9,A.q,a1,g)},
$S:61}
C.dOT.prototype={
$1(d){return d==null},
$S:355}
C.dOW.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.E(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=B.m(8)
p=B.p(v,v,A.h,v,v,new B.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=B.dj(v,v,v,v,A.ba,new B.o(v,v,v,B.m(8),v,new B.a3(A.a4,A.a7,A.w,B.a([B.aY(t).j(0.9),B.aY(t).j(0.4)],x.O),v,v),A.n),A.i3,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.a9(r,1):C.Fu(r)
u=u.ax*9.81/s
u=u<10?A.k.a9(u,2):A.k.a9(u,0)
return new B.am(A.W,v,A.a9,A.q,B.a([p,t,B.an(v,B.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.eKZ,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:61}
C.dOS.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=B.b2(v,v,v,new C.b7g(new B.u(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.at)
o=A.x.j(0.55)
p=B.m(14)
q=B.H(A.bG,A.r,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.bh
else u=A.a.t(u,"escapes")?A.aY:A.c
u=B.d(t,v,v,v,v,v,v,B.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.a9(Math.sqrt(58.86870477034412),1)
s=A.k.a9(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+C.Fu(A.k.E(r.cx.gcj()-6371,0,9e9))+" km":""
w=x.p
return new B.am(A.W,v,A.b_,A.q,B.a([n,B.an(v,B.p(v,B.v(B.a([u,A.bA,B.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,F.aLd,v,v,v)],w),A.F,v,A.e,A.R,0,A.p),A.h,v,v,new B.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bS,v,v,v),v,v,12,12,8,v)],w),v)},
$S:61}
C.ecj.prototype={
$0(){return C.qk(this.b,this.a.d,"size-compare")},
$S:0}
C.eck.prototype={
$0(){var w=this.a
return w.n(new C.eci(w,this.b))},
$S:0}
C.eci.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ecl.prototype={
$0(){var w=this.a
return w.n(new C.ech(w,this.b))},
$S:0}
C.ech.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eJe.prototype={
$3(d,e,f){var w,v,u=this.a
$.W()
w=B.L()
w.r=f.j(0.2).gq(0)
w.z=new B.hy(A.G,Math.max(2,e*0.18))
u.ae(d,e*1.12,w)
w=B.L()
v=B.aq(f,A.x,0.6)
v.toString
w.sap(new B.bR(N.pN,0.5,A.w,null,0,B.a([A.c,f,v],x.O),F.ZR,null).au(0,B.bT(d,e)))
u.ae(d,e,w)},
$S:712}
C.dxk.prototype={
$1(d){return d.e<=0},
$S:z+89}
C.dx8.prototype={
$1(d){return d.b},
$S:z+60}
C.dx9.prototype={
$0(){return C.qk(this.b,this.a.d,"black-hole")},
$S:0}
C.dxa.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new B.as(e.b,e.d)
p.Q=o
o=B.aH(A.c5,B.b2(q,q,q,new C.b6F(p,q),o),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dx6(p),q,q,q,q,q,q,q,q,q,new C.dx7(p),q,q,q,q,!1,A.ae)
w=A.x.j(0.55)
v=B.m(14)
u=B.H(A.bG,A.r,1)
t=p.r
if(t<1000)t=A.k.a9(t,t<10?1:0)+" Suns"
else t=C.fcu(t)+" Suns"
t=p.ac2("MASS",t)
s=2.953*p.r
r=x.p
r=B.a([o,B.an(q,B.p(q,B.B(B.a([t,p.ac2("EDGE WIDTH",(s<100?A.k.a9(s,1):C.Fu(s))+" km"),p.ac2("TIME",A.k.a9(this.b*100,0)+"%"),p.ac2("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bS,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.dVo)
return new B.ep(new B.am(A.W,q,A.b_,A.q,r,q),p.d)},
$S:199}
C.dx7.prototype={
$1(d){return this.a.aVt(d.b)},
$S:23}
C.dx6.prototype={
$1(d){if(A.cB.af()<0.12)this.a.aVt(d.b)},
$S:18}
C.dxc.prototype={
$1(d){var w=this.a
return w.n(new C.dx5(w,d))},
$S:6}
C.dx5.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
C.dxd.prototype={
$0(){var w=this.a
return w.n(new C.dx4(w))},
$S:0}
C.dx4.prototype={
$0(){return this.a.r=10},
$S:0}
C.dxe.prototype={
$0(){var w=this.a
return w.n(new C.dx3(w))},
$S:0}
C.dx3.prototype={
$0(){return this.a.r=21},
$S:0}
C.dxf.prototype={
$0(){var w=this.a
return w.n(new C.dx2(w))},
$S:0}
C.dx2.prototype={
$0(){return this.a.r=43e5},
$S:0}
C.dxg.prototype={
$0(){var w=this.a
return w.n(new C.dx1(w))},
$S:0}
C.dx1.prototype={
$0(){return this.a.r=65e8},
$S:0}
C.dxh.prototype={
$0(){var w=this.a
return w.n(new C.dx0(w))},
$S:0}
C.dx0.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dxi.prototype={
$0(){var w=this.a
return w.n(new C.dx_(w))},
$S:0}
C.dx_.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.dxj.prototype={
$0(){var w=this.a
return w.n(new C.dwZ(w))},
$S:0}
C.dwZ.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.dxb.prototype={
$0(){var w=this.a
return w.n(new C.dwY(w))},
$S:0}
C.dwY.prototype={
$0(){var w=this.a
A.d.a7(w.z)
w.as=0},
$S:0}
C.dNs.prototype={
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
e[r]=new B.u(p,i)
q=d[r]
d[r]=new B.u(q.a+p*s,q.b+i*s)}},
$S:1840}
C.dNi.prototype={
$0(){return C.qk(this.b,this.a.d,"galaxy")},
$S:0}
C.dNj.prototype={
$0(){var w=this.a
return w.n(new C.dNh(w,this.b))},
$S:0}
C.dNh.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.Y2()},
$S:0}
C.dNk.prototype={
$0(){var w=this.a
return w.n(new C.dNg(w))},
$S:0}
C.dNg.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.Y2()}w.cnN()},
$S:0}
C.dNl.prototype={
$1(d){var w=this.a
return w.n(new C.dNf(w,d))},
$S:6}
C.dNf.prototype={
$0(){var w=this.a
w.f=A.k.U(this.b)
w.Y2()},
$S:0}
C.dNm.prototype={
$1(d){var w=this.a
return w.n(new C.dNe(w,d))},
$S:6}
C.dNe.prototype={
$0(){var w=this.a
w.r=this.b
w.Y2()},
$S:0}
C.dNn.prototype={
$1(d){var w=this.a
return w.n(new C.dNd(w,d))},
$S:6}
C.dNd.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dNo.prototype={
$1(d){var w=this.a
return w.n(new C.dNc(w,d))},
$S:6}
C.dNc.prototype={
$0(){return this.a.ax=this.b},
$S:0}
C.dNp.prototype={
$0(){var w=this.a
return w.n(new C.dNb(w))},
$S:0}
C.dNb.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.dNq.prototype={
$0(){var w=this.a
return w.n(new C.dNa(w))},
$S:0}
C.dNa.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
C.dNr.prototype={
$0(){var w=this.a
return w.n(new C.dN9(w))},
$S:0}
C.dN9.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.d39.prototype={
$6(d,e,f,g,h,i){return g.ao(0,new B.u((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1841}
C.ec_.prototype={
$0(){return C.qk(this.b,this.a.d,"seasons-moon")},
$S:0}
C.ec0.prototype={
$0(){var w=this.a
return w.n(new C.ebZ(w))},
$S:0}
C.ebZ.prototype={
$0(){return this.a.f="seasons"},
$S:0}
C.ec1.prototype={
$0(){var w=this.a
return w.n(new C.ebY(w))},
$S:0}
C.ebY.prototype={
$0(){return this.a.f="moon"},
$S:0}
C.ec2.prototype={
$0(){var w=this.a
return w.n(new C.ebX(w))},
$S:0}
C.ebX.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.ec3.prototype={
$0(){var w=this.a
return w.n(new C.ebW(w))},
$S:0}
C.ebW.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
C.ec4.prototype={
$1(d){var w=this.a
return w.n(new C.ebV(w,d))},
$S:6}
C.ebV.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.ec5.prototype={
$1(d){var w=this.a
return w.n(new C.ebU(w,d))},
$S:6}
C.ebU.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.ec6.prototype={
$1(d){var w=this.a
return w.n(new C.ebT(w,d))},
$S:6}
C.ebT.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ec7.prototype={
$1(d){var w=this.a
return w.n(new C.ebS(w,d))},
$S:6}
C.ebS.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=C.aJg.prototype
w.bqo=w.p
w=C.aIi.prototype
w.bpo=w.p
w=C.aIj.prototype
w.bpp=w.p
w=C.aIo.prototype
w.bpu=w.p
w=C.aK4.prototype
w.bri=w.p
w=C.aJe.prototype
w.bqm=w.p
w=C.aJn.prototype
w.bqv=w.p
w=C.aJt.prototype
w.bqB=w.p
w=C.aIm.prototype
w.bps=w.p
w=C.aJa.prototype
w.bqi=w.p
w=C.aJq.prototype
w.bqy=w.p
w=C.aJ8.prototype
w.bqg=w.p
w=C.aJ9.prototype
w.bqh=w.p
w=C.aIz.prototype
w.bpG=w.p
w=C.aIe.prototype
w.bpk=w.p
w=C.aIH.prototype
w.bpO=w.p
w=C.auW.prototype
w.bmw=w.p
w=C.auX.prototype
w.bmx=w.p
w=C.aGL.prototype
w.bnN=w.p
w=C.aJc.prototype
w.bqk=w.p
w=C.aJu.prototype
w.bqC=w.p
w=C.aIY.prototype
w.bq5=w.p
w=C.aIZ.prototype
w.bq6=w.p
w=C.aIk.prototype
w.bpq=w.p
w=C.aIC.prototype
w.bpJ=w.p
w=C.aJ6.prototype
w.bqe=w.p
w=C.aJB.prototype
w.bqJ=w.p
w=C.aII.prototype
w.bpQ=w.p
w=C.aIJ.prototype
w.bpR=w.p
w=C.aIK.prototype
w.bpS=w.p
w=C.aJj.prototype
w.bqr=w.p
w=C.aJm.prototype
w.bqu=w.p
w=C.aIh.prototype
w.bpn=w.p
w=C.aIF.prototype
w.bpM=w.p
w=C.aJi.prototype
w.bqq=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(C.aBt.prototype,"gatg","bYm",0)
var r
v(r=C.azV.prototype,"gc4T","c4U",35)
w(r,"gbYS","aU6",0)
w(C.azY.prototype,"gbZO","bZP",0)
u(C.aAe.prototype,"gbZU","bZV",52)
w(r=C.aEq.prototype,"gcnv","cnw",0)
w(r,"gcbr","adt",0)
w(r,"gc99","c9a",0)
w(r,"gbZT","ab4",3)
w(r=C.aBs.prototype,"gbAI","a6O",3)
w(r,"gc8r","aX7",0)
w(r,"gcc5","adB",3)
t(r,"gbZX","ab5",3)
w(C.aBG.prototype,"gbRv","bRw",0)
w(r=C.aBl.prototype,"gcnq","cnr",0)
w(r,"gbB2","bB3",0)
w(r=C.azX.prototype,"gb0b","awE",0)
v(r,"gc_2","Xs",54)
w(r,"gc_1","ab7",3)
v(r=C.aBk.prototype,"gce_","avo",58)
v(r,"gck4","awA",15)
w(r,"gbEZ","aN0",0)
v(r=C.aBi.prototype,"gcuj","agB",15)
t(r,"gc_m","atH",0)
w(r,"gcge","cgf",0)
v(r=C.aAq.prototype,"gc_n","c_o",90)
w(r,"gc_p","c_q",0)
t(r=C.a2q.prototype,"gqN","a7",0)
v(r,"gcJz","akk",1)
v(r,"gcG7","Kd",1)
w(r,"gcLB","bcK",0)
s(C.agi.prototype,"gc_u",0,5,null,["$5"],["pA"],64,0,0)
w(r=C.aAr.prototype,"gc_w","c_x",0)
w(r,"gceL","adX",3)
w(r,"gc58","acf",3)
w(r,"gclC","af2",3)
w(r=C.aBH.prototype,"gaUI","c_z",0)
w(r,"gcsd","agd",0)
w(r=C.aB4.prototype,"gc_K","atL",0)
w(r,"gc_L","aUJ",0)
w(r=C.aBT.prototype,"gc0I","c0J",0)
t(r,"gc0G","aV5",0)
w(C.aBe.prototype,"gbDy","apd",0)
t(C.aBx.prototype,"gc0K","c0L",0)
v(r=C.aAC.prototype,"gc1p","c1q",78)
w(r,"gbIh","bIi",0)
w(r=C.aAD.prototype,"gcnV","cnW",0)
w(r,"gc1u","c1v",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aB,[C.ahv,C.EN,C.uh,C.aP2,C.a19,C.b6I,C.bWJ,C.xi,C.Bg,C.n_,C.b7q,C.zz,C.boX,C.pz,C.qd,C.Bk,C.Xm,C.act,C.ZA,C.Bu,C.a9r,C.a9I,C.abC,C.EA,C.bi_,C.Og,C.YT,C.a9y,C.aa0,C.Ew,C.aaP,C.abj,C.rD,C.b6i,C.aOT,C.fc,C.rQ,C.a89,C.a9d,C.a2q,C.md,C.b7r,C.is,C.Be,C.qG,C.Bv,C.wV,C.aTj,C.bqg,C.aFf,C.mh,C.a8U,C.a8V,C.uu,C.Ny,C.xg,C.Nx,C.bqb,C.O_,C.acy])
u(B.i3,[C.few,C.f6h,C.fbT,C.fbU,C.fet,C.feu,C.dWa,C.dWt,C.eaY,C.eav,C.eaw,C.eax,C.eay,C.eaz,C.eaA,C.eaB,C.eaC,C.eat,C.eau,C.eas,C.eaT,C.eaU,C.eaV,C.dxp,C.dxr,C.dxu,C.dxF,C.bWK,C.bWL,C.f0Q,C.f0R,C.f0S,C.f0Z,C.f1_,C.f10,C.dzX,C.dzE,C.dzY,C.dzz,C.dzu,C.dzw,C.dzC,C.dzP,C.dzN,C.dzO,C.dzM,C.dzJ,C.dzL,C.eIJ,C.eIq,C.eIx,C.eIG,C.eIk,C.d9I,C.d9J,C.d9F,C.d9G,C.d9H,C.d9K,C.d9L,C.d9M,C.d9N,C.d9O,C.d9P,C.d9Q,C.d9R,C.d9S,C.e9U,C.e9V,C.e9W,C.e9X,C.e9S,C.e9T,C.eao,C.ea0,C.ea2,C.e9N,C.eak,C.eai,C.eaj,C.eah,C.eag,C.e9P,C.ek9,C.ek7,C.ejW,C.ek_,C.ejV,C.ek0,C.ek1,C.ek5,C.eqL,C.eqR,C.e6R,C.e6S,C.e6D,C.e6E,C.e6C,C.e6H,C.e6J,C.e6K,C.eqa,C.eqb,C.eq9,C.epY,C.epZ,C.epX,C.epQ,C.epR,C.eq4,C.eq5,C.eq6,C.eq7,C.eq8,C.dz5,C.dz6,C.dz7,C.dyZ,C.dz1,C.cFK,C.e2k,C.e2J,C.e2o,C.e2w,C.e2x,C.e2v,C.e2E,C.e6k,C.e6p,C.e5J,C.e5r,C.e5D,C.e5B,C.e5z,C.e5A,C.e5y,C.dH_,C.dGO,C.dGQ,C.dGY,C.dGT,C.dJP,C.dJH,C.dJI,C.dJJ,C.cZe,C.cZg,C.cZf,C.dvt,C.dvu,C.dvm,C.dvk,C.cyh,C.dNQ,C.dNR,C.dNM,C.dNN,C.d5c,C.d5d,C.dzs,C.dza,C.dzj,C.dzk,C.dzp,C.dzq,C.bHW,C.bI6,C.bI1,C.bI7,C.bI9,C.bHX,C.bHV,C.bIe,C.bI2,C.bI5,C.bI4,C.bI3,C.bDn,C.fqc,C.fqf,C.fqd,C.bD5,C.bDm,C.bDe,C.bDf,C.bDd,C.bDg,C.bCZ,C.bD0,C.bCW,C.bCX,C.bCY,C.bCQ,C.f11,C.f12,C.f13,C.f0P,C.f14,C.f0O,C.f15,C.f0T,C.f0N,C.f0U,C.f0M,C.f0V,C.f0L,C.f0W,C.f0J,C.f0K,C.f0X,C.f0H,C.f0I,C.f0Y,C.f0G,C.dK5,C.dK6,C.dJW,C.dJS,C.dK4,C.cvO,C.f1S,C.eZ1,C.f5v,C.eXT,C.f99,C.fwx,C.fwy,C.f9N,C.fxP,C.fxQ,C.er5,C.dZ8,C.dZ0,C.da0,C.da3,C.dZr,C.dZc,C.dZm,C.dZn,C.dZo,C.caB,C.ev4,C.dJs,C.dJt,C.dJu,C.dJw,C.e3D,C.eqt,C.eqC,C.eqy,C.eqA,C.e2b,C.e2c,C.e2d,C.fyf,C.cmH,C.dOR,C.dOg,C.dOf,C.dOr,C.dOs,C.dOq,C.dOt,C.dOL,C.dOM,C.dON,C.erd,C.ejx,C.ejy,C.ejz,C.ejE,C.ejF,C.ejo,C.eL5,C.eL6,C.dPn,C.dPg,C.dPi,C.dPj,C.dPk,C.dPl,C.dOT,C.eJe,C.dxk,C.dx8,C.dx7,C.dx6,C.dxc,C.dNs,C.dNl,C.dNm,C.dNn,C.dNo,C.d39,C.ec4,C.ec5,C.ec6,C.ec7])
u(B.kA,[C.fev,C.dWf,C.dWd,C.eaE,C.eaR,C.dzv,C.dzS,C.dFb,C.eIM,C.eIN,C.eIp,C.eIC,C.eID,C.eIy,C.eIE,C.eIj,C.e9Q,C.e9R,C.ean,C.eaf,C.ea4,C.eqK,C.e6G,C.eq0,C.dyY,C.dz2,C.e2A,C.e6o,C.feN,C.e5v,C.e5s,C.e5F,C.dhL,C.bCm,C.faD,C.dvg,C.dvo,C.bI8,C.bIa,C.bIc,C.bHY,C.bI_,C.bDo,C.cfO,C.fqe,C.bDk,C.bDj,C.dK3,C.cvP,C.e7f,C.er6,C.eqU,C.dZ2,C.da1,C.da2,C.dZl,C.caE,C.dxT,C.dxO,C.e3F,C.cay,C.dOD,C.dOd,C.d61,C.eri,C.ejB,C.ejn,C.dOU,C.dOW,C.dOS,C.dxa])
u(B.af,[C.TC,C.U3,C.Sv,C.SA,C.LL,C.aEp,C.U2,C.Uh,C.Ut,C.U_,C.Uo,C.Sy,C.TU,C.TZ,C.TX,C.SV,C.Ta,C.Sq,C.To,C.Sz,C.agg,C.Tb,C.auD,C.U0,C.Uu,C.TH,C.TJ,C.Uz,C.Ti,C.Sw,C.T9,C.TV,C.U7,C.Us,C.TT,C.Tp,C.Uv,C.Ug,C.Tq,C.U8,C.Su,C.Tm,C.U4])
u(B.ag,[C.bgt,C.aJg,C.aIi,C.aIo,C.aAe,C.aK4,C.aJe,C.aJn,C.aJt,C.aJa,C.aJq,C.aIm,C.aJ8,C.aJ9,C.aBi,C.bfY,C.aIz,C.aIe,C.aIH,C.bfS,C.auW,C.btl,C.aGL,C.aJc,C.aJu,C.aIY,C.aIZ,C.aJB,C.aIC,C.aIk,C.bfZ,C.aBe,C.aBx,C.bhd,C.aJ6,C.aII,C.bhg,C.aJm,C.aIK,C.aJj,C.aIh,C.aIF,C.aJi])
u(B.jm,[C.dW8,C.dW9,C.dWl,C.dWm,C.dWh,C.dWg,C.dWi,C.dWe,C.dWj,C.dWc,C.dWk,C.dWb,C.dWp,C.dWo,C.dWq,C.dWn,C.dWr,C.dWs,C.dWu,C.eaX,C.eaZ,C.eb_,C.eaG,C.eaF,C.eaD,C.eaM,C.eaN,C.eaJ,C.eaO,C.eaI,C.eaP,C.eaQ,C.eaH,C.eaS,C.eaL,C.eaW,C.eaK,C.dxM,C.dxL,C.dxo,C.dxN,C.dxq,C.dxs,C.dxt,C.dxv,C.dxl,C.dxm,C.dxn,C.dxC,C.dxD,C.dxE,C.dxB,C.dxG,C.dxA,C.dxH,C.dxz,C.dxI,C.dxy,C.dxJ,C.dxx,C.dxK,C.dxw,C.dzB,C.dzA,C.dzF,C.dzx,C.dzy,C.dzG,C.dzH,C.dzI,C.dzD,C.dzt,C.dzR,C.dzQ,C.dzT,C.dzU,C.dzV,C.dzK,C.dzW,C.cGc,C.dF9,C.dF8,C.dFa,C.f1g,C.f1h,C.f1i,C.f1t,C.f1v,C.f1w,C.f1x,C.f1y,C.f1z,C.f1A,C.f1B,C.f1j,C.f1k,C.f1l,C.f1m,C.f1n,C.f1o,C.f1p,C.f1q,C.f1r,C.f1s,C.f1u,C.eIL,C.eIK,C.eIs,C.eIr,C.eIn,C.eIm,C.eIo,C.eIl,C.eIA,C.eIz,C.eIB,C.eIt,C.eIF,C.eIw,C.eIH,C.eIv,C.eII,C.eIu,C.e9Z,C.e9O,C.e9Y,C.e9K,C.ea_,C.ea1,C.e9L,C.e9M,C.eam,C.eal,C.eac,C.ead,C.eae,C.ea8,C.ea9,C.ea7,C.eaa,C.ea6,C.eab,C.ea5,C.ea3,C.d9E,C.ek8,C.ejL,C.ejK,C.ejU,C.ek2,C.ejT,C.ek3,C.ejS,C.ek4,C.ejR,C.ejQ,C.ek6,C.ejP,C.ejX,C.ejO,C.ejY,C.ejN,C.ejZ,C.ejM,C.eqJ,C.eqI,C.eqM,C.eqH,C.eqN,C.eqG,C.eqO,C.eqF,C.eqP,C.eqE,C.eqQ,C.eqD,C.e6F,C.e6B,C.e6A,C.e6z,C.e6L,C.e6y,C.e6M,C.e6x,C.e6N,C.e6w,C.e6O,C.e6P,C.e6Q,C.e6v,C.e6I,C.eq_,C.epP,C.eq1,C.epW,C.eq2,C.epV,C.eq3,C.epU,C.epT,C.epS,C.epO,C.epN,C.epM,C.dz4,C.dyW,C.dyX,C.dz_,C.dz0,C.dz3,C.e2y,C.e2p,C.e2z,C.e2B,C.e2u,C.e2C,C.e2t,C.e2D,C.e2s,C.e2r,C.e2F,C.e2q,C.e2G,C.e2n,C.e2H,C.e2m,C.e2I,C.e2l,C.e6e,C.e6f,C.e6m,C.e6l,C.e6n,C.e6j,C.e6q,C.e6i,C.e6r,C.e6h,C.e6s,C.e6t,C.e6g,C.e6u,C.e5I,C.e5p,C.e5q,C.e5u,C.e5t,C.e5E,C.e5C,C.e5w,C.e5G,C.e5x,C.e5H,C.dGZ,C.dGP,C.dGN,C.dGU,C.dGS,C.dGV,C.dGR,C.dGW,C.dGX,C.dJO,C.dJC,C.dJB,C.dJD,C.dJG,C.dJF,C.dJE,C.dJK,C.dJL,C.dJM,C.dJN,C.dvs,C.dvr,C.dvh,C.dvn,C.dvl,C.dvp,C.dvj,C.dvq,C.dvi,C.dNP,C.dNO,C.dNG,C.dNK,C.dNJ,C.dNL,C.dNI,C.dNH,C.dzr,C.dzi,C.dzh,C.dzl,C.dzg,C.dzm,C.dzf,C.dzn,C.dze,C.dzo,C.dzd,C.dzc,C.dzb,C.bIb,C.bId,C.bHZ,C.bI0,C.bD2,C.bD3,C.bD1,C.bD4,C.bDl,C.bCG,C.bDb,C.bDc,C.bD9,C.bDa,C.bD7,C.bD8,C.bDh,C.bD6,C.bDi,C.bCH,C.bD_,C.bCN,C.bCO,C.bCM,C.bCP,C.bCL,C.bCR,C.bCS,C.bCT,C.bCK,C.bCU,C.bCJ,C.bCV,C.bCI,C.dJX,C.dK7,C.dK8,C.dJV,C.dJU,C.dJT,C.dK1,C.dK_,C.dK0,C.dK2,C.dJY,C.dJZ,C.dK9,C.dKa,C.dKb,C.dKc,C.e7g,C.e7d,C.e7c,C.e7e,C.e7b,C.e7a,C.e79,C.eqY,C.eqX,C.eqW,C.eqZ,C.er7,C.er0,C.er1,C.er2,C.er3,C.er_,C.er4,C.eqV,C.eqS,C.eqT,C.dZ7,C.dZ9,C.dYZ,C.dZ_,C.dZ1,C.dZ3,C.dZ4,C.dZ5,C.dZ6,C.dZq,C.dZs,C.dZi,C.dZe,C.dZj,C.dZk,C.dZd,C.dZh,C.dZg,C.dZf,C.dZp,C.f1J,C.f1K,C.f1L,C.f1M,C.f1N,C.f1O,C.f1P,C.f1Q,C.caD,C.caC,C.ev5,C.ev1,C.ev0,C.ev3,C.ev2,C.dM8,C.dM9,C.dM3,C.dM5,C.dM6,C.dM4,C.dM7,C.dxU,C.dxR,C.dxQ,C.dxS,C.dxP,C.dJr,C.dJq,C.dJp,C.dJo,C.dJv,C.dJn,C.dJm,C.dJx,C.dJl,C.dJy,C.dJk,C.dJz,C.dJA,C.dJj,C.e3z,C.e3A,C.e3y,C.e3B,C.e3x,C.e3E,C.e3G,C.e3C,C.e3H,C.ecb,C.ecc,C.ec9,C.eca,C.ec8,C.ecd,C.ece,C.ecf,C.ecg,C.eqx,C.eqz,C.eqw,C.eqv,C.eqB,C.equ,C.e2e,C.e2f,C.e27,C.e26,C.e28,C.e25,C.e29,C.e24,C.e2a,C.e23,C.e22,C.e21,C.e20,C.cmI,C.cmJ,C.fye,C.cmE,C.cmD,C.cmK,C.cmF,C.cmG,C.caA,C.caz,C.dOQ,C.dOj,C.dOh,C.dOi,C.dOe,C.dOC,C.dOk,C.dOl,C.dOE,C.dOp,C.dOI,C.dOB,C.dOJ,C.dOA,C.dOK,C.dOz,C.dOy,C.dOx,C.dOw,C.dOO,C.dOv,C.dOP,C.dOu,C.dOF,C.dOo,C.dOG,C.dOn,C.dOH,C.dOm,C.dOc,C.dOb,C.d60,C.f1C,C.f1D,C.f1E,C.f1F,C.f1G,C.f1H,C.f1I,C.erg,C.erh,C.erf,C.ere,C.ejp,C.ejA,C.ejC,C.ejw,C.ejD,C.ejv,C.eju,C.ejG,C.ejt,C.ejH,C.ejs,C.ejI,C.ejr,C.ejJ,C.ejq,C.ejm,C.ejl,C.eL4,C.dOV,C.dP9,C.dP0,C.dPa,C.dP_,C.dPb,C.dP8,C.dPf,C.dP7,C.dP6,C.dPh,C.dP5,C.dP4,C.dP3,C.dP2,C.dPm,C.dP1,C.dPc,C.dOZ,C.dPd,C.dOY,C.dPe,C.dOX,C.ecj,C.eck,C.eci,C.ecl,C.ech,C.dx9,C.dx5,C.dxd,C.dx4,C.dxe,C.dx3,C.dxf,C.dx2,C.dxg,C.dx1,C.dxh,C.dx0,C.dxi,C.dx_,C.dxj,C.dwZ,C.dxb,C.dwY,C.dNi,C.dNj,C.dNh,C.dNk,C.dNg,C.dNf,C.dNe,C.dNd,C.dNc,C.dNp,C.dNb,C.dNq,C.dNa,C.dNr,C.dN9,C.ec_,C.ec0,C.ebZ,C.ec1,C.ebY,C.ec2,C.ebX,C.ec3,C.ebW,C.ebV,C.ebU,C.ebT,C.ebS])
t(C.btA,C.aJg)
t(C.aBt,C.btA)
u(B.n8,[C.bdw,C.b7I,C.bon,C.b6p,C.bn3,C.bmw,C.b74,C.bmy,C.bqq,C.bdu,C.boi,C.bhN,C.bp8,C.b7p,C.beo,C.bhO,C.bf4,C.bar,C.b6u,C.bbU,C.agi,C.b5C,C.aE5,C.bqS,C.bdz,C.bdO,C.brC,C.bmx,C.bi0,C.bc0,C.bog,C.b7g,C.bnP,C.b6F,C.bbR,C.bn6])
t(C.aIj,C.aIi)
t(C.azV,C.aIj)
t(C.btj,C.aIo)
t(C.azY,C.btj)
u(B.mi,[C.IU,C.Zn])
u(B.at,[C.bnp,C.acD,C.aby,C.Op,C.bnT,C.a6f,C.b9N,C.b3s,C.dw,C.eF,C.at3,C.ff,C.E3])
t(C.aEq,C.aK4)
t(C.bdt,B.p3)
t(C.aBs,C.aJe)
t(C.bh4,C.aJn)
t(C.aBG,C.aJt)
t(C.btz,C.aJa)
t(C.aBl,C.btz)
t(C.btH,C.aJq)
t(C.bh9,C.btH)
t(C.bti,C.aIm)
t(C.azX,C.bti)
t(C.btx,C.aJ8)
t(C.bgI,C.btx)
t(C.bty,C.aJ9)
t(C.aBk,C.bty)
t(C.aAq,C.aIz)
t(C.bfF,C.aIe)
t(C.bg9,C.aIH)
t(C.auX,C.auW)
t(C.agh,C.auX)
t(C.aAr,C.btl)
t(C.b5D,C.aGL)
t(C.bgP,C.aJc)
t(C.aBH,C.aJu)
t(C.btq,C.aIY)
t(C.bgv,C.btq)
t(C.btr,C.aIZ)
t(C.aB4,C.btr)
t(C.btI,C.aJB)
t(C.aBT,C.btI)
t(C.btm,C.aIC)
t(C.bg4,C.btm)
t(C.bth,C.aIk)
t(C.bfK,C.bth)
t(C.btw,C.aJ6)
t(C.bgG,C.btw)
t(C.aIJ,C.aII)
t(C.aAC,C.aIJ)
t(C.btE,C.aJm)
t(C.bh3,C.btE)
t(C.bto,C.aIK)
t(C.aAD,C.bto)
t(C.btC,C.aJj)
t(C.bh0,C.btC)
t(C.btg,C.aIh)
t(C.bfJ,C.btg)
t(C.btn,C.aIF)
t(C.bg7,C.btn)
t(C.btB,C.aJi)
t(C.bh_,C.btB)
w(C.aJg,B.c6)
w(C.btA,C.mh)
w(C.aIi,B.c6)
w(C.aIj,C.mh)
w(C.aIo,B.c6)
w(C.btj,C.mh)
w(C.aK4,B.eJ)
w(C.aJe,B.c6)
w(C.aJn,B.c6)
w(C.aJt,B.c6)
w(C.aIm,B.c6)
w(C.bti,C.mh)
w(C.aJa,B.c6)
w(C.btz,C.mh)
w(C.aJq,B.c6)
w(C.btH,C.mh)
w(C.aJ8,B.c6)
w(C.btx,C.mh)
w(C.aJ9,B.c6)
w(C.bty,C.mh)
w(C.aIz,B.c6)
w(C.aIe,B.c6)
w(C.aIH,B.c6)
w(C.auW,B.c6)
w(C.auX,C.mh)
w(C.aGL,B.c6)
v(C.btl,B.en)
w(C.aJc,B.c6)
w(C.aJu,B.c6)
w(C.aIY,B.c6)
w(C.btq,C.mh)
w(C.aIZ,B.c6)
w(C.btr,C.mh)
w(C.aIk,B.c6)
w(C.bth,C.mh)
w(C.aIC,B.c6)
w(C.btm,C.mh)
w(C.aJ6,B.c6)
w(C.btw,C.mh)
w(C.aJB,B.c6)
w(C.btI,C.mh)
w(C.aII,B.c6)
w(C.aIJ,C.mh)
w(C.aIK,B.c6)
w(C.bto,C.mh)
w(C.aJj,B.c6)
w(C.btC,C.mh)
w(C.aJm,B.c6)
w(C.btE,C.mh)
w(C.aIh,B.c6)
w(C.btg,C.mh)
w(C.aIF,B.c6)
w(C.btn,C.mh)
w(C.aJi,B.c6)
w(C.btB,C.mh)})()
B.kh(b.typeUniverse,JSON.parse('{"TC":{"af":[],"r":[]},"bgt":{"ag":["TC"]},"U3":{"af":[],"r":[]},"aBt":{"ag":["U3"]},"bdw":{"aA":[]},"Sv":{"af":[],"r":[]},"azV":{"ag":["Sv"]},"SA":{"af":[],"r":[]},"azY":{"ag":["SA"]},"b7I":{"aA":[]},"acD":{"at":[],"r":[]},"aby":{"at":[],"r":[]},"aEp":{"af":[],"r":[]},"LL":{"af":[],"r":[]},"aAe":{"ag":["LL"]},"bnp":{"at":[],"r":[]},"Op":{"at":[],"r":[]},"bon":{"aA":[]},"bnT":{"at":[],"r":[]},"b6p":{"aA":[]},"aEq":{"ag":["aEp"]},"bn3":{"aA":[]},"bmw":{"aA":[]},"b74":{"aA":[]},"bmy":{"aA":[]},"bqq":{"aA":[]},"U2":{"af":[],"r":[]},"bdt":{"aA":[]},"aBs":{"ag":["U2"]},"bdu":{"aA":[]},"Uh":{"af":[],"r":[]},"Ut":{"af":[],"r":[]},"bh4":{"ag":["Uh"]},"boi":{"aA":[]},"aBG":{"ag":["Ut"]},"U_":{"af":[],"r":[]},"Uo":{"af":[],"r":[]},"Sy":{"af":[],"r":[]},"aBl":{"ag":["U_"]},"bhN":{"aA":[]},"bh9":{"ag":["Uo"]},"bp8":{"aA":[]},"azX":{"ag":["Sy"]},"b7p":{"aA":[]},"TU":{"af":[],"r":[]},"TZ":{"af":[],"r":[]},"bgI":{"ag":["TU"]},"beo":{"aA":[]},"aBk":{"ag":["TZ"]},"bhO":{"aA":[]},"TX":{"af":[],"r":[]},"SV":{"af":[],"r":[]},"Ta":{"af":[],"r":[]},"aBi":{"ag":["TX"]},"bf4":{"aA":[]},"bfY":{"ag":["SV"]},"aAq":{"ag":["Ta"]},"bar":{"aA":[]},"Sq":{"af":[],"r":[]},"To":{"af":[],"r":[]},"Sz":{"af":[],"r":[]},"bfF":{"ag":["Sq"]},"b6u":{"aA":[]},"bg9":{"ag":["To"]},"bbU":{"aA":[]},"bfS":{"ag":["Sz"]},"agi":{"aA":[]},"agg":{"af":[],"r":[]},"agh":{"ag":["agg"]},"Tb":{"af":[],"r":[]},"auD":{"af":[],"r":[]},"aAr":{"ag":["Tb"],"en":[]},"b5D":{"ag":["auD"]},"b5C":{"aA":[]},"U0":{"af":[],"r":[]},"bgP":{"ag":["U0"]},"aE5":{"aA":[]},"Uu":{"af":[],"r":[]},"aBH":{"ag":["Uu"]},"bqS":{"aA":[]},"TH":{"af":[],"r":[]},"TJ":{"af":[],"r":[]},"bgv":{"ag":["TH"]},"bdz":{"aA":[]},"aB4":{"ag":["TJ"]},"bdO":{"aA":[]},"a6f":{"at":[],"r":[]},"Uz":{"af":[],"r":[]},"Ti":{"af":[],"r":[]},"Sw":{"af":[],"r":[]},"T9":{"af":[],"r":[]},"TV":{"af":[],"r":[]},"U7":{"af":[],"r":[]},"Us":{"af":[],"r":[]},"TT":{"af":[],"r":[]},"aBT":{"ag":["Uz"]},"brC":{"aA":[]},"bg4":{"ag":["Ti"]},"bmx":{"aA":[]},"bfK":{"ag":["Sw"]},"bfZ":{"ag":["T9"]},"bi0":{"aA":[]},"aBe":{"ag":["TV"]},"aBx":{"ag":["U7"]},"bhd":{"ag":["Us"]},"bgG":{"ag":["TT"]},"b9N":{"at":[],"r":[]},"b3s":{"at":[],"r":[]},"dw":{"at":[],"r":[]},"eF":{"at":[],"r":[]},"at3":{"at":[],"r":[]},"ff":{"at":[],"r":[]},"E3":{"at":[],"r":[]},"Tp":{"af":[],"r":[]},"aAC":{"ag":["Tp"]},"bc0":{"aA":[]},"Uv":{"af":[],"r":[]},"bhg":{"ag":["Uv"]},"Ug":{"af":[],"r":[]},"Tq":{"af":[],"r":[]},"U8":{"af":[],"r":[]},"bh3":{"ag":["Ug"]},"bog":{"aA":[]},"aAD":{"ag":["Tq"]},"b7g":{"aA":[]},"bh0":{"ag":["U8"]},"bnP":{"aA":[]},"Su":{"af":[],"r":[]},"Tm":{"af":[],"r":[]},"U4":{"af":[],"r":[]},"bfJ":{"ag":["Su"]},"b6F":{"aA":[]},"bg7":{"ag":["Tm"]},"bbR":{"aA":[]},"bh_":{"ag":["U4"]},"bn6":{"aA":[]}}'))
B.Ox(b.typeUniverse,JSON.parse('{"mh":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.az
return{x:w("mo<x?>"),e8:w("d0"),G:w("x"),l:w("bs<n,n>"),J:w("bs<n,O>"),I:w("bs<n,I>"),R:w("f9<n>"),Z:w("a0"),M:w("P<d6>"),Q:w("P<ag8>"),gh:w("P<aOT>"),B:w("P<a19>"),V:w("P<ab>"),O:w("P<x>"),ey:w("P<Q>"),dh:w("P<R3>"),aJ:w("P<aw<aB>>"),w:w("P<a0>"),h:w("P<ak<x>>"),D:w("P<ak<R3>>"),gO:w("P<ak<ak<O>>>"),bj:w("P<ak<n>>"),b:w("P<ak<O>>"),fA:w("P<ak<I?>>"),E:w("P<a1<n,aB>>"),g:w("P<u>"),bz:w("P<rQ>"),ds:w("P<aqb>"),v:w("P<hz>"),U:w("P<+(u,O)>"),ev:w("P<+(u,I)>"),K:w("P<+(n,n)>"),fT:w("P<+(O,r)>"),F:w("P<+(I,n)>"),u:w("P<+(I,I)>"),c:w("P<+(n,n,a0)>"),e:w("P<+(n,O,O,I)>"),o:w("P<+(n,I,n,I)>"),d:w("P<+(n,n,O,O,a1<n,O>)>"),_:w("P<uh>"),q:w("P<cL>"),fQ:w("P<a89>"),s:w("P<n>"),cF:w("P<ap>"),X:w("P<vy>"),dO:w("P<a8U>"),p:w("P<r>"),bL:w("P<a9d>"),fH:w("P<l6>"),aq:w("P<b6i>"),a_:w("P<a9r>"),cS:w("P<a9y>"),cB:w("P<n_>"),ba:w("P<a9I>"),d9:w("P<O_>"),bi:w("P<aa0>"),eW:w("P<Bk>"),fY:w("P<Xm>"),aX:w("P<Ew>"),ea:w("P<aaP>"),gB:w("P<abj>"),ed:w("P<Og>"),g4:w("P<bi_>"),aS:w("P<YT>"),ac:w("P<abC>"),cd:w("P<Bu>"),fr:w("P<act>"),e4:w("P<ZA>"),r:w("P<acy>"),au:w("P<aFf>"),f7:w("P<S>"),n:w("P<O>"),t:w("P<I>"),dS:w("P<aA?>"),fs:w("P<rQ?>"),d4:w("P<n?>"),bN:w("P<I?>"),gJ:w("co<agh>"),A:w("co<ag<af>>"),bF:w("ak<x>"),gl:w("ak<Q>"),ew:w("ak<aB>"),j:w("ak<@>"),bW:w("ak<I>"),a:w("a1<n,@>"),f:w("a1<@,@>"),bd:w("J<fc,n>"),dv:w("J<n,n>"),fR:w("J<+(O,r),r>"),m:w("iE"),gA:w("yi"),P:w("cp"),C:w("aB"),W:w("rQ"),dV:w("fc"),g7:w("B1"),N:w("n"),bO:w("ap"),k:w("kN"),Y:w("bl<O>"),cL:w("a8V"),gj:w("cx<n>"),dg:w("e3<qd>"),e3:w("b6I"),a2:w("Bg"),f3:w("qd"),es:w("EA"),gV:w("mG"),y:w("S"),i:w("O"),z:w("@"),S:w("I"),L:w("ak<@>?"),fF:w("a1<@,@>?"),cK:w("aB?"),az:w("q2?"),T:w("n?"),cD:w("O?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aOL=new B.d6(0,0.85)
D.f92=new B.w("Tap once to start the chain",null,E.Rd,null,null,null,null,null,null,null,null,null)
D.aOk=new B.bI(D.aOL,null,null,D.f92,null)
D.aOC=new B.d6(0,0.1)
D.aPE=new C.aP2(0,0,0)
D.Im=new C.aP2(0,0.5,0)
D.aQb=new B.ay(A.bh,1,A.r,-1)
D.aRC=new B.aW(0,1/0,0,290)
D.aRJ=new B.aW(16,1/0,16,1/0)
D.d09=w([A.iF,A.eZ,A.kT],x.O)
D.bI9=new B.a3(A.ax,A.aC,A.w,D.d09,null,null)
D.aSP=new B.o(null,null,null,null,null,D.bI9,A.n)
D.eD6=new B.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbg=new B.w("\u26a1",null,D.eD6,null,null,null,null,null,null,null,null,null)
D.aX7=new B.cw(A.A,null,null,D.fbg,null)
D.aKA=new B.F(!0,A.c2,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1T=new B.w("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aKA,null,A.L,null,null,null,null,null,null,null)
D.dPN=new B.C(A.ns,D.f1T,null)
D.aXg=new B.cw(A.A,null,null,D.dPN,null)
D.f5n=new B.w("Press Drop! and watch them fall from 20 metres.",null,A.kl,null,A.L,null,null,null,null,null,null,null)
D.dPR=new B.C(A.ns,D.f5n,null)
D.aXx=new B.cw(A.A,null,null,D.dPR,null)
D.eNz=new B.F(!0,A.j1,null,null,null,null,18,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9O=new B.w("Draw anywhere",null,D.eNz,null,null,null,null,null,null,null,null,null)
D.aXB=new B.cw(A.A,null,null,D.f9O,null)
D.eTP=new B.w("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aKA,null,A.L,null,null,null,null,null,null,null)
D.dQu=new B.C(A.DY,D.eTP,null)
D.aXT=new B.cw(A.A,null,null,D.dQu,null)
D.a8e=new B.x(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.aZB=new B.x(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.aZW=new B.x(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.t)
D.b_d=new B.x(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.b_X=new B.x(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.Tq=new B.x(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b01=new B.x(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.b05=new B.x(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.b09=new B.x(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.Tr=new B.x(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.b15=new B.x(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.b1a=new B.x(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.b1p=new B.x(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.b2m=new B.x(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.a9h=new B.x(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.b2D=new B.x(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.t)
D.b2M=new B.x(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.b2R=new B.x(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.t)
D.zd=new B.x(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.b3r=new B.x(1,1,0.9686274509803922,0.8,A.t)
D.a9C=new B.x(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.b41=new B.x(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.b48=new B.x(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.a9N=new B.x(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.TT=new B.x(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.b4D=new B.x(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.a9S=new B.x(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.b5_=new B.x(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,A.t)
D.Da=new B.x(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.aa_=new B.x(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.aa3=new B.x(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.t)
D.b5Z=new B.x(1,0.24705882352941178,0.16470588235294117,0.0784313725490196,A.t)
D.b6a=new B.x(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.b6c=new B.x(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.b6g=new B.x(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.aap=new B.x(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.b6G=new B.x(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.Di=new B.x(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.U9=new B.x(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.t)
D.b7C=new B.x(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.b7K=new B.x(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.b7N=new B.x(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.b7W=new B.x(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.b7Z=new B.x(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.b85=new B.x(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.Uf=new B.x(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.b8x=new B.x(1,0.24705882352941178,0.3843137254901961,0.07058823529411765,A.t)
D.ab9=new B.x(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.b9_=new B.x(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.b9t=new B.x(1,1,0.41568627450980394,0,A.t)
D.b9C=new B.x(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.rz=new B.x(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,A.t)
D.ba0=new B.x(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.bah=new B.x(1,1,0.9529411764705882,0.6274509803921569,A.t)
D.bal=new B.x(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.be6=new B.b8(11e6)
D.V8=new B.N(0,0,7,0)
D.bf8=new B.N(0,0,8,6)
D.acm=new B.N(0,0,9,0)
D.bfF=new B.N(10,0,10,4)
D.bfI=new B.N(10,10,10,0)
D.bfK=new B.N(10,10,10,6)
D.bfZ=new B.N(10,6,10,2)
D.Vh=new B.N(10,6,10,4)
D.bg_=new B.N(10,6,10,8)
D.bg1=new B.N(10,8,0,10)
D.bgE=new B.N(12,8,8,8)
D.bgK=new B.N(14,0,14,30)
D.acL=new B.N(14,0,14,6)
D.bgL=new B.N(14,10,10,10)
D.acR=new B.N(14,10,8,12)
D.bhh=new B.N(14,8,14,6)
D.bhK=new B.N(16,4,16,28)
D.bhU=new B.N(16,8,16,12)
D.bkK=new B.N(4,4,6,2)
D.bkM=new B.N(4,4,8,2)
D.bkU=new B.N(56,10,18,4)
D.bll=new B.N(8,14,8,12)
D.blw=new B.N(8,6,16,0)
D.blx=new B.N(8,6,8,8)
D.eT0=new B.w("REACTION LAB",null,T.aL8,null,null,null,null,A.a2,null,1,null,null)
D.bma=new B.bH(1,A.bo,D.eT0,null)
D.eKs=new B.F(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVW=new B.w("CORE PROTOCOL",null,D.eKs,null,null,null,null,null,null,null,null,null)
D.bmm=new B.bH(1,A.bo,D.eVW,null)
D.eRM=new B.w("Wire selected",null,A.hg,null,null,null,null,null,null,null,null,null)
D.bnb=new B.bH(1,A.bo,D.eRM,null)
D.afS=new B.a0(62712,"MaterialIcons",!1)
D.bqn=new B.a0(62878,"MaterialIcons",!1)
D.Xs=new B.a0(62908,"MaterialIcons",!1)
D.bqq=new B.a0(62918,"MaterialIcons",!1)
D.bqr=new B.a0(62931,"MaterialIcons",!1)
D.bqt=new B.a0(62951,"MaterialIcons",!1)
D.bqv=new B.a0(62970,"MaterialIcons",!1)
D.bqK=new B.a0(63064,"MaterialIcons",!1)
D.bqM=new B.a0(63070,"MaterialIcons",!1)
D.x_=new B.a0(63128,"MaterialIcons",!1)
D.EG=new B.a0(63726,"MaterialIcons",!1)
D.bs3=new B.a0(983122,"MaterialIcons",!1)
D.bsi=new B.a0(983247,"MaterialIcons",!1)
D.bsp=new B.a0(983316,"MaterialIcons",!1)
D.bsv=new B.a0(983415,"MaterialIcons",!1)
D.bsw=new B.a0(983417,"MaterialIcons",!1)
D.bsx=new B.a0(983442,"MaterialIcons",!1)
D.bsy=new B.a0(983443,"MaterialIcons",!1)
D.ah6=new B.a0(983467,"MaterialIcons",!1)
D.bsE=new B.a0(983501,"MaterialIcons",!1)
D.bsP=new B.a0(983616,"MaterialIcons",!1)
D.ahf=new B.a0(983617,"MaterialIcons",!1)
D.bsQ=new B.a0(983624,"MaterialIcons",!1)
D.bt1=new B.a0(983776,"MaterialIcons",!1)
D.btj=new B.a0(984561,"MaterialIcons",!1)
D.btS=new B.ad(A.Am,24,A.aK,null,null,null)
D.bv8=new B.ad(A.m4,21,A.af,null,null,null)
D.bs2=new B.a0(983117,"MaterialIcons",!1)
D.bwt=new B.ad(D.bs2,28,A.c,null,null,null)
D.bwJ=new B.ad(A.j3,18,null,null,null,null)
D.byr=new B.ad(A.e7,21,A.cD,null,null,null)
D.byG=new B.ad(A.m5,null,A.af,null,null,null)
D.byQ=new B.ad(A.Yl,21,A.af,null,null,null)
D.bzF=new B.ad(A.er,17,A.af,null,null,null)
D.ais=new B.ad(A.er,19,null,null,null,null)
D.m8=new B.ad(A.uB,21,A.af,null,null,null)
D.bCc=new B.ad(A.j3,21,A.af,null,null,null)
D.bD1=new B.ad(A.fE,20,A.az,null,null,null)
D.bDE=new B.ad(A.dQ,null,A.aK,null,null,null)
D.bDY=new B.ad(A.jM,null,A.az,null,null,null)
D.cX_=w([A.dx,A.d6,A.dx],x.O)
D.bG0=new B.a3(A.a4,A.a7,A.w,D.cX_,null,null)
D.cCz=w([A.c3,A.bv],x.O)
D.bG8=new B.a3(A.aX,A.b1,A.w,D.cCz,null,null)
D.cmD=w([A.aY,A.jC,A.q6],x.O)
D.bGe=new B.a3(A.aX,A.b1,A.w,D.cmD,null,null)
D.bGj=new B.a3(A.aX,A.b1,A.w,A.aso,null,null)
D.bGk=new B.a3(A.aX,A.b1,A.w,Ab.NC,null,null)
D.cCV=w([A.fJ,A.fe],x.O)
D.bGs=new B.a3(A.aX,A.b1,A.w,D.cCV,null,null)
D.ajt=new B.a3(A.aX,A.b1,A.w,I.a_0,null,null)
D.cGx=w([A.eZ,A.dI,A.cP],x.O)
D.bGx=new B.a3(A.aX,A.b1,A.w,D.cGx,null,null)
D.bGz=new B.a3(A.aX,A.b1,A.w,A.NF,null,null)
D.cSi=w([A.dw,A.eZ],x.O)
D.bGA=new B.a3(A.aX,A.b1,A.w,D.cSi,null,null)
D.cAs=w([A.nU,A.i0],x.O)
D.bH7=new B.a3(A.aX,A.b1,A.w,D.cAs,null,null)
D.cEX=w([A.dU,A.aD],x.O)
D.bHe=new B.a3(A.aX,A.b1,A.w,D.cEX,null,null)
D.cCi=w([A.ew,A.aF],x.O)
D.ajA=new B.a3(A.aX,A.b1,A.w,D.cCi,null,null)
D.cS_=w([A.eC,A.ik,A.bv],x.O)
D.bHn=new B.a3(A.a4,A.a7,A.w,D.cS_,null,null)
D.cNP=w([A.hz,A.cj,A.bH],x.O)
D.bHq=new B.a3(A.aX,A.b1,A.w,D.cNP,null,null)
D.d_i=w([A.c3,A.c,A.bI],x.O)
D.bHs=new B.a3(A.a4,A.a7,A.w,D.d_i,null,null)
D.cS5=w([A.ln,A.cJ],x.O)
D.bHH=new B.a3(A.aX,A.b1,A.w,D.cS5,null,null)
D.c9G=w([A.c3,A.eC],x.O)
D.bHQ=new B.a3(A.a4,A.a7,A.w,D.c9G,null,null)
D.at_=w([A.ew,K.q9],x.O)
D.bHX=new B.a3(A.aX,A.b1,A.w,D.at_,null,null)
D.at5=w([A.aY,A.h5],x.O)
D.bI0=new B.a3(A.aX,A.b1,A.w,D.at5,null,null)
D.bIe=new B.a3(A.aX,A.b1,A.w,F.ajX,null,null)
D.d_N=w([A.fJ,A.h5],x.O)
D.ajG=new B.a3(A.aX,A.b1,A.w,D.d_N,null,null)
D.cTg=w([A.dB,A.qb],x.O)
D.bIo=new B.a3(A.aX,A.b1,A.w,D.cTg,null,null)
D.b4H=new B.x(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.aZH=new B.x(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cy2=w([D.b4H,D.aZH],x.O)
D.bIr=new B.a3(A.aX,A.b1,A.w,D.cy2,null,null)
D.cDt=w([A.dx,A.M],x.O)
D.bIA=new B.a3(A.aX,A.b1,A.w,D.cDt,null,null)
D.cZQ=w([A.fJ,A.bH,A.w1],x.O)
D.bIH=new B.a3(A.aX,A.b1,A.w,D.cZQ,null,null)
D.cGD=w([A.aF,A.dw],x.O)
D.ajM=new B.a3(A.aX,A.b1,A.w,D.cGD,null,null)
D.bJ3=new B.a3(A.ax,A.aC,A.w,A.ZY,null,null)
D.b8y=new B.x(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.d0X=w([D.b8y,A.IP],x.O)
D.bJ9=new B.a3(A.aX,A.b1,A.w,D.d0X,null,null)
D.cKP=w([A.aF,A.x],x.O)
D.bJe=new B.a3(A.aX,A.b1,A.w,D.cKP,null,null)
D.bJh=new B.a3(A.aX,A.b1,A.w,K.asr,null,null)
D.cYV=w([A.du,A.u6,A.dI],x.O)
D.bJk=new B.a3(A.ax,A.aC,A.w,D.cYV,null,null)
D.bJq=new B.a3(A.aX,A.b1,A.w,I.apK,null,null)
D.b82=new B.x(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.b8F=new B.x(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cmc=w([A.Jm,D.b82,D.b8F],x.O)
D.bJr=new B.a3(A.aX,A.b1,A.w,D.cmc,null,null)
D.cUI=w([A.i1,A.fx],x.O)
D.bJD=new B.a3(A.aX,A.b1,A.w,D.cUI,null,null)
D.ca0=w([A.dl,A.h6],x.O)
D.bJH=new B.a3(A.aX,A.b1,A.w,D.ca0,null,null)
D.bJN=new B.a3(A.ax,A.aC,A.w,A.a_I,null,null)
D.cP4=w([A.aJ,A.aj],x.O)
D.bJP=new B.a3(A.aX,A.b1,A.w,D.cP4,null,null)
D.ajZ=w([0,2,4,6,7,9,11],x.t)
D.ak0=w(["12 \xd7 8 = 96","250 + 175 = 425","9 \xd7 9 = 81","1000 \u2212 365 = 635","144 \xf7 12 = 12","3.14 \xd7 2 = 6.28"],x.s)
D.bKm=w([0,4,7],x.t)
D.ak3=w([0,4,7,12],x.t)
D.bKn=w([0,4,7,4],x.t)
D.as9=w([A.h4,A.oV],x.O)
D.arK=w([A.hm,A.cY],x.O)
D.aqf=w([A.bB,A.dI],x.O)
D.cuE=w([A.aK,A.dl],x.O)
D.cAO=w([A.cD,A.f3],x.O)
D.cT7=w([A.bU,A.lN],x.O)
D.apL=w([A.cP,A.kt],x.O)
D.czw=w([A.bI,A.aI],x.O)
D.bKH=w([D.as9,D.arK,A.a_4,D.aqf,D.cuE,D.cAO,A.ark,D.cT7,D.apL,D.czw],x.h)
D.ak6=w([1],x.n)
D.bPl=w([120,220,380],x.t)
D.bT5=w([12,16,19,24],x.t)
D.bTe=w([1400,800,450,2400],x.t)
D.bXe=w([1,2,3],x.n)
D.bXp=w([1,-1],x.n)
D.bXq=w([0,0.6,1],x.n)
D.c0y=w([250,450,900,1500],x.t)
D.c3q=w([-0.05,0.05],x.n)
D.dMD=new B.u(26,-8)
D.dN3=new B.u(52,0)
D.dMC=new B.u(26,8)
D.c3N=w([A.J,D.dMD,D.dN3,D.dMC],x.g)
D.b_o=new B.x(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.b8l=new B.x(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.b6I=new B.x(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.baW=new B.x(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.b62=new B.x(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.ap1=w([D.b_o,D.b8l,D.b6I,D.baW,D.b62],x.O)
D.ap4=w(["27\xb0","21\xb0","16\xb0","-2\xb0"],x.s)
D.efJ=new B.A("type","Typewriter")
D.e9l=new B.A("bounce","Bounce")
D.egs=new B.A("wave","Wave")
D.ehs=new B.A("zoom","Zoom")
D.ch5=w([D.efJ,D.e9l,D.egs,A.a2L,F.aGE,D.ehs,F.aGG],x.K)
D.chh=w([50,25,75],x.t)
D.cjJ=w([A.bU,A.aY,A.dU,A.bh,A.cP],x.O)
D.clx=w([1,2,3,4,5,6,7],x.n)
D.cmI=w([0,5,10,15,18,20,25],x.t)
D.cqu=w([0.3333333333333333,0.6666666666666666],x.n)
D.eaV=new B.A("fish","Fish")
D.eaX=new B.A("fly","Fireflies")
D.e9j=new B.A("bird","Birds")
D.cqQ=w([D.eaV,D.eaX,D.e9j],x.K)
D.cuU=w([900,500,250,1600],x.t)
D.cyn=w([A.fj,A.bH,A.Jj,A.el],x.O)
D.cXV=w([A.aj,A.cp],x.O)
D.asC=w([A.aI,A.aj],x.O)
D.d0b=w([A.bI,A.bN],x.O)
D.cyo=w([D.at5,D.cXV,D.asC,D.d0b],x.h)
D.cyp=w([0.78,1],x.n)
D.aqg=w([0,2,4,7,9,12,14,16],x.t)
D.d8R=new C.qG("NGMY Ads","\ud83d\udce2","Ads for everything NGMY",A.bU)
D.d8K=new C.qG("Clock","\ud83d\udd52","The real time, right now",A.aY)
D.d8E=new C.qG("Weather","\u26c5","Sun, cloud, rain and snow",A.aK)
D.d8G=new C.qG("Music","\ud83c\udfb5","NGMY Beats",A.bB)
D.d8P=new C.qG("Photos","\ud83d\uddbc\ufe0f","A slideshow of places",A.br)
D.d8N=new C.qG("Arcade","\ud83d\udd79\ufe0f","Pong plays itself",A.cD)
D.d8O=new C.qG("News","\ud83d\udcf0","NGMY News today",A.aJ)
D.d8L=new C.qG("School","\ud83c\udf93","Learn electricity",A.bh)
D.d8F=new C.qG("Calculator","\ud83e\uddee","Sums that type themselves",A.cP)
D.d8H=new C.qG("Calendar","\ud83d\udcc5","This month, today lit up",A.aD)
D.d8M=new C.qG("Map","\ud83d\uddfa\ufe0f","NGMY Map",A.d6)
D.d8I=new C.qG("Camera","\ud83d\udcf7","Point, focus, click",A.bI)
D.d8J=new C.qG("Snake","\ud83d\udc0d","A snake eats apples",A.bm)
D.d8Q=new C.qG("Stopwatch","\u23f1\ufe0f","Time and laps",A.b6)
D.tb=w([D.d8R,D.d8K,D.d8E,D.d8G,D.d8P,D.d8N,D.d8O,D.d8L,D.d8F,D.d8H,D.d8M,D.d8I,D.d8J,D.d8Q],B.az("P<qG>"))
D.ffB=new C.Be("NGMY Family Book","Write your family story","\ud83d\udcd6",A.aB,A.dI)
D.ffA=new C.Be("NGMY Wallet","Save, send and win coins","\ud83e\ude99",A.dl,A.cz)
D.ffC=new C.Be("NGMY Games","Play, win and learn","\ud83c\udfae",A.e4,A.b6)
D.ffz=new C.Be("NGMY Electronics Lab","Build real circuits","\ud83d\udca1",A.cY,A.aY)
D.ffD=new C.Be("NGMY Advisors","Friendly help, any time","\ud83d\udcac",A.oV,A.bB)
D.ffx=new C.Be("NGMY Learn","Swahili and more","\ud83c\udf93",A.f2,A.el)
D.ffw=new C.Be("NGMY Family Tree","Grow your family tree","\ud83c\udf33",A.fx,A.bH)
D.ffy=new C.Be("NGMY Helper","Ask anything, get an answer","\ud83e\udd16",A.rh,A.cP)
D.cyR=w([D.ffB,D.ffA,D.ffC,D.ffz,D.ffD,D.ffx,D.ffw,D.ffy],B.az("P<Be>"))
D.cyX=w([A.bB,A.by,A.b6,A.bB],x.O)
D.aql=w(["A","T","C","G"],x.s)
D.cyY=w(["A","U","C","G"],x.s)
D.ZV=w([A.aD,A.cz,A.bm,A.aY,A.ng],x.O)
D.czv=w([1,2.76,5.4,8.93,13.3],x.n)
D.aqs=w([A.cP,A.cz,A.bU,A.bh],x.O)
D.cAa=w([A.aF,A.aD,A.cP,A.cz,A.bm,A.cE,A.cb,A.by,A.IP],x.O)
D.ZZ=w([0.04,0.17,0.3],x.n)
D.cAw=w([1,0.6,0.38,0.22,0.12],x.n)
D.cAK=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.Fu=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eoC=new C.uh("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eoI=new C.uh("Medium engine","A good all-rounder.",0.3,0.9)
D.eoH=new C.uh("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Fv=w([D.eoC,D.eoI,D.eoH],x._)
D.e_U=new B.A(6,"Easy")
D.e0r=new B.A(8,"Medium")
D.dXw=new B.A(10,"Hard")
D.cBx=w([D.e_U,D.e0r,D.dXw],x.F)
D.aqE=w([0.55,0.78,1],x.n)
D.cD_=w([0.93,0.975,1],x.n)
D.cDb=w(["\u2600\ufe0f","\u2601\ufe0f","\ud83c\udf27\ufe0f","\u2744\ufe0f"],x.s)
D.cDj=w(["Mama","Baba","Bibi","Babu","Dada","Kaka"],x.s)
D.aqO=w([A.c,A.h5,A.pY,A.aF],x.O)
D.cEw=w([1,0.7,0.45,0.28,0.16,0.1,0.06],x.n)
D.cEx=w([1,0.55,0.32,0.2,0.12,0.07],x.n)
D.feb=new C.xg("Moon",1737,4291941851)
D.fe8=new C.xg("Earth",6371,4281908728)
D.fec=new C.xg("Neptune",24622,4284524026)
D.fed=new C.xg("Saturn",58232,4294829706)
D.fe9=new C.xg("Jupiter",69911,4294677052)
D.fee=new C.xg("Sun",696340,4294688548)
D.fef=new C.xg("Sirius A",119e4,4290763774)
D.fe6=new C.xg("Arcturus",179e5,4294818420)
D.fe7=new C.xg("Betelgeuse",531e6,4294472049)
D.fea=new C.xg("UY Scuti",667e6,4293870660)
D.NE=w([D.feb,D.fe8,D.fec,D.fed,D.fe9,D.fee,D.fef,D.fe6,D.fe7,D.fea],B.az("P<xg>"))
D.ekz=new B.bz("glow","Glow",A.Xu)
D.eiq=new B.bz("rainbow","Rainbow",A.nx)
D.eiL=new B.bz("stars","Stars",A.hW)
D.eia=new B.bz("sparks","Sparks",A.dQ)
D.ejV=new B.bz("fire","Fire",A.uC)
D.cEJ=w([D.ekz,D.eiq,D.eiL,D.eia,D.ejV],x.c)
D.aqS=w([A.bm,A.aD,A.cz,A.d6],x.O)
D.aqX=w(["Students build a working TV from a battery and some wires","Family trees grow bigger every week on NGMY","New games arrive in the NGMY Arcade","Solar panels now charge flat batteries in the lab","A step-down converter saves a phone from burning out","The NGMY Wallet makes saving coins simple","Kids learn Swahili with picture cards","Wind turbine lights a whole village in a story"],x.s)
D.cFD=w([0.2,1],x.n)
D.eoz=new C.uh("Radar","Shows your height above the ground.",0.1,0)
D.eoA=new C.uh("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eox=new C.uh("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.ar0=w([D.eoz,D.eoA,D.eox],x._)
D.ejg=new B.bz("attract","Attract",A.xh)
D.ej4=new B.bz("scare","Scare",A.t0)
D.eij=new B.bz("food","Food",A.t7)
D.bs8=new B.a0(983158,"MaterialIcons",!1)
D.ejz=new B.bz("hunt","Hunt",D.bs8)
D.cGd=w([D.ejg,D.ej4,D.eij,D.ejz],x.c)
D.dNI=new B.u(-0.1,0.02)
D.dNA=new B.u(0.02,-0.04)
D.dP9=new B.u(0.12,0.02)
D.cGB=w([D.dNI,D.dNA,D.dP9,O.a1V],x.g)
D.cGC=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cGS=w([47,100,220,470,1000],x.n)
D.arh=w([0,2,4,7,9],x.t)
D.Gv={volts:0}
D.a0x=new B.bs(D.Gv,[3],x.J)
D.GR=new B.eP(["b","battery",0.2,0.3,D.a0x])
D.dLm={on:0}
D.d5z=new B.bs(D.dLm,[1],x.J)
D.BL=new B.eP(["s","switch",0.5,0.3,D.d5z])
D.emW=new B.eP(["l","bulb",0.8,0.3,A.iP])
D.cCG=w([D.GR,D.BL,D.emW],x.d)
D.BK=new B.cH(["b",0,"s",0])
D.em1=new B.cH(["s",1,"l",0])
D.aGK=new B.cH(["l",1,"b",1])
D.cSa=w([D.BK,D.em1,D.aGK],x.o)
D.cCa=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.dWT=new C.md("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cCG,D.cSa,D.cCa)
D.aB5={ohms:0}
D.ayK=new B.bs(D.aB5,[220],x.J)
D.emr=new B.eP(["r","resistor",0.5,0.3,D.ayK])
D.en8=new B.eP(["d","led",0.8,0.3,A.iP])
D.cUT=w([D.GR,D.emr,D.en8],x.d)
D.elp=new B.cH(["b",0,"r",0])
D.elW=new B.cH(["r",1,"d",0])
D.elv=new B.cH(["d",1,"b",1])
D.d1r=w([D.elp,D.elW,D.elv],x.o)
D.cVh=w(["led","diode","indicator"],x.s)
D.dX_=new C.md("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.cUT,D.d1r,D.cVh)
D.a1O={level:0}
D.d4Y=new B.bs(D.a1O,[0.2],x.J)
D.emx=new B.eP(["p","pot",0.5,0.3,D.d4Y])
D.emz=new B.eP(["m","motor",0.8,0.3,A.iP])
D.cCY=w([D.GR,D.emx,D.emz],x.d)
D.elo=new B.cH(["b",0,"p",0])
D.elS=new B.cH(["p",1,"m",0])
D.elP=new B.cH(["m",1,"b",1])
D.cYQ=w([D.elo,D.elS,D.elP],x.o)
D.cRV=w(["fan","motor","spin","dimmer"],x.s)
D.dWR=new C.md("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cCY,D.cYQ,D.cRV)
D.a0u=new B.bs(D.a1O,[0.9],x.J)
D.aGR=new B.eP(["s","solar",0.25,0.3,D.a0u])
D.aGQ=new B.eP(["l","bulb",0.75,0.3,A.iP])
D.cFl=w([D.aGR,D.aGQ],x.d)
D.elZ=new B.cH(["s",0,"l",0])
D.elO=new B.cH(["l",1,"s",1])
D.cDG=w([D.elZ,D.elO],x.o)
D.cZl=w(["solar","sun","without battery","no battery","free"],x.s)
D.dWU=new C.md("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cFl,D.cDG,D.cZl)
D.enb=new B.eP(["c","crank",0.25,0.3,D.a0u])
D.cQp=w([D.enb,D.aGQ],x.d)
D.els=new B.cH(["c",0,"l",0])
D.elN=new B.cH(["l",1,"c",1])
D.cQV=w([D.els,D.elN],x.o)
D.cQy=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.dWQ=new C.md("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.cQp,D.cQV,D.cQy)
D.d4X=new B.bs(D.a1O,[0.7],x.J)
D.emC=new B.eP(["t","turbine",0.25,0.3,D.d4X])
D.emq=new B.eP(["m","motor",0.75,0.3,A.iP])
D.cLr=w([D.emC,D.emq],x.d)
D.em9=new B.cH(["t",0,"m",0])
D.elQ=new B.cH(["m",1,"t",1])
D.cKv=w([D.em9,D.elQ],x.o)
D.cPn=w(["wind","turbine","windmill","water","hydro"],x.s)
D.dWN=new C.md("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.cLr,D.cKv,D.cPn)
D.ayG=new B.bs(D.Gv,[9],x.J)
D.a2O=new B.eP(["b","battery",0.2,0.3,D.ayG])
D.aGP=new B.eP(["r","radio",0.8,0.3,A.iP])
D.cZR=w([D.a2O,D.BL,D.aGP],x.d)
D.em3=new B.cH(["s",1,"r",0])
D.aGL=new B.cH(["r",1,"b",1])
D.bK6=w([D.BK,D.em3,D.aGL],x.o)
D.cYD=w(["radio","music","listen"],x.s)
D.dWZ=new C.md("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.cZR,D.bK6,D.cYD)
D.d6_=new B.bs(D.Gv,[12],x.J)
D.aGO=new B.eP(["b","battery",0.2,0.3,D.d6_])
D.emX=new B.eP(["t","tv",0.8,0.3,A.iP])
D.cCH=w([D.aGO,D.BL,D.emX],x.d)
D.em4=new B.cH(["s",1,"t",0])
D.aGM=new B.cH(["t",1,"b",1])
D.cTa=w([D.BK,D.em4,D.aGM],x.o)
D.cZP=w(["tv","television","screen","watch"],x.s)
D.dWK=new C.md("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cCH,D.cTa,D.cZP)
D.emN=new B.eP(["z","buzzer",0.8,0.3,A.iP])
D.cjz=w([D.GR,D.BL,D.emN],x.d)
D.em5=new B.cH(["s",1,"z",0])
D.eml=new B.cH(["z",1,"b",1])
D.cyd=w([D.BK,D.em5,D.eml],x.o)
D.cX3=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.dWW=new C.md("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cjz,D.cyd,D.cX3)
D.emy=new B.eP(["h","heater",0.8,0.3,A.iP])
D.cO8=w([D.a2O,D.BL,D.emy],x.d)
D.em0=new B.cH(["s",1,"h",0])
D.elD=new B.cH(["h",1,"b",1])
D.cyT=w([D.BK,D.em0,D.elD],x.o)
D.c3M=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.dWL=new C.md("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.cO8,D.cyT,D.c3M)
D.emZ=new B.eP(["s","solar",0.2,0.25,D.a0u])
D.d64=new B.bs(D.aB5,[100],x.J)
D.en1=new B.eP(["r","resistor",0.55,0.25,D.d64])
D.en7=new B.eP(["c","capacitor",0.85,0.25,A.iP])
D.emu=new B.eP(["q","resistor",0.55,0.6,D.ayK])
D.en_=new B.eP(["d","led",0.85,0.6,A.iP])
D.cSQ=w([D.emZ,D.en1,D.en7,D.emu,D.en_],x.d)
D.em_=new B.cH(["s",0,"r",0])
D.elV=new B.cH(["r",1,"c",0])
D.elu=new B.cH(["c",1,"s",1])
D.elt=new B.cH(["c",0,"q",0])
D.elU=new B.cH(["q",1,"d",0])
D.elw=new B.cH(["d",1,"c",1])
D.cIB=w([D.em_,D.elV,D.elu,D.elt,D.elU,D.elw],x.o)
D.cPR=w(["capacitor","store","charge","flash"],x.s)
D.dWY=new C.md("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.cSQ,D.cIB,D.cPR)
D.emF=new B.eP(["b","battery",0.15,0.3,D.a0x])
D.enc=new B.eP(["l1","bulb",0.5,0.3,A.iP])
D.emL=new B.eP(["l2","bulb",0.85,0.3,A.iP])
D.cB1=w([D.emF,D.enc,D.emL],x.d)
D.eln=new B.cH(["b",0,"l1",0])
D.elK=new B.cH(["l1",1,"l2",0])
D.elL=new B.cH(["l2",1,"b",1])
D.cM3=w([D.eln,D.elK,D.elL],x.o)
D.cZE=w(["series","two bulbs","dim"],x.s)
D.dWO=new C.md("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cB1,D.cM3,D.cZE)
D.dLy={volts:0,charge:1}
D.d68=new B.bs(D.dLy,[1.5,0],x.J)
D.en5=new B.eP(["b","battery",0.75,0.3,D.d68])
D.cAt=w([D.aGR,D.en5],x.d)
D.elY=new B.cH(["s",0,"b",0])
D.elr=new B.cH(["b",1,"s",1])
D.cIR=w([D.elY,D.elr],x.o)
D.cPY=w(["charge","rechargeable","flat","recharge"],x.s)
D.dWM=new C.md("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cAt,D.cIR,D.cPY)
D.d5Z=new B.bs(D.Gv,[4.5],x.J)
D.emA=new B.eP(["b","battery",0.2,0.3,D.d5Z])
D.aGN=new B.eP(["p","phone",0.8,0.3,A.iP])
D.cLh=w([D.emA,D.BL,D.aGN],x.d)
D.em2=new B.cH(["s",1,"p",0])
D.a2N=new B.cH(["p",1,"b",1])
D.cW7=w([D.BK,D.em2,D.a2N],x.o)
D.cXr=w(["phone","charger","usb","mobile"],x.s)
D.dWS=new C.md("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.cLh,D.cW7,D.cXr)
D.emn=new B.eP(["f","fan",0.8,0.3,A.iP])
D.bX1=w([D.GR,D.emn],x.d)
D.elm=new B.cH(["b",0,"f",0])
D.elB=new B.cH(["f",1,"b",1])
D.czk=w([D.elm,D.elB],x.o)
D.cRU=w(["fan","cool","air","wind"],x.s)
D.dX0=new C.md("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.bX1,D.czk,D.cRU)
D.emR=new B.eP(["b","battery",0.15,0.2,D.a0x])
D.emo=new B.eP(["a","ammeter",0.5,0.2,A.iP])
D.emm=new B.eP(["l","bulb",0.85,0.2,A.iP])
D.emT=new B.eP(["v","voltmeter",0.5,0.6,A.iP])
D.cQe=w([D.emR,D.emo,D.emm,D.emT],x.d)
D.elk=new B.cH(["b",0,"a",0])
D.elj=new B.cH(["a",1,"l",0])
D.emb=new B.cH(["v",0,"l",0])
D.emc=new B.cH(["v",1,"l",1])
D.cII=w([D.elk,D.elj,D.aGK,D.emb,D.emc],x.o)
D.d1q=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.dWX=new C.md("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.cQe,D.cII,D.d1q)
D.enf=new B.eP(["b","battery",0.15,0.2,D.ayG])
D.emE=new B.eP(["t","tv",0.55,0.2,A.iP])
D.ayH=new B.bs(D.Gv,[5],x.J)
D.ems=new B.eP(["c","buck",0.4,0.5,D.ayH])
D.emG=new B.eP(["p","phone",0.8,0.5,A.iP])
D.cGF=w([D.enf,D.emE,D.ems,D.emG],x.d)
D.elq=new B.cH(["b",0,"t",0])
D.aGI=new B.cH(["b",0,"c",0])
D.aGJ=new B.cH(["c",1,"p",0])
D.cLe=w([D.elq,D.aGM,D.aGI,D.aGJ,D.a2N],x.o)
D.cEY=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.dWP=new C.md("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cGF,D.cLe,D.cEY)
D.emt=new B.eP(["c","buck",0.5,0.3,D.ayH])
D.cyJ=w([D.aGO,D.emt,D.aGN],x.d)
D.cD5=w([D.aGI,D.aGJ,D.a2N],x.o)
D.c79=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.dWJ=new C.md("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cyJ,D.cD5,D.c79)
D.emJ=new B.eP(["d","diode",0.5,0.3,A.iP])
D.cMg=w([D.a2O,D.emJ,D.aGP],x.d)
D.ell=new B.cH(["b",0,"d",0])
D.elx=new B.cH(["d",1,"r",0])
D.cm2=w([D.ell,D.elx,D.aGL],x.o)
D.cEG=w(["diode","protect","backwards","one way"],x.s)
D.dWV=new C.md("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.cMg,D.cm2,D.cEG)
D.NI=w([D.dWT,D.dX_,D.dWR,D.dWU,D.dWQ,D.dWN,D.dWZ,D.dWK,D.dWW,D.dWL,D.dWY,D.dWO,D.dWM,D.dWS,D.dX0,D.dWX,D.dWP,D.dWJ,D.dWV],B.az("P<md>"))
D.dI9=new C.wV("NGMY Tree Story","A family grows, one branch at a time")
D.dI4=new C.wV("Coin Hero","A little coin saves up and wins the day")
D.dIc=new C.wV("Space Voyage","The NGMY rocket explores the stars")
D.dI3=new C.wV("Ocean Friends","Fish, bubbles and a friendly whale")
D.dI5=new C.wV("Rainy Village","Storm clouds, then a rainbow")
D.dI7=new C.wV("Spark Adventure","Follow a spark round a circuit")
D.dI6=new C.wV("Fireworks Night","Colour bursts over the city")
D.dIb=new C.wV("Little Train","A train rolls past the hills")
D.dI8=new C.wV("Robot Disco","A robot dances to the beat")
D.dIa=new C.wV("Garden Time","Flowers grow and butterflies fly")
D.NJ=w([D.dI9,D.dI4,D.dIc,D.dI3,D.dI5,D.dI7,D.dI6,D.dIb,D.dI8,D.dIa],B.az("P<wV>"))
D.cIm=w([1,0.6,0.45,0.3,0.22,0.15],x.n)
D.foh=new C.EN("Moon",1.62,A.eC,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.fof=new C.EN("Mars",3.71,A.aD,"Mars has about 38 percent of Earth's gravity.")
D.foi=new C.EN("Mercury",3.7,A.jB,"Mercury is small, so its gravity is like Mars.")
D.foc=new C.EN("Venus",8.87,A.aK,"Venus is almost as heavy as Earth, with strong gravity.")
D.foe=new C.EN("Earth",9.81,A.aY,"On Earth gravity is strong, and the air also slows you down.")
D.fog=new C.EN("Neptune",11.15,A.d6,"Neptune pulls a little harder than Earth.")
D.fod=new C.EN("Jupiter",24.79,A.cP,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.qx=w([D.foh,D.fof,D.foi,D.foc,D.foe,D.fog,D.fod],B.az("P<EN>"))
D.ars=w([A.bU,A.cz,A.aD,A.bB,A.cP],x.O)
D.cIA=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a_b=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cJc=w([0.2,0.5,0.8],x.n)
D.cJm=w([1,2,3,4,5,6],x.n)
D.bqF=new B.a0(63040,"MaterialIcons",!1)
D.ej7=new B.bz("peg","Peg",D.bqF)
D.ein=new B.bz("bar","Bar",P.Ar)
D.eiN=new B.bz("erase","Erase",A.L2)
D.cJn=w([D.ej7,D.ein,D.eiN],x.c)
D.er1=new B.cL(A.bg,A.J,4)
D.cJx=w([D.er1],x.q)
D.arv=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.cJH=w(["Sunny","Cloudy","Rainy","Snowy"],x.s)
D.aO4=new C.IU(0,"accordion")
D.czC=w([A.j5,A.As,A.Ag],x.w)
D.cG5=w(["Mail","SMS","Ad"],x.s)
D.cA3=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.fmu=new C.zz(D.aO4,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.as9,D.czC,D.cG5,D.cA3)
D.a62=new C.IU(1,"flip")
D.cPL=w([A.qp,A_.EW,A.uI],x.w)
D.cKY=w(["Unlock","Verify","Secure"],x.s)
D.cyG=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.fmt=new C.zz(D.a62,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.arK,D.cPL,D.cKY,D.cyG)
D.aO5=new C.IU(2,"towers")
D.cJR=w([A.xc,A.pg,A.hV],x.w)
D.cJt=w(["Save","Grow","Earn"],x.s)
D.cmR=w(["","",""],x.s)
D.fmv=new C.zz(D.aO5,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a_4,D.cJR,D.cJt,D.cmR)
D.a63=new C.IU(3,"assemble")
D.cQB=w([A.mL,A.hp,A.dQ],x.w)
D.cFw=w(["Launch","Charge","Shine"],x.s)
D.cNm=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.fmx=new C.zz(D.a63,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aqf,D.cQB,D.cFw,D.cNm)
D.aO6=new C.IU(4,"carousel")
D.cQq=w([A.b6,A.im],x.O)
D.cGf=w([A.m4,A.agj,A.Yf],x.w)
D.cBn=w(["Explore","Discover","Learn"],x.s)
D.cLm=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.fms=new C.zz(D.aO6,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.cQq,D.cGf,D.cBn,D.cLm)
D.aO7=new C.IU(5,"burst")
D.cJp=w([A.jz,A.rp],x.O)
D.czZ=w([A.l_,A.m2,A.hU],x.w)
D.cAh=w(["Cheer","Win","Love"],x.s)
D.cCg=w(["Make some noise","First place","Share the joy"],x.s)
D.fmw=new C.zz(D.aO7,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cJp,D.czZ,D.cAh,D.cCg)
D.arw=w([D.fmu,D.fmt,D.fmv,D.fmx,D.fms,D.fmw],B.az("P<zz>"))
D.ej9=new B.bz("skin","Skin",A.agk)
D.ekm=new B.bz("muscle","Muscles",A.Lf)
D.ek8=new B.bz("organ","Organs",A.hU)
D.bq6=new B.a0(62747,"MaterialIcons",!1)
D.ekb=new B.bz("bone","Skeleton",D.bq6)
D.eks=new B.bz("vessel","Blood vessels",A.uL)
D.cJW=w([D.ej9,D.ekm,D.ek8,D.ekb,D.eks],x.c)
D.cKM=w([A.fJ,A.qb],x.O)
D.cKO=w([A.bk,A.aZ,A.dk],x.O)
D.eoB=new C.uh("Simple legs","Light. Land gently.",0.15,0.2)
D.eoD=new C.uh("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eoG=new C.uh("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.AO=w([D.eoB,D.eoD,D.eoG],x._)
D.cLu=w([1.77,3.55,7.15,16.7],x.n)
D.cNK=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.efd=new B.A("spiral","Spiral")
D.e_S=new B.A("barred","Barred spiral")
D.ear=new B.A("elliptical","Elliptical")
D.cOo=w([D.efd,D.e_S,D.ear],x.K)
D.el4=new B.cH(["beat",0.18,0.28,0])
D.em6=new B.cH(["burst",0.7,0.2,0])
D.emg=new B.cH(["delay",0.45,0.5,1])
D.elR=new B.cH(["ripple",0.75,0.6,3])
D.cFg=w([D.el4,D.em6,D.emg,D.elR],x.e)
D.a2G=new B.A(2,3)
D.cPb=w([L.mS,I.GQ,D.a2G],x.u)
D.flC=new C.EA("First spark","A clock lights a burst and a ripple",D.cFg,D.cPb)
D.elA=new B.cH(["beat",0.15,0.3,1])
D.ekK=new B.cH(["ripple",0.62,0.15,0])
D.emd=new B.cH(["delay",0.4,0.45,0])
D.elg=new B.cH(["ripple",0.7,0.45,0])
D.el0=new B.cH(["delay",0.4,0.7,1])
D.elT=new B.cH(["shake",0.75,0.75,0])
D.d_x=w([D.elA,D.ekK,D.emd,D.elg,D.el0,D.elT],x.e)
D.dYl=new B.A(2,4)
D.aGy=new B.A(4,5)
D.cIr=w([L.mS,I.GQ,D.a2G,D.dYl,D.aGy],x.u)
D.flE=new C.EA("Heartbeat","Two thumps, then a shake",D.d_x,D.cIr)
D.el9=new B.cH(["dice",0.15,0.7,1])
D.emi=new B.cH(["echo",0.4,0.7,0])
D.elf=new B.cH(["comet",0.7,0.5,4])
D.em7=new B.cH(["burst",0.72,0.2,1])
D.ely=new B.cH(["burst",0.3,0.25,0])
D.ela=new B.cH(["pop",0.55,0.85,0])
D.c3l=w([D.el9,D.emi,D.elf,D.em7,D.ely,D.ela],x.e)
D.dXO=new B.A(1,3)
D.dXP=new B.A(1,4)
D.aGx=new B.A(0,5)
D.cQl=w([L.mS,I.v9,D.dXO,D.dXP,D.aGx],x.u)
D.flD=new C.EA("Fireworks","Dice launch comets that burst in colour",D.c3l,D.cQl)
D.eld=new B.cH(["beat",0.15,0.2,2])
D.elH=new B.cH(["chance",0.4,0.2,0])
D.el6=new B.cH(["ball",0.7,0.12,3])
D.ekU=new B.cH(["chance",0.4,0.5,1])
D.emh=new B.cH(["ball",0.3,0.08,1])
D.ekN=new B.cH(["ripple",0.7,0.55,3])
D.bXr=w([D.eld,D.elH,D.el6,D.ekU,D.emh,D.ekN],x.e)
D.a2H=new B.A(3,4)
D.dYm=new B.A(2,5)
D.cjj=w([L.mS,I.v9,I.a2F,D.a2H,D.dYm],x.u)
D.flB=new C.EA("Rain","Balls fall at random and splash",D.bXr,D.cjj)
D.elI=new B.cH(["beat",0.12,0.45,2])
D.em8=new B.cH(["toggle",0.38,0.2,0])
D.emf=new B.cH(["wash",0.7,0.15,4])
D.el8=new B.cH(["count3",0.38,0.45,0])
D.ema=new B.cH(["burst",0.72,0.4,0])
D.elz=new B.cH(["light",0.55,0.7,1])
D.ekV=new B.cH(["pop",0.8,0.8,4])
D.cSO=w([D.elI,D.em8,D.emf,D.el8,D.ema,D.elz,D.ekV],x.e)
D.dYH=new B.A(3,6)
D.c_y=w([L.mS,I.v9,I.a2F,D.a2H,D.aGx,D.dYH],x.u)
D.flz=new C.EA("Disco","A beat drives lights, washes and bursts",D.cSO,D.c_y)
D.emk=new B.cH(["button",0.12,0.2,0])
D.ekP=new B.cH(["delay",0.34,0.2,1])
D.emj=new B.cH(["light",0.56,0.2,1])
D.eme=new B.cH(["delay",0.56,0.45,1])
D.elJ=new B.cH(["ball",0.34,0.6,0])
D.ekT=new B.cH(["delay",0.34,0.8,1])
D.ekJ=new B.cH(["burst",0.7,0.8,5])
D.bKK=w([D.emk,D.ekP,D.emj,D.eme,D.elJ,D.ekT,D.ekJ],x.e)
D.e_D=new B.A(5,6)
D.cXc=w([L.mS,I.v9,D.a2G,D.a2H,D.aGy,D.e_D],x.u)
D.flA=new C.EA("Domino","Tap the button and watch it run down the line",D.bKK,D.cXc)
D.arO=w([D.flC,D.flE,D.flD,D.flB,D.flz,D.flA],B.az("P<EA>"))
D.cOw=w([0.05,0.15,0.25],x.n)
D.cOK=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.flX=new C.Bv("VOLTS (V)","The push that moves electricity round a loop. Like water pressure in a pipe. A bigger battery has more volts.","9 V = a strong push",1.4)
D.flR=new C.Bv("AMPS (A)","How much electricity flows past each second. Like how much water runs through the pipe.","0.5 A = half an amp",1)
D.flY=new C.Bv("OHMS (\u03a9)","How much a part holds the flow back. A resistor is made just to do this.","Big \u03a9 = small flow",0.5)
D.flU=new C.Bv("OHM'S LAW","Volts, amps and ohms are linked. If you know two, you can work out the third.","V = I \xd7 R",1)
D.flT=new C.Bv("WATTS (W)","Power is how fast energy is used. Multiply the volts by the amps.","W = V \xd7 I",1.2)
D.flW=new C.Bv("SAFETY","Too many volts burn a gadget. A step-down converter brings the volts down so a phone is safe on a 9 V battery.","9 V \u2192 5 V",1)
D.flV=new C.Bv("DIODES","A diode lets electricity go one way only. It drops about 0.7 V and protects parts from being wired backwards.","\u2192|\u2192 one way",0.9)
D.flS=new C.Bv("FUSES","A fuse is the weak link on purpose. It melts first, so the loop breaks and nothing catches fire.","Fuse melts, parts live",0.9)
D.cOZ=w([D.flX,D.flR,D.flY,D.flU,D.flT,D.flW,D.flV,D.flS],B.az("P<Bv>"))
D.cPm=w([1.5,3,4.5,9,12],x.n)
D.cPo=w(["Mountain walk","Sunset at the beach","City lights","Forest trail"],x.s)
D.ehY=new B.bz("dice","Dice",A.m1)
D.eiT=new B.bz("coin","Coin",E.x6)
D.ekn=new B.bz("num","Number",A.xf)
D.cPw=w([D.ehY,D.eiT,D.ekn],x.c)
D.cPz=w(["skin","muscle","organ","bone","vessel"],x.s)
D.feg=new C.Ny("Moon",1.62,0,4291941851)
D.feh=new C.Ny("Mars",3.71,0.01,4294472049)
D.fei=new C.Ny("Earth",9.81,1,4281908728)
D.fek=new C.Ny("Jupiter",24.79,1.4,4294677052)
D.fej=new C.Ny("Sun",274,2,4294688548)
D.xF=w([D.feg,D.feh,D.fei,D.fek,D.fej],B.az("P<Ny>"))
D.arU=w([A.cD,A.aK,A.bh,A.aY,A.bB,A.bU,A.cP,A.hm],x.O)
D.dK7={H:0}
D.d5A=new B.bs(D.dK7,[2],x.I)
D.d72=new C.rD("Hydrogen","H\u2082",D.d5A,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.dK8={H:0,Cl:1}
D.d5M=new B.bs(D.dK8,[1,1],x.I)
D.d74=new C.rD("Hydrogen chloride","HCl",D.d5M,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.dK9={H:0,O:1}
D.d5j=new B.bs(D.dK9,[2,1],x.I)
D.d75=new C.rD("Water","H\u2082O",D.d5j,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.dKl={N:0,H:1}
D.d67=new B.bs(D.dKl,[1,3],x.I)
D.d7d=new C.rD("Ammonia","NH\u2083",D.d67,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a1N={C:0,H:1}
D.d62=new B.bs(D.a1N,[1,4],x.I)
D.d76=new C.rD("Methane","CH\u2084",D.d62,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.dKa={H:0,S:1}
D.d4s=new B.bs(D.dKa,[2,1],x.I)
D.d7c=new C.rD("Hydrogen sulfide","H\u2082S",D.d4s,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.dKq={O:0}
D.d65=new B.bs(D.dKq,[2],x.I)
D.d7e=new C.rD("Oxygen","O\u2082",D.d65,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.dKk={N:0}
D.d5B=new B.bs(D.dKk,[2],x.I)
D.d73=new C.rD("Nitrogen","N\u2082",D.d5B,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.dJY={C:0,O:1}
D.d6d=new B.bs(D.dJY,[1,2],x.I)
D.d7a=new C.rD("Carbon dioxide","CO\u2082",D.d6d,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aB2={C:0,H:1,O:2}
D.d4e=new B.bs(D.aB2,[1,2,1],x.I)
D.d7b=new C.rD("Formaldehyde","CH\u2082O",D.d4e,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.d61=new B.bs(D.a1N,[2,4],x.I)
D.d78=new C.rD("Ethene","C\u2082H\u2084",D.d61,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.d60=new B.bs(D.a1N,[2,6],x.I)
D.d77=new C.rD("Ethane","C\u2082H\u2086",D.d60,"Two carbons joined by a single bond, each holding three hydrogens.")
D.d4f=new B.bs(D.aB2,[1,4,1],x.I)
D.d79=new C.rD("Methanol","CH\u2083OH",D.d4f,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a_q=w([D.d72,D.d74,D.d75,D.d7d,D.d76,D.d7c,D.d7e,D.d73,D.d7a,D.d7b,D.d78,D.d77,D.d79],B.az("P<rD>"))
D.cQr=w([A.bU,A.aY,A.dU,A.bh],x.O)
D.dR4=new C.fc("battery","Battery","\ud83d\udd0b",A.bh,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.dR8=new C.fc("solar","Solar panel","\u2600\ufe0f",A.cz,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.dRB=new C.fc("crank","Hand crank","\ud83d\udd04",A.cP,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.dRj=new C.fc("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aY,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.dR0=new C.fc("buck","Step-down converter","\ud83d\udd3d",A.hm,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.dRi=new C.fc("regulator","5 V regulator","\ud83e\uddca",A.bI,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.dRF=new C.fc("diode","Diode","\u27a1\ufe0f",A.aK,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.dRq=new C.fc("ldr","Light sensor","\ud83c\udf1e",A.dU,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.dRb=new C.fc("switch","Switch","\ud83c\udf9a\ufe0f",A.bB,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.dRC=new C.fc("fuse","Fuse","\ud83e\uddef",A.cD,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.dQU=new C.fc("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hm,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.dRr=new C.fc("resistor","Resistor","\u3030\ufe0f",A.aK,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.dRt=new C.fc("bulb","Light bulb","\ud83d\udca1",A.dU,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.dRa=new C.fc("led","LED","\ud83d\udd34",A.aD,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.dRc=new C.fc("motor","Motor","\u2699\ufe0f",A.bI,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.dRo=new C.fc("buzzer","Buzzer","\ud83d\udd14",A.bU,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.dR5=new C.fc("heater","Heater","\ud83d\udd25",A.cP,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.dRl=new C.fc("capacitor","Capacitor","\ud83e\udeab",A.cC,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.dRe=new C.fc("radio","Radio","\ud83d\udcfb",A.ng,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.dRJ=new C.fc("tv","TV","\ud83d\udcfa",A.b6,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.dR_=new C.fc("voltmeter","Voltmeter","\ud83e\udded",A.br,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.dR3=new C.fc("ammeter","Ammeter","\ud83d\udcdf",A.aK,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.dR7=new C.fc("fan","Fan","\ud83c\udf00",A.aY,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.dRH=new C.fc("speaker","Speaker","\ud83d\udd0a",A.bU,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.dRy=new C.fc("clock","Digital clock","\u23f0",A.bh,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.dRh=new C.fc("calculator","Calculator","\ud83e\uddee",A.IK,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.dRK=new C.fc("phone","Phone charging","\ud83d\udcf1",A.cC,"Charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.dRG=new C.fc("router","WiFi router","\ud83d\udcf6",A.hm,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.dRL=new C.fc("siren","Siren","\ud83d\udea8",A.aD,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.dQW=new C.fc("toycar","Toy car","\ud83d\ude97",A.cP,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.dRM=new C.fc("kettle","Kettle","\ud83e\uded6",A.o0,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.dR2=new C.fc("lamp","Desk lamp","\ud83e\ude94",A.dU,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.dR9=new C.fc("lights","Party lights","\ud83c\udf84",A.ng,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.dRf=new C.fc("fridge","Fridge","\ud83e\uddca",A.fJ,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.dQY=new C.fc("washer","Washing machine","\ud83e\udee7",A.cC,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.dRz=new C.fc("blender","Blender","\ud83e\udd64",A.cD,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.dRd=new C.fc("drone","Drone","\ud83d\ude81",A.bI,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.dR1=new C.fc("drill","Power drill","\ud83d\udd29",A.aK,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.dRg=new C.fc("torch","Torch","\ud83d\udd26",A.bH,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.dRw=new C.fc("neon","Neon sign","\ud83e\udea7",A.bU,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.dQZ=new C.fc("microwave","Microwave","\ud83c\udf72",A.cP,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.dRs=new C.fc("doorbell","Doorbell","\ud83d\udd14",A.cz,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.dR6=new C.fc("camera","Security camera","\ud83d\udcf7",A.aj,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.dRn=new C.fc("console","Game console","\ud83c\udfae",A.bB,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.dRA=new C.fc("heartmon","Heart monitor","\ud83e\ude7a",A.hl,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.dQX=new C.fc("aquarium","Aquarium","\ud83d\udc20",A.b6,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.dRk=new C.fc("lighthouse","Lighthouse","\ud83d\uddfc",A.dU,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.dRp=new C.fc("discoball","Disco ball","\ud83e\udea9",A.ng,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.dRE=new C.fc("robot","Robot","\ud83e\udd16",A.aY,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.dQV=new C.fc("toaster","Toaster","\ud83c\udf5e",A.e_,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.dRI=new C.fc("ledstrip","LED strip","\ud83c\udf08",A.bU,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.dRv=new C.fc("pump","Water pump","\ud83d\udeb0",A.aY,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.dRm=new C.fc("hairdryer","Hair dryer","\ud83d\udca8",A.jz,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.dRu=new C.fc("headphones","Headphones","\ud83c\udfa7",A.bB,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.dRx=new C.fc("smartwatch","Smart watch","\u231a",A.br,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.dRD=new C.fc("tablet","Tablet","\ud83d\udcf2",A.cC,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.NZ=w([D.dR4,D.dR8,D.dRB,D.dRj,D.dR0,D.dRi,D.dRF,D.dRq,D.dRb,D.dRC,D.dQU,D.dRr,D.dRt,D.dRa,D.dRc,D.dRo,D.dR5,D.dRl,D.dRe,D.dRJ,D.dR_,D.dR3,D.dR7,D.dRH,D.dRy,D.dRh,D.dRK,D.dRG,D.dRL,D.dQW,D.dRM,D.dR2,D.dR9,D.dRf,D.dQY,D.dRz,D.dRd,D.dR1,D.dRg,D.dRw,D.dQZ,D.dRs,D.dR6,D.dRn,D.dRA,D.dQX,D.dRk,D.dRp,D.dRE,D.dQV,D.dRI,D.dRv,D.dRm,D.dRu,D.dRx,D.dRD],B.az("P<fc>"))
D.cRj=w([],x.B)
D.cRk=w([],x.D)
D.a_A=w([],x.dO)
D.cRF=w([0,0.46,0.82],x.n)
D.cRQ=w([5,10,15,25,45,60],x.t)
D.cS8=w([-0.045,0.03,-0.015],x.n)
D.cSw=w([0.9,0.97,1],x.n)
D.asg=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.tf=w([0.05,0.2,0.35],x.n)
D.cAl=w([D.Di,D.Di],x.O)
D.cFd=w([A.Dt,A.M],x.O)
D.cEj=w([A.fU,A.hz],x.O)
D.cyD=w([A.im,A.nf],x.O)
D.bX_=w([A.lN,A.du],x.O)
D.ash=w([D.cAl,D.cFd,D.cEj,D.cyD,D.bX_],x.h)
D.fe4=new C.uu("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fe5=new C.uu("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fdX=new C.uu("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fe3=new C.uu("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fe1=new C.uu("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fdY=new C.uu("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fe2=new C.uu("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fdZ=new C.uu("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fe0=new C.uu("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fe_=new C.uu("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.AU=w([D.fe4,D.fe5,D.fdX,D.fe3,D.fe1,D.fdY,D.fe2,D.fdZ,D.fe0,D.fe_],B.az("P<uu>"))
D.b5K=new B.x(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.cTy=w([D.Di,D.b5K,D.a9C,A.a9e],x.O)
D.dXe=new B.A(0,"AND")
D.dXQ=new B.A(1,"Adder")
D.dYn=new B.A(2,"Blinker")
D.dYI=new B.A(3,"Memory")
D.cV3=w([D.dXe,D.dXQ,D.dYn,D.dYI],x.F)
D.ass=w([-104,0,104],x.n)
D.ast=w([-14,3],x.n)
D.cVt=w([-16,16],x.n)
D.a_N=w([-1,1],x.n)
D.asu=w([-22,22],x.n)
D.asv=w([-24,24],x.n)
D.cVx=w([-5,5],x.n)
D.cVy=w([-8,0,8],x.n)
D.cVz=w([-8,8],x.n)
D.asx=w([-92,0,92],x.n)
D.cVT=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eoy=new C.uh("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eoF=new C.uh("Medium tank","Balanced.",0.35,1)
D.eoE=new C.uh("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Oh=w([D.eoy,D.eoF,D.eoE],x._)
D.cWa=w([1,2,3,4,6,8],x.n)
D.mO=w([0.04,0.2,0.36],x.n)
D.asH=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.cWZ=w([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],x.n)
D.ek7=new B.bz(D.aO4,"Fold",E.ahh)
D.ejn=new B.bz(D.a62,"Flip",A.Ew)
D.bqp=new B.a0(62889,"MaterialIcons",!1)
D.ekl=new B.bz(D.aO5,"Rise",D.bqp)
D.ahv=new B.a0(983870,"MaterialIcons",!1)
D.ehA=new B.bz(D.a63,"Assemble",D.ahv)
D.ehJ=new B.bz(D.aO6,"Spin",D.afS)
D.ehG=new B.bz(D.aO7,"Pop",A.l_)
D.cX9=w([D.ek7,D.ejn,D.ekl,D.ehA,D.ehJ,D.ehG],B.az("P<+(IU,n,a0)>"))
D.asM=w([A.bU,A.dU,A.br,A.aY,A.bB,A.cD],x.O)
D.cXk=w([A.aY,A.cP,A.cP,A.bh],x.O)
D.cXw=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.egB=new B.A("Make the output turn HALF as fast as the input.",0.5)
D.e2N=new B.A("Make the output turn TWICE as fast.",2)
D.dY_=new B.A("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.efn=new B.A("Make the output turn 4 times faster.",4)
D.e85=new B.A("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.eb0=new B.A("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.e9A=new B.A("Make the output turn 3 times faster.",3)
D.eai=new B.A("Make the output spin at the same speed as the input, using four different gears.",1)
D.asR=w([D.egB,D.e2N,D.dY_,D.efn,D.e85,D.eb0,D.e9A,D.eai],B.az("P<+(n,O)>"))
D.cYt=w([3,4.5,5,6,9],x.n)
D.cYB=w([1,2,3,4,5,6,7,8],x.n)
D.Oj=w([A.bU,A.cz,A.bh,A.aY,A.bB,A.cD,A.c,A.cP],x.O)
D.cZi=w(["solar","turbine","crank","pot"],x.s)
D.cZC=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.cZG=w(["7","8","9","\xf7","4","5","6","\xd7","1","2","3","\u2212","0",".","=","+"],x.s)
D.cZH=w([0,0.35,0.75,1],x.n)
D.cZT=w([A.aD,A.cj,A.cz,A.bm,A.d6,A.b3],x.O)
D.ehT=new B.bz("drop","Drop",D.ah6)
D.ehV=new B.bz("weight","Weight",O.ahx)
D.ekg=new B.bz("cannon","Newton's cannon",A.agw)
D.d_h=w([D.ehT,D.ehV,D.ekg],x.c)
D.ee3=new B.A("piano","Piano")
D.edK=new B.A("organ","Organ")
D.e9h=new B.A("bell","Bell")
D.ee5=new B.A("pluck","Pluck")
D.efm=new B.A("synth","Synth")
D.eaW=new B.A("flute","Flute")
D.at8=w([D.ee3,D.edK,D.e9h,D.ee5,D.efm,D.eaW],x.K)
D.d_G=w(["M","T","W","T","F","S","S"],x.s)
D.d_J=w(["volts","level","ohms","on"],x.s)
D.d0R=w([A.j5,A.As,A.Ag,A.qp,A_.EW,A.uI,A.xc,A.pg,A.hV,A.mL,A.hp,A.dQ,A.hU,A.hW,A.m2,A.m3,A.xd,A.qt,A.lt,A.Eo,A.t7,A.Lh,A.Ai,A.ah1,A.L6,A.x9,A.Lf,A.agH,K.ahr,A.l_],x.w)
D.d1m=w([1,0.18,0.06],x.n)
D.d1J=w([0.72,1],x.n)
D.d1T=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.dLr={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.d48=new B.bs(D.dLr,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aB4={A:0,T:1,C:2,G:3}
D.a0p=new B.bs(D.aB4,["U","A","G","C"],x.l)
D.d4g=new B.bs(D.aB4,["T","A","G","C"],x.l)
D.dKh={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.cQv=w([0,2,4,5,7,9,11],x.t)
D.czH=w([0,2,3,5,7,8,10],x.t)
D.cVf=w([0,3,5,6,7,10],x.t)
D.B_=new B.bs(D.dKh,[D.arh,D.cQv,D.czH,D.cVf,D.ajZ],B.az("bs<n,ak<I>>"))
D.dLf={A:0,T:1,U:2,C:3,G:4}
D.d4v=new B.bs(D.dLf,[A.cD,A.cC,A.cC,A.aK,A.bh],B.az("bs<n,x>"))
D.dJJ={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.ffR=new C.xi("Switch",D.ahf,A.cz,0,"Tap it to turn it ON or OFF.")
D.ffN=new C.xi("Blinker",A.of,A.br,0,"Turns itself ON and OFF. Tap to change the speed.")
D.ffO=new C.xi("AND",D.ahv,A.cC,2,"ON only when BOTH inputs are ON.")
D.brR=new B.a0(63671,"MaterialIcons",!1)
D.ffM=new C.xi("OR",D.brR,A.bB,2,"ON when EITHER input is ON.")
D.ffP=new C.xi("XOR",G.Xz,A.bU,2,"ON when the inputs are DIFFERENT.")
D.ffJ=new C.xi("NAND",A.rY,A.aY,2,"OFF only when BOTH inputs are ON.")
D.bqY=new B.a0(63176,"MaterialIcons",!1)
D.ffK=new C.xi("NOR",D.bqY,A.hm,2,"ON only when BOTH inputs are OFF.")
D.ffL=new C.xi("NOT",U.EQ,A.cP,1,"Flips the signal: ON becomes OFF.")
D.ffQ=new C.xi("Light",A.Am,A.dU,1,"Glows when its input is ON.")
D.ffS=new C.xi("Buzzer",A.ny,A.cD,1,"Beeps while its input is ON.")
D.xR=new B.bs(D.dJJ,[D.ffR,D.ffN,D.ffO,D.ffM,D.ffP,D.ffJ,D.ffK,D.ffL,D.ffQ,D.ffS],B.az("bs<n,xi>"))
D.dLd={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eie=new B.bz(3,20,1.9)
D.ehP=new B.bz(33,90,1.6)
D.ekE=new B.bz(52,15,3.2)
D.ekC=new B.bz(45,-100,1.8)
D.ejh=new B.bz(-15,-60,1.9)
D.eiP=new B.bz(-25,140,2.4)
D.eiH=new B.bz(-82,0,2.2)
D.ayy=new B.bs(D.dLd,[D.eie,D.ehP,D.ekE,D.ekC,D.ejh,D.eiP,D.eiH],B.az("bs<n,+(O,O,O)>"))
D.cz8=w([A.A],x.M)
D.czq=w([A.ax,A.aC],x.M)
D.cHC=w([A.ax,A.A,A.aC],x.M)
D.cIW=w([A.ax,A.kQ,A.A,A.lf,A.aC],x.M)
D.cV_=w([A.ax,A.kQ,A.a4,A.a7,A.lf,A.aC],x.M)
D.d5q=new B.dX([1,D.cz8,2,D.czq,3,D.cHC,4,A.atd,5,D.cIW,6,D.cV_],B.az("dX<I,ak<d6>>"))
D.dL3={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,radio:23,tv:24,fan:25,speaker:26,clock:27,calculator:28,phone:29,router:30,siren:31,toycar:32,lamp:33,lights:34,kettle:35}
D.bcW=new C.is(20,4,13,!1)
D.bdf=new C.is(14,5,13.5,!1)
D.bd7=new C.is(9,2.4,10,!1)
D.bdk=new C.is(7,5,12.5,!1)
D.bda=new C.is(8,3.5,12,!1)
D.bcT=new C.is(15,2,6,!1)
D.bdi=new C.is(45,6,13.5,!0)
D.bd3=new C.is(10,8,13.5,!1)
D.bcX=new C.is(25,3,12,!0)
D.bd1=new C.is(35,4,12,!0)
D.bd2=new C.is(40,4.5,9.5,!0)
D.bd4=new C.is(55,3,9,!0)
D.bcU=new C.is(18,3,9,!1)
D.bdh=new C.is(22,4,13.5,!1)
D.bdb=new C.is(16,5,13.5,!1)
D.bd_=new C.is(30,4,9,!0)
D.bdr=new C.is(5,3.5,13,!1)
D.bd6=new C.is(25,3,13.5,!0)
D.bde=new C.is(14,2.5,9,!1)
D.bd5=new C.is(6,6,13,!1)
D.bdl=new C.is(30,1.2,5,!0)
D.bdq=new C.is(35,3,4.5,!0)
D.bdn=new C.is(20,4.5,7.5,!0)
D.bcV=new C.is(30,2.5,10.5,!0)
D.bdc=new C.is(50,5.5,13.5,!0)
D.bdp=new C.is(12,2,9.5,!1)
D.bd9=new C.is(16,1.3,9.5,!0)
D.bdj=new C.is(40,2.5,7,!0)
D.bdo=new C.is(60,1.2,4.8,!0)
D.bcY=new C.is(25,4,7,!0)
D.bd0=new C.is(30,8,14,!0)
D.bdm=new C.is(18,5,13.5,!0)
D.bdg=new C.is(8,2,9.5,!1)
D.bd8=new C.is(12,2.5,8,!1)
D.bcZ=new C.is(20,3.5,13.5,!0)
D.bdd=new C.is(3.5,3,13,!1)
D.xS=new B.bs(D.dL3,[D.bcW,D.bdf,D.bd7,D.bdk,D.bda,D.bcT,D.bdi,D.bd3,D.bcX,D.bd1,D.bd2,D.bd4,D.bcU,D.bdh,D.bdb,D.bd_,D.bdr,D.bd6,D.bde,D.bd5,D.bdl,D.bdq,D.bdn,D.bcV,D.bdc,D.bdp,D.bd9,D.bdj,D.bdo,D.bcY,D.bd0,D.bdm,D.bdg,D.bd8,D.bcZ,D.bdd],B.az("bs<n,is>"))
D.dKi={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.ejt=new B.bz(1,A.c3,"Hydrogen")
D.eit=new B.bz(4,A.bv,"Carbon")
D.ehB=new B.bz(3,A.d6,"Nitrogen")
D.ejK=new B.bz(2,A.aD,"Oxygen")
D.ejb=new B.bz(2,A.cz,"Sulfur")
D.eke=new B.bz(1,A.bm,"Chlorine")
D.uY=new B.bs(D.dKi,[D.ejt,D.eit,D.ehB,D.ejK,D.ejb,D.eke],B.az("bs<n,+(I,x,n)>"))
D.dLw={Calm:0,Box:1,Sleep:2}
D.cgR=w([4,2,6,0],x.n)
D.cgY=w([4,4,4,4],x.n)
D.cgZ=w([4,7,8,0],x.n)
D.OI=new B.bs(D.dLw,[D.cgR,D.cgY,D.cgZ],B.az("bs<n,ak<O>>"))
D.dJS={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.vE=new C.Zn(0,"source")
D.cIu=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.fkf=new C.pz("Clock",A.of,D.vE,A.br,D.cIu)
D.fkb=new C.pz("Button",A.xh,D.vE,A.aK,A.U)
D.cYF=w(["random","quick","slow"],x.s)
D.fkm=new C.pz("Dice",A.m1,D.vE,A.bU,D.cYF)
D.bry=new B.a0(63484,"MaterialIcons",!1)
D.Cp=new C.Zn(1,"logic")
D.d1E=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.fki=new C.pz("Delay",D.bry,D.Cp,A.cC,D.d1E)
D.cRX=w(["fast","mid","slow"],x.s)
D.fkn=new C.pz("Echo",A.agV,D.Cp,A.bB,D.cRX)
D.fkk=new C.pz("Every 2nd",U.EQ,D.Cp,A.hm,A.U)
D.brb=new B.a0(63309,"MaterialIcons",!1)
D.fkh=new C.pz("Every 3rd",D.brb,D.Cp,A.aY,A.U)
D.bt9=new B.a0(983902,"MaterialIcons",!1)
D.bKa=w(["50%","25%","75%"],x.s)
D.fkp=new C.pz("Chance",D.bt9,D.Cp,A.cP,D.bKa)
D.pM=new C.Zn(2,"out")
D.fkd=new C.pz("Light",A.Am,D.pM,A.dU,A.U)
D.fke=new C.pz("Burst",A.l_,D.pM,A.bU,A.U)
D.fkc=new C.pz("Ripple",A.xl,D.pM,A.b6,A.U)
D.fkl=new C.pz("Ball",A.ah8,D.pM,A.cP,A.U)
D.fkj=new C.pz("Comet",A.mL,D.pM,A.bB,A.U)
D.bsV=new B.a0(983669,"MaterialIcons",!1)
D.fko=new C.pz("Shake",D.bsV,D.pM,A.cD,A.U)
D.fkq=new C.pz("Pop",A.Ep,D.pM,A.bh,A.U)
D.fkg=new C.pz("Wash",A.Lk,D.pM,A.oO,A.U)
D.mb=new B.bs(D.dJS,[D.fkf,D.fkb,D.fkm,D.fki,D.fkn,D.fkk,D.fkh,D.fkp,D.fkd,D.fke,D.fkc,D.fkl,D.fkj,D.fko,D.fkq,D.fkg],B.az("bs<n,pz>"))
D.dLc={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"ORBIT STUDIO":5,"SWARM STUDIO":6,"FIREWORK DESIGNER":7,"CHAIN BURST":8,"CIRCUIT LAB":9,"PERIODIC TABLE":10,"BODY EXPLORER":11,"SPIN THE WHEEL":12,"FOCUS TIMER":13,"MEMORY MATCH":14,"LUCKY POCKET":15,"ELECTRONICS LAB":16,"AI INVENTOR":17,"MAGNET LAB":18,"RADIO LAB":19,"POWER PLANT":20,"POWER GRID":21,"INTERNET JOURNEY":22,"ROBOT CODER":23,"BUG SMASHER":24,"ROCKET LANDER":25,"DATA SNAKE":26,"BINARY 2048":27,"SIGNAL BREAKER":28,"PASSWORD LAB":29,"WAVE LAB":30,"BUG HUNT":31,"MOLECULE MAKER":32,"DNA LAB":33,"ECOSYSTEM LAB":34,"BALANCE LAB":35,"GEAR LAB":36,"OPTICS LAB":37,"LASER MAZE":38,"LIGHT MIXER":39,"ATOM BUILDER":40,"CIPHER LAB":41,"PIXEL TV":42}
D.ayJ=new B.bs(D.dLc,["sparkle","sparkle","whoosh","click","bounce","space","bubble","pop","zap","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","lab","organic","organic","click","tech","sparkle","zap","sparkle","lab","tech","tech"],x.l)
D.dLg={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.B0=new B.bs(D.dLg,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.dJR={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eh9=new B.A("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.e_A=new B.A("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.e_v=new B.A("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eah=new B.A("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.ebb=new B.A("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.ead=new B.A("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.dYN=new B.A("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.e8l=new B.A("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.ehh=new B.A("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.ebw=new B.A("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.e2f=new B.A("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.dYy=new B.A("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.e1o=new B.A("Movement","They pull your legs together and help you balance.")
D.e35=new B.A("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.e_I=new B.A("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eeY=new B.A("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eg_=new B.A("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.e86=new B.A("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.efK=new B.A("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.e6S=new B.A("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.ebE=new B.A("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.dYC=new B.A("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.e3s=new B.A("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.ebl=new B.A("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.e79=new B.A("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.efS=new B.A("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.e9M=new B.A("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.dYL=new B.A("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.ec7=new B.A("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eeC=new B.A("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.ecX=new B.A("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.dXo=new B.A("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.e9u=new B.A("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.e9y=new B.A("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.e44=new B.A("Movement","The chest muscles push your arms forward, like when you push a door.")
D.e_O=new B.A("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.e2V=new B.A("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.e8u=new B.A("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.edD=new B.A("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.ehe=new B.A("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.ebB=new B.A("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.dXb=new B.A("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.e8E=new B.A("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.dXJ=new B.A("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.edT=new B.A("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eeU=new B.A("Movement","These lift your foot up so your toes do not drag on the ground.")
D.e92=new B.A("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.ee7=new B.A("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.dYE=new B.A("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.efp=new B.A("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.e0R=new B.A("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.edl=new B.A("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.e3O=new B.A("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.e75=new B.A("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.ebS=new B.A("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.efz=new B.A("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.efr=new B.A("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.efv=new B.A("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.e7y=new B.A("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.ecC=new B.A("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.ecU=new B.A("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.efe=new B.A("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.e91=new B.A("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.e5A=new B.A("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.e4u=new B.A("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.e9p=new B.A("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.ebL=new B.A("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.e64=new B.A("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.e6G=new B.A("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.e1a=new B.A("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eeR=new B.A("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.e1T=new B.A("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.dXG=new B.A("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.e43=new B.A("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.dXB=new B.A("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.e07=new B.A("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.e48=new B.A("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.e20=new B.A("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.ec3=new B.A("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.e38=new B.A("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.egY=new B.A("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.e4C=new B.A("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.e7s=new B.A("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.e9T=new B.A("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.e27=new B.A("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.e1V=new B.A("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.d6u=new B.bs(D.dJR,[D.eh9,D.e_A,D.e_v,D.eah,D.ebb,D.ead,D.dYN,D.e8l,D.ehh,D.ebw,D.e2f,D.dYy,D.e1o,D.e35,D.e_I,D.eeY,D.eg_,D.e86,D.efK,D.e6S,D.ebE,D.dYC,D.e3s,D.ebl,D.e79,D.efS,D.e9M,D.dYL,D.ec7,D.eeC,D.ecX,D.dXo,D.e9u,D.e9y,D.e44,D.e_O,D.e2V,D.e8u,D.edD,D.ehe,D.ebB,D.dXb,D.e8E,D.dXJ,D.edT,D.eeU,D.e92,D.ee7,D.dYE,D.efp,D.e0R,D.edl,D.e3O,D.e75,D.ebS,D.efz,D.efr,D.efv,D.e7y,D.ecC,D.ecU,D.efe,D.e91,D.e5A,D.e4u,D.e9p,D.ebL,D.e64,D.e6G,D.e1a,D.eeR,D.e1T,D.dXG,D.e43,D.dXB,D.e07,D.e48,D.e20,D.ec3,D.e38,D.egY,D.e4C,D.e7s,D.e9T,D.e27,D.e1V],B.az("bs<n,+(n,n)>"))
D.d6w=new B.hy(A.G,11)
D.d6C=new B.hy(A.G,1.2)
D.d9r=new C.Sq(null)
D.ddf=new C.Su(null)
D.ddg=new C.Sv(null)
D.ddt=new C.Sw(null)
D.dfu=new C.Sy(null)
D.dfv=new C.Sz(null)
D.dfw=new C.SA(null)
D.dgj=new C.SV(null)
D.dgl=new C.T9(null)
D.dgm=new C.Ta(null)
D.dgn=new C.Tb(null)
D.dgV=new C.Ti(null)
D.diQ=new C.Tm(null)
D.diR=new C.To(null)
D.diS=new C.Tp(null)
D.diU=new C.Tq(null)
D.dkt=new C.TH(null)
D.dkv=new C.TJ(null)
D.dkA=new C.TT(null)
D.dkL=new C.TU(null)
D.dlg=new C.TV(null)
D.dmL=new C.TX(null)
D.do8=new C.TZ(null)
D.do9=new C.U_(null)
D.dpu=new C.U2(null)
D.dFn=new C.U3(null)
D.dFo=new C.U4(null)
D.dFp=new C.U7(null)
D.dFq=new C.U8(null)
D.dHj=new C.Ug(null)
D.dHk=new C.Uh(null)
D.dHs=new C.Uo(null)
D.dHB=new C.Us(null)
D.dHC=new C.Ut(null)
D.dHD=new C.a6f(null)
D.dId=new C.Uv(null)
D.dJG=new C.Uz(null)
D.dLG=new B.u(0,118)
D.dLH=new B.u(0,13)
D.dLI=new B.u(0,17)
D.dLL=new B.u(0,330)
D.dLP=new B.u(0,-13)
D.aBe=new B.u(0,-14)
D.dLQ=new B.u(0,-17)
D.dLR=new B.u(0,-18)
D.dLS=new B.u(0,-19)
D.dLT=new B.u(0,-20)
D.dLW=new B.u(0,-26)
D.dLX=new B.u(0,-28)
D.dLY=new B.u(0,-31)
D.dLZ=new B.u(0,-32)
D.v5=new B.u(0,-6)
D.dM_=new B.u(0,-6771)
D.dM0=new B.u(0,-9)
D.dM2=new B.u(-9.5,-11)
D.dM3=new B.u(10,20)
D.dM5=new B.u(10,-13)
D.dM6=new B.u(10,-22)
D.dM7=new B.u(10,-4)
D.a1R=new B.u(11,8)
D.dM9=new B.u(12,2)
D.dMa=new B.u(14,0)
D.dMb=new B.u(14,12)
D.dMc=new B.u(14,-17)
D.dMd=new B.u(14,-18)
D.aBi=new B.u(14,-3)
D.aBj=new B.u(14,-4)
D.dMe=new B.u(15,0)
D.dMf=new B.u(15,-12)
D.dMg=new B.u(16,-8)
D.dMh=new B.u(18,14)
D.dMi=new B.u(18,-12)
D.aBn=new B.u(20,0)
D.dMo=new B.u(20,15)
D.dMp=new B.u(20,-17)
D.dMq=new B.u(20,-3)
D.dMr=new B.u(21,8)
D.dMt=new B.u(22,10)
D.aBo=new B.u(22,8)
D.dMu=new B.u(24,0)
D.dMv=new B.u(24,2)
D.dMx=new B.u(24,-18)
D.dMy=new B.u(24,-22)
D.dMz=new B.u(25,8)
D.dMA=new B.u(26,0)
D.dMG=new B.u(28,-30)
D.dML=new B.u(30,18)
D.dMM=new B.u(30,2)
D.aBr=new B.u(34,0)
D.aBs=new B.u(34,-32)
D.Gw=new B.u(36,0)
D.dMR=new B.u(3,-1)
D.dMU=new B.u(42,0)
D.dMY=new B.u(4,11)
D.dN0=new B.u(4,-2)
D.dN4=new B.u(5,0)
D.dN5=new B.u(5,17)
D.dN6=new B.u(5,6)
D.dN9=new B.u(6,11)
D.dNf=new B.u(8,-10)
D.dNg=new B.u(8,-14)
D.aBv=new B.u(9,0)
D.dNj=new B.u(-20.5,-17.6)
D.dNm=new B.u(-2.6,-1)
D.dNn=new B.u(1.9,-0.8)
D.dNq=new B.u(-0.22,0.09)
D.dNv=new B.u(2.6,1)
D.dND=new B.u(-9,12.2)
D.dOc=new B.u(-10,0)
D.dOd=new B.u(-10,12)
D.aBC=new B.u(-10,4)
D.dOe=new B.u(-11,-2)
D.dOf=new B.u(-13,-5)
D.dOg=new B.u(-14,0)
D.dOh=new B.u(-14,13)
D.dOi=new B.u(-14,2)
D.dOj=new B.u(-14,-12)
D.dOk=new B.u(-14,-19)
D.dOl=new B.u(-14,-23)
D.dOm=new B.u(-15,6)
D.dOn=new B.u(-16,14)
D.dOo=new B.u(-16,-8)
D.dOp=new B.u(-17,10)
D.dOq=new B.u(-17,-18)
D.dOr=new B.u(-17,-8)
D.dOt=new B.u(-18,20)
D.dOu=new B.u(-18,-9)
D.aBE=new B.u(-20,0)
D.dOw=new B.u(-20,16)
D.dOx=new B.u(-20,-9)
D.PF=new B.u(-22,8)
D.dOy=new B.u(-22,-10)
D.dOz=new B.u(-22,-11)
D.dOA=new B.u(-24,10)
D.dOB=new B.u(-24,11)
D.dOC=new B.u(-24,14)
D.dOD=new B.u(-24,-22)
D.dOE=new B.u(-25,-11)
D.dOF=new B.u(-26,0)
D.dOG=new B.u(-26,-18)
D.dOH=new B.u(-2,9)
D.dOI=new B.u(-2,-10)
D.dOJ=new B.u(-2,-20)
D.dOK=new B.u(-2,-9)
D.aBG=new B.u(-34,0)
D.dOP=new B.u(-42,0)
D.dOR=new B.u(-4,11)
D.dOS=new B.u(-4,-17)
D.dOT=new B.u(-4,-2)
D.dOV=new B.u(-5,0)
D.dOW=new B.u(-5,20)
D.dOX=new B.u(-5,6)
D.dOY=new B.u(-6,6)
D.dOZ=new B.u(-6,-42)
D.dP_=new B.u(-7,-19)
D.dP0=new B.u(-7,-24)
D.dP1=new B.u(-8,-9)
D.a1W=new B.u(-9,0)
D.dP2=new B.u(-9,1)
D.eTA=new B.w("Thinking\u2026",null,A.ht,null,null,null,null,null,null,null,null,null)
D.dPU=new B.C(A.ky,D.eTA,null)
D.f7o=new B.w("Start from a ready-made board",null,A.fS,null,null,null,null,null,null,null,null,null)
D.dQ3=new B.C(Ae.wz,D.f7o,null)
D.bky=new B.N(4,0,4,14)
D.ePj=new B.F(!0,A.az,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUs=new B.w("Games and little helpers for a spare minute.",null,D.ePj,null,null,null,null,null,null,null,null,null)
D.dQb=new B.C(D.bky,D.eUs,null)
D.f4u=new B.w("Tap to throw in a star",null,A.kl,null,null,null,null,null,null,null,null,null)
D.aXz=new B.cw(A.A,null,null,D.f4u,null)
D.dVo=new B.cG(0,null,0,14,null,null,D.aXz,null)
D.cSu=w([A.iX,A.bv],x.O)
D.aGp=new B.bR(A.A,0.5,A.w,null,0,D.cSu,null,null)
D.dW5=new B.bR(A.A,0.5,A.w,null,0,D.at_,null,null)
D.cKB=w([A.c,A.bI],x.O)
D.dW7=new B.bR(A.A,0.5,A.w,null,0,D.cKB,null,null)
D.dW8=new B.bR(A.A,0.5,A.w,null,0,I.as8,null,null)
D.cZu=w([A.c3,A.ln],x.O)
D.aGq=new B.bR(A.A,0.5,A.w,null,0,D.cZu,null,null)
D.cqs=w([A.c,A.c3],x.O)
D.dWc=new B.bR(A.r6,0.5,A.w,null,0,D.cqs,null,null)
D.b30=new B.x(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.b7H=new B.x(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.cJE=w([D.b30,D.ab9,D.b7H],x.O)
D.cQF=w([0,0.7,1],x.n)
D.dWe=new B.bR(A.r6,0.5,A.w,null,0,D.cJE,D.cQF,null)
D.c3R=w([A.fj,A.f3,A.k3],x.O)
D.dWf=new B.bR(N.pN,0.5,A.w,null,0,D.c3R,null,null)
D.ch4=w([A.qb,A.aZ,A.K],x.O)
D.cWv=w([0.3,0.7,1],x.n)
D.dWg=new B.bR(A.A,0.5,A.w,null,0,D.ch4,D.cWv,null)
D.cjy=w([A.ll,A.nY],x.O)
D.dWh=new B.bR(I.a6a,0.5,A.w,null,0,D.cjy,null,null)
D.baO=new B.x(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.cXO=w([A.eZ,D.baO],x.O)
D.dWi=new B.bR(A.r6,0.5,A.w,null,0,D.cXO,null,null)
D.cjP=w([A.eC,A.cJ],x.O)
D.dWj=new B.bR(A.A,0.5,A.w,null,0,D.cjP,null,null)
D.cFm=w([A.qb,A.aZ,A.fU],x.O)
D.dWk=new B.bR(A.A,0.5,A.w,null,0,D.cFm,null,null)
D.cyb=w([A.h5,A.aK,A.dl],x.O)
D.dWm=new B.bR(A.r6,0.5,A.w,null,0,D.cyb,null,null)
D.cT_=w([A.ln,K.q9],x.O)
D.dWn=new B.bR(A.r6,0.5,A.w,null,0,D.cT_,null,null)
D.b3b=new B.x(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.b1v=new B.x(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cHw=w([D.b3b,D.b1v],x.O)
D.dWp=new B.bR(A.A,0.5,A.w,null,0,D.cHw,null,null)
D.b7c=new B.x(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.b5s=new B.x(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.b5w=new B.x(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.d0v=w([D.b7c,D.b5s,D.b5w],x.O)
D.cEd=w([0,0.65,1],x.n)
D.dWq=new B.bR(I.a6c,0.5,A.w,null,0,D.d0v,D.cEd,null)
D.dWr=new B.bR(A.A,0.5,A.w,null,0,D.apL,null,null)
D.cYM=w([A.ll,A.aZ,A.fU],x.O)
D.dWv=new B.bR(A.A,0.5,A.w,null,0,D.cYM,null,null)
D.d_c=w([A.ln,A.hv],x.O)
D.dWy=new B.bR(A.A,0.5,A.w,null,0,D.d_c,null,null)
D.aGv=new B.b1(9,9)
D.dXi=new B.A(0,-4)
D.e0O=new B.A(0.22,4)
D.e7q=new B.A(0.8,-4)
D.efs=new B.A(0.58,4)
D.ehW=new B.bz("Moon",1.62,4291941851)
D.eir=new B.bz("Neptune",11.15,4284524026)
D.ej_=new B.bz("Sun",274,4294688548)
D.ejd=new B.bz("Mercury",3.7,4288455599)
D.ejj=new B.bz("Earth",9.81,4281908728)
D.ejl=new B.bz("Mars",3.71,4294472049)
D.ejE=new B.bz("Venus",8.87,4294759245)
D.ejI=new B.bz("Saturn",10.44,4294829706)
D.ek0=new B.bz("Jupiter",24.79,4294677052)
D.enh=new B.a7(10,-8,18,-2)
D.eni=new B.a7(14,-14,20,14)
D.enj=new B.a7(20,-2,30,2)
D.enl=new B.a7(4,-13,30,-3)
D.enn=new B.a7(8,-7,12,7)
D.ent=new B.a7(-12,12,12,19)
D.enu=new B.a7(-12,14,12,22)
D.env=new B.a7(-12,-22,12,8)
D.enw=new B.a7(-12,-25,12,19)
D.enx=new B.a7(-12,-26,12,-6)
D.eny=new B.a7(-12,-4,12,14)
D.enz=new B.a7(-12,-6,10,6)
D.enA=new B.a7(-14,20,14,24)
D.enB=new B.a7(-14,6,14,10)
D.enC=new B.a7(-14,-17,14,15)
D.enD=new B.a7(-14,-26,14,18)
D.enE=new B.a7(-14,-4,14,20)
D.enF=new B.a7(-15,-29,15,25)
D.enG=new B.a7(-16,-16,16,16)
D.enH=new B.a7(-16,-22,-9,18)
D.enI=new B.a7(-16,-24,16,-10)
D.enJ=new B.a7(-16,-2,16,20)
D.enL=new B.a7(-18,20,18,24)
D.enM=new B.a7(-18,-18,18,20)
D.enN=new B.a7(-20,12,20,22)
D.enO=new B.a7(-20,-28,20,26)
D.enP=new B.a7(-22,14,22,18)
D.aGU=new B.a7(-22,-26,22,24)
D.enQ=new B.a7(-22,-3,22,3)
D.enR=new B.a7(-22,-4,22,12)
D.enS=new B.a7(-24,-12,10,22)
D.enT=new B.a7(-24,-14,22,8)
D.enU=new B.a7(-24,-6,24,20)
D.aGV=new B.a7(-24,-9,24,9)
D.enV=new B.a7(-25,14,25,19)
D.enW=new B.a7(-26,-14,14,8)
D.enX=new B.a7(-26,-6,4,6)
D.aGW=new B.a7(-28,-13,28,13)
D.enY=new B.a7(-28,-16,28,16)
D.enZ=new B.a7(-28,-16,28,8)
D.eo_=new B.a7(-28,-22,28,22)
D.eo0=new B.a7(-30,-12,30,14)
D.eo1=new B.a7(-30,-14,0,14)
D.eo2=new B.a7(-30,-18,30,20)
D.eo3=new B.a7(-30,-2,30,18)
D.eo4=new B.a7(-30,-4,30,18)
D.eo5=new B.a7(-32,-17,32,17)
D.eo6=new B.a7(-33,-21,33,17)
D.eo7=new B.a7(-34,14,34,26)
D.a2P=new B.a7(-34,-18,34,18)
D.eo8=new B.a7(-34,-4,34,7)
D.eo9=new B.a7(-36,-24,36,20)
D.eoa=new B.a7(-38,-22,38,22)
D.eob=new B.a7(-3,5,3,15)
D.eod=new B.a7(-46,-34,46,28)
D.eoe=new B.a7(-48,-3,48,3)
D.eoh=new B.a7(-6,18,24,24)
D.eoi=new B.a7(-6,5,6,12)
D.eoj=new B.a7(-6,-22,6,-15)
D.eok=new B.a7(-9,-16,9,22)
D.eom=new B.a7(14,-9,17.5,9)
D.dL9={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aHJ=new B.f9(D.dL9,5,x.R)
D.dKT={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eqJ=new B.f9(D.dKT,10,x.R)
D.esF=new B.as(24,44)
D.esK=new B.as(300,300)
D.et3=new B.as(54,38)
D.eta=new B.as(66,38)
D.aYM=new B.fd(2,null,null,null,null,A.bB,null,null,null,null)
D.eu6=new B.a5(16,16,D.aYM,null)
D.aIH=new B.hJ(3,12,12,0.82,null)
D.euS=new A2.b2T(78,6,6,1,56)
D.f8Z=new B.w("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aIS=new B.b_(D.f8Z,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.cT1=w([A.cD,A.cz,A.bh,A.aY,A.oO,A.cD],x.O)
D.eA_=new B.fN(A.A,0,6.283185307179586,A.w,D.cT1,null,null)
D.eIs=new B.F(!0,A.aK,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.NQ,null,null,null)
D.eB3=new B.em("You are here (Sun)",null,null,A.cS,null,null,null,null,null,null,D.eIs)
D.aLc=new B.F(!0,A.az,null,null,null,null,10.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eB4=new B.em("What we see",null,null,A.cS,null,null,null,null,null,null,D.aLc)
D.eG_=new B.F(!0,F.a8G,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eB7=new B.em("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cS,null,null,null,null,null,null,D.eG_)
D.eKy=new B.F(!0,A.k_,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBc=new B.em("AI",null,null,A.cS,null,null,null,null,null,null,D.eKy)
D.eFL=new B.F(!0,A.c2,null,null,null,null,15,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBd=new B.em("Add atoms with the buttons below",null,null,A.cS,null,null,null,null,null,null,D.eFL)
D.aJF=new B.F(!0,A.c2,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBt=new B.F(!0,A.x,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBw=new B.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eC0=new B.F(!0,A.bg,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCi=new B.F(!0,A.cC,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCO=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eD3=new B.F(!0,A.c,null,null,null,null,13.5,A.I,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDt=new B.F(!0,A.aQ,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDP=new B.F(!0,A.c2,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDZ=new B.F(!0,A.af,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ere=new B.cL(A.hQ,A.dE,6)
D.cN7=w([D.ere],x.q)
D.eEh=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cN7,null,null,null)
D.eEk=new B.F(!0,A.el,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEn=new B.F(!0,A.c,null,null,null,null,17,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEp=new B.F(!0,A.c2,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEN=new B.F(!0,A.aK,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aK1=new B.F(!0,A.c2,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eF7=new B.F(!0,A.az,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eF8=new B.F(!0,A.c2,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eG2=new B.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGv=new B.F(!0,A.az,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGY=new B.F(!0,A.aK,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eH3=new B.F(!0,A.c,null,null,null,null,12.5,A.a3,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHJ=new B.F(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.NQ,null,null,null)
D.eI9=new B.F(!0,A.az,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIh=new B.F(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIG=new B.F(!0,A.ua,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIU=new B.F(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJc=new B.F(!0,A.bH,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJg=new B.F(!0,A.c2,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJj=new B.F(!0,A.az,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJp=new B.F(!0,A.az,null,null,null,null,18,A.I,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJR=new B.F(!0,A.c2,null,null,null,null,8.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eK4=new B.F(!0,A.nj,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eK5=new B.F(!0,A.af,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKE=new B.F(!0,A.af,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKk=new B.F(!0,A.af,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4z=new B.F(!0,A.c,null,null,null,null,9.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKS=new B.F(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.er5=new B.cL(A.x,A.J,5)
D.cC_=w([D.er5],x.q)
D.eKT=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cC_,null,null,null)
D.eKV=new B.F(!0,A.c,null,null,null,null,10.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.erh=new B.cL(A.aT,A.J,3)
D.d0Y=w([D.erh],x.q)
D.eKZ=new B.F(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d0Y,null,null,null)
D.eLd=new B.F(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLi=new B.F(!0,A.h6,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLx=new B.F(!0,A.c2,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eM1=new B.F(!0,A.bh,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMz=new B.F(!0,A.c2,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMX=new B.F(!0,A.bh,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNe=new B.F(!0,A.az,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNm=new B.F(!0,A.x,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKY=new B.F(!0,A.az,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNQ=new B.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNZ=new B.F(!0,A.aK,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eO5=new B.F(!0,A.aK,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Hu=new B.F(!0,A.af,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOq=new B.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aL9=new B.F(!0,A.af,null,null,null,null,12,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOt=new B.F(!0,A.aK,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4O=new B.F(!0,A.c,null,null,null,null,13,A.a3,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePx=new B.F(!0,A.ua,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEs=new B.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQc=new B.w("\u26a0\ufe0f ",null,D.eEs,null,null,null,null,null,null,null,null,null)
D.eQn=new B.w("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.Rk,null,null,null,null,null,null,null,null,null)
D.eQM=new B.w("LETTER COUNT OF THE SECRET VERSION",null,Q.mj,null,null,null,null,null,null,null,null,null)
D.eRL=new B.w("Pick one, then change it and see what happens.",null,A.Rk,null,null,null,null,null,null,null,null,null)
D.eBv=new B.F(!0,A.c,null,null,null,null,18,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRP=new B.w("NGMY Phone",null,D.eBv,null,null,null,null,null,null,null,null,null)
D.eFx=new B.F(!0,A.af,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSI=new B.w("What do you want to invent? Type it below, or tap an idea.",null,D.eFx,null,null,null,null,null,null,null,null,null)
D.eT3=new B.w("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,S.a43,null,null,null,null,null,null,null,null,null)
D.eU4=new B.w("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.eUD=new B.w("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hg,null,null,null,null,null,null,null,null,null)
D.eUI=new B.w("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.eVf=new B.w("Make it yours",null,A.la,null,null,null,null,null,null,null,null,null)
D.eEP=new B.F(!0,A.az,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVu=new B.w("Your mass never changes. What changes is how hard each world pulls on it.",null,D.eEP,null,null,null,null,null,null,null,null,null)
D.eJu=new B.F(!0,A.j1,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXC=new B.w("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.eJu,null,null,null,null,null,null,null,null,null)
D.eXR=new B.w("YOUR DECODING",null,Q.mj,null,null,null,null,null,null,null,null,null)
D.eLN=new B.F(!0,A.c2,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ3=new B.w("WHAT HAPPENS",null,D.eLN,null,null,null,null,null,null,null,null,null)
D.eOS=new B.F(!0,A.c,null,null,null,null,13,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_v=new B.w("NGMY Apps",null,D.eOS,null,null,null,null,null,null,null,null,null)
D.f_A=new B.w("Check",null,null,null,null,null,null,null,null,null,null,null)
D.f0c=new B.w("Change the words and pictures on the three slabs.",null,A.Rk,null,null,null,null,null,null,null,null,null)
D.f0m=new B.w("All the parts and wires will be removed.",null,A.hs,null,null,null,null,null,null,null,null,null)
D.f0F=new B.w("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.f1d=new B.w("Tap the crank on the board again and again to spin it faster.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.f20=new B.w("INTERCEPTED",null,Q.mj,null,null,null,null,null,null,null,null,null)
D.f2k=new B.w("\ud83c\udfaf Challenges",null,A.dO,null,null,null,null,null,null,null,null,null)
D.f2P=new B.w("Remove this part",null,S.aJI,null,null,null,null,null,null,null,null,null)
D.f35=new B.w("Clear the board?",null,A.di,null,null,null,null,null,null,null,null,null)
D.eLj=new B.F(!0,A.br,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3k=new B.w("How the Lab works",null,D.eLj,null,null,null,null,null,null,null,null,null)
D.eDd=new B.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3B=new B.w("Electronics Lab",null,D.eDd,null,null,null,null,A.a2,null,1,null,null)
D.f3D=new B.w("?",null,I.aL6,null,null,null,null,null,null,null,null,null)
D.eJo=new B.F(!0,A.aY,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3H=new B.w("Planet Earth",null,D.eJo,null,null,null,null,null,null,null,null,null)
D.f4N=new B.w("Ready-made circuits",null,A.dO,null,null,null,null,null,null,null,null,null)
D.f5m=new B.w("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.f5D=new B.w("UNIVERSE EXPLORER",null,F.a4b,null,null,null,null,null,null,null,null,null)
D.f7V=new B.w("SECRET VERSION",null,Q.mj,null,null,null,null,null,null,null,null,null)
D.eO9=new B.F(!0,A.aK,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8q=new B.w("\u26a0 There is no air here, so a parachute will not work.",null,D.eO9,null,null,null,null,null,null,null,null,null)
D.f9z=new B.w("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,S.a43,null,null,null,null,null,null,null,null,null)
D.f9F=new B.w("\u26a1 ",null,A.oz,null,null,null,null,null,null,null,null,null)
D.fac=new B.w("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.a4y,null,null,null,null,null,null,null,null,null)
D.fax=new B.w("Tap it to change its setting. Drag from the right dot to connect.",null,A.lb,null,null,null,null,null,null,null,null,null)
D.fbr=new B.w("TOOLBOX",null,F.a4b,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.fWt=null
$.fWs=null
$.h1o=0
$.hsX=B.T(x.N,x.k)
$.htx=B.T(x.N,x.k)
$.hnC=B.T(x.N,B.az("dz"))
$.cax=B.a([],B.az("P<ag2>"))
$.fTx=0
$.aZv="music"
$.fVP=null
$.hti=B.T(x.N,x.k)
$.huk=B.T(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hZd","bAi",()=>{var v="led"
return B.a([C.avu("Both together","Make the light glow only when BOTH switches are ON.",2,new C.f0Q(),v),C.avu("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.f0R(),v),C.avu("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.f0S(),v),C.avu("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.f0Z(),v),C.avu("Not both","Make the light go OFF only when both switches are ON.",2,new C.f1_(),v),C.avu("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.f10(),"buzzer")],B.az("P<b7q>"))})
w($,"hZE","bAj",()=>B.a([C.oa("UNIVERSE","Earth, space and gravity",A.Yf,A.aY,new C.f1g()),C.oa("ELECTRONICS LAB","Batteries, wires, real circuits",A9.XC,A.aY,new C.f1h()),C.oa("DISCOVERY LAB","Body Explorer: a real 3D human",D.Xs,A.bh,new C.f1i()),C.oa("TOOLBOX","Converter, clock, games",K.ag3,A.cP,new C.f1t()),C.oa("MOLECULE MAKER","Join atoms into real molecules",A.L5,A.hm,new C.f1v()),C.oa("DNA LAB","Copy DNA, build a protein",D.Xs,A.bU,new C.f1w()),C.oa("ECOSYSTEM LAB","Grass, rabbits and foxes",A.x9,A.bh,new C.f1x()),C.oa("BALANCE LAB","Levers, weight and torque",D.bt1,A.aK,new C.f1y()),C.oa("GEAR LAB","Teeth, speed and force",A.EM,A.cP,new C.f1z()),C.oa("LASER MAZE","Bend the beam with mirrors",F.agn,A.aD,new C.f1A()),C.oa("LIGHT MIXER","Match colours with light",D.bqK,A.b6,new C.f1B()),C.oa("CIPHER LAB","Make and crack secret codes",A.xk,A.aY,new C.f1j()),C.oa("REACTION LAB","Wire parts together",A.xo,A.br,new C.f1k()),C.oa("SPARK PAINTER","Paint with light",A.Xu,A.bU,new C.f1l()),C.oa("ROCKET LANDER","Land softly on the pad",A.mL,A.aY,new C.f1m()),C.oa("ORBIT STUDIO","Slingshot planets",A.m4,A.cP,new C.f1n()),C.oa("SWARM STUDIO","A living school of fish",A.L5,A.bh,new C.f1o()),C.oa("CHAIN BURST","One tap, a whole chain",A.hp,A.bU,new C.f1p()),C.oa("TITLE ANIMATOR","Make a moving title",A.xg,A.cz,new C.f1q()),C.oa("CIRCUIT LAB","Connect logic, learn it",A.XW,A.cC,new C.f1r()),C.oa("MARBLE MUSIC","Marbles ring the notes",D.bqq,A.b6,new C.f1s()),C.oa("ORBIT SEQUENCER","Planets play the tune",D.bsQ,A.bB,new C.f1u())],B.az("P<boX>")))
w($,"i07","tx",()=>{var v,u,t=B.T(x.N,x.dV)
for(v=0;v<56;++v){u=D.NZ[v]
t.m(0,u.a,u)}return t})
w($,"hZe","aft",()=>B.a([C.El("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.f11()),C.El("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.f12()),C.El("Spin the motor","A battery and a motor in a loop will make it spin.",new C.f13()),C.El("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.f14()),C.El("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.f15()),C.El("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.f0T()),C.El("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.f0U()),C.El("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.f0V()),C.El("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.f0W()),C.El("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.f0X()),C.El("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.f0Y())],B.az("P<b7r>")))
w($,"hZG","h9E",()=>B.a([C.ZS("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aK,A.cj,new C.f1J()),C.ZS("Focus Timer","Work, then rest","\u23f1\ufe0f",A.cD,A.bO,new C.f1K()),C.ZS("Breathe","Calm down in a minute","\ud83e\udee7",A.hm,A.cE,new C.f1L()),C.ZS("Draw Pad","Sketch and share","\ud83c\udfa8",A.by,A.b3,new C.f1M()),C.ZS("Memory Match","Find the pairs","\ud83c\udccf",A.aY,A.cb,new C.f1N()),C.ZS("Simon Sounds","Copy the tune","\ud83c\udfb5",A.cz,A.bm,new C.f1O()),C.ZS("Tip & Split","Share the bill","\ud83e\uddfe",A.bh,A.aW,new C.f1P()),C.ZS("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bB,A.aB,new C.f1Q())],B.az("P<bqg>")))
w($,"hZF","h9D",()=>B.a([C.acU("EARTH GLOBE","Turn it, tap a country",A.m4,A.aY,new C.f1C()),C.acU("SOLAR SYSTEM","The Sun and its worlds",D.bqt,A.aK,new C.f1D()),C.acU("GRAVITY LAB","Drop, weigh, orbit",D.ah6,A.cP,new C.f1E()),C.acU("BLACK HOLE","Throw in a star",A.Ee,A.bB,new C.f1F()),C.acU("GALAXY","Build, tilt, collide",A.wX,A.h4,new C.f1G()),C.acU("SIZE COMPARE","Earth next to a star",D.bqM,A.bU,new C.f1H()),C.acU("SEASONS & MOON","Why it is summer",A.uu,A.br,new C.f1I())],B.az("P<bqb>")))})()};
(a=>{a["OhKZkVK0So5tv6hyBFsDnMvuhKE="]=a.current})($__dart_deferred_initializers__);