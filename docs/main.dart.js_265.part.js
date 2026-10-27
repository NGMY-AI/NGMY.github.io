((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,A_,W,F,N,A0,X,A1,L,H,A2,A3,R,A4,U,A5,Q,A6,A7,S,M,T,A8,A9,P,I,E,B={
bvt(d){return B.hwD(d)},
hwD(d){var w=0,v=C.j(x.dk),u,t=2,s=[],r,q,p,o
var $async$bvt=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qi(C.mJ(""),d,A.hc,null).cJ(0,A.UT),$async$bvt)
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
return C.i($async$bvt,v)},
hHR(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.NF[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.dp(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.ae(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.kZ(D.NF,new B.fed())
if(w==null)w=A.d.gL(D.NF)
s=C.T(x.N,x.F)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.K)(r),++u){l=r[u].a
k=l[0]
l=$.xP().h(0,l[1])
l.toString
s.m(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.K)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gL(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new B.aht(w.a,w.b,m,w,s,!1)},
hBK(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.J(D.NW,new B.f60(),x.bd).aF(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
hPB(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cP(b2,"{")
v=A.a.o0(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.R.aE(0,A.a.am(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aZ(a5)
r=0
for(a6=x.a,a7=J.aV(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gT(a7)
p=C.t(J.q(q,"kind"))
o=C.t(J.q(q,"id"))
if(!$.xP().an(0,p)||J.eR(s,o)||J.aa(t)>=8)continue
J.ch(s,o)
n=C.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.d_F[a9]
l=J.q(q,m)
if(typeof l=="number")J.aE(n,m,l)}k=A.k.D(typeof J.q(q,"x")=="number"?C.fc(J.q(q,"x")):0.2+A.k.G(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.q(q,"y")=="number"?C.fc(J.q(q,"y")):0.25+A.k.ak(r,3)*0.3,0.1,0.9)
J.ch(t,new C.eP([o,p,k,j,n]));++r}if(J.aa(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aV(a6.a(J.q(u,"wires")));a5.C();){h=a5.gT(a5)
g=a6.a(h)
if(J.aa(g)<4)continue
f=C.t(J.q(g,0))
e=C.t(J.q(g,2))
d=A.o.D(A.k.N(C.fc(J.q(g,1))),0,1)
a0=A.o.D(A.k.N(C.fc(J.q(g,3))),0,1)
if(J.eR(s,f)&&J.eR(s,e)&&!J.y(f,e))J.ch(i,new C.cH([f,d,e,a0]))}if(J.aa(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.Q.a(J.q(u,"steps"))
a0=J.aV(a0==null?A.cR:a0)
while(a0.C()){a2=a0.gT(a0)
J.ch(a1,C.t(a2))}a3=a1
a0=J.q(u,"title")
a0=C.t(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new B.ma(a0,C.t(a1==null?"":a1),t,i,A.U)
a0=a4.a
a1=a4.b
d=J.aa(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.t(a5==null?"":a5)
return new B.aht(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hGv(d){var w,v,u=B.fNv()
d.B(u)
for(w=0;w<60;++w)u.a5h(0,0.03333333333333333)
v=u.a
return A.d.ba(v,new B.fbB(u))&&!A.d.e9(v,new B.fbC())},
hGu(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.K)(l),++u){t=l[u];++v
k.m(0,t.a,$.xP().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.K)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.t(t.e)+" V")
if(p==="resistor")q.push(""+A.k.U(t.r)+" ohms")
if(A.d.t(D.cZh,p))q.push("level "+A.k.U(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.dx
o=p>0.05?"working (glow "+A.k.U(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aF(q,", ")+")"
s.push(C.t(p)+n+": "+o+", current "+A.k.aa(Math.abs(t.db)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.K)(w),++u){m=w[u]
l.push(C.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aF(s,"\n")+"\nWires: "+A.d.aF(l,"; ")},
hve(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.K)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aF(v,"\n")+"\n\n"}v=A.d.aF(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
hHQ(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.xP().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<56;++u){s=D.NW[u]
if(A.d.ba(w,new B.fea(s)))if(!C.dp(r,s.b.toLowerCase(),0))v=C.dp(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.ae("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a4(w,new B.feb(e),C.U(w).k("a4<1>")).gai(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.ae("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.aa(A.d.cG(w,0,new B.fec())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.ae("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gL(w)
w=$.xP().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
aht:function aht(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fed:function fed(){},
f60:function f60(){},
fbB:function fbB(d){this.a=d},
fbC:function fbC(){},
fea:function fea(d){this.a=d},
feb:function feb(d){this.a=d},
fec:function fec(){},
TB:function TB(d,e){this.c=d
this.a=e},
bgm:function bgm(d,e,f,g,h){var _=this
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
dVT:function dVT(d){this.a=d},
dVU:function dVU(d,e,f){this.a=d
this.b=e
this.c=f},
dVV:function dVV(d){this.a=d},
dW5:function dW5(d){this.a=d},
dW6:function dW6(d,e){this.a=d
this.b=e},
dW1:function dW1(d){this.a=d},
dW_:function dW_(d,e){this.a=d
this.b=e},
dW0:function dW0(d,e,f){this.a=d
this.b=e
this.c=f},
dW2:function dW2(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dVY:function dVY(d){this.a=d},
dVZ:function dVZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dW3:function dW3(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dVX:function dVX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dW4:function dW4(d,e){this.a=d
this.b=e},
dVW:function dVW(d,e){this.a=d
this.b=e},
dW9:function dW9(d){this.a=d},
dW8:function dW8(d){this.a=d},
dWa:function dWa(d){this.a=d},
dW7:function dW7(d){this.a=d},
dWb:function dWb(d,e){this.a=d
this.b=e},
dWc:function dWc(d,e){this.a=d
this.b=e},
dWd:function dWd(d,e){this.a=d
this.b=e},
dWe:function dWe(d,e){this.a=d
this.b=e},
bvO(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aK1,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p)},
h_J(d,e,f,g){var w=null,v=C.m(24),u=C.H(f.j(0.6),A.r,1)
return C.au(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.ar,C.d(e,w,w,w,w,w,w,A.Hv,A.L,w,w),A.ay,C.c8(A.fG,g,A.bx,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.h,w,w,new C.o(D.Tn,w,u,v,w,w,A.n),w,w,w,w,A.a8,w,w,w),w,w,w)},
EL:function EL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ud:function ud(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
U2:function U2(d){this.a=d},
aBq:function aBq(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.kA$=i
_.fE$=j
_.fb$=k
_.bq$=l
_.a6$=m
_.c=_.a=null},
eao:function eao(){},
eaI:function eaI(d){this.a=d},
eaH:function eaH(d,e){this.a=d
this.b=e},
eaJ:function eaJ(){},
eaK:function eaK(){},
eaq:function eaq(d,e,f){this.a=d
this.b=e
this.c=f},
eap:function eap(d,e){this.a=d
this.b=e},
eaf:function eaf(d){this.a=d},
eag:function eag(d){this.a=d},
eah:function eah(d){this.a=d},
eai:function eai(d){this.a=d},
eaj:function eaj(d){this.a=d},
eak:function eak(d){this.a=d},
eal:function eal(d){this.a=d},
eam:function eam(d){this.a=d},
ean:function ean(d){this.a=d},
ead:function ead(d){this.a=d},
eae:function eae(d){this.a=d},
eac:function eac(d){this.a=d},
eaB:function eaB(d,e){this.a=d
this.b=e},
eaw:function eaw(d){this.a=d},
eax:function eax(d){this.a=d},
eat:function eat(d){this.a=d},
eay:function eay(d){this.a=d},
eas:function eas(d){this.a=d},
eaz:function eaz(d){this.a=d},
eaA:function eaA(d){this.a=d},
ear:function ear(d){this.a=d},
eaC:function eaC(d,e){this.a=d
this.b=e},
eav:function eav(d,e){this.a=d
this.b=e},
eaD:function eaD(d){this.a=d},
eaE:function eaE(d){this.a=d},
eaF:function eaF(d){this.a=d},
eaG:function eaG(d){this.a=d},
eau:function eau(d){this.a=d},
bdp:function bdp(d,e){this.b=d
this.a=e},
aJc:function aJc(){},
btr:function btr(){},
czh(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$czh=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.tv().jV(0,"assets/data/body3d.bin"),$async$czh)
case 3:d=a1
$.fWa=J.eO(A.dD.gaN(d),d.byteOffset,d.byteLength)
t=C.bDA(d)
s=t.getUint32(4,!0)
r=C.a([],x.x)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=C.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=C.jf(l,0,null)
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
g=C.aY((l<<16|h<<8|g|4278190080)>>>0)
r.push(new B.a17(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aPF))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new B.b6B(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$czh,v)},
aOZ:function aOZ(d,e,f){this.a=d
this.b=e
this.c=f},
a17:function a17(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b6B:function b6B(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Su:function Su(d){this.a=d},
azS:function azS(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.kA$=t
_.fE$=u
_.fb$=v
_.bq$=w
_.a6$=a0
_.c=_.a=null},
dxD:function dxD(d){this.a=d},
dxC:function dxC(d,e){this.a=d
this.b=e},
dxf:function dxf(d,e){this.a=d
this.b=e},
dxg:function dxg(){},
dxE:function dxE(){},
dxh:function dxh(d,e){this.a=d
this.b=e},
dxi:function dxi(d){this.a=d},
dxj:function dxj(){},
dxk:function dxk(d){this.a=d},
dxm:function dxm(d,e){this.a=d
this.b=e},
dxl:function dxl(d){this.a=d},
dxc:function dxc(d,e,f){this.a=d
this.b=e
this.c=f},
dxd:function dxd(d){this.a=d},
dxe:function dxe(d){this.a=d},
dxt:function dxt(d){this.a=d},
dxu:function dxu(d,e){this.a=d
this.b=e},
dxv:function dxv(d,e){this.a=d
this.b=e},
dxw:function dxw(d){this.a=d},
dxs:function dxs(d,e){this.a=d
this.b=e},
dxx:function dxx(d,e){this.a=d
this.b=e},
dxr:function dxr(d,e){this.a=d
this.b=e},
dxy:function dxy(d){this.a=d},
dxq:function dxq(d){this.a=d},
dxz:function dxz(d){this.a=d},
dxp:function dxp(d){this.a=d},
dxA:function dxA(d){this.a=d},
dxo:function dxo(d){this.a=d},
dxB:function dxB(d){this.a=d},
dxn:function dxn(d){this.a=d},
aIe:function aIe(){},
aIf:function aIf(){},
bWB:function bWB(d){var _=this
_.a=d
_.d=_.c=_.b=null},
bWC:function bWC(d,e){this.a=d
this.b=e},
bWD:function bWD(d){this.a=d},
avr(d,e,f,g,h){return new B.b7j(d,e,f,g,h)},
fEB(d,e,f,g,h,i){return $.hsE.ce(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.cG3(d,e,f,i,g,h))},
xg:function xg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Bf:function Bf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
mZ:function mZ(d,e,f){this.a=d
this.b=e
this.c=f},
b7j:function b7j(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f0z:function f0z(){},
f0A:function f0A(){},
f0B:function f0B(){},
f0I:function f0I(){},
f0J:function f0J(){},
f0K:function f0K(){},
Sz:function Sz(d){this.a=d},
azV:function azV(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.kA$=n
_.fE$=o
_.fb$=p
_.bq$=q
_.a6$=r
_.c=_.a=null},
dzO:function dzO(d){this.a=d},
dzs:function dzs(d,e){this.a=d
this.b=e},
dzv:function dzv(){},
dzP:function dzP(){},
dzq:function dzq(d,e){this.a=d
this.b=e},
dzr:function dzr(d,e){this.a=d
this.b=e},
dzw:function dzw(d,e,f){this.a=d
this.b=e
this.c=f},
dzl:function dzl(){},
dzm:function dzm(){},
dzn:function dzn(d){this.a=d},
dzo:function dzo(d,e){this.a=d
this.b=e},
dzp:function dzp(d,e,f){this.a=d
this.b=e
this.c=f},
dzx:function dzx(){},
dzy:function dzy(d,e){this.a=d
this.b=e},
dzz:function dzz(d){this.a=d},
dzu:function dzu(d,e){this.a=d
this.b=e},
dzt:function dzt(d){this.a=d},
dzk:function dzk(d,e,f){this.a=d
this.b=e
this.c=f},
dzI:function dzI(d){this.a=d},
dzH:function dzH(d){this.a=d},
dzJ:function dzJ(d){this.a=d},
dzG:function dzG(d){this.a=d},
dzE:function dzE(d){this.a=d},
dzF:function dzF(d){this.a=d},
dzD:function dzD(d){this.a=d},
dzA:function dzA(d){this.a=d},
dzC:function dzC(d){this.a=d},
dzK:function dzK(d,e){this.a=d
this.b=e},
dzL:function dzL(d,e){this.a=d
this.b=e},
dzM:function dzM(d){this.a=d},
dzB:function dzB(d){this.a=d},
dzN:function dzN(d,e){this.a=d
this.b=e},
b7B:function b7B(d,e){this.b=d
this.a=e},
cG3:function cG3(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aIk:function aIk(){},
btb:function btb(){},
hjz(){return new B.LI(null)},
oa(d,e,f,g,h){return new B.boP(d,e,f,g,h)},
bng(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
fF6(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
LI:function LI(d){this.a=d},
IS:function IS(d,e){this.a=d
this.b=e},
zx:function zx(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aAb:function aAb(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dF0:function dF0(d,e){this.a=d
this.b=e},
dF_:function dF_(d){this.a=d},
dF2:function dF2(d,e){this.a=d
this.b=e},
dF1:function dF1(d){this.a=d},
boP:function boP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f1_:function f1_(){},
f10:function f10(){},
f11:function f11(){},
f1c:function f1c(){},
f1e:function f1e(){},
f1f:function f1f(){},
f1g:function f1g(){},
f1h:function f1h(){},
f1i:function f1i(){},
f1j:function f1j(){},
f1k:function f1k(){},
f12:function f12(){},
f13:function f13(){},
f14:function f14(){},
f15:function f15(){},
f16:function f16(){},
f17:function f17(){},
f18:function f18(){},
f19:function f19(){},
f1a:function f1a(){},
f1b:function f1b(){},
f1d:function f1d(){},
bnh:function bnh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eIv:function eIv(d){this.a=d},
eIu:function eIu(d,e){this.a=d
this.b=e},
eIs:function eIs(d){this.a=d},
eIw:function eIw(d){this.a=d},
eIt:function eIt(d,e){this.a=d
this.b=e},
acC:function acC(d,e,f){this.c=d
this.d=e
this.a=f},
abx:function abx(d,e,f){this.c=d
this.d=e
this.a=f},
Om:function Om(d,e,f,g,h,i,j,k,l,m){var _=this
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
bof:function bof(d,e){this.b=d
this.a=e},
bnL:function bnL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b6i:function b6i(d,e){this.b=d
this.a=e},
aEm:function aEm(d,e){this.c=d
this.a=e},
aEn:function aEn(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cO$=e
_.b_$=f
_.c=_.a=null},
eIb:function eIb(d){this.a=d},
eIa:function eIa(d){this.a=d},
eI9:function eI9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eI8:function eI8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eI6:function eI6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eI5:function eI5(d,e,f){this.a=d
this.b=e
this.c=f},
eI7:function eI7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eI4:function eI4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIj:function eIj(d){this.a=d},
eIi:function eIi(d){this.a=d},
eIk:function eIk(d,e){this.a=d
this.b=e},
eIl:function eIl(d,e){this.a=d
this.b=e},
eIm:function eIm(d,e){this.a=d
this.b=e},
eIh:function eIh(d,e,f){this.a=d
this.b=e
this.c=f},
eIn:function eIn(d,e,f){this.a=d
this.b=e
this.c=f},
eIg:function eIg(d){this.a=d},
eIc:function eIc(d){this.a=d},
eIo:function eIo(d){this.a=d},
eIp:function eIp(d){this.a=d},
eIf:function eIf(d,e){this.a=d
this.b=e},
eIq:function eIq(d,e){this.a=d
this.b=e},
eIe:function eIe(d,e){this.a=d
this.b=e},
eIr:function eIr(d,e){this.a=d
this.b=e},
eId:function eId(d,e){this.a=d
this.b=e},
eI2:function eI2(){},
eI3:function eI3(){},
bmW:function bmW(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bmo:function bmo(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b6Y:function b6Y(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bmq:function bmq(d,e,f){this.b=d
this.c=e
this.a=f},
bqi:function bqi(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aK0:function aK0(){},
h16(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ao(0,new C.u(w,0)),u=e.aD(0,new C.u(w,0)),t=1-f,s=3*t
return d.aM(0,t*t*t).ao(0,v.aM(0,s*t*f)).ao(0,u.aM(0,s*f*f)).ao(0,e.aM(0,f*f*f))},
bdo(d,e,f,g,h,i){return $.hte.ce(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.d9v(d,e,f,i,g,h))},
Zl:function Zl(d,e){this.a=d
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
Bj:function Bj(d,e){this.a=d
this.b=e},
Xk:function Xk(d,e){this.a=d
this.b=e},
acs:function acs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Zy:function Zy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Bt:function Bt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a9q:function a9q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a9H:function a9H(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abB:function abB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bdm:function bdm(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
d9z:function d9z(d){this.a=d},
d9A:function d9A(d){this.a=d},
d9w:function d9w(d,e){this.a=d
this.b=e},
d9x:function d9x(d){this.a=d},
d9y:function d9y(d){this.a=d},
d9B:function d9B(d){this.a=d},
d9C:function d9C(d){this.a=d},
d9D:function d9D(d){this.a=d},
d9E:function d9E(d){this.a=d},
d9F:function d9F(d){this.a=d},
d9G:function d9G(d){this.a=d},
d9H:function d9H(d){this.a=d},
d9I:function d9I(d){this.a=d},
d9J:function d9J(d){this.a=d},
Ey:function Ey(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
U1:function U1(d){this.a=d},
aBp:function aBp(d,e,f,g,h,i,j){var _=this
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
_.a6$=j
_.c=_.a=null},
e9J:function e9J(d){this.a=d},
e9y:function e9y(d){this.a=d},
e9A:function e9A(){},
e9B:function e9B(){},
e9E:function e9E(){},
e9F:function e9F(d,e,f){this.a=d
this.b=e
this.c=f},
e9G:function e9G(d){this.a=d},
e9H:function e9H(d){this.a=d},
e9C:function e9C(){},
e9D:function e9D(d){this.a=d},
ea8:function ea8(d){this.a=d},
e9I:function e9I(){},
e9u:function e9u(d){this.a=d},
e9L:function e9L(d){this.a=d},
e9K:function e9K(d){this.a=d},
e9N:function e9N(){},
e9M:function e9M(d,e){this.a=d
this.b=e},
e9x:function e9x(){},
e9v:function e9v(d){this.a=d},
e9w:function e9w(d){this.a=d},
ea6:function ea6(d){this.a=d},
ea5:function ea5(d){this.a=d},
ea7:function ea7(d){this.a=d},
e9X:function e9X(d,e){this.a=d
this.b=e},
ea4:function ea4(d){this.a=d},
ea2:function ea2(d){this.a=d},
ea3:function ea3(d){this.a=d},
ea1:function ea1(d){this.a=d},
ea0:function ea0(d){this.a=d},
e9Y:function e9Y(d){this.a=d},
e9Z:function e9Z(d){this.a=d},
ea_:function ea_(d){this.a=d},
e9z:function e9z(){},
e9T:function e9T(d){this.a=d},
e9U:function e9U(d){this.a=d},
e9S:function e9S(d){this.a=d},
e9V:function e9V(d){this.a=d},
e9R:function e9R(d){this.a=d},
e9W:function e9W(d){this.a=d},
e9Q:function e9Q(d){this.a=d},
e9P:function e9P(d){this.a=d},
e9O:function e9O(d,e){this.a=d
this.b=e},
bdn:function bdn(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
d9v:function d9v(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aJa:function aJa(){},
bhT:function bhT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Od:function Od(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Ug:function Ug(d){this.a=d},
bgY:function bgY(d,e,f,g,h,i,j,k){var _=this
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
_.a6$=k
_.c=_.a=null},
ejU:function ejU(d){this.a=d},
ejS:function ejS(d){this.a=d},
ejT:function ejT(){},
ejv:function ejv(){},
eju:function eju(){},
ejE:function ejE(d,e){this.a=d
this.b=e},
ejG:function ejG(d){this.a=d},
ejK:function ejK(d){this.a=d},
ejF:function ejF(d){this.a=d},
ejL:function ejL(d){this.a=d},
ejM:function ejM(d){this.a=d},
ejN:function ejN(d,e){this.a=d
this.b=e},
ejD:function ejD(d,e){this.a=d
this.b=e},
ejO:function ejO(d){this.a=d},
ejC:function ejC(d){this.a=d},
ejP:function ejP(d,e){this.a=d
this.b=e},
ejB:function ejB(d,e){this.a=d
this.b=e},
ejQ:function ejQ(d){this.a=d},
ejA:function ejA(d,e){this.a=d
this.b=e},
ejR:function ejR(d){this.a=d},
ejz:function ejz(d){this.a=d},
ejH:function ejH(d){this.a=d},
ejy:function ejy(d){this.a=d},
ejI:function ejI(d){this.a=d},
ejx:function ejx(d){this.a=d},
ejJ:function ejJ(d,e){this.a=d
this.b=e},
ejw:function ejw(d,e){this.a=d
this.b=e},
boa:function boa(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
Us:function Us(d){this.a=d},
aBD:function aBD(d,e,f,g){var _=this
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
_.a6$=g
_.c=_.a=null},
eqt:function eqt(d,e){this.a=d
this.b=e},
equ:function equ(d,e,f){this.a=d
this.b=e
this.c=f},
eqv:function eqv(d){this.a=d},
eqs:function eqs(){},
eqw:function eqw(d,e){this.a=d
this.b=e},
eqr:function eqr(d,e){this.a=d
this.b=e},
eqx:function eqx(d,e){this.a=d
this.b=e},
eqq:function eqq(d,e){this.a=d
this.b=e},
eqy:function eqy(d){this.a=d},
eqp:function eqp(d){this.a=d},
eqz:function eqz(d,e){this.a=d
this.b=e},
eqo:function eqo(d,e){this.a=d
this.b=e},
eqA:function eqA(d){this.a=d},
eqB:function eqB(d){this.a=d},
eqn:function eqn(d,e){this.a=d
this.b=e},
aJj:function aJj(){},
aJp:function aJp(){},
YR:function YR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
TZ:function TZ(d){this.a=d},
aBi:function aBi(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.kA$=i
_.fE$=j
_.fb$=k
_.bq$=l
_.a6$=m
_.c=_.a=null},
e6B:function e6B(d){this.a=d},
e6C:function e6C(d,e){this.a=d
this.b=e},
e6p:function e6p(d,e){this.a=d
this.b=e},
e6q:function e6q(d){this.a=d},
e6n:function e6n(d){this.a=d},
e6o:function e6o(d){this.a=d},
e6m:function e6m(d){this.a=d},
e6r:function e6r(d){this.a=d},
e6l:function e6l(d,e){this.a=d
this.b=e},
e6t:function e6t(d){this.a=d},
e6k:function e6k(d,e){this.a=d
this.b=e},
e6u:function e6u(d){this.a=d},
e6j:function e6j(d,e){this.a=d
this.b=e},
e6v:function e6v(d){this.a=d},
e6i:function e6i(d){this.a=d},
e6w:function e6w(d){this.a=d},
e6h:function e6h(d){this.a=d},
e6x:function e6x(d){this.a=d},
e6g:function e6g(d){this.a=d},
e6y:function e6y(d){this.a=d},
e6z:function e6z(d){this.a=d},
e6A:function e6A(d){this.a=d},
e6f:function e6f(d){this.a=d},
e6s:function e6s(d){this.a=d},
bhG:function bhG(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
a9x:function a9x(d,e,f){this.a=d
this.b=e
this.c=f},
Un:function Un(d){this.a=d},
bh2:function bh2(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.kA$=j
_.fE$=k
_.fb$=l
_.bq$=m
_.a6$=n
_.c=_.a=null},
epV:function epV(d){this.a=d},
epW:function epW(d){this.a=d},
epU:function epU(d){this.a=d},
epK:function epK(d,e){this.a=d
this.b=e},
epL:function epL(d){this.a=d},
epI:function epI(d){this.a=d},
epJ:function epJ(d){this.a=d},
epH:function epH(d){this.a=d},
epA:function epA(d){this.a=d},
epB:function epB(d){this.a=d},
epz:function epz(d){this.a=d},
epM:function epM(d,e){this.a=d
this.b=e},
epG:function epG(d,e){this.a=d
this.b=e},
epN:function epN(d,e){this.a=d
this.b=e},
epF:function epF(d,e){this.a=d
this.b=e},
epO:function epO(d){this.a=d},
epE:function epE(d){this.a=d},
epP:function epP(d){this.a=d},
epD:function epD(d,e){this.a=d
this.b=e},
epQ:function epQ(d){this.a=d},
epC:function epC(d,e){this.a=d
this.b=e},
epR:function epR(d){this.a=d},
epy:function epy(d,e){this.a=d
this.b=e},
epS:function epS(d){this.a=d},
epx:function epx(d,e){this.a=d
this.b=e},
epT:function epT(d){this.a=d},
epw:function epw(d,e){this.a=d
this.b=e},
bp0:function bp0(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aa_:function aa_(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
Sx:function Sx(d){this.a=d},
azU:function azU(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.kA$=i
_.fE$=j
_.fb$=k
_.bq$=l
_.a6$=m
_.c=_.a=null},
dyX:function dyX(d){this.a=d},
dyW:function dyW(d,e){this.a=d
this.b=e},
dyY:function dyY(){},
dyZ:function dyZ(d){this.a=d},
dyN:function dyN(d,e){this.a=d
this.b=e},
dyQ:function dyQ(d){this.a=d},
dyP:function dyP(d,e){this.a=d
this.b=e},
dyO:function dyO(d,e){this.a=d
this.b=e},
dyU:function dyU(d,e,f){this.a=d
this.b=e
this.c=f},
dyT:function dyT(d){this.a=d},
dyR:function dyR(d){this.a=d},
dyS:function dyS(d){this.a=d},
dyV:function dyV(d){this.a=d},
b7i:function b7i(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cFB:function cFB(d){this.a=d},
aIi:function aIi(){},
bta:function bta(){},
aJ6:function aJ6(){},
btq:function btq(){},
aJm:function aJm(){},
bty:function bty(){},
Eu:function Eu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
aaO:function aaO(d,e,f){this.a=d
this.b=e
this.c=f},
TT:function TT(d){this.a=d},
bgB:function bgB(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.kA$=j
_.fE$=k
_.fb$=l
_.bq$=m
_.a6$=n
_.c=_.a=null},
e24:function e24(d,e){this.a=d
this.b=e},
e2t:function e2t(d){this.a=d},
e2i:function e2i(d){this.a=d},
e29:function e29(d){this.a=d},
e2j:function e2j(d,e){this.a=d
this.b=e},
e2k:function e2k(d){this.a=d},
e28:function e28(d){this.a=d},
e2g:function e2g(d){this.a=d},
e2h:function e2h(d){this.a=d},
e2f:function e2f(d){this.a=d},
e2l:function e2l(d,e){this.a=d
this.b=e},
e2e:function e2e(d,e){this.a=d
this.b=e},
e2m:function e2m(d,e){this.a=d
this.b=e},
e2d:function e2d(d,e){this.a=d
this.b=e},
e2n:function e2n(d,e){this.a=d
this.b=e},
e2c:function e2c(d,e){this.a=d
this.b=e},
e2o:function e2o(d){this.a=d},
e2b:function e2b(d,e){this.a=d
this.b=e},
e2p:function e2p(d){this.a=d},
e2a:function e2a(d){this.a=d},
e2q:function e2q(d){this.a=d},
e27:function e27(d){this.a=d},
e2r:function e2r(d){this.a=d},
e26:function e26(d){this.a=d},
e2s:function e2s(d){this.a=d},
e25:function e25(d){this.a=d},
beh:function beh(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
abi:function abi(d,e){this.a=d
this.b=e
this.c=-1000},
TY:function TY(d){this.a=d},
aBh:function aBh(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.kA$=i
_.fE$=j
_.fb$=k
_.bq$=l
_.a6$=m
_.c=_.a=null},
e5Z:function e5Z(d,e){this.a=d
this.b=e},
e6_:function e6_(d,e,f){this.a=d
this.b=e
this.c=f},
e66:function e66(d){this.a=d},
e65:function e65(d){this.a=d},
e67:function e67(d,e){this.a=d
this.b=e},
e68:function e68(d){this.a=d},
e64:function e64(d){this.a=d},
e69:function e69(d){this.a=d},
e63:function e63(d,e){this.a=d
this.b=e},
e6a:function e6a(d,e){this.a=d
this.b=e},
e62:function e62(d,e){this.a=d
this.b=e},
e6b:function e6b(d,e){this.a=d
this.b=e},
e61:function e61(d,e){this.a=d
this.b=e},
e6c:function e6c(d){this.a=d},
e6d:function e6d(d){this.a=d},
e60:function e60(d){this.a=d},
e6e:function e6e(d){this.a=d},
bhH:function bhH(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aJ4:function aJ4(){},
bto:function bto(){},
aJ5:function aJ5(){},
btp:function btp(){},
eXU(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.H(e.j(0.4),A.r,1),s=x.p,r=C.a([C.D(C.d(d,w,w,w,w,w,w,D.a4N,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.aa,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.h,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.iK,w,w,1/0)},
hIf(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.T(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.K)(d),++u){t=d[u]
s=v.h(0,t)
v.m(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gJ(j))return!1
for(j=j.gdH(j),j=j.gah(j);j.C();){s=j.gT(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.bZ(d.length,0,!1,w)
q=d.length
p=J.e_(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bG(0,new B.feu(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.v_.h(0,d[n]).a)return!1
m=C.eN([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.K)(j),++u){k=j[u]
if(m.K(0,k))l.push(k)}return m.a===d.length},
fHy(d){var w="TCAG",v=C.aJ(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cP(w,v[0])*16+A.a.cP(w,v[1])*4+A.a.cP(w,v[2])]},
rC:function rC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b6b:function b6b(d,e){this.a=d
this.b=e},
feu:function feu(d,e){this.a=d
this.b=e},
TW:function TW(d){this.a=d},
aBf:function aBf(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
e5t:function e5t(d){this.a=d},
e5s:function e5s(d,e){this.a=d
this.b=e},
e5f:function e5f(d,e){this.a=d
this.b=e},
e59:function e59(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e5a:function e5a(d){this.a=d},
e5e:function e5e(d,e){this.a=d
this.b=e},
e5d:function e5d(d,e){this.a=d
this.b=e},
e5b:function e5b(d){this.a=d},
e5c:function e5c(d,e){this.a=d
this.b=e},
e5n:function e5n(){},
e5o:function e5o(d){this.a=d},
e5m:function e5m(d){this.a=d},
e5p:function e5p(d){this.a=d},
e5l:function e5l(d){this.a=d},
e5j:function e5j(d){this.a=d},
e5k:function e5k(d,e){this.a=d
this.b=e},
e5g:function e5g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5i:function e5i(d){this.a=d},
e5q:function e5q(d,e){this.a=d
this.b=e},
e5h:function e5h(d,e){this.a=d
this.b=e},
e5r:function e5r(d,e){this.a=d
this.b=e},
beY:function beY(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dhC:function dhC(d,e){this.a=d
this.b=e},
SU:function SU(d){this.a=d},
bfR:function bfR(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dGR:function dGR(d){this.a=d},
dGQ:function dGQ(d,e){this.a=d
this.b=e},
dGG:function dGG(d){this.a=d},
dGF:function dGF(){},
dGH:function dGH(d){this.a=d},
dGE:function dGE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dGP:function dGP(){},
dGK:function dGK(){},
dGL:function dGL(d,e){this.a=d
this.b=e},
dGJ:function dGJ(d,e){this.a=d
this.b=e},
dGM:function dGM(d){this.a=d},
dGI:function dGI(d){this.a=d},
dGN:function dGN(d,e){this.a=d
this.b=e},
dGO:function dGO(d,e){this.a=d
this.b=e},
T9:function T9(d){this.a=d},
aAn:function aAn(d,e,f,g,h){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=0
_.z=_.y=_.x=1
_.as=_.Q=0
_.at="Grass feeds rabbits, rabbits feed foxes. Keep all three alive!"
_.bq$=g
_.a6$=h
_.c=_.a=null},
dJG:function dJG(d){this.a=d},
dJF:function dJF(d,e){this.a=d
this.b=e},
dJt:function dJt(){},
dJs:function dJs(d,e){this.a=d
this.b=e},
dJu:function dJu(d){this.a=d},
dJy:function dJy(d){this.a=d},
dJx:function dJx(d,e){this.a=d
this.b=e},
dJz:function dJz(d){this.a=d},
dJw:function dJw(d,e){this.a=d
this.b=e},
dJA:function dJA(d){this.a=d},
dJv:function dJv(d,e){this.a=d
this.b=e},
dJB:function dJB(d){this.a=d},
dJC:function dJC(d){this.a=d},
dJD:function dJD(d){this.a=d},
dJE:function dJE(d){this.a=d},
bak:function bak(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
cZ5:function cZ5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cZ7:function cZ7(d,e,f){this.a=d
this.b=e
this.c=f},
cZ6:function cZ6(d,e){this.a=d
this.b=e},
aIv:function aIv(){},
bwj(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.H(e.j(0.4),A.r,1),s=x.p,r=C.a([C.D(C.d(d,w,w,w,w,w,w,D.a4N,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.aa,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.h,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.iK,w,w,1/0)},
f9p(d,e,f,g,h){var w,v,u=null,t=C.io(u,u,u,u,C.dl(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),e),A.a5,A.cm,u,A.en,A.cj)
t.fe()
w=t.b
v=w.c
w=w.a.c
w=f.aD(0,new C.u(v/2,w.gbh(w)/2))
t.a5(d,w)},
hFp(){var w,v,u,t,s,r,q,p,o=new C.eX()
o.dQ(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.ak(t,4)
r=C.aZ(v)
q=C.a([],u)
while(q.length<s){p=1+o.aB(5)
if(r.K(0,p))q.push(new C.A(p,1+o.aB(2+A.o.ak(t,3))))}A.d.aZ(q,new B.fal())
w.push(new B.aOP(q))}return w},
a_K(d,e){var w,v,u,t
for(w=new C.Vs(d),v="";w.C();){u=C.jw(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jw(65+A.o.G(A.o.G(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
hRO(d,e){var w,v,u,t,s,r,q,p=C.ae("[^A-Z]",!0,!1,!1,!1),o=C.aJ(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.Vs(d),v=0,u="";w.C();){t=C.jw(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.G(v,p)
u+=C.jw(65+A.o.G(A.o.G(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aOP:function aOP(d){this.a=d},
bCe:function bCe(){},
fal:function fal(){},
Sp:function Sp(d){this.a=d},
bfy:function bfy(d,e,f,g,h,i){var _=this
_.d=d
_.e=0
_.f=e
_.r=f
_.w=0
_.x=$
_.y=g
_.bq$=h
_.a6$=i
_.c=_.a=null},
dv7:function dv7(){},
dvk:function dvk(d){this.a=d},
dvj:function dvj(d,e,f){this.a=d
this.b=e
this.c=f},
dvl:function dvl(d){this.a=d},
dvi:function dvi(d,e){this.a=d
this.b=e},
dv8:function dv8(d,e){this.a=d
this.b=e},
dvd:function dvd(){},
dve:function dve(d){this.a=d},
dvc:function dvc(d){this.a=d},
dvf:function dvf(d,e){this.a=d
this.b=e},
dvb:function dvb(d,e){this.a=d
this.b=e},
dvg:function dvg(d,e){this.a=d
this.b=e},
dva:function dva(d,e){this.a=d
this.b=e},
dvh:function dvh(d){this.a=d},
dv9:function dv9(d){this.a=d},
b6n:function b6n(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cy8:function cy8(d,e){this.a=d
this.b=e},
Tn:function Tn(d){this.a=d},
bg2:function bg2(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bq$=g
_.a6$=h
_.c=_.a=null},
dNA:function dNA(d){this.a=d},
dNz:function dNz(d,e){this.a=d
this.b=e},
dNB:function dNB(d){this.a=d},
dNy:function dNy(d,e){this.a=d
this.b=e},
dNq:function dNq(d,e,f){this.a=d
this.b=e
this.c=f},
dNu:function dNu(d){this.a=d},
dNt:function dNt(d){this.a=d},
dNv:function dNv(d,e){this.a=d
this.b=e},
dNs:function dNs(d,e){this.a=d
this.b=e},
dNw:function dNw(d){this.a=d},
dNr:function dNr(d,e){this.a=d
this.b=e},
dNx:function dNx(d,e){this.a=d
this.b=e},
bbN:function bbN(d,e,f){this.b=d
this.c=e
this.a=f},
d53:function d53(d,e){this.a=d
this.b=e},
d54:function d54(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Sy:function Sy(d){this.a=d},
bfL:function bfL(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dzj:function dzj(d){this.a=d},
dzi:function dzi(d,e){this.a=d
this.b=e},
dz1:function dz1(){},
dza:function dza(d){this.a=d},
dz9:function dz9(){},
dzb:function dzb(d){this.a=d},
dz8:function dz8(){},
dzc:function dzc(d){this.a=d},
dz7:function dz7(d){this.a=d},
dzd:function dzd(d){this.a=d},
dz6:function dz6(d){this.a=d},
dze:function dze(d){this.a=d},
dz5:function dz5(d){this.a=d},
dzf:function dzf(d,e){this.a=d
this.b=e},
dz4:function dz4(d,e){this.a=d
this.b=e},
dzg:function dzg(d){this.a=d},
dz3:function dz3(d,e){this.a=d
this.b=e},
dzh:function dzh(d){this.a=d},
dz2:function dz2(d,e){this.a=d
this.b=e},
aIa:function aIa(){},
aID:function aID(){},
h61(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aD(0,e).gcj()*0.1
return new C.u((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
fNv(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new B.a2o(w,v,u,A.cB,C.T(x.N,x.y))},
hdw(d,e,f){var w=d.c,v=e===0?-42:42
return new C.u(w*f.a+v,d.d*f.b)},
fb:function fb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
vl:function vl(d,e,f,g){var _=this
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
_.dx=_.db=_.cy=_.cx=_.CW=_.ch=0},
a88:function a88(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
a9c:function a9c(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2o:function a2o(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.w=0
_.x=h},
bHO:function bHO(){},
bHZ:function bHZ(d){this.a=d},
bHU:function bHU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bI_:function bI_(d){this.a=d},
bI0:function bI0(d){this.a=d},
bI2:function bI2(d){this.a=d},
bI3:function bI3(d){this.a=d},
bI1:function bI1(d){this.a=d},
bI4:function bI4(d,e,f){this.a=d
this.b=e
this.c=f},
bI5:function bI5(d){this.a=d},
bHQ:function bHQ(d){this.a=d},
bHR:function bHR(d){this.a=d},
bHP:function bHP(d){this.a=d},
bHS:function bHS(d,e,f){this.a=d
this.b=e
this.c=f},
bHT:function bHT(d){this.a=d},
bHN:function bHN(d){this.a=d},
bI6:function bI6(d,e){this.a=d
this.b=e},
bHV:function bHV(d,e){this.a=d
this.b=e},
bHY:function bHY(d){this.a=d},
bHX:function bHX(d){this.a=d},
bHW:function bHW(d){this.a=d},
agg:function agg(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bDf:function bDf(){},
bDg:function bDg(){},
ma:function ma(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cfG:function cfG(d){this.a=d},
hPz(b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=null,b1=b7.dx>0&&!b7.x,b2=new B.fpU(),b3=new B.fpW(),b4=new B.fpX(),b5=new B.fpV()
switch(b7.b){case"fridge":w=b4.$4(-16,-28,32,54)
b6.aK(w,b5.$3(new C.a9(w.a,w.b,w.c,w.d),A.bM,A.bI))
b6.bE(D.dOd,D.dM6,b3.$2(A.dx,1.4))
b6.bE(D.dLX,D.dLW,b3.$2(A.bt,2.4))
b6.bE(D.dLY,U.aBg,b3.$2(A.bt,2.4))
if(b1){v=b2.$1(A.fe.j(0.5))
v.z=A.OL
b6.af(D.dLH,14,v)
for(v=b8*0.6,u=0;u<3;++u){t=A.k.G(v+u/3,1)
b9.$5(b6,"\u2744",new C.u(-12+u*9,4+t*16),A.c.j(1-t),9)}}return!0
case"washer":b6.aK(b4.$4(-22,-26,44,50),b5.$3(D.aGT,A.aN,A.cp))
b6.af(A.cA,16,b2.$1(A.bt))
b6.af(A.cA,13,b2.$1(b1?A.aX.j(0.85):A.M))
if(b1){v=b6.a
J.bB(v.save())
v.translate(0,4)
b6.iT(0,b7.y*0.6)
for(u=0;u<3;++u){s=u*2.09
r=Math.cos(s)
s=Math.sin(s)
q=b3.$2(A.af,3).I()
v.drawLine.apply(v,[0,0,r*11,s*11,q])
q.delete()}v.restore()
for(s=b8*0.8,u=0;u<4;++u){t=A.k.G(s+u*0.25,1)
r=Math.sin(u*2+b8)
q=b2.$1(A.c.j(0.8*(1-t))).I()
v.drawCircle(r*9,4-t*12,1.6+t*2,q)
q.delete()}}b6.af(D.dO9,2.4,b2.$1(b1?A.bm:A.ai))
b6.af(D.dOP,2.4,b2.$1(A.ai))
return!0
case"blender":b6.aK(b4.$5(-14,14,28,12,4),b2.$1(A.eC))
v=$.Y().r
s=x.v
p=new C.aQ(v,A.aq,b0,b0,C.a([],s))
p.E(new C.b5(-16,-26))
p.E(new C.ao(16,-26))
p.E(new C.ao(12,14))
p.E(new C.ao(-12,14))
p.E(new C.bE())
b6.aO(p,b2.$1(A.fe.j(0.35)))
if(b1){v=new C.aQ(v,A.aq,b0,b0,C.a([],s))
v.E(new C.b5(-14,-10))
v.E(new C.ao(14,-10))
v.E(new C.ao(12,14))
v.E(new C.ao(-12,14))
v.E(new C.bE())
b6.aO(v,b2.$1(A.aE.j(0.7)))}b6.aO(p,b3.$2(A.af,1.6))
v=b6.a
J.bB(v.save())
v.translate(0,10)
b6.iT(0,b7.y)
b6.bE(D.a1U,D.aBu,b3.$2(A.c4,3))
v.restore()
if(b1)for(s=b8*9,r=b8*1.6,u=0;u<3;++u){o=Math.sin(s+u*2)
n=A.k.G(r+u*0.33,1)
q=b2.$1(A.fj).I()
v.drawCircle(o*9,-10-n*12,2.4,q)
q.delete()}return!0
case"drone":b6.aK(b4.$5(-10,-4,20,10,4),b2.$1(A.aI))
b6.af(A.i6,3,b2.$1(b1?A.bm:A.ai))
m=b1?-3+Math.sin(b8*4)*2:4
for(v=b6.a,s=-4+m,r=-6+m,l=0;l<2;++l){k=D.asu[l]
q=b3.$2(A.bt,3).I()
v.drawLine.apply(v,[k*0.4,1,k,s,q])
q.delete()
J.bB(v.save())
v.translate(k,r)
q=b3.$2(A.c.j(b1?0.35:0.9),3).I()
v.drawLine.apply(v,[-11,0,11,0,q])
q.delete()
if(b1){o=C.cN(A.J,6,24+Math.sin(b7.y*3)*4)
q=b2.$1(A.c.j(0.25)).I()
v.drawOval(C.c9(o),q)
q.delete()}v.restore()}return!0
case"drill":w=new C.aQ($.Y().r,A.aq,b0,b0,C.a([],x.v))
w.E(new C.b5(-24,-12))
w.E(new C.ao(10,-12))
w.E(new C.ao(10,2))
w.E(new C.ao(-2,2))
w.E(new C.ao(-6,22))
w.E(new C.ao(-16,22))
w.E(new C.ao(-14,2))
w.E(new C.ao(-24,2))
w.E(new C.bE())
b6.aO(w,b5.$3(D.enF,A.aL,A.dl))
b6.b2(D.en4,b2.$1(A.eB))
v=b6.a
J.bB(v.save())
v.translate(18,-5)
b6.iT(0,b7.y*2)
b6.bE(A.J,D.dM0,b3.$2(A.c4,2.4))
b6.bE(A.a1S,D.dM_,b3.$2(A.hQ,1))
v.restore()
if(b1)for(s=b8*3,r=b8*20,u=0;u<4;++u){t=A.k.G(s+u*0.25,1)
o=Math.sin(u*3+r)
q=b2.$1(A.dZ.j(1-t)).I()
v.drawCircle(34+t*6,-5+o*6*t,1.4,q)
q.delete()}return!0
case"torch":if(b1){u=A.k.D(0.5+0.12*(Math.abs(b7.cy)-2),0.5,1)
v=new C.aQ($.Y().r,A.aq,b0,b0,C.a([],x.v))
v.E(new C.b5(16,-6))
v.E(new C.ao(52,-26))
v.E(new C.ao(52,18))
v.E(new C.ao(16,4))
v.E(new C.bE())
b6.aO(v,b2.$1(A.bH.j(0.35*u)))}b6.aK(b4.$5(-26,-6,30,12,3),b5.$3(D.enK,A.bv,A.cK))
j=new C.aQ($.Y().r,A.aq,b0,b0,C.a([],x.v))
j.E(new C.b5(4,-6))
j.E(new C.ao(18,-12))
j.E(new C.ao(18,12))
j.E(new C.ao(4,6))
j.E(new C.bE())
b6.aO(j,b2.$1(A.eC))
b6.af(D.dM4,7,b2.$1(b1?A.c:A.eB))
return!0
case"neon":b6.aK(b4.$5(-30,-14,60,28,6),b2.$1(K.q8))
if(b1)i=b7.ax>0.5||A.o.G(A.k.bw(b8*17),3)!==0
else i=!1
h=i?A.bU:D.b7C
if(i){v=b4.$5(-28,-12,56,24,6)
s=b2.$1(A.bU.j(0.35))
s.z=A.lA
b6.aK(v,s)}b6.aK(b4.$5(-27,-11,54,22,5),b3.$2(h,2.2))
b9.$5(b6,"OPEN",D.dOj,h,17)
return!0
case"microwave":b6.aK(b4.$4(-30,-18,60,38),b5.$3(D.enQ,A.c4,A.bv))
v=b4.$5(-26,-14,38,30,3)
b6.aK(v,b2.$1(b1?A.bH.j(0.75):A.aF))
if(b1){v=b6.a
J.bB(v.save())
v.translate(-7,8)
b6.iT(0,b7.y*0.5)
b6.j3(C.cN(A.J,7,22),b2.$1(A.dl))
v.restore()}b6.aK(b4.$5(15,-14,12,12,2),b2.$1(K.q8))
if(b1)b9.$5(b6,"0:"+A.a.aT(A.o.u(59-A.o.G(A.k.bw(b8),60)),2,"0"),D.dM5,A.bh,6.5)
b6.af(D.dMh,4,b2.$1(A.eB))
return!0
case"doorbell":b6.aK(b4.$5(-16,-26,32,52,8),b2.$1(A.aJ))
b6.af(A.Pz,10,b2.$1(b1?A.cE:A.bt))
v=b6.a
J.bB(v.save())
v.translate(0,-8)
b6.iT(0,b1?Math.sin(b8*16)*0.45:0)
b9.$5(b6,"\ud83d\udd14",D.dOR,A.c,16)
v.restore()
b6.af(A.jQ,6,b2.$1(A.da))
b6.af(A.jQ,6,b3.$2(A.c,1.6))
if(b1)for(s=b8*14,u=1;u<=2;++u){r=C.bV(A.Pz,14+u*6+A.k.G(s,6))
q=b3.$2(A.cE.j(0.9-u*0.3),1.8).I()
v.drawArc.apply(v,[C.c9(r),-51.56620156177409,103.13240312354819,!1,q])
q.delete()}return!0
case"camera":b6.bE(D.dOi,D.dON,b3.$2(A.bt,4))
v=b6.a
J.bB(v.save())
b6.iT(0,b1?Math.sin(b8*0.9)*0.18:0)
b6.aK(b4.$5(-24,-14,46,22,5),b5.$3(D.enG,A.c4,A.ai))
b6.af(D.aBh,8,b2.$1(A.aF))
b6.af(D.aBh,4.5,b2.$1(b1?A.aX:A.cK))
b6.af(D.dOg,2.2,b2.$1(b1&&A.o.G(A.k.bw(b8*1.6),2)===0?A.aE:A.k1))
v.restore()
if(b1)b9.$5(b6,"REC",D.dOr,A.aE,9)
return!0
case"console":b6.aK(b4.$5(-28,-22,56,44,8),b5.$3(D.enN,A.jh,A.f0))
b6.aK(b4.$5(-20,-17,40,22,3),b2.$1(A.dA))
if(b1){v=b8*2.3
b6.af(new C.u(Math.sin(v)*14,-6+Math.cos(b8*3.1)*6),2.6,b2.$1(A.c))
s=-9+Math.sin(v+0.4)*6
b6.b2(new C.a9(-18,s,-15.6,s+8),b2.$1(A.bh))
v=-9+Math.sin(v-0.4)*6
b6.b2(new C.a9(15.6,v,18,v+8),b2.$1(A.bU))}b6.af(D.dOc,4,b2.$1(A.aT))
b6.af(D.dM1,2.4,b2.$1(A.aE))
b6.af(D.dMe,2.4,b2.$1(A.bm))
return!0
case"heartmon":b6.aK(b4.$5(-30,-22,60,44,6),b2.$1(A.aF))
b6.aK(b4.$5(-26,-18,52,28,3),b2.$1(A.dA))
if(b1){v=$.Y()
s=C.a([],x.v)
g=new C.aQ(v.r,A.aq,b0,b0,s)
for(v=b8*0.5,k=-25;k<=25;++k){t=A.k.G((k+25)/50-v,1)
if(t<0.1)f=Math.sin(t/0.1*3.141592653589793)*-1
else if(t<0.14)f=0.6
else{r=t<0.2?-0.4:0
f=r}e=-4+f*11
if(k===-25){r=new C.b5(k,e)
s.push(r)
o=g.f
if(o!=null)r.by(o)
r=g.e
if(r!=null)r.a.delete()
g.e=null}else{r=new C.ao(k,e)
s.push(r)
o=g.f
if(o!=null)r.by(o)
r=g.e
if(r!=null)r.a.delete()
g.e=null}}b6.aO(g,b3.$2(A.bh,1.8))
b9.$5(b6,"72",D.dM2,A.hk,11)
v=b8*9
b9.$5(b6,"\u2665",D.dOv,A.hk.j((Math.sin(v)+1.4)/2.4),9+Math.sin(v)*1.2)}b6.af(D.dOl,3,b2.$1(b1?A.bm:A.bt))
return!0
case"aquarium":v=b4.$5(-26,-20,52,40,4)
b6.aK(v,b2.$1(A.cD.j(b1?0.5:0.3)))
b6.aK(b4.$5(-26,-20,52,40,4),b3.$2(A.af,1.6))
b6.b2(D.enI,b2.$1(D.b2D))
if(b1){v=b8*1.1
s=Math.sin(v)
r=b6.a
J.bB(r.save())
r.translate(s*14,-2+Math.sin(b8*2)*3)
if(Math.cos(v)<0)b6.wa(0,-1,1)
b6.j3(C.cN(A.J,8,14),b2.$1(A.cQ))
v=new C.aQ($.Y().r,A.aq,b0,b0,C.a([],x.v))
v.E(new C.b5(-6,0))
v.E(new C.ao(-12,-4))
v.E(new C.ao(-12,4))
v.E(new C.bE())
b6.aO(v,b2.$1(A.ck))
b6.af(D.dMH,1.2,b2.$1(A.x))
r.restore()
for(v=b8*0.7,u=0;u<5;++u){t=A.k.G(v+u*0.2,1)
s=Math.sin(t*8+u)
o=A.o.G(u,2)
q=b3.$2(A.af,1).I()
r.drawCircle(-18+s*2,13-t*30,1.4+o,q)
q.delete()}}return!0
case"lighthouse":v=$.Y().r
s=x.v
d=new C.aQ(v,A.aq,b0,b0,C.a([],s))
d.E(new C.b5(-9,22))
d.E(new C.ao(-5,-16))
d.E(new C.ao(5,-16))
d.E(new C.ao(9,22))
d.E(new C.bE())
b6.aO(d,b5.$3(D.eo7,A.c,A.bQ))
b6.b2(D.eo6,b2.$1(b1?A.dZ:A.bt))
r=new C.aQ(v,A.aq,b0,b0,C.a([],s))
r.E(new C.b5(-7,-22))
r.E(new C.ao(0,-29))
r.E(new C.ao(7,-22))
r.E(new C.bE())
b6.aO(r,b2.$1(A.f1))
if(b1){a0=Math.sin(b7.y*0.3)
v=new C.aQ(v,A.aq,b0,b0,C.a([],s))
v.E(new C.b5(0,-19))
s=a0*34
v.E(new C.ao(s,-26))
v.E(new C.ao(s,-12))
v.E(new C.bE())
b6.aO(v,b2.$1(A.dZ.j(0.45)))
v=b2.$1(A.dZ.j(0.35))
v.z=A.OL
b6.af(D.dLI,14,v)}return!0
case"discoball":b6.bE(D.dLN,E.aBe,b3.$2(A.eB,1.4))
b6.af(A.J,16,b5.$3(D.ent,A.aN,A.ai))
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
a1=22+A.o.G(u,3)*6
o=Math.cos(a0)
n=Math.sin(a0)
q=b2.$1(D.cQr[A.o.G(u,4)].j(0.5+0.5*Math.sin(r+u))).I()
v.drawCircle(o*a1,n*a1*0.8,1.8,q)
q.delete()}return!0
case"robot":b6.aK(b4.$5(-14,-4,28,24,5),b5.$3(D.enr,A.cp,A.ai))
b6.aK(b4.$5(-12,-26,24,20,5),b5.$3(D.enk,A.aJ,A.bI))
b6.bE(D.dLM,D.dLO,b3.$2(A.bt,1.6))
b6.af(D.dLP,2.2,b2.$1(b1?A.aE:A.bt))
a2=b1&&A.k.G(b8*0.8,1)>0.08
for(v=b6.a,l=0;l<2;++l){k=D.cVx[l]
if(b1)s=a2?A.b7:A.il
else s=A.cK
q=b2.$1(s).I()
v.drawCircle(k,-17,3.2,q)
q.delete()}J.bB(v.save())
v.translate(14,0)
b6.iT(0,b1?-0.6+Math.sin(b8*5)*0.6:0.3)
b6.bE(A.J,D.a1P,b3.$2(A.bI,4))
v.restore()
b6.bE(D.dO5,D.dOp,b3.$2(A.bI,4))
b6.b2(D.eo5,b2.$1(b1?A.b7.j(0.7):A.aI))
return!0
case"toaster":a3=b1?Math.min(1,b7.ax/3):0
for(v=-4-a3*14,s=b6.a,l=0;l<2;++l){r=b4.$5(D.ass[l]+1,v,10,14,2)
o=C.aq(A.bH,A.dl,a3)
o.toString
q=b2.$1(o).I()
s.drawRRect(C.f7(r),q)
q.delete()}b6.aK(b4.$5(-24,-6,48,26,8),b5.$3(D.enH,A.c4,A.bv))
for(l=0;l<2;++l){k=D.ass[l]
v=b4.$5(k,-5,12,5,2)
q=b2.$1(b1?A.fT:A.aF).I()
s.drawRRect(C.f7(v),q)
q.delete()
if(b1){v=b4.$5(k,-5,12,5,2)
r=b2.$1(A.cQ.j(0.5))
r.z=H.mQ
q=r.I()
s.drawRRect(C.f7(v),q)
q.delete()}}b6.bE(D.dMl,D.dMC,b3.$2(A.aF,3))
return!0
case"ledstrip":b6.aK(b4.$5(-34,-4,68,10,4),b2.$1(A.cK))
for(v=b6.a,s=b8*90,u=0;u<9;++u){a4=A.k.G(s+u*40,360)
h=b1?new G.ms(1,a4,0.8,1).it():A.eC
if(b1){r=b2.$1(h.j(0.45))
r.z=H.mQ
q=r.I()
v.drawCircle(-30+u*7.5,1,7,q)
q.delete()}q=b2.$1(h).I()
v.drawCircle(-30+u*7.5,1,2.6,q)
q.delete()}b6.aK(b4.$5(-40,-2,6,6,1),b2.$1(A.eB))
return!0
case"pump":b6.aK(b4.$5(-16,-2,32,22,6),b5.$3(D.enw,A.cD,A.J1))
b6.af(D.dOw,8,b2.$1(A.q5))
v=b6.a
J.bB(v.save())
v.translate(-2,9)
b6.iT(0,b7.y)
for(u=0;u<3;++u){s=u*2.09
r=Math.cos(s)
s=Math.sin(s)
q=b3.$2(A.fe,2.4).I()
v.drawLine.apply(v,[0,0,r*7,s*7,q])
q.delete()}v.restore()
s=new C.aQ($.Y().r,A.aq,b0,b0,C.a([],x.v))
s.E(new C.b5(16,6))
s.E(new C.ao(26,6))
s.E(new C.ao(26,-20))
s.E(new C.ao(10,-20))
b6.aO(s,b3.$2(A.bI,4))
if(b1){for(s=b8*0.9,u=0;u<5;++u){t=A.k.G(s+u*0.2,1)
q=b2.$1(A.h6).I()
v.drawCircle(26,6-t*26,2.2,q)
q.delete()}b6.af(D.dN5,3.2,b2.$1(A.h6.j(0.7)))}return!0
case"hairdryer":v=b6.a
J.bB(v.save())
b6.iT(0,-0.15)
b6.aK(b4.$5(-26,-14,40,22,10),b5.$3(D.enJ,A.jz,A.rm))
b6.aK(b4.$5(14,-10,12,14,3),b2.$1(A.cK))
b6.aK(b4.$5(-10,6,12,22,4),b2.$1(A.eC))
v.restore()
if(b1){for(s=b8*3,u=0;u<4;++u){t=A.k.G(s+u*0.25,1)
r=t*18
o=-10+u*5
q=b3.$2(A.c.j(1-t),1.8).I()
v.drawLine.apply(v,[24+r,o,32+r,o,q])
q.delete()}v=b2.$1(A.cQ.j(0.4))
v.z=H.mQ
b6.af(D.dMg,8,v)}return!0
case"headphones":b6.fJ(C.cN(A.dE,44,44),3.141592653589793,3.141592653589793,!1,b3.$2(A.bt,4))
for(v=b6.a,s=b8*12,l=0;l<2;++l){k=D.ast[l]
r=k-7
o=b4.$5(r,0,14,20,6)
q=b5.$3(new C.a9(r,0,r+14,20),A.bC,A.oQ).I()
v.drawRRect(C.f7(o),q)
q.delete()
if(b1)for(r=k<0,u=1;u<=2;++u){o=C.bV(new C.u(k,10),10+u*5+A.k.G(s,5))
n=r?2.2:-0.9
q=b3.$2(A.ew.j(0.9-u*0.3),1.6).I()
v.drawArc.apply(v,[C.c9(o),n*57.29577951308232,91.67324722093173,!1,q])
q.delete()}}if(b1)b9.$5(b6,"\u266a",new C.u(-4,-8-A.k.G(b8*14,8)),A.kq,12)
return!0
case"smartwatch":b6.aK(b4.$5(-8,-30,16,14,3),b2.$1(A.cK))
b6.aK(b4.$5(-8,14,16,14,3),b2.$1(A.cK))
b6.aK(b4.$5(-14,-17,28,32,8),b5.$3(D.enp,A.eB,A.eC))
b6.aK(b4.$5(-11,-14,22,26,6),b2.$1(A.dA))
if(b1){a5=new C.Q(Date.now(),0,!1)
b9.$5(b6,A.a.aT(A.o.u(C.dd(a5)),2,"0")+":"+A.a.aT(A.o.u(C.fM(a5)),2,"0"),D.dLT,A.bh,9.5)
f=(Math.sin(b8*9)+1)/2
v=C.aq(A.CQ,A.hk,f)
v.toString
b9.$5(b6,"\u2665",new C.u(-8,1),v,8+f*2)
b9.$5(b6,""+(70+A.o.G(A.k.bw(b8*2),6)),A.dE,A.c,7)}return!0
case"tablet":b6.aK(b4.$5(-30,-22,60,44,6),b2.$1(K.q8))
b6.aK(b4.$5(-30,-22,60,44,6),b3.$2(A.bI,1.6))
a6=b4.$5(-27,-19,54,38,3)
if(b1){v=b6.a
J.bB(v.save())
v.clipRRect(C.f7(a6),$.xN(),!0)
v.translate(-27,-19)
B.fJO(b6,D.esS,b8)
v.restore()}else b6.aK(a6,b2.$1(D.Uc))
return!0
case"buck":a7=b4.$5(-26,-22,52,42,5)
b6.aK(a7,b5.$3(new C.a9(a7.a,a7.b,a7.c,a7.d),A.e4,A.dv))
b6.aK(a7,b3.$2(A.ba,1.2))
b6.af(D.aBB,9,b2.$1(A.aF))
b6.af(D.aBB,6,b3.$2(A.dl,2))
b6.aK(b4.$5(4,-2,14,10,2),b2.$1(A.aF))
b6.aK(b4.$5(-22,-19,44,12,2),b2.$1(A.dA))
v=A.k.aa(b7.CW,1)
s=A.k.aa(b1?b7.cx:b7.e,1)
r=b1?A.bh:A.ai
b9.$5(b6,v+"\u2192"+s+"V",D.dN8,r,8.2)
b6.af(D.dM7,2.4,b2.$1(b1?A.bm:A.aI))
b9.$5(b6,"IN",D.dOq,A.af,6)
b9.$5(b6,"OUT",D.dN_,A.af,6)
return!0
case"regulator":a8=b1?A.k.D(b7.ch*Math.abs(b7.db)/2.5,0,1):0
v=b4.$5(-14,-26,28,22,3)
s=C.aq(A.bI,A.aE,a8)
s.toString
b6.aK(v,b2.$1(s))
b6.af(D.dLJ,3,b2.$1(A.aI))
b6.aK(b4.$5(-12,-4,24,18,3),b5.$3(D.enl,A.eC,A.hv))
b9.$5(b6,"7805",D.a1U,A.af,8)
for(v=b6.a,l=0;l<3;++l){s=D.cVy[l]-1
q=b2.$1(A.e8).I()
v.drawRect(C.c9(new C.a9(s,14,s+2,22)),q)
q.delete()}if(a8>0.2)for(s=b8*0.9,u=0;u<3;++u){t=A.k.G(s+u*0.33,1)
q=b2.$1(A.c.j(0.5*(1-t))).I()
v.drawCircle(-6+u*6,-28-t*12,2+t*2,q)
q.delete()}b9.$5(b6,"5V",D.dOQ,A.bg,9)
return!0
case"diode":b6.bE(D.aBF,D.aBq,b3.$2(A.e8,2.4))
b6.aK(b4.$5(-14,-7,28,14,6),b2.$1(A.aZ.j(0.85)))
b6.b2(D.ena,b2.$1(A.bg))
if(b1){v=b4.$5(-14,-7,28,14,6)
s=b2.$1(A.dZ.j(0.4))
s.z=A.j7
b6.aK(v,s)}v=new C.aQ($.Y().r,A.aq,b0,b0,C.a([],x.v))
v.E(new C.b5(-8,-4))
v.E(new C.ao(-8,4))
v.E(new C.ao(-1,0))
v.E(new C.bE())
b6.aO(v,b2.$1(A.aT))
b9.$5(b6,"one way",D.dOe,A.aA,8)
return!0
case"ldr":b6.bE(D.aBF,D.a1U,b3.$2(A.e8,2.4))
b6.bE(D.aBu,D.aBq,b3.$2(A.e8,2.4))
b6.af(A.J,12,b2.$1(A.dl))
b6.af(A.J,12,b3.$2(A.ru,1.6))
v=$.Y()
s=C.a([],x.v)
a9=new C.aQ(v.r,A.aq,b0,b0,s)
a9.E(new C.b5(-8,-6))
for(u=0;u<5;++u){v=(u&1)===0?8:-8
v=new C.ao(v,-6+u*3)
s.push(v)
r=a9.f
if(r!=null)v.by(r)
v=a9.e
if(v!=null)v.a.delete()
a9.e=null}b6.aO(a9,b3.$2(A.bH,1.4))
v=C.aq(A.bt,A.dZ,b7.f)
v.toString
b9.$5(b6,"\u2600",new C.u(-6,-26),v,14)
b9.$5(b6,""+A.k.U(20+980*(1-b7.f))+"\u03a9",D.dO6,A.af,8.5)
return!0}return!1},
fpU:function fpU(){},
fpW:function fpW(){},
fpX:function fpX(){},
fpV:function fpV(){},
fMq(d,e,f,g){return new B.age(d,g,f,e)},
Ej(d,e,f){return new B.b7k(d,e,f)},
age:function age(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
agf:function agf(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.fa$=h
_.kA$=i
_.fE$=j
_.fb$=k
_.bq$=l
_.a6$=m
_.c=_.a=null},
bCV:function bCV(d,e){this.a=d
this.b=e},
bCW:function bCW(d){this.a=d},
bCU:function bCU(d){this.a=d},
bCX:function bCX(){},
bCY:function bCY(d){this.a=d},
bDc:function bDc(d){this.a=d},
bDd:function bDd(){},
bCy:function bCy(){},
bDe:function bDe(d,e){this.a=d
this.b=e},
bDb:function bDb(d,e,f){this.a=d
this.b=e
this.c=f},
bD6:function bD6(d){this.a=d},
bD3:function bD3(d,e,f){this.a=d
this.b=e
this.c=f},
bD4:function bD4(d,e){this.a=d
this.b=e},
bD7:function bD7(d){this.a=d},
bD1:function bD1(d,e){this.a=d
this.b=e},
bD2:function bD2(d,e){this.a=d
this.b=e},
bD5:function bD5(d){this.a=d},
bD8:function bD8(d){this.a=d},
bD_:function bD_(d,e){this.a=d
this.b=e},
bD0:function bD0(d,e){this.a=d
this.b=e},
bD9:function bD9(d){this.a=d},
bCZ:function bCZ(d){this.a=d},
bDa:function bDa(d){this.a=d},
bCz:function bCz(d,e){this.a=d
this.b=e},
bCR:function bCR(d,e){this.a=d
this.b=e},
bCT:function bCT(d,e){this.a=d
this.b=e},
bCS:function bCS(d,e){this.a=d
this.b=e},
bCF:function bCF(d,e){this.a=d
this.b=e},
bCG:function bCG(d){this.a=d},
bCE:function bCE(d){this.a=d},
bCH:function bCH(d,e,f){this.a=d
this.b=e
this.c=f},
bCD:function bCD(d,e){this.a=d
this.b=e},
bCJ:function bCJ(d,e){this.a=d
this.b=e},
bCK:function bCK(d,e){this.a=d
this.b=e},
bCL:function bCL(d,e,f){this.a=d
this.b=e
this.c=f},
bCC:function bCC(d,e){this.a=d
this.b=e},
bCM:function bCM(d,e,f){this.a=d
this.b=e
this.c=f},
bCB:function bCB(d,e){this.a=d
this.b=e},
bCN:function bCN(d,e,f){this.a=d
this.b=e
this.c=f},
bCA:function bCA(d,e){this.a=d
this.b=e},
bCO:function bCO(d){this.a=d},
bCP:function bCP(d){this.a=d},
bCQ:function bCQ(d){this.a=d},
bCI:function bCI(d){this.a=d},
b7k:function b7k(d,e,f){this.a=d
this.b=e
this.c=f},
f0L:function f0L(){},
f0M:function f0M(){},
f0N:function f0N(){},
f0y:function f0y(){},
f0O:function f0O(){},
f0x:function f0x(){},
f0P:function f0P(){},
f0C:function f0C(){},
f0w:function f0w(){},
f0D:function f0D(){},
f0v:function f0v(){},
f0E:function f0E(){},
f0u:function f0u(){},
f0F:function f0F(){},
f0s:function f0s(){},
f0t:function f0t(){},
f0G:function f0G(){},
f0q:function f0q(){},
f0r:function f0r(){},
f0H:function f0H(){},
f0p:function f0p(){},
Ta:function Ta(d){this.a=d},
aAo:function aAo(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.y=_.x=_.w=0
_.c=_.a=null},
dJO:function dJO(d){this.a=d},
dJP:function dJP(){},
dJQ:function dJQ(d,e,f){this.a=d
this.b=e
this.c=f},
dJR:function dJR(){},
dJN:function dJN(d){this.a=d},
dJM:function dJM(d,e,f){this.a=d
this.b=e
this.c=f},
dJL:function dJL(d,e){this.a=d
this.b=e},
dJJ:function dJJ(d){this.a=d},
dJK:function dJK(){},
dJT:function dJT(d){this.a=d},
dJU:function dJU(d,e){this.a=d
this.b=e},
dJV:function dJV(d){this.a=d},
dJW:function dJW(d){this.a=d},
dJX:function dJX(d){this.a=d},
dJS:function dJS(d){this.a=d},
auT:function auT(){},
auU:function auU(){},
hPA(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.dx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bV(A.v6,23)
$.Y()
b8=C.L()
b8.r=A.aF.gq(0)
b9.af(A.v6,25,b8)
b8=C.L()
b8.sap(D.dW0.au(0,v))
b9.af(A.v6,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
o.r=A.bg.gq(0)
o.c=A.o.G(u,5)===0?1.8:1
n=o.I()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.cy):Math.abs(c0.db)
t=2.5132741228718345+A.k.D(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=C.L()
r.r=A.bQ.gq(0)
r.c=2
r.d=A.bN
b9.bE(A.v6,new C.u(b8*18,s*18-2),r)
r=C.L()
r.r=A.bg.gq(0)
b9.af(A.v6,3,r)
c2.$5(b9,w?"V":"A",D.dOH,A.bg,12)
c2.$5(b9,w?A.k.aa(m,1)+" V":""+A.k.U(m*1000)+" mA",D.dOb,A.aF,9.5)
return!0
case"fan":b8=C.bF(D.enh,A.hr)
$.Y()
s=C.L()
s.r=A.bt.gq(0)
b9.aK(b8,s)
s=C.L()
s.r=A.ai.gq(0)
b9.b2(D.enZ,s)
s=C.L()
s.r=A.M.j(0.6).gq(0)
b9.af(D.v7,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bB(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.cN(A.aBc,18,10)
r=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.h6.j(b7&&c0.dx>0.5?0.55:0.95).gq(0)
n=r.I()
b8.drawOval(C.c9(s),n)
n.delete()
b8.restore()}b8=C.L()
b8.r=A.bj.gq(0)
b9.af(D.v7,4,b8)
b8=C.L()
b8.b=A.ae
b8.c=2
b8.r=A.cp.gq(0)
b9.af(D.v7,22,b8)
b8=C.L()
b8.b=A.ae
b8.c=0.8
b8.r=A.j1.gq(0)
b9.af(D.v7,14,b8)
return!0
case"speaker":l=C.bF(D.aGT,A.tD)
$.Y()
b8=C.L()
b8.sap(D.ajB.au(0,new C.a9(l.a,l.b,l.c,l.d)))
b9.aK(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.L()
b8.sap(D.dWl.au(0,C.bV(A.cs,15)))
b9.af(A.cs,14+k,b8)
b8=C.L()
b8.r=A.eB.gq(0)
b9.af(A.cs,5,b8)
b8=C.L()
b8.r=A.bv.gq(0)
b9.af(D.aBd,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bV(D.dMk,6+u*6+A.k.G(b8,6))
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.bU.j(0.9-u*0.2).gq(0)
n=q.I()
s.drawArc.apply(s,[C.c9(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.bF(D.enT,A.tD)
$.Y()
b8=C.L()
b8.sap(D.bHX.au(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aK(j,b8)
b8=C.bF(D.aGV,A.j9)
s=C.L()
s.r=A.hv.gq(0)
b9.aK(b8,s)
if(b7){i=new C.Q(Date.now(),0,!1)
h=C.yN(i)<500?":":" "
g=A.a.aT(A.o.u(C.dd(i)),2,"0")
f=A.a.aT(A.o.u(C.fM(i)),2,"0")
b8=C.L()
b8.r=A.bh.j(0.12).gq(0)
b9.b2(D.aGV,b8)
c2.$5(b9,g+h+f,D.dOt,A.bh,21)}b8=C.L()
b8.r=A.cp.gq(0)
b9.af(D.dOs,2.4,b8)
b8=C.L()
b8.r=A.cp.gq(0)
b9.af(D.dMo,2.4,b8)
return!0
case"calculator":j=C.bF(D.enB,A.hJ)
$.Y()
b8=C.L()
b8.sap(D.bHG.au(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aK(j,b8)
b8=C.bF(D.env,A.h_)
s=C.L()
s.r=(b7?A.U6:D.b85).gq(0)
b9.aK(b8,s)
if(b7)c2.$5(b9,"3.14159",D.dOa,A.Tg,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.bF(new C.a9(q,s,q+6,r),A.Q1)
$.Y()
p=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=(d===3?A.ck:A.c4).gq(0)
n=p.I()
b8.drawRRect(C.f7(q),n)
n.delete()}return!0
case"phone":j=C.bF(D.ens,A.hJ)
$.Y()
b8=C.L()
b8.r=K.q8.gq(0)
b9.aK(j,b8)
b8=C.L()
b8.b=A.ae
b8.c=1.6
b8.r=A.bI.gq(0)
b9.aK(j,b8)
a0=C.bF(D.enj,A.hr)
if(b7){b8=C.L()
b8.sap(D.bJi.au(0,new C.a9(a0.a,a0.b,a0.c,a0.d)))
b9.aK(a0,b8)
b8=b9.a
J.bB(b8.save())
b8.clipRRect(C.f7(a0),$.xN(),!0)
b8.translate(-12,-25)
B.fJO(b9,D.est,c1)
b8.restore()
a1=A.k.G(c1*0.12,1)
b8=C.bF(D.eng,A.h_)
s=C.L()
s.r=A.aT.gq(0)
b9.aK(b8,s)
s=C.L()
s.r=A.bh.gq(0)
b9.b2(new C.a9(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.U(a1*100)+"%",D.dNs,A.c,6)}else{b8=C.L()
b8.r=D.Uc.gq(0)
b9.aK(a0,b8)}return!0
case"router":j=C.bF(D.enS,A.tC)
$.Y()
b8=C.L()
b8.sap(D.bIe.au(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aK(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=D.ast[a2]
s=a3<0?-4:4
r=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.cK.gq(0)
r.c=4
r.d=A.bN
n=r.I()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.G(A.k.bw(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
s.r=(a4?A.bm:A.aI).gq(0)
n=s.I()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bV(D.v7,8+u*6+A.k.G(s,6))
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.hl.j(0.9-u*0.2).gq(0)
n=q.I()
b8.drawArc.apply(b8,[C.c9(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.bF(D.enA,A.hr)
s=$.Y()
r=C.L()
r.r=A.eC.gq(0)
b9.aK(b8,r)
if(b7){b8=C.L()
b8.r=A.aE.j(0.5*a5).gq(0)
b8.z=A.B1
b9.af(A.v6,34,b8)}a6=new C.aQ(s.r,A.aq,b6,b6,C.a([],x.v))
a6.E(new C.b5(-16,12))
a6.E(new C.ao(-16,-2))
a6.E(new C.d0(0,-30,16,-2))
a6.E(new C.ao(16,12))
a6.E(new C.bE())
b8=C.L()
b8.r=C.aq(A.f1,D.b1p,a5).gq(0)
b9.aO(a6,b8)
b8=C.L()
b8.b=A.ae
b8.c=1.4
b8.r=A.c2.gq(0)
b9.aO(a6,b8)
if(b7){b8=b9.a
J.bB(b8.save())
b8.translate(0,-2)
b9.iT(0,c1*7)
s=C.L()
s.r=A.c.j(0.7).gq(0)
s.c=3
b9.bE(A.J,D.aBd,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.bB(b8.save())
b8.translate(0,a7)
s=$.Y().r
r=x.v
j=new C.aQ(s,A.aq,b6,b6,C.a([],r))
j.E(new C.b5(-28,8))
j.E(new C.ao(-28,-2))
j.E(new C.ao(-16,-4))
j.E(new C.ao(-10,-16))
j.E(new C.ao(10,-16))
j.E(new C.ao(18,-4))
j.E(new C.ao(28,-2))
j.E(new C.ao(28,8))
j.E(new C.bE())
q=C.L()
q.sap(D.bGj.au(0,D.enM))
b9.aO(j,q)
q=new C.aQ(s,A.aq,b6,b6,C.a([],r))
q.E(new C.b5(-8,-4))
q.E(new C.ao(-4,-13))
q.E(new C.ao(4,-13))
q.E(new C.ao(4,-4))
q.E(new C.bE())
p=C.L()
p.r=A.fe.gq(0)
b9.aO(q,p)
r=new C.aQ(s,A.aq,b6,b6,C.a([],r))
r.E(new C.b5(8,-4))
r.E(new C.ao(8,-13))
r.E(new C.ao(11,-13))
r.E(new C.ao(15,-4))
r.E(new C.bE())
s=C.L()
s.r=A.fe.gq(0)
b9.aO(r,s)
for(a2=0;a2<2;++a2){a3=D.cVt[a2]
s=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
s.r=A.aF.gq(0)
n=s.I()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.bB(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=A.c4.gq(0)
q.c=1.6
n=q.I()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.G(s+u*8,14)
q=-4+u*5
p=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=A.aA.gq(0)
p.c=1.6
n=p.I()
b8.drawLine.apply(b8,[-34-r,q,-42-r,q,n])
n.delete()}return!0
case"kettle":b8=$.Y().r
s=x.v
j=new C.aQ(b8,A.aq,b6,b6,C.a([],s))
j.E(new C.b5(-18,20))
j.E(new C.ao(-14,-12))
j.E(new C.d0(0,-20,14,-12))
j.E(new C.ao(18,20))
j.E(new C.bE())
r=C.L()
r.sap(D.bHm.au(0,D.enz))
b9.aO(j,r)
r=new C.aQ(b8,A.aq,b6,b6,C.a([],s))
r.E(new C.b5(14,-10))
r.E(new C.ao(30,-22))
r.E(new C.ao(32,-18))
r.E(new C.ao(16,-4))
r.E(new C.bE())
q=C.L()
q.r=A.e8.gq(0)
b9.aO(r,q)
s=new C.aQ(b8,A.aq,b6,b6,C.a([],s))
s.E(new C.b5(-14,-8))
s.E(new C.d0(-34,-6,-18,12))
b8=C.L()
b8.b=A.ae
b8.c=5
b8.r=A.aF.gq(0)
b9.aO(s,b8)
b8=C.L()
if(b7){s=C.aq(A.cQ,A.uc,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.eC
b8.r=s.gq(0)
b9.b2(D.eny,b8)
if(b7){b8=C.L()
b8.r=A.cQ.j(0.3).gq(0)
b8.z=A.lA
b9.af(A.aBa,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.G(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gq(0)
n=q.I()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.L()
b8.r=A.aF.gq(0)
b9.af(D.dLG,3,b8)
return!0
case"lamp":if(b7){u=A.k.D(0.4+0.12*(Math.abs(c0.cy)-3),0.4,1)
b8=new C.aQ($.Y().r,A.aq,b6,b6,C.a([],x.v))
b8.E(new C.b5(-10,-14))
b8.E(new C.ao(-30,24))
b8.E(new C.ao(10,24))
b8.E(new C.ao(8,-14))
b8.E(new C.bE())
s=C.L()
s.r=A.dZ.j(0.28*u).gq(0)
b9.aO(b8,s)
s=C.L()
s.r=A.dZ.j(0.5*u).gq(0)
s.z=S.G_
b9.af(D.dOx,24,s)}b8=C.bF(D.eo4,A.hr)
s=$.Y()
r=C.L()
r.r=A.eC.gq(0)
b9.aK(b8,r)
r=C.L()
r.r=A.eB.gq(0)
r.c=3
r.d=A.bN
b9.bE(D.dLU,D.aBi,r)
r=C.L()
r.r=A.eB.gq(0)
r.c=3
r.d=A.bN
b9.bE(D.aBi,D.dOy,r)
a9=new C.aQ(s.r,A.aq,b6,b6,C.a([],x.v))
a9.E(new C.b5(-14,-16))
a9.E(new C.ao(6,-26))
a9.E(new C.ao(10,-12))
a9.E(new C.ao(-10,-6))
a9.E(new C.bE())
s=C.L()
s.r=(b7?A.aL:A.kt).gq(0)
b9.aO(a9,s)
b8=C.L()
b8.r=(b7?A.c:A.bv).gq(0)
b9.af(D.dOz,4,b8)
return!0
case"lights":b8=$.Y().r
s=x.v
b0=new C.aQ(b8,A.aq,b6,b6,C.a([],s))
b0.E(new C.b5(-34,-6))
b0.E(new C.d0(0,22,34,-6))
r=C.L()
r.b=A.ae
r.c=2
r.r=A.fx.gq(0)
b9.aO(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.G(q+u*0.7,1.8)<1.1
if(b2){b3=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
b3.r=D.ZT[u].j(0.6).gq(0)
b3.z=A.OL
n=b3.I()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=C.a([],s)
b4=new C.aQ(b8,A.aq,b6,b6,b3)
b3.push(new C.b5(p-3,o))
b3.push(new C.ao(p+3,o))
b5=o+11
b3.push(new C.ao(p+5,b5))
b3.push(new C.d0(p,o+17,p-5,b5))
b3.push(new C.bE())
p=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
if(b2)o=D.ZT[u]
else{o=C.aq(D.ZT[u],A.x,0.65)
o.toString}p.r=o.gq(0)
n=p.I()
p=b4.gbL().a.snapshot()
r.drawPath((b4.e=new C.cE(p)).a,n)
n.delete()}return!0}return B.hPz(b9,c0,c1,c2)},
is:function is(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nz(d,e,f,g,h,i,j,k){var w=new B.f1B(e,h,i,k),v=w.$1(g),u=v.b.c
if(u>j&&u>0)v=w.$1(Math.max(2,g*j/u))
w=v.b
u=w.c
w=w.a.c
v.a5(d,f.aD(0,new C.u(u/2,w.gbh(w)/2)))},
h_N(d,e,f,g,h,i){var w,v,u=null,t=C.io(u,u,6,u,C.dl(u,u,u,u,u,u,u,u,u,C.l(u,u,h,u,u,u,u,u,u,u,u,g,u,u,i?A.I:A.a4,u,1.3,!0,u,u,u,u,u,u,u,u),e),A.L,A.cm,u,A.en,A.cj),s=f.a
t.xY(f.c-s)
w=f.b
v=t.b.a.c
t.a5(d,new C.u(s,w+Math.max(0,(f.d-w-v.gbh(v))/2)))},
bx1(d,e){var w
$.Y()
w=C.L()
w.b=A.ae
w.c=e
w.r=d.gq(0)
w.d=A.bN
return w},
fJO(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=A.o.G(A.k.bw(a3/5),8),h=A.k.G(a3,5),g=D.cyS[i],f=a2.a,e=a2.b,d=0+f,a0=0+e
$.Y()
w=C.L()
w.sap(new C.a3(A.aw,A.aC,A.w,C.a([g.d,g.e],x.O),null,null).au(0,new C.a9(0,0,d,a0)))
a1.b2(new C.a9(0,0,d,a0),w)
v=new C.eX()
v.dQ(i+3)
for(d=a3*0.7,a0=e+20,w=a1.a,u=0;u<9;++u){t=A.k.G(v.ae()*f+Math.sin(d+u)*f*0.05,f)
s=A.k.G(a3*(6+v.ae()*14)+v.ae()*e,a0)
r=v.ae()
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.16).gq(0)
p=q.I()
w.drawCircle(t,e-s+10,2+r*e*0.05,p)
p.delete()}o=f>=e
n=A.n5.av(0,A.k.D(h/0.9,0,1))
d=f/2
a0=o?0.4:0.34
a0=e*a0+Math.sin(a3*3)*e*0.012
s=A.c.j(0.2)
r=C.L()
r.r=s.gq(0)
a1.af(new C.u(d,a0),e*0.2*n,r)
J.bB(w.save())
w.translate(d,a0)
a1.bV(0,A.k.D(n,0.01,1.5))
a0=o?0.26:0.17
B.nz(a1,g.c,A.J,e*a0,A.c,!0,9999,0)
w.restore()
m=A.co.av(0,A.k.D((h-0.3)/0.6,0,1))
J.bB(w.save())
w.translate((1-m)*f*0.3,0)
l=A.k.D(m,0,1)
a0=o?0.68:0.58
s=o?0.1:0.07
r=f*0.92
B.nz(a1,g.a,new C.u(d,e*a0),e*s,A.c.j(l),!0,r,0)
a0=o?0.8:0.67
s=o?0.058:0.045
B.nz(a1,g.b,new C.u(d,e*a0),e*s,A.c.j(0.9*l),!1,r,0)
w.restore()
for(a0=e*0.94,s=e*0.011,r=e*0.005,u=0;u<8;++u){q=u===i
k=q?r:0
j=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(q?0.95:0.35).gq(0)
p=j.I()
w.drawCircle(d+(u-3.5)*e*0.04,a0,s+k,p)
p.delete()}d=f-e*0.07
a0=e*0.06
B.nz(a1,"AD",new C.u(d,a0),e*0.045,A.c.j(0.85),!0,9999,1)
w=e*0.02
a1.aK(C.bF(C.cN(new C.u(d,a0),e*0.065,e*0.1),new C.b1(w,w)),B.bx1(A.af,1))},
h56(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.a
J.bB(k.save())
w=e.a
v=e.b
u=0+w
t=0+v
k.clipRect(C.c9(new C.a9(0,0,u,t)),$.tu()[1],!0)
switch(A.o.G(f,8)){case 0:B.fJO(d,e,g)
break
case 1:B.hwc(d,e,g)
break
case 2:B.hEQ(d,e,g)
break
case 3:B.hzV(d,e,g)
break
case 4:B.hBv(d,e,g)
break
case 5:B.hv8(d,e,g)
break
case 6:$.Y()
s=C.L()
s.sap(D.bIA.au(0,new C.a9(0,0,u,t)))
d.b2(new C.a9(0,0,u,t),s)
s=C.L()
s.r=A.bQ.gq(0)
d.b2(new C.a9(0,0,u,0+v*0.16),s)
s=w*0.8
B.nz(d,"NGMY NEWS",new C.u(w/2,v*0.08),v*0.09,A.c,!0,s,2)
r=A.k.bw(g/6)
q=A.co.av(0,A.k.D(A.k.G(g,6)/0.6,0,1))
J.bB(k.save())
k.translate((1-q)*w*0.4,0)
t=w*0.06
p=v*0.24
o=v*0.03
o=C.bF(new C.a9(t,p,t+w*0.88,p+v*0.4),new C.b1(o,o))
p=A.c.j(0.1*q+0.02)
t=C.L()
t.r=p.gq(0)
d.aK(o,t)
t=w*0.1
o=v*0.26
B.h_N(d,D.aqW[A.o.G(r,8)],new C.a9(t,o,t+s,o+v*0.36),v*0.072,A.c.j(q),!0)
k.restore()
o=v*0.76
s=C.L()
s.r=A.aT.gq(0)
d.b2(new C.a9(0,o,u,o+v*0.1),s)
n=A.d.aF(D.aqW,"   \u2022   ")
m=C.io(l,l,1,l,C.dl(l,l,l,l,l,l,l,l,l,C.l(l,l,A.dZ,l,l,l,l,l,l,l,l,v*0.05,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),n),A.a5,A.cm,l,A.en,A.cj)
m.fe()
m.a5(d,new C.u(w-A.k.G(g*v*0.35,m.b.c+w),v*0.775))
B.nz(d,"LIVE",new C.u(w*0.08,v*0.22),v*0.04,A.aE,!0,9999,1)
break
default:B.hD8(d,e,g)}k.restore()},
hwc(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.Y()
w=C.L()
w.sap(D.bGy.au(0,new C.a9(0,0,a3,a4)))
a5.b2(new C.a9(0,0,a3,a4),w)
v=new C.Q(Date.now(),0,!1)
u=a1>=a2
a3=u?a1*0.3:a1/2
a4=u?a2/2:a2*0.34
t=new C.u(a3,a4)
w=u?a1*0.22:a1*0.38
s=Math.min(w,a2*(u?0.36:0.26))
w=C.L()
w.r=A.aF.gq(0)
a5.af(t,s,w)
w=s*0.05
a5.af(t,s,B.bx1(A.aX,w))
for(r=a5.a,q=s*0.02,p=s*0.04,o=0;o<12;++o){n=o*3.141592653589793/6
m=Math.cos(n)
l=Math.sin(n)
k=Math.cos(n)
j=Math.sin(n)
i=A.o.G(o,3)===0?p:q
h=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
h.b=A.ae
h.c=i
h.r=A.af.gq(0)
h.d=A.bN
g=h.I()
r.drawLine.apply(r,[a3+m*s*0.82,a4+l*s*0.82,a3+k*s*0.94,a4+j*s*0.94,g])
g.delete()}a3=new B.eYL(a5,t,s)
a3.$4((A.o.G(C.dd(v),12)+C.fM(v)/60)/12,0.5,s*0.07,A.c)
a4=(C.yO(v)+C.yN(v)/1000)/60
a3.$4((C.fM(v)+a4)/60,0.75,w,A.c)
a3.$4(a4,0.88,s*0.025,A.aE)
a4=C.L()
a4.r=A.aE.gq(0)
a5.af(t,s*0.06,a4)
f=A.a.aT(A.o.u(C.dd(v)),2,"0")
e=A.a.aT(A.o.u(C.fM(v)),2,"0")
d=A.a.aT(A.o.u(C.yO(v)),2,"0")
a0=u?new C.u(a1*0.7,a2*0.45):new C.u(a1/2,a2*0.7)
a3=u?0.2:0.11
B.nz(a5,f+":"+e,a0,a2*a3,A.bh,!0,a1*0.42,0)
a3=a0.ao(0,new C.u(0,a2*(u?0.14:0.08)))
a4=u?0.07:0.045
B.nz(a5,":"+d,a3,a2*a4,A.eu,!0,a1*0.4,0)
a4=A.AJ[C.m9(v)-1]
a3=A.ok[C.bC(v)-1]
w=a0.ao(0,new C.u(0,a2*(u?0.24:0.15)))
r=u?0.05:0.035
B.nz(a5,a4+" "+C.bO(v)+" "+a3,w,a2*r,A.aP,!1,a1*0.9,0)},
hEQ(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a4.a,d=a4.b,a0=A.o.G(A.k.bw(a5/5),4),a1=0+e,a2=0+d
$.Y()
w=C.L()
w.sap(new C.a3(A.aY,A.b1,A.w,D.cyp[a0],null,null).au(0,new C.a9(0,0,a1,a2)))
a3.b2(new C.a9(0,0,a1,a2),w)
v=e*0.5
u=d*0.34
if(a0===0){a1=a3.a
J.bB(a1.save())
a1.translate(v,u)
a3.iT(0,a5*0.4)
for(a2=d*0.014,t=0;t<12;++t){s=t*3.141592653589793/6
w=Math.cos(s)
r=Math.sin(s)
q=Math.cos(s)
p=Math.sin(s)
o=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=a2
o.r=A.dZ.gq(0)
o.d=A.bN
n=o.I()
a1.drawLine.apply(a1,[w*d*0.14,r*d*0.14,q*d*0.2,p*d*0.2,n])
n.delete()}a1.restore()
a1=C.L()
a1.r=A.dZ.gq(0)
a3.af(new C.u(v,u),d*0.11,a1)}else for(a1=a3.a,a2=a0===2,w=d*0.1,m=0;m<4;++m){l=D.cGC[m]
r=l.a
q=Math.sin(a5+r*9)
p=a2?A.bj:A.c
o=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
o.r=p.gq(0)
n=o.I()
a1.drawCircle(v+r*d+q*4,u+l.b*d,w,n)
n.delete()}if(a0===2)for(a1=a5*30,a2=a5*280,w=d*0.8,r=d*0.03,q=a3.a,t=0;t<36;++t){k=A.k.G(t*41+a1,e)
j=A.k.G(t*59+a2,w)
p=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
p.b=A.ae
p.c=1.4
p.r=A.fe.gq(0)
p.d=A.bN
n=p.I()
q.drawLine.apply(q,[k,j,k-3,j+r,n])
n.delete()}else if(a0===3)for(a1=a5*50,a2=d*0.85,w=a3.a,t=0;t<40;++t){k=A.k.G(t*47+Math.sin(a5+t)*12,e)
j=A.k.G(t*61+a1,a2)
r=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.c.gq(0)
n=r.I()
w.drawCircle(k,j,2.2,n)
n.delete()}B.nz(a3,D.ap3[a0],new C.u(v,d*0.62),d*0.16,A.c,!0,v,0)
B.nz(a3,D.cJH[a0],new C.u(v,d*0.74),d*0.06,A.c.j(0.9),!1,e*0.6,0)
for(a1=d*0.88,a2=e*0.16,w=d*0.14,r=d*0.03,q=a3.a,p=d*0.865,o=d*0.055,i=d*0.915,h=e*0.14,t=0;t<4;++t){k=e*(0.2+t*0.2)
g=C.bF(C.cN(new C.u(k,a1),w,a2),new C.b1(r,r))
f=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
f.r=A.x.j(0.25).gq(0)
n=f.I()
q.drawRRect(C.f7(g),n)
n.delete()
g=A.o.G(a0+t,4)
B.nz(a3,D.cDb[g],new C.u(k,p),o,A.c,!0,9999,0)
B.nz(a3,D.ap3[g],new C.u(k,i),r,A.af,!0,h,0)}},
hzV(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=0+f,a0=0+e
$.Y()
w=C.L()
w.sap(D.bJl.au(0,new C.a9(0,0,d,a0)))
a1.b2(new C.a9(0,0,d,a0),w)
v=f>=e
d=v?f*0.27:f/2
a0=v?e*0.46:e*0.3
u=new C.u(d,a0)
w=v?f*0.2:f*0.3
t=Math.min(w,e*0.28)
w=C.L()
w.r=A.aF.gq(0)
a1.af(u,t,w)
for(w=a1.a,s=1;s<5;++s){r=A.c.j(0.08)
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1
q.r=r.gq(0)
q.d=A.bN
p=q.I()
w.drawCircle(d,a0,t*(0.35+s*0.14),p)
p.delete()}J.bB(w.save())
w.translate(d,a0)
a1.iT(0,a3*1.6)
d=C.L()
d.r=A.bU.gq(0)
a1.af(A.J,t*0.3,d)
d=C.L()
d.r=A.af.gq(0)
a1.af(new C.u(t*0.16,0),t*0.04,d)
w.restore()
d=C.L()
d.r=A.x.gq(0)
a1.af(u,t*0.05,d)
o=v?f*0.52:f*0.1
n=v?f*0.4:f*0.8
m=v?e*0.2:e*0.55
l=v?e*0.4:e*0.18
for(d=a3*3,a0=a3*5.1,r=n/18,q=r*0.7,s=0;s<18;++s){k=A.k.D((Math.sin(d+s*0.7)+Math.sin(a0+s*1.3)+2)/4,0.05,1)
j=o+r*s
i=m+l*(1-k)
i=C.bF(new C.a9(j,i,j+q,i+l*k),A.hr)
h=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
h.r=C.aq(A.b7,A.bU,s/18).gq(0)
p=h.I()
w.drawRRect(C.f7(i),p)
p.delete()}g=v?new C.u(f*0.72,e*0.72):new C.u(f/2,e*0.8)
d=v?0.08:0.055
a0=f*0.8
B.nz(a1,"NGMY Beats",g,e*d,A.c,!0,a0,0)
d=A.o.G(A.k.bw(a3/20),9)
w=g.ao(0,new C.u(0,e*0.075))
r=v?0.045:0.032
B.nz(a1,"Now playing: Spark Song "+(d+1),w,e*r,A.af,!1,f*0.85,0)
r=A.k.G(a3,20)
w=f*0.1
d=e*0.93
q=d+e*0.012
i=C.bF(new C.a9(w,d,w+a0,q),A.hr)
h=C.L()
h.r=A.ba.gq(0)
a1.aK(i,h)
q=C.bF(new C.a9(w,d,w+a0*(r/20),q),A.hr)
r=C.L()
r.r=A.c.gq(0)
a1.aK(q,r)},
hBv(d,e,f){var w,v,u,t,s=A.o.G(A.k.bw(f/5),4),r=A.k.G(f,5),q=new B.f5e(e,d)
q.$3(s,1+0.06*(r/5),1)
if(r>4.2)q.$3(A.o.G(s+1,4),1,(r-4.2)/0.8)
w=e.a
v=e.b
q=w*0.04
u=v*0.84
t=v*0.03
t=C.bF(new C.a9(q,u,q+w*0.5,u+v*0.11),new C.b1(t,t))
$.Y()
u=C.L()
u.r=A.aT.gq(0)
d.aK(t,u)
B.nz(d,"\ud83d\uddbc\ufe0f "+D.cPo[s],new C.u(w*0.29,v*0.895),v*0.045,A.c,!0,w*0.46,0)},
hv8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b
$.Y()
w=C.L()
w.r=A.dA.gq(0)
d.b2(new C.a9(0,0,0+i,0+h),w)
for(v=h*0.04,w=h*0.07,u=i/2,t=u-1.5,s=h*0.035,r=t+3,q=d.a;v<h;v+=w){p=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=A.ba.gq(0)
o=p.I()
q.drawRect(C.c9(new C.a9(t,v,r,v+s)),o)
o.delete()}w=new B.eXC()
n=i*(0.08+0.84*w.$1(f*0.55))
t=f*0.83
m=h*(0.12+0.72*w.$1(t+0.3))
l=h*0.2
s=l/2
r=h-l
k=A.k.D(m-s,0,r)
j=A.k.D(h*(0.12+0.72*w.$1(t+0.45))-s,0,r)
r=i*0.04
s=i*0.02
r=C.bF(new C.a9(r,k,r+s,k+l),A.hr)
t=C.L()
t.r=A.bh.gq(0)
d.aK(r,t)
t=i*0.94
s=C.bF(new C.a9(t,j,t+s,j+l),A.hr)
t=C.L()
t.r=A.bU.gq(0)
d.aK(s,t)
t=C.L()
t.r=A.c.gq(0)
d.af(new C.u(n,m),h*0.025,t)
t=A.c.j(0.15)
s=C.L()
s.r=t.gq(0)
d.af(new C.u(n,m),h*0.05,s)
s=h*0.12
B.nz(d,""+A.o.G(A.k.bw(f/4),10),new C.u(i*0.4,s),s,A.bh,!0,9999,0)
B.nz(d,""+A.o.G(A.k.bw(f/5),10),new C.u(i*0.6,s),s,A.bU,!0,9999,0)
B.nz(d,"NGMY ARCADE",new C.u(u,h*0.94),h*0.055,A.aA,!0,i*0.8,2)},
hD8(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a4.a,a0=a4.b,a1=$.Y(),a2=C.L()
a2.r=D.b5Z.gq(0)
a3.b2(new C.a9(0,0,0+d,0+a0),a2)
a2=d*0.02
w=a0*0.03
w=C.bF(new C.a9(a2,w,a2+d*0.96,w+a0*0.94),new C.b1(w,w))
a2=C.L()
a2.r=A.eA.gq(0)
a3.aK(w,a2)
v=D.cOZ[A.o.G(A.k.bw(a5/8),8)]
u=A.k.G(a5,8)
if(u<0.5)a2=u/0.5
else a2=u>7.5?(8-u)/0.5:1
t=A.k.D(a2,0,1)
a2=d/2
w=a0*0.085
s=d*0.86
B.nz(a3,"\ud83c\udf93 "+v.a,new C.u(a2,a0*0.14),w,A.dZ.j(t),!0,s,1)
r=d*0.1
q=a0*0.22
p=d*0.8
B.h_N(a3,v.b,new C.a9(r,q,r+p,q+a0*0.3),a0*0.055,A.c.j(t),!1)
q=d*0.2
r=a0*0.56
o=a0*0.05
n=C.bF(new C.a9(q,r,q+d*0.6,r+a0*0.2),new C.b1(o,o))
m=new C.aQ(a1.r,A.aq,null,null,C.a([],x.v))
m.E(new C.iO(n))
a3.aO(m,B.bx1(A.c.j(0.5*t),3))
l=new C.QP(new C.uU(C.wl(m),!1,C.a([],x.R))).gL(0)
for(a1=a5*v.d*0.12,r=l.a,o=l.b,k=r.e,j=a0*0.012,i=a3.a,h=0;h<14;++h){g=A.k.G(a1+h/14,1)
r.j1()
f=k[o].b
f===$&&C.c()
f=f.a.length()
r.j1()
f=k[o].Le(g*f).a
g=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
g.r=A.dZ.j(t).gq(0)
e=g.I()
i.drawCircle(f.a,f.b,j,e)
e.delete()}a1=a0*0.66
r=a0*0.07
B.nz(a3,"\ud83d\udd0b",new C.u(q,a1),r,A.c.j(t),!0,9999,0)
B.nz(a3,"\ud83d\udca1",new C.u(p,a1),r,A.c.j(t),!0,9999,0)
B.nz(a3,v.c,new C.u(a2,a0*0.87),w,A.eu.j(t),!0,s,0)},
hQX(d,e){return C.a8(d,!1).cp(C.u6(null,!1,!0,!0,new B.fwe(e),A.eL,null,A.qf,new B.fwf(),x.H))},
f1B:function f1B(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Bd:function Bd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ar:function Ar(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eYL:function eYL(d,e,f){this.a=d
this.b=e
this.c=f},
f5e:function f5e(d,e){this.a=d
this.b=e},
eXC:function eXC(){},
Bu:function Bu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fwe:function fwe(d){this.a=d},
fwf:function fwf(){},
U_:function U_(d,e){this.c=d
this.a=e},
bgI:function bgI(d,e){var _=this
_.d=$
_.e=null
_.bq$=d
_.a6$=e
_.c=_.a=null},
e7_:function e7_(d){this.a=d},
e70:function e70(d){this.a=d},
e6Y:function e6Y(d){this.a=d},
e6X:function e6X(d){this.a=d},
e6Z:function e6Z(d,e){this.a=d
this.b=e},
e6W:function e6W(d,e){this.a=d
this.b=e},
e6V:function e6V(d){this.a=d},
e6U:function e6U(d){this.a=d},
aE2:function aE2(d,e,f){this.b=d
this.c=e
this.a=f},
aJ8:function aJ8(){},
h57(d,e,f,g,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.a
J.bB(h.save())
w=e.a
v=e.b
u=0+w
t=0+v
h.clipRect(C.c9(new C.a9(0,0,u,t)),$.tu()[1],!0)
if(a0<3){$.Y()
s=C.L()
s.r=D.aZW.gq(0)
d.b2(new C.a9(0,0,u,t),s)
if(a0<0.5)t=a0/0.5
else t=a0>2.4?(3-a0)/0.6:1
r=A.k.D(t,0,1)
t=e.ef(A.J)
s=e.ge8()
q=C.L()
q.sap(new C.bR(A.A,0.5,A.w,i,0,C.a([A.aX.j(0.35*r),A.K],x.O),i,i).au(0,C.bV(e.ef(A.J),e.ge8()*0.5)))
d.af(t,s*0.5,q)
B.F0(d,"NGMY",new C.u(0,v*0.36),v*0.2,A.c.j(r),A.L,v*0.03,w)
B.F0(d,"T V",new C.u(0,v*0.6),v*0.08,A.aX.j(r),A.L,v*0.05,w)
q=w*0.3
s=v*0.78
t=C.L()
t.r=A.aX.j(r).gq(0)
d.b2(new C.a9(q,s,q+w*0.4*(a0/3),s+3),t)}else if(a1>=0)B.h56(d,e,a1,g)
else{p=A.k.D((a0-3)/0.5,0,1)
o=A.o.G(f,10)
switch(o){case 0:B.hEp(d,e,g)
break
case 1:B.hwe(d,e,g)
break
case 2:B.hDM(d,e,g)
break
case 3:B.hAI(d,e,g)
break
case 4:B.hBV(d,e,g)
break
case 5:B.hDN(d,e,g)
break
case 6:B.hxr(d,e,g)
break
case 7:B.hEo(d,e,g)
break
case 8:B.hCG(d,e,g)
break
default:B.hxB(d,e,g)}s=w-v*0.34
q=v*0.04
n=v*0.03
m=C.bF(new C.a9(s,q,s+v*0.3,q+v*0.1),new C.b1(n,n))
$.Y()
n=C.L()
n.r=A.x.j(0.55).gq(0)
d.aK(m,n)
B.F0(d,"NGMY",new C.u(m.a+v*0.025,m.b+v*0.012),v*0.07,A.c,A.bf,1,i)
n=v*0.86
s=C.L()
s.r=A.x.j(0.6).gq(0)
d.b2(new C.a9(0,n,u,n+v*0.14),s)
B.F0(d,"CH "+(f+1)+"  \xb7  "+D.NG[o].a,new C.u(q,v*0.885),v*0.075,A.c,A.bf,0,w-v*0.08)
if(p<1){s=C.L()
s.r=A.c.j(0.6*(1-p)).gq(0)
d.b2(new C.a9(0,0,u,t),s)}}$.Y()
l=C.L()
l.r=A.x.j(0.07).gq(0)
for(k=0;k<v;k+=3){j=l.I()
h.drawRect(C.c9(new C.a9(0,k,u,k+1)),j)
j.delete()}u=new C.aQ($.Y().r,A.aq,i,i,C.a([],x.v))
u.E(new C.b5(0,0))
u.E(new C.ao(w*0.45,0))
u.E(new C.ao(0,v*0.5))
u.E(new C.bE())
v=C.L()
v.r=A.c.j(0.04).gq(0)
d.aO(u,v)
h.restore()},
F0(d,e,f,g,h,i,j,k){var w=null,v=C.io(w,w,1,w,C.dl(w,w,w,w,w,w,w,w,w,C.l(w,w,h,w,w,w,w,w,w,w,w,g,w,w,A.u,w,w,!0,w,j,w,w,w,w,w,w),e),i,A.cm,w,A.en,A.cj),u=k==null
v.xY(u?9999:k)
v.a5(d,f.ao(0,new C.u(i===A.L&&!u?(k-v.b.c)/2:0,0)))},
hEp(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=A.k.G(f,14),i=0+l,h=0+k
$.Y()
w=C.L()
w.sap(D.ajH.au(0,new C.a9(0,0,i,h)))
d.b2(new C.a9(0,0,i,h),w)
w=C.L()
w.r=A.dZ.gq(0)
d.af(new C.u(l*0.85,k*0.18),k*0.08,w)
w=k*0.78
h=C.L()
h.r=A.z7.gq(0)
d.b2(new C.a9(0,w,i,w+k*0.22),h)
new B.f9v(d,f,k).$5(new C.u(l*0.5,k*0.8),1.5707963267948966,k*0.24,5,A.k.D(j/5,0,1)*1.4)
for(i=k*0.26,h=k*0.11,w=k*0.05,v=d.a,u=-k,t=u*0.1,u*=0.04,s=k*0.065,r=0;r<6;++r){q=A.k.D((j-(5+r*1.3))/0.5,0,1)
if(q<=0)continue
p=(r&1)===1?0.04:0
o=A.o.G(r,3)
n=A.n5.av(0,q)
J.bB(v.save())
v.translate(l*(0.2+0.12*r+p),k*(0.16+0.14*o))
v.scale(n,n)
p=C.bF(C.cN(A.J,h,i),new C.b1(w,w))
$.Y()
o=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
o.r=A.c.gq(0)
m=o.I()
v.drawRRect(C.f7(p),m)
m.delete()
p=C.bF(C.cN(A.J,h,i),new C.b1(w,w))
o=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=2
o.r=A.by.gq(0)
m=o.I()
v.drawRRect(C.f7(p),m)
m.delete()
B.F0(d,"\u2665 "+D.cDj[r],new C.u(t,u),s,A.re,A.bf,0,null)
v.restore()}if(j>11.5)B.F0(d,"Family is everything",new C.u(0,k*0.62),k*0.09,A.hz,A.L,0,l)},
hwe(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a0.a,i=a0.b,h=0+j,g=0+i,f=$.Y(),e=C.L()
e.sap(D.bGw.au(0,new C.a9(0,0,h,g)))
d.b2(new C.a9(0,0,h,g),e)
w=a1*40
for(h=d.a,g=x.v,v=0;v<2;++v,f=e){e=C.a([],g)
u=new C.aQ(f.r,A.aq,k,k,e)
e.push(new C.b5(0,i))
for(f=v===0,t=0;t<=j;t+=6){s=f?0.4:1
r=f?0.62:0.78
q=f?40:28
q=new C.ao(t,i*r+Math.sin((t+w*s)/q)*i*0.05)
e.push(q)
s=u.f
if(s!=null)q.by(s)
s=u.e
if(s!=null)s.a.delete()
u.e=null}s=new C.ao(j,i)
e.push(s)
e=u.f
if(e!=null)s.by(e)
e=u.e
if(e!=null)e.a.delete()
u.e=null
e=$.Y()
s=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
s.r=(f?A.je:A.eA).gq(0)
p=s.I()
f=u.e
h.drawPath((f==null?u.e=new C.cE(u.gbL().a.snapshot()):f).a,p)
p.delete()}for(h=i*0.04,g=w*1.3,f=j+60,e=j*0.3,o=0,n=0;n<6;++n){t=A.k.G(n*90-g,f)-30
s=Math.sin(n*1.7+a1)
if(Math.abs(t-e)<12)++o
B.hDR(d,new C.u(t,i*(0.35+0.08*s)),h,A.dZ)}m=Math.abs(Math.sin(a1*5))
l=new C.u(e,i*0.72-m*i*0.22)
h=C.cN(new C.u(e,i*0.82),i*0.025,i*0.14*(1-m*0.4))
$.Y()
g=C.L()
g.r=A.dr.gq(0)
d.j3(h,g)
g=i*0.085
h=C.L()
h.sap(D.dW5.au(0,C.bV(l,g)))
d.af(l,g,h)
h=C.L()
h.b=A.ae
h.c=2
h.r=A.w9.gq(0)
d.af(l,g,h)
h=-i
B.F0(d,"$",l.ao(0,new C.u(h*0.03,h*0.045)),i*0.09,A.w9,A.bf,0,k)
g=h*0.01
h=l.ao(0,new C.u(h*0.028,g))
f=C.L()
f.r=A.x.gq(0)
d.af(h,2.4,f)
g=l.ao(0,new C.u(i*0.028,g))
f=C.L()
f.r=A.x.gq(0)
d.af(g,2.4,f)
B.F0(d,"Saved: $"+(A.o.G(A.k.bw(a1*3),1000)+o),new C.u(i*0.05,i*0.06),i*0.08,A.c,A.bf,0,k)},
hDR(d,e,f,g){var w,v,u,t,s,r,q,p=$.Y(),o=C.a([],x.v),n=new C.aQ(p.r,A.aq,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?f:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new C.b5(r,q)
o.push(r)
q=n.f
if(q!=null)r.by(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new C.ao(r,q)
o.push(r)
q=n.f
if(q!=null)r.by(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.E(new C.bE())
$.Y()
p=C.L()
p.r=g.gq(0)
d.aO(n,p)},
hDM(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a3.a,d=a3.b,a0=$.Y(),a1=C.L()
a1.r=D.b5_.gq(0)
a2.b2(new C.a9(0,0,0+e,0+d),a1)
w=new C.eX()
w.dQ(7)
for(a1=a4*3,v=a2.a,u=0;u<60;++u){t=A.k.G(A.k.G(w.ae()*e-a4*(10+w.ae()*60),e)+e,e)
s=w.ae()
r=w.ae()
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.5+0.5*Math.sin(a1+u)).gq(0)
p=q.I()
v.drawCircle(t,s*d*0.85,0.6+r*1.4,p)
p.delete()}o=e*1.2-A.k.G(a4*22,e*1.6)
a1=d*0.3
s=d*0.2
r=C.L()
r.sap(D.dW3.au(0,C.bV(new C.u(o,a1),s)))
a2.af(new C.u(o,a1),s,r)
a1=C.cN(new C.u(o,a1),d*0.07,d*0.6)
r=C.L()
r.b=A.ae
r.c=3
r.r=A.bH.j(0.7).gq(0)
a2.j3(a1,r)
r=Math.sin(a4*2)
J.bB(v.save())
v.translate(e*0.42,d*0.52+r*d*0.04)
a2.iT(0,-0.25)
a0=a0.r
r=x.v
n=new C.aQ(a0,A.aq,f,f,C.a([],r))
a1=-d
s=a1*0.04
q=d*0.1
n.E(new C.b5(s,q))
m=d*0.04
n.E(new C.d0(0,d*(0.2+0.05*Math.sin(a4*30)),m,q))
n.E(new C.bE())
l=C.L()
k=d*0.12
l.sap(D.bHd.au(0,new C.a9(s,q,s+d*0.08,q+k)))
a2.aO(n,l)
j=new C.aQ(a0,A.aq,f,f,C.a([],r))
l=a1*0.17
j.E(new C.b5(0,l))
s=a1*0.05
i=d*0.05
j.E(new C.d0(d*0.09,s,i,q))
j.E(new C.ao(s,q))
j.E(new C.d0(a1*0.09,s,0,l))
j.E(new C.bE())
h=C.L()
g=a1*0.08
h.sap(D.bHr.au(0,new C.a9(g,l,g+d*0.16,l+d*0.27)))
a2.aO(j,h)
h=C.L()
h.r=A.aX.gq(0)
a2.af(new C.u(0,s),d*0.035,h)
h=new C.aQ(a0,A.aq,f,f,C.a([],r))
h.E(new C.b5(s,m))
h.E(new C.ao(a1*0.1,k))
h.E(new C.ao(s,q))
h.E(new C.bE())
s=C.L()
s.r=A.aE.gq(0)
a2.aO(h,s)
r=new C.aQ(a0,A.aq,f,f,C.a([],r))
r.E(new C.b5(i,m))
r.E(new C.ao(q,k))
r.E(new C.ao(i,q))
r.E(new C.bE())
q=C.L()
q.r=A.aE.gq(0)
a2.aO(r,q)
v.restore()},
hAI(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=0+g,d=0+f,a0=$.Y(),a1=C.L()
a1.sap(D.bGe.au(0,new C.a9(0,0,e,d)))
a2.b2(new C.a9(0,0,e,d),a1)
for(e=a2.a,d=f*0.85,a1=f*0.7,w=x.v,a0=a0.r,v=0;v<4;++v){u=g*(0.1+0.25*v)
t=C.a([],w)
s=new C.aQ(a0,A.aq,h,h,t)
t.push(new C.b5(u,f))
t.push(new C.d0(u+Math.sin(a4+v)*10,d,u+4,a1+v*6))
t=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
t.b=A.ae
t.c=5
t.r=A.dk.gq(0)
r=t.I()
t=s.gbL().a.snapshot()
e.drawPath((s.e=new C.cE(t)).a,r)
r.delete()}d=A.k.G(a4*18,g*1.5)
J.bB(e.save())
e.translate(d-g*0.25,f*0.35+Math.sin(a4)*6)
d=C.cN(A.J,f*0.22,f*0.5)
a1=C.L()
a1.r=A.bt.gq(0)
a2.j3(d,a1)
a1=new C.aQ(a0,A.aq,h,h,C.a([],w))
d=-f
t=d*0.22
a1.E(new C.b5(t,0))
a1.E(new C.d0(d*0.36,d*0.12+Math.sin(a4*3)*5,d*0.34,d*0.16))
s=d*0.02
a1.E(new C.d0(d*0.28,s,t,0))
t=C.L()
t.r=A.bt.gq(0)
a2.aO(a1,t)
t=f*0.03
a1=f*0.1
q=C.cN(new C.u(0,t),a1,f*0.34)
p=C.L()
p.r=A.aJ.gq(0)
a2.j3(q,p)
p=C.L()
p.r=A.c.gq(0)
a2.af(new C.u(f*0.15,s),3,p)
p=C.L()
p.r=A.x.gq(0)
a2.af(new C.u(f*0.155,s),1.5,p)
e.restore()
for(s=d*0.005,q=d*0.08,p=d*0.03,o=f*0.06,d*=0.04,n=g+40,m=a4*2,v=0;v<6;++v){l=(v&1)===0?1:-1
k=A.k.G(A.k.G(a4*(24+v*7)*l+v*80,n)+g+40,n)
j=Math.sin(m+v)
J.bB(e.save())
e.translate(k-20,f*(0.52+0.06*v)+j*6)
e.scale(l,1)
k=C.cN(A.J,o,a1)
j=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
i=A.o.G(v,4)
j.r=D.aqr[i].gq(0)
r=j.I()
e.drawOval(C.c9(k),r)
r.delete()
k=C.a([],w)
j=new C.aQ(a0,A.aq,h,h,k)
k.push(new C.b5(d,0))
k.push(new C.ao(q,p))
k.push(new C.ao(q,t))
k.push(new C.bE())
k=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
k.r=D.aqr[i].gq(0)
r=k.I()
k=j.gbL().a.snapshot()
e.drawPath((j.e=new C.cE(k)).a,r)
r.delete()
k=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
k.r=A.x.gq(0)
r=k.I()
e.drawCircle(t,s,1.8,r)
r.delete()
e.restore()}for(v=0;v<14;++v){d=A.k.G(v*0.071+0.05,1)
a0=A.k.G(a4*(14+v*3)+v*40,f)
a1=Math.sin(m+v)
w=A.o.G(v,3)
t=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
t.b=A.ae
t.c=1.2
t.r=A.c.j(0.7).gq(0)
r=t.I()
e.drawCircle(g*d+a1*4,f-a0,2+w,r)
r.delete()}},
hBV(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a9.a,a1=a9.b,a2=A.k.G(b0,12),a3=a2<7,a4=0+a0,a5=0+a1,a6=$.Y(),a7=C.L()
a7.sap(new C.a3(A.aY,A.b1,A.w,a3?D.asB:D.cKL,d,d).au(0,new C.a9(0,0,a4,a5)))
a8.b2(new C.a9(0,0,a4,a5),a7)
a7=a1*0.74
w=C.L()
w.r=(a3?D.b8x:A.z7).gq(0)
a8.b2(new C.a9(0,a7,a4,a7+a1*0.26),w)
for(w=a8.a,v=a1*0.07,u=a1*0.06,t=a1*0.2,s=a1*0.1,r=a1*0.09,q=x.v,p=b0*2,a6=a6.r,o=0;o<4;++o){n=a0*(0.08+0.24*o)
m=a1*(0.14+0.03*A.o.G(o,2))
l=a7-m
k=n+t
j=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
j.r=D.cyo[o].gq(0)
i=j.I()
w.drawRect(C.c9(new C.a9(n,l,k,l+m)),i)
i.delete()
j=C.a([],q)
h=new C.aQ(a6,A.aq,d,d,j)
j.push(new C.b5(n-4,l))
j.push(new C.ao(n+s,l-r))
j.push(new C.ao(k+4,l))
j.push(new C.bE())
l=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
l.r=A.f1.gq(0)
i=l.I()
l=h.gbL().a.snapshot()
w.drawPath((h.e=new C.cE(l)).a,i)
i.delete()
l=n+v
k=m*0.55
j=a7-k
h=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
h.r=(a3&&A.o.G(A.k.bw(p),2)===0?A.lj:A.h5).gq(0)
i=h.I()
w.drawRect(C.c9(new C.a9(l,j,l+u,j+k)),i)
i.delete()}if(a3){for(a7=b0*20,u=b0*260,t=a1*0.8,o=0;o<70;++o){n=A.k.G(o*37+a7,a0)
g=A.k.G(o*53+u,t)
r=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.fe.gq(0)
r.c=1.4
i=r.I()
w.drawLine.apply(w,[n,g,n-3,g+9,i])
i.delete()}a7=b0*3
if(A.o.G(A.k.bw(a7),7)===0&&A.k.G(a7,1)<0.3){a7=C.L()
a7.r=A.c.j(0.5).gq(0)
a8.b2(new C.a9(0,0,a4,a5),a7)
q=new C.aQ(a6,A.aq,d,d,C.a([],q))
q.E(new C.b5(a0*0.6,s))
s=a0*0.55
a6=a1*0.3
q.E(new C.ao(s,a6))
q.E(new C.ao(a0*0.62,a6))
q.E(new C.ao(s,a1*0.55))
s=C.L()
s.b=A.ae
s.c=4
s.r=A.lj.gq(0)
a8.aO(q,s)}}else{for(a4=a0*0.5,a5=a1*0.035,a6=3.141592653589793*A.k.D((a2-7)/2,0,1)*57.29577951308232,o=0;o<6;++o){u=a0*(0.9-o*0.07)
u=C.cN(new C.u(a4,a7),u,u)
t=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
t.b=A.ae
t.c=a5
t.r=D.cZQ[o].j(0.9).gq(0)
i=t.I()
w.drawArc.apply(w,[C.c9(u),180,a6,!1,i])
i.delete()}a4=C.L()
a4.r=A.dZ.gq(0)
a8.af(new C.u(a0*0.86,a1*0.16),a1*0.08,a4)}for(a4=a0+120,o=0;o<3;++o){n=A.k.G(b0*(8+o*4)+o*120,a4)-60
for(a5=a1*(0.12+0.1*o),f=0;f<4;++f){e=D.c3P[f]
$.Y()
a6=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
a6.r=(a3?A.bj:A.c.j(0.95)).gq(0)
i=a6.I()
w.drawCircle(n+e.a,a5+e.b,v,i)
i.delete()}}},
hDN(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a3.a,a1=a3.b
$.Y()
w=C.L()
w.r=A.d8.gq(0)
a2.b2(new C.a9(0,0,0+a0,0+a1),w)
v=C.L()
v.r=A.c.j(0.05).gq(0)
for(w=a2.a,u=0;u<a0;u+=16){t=v.I()
w.drawLine.apply(w,[u,0,u,a1,t])
t.delete()}for(s=0;s<a1;s+=16){t=v.I()
w.drawLine.apply(w,[0,s,a0,s,t])
t.delete()}r=a0*0.14
q=a1*0.2
p=a1*0.08
o=C.bF(new C.a9(r,q,r+a0*0.72,q+a1*0.5),new C.b1(p,p))
n=new C.aQ($.Y().r,A.aq,null,null,C.a([],x.v))
n.E(new C.iO(o))
q=C.L()
q.b=A.ae
q.c=5
q.r=A.bt.gq(0)
a2.aO(n,q)
m=new C.QP(new C.uU(C.wl(n),!1,C.a([],x.R))).gL(0)
q=m.a
l=m.b
q.j1()
k=q.e
j=k[l].b
j===$&&C.c()
j=j.a.length()
q.j1()
i=k[l].b
i===$&&C.c()
h=A.k.G(a4*j/5,i.a.length())
for(g=0;g<10;++g){q.j1()
j=k[l].b
j===$&&C.c()
j=A.k.G(h-g*9,j.a.length())
q.j1()
f=k[l].Le(j).a
j=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
j.r=A.dZ.j(1-g*0.09).gq(0)
j.z=E.OJ
t=j.I()
w.drawCircle(f.a,f.b,6-g*0.5,t)
t.delete()}w=a1*0.45
q=C.bF(C.cN(new C.u(r,w),a1*0.22,a1*0.12),A.j9)
l=C.L()
l.r=A.dk.gq(0)
a2.aK(q,l)
B.F0(a2,"+",new C.u(r-5,a1*0.33),a1*0.07,A.c,A.bf,0,null)
e=(Math.sin(a4*2)+1)/2
d=new C.u(a0*0.86,w)
w=C.L()
w.r=A.dZ.j(0.25+0.5*e).gq(0)
w.z=S.G_
a2.af(d,a1*0.16,w)
w=C.L()
w.r=C.aq(A.bI,A.qa,e).gq(0)
a2.af(d,p,w)
B.F0(a2,"Electricity needs a full loop!",new C.u(0,a1*0.74),a1*0.075,A.h6,A.L,0,a0)},
hxr(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.Y()
w=C.L()
w.sap(D.bJr.au(0,new C.a9(0,0,a3,a4)))
a5.b2(new C.a9(0,0,a3,a4),w)
w=a2*0.82
a4=C.L()
a4.r=A.d8.gq(0)
a5.b2(new C.a9(0,w,a3,w+a2*0.18),a4)
for(a3=a1*0.1,a4=a5.a,v=0;v<7;++v){u=a1*(0.05+v*0.15)
t=a2*(0.1+0.07*A.o.G(v*5,4))
s=w-t
r=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.aF.gq(0)
q=r.I()
a4.drawRect(C.c9(new C.a9(u,s,u+a3,s+t)),q)
q.delete()}for(a3=a2*0.2,s=a7*0.55,p=0;p<4;++p){r=s+p*0.27
o=A.k.G(r,1)
n=A.k.bw(r)*7+p*3
m=a1*(0.15+0.7*A.k.G(n*0.37,1))
l=a2*(0.2+0.25*A.k.G(n*0.53,1))
k=D.cjL[A.o.G(Math.abs(n),5)]
if(o<0.3){$.Y()
r=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.c.gq(0)
q=r.I()
a4.drawCircle(m,w-(w-l)*(o/0.3),2.5,q)
q.delete()}else{v=(o-0.3)/0.7
for(r=v*v*a2*0.08,j=1-v,i=2.4*j+0.4,h=0;h<28;++h){g=h*3.141592653589793*2/28
f=a3*A.dS.av(0,v)
e=Math.cos(g)
d=Math.sin(g)
$.Y()
a0=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
a0.r=k.j(A.k.D(j,0,1)).gq(0)
a0.z=D.d6y
q=a0.I()
a4.drawCircle(m+e*f,l+d*f+r,i,q)
q.delete()}}}},
hEo(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,a0=a6.b,a1=0+d,a2=0+a0,a3=$.Y(),a4=C.L()
a4.sap(D.ajH.au(0,new C.a9(0,0,a1,a2)))
a5.b2(new C.a9(0,0,a1,a2),a4)
for(a2=a5.a,a4=x.v,w=0;w<2;++w,a3=v){v=C.a([],a4)
u=new C.aQ(a3.r,A.aq,null,null,v)
v.push(new C.b5(0,a0))
for(a3=w===0,t=0;t<=d;t+=6){s=a3?8:20
r=a3?0.55:0.68
q=a3?50:34
q=new C.ao(t,a0*r+Math.sin((t+a7*s)/q)*a0*0.06)
v.push(q)
s=u.f
if(s!=null)q.by(s)
s=u.e
if(s!=null)s.a.delete()
u.e=null}s=new C.ao(d,a0)
v.push(s)
v=u.f
if(v!=null)s.by(v)
v=u.e
if(v!=null)v.a.delete()
u.e=null
v=$.Y()
s=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
s.r=(a3?A.D_:A.z7).gq(0)
p=s.I()
a3=u.e
a2.drawPath((a3==null?u.e=new C.cE(u.gbL().a.snapshot()):a3).a,p)
p.delete()}a3=a0*0.8
a4=C.L()
a4.r=A.bt.gq(0)
a5.b2(new C.a9(0,a3,a1,a3+a0*0.04),a4)
for(t=-A.k.G(a7*80,24),a1=a0*0.84,a4=a0*0.03,v=a1+a4;t<d;t+=24){s=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
s.r=A.h5.gq(0)
p=s.I()
a2.drawRect(C.c9(new C.a9(t,a1,t+8,v)),p)
p.delete()}o=Math.sin(a7*14)*1.2
n=d*0.12
for(a1=a3+o,a3=a0*0.025,v=d*0.012,s=a0*0.02,r=a0*0.62+o,a4=r+a4,q=a4+a0*0.06,m=r+a0*0.18,l=0;l<4;++l){k=l===0
j=n+d*(k?0.16:0.15)
i=C.bF(new C.a9(n,r,j,m),new C.b1(s,s))
h=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
h.r=(k?A.bQ:D.cKN[l-1]).gq(0)
p=h.I()
a2.drawRRect(C.f7(i),p)
p.delete()
for(j-=n,i=j*0.18,g=0;g<3;++g){h=n+j*(0.12+g*0.28)
f=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
f.r=A.fe.gq(0)
p=f.I()
a2.drawRect(C.c9(new C.a9(h,a4,h+i,q)),p)
p.delete()}i=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=A.bg.gq(0)
p=i.I()
a2.drawCircle(n+j*0.25,a1,a3,p)
p.delete()
i=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=A.bg.gq(0)
p=i.I()
a2.drawCircle(n+j*0.75,a1,a3,p)
p.delete()
n+=j+v}for(a1=a7*0.8,a3=d*0.2,a4=a0*0.6,l=0;l<5;++l){e=A.k.G(a1+l*0.2,1)
v=e*a0
r=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.7*(1-e)).gq(0)
p=r.I()
a2.drawCircle(a3-e*d*0.12,a4-v*0.25,s+v*0.04,p)
p.delete()}},
hCG(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a4.a,a0=a4.b,a1=0+d,a2=0+a0
$.Y()
w=C.L()
v=a5*2
u=C.aq(A.je,A.il,(Math.sin(v)+1)/2)
u.toString
w.sap(new C.a3(A.aw,A.aC,A.w,C.a([u,A.aF],x.O),null,null).au(0,new C.a9(0,0,a1,a2)))
a3.b2(new C.a9(0,0,a1,a2),w)
for(a1=a3.a,a2=a0*0.86,w=d/8-2,u=a0*0.14,t=a2+u,s=0;s<8;++s){r=d*s/8
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=(A.k.G(v+s,2)<1?A.bU:A.aX).j(0.5).gq(0)
p=q.I()
a1.drawRect(C.c9(new C.a9(r,a2,r+w,t)),p)
p.delete()}a2=a5*6
o=Math.sin(a2)
J.bB(a1.save())
w=-a0
a1.translate(d*0.5,a0*0.55+Math.abs(o)*w*0.03)
a3.iT(0,o*0.06)
t=a0*0.26
r=a0*0.3
q=a0*0.04
n=C.bF(C.cN(A.J,r,t),new C.b1(q,q))
m=C.L()
m.sap(D.bJQ.au(0,C.cN(A.J,r,t)))
a3.aK(n,m)
m=a0*0.08
u=C.cN(new C.u(0,a0*0.02),m,u)
n=C.L()
n.r=A.b7.j(0.7).gq(0)
a3.b2(u,n)
n=C.bF(C.cN(new C.u(0,w*0.25),a0*0.17,a0*0.22),new C.b1(q,q))
u=C.L()
u.r=A.cp.gq(0)
a3.aK(n,u)
l=A.k.G(a5*1.3,1)>0.08
for(u=w*0.26,t=a0*0.025,k=0;k<2;++k){j=D.c3s[k]
r=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=(l?A.b7:A.il).gq(0)
p=r.I()
a1.drawCircle(j*a0,u,t,p)
p.delete()}u=C.L()
u.r=A.af.gq(0)
u.c=3
a3.bE(new C.u(0,w*0.335),new C.u(0,w*0.38),u)
u=C.L()
u.r=A.aE.gq(0)
a3.af(new C.u(0,w*0.39),a0*0.015,u)
for(u=-o,t=a0*0.035,r=a0*0.15,n=a0*0.28,w*=0.08,k=0;k<2;++k){i=D.a_L[k]
J.bB(a1.save())
h=i*a0
a1.translate(h*0.14,w)
g=i>0
a1.rotate(i*(0.7+Math.sin(a2+(g?0:3.141592653589793))*0.8)*180/3.141592653589793,0,0)
f=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
f.r=A.bI.gq(0)
f.c=t
f.d=A.bN
p=f.I()
a1.drawLine.apply(a1,[0,0,h*0.16,0,p])
p.delete()
a1.restore()
g=g?o:u
f=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
f.r=A.bI.gq(0)
f.c=q
f.d=A.bN
p=f.I()
a1.drawLine.apply(a1,[h*0.06,r,h*0.08,n+g*a0*0.02,p])
p.delete()}a1.restore()
for(a1=a5*0.7,a2=a0*0.7,s=0;s<4;++s){e=A.k.G(a1+s*0.25,1)
B.F0(a3,"\u266a",new C.u(d*(0.2+0.18*s)+Math.sin(v+s)*8,a2-e*a0*0.5),m,A.c.j(1-e),A.bf,0,null)}},
hxB(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=0+e,a1=0+d
$.Y()
w=C.L()
w.sap(D.bIo.au(0,new C.a9(0,0,a0,a1)))
a2.b2(new C.a9(0,0,a0,a1),w)
w=C.L()
w.r=A.dZ.gq(0)
a2.af(new C.u(e*0.12,d*0.16),d*0.07,w)
w=d*0.72
a1=C.L()
a1.r=A.D_.gq(0)
a2.b2(new C.a9(0,w,a0,w+d*0.28),a1)
for(a0=a4*0.25,a1=d*0.78,w=a2.a,v=d*0.016,u=a4*0.3,t=d*0.022,s=0;s<9;++s){r=e*(0.07+s*0.105)
q=A.k.D(A.k.G(a0-s*0.12,3),0,1)
p=A.o.G(s,3)
o=r+Math.sin(a4+s)*3
p=a1-d*(0.12+0.05*p)*q
n=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
n.r=A.fx.gq(0)
n.c=3
m=n.I()
w.drawLine.apply(w,[r,a1,o,p,m])
m.delete()
if(q>0.7){for(l=0;l<6;++l){k=l*3.141592653589793/3+u
n=Math.cos(k)
j=Math.sin(k)
i=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=D.arr[A.o.G(s,5)].gq(0)
m=i.I()
w.drawCircle(o+n*d*0.028,p+j*d*0.028,t,m)
m.delete()}n=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
n.r=A.dZ.gq(0)
m=n.I()
w.drawCircle(o,p,v,m)
m.delete()}}for(a0=d*0.03,a1=d*0.05,v=d*0.06,u=a4*0.9,t=a4*1.3,p=a4*18,s=0;s<3;++s){r=e*(0.2+0.28*s)+Math.sin(u+s*2)*e*0.12
h=d*(0.3+0.1*s)+Math.cos(t+s)*d*0.06
g=Math.abs(Math.sin(p+s))
for(o=a1*g+2,n=(s+2)%5,f=0;f<2;++f){j=C.cN(new C.u(r+D.a_L[f]*d*0.025*g,h),v,o)
i=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=D.arr[n].gq(0)
m=i.I()
w.drawOval(C.c9(j),m)
m.delete()}o=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
o.r=A.bg.gq(0)
o.c=2
m=o.I()
w.drawLine.apply(w,[r,h-a0,r,h+a0,m])
m.delete()}},
hRf(d,e,f,g){return C.a8(d,!1).cp(C.u6(null,!1,!0,!0,new B.fxw(e,g,f),A.eL,null,A.qf,new B.fxx(),x.S))},
wT:function wT(d,e){this.a=d
this.b=e},
f9v:function f9v(d,e,f){this.a=d
this.b=e
this.c=f},
fxw:function fxw(d,e,f){this.a=d
this.b=e
this.c=f},
fxx:function fxx(){},
Ut:function Ut(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBE:function aBE(d,e){var _=this
_.e=_.d=$
_.f=-1
_.r=!1
_.w=null
_.x=0
_.y=!0
_.z=null
_.bq$=d
_.a6$=e
_.c=_.a=null},
eqH:function eqH(d){this.a=d},
eqG:function eqG(d){this.a=d},
eqF:function eqF(d,e){this.a=d
this.b=e},
eqI:function eqI(d,e){this.a=d
this.b=e},
eqR:function eqR(d){this.a=d},
eqQ:function eqQ(d){this.a=d},
eqP:function eqP(){},
eqK:function eqK(d){this.a=d},
eqL:function eqL(d){this.a=d},
eqM:function eqM(d){this.a=d},
eqN:function eqN(d){this.a=d},
eqJ:function eqJ(d){this.a=d},
eqO:function eqO(d){this.a=d},
eqE:function eqE(d){this.a=d},
eqC:function eqC(d){this.a=d},
eqD:function eqD(d,e){this.a=d
this.b=e},
bqK:function bqK(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aJq:function aJq(){},
f4Y(d,e,f,g){var w=null,v=C.m(24),u=C.H(f.j(0.6),A.r,1)
return C.au(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.ar,C.d(e,w,w,w,w,w,w,A.Hv,A.L,w,w),A.ay,C.c8(A.fG,g,A.bx,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.h,w,w,new C.o(D.Tn,w,u,v,w,w,A.n),w,w,w,A.ep,A.a8,w,w,w),w,w,w)},
fI1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.eX()
b4.dQ(b5*977+13)
w=A.o.D(1+A.o.ak(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aB(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.T(u,t)
m=w
l=0
k=L.pv
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
g=A.d.gaj(o)
n.m(0,g,a3?"/":"\\")
k=a2}}if(!j||o.length<w||p.length<5)continue
g=C.a([],v)
for(f=p.length,a6=0;a6<p.length;p.length===f||(0,C.K)(p),++a6){a7=p[a6]
if(!A.d.t(o,a7))g.push(a7)}if(g.length<3)continue
a8=A.o.D(2+A.o.ak(b5,8),2,4)
a9=C.eN([A.d.gaj(g)],u)
A.d.fw(g,b4)
for(v=g.length,a6=0;a6<g.length;g.length===v||(0,C.K)(g),++a6){a7=g[a6]
if(a9.a>=a8)break
a9.K(0,a7)}b0=C.aZ(u)
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
return new B.aTf(b0,a9,C.T(u,t),q,L.pv,w+v)}return new B.aTf(C.aZ(u),C.eN([25],u),C.T(u,t),21,L.pv,1)},
h5X(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aZ(x.S),n=d.e,m=A.o.G(n,7),l=A.o.ak(n,7),k=d.f
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
if(q==="/")k=new C.A(-s,-t)
if(q==="\\")k=new C.A(k.b,k.a)}return new C.bkG(p,o)},
h1k(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aTf:function aTf(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
TG:function TG(d){this.a=d},
bgo:function bgo(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.fa$=g
_.kA$=h
_.fE$=i
_.fb$=j
_.bq$=k
_.a6$=l
_.c=_.a=null},
dYT:function dYT(d){this.a=d},
dYS:function dYS(d,e){this.a=d
this.b=e},
dYU:function dYU(){},
dYJ:function dYJ(d,e){this.a=d
this.b=e},
dYK:function dYK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dYN:function dYN(d,e){this.a=d
this.b=e},
dYL:function dYL(d){this.a=d},
dYM:function dYM(d){this.a=d},
dYO:function dYO(d){this.a=d},
dYP:function dYP(d){this.a=d},
dYQ:function dYQ(d){this.a=d},
dYR:function dYR(d,e){this.a=d
this.b=e},
bds:function bds(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
d9S:function d9S(d,e,f){this.a=d
this.b=e
this.c=f},
d9V:function d9V(d,e,f){this.a=d
this.b=e
this.c=f},
d9T:function d9T(d){this.a=d},
d9U:function d9U(d){this.a=d},
TI:function TI(d){this.a=d},
aB1:function aB1(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.fa$=g
_.kA$=h
_.fE$=i
_.fb$=j
_.bq$=k
_.a6$=l
_.c=_.a=null},
dZb:function dZb(d){this.a=d},
dZa:function dZa(d,e){this.a=d
this.b=e},
dZc:function dZc(){},
dYX:function dYX(){},
dZ5:function dZ5(d,e){this.a=d
this.b=e},
dZ2:function dZ2(d){this.a=d},
dYZ:function dYZ(d){this.a=d},
dZ3:function dZ3(d){this.a=d},
dZ4:function dZ4(d){this.a=d},
dYY:function dYY(d){this.a=d},
dZ6:function dZ6(d){this.a=d},
dZ1:function dZ1(d,e){this.a=d
this.b=e},
dZ7:function dZ7(d){this.a=d},
dZ0:function dZ0(d,e){this.a=d
this.b=e},
dZ8:function dZ8(d){this.a=d},
dZ_:function dZ_(d,e){this.a=d
this.b=e},
dZ9:function dZ9(d){this.a=d},
bdH:function bdH(d,e){this.b=d
this.a=e},
aIU:function aIU(){},
bth:function bth(){},
aIV:function aIV(){},
bti:function bti(){},
ZQ(d,e,f,g,h,i){return new B.bq8(d,e,f,g,h,i)},
bq8:function bq8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f1s:function f1s(){},
f1t:function f1t(){},
f1u:function f1u(){},
f1v:function f1v(){},
f1w:function f1w(){},
f1x:function f1x(){},
f1y:function f1y(){},
f1z:function f1z(){},
a6d:function a6d(d){this.a=d},
cav:function cav(d){this.a=d},
caw:function caw(){},
cau:function cau(d,e){this.a=d
this.b=e},
cat:function cat(d){this.a=d},
Uy:function Uy(d){this.a=d},
aBQ:function aBQ(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.fa$=f
_.kA$=g
_.fE$=h
_.fb$=i
_.bq$=j
_.a6$=k
_.c=_.a=null},
euP:function euP(d){this.a=d},
euL:function euL(d){this.a=d},
euK:function euK(d,e){this.a=d
this.b=e},
euN:function euN(d,e){this.a=d
this.b=e},
euM:function euM(d,e){this.a=d
this.b=e},
euO:function euO(d){this.a=d},
bru:function bru(d,e,f){this.b=d
this.c=e
this.a=f},
Th:function Th(d){this.a=d},
bfY:function bfY(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.fa$=d
_.kA$=e
_.fE$=f
_.fb$=g
_.bq$=h
_.a6$=i
_.c=_.a=null},
dLT:function dLT(){},
dLU:function dLU(){},
dLO:function dLO(d,e){this.a=d
this.b=e},
dLQ:function dLQ(d,e){this.a=d
this.b=e},
dLR:function dLR(d){this.a=d},
dLP:function dLP(d){this.a=d},
dLS:function dLS(d){this.a=d},
bmp:function bmp(d,e,f){this.b=d
this.c=e
this.a=f},
Sv:function Sv(d){this.a=d},
bfD:function bfD(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.fa$=d
_.kA$=e
_.fE$=f
_.fb$=g
_.bq$=h
_.a6$=i
_.c=_.a=null},
dxK:function dxK(){},
dxL:function dxL(){},
dxF:function dxF(){},
dxI:function dxI(d,e){this.a=d
this.b=e},
dxH:function dxH(d,e){this.a=d
this.b=e},
dxJ:function dxJ(d){this.a=d},
dxG:function dxG(d){this.a=d},
aFc:function aFc(d,e,f){this.a=d
this.b=e
this.c=f},
T8:function T8(d){this.a=d},
bfS:function bfS(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dJi:function dJi(d,e){this.a=d
this.b=e},
dJj:function dJj(d){this.a=d},
dJh:function dJh(d,e){this.a=d
this.b=e},
dJk:function dJk(d){this.a=d},
dJg:function dJg(d,e){this.a=d
this.b=e},
dJl:function dJl(d){this.a=d},
dJf:function dJf(d,e){this.a=d
this.b=e},
dJm:function dJm(d,e){this.a=d
this.b=e},
dJe:function dJe(d,e){this.a=d
this.b=e},
dJn:function dJn(d){this.a=d},
dJd:function dJd(d,e){this.a=d
this.b=e},
dJo:function dJo(d){this.a=d},
dJc:function dJc(d){this.a=d},
dJp:function dJp(d){this.a=d},
dJb:function dJb(d){this.a=d},
dJq:function dJq(d){this.a=d},
dJr:function dJr(d){this.a=d},
dJa:function dJa(d){this.a=d},
bhU:function bhU(d,e,f){this.b=d
this.c=e
this.a=f},
TU:function TU(d){this.a=d},
aBb:function aBb(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
e3j:function e3j(d,e){this.a=d
this.b=e},
e3k:function e3k(d,e,f){this.a=d
this.b=e
this.c=f},
e3i:function e3i(d,e,f){this.a=d
this.b=e
this.c=f},
e3l:function e3l(d){this.a=d},
e3h:function e3h(d){this.a=d},
e3p:function e3p(d){this.a=d},
e3o:function e3o(d,e){this.a=d
this.b=e},
e3n:function e3n(d,e){this.a=d
this.b=e},
e3q:function e3q(d,e){this.a=d
this.b=e},
e3m:function e3m(d,e){this.a=d
this.b=e},
e3r:function e3r(d){this.a=d},
U6:function U6(d){this.a=d},
aBu:function aBu(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
ebW:function ebW(d){this.a=d},
ebX:function ebX(d){this.a=d},
ebU:function ebU(d,e){this.a=d
this.b=e},
ebV:function ebV(d){this.a=d},
ebT:function ebT(d){this.a=d},
ebY:function ebY(d){this.a=d},
ebZ:function ebZ(d){this.a=d},
ec_:function ec_(d){this.a=d},
ec0:function ec0(d,e){this.a=d
this.b=e},
Ur:function Ur(d){this.a=d},
bh6:function bh6(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eqd:function eqd(){},
eqm:function eqm(){},
eqi:function eqi(d){this.a=d},
eqh:function eqh(){},
eqj:function eqj(d,e){this.a=d
this.b=e},
eqg:function eqg(d,e){this.a=d
this.b=e},
eqk:function eqk(d){this.a=d},
eqf:function eqf(d,e){this.a=d
this.b=e},
eql:function eql(d){this.a=d},
eqe:function eqe(d){this.a=d},
TS:function TS(d){this.a=d},
bgz:function bgz(d,e,f,g,h,i,j,k){var _=this
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
_.kA$=g
_.fE$=h
_.fb$=i
_.bq$=j
_.a6$=k
_.c=_.a=null},
e1Z:function e1Z(){},
e2_:function e2_(){},
e1S:function e1S(d){this.a=d},
e1R:function e1R(d){this.a=d},
e1T:function e1T(d){this.a=d},
e1Q:function e1Q(d){this.a=d},
e1U:function e1U(d){this.a=d},
e1P:function e1P(d){this.a=d},
e1V:function e1V(d,e){this.a=d
this.b=e},
e1O:function e1O(d,e){this.a=d
this.b=e},
e1W:function e1W(d){this.a=d},
e1N:function e1N(d,e){this.a=d
this.b=e},
e1X:function e1X(d){this.a=d},
e1M:function e1M(d,e){this.a=d
this.b=e},
e1Y:function e1Y(d){this.a=d},
e1L:function e1L(d,e){this.a=d
this.b=e},
b9G:function b9G(d,e,f){this.c=d
this.d=e
this.a=f},
aIg:function aIg(){},
bt9:function bt9(){},
aIy:function aIy(){},
btd:function btd(){},
aJ2:function aJ2(){},
btn:function btn(){},
aJx:function aJx(){},
btz:function btz(){},
jx(d,e,f,g,h,i){return new B.b3n(h,d,f,g,i,e,null)},
h5O(d,e,f,g){var w=null
return C.cg(w,w,!0,w,new B.fxX(g,e,f),d,w,!0,!0,x.H)},
hp(d,e,f,g,h,i,j){return new B.at1(f,j,i,h,g,d,e,null)},
qk(d,e,f){return B.hRr(d,e,f)},
hRr(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qk=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aT.ag$.x.h(0,e)
n=n==null?null:n.gb6()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.lQ(2),$async$qk)
case 7:q=h
w=8
return C.b(q.hf(A.fN),$async$qk)
case 8:p=h
if(p==null){w=1
break}o=J.f3(A.dD.gaN(p))
w=9
return C.b(B.ckG(C.a([B.fVW(o,"image/png",f+".png")],x.E),"Made in NGMY Core Protocol"),$async$qk)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.H(x.gV).f.P(D.aIR)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qk,v)},
hnk(b4,b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=A.o.ak(22050*b5,1000),b1=b0*2,b2=new DataView(new ArrayBuffer(44+b1)),b3=new B.caq(b2)
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
w=new C.eX()
w.dQ(3)
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
q=D.clz
v=7
break
case"synth":r=D.cWZ
q=D.cYA
u=0.012
t=!0
break
case"flute":r=D.d1i
q=D.bXg
u=0.07
t=!0
s=0.035
break
default:r=D.ak5
q=D.ak5}b1=r.length
p=C.bZ(b1,0,!1,x.i)
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
break A}if(o){a4=A.k.G(d/6.283185307179586,1)*1.2-0.6
break A}a4=Math.sin(d)
break A}a5=a4*(Math.min(1,a0/120)*Math.pow(a2,1.6))}b2.setInt16(44+a0*2,A.o.D(A.k.U(a5*0.8*32e3),-32768,32767),!0)}return J.f3(A.dD.gaN(b2))},
dI(d,e,f,g,h,i){return B.hnl(d,e,f,g,h,i)},
hnl(d,e,f,g,h,i){var w=0,v=C.j(x.H),u=1,t=[],s,r,q,p,o,n
var $async$dI=C.e(function(j,k){if(j===1){t.push(k)
w=u}for(;;)switch(w){case 0:u=3
s=""+A.k.U(d)+"|"+f+"|"+i+"|"+C.t(g)+"|"+e
r=$.hnj.ce(0,s,new B.cas(d,f,i,g,e))
if($.cap.length<12){p=C.ag1()
p.Lo(A.aGW)
$.cap.push(p)}p=$.fTe
$.fTe=p+1
q=$.cap[A.o.G(p,$.cap.length)]
w=6
return C.b(J.haG(q,new C.a1d(r,null),h),$async$dI)
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
return C.i($async$dI,v)},
l1(d,e,f,g){var w,v=$.aZr
if(v==="music")return B.dI(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return B.dI(261.63*v,w,f,0,g,"sine")}return B.vg(v,e,f,g)},
vg(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return B.dI(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return B.dI(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return B.dI(140+A.o.G(e,12)*9,"",150,0.9,g,v)
case"bubble":return B.dI(260+A.o.G(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":B.dI(t,"",160,-0.7,g*0.4,w)
return B.dI(900,"",90,0,g*0.45,u)
case"zap":return B.dI(t*3,"",150,1.6,g*0.4,"square")
case"click":return B.dI(2600+A.o.G(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":B.dI(320,"",220,-0.7,g*0.35,v)
return B.dI(1500,"",200,0,g*0.22,u)
case"organic":return B.dI(85+A.o.G(e,12)*5,"",190,1.1,g,v)
case"lab":return B.dI(t*1.6,"",140,-0.3,g*0.55,w)
default:return B.dI(t,"",s,0,g*0.5,w)}},
AF(d,e,f,g){var w,v,u,t,s,r,q,p=$.aZr
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.K)(e),++w)B.l1(d,e[w],f,g)
return}for(p=C.df(e,0,C.dK(4,"count",x.S),C.U(e).c),v=p.$ti,p=new C.bU(p,p.gJ(0),v.k("bU<ai.E>")),u=x.H,v=v.k("ai.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)B.l1(d,s,f,g)
else C.bN(new C.b8(1000*q),new B.car(d,s,f,g),u)}},
a6c(d,e){var w="sine",v="noise"
switch(d){case"kick":B.dI(95,"",200,1.8,e,w)
break
case"snare":B.dI(220,"",140,0,e*0.65,v)
break
case"hat":B.dI(5000,"",50,0,e*0.35,v)
break
case"open":B.dI(5200,"",220,0,e*0.35,v)
break
case"clap":B.dI(1100,"",100,0,e*0.5,v)
break
case"tom":B.dI(150,"",230,1,e,w)
break
case"low":B.dI(100,"",260,0.9,e,w)
break
case"rim":B.dI(1700,"",60,0,e*0.4,"square")
break
case"cow":B.dI(820,"",240,0,e*0.3,"square")
break
case"crash":B.dI(3200,"",650,0,e*0.4,v)
break
case"shake":B.dI(7000,"",90,0,e*0.3,v)
break
default:B.dI(60,"",300,0,e,w)}},
yA(d){return B.hmz(d)},
hmz(d){var w=0,v=C.j(x.k),u,t=2,s=[],r,q,p,o,n,m,l
var $async$yA=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.ax(),$async$yA)
case 7:r=f
q=C.aS(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=C.T(x.N,x.z)
w=1
break}p=A.R.aE(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?C.a_(p,o,n):C.T(o,n)
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
return C.i($async$yA,v)},
vd(d,e){return B.hmA(d,e)},
hmA(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$vd=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ax(),$async$vd)
case 6:s=g
w=7
return C.b(s.aq("String","ngmy_play_progress_v1_"+d,A.R.al(e,null)),$async$vd)
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
return C.i($async$vd,v)},
b3n:function b3n(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cmB:function cmB(d){this.a=d},
cmC:function cmC(d,e){this.a=d
this.b=e},
fxX:function fxX(d,e,f){this.a=d
this.b=e
this.c=f},
fxW:function fxW(d){this.a=d},
dw:function dw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cmx:function cmx(d){this.a=d},
eF:function eF(d,e,f){this.c=d
this.d=e
this.a=f},
at1:function at1(d,e,f,g,h,i,j,k){var _=this
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
cmw:function cmw(d){this.a=d},
E1:function E1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cmD:function cmD(d){this.a=d},
me:function me(){},
cmy:function cmy(d,e,f){this.a=d
this.b=e
this.c=f},
cmA:function cmA(d){this.a=d},
cmz:function cmz(){},
caq:function caq(d){this.a=d},
cas:function cas(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
car:function car(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cp7(){var w=0,v=C.j(x.cL),u,t
var $async$cp7=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=B
w=3
return C.b($.tv().baO("assets/data/world110.json"),$async$cp7)
case 3:u=t.hr5(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cp7,v)},
hr5(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.a,a0=d.a(A.R.aE(0,a2,null)),a1=C.a([],x.D)
for(w=J.aV(a0),v=x.n,u=x.b,t=x.k,s=x.gO;w.C();){r=t.a(w.gT(w))
q=C.a([],s)
for(p=J.a7(r),o=J.aV(d.a(p.h(r,"r")));o.C();){n=o.gT(o)
m=C.a([],u)
for(l=J.aV(d.a(n));l.C();){k=l.gT(l)
j=J.a7(k)
m.push(C.a([C.fc(j.h(k,0)),C.fc(j.h(k,1))],v))}q.push(m)}o=C.cJ(p.h(r,"n"))
m=C.cJ(p.h(r,"a"))
l=C.cJ(p.h(r,"ct"))
j=C.cJ(p.h(r,"sr"))
i=C.fc(p.h(r,"pop"))
h=C.fc(p.h(r,"gdp"))
g=C.cJ(p.h(r,"inc"))
f=C.ae("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aNk(g,f,"",0)
f=C.fc(J.q(p.h(r,"c"),0))
p=C.fc(J.q(p.h(r,"c"),1))
e=new B.a8T(o,m,l,j,i,h,g,f,p,q)
e.bsC(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new B.a8U(a1)},
fcc(d){if(d>=1e12)return A.k.aa(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.aa(d/1e9,2)+" billion"
if(d>=1e6)return A.k.aa(d/1e6,1)+" million"
if(d>=1000)return A.k.aa(d/1000,1)+" thousand"
return A.k.aa(d,0)},
Fs(d){var w,v,u,t=A.o.u(A.k.U(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.G(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
a8T:function a8T(d,e,f,g,h,i,j,k,l,m){var _=this
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
a8U:function a8U(d){this.a=d},
uq:function uq(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
Nv:function Nv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
xe:function xe(d,e,f){this.a=d
this.b=e
this.c=f},
Nu:function Nu(d){this.a=0
this.b=d
this.c=0},
hsZ(d,e,f){return $.ht_.ce(0,d+"|"+C.t(e)+"|"+f.l(),new B.d5S(d,e,f))},
To:function To(d){this.a=d},
aAz:function aAz(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.kA$=k
_.fE$=l
_.fb$=m
_.bq$=n
_.a6$=o
_.c=_.a=null},
dOB:function dOB(d){this.a=d},
dOA:function dOA(d,e){this.a=d
this.b=e},
dO3:function dO3(d){this.a=d},
dO1:function dO1(d){this.a=d},
dO2:function dO2(d,e,f){this.a=d
this.b=e
this.c=f},
dO0:function dO0(d){this.a=d},
dO_:function dO_(){},
dNZ:function dNZ(d){this.a=d},
dOm:function dOm(d,e){this.a=d
this.b=e},
dOn:function dOn(d,e){this.a=d
this.b=e},
dOb:function dOb(d){this.a=d},
dOc:function dOc(d){this.a=d},
dOa:function dOa(d){this.a=d},
dOd:function dOd(d){this.a=d},
dO4:function dO4(d,e){this.a=d
this.b=e},
dO5:function dO5(d){this.a=d},
dOo:function dOo(d,e){this.a=d
this.b=e},
dO9:function dO9(d,e){this.a=d
this.b=e},
dOs:function dOs(d){this.a=d},
dOl:function dOl(d){this.a=d},
dOt:function dOt(d,e){this.a=d
this.b=e},
dOk:function dOk(d,e){this.a=d
this.b=e},
dOu:function dOu(d){this.a=d},
dOj:function dOj(d,e){this.a=d
this.b=e},
dOv:function dOv(d){this.a=d},
dOi:function dOi(d,e){this.a=d
this.b=e},
dOw:function dOw(d){this.a=d},
dOh:function dOh(d,e){this.a=d
this.b=e},
dOx:function dOx(d){this.a=d},
dOg:function dOg(d,e){this.a=d
this.b=e},
dOy:function dOy(d){this.a=d},
dOf:function dOf(d){this.a=d},
dOz:function dOz(d){this.a=d},
dOe:function dOe(d){this.a=d},
dOp:function dOp(d){this.a=d},
dO8:function dO8(d){this.a=d},
dOq:function dOq(d){this.a=d},
dO7:function dO7(d){this.a=d},
dOr:function dOr(d){this.a=d},
dO6:function dO6(d){this.a=d},
dNY:function dNY(){},
dNX:function dNX(d){this.a=d},
dNW:function dNW(d){this.a=d},
bbU:function bbU(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d5S:function d5S(d,e,f){this.a=d
this.b=e
this.c=f},
d5T:function d5T(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aIE:function aIE(){},
aIF:function aIF(){},
acT(d,e,f,g,h){return new B.bq3(d,e,f,g,h)},
bq3:function bq3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f1l:function f1l(){},
f1m:function f1m(){},
f1n:function f1n(){},
f1o:function f1o(){},
f1p:function f1p(){},
f1q:function f1q(){},
f1r:function f1r(){},
Uu:function Uu(d){this.a=d},
bh9:function bh9(){this.d=$
this.c=this.a=null},
er_:function er_(d){this.a=d},
er0:function er0(d){this.a=d},
eqZ:function eqZ(d){this.a=d},
er1:function er1(){},
eqY:function eqY(d,e){this.a=d
this.b=e},
eqX:function eqX(d){this.a=d},
htq(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.eX()
v.dQ(w)
t.push(v.ae()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.eX()
v.dQ(w+900)
u.push(2.2+v.ae())}return new B.bgX(new C.co(null,x.A),new B.Nu(A.cB),A.J,A.at,t,u,$,A.bw,0,C.a([],x.X),null,null)},
hts(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
htr(d){return 1.5+1.6*Math.log(d.d/1000+1)},
fX7(d,e,f){return $.hu1.ce(0,d+"|"+C.t(e)+"|"+f.l(),new B.eKO(d,e,f))},
Uf:function Uf(d){this.a=d},
bgX:function bgX(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.kA$=k
_.fE$=l
_.fb$=m
_.bq$=n
_.a6$=o
_.c=_.a=null},
ej9:function ej9(d,e){this.a=d
this.b=e},
ejk:function ejk(d,e){this.a=d
this.b=e},
ejl:function ejl(d,e){this.a=d
this.b=e},
ejh:function ejh(d){this.a=d},
eji:function eji(d){this.a=d},
ejj:function ejj(d){this.a=d},
ejm:function ejm(d){this.a=d},
ejg:function ejg(d){this.a=d},
ejn:function ejn(d,e){this.a=d
this.b=e},
ejo:function ejo(d){this.a=d},
ejf:function ejf(d,e){this.a=d
this.b=e},
ejp:function ejp(d){this.a=d},
eje:function eje(d,e){this.a=d
this.b=e},
ejq:function ejq(d){this.a=d},
ejd:function ejd(d){this.a=d},
ejr:function ejr(d){this.a=d},
ejc:function ejc(d){this.a=d},
ejs:function ejs(d){this.a=d},
ejb:function ejb(d){this.a=d},
ejt:function ejt(d){this.a=d},
eja:function eja(d){this.a=d},
ej8:function ej8(){},
ej7:function ej7(){},
ej6:function ej6(d){this.a=d},
ej5:function ej5(d){this.a=d},
bo8:function bo8(d,e){this.b=d
this.a=e},
eKO:function eKO(d,e,f){this.a=d
this.b=e
this.c=f},
eKP:function eKP(){},
eKQ:function eKQ(){},
Tp:function Tp(d){this.a=d},
aAA:function aAA(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.kA$=l
_.fE$=m
_.fb$=n
_.bq$=o
_.a6$=p
_.c=_.a=null},
dOF:function dOF(){},
dP7:function dP7(){},
dOU:function dOU(d,e){this.a=d
this.b=e},
dOL:function dOL(d,e){this.a=d
this.b=e},
dOV:function dOV(d){this.a=d},
dOK:function dOK(d){this.a=d},
dOW:function dOW(d){this.a=d},
dOT:function dOT(d){this.a=d},
dP_:function dP_(d){this.a=d},
dOS:function dOS(d){this.a=d},
dP0:function dP0(d){this.a=d},
dOR:function dOR(d,e){this.a=d
this.b=e},
dP1:function dP1(d){this.a=d},
dP2:function dP2(d){this.a=d},
dOQ:function dOQ(d,e){this.a=d
this.b=e},
dP3:function dP3(d){this.a=d},
dOP:function dOP(d,e){this.a=d
this.b=e},
dP4:function dP4(d){this.a=d},
dOO:function dOO(d,e){this.a=d
this.b=e},
dP5:function dP5(d){this.a=d},
dON:function dON(d,e){this.a=d
this.b=e},
dP6:function dP6(d){this.a=d},
dOM:function dOM(d){this.a=d},
dOX:function dOX(d){this.a=d},
dOJ:function dOJ(d){this.a=d},
dOY:function dOY(d){this.a=d},
dOI:function dOI(d){this.a=d},
dOZ:function dOZ(d){this.a=d},
dOH:function dOH(d){this.a=d},
dOE:function dOE(d){this.a=d},
dOD:function dOD(){},
dOG:function dOG(d,e){this.a=d
this.b=e},
dOC:function dOC(d){this.a=d},
b79:function b79(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
U7:function U7(d){this.a=d},
bgU:function bgU(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.fa$=e
_.kA$=f
_.fE$=g
_.fb$=h
_.bq$=i
_.a6$=j
_.c=_.a=null},
ec3:function ec3(d,e){this.a=d
this.b=e},
ec4:function ec4(d,e){this.a=d
this.b=e},
ec2:function ec2(d,e){this.a=d
this.b=e},
ec5:function ec5(d,e){this.a=d
this.b=e},
ec1:function ec1(d,e){this.a=d
this.b=e},
bnH:function bnH(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eIY:function eIY(d){this.a=d},
aIG:function aIG(){},
btf:function btf(){},
aJf:function aJf(){},
btt:function btt(){},
aJi:function aJi(){},
btv:function btv(){},
hto(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.eX()
v.dQ(w)
v=v.ae()
u=new C.eX()
u.dQ(w+500)
s.push(new C.u(v,u.ae()))}return new B.bfC(new C.co(null,x.A),new B.Nu(A.cB),t,A.at,s,$,A.bw,0,C.a([],x.X),null,null)},
NX:function NX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
St:function St(d){this.a=d},
bfC:function bfC(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.kA$=j
_.fE$=k
_.fb$=l
_.bq$=m
_.a6$=n
_.c=_.a=null},
dxb:function dxb(){},
dx_:function dx_(){},
dx0:function dx0(d,e){this.a=d
this.b=e},
dx1:function dx1(d,e){this.a=d
this.b=e},
dwZ:function dwZ(d){this.a=d},
dwY:function dwY(d){this.a=d},
dx3:function dx3(d){this.a=d},
dwX:function dwX(d,e){this.a=d
this.b=e},
dx4:function dx4(d){this.a=d},
dwW:function dwW(d){this.a=d},
dx5:function dx5(d){this.a=d},
dwV:function dwV(d){this.a=d},
dx6:function dx6(d){this.a=d},
dwU:function dwU(d){this.a=d},
dx7:function dx7(d){this.a=d},
dwT:function dwT(d){this.a=d},
dx8:function dx8(d){this.a=d},
dwS:function dwS(d){this.a=d},
dx9:function dx9(d){this.a=d},
dwR:function dwR(d){this.a=d},
dxa:function dxa(d){this.a=d},
dwQ:function dwQ(d){this.a=d},
dx2:function dx2(d){this.a=d},
dwP:function dwP(d){this.a=d},
b6y:function b6y(d,e){this.b=d
this.a=e},
acx:function acx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Tl:function Tl(d){this.a=d},
bg0:function bg0(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.kA$=q
_.fE$=r
_.fb$=s
_.bq$=t
_.a6$=u
_.c=_.a=null},
dNc:function dNc(d){this.a=d},
dN2:function dN2(d,e){this.a=d
this.b=e},
dN3:function dN3(d,e){this.a=d
this.b=e},
dN1:function dN1(d,e){this.a=d
this.b=e},
dN4:function dN4(d){this.a=d},
dN0:function dN0(d){this.a=d},
dN5:function dN5(d){this.a=d},
dN_:function dN_(d,e){this.a=d
this.b=e},
dN6:function dN6(d){this.a=d},
dMZ:function dMZ(d,e){this.a=d
this.b=e},
dN7:function dN7(d){this.a=d},
dMY:function dMY(d,e){this.a=d
this.b=e},
dN8:function dN8(d){this.a=d},
dMX:function dMX(d,e){this.a=d
this.b=e},
dN9:function dN9(d){this.a=d},
dMW:function dMW(d){this.a=d},
dNa:function dNa(d){this.a=d},
dMV:function dMV(d){this.a=d},
dNb:function dNb(d){this.a=d},
dMU:function dMU(d){this.a=d},
bbK:function bbK(d,e){this.b=d
this.a=e},
d30:function d30(d){this.a=d},
U3:function U3(d){this.a=d},
bgT:function bgT(d,e,f,g,h,i,j,k){var _=this
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
_.kA$=g
_.fE$=h
_.fb$=i
_.bq$=j
_.a6$=k
_.c=_.a=null},
ebK:function ebK(d,e){this.a=d
this.b=e},
ebL:function ebL(d){this.a=d},
ebJ:function ebJ(d){this.a=d},
ebM:function ebM(d){this.a=d},
ebI:function ebI(d){this.a=d},
ebN:function ebN(d){this.a=d},
ebH:function ebH(d){this.a=d},
ebO:function ebO(d){this.a=d},
ebG:function ebG(d){this.a=d},
ebP:function ebP(d){this.a=d},
ebF:function ebF(d,e){this.a=d
this.b=e},
ebQ:function ebQ(d){this.a=d},
ebE:function ebE(d,e){this.a=d
this.b=e},
ebR:function ebR(d){this.a=d},
ebD:function ebD(d,e){this.a=d
this.b=e},
ebS:function ebS(d){this.a=d},
ebC:function ebC(d,e){this.a=d
this.b=e},
bmZ:function bmZ(d,e){this.b=d
this.a=e},
aId:function aId(){},
bt8:function bt8(){},
aIB:function aIB(){},
bte:function bte(){},
aJe:function aJe(){},
bts:function bts(){},
fVW(d,e,f){var w,v
C.fK(0,0,!1)
w=new C.l5(e,f,$,null)
v=w.bCu(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
ckG(d,e){var w=0,v=C.j(x.fA),u
var $async$ckG=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.fKD().wh(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$ckG,v)}},D,K,G,O,V,Aa,Y,Ab,Ac,Z,Ad
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
R=c[100]
A4=c[64]
U=c[73]
A5=c[81]
Q=c[84]
A6=c[115]
A7=c[107]
S=c[87]
M=c[89]
T=c[110]
A8=c[68]
A9=c[106]
P=c[91]
I=c[104]
E=c[93]
B=a.updateHolder(c[17],B)
D=c[85]
K=c[99]
G=c[39]
O=c[97]
V=c[95]
Aa=c[114]
Y=c[90]
Ab=c[98]
Ac=c[105]
Z=c[112]
Ad=c[94]
B.aht.prototype={}
B.TB.prototype={
S(){return new B.bgm(C.T(x.N,x.i),new C.ap(A.as,$.av()),C.a([],x.X),C.a([],x.L),C.mb(0,null,null))}}
B.bgm.prototype={
gUc(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
p(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
this.ch.p()
this.a2()},
LT(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$LT=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aT.ag$.d.c
if(s!=null)s.jf()
p.bJ(0,A.c0)
t.n(new B.dVT(t))
t.a.toString
p=t.gUc()
w=3
return C.b(B.bvt(B.hve(q,B.hGu(p),o,t.ay)),$async$LT)
case 3:s=e
r=s==null?null:J.iN(s)
if(r==null||r.length===0||A.a.a_(r,"{"))r=B.hHQ(q,p,o)
if(t.c==null){w=1
break}t.n(new B.dVU(t,o,r))
$.aT.x1$.push(new B.dVV(t))
case 1:return C.h(u,v)}})
return C.i($async$LT,v)},
Wa(d){return this.bSY(d)},
aRv(){return this.Wa(null)},
bSY(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Wa=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aT.ag$.d.c
if(s!=null)s.jf()
t.f.saU(0,o)
t.n(new B.dW5(t))
B.dI(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=B
w=3
return C.b(B.bvt(B.hBK(o)),$async$Wa)
case 3:r=n.a=m.hPB(f)
p.b=""
if(r!=null&&!B.hGv(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=B.hHR(o)
q=C.ae(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new B.aht(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.n(new B.dW6(p,t))
t.bY4(p.a)
case 1:return C.h(u,v)}})
return C.i($async$Wa,v)},
bY4(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
A.d.a7(w)
w=++m.as
v=m.gUc()
A.d.a7(v.a)
A.d.a7(v.b)
m.e.a7(0)
m.n(new B.dW1(m))
t=d.d
s=C.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new B.dW_(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new B.dW2(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.K)(r),++u){p.$2(o,new B.dW3(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new B.dW4(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bC.j(0.1),g=C.m(16),f=C.H(A.bC.j(0.35),A.r,1)
if(m.x)j=C.B(C.a([D.etV,A.bd,C.D(C.d(m.Q,l,l,l,l,l,l,A.QQ,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.eSr
else{w=C.D(C.d(k.a,l,l,l,l,l,l,A2.Ra,l,l,l),1)
v=x.p
w=C.a([C.B(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.eE9,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.C(A.uj,C.d(u,l,l,l,l,l,l,D.eGI,l,l,l),l))
w.push(A.d6)
w.push(C.d(k.b,l,l,l,l,l,l,D.Rh,l,l,l))
u=k.e
if(u.length!==0){t=A.aL.j(0.12)
s=C.m(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.eIX,l,l,l),A.h,l,l,new C.o(t,l,l,s,l,l,A.n),l,l,l,A.ir,A.ch,l,l,l))}w.push(A.ar)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aA
w.push(new C.C(A.JR,new C.cC(A.b0,A.e,A.j,A.F,l,A.p,l,0,C.a([new C.w(t,l,A.mZ,l,l,l,l,l,l,l,l,l),A.bo,new C.bH(1,A.br,new C.w(q,l,new C.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.K)(j),++p){o=j[p]
t=new C.b1(12,12)
s=new C.b1(12,12)
A.d.v(w,C.a([A.P,new C.bI(A.a7,l,l,C.p(l,new C.w(o.a,l,A.a4b,l,l,l,l,l,l,l,l,l),A.h,l,l,new C.o(A.bC.j(0.3),l,l,new C.bv(t,t,t,t),l,l,A.n),l,l,l,l,A.fK,l,l,l),l),A.av,C.p(l,new C.w(o.b,l,D.eOa,l,l,l,l,l,l,l,l,l),A.h,l,l,new C.o(A.c.j(0.07),l,l,new C.bv(s,s,s,s),l,l,A.n),l,l,l,l,A.bS,l,l,l)],v))}if(m.ax)w.push(D.dPI)
j=C.ci(C.v(w,A.F,l,A.e,A.j,0,A.p),A.q,m.ch,A.z,l,l,l,l,A.ak)}w=x.p
g=C.v(C.a([C.afI(C.p(l,j,A.h,l,new C.aX(0,1/0,0,i),new C.o(h,l,f,g,l,l,A.n),l,l,l,D.bfY,A.ek,l,l,1/0),A.b9,A.i2),C.D(B.fMq(m.gUc(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new B.dw("Ask about it",i,new B.dW9(m),l,A.bC,l),new B.dw("Invent something new",!i,new B.dWa(m),l,A.bC,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.cXw[p]
i.push(new B.dw(n,!1,new B.dWb(m,n),l,A.bC,l))}f.push(new B.eF(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.cIA[p]
i.push(new B.dw(r,!1,new B.dWc(m,r),l,A.bC,l))}f.push(new B.eF(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=C.D(C.aK(l,A.U,!1,l,!0,A.q,l,C.aL(),m.f,l,l,l,l,l,2,C.bn(l,new C.b3(4,C.m(16),A.X),l,A.eM,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kj,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.ah,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new B.dWd(m,k),l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,A.di,!0,A.a5,l,A.am,l,A.aJy,l,l),1)
h=m.at
v=h&&j?D.bsh:A.dP
j=h&&j?"Ask":"Invent"
f.push(C.B(C.a([i,A.aa,new B.ff(v,j,new B.dWe(m,k),A.bC,l)],w),A.m,l,A.e,A.j,0,l,l))
return B.jx(A.bC,A.fY,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.v(f,A.m,l,A.e,A.Q,0,A.p))}}
B.EL.prototype={}
B.ud.prototype={}
B.U2.prototype={
S(){return new B.aBq(A.J,A.J,A.at,C.aZ(x.S),$,A.bw,0,C.a([],x.X),null,null)}}
B.aBq.prototype={
gaSD(){var w,v,u,t=this,s=D.Fu[t.cx],r=D.Oe[t.cy],q=D.AM[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ef(w,w.r,C.a2(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.ar_[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cG(p,0,new B.eao())},
ga0b(){return D.Fu[this.cx].d/this.gaSD()},
gaKh(){return 0.1*(D.Fu[this.cx].d/0.9)/D.Oe[this.cy].d},
Z(){this.a0()
this.kM()
B.yA("rocket_lander").bx(new B.eaI(this),x.P)},
bYc(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cB.ae()*0.6
w.f=new C.u(0.15+A.cB.ae()*0.7,0.08)
w.r=new C.u((A.cB.ae()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
l4(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.n(new B.eaJ())
return}w=D.qx[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.u(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga0b()
v=v.ao(0,new C.u(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaKh())}if(m.dy){t=m.r
v=v.aD(0,t.aM(0,t.gcj()*6*D.asG[m.d]))}t=m.r=m.r.ao(0,v.aM(0,d))
s=m.f=m.f.ao(0,t.aM(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new C.u(-t.a*0.4,t.b)
t=new C.u(A.k.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new C.u(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.AM[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
B.vd("rocket_lander",C.E(["unlocked",t],x.N,x.z))
B.AF("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga0b()/(D.qx[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.aa(m.ga0b()/(D.qx[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
B.dI(80,"",500,0,0.6,"noise")
C.fW()}}if(m.Q&&m.x>0&&A.o.G(A.k.bw(m.CW*20),2)===0)B.dI(90,"",70,0,0.12,"noise")
m.n(new B.eaK())},
acY(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.eGf,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new B.dw(e[w].a,f.$1(w),new B.eaq(this,g,w),v,h,v))
return new C.C(A.fq,C.v(C.a([u,A.d6,C.c8(A.bJ,s,A.bx,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bxP(d){var w,v,u,t,s=this,r=null,q=s.ga0b()/(D.qx[s.d].b/9.81*0.28)>=1,p=A.k.U(1/s.gaKh()),o=D.asG[s.d],n=C.m(24),m=d.c,l=C.H(m.j(0.6),A.r,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.av,C.d(d.d+" Gravity here: "+C.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,D.aKF,r,r,r),A.T,s.acY("ENGINE: "+D.Fu[s.cx].b,D.Fu,new B.eaf(s),new B.eag(s),A.cQ),s.acY("FUEL TANK: "+D.Oe[s.cy].b,D.Oe,new B.eah(s),new B.eai(s),A.bh),s.acY("LANDING GEAR: "+D.AM[s.db].b,D.AM,new B.eaj(s),new B.eak(s),A.aX),s.acY("EXTRAS (tap to add)",D.ar_,new B.eal(s),new B.eam(s),A.bC)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.f89)
o=(q?A.bh:A.cF).j(0.14)
w=C.m(12)
v=A.k.aa(s.gaSD(),2)
u=A.k.aa(s.ga0b()/(D.qx[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.U(D.AM[s.db].d*100)+".",r,r,r,r,r,r,D.eGO,r,r,r),A.h,r,r,new C.o(o,r,r,w,r,r,A.n),r,r,r,A.ir,A.bS,r,r,r))
m.push(A.T)
m.push(new C.bI(A.A,r,r,new B.ff(A.mK,"Launch",new B.ean(s),A.bh,r),r))
return C.au(C.p(r,C.ci(C.v(m,A.F,r,A.e,A.Q,0,A.p),A.q,r,A.z,r,A.c3,r,r,A.ak),A.h,r,A.lf,new C.o(D.b7K,r,l,n,r,r,A.n),r,r,r,A.bS,r,r,r,r),r,r,r)},
aTJ(d,e,f,g){var w=null,v=f?A.cQ:A.c.j(0.1),u=C.m(18),t=C.H(A.ba,A.r,1)
return C.pi(A.jJ,C.p(w,C.V(d,A.c,w,w,w,30),A.h,w,w,new C.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new B.eac(e),new B.ead(e),w,w,w,w,new B.eae(e))},
aTI(d,e,f){return this.aTJ(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.ck(new B.eaB(s,D.qx[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.qx[w].a:"\ud83d\udd12"
o.push(new B.dw(v,s.d===w,new B.eaC(s,w),r,D.qx[w].c,r))}v=C.a([s.aTI(D.bso,new B.eaD(s),s.y),A.bd,s.aTJ(A.uE,new B.eaE(s),s.Q,130),A.bd,s.aTI(A.Y7,new B.eaF(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aX:A.c.j(0.1)
t=C.m(18)
A.d.v(v,C.a([A.bd,C.aH(r,C.p(r,D.bws,A.h,r,r,new C.o(u,r,C.H(A.ba,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.eaG(s),r,r,r,r,r,r,!1,A.ad)],p))}return B.jx(A.cQ,A.fY,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.v(C.a([new B.eF(o,"WORLD",r),C.B(v,A.m,r,A.b6,A.j,0,r,r)],p),A.m,r,A.e,A.Q,0,A.p))}}
B.bdp.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.qx[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.Y(),d=C.L(),a0=j.c,a1=C.aq(D.ba0,a0,0.25)
a1.toString
d.sap(new C.a3(A.aY,A.b1,A.w,C.a([D.b2R,a1],x.O),l,l).au(0,new C.a9(0,0,g,f)))
a2.b2(new C.a9(0,0,g,f),d)
w=new C.eX()
w.dQ(5)
for(g=a2.a,v=0;v<70;++v){f=w.ae()
d=w.ae()
a1=w.ae()
u=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
u.r=A.c.j(0.2+w.ae()*0.5).gq(0)
t=u.I()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=C.a([],f)
r=new C.aQ(e.r,A.aq,l,l,d)
r.E(new C.b5(0,s+14))
q=new C.eX()
q.dQ(2)
for(p=0;p<=i;p+=18){e=new C.ao(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.ae()*18))
d.push(e)
a1=r.f
if(a1!=null)e.by(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.E(new C.ao(i,h))
r.E(new C.ao(0,h))
r.E(new C.bE())
e=$.Y()
d=C.L()
d.r=C.aq(a0,A.x,0.6).gq(0)
a2.aO(r,d)
o=C.cN(new C.u(k.ax*i,s+10),8,k.ay*i)
d=C.bF(o,A.j9)
a0=C.L()
a0.r=A.bm.gq(0)
a2.aK(d,a0)
a0=C.bF(o.cD(2),A.tC)
d=C.L()
d.b=A.ae
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gq(0)
a2.aK(a0,d)
if(k.as==="ready")return
d=k.f
J.bB(g.save())
g.translate(d.a*i,d.b*h)
a2.iT(0,k.w)
i=k.as
if(i==="crashed"){k=C.L()
k.r=A.cQ.j(0.6).gq(0)
k.z=S.G_
a2.af(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new C.aQ(i,A.aq,l,l,C.a([],f))
n.E(new C.b5(-8,18))
n.E(new C.ao(0,44+Math.sin(k.CW*40)*8))
n.E(new C.ao(8,18))
n.E(new C.bE())
k=C.L()
k.r=A.aL.gq(0)
a2.aO(n,k)
i=new C.aQ(i,A.aq,l,l,C.a([],f))
i.E(new C.b5(-4,18))
i.E(new C.ao(0,32))
i.E(new C.ao(4,18))
i.E(new C.bE())
k=C.L()
k.r=A.c.gq(0)
a2.aO(i,k)}k=e.r
m=new C.aQ(k,A.aq,l,l,C.a([],f))
m.E(new C.b5(0,-26))
m.E(new C.d0(14,-10,11,18))
m.E(new C.ao(-11,18))
m.E(new C.d0(-14,-10,0,-26))
m.E(new C.bE())
i=C.L()
i.sap(D.bHP.au(0,D.enq))
a2.aO(m,i)
i=C.L()
i.r=A.aX.gq(0)
a2.af(D.v7,5,i)
i=new C.aQ(k,A.aq,l,l,C.a([],f))
i.E(new C.b5(-11,6))
i.E(new C.ao(-20,20))
i.E(new C.ao(-11,18))
i.E(new C.bE())
h=C.L()
h.r=A.aE.gq(0)
a2.aO(i,h)
f=new C.aQ(k,A.aq,l,l,C.a([],f))
f.E(new C.b5(11,6))
f.E(new C.ao(20,20))
f.E(new C.ao(11,18))
f.E(new C.bE())
k=C.L()
k.r=A.aE.gq(0)
a2.aO(f,k)
g.restore()},
ar(d){return!0}}
B.aJc.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.btr.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bqf()}}
B.aOZ.prototype={}
B.a17.prototype={}
B.b6B.prototype={}
B.Su.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.eN(["skin"],x.N),o=new Float32Array(0)
return new B.azS(w,v,u,t,s,r,q,new C.co(null,x.A),p,D.Im,D.Im,A.at,A.cB,o,new Int32Array(0),$,A.bw,0,C.a([],x.X),null,null)}}
B.azS.prototype={
Z(){var w=this
w.a0()
w.kM()
w.as=new B.bWB(w.gc4I())
new B.dxD(w).$0()
return},
p(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a9(0)
v.d=null}this.bpg()},
c4J(d){var w,v=this
if(v.c==null)return
w=J.a7(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eM(0,C.E(["t","init","data",$.fWa],x.N,x.z))
v.at=!0
v.ax=""
v.avf()
break
case"pick":v.n(new B.dxf(v,d))
break
case"shot":v.aeQ(C.t(w.h(d,"data")))
break
case"error":$.al.$1("[body viewer] "+C.t(w.h(d,"text")))
break}},
avf(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.ap0[q.CW]
v=new B.dxg()
u=q.ay
u=C.z(u,C.a2(u).k("cl.E"))
A.d.fz(u)
t=x.N
s=C.E(["layers",u,"skinMode",q.ch,"tone","#"+C.t(v.$1(w.b))+C.t(v.$1(w.c))+C.t(v.$1(w.d)),"sel",q.cx,"bpm",A.k.U(q.k3),"spin",q.fy],t,x.cK)
r=A.R.al(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.T(t,x.z)
u.m(0,"t","state")
u.v(0,s)
v.eM(0,u)}},
aeQ(d){return this.ckX(d)},
ckX(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aeQ=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cw.aG(A.a.aX(d,A.a.cP(d,",")+1))
w=6
return C.b(B.ckG(C.a([B.fVW(r,"image/png","body.png")],x.E),"Made in NGMY Core Protocol"),$async$aeQ)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.H(x.gV).f.P(D.aIR)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$aeQ,v)},
auI(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
l4(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bw(w)!==A.k.bw(v.ok)){B.a6c("kick",0.4)
v.a2J(170,new B.dxE())}v.ok=w
return},
aeF(d){var w,v,u,t,s=this
s.n(new B.dxh(s,d))
if(d==null){s.fx=D.Im
s.dy=1
w=s.as
if(w!=null)w.eM(0,C.E(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.U(w).k("a4<1>")
u=C.z(new C.a4(w,new B.dxi(d),v),v.k("G.E"))
t=A.d.gL(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.K(0,t)
if(s.ch===2)s.ch=1}s.avf()
w=s.as
if(w!=null)w.eM(0,C.E(["t","focus","group",d],x.N,x.z))
s.go=0
s.cnj(t,d)
return},
cnj(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){B.a6c("kick",0.8)
this.a2J(260,new B.dxj())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")B.dI(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a2J(w*70,new B.dxk(this))
else if(A.a.t(e,"intestine")||e==="Stomach")B.dI(110,"",360,0.7,0.3,"saw")
else B.vg("organic",6+A.o.G(e.length,8),200,0.6)
break
case"bone":B.dI(210+e.length*4,"",80,0.6,0.55,"tri")
B.dI(2400,"",20,0,0.3,v)
break
case"muscle":B.dI(70,"",150,1,0.6,"sine")
break
case"vessel":B.dI(300,"",380,0.4,0.22,v)
B.a6c("kick",0.3)
break
default:B.vg("organic",2+A.o.G(e.length,6),200,0.4)}},
crB(d){this.n(new B.dxm(this,d))},
aU0(){var w,v,u,t,s,r,q,p=this,o=C.aZ(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(p.auI(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.K(0,s.a)}q=C.z(o,o.$ti.k("cl.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aB(w)]
p.p4=""},
bOC(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.n(new B.dxc(u,w,d))
v=x.t
B.AF("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a2J(1100,new B.dxd(u))
return}if(d==null){if(u.cx!=null)u.aeF(null)
return}u.aeF(d)},
bSh(d,e){var w,v=this,u=null,t=C.m(18),s=C.H(A.bU.j(0.5),A.r,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.eCO,u,u,u)}else if(d==null||e==null)w=D.eQ6
else{w=x.p
w=C.B(C.a([C.D(C.v(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.ja,u,u,u),A.d6,C.d(e.b,u,u,u,u,u,u,D.Rh,u,u,u)],w),A.F,u,A.e,A.Q,0,A.p),1),C.aF(u,u,u,u,D.byP,u,u,u,new B.dxe(v),u,u,u,u,"Back to the whole body",A.c8)],w),A.F,u,A.e,A.j,0,u,u)}return C.p(u,w,A.h,u,u,new C.o(D.Tm,u,s,t,u,u,A.n),u,u,u,u,F.acR,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.d6q.h(0,g)
i.avf()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.cRj
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(i.auI(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aF(h,h,h,h,D.m7,h,h,h,new B.dxt(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bF:C.CJ(h,A.pt,q)}else q=A.kf
q=C.v(C.a([C.D(q,1),new C.C(D.bfZ,i.bSh(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.cJV[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new B.dw(l,n,new B.dxu(i,o),o.c,A.bU,h))}p=C.a([new B.eF(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.K)(w),++s){k=w[s]
n.push(new B.dw(k,k===i.cx,new B.dxv(i,k),h,A.aL,h))}p.push(new B.eF(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(B.hp(A.cF,""+A.k.U(n)+" beats/min","Heart rate",180,40,new B.dxw(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new B.E1(D.ap0[j],i.CW===j,new B.dxx(i,j),!1,h))
p.push(new B.eF(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new B.dw("Spin",n,new B.dxy(i),D.afT,A.aX,h),new B.ff(A.jM,"Reset view",new B.dxz(i),A.c,h),new B.dw(l,m,new B.dxA(i),A.EJ,A.aL,h)],v)
if(t.t(0,"organ"))v.push(new B.dw("Heartbeat sound",i.k4,new B.dxB(i),A.ny,A.cF,h))
p.push(new B.eF(v,h,h))
return B.jx(A.bU,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.v(p,A.m,h,A.e,A.Q,0,A.p))}}
B.aIe.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.aIf.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpf()}}
B.bWB.prototype={
k9(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aJ(e,"</script","<\\/script")
v=$.h15
$.h15=v+1
u="ngmy-body-viewer-"+v
$.xO()
$.pK().p8(u,new B.bWC(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fC(v,"message",new B.bWD(t),!1,x.gA)
t.b=u},
eM(d,e){var w,v
try{w=this.c
if(w!=null){w=C.bvq(w.contentWindow)
if(w!=null)J.fzk(w,e,"*")}}catch(v){}}}
B.xg.prototype={}
B.Bf.prototype={}
B.mZ.prototype={}
B.b7j.prototype={}
B.Sz.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new B.azV(C.T(w,x.a2),C.a([],x.cB),C.T(w,v),C.T(w,v),C.T(w,u),A.at,A.J,A.J,C.aZ(u),$,A.bw,0,C.a([],x.X),null,null)}}
B.azV.prototype={
Z(){var w=this
w.a0()
w.kM()
w.a9P()
$.aT.x1$.push(new B.dzO(w))},
a9P(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$a9P=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ax(),$async$a9P)
case 6:q=e.rn("ngmy_circuit_passed_v1")
r=q==null?A.U:q
if(s.c!=null)s.n(new B.dzs(s,r))
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
return C.i($async$a9P,v)},
aa8(d){return this.bVT(d)},
bVT(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$aa8=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.K(0,d)
u=3
w=6
return C.b(C.ax(),$async$aa8)
case 6:r=f
q=s.cx
p=C.a2(q).k("jC<cl.E,n>")
q=C.z(new C.jC(q,new B.dzv(),p),p.k("G.E"))
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
return C.i($async$aa8,v)},
ats(d,e,f,g){var w="c"+this.y++,v=new B.Bf(w,e,f,g)
this.d.m(0,w,v)
return v},
m2(d,e,f){return this.ats(0,e,f,0)},
a9b(d,e){var w
if(D.xQ.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ao(0,new C.u(-36,w))},
rN(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aOa(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fE$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.dv(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ed(m,D.cuV[A.o.G(q.d,4)])&1)===0
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
bHz(){return this.aOa(null)},
l4(d){var w,v,u,t,s,r,q,p,o,n=this
n.bHz()
if(!n.ax)return
for(w=n.d,w=new C.bg(w,C.a2(w).k("bg<2>")).gah(0),v=new C.hK(w,new B.dzP()),u=n.f,t=n.w,s=0;v.C();){r=w.gT(0).a
if(u.h(0,r)===!0){q=n.fE$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.m(0,r,n.fE$)
o=s+1
B.dI(520+90*A.o.G(s,4),"",200,0,0.25,"square")
s=o}}},
att(d){var w=this
w.d.a7(0)
A.d.a7(w.e)
w.f.a7(0)
w.r.a7(0)
w.cy=null},
lv(d,e){var w=this.x
return new C.u(d*w.a,e*w.b)},
apV(d){var w=this
if(w.x.A(0,A.at)){$.aT.x1$.push(new B.dzq(w,d))
return}w.n(new B.dzr(w,d))},
cnz(d){this.n(new B.dzw(this,d,$.bA9()[d]))},
bZF(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bA9()[a0]
v=d.d
u=C.a2(v).k("bg<2>")
t=u.k("a4<G.E>")
s=t.k("G.E")
r=C.z(new C.a4(new C.bg(v,u),new B.dzl(),t),s)
A.d.aZ(r,new B.dzm())
q=C.z(new C.a4(new C.bg(v,u),new B.dzn(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.n(new B.dzo(d,w))
return}u=d.r
p=C.dS(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=A.o.dq(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((A.o.fQ(k,i)&1)===1)
for(i=0;i<v;++i)u.m(0,r[i].a,j[i])
d.aOa(0)
h=m.h(0,A.d.gL(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.jw(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aF(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a7(0)
u.v(0,p)
d.n(new B.dzp(d,o,a0))},
aue(d){var w,v,u,t,s=this.d,r=C.a2(s).k("bg<2>")
s=C.z(new C.bg(s,r),r.k("G.E"))
r=C.U(s).k("dy<1>")
s=new C.dy(s,r)
s=new C.bU(s,s.gJ(0),r.k("bU<ai.E>"))
w=d.a
r=r.k("ai.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
c70(d){var w,v,u,t,s,r=this.d,q=C.a2(r).k("bg<2>")
r=C.z(new C.bg(r,q),q.k("G.E"))
q=C.U(r).k("dy<1>")
r=new C.dy(r,q)
r=new C.bU(r,r.gJ(0),q.k("bU<ai.E>"))
w=d.a
v=d.b
q=q.k("ai.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bSa(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.dv(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.xQ.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.a9b(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.A(p,o)
s=l}}}return t},
bGx(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.a9b(p,o)
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
bZH(d){var w,v,u,t=this,s=t.aue(d)
if(s!=null){w=t.d.h(0,s)
w.toString
C.eH()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.m(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
B.dI(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.n(new B.dzx())
return}u=t.bGx(d)
if(u!=null)t.n(new B.dzy(t,u))
else t.n(new B.dzz(t))},
asr(d){return this.bUY(d)},
bUY(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$asr=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.aue(d)
if(s==null){w=1
break}C.j8()
t.n(new B.dzu(t,s))
case 1:return C.h(u,v)}})
return C.i($async$asr,v)},
btP(d){if(this.x.A(0,A.at))return
this.n(new B.dzk(this,d,A.cB))
C.eH()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bA9()[g]
g=x.p
v=C.a([C.aF(h,h,h,h,C.V(i.ax?A.ny:M.qs,A.af,h,h,h,21),h,h,h,new B.dzI(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.m(16)
s=A.cC.j(0.14)
r=C.H(A.cC.j(0.5),A.r,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.eC2,h,h,h),C.d(w.b,h,h,h,h,h,h,D.eJQ,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.C(A.mB,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?A.bh:A.fj,h,h,h,h,h,h,h,h,12,h,h,A.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.B(C.a([C.D(C.v(q,A.F,h,A.e,A.j,0,A.p),1),C.bL(D.f_k,i.gbZE(),C.bk(A.cC,h,h,h,h,h,h,h,h,h,h,A.c8))],g),A.m,h,A.e,A.j,0,h,h),A.h,h,h,new C.o(s,h,r,t,h,h,A.n),h,h,h,U.JZ,D.bgC,h,h,1/0))}u.push(C.D(C.ck(new B.dzJ(i)),1))
if(f!=null){t=C.m(14)
s=A.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.xQ.h(0,r).a+": "+D.xQ.h(0,r).e,h,h,h,h,h,h,A.vn,h,h,h),A.h,h,h,new C.o(s,h,h,t,h,h,A.n),h,h,h,Y.acz,A.bS,h,h,1/0))}u=C.v(u,A.m,h,A.e,A.j,0,A.p)
t=C.a([],g)
for(s=D.xQ.gdH(D.xQ),s=s.gah(s);s.C();){r=s.gT(s)
q=new C.b1(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.ay(o.j(0.5),1,A.r,-1)
t.push(C.aH(h,C.p(h,C.v(C.a([C.V(p.b,o,h,h,h,20),A.bA,new C.w(p.a,h,D.aKH,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.Q,0,A.p),A.h,h,h,new C.o(n,h,new C.c1(m,m,m,m),new C.bv(q,q,q,q),h,h,A.n),h,h,h,A.hm,P.Vc,h,h,58),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.dzK(i,r),h,h,h,h,h,h,!1,A.ad))}s=C.a([],g)
for(l=0;l<4;++l){k=D.cV3[l]
s.push(new B.ff(A.Lu,k.b,new B.dzL(i,k),A.cC,h))}s.push(new B.ff(D.wZ,"Clear",new B.dzM(i),A.cF,h))
r=C.a([],g)
for(j=0;q=$.bA9(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.el:A.lt
o=i.ay
n=i.cx.t(0,j)?A.bh:A.cE
r.push(new B.dw(q.a,o===j,new B.dzN(i,j),p,n,h))}return B.jx(A.cC,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.v(C.a([new B.eF(t,"PARTS",h),new B.eF(s,"TRY",h),new B.eF(r,"TASKS",h)],g),A.m,h,A.e,A.Q,0,A.p))}}
B.b7B.prototype={
a5(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.Y()
w=C.L()
w.r=D.a8e.gq(0)
a7.b2(new C.a9(0,0,0+a5,0+a6),w)
v=C.L()
v.r=A.c.j(0.05).gq(0)
for(w=a7.a,u=20;u<a6;u+=28)for(t=14;t<a5;t+=28){s=v.I()
w.drawCircle(t,u,1,s)
s.delete()}for(a5=this.b,a6=a5.e,r=a6.length,q=a5.f,p=x.v,o=a5.d,n=0;n<a6.length;a6.length===r||(0,C.K)(a6),++n){m=a6[n]
l=m.a
k=o.h(0,l)
j=o.h(0,m.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=a5.a9b(j,m.c)
f=q.h(0,l)===!0
l=$.Y()
e=C.a([],p)
d=new C.aQ(l.r,A.aq,a4,a4,e)
e.push(new C.b5(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.p7(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=9
l.r=A.cE.j(0.28).gq(0)
l.z=H.mQ
s=l.I()
l=d.gbL().a.snapshot()
w.drawPath((d.e=new C.cE(l)).a,s)
s.delete()}l=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=3.2
l.d=A.bN
l.r=(f?A.dZ:A.bt).gq(0)
s=l.I()
l=d.e
w.drawPath((l==null?d.e=new C.cE(d.gbL().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ao(0,D.Gw)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new C.aQ($.Y().r,A.aq,a4,a4,C.a([],p))
w=a3.b
p.E(new C.b5(a6,w))
r=g.b
p.E(new C.p7(a6+a0,w,a5-a0,r,a5,r))
r=C.L()
r.b=A.ae
r.c=3
r.r=A.af.gq(0)
a7.aO(p,r)}for(a5=new C.dv(o,o.r,o.e);a5.C();)this.bZG(a7,a5.d)},
bZG(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.xQ.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.cN(a0.c,64,64)
s=C.bF(t,A.kN)
r=w.cy===v
q=s.eH(A.cs)
$.Y()
p=C.L()
p.r=A.x.j(0.55).gq(0)
p.z=A.lA
d.aK(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.L()
p.sap(new C.bR(A.A,0.5,A.w,g,0,C.a([e.c.j(0.6),A.K],x.O),g,g).au(0,C.bV(a0.c,52)))
d.af(q,52,p)}q=s.eH(A.cA)
p=C.L()
o=e.c
p.r=C.aq(o,A.x,0.65).gq(0)
d.aK(q,p)
n=u?0.35:0
q=C.L()
p=C.aq(o,A.c,0.1+n)
p.toString
m=C.aq(o,A.x,u?0.2:0.45)
m.toString
q.sap(new C.a3(A.aY,A.b1,A.w,C.a([p,m],x.O),g,g).au(0,t))
d.aK(s,q)
q=C.L()
q.b=A.ae
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gq(0)
d.aK(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?D.ahg:D.bsO}else l=e.b
k=B.fEB(C.jw(l.a),30,A.c,l.b,g,A.I)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a5(d,v.aD(0,new C.u(p/2,q.gbh(q)/2)))
j=B.fEB(e.a,10.5,A.c,g,g,A.I)
j.a5(d,a0.c.ao(0,new C.u(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=B.fEB(f,9,u?A.dZ:A.c2,g,g,A.u)
i.a5(d,a0.c.ao(0,new C.u(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aUl(d,w.a9b(a0,h),o)
this.aUl(d,a0.c.ao(0,D.Gw),o)},
aUl(d,e,f){var w
$.Y()
w=C.L()
w.r=D.a8e.gq(0)
d.af(e,8.5,w)
w=C.L()
w.b=A.ae
w.c=2.2
w.r=f.gq(0)
d.af(e,8.5,w)
w=C.L()
w.r=A.c.gq(0)
d.af(e,3.2,w)},
ar(d){return!0}}
B.aIk.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.btb.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpl()}}
B.LI.prototype={
S(){return new B.aAb(C.mb(0,null,null))}}
B.IS.prototype={
a3(){return"_UnfoldStyle."+this.b}}
B.zx.prototype={}
B.aAb.prototype={
bZL(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gco(0).at
v.toString
w.f=v}w.n(new B.dF0(w,e))},
bTW(){var w=this
w.e.p()
w.e=C.mb(w.f,null,null)
w.n(new B.dF_(w))},
p(){this.e.p()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.nX(t,C.cd(v,A.bX,t?new B.bnh(w.e,w.gbZK(w),new B.dF1(d),v):new B.aEm(u,new C.cx(u.b,x.gj)),v,!1,!1,v,!1),new B.dF2(w,u),x.K)}}
B.boP.prototype={}
B.bnh.prototype={
aUm(d,e){var w=null
return new C.C(F.VG,C.v(C.a([C.d(d,w,w,w,w,w,w,D.eCy,w,w,w),A.bA,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.B(C.a([C.aF(v,v,v,v,E.qu,v,v,v,w.e,v,v,v,v,v,v),A.tG,D.bml],u),A.m,v,A.e,A.j,0,v,v),s=w.aUm("STUDIOS","Play, make things, and keep what you make")
$.bAb()
return C.bq(!0,C.v(C.a([new C.C(D.blv,t,v),C.D(C.uR(0,v,A.q,w.c,A.z,v,v,v,v,v,!1,v,A.ak,!1,C.a([new C.lP(s,v),new C.nr(A.it,C.Ng(new C.o_(new B.eIv(d),22,!0,!0,!0,0,C.ri(),v),D.aIG),v),new C.lP(w.aUm("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nr(D.bgI,C.Ng(new C.o_(new B.eIw(w),6,!0,!0,!0,0,C.ri(),v),D.aIG),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.aj,!0,!0)}}
B.acC.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.m(20),n=C.m(20),m=C.aq(D.rw,p,0.3)
m.toString
w=x.O
m=C.a([m,D.aap],w)
v=C.H(p.j(0.6),A.r,1.2)
u=x.V
t=C.a([new C.ab(-4,A.G,p.j(0.22),A.J,14)],u)
s=C.aq(p,A.x,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.ab(0,A.G,p.j(0.5),A.J,12)],u)
return C.aD(!1,A.a1,!0,r,C.aI(!1,o,!0,C.eq(C.v(C.a([C.p(r,C.V(q.c,A.c,r,r,r,24),A.h,r,r,new C.o(r,r,r,r,u,new C.a3(A.aw,A.aC,A.w,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.P,C.d(q.a,r,2,A.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.d6,C.d(q.b,r,2,A.a2,r,r,r,C.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.b6,A.j,0,A.p),r,new C.o(r,r,v,n,t,new C.a3(A.aw,A.aC,A.w,m,r,r),A.n),r,A.E1,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.h,A.K,0,r,r,r,r,r,A.ac)}}
B.abx.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.m(20),g=C.m(20),f=C.aq(D.rw,A.d.gL(i),0.24)
f.toString
w=x.O
f=C.a([f,D.aap],w)
v=C.H(A.d.gL(i).j(0.35),A.r,1)
u=x.V
t=C.a([new C.ab(0,A.G,A.x.j(0.4),A.cs,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.b1(6,6)
m=C.a([A.d.gL(i),A.d.gaj(i)],w)
l=C.a([new C.ab(0,A.G,A.x.j(0.45),F.aBA,0)],u)
r.push(C.p(k,C.V(q[p],A.c,k,k,k,11),A.h,k,k,new C.o(k,k,k,new C.bv(n,n,n,n),l,new C.a3(A.a3,A.a7,A.w,m,k,k),A.n),k,17,k,new C.N(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.v(r,A.m,k,A.e,A.Q,0,A.p)
u=C.aq(A.d.gL(i),A.d.gaj(i),0.4)
u.toString
return C.aD(!1,A.a1,!0,k,C.aI(!1,h,!0,C.eq(C.v(C.a([new C.a5(58,k,w,k),A.T,C.d(j.b,k,2,A.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.av,C.V(Ad.ER,A.d.gL(i),k,k,k,18)],s),A.m,k,A.b6,A.j,0,A.p),k,new C.o(k,k,v,g,t,new C.a3(A.aw,A.aC,A.w,f,k,k),A.n),k,A.E1,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.h,A.K,0,k,k,k,k,k,A.ac)}}
B.Om.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(A.d.gaj(i),A.x,0.62)
h.toString
w=k.c
v=k.d
h=C.an(-8,C.bT(j,new C.o(h,j,j,C.m(22),j,j,A.n),A.bb),j,j,2,2,8,j)
u=C.m(22)
t=k.y
s=x.V
r=C.a([new C.ab(0,A.G,A.x.j(0.55),A.Px,26),new C.ab(-6,A.G,A.d.gL(i).j(0.1+0.4*t),A.J,30)],s)
q=C.m(22)
p=C.aq(A.d.gL(i),A.c,0.14)
p.toString
o=A.d.gL(i)
n=A.d.gaj(i)
i=C.aq(A.d.gaj(i),A.x,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bX(0,C.bT(j,new C.o(j,j,j,j,j,new C.a3(A.aw,A.aC,A.w,C.a([p,o,n,i],m),D.cZF,j),A.n),A.bb),0,0,0),C.an(j,C.bT(j,new C.o(j,j,j,j,j,new C.a3(A.aY,A.b1,A.w,C.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bb),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bX(0,C.b2(j,j,j,new B.bof(i,j),A.at),0,0,0))
i=A.c.j(0.16)
p=C.H(A.c.j(0.5),A.r,1.4)
s=C.a([new C.ab(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=C.p(j,C.V(k.f,A.c,j,j,j,28),A.h,j,j,new C.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.eE0,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,C.a([A.av,C.d(i,j,1,A.a2,j,j,j,C.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a4,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.QB)
p.push(C.p(j,j,A.h,j,j,new C.o(A.c.j(0.28),j,j,C.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.C(A.fA,C.B(C.a([s,A.er,C.D(C.v(p,A.F,j,A.e,A.Q,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bX(0,C.e1(C.ec(j,A.x.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.m(22)
m.push(C.bX(0,C.e1(C.bT(j,new C.o(j,j,C.H(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bb),!0,j),0,0,0))
return new C.a5(w,v,new C.am(A.W,j,A.a9,A.h,C.a([h,C.bX(0,C.bT(C.bu(q,new C.am(A.W,j,A.a9,A.q,m,j),A.ao),new C.o(j,j,j,u,r,j,A.n),A.bb),0,0,0)],l),j),j)}}
B.bof.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.a9(r,-10,s,w)
u=d.a
J.bB(u.save())
u.translate(v.gbO().a,v.gbO().b)
d.iT(0,0.35)
t=C.cN(A.J,(w- -10)*1.6,s-r)
$.Y()
s=C.L()
s.sap(new C.a3(A.a3,A.a7,A.w,C.a([A.K,A.c.j(0.3),A.K],x.O),null,null).au(0,t))
d.b2(t,s)
u.restore()},
ar(d){return d.b!==this.b}}
B.bnL.prototype={
B(d){var w=null,v=C.m(22),u=C.a([D.b6a,D.a9N],x.O),t=this.e,s=C.H(A.d.gL(t).j(0.4),A.r,1.2),r=C.a([new C.ab(0,A.G,A.x.j(0.5),A.jQ,24)],x.V),q=C.m(22),p=A.d.gL(t)
return new C.a5(this.c,this.d,C.bT(C.bu(q,C.b2(C.au(C.V(A.j4,A.d.gL(t).j(0.7),w,w,w,34),w,w,w),w,w,new B.b6i(p,w),A.at),A.ao),new C.o(w,w,s,v,r,new C.a3(A.aw,A.aC,A.w,u,w,w),A.n),A.bb),w)}}
B.b6i.prototype={
a5(d,e){var w,v,u,t,s,r,q,p
$.Y()
w=C.L()
v=this.b
w.r=v.j(0.09).gq(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.I()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.I()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.ef(A.J)
$.Y()
t=C.L()
t.b=A.ae
t.c=1.4
t.r=v.j(0.35).gq(0)
d.af(u,30,t)},
ar(d){return!1}}
B.aEm.prototype={
S(){return new B.aEn(new C.co(null,x.A),null,null)}}
B.aEn.prototype={
gt7(){var w,v=this,u=v.d
if(u===$){w=C.bi(null,D.be5,null,1,null,v)
w.cF(0)
v.d!==$&&C.bJ()
v.d=w
u=w}return u},
gXo(){var w,v=this,u=v.e
if(u===$){w=C.bi(null,A.fJ,null,1,null,v)
w.f1(0,!0)
v.e!==$&&C.bJ()
v.e=w
u=w}return u},
gatu(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gbZI(){var w=this.w
if(w===$){w=C.z(this.a.c.d,x.G)
this.w=w}return w},
gaRe(){var w=this.x
if(w===$){w=C.z(this.a.c.e,x.Z)
this.x=w}return w},
gaRT(){var w=this.y
if(w===$){w=C.z(this.a.c.f,x.N)
this.y=w}return w},
gb1F(){var w=this.z
if(w===$){w=C.z(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a0()
var w=this.gt7()
w.d5()
w.dM$.K(0,this.gcnk())},
cnl(){var w,v,u,t,s,r,q,p=this,o=p.gt7().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gatu().a){case 0:w=D.mN
break
case 1:w=D.td
break
case 2:w=D.ZW
break
case 3:w=D.mN
break
case 4:w=D.cOw
break
case 5:w=D.td
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a61)r=0.09
else r=s===D.a62?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){B.dI(260+90*v,"",260,1.6,0.18,"tri")
u=D.bKn[v]
B.l1("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
B.AF("bell",D.bT6,1400,0.35)}}p.ax=o},
p(){this.gt7().p()
this.gXo().p()
this.br9()},
adp(){var w=this
w.gt7().cLq(0,C.dB(0,0,0,A.k.U(11e3/w.Q),0,0))
w.n(new B.eIb(w))},
c9_(){this.gt7().bU(0)
this.n(new B.eIa(this))},
ab2(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$ab2=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaRT(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){q=t[r]
l.push(new C.ap(new C.bc(q,A.b2,A.aM),$.av()))}m=C.a([],m)
for(t=u.gb1F(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){p=t[r]
m.push(new C.ap(new C.bc(p,A.b2,A.aM),$.av()))}o=C.z(u.gaRe(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.c2(D.rw,null,new B.eI9(u,l,m,o),t,!0,!0,!0,A.l6,!1,!1,x.H),$async$ab2)
case 2:l=C.z(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.R$=$.av()
n.O$=0}return C.h(null,v)}})
return C.i($async$ab2,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gatu(),f=i.a.c,e=f.b,d=i.gbZI(),a0=new B.zx(g,e,f.c,d,i.gaRe(),i.gaRT(),i.gb1F())
f=C.aq(A.d.gL(d),A.d.gaj(d),0.4)
f.toString
g=x.p
w=C.a([C.aF(h,h,h,h,C.V(i.at?A.ny:M.qs,A.af,h,h,h,21),h,h,h,new B.eIj(i),h,h,h,h,"Sound",h),C.aF(h,h,h,h,D.bCc,h,h,h,i.gbZJ(),h,h,h,h,"Edit words and pictures",h),C.aF(h,h,h,h,D.m7,h,h,h,new B.eIk(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c3(i.gXo(),new B.eIl(i,a0),h),C.ck(new B.eIm(i,a0))],g)
u=i.as
t=u?i.gc8Z():i.gcbg()
u=u?D.bs2:A.t2
s=C.aq(A.d.gL(d),A.d.gaj(d),0.4)
s.toString
t=C.B(C.a([C.aF(h,h,h,h,C.V(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.c8),C.D(C.c3(i.gt7(),new B.eIn(i,a1,a0),h),1),C.aF(h,h,h,h,D.byF,h,h,h,new B.eIo(i),h,h,h,h,"Replay",A.c8)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.aa(s,1)
r=C.aq(A.d.gL(d),A.d.gaj(d),0.4)
r.toString
s=B.hp(r,u+"x","Speed",2.5,0.4,new B.eIp(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.cX9[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(A.d.gL(d),A.d.gaj(d),0.4)
r.toString
u.push(new B.dw(p.b,o===p.a,new B.eIq(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bKI[q]
o=i.w
if(o===$){o=C.z(i.a.c.d,r)
i.w=o}m=A.d.gL(o).A(0,A.d.gL(n))?34:28
o=i.w
if(o===$){o=C.z(i.a.c.d,r)
i.w=o}l=A.d.gL(o).A(0,A.d.gL(n))?34:28
o=i.w
if(o===$){o=C.z(i.a.c.d,r)
i.w=o}k=A.d.gL(o).A(0,A.d.gL(n))?A.c:A.ba
o=i.w
if(o===$){o=C.z(i.a.c.d,r)
i.w=o}j=new C.ay(k,A.d.gL(o).A(0,A.d.gL(n))?2.5:1,A.r,-1)
d.push(C.aH(h,C.p(h,h,A.h,h,h,new C.o(h,h,new C.c1(j,j,j,j),h,h,new C.a3(A.aw,A.aC,A.w,n,h,h),A.a6),h,l,h,D.acn,h,h,h,m),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.eIr(i,n),h,h,h,h,h,h,!1,A.ad))}return B.jx(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.en(new C.am(A.W,h,A.b_,A.q,v,h),i.f),e,C.v(C.a([t,s,new B.eF(u,"STYLE",h),new B.eF(d,"THEME",h)],g),A.m,h,A.e,A.Q,0,A.p))},
bt2(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.mN[r]
p=A.k.D((1-A.eE.av(0,A.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.D(p/1.5707963267948966,0,1)
q=D.mN[r]
n=q+0.12
m=A.k.D((a0-n)/(q+0.2-n),0,1)
n=D.mN[r]
q=n-0.01
q=A.k.D((a0-q)/(n+0.03-q),0,1)
n=C.di()
l=n.a
l.$flags&2&&C.ah(l)
l[11]=0.0013
n.jz(p)
l=v[r]
k=u[r]
j=t[r]
i=D.mN[r]
h=i+0.1
if(A.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.mN[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.mN[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cG(0,r*118,0,f,f,f,new C.kI(q,new C.iy(n,f,A.aY,!0,f,new B.Om(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.mN[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gL(w)
v=D.mN[r]
t=v+0.12
e.push(new C.cG(0,r*118-3-2,0,f,f,4,new C.lX(new B.bmW(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.at,f,f),f))}return new C.a5(a2,358,new C.am(A.W,f,A.a9,A.h,e,f),f)},
bIX(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.td[r]
p=A.oY.av(0,A.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.td[r]
m=q+0.15
l=A.k.D((a0-m)/(q+0.25-m),0,1)
m=D.td[r]
q=m-0.03
q=A.k.D((a0-q)/(m+0.01-q),0,1)
m=C.di()
k=m.a
k.$flags&2&&C.ah(k)
k[11]=0.0011
m.ji(n,n,n,1)
m.fl(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new B.Om(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.di()
k.fl(3.141592653589793)
k=new C.iy(k,f,A.A,!0,f,new B.bnL(a2,108,w,f),f)}e.push(new C.cG(0,r*130,0,f,f,f,new C.kI(q,new C.iy(m,f,A.A,!0,f,k,f),f),f))}return new C.a5(a2,378,new C.am(A.W,f,A.a9,A.h,e,f),f)},
cs3(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.ZW[w]
l.push(A.co.av(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bX(0,C.b2(n,n,n,new B.bqi(d.d,l,D.aqD,m,B.bng(e,0.4,0.62),f,B.bng(e,0.45,0.7),n),A.at),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=B.fF6(g,w)
q=D.aqD[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cG(r,s-q*m*p+12,n,n,t,n,new C.kI(o,C.V(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=B.fF6(g,w)
r=D.ZW[w]
q=r+0.15
v.push(new C.cG(s,l,n,n,t,n,new C.kI(A.k.D((e-q)/(r+0.25-q),0,1),new C.w(u[w],n,A.a4F,n,A.L,n,n,n,n,n,n,n),n),n))}return new C.a5(g,m+90,new C.am(A.W,n,A.a9,A.h,v,n),n)},
bz1(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.co.av(0,B.bng(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bX(0,C.au(C.dP(C.b2(f,f,f,new B.bmo(A.d.gL(a1),B.bng(a3,0,0.2),a4,f),new C.ar(a5*0.95,70)),D.dLw),f,f,f),0,0,0))
w=C.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.D((a3-l)/(0.12+m-l),0,1)
j=A.dJ.av(0,A.k.D((o-0.7)/0.3,0,1))
l=C.di()
m=l.a
m.$flags&2&&C.ah(m)
m[11]=0.001
l.fl(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.ji(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.G(r,1):-1
w.push(new C.A(o,new C.cG(0,0,0,0,f,f,new C.cw(A.A,f,f,new C.kI(k*(0.45+0.55*o),C.dP(new C.iy(l,f,A.A,!0,f,new B.Om(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.u(n*a5*0.34,-o*18)),f),f),f)))}A.d.aZ(w,new B.eI2())
A.d.v(a0,new C.J(w,new B.eI3(),x.fR))
return new C.a5(a5,330,new C.am(A.W,f,A.a9,A.h,a0,f),f)},
byf(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.td[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.n5.av(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.td[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.asr[q]
k=C.di()
k.mf(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.ji(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.td[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cG(0,0,0,0,e,e,new C.cw(A.A,e,e,new C.kI(m,C.dP(new C.iy(k,e,A.A,!0,e,new B.Om(d,92,w,p,j,i,0,g*s,h,e),e),new C.u(0,l)),e),e),e))
l=D.td[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cG(0,0,0,0,e,e,new C.cw(A.A,e,e,C.dP(new C.lX(new B.b6Y(w,f,q,e),e,new C.ar(r,212),e,e),new C.u(0,D.asr[q])),e),e))}return new C.a5(a4,330,new C.am(A.W,e,A.a9,A.h,a0,e),e)},
bvV(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.u(-b0,-150),new C.u(b0,-40),D.dLB],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.mN[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.co.av(0,p)
q=D.asw[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.mN[r]
f=g+0.2
e=A.k.D((a8-f)/(g+0.3-f),0,1)
f=D.mN[r]
g=f-0.01
g=A.k.D((a8-g)/(f+0.03-g),0,1)
f=C.di()
d=f.a
d.$flags&2&&C.ah(d)
d[11]=0.001
f.mf(l*h+D.cS8[r]*o)
f.fl(l*0.9)
h=0.55+0.45*o
f.ji(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cG(0,0,0,0,a3,a3,new C.cw(A.A,a3,a3,new C.kI(g,C.dP(new C.iy(f,a3,A.A,!0,a3,new B.Om(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.u(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.mN[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.asw[r]
a6.push(new C.cG(0,0,0,0,a3,a3,new C.cw(A.A,a3,a3,C.dP(new C.lX(new B.bmq(A.d.gL(w),a2,a3),a3,new C.ar(a4,30),a3,a3),new C.u(0,q+48-4)),a3),a3))}}return new C.a5(b0,330,new C.am(A.W,a3,A.a9,A.h,a6,a3),a3)}}
B.bmW.prototype={
a5(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.a9(w-v,0,w+v,e.b)
q=C.bF(u,A.h_)
$.Y()
t=C.L()
s=0.9*r.d
t.r=r.b.j(s).gq(0)
t.z=H.mQ
d.aK(q,t)
t=C.bF(u,A.h_)
q=C.L()
q.r=A.c.j(s).gq(0)
d.aK(t,q)},
ar(d){return d.c!==this.c||d.d!==this.d}}
B.bmo.prototype={
a5(d,e){var w,v,u=this.c,t=C.cN(e.ef(A.J),e.b*u,e.a*u)
$.Y()
u=C.L()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gq(0)
u.z=S.G_
d.j3(t,u)
u=C.L()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gq(0)
d.j3(t,u)
u=t.cD(-14)
v=C.L()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gq(0)
d.j3(u,v)},
ar(d){return!0}}
B.b6Y.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ef(A.J),f=this.c,e=A.co.av(0,f)
$.Y()
w=C.L()
w.b=A.ae
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gL(u).j(0.6*v).gq(0)
d.af(g,40+e*a0.a*0.42,w)
t=new C.eX()
t.dQ(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.ae()*3.141592653589793*2
n=(40+t.ae()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.ae()
j=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
i=(p&1)===0?A.d.gL(u):A.c
j.r=i.j(A.k.D(v,0,1)).gq(0)
h=j.I()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
ar(d){return!0}}
B.bmq.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ef(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.cN(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.Y()
o=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=2
o.r=u.j((1-q)*0.7).gq(0)
n=o.I()
t.drawOval(C.c9(p),n)
n.delete()}},
ar(d){return d.c!==this.c}}
B.bqi.prototype={
a5(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.a9(0,d0,0+c5,d0+60)
$.Y()
d0=C.L()
w=c1.b
v=x.O
d0.sap(new C.a3(A.aY,A.b1,A.w,C.a([A.d.gL(w).j(0.18),A.K],v),c2,c2).au(0,d1))
d2.b2(d1,d0)
d0=C.L()
d0.r=A.c.j(0.18).gq(0)
d0.c=1
d2.bE(new C.u(0,c4),new C.u(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=B.fF6(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.Y()
a3=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
a3.r=A.x.j(0.5).gq(0)
a3.z=A.lA
a4=a3.I()
t.drawOval(C.c9(new C.a9(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.a9(d,a1,a3,a1+a0)
a6=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
a7=C.aq(A.d.gL(w),A.c,0.1)
a7.toString
a6.sap(new C.a3(A.aY,A.b1,A.w,C.a([a7,A.d.gaj(w)],v),c2,c2).au(0,a5))
a4=a6.I()
t.drawRect(C.c9(a5),a4)
a4.delete()
a2=a2.r
a6=C.a([],n)
a8=new C.aQ(a2,A.aq,c2,c2,a6)
a6.push(new C.b5(a3,a1))
a7=a3+c8
a9=a1+c9
a6.push(new C.ao(a7,a9))
a6.push(new C.ao(a7,m))
a6.push(new C.ao(a3,c4))
a6.push(new C.bE())
a6=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
a6.r=C.aq(A.d.gaj(w),A.x,0.5).gq(0)
a4=a6.I()
a6=a8.gbL().a.snapshot()
t.drawPath((a8.e=new C.cE(a6)).a,a4)
a4.delete()
a6=C.a([],n)
b0=new C.aQ(a2,A.aq,c2,c2,a6)
a6.push(new C.b5(d,a1))
a6.push(new C.ao(d+c8,a9))
a6.push(new C.ao(a7,a9))
a6.push(new C.ao(a3,a1))
a6.push(new C.bE())
a2=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
a2.r=C.aq(A.d.gL(w),A.c,0.45).gq(0)
a4=a2.I()
a2=b0.gbL().a.snapshot()
t.drawPath((b0.e=new C.cE(a2)).a,a4)
a4.delete()
b1=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
b1.c=1
b1.r=A.c.j(0.28).gq(0)
a4=b1.I()
t.drawRect(C.c9(a5),a4)
a4.delete()
a4=b1.I()
a2=a8.e
t.drawPath((a2==null?a8.e=new C.cE(a8.gbL().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.I()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cE(b0.gbL().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bw(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=C.bF(new C.a9(b7,a7,b7+r,b5),A.h_)
$.Y()
b9=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
b9.r=(b4?A.c.j(q):A.x.j(0.22)).gq(0)
a4=b9.I()
t.drawRRect(C.f7(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.a9(d,a1,a3,a1+28)
J.bB(t.save())
t.clipRect(C.c9(a5),$.tu()[1],!0)
$.Y()
a1=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
a1.sap(new C.a3(A.aY,A.b1,A.w,C.a([A.K,A.c.j(0.4),A.K],v),c2,c2).au(0,c0))
a4=a1.I()
t.drawRect(C.c9(c0),a4)
a4.delete()
t.restore()}}},
ar(d){return!0}}
B.aK0.prototype={
aP(){this.aW()
this.aV()
this.dD()},
p(){var w=this,v=w.b_$
if(v!=null)v.a1(0,w.gdB())
w.b_$=null
w.a2()}}
B.Zl.prototype={
a3(){return"_Role."+this.b}}
B.pz.prototype={}
B.qd.prototype={}
B.Bj.prototype={}
B.Xk.prototype={}
B.acs.prototype={}
B.Zy.prototype={
gX(d){return this.d}}
B.Bt.prototype={}
B.a9q.prototype={}
B.a9H.prototype={}
B.abB.prototype={}
B.bdm.prototype={
a0k(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
B.dI(d,"",e,g,h,f)},
b2D(d,e,f){return this.a0k(d,e,f,0,0.55)},
axU(d,e,f,g){return this.a0k(d,e,f,0,g)},
b2E(d,e,f,g){return this.a0k(d,e,f,g,0.55)},
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
agX(d,e,f,g){var w="n"+this.ay++,v=new B.qd(w,e,f,g)
this.a.m(0,w,v)
this.b1()
return v},
A4(d,e,f){return this.agX(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bm(w.b,new B.d9z(e))
A.d.bm(w.c,new B.d9A(e))
w.b1()},
b6n(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.ma.h(0,v.b).c===D.vF)return!1
w=this.b
if(A.d.ba(w,new B.d9w(d,e)))return!1
w.push(new B.Bj(d,e))
this.b1()
return!0},
bSV(d){var w
if(d.b==="beat")return D.bTg[A.o.G(d.d,4)]
w=this.at
switch(A.o.G(d.d,3)){case 1:return 350+w.aB(500)
case 2:return 1400+w.aB(2200)
default:return 450+w.aB(2000)}},
aBf(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.m(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.m(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.G(w,6)
t=D.asL[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new B.Bt(u,t,j.ax,90))
w.push(new B.Bt(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ae()*3.141592653589793*2
v.push(new B.Zy(u,new C.u(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b2D(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.G(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ae()*3.141592653589793*2
p=100+w.ae()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,A.c,w.ae()*0.5)
m.toString
v.push(new B.Zy(u,new C.u(o*p,n*p),m,3+w.ae()*4.5,1000+w.aB(700),j.ax))}j.f.push(new B.Bt(u,t,j.ax,120))
j.axU(120,200,"noise",0.5)
j.b2D(261.63*Math.pow(2,([7,12,16,19][w.aB(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new B.Bt(u,t,j.ax,230))
w.push(new B.Bt(u,t,j.ax+160,160))
w.push(new B.Bt(u,t,j.ax+320,100))
j.b2E(180+j.at.aB(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new B.a9q(u,new C.u((w.ae()-0.5)*220,-260-w.ae()*180),t,j.ax))
j.b2E(300+w.aB(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ae()*3.141592653589793*2
j.w.push(new B.a9H(u,u.ao(0,new C.u(Math.cos(q),Math.sin(q)).aM(0,260+w.ae()*200)),t,j.ax))
j.a0k(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fW()
j.a0k(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new B.abB(u,D.asf[v],t,j.ax))
j.axU(261.63*Math.pow(2,([0,5,9,12][j.at.aB(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.axU(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.bPm[A.o.G(w,3)]
for(k=1;k<=3;++k)j.ciD(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gah(j.b),v=new C.hK(w,new B.d9x(d));v.C();)j.awt(w.gT(0),j.ax+D.c0A[A.o.G(g.d,4)])
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
case"chance":s=j.at.aB(100)<D.chj[A.o.G(g.d,3)]
break
default:break}if(s)for(w=A.d.gah(j.b),v=new C.hK(w,new B.d9y(d));v.C();)j.awt(w.gT(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.yj(w,0,v-700)},
ciD(d,e,f){var w=this.c
if(w.length>260)return
w.push(new B.Xk(e,"~"+d))},
awt(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new B.acs(d.a,v,e,w))
u.push(new B.Xk(w,v))},
cM3(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aBf(r)
u.m(0,r,o.ax+o.bSV(s))}}w=o.c
v=C.U(w).k("a4<1>")
q=C.z(new C.a4(w,new B.d9B(o),v),v.k("G.E"))
if(q.length!==0){A.d.bm(w,new B.d9C(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.K)(q),++t){u=q[t].b
if(A.a.a_(u,"~")){p=A.a.aX(u,1)
for(u=A.d.gah(v),r=new C.hK(u,new B.d9D(p));r.C();)o.awt(u.gT(0),o.ax)}else o.aBf(u)}}A.d.bm(o.d,new B.d9E(o))
A.d.bm(o.e,new B.d9F(o))
A.d.bm(o.f,new B.d9G(o))
A.d.bm(o.w,new B.d9H(o))
A.d.bm(o.x,new B.d9I(o))
A.d.bm(o.r,new B.d9J(o))
o.b1()},
a5h(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
v.push(C.a([n.a,n.b],r))}return A.R.al(C.E(["nodes",m,"edges",v],u,x.ew),null)},
cDq(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.k.a(A.R.aE(0,d,null))
k.a7(0)
for(o=x.a,n=J.aV(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gT(n)
u=C.t(J.q(v,"k"))
if(!D.ma.an(0,u))continue
t=C.t(J.q(v,"id"))
m.m(0,t,new B.qd(t,u,new C.u(C.fc(J.q(v,"x"))*k.cy.a,C.fc(J.q(v,"y"))*k.cy.b),A.k.N(C.fc(J.q(v,"p")))))
s=C.c4(C.aJ(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aV(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gT(o)
q=C.t(J.q(r,0))
p=C.t(J.q(r,1))
if(m.an(0,q)&&m.an(0,p))n.push(new B.Bj(q,p))}k.b1()
return!0}catch(l){return!1}},
cGn(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a7(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.m(0,n,new B.qd(n,r,new C.u(q*p.a,o*p.b),s))
l.b1()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.b6n(w[m.a],w[m.b])}},
gX(d){return this.cy}}
B.Ey.prototype={}
B.U1.prototype={
S(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new B.aBp(new B.bdm(C.T(w,x.f3),v,u,t,s,r,q,p,o,C.T(w,n),C.T(w,n),C.T(w,n),C.T(w,n),A.cB,A.K,A.at,$.av()),A.bw,A.J,A.J,A.U,null,null)}}
B.aBp.prototype={
a9I(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$a9I=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.ax(),$async$a9I)
case 6:q=n.ks(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.n(new B.e9J(s))
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
return C.i($async$a9I,v)},
a6M(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a6M=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.n(new B.e9y(s))
u=3
w=6
return C.b(C.ax(),$async$a6M)
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
return C.i($async$a6M,v)},
bET(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a2(n).k("bg<2>")
v=""+n.a+"|"+o.length+"|"+new C.bg(n,w).cG(0,0,new B.e9A())+"|"+A.d.cG(o,0,new B.e9B())
if(v===p.ch)return p.CW
u=new B.e9E()
t=x.s
s=C.a([],t)
r=new B.e9F(p,s,u)
for(n=new C.bg(n,w).gah(0),w=new C.hK(n,new B.e9C());w.C();){q=n.gT(0)
if(!A.d.ba(o,new B.e9D(q)))s.push(C.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.df(s,0,C.dK(5,"count",x.S),x.N).dA(0)},
Z(){var w,v=this
v.a0()
v.a9I()
v.d.db=v.ay
w=v.qR(new B.ea8(v))
w.kp(0)
v.e!==$&&C.aO()
v.e=w},
p(){var w=this,v=w.as
if(v!=null)v.a9(0)
v=w.e
v===$&&C.c()
v.p()
v=w.d
v.R$=$.av()
v.O$=0
w.bqd()},
a9f(d){return this.bSn(d)},
bSn(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$a9f=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.ax(),$async$a9f)
case 6:q=m.aS(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cDq(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aSi(A.d.gL(D.arN))
if(s.c!=null)s.n(new B.e9I())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$a9f,v)},
aSi(d){this.d.cGn(0,d.c,d.d)
this.D_()},
D_(){var w=this.as
if(w!=null)w.a9(0)
this.as=C.cO(A.ln,new B.e9u(this))},
atv(d){var w,v,u,t,s=this.d.a,r=C.a2(s).k("bg<2>")
s=C.z(new C.bg(s,r),r.k("G.E"))
r=C.U(s).k("dy<1>")
s=new C.dy(s,r)
s=new C.bU(s,s.gJ(0),r.k("bU<ai.E>"))
w=d.a
r=r.k("ai.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
c71(d){var w,v,u,t,s,r=this.d.a,q=C.a2(r).k("bg<2>")
r=C.z(new C.bg(r,q),q.k("G.E"))
q=C.U(r).k("dy<1>")
r=new C.dy(r,q)
r=new C.bU(r,r.gJ(0),q.k("bU<ai.E>"))
w=d.a
v=d.b
q=q.k("ai.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bSb(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.dv(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.ma.h(0,r.b).c===D.vF)continue
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
bZO(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=B.h16(new C.u(n.a+36,n.b+0),new C.u(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cpW(d){var w,v,u,t,s,r,q=this,p=q.atv(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eH()
u=v.b
if(u==="button"){w.aBf(p)
return}if(q.r)return
t=D.ma.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.pL)s=6
else s=1
v.d=A.o.G(v.d+1,s)
w.b1()
q.D_()
return}if(q.r)return
r=q.bZO(d)
if(r!=null){w=q.d
A.d.cu(w.b,r)
w.b1()
q.D_()}},
c8h(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.c71(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.atv(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aD(0,d)}},
c8i(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b1()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.u(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b1()}}},
aX0(){var w,v,u=this
if(u.z!=null){w=u.bSb(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.b6n(v,w)}else v=!1
if(v){C.jE()
u.D_()}u.z=null
u.d.b1()}else if(u.x!=null){if(u.at)u.D_()
u.x=null}},
a9V(d){return this.bUZ(d)},
bUZ(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$a9V=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.atv(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.j8()
p=t.c
p.toString
w=3
return C.b(C.c2(D.rw,null,new B.e9L(q),p,!0,!0,!1,A.l6,!1,!1,x.y),$async$a9V)
case 3:if(f===!0){r.W(0,s)
t.D_()}case 1:return C.h(u,v)}})
return C.i($async$a9V,v)},
bZM(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.A4(0,d,new C.u(v.a*(0.25+u.ae()*0.5),v.b*(0.2+u.ae()*0.55)))
C.eH()
this.D_()},
adx(){var w=0,v=C.j(x.H),u=this,t,s
var $async$adx=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.c2(D.rw,null,new B.e9N(),s,!0,!0,!0,A.l6,!1,!1,x.es),$async$adx)
case 2:t=e
if(t!=null)u.aSi(t)
return C.h(null,v)}})
return C.i($async$adx,v)},
ab3(d){var w=0,v=C.j(x.H),u=this,t
var $async$ab3=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.cg(null,null,!0,null,new B.e9x(),t,null,!0,!0,x.y),$async$ab3)
case 2:if(f===!0){u.d.a7(0)
u.D_()}return C.h(null,v)}})
return C.i($async$ab3,v)},
B(d){var w=this,v=null,u=C.a([C.afI(w.r?new C.bI(A.a3,v,v,new C.C(A.E3,C.hh(D.bwI,D.eTO,new B.ea6(w),v),v),v):w.bZP(),A.b9,A.io),C.D(C.ck(new B.ea7(w)),1)],x.p)
if(!w.r)u.push(w.cl_())
return C.cd(v,A.bX,C.bq(!0,C.v(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.aj,!0,!0),v,!1,!1,v,v)},
bAF(){var w=null,v=new B.e9z(),u=A.x.j(0.7),t=C.m(26),s=C.H(A.bq.j(0.5),A.r,1)
return C.bX(0,C.ec(C.au(C.p(w,C.ci(C.v(C.a([D.f33,A.av,D.f9W,A.ay,v.$4(A.oe,A.bq,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(V.EP,A.cC,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kZ,A.bU,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(D.bqu,A.cE,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.f9i,new C.bI(A.a7,w,w,C.bK(!1,D.f0p,w,w,!0,w,w,this.gbAy(),w,w),w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.q,w,A.z,w,w,w,w,A.ak),A.h,w,A.SJ,new C.o(D.rw,w,s,t,w,w,A.n),w,w,w,A.fB,Y.adz,w,w,w),w,w,w),u,!0),0,0,0)},
bZP(){var w=this,v=null,u=C.aF(v,v,v,v,E.qu,v,v,v,new B.e9T(w),v,v,v,v,v,v),t=w.a6f(A.Lm,"How it works",new B.e9U(w),!0),s=w.ay?A.ny:M.qs
return new C.C(D.bkL,C.B(C.a([u,D.bm9,t,w.a6f(s,"Sound",new B.e9V(w),!0),w.a6f(A.dP,"Ideas",w.gcbV(),!0),w.a6f(D.wZ,"Clear",w.gbZN(w),!0),w.aJA(A.iM,"Show",new B.e9W(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aJA(d,e,f,g,h){var w=null,v=h?A.bq:A.c.j(0.08),u=C.m(14),t=C.m(14),s=C.a([C.V(d,h?A.x:A.c,w,w,w,20)],x.p)
return new C.C(A4.ur,C.aD(!1,A.a1,!0,u,C.aI(!1,t,!0,C.hq(new C.C(new C.N(8,8,8,8),C.B(s,A.m,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.h,v,0,w,w,w,w,w,A.ac),w)},
a6f(d,e,f,g){return this.aJA(d,e,f,g,!1)},
cl_(){var w=null,v=new B.e9P(this),u=A.c.j(0.08)
return C.p(w,C.ci(C.B(C.a([v.$2("START",D.vF),v.$2("CHANGE",D.Co),v.$2("REACT",D.pL)],x.p),A.F,w,A.e,A.j,0,w,w),A.q,w,A.z,w,w,w,w,A.b0),A.h,w,w,new C.o(D.TW,w,new C.c1(new C.ay(u,1,A.r,-1),A.X,A.X,A.X),w,w,w,A.n),w,w,w,w,D.bg0,w,w,w)},
cl0(d){var w,v,u,t,s=null,r=D.ma.h(0,d)
r.toString
w=C.m(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.H(v.j(0.5),A.r,1)
return new C.C(A.hm,C.aH(s,C.p(s,C.v(C.a([C.V(r.b,v,s,s,s,22),A.d6,C.d(r.a,s,1,A.a2,s,s,s,D.aKH,s,s,s)],x.p),A.m,s,A.e,A.Q,0,A.p),A.h,s,s,new C.o(s,s,t,w,s,new C.a3(A.aY,A.b1,A.w,u,s,s),A.n),s,s,s,s,A.hC,s,s,62),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.e9O(this,d),s,s,s,s,s,s,!1,A.ad),s)}}
B.bdn.prototype={
a5(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bB(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.Y()
u=C.L()
u.r=A.c.j(0.05).gq(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.I()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.Y()
o=C.L()
o.r=b5.cx.j(0.4*((p-b6)/800)).gq(0)
b8.b2(new C.a9(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){l=w[m]
k=n.h(0,l.a)
j=n.h(0,l.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=j.c
f=g.a-36
g=g.b
e=$.Y()
d=C.a([],o)
a0=new C.aQ(e.r,A.aq,b4,b4,d)
d.push(new C.b5(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new C.p7(h+a1,i,f-a1,g,f,g))
a2=D.ma.h(0,k.b).d
a3=D.ma.h(0,j.b).d
e=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=3
e.d=A.bN
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.qV(new C.u(h,i),new C.u(f,g))
e.sap(new C.a3(A.a3,A.a7,A.w,d,b4,b4).au(0,new C.a9(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.I()
i=a0.gbL().a.snapshot()
b7.drawPath((a0.e=new C.cE(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=B.h16(new C.u(i.a+36,i.b+0),new C.u(h.a-36,h.b),a5)
$.Y()
h=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
h.r=A.c.j(0.35).gq(0)
h.z=H.mQ
q=h.I()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
g.r=A.c.gq(0)
q=g.I()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ao(0,D.Gw)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new C.aQ($.Y().r,A.aq,b4,b4,C.a([],o))
o=a8.b
a0.E(new C.b5(t,o))
i=a9.b
a0.E(new C.p7(t+a1,o,w-a1,i,w,i))
i=C.L()
i.b=A.ae
i.c=3
i.r=A.c.j(0.7).gq(0)
b8.aO(a0,i)
i=C.L()
i.r=A.c.gq(0)
b8.af(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b0=w[m]
o=b0.c
v=A.k.D((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dS.av(0,v)
$.Y()
h=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
h.b=A.ae
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gq(0)
q=h.I()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b1=w[m]
v=A.k.D((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=C.l2(o,i,A.dS.av(0,v))
h.toString
i=C.l2(o,i,A.dS.av(0,A.k.D(v-0.35,0,1)))
i.toString
$.Y()
o=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
o.c=5
o.d=A.bN
g=b1.c
f=C.a([g.j(0),g],p)
e=C.qV(i,h)
o.sap(new C.a3(A.a3,A.a7,A.w,f,b4,b4).au(0,new C.a9(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.I()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=A.c.gq(0)
q=i.I()
b7.drawCircle(o,h,6,q)
q.delete()
i=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=g.j(0.5*(1-v)).gq(0)
i.z=A.j7
q=i.I()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){a4=w[m]
v=A.k.D((b6-a4.f)/a4.e,0,1)
o=a4.a
$.Y()
i=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=a4.c.j(1-v).gq(0)
q=i.I()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){j=w[m]
o=j.a
$.Y()
i=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
h=j.c
i.r=h.j(0.35).gq(0)
i.z=A.j7
q=i.I()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
i.sap(new C.bR(N.pM,0.5,A.w,b4,0,C.a([A.c,h],p),b4,b4).au(0,C.bV(j.a,8)))
q=i.I()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.K)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=B.bdo(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a5(b8,new C.u(t.a-o/2,t.b-(40+60*v+p.gbh(p)/2)))}for(b5=new C.dv(n,n.r,n.e);b5.C();)b3.c7R(b8,b5.d,b6)
b7.restore()},
c7R(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.ma.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=C.cN(e.c,64,64)
t=C.bF(u,A.jS)
s=t.eH(A.cs)
$.Y()
r=C.L()
r.r=A.x.j(0.55).gq(0)
r.z=A.lA
d.aK(s,r)
if(v>0){s=t.cD(6)
r=C.L()
r.r=h.d.j(0.6*v).gq(0)
r.z=A.B1
d.aK(s,r)}s=t.eH(A.cA)
r=C.L()
q=h.d
r.r=C.aq(q,A.x,0.65).gq(0)
d.aK(s,r)
r=C.L()
s=C.aq(q,A.c,0.18+0.4*v)
s.toString
p=C.aq(q,A.x,0.35)
p.toString
r.sap(new C.a3(A.aY,A.b1,A.w,C.a([s,p],x.O),j,j).au(0,u))
d.aK(t,r)
r=C.L()
r.b=A.ae
r.c=1.2
r.r=A.c.j(0.35).gq(0)
d.aK(t,r)
r=h.b
p=e.c
o=B.bdo(C.jw(r.a),30,A.c,r.b,j,A.I)
r=o.b
s=r.c
r=r.a.c
o.a5(d,p.aD(0,new C.u(s/2,r.gbh(r)/2)))
n=B.bdo(h.a,11,A.c,j,j,A.I)
n.a5(d,e.c.ao(0,new C.u(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.G(e.d,r)]
else m=i==="pop"?D.asf[A.o.G(e.d,6)]:j
h=h.c
if(h===D.pL){s=e.c.ao(0,new C.u(0,62))
r=C.L()
r.r=D.asL[A.o.G(e.d,6)].gq(0)
d.af(s,5,r)}else if(m!=null){l=B.bdo(m,9.5,A.aA,j,j,A.O)
l.a5(d,e.c.ao(0,new C.u(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=B.bdo(m,9.5,A.aA,j,j,A.O)
l.a5(d,e.c.ao(0,new C.u(-l.b.c/2,54)))}if(k.c)return
if(h!==D.vF)k.aXN(d,e.c.aD(0,D.Gw),q)
k.aXN(d,e.c.ao(0,D.Gw),q)},
aXN(d,e,f){var w
$.Y()
w=C.L()
w.r=A.bX.gq(0)
d.af(e,9,w)
w=C.L()
w.b=A.ae
w.c=2.2
w.r=f.gq(0)
d.af(e,9,w)
w=C.L()
w.r=A.c.gq(0)
d.af(e,3.5,w)},
ar(d){return!0}}
B.aJa.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.bhT.prototype={}
B.Od.prototype={
gX(d){return this.d}}
B.Ug.prototype={
S(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new B.bgY(new C.co(null,x.A),w,v,A.cB,A.bw,D.Dg,null,null)}}
B.bgY.prototype={
aVz(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bw((1-d.b/(C.aG(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.arg[A.o.G(v,5)]+12*A.o.ak(v,5)+12
switch(t.z){case"glow":B.l1("synth",u,420,0.3)
break
case"rainbow":B.l1("bell",u,700,0.35)
break
case"stars":B.l1("pluck",u+12,400,0.4)
break
case"sparks":B.dI(2400+t.r.aB(2000),"",60,0,0.18,"noise")
break
default:B.dI(110+t.r.aB(60),"",140,0,0.22,"noise")}},
c1L(d){return this.aVz(d,!1)},
Z(){var w,v=this
v.a0()
w=v.qR(new B.ejU(v))
w.kp(0)
v.w!==$&&C.aO()
v.w=w},
p(){var w=this.w
w===$&&C.c()
w.p()
this.bqm()},
gaXk(){var w=this.Q
return w<0?new G.ms(1,A.k.G(this.y*0.18,360),0.85,1).it():D.Og[w]},
aNQ(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gaXk(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.ae()*3.141592653589793*2
switch(l.z){case"fire":q=v.ae()
p=l.as
o=v.ae()
n=v.ae()
m=C.aq(A.cE,A.aE,v.ae())
m.toString
j.push(new B.Od(new C.u(u+(q-0.5)*p,t),new C.u((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.ae()*0.4),l.y,700+v.aB(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.ae()*200
n=C.aq(k,A.c,v.ae()*0.6)
n.toString
j.push(new B.Od(d,new C.u(q*o,p*o),n,1.5+v.ae()*3,l.y,600+v.aB(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.ae()*40
j.push(new B.Od(d,new C.u(q*o,p*o),k,1.2+v.ae()*1.8,l.y,500))}}},
aUo(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gaXk()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new B.bhT(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aNQ(e)
r.aVz(e,!0)
r.n(new B.ejv())},
aUn(){this.ax=null
this.n(new B.eju())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aF(n,n,n,n,D.m7,n,n,n,new B.ejE(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b2(n,n,n,new B.boa(k,o.f,o.y,o.at,n),A.at)],m)
if(!o.ay&&k.length===0)j.push(D.aXA)
k=C.aH(A.c5,new C.am(A.W,n,A.b_,A.q,j,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,new B.ejF(o),new B.ejG(o),new B.ejK(o),n,n,n,n,n,n,n,n,n,new B.ejL(o),new B.ejM(o),n,n,n,!1,A.ad)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cEJ[w]
j.push(new B.dw(v.b,o.z===v.a,new B.ejN(o,v),v.c,A.bU,n))}u=C.a([new B.E1(A.c,o.Q<0,new B.ejO(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new B.E1(D.Og[t],o.Q===t,new B.ejP(o,t),!1,n))
s=o.as
s=B.hp(A.bU,A.o.u(A.k.U(s)),"Size",36,4,new B.ejQ(o),s)
r=o.ch
q=r?A.ny:M.qs
q=C.a([new B.dw("Sound",r,new B.ejR(o),q,A.bU,n),new B.ff(A.uM,"Undo",new B.ejH(o),A.c,n),new B.ff(D.wZ,"Clear",new B.ejI(o),A.cF,n)],m)
for(w=0;w<4;++w){p=D.cTy[w]
q.push(new B.E1(p,o.at.A(0,p),new B.ejJ(o,p),!1,n))}return B.jx(A.bU,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.en(k,o.d),"SPARK PAINTER",C.v(C.a([new B.eF(j,"BRUSH",n),new B.eF(u,"COLOUR",n),s,new B.eF(q,n,n)],m),A.m,n,A.e,A.Q,0,A.p))}}
B.boa.prototype={
a5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.Y()
w=C.L()
v=a4.e
w.r=v.gq(v)
a6.b2(new C.a9(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.Y()
o=C.a([],t)
n=new C.aQ(p.r,A.aq,a5,a5,o)
o.push(new C.b5(A.d.gL(q).a,A.d.gL(q).b))
for(p=C.U(q),m=p.k("pv<1>"),l=new C.pv(q,1,a5,m),l.FW(q,1,a5,p.c),l=new C.bU(l,l.gJ(0),m.k("bU<ai.E>")),m=m.k("ai.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.ao(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.by(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gL(q)
$.Y()
p=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=r.c.gq(0)
j=p.I()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.Y()
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bN
q.e=A.fs
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gq(0)
q.z=new C.hy(A.G,p)
j=q.I()
q=n.e
u.drawPath((q==null?n.e=new C.cE(n.gbL().a.snapshot()):q).a,j)
j.delete()
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bN
q.e=A.fs
q.c=p
q.r=o.gq(0)
j=q.I()
q=n.e
u.drawPath((q==null?n.e=new C.cE(n.gbL().a.snapshot()):q).a,j)
j.delete()
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bN
q.e=A.fs
q.c=p*0.35
q.r=A.c.j(0.85).gq(0)
j=q.I()
q=n.e
u.drawPath((q==null?n.e=new C.cE(n.gbL().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new G.ms(1,A.o.G(i*5,360),0.85,1).it()
o=q[i-1]
m=q[i]
$.Y()
l=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
l.c=p
l.d=A.bN
l.r=h.gq(0)
j=l.I()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,C.K)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gL(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new G.ms(1,A.o.G(a3*23,360),0.7,1).it():l
a4.bZQ(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.Y()
p=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=a0.c.j((1-e)*0.9).gq(0)
p.z=E.OJ
j=p.I()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
bZQ(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.Y(),o=C.a([],x.v),n=new C.aQ(p.r,A.aq,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new C.b5(r,q)
o.push(r)
q=n.f
if(q!=null)r.by(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new C.ao(r,q)
o.push(r)
q=n.f
if(q!=null)r.by(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.E(new C.bE())
$.Y()
p=C.L()
p.r=h.j(0.4).gq(0)
p.z=A.j7
d.aO(n,p)
p=C.L()
p.r=h.gq(0)
d.aO(n,p)},
ar(d){return!0}}
B.Us.prototype={
S(){return new B.aBD(new C.co(null,x.A),new C.ap(new C.bc("NGMY",A.b2,A.aM),$.av()),null,null)}}
B.aBD.prototype={
gHp(){var w,v=this,u=v.e
if(u===$){w=C.bi(null,A.rG,null,1,null,v)
w.cF(0)
v.e!==$&&C.bJ()
v.e=w
u=w}return u},
Z(){this.a0()
var w=this.gHp()
w.d5()
w.dM$.K(0,this.gbRl())},
bRm(){var w,v,u,t,s,r,q,p=this,o=p.gHp().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.lE:new C.lQ(w)).gJ(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)B.dI(1500,"",35,0,0.18,"square")
else if(s==="glitch")B.dI(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
B.l1(s,D.aqf[A.o.G(t,8)]+12,450,0.35)}}p.Q=o},
p(){this.gHp().p()
var w=this.f
w.R$=$.av()
w.O$=0
this.bqs()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.lQ(h)
w=C.z(h,C.a2(h).k("G.E"))}v=D.Og[k.w]
h=x.p
u=C.a([C.aF(j,j,j,j,D.m7,j,j,j,new B.eqt(k,d),j,j,j,j,"Share",j)],h)
t=C.m(26)
s=D.asg[k.y]
s=C.bu(t,C.bT(C.au(C.c3(k.gHp(),new B.equ(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a3(A.aw,A.aC,A.w,s,j,j),A.n),A.bb),A.ao)
t=A.c.j(0.06)
t=C.aK(j,A.U,!1,j,!0,A.q,j,C.aL(),i,j,j,j,j,j,2,C.bn(j,new C.b3(4,C.m(14),A.X),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,H.C0,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.z,!0,j,!0,j,!1,j,A.ah,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new B.eqv(k),j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,A.hf,!0,A.a5,j,A.am,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.ch7[r]
i.push(new B.dw(q.b,k.r===q.a,new B.eqw(k,q),j,A.cE,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new B.E1(D.Og[o],k.w===o,new B.eqx(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.ny:M.qs
l=C.a([new B.dw(m,n,new B.eqy(k),l,A.cE,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new B.E1(D.asg[o][0],k.y===o,new B.eqz(k,o),!1,j))
n.push(A.bo)
n.push(new B.ff(A.m4,"Replay",new B.eqA(k),A.c,j))
m=k.x
return B.jx(A.cE,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.C(A.bB,new C.en(s,k.d),j),"TITLE ANIMATOR",C.v(C.a([t,A.P,new B.eF(i,"MOVE",j),new B.eF(p,"COLOUR",j),new B.eF(l,"SOUND",j),new B.eF(n,"BACK",j),B.hp(A.cE,A.o.u(A.k.U(m)),"Size",96,28,new B.eqB(k),m)],h),A.m,j,A.e,A.Q,0,A.p))},
bU4(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cK(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<A.k.bw(g*1.6*f)?1:0
w=h
break
case"bounce":o=-Math.abs(Math.sin(A.k.G(g*2-q*0.5,1)*3.141592653589793))*s.x*0.5
w=h
break
case"wave":o=Math.sin(g*3.141592653589793*2-q*3)*s.x*0.28
w=h
break
case"neon":v=Math.sin(g*40+e*7)>0.92?0.25:1
A.d.a7(p)
p.push(new C.cK(h,A.J,30*v))
p.push(new C.cK(h.j(0.8),A.J,60*v))
w=h
m=v
break
case"glitch":u=A.o.G(A.k.bw(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.b7
else w=u?A.bU:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.n5.av(0,t)
w=h
m=t
break
case"rainbow":w=new G.ms(1,A.k.G(g*360+e*40,360),0.75,1).it()
A.d.a7(p)
p.push(new C.cK(w.j(0.7),A.J,18))
break
default:w=h}return C.d8(C.dP(C.e5(A.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.u(l,o)),m)}}
B.aJj.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.aJp.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.YR.prototype={}
B.TZ.prototype={
S(){var w=C.a([],x.aS)
return new B.aBi(new C.co(null,x.A),w,A.cB,A.at,$,A.bw,0,C.a([],x.X),null,null)}}
B.aBi.prototype={
gab4(){var w=this.r
return new C.u(w.a/2,w.b/2)},
aYs(){return new G.ms(1,this.f.ae()*360,0.6,1).it()},
aoe(d,e,f,g){var w=this,v=w.gab4().ao(0,new C.u(Math.cos(e),Math.sin(e)).aM(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new B.YR(v,new C.u(-t,s).aM(0,r).aM(0,u*f),w.Q*(0.6+w.f.ae()*0.9),w.aYs(),C.a([],x.g)))},
bA1(d,e,f){return this.aoe(d,e,f,!1)},
bA0(d,e){return this.aoe(d,e,1,!1)},
cnf(){var w,v,u,t=this
A.d.a7(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bA0(40+w*u/5,v.ae()*3.141592653589793*2)},
bAU(){var w=this.r
this.bA1(Math.min(w.a,w.b)*0.42,this.f.ae()*3.141592653589793*2,0.45)},
Z(){this.a0()
this.kM()},
l4(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.at))return
w=a2.e
v=w.length
if(v===0&&a2.fE$<300)return
u=a2.gab4()
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
if(o.length!==0){m=A.d.gaj(o)
j=n.a
f=m.a-j.a
j=m.b-j.b
j=Math.sqrt(f*f+j*j)>3
m=j}else m=!0
if(m)o.push(n.a)
if(o.length>260)A.d.cu(o,0)}else A.d.a7(n.e)}for(p=0;p<w.length;w.length===o||(0,C.K)(w),++p){n=w[p]
v=n.a
a1=!1
if(v.b<r)if(J.lF(v.a-s)!==J.lF(n.f-s)){v=n.a
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
B.l1("bell",D.aqf[A.k.U((1-A.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a4(w,new B.e6B(u),C.U(w).k("a4<1>")).gJ(0)>0&&a2.ax)B.dI(70,"",300,0.6,0.8,"sine")
A.d.bm(w,new B.e6C(a2,u))},
cbO(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gab4()
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
gaRY(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aD(0,w).aM(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aF(r,r,r,r,D.m7,r,r,r,new B.e6p(s,d),r,r,r,r,"Share",r)],q),o=C.ck(new B.e6q(s)),n=s.w
n=B.hp(A.cQ,A.k.aa(n,1)+"x","Sun mass",2.5,0.3,new B.e6r(s),n)
w=s.x
w=B.hp(A.cQ,A.k.aa(w,1)+"x","Time",3,0.2,new B.e6t(s),w)
v=s.Q
v=B.hp(A.cQ,A.o.u(A.k.U(v)),"Planet size",16,3,new B.e6u(s),v)
u=s.ax
t=u?A.ny:M.qs
return B.jx(A.cQ,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.v(C.a([n,w,v,new B.eF(C.a([new B.dw("Sound",u,new B.e6v(s),t,A.cQ,r),new B.dw("Trails",s.z,new B.e6w(s),A.Ly,A.cQ,r),new B.dw("Planets pull each other",s.y,new B.e6x(s),A.xn,A.cQ,r)],q),r,r),new B.eF(C.a([new B.ff(A.m3,"Solar system",new B.e6y(s),A.cQ,r),new B.ff(A.mK,"Comet",new B.e6z(s),A.c,r),new B.ff(A.m0,"Cluster",new B.e6A(s),A.c,r),new B.ff(D.wZ,"Clear",new B.e6s(s),A.cF,r)],q),r,r)],q),A.m,r,A.e,A.Q,0,A.p))}}
B.bhG.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.Y()
w=C.L()
w.r=D.TP.gq(0)
d.b2(new C.a9(0,0,0+g,0+f),w)
v=new C.eX()
v.dQ(5)
for(w=d.a,u=0;u<70;++u){t=v.ae()
s=v.ae()
r=v.ae()
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.25+v.ae()*0.4).gq(0)
p=q.I()
w.drawCircle(t*g,s*f,r*1.2+0.3,p)
p.delete()}o=16+i.d*6
g=i.c
f=o*3.2
t=C.L()
s=x.O
t.sap(new C.bR(A.A,0.5,A.w,h,0,C.a([A.cQ.j(0.45),A.K],s),h,h).au(0,C.bV(g,f)))
d.af(g,f,t)
t=C.L()
t.sap(D.dWi.au(0,C.bV(g,o)))
d.af(g,o,t)
for(g=i.b,f=g.length,n=0;n<g.length;g.length===f||(0,C.K)(g),++n){m=g[n]
t=m.e
if(t.length>1)for(r=m.d,u=1;q=t.length,u<q;++u){l=u/q
q=t[u-1]
k=t[u]
j=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
j.c=2.2*l+0.4
j.d=A.bN
j.r=r.j(l*0.8).gq(0)
p=j.I()
w.drawLine.apply(w,[q.a,q.b,k.a,k.b,p])
p.delete()}t=m.a
r=m.c
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
k=m.d
q.r=k.j(0.3).gq(0)
q.z=H.mQ
p=q.I()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
j=C.aq(k,A.x,0.5)
j.toString
q.sap(new C.bR(N.pM,0.5,A.w,h,0,C.a([A.c,k,j],s),h,h).au(0,C.bV(m.a,r)))
p=q.I()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.L()
t.c=2
t.r=A.j1.gq(0)
d.bE(g,f,t)
t=C.L()
t.r=A.c.gq(0)
d.af(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,C.K)(g),++n){m=g[n]
t=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.7).gq(0)
p=t.I()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
ar(d){return!0}}
B.a9x.prototype={}
B.Un.prototype={
S(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new B.bh2(new C.co(null,x.A),w,v,A.cB,A.at,$,A.bw,0,C.a([],x.X),null,null)}}
B.bh2.prototype={
Z(){this.a0()
this.kM()},
bZR(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
w.push(new B.a9x(new C.u(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.u(p*n,o*n),A.k.G(m*60+l,360)))}while(w.length>A.k.U(k.x))w.pop()},
l4(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.at))return
a2.bZR()
w=a2.f
A.d.bm(w,new B.epV(a2))
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
A.d.bm(w,new B.epW(a2))
if(w.length<a1&&a2.ch)B.l1("bell",12+a2.r.aB(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fE$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fE$
B.l1("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aF(l,l,l,l,D.m7,l,l,l,new B.epK(m,d),l,l,l,l,"Share",l)],k),i=C.ck(new B.epL(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cGe[w]
h.push(new B.dw(v.b,m.at===v.a,new B.epM(m,v),v.c,A.bh,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cqR[w]
u.push(new B.dw(t.b,m.ax===t.a,new B.epN(m,t),l,A.bh,l))}s=m.ch
r=s?A.ny:M.qs
r=C.a([new B.dw("Sound",s,new B.epO(m),r,A.bh,l)],k)
s=m.x
s=B.hp(A.bh,A.o.u(A.k.U(s)),"How many",150,15,new B.epP(m),s)
q=B.hp(A.bh,l,"Together",2.5,0,new B.epQ(m),m.y)
p=B.hp(A.bh,l,"Apart",2.5,0,new B.epR(m),m.z)
o=B.hp(A.bh,l,"Same way",2.5,0,new B.epS(m),m.Q)
n=m.as
return B.jx(A.bh,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.v(C.a([new B.eF(h,"TOUCH",l),new B.eF(u,"LOOK",l),new B.eF(r,l,l),s,q,p,o,B.hp(A.bh,A.o.u(A.k.U(n)),"Speed",280,50,new B.epT(m),n)],k),A.m,l,A.e,A.Q,0,A.p))}}
B.bp0.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.a9C,D.bal],x.O)
else{v=x.O
w=a4==="fly"?C.a([A.d8,O.Uf],v):C.a([D.b7N,D.b09],v)}v=0+a6.a
u=0+a6.b
t=$.Y()
s=C.L()
s.sap(new C.a3(A.aY,A.b1,A.w,w,a3,a3).au(0,new C.a9(0,0,v,u)))
a5.b2(new C.a9(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){q=v[r].a
p=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=A.cE.gq(0)
o=p.I()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
n.r=A.cE.j(0.25).gq(0)
n.z=H.mQ
o=n.I()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new G.ms(1,j,0.7,1).it()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
f.r=h.j(0.35*g).gq(0)
f.z=A.j7
o=f.I()
s.drawCircle(j.a,j.b,9,o)
o.delete()
j=k.a
f=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
f.r=A.c.j(g).gq(0)
o=f.I()
s.drawCircle(j.a,j.b,2.6,o)
o.delete()
break
case"bird":J.bB(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
e=Math.sin(l+j)*5
j=C.a([],m)
d=new C.aQ(t,A.aq,a3,a3,j)
j.push(new C.b5(8,0))
j.push(new C.ao(-6,-7-e))
j.push(new C.ao(-2,0))
j.push(new C.ao(-6,7+e))
j.push(new C.bE())
j=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
j.r=h.gq(0)
o=j.I()
j=d.gbL().a.snapshot()
s.drawPath((d.e=new C.cE(j)).a,o)
o.delete()
s.restore()
break
default:J.bB(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
a0=Math.sin(n+j)*3
j=C.a([],m)
d=new C.aQ(t,A.aq,a3,a3,j)
j.push(new C.b5(9,0))
j.push(new C.d0(0,-6,-7,a0))
j.push(new C.ao(-12,-4+a0))
j.push(new C.ao(-12,4+a0))
j.push(new C.ao(-7,a0))
j.push(new C.d0(0,6,9,0))
j=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
f=C.aq(h,A.cD,0.6)
f.toString
j.sap(new C.a3(A.a3,A.a7,A.w,C.a([h,f],q),a3,a3).au(0,D.enm))
o=j.I()
j=d.gbL().a.snapshot()
s.drawPath((d.e=new C.cE(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=A.cF
else a1=v==="scare"?A.cE:A.bh
v=u?12:22
u=C.L()
u.b=A.ae
u.c=2.5
u.r=a1.j(0.8).gq(0)
a5.af(a4,v,u)}},
ar(d){return!0}}
B.aa_.prototype={}
B.Sx.prototype={
S(){var w=C.a([],x.bi)
return new B.azU(w,A.cB,A.at,C.T(x.N,x.S),$,A.bw,0,C.a([],x.X),null,null)}}
B.azU.prototype={
gGS(){var w=this.r,v=18+A.k.U(w*0.85)
return A.o.D(A.k.U(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gaab(){return 54-8*(this.r/100)},
Z(){this.a0()
this.kM()
B.yA("chain_burst").bx(new B.dyX(this),x.P)},
aUq(){return B.vd("chain_burst",C.E(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
aww(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
k.push(new B.aa_(new C.u(20+s*(r.a-40),20+q*(p.b-40)),new C.u(o*m,n*m),new G.ms(1,u.ae()*360,0.6,1).it()))}},
Xp(d){var w,v=this
if(d==null)return 0
w=(v.fE$-d)/1000
if(w<0.4)return v.gaab()*A.dS.av(0,w/0.4)
if(w<1.1)return v.gaab()
if(w<1.5)return v.gaab()*(1-(w-1.1)/0.4)
return 0},
l4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.at)||!j.Q)return
w=j.d
if(w.length===0)j.aww()
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
if(v!=null)n.push(new C.A(v,j.Xp(j.ax)))
for(v=A.d.gah(w),s=new C.hK(v,new B.dyY());s.C();){r=v.gT(0)
n.push(new C.A(r.a,j.Xp(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.K)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fE$
B.dI(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eH()
break}}}if(!(j.at!=null&&j.Xp(j.ax)>0||A.d.ba(w,new B.dyZ(j)))&&j.fE$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gGS()){if(j.as>=j.gGS()*1.5)k=3
else k=j.as>=j.gGS()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.m(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
B.AF("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aUq()}else B.dI(120,"",300,0,0.3,"saw")}}},
aUp(d){this.n(new B.dyN(this,d))
this.aUq()},
ab5(){var w=0,v=C.j(x.H),u=this,t,s
var $async$ab5=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.cg(null,null,!0,null,new B.dyQ(u),s,null,!0,!0,x.S),$async$ab5)
case 2:t=e
if(t!=null)u.aUp(t)
return C.h(null,v)}})
return C.i($async$ab5,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gGS(),t=w.x.h(0,""+w.r)
return B.jx(A.bU,A.fY,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.ck(new B.dyU(w,t==null?0:t,u)),"CHAIN BURST",C.B(C.a([new B.ff(A.qo,"Levels",w.gbZS(),A.bU,v),new B.ff(A.jM,"New board",new B.dyV(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
arI(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aK1,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bRO(d,e){return this.arI(d,e,A.c)}}
B.b7i.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.Y()
w=C.L()
w.r=D.Dg.gq(0)
d.b2(new C.a9(0,0,0+e.a,0+e.b),w)
v=new B.cFB(d)
w=l.c
if(w!=null)v.$3(w,l.r.$1(l.d),A.c)
for(w=l.b,u=w.length,t=d.a,s=l.r,r=0;r<w.length;w.length===u||(0,C.K)(w),++r){q=w[r]
p=q.d
o=q.a
n=q.c
if(p!=null)v.$3(o,s.$1(p),n)
else{$.Y()
p=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=n.j(0.25).gq(0)
p.z=H.mQ
m=p.I()
t.drawCircle(o.a,o.b,12,m)
m.delete()
o=q.a
p=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=n.gq(0)
m=p.I()
t.drawCircle(o.a,o.b,8,m)
m.delete()}}},
ar(d){return!0}}
B.aIi.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.bta.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpj()}}
B.aJ6.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.btq.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bq9()}}
B.aJm.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.bty.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bqp()}}
B.Eu.prototype={
gcFF(){return this.a.aD(0,this.b).gcj()>4}}
B.aaO.prototype={}
B.TT.prototype={
S(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new B.bgB(new C.co(null,x.A),w,v,A.cB,A.at,$,A.bw,0,C.a([],x.X),null,null)}}
B.bgB.prototype={
aLA(d){return new G.ms(1,A.o.G(d*29,360),0.6,1).it()},
Y7(d){var w,v=D.AY.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.D(A.k.bw(d.a/s*t),0,t-1)
return v[A.o.G(w,u)]+12*A.o.ed(w,u)},
aO5(d){A.d.bm(this.e,new B.e24(this,d))},
cjt(d,e,f){var w=f.aD(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aD(0,e).gcj()
return d.aD(0,e.ao(0,w.aM(0,A.k.D((d.aD(0,e).a*v+d.aD(0,e).b*u)/t,0,1)))).gcj()},
av4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
A.d.a7(f)
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
k=g.Y7(new C.u((q+n)/2,(p+m)/2))
p=r?o:new C.u(n,p)
r=r?l:new C.u(q,m)
f.push(new B.Eu(p,r,k,new G.ms(1,A.o.G(k*29,360),0.6,1).it()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.u(v*(0.1+i*0.16+r),w)
k=g.Y7(h)
f.push(new B.Eu(h,h,k,new G.ms(1,A.o.G(k*29,360),0.6,1).it()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.u(v*(0.08+w.ae()*0.84),u*(0.2+w.ae()*0.65))
k=g.Y7(h)
f.push(new B.Eu(h,h,k,new G.ms(1,A.o.G(k*29,360),0.6,1).it()))}}},
Z(){this.a0()
this.kM()},
bZU(d,e){var w,v=this.fE$
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
w.push(new B.aaO(new C.u(a2.w.a*(0.2+v.ae()*0.6),6),new C.u((v.ae()-0.5)*40,0),new G.ms(1,v.ae()*360,0.5,1).it()))}if(u>3)a2.as=0
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
if(a1<0){a2.bZU(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.u(m.a-l*k,m.b-n*k)}}}}}A.d.bm(w,new B.e2t(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aF(p,p,p,p,C.V(q.ay?A.ny:M.qs,A.af,p,p,p,21),p,p,p,new B.e2i(q),p,p,p,p,"Sound",p),C.aF(p,p,p,p,D.m7,p,p,p,new B.e2j(q,d),p,p,p,p,"Share",p)],o),m=C.ck(new B.e2k(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.cJn[w]
l.push(new B.dw(v.b,q.x===v.a,new B.e2l(q,v),v.c,A.b7,p))}u=C.a([],o)
for(t=J.aV(D.AY.geb(D.AY));t.C();){s=t.gT(t)
u.push(new B.dw(s,q.y===s,new B.e2m(q,s),p,A.b7,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.at7[w]
t.push(new B.dw(r.b,q.z===r.a,new B.e2n(q,r),p,A.b7,p))}s=q.Q
return B.jx(A.b7,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.v(C.a([new B.eF(l,"TOOL",p),new B.eF(u,"SCALE",p),new B.eF(t,"SOUND",p),B.hp(A.b7,A.k.aa(s,1)+"/s","Marbles",4,0.3,new B.e2o(q),s),new B.eF(C.a([new B.ff(D.bsD,"Stairs",new B.e2p(q),A.b7,p),new B.ff(Ab.Ll,"Pinball",new B.e2q(q),A.c,p),new B.ff(A.m0,"Random",new B.e2r(q),A.c,p),new B.ff(D.wZ,"Clear",new B.e2s(q),A.cF,p)],o),p,p)],o),A.m,p,A.e,A.Q,0,A.p))}}
B.beh.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.Y()
w=C.L()
w.sap(D.bIr.au(0,new C.a9(0,0,a0,a1)))
a2.b2(new C.a9(0,0,a0,a1),w)
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
if(Math.sqrt(m*m+k*k)>4){q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bN
q.c=12+j
q.r=i.j(0.2+h).gq(0)
q.z=A.j7
g=q.I()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bN
q.c=6
q.r=C.aq(i,A.c,r*0.7).gq(0)
g=q.I()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()}else{p=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=i.j(0.25+h).gq(0)
p.z=A.j7
g=p.I()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
p=C.aq(i,A.x,0.4)
p.toString
j.sap(new C.bR(N.pM,0.5,A.w,d,0,C.a([A.c,i,p],v),d,d).au(0,C.bV(q,9)))
g=j.I()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=C.L()
u.c=5
u.d=A.bN
u.r=A.aA.gq(0)
a2.bE(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,C.K)(a0),++t){f=a0[t]
u=f.a
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
p=f.c
q.r=p.j(0.3).gq(0)
q.z=A.qD
g=q.I()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.sap(new C.bR(N.pM,0.5,A.w,d,0,C.a([A.c,p],v),d,d).au(0,C.bV(f.a,7)))
g=q.I()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
ar(d){return!0}}
B.abi.prototype={}
B.TY.prototype={
S(){var w=C.a([],x.gB)
return new B.aBh(new C.co(null,x.A),w,A.cB,A.at,$,A.bw,0,C.a([],x.X),null,null)}}
B.aBh.prototype={
gaUr(){var w=this.w
return new C.u(w.a/2,w.b/2)},
avg(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
aws(d){var w=D.AY.h(0,this.y),v=5-d,u=w.length
return w[A.o.G(v,u)]+12*A.o.ed(v,u)},
Z(){this.a0()
this.kM()},
aMV(){var w,v,u,t,s=this.e
A.d.a7(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new B.abi(w,A.k.G(t/v+u,1)))}},
l4(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.at))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fE$
if(p.Q){r=p.z
s=p.aws(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
B.l1(r,s+12,q,0.55)}}}},
bZV(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aD(0,h.gaUr()),e=f.gcj()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.avg(v)-e)
if(u<w){g.a=v
w=u}}if(w>28)return
t=A.k.G((Math.atan2(f.b,f.a)+1.5707963267948966)/6.283185307179586+1,1)
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
m=h.avg(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new B.e5Z(h,n).$0()
h.c.e3()
return}}h.n(new B.e6_(g,h,t))
if(h.Q)B.l1(h.z,h.aws(g.a)+12,700,0.5)
C.eH()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aF(q,q,q,q,C.V(r.Q?A.ny:M.qs,A.af,q,q,q,21),q,q,q,new B.e66(r),q,q,q,q,"Sound",q),C.aF(q,q,q,q,D.m7,q,q,q,new B.e67(r,d),q,q,q,q,"Share",q)],p),n=C.ck(new B.e68(r)),m=r.x
m=B.hp(A.bC,""+A.k.U(m),"Tempo",180,40,new B.e69(r),m)
w=C.a([],p)
for(v=J.aV(D.AY.geb(D.AY));v.C();){u=v.gT(v)
w.push(new B.dw(u,r.y===u,new B.e6a(r,u),q,A.bC,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.at7[t]
v.push(new B.dw(s.b,r.z===s.a,new B.e6b(r,s),q,A.bC,q))}return B.jx(A.bC,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.v(C.a([m,new B.eF(w,"SCALE",q),new B.eF(v,"SOUND",q),new B.eF(C.a([new B.ff(A.dP,"Demo",new B.e6c(r),A.bC,q),new B.ff(A.m0,"Random",new B.e6d(r),A.c,q),new B.ff(D.wZ,"Clear",new B.e6e(r),A.cF,q)],p),q,q)],p),A.m,q,A.e,A.Q,0,A.p))}}
B.bhH.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.Y()
w=C.L()
w.r=D.TP.gq(0)
a5.b2(new C.a9(0,0,0+a6.a,0+a6.b),w)
w=a3.d
v=a3.e
u=v.$1(w-1)+14
t=a3.c
s=t.aD(0,new C.u(0,u))
r=C.L()
r.c=2
q=x.O
p=t.a
o=p-1
n=t.b
m=n-u
r.sap(new C.a3(A.b1,A.aY,A.w,C.a([A.c.j(0.05),A.c.j(0.5)],q),a4,a4).au(0,new C.a9(o,m,o+2,m+u)))
a5.bE(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new G.ms(1,A.k.G(s.$1(l)*23,360),0.55,1).it()
o=v.$1(l)
m=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=1.6
m.r=k.j(0.35).gq(0)
j=m.I()
r.drawCircle(p,n,o,j)
j.delete()
o=D.cZB[A.o.G(A.o.G(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.l3(new C.es(o,a4,a4,A.cW,a4,a4,a4,a4,a4,a4,new C.F(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a5,A.cm,new C.k4(1),a4,a4,a4,a4,A.cj,a4)
i.fe()
o=i.b.c
m=J.fz0(v.$1(l))
h=i.b.a.c
i.a5(a5,new C.u(p+-o/2,n+(m-h.gbh(h)-2)))}w=C.L()
w.sap(D.dVX.au(0,C.bV(t,16)))
a5.af(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.K)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new G.ms(1,A.k.G(s.$1(a0)*23,360),0.55,1).it()
a2=A.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fz0(v.$1(a0))
a0=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=3*a2
a0.r=k.j(a2).gq(0)
j=a0.I()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
d.r=k.j(0.35).gq(0)
d.z=A.j7
j=d.I()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
d.sap(new C.bR(N.pM,0.5,A.w,a4,0,C.a([A.c,k],q),a4,a4).au(0,C.bV(new C.u(h,a1),8.5)))
j=d.I()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
ar(d){return!0}}
B.aJ4.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.bto.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bq7()}}
B.aJ5.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.btp.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bq8()}}
B.rC.prototype={}
B.b6b.prototype={}
B.TW.prototype={
S(){var w=x.S
return new B.aBf(C.a([],x.aq),C.T(w,w),C.aZ(w),D.esy)}}
B.aBf.prototype={
Z(){this.a0()
B.yA("molecule_maker").bx(new B.e5t(this),x.P)},
agw(d){var w={}
w.a=0
this.f.bG(0,new B.e5f(w,d))
return w.a},
gaUx(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)t.push(w[u].a)
return B.hIf(t,this.f,D.a_o[this.d])},
c_b(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.eX()
w.dQ(t*7+3)
t=v.y
v.n(new B.e59(v,e,t.a,w,t.b))
B.vg("pop",u.length,90,0.35)},
atz(d){return this.n(new B.e5a(this))},
aUy(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c_h(d){this.n(new B.e5e(this,this.aUy(d)))},
cg4(){var w=this.r
if(w==null)return
this.n(new B.e5d(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a_o[k.d],h=k.gaUx()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.v_.h(0,w[u].a).a-k.agw(u)
w=i.c
w=w.gdH(w)
t=w.di(w,new B.e5n(),x.N).aF(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.bh:A.hl
r=x.p
s=C.v(C.a([new C.C(A.fK,B.eXU(w,s,h&&k.d<12?new B.ff(A.jl,"Next",new B.e5o(k),A.bh,j):j),j),C.D(C.ck(new B.e5p(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new B.dw(p+D.a_o[u].b,k.d===u,new B.e5q(k,u),j,A.hl,j))}q=C.a([],r)
for(p=D.v_.gdH(D.v_),p=p.gah(p);p.C();){o=p.gT(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.eB:m.b
q.push(new B.dw(n+" \xb7 "+m.a,!1,new B.e5r(k,o),j,l,j))}return B.jx(A.hl,A.fY,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.v(C.a([new B.eF(w,"GOAL",j),new B.eF(q,"ADD",j),new B.eF(C.a([new B.dw("Remove selected atom",!1,k.gcg3(),A.e6,A.cF,j),new B.dw("Clear all",!1,k.gc_c(k),A.jM,A.aL,j)],r),j,j)],r),A.m,j,A.e,A.Q,0,A.p))}}
B.beY.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.G(t*37,10)
r=A.o.G(t*53,10)
$.Y()
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=A.hl.j(0.03).gq(0)
p=q.I()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bG(0,new B.dhC(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.v_.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.bV(j,26)
if(q===t){$.Y()
h=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
h.r=A.aL.j(0.4).gq(0)
h.z=A.j7
p=h.I()
u.drawCircle(j.a,j.b,34,p)
p.delete()}j=m.b
$.Y()
h=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
g=l.b
f=C.aq(g,A.c,0.5)
f.toString
e=C.aq(g,A.x,0.5)
e.toString
h.sap(new C.bR(A.I4,0.5,A.w,a3,0,C.a([f,g,e],r),F.aro,a3).au(0,i))
p=h.I()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?A.aF:A.c
d=new C.l3(new C.es(n,a3,a3,A.cW,a3,a3,a3,a3,a3,a3,new C.F(!0,j,a3,a3,a3,a3,19,A.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),A.a5,A.cm,new C.k4(1),a3,a3,a3,a3,A.cj,a3)
d.fe()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a5(a4,new C.u(n.a-h/2,n.b-j.gbh(j)/2))
n=k===0
a0=n?A.bm:A.aZ
j=m.b
h=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
h.r=a0.gq(0)
p=h.I()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.t(k)
a1=new C.l3(new C.es(n,a3,a3,A.cW,a3,a3,a3,a3,a3,a3,A.oy),A.a5,A.cm,new C.k4(1),a3,a3,a3,a3,A.cj,a3)
a1.fe()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a5(a4,new C.u(n.a+(20-h/2),n.b+(-20-j.gbh(j)/2)))}if(n===0){d=C.io(a3,a3,a3,a3,D.eAZ,A.a5,A.cm,a3,A.en,A.cj)
d.fe()
d.a5(a4,new C.u((w-d.b.c)/2,v/2))}},
ar(d){return!0}}
B.SU.prototype={
S(){var w=x.s
return new B.bfR(C.a([],w),C.a([],w))}}
B.bfR.prototype={
Z(){this.a0()
this.at_()
B.yA("dna_lab").bx(new B.dGR(this),x.P)},
gaZF(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a0n.h(0,w[u])
t.toString
s.push(t)}return A.d.fN(s)},
ga6N(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.am(this.gaZF(),w,v))}return u},
at_(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.eX()
k.dQ(l.e*31+l.d*7+C.yN(new C.Q(Date.now(),0,!1)))
w=new B.dGG(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mj(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=A.a.am(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a0n.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.fN(r))}if(!A.d.ba(t,new B.dGF()))break}l.f=v
A.d.a7(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.aXv()},
aXv(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=B.fHy(s.ga6N()[r])
v=J.dE(D.AZ.geb(D.AZ),new B.dGH(w)).dA(0)
u=new C.eX()
u.dQ(r+s.e)
A.d.fw(v,u)
u=C.a([w],x.s)
A.d.v(u,C.df(v,0,C.dK(3,"count",x.S),C.U(v).c))
t=new C.eX()
t.dQ(s.e*3+r)
A.d.fw(u,t)
s.z=u},
aUw(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.d4c.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a0n.h(0,w.f[v])
u.toString
break A}u=B.fHy(w.ga6N()[v])
break A}w.n(new B.dGE(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new B.dGP(),e=new B.dGK(),d=h.d===2?h.gaZF():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,Q.mh,g,g,g),A.av],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.bU.j(0.18):A.K
q=new C.b1(10,10)
p=new C.ay(t.length===s?A.bU:A.bG,1,A.r,-1)
o=C.a([],a0)
for(n=h.ga6N()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.cC(A.b0,A.e,A.Q,A.m,g,A.p,g,0,o,g),A.h,g,g,new C.o(r,g,new C.c1(p,p,p,p),new C.bv(q,q,q,q),g,g,A.n),g,g,g,D.bf7,A.eh,g,g,g))}v.push(C.c8(A.bJ,u,A.bx,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.c8(A.bJ,u,A.bx,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a5(34,g,new C.cw(A.A,g,g,C.V(A8.Lr,j<t.length?A.aA:A.bG,g,g,g,14),g),g))
A.d.v(v,C.a([new C.C(A.JT,C.c8(A.bJ,u,A.bx,0,0),g)],a0))}v.push(A.ar)
v.push(C.d(w,g,g,g,g,g,g,Q.mh,g,g,g))
v.push(A.av)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.bh.j(0.25):A.dw
q=new C.b1(12,12)
o=j<t.length
p=new C.ay(o?A.bh:A.ba,1,A.r,-1)
if(o){o=D.AZ.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.c2
u.push(C.p(g,new C.w(o,g,new C.F(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.h,g,g,new C.o(r,g,new C.c1(p,p,p,p),new C.bv(q,q,q,q),g,g,A.n),g,g,g,g,A.ek,g,g,g))}v.push(C.c8(A.bJ,u,A.bx,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(C.c8(A.bJ,u,A.bx,0,0))}v.push(A.ay)
u=h.w
if(u.length!==0){t=h.r.length
v.push(B.eXU(u,t>=(h.d===2?3:9)?A.bh:A.bU,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(B.eXU(u,A.bU,g))}v.push(A.T)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,E.R8,g,g,g))
v=C.ci(C.v(v,A.F,g,A.e,A.j,0,A.p),A.q,g,A.z,g,A.bB,g,g,A.ak)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new B.dw(D.cOK[j],h.d===j,new B.dGL(h,j),g,A.bU,g))
u=C.a([new B.eF(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bI(A.a3,g,g,new B.ff(A.jM,"New strand",new B.dGM(h),A.bh,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.K)(t),++l){i=t[l]
q=D.AZ.h(0,i)
q.toString
a0.push(new B.ff(D.Xq,q,new B.dGN(h,i),A.bU,g))}u.push(C.c8(A.bJ,a0,A.bx,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.aqk:D.cyY
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.b1(14,14)
a0.push(C.aH(g,C.p(A.A,new C.w(k,g,D.eBe,g,g,g,g,g,g,g,g,g),A.h,g,g,new C.o(e.$1(k),g,g,new C.bv(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new B.dGO(h,k),g,g,g,g,g,g,!1,A.ad))}u.push(C.B(a0,A.m,g,A.qC,A.j,0,g,g))}return B.jx(A.bU,A.fY,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.v(u,A.m,g,A.e,A.Q,0,A.p))}}
B.T9.prototype={
S(){return new B.aAn(A.bw,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
B.aAn.prototype={
Z(){var w,v=this
v.a0()
w=v.qR(v.gc_d())
w.kp(0)
v.d!==$&&C.aO()
v.d=w
B.yA("ecosystem").bx(new B.dJG(v),x.P)},
p(){var w=this.d
w===$&&C.c()
w.p()
this.bpx()},
gaIV(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c_e(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length===0||w-A.d.gaj(v)[3]>0.25){w=C.z(m.f,x.i)
w.push(m.w)
v.push(w)
if(v.length>160)A.d.cu(v,0)}if(m.gaIV()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.G(A.k.bw(w),5)===0)B.vd("ecosystem",C.E(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.n(new B.dJt())},
a7X(d){this.n(new B.dJs(this,d))
B.vg("pop",3,120,0.4)},
c_g(){return this.n(new B.dJu(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.v(C.a([new C.C(D.Ve,B.eXU(r,t.gaIV()?A.bh:A.cF,s),s),C.D(new C.C(D.bfE,C.bu(C.m(18),C.b2(s,s,s,new B.bak(t.f,t.r,t.w,s),A.f9),A.ao),s),1),new C.C(A.fq,C.d("Alive together: "+A.k.U(t.Q)+" s     Best: "+A.k.U(t.as)+" s",s,s,s,s,s,s,D.eHU,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=B.hp(A.bh,A.k.aa(w,1)+"\xd7","Grass growth",2,0.2,new B.dJy(t),w)
v=t.y
v=B.hp(A.c4,A.k.aa(v,1)+"\xd7","Rabbit breeding",2,0.3,new B.dJz(t),v)
u=t.z
return B.jx(A.bh,A.fY,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.v(C.a([w,v,B.hp(A.cQ,A.k.aa(u,1)+"\xd7","Fox hunting",2,0.3,new B.dJA(t),u),new B.eF(C.a([new B.dw("Drought",!1,new B.dJB(t),A.xl,A.aL,s),new B.dw("Disease",!1,new B.dJC(t),D.bsv,A.bC,s),new B.dw("+ Foxes",!1,new B.dJD(t),s,A.cQ,s),new B.dw("+ Rabbits",!1,new B.dJE(t),s,A.c4,s),new B.dw("Reset",!1,t.gc_f(),A.jM,A.aX,s)],q),s,s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bak.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.Y()
w=C.L()
w.sap(D.bGr.au(0,new C.a9(0,0,d,a0)))
a1.b2(new C.a9(0,0,d,a0),w)
w=h.b
a0=C.aq(A.u3,A.bm,A.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.L()
t.r=a0.gq(0)
a1.b2(new C.a9(0,v,d,v+u),t)
s=A.k.U(w[0]*0.9)
r=new C.eX()
r.dQ(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.ae()*e
o=f*(0.6+0.4*r.ae())
t=Math.sin(a0+q)
n=r.ae()
m=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
m.r=A.fx.gq(0)
m.c=1.6
l=m.I()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new B.cZ5(h,a2,f,a1)
k.$5(Math.min(A.k.U(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.U(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.a9(10,a0,e,u)
t=C.L()
t.r=D.b48.gq(0)
a1.b2(new C.a9(0,f,d,f+g),t)
i=C.L()
i.r=A.dw.gq(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.I()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new B.cZ7(h,j,a1)
g.$3(0,100,A.bm)
g.$3(1,120,A.c4)
g.$3(2,24,A.cQ)
g=new B.cZ6(a1,j)
g.$3("Grass "+A.k.U(w[0]),A.bm,16)
g.$3("Rabbits "+A.k.U(w[1]),A.c4,102)
g.$3("Foxes "+A.k.U(w[2]),A.cQ,200)},
ar(d){return!0}}
B.aIv.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.aOP.prototype={
gu8(){return A.d.cG(this.a,0,new B.bCe())}}
B.Sp.prototype={
S(){var w=x.S
return new B.bfy(B.hFp(),C.bZ(5,0,!1,w),C.aZ(w),A.bw,null,null)}}
B.bfy.prototype={
gv5(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cG(t,0,new B.dv7())},
Z(){var w,v=this
v.a0()
w=v.qR(new B.dvk(v))
w.kp(0)
v.x!==$&&C.aO()
v.x=w
B.yA("balance_lab").bx(new B.dvl(v),x.P)},
p(){var w=this.x
w===$&&C.c()
w.p()
this.bpb()},
cq8(d){var w,v=this
v.n(new B.dv8(v,d))
B.vg("click",v.f[d],60,0.4)
if(v.gv5()===v.d[v.e].gu8()&&v.r.K(0,v.e)){B.vg("zap",10,260,0.5)
w=v.r
w=C.z(w,C.a2(w).k("cl.E"))
B.vd("balance_lab",C.E(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.J(k,new B.dvd(),C.U(k).k("J<1,n>")).aF(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aF(k," + ")
if(o.gv5()===m[o.e].gu8())s="\u2696\ufe0f Balanced! "+m[o.e].gu8()+" = "+o.gv5()+". The torques are equal, so the seesaw stays level."
else s=o.gv5()>m[o.e].gu8()?"The right side is too strong ("+o.gv5()+" vs "+m[o.e].gu8()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].gu8()+" vs "+o.gv5()+"). Add weight to the right, or place it further from the middle."
k=o.gv5()===m[o.e].gu8()?A.bh:A.aL
k=B.bwj(s,k,o.gv5()===m[o.e].gu8()&&o.e<m.length-1?new B.ff(A.jl,"Next",new B.dve(o),A.bh,n):n)
w=C.D(C.ck(new B.dvf(o,l)),1)
u=j.length===0?"0":j
u=C.D(C.d("Left torque\n"+u+" = "+m[o.e].gu8(),n,n,n,n,n,n,D.aLa,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.v(C.a([new C.C(D.Ve,k,n),w,new C.C(D.acM,C.B(C.a([u,C.D(C.d("Right torque\n"+r+" = "+o.gv5(),n,n,n,n,n,n,D.aLa,A.dM,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new B.dw(w+p,o.e===v,new B.dvg(o,v),n,A.aL,n))}return B.jx(A.aL,A.fY,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.v(C.a([new B.eF(u,"LEVEL",n),new B.eF(C.a([new B.dw("Clear right side",!1,new B.dvh(o),A.jM,A.cF,n)],q),n,n)],q),A.m,n,A.e,A.Q,0,A.p))}}
B.b6n.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.aQ($.Y().r,A.aq,null,null,C.a([],x.v))
i.E(new C.b5(h,f))
w=f+70
i.E(new C.ao(h-30,w))
i.E(new C.ao(h+30,w))
i.E(new C.bE())
v=C.L()
v.r=A.ai.gq(0)
d.aO(i,v)
v=h-120
i=C.L()
i.r=A.aI.gq(0)
d.b2(new C.a9(v,w,v+240,w+8),i)
i=d.a
J.bB(i.save())
i.translate(h,f)
d.iT(0,j.b)
u=g*5.8
t=C.bF(new C.a9(-u,-9,u,9),A.hJ)
w=C.L()
w.sap(D.bJa.au(0,new C.a9(t.a,t.b,t.c,t.d)))
d.aK(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.Y()
v=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
v.r=A.hQ.gq(0)
v.c=1.5
r=v.I()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
B.f9p(d,""+Math.abs(s),new C.u(w,22),A.c2,10)}q=new B.cy8(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,A.aX)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],A.bU)
if(w[s]===0){l=C.bF(C.cN(new C.u(m,-22),22,v),A.hJ)
$.Y()
k=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
k.b=A.ae
k.c=1.4
k.r=A.ba.gq(0)
r=k.I()
i.drawRRect(C.f7(l),r)
r.delete()
B.f9p(d,"+",new C.u(m,-22),A.c2,14)}}i.restore()
$.Y()
i=C.L()
i.r=(j.e?A.bh:A.aJ).gq(0)
d.af(new C.u(h,f),7,i)},
ar(d){return!0},
gjw(){return this.e}}
B.Tn.prototype={
S(){return new B.bg2(C.a([16,32,12,24],x.t),C.aZ(x.S),A.bw,null,null)}}
B.bg2.prototype={
gZy(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gabe(){var w=this.gZy(),v=this.r,u=D.asQ[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.d7(this.d,x.S).a<4)
else w=!1
return w},
Z(){var w,v=this
v.a0()
w=v.qR(new B.dNA(v))
w.kp(0)
v.x!==$&&C.aO()
v.x=w
B.yA("gear_lab").bx(new B.dNB(v),x.P)},
p(){var w=this.x
w===$&&C.c()
w.p()
this.bpF()},
c_i(d,e){var w,v=this
v.n(new B.dNq(v,d,e))
if(v.gabe()&&v.w.K(0,v.r)){B.vg("zap",8,240,0.45)
w=v.w
w=C.z(w,C.a2(w).k("cl.E"))
B.vd("gear_lab",C.E(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.gZy(),n=r.gZy(),m=D.asQ[r.r].a
m=r.gabe()?"\u2705 Done! Ratio "+A.k.aa(r.gZy(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gabe()?A.bh:A.cQ
v=r.d
u=x.p
n=C.v(C.a([new C.C(D.Ve,B.bwj(m,w,r.gabe()&&r.r<7?new B.ff(A.jl,"Next",new B.dNu(r),A.bh,q):q),q),C.D(C.b2(q,q,q,new B.bbN(v,r.f,q),A.f9),1),new C.C(D.acM,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.aa(r.gZy(),2)+"   \xb7   Output "+A.k.aa(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.aa(1/n,2),q,q,q,q,q,q,P.a45,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new B.dw(m+s,r.r===t,new B.dNv(r,t),q,A.cQ,q))}p=r.e
u=C.a([new B.eF(o,"GOAL",q),B.hp(A.aX,""+A.k.U(p)+" rpm","Input speed",120,10,new B.dNw(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new B.at1("Gear "+s+" teeth",p,new B.dNx(r,t),8,40,D.cXk[t],""+p,q))}return B.jx(A.cQ,A.fY,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.v(u,A.m,q,A.e,A.Q,0,A.p))}}
B.bbN.prototype={
bJS(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.Y(),j=C.a([],x.v),i=new C.aQ(k.r,A.aq,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.dX5,D.e0B,D.eff,D.e7d],s=v===0,r=0;r<4;++r){q=t[r]
p=q.a
o=u+p*h
n=e+q.b
m=k+Math.cos(o)*n
l=w+Math.sin(o)*n
if(s&&p===0){p=new C.b5(m,l)
j.push(p)
m=i.f
if(m!=null)p.by(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}else{p=new C.ao(m,l)
j.push(p)
m=i.f
if(m!=null)p.by(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}}}i.E(new C.bE())
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
n=A.d.ft(g,A.pR)
m=-n-6
l=n+6
r=e.a
u=e.b
k=Math.min(r/(o-p),u/(l-m))*0.96
s=d.a
J.bB(s.save())
s.translate(r/2-(p+o)/2*k,u/2-(m+l)/2*k)
d.bV(0,k)
j=this.c
u=w[0]
r=w[1]
i=-j*u/r+3.141592653589793/r
r=w[2]
u=w[3]
h=new B.d53(this,d)
h.$6$back(new C.u(t,0),g[2],r,i,A.dl,!0)
h.$5(new C.u(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.dk)
h.$5(new C.u(0,0),g[0],w[0],j,A.mr)
h.$5(new C.u(t,0),g[1],w[1],i,A.fT)
s.restore()
s=new B.d54(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aX)
s.$3("2+3 \xb7 shared axle",t,A.cQ)
s.$3("4 \xb7 output",q,A.bh)},
ar(d){return!0}}
B.Sy.prototype={
S(){var w=$.av()
return new B.bfL(new C.ap(new C.bc("Meet me at noon",A.b2,A.aM),w),new C.ap(new C.bc("LEMON",A.b2,A.aM),w),C.aZ(x.S))}}
B.bfL.prototype={
Z(){this.a0()
this.aTs()
B.yA("cipher_lab").bx(new B.dzj(this),x.P)},
p(){var w=this.d,v=$.av()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
aTs(){this.y=1+A.cB.aB(25)
this.z=0},
ga7e(){var w=this
return B.a_K(B.a_K(D.Ft[w.x],w.y),-w.z)===D.Ft[w.x]},
gauv(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=B.a_K(u,v.w)
break A}if(1===t){w=new C.J(C.a(B.a_K(u,0).split(""),x.s),new B.dz1(),x.dv).fN(0)
break A}w=B.hRO(u,v.e.a.a)
break A}return w},
aOY(d){var w,v,u,t,s,r=null,q=C.bZ(26,0,!1,x.S)
for(w=new C.d_(d.toUpperCase()),v=x.e8,w=new C.bU(w,w.gJ(0),v.k("bU<bS.E>")),v=v.k("bS.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.ft(q,A.yT))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.b1(2,2)
v.push(new C.bH(1,A.br,C.v(C.a([C.p(r,r,A.h,r,r,new C.o(A.aX,r,r,new C.bv(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.Kd,r,r,r,r),new C.w(C.jw(65+s),r,D.eJB,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.m9,A.j,0,A.p),r))}return new C.a5(r,70,C.B(v,A.dH,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=C.a([C.aK(o,A.U,!1,o,!0,A.q,o,C.aL(),p.d,o,o,o,o,o,2,C.bn(o,new C.b3(4,C.m(14),A.X),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l9,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ah,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dza(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,D.eE7,!0,A.a5,o,A.am,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,C.a([A.T,C.aK(o,A.U,!1,o,!0,A.q,o,C.aL(),p.e,o,o,o,o,o,2,C.bn(o,new C.b3(4,C.m(14),A.X),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l9,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ah,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dzb(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.iC,!0,A.a5,o,A.am,o,o,o,o)],v))}w.push(A.ay)
w.push(D.f7E)
w.push(A.av)
v=A.aX.j(0.12)
u=C.m(14)
t=C.H(A.aX.j(0.4),A.r,1)
w.push(C.p(o,C.yU(p.gauv().length===0?"\u2026":p.gauv(),D.eIE,o),A.h,o,o,new C.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bB,o,o,o))
w.push(A.ab)
w.push(B.bwj(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aX,o))
w.push(A.ab)
w.push(D.eQv)
w.push(A.av)
w.push(p.aOY(p.gauv()))
w.push(A.av)
w.push(D.eSN)
s=C.cL(w,o,A.bB,o,o,A.ak,!1)}else{w=B.bwj("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aL,o)
v=C.d(B.a_K(D.Ft[p.x],p.y),o,o,o,o,o,o,D.eJ9,o,o,o)
u=(p.ga7e()?A.bh:A.aX).j(0.14)
t=C.m(14)
r=C.H((p.ga7e()?A.bh:A.aX).j(0.5),A.r,1)
t=C.a([w,A.ab,D.f1L,v,A.T,D.eXA,C.p(o,C.d(B.a_K(B.a_K(D.Ft[p.x],p.y),-p.z),o,o,o,o,o,o,D.eKB,o,o,o),A.h,o,o,new C.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bB,o,o,o),A.ab,p.aOY(B.a_K(D.Ft[p.x],p.y)),A.P],x.p)
if(p.ga7e())t.push(B.bwj("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.bh,new B.ff(A.jM,"Next",new B.dzc(p),A.bh,o)))
s=C.cL(t,o,A.bB,o,o,A.ak,!1)}w=p.f
v=x.p
w=C.a([new B.eF(C.a([new B.dw("Make a secret",w===0,new B.dzd(p),A.j4,A.aX,o),new B.dw("Crack a code",w===1,new B.dze(p),A.qp,A.aL,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new B.dw(n[q],p.r===q,new B.dzf(p,q),o,A.aX,o))
v=C.a([new B.eF(u,o,o)],v)
if(p.r===0){u=p.w
v.push(B.hp(A.aX,""+u,"Shift",25,1,new B.dzg(p),u))}A.d.v(w,v)}else{v=p.z
w.push(B.hp(A.aL,""+v,"Shift back",25,0,new B.dzh(p),v))}return B.jx(A.aX,A.fY,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.v(w,A.m,o,A.e,A.Q,0,A.p))}}
B.aIa.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.aID.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.fb.prototype={}
B.vl.prototype={
aIa(d,e,f,g){var w=this
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
B.a88.prototype={}
B.a9c.prototype={}
B.a2o.prototype={
b88(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.he()?-1:1
v=t.ae()*3.141592653589793*2
u=f*(0.3+t.ae())
s.push(new B.a88(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ae()*0.45));++r}},
bX0(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bm(w,new B.bHO())},
agX(d,e,f,g){var w="p"+this.c++,v=new B.vl(w,e,f,g)
v.aIa(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bm(this.b,new B.bHZ(e))},
a7(d){A.d.a7(this.a)
A.d.a7(this.b)},
cxK(d,e,f,g,h){return A.d.ba(this.b,new B.bHU(e,f,g,h))},
azP(d,e,f,g){var w
if(d===f||this.cxK(0,d,e,f,g))return null
w=new B.a9c(d,e,f,g)
this.b.push(w)
return w},
ax_(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
b11(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
a2H(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c_j(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.xR.h(0,v)
if(w!=null)return w.a
return 100},
a5h(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this
a0.d+=a2
a0.bX0(a2)
a0.w=Math.max(0,a0.w-a2)
w=Math.min(a2*6,0.12)
for(v=a0.a,u=v.length,t=C.U(v).k("a4<1>"),s=0;r=v.length,s<r;v.length===u||(0,C.K)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.CW===0&&q.cx===0){p=new C.a4(v,new B.bI_(a0),t).cG(0,0,new B.bI0(a0))
q.ch=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a2*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=C.T(x.N,u)
n=new B.bI2(o)
m=C.a([],x.t)
l=new B.bI1(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.K)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a0.b,r=t.length,s=0;s<t.length;t.length===r||(0,C.K)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=C.T(u,u)
f=new B.bI4(g,l,n)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,C.K)(v),++s){q=v[s]
f.$2(q,0)
f.$2(q,1)}e=g.a
if(e===0)return
s=0
for(;;){if(!(s<t)){d=0
break}q=v[s]
u=q.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){d=f.$2(q,1)
break}++s}a0.cng(e,d,w,!0)
a0.bGX(a2)},
cng(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=C.T(x.N,b3),b5=new B.bHQ(b4),b6=C.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new B.bHP(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.K)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new B.bHS(C.T(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,C.K)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=C.bZ(b7,0,!1,b3)
v=x.W
k=C.T(v,b3)
j=C.T(v,b3)
v=b2.x
i=0.3/b9
q=x.b
h=b7<0
g="Length must be a non-negative integer: "+b7
f=0
for(;;){if(!(f<(c0?10:1)))break
if(h)C.b9(C.dF(g,null))
e=C.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=C.bZ(b7,0,!1,b3)
a0=C.bZ(b7,0,!1,b3)
k.a7(0)
j.a7(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,C.K)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/b2.b11(t)
a4=b2.ax_(t)*a3}else{a5=t.x
a3=1e-9
a4=0
if(!(a5&&a2!=="capacitor"))if(a2==="switch")a3=t.w?100:1e-9
else if(a2==="fuse")a3=20
else{a6=a2==="led"
if(a6||a2==="diode"){a2=v.h(0,t.a)
a7=a2===!0
if(a7)a3=a6?0.06666666666666667:1.25
if(a7)a4=a3*(a6?1.9:0.7)}else if(a2==="buck"||a2==="regulator"){a4=3.3333333333333335*t.ch
a3=3.3333333333333335}else if(a2==="capacitor"){a4=i*t.z
a3=a5?1e-9:i}else a3=1/b2.c_j(t)}}k.m(0,t,a3)
j.m(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bJR(e,a0,b8)
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
if(b1!==b0){v.m(0,a2,b1)
a8=!0}}if(!a8)break;++f
c0=!0}for(b3=w.length,u=0;u<w.length;w.length===b3||(0,C.K)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
v=l[o]
q=l[n]
t.cy=v-q
h=t.b
if(h==="buck"||h==="regulator"){g=l[b8]
t.CW=v-g
t.cx=q-g}v=k.h(0,t)
if(v==null)v=0
q=t.cy
g=j.h(0,t)
if(g==null)g=0
t.db=v*q-g
if(h==="capacitor"&&!t.x)t.z=t.cy}return!0},
bJR(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return C.bZ(d,0,!1,x.i)
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
t[m]=t[m]-g*u[l][m]}}}f=C.bZ(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bGX(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.x,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.db
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}if((m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.ax_(o)/a1.b11(o)
if(k>0.3){m=Math.abs(o.db)
m=m>0.4&&m>k*0.55&&!a1.bzj(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.b88(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.rT(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.cy
l=o.db
j=Math.abs(m*l)
i=Math.abs(l)
if((n==="buck"||n==="regulator")&&!o.x){m=n==="regulator"
h=m?5:o.e
if(i<0.002)o.ch=A.k.D(o.CW-h,0,24)
else o.ch=A.k.D(o.ch+(o.cx-h)*0.7,0,24)
l=o.CW
g=l>h+0.2&&Math.abs(o.cx-h)<0.35?1:0
o.dx=g
o.ax=g>0?o.ax+a2:0
if(l>26)a1.rT(o,"The "+$.xP().h(0,n).b+" got "+A.k.aa(o.CW,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.rT(o,"More than 1.5 amps went through the "+$.xP().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.ch*i>2.5)a1.rT(o,"The regulator had to turn "+A.k.aa(o.ch,1)+" V into heat while "+A.k.U(i*1000)+" mA flowed. That is "+A.k.aa(o.ch*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.dx=m===!0?1:0
if(i>1.5)a1.rT(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.xR.h(0,n)
if(f!=null){m=f.d
e=o.cy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.xP().h(0,n).b
l=f.b
l=l===A.k.jA(l)?""+A.k.U(l):C.t(l)
g=f.c
g=g===A.k.jA(g)?""+A.k.U(g):C.t(g)
a1.rT(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.aa(Math.abs(o.cy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.dx=m
o.ax=m>0?o.ax+a2:0
if(D.eqx.t(0,n)){m=o.dx>0?A.k.D((Math.abs(o.cy)-1)/6,0.15,1.4):0
o.dx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.dx=o.x?0:A.k.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.rT(o,"The bulb got "+A.k.aa(Math.abs(o.cy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.dx=o.x?0:A.k.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.rT(o,"The LED had "+A.k.U(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.dx=A.k.D(j/14,0,1)
break
case"motor":n=A.k.D(i/0.5,0,1.6)
o.dx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.dx=A.k.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.rT(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.dx=o.x?0:A.k.D(i/1,0,1)
if(!o.x&&i>1)a1.rT(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.rT(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.dx=A.k.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.rT(o,"The capacitor was charged to "+A.k.aa(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.dx=o.f
break}}},
bzj(d){return A.d.ba(this.a,new B.bHN(d))},
rT(d,e){var w
d.x=!0
d.ay=e
this.b88(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bcC(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.x.a7(0)},
aCT(d){var w=d.b
return D.aHI.t(0,w)||D.xR.an(0,w)||w==="buck"||w==="regulator"},
b9v(d){var w,v=!0
if(!this.a2H(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.xR.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
SO(d,e){var w=this.b
return new C.a4(w,new B.bI6(d,e),C.U(w).k("a4<1>")).gJ(0)},
Br(d){var w,v
if(d.x)return!1
w=d.b
if(D.xR.an(0,w))return d.dx>0
v=d.dx
return v>(w==="led"?0.02:0.05)},
b7F(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.xP().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aCT(d)||i.Br(d))return null
w=i.SO(d,0)
v=i.SO(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=C.U(u).k("a4<1>")
s=C.z(new C.a4(u,i.gcFX(),t),t.k("G.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.CW
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jA(r)?""+A.k.U(r):C.t(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.aa(d.CW,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.xR.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.cy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aCY("battery"),o=J.aV(t.a),t=new C.hK(o,t.b);t.C();){n=o.gT(o)
if(n.e===1.5&&n.as<=0.02&&i.SO(n,0)+i.SO(n,1)>0){if(n.cy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aCY("switch"),o=J.aV(t.a),t=new C.hK(o,t.b);t.C();)if(!o.gT(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.xP().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}if(q!=null&&Math.abs(d.cy)<q.b&&Math.abs(d.db)>0.0005){j=A.d.ba(u,new B.bHV(i,d))
h=q.b
h=h===A.k.jA(h)?""+A.k.U(h):C.t(h)
u=A.k.aa(Math.abs(d.cy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.db)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.aa(Math.abs(d.cy),1)+" V. Use a bigger battery."
if(Math.abs(d.db)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.aa(Math.abs(d.cy),1)+" V). Try a bigger battery."},
aCY(d){var w=this.a
return new C.a4(w,new B.bHY(d),C.U(w).k("a4<1>"))},
aCx(d){return this.aCY(d).ba(0,new B.bHX(0.35))},
aja(d,e){return A.d.ba(this.a,new B.bHW(e))}}
B.agg.prototype={
a5(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=b2.a,a8=b2.b,a9=0+a7,b0=0+a8
$.Y()
w=C.L()
w.r=D.aa3.gq(0)
b1.b2(new C.a9(0,0,a9,b0),w)
v=C.L()
v.r=A.c.j(0.06).gq(0)
for(w=b1.a,u=12;u<a7;u+=24)for(t=12;t<a8;t+=24){s=v.I()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=a5.b,q=r.b,p=q.length,o=a5.f,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-42:42
l=l.d
i=m.c
h=i.c
g=m.d===0?-42:42
a5.cuV(b1,new C.u(k*a7+j,l*a8),new C.u(h*a7+g,i.d*a8),m,m===o)}q=a5.d
if(q!=null&&a5.e!=null){f=B.hdw(q.a,q.b,b2)
q=a5.e
q.toString
$.Y()
p=C.L()
p.r=A.af.gq(0)
p.c=3
p.d=A.bN
b1.bE(f,q,p)}for(q=r.a,p=q.length,o=a5.c,l=a5.r,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){e=q[n]
k=e.c*a7
j=e.d*a8
if(e.Q>0){i=Math.sin(r.d*30)
$.Y()
h=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
h.r=D.a9h.j(A.k.D(e.Q*0.45,0,0.6)).gq(0)
h.z=A.B1
s=h.I()
w.drawCircle(k,j,46+14*i,s)
s.delete()}d=l.h(0,e.a)
if(d==null)d=1
J.bB(w.save())
w.translate(k,j)
i=A.k.D(A.n5.av(0,A.k.D(d,0,1)),0.01,1.4)
w.scale(i,i)
a5.c8O(b1,e,e===o)
w.restore()
if(!e.x){i=e.b
i=(D.aHI.t(0,i)||D.xR.an(0,i)||i==="buck"||i==="regulator")&&!r.Br(e)&&r.SO(e,0)+r.SO(e,1)>0}else i=!1
if(i){k+=0
j+=-40
$.Y()
i=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=A.aZ.gq(0)
s=i.I()
w.drawCircle(k,j,10,s)
s.delete()
a0=new C.l3(new C.es("!",a6,a6,A.cW,a6,a6,a6,a6,a6,a6,new C.F(!0,A.x,a6,a6,a6,a6,14,A.u,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6)),A.a5,A.cm,new C.k4(1),a6,a6,a6,a6,A.cj,a6)
a0.fe()
a0.a5(b1,new C.u(k+-3,j+-8))}for(a1=0;a1<2;++a1){k=e.c
j=a1===0
i=j?-42:42
i=k*a7+i
k=e.d*a8
$.Y()
h=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
h.r=D.aa3.gq(0)
s=h.I()
w.drawCircle(i,k,7,s)
s.delete()
h=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
h.b=A.ae
h.c=2.4
h.r=(j&&r.b9v(e)?A.cF:A.af).gq(0)
s=h.I()
w.drawCircle(i,k,6,s)
s.delete()
if(j&&r.b9v(e)){a0=new C.l3(new C.es("+",a6,a6,A.cW,a6,a6,a6,a6,a6,a6,new C.F(!0,A.cF,a6,a6,a6,a6,13,A.u,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6)),A.a5,A.cm,new C.k4(1),a6,a6,a6,a6,A.cj,a6)
a0.fe()
a0.a5(b1,new C.u(i+-4,k+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n){a2=p[n]
l=a2.a*a7+a2.c
k=a2.b*a8+a2.d
a3=A.k.D(a2.r/0.8,0,1)
j=C.aq(D.b9t,D.bah,a3)
j.toString
i=a2.f
$.Y()
h=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
h.r=j.gq(0)
h.c=2.4
h.d=A.bN
s=h.I()
w.drawLine.apply(w,[l,k,l-a2.e*0.035,k-i*0.035,s])
s.delete()
i=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
i.r=j.j(0.35*a3).gq(0)
i.z=A.OK
s=i.I()
w.drawCircle(l,k,4.5*a3+1,s)
s.delete()}if(A.d.ba(q,new B.bDf())){a4=A.d.cG(q,0,new B.bDg())
$.Y()
a8=C.L()
a8.r=D.b_X.j(0.05+0.09*a4*(0.5+0.5*Math.sin(r.d*22))).gq(0)
b1.b2(new C.a9(0,0,a9,b0),a8)
a0=C.io(a6,a6,a6,a6,D.eAU,A.a5,A.cm,a6,A.en,A.cj)
a0.xY(a7-24)
a0.a5(b1,new C.u(12,10))}},
pA(d,e,f,g,h){var w=null,v=C.io(w,w,w,w,C.dl(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a5,A.cm,w,A.en,A.cj)
v.fe()
v.a5(d,f)},
cuV(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aQ($.Y().r,A.aq,null,null,C.a([],x.v))
d.E(new C.b5(a1.a,a1.b))
w=B.h61(a1,a2,a3)
d.E(new C.d0(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.db)
t=a3.c
s=Math.abs(t.db)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.aq(A.aL,D.a9h,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.aq(A.aX,A.aL,A.k.D(r*1.2,0,1))
u.toString
o=u}else o=A.bv
u=C.L()
u.b=A.ae
u.c=a4?7:5
u.d=A.bN
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gq(0)
a0.aO(d,u)
u=C.L()
u.b=A.ae
u.c=2.4
u.d=A.bN
u.r=(a4?A.c:o).gq(0)
a0.aO(d,u)
if(q){n=new C.QP(new C.uU(C.wl(d),!1,C.a([],x.R))).gL(0)
m=40+A.k.D(r*120,0,160)
l=v.db+t.db>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.j1()
i=t[u].b
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.j1()
h=t[u].b
h===$&&C.c()
h=A.k.G(j*22+i*m*l,h.a.length())
v.j1()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.j1()
g=t[u].b
g===$&&C.c()
f=A.k.G(h+i,g.a.length())
v.j1()
i=t[u].Le(f).a
h=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
h.r=A.c.gq(0)
e=h.I()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
No(d,e,f,g){var w,v,u,t
$.Y()
w=C.L()
v=g?A.aY:A.a3
u=g?A.b1:A.a7
t=C.aq(e,A.x,0.3)
t.toString
w.sap(new C.a3(v,u,A.w,C.a([e,f,e,t],x.O),A.Fv,null).au(0,d))
return w},
asR(d,e,f){return this.No(d,e,f,!0)},
bWC(d,e){return this.No(d,A.bv,A.iX,e)},
aeC(d,e){var w,v,u
$.Y()
w=C.L()
w.sap(D.aGo.au(0,C.bV(e,4.2)))
d.af(e,4.2,w)
w=e.ao(0,D.dNb)
v=e.ao(0,D.dNk)
u=C.L()
u.r=A.eC.gq(0)
u.c=1.2
d.bE(w,v,u)},
c8O(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=4294626325,b4=4286331629,b5=4287322667,b6=4293870660,b7=$.Y(),b8=C.L()
b8.sap(D.bG8.au(0,D.eo1))
b8.c=3.4
b8.d=A.bN
w=C.L()
w.r=A.x.j(0.45).gq(0)
w.z=H.mQ
b9.j3(D.enV,w)
if(c1){w=C.bF(D.eo0,A.kd)
v=C.L()
v.r=A.c.j(0.14).gq(0)
b9.aK(w,v)}b9.bE(D.dOE,D.dOu,b8)
b9.bE(D.dMq,D.dMK,b8)
u=c0.x
switch(c0.b){case"battery":b1.bwl(b9,c0)
break
case"solar":t=C.bF(D.enY,A.j9)
b9.aK(t,b1.No(new C.a9(t.a,t.b,t.c,t.d),A.eB,A.c4,!1))
b7=C.L()
w=C.aq(D.b2M,A.da,0.25+0.55*c0.f)
w.toString
v=C.aq(D.b9C,A.lT,0.3+0.4*c0.f)
v.toString
b7.sap(new C.a3(A.aw,A.aC,A.w,C.a([w,v],x.O),b2,b2).au(0,D.a2N))
b9.b2(D.a2N,b7)
s=C.L()
s.r=A.c.j(0.35).gq(0)
s.c=0.8
for(b7=b9.a,r=1;r<6;++r){w=-34+r*68/6
q=s.I()
b7.drawLine.apply(b7,[w,-18,w,18,q])
q.delete()}for(r=1;r<4;++r){w=-18+r*9
q=s.I()
b7.drawLine.apply(b7,[-34,w,34,w,q])
q.delete()}for(r=0;r<6;++r){w=-34+(r+0.5)*68/6
$.Y()
v=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
v.r=A.cp.j(0.5).gq(0)
v.c=0.6
q=v.I()
b7.drawLine.apply(b7,[w,-18,w,18,q])
q.delete()}b7=new C.aQ($.Y().r,A.aq,b2,b2,C.a([],x.v))
b7.E(new C.b5(-34,18))
b7.E(new C.ao(-6+40*c0.f,-18))
b7.E(new C.ao(4+40*c0.f,-18))
b7.E(new C.ao(-24,18))
b7.E(new C.bE())
w=C.L()
w.r=A.c.j(0.1+0.22*c0.f).gq(0)
b9.aO(b7,w)
w=c0.f
b7=C.L()
b7.r=A.dZ.j(0.9).gq(0)
b9.af(D.dMw,4+4*w,b7)
break
case"crank":p=C.bF(D.enL,A.h0)
b9.aK(p,b1.asR(new C.a9(p.a,p.b,p.c,p.d),A.bt,A.bI))
b7=C.L()
b7.sap(D.aGp.au(0,C.bV(A.J,12)))
b9.af(A.J,12,b7)
o=new C.u(Math.cos(c0.y)*22,Math.sin(c0.y)*22)
b7=C.L()
b7.r=A.cp.gq(0)
b7.c=5
b7.d=A.bN
b9.bE(A.J,o,b7)
b7=C.L()
b7.sap(D.dWe.au(0,C.bV(o,7)))
b9.af(o,7,b7)
b1.aeC(b9,D.dOn)
b1.aeC(b9,D.dMj)
break
case"turbine":b7=b7.r
w=x.v
v=new C.aQ(b7,A.aq,b2,b2,C.a([],w))
v.E(new C.b5(-3,24))
v.E(new C.ao(3,24))
v.E(new C.ao(1.5,0))
v.E(new C.ao(-1.5,0))
v.E(new C.bE())
n=C.L()
n.r=A.c4.gq(0)
b9.aO(v,n)
for(v=b9.a,m=0;m<3;++m){n=c0.y
J.bB(v.save())
v.rotate((n+m*2.094)*180/3.141592653589793,0,0)
n=C.a([],w)
l=new C.aQ(b7,A.aq,b2,b2,n)
n.push(new C.b5(0,-2))
n.push(new C.d0(6,-14,2,-30))
n.push(new C.d0(-2,-14,0,-2))
n.push(new C.bE())
n=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
n.r=A.c.gq(0)
q=n.I()
n=l.gbL().a.snapshot()
v.drawPath((l.e=new C.cE(n)).a,q)
q.delete()
v.restore()}b7=C.L()
b7.sap(D.dVW.au(0,C.bV(A.J,4.5)))
b9.af(A.J,4.5,b7)
break
case"switch":p=C.bF(D.enR,A.tC)
b7=C.L()
b7.sap(D.ajB.au(0,new C.a9(p.a,p.b,p.c,p.d)))
b9.aK(p,b7)
b1.aeC(b9,D.PC)
b1.aeC(b9,D.aBn)
k=c0.w?D.aBn:D.dM3
b7=C.L()
b7.r=A.aF.gq(0)
b7.c=6
b7.d=A.bN
b9.bE(D.PC,k,b7)
b7=C.L()
b7.r=(c0.w?A.bh:A.c4).gq(0)
b7.c=4
b7.d=A.bN
b9.bE(D.PC,k,b7)
b7=C.l2(D.PC,k,0.85)
b7.toString
w=C.L()
w.r=A.aE.gq(0)
b9.af(b7,5,w)
break
case"fuse":j=C.bF(D.aGU,D.aGu)
b7=C.L()
b7.r=A.fe.j(0.25).gq(0)
b9.aK(j,b7)
b7=C.L()
b7.b=A.ae
b7.c=1.4
b7.r=A.aA.gq(0)
b9.aK(j,b7)
if(!u){b7=C.L()
b7.c=1.6
b7.r=C.aq(A.c4,A.cQ,c0.dx).gq(0)
b9.bE(D.aBD,D.aBm,b7)}else{b7=C.L()
b7.c=1.6
b7.r=A.c2.gq(0)
b9.bE(D.aBD,D.dOK,b7)
b7=C.L()
b7.c=1.6
b7.r=A.c2.gq(0)
b9.bE(D.dMV,D.aBm,b7)
b7=C.L()
b7.r=A.dx.gq(0)
b9.af(A.J,6,b7)}for(b7=b9.a,i=0;i<2;++i){h=C.cN(new C.u(D.a_L[i]*22,0),20,9)
w=C.bF(h,A.hr)
q=b1.No(h,A.dl,A.nU,!0).I()
b7.drawRRect(C.f7(w),q)
q.delete()}break
case"pot":b7=C.L()
b7.sap(D.dW6.au(0,C.bV(A.J,21)))
b9.af(A.J,21,b7)
for(b7=b9.a,m=0;m<=10;++m){g=2.356194490192345+m*3.141592653589793*1.5/10
w=Math.cos(g)
v=Math.sin(g)
n=Math.cos(g)
l=Math.sin(g)
f=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
f.r=A.aA.gq(0)
f.c=1.2
q=f.I()
b7.drawLine.apply(b7,[w*18,v*18,n*22,l*22,q])
q.delete()}b7=C.L()
b7.sap(D.dVU.au(0,C.bV(A.J,13)))
b9.af(A.J,13,b7)
e=2.356194490192345+c0.f*3.141592653589793*1.5
b7=Math.cos(e)
w=Math.sin(e)
v=Math.cos(e)
n=Math.sin(e)
l=C.L()
l.r=A.aL.gq(0)
l.c=3
l.d=A.bN
b9.bE(new C.u(b7*3,w*3),new C.u(v*12,n*12),l)
break
case"resistor":d=C.bF(D.aGU,D.aGu)
b7=C.L()
b7.sap(D.bJs.au(0,new C.a9(d.a,d.b,d.c,d.d)))
b9.aK(d,b7)
b7=x.O
a0=C.E([47,C.a([C.aY(b3),C.aY(b4),A.x],b7),100,C.a([C.aY(b5),A.x,C.aY(b5)],b7),220,C.a([C.aY(b6),C.aY(b6),C.aY(b5)],b7),470,C.a([C.aY(b3),C.aY(b4),C.aY(b5)],b7),1000,C.a([C.aY(b5),A.x,C.aY(b6)],b7)],x.i,x.bF)
a1=a0.h(0,c0.r)
if(a1==null){b7=a0.h(0,100)
b7.toString
a1=b7}for(b7=b9.a,r=0;r<3;++r){w=-14+r*9
v=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
v.r=a1[r].gq(0)
q=v.I()
b7.drawRect(C.c9(new C.a9(w,-9,w+4.5,9)),q)
q.delete()}b7=C.L()
b7.r=A.aL.gq(0)
b9.b2(D.eo9,b7)
b7=c0.r
b1.pA(b9,b7>=1000?"1k\u03a9":""+A.k.U(b7)+"\u03a9",D.dO2,A.af,10)
break
case"bulb":w=c0.dx
if(w>0){v=C.L()
v.r=A.dZ.j(0.55*w).gq(0)
v.z=A.B1
b9.af(D.v7,34,v)}p=C.cN(D.dLy,12,18)
b9.aK(C.bF(p,A.hr),b1.No(p,A.bv,A.e8,!0))
for(w=b9.a,r=0;r<3;++r){v=13+r*3.5
n=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
n.r=A.dr.gq(0)
n.c=1
q=n.I()
w.drawLine.apply(w,[-9,v,9,v,q])
q.delete()}w=C.L()
if(u)v=A.Tr
else{v=C.aq(A.e8,A.hO,c0.dx)
n=c0.dx
v=v.j(0.25+0.7*n)}if(u)n=A.Da
else{n=C.aq(A.eB,A.dZ,c0.dx)
n.toString}w.sap(new C.bR(A.tY,0.5,A.w,b2,0,C.a([v,n.j(0.18+0.5*c0.dx)],x.O),b2,b2).au(0,C.bV(A.tv,17)))
b9.af(A.tv,17,w)
w=C.L()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gq(0)
b9.af(A.tv,17,w)
b7=b7.r
w=x.v
n=new C.aQ(b7,A.aq,b2,b2,C.a([],w))
n.E(new C.b5(-9,-12))
n.E(new C.d0(-12,-4,-9,0))
v=C.L()
v.b=A.ae
v.c=2
v.r=A.c.j(0.45).gq(0)
b9.aO(n,v)
v=C.L()
v.r=A.cV.gq(0)
v.c=1.4
b9.bE(D.dOG,D.dOI,v)
v=C.L()
v.r=A.cV.gq(0)
v.c=1.4
b9.bE(D.dMO,D.dMR,v)
w=C.a([],w)
a2=new C.aQ(b7,A.aq,b2,b2,w)
a2.E(new C.b5(-4,-2))
for(m=0;m<6;m=a3){a3=m+1
b7=(m&1)===0?-6:1
b7=new C.ao(-4+a3*8/6,-2+b7)
w.push(b7)
v=a2.f
if(v!=null)b7.by(v)
b7=a2.e
if(b7!=null)b7.a.delete()
a2.e=null}$.Y()
b7=C.L()
b7.b=A.ae
b7.c=1.8
if(u)w=A.aT
else{w=C.aq(A.eB,D.b3r,c0.dx)
w.toString}b7.r=w.gq(0)
b9.aO(a2,b7)
break
case"led":w=c0.dx
if(w>0){v=C.L()
v.r=A.aE.j(0.6*w).gq(0)
v.z=D.d6s
b9.af(A.tv,30,v)}w=C.L()
w.r=A.e8.gq(0)
w.c=2.4
b9.bE(D.dOM,D.dOL,w)
w=C.L()
w.r=A.e8.gq(0)
w.c=2.4
b9.bE(D.dMX,D.dMW,w)
b7=b7.r
w=x.v
a4=new C.aQ(b7,A.aq,b2,b2,C.a([],w))
a4.E(new C.b5(-12,8))
a4.E(new C.ao(-12,-6))
a4.E(new C.d0(0,-26,12,-6))
a4.E(new C.ao(12,8))
a4.E(new C.bE())
v=C.L()
if(u)n=A.Jr
else{n=C.aq(A.f1,D.a9S,c0.dx)
n.toString}if(u)l=A.k3
else{l=C.aq(A.k1,A.aE,c0.dx)
l.toString}v.sap(new C.a3(A.aw,A.aC,A.w,C.a([n,l],x.O),b2,b2).au(0,D.eni))
b9.aO(a4,v)
v=C.L()
v.b=A.ae
v.c=1.2
v.r=A.j1.gq(0)
b9.aO(a4,v)
v=C.L()
v.r=A.f2.gq(0)
b9.b2(D.eno,v)
w=new C.aQ(b7,A.aq,b2,b2,C.a([],w))
w.E(new C.b5(-7,-4))
w.E(new C.d0(-6,-12,0,-15))
b7=C.L()
b7.b=A.ae
b7.c=2
b7.r=A.c.j(0.5).gq(0)
b9.aO(w,b7)
break
case"motor":a5=new C.a9(-28,-14,20,14)
b9.aK(C.bF(a5,A.hJ),b1.asR(a5,A.ai,A.aJ))
b7=C.L()
b7.r=A.cK.gq(0)
b9.b2(D.en5,b7)
b7=C.L()
b7.r=A.cp.gq(0)
b9.b2(D.en6,b7)
b7=b9.a
J.bB(b7.save())
b7.translate(31,0)
for(m=0;m<3;++m){J.bB(b7.save())
b7.rotate((c0.y+m*2.094)*180/3.141592653589793,0,0)
w=C.cN(D.dLR,15,7)
v=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
v.r=A.cQ.j(0.9).gq(0)
q=v.I()
b7.drawOval(C.c9(w),q)
q.delete()
b7.restore()}w=C.L()
w.r=A.aF.gq(0)
b9.af(A.J,3,w)
b7.restore()
b1.pA(b9,"M",D.dOm,A.aF,14)
break
case"buzzer":a6=C.cN(A.J,42,42)
b7=C.L()
b7.sap(D.dWa.au(0,a6))
b9.j3(a6,b7)
b7=C.L()
b7.r=A.x.gq(0)
b9.af(A.J,6,b7)
b7=C.L()
b7.b=A.ae
b7.c=1.4
b7.r=A.ba.gq(0)
b9.af(A.J,6,b7)
b1.pA(b9,"+",D.dOf,A.af,12)
for(b7=b9.a,w=b1.b,m=1;m<=3;++m){v=c0.dx
n=v>0?A.k.G(w.d*14,5):0
n=C.bV(A.J,24+m*5+n)
l=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=2
l.r=A.bU.j(v*(1-m*0.22)).gq(0)
q=l.I()
b7.drawArc.apply(b7,[C.c9(n),-40.10704565915762,80.21409131831524,!1,q])
q.delete()}break
case"heater":p=C.bF(D.enO,A.hJ)
w=C.L()
w.sap(D.bH6.au(0,new C.a9(p.a,p.b,p.c,p.d)))
b9.aK(p,w)
w=C.a([],x.v)
a7=new C.aQ(b7.r,A.aq,b2,b2,w)
a7.E(new C.b5(-24,0))
for(m=0;m<8;m=a3){b7=(m&1)===0?-10:10
a3=m+1
b7=new C.d0(-24+m*6+3,b7,-24+a3*6,0)
w.push(b7)
v=a7.f
if(v!=null)b7.by(v)
b7=a7.e
if(b7!=null)b7.a.delete()
a7.e=null}b7=c0.dx
if(b7>0.1){$.Y()
w=C.L()
w.b=A.ae
w.c=10
w.r=D.b41.j(0.5*b7).gq(0)
w.z=A.j7
b9.aO(a7,w)}$.Y()
b7=C.L()
b7.b=A.ae
b7.c=3.2
b7.d=A.bN
b7.r=C.aq(A.lk,F.aaR,c0.dx).gq(0)
b9.aO(a7,b7)
break
case"capacitor":a5=new C.a9(-16,-22,16,18)
b7=C.bF(a5,A.hJ)
w=C.L()
w.sap(D.bG0.au(0,a5))
b9.aK(b7,w)
w=C.L()
w.r=A.c4.gq(0)
b9.b2(D.enu,w)
for(r=0;r<4;++r){a8=new C.l3(new C.es("\u2212",b2,b2,A.cW,b2,b2,b2,b2,b2,b2,new C.F(!0,A.aF,b2,b2,b2,b2,11,A.u,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2)),A.a5,A.cm,new C.k4(1),b2,b2,b2,b2,A.cj,b2)
a8.fe()
a8.a5(b9,new C.u(-14,-18+r*9))}a9=new C.a9(-16,-24,16,-17)
b9.aK(C.bF(a9,A.hr),b1.bWC(a9,!1))
b7=38*c0.dx
w=18-b7
$.Y()
v=C.L()
v.r=A.bh.j(0.5).gq(0)
b9.b2(new C.a9(-3,w,11,w+b7),v)
b1.pA(b9,"1F",D.v7,A.c,11)
break
case"radio":d=C.bF(D.a2N,A.h0)
b7=C.L()
b7.sap(D.bJI.au(0,new C.a9(d.a,d.b,d.c,d.d)))
b9.aK(d,b7)
b7=C.L()
b7.b=A.ae
b7.c=1.4
b7.r=A.nU.j(0.6).gq(0)
b9.aK(d,b7)
b7=C.bF(D.enP,A.j9)
w=C.L()
w.r=A.dz.gq(0)
b9.aK(b7,w)
for(b7=b9.a,r=0;r<6;++r){w=-10+r*4.4
v=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
v.r=A.lk.gq(0)
v.c=1.4
q=v.I()
b7.drawLine.apply(b7,[-27,w,-3,w,q])
q.delete()}w=C.L()
w.r=(c0.dx>0?A.h4:A.nc).gq(0)
b9.b2(D.en8,w)
if(c0.dx>0){w=8+A.k.G(b1.b.d*7,18)
v=C.L()
v.r=A.bQ.gq(0)
v.c=1.6
b9.bE(new C.u(w,-13),new C.u(w,-3),v)}w=C.L()
w.sap(D.aGp.au(0,C.bV(D.a1P,6)))
b9.af(D.a1P,6,w)
w=C.L()
w.r=A.nU.gq(0)
b9.af(D.dMp,4,w)
w=C.L()
w.r=A.e8.gq(0)
w.c=1.8
b9.bE(D.dMn,D.aBr,w)
if(c0.dx>0)for(w=b1.b,m=1;m<=2;++m){v=C.bV(D.aBr,4+m*5+A.k.G(w.d*8,5))
n=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=1.4
n.r=A.ng.j(0.7).gq(0)
q=n.I()
b7.drawArc.apply(b7,[C.c9(v),-137.50987083139756,91.67324722093173,!1,q])
q.delete()}break
case"tv":w=C.bF(D.enX,A.hJ)
v=C.L()
v.r=K.q8.gq(0)
b9.aK(w,v)
b0=C.bF(D.enU,A.hr)
if(c0.dx>0&&!c0.x){b7=b9.a
J.bB(b7.save())
b7.clipRRect(C.f7(b0),$.xN(),!0)
b7.translate(-33,-21)
B.h57(b9,D.esZ,c0.at,b1.b.d,c0.ax,-1)
b7.restore()
b7=C.L()
b7.r=A.bh.gq(0)
b9.af(D.dMB,1.6,b7)}else{w=C.L()
w.r=D.Uc.gq(0)
b9.aK(b0,w)
b7=new C.aQ(b7.r,A.aq,b2,b2,C.a([],x.v))
b7.E(new C.b5(-33,-21))
b7.E(new C.ao(-10,-21))
b7.E(new C.ao(-33,0))
b7.E(new C.bE())
w=C.L()
w.r=A.c.j(0.05).gq(0)
b9.aO(b7,w)}b7=C.L()
b7.r=A.bt.gq(0)
b9.b2(D.enn,b7)
break}B.hPA(b9,c0,b1.b.d,b1.gc_k())
if(u)b1.pA(b9,"\u2716",D.dOO,A.aE,14)},
bwl(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.a9(-28,-13,28,13)
d.aK(C.bF(w,A.tC),m.asR(w,A.eB,A.ij))
v=new C.a9(-22,-13,22,13)
$.Y()
u=C.L()
u.sap(D.aju.au(0,v))
d.b2(v,u)
u=C.L()
u.r=A.e_.gq(0)
d.b2(D.enD,u)
t=new C.a9(28,-5,34,5)
d.aK(C.bF(t,A.h_),m.No(t,A.eB,A.iX,!0))
m.pA(d,"+",D.dM8,A.aL,11)
m.pA(d,"\u2212",D.dOo,A.af,11)
m.pA(d,C.t(l===A.k.jA(l)?A.k.U(l):l)+"V",D.dO8,A.aL,13)
if(l===1.5){u=C.L()
u.r=A.bG.gq(0)
d.b2(D.enC,u)
u=e.as
s=C.L()
s.r=C.aq(A.aE,A.bh,u).gq(0)
d.b2(new C.a9(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.pA(d,"FLAT",D.dO1,A.cF,9)}if(l>2){u=C.L()
u.r=A.ba.gq(0)
u.c=1
d.bE(D.dLF,D.dLx,u)
m.pA(d,l>3?"3 cells":"2 cells",D.dO7,A.aA,8)}}else if(l<=9){r=new C.a9(-22,-17,22,17)
u=C.bF(r,A.tC)
$.Y()
s=C.L()
s.sap(D.bJf.au(0,r))
d.aK(u,s)
s=C.L()
s.r=A.dk.gq(0)
d.b2(D.enE,s)
for(u=d.a,q=0;q<2;++q){p=D.cVz[q]
s=p<0?5:3.6
o=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
o.sap(D.aGo.au(0,C.bV(new C.u(p,-18),5)))
n=o.I()
u.drawCircle(p,-18,s,n)
n.delete()}m.pA(d,"9V",D.dO3,A.c,16)}else{r=new C.a9(-34,-16,34,16)
u=C.bF(r,A.j9)
$.Y()
s=C.L()
s.sap(D.aju.au(0,r))
d.aK(u,s)
s=C.L()
s.r=A.cE.gq(0)
d.b2(D.enW,s)
for(u=d.a,q=0;q<2;++q){s=C.bF(C.cN(new C.u(D.asu[q],-20),8,10),A.h_)
o=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
o.r=A.cp.gq(0)
n=o.I()
u.drawRRect(C.f7(s),n)
n.delete()}m.pA(d,"+",D.dMf,A.aE,10)
m.pA(d,"12V",D.dO4,A.aF,15)}},
ar(d){return!0}}
B.ma.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a7(k)
A.d.a7(d.b)
w=C.T(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new B.vl(o,r,q,p)
n.aIa(o,r,q,p)
k.push(n)
J.id(s[4],new B.cfG(n))
w.m(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.K)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.azP(m,u[1],l,u[3])}}}
B.age.prototype={
S(){var w=x.N
return new B.agf(A.J,A.at,C.T(w,x.gl),C.aZ(w),$,A.bw,0,C.a([],x.X),null,null)}}
B.agf.prototype={
atA(d){var w=this,v=w.as
if(v!=null)v.a9(0)
w.n(new B.bCV(w,d))
w.as=C.cO(A.nr,new B.bCW(w))},
p(){var w=this.as
if(w!=null)w.a9(0)
this.bmp()},
YG(d,e){return this.c6Q(d,e)},
aWu(d){return this.YG(d,!1)},
c6Q(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$YG=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.qg:A.DH
w=3
return C.b(B.hRf(s,r,d.ax<3.2,q),$async$YG)
case 3:p=g
t.ay=!1
if(p!=null)d.at=p
case 1:return C.h(u,v)}})
return C.i($async$YG,v)},
csA(d){var w=this,v=new C.Q(Date.now(),0,!1),u=w.at.ce(0,d.a,new B.bCX()),t=J.cA(u)
t.K(u,v)
t.bm(u,new B.bCY(v))
if(t.gJ(u)<3)return
t.a7(u)
if(w.a.c.Br(d))if(d.b==="tv")w.aWu(d)
else w.Yz(d)
else{t=w.a.c.b7F(d)
w.atA(t==null?"The "+$.xP().h(0,d.b).b+" is off. Give it power first.":t)}},
Yz(d){return this.c6k(d)},
c6k(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$Yz=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return C.b(B.hQX(s,A.k.U(A.k.G(t.a.c.d*0.12,1)*100)),$async$Yz)
case 3:t.ay=!1
case 1:return C.h(u,v)}})
return C.i($async$Yz,v)},
Z(){this.a0()
this.b9F()
this.kM()},
b9F(){this.a.c.e=new B.bDc(this)},
l4(d){var w,v,u,t,s,r=this,q="tri",p="noise"
r.a.c.a5h(0,d)
for(w=r.a.c.a,v=w.length,u=r.ax,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(s.b!=="tv")continue
if(s.dx>0&&!s.x){r.a.toString
if(!u.t(0,s.a)&&!r.ay){u.K(0,s.a)
r.YG(s,!0)}}else u.W(0,s.a)}if((r.z+=d)>0.16){r.z=0
for(w=r.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.dx
if(u>0.2)B.dI(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.dx
if(u>0.08)B.dI(60+u*55,"",130,0,0.12,q)
break
case"heater":if(s.dx>0.2)u=A.cB.ae()<0.5
else u=!1
if(u)B.dI(2400,"",25,0,0.12*s.dx,p)
break
case"radio":if(s.dx>0){B.dI(900+A.cB.aB(800),"",90,0,0.1,p)
if(A.cB.ae()<0.35)B.dI(300+A.cB.aB(6)*70,"",150,0,0.12,q)}break
case"tv":if(s.dx>0)u=A.cB.ae()<0.4
else u=!1
if(u)B.dI(3000,"",40,0,0.07,p)
break
case"speaker":if(s.dx>0)B.dI(330+A.o.G(110*A.k.bw(r.a.c.d*3),4),"",140,0,0.14,q)
break
case"siren":if(s.dx>0)B.dI((A.k.bw(r.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.dx
if(u>0.1)B.dI(90+u*40,"",140,0,0.04,p)
break
case"toycar":u=s.dx
if(u>0.1)B.dI(70+u*60,"",130,0,0.1,q)
break
case"kettle":if(s.dx>0)u=A.cB.ae()<0.5
else u=!1
if(u)B.dI(1200,"",30,0,0.07,p)
break
case"turbine":u=s.f
if(u>0.1)B.dI(80,"",150,0,0.05*u,p)
break
case"crank":u=s.f
if(u>0.15)B.dI(110+u*140,"",70,0,0.08,"saw")
break}}}w=r.a.w
if(w!=null)w.$0()
r.n(new B.bDd())},
b29(d){var w,v,u,t,s,r,q,p,o,n,m,l,k
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
for(o=0;o<2;++o){n=this.y
m=p.c
l=o===0?-42:42
l=m*n.a+l-u
n=p.d*n.b-t
k=Math.sqrt(l*l+n*n)
if(k<r){s=new C.A(p,o)
r=k}}}return s},
aXa(d){var w,v,u,t,s,r,q,p
for(w=this.a.c.a,v=C.U(w).k("dy<1>"),w=new C.dy(w,v),w=new C.bU(w,w.gJ(0),v.k("bU<ai.E>")),u=d.a,v=v.k("ai.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
if(Math.abs(u-r*q.a)<36&&Math.abs(t-p*q.b)<26)return s}return null},
cuW(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
h=B.h61(new C.u(k,o),new C.u(i,n),p)
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
abf(){this.a.toString
this.n(new B.bCy())},
bjd(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cJc[v]
if(!A.d.ba(p.a.c.a,new B.bDe(u,w))){o=new C.u(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?E.Gy:o
s=s?E.Gy:o
q=t.agX(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.m(0,q.a,0)
p.d=q
p.e=null
B.dI(1200,"",50,0,0.3,"tri")
p.abf()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<56;++v)w.push(D.NW[v].a)
u=w.length
t=u>8
s=t?A.d.dt(w,0,A.o.ak(u+1,2)):w
r=t?A.d.fP(w,A.o.ak(w.length+1,2)):A.U
q=n.a.d
if(q!=null){w=C.a2(q).k("cu<1>")
w=C.z(new C.cu(q,w),w.k("G.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,C.K)(w),++v){p=w[v]
o=q.h(0,p)
q.m(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=C.a([],x.p)
n.a.toString
w.push(n.aX_(s,!0))
n.a.toString
if(t)w.push(n.aX_(r,!0))
w.push(C.D(C.ck(new B.bDb(n,q,m)),1))
return C.v(w,A.m,null,A.e,A.j,0,A.p)},
aX_(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.K)(d),++v){u=d[v]
t=$.xP()
s=t.h(0,u).d.j(0.14)
r=new C.b1(14,14)
q=new C.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(C.aH(p,C.p(p,C.v(C.a([new C.w(t.h(0,u).c,p,A.Ht,p,p,p,p,p,p,p,p,p),new C.w(t.h(0,u).b,p,A.mV,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.b6,A.j,0,A.p),A.h,p,p,new C.o(s,p,new C.c1(q,q,q,q),new C.bv(r,r,r,r),p,p,A.n),p,p,p,D.V5,p,p,p,62),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bCz(this,u),p,p,p,p,p,p,!1,A.ad))}return C.p(p,C.cL(m,p,A.fW,p,p,A.b0,!1),A.h,p,p,new C.o(D.TW,p,new C.c1(A.X,A.X,new C.ay(o,1,A.r,-1),A.X),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aUz(d){var w=null,v=C.m(18)
return C.p(w,d,A.h,w,w,new C.o(D.aZB,w,C.H(A.bG,A.r,1),v,w,w,A.n),w,w,w,w,D.bgJ,w,w,w)},
c8P(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.xP().h(0,o),m=d.cy,l=d.db,k=new B.bCR(q,n),j=C.d(n.c,p,p,p,p,p,p,A.R3,p,p,p),i=n.b,h=n.d,g=x.p
i=C.B(C.a([j,A.aa,C.D(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aF(p,p,p,p,D.byq,p,p,p,new B.bCF(q,d),p,p,p,p,"Remove part",A.c8),C.aF(p,p,p,p,A.LH,p,p,p,new B.bCG(q),p,p,p,p,p,A.c8)],g),A.m,p,A.e,A.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,D.Rh,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.eJ0,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.aa(Math.abs(d.cy),2)+" volts  \xb7  "+A.k.aa(Math.abs(d.db)*1000,0)+" milliamps  \xb7  "+A.k.aa(Math.abs(m*l),2)+" watts"
m=C.a([i,j,A.av,w,A.ar,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?A.cF:A.aL,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.b7F(d)
if(v!=null){l=(d.x?A.aE:A.aZ).j(0.14)
j=C.m(10)
i=C.H((d.x?A.aE:A.aZ).j(0.5),A.r,1)
m.push(new C.C(A.ir,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.ePg,p,p,p),A.h,p,p,new C.o(l,p,i,j,p,p,A.n),p,p,p,p,A.ch,p,p,p),p))}if(o==="tv"){l=C.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new B.dw("CH "+t,d.at===u,new B.bCH(q,d,u),p,h,p))}l=C.c8(A.bJ,l,A.bx,4,6)
l=C.a([A.ar,l,A.av,C.d(q.a.c.Br(d)?"Showing: "+D.NG[A.o.G(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.ht,p,p,p)],g)
if(q.a.c.Br(d))l.push(new B.ff(A.Ex,"Open big screen",new B.bCJ(q,d),h,p))
A.d.v(m,l)}if(o==="phone"||o==="tablet"){l=C.a([A.ar,C.d(q.a.c.Br(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.ht,p,p,p)],g)
if(q.a.c.Br(d))l.push(new B.ff(A.Ls,"Open "+(o==="tablet"?"tablet":"phone"),new B.bCK(q,d),h,p))
A.d.v(m,l)}q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.aa(d.CW,1)
if(q.a.c.Br(d))i=d.cx
else{q.a.toString
i=o==="regulator"?5:d.e}i=C.a([A.ar,C.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.aa(i,1)+" V",p,p,p,p,p,p,D.eJP,p,p,p)],g)
if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.cYs[s]
j=r===A.k.jA(r)?A.k.U(r):r
l.push(new B.dw(C.t(j)+" V out",d.e===r,new B.bCL(q,d,r),p,h,p))}i.push(new C.C(A.mB,C.c8(A.bJ,l,A.bx,0,6),p))}if(o==="regulator")i.push(D.f55)
A.d.v(m,i)}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.U(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.C(A.ir,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.eE4,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.cPm[s]
j=r===1.5?"1.5 V (rechargeable)":C.t(r)+" V"
l.push(new B.dw(j,d.e===r,new B.bCM(q,d,r),p,h,p))}m.push(C.c8(A.bJ,l,A.bx,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cGS[s]
j=r>=1000?"1 k\u03a9":""+A.o.U(r)+" \u03a9"
l.push(new B.dw(j,d.r===r,new B.bCN(q,d,r),p,h,p))}m.push(C.c8(A.bJ,l,A.bx,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new B.bCO(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new B.bCP(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new B.bCQ(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new B.bCI(d)))
if(o==="crank")m.push(D.f0Y)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.ht,p,p,p))
return q.aUz(new C.d2(D.aRC,C.ci(C.v(m,A.F,p,A.e,A.Q,0,A.p),A.q,p,A.z,p,p,p,p,A.ak),p))}}
B.b7k.prototype={}
B.Ta.prototype={
S(){return new B.aAo(B.fNv(),new C.co(null,x.gJ),C.aZ(x.S))}}
B.aAo.prototype={
c_m(){var w,v,u,t,s=this
if(++s.w%15===0){w=s.d.a
v=C.U(w).k("a4<1>")
u=new C.a4(w,new B.dJO(s),v).gJ(0)
t=new C.a4(w,new B.dJP(),v).gJ(0)
if(u!==s.x||t!==s.y)s.n(new B.dJQ(s,u,t))}if(A.o.G(s.w,10)===0){w=s.f
$.bAa()
w=w>=11}else w=!0
if(w)return
w=s.r
if(!w.t(0,s.f)&&$.bAa()[s.f].c.$1(s.d)){w.K(0,s.f)
B.AF("bell",C.a([0,4,7,12],x.t),700,0.45)
s.n(new B.dJR())}},
adT(){var w=0,v=C.j(x.H),u=this,t
var $async$adT=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.cg(null,null,!0,null,new B.dJN(u),t,null,!0,!0,x.H),$async$adT)
case 2:return C.h(null,v)}})
return C.i($async$adT,v)},
anD(d,e,f,g){var w=null,v=f.j(0.14),u=C.m(11),t=C.H(f.j(0.5),A.r,1)
return C.D(C.aH(w,C.p(w,C.B(C.a([C.V(d,f,w,w,w,16),A.ez,new C.dm(1,A.ci,C.d(e,w,1,A.a2,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,12.5,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b6,A.j,0,w,w),A.h,w,w,new C.o(v,w,t,u,w,w,A.n),w,32,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.ad),1)},
acb(){var w=0,v=C.j(x.H),u=this,t
var $async$acb=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.a8(t,!1).cp(C.eD(new B.dJJ(u),!1,null,x.H)),$async$acb)
case 2:t=u.e.gbb()
if(t!=null)t.b9F()
if(u.c!=null)u.n(new B.dJK())
return C.h(null,v)}})
return C.i($async$acb,v)},
c_n(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=$.bAa(),g=i<11?h[i]:j
h=g==null
w=!h&&k.r.t(0,i)
v=w?A.bh:A.aX
i=A.aX.j(0.45)
u=x.V
t=C.a([new C.ab(0,A.G,A.aX.j(0.18),A.cA,14)],u)
s=C.aH(j,C.p(j,D.bzE,A.h,j,j,new C.o(A.c.j(0.08),j,j,j,j,j,A.a6),j,34,j,j,j,j,j,34),A.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new B.dJT(d),j,j,j,j,j,j,!1,A.ad)
r=C.p(j,D.aXV,A.h,j,j,new C.o(j,j,j,C.m(13),C.a([new C.ab(0,A.G,A.aX.j(0.5),A.J,10)],u),D.bIG,A.n),j,36,j,j,j,j,j,36)
q=k.d.a.length
if(q===0)q="Pick a part to start"
else{p=k.x
o=k.y
o=o>0?" \xb7 "+o+" burnt":""
o=""+q+" parts \xb7 "+p+" working"+o
q=o}p=x.p
q=C.D(C.v(C.a([D.f3k,C.d(q,j,1,A.a2,j,j,j,C.l(j,j,k.y>0?A.fj:A.h6,j,j,j,j,j,j,j,j,11.5,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],p),A.F,j,A.e,A.j,0,A.p),1)
u=C.aH(j,C.hq(C.p(j,D.ep3,A.h,j,j,new C.o(j,j,j,C.m(12),C.a([new C.ab(0,A.G,A.by.j(0.45),A.J,10)],u),D.bIF,A.n),j,34,j,A.rO,A.Vg,j,j,j),j,"AI Inventor: say what you want to make",j,j),A.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,k.gc4Y(),j,j,j,j,j,j,!1,A.ad)
o=A.aX.j(0.16)
n=C.m(12)
m=C.H(A.aX.j(0.5),A.r,1)
n=C.B(C.a([s,A.aa,r,A.aa,q,u,C.aH(j,C.hq(C.p(j,C.V(A.Lm,A.aX,j,j,j,18),A.h,j,j,new C.o(o,j,m,n,j,j,A.n),j,34,j,A.rO,j,j,j,34),j,"How to play",j,j),A.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new B.dJU(d,e),j,j,j,j,j,j,!1,A.ad)],p),A.m,j,A.e,A.j,0,j,j)
m=C.B(C.a([k.anD(A.pb,"Circuits",A.bC,k.gceA()),A.bo,k.anD(A.wX,"Repair",A.aL,new B.dJV(k)),A.bo,k.anD(D.wZ,"Clear",A.cF,new B.dJW(k))],p),A.m,j,A.e,A.j,0,j,j)
o=A.x.j(0.28)
u=C.m(14)
q=C.H(v.j(0.45),A.r,1)
if(h)h=D.eUm
else{h=w?"\u2705":"\ud83c\udfaf"
h=C.D(C.d(h+" "+g.a,j,1,A.a2,j,j,j,R.BY,j,j,j),1)
s=C.d(""+(k.f+1)+"/11",j,j,j,j,j,j,C.l(j,j,v,j,j,j,j,j,j,j,j,12,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
r=C.fo(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,A.at,j,A.lo,j,j,j,j,j,j,j,j)
l=w?"Next \u25b6":"Skip"
r=C.B(C.a([h,s,new C.a5(j,28,C.bK(!1,C.d(l,j,j,j,j,j,j,C.l(j,j,v,j,j,j,j,j,j,j,j,j,j,j,A.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j,j,!0,j,j,new B.dJX(k),j,r),j)],p),A.m,j,A.e,A.j,0,j,j)
h=C.v(C.a([r,C.d(w?"Well done!":g.b,j,2,A.a2,j,j,j,D.eE2,j,j,j),A.ar,C.bu(C.m(4),C.mt(A.bG,j,j,4,j,k.r.a/11,new C.mM(v,x.dw)),A.ao)],p),A.F,j,A.e,A.j,0,A.p)}return C.p(j,C.v(C.a([n,A.P,m,A.P,C.p(j,h,A.h,j,j,new C.o(o,j,q,u,j,j,A.n),j,j,j,j,A.acL,j,j,j)],p),A.m,j,A.e,A.Q,0,A.p),A.h,j,j,new C.o(j,j,new C.c1(A.X,A.X,new C.ay(i,1.4,A.r,-1),A.X),A.a6C,t,D.bHU,A.n),j,j,j,j,D.blx,j,j,j)},
B(d){var w=this,v=null
$.aZr="tech"
return C.cd(v,A.bX,C.bq(!0,C.v(C.a([w.c_n(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, loop not finished...).\n\nTry the challenges at the top bar, or open Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.D(B.fMq(w.d,w.e,w.gc_l(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.aj,!0,!0),v,!1,!1,v,v)}}
B.auT.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.auU.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bmo()}}
B.is.prototype={}
B.Bd.prototype={}
B.Ar.prototype={}
B.Bu.prototype={}
B.U_.prototype={
S(){return new B.bgI(null,null)}}
B.bgI.prototype={
gaoq(){var w,v=this,u=v.d
if(u===$){w=C.bi(null,A.nq,null,1,null,v)
w.cm(0)
v.d!==$&&C.bJ()
v.d=w
u=w}return u},
p(){this.gaoq().p()
this.bqb()},
gaxB(){var w=this.gaoq().y
w=w==null?null:A.o.ak(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=C.m(34),u=C.H(A.aI,A.r,5),t=C.a([new C.ab(0,A.G,A.cC.j(0.25),A.J,36)],x.V)
return C.cd(w,O.Uf,C.bq(!0,new C.am(A.W,w,A.a9,A.q,C.a([C.au(new C.fD(0.4864864864864865,C.p(w,C.bu(C.m(28),C.c3(this.gaoq(),new B.e7_(this),w),A.ao),A.h,w,w,new C.o(w,w,u,v,t,w,A.n),w,w,w,A.bS,w,w,w,w),w),w,w,w),C.an(w,C.aF(w,w,w,w,A.m6,w,w,w,new B.e70(d),w,w,w,C.na(w,A.aT,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w)],x.p),w),!0,!1,A.aj,!0,!0),w,!1,!1,w,w)},
aUA(){var w=null,v=new C.Q(Date.now(),0,!1),u=A.o.D(this.a.c+A.k.bw(this.gaxB()*0.4),0,100)
return new C.C(D.bkT,C.B(C.a([C.d(A.a.aT(A.o.u(C.dd(v)),2,"0")+":"+A.a.aT(A.o.u(C.fM(v)),2,"0"),w,w,w,w,w,w,A.vo,w,w,w),A.b8,D.f9o,C.d(""+u+"%",w,w,w,w,w,w,D.eMH,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
bRE(){var w,v,u,t,s,r,q=this,p=null,o=q.aUA(),n=C.m(20),m=C.H(A.ba,A.r,1)
n=C.aH(p,C.p(p,C.bu(C.m(19),C.b2(p,p,p,new B.aE2(0,q.gaxB(),p),A.f9),A.ao),A.h,p,p,new C.o(p,p,m,n,p,p,A.n),p,140,p,A.it,p,p,p,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.e6Y(q),p,p,p,p,p,p,!1,A.ad)
m=x.p
w=C.a([],m)
for(v=0;v<8;++v){u=D.ta[v].d.j(0.25)
t=new C.b1(16,16)
s=new C.ay(D.ta[v].d.j(0.7),1,A.r,-1)
r=D.ta[v]
w.push(C.aH(p,C.v(C.a([C.p(p,new C.cw(A.A,p,p,new C.w(r.b,p,A.vk,p,p,p,p,p,p,p,p,p),p),A.h,p,p,new C.o(u,p,new C.c1(s,s,s,s),new C.bv(t,t,t,t),p,p,A.n),p,52,p,p,p,p,p,52),A.av,new C.w(r.a,p,D.eKE,p,p,p,p,A.a2,p,1,p,p)],m),A.m,p,A.e,A.j,0,A.p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.e6Z(q,v),p,p,p,p,p,p,!1,A.ad))}return C.p(p,C.v(C.a([o,A.av,D.eRy,A.T,n,A.ab,C.D(C.lj(0.86,w,4,8,12,A.K_,p,!1),1)],m),A.m,p,A.e,A.j,0,A.p),A.h,p,p,D.aSO,p,p,p,p,p,p,p,p)},
buW(d){var w=null
return C.p(w,C.v(C.a([C.p(w,this.aUA(),A.h,A.x,w,w,w,w,w,w,w,w,w,w),C.D(C.b2(w,w,w,new B.aE2(d,this.gaxB(),w),A.f9),1),C.aH(w,C.p(w,C.au(C.p(w,w,A.h,w,w,new C.o(A.af,w,w,C.m(3),w,w,A.n),w,5,w,w,w,w,w,120),w,w,w),A.h,A.x,w,w,w,46,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.e6V(this),w,w,w,w,w,w,!1,A.ad)],x.p),A.m,w,A.e,A.j,0,A.p),A.h,A.x,w,w,w,w,w,w,w,w,w,w)}}
B.aE2.prototype={
a5(d,e){return B.h56(d,e,this.b,this.c)},
ar(d){return!0}}
B.aJ8.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.wT.prototype={}
B.Ut.prototype={
S(){return new B.aBE(null,null)}}
B.aBE.prototype={
gabg(){var w,v=this,u=v.d
if(u===$){w=C.bi(null,A.nq,null,1,null,v)
w.cm(0)
v.d!==$&&C.bJ()
v.d=w
u=w}return u},
gCa(){var w=this.e
return w===$?this.e=this.a.c:w},
Z(){var w=this
w.a0()
w.w=C.cO(w.a.e,w.gaUB())
w.aR4()
B.dI(520,"",80,0,0.25,"tri")},
aR4(){var w=this.z
if(w!=null)w.a9(0)
this.z=C.cO(A.k4,new B.eqH(this))},
c_o(){var w=this.c
if(w!=null&&C.a8(w,!1).oP()){w=this.c
w.toString
C.a8(w,!1).M(this.gCa())}},
ag8(){var w=this,v=w.w
if(v!=null)v.a9(0)
w.w=null
w.y=!0
w.aR4()},
atB(d){this.n(new B.eqF(this,d))
B.dI(900,"",40,0,0.3,"noise")},
aWk(d){this.n(new B.eqI(this,d))
B.dI(700,"",60,0,0.3,"tri")},
p(){var w=this,v=w.w
if(v!=null)v.a9(0)
v=w.z
if(v!=null)v.a9(0)
w.gabg().p()
w.bqt()},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.m(10),m=C.H(A.cK,A.r,6),l=C.a([new C.ab(0,A.G,A.aX.j(0.25),A.J,40)],x.V)
l=C.au(new C.fD(1.7777777777777777,C.p(o,C.bu(C.m(4),C.c3(p.gabg(),new B.eqQ(p),o),A.ao),A.h,o,o,new C.o(o,o,m,n,l,o,A.n),o,o,o,o,o,o,o,o),o),o,o,o)
n=p.y
m=n?1:0
w=C.na(o,A.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)
w=C.aF(o,o,o,o,C.V(A.ct,A.c,o,o,o,o),o,o,o,p.gaUB(),o,o,o,w,"Back to the board",o)
v=C.m(20)
u=p.f
t=x.p
v=C.B(C.a([w,A.b8,C.p(o,C.d(u>=0?"NGMY TV \xb7 "+D.ta[u].a:"NGMY TV \xb7 CH "+(p.gCa()+1),o,o,o,o,o,o,K.a48,o,o,o),A.h,o,o,new C.o(A.aT,o,o,v,o,o,A.n),o,o,o,o,A.lX,o,o,o)],t),A.m,o,A.e,A.j,0,o,o)
u=p.cfP()
w=A.x.j(0.65)
s=C.m(18)
r=p.f
r=C.d(r>=0?D.ta[r].a:D.NG[p.gCa()].a,o,o,o,o,o,o,A.ja,A.L,o,o)
q=p.f
n=C.a([l,C.C4(C.e1(C.v(C.a([new C.C(D.bfH,v,o),A.ar,u,A.b8,C.p(o,C.v(C.a([r,C.d(q>=0?D.ta[q].c:D.NG[p.gCa()].b,o,o,o,o,o,o,P.aKl,A.L,o,o)],t),A.m,o,A.e,A.Q,0,A.p),A.h,o,o,new C.o(w,o,o,s,o,o,A.n),o,o,o,A.bl,A.bS,o,o,o)],t),A.m,o,A.e,A.j,0,A.p),!n,o),A.b9,A.i2,m)],t)
if(p.r)n.push(C.bX(0,p.bvJ(),0,0,0))
return C.cd(o,A.x,C.bq(!0,C.aH(A.c5,new C.am(A.W,o,A.b_,A.q,n,o),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.eqR(p),o,o,o,o,o,o,!1,A.ad),!0,!1,A.aj,!0,!0),o,!1,!1,o,o)},
cfP(){var w=this,v=null,u=new B.eqP(),t=A.x.j(0.72),s=C.m(22),r=C.H(A.aX.j(0.5),A.r,1)
return C.p(v,C.B(C.a([u.$3(A.Ao,"CH \u2212",new B.eqK(w)),u.$3(A.hD,"CH +",new B.eqL(w)),u.$5$color$on(A.EB,"TV",new B.eqM(w),A.aX,w.f<0),u.$5$color$on(A.Ab,"APPS",new B.eqN(w),A.bC,w.r),u.$5$color$on(A.Ae,"ADS",new B.eqO(w),A.bU,w.f===0)],x.p),A.m,v,A.e,A.Q,0,v,v),A.h,v,v,new C.o(t,v,r,s,v,v,A.n),v,v,v,v,A.VY,v,v,v)},
bvJ(){var w,v,u,t,s,r=null,q=A.x.j(0.82),p=x.p,o=C.a([],p)
for(w=0;w<8;++w){v=D.ta[w].d.j(0.18)
u=new C.b1(16,16)
t=new C.ay(D.ta[w].d.j(0.6),1,A.r,-1)
s=D.ta[w]
o.push(C.aH(r,C.p(r,C.v(C.a([new C.w(s.b,r,A.a4B,r,r,r,r,r,r,r,r,r),A.av,new C.w(s.a,r,A.tN,r,r,r,r,A.a2,r,1,r,r)],p),A.m,r,A.b6,A.j,0,A.p),A.h,r,r,new C.o(v,r,new C.c1(t,t,t,t),new C.bv(u,u,u,u),r,r,A.n),r,r,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.eqD(this,w),r,r,r,r,r,r,!1,A.ad))}return C.aH(r,C.p(r,C.v(C.a([D.eZe,A.ab,C.D(C.lj(0.9,o,4,10,12,r,r,!1),1)],p),A.m,r,A.e,A.j,0,A.p),A.h,q,r,r,r,r,r,r,D.bhp,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.eqE(this),r,r,r,r,r,r,!1,A.ad)}}
B.bqK.prototype={
a5(d,e){var w=this
return B.h57(d,e,w.b,w.d,w.e,w.c)},
ar(d){return!0}}
B.aJq.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.aTf.prototype={}
B.TG.prototype={
S(){return new B.bgo(C.T(x.S,x.N),A.at,C.a([],x.U),$,A.bw,0,C.a([],x.X),null,null)}}
B.bgo.prototype={
guG(){var w=this.f
return w===$?this.f=B.fI1(0):w},
Z(){this.a0()
this.kM()
B.yA("laser_maze").bx(new B.dYT(this),x.P)},
l4(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.A(u.a,t)
if(t>0.8)A.d.cu(w,v)}this.n(new B.dYU())},
abi(d){var w=this
w.n(new B.dYJ(w,d))
B.vd("laser_maze",C.E(["best",w.e,"level",w.d],x.N,x.z))},
c_B(d){var w,v,u,t,s,r,q,p,o=this
if(o.x)return
w=o.y
v=w.ge8()/7
u=v*7
t=(w.a-u)/2
s=A.k.D((w.b-u)/2,8,300)
r=A.k.bw((d.a-t)/v)
q=A.k.bw((d.b-s)/v)
if(r<0||q<0||r>=7||q>=7)return
p=q*7+r
if(o.guG().b.t(0,p)||p===o.guG().e||o.guG().d.an(0,p))return
o.n(new B.dYK(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.ck(new B.dYN(t,B.h5X(t.guG(),t.r))),q=x.p,p=C.a([new B.dw("Clear mirrors",!1,new B.dYO(t),A.jM,A.aL,s),new B.dw("Skip",!1,new B.dYP(t),D.bsw,A.aX,s)],q)
if(t.d>0)p.push(new B.dw("Back",!1,new B.dYQ(t),D.bsx,A.aX,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new B.dw(""+u,v===t.d,new B.dYR(t,v),s,A.aE,s))}return B.jx(A.aE,A.fY,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.v(C.a([new B.eF(p,s,s),new B.eF(w,"LEVEL",s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bds.prototype={
a5(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.ge8()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.D((b0.b-a4)/2,8,300),a7=new B.d9S(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.bF(new C.a9(a5,a6,a8,a4),A.kd)
v=$.Y()
u=C.L()
u.r=K.q8.gq(0)
a9.aK(w,u)
for(w=a9.a,t=0;t<=7;++t){u=t*a3
s=a5+u
r=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.dw.gq(0)
q=r.I()
w.drawLine.apply(w,[s,a6,s,a4,q])
q.delete()
u=a6+u
s=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
s.r=A.dw.gq(0)
q=s.I()
w.drawLine.apply(w,[a5,u,a8,u,q])
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.ef(a8,a8.r,C.a2(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.bF(C.cN(p,u,u),A.h0)
o=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
o.sap(D.bJO.au(0,C.cN(p,a3,a3)))
q=o.I()
w.drawRRect(C.f7(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.aQ(v.r,A.aq,a2,a2,u)
n.E(new C.b5(a7.$1(A.d.gL(a8)).a,a7.$1(A.d.gL(a8)).b))
for(a8=C.df(a8,1,a2,C.U(a8).c),v=a8.$ti,a8=new C.bU(a8,a8.gJ(0),v.k("bU<ai.E>")),v=v.k("ai.E");a8.C();){s=a8.d
if(s==null)s=v.a(s)
s=new C.ao(a7.$1(s).a,a7.$1(s).b)
u.push(s)
r=n.f
if(r!=null)s.by(r)
s=n.e
if(s!=null)s.a.delete()
n.e=null}$.Y()
a8=C.L()
a8.b=A.ae
a8.c=14
a8.e=A.fs
a8.r=A.aE.j(0.28+0.08*Math.sin(a1.f*12)).gq(0)
a8.z=A.lA
a9.aO(n,a8)
a8=C.L()
a8.b=A.ae
a8.c=4
a8.e=A.fs
a8.r=D.a9S.gq(0)
a9.aO(n,a8)
a8=C.L()
a8.b=A.ae
a8.c=1.6
a8.e=A.fs
a8.r=A.c.gq(0)
a9.aO(n,a8)}for(a8=a4.c,a8=C.ef(a8,a8.r,C.a2(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.t(0,m)
if(l){m=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
m.r=A.aL.j(0.5).gq(0)
m.z=A.B0
q=m.I()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
m.r=(l?A.aL:A.bt).gq(0)
q=m.I()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?A.c:A.aA
i=new C.l3(new C.es("\u2605",a2,a2,A.cW,a2,a2,a2,a2,a2,a2,new C.F(!0,j,a2,a2,a2,a2,v,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a5,A.cm,new C.k4(1),a2,a2,a2,a2,A.cj,a2)
i.fe()
j=i.b
h=j.c
j=j.a.c
i.a5(a9,new C.u(m-h/2,k-j.gbh(j)/2))}g=new B.d9V(a7,a3,a9)
a1.c.bG(0,new B.d9T(g))
a4.d.bG(0,new B.d9U(g))
f=a7.$1(a4.e)
a4=C.bF(C.cN(f,o,a3*0.8),A.h0)
a8=C.L()
a8.r=A.aE.gq(0)
a9.aK(a4,a8)
v=f.ao(0,new C.u(v,0))
a8=C.L()
a8.r=A.c.gq(0)
a9.af(v,5,a8)
for(a4=a1.r,a8=a4.length,e=0;e<a4.length;a4.length===a8||(0,C.K)(a4),++e){d=a4[e]
a0=d.b/0.8
v=d.a
u=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
s=1-a0
u.c=4*s
u.r=A.aL.j(s).gq(0)
q=u.I()
w.drawCircle(v.a,v.b,a3*(0.3+a0),q)
q.delete()}},
ar(d){return!0}}
B.TI.prototype={
S(){var w=x.n
return new B.aB1(A.cB,C.a([1,0.5,0],w),C.a([0,0,0],w),$,A.bw,0,C.a([],x.X),null,null)}}
B.aB1.prototype={
Z(){this.a0()
this.kM()
B.yA("light_mixer").bx(new B.dZb(this),x.P)},
l4(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aUC()
w.n(new B.dZc())},
atD(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aB(5)/4)
u.e=t
if(A.d.e9(t,new B.dYX()))u.e[w.aB(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aUC(){var w,v,u=this
if(u.z!=="play")return
w=A.k.U(A.k.D(1-B.h1k(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
B.vg(v,A.o.ak(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
B.vd("light_mixer",C.E(["best",v],x.N,x.z))}}else u.z="result"},
gcqb(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.E(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cAK[A.o.G(A.k.U(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.ck(new B.dZ5(v,B.h1k(v.e,t))),r=t[0]
r=B.hp(A.aE,""+A.k.U(r*100)+"%","Red",1,0,new B.dZ6(v),r)
w=t[1]
w=B.hp(A.bm,""+A.k.U(w*100)+"%","Green",1,0,new B.dZ7(v),w)
t=t[2]
return B.jx(A.b7,A.fY,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.v(C.a([r,w,B.hp(A.da,""+A.k.U(t*100)+"%","Blue",1,0,new B.dZ8(v),t),new C.bI(A.a7,u,u,new B.ff(A.hp,"Lock it in",new B.dZ9(v),A.bh,u),u)],x.p),A.m,u,A.e,A.Q,0,A.p))}}
B.bdH.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.bF(new C.a9(0,0,n,m),A.pu)
$.Y()
w=C.L()
w.r=A.x.gq(0)
d.aK(l,w)
w=d.a
J.bB(w.save())
w.clipRRect(C.f7(C.bF(new C.a9(0,0,n,m),A.pu)),$.xN(),!0)
v=e.ge8()*0.3
u=e.ef(A.J)
l=-v*0.55
t=v*0.45
s=[u.ao(0,new C.u(0,l)),u.ao(0,new C.u(l,t)),u.ao(0,new C.u(v*0.55,t))]
r=[A.CW,F.a96,F.a9r]
d.ko(new C.a9(0,0,n,m),C.L())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
p.a=A.n3
p.r=r[q].j(l[q]).gq(0)
o=p.I()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.bF(new C.a9(0,0,n,m),A.pu)
m=C.L()
m.b=A.ae
m.c=2
m.r=A.ba.gq(0)
d.aK(n,m)},
ar(d){return!0}}
B.aIU.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.bth.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpX()}}
B.aIV.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.bti.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpY()}}
B.bq8.prototype={}
B.a6d.prototype={
B(d){var w=null
return C.cd(C.eA(w,w,w,!0,!0,D.aa_,w,1,!0,w,0,!1,w,!1,w,w,C.aF(w,w,w,w,D.ait,w,w,w,new B.cav(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fba,w,w,w,1,w,!0),D.aa_,C.cL(C.a([D.dQ_,C.ck(new B.caw())],x.p),w,D.bhJ,w,w,A.ak,!1),w,!1,!1,w,w)}}
B.Uy.prototype={
S(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new B.aBQ(w,new C.ap(A.as,$.av()),$,A.bw,0,C.a([],x.X),null,null)}}
B.aBQ.prototype={
Z(){this.a0()
this.kM()},
b_v(d){var w=this.d.length
return A.o.G(A.k.bw(A.k.G(A.k.G(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
l4(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b_v(v.f)
if(w!==v.x){v.x=w
B.l1("bell",24+A.o.G(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.n(new B.euP(v))
B.AF("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c0y(){if(this.d.length<2)return
this.n(new B.euL(this))},
aUZ(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.n(new B.euK(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc0x(),p=s.d,o=C.D(C.aH(r,C.b2(r,r,r,new B.bru(p,s.f,r),A.f9),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.ad),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.v(C.a([o,new C.a5(r,40,C.au(C.d(n,r,r,r,r,r,r,D.eNQ,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.arT[A.o.G(v,8)].j(0.9)
t=new C.b1(20,20)
o.push(C.aH(r,C.p(r,new C.w(p[v],r,D.eN6,r,r,r,r,r,r,r,r,r),A.h,r,r,new C.o(u,r,r,new C.bv(t,t,t,t),r,r,A.n),r,r,r,A.hm,A.h8,r,r,r),A.z,!1,r,r,r,r,r,r,r,new B.euN(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.ad))}p=A.c.j(0.07)
return B.jx(A.aL,A.fY,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.v(C.a([new B.eF(o,r,r),C.B(C.a([C.D(C.aK(r,A.U,!1,r,!0,A.q,r,C.aL(),s.e,r,r,r,r,r,2,C.bn(r,new C.b3(4,C.m(14),A.X),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kj,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.z,!0,r,!0,r,!1,r,A.ah,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new B.euO(s),r,!1,r,r,!1,r,!0,r,A.a8,r,r,r,r,r,r,r,r,r,r,r,A.di,!0,A.a5,r,A.am,r,r,r,r),1),A.aa,new B.ff(A.hD,"Add",s.gc0v(s),A.c,r),A.bo,new B.ff(A.m0,"Spin",q,A.bh,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.Q,0,A.p))}}
B.bru.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.u(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.Y()
w=C.L()
w.r=D.b1a.gq(0)
a1.af(d,f,w)
w=C.L()
w.b=A.ae
w.c=3
w.r=A.aL.gq(0)
a1.af(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=C.bV(d,a0)
n=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
n.r=D.arT[A.o.G(q,8)].gq(0)
m=n.I()
n=p*57.29577951308232
f.drawArc.apply(f,[C.c9(o),n,s,!0,m])
m.delete()
o=C.bV(d,a0)
l=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=2
l.r=A.c.j(0.6).gq(0)
m=l.I()
f.drawArc.apply(f,[C.c9(o),n,s,!0,m])
m.delete()
J.bB(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.am(o,0,11)+"\u2026"
k=new C.l3(new C.es(o,i,i,A.cW,i,i,i,i,i,i,D.eBL),A.a5,A.cm,new C.k4(1),i,i,i,i,A.cj,i)
k.fe()
o=k.b
n=o.c
o=o.a.c
k.a5(a1,new C.u(a0-n-16,-o.gbh(o)/2))
f.restore()}f=C.L()
f.r=D.a9N.gq(0)
a1.af(d,20,f)
f=C.L()
f.b=A.ae
f.c=3
f.r=A.aL.gq(0)
a1.af(d,20,f)
j=new C.aQ(h.r,A.aq,i,i,C.a([],x.v))
e-=a0
j.E(new C.b5(g,e+26))
e-=10
j.E(new C.ao(g-14,e))
j.E(new C.ao(g+14,e))
j.E(new C.bE())
e=C.L()
e.r=A.c.gq(0)
a1.aO(j,e)
e=C.L()
e.b=A.ae
e.c=2
e.r=A.aT.gq(0)
a1.aO(j,e)},
ar(d){return!0}}
B.Th.prototype={
S(){return new B.bfY($,A.bw,0,C.a([],x.X),null,null)}}
B.bfY.prototype={
Z(){this.a0()
this.kM()},
l4(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
B.AF("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a2J(900,new B.dLT())}w.n(new B.dLU())},
aV0(d){return this.n(new B.dLO(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aT(A.o.u(A.k.ak(m,60)),2,"0")
v=A.a.aT(A.o.u(A.o.G(A.k.dF(m),60)),2,"0")
m=C.b2(n,n,n,new B.bmp(l,A.cF,n),A.aIk)
u=C.d(w+":"+v,n,n,n,n,n,n,D.eFN,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.au(new C.a5(280,280,new C.am(A.A,n,A.a9,A.q,C.a([m,C.v(C.a([u,C.d(t,n,n,n,n,n,n,D.eES,n,n,n),A.av,C.d("Sessions done: "+o.r,n,n,n,n,n,n,A.BU,n,n,n)],s),A.m,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.cRQ[r]
u.push(new B.dw(""+q+" min",o.d===q,new B.dLQ(o,q),n,A.cF,n))}m=o.f
p=m?W.x7:A.iM
m=m?"Pause":"Start"
return B.jx(A.cF,A.fY,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.v(C.a([new B.eF(u,n,n),new B.eF(C.a([new B.ff(p,m,new B.dLR(o),A.bh,n),new B.ff(A.jM,"Reset",new B.dLS(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.Q,0,A.p))}}
B.bmp.prototype={
a5(d,e){var w,v,u,t,s=e.ef(A.J),r=e.a/2-14
$.Y()
w=C.L()
w.b=A.ae
w.c=16
w.r=A.c.j(0.08).gq(0)
d.af(s,r,w)
w=C.bV(s,r)
v=C.L()
v.b=A.ae
v.c=16
v.d=A.bN
u=this.c
t=C.aq(u,A.c,0.4)
t.toString
v.sap(new C.fS(A.A,-1.5707963267948966,4.71238898038469,A.w,C.a([u,t,u],x.O),null,null).au(0,C.bV(s,r)))
d.fJ(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
ar(d){return d.b!==this.b}}
B.Sv.prototype={
S(){return new B.bfD($,A.bw,0,C.a([],x.X),null,null)}}
B.bfD.prototype={
Z(){this.a0()
this.kM()},
l4(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.OF.h(0,p.d)
w.toString
v=A.d.ft(w,new B.dxK())
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
B.l1("flute",D.bKo[t]+5,1400,0.35)}p.n(new B.dxL())},
gc0B(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.IF("Press Start",0.5)
w=D.OF.h(0,this.d)
w.toString
v=A.d.ft(w,new B.dxF())
u=A.k.G(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.IF("Breathe in",0.5+0.5*A.dJ.av(0,p))
case 1:return new C.IF("Hold",1)
case 2:return new C.IF("Breathe out",1-0.5*A.dJ.av(0,p))
default:return new C.IF("Hold",0.5)}}}return new C.IF("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc0B(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hl.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,A.h,q,q,new C.o(s,q,q,q,u===0?C.a([new C.ab(0,A.G,A.hl.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,A.C3,q,q,q))
n.push(C.an(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,A.kj,q,q,q),q,q,q,q,q,q))
n=C.au(new C.a5(300,340,new C.am(A.A,q,A.a9,A.q,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aV(D.OF.geb(D.OF));w.C();){v=w.gT(w)
o.push(new B.dw(v,r.d===v,new B.dxI(r,v),q,A.hl,q))}w=r.e
v=w?A.Yb:A.iM
w=w?"Stop":"Start"
o.push(new B.ff(v,w,new B.dxJ(r),A.bh,q))
return B.jx(A.hl,A.fY,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new B.eF(o,q,q))}}
B.aFc.prototype={}
B.T8.prototype={
S(){return new B.bfS(new C.co(null,x.A),C.a([],x.au),A.aF,A.c)}}
B.bfS.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aF(s,s,s,s,D.m7,s,s,s,new B.dJi(t,d),s,s,s,s,"Share",s)],r),p=C.bu(C.m(18),new C.en(C.aH(s,C.b2(s,s,s,new B.bhU(t.e,t.x,s),A.f9),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dJj(t),new B.dJk(t),s,s,s,s,s,s,s,s,s,new B.dJl(t),s,s,s,s,!1,A.ad),t.d),A.ao),o=C.a([],r)
for(w=0;w<9;++w){v=D.cAa[w]
u=!t.w&&t.f.A(0,v)
o.push(new B.E1(v,u,new B.dJm(t,v),!1,s))}u=t.r
return B.jx(A.by,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.C(A.bS,p,s),"DRAW PAD",C.v(C.a([new B.eF(o,s,s),B.hp(A.by,""+A.k.U(u),"Brush",30,2,new B.dJn(t),u),new B.eF(C.a([new B.dw("Eraser",t.w,new B.dJo(t),A.L7,A.by,s),new B.ff(A.uM,"Undo",new B.dJp(t),A.c,s),new B.ff(A.e6,"Clear",new B.dJq(t),A.c,s),new B.ff(A.Li,"Paper",new B.dJr(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.Q,0,A.p))}}
B.bhU.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.Y()
w=C.L()
w.r=this.c.gq(0)
d.b2(new C.a9(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=$.Y()
p=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
o=r.a
p.r=o.gq(o)
n=r.b
p.c=n
p.d=A.bN
p.e=A.fs
p.b=A.ae
m=r.c
if(m.length===1){q=A.d.gL(m)
m=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
m.r=o.gq(o)
l=m.I()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=C.a([],t)
k=new C.aQ(q.r,A.aq,null,null,o)
o.push(new C.b5(A.d.gL(m).a,A.d.gL(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new C.d0(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.by(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new C.ao(A.d.gaj(m).a,A.d.gaj(m).b)
o.push(q)
o=k.f
if(o!=null)q.by(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.I()
q=k.e
u.drawPath((q==null?k.e=new C.cE(k.gbL().a.snapshot()):q).a,l)
l.delete()}}},
ar(d){return!0}}
B.TU.prototype={
S(){var w=x.S
return new B.aBb(C.aZ(w),C.aZ(w))}}
B.aBb.prototype={
Z(){this.a0()
this.ap5()},
ap5(){var w,v,u=this,t=x.N,s=C.bj(D.cVT,!0,t)
A.d.BI(s)
w=x.S
v=C.U(s).c
t=C.z(C.df(s,0,C.dK(u.d,"count",w),v),t)
A.d.v(t,C.df(s,0,C.dK(u.d,"count",w),v))
A.d.BI(t)
u.e=t
u.f.a7(0)
u.r.a7(0)
u.w=0
u.x=!1},
c0w(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
B.l1("bell",12+A.o.G(d,9),150,0.35)
s.n(new B.e3j(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gL(0)
u=w.gaj(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bN(A.no,new B.e3k(s,v,u),t)
else{s.x=!0
C.bN(A3.DJ,new B.e3l(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,A.aKz,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.ak(p,2)+" / "+o
o=x.p
p=C.v(C.a([new C.C(A.wA,C.B(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?A.aL:A.af,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hF,A.j,0,q,q),q),C.D(C.ih(!0,q,q,A.z,new C.hJ(v,8,8,1,q),new B.e3p(r),r.e.length,A.bl,q,A.ak,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cBx[t]
o.push(new B.dw(s.b,r.d===s.a,new B.e3q(r,s),q,A.aX,q))}o.push(new B.ff(D.bsu,"New game",new B.e3r(r),A.bh,q))
return B.jx(A.aX,A.fY,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new B.eF(o,q,q))}}
B.U6.prototype={
S(){return new B.aBu(C.a([],x.t))}}
B.aBu.prototype={
c0A(d){A.d.a7(this.d)
this.w=!0
this.aV_()},
aV_(){this.d.push(A.cB.aB(4))
this.e=0
this.XN()},
XN(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$XN=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.n(new B.ebW(t))
s=x.H
w=3
return C.b(C.bN(A.ln,null,s),$async$XN)
case 3:r=t.d,q=C.bj(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aOI(n)
w=7
return C.b(C.bN(new C.b8(1000*Math.max(280,600-r.length*18)),null,s),$async$XN)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.n(new B.ebX(t))
case 1:return C.h(u,v)}})
return C.i($async$XN,v)},
aOI(d){this.n(new B.ebU(this,d))
B.l1("marimba",D.ak2[d]+5,450,0.55)
C.bN(A.DG,new B.ebV(this),x.H)},
c0C(d){var w,v,u=this
if(!u.w||u.r)return
u.aOI(d)
w=u.d
v=u.e
if(w[v]!==d){B.dI(90,"",600,0,0.5,"saw")
u.n(new B.ebY(u))
return}++v
u.e=v
if(v===w.length){u.n(new B.ebZ(u))
C.bN(A.iq,new B.ec_(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,E.R8,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.eOd,A.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aqR[v]
u=u.j(q.f===v?1:0.35)
t=new C.b1(28,28)
s=q.f===v?C.a([new C.ab(0,A.G,D.aqR[v].j(0.8),A.J,30)],w):p
r=new C.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(C.aH(p,C.dj(p,p,p,p,A.b9,new C.o(u,p,new C.c1(r,r,r,r),new C.bv(t,t,t,t),s,p,A.n),A.ji,p,p,p,p,p,p,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.ec0(q,v),p,p,p,p,p,p,!1,A.ad))}o=C.au(new C.C(A.a8,C.v(C.a([o,A.ar,n,A.d3,new C.fD(1,C.lj(1,l,2,12,12,p,A.dL,!1),p)],m),A.m,p,A.b6,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return B.jx(A.cE,A.fY,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new B.eF(C.a([new B.ff(A.iM,n,q.gc0z(q),A.bh,p)],m),p,p))}}
B.Ur.prototype={
S(){return new B.bh6(new C.ap(A.as,$.av()))}}
B.bh6.prototype={
asy(d){return C.og(A.k.aa(d,2),C.ae("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new B.eqd(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d9(C.aJ(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new B.eqm()
l=C.aK(m,A.U,!1,m,!0,A.q,m,C.aL(),l,m,m,m,m,m,2,C.bn(m,m,m,m,m,m,m,m,!0,new C.b3(4,C.m(16),A0.vL),m,m,m,m,m,m,m,m,m,m,m,new C.b3(4,C.m(16),D.aQb),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.l9,"Bill amount",!0,!0,!1,m,m,m,m,D.eLM,"$ ",m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ah,m,m,m,m,m,A.dX,m,m,m,1,m,m,!1,"\u2022",m,new B.eqi(n),m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.aJO,!0,A.a5,m,A.am,m,m,m,m)
k=A.bh.j(0.1)
s=C.m(20)
r=C.H(A.bh.j(0.35),A.r,1)
q=x.p
s=C.cL(C.a([l,A.bu,C.p(m,C.v(C.a([t.$2("Tip ("+A.k.U(n.e)+"%)","$"+n.asy(w)),t.$2("Total","$"+n.asy(v)),O.UO,t.$3$big("Each of "+n.f+" pays","$"+n.asy(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.h,m,m,new C.o(k,m,r,s,m,m,A.n),m,m,m,m,A.c3,m,m,m)],q),m,A.fB,m,m,A.ak,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.cmK[p]
r.push(new B.dw(""+o+"%",A.k.U(n.e)===o,new B.eqj(n,o),m,A.bh,m))}l=n.f
return B.jx(A.bh,A.fY,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.v(C.a([new B.eF(r,"TIP",m),B.hp(A.aX,""+l,"People",20,1,new B.eqk(n),l),new B.eF(C.a([new B.dw("Round up",n.r,new B.eql(n),m,A.aL,m)],q),m,m)],q),A.m,m,A.e,A.Q,0,A.p))}}
B.TS.prototype={
S(){var w=C.a([3,5],x.t)
return new B.bgz(w,A.cB,$,A.bw,0,C.a([],x.X),null,null)}}
B.bgz.prototype={
Z(){this.a0()
this.kM()},
l4(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.G(A.k.bw(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t
B.a6c("snare",0.5)}u.n(new B.e1Z())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.he()
u.w=t
u.x=t?0:3.141592653589793
B.l1("bell",24,400,0.5)}u.n(new B.e2_())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new B.b9G(v,o.r>0,n))}u=C.aH(n,C.au(C.c8(A.fG,m,A.bx,18,18),n,n,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.e1S(o),n,n,n,n,n,n,!1,A.ad)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.H(A.dl,A.r,6)
s=C.a([new C.ab(0,A.G,A.aL.j(0.4),A.J,30)],x.V)
u=C.aH(n,C.au(C.e5(A.A,C.p(A.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.eL1,n,n,n),A.h,n,n,new C.o(n,n,v,n,s,D.dW9,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.e1T(o),n,n,n,n,n,n,!1,A.ad)}else{m=o.as
u=C.aH(n,C.au(C.v(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.eBg,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kj,n,n,n)],x.p),A.m,n,A.e,A.Q,0,A.p),n,n,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.e1U(o),n,n,n,n,n,n,!1,A.ad)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.cPw[r]
v.push(new B.dw(q.b,o.d===q.a,new B.e1V(o,q),q.c,A.bC,n))}v=C.a([new B.eF(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(B.hp(A.bC,""+s,"Dice",4,1,new B.e1W(o),s))}if(o.d==="num"){s=o.z
s=B.hp(A.bC,""+s,"From",100,1,new B.e1X(o),s)
p=o.Q
A.d.v(v,C.a([s,B.hp(A.bC,""+p,"To",1000,2,new B.e1Y(o),p)],m))}return B.jx(A.bC,A.fY,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.v(v,A.m,n,A.e,A.Q,0,A.p))}}
B.b9G.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cB.ae()-0.5)*0.6
else w=0
v=C.m(22)
u=C.a([new C.ab(0,A.G,A.x.j(0.4),A.cs,14)],x.V)
t=C.a([],x.p)
for(s=D.d5m.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bI(s[q],p,p,C.p(p,p,A.h,p,p,I.a7l,p,18,p,p,p,p,p,18),p))
return C.et(A.A,w,C.p(p,new C.am(A.W,p,A.a9,A.q,t,p),A.h,p,p,new C.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bB,p,p,100),p)}}
B.aIg.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.bt9.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bph()}}
B.aIy.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.btd.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpA()}}
B.aJ2.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.btn.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bq5()}}
B.aJx.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.btz.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bqA()}}
B.b3n.prototype={
B(d){var w,v=this,u=null,t=v.c,s=D.ayI.h(0,t)
$.aZr=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aF(u,u,u,u,E.qu,u,u,u,new B.cmB(d),u,u,u,u,u,u),C.D(C.d(t,u,1,A.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(C.aF(u,u,u,u,C.V(A.Lm,s,u,u,u,22),u,u,u,new B.cmC(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.C(D.bkJ,C.B(t,A.m,u,A.e,A.j,0,u,u),u),C.D(v.f,1)],w)
w.push(C.p(u,v.r,A.h,u,u,new C.o(D.TW,u,new C.c1(new C.ay(A.c.j(0.08),1,A.r,-1),A.X,A.X,A.X),u,u,u,A.n),u,u,u,u,A.DM,u,u,1/0))
return C.cd(u,A.bX,C.bq(!0,C.v(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.aj,!0,!0),u,!1,!1,u,u)}}
B.dw.prototype={
B(d){var w,v,u,t=this,s=null,r=C.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=C.H(o,A.r,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)A.d.v(v,C.a([C.V(u,q?t.r:A.aP,s,s,s,16),A.ez],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?A.c:A.af,s,s,s,s,s,s,s,s,12,s,s,A.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.C(D.V5,C.aH(s,C.dj(s,C.B(v,A.m,s,A.e,A.Q,0,s,s),s,s,A.b9,new C.o(p,s,o,r,s,s,A.n),A.eK,s,s,s,A.h8,s,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.cmx(t),s,s,s,s,s,s,!1,A.ad),s)}}
B.eF.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a5(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.D(C.ci(C.B(this.c,A.m,w,A.e,A.j,0,w,w),A.q,w,A.z,w,w,w,w,A.b0),1))
return new C.C(A.cL,C.B(v,A.m,w,A.e,A.j,0,w,w),w)}}
B.at1.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.asB(d).cAj(q,A.bG,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.D(C.a7V(C.md(s,s,s,u,v,t.e,A.k.D(w,v,u)),q),1)
u=t.x
return new C.a5(s,34,C.B(C.a([new C.a5(78,s,r,s),q,new C.a5(38,s,C.d(u==null?A.k.aa(w,1):u,s,s,s,s,s,s,Ac.QV,A.dM,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
B.ff.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.C(D.V5,C.aD(!1,A.a1,!0,C.m(12),C.aI(!1,C.m(12),!0,new C.C(A9.acy,C.B(C.a([C.V(w.c,u,v,v,v,17),A.ez,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new B.cmw(w),v,v,v,v,v,v,v),A.h,t,0,v,v,v,v,v,A.ac),v)}}
B.E1.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.ezM:u
w=t?A.c:A.ba
w=C.H(w,A.r,t?2.5:1)
return C.aH(u,C.dj(u,u,u,u,A.b9,new C.o(p,u,w,u,t?C.a([new C.ab(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a6),A.hS,u,r,D.acn,u,u,u,s),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.cmD(v),u,u,u,u,u,u,!1,A.ad)}}
B.me.prototype={
a2J(d,e){var w=C.dc()
w.sex(C.cO(C.dB(0,0,0,d,0,0),new B.cmy(this,w,e)))
this.fb$.push(w.b9())},
kM(){var w=this,v=w.qR(new B.cmA(w))
v.kp(0)
w.fa$!==$&&C.aO()
w.fa$=v}}
B.a8T.prototype={
bsC(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,C.K)(w),++q)for(p=A.d.gah(w[q]);p.C();){o=p.gT(0)
n=J.a7(o)
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
for(m=0,q=0;q<w.length;w.length===p||(0,C.K)(w),++q){for(v=A.d.gah(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gT(0)
n=J.a7(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&C.aO()
g.ax=m
w=g.bvL()
g.ay!==$&&C.aO()
g.ay=w},
bvL(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
El(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
B.a8U.prototype={
cwp(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(r.El(0,w,e)){if(t!=null){q=r.ax
q===$&&C.c()
p=t.ax
p===$&&C.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
B.uq.prototype={}
B.Nv.prototype={}
B.xe.prototype={}
B.Nu.prototype={
f8(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.ajZ[w.aB(7)]
w=w.he()?0:12
u=A.o.G(t.c++,3)===0?"flute":"bell"
B.l1(u,v+w-12,2200,0.1)}}
B.To.prototype={
S(){var w=$.av()
return new B.aAz(new C.co(null,x.A),new C.ap(A.as,w),new B.Nu(A.cB),D.cRk,A.at,D.a_y,$,A.bw,0,C.a([],x.X),null,null)}}
B.aAz.prototype={
Z(){var w,v=this
v.a0()
v.kM()
v.a.toString
w=$.fVw
if(w==null)w=$.fVw=B.cp7()
w.bx(new B.dOB(v),x.P)},
p(){var w=this.e
w.R$=$.av()
w.O$=0
this.bpI()},
ckD(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n)q.push(new B.dO3(p[n]).$0())
w.push(q)}this.w=w},
gUa(){var w=this.fy
return w.A(0,A.at)?100:Math.min(w.a,w.b)*0.43},
aqf(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
au6(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.aqf(d.x,d.w,105/Math.max(w,3))
C.eH()
B.l1("bell",(A.d.cP(D.a_9,d.c)+1)*3+12,900,0.45)
B.dI(300,"",280,1.4,0.15,"tri")},
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
c1g(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
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
return m.cwp((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c1f(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.n(new B.dO1(w))
return}w.n(new B.dO2(w,v,A.a.i(d).toLowerCase()))},
bI8(){var w=null,v=this.c
v.toString
C.cg(w,w,!0,w,new B.dO_(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aF(n,n,n,n,D.bv7,n,n,n,o.gbI7(),n,n,n,n,"Earth facts",n),C.aF(n,n,n,n,D.m7,n,n,n,new B.dOm(o,d),n,n,n,n,"Share",n)],l),j=C.ck(new B.dOn(o,m)),i=A.c.j(0.06)
i=C.a([C.aK(n,A.U,!1,n,!0,A.q,n,C.aL(),o.e,n,n,n,n,n,2,C.bn(n,new C.b3(4,C.m(14),A.X),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,H.C0,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bD1,n,n,n,n,n,n,n,n,n,n,n,n),A.z,!0,n,!0,n,!1,n,A.ah,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc1e(),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.iC,!0,A.a5,n,A.am,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
w.push(new B.dw(s.a,!1,new B.dOo(o,s),A.mH,A.aX,n))}i.push(new C.C(A.ir,new C.a5(n,38,C.cL(w,n,n,n,n,A.b0,!1),n),n))}i.push(A.ar)
w=C.a([new B.dw("Whole Earth",!1,new B.dOs(o),A.ha,A.aX,n)],l)
for(v=D.ayx.gdH(D.ayx),v=v.gah(v);v.C();){u=v.gT(v)
w.push(new B.dw(u.a,!1,new B.dOt(o,u),n,A.aX,n))}w.push(new B.dw("Random",!1,new B.dOu(o),A.m0,A.aX,n))
i.push(new B.eF(w,"GO TO",n))
w=o.z
i.push(B.hp(A.aX,A.k.aa(w,1)+"x","Zoom",16,0.8,new B.dOv(o),w))
w=o.dy
i.push(B.hp(A.cE,A.a.aT(A.o.u(A.k.bw(w)),2,"0")+":00","Time",24,0,new B.dOw(o),w))
w=o.fr
i.push(B.hp(A.bh,o.cjq(),"Season",365,0,new B.dOx(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lu:D.EF
i.push(new B.eF(C.a([new B.dw("Spin",w,new B.dOy(o),D.bqm,A.aX,n),new B.dw("Night",v,new B.dOz(o),A.uw,A.aX,n),new B.dw("Borders",u,new B.dOp(o),D.bqq,A.aX,n),new B.dw("Names",r,new B.dOq(o),O.agF,A.aX,n),new B.dw("Music",q,new B.dOr(o),p,A.aX,n)],l),n,n))
return B.jx(A.aX,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.v(i,A.m,n,A.e,A.Q,0,A.p))},
cjq(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.aru[u])v=u
return A.i3[v]+" "+(A.k.bw(w-D.aru[v])+1)},
c1d(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new G.ms(1,A.o.G((A.d.cP(D.a_9,t)+1)*47,360),0.55,1).it()
r=new B.dNY()
q=C.m(20)
p=C.H(s.j(0.6),A.r,1)
o=x.p
n=C.B(C.a([C.p(j,j,A.h,j,j,new C.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.aa,C.D(C.d(d.a,j,1,A.a2,j,j,j,A.dQ,j,j,j),1),C.aF(j,j,j,j,A.LH,j,j,j,new B.dNX(this),j,j,j,j,j,A.c8)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.ht,j,j,j)
m=D.d44.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.B(C.a([m,A.aa,r.$2("PEOPLE",l?B.fcc(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",B.Fs(i)+" km\xb2")
if(l)m=(w<10?A.k.aa(w,1):B.Fs(w))+" per km\xb2"
else m="\u2014"
m=C.B(C.a([i,A.aa,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.aa(u,3):A.k.aa(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.v(C.a([n,t,A.P,v,A.P,m,A.P,C.B(C.a([i,A.aa,r.$2("ECONOMY",l>0?"$"+B.fcc(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.Q,0,A.p),A.h,j,j,new C.o(D.Tm,j,p,q,j,j,A.n),j,j,j,j,D.acS,j,j,j)}}
B.bbU.prototype={
a5(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.Y(),d7=C.L()
d7.r=D.zc.gq(0)
d8.b2(new C.a9(0,0,0+d4,0+d5),d7)
w=new C.eX()
w.dQ(4)
for(d7=d8.a,v=0;v<90;++v){u=w.ae()
t=w.ae()
s=w.ae()
r=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.25+w.ae()*0.5).gq(0)
q=r.I()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new C.u(d4,d5)
o=d2.f
u=C.L()
t=x.O
u.sap(new C.bR(A.A,0.5,A.w,d3,0,C.a([A.K,A.aX.j(0.35),A.K],t),D.cD_,d3).au(0,C.bV(p,o*1.1)))
d8.af(p,o*1.05,u)
n=C.bV(p,o)
u=C.L()
u.sap(D.dWd.au(0,n))
d8.af(p,o,u)
J.bB(d7.save())
u=x.v
d6=new C.aQ(d6.r,A.aq,d3,d3,C.a([],u))
d6.E(new C.ky(n))
d8.tk(0,d6)
m=d2.d*3.141592653589793/180
l=d2.e*3.141592653589793/180
k=Math.sin(m)
j=Math.cos(m)
i=Math.sin(l)
h=Math.cos(l)
g=C.L()
g.b=A.ae
m=g.c=0.7
g.r=A.c.j(0.1).gq(0)
f=new B.d5T(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.I()
s=d.e
d7.drawPath((s==null?d.e=new C.cE(d.gbL().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.Y()
a3=C.a([],u)
d=new C.aQ(a2.r,A.aq,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ao(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.by(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.I()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cE(d.gbL().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.I()
s=d.e
d7.drawPath((s==null?d.e=new C.cE(d.gbL().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.Y()
a3=C.a([],u)
d=new C.aQ(a2.r,A.aq,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ao(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.by(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.I()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cE(d.gbL().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.G((A.d.cP(D.a_9,a7.c)+1)*47,360)
$.Y()
b0=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
a3=a8?0.35:0.5
b0.r=new G.ms(1,a9,a3,a8?1:0.62).it().gq(0)
b1=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
b1.c=a8?2.2:m
b1.e=A.fs
b1.r=(a8?A.c:A.x.j(0.55)).gq(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,C.K)(a3),++b3){b4=a3[b3]
b5=b4.length/4|0
b6=$.Y()
b7=C.a([],u)
b8=new C.aQ(b6.r,A.aq,d3,d3,b7)
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
if(c8!=null)b6.by(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new C.ao(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.by(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}}if(!b9)continue
b6=new C.bE()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.by(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.I()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cE(b8.gbL().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.I()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cE(b8.gbL().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.K)(a5),++b3){d=a5[b3]
$.Y()
s=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
s.b=A.ae
s.c=5
s.r=A.c.j(0.25).gq(0)
s.z=A.qD
q=s.I()
s=d.e
d7.drawPath((s==null?d.e=new C.cE(d.gbL().a.snapshot()):s).a,q)
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
c9=B.hsZ(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbh(b2)
c9.a5(d8,new C.u(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.D(k*c0+j*c1*c4,-1,1)
$.Y()
u=C.L()
u.sap(new C.bR(A.A,0.5,A.w,d3,0,C.a([A.K,A.K,D.b_d.j(0.78)],t),D.cRF,d3).au(0,C.bV(new C.u(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.af(p,o,u)}$.Y()
d4=C.L()
d4.sap(new C.bR(A.A,0.5,A.w,d3,0,C.a([A.K,A.x.j(0.4)],t),D.d1F,d3).au(0,n))
d8.af(p,o,d4)
d7.restore()
d7=C.L()
d7.b=A.ae
d7.c=1.4
d7.r=A.h6.j(0.5).gq(0)
d8.af(p,o,d7)},
ar(d){return!0}}
B.aIE.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.aIF.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpH()}}
B.bq3.prototype={}
B.Uu.prototype={
S(){return new B.bh9()}}
B.bh9.prototype={
gaOi(){var w=this.d
if(w===$)w=this.d=A.cB.aB(16)
return w},
B(d){var w=null,v=C.eA(w,w,w,!0,!0,D.zc,w,1,!0,w,0,!1,w,!1,w,w,C.aF(w,w,w,w,D.ait,w,w,w,new B.er_(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.f5m,w,w,w,1,w,!0),u=C.m(18),t=A.aX.j(0.1),s=C.H(A.aX.j(0.35),A.r,1),r=x.p
return C.cd(v,D.zc,C.cL(C.a([C.p(w,C.B(C.a([D.btR,A.ax,C.D(C.d(D.cGD[this.gaOi()],w,w,w,w,w,w,D.a4N,w,w,w),1),C.aF(w,w,w,w,D.bDY,w,w,w,new B.er0(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new C.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bB,w,w,w),A.ay,C.ck(new B.er1())],r),w,A.Vq,w,w,A.ak,!1),w,!1,!1,w,w)}}
B.Uf.prototype={
S(){return B.htq()}}
B.bgX.prototype={
cby(d){var w=d.c,v=B.hts(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.u(Math.cos(t)*v,Math.sin(t)*v)},
Z(){this.a0()
this.kM()},
l4(d){var w,v,u,t=this
t.e.f8(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.cby(w)
u=new C.u(-v.a,-v.b).aM(0,t.w)
v=C.l2(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc1h(){var w=this.ch
return new C.u(w.a/2,w.b/2).ao(0,this.x)},
c1l(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.AS[s]
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
aVl(d){this.n(new B.ej9(this,d))
C.eH()
B.l1("bell",D.d1P[A.o.G(A.d.cP(D.AS,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aF(m,m,m,m,D.m7,m,m,m,new B.ejk(n,d),m,m,m,m,"Share",m)],k),i=C.ck(new B.ejl(n,l)),h=C.a([new B.dw("All",!1,new B.ejm(n),A.Yj,A.aL,m)],k)
for(w=0;w<10;++w){v=D.AS[w]
h.push(new B.dw(v.a,n.z===v,new B.ejn(n,v),m,C.aY(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.aa(s,0)+" d/s":""+A.k.U(s)+" d/s"
t=B.hp(A.aL,s,"Time",1,0,new B.ejo(n),u/t)
u=n.w
u=B.hp(A.aL,A.k.aa(u,1)+"x","Zoom",9,0.5,new B.ejp(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lu:D.EF
return B.jx(A.aL,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.v(C.a([new B.eF(h,"GO TO",m),t,u,new B.eF(C.a([new B.dw("Orbits",s,new B.ejq(n),m,A.aL,m),new B.dw("Names",r,new B.ejr(n),m,A.aL,m),new B.dw("Asteroids",q,new B.ejs(n),m,A.aL,m),new B.dw("Music",p,new B.ejt(n),o,A.aL,m)],k),m,m)],k),A.m,m,A.e,A.Q,0,A.p))},
c1i(d){var w,v,u,t,s,r=null,q=C.aY(d.z),p=d.c,o=p*8.317,n=new B.ej7(),m=C.m(20),l=C.H(q.j(0.6),A.r,1),k=C.p(r,r,A.h,r,r,new C.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.B(C.a([k,A.aa,C.D(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.l8,r,r,r),1),C.aF(r,r,r,r,A.LH,r,r,r,new B.ej6(this),r,r,r,r,r,A.c8)],w),A.m,r,A.e,A.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,D.Rh,r,r,r)
v=n.$2("WIDTH",B.Fs(d.d*2)+" km")
u=p===0
p=C.B(C.a([v,A.aa,n.$2("FROM THE SUN",u?"\u2014":C.t(p)+" AU ("+B.Fs(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new B.ej8().$1(v))
t=d.f
v=C.B(C.a([v,A.aa,n.$2("ONE DAY",t>=48?A.k.aa(t/24,0)+" Earth days":A.k.aa(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.B(C.a([n.$2("GRAVITY",C.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.aa(50*t/9.81,s)+" kg"),A.aa,n.$2("TEMPERATURE",""+A.o.U(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.aa(o,1)+" minutes":A.k.aa(o/60,1)+" hours"
return C.p(r,C.v(C.a([j,A.av,k,A.P,p,A.P,v,A.P,s,A.P,C.B(C.a([t,A.aa,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.Q,0,A.p),A.h,r,r,new C.o(D.Tm,r,l,m,r,r,A.n),r,r,r,r,D.acS,r,r,r)}}
B.bo8.prototype={
a5(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.Y()
w=C.L()
w.r=D.zc.gq(0)
a7.b2(new C.a9(0,0,0+a5,0+a6),w)
v=new C.eX()
v.dQ(8)
for(w=a7.a,u=0;u<110;++u){t=v.ae()
s=v.ae()
r=v.ae()
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.ae()*0.5).gq(0)
p=q.I()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc1h()
n=a5.w
if(a5.as)for(a6=A.d.gah(D.AS),t=new C.hK(a6,new B.eKP()),s=o.a,r=o.b;t.C();){q=a6.gT(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
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
l=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
l.r=A.c.j(0.5).gq(0)
p=l.I()
w.drawCircle(t+q*j,s+m*j,0.9,p)
p.delete()}i=B.htr(A.d.gL(D.AS))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.L()
s=x.O
t.sap(new C.bR(A.A,0.5,A.w,a4,0,C.a([A.aL.j(0.5),A.K],s),a4,a4).au(0,C.bV(o,a6)))
a7.af(o,a6,t)
t=C.L()
t.sap(D.dW7.au(0,C.bV(o,i)))
a7.af(o,i,t)
if(a5.at){h=B.fX7("Sun",10.5,A.af)
h.a5(a7,o.ao(0,new C.u(-h.b.c/2,i+4)))}for(a6=A.d.gah(D.AS),t=new C.hK(a6,new B.eKQ()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gT(0)
g=l.c
j=g===0?0:30+150*Math.sqrt(g/30.1)
f=l.e
k=f<=0?0:6.283185307179586*(a5.f/f)+g*1.7
g=q+Math.cos(k)*j*n
f=m+Math.sin(k)*j*n
j=(1.5+1.6*Math.log(l.d/1000+1))*Math.sqrt(n)
e=C.aY(l.z)
d=l.a
if(d==="Saturn"){J.bB(w.save())
w.translate(g,f)
w.rotate(-22.91831180523293,0,0)
a0=C.cN(A.J,j*1.3,j*4.2)
a1=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
a1.b=A.ae
a1.c=j*0.45
a1.r=A.bH.j(0.55).gq(0)
p=a1.I()
w.drawOval(C.c9(a0),p)
p.delete()
w.restore()}a0=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
a0.r=e.j(0.3).gq(0)
a0.z=A.qD
p=a0.I()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
a1=C.aq(e,A.x,0.55)
a1.toString
a0.sap(new C.bR(N.pM,0.5,A.w,a4,0,C.a([A.c,e,a1],s),F.ZP,a4).au(0,C.bV(new C.u(g,f),j)))
p=a0.I()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=2
l.r=A.c.gq(0)
p=l.I()
w.drawCircle(g,f,j+7,p)
p.delete()}if(r&&d==="Earth"){k=a5.f/27.3*2*3.141592653589793
a2=j+11*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
a3.r=A.c.gq(0)
p=a3.I()
w.drawCircle(g+l*a2,f+a0*a2,1.8*a1,p)
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.cLt[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
a3.r=A.af.gq(0)
p=a3.I()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=B.fX7(d,10.5,A.af)
h.a5(a7,new C.u(g+-h.b.c/2,f+(j+4)))}}},
ar(d){return!0}}
B.Tp.prototype={
S(){var w=x.i
return new B.aAA(new B.Nu(A.cB),C.bZ(5,0,!1,w),C.bZ(5,0,!1,w),C.bZ(5,null,!1,x.cD),A.J,A.J,C.a([],x.g),$,A.bw,0,C.a([],x.X),null,null)}}
B.aAA.prototype={
cnL(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c1k(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.dLQ
s.cy=new C.u(s.ay,0)
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
B.dI(150,"",400,0,0.5,"noise")
B.dI(90,"",300,1.5,0.6,"sine")
s.n(new B.dOF())},
Z(){this.a0()
this.kM()},
l4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.f8(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.xE[r]
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
if(q.a!=="Sun")B.dI(60+p*5,"",220,0.6,0.55,"sine")
break}}}if(A.d.e9(s,new B.dP7()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
B.dI(70,"",350,0,0.7,"noise")
break}}v=i.db
if(v.length===0||A.d.gaj(v).aD(0,i.cx).gcj()>120)v.push(i.cx)
if(v.length>700)A.d.cu(v,0)
if(i.cx.gcj()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bGs()
else n=n==="weight"?p.cuL():p.byQ()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.d_e[u]
v.push(new B.dw(t.b,p.d===t.a,new B.dOU(p,t),t.c,A.cQ,o))}v=C.a([new B.eF(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new B.dw("Hammer",!s,new B.dOV(p),A7.XL,A.cQ,o),new B.dw("Feather",s,new B.dOW(p),O.Xl,A.cQ,o),new B.dw(q,r,new B.dP_(p),A.Ep,A.aX,o)],w)
q=p.w
A.d.v(v,C.a([new B.eF(r,o,o),B.hp(A.cQ,""+A.k.U(q*100)+"%","Slow motion",1,0.05,new B.dP0(p),q),new B.eF(C.a([new B.ff(A.uz,"Drop!",new B.dP1(p),A.bh,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=B.hp(A.cQ,""+A.k.U(s)+" kg","Your weight",120,20,new B.dP2(p),s)
r=p.ax
A.d.v(v,C.a([s,B.hp(A.cQ,""+A.k.U(r*100)+" cm","Your jump",1.2,0.1,new B.dP3(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=B.hp(A.cQ,A.k.aa(s,1)+" km/s","Speed",13,0,new B.dP4(p),s)
r=p.ch
A.d.v(v,C.a([s,B.hp(A.cQ,A.k.aa(r,1)+"x out","View",8,0.5,new B.dP5(p),r),new B.eF(C.a([new B.ff(A.mK,"Fire!",p.gc1j(),A.bh,o),new B.ff(A.uz,"Falls",new B.dP6(p),A.c,o),new B.ff(A.rT,"Orbit 7.7",new B.dOX(p),A.c,o),new B.ff(D.bti,"Oval 9",new B.dOY(p),A.c,o),new B.ff(A.EG,"Escape",new B.dOZ(p),A.c,o)],w),o,o)],w))}return B.jx(A.cQ,A.fY,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.v(v,A.m,o,A.e,A.Q,0,A.p))},
bGs(){return new C.C(D.bfJ,C.ck(new B.dOE(this)),null)},
cuL(){var w,v,u,t=null,s=[D.ehJ,D.ej0,D.ej8,D.ejr,D.ej6,D.ejv,D.eie,D.ejO,D.eiN],r=x.p,q=C.a([D.eVd,A.T],r)
for(w=0;w<9;++w){v=s[w]
u=C.aY(v.c)
q.push(new C.C(A.cL,new C.cC(A.b0,A.e,A.j,A.m,t,A.p,t,0,C.a([new C.a5(62,t,new C.w(v.a,t,new C.F(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bH(1,A.br,new C.Ak(new B.dOG(this,v),t),t)],r),t),t))}q.push(A.av)
q.push(D.eXl)
return C.cL(q,t,A.iK,t,t,A.ak,!1)},
byQ(){return C.ck(new B.dOC(this))}}
B.b79.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.Y(),e=C.L()
e.r=D.zc.gq(0)
d.b2(new C.a9(0,0,0+h,0+g),e)
w=new C.eX()
w.dQ(2)
for(e=d.a,v=0;v<80;++v){u=w.ae()
t=w.ae()
s=w.ae()
r=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.2+w.ae()*0.5).gq(0)
q=r.I()
e.drawCircle(u*h,t*g,s*1.1+0.3,q)
q.delete()}h=j.c
p=6371*h
g=j.b
e=C.L()
e.sap(new C.bR(A.A,0.5,A.w,i,0,C.a([A.K,A.aX.j(0.35),A.K],x.O),D.cSw,i).au(0,C.bV(g,p*1.1)))
d.af(g,p*1.06,e)
e=C.L()
e.sap(D.dW2.au(0,C.bV(g,p)))
d.af(g,p,e)
o=g.ao(0,new C.u(0,-p))
f=f.r
e=x.v
n=new C.aQ(f,A.aq,i,i,C.a([],e))
u=o.a
t=o.b
s=t+3
n.E(new C.b5(u-16,s))
n.E(new C.ao(u,t-400*h-4))
n.E(new C.ao(u+16,s))
n.E(new C.bE())
s=C.L()
s.r=A.ai.gq(0)
d.aO(n,s)
s=o.ao(0,new C.u(0,-400*h-6))
u=C.L()
u.r=A.c.gq(0)
d.af(s,4,u)
u=j.e
if(u.length>1){e=C.a([],e)
m=new C.aQ(f,A.aq,i,i,e)
f=g.a
t=g.b
m.E(new C.b5(f+A.d.gL(u).a*h,t+A.d.gL(u).b*h))
for(u=C.df(u,1,i,C.U(u).c),s=u.$ti,u=new C.bU(u,u.gJ(0),s.k("bU<ai.E>")),s=s.k("ai.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new C.ao(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.by(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.Y()
f=C.L()
f.b=A.ae
f.c=2.4
f.d=A.bN
f.r=A.cQ.j(0.9).gq(0)
d.aO(m,f)}if(j.f){f=j.d
k=g.ao(0,new C.u(f.a*h,f.b*h))
h=C.L()
h.r=A.cQ.j(0.4).gq(0)
h.z=H.mQ
d.af(k,7,h)
h=C.L()
h.r=A.c.gq(0)
d.af(k,4,h)}},
ar(d){return!0}}
B.U7.prototype={
S(){return new B.bgU(new C.co(null,x.A),$,A.bw,0,C.a([],x.X),null,null)}}
B.bgU.prototype={
Z(){this.a0()
this.kM()},
l4(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.NB[l.e],i=D.NB[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aF(k,k,k,k,D.m7,k,k,k,new B.ec3(l,d),k,k,k,k,"Share",k)],u)
s=C.D(C.b2(k,k,k,new B.bnH(f,g,v,k),A.f9),1)
r=g.a
q=v<10?A.k.aa(v,1):B.Fs(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.ja,A.L,k,k)
o=B.Fs(v*v*v)
n=A.a.c7(p,"s")?"":"s"
h=C.v(C.a([s,C.p(k,C.v(C.a([q,A.av,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,X.a4d,A.L,k,k),A.bA,C.d(p+": "+B.Fs(w*2)+" km wide. "+r+": "+B.Fs(h*2)+" km wide.",k,k,k,k,k,k,X.a4q,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.h,k,k,k,k,k,k,k,D.bhT,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.NB[m]
r.push(new B.dw(w.a,l.e===m,new B.ec4(l,m),k,C.aY(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.NB[m]
w.push(new B.dw(s.a,l.f===m,new B.ec5(l,m),k,C.aY(s.c),k))}return B.jx(A.bU,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.en(h,l.d),"SIZE COMPARE",C.v(C.a([new B.eF(r,"FIRST",k),new B.eF(w,"SECOND",k)],u),A.m,k,A.e,A.Q,0,A.p))}}
B.bnH.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.Y()
w=C.L()
w.r=D.TP.gq(0)
d.b2(new C.a9(0,0,0+h,0+g),w)
v=new C.eX()
v.dQ(6)
for(w=d.a,u=0;u<70;++u){t=v.ae()
s=v.ae()
r=v.ae()
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.ae()*0.4).gq(0)
p=q.I()
w.drawCircle(t*h,s*g,r+0.3,p)
p.delete()}o=Math.min(h/2-16,g/2-10)*0.98
n=Math.max(o/this.d,0.8)
h*=0.5
g*=0.5
m=new C.u(h,g)
w=new B.eIY(d)
t=this.c
w.$3(m,o,C.aY(t.c))
s=o-n
l=new C.u(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,C.aY(s.c))
w=C.L()
w.b=A.ae
w.c=1.4
w.r=A.af.gq(0)
d.af(l,n+3,w)
k=C.io(i,i,i,i,C.dl(i,i,i,i,i,i,i,i,i,D.eHt,s.a),A.a5,A.cm,i,A.en,A.cj)
k.fe()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbh(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbh(g)-6
h=g}k.a5(d,l.ao(0,new C.u(-w/2,h)))
j=C.io(i,i,i,i,C.dl(i,i,i,i,i,i,i,i,i,D.eKC,t.a),A.a5,A.cm,i,A.en,A.cj)
j.fe()
t=j.b
h=t.c
t=t.a.c
j.a5(d,m.ao(0,new C.u(-h/2,-t.gbh(t)/2)))},
ar(d){return!0}}
B.aIG.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.btf.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpJ()}}
B.aJf.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.btt.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bqi()}}
B.aJi.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.btv.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bql()}}
B.NX.prototype={}
B.St.prototype={
S(){return B.hto()}}
B.bfC.prototype={
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
B.dI(70,"",500,0.3,0.5,"sine")}}A.d.bm(w,new B.dxb())},
aVm(d){var w,v,u,t=this.Q
if(t.A(0,A.at))return
w=this.gb2W()
v=d.aD(0,new C.u(t.a/2,t.b*0.42))
u=A.k.D(v.gcj()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new B.NX(t,u,1.2,new C.wq(1,30+A.cB.ae()*40,0.9,0.7).it()))
B.l1("bell",60+A.k.U(12-u)*2,400,0.35)},
gb2W(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new C.J(m,new B.dx_(),C.U(m).k("J<1,O>")).ft(0,A.vS),1.0001,99))
m=x.p
w=C.a([C.aF(n,n,n,n,D.m7,n,n,n,new B.dx0(o,d),n,n,n,n,"Share",n)],m)
v=C.ck(new B.dx1(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.aa(s,0)+" Suns":B.fcc(s)+" Suns"
t=B.hp(A.bC,s,"Mass",1,0,new B.dx3(o),u/t)
u=C.a([new B.dw("Star (10)",!1,new B.dx4(o),n,A.bC,n),new B.dw("Cygnus X-1 (21)",!1,new B.dx5(o),n,A.bC,n),new B.dw("Milky Way core (4 million)",!1,new B.dx6(o),n,A.bC,n),new B.dw("M87 (6.5 billion)",!1,new B.dx7(o),n,A.bC,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lu:D.EF
return B.jx(A.bC,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.v(C.a([t,new B.eF(u,"LIKE",n),new B.eF(C.a([new B.dw("Glowing ring",s,new B.dx8(o),n,A.bC,n),new B.dw("Bent light",r,new B.dx9(o),n,A.bC,n),new B.dw("Music",q,new B.dxa(o),p,A.bC,n),new B.ff(A.jM,"Clear",new B.dx2(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.Q,0,A.p))},
abZ(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.eDy,w,w,w),A.bA,C.d(e,w,2,w,w,w,w,K.a48,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
B.b6y.prototype={
a5(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.Y()
w=C.L()
w.r=D.b6g.gq(0)
b2.b2(new C.a9(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.u(w,v)
t=this.b
s=t.gb2W()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,C.K)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new C.u(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+A.k.D(o/h,0,n)
i=new C.u(w+k/h*g,v+j/h*g)}}k=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
k.r=A.c.j(0.6).gq(0)
f=k.I()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=C.L()
b0.b=A.ae
b0.c=2
b0.r=A.c.j(0.25).gq(0)
b0.z=E.OJ
b2.af(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.aq(A.w6,A.fT,d)
n.toString
k=Math.cos(a4)
$.Y()
j=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
g=a5?1:0.85
j.r=n.j(r*(0.4+(0.5+0.5*k)*0.6)*g).gq(0)
f=j.I()
p.drawCircle(w+a6,v+o*a0*0.28,1.3,f)
f.delete()
if(!a5&&t.x){o=Math.sin(-a4)
k=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
k.r=n.j(b1).gq(0)
f=k.I()
p.drawCircle(w+a6*0.5,v+(q*Math.abs(o)*0.6-b0),1,f)
f.delete()}}}b0=s*1.25
$.Y()
b1=C.L()
b1.sap(new C.bR(A.A,0.5,A.w,null,0,C.a([A.x,A.x.j(0)],x.O),D.cyq,null).au(0,C.bV(u,b0)))
b2.af(u,b0,b1)
b1=C.L()
b1.r=A.x.gq(0)
b2.af(u,s,b1)
b1=C.L()
b1.b=A.ae
b1.c=1
b1.r=A.bC.j(0.55).gq(0)
b2.af(u,s,b1)
for(b0=t.z,b1=b0.length,m=0;m<b0.length;b0.length===b1||(0,C.K)(b0),++m){a7=b0[m]
a0=s*a7.b
t=w+Math.cos(a7.a)*a0
r=v+Math.sin(a7.a)*a0*0.9
a8=1+A.k.D(3.5/a7.b,0,5)
a9=3*a8
q=-Math.sin(a7.a)*a9
o=Math.cos(a7.a)*a9
n=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
n.c=4.2/Math.sqrt(a8)
n.d=A.bN
k=a7.d
n.r=k.j(A.k.D(a7.b/2,0.2,1)).gq(0)
f=n.I()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
o.r=k.j(0.2).gq(0)
o.z=H.mQ
f=o.I()
p.drawCircle(t,r,6,f)
f.delete()}},
ar(d){return!0}}
B.acx.prototype={}
B.Tl.prototype={
S(){var w=x.r,v=x.g
return new B.bg0(new C.co(null,x.A),new B.Nu(A.cB),C.a([],w),A.J,A.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),A.J,A.J,$,A.bw,0,C.a([],x.X),null,null)}}
B.bg0.prototype={
Z(){this.a0()
this.Y_()
this.kM()},
Y_(){var w,v,u,t,s,r,q,p,o=this,n=new C.eX()
n.dQ(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.ae(),1.6)
w.push(new B.acx(t,n.ae()*3.141592653589793*2,(n.ae()-0.5)*0.5*t,25+n.ae()*20))}else{t=Math.pow(n.ae(),0.8)
s=n.aB(o.f)
r=n.ae()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.he()?0:3.141592653589793
q=r+(n.ae()-0.5)*0.25}r=n.ae()
p=t<0.25?35+n.ae()*15:205+n.ae()*50
w.push(new B.acx(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cnC(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.dNc
k.cx=D.dNf
w=new C.eX()
w.dQ(9)
v=k.cy
A.d.a7(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new B.acx(Math.pow(w.ae(),0.8)*0.7,w.ae()*3.141592653589793*2,0,320+w.ae()*30))
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
for(s=k.ay,r=x.S,s=C.df(s,0,C.dK(900,"count",r),C.U(s).c),o=s.$ti,s=new C.bU(s,s.gJ(0),o.k("bU<ai.E>")),o=o.k("ai.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new C.u(l*n,Math.sin(m)*n))}k.db=v
v=C.a([],u)
for(u=k.ay,u=C.df(u,0,C.dK(900,"count",r),C.U(u).c),r=u.$ti,u=new C.bU(u,u.gJ(0),r.k("bU<ai.E>")),r=r.k("ai.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new C.u(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
B.dI(110,"",900,0.5,0.45,"sine")},
l4(d){var w,v,u,t,s,r,q,p=this
p.e.f8(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aD(0,p.fx)
s=Math.max(0.25,t.gcj())
r=t.ez(0,s).aM(0,0.9/(s*s))
w=p.fy.ao(0,r.aM(0,u))
p.fy=w
v=p.cx.aD(0,r.aM(0,u))
p.cx=v
w=p.fx.ao(0,w.aM(0,u))
p.fx=w
v=p.CW.ao(0,v.aM(0,u))
p.CW=v
q=new B.dNc(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aF(r,r,r,r,D.m7,r,r,r,new B.dN2(s,d),r,r,r,r,"Share",r)],q),o=C.b2(r,r,r,new B.bbK(s,r),A.at),n=A.x.j(0.5),m=C.m(14),l=C.H(A.bG,A.r,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.an(8,C.p(r,C.d(w,r,r,r,r,r,r,A5.a40,r,r,r),A.h,r,r,new C.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bS,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.cOo[v]
o=s.Q===u.a&&!s.ch
l.push(new B.dw(u.b,o,new B.dN3(s,u),r,A.h3,r))}l.push(new B.dw("Collide",s.ch,new B.dN4(s),A.wW,A.bU,r))
o=C.a([new B.eF(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=B.hp(A.h3,""+n,"Arms",6,2,new B.dN5(s),n)
l=s.r
A.d.v(o,C.a([n,B.hp(A.h3,A.k.aa(l,1),"Winding",6,0.8,new B.dN6(s),l)],q))}n=s.as
o.push(B.hp(A.h3,""+A.k.U(n*90)+"\xb0","Tilt",1,0.15,new B.dN7(s),n))
n=s.ax
o.push(B.hp(A.h3,A.k.aa(n,1)+"x","Speed",4,0,new B.dN8(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lu:D.EF
o.push(new B.eF(C.a([new B.dw("Dark matter",n,new B.dN9(s),r,A.bC,r),new B.dw("You are here",l,new B.dNa(s),r,A.aL,r),new B.dw("Music",w,new B.dNb(s),t,A.h3,r)],q),r,r))
return B.jx(A.h3,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.en(new C.am(A.W,r,A.b_,A.q,m,r),s.d),"GALAXY",C.v(o,A.m,r,A.e,A.Q,0,A.p))}}
B.bbK.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.Y()
w=C.L()
w.r=D.b7Z.gq(0)
a3.b2(new C.a9(0,0,0+a1,0+a2),w)
v=new C.eX()
v.dQ(3)
for(w=a3.a,u=0;u<90;++u){t=v.ae()
s=v.ae()
r=v.ae()
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.15+v.ae()*0.4).gq(0)
p=q.I()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new C.u(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=C.L()
t.sap(new C.bR(A.A,0.5,A.w,a0,0,C.a([A.aB.j(0.32),A.aB.j(0.12),A.K],x.O),D.bXs,a0).au(0,C.bV(o,a2)))
a3.af(o,a2,t)}m=new B.d30(a1.as)
a2=n*0.3
t=C.L()
t.sap(new C.bR(A.A,0.5,A.w,a0,0,C.a([A.h4.j(0.85),A.aZ.j(0.3),A.K],x.O),a0,a0).au(0,C.bV(o,a2)))
a3.af(o,a2,t)
if(!a1.ch){l=C.L()
for(a2=a1.ay,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){j=a2[k]
s=j.a
i=a1.x?1/(0.25+s*0.9):1/Math.pow(s+0.18,1.5)*0.35
r=a1.at
q=Math.min(i,6)
h=j.b
g=m.$6(Math.cos(h)*s,Math.sin(h)*s,j.c,o,r*q*0.5,n)
q=j.d
r=A.k.G(q,360)
l.r=new G.ms(1,r,q>200?0.45:0.55,1).it().j(0.35+(1-s)*0.5).gq(0)
s=s<0.3?1.3:1
p=l.I()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.Y()
a2=C.L()
a2.b=A.ae
a2.c=1.6
a2.r=A.aL.gq(0)
a3.af(g,9,a2)
f=C.io(a0,a0,a0,a0,D.eAQ,A.a5,A.cm,a0,A.en,A.cj)
f.fe()
f.a5(a3,g.ao(0,new C.u(-f.b.c/2,12)))}}else{e=n*0.8
l=C.L()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.b9_.j(0.6).gq(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.I()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.b4D.j(0.6).gq(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.I()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.Y()
w=C.L()
w.r=A.h4.gq(0)
a3.af(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.L()
w.r=A.id.gq(0)
a3.af(a1,5,w)}},
ar(d){return!0}}
B.U3.prototype={
S(){return new B.bgT(new C.co(null,x.A),new B.Nu(A.cB),$,A.bw,0,C.a([],x.X),null,null)}}
B.bgT.prototype={
Z(){this.a0()
this.kM()},
l4(d){var w,v,u,t=this
t.e.f8(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.G(t.r+d*0.04*v,1)
else{w=A.k.G(t.w+d*0.05*v,1)
t.w=w
u=A.k.bw(w*4)
if(u!==A.k.bw(t.as))B.l1("bell",60+u*4,500,0.35)
t.as=u}},
gcjp(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcac(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aF(q,q,q,q,D.m7,q,q,q,new B.ebK(r,d),q,q,q,q,"Share",q)],p),n=C.D(new C.en(C.b2(q,q,q,new B.bmZ(r,q),A.f9),r.d),1)
if(r.f==="seasons")w=r.gcjp()
else{w=r.gcac()
v=A.k.ak(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.v(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,R.BY,A.L,q,q),A.h,q,q,q,q,q,q,q,E.ad1,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?W.x7:A.iM
t=r.Q
s=t?A.lu:D.EF
s=C.a([new B.eF(C.a([new B.dw("Seasons",n==="seasons",new B.ebL(r),A.xl,A.bq,q),new B.dw("Moon phases",n==="moon",new B.ebM(r),A.uw,A.bq,q),new B.dw(u,!1,new B.ebN(r),v,A.bq,q),new B.dw("Music",t,new B.ebO(r),s,A.bq,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=B.hp(A.bq,D.cNK[A.o.G(A.k.bw(n*12),12)],"Month",1,0,new B.ebP(r),n)
v=r.z
A.d.v(s,C.a([n,B.hp(A.bq,A.k.aa(v,1)+"\xb0","Tilt",90,0,new B.ebQ(r),v)],p))}else{p=r.w
s.push(B.hp(A.bq,""+(A.k.bw(p*29.5)+1),"Day of month",1,0,new B.ebR(r),p))}p=r.y
s.push(B.hp(A.bq,A.k.aa(p,1)+"x","Speed",4,0.2,new B.ebS(r),p))
return B.jx(A.bq,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.v(s,A.m,q,A.e,A.Q,0,A.p))}}
B.bmZ.prototype={
a5(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.Y(),b8=C.L()
b8.r=D.zc.gq(0)
b9.b2(new C.a9(0,0,0+b5,0+b6),b8)
w=new C.eX()
w.dQ(4)
for(b8=b9.a,v=0;v<70;++v){u=w.ae()
t=w.ae()
s=w.ae()
r=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.2+w.ae()*0.4).gq(0)
q=r.I()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new C.u(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=C.cN(p,n*2,o*2)
t=C.L()
t.b=A.ae
t.c=1
t.r=A.ba.gq(0)
b9.j3(u,t)
t=C.L()
t.sap(D.dW4.au(0,C.bV(p,34)))
b9.af(p,22,t)
m=s.r*2*3.141592653589793
l=p.ao(0,new C.u(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aD(0,l).ez(0,p.aD(0,l).gcj())
J.bB(b8.save())
b8.translate(l.a,l.b)
s=C.L()
s.r=D.b6c.gq(0)
b9.af(A.J,k,s)
J.bB(b8.save())
b7=new C.aQ(b7.r,A.aq,b4,b4,C.a([],x.v))
b7.E(new C.ky(C.bV(A.J,k)))
b9.tk(0,b7)
b7=i.aM(0,k).aM(0,0.35)
s=k*1.1
b6=C.L()
b6.sap(D.dWc.au(0,C.bV(A.J,s)))
b9.af(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.u(s,b6)
b7=new C.u(-s,-b6).aM(0,k).aM(0,1.7)
b5=h.aM(0,k).aM(0,1.7)
t=C.L()
t.c=2
t.r=A.cF.gq(0)
b9.bE(b7,b5,t)
t=h.aM(0,k).aM(0,1.7)
b5=C.L()
b5.r=A.cF.gq(0)
b9.af(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.io(b4,b4,b4,b4,C.dl(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aLd,b5),A.a5,A.cm,b4,A.en,A.cj)
f.fe()
f.a5(b9,l.ao(0,new C.u(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.L()
r.b=A.ae
r.c=1
r.r=A.ba.gq(0)
b9.af(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
a0.r=A.aL.j(0.6).gq(0)
a0.c=2
q=a0.I()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=C.L()
r.sap(new C.bR(new C.d6(-0.5,0),1.1,A.w,b4,0,C.a([D.b2m,D.aba],x.O),D.cFE,b4).au(0,C.bV(p,k)))
b9.af(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ao(0,new C.u(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.L()
r.r=D.b05.gq(0)
b9.af(a1,a2,r)
J.bB(b8.save())
b7=b7.r
r=x.v
d=new C.aQ(b7,A.aq,b4,b4,C.a([],r))
d.E(new C.ky(C.bV(a1,a2)))
b9.tk(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.L()
a3.r=A.c4.gq(0)
b9.b2(new C.a9(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aD(0,p).ez(0,a1.aD(0,p).gcj())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=D.bXr[a5]
a7=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
a7.r=A.aX.j(0.45).gq(0)
a7.z=A.j7
q=a7.I()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.u(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.L()
b6.r=D.b01.gq(0)
b9.af(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bB(b8.save())
b6=new C.aQ(b7,A.aq,b4,b4,C.a([],r))
b6.E(new C.ky(C.bV(a8,a9)))
b9.tk(0,b6)
s=s.w
b1=new C.aQ(b7,A.aq,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.E(new C.b5(u,b5))
b6=b2>0
b1.az7(new C.u(u,t+a9),b6,new C.b1(a9,a9))
if(b0<0.5)b6=b2<0
b1.az7(new C.u(u,b5),b6,new C.b1(a9*Math.abs(1-2*b0),a9))
b6=C.L()
b6.r=A.c4.gq(0)
b9.aO(b1,b6)
b8.restore()
b8=C.L()
b8.b=A.ae
b8.c=1
b8.r=A.ba.gq(0)
b9.af(a8,a9,b8)
b3=C.io(b4,b4,b4,b4,D.eAR,A.a5,A.cm,b4,A.en,A.cj)
b3.fe()
b3.a5(b9,a8.ao(0,new C.u(-b3.b.c/2,a9+6)))}},
ar(d){return!0}}
B.aId.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.bt8.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpe()}}
B.aIB.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.bte.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bpD()}}
B.aJe.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
B.bts.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bqh()}}
var z=a.updateTypes(["~()","S(vl)","S(a2o)","aw<~>()","S(Bj)","I(vl,I)","O(O,vl)","S(Bf)","S(Xk)","S(a9c)","S(uq)","S(a17)","S(mZ)","S(YR)","S(aa_)","I(I)","Sz()","T9()","Sp()","Tn()","TG()","TI()","Sy()","U1()","Ug()","U2()","TZ()","Un()","Sx()","Us()","S(ma)","TT()","TY()","acC(X,I)","abx(X,I)","~(a1<@,@>)","I(Bf,Bf)","n(fb)","S(acs)","S(Zy)","S(Bt)","S(a9H)","S(abB)","S(a9q)","I(I,qd)","I(I,Bj)","n(qd)","~(qd,ak<n>,I)","qd?(Bj)","S(qd)","r(n,Zl)","S(Od)","~(zx)","S(a9x)","O(I?)","Uu()","S(Eu)","S(aaO)","O(I)","Ta()","O(NX)","S(a88)","Su()","a6d()","~(agt,n,u,x,O)","~(n,vl)","TW()","TB(X)","U_(X,bm<O>,bm<O>)","Ut(X,bm<O>,bm<O>)","Uy()","Th()","Sv()","T8()","TU()","U6()","Ur()","TS()","~(n)","cp(a8U)","S(a8T)","To()","Uf()","Tp()","St()","Tl()","U7()","U3()","SU()","S(NX)","~(b8)"])
B.fed.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
B.f60.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gL(d.e.split(". "))+"."},
$S:z+37}
B.fbB.prototype={
$1(d){var w
if(!this.a.a2H(d))w=Math.abs(d.db)>0.002||d.dx>0.05
else w=!1
return w},
$S:z+1}
B.fbC.prototype={
$1(d){return d.x},
$S:z+1}
B.fea.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
B.feb.prototype={
$1(d){var w
if(!this.a.a2H(d))w=d.dx>0.05||Math.abs(d.db)>0.002
else w=!1
return w},
$S:z+1}
B.fec.prototype={
$2(d,e){var w=Math.abs(e.db)
return w>d?w:d},
$S:z+6}
B.dVT.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.dVU.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.A(this.b,this.c))},
$S:0}
B.dVV.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gcV(v).Q
v.toString
w.lE(v,A.dS,A.i2)}},
$S:8}
B.dW5.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a7(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
B.dW6.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
B.dW1.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
B.dW_.prototype={
$2(d,e){var w=this.a
w.r.push(C.cO(C.dB(0,0,0,d,0,0),new B.dW0(w,this.b,e)))},
$S:1798}
B.dW0.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
B.dW2.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gUc().agX(0,u[1],u[2],u[3])
u[4].bG(0,new B.dVY(t))
v.e.m(0,t.a,0)
w.d.m(0,u[0],t)
B.dI(700+w.e*120,"",80,0,0.25,"square")
v.n(new B.dVZ(w.a,v,w.f,w.r))},
$S:0}
B.dVY.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:185}
B.dVZ.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bw(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.dW3.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gUc().azP(t,u[1],s,u[3])
B.dI(1500,"",45,0,0.25,"tri")
v=w.b
v.n(new B.dVX(w.a,v,w.e,w.f))},
$S:0}
B.dVX.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bw(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.dW4.prototype={
$0(){B.dI(300,"",360,-1.2,0.3,"square")
var w=this.a
w.n(new B.dVW(w,this.b))},
$S:0}
B.dVW.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
B.dW9.prototype={
$0(){var w=this.a
return w.n(new B.dW8(w))},
$S:0}
B.dW8.prototype={
$0(){return this.a.at=!0},
$S:0}
B.dWa.prototype={
$0(){var w=this.a
return w.n(new B.dW7(w))},
$S:0}
B.dW7.prototype={
$0(){return this.a.at=!1},
$S:0}
B.dWb.prototype={
$0(){var w=this.a
w.f.saU(0,this.b)
w.LT()},
$S:0}
B.dWc.prototype={
$0(){return this.a.Wa(this.b)},
$S:0}
B.dWd.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.LT():w.aRv()},
$S:2}
B.dWe.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.LT():w.aRv()},
$S:0}
B.eao.prototype={
$2(d,e){return d+e},
$S:1799}
B.eaI.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new B.eaH(w,d))},
$S:133}
B.eaH.prototype={
$0(){var w=C.aR(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
B.eaJ.prototype={
$0(){},
$S:0}
B.eaK.prototype={
$0(){},
$S:0}
B.eaq.prototype={
$0(){return this.a.n(new B.eap(this.b,this.c))},
$S:0}
B.eap.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.eaf.prototype={
$1(d){return this.a.cx===d},
$S:58}
B.eag.prototype={
$1(d){return this.a.cx=d},
$S:27}
B.eah.prototype={
$1(d){return this.a.cy===d},
$S:58}
B.eai.prototype={
$1(d){return this.a.cy=d},
$S:27}
B.eaj.prototype={
$1(d){return this.a.db===d},
$S:58}
B.eak.prototype={
$1(d){return this.a.db=d},
$S:27}
B.eal.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:58}
B.eam.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.K(0,d)},
$S:27}
B.ean.prototype={
$0(){var w=this.a
return w.n(w.gat8())},
$S:0}
B.ead.prototype={
$1(d){return this.a.$1(!0)},
$S:81}
B.eae.prototype={
$1(d){return this.a.$1(!1)},
$S:149}
B.eac.prototype={
$1(d){return this.a.$1(!1)},
$S:220}
B.eaB.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ar(e.b,e.d)
o.ch=n
n=C.b2(p,p,p,new B.bdp(o,p),n)
w=this.b
v=B.bvO("WORLD",w.a,w.c)
u=B.bvO("GRAVITY",C.t(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.U(t*100)
t=t<0.25?A.cF:A.bh
t=B.bvO("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.U(s*100)
s=s>D.AM[o.db].d?A.cF:A.c
q=x.p
s=C.a([v,u,t,B.bvO("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(B.bvO("HEIGHT",""+A.k.U(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=C.a([n,C.an(p,C.B(s,A.m,p,A.hF,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bxP(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.qx[w].a+".":"You landed on every world!"
v=C.a([new B.ff(A.m4,"Again",new B.eaw(o),A.c,p),new B.ff(A.wX,"Rebuild",new B.eax(o),A.aL,p)],q)
if(o.d+1<7)v.push(new B.ff(A.jl,"Next world",new B.eay(o),A.bh,p))
n.push(B.h_J("Perfect landing!",w,A.bh,v))}if(o.as==="crashed")n.push(B.h_J("Crash!",o.at,A.cF,C.a([new B.ff(A.m4,"Try again",new B.eaz(o),A.bh,p),new B.ff(A.wX,"Rebuild",new B.eaA(o),A.aL,p)],q)))
return new C.am(A.W,p,A.b_,A.q,n,p)},
$S:61}
B.eaw.prototype={
$0(){var w=this.a
return w.n(w.gat8())},
$S:0}
B.eax.prototype={
$0(){var w=this.a
return w.n(new B.eat(w))},
$S:0}
B.eat.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.eay.prototype={
$0(){var w=this.a
return w.n(new B.eas(w))},
$S:0}
B.eas.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
B.eaz.prototype={
$0(){var w=this.a
return w.n(w.gat8())},
$S:0}
B.eaA.prototype={
$0(){var w=this.a
return w.n(new B.ear(w))},
$S:0}
B.ear.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.eaC.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.n(new B.eav(v,w))},
$S:0}
B.eav.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
B.eaD.prototype={
$1(d){return this.a.y=d},
$S:9}
B.eaE.prototype={
$1(d){return this.a.Q=d},
$S:9}
B.eaF.prototype={
$1(d){return this.a.z=d},
$S:9}
B.eaG.prototype={
$0(){var w=this.a
return w.n(new B.eau(w))},
$S:0}
B.eau.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
B.dxD.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.fW9
if(q==null)q=$.fW9=B.czh()
w=3
return C.b(C.iD(C.a([q,$.tv().baO("assets/data/three.min.js")],x.aJ),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.k9(0,C.cJ(J.q(s,1)))
q.n(new B.dxC(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:53}
B.dxC.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
B.dxf.prototype={
$0(){return this.a.bOC(C.aS(J.q(this.b,"group")))},
$S:0}
B.dxg.prototype={
$1(d){return A.a.aT(A.o.fF(A.o.D(A.k.U(d*255),0,255),16),2,"0")},
$S:392}
B.dxE.prototype={
$0(){return B.a6c("kick",0.25)},
$S:0}
B.dxh.prototype={
$0(){return this.a.cx=this.b},
$S:0}
B.dxi.prototype={
$1(d){return d.a===this.a},
$S:z+11}
B.dxj.prototype={
$0(){return B.a6c("kick",0.5)},
$S:0}
B.dxk.prototype={
$0(){return B.dI(1300+this.a.R8.aB(900),"",40,0,0.2,"square")},
$S:0}
B.dxm.prototype={
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
u=w}if(u.cx!=null&&!A.d.ba(u.d.e,new B.dxl(u)))u.cx=null
u.go=0},
$S:0}
B.dxl.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.auI(d)},
$S:z+11}
B.dxc.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
B.dxd.prototype={
$0(){var w=this.a
return w.n(w.gbYI())},
$S:0}
B.dxe.prototype={
$0(){return this.a.aeF(null)},
$S:0}
B.dxt.prototype={
$0(){var w=this.a.as
return w==null?null:w.eM(0,C.E(["t","shot"],x.N,x.z))},
$S:0}
B.dxu.prototype={
$0(){return this.a.crB(this.b.a)},
$S:0}
B.dxv.prototype={
$0(){return this.a.aeF(this.b)},
$S:0}
B.dxw.prototype={
$1(d){var w=this.a
return w.n(new B.dxs(w,d))},
$S:6}
B.dxs.prototype={
$0(){return this.a.k3=this.b},
$S:0}
B.dxx.prototype={
$0(){var w=this.a
return w.n(new B.dxr(w,this.b))},
$S:0}
B.dxr.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dxy.prototype={
$0(){var w=this.a
return w.n(new B.dxq(w))},
$S:0}
B.dxq.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
B.dxz.prototype={
$0(){var w=this.a
return w.n(new B.dxp(w))},
$S:0}
B.dxp.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eM(0,C.E(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.Im},
$S:0}
B.dxA.prototype={
$0(){var w=this.a
return w.n(new B.dxo(w))},
$S:0}
B.dxo.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aU0()
else w.p2=null},
$S:0}
B.dxB.prototype={
$0(){var w=this.a
return w.n(new B.dxn(w))},
$S:0}
B.dxn.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
B.bWC.prototype={
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
$S:272}
B.bWD.prototype={
$1(d){var w=new C.r8([],[]).oS(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:668}
B.f0z.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)},
$S:226}
B.f0A.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)||w.h(d,1)},
$S:226}
B.f0B.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)!==w.h(d,1)},
$S:226}
B.f0I.prototype={
$1(d){return!J.q(d,0)},
$S:226}
B.f0J.prototype={
$1(d){var w=J.a7(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:226}
B.f0K.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:226}
B.dzO.prototype={
$1(d){return this.a.apV(0)},
$S:8}
B.dzs.prototype={
$0(){var w=this.b
return this.a.cx=new C.J(w,C.hG8(),C.U(w).k("J<1,I>")).fG(0)},
$S:0}
B.dzv.prototype={
$1(d){return""+d},
$S:82}
B.dzP.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
B.dzq.prototype={
$1(d){return this.a.apV(this.b)},
$S:8}
B.dzr.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.att(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.m2(0,d,a1.lv(0.15,0.3))
u=a1.m2(0,d,a1.lv(0.15,0.62))
t=a1.m2(0,"and",a1.lv(0.48,0.46))
s=a1.m2(0,a0,a1.lv(0.82,0.46))
a1=t.a
w.push(new B.mZ(v.a,a1,0))
w.push(new B.mZ(u.a,a1,1))
w.push(new B.mZ(a1,s.a,0))
break
case 1:v=a1.m2(0,d,a1.lv(0.12,0.25))
u=a1.m2(0,d,a1.lv(0.12,0.65))
r=a1.m2(0,"xor",a1.lv(0.46,0.25))
q=a1.m2(0,"and",a1.lv(0.46,0.65))
p=a1.ats(0,a0,a1.lv(0.82,0.25),0)
o=a1.ats(0,a0,a1.lv(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new B.mZ(a1,n,0))
m=u.a
w.push(new B.mZ(m,n,1))
l=q.a
w.push(new B.mZ(a1,l,0))
w.push(new B.mZ(m,l,1))
w.push(new B.mZ(n,p.a,0))
w.push(new B.mZ(l,o.a,0))
break
case 2:k=a1.m2(0,"clock",a1.lv(0.15,0.4))
j=a1.m2(0,"not",a1.lv(0.45,0.65))
s=a1.m2(0,a0,a1.lv(0.82,0.3))
i=a1.m2(0,"buzzer",a1.lv(0.82,0.65))
a1=k.a
w.push(new B.mZ(a1,s.a,0))
n=j.a
w.push(new B.mZ(a1,n,0))
w.push(new B.mZ(n,i.a,0))
break
default:h=a1.m2(0,d,a1.lv(0.12,0.25))
g=a1.m2(0,d,a1.lv(0.12,0.7))
f=a1.m2(0,"nor",a1.lv(0.5,0.25))
e=a1.m2(0,"nor",a1.lv(0.5,0.7))
s=a1.m2(0,a0,a1.lv(0.86,0.25))
a1=f.a
w.push(new B.mZ(g.a,a1,0))
n=e.a
w.push(new B.mZ(n,a1,1))
w.push(new B.mZ(h.a,n,0))
w.push(new B.mZ(a1,n,1))
w.push(new B.mZ(a1,s.a,0))}},
$S:0}
B.dzw.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.att(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.m(0,p,new B.Bf(p,"switch",new C.u(0.14*q.a,r*q.b),0))}o.m2(0,w.e,o.lv(0.86,0.5))},
$S:0}
B.dzl.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
B.dzm.prototype={
$2(d,e){return A.k.aI(d.c.b,e.c.b)},
$S:z+36}
B.dzn.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
B.dzo.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
B.dzp.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.aa8(this.c)
if(v.ax)B.AF("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gL(w)
v.CW=!1
if(v.ax)B.dI(140,"",250,0,0.3,"square")}},
$S:0}
B.dzx.prototype={
$0(){},
$S:0}
B.dzy.prototype={
$0(){return A.d.cu(this.a.e,this.b)},
$S:0}
B.dzz.prototype={
$0(){return this.a.cy=null},
$S:0}
B.dzu.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bm(w.e,new B.dzt(v))
w.cy=null},
$S:0}
B.dzt.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
B.dzk.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.m2(0,this.b,new C.u(w.x.a*(0.3+v.ae()*0.4),w.x.b*(0.2+v.ae()*0.6))).a},
$S:0}
B.dzI.prototype={
$0(){var w=this.a
return w.n(new B.dzH(w))},
$S:0}
B.dzH.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.dzJ.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.x=u
return C.aH(A.c5,C.jA(C.b2(w,w,w,new B.b7B(v,w),u),A.q,w),A.z,!1,w,w,w,w,w,w,w,w,new B.dzC(v),w,w,w,new B.dzD(v),new B.dzE(v),new B.dzF(v),w,w,w,w,w,w,w,w,w,w,new B.dzG(v),w,w,w,!1,A.ad)},
$S:33}
B.dzG.prototype={
$1(d){return this.a.bZH(d.b)},
$S:51}
B.dzE.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.c70(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aue(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aD(0,u)}},
$S:39}
B.dzF.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.u(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
B.dzD.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bSa(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bm(v,new B.dzA(w))
u=t.as
u.toString
v.push(new B.mZ(u,w.a,w.b))
C.jE()}}t.z=t.as=null},
$S:35}
B.dzA.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
B.dzC.prototype={
$1(d){return this.a.asr(d.b)},
$S:297}
B.dzK.prototype={
$0(){return this.a.btP(this.b.a)},
$S:0}
B.dzL.prototype={
$0(){return this.a.apV(this.b.a)},
$S:0}
B.dzM.prototype={
$0(){var w=this.a
return w.n(new B.dzB(w))},
$S:0}
B.dzB.prototype={
$0(){var w=this.a
w.att(0)
w.ay=null},
$S:0}
B.dzN.prototype={
$0(){return this.a.cnz(this.b)},
$S:0}
B.cG3.prototype={
$0(){var w=this,v=null,u=C.io(v,v,v,v,C.dl(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.cm,v,A.en,A.cj)
u.fe()
return u},
$S:328}
B.dF0.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dF_.prototype={
$0(){return this.a.d=null},
$S:0}
B.dF2.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.bTW()},
$S:114}
B.dF1.prototype={
$0(){return C.a8(this.a,!1).nh()},
$S:0}
B.f1_.prototype={
$0(){return D.dI3},
$S:z+55}
B.f10.prototype={
$0(){return D.dgd},
$S:z+59}
B.f11.prototype={
$0(){return D.dd6},
$S:z+62}
B.f1c.prototype={
$0(){return D.dHt},
$S:z+63}
B.f1e.prototype={
$0(){return D.dmB},
$S:z+66}
B.f1f.prototype={
$0(){return D.dg9},
$S:z+88}
B.f1g.prototype={
$0(){return D.dgc},
$S:z+17}
B.f1h.prototype={
$0(){return D.d9h},
$S:z+18}
B.f1i.prototype={
$0(){return D.diH},
$S:z+19}
B.f1j.prototype={
$0(){return D.dkj},
$S:z+20}
B.f1k.prototype={
$0(){return D.dkl},
$S:z+21}
B.f12.prototype={
$0(){return D.dfl},
$S:z+22}
B.f13.prototype={
$0(){return D.dpk},
$S:z+23}
B.f14.prototype={
$0(){return D.dHa},
$S:z+24}
B.f15.prototype={
$0(){return D.dFd},
$S:z+25}
B.f16.prototype={
$0(){return D.do_},
$S:z+26}
B.f17.prototype={
$0(){return D.dHi},
$S:z+27}
B.f18.prototype={
$0(){return D.dfk},
$S:z+28}
B.f19.prototype={
$0(){return D.dHs},
$S:z+29}
B.f1a.prototype={
$0(){return D.dfm},
$S:z+16}
B.f1b.prototype={
$0(){return D.dkB},
$S:z+31}
B.f1d.prototype={
$0(){return D.dnZ},
$S:z+32}
B.eIv.prototype={
$2(d,e){return new B.acC($.bAb()[e],new B.eIu(e,this.a),null)},
$S:z+33}
B.eIu.prototype={
$0(){var w=this.a,v=D.ayI.h(0,$.bAb()[w].a)
$.aZr=v==null?"music":v
C.a8(this.b,!1).cp(C.eD(new B.eIs(w),!1,null,x.H))},
$S:0}
B.eIs.prototype={
$1(d){return $.bAb()[this.a].e.$0()},
$S:43}
B.eIw.prototype={
$2(d,e){return new B.abx(D.arv[e],new B.eIt(this.a,e),null)},
$S:z+34}
B.eIt.prototype={
$0(){return this.a.d.$1(D.arv[this.b])},
$S:0}
B.eIb.prototype={
$0(){return this.a.as=!0},
$S:0}
B.eIa.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eI9.prototype={
$1(d){var w=this
return new C.ed(new B.eI8(w.a,w.b,w.c,w.d),null)},
$S:21}
B.eI8.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aG(a2,d,a0).w
a0=C.aG(a2,d,a0).w
w=x.p
v=C.a([D.eUZ,A.av,D.f_X,A.ab],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.b1(12,12)
m=new C.b1(12,12)
m=C.a([new C.bH(1,A.br,C.aK(d,A.U,!1,d,!0,A.q,d,C.aL(),r[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Title",d,H.C0,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b3(4,new C.bv(n,n,n,n),A.X),!0,d,d,d,d),A.z,!0,d,!0,d,!1,d,A.ah,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,A.iC,!0,A.a5,d,A.am,d,d,d,d),d),A.aa,new C.bH(2,A.br,C.aK(d,A.U,!1,d,!0,A.q,d,C.aL(),q[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Small line",d,H.C0,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b3(4,new C.bv(m,m,m,m),A.X),!0,d,d,d,d),A.z,!0,d,!0,d,!1,d,A.ah,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,A.iC,!0,A.a5,d,A.am,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.d0N[l]
j=new C.b1(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.z(t.a.c.d,s)
t.w=i}h=A.d.gL(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.z(t.a.c.d,s)
t.w=i}g=A.d.gL(i)}else g=A.bG
f=new C.ay(g,u[p].A(0,k)?1.8:1,A.r,-1)
n.push(C.aH(d,C.p(d,C.V(k,u[p].A(0,k)?A.c:A.aP,d,d,d,22),A.h,d,d,new C.o(h,d,new C.c1(f,f,f,f),new C.bv(j,j,j,j),d,d,A.n),d,d,d,A.hm,d,d,d,42),A.z,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new B.eI6(a3,p,u,k),d,d,d,d,d,d,!1,A.ad))}A.d.v(v,C.a([new C.w("SLAB "+o,d,D.eLh,d,d,d,d,d,d,d,d,d),A.ar,new C.cC(A.b0,A.e,A.j,A.m,d,A.p,d,0,m,d),A.P,new C.a5(d,44,C.cL(n,d,d,d,d,A.b0,!1),d),A.ay],w))}v.push(C.bL(A.C7,new B.eI7(t,r,q,u,a2),d))
return new C.C(new C.N(0,0,0,a1.f.d),C.bq(!0,new C.d2(new C.aX(0,1/0,0,a0.a.b*0.86),C.cL(v,d,A1.DR,d,d,A.ak,!0),d),!0,!1,A.aj,!0,!0),d)},
$S:107}
B.eI6.prototype={
$0(){var w=this
return w.a.$1(new B.eI5(w.b,w.c,w.d))},
$S:0}
B.eI5.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
B.eI7.prototype={
$0(){var w=this,v=w.a
v.n(new B.eI4(v,w.b,w.c,w.d))
C.a8(w.e,!1).M(null)},
$S:0}
B.eI4.prototype={
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
B.eIj.prototype={
$0(){var w=this.a
return w.n(new B.eIi(w))},
$S:0}
B.eIi.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eIk.prototype={
$0(){return B.qk(this.b,this.a.f,"scene")},
$S:0}
B.eIl.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(A.d.gL(u),A.d.gaj(u),0.4)
u.toString
w=this.a.gXo().x
w===$&&C.c()
return C.bT(v,new C.o(v,v,v,v,v,new C.bR(D.aOD,0.9,A.w,v,0,C.a([u.j(0.06+0.03*w),A.bX],x.O),v,v),A.n),A.bb)},
$S:270}
B.eIm.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.au(C.eZ(A.A,C.c3(new C.h4(C.a([u.gt7(),u.gXo()],x.dS)),new B.eIh(u,this.b,v),w),A.h,A.eb),w,w,w)},
$S:238}
B.eIh.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gt7().x
r===$&&C.c()
w=r<0.9?1:1-B.bng(r,0.9,0.98)
v=s.gXo().x
v===$&&C.c()
u=A.dJ.av(0,v)
switch(s.gatu().a){case 0:s=s.bt2(t.b,r,u,t.c)
break
case 1:s=s.bIX(t.b,r,u,t.c)
break
case 2:s=s.cs3(t.b,r,u,t.c)
break
case 3:s=s.bvV(t.b,r,u,t.c)
break
case 4:s=s.bz1(t.b,r,u,t.c)
break
case 5:s=s.byf(t.b,r,u,t.c)
break
default:s=null}return C.d8(s,w)},
$S:221}
B.eIn.prototype={
$2(d,e){var w=C.asB(this.b),v=this.c.d,u=C.aq(A.d.gL(v),A.d.gaj(v),0.4)
u.toString
v=C.aq(A.d.gL(v),A.d.gaj(v),0.4)
v.toString
v=w.cAd(u,A.bG,v,3.5)
u=this.a
w=u.gt7().x
w===$&&C.c()
return C.a7V(C.md(null,null,null,1,0,new B.eIg(u),A.k.D(w,0,1)),v)},
$S:1803}
B.eIg.prototype={
$1(d){var w=this.a
w.gt7().sq(0,d)
if(w.as)w.n(new B.eIc(w))},
$S:6}
B.eIc.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eIo.prototype={
$0(){var w=this.a
w.gt7().sq(0,0)
w.adp()},
$S:0}
B.eIp.prototype={
$1(d){var w=this.a
w.n(new B.eIf(w,d))
if(w.as)w.adp()},
$S:6}
B.eIf.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eIq.prototype={
$0(){var w=this.a
w.n(new B.eIe(w,this.b))
w.gt7().sq(0,0)
if(w.as)w.adp()},
$S:0}
B.eIe.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eIr.prototype={
$0(){var w=this.a
return w.n(new B.eId(w,this.b))},
$S:0}
B.eId.prototype={
$0(){var w=C.z(this.b,x.G)
return this.a.w=w},
$S:0}
B.eI2.prototype={
$2(d,e){return A.k.aI(d.a,e.a)},
$S:1804}
B.eI3.prototype={
$1(d){return d.b},
$S:1805}
B.d9z.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
B.d9A.prototype={
$1(d){return d.b===this.a},
$S:z+8}
B.d9w.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
B.d9x.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.d9y.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.d9B.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.d9C.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.d9D.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.d9E.prototype={
$1(d){return d.d<this.a.ax},
$S:z+38}
B.d9F.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+39}
B.d9G.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+40}
B.d9H.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+41}
B.d9I.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+42}
B.d9J.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+43}
B.e9J.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e9y.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.e9A.prototype={
$2(d,e){return d+e.d*7+A.o.G(A.a.gV(e.b),97)},
$S:z+44}
B.e9B.prototype={
$2(d,e){return d+A.o.G(A.a.gV(e.a),31)+A.o.G(A.a.gV(e.b),17)},
$S:z+45}
B.e9E.prototype={
$1(d){var w=D.ma.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.G(d.d,u)]+")":t},
$S:z+46}
B.e9F.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.U(q),o=x.dg,n=C.z(new C.e3(new C.cT(new C.a4(q,new B.e9G(d),p.k("a4<1>")),new B.e9H(r),p.k("cT<1,qd?>")),o),o.k("G.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aF(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.K)(n),++v){u=n[v]
if(w.length>=6)return
t=C.z(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+47}
B.e9G.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.e9H.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+48}
B.e9C.prototype={
$1(d){return D.ma.h(0,d.b).c===D.vF},
$S:z+49}
B.e9D.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.ea8.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.a5h(0,u)
w.cM3(A.o.ak(v,1000))},
$S:8}
B.e9I.prototype={
$0(){},
$S:0}
B.e9u.prototype={
$0(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ax(),$async$$0)
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
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$$0,v)},
$S:1}
B.e9L.prototype={
$1(d){var w=null,v=this.a.b
return C.bq(!0,C.v(C.a([A.P,C.dL(!1,w,w,w,!0,w,w,w,!0,w,C.V(D.ma.h(0,v).b,D.ma.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fah,w,C.d(D.ma.h(0,v).a,w,w,w,w,w,w,A.hf,w,w,w),w,w,w),C.dL(!1,w,w,w,!0,w,w,w,!0,w,T.aix,w,w,w,w,new B.e9K(d),!1,w,w,w,w,w,w,w,D.f2y,w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),!0,!1,A.aj,!0,!0)},
$S:34}
B.e9K.prototype={
$0(){C.a8(this.a,!1).M(!0)
return null},
$S:0}
B.e9N.prototype={
$1(d){var w,v,u=null,t=C.aG(d,u,x.m).w,s=C.a([D.dPS],x.p)
for(w=0;w<6;++w){v=D.arN[w]
s.push(C.dL(!1,u,u,u,!0,u,u,u,!0,u,D.bDE,u,u,u,u,new B.e9M(d,v),!1,u,u,u,u,u,new C.w(v.b,u,A.l9,u,u,u,u,u,u,u,u,u),u,new C.w(v.a,u,A.hf,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bq(!0,new C.d2(new C.aX(0,1/0,0,t.a.b*0.7),C.cL(s,u,D.blk,u,u,A.ak,!0),u),!0,!1,A.aj,!0,!0)},
$S:34}
B.e9M.prototype={
$0(){C.a8(this.a,!1).M(this.b)
return null},
$S:0}
B.e9x.prototype={
$1(d){var w=null
return C.eo(C.a([C.bK(!1,A.df,w,w,!0,w,w,new B.e9v(d),w,w),C.bK(!1,A.C6,w,w,!0,w,w,new B.e9w(d),w,w)],x.p),w,w,D.rw,D.f06,w,w,w,w,D.f2P,w)},
$S:20}
B.e9v.prototype={
$0(){C.a8(this.a,!1).M(!1)
return null},
$S:0}
B.e9w.prototype={
$0(){C.a8(this.a,!1).M(!0)
return null},
$S:0}
B.ea6.prototype={
$0(){var w=this.a
return w.n(new B.ea5(w))},
$S:0}
B.ea5.prototype={
$0(){return this.a.r=!1},
$S:0}
B.ea7.prototype={
$2(d,e){var w,v,u,t=null,s=new C.ar(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.lV(new B.e9X(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.aXS:t
v=C.a([C.b2(u,t,t,new B.bdn(w,v,new B.e9Y(r),new B.e9Z(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.an(t,C.e1(C.c3(w,new B.ea_(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bAF())
return C.aH(A.c5,C.jA(new C.am(A.W,t,A.b_,A.q,v,t),A.q,t),A.z,!1,t,t,t,t,t,t,t,t,new B.ea0(r),t,r.gc8g(),t,new B.ea1(r),new B.ea2(r),new B.ea3(r),t,t,t,t,t,t,t,t,t,t,new B.ea4(r),t,t,t,!1,A.ad)},
$S:33}
B.e9X.prototype={
$0(){return this.a.a9f(this.b)},
$S:0}
B.ea4.prototype={
$1(d){return this.a.cpW(d.b)},
$S:51}
B.ea2.prototype={
$1(d){return this.a.c8h(d.b)},
$S:39}
B.ea3.prototype={
$1(d){return this.a.c8i(d.b)},
$S:18}
B.ea1.prototype={
$1(d){return this.a.aX0()},
$S:35}
B.ea0.prototype={
$1(d){return this.a.a9V(d.b)},
$S:297}
B.e9Y.prototype={
$0(){return this.a.z},
$S:557}
B.e9Z.prototype={
$0(){return this.a.Q},
$S:663}
B.ea_.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bET()
if(p.length===0)return A.bF
w=A.x.j(0.55)
v=C.m(14)
u=C.H(A.bG,A.r,1)
t=C.a([D.eYN,A.d6],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.K)(p),++r)t.push(new C.w(p[r],q,D.eK4,q,q,q,q,A.a2,q,2,q,q))
return C.p(q,C.v(t,A.F,q,A.e,A.Q,0,A.p),A.h,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h8,q,q,q)},
$S:57}
B.e9z.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.m(12),t=C.H(e.j(0.6),A.r,1),s=x.p
return new C.C(A.e0,C.B(C.a([C.p(w,C.V(d,e,w,w,w,21),A.h,w,w,new C.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bd,C.D(C.v(C.a([C.d(f,w,w,w,w,w,w,R.BY,w,w,w),A.bA,C.d(g,w,w,w,w,w,w,D.aKF,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1807}
B.e9T.prototype={
$0(){var w=this.a.c
w.toString
return C.a8(w,!1).nh()},
$S:0}
B.e9U.prototype={
$0(){var w=this.a
return w.n(new B.e9S(w))},
$S:0}
B.e9S.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e9V.prototype={
$0(){var w=this.a
return w.n(new B.e9R(w))},
$S:0}
B.e9R.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
B.e9W.prototype={
$0(){var w=this.a
return w.n(new B.e9Q(w))},
$S:0}
B.e9Q.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e9P.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.ma.gdH(D.ma),w=w.gah(w);w.C();){v=w.gT(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.K)(p),++r)u.push(s.cl0(p[r]))
return new C.C(F.acj,C.v(C.a([new C.C(P.adW,w,q),C.B(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+50}
B.e9O.prototype={
$0(){return this.a.bZM(this.b)},
$S:0}
B.d9v.prototype={
$0(){var w=this,v=null,u=C.io(v,v,v,v,C.dl(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.cm,v,A.en,A.cj)
u.fe()
return u},
$S:328}
B.ejU.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.ak(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.u(s.a+q*n,s.b+r*n)
t.b=new C.u(q*v,r*v)}A.d.bm(o,new B.ejS(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.n(new B.ejT())},
$S:8}
B.ejS.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+51}
B.ejT.prototype={
$0(){},
$S:0}
B.ejv.prototype={
$0(){},
$S:0}
B.eju.prototype={
$0(){},
$S:0}
B.ejE.prototype={
$0(){return B.qk(this.b,this.a.d,"spark-painter")},
$S:0}
B.ejG.prototype={
$1(d){return this.a.aUo(0,d.b)},
$S:39}
B.ejK.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gaj(w).aD(0,u).gcj()>2.5}else w=!1
if(w)t.a.push(u)
v.aNQ(u)
v.c1L(u)
return null},
$S:18}
B.ejF.prototype={
$1(d){return this.a.aUn()},
$S:35}
B.ejL.prototype={
$1(d){return this.a.aUo(0,d.b)},
$S:23}
B.ejM.prototype={
$1(d){return this.a.aUn()},
$S:51}
B.ejN.prototype={
$0(){var w=this.a
return w.n(new B.ejD(w,this.b))},
$S:0}
B.ejD.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ejO.prototype={
$0(){var w=this.a
return w.n(new B.ejC(w))},
$S:0}
B.ejC.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.ejP.prototype={
$0(){var w=this.a
return w.n(new B.ejB(w,this.b))},
$S:0}
B.ejB.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ejQ.prototype={
$1(d){var w=this.a
return w.n(new B.ejA(w,d))},
$S:6}
B.ejA.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.ejR.prototype={
$0(){var w=this.a
return w.n(new B.ejz(w))},
$S:0}
B.ejz.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.ejH.prototype={
$0(){var w=this.a
return w.n(new B.ejy(w))},
$S:0}
B.ejy.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.ejI.prototype={
$0(){var w=this.a
return w.n(new B.ejx(w))},
$S:0}
B.ejx.prototype={
$0(){var w=this.a
A.d.a7(w.e)
A.d.a7(w.f)},
$S:0}
B.ejJ.prototype={
$0(){var w=this.a
return w.n(new B.ejw(w,this.b))},
$S:0}
B.ejw.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.eqt.prototype={
$0(){return B.qk(this.b,this.a.d,"title")},
$S:0}
B.equ.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gHp().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.bU4(v[t],t,s,q,u))
return new C.C(A.fB,C.c8(A.fG,w,A.r1,0,0),null)},
$S:748}
B.eqv.prototype={
$1(d){return this.a.n(new B.eqs())},
$S:2}
B.eqs.prototype={
$0(){},
$S:0}
B.eqw.prototype={
$0(){var w=this.a
w.n(new B.eqr(w,this.b))
w=w.gHp()
w.ie(0,0)
w.cF(0)},
$S:0}
B.eqr.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eqx.prototype={
$0(){var w=this.a
return w.n(new B.eqq(w,this.b))},
$S:0}
B.eqq.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eqy.prototype={
$0(){var w=this.a
return w.n(new B.eqp(w))},
$S:0}
B.eqp.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eqz.prototype={
$0(){var w=this.a
return w.n(new B.eqo(w,this.b))},
$S:0}
B.eqo.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eqA.prototype={
$0(){var w=this.a.gHp()
w.ie(0,0)
w.cF(0)},
$S:0}
B.eqB.prototype={
$1(d){var w=this.a
return w.n(new B.eqn(w,d))},
$S:6}
B.eqn.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.e6B.prototype={
$1(d){return d.a.aD(0,this.a).gcj()<16},
$S:z+13}
B.e6C.prototype={
$1(d){var w=this.b
return d.a.aD(0,w).gcj()<16||d.a.aD(0,w).gcj()>this.a.r.gajF()*2.2},
$S:z+13}
B.e6p.prototype={
$0(){return B.qk(this.b,this.a.d,"orbits")},
$S:0}
B.e6q.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.ar(e.b,e.d)
q.r=p
w=q.gab4()
v=q.w
u=q.as
t=q.at
s=u==null?A.a_r:q.cbO(u,q.gaRY())
return new C.en(C.aH(A.c5,C.b2(r,r,r,new B.bhG(q.e,w,v,u,t,s,r),p),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,new B.e6m(q),new B.e6n(q),new B.e6o(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.ad),q.d)},
$S:194}
B.e6n.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:39}
B.e6o.prototype={
$1(d){return this.a.at=d.b},
$S:18}
B.e6m.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aD(0,w).gcj()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new B.YR(u,v.gaRY(),v.Q,v.aYs(),C.a([],x.g)))
C.jE()
if(v.ax)B.dI(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:35}
B.e6r.prototype={
$1(d){var w=this.a
return w.n(new B.e6l(w,d))},
$S:6}
B.e6l.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.e6t.prototype={
$1(d){var w=this.a
return w.n(new B.e6k(w,d))},
$S:6}
B.e6k.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.e6u.prototype={
$1(d){var w=this.a
return w.n(new B.e6j(w,d))},
$S:6}
B.e6j.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.e6v.prototype={
$0(){var w=this.a
return w.n(new B.e6i(w))},
$S:0}
B.e6i.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.e6w.prototype={
$0(){var w=this.a
return w.n(new B.e6h(w))},
$S:0}
B.e6h.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.e6x.prototype={
$0(){var w=this.a
return w.n(new B.e6g(w))},
$S:0}
B.e6g.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.e6y.prototype={
$0(){var w=this.a
return w.n(w.gcne())},
$S:0}
B.e6z.prototype={
$0(){var w=this.a
return w.n(w.gbAT())},
$S:0}
B.e6A.prototype={
$0(){var w=this.a
return w.n(new B.e6f(w))},
$S:0}
B.e6f.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.ae()
s=w.r
w.aoe(50+t*(Math.min(s.a,s.b)/2-70),v.ae()*3.141592653589793*2,0.7+v.ae()*0.5,v.he())}},
$S:0}
B.e6s.prototype={
$0(){var w=this.a
return w.n(A.d.gqN(w.e))},
$S:0}
B.epV.prototype={
$1(d){return this.a.fE$-d.b>6000},
$S:662}
B.epW.prototype={
$1(d){var w=this.a.e
return new C.a4(w,new B.epU(d),C.U(w).k("a4<1>")).gJ(0)>=3},
$S:662}
B.epU.prototype={
$1(d){return d.a.aD(0,this.a.a).gcj()<14},
$S:z+53}
B.epK.prototype={
$0(){return B.qk(this.b,this.a.d,"swarm")},
$S:0}
B.epL.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.w=u
return new C.en(C.aH(A.c5,C.b2(w,w,w,new B.bp0(v.e,v.f,v.ax,v.at,v.ay,v.fE$,w),u),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new B.epH(v),new B.epI(v),new B.epJ(v),w,w,w,w,w,w,w,w,new B.epz(v),new B.epA(v),new B.epB(v),w,w,w,!1,A.ad),v.d)},
$S:194}
B.epI.prototype={
$1(d){return this.a.ay=d.b},
$S:39}
B.epJ.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
B.epH.prototype={
$1(d){return this.a.ay=null},
$S:35}
B.epA.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.A(v,w.fE$))
if(w.ch)B.dI(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)B.l1("flute",7,500,0.3)},
$S:23}
B.epB.prototype={
$1(d){return this.a.ay=null},
$S:51}
B.epz.prototype={
$0(){return this.a.ay=null},
$S:0}
B.epM.prototype={
$0(){var w=this.a
return w.n(new B.epG(w,this.b))},
$S:0}
B.epG.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
B.epN.prototype={
$0(){var w=this.a
return w.n(new B.epF(w,this.b))},
$S:0}
B.epF.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a7(w.e)},
$S:0}
B.epO.prototype={
$0(){var w=this.a
return w.n(new B.epE(w))},
$S:0}
B.epE.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.epP.prototype={
$1(d){var w=this.a
return w.n(new B.epD(w,d))},
$S:6}
B.epD.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.epQ.prototype={
$1(d){var w=this.a
return w.n(new B.epC(w,d))},
$S:6}
B.epC.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.epR.prototype={
$1(d){var w=this.a
return w.n(new B.epy(w,d))},
$S:6}
B.epy.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.epS.prototype={
$1(d){var w=this.a
return w.n(new B.epx(w,d))},
$S:6}
B.epx.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.epT.prototype={
$1(d){var w=this.a
return w.n(new B.epw(w,d))},
$S:6}
B.epw.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dyX.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new B.dyW(w,d))},
$S:133}
B.dyW.prototype={
$0(){var w=this.a,v=this.b,u=J.a7(v),t=C.aR(u.h(v,"unlocked"))
t=t==null?null:A.k.N(t)
w.w=A.o.D(t==null?1:t,1,100)
t=C.aR(u.h(v,"level"))
t=t==null?null:A.k.N(t)
if(t==null)t=w.w
w.r=A.o.D(t,1,w.w)
t=C.T(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.jk(v==null?A.v0:v)
v=v.gah(v)
while(v.C()){u=v.gT(v)
t.m(0,C.t(u.a),A.k.N(C.fc(u.b)))}w.x=t
w.Q=!0
A.d.a7(w.d)},
$S:0}
B.dyY.prototype={
$1(d){return d.d!=null},
$S:z+14}
B.dyZ.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Xp(w)>0},
$S:z+14}
B.dyN.prototype={
$0(){var w=this.a
w.r=A.o.D(this.b,1,w.w)
w.aww()},
$S:0}
B.dyQ.prototype={
$1(d){var w=null,v=C.m(22),u=this.a
return C.ew(w,D.aaz,new C.C(A.bB,new C.a5(340,480,C.v(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.ja,w,w,w),A.T,C.D(C.ih(!0,w,w,A.z,K.aIF,new B.dyP(u,d),100,w,w,A.ak,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.cZ,w,new C.b6(v,A.X),w)},
$S:46}
B.dyP.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new B.dyO(this.b,r):s
v=C.m(12)
if(p)q=r===q.r?A.bU:A.c.j(0.1)
else q=A.c.j(0.03)
u=C.H(p?A.ba:A.dw,A.r,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.j1
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(A.a.aM("\u2605",n)+A.a.aM("\u2606",3-n),s,s,s,s,s,s,D.eNJ,s,s,s))
return C.aH(s,C.p(s,C.v(o,A.m,s,A.b6,A.j,0,A.p),A.h,s,s,new C.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.ad)},
$S:75}
B.dyO.prototype={
$0(){C.a8(this.a,!1).M(this.b)
return null},
$S:0}
B.dyU.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gaab()
o=C.b2(q,q,q,new B.b7i(p.d,w,v,p.gbZT(),q),o)
v=p.bRO("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gGS()
t=p.as>=p.gGS()?A.bh:A.c
s=this.b
r=x.p
s=C.a([o,C.an(q,C.B(C.a([v,p.arI("GOAL",""+w+" / "+u,t),p.arI("STARS",A.a.aM("\u2605",s)+A.a.aM("\u2606",3-s),A.aL)],r),A.m,q,A.hF,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lM)
if(p.Q&&!p.y)s.push(D.aOl)
if(p.z){o=C.m(24)
w=this.c
v=C.H((w?A.bh:A.cF).j(0.6),A.r,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?A.bh:A.cF,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.ar,C.d("You blasted "+p.as+" dots. The goal was "+p.gGS()+".",q,q,q,q,q,q,A.hs,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(A.a.aM("\u2605",t==null?1:t),q,q,q,q,q,q,D.eEx,q,q,q))}u.push(A.ay)
t=C.a([new B.ff(A.m4,"Try again",new B.dyR(p),A.c,q)],r)
if(w&&p.r<100)t.push(new B.ff(A.jl,"Next level",new B.dyS(p),A.bh,q))
u.push(C.B(t,A.m,q,A.e,A.Q,0,q,q))
s.push(C.au(C.p(q,C.v(u,A.m,q,A.e,A.Q,0,A.p),A.h,q,q,new C.o(D.Tn,q,v,o,q,q,A.n),q,q,q,q,A.a8,q,q,q),q,q,q))}return C.aH(A.c5,new C.am(A.W,q,A.b_,A.q,s,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dyT(p),q,q,q,q,!1,A.ad)},
$S:33}
B.dyT.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fE$
B.dI(180,"",200,1,0.4,"sine")
C.j8()},
$S:23}
B.dyR.prototype={
$0(){var w=this.a
return w.n(w.gb04())},
$S:0}
B.dyS.prototype={
$0(){var w=this.a
return w.aUp(w.r+1)},
$S:0}
B.dyV.prototype={
$0(){var w=this.a
return w.n(w.gb04())},
$S:0}
B.cFB.prototype={
$3(d,e,f){var w,v
if(e<=0)return
w=this.a
$.Y()
v=C.L()
v.r=f.j(0.18).gq(0)
w.af(d,e,v)
v=C.L()
v.b=A.ae
v.c=3
v.r=f.j(0.9).gq(0)
w.af(d,e,v)
v=C.L()
v.r=f.j(0.25).gq(0)
v.z=A.lA
w.af(d,e*0.5,v)},
$S:657}
B.e24.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcFF()?this.a.cjt(w,v,d.b):w.aD(0,v).gcj())<24},
$S:z+56}
B.e2t.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+57}
B.e2i.prototype={
$0(){var w=this.a
return w.n(new B.e29(w))},
$S:0}
B.e29.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.e2j.prototype={
$0(){return B.qk(this.b,this.a.d,"marble-music")},
$S:0}
B.e2k.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.w=u
return new C.en(C.aH(A.c5,C.b2(w,w,w,new B.beh(v.e,v.f,v.at,v.ax,v.fE$,w),u),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new B.e2f(v),new B.e2g(v),new B.e2h(v),w,w,w,w,w,w,w,w,w,w,new B.e28(v),w,w,w,!1,A.ad),v.d)},
$S:194}
B.e28.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.Y7(w)
u.e.push(new B.Eu(w,w,v,u.aLA(v)))
if(u.ay)B.l1(u.z,v+12,700,0.5)}if(u.x==="erase")u.aO5(d.b)},
$S:51}
B.e2g.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:39}
B.e2h.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aO5(d.b)},
$S:18}
B.e2f.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aD(0,w).gcj()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.Y7(t.ao(0,w).ez(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new B.Eu(w,t,v,u.aLA(v)))
if(u.ay)B.l1(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:35}
B.e2l.prototype={
$0(){var w=this.a
return w.n(new B.e2e(w,this.b))},
$S:0}
B.e2e.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.e2m.prototype={
$0(){var w=this.a
return w.n(new B.e2d(w,this.b))},
$S:0}
B.e2d.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.e2n.prototype={
$0(){var w=this.a
return w.n(new B.e2c(w,this.b))},
$S:0}
B.e2c.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.e2o.prototype={
$1(d){var w=this.a
return w.n(new B.e2b(w,d))},
$S:6}
B.e2b.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.e2p.prototype={
$0(){var w=this.a
return w.n(new B.e2a(w))},
$S:0}
B.e2a.prototype={
$0(){return this.a.av4("stairs")},
$S:0}
B.e2q.prototype={
$0(){var w=this.a
return w.n(new B.e27(w))},
$S:0}
B.e27.prototype={
$0(){return this.a.av4("pinball")},
$S:0}
B.e2r.prototype={
$0(){var w=this.a
return w.n(new B.e26(w))},
$S:0}
B.e26.prototype={
$0(){return this.a.av4("random")},
$S:0}
B.e2s.prototype={
$0(){var w=this.a
return w.n(new B.e25(w))},
$S:0}
B.e25.prototype={
$0(){var w=this.a
A.d.a7(w.e)
A.d.a7(w.f)},
$S:0}
B.e5Z.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
B.e6_.prototype={
$0(){var w=this.b,v=new B.abi(this.a.a,this.c)
v.c=w.fE$
return w.e.push(v)},
$S:0}
B.e66.prototype={
$0(){var w=this.a
return w.n(new B.e65(w))},
$S:0}
B.e65.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.e67.prototype={
$0(){return B.qk(this.b,this.a.d,"orbit-sequencer")},
$S:0}
B.e68.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.ar(e.b,e.d)
if(!u.f){u.f=!0
u.aMV()}w=u.w
return new C.en(C.aH(A.c5,C.b2(v,v,v,new B.bhH(u.e,u.gaUr(),6,u.gcdP(),u.gcjU(),u.fE$,v),w),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.e64(u),v,v,v,!1,A.ad),u.d)},
$S:194}
B.e64.prototype={
$1(d){return this.a.bZV(d.b)},
$S:51}
B.e69.prototype={
$1(d){var w=this.a
return w.n(new B.e63(w,d))},
$S:6}
B.e63.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.e6a.prototype={
$0(){var w=this.a
return w.n(new B.e62(w,this.b))},
$S:0}
B.e62.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.e6b.prototype={
$0(){var w=this.a
return w.n(new B.e61(w,this.b))},
$S:0}
B.e61.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.e6c.prototype={
$0(){var w=this.a
return w.n(w.gbEP())},
$S:0}
B.e6d.prototype={
$0(){var w=this.a
return w.n(new B.e60(w))},
$S:0}
B.e60.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a7(u)
for(v=v.r,w=0;w<9;++w)u.push(new B.abi(v.aB(6),v.ae()))},
$S:0}
B.e6e.prototype={
$0(){var w=this.a
return w.n(A.d.gqN(w.e))},
$S:0}
B.feu.prototype={
$2(d,e){var w=A.o.ak(d,100),v=A.o.G(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:138}
B.e5t.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new B.e5s(w,d))},
$S:133}
B.e5s.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cR:v)
while(v.C())w.push(A.k.N(C.fc(v.gT(v))))
return this.a.x.v(0,w)},
$S:0}
B.e5f.prototype={
$2(d,e){var w=this.b
if(A.o.ak(d,100)===w||A.o.G(d,100)===w)this.a.a+=e},
$S:138}
B.e59.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new B.b6b(w.b,new C.u(w.c*(0.2+0.6*v.ae()),w.e*(0.2+0.6*v.ae()))))},
$S:0}
B.e5a.prototype={
$0(){var w=this.a
A.d.a7(w.e)
w.f.a7(0)
w.r=null},
$S:0}
B.e5e.prototype={
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
p=D.v_.h(0,v[u].a).a
o=w.agw(u)
v=D.v_.h(0,v[t].a).a
n=w.agw(t)
if(q<=p-o+r&&q<=v-n+r){m.m(0,s,q)
B.vg("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaUx()&&w.x.K(0,w.d)){B.vg("zap",12,300,0.5)
m=w.x
m=C.z(m,C.a2(m).k("cl.E"))
B.vd("molecule_maker",C.E(["done",m],x.N,x.z))}}}},
$S:0}
B.e5d.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a2(t).k("cu<1>"),r=this.b,q=s.k("a4<G.E>"),p=C.z(new C.a4(new C.cu(t,s),new B.e5b(r),q),q.k("G.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.K)(p),++w)t.W(0,p[w])
s=x.S
v=C.T(s,s)
t.bG(0,new B.e5c(r,v))
t.a7(0)
t.v(0,v)
A.d.cu(u.e,r)
u.r=null},
$S:0}
B.e5b.prototype={
$1(d){var w=this.a
return A.o.ak(d,100)===w||A.o.G(d,100)===w},
$S:58}
B.e5c.prototype={
$2(d,e){var w=A.o.ak(d,100),v=A.o.G(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.m(0,w*100+v,e)},
$S:138}
B.e5n.prototype={
$1(d){return""+d.b+" "+D.v_.h(0,d.a).c.toLowerCase()},
$S:434}
B.e5o.prototype={
$0(){var w=this.a
return w.n(new B.e5m(w))},
$S:0}
B.e5m.prototype={
$0(){var w=this.a;++w.d
w.atz(0)},
$S:0}
B.e5p.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.ar(e.b,e.d)
return C.aH(A.c5,C.b2(w,w,w,new B.beY(v.e,v.f,v.r,v.gcu8(),w),A.f9),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new B.e5i(v),new B.e5j(v),new B.e5k(v,e),w,w,w,w,w,w,w,w,w,w,new B.e5l(v),w,w,w,!1,A.ad)},
$S:33}
B.e5l.prototype={
$1(d){return this.a.c_h(d.b)},
$S:51}
B.e5j.prototype={
$1(d){var w=this.a
return w.w=w.aUy(d.b)},
$S:39}
B.e5k.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.n(new B.e5g(w,v,d,this.b))},
$S:18}
B.e5g.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.u(A.k.D(t.b.a+s.a,26,r.b-26),A.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
B.e5i.prototype={
$1(d){return this.a.w=null},
$S:35}
B.e5q.prototype={
$0(){var w=this.a
return w.n(new B.e5h(w,this.b))},
$S:0}
B.e5h.prototype={
$0(){var w=this.a
w.d=this.b
w.atz(0)},
$S:0}
B.e5r.prototype={
$0(){return this.a.c_b(0,this.b.a)},
$S:0}
B.dhC.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.ak(d,100)].b,i=k[A.o.G(d,100)].b,h=i.aD(0,j),g=new C.u(-h.b,h.a).ez(0,Math.max(h.gcj(),1))
for(k=(e-1)/2,w=g.a,v=g.b,u=j.a,t=j.b,s=i.a,r=i.b,q=this.b.a,p=0;p<e;++p){o=(p-k)*8
n=w*o
o=v*o
$.Y()
m=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
m.r=A.af.gq(0)
m.c=4
m.d=A.bN
l=m.I()
q.drawLine.apply(q,[u+n,t+o,s+n,r+o,l])
l.delete()}},
$S:138}
B.dGR.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new B.dGQ(w,d))},
$S:133}
B.dGQ.prototype={
$0(){var w=C.aR(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
B.dGG.prototype={
$0(){var w,v,u=J.e_(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.aqk[w.aB(4)]
return A.d.fN(u)},
$S:22}
B.dGF.prototype={
$1(d){return B.fHy(d)==="*"},
$S:3}
B.dGH.prototype={
$1(d){return d!==this.a},
$S:3}
B.dGE.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
B.vd("dna_lab",C.E(["best",r],x.N,x.z))}r=s.d
B.vg("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga6N()[r]+" codes for "+C.t(D.AZ.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.aXv()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.K)(w),++u)r.push(D.AZ.h(0,w[u]))
r="Protein built: "+A.d.aF(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
B.vg("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
B.dGP.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dw:e,u=C.m(8),t=f?C.H(A.ba,A.r,1):w
return C.p(A.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?A.ba:A.x,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,w,w,new C.o(v,w,t,u,w,w,A.n),w,40,w,A.mD,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1811}
B.dGK.prototype={
$1(d){var w=D.d4r.h(0,d)
return w==null?A.c:w},
$S:653}
B.dGL.prototype={
$0(){var w=this.a
return w.n(new B.dGJ(w,this.b))},
$S:0}
B.dGJ.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.at_()},
$S:0}
B.dGM.prototype={
$0(){var w=this.a
return w.n(new B.dGI(w))},
$S:0}
B.dGI.prototype={
$0(){var w=this.a;++w.e
w.at_()},
$S:0}
B.dGN.prototype={
$0(){return this.a.aUw(this.b)},
$S:0}
B.dGO.prototype={
$0(){return this.a.aUw(this.b)},
$S:0}
B.dJG.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new B.dJF(w,d))},
$S:133}
B.dJF.prototype={
$0(){var w=C.aR(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
B.dJt.prototype={
$0(){},
$S:0}
B.dJs.prototype={
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
B.dJu.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
A.d.a7(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
B.dJy.prototype={
$1(d){var w=this.a
return w.n(new B.dJx(w,d))},
$S:6}
B.dJx.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dJz.prototype={
$1(d){var w=this.a
return w.n(new B.dJw(w,d))},
$S:6}
B.dJw.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dJA.prototype={
$1(d){var w=this.a
return w.n(new B.dJv(w,d))},
$S:6}
B.dJv.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.dJB.prototype={
$0(){return this.a.a7X("drought")},
$S:0}
B.dJC.prototype={
$0(){return this.a.a7X("disease")},
$S:0}
B.dJD.prototype={
$0(){return this.a.a7X("foxes")},
$S:0}
B.dJE.prototype={
$0(){return this.a.a7X("rabbits")},
$S:0}
B.cZ5.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.eX()
k.dQ(A.o.N(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.ae()
p=k.ae()
o=(r&1)===0?1:-1
o=A.k.G(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.ae()
p=Math.sin(s+r*2)
n=new C.l3(new C.es(e,l,l,A.cW,l,l,l,l,l,l,new C.F(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a5,A.cm,new C.k4(1),l,l,l,l,A.cj,l)
n.fe()
n.a5(w,new C.u(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1813}
B.cZ7.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this.a.c
if(l.length<2)return
w=$.Y()
v=C.a([],x.v)
u=new C.aQ(w.r,A.aq,null,null,v)
for(w=this.b,t=w.a,s=w.c-t,r=w.d,w=r-w.b,q=0;q<l.length;++q){p=t+s*q/159
o=r-w*A.k.D(l[q][d]/e,0,1)
if(q===0){n=new C.b5(p,o)
v.push(n)
m=u.f
if(m!=null)n.by(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}else{n=new C.ao(p,o)
v.push(n)
m=u.f
if(m!=null)n.by(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}}$.Y()
l=C.L()
l.b=A.ae
l.c=2.6
l.r=f.gq(0)
l.e=A.fs
this.c.aO(u,l)},
$S:1814}
B.cZ6.prototype={
$3(d,e,f){var w=null,v=C.io(w,w,w,w,C.dl(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a5,A.cm,w,A.en,A.cj)
v.fe()
v.a5(this.a,new C.u(f,this.b.b+2))},
$S:1815}
B.bCe.prototype={
$2(d,e){return d+e.a*e.b},
$S:1816}
B.fal.prototype={
$2(d,e){return e.a-d.a},
$S:1817}
B.dv7.prototype={
$2(d,e){return d+e},
$S:74}
B.dvk.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.n(new B.dvj(v,A.k.D((v.gv5()-w[v.e].gu8())/Math.max(w[v.e].gu8(),8),-1,1)*0.32,u))},
$S:8}
B.dvj.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
B.dvl.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new B.dvi(w,d))},
$S:133}
B.dvi.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cR:v)
while(v.C())w.push(A.k.N(C.fc(v.gT(v))))
return this.a.r.v(0,w)},
$S:0}
B.dv8.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.G(w[v]+1,6)
w[v]=u
return u},
$S:0}
B.dvd.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1818}
B.dve.prototype={
$0(){var w=this.a
return w.n(new B.dvc(w))},
$S:0}
B.dvc.prototype={
$0(){var w=this.a;++w.e
A.d.hi(w.f,0,5,0)},
$S:0}
B.dvf.prototype={
$2(d,e){var w=null,v=this.a
return C.aH(A.c5,C.b2(w,w,w,new B.b6n(v.w,this.b.a,v.f,v.gv5()===v.d[v.e].gu8(),w),A.f9),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dvb(v,e),w,w,w,!1,A.ad)},
$S:33}
B.dvb.prototype={
$1(d){var w=this.b.b,v=A.k.U((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cq8(v-1)},
$S:51}
B.dvg.prototype={
$0(){var w=this.a
return w.n(new B.dva(w,this.b))},
$S:0}
B.dva.prototype={
$0(){var w=this.a
w.e=this.b
A.d.hi(w.f,0,5,0)},
$S:0}
B.dvh.prototype={
$0(){var w=this.a
return w.n(new B.dv9(w))},
$S:0}
B.dv9.prototype={
$0(){return A.d.hi(this.a.f,0,5,0)},
$S:0}
B.cy8.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.bF(C.cN(new C.u(d,s),20,w),A.tC)
$.Y()
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=f.gq(0)
p=q.I()
u.drawRRect(C.f7(r),p)
p.delete()
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.2
q.r=A.dx.gq(0)
p=q.I()
u.drawRRect(C.f7(r),p)
p.delete()
B.f9p(v,"1",new C.u(d,s),A.bg,11)}},
$S:1819}
B.dNA.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.n(new B.dNz(w,v))},
$S:8}
B.dNz.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
B.dNB.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new B.dNy(w,d))},
$S:133}
B.dNy.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cR:v)
while(v.C())w.push(A.k.N(C.fc(v.gT(v))))
return this.a.w.v(0,w)},
$S:0}
B.dNq.prototype={
$0(){var w=A.k.U(this.c)
this.a.d[this.b]=w
return w},
$S:0}
B.dNu.prototype={
$0(){var w=this.a
return w.n(new B.dNt(w))},
$S:0}
B.dNt.prototype={
$0(){return this.a.r++},
$S:0}
B.dNv.prototype={
$0(){var w=this.a
return w.n(new B.dNs(w,this.b))},
$S:0}
B.dNs.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dNw.prototype={
$1(d){var w=this.a
return w.n(new B.dNr(w,d))},
$S:6}
B.dNr.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.dNx.prototype={
$1(d){return this.a.c_i(this.b,d)},
$S:6}
B.d53.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bJS(d,e,f,g),m=this.b
$.Y()
w=C.L()
v=C.aq(h,A.c,i?0.1:0.35)
v.toString
u=C.aq(h,A.x,0.5)
u.toString
w.sap(new C.bR(A.A,0.5,A.w,null,0,C.a([v,h,u],x.O),null,null).au(0,C.bV(d,e+6)))
m.aO(n,w)
w=C.L()
w.b=A.ae
w.c=1.5
w.r=A.aT.gq(0)
m.aO(n,w)
w=C.L()
w.r=A.x.j(0.28).gq(0)
m.af(d,e*0.55,w)
for(w=d.a,v=d.b,u=m.a,t=0;t<4;++t){s=g+t*3.141592653589793/2
r=Math.cos(s)
q=Math.sin(s)
p=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
p.r=A.hQ.gq(0)
p.c=3
o=p.I()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.L()
w.r=A.aJ.gq(0)
m.af(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1820}
B.d54.prototype={
$3(d,e,f){var w=this,v=w.b
return B.f9p(w.a,d,new C.u(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1821}
B.dzj.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new B.dzi(w,d))},
$S:133}
B.dzi.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cR:v)
while(v.C())w.push(A.k.N(C.fc(v.gT(v))))
return this.a.Q.v(0,w)},
$S:0}
B.dz1.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jw(90-(w-65)):d},
$S:14}
B.dza.prototype={
$1(d){return this.a.n(new B.dz9())},
$S:2}
B.dz9.prototype={
$0(){},
$S:0}
B.dzb.prototype={
$1(d){return this.a.n(new B.dz8())},
$S:2}
B.dz8.prototype={
$0(){},
$S:0}
B.dzc.prototype={
$0(){var w=this.a
return w.n(new B.dz7(w))},
$S:0}
B.dz7.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aTs()},
$S:0}
B.dzd.prototype={
$0(){var w=this.a
return w.n(new B.dz6(w))},
$S:0}
B.dz6.prototype={
$0(){return this.a.f=0},
$S:0}
B.dze.prototype={
$0(){var w=this.a
return w.n(new B.dz5(w))},
$S:0}
B.dz5.prototype={
$0(){return this.a.f=1},
$S:0}
B.dzf.prototype={
$0(){var w=this.a
return w.n(new B.dz4(w,this.b))},
$S:0}
B.dz4.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dzg.prototype={
$1(d){var w=this.a
return w.n(new B.dz3(w,d))},
$S:6}
B.dz3.prototype={
$0(){return this.a.w=A.k.U(this.b)},
$S:0}
B.dzh.prototype={
$1(d){var w=this.a
w.n(new B.dz2(w,d))
if(w.ga7e()&&w.Q.K(0,w.x)){B.vg("zap",9,220,0.45)
w=w.Q
w=C.z(w,C.a2(w).k("cl.E"))
B.vd("cipher_lab",C.E(["done",w],x.N,x.z))}},
$S:6}
B.dz2.prototype={
$0(){return this.a.z=A.k.U(this.b)},
$S:0}
B.bHO.prototype={
$1(d){return d.r<=0},
$S:z+61}
B.bHZ.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
B.bHU.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
B.bI_.prototype={
$1(d){return this.a.a2H(d)&&!d.x},
$S:z+1}
B.bI0.prototype={
$2(d,e){return Math.max(d,this.a.ax_(e))},
$S:z+6}
B.bI2.prototype={
$2(d,e){var w=this.a
return w.ce(0,d.a+"."+e,new B.bI3(w))},
$S:z+5}
B.bI3.prototype={
$0(){return this.a.a},
$S:110}
B.bI1.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:85}
B.bI4.prototype={
$2(d,e){var w=this.a
return w.ce(0,this.b.$1(this.c.$2(d,e)),new B.bI5(w))},
$S:z+5}
B.bI5.prototype={
$0(){return this.a.a},
$S:110}
B.bHQ.prototype={
$2(d,e){var w=this.a
return w.ce(0,d.a+"."+e,new B.bHR(w))},
$S:z+5}
B.bHR.prototype={
$0(){return this.a.a},
$S:110}
B.bHP.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:85}
B.bHS.prototype={
$2(d,e){var w=this.a
return w.ce(0,this.b.$1(this.c.$2(d,e)),new B.bHT(w))},
$S:z+5}
B.bHT.prototype={
$0(){return this.a.a},
$S:110}
B.bHN.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.db)>0.5*Math.abs(w.db)},
$S:z+1}
B.bI6.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
B.bHV.prototype={
$1(d){return d!==this.b&&this.a.aCT(d)&&Math.abs(d.db)>0.0005},
$S:z+1}
B.bHY.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bHX.prototype={
$1(d){return d.dx>=this.a&&!d.x},
$S:z+1}
B.bHW.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bDf.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
B.bDg.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
B.cfG.prototype={
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
$S:185}
B.fpU.prototype={
$1(d){var w
$.Y()
w=C.L()
w.r=d.gq(0)
return w},
$S:1822}
B.fpW.prototype={
$2(d,e){var w
$.Y()
w=C.L()
w.b=A.ae
w.c=e
w.r=d.gq(0)
w.d=A.bN
return w},
$S:1823}
B.fpX.prototype={
$5(d,e,f,g,h){return C.bF(new C.a9(d,e,d+f,e+g),new C.b1(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1824}
B.fpV.prototype={
$3(d,e,f){var w
$.Y()
w=C.L()
w.sap(new C.a3(A.aY,A.b1,A.w,C.a([e,f],x.O),null,null).au(0,d))
return w},
$S:1825}
B.bCV.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bCW.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new B.bCU(w))},
$S:0}
B.bCU.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bCX.prototype={
$0(){return C.a([],x.ey)},
$S:1826}
B.bCY.prototype={
$1(d){return this.a.bv(d).a>1e6},
$S:393}
B.bDc.prototype={
$2(d,e){var w
if(d==="short"){B.dI(1800,"",120,0,0.55,"noise")
B.dI(200,"",160,2.2,0.4,"saw")
C.fW()
w=this.a
if(w.c!=null)w.atA("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="burn"){w=this.a
if(w.c!=null)w.atA("Burnt out! "+e.ay)
B.dI(140,"",320,0,0.6,"noise")
B.dI(900,"",160,1.5,0.35,"square")}},
$S:z+65}
B.bDd.prototype={
$0(){},
$S:0}
B.bCy.prototype={
$0(){},
$S:0}
B.bDe.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
B.bDb.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ar(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aH(A.c5,C.b2(p,p,p,new B.agg(w,v,u,t,s,r==null?A.iP:r,p),n),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,new B.bD5(o),new B.bD6(o),new B.bD7(o),p,p,p,p,p,p,p,p,p,p,new B.bD8(o),p,p,p,!1,A.ad)],q)
if(o.a.c.a.length===0)n.push(D.aXf)
w=o.Q
if(w!=null){v=C.m(14)
u=C.H(A.cQ,A.r,1)
n.push(C.an(p,C.aH(p,C.p(p,C.B(C.a([D.ePW,C.D(C.d(w,p,p,p,p,p,p,D.eIq,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.h,p,p,new C.o(D.b15,p,u,v,p,p,A.n),p,p,p,p,A.qi,p,p,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bD9(o),p,p,p,p,p,p,!1,A.ad),p,p,10,10,8,p))}if(o.e!=null)n.push(C.an(8,o.aUz(C.B(C.a([D.bna,new B.ff(A.Xz,"Cut wire",new B.bDa(o),A.cF,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.an(8,o.c8P(w),p,p,10,10,p,p))}return C.jA(new C.am(A.W,p,A.b_,A.q,n,p),A.q,p)},
$S:436}
B.bD6.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b29(s)
if(r!=null){t.n(new B.bD3(t,r,d))
return}w=t.aXa(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.u(v*u.a,w.d*u.b).aD(0,s)
t.n(new B.bD4(t,w))}},
$S:39}
B.bD3.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
B.bD4.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bD7.prototype={
$1(d){var w=this.a
if(w.f!=null)w.n(new B.bD1(w,d))
else if(w.w!=null)w.n(new B.bD2(w,d.b.ao(0,w.x)))},
$S:18}
B.bD1.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
B.bD2.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
B.bD5.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b29(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.azP(u.a,u.b,v.a,v.b)!=null)B.dI(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.abf()},
$S:35}
B.bD8.prototype={
$1(d){var w=this.a,v=d.b,u=w.aXa(v)
if(u!=null){w.n(new B.bD_(w,u))
v=u.b
if(v==="tv"||v==="phone"||v==="tablet")w.csA(u)
w.a.toString
return}w.n(new B.bD0(w,w.cuW(v)))},
$S:51}
B.bD_.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
B.dI(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
B.dI(200,"",70,0,0.2,"saw")}},
$S:0}
B.bD0.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
B.bD9.prototype={
$0(){var w=this.a
return w.n(new B.bCZ(w))},
$S:0}
B.bCZ.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bDa.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
B.dI(300,"",50,0,0.35,"noise")
w.abf()},
$S:0}
B.bCz.prototype={
$0(){return this.a.bjd(this.b)},
$S:0}
B.bCR.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.B(C.a([C.d(d,w,w,w,w,w,w,D.eDc,w,w,w),C.D(C.md(this.b.d,w,w,g,h,new B.bCT(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1827}
B.bCT.prototype={
$1(d){var w=this.a
w.n(new B.bCS(this.b,d))
w.a.toString},
$S:6}
B.bCS.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bCF.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
B.dI(260,"",70,0,0.35,"noise")
w.abf()},
$S:0}
B.bCG.prototype={
$0(){var w=this.a
return w.n(new B.bCE(w))},
$S:0}
B.bCE.prototype={
$0(){return this.a.d=null},
$S:0}
B.bCH.prototype={
$0(){this.a.n(new B.bCD(this.b,this.c))
B.dI(900,"",40,0,0.3,"noise")},
$S:0}
B.bCD.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bCJ.prototype={
$0(){return this.a.aWu(this.b)},
$S:0}
B.bCK.prototype={
$0(){return this.a.Yz(this.b)},
$S:0}
B.bCL.prototype={
$0(){var w=this.a
w.n(new B.bCC(this.b,this.c))
w.a.toString},
$S:0}
B.bCC.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.bCM.prototype={
$0(){var w=this.a
w.n(new B.bCB(this.b,this.c))
w.a.toString},
$S:0}
B.bCB.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
B.bCN.prototype={
$0(){var w=this.a
w.n(new B.bCA(this.b,this.c))
w.a.toString},
$S:0}
B.bCA.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bCO.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bCP.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bCQ.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bCI.prototype={
$1(d){return this.a.f=d},
$S:6}
B.f0L.prototype={
$1(d){return d.aCx("bulb")},
$S:z+2}
B.f0M.prototype={
$1(d){return d.aja(0,"switch")&&d.aCx("bulb")},
$S:z+2}
B.f0N.prototype={
$1(d){return A.d.ba(d.a,new B.f0y())},
$S:z+2}
B.f0y.prototype={
$1(d){return d.b==="motor"&&d.dx>0.3},
$S:z+1}
B.f0O.prototype={
$1(d){return d.aja(0,"resistor")&&A.d.ba(d.a,new B.f0x())},
$S:z+2}
B.f0x.prototype={
$1(d){return d.b==="led"&&d.dx>0.3&&!d.x},
$S:z+1}
B.f0P.prototype={
$1(d){return!d.aja(0,"battery")&&d.aCx("bulb")},
$S:z+2}
B.f0C.prototype={
$1(d){return A.d.ba(d.a,new B.f0w())},
$S:z+2}
B.f0w.prototype={
$1(d){return d.b==="radio"&&d.dx>0},
$S:z+1}
B.f0D.prototype={
$1(d){return A.d.ba(d.a,new B.f0v())},
$S:z+2}
B.f0v.prototype={
$1(d){return d.b==="tv"&&d.dx>0},
$S:z+1}
B.f0E.prototype={
$1(d){return A.d.ba(d.a,new B.f0u())},
$S:z+2}
B.f0u.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
B.f0F.prototype={
$1(d){var w=d.a
return A.d.ba(w,new B.f0s())&&A.d.ba(w,new B.f0t())&&d.aja(0,"buck")},
$S:z+2}
B.f0s.prototype={
$1(d){return d.b==="tv"&&d.dx>0},
$S:z+1}
B.f0t.prototype={
$1(d){return d.b==="phone"&&d.dx>0},
$S:z+1}
B.f0G.prototype={
$1(d){var w=d.a
return A.d.ba(w,new B.f0q())&&A.d.ba(w,new B.f0r())},
$S:z+2}
B.f0q.prototype={
$1(d){return d.b==="diode"&&d.dx>0},
$S:z+1}
B.f0r.prototype={
$1(d){return d.b==="radio"&&d.dx>0},
$S:z+1}
B.f0H.prototype={
$1(d){return A.d.ba(d.a,new B.f0p())},
$S:z+2}
B.f0p.prototype={
$1(d){return d.b==="heater"&&d.dx>0.5},
$S:z+1}
B.dJO.prototype={
$1(d){var w=this.a.d
return w.aCT(d)&&w.Br(d)},
$S:z+1}
B.dJP.prototype={
$1(d){return d.x},
$S:z+1}
B.dJQ.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
B.dJR.prototype={
$0(){},
$S:0}
B.dJN.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.m(22),o=x.p,n=C.a([D.f4w,A.av,D.eRu,A.T],o)
for(w=this.a,v=0;v<19;++v){u=D.NF[v]
t=A.c.j(0.06)
s=new C.b1(14,14)
r=new C.ay(A.bG,1,A.r,-1)
n.push(C.aH(q,C.p(q,C.v(C.a([new C.w(u.a,q,A.ki,q,q,q,q,q,q,q,q,q),A.bA,new C.w(u.b,q,D.eJ3,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.h,q,q,new C.o(t,q,new C.c1(r,r,r,r),new C.bv(s,s,s,s),q,q,A.n),q,q,q,A.cL,A.bl,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dJM(w,d,u),q,q,q,q,q,q,!1,A.ad))}return C.ew(q,D.aaz,new C.C(A.c3,new C.a5(340,q,C.cL(n,q,q,q,q,A.ak,!0),q),q),q,q,q,q,A.cZ,q,new C.b6(p,A.X),q)},
$S:46}
B.dJM.prototype={
$0(){C.a8(this.b,!1).M(null)
var w=this.a
w.n(new B.dJL(w,this.c))
B.dI(800,"",120,-0.5,0.3,"square")},
$S:0}
B.dJL.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bcC()},
$S:0}
B.dJJ.prototype={
$1(d){return new B.TB(this.a.d,null)},
$S:z+67}
B.dJK.prototype={
$0(){},
$S:0}
B.dJT.prototype={
$0(){return C.a8(this.a,!1).nh()},
$S:0}
B.dJU.prototype={
$0(){return B.h5O(this.a,"ELECTRONICS LAB",this.b,A.aX)},
$S:0}
B.dJV.prototype={
$0(){var w=this.a
return w.n(w.d.gcLp())},
$S:0}
B.dJW.prototype={
$0(){var w=this.a,v=w.d
return w.n(v.gqN(v))},
$S:0}
B.dJX.prototype={
$0(){var w=this.a
return w.n(new B.dJS(w))},
$S:0}
B.dJS.prototype={
$0(){var w=this.a
$.bAa()
return w.f=Math.min(11,w.f+1)},
$S:0}
B.f1B.prototype={
$1(d){var w=this,v=null,u=w.c?A.u:A.a4
u=C.io(v,v,1,v,C.dl(v,v,v,v,v,v,v,v,v,C.l(v,v,w.b,v,v,v,v,v,v,v,v,d,v,v,u,v,v,!0,v,w.d,v,v,v,v,v,v),w.a),A.a5,A.cm,v,A.en,A.cj)
u.fe()
return u},
$S:1828}
B.eYL.prototype={
$4(d,e,f,g){var w=d*3.141592653589793*2-1.5707963267948966,v=this.b
this.a.bE(v,v.ao(0,new C.u(Math.cos(w),Math.sin(w)).aM(0,this.c).aM(0,e)),B.bx1(g,f))},
$S:1829}
B.f5e.prototype={
$3(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=this.a,a0=d.a,a1=d.b
d=this.b
w=0+a0
v=0+a1
u=$.Y()
t=C.L()
t.r=A.c.j(a4).gq(0)
d.ko(new C.a9(0,0,w,v),t)
t=d.a
t.translate(a0/2,a1/2)
d.bV(0,a3)
t.translate(-a0/2,-a1/2)
switch(a2){case 0:s=C.L()
s.sap(D.bI0.au(0,new C.a9(0,0,w,v)))
d.b2(new C.a9(0,0,w,v),s)
u=u.r
s=x.v
v=new C.aQ(u,A.aq,e,e,C.a([],s))
v.E(new C.b5(0,a1))
r=a0*0.25
q=a1*0.35
v.E(new C.ao(r,q))
v.E(new C.ao(a0*0.5,a1*0.7))
p=a0*0.75
o=a1*0.3
v.E(new C.ao(p,o))
v.E(new C.ao(a0,a1))
v.E(new C.bE())
n=C.L()
n.r=A.bt.gq(0)
d.aO(v,n)
n=new C.aQ(u,A.aq,e,e,C.a([],s))
n.E(new C.b5(r,q))
q=a1*0.47
n.E(new C.ao(a0*0.2,q))
n.E(new C.ao(a0*0.3,q))
n.E(new C.bE())
q=C.L()
q.r=A.c.gq(0)
d.aO(n,q)
s=new C.aQ(u,A.aq,e,e,C.a([],s))
s.E(new C.b5(p,o))
o=a1*0.44
s.E(new C.ao(a0*0.69,o))
s.E(new C.ao(a0*0.81,o))
s.E(new C.bE())
o=C.L()
o.r=A.c.gq(0)
d.aO(s,o)
o=a1*0.82
s=C.L()
s.r=A.fx.gq(0)
d.b2(new C.a9(0,o,w,o+a1*0.18),s)
break
case 1:u=C.L()
u.sap(D.bHp.au(0,new C.a9(0,0,w,v)))
d.b2(new C.a9(0,0,w,v),u)
u=C.L()
u.r=A.qa.gq(0)
d.af(new C.u(a0*0.5,a1*0.52),a1*0.14,u)
u=a1*0.55
v=C.L()
v.r=A.jC.gq(0)
d.b2(new C.a9(0,u,w,u+a1*0.3),v)
v=a1*0.85
s=C.L()
s.r=A.bH.gq(0)
d.b2(new C.a9(0,v,w,v+a1*0.15),s)
s=a0*0.82
d.bE(new C.u(a0*0.8,a1*0.9),new C.u(s,u),B.bx1(A.h5,a1*0.02))
for(d=a1*0.012,a2=0;a2<5;++a2){m=-2.6+a2*0.5
w=Math.cos(m)
v=Math.sin(m)
r=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
r.b=A.ae
r.c=d
r.r=A.fb.gq(0)
r.d=A.bN
l=r.I()
t.drawLine.apply(t,[s,u,s+w*a1*0.13,u+v*a1*0.1,l])
l.delete()}break
case 2:u=C.L()
u.sap(D.bGz.au(0,new C.a9(0,0,w,v)))
d.b2(new C.a9(0,0,w,v),u)
k=new C.eX()
k.dQ(5)
for(w=a1*0.04,v=a1*0.03,j=a0*0.1,u=j*0.15,a2=0;a2<8;++a2){i=a1*(0.25+k.ae()*0.4)
h=a0*(0.04+a2*0.12)
s=a1-i
$.Y()
r=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
r.r=A.aF.gq(0)
l=r.I()
t.drawRect(C.c9(new C.a9(h,s,h+j,s+i)),l)
l.delete()
for(r=h+u,s+=w,g=0;g<14;++g)if(k.ae()<0.6){q=r+A.o.G(g,3)*j*0.3
p=s+A.o.ak(g,3)*a1*0.06
$.Y()
o=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
o.r=A.dZ.gq(0)
l=o.I()
t.drawRect(C.c9(new C.a9(q,p,q+u,p+v)),l)
l.delete()}}$.Y()
w=C.L()
w.r=A.bM.gq(0)
d.af(new C.u(a0*0.85,a1*0.2),a1*0.05,w)
break
default:s=C.L()
s.sap(D.bJE.au(0,new C.a9(0,0,w,v)))
d.b2(new C.a9(0,0,w,v),s)
for(d=a1*0.08,w=a1*0.9,v=a1*0.012,s=a1*0.024,r=x.v,u=u.r,a2=0;a2<7;++a2){h=a0*(0.08+a2*0.14)
f=a1*(0.35+0.1*A.o.G(a2,3))
q=h-v
p=f*0.3
o=w-p
n=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
n.r=A.h5.gq(0)
l=n.I()
t.drawRect(C.c9(new C.a9(q,o,q+s,o+p)),l)
l.delete()
p=C.a([],r)
o=new C.aQ(u,A.aq,e,e,p)
p.push(new C.b5(h,w-f))
q=w-f*0.25
p.push(new C.ao(h-d,q))
p.push(new C.ao(h+d,q))
p.push(new C.bE())
q=new C.as(A.Y,A.V,A.a_,A.a0,A.Z)
q.r=C.aq(A.fb,A.ks,a2/7).gq(0)
l=q.I()
q=o.gbL().a.snapshot()
t.drawPath((o.e=new C.cE(q)).a,l)
l.delete()}}t.restore()},
$S:1830}
B.eXC.prototype={
$1(d){var w=A.k.G(d,2)
return w<1?w:2-w},
$S:5}
B.fwe.prototype={
$3(d,e,f){return new B.U_(this.a,null)},
$C:"$3",
$R:3,
$S:z+68}
B.fwf.prototype={
$4(d,e,f,g){var w=x.Y
return new C.cW(e,!1,C.im(A.A,g,null,new C.bd(C.cF(A.co,e,null),new C.bl(0.85,1,w),w.k("bd<bD.T>"))),null)},
$C:"$4",
$R:4,
$S:29}
B.e7_.prototype={
$2(d,e){var w=this.a,v=w.e
return v==null?w.bRE():w.buW(v)},
$S:57}
B.e70.prototype={
$0(){return C.a8(this.a,!1).nh()},
$S:0}
B.e6Y.prototype={
$0(){var w=this.a
return w.n(new B.e6X(w))},
$S:0}
B.e6X.prototype={
$0(){return this.a.e=0},
$S:0}
B.e6Z.prototype={
$0(){var w=this.a
return w.n(new B.e6W(w,this.b))},
$S:0}
B.e6W.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.e6V.prototype={
$0(){var w=this.a
return w.n(new B.e6U(w))},
$S:0}
B.e6U.prototype={
$0(){return this.a.e=null},
$S:0}
B.f9v.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p=this
if(g===0||h<=0)return
w=f*A.k.D(h,0,1)
v=d.ao(0,new C.u(Math.cos(e)*w,-Math.sin(e)*w))
u=p.a
$.Y()
t=C.L()
t.r=A.h5.gq(0)
t.c=g*2.2
t.d=A.bN
u.bE(d,v,t)
if(h>0.95){s=Math.sin(p.b*1.6+g)*0.04
t=f*0.72
r=g-1
q=h*1.6-0.9
p.$5(v,e+0.5+s,t,r,q-(5-g)*0)
p.$5(v,e-0.5+s,t,r,q)}if(g===1&&h>0.5){t=C.L()
t.r=C.aq(A.dk,A.bh,(Math.sin(p.b*2+v.a)+1)/2).gq(0)
u.af(v,p.c*0.035,t)}},
$S:1831}
B.fxw.prototype={
$3(d,e,f){return new B.Ut(this.a,this.c,this.b,null)},
$C:"$3",
$R:3,
$S:z+69}
B.fxx.prototype={
$4(d,e,f,g){var w=x.Y
return new C.cW(e,!1,C.im(A.A,g,null,new C.bd(C.cF(A.co,e,null),new C.bl(0.85,1,w),w.k("bd<bD.T>"))),null)},
$C:"$4",
$R:4,
$S:29}
B.eqH.prototype={
$0(){var w=this.a
if(w.c!=null&&!w.r)w.n(new B.eqG(w))},
$S:0}
B.eqG.prototype={
$0(){return this.a.y=!1},
$S:0}
B.eqF.prototype={
$0(){var w,v=this.a
v.f=-1
v.e=A.o.G(v.gCa()+this.b,10)
if(v.gCa()<0)v.e=v.gCa()+10
w=v.gabg().y
w=w==null?null:A.o.ak(w.a,1000)
v.x=w==null?0:w
v.ag8()},
$S:0}
B.eqI.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1
w.ag8()},
$S:0}
B.eqR.prototype={
$0(){var w=this.a
return w.n(w.gcs2())},
$S:0}
B.eqQ.prototype={
$2(d,e){var w=null,v=this.a,u=v.gabg().y,t=u==null?w:A.o.ak(u.a,1000),s=(t==null?0:t)/1000,r=v.x===0&&v.a.d?s:99
return C.b2(w,w,w,new B.bqK(v.gCa(),v.f,s,r,w),A.f9)},
$S:71}
B.eqP.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=C.m(14),t=C.H(h?g:A.ba,A.r,1)
return C.aH(w,C.p(w,C.v(C.a([C.V(d,g,w,w,w,20),A.tI,C.d(e,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),A.h,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,A.jH,A.kY,w,w,56),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.ad)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$S:1832}
B.eqK.prototype={
$0(){return this.a.atB(-1)},
$S:0}
B.eqL.prototype={
$0(){return this.a.atB(1)},
$S:0}
B.eqM.prototype={
$0(){return this.a.atB(0)},
$S:0}
B.eqN.prototype={
$0(){var w=this.a
return w.n(new B.eqJ(w))},
$S:0}
B.eqJ.prototype={
$0(){var w=this.a
w.r=!w.r
w.ag8()},
$S:0}
B.eqO.prototype={
$0(){return this.a.aWk(0)},
$S:0}
B.eqE.prototype={
$0(){var w=this.a
return w.n(new B.eqC(w))},
$S:0}
B.eqC.prototype={
$0(){return this.a.r=!1},
$S:0}
B.eqD.prototype={
$0(){return this.a.aWk(this.b)},
$S:0}
B.dYT.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new B.dYS(w,d))},
$S:133}
B.dYS.prototype={
$0(){var w=this.a,v=this.b,u=J.a7(v),t=C.aR(u.h(v,"best"))
t=t==null?null:A.k.N(t)
w.e=t==null?0:t
v=C.aR(u.h(v,"level"))
v=v==null?null:A.k.N(v)
if(v==null)v=0
w.d=v
w.f=B.fI1(v)},
$S:0}
B.dYU.prototype={
$0(){},
$S:0}
B.dYJ.prototype={
$0(){var w=this.a,v=A.o.D(this.b,0,59)
w.d=v
w.f=B.fI1(v)
w.r.a7(0)
w.x=!1},
$S:0}
B.dYK.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.guG().r){C.jE()
return}q.m(0,p,"/")}else if(o==="/")q.m(0,p,"\\")
else q.W(0,p)
B.vg("click",s.c+s.d,60,0.4)
if(B.h5X(r.guG(),q).b.a===r.guG().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}B.vd("laser_maze",C.E(["best",p,"level",Math.min(q,59)],x.N,x.z))
B.AF("bell",D.ak2,700,0.45)
for(q=r.guG().c,q=C.ef(q,q.r,C.a2(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.A(new C.u((A.o.G(t,7)+0.5)*p+w,(A.o.ak(t,7)+0.5)*p+v),0))}}},
$S:0}
B.dYN.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.ar(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aH(A.c5,C.b2(s,s,s,new B.bds(r.guG(),w,v.a,u,r.w,r.z,s),q),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dYL(r),s,s,s,!1,A.ad),C.an(s,C.e1(C.B(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,E.aKc,s,s,s),C.d(""+u.a+"/"+r.guG().c.a+" \u2605   mirrors "+w.a+"/"+r.guG().r,s,s,s,s,s,s,P.a43,s,s,s)],t),A.m,s,A.hF,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(B.f4Y("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.bh,C.a([new B.ff(A.jl,"Next level",new B.dYM(r),A.bh,s)],t)))
return new C.am(A.W,s,A.b_,A.q,w,s)},
$S:61}
B.dYL.prototype={
$1(d){return this.a.c_B(d.b)},
$S:51}
B.dYM.prototype={
$0(){var w=this.a
return w.abi(w.d+1)},
$S:0}
B.dYO.prototype={
$0(){var w=this.a,v=w.r
return w.n(v.gqN(v))},
$S:0}
B.dYP.prototype={
$0(){var w=this.a
return w.abi(w.d+1)},
$S:0}
B.dYQ.prototype={
$0(){var w=this.a
return w.abi(w.d-1)},
$S:0}
B.dYR.prototype={
$0(){return this.a.abi(this.b)},
$S:0}
B.d9S.prototype={
$1(d){var w=this.b
return new C.u(this.a+(A.o.G(d,7)+0.5)*w,this.c+(A.o.ak(d,7)+0.5)*w)},
$S:629}
B.d9V.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.u(r,s):new C.u(r,r),p=new C.u(-q.a,-q.b)
r=this.c
w=t.ao(0,q)
v=t.ao(0,p)
$.Y()
u=C.L()
u.r=(f?A.h6:A.aJ).gq(0)
u.c=7
u.d=A.bN
r.bE(w,v,u)
w=t.ao(0,q)
v=t.ao(0,p)
u=C.L()
u.r=A.c.gq(0)
u.c=2.4
u.d=A.bN
r.bE(w,v,u)},
$S:1834}
B.d9T.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:460}
B.d9U.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:460}
B.dZb.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new B.dZa(w,d))},
$S:133}
B.dZa.prototype={
$0(){var w=C.aR(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
B.dZc.prototype={
$0(){},
$S:0}
B.dYX.prototype={
$1(d){return d===0},
$S:135}
B.dZ5.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.x(1,q[0],q[1],q[2],A.t)
q=C.d("ROUND "+C.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,E.a4h,s,s,s)
w=r.z==="play"?A.k.dF(r.y):20
v=x.p
w=C.B(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?A.cF:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,P.a43,s,s,s)],v),A.m,s,A.hF,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dw:p
t=C.m(22)
t=C.D(C.p(s,s,A.h,s,s,new C.o(u,s,C.H(A.ba,A.r,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.v(C.a([new C.C(D.bhf,w,s),C.D(C.B(C.a([C.D(new C.C(A.bS,C.v(C.a([t,A.ar,C.d(q?"TARGET":"TARGET: "+r.gcqb(),s,s,s,s,s,s,D.aKZ,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),C.D(new C.C(A.bS,C.v(C.a([C.D(C.b2(s,s,s,new B.bdH(r.f,s),A.f9),1),A.ar,C.d("YOURS \xb7 "+A.k.U(A.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aKZ,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(B.f4Y("Light Mixer","Match each colour with red, green and blue light."+q,A.b7,C.a([new B.ff(A.iM,"Start",new B.dZ2(r),A.bh,s)],v)))}if(r.z==="result")w.push(B.f4Y(r.Q,"Score so far: "+r.w,A.aL,C.a([new B.ff(A.jl,"Next colour",new B.dZ3(r),A.bh,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(B.f4Y("Finished! "+q,u,A.bh,C.a([new B.ff(A.m4,"Play again",new B.dZ4(r),A.bh,s)],v)))}return new C.am(A.W,s,A.a9,A.q,w,s)},
$S:61}
B.dZ2.prototype={
$0(){var w=this.a
return w.n(new B.dYZ(w))},
$S:0}
B.dYZ.prototype={
$0(){var w=this.a
w.w=w.r=0
w.atD()},
$S:0}
B.dZ3.prototype={
$0(){var w=this.a
return w.n(w.gc_z())},
$S:0}
B.dZ4.prototype={
$0(){var w=this.a
return w.n(new B.dYY(w))},
$S:0}
B.dYY.prototype={
$0(){var w=this.a
w.w=w.r=0
w.atD()},
$S:0}
B.dZ6.prototype={
$1(d){var w=this.a
return w.n(new B.dZ1(w,d))},
$S:6}
B.dZ1.prototype={
$0(){var w=A.k.U(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
B.dZ7.prototype={
$1(d){var w=this.a
return w.n(new B.dZ0(w,d))},
$S:6}
B.dZ0.prototype={
$0(){var w=A.k.U(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
B.dZ8.prototype={
$1(d){var w=this.a
return w.n(new B.dZ_(w,d))},
$S:6}
B.dZ_.prototype={
$0(){var w=A.k.U(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
B.dZ9.prototype={
$0(){var w=this.a
return w.n(w.gc_A())},
$S:0}
B.f1s.prototype={
$0(){return D.dJw},
$S:z+70}
B.f1t.prototype={
$0(){return D.dgL},
$S:z+71}
B.f1u.prototype={
$0(){return D.ddj},
$S:z+72}
B.f1v.prototype={
$0(){return D.dgb},
$S:z+73}
B.f1w.prototype={
$0(){return D.dl6},
$S:z+74}
B.f1x.prototype={
$0(){return D.dFf},
$S:z+75}
B.f1y.prototype={
$0(){return D.dHr},
$S:z+76}
B.f1z.prototype={
$0(){return D.dkq},
$S:z+77}
B.cav.prototype={
$0(){return C.a8(this.a,!1).nh()},
$S:0}
B.caw.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.h9l(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.b1(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.ab(0,A.G,p.j(0.4),A.dn,16)],t)
n=A.c.j(0.85)
j.push(C.aH(m,C.p(m,new C.am(A.W,m,A.a9,A.q,C.a([new C.cG(m,-6,-6,m,m,m,new C.w(r.c,m,I.R_,m,m,m,m,m,m,m,m,m),m),new C.bI(A.ld,m,m,C.v(C.a([new C.w(r.a,m,D.eNA,m,m,m,m,m,m,m,m,m),A.d6,new C.w(r.b,m,new C.F(!0,n,m,m,m,m,12,A.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.Q,0,A.p),m)],k),m),A.h,m,m,new C.o(m,m,m,new C.bv(q,q,q,q),p,new C.a3(A.aw,A.aC,A.w,o,m,m),A.n),m,v,m,m,A.bB,m,m,l),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.cau(d,r),m,m,m,m,m,m,!1,A.ad))}return C.c8(A.bJ,j,A.bx,14,14)},
$S:159}
B.cau.prototype={
$0(){return C.a8(this.a,!1).cp(C.eD(new B.cat(this.b),!1,null,x.H))},
$S:0}
B.cat.prototype={
$1(d){return this.a.f.$0()},
$S:43}
B.euP.prototype={
$0(){var w=this.a
return w.w=w.d[w.b_v(w.f)]},
$S:0}
B.euL.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cB.ae()*7},
$S:0}
B.euK.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bJ(0,A.c0)
w.w=""},
$S:0}
B.euN.prototype={
$0(){var w=this.a
return w.n(new B.euM(w,this.b))},
$S:0}
B.euM.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cu(w,this.b)},
$S:0}
B.euO.prototype={
$1(d){return this.a.aUZ(0)},
$S:2}
B.dLT.prototype={
$0(){return B.AF("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
B.dLU.prototype={
$0(){},
$S:0}
B.dLO.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
B.dLQ.prototype={
$0(){return this.a.aV0(this.b)},
$S:0}
B.dLR.prototype={
$0(){var w=this.a
return w.n(new B.dLP(w))},
$S:0}
B.dLP.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
B.dLS.prototype={
$0(){var w=this.a
return w.aV0(w.d)},
$S:0}
B.dxK.prototype={
$2(d,e){return d+e},
$S:94}
B.dxL.prototype={
$0(){},
$S:0}
B.dxF.prototype={
$2(d,e){return d+e},
$S:94}
B.dxI.prototype={
$0(){var w=this.a
return w.n(new B.dxH(w,this.b))},
$S:0}
B.dxH.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
B.dxJ.prototype={
$0(){var w=this.a
return w.n(new B.dxG(w))},
$S:0}
B.dxG.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
B.dJi.prototype={
$0(){return B.qk(this.b,this.a.d,"drawing")},
$S:0}
B.dJj.prototype={
$1(d){var w=this.a
return w.n(new B.dJh(w,d))},
$S:39}
B.dJh.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aFc(u,v,t))},
$S:0}
B.dJk.prototype={
$1(d){var w=this.a
return w.n(new B.dJg(w,d))},
$S:18}
B.dJg.prototype={
$0(){return A.d.gaj(this.a.e).c.push(this.b.b)},
$S:0}
B.dJl.prototype={
$1(d){var w=this.a
return w.n(new B.dJf(w,d))},
$S:23}
B.dJf.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aFc(u,v,t))},
$S:0}
B.dJm.prototype={
$0(){var w=this.a
return w.n(new B.dJe(w,this.b))},
$S:0}
B.dJe.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
B.dJn.prototype={
$1(d){var w=this.a
return w.n(new B.dJd(w,d))},
$S:6}
B.dJd.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dJo.prototype={
$0(){var w=this.a
return w.n(new B.dJc(w))},
$S:0}
B.dJc.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dJp.prototype={
$0(){var w=this.a
return w.n(new B.dJb(w))},
$S:0}
B.dJb.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.dJq.prototype={
$0(){var w=this.a
return w.n(A.d.gqN(w.e))},
$S:0}
B.dJr.prototype={
$0(){var w=this.a
return w.n(new B.dJa(w))},
$S:0}
B.dJa.prototype={
$0(){var w=this.a
w.x=D.aqN[A.o.G(A.d.cP(D.aqN,w.x)+1,4)]},
$S:0}
B.e3j.prototype={
$0(){return this.a.f.K(0,this.b)},
$S:0}
B.e3k.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
B.AF("bell",C.a([0,4,7],w),500,0.45)
u.n(new B.e3i(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)B.AF("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
B.e3i.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a7(0)},
$S:0}
B.e3l.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new B.e3h(w))},
$S:11}
B.e3h.prototype={
$0(){var w=this.a
w.f.a7(0)
w.x=!1},
$S:0}
B.e3p.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aH(w,C.mC(new B.e3n(v,e),w,A.b9,A.qf,w,new C.bl(0,u,x.Y),x.i),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.e3o(v,e),w,w,w,w,w,w,!1,A.ad)},
$S:75}
B.e3o.prototype={
$0(){return this.a.c0w(this.b)},
$S:0}
B.e3n.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.di(),m=n.a
m.$flags&2&&C.ah(m)
m[11]=0.001
n.fl(3.141592653589793*e)
m=C.m(16)
w=o?p:D.bJ4
if(o)v=q.a.r.t(0,q.b)?A.bh.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.H(u.r.t(0,t)?A.bh:A.ba,A.r,1)
if(o){r=C.di()
r.fl(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fp(A.A,C.d(u[t],p,p,p,p,p,p,D.eKX,p,p,p),p,r,!0)
u=r}else u=D.f3m
return C.fp(A.A,C.p(A.A,u,A.h,p,p,new C.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:136}
B.e3q.prototype={
$0(){var w=this.a
return w.n(new B.e3m(w,this.b))},
$S:0}
B.e3m.prototype={
$0(){var w=this.a
w.d=this.b.a
w.ap5()},
$S:0}
B.e3r.prototype={
$0(){var w=this.a
return w.n(w.gbDo())},
$S:0}
B.ebW.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
B.ebX.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
B.ebU.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.ebV.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new B.ebT(w))},
$S:11}
B.ebT.prototype={
$0(){return this.a.f=-1},
$S:0}
B.ebY.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
B.ebZ.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
B.ec_.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aV_()},
$S:11}
B.ec0.prototype={
$0(){return this.a.c0C(this.b)},
$S:0}
B.eqd.prototype={
$1(d){return C.t(d.h(0,1))+","},
$S:67}
B.eqm.prototype={
$3$big(d,e,f){var w=null,v=C.D(C.d(d,w,1,A.a2,w,w,w,C.l(w,w,A.aP,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.C(A.kY,C.B(C.a([v,A.aa,new C.dm(1,A.ci,C.eZ(A.A,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,A.eb),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1836}
B.eqi.prototype={
$1(d){return this.a.n(new B.eqh())},
$S:2}
B.eqh.prototype={
$0(){},
$S:0}
B.eqj.prototype={
$0(){var w=this.a
return w.n(new B.eqg(w,this.b))},
$S:0}
B.eqg.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eqk.prototype={
$1(d){var w=this.a
return w.n(new B.eqf(w,d))},
$S:6}
B.eqf.prototype={
$0(){return this.a.f=A.k.U(this.b)},
$S:0}
B.eql.prototype={
$0(){var w=this.a
return w.n(new B.eqe(w))},
$S:0}
B.eqe.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.e1Z.prototype={
$0(){},
$S:0}
B.e2_.prototype={
$0(){},
$S:0}
B.e1S.prototype={
$0(){var w=this.a
return w.n(new B.e1R(w))},
$S:0}
B.e1R.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.bZ(u,1,!1,x.S)
w.r=0.9
B.a6c("hat",0.6)},
$S:0}
B.e1T.prototype={
$0(){var w=this.a
return w.n(new B.e1Q(w))},
$S:0}
B.e1Q.prototype={
$0(){this.a.y=1.1
B.l1("bell",36,200,0.4)},
$S:0}
B.e1U.prototype={
$0(){var w=this.a
return w.n(new B.e1P(w))},
$S:0}
B.e1P.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aB(Math.max(v,u)-t+1)
w.as=u
B.l1("bell",12+A.o.G(u,12),500,0.5)},
$S:0}
B.e1V.prototype={
$0(){var w=this.a
return w.n(new B.e1O(w,this.b))},
$S:0}
B.e1O.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.e1W.prototype={
$1(d){var w=this.a
return w.n(new B.e1N(w,d))},
$S:6}
B.e1N.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.U(this.b),r=J.e_(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
B.e1X.prototype={
$1(d){var w=this.a
return w.n(new B.e1M(w,d))},
$S:6}
B.e1M.prototype={
$0(){return this.a.z=A.k.U(this.b)},
$S:0}
B.e1Y.prototype={
$1(d){var w=this.a
return w.n(new B.e1L(w,d))},
$S:6}
B.e1L.prototype={
$0(){return this.a.Q=A.k.U(this.b)},
$S:0}
B.cmB.prototype={
$0(){return C.a8(this.a,!1).nh()},
$S:0}
B.cmC.prototype={
$0(){var w=this.a
return B.h5O(this.b,w.c,w.e,w.d)},
$S:0}
B.fxX.prototype={
$1(d){var w,v=null,u=C.m(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.eDI,v,v,v)
return C.eo(C.a([C.bK(!1,D.eUr,v,v,!0,v,v,new B.fxW(d),v,v)],x.p),v,v,D.rw,w,v,v,v,new C.b6(u,new C.ay(s,1,A.r,-1)),t,v)},
$S:20}
B.fxW.prototype={
$0(){C.a8(this.a,!1).M(null)
return null},
$S:0}
B.cmx.prototype={
$0(){C.eH()
this.a.e.$0()},
$S:0}
B.cmw.prototype={
$0(){C.eH()
this.a.e.$0()},
$S:0}
B.cmD.prototype={
$0(){C.eH()
this.a.e.$0()},
$S:0}
B.cmy.prototype={
$0(){var w=this.a
A.d.W(w.fb$,this.b.b9())
if(w.c!=null)this.c.$0()},
$S:0}
B.cmA.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.kA$.a)/1e6,0,0.04)
w.kA$=d
w.fE$=A.o.ak(v,1000)
w.l4(u)
if(w.c!=null)w.n(new B.cmz())},
$S:8}
B.cmz.prototype={
$0(){},
$S:0}
B.caq.prototype={
$2(d,e){var w,v,u,t
for(w=e.length,v=this.a,u=v.$flags|0,t=0;t<w;++t){u&2&&C.ah(v,9)
v.setUint8(d+t,e.charCodeAt(t))}},
$S:460}
B.cas.prototype={
$0(){var w=this
return B.hnk(w.a,w.b,w.c,w.d,w.e)},
$S:336}
B.car.prototype={
$0(){var w=this
return B.l1(w.a,w.b,w.c,w.d)},
$S:1}
B.dOB.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new B.dOA(w,d))},
$S:z+79}
B.dOA.prototype={
$0(){return this.a.ckD(this.b)},
$S:0}
B.dO3.prototype={
$0(){var w,v,u,t=this.a,s=J.a7(t),r=s.gJ(t),q=new Float64Array(r*4)
for(w=0;w<s.gJ(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:1837}
B.dO1.prototype={
$0(){return this.a.id=D.a_y},
$S:0}
B.dO2.prototype={
$0(){var w=this.b.a,v=C.U(w).k("a4<1>")
v=C.oL(new C.a4(w,new B.dO0(this.c),v),6,v.k("G.E"))
w=C.z(v,C.a2(v).k("G.E"))
return this.a.id=w},
$S:0}
B.dO0.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+80}
B.dO_.prototype={
$1(d){var w=null,v=C.ci(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,A.af,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.q,w,A.z,w,w,w,w,A.ak)
return C.eo(C.a([C.bK(!1,A.pD,w,w,!0,w,w,new B.dNZ(d),w,w)],x.p),w,w,D.rw,v,w,w,w,w,D.f3q,w)},
$S:20}
B.dNZ.prototype={
$0(){C.a8(this.a,!1).M(null)
return null},
$S:0}
B.dOm.prototype={
$0(){return B.qk(this.b,this.a.d,"earth")},
$S:0}
B.dOn.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gUa()
r=p.z
o=C.a([C.aH(A.c5,C.b2(q,q,q,new B.bbU(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dOa(p),new B.dOb(p),new B.dOc(p),q,q,q,q,q,q,q,new B.dOd(p),q,q,q,!1,A.ad)],x.p)
if(p.r==null)o.push(A_.a7X)
w=this.b
if(w!=null)o.push(C.an(8,p.c1d(w),q,q,10,10,q,q))
return new C.en(new C.am(A.W,q,A.b_,A.q,o,q),p.d)},
$S:194}
B.dOb.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:305}
B.dOc.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gUa()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:237}
B.dOa.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gUa()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:506}
B.dOd.prototype={
$1(d){var w=this.a,v=w.c1g(d.b)
if(v!=null)w.n(new B.dO4(w,v))
else w.n(new B.dO5(w))},
$S:51}
B.dO4.prototype={
$0(){return this.a.au6(this.b)},
$S:0}
B.dO5.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dOo.prototype={
$0(){var w=this.a
w.e.bJ(0,A.c0)
w.n(new B.dO9(w,this.b))},
$S:0}
B.dO9.prototype={
$0(){var w=this.a
w.id=D.a_y
w.au6(this.b)},
$S:0}
B.dOs.prototype={
$0(){var w=this.a
return w.n(new B.dOl(w))},
$S:0}
B.dOl.prototype={
$0(){var w=this.a
w.fx=null
w.aqf(15,w.y,1)},
$S:0}
B.dOt.prototype={
$0(){var w=this.a
return w.n(new B.dOk(w,this.b))},
$S:0}
B.dOk.prototype={
$0(){var w=this.b.b
return this.a.aqf(w.a,w.b,w.c)},
$S:0}
B.dOu.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.n(new B.dOj(w,v))},
$S:0}
B.dOj.prototype={
$0(){var w=this.b.a
return this.a.au6(w[A.cB.aB(w.length)])},
$S:0}
B.dOv.prototype={
$1(d){var w=this.a
return w.n(new B.dOi(w,d))},
$S:6}
B.dOi.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
B.dOw.prototype={
$1(d){var w=this.a
return w.n(new B.dOh(w,d))},
$S:6}
B.dOh.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.dOx.prototype={
$1(d){var w=this.a
return w.n(new B.dOg(w,d))},
$S:6}
B.dOg.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.dOy.prototype={
$0(){var w=this.a
return w.n(new B.dOf(w))},
$S:0}
B.dOf.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.dOz.prototype={
$0(){var w=this.a
return w.n(new B.dOe(w))},
$S:0}
B.dOe.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
B.dOp.prototype={
$0(){var w=this.a
return w.n(new B.dO8(w))},
$S:0}
B.dO8.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
B.dOq.prototype={
$0(){var w=this.a
return w.n(new B.dO7(w))},
$S:0}
B.dO7.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
B.dOr.prototype={
$0(){var w=this.a
return w.n(new B.dO6(w))},
$S:0}
B.dO6.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
B.dNY.prototype={
$2(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aJE,w,w,w),A.tI,C.d(e,w,2,A.a2,w,w,w,A.Re,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:128}
B.dNX.prototype={
$0(){var w=this.a
return w.n(new B.dNW(w))},
$S:0}
B.dNW.prototype={
$0(){return this.a.fx=null},
$S:0}
B.d5S.prototype={
$0(){var w=null,v=C.io(w,w,w,w,C.dl(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.I,w,w,!0,w,w,w,w,w,D.cJx,w,w),this.a),A.a5,A.cm,w,A.en,A.cj)
v.fe()
return v},
$S:328}
B.d5T.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.u(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1838}
B.f1l.prototype={
$0(){return D.diI},
$S:z+81}
B.f1m.prototype={
$0(){return D.dH9},
$S:z+82}
B.f1n.prototype={
$0(){return D.diK},
$S:z+83}
B.f1o.prototype={
$0(){return D.dd5},
$S:z+84}
B.f1p.prototype={
$0(){return D.diG},
$S:z+85}
B.f1q.prototype={
$0(){return D.dFg},
$S:z+86}
B.f1r.prototype={
$0(){return D.dFe},
$S:z+87}
B.er_.prototype={
$0(){return C.a8(this.a,!1).nh()},
$S:0}
B.er0.prototype={
$0(){var w=this.a
return w.n(new B.eqZ(w))},
$S:0}
B.eqZ.prototype={
$0(){var w=this.a
return w.d=A.o.G(w.gaOi()+1,16)},
$S:0}
B.er1.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.h9k(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.b1(18,18)
q=s.d
p=new C.ay(q.j(0.5),1,A.r,-1)
o=C.a([q.j(0.28),D.b7W],u)
k.push(C.aH(n,C.p(n,C.v(C.a([C.V(s.c,q,n,n,n,30),A.P,new C.w(s.a,n,D.eI1,n,A.L,n,n,n,n,2,n,n),A.d6,new C.w(s.b,n,D.eMZ,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.b6,A.j,0,A.p),A.h,n,n,new C.o(n,n,new C.c1(p,p,p,p),new C.bv(r,r,r,r),n,new C.a3(A.aw,A.aC,A.w,o,n,n),A.n),n,v,n,n,A.ch,n,n,m),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eqY(d,s),n,n,n,n,n,n,!1,A.ad))}return C.c8(A.fG,k,A.bx,10,10)},
$S:159}
B.eqY.prototype={
$0(){return C.a8(this.a,!1).cp(C.eD(new B.eqX(this.b),!1,null,x.H))},
$S:0}
B.eqX.prototype={
$1(d){return this.a.e.$0()},
$S:43}
B.ej9.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
B.ejk.prototype={
$0(){return B.qk(this.b,this.a.d,"solar-system")},
$S:0}
B.ejl.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.ar(e.b,e.d)
u.ch=t
t=C.a([C.aH(A.c5,C.b2(v,v,v,new B.bo8(u,v),t),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.ejh(u),new B.eji(u),v,v,v,v,v,v,v,new B.ejj(u),v,v,v,!1,A.ad)],x.p)
w=this.b
if(w!=null)t.push(C.an(8,u.c1i(w),v,v,10,10,v,v))
return new C.en(new C.am(A.W,v,A.b_,A.q,t,v),u.d)},
$S:194}
B.ejh.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:305}
B.eji.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ao(0,d.a)},
$S:237}
B.ejj.prototype={
$1(d){var w=this.a,v=w.c1l(d.b)
if(v!=null)w.aVl(v)},
$S:51}
B.ejm.prototype={
$0(){var w=this.a
return w.n(new B.ejg(w))},
$S:0}
B.ejg.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
B.ejn.prototype={
$0(){return this.a.aVl(this.b)},
$S:0}
B.ejo.prototype={
$1(d){var w=this.a
return w.n(new B.ejf(w,d))},
$S:6}
B.ejf.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.ejp.prototype={
$1(d){var w=this.a
return w.n(new B.eje(w,d))},
$S:6}
B.eje.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ejq.prototype={
$0(){var w=this.a
return w.n(new B.ejd(w))},
$S:0}
B.ejd.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
B.ejr.prototype={
$0(){var w=this.a
return w.n(new B.ejc(w))},
$S:0}
B.ejc.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.ejs.prototype={
$0(){var w=this.a
return w.n(new B.ejb(w))},
$S:0}
B.ejb.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.ejt.prototype={
$0(){var w=this.a
return w.n(new B.eja(w))},
$S:0}
B.eja.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.ej8.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.aa(d/365.25,w)+" Earth years"}else w=A.k.aa(d,0)+" Earth days"
return w},
$S:392}
B.ej7.prototype={
$2(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aJE,w,w,w),A.tI,C.d(e,w,2,A.a2,w,w,w,A.Re,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:128}
B.ej6.prototype={
$0(){var w=this.a
return w.n(new B.ej5(w))},
$S:0}
B.ej5.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
B.eKO.prototype={
$0(){var w=null,v=C.io(w,w,w,w,C.dl(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.I,w,w,!0,w,w,w,w,w,E.NN,w,w),this.a),A.a5,A.cm,w,A.en,A.cj)
v.fe()
return v},
$S:328}
B.eKP.prototype={
$1(d){return d.c>0},
$S:z+10}
B.eKQ.prototype={
$1(d){return d.c>0},
$S:z+10}
B.dOF.prototype={
$0(){},
$S:0}
B.dP7.prototype={
$1(d){return d!=null},
$S:387}
B.dOU.prototype={
$0(){var w=this.a
return w.n(new B.dOL(w,this.b))},
$S:0}
B.dOL.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.dOV.prototype={
$0(){var w=this.a
return w.n(new B.dOK(w))},
$S:0}
B.dOK.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dOW.prototype={
$0(){var w=this.a
return w.n(new B.dOT(w))},
$S:0}
B.dOT.prototype={
$0(){return this.a.f=!0},
$S:0}
B.dP_.prototype={
$0(){var w=this.a
return w.n(new B.dOS(w))},
$S:0}
B.dOS.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.dP0.prototype={
$1(d){var w=this.a
return w.n(new B.dOR(w,d))},
$S:6}
B.dOR.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dP1.prototype={
$0(){var w=this.a
return w.n(w.gcnK())},
$S:0}
B.dP2.prototype={
$1(d){var w=this.a
return w.n(new B.dOQ(w,d))},
$S:6}
B.dOQ.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.dP3.prototype={
$1(d){var w=this.a
return w.n(new B.dOP(w,d))},
$S:6}
B.dOP.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dP4.prototype={
$1(d){var w=this.a
return w.n(new B.dOO(w,d))},
$S:6}
B.dOO.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.dP5.prototype={
$1(d){var w=this.a
return w.n(new B.dON(w,d))},
$S:6}
B.dON.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.dP6.prototype={
$0(){var w=this.a
return w.n(new B.dOM(w))},
$S:0}
B.dOM.prototype={
$0(){return this.a.ay=4},
$S:0}
B.dOX.prototype={
$0(){var w=this.a
return w.n(new B.dOJ(w))},
$S:0}
B.dOJ.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.dOY.prototype={
$0(){var w=this.a
return w.n(new B.dOI(w))},
$S:0}
B.dOI.prototype={
$0(){return this.a.ay=9},
$S:0}
B.dOZ.prototype={
$0(){var w=this.a
return w.n(new B.dOH(w))},
$S:0}
B.dOH.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.dOE.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bX(0,C.bT(g,new C.o(D.b6G,g,g,C.m(20),g,g,A.n),A.bb),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.xE[q]
n=C.aY(o.d)
o=C.v(C.a([new C.w(o.a,g,new C.F(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.w(C.t(D.xE[q].b)+" m/s\xb2",g,D.eMj,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=C.p(g,g,A.h,A.dw,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.V(O.Xl,C.aY(D.xE[q].d),g,g,g,22):C.p(g,g,A.h,g,g,new C.o(C.aY(D.xE[q].d),g,g,g,C.a([new C.ab(0,A.G,C.aY(D.xE[q].d).j(0.6),A.J,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=C.p(g,g,A.h,C.aY(D.xE[q].d).j(0.6),g,g,g,3,g,A.fr,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.aa(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,C.a([new C.cG(p,8,g,g,f,g,o,g),new C.cG(n-0.5,54,g,e,g,g,m,g),new C.cG(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cG(p,g,g,8,f,g,C.v(C.a([j,A.av,new C.w(i,g,A.vo,g,g,g,g,g,g,g,g,g),new C.w(h,g,D.eET,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.e9(v,new B.dOD()))a1.push(D.aXw)
return new C.am(A.W,g,A.a9,A.q,a1,g)},
$S:61}
B.dOD.prototype={
$1(d){return d==null},
$S:387}
B.dOG.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.m(8)
p=C.p(v,v,A.h,v,v,new C.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.dj(v,v,v,v,A.b9,new C.o(v,v,v,C.m(8),v,new C.a3(A.a3,A.a7,A.w,C.a([C.aY(t).j(0.9),C.aY(t).j(0.4)],x.O),v,v),A.n),A.i2,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.aa(r,1):B.Fs(r)
u=u.ax*9.81/s
u=u<10?A.k.aa(u,2):A.k.aa(u,0)
return new C.am(A.W,v,A.a9,A.q,C.a([p,t,C.an(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.eKI,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:61}
B.dOC.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b2(v,v,v,new B.b79(new C.u(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.at)
o=A.x.j(0.55)
p=C.m(14)
q=C.H(A.bG,A.r,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.bh
else u=A.a.t(u,"escapes")?A.aX:A.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.aa(Math.sqrt(58.86870477034412),1)
s=A.k.aa(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+B.Fs(A.k.D(r.cx.gcj()-6371,0,9e9))+" km":""
w=x.p
return new C.am(A.W,v,A.b_,A.q,C.a([n,C.an(v,C.p(v,C.v(C.a([u,A.bA,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,F.aLe,v,v,v)],w),A.F,v,A.e,A.Q,0,A.p),A.h,v,v,new C.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bS,v,v,v),v,v,12,12,8,v)],w),v)},
$S:61}
B.ec3.prototype={
$0(){return B.qk(this.b,this.a.d,"size-compare")},
$S:0}
B.ec4.prototype={
$0(){var w=this.a
return w.n(new B.ec2(w,this.b))},
$S:0}
B.ec2.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.ec5.prototype={
$0(){var w=this.a
return w.n(new B.ec1(w,this.b))},
$S:0}
B.ec1.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eIY.prototype={
$3(d,e,f){var w,v,u=this.a
$.Y()
w=C.L()
w.r=f.j(0.2).gq(0)
w.z=new C.hy(A.G,Math.max(2,e*0.18))
u.af(d,e*1.12,w)
w=C.L()
v=C.aq(f,A.x,0.6)
v.toString
w.sap(new C.bR(N.pM,0.5,A.w,null,0,C.a([A.c,f,v],x.O),F.ZP,null).au(0,C.bV(d,e)))
u.af(d,e,w)},
$S:657}
B.dxb.prototype={
$1(d){return d.e<=0},
$S:z+89}
B.dx_.prototype={
$1(d){return d.b},
$S:z+60}
B.dx0.prototype={
$0(){return B.qk(this.b,this.a.d,"black-hole")},
$S:0}
B.dx1.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.Q=o
o=C.aH(A.c5,C.b2(q,q,q,new B.b6y(p,q),o),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dwY(p),q,q,q,q,q,q,q,q,q,new B.dwZ(p),q,q,q,q,!1,A.ad)
w=A.x.j(0.55)
v=C.m(14)
u=C.H(A.bG,A.r,1)
t=p.r
if(t<1000)t=A.k.aa(t,t<10?1:0)+" Suns"
else t=B.fcc(t)+" Suns"
t=p.abZ("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.an(q,C.p(q,C.B(C.a([t,p.abZ("EDGE WIDTH",(s<100?A.k.aa(s,1):B.Fs(s))+" km"),p.abZ("TIME",A.k.aa(this.b*100,0)+"%"),p.abZ("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.h,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bS,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.dVc)
return new C.en(new C.am(A.W,q,A.b_,A.q,r,q),p.d)},
$S:194}
B.dwZ.prototype={
$1(d){return this.a.aVm(d.b)},
$S:23}
B.dwY.prototype={
$1(d){if(A.cB.ae()<0.12)this.a.aVm(d.b)},
$S:18}
B.dx3.prototype={
$1(d){var w=this.a
return w.n(new B.dwX(w,d))},
$S:6}
B.dwX.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dx4.prototype={
$0(){var w=this.a
return w.n(new B.dwW(w))},
$S:0}
B.dwW.prototype={
$0(){return this.a.r=10},
$S:0}
B.dx5.prototype={
$0(){var w=this.a
return w.n(new B.dwV(w))},
$S:0}
B.dwV.prototype={
$0(){return this.a.r=21},
$S:0}
B.dx6.prototype={
$0(){var w=this.a
return w.n(new B.dwU(w))},
$S:0}
B.dwU.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dx7.prototype={
$0(){var w=this.a
return w.n(new B.dwT(w))},
$S:0}
B.dwT.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dx8.prototype={
$0(){var w=this.a
return w.n(new B.dwS(w))},
$S:0}
B.dwS.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dx9.prototype={
$0(){var w=this.a
return w.n(new B.dwR(w))},
$S:0}
B.dwR.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dxa.prototype={
$0(){var w=this.a
return w.n(new B.dwQ(w))},
$S:0}
B.dwQ.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dx2.prototype={
$0(){var w=this.a
return w.n(new B.dwP(w))},
$S:0}
B.dwP.prototype={
$0(){var w=this.a
A.d.a7(w.z)
w.as=0},
$S:0}
B.dNc.prototype={
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
$S:1839}
B.dN2.prototype={
$0(){return B.qk(this.b,this.a.d,"galaxy")},
$S:0}
B.dN3.prototype={
$0(){var w=this.a
return w.n(new B.dN1(w,this.b))},
$S:0}
B.dN1.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.Y_()},
$S:0}
B.dN4.prototype={
$0(){var w=this.a
return w.n(new B.dN0(w))},
$S:0}
B.dN0.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.Y_()}w.cnC()},
$S:0}
B.dN5.prototype={
$1(d){var w=this.a
return w.n(new B.dN_(w,d))},
$S:6}
B.dN_.prototype={
$0(){var w=this.a
w.f=A.k.U(this.b)
w.Y_()},
$S:0}
B.dN6.prototype={
$1(d){var w=this.a
return w.n(new B.dMZ(w,d))},
$S:6}
B.dMZ.prototype={
$0(){var w=this.a
w.r=this.b
w.Y_()},
$S:0}
B.dN7.prototype={
$1(d){var w=this.a
return w.n(new B.dMY(w,d))},
$S:6}
B.dMY.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dN8.prototype={
$1(d){var w=this.a
return w.n(new B.dMX(w,d))},
$S:6}
B.dMX.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dN9.prototype={
$0(){var w=this.a
return w.n(new B.dMW(w))},
$S:0}
B.dMW.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dNa.prototype={
$0(){var w=this.a
return w.n(new B.dMV(w))},
$S:0}
B.dMV.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.dNb.prototype={
$0(){var w=this.a
return w.n(new B.dMU(w))},
$S:0}
B.dMU.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.d30.prototype={
$6(d,e,f,g,h,i){return g.ao(0,new C.u((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1840}
B.ebK.prototype={
$0(){return B.qk(this.b,this.a.d,"seasons-moon")},
$S:0}
B.ebL.prototype={
$0(){var w=this.a
return w.n(new B.ebJ(w))},
$S:0}
B.ebJ.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.ebM.prototype={
$0(){var w=this.a
return w.n(new B.ebI(w))},
$S:0}
B.ebI.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.ebN.prototype={
$0(){var w=this.a
return w.n(new B.ebH(w))},
$S:0}
B.ebH.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.ebO.prototype={
$0(){var w=this.a
return w.n(new B.ebG(w))},
$S:0}
B.ebG.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.ebP.prototype={
$1(d){var w=this.a
return w.n(new B.ebF(w,d))},
$S:6}
B.ebF.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.ebQ.prototype={
$1(d){var w=this.a
return w.n(new B.ebE(w,d))},
$S:6}
B.ebE.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.ebR.prototype={
$1(d){var w=this.a
return w.n(new B.ebD(w,d))},
$S:6}
B.ebD.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ebS.prototype={
$1(d){var w=this.a
return w.n(new B.ebC(w,d))},
$S:6}
B.ebC.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=B.aJc.prototype
w.bqf=w.p
w=B.aIe.prototype
w.bpf=w.p
w=B.aIf.prototype
w.bpg=w.p
w=B.aIk.prototype
w.bpl=w.p
w=B.aK0.prototype
w.br9=w.p
w=B.aJa.prototype
w.bqd=w.p
w=B.aJj.prototype
w.bqm=w.p
w=B.aJp.prototype
w.bqs=w.p
w=B.aIi.prototype
w.bpj=w.p
w=B.aJ6.prototype
w.bq9=w.p
w=B.aJm.prototype
w.bqp=w.p
w=B.aJ4.prototype
w.bq7=w.p
w=B.aJ5.prototype
w.bq8=w.p
w=B.aIv.prototype
w.bpx=w.p
w=B.aIa.prototype
w.bpb=w.p
w=B.aID.prototype
w.bpF=w.p
w=B.auT.prototype
w.bmo=w.p
w=B.auU.prototype
w.bmp=w.p
w=B.aJ8.prototype
w.bqb=w.p
w=B.aJq.prototype
w.bqt=w.p
w=B.aIU.prototype
w.bpX=w.p
w=B.aIV.prototype
w.bpY=w.p
w=B.aIg.prototype
w.bph=w.p
w=B.aIy.prototype
w.bpA=w.p
w=B.aJ2.prototype
w.bq5=w.p
w=B.aJx.prototype
w.bqA=w.p
w=B.aIE.prototype
w.bpH=w.p
w=B.aIF.prototype
w.bpI=w.p
w=B.aIG.prototype
w.bpJ=w.p
w=B.aJf.prototype
w.bqi=w.p
w=B.aJi.prototype
w.bql=w.p
w=B.aId.prototype
w.bpe=w.p
w=B.aIB.prototype
w.bpD=w.p
w=B.aJe.prototype
w.bqh=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(B.aBq.prototype,"gat8","bYc",0)
var r
v(r=B.azS.prototype,"gc4I","c4J",35)
w(r,"gbYI","aU0",0)
w(B.azV.prototype,"gbZE","bZF",0)
u(B.aAb.prototype,"gbZK","bZL",52)
w(r=B.aEn.prototype,"gcnk","cnl",0)
w(r,"gcbg","adp",0)
w(r,"gc8Z","c9_",0)
w(r,"gbZJ","ab2",3)
w(r=B.aBp.prototype,"gbAy","a6M",3)
w(r,"gc8g","aX0",0)
w(r,"gcbV","adx",3)
t(r,"gbZN","ab3",3)
w(B.aBD.prototype,"gbRl","bRm",0)
w(r=B.aBi.prototype,"gcne","cnf",0)
w(r,"gbAT","bAU",0)
w(r=B.azU.prototype,"gb04","aww",0)
v(r,"gbZT","Xp",54)
w(r,"gbZS","ab5",3)
v(r=B.aBh.prototype,"gcdP","avg",58)
v(r,"gcjU","aws",15)
w(r,"gbEP","aMV",0)
v(r=B.aBf.prototype,"gcu8","agw",15)
t(r,"gc_c","atz",0)
w(r,"gcg3","cg4",0)
v(r=B.aAn.prototype,"gc_d","c_e",90)
w(r,"gc_f","c_g",0)
t(r=B.a2o.prototype,"gqN","a7",0)
v(r,"gcFX","a2H",1)
w(r,"gcLp","bcC",0)
s(B.agg.prototype,"gc_k",0,5,null,["$5"],["pA"],64,0,0)
w(r=B.aAo.prototype,"gc_l","c_m",0)
w(r,"gceA","adT",3)
w(r,"gc4Y","acb",3)
w(r=B.aBE.prototype,"gaUB","c_o",0)
w(r,"gcs2","ag8",0)
w(r=B.aB1.prototype,"gc_z","atD",0)
w(r,"gc_A","aUC",0)
w(r=B.aBQ.prototype,"gc0x","c0y",0)
t(r,"gc0v","aUZ",0)
w(B.aBb.prototype,"gbDo","ap5",0)
t(B.aBu.prototype,"gc0z","c0A",0)
v(r=B.aAz.prototype,"gc1e","c1f",78)
w(r,"gbI7","bI8",0)
w(r=B.aAA.prototype,"gcnK","cnL",0)
w(r,"gc1j","c1k",0)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(C.aB,[B.aht,B.EL,B.ud,B.aOZ,B.a17,B.b6B,B.bWB,B.xg,B.Bf,B.mZ,B.b7j,B.zx,B.boP,B.pz,B.qd,B.Bj,B.Xk,B.acs,B.Zy,B.Bt,B.a9q,B.a9H,B.abB,B.Ey,B.bhT,B.Od,B.YR,B.a9x,B.aa_,B.Eu,B.aaO,B.abi,B.rC,B.b6b,B.aOP,B.fb,B.vl,B.a88,B.a9c,B.a2o,B.ma,B.b7k,B.is,B.Bd,B.Ar,B.Bu,B.wT,B.aTf,B.bq8,B.aFc,B.me,B.a8T,B.a8U,B.uq,B.Nv,B.xe,B.Nu,B.bq3,B.NX,B.acx])
v(C.i3,[B.fed,B.f60,B.fbB,B.fbC,B.fea,B.feb,B.dVV,B.dWd,B.eaI,B.eaf,B.eag,B.eah,B.eai,B.eaj,B.eak,B.eal,B.eam,B.ead,B.eae,B.eac,B.eaD,B.eaE,B.eaF,B.dxg,B.dxi,B.dxl,B.dxw,B.bWC,B.bWD,B.f0z,B.f0A,B.f0B,B.f0I,B.f0J,B.f0K,B.dzO,B.dzv,B.dzP,B.dzq,B.dzl,B.dzn,B.dzt,B.dzG,B.dzE,B.dzF,B.dzD,B.dzA,B.dzC,B.eIs,B.eI9,B.eIg,B.eIp,B.eI3,B.d9z,B.d9A,B.d9w,B.d9x,B.d9y,B.d9B,B.d9C,B.d9D,B.d9E,B.d9F,B.d9G,B.d9H,B.d9I,B.d9J,B.e9E,B.e9F,B.e9G,B.e9H,B.e9C,B.e9D,B.ea8,B.e9L,B.e9N,B.e9x,B.ea4,B.ea2,B.ea3,B.ea1,B.ea0,B.e9z,B.ejU,B.ejS,B.ejG,B.ejK,B.ejF,B.ejL,B.ejM,B.ejQ,B.eqv,B.eqB,B.e6B,B.e6C,B.e6n,B.e6o,B.e6m,B.e6r,B.e6t,B.e6u,B.epV,B.epW,B.epU,B.epI,B.epJ,B.epH,B.epA,B.epB,B.epP,B.epQ,B.epR,B.epS,B.epT,B.dyX,B.dyY,B.dyZ,B.dyQ,B.dyT,B.cFB,B.e24,B.e2t,B.e28,B.e2g,B.e2h,B.e2f,B.e2o,B.e64,B.e69,B.e5t,B.e5b,B.e5n,B.e5l,B.e5j,B.e5k,B.e5i,B.dGR,B.dGF,B.dGH,B.dGP,B.dGK,B.dJG,B.dJy,B.dJz,B.dJA,B.cZ5,B.cZ7,B.cZ6,B.dvk,B.dvl,B.dvd,B.dvb,B.cy8,B.dNA,B.dNB,B.dNw,B.dNx,B.d53,B.d54,B.dzj,B.dz1,B.dza,B.dzb,B.dzg,B.dzh,B.bHO,B.bHZ,B.bHU,B.bI_,B.bI1,B.bHP,B.bHN,B.bI6,B.bHV,B.bHY,B.bHX,B.bHW,B.bDf,B.fpU,B.fpX,B.fpV,B.bCY,B.bDe,B.bD6,B.bD7,B.bD5,B.bD8,B.bCR,B.bCT,B.bCO,B.bCP,B.bCQ,B.bCI,B.f0L,B.f0M,B.f0N,B.f0y,B.f0O,B.f0x,B.f0P,B.f0C,B.f0w,B.f0D,B.f0v,B.f0E,B.f0u,B.f0F,B.f0s,B.f0t,B.f0G,B.f0q,B.f0r,B.f0H,B.f0p,B.dJO,B.dJP,B.dJN,B.dJJ,B.f1B,B.eYL,B.f5e,B.eXC,B.fwe,B.fwf,B.f9v,B.fxw,B.fxx,B.eqP,B.dYT,B.dYL,B.d9S,B.d9V,B.dZb,B.dYX,B.dZ6,B.dZ7,B.dZ8,B.cat,B.euO,B.dJj,B.dJk,B.dJl,B.dJn,B.e3n,B.eqd,B.eqm,B.eqi,B.eqk,B.e1W,B.e1X,B.e1Y,B.fxX,B.cmA,B.dOB,B.dO0,B.dO_,B.dOb,B.dOc,B.dOa,B.dOd,B.dOv,B.dOw,B.dOx,B.eqX,B.ejh,B.eji,B.ejj,B.ejo,B.ejp,B.ej8,B.eKP,B.eKQ,B.dP7,B.dP0,B.dP2,B.dP3,B.dP4,B.dP5,B.dOD,B.eIY,B.dxb,B.dx_,B.dwZ,B.dwY,B.dx3,B.dNc,B.dN5,B.dN6,B.dN7,B.dN8,B.d30,B.ebP,B.ebQ,B.ebR,B.ebS])
v(C.kz,[B.fec,B.dW_,B.dVY,B.eao,B.eaB,B.dzm,B.dzJ,B.dF2,B.eIv,B.eIw,B.eI8,B.eIl,B.eIm,B.eIh,B.eIn,B.eI2,B.e9A,B.e9B,B.ea7,B.ea_,B.e9P,B.equ,B.e6q,B.epL,B.dyP,B.dyU,B.e2k,B.e68,B.feu,B.e5f,B.e5c,B.e5p,B.dhC,B.bCe,B.fal,B.dv7,B.dvf,B.bI0,B.bI2,B.bI4,B.bHQ,B.bHS,B.bDg,B.cfG,B.fpW,B.bDc,B.bDb,B.e7_,B.eqQ,B.dYN,B.d9T,B.d9U,B.dZ5,B.caw,B.dxK,B.dxF,B.e3p,B.caq,B.dOn,B.dNY,B.d5T,B.er1,B.ejl,B.ej7,B.dOE,B.dOG,B.dOC,B.dx1])
v(C.af,[B.TB,B.U2,B.Su,B.Sz,B.LI,B.aEm,B.U1,B.Ug,B.Us,B.TZ,B.Un,B.Sx,B.TT,B.TY,B.TW,B.SU,B.T9,B.Sp,B.Tn,B.Sy,B.age,B.Ta,B.U_,B.Ut,B.TG,B.TI,B.Uy,B.Th,B.Sv,B.T8,B.TU,B.U6,B.Ur,B.TS,B.To,B.Uu,B.Uf,B.Tp,B.U7,B.St,B.Tl,B.U3])
v(C.ag,[B.bgm,B.aJc,B.aIe,B.aIk,B.aAb,B.aK0,B.aJa,B.aJj,B.aJp,B.aJ6,B.aJm,B.aIi,B.aJ4,B.aJ5,B.aBf,B.bfR,B.aIv,B.aIa,B.aID,B.bfL,B.auT,B.aAo,B.aJ8,B.aJq,B.aIU,B.aIV,B.aJx,B.aIy,B.aIg,B.bfS,B.aBb,B.aBu,B.bh6,B.aJ2,B.aIE,B.bh9,B.aJi,B.aIG,B.aJf,B.aId,B.aIB,B.aJe])
v(C.jl,[B.dVT,B.dVU,B.dW5,B.dW6,B.dW1,B.dW0,B.dW2,B.dVZ,B.dW3,B.dVX,B.dW4,B.dVW,B.dW9,B.dW8,B.dWa,B.dW7,B.dWb,B.dWc,B.dWe,B.eaH,B.eaJ,B.eaK,B.eaq,B.eap,B.ean,B.eaw,B.eax,B.eat,B.eay,B.eas,B.eaz,B.eaA,B.ear,B.eaC,B.eav,B.eaG,B.eau,B.dxD,B.dxC,B.dxf,B.dxE,B.dxh,B.dxj,B.dxk,B.dxm,B.dxc,B.dxd,B.dxe,B.dxt,B.dxu,B.dxv,B.dxs,B.dxx,B.dxr,B.dxy,B.dxq,B.dxz,B.dxp,B.dxA,B.dxo,B.dxB,B.dxn,B.dzs,B.dzr,B.dzw,B.dzo,B.dzp,B.dzx,B.dzy,B.dzz,B.dzu,B.dzk,B.dzI,B.dzH,B.dzK,B.dzL,B.dzM,B.dzB,B.dzN,B.cG3,B.dF0,B.dF_,B.dF1,B.f1_,B.f10,B.f11,B.f1c,B.f1e,B.f1f,B.f1g,B.f1h,B.f1i,B.f1j,B.f1k,B.f12,B.f13,B.f14,B.f15,B.f16,B.f17,B.f18,B.f19,B.f1a,B.f1b,B.f1d,B.eIu,B.eIt,B.eIb,B.eIa,B.eI6,B.eI5,B.eI7,B.eI4,B.eIj,B.eIi,B.eIk,B.eIc,B.eIo,B.eIf,B.eIq,B.eIe,B.eIr,B.eId,B.e9J,B.e9y,B.e9I,B.e9u,B.e9K,B.e9M,B.e9v,B.e9w,B.ea6,B.ea5,B.e9X,B.e9Y,B.e9Z,B.e9T,B.e9U,B.e9S,B.e9V,B.e9R,B.e9W,B.e9Q,B.e9O,B.d9v,B.ejT,B.ejv,B.eju,B.ejE,B.ejN,B.ejD,B.ejO,B.ejC,B.ejP,B.ejB,B.ejA,B.ejR,B.ejz,B.ejH,B.ejy,B.ejI,B.ejx,B.ejJ,B.ejw,B.eqt,B.eqs,B.eqw,B.eqr,B.eqx,B.eqq,B.eqy,B.eqp,B.eqz,B.eqo,B.eqA,B.eqn,B.e6p,B.e6l,B.e6k,B.e6j,B.e6v,B.e6i,B.e6w,B.e6h,B.e6x,B.e6g,B.e6y,B.e6z,B.e6A,B.e6f,B.e6s,B.epK,B.epz,B.epM,B.epG,B.epN,B.epF,B.epO,B.epE,B.epD,B.epC,B.epy,B.epx,B.epw,B.dyW,B.dyN,B.dyO,B.dyR,B.dyS,B.dyV,B.e2i,B.e29,B.e2j,B.e2l,B.e2e,B.e2m,B.e2d,B.e2n,B.e2c,B.e2b,B.e2p,B.e2a,B.e2q,B.e27,B.e2r,B.e26,B.e2s,B.e25,B.e5Z,B.e6_,B.e66,B.e65,B.e67,B.e63,B.e6a,B.e62,B.e6b,B.e61,B.e6c,B.e6d,B.e60,B.e6e,B.e5s,B.e59,B.e5a,B.e5e,B.e5d,B.e5o,B.e5m,B.e5g,B.e5q,B.e5h,B.e5r,B.dGQ,B.dGG,B.dGE,B.dGL,B.dGJ,B.dGM,B.dGI,B.dGN,B.dGO,B.dJF,B.dJt,B.dJs,B.dJu,B.dJx,B.dJw,B.dJv,B.dJB,B.dJC,B.dJD,B.dJE,B.dvj,B.dvi,B.dv8,B.dve,B.dvc,B.dvg,B.dva,B.dvh,B.dv9,B.dNz,B.dNy,B.dNq,B.dNu,B.dNt,B.dNv,B.dNs,B.dNr,B.dzi,B.dz9,B.dz8,B.dzc,B.dz7,B.dzd,B.dz6,B.dze,B.dz5,B.dzf,B.dz4,B.dz3,B.dz2,B.bI3,B.bI5,B.bHR,B.bHT,B.bCV,B.bCW,B.bCU,B.bCX,B.bDd,B.bCy,B.bD3,B.bD4,B.bD1,B.bD2,B.bD_,B.bD0,B.bD9,B.bCZ,B.bDa,B.bCz,B.bCS,B.bCF,B.bCG,B.bCE,B.bCH,B.bCD,B.bCJ,B.bCK,B.bCL,B.bCC,B.bCM,B.bCB,B.bCN,B.bCA,B.dJQ,B.dJR,B.dJM,B.dJL,B.dJK,B.dJT,B.dJU,B.dJV,B.dJW,B.dJX,B.dJS,B.e70,B.e6Y,B.e6X,B.e6Z,B.e6W,B.e6V,B.e6U,B.eqH,B.eqG,B.eqF,B.eqI,B.eqR,B.eqK,B.eqL,B.eqM,B.eqN,B.eqJ,B.eqO,B.eqE,B.eqC,B.eqD,B.dYS,B.dYU,B.dYJ,B.dYK,B.dYM,B.dYO,B.dYP,B.dYQ,B.dYR,B.dZa,B.dZc,B.dZ2,B.dYZ,B.dZ3,B.dZ4,B.dYY,B.dZ1,B.dZ0,B.dZ_,B.dZ9,B.f1s,B.f1t,B.f1u,B.f1v,B.f1w,B.f1x,B.f1y,B.f1z,B.cav,B.cau,B.euP,B.euL,B.euK,B.euN,B.euM,B.dLT,B.dLU,B.dLO,B.dLQ,B.dLR,B.dLP,B.dLS,B.dxL,B.dxI,B.dxH,B.dxJ,B.dxG,B.dJi,B.dJh,B.dJg,B.dJf,B.dJm,B.dJe,B.dJd,B.dJo,B.dJc,B.dJp,B.dJb,B.dJq,B.dJr,B.dJa,B.e3j,B.e3k,B.e3i,B.e3l,B.e3h,B.e3o,B.e3q,B.e3m,B.e3r,B.ebW,B.ebX,B.ebU,B.ebV,B.ebT,B.ebY,B.ebZ,B.ec_,B.ec0,B.eqh,B.eqj,B.eqg,B.eqf,B.eql,B.eqe,B.e1Z,B.e2_,B.e1S,B.e1R,B.e1T,B.e1Q,B.e1U,B.e1P,B.e1V,B.e1O,B.e1N,B.e1M,B.e1L,B.cmB,B.cmC,B.fxW,B.cmx,B.cmw,B.cmD,B.cmy,B.cmz,B.cas,B.car,B.dOA,B.dO3,B.dO1,B.dO2,B.dNZ,B.dOm,B.dO4,B.dO5,B.dOo,B.dO9,B.dOs,B.dOl,B.dOt,B.dOk,B.dOu,B.dOj,B.dOi,B.dOh,B.dOg,B.dOy,B.dOf,B.dOz,B.dOe,B.dOp,B.dO8,B.dOq,B.dO7,B.dOr,B.dO6,B.dNX,B.dNW,B.d5S,B.f1l,B.f1m,B.f1n,B.f1o,B.f1p,B.f1q,B.f1r,B.er_,B.er0,B.eqZ,B.eqY,B.ej9,B.ejk,B.ejm,B.ejg,B.ejn,B.ejf,B.eje,B.ejq,B.ejd,B.ejr,B.ejc,B.ejs,B.ejb,B.ejt,B.eja,B.ej6,B.ej5,B.eKO,B.dOF,B.dOU,B.dOL,B.dOV,B.dOK,B.dOW,B.dOT,B.dP_,B.dOS,B.dOR,B.dP1,B.dOQ,B.dOP,B.dOO,B.dON,B.dP6,B.dOM,B.dOX,B.dOJ,B.dOY,B.dOI,B.dOZ,B.dOH,B.ec3,B.ec4,B.ec2,B.ec5,B.ec1,B.dx0,B.dwX,B.dx4,B.dwW,B.dx5,B.dwV,B.dx6,B.dwU,B.dx7,B.dwT,B.dx8,B.dwS,B.dx9,B.dwR,B.dxa,B.dwQ,B.dx2,B.dwP,B.dN2,B.dN3,B.dN1,B.dN4,B.dN0,B.dN_,B.dMZ,B.dMY,B.dMX,B.dN9,B.dMW,B.dNa,B.dMV,B.dNb,B.dMU,B.ebK,B.ebL,B.ebJ,B.ebM,B.ebI,B.ebN,B.ebH,B.ebO,B.ebG,B.ebF,B.ebE,B.ebD,B.ebC])
u(B.btr,B.aJc)
u(B.aBq,B.btr)
v(C.n7,[B.bdp,B.b7B,B.bof,B.b6i,B.bmW,B.bmo,B.b6Y,B.bmq,B.bqi,B.bdn,B.boa,B.bhG,B.bp0,B.b7i,B.beh,B.bhH,B.beY,B.bak,B.b6n,B.bbN,B.agg,B.aE2,B.bqK,B.bds,B.bdH,B.bru,B.bmp,B.bhU,B.bbU,B.bo8,B.b79,B.bnH,B.b6y,B.bbK,B.bmZ])
u(B.aIf,B.aIe)
u(B.azS,B.aIf)
u(B.btb,B.aIk)
u(B.azV,B.btb)
v(C.mf,[B.IS,B.Zl])
v(C.at,[B.bnh,B.acC,B.abx,B.Om,B.bnL,B.a6d,B.b9G,B.b3n,B.dw,B.eF,B.at1,B.ff,B.E1])
u(B.aEn,B.aK0)
u(B.bdm,C.p3)
u(B.aBp,B.aJa)
u(B.bgY,B.aJj)
u(B.aBD,B.aJp)
u(B.btq,B.aJ6)
u(B.aBi,B.btq)
u(B.bty,B.aJm)
u(B.bh2,B.bty)
u(B.bta,B.aIi)
u(B.azU,B.bta)
u(B.bto,B.aJ4)
u(B.bgB,B.bto)
u(B.btp,B.aJ5)
u(B.aBh,B.btp)
u(B.aAn,B.aIv)
u(B.bfy,B.aIa)
u(B.bg2,B.aID)
u(B.auU,B.auT)
u(B.agf,B.auU)
u(B.bgI,B.aJ8)
u(B.aBE,B.aJq)
u(B.bth,B.aIU)
u(B.bgo,B.bth)
u(B.bti,B.aIV)
u(B.aB1,B.bti)
u(B.btz,B.aJx)
u(B.aBQ,B.btz)
u(B.btd,B.aIy)
u(B.bfY,B.btd)
u(B.bt9,B.aIg)
u(B.bfD,B.bt9)
u(B.btn,B.aJ2)
u(B.bgz,B.btn)
u(B.aIF,B.aIE)
u(B.aAz,B.aIF)
u(B.btv,B.aJi)
u(B.bgX,B.btv)
u(B.btf,B.aIG)
u(B.aAA,B.btf)
u(B.btt,B.aJf)
u(B.bgU,B.btt)
u(B.bt8,B.aId)
u(B.bfC,B.bt8)
u(B.bte,B.aIB)
u(B.bg0,B.bte)
u(B.bts,B.aJe)
u(B.bgT,B.bts)
w(B.aJc,C.c7)
w(B.btr,B.me)
w(B.aIe,C.c7)
w(B.aIf,B.me)
w(B.aIk,C.c7)
w(B.btb,B.me)
w(B.aK0,C.eJ)
w(B.aJa,C.c7)
w(B.aJj,C.c7)
w(B.aJp,C.c7)
w(B.aIi,C.c7)
w(B.bta,B.me)
w(B.aJ6,C.c7)
w(B.btq,B.me)
w(B.aJm,C.c7)
w(B.bty,B.me)
w(B.aJ4,C.c7)
w(B.bto,B.me)
w(B.aJ5,C.c7)
w(B.btp,B.me)
w(B.aIv,C.c7)
w(B.aIa,C.c7)
w(B.aID,C.c7)
w(B.auT,C.c7)
w(B.auU,B.me)
w(B.aJ8,C.c7)
w(B.aJq,C.c7)
w(B.aIU,C.c7)
w(B.bth,B.me)
w(B.aIV,C.c7)
w(B.bti,B.me)
w(B.aIg,C.c7)
w(B.bt9,B.me)
w(B.aIy,C.c7)
w(B.btd,B.me)
w(B.aJ2,C.c7)
w(B.btn,B.me)
w(B.aJx,C.c7)
w(B.btz,B.me)
w(B.aIE,C.c7)
w(B.aIF,B.me)
w(B.aIG,C.c7)
w(B.btf,B.me)
w(B.aJf,C.c7)
w(B.btt,B.me)
w(B.aJi,C.c7)
w(B.btv,B.me)
w(B.aId,C.c7)
w(B.bt8,B.me)
w(B.aIB,C.c7)
w(B.bte,B.me)
w(B.aJe,C.c7)
w(B.bts,B.me)})()
C.kf(b.typeUniverse,JSON.parse('{"TB":{"af":[],"r":[]},"bgm":{"ag":["TB"]},"U2":{"af":[],"r":[]},"aBq":{"ag":["U2"]},"bdp":{"aA":[]},"Su":{"af":[],"r":[]},"azS":{"ag":["Su"]},"Sz":{"af":[],"r":[]},"azV":{"ag":["Sz"]},"b7B":{"aA":[]},"acC":{"at":[],"r":[]},"abx":{"at":[],"r":[]},"aEm":{"af":[],"r":[]},"LI":{"af":[],"r":[]},"aAb":{"ag":["LI"]},"bnh":{"at":[],"r":[]},"Om":{"at":[],"r":[]},"bof":{"aA":[]},"bnL":{"at":[],"r":[]},"b6i":{"aA":[]},"aEn":{"ag":["aEm"]},"bmW":{"aA":[]},"bmo":{"aA":[]},"b6Y":{"aA":[]},"bmq":{"aA":[]},"bqi":{"aA":[]},"U1":{"af":[],"r":[]},"bdm":{"aA":[]},"aBp":{"ag":["U1"]},"bdn":{"aA":[]},"Ug":{"af":[],"r":[]},"Us":{"af":[],"r":[]},"bgY":{"ag":["Ug"]},"boa":{"aA":[]},"aBD":{"ag":["Us"]},"TZ":{"af":[],"r":[]},"Un":{"af":[],"r":[]},"Sx":{"af":[],"r":[]},"aBi":{"ag":["TZ"]},"bhG":{"aA":[]},"bh2":{"ag":["Un"]},"bp0":{"aA":[]},"azU":{"ag":["Sx"]},"b7i":{"aA":[]},"TT":{"af":[],"r":[]},"TY":{"af":[],"r":[]},"bgB":{"ag":["TT"]},"beh":{"aA":[]},"aBh":{"ag":["TY"]},"bhH":{"aA":[]},"TW":{"af":[],"r":[]},"SU":{"af":[],"r":[]},"T9":{"af":[],"r":[]},"aBf":{"ag":["TW"]},"beY":{"aA":[]},"bfR":{"ag":["SU"]},"aAn":{"ag":["T9"]},"bak":{"aA":[]},"Sp":{"af":[],"r":[]},"Tn":{"af":[],"r":[]},"Sy":{"af":[],"r":[]},"bfy":{"ag":["Sp"]},"b6n":{"aA":[]},"bg2":{"ag":["Tn"]},"bbN":{"aA":[]},"bfL":{"ag":["Sy"]},"agg":{"aA":[]},"age":{"af":[],"r":[]},"agf":{"ag":["age"]},"Ta":{"af":[],"r":[]},"aAo":{"ag":["Ta"]},"U_":{"af":[],"r":[]},"bgI":{"ag":["U_"]},"aE2":{"aA":[]},"Ut":{"af":[],"r":[]},"aBE":{"ag":["Ut"]},"bqK":{"aA":[]},"TG":{"af":[],"r":[]},"TI":{"af":[],"r":[]},"bgo":{"ag":["TG"]},"bds":{"aA":[]},"aB1":{"ag":["TI"]},"bdH":{"aA":[]},"a6d":{"at":[],"r":[]},"Uy":{"af":[],"r":[]},"Th":{"af":[],"r":[]},"Sv":{"af":[],"r":[]},"T8":{"af":[],"r":[]},"TU":{"af":[],"r":[]},"U6":{"af":[],"r":[]},"Ur":{"af":[],"r":[]},"TS":{"af":[],"r":[]},"aBQ":{"ag":["Uy"]},"bru":{"aA":[]},"bfY":{"ag":["Th"]},"bmp":{"aA":[]},"bfD":{"ag":["Sv"]},"bfS":{"ag":["T8"]},"bhU":{"aA":[]},"aBb":{"ag":["TU"]},"aBu":{"ag":["U6"]},"bh6":{"ag":["Ur"]},"bgz":{"ag":["TS"]},"b9G":{"at":[],"r":[]},"b3n":{"at":[],"r":[]},"dw":{"at":[],"r":[]},"eF":{"at":[],"r":[]},"at1":{"at":[],"r":[]},"ff":{"at":[],"r":[]},"E1":{"at":[],"r":[]},"To":{"af":[],"r":[]},"aAz":{"ag":["To"]},"bbU":{"aA":[]},"Uu":{"af":[],"r":[]},"bh9":{"ag":["Uu"]},"Uf":{"af":[],"r":[]},"Tp":{"af":[],"r":[]},"U7":{"af":[],"r":[]},"bgX":{"ag":["Uf"]},"bo8":{"aA":[]},"aAA":{"ag":["Tp"]},"b79":{"aA":[]},"bgU":{"ag":["U7"]},"bnH":{"aA":[]},"St":{"af":[],"r":[]},"Tl":{"af":[],"r":[]},"U3":{"af":[],"r":[]},"bfC":{"ag":["St"]},"b6y":{"aA":[]},"bg0":{"ag":["Tl"]},"bbK":{"aA":[]},"bgT":{"ag":["U3"]},"bmZ":{"aA":[]}}'))
C.Ou(b.typeUniverse,JSON.parse('{"me":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.az
return{dw:w("mM<x?>"),e8:w("d_"),G:w("x"),l:w("bs<n,n>"),J:w("bs<n,O>"),I:w("bs<n,I>"),T:w("f8<n>"),Z:w("a0"),M:w("P<d6>"),R:w("P<ag6>"),gh:w("P<aOP>"),x:w("P<a17>"),V:w("P<ab>"),O:w("P<x>"),ey:w("P<Q>"),dh:w("P<R2>"),aJ:w("P<aw<aB>>"),w:w("P<a0>"),h:w("P<ak<x>>"),B:w("P<ak<R2>>"),gO:w("P<ak<ak<O>>>"),bj:w("P<ak<n>>"),b:w("P<ak<O>>"),ez:w("P<a1<n,aB>>"),g:w("P<u>"),bz:w("P<vl>"),ds:w("P<aq9>"),v:w("P<hz>"),U:w("P<+(u,O)>"),ev:w("P<+(u,I)>"),L:w("P<+(n,n)>"),fT:w("P<+(O,r)>"),C:w("P<+(I,n)>"),u:w("P<+(I,I)>"),c:w("P<+(n,n,a0)>"),e:w("P<+(n,O,O,I)>"),o:w("P<+(n,I,n,I)>"),d:w("P<+(n,n,O,O,a1<n,O>)>"),_:w("P<ud>"),q:w("P<cK>"),fQ:w("P<a88>"),s:w("P<n>"),cF:w("P<ap>"),X:w("P<vv>"),D:w("P<a8T>"),p:w("P<r>"),bL:w("P<a9c>"),E:w("P<l5>"),aq:w("P<b6b>"),a_:w("P<a9q>"),cS:w("P<a9x>"),cB:w("P<mZ>"),ba:w("P<a9H>"),d9:w("P<NX>"),bi:w("P<aa_>"),eW:w("P<Bj>"),fY:w("P<Xk>"),aX:w("P<Eu>"),ea:w("P<aaO>"),gB:w("P<abi>"),ed:w("P<Od>"),g4:w("P<bhT>"),aS:w("P<YR>"),ac:w("P<abB>"),cd:w("P<Bt>"),fr:w("P<acs>"),e4:w("P<Zy>"),r:w("P<acx>"),au:w("P<aFc>"),f7:w("P<S>"),n:w("P<O>"),t:w("P<I>"),dS:w("P<aA?>"),d4:w("P<n?>"),gJ:w("co<agf>"),A:w("co<ag<af>>"),bF:w("ak<x>"),gl:w("ak<Q>"),ew:w("ak<aB>"),a:w("ak<@>"),bW:w("ak<I>"),k:w("a1<n,@>"),f:w("a1<@,@>"),bd:w("J<fb,n>"),dv:w("J<n,n>"),fR:w("J<+(O,r),r>"),m:w("iE"),gA:w("yg"),P:w("cp"),K:w("aB"),W:w("vl"),F:w("fb"),fA:w("B0"),N:w("n"),bO:w("ap"),j:w("l3"),Y:w("bl<O>"),cL:w("a8U"),gj:w("cx<n>"),dg:w("e3<qd>"),e3:w("b6B"),a2:w("Bf"),f3:w("qd"),es:w("Ey"),gV:w("mE"),y:w("S"),i:w("O"),z:w("@"),S:w("I"),Q:w("ak<@>?"),fF:w("a1<@,@>?"),cK:w("aB?"),az:w("q2?"),dk:w("n?"),cD:w("O?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aOM=new C.d6(0,0.85)
D.f8M=new C.w("Tap once to start the chain",null,E.R8,null,null,null,null,null,null,null,null,null)
D.aOl=new C.bI(D.aOM,null,null,D.f8M,null)
D.aOD=new C.d6(0,0.1)
D.aPF=new B.aOZ(0,0,0)
D.Im=new B.aOZ(0,0.5,0)
D.aQb=new C.ay(A.bh,1,A.r,-1)
D.aRC=new C.aX(0,1/0,0,290)
D.d05=w([A.ic,A.f0,A.kT],x.O)
D.bI9=new C.a3(A.aw,A.aC,A.w,D.d05,null,null)
D.aSO=new C.o(null,null,null,null,null,D.bI9,A.n)
D.aKA=new C.F(!0,A.c2,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1D=new C.w("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aKA,null,A.L,null,null,null,null,null,null,null)
D.dPB=new C.C(A.ns,D.f1D,null)
D.aXf=new C.cw(A.A,null,null,D.dPB,null)
D.f56=new C.w("Press Drop! and watch them fall from 20 metres.",null,A.kj,null,A.L,null,null,null,null,null,null,null)
D.dPF=new C.C(A.ns,D.f56,null)
D.aXw=new C.cw(A.A,null,null,D.dPF,null)
D.eNj=new C.F(!0,A.j1,null,null,null,null,18,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9x=new C.w("Draw anywhere",null,D.eNj,null,null,null,null,null,null,null,null,null)
D.aXA=new C.cw(A.A,null,null,D.f9x,null)
D.eTy=new C.w("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aKA,null,A.L,null,null,null,null,null,null,null)
D.dQi=new C.C(A.DX,D.eTy,null)
D.aXS=new C.cw(A.A,null,null,D.dQi,null)
D.eLg=new C.F(!0,null,null,null,null,null,21,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZC=new C.w("\u26a1",null,D.eLg,null,null,null,null,null,null,null,null,null)
D.aXV=new C.cw(A.A,null,null,D.eZC,null)
D.a8e=new C.x(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.aZB=new C.x(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.aZW=new C.x(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.t)
D.b_d=new C.x(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.b_X=new C.x(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.Tm=new C.x(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b01=new C.x(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.b05=new C.x(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.b09=new C.x(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.Tn=new C.x(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.b15=new C.x(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.b1a=new C.x(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.b1p=new C.x(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.b2m=new C.x(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.a9h=new C.x(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.b2D=new C.x(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.t)
D.b2M=new C.x(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.b2R=new C.x(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.t)
D.zc=new C.x(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.b3r=new C.x(1,1,0.9686274509803922,0.8,A.t)
D.a9C=new C.x(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.b41=new C.x(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.b48=new C.x(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.a9N=new C.x(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.TP=new C.x(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.b4D=new C.x(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.a9S=new C.x(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.b5_=new C.x(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,A.t)
D.TW=new C.x(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.aa_=new C.x(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.aa3=new C.x(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.t)
D.b5Z=new C.x(1,0.24705882352941178,0.16470588235294117,0.0784313725490196,A.t)
D.b6a=new C.x(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.b6c=new C.x(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.b6g=new C.x(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.aap=new C.x(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.b6G=new C.x(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.Dg=new C.x(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.aaz=new C.x(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.t)
D.b7C=new C.x(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.b7K=new C.x(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.b7N=new C.x(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.b7W=new C.x(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.b7Z=new C.x(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.b85=new C.x(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.Uc=new C.x(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.b8x=new C.x(1,0.24705882352941178,0.3843137254901961,0.07058823529411765,A.t)
D.aba=new C.x(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.b9_=new C.x(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.b9t=new C.x(1,1,0.41568627450980394,0,A.t)
D.b9C=new C.x(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.rw=new C.x(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,A.t)
D.ba0=new C.x(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.bah=new C.x(1,1,0.9529411764705882,0.6274509803921569,A.t)
D.bal=new C.x(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.be5=new C.b8(11e6)
D.V5=new C.N(0,0,7,0)
D.bf7=new C.N(0,0,8,6)
D.acn=new C.N(0,0,9,0)
D.bfE=new C.N(10,0,10,4)
D.bfH=new C.N(10,10,10,0)
D.bfJ=new C.N(10,10,10,6)
D.bfY=new C.N(10,6,10,2)
D.Ve=new C.N(10,6,10,4)
D.bfZ=new C.N(10,6,10,8)
D.bg0=new C.N(10,8,0,10)
D.bgC=new C.N(12,8,8,8)
D.bgI=new C.N(14,0,14,30)
D.acM=new C.N(14,0,14,6)
D.bgJ=new C.N(14,10,10,10)
D.acS=new C.N(14,10,8,12)
D.bhf=new C.N(14,8,14,6)
D.bhp=new C.N(16,120,16,16)
D.bhJ=new C.N(16,4,16,28)
D.bhT=new C.N(16,8,16,12)
D.bkJ=new C.N(4,4,6,2)
D.bkL=new C.N(4,4,8,2)
D.bkT=new C.N(56,10,18,4)
D.blk=new C.N(8,14,8,12)
D.blv=new C.N(8,6,16,0)
D.blx=new C.N(8,8,10,10)
D.eSK=new C.w("REACTION LAB",null,U.aL9,null,null,null,null,A.a2,null,1,null,null)
D.bm9=new C.bH(1,A.br,D.eSK,null)
D.eKc=new C.F(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVF=new C.w("CORE PROTOCOL",null,D.eKc,null,null,null,null,null,null,null,null,null)
D.bml=new C.bH(1,A.br,D.eVF,null)
D.eRv=new C.w("Wire selected",null,A.hf,null,null,null,null,null,null,null,null,null)
D.bna=new C.bH(1,A.br,D.eRv,null)
D.afT=new C.a0(62712,"MaterialIcons",!1)
D.bqm=new C.a0(62878,"MaterialIcons",!1)
D.Xq=new C.a0(62908,"MaterialIcons",!1)
D.bqp=new C.a0(62918,"MaterialIcons",!1)
D.bqq=new C.a0(62931,"MaterialIcons",!1)
D.bqs=new C.a0(62951,"MaterialIcons",!1)
D.bqu=new C.a0(62970,"MaterialIcons",!1)
D.bqJ=new C.a0(63064,"MaterialIcons",!1)
D.bqL=new C.a0(63070,"MaterialIcons",!1)
D.wZ=new C.a0(63128,"MaterialIcons",!1)
D.EF=new C.a0(63726,"MaterialIcons",!1)
D.bs2=new C.a0(983122,"MaterialIcons",!1)
D.bsh=new C.a0(983247,"MaterialIcons",!1)
D.bso=new C.a0(983316,"MaterialIcons",!1)
D.bsu=new C.a0(983415,"MaterialIcons",!1)
D.bsv=new C.a0(983417,"MaterialIcons",!1)
D.bsw=new C.a0(983442,"MaterialIcons",!1)
D.bsx=new C.a0(983443,"MaterialIcons",!1)
D.ah7=new C.a0(983467,"MaterialIcons",!1)
D.bsD=new C.a0(983501,"MaterialIcons",!1)
D.bsO=new C.a0(983616,"MaterialIcons",!1)
D.ahg=new C.a0(983617,"MaterialIcons",!1)
D.bsP=new C.a0(983624,"MaterialIcons",!1)
D.bt0=new C.a0(983776,"MaterialIcons",!1)
D.bti=new C.a0(984561,"MaterialIcons",!1)
D.btR=new C.ad(A.Ak,24,A.aL,null,null,null)
D.bv7=new C.ad(A.m3,21,A.af,null,null,null)
D.bs1=new C.a0(983117,"MaterialIcons",!1)
D.bws=new C.ad(D.bs1,28,A.c,null,null,null)
D.bwI=new C.ad(A.j3,18,null,null,null,null)
D.byq=new C.ad(A.e6,21,A.cF,null,null,null)
D.byF=new C.ad(A.m4,null,A.af,null,null,null)
D.byP=new C.ad(A.Yj,21,A.af,null,null,null)
D.bzE=new C.ad(A.eq,17,A.af,null,null,null)
D.ait=new C.ad(A.eq,19,null,null,null,null)
D.m7=new C.ad(A.uD,21,A.af,null,null,null)
D.bCc=new C.ad(A.j3,21,A.af,null,null,null)
D.bD1=new C.ad(A.fE,20,A.aA,null,null,null)
D.bDE=new C.ad(A.dP,null,A.aL,null,null,null)
D.bDY=new C.ad(A.jM,null,A.aA,null,null,null)
D.cX_=w([A.dv,A.da,A.dv],x.O)
D.bG0=new C.a3(A.a3,A.a7,A.w,D.cX_,null,null)
D.cCz=w([A.c4,A.bv],x.O)
D.bG8=new C.a3(A.aY,A.b1,A.w,D.cCz,null,null)
D.cmF=w([A.aX,A.jC,A.q5],x.O)
D.bGe=new C.a3(A.aY,A.b1,A.w,D.cmF,null,null)
D.bGj=new C.a3(A.aY,A.b1,A.w,A.asn,null,null)
D.cCV=w([A.h6,A.fe],x.O)
D.bGr=new C.a3(A.aY,A.b1,A.w,D.cCV,null,null)
D.aju=new C.a3(A.aY,A.b1,A.w,I.ZY,null,null)
D.cGy=w([A.f0,A.dI,A.cQ],x.O)
D.bGw=new C.a3(A.aY,A.b1,A.w,D.cGy,null,null)
D.bGy=new C.a3(A.aY,A.b1,A.w,A.NC,null,null)
D.cSi=w([A.dA,A.f0],x.O)
D.bGz=new C.a3(A.aY,A.b1,A.w,D.cSi,null,null)
D.cAs=w([A.nT,A.i0],x.O)
D.bH6=new C.a3(A.aY,A.b1,A.w,D.cAs,null,null)
D.cEX=w([A.dZ,A.aE],x.O)
D.bHd=new C.a3(A.aY,A.b1,A.w,D.cEX,null,null)
D.cCi=w([A.eC,A.aF],x.O)
D.ajB=new C.a3(A.aY,A.b1,A.w,D.cCi,null,null)
D.cS_=w([A.eB,A.ij,A.bv],x.O)
D.bHm=new C.a3(A.a3,A.a7,A.w,D.cS_,null,null)
D.cNP=w([A.hz,A.ck,A.bH],x.O)
D.bHp=new C.a3(A.aY,A.b1,A.w,D.cNP,null,null)
D.d_f=w([A.c4,A.c,A.bI],x.O)
D.bHr=new C.a3(A.a3,A.a7,A.w,D.d_f,null,null)
D.cS5=w([A.ll,A.cK],x.O)
D.bHG=new C.a3(A.aY,A.b1,A.w,D.cS5,null,null)
D.c9I=w([A.c4,A.eB],x.O)
D.bHP=new C.a3(A.a3,A.a7,A.w,D.c9I,null,null)
D.cFl=w([A.ic,A.aF,A.ds],x.O)
D.bHU=new C.a3(A.aw,A.aC,A.w,D.cFl,null,null)
D.asZ=w([A.eC,K.q8],x.O)
D.bHX=new C.a3(A.aY,A.b1,A.w,D.asZ,null,null)
D.at4=w([A.aX,A.h4],x.O)
D.bI0=new C.a3(A.aY,A.b1,A.w,D.at4,null,null)
D.bIe=new C.a3(A.aY,A.b1,A.w,F.ajX,null,null)
D.d_J=w([A.h6,A.h4],x.O)
D.ajH=new C.a3(A.aY,A.b1,A.w,D.d_J,null,null)
D.cTg=w([A.dB,A.qa],x.O)
D.bIo=new C.a3(A.aY,A.b1,A.w,D.cTg,null,null)
D.b4H=new C.x(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.aZH=new C.x(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cy3=w([D.b4H,D.aZH],x.O)
D.bIr=new C.a3(A.aY,A.b1,A.w,D.cy3,null,null)
D.cDt=w([A.dv,A.M],x.O)
D.bIA=new C.a3(A.aY,A.b1,A.w,D.cDt,null,null)
D.bIF=new C.a3(A.a3,A.a7,A.w,A.Fw,null,null)
D.bIG=new C.a3(A.a3,A.a7,A.w,A.Nt,null,null)
D.bJ4=new C.a3(A.aw,A.aC,A.w,A.Nt,null,null)
D.b8y=new C.x(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.d0T=w([D.b8y,A.IO],x.O)
D.bJa=new C.a3(A.aY,A.b1,A.w,D.d0T,null,null)
D.cKO=w([A.aF,A.x],x.O)
D.bJf=new C.a3(A.aY,A.b1,A.w,D.cKO,null,null)
D.bJi=new C.a3(A.aY,A.b1,A.w,K.asq,null,null)
D.cYU=w([A.ds,A.u8,A.dI],x.O)
D.bJl=new C.a3(A.aw,A.aC,A.w,D.cYU,null,null)
D.bJr=new C.a3(A.aY,A.b1,A.w,I.apJ,null,null)
D.b82=new C.x(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.b8F=new C.x(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cme=w([A.Jk,D.b82,D.b8F],x.O)
D.bJs=new C.a3(A.aY,A.b1,A.w,D.cme,null,null)
D.cUI=w([A.im,A.fx],x.O)
D.bJE=new C.a3(A.aY,A.b1,A.w,D.cUI,null,null)
D.ca2=w([A.dl,A.h5],x.O)
D.bJI=new C.a3(A.aY,A.b1,A.w,D.ca2,null,null)
D.bJO=new C.a3(A.aw,A.aC,A.w,A.a_G,null,null)
D.cP4=w([A.aJ,A.ai],x.O)
D.bJQ=new C.a3(A.aY,A.b1,A.w,D.cP4,null,null)
D.ajZ=w([0,2,4,6,7,9,11],x.t)
D.bKn=w([0,4,7],x.t)
D.ak2=w([0,4,7,12],x.t)
D.bKo=w([0,4,7,4],x.t)
D.as8=w([A.h3,A.oV],x.O)
D.arJ=w([A.hl,A.cY],x.O)
D.aqe=w([A.bC,A.dI],x.O)
D.cuF=w([A.aL,A.dl],x.O)
D.cAO=w([A.cF,A.f2],x.O)
D.cT7=w([A.bU,A.lO],x.O)
D.apK=w([A.cQ,A.kt],x.O)
D.czw=w([A.bI,A.aI],x.O)
D.bKI=w([D.as8,D.arJ,A.a_1,D.aqe,D.cuF,D.cAO,A.arj,D.cT7,D.apK,D.czw],x.h)
D.ak5=w([1],x.n)
D.bPm=w([120,220,380],x.t)
D.bT6=w([12,16,19,24],x.t)
D.bTg=w([1400,800,450,2400],x.t)
D.bXg=w([1,2,3],x.n)
D.bXr=w([1,-1],x.n)
D.bXs=w([0,0.6,1],x.n)
D.c0A=w([250,450,900,1500],x.t)
D.c3s=w([-0.05,0.05],x.n)
D.dMt=new C.u(26,-8)
D.dMU=new C.u(52,0)
D.dMs=new C.u(26,8)
D.c3P=w([A.J,D.dMt,D.dMU,D.dMs],x.g)
D.b_o=new C.x(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.b8l=new C.x(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.b6I=new C.x(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.baV=new C.x(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.b62=new C.x(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.ap0=w([D.b_o,D.b8l,D.b6I,D.baV,D.b62],x.O)
D.ap3=w(["27\xb0","21\xb0","16\xb0","-2\xb0"],x.s)
D.efw=new C.A("type","Typewriter")
D.e98=new C.A("bounce","Bounce")
D.egf=new C.A("wave","Wave")
D.ehf=new C.A("zoom","Zoom")
D.ch7=w([D.efw,D.e98,D.egf,A.a2J,F.aGD,D.ehf,F.aGF],x.L)
D.chj=w([50,25,75],x.t)
D.cjL=w([A.bU,A.aX,A.dZ,A.bh,A.cQ],x.O)
D.clz=w([1,2,3,4,5,6,7],x.n)
D.cmK=w([0,5,10,15,18,20,25],x.t)
D.eaI=new C.A("fish","Fish")
D.eaK=new C.A("fly","Fireflies")
D.e96=new C.A("bird","Birds")
D.cqR=w([D.eaI,D.eaK,D.e96],x.L)
D.cuV=w([900,500,250,1600],x.t)
D.cyo=w([A.fj,A.bH,A.Jh,A.eu],x.O)
D.cXU=w([A.ai,A.cp],x.O)
D.asB=w([A.aI,A.ai],x.O)
D.d07=w([A.bI,A.bM],x.O)
D.cyp=w([D.at4,D.cXU,D.asB,D.d07],x.h)
D.cyq=w([0.78,1],x.n)
D.aqf=w([0,2,4,7,9,12,14,16],x.t)
D.ffk=new B.Bd("NGMY Family Book","Write your family story","\ud83d\udcd6",A.aB,A.dI)
D.ffj=new B.Bd("NGMY Wallet","Save, send and win coins","\ud83e\ude99",A.dl,A.cE)
D.ffl=new B.Bd("NGMY Games","Play, win and learn","\ud83c\udfae",A.e4,A.b7)
D.ffi=new B.Bd("NGMY Electronics Lab","Build real circuits","\ud83d\udca1",A.cY,A.aX)
D.ffm=new B.Bd("NGMY Advisors","Friendly help, any time","\ud83d\udcac",A.oV,A.bC)
D.ffg=new B.Bd("NGMY Learn","Swahili and more","\ud83c\udf93",A.fb,A.eu)
D.fff=new B.Bd("NGMY Family Tree","Grow your family tree","\ud83c\udf33",A.fx,A.bH)
D.ffh=new B.Bd("NGMY Helper","Ask anything, get an answer","\ud83e\udd16",A.re,A.cQ)
D.cyS=w([D.ffk,D.ffj,D.ffl,D.ffi,D.ffm,D.ffg,D.fff,D.ffh],C.az("P<Bd>"))
D.aqk=w(["A","T","C","G"],x.s)
D.cyY=w(["A","U","C","G"],x.s)
D.ZT=w([A.aE,A.cE,A.bm,A.aX,A.ng],x.O)
D.czv=w([1,2.76,5.4,8.93,13.3],x.n)
D.aqr=w([A.cQ,A.cE,A.bU,A.bh],x.O)
D.cAa=w([A.aF,A.aE,A.cQ,A.cE,A.bm,A.cD,A.cb,A.by,A.IO],x.O)
D.ZW=w([0.04,0.17,0.3],x.n)
D.cAw=w([1,0.6,0.38,0.22,0.12],x.n)
D.cAK=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.Ft=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eop=new B.ud("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eov=new B.ud("Medium engine","A good all-rounder.",0.3,0.9)
D.eou=new B.ud("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Fu=w([D.eop,D.eov,D.eou],x._)
D.e_H=new C.A(6,"Easy")
D.e0e=new C.A(8,"Medium")
D.dXj=new C.A(10,"Hard")
D.cBx=w([D.e_H,D.e0e,D.dXj],x.C)
D.aqD=w([0.55,0.78,1],x.n)
D.cD_=w([0.93,0.975,1],x.n)
D.cDb=w(["\u2600\ufe0f","\u2601\ufe0f","\ud83c\udf27\ufe0f","\u2744\ufe0f"],x.s)
D.cDj=w(["Mama","Baba","Bibi","Babu","Dada","Kaka"],x.s)
D.aqN=w([A.c,A.h4,A.pX,A.aF],x.O)
D.cEw=w([1,0.7,0.45,0.28,0.16,0.1,0.06],x.n)
D.cEx=w([1,0.55,0.32,0.2,0.12,0.07],x.n)
D.fdV=new B.xe("Moon",1737,4291941851)
D.fdS=new B.xe("Earth",6371,4281908728)
D.fdW=new B.xe("Neptune",24622,4284524026)
D.fdX=new B.xe("Saturn",58232,4294829706)
D.fdT=new B.xe("Jupiter",69911,4294677052)
D.fdY=new B.xe("Sun",696340,4294688548)
D.fdZ=new B.xe("Sirius A",119e4,4290763774)
D.fdQ=new B.xe("Arcturus",179e5,4294818420)
D.fdR=new B.xe("Betelgeuse",531e6,4294472049)
D.fdU=new B.xe("UY Scuti",667e6,4293870660)
D.NB=w([D.fdV,D.fdS,D.fdW,D.fdX,D.fdT,D.fdY,D.fdZ,D.fdQ,D.fdR,D.fdU],C.az("P<xe>"))
D.ekm=new C.bz("glow","Glow",A.Xs)
D.eid=new C.bz("rainbow","Rainbow",A.nx)
D.eiy=new C.bz("stars","Stars",A.hW)
D.ehY=new C.bz("sparks","Sparks",A.dP)
D.ejI=new C.bz("fire","Fire",A.uE)
D.cEJ=w([D.ekm,D.eid,D.eiy,D.ehY,D.ejI],x.c)
D.aqR=w([A.bm,A.aE,A.cE,A.da],x.O)
D.aqW=w(["Students build a working TV from a battery and some wires","Family trees grow bigger every week on NGMY","New games arrive in the NGMY Arcade","Solar panels now charge flat batteries in the lab","A step-down converter saves a phone from burning out","The NGMY Wallet makes saving coins simple","Kids learn Swahili with picture cards","Wind turbine lights a whole village in a story"],x.s)
D.cFE=w([0.2,1],x.n)
D.eom=new B.ud("Radar","Shows your height above the ground.",0.1,0)
D.eon=new B.ud("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eok=new B.ud("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.ar_=w([D.eom,D.eon,D.eok],x._)
D.ej3=new C.bz("attract","Attract",A.xg)
D.eiS=new C.bz("scare","Scare",A.rZ)
D.ei6=new C.bz("food","Food",A.t5)
D.bs7=new C.a0(983158,"MaterialIcons",!1)
D.ejm=new C.bz("hunt","Hunt",D.bs7)
D.cGe=w([D.ej3,D.eiS,D.ei6,D.ejm],x.c)
D.dNx=new C.u(-0.1,0.02)
D.dNp=new C.u(0.02,-0.04)
D.dOY=new C.u(0.12,0.02)
D.cGC=w([D.dNx,D.dNp,D.dOY,O.a1T],x.g)
D.cGD=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cGS=w([47,100,220,470,1000],x.n)
D.arg=w([0,2,4,7,9],x.t)
D.Gv={volts:0}
D.a0v=new C.bs(D.Gv,[3],x.J)
D.GR=new C.eP(["b","battery",0.2,0.3,D.a0v])
D.dLc={on:0}
D.d5v=new C.bs(D.dLc,[1],x.J)
D.BJ=new C.eP(["s","switch",0.5,0.3,D.d5v])
D.emJ=new C.eP(["l","bulb",0.8,0.3,A.iP])
D.cCG=w([D.GR,D.BJ,D.emJ],x.d)
D.BI=new C.cH(["b",0,"s",0])
D.elP=new C.cH(["s",1,"l",0])
D.aGJ=new C.cH(["l",1,"b",1])
D.cSa=w([D.BI,D.elP,D.aGJ],x.o)
D.cCa=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.dWG=new B.ma("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cCG,D.cSa,D.cCa)
D.aB4={ohms:0}
D.ayJ=new C.bs(D.aB4,[220],x.J)
D.eme=new C.eP(["r","resistor",0.5,0.3,D.ayJ])
D.emW=new C.eP(["d","led",0.8,0.3,A.iP])
D.cUT=w([D.GR,D.eme,D.emW],x.d)
D.elc=new C.cH(["b",0,"r",0])
D.elJ=new C.cH(["r",1,"d",0])
D.eli=new C.cH(["d",1,"b",1])
D.d1n=w([D.elc,D.elJ,D.eli],x.o)
D.cVh=w(["led","diode","indicator"],x.s)
D.dWN=new B.ma("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.cUT,D.d1n,D.cVh)
D.a1M={level:0}
D.d4U=new C.bs(D.a1M,[0.2],x.J)
D.emk=new C.eP(["p","pot",0.5,0.3,D.d4U])
D.emm=new C.eP(["m","motor",0.8,0.3,A.iP])
D.cCY=w([D.GR,D.emk,D.emm],x.d)
D.elb=new C.cH(["b",0,"p",0])
D.elF=new C.cH(["p",1,"m",0])
D.elC=new C.cH(["m",1,"b",1])
D.cYP=w([D.elb,D.elF,D.elC],x.o)
D.cRV=w(["fan","motor","spin","dimmer"],x.s)
D.dWE=new B.ma("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cCY,D.cYP,D.cRV)
D.a0s=new C.bs(D.a1M,[0.9],x.J)
D.aGQ=new C.eP(["s","solar",0.25,0.3,D.a0s])
D.aGP=new C.eP(["l","bulb",0.75,0.3,A.iP])
D.cFm=w([D.aGQ,D.aGP],x.d)
D.elM=new C.cH(["s",0,"l",0])
D.elB=new C.cH(["l",1,"s",1])
D.cDG=w([D.elM,D.elB],x.o)
D.cZk=w(["solar","sun","without battery","no battery","free"],x.s)
D.dWH=new B.ma("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cFm,D.cDG,D.cZk)
D.emZ=new C.eP(["c","crank",0.25,0.3,D.a0s])
D.cQp=w([D.emZ,D.aGP],x.d)
D.elf=new C.cH(["c",0,"l",0])
D.elA=new C.cH(["l",1,"c",1])
D.cQV=w([D.elf,D.elA],x.o)
D.cQy=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.dWD=new B.ma("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.cQp,D.cQV,D.cQy)
D.d4T=new C.bs(D.a1M,[0.7],x.J)
D.emp=new C.eP(["t","turbine",0.25,0.3,D.d4T])
D.emd=new C.eP(["m","motor",0.75,0.3,A.iP])
D.cLq=w([D.emp,D.emd],x.d)
D.elX=new C.cH(["t",0,"m",0])
D.elD=new C.cH(["m",1,"t",1])
D.cKu=w([D.elX,D.elD],x.o)
D.cPn=w(["wind","turbine","windmill","water","hydro"],x.s)
D.dWA=new B.ma("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.cLq,D.cKu,D.cPn)
D.ayF=new C.bs(D.Gv,[9],x.J)
D.a2M=new C.eP(["b","battery",0.2,0.3,D.ayF])
D.aGO=new C.eP(["r","radio",0.8,0.3,A.iP])
D.cZO=w([D.a2M,D.BJ,D.aGO],x.d)
D.elR=new C.cH(["s",1,"r",0])
D.aGK=new C.cH(["r",1,"b",1])
D.bK7=w([D.BI,D.elR,D.aGK],x.o)
D.cYC=w(["radio","music","listen"],x.s)
D.dWM=new B.ma("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.cZO,D.bK7,D.cYC)
D.d5W=new C.bs(D.Gv,[12],x.J)
D.aGN=new C.eP(["b","battery",0.2,0.3,D.d5W])
D.emK=new C.eP(["t","tv",0.8,0.3,A.iP])
D.cCH=w([D.aGN,D.BJ,D.emK],x.d)
D.elS=new C.cH(["s",1,"t",0])
D.aGL=new C.cH(["t",1,"b",1])
D.cTa=w([D.BI,D.elS,D.aGL],x.o)
D.cZN=w(["tv","television","screen","watch"],x.s)
D.dWx=new B.ma("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cCH,D.cTa,D.cZN)
D.emA=new C.eP(["z","buzzer",0.8,0.3,A.iP])
D.cjB=w([D.GR,D.BJ,D.emA],x.d)
D.elT=new C.cH(["s",1,"z",0])
D.em8=new C.cH(["z",1,"b",1])
D.cye=w([D.BI,D.elT,D.em8],x.o)
D.cX3=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.dWJ=new B.ma("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cjB,D.cye,D.cX3)
D.eml=new C.eP(["h","heater",0.8,0.3,A.iP])
D.cO8=w([D.a2M,D.BJ,D.eml],x.d)
D.elO=new C.cH(["s",1,"h",0])
D.elq=new C.cH(["h",1,"b",1])
D.cyU=w([D.BI,D.elO,D.elq],x.o)
D.c3O=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.dWy=new B.ma("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.cO8,D.cyU,D.c3O)
D.emM=new C.eP(["s","solar",0.2,0.25,D.a0s])
D.d60=new C.bs(D.aB4,[100],x.J)
D.emP=new C.eP(["r","resistor",0.55,0.25,D.d60])
D.emV=new C.eP(["c","capacitor",0.85,0.25,A.iP])
D.emh=new C.eP(["q","resistor",0.55,0.6,D.ayJ])
D.emN=new C.eP(["d","led",0.85,0.6,A.iP])
D.cSQ=w([D.emM,D.emP,D.emV,D.emh,D.emN],x.d)
D.elN=new C.cH(["s",0,"r",0])
D.elI=new C.cH(["r",1,"c",0])
D.elh=new C.cH(["c",1,"s",1])
D.elg=new C.cH(["c",0,"q",0])
D.elH=new C.cH(["q",1,"d",0])
D.elj=new C.cH(["d",1,"c",1])
D.cIB=w([D.elN,D.elI,D.elh,D.elg,D.elH,D.elj],x.o)
D.cPR=w(["capacitor","store","charge","flash"],x.s)
D.dWL=new B.ma("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.cSQ,D.cIB,D.cPR)
D.ems=new C.eP(["b","battery",0.15,0.3,D.a0v])
D.en_=new C.eP(["l1","bulb",0.5,0.3,A.iP])
D.emy=new C.eP(["l2","bulb",0.85,0.3,A.iP])
D.cB1=w([D.ems,D.en_,D.emy],x.d)
D.ela=new C.cH(["b",0,"l1",0])
D.elx=new C.cH(["l1",1,"l2",0])
D.ely=new C.cH(["l2",1,"b",1])
D.cM3=w([D.ela,D.elx,D.ely],x.o)
D.cZD=w(["series","two bulbs","dim"],x.s)
D.dWB=new B.ma("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cB1,D.cM3,D.cZD)
D.dLo={volts:0,charge:1}
D.d64=new C.bs(D.dLo,[1.5,0],x.J)
D.emT=new C.eP(["b","battery",0.75,0.3,D.d64])
D.cAt=w([D.aGQ,D.emT],x.d)
D.elL=new C.cH(["s",0,"b",0])
D.ele=new C.cH(["b",1,"s",1])
D.cIR=w([D.elL,D.ele],x.o)
D.cPY=w(["charge","rechargeable","flat","recharge"],x.s)
D.dWz=new B.ma("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cAt,D.cIR,D.cPY)
D.d5V=new C.bs(D.Gv,[4.5],x.J)
D.emn=new C.eP(["b","battery",0.2,0.3,D.d5V])
D.aGM=new C.eP(["p","phone",0.8,0.3,A.iP])
D.cLg=w([D.emn,D.BJ,D.aGM],x.d)
D.elQ=new C.cH(["s",1,"p",0])
D.a2L=new C.cH(["p",1,"b",1])
D.cW7=w([D.BI,D.elQ,D.a2L],x.o)
D.cXr=w(["phone","charger","usb","mobile"],x.s)
D.dWF=new B.ma("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.cLg,D.cW7,D.cXr)
D.ema=new C.eP(["f","fan",0.8,0.3,A.iP])
D.bX3=w([D.GR,D.ema],x.d)
D.el9=new C.cH(["b",0,"f",0])
D.elo=new C.cH(["f",1,"b",1])
D.czk=w([D.el9,D.elo],x.o)
D.cRU=w(["fan","cool","air","wind"],x.s)
D.dWO=new B.ma("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.bX3,D.czk,D.cRU)
D.emE=new C.eP(["b","battery",0.15,0.2,D.a0v])
D.emb=new C.eP(["a","ammeter",0.5,0.2,A.iP])
D.em9=new C.eP(["l","bulb",0.85,0.2,A.iP])
D.emG=new C.eP(["v","voltmeter",0.5,0.6,A.iP])
D.cQe=w([D.emE,D.emb,D.em9,D.emG],x.d)
D.el7=new C.cH(["b",0,"a",0])
D.el6=new C.cH(["a",1,"l",0])
D.elZ=new C.cH(["v",0,"l",0])
D.em_=new C.cH(["v",1,"l",1])
D.cII=w([D.el7,D.el6,D.aGJ,D.elZ,D.em_],x.o)
D.d1m=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.dWK=new B.ma("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.cQe,D.cII,D.d1m)
D.en2=new C.eP(["b","battery",0.15,0.2,D.ayF])
D.emr=new C.eP(["t","tv",0.55,0.2,A.iP])
D.ayG=new C.bs(D.Gv,[5],x.J)
D.emf=new C.eP(["c","buck",0.4,0.5,D.ayG])
D.emt=new C.eP(["p","phone",0.8,0.5,A.iP])
D.cGF=w([D.en2,D.emr,D.emf,D.emt],x.d)
D.eld=new C.cH(["b",0,"t",0])
D.aGH=new C.cH(["b",0,"c",0])
D.aGI=new C.cH(["c",1,"p",0])
D.cLd=w([D.eld,D.aGL,D.aGH,D.aGI,D.a2L],x.o)
D.cEY=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.dWC=new B.ma("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cGF,D.cLd,D.cEY)
D.emg=new C.eP(["c","buck",0.5,0.3,D.ayG])
D.cyK=w([D.aGN,D.emg,D.aGM],x.d)
D.cD5=w([D.aGH,D.aGI,D.a2L],x.o)
D.c7b=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.dWw=new B.ma("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cyK,D.cD5,D.c7b)
D.emw=new C.eP(["d","diode",0.5,0.3,A.iP])
D.cMg=w([D.a2M,D.emw,D.aGO],x.d)
D.el8=new C.cH(["b",0,"d",0])
D.elk=new C.cH(["d",1,"r",0])
D.cm4=w([D.el8,D.elk,D.aGK],x.o)
D.cEG=w(["diode","protect","backwards","one way"],x.s)
D.dWI=new B.ma("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.cMg,D.cm4,D.cEG)
D.NF=w([D.dWG,D.dWN,D.dWE,D.dWH,D.dWD,D.dWA,D.dWM,D.dWx,D.dWJ,D.dWy,D.dWL,D.dWB,D.dWz,D.dWF,D.dWO,D.dWK,D.dWC,D.dWw,D.dWI],C.az("P<ma>"))
D.dI_=new B.wT("NGMY Tree Story","A family grows, one branch at a time")
D.dHV=new B.wT("Coin Hero","A little coin saves up and wins the day")
D.dI2=new B.wT("Space Voyage","The NGMY rocket explores the stars")
D.dHU=new B.wT("Ocean Friends","Fish, bubbles and a friendly whale")
D.dHW=new B.wT("Rainy Village","Storm clouds, then a rainbow")
D.dHY=new B.wT("Spark Adventure","Follow a spark round a circuit")
D.dHX=new B.wT("Fireworks Night","Colour bursts over the city")
D.dI1=new B.wT("Little Train","A train rolls past the hills")
D.dHZ=new B.wT("Robot Disco","A robot dances to the beat")
D.dI0=new B.wT("Garden Time","Flowers grow and butterflies fly")
D.NG=w([D.dI_,D.dHV,D.dI2,D.dHU,D.dHW,D.dHY,D.dHX,D.dI1,D.dHZ,D.dI0],C.az("P<wT>"))
D.cIm=w([1,0.6,0.45,0.3,0.22,0.15],x.n)
D.fo0=new B.EL("Moon",1.62,A.eB,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.fnZ=new B.EL("Mars",3.71,A.aE,"Mars has about 38 percent of Earth's gravity.")
D.fo1=new B.EL("Mercury",3.7,A.jB,"Mercury is small, so its gravity is like Mars.")
D.fnW=new B.EL("Venus",8.87,A.aL,"Venus is almost as heavy as Earth, with strong gravity.")
D.fnY=new B.EL("Earth",9.81,A.aX,"On Earth gravity is strong, and the air also slows you down.")
D.fo_=new B.EL("Neptune",11.15,A.da,"Neptune pulls a little harder than Earth.")
D.fnX=new B.EL("Jupiter",24.79,A.cQ,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.qx=w([D.fo0,D.fnZ,D.fo1,D.fnW,D.fnY,D.fo_,D.fnX],C.az("P<EL>"))
D.arr=w([A.bU,A.cE,A.aE,A.bC,A.cQ],x.O)
D.cIA=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a_9=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cJc=w([0.2,0.5,0.8],x.n)
D.cJm=w([1,2,3,4,5,6],x.n)
D.bqE=new C.a0(63040,"MaterialIcons",!1)
D.eiV=new C.bz("peg","Peg",D.bqE)
D.eia=new C.bz("bar","Bar",P.Ap)
D.eiA=new C.bz("erase","Erase",A.L0)
D.cJn=w([D.eiV,D.eia,D.eiA],x.c)
D.eqQ=new C.cK(A.bg,A.J,4)
D.cJx=w([D.eqQ],x.q)
D.aru=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.cJH=w(["Sunny","Cloudy","Rainy","Snowy"],x.s)
D.aO5=new B.IS(0,"accordion")
D.czC=w([A.j5,A.Aq,A.Ae],x.w)
D.cG6=w(["Mail","SMS","Ad"],x.s)
D.cA3=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.fmd=new B.zx(D.aO5,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.as8,D.czC,D.cG6,D.cA3)
D.a61=new B.IS(1,"flip")
D.cPL=w([A.qp,Z.EV,A.uK],x.w)
D.cKX=w(["Unlock","Verify","Secure"],x.s)
D.cyH=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.fmc=new B.zx(D.a61,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.arJ,D.cPL,D.cKX,D.cyH)
D.aO6=new B.IS(2,"towers")
D.cJQ=w([A.xb,A.pf,A.hV],x.w)
D.cJt=w(["Save","Grow","Earn"],x.s)
D.cmT=w(["","",""],x.s)
D.fme=new B.zx(D.aO6,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a_1,D.cJQ,D.cJt,D.cmT)
D.a62=new B.IS(3,"assemble")
D.cQB=w([A.mK,A.ho,A.dP],x.w)
D.cFx=w(["Launch","Charge","Shine"],x.s)
D.cNm=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.fmg=new B.zx(D.a62,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aqe,D.cQB,D.cFx,D.cNm)
D.aO7=new B.IS(4,"carousel")
D.cQq=w([A.b7,A.il],x.O)
D.cGg=w([A.m3,A.agk,A.Yd],x.w)
D.cBn=w(["Explore","Discover","Learn"],x.s)
D.cLl=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.fmb=new B.zx(D.aO7,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.cQq,D.cGg,D.cBn,D.cLl)
D.aO8=new B.IS(5,"burst")
D.cJp=w([A.jz,A.rm],x.O)
D.czZ=w([A.kZ,A.m1,A.hU],x.w)
D.cAh=w(["Cheer","Win","Love"],x.s)
D.cCg=w(["Make some noise","First place","Share the joy"],x.s)
D.fmf=new B.zx(D.aO8,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cJp,D.czZ,D.cAh,D.cCg)
D.arv=w([D.fmd,D.fmc,D.fme,D.fmg,D.fmb,D.fmf],C.az("P<zx>"))
D.eiX=new C.bz("skin","Skin",A.agl)
D.ek9=new C.bz("muscle","Muscles",A.Ld)
D.ejW=new C.bz("organ","Organs",A.hU)
D.bq5=new C.a0(62747,"MaterialIcons",!1)
D.ejZ=new C.bz("bone","Skeleton",D.bq5)
D.ekf=new C.bz("vessel","Blood vessels",A.uN)
D.cJV=w([D.eiX,D.ek9,D.ejW,D.ejZ,D.ekf],x.c)
D.cKL=w([A.h6,A.qa],x.O)
D.cKN=w([A.bk,A.aZ,A.dk],x.O)
D.eoo=new B.ud("Simple legs","Light. Land gently.",0.15,0.2)
D.eoq=new B.ud("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eot=new B.ud("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.AM=w([D.eoo,D.eoq,D.eot],x._)
D.cLt=w([1.77,3.55,7.15,16.7],x.n)
D.cNK=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.ef0=new C.A("spiral","Spiral")
D.e_F=new C.A("barred","Barred spiral")
D.eae=new C.A("elliptical","Elliptical")
D.cOo=w([D.ef0,D.e_F,D.eae],x.L)
D.ekS=new C.cH(["beat",0.18,0.28,0])
D.elU=new C.cH(["burst",0.7,0.2,0])
D.em3=new C.cH(["delay",0.45,0.5,1])
D.elE=new C.cH(["ripple",0.75,0.6,3])
D.cFg=w([D.ekS,D.elU,D.em3,D.elE],x.e)
D.a2E=new C.A(2,3)
D.cPb=w([L.mS,I.GQ,D.a2E],x.u)
D.fll=new B.Ey("First spark","A clock lights a burst and a ripple",D.cFg,D.cPb)
D.eln=new C.cH(["beat",0.15,0.3,1])
D.ekx=new C.cH(["ripple",0.62,0.15,0])
D.em0=new C.cH(["delay",0.4,0.45,0])
D.el3=new C.cH(["ripple",0.7,0.45,0])
D.ekO=new C.cH(["delay",0.4,0.7,1])
D.elG=new C.cH(["shake",0.75,0.75,0])
D.d_u=w([D.eln,D.ekx,D.em0,D.el3,D.ekO,D.elG],x.e)
D.dY8=new C.A(2,4)
D.aGx=new C.A(4,5)
D.cIr=w([L.mS,I.GQ,D.a2E,D.dY8,D.aGx],x.u)
D.fln=new B.Ey("Heartbeat","Two thumps, then a shake",D.d_u,D.cIr)
D.ekX=new C.cH(["dice",0.15,0.7,1])
D.em5=new C.cH(["echo",0.4,0.7,0])
D.el2=new C.cH(["comet",0.7,0.5,4])
D.elV=new C.cH(["burst",0.72,0.2,1])
D.ell=new C.cH(["burst",0.3,0.25,0])
D.ekY=new C.cH(["pop",0.55,0.85,0])
D.c3n=w([D.ekX,D.em5,D.el2,D.elV,D.ell,D.ekY],x.e)
D.dXB=new C.A(1,3)
D.dXC=new C.A(1,4)
D.aGw=new C.A(0,5)
D.cQl=w([L.mS,I.vb,D.dXB,D.dXC,D.aGw],x.u)
D.flm=new B.Ey("Fireworks","Dice launch comets that burst in colour",D.c3n,D.cQl)
D.el0=new C.cH(["beat",0.15,0.2,2])
D.elu=new C.cH(["chance",0.4,0.2,0])
D.ekU=new C.cH(["ball",0.7,0.12,3])
D.ekH=new C.cH(["chance",0.4,0.5,1])
D.em4=new C.cH(["ball",0.3,0.08,1])
D.ekA=new C.cH(["ripple",0.7,0.55,3])
D.bXt=w([D.el0,D.elu,D.ekU,D.ekH,D.em4,D.ekA],x.e)
D.a2F=new C.A(3,4)
D.dY9=new C.A(2,5)
D.cjl=w([L.mS,I.vb,I.a2D,D.a2F,D.dY9],x.u)
D.flk=new B.Ey("Rain","Balls fall at random and splash",D.bXt,D.cjl)
D.elv=new C.cH(["beat",0.12,0.45,2])
D.elW=new C.cH(["toggle",0.38,0.2,0])
D.em2=new C.cH(["wash",0.7,0.15,4])
D.ekW=new C.cH(["count3",0.38,0.45,0])
D.elY=new C.cH(["burst",0.72,0.4,0])
D.elm=new C.cH(["light",0.55,0.7,1])
D.ekI=new C.cH(["pop",0.8,0.8,4])
D.cSO=w([D.elv,D.elW,D.em2,D.ekW,D.elY,D.elm,D.ekI],x.e)
D.dYu=new C.A(3,6)
D.c_A=w([L.mS,I.vb,I.a2D,D.a2F,D.aGw,D.dYu],x.u)
D.fli=new B.Ey("Disco","A beat drives lights, washes and bursts",D.cSO,D.c_A)
D.em7=new C.cH(["button",0.12,0.2,0])
D.ekC=new C.cH(["delay",0.34,0.2,1])
D.em6=new C.cH(["light",0.56,0.2,1])
D.em1=new C.cH(["delay",0.56,0.45,1])
D.elw=new C.cH(["ball",0.34,0.6,0])
D.ekG=new C.cH(["delay",0.34,0.8,1])
D.ekw=new C.cH(["burst",0.7,0.8,5])
D.bKL=w([D.em7,D.ekC,D.em6,D.em1,D.elw,D.ekG,D.ekw],x.e)
D.e_q=new C.A(5,6)
D.cXc=w([L.mS,I.vb,D.a2E,D.a2F,D.aGx,D.e_q],x.u)
D.flj=new B.Ey("Domino","Tap the button and watch it run down the line",D.bKL,D.cXc)
D.arN=w([D.fll,D.fln,D.flm,D.flk,D.fli,D.flj],C.az("P<Ey>"))
D.cOw=w([0.05,0.15,0.25],x.n)
D.cOK=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.flG=new B.Bu("VOLTS (V)","The push that moves electricity round a loop. Like water pressure in a pipe. A bigger battery has more volts.","9 V = a strong push",1.4)
D.flA=new B.Bu("AMPS (A)","How much electricity flows past each second. Like how much water runs through the pipe.","0.5 A = half an amp",1)
D.flH=new B.Bu("OHMS (\u03a9)","How much a part holds the flow back. A resistor is made just to do this.","Big \u03a9 = small flow",0.5)
D.flD=new B.Bu("OHM'S LAW","Volts, amps and ohms are linked. If you know two, you can work out the third.","V = I \xd7 R",1)
D.flC=new B.Bu("WATTS (W)","Power is how fast energy is used. Multiply the volts by the amps.","W = V \xd7 I",1.2)
D.flF=new B.Bu("SAFETY","Too many volts burn a gadget. A step-down converter brings the volts down so a phone is safe on a 9 V battery.","9 V \u2192 5 V",1)
D.flE=new B.Bu("DIODES","A diode lets electricity go one way only. It drops about 0.7 V and protects parts from being wired backwards.","\u2192|\u2192 one way",0.9)
D.flB=new B.Bu("FUSES","A fuse is the weak link on purpose. It melts first, so the loop breaks and nothing catches fire.","Fuse melts, parts live",0.9)
D.cOZ=w([D.flG,D.flA,D.flH,D.flD,D.flC,D.flF,D.flE,D.flB],C.az("P<Bu>"))
D.cPm=w([1.5,3,4.5,9,12],x.n)
D.cPo=w(["Mountain walk","Sunset at the beach","City lights","Forest trail"],x.s)
D.ehL=new C.bz("dice","Dice",A.m0)
D.eiG=new C.bz("coin","Coin",E.x5)
D.eka=new C.bz("num","Number",A.xe)
D.cPw=w([D.ehL,D.eiG,D.eka],x.c)
D.cPz=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fe_=new B.Nv("Moon",1.62,0,4291941851)
D.fe0=new B.Nv("Mars",3.71,0.01,4294472049)
D.fe1=new B.Nv("Earth",9.81,1,4281908728)
D.fe3=new B.Nv("Jupiter",24.79,1.4,4294677052)
D.fe2=new B.Nv("Sun",274,2,4294688548)
D.xE=w([D.fe_,D.fe0,D.fe1,D.fe3,D.fe2],C.az("P<Nv>"))
D.arT=w([A.cF,A.aL,A.bh,A.aX,A.bC,A.bU,A.cQ,A.hl],x.O)
D.dJY={H:0}
D.d5w=new C.bs(D.dJY,[2],x.I)
D.d6Z=new B.rC("Hydrogen","H\u2082",D.d5w,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.dJZ={H:0,Cl:1}
D.d5I=new C.bs(D.dJZ,[1,1],x.I)
D.d70=new B.rC("Hydrogen chloride","HCl",D.d5I,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.dK_={H:0,O:1}
D.d5f=new C.bs(D.dK_,[2,1],x.I)
D.d71=new B.rC("Water","H\u2082O",D.d5f,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.dKb={N:0,H:1}
D.d63=new C.bs(D.dKb,[1,3],x.I)
D.d79=new B.rC("Ammonia","NH\u2083",D.d63,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a1L={C:0,H:1}
D.d5Z=new C.bs(D.a1L,[1,4],x.I)
D.d72=new B.rC("Methane","CH\u2084",D.d5Z,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.dK0={H:0,S:1}
D.d4o=new C.bs(D.dK0,[2,1],x.I)
D.d78=new B.rC("Hydrogen sulfide","H\u2082S",D.d4o,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.dKg={O:0}
D.d61=new C.bs(D.dKg,[2],x.I)
D.d7a=new B.rC("Oxygen","O\u2082",D.d61,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.dKa={N:0}
D.d5x=new C.bs(D.dKa,[2],x.I)
D.d7_=new B.rC("Nitrogen","N\u2082",D.d5x,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.dJO={C:0,O:1}
D.d69=new C.bs(D.dJO,[1,2],x.I)
D.d76=new B.rC("Carbon dioxide","CO\u2082",D.d69,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aB1={C:0,H:1,O:2}
D.d4a=new C.bs(D.aB1,[1,2,1],x.I)
D.d77=new B.rC("Formaldehyde","CH\u2082O",D.d4a,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.d5Y=new C.bs(D.a1L,[2,4],x.I)
D.d74=new B.rC("Ethene","C\u2082H\u2084",D.d5Y,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.d5X=new C.bs(D.a1L,[2,6],x.I)
D.d73=new B.rC("Ethane","C\u2082H\u2086",D.d5X,"Two carbons joined by a single bond, each holding three hydrogens.")
D.d4b=new C.bs(D.aB1,[1,4,1],x.I)
D.d75=new B.rC("Methanol","CH\u2083OH",D.d4b,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a_o=w([D.d6Z,D.d70,D.d71,D.d79,D.d72,D.d78,D.d7a,D.d7_,D.d76,D.d77,D.d74,D.d73,D.d75],C.az("P<rC>"))
D.cQr=w([A.bU,A.aX,A.dZ,A.bh],x.O)
D.d8H=new B.Ar("NGMY Ads","\ud83d\udce2","Ads for everything NGMY",A.bU)
D.d8C=new B.Ar("Clock","\ud83d\udd52","The real time, right now",A.aX)
D.d8A=new B.Ar("Weather","\u26c5","Sun, cloud, rain and snow",A.aL)
D.d8B=new B.Ar("Music","\ud83c\udfb5","NGMY Beats",A.bC)
D.d8G=new B.Ar("Photos","\ud83d\uddbc\ufe0f","A slideshow of places",A.bq)
D.d8E=new B.Ar("Arcade","\ud83d\udd79\ufe0f","Pong plays itself",A.cF)
D.d8F=new B.Ar("News","\ud83d\udcf0","NGMY News today",A.aJ)
D.d8D=new B.Ar("School","\ud83c\udf93","Learn electricity",A.bh)
D.ta=w([D.d8H,D.d8C,D.d8A,D.d8B,D.d8G,D.d8E,D.d8F,D.d8D],C.az("P<Ar>"))
D.dQT=new B.fb("battery","Battery","\ud83d\udd0b",A.bh,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.dQX=new B.fb("solar","Solar panel","\u2600\ufe0f",A.cE,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.dRp=new B.fb("crank","Hand crank","\ud83d\udd04",A.cQ,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.dR7=new B.fb("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aX,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.dQP=new B.fb("buck","Step-down converter","\ud83d\udd3d",A.hl,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.dR6=new B.fb("regulator","5 V regulator","\ud83e\uddca",A.bI,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.dRt=new B.fb("diode","Diode","\u27a1\ufe0f",A.aL,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.dRe=new B.fb("ldr","Light sensor","\ud83c\udf1e",A.dZ,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.dR_=new B.fb("switch","Switch","\ud83c\udf9a\ufe0f",A.bC,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.dRq=new B.fb("fuse","Fuse","\ud83e\uddef",A.cF,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.dQI=new B.fb("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hl,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.dRf=new B.fb("resistor","Resistor","\u3030\ufe0f",A.aL,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.dRh=new B.fb("bulb","Light bulb","\ud83d\udca1",A.dZ,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.dQZ=new B.fb("led","LED","\ud83d\udd34",A.aE,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.dR0=new B.fb("motor","Motor","\u2699\ufe0f",A.bI,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.dRc=new B.fb("buzzer","Buzzer","\ud83d\udd14",A.bU,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.dQU=new B.fb("heater","Heater","\ud83d\udd25",A.cQ,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.dR9=new B.fb("capacitor","Capacitor","\ud83e\udeab",A.cC,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.dR2=new B.fb("radio","Radio","\ud83d\udcfb",A.ng,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.dRx=new B.fb("tv","TV","\ud83d\udcfa",A.b7,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.dQO=new B.fb("voltmeter","Voltmeter","\ud83e\udded",A.bq,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.dQS=new B.fb("ammeter","Ammeter","\ud83d\udcdf",A.aL,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.dQW=new B.fb("fan","Fan","\ud83c\udf00",A.aX,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.dRv=new B.fb("speaker","Speaker","\ud83d\udd0a",A.bU,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.dRm=new B.fb("clock","Digital clock","\u23f0",A.bh,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.dR5=new B.fb("calculator","Calculator","\ud83e\uddee",A.IJ,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.dRy=new B.fb("phone","Phone charging","\ud83d\udcf1",A.cC,"Charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.dRu=new B.fb("router","WiFi router","\ud83d\udcf6",A.hl,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.dRz=new B.fb("siren","Siren","\ud83d\udea8",A.aE,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.dQK=new B.fb("toycar","Toy car","\ud83d\ude97",A.cQ,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.dRA=new B.fb("kettle","Kettle","\ud83e\uded6",A.o_,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.dQR=new B.fb("lamp","Desk lamp","\ud83e\ude94",A.dZ,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.dQY=new B.fb("lights","Party lights","\ud83c\udf84",A.ng,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.dR3=new B.fb("fridge","Fridge","\ud83e\uddca",A.h6,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.dQM=new B.fb("washer","Washing machine","\ud83e\udee7",A.cC,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.dRn=new B.fb("blender","Blender","\ud83e\udd64",A.cF,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.dR1=new B.fb("drone","Drone","\ud83d\ude81",A.bI,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.dQQ=new B.fb("drill","Power drill","\ud83d\udd29",A.aL,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.dR4=new B.fb("torch","Torch","\ud83d\udd26",A.bH,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.dRk=new B.fb("neon","Neon sign","\ud83e\udea7",A.bU,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.dQN=new B.fb("microwave","Microwave","\ud83c\udf72",A.cQ,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.dRg=new B.fb("doorbell","Doorbell","\ud83d\udd14",A.cE,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.dQV=new B.fb("camera","Security camera","\ud83d\udcf7",A.ai,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.dRb=new B.fb("console","Game console","\ud83c\udfae",A.bC,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.dRo=new B.fb("heartmon","Heart monitor","\ud83e\ude7a",A.hk,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.dQL=new B.fb("aquarium","Aquarium","\ud83d\udc20",A.b7,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.dR8=new B.fb("lighthouse","Lighthouse","\ud83d\uddfc",A.dZ,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.dRd=new B.fb("discoball","Disco ball","\ud83e\udea9",A.ng,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.dRs=new B.fb("robot","Robot","\ud83e\udd16",A.aX,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.dQJ=new B.fb("toaster","Toaster","\ud83c\udf5e",A.e_,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.dRw=new B.fb("ledstrip","LED strip","\ud83c\udf08",A.bU,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.dRj=new B.fb("pump","Water pump","\ud83d\udeb0",A.aX,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.dRa=new B.fb("hairdryer","Hair dryer","\ud83d\udca8",A.jz,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.dRi=new B.fb("headphones","Headphones","\ud83c\udfa7",A.bC,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.dRl=new B.fb("smartwatch","Smart watch","\u231a",A.bq,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.dRr=new B.fb("tablet","Tablet","\ud83d\udcf2",A.cC,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.NW=w([D.dQT,D.dQX,D.dRp,D.dR7,D.dQP,D.dR6,D.dRt,D.dRe,D.dR_,D.dRq,D.dQI,D.dRf,D.dRh,D.dQZ,D.dR0,D.dRc,D.dQU,D.dR9,D.dR2,D.dRx,D.dQO,D.dQS,D.dQW,D.dRv,D.dRm,D.dR5,D.dRy,D.dRu,D.dRz,D.dQK,D.dRA,D.dQR,D.dQY,D.dR3,D.dQM,D.dRn,D.dR1,D.dQQ,D.dR4,D.dRk,D.dQN,D.dRg,D.dQV,D.dRb,D.dRo,D.dQL,D.dR8,D.dRd,D.dRs,D.dQJ,D.dRw,D.dRj,D.dRa,D.dRi,D.dRl,D.dRr],C.az("P<fb>"))
D.cRj=w([],x.x)
D.cRk=w([],x.B)
D.a_y=w([],x.D)
D.cRF=w([0,0.46,0.82],x.n)
D.cRQ=w([5,10,15,25,45,60],x.t)
D.cS8=w([-0.045,0.03,-0.015],x.n)
D.cSw=w([0.9,0.97,1],x.n)
D.asf=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.td=w([0.05,0.2,0.35],x.n)
D.cAl=w([D.Dg,D.Dg],x.O)
D.cFd=w([A.Dr,A.M],x.O)
D.cEj=w([A.fT,A.hz],x.O)
D.cyE=w([A.il,A.nf],x.O)
D.bX1=w([A.lO,A.ds],x.O)
D.asg=w([D.cAl,D.cFd,D.cEj,D.cyE,D.bX1],x.h)
D.fdO=new B.uq("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fdP=new B.uq("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fdG=new B.uq("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fdN=new B.uq("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fdL=new B.uq("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fdH=new B.uq("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fdM=new B.uq("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fdI=new B.uq("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fdK=new B.uq("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fdJ=new B.uq("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.AS=w([D.fdO,D.fdP,D.fdG,D.fdN,D.fdL,D.fdH,D.fdM,D.fdI,D.fdK,D.fdJ],C.az("P<uq>"))
D.b5K=new C.x(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.cTy=w([D.Dg,D.b5K,D.a9C,A.a9e],x.O)
D.dX1=new C.A(0,"AND")
D.dXD=new C.A(1,"Adder")
D.dYa=new C.A(2,"Blinker")
D.dYv=new C.A(3,"Memory")
D.cV3=w([D.dX1,D.dXD,D.dYa,D.dYv],x.C)
D.asr=w([-104,0,104],x.n)
D.ass=w([-14,3],x.n)
D.cVt=w([-16,16],x.n)
D.a_L=w([-1,1],x.n)
D.ast=w([-22,22],x.n)
D.asu=w([-24,24],x.n)
D.cVx=w([-5,5],x.n)
D.cVy=w([-8,0,8],x.n)
D.cVz=w([-8,8],x.n)
D.asw=w([-92,0,92],x.n)
D.cVT=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eol=new B.ud("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eos=new B.ud("Medium tank","Balanced.",0.35,1)
D.eor=new B.ud("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Oe=w([D.eol,D.eos,D.eor],x._)
D.cWa=w([1,2,3,4,6,8],x.n)
D.mN=w([0.04,0.2,0.36],x.n)
D.asG=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.cWZ=w([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],x.n)
D.ejV=new C.bz(D.aO5,"Fold",E.ahi)
D.eja=new C.bz(D.a61,"Flip",A.Ev)
D.bqo=new C.a0(62889,"MaterialIcons",!1)
D.ek8=new C.bz(D.aO6,"Rise",D.bqo)
D.ahw=new C.a0(983870,"MaterialIcons",!1)
D.ehn=new C.bz(D.a62,"Assemble",D.ahw)
D.ehw=new C.bz(D.aO7,"Spin",D.afT)
D.eht=new C.bz(D.aO8,"Pop",A.kZ)
D.cX9=w([D.ejV,D.eja,D.ek8,D.ehn,D.ehw,D.eht],C.az("P<+(IS,n,a0)>"))
D.asL=w([A.bU,A.dZ,A.bq,A.aX,A.bC,A.cF],x.O)
D.cXk=w([A.aX,A.cQ,A.cQ,A.bh],x.O)
D.cXw=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.ego=new C.A("Make the output turn HALF as fast as the input.",0.5)
D.e2A=new C.A("Make the output turn TWICE as fast.",2)
D.dXN=new C.A("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.efa=new C.A("Make the output turn 4 times faster.",4)
D.e7T=new C.A("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.eaO=new C.A("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.e9n=new C.A("Make the output turn 3 times faster.",3)
D.ea5=new C.A("Make the output spin at the same speed as the input, using four different gears.",1)
D.asQ=w([D.ego,D.e2A,D.dXN,D.efa,D.e7T,D.eaO,D.e9n,D.ea5],C.az("P<+(n,O)>"))
D.cYs=w([3,4.5,5,6,9],x.n)
D.cYA=w([1,2,3,4,5,6,7,8],x.n)
D.Og=w([A.bU,A.cE,A.bh,A.aX,A.bC,A.cF,A.c,A.cQ],x.O)
D.cZh=w(["solar","turbine","crank","pot"],x.s)
D.cZB=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.cZF=w([0,0.35,0.75,1],x.n)
D.cZQ=w([A.aE,A.ck,A.cE,A.bm,A.da,A.b3],x.O)
D.ehG=new C.bz("drop","Drop",D.ah7)
D.ehI=new C.bz("weight","Weight",O.ahy)
D.ek3=new C.bz("cannon","Newton's cannon",A.agx)
D.d_e=w([D.ehG,D.ehI,D.ek3],x.c)
D.edR=new C.A("piano","Piano")
D.edx=new C.A("organ","Organ")
D.e94=new C.A("bell","Bell")
D.edT=new C.A("pluck","Pluck")
D.ef9=new C.A("synth","Synth")
D.eaJ=new C.A("flute","Flute")
D.at7=w([D.edR,D.edx,D.e94,D.edT,D.ef9,D.eaJ],x.L)
D.d_F=w(["volts","level","ohms","on"],x.s)
D.d0N=w([A.j5,A.Aq,A.Ae,A.qp,Z.EV,A.uK,A.xb,A.pf,A.hV,A.mK,A.ho,A.dP,A.hU,A.hW,A.m1,A.m2,A.xc,A.qt,A.lu,A.En,A.t5,A.Lf,A.Ag,A.ah2,A.L4,A.x8,A.Ld,A.agI,K.ahs,A.kZ],x.w)
D.d1i=w([1,0.18,0.06],x.n)
D.d1F=w([0.72,1],x.n)
D.d1P=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.dLh={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.d44=new C.bs(D.dLh,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aB3={A:0,T:1,C:2,G:3}
D.a0n=new C.bs(D.aB3,["U","A","G","C"],x.l)
D.d4c=new C.bs(D.aB3,["T","A","G","C"],x.l)
D.dK7={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.cQv=w([0,2,4,5,7,9,11],x.t)
D.czH=w([0,2,3,5,7,8,10],x.t)
D.cVf=w([0,3,5,6,7,10],x.t)
D.AY=new C.bs(D.dK7,[D.arg,D.cQv,D.czH,D.cVf,D.ajZ],C.az("bs<n,ak<I>>"))
D.dL5={A:0,T:1,U:2,C:3,G:4}
D.d4r=new C.bs(D.dL5,[A.cF,A.cC,A.cC,A.aL,A.bh],C.az("bs<n,x>"))
D.dJz={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.ffA=new B.xg("Switch",D.ahg,A.cE,0,"Tap it to turn it ON or OFF.")
D.ffw=new B.xg("Blinker",A.oe,A.bq,0,"Turns itself ON and OFF. Tap to change the speed.")
D.ffx=new B.xg("AND",D.ahw,A.cC,2,"ON only when BOTH inputs are ON.")
D.brQ=new C.a0(63671,"MaterialIcons",!1)
D.ffv=new B.xg("OR",D.brQ,A.bC,2,"ON when EITHER input is ON.")
D.ffy=new B.xg("XOR",H.Xx,A.bU,2,"ON when the inputs are DIFFERENT.")
D.ffs=new B.xg("NAND",A.rW,A.aX,2,"OFF only when BOTH inputs are ON.")
D.bqX=new C.a0(63176,"MaterialIcons",!1)
D.fft=new B.xg("NOR",D.bqX,A.hl,2,"ON only when BOTH inputs are OFF.")
D.ffu=new B.xg("NOT",V.EP,A.cQ,1,"Flips the signal: ON becomes OFF.")
D.ffz=new B.xg("Light",A.Ak,A.dZ,1,"Glows when its input is ON.")
D.ffB=new B.xg("Buzzer",A.ny,A.cF,1,"Beeps while its input is ON.")
D.xQ=new C.bs(D.dJz,[D.ffA,D.ffw,D.ffx,D.ffv,D.ffy,D.ffs,D.fft,D.ffu,D.ffz,D.ffB],C.az("bs<n,xg>"))
D.dL3={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.ei1=new C.bz(3,20,1.9)
D.ehC=new C.bz(33,90,1.6)
D.ekr=new C.bz(52,15,3.2)
D.ekp=new C.bz(45,-100,1.8)
D.ej4=new C.bz(-15,-60,1.9)
D.eiC=new C.bz(-25,140,2.4)
D.eiu=new C.bz(-82,0,2.2)
D.ayx=new C.bs(D.dL3,[D.ei1,D.ehC,D.ekr,D.ekp,D.ej4,D.eiC,D.eiu],C.az("bs<n,+(O,O,O)>"))
D.cz8=w([A.A],x.M)
D.czq=w([A.aw,A.aC],x.M)
D.cHC=w([A.aw,A.A,A.aC],x.M)
D.cIW=w([A.aw,A.kQ,A.A,A.ld,A.aC],x.M)
D.cV_=w([A.aw,A.kQ,A.a3,A.a7,A.ld,A.aC],x.M)
D.d5m=new C.dX([1,D.cz8,2,D.czq,3,D.cHC,4,A.atc,5,D.cIW,6,D.cV_],C.az("dX<I,ak<d6>>"))
D.dKU={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,radio:23,tv:24,fan:25,speaker:26,clock:27,calculator:28,phone:29,router:30,siren:31,toycar:32,lamp:33,lights:34,kettle:35}
D.bcV=new B.is(20,4,13,!1)
D.bde=new B.is(14,5,13.5,!1)
D.bd6=new B.is(9,2.4,10,!1)
D.bdj=new B.is(7,5,12.5,!1)
D.bd9=new B.is(8,3.5,12,!1)
D.bcS=new B.is(15,2,6,!1)
D.bdh=new B.is(45,6,13.5,!0)
D.bd2=new B.is(10,8,13.5,!1)
D.bcW=new B.is(25,3,12,!0)
D.bd0=new B.is(35,4,12,!0)
D.bd1=new B.is(40,4.5,9.5,!0)
D.bd3=new B.is(55,3,9,!0)
D.bcT=new B.is(18,3,9,!1)
D.bdg=new B.is(22,4,13.5,!1)
D.bda=new B.is(16,5,13.5,!1)
D.bcZ=new B.is(30,4,9,!0)
D.bdq=new B.is(5,3.5,13,!1)
D.bd5=new B.is(25,3,13.5,!0)
D.bdd=new B.is(14,2.5,9,!1)
D.bd4=new B.is(6,6,13,!1)
D.bdk=new B.is(30,1.2,5,!0)
D.bdp=new B.is(35,3,4.5,!0)
D.bdm=new B.is(20,4.5,7.5,!0)
D.bcU=new B.is(30,2.5,10.5,!0)
D.bdb=new B.is(50,5.5,13.5,!0)
D.bdo=new B.is(12,2,9.5,!1)
D.bd8=new B.is(16,1.3,9.5,!0)
D.bdi=new B.is(40,2.5,7,!0)
D.bdn=new B.is(60,1.2,4.8,!0)
D.bcX=new B.is(25,4,7,!0)
D.bd_=new B.is(30,8,14,!0)
D.bdl=new B.is(18,5,13.5,!0)
D.bdf=new B.is(8,2,9.5,!1)
D.bd7=new B.is(12,2.5,8,!1)
D.bcY=new B.is(20,3.5,13.5,!0)
D.bdc=new B.is(3.5,3,13,!1)
D.xR=new C.bs(D.dKU,[D.bcV,D.bde,D.bd6,D.bdj,D.bd9,D.bcS,D.bdh,D.bd2,D.bcW,D.bd0,D.bd1,D.bd3,D.bcT,D.bdg,D.bda,D.bcZ,D.bdq,D.bd5,D.bdd,D.bd4,D.bdk,D.bdp,D.bdm,D.bcU,D.bdb,D.bdo,D.bd8,D.bdi,D.bdn,D.bcX,D.bd_,D.bdl,D.bdf,D.bd7,D.bcY,D.bdc],C.az("bs<n,is>"))
D.dK8={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.ejg=new C.bz(1,A.c4,"Hydrogen")
D.eig=new C.bz(4,A.bv,"Carbon")
D.eho=new C.bz(3,A.da,"Nitrogen")
D.ejx=new C.bz(2,A.aE,"Oxygen")
D.eiZ=new C.bz(2,A.cE,"Sulfur")
D.ek1=new C.bz(1,A.bm,"Chlorine")
D.v_=new C.bs(D.dK8,[D.ejg,D.eig,D.eho,D.ejx,D.eiZ,D.ek1],C.az("bs<n,+(I,x,n)>"))
D.dLm={Calm:0,Box:1,Sleep:2}
D.cgT=w([4,2,6,0],x.n)
D.ch_=w([4,4,4,4],x.n)
D.ch0=w([4,7,8,0],x.n)
D.OF=new C.bs(D.dLm,[D.cgT,D.ch_,D.ch0],C.az("bs<n,ak<O>>"))
D.dJI={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.vF=new B.Zl(0,"source")
D.cIu=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.fjZ=new B.pz("Clock",A.oe,D.vF,A.bq,D.cIu)
D.fjV=new B.pz("Button",A.xg,D.vF,A.aL,A.U)
D.cYE=w(["random","quick","slow"],x.s)
D.fk5=new B.pz("Dice",A.m0,D.vF,A.bU,D.cYE)
D.brx=new C.a0(63484,"MaterialIcons",!1)
D.Co=new B.Zl(1,"logic")
D.d1A=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.fk1=new B.pz("Delay",D.brx,D.Co,A.cC,D.d1A)
D.cRX=w(["fast","mid","slow"],x.s)
D.fk6=new B.pz("Echo",A.agW,D.Co,A.bC,D.cRX)
D.fk3=new B.pz("Every 2nd",V.EP,D.Co,A.hl,A.U)
D.bra=new C.a0(63309,"MaterialIcons",!1)
D.fk0=new B.pz("Every 3rd",D.bra,D.Co,A.aX,A.U)
D.bt8=new C.a0(983902,"MaterialIcons",!1)
D.bKb=w(["50%","25%","75%"],x.s)
D.fk8=new B.pz("Chance",D.bt8,D.Co,A.cQ,D.bKb)
D.pL=new B.Zl(2,"out")
D.fjX=new B.pz("Light",A.Ak,D.pL,A.dZ,A.U)
D.fjY=new B.pz("Burst",A.kZ,D.pL,A.bU,A.U)
D.fjW=new B.pz("Ripple",A.xk,D.pL,A.b7,A.U)
D.fk4=new B.pz("Ball",A.ah9,D.pL,A.cQ,A.U)
D.fk2=new B.pz("Comet",A.mK,D.pL,A.bC,A.U)
D.bsU=new C.a0(983669,"MaterialIcons",!1)
D.fk7=new B.pz("Shake",D.bsU,D.pL,A.cF,A.U)
D.fk9=new B.pz("Pop",A.Eo,D.pL,A.bh,A.U)
D.fk_=new B.pz("Wash",A.Li,D.pL,A.oO,A.U)
D.ma=new C.bs(D.dJI,[D.fjZ,D.fjV,D.fk5,D.fk1,D.fk6,D.fk3,D.fk0,D.fk8,D.fjX,D.fjY,D.fjW,D.fk4,D.fk2,D.fk7,D.fk9,D.fk_],C.az("bs<n,pz>"))
D.dL2={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"ORBIT STUDIO":5,"SWARM STUDIO":6,"FIREWORK DESIGNER":7,"CHAIN BURST":8,"CIRCUIT LAB":9,"PERIODIC TABLE":10,"BODY EXPLORER":11,"SPIN THE WHEEL":12,"FOCUS TIMER":13,"MEMORY MATCH":14,"LUCKY POCKET":15,"ELECTRONICS LAB":16,"AI INVENTOR":17,"MAGNET LAB":18,"RADIO LAB":19,"POWER PLANT":20,"POWER GRID":21,"INTERNET JOURNEY":22,"ROBOT CODER":23,"BUG SMASHER":24,"ROCKET LANDER":25,"DATA SNAKE":26,"BINARY 2048":27,"SIGNAL BREAKER":28,"PASSWORD LAB":29,"WAVE LAB":30,"BUG HUNT":31,"MOLECULE MAKER":32,"DNA LAB":33,"ECOSYSTEM LAB":34,"BALANCE LAB":35,"GEAR LAB":36,"OPTICS LAB":37,"LASER MAZE":38,"LIGHT MIXER":39,"ATOM BUILDER":40,"CIPHER LAB":41,"PIXEL TV":42}
D.ayI=new C.bs(D.dL2,["sparkle","sparkle","whoosh","click","bounce","space","bubble","pop","zap","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","lab","organic","organic","click","tech","sparkle","zap","sparkle","lab","tech","tech"],x.l)
D.dL6={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.AZ=new C.bs(D.dL6,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.dJH={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.egX=new C.A("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.e_n=new C.A("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.e_i=new C.A("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.ea4=new C.A("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eaZ=new C.A("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.ea0=new C.A("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.dYA=new C.A("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.e88=new C.A("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eh4=new C.A("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.ebj=new C.A("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.e22=new C.A("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.dYl=new C.A("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.e1b=new C.A("Movement","They pull your legs together and help you balance.")
D.e2T=new C.A("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.e_v=new C.A("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eeL=new C.A("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.efN=new C.A("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.e7U=new C.A("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.efx=new C.A("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.e6F=new C.A("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.ebr=new C.A("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.dYp=new C.A("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.e3f=new C.A("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eb8=new C.A("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.e6X=new C.A("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.efF=new C.A("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.e9z=new C.A("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.dYy=new C.A("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.ebV=new C.A("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eep=new C.A("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.ecK=new C.A("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.dXb=new C.A("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.e9h=new C.A("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.e9l=new C.A("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.e3S=new C.A("Movement","The chest muscles push your arms forward, like when you push a door.")
D.e_B=new C.A("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.e2I=new C.A("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.e8h=new C.A("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.edq=new C.A("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eh1=new C.A("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.ebo=new C.A("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.dWZ=new C.A("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.e8r=new C.A("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.dXw=new C.A("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.edG=new C.A("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eeH=new C.A("Movement","These lift your foot up so your toes do not drag on the ground.")
D.e8Q=new C.A("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.edV=new C.A("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.dYr=new C.A("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.efc=new C.A("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.e0E=new C.A("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.ed8=new C.A("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.e3B=new C.A("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.e6T=new C.A("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.ebF=new C.A("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.efm=new C.A("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.efe=new C.A("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.efi=new C.A("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.e7l=new C.A("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.ecp=new C.A("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.ecH=new C.A("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.ef1=new C.A("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.e8P=new C.A("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.e5n=new C.A("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.e4h=new C.A("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.e9c=new C.A("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eby=new C.A("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.e5S=new C.A("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.e6t=new C.A("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.e0Y=new C.A("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eeE=new C.A("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.e1G=new C.A("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.dXt=new C.A("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.e3R=new C.A("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.dXo=new C.A("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.e_V=new C.A("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.e3W=new C.A("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.e1O=new C.A("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.ebR=new C.A("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.e2W=new C.A("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.egL=new C.A("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.e4p=new C.A("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.e7f=new C.A("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.e9G=new C.A("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.e1V=new C.A("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.e1I=new C.A("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.d6q=new C.bs(D.dJH,[D.egX,D.e_n,D.e_i,D.ea4,D.eaZ,D.ea0,D.dYA,D.e88,D.eh4,D.ebj,D.e22,D.dYl,D.e1b,D.e2T,D.e_v,D.eeL,D.efN,D.e7U,D.efx,D.e6F,D.ebr,D.dYp,D.e3f,D.eb8,D.e6X,D.efF,D.e9z,D.dYy,D.ebV,D.eep,D.ecK,D.dXb,D.e9h,D.e9l,D.e3S,D.e_B,D.e2I,D.e8h,D.edq,D.eh1,D.ebo,D.dWZ,D.e8r,D.dXw,D.edG,D.eeH,D.e8Q,D.edV,D.dYr,D.efc,D.e0E,D.ed8,D.e3B,D.e6T,D.ebF,D.efm,D.efe,D.efi,D.e7l,D.ecp,D.ecH,D.ef1,D.e8P,D.e5n,D.e4h,D.e9c,D.eby,D.e5S,D.e6t,D.e0Y,D.eeE,D.e1G,D.dXt,D.e3R,D.dXo,D.e_V,D.e3W,D.e1O,D.ebR,D.e2W,D.egL,D.e4p,D.e7f,D.e9G,D.e1V,D.e1I],C.az("bs<n,+(n,n)>"))
D.d6s=new C.hy(A.G,11)
D.d6y=new C.hy(A.G,1.2)
D.d9h=new B.Sp(null)
D.dd5=new B.St(null)
D.dd6=new B.Su(null)
D.ddj=new B.Sv(null)
D.dfk=new B.Sx(null)
D.dfl=new B.Sy(null)
D.dfm=new B.Sz(null)
D.dg9=new B.SU(null)
D.dgb=new B.T8(null)
D.dgc=new B.T9(null)
D.dgd=new B.Ta(null)
D.dgL=new B.Th(null)
D.diG=new B.Tl(null)
D.diH=new B.Tn(null)
D.diI=new B.To(null)
D.diK=new B.Tp(null)
D.dkj=new B.TG(null)
D.dkl=new B.TI(null)
D.dkq=new B.TS(null)
D.dkB=new B.TT(null)
D.dl6=new B.TU(null)
D.dmB=new B.TW(null)
D.dnZ=new B.TY(null)
D.do_=new B.TZ(null)
D.dpk=new B.U1(null)
D.dFd=new B.U2(null)
D.dFe=new B.U3(null)
D.dFf=new B.U6(null)
D.dFg=new B.U7(null)
D.dH9=new B.Uf(null)
D.dHa=new B.Ug(null)
D.dHi=new B.Un(null)
D.dHr=new B.Ur(null)
D.dHs=new B.Us(null)
D.dHt=new B.a6d(null)
D.dI3=new B.Uu(null)
D.dJw=new B.Uy(null)
D.dLw=new C.u(0,118)
D.dLx=new C.u(0,13)
D.dLy=new C.u(0,17)
D.dLB=new C.u(0,330)
D.dLF=new C.u(0,-13)
D.aBd=new C.u(0,-14)
D.dLG=new C.u(0,-17)
D.dLH=new C.u(0,-18)
D.dLI=new C.u(0,-19)
D.dLJ=new C.u(0,-20)
D.dLM=new C.u(0,-26)
D.dLN=new C.u(0,-28)
D.dLO=new C.u(0,-31)
D.dLP=new C.u(0,-32)
D.v7=new C.u(0,-6)
D.dLQ=new C.u(0,-6771)
D.dLR=new C.u(0,-9)
D.dLT=new C.u(-9.5,-11)
D.dLU=new C.u(10,20)
D.dLW=new C.u(10,-13)
D.dLX=new C.u(10,-22)
D.dLY=new C.u(10,-4)
D.a1P=new C.u(11,8)
D.dM_=new C.u(12,2)
D.dM0=new C.u(14,0)
D.dM1=new C.u(14,12)
D.dM2=new C.u(14,-17)
D.dM3=new C.u(14,-18)
D.aBh=new C.u(14,-3)
D.aBi=new C.u(14,-4)
D.dM4=new C.u(15,0)
D.dM5=new C.u(15,-12)
D.dM6=new C.u(16,-8)
D.dM7=new C.u(18,14)
D.dM8=new C.u(18,-12)
D.aBm=new C.u(20,0)
D.dMe=new C.u(20,15)
D.dMf=new C.u(20,-17)
D.dMg=new C.u(20,-3)
D.dMh=new C.u(21,8)
D.dMj=new C.u(22,10)
D.aBn=new C.u(22,8)
D.dMk=new C.u(24,0)
D.dMl=new C.u(24,2)
D.dMn=new C.u(24,-18)
D.dMo=new C.u(24,-22)
D.dMp=new C.u(25,8)
D.dMq=new C.u(26,0)
D.dMw=new C.u(28,-30)
D.dMB=new C.u(30,18)
D.dMC=new C.u(30,2)
D.aBq=new C.u(34,0)
D.aBr=new C.u(34,-32)
D.Gw=new C.u(36,0)
D.dMH=new C.u(3,-1)
D.dMK=new C.u(42,0)
D.dMO=new C.u(4,11)
D.dMR=new C.u(4,-2)
D.dMV=new C.u(5,0)
D.dMW=new C.u(5,17)
D.dMX=new C.u(5,6)
D.dN_=new C.u(6,11)
D.dN5=new C.u(8,-14)
D.aBu=new C.u(9,0)
D.dN8=new C.u(-20.5,-17.6)
D.dNb=new C.u(-2.6,-1)
D.dNc=new C.u(1.9,-0.8)
D.dNf=new C.u(-0.22,0.09)
D.dNk=new C.u(2.6,1)
D.dNs=new C.u(-9,12.2)
D.dO1=new C.u(-10,0)
D.dO2=new C.u(-10,12)
D.aBB=new C.u(-10,4)
D.dO3=new C.u(-11,-2)
D.dO4=new C.u(-13,-5)
D.dO5=new C.u(-14,0)
D.dO6=new C.u(-14,13)
D.dO7=new C.u(-14,2)
D.dO8=new C.u(-14,-12)
D.dO9=new C.u(-14,-19)
D.dOa=new C.u(-14,-23)
D.dOb=new C.u(-15,6)
D.dOc=new C.u(-16,14)
D.dOd=new C.u(-16,-8)
D.dOe=new C.u(-17,10)
D.dOf=new C.u(-17,-18)
D.dOg=new C.u(-17,-8)
D.dOi=new C.u(-18,20)
D.dOj=new C.u(-18,-9)
D.aBD=new C.u(-20,0)
D.dOl=new C.u(-20,16)
D.dOm=new C.u(-20,-9)
D.PC=new C.u(-22,8)
D.dOn=new C.u(-22,-10)
D.dOo=new C.u(-22,-11)
D.dOp=new C.u(-24,10)
D.dOq=new C.u(-24,11)
D.dOr=new C.u(-24,14)
D.dOs=new C.u(-24,-22)
D.dOt=new C.u(-25,-11)
D.dOu=new C.u(-26,0)
D.dOv=new C.u(-26,-18)
D.dOw=new C.u(-2,9)
D.dOx=new C.u(-2,-10)
D.dOy=new C.u(-2,-20)
D.dOz=new C.u(-2,-9)
D.aBF=new C.u(-34,0)
D.dOE=new C.u(-42,0)
D.dOG=new C.u(-4,11)
D.dOH=new C.u(-4,-17)
D.dOI=new C.u(-4,-2)
D.dOK=new C.u(-5,0)
D.dOL=new C.u(-5,20)
D.dOM=new C.u(-5,6)
D.dON=new C.u(-6,6)
D.dOO=new C.u(-6,-42)
D.dOP=new C.u(-7,-19)
D.dOQ=new C.u(-7,-24)
D.dOR=new C.u(-8,-9)
D.a1U=new C.u(-9,0)
D.eTj=new C.w("Thinking\u2026",null,A.ht,null,null,null,null,null,null,null,null,null)
D.dPI=new C.C(A.ky,D.eTj,null)
D.f77=new C.w("Start from a ready-made board",null,A.fR,null,null,null,null,null,null,null,null,null)
D.dPS=new C.C(Aa.wz,D.f77,null)
D.bkx=new C.N(4,0,4,14)
D.eP2=new C.F(!0,A.aA,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUb=new C.w("Games and little helpers for a spare minute.",null,D.eP2,null,null,null,null,null,null,null,null,null)
D.dQ_=new C.C(D.bkx,D.eUb,null)
D.f4d=new C.w("Tap to throw in a star",null,A.kj,null,null,null,null,null,null,null,null,null)
D.aXy=new C.cw(A.A,null,null,D.f4d,null)
D.dVc=new C.cG(0,null,0,14,null,null,D.aXy,null)
D.cSu=w([A.iX,A.bv],x.O)
D.aGo=new C.bR(A.A,0.5,A.w,null,0,D.cSu,null,null)
D.dVU=new C.bR(A.A,0.5,A.w,null,0,D.asZ,null,null)
D.cKA=w([A.c,A.bI],x.O)
D.dVW=new C.bR(A.A,0.5,A.w,null,0,D.cKA,null,null)
D.dVX=new C.bR(A.A,0.5,A.w,null,0,I.as7,null,null)
D.cZt=w([A.c4,A.ll],x.O)
D.aGp=new C.bR(A.A,0.5,A.w,null,0,D.cZt,null,null)
D.cqu=w([A.c,A.c4],x.O)
D.dW0=new C.bR(A.tY,0.5,A.w,null,0,D.cqu,null,null)
D.b30=new C.x(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.b7H=new C.x(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.cJE=w([D.b30,D.aba,D.b7H],x.O)
D.cQF=w([0,0.7,1],x.n)
D.dW2=new C.bR(A.tY,0.5,A.w,null,0,D.cJE,D.cQF,null)
D.c3T=w([A.fj,A.f2,A.k1],x.O)
D.dW3=new C.bR(N.pM,0.5,A.w,null,0,D.c3T,null,null)
D.ch6=w([A.qa,A.aZ,A.K],x.O)
D.cWv=w([0.3,0.7,1],x.n)
D.dW4=new C.bR(A.A,0.5,A.w,null,0,D.ch6,D.cWv,null)
D.cjA=w([A.lj,A.nX],x.O)
D.dW5=new C.bR(I.a69,0.5,A.w,null,0,D.cjA,null,null)
D.cjR=w([A.eB,A.cK],x.O)
D.dW6=new C.bR(A.A,0.5,A.w,null,0,D.cjR,null,null)
D.cFn=w([A.qa,A.aZ,A.fT],x.O)
D.dW7=new C.bR(A.A,0.5,A.w,null,0,D.cFn,null,null)
D.cyc=w([A.h4,A.aL,A.dl],x.O)
D.dW9=new C.bR(A.tY,0.5,A.w,null,0,D.cyc,null,null)
D.cT_=w([A.ll,K.q8],x.O)
D.dWa=new C.bR(A.tY,0.5,A.w,null,0,D.cT_,null,null)
D.b3b=new C.x(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.b1v=new C.x(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cHw=w([D.b3b,D.b1v],x.O)
D.dWc=new C.bR(A.A,0.5,A.w,null,0,D.cHw,null,null)
D.b7c=new C.x(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.b5s=new C.x(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.b5w=new C.x(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.d0r=w([D.b7c,D.b5s,D.b5w],x.O)
D.cEd=w([0,0.65,1],x.n)
D.dWd=new C.bR(I.a6b,0.5,A.w,null,0,D.d0r,D.cEd,null)
D.dWe=new C.bR(A.A,0.5,A.w,null,0,D.apK,null,null)
D.cYL=w([A.lj,A.aZ,A.fT],x.O)
D.dWi=new C.bR(A.A,0.5,A.w,null,0,D.cYL,null,null)
D.d_9=w([A.ll,A.hv],x.O)
D.dWl=new C.bR(A.A,0.5,A.w,null,0,D.d_9,null,null)
D.aGu=new C.b1(9,9)
D.dX5=new C.A(0,-4)
D.e0B=new C.A(0.22,4)
D.e7d=new C.A(0.8,-4)
D.eff=new C.A(0.58,4)
D.ehJ=new C.bz("Moon",1.62,4291941851)
D.eie=new C.bz("Neptune",11.15,4284524026)
D.eiN=new C.bz("Sun",274,4294688548)
D.ej0=new C.bz("Mercury",3.7,4288455599)
D.ej6=new C.bz("Earth",9.81,4281908728)
D.ej8=new C.bz("Mars",3.71,4294472049)
D.ejr=new C.bz("Venus",8.87,4294759245)
D.ejv=new C.bz("Saturn",10.44,4294829706)
D.ejO=new C.bz("Jupiter",24.79,4294677052)
D.en4=new C.a9(10,-8,18,-2)
D.en5=new C.a9(14,-14,20,14)
D.en6=new C.a9(20,-2,30,2)
D.en8=new C.a9(4,-13,30,-3)
D.ena=new C.a9(8,-7,12,7)
D.eng=new C.a9(-12,12,12,19)
D.enh=new C.a9(-12,14,12,22)
D.eni=new C.a9(-12,-22,12,8)
D.enj=new C.a9(-12,-25,12,19)
D.enk=new C.a9(-12,-26,12,-6)
D.enl=new C.a9(-12,-4,12,14)
D.enm=new C.a9(-12,-6,10,6)
D.enn=new C.a9(-14,20,14,24)
D.eno=new C.a9(-14,6,14,10)
D.enp=new C.a9(-14,-17,14,15)
D.enq=new C.a9(-14,-26,14,18)
D.enr=new C.a9(-14,-4,14,20)
D.ens=new C.a9(-15,-29,15,25)
D.ent=new C.a9(-16,-16,16,16)
D.enu=new C.a9(-16,-22,-9,18)
D.env=new C.a9(-16,-24,16,-10)
D.enw=new C.a9(-16,-2,16,20)
D.eny=new C.a9(-18,20,18,24)
D.enz=new C.a9(-18,-18,18,20)
D.enA=new C.a9(-20,12,20,22)
D.enB=new C.a9(-20,-28,20,26)
D.enC=new C.a9(-22,14,22,18)
D.aGT=new C.a9(-22,-26,22,24)
D.enD=new C.a9(-22,-3,22,3)
D.enE=new C.a9(-22,-4,22,12)
D.enF=new C.a9(-24,-12,10,22)
D.enG=new C.a9(-24,-14,22,8)
D.enH=new C.a9(-24,-6,24,20)
D.aGU=new C.a9(-24,-9,24,9)
D.enI=new C.a9(-25,14,25,19)
D.enJ=new C.a9(-26,-14,14,8)
D.enK=new C.a9(-26,-6,4,6)
D.aGV=new C.a9(-28,-13,28,13)
D.enL=new C.a9(-28,-16,28,16)
D.enM=new C.a9(-28,-16,28,8)
D.enN=new C.a9(-28,-22,28,22)
D.enO=new C.a9(-30,-12,30,14)
D.enP=new C.a9(-30,-14,0,14)
D.enQ=new C.a9(-30,-18,30,20)
D.enR=new C.a9(-30,-2,30,18)
D.enS=new C.a9(-30,-4,30,18)
D.enT=new C.a9(-32,-17,32,17)
D.enU=new C.a9(-33,-21,33,17)
D.enV=new C.a9(-34,14,34,26)
D.a2N=new C.a9(-34,-18,34,18)
D.enW=new C.a9(-34,-4,34,7)
D.enX=new C.a9(-36,-24,36,20)
D.enY=new C.a9(-38,-22,38,22)
D.enZ=new C.a9(-3,5,3,15)
D.eo0=new C.a9(-46,-34,46,28)
D.eo1=new C.a9(-48,-3,48,3)
D.eo4=new C.a9(-6,18,24,24)
D.eo5=new C.a9(-6,5,6,12)
D.eo6=new C.a9(-6,-22,6,-15)
D.eo7=new C.a9(-9,-16,9,22)
D.eo9=new C.a9(14,-9,17.5,9)
D.bBE=new C.ad(A.dP,16,A.c,null,null,null)
D.fag=new C.w("AI",null,R.BY,null,null,null,null,null,null,null,null,null)
D.cM0=w([D.bBE,A.d5,D.fag],x.p)
D.ep3=new C.cC(A.b0,A.e,A.Q,A.m,null,A.p,null,0,D.cM0,null)
D.dL_={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aHI=new C.f8(D.dL_,5,x.T)
D.dKJ={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eqx=new C.f8(D.dKJ,10,x.T)
D.est=new C.ar(24,44)
D.esy=new C.ar(300,300)
D.esS=new C.ar(54,38)
D.esZ=new C.ar(66,38)
D.aYM=new C.fd(2,null,null,null,null,A.bC,null,null,null,null)
D.etV=new C.a5(16,16,D.aYM,null)
D.aIG=new C.hJ(3,12,12,0.82,null)
D.f8I=new C.w("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aIR=new C.b_(D.f8I,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.cT1=w([A.cF,A.cE,A.bh,A.aX,A.oO,A.cF],x.O)
D.ezM=new C.fS(A.A,0,6.283185307179586,A.w,D.cT1,null,null)
D.eIc=new C.F(!0,A.aL,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.NN,null,null,null)
D.eAQ=new C.es("You are here (Sun)",null,null,A.cW,null,null,null,null,null,null,D.eIc)
D.aLd=new C.F(!0,A.aA,null,null,null,null,10.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAR=new C.es("What we see",null,null,A.cW,null,null,null,null,null,null,D.aLd)
D.eFK=new C.F(!0,F.a8G,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAU=new C.es("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cW,null,null,null,null,null,null,D.eFK)
D.eFv=new C.F(!0,A.c2,null,null,null,null,15,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAZ=new C.es("Add atoms with the buttons below",null,null,A.cW,null,null,null,null,null,null,D.eFv)
D.aJE=new C.F(!0,A.c2,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBe=new C.F(!0,A.x,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBg=new C.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBL=new C.F(!0,A.bg,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eC2=new C.F(!0,A.cC,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCy=new C.F(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCO=new C.F(!0,A.c,null,null,null,null,13.5,A.I,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDc=new C.F(!0,A.aP,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDy=new C.F(!0,A.c2,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDI=new C.F(!0,A.af,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.er2=new C.cK(A.hQ,A.dE,6)
D.cN7=w([D.er2],x.q)
D.eE0=new C.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cN7,null,null,null)
D.eE2=new C.F(!0,A.aP,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eE4=new C.F(!0,A.eu,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eE7=new C.F(!0,A.c,null,null,null,null,17,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eE9=new C.F(!0,A.c2,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEx=new C.F(!0,A.aL,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aK1=new C.F(!0,A.c2,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eES=new C.F(!0,A.aA,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eET=new C.F(!0,A.c2,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFN=new C.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGf=new C.F(!0,A.aA,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGI=new C.F(!0,A.aL,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGO=new C.F(!0,A.c,null,null,null,null,12.5,A.a4,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHt=new C.F(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.NN,null,null,null)
D.eHU=new C.F(!0,A.aA,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eI1=new C.F(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIq=new C.F(!0,A.uc,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIE=new C.F(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIX=new C.F(!0,A.bH,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJ0=new C.F(!0,A.c2,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJ3=new C.F(!0,A.aA,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJ9=new C.F(!0,A.aA,null,null,null,null,18,A.I,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJB=new C.F(!0,A.c2,null,null,null,null,8.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJP=new C.F(!0,A.nj,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJQ=new C.F(!0,A.af,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKF=new C.F(!0,A.af,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eK4=new C.F(!0,A.af,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKH=new C.F(!0,A.c,null,null,null,null,9.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKB=new C.F(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eqU=new C.cK(A.x,A.J,5)
D.cC_=w([D.eqU],x.q)
D.eKC=new C.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cC_,null,null,null)
D.eKE=new C.F(!0,A.c,null,null,null,null,10.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.er5=new C.cK(A.aT,A.J,3)
D.d0U=w([D.er5],x.q)
D.eKI=new C.F(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d0U,null,null,null)
D.eKX=new C.F(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eL1=new C.F(!0,A.h5,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLh=new C.F(!0,A.c2,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLM=new C.F(!0,A.bh,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMj=new C.F(!0,A.c2,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMH=new C.F(!0,A.bh,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMZ=new C.F(!0,A.aA,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eN6=new C.F(!0,A.x,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKZ=new C.F(!0,A.aA,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNA=new C.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNJ=new C.F(!0,A.aL,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNQ=new C.F(!0,A.aL,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Rh=new C.F(!0,A.af,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOa=new C.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLa=new C.F(!0,A.af,null,null,null,null,12,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOd=new C.F(!0,A.aL,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4N=new C.F(!0,A.c,null,null,null,null,13,A.a4,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePg=new C.F(!0,A.uc,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEc=new C.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePW=new C.w("\u26a0\ufe0f ",null,D.eEc,null,null,null,null,null,null,null,null,null)
D.eQ6=new C.w("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.Rf,null,null,null,null,null,null,null,null,null)
D.eQv=new C.w("LETTER COUNT OF THE SECRET VERSION",null,Q.mh,null,null,null,null,null,null,null,null,null)
D.eRu=new C.w("Pick one, then change it and see what happens.",null,A.Rf,null,null,null,null,null,null,null,null,null)
D.aJG=new C.F(!0,A.c,null,null,null,null,18,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRy=new C.w("NGMY Phone",null,D.aJG,null,null,null,null,null,null,null,null,null)
D.eFh=new C.F(!0,A.af,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSr=new C.w("What do you want to invent? Type it below, or tap an idea.",null,D.eFh,null,null,null,null,null,null,null,null,null)
D.eSN=new C.w("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,T.a41,null,null,null,null,null,null,null,null,null)
D.eTO=new C.w("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.eUm=new C.w("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.eUr=new C.w("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.eUZ=new C.w("Make it yours",null,A.l8,null,null,null,null,null,null,null,null,null)
D.eEz=new C.F(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVd=new C.w("Your mass never changes. What changes is how hard each world pulls on it.",null,D.eEz,null,null,null,null,null,null,null,null,null)
D.eJe=new C.F(!0,A.j1,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXl=new C.w("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.eJe,null,null,null,null,null,null,null,null,null)
D.eXA=new C.w("YOUR DECODING",null,Q.mh,null,null,null,null,null,null,null,null,null)
D.eLx=new C.F(!0,A.c2,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYN=new C.w("WHAT HAPPENS",null,D.eLx,null,null,null,null,null,null,null,null,null)
D.eZe=new C.w("NGMY Apps",null,D.aJG,null,null,null,null,null,null,null,null,null)
D.f_k=new C.w("Check",null,null,null,null,null,null,null,null,null,null,null)
D.f_X=new C.w("Change the words and pictures on the three slabs.",null,A.Rf,null,null,null,null,null,null,null,null,null)
D.f06=new C.w("All the parts and wires will be removed.",null,A.hs,null,null,null,null,null,null,null,null,null)
D.f0p=new C.w("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.f0Y=new C.w("Tap the crank on the board again and again to spin it faster.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.f1L=new C.w("INTERCEPTED",null,Q.mh,null,null,null,null,null,null,null,null,null)
D.f2y=new C.w("Remove this part",null,T.aJI,null,null,null,null,null,null,null,null,null)
D.f2P=new C.w("Clear the board?",null,A.di,null,null,null,null,null,null,null,null,null)
D.eL2=new C.F(!0,A.bq,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f33=new C.w("How the Lab works",null,D.eL2,null,null,null,null,null,null,null,null,null)
D.eCX=new C.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3k=new C.w("Electronics Lab",null,D.eCX,null,null,null,null,A.a2,null,1,null,null)
D.f3m=new C.w("?",null,I.aL7,null,null,null,null,null,null,null,null,null)
D.eJ8=new C.F(!0,A.aX,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3q=new C.w("Planet Earth",null,D.eJ8,null,null,null,null,null,null,null,null,null)
D.f4w=new C.w("Ready-made circuits",null,A.dQ,null,null,null,null,null,null,null,null,null)
D.f55=new C.w("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.f5m=new C.w("UNIVERSE EXPLORER",null,F.a49,null,null,null,null,null,null,null,null,null)
D.f7E=new C.w("SECRET VERSION",null,Q.mh,null,null,null,null,null,null,null,null,null)
D.eNU=new C.F(!0,A.aL,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f89=new C.w("\u26a0 There is no air here, so a parachute will not work.",null,D.eNU,null,null,null,null,null,null,null,null,null)
D.f9i=new C.w("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,T.a41,null,null,null,null,null,null,null,null,null)
D.f9o=new C.w("\u26a1 ",null,A.oz,null,null,null,null,null,null,null,null,null)
D.f9W=new C.w("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.a4w,null,null,null,null,null,null,null,null,null)
D.fah=new C.w("Tap it to change its setting. Drag from the right dot to connect.",null,A.l9,null,null,null,null,null,null,null,null,null)
D.fba=new C.w("TOOLBOX",null,F.a49,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.fWa=null
$.fW9=null
$.h15=0
$.hsE=C.T(x.N,x.j)
$.hte=C.T(x.N,x.j)
$.hnj=C.T(x.N,C.az("dz"))
$.cap=C.a([],C.az("P<ag0>"))
$.fTe=0
$.aZr="music"
$.fVw=null
$.ht_=C.T(x.N,x.j)
$.hu1=C.T(x.N,x.j)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hYM","bA9",()=>{var v="led"
return C.a([B.avr("Both together","Make the light glow only when BOTH switches are ON.",2,new B.f0z(),v),B.avr("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new B.f0A(),v),B.avr("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new B.f0B(),v),B.avr("Flip it","One switch only: make the light glow when the switch is OFF.",1,new B.f0I(),v),B.avr("Not both","Make the light go OFF only when both switches are ON.",2,new B.f0J(),v),B.avr("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new B.f0K(),"buzzer")],C.az("P<b7j>"))})
w($,"hZc","bAb",()=>C.a([B.oa("UNIVERSE","Earth, space and gravity",A.Yd,A.aX,new B.f1_()),B.oa("ELECTRONICS LAB","Batteries, wires, real circuits",A6.XA,A.aX,new B.f10()),B.oa("DISCOVERY LAB","Body Explorer: a real 3D human",D.Xq,A.bh,new B.f11()),B.oa("TOOLBOX","Converter, clock, games",K.ag4,A.cQ,new B.f1c()),B.oa("MOLECULE MAKER","Join atoms into real molecules",A.L3,A.hl,new B.f1e()),B.oa("DNA LAB","Copy DNA, build a protein",D.Xq,A.bU,new B.f1f()),B.oa("ECOSYSTEM LAB","Grass, rabbits and foxes",A.x8,A.bh,new B.f1g()),B.oa("BALANCE LAB","Levers, weight and torque",D.bt0,A.aL,new B.f1h()),B.oa("GEAR LAB","Teeth, speed and force",A.EL,A.cQ,new B.f1i()),B.oa("LASER MAZE","Bend the beam with mirrors",F.ago,A.aE,new B.f1j()),B.oa("LIGHT MIXER","Match colours with light",D.bqJ,A.b7,new B.f1k()),B.oa("CIPHER LAB","Make and crack secret codes",A.xj,A.aX,new B.f12()),B.oa("REACTION LAB","Wire parts together",A.xn,A.bq,new B.f13()),B.oa("SPARK PAINTER","Paint with light",A.Xs,A.bU,new B.f14()),B.oa("ROCKET LANDER","Land softly on the pad",A.mK,A.aX,new B.f15()),B.oa("ORBIT STUDIO","Slingshot planets",A.m3,A.cQ,new B.f16()),B.oa("SWARM STUDIO","A living school of fish",A.L3,A.bh,new B.f17()),B.oa("CHAIN BURST","One tap, a whole chain",A.ho,A.bU,new B.f18()),B.oa("TITLE ANIMATOR","Make a moving title",A.xf,A.cE,new B.f19()),B.oa("CIRCUIT LAB","Connect logic, learn it",A.XU,A.cC,new B.f1a()),B.oa("MARBLE MUSIC","Marbles ring the notes",D.bqp,A.b7,new B.f1b()),B.oa("ORBIT SEQUENCER","Planets play the tune",D.bsP,A.bC,new B.f1d())],C.az("P<boP>")))
w($,"i_G","xP",()=>{var v,u,t=C.T(x.N,x.F)
for(v=0;v<56;++v){u=D.NW[v]
t.m(0,u.a,u)}return t})
w($,"hYN","bAa",()=>C.a([B.Ej("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new B.f0L()),B.Ej("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new B.f0M()),B.Ej("Spin the motor","A battery and a motor in a loop will make it spin.",new B.f0N()),B.Ej("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new B.f0O()),B.Ej("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new B.f0P()),B.Ej("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new B.f0C()),B.Ej("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new B.f0D()),B.Ej("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new B.f0E()),B.Ej("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new B.f0F()),B.Ej("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new B.f0G()),B.Ej("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new B.f0H())],C.az("P<b7k>")))
w($,"hZe","h9l",()=>C.a([B.ZQ("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aL,A.ck,new B.f1s()),B.ZQ("Focus Timer","Work, then rest","\u23f1\ufe0f",A.cF,A.bQ,new B.f1t()),B.ZQ("Breathe","Calm down in a minute","\ud83e\udee7",A.hl,A.cD,new B.f1u()),B.ZQ("Draw Pad","Sketch and share","\ud83c\udfa8",A.by,A.b3,new B.f1v()),B.ZQ("Memory Match","Find the pairs","\ud83c\udccf",A.aX,A.cb,new B.f1w()),B.ZQ("Simon Sounds","Copy the tune","\ud83c\udfb5",A.cE,A.bm,new B.f1x()),B.ZQ("Tip & Split","Share the bill","\ud83e\uddfe",A.bh,A.aW,new B.f1y()),B.ZQ("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bC,A.aB,new B.f1z())],C.az("P<bq8>")))
w($,"hZd","h9k",()=>C.a([B.acT("EARTH GLOBE","Turn it, tap a country",A.m3,A.aX,new B.f1l()),B.acT("SOLAR SYSTEM","The Sun and its worlds",D.bqs,A.aL,new B.f1m()),B.acT("GRAVITY LAB","Drop, weigh, orbit",D.ah7,A.cQ,new B.f1n()),B.acT("BLACK HOLE","Throw in a star",A.Ed,A.bC,new B.f1o()),B.acT("GALAXY","Build, tilt, collide",A.wW,A.h3,new B.f1p()),B.acT("SIZE COMPARE","Earth next to a star",D.bqL,A.bU,new B.f1q()),B.acT("SEASONS & MOON","Why it is summer",A.uw,A.bq,new B.f1r())],C.az("P<bq3>")))})()};
(a=>{a["TuHlS9QR2s3wKyEI8lKyAFpzDxY="]=a.current})($__dart_deferred_initializers__);