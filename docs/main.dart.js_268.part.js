((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A3,A4,V,W,A5,F,O,A6,X,Y,L,G,A7,A8,Z,A9,T,Aa,Ab,Q,Ac,Ad,R,M,Ae,S,Af,Ag,P,K,E,C={
bvI(d){return C.hxj(d)},
hxj(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bvI=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.qm(B.mL(""),d,A.he,null).cK(0,A.Vb),$async$bvI)
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
return B.i($async$bvI,v)},
hIF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.O_[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.dp(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ae(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.kZ(D.O_,new C.feT())
if(w==null)w=A.d.gL(D.O_)
s=B.T(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.K)(r),++u){l=r[u].a
k=l[0]
l=$.pM().h(0,l[1])
l.toString
s.m(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.K)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gL(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.ahz(w.a,w.b,m,w,s,!1)},
hCu(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.J(D.On,new C.f6E(),x.bd).aH(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
hQp(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cJ(b2,"{")
v=A.a.o0(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.R.aF(0,A.a.an(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.b_(a5)
r=0
for(a6=x.j,a7=J.aU(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gT(a7)
p=B.t(J.q(q,"kind"))
o=B.t(J.q(q,"id"))
if(!$.pM().ak(0,p)||J.eT(s,o)||J.aa(t)>=8)continue
J.cb(s,o)
n=B.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.d08[a9]
l=J.q(q,m)
if(typeof l=="number")J.aE(n,m,l)}k=A.k.E(typeof J.q(q,"x")=="number"?B.f4(J.q(q,"x")):0.2+A.k.F(r,3)*0.3,0.16,0.84)
j=A.k.E(typeof J.q(q,"y")=="number"?B.f4(J.q(q,"y")):0.25+A.k.al(r,3)*0.3,0.1,0.9)
J.cb(t,new B.eR([o,p,k,j,n]));++r}if(J.aa(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aU(a6.a(J.q(u,"wires")));a5.C();){h=a5.gT(a5)
g=a6.a(h)
if(J.aa(g)<4)continue
f=B.t(J.q(g,0))
e=B.t(J.q(g,2))
d=A.o.E(A.k.N(B.f4(J.q(g,1))),0,1)
a0=A.o.E(A.k.N(B.f4(J.q(g,3))),0,1)
if(J.eT(s,f)&&J.eT(s,e)&&!J.y(f,e))J.cb(i,new B.cI([f,d,e,a0]))}if(J.aa(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.M.a(J.q(u,"steps"))
a0=J.aU(a0==null?A.cL:a0)
while(a0.C()){a2=a0.gT(a0)
J.cb(a1,B.t(a2))}a3=a1
a0=J.q(u,"title")
a0=B.t(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new C.me(a0,B.t(a1==null?"":a1),t,i,A.U)
a0=a4.a
a1=a4.b
d=J.aa(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=B.t(a5==null?"":a5)
return new C.ahz(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hHi(d){var w,v,u=C.fOa()
d.B(u)
for(w=0;w<60;++w)u.a5l(0,0.03333333333333333)
v=u.a
return A.d.ba(v,new C.fcf(u))&&!A.d.ea(v,new C.fcg())},
hHh(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.K)(l),++u){t=l[u];++v
k.m(0,t.a,$.pM().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.K)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.t(t.e)+" V")
if(p==="resistor")q.push(""+A.k.U(t.r)+" ohms")
if(A.d.t(D.cZK,p))q.push("level "+A.k.U(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.U(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aH(q,", ")+")"
s.push(B.t(p)+n+": "+o+", current "+A.k.aa(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.K)(w),++u){m=w[u]
l.push(B.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aH(s,"\n")+"\nWires: "+A.d.aH(l,"; ")},
hvS(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.K)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aH(v,"\n")+"\n\n"}v=A.d.aH(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
hIE(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.pM().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.On[u]
if(A.d.ba(w,new C.feQ(s)))if(!B.dp(r,s.b.toLowerCase(),0))v=B.dp(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ae("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.a3(w,new C.feR(e),B.U(w).k("a3<1>")).gai(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ae("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.aa(A.d.cG(w,0,new C.feS())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ae("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gL(w)
w=$.pM().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ahz:function ahz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
feT:function feT(){},
f6E:function f6E(){},
fcf:function fcf(d){this.a=d},
fcg:function fcg(){},
feQ:function feQ(d){this.a=d},
feR:function feR(d){this.a=d},
feS:function feS(){},
TG:function TG(d,e){this.c=d
this.a=e},
bgz:function bgz(d,e,f,g,h){var _=this
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
dWE:function dWE(d){this.a=d},
dWF:function dWF(d,e,f){this.a=d
this.b=e
this.c=f},
dWG:function dWG(d){this.a=d},
dWR:function dWR(d){this.a=d},
dWS:function dWS(d,e){this.a=d
this.b=e},
dWN:function dWN(d){this.a=d},
dWL:function dWL(d,e){this.a=d
this.b=e},
dWM:function dWM(d,e,f){this.a=d
this.b=e
this.c=f},
dWO:function dWO(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dWJ:function dWJ(d){this.a=d},
dWK:function dWK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dWP:function dWP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dWI:function dWI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dWQ:function dWQ(d,e){this.a=d
this.b=e},
dWH:function dWH(d,e){this.a=d
this.b=e},
dWV:function dWV(d){this.a=d},
dWU:function dWU(d){this.a=d},
dWW:function dWW(d){this.a=d},
dWT:function dWT(d){this.a=d},
dWX:function dWX(d,e){this.a=d
this.b=e},
dWY:function dWY(d,e){this.a=d
this.b=e},
dWZ:function dWZ(d,e){this.a=d
this.b=e},
dX_:function dX_(d,e){this.a=d
this.b=e},
bw2(d,e,f){var w=null
return B.v(B.a([B.d(d,w,w,w,w,w,w,D.aKq,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p)},
h0p(d,e,f,g){var w=null,v=B.m(24),u=B.H(f.j(0.6),A.r,1)
return B.au(B.p(w,B.v(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.ar,B.d(e,w,w,w,w,w,w,A.HJ,A.L,w,w),A.ay,B.c9(A.fH,g,A.by,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new B.o(D.TI,w,u,v,w,w,A.n),w,w,w,w,A.a8,w,w,w),w,w,w)},
EQ:function EQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uh:function uh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
U6:function U6(d){this.a=d},
aBx:function aBx(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fc$=h
_.kz$=i
_.fF$=j
_.fd$=k
_.bp$=l
_.a6$=m
_.c=_.a=null},
eb1:function eb1(){},
ebl:function ebl(d){this.a=d},
ebk:function ebk(d,e){this.a=d
this.b=e},
ebm:function ebm(){},
ebn:function ebn(){},
eb3:function eb3(d,e,f){this.a=d
this.b=e
this.c=f},
eb2:function eb2(d,e){this.a=d
this.b=e},
eaT:function eaT(d){this.a=d},
eaU:function eaU(d){this.a=d},
eaV:function eaV(d){this.a=d},
eaW:function eaW(d){this.a=d},
eaX:function eaX(d){this.a=d},
eaY:function eaY(d){this.a=d},
eaZ:function eaZ(d){this.a=d},
eb_:function eb_(d){this.a=d},
eb0:function eb0(d){this.a=d},
eaR:function eaR(d){this.a=d},
eaS:function eaS(d){this.a=d},
eaQ:function eaQ(d){this.a=d},
ebe:function ebe(d,e){this.a=d
this.b=e},
eb9:function eb9(d){this.a=d},
eba:function eba(d){this.a=d},
eb6:function eb6(d){this.a=d},
ebb:function ebb(d){this.a=d},
eb5:function eb5(d){this.a=d},
ebc:function ebc(d){this.a=d},
ebd:function ebd(d){this.a=d},
eb4:function eb4(d){this.a=d},
ebf:function ebf(d,e){this.a=d
this.b=e},
eb8:function eb8(d,e){this.a=d
this.b=e},
ebg:function ebg(d){this.a=d},
ebh:function ebh(d){this.a=d},
ebi:function ebi(d){this.a=d},
ebj:function ebj(d){this.a=d},
eb7:function eb7(d){this.a=d},
bdB:function bdB(d,e){this.b=d
this.a=e},
aJj:function aJj(){},
btG:function btG(){},
czI(){var w=0,v=B.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$czI=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.tz().jV(0,"assets/data/body3d.bin"),$async$czI)
case 3:d=a1
$.fWR=J.eQ(A.dD.gaN(d),d.byteOffset,d.byteLength)
t=B.bE_(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
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
e=D.cQ_[i]
g=B.aZ((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a1c(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aQ3))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.b6N(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$czI,v)},
aP7:function aP7(d,e,f){this.a=d
this.b=e
this.c=f},
a1c:function a1c(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b6N:function b6N(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Sy:function Sy(d){this.a=d},
azZ:function azZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.fc$=s
_.kz$=t
_.fF$=u
_.fd$=v
_.bp$=w
_.a6$=a0
_.c=_.a=null},
dy3:function dy3(d){this.a=d},
dy2:function dy2(d,e){this.a=d
this.b=e},
dxG:function dxG(d,e){this.a=d
this.b=e},
dxH:function dxH(){},
dy4:function dy4(){},
dxI:function dxI(d,e){this.a=d
this.b=e},
dxJ:function dxJ(d){this.a=d},
dxK:function dxK(){},
dxL:function dxL(d){this.a=d},
dxN:function dxN(d,e){this.a=d
this.b=e},
dxM:function dxM(d){this.a=d},
dxD:function dxD(d,e,f){this.a=d
this.b=e
this.c=f},
dxE:function dxE(d){this.a=d},
dxF:function dxF(d){this.a=d},
dxU:function dxU(d){this.a=d},
dxV:function dxV(d,e){this.a=d
this.b=e},
dxW:function dxW(d,e){this.a=d
this.b=e},
dxX:function dxX(d){this.a=d},
dxT:function dxT(d,e){this.a=d
this.b=e},
dxY:function dxY(d,e){this.a=d
this.b=e},
dxS:function dxS(d,e){this.a=d
this.b=e},
dxZ:function dxZ(d){this.a=d},
dxR:function dxR(d){this.a=d},
dy_:function dy_(d){this.a=d},
dxQ:function dxQ(d){this.a=d},
dy0:function dy0(d){this.a=d},
dxP:function dxP(d){this.a=d},
dy1:function dy1(d){this.a=d},
dxO:function dxO(d){this.a=d},
aIl:function aIl(){},
aIm:function aIm(){},
bX0:function bX0(d){var _=this
_.a=d
_.d=_.c=_.b=null},
bX1:function bX1(d,e){this.a=d
this.b=e},
bX2:function bX2(d){this.a=d},
avy(d,e,f,g,h){return new C.b7v(d,e,f,g,h)},
fFf(d,e,f,g,h,i){return $.hti.ce(0,d+"|"+B.t(e)+"|"+f.l()+"|"+B.t(g),new C.cGu(d,e,f,i,g,h))},
xm:function xm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Bi:function Bi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
n0:function n0(d,e,f){this.a=d
this.b=e
this.c=f},
b7v:function b7v(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f1d:function f1d(){},
f1e:function f1e(){},
f1f:function f1f(){},
f1m:function f1m(){},
f1n:function f1n(){},
f1o:function f1o(){},
SD:function SD(d){this.a=d},
aA1:function aA1(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.fc$=m
_.kz$=n
_.fF$=o
_.fd$=p
_.bp$=q
_.a6$=r
_.c=_.a=null},
dAe:function dAe(d){this.a=d},
dzT:function dzT(d,e){this.a=d
this.b=e},
dzW:function dzW(){},
dAf:function dAf(){},
dzR:function dzR(d,e){this.a=d
this.b=e},
dzS:function dzS(d,e){this.a=d
this.b=e},
dzX:function dzX(d,e,f){this.a=d
this.b=e
this.c=f},
dzM:function dzM(){},
dzN:function dzN(){},
dzO:function dzO(d){this.a=d},
dzP:function dzP(d,e){this.a=d
this.b=e},
dzQ:function dzQ(d,e,f){this.a=d
this.b=e
this.c=f},
dzY:function dzY(){},
dzZ:function dzZ(d,e){this.a=d
this.b=e},
dA_:function dA_(d){this.a=d},
dzV:function dzV(d,e){this.a=d
this.b=e},
dzU:function dzU(d){this.a=d},
dzL:function dzL(d,e,f){this.a=d
this.b=e
this.c=f},
dA8:function dA8(d){this.a=d},
dA7:function dA7(d){this.a=d},
dA9:function dA9(d){this.a=d},
dA6:function dA6(d){this.a=d},
dA4:function dA4(d){this.a=d},
dA5:function dA5(d){this.a=d},
dA3:function dA3(d){this.a=d},
dA0:function dA0(d){this.a=d},
dA2:function dA2(d){this.a=d},
dAa:function dAa(d,e){this.a=d
this.b=e},
dAb:function dAb(d,e){this.a=d
this.b=e},
dAc:function dAc(d){this.a=d},
dA1:function dA1(d){this.a=d},
dAd:function dAd(d,e){this.a=d
this.b=e},
b7N:function b7N(d,e){this.b=d
this.a=e},
cGu:function cGu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aIr:function aIr(){},
btp:function btp(){},
hkd(){return new C.LN(null)},
ob(d,e,f,g,h){return new C.bp1(d,e,f,g,h)},
bnt(d,e,f){return A.k.E((d-e)/(f-e),0,1)},
fFL(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
LN:function LN(d){this.a=d},
IX:function IX(d,e){this.a=d
this.b=e},
zA:function zA(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aAi:function aAi(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dFr:function dFr(d,e){this.a=d
this.b=e},
dFq:function dFq(d){this.a=d},
dFt:function dFt(d,e){this.a=d
this.b=e},
dFs:function dFs(d){this.a=d},
bp1:function bp1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f1E:function f1E(){},
f1F:function f1F(){},
f1G:function f1G(){},
f1R:function f1R(){},
f1T:function f1T(){},
f1U:function f1U(){},
f1V:function f1V(){},
f1W:function f1W(){},
f1X:function f1X(){},
f1Y:function f1Y(){},
f1Z:function f1Z(){},
f1H:function f1H(){},
f1I:function f1I(){},
f1J:function f1J(){},
f1K:function f1K(){},
f1L:function f1L(){},
f1M:function f1M(){},
f1N:function f1N(){},
f1O:function f1O(){},
f1P:function f1P(){},
f1Q:function f1Q(){},
f1S:function f1S(){},
bnu:function bnu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eJ9:function eJ9(d){this.a=d},
eJ8:function eJ8(d,e){this.a=d
this.b=e},
eJ6:function eJ6(d){this.a=d},
eJa:function eJa(d){this.a=d},
eJ7:function eJ7(d,e){this.a=d
this.b=e},
acH:function acH(d,e,f){this.c=d
this.d=e
this.a=f},
abB:function abB(d,e,f){this.c=d
this.d=e
this.a=f},
Or:function Or(d,e,f,g,h,i,j,k,l,m){var _=this
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
bos:function bos(d,e){this.b=d
this.a=e},
bnY:function bnY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b6u:function b6u(d,e){this.b=d
this.a=e},
aEs:function aEs(d,e){this.c=d
this.a=e},
aEt:function aEt(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cP$=e
_.b0$=f
_.c=_.a=null},
eIQ:function eIQ(d){this.a=d},
eIP:function eIP(d){this.a=d},
eIO:function eIO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIN:function eIN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIL:function eIL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIK:function eIK(d,e,f){this.a=d
this.b=e
this.c=f},
eIM:function eIM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eIJ:function eIJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIY:function eIY(d){this.a=d},
eIX:function eIX(d){this.a=d},
eIZ:function eIZ(d,e){this.a=d
this.b=e},
eJ_:function eJ_(d,e){this.a=d
this.b=e},
eJ0:function eJ0(d,e){this.a=d
this.b=e},
eIW:function eIW(d,e,f){this.a=d
this.b=e
this.c=f},
eJ1:function eJ1(d,e,f){this.a=d
this.b=e
this.c=f},
eIV:function eIV(d){this.a=d},
eIR:function eIR(d){this.a=d},
eJ2:function eJ2(d){this.a=d},
eJ3:function eJ3(d){this.a=d},
eIU:function eIU(d,e){this.a=d
this.b=e},
eJ4:function eJ4(d,e){this.a=d
this.b=e},
eIT:function eIT(d,e){this.a=d
this.b=e},
eJ5:function eJ5(d,e){this.a=d
this.b=e},
eIS:function eIS(d,e){this.a=d
this.b=e},
eIH:function eIH(){},
eII:function eII(){},
bn8:function bn8(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bmB:function bmB(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b79:function b79(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bmD:function bmD(d,e,f){this.b=d
this.c=e
this.a=f},
bqv:function bqv(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aK7:function aK7(){},
h1M(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ao(0,new B.u(w,0)),u=e.aE(0,new B.u(w,0)),t=1-f,s=3*t
return d.aO(0,t*t*t).ao(0,v.aO(0,s*t*f)).ao(0,u.aO(0,s*f*f)).ao(0,e.aO(0,f*f*f))},
bdA(d,e,f,g,h,i){return $.htT.ce(0,d+"|"+B.t(e)+"|"+f.l()+"|"+B.t(g),new C.d9W(d,e,f,i,g,h))},
Zq:function Zq(d,e){this.a=d
this.b=e},
pA:function pA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qg:function qg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Bm:function Bm(d,e){this.a=d
this.b=e},
Xp:function Xp(d,e){this.a=d
this.b=e},
acx:function acx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ZD:function ZD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Bw:function Bw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a9u:function a9u(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a9L:function a9L(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abF:function abF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bdy:function bdy(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
da_:function da_(d){this.a=d},
da0:function da0(d){this.a=d},
d9X:function d9X(d,e){this.a=d
this.b=e},
d9Y:function d9Y(d){this.a=d},
d9Z:function d9Z(d){this.a=d},
da1:function da1(d){this.a=d},
da2:function da2(d){this.a=d},
da3:function da3(d){this.a=d},
da4:function da4(d){this.a=d},
da5:function da5(d){this.a=d},
da6:function da6(d){this.a=d},
da7:function da7(d){this.a=d},
da8:function da8(d){this.a=d},
da9:function da9(d){this.a=d},
ED:function ED(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
U5:function U5(d){this.a=d},
aBw:function aBw(d,e,f,g,h,i,j){var _=this
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
eam:function eam(d){this.a=d},
eab:function eab(d){this.a=d},
ead:function ead(){},
eae:function eae(){},
eah:function eah(){},
eai:function eai(d,e,f){this.a=d
this.b=e
this.c=f},
eaj:function eaj(d){this.a=d},
eak:function eak(d){this.a=d},
eaf:function eaf(){},
eag:function eag(d){this.a=d},
eaM:function eaM(d){this.a=d},
eal:function eal(){},
ea7:function ea7(d){this.a=d},
eao:function eao(d){this.a=d},
ean:function ean(d){this.a=d},
eaq:function eaq(){},
eap:function eap(d,e){this.a=d
this.b=e},
eaa:function eaa(){},
ea8:function ea8(d){this.a=d},
ea9:function ea9(d){this.a=d},
eaK:function eaK(d){this.a=d},
eaJ:function eaJ(d){this.a=d},
eaL:function eaL(d){this.a=d},
eaA:function eaA(d,e){this.a=d
this.b=e},
eaI:function eaI(d){this.a=d},
eaG:function eaG(d){this.a=d},
eaH:function eaH(d){this.a=d},
eaF:function eaF(d){this.a=d},
eaE:function eaE(d){this.a=d},
eaB:function eaB(d){this.a=d},
eaC:function eaC(d){this.a=d},
eaD:function eaD(d){this.a=d},
eac:function eac(){},
eaw:function eaw(d){this.a=d},
eax:function eax(d){this.a=d},
eav:function eav(d){this.a=d},
eay:function eay(d){this.a=d},
eau:function eau(d){this.a=d},
eaz:function eaz(d){this.a=d},
eat:function eat(d){this.a=d},
eas:function eas(d){this.a=d},
ear:function ear(d,e){this.a=d
this.b=e},
bdz:function bdz(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
d9W:function d9W(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aJh:function aJh(){},
bi4:function bi4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Oi:function Oi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Uk:function Uk(d){this.a=d},
bh9:function bh9(d,e,f,g,h,i,j,k){var _=this
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
ekx:function ekx(d){this.a=d},
ekv:function ekv(d){this.a=d},
ekw:function ekw(){},
ek8:function ek8(){},
ek7:function ek7(){},
ekh:function ekh(d,e){this.a=d
this.b=e},
ekj:function ekj(d){this.a=d},
ekn:function ekn(d){this.a=d},
eki:function eki(d){this.a=d},
eko:function eko(d){this.a=d},
ekp:function ekp(d){this.a=d},
ekq:function ekq(d,e){this.a=d
this.b=e},
ekg:function ekg(d,e){this.a=d
this.b=e},
ekr:function ekr(d){this.a=d},
ekf:function ekf(d){this.a=d},
eks:function eks(d,e){this.a=d
this.b=e},
eke:function eke(d,e){this.a=d
this.b=e},
ekt:function ekt(d){this.a=d},
ekd:function ekd(d,e){this.a=d
this.b=e},
eku:function eku(d){this.a=d},
ekc:function ekc(d){this.a=d},
ekk:function ekk(d){this.a=d},
ekb:function ekb(d){this.a=d},
ekl:function ekl(d){this.a=d},
eka:function eka(d){this.a=d},
ekm:function ekm(d,e){this.a=d
this.b=e},
ek9:function ek9(d,e){this.a=d
this.b=e},
bon:function bon(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
Uw:function Uw(d){this.a=d},
aBK:function aBK(d,e,f,g){var _=this
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
er6:function er6(d,e){this.a=d
this.b=e},
er7:function er7(d,e,f){this.a=d
this.b=e
this.c=f},
er8:function er8(d){this.a=d},
er5:function er5(){},
er9:function er9(d,e){this.a=d
this.b=e},
er4:function er4(d,e){this.a=d
this.b=e},
era:function era(d,e){this.a=d
this.b=e},
er3:function er3(d,e){this.a=d
this.b=e},
erb:function erb(d){this.a=d},
er2:function er2(d){this.a=d},
erc:function erc(d,e){this.a=d
this.b=e},
er1:function er1(d,e){this.a=d
this.b=e},
erd:function erd(d){this.a=d},
ere:function ere(d){this.a=d},
er0:function er0(d,e){this.a=d
this.b=e},
aJq:function aJq(){},
aJw:function aJw(){},
YW:function YW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
U3:function U3(d){this.a=d},
aBp:function aBp(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fc$=h
_.kz$=i
_.fF$=j
_.fd$=k
_.bp$=l
_.a6$=m
_.c=_.a=null},
e7m:function e7m(d){this.a=d},
e7n:function e7n(d,e){this.a=d
this.b=e},
e7a:function e7a(d,e){this.a=d
this.b=e},
e7b:function e7b(d){this.a=d},
e78:function e78(d){this.a=d},
e79:function e79(d){this.a=d},
e77:function e77(d){this.a=d},
e7c:function e7c(d){this.a=d},
e76:function e76(d,e){this.a=d
this.b=e},
e7e:function e7e(d){this.a=d},
e75:function e75(d,e){this.a=d
this.b=e},
e7f:function e7f(d){this.a=d},
e74:function e74(d,e){this.a=d
this.b=e},
e7g:function e7g(d){this.a=d},
e73:function e73(d){this.a=d},
e7h:function e7h(d){this.a=d},
e72:function e72(d){this.a=d},
e7i:function e7i(d){this.a=d},
e71:function e71(d){this.a=d},
e7j:function e7j(d){this.a=d},
e7k:function e7k(d){this.a=d},
e7l:function e7l(d){this.a=d},
e70:function e70(d){this.a=d},
e7d:function e7d(d){this.a=d},
bhS:function bhS(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
a9B:function a9B(d,e,f){this.a=d
this.b=e
this.c=f},
Ur:function Ur(d){this.a=d},
bhe:function bhe(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fc$=i
_.kz$=j
_.fF$=k
_.fd$=l
_.bp$=m
_.a6$=n
_.c=_.a=null},
eqy:function eqy(d){this.a=d},
eqz:function eqz(d){this.a=d},
eqx:function eqx(d){this.a=d},
eqn:function eqn(d,e){this.a=d
this.b=e},
eqo:function eqo(d){this.a=d},
eql:function eql(d){this.a=d},
eqm:function eqm(d){this.a=d},
eqk:function eqk(d){this.a=d},
eqd:function eqd(d){this.a=d},
eqe:function eqe(d){this.a=d},
eqc:function eqc(d){this.a=d},
eqp:function eqp(d,e){this.a=d
this.b=e},
eqj:function eqj(d,e){this.a=d
this.b=e},
eqq:function eqq(d,e){this.a=d
this.b=e},
eqi:function eqi(d,e){this.a=d
this.b=e},
eqr:function eqr(d){this.a=d},
eqh:function eqh(d){this.a=d},
eqs:function eqs(d){this.a=d},
eqg:function eqg(d,e){this.a=d
this.b=e},
eqt:function eqt(d){this.a=d},
eqf:function eqf(d,e){this.a=d
this.b=e},
equ:function equ(d){this.a=d},
eqb:function eqb(d,e){this.a=d
this.b=e},
eqv:function eqv(d){this.a=d},
eqa:function eqa(d,e){this.a=d
this.b=e},
eqw:function eqw(d){this.a=d},
eq9:function eq9(d,e){this.a=d
this.b=e},
bpd:function bpd(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aa3:function aa3(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
SB:function SB(d){this.a=d},
aA0:function aA0(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=1
_.x=g
_.Q=_.z=_.y=!1
_.as=0
_.at=null
_.ax=0
_.fc$=h
_.kz$=i
_.fF$=j
_.fd$=k
_.bp$=l
_.a6$=m
_.c=_.a=null},
dzn:function dzn(d){this.a=d},
dzm:function dzm(d,e){this.a=d
this.b=e},
dzo:function dzo(){},
dzp:function dzp(d){this.a=d},
dzd:function dzd(d,e){this.a=d
this.b=e},
dzg:function dzg(d){this.a=d},
dzf:function dzf(d,e){this.a=d
this.b=e},
dze:function dze(d,e){this.a=d
this.b=e},
dzk:function dzk(d,e,f){this.a=d
this.b=e
this.c=f},
dzj:function dzj(d){this.a=d},
dzh:function dzh(d){this.a=d},
dzi:function dzi(d){this.a=d},
dzl:function dzl(d){this.a=d},
b7u:function b7u(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cG1:function cG1(d){this.a=d},
aIp:function aIp(){},
bto:function bto(){},
aJe:function aJe(){},
btF:function btF(){},
aJt:function aJt(){},
btN:function btN(){},
Ez:function Ez(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
aaS:function aaS(d,e,f){this.a=d
this.b=e
this.c=f},
TY:function TY(d){this.a=d},
bgO:function bgO(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fc$=i
_.kz$=j
_.fF$=k
_.fd$=l
_.bp$=m
_.a6$=n
_.c=_.a=null},
e2Q:function e2Q(d,e){this.a=d
this.b=e},
e3e:function e3e(d){this.a=d},
e33:function e33(d){this.a=d},
e2V:function e2V(d){this.a=d},
e34:function e34(d,e){this.a=d
this.b=e},
e35:function e35(d){this.a=d},
e2U:function e2U(d){this.a=d},
e31:function e31(d){this.a=d},
e32:function e32(d){this.a=d},
e30:function e30(d){this.a=d},
e36:function e36(d,e){this.a=d
this.b=e},
e3_:function e3_(d,e){this.a=d
this.b=e},
e37:function e37(d,e){this.a=d
this.b=e},
e2Z:function e2Z(d,e){this.a=d
this.b=e},
e38:function e38(d,e){this.a=d
this.b=e},
e2Y:function e2Y(d,e){this.a=d
this.b=e},
e39:function e39(d){this.a=d},
e2X:function e2X(d,e){this.a=d
this.b=e},
e3a:function e3a(d){this.a=d},
e2W:function e2W(d){this.a=d},
e3b:function e3b(d){this.a=d},
e2T:function e2T(d){this.a=d},
e3c:function e3c(d){this.a=d},
e2S:function e2S(d){this.a=d},
e3d:function e3d(d){this.a=d},
e2R:function e2R(d){this.a=d},
bet:function bet(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
abm:function abm(d,e){this.a=d
this.b=e
this.c=-1000},
U2:function U2(d){this.a=d},
aBo:function aBo(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=!1
_.r=f
_.w=g
_.x=80
_.y="Pentatonic"
_.z="bell"
_.Q=!0
_.fc$=h
_.kz$=i
_.fF$=j
_.fd$=k
_.bp$=l
_.a6$=m
_.c=_.a=null},
e6K:function e6K(d,e){this.a=d
this.b=e},
e6L:function e6L(d,e,f){this.a=d
this.b=e
this.c=f},
e6S:function e6S(d){this.a=d},
e6R:function e6R(d){this.a=d},
e6T:function e6T(d,e){this.a=d
this.b=e},
e6U:function e6U(d){this.a=d},
e6Q:function e6Q(d){this.a=d},
e6V:function e6V(d){this.a=d},
e6P:function e6P(d,e){this.a=d
this.b=e},
e6W:function e6W(d,e){this.a=d
this.b=e},
e6O:function e6O(d,e){this.a=d
this.b=e},
e6X:function e6X(d,e){this.a=d
this.b=e},
e6N:function e6N(d,e){this.a=d
this.b=e},
e6Y:function e6Y(d){this.a=d},
e6Z:function e6Z(d){this.a=d},
e6M:function e6M(d){this.a=d},
e7_:function e7_(d){this.a=d},
bhT:function bhT(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aJc:function aJc(){},
btD:function btD(){},
aJd:function aJd(){},
btE:function btE(){},
eYx(d,e,f){var w=null,v=e.j(0.12),u=B.m(16),t=B.H(e.j(0.4),A.r,1),s=x.p,r=B.a([B.D(B.d(d,w,w,w,w,w,w,D.a52,w,w,w),1)],s)
if(f!=null)A.d.v(r,B.a([A.aa,f],s))
return B.p(w,B.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.iM,w,w,1/0)},
hJ3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=B.T(x.N,w)
for(u=0;u<d.length;d.length===j||(0,B.K)(d),++u){t=d[u]
s=v.h(0,t)
v.m(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gJ(j))return!1
for(j=j.gdH(j),j=j.gah(j);j.C();){s=j.gT(j)
if(v.h(0,s.a)!==s.b)return!1}r=B.bZ(d.length,0,!1,w)
q=d.length
p=J.e_(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=B.a([],j)
e.bG(0,new C.ff9(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.v6.h(0,d[n]).a)return!1
m=B.eP([0],w)
l=B.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,B.K)(j),++u){k=j[u]
if(m.K(0,k))l.push(k)}return m.a===d.length},
fIc(d){var w="TCAG",v=B.aJ(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cJ(w,v[0])*16+A.a.cJ(w,v[1])*4+A.a.cJ(w,v[2])]},
rH:function rH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b6n:function b6n(d,e){this.a=d
this.b=e},
ff9:function ff9(d,e){this.a=d
this.b=e},
U0:function U0(d){this.a=d},
aBm:function aBm(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
e6e:function e6e(d){this.a=d},
e6d:function e6d(d,e){this.a=d
this.b=e},
e60:function e60(d,e){this.a=d
this.b=e},
e5V:function e5V(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e5W:function e5W(d){this.a=d},
e6_:function e6_(d,e){this.a=d
this.b=e},
e5Z:function e5Z(d,e){this.a=d
this.b=e},
e5X:function e5X(d){this.a=d},
e5Y:function e5Y(d,e){this.a=d
this.b=e},
e68:function e68(){},
e69:function e69(d){this.a=d},
e67:function e67(d){this.a=d},
e6a:function e6a(d){this.a=d},
e66:function e66(d){this.a=d},
e64:function e64(d){this.a=d},
e65:function e65(d,e){this.a=d
this.b=e},
e61:function e61(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e63:function e63(d){this.a=d},
e6b:function e6b(d,e){this.a=d
this.b=e},
e62:function e62(d,e){this.a=d
this.b=e},
e6c:function e6c(d,e){this.a=d
this.b=e},
bf9:function bf9(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
di2:function di2(d,e){this.a=d
this.b=e},
SZ:function SZ(d){this.a=d},
bg3:function bg3(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dHv:function dHv(d){this.a=d},
dHu:function dHu(d,e){this.a=d
this.b=e},
dHk:function dHk(d){this.a=d},
dHj:function dHj(){},
dHl:function dHl(d){this.a=d},
dHi:function dHi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dHt:function dHt(){},
dHo:function dHo(){},
dHp:function dHp(d,e){this.a=d
this.b=e},
dHn:function dHn(d,e){this.a=d
this.b=e},
dHq:function dHq(d){this.a=d},
dHm:function dHm(d){this.a=d},
dHr:function dHr(d,e){this.a=d
this.b=e},
dHs:function dHs(d,e){this.a=d
this.b=e},
Te:function Te(d){this.a=d},
aAu:function aAu(d,e,f,g,h){var _=this
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
dKk:function dKk(d){this.a=d},
dKj:function dKj(d,e){this.a=d
this.b=e},
dK7:function dK7(){},
dK6:function dK6(d,e){this.a=d
this.b=e},
dK8:function dK8(d){this.a=d},
dKc:function dKc(d){this.a=d},
dKb:function dKb(d,e){this.a=d
this.b=e},
dKd:function dKd(d){this.a=d},
dKa:function dKa(d,e){this.a=d
this.b=e},
dKe:function dKe(d){this.a=d},
dK9:function dK9(d,e){this.a=d
this.b=e},
dKf:function dKf(d){this.a=d},
dKg:function dKg(d){this.a=d},
dKh:function dKh(d){this.a=d},
dKi:function dKi(d){this.a=d},
baw:function baw(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
cZw:function cZw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cZy:function cZy(d,e,f){this.a=d
this.b=e
this.c=f},
cZx:function cZx(d,e){this.a=d
this.b=e},
aID:function aID(){},
bwy(d,e,f){var w=null,v=e.j(0.12),u=B.m(16),t=B.H(e.j(0.4),A.r,1),s=x.p,r=B.a([B.D(B.d(d,w,w,w,w,w,w,D.a52,w,w,w),1)],s)
if(f!=null)A.d.v(r,B.a([A.aa,f],s))
return B.p(w,B.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.iM,w,w,1/0)},
fa3(d,e,f,g,h){var w,v,u=null,t=B.id(u,u,u,u,B.dl(u,u,u,u,u,u,u,u,u,B.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),e),A.a5,A.ch,u,A.em,A.cg)
t.eU()
w=t.b
v=w.c
w=w.a.c
w=f.aE(0,new B.u(v/2,w.gbc(w)/2))
t.a4(d,w)},
hGb(){var w,v,u,t,s,r,q,p,o=new B.f3()
o.dU(42)
w=B.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.al(t,4)
r=B.b_(v)
q=B.a([],u)
while(q.length<s){p=1+o.aC(5)
if(r.K(0,p))q.push(new B.z(p,1+o.aC(2+A.o.al(t,3))))}A.d.b_(q,new C.fb_())
w.push(new C.aOY(q))}return w},
a_P(d,e){var w,v,u,t
for(w=new B.Vw(d),v="";w.C();){u=B.jw(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+B.jw(65+A.o.F(A.o.F(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
hSE(d,e){var w,v,u,t,s,r,q,p=B.ae("[^A-Z]",!0,!1,!1,!1),o=B.aJ(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new B.Vw(d),v=0,u="";w.C();){t=B.jw(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.F(v,p)
u+=B.jw(65+A.o.F(A.o.F(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aOY:function aOY(d){this.a=d},
bCt:function bCt(){},
fb_:function fb_(){},
St:function St(d){this.a=d},
bfK:function bfK(d,e,f,g,h,i){var _=this
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
dvy:function dvy(){},
dvL:function dvL(d){this.a=d},
dvK:function dvK(d,e,f){this.a=d
this.b=e
this.c=f},
dvM:function dvM(d){this.a=d},
dvJ:function dvJ(d,e){this.a=d
this.b=e},
dvz:function dvz(d,e){this.a=d
this.b=e},
dvE:function dvE(){},
dvF:function dvF(d){this.a=d},
dvD:function dvD(d){this.a=d},
dvG:function dvG(d,e){this.a=d
this.b=e},
dvC:function dvC(d,e){this.a=d
this.b=e},
dvH:function dvH(d,e){this.a=d
this.b=e},
dvB:function dvB(d,e){this.a=d
this.b=e},
dvI:function dvI(d){this.a=d},
dvA:function dvA(d){this.a=d},
b6z:function b6z(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cyz:function cyz(d,e){this.a=d
this.b=e},
Ts:function Ts(d){this.a=d},
bgf:function bgf(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bp$=g
_.a6$=h
_.c=_.a=null},
dOl:function dOl(d){this.a=d},
dOk:function dOk(d,e){this.a=d
this.b=e},
dOm:function dOm(d){this.a=d},
dOj:function dOj(d,e){this.a=d
this.b=e},
dOb:function dOb(d,e,f){this.a=d
this.b=e
this.c=f},
dOf:function dOf(d){this.a=d},
dOe:function dOe(d){this.a=d},
dOg:function dOg(d,e){this.a=d
this.b=e},
dOd:function dOd(d,e){this.a=d
this.b=e},
dOh:function dOh(d){this.a=d},
dOc:function dOc(d,e){this.a=d
this.b=e},
dOi:function dOi(d,e){this.a=d
this.b=e},
bbZ:function bbZ(d,e,f){this.b=d
this.c=e
this.a=f},
d5u:function d5u(d,e){this.a=d
this.b=e},
d5v:function d5v(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
SC:function SC(d){this.a=d},
bfX:function bfX(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dzK:function dzK(d){this.a=d},
dzJ:function dzJ(d,e){this.a=d
this.b=e},
dzs:function dzs(){},
dzB:function dzB(d){this.a=d},
dzA:function dzA(){},
dzC:function dzC(d){this.a=d},
dzz:function dzz(){},
dzD:function dzD(d){this.a=d},
dzy:function dzy(d){this.a=d},
dzE:function dzE(d){this.a=d},
dzx:function dzx(d){this.a=d},
dzF:function dzF(d){this.a=d},
dzw:function dzw(d){this.a=d},
dzG:function dzG(d,e){this.a=d
this.b=e},
dzv:function dzv(d,e){this.a=d
this.b=e},
dzH:function dzH(d){this.a=d},
dzu:function dzu(d,e){this.a=d
this.b=e},
dzI:function dzI(d){this.a=d},
dzt:function dzt(d,e){this.a=d
this.b=e},
aIh:function aIh(){},
aIL:function aIL(){},
h6G(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aE(0,e).gcj()*0.1
return new B.u((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
fOa(){var w=B.a([],x.bz),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a2t(w,v,u,A.cE,B.T(x.N,x.y))},
hea(d,e,f){var w=d.c,v=e===0?-1:1
return new B.u(w*f.a+v*C.fOb(d),d.d*f.b)},
fOb(d){return 42+(D.lC.ak(0,d.b)?(d.ch-1)*38:0)},
e4:function e4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
rU:function rU(d,e,f,g){var _=this
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
a8c:function a8c(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
a9g:function a9g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2t:function a2t(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bId:function bId(){},
bIo:function bIo(d){this.a=d},
bIj:function bIj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bIp:function bIp(d){this.a=d},
bIq:function bIq(d){this.a=d},
bIs:function bIs(d){this.a=d},
bIt:function bIt(d){this.a=d},
bIr:function bIr(d){this.a=d},
bIu:function bIu(d,e,f){this.a=d
this.b=e
this.c=f},
bIv:function bIv(d){this.a=d},
bIf:function bIf(d){this.a=d},
bIg:function bIg(d){this.a=d},
bIe:function bIe(d){this.a=d},
bIh:function bIh(d,e,f){this.a=d
this.b=e
this.c=f},
bIi:function bIi(d){this.a=d},
bIc:function bIc(d){this.a=d},
bIw:function bIw(d,e){this.a=d
this.b=e},
bIk:function bIk(d,e){this.a=d
this.b=e},
bIn:function bIn(d){this.a=d},
bIm:function bIm(d){this.a=d},
bIl:function bIl(d){this.a=d},
agm:function agm(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bDF:function bDF(){},
bDG:function bDG(){},
me:function me(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cg5:function cg5(d){this.a=d},
zJ(d,e){var w
$.V()
w=B.L()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bO
return w},
ql(d,e,f,g,h,i){var w=new C.f9Y(e,h,!0),v=w.$1(g),u=v.b.c
if(u>i&&u>0)v=w.$1(Math.max(2,g*i/u))
w=v.b
u=w.c
w=w.a.c
v.a4(d,f.aE(0,new B.u(u/2,w.gbc(w)/2)))},
zL(a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=a7.a
J.by(a6.save())
a6.translate(a8.a,a8.b-b2)
w=B.cr(new B.u(0,b2+a9*0.005),a9*0.06,a9*0.45)
v=A.w.j(0.22)
$.V()
u=B.L()
u.r=v.gp(0)
a7.hU(w,u)
for(w=a9*0.05,v=-a9,u=v*0.24,t=a9*0.1,s=u+a9*0.2,r=a9*0.04,q=a9*0.065,p=v*0.05,o=a9*0.14,n=p+w,m=a9*0.025,l=0;l<2;++l){k=D.v4[l]*a9*0.075
j=k-w
j=B.bx(new B.a7(j,u,j+t,s),new B.aY(r,r))
i=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
i.r=A.dm.gp(0)
h=i.G()
a6.drawRRect(B.ex(j),h)
h.delete()
k-=q
k=B.bx(new B.a7(k,p,k+o,n),new B.aY(m,m))
j=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
j.r=A.c.gp(0)
h=j.G()
a6.drawRRect(B.ex(k),h)
h.delete()}w=v*0.16
u=v*0.52
t=a9*0.32
s=w+t
q=a9*0.09
g=B.bx(new B.a7(w,u,s,u+t),new B.aY(q,q))
q=B.L()
q.r=b4.gp(0)
a7.aA(g,q)
q=v*0.27
t=a9*0.02
t=B.bx(new B.a7(w,q,s,q+a9*0.045),new B.aY(t,t))
q=A.c.j(0.35)
s=B.L()
s.r=q.gp(0)
a7.aA(t,s)
s=v*0.47
f=new B.u(v*0.15,s)
e=new B.u(a9*0.15,s)
s=v*0.06
t=a9*0.07
a7.bw(f,f.ao(0,new B.u(s,a9*0.17)),C.zJ(b5,t))
s=f.ao(0,new B.u(s,a9*0.18))
q=B.L()
q.r=b5.gp(0)
a7.ae(s,r,q)
d=b1?-2.5+b7*0.5:0.5-b7*2.2
a0=e.ao(0,new B.u(Math.sin(d)*a9*0.2,Math.cos(d)*a9*0.2))
a7.bw(e,a0,C.zJ(b5,t))
w=B.L()
w.r=b5.gp(0)
a7.ae(a0,r,w)
v*=0.7
a1=new B.u(0,v)
a2=a9*0.22
if(b3===1){w=a1.ao(0,new B.u(0,-a2*0.12))
u=B.L()
u.r=D.D_.gp(0)
a7.ae(w,a2*1.18,u)}w=B.L()
w.r=b5.gp(0)
a7.ae(a1,a2,w)
if(b3===0){w=B.bS(a1,a2)
u=B.L()
u.r=D.D_.gp(0)
a7.fa(w,3.141592653589793,3.141592653589793,!0,u)}else if(b3===2){w=B.bS(a1,a2)
u=B.L()
u.r=D.D_.gp(0)
a7.fa(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a2*0.3,u=a2*0.2,l=0;l<2;++l){a3=D.v4[l]
t=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
t.r=D.D_.gp(0)
h=t.G()
a6.drawCircle(0+a3*a2*1.05,w,u,h)
h.delete()}}a4=A.k.F(b0*0.8,3)>2.85
for(w=v+a2*0.42,u=a2*0.12,t=a2*0.25,s=b0*0.7,r=a2*0.13,v+=a2*0.05,q=-a2*0.15,p=v+0,o=a2*0.15,l=0;l<2;++l){n=D.v4[l]*a2
m=0+n*0.4
if(a4){k=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
k.b=A.ae
k.c=1.6
k.r=A.bh.gp(0)
k.d=A.bO
h=k.G()
a6.drawLine.apply(a6,[m+q,p,m+o,p,h])
h.delete()}else{k=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
k.r=A.c.gp(0)
h=k.G()
a6.drawCircle(m,v,t,h)
h.delete()
k=Math.sin(s)
j=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
j.r=A.w.gp(0)
h=j.G()
a6.drawCircle(m+k*a2*0.06,p,r,h)
h.delete()}m=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
m.r=A.jh.j(0.5).gp(0)
h=m.G()
a6.drawCircle(0+n*0.62,w,u,h)
h.delete()}w=a2*0.5
a5=a1.ao(0,new B.u(0,w))
v=a2*0.4
if(b6){w=B.cr(a5,v*(0.35+0.65*((Math.sin(b0*12)+1)/2)),w)
v=B.L()
v.r=A.eZ.gp(0)
a7.hU(w,v)}else a7.fa(B.cr(a5.aE(0,new B.u(0,a2*0.1)),v,a2*0.65),0.2,2.741592653589793,!1,C.zJ(A.bh,1.8))
a6.restore()},
aLD(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null
if(h<=0)return
w=d.a
J.by(w.save())
w.translate(e.a,e.b)
d.bU(0,A.k.E(A.lM.au(0,A.k.E(h,0,1)),0.01,1.3))
v=B.id(p,p,p,p,B.dl(p,p,p,p,p,p,p,p,p,B.l(p,p,A.aE,p,p,p,p,p,p,p,p,g,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),f),A.a5,A.ch,p,A.em,A.cg)
v.eU()
u=v.b
t=u.c
u=u.a.c
s=g*0.8
r=B.bx(B.cr(A.J,u.gbc(u)+g*0.7,t+g*1.1),new B.aY(s,s))
s=$.V()
t=B.L()
t.r=i.gp(0)
d.aA(r,t)
s=new B.aO(s.r,A.ao,p,p,B.a([],x.v))
t=-g
u=r.d
q=u-1
s.D(new B.b4(t*0.3,q))
s.D(new B.ao(t*0.7,u+g*0.6))
s.D(new B.ao(g*0.2,q))
s.D(new B.bD())
q=B.L()
q.r=i.gp(0)
d.aL(s,q)
q=v.b
s=q.c
q=q.a.c
v.a4(d,new B.u(-s/2,-q.gbc(q)/2))
w.restore()},
eZo(d,e,f,g){var w,v=A.k.E(Math.abs(Math.cos(g)),0.15,1),u=f*2,t=u*v,s=B.cr(e,u,t)
$.V()
w=B.L()
w.r=A.cu.gp(0)
d.hU(s,w)
d.hU(B.cr(e,u,t),C.zJ(A.oV,f*0.18))
if(v>0.5)C.ql(d,"$",e,f*1.2,A.oV,9999)},
hx5(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=new B.f3()
j.dU(4)
for(w=e.a,v=f-g,u=e.b,t=d.a,s=f*3,r=u*0.025,q=u*0.012,p=0;p<18;++p){o=j.af()
n=A.k.F(v*(40+j.af()*60)+j.af()*u,u)
J.by(t.save())
t.translate(o*w,n)
t.rotate((s+p)*180/3.141592653589793,0,0)
o=B.cr(A.J,q,r)
m=D.apR[A.o.F(p,5)]
$.V()
l=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
l.r=m.gp(0)
k=l.G()
t.drawRect(B.c2(o),k)
k.delete()
t.restore()}},
hGw(d,e,f,g){switch(A.o.F(f,12)){case 0:C.hwJ(d,e,g)
break
case 1:C.hzy(d,e,g)
break
case 2:C.hyN(d,e,g)
break
case 3:C.hEG(d,e,g)
break
case 4:C.hEV(d,e,g)
break
case 5:C.hDQ(d,e,g)
break
case 6:C.hze(d,e,g)
break
case 7:C.hw5(d,e,g)
break
case 8:C.hFB(d,e,g)
break
case 9:C.hyh(d,e,g)
break
case 10:C.hzC(d,e,g)
break
default:C.hyR(d,e,g)}},
hwJ(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=a1*0.94
for(w=a3.a,v=a0*0.12,u=a0*0.06,t=a1*0.06,s=x.v,r=0;r<6;++r){q=a0*(0.04+r*0.17)
p=a1*(0.18+0.08*A.o.F(r,3))
o=a2-p
n=q+v
m=A.c.j(0.2)
l=$.V()
k=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
k.r=m.gp(0)
j=k.G()
w.drawRect(B.c2(new B.a7(q,o,n,o+p)),j)
j.delete()
k=B.a([],s)
l=new B.aO(l.r,A.ao,d,d,k)
k.push(new B.b4(q-3,o))
k.push(new B.ao(q+u,o-t))
k.push(new B.ao(n+3,o))
k.push(new B.bD())
o=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
o.r=A.c.j(0.3).gp(0)
j=o.G()
o=l.gbL().a.snapshot()
w.drawPath((l.e=new B.cE(o)).a,j)
j.delete()}v=A.w.j(0.18)
$.V()
u=B.L()
u.r=v.gp(0)
a3.aW(new B.a7(0,a2,0+a0,a2+(a1-a2)),u)
i=Math.cos(a5*1.6)
h=Math.min(a0*0.46,a1*0.95)
g=h*0.62
J.by(w.save())
u=a0*0.58
w.translate(u,a1*0.45)
a3.rp(0,Math.max(0.08,Math.abs(i)),1)
v=g*0.1
f=B.bx(B.cr(A.J,g,h),new B.aY(v,v))
t=B.L()
s=i>=0
t.sar(new B.a5(A.a3,A.a7,A.x,s?D.d14:D.cTG,d,d).av(0,new B.a7(f.a,f.b,f.c,f.d)))
a3.aA(f,t)
a3.aA(f,C.zJ(A.dm,2))
if(s){t=-h
s=t*0.28
o=-g
n=o*0.05
m=g*0.22
l=B.L()
l.r=D.qi.gp(0)
a3.ae(new B.u(s,n),m,l)
m=B.bS(new B.u(s,n),m)
n=B.L()
n.r=D.D_.gp(0)
a3.fa(m,3.141592653589793,3.141592653589793,!0,n)
for(t*=0.05,s=o*0.25,n=g*0.07,r=0;r<3;++r){m=s+r*g*0.16
m=B.bx(new B.a7(t,m,t+h*(0.42-r*0.06),m+n),A.i0)
l=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
l.r=A.dy.gp(0)
j=l.G()
w.drawRRect(B.ex(m),j)
j.delete()}C.ql(a3,"COMMUNITY ID",new B.u(0,o*0.4),v,A.dm,h*0.8)}else C.ql(a3,"\u2605 NGMY \u2605",A.J,g*0.16,A.c,h*0.8)
w.restore()
v=a5>2.6
if(v){r=A.k.E((a5-2.6)/0.35,0,1)
J.by(w.save())
w.translate(u,a1*0.52)
a3.iU(0,-0.25)
a3.bU(0,2.2-1.2*A.ep.au(0,r))
e=B.cr(A.J,g*0.3,h*0.7)
a3.aA(B.bx(e,A.h5),C.zJ(A.d1.j(r),3))
C.ql(a3,"\u2713 REGISTERED",A.J,g*0.13,A.d1.j(r),(e.c-e.a)*0.9)
w.restore()}w=a5*5
u=Math.sin(w)
w=Math.sin(w)
v=v&&a5<4
C.zL(a3,new B.u(a0*0.2,a2),a1*0.7,a5,!1,Math.abs(w)*a1*0.015,0,A.d1,D.qi,v,(u+1)/2)
if(a5>3)C.hx5(a3,new B.as(a0,a1*0.9),a5,3)},
hzy(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a8.a,a4=a8.b,a5=a4*0.94,a6=A.w.j(0.2)
$.V()
w=B.L()
w.r=a6.gp(0)
a7.aW(new B.a7(0,a5,0+a3,a5+(a4-a5)),w)
v=a3*0.62
u=a3*0.3
t=a4*0.62
w=a5-t
a6=v+u
s=B.L()
s.r=A.bj.gp(0)
a7.aW(new B.a7(v,w,a6,w+t),s)
for(s=a7.a,r=a9*1.5,q=u*0.2,p=t*0.1,o=0;o<4;++o)for(n=w+t*(0.1+o*0.17),m=n+p,l=0;l<3;++l){k=v+u*(0.12+l*0.3)
j=A.o.F(o+l+A.k.by(r),3)===0?A.dJ:A.aY.j(0.6)
$.V()
i=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
i.r=j.gp(0)
h=i.G()
s.drawRect(B.c2(new B.a7(k,n,k+q,m)),h)
h.delete()}r=v+u*0.38
q=t*0.16
p=a5-q
$.V()
n=B.L()
n.r=A.fh.gp(0)
a7.aW(new B.a7(r,p,r+u*0.24,p+q),n)
n=w-a4*0.09
q=a4*0.02
n=B.bx(new B.a7(v,n,a6,n+a4*0.08),new B.aY(q,q))
a6=B.L()
a6.r=A.aX.gp(0)
a7.aA(n,a6)
a6=a4*0.05
n=a4*0.06
C.ql(a7,"JOBS",new B.u(v+u/2,w-a6),n,A.c,9999)
g=A.k.E(a9/2.8,0,1)
w=a3*0.12
f=w+(v+u*0.3-w)*A.dH.au(0,g)
w=g<1
e=w?Math.abs(Math.sin(a9*12))*a4*0.02:0
r=g>=1
p=r?(Math.sin(a9*6)+1)/2:0
C.zL(a7,new B.u(f,a5),a4*0.6,a9,!1,e,2,A.b1,A.JA,r,p)
if(w){w=B.bx(B.cr(new B.u(f-a4*0.12,a5-a4*0.17-e),a4*0.075,a4*0.1),A.i0)
p=B.L()
p.r=A.fh.gp(0)
a7.aA(w,p)}if(r){w=a9-2.8
C.aLD(a7,new B.u(f+a6,a5-a4*0.78),"Hired! \ud83c\udf89",a4*0.07,w/0.4,A.c)
for(a6=w*0.8,w=a5-a4*0.5,r=a4*0.03,p=a9*8,d=0;d<6;++d){a0=A.k.F(a6+d*0.17,1)
C.eZo(a7,new B.u(f+Math.sin(d*2.1)*a4*0.2,w-a0*a4*0.25),r,p+d)}}a6=a3*0.04
w=a6+u
r=n+a4*0.3
q=B.bx(new B.a7(a6,n,w,r),new B.aY(q,q))
$.V()
p=B.L()
p.r=A.im.gp(0)
a7.aA(q,p)
for(w-=a6,q=a6+w*0.08,r-=n,p=w*0.84,m=r*0.24,a6+=w*0.14,w*=0.5,k=r*0.05,d=0;d<3;++d){j=(1-A.k.E((a9-d*0.5)/0.5,0,1))*a3*0.3
i=q+j
a1=d*0.3
a2=n+r*(0.08+a1)
a2=B.bx(new B.a7(i,a2,i+p,a2+m),A.i0)
i=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
i.r=A.c.gp(0)
h=i.G()
s.drawRRect(B.ex(a2),h)
h.delete()
j=a6+j
a1=n+r*(0.14+a1)
a2=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
a2.r=A.bH.gp(0)
h=a2.G()
s.drawRect(B.c2(new B.a7(j,a1,j+w,a1+k)),h)
h.delete()}},
hyN(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=b0.a,a7=b0.b,a8=a7*0.94
$.V()
w=B.L()
w.r=A.eu.gp(0)
a9.aW(new B.a7(0,a8,0+a6,a8+(a7-a8)),w)
v=a6*0.62
u=A.k.E(b1/2.5,0,1)
w=v-a7*0.03
t=a7*0.4*u
s=a8-t
r=a7*0.06
t=B.bx(new B.a7(w,s,w+r,s+t),A.hK)
s=B.L()
s.r=A.fh.gp(0)
a9.aA(t,s)
s=a8-a7*0.45*u
q=new B.u(v,s)
t=a7*0.3
w=B.L()
w.r=A.d1.gp(0)
a9.ae(q,t*u,w)
w=-a7
p=a7*0.07*u
o=q.ao(0,new B.u(w*0.16*u,p))
n=a7*0.2
m=n*u
l=B.L()
l.r=A.bl.gp(0)
a9.ae(o,m,l)
p=q.ao(0,new B.u(a7*0.16*u,p))
l=B.L()
l.r=A.fs.gp(0)
a9.ae(p,m,l)
if(u>=1)for(p=b1-2.5,o=a7*0.035,m=b1*4,k=0;k<7;++k){j=k*0.9+0.3
i=A.k.E((p-k*0.2)/0.4,0,1)
if(i>0)C.eZo(a9,new B.u(v+Math.cos(j)*a7*0.2,s+Math.sin(j)*a7*0.17),o*A.lM.au(0,i),m+k)}s=a6*0.06
p=a7*0.08
o=a6*0.3
m=s+o
l=p+t
h=a7*0.02
h=B.bx(new B.a7(s,p,m,l),new B.aY(h,h))
g=A.w.j(0.3)
f=$.V()
e=B.L()
e.r=g.gp(0)
a9.aA(h,e)
e=B.a([],x.v)
d=new B.aO(f.r,A.ao,null,null,e)
f=s+6
h=l-8
d.D(new B.b4(f,h))
a0=[0.1,0.25,0.2,0.45,0.5,0.75,0.9]
a1=A.k.by(A.k.E(b1/3,0,1)*6)
for(s=m-s-12,l=l-p-16,k=0;k<=a1;++k){g=new B.ao(f+s*k/6,h-l*a0[k])
e.push(g)
a2=d.f
if(a2!=null)g.bx(a2)
g=d.e
if(g!=null)g.a.delete()
d.e=null}a9.aL(d,C.zJ(A.bg,3))
s=a7*0.05
C.ql(a9,"+$",new B.u(m-s,p+s),r,A.bg,9999)
r=b1*3
s=Math.sin(r)
C.zL(a9,new B.u(o,a8),a7*0.62,b1,!1,Math.abs(Math.sin(r))*a7*0.01,0,A.aX,D.qi,!1,(s+1)/2)
n=o+n
t=a8-t
a3=new B.u(n,t)
p=B.bx(B.cr(a3,p,a7*0.1),A.hK)
$.V()
o=B.L()
o.r=A.d3.gp(0)
a9.aA(p,o)
o=w*0.05
a9.bw(a3.ao(0,new B.u(a7*0.04,w*0.01)),a3.ao(0,new B.u(a7*0.12,o)),C.zJ(A.d3,4))
for(w=b1*1.4,s=a7*0.13,r=a7*0.008,p=a9.a,k=0;k<8;++k){a4=A.k.F(w+k*0.125,1)
m=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
m.r=A.fY.gp(0)
a5=m.G()
p.drawCircle(n+(s+a4*a7*0.12),t+(o+a4*a4*a7*0.3),r,a5)
a5.delete()}},
hEG(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=d*0.94,a1=A.fh.j(0.6)
$.V()
w=B.L()
w.r=a1.gp(0)
a2.aW(new B.a7(0,a0,0+e,a0+(d-a0)),w)
v=e*0.3
u=e*0.66
for(a1=u/12,w=d*0.14,t=a1+1,s=w+d*0.12,r=a2.a,q=0;q<12;++q){p=v+a1*q
o=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
o.r=D.asL[A.o.F(q,4)].gp(0)
n=o.G()
r.drawRect(B.c2(new B.a7(p,w,p+t,s)),n)
n.delete()}for(t=d*0.2,s=d*0.1,p=t+s,q=0;q<12;++q){o=v+a1*q
m=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
m.r=D.asL[A.o.F(q,4)].gp(0)
n=m.G()
r.drawArc.apply(r,[B.c2(new B.a7(o,t,o+a1,p)),0,180,!0,n])
n.delete()}a1=v+4
t=d*0.3
p=t+(a0-t)
o=B.L()
o.r=A.fh.gp(0)
a2.aW(new B.a7(a1,t,a1+4,p),o)
o=v+u
a1=o-8
m=B.L()
m.r=A.fh.gp(0)
a2.aW(new B.a7(a1,t,a1+4,p),m)
m=d*0.68
p=m+d*0.26
a1=B.bx(new B.a7(v,m,o,p),A.hK)
t=B.L()
t.r=A.im.gp(0)
a2.aA(a1,t)
for(a1=o-v,t=a1/6,o=m+2,a1/=12,p=o+(p-m-4),q=0;q<6;++q){l=v+t*q
k=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
k.r=((q&1)===0?A.bM:A.cu).j(0.9).gp(0)
n=k.G()
r.drawRect(B.c2(new B.a7(l,o,l+a1,p)),n)
n.delete()}a1=v+u*0.2
t=d*0.62
j=new B.u(a1,t)
p=d*0.17
o=d*0.03
l=B.bx(B.cr(j,d*0.11,p),new B.aY(o,o))
k=B.L()
k.r=A.cz.gp(0)
a2.aA(l,k)
k=-d
p=B.cr(j.ao(0,new B.u(0,k*0.05)),d*0.04,p)
l=B.L()
l.r=A.fy.gp(0)
a2.hU(p,l)
for(p=a4*0.8,k*=0.08,l=d*0.015,q=0;q<3;++q){i=A.k.F(p+q*0.33,1)
h=Math.sin(i*6+q)
g=i*d
f=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
f.r=A.c.j(0.6*(1-i)).gp(0)
n=f.G()
r.drawCircle(a1+h*5,t+(k-g*0.14),l+g*0.02,n)
n.delete()}for(a1=v+u*0.5,p=d*0.018,q=0;q<5;++q){l=B.cr(new B.u(a1,t),w,d*(0.1+q*0.01))
k=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
k.b=A.ae
k.c=p
k.r=A.cu.gp(0)
k.d=A.bO
n=k.G()
r.drawArc.apply(r,[B.c2(l),(0.4+q*0.1)*57.29577951308232,108.8619810748564,!1,n])
n.delete()}for(a1=d*0.63,w=d*0.032,q=0;q<4;++q){t=A.o.F(q,2)
p=A.o.al(q,2)
l=(q&1)===0?A.cf:A.zt
k=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
k.r=l.gp(0)
n=k.G()
r.drawCircle(v+u*(0.72+0.06*t)+q*d*0.02,a1+p*d*0.035,w,n)
n.delete()}C.zL(a2,new B.u(e*0.14,a0),m,a4,!1,0,1,A.cu,F.aa5,!0,(Math.sin(a4*5)+1)/2)
for(a1=a4*0.45,w=e*0.16,t=d*0.45,r=d*0.06,q=0;q<5;++q){i=A.k.F(a1+q*0.2,1)
C.ql(a2,"\u2665",new B.u(w+Math.sin(i*5+q)*d*0.08+q*d*0.03,t-i*d*0.4),r,A.aD.j(1-i),9999)}a1=v+u/2
w=d*0.08
o=B.bx(B.cr(new B.u(a1,w),s,u*0.7),new B.aY(o,o))
$.V()
s=B.L()
s.r=A.aE.gp(0)
a2.aA(o,s)
C.ql(a2,"NGMY STORE \xb7 African food",new B.u(a1,w),d*0.05,A.dJ,u*0.64)},
hEV(d,e,f){var w,v,u,t,s,r,q=e.a,p=e.b,o=p*0.94,n=A.w.j(0.2)
$.V()
w=B.L()
w.r=n.gp(0)
d.aW(new B.a7(0,o,0+q,o+(p-o)),w)
v=A.o.F(A.k.by(f/1.5),4)
u=A.k.F(f,1.5)
t=u<0.75
w=p*0.68
n=t?(Math.sin(f*8)+1)/2:0
s=t?Math.abs(Math.sin(f*8))*p*0.01:0
C.zL(d,new B.u(q*0.25,o),w,f,!1,s,2,A.d1,D.qi,t,n)
n=t?0:(Math.sin(f*8)+1)/2
s=t?0:Math.abs(Math.sin(f*8))*p*0.01
C.zL(d,new B.u(q*0.75,o),w,f,!1,s,0,A.bk,D.b2q,!t,n)
n=p*0.15
w=p*0.085
if(t)C.aLD(d,new B.u(q*0.26,n),D.apM[v].a,w,u/0.25,A.o6)
else C.aLD(d,new B.u(q*0.74,n),D.apM[v].b,w,(u-0.75)/0.25,A.en)
for(n=q*0.5,w=p*0.07,s=f*2,r=0;r<3;++r)C.ql(d,"\u2192",new B.u(n,p*(0.35+r*0.1)),w,A.c.j(0.3+0.5*A.k.F(s+r,1)),9999)},
hDQ(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=d*0.94,a1=A.w.j(0.2)
$.V()
w=B.L()
w.r=a1.gp(0)
a2.aW(new B.a7(0,a0,0+e,a0+(d-a0)),w)
w=e*0.3
v=B.cr(new B.u(e*0.6,d*0.45),d*0.7,Math.min(w,d*0.55))
a1=B.bx(v,A.hK)
u=B.L()
u.r=A.c.gp(0)
a2.aA(a1,u)
for(a1=v.d,u=v.b,t=a1-u,s=t*0.03,r=a2.a,q=v.a,p=v.c,o=p-q,n=q+o*0.1,m=0;m<9;++m){l=u+t*(0.1+m*0.095)
k=A.o.F(m,3)===2?0.5:0.8
j=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
j.r=A.cm.gp(0)
i=j.G()
r.drawRect(B.c2(new B.a7(n,l,n+o*k,l+s)),i)
i.delete()}h=A.k.E(a4/3,0,1)
g=u+t*h
if(h<1){a1=q-8
t=g-2
o=a1+(o+16)
s=B.L()
s.r=A.bg.gp(0)
a2.aW(new B.a7(a1,t,o,t+4),s)
s=A.bg.j(0.18)
t=B.L()
t.r=s.gp(0)
a2.aW(new B.a7(a1,u,o,u+(g-u)),t)}else{m=A.k.E((a4-3)/0.4,0,1)
t=A.lM.au(0,m)
s=B.L()
s.r=A.bM.gp(0)
a2.ae(new B.u(p,u),d*0.08*t,s)
C.ql(a2,"PDF",new B.u(p,u),d*0.045*m,A.c,9999)
u=d*0.06
C.ql(a2,"\u2713 Saved",new B.u(v.gbO().a,a1+u),u,A.c.j(m),9999)}a1=a4*4
u=Math.sin(a1)
C.zL(a2,new B.u(e*0.2,a0),d*0.66,a4,!0,Math.abs(Math.sin(a1))*d*0.01,0,A.cs,D.qi,!1,(u+1)/2)
f=B.cr(new B.u(w,d*0.3),d*0.18,d*0.1)
w=d*0.02
w=B.bx(f,new B.aY(w,w))
u=B.L()
u.r=A.aE.gp(0)
a2.aA(w,u)
u=d*0.015
u=B.bx(f.cD(-3),new B.aY(u,u))
w=A.bg.j(0.35+0.3*Math.sin(a4*6))
a1=B.L()
a1.r=w.gp(0)
a2.aA(u,a1)},
hze(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a8.a,a4=a8.b,a5=a4*0.94,a6=A.w.j(0.2)
$.V()
w=B.L()
w.r=a6.gp(0)
a7.aW(new B.a7(0,a5,0+a3,a5+(a4-a5)),w)
v=B.cr(new B.u(a3*0.62,a4*0.47),a4*0.8,Math.min(a3*0.4,a4*0.75))
w=B.bx(v,A.qU)
a6=B.L()
a6.r=A.c.gp(0)
a7.aA(w,a6)
a6=v.a
w=v.c
u=w-a6
t=v.b
s=v.d-t
C.ql(a7,"INVOICE",new B.u(a6+u*0.3,t+s*0.09),s*0.07,A.dm,9999)
for(r=a7.a,q=u*0.08,p=a6+q,o=s*0.045,n=p+u*0.5,m=w-u*0.17,l=s*0.02,k=s*0.06,j=a9-0.5,i=0,h=0;h<3;++h){g=A.k.E((j-h*0.6)/0.4,0,1)
if(g<=0)continue
i+=D.ar6[h].b
f=t+s*(0.24+h*0.14)
J.by(r.save())
r.translate((1-g)*30,0)
e=A.cm.j(g)
$.V()
d=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
d.r=e.gp(0)
a0=d.G()
r.drawRect(B.c2(new B.a7(p,f,n,f+o)),a0)
a0.delete()
C.ql(a7,"$"+D.ar6[h].b,new B.u(m,f+l),k,A.aE.j(g),9999)
r.restore()}o=t+s*0.7
a7.bw(new B.u(p,o),new B.u(w-q,o),C.zJ(A.dl,1.4))
C.ql(a7,"TOTAL  $"+i,new B.u(v.gbO().a,t+s*0.78),s*0.075,A.aE,u*0.8)
w=a9>2.8
if(w){q=a9-2.8
h=A.k.E(q/0.3,0,1)
J.by(r.save())
r.translate(v.gbO().a,t+s*0.55)
a7.iU(0,-0.3)
a7.bU(0,2-A.ep.au(0,h))
a7.aA(B.bx(B.cr(A.J,s*0.17,u*0.6),A.h5),C.zJ(A.d1.j(h),3.5))
C.ql(a7,"PAID",A.J,s*0.11,A.d1.j(h),9999)
r.restore()
for(u=q*0.7,a6-=a4*0.05,t=a4*0.7,s=a4*0.03,r=a9*8,a1=0;a1<6;++a1){a2=A.k.F(u+a1*0.17,1)
C.eZo(a7,new B.u(a6+Math.sin(a1*2)*a4*0.1,t-a2*a4*0.5),s,r+a1)}}a6=w?(Math.sin(a9*6)+1)/2:0
C.zL(a7,new B.u(a3*0.2,a5),a4*0.66,a9,!0,0,1,A.bx,A.JA,w,a6)},
hw5(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.eu.j(0.7)
$.V()
w=B.L()
w.r=e.gp(0)
d.aW(new B.a7(0,f,0+h,f+(g-f)),w)
w=h*0.6
e=g*0.62
v=new B.u(w,e)
u=Math.min(h*0.3,g*0.6)
t=B.bx(B.cr(v,u*1.3,u*2.1),A.h5)
s=B.L()
s.r=A.hm.gp(0)
d.aA(t,s)
s=u*0.5
t=u*1.2
r=B.cr(v.aE(0,new B.u(s,0)),t,u)
q=B.L()
q.r=A.fV.gp(0)
d.aW(r,q)
s=B.cr(v.ao(0,new B.u(s,0)),t,u)
q=B.L()
q.r=A.fV.gp(0)
d.aW(s,q)
q=A.k.F(a1,2)
s=d.a
J.by(s.save())
s.translate(w,e)
d.rp(0,Math.cos(q/2*3.141592653589793),1)
q=-u*0.6
r=B.L()
r.r=A.bJ.gp(0)
d.aW(new B.a7(0,q,0+u,q+t),r)
s.restore()
p=A.k.E(a1/3,0,1)
e-=u*0.6
r=e-g*0.28*p
d.bw(new B.u(w,e),new B.u(w,r),C.zJ(A.fh,g*0.025))
for(e=p-0.4,t=g*0.05,q=g*0.04,o=0;o<5;++o){n=A.k.E(e-o*0.1,0,1)
m=o*1.3
l=Math.cos(m)
k=Math.sin(m)
j=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
j.r=A.bl.gp(0)
i=j.G()
s.drawCircle(w+l*g*0.14*n,r+k*g*0.08*n,t*n,i)
i.delete()
if(n>0.6)C.ql(d,"\u2665",new B.u(w+Math.cos(m)*g*0.14,r+Math.sin(m)*g*0.08),q,A.bx,9999)}e=a1*4
w=Math.sin(e)
C.zL(d,new B.u(h*0.2,f),g*0.66,a1,!1,Math.abs(Math.sin(e))*g*0.01,2,A.aB,D.qi,!1,(w+1)/2)},
hFB(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=l*0.94,j=A.w.j(0.2)
$.V()
w=B.L()
w.r=j.gp(0)
d.aW(new B.a7(0,k,0+m,k+(l-k)),w)
v=A.k.by(A.k.E(f/5.5,0,1)*9)+1
for(u=m*0.62,j=k-l*0.03,w=l*0.26,t=l*0.07,s=d.a,r=0;r<v;++r){q=j-r*l*0.055
p=B.cr(new B.u(u,q),t,w)
o=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
o.r=A.cu.gp(0)
n=o.G()
s.drawOval(B.c2(p),n)
n.delete()
q=B.cr(new B.u(u,q),t,w)
p=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
p.b=A.ae
p.c=2
p.r=A.oV.gp(0)
p.d=A.bO
n=p.G()
s.drawOval(B.c2(q),n)
n.delete()}j=l*0.1
C.eZo(d,new B.u(u,j+A.k.F(f*1.6,1)*(k-t-v*l*0.055-j)),l*0.05,f*8)
j=l*0.08
C.ql(d,"$"+v*25,new B.u(u,j),j,A.dJ,9999)
j=f*5
t=Math.sin(j)
C.zL(d,new B.u(m*0.25,k),l*0.66,f,!1,Math.abs(Math.sin(j))*l*0.012,1,A.cs,D.qi,!0,(t+1)/2)},
hyh(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a1.a,f=a1.b,e=f*0.94,d=A.w.j(0.2)
$.V()
w=B.L()
w.r=d.gp(0)
a0.aW(new B.a7(0,e,0+g,e+(f-e)),w)
for(d=a0.a,w=f*0.012,v=f*0.55,u=a2*4,t=a2*2,s=f*0.15,r=f*0.03,q=0;q<3;q=m){p=Math.sin(u+q*1.7)
J.by(d.save())
d.translate(g*(0.5+0.14*q),v-Math.abs(p)*f*0.3)
d.rotate((t+q)*180/3.141592653589793,0,0)
p=B.bx(B.cr(A.J,s,s),new B.aY(r,r))
o=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
o.r=A.c.gp(0)
n=o.G()
d.drawRRect(B.ex(p),n)
n.delete()
m=q+1
p=m*2
o=q===0
l=0
for(;;){if(!(l<p-(o?1:0)))break
k=l*2.1
j=Math.cos(k)
k=Math.sin(k)
i=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
i.r=A.bh.gp(0)
n=i.G()
d.drawCircle(j*f*0.04,k*f*0.04,w,n)
n.delete();++l}d.restore()}for(d=a2*0.6,v=f*0.25,u=f*0.06,q=0;q<5;++q){h=A.k.F(d+q*0.2,1)
C.ql(a0,"\u2605",new B.u(g*(0.45+q*0.1),v-h*f*0.2),u,A.dJ.j(1-h),9999)}d=g*0.22
v=a2*6
u=Math.sin(v)
C.zL(a0,new B.u(d,e),f*0.66,a2,!0,Math.abs(Math.sin(v))*f*0.015,0,A.cf,D.qi,!0,(u+1)/2)
u=e-f*0.28
r=B.bx(B.cr(new B.u(d,u),f*0.07,f*0.16),new B.aY(r,r))
$.V()
v=B.L()
v.r=A.cz.gp(0)
a0.aA(r,v)
v=B.L()
v.r=A.aD.gp(0)
a0.ae(new B.u(d+f*0.05,u),w,v)},
hzC(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a0.a,i=a0.b,h=i*0.94,g=A.w.j(0.2),f=$.V(),e=B.L()
e.r=g.gp(0)
d.aW(new B.a7(0,h,0+j,h+(i-h)),e)
e=j*0.42
g=i*0.18
w=i*0.08
v=B.bx(new B.a7(e,g,e+j*0.5,g+i*0.5),new B.aY(w,w))
u=new B.aO(f.r,A.ao,null,null,B.a([],x.v))
u.D(new B.iO(v))
d.aL(u,C.zJ(A.c.j(0.5),4))
t=new B.QT(new B.uZ(B.wq(u),!1,B.a([],x.R))).gL(0)
for(g=a1*0.18,f=t.a,w=t.b,s=f.e,r=i*0.016,q=d.a,p=0;p<10;++p){o=A.k.F(g+p/10,1)
f.j2()
n=s[w].b
n===$&&B.c()
n=n.a.length()
f.j2()
n=s[w].Lh(o*n).a
o=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
o.r=A.dJ.gp(0)
m=o.G()
q.drawCircle(n.a,n.b,r,m)
m.delete()}l=a1>1.5
g=i*0.43
k=new B.u(j*0.92,g)
if(l){f=A.dJ.j(0.4+0.2*Math.sin(a1*8))
w=B.L()
w.r=f.gp(0)
w.z=A.xY
d.ae(k,i*0.2,w)}f=i*0.07
w=l?A.o6:A.bH
s=B.L()
s.r=w.gp(0)
d.ae(k,f,s)
g=B.bx(B.cr(new B.u(e,g),i*0.2,i*0.1),A.hK)
s=B.L()
s.r=A.d1.gp(0)
d.aA(g,s)
C.ql(d,"+",new B.u(e,i*0.36),f,A.c,9999)
g=l?(Math.sin(a1*6)+1)/2:0
e=l?Math.abs(Math.sin(a1*6))*i*0.012:0
C.zL(d,new B.u(j*0.2,h),i*0.68,a1,!1,e,0,A.bS,D.qi,l,g)
if(l)C.aLD(d,new B.u(j*0.24,i*0.16),"It works!",f,(a1-1.5)/0.4,A.c)},
hyR(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a1.a,f=a1.b,e=f*0.94,d=A.w.j(0.2)
$.V()
w=B.L()
w.r=d.gp(0)
a0.aW(new B.a7(0,e,0+g,e+(f-e)),w)
v=A.k.E((a2-0.3)/0.4,0,1)
u=A.k.E((a2-1.8)/0.4,0,1)
w=f*0.2
d=f*0.065
C.aLD(a0,new B.u(g*0.3,w),"How do I enroll?",d,v,A.o6)
if(a2>1&&a2<1.8)for(t=g*0.72,s=f*0.38,r=a2*9,q=f*0.015,p=a0.a,o=0;o<3;++o){n=Math.sin(r+o)
m=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
m.r=A.c.gp(0)
l=m.G()
p.drawCircle(t+o*f*0.05,s-Math.abs(n)*f*0.02,q,l)
l.delete()}C.aLD(a0,new B.u(g*0.7,f*0.38),"Tap Civic Registry!",d,u,A.en)
C.zL(a0,new B.u(g*0.2,e),f*0.62,a2,!1,0,2,A.aD,D.qi,a2<1,0)
k=g*0.78
j=e-f*0.28
d=f*0.04
w=B.bx(B.cr(new B.u(k,j),f*0.22,w),new B.aY(d,d))
t=B.L()
t.r=A.aJ.gp(0)
a0.aA(w,t)
t=f*0.18
w=j-t
d=B.bx(B.cr(new B.u(k,w),f*0.14,t),new B.aY(d,d))
t=B.L()
t.r=A.cm.gp(0)
a0.aA(d,t)
for(d=a0.a,t=a2*1.1,s=f*0.02,i=0;i<2;++i){h=D.v4[i]
r=A.k.F(t,1)>0.08?A.b6:A.hR
q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
q.r=r.gp(0)
l=q.G()
d.drawCircle(k+h*f*0.04,w,s,l)
l.delete()}a0.bw(new B.u(k,j-f*0.25),new B.u(k,j-f*0.3),C.zJ(A.af,3))
d=B.L()
d.r=A.aD.gp(0)
a0.ae(new B.u(k,j-f*0.31),f*0.015,d)},
f9Y:function f9Y(d,e,f){this.a=d
this.b=e
this.c=f},
hQn(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.fqz(),c9=new C.fqB(),d0=new C.fqC(),d1=new C.fqA(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aA(w,d1.$3(new B.a7(w.a,w.b,w.c,w.d),A.bN,A.bH))
d3.bw(D.dOL,D.dMz,c9.$2(A.dx,1.4))
d3.bw(D.dMp,D.dMo,c9.$2(A.bu,2.4))
d3.bw(D.dMq,T.aBD,c9.$2(A.bu,2.4))
if(c7){d2=c8.$1(A.fj.j(0.5))
d2.z=A.P5
d3.ae(D.dM9,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.u(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aA(d0.$4(-22,-26,44,50),d1.$3(D.aHh,A.aN,A.cm))
d3.ae(A.cF,16,c8.$1(A.bu))
d3.ae(A.cF,13,c8.$1(c7?A.aY.j(0.85):A.M))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(0,4)
d3.iU(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.af,3).G()
d2.drawLine.apply(d2,[0,0,s*11,t*11,r])
r.delete()}d2.restore()
for(t=d5*0.8,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=Math.sin(v*2+d5)
r=c8.$1(A.c.j(0.8*(1-u))).G()
d2.drawCircle(s*9,4-u*12,1.6+u*2,r)
r.delete()}}d3.ae(D.dOH,2.4,c8.$1(c7?A.bl:A.aj))
d3.ae(D.dPo,2.4,c8.$1(A.aj))
return!0
case"blender":d3.aA(d0.$5(-14,14,28,12,4),c8.$1(A.eo))
d2=$.V().r
t=x.v
q=new B.aO(d2,A.ao,c6,c6,B.a([],t))
q.D(new B.b4(-16,-26))
q.D(new B.ao(16,-26))
q.D(new B.ao(12,14))
q.D(new B.ao(-12,14))
q.D(new B.bD())
d3.aL(q,c8.$1(A.fj.j(0.35)))
if(c7){d2=new B.aO(d2,A.ao,c6,c6,B.a([],t))
d2.D(new B.b4(-14,-10))
d2.D(new B.ao(14,-10))
d2.D(new B.ao(12,14))
d2.D(new B.ao(-12,14))
d2.D(new B.bD())
d3.aL(d2,c8.$1(A.aD.j(0.7)))}d3.aL(q,c9.$2(A.af,1.6))
d2=d3.a
J.by(d2.save())
d2.translate(0,10)
d3.iU(0,d4.y)
d3.bw(D.a28,D.aBT,c9.$2(A.bY,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.F(s+v*0.33,1)
r=c8.$1(A.fi).G()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aA(d0.$5(-10,-4,20,10,4),c8.$1(A.aI))
d3.ae(A.i9,3,c8.$1(c7?A.bl:A.aj))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=D.asQ[m]
r=c9.$2(A.bu,3).G()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.by(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).G()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=B.cr(A.J,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).G()
d2.drawOval(B.c2(p),r)
r.delete()}d2.restore()}return!0
case"drill":w=new B.aO($.V().r,A.ao,c6,c6,B.a([],x.v))
w.D(new B.b4(-24,-12))
w.D(new B.ao(10,-12))
w.D(new B.ao(10,2))
w.D(new B.ao(-2,2))
w.D(new B.ao(-6,22))
w.D(new B.ao(-16,22))
w.D(new B.ao(-14,2))
w.D(new B.ao(-24,2))
w.D(new B.bD())
d3.aL(w,d1.$3(D.eoI,A.aK,A.dn))
d3.aW(D.eo7,c8.$1(A.e0))
d2=d3.a
J.by(d2.save())
d2.translate(18,-5)
d3.iU(0,d4.y*2)
d3.bw(A.J,D.dMt,c9.$2(A.bY,2.4))
d3.bw(A.a27,D.dMs,c9.$2(A.hB,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dJ.j(1-u)).G()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.E(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new B.aO($.V().r,A.ao,c6,c6,B.a([],x.v))
d2.D(new B.b4(16,-6))
d2.D(new B.ao(52,-26))
d2.D(new B.ao(52,18))
d2.D(new B.ao(16,4))
d2.D(new B.bD())
d3.aL(d2,c8.$1(A.bJ.j(0.35*v)))}d3.aA(d0.$5(-26,-6,30,12,3),d1.$3(D.eoO,A.br,A.cz))
k=new B.aO($.V().r,A.ao,c6,c6,B.a([],x.v))
k.D(new B.b4(4,-6))
k.D(new B.ao(18,-12))
k.D(new B.ao(18,12))
k.D(new B.ao(4,6))
k.D(new B.bD())
d3.aL(k,c8.$1(A.eo))
d3.ae(D.dMx,7,c8.$1(c7?A.c:A.e0))
return!0
case"neon":d3.aA(d0.$5(-30,-14,60,28,6),c8.$1(I.o4))
if(c7)j=d4.ax>0.5||A.o.F(A.k.by(d5*17),3)!==0
else j=!1
i=j?A.bX:D.b84
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.bX.j(0.35))
t.z=A.l9
d3.aA(d2,t)}d3.aA(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.dOR,i,17)
return!0
case"microwave":d3.aA(d0.$4(-30,-18,60,38),d1.$3(D.eoU,A.bY,A.br))
d2=d0.$5(-26,-14,38,30,3)
d3.aA(d2,c8.$1(c7?A.bJ.j(0.75):A.aE))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(-7,8)
d3.iU(0,d4.y*0.5)
d3.hU(B.cr(A.J,7,22),c8.$1(A.dn))
d2.restore()}d3.aA(d0.$5(15,-14,12,12,2),c8.$1(I.o4))
if(c7)d6.$5(d3,"0:"+A.a.aU(A.o.u(59-A.o.F(A.k.by(d5),60)),2,"0"),D.dMy,A.bg,6.5)
d3.ae(D.dMK,4,c8.$1(A.e0))
return!0
case"doorbell":d3.aA(d0.$5(-16,-26,32,52,8),c8.$1(A.aJ))
d3.ae(A.PU,10,c8.$1(c7?A.cu:A.bu))
d2=d3.a
J.by(d2.save())
d2.translate(0,-8)
d3.iU(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.dPq,A.c,16)
d2.restore()
d3.ae(A.jP,6,c8.$1(A.d3))
d3.ae(A.jP,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=B.bS(A.PU,14+v*6+A.k.F(t,6))
r=c9.$2(A.cu.j(0.9-v*0.3),1.8).G()
d2.drawArc.apply(d2,[B.c2(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bw(D.dOQ,D.dPm,c9.$2(A.bu,4))
d2=d3.a
J.by(d2.save())
d3.iU(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aA(d0.$5(-24,-14,46,22,5),d1.$3(D.eoJ,A.bY,A.aj))
d3.ae(D.aBF,8,c8.$1(A.aE))
d3.ae(D.aBF,4.5,c8.$1(c7?A.aY:A.cz))
d3.ae(D.dOO,2.2,c8.$1(c7&&A.o.F(A.k.by(d5*1.6),2)===0?A.aD:A.k1))
d2.restore()
if(c7)d6.$5(d3,"REC",D.dOZ,A.aD,9)
return!0
case"console":d3.aA(d0.$5(-28,-22,56,44,8),d1.$3(D.eoR,A.j2,A.f3))
d3.aA(d0.$5(-20,-17,40,22,3),c8.$1(A.dI))
if(c7){d2=d5*2.3
d3.ae(new B.u(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aW(new B.a7(-18,t,-15.6,t+8),c8.$1(A.bg))
d2=-9+Math.sin(d2-0.4)*6
d3.aW(new B.a7(15.6,d2,18,d2+8),c8.$1(A.bX))}d3.ae(D.dOK,4,c8.$1(A.aU))
d3.ae(D.dMu,2.4,c8.$1(A.aD))
d3.ae(D.dMH,2.4,c8.$1(A.bl))
return!0
case"heartmon":d3.aA(d0.$5(-30,-22,60,44,6),c8.$1(A.aE))
d3.aA(d0.$5(-26,-18,52,28,3),c8.$1(A.dI))
if(c7){d2=$.V()
t=B.a([],x.v)
h=new B.aO(d2.r,A.ao,c6,c6,t)
for(d2=d5*0.5,l=-25;l<=25;++l){u=A.k.F((l+25)/50-d2,1)
if(u<0.1)g=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)g=0.6
else{s=u<0.2?-0.4:0
g=s}f=-4+g*11
if(l===-25){s=new B.b4(l,f)
t.push(s)
p=h.f
if(p!=null)s.bx(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new B.ao(l,f)
t.push(s)
p=h.f
if(p!=null)s.bx(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aL(h,c9.$2(A.bg,1.8))
d6.$5(d3,"72",D.dMv,A.fT,11)
d2=d5*9
d6.$5(d3,"\u2665",D.dP2,A.fT.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ae(D.dOT,3,c8.$1(c7?A.bl:A.bu))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aA(d2,c8.$1(A.cs.j(c7?0.5:0.3)))
d3.aA(d0.$5(-26,-20,52,40,4),c9.$2(A.af,1.6))
d3.aW(D.eoL,c8.$1(D.Jc))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.by(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.rp(0,-1,1)
d3.hU(B.cr(A.J,8,14),c8.$1(A.cM))
d2=new B.aO($.V().r,A.ao,c6,c6,B.a([],x.v))
d2.D(new B.b4(-6,0))
d2.D(new B.ao(-12,-4))
d2.D(new B.ao(-12,4))
d2.D(new B.bD())
d3.aL(d2,c8.$1(A.cf))
d3.ae(D.dNb,1.2,c8.$1(A.w))
s.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.k.F(d2+v*0.2,1)
t=Math.sin(u*8+v)
p=A.o.F(v,2)
r=c9.$2(A.af,1).G()
s.drawCircle(-18+t*2,13-u*30,1.4+p,r)
r.delete()}}return!0
case"lighthouse":d2=$.V().r
t=x.v
e=new B.aO(d2,A.ao,c6,c6,B.a([],t))
e.D(new B.b4(-9,22))
e.D(new B.ao(-5,-16))
e.D(new B.ao(5,-16))
e.D(new B.ao(9,22))
e.D(new B.bD())
d3.aL(e,d1.$3(D.epe,A.c,A.bM))
d3.aW(D.epd,c8.$1(c7?A.dJ:A.bu))
s=new B.aO(d2,A.ao,c6,c6,B.a([],t))
s.D(new B.b4(-7,-22))
s.D(new B.ao(0,-29))
s.D(new B.ao(7,-22))
s.D(new B.bD())
d3.aL(s,c8.$1(A.eZ))
if(c7){d=Math.sin(d4.y*0.3)
d2=new B.aO(d2,A.ao,c6,c6,B.a([],t))
d2.D(new B.b4(0,-19))
t=d*34
d2.D(new B.ao(t,-26))
d2.D(new B.ao(t,-12))
d2.D(new B.bD())
d3.aL(d2,c8.$1(A.dJ.j(0.45)))
d2=c8.$1(A.dJ.j(0.35))
d2.z=A.P5
d3.ae(D.dMa,14,d2)}return!0
case"discoball":d3.bw(D.dMf,E.aBB,c9.$2(A.e0,1.4))
d3.ae(A.J,16,d1.$3(D.eow,A.aN,A.aj))
for(d2=d3.a,v=0;v<8;++v){t=-12+v*3.4
r=c9.$2(A.dl,0.7).G()
d2.drawLine.apply(d2,[-16,t,16,t,r])
r.delete()}for(v=0;v<5;++v){d=d4.y*0.5+v*1.26
t=Math.cos(d)
s=Math.sin(d)
p=Math.cos(d)
r=c9.$2(A.dl,0.7).G()
d2.drawLine.apply(d2,[t*16*0.3,s*16*0.3,p*16,0,r])
r.delete()}if(c7)for(t=d5*2,s=d5*9,v=0;v<10;++v){d=t+v*0.63
a0=22+A.o.F(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.cQS[A.o.F(v,4)].j(0.5+0.5*Math.sin(s+v))).G()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aA(d0.$5(-14,-4,28,24,5),d1.$3(D.eou,A.cm,A.aj))
d3.aA(d0.$5(-12,-26,24,20,5),d1.$3(D.eon,A.aJ,A.bH))
d3.bw(D.dMe,D.dMg,c9.$2(A.bu,1.6))
d3.ae(D.dMh,2.2,c8.$1(c7?A.aD:A.bu))
a1=c7&&A.k.F(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=D.cVY[m]
if(c7)t=a1?A.b6:A.hR
else t=A.cz
r=c8.$1(t).G()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.by(d2.save())
d2.translate(14,0)
d3.iU(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bw(A.J,D.a24,c9.$2(A.bH,4))
d2.restore()
d3.bw(D.dOD,D.dOX,c9.$2(A.bH,4))
d3.aW(D.epc,c8.$1(c7?A.b6.j(0.7):A.aI))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.asO[m]+1,d2,10,14,2)
p=B.aq(A.bJ,A.dn,a2)
p.toString
r=c8.$1(p).G()
t.drawRRect(B.ex(s),r)
r.delete()}d3.aA(d0.$5(-24,-6,48,26,8),d1.$3(D.eoK,A.bY,A.br))
for(m=0;m<2;++m){l=D.asO[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fy:A.aE).G()
t.drawRRect(B.ex(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cM.j(0.5))
s.z=G.me
r=s.G()
t.drawRRect(B.ex(d2),r)
r.delete()}}d3.bw(D.dMO,D.dN4,c9.$2(A.aE,3))
return!0
case"ledstrip":d3.aA(d0.$5(-34,-4,68,10,4),c8.$1(A.cz))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.F(t+v*40,360)
i=c7?new H.mv(1,a3,0.8,1).iu():A.eo
if(c7){s=c8.$1(i.j(0.45))
s.z=G.me
r=s.G()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).G()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aA(d0.$5(-40,-2,6,6,1),c8.$1(A.e0))
return!0
case"pump":d3.aA(d0.$5(-16,-2,32,22,6),d1.$3(D.eoz,A.cs,A.Ji))
d3.ae(D.dP3,8,c8.$1(A.qe))
d2=d3.a
J.by(d2.save())
d2.translate(-2,9)
d3.iU(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.fj,2.4).G()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new B.aO($.V().r,A.ao,c6,c6,B.a([],x.v))
t.D(new B.b4(16,6))
t.D(new B.ao(26,6))
t.D(new B.ao(26,-20))
t.D(new B.ao(10,-20))
d3.aL(t,c9.$2(A.bH,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.F(t+v*0.2,1)
r=c8.$1(A.fY).G()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.ae(D.dNC,3.2,c8.$1(A.fY.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.by(d2.save())
d3.iU(0,-0.15)
d3.aA(d0.$5(-26,-14,40,22,10),d1.$3(D.eoM,A.jh,A.rw))
d3.aA(d0.$5(14,-10,12,14,3),c8.$1(A.cz))
d3.aA(d0.$5(-10,6,12,22,4),c8.$1(A.eo))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).G()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cM.j(0.4))
d2.z=G.me
d3.ae(D.dMJ,8,d2)}return!0
case"headphones":d3.fa(B.cr(A.dz,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bu,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=D.asP[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new B.a7(s,0,s+14,20),A.bA,A.oU).G()
d2.drawRRect(B.ex(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=B.bS(new B.u(l,10),10+v*5+A.k.F(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eB.j(0.9-v*0.3),1.6).G()
d2.drawArc.apply(d2,[B.c2(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new B.u(-4,-8-A.k.F(d5*14,8)),A.jZ,12)
return!0
case"smartwatch":d3.aA(d0.$5(-8,-30,16,14,3),c8.$1(A.cz))
d3.aA(d0.$5(-8,14,16,14,3),c8.$1(A.cz))
d3.aA(d0.$5(-14,-17,28,32,8),d1.$3(D.eos,A.e0,A.eo))
d3.aA(d0.$5(-11,-14,22,26,6),c8.$1(A.dI))
if(c7){a4=new B.Q(Date.now(),0,!1)
d6.$5(d3,A.a.aU(A.o.u(B.dj(a4)),2,"0")+":"+A.a.aU(A.o.u(B.fY(a4)),2,"0"),D.dMl,A.bg,9.5)
g=(Math.sin(d5*9)+1)/2
d2=B.aq(A.D0,A.fT,g)
d2.toString
d6.$5(d3,"\u2665",new B.u(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.F(A.k.by(d5*2),6)),A.dz,A.c,7)}return!0
case"tablet":d3.aA(d0.$5(-30,-22,60,44,6),c8.$1(I.o4))
d3.aA(d0.$5(-30,-22,60,44,6),c9.$2(A.bH,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(B.ex(a5),$.p0(),!0)
d2.translate(-27,-19)
C.JL(d3,D.euk,d5,c6)
d2.restore()}else d3.aA(a5,c8.$1(D.uh))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aA(a6,d1.$3(new B.a7(a6.a,a6.b,a6.c,a6.d),A.e_,A.dm))
d3.aA(a6,c9.$2(A.ba,1.2))
d3.ae(D.aC_,9,c8.$1(A.aE))
d3.ae(D.aC_,6,c9.$2(A.dn,2))
d3.aA(d0.$5(4,-2,14,10,2),c8.$1(A.aE))
d3.aA(d0.$5(-22,-19,44,12,2),c8.$1(A.dI))
d2=A.k.aa(d4.db,1)
t=A.k.aa(c7?d4.dx:d4.e,1)
s=c7?A.bg:A.aj
d6.$5(d3,d2+"\u2192"+t+"V",D.dNG,s,8.2)
d3.ae(D.dMA,2.4,c8.$1(c7?A.bl:A.aI))
d6.$5(d3,"IN",D.dOY,A.af,6)
d6.$5(d3,"OUT",D.dNu,A.af,6)
return!0
case"regulator":a7=c7?A.k.E(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.aq(A.bH,A.aD,a7)
t.toString
d3.aA(d2,c8.$1(t))
d3.ae(D.dMb,3,c8.$1(A.aI))
d3.aA(d0.$5(-12,-4,24,18,3),d1.$3(D.eoo,A.eo,A.hw))
d6.$5(d3,"7805",D.a28,A.af,8)
for(d2=d3.a,m=0;m<3;++m){t=D.cVZ[m]-1
r=c8.$1(A.e2).G()
d2.drawRect(B.c2(new B.a7(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.F(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).G()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.dPp,A.bh,9)
return!0
case"diode":d3.bw(D.aC3,D.aBO,c9.$2(A.e2,2.4))
d3.aA(d0.$5(-14,-7,28,14,6),c8.$1(A.aX.j(0.85)))
d3.aW(D.eod,c8.$1(A.bh))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dJ.j(0.4))
t.z=A.j9
d3.aA(d2,t)}d2=new B.aO($.V().r,A.ao,c6,c6,B.a([],x.v))
d2.D(new B.b4(-8,-4))
d2.D(new B.ao(-8,4))
d2.D(new B.ao(-1,0))
d2.D(new B.bD())
d3.aL(d2,c8.$1(A.aU))
d6.$5(d3,"one way",D.dOM,A.az,8)
return!0
case"ldr":d3.bw(D.aC3,D.a28,c9.$2(A.e2,2.4))
d3.bw(D.aBT,D.aBO,c9.$2(A.e2,2.4))
d3.ae(A.J,12,c8.$1(A.dn))
d3.ae(A.J,12,c9.$2(A.rE,1.6))
d2=$.V()
t=B.a([],x.v)
a8=new B.aO(d2.r,A.ao,c6,c6,t)
a8.D(new B.b4(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new B.ao(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.bx(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aL(a8,c9.$2(A.bJ,1.4))
d2=B.aq(A.bu,A.dJ,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.u(-6,-26),d2,14)
d6.$5(d3,""+A.k.U(20+980*(1-d4.f))+"\u03a9",D.dOE,A.af,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.ed
break A}if("sonytv"===d2){t=A.q6
break A}if("appletv"===d2){t=A.e2
break A}t=D.a8T
break A}a9=d2==="lgtv"||d2==="appletv"
d3.aA(d0.$5(-36,-24,72,a9?42:44,6),c8.$1(t))
t=a9?-35:-33
s=a9?-23:-21
p=a9?70:66
a5=d0.$5(t,s,p,a9?40:38,3)
t=a5.a
s=a5.b
if(c7){p=d3.a
J.by(p.save())
p.clipRRect(B.ex(a5),$.p0(),!0)
p.translate(t,s)
C.fKt(d3,new B.as(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ae(D.dN5,1.6,c8.$1(A.bg))}else{d3.aA(a5,c8.$1(D.uh))
p=new B.aO($.V().r,A.ao,c6,c6,B.a([],x.v))
p.D(new B.b4(t,s))
p.D(new B.ao(t+24,s))
p.D(new B.ao(t,s+22))
p.D(new B.bD())
d3.aL(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aA(d0.$5(-22,19,44,3,1.5),c8.$1(A.e0))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=D.v4[m]
s=$.V()
p=B.a([],t)
s=new B.aO(s.r,A.ao,c6,c6,p)
p.push(new B.b4(l*30,20))
p.push(new B.ao(l*22,20))
p.push(new B.ao(l*26,26))
p.push(new B.bD())
r=c8.$1(A.e0).G()
p=s.gbL().a.snapshot()
d2.drawPath((s.e=new B.cE(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.dOh,A.bY,5.5)
break
case"appletv":d2=new B.aO($.V().r,A.ao,c6,c6,B.a([],x.v))
d2.D(new B.b4(-8,18))
d2.D(new B.ao(8,18))
d2.D(new B.ao(12,25))
d2.D(new B.ao(-12,25))
d2.D(new B.bD())
d3.aL(d2,c8.$1(D.Ui))
d6.$5(d3,"Apple TV",D.dNH,A.bu,4.8)
break
default:d3.aA(d0.$5(-34,19,68,7,3),c8.$1(D.b6P))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dl,0.6).G()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.dPl,D.Jc,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.lC.h(0,d2)
b1=b0.b===D.vl
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
b7=B.aq(b6,A.c,0.35)
b7.toString
d3.aA(w,d1.$3(new B.a7(p,o,b4,b5),b7,b6))
a5=d0.$5(t+2,s,b2-4,b3-4,3.5)
if(c7){t=d3.a
J.by(t.save())
t.clipRRect(B.ex(a5),$.p0(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
C.JL(d3,new B.as(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aA(a5,c8.$1(D.uh))
if(b1){t=a5.b
s=a5.d
d3.bw(new B.u(0,t),new B.u(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aA(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.ae(new B.u(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aA(d0.$5(-17,-28,34,52,4),c8.$1(A.eo))
d3.aA(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bY))
if(c7){d6.$5(d3,"NGMY",D.dPs,A.aE,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.F(v,4)===3?14:22
r=c8.$1(A.br).G()
d2.drawRect(B.c2(new B.a7(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ae(A.aBz,1.6,c8.$1(A.aE))}return!0
case"laptop":d3.aA(d0.$5(-30,-28,60,42,4),d1.$3(D.eoV,A.cm,A.br))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(B.ex(b8),$.p0(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
C.JL(d3,new B.as(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aA(b8,c8.$1(D.uh))
d2=new B.aO($.V().r,A.ao,c6,c6,B.a([],x.v))
d2.D(new B.b4(-38,16))
d2.D(new B.ao(38,16))
d2.D(new B.ao(34,21))
d2.D(new B.ao(-34,21))
d2.D(new B.bD())
d3.aL(d2,c8.$1(D.Ui))
d3.aA(d0.$5(-7,16,14,2,1),c8.$1(A.br))
return!0
case"imac":d3.aA(d0.$5(-32,-28,64,46,5),d1.$3(D.eoZ,A.bN,A.cm))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(B.ex(b9),$.p0(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
C.JL(d3,new B.as(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aA(b9,c8.$1(D.uh))
d3.ae(D.aBu,2,c8.$1(A.bH))
d2=new B.aO($.V().r,A.ao,c6,c6,B.a([],x.v))
d2.D(new B.b4(-6,18))
d2.D(new B.ao(6,18))
d2.D(new B.ao(10,26))
d2.D(new B.ao(-10,26))
d2.D(new B.bD())
d3.aL(d2,c8.$1(D.Ui))
return!0
case"monitor":d3.aA(d0.$5(-34,-28,68,40,3),c8.$1(A.ed))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(B.ex(c0),$.p0(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
C.JL(d3,new B.as(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aA(c0,c8.$1(D.uh))
d3.aW(D.ep4,c8.$1(A.br))
d3.aA(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.e0))
return!0
case"projector":if(c7){d2=new B.aO($.V().r,A.ao,c6,c6,B.a([],x.v))
d2.D(new B.b4(14,4))
d2.D(new B.ao(-32,-42))
d2.D(new B.ao(34,-42))
d2.D(new B.bD())
d3.aL(d2,c8.$1(A.dJ.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.by(d2.save())
d2.clipRRect(B.ex(c1),$.p0(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
C.JL(d3,new B.as(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aA(d0.$5(-26,-4,52,24,6),d1.$3(D.eoN,A.iH,A.e0))
d3.ae(D.aBE,7,c8.$1(A.aE))
d3.ae(D.aBE,4,c8.$1(c7?A.dJ:A.cz))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dl,1).G()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aA(d0.$5(-34,-10,68,32,12),c8.$1(A.aE))
c2=d0.$5(-30,-20,60,28,8)
d3.aA(c2,c8.$1(I.o4))
d3.aA(c2,c9.$2(A.bu,1.2))
if(c7){c3=new B.aO($.V().r,A.ao,c6,c6,B.a([],x.v))
c3.D(new B.b4(-26,4))
c3.D(new B.cO(-10,-14+Math.sin(d5)*3,6,-6))
c3.D(new B.ao(22,-16))
d3.aL(c3,c9.$2(A.aY,2.2))
d2=A.k.F(d5*6,48)
d3.ae(new B.u(-26+d2,4-d2*0.1),2.4,c8.$1(A.bg))
d6.$5(d3,""+(88+A.o.F(A.k.by(d5*2),5)),D.dND,A.c,10)
d6.$5(d3,"km/h",D.dNA,A.az,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aA(c4,d1.$3(new B.a7(c4.a,c4.b,c4.c,c4.d),A.e0,A.eo))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(B.ex(c5),$.p0(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
C.JL(d3,new B.as(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.bA.j(0.2))
d2.z=A.l9
d3.ae(A.J,26,d2)}else d3.aA(c5,c8.$1(A.M))
d3.bw(D.dP7,D.dPc,c9.$2(A.br,4))
d3.bw(D.dN6,D.dNe,c9.$2(A.br,4))
return!0}return!1},
fqz:function fqz(){},
fqB:function fqB(){},
fqC:function fqC(){},
fqA:function fqA(){},
fN5(d,e,f,g){return new C.agk(d,g,f,e)},
Eo(d,e,f){return new C.b7w(d,e,f)},
agk:function agk(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
agl:function agl(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.fc$=h
_.kz$=i
_.fF$=j
_.fd$=k
_.bp$=l
_.a6$=m
_.c=_.a=null},
bDj:function bDj(d,e){this.a=d
this.b=e},
bDk:function bDk(d){this.a=d},
bDi:function bDi(d){this.a=d},
bDl:function bDl(){},
bDm:function bDm(d){this.a=d},
bDn:function bDn(d,e,f){this.a=d
this.b=e
this.c=f},
bDh:function bDh(d,e){this.a=d
this.b=e},
bDf:function bDf(d,e){this.a=d
this.b=e},
bDg:function bDg(d,e,f){this.a=d
this.b=e
this.c=f},
bD9:function bD9(d,e){this.a=d
this.b=e},
bDa:function bDa(){},
bDb:function bDb(d,e){this.a=d
this.b=e},
bDc:function bDc(d,e){this.a=d
this.b=e},
bDd:function bDd(d){this.a=d},
bDe:function bDe(d){this.a=d},
bDC:function bDC(d){this.a=d},
bDD:function bDD(){},
bCN:function bCN(){},
bDE:function bDE(d,e){this.a=d
this.b=e},
bDB:function bDB(d,e,f){this.a=d
this.b=e
this.c=f},
bDw:function bDw(d){this.a=d},
bDt:function bDt(d,e,f){this.a=d
this.b=e
this.c=f},
bDu:function bDu(d,e){this.a=d
this.b=e},
bDx:function bDx(d){this.a=d},
bDr:function bDr(d,e){this.a=d
this.b=e},
bDs:function bDs(d,e){this.a=d
this.b=e},
bDv:function bDv(d){this.a=d},
bDy:function bDy(d){this.a=d},
bDp:function bDp(d,e){this.a=d
this.b=e},
bDq:function bDq(d,e){this.a=d
this.b=e},
bDz:function bDz(d){this.a=d},
bDo:function bDo(d){this.a=d},
bDA:function bDA(d){this.a=d},
bCO:function bCO(d,e){this.a=d
this.b=e},
bD6:function bD6(d,e){this.a=d
this.b=e},
bD8:function bD8(d,e){this.a=d
this.b=e},
bD7:function bD7(d,e){this.a=d
this.b=e},
bCU:function bCU(d,e){this.a=d
this.b=e},
bCV:function bCV(d){this.a=d},
bCT:function bCT(d){this.a=d},
bCW:function bCW(d,e,f){this.a=d
this.b=e
this.c=f},
bCS:function bCS(d,e){this.a=d
this.b=e},
bCZ:function bCZ(d,e){this.a=d
this.b=e},
bD_:function bD_(d,e){this.a=d
this.b=e},
bD0:function bD0(d,e){this.a=d
this.b=e},
bD1:function bD1(d,e,f){this.a=d
this.b=e
this.c=f},
bCR:function bCR(d,e){this.a=d
this.b=e},
bD2:function bD2(d,e,f){this.a=d
this.b=e
this.c=f},
bCQ:function bCQ(d,e){this.a=d
this.b=e},
bD3:function bD3(d,e,f){this.a=d
this.b=e
this.c=f},
bCP:function bCP(d,e){this.a=d
this.b=e},
bD4:function bD4(d){this.a=d},
bD5:function bD5(d){this.a=d},
bCX:function bCX(d){this.a=d},
bCY:function bCY(d){this.a=d},
b7w:function b7w(d,e,f){this.a=d
this.b=e
this.c=f},
f1p:function f1p(){},
f1q:function f1q(){},
f1r:function f1r(){},
f1c:function f1c(){},
f1s:function f1s(){},
f1b:function f1b(){},
f1t:function f1t(){},
f1g:function f1g(){},
f1a:function f1a(){},
f1h:function f1h(){},
f19:function f19(){},
f1i:function f1i(){},
f18:function f18(){},
f1j:function f1j(){},
f16:function f16(){},
f17:function f17(){},
f1k:function f1k(){},
f14:function f14(){},
f15:function f15(){},
f1l:function f1l(){},
f13:function f13(){},
Tf:function Tf(d){this.a=d},
aAv:function aAv(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dKs:function dKs(d,e){this.a=d
this.b=e},
dKB:function dKB(d){this.a=d},
dKC:function dKC(){},
dKD:function dKD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKE:function dKE(){},
dKr:function dKr(d){this.a=d},
dKq:function dKq(d,e,f){this.a=d
this.b=e
this.c=f},
dKp:function dKp(d,e){this.a=d
this.b=e},
dKn:function dKn(d){this.a=d},
dKo:function dKo(){},
dKA:function dKA(d){this.a=d},
dKz:function dKz(d){this.a=d},
dKx:function dKx(d,e){this.a=d
this.b=e},
dKv:function dKv(d){this.a=d},
dKw:function dKw(){},
dKy:function dKy(d,e,f){this.a=d
this.b=e
this.c=f},
dKt:function dKt(d,e){this.a=d
this.b=e},
dKu:function dKu(){},
dKF:function dKF(d){this.a=d},
dKG:function dKG(d,e){this.a=d
this.b=e},
dKH:function dKH(d){this.a=d},
dKI:function dKI(d){this.a=d},
auH:function auH(d,e){this.c=d
this.a=e},
b5I:function b5I(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
cw6:function cw6(d){this.a=d},
b5H:function b5H(d,e){this.b=d
this.a=e},
cw5:function cw5(d){this.a=d},
av_:function av_(){},
av0:function av0(){},
aGO:function aGO(){},
btr:function btr(){},
hQo(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bS(A.vd,23)
$.V()
b8=B.L()
b8.r=A.aE.gp(0)
b9.ae(A.vd,25,b8)
b8=B.L()
b8.sar(D.dWV.av(0,v))
b9.ae(A.vd,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
o.r=A.bh.gp(0)
o.c=A.o.F(u,5)===0?1.8:1
n=o.G()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.k.E(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.L()
r.r=A.bM.gp(0)
r.c=2
r.d=A.bO
b9.bw(A.vd,new B.u(b8*18,s*18-2),r)
r=B.L()
r.r=A.bh.gp(0)
b9.ae(A.vd,3,r)
c2.$5(b9,w?"V":"A",D.dPf,A.bh,12)
c2.$5(b9,w?A.k.aa(m,1)+" V":""+A.k.U(m*1000)+" mA",D.dOJ,A.aE,9.5)
return!0
case"fan":b8=B.bx(D.eok,A.i0)
$.V()
s=B.L()
s.r=A.bu.gp(0)
b9.aA(b8,s)
s=B.L()
s.r=A.aj.gp(0)
b9.aW(D.ep5,s)
s=B.L()
s.r=A.M.j(0.6).gp(0)
b9.ae(D.ve,22,s)
for(b8=b9.a,u=0;u<4;++u){J.by(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.cr(A.aBy,18,10)
r=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
r.r=A.fY.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.G()
b8.drawOval(B.c2(s),n)
n.delete()
b8.restore()}b8=B.L()
b8.r=A.bj.gp(0)
b9.ae(D.ve,4,b8)
b8=B.L()
b8.b=A.ae
b8.c=2
b8.r=A.cm.gp(0)
b9.ae(D.ve,22,b8)
b8=B.L()
b8.b=A.ae
b8.c=0.8
b8.r=A.j3.gp(0)
b9.ae(D.ve,14,b8)
return!0
case"speaker":l=B.bx(D.aHh,A.tJ)
$.V()
b8=B.L()
b8.sar(D.ajV.av(0,new B.a7(l.a,l.b,l.c,l.d)))
b9.aA(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=B.L()
b8.sar(D.dXg.av(0,B.bS(A.ct,15)))
b9.ae(A.ct,14+k,b8)
b8=B.L()
b8.r=A.e0.gp(0)
b9.ae(A.ct,5,b8)
b8=B.L()
b8.r=A.br.gp(0)
b9.ae(D.aBA,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=B.bS(D.dMN,6+u*6+A.k.F(b8,6))
q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
q.b=A.ae
q.c=1.8
q.r=A.bX.j(0.9-u*0.2).gp(0)
n=q.G()
s.drawArc.apply(s,[B.c2(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=B.bx(D.eoY,A.tJ)
$.V()
b8=B.L()
b8.sar(D.bIF.av(0,new B.a7(j.a,j.b,j.c,j.d)))
b9.aA(j,b8)
b8=B.bx(D.aHj,A.hK)
s=B.L()
s.r=A.hw.gp(0)
b9.aA(b8,s)
if(b7){i=new B.Q(Date.now(),0,!1)
h=B.AV(i)<500?":":" "
g=A.a.aU(A.o.u(B.dj(i)),2,"0")
f=A.a.aU(A.o.u(B.fY(i)),2,"0")
b8=B.L()
b8.r=A.bg.j(0.12).gp(0)
b9.aW(D.aHj,b8)
c2.$5(b9,g+h+f,D.dP0,A.bg,21)}b8=B.L()
b8.r=A.cm.gp(0)
b9.ae(D.dP_,2.4,b8)
b8=B.L()
b8.r=A.cm.gp(0)
b9.ae(D.dMR,2.4,b8)
return!0
case"calculator":j=B.bx(D.eoE,A.h5)
$.V()
b8=B.L()
b8.sar(D.bIp.av(0,new B.a7(j.a,j.b,j.c,j.d)))
b9.aA(j,b8)
b8=B.bx(D.eoy,A.h4)
s=B.L()
s.r=(b7?A.Ur:D.b8y).gp(0)
b9.aA(b8,s)
if(b7)c2.$5(b9,"3.14159",D.dOI,A.TB,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=B.bx(new B.a7(q,s,q+6,r),A.Qm)
$.V()
p=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
p.r=(d===3?A.cf:A.bY).gp(0)
n=p.G()
b8.drawRRect(B.ex(q),n)
n.delete()}return!0
case"phone":j=B.bx(D.eov,A.h5)
$.V()
b8=B.L()
b8.r=I.o4.gp(0)
b9.aA(j,b8)
b8=B.L()
b8.b=A.ae
b8.c=1.9
b8.r=D.abL.gp(0)
b9.aA(j,b8)
a0=B.bx(D.eom,A.i0)
if(b7){b8=B.L()
b8.sar(D.bJW.av(0,new B.a7(a0.a,a0.b,a0.c,a0.d)))
b9.aA(a0,b8)
b8=b9.a
J.by(b8.save())
b8.clipRRect(B.ex(a0),$.p0(),!0)
b8.translate(-12,-25)
C.JL(b9,D.etW,c1,b6)
b8.restore()
a1=A.k.F(c1*0.12,1)
b8=B.bx(D.eoj,A.h4)
s=B.L()
s.r=A.aU.gp(0)
b9.aA(b8,s)
s=B.L()
s.r=A.bg.gp(0)
b9.aW(new B.a7(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.U(a1*100)+"%",D.dO_,A.c,6)}else{b8=B.L()
b8.r=D.uh.gp(0)
b9.aA(a0,b8)}b8=B.bx(D.epf,D.dXo)
s=B.L()
s.r=A.w.gp(0)
b9.aA(b8,s)
return!0
case"router":j=B.bx(D.eoX,A.qU)
$.V()
b8=B.L()
b8.sar(D.bIV.av(0,new B.a7(j.a,j.b,j.c,j.d)))
b9.aA(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=D.asP[a2]
s=a3<0?-4:4
r=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
r.r=A.cz.gp(0)
r.c=4
r.d=A.bO
n=r.G()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.F(A.k.by(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
s.r=(a4?A.bl:A.aI).gp(0)
n=s.G()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=B.bS(D.ve,8+u*6+A.k.F(s,6))
q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
q.b=A.ae
q.c=1.8
q.r=A.hn.j(0.9-u*0.2).gp(0)
n=q.G()
b8.drawArc.apply(b8,[B.c2(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bx(D.eoD,A.i0)
s=$.V()
r=B.L()
r.r=A.eo.gp(0)
b9.aA(b8,r)
if(b7){b8=B.L()
b8.r=A.aD.j(0.5*a5).gp(0)
b8.z=A.xY
b9.ae(A.vd,34,b8)}a6=new B.aO(s.r,A.ao,b6,b6,B.a([],x.v))
a6.D(new B.b4(-16,12))
a6.D(new B.ao(-16,-2))
a6.D(new B.cO(0,-30,16,-2))
a6.D(new B.ao(16,12))
a6.D(new B.bD())
b8=B.L()
b8.r=B.aq(A.eZ,D.b1R,a5).gp(0)
b9.aL(a6,b8)
b8=B.L()
b8.b=A.ae
b8.c=1.4
b8.r=A.c1.gp(0)
b9.aL(a6,b8)
if(b7){b8=b9.a
J.by(b8.save())
b8.translate(0,-2)
b9.iU(0,c1*7)
s=B.L()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bw(A.J,D.aBA,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.by(b8.save())
b8.translate(0,a7)
s=$.V().r
r=x.v
j=new B.aO(s,A.ao,b6,b6,B.a([],r))
j.D(new B.b4(-28,8))
j.D(new B.ao(-28,-2))
j.D(new B.ao(-16,-4))
j.D(new B.ao(-10,-16))
j.D(new B.ao(10,-16))
j.D(new B.ao(18,-4))
j.D(new B.ao(28,-2))
j.D(new B.ao(28,8))
j.D(new B.bD())
q=B.L()
q.sar(D.bH4.av(0,D.eoQ))
b9.aL(j,q)
q=new B.aO(s,A.ao,b6,b6,B.a([],r))
q.D(new B.b4(-8,-4))
q.D(new B.ao(-4,-13))
q.D(new B.ao(4,-13))
q.D(new B.ao(4,-4))
q.D(new B.bD())
p=B.L()
p.r=A.fj.gp(0)
b9.aL(q,p)
r=new B.aO(s,A.ao,b6,b6,B.a([],r))
r.D(new B.b4(8,-4))
r.D(new B.ao(8,-13))
r.D(new B.ao(11,-13))
r.D(new B.ao(15,-4))
r.D(new B.bD())
s=B.L()
s.r=A.fj.gp(0)
b9.aL(r,s)
for(a2=0;a2<2;++a2){a3=D.cVU[a2]
s=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
s.r=A.aE.gp(0)
n=s.G()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.by(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
q.r=A.bY.gp(0)
q.c=1.6
n=q.G()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.F(s+u*8,14)
q=-4+u*5
p=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
p.r=A.az.gp(0)
p.c=1.6
n=p.G()
b8.drawLine.apply(b8,[-34-r,q,-42-r,q,n])
n.delete()}return!0
case"kettle":b8=$.V().r
s=x.v
j=new B.aO(b8,A.ao,b6,b6,B.a([],s))
j.D(new B.b4(-18,20))
j.D(new B.ao(-14,-12))
j.D(new B.cO(0,-20,14,-12))
j.D(new B.ao(18,20))
j.D(new B.bD())
r=B.L()
r.sar(D.bI6.av(0,D.eoC))
b9.aL(j,r)
r=new B.aO(b8,A.ao,b6,b6,B.a([],s))
r.D(new B.b4(14,-10))
r.D(new B.ao(30,-22))
r.D(new B.ao(32,-18))
r.D(new B.ao(16,-4))
r.D(new B.bD())
q=B.L()
q.r=A.e2.gp(0)
b9.aL(r,q)
s=new B.aO(b8,A.ao,b6,b6,B.a([],s))
s.D(new B.b4(-14,-8))
s.D(new B.cO(-34,-6,-18,12))
b8=B.L()
b8.b=A.ae
b8.c=5
b8.r=A.aE.gp(0)
b9.aL(s,b8)
b8=B.L()
if(b7){s=B.aq(A.cM,A.ug,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.eo
b8.r=s.gp(0)
b9.aW(D.eoB,b8)
if(b7){b8=B.L()
b8.r=A.cM.j(0.3).gp(0)
b8.z=A.l9
b9.ae(A.aBw,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.F(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.G()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=B.L()
b8.r=A.aE.gp(0)
b9.ae(D.dM8,3,b8)
return!0
case"lamp":if(b7){u=A.k.E(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aO($.V().r,A.ao,b6,b6,B.a([],x.v))
b8.D(new B.b4(-10,-14))
b8.D(new B.ao(-30,24))
b8.D(new B.ao(10,24))
b8.D(new B.ao(8,-14))
b8.D(new B.bD())
s=B.L()
s.r=A.dJ.j(0.28*u).gp(0)
b9.aL(b8,s)
s=B.L()
s.r=A.dJ.j(0.5*u).gp(0)
s.z=R.Ga
b9.ae(D.dP4,24,s)}b8=B.bx(D.epb,A.i0)
s=$.V()
r=B.L()
r.r=A.eo.gp(0)
b9.aA(b8,r)
r=B.L()
r.r=A.e0.gp(0)
r.c=3
r.d=A.bO
b9.bw(D.dMm,D.aBG,r)
r=B.L()
r.r=A.e0.gp(0)
r.c=3
r.d=A.bO
b9.bw(D.aBG,D.dP5,r)
a9=new B.aO(s.r,A.ao,b6,b6,B.a([],x.v))
a9.D(new B.b4(-14,-16))
a9.D(new B.ao(6,-26))
a9.D(new B.ao(10,-12))
a9.D(new B.ao(-10,-6))
a9.D(new B.bD())
s=B.L()
s.r=(b7?A.aK:A.k3).gp(0)
b9.aL(a9,s)
b8=B.L()
b8.r=(b7?A.c:A.br).gp(0)
b9.ae(D.dP6,4,b8)
return!0
case"lights":b8=$.V().r
s=x.v
b0=new B.aO(b8,A.ao,b6,b6,B.a([],s))
b0.D(new B.b4(-34,-6))
b0.D(new B.cO(0,22,34,-6))
r=B.L()
r.b=A.ae
r.c=2
r.r=A.fW.gp(0)
b9.aL(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.F(q+u*0.7,1.8)<1.1
if(b2){b3=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
b3.r=D.a_8[u].j(0.6).gp(0)
b3.z=A.P5
n=b3.G()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=B.a([],s)
b4=new B.aO(b8,A.ao,b6,b6,b3)
b3.push(new B.b4(p-3,o))
b3.push(new B.ao(p+3,o))
b5=o+11
b3.push(new B.ao(p+5,b5))
b3.push(new B.cO(p,o+17,p-5,b5))
b3.push(new B.bD())
p=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
if(b2)o=D.a_8[u]
else{o=B.aq(D.a_8[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.G()
p=b4.gbL().a.snapshot()
r.drawPath((b4.e=new B.cE(p)).a,n)
n.delete()}return!0}return C.hQn(b9,c0,c1,c2)},
fF:function fF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aL1(d,e,f,g,h,i,j,k){var w=new C.f2f(e,h,i,k),v=w.$1(g),u=v.b.c
if(u>j&&u>0)v=w.$1(Math.max(2,g*j/u))
w=v.b
u=w.c
w=w.a.c
v.a4(d,f.aE(0,new B.u(u/2,w.gbc(w)/2)))},
JL(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l=A.o.F(a1==null?A.k.by(a0/6):a1,12),k=A.k.F(a0,6),j=D.cWZ[l],i=e.a,h=e.b,g=0+i,f=0+h
$.V()
w=B.L()
w.sar(new B.a5(A.ax,A.aC,A.x,B.a([j.c,j.d],x.O),null,null).av(0,new B.a7(0,0,g,f)))
d.aW(new B.a7(0,0,g,f),w)
v=h*(i>=h?0.7:0.6)
f=d.a
J.by(f.save())
f.clipRect(B.c2(new B.a7(0,0,g,0+v)),$.ro()[1],!0)
C.hGw(d,new B.as(i,v),l,k)
f.restore()
u=h-v
w=A.w.j(0.3)
t=B.L()
t.r=w.gp(0)
d.aW(new B.a7(0,v,g,v+u),t)
s=A.cp.au(0,A.k.E((k-0.2)/0.5,0,1))
J.by(f.save())
f.translate((1-s)*i*0.25,0)
t=i/2
g=i*0.94
C.aL1(d,j.a,new B.u(t,v+u*0.3),u*0.36,A.c.j(s),!0,g,0)
C.aL1(d,j.b,new B.u(t,v+u*0.64),u*0.2,A.c.j(0.92*s),!1,g,0)
f.restore()
for(g=h*0.965,w=h*0.009,r=h*0.004,q=0;q<12;++q){p=q===l
o=p?r:0
n=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
n.r=A.c.j(p?0.95:0.35).gp(0)
m=n.G()
f.drawCircle(t+(q-5.5)*h*0.035,g,w+o,m)
m.delete()}g=i-h*0.07
f=h*0.06
C.aL1(d,"AD",new B.u(g,f),h*0.045,A.c.j(0.85),!0,9999,1)
w=h*0.02
w=B.bx(B.cr(new B.u(g,f),h*0.065,h*0.1),new B.aY(w,w))
f=B.L()
f.b=A.ae
f.c=1
f.r=A.af.gp(0)
f.d=A.bO
d.aA(w,f)},
h5M(d,e,f,g){var w,v=d.a
J.by(v.save())
v.clipRect(B.c2(new B.a7(0,0,0+e.a,0+e.b)),$.ro()[1],!0)
w=D.nG[A.o.F(f,9)].e
if(w===-2)C.hwd(d,e,g)
else if(w===-1)C.JL(d,e,g,null)
else C.JL(d,e,g,w)
v.restore()},
hwd(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a1.a,g=a1.b,f=new B.Q(Date.now(),0,!1),e=0+h,d=0+g
$.V()
w=B.L()
w.sar(D.bH5.av(0,new B.a7(0,0,e,d)))
a0.aW(new B.a7(0,0,e,d),w)
w=B.L()
w.r=A.bM.gp(0)
a0.aW(new B.a7(0,0,e,0+g*0.15),w)
C.aL1(a0,A.op[B.bE(f)-1]+" "+B.bw(f),new B.u(h/2,g*0.075),g*0.08,A.c,!0,h*0.9,0)
v=h/7
for(e=g*0.21,d=g*0.05,u=0;u<7;++u)C.aL1(a0,D.d05[u],new B.u(v*(u+0.5),e),d,A.az,!0,9999,0)
t=B.bW(B.bw(f),B.bE(f),1,0,0,0,0,0)
s=B.bO(B.bW(B.bw(f),B.bE(f)+1,0,0,0,0,0,0))
r=B.md(t)-1
q=g*0.74/A.k.dE((r+s)/7)
for(e=g*0.26,d=a2*3,w=a0.a,p=1;p<=s;++p){o=r+p-1
n=v*(A.o.F(o,7)+0.5)
m=e+q*(A.o.al(o,7)+0.5)
if(p===B.bO(f)){l=Math.min(v,q)
k=A.aY.j(0.5+0.2*Math.sin(d))
$.V()
j=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
j.r=k.gp(0)
i=j.G()
w.drawCircle(n,m,l*0.42,i)
i.delete()}l=Math.min(v,q)
k=p===B.bO(f)?A.c:A.af
C.aL1(a0,""+p,new B.u(n,m),l*0.42,k,!0,9999,0)}},
fIB(d){var w=D.lC.h(0,d)
return(w==null?null:w.b)===D.yn},
hRr(d,e,f){return B.a9(d,!1).cp(B.ua(null,!1,!0,!0,new C.fv0(e,f),A.eL,null,A.p5,new C.fv1(),x.H))},
f2f:function f2f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uw:function uw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wK:function wK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
HT:function HT(d,e){this.a=d
this.b=e},
lO:function lO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fv0:function fv0(d,e){this.a=d
this.b=e},
fv1:function fv1(){},
SX:function SX(d,e,f){this.c=d
this.d=e
this.a=f},
bg1:function bg1(d,e){var _=this
_.d=$
_.e=null
_.bp$=d
_.a6$=e
_.c=_.a=null},
dGo:function dGo(d){this.a=d},
dGn:function dGn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dGl:function dGl(){},
dGm:function dGm(d){this.a=d},
dGk:function dGk(d){this.a=d},
dGj:function dGj(d,e){this.a=d
this.b=e},
dGi:function dGi(d,e){this.a=d
this.b=e},
dGh:function dGh(d){this.a=d},
dGg:function dGg(d){this.a=d},
dGc:function dGc(d){this.a=d},
dGb:function dGb(d){this.a=d},
dGf:function dGf(d,e,f){this.a=d
this.b=e
this.c=f},
dGe:function dGe(d){this.a=d},
dGd:function dGd(d){this.a=d},
brw:function brw(d,e,f){this.b=d
this.c=e
this.a=f},
acq:function acq(d,e,f){this.b=d
this.c=e
this.a=f},
aIA:function aIA(){},
fKt(d,e,f,g,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.a
J.by(h.save())
w=e.a
v=e.b
u=0+w
t=0+v
h.clipRect(B.c2(new B.a7(0,0,u,t)),$.ro()[1],!0)
if(a0<3){$.V()
s=B.L()
s.r=D.b_n.gp(0)
d.aW(new B.a7(0,0,u,t),s)
if(a0<0.5)t=a0/0.5
else t=a0>2.4?(3-a0)/0.6:1
r=A.k.E(t,0,1)
t=e.e9(A.J)
s=e.ge8()
q=B.L()
q.sar(new B.bR(A.A,0.5,A.x,i,0,B.a([A.aY.j(0.35*r),A.K],x.O),i,i).av(0,B.bS(e.e9(A.J),e.ge8()*0.5)))
d.ae(t,s*0.5,q)
C.F5(d,"NGMY",new B.u(0,v*0.36),v*0.2,A.c.j(r),A.L,v*0.03,w)
C.F5(d,"T V",new B.u(0,v*0.6),v*0.08,A.aY.j(r),A.L,v*0.05,w)
q=w*0.3
s=v*0.78
t=B.L()
t.r=A.aY.j(r).gp(0)
d.aW(new B.a7(q,s,q+w*0.4*(a0/3),s+3),t)}else if(a1>=0)C.h5M(d,e,a1,g)
else{p=A.k.E((a0-3)/0.5,0,1)
o=A.o.F(f,10)
switch(o){case 0:C.hFb(d,e,g)
break
case 1:C.hwU(d,e,g)
break
case 2:C.hEw(d,e,g)
break
case 3:C.hBt(d,e,g)
break
case 4:C.hCF(d,e,g)
break
case 5:C.hEx(d,e,g)
break
case 6:C.hy7(d,e,g)
break
case 7:C.hFa(d,e,g)
break
case 8:C.hDq(d,e,g)
break
default:C.hyi(d,e,g)}s=w-v*0.34
q=v*0.04
n=v*0.03
m=B.bx(new B.a7(s,q,s+v*0.3,q+v*0.1),new B.aY(n,n))
$.V()
n=B.L()
n.r=A.w.j(0.55).gp(0)
d.aA(m,n)
C.F5(d,"NGMY",new B.u(m.a+v*0.025,m.b+v*0.012),v*0.07,A.c,A.bf,1,i)
n=v*0.86
s=B.L()
s.r=A.w.j(0.6).gp(0)
d.aW(new B.a7(0,n,u,n+v*0.14),s)
C.F5(d,"CH "+(f+1)+"  \xb7  "+D.O0[o].a,new B.u(q,v*0.885),v*0.075,A.c,A.bf,0,w-v*0.08)
if(p<1){s=B.L()
s.r=A.c.j(0.6*(1-p)).gp(0)
d.aW(new B.a7(0,0,u,t),s)}}$.V()
l=B.L()
l.r=A.w.j(0.07).gp(0)
for(k=0;k<v;k+=3){j=l.G()
h.drawRect(B.c2(new B.a7(0,k,u,k+1)),j)
j.delete()}u=new B.aO($.V().r,A.ao,i,i,B.a([],x.v))
u.D(new B.b4(0,0))
u.D(new B.ao(w*0.45,0))
u.D(new B.ao(0,v*0.5))
u.D(new B.bD())
v=B.L()
v.r=A.c.j(0.04).gp(0)
d.aL(u,v)
h.restore()},
F5(d,e,f,g,h,i,j,k){var w=null,v=B.id(w,w,1,w,B.dl(w,w,w,w,w,w,w,w,w,B.l(w,w,h,w,w,w,w,w,w,w,w,g,w,w,A.u,w,w,!0,w,j,w,w,w,w,w,w),e),i,A.ch,w,A.em,A.cg),u=k==null
v.AR(u?9999:k)
v.a4(d,f.ao(0,new B.u(i===A.L&&!u?(k-v.b.c)/2:0,0)))},
hFb(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=A.k.F(f,14),i=0+l,h=0+k
$.V()
w=B.L()
w.sar(D.ak0.av(0,new B.a7(0,0,i,h)))
d.aW(new B.a7(0,0,i,h),w)
w=B.L()
w.r=A.dJ.gp(0)
d.ae(new B.u(l*0.85,k*0.18),k*0.08,w)
w=k*0.78
h=B.L()
h.r=A.zk.gp(0)
d.aW(new B.a7(0,w,i,w+k*0.22),h)
new C.fa9(d,f,k).$5(new B.u(l*0.5,k*0.8),1.5707963267948966,k*0.24,5,A.k.E(j/5,0,1)*1.4)
for(i=k*0.26,h=k*0.11,w=k*0.05,v=d.a,u=-k,t=u*0.1,u*=0.04,s=k*0.065,r=0;r<6;++r){q=A.k.E((j-(5+r*1.3))/0.5,0,1)
if(q<=0)continue
p=(r&1)===1?0.04:0
o=A.o.F(r,3)
n=A.lM.au(0,q)
J.by(v.save())
v.translate(l*(0.2+0.12*r+p),k*(0.16+0.14*o))
v.scale(n,n)
p=B.bx(B.cr(A.J,h,i),new B.aY(w,w))
$.V()
o=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
o.r=A.c.gp(0)
m=o.G()
v.drawRRect(B.ex(p),m)
m.delete()
p=B.bx(B.cr(A.J,h,i),new B.aY(w,w))
o=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
o.b=A.ae
o.c=2
o.r=A.bx.gp(0)
m=o.G()
v.drawRRect(B.ex(p),m)
m.delete()
C.F5(d,"\u2665 "+D.cDR[r],new B.u(t,u),s,A.ro,A.bf,0,null)
v.restore()}if(j>11.5)C.F5(d,"Family is everything",new B.u(0,k*0.62),k*0.09,A.hm,A.L,0,l)},
hwU(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a0.a,i=a0.b,h=0+j,g=0+i,f=$.V(),e=B.L()
e.sar(D.bHi.av(0,new B.a7(0,0,h,g)))
d.aW(new B.a7(0,0,h,g),e)
w=a1*40
for(h=d.a,g=x.v,v=0;v<2;++v,f=e){e=B.a([],g)
u=new B.aO(f.r,A.ao,k,k,e)
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
e=$.V()
s=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
s.r=(f?A.jf:A.eu).gp(0)
p=s.G()
f=u.e
h.drawPath((f==null?u.e=new B.cE(u.gbL().a.snapshot()):f).a,p)
p.delete()}for(h=i*0.04,g=w*1.3,f=j+60,e=j*0.3,o=0,n=0;n<6;++n){t=A.k.F(n*90-g,f)-30
s=Math.sin(n*1.7+a1)
if(Math.abs(t-e)<12)++o
C.hEB(d,new B.u(t,i*(0.35+0.08*s)),h,A.dJ)}m=Math.abs(Math.sin(a1*5))
l=new B.u(e,i*0.72-m*i*0.22)
h=B.cr(new B.u(e,i*0.82),i*0.025,i*0.14*(1-m*0.4))
$.V()
g=B.L()
g.r=A.dl.gp(0)
d.hU(h,g)
g=i*0.085
h=B.L()
h.sar(D.dX_.av(0,B.bS(l,g)))
d.ae(l,g,h)
h=B.L()
h.b=A.ae
h.c=2
h.r=A.oV.gp(0)
d.ae(l,g,h)
h=-i
C.F5(d,"$",l.ao(0,new B.u(h*0.03,h*0.045)),i*0.09,A.oV,A.bf,0,k)
g=h*0.01
h=l.ao(0,new B.u(h*0.028,g))
f=B.L()
f.r=A.w.gp(0)
d.ae(h,2.4,f)
g=l.ao(0,new B.u(i*0.028,g))
f=B.L()
f.r=A.w.gp(0)
d.ae(g,2.4,f)
C.F5(d,"Saved: $"+(A.o.F(A.k.by(a1*3),1000)+o),new B.u(i*0.05,i*0.06),i*0.08,A.c,A.bf,0,k)},
hEB(d,e,f,g){var w,v,u,t,s,r,q,p=$.V(),o=B.a([],x.v),n=new B.aO(p.r,A.ao,null,null,o)
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
n.e=null}}n.D(new B.bD())
$.V()
p=B.L()
p.r=g.gp(0)
d.aL(n,p)},
hEw(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a3.a,d=a3.b,a0=$.V(),a1=B.L()
a1.r=D.b5r.gp(0)
a2.aW(new B.a7(0,0,0+e,0+d),a1)
w=new B.f3()
w.dU(7)
for(a1=a4*3,v=a2.a,u=0;u<60;++u){t=A.k.F(A.k.F(w.af()*e-a4*(10+w.af()*60),e)+e,e)
s=w.af()
r=w.af()
q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
q.r=A.c.j(0.5+0.5*Math.sin(a1+u)).gp(0)
p=q.G()
v.drawCircle(t,s*d*0.85,0.6+r*1.4,p)
p.delete()}o=e*1.2-A.k.F(a4*22,e*1.6)
a1=d*0.3
s=d*0.2
r=B.L()
r.sar(D.dWY.av(0,B.bS(new B.u(o,a1),s)))
a2.ae(new B.u(o,a1),s,r)
a1=B.cr(new B.u(o,a1),d*0.07,d*0.6)
r=B.L()
r.b=A.ae
r.c=3
r.r=A.bJ.j(0.7).gp(0)
a2.hU(a1,r)
r=Math.sin(a4*2)
J.by(v.save())
v.translate(e*0.42,d*0.52+r*d*0.04)
a2.iU(0,-0.25)
a0=a0.r
r=x.v
n=new B.aO(a0,A.ao,f,f,B.a([],r))
a1=-d
s=a1*0.04
q=d*0.1
n.D(new B.b4(s,q))
m=d*0.04
n.D(new B.cO(0,d*(0.2+0.05*Math.sin(a4*30)),m,q))
n.D(new B.bD())
l=B.L()
k=d*0.12
l.sar(D.bHY.av(0,new B.a7(s,q,s+d*0.08,q+k)))
a2.aL(n,l)
j=new B.aO(a0,A.ao,f,f,B.a([],r))
l=a1*0.17
j.D(new B.b4(0,l))
s=a1*0.05
i=d*0.05
j.D(new B.cO(d*0.09,s,i,q))
j.D(new B.ao(s,q))
j.D(new B.cO(a1*0.09,s,0,l))
j.D(new B.bD())
h=B.L()
g=a1*0.08
h.sar(D.bIa.av(0,new B.a7(g,l,g+d*0.16,l+d*0.27)))
a2.aL(j,h)
h=B.L()
h.r=A.aY.gp(0)
a2.ae(new B.u(0,s),d*0.035,h)
h=new B.aO(a0,A.ao,f,f,B.a([],r))
h.D(new B.b4(s,m))
h.D(new B.ao(a1*0.1,k))
h.D(new B.ao(s,q))
h.D(new B.bD())
s=B.L()
s.r=A.aD.gp(0)
a2.aL(h,s)
r=new B.aO(a0,A.ao,f,f,B.a([],r))
r.D(new B.b4(i,m))
r.D(new B.ao(q,k))
r.D(new B.ao(i,q))
r.D(new B.bD())
q=B.L()
q.r=A.aD.gp(0)
a2.aL(r,q)
v.restore()},
hBt(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=0+g,d=0+f,a0=$.V(),a1=B.L()
a1.sar(D.bH_.av(0,new B.a7(0,0,e,d)))
a2.aW(new B.a7(0,0,e,d),a1)
for(e=a2.a,d=f*0.85,a1=f*0.7,w=x.v,a0=a0.r,v=0;v<4;++v){u=g*(0.1+0.25*v)
t=B.a([],w)
s=new B.aO(a0,A.ao,h,h,t)
t.push(new B.b4(u,f))
t.push(new B.cO(u+Math.sin(a4+v)*10,d,u+4,a1+v*6))
t=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
t.b=A.ae
t.c=5
t.r=A.d1.gp(0)
r=t.G()
t=s.gbL().a.snapshot()
e.drawPath((s.e=new B.cE(t)).a,r)
r.delete()}d=A.k.F(a4*18,g*1.5)
J.by(e.save())
e.translate(d-g*0.25,f*0.35+Math.sin(a4)*6)
d=B.cr(A.J,f*0.22,f*0.5)
a1=B.L()
a1.r=A.bu.gp(0)
a2.hU(d,a1)
a1=new B.aO(a0,A.ao,h,h,B.a([],w))
d=-f
t=d*0.22
a1.D(new B.b4(t,0))
a1.D(new B.cO(d*0.36,d*0.12+Math.sin(a4*3)*5,d*0.34,d*0.16))
s=d*0.02
a1.D(new B.cO(d*0.28,s,t,0))
t=B.L()
t.r=A.bu.gp(0)
a2.aL(a1,t)
t=f*0.03
a1=f*0.1
q=B.cr(new B.u(0,t),a1,f*0.34)
p=B.L()
p.r=A.aJ.gp(0)
a2.hU(q,p)
p=B.L()
p.r=A.c.gp(0)
a2.ae(new B.u(f*0.15,s),3,p)
p=B.L()
p.r=A.w.gp(0)
a2.ae(new B.u(f*0.155,s),1.5,p)
e.restore()
for(s=d*0.005,q=d*0.08,p=d*0.03,o=f*0.06,d*=0.04,n=g+40,m=a4*2,v=0;v<6;++v){l=(v&1)===0?1:-1
k=A.k.F(A.k.F(a4*(24+v*7)*l+v*80,n)+g+40,n)
j=Math.sin(m+v)
J.by(e.save())
e.translate(k-20,f*(0.52+0.06*v)+j*6)
e.scale(l,1)
k=B.cr(A.J,o,a1)
j=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
i=A.o.F(v,4)
j.r=D.aqM[i].gp(0)
r=j.G()
e.drawOval(B.c2(k),r)
r.delete()
k=B.a([],w)
j=new B.aO(a0,A.ao,h,h,k)
k.push(new B.b4(d,0))
k.push(new B.ao(q,p))
k.push(new B.ao(q,t))
k.push(new B.bD())
k=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
k.r=D.aqM[i].gp(0)
r=k.G()
k=j.gbL().a.snapshot()
e.drawPath((j.e=new B.cE(k)).a,r)
r.delete()
k=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
k.r=A.w.gp(0)
r=k.G()
e.drawCircle(t,s,1.8,r)
r.delete()
e.restore()}for(v=0;v<14;++v){d=A.k.F(v*0.071+0.05,1)
a0=A.k.F(a4*(14+v*3)+v*40,f)
a1=Math.sin(m+v)
w=A.o.F(v,3)
t=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
t.b=A.ae
t.c=1.2
t.r=A.c.j(0.7).gp(0)
r=t.G()
e.drawCircle(g*d+a1*4,f-a0,2+w,r)
r.delete()}},
hCF(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a9.a,a1=a9.b,a2=A.k.F(b0,12),a3=a2<7,a4=0+a0,a5=0+a1,a6=$.V(),a7=B.L()
a7.sar(new B.a5(A.b0,A.b3,A.x,a3?D.cWy:D.cLe,d,d).av(0,new B.a7(0,0,a4,a5)))
a8.aW(new B.a7(0,0,a4,a5),a7)
a7=a1*0.74
w=B.L()
w.r=(a3?D.b9_:A.zk).gp(0)
a8.aW(new B.a7(0,a7,a4,a7+a1*0.26),w)
for(w=a8.a,v=a1*0.07,u=a1*0.06,t=a1*0.2,s=a1*0.1,r=a1*0.09,q=x.v,p=b0*2,a6=a6.r,o=0;o<4;++o){n=a0*(0.08+0.24*o)
m=a1*(0.14+0.03*A.o.F(o,2))
l=a7-m
k=n+t
j=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
j.r=D.cyY[o].gp(0)
i=j.G()
w.drawRect(B.c2(new B.a7(n,l,k,l+m)),i)
i.delete()
j=B.a([],q)
h=new B.aO(a6,A.ao,d,d,j)
j.push(new B.b4(n-4,l))
j.push(new B.ao(n+s,l-r))
j.push(new B.ao(k+4,l))
j.push(new B.bD())
l=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
l.r=A.eZ.gp(0)
i=l.G()
l=h.gbL().a.snapshot()
w.drawPath((h.e=new B.cE(l)).a,i)
i.delete()
l=n+v
k=m*0.55
j=a7-k
h=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
h.r=(a3&&A.o.F(A.k.by(p),2)===0?A.lo:A.fh).gp(0)
i=h.G()
w.drawRect(B.c2(new B.a7(l,j,l+u,j+k)),i)
i.delete()}if(a3){for(a7=b0*20,u=b0*260,t=a1*0.8,o=0;o<70;++o){n=A.k.F(o*37+a7,a0)
g=A.k.F(o*53+u,t)
r=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
r.r=A.fj.gp(0)
r.c=1.4
i=r.G()
w.drawLine.apply(w,[n,g,n-3,g+9,i])
i.delete()}a7=b0*3
if(A.o.F(A.k.by(a7),7)===0&&A.k.F(a7,1)<0.3){a7=B.L()
a7.r=A.c.j(0.5).gp(0)
a8.aW(new B.a7(0,0,a4,a5),a7)
q=new B.aO(a6,A.ao,d,d,B.a([],q))
q.D(new B.b4(a0*0.6,s))
s=a0*0.55
a6=a1*0.3
q.D(new B.ao(s,a6))
q.D(new B.ao(a0*0.62,a6))
q.D(new B.ao(s,a1*0.55))
s=B.L()
s.b=A.ae
s.c=4
s.r=A.lo.gp(0)
a8.aL(q,s)}}else{for(a4=a0*0.5,a5=a1*0.035,a6=3.141592653589793*A.k.E((a2-7)/2,0,1)*57.29577951308232,o=0;o<6;++o){u=a0*(0.9-o*0.07)
u=B.cr(new B.u(a4,a7),u,u)
t=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
t.b=A.ae
t.c=a5
t.r=D.d_i[o].j(0.9).gp(0)
i=t.G()
w.drawArc.apply(w,[B.c2(u),180,a6,!1,i])
i.delete()}a4=B.L()
a4.r=A.dJ.gp(0)
a8.ae(new B.u(a0*0.86,a1*0.16),a1*0.08,a4)}for(a4=a0+120,o=0;o<3;++o){n=A.k.F(b0*(8+o*4)+o*120,a4)-60
for(a5=a1*(0.12+0.1*o),f=0;f<4;++f){e=D.c4p[f]
$.V()
a6=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
a6.r=(a3?A.bj:A.c.j(0.95)).gp(0)
i=a6.G()
w.drawCircle(n+e.a,a5+e.b,v,i)
i.delete()}}},
hEx(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a3.a,a1=a3.b
$.V()
w=B.L()
w.r=A.da.gp(0)
a2.aW(new B.a7(0,0,0+a0,0+a1),w)
v=B.L()
v.r=A.c.j(0.05).gp(0)
for(w=a2.a,u=0;u<a0;u+=16){t=v.G()
w.drawLine.apply(w,[u,0,u,a1,t])
t.delete()}for(s=0;s<a1;s+=16){t=v.G()
w.drawLine.apply(w,[0,s,a0,s,t])
t.delete()}r=a0*0.14
q=a1*0.2
p=a1*0.08
o=B.bx(new B.a7(r,q,r+a0*0.72,q+a1*0.5),new B.aY(p,p))
n=new B.aO($.V().r,A.ao,null,null,B.a([],x.v))
n.D(new B.iO(o))
q=B.L()
q.b=A.ae
q.c=5
q.r=A.bu.gp(0)
a2.aL(n,q)
m=new B.QT(new B.uZ(B.wq(n),!1,B.a([],x.R))).gL(0)
q=m.a
l=m.b
q.j2()
k=q.e
j=k[l].b
j===$&&B.c()
j=j.a.length()
q.j2()
i=k[l].b
i===$&&B.c()
h=A.k.F(a4*j/5,i.a.length())
for(g=0;g<10;++g){q.j2()
j=k[l].b
j===$&&B.c()
j=A.k.F(h-g*9,j.a.length())
q.j2()
f=k[l].Lh(j).a
j=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
j.r=A.dJ.j(1-g*0.09).gp(0)
j.z=E.P3
t=j.G()
w.drawCircle(f.a,f.b,6-g*0.5,t)
t.delete()}w=a1*0.45
q=B.bx(B.cr(new B.u(r,w),a1*0.22,a1*0.12),A.hK)
l=B.L()
l.r=A.d1.gp(0)
a2.aA(q,l)
C.F5(a2,"+",new B.u(r-5,a1*0.33),a1*0.07,A.c,A.bf,0,null)
e=(Math.sin(a4*2)+1)/2
d=new B.u(a0*0.86,w)
w=B.L()
w.r=A.dJ.j(0.25+0.5*e).gp(0)
w.z=R.Ga
a2.ae(d,a1*0.16,w)
w=B.L()
w.r=B.aq(A.bH,A.o6,e).gp(0)
a2.ae(d,p,w)
C.F5(a2,"Electricity needs a full loop!",new B.u(0,a1*0.74),a1*0.075,A.fY,A.L,0,a0)},
hy7(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.V()
w=B.L()
w.sar(D.bK3.av(0,new B.a7(0,0,a3,a4)))
a5.aW(new B.a7(0,0,a3,a4),w)
w=a2*0.82
a4=B.L()
a4.r=A.da.gp(0)
a5.aW(new B.a7(0,w,a3,w+a2*0.18),a4)
for(a3=a1*0.1,a4=a5.a,v=0;v<7;++v){u=a1*(0.05+v*0.15)
t=a2*(0.1+0.07*A.o.F(v*5,4))
s=w-t
r=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
r.r=A.aE.gp(0)
q=r.G()
a4.drawRect(B.c2(new B.a7(u,s,u+a3,s+t)),q)
q.delete()}for(a3=a2*0.2,s=a7*0.55,p=0;p<4;++p){r=s+p*0.27
o=A.k.F(r,1)
n=A.k.by(r)*7+p*3
m=a1*(0.15+0.7*A.k.F(n*0.37,1))
l=a2*(0.2+0.25*A.k.F(n*0.53,1))
k=D.apR[A.o.F(Math.abs(n),5)]
if(o<0.3){$.V()
r=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
r.r=A.c.gp(0)
q=r.G()
a4.drawCircle(m,w-(w-l)*(o/0.3),2.5,q)
q.delete()}else{v=(o-0.3)/0.7
for(r=v*v*a2*0.08,j=1-v,i=2.4*j+0.4,h=0;h<28;++h){g=h*3.141592653589793*2/28
f=a3*A.dT.au(0,v)
e=Math.cos(g)
d=Math.sin(g)
$.V()
a0=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
a0.r=k.j(A.k.E(j,0,1)).gp(0)
a0.z=D.d70
q=a0.G()
a4.drawCircle(m+e*f,l+d*f+r,i,q)
q.delete()}}}},
hFa(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,a0=a6.b,a1=0+d,a2=0+a0,a3=$.V(),a4=B.L()
a4.sar(D.ak0.av(0,new B.a7(0,0,a1,a2)))
a5.aW(new B.a7(0,0,a1,a2),a4)
for(a2=a5.a,a4=x.v,w=0;w<2;++w,a3=v){v=B.a([],a4)
u=new B.aO(a3.r,A.ao,null,null,v)
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
v=$.V()
s=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
s.r=(a3?A.Da:A.zk).gp(0)
p=s.G()
a3=u.e
a2.drawPath((a3==null?u.e=new B.cE(u.gbL().a.snapshot()):a3).a,p)
p.delete()}a3=a0*0.8
a4=B.L()
a4.r=A.bu.gp(0)
a5.aW(new B.a7(0,a3,a1,a3+a0*0.04),a4)
for(t=-A.k.F(a7*80,24),a1=a0*0.84,a4=a0*0.03,v=a1+a4;t<d;t+=24){s=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
s.r=A.fh.gp(0)
p=s.G()
a2.drawRect(B.c2(new B.a7(t,a1,t+8,v)),p)
p.delete()}o=Math.sin(a7*14)*1.2
n=d*0.12
for(a1=a3+o,a3=a0*0.025,v=d*0.012,s=a0*0.02,r=a0*0.62+o,a4=r+a4,q=a4+a0*0.06,m=r+a0*0.18,l=0;l<4;++l){k=l===0
j=n+d*(k?0.16:0.15)
i=B.bx(new B.a7(n,r,j,m),new B.aY(s,s))
h=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
h.r=(k?A.bM:D.cLg[l-1]).gp(0)
p=h.G()
a2.drawRRect(B.ex(i),p)
p.delete()
for(j-=n,i=j*0.18,g=0;g<3;++g){h=n+j*(0.12+g*0.28)
f=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
f.r=A.fj.gp(0)
p=f.G()
a2.drawRect(B.c2(new B.a7(h,a4,h+i,q)),p)
p.delete()}i=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
i.r=A.bh.gp(0)
p=i.G()
a2.drawCircle(n+j*0.25,a1,a3,p)
p.delete()
i=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
i.r=A.bh.gp(0)
p=i.G()
a2.drawCircle(n+j*0.75,a1,a3,p)
p.delete()
n+=j+v}for(a1=a7*0.8,a3=d*0.2,a4=a0*0.6,l=0;l<5;++l){e=A.k.F(a1+l*0.2,1)
v=e*a0
r=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
r.r=A.c.j(0.7*(1-e)).gp(0)
p=r.G()
a2.drawCircle(a3-e*d*0.12,a4-v*0.25,s+v*0.04,p)
p.delete()}},
hDq(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a4.a,a0=a4.b,a1=0+d,a2=0+a0
$.V()
w=B.L()
v=a5*2
u=B.aq(A.jf,A.hR,(Math.sin(v)+1)/2)
u.toString
w.sar(new B.a5(A.ax,A.aC,A.x,B.a([u,A.aE],x.O),null,null).av(0,new B.a7(0,0,a1,a2)))
a3.aW(new B.a7(0,0,a1,a2),w)
for(a1=a3.a,a2=a0*0.86,w=d/8-2,u=a0*0.14,t=a2+u,s=0;s<8;++s){r=d*s/8
q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
q.r=(A.k.F(v+s,2)<1?A.bX:A.aY).j(0.5).gp(0)
p=q.G()
a1.drawRect(B.c2(new B.a7(r,a2,r+w,t)),p)
p.delete()}a2=a5*6
o=Math.sin(a2)
J.by(a1.save())
w=-a0
a1.translate(d*0.5,a0*0.55+Math.abs(o)*w*0.03)
a3.iU(0,o*0.06)
t=a0*0.26
r=a0*0.3
q=a0*0.04
n=B.bx(B.cr(A.J,r,t),new B.aY(q,q))
m=B.L()
m.sar(D.bKr.av(0,B.cr(A.J,r,t)))
a3.aA(n,m)
m=a0*0.08
u=B.cr(new B.u(0,a0*0.02),m,u)
n=B.L()
n.r=A.b6.j(0.7).gp(0)
a3.aW(u,n)
n=B.bx(B.cr(new B.u(0,w*0.25),a0*0.17,a0*0.22),new B.aY(q,q))
u=B.L()
u.r=A.cm.gp(0)
a3.aA(n,u)
l=A.k.F(a5*1.3,1)>0.08
for(u=w*0.26,t=a0*0.025,k=0;k<2;++k){j=D.c42[k]
r=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
r.r=(l?A.b6:A.hR).gp(0)
p=r.G()
a1.drawCircle(j*a0,u,t,p)
p.delete()}u=B.L()
u.r=A.af.gp(0)
u.c=3
a3.bw(new B.u(0,w*0.335),new B.u(0,w*0.38),u)
u=B.L()
u.r=A.aD.gp(0)
a3.ae(new B.u(0,w*0.39),a0*0.015,u)
for(u=-o,t=a0*0.035,r=a0*0.15,n=a0*0.28,w*=0.08,k=0;k<2;++k){i=D.v4[k]
J.by(a1.save())
h=i*a0
a1.translate(h*0.14,w)
g=i>0
a1.rotate(i*(0.7+Math.sin(a2+(g?0:3.141592653589793))*0.8)*180/3.141592653589793,0,0)
f=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
f.r=A.bH.gp(0)
f.c=t
f.d=A.bO
p=f.G()
a1.drawLine.apply(a1,[0,0,h*0.16,0,p])
p.delete()
a1.restore()
g=g?o:u
f=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
f.r=A.bH.gp(0)
f.c=q
f.d=A.bO
p=f.G()
a1.drawLine.apply(a1,[h*0.06,r,h*0.08,n+g*a0*0.02,p])
p.delete()}a1.restore()
for(a1=a5*0.7,a2=a0*0.7,s=0;s<4;++s){e=A.k.F(a1+s*0.25,1)
C.F5(a3,"\u266a",new B.u(d*(0.2+0.18*s)+Math.sin(v+s)*8,a2-e*a0*0.5),m,A.c.j(1-e),A.bf,0,null)}},
hyi(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=0+e,a1=0+d
$.V()
w=B.L()
w.sar(D.bJ4.av(0,new B.a7(0,0,a0,a1)))
a2.aW(new B.a7(0,0,a0,a1),w)
w=B.L()
w.r=A.dJ.gp(0)
a2.ae(new B.u(e*0.12,d*0.16),d*0.07,w)
w=d*0.72
a1=B.L()
a1.r=A.Da.gp(0)
a2.aW(new B.a7(0,w,a0,w+d*0.28),a1)
for(a0=a4*0.25,a1=d*0.78,w=a2.a,v=d*0.016,u=a4*0.3,t=d*0.022,s=0;s<9;++s){r=e*(0.07+s*0.105)
q=A.k.E(A.k.F(a0-s*0.12,3),0,1)
p=A.o.F(s,3)
o=r+Math.sin(a4+s)*3
p=a1-d*(0.12+0.05*p)*q
n=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
n.r=A.fW.gp(0)
n.c=3
m=n.G()
w.drawLine.apply(w,[r,a1,o,p,m])
m.delete()
if(q>0.7){for(l=0;l<6;++l){k=l*3.141592653589793/3+u
n=Math.cos(k)
j=Math.sin(k)
i=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
i.r=D.arM[A.o.F(s,5)].gp(0)
m=i.G()
w.drawCircle(o+n*d*0.028,p+j*d*0.028,t,m)
m.delete()}n=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
n.r=A.dJ.gp(0)
m=n.G()
w.drawCircle(o,p,v,m)
m.delete()}}for(a0=d*0.03,a1=d*0.05,v=d*0.06,u=a4*0.9,t=a4*1.3,p=a4*18,s=0;s<3;++s){r=e*(0.2+0.28*s)+Math.sin(u+s*2)*e*0.12
h=d*(0.3+0.1*s)+Math.cos(t+s)*d*0.06
g=Math.abs(Math.sin(p+s))
for(o=a1*g+2,n=(s+2)%5,f=0;f<2;++f){j=B.cr(new B.u(r+D.v4[f]*d*0.025*g,h),v,o)
i=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
i.r=D.arM[n].gp(0)
m=i.G()
w.drawOval(B.c2(j),m)
m.delete()}o=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
o.r=A.bh.gp(0)
o.c=2
m=o.G()
w.drawLine.apply(w,[r,h-a0,r,h+a0,m])
m.delete()}},
hS4(d,e,f,g,h){return B.a9(d,!1).cp(B.ua(null,!1,!0,!0,new C.fyb(e,g,f,h),A.eL,null,A.p5,new C.fyc(),x.S))},
wZ:function wZ(d,e){this.a=d
this.b=e},
fa9:function fa9(d,e,f){this.a=d
this.b=e
this.c=f},
fyb:function fyb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fyc:function fyc(){},
Ux:function Ux(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBL:function aBL(d,e){var _=this
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
erl:function erl(d){this.a=d},
erk:function erk(d){this.a=d},
erj:function erj(d,e){this.a=d
this.b=e},
erm:function erm(d,e){this.a=d
this.b=e},
erv:function erv(d){this.a=d},
eru:function eru(d){this.a=d},
ert:function ert(){},
ero:function ero(d){this.a=d},
erp:function erp(d){this.a=d},
erq:function erq(d){this.a=d},
err:function err(d){this.a=d},
ern:function ern(d){this.a=d},
ers:function ers(d){this.a=d},
eri:function eri(d){this.a=d},
erf:function erf(d){this.a=d},
erh:function erh(d){this.a=d},
erg:function erg(d,e){this.a=d
this.b=e},
bqX:function bqX(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aJx:function aJx(){},
f5C(d,e,f,g){var w=null,v=B.m(24),u=B.H(f.j(0.6),A.r,1)
return B.au(B.p(w,B.v(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.ar,B.d(e,w,w,w,w,w,w,A.HJ,A.L,w,w),A.ay,B.c9(A.fH,g,A.by,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new B.o(D.TI,w,u,v,w,w,A.n),w,w,w,A.ev,A.a8,w,w,w),w,w,w)},
fIH(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new B.f3()
b4.dU(b5*977+13)
w=A.o.E(1+A.o.al(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aC(5)
q=r*7
p=B.a([],v)
o=B.a([],v)
n=B.T(u,t)
m=w
l=0
k=L.pD
j=!0
i=0
for(;;){if(!(j&&i<12))break
A:{++i
h=2+b4.aC(4)
for(g=k.a,f=k.b,e=0;e<h;r=a0,l=d){d=l+g
a0=r+f
if(d<0||a0<0||d>=7||a0>=7){e=99
break}a1=a0*7+d
if(A.d.t(p,a1)||a1===q){j=!1
break}p.push(a1);++e}if(!j||e>=99||m===0)break
a2=b4.he()?new B.z(f,-g):new B.z(-f,g)
a3=new B.z(-f,-g).A(0,a2)
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
a8=A.o.E(2+A.o.al(b5,8),2,4)
a9=B.eP([A.d.gaj(g)],u)
A.d.fA(g,b4)
for(v=g.length,a6=0;a6<g.length;g.length===v||(0,B.K)(g),++a6){a7=g[a6]
if(a9.a>=a8)break
a9.K(0,a7)}b0=B.b_(u)
b1=3+A.o.al(b5,3)
v=q+1
b2=0
for(;;){if(b0.a<b1){b3=b2+1
g=b2<200
b2=b3}else g=!1
if(!g)break
B:{a7=b4.aC(49)
if(A.d.t(p,a7)||a7===q||a9.t(0,a7)||A.d.t(o,a7))break B
if(a7===v)break B
b0.K(0,a7)}}v=b5>=10?1:0
return new C.aTo(b0,a9,B.T(u,t),q,L.pD,w+v)}return new C.aTo(B.b_(u),B.eP([25],u),B.T(u,t),21,L.pD,1)},
h6B(d,e){var w,v,u,t,s,r,q,p=B.a([],x.t),o=B.b_(x.S),n=d.e,m=A.o.F(n,7),l=A.o.al(n,7),k=d.f
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
if(q==="/")k=new B.z(-s,-t)
if(q==="\\")k=new B.z(k.b,k.a)}return new B.bkS(p,o)},
h2_(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aTo:function aTo(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
TL:function TL(d){this.a=d},
bgB:function bgB(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.fc$=g
_.kz$=h
_.fF$=i
_.fd$=j
_.bp$=k
_.a6$=l
_.c=_.a=null},
dZE:function dZE(d){this.a=d},
dZD:function dZD(d,e){this.a=d
this.b=e},
dZF:function dZF(){},
dZu:function dZu(d,e){this.a=d
this.b=e},
dZv:function dZv(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dZy:function dZy(d,e){this.a=d
this.b=e},
dZw:function dZw(d){this.a=d},
dZx:function dZx(d){this.a=d},
dZz:function dZz(d){this.a=d},
dZA:function dZA(d){this.a=d},
dZB:function dZB(d){this.a=d},
dZC:function dZC(d,e){this.a=d
this.b=e},
bdE:function bdE(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
dai:function dai(d,e,f){this.a=d
this.b=e
this.c=f},
dal:function dal(d,e,f){this.a=d
this.b=e
this.c=f},
daj:function daj(d){this.a=d},
dak:function dak(d){this.a=d},
TN:function TN(d){this.a=d},
aB8:function aB8(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.fc$=g
_.kz$=h
_.fF$=i
_.fd$=j
_.bp$=k
_.a6$=l
_.c=_.a=null},
dZX:function dZX(d){this.a=d},
dZW:function dZW(d,e){this.a=d
this.b=e},
dZY:function dZY(){},
dZI:function dZI(){},
dZR:function dZR(d,e){this.a=d
this.b=e},
dZO:function dZO(d){this.a=d},
dZK:function dZK(d){this.a=d},
dZP:function dZP(d){this.a=d},
dZQ:function dZQ(d){this.a=d},
dZJ:function dZJ(d){this.a=d},
dZS:function dZS(d){this.a=d},
dZN:function dZN(d,e){this.a=d
this.b=e},
dZT:function dZT(d){this.a=d},
dZM:function dZM(d,e){this.a=d
this.b=e},
dZU:function dZU(d){this.a=d},
dZL:function dZL(d,e){this.a=d
this.b=e},
dZV:function dZV(d){this.a=d},
bdT:function bdT(d,e){this.b=d
this.a=e},
aJ1:function aJ1(){},
btw:function btw(){},
aJ2:function aJ2(){},
btx:function btx(){},
ZV(d,e,f,g,h,i){return new C.bql(d,e,f,g,h,i)},
bql:function bql(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f26:function f26(){},
f27:function f27(){},
f28:function f28(){},
f29:function f29(){},
f2a:function f2a(){},
f2b:function f2b(){},
f2c:function f2c(){},
f2d:function f2d(){},
a6i:function a6i(d){this.a=d},
caV:function caV(d){this.a=d},
caW:function caW(){},
caU:function caU(d,e){this.a=d
this.b=e},
caT:function caT(d){this.a=d},
UC:function UC(d){this.a=d},
aBX:function aBX(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.fc$=f
_.kz$=g
_.fF$=h
_.fd$=i
_.bp$=j
_.a6$=k
_.c=_.a=null},
evt:function evt(d){this.a=d},
evp:function evp(d){this.a=d},
evo:function evo(d,e){this.a=d
this.b=e},
evr:function evr(d,e){this.a=d
this.b=e},
evq:function evq(d,e){this.a=d
this.b=e},
evs:function evs(d){this.a=d},
brI:function brI(d,e,f){this.b=d
this.c=e
this.a=f},
Tm:function Tm(d){this.a=d},
bga:function bga(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.fc$=d
_.kz$=e
_.fF$=f
_.fd$=g
_.bp$=h
_.a6$=i
_.c=_.a=null},
dME:function dME(){},
dMF:function dMF(){},
dMz:function dMz(d,e){this.a=d
this.b=e},
dMB:function dMB(d,e){this.a=d
this.b=e},
dMC:function dMC(d){this.a=d},
dMA:function dMA(d){this.a=d},
dMD:function dMD(d){this.a=d},
bmC:function bmC(d,e,f){this.b=d
this.c=e
this.a=f},
Sz:function Sz(d){this.a=d},
bfP:function bfP(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.fc$=d
_.kz$=e
_.fF$=f
_.fd$=g
_.bp$=h
_.a6$=i
_.c=_.a=null},
dya:function dya(){},
dyb:function dyb(){},
dy5:function dy5(){},
dy8:function dy8(d,e){this.a=d
this.b=e},
dy7:function dy7(d,e){this.a=d
this.b=e},
dy9:function dy9(d){this.a=d},
dy6:function dy6(d){this.a=d},
aFi:function aFi(d,e,f){this.a=d
this.b=e
this.c=f},
Td:function Td(d){this.a=d},
bg4:function bg4(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dJX:function dJX(d,e){this.a=d
this.b=e},
dJY:function dJY(d){this.a=d},
dJW:function dJW(d,e){this.a=d
this.b=e},
dJZ:function dJZ(d){this.a=d},
dJV:function dJV(d,e){this.a=d
this.b=e},
dK_:function dK_(d){this.a=d},
dJU:function dJU(d,e){this.a=d
this.b=e},
dK0:function dK0(d,e){this.a=d
this.b=e},
dJT:function dJT(d,e){this.a=d
this.b=e},
dK1:function dK1(d){this.a=d},
dJS:function dJS(d,e){this.a=d
this.b=e},
dK2:function dK2(d){this.a=d},
dJR:function dJR(d){this.a=d},
dK3:function dK3(d){this.a=d},
dJQ:function dJQ(d){this.a=d},
dK4:function dK4(d){this.a=d},
dK5:function dK5(d){this.a=d},
dJP:function dJP(d){this.a=d},
bi5:function bi5(d,e,f){this.b=d
this.c=e
this.a=f},
TZ:function TZ(d){this.a=d},
aBi:function aBi(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
e44:function e44(d,e){this.a=d
this.b=e},
e45:function e45(d,e,f){this.a=d
this.b=e
this.c=f},
e43:function e43(d,e,f){this.a=d
this.b=e
this.c=f},
e46:function e46(d){this.a=d},
e42:function e42(d){this.a=d},
e4a:function e4a(d){this.a=d},
e49:function e49(d,e){this.a=d
this.b=e},
e48:function e48(d,e){this.a=d
this.b=e},
e4b:function e4b(d,e){this.a=d
this.b=e},
e47:function e47(d,e){this.a=d
this.b=e},
e4c:function e4c(d){this.a=d},
Ua:function Ua(d){this.a=d},
aBB:function aBB(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
ecz:function ecz(d){this.a=d},
ecA:function ecA(d){this.a=d},
ecx:function ecx(d,e){this.a=d
this.b=e},
ecy:function ecy(d){this.a=d},
ecw:function ecw(d){this.a=d},
ecB:function ecB(d){this.a=d},
ecC:function ecC(d){this.a=d},
ecD:function ecD(d){this.a=d},
ecE:function ecE(d,e){this.a=d
this.b=e},
Uv:function Uv(d){this.a=d},
bhi:function bhi(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eqR:function eqR(){},
er_:function er_(){},
eqW:function eqW(d){this.a=d},
eqV:function eqV(){},
eqX:function eqX(d,e){this.a=d
this.b=e},
eqU:function eqU(d,e){this.a=d
this.b=e},
eqY:function eqY(d){this.a=d},
eqT:function eqT(d,e){this.a=d
this.b=e},
eqZ:function eqZ(d){this.a=d},
eqS:function eqS(d){this.a=d},
TX:function TX(d){this.a=d},
bgM:function bgM(d,e,f,g,h,i,j,k){var _=this
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
_.fc$=f
_.kz$=g
_.fF$=h
_.fd$=i
_.bp$=j
_.a6$=k
_.c=_.a=null},
e2K:function e2K(){},
e2L:function e2L(){},
e2D:function e2D(d){this.a=d},
e2C:function e2C(d){this.a=d},
e2E:function e2E(d){this.a=d},
e2B:function e2B(d){this.a=d},
e2F:function e2F(d){this.a=d},
e2A:function e2A(d){this.a=d},
e2G:function e2G(d,e){this.a=d
this.b=e},
e2z:function e2z(d,e){this.a=d
this.b=e},
e2H:function e2H(d){this.a=d},
e2y:function e2y(d,e){this.a=d
this.b=e},
e2I:function e2I(d){this.a=d},
e2x:function e2x(d,e){this.a=d
this.b=e},
e2J:function e2J(d){this.a=d},
e2w:function e2w(d,e){this.a=d
this.b=e},
b9S:function b9S(d,e,f){this.c=d
this.d=e
this.a=f},
aIn:function aIn(){},
btn:function btn(){},
aIG:function aIG(){},
bts:function bts(){},
aJa:function aJa(){},
btC:function btC(){},
aJE:function aJE(){},
btO:function btO(){},
jx(d,e,f,g,h,i){return new C.b3x(h,d,f,g,i,e,null)},
h6s(d,e,f,g){var w=null
return B.ch(w,w,!0,w,new C.fyC(g,e,f),d,w,!0,!0,x.H)},
hr(d,e,f,g,h,i,j){return new C.at7(f,j,i,h,g,d,e,null)},
qo(d,e,f){return C.hSh(d,e,f)},
hSh(d,e,f){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qo=B.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aT.ag$.x.h(0,e)
n=n==null?null:n.gb6()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return B.b(r.lQ(2),$async$qo)
case 7:q=h
w=8
return B.b(q.hf(A.fO),$async$qo)
case 8:p=h
if(p==null){w=1
break}o=J.f6(A.dD.gaN(p))
w=9
return B.b(C.cl5(B.a([C.fWC(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qo)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.I(x.gV).f.P(D.aJg)
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$qo,v)},
hnZ(b4,b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=A.o.al(22050*b5,1000),b1=b0*2,b2=new DataView(new ArrayBuffer(44+b1)),b3=new C.caQ(b2)
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
w=new B.f3()
w.dU(3)
v=3
u=0.006
t=!1
s=0
switch(b8){case"piano":r=D.cF3
q=D.cJR
v=3.4
break
case"organ":r=D.cIR
q=D.cWC
u=0.02
t=!0
break
case"bell":r=D.cB4
q=D.cA3
v=2.4
break
case"pluck":r=D.cF2
q=D.cm8
v=7
break
case"synth":r=D.cXr
q=D.cZ2
u=0.012
t=!0
break
case"flute":r=D.d1K
q=D.bXR
u=0.07
t=!0
s=0.035
break
default:r=D.akp
q=D.akp}b1=r.length
p=B.bZ(b1,0,!1,x.i)
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
break A}a5=a4*(Math.min(1,a0/120)*Math.pow(a2,1.6))}b2.setInt16(44+a0*2,A.o.E(A.k.U(a5*0.8*32e3),-32768,32767),!0)}return J.f6(A.dD.gaN(b2))},
dG(d,e,f,g,h,i){return C.ho_(d,e,f,g,h,i)},
ho_(d,e,f,g,h,i){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n
var $async$dG=B.e(function(j,k){if(j===1){t.push(k)
w=u}for(;;)switch(w){case 0:u=3
s=""+A.k.U(d)+"|"+f+"|"+i+"|"+B.t(g)+"|"+e
r=$.hnY.ce(0,s,new C.caS(d,f,i,g,e))
if($.caP.length<12){p=B.ag7()
p.Lr(A.aHk)
$.caP.push(p)}p=$.fTV
$.fTV=p+1
q=$.caP[A.o.F(p,$.caP.length)]
w=6
return B.b(J.hbk(q,new B.a1i(r,null),h),$async$dG)
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
l2(d,e,f,g){var w,v=$.aZA
if(v==="music")return C.dG(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return C.dG(261.63*v,w,f,0,g,"sine")}return C.vl(v,e,f,g)},
vl(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.E(e,-12,36)/12),s=Math.min(f,260)
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
AI(d,e,f,g){var w,v,u,t,s,r,q,p=$.aZA
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.K)(e),++w)C.l2(d,e[w],f,g)
return}for(p=B.dc(e,0,B.dH(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bU(p,p.gJ(0),v.k("bU<ai.E>")),u=x.H,v=v.k("ai.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)C.l2(d,s,f,g)
else B.bN(new B.b8(1000*q),new C.caR(d,s,f,g),u)}},
a6h(d,e){var w="sine",v="noise"
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
yF(d){return C.hnd(d)},
hnd(d){var w=0,v=B.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
var $async$yF=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ax(),$async$yF)
case 7:r=f
q=B.aS(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.T(x.N,x.z)
w=1
break}p=A.R.aF(0,q,null)
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
return B.i($async$yF,v)},
vi(d,e){return C.hne(d,e)},
hne(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$vi=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$vi)
case 6:s=g
w=7
return B.b(s.aq("String","ngmy_play_progress_v1_"+d,A.R.am(e,null)),$async$vi)
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
return B.i($async$vi,v)},
b3x:function b3x(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cn_:function cn_(d){this.a=d},
cn0:function cn0(d,e){this.a=d
this.b=e},
fyC:function fyC(d,e,f){this.a=d
this.b=e
this.c=f},
fyB:function fyB(d){this.a=d},
dw:function dw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cmW:function cmW(d){this.a=d},
eH:function eH(d,e,f){this.c=d
this.d=e
this.a=f},
at7:function at7(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
fd:function fd(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cmV:function cmV(d){this.a=d},
E6:function E6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cn1:function cn1(d){this.a=d},
mh:function mh(){},
cmX:function cmX(d,e,f){this.a=d
this.b=e
this.c=f},
cmZ:function cmZ(d){this.a=d},
cmY:function cmY(){},
caQ:function caQ(d){this.a=d},
caS:function caS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
caR:function caR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cpw(){var w=0,v=B.j(x.cL),u,t
var $async$cpw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=C
w=3
return B.b($.tz().baY("assets/data/world110.json"),$async$cpw)
case 3:u=t.hrK(e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cpw,v)},
hrK(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.R.aF(0,a2,null)),a1=B.a([],x.dO)
for(w=J.aU(a0),v=x.n,u=x.b,t=x.a,s=x.gO;w.C();){r=t.a(w.gT(w))
q=B.a([],s)
for(p=J.a8(r),o=J.aU(d.a(p.h(r,"r")));o.C();){n=o.gT(o)
m=B.a([],u)
for(l=J.aU(d.a(n));l.C();){k=l.gT(l)
j=J.a8(k)
m.push(B.a([B.f4(j.h(k,0)),B.f4(j.h(k,1))],v))}q.push(m)}o=B.cK(p.h(r,"n"))
m=B.cK(p.h(r,"a"))
l=B.cK(p.h(r,"ct"))
j=B.cK(p.h(r,"sr"))
i=B.f4(p.h(r,"pop"))
h=B.f4(p.h(r,"gdp"))
g=B.cK(p.h(r,"inc"))
f=B.ae("^\\d\\.\\s*",!0,!1,!1,!1)
g=B.aNt(g,f,"",0)
f=B.f4(J.q(p.h(r,"c"),0))
p=B.f4(J.q(p.h(r,"c"),1))
e=new C.a8X(o,m,l,j,i,h,g,f,p,q)
e.bsN(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new C.a8Y(a1)},
fcR(d){if(d>=1e12)return A.k.aa(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.aa(d/1e9,2)+" billion"
if(d>=1e6)return A.k.aa(d/1e6,1)+" million"
if(d>=1000)return A.k.aa(d/1000,1)+" thousand"
return A.k.aa(d,0)},
Fx(d){var w,v,u,t=A.o.u(A.k.U(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.F(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
a8X:function a8X(d,e,f,g,h,i,j,k,l,m){var _=this
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
a8Y:function a8Y(d){this.a=d},
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
NA:function NA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
xk:function xk(d,e,f){this.a=d
this.b=e
this.c=f},
Nz:function Nz(d){this.a=0
this.b=d
this.c=0},
htD(d,e,f){return $.htE.ce(0,d+"|"+B.t(e)+"|"+f.l(),new C.d6i(d,e,f))},
Tt:function Tt(d){this.a=d},
aAG:function aAG(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fc$=j
_.kz$=k
_.fF$=l
_.fd$=m
_.bp$=n
_.a6$=o
_.c=_.a=null},
dPm:function dPm(d){this.a=d},
dPl:function dPl(d,e){this.a=d
this.b=e},
dOP:function dOP(d){this.a=d},
dON:function dON(d){this.a=d},
dOO:function dOO(d,e,f){this.a=d
this.b=e
this.c=f},
dOM:function dOM(d){this.a=d},
dOL:function dOL(){},
dOK:function dOK(d){this.a=d},
dP7:function dP7(d,e){this.a=d
this.b=e},
dP8:function dP8(d,e){this.a=d
this.b=e},
dOX:function dOX(d){this.a=d},
dOY:function dOY(d){this.a=d},
dOW:function dOW(d){this.a=d},
dOZ:function dOZ(d){this.a=d},
dOQ:function dOQ(d,e){this.a=d
this.b=e},
dOR:function dOR(d){this.a=d},
dP9:function dP9(d,e){this.a=d
this.b=e},
dOV:function dOV(d,e){this.a=d
this.b=e},
dPd:function dPd(d){this.a=d},
dP6:function dP6(d){this.a=d},
dPe:function dPe(d,e){this.a=d
this.b=e},
dP5:function dP5(d,e){this.a=d
this.b=e},
dPf:function dPf(d){this.a=d},
dP4:function dP4(d,e){this.a=d
this.b=e},
dPg:function dPg(d){this.a=d},
dP3:function dP3(d,e){this.a=d
this.b=e},
dPh:function dPh(d){this.a=d},
dP2:function dP2(d,e){this.a=d
this.b=e},
dPi:function dPi(d){this.a=d},
dP1:function dP1(d,e){this.a=d
this.b=e},
dPj:function dPj(d){this.a=d},
dP0:function dP0(d){this.a=d},
dPk:function dPk(d){this.a=d},
dP_:function dP_(d){this.a=d},
dPa:function dPa(d){this.a=d},
dOU:function dOU(d){this.a=d},
dPb:function dPb(d){this.a=d},
dOT:function dOT(d){this.a=d},
dPc:function dPc(d){this.a=d},
dOS:function dOS(d){this.a=d},
dOJ:function dOJ(){},
dOI:function dOI(d){this.a=d},
dOH:function dOH(d){this.a=d},
bc5:function bc5(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d6i:function d6i(d,e,f){this.a=d
this.b=e
this.c=f},
d6j:function d6j(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aIM:function aIM(){},
aIN:function aIN(){},
acY(d,e,f,g,h){return new C.bqg(d,e,f,g,h)},
bqg:function bqg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f2_:function f2_(){},
f20:function f20(){},
f21:function f21(){},
f22:function f22(){},
f23:function f23(){},
f24:function f24(){},
f25:function f25(){},
Uy:function Uy(d){this.a=d},
bhl:function bhl(){this.d=$
this.c=this.a=null},
erE:function erE(d){this.a=d},
erF:function erF(d){this.a=d},
erD:function erD(d){this.a=d},
erG:function erG(){},
erC:function erC(d,e){this.a=d
this.b=e},
erB:function erB(d){this.a=d},
hu4(){var w,v,u=x.n,t=B.a([],u)
for(w=0;w<260;++w){v=new B.f3()
v.dU(w)
t.push(v.af()*3.141592653589793*2)}u=B.a([],u)
for(w=0;w<260;++w){v=new B.f3()
v.dU(w+900)
u.push(2.2+v.af())}return new C.bh8(new B.co(null,x.A),new C.Nz(A.cE),A.J,A.at,t,u,$,A.bw,0,B.a([],x.X),null,null)},
hu6(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hu5(d){return 1.5+1.6*Math.log(d.d/1000+1)},
fXO(d,e,f){return $.huG.ce(0,d+"|"+B.t(e)+"|"+f.l(),new C.eLs(d,e,f))},
Uj:function Uj(d){this.a=d},
bh8:function bh8(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fc$=j
_.kz$=k
_.fF$=l
_.fd$=m
_.bp$=n
_.a6$=o
_.c=_.a=null},
ejN:function ejN(d,e){this.a=d
this.b=e},
ejY:function ejY(d,e){this.a=d
this.b=e},
ejZ:function ejZ(d,e){this.a=d
this.b=e},
ejV:function ejV(d){this.a=d},
ejW:function ejW(d){this.a=d},
ejX:function ejX(d){this.a=d},
ek_:function ek_(d){this.a=d},
ejU:function ejU(d){this.a=d},
ek0:function ek0(d,e){this.a=d
this.b=e},
ek1:function ek1(d){this.a=d},
ejT:function ejT(d,e){this.a=d
this.b=e},
ek2:function ek2(d){this.a=d},
ejS:function ejS(d,e){this.a=d
this.b=e},
ek3:function ek3(d){this.a=d},
ejR:function ejR(d){this.a=d},
ek4:function ek4(d){this.a=d},
ejQ:function ejQ(d){this.a=d},
ek5:function ek5(d){this.a=d},
ejP:function ejP(d){this.a=d},
ek6:function ek6(d){this.a=d},
ejO:function ejO(d){this.a=d},
ejM:function ejM(){},
ejL:function ejL(){},
ejK:function ejK(d){this.a=d},
ejJ:function ejJ(d){this.a=d},
bol:function bol(d,e){this.b=d
this.a=e},
eLs:function eLs(d,e,f){this.a=d
this.b=e
this.c=f},
eLt:function eLt(){},
eLu:function eLu(){},
Tu:function Tu(d){this.a=d},
aAH:function aAH(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fc$=k
_.kz$=l
_.fF$=m
_.fd$=n
_.bp$=o
_.a6$=p
_.c=_.a=null},
dPq:function dPq(){},
dPT:function dPT(){},
dPF:function dPF(d,e){this.a=d
this.b=e},
dPw:function dPw(d,e){this.a=d
this.b=e},
dPG:function dPG(d){this.a=d},
dPv:function dPv(d){this.a=d},
dPH:function dPH(d){this.a=d},
dPE:function dPE(d){this.a=d},
dPL:function dPL(d){this.a=d},
dPD:function dPD(d){this.a=d},
dPM:function dPM(d){this.a=d},
dPC:function dPC(d,e){this.a=d
this.b=e},
dPN:function dPN(d){this.a=d},
dPO:function dPO(d){this.a=d},
dPB:function dPB(d,e){this.a=d
this.b=e},
dPP:function dPP(d){this.a=d},
dPA:function dPA(d,e){this.a=d
this.b=e},
dPQ:function dPQ(d){this.a=d},
dPz:function dPz(d,e){this.a=d
this.b=e},
dPR:function dPR(d){this.a=d},
dPy:function dPy(d,e){this.a=d
this.b=e},
dPS:function dPS(d){this.a=d},
dPx:function dPx(d){this.a=d},
dPI:function dPI(d){this.a=d},
dPu:function dPu(d){this.a=d},
dPJ:function dPJ(d){this.a=d},
dPt:function dPt(d){this.a=d},
dPK:function dPK(d){this.a=d},
dPs:function dPs(d){this.a=d},
dPp:function dPp(d){this.a=d},
dPo:function dPo(){},
dPr:function dPr(d,e){this.a=d
this.b=e},
dPn:function dPn(d){this.a=d},
b7l:function b7l(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
Ub:function Ub(d){this.a=d},
bh5:function bh5(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.fc$=e
_.kz$=f
_.fF$=g
_.fd$=h
_.bp$=i
_.a6$=j
_.c=_.a=null},
ecH:function ecH(d,e){this.a=d
this.b=e},
ecI:function ecI(d,e){this.a=d
this.b=e},
ecG:function ecG(d,e){this.a=d
this.b=e},
ecJ:function ecJ(d,e){this.a=d
this.b=e},
ecF:function ecF(d,e){this.a=d
this.b=e},
bnU:function bnU(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eJC:function eJC(d){this.a=d},
aIO:function aIO(){},
btu:function btu(){},
aJm:function aJm(){},
btI:function btI(){},
aJp:function aJp(){},
btK:function btK(){},
hu2(){var w,v,u,t=B.a([],x.d9),s=B.a([],x.g)
for(w=0;w<150;++w){v=new B.f3()
v.dU(w)
v=v.af()
u=new B.f3()
u.dU(w+500)
s.push(new B.u(v,u.af()))}return new C.bfO(new B.co(null,x.A),new C.Nz(A.cE),t,A.at,s,$,A.bw,0,B.a([],x.X),null,null)},
O1:function O1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Sx:function Sx(d){this.a=d},
bfO:function bfO(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.fc$=i
_.kz$=j
_.fF$=k
_.fd$=l
_.bp$=m
_.a6$=n
_.c=_.a=null},
dxC:function dxC(){},
dxq:function dxq(){},
dxr:function dxr(d,e){this.a=d
this.b=e},
dxs:function dxs(d,e){this.a=d
this.b=e},
dxp:function dxp(d){this.a=d},
dxo:function dxo(d){this.a=d},
dxu:function dxu(d){this.a=d},
dxn:function dxn(d,e){this.a=d
this.b=e},
dxv:function dxv(d){this.a=d},
dxm:function dxm(d){this.a=d},
dxw:function dxw(d){this.a=d},
dxl:function dxl(d){this.a=d},
dxx:function dxx(d){this.a=d},
dxk:function dxk(d){this.a=d},
dxy:function dxy(d){this.a=d},
dxj:function dxj(d){this.a=d},
dxz:function dxz(d){this.a=d},
dxi:function dxi(d){this.a=d},
dxA:function dxA(d){this.a=d},
dxh:function dxh(d){this.a=d},
dxB:function dxB(d){this.a=d},
dxg:function dxg(d){this.a=d},
dxt:function dxt(d){this.a=d},
dxf:function dxf(d){this.a=d},
b6K:function b6K(d,e){this.b=d
this.a=e},
acC:function acC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Tq:function Tq(d){this.a=d},
bgd:function bgd(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.fc$=p
_.kz$=q
_.fF$=r
_.fd$=s
_.bp$=t
_.a6$=u
_.c=_.a=null},
dNY:function dNY(d){this.a=d},
dNO:function dNO(d,e){this.a=d
this.b=e},
dNP:function dNP(d,e){this.a=d
this.b=e},
dNN:function dNN(d,e){this.a=d
this.b=e},
dNQ:function dNQ(d){this.a=d},
dNM:function dNM(d){this.a=d},
dNR:function dNR(d){this.a=d},
dNL:function dNL(d,e){this.a=d
this.b=e},
dNS:function dNS(d){this.a=d},
dNK:function dNK(d,e){this.a=d
this.b=e},
dNT:function dNT(d){this.a=d},
dNJ:function dNJ(d,e){this.a=d
this.b=e},
dNU:function dNU(d){this.a=d},
dNI:function dNI(d,e){this.a=d
this.b=e},
dNV:function dNV(d){this.a=d},
dNH:function dNH(d){this.a=d},
dNW:function dNW(d){this.a=d},
dNG:function dNG(d){this.a=d},
dNX:function dNX(d){this.a=d},
dNF:function dNF(d){this.a=d},
bbW:function bbW(d,e){this.b=d
this.a=e},
d3r:function d3r(d){this.a=d},
U7:function U7(d){this.a=d},
bh4:function bh4(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.fc$=f
_.kz$=g
_.fF$=h
_.fd$=i
_.bp$=j
_.a6$=k
_.c=_.a=null},
ecn:function ecn(d,e){this.a=d
this.b=e},
eco:function eco(d){this.a=d},
ecm:function ecm(d){this.a=d},
ecp:function ecp(d){this.a=d},
ecl:function ecl(d){this.a=d},
ecq:function ecq(d){this.a=d},
eck:function eck(d){this.a=d},
ecr:function ecr(d){this.a=d},
ecj:function ecj(d){this.a=d},
ecs:function ecs(d){this.a=d},
eci:function eci(d,e){this.a=d
this.b=e},
ect:function ect(d){this.a=d},
ech:function ech(d,e){this.a=d
this.b=e},
ecu:function ecu(d){this.a=d},
ecg:function ecg(d,e){this.a=d
this.b=e},
ecv:function ecv(d){this.a=d},
ecf:function ecf(d,e){this.a=d
this.b=e},
bnb:function bnb(d,e){this.b=d
this.a=e},
aIk:function aIk(){},
btm:function btm(){},
aIJ:function aIJ(){},
btt:function btt(){},
aJl:function aJl(){},
btH:function btH(){},
fWC(d,e,f){var w,v
B.fL(0,0,!1)
w=new B.l5(e,f,$,null)
v=w.bCH(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
hHq(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.m(0,w[v],v)
u=B.a([],x.D)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.K)(w),++q){p=w[q]
u.push(B.E(["k",p.b,"x",B.vY(A.k.aa(p.c,4)),"y",B.vY(A.k.aa(p.d,4)),"v",p.e,"l",B.vY(A.k.aa(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.vY(A.k.aa(p.as,3)),"ch",p.at,"vc",B.vY(A.k.aa(p.z,3)),"s",B.vY(A.k.aa(p.ch,2))],s,r))}w=B.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.K)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.A(f,B.a2(f).k("cl.E"))
A.d.fn(l)
return A.R.am(B.E(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
hQF(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.R.aF(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a7(h)
A.d.a7(a6.b)
v=B.a([],x.fs)
g=x.M
f=g.a(J.q(w,"parts"))
f=J.aU(f==null?A.cL:f)
while(f.C()){u=f.gT(f)
t=i.a(u)
e=B.aS(J.q(t,"k"))
s=e==null?"":e
if(!$.pM().ak(0,s)){J.cb(v,null)
continue}d=s
a0=B.aM(J.q(t,"x"))
if(a0==null)a0=0.5
a1=B.aM(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.rU(a2,d,a0,a1)
a3.an9(a2,d,a0,a1)
h.push(a3)
r=a3
a1=B.aM(J.q(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=B.aM(J.q(t,"l"))
if(d==null)d=r.f
r.f=d
d=B.aM(J.q(t,"o"))
if(d==null)d=r.r
r.r=d
d=B.k5(J.q(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.k5(J.q(t,"b"))
r.x=d===!0
d=B.aS(J.q(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aM(J.q(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aM(J.q(t,"ch"))
r.at=A.k.N(d==null?0:d)
d=B.aM(J.q(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aM(J.q(t,"s"))
r.ch=A.k.E(d==null?1:d,1,2.6)
J.cb(v,r)}i=g.a(J.q(w,"wires"))
i=J.aU(i==null?A.cL:i)
h=x.j
while(i.C()){q=i.gT(i)
p=h.a(q)
f=B.aM(J.q(p,0))
o=f==null?a5:A.k.N(f)
f=B.aM(J.q(p,2))
n=f==null?a5:A.k.N(f)
if(o==null||n==null||o<0||n<0||o>=J.aa(v)||n>=J.aa(v))continue
m=J.q(v,o)
l=J.q(v,n)
if(m!=null&&l!=null)a6.ahO(m,A.k.N(B.f4(J.q(p,1))),l,A.k.N(B.f4(J.q(p,3))))}i=B.aM(J.q(w,"challenge"))
i=A.k.N(i==null?0:i)
k=B.b_(x.S)
h=g.a(J.q(w,"done"))
h=J.aU(h==null?A.cL:h)
while(h.C()){j=h.gT(h)
J.cb(k,A.k.N(B.f4(j)))}return new B.bkT(i,k)}catch(a4){return a5}},
fev(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fev=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.ax(),$async$fev)
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
return B.i($async$fev,v)},
bA3(d){return C.hSd(d)},
hSd(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bA3=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.ax(),$async$bA3)
case 7:w=6
return B.b(f.aq("String","ngmy_electronics_lab_v1",d),$async$bA3)
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
return B.i($async$bA3,v)},
cl5(d,e){var w=0,v=B.j(x.g7),u
var $async$cl5=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.fLi().wh(d,null,null,null,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cl5,v)}},D,I,H,N,U,A_,A0,Ah,A1,A2
J=c[1]
B=c[0]
A=c[2]
A3=c[95]
A4=c[114]
V=c[104]
W=c[101]
A5=c[27]
F=c[89]
O=c[97]
A6=c[106]
X=c[110]
Y=c[112]
L=c[117]
G=c[93]
A7=c[87]
A8=c[105]
Z=c[111]
A9=c[65]
T=c[74]
Aa=c[82]
Ab=c[79]
Q=c[85]
Ac=c[118]
Ad=c[109]
R=c[88]
M=c[90]
Ae=c[115]
S=c[113]
Af=c[69]
Ag=c[108]
P=c[92]
K=c[107]
E=c[94]
C=a.updateHolder(c[17],C)
D=c[86]
I=c[100]
H=c[40]
N=c[98]
U=c[96]
A_=c[102]
A0=c[91]
Ah=c[99]
A1=c[103]
A2=c[116]
C.ahz.prototype={}
C.TG.prototype={
S(){return new C.bgz(B.T(x.N,x.i),new B.ar(A.as,$.av()),B.a([],x.X),B.a([],x.L),B.mf(0,null,null))}}
C.bgz.prototype={
gUg(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
this.ch.q()
this.a2()},
LW(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$LW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aT.ag$.d.c
if(s!=null)s.jf()
p.bJ(0,A.c2)
t.n(new C.dWE(t))
t.a.toString
p=t.gUg()
w=3
return B.b(C.bvI(C.hvS(q,C.hHh(p),o,t.ay)),$async$LW)
case 3:s=e
r=s==null?null:J.iN(s)
if(r==null||r.length===0||A.a.a_(r,"{"))r=C.hIE(q,p,o)
if(t.c==null){w=1
break}t.n(new C.dWF(t,o,r))
$.aT.x1$.push(new C.dWG(t))
case 1:return B.h(u,v)}})
return B.i($async$LW,v)},
We(d){return this.bTa(d)},
aRD(){return this.We(null)},
bTa(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$We=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aT.ag$.d.c
if(s!=null)s.jf()
t.f.saT(0,o)
t.n(new C.dWR(t))
C.dG(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bvI(C.hCu(o)),$async$We)
case 3:r=n.a=m.hQp(f)
p.b=""
if(r!=null&&!C.hHi(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.hIF(o)
q=B.ae(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.ahz(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.n(new C.dWS(p,t))
t.bYh(p.a)
case 1:return B.h(u,v)}})
return B.i($async$We,v)},
bYh(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
A.d.a7(w)
w=++m.as
v=m.gUg()
A.d.a7(v.a)
A.d.a7(v.b)
m.e.a7(0)
m.n(new C.dWN(m))
t=d.d
s=B.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.dWL(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.dWO(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.K)(r),++u){p.$2(o,new C.dWP(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.dWQ(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bA.j(0.1),g=B.m(16),f=B.H(A.bA.j(0.35),A.r,1)
if(m.x)j=B.B(B.a([D.evn,A.be,B.D(B.d(m.Q,l,l,l,l,l,l,A.Rb,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.eTZ
else{w=B.D(B.d(k.a,l,l,l,l,l,l,A7.Rx,l,l,l),1)
v=x.p
w=B.a([B.B(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.eFG,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.C(A.uo,B.d(u,l,l,l,l,l,l,D.eId,l,l,l),l))
w.push(A.d6)
w.push(B.d(k.b,l,l,l,l,l,l,D.HI,l,l,l))
u=k.e
if(u.length!==0){t=A.aK.j(0.12)
s=B.m(10)
w.push(B.p(l,B.d(u,l,l,l,l,l,l,D.eKt,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.i5,A.ck,l,l,l))}w.push(A.ar)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.az
w.push(new B.C(A.Ka,new B.cD(A.b_,A.e,A.j,A.F,l,A.p,l,0,B.a([new B.x(t,l,A.n3,l,l,l,l,l,l,l,l,l),A.bq,new B.bG(1,A.bp,new B.x(q,l,new B.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.K)(j),++p){o=j[p]
t=new B.aY(12,12)
s=new B.aY(12,12)
A.d.v(w,B.a([A.P,new B.bI(A.a7,l,l,B.p(l,new B.x(o.a,l,A.a4r,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.bA.j(0.3),l,l,new B.bv(t,t,t,t),l,l,A.n),l,l,l,l,A.fL,l,l,l),l),A.av,B.p(l,new B.x(o.b,l,D.ePF,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.c.j(0.07),l,l,new B.bv(s,s,s,s),l,l,A.n),l,l,l,l,A.bU,l,l,l)],v))}if(m.ax)w.push(D.dQi)
j=B.ci(B.v(w,A.F,l,A.e,A.j,0,A.p),A.q,m.ch,A.z,l,l,l,l,A.ak)}w=x.p
g=B.v(B.a([B.afO(B.p(l,j,A.f,l,new B.aW(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.bgE,A.eq,l,l,1/0),A.b9,A.i4),B.D(C.fN5(m.gUg(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new C.dw("Ask about it",i,new C.dWV(m),l,A.bA,l),new C.dw("Invent something new",!i,new C.dWW(m),l,A.bA,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.cXZ[p]
i.push(new C.dw(n,!1,new C.dWX(m,n),l,A.bA,l))}f.push(new C.eH(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.cJ4[p]
i.push(new C.dw(r,!1,new C.dWY(m,r),l,A.bA,l))}f.push(new C.eH(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.D(B.aK(l,A.U,!1,l,!0,A.q,l,B.aL(),m.f,l,l,l,l,l,2,B.bn(l,new B.b3(4,B.m(16),A.Z),l,A.eM,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kl,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.dWZ(m,k),l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,A.dj,!0,A.a5,l,A.am,l,A.aJY,l,l),1)
h=m.at
v=h&&j?D.bt1:A.dR
j=h&&j?"Ask":"Invent"
f.push(B.B(B.a([i,A.aa,new C.fd(v,j,new C.dX_(m,k),A.bA,l)],w),A.m,l,A.e,A.j,0,l,l))
return C.jx(A.bA,A.h2,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.v(f,A.m,l,A.e,A.Q,0,A.p))}}
C.EQ.prototype={}
C.uh.prototype={}
C.U6.prototype={
S(){return new C.aBx(A.J,A.J,A.at,B.b_(x.S),$,A.bw,0,B.a([],x.X),null,null)}}
C.aBx.prototype={
gaSL(){var w,v,u,t=this,s=D.FG[t.cx],r=D.Oz[t.cy],q=D.B_[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.eg(w,w.r,B.a2(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.ark[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cG(p,0,new C.eb1())},
ga0g(){return D.FG[this.cx].d/this.gaSL()},
gaKp(){return 0.1*(D.FG[this.cx].d/0.9)/D.Oz[this.cy].d},
Z(){this.a0()
this.kM()
C.yF("rocket_lander").bz(new C.ebl(this),x.P)},
bYq(){var w=this
w.ay=A.k.E(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cE.af()*0.6
w.f=new B.u(0.15+A.cE.af()*0.7,0.08)
w.r=new B.u((A.cE.af()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
l4(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.n(new C.ebm())
return}w=D.qD[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.E(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.u(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga0g()
v=v.ao(0,new B.u(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaKp())}if(m.dy){t=m.r
v=v.aE(0,t.aO(0,t.gcj()*6*D.at0[m.d]))}t=m.r=m.r.ao(0,v.aO(0,d))
s=m.f=m.f.ao(0,t.aO(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.u(-t.a*0.4,t.b)
t=new B.u(A.k.E(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.u(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.B_[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.vi("rocket_lander",B.E(["unlocked",t],x.N,x.z))
C.AI("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga0g()/(D.qD[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.aa(m.ga0g()/(D.qD[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
C.dG(80,"",500,0,0.6,"noise")
B.fW()}}if(m.Q&&m.x>0&&A.o.F(A.k.by(m.CW*20),2)===0)C.dG(90,"",70,0,0.12,"noise")
m.n(new C.ebn())},
ad4(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.eHL,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new C.dw(e[w].a,f.$1(w),new C.eb3(this,g,w),v,h,v))
return new B.C(A.fk,B.v(B.a([u,A.d6,B.c9(A.bI,s,A.by,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
by_(d){var w,v,u,t,s=this,r=null,q=s.ga0g()/(D.qD[s.d].b/9.81*0.28)>=1,p=A.k.U(1/s.gaKp()),o=D.at0[s.d],n=B.m(24),m=d.c,l=B.H(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.av,B.d(d.d+" Gravity here: "+B.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,D.aL2,r,r,r),A.T,s.ad4("ENGINE: "+D.FG[s.cx].b,D.FG,new C.eaT(s),new C.eaU(s),A.cM),s.ad4("FUEL TANK: "+D.Oz[s.cy].b,D.Oz,new C.eaV(s),new C.eaW(s),A.bg),s.ad4("LANDING GEAR: "+D.B_[s.db].b,D.B_,new C.eaX(s),new C.eaY(s),A.aY),s.ad4("EXTRAS (tap to add)",D.ark,new C.eaZ(s),new C.eb_(s),A.bA)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.f9J)
o=(q?A.bg:A.cG).j(0.14)
w=B.m(12)
v=A.k.aa(s.gaSL(),2)
u=A.k.aa(s.ga0g()/(D.qD[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.U(D.B_[s.db].d*100)+".",r,r,r,r,r,r,D.eIk,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.i5,A.bU,r,r,r))
m.push(A.T)
m.push(new B.bI(A.A,r,r,new C.fd(A.mQ,"Launch",new C.eb0(s),A.bg,r),r))
return B.au(B.p(r,B.ci(B.v(m,A.F,r,A.e,A.Q,0,A.p),A.q,r,A.z,r,A.c4,r,r,A.ak),A.f,r,A.lj,new B.o(D.b8c,r,l,n,r,r,A.n),r,r,r,A.bU,r,r,r,r),r,r,r)},
aTR(d,e,f,g){var w=null,v=f?A.cM:A.c.j(0.1),u=B.m(18),t=B.H(A.ba,A.r,1)
return B.pj(A.jI,B.p(w,B.W(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.eaQ(e),new C.eaR(e),w,w,w,w,new C.eaS(e))},
aTQ(d,e,f){return this.aTR(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.ck(new C.ebe(s,D.qD[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.qD[w].a:"\ud83d\udd12"
o.push(new C.dw(v,s.d===w,new C.ebf(s,w),r,D.qD[w].c,r))}v=B.a([s.aTQ(D.bt8,new C.ebg(s),s.y),A.be,s.aTR(A.uK,new C.ebh(s),s.Q,130),A.be,s.aTQ(A.Yn,new C.ebi(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aY:A.c.j(0.1)
t=B.m(18)
A.d.v(v,B.a([A.be,B.aG(r,B.p(r,D.bxd,A.f,r,r,new B.o(u,r,B.H(A.ba,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.ebj(s),r,r,r,r,r,r,!1,A.ad)],p))}return C.jx(A.cM,A.h2,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.v(B.a([new C.eH(o,"WORLD",r),B.B(v,A.m,r,A.b7,A.j,0,r,r)],p),A.m,r,A.e,A.Q,0,A.p))}}
C.bdB.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.qD[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.V(),d=B.L(),a0=j.c,a1=B.aq(D.bat,a0,0.25)
a1.toString
d.sar(new B.a5(A.b0,A.b3,A.x,B.a([D.b3i,a1],x.O),l,l).av(0,new B.a7(0,0,g,f)))
a2.aW(new B.a7(0,0,g,f),d)
w=new B.f3()
w.dU(5)
for(g=a2.a,v=0;v<70;++v){f=w.af()
d=w.af()
a1=w.af()
u=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
u.r=A.c.j(0.2+w.af()*0.5).gp(0)
t=u.G()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=B.a([],f)
r=new B.aO(e.r,A.ao,l,l,d)
r.D(new B.b4(0,s+14))
q=new B.f3()
q.dU(2)
for(p=0;p<=i;p+=18){e=new B.ao(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.af()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bx(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.D(new B.ao(i,h))
r.D(new B.ao(0,h))
r.D(new B.bD())
e=$.V()
d=B.L()
d.r=B.aq(a0,A.w,0.6).gp(0)
a2.aL(r,d)
o=B.cr(new B.u(k.ax*i,s+10),8,k.ay*i)
d=B.bx(o,A.hK)
a0=B.L()
a0.r=A.bl.gp(0)
a2.aA(d,a0)
a0=B.bx(o.cD(2),A.qU)
d=B.L()
d.b=A.ae
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aA(a0,d)
if(k.as==="ready")return
d=k.f
J.by(g.save())
g.translate(d.a*i,d.b*h)
a2.iU(0,k.w)
i=k.as
if(i==="crashed"){k=B.L()
k.r=A.cM.j(0.6).gp(0)
k.z=R.Ga
a2.ae(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new B.aO(i,A.ao,l,l,B.a([],f))
n.D(new B.b4(-8,18))
n.D(new B.ao(0,44+Math.sin(k.CW*40)*8))
n.D(new B.ao(8,18))
n.D(new B.bD())
k=B.L()
k.r=A.aK.gp(0)
a2.aL(n,k)
i=new B.aO(i,A.ao,l,l,B.a([],f))
i.D(new B.b4(-4,18))
i.D(new B.ao(0,32))
i.D(new B.ao(4,18))
i.D(new B.bD())
k=B.L()
k.r=A.c.gp(0)
a2.aL(i,k)}k=e.r
m=new B.aO(k,A.ao,l,l,B.a([],f))
m.D(new B.b4(0,-26))
m.D(new B.cO(14,-10,11,18))
m.D(new B.ao(-11,18))
m.D(new B.cO(-14,-10,0,-26))
m.D(new B.bD())
i=B.L()
i.sar(D.bIy.av(0,D.eot))
a2.aL(m,i)
i=B.L()
i.r=A.aY.gp(0)
a2.ae(D.ve,5,i)
i=new B.aO(k,A.ao,l,l,B.a([],f))
i.D(new B.b4(-11,6))
i.D(new B.ao(-20,20))
i.D(new B.ao(-11,18))
i.D(new B.bD())
h=B.L()
h.r=A.aD.gp(0)
a2.aL(i,h)
f=new B.aO(k,A.ao,l,l,B.a([],f))
f.D(new B.b4(11,6))
f.D(new B.ao(20,20))
f.D(new B.ao(11,18))
f.D(new B.bD())
k=B.L()
k.r=A.aD.gp(0)
a2.aL(f,k)
g.restore()},
ap(d){return!0}}
C.aJj.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.btG.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
w=this.fc$
w===$&&B.c()
w.q()
this.bqq()}}
C.aP7.prototype={}
C.a1c.prototype={}
C.b6N.prototype={}
C.Sy.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eP(["skin"],x.N),o=new Float32Array(0)
return new C.azZ(w,v,u,t,s,r,q,new B.co(null,x.A),p,D.IA,D.IA,A.at,A.cE,o,new Int32Array(0),$,A.bw,0,B.a([],x.X),null,null)}}
C.azZ.prototype={
Z(){var w=this
w.a0()
w.kM()
w.as=new C.bX0(w.gc4Y())
new C.dy3(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a9(0)
v.d=null}this.bpr()},
c4Z(d){var w,v=this
if(v.c==null)return
w=J.a8(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eM(0,B.E(["t","init","data",$.fWR],x.N,x.z))
v.at=!0
v.ax=""
v.avq()
break
case"pick":v.n(new C.dxG(v,d))
break
case"shot":v.aeX(B.t(w.h(d,"data")))
break
case"error":$.al.$1("[body viewer] "+B.t(w.h(d,"text")))
break}},
avq(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.apk[q.CW]
v=new C.dxH()
u=q.ay
u=B.A(u,B.a2(u).k("cl.E"))
A.d.fn(u)
t=x.N
s=B.E(["layers",u,"skinMode",q.ch,"tone","#"+B.t(v.$1(w.b))+B.t(v.$1(w.c))+B.t(v.$1(w.d)),"sel",q.cx,"bpm",A.k.U(q.k3),"spin",q.fy],t,x.cK)
r=A.R.am(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=B.T(t,x.z)
u.m(0,"t","state")
u.v(0,s)
v.eM(0,u)}},
aeX(d){return this.clf(d)},
clf(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aeX=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cy.aG(A.a.aY(d,A.a.cJ(d,",")+1))
w=6
return B.b(C.cl5(B.a([C.fWC(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$aeX)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.I(x.gV).f.P(D.aJg)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aeX,v)},
auT(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
l4(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.by(w)!==A.k.by(v.ok)){C.a6h("kick",0.4)
v.a2N(170,new C.dy4())}v.ok=w
return},
aeM(d){var w,v,u,t,s=this
s.n(new C.dxI(s,d))
if(d==null){s.fx=D.IA
s.dy=1
w=s.as
if(w!=null)w.eM(0,B.E(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("a3<1>")
u=B.A(new B.a3(w,new C.dxJ(d),v),v.k("G.E"))
t=A.d.gL(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.K(0,t)
if(s.ch===2)s.ch=1}s.avq()
w=s.as
if(w!=null)w.eM(0,B.E(["t","focus","group",d],x.N,x.z))
s.go=0
s.cnC(t,d)
return},
cnC(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){C.a6h("kick",0.8)
this.a2N(260,new C.dxK())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")C.dG(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a2N(w*70,new C.dxL(this))
else if(A.a.t(e,"intestine")||e==="Stomach")C.dG(110,"",360,0.7,0.3,"saw")
else C.vl("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":C.dG(210+e.length*4,"",80,0.6,0.55,"tri")
C.dG(2400,"",20,0,0.3,v)
break
case"muscle":C.dG(70,"",150,1,0.6,"sine")
break
case"vessel":C.dG(300,"",380,0.4,0.22,v)
C.a6h("kick",0.3)
break
default:C.vl("organic",2+A.o.F(e.length,6),200,0.4)}},
crU(d){this.n(new C.dxN(this,d))},
aU8(){var w,v,u,t,s,r,q,p=this,o=B.b_(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
if(p.auT(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.K(0,s.a)}q=B.A(o,o.$ti.k("cl.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aC(w)]
p.p4=""},
bOP(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.n(new C.dxD(u,w,d))
v=x.t
C.AI("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.a2N(1100,new C.dxE(u))
return}if(d==null){if(u.cx!=null)u.aeM(null)
return}u.aeM(d)},
bSu(d,e){var w,v=this,u=null,t=B.m(18),s=B.H(A.bX.j(0.5),A.r,1)
if(v.p1){w=v.p2
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.eEk,u,u,u)}else if(d==null||e==null)w=D.eRE
else{w=x.p
w=B.B(B.a([B.D(B.v(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.jb,u,u,u),A.d6,B.d(e.b,u,u,u,u,u,u,D.HI,u,u,u)],w),A.F,u,A.e,A.Q,0,A.p),1),B.aF(u,u,u,u,D.bzA,u,u,u,new C.dxF(v),u,u,u,u,"Back to the whole body",A.c9)],w),A.F,u,A.e,A.j,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(D.TH,u,s,t,u,u,A.n),u,u,u,u,F.ad9,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.d6S.h(0,g)
i.avq()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.cRK
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,B.K)(v),++s){r=v[s]
if(i.auT(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=B.a([B.aF(h,h,h,h,D.ma,h,h,h,new C.dxU(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bF:B.CN(h,A.pB,q)}else q=A.kh
q=B.v(B.a([B.D(q,1),new B.C(D.bgF,i.bSu(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){o=D.cKo[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new C.dw(l,n,new C.dxV(i,o),o.c,A.bX,h))}p=B.a([new C.eH(p,h,h)],v)
if(!i.p1&&w.length!==0){n=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.K)(w),++s){k=w[s]
n.push(new C.dw(k,k===i.cx,new C.dxW(i,k),h,A.aK,h))}p.push(new C.eH(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(C.hr(A.cG,""+A.k.U(n)+" beats/min","Heart rate",180,40,new C.dxX(i),n))}if(i.ch>0&&t.a===0){n=B.a([],v)
for(j=0;j<5;++j)n.push(new C.E6(D.apk[j],i.CW===j,new C.dxY(i,j),!1,h))
p.push(new C.eH(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=B.a([new C.dw("Spin",n,new C.dxZ(i),D.agc,A.aY,h),new C.fd(A.jL,"Reset view",new C.dy_(i),A.c,h),new C.dw(l,m,new C.dy0(i),A.EU,A.aK,h)],v)
if(t.t(0,"organ"))v.push(new C.dw("Heartbeat sound",i.k4,new C.dy1(i),A.nA,A.cG,h))
p.push(new C.eH(v,h,h))
return C.jx(A.bX,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.v(p,A.m,h,A.e,A.Q,0,A.p))}}
C.aIl.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.aIm.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
w=this.fc$
w===$&&B.c()
w.q()
this.bpq()}}
C.bX0.prototype={
k9(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aJ(e,"</script","<\\/script")
v=$.h1L
$.h1L=v+1
u="ngmy-body-viewer-"+v
$.xT()
$.pL().p8(u,new C.bX1(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fD(v,"message",new C.bX2(t),!1,x.gA)
t.b=u},
eM(d,e){var w,v
try{w=this.c
if(w!=null){w=B.bvF(w.contentWindow)
if(w!=null)J.fzZ(w,e,"*")}}catch(v){}}}
C.xm.prototype={}
C.Bi.prototype={}
C.n0.prototype={}
C.b7v.prototype={}
C.SD.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new C.aA1(B.T(w,x.a2),B.a([],x.cB),B.T(w,v),B.T(w,v),B.T(w,u),A.at,A.J,A.J,B.b_(u),$,A.bw,0,B.a([],x.X),null,null)}}
C.aA1.prototype={
Z(){var w=this
w.a0()
w.kM()
w.a9U()
$.aT.x1$.push(new C.dAe(w))},
a9U(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$a9U=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ax(),$async$a9U)
case 6:q=e.rn("ngmy_circuit_passed_v1")
r=q==null?A.U:q
if(s.c!=null)s.n(new C.dzT(s,r))
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
return B.i($async$a9U,v)},
aad(d){return this.bW5(d)},
bW5(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$aad=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.K(0,d)
u=3
w=6
return B.b(B.ax(),$async$aad)
case 6:r=f
q=s.cx
p=B.a2(q).k("jC<cl.E,n>")
q=B.A(new B.jC(q,new C.dzW(),p),p.k("G.E"))
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
return B.i($async$aad,v)},
atD(d,e,f,g){var w="c"+this.y++,v=new C.Bi(w,e,f,g)
this.d.m(0,w,v)
return v},
m2(d,e,f){return this.atD(0,e,f,0)},
a9g(d,e){var w
if(D.xW.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ao(0,new B.u(-36,w))},
rO(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aOi(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fF$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dv(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ee(m,D.cvu[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.rO(p,0)&&n.rO(p,1)
break
case"or":p=q.a
o=n.rO(p,0)||n.rO(p,1)
break
case"xor":p=q.a
o=n.rO(p,0)!==n.rO(p,1)
break
case"nand":p=q.a
o=!(n.rO(p,0)&&n.rO(p,1))
break
case"nor":p=q.a
o=!(n.rO(p,0)||n.rO(p,1))
break
case"not":o=!n.rO(q.a,0)
break
default:o=n.rO(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.m(0,q,o)
r=!0}}if(!r)break}},
bHM(){return this.aOi(null)},
l4(d){var w,v,u,t,s,r,q,p,o,n=this
n.bHM()
if(!n.ax)return
for(w=n.d,w=new B.bg(w,B.a2(w).k("bg<2>")).gah(0),v=new B.hL(w,new C.dAf()),u=n.f,t=n.w,s=0;v.C();){r=w.gT(0).a
if(u.h(0,r)===!0){q=n.fF$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.m(0,r,n.fF$)
o=s+1
C.dG(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
atE(d){var w=this
w.d.a7(0)
A.d.a7(w.e)
w.f.a7(0)
w.r.a7(0)
w.cy=null},
lv(d,e){var w=this.x
return new B.u(d*w.a,e*w.b)},
aq4(d){var w=this
if(w.x.A(0,A.at)){$.aT.x1$.push(new C.dzR(w,d))
return}w.n(new C.dzS(w,d))},
cnS(d){this.n(new C.dzX(this,d,$.bAo()[d]))},
bZT(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bAo()[a0]
v=d.d
u=B.a2(v).k("bg<2>")
t=u.k("a3<G.E>")
s=t.k("G.E")
r=B.A(new B.a3(new B.bg(v,u),new C.dzM(),t),s)
A.d.b_(r,new C.dzN())
q=B.A(new B.a3(new B.bg(v,u),new C.dzO(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.n(new C.dzP(d,w))
return}u=d.r
p=B.dS(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dq(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.fQ(k,i)&1)===1)
for(i=0;i<v;++i)u.m(0,r[i].a,j[i])
d.aOi(0)
h=m.h(0,A.d.gL(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.jw(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aH(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a7(0)
u.v(0,p)
d.n(new C.dzQ(d,o,a0))},
aup(d){var w,v,u,t,s=this.d,r=B.a2(s).k("bg<2>")
s=B.A(new B.bg(s,r),r.k("G.E"))
r=B.U(s).k("dy<1>")
s=new B.dy(s,r)
s=new B.bU(s,s.gJ(0),r.k("bU<ai.E>"))
w=d.a
r=r.k("ai.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
c7g(d){var w,v,u,t,s,r=this.d,q=B.a2(r).k("bg<2>")
r=B.A(new B.bg(r,q),q.k("G.E"))
q=B.U(r).k("dy<1>")
r=new B.dy(r,q)
r=new B.bU(r,r.gJ(0),q.k("bU<ai.E>"))
w=d.a
v=d.b
q=q.k("ai.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bSn(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dv(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.xW.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.a9g(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.z(p,o)
s=l}}}return t},
bGK(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.a9g(p,o)
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
bZV(d){var w,v,u,t=this,s=t.aup(d)
if(s!=null){w=t.d.h(0,s)
w.toString
B.eJ()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.m(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
C.dG(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.n(new C.dzY())
return}u=t.bGK(d)
if(u!=null)t.n(new C.dzZ(t,u))
else t.n(new C.dA_(t))},
asC(d){return this.bVa(d)},
bVa(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$asC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.aup(d)
if(s==null){w=1
break}B.j8()
t.n(new C.dzV(t,s))
case 1:return B.h(u,v)}})
return B.i($async$asC,v)},
bu_(d){if(this.x.A(0,A.at))return
this.n(new C.dzL(this,d,A.cE))
B.eJ()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bAo()[g]
g=x.p
v=B.a([B.aF(h,h,h,h,B.W(i.ax?A.nA:M.qy,A.af,h,h,h,21),h,h,h,new C.dA8(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.m(16)
s=A.cC.j(0.14)
r=B.H(A.cC.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.eDy,h,h,h),B.d(w.b,h,h,h,h,h,h,D.eLm,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.C(A.mH,B.d(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.bg:A.fi,h,h,h,h,h,h,h,h,12,h,h,A.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.B(B.a([B.D(B.v(q,A.F,h,A.e,A.j,0,A.p),1),B.bL(D.f0T,i.gbZS(),B.bk(A.cC,h,h,h,h,h,h,h,h,h,h,A.c9))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,T.Ki,D.bhj,h,h,1/0))}u.push(B.D(B.ck(new C.dA9(i)),1))
if(f!=null){t=B.m(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.d(D.xW.h(0,r).a+": "+D.xW.h(0,r).e,h,h,h,h,h,h,A.vs,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,A0.acT,A.bU,h,h,1/0))}u=B.v(u,A.m,h,A.e,A.j,0,A.p)
t=B.a([],g)
for(s=D.xW.gdH(D.xW),s=s.gah(s);s.C();){r=s.gT(s)
q=new B.aY(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.aG(h,B.p(h,B.v(B.a([B.W(p.b,o,h,h,h,20),A.bB,new B.x(p.a,h,D.a4O,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.Q,0,A.p),A.f,h,h,new B.o(n,h,new B.c3(m,m,m,m),new B.bv(q,q,q,q),h,h,A.n),h,h,h,A.ho,P.Vv,h,h,58),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dAa(i,r),h,h,h,h,h,h,!1,A.ad))}s=B.a([],g)
for(l=0;l<4;++l){k=D.cVt[l]
s.push(new C.fd(A.LP,k.b,new C.dAb(i,k),A.cC,h))}s.push(new C.fd(D.x4,"Clear",new C.dAc(i),A.cG,h))
r=B.a([],g)
for(j=0;q=$.bAo(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.er:A.l2
o=i.ay
n=i.cx.t(0,j)?A.bg:A.cu
r.push(new C.dw(q.a,o===j,new C.dAd(i,j),p,n,h))}return C.jx(A.cC,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.v(B.a([new C.eH(t,"PARTS",h),new C.eH(s,"TRY",h),new C.eH(r,"TASKS",h)],g),A.m,h,A.e,A.Q,0,A.p))}}
C.b7N.prototype={
a4(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.V()
w=B.L()
w.r=D.a8u.gp(0)
a7.aW(new B.a7(0,0,0+a5,0+a6),w)
v=B.L()
v.r=A.c.j(0.05).gp(0)
for(w=a7.a,u=20;u<a6;u+=28)for(t=14;t<a5;t+=28){s=v.G()
w.drawCircle(t,u,1,s)
s.delete()}for(a5=this.b,a6=a5.e,r=a6.length,q=a5.f,p=x.v,o=a5.d,n=0;n<a6.length;a6.length===r||(0,B.K)(a6),++n){m=a6[n]
l=m.a
k=o.h(0,l)
j=o.h(0,m.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=a5.a9g(j,m.c)
f=q.h(0,l)===!0
l=$.V()
e=B.a([],p)
d=new B.aO(l.r,A.ao,a4,a4,e)
e.push(new B.b4(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new B.p9(h+a0,i,l-a0,a1,l,a1))
if(f){l=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
l.b=A.ae
l.c=9
l.r=A.cu.j(0.28).gp(0)
l.z=G.me
s=l.G()
l=d.gbL().a.snapshot()
w.drawPath((d.e=new B.cE(l)).a,s)
s.delete()}l=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
l.b=A.ae
l.c=3.2
l.d=A.bO
l.r=(f?A.dJ:A.bu).gp(0)
s=l.G()
l=d.e
w.drawPath((l==null?d.e=new B.cE(d.gbL().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ao(0,D.GH)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new B.aO($.V().r,A.ao,a4,a4,B.a([],p))
w=a3.b
p.D(new B.b4(a6,w))
r=g.b
p.D(new B.p9(a6+a0,w,a5-a0,r,a5,r))
r=B.L()
r.b=A.ae
r.c=3
r.r=A.af.gp(0)
a7.aL(p,r)}for(a5=new B.dv(o,o.r,o.e);a5.C();)this.bZU(a7,a5.d)},
bZU(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.xW.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.cr(a0.c,64,64)
s=B.bx(t,A.kP)
r=w.cy===v
q=s.eH(A.ct)
$.V()
p=B.L()
p.r=A.w.j(0.55).gp(0)
p.z=A.l9
d.aA(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.L()
p.sar(new B.bR(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.K],x.O),g,g).av(0,B.bS(a0.c,52)))
d.ae(q,52,p)}q=s.eH(A.cF)
p=B.L()
o=e.c
p.r=B.aq(o,A.w,0.65).gp(0)
d.aA(q,p)
n=u?0.35:0
q=B.L()
p=B.aq(o,A.c,0.1+n)
p.toString
m=B.aq(o,A.w,u?0.2:0.45)
m.toString
q.sar(new B.a5(A.b0,A.b3,A.x,B.a([p,m],x.O),g,g).av(0,t))
d.aA(s,q)
q=B.L()
q.b=A.ae
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aA(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?D.ahA:D.bty}else l=e.b
k=C.fFf(B.jw(l.a),30,A.c,l.b,g,A.I)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aE(0,new B.u(p/2,q.gbc(q)/2)))
j=C.fFf(e.a,10.5,A.c,g,g,A.I)
j.a4(d,a0.c.ao(0,new B.u(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.fFf(f,9,u?A.dJ:A.c1,g,g,A.u)
i.a4(d,a0.c.ao(0,new B.u(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aUt(d,w.a9g(a0,h),o)
this.aUt(d,a0.c.ao(0,D.GH),o)},
aUt(d,e,f){var w
$.V()
w=B.L()
w.r=D.a8u.gp(0)
d.ae(e,8.5,w)
w=B.L()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.ae(e,8.5,w)
w=B.L()
w.r=A.c.gp(0)
d.ae(e,3.2,w)},
ap(d){return!0}}
C.aIr.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.btp.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
w=this.fc$
w===$&&B.c()
w.q()
this.bpw()}}
C.LN.prototype={
S(){return new C.aAi(B.mf(0,null,null))}}
C.IX.prototype={
a3(){return"_UnfoldStyle."+this.b}}
C.zA.prototype={}
C.aAi.prototype={
bZZ(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gco(0).at
v.toString
w.f=v}w.n(new C.dFr(w,e))},
bU8(){var w=this
w.e.q()
w.e=B.mf(w.f,null,null)
w.n(new C.dFq(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return B.nY(t,B.ce(v,A.bW,t?new C.bnu(w.e,w.gbZY(w),new C.dFs(d),v):new C.aEs(u,new B.cw(u.b,x.gj)),v,!1,!1,v,!1),new C.dFt(w,u),x.K)}}
C.bp1.prototype={}
C.bnu.prototype={
aUu(d,e){var w=null
return new B.C(F.VZ,B.v(B.a([B.d(d,w,w,w,w,w,w,D.eE4,w,w,w),A.bB,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=B.B(B.a([B.aF(v,v,v,v,E.qA,v,v,v,w.e,v,v,v,v,v,v),A.r_,D.bn4],u),A.m,v,A.e,A.j,0,v,v),s=w.aUu("STUDIOS","Play, make things, and keep what you make")
$.bAp()
return B.bp(!0,B.v(B.a([new B.C(D.bmd,t,v),B.D(B.uW(0,v,A.q,w.c,A.z,v,v,v,v,v,!1,v,A.ak,!1,B.a([new B.lR(s,v),new B.ns(A.it,B.Nl(new B.o0(new C.eJ9(d),22,!0,!0,!0,0,B.rm(),v),D.aJ5),v),new B.lR(w.aUu("SCENES","Each one is a studio too: change the style, colours and words"),v),new B.ns(D.bhq,B.Nl(new B.o0(new C.eJa(w),6,!0,!0,!0,0,B.rm(),v),D.aJ5),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0)}}
C.acH.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=B.m(20),n=B.m(20),m=B.aq(D.rG,p,0.3)
m.toString
w=x.O
m=B.a([m,D.aaH],w)
v=B.H(p.j(0.6),A.r,1.2)
u=x.V
t=B.a([new B.ab(-4,A.G,p.j(0.22),A.J,14)],u)
s=B.aq(p,A.w,0.45)
s.toString
w=B.a([p,s],w)
u=B.a([new B.ab(0,A.G,p.j(0.5),A.J,12)],u)
return B.aD(!1,A.a1,!0,r,B.aI(!1,o,!0,B.et(B.v(B.a([B.p(r,B.W(q.c,A.c,r,r,r,24),A.f,r,r,new B.o(r,r,r,r,u,new B.a5(A.ax,A.aC,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.P,B.d(q.a,r,2,A.a2,r,r,r,B.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.d6,B.d(q.b,r,2,A.a2,r,r,r,B.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.b7,A.j,0,A.p),r,new B.o(r,r,v,n,t,new B.a5(A.ax,A.aC,A.x,m,r,r),A.n),r,A.Ec,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ac)}}
C.abB.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=B.m(20),g=B.m(20),f=B.aq(D.rG,A.d.gL(i),0.24)
f.toString
w=x.O
f=B.a([f,D.aaH],w)
v=B.H(A.d.gL(i).j(0.35),A.r,1)
u=x.V
t=B.a([new B.ab(0,A.G,A.w.j(0.4),A.ct,12)],u)
s=x.p
r=B.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new B.aY(6,6)
m=B.a([A.d.gL(i),A.d.gaj(i)],w)
l=B.a([new B.ab(0,A.G,A.w.j(0.45),F.aBZ,0)],u)
r.push(B.p(k,B.W(q[p],A.c,k,k,k,11),A.f,k,k,new B.o(k,k,k,new B.bv(n,n,n,n),l,new B.a5(A.a3,A.a7,A.x,m,k,k),A.n),k,17,k,new B.N(p*4,0,(2-p)*4,o),k,k,k,k))}w=B.v(r,A.m,k,A.e,A.Q,0,A.p)
u=B.aq(A.d.gL(i),A.d.gaj(i),0.4)
u.toString
return B.aD(!1,A.a1,!0,k,B.aI(!1,h,!0,B.et(B.v(B.a([new B.a4(58,k,w,k),A.T,B.d(j.b,k,2,A.a2,k,k,k,B.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.av,B.W(A3.F1,A.d.gL(i),k,k,k,18)],s),A.m,k,A.b7,A.j,0,A.p),k,new B.o(k,k,v,g,t,new B.a5(A.ax,A.aC,A.x,f,k,k),A.n),k,A.Ec,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ac)}}
C.Or.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.aq(A.d.gaj(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.an(-8,B.bV(j,new B.o(h,j,j,B.m(22),j,j,A.n),A.bb),j,j,2,2,8,j)
u=B.m(22)
t=k.y
s=x.V
r=B.a([new B.ab(0,A.G,A.w.j(0.55),A.PS,26),new B.ab(-6,A.G,A.d.gL(i).j(0.1+0.4*t),A.J,30)],s)
q=B.m(22)
p=B.aq(A.d.gL(i),A.c,0.14)
p.toString
o=A.d.gL(i)
n=A.d.gaj(i)
i=B.aq(A.d.gaj(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bX(0,B.bV(j,new B.o(j,j,j,j,j,new B.a5(A.ax,A.aC,A.x,B.a([p,o,n,i],m),D.d_7,j),A.n),A.bb),0,0,0),B.an(j,B.bV(j,new B.o(j,j,j,j,j,new B.a5(A.b0,A.b3,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bb),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bX(0,B.b2(j,j,j,new C.bos(i,j),A.at),0,0,0))
i=A.c.j(0.16)
p=B.H(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ab(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=B.p(j,B.W(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.eFy,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,B.a([A.av,B.d(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a4,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.QX)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.C(A.fB,B.B(B.a([s,A.ex,B.D(B.v(p,A.F,j,A.e,A.Q,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(B.bX(0,B.e1(B.ee(j,A.w.j(A.k.E(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=B.m(22)
m.push(B.bX(0,B.e1(B.bV(j,new B.o(j,j,B.H(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bb),!0,j),0,0,0))
return new B.a4(w,v,new B.am(A.W,j,A.a9,A.f,B.a([h,B.bX(0,B.bV(B.bt(q,new B.am(A.W,j,A.a9,A.q,m,j),A.ap),new B.o(j,j,j,u,r,j,A.n),A.bb),0,0,0)],l),j),j)}}
C.bos.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a7(r,-10,s,w)
u=d.a
J.by(u.save())
u.translate(v.gbO().a,v.gbO().b)
d.iU(0,0.35)
t=B.cr(A.J,(w- -10)*1.6,s-r)
$.V()
s=B.L()
s.sar(new B.a5(A.a3,A.a7,A.x,B.a([A.K,A.c.j(0.3),A.K],x.O),null,null).av(0,t))
d.aW(t,s)
u.restore()},
ap(d){return d.b!==this.b}}
C.bnY.prototype={
B(d){var w=null,v=B.m(22),u=B.a([D.b6C,D.aa3],x.O),t=this.e,s=B.H(A.d.gL(t).j(0.4),A.r,1.2),r=B.a([new B.ab(0,A.G,A.w.j(0.5),A.jP,24)],x.V),q=B.m(22),p=A.d.gL(t)
return new B.a4(this.c,this.d,B.bV(B.bt(q,B.b2(B.au(B.W(A.j6,A.d.gL(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.b6u(p,w),A.at),A.ap),new B.o(w,w,s,v,r,new B.a5(A.ax,A.aC,A.x,u,w,w),A.n),A.bb),w)}}
C.b6u.prototype={
a4(d,e){var w,v,u,t,s,r,q,p
$.V()
w=B.L()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.G()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.G()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.e9(A.J)
$.V()
t=B.L()
t.b=A.ae
t.c=1.4
t.r=v.j(0.35).gp(0)
d.ae(u,30,t)},
ap(d){return!1}}
C.aEs.prototype={
S(){return new C.aEt(new B.co(null,x.A),null,null)}}
C.aEt.prototype={
gt8(){var w,v=this,u=v.d
if(u===$){w=B.bi(null,D.beL,null,1,null,v)
w.cE(0)
v.d!==$&&B.bK()
v.d=w
u=w}return u},
gXs(){var w,v=this,u=v.e
if(u===$){w=B.bi(null,A.fK,null,1,null,v)
w.f2(0,!0)
v.e!==$&&B.bK()
v.e=w
u=w}return u},
gatF(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gbZW(){var w=this.w
if(w===$){w=B.A(this.a.c.d,x.G)
this.w=w}return w},
gaRm(){var w=this.x
if(w===$){w=B.A(this.a.c.e,x.Z)
this.x=w}return w},
gaS0(){var w=this.y
if(w===$){w=B.A(this.a.c.f,x.N)
this.y=w}return w},
gb1P(){var w=this.z
if(w===$){w=B.A(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a0()
var w=this.gt8()
w.d5()
w.dM$.K(0,this.gcnD())},
cnE(){var w,v,u,t,s,r,q,p=this,o=p.gt8().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gatF().a){case 0:w=D.mT
break
case 1:w=D.tl
break
case 2:w=D.a_c
break
case 3:w=D.mT
break
case 4:w=D.cOY
break
case 5:w=D.tl
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a6h)r=0.09
else r=s===D.a6i?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){C.dG(260+90*v,"",260,1.6,0.18,"tri")
u=D.bKZ[v]
C.l2("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.AI("bell",D.bTI,1400,0.35)}}p.ax=o},
q(){this.gt8().q()
this.gXs().q()
this.brk()},
adw(){var w=this
w.gt8().cLJ(0,B.dB(0,0,0,A.k.U(11e3/w.Q),0,0))
w.n(new C.eIQ(w))},
c9f(){this.gt8().bV(0)
this.n(new C.eIP(this))},
ab7(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$ab7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaS0(),s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
l.push(new B.ar(new B.bc(q,A.b2,A.aM),$.av()))}m=B.a([],m)
for(t=u.gb1P(),s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){p=t[r]
m.push(new B.ar(new B.bc(p,A.b2,A.aM),$.av()))}o=B.A(u.gaRm(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.c1(D.rG,null,new C.eIO(u,l,m,o),t,!0,!0,!0,A.lb,!1,!1,x.H),$async$ab7)
case 2:l=B.A(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.R$=$.av()
n.O$=0}return B.h(null,v)}})
return B.i($async$ab7,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gatF(),f=i.a.c,e=f.b,d=i.gbZW(),a0=new C.zA(g,e,f.c,d,i.gaRm(),i.gaS0(),i.gb1P())
f=B.aq(A.d.gL(d),A.d.gaj(d),0.4)
f.toString
g=x.p
w=B.a([B.aF(h,h,h,h,B.W(i.at?A.nA:M.qy,A.af,h,h,h,21),h,h,h,new C.eIY(i),h,h,h,h,"Sound",h),B.aF(h,h,h,h,D.bCY,h,h,h,i.gbZX(),h,h,h,h,"Edit words and pictures",h),B.aF(h,h,h,h,D.ma,h,h,h,new C.eIZ(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c4(i.gXs(),new C.eJ_(i,a0),h),B.ck(new C.eJ0(i,a0))],g)
u=i.as
t=u?i.gc9e():i.gcbw()
u=u?D.bsN:A.tb
s=B.aq(A.d.gL(d),A.d.gaj(d),0.4)
s.toString
t=B.B(B.a([B.aF(h,h,h,h,B.W(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.c9),B.D(B.c4(i.gt8(),new C.eJ1(i,a1,a0),h),1),B.aF(h,h,h,h,D.bzq,h,h,h,new C.eJ2(i),h,h,h,h,"Replay",A.c9)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.aa(s,1)
r=B.aq(A.d.gL(d),A.d.gaj(d),0.4)
r.toString
s=C.hr(r,u+"x","Speed",2.5,0.4,new C.eJ3(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.cXC[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.aq(A.d.gL(d),A.d.gaj(d),0.4)
r.toString
u.push(new C.dw(p.b,o===p.a,new C.eJ4(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bLj[q]
o=i.w
if(o===$){o=B.A(i.a.c.d,r)
i.w=o}m=A.d.gL(o).A(0,A.d.gL(n))?34:28
o=i.w
if(o===$){o=B.A(i.a.c.d,r)
i.w=o}l=A.d.gL(o).A(0,A.d.gL(n))?34:28
o=i.w
if(o===$){o=B.A(i.a.c.d,r)
i.w=o}k=A.d.gL(o).A(0,A.d.gL(n))?A.c:A.ba
o=i.w
if(o===$){o=B.A(i.a.c.d,r)
i.w=o}j=new B.ay(k,A.d.gL(o).A(0,A.d.gL(n))?2.5:1,A.r,-1)
d.push(B.aG(h,B.p(h,h,A.f,h,h,new B.o(h,h,new B.c3(j,j,j,j),h,h,new B.a5(A.ax,A.aC,A.x,n,h,h),A.a6),h,l,h,D.acG,h,h,h,m),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eJ5(i,n),h,h,h,h,h,h,!1,A.ad))}return C.jx(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.eq(new B.am(A.W,h,A.aZ,A.q,v,h),i.f),e,B.v(B.a([t,s,new C.eH(u,"STYLE",h),new C.eH(d,"THEME",h)],g),A.m,h,A.e,A.Q,0,A.p))},
btd(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.mT[r]
p=A.k.E((1-A.ep.au(0,A.k.E((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.E(p/1.5707963267948966,0,1)
q=D.mT[r]
n=q+0.12
m=A.k.E((a0-n)/(q+0.2-n),0,1)
n=D.mT[r]
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
i=D.mT[r]
h=i+0.1
if(A.k.E((a0-h)/(i+0.3-h),0,1)>0){i=D.mT[r]
h=i+0.1
h=A.k.E((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.mT[r]
h=i+0.1
h=A.k.E((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cH(0,r*118,0,f,f,f,new B.kI(q,new B.iy(n,f,A.b0,!0,f,new C.Or(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.mT[r]
u=v-0.02
g=A.k.E((a0-u)/(v+0.1-u),0,1)
u=A.d.gL(w)
v=D.mT[r]
t=v+0.12
e.push(new B.cH(0,r*118-3-2,0,f,f,4,new B.lZ(new C.bn8(u,g,1-A.k.E((a0-t)/(v+0.22-t),0,1),f),f,A.at,f,f),f))}return new B.a4(a2,358,new B.am(A.W,f,A.a9,A.f,e,f),f)},
bJ9(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.tl[r]
p=A.p2.au(0,A.k.E((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.tl[r]
m=q+0.15
l=A.k.E((a0-m)/(q+0.25-m),0,1)
m=D.tl[r]
q=m-0.03
q=A.k.E((a0-q)/(m+0.01-q),0,1)
m=B.di()
k=m.a
k.$flags&2&&B.ah(k)
k[11]=0.0011
m.ji(n,n,n,1)
m.fm(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.Or(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.di()
k.fm(3.141592653589793)
k=new B.iy(k,f,A.A,!0,f,new C.bnY(a2,108,w,f),f)}e.push(new B.cH(0,r*130,0,f,f,f,new B.kI(q,new B.iy(m,f,A.A,!0,f,k,f),f),f))}return new B.a4(a2,378,new B.am(A.W,f,A.a9,A.f,e,f),f)},
csm(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a_c[w]
l.push(A.cp.au(0,A.k.E((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bX(0,B.b2(n,n,n,new C.bqv(d.d,l,D.aqY,m,C.bnt(e,0.4,0.62),f,C.bnt(e,0.45,0.7),n),A.at),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.fFL(g,w)
q=D.aqY[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cH(r,s-q*m*p+12,n,n,t,n,new B.kI(o,B.W(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.fFL(g,w)
r=D.a_c[w]
q=r+0.15
v.push(new B.cH(s,l,n,n,t,n,new B.kI(A.k.E((e-q)/(r+0.25-q),0,1),new B.x(u[w],n,A.a4W,n,A.L,n,n,n,n,n,n,n),n),n))}return new B.a4(g,m+90,new B.am(A.W,n,A.a9,A.f,v,n),n)},
bzc(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cp.au(0,C.bnt(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bX(0,B.au(B.dP(B.b2(f,f,f,new C.bmB(A.d.gL(a1),C.bnt(a3,0,0.2),a4,f),new B.as(a5*0.95,70)),D.dM0),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.E((a3-l)/(0.12+m-l),0,1)
j=A.dH.au(0,A.k.E((o-0.7)/0.3,0,1))
l=B.di()
m=l.a
m.$flags&2&&B.ah(m)
m[11]=0.001
l.fm(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.ji(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.F(r,1):-1
w.push(new B.z(o,new B.cH(0,0,0,0,f,f,new B.cy(A.A,f,f,new B.kI(k*(0.45+0.55*o),B.dP(new B.iy(l,f,A.A,!0,f,new C.Or(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.u(n*a5*0.34,-o*18)),f),f),f)))}A.d.b_(w,new C.eIH())
A.d.v(a0,new B.J(w,new C.eII(),x.fR))
return new B.a4(a5,330,new B.am(A.W,f,A.a9,A.f,a0,f),f)},
byq(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.tl[q]
o=A.k.E((a2-p)/(p+0.22-p),0,1)
n=A.lM.au(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.tl[q]
m=A.k.E((a2-m)/(m+0.02-m),0,1)
l=D.asN[q]
k=B.di()
k.mf(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.ji(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.tl[q]
g=h+0.1
g=A.k.E((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cH(0,0,0,0,e,e,new B.cy(A.A,e,e,new B.kI(m,B.dP(new B.iy(k,e,A.A,!0,e,new C.Or(d,92,w,p,j,i,0,g*s,h,e),e),new B.u(0,l)),e),e),e))
l=D.tl[q]
h=l+0.02
f=A.k.E((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cH(0,0,0,0,e,e,new B.cy(A.A,e,e,B.dP(new B.lZ(new C.b79(w,f,q,e),e,new B.as(r,212),e,e),new B.u(0,D.asN[q])),e),e))}return new B.a4(a4,330,new B.am(A.W,e,A.a9,A.f,a0,e),e)},
bw5(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.u(-b0,-150),new B.u(b0,-40),D.dM4],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.mT[r]
p=A.k.E((a8-q)/(q+0.2-q),0,1)
o=A.cp.au(0,p)
q=D.asS[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.mT[r]
f=g+0.2
e=A.k.E((a8-f)/(g+0.3-f),0,1)
f=D.mT[r]
g=f-0.01
g=A.k.E((a8-g)/(f+0.03-g),0,1)
f=B.di()
d=f.a
d.$flags&2&&B.ah(d)
d[11]=0.001
f.mf(l*h+D.cSz[r]*o)
f.fm(l*0.9)
h=0.55+0.45*o
f.ji(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cH(0,0,0,0,a3,a3,new B.cy(A.A,a3,a3,new B.kI(g,B.dP(new B.iy(f,a3,A.A,!0,a3,new C.Or(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.u(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.mT[r]
i=q+0.17
a2=A.k.E((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.asS[r]
a6.push(new B.cH(0,0,0,0,a3,a3,new B.cy(A.A,a3,a3,B.dP(new B.lZ(new C.bmD(A.d.gL(w),a2,a3),a3,new B.as(a4,30),a3,a3),new B.u(0,q+48-4)),a3),a3))}}return new B.a4(b0,330,new B.am(A.W,a3,A.a9,A.f,a6,a3),a3)}}
C.bn8.prototype={
a4(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a7(w-v,0,w+v,e.b)
q=B.bx(u,A.h4)
$.V()
t=B.L()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=G.me
d.aA(q,t)
t=B.bx(u,A.h4)
q=B.L()
q.r=A.c.j(s).gp(0)
d.aA(t,q)},
ap(d){return d.c!==this.c||d.d!==this.d}}
C.bmB.prototype={
a4(d,e){var w,v,u=this.c,t=B.cr(e.e9(A.J),e.b*u,e.a*u)
$.V()
u=B.L()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=R.Ga
d.hU(t,u)
u=B.L()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.hU(t,u)
u=t.cD(-14)
v=B.L()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.hU(u,v)},
ap(d){return!0}}
C.b79.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.e9(A.J),f=this.c,e=A.cp.au(0,f)
$.V()
w=B.L()
w.b=A.ae
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gL(u).j(0.6*v).gp(0)
d.ae(g,40+e*a0.a*0.42,w)
t=new B.f3()
t.dU(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.af()*3.141592653589793*2
n=(40+t.af()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.af()
j=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
i=(p&1)===0?A.d.gL(u):A.c
j.r=i.j(A.k.E(v,0,1)).gp(0)
h=j.G()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
ap(d){return!0}}
C.bmD.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.e9(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.E(s-r*0.18,0,1)
if(q<=0)continue
p=B.cr(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.V()
o=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
o.b=A.ae
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.G()
t.drawOval(B.c2(p),n)
n.delete()}},
ap(d){return d.c!==this.c}}
C.bqv.prototype={
a4(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new B.a7(0,d0,0+c5,d0+60)
$.V()
d0=B.L()
w=c1.b
v=x.O
d0.sar(new B.a5(A.b0,A.b3,A.x,B.a([A.d.gL(w).j(0.18),A.K],v),c2,c2).av(0,d1))
d2.aW(d1,d0)
d0=B.L()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bw(new B.u(0,c4),new B.u(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=C.fFL(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.V()
a3=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.l9
a4=a3.G()
t.drawOval(B.c2(new B.a7(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new B.a7(d,a1,a3,a1+a0)
a6=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
a7=B.aq(A.d.gL(w),A.c,0.1)
a7.toString
a6.sar(new B.a5(A.b0,A.b3,A.x,B.a([a7,A.d.gaj(w)],v),c2,c2).av(0,a5))
a4=a6.G()
t.drawRect(B.c2(a5),a4)
a4.delete()
a2=a2.r
a6=B.a([],n)
a8=new B.aO(a2,A.ao,c2,c2,a6)
a6.push(new B.b4(a3,a1))
a7=a3+c8
a9=a1+c9
a6.push(new B.ao(a7,a9))
a6.push(new B.ao(a7,m))
a6.push(new B.ao(a3,c4))
a6.push(new B.bD())
a6=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
a6.r=B.aq(A.d.gaj(w),A.w,0.5).gp(0)
a4=a6.G()
a6=a8.gbL().a.snapshot()
t.drawPath((a8.e=new B.cE(a6)).a,a4)
a4.delete()
a6=B.a([],n)
b0=new B.aO(a2,A.ao,c2,c2,a6)
a6.push(new B.b4(d,a1))
a6.push(new B.ao(d+c8,a9))
a6.push(new B.ao(a7,a9))
a6.push(new B.ao(a3,a1))
a6.push(new B.bD())
a2=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
a2.r=B.aq(A.d.gL(w),A.c,0.45).gp(0)
a4=a2.G()
a2=b0.gbL().a.snapshot()
t.drawPath((b0.e=new B.cE(a2)).a,a4)
a4.delete()
b1=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
b1.b=A.ae
b1.c=1
b1.r=A.c.j(0.28).gp(0)
a4=b1.G()
t.drawRect(B.c2(a5),a4)
a4.delete()
a4=b1.G()
a2=a8.e
t.drawPath((a2==null?a8.e=new B.cE(a8.gbL().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.G()
a2=b0.e
t.drawPath((a2==null?b0.e=new B.cE(b0.gbL().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.by(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=B.bx(new B.a7(b7,a7,b7+r,b5),A.h4)
$.V()
b9=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.G()
t.drawRRect(B.ex(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new B.a7(d,a1,a3,a1+28)
J.by(t.save())
t.clipRect(B.c2(a5),$.ro()[1],!0)
$.V()
a1=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
a1.sar(new B.a5(A.b0,A.b3,A.x,B.a([A.K,A.c.j(0.4),A.K],v),c2,c2).av(0,c0))
a4=a1.G()
t.drawRect(B.c2(c0),a4)
a4.delete()
t.restore()}}},
ap(d){return!0}}
C.aK7.prototype={
aP(){this.aX()
this.aV()
this.dD()},
q(){var w=this,v=w.b0$
if(v!=null)v.a1(0,w.gdB())
w.b0$=null
w.a2()}}
C.Zq.prototype={
a3(){return"_Role."+this.b}}
C.pA.prototype={}
C.qg.prototype={}
C.Bm.prototype={}
C.Xp.prototype={}
C.acx.prototype={}
C.ZD.prototype={
gX(d){return this.d}}
C.Bw.prototype={}
C.a9u.prototype={}
C.a9L.prototype={}
C.abF.prototype={}
C.bdy.prototype={
a0p(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
C.dG(d,"",e,g,h,f)},
b2N(d,e,f){return this.a0p(d,e,f,0,0.55)},
ay3(d,e,f,g){return this.a0p(d,e,f,0,g)},
b2O(d,e,f,g){return this.a0p(d,e,f,g,0.55)},
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
ah4(d,e,f,g){var w="n"+this.ay++,v=new C.qg(w,e,f,g)
this.a.m(0,w,v)
this.b2()
return v},
A4(d,e,f){return this.ah4(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bm(w.b,new C.da_(e))
A.d.bm(w.c,new C.da0(e))
w.b2()},
b6x(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.md.h(0,v.b).c===D.vK)return!1
w=this.b
if(A.d.ba(w,new C.d9X(d,e)))return!1
w.push(new C.Bm(d,e))
this.b2()
return!0},
bT7(d){var w
if(d.b==="beat")return D.bTR[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.aC(500)
case 2:return 1400+w.aC(2200)
default:return 450+w.aC(2000)}},
aBo(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.m(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.m(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.at5[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.Bw(u,t,j.ax,90))
w.push(new C.Bw(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.af()*3.141592653589793*2
v.push(new C.ZD(u,new B.u(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b2N(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.af()*3.141592653589793*2
p=100+w.af()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.aq(t,A.c,w.af()*0.5)
m.toString
v.push(new C.ZD(u,new B.u(o*p,n*p),m,3+w.af()*4.5,1000+w.aC(700),j.ax))}j.f.push(new C.Bw(u,t,j.ax,120))
j.ay3(120,200,"noise",0.5)
j.b2N(261.63*Math.pow(2,([7,12,16,19][w.aC(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.Bw(u,t,j.ax,230))
w.push(new C.Bw(u,t,j.ax+160,160))
w.push(new C.Bw(u,t,j.ax+320,100))
j.b2O(180+j.at.aC(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.a9u(u,new B.u((w.af()-0.5)*220,-260-w.af()*180),t,j.ax))
j.b2O(300+w.aC(300),110,h,0.8)
break
case"comet":w=j.at
q=w.af()*3.141592653589793*2
j.w.push(new C.a9L(u,u.ao(0,new B.u(Math.cos(q),Math.sin(q)).aO(0,260+w.af()*200)),t,j.ax))
j.a0p(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fW()
j.a0p(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.abF(u,D.asA[v],t,j.ax))
j.ay3(261.63*Math.pow(2,([0,5,9,12][j.at.aC(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.ay3(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.bPY[A.o.F(w,3)]
for(k=1;k<=3;++k)j.ciV(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gah(j.b),v=new B.hL(w,new C.d9Y(d));v.C();)j.awE(w.gT(0),j.ax+D.c1a[A.o.F(g.d,4)])
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
case"chance":s=j.at.aC(100)<D.chU[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gah(j.b),v=new B.hL(w,new C.d9Z(d));v.C();)j.awE(w.gT(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.yi(w,0,v-700)},
ciV(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.Xp(e,"~"+d))},
awE(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.acx(d.a,v,e,w))
u.push(new C.Xp(w,v))},
cMm(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a2(w).k("bg<2>")
w=B.A(new B.bg(w,v),v.k("G.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.m(0,r,o.ax+300)
else if(o.ax>=q){o.aBo(r)
u.m(0,r,o.ax+o.bT7(s))}}w=o.c
v=B.U(w).k("a3<1>")
q=B.A(new B.a3(w,new C.da1(o),v),v.k("G.E"))
if(q.length!==0){A.d.bm(w,new C.da2(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.K)(q),++t){u=q[t].b
if(A.a.a_(u,"~")){p=A.a.aY(u,1)
for(u=A.d.gah(v),r=new B.hL(u,new C.da3(p));r.C();)o.awE(u.gT(0),o.ax)}else o.aBo(u)}}A.d.bm(o.d,new C.da4(o))
A.d.bm(o.e,new C.da5(o))
A.d.bm(o.f,new C.da6(o))
A.d.bm(o.w,new C.da7(o))
A.d.bm(o.x,new C.da8(o))
A.d.bm(o.r,new C.da9(o))
o.b2()},
a5l(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
m=B.a([],x.D)
for(v=this.a,v=new B.dv(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.E(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.K)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.R.am(B.E(["nodes",m,"edges",v],u,x.ew),null)},
cDI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.a.a(A.R.aF(0,d,null))
k.a7(0)
for(o=x.j,n=J.aU(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gT(n)
u=B.t(J.q(v,"k"))
if(!D.md.ak(0,u))continue
t=B.t(J.q(v,"id"))
m.m(0,t,new C.qg(t,u,new B.u(B.f4(J.q(v,"x"))*k.cy.a,B.f4(J.q(v,"y"))*k.cy.b),A.k.N(B.f4(J.q(v,"p")))))
s=B.c5(B.aJ(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aU(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gT(o)
q=B.t(J.q(r,0))
p=B.t(J.q(r,1))
if(m.ak(0,q)&&m.ak(0,p))n.push(new C.Bm(q,p))}k.b2()
return!0}catch(l){return!1}},
cGF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a7(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.m(0,n,new C.qg(n,r,new B.u(q*p.a,o*p.b),s))
l.b2()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.b6x(w[m.a],w[m.b])}},
gX(d){return this.cy}}
C.ED.prototype={}
C.U5.prototype={
S(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aBw(new C.bdy(B.T(w,x.f3),v,u,t,s,r,q,p,o,B.T(w,n),B.T(w,n),B.T(w,n),B.T(w,n),A.cE,A.K,A.at,$.av()),A.bw,A.J,A.J,A.U,null,null)}}
C.aBw.prototype={
a9N(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$a9N=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.ax(),$async$a9N)
case 6:q=n.k5(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.n(new C.eam(s))
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
return B.i($async$a9N,v)},
a6R(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$a6R=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.n(new C.eab(s))
u=3
w=6
return B.b(B.ax(),$async$a6R)
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
return B.i($async$a6R,v)},
bF5(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a2(n).k("bg<2>")
v=""+n.a+"|"+o.length+"|"+new B.bg(n,w).cG(0,0,new C.ead())+"|"+A.d.cG(o,0,new C.eae())
if(v===p.ch)return p.CW
u=new C.eah()
t=x.s
s=B.a([],t)
r=new C.eai(p,s,u)
for(n=new B.bg(n,w).gah(0),w=new B.hL(n,new C.eaf());w.C();){q=n.gT(0)
if(!A.d.ba(o,new C.eag(q)))s.push(B.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.dc(s,0,B.dH(5,"count",x.S),x.N).dA(0)},
Z(){var w,v=this
v.a0()
v.a9N()
v.d.db=v.ay
w=v.qR(new C.eaM(v))
w.ko(0)
v.e!==$&&B.aQ()
v.e=w},
q(){var w=this,v=w.as
if(v!=null)v.a9(0)
v=w.e
v===$&&B.c()
v.q()
v=w.d
v.R$=$.av()
v.O$=0
w.bqo()},
a9k(d){return this.bSA(d)},
bSA(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$a9k=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.ax(),$async$a9k)
case 6:q=m.aS(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cDI(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aSq(A.d.gL(D.as7))
if(s.c!=null)s.n(new C.eal())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a9k,v)},
aSq(d){this.d.cGF(0,d.c,d.d)
this.D0()},
D0(){var w=this.as
if(w!=null)w.a9(0)
this.as=B.cP(A.lr,new C.ea7(this))},
atG(d){var w,v,u,t,s=this.d.a,r=B.a2(s).k("bg<2>")
s=B.A(new B.bg(s,r),r.k("G.E"))
r=B.U(s).k("dy<1>")
s=new B.dy(s,r)
s=new B.bU(s,s.gJ(0),r.k("bU<ai.E>"))
w=d.a
r=r.k("ai.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
c7h(d){var w,v,u,t,s,r=this.d.a,q=B.a2(r).k("bg<2>")
r=B.A(new B.bg(r,q),q.k("G.E"))
q=B.U(r).k("dy<1>")
r=new B.dy(r,q)
r=new B.bU(r,r.gJ(0),q.k("bU<ai.E>"))
w=d.a
v=d.b
q=q.k("ai.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bSo(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dv(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.md.h(0,r.b).c===D.vK)continue
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
c_1(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.h1M(new B.u(n.a+36,n.b+0),new B.u(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cqe(d){var w,v,u,t,s,r,q=this,p=q.atG(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.eJ()
u=v.b
if(u==="button"){w.aBo(p)
return}if(q.r)return
t=D.md.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.pU)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b2()
q.D0()
return}if(q.r)return
r=q.c_1(d)
if(r!=null){w=q.d
A.d.cu(w.b,r)
w.b2()
q.D0()}},
c8x(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.c7h(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.atG(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aE(0,d)}},
c8y(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b2()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.u(A.k.E(d.a+s.y.a,46,t.a-46),A.k.E(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b2()}}},
aX8(){var w,v,u=this
if(u.z!=null){w=u.bSo(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.b6x(v,w)}else v=!1
if(v){B.jE()
u.D0()}u.z=null
u.d.b2()}else if(u.x!=null){if(u.at)u.D0()
u.x=null}},
aa_(d){return this.bVb(d)},
bVb(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$aa_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.atG(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.j8()
p=t.c
p.toString
w=3
return B.b(B.c1(D.rG,null,new C.eao(q),p,!0,!0,!1,A.lb,!1,!1,x.y),$async$aa_)
case 3:if(f===!0){r.W(0,s)
t.D0()}case 1:return B.h(u,v)}})
return B.i($async$aa_,v)},
c__(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.A4(0,d,new B.u(v.a*(0.25+u.af()*0.5),v.b*(0.2+u.af()*0.55)))
B.eJ()
this.D0()},
adE(){var w=0,v=B.j(x.H),u=this,t,s
var $async$adE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.c1(D.rG,null,new C.eaq(),s,!0,!0,!0,A.lb,!1,!1,x.es),$async$adE)
case 2:t=e
if(t!=null)u.aSq(t)
return B.h(null,v)}})
return B.i($async$adE,v)},
ab8(d){var w=0,v=B.j(x.H),u=this,t
var $async$ab8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ch(null,null,!0,null,new C.eaa(),t,null,!0,!0,x.y),$async$ab8)
case 2:if(f===!0){u.d.a7(0)
u.D0()}return B.h(null,v)}})
return B.i($async$ab8,v)},
B(d){var w=this,v=null,u=B.a([B.afO(w.r?new B.bI(A.a3,v,v,new B.C(A.Ee,B.hi(D.bxt,D.eVl,new C.eaK(w),v),v),v):w.c_2(),A.b9,A.ip),B.D(B.ck(new C.eaL(w)),1)],x.p)
if(!w.r)u.push(w.cli())
return B.ce(v,A.bW,B.bp(!0,B.v(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bAR(){var w=null,v=new C.eac(),u=A.w.j(0.7),t=B.m(26),s=B.H(A.bs.j(0.5),A.r,1)
return B.bX(0,B.ee(B.au(B.p(w,B.ci(B.v(B.a([D.f4D,A.av,D.fbv,A.ay,v.$4(A.oj,A.bs,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(U.F_,A.cC,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.l1,A.bX,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(D.bre,A.cu,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.faS,new B.bI(A.a7,w,w,B.bJ(!1,D.f1Y,w,w,!0,w,w,this.gbAK(),w,w),w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.q,w,A.z,w,w,w,w,A.ak),A.f,w,A.T4,new B.o(D.rG,w,s,t,w,w,A.n),w,w,w,A.fC,A0.adS,w,w,w),w,w,w),u,!0),0,0,0)},
c_2(){var w=this,v=null,u=B.aF(v,v,v,v,E.qA,v,v,v,new C.eaw(w),v,v,v,v,v,v),t=w.a6j(A.LG,"How it works",new C.eax(w),!0),s=w.ay?A.nA:M.qy
return new B.C(D.blt,B.B(B.a([u,D.bmT,t,w.a6j(s,"Sound",new C.eay(w),!0),w.a6j(A.dR,"Ideas",w.gccb(),!0),w.a6j(D.x4,"Clear",w.gc_0(w),!0),w.aJI(A.iO,"Show",new C.eaz(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aJI(d,e,f,g,h){var w=null,v=h?A.bs:A.c.j(0.08),u=B.m(14),t=B.m(14),s=B.a([B.W(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.C(A9.ux,B.aD(!1,A.a1,!0,u,B.aI(!1,t,!0,B.hs(new B.C(new B.N(8,8,8,8),B.B(s,A.m,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ac),w)},
a6j(d,e,f,g){return this.aJI(d,e,f,g,!1)},
cli(){var w=null,v=new C.eas(this),u=A.c.j(0.08)
return B.p(w,B.ci(B.B(B.a([v.$2("START",D.vK),v.$2("CHANGE",D.Cy),v.$2("REACT",D.pU)],x.p),A.F,w,A.e,A.j,0,w,w),A.q,w,A.z,w,w,w,w,A.b_),A.f,w,w,new B.o(D.Dj,w,new B.c3(new B.ay(u,1,A.r,-1),A.Z,A.Z,A.Z),w,w,w,A.n),w,w,w,w,D.bgH,w,w,w)},
clj(d){var w,v,u,t,s=null,r=D.md.h(0,d)
r.toString
w=B.m(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.H(v.j(0.5),A.r,1)
return new B.C(A.ho,B.aG(s,B.p(s,B.v(B.a([B.W(r.b,v,s,s,s,22),A.d6,B.d(r.a,s,1,A.a2,s,s,s,D.a4O,s,s,s)],x.p),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a5(A.b0,A.b3,A.x,u,s,s),A.n),s,s,s,s,A.hD,s,s,62),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ear(this,d),s,s,s,s,s,s,!1,A.ad),s)}}
C.bdz.prototype={
a4(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.by(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.V()
u=B.L()
u.r=A.c.j(0.05).gp(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.G()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.V()
o=B.L()
o.r=b5.cx.j(0.4*((p-b6)/800)).gp(0)
b8.aW(new B.a7(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,B.K)(w),++m){l=w[m]
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
a0=new B.aO(e.r,A.ao,b4,b4,d)
d.push(new B.b4(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new B.p9(h+a1,i,f-a1,g,f,g))
a2=D.md.h(0,k.b).d
a3=D.md.h(0,j.b).d
e=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
e.b=A.ae
e.c=3
e.d=A.bO
d=B.a([a2.j(0.55),a3.j(0.55)],p)
g=B.qY(new B.u(h,i),new B.u(f,g))
e.sar(new B.a5(A.a3,A.a7,A.x,d,b4,b4).av(0,new B.a7(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.G()
i=a0.gbL().a.snapshot()
b7.drawPath((a0.e=new B.cE(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,B.K)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.E((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=C.h1M(new B.u(i.a+36,i.b+0),new B.u(h.a-36,h.b),a5)
$.V()
h=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
h.r=A.c.j(0.35).gp(0)
h.z=G.me
q=h.G()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
g.r=A.c.gp(0)
q=g.G()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ao(0,D.GH)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new B.aO($.V().r,A.ao,b4,b4,B.a([],o))
o=a8.b
a0.D(new B.b4(t,o))
i=a9.b
a0.D(new B.p9(t+a1,o,w-a1,i,w,i))
i=B.L()
i.b=A.ae
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aL(a0,i)
i=B.L()
i.r=A.c.gp(0)
b8.ae(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,B.K)(w),++m){b0=w[m]
o=b0.c
v=A.k.E((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dT.au(0,v)
$.V()
h=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
h.b=A.ae
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gp(0)
q=h.G()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,B.K)(w),++m){b1=w[m]
v=A.k.E((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=B.l3(o,i,A.dT.au(0,v))
h.toString
i=B.l3(o,i,A.dT.au(0,A.k.E(v-0.35,0,1)))
i.toString
$.V()
o=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
o.c=5
o.d=A.bO
g=b1.c
f=B.a([g.j(0),g],p)
e=B.qY(i,h)
o.sar(new B.a5(A.a3,A.a7,A.x,f,b4,b4).av(0,new B.a7(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.G()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
i.r=A.c.gp(0)
q=i.G()
b7.drawCircle(o,h,6,q)
q.delete()
i=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
i.r=g.j(0.5*(1-v)).gp(0)
i.z=A.j9
q=i.G()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,B.K)(w),++m){a4=w[m]
v=A.k.E((b6-a4.f)/a4.e,0,1)
o=a4.a
$.V()
i=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
i.r=a4.c.j(1-v).gp(0)
q=i.G()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,B.K)(w),++m){j=w[m]
o=j.a
$.V()
i=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
h=j.c
i.r=h.j(0.35).gp(0)
i.z=A.j9
q=i.G()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
i.sar(new B.bR(O.pV,0.5,A.x,b4,0,B.a([A.c,h],p),b4,b4).av(0,B.bS(j.a,8)))
q=i.G()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,B.K)(b5),++m){a6=b5[m]
v=A.k.E((b6-a6.d)/1000,0,1)
t=1-v
b2=C.bdA(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a4(b8,new B.u(t.a-o/2,t.b-(40+60*v+p.gbc(p)/2)))}for(b5=new B.dv(n,n.r,n.e);b5.C();)b3.c86(b8,b5.d,b6)
b7.restore()},
c86(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.md.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.E(1-(f-w)/520,0,1)
u=B.cr(e.c,64,64)
t=B.bx(u,A.jR)
s=t.eH(A.ct)
$.V()
r=B.L()
r.r=A.w.j(0.55).gp(0)
r.z=A.l9
d.aA(s,r)
if(v>0){s=t.cD(6)
r=B.L()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.xY
d.aA(s,r)}s=t.eH(A.cF)
r=B.L()
q=h.d
r.r=B.aq(q,A.w,0.65).gp(0)
d.aA(s,r)
r=B.L()
s=B.aq(q,A.c,0.18+0.4*v)
s.toString
p=B.aq(q,A.w,0.35)
p.toString
r.sar(new B.a5(A.b0,A.b3,A.x,B.a([s,p],x.O),j,j).av(0,u))
d.aA(t,r)
r=B.L()
r.b=A.ae
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aA(t,r)
r=h.b
p=e.c
o=C.bdA(B.jw(r.a),30,A.c,r.b,j,A.I)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aE(0,new B.u(s/2,r.gbc(r)/2)))
n=C.bdA(h.a,11,A.c,j,j,A.I)
n.a4(d,e.c.ao(0,new B.u(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.asA[A.o.F(e.d,6)]:j
h=h.c
if(h===D.pU){s=e.c.ao(0,new B.u(0,62))
r=B.L()
r.r=D.at5[A.o.F(e.d,6)].gp(0)
d.ae(s,5,r)}else if(m!=null){l=C.bdA(m,9.5,A.az,j,j,A.O)
l.a4(d,e.c.ao(0,new B.u(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bdA(m,9.5,A.az,j,j,A.O)
l.a4(d,e.c.ao(0,new B.u(-l.b.c/2,54)))}if(k.c)return
if(h!==D.vK)k.aXV(d,e.c.aE(0,D.GH),q)
k.aXV(d,e.c.ao(0,D.GH),q)},
aXV(d,e,f){var w
$.V()
w=B.L()
w.r=A.bW.gp(0)
d.ae(e,9,w)
w=B.L()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.ae(e,9,w)
w=B.L()
w.r=A.c.gp(0)
d.ae(e,3.5,w)},
ap(d){return!0}}
C.aJh.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.bi4.prototype={}
C.Oi.prototype={
gX(d){return this.d}}
C.Uk.prototype={
S(){var w=B.a([],x.g4),v=B.a([],x.ed)
return new C.bh9(new B.co(null,x.A),w,v,A.cE,A.bw,D.Dr,null,null)}}
C.bh9.prototype={
aVH(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.E(A.k.by((1-d.b/(B.aH(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.arB[A.o.F(v,5)]+12*A.o.al(v,5)+12
switch(t.z){case"glow":C.l2("synth",u,420,0.3)
break
case"rainbow":C.l2("bell",u,700,0.35)
break
case"stars":C.l2("pluck",u+12,400,0.4)
break
case"sparks":C.dG(2400+t.r.aC(2000),"",60,0,0.18,"noise")
break
default:C.dG(110+t.r.aC(60),"",140,0,0.22,"noise")}},
c20(d){return this.aVH(d,!1)},
Z(){var w,v=this
v.a0()
w=v.qR(new C.ekx(v))
w.ko(0)
v.w!==$&&B.aQ()
v.w=w},
q(){var w=this.w
w===$&&B.c()
w.q()
this.bqx()},
gaXs(){var w=this.Q
return w<0?new H.mv(1,A.k.F(this.y*0.18,360),0.85,1).iu():D.OB[w]},
aNY(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gaXs(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.af()*3.141592653589793*2
switch(l.z){case"fire":q=v.af()
p=l.as
o=v.af()
n=v.af()
m=B.aq(A.cu,A.aD,v.af())
m.toString
j.push(new C.Oi(new B.u(u+(q-0.5)*p,t),new B.u((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.af()*0.4),l.y,700+v.aC(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.af()*200
n=B.aq(k,A.c,v.af()*0.6)
n.toString
j.push(new C.Oi(d,new B.u(q*o,p*o),n,1.5+v.af()*3,l.y,600+v.aC(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.af()*40
j.push(new C.Oi(d,new B.u(q*o,p*o),k,1.2+v.af()*1.8,l.y,500))}}},
aUw(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gaXs()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=B.a([],x.g)
r.ax=new C.bi4(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aNY(e)
r.aVH(e,!0)
r.n(new C.ek8())},
aUv(){this.ax=null
this.n(new C.ek7())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([B.aF(n,n,n,n,D.ma,n,n,n,new C.ekh(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=B.a([B.b2(n,n,n,new C.bon(k,o.f,o.y,o.at,n),A.at)],m)
if(!o.ay&&k.length===0)j.push(D.aY2)
k=B.aG(A.c5,new B.am(A.W,n,A.aZ,A.q,j,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,new C.eki(o),new C.ekj(o),new C.ekn(o),n,n,n,n,n,n,n,n,n,new C.eko(o),new C.ekp(o),n,n,n,!1,A.ad)
j=B.a([],m)
for(w=0;w<5;++w){v=D.cFf[w]
j.push(new C.dw(v.b,o.z===v.a,new C.ekq(o,v),v.c,A.bX,n))}u=B.a([new C.E6(A.c,o.Q<0,new C.ekr(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new C.E6(D.OB[t],o.Q===t,new C.eks(o,t),!1,n))
s=o.as
s=C.hr(A.bX,A.o.u(A.k.U(s)),"Size",36,4,new C.ekt(o),s)
r=o.ch
q=r?A.nA:M.qy
q=B.a([new C.dw("Sound",r,new C.eku(o),q,A.bX,n),new C.fd(A.uS,"Undo",new C.ekk(o),A.c,n),new C.fd(D.x4,"Clear",new C.ekl(o),A.cG,n)],m)
for(w=0;w<4;++w){p=D.cTY[w]
q.push(new C.E6(p,o.at.A(0,p),new C.ekm(o,p),!1,n))}return C.jx(A.bX,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new B.eq(k,o.d),"SPARK PAINTER",B.v(B.a([new C.eH(j,"BRUSH",n),new C.eH(u,"COLOUR",n),s,new C.eH(q,n,n)],m),A.m,n,A.e,A.Q,0,A.p))}}
C.bon.prototype={
a4(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.V()
w=B.L()
v=a4.e
w.r=v.gp(v)
a6.aW(new B.a7(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,B.K)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.V()
o=B.a([],t)
n=new B.aO(p.r,A.ao,a5,a5,o)
o.push(new B.b4(A.d.gL(q).a,A.d.gL(q).b))
for(p=B.U(q),m=p.k("pw<1>"),l=new B.pw(q,1,a5,m),l.FY(q,1,a5,p.c),l=new B.bU(l,l.gJ(0),m.k("bU<ai.E>")),m=m.k("ai.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new B.ao(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bx(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gL(q)
$.V()
p=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
p.r=r.c.gp(0)
j=p.G()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.V()
q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
q.b=A.ae
q.d=A.bO
q.e=A.fu
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new B.hm(A.G,p)
j=q.G()
q=n.e
u.drawPath((q==null?n.e=new B.cE(n.gbL().a.snapshot()):q).a,j)
j.delete()
q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
q.b=A.ae
q.d=A.bO
q.e=A.fu
q.c=p
q.r=o.gp(0)
j=q.G()
q=n.e
u.drawPath((q==null?n.e=new B.cE(n.gbL().a.snapshot()):q).a,j)
j.delete()
q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
q.b=A.ae
q.d=A.bO
q.e=A.fu
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.G()
q=n.e
u.drawPath((q==null?n.e=new B.cE(n.gbL().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new H.mv(1,A.o.F(i*5,360),0.85,1).iu()
o=q[i-1]
m=q[i]
$.V()
l=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
l.c=p
l.d=A.bO
l.r=h.gp(0)
j=l.G()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,B.K)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gL(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new H.mv(1,A.o.F(a3*23,360),0.7,1).iu():l
a4.c_3(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,B.K)(w),++s){a0=w[s]
e=A.k.E((t-a0.e)/a0.f,0,1)
q=a0.a
$.V()
p=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=E.P3
j=p.G()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c_3(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.V(),o=B.a([],x.v),n=new B.aO(p.r,A.ao,null,null,o)
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
n.e=null}}n.D(new B.bD())
$.V()
p=B.L()
p.r=h.j(0.4).gp(0)
p.z=A.j9
d.aL(n,p)
p=B.L()
p.r=h.gp(0)
d.aL(n,p)},
ap(d){return!0}}
C.Uw.prototype={
S(){return new C.aBK(new B.co(null,x.A),new B.ar(new B.bc("NGMY",A.b2,A.aM),$.av()),null,null)}}
C.aBK.prototype={
gHr(){var w,v=this,u=v.e
if(u===$){w=B.bi(null,A.rQ,null,1,null,v)
w.cE(0)
v.e!==$&&B.bK()
v.e=w
u=w}return u},
Z(){this.a0()
var w=this.gHr()
w.d5()
w.dM$.K(0,this.gbRy())},
bRz(){var w,v,u,t,s,r,q,p=this,o=p.gHr().x
o===$&&B.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.lG:new B.lS(w)).gJ(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)C.dG(1500,"",35,0,0.18,"square")
else if(s==="glitch")C.dG(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
C.l2(s,D.aqA[A.o.F(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gHr().q()
var w=this.f
w.R$=$.av()
w.O$=0
this.bqD()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=B.a(["\u2026"],x.s)
else{h=new B.lS(h)
w=B.A(h,B.a2(h).k("G.E"))}v=D.OB[k.w]
h=x.p
u=B.a([B.aF(j,j,j,j,D.ma,j,j,j,new C.er6(k,d),j,j,j,j,"Share",j)],h)
t=B.m(26)
s=D.asB[k.y]
s=B.bt(t,B.bV(B.au(B.c4(k.gHr(),new C.er7(k,w,v),j),j,j,j),new B.o(j,j,j,j,j,new B.a5(A.ax,A.aC,A.x,s,j,j),A.n),A.bb),A.ap)
t=A.c.j(0.06)
t=B.aK(j,A.U,!1,j,!0,A.q,j,B.aL(),i,j,j,j,j,j,2,B.bn(j,new B.b3(4,B.m(14),A.Z),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.Cc,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.z,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new C.er8(k),j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,A.hh,!0,A.a5,j,A.am,j,j,j,j)
i=B.a([],h)
for(r=0;r<7;++r){q=D.chI[r]
i.push(new C.dw(q.b,k.r===q.a,new C.er9(k,q),j,A.cu,j))}p=B.a([],h)
for(o=0;o<8;++o)p.push(new C.E6(D.OB[o],k.w===o,new C.era(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.nA:M.qy
l=B.a([new C.dw(m,n,new C.erb(k),l,A.cu,j)],h)
n=B.a([],h)
for(o=0;o<5;++o)n.push(new C.E6(D.asB[o][0],k.y===o,new C.erc(k,o),!1,j))
n.push(A.bq)
n.push(new C.fd(A.m7,"Replay",new C.erd(k),A.c,j))
m=k.x
return C.jx(A.cu,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new B.C(A.bC,new B.eq(s,k.d),j),"TITLE ANIMATOR",B.v(B.a([t,A.P,new C.eH(i,"MOVE",j),new C.eH(p,"COLOUR",j),new C.eH(l,"SOUND",j),new C.eH(n,"BACK",j),C.hr(A.cu,A.o.u(A.k.U(m)),"Size",96,28,new C.ere(k),m)],h),A.m,j,A.e,A.Q,0,A.p))},
bUh(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=B.a([new B.cL(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<A.k.by(g*1.6*f)?1:0
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
case"glitch":u=A.o.F(A.k.by(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.b6
else w=u?A.bX:h
break
case"zoom":t=A.k.E(g*1.4-q*0.5,0,1)
n=A.lM.au(0,t)
w=h
m=t
break
case"rainbow":w=new H.mv(1,A.k.F(g*360+e*40,360),0.75,1).iu()
A.d.a7(p)
p.push(new B.cL(w.j(0.7),A.J,18))
break
default:w=h}return B.d8(B.dP(B.e7(A.A,B.d(d,r,r,r,r,r,r,B.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new B.u(l,o)),m)}}
C.aJq.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.aJw.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.YW.prototype={}
C.U3.prototype={
S(){var w=B.a([],x.aS)
return new C.aBp(new B.co(null,x.A),w,A.cE,A.at,$,A.bw,0,B.a([],x.X),null,null)}}
C.aBp.prototype={
gab9(){var w=this.r
return new B.u(w.a/2,w.b/2)},
aYA(){return new H.mv(1,this.f.af()*360,0.6,1).iu()},
aop(d,e,f,g){var w=this,v=w.gab9().ao(0,new B.u(Math.cos(e),Math.sin(e)).aO(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new C.YW(v,new B.u(-t,s).aO(0,r).aO(0,u*f),w.Q*(0.6+w.f.af()*0.9),w.aYA(),B.a([],x.g)))},
bAd(d,e,f){return this.aop(d,e,f,!1)},
bAc(d,e){return this.aop(d,e,1,!1)},
cnz(){var w,v,u,t=this
A.d.a7(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bAc(40+w*u/5,v.af()*3.141592653589793*2)},
bB5(){var w=this.r
this.bAd(Math.min(w.a,w.b)*0.42,this.f.af()*3.141592653589793*2,0.45)},
Z(){this.a0()
this.kM()},
l4(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.at))return
w=a2.e
v=w.length
if(v===0&&a2.fF$<300)return
u=a2.gab9()
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
if(v.b<r)if(J.lE(v.a-s)!==J.lE(n.f-s)){v=n.a
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
C.l2("bell",D.aqA[A.k.U((1-A.k.E(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new B.a3(w,new C.e7m(u),B.U(w).k("a3<1>")).gJ(0)>0&&a2.ax)C.dG(70,"",300,0.6,0.8,"sine")
A.d.bm(w,new C.e7n(a2,u))},
cc4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=B.a([],x.g),j=this.gab9()
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
gaS5(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aE(0,w).aO(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=B.a([B.aF(r,r,r,r,D.ma,r,r,r,new C.e7a(s,d),r,r,r,r,"Share",r)],q),o=B.ck(new C.e7b(s)),n=s.w
n=C.hr(A.cM,A.k.aa(n,1)+"x","Sun mass",2.5,0.3,new C.e7c(s),n)
w=s.x
w=C.hr(A.cM,A.k.aa(w,1)+"x","Time",3,0.2,new C.e7e(s),w)
v=s.Q
v=C.hr(A.cM,A.o.u(A.k.U(v)),"Planet size",16,3,new C.e7f(s),v)
u=s.ax
t=u?A.nA:M.qy
return C.jx(A.cM,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",B.v(B.a([n,w,v,new C.eH(B.a([new C.dw("Sound",u,new C.e7g(s),t,A.cM,r),new C.dw("Trails",s.z,new C.e7h(s),A.LT,A.cM,r),new C.dw("Planets pull each other",s.y,new C.e7i(s),A.xt,A.cM,r)],q),r,r),new C.eH(B.a([new C.fd(A.m6,"Solar system",new C.e7j(s),A.cM,r),new C.fd(A.mQ,"Comet",new C.e7k(s),A.c,r),new C.fd(A.m3,"Cluster",new C.e7l(s),A.c,r),new C.fd(D.x4,"Clear",new C.e7d(s),A.cG,r)],q),r,r)],q),A.m,r,A.e,A.Q,0,A.p))}}
C.bhS.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.V()
w=B.L()
w.r=D.U9.gp(0)
d.aW(new B.a7(0,0,0+g,0+f),w)
v=new B.f3()
v.dU(5)
for(w=d.a,u=0;u<70;++u){t=v.af()
s=v.af()
r=v.af()
q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
q.r=A.c.j(0.25+v.af()*0.4).gp(0)
p=q.G()
w.drawCircle(t*g,s*f,r*1.2+0.3,p)
p.delete()}o=16+i.d*6
g=i.c
f=o*3.2
t=B.L()
s=x.O
t.sar(new B.bR(A.A,0.5,A.x,h,0,B.a([A.cM.j(0.45),A.K],s),h,h).av(0,B.bS(g,f)))
d.ae(g,f,t)
t=B.L()
t.sar(D.dXd.av(0,B.bS(g,o)))
d.ae(g,o,t)
for(g=i.b,f=g.length,n=0;n<g.length;g.length===f||(0,B.K)(g),++n){m=g[n]
t=m.e
if(t.length>1)for(r=m.d,u=1;q=t.length,u<q;++u){l=u/q
q=t[u-1]
k=t[u]
j=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
j.c=2.2*l+0.4
j.d=A.bO
j.r=r.j(l*0.8).gp(0)
p=j.G()
w.drawLine.apply(w,[q.a,q.b,k.a,k.b,p])
p.delete()}t=m.a
r=m.c
q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
k=m.d
q.r=k.j(0.3).gp(0)
q.z=G.me
p=q.G()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
j=B.aq(k,A.w,0.5)
j.toString
q.sar(new B.bR(O.pV,0.5,A.x,h,0,B.a([A.c,k,j],s),h,h).av(0,B.bS(m.a,r)))
p=q.G()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=B.L()
t.c=2
t.r=A.j3.gp(0)
d.bw(g,f,t)
t=B.L()
t.r=A.c.gp(0)
d.ae(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,B.K)(g),++n){m=g[n]
t=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
t.r=A.c.j(0.7).gp(0)
p=t.G()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
ap(d){return!0}}
C.a9B.prototype={}
C.Ur.prototype={
S(){var w=B.a([],x.cS),v=B.a([],x.ev)
return new C.bhe(new B.co(null,x.A),w,v,A.cE,A.at,$,A.bw,0,B.a([],x.X),null,null)}}
C.bhe.prototype={
Z(){this.a0()
this.kM()},
c_4(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
w.push(new C.a9B(new B.u(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new B.u(p*n,o*n),A.k.F(m*60+l,360)))}while(w.length>A.k.U(k.x))w.pop()},
l4(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.at))return
a2.c_4()
w=a2.f
A.d.bm(w,new C.eqy(a2))
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
A.d.bm(w,new C.eqz(a2))
if(w.length<a1&&a2.ch)C.l2("bell",12+a2.r.aC(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fF$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fF$
C.l2("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=B.a([B.aF(l,l,l,l,D.ma,l,l,l,new C.eqn(m,d),l,l,l,l,"Share",l)],k),i=B.ck(new C.eqo(m)),h=B.a([],k)
for(w=0;w<4;++w){v=D.cGK[w]
h.push(new C.dw(v.b,m.at===v.a,new C.eqp(m,v),v.c,A.bg,l))}u=B.a([],k)
for(w=0;w<3;++w){t=D.crq[w]
u.push(new C.dw(t.b,m.ax===t.a,new C.eqq(m,t),l,A.bg,l))}s=m.ch
r=s?A.nA:M.qy
r=B.a([new C.dw("Sound",s,new C.eqr(m),r,A.bg,l)],k)
s=m.x
s=C.hr(A.bg,A.o.u(A.k.U(s)),"How many",150,15,new C.eqs(m),s)
q=C.hr(A.bg,l,"Together",2.5,0,new C.eqt(m),m.y)
p=C.hr(A.bg,l,"Apart",2.5,0,new C.equ(m),m.z)
o=C.hr(A.bg,l,"Same way",2.5,0,new C.eqv(m),m.Q)
n=m.as
return C.jx(A.bg,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",B.v(B.a([new C.eH(h,"TOUCH",l),new C.eH(u,"LOOK",l),new C.eH(r,l,l),s,q,p,o,C.hr(A.bg,A.o.u(A.k.U(n)),"Speed",280,50,new C.eqw(m),n)],k),A.m,l,A.e,A.Q,0,A.p))}}
C.bpd.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=B.a([D.a9T,D.baO],x.O)
else{v=x.O
w=a4==="fly"?B.a([A.da,N.JC],v):B.a([D.b8f,D.b0B],v)}v=0+a6.a
u=0+a6.b
t=$.V()
s=B.L()
s.sar(new B.a5(A.b0,A.b3,A.x,w,a3,a3).av(0,new B.a7(0,0,v,u)))
a5.aW(new B.a7(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,B.K)(v),++r){q=v[r].a
p=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
p.r=A.cu.gp(0)
o=p.G()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
n.r=A.cu.j(0.25).gp(0)
n.z=G.me
o=n.G()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,B.K)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new H.mv(1,j,0.7,1).iu()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
f.r=h.j(0.35*g).gp(0)
f.z=A.j9
o=f.G()
s.drawCircle(j.a,j.b,9,o)
o.delete()
j=k.a
f=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
f.r=A.c.j(g).gp(0)
o=f.G()
s.drawCircle(j.a,j.b,2.6,o)
o.delete()
break
case"bird":J.by(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
e=Math.sin(l+j)*5
j=B.a([],m)
d=new B.aO(t,A.ao,a3,a3,j)
j.push(new B.b4(8,0))
j.push(new B.ao(-6,-7-e))
j.push(new B.ao(-2,0))
j.push(new B.ao(-6,7+e))
j.push(new B.bD())
j=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
j.r=h.gp(0)
o=j.G()
j=d.gbL().a.snapshot()
s.drawPath((d.e=new B.cE(j)).a,o)
o.delete()
s.restore()
break
default:J.by(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
a0=Math.sin(n+j)*3
j=B.a([],m)
d=new B.aO(t,A.ao,a3,a3,j)
j.push(new B.b4(9,0))
j.push(new B.cO(0,-6,-7,a0))
j.push(new B.ao(-12,-4+a0))
j.push(new B.ao(-12,4+a0))
j.push(new B.ao(-7,a0))
j.push(new B.cO(0,6,9,0))
j=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
f=B.aq(h,A.cs,0.6)
f.toString
j.sar(new B.a5(A.a3,A.a7,A.x,B.a([h,f],q),a3,a3).av(0,D.eop))
o=j.G()
j=d.gbL().a.snapshot()
s.drawPath((d.e=new B.cE(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=A.cG
else a1=v==="scare"?A.cu:A.bg
v=u?12:22
u=B.L()
u.b=A.ae
u.c=2.5
u.r=a1.j(0.8).gp(0)
a5.ae(a4,v,u)}},
ap(d){return!0}}
C.aa3.prototype={}
C.SB.prototype={
S(){var w=B.a([],x.bi)
return new C.aA0(w,A.cE,A.at,B.T(x.N,x.S),$,A.bw,0,B.a([],x.X),null,null)}}
C.aA0.prototype={
gGU(){var w=this.r,v=18+A.k.U(w*0.85)
return A.o.E(A.k.U(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gaag(){return 54-8*(this.r/100)},
Z(){this.a0()
this.kM()
C.yF("chain_burst").bz(new C.dzn(this),x.P)},
aUy(){return C.vi("chain_burst",B.E(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
awH(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
k.push(new C.aa3(new B.u(20+s*(r.a-40),20+q*(p.b-40)),new B.u(o*m,n*m),new H.mv(1,u.af()*360,0.6,1).iu()))}},
Xt(d){var w,v=this
if(d==null)return 0
w=(v.fF$-d)/1000
if(w<0.4)return v.gaag()*A.dT.au(0,w/0.4)
if(w<1.1)return v.gaag()
if(w<1.5)return v.gaag()*(1-(w-1.1)/0.4)
return 0},
l4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.at)||!j.Q)return
w=j.d
if(w.length===0)j.awH()
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
if(s<8||s>j.f.b-8)t.b=new B.u(r.a,-r.b)}if(j.y){n=B.a([],x.E)
v=j.at
if(v!=null)n.push(new B.z(v,j.Xt(j.ax)))
for(v=A.d.gah(w),s=new B.hL(v,new C.dzo());s.C();){r=v.gT(0)
n.push(new B.z(r.a,j.Xt(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
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
B.eJ()
break}}}if(!(j.at!=null&&j.Xt(j.ax)>0||A.d.ba(w,new C.dzp(j)))&&j.fF$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gGU()){if(j.as>=j.gGU()*1.5)k=3
else k=j.as>=j.gGU()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.m(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
C.AI("bell",B.a([0,4,7,12],x.t),600,0.45)
j.aUy()}else C.dG(120,"",300,0,0.3,"saw")}}},
aUx(d){this.n(new C.dzd(this,d))
this.aUy()},
aba(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aba=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.ch(null,null,!0,null,new C.dzg(u),s,null,!0,!0,x.S),$async$aba)
case 2:t=e
if(t!=null)u.aUx(t)
return B.h(null,v)}})
return B.i($async$aba,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gGU(),t=w.x.h(0,""+w.r)
return C.jx(A.bX,A.h2,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",B.ck(new C.dzk(w,t==null?0:t,u)),"CHAIN BURST",B.B(B.a([new C.fd(A.qu,"Levels",w.gc_5(),A.bX,v),new C.fd(A.jL,"New board",new C.dzl(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
arS(d,e,f){var w=null
return B.v(B.a([B.d(d,w,w,w,w,w,w,D.aKq,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bS0(d,e){return this.arS(d,e,A.c)}}
C.b7u.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.V()
w=B.L()
w.r=D.Dr.gp(0)
d.aW(new B.a7(0,0,0+e.a,0+e.b),w)
v=new C.cG1(d)
w=l.c
if(w!=null)v.$3(w,l.r.$1(l.d),A.c)
for(w=l.b,u=w.length,t=d.a,s=l.r,r=0;r<w.length;w.length===u||(0,B.K)(w),++r){q=w[r]
p=q.d
o=q.a
n=q.c
if(p!=null)v.$3(o,s.$1(p),n)
else{$.V()
p=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
p.r=n.j(0.25).gp(0)
p.z=G.me
m=p.G()
t.drawCircle(o.a,o.b,12,m)
m.delete()
o=q.a
p=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
p.r=n.gp(0)
m=p.G()
t.drawCircle(o.a,o.b,8,m)
m.delete()}}},
ap(d){return!0}}
C.aIp.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.bto.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
w=this.fc$
w===$&&B.c()
w.q()
this.bpu()}}
C.aJe.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.btF.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
w=this.fc$
w===$&&B.c()
w.q()
this.bql()}}
C.aJt.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.btN.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
w=this.fc$
w===$&&B.c()
w.q()
this.bqA()}}
C.Ez.prototype={
gcFX(){return this.a.aE(0,this.b).gcj()>4}}
C.aaS.prototype={}
C.TY.prototype={
S(){var w=B.a([],x.aX),v=B.a([],x.ea)
return new C.bgO(new B.co(null,x.A),w,v,A.cE,A.at,$,A.bw,0,B.a([],x.X),null,null)}}
C.bgO.prototype={
aLI(d){return new H.mv(1,A.o.F(d*29,360),0.6,1).iu()},
Yb(d){var w,v=D.Bb.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.E(A.k.by(d.a/s*t),0,t-1)
return v[A.o.F(w,u)]+12*A.o.ee(w,u)},
aOd(d){A.d.bm(this.e,new C.e2Q(this,d))},
cjM(d,e,f){var w=f.aE(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aE(0,e).gcj()
return d.aE(0,e.ao(0,w.aO(0,A.k.E((d.aE(0,e).a*v+d.aE(0,e).b*u)/t,0,1)))).gcj()},
avg(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
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
k=g.Yb(new B.u((q+n)/2,(p+m)/2))
p=r?o:new B.u(n,p)
r=r?l:new B.u(q,m)
f.push(new C.Ez(p,r,k,new H.mv(1,A.o.F(k*29,360),0.6,1).iu()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new B.u(v*(0.1+i*0.16+r),w)
k=g.Yb(h)
f.push(new C.Ez(h,h,k,new H.mv(1,A.o.F(k*29,360),0.6,1).iu()))}break
default:for(w=g.r,s=0;s<28;++s){h=new B.u(v*(0.08+w.af()*0.84),u*(0.2+w.af()*0.65))
k=g.Yb(h)
f.push(new C.Ez(h,h,k,new H.mv(1,A.o.F(k*29,360),0.6,1).iu()))}}},
Z(){this.a0()
this.kM()},
c_7(d,e){var w,v=this.fF$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
C.l2(v,d.c+12,w,A.k.E(0.25+e/900,0.25,0.8))}},
l4(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.at))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new C.aaS(new B.u(a2.w.a*(0.2+v.af()*0.6),6),new B.u((v.af()-0.5)*40,0),new H.mv(1,v.af()*360,0.5,1).iu()))}if(u>3)a2.as=0
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
if(a1<0){a2.c_7(h,-a1)
m=q.b
k=a1*1.55
q.b=new B.u(m.a-l*k,m.b-n*k)}}}}}A.d.bm(w,new C.e3e(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.a([B.aF(p,p,p,p,B.W(q.ay?A.nA:M.qy,A.af,p,p,p,21),p,p,p,new C.e33(q),p,p,p,p,"Sound",p),B.aF(p,p,p,p,D.ma,p,p,p,new C.e34(q,d),p,p,p,p,"Share",p)],o),m=B.ck(new C.e35(q)),l=B.a([],o)
for(w=0;w<3;++w){v=D.cJS[w]
l.push(new C.dw(v.b,q.x===v.a,new C.e36(q,v),v.c,A.b6,p))}u=B.a([],o)
for(t=J.aU(D.Bb.gec(D.Bb));t.C();){s=t.gT(t)
u.push(new C.dw(s,q.y===s,new C.e37(q,s),p,A.b6,p))}t=B.a([],o)
for(w=0;w<6;++w){r=D.atr[w]
t.push(new C.dw(r.b,q.z===r.a,new C.e38(q,r),p,A.b6,p))}s=q.Q
return C.jx(A.b6,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",B.v(B.a([new C.eH(l,"TOOL",p),new C.eH(u,"SCALE",p),new C.eH(t,"SOUND",p),C.hr(A.b6,A.k.aa(s,1)+"/s","Marbles",4,0.3,new C.e39(q),s),new C.eH(B.a([new C.fd(D.btn,"Stairs",new C.e3a(q),A.b6,p),new C.fd(Ah.LF,"Pinball",new C.e3b(q),A.c,p),new C.fd(A.m3,"Random",new C.e3c(q),A.c,p),new C.fd(D.x4,"Clear",new C.e3d(q),A.cG,p)],o),p,p)],o),A.m,p,A.e,A.Q,0,A.p))}}
C.bet.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.V()
w=B.L()
w.sar(D.bJ7.av(0,new B.a7(0,0,a0,a1)))
a2.aW(new B.a7(0,0,a0,a1),w)
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
if(Math.sqrt(m*m+k*k)>4){q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
q.b=A.ae
q.d=A.bO
q.c=12+j
q.r=i.j(0.2+h).gp(0)
q.z=A.j9
g=q.G()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()
q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
q.b=A.ae
q.d=A.bO
q.c=6
q.r=B.aq(i,A.c,r*0.7).gp(0)
g=q.G()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()}else{p=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
p.r=i.j(0.25+h).gp(0)
p.z=A.j9
g=p.G()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
p=B.aq(i,A.w,0.4)
p.toString
j.sar(new B.bR(O.pV,0.5,A.x,d,0,B.a([A.c,i,p],v),d,d).av(0,B.bS(q,9)))
g=j.G()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=B.L()
u.c=5
u.d=A.bO
u.r=A.az.gp(0)
a2.bw(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,B.K)(a0),++t){f=a0[t]
u=f.a
q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
p=f.c
q.r=p.j(0.3).gp(0)
q.z=A.qI
g=q.G()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
q.sar(new B.bR(O.pV,0.5,A.x,d,0,B.a([A.c,p],v),d,d).av(0,B.bS(f.a,7)))
g=q.G()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
ap(d){return!0}}
C.abm.prototype={}
C.U2.prototype={
S(){var w=B.a([],x.gB)
return new C.aBo(new B.co(null,x.A),w,A.cE,A.at,$,A.bw,0,B.a([],x.X),null,null)}}
C.aBo.prototype={
gaUz(){var w=this.w
return new B.u(w.a/2,w.b/2)},
avr(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
awD(d){var w=D.Bb.h(0,this.y),v=5-d,u=w.length
return w[A.o.F(v,u)]+12*A.o.ee(v,u)},
Z(){this.a0()
this.kM()},
aN2(){var w,v,u,t,s=this.e
A.d.a7(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new C.abm(w,A.k.F(t/v+u,1)))}},
l4(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.at))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fF$
if(p.Q){r=p.z
s=p.awD(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
C.l2(r,s+12,q,0.55)}}}},
c_8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aE(0,h.gaUz()),e=f.gcj()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.avr(v)-e)
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
m=h.avr(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new C.e6K(h,n).$0()
h.c.e3()
return}}h.n(new C.e6L(g,h,t))
if(h.Q)C.l2(h.z,h.awD(g.a)+12,700,0.5)
B.eJ()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=B.a([B.aF(q,q,q,q,B.W(r.Q?A.nA:M.qy,A.af,q,q,q,21),q,q,q,new C.e6S(r),q,q,q,q,"Sound",q),B.aF(q,q,q,q,D.ma,q,q,q,new C.e6T(r,d),q,q,q,q,"Share",q)],p),n=B.ck(new C.e6U(r)),m=r.x
m=C.hr(A.bA,""+A.k.U(m),"Tempo",180,40,new C.e6V(r),m)
w=B.a([],p)
for(v=J.aU(D.Bb.gec(D.Bb));v.C();){u=v.gT(v)
w.push(new C.dw(u,r.y===u,new C.e6W(r,u),q,A.bA,q))}v=B.a([],p)
for(t=0;t<6;++t){s=D.atr[t]
v.push(new C.dw(s.b,r.z===s.a,new C.e6X(r,s),q,A.bA,q))}return C.jx(A.bA,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",B.v(B.a([m,new C.eH(w,"SCALE",q),new C.eH(v,"SOUND",q),new C.eH(B.a([new C.fd(A.dR,"Demo",new C.e6Y(r),A.bA,q),new C.fd(A.m3,"Random",new C.e6Z(r),A.c,q),new C.fd(D.x4,"Clear",new C.e7_(r),A.cG,q)],p),q,q)],p),A.m,q,A.e,A.Q,0,A.p))}}
C.bhT.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.V()
w=B.L()
w.r=D.U9.gp(0)
a5.aW(new B.a7(0,0,0+a6.a,0+a6.b),w)
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
r.sar(new B.a5(A.b3,A.b0,A.x,B.a([A.c.j(0.05),A.c.j(0.5)],q),a4,a4).av(0,new B.a7(o,m,o+2,m+u)))
a5.bw(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new H.mv(1,A.k.F(s.$1(l)*23,360),0.55,1).iu()
o=v.$1(l)
m=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
m.b=A.ae
m.c=1.6
m.r=k.j(0.35).gp(0)
j=m.G()
r.drawCircle(p,n,o,j)
j.delete()
o=D.d_3[A.o.F(A.o.F(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new B.kM(new B.en(o,a4,a4,A.cS,a4,a4,a4,a4,a4,a4,new B.F(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a5,A.ch,new B.jL(1),a4,a4,a4,a4,A.cg,a4)
i.eU()
o=i.b.c
m=J.fzG(v.$1(l))
h=i.b.a.c
i.a4(a5,new B.u(p+-o/2,n+(m-h.gbc(h)-2)))}w=B.L()
w.sar(D.dWR.av(0,B.bS(t,16)))
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
if(a2>0){d=J.fzG(v.$1(a0))
a0=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
a0.b=A.ae
a0.c=3*a2
a0.r=k.j(a2).gp(0)
j=a0.G()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
d.r=k.j(0.35).gp(0)
d.z=A.j9
j=d.G()
r.drawCircle(h,a1,12,j)
j.delete()
d=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
d.sar(new B.bR(O.pV,0.5,A.x,a4,0,B.a([A.c,k],q),a4,a4).av(0,B.bS(new B.u(h,a1),8.5)))
j=d.G()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
ap(d){return!0}}
C.aJc.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.btD.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
w=this.fc$
w===$&&B.c()
w.q()
this.bqj()}}
C.aJd.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.btE.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
w=this.fc$
w===$&&B.c()
w.q()
this.bqk()}}
C.rH.prototype={}
C.b6n.prototype={}
C.U0.prototype={
S(){var w=x.S
return new C.aBm(B.a([],x.aq),B.T(w,w),B.b_(w),D.eu0)}}
C.aBm.prototype={
Z(){this.a0()
C.yF("molecule_maker").bz(new C.e6e(this),x.P)},
agE(d){var w={}
w.a=0
this.f.bG(0,new C.e60(w,d))
return w.a},
gaUF(){var w,v,u,t=B.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)t.push(w[u].a)
return C.hJ3(t,this.f,D.a_F[this.d])},
c_p(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new B.f3()
w.dU(t*7+3)
t=v.y
v.n(new C.e5V(v,e,t.a,w,t.b))
C.vl("pop",u.length,90,0.35)},
atK(d){return this.n(new C.e5W(this))},
aUG(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c_v(d){this.n(new C.e6_(this,this.aUG(d)))},
cgl(){var w=this.r
if(w==null)return
this.n(new C.e5Z(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a_F[k.d],h=k.gaUF()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.v6.h(0,w[u].a).a-k.agE(u)
w=i.c
w=w.gdH(w)
t=w.di(w,new C.e68(),x.N).aH(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.bg:A.hn
r=x.p
s=B.v(B.a([new B.C(A.fL,C.eYx(w,s,h&&k.d<12?new C.fd(A.jn,"Next",new C.e69(k),A.bg,j):j),j),B.D(B.ck(new C.e6a(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=B.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new C.dw(p+D.a_F[u].b,k.d===u,new C.e6b(k,u),j,A.hn,j))}q=B.a([],r)
for(p=D.v6.gdH(D.v6),p=p.gah(p);p.C();){o=p.gT(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.e0:m.b
q.push(new C.dw(n+" \xb7 "+m.a,!1,new C.e6c(k,o),j,l,j))}return C.jx(A.hn,A.h2,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",B.v(B.a([new C.eH(w,"GOAL",j),new C.eH(q,"ADD",j),new C.eH(B.a([new C.dw("Remove selected atom",!1,k.gcgk(),A.e8,A.cG,j),new C.dw("Clear all",!1,k.gc_q(k),A.jL,A.aK,j)],r),j,j)],r),A.m,j,A.e,A.Q,0,A.p))}}
C.bf9.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.F(t*37,10)
r=A.o.F(t*53,10)
$.V()
q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
q.r=A.hn.j(0.03).gp(0)
p=q.G()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bG(0,new C.di2(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.v6.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=B.bS(j,26)
if(q===t){$.V()
h=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
h.r=A.aK.j(0.4).gp(0)
h.z=A.j9
p=h.G()
u.drawCircle(j.a,j.b,34,p)
p.delete()}j=m.b
$.V()
h=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
g=l.b
f=B.aq(g,A.c,0.5)
f.toString
e=B.aq(g,A.w,0.5)
e.toString
h.sar(new B.bR(A.Ii,0.5,A.x,a3,0,B.a([f,g,e],r),F.arJ,a3).av(0,i))
p=h.G()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?A.aE:A.c
d=new B.kM(new B.en(n,a3,a3,A.cS,a3,a3,a3,a3,a3,a3,new B.F(!0,j,a3,a3,a3,a3,19,A.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),A.a5,A.ch,new B.jL(1),a3,a3,a3,a3,A.cg,a3)
d.eU()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a4(a4,new B.u(n.a-h/2,n.b-j.gbc(j)/2))
n=k===0
a0=n?A.bl:A.aX
j=m.b
h=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
h.r=a0.gp(0)
p=h.G()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":B.t(k)
a1=new B.kM(new B.en(n,a3,a3,A.cS,a3,a3,a3,a3,a3,a3,A.oD),A.a5,A.ch,new B.jL(1),a3,a3,a3,a3,A.cg,a3)
a1.eU()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a4(a4,new B.u(n.a+(20-h/2),n.b+(-20-j.gbc(j)/2)))}if(n===0){d=B.id(a3,a3,a3,a3,D.eCu,A.a5,A.ch,a3,A.em,A.cg)
d.eU()
d.a4(a4,new B.u((w-d.b.c)/2,v/2))}},
ap(d){return!0}}
C.SZ.prototype={
S(){var w=x.s
return new C.bg3(B.a([],w),B.a([],w))}}
C.bg3.prototype={
Z(){this.a0()
this.ata()
C.yF("dna_lab").bz(new C.dHv(this),x.P)},
gaZN(){var w,v,u,t,s=B.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a0D.h(0,w[u])
t.toString
s.push(t)}return A.d.fN(s)},
ga6S(){var w,v,u=B.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.an(this.gaZN(),w,v))}return u},
ata(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new B.f3()
k.dU(l.e*31+l.d*7+B.AV(new B.Q(Date.now(),0,!1)))
w=new C.dHk(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mm(w.$0(),3)
t=B.a([],u)
for(s=0;s<9;s=q){r=B.a([],u)
for(q=s+3,p=A.a.an(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a0D.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.fN(r))}if(!A.d.ba(t,new C.dHj()))break}l.f=v
A.d.a7(l.r)
l.w=""
l.z=B.a([],x.s)
if(l.d===2)l.aXD()},
aXD(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=B.a([],x.s)
return}w=C.fIc(s.ga6S()[r])
v=J.dE(D.Bc.gec(D.Bc),new C.dHl(w)).dA(0)
u=new B.f3()
u.dU(r+s.e)
A.d.fA(v,u)
u=B.a([w],x.s)
A.d.v(u,B.dc(v,0,B.dH(3,"count",x.S),B.U(v).c))
t=new B.f3()
t.dU(s.e*3+r)
A.d.fA(u,t)
s.z=u},
aUE(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.d4E.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a0D.h(0,w.f[v])
u.toString
break A}u=C.fIc(w.ga6S()[v])
break A}w.n(new C.dHi(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new C.dHt(),e=new C.dHo(),d=h.d===2?h.gaZN():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=B.a([B.d(a1,g,g,g,g,g,g,Q.ml,g,g,g),A.av],a0)
if(h.d===2){u=B.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.bX.j(0.18):A.K
q=new B.aY(10,10)
p=new B.ay(t.length===s?A.bX:A.bG,1,A.r,-1)
o=B.a([],a0)
for(n=h.ga6S()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(B.p(g,new B.cD(A.b_,A.e,A.Q,A.m,g,A.p,g,0,o,g),A.f,g,g,new B.o(r,g,new B.c3(p,p,p,p),new B.bv(q,q,q,q),g,g,A.n),g,g,g,D.bfN,A.ej,g,g,g))}v.push(B.c9(A.bI,u,A.by,0,0))}else{u=B.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(B.c9(A.bI,u,A.by,0,0))}if(h.d!==2){u=B.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new B.a4(34,g,new B.cy(A.A,g,g,B.W(Af.LL,j<t.length?A.az:A.bG,g,g,g,14),g),g))
A.d.v(v,B.a([new B.C(A.Kc,B.c9(A.bI,u,A.by,0,0),g)],a0))}v.push(A.ar)
v.push(B.d(w,g,g,g,g,g,g,Q.ml,g,g,g))
v.push(A.av)
if(h.d===2){u=B.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.bg.j(0.25):A.dw
q=new B.aY(12,12)
o=j<t.length
p=new B.ay(o?A.bg:A.ba,1,A.r,-1)
if(o){o=D.Bc.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.c1
u.push(B.p(g,new B.x(o,g,new B.F(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.f,g,g,new B.o(r,g,new B.c3(p,p,p,p),new B.bv(q,q,q,q),g,g,A.n),g,g,g,g,A.eq,g,g,g))}v.push(B.c9(A.bI,u,A.by,6,8))}else{u=B.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(B.c9(A.bI,u,A.by,0,0))}v.push(A.ay)
u=h.w
if(u.length!==0){t=h.r.length
v.push(C.eYx(u,t>=(h.d===2?3:9)?A.bg:A.bX,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(C.eYx(u,A.bX,g))}v.push(A.T)
v.push(B.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,E.Rv,g,g,g))
v=B.ci(B.v(v,A.F,g,A.e,A.j,0,A.p),A.q,g,A.z,g,A.bC,g,g,A.ak)
u=B.a([],a0)
for(j=0;j<3;++j)u.push(new C.dw(D.cPb[j],h.d===j,new C.dHp(h,j),g,A.bX,g))
u=B.a([new C.eH(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new B.bI(A.a3,g,g,new C.fd(A.jL,"New strand",new C.dHq(h),A.bg,g),g))
else if(r){a0=B.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,B.K)(t),++l){i=t[l]
q=D.Bc.h(0,i)
q.toString
a0.push(new C.fd(D.XH,q,new C.dHr(h,i),A.bX,g))}u.push(B.c9(A.bI,a0,A.by,8,8))}else{a0=B.a([],a0)
t=h.d===0?D.aqF:D.czw
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new B.aY(14,14)
a0.push(B.aG(g,B.p(A.A,new B.x(k,g,D.eCK,g,g,g,g,g,g,g,g,g),A.f,g,g,new B.o(e.$1(k),g,g,new B.bv(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new C.dHs(h,k),g,g,g,g,g,g,!1,A.ad))}u.push(B.B(a0,A.m,g,A.ps,A.j,0,g,g))}return C.jx(A.bX,A.h2,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",B.v(u,A.m,g,A.e,A.Q,0,A.p))}}
C.Te.prototype={
S(){return new C.aAu(A.bw,B.a([80,30,6],x.n),B.a([],x.b),null,null)}}
C.aAu.prototype={
Z(){var w,v=this
v.a0()
w=v.qR(v.gc_r())
w.ko(0)
v.d!==$&&B.aQ()
v.d=w
C.yF("ecosystem").bz(new C.dKk(v),x.P)},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bpJ()},
gaJ2(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c_s(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length===0||w-A.d.gaj(v)[3]>0.25){w=B.A(m.f,x.i)
w.push(m.w)
v.push(w)
if(v.length>160)A.d.cu(v,0)}if(m.gaJ2()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.F(A.k.by(w),5)===0)C.vi("ecosystem",B.E(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.n(new C.dK7())},
a81(d){this.n(new C.dK6(this,d))
C.vl("pop",3,120,0.4)},
c_u(){return this.n(new C.dK8(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=B.v(B.a([new B.C(D.Vx,C.eYx(r,t.gaJ2()?A.bg:A.cG,s),s),B.D(new B.C(D.bgj,B.bt(B.m(18),B.b2(s,s,s,new C.baw(t.f,t.r,t.w,s),A.f2),A.ap),s),1),new B.C(A.fk,B.d("Alive together: "+A.k.U(t.Q)+" s     Best: "+A.k.U(t.as)+" s",s,s,s,s,s,s,D.eJq,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=C.hr(A.bg,A.k.aa(w,1)+"\xd7","Grass growth",2,0.2,new C.dKc(t),w)
v=t.y
v=C.hr(A.bY,A.k.aa(v,1)+"\xd7","Rabbit breeding",2,0.3,new C.dKd(t),v)
u=t.z
return C.jx(A.bg,A.h2,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",B.v(B.a([w,v,C.hr(A.cM,A.k.aa(u,1)+"\xd7","Fox hunting",2,0.3,new C.dKe(t),u),new C.eH(B.a([new C.dw("Drought",!1,new C.dKf(t),A.xr,A.aK,s),new C.dw("Disease",!1,new C.dKg(t),D.btf,A.bA,s),new C.dw("+ Foxes",!1,new C.dKh(t),s,A.cM,s),new C.dw("+ Rabbits",!1,new C.dKi(t),s,A.bY,s),new C.dw("Reset",!1,t.gc_t(),A.jL,A.aY,s)],q),s,s)],q),A.m,s,A.e,A.Q,0,A.p))}}
C.baw.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.V()
w=B.L()
w.sar(D.bHd.av(0,new B.a7(0,0,d,a0)))
a1.aW(new B.a7(0,0,d,a0),w)
w=h.b
a0=B.aq(A.u8,A.bl,A.k.E(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=B.L()
t.r=a0.gp(0)
a1.aW(new B.a7(0,v,d,v+u),t)
s=A.k.U(w[0]*0.9)
r=new B.f3()
r.dU(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.af()*e
o=f*(0.6+0.4*r.af())
t=Math.sin(a0+q)
n=r.af()
m=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
m.r=A.fW.gp(0)
m.c=1.6
l=m.G()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new C.cZw(h,a2,f,a1)
k.$5(Math.min(A.k.U(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.U(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new B.a7(10,a0,e,u)
t=B.L()
t.r=D.b4B.gp(0)
a1.aW(new B.a7(0,f,d,f+g),t)
i=B.L()
i.r=A.dw.gp(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.G()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new C.cZy(h,j,a1)
g.$3(0,100,A.bl)
g.$3(1,120,A.bY)
g.$3(2,24,A.cM)
g=new C.cZx(a1,j)
g.$3("Grass "+A.k.U(w[0]),A.bl,16)
g.$3("Rabbits "+A.k.U(w[1]),A.bY,102)
g.$3("Foxes "+A.k.U(w[2]),A.cM,200)},
ap(d){return!0}}
C.aID.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.aOY.prototype={
gu9(){return A.d.cG(this.a,0,new C.bCt())}}
C.St.prototype={
S(){var w=x.S
return new C.bfK(C.hGb(),B.bZ(5,0,!1,w),B.b_(w),A.bw,null,null)}}
C.bfK.prototype={
gv6(){var w,v,u,t=B.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cG(t,0,new C.dvy())},
Z(){var w,v=this
v.a0()
w=v.qR(new C.dvL(v))
w.ko(0)
v.x!==$&&B.aQ()
v.x=w
C.yF("balance_lab").bz(new C.dvM(v),x.P)},
q(){var w=this.x
w===$&&B.c()
w.q()
this.bpm()},
cqr(d){var w,v=this
v.n(new C.dvz(v,d))
C.vl("click",v.f[d],60,0.4)
if(v.gv6()===v.d[v.e].gu9()&&v.r.K(0,v.e)){C.vl("zap",10,260,0.5)
w=v.r
w=B.A(w,B.a2(w).k("cl.E"))
C.vi("balance_lab",B.E(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new B.J(k,new C.dvE(),B.U(k).k("J<1,n>")).aH(0," + ")
k=B.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aH(k," + ")
if(o.gv6()===m[o.e].gu9())s="\u2696\ufe0f Balanced! "+m[o.e].gu9()+" = "+o.gv6()+". The torques are equal, so the seesaw stays level."
else s=o.gv6()>m[o.e].gu9()?"The right side is too strong ("+o.gv6()+" vs "+m[o.e].gu9()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].gu9()+" vs "+o.gv6()+"). Add weight to the right, or place it further from the middle."
k=o.gv6()===m[o.e].gu9()?A.bg:A.aK
k=C.bwy(s,k,o.gv6()===m[o.e].gu9()&&o.e<m.length-1?new C.fd(A.jn,"Next",new C.dvF(o),A.bg,n):n)
w=B.D(B.ck(new C.dvG(o,l)),1)
u=j.length===0?"0":j
u=B.D(B.d("Left torque\n"+u+" = "+m[o.e].gu9(),n,n,n,n,n,n,D.aLy,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=B.v(B.a([new B.C(D.Vx,k,n),w,new B.C(D.ad4,B.B(B.a([u,B.D(B.d("Right torque\n"+r+" = "+o.gv6(),n,n,n,n,n,n,D.aLy,A.dN,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=B.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new C.dw(w+p,o.e===v,new C.dvH(o,v),n,A.aK,n))}return C.jx(A.aK,A.h2,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",B.v(B.a([new C.eH(u,"LEVEL",n),new C.eH(B.a([new C.dw("Clear right side",!1,new C.dvI(o),A.jL,A.cG,n)],q),n,n)],q),A.m,n,A.e,A.Q,0,A.p))}}
C.b6z.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new B.aO($.V().r,A.ao,null,null,B.a([],x.v))
i.D(new B.b4(h,f))
w=f+70
i.D(new B.ao(h-30,w))
i.D(new B.ao(h+30,w))
i.D(new B.bD())
v=B.L()
v.r=A.aj.gp(0)
d.aL(i,v)
v=h-120
i=B.L()
i.r=A.aI.gp(0)
d.aW(new B.a7(v,w,v+240,w+8),i)
i=d.a
J.by(i.save())
i.translate(h,f)
d.iU(0,j.b)
u=g*5.8
t=B.bx(new B.a7(-u,-9,u,9),A.h5)
w=B.L()
w.sar(D.bJO.av(0,new B.a7(t.a,t.b,t.c,t.d)))
d.aA(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.V()
v=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
v.r=A.hB.gp(0)
v.c=1.5
r=v.G()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
C.fa3(d,""+Math.abs(s),new B.u(w,22),A.c1,10)}q=new C.cyz(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,B.K)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,A.aY)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],A.bX)
if(w[s]===0){l=B.bx(B.cr(new B.u(m,-22),22,v),A.h5)
$.V()
k=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
k.b=A.ae
k.c=1.4
k.r=A.ba.gp(0)
r=k.G()
i.drawRRect(B.ex(l),r)
r.delete()
C.fa3(d,"+",new B.u(m,-22),A.c1,14)}}i.restore()
$.V()
i=B.L()
i.r=(j.e?A.bg:A.aJ).gp(0)
d.ae(new B.u(h,f),7,i)},
ap(d){return!0},
gjw(){return this.e}}
C.Ts.prototype={
S(){return new C.bgf(B.a([16,32,12,24],x.t),B.b_(x.S),A.bw,null,null)}}
C.bgf.prototype={
gZC(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gabj(){var w=this.gZC(),v=this.r,u=D.ata[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&B.d7(this.d,x.S).a<4)
else w=!1
return w},
Z(){var w,v=this
v.a0()
w=v.qR(new C.dOl(v))
w.ko(0)
v.x!==$&&B.aQ()
v.x=w
C.yF("gear_lab").bz(new C.dOm(v),x.P)},
q(){var w=this.x
w===$&&B.c()
w.q()
this.bpR()},
c_w(d,e){var w,v=this
v.n(new C.dOb(v,d,e))
if(v.gabj()&&v.w.K(0,v.r)){C.vl("zap",8,240,0.45)
w=v.w
w=B.A(w,B.a2(w).k("cl.E"))
C.vi("gear_lab",B.E(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.gZC(),n=r.gZC(),m=D.ata[r.r].a
m=r.gabj()?"\u2705 Done! Ratio "+A.k.aa(r.gZC(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gabj()?A.bg:A.cM
v=r.d
u=x.p
n=B.v(B.a([new B.C(D.Vx,C.bwy(m,w,r.gabj()&&r.r<7?new C.fd(A.jn,"Next",new C.dOf(r),A.bg,q):q),q),B.D(B.b2(q,q,q,new C.bbZ(v,r.f,q),A.f2),1),new B.C(D.ad4,B.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.aa(r.gZC(),2)+"   \xb7   Output "+A.k.aa(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.aa(1/n,2),q,q,q,q,q,q,P.a4l,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=B.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new C.dw(m+s,r.r===t,new C.dOg(r,t),q,A.cM,q))}p=r.e
u=B.a([new C.eH(o,"GOAL",q),C.hr(A.aY,""+A.k.U(p)+" rpm","Input speed",120,10,new C.dOh(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new C.at7("Gear "+s+" teeth",p,new C.dOi(r,t),8,40,D.cXN[t],""+p,q))}return C.jx(A.cM,A.h2,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",B.v(u,A.m,q,A.e,A.Q,0,A.p))}}
C.bbZ.prototype={
bK4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.V(),j=B.a([],x.v),i=new B.aO(k.r,A.ao,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.dY1,D.e1x,D.egh,D.e8e],s=v===0,r=0;r<4;++r){q=t[r]
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
i.e=null}}}i.D(new B.bD())
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
n=A.d.fv(g,A.q_)
m=-n-6
l=n+6
r=e.a
u=e.b
k=Math.min(r/(o-p),u/(l-m))*0.96
s=d.a
J.by(s.save())
s.translate(r/2-(p+o)/2*k,u/2-(m+l)/2*k)
d.bU(0,k)
j=this.c
u=w[0]
r=w[1]
i=-j*u/r+3.141592653589793/r
r=w[2]
u=w[3]
h=new C.d5u(this,d)
h.$6$back(new B.u(t,0),g[2],r,i,A.dn,!0)
h.$5(new B.u(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.d1)
h.$5(new B.u(0,0),g[0],w[0],j,A.mv)
h.$5(new B.u(t,0),g[1],w[1],i,A.fy)
s.restore()
s=new C.d5v(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aY)
s.$3("2+3 \xb7 shared axle",t,A.cM)
s.$3("4 \xb7 output",q,A.bg)},
ap(d){return!0}}
C.SC.prototype={
S(){var w=$.av()
return new C.bfX(new B.ar(new B.bc("Meet me at noon",A.b2,A.aM),w),new B.ar(new B.bc("LEMON",A.b2,A.aM),w),B.b_(x.S))}}
C.bfX.prototype={
Z(){this.a0()
this.aTA()
C.yF("cipher_lab").bz(new C.dzK(this),x.P)},
q(){var w=this.d,v=$.av()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
aTA(){this.y=1+A.cE.aC(25)
this.z=0},
ga7j(){var w=this
return C.a_P(C.a_P(D.FF[w.x],w.y),-w.z)===D.FF[w.x]},
gauG(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=C.a_P(u,v.w)
break A}if(1===t){w=new B.J(B.a(C.a_P(u,0).split(""),x.s),new C.dzs(),x.dv).fN(0)
break A}w=C.hSE(u,v.e.a.a)
break A}return w},
aP5(d){var w,v,u,t,s,r=null,q=B.bZ(26,0,!1,x.S)
for(w=new B.d0(d.toUpperCase()),v=x.e8,w=new B.bU(w,w.gJ(0),v.k("bU<bT.E>")),v=v.k("bT.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.fv(q,A.z5))
w=x.p
v=B.a([],w)
for(s=0;s<26;++s){u=new B.aY(2,2)
v.push(new B.bG(1,A.bp,B.v(B.a([B.p(r,r,A.f,r,r,new B.o(A.aY,r,r,new B.bv(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.Kw,r,r,r,r),new B.x(B.jw(65+s),r,D.eL7,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.mc,A.j,0,A.p),r))}return new B.a4(r,70,B.B(v,A.dG,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=B.a([B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.d,o,o,o,o,o,2,B.bn(o,new B.b3(4,B.m(14),A.Z),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.ld,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dzB(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,D.eFE,!0,A.a5,o,A.am,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,B.a([A.T,B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.e,o,o,o,o,o,2,B.bn(o,new B.b3(4,B.m(14),A.Z),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.ld,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dzC(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.iC,!0,A.a5,o,A.am,o,o,o,o)],v))}w.push(A.ay)
w.push(D.f9d)
w.push(A.av)
v=A.aY.j(0.12)
u=B.m(14)
t=B.H(A.aY.j(0.4),A.r,1)
w.push(B.p(o,B.yX(p.gauG().length===0?"\u2026":p.gauG(),D.eKa,o),A.f,o,o,new B.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bC,o,o,o))
w.push(A.ab)
w.push(C.bwy(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aY,o))
w.push(A.ab)
w.push(D.eS2)
w.push(A.av)
w.push(p.aP5(p.gauG()))
w.push(A.av)
w.push(D.eUk)
s=B.cM(w,o,A.bC,o,o,A.ak,!1)}else{w=C.bwy("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aK,o)
v=B.d(C.a_P(D.FF[p.x],p.y),o,o,o,o,o,o,D.eKG,o,o,o)
u=(p.ga7j()?A.bg:A.aY).j(0.14)
t=B.m(14)
r=B.H((p.ga7j()?A.bg:A.aY).j(0.5),A.r,1)
t=B.a([w,A.ab,D.f3j,v,A.T,D.eZ8,B.p(o,B.d(C.a_P(C.a_P(D.FF[p.x],p.y),-p.z),o,o,o,o,o,o,D.eM8,o,o,o),A.f,o,o,new B.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bC,o,o,o),A.ab,p.aP5(C.a_P(D.FF[p.x],p.y)),A.P],x.p)
if(p.ga7j())t.push(C.bwy("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.bg,new C.fd(A.jL,"Next",new C.dzD(p),A.bg,o)))
s=B.cM(t,o,A.bC,o,o,A.ak,!1)}w=p.f
v=x.p
w=B.a([new C.eH(B.a([new C.dw("Make a secret",w===0,new C.dzE(p),A.j6,A.aY,o),new C.dw("Crack a code",w===1,new C.dzF(p),A.qv,A.aK,o)],v),o,o)],v)
if(p.f===0){u=B.a([],v)
for(q=0;q<3;++q)u.push(new C.dw(n[q],p.r===q,new C.dzG(p,q),o,A.aY,o))
v=B.a([new C.eH(u,o,o)],v)
if(p.r===0){u=p.w
v.push(C.hr(A.aY,""+u,"Shift",25,1,new C.dzH(p),u))}A.d.v(w,v)}else{v=p.z
w.push(C.hr(A.aK,""+v,"Shift back",25,0,new C.dzI(p),v))}return C.jx(A.aY,A.h2,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",B.v(w,A.m,o,A.e,A.Q,0,A.p))}}
C.aIh.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.aIL.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.e4.prototype={}
C.rU.prototype={
an9(d,e,f,g){var w=this
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
C.a8c.prototype={}
C.a9g.prototype={}
C.a2t.prototype={
b8i(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.he()?-1:1
v=t.af()*3.141592653589793*2
u=f*(0.3+t.af())
s.push(new C.a8c(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.af()*0.45));++r}},
bXd(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bm(w,new C.bId())},
ah4(d,e,f,g){var w="p"+this.c++,v=new C.rU(w,e,f,g)
v.an9(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bm(this.b,new C.bIo(e))},
a7(d){A.d.a7(this.a)
A.d.a7(this.b)},
cy1(d,e,f,g,h){return A.d.ba(this.b,new C.bIj(e,f,g,h))},
ahO(d,e,f,g){var w
if(d===f||this.cy1(0,d,e,f,g))return null
w=new C.a9g(d,e,f,g)
this.b.push(w)
return w},
axa(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
yK(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
akn(d){return this.Kc(d)&&!d.x&&d.cx>this.yK(d)},
b1a(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Kc(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c_x(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.xX.h(0,v)
if(w!=null)return w.a
return 100},
a5l(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.bXd(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("a3<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.K)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.a3(v,new C.bIp(a2),t).cG(0,0,new C.bIq(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.T(x.N,u)
n=new C.bIs(o)
m=B.a([],x.t)
l=new C.bIr(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.K)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.K)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.T(u,u)
f=new C.bIu(g,l,n)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,B.K)(v),++s){q=v[s]
f.$2(q,0)
f.$2(q,1)}e=g.a
if(e===0)return
s=0
for(;;){if(!(s<t)){d=0
break}q=v[s]
u=q.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){d=f.$2(q,1)
break}++s}for(u=v.length,s=0;s<u;++s)v[s].CW=0
a2.b16(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.yK(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b16(e,d,w,!0)
a2.bH9(a4)},
b16(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.T(x.N,b3),b5=new C.bIf(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bIe(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.K)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bIh(B.T(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.K)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.bZ(b7,0,!1,b3)
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
for(d=0;d<b7;++d)e[d]=B.bZ(b7,0,!1,b3)
a0=B.bZ(b7,0,!1,b3)
k.a7(0)
j.a7(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.K)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b1a(t)*(1+t.CW))
a4=b2.axa(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c_x(t)}}k.m(0,t,a3)
j.m(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bK3(e,a0,b8)
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
bK3(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.bZ(d,0,!1,x.i)
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
t[m]=t[m]-g*u[l][m]}}}f=B.bZ(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bH9(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.K)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.axa(o)/a1.b1a(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.yK(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bzv(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.b8i(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.rU(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.rU(o,"The "+$.pM().h(0,n).b+" got "+A.k.aa(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.rU(o,"More than 1.5 amps went through the "+$.pM().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.rU(o,"The regulator had to turn "+A.k.aa(o.cy,1)+" V into heat while "+A.k.U(i*1000)+" mA flowed. That is "+A.k.aa(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.rU(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.xX.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.pM().h(0,n).b
l=f.b
l=l===A.k.jA(l)?""+A.k.U(l):B.t(l)
g=f.c
g=g===A.k.jA(g)?""+A.k.U(g):B.t(g)
a1.rU(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.aa(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.es_.t(0,n)){m=o.fx>0?A.k.E((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.E(j/0.9,0,1)
if(!o.x&&j>2.4)a1.rU(o,"The bulb got "+A.k.aa(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.E((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.rU(o,"The LED had "+A.k.U(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.E(j/14,0,1)
break
case"motor":n=A.k.E(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.E(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.rU(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.E(i/1,0,1)
if(!o.x&&i>1)a1.rU(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.rU(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.E(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.rU(o,"The capacitor was charged to "+A.k.aa(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bzv(d){return A.d.ba(this.a,new C.bIc(d))},
rU(d,e){var w
d.x=!0
d.ay=e
this.b8i(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bcM(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a7(0)},
aD1(d){var w=d.b
return D.aI7.t(0,w)||D.xX.ak(0,w)||w==="buck"||w==="regulator"},
b9F(d){var w,v=!0
if(!this.Kc(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.xX.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
SS(d,e){var w=this.b
return new B.a3(w,new C.bIw(d,e),B.U(w).k("a3<1>")).gJ(0)},
Bs(d){var w,v
if(d.x)return!1
w=d.b
if(D.xX.ak(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
b7P(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.pM().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aD1(d)||i.Bs(d))return null
w=i.SS(d,0)
v=i.SS(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("a3<1>")
s=B.A(new B.a3(u,i.gcGe(),t),t.k("G.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jA(r)?""+A.k.U(r):B.t(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.aa(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.xX.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aD6("battery"),o=J.aU(t.a),t=new B.hL(o,t.b);t.C();){n=o.gT(o)
if(n.e===1.5&&n.as<=0.02&&i.SS(n,0)+i.SS(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aD6("switch"),o=J.aU(t.a),t=new B.hL(o,t.b);t.C();)if(!o.gT(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.pM().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.yK(k))return"The "+$.pM().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.aa(k.cx,2)+" amps, but it can only give about "+A.k.aa(i.yK(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.ba(u,new C.bIk(i,d))
h=q.b
h=h===A.k.jA(h)?""+A.k.U(h):B.t(h)
u=A.k.aa(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.aa(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.aa(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aD6(d){var w=this.a
return new B.a3(w,new C.bIn(d),B.U(w).k("a3<1>"))},
aCG(d){return this.aD6(d).ba(0,new C.bIm(0.35))},
ajj(d,e){return A.d.ba(this.a,new C.bIl(e))}}
C.agm.prototype={
a4(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.V()
w=B.L()
w.r=D.aal.gp(0)
c0.aW(new B.a7(0,0,b8,b9),w)
v=B.L()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.G()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,B.K)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.lC.ak(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.lC.ak(0,h.b)?(h.ch-1)*38:0
b4.cvc(c0,new B.u(k*b6+j*(42+i),l*b7),new B.u(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=C.hea(q.a,q.b,c1)
q=b4.e
q.toString
$.V()
p=B.L()
p.r=A.af.gp(0)
p.c=3
p.d=A.bO
c0.bw(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,B.K)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.V()
g=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
g.r=D.a9y.j(A.k.E(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.xY
s=g.G()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.by(w.save())
w.translate(j,i)
h=A.k.E(A.lM.au(0,A.k.E(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.c93(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.yK(a0)){g=j+0
f=i+-40
e=Math.sin(r.d*10)
a2=$.V().r
a3=B.a([],k)
a4=new B.aO(a2,A.ao,b5,b5,a3)
a5=f-13
a3.push(new B.b4(g,a5))
a6=g+13
a7=f+10
a3.push(new B.ao(a6,a7))
a8=g-13
a3.push(new B.ao(a8,a7))
a3.push(new B.bD())
a3=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
a3.r=A.aD.j(0.65+0.35*e).gp(0)
s=a3.G()
e=a4.gbL().a.snapshot()
w.drawPath((a4.e=new B.cE(e)).a,s)
s.delete()
e=B.a([],k)
a2=new B.aO(a2,A.ao,b5,b5,e)
e.push(new B.b4(g,a5))
e.push(new B.ao(a6,a7))
e.push(new B.ao(a8,a7))
e.push(new B.bD())
e=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
e.b=A.ae
e.c=1.6
e.r=A.c.gp(0)
s=e.G()
e=a2.gbL().a.snapshot()
w.drawPath((a2.e=new B.cE(e)).a,s)
s.delete()
a9=new B.kM(new B.en("!",b5,b5,A.cS,b5,b5,b5,b5,b5,b5,new B.F(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a5,A.ch,new B.jL(1),b5,b5,b5,b5,A.cg,b5)
a9.eU()
a9.a4(c0,new B.u(g+-3,f+-8))}if(!a0.x)g=(D.aI7.t(0,h)||D.xX.ak(0,h)||h==="buck"||h==="regulator")&&!r.Bs(a0)&&r.SS(a0,0)+r.SS(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.V()
g=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
g.r=A.aX.gp(0)
s=g.G()
w.drawCircle(j,i,10,s)
s.delete()
a9=new B.kM(new B.en("!",b5,b5,A.cS,b5,b5,b5,b5,b5,b5,new B.F(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a5,A.ch,new B.jL(1),b5,b5,b5,b5,A.cg,b5)
a9.eU()
a9.a4(c0,new B.u(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.lC.ak(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.V()
j=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
j.r=D.aal.gp(0)
s=j.G()
w.drawCircle(f,g,7,s)
s.delete()
j=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
j.b=A.ae
j.c=2.4
j.r=(i&&r.b9F(a0)?A.cG:A.af).gp(0)
s=j.G()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.b9F(a0)){a9=new B.kM(new B.en("+",b5,b5,A.cS,b5,b5,b5,b5,b5,b5,new B.F(!0,A.cG,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a5,A.ch,new B.jL(1),b5,b5,b5,b5,A.cg,b5)
a9.eU()
a9.a4(c0,new B.u(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,B.K)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.E(b1.r/0.8,0,1)
j=B.aq(D.b9W,D.baK,b2)
j.toString
i=b1.f
$.V()
h=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
h.r=j.gp(0)
h.c=2.4
h.d=A.bO
s=h.G()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
i.r=j.j(0.35*b2).gp(0)
i.z=A.P4
s=i.G()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.ba(q,new C.bDF())){b3=A.d.cG(q,0,new C.bDG())
$.V()
b7=B.L()
b7.r=D.b0o.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aW(new B.a7(0,0,b8,b9),b7)
a9=B.id(b5,b5,b5,b5,D.eCo,A.a5,A.ch,b5,A.em,A.cg)
a9.AR(b6-24)
a9.a4(c0,new B.u(12,10))}},
pA(d,e,f,g,h){var w=null,v=B.id(w,w,w,w,B.dl(w,w,w,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a5,A.ch,w,A.em,A.cg)
v.eU()
v.a4(d,f)},
cvc(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new B.aO($.V().r,A.ao,null,null,B.a([],x.v))
d.D(new B.b4(a1.a,a1.b))
w=C.h6G(a1,a2,a3)
d.D(new B.cO(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.aq(A.aK,D.a9y,A.k.E(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.aq(A.aY,A.aK,A.k.E(r*1.2,0,1))
u.toString
o=u}else o=A.br
u=B.L()
u.b=A.ae
u.c=a4?7:5
u.d=A.bO
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aL(d,u)
u=B.L()
u.b=A.ae
u.c=2.4
u.d=A.bO
u.r=(a4?A.c:o).gp(0)
a0.aL(d,u)
if(q){n=new B.QT(new B.uZ(B.wq(d),!1,B.a([],x.R))).gL(0)
m=40+A.k.E(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.j2()
i=t[u].b
i===$&&B.c()
if(!(j<i.a.length()/22))break
i=k.d
v.j2()
h=t[u].b
h===$&&B.c()
h=A.k.F(j*22+i*m*l,h.a.length())
v.j2()
i=t[u].b
i===$&&B.c()
i=i.a.length()
v.j2()
g=t[u].b
g===$&&B.c()
f=A.k.F(h+i,g.a.length())
v.j2()
i=t[u].Lh(f).a
h=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
h.r=A.c.gp(0)
e=h.G()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
Nr(d,e,f,g){var w,v,u,t
$.V()
w=B.L()
v=g?A.b0:A.a3
u=g?A.b3:A.a7
t=B.aq(e,A.w,0.3)
t.toString
w.sar(new B.a5(v,u,A.x,B.a([e,f,e,t],x.O),A.FH,null).av(0,d))
return w},
at1(d,e,f){return this.Nr(d,e,f,!0)},
bWP(d,e){return this.Nr(d,A.br,A.iH,e)},
aeJ(d,e){var w,v,u
$.V()
w=B.L()
w.sar(D.aGN.av(0,B.bS(e,4.2)))
d.ae(e,4.2,w)
w=e.ao(0,D.dNK)
v=e.ao(0,D.dNT)
u=B.L()
u.r=A.eo.gp(0)
u.c=1.2
d.bw(w,v,u)},
c93(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.V(),c0=B.L()
c0.sar(D.bGU.av(0,D.ep8))
c0.c=3.4
c0.d=A.bO
w=B.L()
w.r=A.w.j(0.45).gp(0)
w.z=G.me
c1.hU(D.ep0,w)
if(c3){w=B.bx(D.ep7,A.kf)
v=B.L()
v.r=A.c.j(0.14).gp(0)
c1.aA(w,v)}u=C.fOb(c2)
c1.bw(new B.u(-u,0),D.dP1,c0)
c1.bw(D.dMT,new B.u(u,0),c0)
t=c2.x
w=c2.b
s=D.lC.ak(0,w)&&c2.ch!==1
if(s){J.by(c1.a.save())
c1.bU(0,c2.ch)}switch(w){case"battery":b3.bww(c1,c2)
break
case"solar":r=B.bx(D.ep3,A.hK)
c1.aA(r,b3.Nr(new B.a7(r.a,r.b,r.c,r.d),A.e0,A.bY,!1))
b9=B.L()
w=B.aq(D.b3d,A.d3,0.25+0.55*c2.f)
w.toString
v=B.aq(D.ba4,A.lV,0.3+0.4*c2.f)
v.toString
b9.sar(new B.a5(A.ax,A.aC,A.x,B.a([w,v],x.O),b4,b4).av(0,D.a31))
c1.aW(D.a31,b9)
q=B.L()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(b9=c1.a,p=1;p<6;++p){w=-34+p*68/6
o=q.G()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}for(p=1;p<4;++p){w=-18+p*9
o=q.G()
b9.drawLine.apply(b9,[-34,w,34,w,o])
o.delete()}for(p=0;p<6;++p){w=-34+(p+0.5)*68/6
$.V()
v=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
v.r=A.cm.j(0.5).gp(0)
v.c=0.6
o=v.G()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}b9=new B.aO($.V().r,A.ao,b4,b4,B.a([],x.v))
b9.D(new B.b4(-34,18))
b9.D(new B.ao(-6+40*c2.f,-18))
b9.D(new B.ao(4+40*c2.f,-18))
b9.D(new B.ao(-24,18))
b9.D(new B.bD())
w=B.L()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aL(b9,w)
w=c2.f
b9=B.L()
b9.r=A.dJ.j(0.9).gp(0)
c1.ae(D.dMZ,4+4*w,b9)
break
case"crank":n=B.bx(D.eoP,A.h6)
c1.aA(n,b3.at1(new B.a7(n.a,n.b,n.c,n.d),A.bu,A.bH))
b9=B.L()
b9.sar(D.aGO.av(0,B.bS(A.J,12)))
c1.ae(A.J,12,b9)
m=new B.u(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.L()
b9.r=A.cm.gp(0)
b9.c=5
b9.d=A.bO
c1.bw(A.J,m,b9)
b9=B.L()
b9.sar(D.dX9.av(0,B.bS(m,7)))
c1.ae(m,7,b9)
b3.aeJ(c1,D.dOV)
b3.aeJ(c1,D.dMM)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aO(b9,A.ao,b4,b4,B.a([],w))
v.D(new B.b4(-3,24))
v.D(new B.ao(3,24))
v.D(new B.ao(1.5,0))
v.D(new B.ao(-1.5,0))
v.D(new B.bD())
l=B.L()
l.r=A.bY.gp(0)
c1.aL(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.by(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=B.a([],w)
j=new B.aO(b9,A.ao,b4,b4,l)
l.push(new B.b4(0,-2))
l.push(new B.cO(6,-14,2,-30))
l.push(new B.cO(-2,-14,0,-2))
l.push(new B.bD())
l=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
l.r=A.c.gp(0)
o=l.G()
l=j.gbL().a.snapshot()
v.drawPath((j.e=new B.cE(l)).a,o)
o.delete()
v.restore()}b9=B.L()
b9.sar(D.dWQ.av(0,B.bS(A.J,4.5)))
c1.ae(A.J,4.5,b9)
break
case"switch":n=B.bx(D.eoW,A.qU)
b9=B.L()
b9.sar(D.ajV.av(0,new B.a7(n.a,n.b,n.c,n.d)))
c1.aA(n,b9)
b3.aeJ(c1,D.PX)
b3.aeJ(c1,D.aBL)
i=c2.w?D.aBL:D.dMw
b9=B.L()
b9.r=A.aE.gp(0)
b9.c=6
b9.d=A.bO
c1.bw(D.PX,i,b9)
b9=B.L()
b9.r=(c2.w?A.bg:A.bY).gp(0)
b9.c=4
b9.d=A.bO
c1.bw(D.PX,i,b9)
b9=B.l3(D.PX,i,0.85)
b9.toString
w=B.L()
w.r=A.aD.gp(0)
c1.ae(b9,5,w)
break
case"fuse":h=B.bx(D.aHi,D.aGT)
b9=B.L()
b9.r=A.fj.j(0.25).gp(0)
c1.aA(h,b9)
b9=B.L()
b9.b=A.ae
b9.c=1.4
b9.r=A.az.gp(0)
c1.aA(h,b9)
if(!t){b9=B.L()
b9.c=1.6
b9.r=B.aq(A.bY,A.cM,c2.fx).gp(0)
c1.bw(D.aC1,D.aBK,b9)}else{b9=B.L()
b9.c=1.6
b9.r=A.c1.gp(0)
c1.bw(D.aC1,D.dPi,b9)
b9=B.L()
b9.c=1.6
b9.r=A.c1.gp(0)
c1.bw(D.dNp,D.aBK,b9)
b9=B.L()
b9.r=A.dx.gp(0)
c1.ae(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=B.cr(new B.u(D.v4[g]*22,0),20,9)
w=B.bx(f,A.i0)
o=b3.Nr(f,A.dn,A.nY,!0).G()
b9.drawRRect(B.ex(w),o)
o.delete()}break
case"pot":b9=B.L()
b9.sar(D.dX1.av(0,B.bS(A.J,21)))
c1.ae(A.J,21,b9)
for(b9=c1.a,k=0;k<=10;++k){e=2.356194490192345+k*3.141592653589793*1.5/10
w=Math.cos(e)
v=Math.sin(e)
l=Math.cos(e)
j=Math.sin(e)
d=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
d.r=A.az.gp(0)
d.c=1.2
o=d.G()
b9.drawLine.apply(b9,[w*18,v*18,l*22,j*22,o])
o.delete()}b9=B.L()
b9.sar(D.dWO.av(0,B.bS(A.J,13)))
c1.ae(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=B.L()
j.r=A.aK.gp(0)
j.c=3
j.d=A.bO
c1.bw(new B.u(b9*3,w*3),new B.u(v*12,l*12),j)
break
case"resistor":a1=B.bx(D.aHi,D.aGT)
b9=B.L()
b9.sar(D.bK4.av(0,new B.a7(a1.a,a1.b,a1.c,a1.d)))
c1.aA(a1,b9)
b9=x.O
a2=B.E([47,B.a([B.aZ(b5),B.aZ(b6),A.w],b9),100,B.a([B.aZ(b7),A.w,B.aZ(b7)],b9),220,B.a([B.aZ(b8),B.aZ(b8),B.aZ(b7)],b9),470,B.a([B.aZ(b5),B.aZ(b6),B.aZ(b7)],b9),1000,B.a([B.aZ(b7),A.w,B.aZ(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(b9=c1.a,p=0;p<3;++p){w=-14+p*9
v=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
v.r=a3[p].gp(0)
o=v.G()
b9.drawRect(B.c2(new B.a7(w,-9,w+4.5,9)),o)
o.delete()}b9=B.L()
b9.r=A.aK.gp(0)
c1.aW(D.eph,b9)
b9=c2.r
b3.pA(c1,b9>=1000?"1k\u03a9":""+A.k.U(b9)+"\u03a9",D.dOA,A.af,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.L()
v.r=A.dJ.j(0.55*w).gp(0)
v.z=A.xY
c1.ae(D.ve,34,v)}n=B.cr(D.dM1,12,18)
c1.aA(B.bx(n,A.i0),b3.Nr(n,A.br,A.e2,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
l.r=A.dl.gp(0)
l.c=1
o=l.G()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=B.L()
if(t)v=A.TM
else{v=B.aq(A.e2,A.hP,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.Dl
else{l=B.aq(A.e0,A.dJ,c2.fx)
l.toString}w.sar(new B.bR(A.rd,0.5,A.x,b4,0,B.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).av(0,B.bS(A.qR,17)))
c1.ae(A.qR,17,w)
w=B.L()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.ae(A.qR,17,w)
b9=b9.r
w=x.v
l=new B.aO(b9,A.ao,b4,b4,B.a([],w))
l.D(new B.b4(-9,-12))
l.D(new B.cO(-12,-4,-9,0))
v=B.L()
v.b=A.ae
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aL(l,v)
v=B.L()
v.r=A.cU.gp(0)
v.c=1.4
c1.bw(D.dPe,D.dPg,v)
v=B.L()
v.r=A.cU.gp(0)
v.c=1.4
c1.bw(D.dNi,D.dNl,v)
w=B.a([],w)
a4=new B.aO(b9,A.ao,b4,b4,w)
a4.D(new B.b4(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new B.ao(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.bx(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.V()
b9=B.L()
b9.b=A.ae
b9.c=1.8
if(t)w=A.aU
else{w=B.aq(A.e0,D.b3T,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aL(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.L()
v.r=A.aD.j(0.6*w).gp(0)
v.z=D.d6U
c1.ae(A.qR,30,v)}w=B.L()
w.r=A.e2.gp(0)
w.c=2.4
c1.bw(D.dPk,D.dPj,w)
w=B.L()
w.r=A.e2.gp(0)
w.c=2.4
c1.bw(D.dNr,D.dNq,w)
b9=b9.r
w=x.v
a6=new B.aO(b9,A.ao,b4,b4,B.a([],w))
a6.D(new B.b4(-12,8))
a6.D(new B.ao(-12,-6))
a6.D(new B.cO(0,-26,12,-6))
a6.D(new B.ao(12,8))
a6.D(new B.bD())
v=B.L()
if(t)l=A.JL
else{l=B.aq(A.eZ,D.aa9,c2.fx)
l.toString}if(t)j=A.k5
else{j=B.aq(A.k1,A.aD,c2.fx)
j.toString}v.sar(new B.a5(A.ax,A.aC,A.x,B.a([l,j],x.O),b4,b4).av(0,D.eol))
c1.aL(a6,v)
v=B.L()
v.b=A.ae
v.c=1.2
v.r=A.j3.gp(0)
c1.aL(a6,v)
v=B.L()
v.r=A.f_.gp(0)
c1.aW(D.eor,v)
w=new B.aO(b9,A.ao,b4,b4,B.a([],w))
w.D(new B.b4(-7,-4))
w.D(new B.cO(-6,-12,0,-15))
b9=B.L()
b9.b=A.ae
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aL(w,b9)
break
case"motor":a7=new B.a7(-28,-14,20,14)
c1.aA(B.bx(a7,A.h5),b3.at1(a7,A.aj,A.aJ))
b9=B.L()
b9.r=A.cz.gp(0)
c1.aW(D.eo8,b9)
b9=B.L()
b9.r=A.cm.gp(0)
c1.aW(D.eo9,b9)
b9=c1.a
J.by(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.by(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=B.cr(D.dMj,15,7)
v=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
v.r=A.cM.j(0.9).gp(0)
o=v.G()
b9.drawOval(B.c2(w),o)
o.delete()
b9.restore()}w=B.L()
w.r=A.aE.gp(0)
c1.ae(A.J,3,w)
b9.restore()
b3.pA(c1,"M",D.dOU,A.aE,14)
break
case"buzzer":a8=B.cr(A.J,42,42)
b9=B.L()
b9.sar(D.dX5.av(0,a8))
c1.hU(a8,b9)
b9=B.L()
b9.r=A.w.gp(0)
c1.ae(A.J,6,b9)
b9=B.L()
b9.b=A.ae
b9.c=1.4
b9.r=A.ba.gp(0)
c1.ae(A.J,6,b9)
b3.pA(c1,"+",D.dON,A.af,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.F(w.d*14,5):0
l=B.bS(A.J,24+k*5+l)
j=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
j.b=A.ae
j.c=2
j.r=A.bX.j(v*(1-k*0.22)).gp(0)
o=j.G()
b9.drawArc.apply(b9,[B.c2(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=B.bx(D.eoS,A.h5)
w=B.L()
w.sar(D.bHR.av(0,new B.a7(n.a,n.b,n.c,n.d)))
c1.aA(n,w)
w=B.a([],x.v)
a9=new B.aO(b9.r,A.ao,b4,b4,w)
a9.D(new B.b4(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new B.cO(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.bx(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.V()
w=B.L()
w.b=A.ae
w.c=10
w.r=D.b4u.j(0.5*b9).gp(0)
w.z=A.j9
c1.aL(a9,w)}$.V()
b9=B.L()
b9.b=A.ae
b9.c=3.2
b9.d=A.bO
b9.r=B.aq(A.lp,F.ab7,c2.fx).gp(0)
c1.aL(a9,b9)
break
case"capacitor":a7=new B.a7(-16,-22,16,18)
b9=B.bx(a7,A.h5)
w=B.L()
w.sar(D.bGM.av(0,a7))
c1.aA(b9,w)
w=B.L()
w.r=A.bY.gp(0)
c1.aW(D.eox,w)
for(p=0;p<4;++p){b0=new B.kM(new B.en("\u2212",b4,b4,A.cS,b4,b4,b4,b4,b4,b4,new B.F(!0,A.aE,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a5,A.ch,new B.jL(1),b4,b4,b4,b4,A.cg,b4)
b0.eU()
b0.a4(c1,new B.u(-14,-18+p*9))}b1=new B.a7(-16,-24,16,-17)
c1.aA(B.bx(b1,A.i0),b3.bWP(b1,!1))
b9=38*c2.fx
w=18-b9
$.V()
v=B.L()
v.r=A.bg.j(0.5).gp(0)
c1.aW(new B.a7(-3,w,11,w+b9),v)
b3.pA(c1,"1F",D.ve,A.c,11)
break
case"radio":a1=B.bx(D.a31,A.h6)
b9=B.L()
b9.sar(D.bKj.av(0,new B.a7(a1.a,a1.b,a1.c,a1.d)))
c1.aA(a1,b9)
b9=B.L()
b9.b=A.ae
b9.c=1.4
b9.r=A.nY.j(0.6).gp(0)
c1.aA(a1,b9)
b9=B.bx(D.eoT,A.hK)
w=B.L()
w.r=A.dB.gp(0)
c1.aA(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
v.r=A.lp.gp(0)
v.c=1.4
o=v.G()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=B.L()
w.r=(c2.fx>0?A.fV:A.ng).gp(0)
c1.aW(D.eob,w)
if(c2.fx>0){w=8+A.k.F(b3.b.d*7,18)
v=B.L()
v.r=A.bM.gp(0)
v.c=1.6
c1.bw(new B.u(w,-13),new B.u(w,-3),v)}w=B.L()
w.sar(D.aGO.av(0,B.bS(D.a24,6)))
c1.ae(D.a24,6,w)
w=B.L()
w.r=A.nY.gp(0)
c1.ae(D.dMS,4,w)
w=B.L()
w.r=A.e2.gp(0)
w.c=1.8
c1.bw(D.dMQ,D.aBP,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=B.bS(D.aBP,4+k*5+A.k.F(w.d*8,5))
l=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
l.b=A.ae
l.c=1.4
l.r=A.nk.j(0.7).gp(0)
o=l.G()
b9.drawArc.apply(b9,[B.c2(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=B.bx(D.ep2,A.h5)
v=B.L()
v.r=I.o4.gp(0)
c1.aA(w,v)
b2=B.bx(D.ep_,A.i0)
if(c2.fx>0&&!c2.x){b9=c1.a
J.by(b9.save())
b9.clipRRect(B.ex(b2),$.p0(),!0)
b9.translate(-33,-21)
C.fKt(c1,D.eur,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.L()
b9.r=A.bg.gp(0)
c1.ae(D.dN3,1.6,b9)}else{w=B.L()
w.r=D.uh.gp(0)
c1.aA(b2,w)
b9=new B.aO(b9.r,A.ao,b4,b4,B.a([],x.v))
b9.D(new B.b4(-33,-21))
b9.D(new B.ao(-10,-21))
b9.D(new B.ao(-33,0))
b9.D(new B.bD())
w=B.L()
w.r=A.c.j(0.05).gp(0)
c1.aL(b9,w)}b9=B.L()
b9.r=A.bu.gp(0)
c1.aW(D.eoq,b9)
break}C.hQo(c1,c2,b3.b.d,b3.gc_y())
if(t)b3.pA(c1,"\u2716",D.dPn,A.aD,14)
if(s)c1.a.restore()},
bww(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new B.a7(-28,-13,28,13)
d.aA(B.bx(w,A.qU),m.at1(w,A.e0,A.il))
v=new B.a7(-22,-13,22,13)
$.V()
u=B.L()
u.sar(D.ajO.av(0,v))
d.aW(v,u)
u=B.L()
u.r=A.e1.gp(0)
d.aW(D.eoG,u)
t=new B.a7(28,-5,34,5)
d.aA(B.bx(t,A.h4),m.Nr(t,A.e0,A.iH,!0))
m.pA(d,"+",D.dMB,A.aK,11)
m.pA(d,"\u2212",D.dOW,A.af,11)
m.pA(d,B.t(l===A.k.jA(l)?A.k.U(l):l)+"V",D.dOG,A.aK,13)
if(l===1.5){u=B.L()
u.r=A.bG.gp(0)
d.aW(D.eoF,u)
u=e.as
s=B.L()
s.r=B.aq(A.aD,A.bg,u).gp(0)
d.aW(new B.a7(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.pA(d,"FLAT",D.dOz,A.cG,9)}if(l>2){u=B.L()
u.r=A.ba.gp(0)
u.c=1
d.bw(D.dM7,D.aBu,u)
m.pA(d,l>3?"3 cells":"2 cells",D.dOF,A.az,8)}}else if(l<=9){r=new B.a7(-22,-17,22,17)
u=B.bx(r,A.qU)
$.V()
s=B.L()
s.sar(D.bJT.av(0,r))
d.aA(u,s)
s=B.L()
s.r=A.d1.gp(0)
d.aW(D.eoH,s)
for(u=d.a,q=0;q<2;++q){p=D.cW_[q]
s=p<0?5:3.6
o=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
o.sar(D.aGN.av(0,B.bS(new B.u(p,-18),5)))
n=o.G()
u.drawCircle(p,-18,s,n)
n.delete()}m.pA(d,"9V",D.dOB,A.c,16)}else{r=new B.a7(-34,-16,34,16)
u=B.bx(r,A.hK)
$.V()
s=B.L()
s.sar(D.ajO.av(0,r))
d.aA(u,s)
s=B.L()
s.r=A.cu.gp(0)
d.aW(D.ep1,s)
for(u=d.a,q=0;q<2;++q){s=B.bx(B.cr(new B.u(D.asQ[q],-20),8,10),A.h4)
o=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
o.r=A.cm.gp(0)
n=o.G()
u.drawRRect(B.ex(s),n)
n.delete()}m.pA(d,"+",D.dMI,A.aD,10)
m.pA(d,"12V",D.dOC,A.aE,15)}},
ap(d){return!0}}
C.me.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a7(k)
A.d.a7(d.b)
w=B.T(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.rU(o,r,q,p)
n.an9(o,r,q,p)
k.push(n)
J.ii(s[4],new C.cg5(n))
w.m(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.K)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.ahO(m,u[1],l,u[3])}}}
C.agk.prototype={
S(){var w=x.N
return new C.agl(A.J,A.at,B.T(w,x.gl),B.b_(w),$,A.bw,0,B.a([],x.X),null,null)}}
C.agl.prototype={
abm(d){var w=this,v=w.as
if(v!=null)v.a9(0)
w.n(new C.bDj(w,d))
w.as=B.cP(A.nt,new C.bDk(w))},
q(){var w=this.as
if(w!=null)w.a9(0)
w=this.ch
if(w!=null)w.a9(0)
this.bmz()},
YK(d,e){return this.c75(d,e)},
aWC(d){return this.YK(d,!1)},
c75(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$YK=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.qn:A.DT
w=3
return B.b(C.hS4(s,r,d.ax<3.2,q,$.pM().h(0,d.b).b),$async$YK)
case 3:p=g
t.ay=!1
if(p!=null)d.at=p
case 1:return B.h(u,v)}})
return B.i($async$YK,v)},
cjf(d){var w=this,v=new B.Q(Date.now(),0,!1),u=w.at.ce(0,d.a,new C.bDl()),t=J.cB(u)
t.K(u,v)
t.bm(u,new C.bDm(v))
if(t.gJ(u)>=4){t.a7(u)
t=w.ch
if(t!=null)t.a9(0)
w.a_3(d)
return}if(t.gJ(u)===3){t=w.ch
if(t!=null)t.a9(0)
w.ch=B.cP(A.kw,new C.bDn(w,u,d))}},
Yr(d){return this.c5v(d)},
c5v(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$Yr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.hRr(s,d.b,A.k.U(A.k.F(t.a.c.d*0.12,1)*100)),$async$Yr)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$Yr,v)},
a_3(d){return this.cgY(d)},
cgY(d){var w=0,v=B.j(x.H),u=this,t
var $async$a_3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.c1(D.Jr,null,new C.bDh(u,d),t,!0,!0,!1,A.yl,!1,!1,x.H),$async$a_3)
case 2:return B.h(null,v)}})
return B.i($async$a_3,v)},
Z(){this.a0()
this.b9P()
this.kM()},
b9P(){this.a.c.e=new C.bDC(this)},
l4(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.a5l(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=D.lC.h(0,s.b)
if((r==null?null:r.b)!==D.yn)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.K(0,s.a)
q.YK(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)C.dG(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)C.dG(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cE.af()<0.5
else u=!1
if(u)C.dG(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){C.dG(900+A.cE.aC(800),"",90,0,0.1,o)
if(A.cE.af()<0.35)C.dG(300+A.cE.aC(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cE.af()<0.4
else u=!1
if(u)C.dG(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)C.dG(330+A.o.F(110*A.k.by(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)C.dG((A.k.by(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)C.dG(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)C.dG(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cE.af()<0.5
else u=!1
if(u)C.dG(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)C.dG(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)C.dG(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.n(new C.bDD())},
b2j(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.K)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.lC.ak(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.z(p,n)
r=i}}}return s},
aXi(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("dy<1>"),w=new B.dy(w,v),w=new B.bU(w,w.gJ(0),v.k("bU<ai.E>")),u=d.a,v=v.k("ai.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.lC.ak(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cvd(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.K)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.lC.ak(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.lC.ak(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.h6G(new B.u(k,n),new B.u(i,l),p)
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
abk(){this.a.toString
this.n(new C.bCN())},
bjn(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cJH[v]
if(!A.d.ba(p.a.c.a,new C.bDE(u,w))){o=new B.u(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?E.GJ:o
s=s?E.GJ:o
q=t.ah4(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.m(0,q.a,0)
p.d=q
p.e=null
C.dG(1200,"",50,0,0.3,"tri")
p.abk()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.On[v].a)
u=w.length
t=u>8
s=t?A.d.dt(w,0,A.o.al(u+1,2)):w
r=t?A.d.fP(w,A.o.al(w.length+1,2)):A.U
q=n.a.d
if(q!=null){w=B.a2(q).k("cv<1>")
w=B.A(new B.cv(q,w),w.k("G.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.K)(w),++v){p=w[v]
o=q.h(0,p)
q.m(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.aX7(s,!0))
n.a.toString
if(t)w.push(n.aX7(r,!0))
w.push(B.D(B.ck(new C.bDB(n,q,m)),1))
return B.v(w,A.m,null,A.e,A.j,0,A.p)},
aX7(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.K)(d),++v){u=d[v]
t=$.pM()
s=t.h(0,u).d.j(0.14)
r=new B.aY(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aG(p,B.p(p,B.v(B.a([new B.x(t.h(0,u).c,p,A.HF,p,p,p,p,p,p,p,p,p),new B.x(t.h(0,u).b,p,A.n_,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.b7,A.j,0,A.p),A.f,p,p,new B.o(s,p,new B.c3(q,q,q,q),new B.bv(r,r,r,r),p,p,A.n),p,p,p,D.Vo,p,p,p,62),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bCO(this,u),p,p,p,p,p,p,!1,A.ad))}return B.p(p,B.cM(m,p,A.h0,p,p,A.b_,!1),A.f,p,p,new B.o(D.Dj,p,new B.c3(A.Z,A.Z,new B.ay(o,1,A.r,-1),A.Z),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aUI(d){var w=null,v=B.m(18)
return B.p(w,d,A.f,w,w,new B.o(D.b_1,w,B.H(A.bG,A.r,1),v,w,w,A.n),w,w,w,w,D.bhr,w,w,w)},
c94(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.pM().h(0,o),m=d.dy,l=d.fr,k=new C.bD6(q,n),j=B.d(n.c,p,p,p,p,p,p,A.Rq,p,p,p),i=n.b,h=n.d,g=x.p
i=B.B(B.a([j,A.aa,B.D(B.d(i,p,p,p,p,p,p,B.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aF(p,p,p,p,D.bzb,p,p,p,new C.bCU(q,d),p,p,p,p,"Remove part",A.c9),B.aF(p,p,p,p,A.M1,p,p,p,new C.bCV(q),p,p,p,p,p,A.c9)],g),A.m,p,A.e,A.j,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,D.HI,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.eKx,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.aa(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.aa(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.aa(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.av,w,A.ar,B.d(m,p,p,p,p,p,p,B.l(p,p,d.x?A.cG:A.aK,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.b7P(d)
if(v!=null){l=(d.x?A.aD:A.aX).j(0.14)
j=B.m(10)
i=B.H((d.x?A.aD:A.aX).j(0.5),A.r,1)
m.push(new B.C(A.i5,B.p(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.eQN,p,p,p),A.f,p,p,new B.o(l,p,i,j,p,p,A.n),p,p,p,p,A.ck,p,p,p),p))}if(C.fIB(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new C.dw("CH "+t,d.at===u,new C.bCW(q,d,u),p,h,p))}l=B.c9(A.bI,l,A.by,4,6)
l=B.a([A.ar,l,A.av,B.d(q.a.c.Bs(d)?"Showing: "+D.O0[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hu,p,p,p)],g)
if(q.a.c.Bs(d))l.push(new C.fd(A.EJ,"Open big screen",new C.bCZ(q,d),h,p))
A.d.v(m,l)}if(D.lC.ak(0,o)&&!C.fIB(o)){l=B.a([A.ar,B.d(q.a.c.Bs(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hu,p,p,p)],g)
if(q.a.c.Bs(d))l.push(new C.fd(A.LM,"Open the "+$.pM().h(0,o).b,new C.bD_(q,d),h,p))
A.d.v(m,l)}if(D.lC.ak(0,o))A.d.v(m,B.a([A.ar,new C.fd(A.AB,"Make it bigger (or tap it 4 times)",new C.bD0(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.aa(d.db,1)
if(q.a.c.Bs(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.ar,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.aa(i,1)+" V",p,p,p,p,p,p,D.eLl,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.cYV[s]
j=r===A.k.jA(r)?A.k.U(r):r
l.push(new C.dw(B.t(j)+" V out",d.e===r,new C.bD1(q,d,r),p,h,p))}i.push(new B.C(A.mH,B.c9(A.bI,l,A.by,0,6),p))}if(o==="regulator")i.push(D.f6F)
A.d.v(m,i)}if(q.a.c.Kc(d)&&!d.x){l=A.k.aa(d.cx,2)
j=A.k.aa(q.a.c.yK(d),2)
i=q.a.c
w=i.akn(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.l(p,p,i.akn(d)?A.cG:A.eE,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.m(4)
w=A.k.E(d.cx/q.a.c.yK(d),0,1)
i=q.a.c.akn(d)?A.aD:A.bg
m.push(new B.C(A.i5,B.v(B.a([l,A.d6,B.bt(j,B.m4(A.bG,p,p,5,p,w,new B.mo(i,x.x)),A.ap)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.U(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.C(A.i5,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.eFB,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.cPO[s]
j=r===1.5?"1.5 V (rechargeable)":B.t(r)+" V"
l.push(new C.dw(j,d.e===r,new C.bD2(q,d,r),p,h,p))}m.push(B.c9(A.bI,l,A.by,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.cHm[s]
j=r>=1000?"1 k\u03a9":""+A.o.U(r)+" \u03a9"
l.push(new C.dw(j,d.r===r,new C.bD3(q,d,r),p,h,p))}m.push(B.c9(A.bI,l,A.by,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bD4(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bD5(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bCX(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bCY(d)))
if(o==="crank")m.push(D.f2w)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hu,p,p,p))
return q.aUI(new B.d1(D.aS1,B.ci(B.v(m,A.F,p,A.e,A.Q,0,A.p),A.q,p,A.z,p,p,p,p,A.ak),p))}}
C.b7w.prototype={}
C.Tf.prototype={
S(){return new C.aAv(C.fOa(),new B.co(null,x.gJ),B.b_(x.S))}}
C.aAv.prototype={
Z(){this.a0()
$.aT.c_$.push(this)
this.abl()},
abl(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fev(),$async$abl)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.hQF(t.d,r)
if(s!=null){t.n(new C.dKs(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$abl,v)},
DK(){var w,v=this
if(!v.as)return
w=C.hHq(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bA3(w)},
iE(d){if(d!==A.fp)this.DK()},
q(){$.aT.hv(this)
this.DK()
this.a2()},
c_B(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("a3<1>")
t=new B.a3(v,new C.dKB(q),u).gJ(0)
s=new B.a3(v,new C.dKC(),u).gJ(0)
r=new B.a3(v,w.gcJG(),u).gJ(0)
if(t!==q.x||s!==q.y||r!==q.z)q.n(new C.dKD(q,t,s,r))}if(A.o.F(q.w,45)===0)q.DK()
if(A.o.F(q.w,10)===0){w=q.f
$.afx()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.afx()[q.f].c.$1(q.d)){w.K(0,q.f)
C.AI("bell",B.a([0,4,7,12],x.t),700,0.45)
q.n(new C.dKE())
q.DK()
w=q.c
w.toString
w=B.Vy(w)
if(w!=null)w.P(B.b1(p,p,p,p,p,A.q,p,B.d("\u2705 Challenge done: "+$.afx()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.lX,p,p,p,p,p,p,p,p,p,p))}},
ae_(){var w=0,v=B.j(x.H),u=this,t
var $async$ae_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ch(null,null,!0,null,new C.dKr(u),t,null,!0,!0,x.H),$async$ae_)
case 2:return B.h(null,v)}})
return B.i($async$ae_,v)},
aUH(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.m(12),t=B.H(f.j(0.45),A.r,1)
u=B.a([B.an(w,B.p(w,B.W(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.an(w,h,w,w,w,-1,-3,w))
return B.aG(w,B.hs(new B.a4(40,38,new B.am(A.W,w,A.a9,A.f,u,w),w),w,e,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.ad)},
c_z(d,e,f,g){return this.aUH(d,e,f,g,null)},
anO(d,e,f,g){var w=null,v=f.j(0.1),u=B.m(10),t=B.H(f.j(0.4),A.r,1)
return B.D(B.aG(w,B.p(w,B.B(B.a([B.W(d,f,w,w,w,15),A.et,new B.dm(1,A.cl,B.d(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b7,A.j,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.ad),1)},
aci(){var w=0,v=B.j(x.H),u=this,t
var $async$aci=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a9(t,!1).cp(B.eF(new C.dKn(u),!1,null,x.H)),$async$aci)
case 2:t=u.e.gbb()
if(t!=null)t.b9P()
if(u.c!=null)u.n(new C.dKo())
u.DK()
return B.h(null,v)}})
return B.i($async$aci,v)},
bzo(){var w,v,u,t,s=null,r=this.f
$.afx()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bl:A.aD
u=B.m(9)
t=B.H(D.Dj,A.r,1.5)
return B.p(s,B.au(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.yC,s,s,s),s,s,s),A.f,s,D.aS8,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eV,s,s,s)},
af5(){var w=0,v=B.j(x.H),u=this,t
var $async$af5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.c1(D.Jr,null,new C.dKA(u),t,!0,!0,!0,A.yl,!1,!1,x.H),$async$af5)
case 2:return B.h(null,v)}})
return B.i($async$af5,v)},
c_C(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aG(r,B.p(r,D.bAp,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dKF(d),r,r,r,r,r,r,!1,A.ad),o=B.m(11)
o=B.p(r,D.aXz,A.f,r,r,new B.o(A.bj,r,B.H(A.aY.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.v(B.a([B.B(B.a([p,A.aa,o,A.aa,B.D(B.v(B.a([D.f4U,B.d(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.fi:A.fY,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new C.auH(s.gc5d(),r),A.r_,s.aUH(A.l2,"Challenges",A.aK,s.gclK(),s.bzo()),s.c_z(A.LG,"How to play",A.aY,new C.dKG(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.ar,B.B(B.a([s.anO(A.pi,"Circuits",A.bA,s.gceR()),A.bq,s.anO(A.x2,"Repair",A.aK,new C.dKH(s)),A.bq,s.anO(D.x4,"Clear",A.cG,new C.dKI(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new B.o(D.Dj,r,new B.c3(A.Z,A.Z,new B.ay(q,1,A.r,-1),A.Z),r,r,r,A.n),r,r,r,r,D.bme,r,r,r)},
B(d){var w=this,v=null
$.aZA="tech"
return B.ce(v,A.bW,B.bp(!0,B.v(B.a([w.c_C(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.D(C.fN5(w.d,w.e,w.gc_A(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.auH.prototype={
S(){return new C.b5I(null,null)}}
C.b5I.prototype={
gatL(){var w,v=this,u=v.d
if(u===$){w=B.bi(null,A.S,null,1,null,v)
w.cE(0)
v.d!==$&&B.bK()
v.d=w
u=w}return u},
q(){this.gatL().q()
this.bnP()},
B(d){var w=null,v=this.a.c
return B.aG(w,B.hs(new B.a4(42,42,B.c4(this.gatL(),new C.cw6(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.ad)}}
C.b5H.prototype={
a4(d,e){var w,v,u,t=null,s=e.e9(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.V()
w=B.L()
w.r=A.b1.j(0.25+0.15*o).gp(0)
w.z=G.me
d.ae(s,r+2+o*2,w)
w=B.L()
w.sar(D.dX0.av(0,B.bS(s,r)))
d.ae(s,r,w)
v=B.L()
v.b=A.ae
v.c=2.2
v.sar(new B.fN(A.A,0,6.283185307179586,A.x,D.czv,t,new B.m2(p)).av(0,B.bS(s,r)))
d.ae(s,r,v)
p=new C.cw5(d)
p.$3(s.ao(0,A.qR),8+o*1.5,1)
q*=4
p.$3(s.ao(0,D.dNB),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ao(0,D.dPr),2.6,0.5+0.5*Math.cos(q))
u=B.id(t,t,t,t,D.eCt,A.a5,A.ch,t,A.em,A.cg)
u.eU()
u.a4(d,s.ao(0,new B.u(-u.b.c/2,5)))},
ap(d){return d.b!==this.b}}
C.av_.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.av0.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
w=this.fc$
w===$&&B.c()
w.q()
this.bmy()}}
C.aGO.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.btr.prototype={}
C.fF.prototype={}
C.uw.prototype={}
C.wK.prototype={}
C.HT.prototype={
a3(){return"ScreenStyle."+this.b}}
C.lO.prototype={}
C.SX.prototype={
S(){return new C.bg1(null,null)}}
C.bg1.prototype={
ga6P(){var w,v=this,u=v.d
if(u===$){w=B.bi(null,A.ns,null,1,null,v)
w.cm(0)
v.d!==$&&B.bK()
v.d=w
u=w}return u},
q(){this.ga6P().q()
this.bpF()},
gQ5(){var w=this.ga6P().y
w=w==null?null:A.o.al(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.lC.h(0,this.a.c)
if(v==null)v=D.aHz
return B.ce(w,N.JC,B.bp(!0,new B.am(A.W,w,A.a9,A.q,B.a([B.au(v.b===D.yo?this.bBx(v):this.cbO(v),w,w,w),B.an(w,B.aF(w,w,w,w,A.m9,w,w,w,new C.dGo(d),w,w,w,B.nc(w,A.aU,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.an(6,B.au(B.d(v.a,w,w,w,w,w,w,D.eE0,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)},
c_D(d){var w
A:{if(D.H5===d){w=0.46153846153846156
break A}if(D.tL===d){w=0.45
break A}if(D.vl===d){w=0.9259259259259258
break A}if(D.Qs===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
cbO(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.H5
A:{if(D.H5===p){w=44
break A}if(D.tL===p){w=30
break A}if(D.vl===p){w=22
break A}if(D.Qs===p){w=26
break A}w=14
break A}v=B.c4(this.ga6P(),new C.dGn(this,w,d,o),q)
if(p===D.a39)v=new B.Cl(D.bmP,v,q)
p=this.c_D(p)
u=o?4:5
t=d.c
s=B.aq(t,A.c,o?0.25:0.08)
s.toString
r=B.aq(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.m(w)
s=B.a([new B.ab(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new B.fC(p,B.p(q,B.p(q,v,A.f,q,q,new B.o(A.w,q,q,B.m(w-3),q,q,A.n),q,q,q,q,W.Eg,q,q,q),A.f,q,q,new B.o(q,q,q,t,s,new B.a5(A.ax,A.aC,A.x,r,q,q),A.n),q,q,q,D.bgv,new B.N(u,u,u,u),q,q,q),q)},
b1y(d){var w,v,u,t=null,s=new B.Q(Date.now(),0,!1),r=A.o.E(this.a.d+A.k.by(this.gQ5()*0.4),0,100),q=d.b===D.H5,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.aU(A.o.u(B.dj(s)),2,"0")+":"+A.a.aU(A.o.u(B.fY(s)),2,"0"),t,t,t,t,t,t,A.vt,t,t,t),A.b8],x.p)
for(w=0;w<4;++w){v=new B.aY(1,1)
n.push(B.p(t,t,A.f,t,t,new B.o(A.c,t,t,new B.bv(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bmx,t,t,t,3))}n.push(A.d8)
n.push(D.eZk)
n.push(A.bq)
v=B.H(A.af,A.r,1)
u=B.m(4)
n.push(B.p(t,new B.bI(A.a3,t,t,B.CM(A.A,B.p(t,t,A.f,t,t,new B.o(A.bg,t,t,B.m(2),t,t,A.n),t,t,t,W.Eg,t,t,t,t),t,r/100),t),A.f,t,t,new B.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.tN)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.eR5,t,t,t))
return new B.C(new B.N(p,12,o,2),B.B(n,A.m,t,A.e,A.j,0,t,t),t)},
arU(d,e,f){var w,v=null,u=d.d,t=B.aq(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.m(e*0.26)
w=x.p
t=B.a([B.p(v,B.au(B.d(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.cUN,new B.a5(A.ax,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,B.a([A.av,B.d(d.a,v,1,A.a2,v,v,v,D.eIf,v,v,v)],w))
return B.aG(v,B.v(t,A.m,v,A.e,A.Q,0,A.p),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dGj(this,d),v,v,v,v,v,v,!1,A.ad)},
bS6(d,e){return this.arU(d,e,!0)},
bRR(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.Qs||n===D.vl,l=d.d,k=B.aq(l,A.w,0.55)
k.toString
l=B.aq(l,A.kt,0.5)
l.toString
l=B.a([k,A.dt,l],x.O)
k=p.b1y(d)
w=m?190:138
v=B.m(24)
u=B.H(A.ba,A.r,1)
w=B.aG(o,B.p(o,B.bt(B.m(23),B.b2(o,o,o,new C.acq(0,p.gQ5(),o),A.f2),A.ap),A.f,o,o,new B.o(o,o,u,v,o,o,A.n),o,w,o,A.it,o,o,o,o),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dGh(p),o,o,o,o,o,o,!1,A.ad)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<9;++s){r=D.nG[s]
t.push(new B.cy(A.A,o,o,p.bS6(r,m?58:54),o))}k=B.a([k,A.ar,w,A.ab,B.D(B.lJ(0.92,t,v,8,12,A_.ut,o,!1),1)],u)
if(n!==D.a39){n=A.c.j(0.16)
w=B.m(28)
u=B.a([],u)
for(v=B.dc(D.nG,0,B.dH(4,"count",x.S),x.gD),t=v.$ti,v=new B.bU(v,v.gJ(0),t.k("bU<ai.E>")),t=t.k("ai.E");v.C();){q=v.d
u.push(p.arU(q==null?t.a(q):q,50,!1))}k.push(B.p(o,B.B(u,A.m,o,A.ps,A.j,0,o,o),A.f,o,o,new B.o(n,o,o,w,o,o,A.n),o,o,o,D.bho,I.aet,o,o,o))}return B.p(o,B.v(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new B.o(o,o,o,o,o,new B.a5(A.ax,A.aC,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bv8(d,e){var w=null
return B.p(w,B.v(B.a([this.b1y(d),B.D(B.b2(w,w,w,new C.acq(e,this.gQ5(),w),A.f2),1),B.aG(w,B.p(w,B.au(B.d(D.nG[e].a,w,w,w,w,w,w,A1.Ht,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dGc(this),w,w,w,w,w,w,!1,A.ad)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bBx(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.aq(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.m(r?26:14)
u=B.a([new B.ab(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new B.fC(1.5384615384615383,B.p(t,B.c4(this.ga6P(),new C.dGf(this,r,d),t),A.f,t,t,new B.o(t,t,t,v,u,new B.a5(A.ax,A.aC,A.x,w,t,t),A.n),t,t,t,D.bm8,new B.N(8,8,8,s),t,t,t),t)}}
C.brw.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.V()
w=B.L()
v=this.c
u=B.aq(v,A.w,0.6)
u.toString
t=B.aq(v,A.kt,0.4)
t.toString
w.sar(new B.a5(A.ax,A.aC,A.x,B.a([u,A.dt,t],x.O),null,null).av(0,new B.a7(0,0,n,m)))
d.aW(new B.a7(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
r.r=v.j(0.1).gp(0)
r.z=D.d6Z
q=r.G()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
ap(d){return!0}}
C.acq.prototype={
a4(d,e){return C.h5M(d,e,this.b,this.c)},
ap(d){return!0}}
C.aIA.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.wZ.prototype={}
C.Ux.prototype={
S(){return new C.aBL(null,null)}}
C.aBL.prototype={
gabn(){var w,v=this,u=v.d
if(u===$){w=B.bi(null,A.ns,null,1,null,v)
w.cm(0)
v.d!==$&&B.bK()
v.d=w
u=w}return u},
gCb(){var w=this.e
return w===$?this.e=this.a.d:w},
Z(){var w=this
w.a0()
w.w=B.cP(w.a.f,w.gaUJ())
w.aRc()
C.dG(520,"",80,0,0.25,"tri")},
aRc(){var w=this.z
if(w!=null)w.a9(0)
this.z=B.cP(A.k6,new C.erl(this))},
c_E(){var w=this.c
if(w!=null&&B.a9(w,!1).oP()){w=this.c
w.toString
B.a9(w,!1).M(this.gCb())}},
agg(){var w=this,v=w.w
if(v!=null)v.a9(0)
w.w=null
w.y=!0
w.aRc()},
atM(d){this.n(new C.erj(this,d))
C.dG(900,"",40,0,0.3,"noise")},
aWs(d){this.n(new C.erm(this,d))
C.dG(700,"",60,0,0.3,"tri")},
q(){var w=this,v=w.w
if(v!=null)v.a9(0)
v=w.z
if(v!=null)v.a9(0)
w.gabn().q()
w.bqE()},
B(d){var w,v,u,t,s=this,r=null,q=B.m(10),p=B.H(A.cz,A.r,6),o=B.a([new B.ab(0,A.G,A.aY.j(0.25),A.J,40)],x.V),n=B.m(4),m=x.p,l=B.a([B.c4(s.gabn(),new C.eru(s),r)],m)
if(s.r)l.push(s.bvU())
q=B.au(new B.fC(1.7777777777777777,B.p(r,B.bt(n,new B.am(A.W,r,A.aZ,A.q,l,r),A.ap),A.f,r,r,new B.o(r,r,p,q,o,r,A.n),r,r,r,r,r,r,r,r),r),r,r,r)
p=s.y
o=p?1:0
n=B.nc(r,A.aU,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
n=B.aF(r,r,r,r,B.W(A.cv,A.c,r,r,r,r),r,r,r,s.gaUJ(),r,r,r,n,"Back to the board",r)
l=B.m(20)
w=s.f
v=s.a
n=B.B(B.a([n,A.b8,B.p(r,B.d(w>=0?v.c+" \xb7 "+D.nG[w].a:v.c+" \xb7 CH "+(s.gCb()+1),r,r,r,r,r,r,I.a4o,r,r,r),A.f,r,r,new B.o(A.aU,r,r,l,r,r,A.n),r,r,r,r,A.m_,r,r,r)],m),A.m,r,A.e,A.j,0,r,r)
l=s.cg5()
w=A.w.j(0.65)
v=B.m(18)
u=s.f
u=B.d(u>=0?D.nG[u].a:D.O0[s.gCb()].a,r,r,r,r,r,r,A.jb,A.L,r,r)
t=s.f
return B.ce(r,A.w,B.bp(!0,B.aG(A.c5,new B.am(A.W,r,A.aZ,A.q,B.a([q,B.C6(B.e1(B.v(B.a([new B.C(D.bgm,n,r),A.ar,l,A.b8,B.p(r,B.v(B.a([u,B.d(t>=0?D.nG[t].c:D.O0[s.gCb()].b,r,r,r,r,r,r,P.aKK,A.L,r,r)],m),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new B.o(w,r,r,v,r,r,A.n),r,r,r,A.bm,A.bU,r,r,r)],m),A.m,r,A.e,A.j,0,A.p),!p,r),A.b9,A.i4,o)],m),r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.erv(s),r,r,r,r,r,r,!1,A.ad),!0,!1,A.ag,!0,!0),r,!1,!1,r,r)},
cg5(){var w=this,v=null,u=new C.ert(),t=A.w.j(0.72),s=B.m(22),r=B.H(A.aY.j(0.5),A.r,1)
return B.p(v,B.B(B.a([u.$3(A.AD,"CH \u2212",new C.ero(w)),u.$3(A.hE,"CH +",new C.erp(w)),u.$5$color$on(A.EN,"TV",new C.erq(w),A.aY,w.f<0),u.$5$color$on(A.Ap,"APPS",new C.err(w),A.bA,w.r),u.$5$color$on(A.As,"ADS",new C.ers(w),A.bX,w.f===0)],x.p),A.m,v,A.e,A.Q,0,v,v),A.f,v,v,new B.o(t,v,r,s,v,v,A.n),v,v,v,v,A.Wg,v,v,v)},
bvU(){var w=null,v=A.w.j(0.9)
return B.aG(w,B.p(w,B.v(B.a([D.f0O,A.av,B.D(B.i8(!0,w,w,A.z,D.ew8,new C.erh(this),9,A.ag,w,A.ak,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,v,w,w,w,w,w,w,A.kB,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eri(this),w,w,w,w,w,w,!1,A.ad)}}
C.bqX.prototype={
a4(d,e){var w=this
return C.fKt(d,e,w.b,w.d,w.e,w.c)},
ap(d){return!0}}
C.aJx.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.aTo.prototype={}
C.TL.prototype={
S(){return new C.bgB(B.T(x.S,x.N),A.at,B.a([],x.E),$,A.bw,0,B.a([],x.X),null,null)}}
C.bgB.prototype={
guH(){var w=this.f
return w===$?this.f=C.fIH(0):w},
Z(){this.a0()
this.kM()
C.yF("laser_maze").bz(new C.dZE(this),x.P)},
l4(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new B.z(u.a,t)
if(t>0.8)A.d.cu(w,v)}this.n(new C.dZF())},
abp(d){var w=this
w.n(new C.dZu(w,d))
C.vi("laser_maze",B.E(["best",w.e,"level",w.d],x.N,x.z))},
c_R(d){var w,v,u,t,s,r,q,p,o=this
if(o.x)return
w=o.y
v=w.ge8()/7
u=v*7
t=(w.a-u)/2
s=A.k.E((w.b-u)/2,8,300)
r=A.k.by((d.a-t)/v)
q=A.k.by((d.b-s)/v)
if(r<0||q<0||r>=7||q>=7)return
p=q*7+r
if(o.guH().b.t(0,p)||p===o.guH().e||o.guH().d.ak(0,p))return
o.n(new C.dZv(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=B.ck(new C.dZy(t,C.h6B(t.guH(),t.r))),q=x.p,p=B.a([new C.dw("Clear mirrors",!1,new C.dZz(t),A.jL,A.aK,s),new C.dw("Skip",!1,new C.dZA(t),D.btg,A.aY,s)],q)
if(t.d>0)p.push(new C.dw("Back",!1,new C.dZB(t),D.bth,A.aY,s))
w=B.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new C.dw(""+u,v===t.d,new C.dZC(t,v),s,A.aD,s))}return C.jx(A.aD,A.h2,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",B.v(B.a([new C.eH(p,s,s),new C.eH(w,"LEVEL",s)],q),A.m,s,A.e,A.Q,0,A.p))}}
C.bdE.prototype={
a4(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.ge8()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.E((b0.b-a4)/2,8,300),a7=new C.dai(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=B.bx(new B.a7(a5,a6,a8,a4),A.kf)
v=$.V()
u=B.L()
u.r=I.o4.gp(0)
a9.aA(w,u)
for(w=a9.a,t=0;t<=7;++t){u=t*a3
s=a5+u
r=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
r.r=A.dw.gp(0)
q=r.G()
w.drawLine.apply(w,[s,a6,s,a4,q])
q.delete()
u=a6+u
s=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
s.r=A.dw.gp(0)
q=s.G()
w.drawLine.apply(w,[a5,u,a8,u,q])
q.delete()}for(a4=a1.b,a8=a4.b,a8=B.eg(a8,a8.r,B.a2(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=B.bx(B.cr(p,u,u),A.h6)
o=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
o.sar(D.bKp.av(0,B.cr(p,a3,a3)))
q=o.G()
w.drawRRect(B.ex(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=B.a([],x.v)
n=new B.aO(v.r,A.ao,a2,a2,u)
n.D(new B.b4(a7.$1(A.d.gL(a8)).a,a7.$1(A.d.gL(a8)).b))
for(a8=B.dc(a8,1,a2,B.U(a8).c),v=a8.$ti,a8=new B.bU(a8,a8.gJ(0),v.k("bU<ai.E>")),v=v.k("ai.E");a8.C();){s=a8.d
if(s==null)s=v.a(s)
s=new B.ao(a7.$1(s).a,a7.$1(s).b)
u.push(s)
r=n.f
if(r!=null)s.bx(r)
s=n.e
if(s!=null)s.a.delete()
n.e=null}$.V()
a8=B.L()
a8.b=A.ae
a8.c=14
a8.e=A.fu
a8.r=A.aD.j(0.28+0.08*Math.sin(a1.f*12)).gp(0)
a8.z=A.l9
a9.aL(n,a8)
a8=B.L()
a8.b=A.ae
a8.c=4
a8.e=A.fu
a8.r=D.aa9.gp(0)
a9.aL(n,a8)
a8=B.L()
a8.b=A.ae
a8.c=1.6
a8.e=A.fu
a8.r=A.c.gp(0)
a9.aL(n,a8)}for(a8=a4.c,a8=B.eg(a8,a8.r,B.a2(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.t(0,m)
if(l){m=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
m.r=A.aK.j(0.5).gp(0)
m.z=A.Be
q=m.G()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
m.r=(l?A.aK:A.bu).gp(0)
q=m.G()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?A.c:A.az
i=new B.kM(new B.en("\u2605",a2,a2,A.cS,a2,a2,a2,a2,a2,a2,new B.F(!0,j,a2,a2,a2,a2,v,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a5,A.ch,new B.jL(1),a2,a2,a2,a2,A.cg,a2)
i.eU()
j=i.b
h=j.c
j=j.a.c
i.a4(a9,new B.u(m-h/2,k-j.gbc(j)/2))}g=new C.dal(a7,a3,a9)
a1.c.bG(0,new C.daj(g))
a4.d.bG(0,new C.dak(g))
f=a7.$1(a4.e)
a4=B.bx(B.cr(f,o,a3*0.8),A.h6)
a8=B.L()
a8.r=A.aD.gp(0)
a9.aA(a4,a8)
v=f.ao(0,new B.u(v,0))
a8=B.L()
a8.r=A.c.gp(0)
a9.ae(v,5,a8)
for(a4=a1.r,a8=a4.length,e=0;e<a4.length;a4.length===a8||(0,B.K)(a4),++e){d=a4[e]
a0=d.b/0.8
v=d.a
u=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
u.b=A.ae
s=1-a0
u.c=4*s
u.r=A.aK.j(s).gp(0)
q=u.G()
w.drawCircle(v.a,v.b,a3*(0.3+a0),q)
q.delete()}},
ap(d){return!0}}
C.TN.prototype={
S(){var w=x.n
return new C.aB8(A.cE,B.a([1,0.5,0],w),B.a([0,0,0],w),$,A.bw,0,B.a([],x.X),null,null)}}
C.aB8.prototype={
Z(){this.a0()
this.kM()
C.yF("light_mixer").bz(new C.dZX(this),x.P)},
l4(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aUK()
w.n(new C.dZY())},
atO(){var w,v,u=this,t=B.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aC(5)/4)
u.e=t
if(A.d.ea(t,new C.dZI()))u.e[w.aC(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aUK(){var w,v,u=this
if(u.z!=="play")return
w=A.k.U(A.k.E(1-C.h2_(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
C.vl(v,A.o.al(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
C.vi("light_mixer",B.E(["best",v],x.N,x.z))}}else u.z="result"},
gcqu(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=B.E(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cBi[A.o.F(A.k.U(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=B.ck(new C.dZR(v,C.h2_(v.e,t))),r=t[0]
r=C.hr(A.aD,""+A.k.U(r*100)+"%","Red",1,0,new C.dZS(v),r)
w=t[1]
w=C.hr(A.bl,""+A.k.U(w*100)+"%","Green",1,0,new C.dZT(v),w)
t=t[2]
return C.jx(A.b6,A.h2,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",B.v(B.a([r,w,C.hr(A.d3,""+A.k.U(t*100)+"%","Blue",1,0,new C.dZU(v),t),new B.bI(A.a7,u,u,new C.fd(A.hr,"Lock it in",new C.dZV(v),A.bg,u),u)],x.p),A.m,u,A.e,A.Q,0,A.p))}}
C.bdT.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=B.bx(new B.a7(0,0,n,m),A.pC)
$.V()
w=B.L()
w.r=A.w.gp(0)
d.aA(l,w)
w=d.a
J.by(w.save())
w.clipRRect(B.ex(B.bx(new B.a7(0,0,n,m),A.pC)),$.p0(),!0)
v=e.ge8()*0.3
u=e.e9(A.J)
l=-v*0.55
t=v*0.45
s=[u.ao(0,new B.u(0,l)),u.ao(0,new B.u(l,t)),u.ao(0,new B.u(v*0.55,t))]
r=[A.D6,F.a9n,F.a9I]
d.kK(new B.a7(0,0,n,m),B.L())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
p.a=A.n8
p.r=r[q].j(l[q]).gp(0)
o=p.G()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=B.bx(new B.a7(0,0,n,m),A.pC)
m=B.L()
m.b=A.ae
m.c=2
m.r=A.ba.gp(0)
d.aA(n,m)},
ap(d){return!0}}
C.aJ1.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.btw.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
w=this.fc$
w===$&&B.c()
w.q()
this.bq8()}}
C.aJ2.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.btx.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
w=this.fc$
w===$&&B.c()
w.q()
this.bq9()}}
C.bql.prototype={}
C.a6i.prototype={
B(d){var w=null
return B.ce(B.eC(w,w,w,!0,!0,D.aah,w,1,!0,w,0,!1,w,!1,w,w,B.aF(w,w,w,w,D.aiN,w,w,w,new C.caV(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fcL,w,w,w,1,w,!0),D.aah,B.cM(B.a([D.dQA,B.ck(new C.caW())],x.p),w,D.biq,w,w,A.ak,!1),w,!1,!1,w,w)}}
C.UC.prototype={
S(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aBX(w,new B.ar(A.as,$.av()),$,A.bw,0,B.a([],x.X),null,null)}}
C.aBX.prototype={
Z(){this.a0()
this.kM()},
b_D(d){var w=this.d.length
return A.o.F(A.k.by(A.k.F(A.k.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
l4(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b_D(v.f)
if(w!==v.x){v.x=w
C.l2("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.n(new C.evt(v))
C.AI("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
c0O(){if(this.d.length<2)return
this.n(new C.evp(this))},
aV6(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.n(new C.evo(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc0N(),p=s.d,o=B.D(B.aG(r,B.b2(r,r,r,new C.brI(p,s.f,r),A.f2),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.ad),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.v(B.a([o,new B.a4(r,40,B.au(B.d(n,r,r,r,r,r,r,D.ePk,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.asd[A.o.F(v,8)].j(0.9)
t=new B.aY(20,20)
o.push(B.aG(r,B.p(r,new B.x(p[v],r,D.eOB,r,r,r,r,r,r,r,r,r),A.f,r,r,new B.o(u,r,r,new B.bv(t,t,t,t),r,r,A.n),r,r,r,A.ho,A.ha,r,r,r),A.z,!1,r,r,r,r,r,r,r,new C.evr(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.ad))}p=A.c.j(0.07)
return C.jx(A.aK,A.h2,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.v(B.a([new C.eH(o,r,r),B.B(B.a([B.D(B.aK(r,A.U,!1,r,!0,A.q,r,B.aL(),s.e,r,r,r,r,r,2,B.bn(r,new B.b3(4,B.m(14),A.Z),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kl,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.z,!0,r,!0,r,!1,r,A.ai,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.evs(s),r,!1,r,r,!1,r,!0,r,A.a8,r,r,r,r,r,r,r,r,r,r,r,A.dj,!0,A.a5,r,A.am,r,r,r,r),1),A.aa,new C.fd(A.hE,"Add",s.gc0L(s),A.c,r),A.bq,new C.fd(A.m3,"Spin",q,A.bg,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.Q,0,A.p))}}
C.brI.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new B.u(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.V()
w=B.L()
w.r=D.b1C.gp(0)
a1.ae(d,f,w)
w=B.L()
w.b=A.ae
w.c=3
w.r=A.aK.gp(0)
a1.ae(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=B.bS(d,a0)
n=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
n.r=D.asd[A.o.F(q,8)].gp(0)
m=n.G()
n=p*57.29577951308232
f.drawArc.apply(f,[B.c2(o),n,s,!0,m])
m.delete()
o=B.bS(d,a0)
l=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
l.b=A.ae
l.c=2
l.r=A.c.j(0.6).gp(0)
m=l.G()
f.drawArc.apply(f,[B.c2(o),n,s,!0,m])
m.delete()
J.by(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.an(o,0,11)+"\u2026"
k=new B.kM(new B.en(o,i,i,A.cS,i,i,i,i,i,i,D.eDg),A.a5,A.ch,new B.jL(1),i,i,i,i,A.cg,i)
k.eU()
o=k.b
n=o.c
o=o.a.c
k.a4(a1,new B.u(a0-n-16,-o.gbc(o)/2))
f.restore()}f=B.L()
f.r=D.aa3.gp(0)
a1.ae(d,20,f)
f=B.L()
f.b=A.ae
f.c=3
f.r=A.aK.gp(0)
a1.ae(d,20,f)
j=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
e-=a0
j.D(new B.b4(g,e+26))
e-=10
j.D(new B.ao(g-14,e))
j.D(new B.ao(g+14,e))
j.D(new B.bD())
e=B.L()
e.r=A.c.gp(0)
a1.aL(j,e)
e=B.L()
e.b=A.ae
e.c=2
e.r=A.aU.gp(0)
a1.aL(j,e)},
ap(d){return!0}}
C.Tm.prototype={
S(){return new C.bga($,A.bw,0,B.a([],x.X),null,null)}}
C.bga.prototype={
Z(){this.a0()
this.kM()},
l4(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.AI("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.a2N(900,new C.dME())}w.n(new C.dMF())},
aV8(d){return this.n(new C.dMz(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aU(A.o.u(A.k.al(m,60)),2,"0")
v=A.a.aU(A.o.u(A.o.F(A.k.dE(m),60)),2,"0")
m=B.b2(n,n,n,new C.bmC(l,A.cG,n),A.aIK)
u=B.d(w+":"+v,n,n,n,n,n,n,D.eHi,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.au(new B.a4(280,280,new B.am(A.A,n,A.a9,A.q,B.a([m,B.v(B.a([u,B.d(t,n,n,n,n,n,n,D.eGo,n,n,n),A.av,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.C6,n,n,n)],s),A.m,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.cSg[r]
u.push(new C.dw(""+q+" min",o.d===q,new C.dMB(o,q),n,A.cG,n))}m=o.f
p=m?V.xd:A.iO
m=m?"Pause":"Start"
return C.jx(A.cG,A.h2,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.v(B.a([new C.eH(u,n,n),new C.eH(B.a([new C.fd(p,m,new C.dMC(o),A.bg,n),new C.fd(A.jL,"Reset",new C.dMD(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.Q,0,A.p))}}
C.bmC.prototype={
a4(d,e){var w,v,u,t,s=e.e9(A.J),r=e.a/2-14
$.V()
w=B.L()
w.b=A.ae
w.c=16
w.r=A.c.j(0.08).gp(0)
d.ae(s,r,w)
w=B.bS(s,r)
v=B.L()
v.b=A.ae
v.c=16
v.d=A.bO
u=this.c
t=B.aq(u,A.c,0.4)
t.toString
v.sar(new B.fN(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).av(0,B.bS(s,r)))
d.fa(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
ap(d){return d.b!==this.b}}
C.Sz.prototype={
S(){return new C.bfP($,A.bw,0,B.a([],x.X),null,null)}}
C.bfP.prototype={
Z(){this.a0()
this.kM()},
l4(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.P_.h(0,p.d)
w.toString
v=A.d.fv(w,new C.dya())
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
C.l2("flute",D.bL_[t]+5,1400,0.35)}p.n(new C.dyb())},
gc0R(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.IK("Press Start",0.5)
w=D.P_.h(0,this.d)
w.toString
v=A.d.fv(w,new C.dy5())
u=A.k.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.IK("Breathe in",0.5+0.5*A.dH.au(0,p))
case 1:return new B.IK("Hold",1)
case 2:return new B.IK("Breathe out",1-0.5*A.dH.au(0,p))
default:return new B.IK("Hold",0.5)}}}return new B.IK("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc0R(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hn.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ab(0,A.G,A.hn.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.Ce,q,q,q))
n.push(B.an(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kl,q,q,q),q,q,q,q,q,q))
n=B.au(new B.a4(300,340,new B.am(A.A,q,A.a9,A.q,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aU(D.P_.gec(D.P_));w.C();){v=w.gT(w)
o.push(new C.dw(v,r.d===v,new C.dy8(r,v),q,A.hn,q))}w=r.e
v=w?A.Yr:A.iO
w=w?"Stop":"Start"
o.push(new C.fd(v,w,new C.dy9(r),A.bg,q))
return C.jx(A.hn,A.h2,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new C.eH(o,q,q))}}
C.aFi.prototype={}
C.Td.prototype={
S(){return new C.bg4(new B.co(null,x.A),B.a([],x.au),A.aE,A.c)}}
C.bg4.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aF(s,s,s,s,D.ma,s,s,s,new C.dJX(t,d),s,s,s,s,"Share",s)],r),p=B.bt(B.m(18),new B.eq(B.aG(s,B.b2(s,s,s,new C.bi5(t.e,t.x,s),A.f2),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dJY(t),new C.dJZ(t),s,s,s,s,s,s,s,s,s,new C.dK_(t),s,s,s,s,!1,A.ad),t.d),A.ap),o=B.a([],r)
for(w=0;w<9;++w){v=D.cAJ[w]
u=!t.w&&t.f.A(0,v)
o.push(new C.E6(v,u,new C.dK0(t,v),!1,s))}u=t.r
return C.jx(A.bx,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.C(A.bU,p,s),"DRAW PAD",B.v(B.a([new C.eH(o,s,s),C.hr(A.bx,""+A.k.U(u),"Brush",30,2,new C.dK1(t),u),new C.eH(B.a([new C.dw("Eraser",t.w,new C.dK2(t),A.Lr,A.bx,s),new C.fd(A.uS,"Undo",new C.dK3(t),A.c,s),new C.fd(A.e8,"Clear",new C.dK4(t),A.c,s),new C.fd(A.LC,"Paper",new C.dK5(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.Q,0,A.p))}}
C.bi5.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.V()
w=B.L()
w.r=this.c.gp(0)
d.aW(new B.a7(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,B.K)(w),++s){r=w[s]
q=$.V()
p=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bO
p.e=A.fu
p.b=A.ae
m=r.c
if(m.length===1){q=A.d.gL(m)
m=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
m.r=o.gp(o)
l=m.G()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=B.a([],t)
k=new B.aO(q.r,A.ao,null,null,o)
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
l=p.G()
q=k.e
u.drawPath((q==null?k.e=new B.cE(k.gbL().a.snapshot()):q).a,l)
l.delete()}}},
ap(d){return!0}}
C.TZ.prototype={
S(){var w=x.S
return new C.aBi(B.b_(w),B.b_(w))}}
C.aBi.prototype={
Z(){this.a0()
this.apf()},
apf(){var w,v,u=this,t=x.N,s=B.bj(D.cWj,!0,t)
A.d.BJ(s)
w=x.S
v=B.U(s).c
t=B.A(B.dc(s,0,B.dH(u.d,"count",w),v),t)
A.d.v(t,B.dc(s,0,B.dH(u.d,"count",w),v))
A.d.BJ(t)
u.e=t
u.f.a7(0)
u.r.a7(0)
u.w=0
u.x=!1},
c0M(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
C.l2("bell",12+A.o.F(d,9),150,0.35)
s.n(new C.e44(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gL(0)
u=w.gaj(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bN(A.mF,new C.e45(s,v,u),t)
else{s.x=!0
B.bN(A8.DV,new C.e46(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.aKY,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.al(p,2)+" / "+o
o=x.p
p=B.v(B.a([new B.C(A.wE,B.B(B.a([u,B.d(p,q,q,q,q,q,q,B.l(q,q,w?A.aK:A.af,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hG,A.j,0,q,q),q),B.D(B.i8(!0,q,q,A.z,new B.hK(v,8,8,1,q),new C.e4a(r),r.e.length,A.bm,q,A.ak,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.cC5[t]
o.push(new C.dw(s.b,r.d===s.a,new C.e4b(r,s),q,A.aY,q))}o.push(new C.fd(D.bte,"New game",new C.e4c(r),A.bg,q))
return C.jx(A.aY,A.h2,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new C.eH(o,q,q))}}
C.Ua.prototype={
S(){return new C.aBB(B.a([],x.t))}}
C.aBB.prototype={
c0Q(d){A.d.a7(this.d)
this.w=!0
this.aV7()},
aV7(){this.d.push(A.cE.aC(4))
this.e=0
this.XR()},
XR(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$XR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.n(new C.ecz(t))
s=x.H
w=3
return B.b(B.bN(A.lr,null,s),$async$XR)
case 3:r=t.d,q=B.bj(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aOQ(n)
w=7
return B.b(B.bN(new B.b8(1000*Math.max(280,600-r.length*18)),null,s),$async$XR)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.n(new C.ecA(t))
case 1:return B.h(u,v)}})
return B.i($async$XR,v)},
aOQ(d){this.n(new C.ecx(this,d))
C.l2("marimba",D.akm[d]+5,450,0.55)
B.bN(A.DS,new C.ecy(this),x.H)},
c0S(d){var w,v,u=this
if(!u.w||u.r)return
u.aOQ(d)
w=u.d
v=u.e
if(w[v]!==d){C.dG(90,"",600,0,0.5,"saw")
u.n(new C.ecB(u))
return}++v
u.e=v
if(v===w.length){u.n(new C.ecC(u))
B.bN(A.ir,new C.ecD(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,E.Rv,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.ePI,A.L,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.arc[v]
u=u.j(q.f===v?1:0.35)
t=new B.aY(28,28)
s=q.f===v?B.a([new B.ab(0,A.G,D.arc[v].j(0.8),A.J,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aG(p,B.dg(p,p,p,p,A.b9,new B.o(u,p,new B.c3(r,r,r,r),new B.bv(t,t,t,t),s,p,A.n),A.jj,p,p,p,p,p,p,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.ecE(q,v),p,p,p,p,p,p,!1,A.ad))}o=B.au(new B.C(A.a8,B.v(B.a([o,A.ar,n,A.d5,new B.fC(1,B.lJ(1,l,2,12,12,p,A.dM,!1),p)],m),A.m,p,A.b7,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return C.jx(A.cu,A.h2,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new C.eH(B.a([new C.fd(A.iO,n,q.gc0P(q),A.bg,p)],m),p,p))}}
C.Uv.prototype={
S(){return new C.bhi(new B.ar(A.as,$.av()))}}
C.bhi.prototype={
asJ(d){return B.oh(A.k.aa(d,2),B.ae("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eqR(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.d9(B.aJ(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.er_()
l=B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),l,m,m,m,m,m,2,B.bn(m,m,m,m,m,m,m,m,!0,new B.b3(4,B.m(16),A6.vQ),m,m,m,m,m,m,m,m,m,m,m,new B.b3(4,B.m(16),D.aQB),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.ld,"Bill amount",!0,!0,!1,m,m,m,m,D.eNh,"$ ",m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,A.dY,m,m,m,1,m,m,!1,"\u2022",m,new C.eqW(n),m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.aKc,!0,A.a5,m,A.am,m,m,m,m)
k=A.bg.j(0.1)
s=B.m(20)
r=B.H(A.bg.j(0.35),A.r,1)
q=x.p
s=B.cM(B.a([l,A.bv,B.p(m,B.v(B.a([t.$2("Tip ("+A.k.U(n.e)+"%)","$"+n.asJ(w)),t.$2("Total","$"+n.asJ(v)),N.V6,t.$3$big("Each of "+n.f+" pays","$"+n.asJ(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.c4,m,m,m)],q),m,A.fC,m,m,A.ak,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cnj[p]
r.push(new C.dw(""+o+"%",A.k.U(n.e)===o,new C.eqX(n,o),m,A.bg,m))}l=n.f
return C.jx(A.bg,A.h2,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.v(B.a([new C.eH(r,"TIP",m),C.hr(A.aY,""+l,"People",20,1,new C.eqY(n),l),new C.eH(B.a([new C.dw("Round up",n.r,new C.eqZ(n),m,A.aK,m)],q),m,m)],q),A.m,m,A.e,A.Q,0,A.p))}}
C.TX.prototype={
S(){var w=B.a([3,5],x.t)
return new C.bgM(w,A.cE,$,A.bw,0,B.a([],x.X),null,null)}}
C.bgM.prototype={
Z(){this.a0()
this.kM()},
l4(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.k.by(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aC(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aC(6)+1)
u.f=t
C.a6h("snare",0.5)}u.n(new C.e2K())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.he()
u.w=t
u.x=t?0:3.141592653589793
C.l2("bell",24,400,0.5)}u.n(new C.e2L())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.b9S(v,o.r>0,n))}u=B.aG(n,B.au(B.c9(A.fH,m,A.by,18,18),n,n,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.e2D(o),n,n,n,n,n,n,!1,A.ad)}else if(m==="coin"){t=A.k.E(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.H(A.dn,A.r,6)
s=B.a([new B.ab(0,A.G,A.aK.j(0.4),A.J,30)],x.V)
u=B.aG(n,B.au(B.e7(A.A,B.p(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.eMy,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.dX4,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.e2E(o),n,n,n,n,n,n,!1,A.ad)}else{m=o.as
u=B.aG(n,B.au(B.v(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.eCM,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kl,n,n,n)],x.p),A.m,n,A.e,A.Q,0,A.p),n,n,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.e2F(o),n,n,n,n,n,n,!1,A.ad)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.cPX[r]
v.push(new C.dw(q.b,o.d===q.a,new C.e2G(o,q),q.c,A.bA,n))}v=B.a([new C.eH(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(C.hr(A.bA,""+s,"Dice",4,1,new C.e2H(o),s))}if(o.d==="num"){s=o.z
s=C.hr(A.bA,""+s,"From",100,1,new C.e2I(o),s)
p=o.Q
A.d.v(v,B.a([s,C.hr(A.bA,""+p,"To",1000,2,new C.e2J(o),p)],m))}return C.jx(A.bA,A.h2,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.v(v,A.m,n,A.e,A.Q,0,A.p))}}
C.b9S.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cE.af()-0.5)*0.6
else w=0
v=B.m(22)
u=B.a([new B.ab(0,A.G,A.w.j(0.4),A.ct,14)],x.V)
t=B.a([],x.p)
for(s=D.d5O.h(0,A.o.E(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bI(s[q],p,p,B.p(p,p,A.f,p,p,K.a7A,p,18,p,p,p,p,p,18),p))
return B.ev(A.A,w,B.p(p,new B.am(A.W,p,A.a9,A.q,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bC,p,p,100),p)}}
C.aIn.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.btn.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
w=this.fc$
w===$&&B.c()
w.q()
this.bps()}}
C.aIG.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.bts.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
w=this.fc$
w===$&&B.c()
w.q()
this.bpM()}}
C.aJa.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.btC.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
w=this.fc$
w===$&&B.c()
w.q()
this.bqh()}}
C.aJE.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.btO.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
w=this.fc$
w===$&&B.c()
w.q()
this.bqL()}}
C.b3x.prototype={
B(d){var w,v=this,u=null,t=v.c,s=D.az2.h(0,t)
$.aZA=s==null?"music":s
s=v.d
w=x.p
t=B.a([B.aF(u,u,u,u,E.qA,u,u,u,new C.cn_(d),u,u,u,u,u,u),B.D(B.d(t,u,1,A.a2,u,u,u,B.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(B.aF(u,u,u,u,B.W(A.LG,s,u,u,u,22),u,u,u,new C.cn0(v,d),u,u,u,u,"How to play",u))
w=B.a([new B.C(D.blr,B.B(t,A.m,u,A.e,A.j,0,u,u),u),B.D(v.f,1)],w)
w.push(B.p(u,v.r,A.f,u,u,new B.o(D.Dj,u,new B.c3(new B.ay(A.c.j(0.08),1,A.r,-1),A.Z,A.Z,A.Z),u,u,u,A.n),u,u,u,u,A.DY,u,u,1/0))
return B.ce(u,A.bW,B.bp(!0,B.v(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),u,!1,!1,u,u)}}
C.dw.prototype={
B(d){var w,v,u,t=this,s=null,r=B.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=B.H(o,A.r,q?1.6:1)
w=x.p
v=B.a([],w)
u=t.f
if(u!=null)A.d.v(v,B.a([B.W(u,q?t.r:A.aQ,s,s,s,16),A.et],w))
v.push(B.d(t.c,s,s,s,s,s,s,B.l(s,s,q?A.c:A.af,s,s,s,s,s,s,s,s,12,s,s,A.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new B.C(D.Vo,B.aG(s,B.dg(s,B.B(v,A.m,s,A.e,A.Q,0,s,s),s,s,A.b9,new B.o(p,s,o,r,s,s,A.n),A.eK,s,s,s,A.ha,s,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cmW(t),s,s,s,s,s,s,!1,A.ad),s)}}
C.eH.prototype={
B(d){var w=null,v=B.a([],x.p),u=this.d
if(u!=null)v.push(new B.a4(54,w,B.d(u,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(B.D(B.ci(B.B(this.c,A.m,w,A.e,A.j,0,w,w),A.q,w,A.z,w,w,w,w,A.b_),1))
return new B.C(A.cN,B.B(v,A.m,w,A.e,A.j,0,w,w),w)}}
C.at7.prototype={
B(d){var w,v,u,t=this,s=null,r=B.d(t.c,s,s,s,s,s,s,B.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=B.asH(d).cAB(q,A.bG,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=B.D(B.a7Z(B.lQ(s,s,s,u,v,t.e,A.k.E(w,v,u)),q),1)
u=t.x
return new B.a4(s,34,B.B(B.a([new B.a4(78,s,r,s),q,new B.a4(38,s,B.d(u==null?A.k.aa(w,1):u,s,s,s,s,s,s,A1.Ht,A.dN,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
C.fd.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new B.C(D.Vo,B.aD(!1,A.a1,!0,B.m(12),B.aI(!1,B.m(12),!0,new B.C(Ag.acS,B.B(B.a([B.W(w.c,u,v,v,v,17),A.et,B.d(w.d,v,v,v,v,v,v,B.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.cmV(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ac),v)}}
C.E6.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.eBg:u
w=t?A.c:A.ba
w=B.H(w,A.r,t?2.5:1)
return B.aG(u,B.dg(u,u,u,u,A.b9,new B.o(p,u,w,u,t?B.a([new B.ab(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a6),A.hT,u,r,D.acG,u,u,u,s),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cn1(v),u,u,u,u,u,u,!1,A.ad)}}
C.mh.prototype={
a2N(d,e){var w=B.dd()
w.sex(B.cP(B.dB(0,0,0,d,0,0),new C.cmX(this,w,e)))
this.fd$.push(w.b9())},
kM(){var w=this,v=w.qR(new C.cmZ(w))
v.ko(0)
w.fc$!==$&&B.aQ()
w.fc$=v}}
C.a8X.prototype={
bsN(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
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
w=g.bvW()
g.ay!==$&&B.aQ()
g.ay=w},
bvW(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
C.a8Y.prototype={
cwH(d,e){var w,v,u,t,s,r,q,p
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
C.NA.prototype={}
C.xk.prototype={}
C.Nz.prototype={
f9(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.aki[w.aC(7)]
w=w.he()?0:12
u=A.o.F(t.c++,3)===0?"flute":"bell"
C.l2(u,v+w-12,2200,0.1)}}
C.Tt.prototype={
S(){var w=$.av()
return new C.aAG(new B.co(null,x.A),new B.ar(A.as,w),new C.Nz(A.cE),D.cRL,A.at,D.a_P,$,A.bw,0,B.a([],x.X),null,null)}}
C.aAG.prototype={
Z(){var w,v=this
v.a0()
v.kM()
v.a.toString
w=$.fWc
if(w==null)w=$.fWc=C.cpw()
w.bz(new C.dPm(v),x.P)},
q(){var w=this.e
w.R$=$.av()
w.O$=0
this.bpU()},
ckW(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=B.a([],x.C)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,B.K)(v),++s){r=v[s]
q=B.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,B.K)(p),++n)q.push(new C.dOP(p[n]).$0())
w.push(q)}this.w=w},
gUe(){var w=this.fy
return w.A(0,A.at)?100:Math.min(w.a,w.b)*0.43},
aqp(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.E(f,1,16)
w.Q=w.as=0},
auh(d){var w
this.fx=d
w=d.ax
w===$&&B.c()
this.aqp(d.x,d.w,105/Math.max(w,3))
B.eJ()
C.l2("bell",(A.d.cJ(D.a_q,d.c)+1)*3+12,900,0.45)
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
c1w(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.at))return null
w=n.fy
v=n.gUe()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gUe()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.E(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cwH((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c1v(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.n(new C.dON(w))
return}w.n(new C.dOO(w,v,A.a.i(d).toLowerCase()))},
bIl(){var w=null,v=this.c
v.toString
B.ch(w,w,!0,w,new C.dOL(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=B.a([B.aF(n,n,n,n,D.bvT,n,n,n,o.gbIk(),n,n,n,n,"Earth facts",n),B.aF(n,n,n,n,D.ma,n,n,n,new C.dP7(o,d),n,n,n,n,"Share",n)],l),j=B.ck(new C.dP8(o,m)),i=A.c.j(0.06)
i=B.a([B.aK(n,A.U,!1,n,!0,A.q,n,B.aL(),o.e,n,n,n,n,n,2,B.bn(n,new B.b3(4,B.m(14),A.Z),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.Cc,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bDN,n,n,n,n,n,n,n,n,n,n,n,n),A.z,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc1u(),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.iC,!0,A.a5,n,A.am,n,n,n,n)],l)
if(o.id.length!==0){w=B.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t]
w.push(new C.dw(s.a,!1,new C.dP9(o,s),A.mN,A.aY,n))}i.push(new B.C(A.i5,new B.a4(n,38,B.cM(w,n,n,n,n,A.b_,!1),n),n))}i.push(A.ar)
w=B.a([new C.dw("Whole Earth",!1,new C.dPd(o),A.hc,A.aY,n)],l)
for(v=D.ayS.gdH(D.ayS),v=v.gah(v);v.C();){u=v.gT(v)
w.push(new C.dw(u.a,!1,new C.dPe(o,u),n,A.aY,n))}w.push(new C.dw("Random",!1,new C.dPf(o),A.m3,A.aY,n))
i.push(new C.eH(w,"GO TO",n))
w=o.z
i.push(C.hr(A.aY,A.k.aa(w,1)+"x","Zoom",16,0.8,new C.dPg(o),w))
w=o.dy
i.push(C.hr(A.cu,A.a.aU(A.o.u(A.k.by(w)),2,"0")+":00","Time",24,0,new C.dPh(o),w))
w=o.fr
i.push(C.hr(A.bg,o.cjJ(),"Season",365,0,new C.dPi(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lw:D.ER
i.push(new C.eH(B.a([new C.dw("Spin",w,new C.dPj(o),D.br6,A.aY,n),new C.dw("Night",v,new C.dPk(o),A.uC,A.aY,n),new C.dw("Borders",u,new C.dPa(o),D.bra,A.aY,n),new C.dw("Names",r,new C.dPb(o),N.agZ,A.aY,n),new C.dw("Music",q,new C.dPc(o),p,A.aY,n)],l),n,n))
return C.jx(A.aY,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",B.v(i,A.m,n,A.e,A.Q,0,A.p))},
cjJ(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.arP[u])v=u
return A.i6[v]+" "+(A.k.by(w-D.arP[v])+1)},
c1t(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&B.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.mv(1,A.o.F((A.d.cJ(D.a_q,t)+1)*47,360),0.55,1).iu()
r=new C.dOJ()
q=B.m(20)
p=B.H(s.j(0.6),A.r,1)
o=x.p
n=B.B(B.a([B.p(j,j,A.f,j,j,new B.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.aa,B.D(B.d(d.a,j,1,A.a2,j,j,j,A.dP,j,j,j),1),B.aF(j,j,j,j,A.M1,j,j,j,new C.dOI(this),j,j,j,j,j,A.c9)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=B.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hu,j,j,j)
m=D.d4w.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=B.B(B.a([m,A.aa,r.$2("PEOPLE",l?C.fcR(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",C.Fx(i)+" km\xb2")
if(l)m=(w<10?A.k.aa(w,1):C.Fx(w))+" per km\xb2"
else m="\u2014"
m=B.B(B.a([i,A.aa,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.aa(u,3):A.k.aa(u,1))+"% of people")
l=d.f
k=d.r
return B.p(j,B.v(B.a([n,t,A.P,v,A.P,m,A.P,B.B(B.a([i,A.aa,r.$2("ECONOMY",l>0?"$"+C.fcR(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.Q,0,A.p),A.f,j,j,new B.o(D.TH,j,p,q,j,j,A.n),j,j,j,j,D.ada,j,j,j)}}
C.bc5.prototype={
a4(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.V(),d7=B.L()
d7.r=D.zp.gp(0)
d8.aW(new B.a7(0,0,0+d4,0+d5),d7)
w=new B.f3()
w.dU(4)
for(d7=d8.a,v=0;v<90;++v){u=w.af()
t=w.af()
s=w.af()
r=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
r.r=A.c.j(0.25+w.af()*0.5).gp(0)
q=r.G()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new B.u(d4,d5)
o=d2.f
u=B.L()
t=x.O
u.sar(new B.bR(A.A,0.5,A.x,d3,0,B.a([A.K,A.aY.j(0.35),A.K],t),D.cDy,d3).av(0,B.bS(p,o*1.1)))
d8.ae(p,o*1.05,u)
n=B.bS(p,o)
u=B.L()
u.sar(D.dX8.av(0,n))
d8.ae(p,o,u)
J.by(d7.save())
u=x.v
d6=new B.aO(d6.r,A.ao,d3,d3,B.a([],u))
d6.D(new B.ky(n))
d8.tl(0,d6)
m=d2.d*3.141592653589793/180
l=d2.e*3.141592653589793/180
k=Math.sin(m)
j=Math.cos(m)
i=Math.sin(l)
h=Math.cos(l)
g=B.L()
g.b=A.ae
m=g.c=0.7
g.r=A.c.j(0.1).gp(0)
f=new C.d6j(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.G()
s=d.e
d7.drawPath((s==null?d.e=new B.cE(d.gbL().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.V()
a3=B.a([],u)
d=new B.aO(a2.r,A.ao,d3,d3,a3)
a3.push(new B.b4(s,r))}else{s=new B.ao(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bx(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.G()
d6=d.e
d7.drawPath((d6==null?d.e=new B.cE(d.gbL().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.G()
s=d.e
d7.drawPath((s==null?d.e=new B.cE(d.gbL().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.V()
a3=B.a([],u)
d=new B.aO(a2.r,A.ao,d3,d3,a3)
a3.push(new B.b4(s,r))}else{s=new B.ao(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bx(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.G()
d6=d.e
d7.drawPath((d6==null?d.e=new B.cE(d.gbL().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=B.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.F((A.d.cJ(D.a_q,a7.c)+1)*47,360)
$.V()
b0=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
a3=a8?0.35:0.5
b0.r=new H.mv(1,a9,a3,a8?1:0.62).iu().gp(0)
b1=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
b1.b=A.ae
b1.c=a8?2.2:m
b1.e=A.fu
b1.r=(a8?A.c:A.w.j(0.55)).gp(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,B.K)(a3),++b3){b4=a3[b3]
b5=b4.length/4|0
b6=$.V()
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
b6=new B.bD()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bx(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.G()
b6=b8.e
d7.drawPath((b6==null?b8.e=new B.cE(b8.gbL().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.G()
b6=b8.e
d7.drawPath((b6==null?b8.e=new B.cE(b8.gbL().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,B.K)(a5),++b3){d=a5[b3]
$.V()
s=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
s.b=A.ae
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.qI
q=s.G()
s=d.e
d7.drawPath((s==null?d.e=new B.cE(d.gbL().a.snapshot()):s).a,q)
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
c9=C.htD(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbc(b2)
c9.a4(d8,new B.u(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.E(k*c0+j*c1*c4,-1,1)
$.V()
u=B.L()
u.sar(new B.bR(A.A,0.5,A.x,d3,0,B.a([A.K,A.K,D.b_F.j(0.78)],t),D.cS5,d3).av(0,B.bS(new B.u(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.ae(p,o,u)}$.V()
d4=B.L()
d4.sar(new B.bR(A.A,0.5,A.x,d3,0,B.a([A.K,A.w.j(0.4)],t),D.d26,d3).av(0,n))
d8.ae(p,o,d4)
d7.restore()
d7=B.L()
d7.b=A.ae
d7.c=1.4
d7.r=A.fY.j(0.5).gp(0)
d8.ae(p,o,d7)},
ap(d){return!0}}
C.aIM.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.aIN.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
w=this.fc$
w===$&&B.c()
w.q()
this.bpT()}}
C.bqg.prototype={}
C.Uy.prototype={
S(){return new C.bhl()}}
C.bhl.prototype={
gaOq(){var w=this.d
if(w===$)w=this.d=A.cE.aC(16)
return w},
B(d){var w=null,v=B.eC(w,w,w,!0,!0,D.zp,w,1,!0,w,0,!1,w,!1,w,w,B.aF(w,w,w,w,D.aiN,w,w,w,new C.erE(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.f6W,w,w,w,1,w,!0),u=B.m(18),t=A.aY.j(0.1),s=B.H(A.aY.j(0.35),A.r,1),r=x.p
return B.ce(v,D.zp,B.cM(B.a([B.p(w,B.B(B.a([D.buB,A.aw,B.D(B.d(D.cH7[this.gaOq()],w,w,w,w,w,w,D.a52,w,w,w),1),B.aF(w,w,w,w,D.bEJ,w,w,w,new C.erF(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bC,w,w,w),A.ay,B.ck(new C.erG())],r),w,A.VJ,w,w,A.ak,!1),w,!1,!1,w,w)}}
C.Uj.prototype={
S(){return C.hu4()}}
C.bh8.prototype={
cbP(d){var w=d.c,v=C.hu6(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new B.u(Math.cos(t)*v,Math.sin(t)*v)},
Z(){this.a0()
this.kM()},
l4(d){var w,v,u,t=this
t.e.f9(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.cbP(w)
u=new B.u(-v.a,-v.b).aO(0,t.w)
v=B.l3(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc1x(){var w=this.ch
return new B.u(w.a/2,w.b/2).ao(0,this.x)},
c1B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.B5[s]
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
aVt(d){this.n(new C.ejN(this,d))
B.eJ()
C.l2("bell",D.d2g[A.o.F(A.d.cJ(D.B5,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=B.a([B.aF(m,m,m,m,D.ma,m,m,m,new C.ejY(n,d),m,m,m,m,"Share",m)],k),i=B.ck(new C.ejZ(n,l)),h=B.a([new C.dw("All",!1,new C.ek_(n),A.Yz,A.aK,m)],k)
for(w=0;w<10;++w){v=D.B5[w]
h.push(new C.dw(v.a,n.z===v,new C.ek0(n,v),m,B.aZ(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.aa(s,0)+" d/s":""+A.k.U(s)+" d/s"
t=C.hr(A.aK,s,"Time",1,0,new C.ek1(n),u/t)
u=n.w
u=C.hr(A.aK,A.k.aa(u,1)+"x","Zoom",9,0.5,new C.ek2(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lw:D.ER
return C.jx(A.aK,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",B.v(B.a([new C.eH(h,"GO TO",m),t,u,new C.eH(B.a([new C.dw("Orbits",s,new C.ek3(n),m,A.aK,m),new C.dw("Names",r,new C.ek4(n),m,A.aK,m),new C.dw("Asteroids",q,new C.ek5(n),m,A.aK,m),new C.dw("Music",p,new C.ek6(n),o,A.aK,m)],k),m,m)],k),A.m,m,A.e,A.Q,0,A.p))},
c1y(d){var w,v,u,t,s,r=null,q=B.aZ(d.z),p=d.c,o=p*8.317,n=new C.ejL(),m=B.m(20),l=B.H(q.j(0.6),A.r,1),k=B.p(r,r,A.f,r,r,new B.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=B.B(B.a([k,A.aa,B.D(B.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.kQ,r,r,r),1),B.aF(r,r,r,r,A.M1,r,r,r,new C.ejK(this),r,r,r,r,r,A.c9)],w),A.m,r,A.e,A.j,0,r,r)
k=B.d(d.y,r,r,r,r,r,r,D.HI,r,r,r)
v=n.$2("WIDTH",C.Fx(d.d*2)+" km")
u=p===0
p=B.B(B.a([v,A.aa,n.$2("FROM THE SUN",u?"\u2014":B.t(p)+" AU ("+C.Fx(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new C.ejM().$1(v))
t=d.f
v=B.B(B.a([v,A.aa,n.$2("ONE DAY",t>=48?A.k.aa(t/24,0)+" Earth days":A.k.aa(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=B.B(B.a([n.$2("GRAVITY",B.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.aa(50*t/9.81,s)+" kg"),A.aa,n.$2("TEMPERATURE",""+A.o.U(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.aa(o,1)+" minutes":A.k.aa(o/60,1)+" hours"
return B.p(r,B.v(B.a([j,A.av,k,A.P,p,A.P,v,A.P,s,A.P,B.B(B.a([t,A.aa,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.Q,0,A.p),A.f,r,r,new B.o(D.TH,r,l,m,r,r,A.n),r,r,r,r,D.ada,r,r,r)}}
C.bol.prototype={
a4(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.V()
w=B.L()
w.r=D.zp.gp(0)
a7.aW(new B.a7(0,0,0+a5,0+a6),w)
v=new B.f3()
v.dU(8)
for(w=a7.a,u=0;u<110;++u){t=v.af()
s=v.af()
r=v.af()
q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
q.r=A.c.j(0.2+v.af()*0.5).gp(0)
p=q.G()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc1x()
n=a5.w
if(a5.as)for(a6=A.d.gah(D.B5),t=new B.hL(a6,new C.eLt()),s=o.a,r=o.b;t.C();){q=a6.gT(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
m.b=A.ae
m.c=1
m.r=A.c.j(0.12).gp(0)
p=m.G()
w.drawCircle(s,r,q*n,p)
p.delete()}if(a5.ax)for(a6=a5.CW,t=o.a,s=o.b,r=a5.cx,u=0;u<a6.length;++u){q=a6[u]
m=a5.f
l=r[u]
k=q+m*0.0016/l
j=(l===0?0:30+150*Math.sqrt(l/30.1))*n
q=Math.cos(k)
m=Math.sin(k)
l=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
l.r=A.c.j(0.5).gp(0)
p=l.G()
w.drawCircle(t+q*j,s+m*j,0.9,p)
p.delete()}i=C.hu5(A.d.gL(D.B5))*Math.sqrt(n)*1.4
a6=i*3.2
t=B.L()
s=x.O
t.sar(new B.bR(A.A,0.5,A.x,a4,0,B.a([A.aK.j(0.5),A.K],s),a4,a4).av(0,B.bS(o,a6)))
a7.ae(o,a6,t)
t=B.L()
t.sar(D.dX2.av(0,B.bS(o,i)))
a7.ae(o,i,t)
if(a5.at){h=C.fXO("Sun",10.5,A.af)
h.a4(a7,o.ao(0,new B.u(-h.b.c/2,i+4)))}for(a6=A.d.gah(D.B5),t=new B.hL(a6,new C.eLu()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gT(0)
g=l.c
j=g===0?0:30+150*Math.sqrt(g/30.1)
f=l.e
k=f<=0?0:6.283185307179586*(a5.f/f)+g*1.7
g=q+Math.cos(k)*j*n
f=m+Math.sin(k)*j*n
j=(1.5+1.6*Math.log(l.d/1000+1))*Math.sqrt(n)
e=B.aZ(l.z)
d=l.a
if(d==="Saturn"){J.by(w.save())
w.translate(g,f)
w.rotate(-22.91831180523293,0,0)
a0=B.cr(A.J,j*1.3,j*4.2)
a1=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
a1.b=A.ae
a1.c=j*0.45
a1.r=A.bJ.j(0.55).gp(0)
p=a1.G()
w.drawOval(B.c2(a0),p)
p.delete()
w.restore()}a0=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
a0.r=e.j(0.3).gp(0)
a0.z=A.qI
p=a0.G()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
a1=B.aq(e,A.w,0.55)
a1.toString
a0.sar(new B.bR(O.pV,0.5,A.x,a4,0,B.a([A.c,e,a1],s),F.a_4,a4).av(0,B.bS(new B.u(g,f),j)))
p=a0.G()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
l.b=A.ae
l.c=2
l.r=A.c.gp(0)
p=l.G()
w.drawCircle(g,f,j+7,p)
p.delete()}if(r&&d==="Earth"){k=a5.f/27.3*2*3.141592653589793
a2=j+11*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
a3.r=A.c.gp(0)
p=a3.G()
w.drawCircle(g+l*a2,f+a0*a2,1.8*a1,p)
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.cLX[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
a3.r=A.af.gp(0)
p=a3.G()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=C.fXO(d,10.5,A.af)
h.a4(a7,new B.u(g+-h.b.c/2,f+(j+4)))}}},
ap(d){return!0}}
C.Tu.prototype={
S(){var w=x.i
return new C.aAH(new C.Nz(A.cE),B.bZ(5,0,!1,w),B.bZ(5,0,!1,w),B.bZ(5,null,!1,x.cD),A.J,A.J,B.a([],x.g),$,A.bw,0,B.a([],x.X),null,null)}}
C.aAH.prototype={
co3(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c1A(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.dMi
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
s.n(new C.dPq())},
Z(){this.a0()
this.kM()},
l4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.f9(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.xK[r]
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
break}}}if(A.d.ea(s,new C.dPT()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
if(n==="drop")n=p.bGF()
else n=n==="weight"?p.cv2():p.bz0()
w=x.p
v=B.a([],w)
for(u=0;u<3;++u){t=D.d_H[u]
v.push(new C.dw(t.b,p.d===t.a,new C.dPF(p,t),t.c,A.cM,o))}v=B.a([new C.eH(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=B.a([new C.dw("Hammer",!s,new C.dPG(p),Ad.Y1,A.cM,o),new C.dw("Feather",s,new C.dPH(p),N.XC,A.cM,o),new C.dw(q,r,new C.dPL(p),A.EB,A.aY,o)],w)
q=p.w
A.d.v(v,B.a([new C.eH(r,o,o),C.hr(A.cM,""+A.k.U(q*100)+"%","Slow motion",1,0.05,new C.dPM(p),q),new C.eH(B.a([new C.fd(A.uF,"Drop!",new C.dPN(p),A.bg,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=C.hr(A.cM,""+A.k.U(s)+" kg","Your weight",120,20,new C.dPO(p),s)
r=p.ax
A.d.v(v,B.a([s,C.hr(A.cM,""+A.k.U(r*100)+" cm","Your jump",1.2,0.1,new C.dPP(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=C.hr(A.cM,A.k.aa(s,1)+" km/s","Speed",13,0,new C.dPQ(p),s)
r=p.ch
A.d.v(v,B.a([s,C.hr(A.cM,A.k.aa(r,1)+"x out","View",8,0.5,new C.dPR(p),r),new C.eH(B.a([new C.fd(A.mQ,"Fire!",p.gc1z(),A.bg,o),new C.fd(A.uF,"Falls",new C.dPS(p),A.c,o),new C.fd(A.t1,"Orbit 7.7",new C.dPI(p),A.c,o),new C.fd(D.bu2,"Oval 9",new C.dPJ(p),A.c,o),new C.fd(A.AB,"Escape",new C.dPK(p),A.c,o)],w),o,o)],w))}return C.jx(A.cM,A.h2,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",B.v(v,A.m,o,A.e,A.Q,0,A.p))},
bGF(){return new B.C(D.bgo,B.ck(new C.dPp(this)),null)},
cv2(){var w,v,u,t=null,s=[D.eiM,D.ek3,D.ekb,D.eku,D.ek9,D.eky,D.ejh,D.ekR,D.ejQ],r=x.p,q=B.a([D.eWL,A.T],r)
for(w=0;w<9;++w){v=s[w]
u=B.aZ(v.c)
q.push(new B.C(A.cN,new B.cD(A.b_,A.e,A.j,A.m,t,A.p,t,0,B.a([new B.a4(62,t,new B.x(v.a,t,new B.F(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new B.bG(1,A.bp,new B.Ao(new C.dPr(this,v),t),t)],r),t),t))}q.push(A.av)
q.push(D.eYU)
return B.cM(q,t,A.iM,t,t,A.ak,!1)},
bz0(){return B.ck(new C.dPn(this))}}
C.b7l.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.V(),e=B.L()
e.r=D.zp.gp(0)
d.aW(new B.a7(0,0,0+h,0+g),e)
w=new B.f3()
w.dU(2)
for(e=d.a,v=0;v<80;++v){u=w.af()
t=w.af()
s=w.af()
r=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
r.r=A.c.j(0.2+w.af()*0.5).gp(0)
q=r.G()
e.drawCircle(u*h,t*g,s*1.1+0.3,q)
q.delete()}h=j.c
p=6371*h
g=j.b
e=B.L()
e.sar(new B.bR(A.A,0.5,A.x,i,0,B.a([A.K,A.aY.j(0.35),A.K],x.O),D.cSV,i).av(0,B.bS(g,p*1.1)))
d.ae(g,p*1.06,e)
e=B.L()
e.sar(D.dWX.av(0,B.bS(g,p)))
d.ae(g,p,e)
o=g.ao(0,new B.u(0,-p))
f=f.r
e=x.v
n=new B.aO(f,A.ao,i,i,B.a([],e))
u=o.a
t=o.b
s=t+3
n.D(new B.b4(u-16,s))
n.D(new B.ao(u,t-400*h-4))
n.D(new B.ao(u+16,s))
n.D(new B.bD())
s=B.L()
s.r=A.aj.gp(0)
d.aL(n,s)
s=o.ao(0,new B.u(0,-400*h-6))
u=B.L()
u.r=A.c.gp(0)
d.ae(s,4,u)
u=j.e
if(u.length>1){e=B.a([],e)
m=new B.aO(f,A.ao,i,i,e)
f=g.a
t=g.b
m.D(new B.b4(f+A.d.gL(u).a*h,t+A.d.gL(u).b*h))
for(u=B.dc(u,1,i,B.U(u).c),s=u.$ti,u=new B.bU(u,u.gJ(0),s.k("bU<ai.E>")),s=s.k("ai.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new B.ao(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bx(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.V()
f=B.L()
f.b=A.ae
f.c=2.4
f.d=A.bO
f.r=A.cM.j(0.9).gp(0)
d.aL(m,f)}if(j.f){f=j.d
k=g.ao(0,new B.u(f.a*h,f.b*h))
h=B.L()
h.r=A.cM.j(0.4).gp(0)
h.z=G.me
d.ae(k,7,h)
h=B.L()
h.r=A.c.gp(0)
d.ae(k,4,h)}},
ap(d){return!0}}
C.Ub.prototype={
S(){return new C.bh5(new B.co(null,x.A),$,A.bw,0,B.a([],x.X),null,null)}}
C.bh5.prototype={
Z(){this.a0()
this.kM()},
l4(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.NX[l.e],i=D.NX[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=B.a([B.aF(k,k,k,k,D.ma,k,k,k,new C.ecH(l,d),k,k,k,k,"Share",k)],u)
s=B.D(B.b2(k,k,k,new C.bnU(f,g,v,k),A.f2),1)
r=g.a
q=v<10?A.k.aa(v,1):C.Fx(v)
p=f.a
q=B.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.jb,A.L,k,k)
o=C.Fx(v*v*v)
n=A.a.c7(p,"s")?"":"s"
h=B.v(B.a([s,B.p(k,B.v(B.a([q,A.av,B.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,X.a4t,A.L,k,k),A.bB,B.d(p+": "+C.Fx(w*2)+" km wide. "+r+": "+C.Fx(h*2)+" km wide.",k,k,k,k,k,k,X.a4G,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.biA,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=B.a([],u)
for(m=0;m<10;++m){w=D.NX[m]
r.push(new C.dw(w.a,l.e===m,new C.ecI(l,m),k,B.aZ(w.c),k))}w=B.a([],u)
for(m=0;m<10;++m){s=D.NX[m]
w.push(new C.dw(s.a,l.f===m,new C.ecJ(l,m),k,B.aZ(s.c),k))}return C.jx(A.bX,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new B.eq(h,l.d),"SIZE COMPARE",B.v(B.a([new C.eH(r,"FIRST",k),new C.eH(w,"SECOND",k)],u),A.m,k,A.e,A.Q,0,A.p))}}
C.bnU.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.V()
w=B.L()
w.r=D.U9.gp(0)
d.aW(new B.a7(0,0,0+h,0+g),w)
v=new B.f3()
v.dU(6)
for(w=d.a,u=0;u<70;++u){t=v.af()
s=v.af()
r=v.af()
q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
q.r=A.c.j(0.2+v.af()*0.4).gp(0)
p=q.G()
w.drawCircle(t*h,s*g,r+0.3,p)
p.delete()}o=Math.min(h/2-16,g/2-10)*0.98
n=Math.max(o/this.d,0.8)
h*=0.5
g*=0.5
m=new B.u(h,g)
w=new C.eJC(d)
t=this.c
w.$3(m,o,B.aZ(t.c))
s=o-n
l=new B.u(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,B.aZ(s.c))
w=B.L()
w.b=A.ae
w.c=1.4
w.r=A.af.gp(0)
d.ae(l,n+3,w)
k=B.id(i,i,i,i,B.dl(i,i,i,i,i,i,i,i,i,D.eJ_,s.a),A.a5,A.ch,i,A.em,A.cg)
k.eU()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbc(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbc(g)-6
h=g}k.a4(d,l.ao(0,new B.u(-w/2,h)))
j=B.id(i,i,i,i,B.dl(i,i,i,i,i,i,i,i,i,D.eM9,t.a),A.a5,A.ch,i,A.em,A.cg)
j.eU()
t=j.b
h=t.c
t=t.a.c
j.a4(d,m.ao(0,new B.u(-h/2,-t.gbc(t)/2)))},
ap(d){return!0}}
C.aIO.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.btu.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
w=this.fc$
w===$&&B.c()
w.q()
this.bpV()}}
C.aJm.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.btI.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
w=this.fc$
w===$&&B.c()
w.q()
this.bqt()}}
C.aJp.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.btK.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
w=this.fc$
w===$&&B.c()
w.q()
this.bqw()}}
C.O1.prototype={}
C.Sx.prototype={
S(){return C.hu2()}}
C.bfO.prototype={
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
C.dG(70,"",500,0.3,0.5,"sine")}}A.d.bm(w,new C.dxC())},
aVu(d){var w,v,u,t=this.Q
if(t.A(0,A.at))return
w=this.gb35()
v=d.aE(0,new B.u(t.a/2,t.b*0.42))
u=A.k.E(v.gcj()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new C.O1(t,u,1.2,new B.wv(1,30+A.cE.af()*40,0.9,0.7).iu()))
C.l2("bell",60+A.k.U(12-u)*2,400,0.35)},
gb35(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.E(m.length===0?3:new B.J(m,new C.dxq(),B.U(m).k("J<1,P>")).fv(0,A.vX),1.0001,99))
m=x.p
w=B.a([B.aF(n,n,n,n,D.ma,n,n,n,new C.dxr(o,d),n,n,n,n,"Share",n)],m)
v=B.ck(new C.dxs(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.aa(s,0)+" Suns":C.fcR(s)+" Suns"
t=C.hr(A.bA,s,"Mass",1,0,new C.dxu(o),u/t)
u=B.a([new C.dw("Star (10)",!1,new C.dxv(o),n,A.bA,n),new C.dw("Cygnus X-1 (21)",!1,new C.dxw(o),n,A.bA,n),new C.dw("Milky Way core (4 million)",!1,new C.dxx(o),n,A.bA,n),new C.dw("M87 (6.5 billion)",!1,new C.dxy(o),n,A.bA,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lw:D.ER
return C.jx(A.bA,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",B.v(B.a([t,new C.eH(u,"LIKE",n),new C.eH(B.a([new C.dw("Glowing ring",s,new C.dxz(o),n,A.bA,n),new C.dw("Bent light",r,new C.dxA(o),n,A.bA,n),new C.dw("Music",q,new C.dxB(o),p,A.bA,n),new C.fd(A.jL,"Clear",new C.dxt(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.Q,0,A.p))},
ac5(d,e){var w=null
return B.D(B.v(B.a([B.d(d,w,w,w,w,w,w,D.eF5,w,w,w),A.bB,B.d(e,w,2,w,w,w,w,I.a4o,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
C.b6K.prototype={
a4(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.V()
w=B.L()
w.r=D.b6I.gp(0)
b2.aW(new B.a7(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new B.u(w,v)
t=this.b
s=t.gb35()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,B.K)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new B.u(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+A.k.E(o/h,0,n)
i=new B.u(w+k/h*g,v+j/h*g)}}k=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
k.r=A.c.j(0.6).gp(0)
f=k.G()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=B.L()
b0.b=A.ae
b0.c=2
b0.r=A.c.j(0.25).gp(0)
b0.z=E.P3
b2.ae(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=B.aq(A.wb,A.fy,d)
n.toString
k=Math.cos(a4)
$.V()
j=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
g=a5?1:0.85
j.r=n.j(r*(0.4+(0.5+0.5*k)*0.6)*g).gp(0)
f=j.G()
p.drawCircle(w+a6,v+o*a0*0.28,1.3,f)
f.delete()
if(!a5&&t.x){o=Math.sin(-a4)
k=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
k.r=n.j(b1).gp(0)
f=k.G()
p.drawCircle(w+a6*0.5,v+(q*Math.abs(o)*0.6-b0),1,f)
f.delete()}}}b0=s*1.25
$.V()
b1=B.L()
b1.sar(new B.bR(A.A,0.5,A.x,null,0,B.a([A.w,A.w.j(0)],x.O),D.cyZ,null).av(0,B.bS(u,b0)))
b2.ae(u,b0,b1)
b1=B.L()
b1.r=A.w.gp(0)
b2.ae(u,s,b1)
b1=B.L()
b1.b=A.ae
b1.c=1
b1.r=A.bA.j(0.55).gp(0)
b2.ae(u,s,b1)
for(b0=t.z,b1=b0.length,m=0;m<b0.length;b0.length===b1||(0,B.K)(b0),++m){a7=b0[m]
a0=s*a7.b
t=w+Math.cos(a7.a)*a0
r=v+Math.sin(a7.a)*a0*0.9
a8=1+A.k.E(3.5/a7.b,0,5)
a9=3*a8
q=-Math.sin(a7.a)*a9
o=Math.cos(a7.a)*a9
n=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
n.c=4.2/Math.sqrt(a8)
n.d=A.bO
k=a7.d
n.r=k.j(A.k.E(a7.b/2,0.2,1)).gp(0)
f=n.G()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
o.r=k.j(0.2).gp(0)
o.z=G.me
f=o.G()
p.drawCircle(t,r,6,f)
f.delete()}},
ap(d){return!0}}
C.acC.prototype={}
C.Tq.prototype={
S(){var w=x.r,v=x.g
return new C.bgd(new B.co(null,x.A),new C.Nz(A.cE),B.a([],w),A.J,A.J,B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.a([],v),A.J,A.J,$,A.bw,0,B.a([],x.X),null,null)}}
C.bgd.prototype={
Z(){this.a0()
this.Y3()
this.kM()},
Y3(){var w,v,u,t,s,r,q,p,o=this,n=new B.f3()
n.dU(5)
w=B.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.af(),1.6)
w.push(new C.acC(t,n.af()*3.141592653589793*2,(n.af()-0.5)*0.5*t,25+n.af()*20))}else{t=Math.pow(n.af(),0.8)
s=n.aC(o.f)
r=n.af()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.he()?0:3.141592653589793
q=r+(n.af()-0.5)*0.25}r=n.af()
p=t<0.25?35+n.af()*15:205+n.af()*50
w.push(new C.acC(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cnV(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.dNL
k.cx=D.dNO
w=new B.f3()
w.dU(9)
v=k.cy
A.d.a7(v)
u=B.a([],x.r)
for(t=0;t<900;++t)u.push(new C.acC(Math.pow(w.af(),0.8)*0.7,w.af()*3.141592653589793*2,0,320+w.af()*30))
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
for(s=k.ay,r=x.S,s=B.dc(s,0,B.dH(900,"count",r),B.U(s).c),o=s.$ti,s=new B.bU(s,s.gJ(0),o.k("bU<ai.E>")),o=o.k("ai.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new B.u(l*n,Math.sin(m)*n))}k.db=v
v=B.a([],u)
for(u=k.ay,u=B.dc(u,0,B.dH(900,"count",r),B.U(u).c),r=u.$ti,u=new B.bU(u,u.gJ(0),r.k("bU<ai.E>")),r=r.k("ai.E");u.C();){s=u.d
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
r=t.ez(0,s).aO(0,0.9/(s*s))
w=p.fy.ao(0,r.aO(0,u))
p.fy=w
v=p.cx.aE(0,r.aO(0,u))
p.cx=v
w=p.fx.ao(0,w.aO(0,u))
p.fx=w
v=p.CW.ao(0,v.aO(0,u))
p.CW=v
q=new C.dNY(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=B.a([B.aF(r,r,r,r,D.ma,r,r,r,new C.dNO(s,d),r,r,r,r,"Share",r)],q),o=B.b2(r,r,r,new C.bbW(s,r),A.at),n=A.w.j(0.5),m=B.m(14),l=B.H(A.bG,A.r,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=B.a([o,B.an(8,B.p(r,B.d(w,r,r,r,r,r,r,Aa.a4g,r,r,r),A.f,r,r,new B.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bU,r,r,r),r,r,10,10,r,r)],q)
l=B.a([],q)
for(v=0;v<3;++v){u=D.cOQ[v]
o=s.Q===u.a&&!s.ch
l.push(new C.dw(u.b,o,new C.dNP(s,u),r,A.fU,r))}l.push(new C.dw("Collide",s.ch,new C.dNQ(s),A.x1,A.bX,r))
o=B.a([new C.eH(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=C.hr(A.fU,""+n,"Arms",6,2,new C.dNR(s),n)
l=s.r
A.d.v(o,B.a([n,C.hr(A.fU,A.k.aa(l,1),"Winding",6,0.8,new C.dNS(s),l)],q))}n=s.as
o.push(C.hr(A.fU,""+A.k.U(n*90)+"\xb0","Tilt",1,0.15,new C.dNT(s),n))
n=s.ax
o.push(C.hr(A.fU,A.k.aa(n,1)+"x","Speed",4,0,new C.dNU(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lw:D.ER
o.push(new C.eH(B.a([new C.dw("Dark matter",n,new C.dNV(s),r,A.bA,r),new C.dw("You are here",l,new C.dNW(s),r,A.aK,r),new C.dw("Music",w,new C.dNX(s),t,A.fU,r)],q),r,r))
return C.jx(A.fU,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new B.eq(new B.am(A.W,r,A.aZ,A.q,m,r),s.d),"GALAXY",B.v(o,A.m,r,A.e,A.Q,0,A.p))}}
C.bbW.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.V()
w=B.L()
w.r=D.b8r.gp(0)
a3.aW(new B.a7(0,0,0+a1,0+a2),w)
v=new B.f3()
v.dU(3)
for(w=a3.a,u=0;u<90;++u){t=v.af()
s=v.af()
r=v.af()
q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
q.r=A.c.j(0.15+v.af()*0.4).gp(0)
p=q.G()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new B.u(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=B.L()
t.sar(new B.bR(A.A,0.5,A.x,a0,0,B.a([A.aB.j(0.32),A.aB.j(0.12),A.K],x.O),D.bY2,a0).av(0,B.bS(o,a2)))
a3.ae(o,a2,t)}m=new C.d3r(a1.as)
a2=n*0.3
t=B.L()
t.sar(new B.bR(A.A,0.5,A.x,a0,0,B.a([A.fV.j(0.85),A.aX.j(0.3),A.K],x.O),a0,a0).av(0,B.bS(o,a2)))
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
l.r=new H.mv(1,r,q>200?0.45:0.55,1).iu().j(0.35+(1-s)*0.5).gp(0)
s=s<0.3?1.3:1
p=l.G()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.V()
a2=B.L()
a2.b=A.ae
a2.c=1.6
a2.r=A.aK.gp(0)
a3.ae(g,9,a2)
f=B.id(a0,a0,a0,a0,D.eCk,A.a5,A.ch,a0,A.em,A.cg)
f.eU()
f.a4(a3,g.ao(0,new B.u(-f.b.c/2,12)))}}else{e=n*0.8
l=B.L()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.K)(a2),++k){d=a2[k]
l.r=D.b9s.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.G()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.K)(a2),++k){d=a2[k]
l.r=D.b54.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.G()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.V()
w=B.L()
w.r=A.fV.gp(0)
a3.ae(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=B.L()
w.r=A.ig.gp(0)
a3.ae(a1,5,w)}},
ap(d){return!0}}
C.U7.prototype={
S(){return new C.bh4(new B.co(null,x.A),new C.Nz(A.cE),$,A.bw,0,B.a([],x.X),null,null)}}
C.bh4.prototype={
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
u=A.k.by(w*4)
if(u!==A.k.by(t.as))C.l2("bell",60+u*4,500,0.35)
t.as=u}},
gcjI(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcas(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=B.a([B.aF(q,q,q,q,D.ma,q,q,q,new C.ecn(r,d),q,q,q,q,"Share",q)],p),n=B.D(new B.eq(B.b2(q,q,q,new C.bnb(r,q),A.f2),r.d),1)
if(r.f==="seasons")w=r.gcjI()
else{w=r.gcas()
v=A.k.al(A.k.E(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=B.v(B.a([n,B.p(q,B.d(w,q,q,q,q,q,q,Z.Ro,A.L,q,q),A.f,q,q,q,q,q,q,q,E.adk,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?V.xd:A.iO
t=r.Q
s=t?A.lw:D.ER
s=B.a([new C.eH(B.a([new C.dw("Seasons",n==="seasons",new C.eco(r),A.xr,A.bs,q),new C.dw("Moon phases",n==="moon",new C.ecp(r),A.uC,A.bs,q),new C.dw(u,!1,new C.ecq(r),v,A.bs,q),new C.dw("Music",t,new C.ecr(r),s,A.bs,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=C.hr(A.bs,D.cOc[A.o.F(A.k.by(n*12),12)],"Month",1,0,new C.ecs(r),n)
v=r.z
A.d.v(s,B.a([n,C.hr(A.bs,A.k.aa(v,1)+"\xb0","Tilt",90,0,new C.ect(r),v)],p))}else{p=r.w
s.push(C.hr(A.bs,""+(A.k.by(p*29.5)+1),"Day of month",1,0,new C.ecu(r),p))}p=r.y
s.push(C.hr(A.bs,A.k.aa(p,1)+"x","Speed",4,0.2,new C.ecv(r),p))
return C.jx(A.bs,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",B.v(s,A.m,q,A.e,A.Q,0,A.p))}}
C.bnb.prototype={
a4(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.V(),b8=B.L()
b8.r=D.zp.gp(0)
b9.aW(new B.a7(0,0,0+b5,0+b6),b8)
w=new B.f3()
w.dU(4)
for(b8=b9.a,v=0;v<70;++v){u=w.af()
t=w.af()
s=w.af()
r=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
r.r=A.c.j(0.2+w.af()*0.4).gp(0)
q=r.G()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new B.u(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=B.cr(p,n*2,o*2)
t=B.L()
t.b=A.ae
t.c=1
t.r=A.ba.gp(0)
b9.hU(u,t)
t=B.L()
t.sar(D.dWZ.av(0,B.bS(p,34)))
b9.ae(p,22,t)
m=s.r*2*3.141592653589793
l=p.ao(0,new B.u(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aE(0,l).ez(0,p.aE(0,l).gcj())
J.by(b8.save())
b8.translate(l.a,l.b)
s=B.L()
s.r=D.b6E.gp(0)
b9.ae(A.J,k,s)
J.by(b8.save())
b7=new B.aO(b7.r,A.ao,b4,b4,B.a([],x.v))
b7.D(new B.ky(B.bS(A.J,k)))
b9.tl(0,b7)
b7=i.aO(0,k).aO(0,0.35)
s=k*1.1
b6=B.L()
b6.sar(D.dX7.av(0,B.bS(A.J,s)))
b9.ae(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new B.u(s,b6)
b7=new B.u(-s,-b6).aO(0,k).aO(0,1.7)
b5=h.aO(0,k).aO(0,1.7)
t=B.L()
t.c=2
t.r=A.cG.gp(0)
b9.bw(b7,b5,t)
t=h.aO(0,k).aO(0,1.7)
b5=B.L()
b5.r=A.cG.gp(0)
b9.ae(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=B.id(b4,b4,b4,b4,B.dl(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aLB,b5),A.a5,A.ch,b4,A.em,A.cg)
f.eU()
f.a4(b9,l.ao(0,new B.u(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=B.L()
r.b=A.ae
r.c=1
r.r=A.ba.gp(0)
b9.ae(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
a0.r=A.aK.j(0.6).gp(0)
a0.c=2
q=a0.G()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=B.L()
r.sar(new B.bR(new B.d6(-0.5,0),1.1,A.x,b4,0,B.a([D.b2P,D.abq],x.O),D.cG9,b4).av(0,B.bS(p,k)))
b9.ae(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ao(0,new B.u(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=B.L()
r.r=D.b0x.gp(0)
b9.ae(a1,a2,r)
J.by(b8.save())
b7=b7.r
r=x.v
d=new B.aO(b7,A.ao,b4,b4,B.a([],r))
d.D(new B.ky(B.bS(a1,a2)))
b9.tl(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=B.L()
a3.r=A.bY.gp(0)
b9.aW(new B.a7(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aE(0,p).ez(0,a1.aE(0,p).gcj())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=D.bY1[a5]
a7=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
a7.r=A.aY.j(0.45).gp(0)
a7.z=A.j9
q=a7.G()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new B.u(u,t)
a9=Math.min(b5,b6)*0.1
b6=B.L()
b6.r=D.b0t.gp(0)
b9.ae(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.by(b8.save())
b6=new B.aO(b7,A.ao,b4,b4,B.a([],r))
b6.D(new B.ky(B.bS(a8,a9)))
b9.tl(0,b6)
s=s.w
b1=new B.aO(b7,A.ao,b4,b4,B.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.D(new B.b4(u,b5))
b6=b2>0
b1.azh(new B.u(u,t+a9),b6,new B.aY(a9,a9))
if(b0<0.5)b6=b2<0
b1.azh(new B.u(u,b5),b6,new B.aY(a9*Math.abs(1-2*b0),a9))
b6=B.L()
b6.r=A.bY.gp(0)
b9.aL(b1,b6)
b8.restore()
b8=B.L()
b8.b=A.ae
b8.c=1
b8.r=A.ba.gp(0)
b9.ae(a8,a9,b8)
b3=B.id(b4,b4,b4,b4,D.eCl,A.a5,A.ch,b4,A.em,A.cg)
b3.eU()
b3.a4(b9,a8.ao(0,new B.u(-b3.b.c/2,a9+6)))}},
ap(d){return!0}}
C.aIk.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.btm.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
w=this.fc$
w===$&&B.c()
w.q()
this.bpp()}}
C.aIJ.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.btt.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
w=this.fc$
w===$&&B.c()
w.q()
this.bpP()}}
C.aJl.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.btH.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a9(0)
w=this.fc$
w===$&&B.c()
w.q()
this.bqs()}}
var z=a.updateTypes(["~()","S(rU)","S(a2t)","aw<~>()","S(Bm)","I(rU,I)","P(P,rU)","S(Bi)","S(Xp)","S(a9g)","S(uu)","S(a1c)","S(n0)","S(YW)","S(aa3)","I(I)","SD()","Te()","St()","Ts()","TL()","TN()","SC()","U5()","Uk()","U6()","U3()","Ur()","SB()","Uw()","S(me)","TY()","U2()","acH(Y,I)","abB(Y,I)","~(a1<@,@>)","I(Bi,Bi)","n(e4)","S(acx)","S(ZD)","S(Bw)","S(a9L)","S(abF)","S(a9u)","I(I,qg)","I(I,Bm)","n(qg)","~(qg,ak<n>,I)","qg?(Bm)","S(qg)","r(n,Zq)","S(Oi)","~(zA)","S(a9B)","P(I?)","Uy()","S(Ez)","S(aaS)","P(I)","Tf()","P(O1)","S(a8c)","Sy()","a6i()","~(agz,n,u,w,P)","~(n,rU)","U0()","TG(Y)","SX(Y,bm<P>,bm<P>)","Ux(Y,bm<P>,bm<P>)","UC()","Tm()","Sz()","Td()","TZ()","Ua()","Uv()","TX()","~(n)","cp(a8Y)","S(a8X)","Tt()","Uj()","Tu()","Sx()","Tq()","Ub()","U7()","SZ()","S(O1)","~(b8)"])
C.feT.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
C.f6E.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gL(d.e.split(". "))+"."},
$S:z+37}
C.fcf.prototype={
$1(d){var w
if(!this.a.Kc(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+1}
C.fcg.prototype={
$1(d){return d.x},
$S:z+1}
C.feQ.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
C.feR.prototype={
$1(d){var w
if(!this.a.Kc(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+1}
C.feS.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.dWE.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dWF.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.z(this.b,this.c))},
$S:0}
C.dWG.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gcV(v).Q
v.toString
w.lE(v,A.dT,A.i4)}},
$S:8}
C.dWR.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a7(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.dWS.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.dWN.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.dWL.prototype={
$2(d,e){var w=this.a
w.r.push(B.cP(B.dB(0,0,0,d,0,0),new C.dWM(w,this.b,e)))},
$S:1799}
C.dWM.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.dWO.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gUg().ah4(0,u[1],u[2],u[3])
u[4].bG(0,new C.dWJ(t))
v.e.m(0,t.a,0)
w.d.m(0,u[0],t)
C.dG(700+w.e*120,"",80,0,0.25,"square")
v.n(new C.dWK(w.a,v,w.f,w.r))},
$S:0}
C.dWJ.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:176}
C.dWK.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.k.by(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.dWP.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gUg().ahO(t,u[1],s,u[3])
C.dG(1500,"",45,0,0.25,"tri")
v=w.b
v.n(new C.dWI(w.a,v,w.e,w.f))},
$S:0}
C.dWI.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.k.by(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.dWQ.prototype={
$0(){C.dG(300,"",360,-1.2,0.3,"square")
var w=this.a
w.n(new C.dWH(w,this.b))},
$S:0}
C.dWH.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.dWV.prototype={
$0(){var w=this.a
return w.n(new C.dWU(w))},
$S:0}
C.dWU.prototype={
$0(){return this.a.at=!0},
$S:0}
C.dWW.prototype={
$0(){var w=this.a
return w.n(new C.dWT(w))},
$S:0}
C.dWT.prototype={
$0(){return this.a.at=!1},
$S:0}
C.dWX.prototype={
$0(){var w=this.a
w.f.saT(0,this.b)
w.LW()},
$S:0}
C.dWY.prototype={
$0(){return this.a.We(this.b)},
$S:0}
C.dWZ.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.LW():w.aRD()},
$S:2}
C.dX_.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.LW():w.aRD()},
$S:0}
C.eb1.prototype={
$2(d,e){return d+e},
$S:1800}
C.ebl.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.ebk(w,d))},
$S:135}
C.ebk.prototype={
$0(){var w=B.aM(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.ebm.prototype={
$0(){},
$S:0}
C.ebn.prototype={
$0(){},
$S:0}
C.eb3.prototype={
$0(){return this.a.n(new C.eb2(this.b,this.c))},
$S:0}
C.eb2.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eaT.prototype={
$1(d){return this.a.cx===d},
$S:59}
C.eaU.prototype={
$1(d){return this.a.cx=d},
$S:27}
C.eaV.prototype={
$1(d){return this.a.cy===d},
$S:59}
C.eaW.prototype={
$1(d){return this.a.cy=d},
$S:27}
C.eaX.prototype={
$1(d){return this.a.db===d},
$S:59}
C.eaY.prototype={
$1(d){return this.a.db=d},
$S:27}
C.eaZ.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:59}
C.eb_.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.K(0,d)},
$S:27}
C.eb0.prototype={
$0(){var w=this.a
return w.n(w.gatj())},
$S:0}
C.eaR.prototype={
$1(d){return this.a.$1(!0)},
$S:81}
C.eaS.prototype={
$1(d){return this.a.$1(!1)},
$S:143}
C.eaQ.prototype={
$1(d){return this.a.$1(!1)},
$S:202}
C.ebe.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.as(e.b,e.d)
o.ch=n
n=B.b2(p,p,p,new C.bdB(o,p),n)
w=this.b
v=C.bw2("WORLD",w.a,w.c)
u=C.bw2("GRAVITY",B.t(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.U(t*100)
t=t<0.25?A.cG:A.bg
t=C.bw2("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.U(s*100)
s=s>D.B_[o.db].d?A.cG:A.c
q=x.p
s=B.a([v,u,t,C.bw2("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(C.bw2("HEIGHT",""+A.k.U(A.k.E(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.an(p,B.B(s,A.m,p,A.hG,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.by_(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.qD[w].a+".":"You landed on every world!"
v=B.a([new C.fd(A.m7,"Again",new C.eb9(o),A.c,p),new C.fd(A.x2,"Rebuild",new C.eba(o),A.aK,p)],q)
if(o.d+1<7)v.push(new C.fd(A.jn,"Next world",new C.ebb(o),A.bg,p))
n.push(C.h0p("Perfect landing!",w,A.bg,v))}if(o.as==="crashed")n.push(C.h0p("Crash!",o.at,A.cG,B.a([new C.fd(A.m7,"Try again",new C.ebc(o),A.bg,p),new C.fd(A.x2,"Rebuild",new C.ebd(o),A.aK,p)],q)))
return new B.am(A.W,p,A.aZ,A.q,n,p)},
$S:61}
C.eb9.prototype={
$0(){var w=this.a
return w.n(w.gatj())},
$S:0}
C.eba.prototype={
$0(){var w=this.a
return w.n(new C.eb6(w))},
$S:0}
C.eb6.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.ebb.prototype={
$0(){var w=this.a
return w.n(new C.eb5(w))},
$S:0}
C.eb5.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.ebc.prototype={
$0(){var w=this.a
return w.n(w.gatj())},
$S:0}
C.ebd.prototype={
$0(){var w=this.a
return w.n(new C.eb4(w))},
$S:0}
C.eb4.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.ebf.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.n(new C.eb8(v,w))},
$S:0}
C.eb8.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.ebg.prototype={
$1(d){return this.a.y=d},
$S:9}
C.ebh.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.ebi.prototype={
$1(d){return this.a.z=d},
$S:9}
C.ebj.prototype={
$0(){var w=this.a
return w.n(new C.eb7(w))},
$S:0}
C.eb7.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dy3.prototype={
$0(){var w=0,v=B.j(x.P),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=$.fWQ
if(q==null)q=$.fWQ=C.czI()
w=3
return B.b(B.iD(B.a([q,$.tz().baY("assets/data/three.min.js")],x.aJ),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.k9(0,B.cK(J.q(s,1)))
q.n(new C.dy2(q,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:52}
C.dy2.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
C.dxG.prototype={
$0(){return this.a.bOP(B.aS(J.q(this.b,"group")))},
$S:0}
C.dxH.prototype={
$1(d){return A.a.aU(A.o.fG(A.o.E(A.k.U(d*255),0,255),16),2,"0")},
$S:418}
C.dy4.prototype={
$0(){return C.a6h("kick",0.25)},
$S:0}
C.dxI.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dxJ.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.dxK.prototype={
$0(){return C.a6h("kick",0.5)},
$S:0}
C.dxL.prototype={
$0(){return C.dG(1300+this.a.R8.aC(900),"",40,0,0.2,"square")},
$S:0}
C.dxN.prototype={
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
u=w}if(u.cx!=null&&!A.d.ba(u.d.e,new C.dxM(u)))u.cx=null
u.go=0},
$S:0}
C.dxM.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.auT(d)},
$S:z+11}
C.dxD.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
C.dxE.prototype={
$0(){var w=this.a
return w.n(w.gbYW())},
$S:0}
C.dxF.prototype={
$0(){return this.a.aeM(null)},
$S:0}
C.dxU.prototype={
$0(){var w=this.a.as
return w==null?null:w.eM(0,B.E(["t","shot"],x.N,x.z))},
$S:0}
C.dxV.prototype={
$0(){return this.a.crU(this.b.a)},
$S:0}
C.dxW.prototype={
$0(){return this.a.aeM(this.b)},
$S:0}
C.dxX.prototype={
$1(d){var w=this.a
return w.n(new C.dxT(w,d))},
$S:6}
C.dxT.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.dxY.prototype={
$0(){var w=this.a
return w.n(new C.dxS(w,this.b))},
$S:0}
C.dxS.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.dxZ.prototype={
$0(){var w=this.a
return w.n(new C.dxR(w))},
$S:0}
C.dxR.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.dy_.prototype={
$0(){var w=this.a
return w.n(new C.dxQ(w))},
$S:0}
C.dxQ.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eM(0,B.E(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.IA},
$S:0}
C.dy0.prototype={
$0(){var w=this.a
return w.n(new C.dxP(w))},
$S:0}
C.dxP.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aU8()
else w.p2=null},
$S:0}
C.dy1.prototype={
$0(){var w=this.a
return w.n(new C.dxO(w))},
$S:0}
C.dxO.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
C.bX1.prototype={
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
$S:292}
C.bX2.prototype={
$1(d){var w=new B.rb([],[]).oS(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:599}
C.f1d.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)&&w.h(d,1)},
$S:230}
C.f1e.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)||w.h(d,1)},
$S:230}
C.f1f.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)!==w.h(d,1)},
$S:230}
C.f1m.prototype={
$1(d){return!J.q(d,0)},
$S:230}
C.f1n.prototype={
$1(d){var w=J.a8(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:230}
C.f1o.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:230}
C.dAe.prototype={
$1(d){return this.a.aq4(0)},
$S:8}
C.dzT.prototype={
$0(){var w=this.b
return this.a.cx=new B.J(w,B.hGW(),B.U(w).k("J<1,I>")).fH(0)},
$S:0}
C.dzW.prototype={
$1(d){return""+d},
$S:82}
C.dAf.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dzR.prototype={
$1(d){return this.a.aq4(this.b)},
$S:8}
C.dzS.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.atE(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.m2(0,d,a1.lv(0.15,0.3))
u=a1.m2(0,d,a1.lv(0.15,0.62))
t=a1.m2(0,"and",a1.lv(0.48,0.46))
s=a1.m2(0,a0,a1.lv(0.82,0.46))
a1=t.a
w.push(new C.n0(v.a,a1,0))
w.push(new C.n0(u.a,a1,1))
w.push(new C.n0(a1,s.a,0))
break
case 1:v=a1.m2(0,d,a1.lv(0.12,0.25))
u=a1.m2(0,d,a1.lv(0.12,0.65))
r=a1.m2(0,"xor",a1.lv(0.46,0.25))
q=a1.m2(0,"and",a1.lv(0.46,0.65))
p=a1.atD(0,a0,a1.lv(0.82,0.25),0)
o=a1.atD(0,a0,a1.lv(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.n0(a1,n,0))
m=u.a
w.push(new C.n0(m,n,1))
l=q.a
w.push(new C.n0(a1,l,0))
w.push(new C.n0(m,l,1))
w.push(new C.n0(n,p.a,0))
w.push(new C.n0(l,o.a,0))
break
case 2:k=a1.m2(0,"clock",a1.lv(0.15,0.4))
j=a1.m2(0,"not",a1.lv(0.45,0.65))
s=a1.m2(0,a0,a1.lv(0.82,0.3))
i=a1.m2(0,"buzzer",a1.lv(0.82,0.65))
a1=k.a
w.push(new C.n0(a1,s.a,0))
n=j.a
w.push(new C.n0(a1,n,0))
w.push(new C.n0(n,i.a,0))
break
default:h=a1.m2(0,d,a1.lv(0.12,0.25))
g=a1.m2(0,d,a1.lv(0.12,0.7))
f=a1.m2(0,"nor",a1.lv(0.5,0.25))
e=a1.m2(0,"nor",a1.lv(0.5,0.7))
s=a1.m2(0,a0,a1.lv(0.86,0.25))
a1=f.a
w.push(new C.n0(g.a,a1,0))
n=e.a
w.push(new C.n0(n,a1,1))
w.push(new C.n0(h.a,n,0))
w.push(new C.n0(a1,n,1))
w.push(new C.n0(a1,s.a,0))}},
$S:0}
C.dzX.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.atE(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.m(0,p,new C.Bi(p,"switch",new B.u(0.14*q.a,r*q.b),0))}o.m2(0,w.e,o.lv(0.86,0.5))},
$S:0}
C.dzM.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dzN.prototype={
$2(d,e){return A.k.aJ(d.c.b,e.c.b)},
$S:z+36}
C.dzO.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dzP.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dzQ.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.aad(this.c)
if(v.ax)C.AI("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gL(w)
v.CW=!1
if(v.ax)C.dG(140,"",250,0,0.3,"square")}},
$S:0}
C.dzY.prototype={
$0(){},
$S:0}
C.dzZ.prototype={
$0(){return A.d.cu(this.a.e,this.b)},
$S:0}
C.dA_.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dzV.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bm(w.e,new C.dzU(v))
w.cy=null},
$S:0}
C.dzU.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
C.dzL.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.m2(0,this.b,new B.u(w.x.a*(0.3+v.af()*0.4),w.x.b*(0.2+v.af()*0.6))).a},
$S:0}
C.dA8.prototype={
$0(){var w=this.a
return w.n(new C.dA7(w))},
$S:0}
C.dA7.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dA9.prototype={
$2(d,e){var w=null,v=this.a,u=new B.as(e.b,e.d)
v.x=u
return B.aG(A.c5,B.jA(B.b2(w,w,w,new C.b7N(v,w),u),A.q,w),A.z,!1,w,w,w,w,w,w,w,w,new C.dA2(v),w,w,w,new C.dA3(v),new C.dA4(v),new C.dA5(v),w,w,w,w,w,w,w,w,w,w,new C.dA6(v),w,w,w,!1,A.ad)},
$S:33}
C.dA6.prototype={
$1(d){return this.a.bZV(d.b)},
$S:51}
C.dA4.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.c7g(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aup(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aE(0,u)}},
$S:40}
C.dA5.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.u(A.k.E(w.a+u.Q.a,46,u.x.a-46),A.k.E(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
C.dA3.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bSn(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bm(v,new C.dA0(w))
u=t.as
u.toString
v.push(new C.n0(u,w.a,w.b))
B.jE()}}t.z=t.as=null},
$S:35}
C.dA0.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
C.dA2.prototype={
$1(d){return this.a.asC(d.b)},
$S:280}
C.dAa.prototype={
$0(){return this.a.bu_(this.b.a)},
$S:0}
C.dAb.prototype={
$0(){return this.a.aq4(this.b.a)},
$S:0}
C.dAc.prototype={
$0(){var w=this.a
return w.n(new C.dA1(w))},
$S:0}
C.dA1.prototype={
$0(){var w=this.a
w.atE(0)
w.ay=null},
$S:0}
C.dAd.prototype={
$0(){return this.a.cnS(this.b)},
$S:0}
C.cGu.prototype={
$0(){var w=this,v=null,u=B.id(v,v,v,v,B.dl(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.ch,v,A.em,A.cg)
u.eU()
return u},
$S:314}
C.dFr.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dFq.prototype={
$0(){return this.a.d=null},
$S:0}
C.dFt.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.bU8()},
$S:123}
C.dFs.prototype={
$0(){return B.a9(this.a,!1).nh()},
$S:0}
C.f1E.prototype={
$0(){return D.dIx},
$S:z+55}
C.f1F.prototype={
$0(){return D.dgH},
$S:z+59}
C.f1G.prototype={
$0(){return D.ddA},
$S:z+62}
C.f1R.prototype={
$0(){return D.dHX},
$S:z+63}
C.f1T.prototype={
$0(){return D.dn4},
$S:z+66}
C.f1U.prototype={
$0(){return D.dgD},
$S:z+88}
C.f1V.prototype={
$0(){return D.dgG},
$S:z+17}
C.f1W.prototype={
$0(){return D.d9L},
$S:z+18}
C.f1X.prototype={
$0(){return D.dja},
$S:z+19}
C.f1Y.prototype={
$0(){return D.dkN},
$S:z+20}
C.f1Z.prototype={
$0(){return D.dkP},
$S:z+21}
C.f1H.prototype={
$0(){return D.dfP},
$S:z+22}
C.f1I.prototype={
$0(){return D.dpO},
$S:z+23}
C.f1J.prototype={
$0(){return D.dHE},
$S:z+24}
C.f1K.prototype={
$0(){return D.dFH},
$S:z+25}
C.f1L.prototype={
$0(){return D.dot},
$S:z+26}
C.f1M.prototype={
$0(){return D.dHM},
$S:z+27}
C.f1N.prototype={
$0(){return D.dfO},
$S:z+28}
C.f1O.prototype={
$0(){return D.dHW},
$S:z+29}
C.f1P.prototype={
$0(){return D.dfQ},
$S:z+16}
C.f1Q.prototype={
$0(){return D.dl4},
$S:z+31}
C.f1S.prototype={
$0(){return D.dos},
$S:z+32}
C.eJ9.prototype={
$2(d,e){return new C.acH($.bAp()[e],new C.eJ8(e,this.a),null)},
$S:z+33}
C.eJ8.prototype={
$0(){var w=this.a,v=D.az2.h(0,$.bAp()[w].a)
$.aZA=v==null?"music":v
B.a9(this.b,!1).cp(B.eF(new C.eJ6(w),!1,null,x.H))},
$S:0}
C.eJ6.prototype={
$1(d){return $.bAp()[this.a].e.$0()},
$S:44}
C.eJa.prototype={
$2(d,e){return new C.abB(D.arQ[e],new C.eJ7(this.a,e),null)},
$S:z+34}
C.eJ7.prototype={
$0(){return this.a.d.$1(D.arQ[this.b])},
$S:0}
C.eIQ.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eIP.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eIO.prototype={
$1(d){var w=this
return new B.e6(new C.eIN(w.a,w.b,w.c,w.d),null)},
$S:20}
C.eIN.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=B.aH(a2,d,a0).w
a0=B.aH(a2,d,a0).w
w=x.p
v=B.a([D.eWw,A.av,D.f1v,A.ab],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new B.aY(12,12)
m=new B.aY(12,12)
m=B.a([new B.bG(1,A.bp,B.aK(d,A.U,!1,d,!0,A.q,d,B.aL(),r[p],d,d,d,d,d,2,new B.e2(d,d,d,d,d,d,d,d,d,d,"Title",d,G.Cc,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b3(4,new B.bv(n,n,n,n),A.Z),!0,d,d,d,d),A.z,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,A.iC,!0,A.a5,d,A.am,d,d,d,d),d),A.aa,new B.bG(2,A.bp,B.aK(d,A.U,!1,d,!0,A.q,d,B.aL(),q[p],d,d,d,d,d,2,new B.e2(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.Cc,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b3(4,new B.bv(m,m,m,m),A.Z),!0,d,d,d,d),A.z,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,A.iC,!0,A.a5,d,A.am,d,d,d,d),d)],w)
n=B.a([],w)
for(l=0;l<30;++l){k=D.d1f[l]
j=new B.aY(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.A(t.a.c.d,s)
t.w=i}h=A.d.gL(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.A(t.a.c.d,s)
t.w=i}g=A.d.gL(i)}else g=A.bG
f=new B.ay(g,u[p].A(0,k)?1.8:1,A.r,-1)
n.push(B.aG(d,B.p(d,B.W(k,u[p].A(0,k)?A.c:A.aQ,d,d,d,22),A.f,d,d,new B.o(h,d,new B.c3(f,f,f,f),new B.bv(j,j,j,j),d,d,A.n),d,d,d,A.ho,d,d,d,42),A.z,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eIL(a3,p,u,k),d,d,d,d,d,d,!1,A.ad))}A.d.v(v,B.a([new B.x("SLAB "+o,d,D.eMN,d,d,d,d,d,d,d,d,d),A.ar,new B.cD(A.b_,A.e,A.j,A.m,d,A.p,d,0,m,d),A.P,new B.a4(d,44,B.cM(n,d,d,d,d,A.b_,!1),d),A.ay],w))}v.push(B.bL(A.yE,new C.eIM(t,r,q,u,a2),d))
return new B.C(new B.N(0,0,0,a1.f.d),B.bp(!0,new B.d1(new B.aW(0,1/0,0,a0.a.b*0.86),B.cM(v,d,Y.zZ,d,d,A.ak,!0),d),!0,!1,A.ag,!0,!0),d)},
$S:108}
C.eIL.prototype={
$0(){var w=this
return w.a.$1(new C.eIK(w.b,w.c,w.d))},
$S:0}
C.eIK.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.eIM.prototype={
$0(){var w=this,v=w.a
v.n(new C.eIJ(v,w.b,w.c,w.d))
B.a9(w.e,!1).M(null)},
$S:0}
C.eIJ.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this
for(w=m.d,v=m.c,u=m.a,t=m.b,s=x.N,r=x.Z,q=0;q<3;++q){p=u.y
if(p===$){p=B.A(u.a.c.f,s)
u.y=p
o=p}else o=p
n=A.a.i(t[q].a.a)
if(n.length===0)n=o[q]
p[q]=n
p=u.z
if(p===$){p=B.A(u.a.c.r,s)
u.z=p}p[q]=A.a.i(v[q].a.a)
p=u.x
if(p===$){p=B.A(u.a.c.e,r)
u.x=p}p[q]=w[q]}},
$S:0}
C.eIY.prototype={
$0(){var w=this.a
return w.n(new C.eIX(w))},
$S:0}
C.eIX.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.eIZ.prototype={
$0(){return C.qo(this.b,this.a.f,"scene")},
$S:0}
C.eJ_.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.aq(A.d.gL(u),A.d.gaj(u),0.4)
u.toString
w=this.a.gXs().x
w===$&&B.c()
return B.bV(v,new B.o(v,v,v,v,v,new B.bR(D.aP0,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.bW],x.O),v,v),A.n),A.bb)},
$S:294}
C.eJ0.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.au(B.f_(A.A,B.c4(new B.h5(B.a([u.gt8(),u.gXs()],x.dS)),new C.eIW(u,this.b,v),w),A.f,A.ec),w,w,w)},
$S:256}
C.eIW.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gt8().x
r===$&&B.c()
w=r<0.9?1:1-C.bnt(r,0.9,0.98)
v=s.gXs().x
v===$&&B.c()
u=A.dH.au(0,v)
switch(s.gatF().a){case 0:s=s.btd(t.b,r,u,t.c)
break
case 1:s=s.bJ9(t.b,r,u,t.c)
break
case 2:s=s.csm(t.b,r,u,t.c)
break
case 3:s=s.bw5(t.b,r,u,t.c)
break
case 4:s=s.bzc(t.b,r,u,t.c)
break
case 5:s=s.byq(t.b,r,u,t.c)
break
default:s=null}return B.d8(s,w)},
$S:205}
C.eJ1.prototype={
$2(d,e){var w=B.asH(this.b),v=this.c.d,u=B.aq(A.d.gL(v),A.d.gaj(v),0.4)
u.toString
v=B.aq(A.d.gL(v),A.d.gaj(v),0.4)
v.toString
v=w.cAv(u,A.bG,v,3.5)
u=this.a
w=u.gt8().x
w===$&&B.c()
return B.a7Z(B.lQ(null,null,null,1,0,new C.eIV(u),A.k.E(w,0,1)),v)},
$S:1804}
C.eIV.prototype={
$1(d){var w=this.a
w.gt8().sp(0,d)
if(w.as)w.n(new C.eIR(w))},
$S:6}
C.eIR.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eJ2.prototype={
$0(){var w=this.a
w.gt8().sp(0,0)
w.adw()},
$S:0}
C.eJ3.prototype={
$1(d){var w=this.a
w.n(new C.eIU(w,d))
if(w.as)w.adw()},
$S:6}
C.eIU.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eJ4.prototype={
$0(){var w=this.a
w.n(new C.eIT(w,this.b))
w.gt8().sp(0,0)
if(w.as)w.adw()},
$S:0}
C.eIT.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.eJ5.prototype={
$0(){var w=this.a
return w.n(new C.eIS(w,this.b))},
$S:0}
C.eIS.prototype={
$0(){var w=B.A(this.b,x.G)
return this.a.w=w},
$S:0}
C.eIH.prototype={
$2(d,e){return A.k.aJ(d.a,e.a)},
$S:1805}
C.eII.prototype={
$1(d){return d.b},
$S:1806}
C.da_.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.da0.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.d9X.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.d9Y.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.d9Z.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.da1.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.da2.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.da3.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.da4.prototype={
$1(d){return d.d<this.a.ax},
$S:z+38}
C.da5.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+39}
C.da6.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+40}
C.da7.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+41}
C.da8.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+42}
C.da9.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+43}
C.eam.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eab.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.ead.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gV(e.b),97)},
$S:z+44}
C.eae.prototype={
$2(d,e){return d+A.o.F(A.a.gV(e.a),31)+A.o.F(A.a.gV(e.b),17)},
$S:z+45}
C.eah.prototype={
$1(d){var w=D.md.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+46}
C.eai.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.A(new B.e3(new B.cV(new B.a3(q,new C.eaj(d),p.k("a3<1>")),new C.eak(r),p.k("cV<1,qg?>")),o),o.k("G.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aH(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.K)(n),++v){u=n[v]
if(w.length>=6)return
t=B.A(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+47}
C.eaj.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eak.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+48}
C.eaf.prototype={
$1(d){return D.md.h(0,d.b).c===D.vK},
$S:z+49}
C.eag.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eaM.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.E((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.a5l(0,u)
w.cMm(A.o.al(v,1000))},
$S:8}
C.eal.prototype={
$0(){},
$S:0}
C.ea7.prototype={
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
C.eao.prototype={
$1(d){var w=null,v=this.a.b
return B.bp(!0,B.v(B.a([A.P,B.dL(!1,w,w,w,!0,w,w,w,!0,w,B.W(D.md.h(0,v).b,D.md.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fbQ,w,B.d(D.md.h(0,v).a,w,w,w,w,w,w,A.hh,w,w,w),w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,S.aiR,w,w,w,w,new C.ean(d),!1,w,w,w,w,w,w,w,D.f47,w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:34}
C.ean.prototype={
$0(){B.a9(this.a,!1).M(!0)
return null},
$S:0}
C.eaq.prototype={
$1(d){var w,v,u=null,t=B.aH(d,u,x.m).w,s=B.a([D.dQs],x.p)
for(w=0;w<6;++w){v=D.as7[w]
s.push(B.dL(!1,u,u,u,!0,u,u,u,!0,u,D.bEp,u,u,u,u,new C.eap(d,v),!1,u,u,u,u,u,new B.x(v.b,u,A.ld,u,u,u,u,u,u,u,u,u),u,new B.x(v.a,u,A.hh,u,u,u,u,u,u,u,u,u),u,u,u))}return B.bp(!0,new B.d1(new B.aW(0,1/0,0,t.a.b*0.7),B.cM(s,u,D.bm1,u,u,A.ak,!0),u),!0,!1,A.ag,!0,!0)},
$S:34}
C.eap.prototype={
$0(){B.a9(this.a,!1).M(this.b)
return null},
$S:0}
C.eaa.prototype={
$1(d){var w=null
return B.er(B.a([B.bJ(!1,A.dg,w,w,!0,w,w,new C.ea8(d),w,w),B.bJ(!1,A.Ch,w,w,!0,w,w,new C.ea9(d),w,w)],x.p),w,w,D.rG,D.f1F,w,w,w,w,D.f4o,w)},
$S:21}
C.ea8.prototype={
$0(){B.a9(this.a,!1).M(!1)
return null},
$S:0}
C.ea9.prototype={
$0(){B.a9(this.a,!1).M(!0)
return null},
$S:0}
C.eaK.prototype={
$0(){var w=this.a
return w.n(new C.eaJ(w))},
$S:0}
C.eaJ.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eaL.prototype={
$2(d,e){var w,v,u,t=null,s=new B.as(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.lX(new C.eaA(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.aYk:t
v=B.a([B.b2(u,t,t,new C.bdz(w,v,new C.eaB(r),new C.eaC(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.an(t,B.e1(B.c4(w,new C.eaD(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bAR())
return B.aG(A.c5,B.jA(new B.am(A.W,t,A.aZ,A.q,v,t),A.q,t),A.z,!1,t,t,t,t,t,t,t,t,new C.eaE(r),t,r.gc8w(),t,new C.eaF(r),new C.eaG(r),new C.eaH(r),t,t,t,t,t,t,t,t,t,t,new C.eaI(r),t,t,t,!1,A.ad)},
$S:33}
C.eaA.prototype={
$0(){return this.a.a9k(this.b)},
$S:0}
C.eaI.prototype={
$1(d){return this.a.cqe(d.b)},
$S:51}
C.eaG.prototype={
$1(d){return this.a.c8x(d.b)},
$S:40}
C.eaH.prototype={
$1(d){return this.a.c8y(d.b)},
$S:18}
C.eaF.prototype={
$1(d){return this.a.aX8()},
$S:35}
C.eaE.prototype={
$1(d){return this.a.aa_(d.b)},
$S:280}
C.eaB.prototype={
$0(){return this.a.z},
$S:686}
C.eaC.prototype={
$0(){return this.a.Q},
$S:723}
C.eaD.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bF5()
if(p.length===0)return A.bF
w=A.w.j(0.55)
v=B.m(14)
u=B.H(A.bG,A.r,1)
t=B.a([D.f_m,A.d6],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.K)(p),++r)t.push(new B.x(p[r],q,D.eLB,q,q,q,q,A.a2,q,2,q,q))
return B.p(q,B.v(t,A.F,q,A.e,A.Q,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.ha,q,q,q)},
$S:58}
C.eac.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.m(12),t=B.H(e.j(0.6),A.r,1),s=x.p
return new B.C(A.e3,B.B(B.a([B.p(w,B.W(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.be,B.D(B.v(B.a([B.d(f,w,w,w,w,w,w,Z.Ro,w,w,w),A.bB,B.d(g,w,w,w,w,w,w,D.aL2,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1808}
C.eaw.prototype={
$0(){var w=this.a.c
w.toString
return B.a9(w,!1).nh()},
$S:0}
C.eax.prototype={
$0(){var w=this.a
return w.n(new C.eav(w))},
$S:0}
C.eav.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eay.prototype={
$0(){var w=this.a
return w.n(new C.eau(w))},
$S:0}
C.eau.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.eaz.prototype={
$0(){var w=this.a
return w.n(new C.eat(w))},
$S:0}
C.eat.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eas.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.md.gdH(D.md),w=w.gah(w);w.C();){v=w.gT(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.K)(p),++r)u.push(s.clj(p[r]))
return new B.C(F.acC,B.v(B.a([new B.C(P.aee,w,q),B.B(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+50}
C.ear.prototype={
$0(){return this.a.c__(this.b)},
$S:0}
C.d9W.prototype={
$0(){var w=this,v=null,u=B.id(v,v,v,v,B.dl(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.ch,v,A.em,A.cg)
u.eU()
return u},
$S:314}
C.ekx.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.E((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.al(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new B.u(s.a+q*n,s.b+r*n)
t.b=new B.u(q*v,r*v)}A.d.bm(o,new C.ekv(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.n(new C.ekw())},
$S:8}
C.ekv.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+51}
C.ekw.prototype={
$0(){},
$S:0}
C.ek8.prototype={
$0(){},
$S:0}
C.ek7.prototype={
$0(){},
$S:0}
C.ekh.prototype={
$0(){return C.qo(this.b,this.a.d,"spark-painter")},
$S:0}
C.ekj.prototype={
$1(d){return this.a.aUw(0,d.b)},
$S:40}
C.ekn.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gaj(w).aE(0,u).gcj()>2.5}else w=!1
if(w)t.a.push(u)
v.aNY(u)
v.c20(u)
return null},
$S:18}
C.eki.prototype={
$1(d){return this.a.aUv()},
$S:35}
C.eko.prototype={
$1(d){return this.a.aUw(0,d.b)},
$S:23}
C.ekp.prototype={
$1(d){return this.a.aUv()},
$S:51}
C.ekq.prototype={
$0(){var w=this.a
return w.n(new C.ekg(w,this.b))},
$S:0}
C.ekg.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
C.ekr.prototype={
$0(){var w=this.a
return w.n(new C.ekf(w))},
$S:0}
C.ekf.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.eks.prototype={
$0(){var w=this.a
return w.n(new C.eke(w,this.b))},
$S:0}
C.eke.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.ekt.prototype={
$1(d){var w=this.a
return w.n(new C.ekd(w,d))},
$S:6}
C.ekd.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eku.prototype={
$0(){var w=this.a
return w.n(new C.ekc(w))},
$S:0}
C.ekc.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.ekk.prototype={
$0(){var w=this.a
return w.n(new C.ekb(w))},
$S:0}
C.ekb.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.ekl.prototype={
$0(){var w=this.a
return w.n(new C.eka(w))},
$S:0}
C.eka.prototype={
$0(){var w=this.a
A.d.a7(w.e)
A.d.a7(w.f)},
$S:0}
C.ekm.prototype={
$0(){var w=this.a
return w.n(new C.ek9(w,this.b))},
$S:0}
C.ek9.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.er6.prototype={
$0(){return C.qo(this.b,this.a.d,"title")},
$S:0}
C.er7.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gHr().x
q===$&&B.c()
w=B.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.bUh(v[t],t,s,q,u))
return new B.C(A.fC,B.c9(A.fH,w,A.ra,0,0),null)},
$S:706}
C.er8.prototype={
$1(d){return this.a.n(new C.er5())},
$S:2}
C.er5.prototype={
$0(){},
$S:0}
C.er9.prototype={
$0(){var w=this.a
w.n(new C.er4(w,this.b))
w=w.gHr()
w.ig(0,0)
w.cE(0)},
$S:0}
C.er4.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.era.prototype={
$0(){var w=this.a
return w.n(new C.er3(w,this.b))},
$S:0}
C.er3.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.erb.prototype={
$0(){var w=this.a
return w.n(new C.er2(w))},
$S:0}
C.er2.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
C.erc.prototype={
$0(){var w=this.a
return w.n(new C.er1(w,this.b))},
$S:0}
C.er1.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.erd.prototype={
$0(){var w=this.a.gHr()
w.ig(0,0)
w.cE(0)},
$S:0}
C.ere.prototype={
$1(d){var w=this.a
return w.n(new C.er0(w,d))},
$S:6}
C.er0.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.e7m.prototype={
$1(d){return d.a.aE(0,this.a).gcj()<16},
$S:z+13}
C.e7n.prototype={
$1(d){var w=this.b
return d.a.aE(0,w).gcj()<16||d.a.aE(0,w).gcj()>this.a.r.gajO()*2.2},
$S:z+13}
C.e7a.prototype={
$0(){return C.qo(this.b,this.a.d,"orbits")},
$S:0}
C.e7b.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new B.as(e.b,e.d)
q.r=p
w=q.gab9()
v=q.w
u=q.as
t=q.at
s=u==null?A.a_I:q.cc4(u,q.gaS5())
return new B.eq(B.aG(A.c5,B.b2(r,r,r,new C.bhS(q.e,w,v,u,t,s,r),p),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,new C.e77(q),new C.e78(q),new C.e79(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.ad),q.d)},
$S:199}
C.e78.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:40}
C.e79.prototype={
$1(d){return this.a.at=d.b},
$S:18}
C.e77.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aE(0,w).gcj()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new C.YW(u,v.gaS5(),v.Q,v.aYA(),B.a([],x.g)))
B.jE()
if(v.ax)C.dG(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:35}
C.e7c.prototype={
$1(d){var w=this.a
return w.n(new C.e76(w,d))},
$S:6}
C.e76.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e7e.prototype={
$1(d){var w=this.a
return w.n(new C.e75(w,d))},
$S:6}
C.e75.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.e7f.prototype={
$1(d){var w=this.a
return w.n(new C.e74(w,d))},
$S:6}
C.e74.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.e7g.prototype={
$0(){var w=this.a
return w.n(new C.e73(w))},
$S:0}
C.e73.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.e7h.prototype={
$0(){var w=this.a
return w.n(new C.e72(w))},
$S:0}
C.e72.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
C.e7i.prototype={
$0(){var w=this.a
return w.n(new C.e71(w))},
$S:0}
C.e71.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.e7j.prototype={
$0(){var w=this.a
return w.n(w.gcny())},
$S:0}
C.e7k.prototype={
$0(){var w=this.a
return w.n(w.gbB4())},
$S:0}
C.e7l.prototype={
$0(){var w=this.a
return w.n(new C.e70(w))},
$S:0}
C.e70.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.af()
s=w.r
w.aop(50+t*(Math.min(s.a,s.b)/2-70),v.af()*3.141592653589793*2,0.7+v.af()*0.5,v.he())}},
$S:0}
C.e7d.prototype={
$0(){var w=this.a
return w.n(A.d.gqN(w.e))},
$S:0}
C.eqy.prototype={
$1(d){return this.a.fF$-d.b>6000},
$S:724}
C.eqz.prototype={
$1(d){var w=this.a.e
return new B.a3(w,new C.eqx(d),B.U(w).k("a3<1>")).gJ(0)>=3},
$S:724}
C.eqx.prototype={
$1(d){return d.a.aE(0,this.a.a).gcj()<14},
$S:z+53}
C.eqn.prototype={
$0(){return C.qo(this.b,this.a.d,"swarm")},
$S:0}
C.eqo.prototype={
$2(d,e){var w=null,v=this.a,u=new B.as(e.b,e.d)
v.w=u
return new B.eq(B.aG(A.c5,B.b2(w,w,w,new C.bpd(v.e,v.f,v.ax,v.at,v.ay,v.fF$,w),u),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new C.eqk(v),new C.eql(v),new C.eqm(v),w,w,w,w,w,w,w,w,new C.eqc(v),new C.eqd(v),new C.eqe(v),w,w,w,!1,A.ad),v.d)},
$S:199}
C.eql.prototype={
$1(d){return this.a.ay=d.b},
$S:40}
C.eqm.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
C.eqk.prototype={
$1(d){return this.a.ay=null},
$S:35}
C.eqd.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new B.z(v,w.fF$))
if(w.ch)C.dG(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)C.l2("flute",7,500,0.3)},
$S:23}
C.eqe.prototype={
$1(d){return this.a.ay=null},
$S:51}
C.eqc.prototype={
$0(){return this.a.ay=null},
$S:0}
C.eqp.prototype={
$0(){var w=this.a
return w.n(new C.eqj(w,this.b))},
$S:0}
C.eqj.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
C.eqq.prototype={
$0(){var w=this.a
return w.n(new C.eqi(w,this.b))},
$S:0}
C.eqi.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a7(w.e)},
$S:0}
C.eqr.prototype={
$0(){var w=this.a
return w.n(new C.eqh(w))},
$S:0}
C.eqh.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eqs.prototype={
$1(d){var w=this.a
return w.n(new C.eqg(w,d))},
$S:6}
C.eqg.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eqt.prototype={
$1(d){var w=this.a
return w.n(new C.eqf(w,d))},
$S:6}
C.eqf.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.equ.prototype={
$1(d){var w=this.a
return w.n(new C.eqb(w,d))},
$S:6}
C.eqb.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eqv.prototype={
$1(d){var w=this.a
return w.n(new C.eqa(w,d))},
$S:6}
C.eqa.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eqw.prototype={
$1(d){var w=this.a
return w.n(new C.eq9(w,d))},
$S:6}
C.eq9.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dzn.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new C.dzm(w,d))},
$S:135}
C.dzm.prototype={
$0(){var w=this.a,v=this.b,u=J.a8(v),t=B.aM(u.h(v,"unlocked"))
t=t==null?null:A.k.N(t)
w.w=A.o.E(t==null?1:t,1,100)
t=B.aM(u.h(v,"level"))
t=t==null?null:A.k.N(t)
if(t==null)t=w.w
w.r=A.o.E(t,1,w.w)
t=B.T(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.jk(v==null?A.v7:v)
v=v.gah(v)
while(v.C()){u=v.gT(v)
t.m(0,B.t(u.a),A.k.N(B.f4(u.b)))}w.x=t
w.Q=!0
A.d.a7(w.d)},
$S:0}
C.dzo.prototype={
$1(d){return d.d!=null},
$S:z+14}
C.dzp.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Xt(w)>0},
$S:z+14}
C.dzd.prototype={
$0(){var w=this.a
w.r=A.o.E(this.b,1,w.w)
w.awH()},
$S:0}
C.dzg.prototype={
$1(d){var w=null,v=B.m(22),u=this.a
return B.ey(w,D.Jr,new B.C(A.bC,new B.a4(340,480,B.v(B.a([B.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.jb,w,w,w),A.T,B.D(B.i8(!0,w,w,A.z,I.aJ4,new C.dzf(u,d),100,w,w,A.ak,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.cZ,w,new B.b6(v,A.Z),w)},
$S:46}
C.dzf.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new C.dze(this.b,r):s
v=B.m(12)
if(p)q=r===q.r?A.bX:A.c.j(0.1)
else q=A.c.j(0.03)
u=B.H(p?A.ba:A.dw,A.r,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.j3
o=B.a([B.d(o,s,s,s,s,s,s,B.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(B.d(A.a.aO("\u2605",n)+A.a.aO("\u2606",3-n),s,s,s,s,s,s,D.ePd,s,s,s))
return B.aG(s,B.p(s,B.v(o,A.m,s,A.b7,A.j,0,A.p),A.f,s,s,new B.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.ad)},
$S:71}
C.dze.prototype={
$0(){B.a9(this.a,!1).M(this.b)
return null},
$S:0}
C.dzk.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new B.as(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gaag()
o=B.b2(q,q,q,new C.b7u(p.d,w,v,p.gc_6(),q),o)
v=p.bS0("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gGU()
t=p.as>=p.gGU()?A.bg:A.c
s=this.b
r=x.p
s=B.a([o,B.an(q,B.B(B.a([v,p.arS("GOAL",""+w+" / "+u,t),p.arS("STARS",A.a.aO("\u2605",s)+A.a.aO("\u2606",3-s),A.aK)],r),A.m,q,A.hG,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lP)
if(p.Q&&!p.y)s.push(D.aOJ)
if(p.z){o=B.m(24)
w=this.c
v=B.H((w?A.bg:A.cG).j(0.6),A.r,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=B.a([B.d(u,q,q,q,q,q,q,B.l(q,q,w?A.bg:A.cG,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.ar,B.d("You blasted "+p.as+" dots. The goal was "+p.gGU()+".",q,q,q,q,q,q,A.ht,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(B.d(A.a.aO("\u2605",t==null?1:t),q,q,q,q,q,q,D.eG3,q,q,q))}u.push(A.ay)
t=B.a([new C.fd(A.m7,"Try again",new C.dzh(p),A.c,q)],r)
if(w&&p.r<100)t.push(new C.fd(A.jn,"Next level",new C.dzi(p),A.bg,q))
u.push(B.B(t,A.m,q,A.e,A.Q,0,q,q))
s.push(B.au(B.p(q,B.v(u,A.m,q,A.e,A.Q,0,A.p),A.f,q,q,new B.o(D.TI,q,v,o,q,q,A.n),q,q,q,q,A.a8,q,q,q),q,q,q))}return B.aG(A.c5,new B.am(A.W,q,A.aZ,A.q,s,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dzj(p),q,q,q,q,!1,A.ad)},
$S:33}
C.dzj.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fF$
C.dG(180,"",200,1,0.4,"sine")
B.j8()},
$S:23}
C.dzh.prototype={
$0(){var w=this.a
return w.n(w.gb0c())},
$S:0}
C.dzi.prototype={
$0(){var w=this.a
return w.aUx(w.r+1)},
$S:0}
C.dzl.prototype={
$0(){var w=this.a
return w.n(w.gb0c())},
$S:0}
C.cG1.prototype={
$3(d,e,f){var w,v
if(e<=0)return
w=this.a
$.V()
v=B.L()
v.r=f.j(0.18).gp(0)
w.ae(d,e,v)
v=B.L()
v.b=A.ae
v.c=3
v.r=f.j(0.9).gp(0)
w.ae(d,e,v)
v=B.L()
v.r=f.j(0.25).gp(0)
v.z=A.l9
w.ae(d,e*0.5,v)},
$S:725}
C.e2Q.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcFX()?this.a.cjM(w,v,d.b):w.aE(0,v).gcj())<24},
$S:z+56}
C.e3e.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+57}
C.e33.prototype={
$0(){var w=this.a
return w.n(new C.e2V(w))},
$S:0}
C.e2V.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.e34.prototype={
$0(){return C.qo(this.b,this.a.d,"marble-music")},
$S:0}
C.e35.prototype={
$2(d,e){var w=null,v=this.a,u=new B.as(e.b,e.d)
v.w=u
return new B.eq(B.aG(A.c5,B.b2(w,w,w,new C.bet(v.e,v.f,v.at,v.ax,v.fF$,w),u),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new C.e30(v),new C.e31(v),new C.e32(v),w,w,w,w,w,w,w,w,w,w,new C.e2U(v),w,w,w,!1,A.ad),v.d)},
$S:199}
C.e2U.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.Yb(w)
u.e.push(new C.Ez(w,w,v,u.aLI(v)))
if(u.ay)C.l2(u.z,v+12,700,0.5)}if(u.x==="erase")u.aOd(d.b)},
$S:51}
C.e31.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:40}
C.e32.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aOd(d.b)},
$S:18}
C.e30.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aE(0,w).gcj()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.Yb(t.ao(0,w).ez(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new C.Ez(w,t,v,u.aLI(v)))
if(u.ay)C.l2(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:35}
C.e36.prototype={
$0(){var w=this.a
return w.n(new C.e3_(w,this.b))},
$S:0}
C.e3_.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
C.e37.prototype={
$0(){var w=this.a
return w.n(new C.e2Z(w,this.b))},
$S:0}
C.e2Z.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.e38.prototype={
$0(){var w=this.a
return w.n(new C.e2Y(w,this.b))},
$S:0}
C.e2Y.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
C.e39.prototype={
$1(d){var w=this.a
return w.n(new C.e2X(w,d))},
$S:6}
C.e2X.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.e3a.prototype={
$0(){var w=this.a
return w.n(new C.e2W(w))},
$S:0}
C.e2W.prototype={
$0(){return this.a.avg("stairs")},
$S:0}
C.e3b.prototype={
$0(){var w=this.a
return w.n(new C.e2T(w))},
$S:0}
C.e2T.prototype={
$0(){return this.a.avg("pinball")},
$S:0}
C.e3c.prototype={
$0(){var w=this.a
return w.n(new C.e2S(w))},
$S:0}
C.e2S.prototype={
$0(){return this.a.avg("random")},
$S:0}
C.e3d.prototype={
$0(){var w=this.a
return w.n(new C.e2R(w))},
$S:0}
C.e2R.prototype={
$0(){var w=this.a
A.d.a7(w.e)
A.d.a7(w.f)},
$S:0}
C.e6K.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
C.e6L.prototype={
$0(){var w=this.b,v=new C.abm(this.a.a,this.c)
v.c=w.fF$
return w.e.push(v)},
$S:0}
C.e6S.prototype={
$0(){var w=this.a
return w.n(new C.e6R(w))},
$S:0}
C.e6R.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
C.e6T.prototype={
$0(){return C.qo(this.b,this.a.d,"orbit-sequencer")},
$S:0}
C.e6U.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new B.as(e.b,e.d)
if(!u.f){u.f=!0
u.aN2()}w=u.w
return new B.eq(B.aG(A.c5,B.b2(v,v,v,new C.bhT(u.e,u.gaUz(),6,u.gce5(),u.gckc(),u.fF$,v),w),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e6Q(u),v,v,v,!1,A.ad),u.d)},
$S:199}
C.e6Q.prototype={
$1(d){return this.a.c_8(d.b)},
$S:51}
C.e6V.prototype={
$1(d){var w=this.a
return w.n(new C.e6P(w,d))},
$S:6}
C.e6P.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.e6W.prototype={
$0(){var w=this.a
return w.n(new C.e6O(w,this.b))},
$S:0}
C.e6O.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.e6X.prototype={
$0(){var w=this.a
return w.n(new C.e6N(w,this.b))},
$S:0}
C.e6N.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
C.e6Y.prototype={
$0(){var w=this.a
return w.n(w.gbF1())},
$S:0}
C.e6Z.prototype={
$0(){var w=this.a
return w.n(new C.e6M(w))},
$S:0}
C.e6M.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a7(u)
for(v=v.r,w=0;w<9;++w)u.push(new C.abm(v.aC(6),v.af()))},
$S:0}
C.e7_.prototype={
$0(){var w=this.a
return w.n(A.d.gqN(w.e))},
$S:0}
C.ff9.prototype={
$2(d,e){var w=A.o.al(d,100),v=A.o.F(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:128}
C.e6e.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new C.e6d(w,d))},
$S:135}
C.e6d.prototype={
$0(){var w=B.a([],x.t),v=x.M.a(J.q(this.b,"done"))
v=J.aU(v==null?A.cL:v)
while(v.C())w.push(A.k.N(B.f4(v.gT(v))))
return this.a.x.v(0,w)},
$S:0}
C.e60.prototype={
$2(d,e){var w=this.b
if(A.o.al(d,100)===w||A.o.F(d,100)===w)this.a.a+=e},
$S:128}
C.e5V.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new C.b6n(w.b,new B.u(w.c*(0.2+0.6*v.af()),w.e*(0.2+0.6*v.af()))))},
$S:0}
C.e5W.prototype={
$0(){var w=this.a
A.d.a7(w.e)
w.f.a7(0)
w.r=null},
$S:0}
C.e6_.prototype={
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
p=D.v6.h(0,v[u].a).a
o=w.agE(u)
v=D.v6.h(0,v[t].a).a
n=w.agE(t)
if(q<=p-o+r&&q<=v-n+r){m.m(0,s,q)
C.vl("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaUF()&&w.x.K(0,w.d)){C.vl("zap",12,300,0.5)
m=w.x
m=B.A(m,B.a2(m).k("cl.E"))
C.vi("molecule_maker",B.E(["done",m],x.N,x.z))}}}},
$S:0}
C.e5Z.prototype={
$0(){var w,v,u=this.a,t=u.f,s=B.a2(t).k("cv<1>"),r=this.b,q=s.k("a3<G.E>"),p=B.A(new B.a3(new B.cv(t,s),new C.e5X(r),q),q.k("G.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,B.K)(p),++w)t.W(0,p[w])
s=x.S
v=B.T(s,s)
t.bG(0,new C.e5Y(r,v))
t.a7(0)
t.v(0,v)
A.d.cu(u.e,r)
u.r=null},
$S:0}
C.e5X.prototype={
$1(d){var w=this.a
return A.o.al(d,100)===w||A.o.F(d,100)===w},
$S:59}
C.e5Y.prototype={
$2(d,e){var w=A.o.al(d,100),v=A.o.F(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.m(0,w*100+v,e)},
$S:128}
C.e68.prototype={
$1(d){return""+d.b+" "+D.v6.h(0,d.a).c.toLowerCase()},
$S:470}
C.e69.prototype={
$0(){var w=this.a
return w.n(new C.e67(w))},
$S:0}
C.e67.prototype={
$0(){var w=this.a;++w.d
w.atK(0)},
$S:0}
C.e6a.prototype={
$2(d,e){var w=null,v=this.a
v.y=new B.as(e.b,e.d)
return B.aG(A.c5,B.b2(w,w,w,new C.bf9(v.e,v.f,v.r,v.gcuq(),w),A.f2),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new C.e63(v),new C.e64(v),new C.e65(v,e),w,w,w,w,w,w,w,w,w,w,new C.e66(v),w,w,w,!1,A.ad)},
$S:33}
C.e66.prototype={
$1(d){return this.a.c_v(d.b)},
$S:51}
C.e64.prototype={
$1(d){var w=this.a
return w.w=w.aUG(d.b)},
$S:40}
C.e65.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.n(new C.e61(w,v,d,this.b))},
$S:18}
C.e61.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new B.u(A.k.E(t.b.a+s.a,26,r.b-26),A.k.E(v[u].b.b+s.b,26,r.d-26))},
$S:0}
C.e63.prototype={
$1(d){return this.a.w=null},
$S:35}
C.e6b.prototype={
$0(){var w=this.a
return w.n(new C.e62(w,this.b))},
$S:0}
C.e62.prototype={
$0(){var w=this.a
w.d=this.b
w.atK(0)},
$S:0}
C.e6c.prototype={
$0(){return this.a.c_p(0,this.b.a)},
$S:0}
C.di2.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.al(d,100)].b,i=k[A.o.F(d,100)].b,h=i.aE(0,j),g=new B.u(-h.b,h.a).ez(0,Math.max(h.gcj(),1))
for(k=(e-1)/2,w=g.a,v=g.b,u=j.a,t=j.b,s=i.a,r=i.b,q=this.b.a,p=0;p<e;++p){o=(p-k)*8
n=w*o
o=v*o
$.V()
m=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
m.r=A.af.gp(0)
m.c=4
m.d=A.bO
l=m.G()
q.drawLine.apply(q,[u+n,t+o,s+n,r+o,l])
l.delete()}},
$S:128}
C.dHv.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.dHu(w,d))},
$S:135}
C.dHu.prototype={
$0(){var w=B.aM(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
C.dHk.prototype={
$0(){var w,v,u=J.e_(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.aqF[w.aC(4)]
return A.d.fN(u)},
$S:22}
C.dHj.prototype={
$1(d){return C.fIc(d)==="*"},
$S:3}
C.dHl.prototype={
$1(d){return d!==this.a},
$S:3}
C.dHi.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
C.vi("dna_lab",B.E(["best",r],x.N,x.z))}r=s.d
C.vl("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga6S()[r]+" codes for "+B.t(D.Bc.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.aXD()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=B.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,B.K)(w),++u)r.push(D.Bc.h(0,w[u]))
r="Protein built: "+A.d.aH(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
C.vl("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
C.dHt.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dw:e,u=B.m(8),t=f?B.H(A.ba,A.r,1):w
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,f?A.ba:A.w,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,40,w,A.mJ,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1812}
C.dHo.prototype={
$1(d){var w=D.d4T.h(0,d)
return w==null?A.c:w},
$S:726}
C.dHp.prototype={
$0(){var w=this.a
return w.n(new C.dHn(w,this.b))},
$S:0}
C.dHn.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.ata()},
$S:0}
C.dHq.prototype={
$0(){var w=this.a
return w.n(new C.dHm(w))},
$S:0}
C.dHm.prototype={
$0(){var w=this.a;++w.e
w.ata()},
$S:0}
C.dHr.prototype={
$0(){return this.a.aUE(this.b)},
$S:0}
C.dHs.prototype={
$0(){return this.a.aUE(this.b)},
$S:0}
C.dKk.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.dKj(w,d))},
$S:135}
C.dKj.prototype={
$0(){var w=B.aM(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
C.dK7.prototype={
$0(){},
$S:0}
C.dK6.prototype={
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
C.dK8.prototype={
$0(){var w=this.a
w.f=B.a([80,30,6],x.n)
A.d.a7(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
C.dKc.prototype={
$1(d){var w=this.a
return w.n(new C.dKb(w,d))},
$S:6}
C.dKb.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.dKd.prototype={
$1(d){var w=this.a
return w.n(new C.dKa(w,d))},
$S:6}
C.dKa.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dKe.prototype={
$1(d){var w=this.a
return w.n(new C.dK9(w,d))},
$S:6}
C.dK9.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dKf.prototype={
$0(){return this.a.a81("drought")},
$S:0}
C.dKg.prototype={
$0(){return this.a.a81("disease")},
$S:0}
C.dKh.prototype={
$0(){return this.a.a81("foxes")},
$S:0}
C.dKi.prototype={
$0(){return this.a.a81("rabbits")},
$S:0}
C.cZw.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new B.f3()
k.dU(A.o.N(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.af()
p=k.af()
o=(r&1)===0?1:-1
o=A.k.F(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.af()
p=Math.sin(s+r*2)
n=new B.kM(new B.en(e,l,l,A.cS,l,l,l,l,l,l,new B.F(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a5,A.ch,new B.jL(1),l,l,l,l,A.cg,l)
n.eU()
n.a4(w,new B.u(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1814}
C.cZy.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this.a.c
if(l.length<2)return
w=$.V()
v=B.a([],x.v)
u=new B.aO(w.r,A.ao,null,null,v)
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
u.e=null}}$.V()
l=B.L()
l.b=A.ae
l.c=2.6
l.r=f.gp(0)
l.e=A.fu
this.c.aL(u,l)},
$S:1815}
C.cZx.prototype={
$3(d,e,f){var w=null,v=B.id(w,w,w,w,B.dl(w,w,w,w,w,w,w,w,w,B.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a5,A.ch,w,A.em,A.cg)
v.eU()
v.a4(this.a,new B.u(f,this.b.b+2))},
$S:1816}
C.bCt.prototype={
$2(d,e){return d+e.a*e.b},
$S:1817}
C.fb_.prototype={
$2(d,e){return e.a-d.a},
$S:1818}
C.dvy.prototype={
$2(d,e){return d+e},
$S:74}
C.dvL.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.n(new C.dvK(v,A.k.E((v.gv6()-w[v.e].gu9())/Math.max(w[v.e].gu9(),8),-1,1)*0.32,u))},
$S:8}
C.dvK.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
C.dvM.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.dvJ(w,d))},
$S:135}
C.dvJ.prototype={
$0(){var w=B.a([],x.t),v=x.M.a(J.q(this.b,"done"))
v=J.aU(v==null?A.cL:v)
while(v.C())w.push(A.k.N(B.f4(v.gT(v))))
return this.a.r.v(0,w)},
$S:0}
C.dvz.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.F(w[v]+1,6)
w[v]=u
return u},
$S:0}
C.dvE.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1819}
C.dvF.prototype={
$0(){var w=this.a
return w.n(new C.dvD(w))},
$S:0}
C.dvD.prototype={
$0(){var w=this.a;++w.e
A.d.hi(w.f,0,5,0)},
$S:0}
C.dvG.prototype={
$2(d,e){var w=null,v=this.a
return B.aG(A.c5,B.b2(w,w,w,new C.b6z(v.w,this.b.a,v.f,v.gv6()===v.d[v.e].gu9(),w),A.f2),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dvC(v,e),w,w,w,!1,A.ad)},
$S:33}
C.dvC.prototype={
$1(d){var w=this.b.b,v=A.k.U((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cqr(v-1)},
$S:51}
C.dvH.prototype={
$0(){var w=this.a
return w.n(new C.dvB(w,this.b))},
$S:0}
C.dvB.prototype={
$0(){var w=this.a
w.e=this.b
A.d.hi(w.f,0,5,0)},
$S:0}
C.dvI.prototype={
$0(){var w=this.a
return w.n(new C.dvA(w))},
$S:0}
C.dvA.prototype={
$0(){return A.d.hi(this.a.f,0,5,0)},
$S:0}
C.cyz.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=B.bx(B.cr(new B.u(d,s),20,w),A.qU)
$.V()
q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
q.r=f.gp(0)
p=q.G()
u.drawRRect(B.ex(r),p)
p.delete()
q=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
q.b=A.ae
q.c=1.2
q.r=A.dx.gp(0)
p=q.G()
u.drawRRect(B.ex(r),p)
p.delete()
C.fa3(v,"1",new B.u(d,s),A.bh,11)}},
$S:1820}
C.dOl.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.n(new C.dOk(w,v))},
$S:8}
C.dOk.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
C.dOm.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.dOj(w,d))},
$S:135}
C.dOj.prototype={
$0(){var w=B.a([],x.t),v=x.M.a(J.q(this.b,"done"))
v=J.aU(v==null?A.cL:v)
while(v.C())w.push(A.k.N(B.f4(v.gT(v))))
return this.a.w.v(0,w)},
$S:0}
C.dOb.prototype={
$0(){var w=A.k.U(this.c)
this.a.d[this.b]=w
return w},
$S:0}
C.dOf.prototype={
$0(){var w=this.a
return w.n(new C.dOe(w))},
$S:0}
C.dOe.prototype={
$0(){return this.a.r++},
$S:0}
C.dOg.prototype={
$0(){var w=this.a
return w.n(new C.dOd(w,this.b))},
$S:0}
C.dOd.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dOh.prototype={
$1(d){var w=this.a
return w.n(new C.dOc(w,d))},
$S:6}
C.dOc.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dOi.prototype={
$1(d){return this.a.c_w(this.b,d)},
$S:6}
C.d5u.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bK4(d,e,f,g),m=this.b
$.V()
w=B.L()
v=B.aq(h,A.c,i?0.1:0.35)
v.toString
u=B.aq(h,A.w,0.5)
u.toString
w.sar(new B.bR(A.A,0.5,A.x,null,0,B.a([v,h,u],x.O),null,null).av(0,B.bS(d,e+6)))
m.aL(n,w)
w=B.L()
w.b=A.ae
w.c=1.5
w.r=A.aU.gp(0)
m.aL(n,w)
w=B.L()
w.r=A.w.j(0.28).gp(0)
m.ae(d,e*0.55,w)
for(w=d.a,v=d.b,u=m.a,t=0;t<4;++t){s=g+t*3.141592653589793/2
r=Math.cos(s)
q=Math.sin(s)
p=new B.ap(A.X,A.V,A.a_,A.a0,A.Y)
p.r=A.hB.gp(0)
p.c=3
o=p.G()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=B.L()
w.r=A.aJ.gp(0)
m.ae(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1821}
C.d5v.prototype={
$3(d,e,f){var w=this,v=w.b
return C.fa3(w.a,d,new B.u(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1822}
C.dzK.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.dzJ(w,d))},
$S:135}
C.dzJ.prototype={
$0(){var w=B.a([],x.t),v=x.M.a(J.q(this.b,"done"))
v=J.aU(v==null?A.cL:v)
while(v.C())w.push(A.k.N(B.f4(v.gT(v))))
return this.a.Q.v(0,w)},
$S:0}
C.dzs.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?B.jw(90-(w-65)):d},
$S:14}
C.dzB.prototype={
$1(d){return this.a.n(new C.dzA())},
$S:2}
C.dzA.prototype={
$0(){},
$S:0}
C.dzC.prototype={
$1(d){return this.a.n(new C.dzz())},
$S:2}
C.dzz.prototype={
$0(){},
$S:0}
C.dzD.prototype={
$0(){var w=this.a
return w.n(new C.dzy(w))},
$S:0}
C.dzy.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aTA()},
$S:0}
C.dzE.prototype={
$0(){var w=this.a
return w.n(new C.dzx(w))},
$S:0}
C.dzx.prototype={
$0(){return this.a.f=0},
$S:0}
C.dzF.prototype={
$0(){var w=this.a
return w.n(new C.dzw(w))},
$S:0}
C.dzw.prototype={
$0(){return this.a.f=1},
$S:0}
C.dzG.prototype={
$0(){var w=this.a
return w.n(new C.dzv(w,this.b))},
$S:0}
C.dzv.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dzH.prototype={
$1(d){var w=this.a
return w.n(new C.dzu(w,d))},
$S:6}
C.dzu.prototype={
$0(){return this.a.w=A.k.U(this.b)},
$S:0}
C.dzI.prototype={
$1(d){var w=this.a
w.n(new C.dzt(w,d))
if(w.ga7j()&&w.Q.K(0,w.x)){C.vl("zap",9,220,0.45)
w=w.Q
w=B.A(w,B.a2(w).k("cl.E"))
C.vi("cipher_lab",B.E(["done",w],x.N,x.z))}},
$S:6}
C.dzt.prototype={
$0(){return this.a.z=A.k.U(this.b)},
$S:0}
C.bId.prototype={
$1(d){return d.r<=0},
$S:z+61}
C.bIo.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bIj.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bIp.prototype={
$1(d){return this.a.Kc(d)&&!d.x},
$S:z+1}
C.bIq.prototype={
$2(d,e){return Math.max(d,this.a.axa(e))},
$S:z+6}
C.bIs.prototype={
$2(d,e){var w=this.a
return w.ce(0,d.a+"."+e,new C.bIt(w))},
$S:z+5}
C.bIt.prototype={
$0(){return this.a.a},
$S:113}
C.bIr.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:84}
C.bIu.prototype={
$2(d,e){var w=this.a
return w.ce(0,this.b.$1(this.c.$2(d,e)),new C.bIv(w))},
$S:z+5}
C.bIv.prototype={
$0(){return this.a.a},
$S:113}
C.bIf.prototype={
$2(d,e){var w=this.a
return w.ce(0,d.a+"."+e,new C.bIg(w))},
$S:z+5}
C.bIg.prototype={
$0(){return this.a.a},
$S:113}
C.bIe.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:84}
C.bIh.prototype={
$2(d,e){var w=this.a
return w.ce(0,this.b.$1(this.c.$2(d,e)),new C.bIi(w))},
$S:z+5}
C.bIi.prototype={
$0(){return this.a.a},
$S:113}
C.bIc.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+1}
C.bIw.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bIk.prototype={
$1(d){return d!==this.b&&this.a.aD1(d)&&Math.abs(d.fr)>0.0005},
$S:z+1}
C.bIn.prototype={
$1(d){return d.b===this.a},
$S:z+1}
C.bIm.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+1}
C.bIl.prototype={
$1(d){return d.b===this.a},
$S:z+1}
C.bDF.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
C.bDG.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.cg5.prototype={
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
$S:176}
C.f9Y.prototype={
$1(d){var w=null,v=B.id(w,w,1,w,B.dl(w,w,w,w,w,w,w,w,w,B.l(w,w,this.b,w,w,w,w,w,w,w,w,d,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),this.a),A.a5,A.ch,w,A.em,A.cg)
v.eU()
return v},
$S:727}
C.fqz.prototype={
$1(d){var w
$.V()
w=B.L()
w.r=d.gp(0)
return w},
$S:1824}
C.fqB.prototype={
$2(d,e){var w
$.V()
w=B.L()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bO
return w},
$S:1825}
C.fqC.prototype={
$5(d,e,f,g,h){return B.bx(new B.a7(d,e,d+f,e+g),new B.aY(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1826}
C.fqA.prototype={
$3(d,e,f){var w
$.V()
w=B.L()
w.sar(new B.a5(A.b0,A.b3,A.x,B.a([e,f],x.O),null,null).av(0,d))
return w},
$S:1827}
C.bDj.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bDk.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.bDi(w))},
$S:0}
C.bDi.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bDl.prototype={
$0(){return B.a([],x.ey)},
$S:1828}
C.bDm.prototype={
$1(d){return this.a.bv(d).a>15e5},
$S:370}
C.bDn.prototype={
$0(){var w,v,u
J.bAx(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.Bs(v))if(C.fIB(v.b))w.aWC(v)
else w.Yr(v)
else{u=w.a.c.b7P(v)
w.abm(u==null?"The "+$.pM().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bDh.prototype={
$1(d){return new B.e6(new C.bDf(this.a,this.b),null)},
$S:20}
C.bDf.prototype={
$2(d,e){var w=null,v=this.b,u=new C.bDg(this.a,v,e),t=$.pM(),s=v.b,r=B.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.kQ,w,w,w),q=B.aF(w,w,w,w,D.bvl,w,w,w,new C.bDb(u,v),w,w,w,w,w,w),p=A.k.E(v.ch,1,2.6),o=x.p
return B.bp(!0,new B.C(A.wG,B.v(B.a([r,A.av,D.fcJ,A.T,B.B(B.a([q,B.D(B.lQ(t.h(0,s).d,w,w,2.6,1,u,p),1),B.aF(w,w,w,w,D.bBQ,w,w,w,new C.bDc(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),B.B(B.a([B.d(""+A.k.U(v.ch*100)+"%",w,w,w,w,w,w,B.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b8,B.bJ(!1,D.eT5,w,w,!0,w,w,new C.bDd(u),w,w),B.bJ(!1,A.yE,w,w,!0,w,w,new C.bDe(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:105}
C.bDg.prototype={
$1(d){var w=this.a
w.n(new C.bD9(this.b,d))
this.c.$1(new C.bDa())
w.a.toString},
$S:6}
C.bD9.prototype={
$0(){return this.a.ch=A.k.E(this.b,1,2.6)},
$S:0}
C.bDa.prototype={
$0(){},
$S:0}
C.bDb.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
C.bDc.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
C.bDd.prototype={
$0(){return this.a.$1(1)},
$S:0}
C.bDe.prototype={
$0(){B.a9(this.a,!1).M(null)
return null},
$S:0}
C.bDC.prototype={
$2(d,e){var w
if(d==="short"){C.dG(1800,"",120,0,0.55,"noise")
C.dG(200,"",160,2.2,0.4,"saw")
B.fW()
w=this.a
if(w.c!=null)w.abm("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){C.dG(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.abm("\u26a0 Overloaded! The "+$.pM().h(0,e.b).b+" can only give about "+A.k.aa(w.a.c.yK(e),2)+" amps but your gadgets are asking for "+A.k.aa(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.abm("Burnt out! "+e.ay)
C.dG(140,"",320,0,0.6,"noise")
C.dG(900,"",160,1.5,0.35,"square")}},
$S:z+65}
C.bDD.prototype={
$0(){},
$S:0}
C.bCN.prototype={
$0(){},
$S:0}
C.bDE.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
C.bDB.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.as(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.aG(A.c5,B.b2(p,p,p,new C.agm(w,v,u,t,s,r==null?A.iR:r,p),n),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,new C.bDv(o),new C.bDw(o),new C.bDx(o),p,p,p,p,p,p,p,p,p,p,new C.bDy(o),p,p,p,!1,A.ad)],q)
if(o.a.c.a.length===0)n.push(D.aXI)
w=o.Q
if(w!=null){v=B.m(14)
u=B.H(A.cM,A.r,1)
n.push(B.an(p,B.aG(p,B.p(p,B.B(B.a([D.eRt,B.D(B.d(w,p,p,p,p,p,p,D.eJX,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(D.b1x,p,u,v,p,p,A.n),p,p,p,p,A.pa,p,p,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bDz(o),p,p,p,p,p,p,!1,A.ad),p,p,10,10,8,p))}if(o.e!=null)n.push(B.an(8,o.aUI(B.B(B.a([D.bnV,new C.fd(A.XQ,"Cut wire",new C.bDA(o),A.cG,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.an(8,o.c94(w),p,p,10,10,p,p))}return B.jA(new B.am(A.W,p,A.aZ,A.q,n,p),A.q,p)},
$S:378}
C.bDw.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b2j(s)
if(r!=null){t.n(new C.bDt(t,r,d))
return}w=t.aXi(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.u(v*u.a,w.d*u.b).aE(0,s)
t.n(new C.bDu(t,w))}},
$S:40}
C.bDt.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bDu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bDx.prototype={
$1(d){var w=this.a
if(w.f!=null)w.n(new C.bDr(w,d))
else if(w.w!=null)w.n(new C.bDs(w,d.b.ao(0,w.x)))},
$S:18}
C.bDr.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bDs.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.E(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.E(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bDv.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b2j(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.ahO(u.a,u.b,v.a,v.b)!=null)C.dG(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.abk()},
$S:35}
C.bDy.prototype={
$1(d){var w=this.a,v=d.b,u=w.aXi(v)
if(u!=null){w.n(new C.bDp(w,u))
if(D.lC.ak(0,u.b))w.cjf(u)
w.a.toString
return}w.n(new C.bDq(w,w.cvd(v)))},
$S:51}
C.bDp.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
C.dG(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
C.dG(200,"",70,0,0.2,"saw")}},
$S:0}
C.bDq.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bDz.prototype={
$0(){var w=this.a
return w.n(new C.bDo(w))},
$S:0}
C.bDo.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bDA.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
C.dG(300,"",50,0,0.35,"noise")
w.abk()},
$S:0}
C.bCO.prototype={
$0(){return this.a.bjn(this.b)},
$S:0}
C.bD6.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.B(B.a([B.d(d,w,w,w,w,w,w,D.eEK,w,w,w),B.D(B.lQ(this.b.d,w,w,g,h,new C.bD8(this.a,f),A.k.E(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1829}
C.bD8.prototype={
$1(d){var w=this.a
w.n(new C.bD7(this.b,d))
w.a.toString},
$S:6}
C.bD7.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bCU.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
C.dG(260,"",70,0,0.35,"noise")
w.abk()},
$S:0}
C.bCV.prototype={
$0(){var w=this.a
return w.n(new C.bCT(w))},
$S:0}
C.bCT.prototype={
$0(){return this.a.d=null},
$S:0}
C.bCW.prototype={
$0(){this.a.n(new C.bCS(this.b,this.c))
C.dG(900,"",40,0,0.3,"noise")},
$S:0}
C.bCS.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bCZ.prototype={
$0(){return this.a.aWC(this.b)},
$S:0}
C.bD_.prototype={
$0(){return this.a.Yr(this.b)},
$S:0}
C.bD0.prototype={
$0(){return this.a.a_3(this.b)},
$S:0}
C.bD1.prototype={
$0(){var w=this.a
w.n(new C.bCR(this.b,this.c))
w.a.toString},
$S:0}
C.bCR.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bD2.prototype={
$0(){var w=this.a
w.n(new C.bCQ(this.b,this.c))
w.a.toString},
$S:0}
C.bCQ.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bD3.prototype={
$0(){var w=this.a
w.n(new C.bCP(this.b,this.c))
w.a.toString},
$S:0}
C.bCP.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bD4.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bD5.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bCX.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bCY.prototype={
$1(d){return this.a.f=d},
$S:6}
C.f1p.prototype={
$1(d){return d.aCG("bulb")},
$S:z+2}
C.f1q.prototype={
$1(d){return d.ajj(0,"switch")&&d.aCG("bulb")},
$S:z+2}
C.f1r.prototype={
$1(d){return A.d.ba(d.a,new C.f1c())},
$S:z+2}
C.f1c.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+1}
C.f1s.prototype={
$1(d){return d.ajj(0,"resistor")&&A.d.ba(d.a,new C.f1b())},
$S:z+2}
C.f1b.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+1}
C.f1t.prototype={
$1(d){return!d.ajj(0,"battery")&&d.aCG("bulb")},
$S:z+2}
C.f1g.prototype={
$1(d){return A.d.ba(d.a,new C.f1a())},
$S:z+2}
C.f1a.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
C.f1h.prototype={
$1(d){return A.d.ba(d.a,new C.f19())},
$S:z+2}
C.f19.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
C.f1i.prototype={
$1(d){return A.d.ba(d.a,new C.f18())},
$S:z+2}
C.f18.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
C.f1j.prototype={
$1(d){var w=d.a
return A.d.ba(w,new C.f16())&&A.d.ba(w,new C.f17())&&d.ajj(0,"buck")},
$S:z+2}
C.f16.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
C.f17.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+1}
C.f1k.prototype={
$1(d){var w=d.a
return A.d.ba(w,new C.f14())&&A.d.ba(w,new C.f15())},
$S:z+2}
C.f14.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+1}
C.f15.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
C.f1l.prototype={
$1(d){return A.d.ba(d.a,new C.f13())},
$S:z+2}
C.f13.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+1}
C.dKs.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a7(0)
w.v(0,v.b)},
$S:0}
C.dKB.prototype={
$1(d){var w=this.a.d
return w.aD1(d)&&w.Bs(d)},
$S:z+1}
C.dKC.prototype={
$1(d){return d.x},
$S:z+1}
C.dKD.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.dKE.prototype={
$0(){},
$S:0}
C.dKr.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.m(22),o=x.p,n=B.a([D.f65,A.av,D.eT1,A.T],o)
for(w=this.a,v=0;v<19;++v){u=D.O_[v]
t=A.c.j(0.06)
s=new B.aY(14,14)
r=new B.ay(A.bG,1,A.r,-1)
n.push(B.aG(q,B.p(q,B.v(B.a([new B.x(u.a,q,A.kk,q,q,q,q,q,q,q,q,q),A.bB,new B.x(u.b,q,D.eKA,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(t,q,new B.c3(r,r,r,r),new B.bv(s,s,s,s),q,q,A.n),q,q,q,A.cN,A.bm,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dKq(w,d,u),q,q,q,q,q,q,!1,A.ad))}return B.ey(q,D.Jr,new B.C(A.c4,new B.a4(340,q,B.cM(n,q,q,q,q,A.ak,!0),q),q),q,q,q,q,A.cZ,q,new B.b6(p,A.Z),q)},
$S:46}
C.dKq.prototype={
$0(){B.a9(this.b,!1).M(null)
var w=this.a
w.n(new C.dKp(w,this.c))
C.dG(800,"",120,-0.5,0.3,"square")},
$S:0}
C.dKp.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bcM()},
$S:0}
C.dKn.prototype={
$1(d){return new C.TG(this.a.d,null)},
$S:z+67}
C.dKo.prototype={
$0(){},
$S:0}
C.dKA.prototype={
$1(d){return new B.e6(new C.dKz(this.a),null)},
$S:20}
C.dKz.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.afx(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.bg:A.aY
k=B.aH(d,m,x.m).w
w=l.r
v=x.p
u=B.a([B.B(B.a([D.f3D,A.b8,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.P,B.bt(B.m(4),B.m4(A.bG,m,m,5,m,w.a/11,new B.mo(f,x.x)),A.ap),A.ab],v)
if(h)u.push(D.eVU)
else{h=f.j(0.1)
t=B.m(14)
s=B.H(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Ab.Rl,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,D.HI,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.v(B.a([r,A.av,q,new B.bI(A.a7,m,m,B.bJ(!1,B.d(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new C.dKx(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bm,m,m,m))}u.push(A.T)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aY(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dw,1,A.r,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.az:A.c
u.push(B.aG(m,B.p(m,new B.cD(A.b_,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.x(s,m,A.a4K,m,m,m,m,m,m,m,m,m),A.aw,new B.bG(1,A.bp,new B.x(r.a,m,new B.F(!0,q,m,m,m,m,13,A.I,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.c3(n,n,n,n),new B.bv(t,t,t,t),m,m,A.n),m,m,m,A.fk,A.pa,m,m,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.dKy(l,o,e),m,m,m,m,m,m,!1,A.ad))}return B.bp(!0,new B.d1(new B.aW(0,1/0,0,k.a.b*0.75),B.cM(u,m,Y.zZ,m,m,A.ak,!0),m),!0,!1,A.ag,!0,!0)},
$S:105}
C.dKx.prototype={
$0(){var w=this.a
w.n(new C.dKv(w))
this.b.$1(new C.dKw())
w.DK()},
$S:0}
C.dKv.prototype={
$0(){var w=this.a
$.afx()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.dKw.prototype={
$0(){},
$S:0}
C.dKy.prototype={
$0(){var w=this.a
w.n(new C.dKt(w,this.b))
this.c.$1(new C.dKu())
w.DK()},
$S:0}
C.dKt.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dKu.prototype={
$0(){},
$S:0}
C.dKF.prototype={
$0(){return B.a9(this.a,!1).nh()},
$S:0}
C.dKG.prototype={
$0(){return C.h6s(this.a,"ELECTRONICS LAB",this.b,A.aY)},
$S:0}
C.dKH.prototype={
$0(){var w=this.a
return w.n(w.d.gcLI())},
$S:0}
C.dKI.prototype={
$0(){var w=this.a,v=w.d
w.n(v.gqN(v))
w.DK()},
$S:0}
C.cw6.prototype={
$2(d,e){var w=null,v=this.a.gatL().x
v===$&&B.c()
return B.b2(w,w,w,new C.b5H(v,w),A.at)},
$S:70}
C.cw5.prototype={
$3(d,e,f){var w=new B.aO($.V().r,A.ao,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.D(new B.b4(v,t))
w.D(new B.cO(v,u,v+e,u))
w.D(new B.cO(v,u,v,u+e))
w.D(new B.cO(v,u,v-e,u))
w.D(new B.cO(v,u,v,t))
w.D(new B.bD())
t=B.L()
t.r=A.c.j(f).gp(0)
this.a.aL(w,t)},
$S:698}
C.f2f.prototype={
$1(d){var w=this,v=null,u=w.c?A.u:A.a4
u=B.id(v,v,1,v,B.dl(v,v,v,v,v,v,v,v,v,B.l(v,v,w.b,v,v,v,v,v,v,v,v,d,v,v,u,v,v,!0,v,w.d,v,v,v,v,v,v),w.a),A.a5,A.ch,v,A.em,A.cg)
u.eU()
return u},
$S:727}
C.fv0.prototype={
$3(d,e,f){return new C.SX(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+68}
C.fv1.prototype={
$4(d,e,f,g){var w=x.Y
return new B.cU(e,!1,B.ic(A.A,g,null,new B.bd(B.cG(A.cp,e,null),new B.bl(0.85,1,w),w.k("bd<bF.T>"))),null)},
$C:"$4",
$R:4,
$S:30}
C.dGo.prototype={
$0(){return B.a9(this.a,!1).nh()},
$S:0}
C.dGn.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bRR(o):q.bv8(o,p),m=x.p
p=B.a([B.pP(new B.mW(n,new B.cw(p,x.aC)),A.p5,B.rg(),A.b9,A.b9,new C.dGl())],m)
n=t.d
if(n){w=A.k.F(q.gQ5(),12)<4
v=w?150:96
u=B.m(16)
m=B.a([A.aw],m)
if(w)m.push(D.bnI)
else m.push(A.b8)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.bg:A.aE,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.aw)
p.push(B.an(s,B.au(B.dg(s,B.B(m,A.m,s,A.e,A.j,0,s,s),s,s,A.ep,new B.o(A.w,s,s,u,s,s,A.n),A.mF,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.tL)p.push(B.an(s,B.au(B.p(s,s,A.f,s,s,A.IF,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.vl)p.push(B.an(s,B.p(s,s,A.f,s,s,A.IF,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.an(6,B.aG(s,B.au(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dGm(q),s,s,s,s,s,s,!1,A.ad),s,s,0,0,s,s))
return B.bt(r,new B.am(A.W,s,A.aZ,A.q,p,s),A.ap)},
$S:317}
C.dGl.prototype={
$2(d,e){var w=x.Y
return new B.cU(e,!1,B.ic(A.A,d,null,new B.bd(e,new B.bl(0.92,1,w),w.k("bd<bF.T>"))),null)},
$S:376}
C.dGm.prototype={
$0(){var w=this.a
return w.n(new C.dGk(w))},
$S:0}
C.dGk.prototype={
$0(){return this.a.e=null},
$S:0}
C.dGj.prototype={
$0(){var w=this.a
return w.n(new C.dGi(w,this.b))},
$S:0}
C.dGi.prototype={
$0(){return this.a.e=A.d.cJ(D.nG,this.b)},
$S:0}
C.dGh.prototype={
$0(){var w=this.a
return w.n(new C.dGg(w))},
$S:0}
C.dGg.prototype={
$0(){return this.a.e=0},
$S:0}
C.dGc.prototype={
$0(){var w=this.a
return w.n(new C.dGb(w))},
$S:0}
C.dGb.prototype={
$0(){return this.a.e=null},
$S:0}
C.dGf.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.m(o?20:8),m=A.w.j(0.55),l=x.p
m=B.p(p,B.B(B.a([D.fbj,A.aw,B.D(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.ey,p,p,p,D.eQp,p,p,p),1),B.d(A.a.aU(A.o.u(B.dj(new B.Q(Date.now(),0,!1))),2,"0")+":"+A.a.aU(A.o.u(B.fY(new B.Q(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.r5,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.ls,p,p,p)
w=this.a
v=B.a([B.b2(p,p,p,new C.brw(w.gQ5(),this.c.d,p),A.at)],l)
o=w.e
if(o!=null){u=B.m(10)
t=B.H(A.ba,A.r,1)
s=B.m(10)
o=B.p(p,B.B(B.a([B.aG(p,B.p(p,p,A.f,p,p,A.a7u,p,12,p,p,p,p,p,12),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dGe(w),p,p,p,p,p,p,!1,A.ad),A.et,B.p(p,p,A.f,p,p,D.aTI,p,12,p,p,p,p,p,12),A.et,B.p(p,p,A.f,p,p,D.aTj,p,12,p,p,p,p,p,12),A.aw,B.D(B.d(D.nG[o].a,p,1,A.a2,p,p,p,A.a4C,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.cz,p,p,p,24,p,p,A.fl,p,p,p)
r=w.e
r.toString
v.push(B.bX(0,new B.C(D.bkE,B.p(p,B.bt(s,B.v(B.a([o,B.D(B.b2(p,p,p,new C.acq(r,w.gQ5(),p),A.f2),1)],l),A.m,p,A.e,A.j,0,A.p),A.ap),A.f,p,p,new B.o(A.w,p,t,u,D.cZl,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.m(18)
t=B.H(A.ba,A.r,1)
s=B.a([],l)
for(q=0;q<9;++q)s.push(new B.C(A.jl,w.arU(D.nG[q],34,!1),p))
v.push(B.an(8,B.au(B.p(p,B.B(s,A.m,p,A.e,A.Q,0,p,p),A.f,p,p,new B.o(o,p,t,u,p,p,A.n),p,p,p,p,A.kB,p,p,p),p,p,p),p,p,0,0,p,p))
return B.bt(n,B.p(p,B.v(B.a([m,B.D(new B.am(A.W,p,A.aZ,A.q,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,N.JC,p,p,p,p,p,p,p,p,p,p),A.ap)},
$S:317}
C.dGe.prototype={
$0(){var w=this.a
return w.n(new C.dGd(w))},
$S:0}
C.dGd.prototype={
$0(){return this.a.e=null},
$S:0}
C.fa9.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p=this
if(g===0||h<=0)return
w=f*A.k.E(h,0,1)
v=d.ao(0,new B.u(Math.cos(e)*w,-Math.sin(e)*w))
u=p.a
$.V()
t=B.L()
t.r=A.fh.gp(0)
t.c=g*2.2
t.d=A.bO
u.bw(d,v,t)
if(h>0.95){s=Math.sin(p.b*1.6+g)*0.04
t=f*0.72
r=g-1
q=h*1.6-0.9
p.$5(v,e+0.5+s,t,r,q-(5-g)*0)
p.$5(v,e-0.5+s,t,r,q)}if(g===1&&h>0.5){t=B.L()
t.r=B.aq(A.d1,A.bg,(Math.sin(p.b*2+v.a)+1)/2).gp(0)
u.ae(v,p.c*0.035,t)}},
$S:1830}
C.fyb.prototype={
$3(d,e,f){var w=this
return new C.Ux(w.d,w.a,w.c,w.b,null)},
$C:"$3",
$R:3,
$S:z+69}
C.fyc.prototype={
$4(d,e,f,g){var w=x.Y
return new B.cU(e,!1,B.ic(A.A,g,null,new B.bd(B.cG(A.cp,e,null),new B.bl(0.85,1,w),w.k("bd<bF.T>"))),null)},
$C:"$4",
$R:4,
$S:30}
C.erl.prototype={
$0(){var w=this.a
if(w.c!=null&&!w.r)w.n(new C.erk(w))},
$S:0}
C.erk.prototype={
$0(){return this.a.y=!1},
$S:0}
C.erj.prototype={
$0(){var w,v=this.a
v.f=-1
v.e=A.o.F(v.gCb()+this.b,10)
if(v.gCb()<0)v.e=v.gCb()+10
w=v.gabn().y
w=w==null?null:A.o.al(w.a,1000)
v.x=w==null?0:w
v.agg()},
$S:0}
C.erm.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1
w.agg()},
$S:0}
C.erv.prototype={
$0(){var w=this.a
return w.n(w.gcsl())},
$S:0}
C.eru.prototype={
$2(d,e){var w=null,v=this.a,u=v.gabn().y,t=u==null?w:A.o.al(u.a,1000),s=(t==null?0:t)/1000,r=v.x===0&&v.a.e?s:99
return B.b2(w,w,w,new C.bqX(v.gCb(),v.f,s,r,w),A.f2)},
$S:70}
C.ert.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.m(14),t=B.H(h?g:A.ba,A.r,1)
return B.aG(w,B.p(w,B.v(B.a([B.W(d,g,w,w,w,20),A.tP,B.d(e,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,A.jl,A.l0,w,w,56),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.ad)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$S:1831}
C.ero.prototype={
$0(){return this.a.atM(-1)},
$S:0}
C.erp.prototype={
$0(){return this.a.atM(1)},
$S:0}
C.erq.prototype={
$0(){return this.a.atM(0)},
$S:0}
C.err.prototype={
$0(){var w=this.a
return w.n(new C.ern(w))},
$S:0}
C.ern.prototype={
$0(){var w=this.a
w.r=!w.r
w.agg()},
$S:0}
C.ers.prototype={
$0(){return this.a.aWs(0)},
$S:0}
C.eri.prototype={
$0(){var w=this.a
return w.n(new C.erf(w))},
$S:0}
C.erf.prototype={
$0(){return this.a.r=!1},
$S:0}
C.erh.prototype={
$2(d,e){var w=null,v=D.nG[e].d.j(0.18),u=B.m(12),t=B.H(D.nG[e].d.j(0.6),A.r,1),s=D.nG[e]
return B.aG(w,B.p(w,B.v(B.a([B.d(s.b,w,w,w,w,w,w,A.RE,w,w,w),B.d(s.a,w,1,A.a2,w,w,w,D.a4O,w,w,w)],x.p),A.m,w,A.b7,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.erg(this.a,e),w,w,w,w,w,w,!1,A.ad)},
$S:71}
C.erg.prototype={
$0(){return this.a.aWs(this.b)},
$S:0}
C.dZE.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new C.dZD(w,d))},
$S:135}
C.dZD.prototype={
$0(){var w=this.a,v=this.b,u=J.a8(v),t=B.aM(u.h(v,"best"))
t=t==null?null:A.k.N(t)
w.e=t==null?0:t
v=B.aM(u.h(v,"level"))
v=v==null?null:A.k.N(v)
if(v==null)v=0
w.d=v
w.f=C.fIH(v)},
$S:0}
C.dZF.prototype={
$0(){},
$S:0}
C.dZu.prototype={
$0(){var w=this.a,v=A.o.E(this.b,0,59)
w.d=v
w.f=C.fIH(v)
w.r.a7(0)
w.x=!1},
$S:0}
C.dZv.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.guH().r){B.jE()
return}q.m(0,p,"/")}else if(o==="/")q.m(0,p,"\\")
else q.W(0,p)
C.vl("click",s.c+s.d,60,0.4)
if(C.h6B(r.guH(),q).b.a===r.guH().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}C.vi("laser_maze",B.E(["best",p,"level",Math.min(q,59)],x.N,x.z))
C.AI("bell",D.akm,700,0.45)
for(q=r.guH().c,q=B.eg(q,q.r,B.a2(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new B.z(new B.u((A.o.F(t,7)+0.5)*p+w,(A.o.al(t,7)+0.5)*p+v),0))}}},
$S:0}
C.dZy.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new B.as(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=B.a([B.aG(A.c5,B.b2(s,s,s,new C.bdE(r.guH(),w,v.a,u,r.w,r.z,s),q),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dZw(r),s,s,s,!1,A.ad),B.an(s,B.e1(B.B(B.a([B.d("LEVEL "+(r.d+1),s,s,s,s,s,s,E.aKC,s,s,s),B.d(""+u.a+"/"+r.guH().c.a+" \u2605   mirrors "+w.a+"/"+r.guH().r,s,s,s,s,s,s,P.a4j,s,s,s)],t),A.m,s,A.hG,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(C.f5C("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.bg,B.a([new C.fd(A.jn,"Next level",new C.dZx(r),A.bg,s)],t)))
return new B.am(A.W,s,A.aZ,A.q,w,s)},
$S:61}
C.dZw.prototype={
$1(d){return this.a.c_R(d.b)},
$S:51}
C.dZx.prototype={
$0(){var w=this.a
return w.abp(w.d+1)},
$S:0}
C.dZz.prototype={
$0(){var w=this.a,v=w.r
return w.n(v.gqN(v))},
$S:0}
C.dZA.prototype={
$0(){var w=this.a
return w.abp(w.d+1)},
$S:0}
C.dZB.prototype={
$0(){var w=this.a
return w.abp(w.d-1)},
$S:0}
C.dZC.prototype={
$0(){return this.a.abp(this.b)},
$S:0}
C.dai.prototype={
$1(d){var w=this.b
return new B.u(this.a+(A.o.F(d,7)+0.5)*w,this.c+(A.o.al(d,7)+0.5)*w)},
$S:728}
C.dal.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new B.u(r,s):new B.u(r,r),p=new B.u(-q.a,-q.b)
r=this.c
w=t.ao(0,q)
v=t.ao(0,p)
$.V()
u=B.L()
u.r=(f?A.fY:A.aJ).gp(0)
u.c=7
u.d=A.bO
r.bw(w,v,u)
w=t.ao(0,q)
v=t.ao(0,p)
u=B.L()
u.r=A.c.gp(0)
u.c=2.4
u.d=A.bO
r.bw(w,v,u)},
$S:1833}
C.daj.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:454}
C.dak.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:454}
C.dZX.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.dZW(w,d))},
$S:135}
C.dZW.prototype={
$0(){var w=B.aM(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
C.dZY.prototype={
$0(){},
$S:0}
C.dZI.prototype={
$1(d){return d===0},
$S:130}
C.dZR.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new B.w(1,q[0],q[1],q[2],A.t)
q=B.d("ROUND "+B.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,E.a4x,s,s,s)
w=r.z==="play"?A.k.dE(r.y):20
v=x.p
w=B.B(B.a([q,B.d(""+w+" s",s,s,s,s,s,s,B.l(s,s,r.y<6?A.cG:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.d("SCORE "+r.w,s,s,s,s,s,s,P.a4j,s,s,s)],v),A.m,s,A.hG,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dw:p
t=B.m(22)
t=B.D(B.p(s,s,A.f,s,s,new B.o(u,s,B.H(A.ba,A.r,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=B.a([B.v(B.a([new B.C(D.bhY,w,s),B.D(B.B(B.a([B.D(new B.C(A.bU,B.v(B.a([t,A.ar,B.d(q?"TARGET":"TARGET: "+r.gcqu(),s,s,s,s,s,s,D.aLm,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),B.D(new B.C(A.bU,B.v(B.a([B.D(B.b2(s,s,s,new C.bdT(r.f,s),A.f2),1),A.ar,B.d("YOURS \xb7 "+A.k.U(A.k.E(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aLm,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(C.f5C("Light Mixer","Match each colour with red, green and blue light."+q,A.b6,B.a([new C.fd(A.iO,"Start",new C.dZO(r),A.bg,s)],v)))}if(r.z==="result")w.push(C.f5C(r.Q,"Score so far: "+r.w,A.aK,B.a([new C.fd(A.jn,"Next colour",new C.dZP(r),A.bg,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(C.f5C("Finished! "+q,u,A.bg,B.a([new C.fd(A.m7,"Play again",new C.dZQ(r),A.bg,s)],v)))}return new B.am(A.W,s,A.a9,A.q,w,s)},
$S:61}
C.dZO.prototype={
$0(){var w=this.a
return w.n(new C.dZK(w))},
$S:0}
C.dZK.prototype={
$0(){var w=this.a
w.w=w.r=0
w.atO()},
$S:0}
C.dZP.prototype={
$0(){var w=this.a
return w.n(w.gc_P())},
$S:0}
C.dZQ.prototype={
$0(){var w=this.a
return w.n(new C.dZJ(w))},
$S:0}
C.dZJ.prototype={
$0(){var w=this.a
w.w=w.r=0
w.atO()},
$S:0}
C.dZS.prototype={
$1(d){var w=this.a
return w.n(new C.dZN(w,d))},
$S:6}
C.dZN.prototype={
$0(){var w=A.k.U(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
C.dZT.prototype={
$1(d){var w=this.a
return w.n(new C.dZM(w,d))},
$S:6}
C.dZM.prototype={
$0(){var w=A.k.U(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
C.dZU.prototype={
$1(d){var w=this.a
return w.n(new C.dZL(w,d))},
$S:6}
C.dZL.prototype={
$0(){var w=A.k.U(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
C.dZV.prototype={
$0(){var w=this.a
return w.n(w.gc_Q())},
$S:0}
C.f26.prototype={
$0(){return D.dK_},
$S:z+70}
C.f27.prototype={
$0(){return D.dhe},
$S:z+71}
C.f28.prototype={
$0(){return D.ddN},
$S:z+72}
C.f29.prototype={
$0(){return D.dgF},
$S:z+73}
C.f2a.prototype={
$0(){return D.dlA},
$S:z+74}
C.f2b.prototype={
$0(){return D.dFJ},
$S:z+75}
C.f2c.prototype={
$0(){return D.dHV},
$S:z+76}
C.f2d.prototype={
$0(){return D.dkU},
$S:z+77}
C.caV.prototype={
$0(){return B.a9(this.a,!1).nh()},
$S:0}
C.caW.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=B.a([],k)
for(w=$.ha_(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aY(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ab(0,A.G,p.j(0.4),A.dq,16)],t)
n=A.c.j(0.85)
j.push(B.aG(m,B.p(m,new B.am(A.W,m,A.a9,A.q,B.a([new B.cH(m,-6,-6,m,m,m,new B.x(r.c,m,K.Rk,m,m,m,m,m,m,m,m,m),m),new B.bI(A.lh,m,m,B.v(B.a([new B.x(r.a,m,D.eP4,m,m,m,m,m,m,m,m,m),A.d6,new B.x(r.b,m,new B.F(!0,n,m,m,m,m,12,A.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.Q,0,A.p),m)],k),m),A.f,m,m,new B.o(m,m,m,new B.bv(q,q,q,q),p,new B.a5(A.ax,A.aC,A.x,o,m,m),A.n),m,v,m,m,A.bC,m,m,l),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.caU(d,r),m,m,m,m,m,m,!1,A.ad))}return B.c9(A.bI,j,A.by,14,14)},
$S:158}
C.caU.prototype={
$0(){return B.a9(this.a,!1).cp(B.eF(new C.caT(this.b),!1,null,x.H))},
$S:0}
C.caT.prototype={
$1(d){return this.a.f.$0()},
$S:44}
C.evt.prototype={
$0(){var w=this.a
return w.w=w.d[w.b_D(w.f)]},
$S:0}
C.evp.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cE.af()*7},
$S:0}
C.evo.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bJ(0,A.c2)
w.w=""},
$S:0}
C.evr.prototype={
$0(){var w=this.a
return w.n(new C.evq(w,this.b))},
$S:0}
C.evq.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cu(w,this.b)},
$S:0}
C.evs.prototype={
$1(d){return this.a.aV6(0)},
$S:2}
C.dME.prototype={
$0(){return C.AI("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.dMF.prototype={
$0(){},
$S:0}
C.dMz.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.dMB.prototype={
$0(){return this.a.aV8(this.b)},
$S:0}
C.dMC.prototype={
$0(){var w=this.a
return w.n(new C.dMA(w))},
$S:0}
C.dMA.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.dMD.prototype={
$0(){var w=this.a
return w.aV8(w.d)},
$S:0}
C.dya.prototype={
$2(d,e){return d+e},
$S:88}
C.dyb.prototype={
$0(){},
$S:0}
C.dy5.prototype={
$2(d,e){return d+e},
$S:88}
C.dy8.prototype={
$0(){var w=this.a
return w.n(new C.dy7(w,this.b))},
$S:0}
C.dy7.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dy9.prototype={
$0(){var w=this.a
return w.n(new C.dy6(w))},
$S:0}
C.dy6.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.dJX.prototype={
$0(){return C.qo(this.b,this.a.d,"drawing")},
$S:0}
C.dJY.prototype={
$1(d){var w=this.a
return w.n(new C.dJW(w,d))},
$S:40}
C.dJW.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aFi(u,v,t))},
$S:0}
C.dJZ.prototype={
$1(d){var w=this.a
return w.n(new C.dJV(w,d))},
$S:18}
C.dJV.prototype={
$0(){return A.d.gaj(this.a.e).c.push(this.b.b)},
$S:0}
C.dK_.prototype={
$1(d){var w=this.a
return w.n(new C.dJU(w,d))},
$S:23}
C.dJU.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aFi(u,v,t))},
$S:0}
C.dK0.prototype={
$0(){var w=this.a
return w.n(new C.dJT(w,this.b))},
$S:0}
C.dJT.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.dK1.prototype={
$1(d){var w=this.a
return w.n(new C.dJS(w,d))},
$S:6}
C.dJS.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dK2.prototype={
$0(){var w=this.a
return w.n(new C.dJR(w))},
$S:0}
C.dJR.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dK3.prototype={
$0(){var w=this.a
return w.n(new C.dJQ(w))},
$S:0}
C.dJQ.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.dK4.prototype={
$0(){var w=this.a
return w.n(A.d.gqN(w.e))},
$S:0}
C.dK5.prototype={
$0(){var w=this.a
return w.n(new C.dJP(w))},
$S:0}
C.dJP.prototype={
$0(){var w=this.a
w.x=D.ar8[A.o.F(A.d.cJ(D.ar8,w.x)+1,4)]},
$S:0}
C.e44.prototype={
$0(){return this.a.f.K(0,this.b)},
$S:0}
C.e45.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.AI("bell",B.a([0,4,7],w),500,0.45)
u.n(new C.e43(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.AI("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
C.e43.prototype={
$0(){var w=this.a
w.r.v(0,B.a([this.b,this.c],x.t))
w.f.a7(0)},
$S:0}
C.e46.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new C.e42(w))},
$S:11}
C.e42.prototype={
$0(){var w=this.a
w.f.a7(0)
w.x=!1},
$S:0}
C.e4a.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return B.aG(w,B.mE(new C.e48(v,e),w,A.b9,A.p5,w,new B.bl(0,u,x.Y),x.i),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e49(v,e),w,w,w,w,w,w,!1,A.ad)},
$S:71}
C.e49.prototype={
$0(){return this.a.c0M(this.b)},
$S:0}
C.e48.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.di(),m=n.a
m.$flags&2&&B.ah(m)
m[11]=0.001
n.fm(3.141592653589793*e)
m=B.m(16)
w=o?p:D.bJI
if(o)v=q.a.r.t(0,q.b)?A.bg.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.H(u.r.t(0,t)?A.bg:A.ba,A.r,1)
if(o){r=B.di()
r.fm(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fo(A.A,B.d(u[t],p,p,p,p,p,p,D.eMt,p,p,p),p,r,!0)
u=r}else u=D.f4W
return B.fo(A.A,B.p(A.A,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:137}
C.e4b.prototype={
$0(){var w=this.a
return w.n(new C.e47(w,this.b))},
$S:0}
C.e47.prototype={
$0(){var w=this.a
w.d=this.b.a
w.apf()},
$S:0}
C.e4c.prototype={
$0(){var w=this.a
return w.n(w.gbDB())},
$S:0}
C.ecz.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.ecA.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.ecx.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ecy.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.ecw(w))},
$S:11}
C.ecw.prototype={
$0(){return this.a.f=-1},
$S:0}
C.ecB.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.ecC.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.ecD.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aV7()},
$S:11}
C.ecE.prototype={
$0(){return this.a.c0S(this.b)},
$S:0}
C.eqR.prototype={
$1(d){return B.t(d.h(0,1))+","},
$S:67}
C.er_.prototype={
$3$big(d,e,f){var w=null,v=B.D(B.d(d,w,1,A.a2,w,w,w,B.l(w,w,A.aQ,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.C(A.l0,B.B(B.a([v,A.aa,new B.dm(1,A.cl,B.f_(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.ec),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1835}
C.eqW.prototype={
$1(d){return this.a.n(new C.eqV())},
$S:2}
C.eqV.prototype={
$0(){},
$S:0}
C.eqX.prototype={
$0(){var w=this.a
return w.n(new C.eqU(w,this.b))},
$S:0}
C.eqU.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eqY.prototype={
$1(d){var w=this.a
return w.n(new C.eqT(w,d))},
$S:6}
C.eqT.prototype={
$0(){return this.a.f=A.k.U(this.b)},
$S:0}
C.eqZ.prototype={
$0(){var w=this.a
return w.n(new C.eqS(w))},
$S:0}
C.eqS.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.e2K.prototype={
$0(){},
$S:0}
C.e2L.prototype={
$0(){},
$S:0}
C.e2D.prototype={
$0(){var w=this.a
return w.n(new C.e2C(w))},
$S:0}
C.e2C.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.bZ(u,1,!1,x.S)
w.r=0.9
C.a6h("hat",0.6)},
$S:0}
C.e2E.prototype={
$0(){var w=this.a
return w.n(new C.e2B(w))},
$S:0}
C.e2B.prototype={
$0(){this.a.y=1.1
C.l2("bell",36,200,0.4)},
$S:0}
C.e2F.prototype={
$0(){var w=this.a
return w.n(new C.e2A(w))},
$S:0}
C.e2A.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aC(Math.max(v,u)-t+1)
w.as=u
C.l2("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.e2G.prototype={
$0(){var w=this.a
return w.n(new C.e2z(w,this.b))},
$S:0}
C.e2z.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.e2H.prototype={
$1(d){var w=this.a
return w.n(new C.e2y(w,d))},
$S:6}
C.e2y.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.U(this.b),r=J.e_(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.e2I.prototype={
$1(d){var w=this.a
return w.n(new C.e2x(w,d))},
$S:6}
C.e2x.prototype={
$0(){return this.a.z=A.k.U(this.b)},
$S:0}
C.e2J.prototype={
$1(d){var w=this.a
return w.n(new C.e2w(w,d))},
$S:6}
C.e2w.prototype={
$0(){return this.a.Q=A.k.U(this.b)},
$S:0}
C.cn_.prototype={
$0(){return B.a9(this.a,!1).nh()},
$S:0}
C.cn0.prototype={
$0(){var w=this.a
return C.h6s(this.b,w.c,w.e,w.d)},
$S:0}
C.fyC.prototype={
$1(d){var w,v=null,u=B.m(24),t=this.a,s=t.j(0.4)
t=B.d(this.b,v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=B.d(this.c,v,v,v,v,v,v,D.eFf,v,v,v)
return B.er(B.a([B.bJ(!1,D.eVZ,v,v,!0,v,v,new C.fyB(d),v,v)],x.p),v,v,D.rG,w,v,v,v,new B.b6(u,new B.ay(s,1,A.r,-1)),t,v)},
$S:21}
C.fyB.prototype={
$0(){B.a9(this.a,!1).M(null)
return null},
$S:0}
C.cmW.prototype={
$0(){B.eJ()
this.a.e.$0()},
$S:0}
C.cmV.prototype={
$0(){B.eJ()
this.a.e.$0()},
$S:0}
C.cn1.prototype={
$0(){B.eJ()
this.a.e.$0()},
$S:0}
C.cmX.prototype={
$0(){var w=this.a
A.d.W(w.fd$,this.b.b9())
if(w.c!=null)this.c.$0()},
$S:0}
C.cmZ.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.E((v-w.kz$.a)/1e6,0,0.04)
w.kz$=d
w.fF$=A.o.al(v,1000)
w.l4(u)
if(w.c!=null)w.n(new C.cmY())},
$S:8}
C.cmY.prototype={
$0(){},
$S:0}
C.caQ.prototype={
$2(d,e){var w,v,u,t
for(w=e.length,v=this.a,u=v.$flags|0,t=0;t<w;++t){u&2&&B.ah(v,9)
v.setUint8(d+t,e.charCodeAt(t))}},
$S:454}
C.caS.prototype={
$0(){var w=this
return C.hnZ(w.a,w.b,w.c,w.d,w.e)},
$S:337}
C.caR.prototype={
$0(){var w=this
return C.l2(w.a,w.b,w.c,w.d)},
$S:1}
C.dPm.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.dPl(w,d))},
$S:z+79}
C.dPl.prototype={
$0(){return this.a.ckW(this.b)},
$S:0}
C.dOP.prototype={
$0(){var w,v,u,t=this.a,s=J.a8(t),r=s.gJ(t),q=new Float64Array(r*4)
for(w=0;w<s.gJ(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:1836}
C.dON.prototype={
$0(){return this.a.id=D.a_P},
$S:0}
C.dOO.prototype={
$0(){var w=this.b.a,v=B.U(w).k("a3<1>")
v=B.oM(new B.a3(w,new C.dOM(this.c),v),6,v.k("G.E"))
w=B.A(v,B.a2(v).k("G.E"))
return this.a.id=w},
$S:0}
C.dOM.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+80}
C.dOL.prototype={
$1(d){var w=null,v=B.ci(B.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,B.l(w,w,A.af,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.q,w,A.z,w,w,w,w,A.ak)
return B.er(B.a([B.bJ(!1,A.pM,w,w,!0,w,w,new C.dOK(d),w,w)],x.p),w,w,D.rG,v,w,w,w,w,D.f5_,w)},
$S:21}
C.dOK.prototype={
$0(){B.a9(this.a,!1).M(null)
return null},
$S:0}
C.dP7.prototype={
$0(){return C.qo(this.b,this.a.d,"earth")},
$S:0}
C.dP8.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new B.as(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gUe()
r=p.z
o=B.a([B.aG(A.c5,B.b2(q,q,q,new C.bc5(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dOW(p),new C.dOX(p),new C.dOY(p),q,q,q,q,q,q,q,new C.dOZ(p),q,q,q,!1,A.ad)],x.p)
if(p.r==null)o.push(A4.a8b)
w=this.b
if(w!=null)o.push(B.an(8,p.c1t(w),q,q,10,10,q,q))
return new B.eq(new B.am(A.W,q,A.aZ,A.q,o,q),p.d)},
$S:199}
C.dOX.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:287}
C.dOY.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.E(u.go*d.d,0.8,16)
else{w=57.2958/(u.gUe()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.E(u.x+v.b*w,-85,85)}},
$S:244}
C.dOW.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gUe()*u.z)
v=d.a.a
u.Q=A.k.E(-v.a*w,-160,160)
u.as=A.k.E(v.b*w,-100,100)},
$S:502}
C.dOZ.prototype={
$1(d){var w=this.a,v=w.c1w(d.b)
if(v!=null)w.n(new C.dOQ(w,v))
else w.n(new C.dOR(w))},
$S:51}
C.dOQ.prototype={
$0(){return this.a.auh(this.b)},
$S:0}
C.dOR.prototype={
$0(){return this.a.fx=null},
$S:0}
C.dP9.prototype={
$0(){var w=this.a
w.e.bJ(0,A.c2)
w.n(new C.dOV(w,this.b))},
$S:0}
C.dOV.prototype={
$0(){var w=this.a
w.id=D.a_P
w.auh(this.b)},
$S:0}
C.dPd.prototype={
$0(){var w=this.a
return w.n(new C.dP6(w))},
$S:0}
C.dP6.prototype={
$0(){var w=this.a
w.fx=null
w.aqp(15,w.y,1)},
$S:0}
C.dPe.prototype={
$0(){var w=this.a
return w.n(new C.dP5(w,this.b))},
$S:0}
C.dP5.prototype={
$0(){var w=this.b.b
return this.a.aqp(w.a,w.b,w.c)},
$S:0}
C.dPf.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.n(new C.dP4(w,v))},
$S:0}
C.dP4.prototype={
$0(){var w=this.b.a
return this.a.auh(w[A.cE.aC(w.length)])},
$S:0}
C.dPg.prototype={
$1(d){var w=this.a
return w.n(new C.dP3(w,d))},
$S:6}
C.dP3.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
C.dPh.prototype={
$1(d){var w=this.a
return w.n(new C.dP2(w,d))},
$S:6}
C.dP2.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.dPi.prototype={
$1(d){var w=this.a
return w.n(new C.dP1(w,d))},
$S:6}
C.dP1.prototype={
$0(){return this.a.fr=this.b},
$S:0}
C.dPj.prototype={
$0(){var w=this.a
return w.n(new C.dP0(w))},
$S:0}
C.dP0.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.dPk.prototype={
$0(){var w=this.a
return w.n(new C.dP_(w))},
$S:0}
C.dP_.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
C.dPa.prototype={
$0(){var w=this.a
return w.n(new C.dOU(w))},
$S:0}
C.dOU.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.dPb.prototype={
$0(){var w=this.a
return w.n(new C.dOT(w))},
$S:0}
C.dOT.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.dPc.prototype={
$0(){var w=this.a
return w.n(new C.dOS(w))},
$S:0}
C.dOS.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
C.dOJ.prototype={
$2(d,e){var w=null
return B.D(B.v(B.a([B.d(d,w,w,w,w,w,w,D.aK3,w,w,w),A.tP,B.d(e,w,2,A.a2,w,w,w,A.RB,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:125}
C.dOI.prototype={
$0(){var w=this.a
return w.n(new C.dOH(w))},
$S:0}
C.dOH.prototype={
$0(){return this.a.fx=null},
$S:0}
C.d6i.prototype={
$0(){var w=null,v=B.id(w,w,w,w,B.dl(w,w,w,w,w,w,w,w,w,B.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.I,w,w,!0,w,w,w,w,w,D.cK1,w,w),this.a),A.a5,A.ch,w,A.em,A.cg)
v.eU()
return v},
$S:314}
C.d6j.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new B.u(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1837}
C.f2_.prototype={
$0(){return D.djb},
$S:z+81}
C.f20.prototype={
$0(){return D.dHD},
$S:z+82}
C.f21.prototype={
$0(){return D.djd},
$S:z+83}
C.f22.prototype={
$0(){return D.ddz},
$S:z+84}
C.f23.prototype={
$0(){return D.dj9},
$S:z+85}
C.f24.prototype={
$0(){return D.dFK},
$S:z+86}
C.f25.prototype={
$0(){return D.dFI},
$S:z+87}
C.erE.prototype={
$0(){return B.a9(this.a,!1).nh()},
$S:0}
C.erF.prototype={
$0(){var w=this.a
return w.n(new C.erD(w))},
$S:0}
C.erD.prototype={
$0(){var w=this.a
return w.d=A.o.F(w.gaOq()+1,16)},
$S:0}
C.erG.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=B.a([],l)
for(w=$.h9Z(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new B.aY(18,18)
q=s.d
p=new B.ay(q.j(0.5),1,A.r,-1)
o=B.a([q.j(0.28),D.b8o],u)
k.push(B.aG(n,B.p(n,B.v(B.a([B.W(s.c,q,n,n,n,30),A.P,new B.x(s.a,n,D.eJy,n,A.L,n,n,n,n,2,n,n),A.d6,new B.x(s.b,n,D.eOt,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.b7,A.j,0,A.p),A.f,n,n,new B.o(n,n,new B.c3(p,p,p,p),new B.bv(r,r,r,r),n,new B.a5(A.ax,A.aC,A.x,o,n,n),A.n),n,v,n,n,A.ck,n,n,m),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.erC(d,s),n,n,n,n,n,n,!1,A.ad))}return B.c9(A.fH,k,A.by,10,10)},
$S:158}
C.erC.prototype={
$0(){return B.a9(this.a,!1).cp(B.eF(new C.erB(this.b),!1,null,x.H))},
$S:0}
C.erB.prototype={
$1(d){return this.a.e.$0()},
$S:44}
C.ejN.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
C.ejY.prototype={
$0(){return C.qo(this.b,this.a.d,"solar-system")},
$S:0}
C.ejZ.prototype={
$2(d,e){var w,v=null,u=this.a,t=new B.as(e.b,e.d)
u.ch=t
t=B.a([B.aG(A.c5,B.b2(v,v,v,new C.bol(u,v),t),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.ejV(u),new C.ejW(u),v,v,v,v,v,v,v,new C.ejX(u),v,v,v,!1,A.ad)],x.p)
w=this.b
if(w!=null)t.push(B.an(8,u.c1y(w),v,v,10,10,v,v))
return new B.eq(new B.am(A.W,v,A.aZ,A.q,t,v),u.d)},
$S:199}
C.ejV.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:287}
C.ejW.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.E(w.y*d.d,0.5,9)
else w.x=w.x.ao(0,d.a)},
$S:244}
C.ejX.prototype={
$1(d){var w=this.a,v=w.c1B(d.b)
if(v!=null)w.aVt(v)},
$S:51}
C.ek_.prototype={
$0(){var w=this.a
return w.n(new C.ejU(w))},
$S:0}
C.ejU.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
C.ek0.prototype={
$0(){return this.a.aVt(this.b)},
$S:0}
C.ek1.prototype={
$1(d){var w=this.a
return w.n(new C.ejT(w,d))},
$S:6}
C.ejT.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
C.ek2.prototype={
$1(d){var w=this.a
return w.n(new C.ejS(w,d))},
$S:6}
C.ejS.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ek3.prototype={
$0(){var w=this.a
return w.n(new C.ejR(w))},
$S:0}
C.ejR.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
C.ek4.prototype={
$0(){var w=this.a
return w.n(new C.ejQ(w))},
$S:0}
C.ejQ.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.ek5.prototype={
$0(){var w=this.a
return w.n(new C.ejP(w))},
$S:0}
C.ejP.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.ek6.prototype={
$0(){var w=this.a
return w.n(new C.ejO(w))},
$S:0}
C.ejO.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.ejM.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.aa(d/365.25,w)+" Earth years"}else w=A.k.aa(d,0)+" Earth days"
return w},
$S:418}
C.ejL.prototype={
$2(d,e){var w=null
return B.D(B.v(B.a([B.d(d,w,w,w,w,w,w,D.aK3,w,w,w),A.tP,B.d(e,w,2,A.a2,w,w,w,A.RB,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:125}
C.ejK.prototype={
$0(){var w=this.a
return w.n(new C.ejJ(w))},
$S:0}
C.ejJ.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
C.eLs.prototype={
$0(){var w=null,v=B.id(w,w,w,w,B.dl(w,w,w,w,w,w,w,w,w,B.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.I,w,w,!0,w,w,w,w,w,E.O7,w,w),this.a),A.a5,A.ch,w,A.em,A.cg)
v.eU()
return v},
$S:314}
C.eLt.prototype={
$1(d){return d.c>0},
$S:z+10}
C.eLu.prototype={
$1(d){return d.c>0},
$S:z+10}
C.dPq.prototype={
$0(){},
$S:0}
C.dPT.prototype={
$1(d){return d!=null},
$S:402}
C.dPF.prototype={
$0(){var w=this.a
return w.n(new C.dPw(w,this.b))},
$S:0}
C.dPw.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dPG.prototype={
$0(){var w=this.a
return w.n(new C.dPv(w))},
$S:0}
C.dPv.prototype={
$0(){return this.a.f=!1},
$S:0}
C.dPH.prototype={
$0(){var w=this.a
return w.n(new C.dPE(w))},
$S:0}
C.dPE.prototype={
$0(){return this.a.f=!0},
$S:0}
C.dPL.prototype={
$0(){var w=this.a
return w.n(new C.dPD(w))},
$S:0}
C.dPD.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dPM.prototype={
$1(d){var w=this.a
return w.n(new C.dPC(w,d))},
$S:6}
C.dPC.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.dPN.prototype={
$0(){var w=this.a
return w.n(w.gco2())},
$S:0}
C.dPO.prototype={
$1(d){var w=this.a
return w.n(new C.dPB(w,d))},
$S:6}
C.dPB.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.dPP.prototype={
$1(d){var w=this.a
return w.n(new C.dPA(w,d))},
$S:6}
C.dPA.prototype={
$0(){return this.a.ax=this.b},
$S:0}
C.dPQ.prototype={
$1(d){var w=this.a
return w.n(new C.dPz(w,d))},
$S:6}
C.dPz.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dPR.prototype={
$1(d){var w=this.a
return w.n(new C.dPy(w,d))},
$S:6}
C.dPy.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.dPS.prototype={
$0(){var w=this.a
return w.n(new C.dPx(w))},
$S:0}
C.dPx.prototype={
$0(){return this.a.ay=4},
$S:0}
C.dPI.prototype={
$0(){var w=this.a
return w.n(new C.dPu(w))},
$S:0}
C.dPu.prototype={
$0(){return this.a.ay=7.67},
$S:0}
C.dPJ.prototype={
$0(){var w=this.a
return w.n(new C.dPt(w))},
$S:0}
C.dPt.prototype={
$0(){return this.a.ay=9},
$S:0}
C.dPK.prototype={
$0(){var w=this.a
return w.n(new C.dPs(w))},
$S:0}
C.dPs.prototype={
$0(){return this.a.ay=11.3},
$S:0}
C.dPp.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=B.a([B.bX(0,B.bV(g,new B.o(D.b78,g,g,B.m(20),g,g,A.n),A.bb),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.xK[q]
n=B.aZ(o.d)
o=B.v(B.a([new B.x(o.a,g,new B.F(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new B.x(B.t(D.xK[q].b)+" m/s\xb2",g,D.eNP,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=B.p(g,g,A.f,A.dw,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?B.W(N.XC,B.aZ(D.xK[q].d),g,g,g,22):B.p(g,g,A.f,g,g,new B.o(B.aZ(D.xK[q].d),g,g,g,B.a([new B.ab(0,A.G,B.aZ(D.xK[q].d).j(0.6),A.J,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=B.p(g,g,A.f,B.aZ(D.xK[q].d).j(0.6),g,g,g,3,g,A.fl,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.aa(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,B.a([new B.cH(p,8,g,g,f,g,o,g),new B.cH(n-0.5,54,g,e,g,g,m,g),new B.cH(n-11,54+s*(l/20),g,g,g,g,k,g),new B.cH(p,g,g,8,f,g,B.v(B.a([j,A.av,new B.x(i,g,A.vt,g,g,g,g,g,g,g,g,g),new B.x(h,g,D.eGp,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.ea(v,new C.dPo()))a1.push(D.aXZ)
return new B.am(A.W,g,A.a9,A.q,a1,g)},
$S:61}
C.dPo.prototype={
$1(d){return d==null},
$S:402}
C.dPr.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.E(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=B.m(8)
p=B.p(v,v,A.f,v,v,new B.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=B.dg(v,v,v,v,A.b9,new B.o(v,v,v,B.m(8),v,new B.a5(A.a3,A.a7,A.x,B.a([B.aZ(t).j(0.9),B.aZ(t).j(0.4)],x.O),v,v),A.n),A.i4,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.aa(r,1):C.Fx(r)
u=u.ax*9.81/s
u=u<10?A.k.aa(u,2):A.k.aa(u,0)
return new B.am(A.W,v,A.a9,A.q,B.a([p,t,B.an(v,B.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.eMe,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:61}
C.dPn.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=B.b2(v,v,v,new C.b7l(new B.u(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.at)
o=A.w.j(0.55)
p=B.m(14)
q=B.H(A.bG,A.r,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.bg
else u=A.a.t(u,"escapes")?A.aY:A.c
u=B.d(t,v,v,v,v,v,v,B.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.aa(Math.sqrt(58.86870477034412),1)
s=A.k.aa(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+C.Fx(A.k.E(r.cx.gcj()-6371,0,9e9))+" km":""
w=x.p
return new B.am(A.W,v,A.aZ,A.q,B.a([n,B.an(v,B.p(v,B.v(B.a([u,A.bB,B.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,F.aLC,v,v,v)],w),A.F,v,A.e,A.Q,0,A.p),A.f,v,v,new B.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bU,v,v,v),v,v,12,12,8,v)],w),v)},
$S:61}
C.ecH.prototype={
$0(){return C.qo(this.b,this.a.d,"size-compare")},
$S:0}
C.ecI.prototype={
$0(){var w=this.a
return w.n(new C.ecG(w,this.b))},
$S:0}
C.ecG.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ecJ.prototype={
$0(){var w=this.a
return w.n(new C.ecF(w,this.b))},
$S:0}
C.ecF.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eJC.prototype={
$3(d,e,f){var w,v,u=this.a
$.V()
w=B.L()
w.r=f.j(0.2).gp(0)
w.z=new B.hm(A.G,Math.max(2,e*0.18))
u.ae(d,e*1.12,w)
w=B.L()
v=B.aq(f,A.w,0.6)
v.toString
w.sar(new B.bR(O.pV,0.5,A.x,null,0,B.a([A.c,f,v],x.O),F.a_4,null).av(0,B.bS(d,e)))
u.ae(d,e,w)},
$S:725}
C.dxC.prototype={
$1(d){return d.e<=0},
$S:z+89}
C.dxq.prototype={
$1(d){return d.b},
$S:z+60}
C.dxr.prototype={
$0(){return C.qo(this.b,this.a.d,"black-hole")},
$S:0}
C.dxs.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new B.as(e.b,e.d)
p.Q=o
o=B.aG(A.c5,B.b2(q,q,q,new C.b6K(p,q),o),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dxo(p),q,q,q,q,q,q,q,q,q,new C.dxp(p),q,q,q,q,!1,A.ad)
w=A.w.j(0.55)
v=B.m(14)
u=B.H(A.bG,A.r,1)
t=p.r
if(t<1000)t=A.k.aa(t,t<10?1:0)+" Suns"
else t=C.fcR(t)+" Suns"
t=p.ac5("MASS",t)
s=2.953*p.r
r=x.p
r=B.a([o,B.an(q,B.p(q,B.B(B.a([t,p.ac5("EDGE WIDTH",(s<100?A.k.aa(s,1):C.Fx(s))+" km"),p.ac5("TIME",A.k.aa(this.b*100,0)+"%"),p.ac5("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bU,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.dW6)
return new B.eq(new B.am(A.W,q,A.aZ,A.q,r,q),p.d)},
$S:199}
C.dxp.prototype={
$1(d){return this.a.aVu(d.b)},
$S:23}
C.dxo.prototype={
$1(d){if(A.cE.af()<0.12)this.a.aVu(d.b)},
$S:18}
C.dxu.prototype={
$1(d){var w=this.a
return w.n(new C.dxn(w,d))},
$S:6}
C.dxn.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
C.dxv.prototype={
$0(){var w=this.a
return w.n(new C.dxm(w))},
$S:0}
C.dxm.prototype={
$0(){return this.a.r=10},
$S:0}
C.dxw.prototype={
$0(){var w=this.a
return w.n(new C.dxl(w))},
$S:0}
C.dxl.prototype={
$0(){return this.a.r=21},
$S:0}
C.dxx.prototype={
$0(){var w=this.a
return w.n(new C.dxk(w))},
$S:0}
C.dxk.prototype={
$0(){return this.a.r=43e5},
$S:0}
C.dxy.prototype={
$0(){var w=this.a
return w.n(new C.dxj(w))},
$S:0}
C.dxj.prototype={
$0(){return this.a.r=65e8},
$S:0}
C.dxz.prototype={
$0(){var w=this.a
return w.n(new C.dxi(w))},
$S:0}
C.dxi.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dxA.prototype={
$0(){var w=this.a
return w.n(new C.dxh(w))},
$S:0}
C.dxh.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.dxB.prototype={
$0(){var w=this.a
return w.n(new C.dxg(w))},
$S:0}
C.dxg.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.dxt.prototype={
$0(){var w=this.a
return w.n(new C.dxf(w))},
$S:0}
C.dxf.prototype={
$0(){var w=this.a
A.d.a7(w.z)
w.as=0},
$S:0}
C.dNY.prototype={
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
$S:1838}
C.dNO.prototype={
$0(){return C.qo(this.b,this.a.d,"galaxy")},
$S:0}
C.dNP.prototype={
$0(){var w=this.a
return w.n(new C.dNN(w,this.b))},
$S:0}
C.dNN.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.Y3()},
$S:0}
C.dNQ.prototype={
$0(){var w=this.a
return w.n(new C.dNM(w))},
$S:0}
C.dNM.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.Y3()}w.cnV()},
$S:0}
C.dNR.prototype={
$1(d){var w=this.a
return w.n(new C.dNL(w,d))},
$S:6}
C.dNL.prototype={
$0(){var w=this.a
w.f=A.k.U(this.b)
w.Y3()},
$S:0}
C.dNS.prototype={
$1(d){var w=this.a
return w.n(new C.dNK(w,d))},
$S:6}
C.dNK.prototype={
$0(){var w=this.a
w.r=this.b
w.Y3()},
$S:0}
C.dNT.prototype={
$1(d){var w=this.a
return w.n(new C.dNJ(w,d))},
$S:6}
C.dNJ.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dNU.prototype={
$1(d){var w=this.a
return w.n(new C.dNI(w,d))},
$S:6}
C.dNI.prototype={
$0(){return this.a.ax=this.b},
$S:0}
C.dNV.prototype={
$0(){var w=this.a
return w.n(new C.dNH(w))},
$S:0}
C.dNH.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.dNW.prototype={
$0(){var w=this.a
return w.n(new C.dNG(w))},
$S:0}
C.dNG.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
C.dNX.prototype={
$0(){var w=this.a
return w.n(new C.dNF(w))},
$S:0}
C.dNF.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.d3r.prototype={
$6(d,e,f,g,h,i){return g.ao(0,new B.u((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1839}
C.ecn.prototype={
$0(){return C.qo(this.b,this.a.d,"seasons-moon")},
$S:0}
C.eco.prototype={
$0(){var w=this.a
return w.n(new C.ecm(w))},
$S:0}
C.ecm.prototype={
$0(){return this.a.f="seasons"},
$S:0}
C.ecp.prototype={
$0(){var w=this.a
return w.n(new C.ecl(w))},
$S:0}
C.ecl.prototype={
$0(){return this.a.f="moon"},
$S:0}
C.ecq.prototype={
$0(){var w=this.a
return w.n(new C.eck(w))},
$S:0}
C.eck.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.ecr.prototype={
$0(){var w=this.a
return w.n(new C.ecj(w))},
$S:0}
C.ecj.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
C.ecs.prototype={
$1(d){var w=this.a
return w.n(new C.eci(w,d))},
$S:6}
C.eci.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.ect.prototype={
$1(d){var w=this.a
return w.n(new C.ech(w,d))},
$S:6}
C.ech.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.ecu.prototype={
$1(d){var w=this.a
return w.n(new C.ecg(w,d))},
$S:6}
C.ecg.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ecv.prototype={
$1(d){var w=this.a
return w.n(new C.ecf(w,d))},
$S:6}
C.ecf.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=C.aJj.prototype
w.bqq=w.q
w=C.aIl.prototype
w.bpq=w.q
w=C.aIm.prototype
w.bpr=w.q
w=C.aIr.prototype
w.bpw=w.q
w=C.aK7.prototype
w.brk=w.q
w=C.aJh.prototype
w.bqo=w.q
w=C.aJq.prototype
w.bqx=w.q
w=C.aJw.prototype
w.bqD=w.q
w=C.aIp.prototype
w.bpu=w.q
w=C.aJe.prototype
w.bql=w.q
w=C.aJt.prototype
w.bqA=w.q
w=C.aJc.prototype
w.bqj=w.q
w=C.aJd.prototype
w.bqk=w.q
w=C.aID.prototype
w.bpJ=w.q
w=C.aIh.prototype
w.bpm=w.q
w=C.aIL.prototype
w.bpR=w.q
w=C.av_.prototype
w.bmy=w.q
w=C.av0.prototype
w.bmz=w.q
w=C.aGO.prototype
w.bnP=w.q
w=C.aIA.prototype
w.bpF=w.q
w=C.aJx.prototype
w.bqE=w.q
w=C.aJ1.prototype
w.bq8=w.q
w=C.aJ2.prototype
w.bq9=w.q
w=C.aIn.prototype
w.bps=w.q
w=C.aIG.prototype
w.bpM=w.q
w=C.aJa.prototype
w.bqh=w.q
w=C.aJE.prototype
w.bqL=w.q
w=C.aIM.prototype
w.bpT=w.q
w=C.aIN.prototype
w.bpU=w.q
w=C.aIO.prototype
w.bpV=w.q
w=C.aJm.prototype
w.bqt=w.q
w=C.aJp.prototype
w.bqw=w.q
w=C.aIk.prototype
w.bpp=w.q
w=C.aIJ.prototype
w.bpP=w.q
w=C.aJl.prototype
w.bqs=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(C.aBx.prototype,"gatj","bYq",0)
var r
v(r=C.azZ.prototype,"gc4Y","c4Z",35)
w(r,"gbYW","aU8",0)
w(C.aA1.prototype,"gbZS","bZT",0)
u(C.aAi.prototype,"gbZY","bZZ",52)
w(r=C.aEt.prototype,"gcnD","cnE",0)
w(r,"gcbw","adw",0)
w(r,"gc9e","c9f",0)
w(r,"gbZX","ab7",3)
w(r=C.aBw.prototype,"gbAK","a6R",3)
w(r,"gc8w","aX8",0)
w(r,"gccb","adE",3)
t(r,"gc_0","ab8",3)
w(C.aBK.prototype,"gbRy","bRz",0)
w(r=C.aBp.prototype,"gcny","cnz",0)
w(r,"gbB4","bB5",0)
w(r=C.aA0.prototype,"gb0c","awH",0)
v(r,"gc_6","Xt",54)
w(r,"gc_5","aba",3)
v(r=C.aBo.prototype,"gce5","avr",58)
v(r,"gckc","awD",15)
w(r,"gbF1","aN2",0)
v(r=C.aBm.prototype,"gcuq","agE",15)
t(r,"gc_q","atK",0)
w(r,"gcgk","cgl",0)
v(r=C.aAu.prototype,"gc_r","c_s",90)
w(r,"gc_t","c_u",0)
t(r=C.a2t.prototype,"gqN","a7",0)
v(r,"gcJG","akn",1)
v(r,"gcGe","Kc",1)
w(r,"gcLI","bcM",0)
s(C.agm.prototype,"gc_y",0,5,null,["$5"],["pA"],64,0,0)
w(r=C.aAv.prototype,"gc_A","c_B",0)
w(r,"gceR","ae_",3)
w(r,"gc5d","aci",3)
w(r,"gclK","af5",3)
w(r=C.aBL.prototype,"gaUJ","c_E",0)
w(r,"gcsl","agg",0)
w(r=C.aB8.prototype,"gc_P","atO",0)
w(r,"gc_Q","aUK",0)
w(r=C.aBX.prototype,"gc0N","c0O",0)
t(r,"gc0L","aV6",0)
w(C.aBi.prototype,"gbDB","apf",0)
t(C.aBB.prototype,"gc0P","c0Q",0)
v(r=C.aAG.prototype,"gc1u","c1v",78)
w(r,"gbIk","bIl",0)
w(r=C.aAH.prototype,"gco2","co3",0)
w(r,"gc1z","c1A",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aB,[C.ahz,C.EQ,C.uh,C.aP7,C.a1c,C.b6N,C.bX0,C.xm,C.Bi,C.n0,C.b7v,C.zA,C.bp1,C.pA,C.qg,C.Bm,C.Xp,C.acx,C.ZD,C.Bw,C.a9u,C.a9L,C.abF,C.ED,C.bi4,C.Oi,C.YW,C.a9B,C.aa3,C.Ez,C.aaS,C.abm,C.rH,C.b6n,C.aOY,C.e4,C.rU,C.a8c,C.a9g,C.a2t,C.me,C.b7w,C.fF,C.uw,C.wK,C.lO,C.wZ,C.aTo,C.bql,C.aFi,C.mh,C.a8X,C.a8Y,C.uu,C.NA,C.xk,C.Nz,C.bqg,C.O1,C.acC])
u(B.i4,[C.feT,C.f6E,C.fcf,C.fcg,C.feQ,C.feR,C.dWG,C.dWZ,C.ebl,C.eaT,C.eaU,C.eaV,C.eaW,C.eaX,C.eaY,C.eaZ,C.eb_,C.eaR,C.eaS,C.eaQ,C.ebg,C.ebh,C.ebi,C.dxH,C.dxJ,C.dxM,C.dxX,C.bX1,C.bX2,C.f1d,C.f1e,C.f1f,C.f1m,C.f1n,C.f1o,C.dAe,C.dzW,C.dAf,C.dzR,C.dzM,C.dzO,C.dzU,C.dA6,C.dA4,C.dA5,C.dA3,C.dA0,C.dA2,C.eJ6,C.eIO,C.eIV,C.eJ3,C.eII,C.da_,C.da0,C.d9X,C.d9Y,C.d9Z,C.da1,C.da2,C.da3,C.da4,C.da5,C.da6,C.da7,C.da8,C.da9,C.eah,C.eai,C.eaj,C.eak,C.eaf,C.eag,C.eaM,C.eao,C.eaq,C.eaa,C.eaI,C.eaG,C.eaH,C.eaF,C.eaE,C.eac,C.ekx,C.ekv,C.ekj,C.ekn,C.eki,C.eko,C.ekp,C.ekt,C.er8,C.ere,C.e7m,C.e7n,C.e78,C.e79,C.e77,C.e7c,C.e7e,C.e7f,C.eqy,C.eqz,C.eqx,C.eql,C.eqm,C.eqk,C.eqd,C.eqe,C.eqs,C.eqt,C.equ,C.eqv,C.eqw,C.dzn,C.dzo,C.dzp,C.dzg,C.dzj,C.cG1,C.e2Q,C.e3e,C.e2U,C.e31,C.e32,C.e30,C.e39,C.e6Q,C.e6V,C.e6e,C.e5X,C.e68,C.e66,C.e64,C.e65,C.e63,C.dHv,C.dHj,C.dHl,C.dHt,C.dHo,C.dKk,C.dKc,C.dKd,C.dKe,C.cZw,C.cZy,C.cZx,C.dvL,C.dvM,C.dvE,C.dvC,C.cyz,C.dOl,C.dOm,C.dOh,C.dOi,C.d5u,C.d5v,C.dzK,C.dzs,C.dzB,C.dzC,C.dzH,C.dzI,C.bId,C.bIo,C.bIj,C.bIp,C.bIr,C.bIe,C.bIc,C.bIw,C.bIk,C.bIn,C.bIm,C.bIl,C.bDF,C.f9Y,C.fqz,C.fqC,C.fqA,C.bDm,C.bDh,C.bDg,C.bDE,C.bDw,C.bDx,C.bDv,C.bDy,C.bD6,C.bD8,C.bD4,C.bD5,C.bCX,C.bCY,C.f1p,C.f1q,C.f1r,C.f1c,C.f1s,C.f1b,C.f1t,C.f1g,C.f1a,C.f1h,C.f19,C.f1i,C.f18,C.f1j,C.f16,C.f17,C.f1k,C.f14,C.f15,C.f1l,C.f13,C.dKB,C.dKC,C.dKr,C.dKn,C.dKA,C.cw5,C.f2f,C.fv0,C.fv1,C.fa9,C.fyb,C.fyc,C.ert,C.dZE,C.dZw,C.dai,C.dal,C.dZX,C.dZI,C.dZS,C.dZT,C.dZU,C.caT,C.evs,C.dJY,C.dJZ,C.dK_,C.dK1,C.e48,C.eqR,C.er_,C.eqW,C.eqY,C.e2H,C.e2I,C.e2J,C.fyC,C.cmZ,C.dPm,C.dOM,C.dOL,C.dOX,C.dOY,C.dOW,C.dOZ,C.dPg,C.dPh,C.dPi,C.erB,C.ejV,C.ejW,C.ejX,C.ek1,C.ek2,C.ejM,C.eLt,C.eLu,C.dPT,C.dPM,C.dPO,C.dPP,C.dPQ,C.dPR,C.dPo,C.eJC,C.dxC,C.dxq,C.dxp,C.dxo,C.dxu,C.dNY,C.dNR,C.dNS,C.dNT,C.dNU,C.d3r,C.ecs,C.ect,C.ecu,C.ecv])
u(B.kz,[C.feS,C.dWL,C.dWJ,C.eb1,C.ebe,C.dzN,C.dA9,C.dFt,C.eJ9,C.eJa,C.eIN,C.eJ_,C.eJ0,C.eIW,C.eJ1,C.eIH,C.ead,C.eae,C.eaL,C.eaD,C.eas,C.er7,C.e7b,C.eqo,C.dzf,C.dzk,C.e35,C.e6U,C.ff9,C.e60,C.e5Y,C.e6a,C.di2,C.bCt,C.fb_,C.dvy,C.dvG,C.bIq,C.bIs,C.bIu,C.bIf,C.bIh,C.bDG,C.cg5,C.fqB,C.bDf,C.bDC,C.bDB,C.dKz,C.cw6,C.dGn,C.dGl,C.dGf,C.eru,C.erh,C.dZy,C.daj,C.dak,C.dZR,C.caW,C.dya,C.dy5,C.e4a,C.caQ,C.dP8,C.dOJ,C.d6j,C.erG,C.ejZ,C.ejL,C.dPp,C.dPr,C.dPn,C.dxs])
u(B.af,[C.TG,C.U6,C.Sy,C.SD,C.LN,C.aEs,C.U5,C.Uk,C.Uw,C.U3,C.Ur,C.SB,C.TY,C.U2,C.U0,C.SZ,C.Te,C.St,C.Ts,C.SC,C.agk,C.Tf,C.auH,C.SX,C.Ux,C.TL,C.TN,C.UC,C.Tm,C.Sz,C.Td,C.TZ,C.Ua,C.Uv,C.TX,C.Tt,C.Uy,C.Uj,C.Tu,C.Ub,C.Sx,C.Tq,C.U7])
u(B.ag,[C.bgz,C.aJj,C.aIl,C.aIr,C.aAi,C.aK7,C.aJh,C.aJq,C.aJw,C.aJe,C.aJt,C.aIp,C.aJc,C.aJd,C.aBm,C.bg3,C.aID,C.aIh,C.aIL,C.bfX,C.av_,C.btr,C.aGO,C.aIA,C.aJx,C.aJ1,C.aJ2,C.aJE,C.aIG,C.aIn,C.bg4,C.aBi,C.aBB,C.bhi,C.aJa,C.aIM,C.bhl,C.aJp,C.aIO,C.aJm,C.aIk,C.aIJ,C.aJl])
u(B.jl,[C.dWE,C.dWF,C.dWR,C.dWS,C.dWN,C.dWM,C.dWO,C.dWK,C.dWP,C.dWI,C.dWQ,C.dWH,C.dWV,C.dWU,C.dWW,C.dWT,C.dWX,C.dWY,C.dX_,C.ebk,C.ebm,C.ebn,C.eb3,C.eb2,C.eb0,C.eb9,C.eba,C.eb6,C.ebb,C.eb5,C.ebc,C.ebd,C.eb4,C.ebf,C.eb8,C.ebj,C.eb7,C.dy3,C.dy2,C.dxG,C.dy4,C.dxI,C.dxK,C.dxL,C.dxN,C.dxD,C.dxE,C.dxF,C.dxU,C.dxV,C.dxW,C.dxT,C.dxY,C.dxS,C.dxZ,C.dxR,C.dy_,C.dxQ,C.dy0,C.dxP,C.dy1,C.dxO,C.dzT,C.dzS,C.dzX,C.dzP,C.dzQ,C.dzY,C.dzZ,C.dA_,C.dzV,C.dzL,C.dA8,C.dA7,C.dAa,C.dAb,C.dAc,C.dA1,C.dAd,C.cGu,C.dFr,C.dFq,C.dFs,C.f1E,C.f1F,C.f1G,C.f1R,C.f1T,C.f1U,C.f1V,C.f1W,C.f1X,C.f1Y,C.f1Z,C.f1H,C.f1I,C.f1J,C.f1K,C.f1L,C.f1M,C.f1N,C.f1O,C.f1P,C.f1Q,C.f1S,C.eJ8,C.eJ7,C.eIQ,C.eIP,C.eIL,C.eIK,C.eIM,C.eIJ,C.eIY,C.eIX,C.eIZ,C.eIR,C.eJ2,C.eIU,C.eJ4,C.eIT,C.eJ5,C.eIS,C.eam,C.eab,C.eal,C.ea7,C.ean,C.eap,C.ea8,C.ea9,C.eaK,C.eaJ,C.eaA,C.eaB,C.eaC,C.eaw,C.eax,C.eav,C.eay,C.eau,C.eaz,C.eat,C.ear,C.d9W,C.ekw,C.ek8,C.ek7,C.ekh,C.ekq,C.ekg,C.ekr,C.ekf,C.eks,C.eke,C.ekd,C.eku,C.ekc,C.ekk,C.ekb,C.ekl,C.eka,C.ekm,C.ek9,C.er6,C.er5,C.er9,C.er4,C.era,C.er3,C.erb,C.er2,C.erc,C.er1,C.erd,C.er0,C.e7a,C.e76,C.e75,C.e74,C.e7g,C.e73,C.e7h,C.e72,C.e7i,C.e71,C.e7j,C.e7k,C.e7l,C.e70,C.e7d,C.eqn,C.eqc,C.eqp,C.eqj,C.eqq,C.eqi,C.eqr,C.eqh,C.eqg,C.eqf,C.eqb,C.eqa,C.eq9,C.dzm,C.dzd,C.dze,C.dzh,C.dzi,C.dzl,C.e33,C.e2V,C.e34,C.e36,C.e3_,C.e37,C.e2Z,C.e38,C.e2Y,C.e2X,C.e3a,C.e2W,C.e3b,C.e2T,C.e3c,C.e2S,C.e3d,C.e2R,C.e6K,C.e6L,C.e6S,C.e6R,C.e6T,C.e6P,C.e6W,C.e6O,C.e6X,C.e6N,C.e6Y,C.e6Z,C.e6M,C.e7_,C.e6d,C.e5V,C.e5W,C.e6_,C.e5Z,C.e69,C.e67,C.e61,C.e6b,C.e62,C.e6c,C.dHu,C.dHk,C.dHi,C.dHp,C.dHn,C.dHq,C.dHm,C.dHr,C.dHs,C.dKj,C.dK7,C.dK6,C.dK8,C.dKb,C.dKa,C.dK9,C.dKf,C.dKg,C.dKh,C.dKi,C.dvK,C.dvJ,C.dvz,C.dvF,C.dvD,C.dvH,C.dvB,C.dvI,C.dvA,C.dOk,C.dOj,C.dOb,C.dOf,C.dOe,C.dOg,C.dOd,C.dOc,C.dzJ,C.dzA,C.dzz,C.dzD,C.dzy,C.dzE,C.dzx,C.dzF,C.dzw,C.dzG,C.dzv,C.dzu,C.dzt,C.bIt,C.bIv,C.bIg,C.bIi,C.bDj,C.bDk,C.bDi,C.bDl,C.bDn,C.bD9,C.bDa,C.bDb,C.bDc,C.bDd,C.bDe,C.bDD,C.bCN,C.bDt,C.bDu,C.bDr,C.bDs,C.bDp,C.bDq,C.bDz,C.bDo,C.bDA,C.bCO,C.bD7,C.bCU,C.bCV,C.bCT,C.bCW,C.bCS,C.bCZ,C.bD_,C.bD0,C.bD1,C.bCR,C.bD2,C.bCQ,C.bD3,C.bCP,C.dKs,C.dKD,C.dKE,C.dKq,C.dKp,C.dKo,C.dKx,C.dKv,C.dKw,C.dKy,C.dKt,C.dKu,C.dKF,C.dKG,C.dKH,C.dKI,C.dGo,C.dGm,C.dGk,C.dGj,C.dGi,C.dGh,C.dGg,C.dGc,C.dGb,C.dGe,C.dGd,C.erl,C.erk,C.erj,C.erm,C.erv,C.ero,C.erp,C.erq,C.err,C.ern,C.ers,C.eri,C.erf,C.erg,C.dZD,C.dZF,C.dZu,C.dZv,C.dZx,C.dZz,C.dZA,C.dZB,C.dZC,C.dZW,C.dZY,C.dZO,C.dZK,C.dZP,C.dZQ,C.dZJ,C.dZN,C.dZM,C.dZL,C.dZV,C.f26,C.f27,C.f28,C.f29,C.f2a,C.f2b,C.f2c,C.f2d,C.caV,C.caU,C.evt,C.evp,C.evo,C.evr,C.evq,C.dME,C.dMF,C.dMz,C.dMB,C.dMC,C.dMA,C.dMD,C.dyb,C.dy8,C.dy7,C.dy9,C.dy6,C.dJX,C.dJW,C.dJV,C.dJU,C.dK0,C.dJT,C.dJS,C.dK2,C.dJR,C.dK3,C.dJQ,C.dK4,C.dK5,C.dJP,C.e44,C.e45,C.e43,C.e46,C.e42,C.e49,C.e4b,C.e47,C.e4c,C.ecz,C.ecA,C.ecx,C.ecy,C.ecw,C.ecB,C.ecC,C.ecD,C.ecE,C.eqV,C.eqX,C.eqU,C.eqT,C.eqZ,C.eqS,C.e2K,C.e2L,C.e2D,C.e2C,C.e2E,C.e2B,C.e2F,C.e2A,C.e2G,C.e2z,C.e2y,C.e2x,C.e2w,C.cn_,C.cn0,C.fyB,C.cmW,C.cmV,C.cn1,C.cmX,C.cmY,C.caS,C.caR,C.dPl,C.dOP,C.dON,C.dOO,C.dOK,C.dP7,C.dOQ,C.dOR,C.dP9,C.dOV,C.dPd,C.dP6,C.dPe,C.dP5,C.dPf,C.dP4,C.dP3,C.dP2,C.dP1,C.dPj,C.dP0,C.dPk,C.dP_,C.dPa,C.dOU,C.dPb,C.dOT,C.dPc,C.dOS,C.dOI,C.dOH,C.d6i,C.f2_,C.f20,C.f21,C.f22,C.f23,C.f24,C.f25,C.erE,C.erF,C.erD,C.erC,C.ejN,C.ejY,C.ek_,C.ejU,C.ek0,C.ejT,C.ejS,C.ek3,C.ejR,C.ek4,C.ejQ,C.ek5,C.ejP,C.ek6,C.ejO,C.ejK,C.ejJ,C.eLs,C.dPq,C.dPF,C.dPw,C.dPG,C.dPv,C.dPH,C.dPE,C.dPL,C.dPD,C.dPC,C.dPN,C.dPB,C.dPA,C.dPz,C.dPy,C.dPS,C.dPx,C.dPI,C.dPu,C.dPJ,C.dPt,C.dPK,C.dPs,C.ecH,C.ecI,C.ecG,C.ecJ,C.ecF,C.dxr,C.dxn,C.dxv,C.dxm,C.dxw,C.dxl,C.dxx,C.dxk,C.dxy,C.dxj,C.dxz,C.dxi,C.dxA,C.dxh,C.dxB,C.dxg,C.dxt,C.dxf,C.dNO,C.dNP,C.dNN,C.dNQ,C.dNM,C.dNL,C.dNK,C.dNJ,C.dNI,C.dNV,C.dNH,C.dNW,C.dNG,C.dNX,C.dNF,C.ecn,C.eco,C.ecm,C.ecp,C.ecl,C.ecq,C.eck,C.ecr,C.ecj,C.eci,C.ech,C.ecg,C.ecf])
t(C.btG,C.aJj)
t(C.aBx,C.btG)
u(B.n9,[C.bdB,C.b7N,C.bos,C.b6u,C.bn8,C.bmB,C.b79,C.bmD,C.bqv,C.bdz,C.bon,C.bhS,C.bpd,C.b7u,C.bet,C.bhT,C.bf9,C.baw,C.b6z,C.bbZ,C.agm,C.b5H,C.brw,C.acq,C.bqX,C.bdE,C.bdT,C.brI,C.bmC,C.bi5,C.bc5,C.bol,C.b7l,C.bnU,C.b6K,C.bbW,C.bnb])
t(C.aIm,C.aIl)
t(C.azZ,C.aIm)
t(C.btp,C.aIr)
t(C.aA1,C.btp)
u(B.mi,[C.IX,C.Zq,C.HT])
u(B.at,[C.bnu,C.acH,C.abB,C.Or,C.bnY,C.a6i,C.b9S,C.b3x,C.dw,C.eH,C.at7,C.fd,C.E6])
t(C.aEt,C.aK7)
t(C.bdy,B.p5)
t(C.aBw,C.aJh)
t(C.bh9,C.aJq)
t(C.aBK,C.aJw)
t(C.btF,C.aJe)
t(C.aBp,C.btF)
t(C.btN,C.aJt)
t(C.bhe,C.btN)
t(C.bto,C.aIp)
t(C.aA0,C.bto)
t(C.btD,C.aJc)
t(C.bgO,C.btD)
t(C.btE,C.aJd)
t(C.aBo,C.btE)
t(C.aAu,C.aID)
t(C.bfK,C.aIh)
t(C.bgf,C.aIL)
t(C.av0,C.av_)
t(C.agl,C.av0)
t(C.aAv,C.btr)
t(C.b5I,C.aGO)
t(C.bg1,C.aIA)
t(C.aBL,C.aJx)
t(C.btw,C.aJ1)
t(C.bgB,C.btw)
t(C.btx,C.aJ2)
t(C.aB8,C.btx)
t(C.btO,C.aJE)
t(C.aBX,C.btO)
t(C.bts,C.aIG)
t(C.bga,C.bts)
t(C.btn,C.aIn)
t(C.bfP,C.btn)
t(C.btC,C.aJa)
t(C.bgM,C.btC)
t(C.aIN,C.aIM)
t(C.aAG,C.aIN)
t(C.btK,C.aJp)
t(C.bh8,C.btK)
t(C.btu,C.aIO)
t(C.aAH,C.btu)
t(C.btI,C.aJm)
t(C.bh5,C.btI)
t(C.btm,C.aIk)
t(C.bfO,C.btm)
t(C.btt,C.aIJ)
t(C.bgd,C.btt)
t(C.btH,C.aJl)
t(C.bh4,C.btH)
w(C.aJj,B.c7)
w(C.btG,C.mh)
w(C.aIl,B.c7)
w(C.aIm,C.mh)
w(C.aIr,B.c7)
w(C.btp,C.mh)
w(C.aK7,B.eL)
w(C.aJh,B.c7)
w(C.aJq,B.c7)
w(C.aJw,B.c7)
w(C.aIp,B.c7)
w(C.bto,C.mh)
w(C.aJe,B.c7)
w(C.btF,C.mh)
w(C.aJt,B.c7)
w(C.btN,C.mh)
w(C.aJc,B.c7)
w(C.btD,C.mh)
w(C.aJd,B.c7)
w(C.btE,C.mh)
w(C.aID,B.c7)
w(C.aIh,B.c7)
w(C.aIL,B.c7)
w(C.av_,B.c7)
w(C.av0,C.mh)
w(C.aGO,B.c7)
v(C.btr,B.eo)
w(C.aIA,B.c7)
w(C.aJx,B.c7)
w(C.aJ1,B.c7)
w(C.btw,C.mh)
w(C.aJ2,B.c7)
w(C.btx,C.mh)
w(C.aIn,B.c7)
w(C.btn,C.mh)
w(C.aIG,B.c7)
w(C.bts,C.mh)
w(C.aJa,B.c7)
w(C.btC,C.mh)
w(C.aJE,B.c7)
w(C.btO,C.mh)
w(C.aIM,B.c7)
w(C.aIN,C.mh)
w(C.aIO,B.c7)
w(C.btu,C.mh)
w(C.aJm,B.c7)
w(C.btI,C.mh)
w(C.aJp,B.c7)
w(C.btK,C.mh)
w(C.aIk,B.c7)
w(C.btm,C.mh)
w(C.aIJ,B.c7)
w(C.btt,C.mh)
w(C.aJl,B.c7)
w(C.btH,C.mh)})()
B.kg(b.typeUniverse,JSON.parse('{"TG":{"af":[],"r":[]},"bgz":{"ag":["TG"]},"U6":{"af":[],"r":[]},"aBx":{"ag":["U6"]},"bdB":{"aA":[]},"Sy":{"af":[],"r":[]},"azZ":{"ag":["Sy"]},"SD":{"af":[],"r":[]},"aA1":{"ag":["SD"]},"b7N":{"aA":[]},"acH":{"at":[],"r":[]},"abB":{"at":[],"r":[]},"aEs":{"af":[],"r":[]},"LN":{"af":[],"r":[]},"aAi":{"ag":["LN"]},"bnu":{"at":[],"r":[]},"Or":{"at":[],"r":[]},"bos":{"aA":[]},"bnY":{"at":[],"r":[]},"b6u":{"aA":[]},"aEt":{"ag":["aEs"]},"bn8":{"aA":[]},"bmB":{"aA":[]},"b79":{"aA":[]},"bmD":{"aA":[]},"bqv":{"aA":[]},"U5":{"af":[],"r":[]},"bdy":{"aA":[]},"aBw":{"ag":["U5"]},"bdz":{"aA":[]},"Uk":{"af":[],"r":[]},"Uw":{"af":[],"r":[]},"bh9":{"ag":["Uk"]},"bon":{"aA":[]},"aBK":{"ag":["Uw"]},"U3":{"af":[],"r":[]},"Ur":{"af":[],"r":[]},"SB":{"af":[],"r":[]},"aBp":{"ag":["U3"]},"bhS":{"aA":[]},"bhe":{"ag":["Ur"]},"bpd":{"aA":[]},"aA0":{"ag":["SB"]},"b7u":{"aA":[]},"TY":{"af":[],"r":[]},"U2":{"af":[],"r":[]},"bgO":{"ag":["TY"]},"bet":{"aA":[]},"aBo":{"ag":["U2"]},"bhT":{"aA":[]},"U0":{"af":[],"r":[]},"SZ":{"af":[],"r":[]},"Te":{"af":[],"r":[]},"aBm":{"ag":["U0"]},"bf9":{"aA":[]},"bg3":{"ag":["SZ"]},"aAu":{"ag":["Te"]},"baw":{"aA":[]},"St":{"af":[],"r":[]},"Ts":{"af":[],"r":[]},"SC":{"af":[],"r":[]},"bfK":{"ag":["St"]},"b6z":{"aA":[]},"bgf":{"ag":["Ts"]},"bbZ":{"aA":[]},"bfX":{"ag":["SC"]},"agm":{"aA":[]},"agk":{"af":[],"r":[]},"agl":{"ag":["agk"]},"Tf":{"af":[],"r":[]},"auH":{"af":[],"r":[]},"aAv":{"ag":["Tf"],"eo":[]},"b5I":{"ag":["auH"]},"b5H":{"aA":[]},"SX":{"af":[],"r":[]},"bg1":{"ag":["SX"]},"brw":{"aA":[]},"acq":{"aA":[]},"Ux":{"af":[],"r":[]},"aBL":{"ag":["Ux"]},"bqX":{"aA":[]},"TL":{"af":[],"r":[]},"TN":{"af":[],"r":[]},"bgB":{"ag":["TL"]},"bdE":{"aA":[]},"aB8":{"ag":["TN"]},"bdT":{"aA":[]},"a6i":{"at":[],"r":[]},"UC":{"af":[],"r":[]},"Tm":{"af":[],"r":[]},"Sz":{"af":[],"r":[]},"Td":{"af":[],"r":[]},"TZ":{"af":[],"r":[]},"Ua":{"af":[],"r":[]},"Uv":{"af":[],"r":[]},"TX":{"af":[],"r":[]},"aBX":{"ag":["UC"]},"brI":{"aA":[]},"bga":{"ag":["Tm"]},"bmC":{"aA":[]},"bfP":{"ag":["Sz"]},"bg4":{"ag":["Td"]},"bi5":{"aA":[]},"aBi":{"ag":["TZ"]},"aBB":{"ag":["Ua"]},"bhi":{"ag":["Uv"]},"bgM":{"ag":["TX"]},"b9S":{"at":[],"r":[]},"b3x":{"at":[],"r":[]},"dw":{"at":[],"r":[]},"eH":{"at":[],"r":[]},"at7":{"at":[],"r":[]},"fd":{"at":[],"r":[]},"E6":{"at":[],"r":[]},"Tt":{"af":[],"r":[]},"aAG":{"ag":["Tt"]},"bc5":{"aA":[]},"Uy":{"af":[],"r":[]},"bhl":{"ag":["Uy"]},"Uj":{"af":[],"r":[]},"Tu":{"af":[],"r":[]},"Ub":{"af":[],"r":[]},"bh8":{"ag":["Uj"]},"bol":{"aA":[]},"aAH":{"ag":["Tu"]},"b7l":{"aA":[]},"bh5":{"ag":["Ub"]},"bnU":{"aA":[]},"Sx":{"af":[],"r":[]},"Tq":{"af":[],"r":[]},"U7":{"af":[],"r":[]},"bfO":{"ag":["Sx"]},"b6K":{"aA":[]},"bgd":{"ag":["Tq"]},"bbW":{"aA":[]},"bh4":{"ag":["U7"]},"bnb":{"aA":[]}}'))
B.Oz(b.typeUniverse,JSON.parse('{"mh":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.az
return{x:w("mo<w?>"),e8:w("d0"),G:w("w"),l:w("br<n,n>"),J:w("br<n,P>"),I:w("br<n,I>"),U:w("fa<n>"),Z:w("a0"),Q:w("O<d6>"),R:w("O<agc>"),gh:w("O<aOY>"),h:w("O<a1c>"),V:w("O<ab>"),O:w("O<w>"),ey:w("O<Q>"),dh:w("O<R6>"),aJ:w("O<aw<aB>>"),w:w("O<a0>"),B:w("O<ak<w>>"),C:w("O<ak<R6>>"),gO:w("O<ak<ak<P>>>"),bj:w("O<ak<n>>"),b:w("O<ak<P>>"),fA:w("O<ak<I?>>"),D:w("O<a1<n,aB>>"),g:w("O<u>"),bz:w("O<rU>"),ds:w("O<aqf>"),v:w("O<hA>"),E:w("O<+(u,P)>"),ev:w("O<+(u,I)>"),L:w("O<+(n,n)>"),fT:w("O<+(P,r)>"),F:w("O<+(I,n)>"),u:w("O<+(I,I)>"),c:w("O<+(n,n,a0)>"),e:w("O<+(n,P,P,I)>"),o:w("O<+(n,I,n,I)>"),d:w("O<+(n,n,P,P,a1<n,P>)>"),_:w("O<uh>"),q:w("O<cL>"),fQ:w("O<a8c>"),s:w("O<n>"),cF:w("O<ar>"),X:w("O<vz>"),dO:w("O<a8X>"),p:w("O<r>"),bL:w("O<a9g>"),fH:w("O<l5>"),aq:w("O<b6n>"),a_:w("O<a9u>"),cS:w("O<a9B>"),cB:w("O<n0>"),ba:w("O<a9L>"),d9:w("O<O1>"),bi:w("O<aa3>"),eW:w("O<Bm>"),fY:w("O<Xp>"),aX:w("O<Ez>"),ea:w("O<aaS>"),gB:w("O<abm>"),ed:w("O<Oi>"),g4:w("O<bi4>"),aS:w("O<YW>"),ac:w("O<abF>"),cd:w("O<Bw>"),fr:w("O<acx>"),e4:w("O<ZD>"),r:w("O<acC>"),au:w("O<aFi>"),f7:w("O<S>"),n:w("O<P>"),t:w("O<I>"),dS:w("O<aA?>"),fs:w("O<rU?>"),d4:w("O<n?>"),bN:w("O<I?>"),gJ:w("co<agl>"),A:w("co<ag<af>>"),bF:w("ak<w>"),gl:w("ak<Q>"),ew:w("ak<aB>"),j:w("ak<@>"),bW:w("ak<I>"),a:w("a1<n,@>"),f:w("a1<@,@>"),bd:w("J<e4,n>"),dv:w("J<n,n>"),fR:w("J<+(P,r),r>"),m:w("iE"),gA:w("yl"),gD:w("wK"),P:w("cp"),K:w("aB"),W:w("rU"),dV:w("e4"),g7:w("B4"),N:w("n"),bO:w("ar"),k:w("kM"),Y:w("bl<P>"),cL:w("a8Y"),gj:w("cw<n>"),aC:w("cw<I?>"),dg:w("e3<qg>"),e3:w("b6N"),a2:w("Bi"),f3:w("qg"),es:w("ED"),gV:w("mG"),y:w("S"),i:w("P"),z:w("@"),S:w("I"),M:w("ak<@>?"),fF:w("a1<@,@>?"),cK:w("aB?"),az:w("q5?"),T:w("n?"),cD:w("P?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aP9=new B.d6(0,0.85)
D.fal=new B.x("Tap once to start the chain",null,E.Rv,null,null,null,null,null,null,null,null,null)
D.aOJ=new B.bI(D.aP9,null,null,D.fal,null)
D.aP0=new B.d6(0,0.1)
D.aQ3=new C.aP7(0,0,0)
D.IA=new C.aP7(0,0.5,0)
D.aQB=new B.ay(A.bg,1,A.r,-1)
D.aS1=new B.aW(0,1/0,0,290)
D.aS8=new B.aW(16,1/0,16,1/0)
D.aTj=new B.o(A.bl,null,null,null,null,null,A.a6)
D.aTI=new B.o(A.aK,null,null,null,null,null,A.a6)
D.eEn=new B.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcz=new B.x("\u26a1",null,D.eEn,null,null,null,null,null,null,null,null,null)
D.aXz=new B.cy(A.A,null,null,D.fcz,null)
D.aKZ=new B.F(!0,A.c1,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3b=new B.x("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aKZ,null,A.L,null,null,null,null,null,null,null)
D.dQb=new B.C(A.nu,D.f3b,null)
D.aXI=new B.cy(A.A,null,null,D.dQb,null)
D.f6G=new B.x("Press Drop! and watch them fall from 20 metres.",null,A.kl,null,A.L,null,null,null,null,null,null,null)
D.dQf=new B.C(A.nu,D.f6G,null)
D.aXZ=new B.cy(A.A,null,null,D.dQf,null)
D.eOO=new B.F(!0,A.j3,null,null,null,null,18,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb5=new B.x("Draw anywhere",null,D.eOO,null,null,null,null,null,null,null,null,null)
D.aY2=new B.cy(A.A,null,null,D.fb5,null)
D.eV5=new B.x("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aKZ,null,A.L,null,null,null,null,null,null,null)
D.dQT=new B.C(A.E7,D.eV5,null)
D.aYk=new B.cy(A.A,null,null,D.dQT,null)
D.a8u=new B.w(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.b_1=new B.w(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b_n=new B.w(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.t)
D.b_F=new B.w(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.D_=new B.w(1,0.12156862745098039,0.07058823529411765,0.03529411764705882,A.t)
D.b0o=new B.w(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.TH=new B.w(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b0t=new B.w(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.b0x=new B.w(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.a8T=new B.w(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.t)
D.b0B=new B.w(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.TI=new B.w(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.b1x=new B.w(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.b1C=new B.w(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.b1R=new B.w(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.b2q=new B.w(1,0.8784313725490196,0.6745098039215687,0.4117647058823529,A.t)
D.b2P=new B.w(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.a9y=new B.w(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.Jc=new B.w(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.t)
D.b3d=new B.w(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.b3i=new B.w(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.t)
D.zp=new B.w(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.b3T=new B.w(1,1,0.9686274509803922,0.8,A.t)
D.a9T=new B.w(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.b4u=new B.w(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.b4B=new B.w(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.aa3=new B.w(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.U9=new B.w(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.b54=new B.w(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.aa9=new B.w(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.b5r=new B.w(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,A.t)
D.Dj=new B.w(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.aah=new B.w(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.aal=new B.w(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.t)
D.Ui=new B.w(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.b6C=new B.w(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.b6E=new B.w(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.b6I=new B.w(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.b6P=new B.w(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.aaH=new B.w(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.b78=new B.w(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.Dr=new B.w(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.Jr=new B.w(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.t)
D.b84=new B.w(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.b8c=new B.w(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.b8f=new B.w(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.b8o=new B.w(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.b8r=new B.w(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.b8y=new B.w(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.uh=new B.w(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.b9_=new B.w(1,0.24705882352941178,0.3843137254901961,0.07058823529411765,A.t)
D.abq=new B.w(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.b9s=new B.w(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.b9W=new B.w(1,1,0.41568627450980394,0,A.t)
D.ba4=new B.w(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.rG=new B.w(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,A.t)
D.bat=new B.w(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.qi=new B.w(1,0.5529411764705883,0.3333333333333333,0.1411764705882353,A.t)
D.baK=new B.w(1,1,0.9529411764705882,0.6274509803921569,A.t)
D.baO=new B.w(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.abL=new B.w(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.beL=new B.b8(11e6)
D.Vo=new B.N(0,0,7,0)
D.bfN=new B.N(0,0,8,6)
D.acG=new B.N(0,0,9,0)
D.bgj=new B.N(10,0,10,4)
D.bgm=new B.N(10,10,10,0)
D.bgo=new B.N(10,10,10,6)
D.bgv=new B.N(10,34,10,26)
D.bgE=new B.N(10,6,10,2)
D.Vx=new B.N(10,6,10,4)
D.bgF=new B.N(10,6,10,8)
D.bgH=new B.N(10,8,0,10)
D.bhj=new B.N(12,8,8,8)
D.bho=new B.N(14,0,14,22)
D.bhq=new B.N(14,0,14,30)
D.ad4=new B.N(14,0,14,6)
D.bhr=new B.N(14,10,10,10)
D.ada=new B.N(14,10,8,12)
D.bhY=new B.N(14,8,14,6)
D.biq=new B.N(16,4,16,28)
D.biA=new B.N(16,8,16,12)
D.bkE=new B.N(26,12,26,58)
D.blr=new B.N(4,4,6,2)
D.blt=new B.N(4,4,8,2)
D.bm1=new B.N(8,14,8,12)
D.bm8=new B.N(8,40,8,30)
D.bmd=new B.N(8,6,16,0)
D.bme=new B.N(8,6,8,8)
D.bmx=new B.N(0,0,1.5,0)
D.aPQ=new B.FJ(26,"saturation")
D.bmP=new B.y4(A.cU,D.aPQ,null,A.a8s)
D.eUh=new B.x("REACTION LAB",null,T.aLx,null,null,null,null,A.a2,null,1,null,null)
D.bmT=new B.bG(1,A.bp,D.eUh,null)
D.eLJ=new B.F(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXc=new B.x("CORE PROTOCOL",null,D.eLJ,null,null,null,null,null,null,null,null,null)
D.bn4=new B.bG(1,A.bp,D.eXc,null)
D.eXT=new B.x("\ud83d\udce2 NGMY Ads",null,A.r5,null,null,null,null,A.ey,null,1,null,null)
D.bnI=new B.bG(1,A.bp,D.eXT,null)
D.eT2=new B.x("Wire selected",null,A.hh,null,null,null,null,null,null,null,null,null)
D.bnV=new B.bG(1,A.bp,D.eT2,null)
D.agc=new B.a0(62712,"MaterialIcons",!1)
D.br6=new B.a0(62878,"MaterialIcons",!1)
D.XH=new B.a0(62908,"MaterialIcons",!1)
D.br9=new B.a0(62918,"MaterialIcons",!1)
D.bra=new B.a0(62931,"MaterialIcons",!1)
D.brc=new B.a0(62951,"MaterialIcons",!1)
D.bre=new B.a0(62970,"MaterialIcons",!1)
D.brt=new B.a0(63064,"MaterialIcons",!1)
D.brv=new B.a0(63070,"MaterialIcons",!1)
D.x4=new B.a0(63128,"MaterialIcons",!1)
D.ER=new B.a0(63726,"MaterialIcons",!1)
D.bsN=new B.a0(983122,"MaterialIcons",!1)
D.bt1=new B.a0(983247,"MaterialIcons",!1)
D.bt8=new B.a0(983316,"MaterialIcons",!1)
D.bte=new B.a0(983415,"MaterialIcons",!1)
D.btf=new B.a0(983417,"MaterialIcons",!1)
D.btg=new B.a0(983442,"MaterialIcons",!1)
D.bth=new B.a0(983443,"MaterialIcons",!1)
D.ahr=new B.a0(983467,"MaterialIcons",!1)
D.btn=new B.a0(983501,"MaterialIcons",!1)
D.bty=new B.a0(983616,"MaterialIcons",!1)
D.ahA=new B.a0(983617,"MaterialIcons",!1)
D.btz=new B.a0(983624,"MaterialIcons",!1)
D.btL=new B.a0(983776,"MaterialIcons",!1)
D.bu2=new B.a0(984561,"MaterialIcons",!1)
D.buB=new B.ad(A.Ay,24,A.aK,null,null,null)
D.bvl=new B.ad(A.LO,null,A.af,null,null,null)
D.bvT=new B.ad(A.m6,21,A.af,null,null,null)
D.bsM=new B.a0(983117,"MaterialIcons",!1)
D.bxd=new B.ad(D.bsM,28,A.c,null,null,null)
D.bxt=new B.ad(A.j5,18,null,null,null,null)
D.bzb=new B.ad(A.e8,21,A.cG,null,null,null)
D.bzq=new B.ad(A.m7,null,A.af,null,null,null)
D.bzA=new B.ad(A.Yz,21,A.af,null,null,null)
D.bAp=new B.ad(A.ew,17,A.af,null,null,null)
D.aiN=new B.ad(A.ew,19,null,null,null,null)
D.ma=new B.ad(A.uJ,21,A.af,null,null,null)
D.bBQ=new B.ad(A.Lh,null,A.af,null,null,null)
D.bCY=new B.ad(A.j5,21,A.af,null,null,null)
D.bDN=new B.ad(A.fF,20,A.az,null,null,null)
D.bEp=new B.ad(A.dR,null,A.aK,null,null,null)
D.bEJ=new B.ad(A.jL,null,A.az,null,null,null)
D.cXs=w([A.dm,A.d3,A.dm],x.O)
D.bGM=new B.a5(A.a3,A.a7,A.x,D.cXs,null,null)
D.cD7=w([A.bY,A.br],x.O)
D.bGU=new B.a5(A.b0,A.b3,A.x,D.cD7,null,null)
D.cne=w([A.aY,A.k2,A.qe],x.O)
D.bH_=new B.a5(A.b0,A.b3,A.x,D.cne,null,null)
D.bH4=new B.a5(A.b0,A.b3,A.x,A.asI,null,null)
D.bH5=new B.a5(A.b0,A.b3,A.x,Ae.NV,null,null)
D.cDt=w([A.fY,A.fj],x.O)
D.bHd=new B.a5(A.b0,A.b3,A.x,D.cDt,null,null)
D.ajO=new B.a5(A.b0,A.b3,A.x,K.a_e,null,null)
D.cH3=w([A.f3,A.dK,A.cM],x.O)
D.bHi=new B.a5(A.b0,A.b3,A.x,D.cH3,null,null)
D.cB0=w([A.nW,A.i2],x.O)
D.bHR=new B.a5(A.b0,A.b3,A.x,D.cB0,null,null)
D.cFt=w([A.dJ,A.aD],x.O)
D.bHY=new B.a5(A.b0,A.b3,A.x,D.cFt,null,null)
D.cCR=w([A.eo,A.aE],x.O)
D.ajV=new B.a5(A.b0,A.b3,A.x,D.cCR,null,null)
D.cSq=w([A.e0,A.il,A.br],x.O)
D.bI6=new B.a5(A.a3,A.a7,A.x,D.cSq,null,null)
D.d_I=w([A.bY,A.c,A.bH],x.O)
D.bIa=new B.a5(A.a3,A.a7,A.x,D.d_I,null,null)
D.cSw=w([A.kZ,A.cz],x.O)
D.bIp=new B.a5(A.b0,A.b3,A.x,D.cSw,null,null)
D.cai=w([A.bY,A.e0],x.O)
D.bIy=new B.a5(A.a3,A.a7,A.x,D.cai,null,null)
D.atj=w([A.eo,I.o4],x.O)
D.bIF=new B.a5(A.b0,A.b3,A.x,D.atj,null,null)
D.bIV=new B.a5(A.b0,A.b3,A.x,F.akg,null,null)
D.d0c=w([A.fY,A.fV],x.O)
D.ak0=new B.a5(A.b0,A.b3,A.x,D.d0c,null,null)
D.cTF=w([A.dy,A.o6],x.O)
D.bJ4=new B.a5(A.b0,A.b3,A.x,D.cTF,null,null)
D.b58=new B.w(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.b_7=new B.w(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cyD=w([D.b58,D.b_7],x.O)
D.bJ7=new B.a5(A.b0,A.b3,A.x,D.cyD,null,null)
D.bJI=new B.a5(A.ax,A.aC,A.x,A.a_b,null,null)
D.b90=new B.w(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.d1l=w([D.b90,A.J3],x.O)
D.bJO=new B.a5(A.b0,A.b3,A.x,D.d1l,null,null)
D.cLh=w([A.aE,A.w],x.O)
D.bJT=new B.a5(A.b0,A.b3,A.x,D.cLh,null,null)
D.bJW=new B.a5(A.b0,A.b3,A.x,I.asM,null,null)
D.bK3=new B.a5(A.b0,A.b3,A.x,K.aq3,null,null)
D.b8v=new B.w(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.b97=new B.w(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cmO=w([A.JE,D.b8v,D.b97],x.O)
D.bK4=new B.a5(A.b0,A.b3,A.x,D.cmO,null,null)
D.caD=w([A.dn,A.fh],x.O)
D.bKj=new B.a5(A.b0,A.b3,A.x,D.caD,null,null)
D.bKp=new B.a5(A.ax,A.aC,A.x,A.a_X,null,null)
D.cPw=w([A.aJ,A.aj],x.O)
D.bKr=new B.a5(A.b0,A.b3,A.x,D.cPw,null,null)
D.aki=w([0,2,4,6,7,9,11],x.t)
D.bKZ=w([0,4,7],x.t)
D.akm=w([0,4,7,12],x.t)
D.bL_=w([0,4,7,4],x.t)
D.ast=w([A.fU,A.p_],x.O)
D.as3=w([A.hn,A.cY],x.O)
D.aqz=w([A.bA,A.dK],x.O)
D.cve=w([A.aK,A.dn],x.O)
D.cBm=w([A.cG,A.f_],x.O)
D.cTw=w([A.bX,A.lm],x.O)
D.aq4=w([A.cM,A.k3],x.O)
D.cA4=w([A.bH,A.aI],x.O)
D.bLj=w([D.ast,D.as3,A.a_i,D.aqz,D.cve,D.cBm,A.arE,D.cTw,D.aq4,D.cA4],x.B)
D.akp=w([1],x.n)
D.bPY=w([120,220,380],x.t)
D.bTI=w([12,16,19,24],x.t)
D.bTR=w([1400,800,450,2400],x.t)
D.bXR=w([1,2,3],x.n)
D.bY1=w([1,-1],x.n)
D.bY2=w([0,0.6,1],x.n)
D.c1a=w([250,450,900,1500],x.t)
D.c42=w([-0.05,0.05],x.n)
D.dMW=new B.u(26,-8)
D.dNo=new B.u(52,0)
D.dMV=new B.u(26,8)
D.c4p=w([A.J,D.dMW,D.dNo,D.dMV],x.g)
D.b_Q=new B.w(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.b8O=new B.w(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.b7a=new B.w(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bbp=new B.w(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.b6u=new B.w(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.apk=w([D.b_Q,D.b8O,D.b7a,D.bbp,D.b6u],x.O)
D.ei2=new B.z("Jambo!","Hello!")
D.edd=new B.z("Asante","Thank you")
D.e4Z=new B.z("Karibu","Welcome")
D.e6W=new B.z("Rafiki","Friend")
D.apM=w([D.ei2,D.edd,D.e4Z,D.e6W],x.L)
D.egy=new B.z("type","Typewriter")
D.ea9=new B.z("bounce","Bounce")
D.ehh=new B.z("wave","Wave")
D.eii=new B.z("zoom","Zoom")
D.chI=w([D.egy,D.ea9,D.ehh,A.a2Y,F.aH1,D.eii,F.aH3],x.L)
D.chU=w([50,25,75],x.t)
D.apR=w([A.bX,A.aY,A.dJ,A.bg,A.cM],x.O)
D.cm8=w([1,2,3,4,5,6,7],x.n)
D.cnj=w([0,5,10,15,18,20,25],x.t)
D.ebJ=new B.z("fish","Fish")
D.ebL=new B.z("fly","Fireflies")
D.ea7=new B.z("bird","Birds")
D.crq=w([D.ebJ,D.ebL,D.ea7],x.L)
D.cvu=w([900,500,250,1600],x.t)
D.cyY=w([A.fi,A.bJ,A.Jz,A.eE],x.O)
D.cyZ=w([0.78,1],x.n)
D.aqA=w([0,2,4,7,9,12,14,16],x.t)
D.czv=w([A.bA,A.bx,A.b6,A.bA],x.O)
D.aqF=w(["A","T","C","G"],x.s)
D.czw=w(["A","U","C","G"],x.s)
D.a_8=w([A.aD,A.cu,A.bl,A.aY,A.nk],x.O)
D.cA3=w([1,2.76,5.4,8.93,13.3],x.n)
D.aqM=w([A.cM,A.cu,A.bX,A.bg],x.O)
D.cAJ=w([A.aE,A.aD,A.cM,A.cu,A.bl,A.cs,A.c7,A.bx,A.J3],x.O)
D.a_c=w([0.04,0.17,0.3],x.n)
D.cB4=w([1,0.6,0.38,0.22,0.12],x.n)
D.cBi=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.FF=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.epx=new C.uh("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.epD=new C.uh("Medium engine","A good all-rounder.",0.3,0.9)
D.epC=new C.uh("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.FG=w([D.epx,D.epD,D.epC],x._)
D.e0D=new B.z(6,"Easy")
D.e1a=new B.z(8,"Medium")
D.dYf=new B.z(10,"Hard")
D.cC5=w([D.e0D,D.e1a,D.dYf],x.F)
D.aqY=w([0.55,0.78,1],x.n)
D.cDy=w([0.93,0.975,1],x.n)
D.cDR=w(["Mama","Baba","Bibi","Babu","Dada","Kaka"],x.s)
D.e2s=new B.z("Chairs",120)
D.e2v=new B.z("Cloth",80)
D.e2M=new B.z("Delivery",25)
D.ar6=w([D.e2s,D.e2v,D.e2M],B.az("O<+(n,I)>"))
D.ar8=w([A.c,A.fV,A.oP,A.aE],x.O)
D.cF2=w([1,0.7,0.45,0.28,0.16,0.1,0.06],x.n)
D.cF3=w([1,0.55,0.32,0.2,0.12,0.07],x.n)
D.ffv=new C.xk("Moon",1737,4291941851)
D.ffs=new C.xk("Earth",6371,4281908728)
D.ffw=new C.xk("Neptune",24622,4284524026)
D.ffx=new C.xk("Saturn",58232,4294829706)
D.fft=new C.xk("Jupiter",69911,4294677052)
D.ffy=new C.xk("Sun",696340,4294688548)
D.ffz=new C.xk("Sirius A",119e4,4290763774)
D.ffq=new C.xk("Arcturus",179e5,4294818420)
D.ffr=new C.xk("Betelgeuse",531e6,4294472049)
D.ffu=new C.xk("UY Scuti",667e6,4293870660)
D.NX=w([D.ffv,D.ffs,D.ffw,D.ffx,D.fft,D.ffy,D.ffz,D.ffq,D.ffr,D.ffu],B.az("O<xk>"))
D.elp=new B.bB("glow","Glow",A.XJ)
D.ejg=new B.bB("rainbow","Rainbow",A.nz)
D.ejB=new B.bB("stars","Stars",A.hX)
D.ej0=new B.bB("sparks","Sparks",A.dR)
D.ekL=new B.bB("fire","Fire",A.uK)
D.cFf=w([D.elp,D.ejg,D.ejB,D.ej0,D.ekL],x.c)
D.arc=w([A.bl,A.aD,A.cu,A.d3],x.O)
D.cG9=w([0.2,1],x.n)
D.epu=new C.uh("Radar","Shows your height above the ground.",0.1,0)
D.epv=new C.uh("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eps=new C.uh("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.ark=w([D.epu,D.epv,D.eps],x._)
D.ek6=new B.bB("attract","Attract",A.xm)
D.ejV=new B.bB("scare","Scare",A.t7)
D.ej9=new B.bB("food","Food",A.te)
D.bsS=new B.a0(983158,"MaterialIcons",!1)
D.ekp=new B.bB("hunt","Hunt",D.bsS)
D.cGK=w([D.ek6,D.ejV,D.ej9,D.ekp],x.c)
D.cH7=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cHm=w([47,100,220,470,1000],x.n)
D.arB=w([0,2,4,7,9],x.t)
D.GG={volts:0}
D.a0L=new B.br(D.GG,[3],x.J)
D.H1=new B.eR(["b","battery",0.2,0.3,D.a0L])
D.dLH={on:0}
D.d5X=new B.br(D.dLH,[1],x.J)
D.BW=new B.eR(["s","switch",0.5,0.3,D.d5X])
D.enM=new B.eR(["l","bulb",0.8,0.3,A.iR])
D.cDe=w([D.H1,D.BW,D.enM],x.d)
D.BV=new B.cI(["b",0,"s",0])
D.emS=new B.cI(["s",1,"l",0])
D.aH7=new B.cI(["l",1,"b",1])
D.cSB=w([D.BV,D.emS,D.aH7],x.o)
D.cCJ=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.dXC=new C.me("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cDe,D.cSB,D.cCJ)
D.aBp={ohms:0}
D.az3=new B.br(D.aBp,[220],x.J)
D.enh=new B.eR(["r","resistor",0.5,0.3,D.az3])
D.enZ=new B.eR(["d","led",0.8,0.3,A.iR])
D.cVi=w([D.H1,D.enh,D.enZ],x.d)
D.emf=new B.cI(["b",0,"r",0])
D.emM=new B.cI(["r",1,"d",0])
D.eml=new B.cI(["d",1,"b",1])
D.d1P=w([D.emf,D.emM,D.eml],x.o)
D.cVI=w(["led","diode","indicator"],x.s)
D.dXJ=new C.me("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.cVi,D.d1P,D.cVI)
D.a21={level:0}
D.d5l=new B.br(D.a21,[0.2],x.J)
D.enn=new B.eR(["p","pot",0.5,0.3,D.d5l])
D.enp=new B.eR(["m","motor",0.8,0.3,A.iR])
D.cDw=w([D.H1,D.enn,D.enp],x.d)
D.eme=new B.cI(["b",0,"p",0])
D.emI=new B.cI(["p",1,"m",0])
D.emF=new B.cI(["m",1,"b",1])
D.cZh=w([D.eme,D.emI,D.emF],x.o)
D.cSl=w(["fan","motor","spin","dimmer"],x.s)
D.dXA=new C.me("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cDw,D.cZh,D.cSl)
D.a0I=new B.br(D.a21,[0.9],x.J)
D.aHe=new B.eR(["s","solar",0.25,0.3,D.a0I])
D.aHd=new B.eR(["l","bulb",0.75,0.3,A.iR])
D.cFS=w([D.aHe,D.aHd],x.d)
D.emP=new B.cI(["s",0,"l",0])
D.emE=new B.cI(["l",1,"s",1])
D.cEc=w([D.emP,D.emE],x.o)
D.cZN=w(["solar","sun","without battery","no battery","free"],x.s)
D.dXD=new C.me("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cFS,D.cEc,D.cZN)
D.eo1=new B.eR(["c","crank",0.25,0.3,D.a0I])
D.cQQ=w([D.eo1,D.aHd],x.d)
D.emi=new B.cI(["c",0,"l",0])
D.emD=new B.cI(["l",1,"c",1])
D.cRl=w([D.emi,D.emD],x.o)
D.cQZ=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.dXz=new C.me("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.cQQ,D.cRl,D.cQZ)
D.d5k=new B.br(D.a21,[0.7],x.J)
D.ens=new B.eR(["t","turbine",0.25,0.3,D.d5k])
D.eng=new B.eR(["m","motor",0.75,0.3,A.iR])
D.cLU=w([D.ens,D.eng],x.d)
D.en_=new B.cI(["t",0,"m",0])
D.emG=new B.cI(["m",1,"t",1])
D.cKY=w([D.en_,D.emG],x.o)
D.cPP=w(["wind","turbine","windmill","water","hydro"],x.s)
D.dXw=new C.me("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.cLU,D.cKY,D.cPP)
D.az_=new B.br(D.GG,[9],x.J)
D.a30=new B.eR(["b","battery",0.2,0.3,D.az_])
D.aHc=new B.eR(["r","radio",0.8,0.3,A.iR])
D.d_g=w([D.a30,D.BW,D.aHc],x.d)
D.emU=new B.cI(["s",1,"r",0])
D.aH8=new B.cI(["r",1,"b",1])
D.bKJ=w([D.BV,D.emU,D.aH8],x.o)
D.cZ4=w(["radio","music","listen"],x.s)
D.dXI=new C.me("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.d_g,D.bKJ,D.cZ4)
D.d6n=new B.br(D.GG,[12],x.J)
D.aHb=new B.eR(["b","battery",0.2,0.3,D.d6n])
D.enN=new B.eR(["t","tv",0.8,0.3,A.iR])
D.cDf=w([D.aHb,D.BW,D.enN],x.d)
D.emV=new B.cI(["s",1,"t",0])
D.aH9=new B.cI(["t",1,"b",1])
D.cTz=w([D.BV,D.emV,D.aH9],x.o)
D.d_f=w(["tv","television","screen","watch"],x.s)
D.dXt=new C.me("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cDf,D.cTz,D.d_f)
D.enD=new B.eR(["z","buzzer",0.8,0.3,A.iR])
D.ckb=w([D.H1,D.BW,D.enD],x.d)
D.emW=new B.cI(["s",1,"z",0])
D.enb=new B.cI(["z",1,"b",1])
D.cyO=w([D.BV,D.emW,D.enb],x.o)
D.cXw=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.dXF=new C.me("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.ckb,D.cyO,D.cXw)
D.eno=new B.eR(["h","heater",0.8,0.3,A.iR])
D.cOA=w([D.a30,D.BW,D.eno],x.d)
D.emR=new B.cI(["s",1,"h",0])
D.emt=new B.cI(["h",1,"b",1])
D.czr=w([D.BV,D.emR,D.emt],x.o)
D.c4o=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.dXu=new C.me("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.cOA,D.czr,D.c4o)
D.enP=new B.eR(["s","solar",0.2,0.25,D.a0I])
D.d6s=new B.br(D.aBp,[100],x.J)
D.enS=new B.eR(["r","resistor",0.55,0.25,D.d6s])
D.enY=new B.eR(["c","capacitor",0.85,0.25,A.iR])
D.enk=new B.eR(["q","resistor",0.55,0.6,D.az3])
D.enQ=new B.eR(["d","led",0.85,0.6,A.iR])
D.cTe=w([D.enP,D.enS,D.enY,D.enk,D.enQ],x.d)
D.emQ=new B.cI(["s",0,"r",0])
D.emL=new B.cI(["r",1,"c",0])
D.emk=new B.cI(["c",1,"s",1])
D.emj=new B.cI(["c",0,"q",0])
D.emK=new B.cI(["q",1,"d",0])
D.emm=new B.cI(["d",1,"c",1])
D.cJ5=w([D.emQ,D.emL,D.emk,D.emj,D.emK,D.emm],x.o)
D.cQh=w(["capacitor","store","charge","flash"],x.s)
D.dXH=new C.me("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.cTe,D.cJ5,D.cQh)
D.env=new B.eR(["b","battery",0.15,0.3,D.a0L])
D.eo2=new B.eR(["l1","bulb",0.5,0.3,A.iR])
D.enB=new B.eR(["l2","bulb",0.85,0.3,A.iR])
D.cBA=w([D.env,D.eo2,D.enB],x.d)
D.emd=new B.cI(["b",0,"l1",0])
D.emA=new B.cI(["l1",1,"l2",0])
D.emB=new B.cI(["l2",1,"b",1])
D.cMw=w([D.emd,D.emA,D.emB],x.o)
D.d_5=w(["series","two bulbs","dim"],x.s)
D.dXx=new C.me("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cBA,D.cMw,D.d_5)
D.dLT={volts:0,charge:1}
D.d6w=new B.br(D.dLT,[1.5,0],x.J)
D.enW=new B.eR(["b","battery",0.75,0.3,D.d6w])
D.cB1=w([D.aHe,D.enW],x.d)
D.emO=new B.cI(["s",0,"b",0])
D.emh=new B.cI(["b",1,"s",1])
D.cJl=w([D.emO,D.emh],x.o)
D.cQo=w(["charge","rechargeable","flat","recharge"],x.s)
D.dXv=new C.me("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cB1,D.cJl,D.cQo)
D.d6m=new B.br(D.GG,[4.5],x.J)
D.enq=new B.eR(["b","battery",0.2,0.3,D.d6m])
D.aHa=new B.eR(["p","phone",0.8,0.3,A.iR])
D.cLK=w([D.enq,D.BW,D.aHa],x.d)
D.emT=new B.cI(["s",1,"p",0])
D.a3_=new B.cI(["p",1,"b",1])
D.cWz=w([D.BV,D.emT,D.a3_],x.o)
D.cXU=w(["phone","charger","usb","mobile"],x.s)
D.dXB=new C.me("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.cLK,D.cWz,D.cXU)
D.end=new B.eR(["f","fan",0.8,0.3,A.iR])
D.bXE=w([D.H1,D.end],x.d)
D.emc=new B.cI(["b",0,"f",0])
D.emr=new B.cI(["f",1,"b",1])
D.czT=w([D.emc,D.emr],x.o)
D.cSk=w(["fan","cool","air","wind"],x.s)
D.dXK=new C.me("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.bXE,D.czT,D.cSk)
D.enH=new B.eR(["b","battery",0.15,0.2,D.a0L])
D.ene=new B.eR(["a","ammeter",0.5,0.2,A.iR])
D.enc=new B.eR(["l","bulb",0.85,0.2,A.iR])
D.enJ=new B.eR(["v","voltmeter",0.5,0.6,A.iR])
D.cQF=w([D.enH,D.ene,D.enc,D.enJ],x.d)
D.ema=new B.cI(["b",0,"a",0])
D.em9=new B.cI(["a",1,"l",0])
D.en1=new B.cI(["v",0,"l",0])
D.en2=new B.cI(["v",1,"l",1])
D.cJc=w([D.ema,D.em9,D.aH7,D.en1,D.en2],x.o)
D.d1O=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.dXG=new C.me("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.cQF,D.cJc,D.d1O)
D.eo5=new B.eR(["b","battery",0.15,0.2,D.az_])
D.enu=new B.eR(["t","tv",0.55,0.2,A.iR])
D.az0=new B.br(D.GG,[5],x.J)
D.eni=new B.eR(["c","buck",0.4,0.5,D.az0])
D.enw=new B.eR(["p","phone",0.8,0.5,A.iR])
D.cH9=w([D.eo5,D.enu,D.eni,D.enw],x.d)
D.emg=new B.cI(["b",0,"t",0])
D.aH5=new B.cI(["b",0,"c",0])
D.aH6=new B.cI(["c",1,"p",0])
D.cLH=w([D.emg,D.aH9,D.aH5,D.aH6,D.a3_],x.o)
D.cFu=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.dXy=new C.me("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cH9,D.cLH,D.cFu)
D.enj=new B.eR(["c","buck",0.5,0.3,D.az0])
D.czi=w([D.aHb,D.enj,D.aHa],x.d)
D.cDE=w([D.aH5,D.aH6,D.a3_],x.o)
D.c7M=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.dXs=new C.me("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.czi,D.cDE,D.c7M)
D.enz=new B.eR(["d","diode",0.5,0.3,A.iR])
D.cMJ=w([D.a30,D.enz,D.aHc],x.d)
D.emb=new B.cI(["b",0,"d",0])
D.emn=new B.cI(["d",1,"r",0])
D.cmE=w([D.emb,D.emn,D.aH8],x.o)
D.cFc=w(["diode","protect","backwards","one way"],x.s)
D.dXE=new C.me("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.cMJ,D.cmE,D.cFc)
D.O_=w([D.dXC,D.dXJ,D.dXA,D.dXD,D.dXz,D.dXw,D.dXI,D.dXt,D.dXF,D.dXu,D.dXH,D.dXx,D.dXv,D.dXB,D.dXK,D.dXG,D.dXy,D.dXs,D.dXE],B.az("O<me>"))
D.dIt=new C.wZ("NGMY Tree Story","A family grows, one branch at a time")
D.dIo=new C.wZ("Coin Hero","A little coin saves up and wins the day")
D.dIw=new C.wZ("Space Voyage","The NGMY rocket explores the stars")
D.dIn=new C.wZ("Ocean Friends","Fish, bubbles and a friendly whale")
D.dIp=new C.wZ("Rainy Village","Storm clouds, then a rainbow")
D.dIr=new C.wZ("Spark Adventure","Follow a spark round a circuit")
D.dIq=new C.wZ("Fireworks Night","Colour bursts over the city")
D.dIv=new C.wZ("Little Train","A train rolls past the hills")
D.dIs=new C.wZ("Robot Disco","A robot dances to the beat")
D.dIu=new C.wZ("Garden Time","Flowers grow and butterflies fly")
D.O0=w([D.dIt,D.dIo,D.dIw,D.dIn,D.dIp,D.dIr,D.dIq,D.dIv,D.dIs,D.dIu],B.az("O<wZ>"))
D.cIR=w([1,0.6,0.45,0.3,0.22,0.15],x.n)
D.fpy=new C.EQ("Moon",1.62,A.e0,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.fpw=new C.EQ("Mars",3.71,A.aD,"Mars has about 38 percent of Earth's gravity.")
D.fpz=new C.EQ("Mercury",3.7,A.jC,"Mercury is small, so its gravity is like Mars.")
D.fpt=new C.EQ("Venus",8.87,A.aK,"Venus is almost as heavy as Earth, with strong gravity.")
D.fpv=new C.EQ("Earth",9.81,A.aY,"On Earth gravity is strong, and the air also slows you down.")
D.fpx=new C.EQ("Neptune",11.15,A.d3,"Neptune pulls a little harder than Earth.")
D.fpu=new C.EQ("Jupiter",24.79,A.cM,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.qD=w([D.fpy,D.fpw,D.fpz,D.fpt,D.fpv,D.fpx,D.fpu],B.az("O<EQ>"))
D.arM=w([A.bX,A.cu,A.aD,A.bA,A.cM],x.O)
D.cJ4=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a_q=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cJH=w([0.2,0.5,0.8],x.n)
D.cJR=w([1,2,3,4,5,6],x.n)
D.bro=new B.a0(63040,"MaterialIcons",!1)
D.ejY=new B.bB("peg","Peg",D.bro)
D.ejd=new B.bB("bar","Bar",P.AE)
D.ejD=new B.bB("erase","Erase",A.Lk)
D.cJS=w([D.ejY,D.ejd,D.ejD],x.c)
D.esi=new B.cL(A.bh,A.J,4)
D.cK1=w([D.esi],x.q)
D.arP=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aOt=new C.IX(0,"accordion")
D.cAa=w([A.j7,A.AF,A.As],x.w)
D.cGC=w(["Mail","SMS","Ad"],x.s)
D.cAC=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.fnK=new C.zA(D.aOt,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.ast,D.cAa,D.cGC,D.cAC)
D.a6h=new C.IX(1,"flip")
D.cQb=w([A.qv,A2.F5,A.uQ],x.w)
D.cLq=w(["Unlock","Verify","Secure"],x.s)
D.czf=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.fnJ=new C.zA(D.a6h,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.as3,D.cQb,D.cLq,D.czf)
D.aOu=new C.IX(2,"towers")
D.cKj=w([A.xh,A.pm,A.hW],x.w)
D.cJY=w(["Save","Grow","Earn"],x.s)
D.cns=w(["","",""],x.s)
D.fnL=new C.zA(D.aOu,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a_i,D.cKj,D.cJY,D.cns)
D.a6i=new C.IX(3,"assemble")
D.cR1=w([A.mQ,A.hq,A.dR],x.w)
D.cG2=w(["Launch","Charge","Shine"],x.s)
D.cNP=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.fnN=new C.zA(D.a6i,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aqz,D.cR1,D.cG2,D.cNP)
D.aOv=new C.IX(4,"carousel")
D.cQR=w([A.b6,A.hR],x.O)
D.cGM=w([A.m6,A.agE,A.Yt],x.w)
D.cBW=w(["Explore","Discover","Learn"],x.s)
D.cLP=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.fnI=new C.zA(D.aOv,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.cQR,D.cGM,D.cBW,D.cLP)
D.aOw=new C.IX(5,"burst")
D.cJU=w([A.jh,A.rw],x.O)
D.cAx=w([A.l1,A.m4,A.hV],x.w)
D.cAQ=w(["Cheer","Win","Love"],x.s)
D.cCP=w(["Make some noise","First place","Share the joy"],x.s)
D.fnM=new C.zA(D.aOw,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cJU,D.cAx,D.cAQ,D.cCP)
D.arQ=w([D.fnK,D.fnJ,D.fnL,D.fnN,D.fnI,D.fnM],B.az("O<zA>"))
D.ek_=new B.bB("skin","Skin",A.agF)
D.elc=new B.bB("muscle","Muscles",A.Lx)
D.ekZ=new B.bB("organ","Organs",A.hV)
D.bqQ=new B.a0(62747,"MaterialIcons",!1)
D.el1=new B.bB("bone","Skeleton",D.bqQ)
D.eli=new B.bB("vessel","Blood vessels",A.uT)
D.cKo=w([D.ek_,D.elc,D.ekZ,D.el1,D.eli],x.c)
D.cLe=w([A.fY,A.o6],x.O)
D.cLg=w([A.bk,A.aX,A.d1],x.O)
D.epw=new C.uh("Simple legs","Light. Land gently.",0.15,0.2)
D.epy=new C.uh("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.epB=new C.uh("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.B_=w([D.epw,D.epy,D.epB],x._)
D.cLX=w([1.77,3.55,7.15,16.7],x.n)
D.cOc=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.eg2=new B.z("spiral","Spiral")
D.e0B=new B.z("barred","Barred spiral")
D.ebf=new B.z("elliptical","Elliptical")
D.cOQ=w([D.eg2,D.e0B,D.ebf],x.L)
D.elV=new B.cI(["beat",0.18,0.28,0])
D.emX=new B.cI(["burst",0.7,0.2,0])
D.en6=new B.cI(["delay",0.45,0.5,1])
D.emH=new B.cI(["ripple",0.75,0.6,3])
D.cFN=w([D.elV,D.emX,D.en6,D.emH],x.e)
D.a2T=new B.z(2,3)
D.cPD=w([L.mX,K.H0,D.a2T],x.u)
D.fn_=new C.ED("First spark","A clock lights a burst and a ripple",D.cFN,D.cPD)
D.emq=new B.cI(["beat",0.15,0.3,1])
D.elA=new B.cI(["ripple",0.62,0.15,0])
D.en3=new B.cI(["delay",0.4,0.45,0])
D.em6=new B.cI(["ripple",0.7,0.45,0])
D.elR=new B.cI(["delay",0.4,0.7,1])
D.emJ=new B.cI(["shake",0.75,0.75,0])
D.d_X=w([D.emq,D.elA,D.en3,D.em6,D.elR,D.emJ],x.e)
D.dZ4=new B.z(2,4)
D.aGW=new B.z(4,5)
D.cIW=w([L.mX,K.H0,D.a2T,D.dZ4,D.aGW],x.u)
D.fn1=new C.ED("Heartbeat","Two thumps, then a shake",D.d_X,D.cIW)
D.em_=new B.cI(["dice",0.15,0.7,1])
D.en8=new B.cI(["echo",0.4,0.7,0])
D.em5=new B.cI(["comet",0.7,0.5,4])
D.emY=new B.cI(["burst",0.72,0.2,1])
D.emo=new B.cI(["burst",0.3,0.25,0])
D.em0=new B.cI(["pop",0.55,0.85,0])
D.c3Y=w([D.em_,D.en8,D.em5,D.emY,D.emo,D.em0],x.e)
D.dYx=new B.z(1,3)
D.dYy=new B.z(1,4)
D.aGV=new B.z(0,5)
D.cQM=w([L.mX,K.vi,D.dYx,D.dYy,D.aGV],x.u)
D.fn0=new C.ED("Fireworks","Dice launch comets that burst in colour",D.c3Y,D.cQM)
D.em3=new B.cI(["beat",0.15,0.2,2])
D.emx=new B.cI(["chance",0.4,0.2,0])
D.elX=new B.cI(["ball",0.7,0.12,3])
D.elK=new B.cI(["chance",0.4,0.5,1])
D.en7=new B.cI(["ball",0.3,0.08,1])
D.elD=new B.cI(["ripple",0.7,0.55,3])
D.bY3=w([D.em3,D.emx,D.elX,D.elK,D.en7,D.elD],x.e)
D.a2U=new B.z(3,4)
D.dZ5=new B.z(2,5)
D.cjW=w([L.mX,K.vi,K.a2S,D.a2U,D.dZ5],x.u)
D.fmZ=new C.ED("Rain","Balls fall at random and splash",D.bY3,D.cjW)
D.emy=new B.cI(["beat",0.12,0.45,2])
D.emZ=new B.cI(["toggle",0.38,0.2,0])
D.en5=new B.cI(["wash",0.7,0.15,4])
D.elZ=new B.cI(["count3",0.38,0.45,0])
D.en0=new B.cI(["burst",0.72,0.4,0])
D.emp=new B.cI(["light",0.55,0.7,1])
D.elL=new B.cI(["pop",0.8,0.8,4])
D.cTc=w([D.emy,D.emZ,D.en5,D.elZ,D.en0,D.emp,D.elL],x.e)
D.dZq=new B.z(3,6)
D.c0a=w([L.mX,K.vi,K.a2S,D.a2U,D.aGV,D.dZq],x.u)
D.fmX=new C.ED("Disco","A beat drives lights, washes and bursts",D.cTc,D.c0a)
D.ena=new B.cI(["button",0.12,0.2,0])
D.elF=new B.cI(["delay",0.34,0.2,1])
D.en9=new B.cI(["light",0.56,0.2,1])
D.en4=new B.cI(["delay",0.56,0.45,1])
D.emz=new B.cI(["ball",0.34,0.6,0])
D.elJ=new B.cI(["delay",0.34,0.8,1])
D.elz=new B.cI(["burst",0.7,0.8,5])
D.bLm=w([D.ena,D.elF,D.en9,D.en4,D.emz,D.elJ,D.elz],x.e)
D.e0m=new B.z(5,6)
D.cXF=w([L.mX,K.vi,D.a2T,D.a2U,D.aGW,D.e0m],x.u)
D.fmY=new C.ED("Domino","Tap the button and watch it run down the line",D.bLm,D.cXF)
D.as7=w([D.fn_,D.fn1,D.fn0,D.fmZ,D.fmX,D.fmY],B.az("O<ED>"))
D.cOY=w([0.05,0.15,0.25],x.n)
D.cPb=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.cPO=w([1.5,3,4.5,9,12],x.n)
D.eiO=new B.bB("dice","Dice",A.m3)
D.ejJ=new B.bB("coin","Coin",E.xb)
D.eld=new B.bB("num","Number",A.xk)
D.cPX=w([D.eiO,D.ejJ,D.eld],x.c)
D.cQ_=w(["skin","muscle","organ","bone","vessel"],x.s)
D.ffA=new C.NA("Moon",1.62,0,4291941851)
D.ffB=new C.NA("Mars",3.71,0.01,4294472049)
D.ffC=new C.NA("Earth",9.81,1,4281908728)
D.ffE=new C.NA("Jupiter",24.79,1.4,4294677052)
D.ffD=new C.NA("Sun",274,2,4294688548)
D.xK=w([D.ffA,D.ffB,D.ffC,D.ffE,D.ffD],B.az("O<NA>"))
D.asd=w([A.cG,A.aK,A.bg,A.aY,A.bA,A.bX,A.cM,A.hn],x.O)
D.dKs={H:0}
D.d5Y=new B.br(D.dKs,[2],x.I)
D.d7r=new C.rH("Hydrogen","H\u2082",D.d5Y,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.dKt={H:0,Cl:1}
D.d69=new B.br(D.dKt,[1,1],x.I)
D.d7t=new C.rH("Hydrogen chloride","HCl",D.d69,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.dKu={H:0,O:1}
D.d5H=new B.br(D.dKu,[2,1],x.I)
D.d7u=new C.rH("Water","H\u2082O",D.d5H,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.dKH={N:0,H:1}
D.d6v=new B.br(D.dKH,[1,3],x.I)
D.d7C=new C.rH("Ammonia","NH\u2083",D.d6v,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a20={C:0,H:1}
D.d6q=new B.br(D.a20,[1,4],x.I)
D.d7v=new C.rH("Methane","CH\u2084",D.d6q,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.dKv={H:0,S:1}
D.d4Q=new B.br(D.dKv,[2,1],x.I)
D.d7B=new C.rH("Hydrogen sulfide","H\u2082S",D.d4Q,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.dKM={O:0}
D.d6t=new B.br(D.dKM,[2],x.I)
D.d7D=new C.rH("Oxygen","O\u2082",D.d6t,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.dKG={N:0}
D.d5Z=new B.br(D.dKG,[2],x.I)
D.d7s=new C.rH("Nitrogen","N\u2082",D.d5Z,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.dKh={C:0,O:1}
D.d6B=new B.br(D.dKh,[1,2],x.I)
D.d7z=new C.rH("Carbon dioxide","CO\u2082",D.d6B,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aBm={C:0,H:1,O:2}
D.d4C=new B.br(D.aBm,[1,2,1],x.I)
D.d7A=new C.rH("Formaldehyde","CH\u2082O",D.d4C,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.d6p=new B.br(D.a20,[2,4],x.I)
D.d7x=new C.rH("Ethene","C\u2082H\u2084",D.d6p,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.d6o=new B.br(D.a20,[2,6],x.I)
D.d7w=new C.rH("Ethane","C\u2082H\u2086",D.d6o,"Two carbons joined by a single bond, each holding three hydrogens.")
D.d4D=new B.br(D.aBm,[1,4,1],x.I)
D.d7y=new C.rH("Methanol","CH\u2083OH",D.d4D,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a_F=w([D.d7r,D.d7t,D.d7u,D.d7C,D.d7v,D.d7B,D.d7D,D.d7s,D.d7z,D.d7A,D.d7x,D.d7w,D.d7y],B.az("O<rH>"))
D.cQS=w([A.bX,A.aY,A.dJ,A.bg],x.O)
D.d96=new C.wK("NGMY Ads","\ud83d\udce2","Every NGMY promotion, as cartoons",A.bX,-1)
D.d93=new C.wK("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.d3,0)
D.d97=new C.wK("Jobs","\ud83d\udcbc","Find work and get hired",A.aX,1)
D.d94=new C.wK("Growth Income","\ud83d\udcc8","Make your money grow",A.bl,2)
D.d99=new C.wK("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fy,3)
D.d95=new C.wK("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bS,4)
D.d98=new C.wK("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.c7,5)
D.d9a=new C.wK("Invoices","\ud83e\uddfe","Professional invoices",A.bx,6)
D.d92=new C.wK("Calendar","\ud83d\udcc5","This month, today lit up",A.aD,-2)
D.nG=w([D.d96,D.d93,D.d97,D.d94,D.d99,D.d95,D.d98,D.d9a,D.d92],B.az("O<wK>"))
D.cRK=w([],x.h)
D.cRL=w([],x.C)
D.a_P=w([],x.dO)
D.dRA=new C.e4("battery","Battery","\ud83d\udd0b",A.bg,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.dRG=new C.e4("solar","Solar panel","\u2600\ufe0f",A.cu,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.dSk=new C.e4("crank","Hand crank","\ud83d\udd04",A.cM,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.dRX=new C.e4("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aY,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.dRs=new C.e4("buck","Step-down converter","\ud83d\udd3d",A.hn,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.dRV=new C.e4("regulator","5 V regulator","\ud83e\uddca",A.bH,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.dSp=new C.e4("diode","Diode","\u27a1\ufe0f",A.aK,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.dS6=new C.e4("ldr","Light sensor","\ud83c\udf1e",A.dJ,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.dRL=new C.e4("switch","Switch","\ud83c\udf9a\ufe0f",A.bA,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.dSm=new C.e4("fuse","Fuse","\ud83e\uddef",A.cG,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.dRk=new C.e4("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hn,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.dS7=new C.e4("resistor","Resistor","\u3030\ufe0f",A.aK,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.dS9=new C.e4("bulb","Light bulb","\ud83d\udca1",A.dJ,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.dRI=new C.e4("led","LED","\ud83d\udd34",A.aD,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.dRM=new C.e4("motor","Motor","\u2699\ufe0f",A.bH,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.dS3=new C.e4("buzzer","Buzzer","\ud83d\udd14",A.bX,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.dRB=new C.e4("heater","Heater","\ud83d\udd25",A.cM,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.dRZ=new C.e4("capacitor","Capacitor","\ud83e\udeab",A.cC,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.dRR=new C.e4("radio","Radio","\ud83d\udcfb",A.nk,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.dRO=new C.e4("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b6,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.dRr=new C.e4("voltmeter","Voltmeter","\ud83e\udded",A.bs,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.dRy=new C.e4("ammeter","Ammeter","\ud83d\udcdf",A.aK,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.dRE=new C.e4("fan","Fan","\ud83c\udf00",A.aY,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.dSr=new C.e4("speaker","Speaker","\ud83d\udd0a",A.bX,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.dSg=new C.e4("clock","Digital clock","\u23f0",A.bg,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.dRU=new C.e4("calculator","Calculator","\ud83e\uddee",A.IZ,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.dRx=new C.e4("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cC,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.dSq=new C.e4("router","WiFi router","\ud83d\udcf6",A.hn,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.dSt=new C.e4("siren","Siren","\ud83d\udea8",A.aD,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.dRn=new C.e4("toycar","Toy car","\ud83d\ude97",A.cM,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.dSu=new C.e4("kettle","Kettle","\ud83e\uded6",A.o3,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.dRv=new C.e4("lamp","Desk lamp","\ud83e\ude94",A.dJ,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.dRH=new C.e4("lights","Party lights","\ud83c\udf84",A.nk,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.dRS=new C.e4("fridge","Fridge","\ud83e\uddca",A.fY,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.dRp=new C.e4("washer","Washing machine","\ud83e\udee7",A.cC,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.dSh=new C.e4("blender","Blender","\ud83e\udd64",A.cG,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.dRP=new C.e4("drone","Drone","\ud83d\ude81",A.bH,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.dRu=new C.e4("drill","Power drill","\ud83d\udd29",A.aK,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.dRT=new C.e4("torch","Torch","\ud83d\udd26",A.bJ,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.dSe=new C.e4("neon","Neon sign","\ud83e\udea7",A.bX,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.dRq=new C.e4("microwave","Microwave","\ud83c\udf72",A.cM,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.dS8=new C.e4("doorbell","Doorbell","\ud83d\udd14",A.cu,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.dRD=new C.e4("camera","Security camera","\ud83d\udcf7",A.aj,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.dS2=new C.e4("console","Game console","\ud83c\udfae",A.bA,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.dSj=new C.e4("heartmon","Heart monitor","\ud83e\ude7a",A.fT,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.dRo=new C.e4("aquarium","Aquarium","\ud83d\udc20",A.b6,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.dRY=new C.e4("lighthouse","Lighthouse","\ud83d\uddfc",A.dJ,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.dS5=new C.e4("discoball","Disco ball","\ud83e\udea9",A.nk,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.dSo=new C.e4("robot","Robot","\ud83e\udd16",A.aY,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.dRm=new C.e4("toaster","Toaster","\ud83c\udf5e",A.e1,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.dSs=new C.e4("ledstrip","LED strip","\ud83c\udf08",A.bX,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.dSd=new C.e4("pump","Water pump","\ud83d\udeb0",A.aY,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.dS_=new C.e4("hairdryer","Hair dryer","\ud83d\udca8",A.jh,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.dSb=new C.e4("headphones","Headphones","\ud83c\udfa7",A.bA,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.dRw=new C.e4("smartwatch","Apple Watch Ultra","\u231a",A.bs,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.dSn=new C.e4("tablet","iPad Pro M5","\ud83d\udcf2",A.cC,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.dRj=new C.e4("lgtv","LG OLED evo G5","\ud83d\udcfa",A.fT,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.dRQ=new C.e4("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bn,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.dRJ=new C.e4("appletv","Apple TV 4K","\ud83d\udcfa",A.bY,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.dS4=new C.e4("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",D.Jc,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.dRl=new C.e4("iphonefold","iPhone Fold","\ud83d\udcf1",A.b1,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.dRz=new C.e4("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d3,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.dSl=new C.e4("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cs,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.dS0=new C.e4("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bl,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.dRW=new C.e4("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cf,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.dSc=new C.e4("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aD,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.dRK=new C.e4("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bg,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.dS1=new C.e4("honor","Honor Magic V5","\ud83d\udcf1",A.cC,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.dSa=new C.e4("vivo","vivo X300 Pro","\ud83d\udcf1",A.cM,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.dSf=new C.e4("ereader","Kindle Scribe","\ud83d\udcd6",A.bn,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.dRi=new C.e4("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.c7,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.dRN=new C.e4("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cs,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.dRF=new C.e4("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b6,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.dRt=new C.e4("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dJ,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.dRC=new C.e4("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aD,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.dSi=new C.e4("vision","Apple Vision Pro","\ud83e\udd7d",A.bA,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.On=w([D.dRA,D.dRG,D.dSk,D.dRX,D.dRs,D.dRV,D.dSp,D.dS6,D.dRL,D.dSm,D.dRk,D.dS7,D.dS9,D.dRI,D.dRM,D.dS3,D.dRB,D.dRZ,D.dRR,D.dRO,D.dRr,D.dRy,D.dRE,D.dSr,D.dSg,D.dRU,D.dRx,D.dSq,D.dSt,D.dRn,D.dSu,D.dRv,D.dRH,D.dRS,D.dRp,D.dSh,D.dRP,D.dRu,D.dRT,D.dSe,D.dRq,D.dS8,D.dRD,D.dS2,D.dSj,D.dRo,D.dRY,D.dS5,D.dSo,D.dRm,D.dSs,D.dSd,D.dS_,D.dSb,D.dRw,D.dSn,D.dRj,D.dRQ,D.dRJ,D.dS4,D.dRl,D.dRz,D.dSl,D.dS0,D.dRW,D.dSc,D.dRK,D.dS1,D.dSa,D.dSf,D.dRi,D.dRN,D.dRF,D.dRt,D.dRC,D.dSi],B.az("O<e4>"))
D.cS5=w([0,0.46,0.82],x.n)
D.cSg=w([5,10,15,25,45,60],x.t)
D.cSz=w([-0.045,0.03,-0.015],x.n)
D.cSV=w([0.9,0.97,1],x.n)
D.asA=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.tl=w([0.05,0.2,0.35],x.n)
D.cAU=w([D.Dr,D.Dr],x.O)
D.cFK=w([A.DC,A.M],x.O)
D.cEQ=w([A.fy,A.hm],x.O)
D.czc=w([A.hR,A.nj],x.O)
D.bXC=w([A.lm,A.dt],x.O)
D.asB=w([D.cAU,D.cFK,D.cEQ,D.czc,D.bXC],x.B)
D.cTG=w([A.e_,A.f3],x.O)
D.ffo=new C.uu("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.ffp=new C.uu("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.ffg=new C.uu("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.ffn=new C.uu("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.ffl=new C.uu("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.ffh=new C.uu("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.ffm=new C.uu("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.ffi=new C.uu("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.ffk=new C.uu("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.ffj=new C.uu("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.B5=w([D.ffo,D.ffp,D.ffg,D.ffn,D.ffl,D.ffh,D.ffm,D.ffi,D.ffk,D.ffj],B.az("O<uu>"))
D.b6c=new B.w(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.cTY=w([D.Dr,D.b6c,D.a9T,A.a9v],x.O)
D.aUw=new B.ab(0,A.G,A.hB,A.dz,6)
D.cUN=w([D.aUw],x.V)
D.asL=w([A.bM,A.cu,A.d1,A.aE],x.O)
D.dXY=new B.z(0,"AND")
D.dYz=new B.z(1,"Adder")
D.dZ6=new B.z(2,"Blinker")
D.dZr=new B.z(3,"Memory")
D.cVt=w([D.dXY,D.dYz,D.dZ6,D.dZr],x.F)
D.asN=w([-104,0,104],x.n)
D.asO=w([-14,3],x.n)
D.cVU=w([-16,16],x.n)
D.v4=w([-1,1],x.n)
D.asP=w([-22,22],x.n)
D.asQ=w([-24,24],x.n)
D.cVY=w([-5,5],x.n)
D.cVZ=w([-8,0,8],x.n)
D.cW_=w([-8,8],x.n)
D.asS=w([-92,0,92],x.n)
D.cWj=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.ept=new C.uh("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.epA=new C.uh("Medium tank","Balanced.",0.35,1)
D.epz=new C.uh("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Oz=w([D.ept,D.epA,D.epz],x._)
D.cWy=w([A.aI,A.aj],x.O)
D.cWC=w([1,2,3,4,6,8],x.n)
D.mT=w([0.04,0.2,0.36],x.n)
D.fgS=new C.uw("NGMY Civic Registry","Enroll your family. Stay counted and helped together.",A.dm,A.aY)
D.fh0=new C.uw("NGMY Jobs","Find work. Get hired. Get paid.",A.dn,A.aK)
D.fgY=new C.uw("Growth Income","Make your money grow every work day.",A.fW,A.eE)
D.fgZ=new C.uw("NGMY Store","African food and traditions. Support our Congolese and African community.",A.k3,A.cu)
D.fgW=new C.uw("Kiswahili School","Learn Swahili and English, step by step.",A.cY,A.mA)
D.fgV=new C.uw("Document Scanner","Scan, save and share your papers.",A.p_,A.fU)
D.fgT=new C.uw("Invoice Creator","Make professional invoices in minutes.",A.ro,A.nX)
D.fgQ=new C.uw("Family Book and Tree","Write your family story. Grow your tree.",A.j2,A.IW)
D.fgR=new C.uw("NGMY Wallet","Save, send and earn coins.",A.oV,A.dJ)
D.fgU=new C.uw("Vault Games","Play, win and learn.",A.e_,A.b6)
D.fh_=new C.uw("Electronics Lab","Build real circuits and learn.",A.hR,A.bd)
D.fgX=new C.uw("NGMY Helper and Advisors","Friendly help, any time.",A.lm,A.cM)
D.cWZ=w([D.fgS,D.fh0,D.fgY,D.fgZ,D.fgW,D.fgV,D.fgT,D.fgQ,D.fgR,D.fgU,D.fh_,D.fgX],B.az("O<uw>"))
D.at0=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.cXr=w([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],x.n)
D.ekY=new B.bB(D.aOt,"Fold",E.ahC)
D.ekd=new B.bB(D.a6h,"Flip",A.EH)
D.br8=new B.a0(62889,"MaterialIcons",!1)
D.elb=new B.bB(D.aOu,"Rise",D.br8)
D.ahQ=new B.a0(983870,"MaterialIcons",!1)
D.eiq=new B.bB(D.a6i,"Assemble",D.ahQ)
D.eiz=new B.bB(D.aOv,"Spin",D.agc)
D.eiw=new B.bB(D.aOw,"Pop",A.l1)
D.cXC=w([D.ekY,D.ekd,D.elb,D.eiq,D.eiz,D.eiw],B.az("O<+(IX,n,a0)>"))
D.at5=w([A.bX,A.dJ,A.bs,A.aY,A.bA,A.cG],x.O)
D.cXN=w([A.aY,A.cM,A.cM,A.bg],x.O)
D.cXZ=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.ehq=new B.z("Make the output turn HALF as fast as the input.",0.5)
D.e3z=new B.z("Make the output turn TWICE as fast.",2)
D.dYJ=new B.z("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.egc=new B.z("Make the output turn 4 times faster.",4)
D.e8U=new B.z("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.ebP=new B.z("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.eao=new B.z("Make the output turn 3 times faster.",3)
D.eb6=new B.z("Make the output spin at the same speed as the input, using four different gears.",1)
D.ata=w([D.ehq,D.e3z,D.dYJ,D.egc,D.e8U,D.ebP,D.eao,D.eb6],B.az("O<+(n,P)>"))
D.cYV=w([3,4.5,5,6,9],x.n)
D.cZ2=w([1,2,3,4,5,6,7,8],x.n)
D.aV3=new B.ab(0,A.G,A.aU,A.J,16)
D.cZl=w([D.aV3],x.V)
D.OB=w([A.bX,A.cu,A.bg,A.aY,A.bA,A.cG,A.c,A.cM],x.O)
D.cZK=w(["solar","turbine","crank","pot"],x.s)
D.d_3=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.d_7=w([0,0.35,0.75,1],x.n)
D.d_i=w([A.aD,A.cf,A.cu,A.bl,A.d3,A.b1],x.O)
D.eiJ=new B.bB("drop","Drop",D.ahr)
D.eiL=new B.bB("weight","Weight",N.ahS)
D.el6=new B.bB("cannon","Newton's cannon",A.agR)
D.d_H=w([D.eiJ,D.eiL,D.el6],x.c)
D.eeT=new B.z("piano","Piano")
D.eez=new B.z("organ","Organ")
D.ea5=new B.z("bell","Bell")
D.eeV=new B.z("pluck","Pluck")
D.egb=new B.z("synth","Synth")
D.ebK=new B.z("flute","Flute")
D.atr=w([D.eeT,D.eez,D.ea5,D.eeV,D.egb,D.ebK],x.L)
D.d05=w(["M","T","W","T","F","S","S"],x.s)
D.d08=w(["volts","level","ohms","on"],x.s)
D.d14=w([A.c,A.oP],x.O)
D.d1f=w([A.j7,A.AF,A.As,A.qv,A2.F5,A.uQ,A.xh,A.pm,A.hW,A.mQ,A.hq,A.dR,A.hV,A.hX,A.m4,A.m5,A.xi,A.qz,A.lw,A.Ez,A.te,A.Lz,A.Au,A.ahm,A.Lo,A.xe,A.Lx,A.ah1,I.ahM,A.l1],x.w)
D.d1K=w([1,0.18,0.06],x.n)
D.d26=w([0.72,1],x.n)
D.d2g=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.dLM={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.d4w=new B.br(D.dLM,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aBo={A:0,T:1,C:2,G:3}
D.a0D=new B.br(D.aBo,["U","A","G","C"],x.l)
D.d4E=new B.br(D.aBo,["T","A","G","C"],x.l)
D.dKD={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.cQW=w([0,2,4,5,7,9,11],x.t)
D.cAf=w([0,2,3,5,7,8,10],x.t)
D.cVG=w([0,3,5,6,7,10],x.t)
D.Bb=new B.br(D.dKD,[D.arB,D.cQW,D.cAf,D.cVG,D.aki],B.az("br<n,ak<I>>"))
D.dLA={A:0,T:1,U:2,C:3,G:4}
D.d4T=new B.br(D.dLA,[A.cG,A.cC,A.cC,A.aK,A.bg],B.az("br<n,w>"))
D.dK2={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.fhe=new C.xm("Switch",D.ahA,A.cu,0,"Tap it to turn it ON or OFF.")
D.fha=new C.xm("Blinker",A.oj,A.bs,0,"Turns itself ON and OFF. Tap to change the speed.")
D.fhb=new C.xm("AND",D.ahQ,A.cC,2,"ON only when BOTH inputs are ON.")
D.bsA=new B.a0(63671,"MaterialIcons",!1)
D.fh9=new C.xm("OR",D.bsA,A.bA,2,"ON when EITHER input is ON.")
D.fhc=new C.xm("XOR",G.XO,A.bX,2,"ON when the inputs are DIFFERENT.")
D.fh6=new C.xm("NAND",A.t4,A.aY,2,"OFF only when BOTH inputs are ON.")
D.brH=new B.a0(63176,"MaterialIcons",!1)
D.fh7=new C.xm("NOR",D.brH,A.hn,2,"ON only when BOTH inputs are OFF.")
D.fh8=new C.xm("NOT",U.F_,A.cM,1,"Flips the signal: ON becomes OFF.")
D.fhd=new C.xm("Light",A.Ay,A.dJ,1,"Glows when its input is ON.")
D.fhf=new C.xm("Buzzer",A.nA,A.cG,1,"Beeps while its input is ON.")
D.xW=new B.br(D.dK2,[D.fhe,D.fha,D.fhb,D.fh9,D.fhc,D.fh6,D.fh7,D.fh8,D.fhd,D.fhf],B.az("br<n,xm>"))
D.dLy={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.ej4=new B.bB(3,20,1.9)
D.eiF=new B.bB(33,90,1.6)
D.elu=new B.bB(52,15,3.2)
D.els=new B.bB(45,-100,1.8)
D.ek7=new B.bB(-15,-60,1.9)
D.ejF=new B.bB(-25,140,2.4)
D.ejx=new B.bB(-82,0,2.2)
D.ayS=new B.br(D.dLy,[D.ej4,D.eiF,D.elu,D.els,D.ek7,D.ejF,D.ejx],B.az("br<n,+(P,P,P)>"))
D.czH=w([A.A],x.Q)
D.czZ=w([A.ax,A.aC],x.Q)
D.cI6=w([A.ax,A.A,A.aC],x.Q)
D.cJq=w([A.ax,A.kT,A.A,A.lh,A.aC],x.Q)
D.cVp=w([A.ax,A.kT,A.a3,A.a7,A.lh,A.aC],x.Q)
D.d5O=new B.dX([1,D.czH,2,D.czZ,3,D.cI6,4,A.atw,5,D.cJq,6,D.cVp],B.az("dX<I,ak<d6>>"))
D.dKE={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.ekj=new B.bB(1,A.bY,"Hydrogen")
D.ejj=new B.bB(4,A.br,"Carbon")
D.eir=new B.bB(3,A.d3,"Nitrogen")
D.ekA=new B.bB(2,A.aD,"Oxygen")
D.ek1=new B.bB(2,A.cu,"Sulfur")
D.el4=new B.bB(1,A.bl,"Chlorine")
D.v6=new B.br(D.dKE,[D.ekj,D.ejj,D.eir,D.ekA,D.ek1,D.el4],B.az("br<n,+(I,w,n)>"))
D.dLR={Calm:0,Box:1,Sleep:2}
D.cht=w([4,2,6,0],x.n)
D.chA=w([4,4,4,4],x.n)
D.chB=w([4,7,8,0],x.n)
D.P_=new B.br(D.dLR,[D.cht,D.chA,D.chB],B.az("br<n,ak<P>>"))
D.dKb={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.vK=new C.Zq(0,"source")
D.cIZ=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.flD=new C.pA("Clock",A.oj,D.vK,A.bs,D.cIZ)
D.flz=new C.pA("Button",A.xm,D.vK,A.aK,A.U)
D.cZ6=w(["random","quick","slow"],x.s)
D.flK=new C.pA("Dice",A.m3,D.vK,A.bX,D.cZ6)
D.bsh=new B.a0(63484,"MaterialIcons",!1)
D.Cy=new C.Zq(1,"logic")
D.d21=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.flG=new C.pA("Delay",D.bsh,D.Cy,A.cC,D.d21)
D.cSn=w(["fast","mid","slow"],x.s)
D.flL=new C.pA("Echo",A.ahf,D.Cy,A.bA,D.cSn)
D.flI=new C.pA("Every 2nd",U.F_,D.Cy,A.hn,A.U)
D.brV=new B.a0(63309,"MaterialIcons",!1)
D.flF=new C.pA("Every 3rd",D.brV,D.Cy,A.aY,A.U)
D.btT=new B.a0(983902,"MaterialIcons",!1)
D.bKN=w(["50%","25%","75%"],x.s)
D.flN=new C.pA("Chance",D.btT,D.Cy,A.cM,D.bKN)
D.pU=new C.Zq(2,"out")
D.flB=new C.pA("Light",A.Ay,D.pU,A.dJ,A.U)
D.flC=new C.pA("Burst",A.l1,D.pU,A.bX,A.U)
D.flA=new C.pA("Ripple",A.xq,D.pU,A.b6,A.U)
D.flJ=new C.pA("Ball",A.aht,D.pU,A.cM,A.U)
D.flH=new C.pA("Comet",A.mQ,D.pU,A.bA,A.U)
D.btE=new B.a0(983669,"MaterialIcons",!1)
D.flM=new C.pA("Shake",D.btE,D.pU,A.cG,A.U)
D.flO=new C.pA("Pop",A.EA,D.pU,A.bg,A.U)
D.flE=new C.pA("Wash",A.LC,D.pU,A.oS,A.U)
D.md=new B.br(D.dKb,[D.flD,D.flz,D.flK,D.flG,D.flL,D.flI,D.flF,D.flN,D.flB,D.flC,D.flA,D.flJ,D.flH,D.flM,D.flO,D.flE],B.az("br<n,pA>"))
D.dLx={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"ORBIT STUDIO":5,"SWARM STUDIO":6,"FIREWORK DESIGNER":7,"CHAIN BURST":8,"CIRCUIT LAB":9,"PERIODIC TABLE":10,"BODY EXPLORER":11,"SPIN THE WHEEL":12,"FOCUS TIMER":13,"MEMORY MATCH":14,"LUCKY POCKET":15,"ELECTRONICS LAB":16,"AI INVENTOR":17,"MAGNET LAB":18,"RADIO LAB":19,"POWER PLANT":20,"POWER GRID":21,"INTERNET JOURNEY":22,"ROBOT CODER":23,"BUG SMASHER":24,"ROCKET LANDER":25,"DATA SNAKE":26,"BINARY 2048":27,"SIGNAL BREAKER":28,"PASSWORD LAB":29,"WAVE LAB":30,"BUG HUNT":31,"MOLECULE MAKER":32,"DNA LAB":33,"ECOSYSTEM LAB":34,"BALANCE LAB":35,"GEAR LAB":36,"OPTICS LAB":37,"LASER MAZE":38,"LIGHT MIXER":39,"ATOM BUILDER":40,"CIPHER LAB":41,"PIXEL TV":42}
D.az2=new B.br(D.dLx,["sparkle","sparkle","whoosh","click","bounce","space","bubble","pop","zap","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","lab","organic","organic","click","tech","sparkle","zap","sparkle","lab","tech","tech"],x.l)
D.dLB={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.Bc=new B.br(D.dLB,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.dKn={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.yn=new C.HT(0,"tv")
D.b4c=new B.w(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.t)
D.eqV=new C.lO("Samsung Neo QLED 8K",D.yn,D.b4c,A.aY)
D.eqM=new C.lO("LG OLED evo G5",D.yn,A.ed,A.fT)
D.eqD=new C.lO("Sony Bravia 9",D.yn,A.q6,A.bn)
D.eqH=new C.lO("Apple TV 4K",D.yn,A.e2,A.bY)
D.eqE=new C.lO("Bang and Olufsen Beovision",D.yn,D.a8T,D.Jc)
D.H5=new C.HT(1,"iphone")
D.aHz=new C.lO("iPhone 18 Pro Max",D.H5,D.abL,A.c7)
D.vl=new C.HT(3,"fold")
D.bbf=new B.w(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.eqR=new C.lO("iPhone Fold",D.vl,D.bbf,A.b1)
D.tL=new C.HT(2,"android")
D.b_l=new B.w(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.t)
D.eqS=new C.lO("Samsung Galaxy S26 Ultra",D.tL,D.b_l,A.d3)
D.b5P=new B.w(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.eqK=new C.lO("Samsung Galaxy Z Fold7",D.vl,D.b5P,A.cs)
D.eqG=new C.lO("Google Pixel 10 Pro XL",D.tL,A.e0,A.bl)
D.eqO=new C.lO("Xiaomi 16 Ultra",D.tL,A.mC,A.cf)
D.eqJ=new C.lO("Huawei Mate 80 Pro Max",D.tL,A.f_,A.aD)
D.eqF=new C.lO("OPPO Find X9 Ultra",D.tL,A.eu,A.bg)
D.eqX=new C.lO("Honor Magic V5",D.vl,A.dm,A.cC)
D.eqL=new C.lO("vivo X300 Pro",D.tL,A.hm,A.cM)
D.Qs=new C.HT(4,"tablet")
D.eqQ=new C.lO("iPad Pro M5",D.Qs,A.e0,A.aY)
D.a39=new C.HT(5,"reader")
D.eqY=new C.lO("Kindle Scribe",D.a39,A.eo,A.bn)
D.yo=new C.HT(6,"computer")
D.eqP=new C.lO("MacBook Pro M5 Max",D.yo,A.e0,A.c7)
D.eqU=new C.lO("iMac 32 inch",D.yo,A.bY,A.cs)
D.eqN=new C.lO("Pro Display XDR 8K",D.yo,A.mC,A.b6)
D.eqI=new C.lO("Sony Laser Projector",D.yo,A.cz,A.dJ)
D.eqT=new C.lO("Luxury car touchscreen",D.yo,I.o4,A.aD)
D.eqW=new C.lO("Apple Vision Pro",D.yo,A.kZ,A.bA)
D.lC=new B.br(D.dKn,[D.eqV,D.eqM,D.eqD,D.eqH,D.eqE,D.aHz,D.eqR,D.eqS,D.eqK,D.eqG,D.eqO,D.eqJ,D.eqF,D.eqX,D.eqL,D.eqQ,D.eqY,D.eqP,D.eqU,D.eqN,D.eqI,D.eqT,D.eqW],B.az("br<n,lO>"))
D.dKy={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bdr=new C.fF(20,4,13,!1)
D.bdS=new C.fF(14,5,13.5,!1)
D.bdJ=new C.fF(9,2.4,10,!1)
D.bdX=new C.fF(7,5,12.5,!1)
D.bdM=new C.fF(8,3.5,12,!1)
D.bdn=new C.fF(15,2,6,!1)
D.bdV=new C.fF(45,6,13.5,!0)
D.bdD=new C.fF(10,8,13.5,!1)
D.bdv=new C.fF(25,3,12,!0)
D.bdB=new C.fF(35,4,12,!0)
D.bdC=new C.fF(40,4.5,9.5,!0)
D.bdE=new C.fF(55,3,9,!0)
D.bdo=new C.fF(18,3,9,!1)
D.bdU=new C.fF(22,4,13.5,!1)
D.bdN=new C.fF(16,5,13.5,!1)
D.bdz=new C.fF(30,4,9,!0)
D.be5=new C.fF(5,3.5,13,!1)
D.bdH=new C.fF(25,3,13.5,!0)
D.bdQ=new C.fF(14,2.5,9,!1)
D.bdG=new C.fF(6,6,13,!1)
D.bdY=new C.fF(30,1.2,5,!0)
D.be4=new C.fF(35,3,4.5,!0)
D.be0=new C.fF(20,4.5,7.5,!0)
D.bdF=new C.fF(55,5.5,13.5,!0)
D.bdm=new C.fF(45,5.5,13.5,!0)
D.bdR=new C.fF(40,5.5,13.5,!0)
D.be3=new C.fF(60,6,13.5,!0)
D.ac8=new C.fF(28,4,7,!0)
D.DP=new C.fF(25,4,7,!0)
D.bdy=new C.fF(30,4,7,!0)
D.bdt=new C.fF(22,4,7,!0)
D.bdu=new C.fF(24,4,7,!0)
D.bdI=new C.fF(60,3,5.5,!0)
D.bdp=new C.fF(18,9,14,!0)
D.bdw=new C.fF(25,9,14,!0)
D.ac9=new C.fF(30,8,14,!0)
D.bds=new C.fF(20,8,14,!0)
D.bdA=new C.fF(30,9,14,!0)
D.bdZ=new C.fF(22,5,9.5,!0)
D.bdq=new C.fF(30,2.5,10.5,!0)
D.bdO=new C.fF(50,5.5,13.5,!0)
D.be2=new C.fF(12,2,9.5,!1)
D.bdL=new C.fF(16,1.3,9.5,!0)
D.bdW=new C.fF(40,2.5,7,!0)
D.be1=new C.fF(60,1.2,4.8,!0)
D.be_=new C.fF(18,5,13.5,!0)
D.bdT=new C.fF(8,2,9.5,!1)
D.bdK=new C.fF(12,2.5,8,!1)
D.bdx=new C.fF(20,3.5,13.5,!0)
D.bdP=new C.fF(3.5,3,13,!1)
D.xX=new B.br(D.dKy,[D.bdr,D.bdS,D.bdJ,D.bdX,D.bdM,D.bdn,D.bdV,D.bdD,D.bdv,D.bdB,D.bdC,D.bdE,D.bdo,D.bdU,D.bdN,D.bdz,D.be5,D.bdH,D.bdQ,D.bdG,D.bdY,D.be4,D.be0,D.bdF,D.bdm,D.bdR,D.be3,D.ac8,D.DP,D.bdy,D.DP,D.bdt,D.DP,D.bdu,D.ac8,D.DP,D.bdI,D.bdp,D.bdw,D.ac9,D.bds,D.bdA,D.bdZ,D.bdq,D.bdO,D.be2,D.bdL,D.bdW,D.be1,D.DP,D.ac9,D.be_,D.bdT,D.bdK,D.bdx,D.bdP],B.az("br<n,fF>"))
D.dKa={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.ehZ=new B.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.e0j=new B.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.e0e=new B.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eb5=new B.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.ec_=new B.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eb1=new B.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.dZw=new B.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.e99=new B.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.ei7=new B.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eck=new B.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.e31=new B.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.dZh=new B.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.e27=new B.z("Movement","They pull your legs together and help you balance.")
D.e3S=new B.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.e0r=new B.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.efN=new B.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.egP=new B.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.e8V=new B.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.egz=new B.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.e7G=new B.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.ecs=new B.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.dZl=new B.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.e4e=new B.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.ec9=new B.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.e7Y=new B.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.egH=new B.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eaA=new B.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.dZu=new B.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.ecW=new B.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.efr=new B.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.edM=new B.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.dY7=new B.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eai=new B.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eam=new B.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.e4R=new B.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.e0x=new B.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.e3H=new B.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.e9i=new B.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.ees=new B.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.ei4=new B.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.ecp=new B.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.dXV=new B.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.e9s=new B.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.dYs=new B.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eeI=new B.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.efJ=new B.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.e9R=new B.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eeX=new B.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.dZn=new B.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.ege=new B.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.e1A=new B.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eea=new B.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.e4A=new B.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.e7U=new B.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.ecG=new B.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.ego=new B.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.egg=new B.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.egk=new B.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.e8m=new B.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.edr=new B.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.edJ=new B.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eg3=new B.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.e9Q=new B.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.e6n=new B.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.e5h=new B.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.ead=new B.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.ecz=new B.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.e6S=new B.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.e7u=new B.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.e1U=new B.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.efG=new B.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.e2E=new B.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.dYp=new B.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.e4Q=new B.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.dYk=new B.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.e0R=new B.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.e4V=new B.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.e2N=new B.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.ecS=new B.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.e3V=new B.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.ehN=new B.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.e5p=new B.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.e8g=new B.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eaH=new B.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.e2U=new B.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.e2G=new B.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.d6S=new B.br(D.dKa,[D.ehZ,D.e0j,D.e0e,D.eb5,D.ec_,D.eb1,D.dZw,D.e99,D.ei7,D.eck,D.e31,D.dZh,D.e27,D.e3S,D.e0r,D.efN,D.egP,D.e8V,D.egz,D.e7G,D.ecs,D.dZl,D.e4e,D.ec9,D.e7Y,D.egH,D.eaA,D.dZu,D.ecW,D.efr,D.edM,D.dY7,D.eai,D.eam,D.e4R,D.e0x,D.e3H,D.e9i,D.ees,D.ei4,D.ecp,D.dXV,D.e9s,D.dYs,D.eeI,D.efJ,D.e9R,D.eeX,D.dZn,D.ege,D.e1A,D.eea,D.e4A,D.e7U,D.ecG,D.ego,D.egg,D.egk,D.e8m,D.edr,D.edJ,D.eg3,D.e9Q,D.e6n,D.e5h,D.ead,D.ecz,D.e6S,D.e7u,D.e1U,D.efG,D.e2E,D.dYp,D.e4Q,D.dYk,D.e0R,D.e4V,D.e2N,D.ecS,D.e3V,D.ehN,D.e5p,D.e8g,D.eaH,D.e2U,D.e2G],B.az("br<n,+(n,n)>"))
D.d6U=new B.hm(A.G,11)
D.d6Z=new B.hm(A.G,30)
D.d70=new B.hm(A.G,1.2)
D.d9L=new C.St(null)
D.ddz=new C.Sx(null)
D.ddA=new C.Sy(null)
D.ddN=new C.Sz(null)
D.dfO=new C.SB(null)
D.dfP=new C.SC(null)
D.dfQ=new C.SD(null)
D.dgD=new C.SZ(null)
D.dgF=new C.Td(null)
D.dgG=new C.Te(null)
D.dgH=new C.Tf(null)
D.dhe=new C.Tm(null)
D.dj9=new C.Tq(null)
D.dja=new C.Ts(null)
D.djb=new C.Tt(null)
D.djd=new C.Tu(null)
D.dkN=new C.TL(null)
D.dkP=new C.TN(null)
D.dkU=new C.TX(null)
D.dl4=new C.TY(null)
D.dlA=new C.TZ(null)
D.dn4=new C.U0(null)
D.dos=new C.U2(null)
D.dot=new C.U3(null)
D.dpO=new C.U5(null)
D.dFH=new C.U6(null)
D.dFI=new C.U7(null)
D.dFJ=new C.Ua(null)
D.dFK=new C.Ub(null)
D.dHD=new C.Uj(null)
D.dHE=new C.Uk(null)
D.dHM=new C.Ur(null)
D.dHV=new C.Uv(null)
D.dHW=new C.Uw(null)
D.dHX=new C.a6i(null)
D.dIx=new C.Uy(null)
D.dK_=new C.UC(null)
D.dM0=new B.u(0,118)
D.aBu=new B.u(0,13)
D.dM1=new B.u(0,17)
D.dM4=new B.u(0,330)
D.dM7=new B.u(0,-13)
D.aBA=new B.u(0,-14)
D.dM8=new B.u(0,-17)
D.dM9=new B.u(0,-18)
D.dMa=new B.u(0,-19)
D.dMb=new B.u(0,-20)
D.dMe=new B.u(0,-26)
D.dMf=new B.u(0,-28)
D.dMg=new B.u(0,-31)
D.dMh=new B.u(0,-32)
D.ve=new B.u(0,-6)
D.dMi=new B.u(0,-6771)
D.dMj=new B.u(0,-9)
D.dMl=new B.u(-9.5,-11)
D.dMm=new B.u(10,20)
D.dMo=new B.u(10,-13)
D.dMp=new B.u(10,-22)
D.dMq=new B.u(10,-4)
D.a24=new B.u(11,8)
D.dMs=new B.u(12,2)
D.dMt=new B.u(14,0)
D.dMu=new B.u(14,12)
D.aBE=new B.u(14,8)
D.dMv=new B.u(14,-17)
D.dMw=new B.u(14,-18)
D.aBF=new B.u(14,-3)
D.aBG=new B.u(14,-4)
D.dMx=new B.u(15,0)
D.dMy=new B.u(15,-12)
D.dMz=new B.u(16,-8)
D.dMA=new B.u(18,14)
D.dMB=new B.u(18,-12)
D.aBK=new B.u(20,0)
D.dMH=new B.u(20,15)
D.dMI=new B.u(20,-17)
D.dMJ=new B.u(20,-3)
D.dMK=new B.u(21,8)
D.dMM=new B.u(22,10)
D.aBL=new B.u(22,8)
D.dMN=new B.u(24,0)
D.dMO=new B.u(24,2)
D.dMQ=new B.u(24,-18)
D.dMR=new B.u(24,-22)
D.dMS=new B.u(25,8)
D.dMT=new B.u(26,0)
D.dMZ=new B.u(28,-30)
D.dN3=new B.u(30,18)
D.dN4=new B.u(30,2)
D.dN5=new B.u(31,19)
D.dN6=new B.u(32,0)
D.aBO=new B.u(34,0)
D.aBP=new B.u(34,-32)
D.GH=new B.u(36,0)
D.dNb=new B.u(3,-1)
D.dNe=new B.u(40,3)
D.dNi=new B.u(4,11)
D.dNl=new B.u(4,-2)
D.dNp=new B.u(5,0)
D.dNq=new B.u(5,17)
D.dNr=new B.u(5,6)
D.dNu=new B.u(6,11)
D.dNA=new B.u(8,7)
D.dNB=new B.u(8,-10)
D.dNC=new B.u(8,-14)
D.dND=new B.u(8,-3)
D.aBT=new B.u(9,0)
D.dNG=new B.u(-20.5,-17.6)
D.dNH=new B.u(-9,18.5)
D.dNK=new B.u(-2.6,-1)
D.dNL=new B.u(1.9,-0.8)
D.dNO=new B.u(-0.22,0.09)
D.dNT=new B.u(2.6,1)
D.dO_=new B.u(-9,12.2)
D.dOh=new B.u(-9,20.5)
D.dOz=new B.u(-10,0)
D.dOA=new B.u(-10,12)
D.aC_=new B.u(-10,4)
D.dOB=new B.u(-11,-2)
D.dOC=new B.u(-13,-5)
D.dOD=new B.u(-14,0)
D.dOE=new B.u(-14,13)
D.dOF=new B.u(-14,2)
D.dOG=new B.u(-14,-12)
D.dOH=new B.u(-14,-19)
D.dOI=new B.u(-14,-23)
D.dOJ=new B.u(-15,6)
D.dOK=new B.u(-16,14)
D.dOL=new B.u(-16,-8)
D.dOM=new B.u(-17,10)
D.dON=new B.u(-17,-18)
D.dOO=new B.u(-17,-8)
D.dOQ=new B.u(-18,20)
D.dOR=new B.u(-18,-9)
D.aC1=new B.u(-20,0)
D.dOT=new B.u(-20,16)
D.dOU=new B.u(-20,-9)
D.PX=new B.u(-22,8)
D.dOV=new B.u(-22,-10)
D.dOW=new B.u(-22,-11)
D.dOX=new B.u(-24,10)
D.dOY=new B.u(-24,11)
D.dOZ=new B.u(-24,14)
D.dP_=new B.u(-24,-22)
D.dP0=new B.u(-25,-11)
D.dP1=new B.u(-26,0)
D.dP2=new B.u(-26,-18)
D.dP3=new B.u(-2,9)
D.dP4=new B.u(-2,-10)
D.dP5=new B.u(-2,-20)
D.dP6=new B.u(-2,-9)
D.dP7=new B.u(-32,0)
D.aC3=new B.u(-34,0)
D.dPc=new B.u(-40,3)
D.dPe=new B.u(-4,11)
D.dPf=new B.u(-4,-17)
D.dPg=new B.u(-4,-2)
D.dPi=new B.u(-5,0)
D.dPj=new B.u(-5,20)
D.dPk=new B.u(-5,6)
D.dPl=new B.u(-6,26)
D.dPm=new B.u(-6,6)
D.dPn=new B.u(-6,-42)
D.dPo=new B.u(-7,-19)
D.dPp=new B.u(-7,-24)
D.dPq=new B.u(-8,-9)
D.a28=new B.u(-9,0)
D.dPr=new B.u(-9,1)
D.dPs=new B.u(-9,-23)
D.eUR=new B.x("Thinking\u2026",null,A.hu,null,null,null,null,null,null,null,null,null)
D.dQi=new B.C(A.kz,D.eUR,null)
D.f8H=new B.x("Start from a ready-made board",null,A.fS,null,null,null,null,null,null,null,null,null)
D.dQs=new B.C(A_.ut,D.f8H,null)
D.blf=new B.N(4,0,4,14)
D.eQz=new B.F(!0,A.az,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVJ=new B.x("Games and little helpers for a spare minute.",null,D.eQz,null,null,null,null,null,null,null,null,null)
D.dQA=new B.C(D.blf,D.eVJ,null)
D.f5N=new B.x("Tap to throw in a star",null,A.kl,null,null,null,null,null,null,null,null,null)
D.aY0=new B.cy(A.A,null,null,D.f5N,null)
D.dW6=new B.cH(0,null,0,14,null,null,D.aY0,null)
D.cST=w([A.iH,A.br],x.O)
D.aGN=new B.bR(A.A,0.5,A.x,null,0,D.cST,null,null)
D.dWO=new B.bR(A.A,0.5,A.x,null,0,D.atj,null,null)
D.cL3=w([A.c,A.bH],x.O)
D.dWQ=new B.bR(A.A,0.5,A.x,null,0,D.cL3,null,null)
D.dWR=new B.bR(A.A,0.5,A.x,null,0,K.ass,null,null)
D.cZW=w([A.bY,A.kZ],x.O)
D.aGO=new B.bR(A.A,0.5,A.x,null,0,D.cZW,null,null)
D.cr3=w([A.c,A.bY],x.O)
D.dWV=new B.bR(A.rd,0.5,A.x,null,0,D.cr3,null,null)
D.b3s=new B.w(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.b89=new B.w(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.cK8=w([D.b3s,D.abq,D.b89],x.O)
D.cR5=w([0,0.7,1],x.n)
D.dWX=new B.bR(A.rd,0.5,A.x,null,0,D.cK8,D.cR5,null)
D.c4t=w([A.fi,A.f_,A.k1],x.O)
D.dWY=new B.bR(O.pV,0.5,A.x,null,0,D.c4t,null,null)
D.chH=w([A.o6,A.aX,A.K],x.O)
D.cWX=w([0.3,0.7,1],x.n)
D.dWZ=new B.bR(A.A,0.5,A.x,null,0,D.chH,D.cWX,null)
D.cka=w([A.lo,A.o0],x.O)
D.dX_=new B.bR(K.a6p,0.5,A.x,null,0,D.cka,null,null)
D.bbh=new B.w(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.cYg=w([A.f3,D.bbh],x.O)
D.dX0=new B.bR(A.rd,0.5,A.x,null,0,D.cYg,null,null)
D.ckq=w([A.e0,A.cz],x.O)
D.dX1=new B.bR(A.A,0.5,A.x,null,0,D.ckq,null,null)
D.cFT=w([A.o6,A.aX,A.fy],x.O)
D.dX2=new B.bR(A.A,0.5,A.x,null,0,D.cFT,null,null)
D.cyM=w([A.fV,A.aK,A.dn],x.O)
D.dX4=new B.bR(A.rd,0.5,A.x,null,0,D.cyM,null,null)
D.cTo=w([A.kZ,I.o4],x.O)
D.dX5=new B.bR(A.rd,0.5,A.x,null,0,D.cTo,null,null)
D.b3D=new B.w(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.b1X=new B.w(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cI0=w([D.b3D,D.b1X],x.O)
D.dX7=new B.bR(A.A,0.5,A.x,null,0,D.cI0,null,null)
D.b7F=new B.w(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.b5V=new B.w(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.b5Z=new B.w(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.d0T=w([D.b7F,D.b5V,D.b5Z],x.O)
D.cEK=w([0,0.65,1],x.n)
D.dX8=new B.bR(K.a6r,0.5,A.x,null,0,D.d0T,D.cEK,null)
D.dX9=new B.bR(A.A,0.5,A.x,null,0,D.aq4,null,null)
D.cZd=w([A.lo,A.aX,A.fy],x.O)
D.dXd=new B.bR(A.A,0.5,A.x,null,0,D.cZd,null,null)
D.d_C=w([A.kZ,A.hw],x.O)
D.dXg=new B.bR(A.A,0.5,A.x,null,0,D.d_C,null,null)
D.aGT=new B.aY(9,9)
D.dXo=new B.aY(1.4,1.4)
D.dY1=new B.z(0,-4)
D.e1x=new B.z(0.22,4)
D.e8e=new B.z(0.8,-4)
D.egh=new B.z(0.58,4)
D.eiM=new B.bB("Moon",1.62,4291941851)
D.ejh=new B.bB("Neptune",11.15,4284524026)
D.ejQ=new B.bB("Sun",274,4294688548)
D.ek3=new B.bB("Mercury",3.7,4288455599)
D.ek9=new B.bB("Earth",9.81,4281908728)
D.ekb=new B.bB("Mars",3.71,4294472049)
D.eku=new B.bB("Venus",8.87,4294759245)
D.eky=new B.bB("Saturn",10.44,4294829706)
D.ekR=new B.bB("Jupiter",24.79,4294677052)
D.eo7=new B.a7(10,-8,18,-2)
D.eo8=new B.a7(14,-14,20,14)
D.eo9=new B.a7(20,-2,30,2)
D.eob=new B.a7(4,-13,30,-3)
D.eod=new B.a7(8,-7,12,7)
D.eoj=new B.a7(-12,12,12,19)
D.eok=new B.a7(-12,14,12,22)
D.eol=new B.a7(-12,-22,12,8)
D.eom=new B.a7(-12,-25,12,19)
D.eon=new B.a7(-12,-26,12,-6)
D.eoo=new B.a7(-12,-4,12,14)
D.eop=new B.a7(-12,-6,10,6)
D.eoq=new B.a7(-14,20,14,24)
D.eor=new B.a7(-14,6,14,10)
D.eos=new B.a7(-14,-17,14,15)
D.eot=new B.a7(-14,-26,14,18)
D.eou=new B.a7(-14,-4,14,20)
D.eov=new B.a7(-15,-29,15,25)
D.eow=new B.a7(-16,-16,16,16)
D.eox=new B.a7(-16,-22,-9,18)
D.eoy=new B.a7(-16,-24,16,-10)
D.eoz=new B.a7(-16,-2,16,20)
D.eoB=new B.a7(-18,20,18,24)
D.eoC=new B.a7(-18,-18,18,20)
D.eoD=new B.a7(-20,12,20,22)
D.eoE=new B.a7(-20,-28,20,26)
D.eoF=new B.a7(-22,14,22,18)
D.aHh=new B.a7(-22,-26,22,24)
D.eoG=new B.a7(-22,-3,22,3)
D.eoH=new B.a7(-22,-4,22,12)
D.eoI=new B.a7(-24,-12,10,22)
D.eoJ=new B.a7(-24,-14,22,8)
D.eoK=new B.a7(-24,-6,24,20)
D.aHi=new B.a7(-24,-9,24,9)
D.eoL=new B.a7(-25,14,25,19)
D.eoM=new B.a7(-26,-14,14,8)
D.eoN=new B.a7(-26,-4,26,20)
D.eoO=new B.a7(-26,-6,4,6)
D.aHj=new B.a7(-28,-13,28,13)
D.eoP=new B.a7(-28,-16,28,16)
D.eoQ=new B.a7(-28,-16,28,8)
D.eoR=new B.a7(-28,-22,28,22)
D.eoS=new B.a7(-30,-12,30,14)
D.eoT=new B.a7(-30,-14,0,14)
D.eoU=new B.a7(-30,-18,30,20)
D.eoV=new B.a7(-30,-28,30,14)
D.eoW=new B.a7(-30,-2,30,18)
D.eoX=new B.a7(-30,-4,30,18)
D.eoY=new B.a7(-32,-17,32,17)
D.eoZ=new B.a7(-32,-28,32,18)
D.ep_=new B.a7(-33,-21,33,17)
D.ep0=new B.a7(-34,14,34,26)
D.a31=new B.a7(-34,-18,34,18)
D.ep1=new B.a7(-34,-4,34,7)
D.ep2=new B.a7(-36,-24,36,20)
D.ep3=new B.a7(-38,-22,38,22)
D.ep4=new B.a7(-3,12,3,22)
D.ep5=new B.a7(-3,5,3,15)
D.ep7=new B.a7(-46,-34,46,28)
D.ep8=new B.a7(-48,-3,48,3)
D.epb=new B.a7(-6,18,24,24)
D.epc=new B.a7(-6,5,6,12)
D.epd=new B.a7(-6,-22,6,-15)
D.epe=new B.a7(-9,-16,9,22)
D.epf=new B.a7(-4.5,-24,4.5,-21.2)
D.eph=new B.a7(14,-9,17.5,9)
D.dLu={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aI7=new B.fa(D.dLu,5,x.U)
D.dLe={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.es_=new B.fa(D.dLe,10,x.U)
D.etW=new B.as(24,44)
D.eu0=new B.as(300,300)
D.euk=new B.as(54,38)
D.eur=new B.as(66,38)
D.aZd=new B.fe(2,null,null,null,null,A.bA,null,null,null,null)
D.evn=new B.a4(16,16,D.aZd,null)
D.aJ5=new B.hK(3,12,12,0.82,null)
D.ew8=new A5.b2Y(78,6,6,1,56)
D.fah=new B.x("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aJg=new B.b0(D.fah,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.cTq=w([A.cG,A.cu,A.bg,A.aY,A.oS,A.cG],x.O)
D.eBg=new B.fN(A.A,0,6.283185307179586,A.x,D.cTq,null,null)
D.eJJ=new B.F(!0,A.aK,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.O7,null,null,null)
D.eCk=new B.en("You are here (Sun)",null,null,A.cS,null,null,null,null,null,null,D.eJJ)
D.aLB=new B.F(!0,A.az,null,null,null,null,10.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCl=new B.en("What we see",null,null,A.cS,null,null,null,null,null,null,D.aLB)
D.eHf=new B.F(!0,F.a8X,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCo=new B.en("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cS,null,null,null,null,null,null,D.eHf)
D.eLP=new B.F(!0,A.jZ,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCt=new B.en("AI",null,null,A.cS,null,null,null,null,null,null,D.eLP)
D.eH0=new B.F(!0,A.c1,null,null,null,null,15,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCu=new B.en("Add atoms with the buttons below",null,null,A.cS,null,null,null,null,null,null,D.eH0)
D.aK3=new B.F(!0,A.c1,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCK=new B.F(!0,A.w,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCM=new B.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDg=new B.F(!0,A.bh,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDy=new B.F(!0,A.cC,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eE0=new B.F(!0,A.c1,null,null,null,null,11,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eE4=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEk=new B.F(!0,A.c,null,null,null,null,13.5,A.I,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEK=new B.F(!0,A.aQ,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eF5=new B.F(!0,A.c1,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFf=new B.F(!0,A.af,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esv=new B.cL(A.hB,A.dz,6)
D.cNA=w([D.esv],x.q)
D.eFy=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cNA,null,null,null)
D.eFB=new B.F(!0,A.eE,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFE=new B.F(!0,A.c,null,null,null,null,17,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFG=new B.F(!0,A.c1,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eG3=new B.F(!0,A.aK,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKq=new B.F(!0,A.c1,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGo=new B.F(!0,A.az,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGp=new B.F(!0,A.c1,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHi=new B.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHL=new B.F(!0,A.az,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eId=new B.F(!0,A.aK,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esy=new B.cL(A.aU,A.J,3)
D.atz=w([D.esy],x.q)
D.eIf=new B.F(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.atz,null,null,null)
D.eIk=new B.F(!0,A.c,null,null,null,null,12.5,A.a4,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJ_=new B.F(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.O7,null,null,null)
D.eJq=new B.F(!0,A.az,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJy=new B.F(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJX=new B.F(!0,A.ug,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKa=new B.F(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKt=new B.F(!0,A.bJ,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKx=new B.F(!0,A.c1,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKA=new B.F(!0,A.az,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKG=new B.F(!0,A.az,null,null,null,null,18,A.I,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eL7=new B.F(!0,A.c1,null,null,null,null,8.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLl=new B.F(!0,A.mA,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLm=new B.F(!0,A.af,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aL2=new B.F(!0,A.af,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLB=new B.F(!0,A.af,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4O=new B.F(!0,A.c,null,null,null,null,9.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eM8=new B.F(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esm=new B.cL(A.w,A.J,5)
D.cCy=w([D.esm],x.q)
D.eM9=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cCy,null,null,null)
D.eMe=new B.F(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.atz,null,null,null)
D.eMt=new B.F(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMy=new B.F(!0,A.fh,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMN=new B.F(!0,A.c1,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNh=new B.F(!0,A.bg,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNP=new B.F(!0,A.c1,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOt=new B.F(!0,A.az,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOB=new B.F(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLm=new B.F(!0,A.az,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eP4=new B.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePd=new B.F(!0,A.aK,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePk=new B.F(!0,A.aK,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.HI=new B.F(!0,A.af,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePF=new B.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLy=new B.F(!0,A.af,null,null,null,null,12,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePI=new B.F(!0,A.aK,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQp=new B.F(!0,A.aQ,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a52=new B.F(!0,A.c,null,null,null,null,13,A.a4,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQN=new B.F(!0,A.ug,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eR5=new B.F(!0,A.bg,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFJ=new B.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRt=new B.x("\u26a0\ufe0f ",null,D.eFJ,null,null,null,null,null,null,null,null,null)
D.eRE=new B.x("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.HH,null,null,null,null,null,null,null,null,null)
D.eS2=new B.x("LETTER COUNT OF THE SECRET VERSION",null,Q.ml,null,null,null,null,null,null,null,null,null)
D.eT1=new B.x("Pick one, then change it and see what happens.",null,A.HH,null,null,null,null,null,null,null,null,null)
D.eT5=new B.x("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.eGN=new B.F(!0,A.af,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTZ=new B.x("What do you want to invent? Type it below, or tap an idea.",null,D.eGN,null,null,null,null,null,null,null,null,null)
D.eUk=new B.x("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,S.a4h,null,null,null,null,null,null,null,null,null)
D.eVl=new B.x("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.eVU=new B.x("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hh,null,null,null,null,null,null,null,null,null)
D.eVZ=new B.x("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.eWw=new B.x("Make it yours",null,A.kQ,null,null,null,null,null,null,null,null,null)
D.eG5=new B.F(!0,A.az,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWL=new B.x("Your mass never changes. What changes is how hard each world pulls on it.",null,D.eG5,null,null,null,null,null,null,null,null,null)
D.eKL=new B.F(!0,A.j3,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYU=new B.x("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.eKL,null,null,null,null,null,null,null,null,null)
D.eZ8=new B.x("YOUR DECODING",null,Q.ml,null,null,null,null,null,null,null,null,null)
D.eZk=new B.x("5G",null,N.aKs,null,null,null,null,null,null,null,null,null)
D.eN2=new B.F(!0,A.c1,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_m=new B.x("WHAT HAPPENS",null,D.eN2,null,null,null,null,null,null,null,null,null)
D.eQ6=new B.F(!0,A.c,null,null,null,null,13,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0O=new B.x("NGMY Apps",null,D.eQ6,null,null,null,null,null,null,null,null,null)
D.f0T=new B.x("Check",null,null,null,null,null,null,null,null,null,null,null)
D.f1v=new B.x("Change the words and pictures on the three slabs.",null,A.HH,null,null,null,null,null,null,null,null,null)
D.f1F=new B.x("All the parts and wires will be removed.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.f1Y=new B.x("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.f2w=new B.x("Tap the crank on the board again and again to spin it faster.",null,A.hu,null,null,null,null,null,null,null,null,null)
D.f3j=new B.x("INTERCEPTED",null,Q.ml,null,null,null,null,null,null,null,null,null)
D.f3D=new B.x("\ud83c\udfaf Challenges",null,A.dP,null,null,null,null,null,null,null,null,null)
D.f47=new B.x("Remove this part",null,S.aK6,null,null,null,null,null,null,null,null,null)
D.f4o=new B.x("Clear the board?",null,A.dj,null,null,null,null,null,null,null,null,null)
D.eMz=new B.F(!0,A.bs,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4D=new B.x("How the Lab works",null,D.eMz,null,null,null,null,null,null,null,null,null)
D.eEu=new B.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4U=new B.x("Electronics Lab",null,D.eEu,null,null,null,null,A.a2,null,1,null,null)
D.f4W=new B.x("?",null,K.aLv,null,null,null,null,null,null,null,null,null)
D.eKF=new B.F(!0,A.aY,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5_=new B.x("Planet Earth",null,D.eKF,null,null,null,null,null,null,null,null,null)
D.f65=new B.x("Ready-made circuits",null,A.dP,null,null,null,null,null,null,null,null,null)
D.f6F=new B.x("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hu,null,null,null,null,null,null,null,null,null)
D.f6W=new B.x("UNIVERSE EXPLORER",null,F.a4p,null,null,null,null,null,null,null,null,null)
D.f9d=new B.x("SECRET VERSION",null,Q.ml,null,null,null,null,null,null,null,null,null)
D.ePo=new B.F(!0,A.aK,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9J=new B.x("\u26a0 There is no air here, so a parachute will not work.",null,D.ePo,null,null,null,null,null,null,null,null,null)
D.faS=new B.x("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,S.a4h,null,null,null,null,null,null,null,null,null)
D.fbj=new B.x("NGMY",null,A.tU,null,null,null,null,null,null,null,null,null)
D.fbv=new B.x("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.a4N,null,null,null,null,null,null,null,null,null)
D.fbQ=new B.x("Tap it to change its setting. Drag from the right dot to connect.",null,A.ld,null,null,null,null,null,null,null,null,null)
D.fcJ=new B.x("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.HH,null,null,null,null,null,null,null,null,null)
D.fcL=new B.x("TOOLBOX",null,F.a4p,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.fWR=null
$.fWQ=null
$.h1L=0
$.hti=B.T(x.N,x.k)
$.htT=B.T(x.N,x.k)
$.hnY=B.T(x.N,B.az("dz"))
$.caP=B.a([],B.az("O<ag6>"))
$.fTV=0
$.aZA="music"
$.fWc=null
$.htE=B.T(x.N,x.k)
$.huG=B.T(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hZC","bAo",()=>{var v="led"
return B.a([C.avy("Both together","Make the light glow only when BOTH switches are ON.",2,new C.f1d(),v),C.avy("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.f1e(),v),C.avy("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.f1f(),v),C.avy("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.f1m(),v),C.avy("Not both","Make the light go OFF only when both switches are ON.",2,new C.f1n(),v),C.avy("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.f1o(),"buzzer")],B.az("O<b7v>"))})
w($,"i_2","bAp",()=>B.a([C.ob("UNIVERSE","Earth, space and gravity",A.Yt,A.aY,new C.f1E()),C.ob("ELECTRONICS LAB","Batteries, wires, real circuits",Ac.XR,A.aY,new C.f1F()),C.ob("DISCOVERY LAB","Body Explorer: a real 3D human",D.XH,A.bg,new C.f1G()),C.ob("TOOLBOX","Converter, clock, games",I.ago,A.cM,new C.f1R()),C.ob("MOLECULE MAKER","Join atoms into real molecules",A.Ln,A.hn,new C.f1T()),C.ob("DNA LAB","Copy DNA, build a protein",D.XH,A.bX,new C.f1U()),C.ob("ECOSYSTEM LAB","Grass, rabbits and foxes",A.xe,A.bg,new C.f1V()),C.ob("BALANCE LAB","Levers, weight and torque",D.btL,A.aK,new C.f1W()),C.ob("GEAR LAB","Teeth, speed and force",A.EW,A.cM,new C.f1X()),C.ob("LASER MAZE","Bend the beam with mirrors",F.agI,A.aD,new C.f1Y()),C.ob("LIGHT MIXER","Match colours with light",D.brt,A.b6,new C.f1Z()),C.ob("CIPHER LAB","Make and crack secret codes",A.xp,A.aY,new C.f1H()),C.ob("REACTION LAB","Wire parts together",A.xt,A.bs,new C.f1I()),C.ob("SPARK PAINTER","Paint with light",A.XJ,A.bX,new C.f1J()),C.ob("ROCKET LANDER","Land softly on the pad",A.mQ,A.aY,new C.f1K()),C.ob("ORBIT STUDIO","Slingshot planets",A.m6,A.cM,new C.f1L()),C.ob("SWARM STUDIO","A living school of fish",A.Ln,A.bg,new C.f1M()),C.ob("CHAIN BURST","One tap, a whole chain",A.hq,A.bX,new C.f1N()),C.ob("TITLE ANIMATOR","Make a moving title",A.xl,A.cu,new C.f1O()),C.ob("CIRCUIT LAB","Connect logic, learn it",A.Ya,A.cC,new C.f1P()),C.ob("MARBLE MUSIC","Marbles ring the notes",D.br9,A.b6,new C.f1Q()),C.ob("ORBIT SEQUENCER","Planets play the tune",D.btz,A.bA,new C.f1S())],B.az("O<bp1>")))
w($,"i0w","pM",()=>{var v,u,t=B.T(x.N,x.dV)
for(v=0;v<76;++v){u=D.On[v]
t.m(0,u.a,u)}return t})
w($,"hZD","afx",()=>B.a([C.Eo("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.f1p()),C.Eo("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.f1q()),C.Eo("Spin the motor","A battery and a motor in a loop will make it spin.",new C.f1r()),C.Eo("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.f1s()),C.Eo("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.f1t()),C.Eo("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.f1g()),C.Eo("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.f1h()),C.Eo("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.f1i()),C.Eo("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.f1j()),C.Eo("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.f1k()),C.Eo("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.f1l())],B.az("O<b7w>")))
w($,"i_4","ha_",()=>B.a([C.ZV("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aK,A.cf,new C.f26()),C.ZV("Focus Timer","Work, then rest","\u23f1\ufe0f",A.cG,A.bM,new C.f27()),C.ZV("Breathe","Calm down in a minute","\ud83e\udee7",A.hn,A.cs,new C.f28()),C.ZV("Draw Pad","Sketch and share","\ud83c\udfa8",A.bx,A.b1,new C.f29()),C.ZV("Memory Match","Find the pairs","\ud83c\udccf",A.aY,A.c7,new C.f2a()),C.ZV("Simon Sounds","Copy the tune","\ud83c\udfb5",A.cu,A.bl,new C.f2b()),C.ZV("Tip & Split","Share the bill","\ud83e\uddfe",A.bg,A.aW,new C.f2c()),C.ZV("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bA,A.aB,new C.f2d())],B.az("O<bql>")))
w($,"i_3","h9Z",()=>B.a([C.acY("EARTH GLOBE","Turn it, tap a country",A.m6,A.aY,new C.f2_()),C.acY("SOLAR SYSTEM","The Sun and its worlds",D.brc,A.aK,new C.f20()),C.acY("GRAVITY LAB","Drop, weigh, orbit",D.ahr,A.cM,new C.f21()),C.acY("BLACK HOLE","Throw in a star",A.Ep,A.bA,new C.f22()),C.acY("GALAXY","Build, tilt, collide",A.x1,A.fU,new C.f23()),C.acY("SIZE COMPARE","Earth next to a star",D.brv,A.bX,new C.f24()),C.acY("SEASONS & MOON","Why it is summer",A.uC,A.bs,new C.f25())],B.az("O<bqg>")))})()};
(a=>{a["/ONLtejsNlRAtrrqH1GISGLMHNs="]=a.current})($__dart_deferred_initializers__);