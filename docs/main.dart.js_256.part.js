((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,U,E,N,Z,A_,A0,H,K,A1,A2,S,A3,A4,V,O,A5,A6,W,L,R,A7,A8,P,I,F,A={
buX(d){return A.huk(d)},
huk(d){var w=0,v=C.j(x.dk),u,t=2,s=[],r,q,p,o
var $async$buX=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qh(C.mE(""),d,B.h4,null).cJ(0,B.UE),$async$buX)
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
return C.i($async$buX,v)},
hFk(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<12;++u){t=D.Nv[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.dm(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.ad(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=B.d.kU(D.Nv,new A.fck())
if(w==null)w=B.d.gI(D.Nv)
s=C.R(x.N,x.D)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.J)(r),++u){l=r[u].a
k=l[0]
l=$.a0v().h(0,l[1])
l.toString
s.m(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.J)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+B.d.gI(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new A.ahb(w.a,w.b,m,w,s,!1)},
hzm(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.I(D.Nj,new A.f4a(),x.bd).aF(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
hMZ(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=B.a.cP(b2,"{")
v=B.a.nZ(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(B.Q.aC(0,B.a.al(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aZ(a5)
r=0
for(a6=x.a,a7=J.aW(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gT(a7)
p=C.t(J.q(q,"kind"))
o=C.t(J.q(q,"id"))
if(!$.a0v().am(0,p)||J.eR(s,o)||J.aa(t)>=8)continue
J.ci(s,o)
n=C.R(a5,a8)
for(a9=0;a9<4;++a9){m=D.cXQ[a9]
l=J.q(q,m)
if(typeof l=="number")J.aE(n,m,l)}k=B.k.D(typeof J.q(q,"x")=="number"?C.fc(J.q(q,"x")):0.2+B.k.J(r,3)*0.3,0.16,0.84)
j=B.k.D(typeof J.q(q,"y")=="number"?C.fc(J.q(q,"y")):0.25+B.k.ak(r,3)*0.3,0.1,0.9)
J.ci(t,new C.fA([o,p,k,j,n]));++r}if(J.aa(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aW(a6.a(J.q(u,"wires")));a5.C();){h=a5.gT(a5)
g=a6.a(h)
if(J.aa(g)<4)continue
f=C.t(J.q(g,0))
e=C.t(J.q(g,2))
d=B.o.D(B.k.M(C.fc(J.q(g,1))),0,1)
a0=B.o.D(B.k.M(C.fc(J.q(g,3))),0,1)
if(J.eR(s,f)&&J.eR(s,e)&&!J.y(f,e))J.ci(i,new C.d7([f,d,e,a0]))}if(J.aa(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.Q.a(J.q(u,"steps"))
a0=J.aW(a0==null?B.cO:a0)
while(a0.C()){a2=a0.gT(a0)
J.ci(a1,C.t(a2))}a3=a1
a0=J.q(u,"title")
a0=C.t(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new A.q0(a0,C.t(a1==null?"":a1),t,i,B.U)
a0=a4.a
a1=a4.b
d=J.aa(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.t(a5==null?"":a5)
return new A.ahb(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hDZ(d){var w,v,u=A.fy3()
d.B(u)
for(w=0;w<60;++w)u.a56(0,0.03333333333333333)
v=u.a
return B.d.be(v,new A.f9K(u))&&!B.d.e7(v,new A.f9L())},
hDY(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.R(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.J)(l),++u){t=l[u];++v
k.m(0,t.a,$.a0v().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.J)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.t(t.e)+" V")
if(p==="resistor")q.push(""+B.k.U(t.r)+" ohms")
if(B.d.q(D.cWt,p))q.push("level "+B.k.U(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.ax
o=p>0.05?"working (glow "+B.k.U(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+B.d.aF(q,", ")+")"
s.push(C.t(p)+n+": "+o+", current "+B.k.ab(Math.abs(t.at)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.J)(w),++u){m=w[u]
l.push(C.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+B.d.aF(s,"\n")+"\nWires: "+B.d.aF(l,"; ")},
hsY(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.J)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+B.d.aF(v,"\n")+"\n\n"}v=B.d.aF(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
hFj(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.a0v().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<16;++u){s=D.Nj[u]
if(B.d.be(w,new A.fch(s)))if(!C.dm(r,s.b.toLowerCase(),0))v=C.dm(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.ad("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a5(w,new A.fci(e),C.T(w).k("a5<1>")).gah(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.ad("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+B.k.ab(B.d.cI(w,0,new A.fcj())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.ad("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=B.d.gI(w)
w=$.a0v().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ahb:function ahb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fck:function fck(){},
f4a:function f4a(){},
f9K:function f9K(d){this.a=d},
f9L:function f9L(){},
fch:function fch(d){this.a=d},
fci:function fci(d){this.a=d},
fcj:function fcj(){},
Tl:function Tl(d){this.a=d},
bfU:function bfU(d,e,f,g,h,i){var _=this
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
dUB:function dUB(d){this.a=d},
dUC:function dUC(d,e,f){this.a=d
this.b=e
this.c=f},
dUD:function dUD(d){this.a=d},
dUO:function dUO(d){this.a=d},
dUP:function dUP(d,e){this.a=d
this.b=e},
dUK:function dUK(d){this.a=d},
dUI:function dUI(d,e){this.a=d
this.b=e},
dUJ:function dUJ(d,e,f){this.a=d
this.b=e
this.c=f},
dUL:function dUL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dUG:function dUG(d){this.a=d},
dUH:function dUH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUM:function dUM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dUF:function dUF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUN:function dUN(d,e){this.a=d
this.b=e},
dUE:function dUE(d,e){this.a=d
this.b=e},
dUS:function dUS(d){this.a=d},
dUR:function dUR(d){this.a=d},
dUT:function dUT(d){this.a=d},
dUQ:function dUQ(d){this.a=d},
dUU:function dUU(d,e){this.a=d
this.b=e},
dUV:function dUV(d,e){this.a=d
this.b=e},
dUW:function dUW(d,e){this.a=d
this.b=e},
dUX:function dUX(d,e){this.a=d
this.b=e},
bvh(d,e,f){var w=null
return C.u(C.a([C.d(d,w,w,w,w,w,w,D.aJe,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.R,0,B.p)},
fYy(d,e,f,g){var w=null,v=C.m(24),u=C.G(f.j(0.6),B.r,1)
return C.as(C.p(w,C.u(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.ar,C.d(e,w,w,w,w,w,w,B.Hg,B.L,w,w),B.ay,C.cb(B.fB,g,B.bw,0,8)],x.p),B.m,w,B.e,B.R,0,B.p),B.h,w,w,new C.o(D.Tb,w,u,v,w,w,B.n),w,w,w,w,B.a8,w,w,w),w,w,w)},
Ex:function Ex(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
u4:function u4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
TM:function TM(d){this.a=d},
aB5:function aB5(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fC$=j
_.fc$=k
_.bq$=l
_.a6$=m
_.c=_.a=null},
e8Z:function e8Z(){},
e9i:function e9i(d){this.a=d},
e9h:function e9h(d,e){this.a=d
this.b=e},
e9j:function e9j(){},
e9k:function e9k(){},
e90:function e90(d,e,f){this.a=d
this.b=e
this.c=f},
e9_:function e9_(d,e){this.a=d
this.b=e},
e8Q:function e8Q(d){this.a=d},
e8R:function e8R(d){this.a=d},
e8S:function e8S(d){this.a=d},
e8T:function e8T(d){this.a=d},
e8U:function e8U(d){this.a=d},
e8V:function e8V(d){this.a=d},
e8W:function e8W(d){this.a=d},
e8X:function e8X(d){this.a=d},
e8Y:function e8Y(d){this.a=d},
e8O:function e8O(d){this.a=d},
e8P:function e8P(d){this.a=d},
e8N:function e8N(d){this.a=d},
e9b:function e9b(d,e){this.a=d
this.b=e},
e96:function e96(d){this.a=d},
e97:function e97(d){this.a=d},
e93:function e93(d){this.a=d},
e98:function e98(d){this.a=d},
e92:function e92(d){this.a=d},
e99:function e99(d){this.a=d},
e9a:function e9a(d){this.a=d},
e91:function e91(d){this.a=d},
e9c:function e9c(d,e){this.a=d
this.b=e},
e95:function e95(d,e){this.a=d
this.b=e},
e9d:function e9d(d){this.a=d},
e9e:function e9e(d){this.a=d},
e9f:function e9f(d){this.a=d},
e9g:function e9g(d){this.a=d},
e94:function e94(d){this.a=d},
bcX:function bcX(d,e){this.b=d
this.a=e},
aIO:function aIO(){},
bsV:function bsV(){},
cye(){var w=0,v=C.j(x.E),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cye=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.tr().jR(0,"assets/data/body3d.bin"),$async$cye)
case 3:d=a1
$.fU0=J.eP(B.dz.gaL(d),d.byteOffset,d.byteLength)
t=C.bCO(d)
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
e=D.cMW[i]
g=C.aX((l<<16|h<<8|g|4278190080)>>>0)
r.push(new A.a0T(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aOT))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new A.b69(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cye,v)},
aOy:function aOy(d,e,f){this.a=d
this.b=e
this.c=f},
a0T:function a0T(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b69:function b69(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Se:function Se(d){this.a=d},
azx:function azx(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.fC$=u
_.fc$=v
_.bq$=w
_.a6$=a0
_.c=_.a=null},
dws:function dws(d){this.a=d},
dwr:function dwr(d,e){this.a=d
this.b=e},
dw4:function dw4(d,e){this.a=d
this.b=e},
dw5:function dw5(){},
dwt:function dwt(){},
dw6:function dw6(d,e){this.a=d
this.b=e},
dw7:function dw7(d){this.a=d},
dw8:function dw8(){},
dw9:function dw9(d){this.a=d},
dwb:function dwb(d,e){this.a=d
this.b=e},
dwa:function dwa(d){this.a=d},
dw1:function dw1(d,e,f){this.a=d
this.b=e
this.c=f},
dw2:function dw2(d){this.a=d},
dw3:function dw3(d){this.a=d},
dwi:function dwi(d){this.a=d},
dwj:function dwj(d,e){this.a=d
this.b=e},
dwk:function dwk(d,e){this.a=d
this.b=e},
dwl:function dwl(d){this.a=d},
dwh:function dwh(d,e){this.a=d
this.b=e},
dwm:function dwm(d,e){this.a=d
this.b=e},
dwg:function dwg(d,e){this.a=d
this.b=e},
dwn:function dwn(d){this.a=d},
dwf:function dwf(d){this.a=d},
dwo:function dwo(d){this.a=d},
dwe:function dwe(d){this.a=d},
dwp:function dwp(d){this.a=d},
dwd:function dwd(d){this.a=d},
dwq:function dwq(d){this.a=d},
dwc:function dwc(d){this.a=d},
aHR:function aHR(){},
aHS:function aHS(){},
bVL:function bVL(d){var _=this
_.a=d
_.d=_.c=_.b=null},
bVM:function bVM(d,e){this.a=d
this.b=e},
bVN:function bVN(d){this.a=d},
av6(d,e,f,g,h){return new A.b6S(d,e,f,g,h)},
fCA(d,e,f,g,h,i){return $.hqo.cg(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new A.cF0(d,e,f,i,g,h))},
x7:function x7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
B2:function B2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
mW:function mW(d,e,f){this.a=d
this.b=e
this.c=f},
b6S:function b6S(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eZN:function eZN(){},
eZO:function eZO(){},
eZP:function eZP(){},
eZT:function eZT(){},
eZU:function eZU(){},
eZV:function eZV(){},
Sj:function Sj(d){this.a=d},
azA:function azA(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.fC$=o
_.fc$=p
_.bq$=q
_.a6$=r
_.c=_.a=null},
dyD:function dyD(d){this.a=d},
dyh:function dyh(d,e){this.a=d
this.b=e},
dyk:function dyk(){},
dyE:function dyE(){},
dyf:function dyf(d,e){this.a=d
this.b=e},
dyg:function dyg(d,e){this.a=d
this.b=e},
dyl:function dyl(d,e,f){this.a=d
this.b=e
this.c=f},
dya:function dya(){},
dyb:function dyb(){},
dyc:function dyc(d){this.a=d},
dyd:function dyd(d,e){this.a=d
this.b=e},
dye:function dye(d,e,f){this.a=d
this.b=e
this.c=f},
dym:function dym(){},
dyn:function dyn(d,e){this.a=d
this.b=e},
dyo:function dyo(d){this.a=d},
dyj:function dyj(d,e){this.a=d
this.b=e},
dyi:function dyi(d){this.a=d},
dy9:function dy9(d,e,f){this.a=d
this.b=e
this.c=f},
dyx:function dyx(d){this.a=d},
dyw:function dyw(d){this.a=d},
dyy:function dyy(d){this.a=d},
dyv:function dyv(d){this.a=d},
dyt:function dyt(d){this.a=d},
dyu:function dyu(d){this.a=d},
dys:function dys(d){this.a=d},
dyp:function dyp(d){this.a=d},
dyr:function dyr(d){this.a=d},
dyz:function dyz(d,e){this.a=d
this.b=e},
dyA:function dyA(d,e){this.a=d
this.b=e},
dyB:function dyB(d){this.a=d},
dyq:function dyq(d){this.a=d},
dyC:function dyC(d,e){this.a=d
this.b=e},
b79:function b79(d,e){this.b=d
this.a=e},
cF0:function cF0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aHX:function aHX(){},
bsF:function bsF(){},
hhn(){return new A.Ls(null)},
ns(d,e,f,g,h){return new A.bol(d,e,f,g,h)},
bmN(d,e,f){return B.k.D((d-e)/(f-e),0,1)},
fD5(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Ls:function Ls(d){this.a=d},
ID:function ID(d,e){this.a=d
this.b=e},
zk:function zk(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
azR:function azR(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dDQ:function dDQ(d,e){this.a=d
this.b=e},
dDP:function dDP(d){this.a=d},
dDS:function dDS(d,e){this.a=d
this.b=e},
dDR:function dDR(d){this.a=d},
bol:function bol(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f_a:function f_a(){},
f_b:function f_b(){},
f_c:function f_c(){},
f_n:function f_n(){},
f_q:function f_q(){},
f_r:function f_r(){},
f_s:function f_s(){},
f_t:function f_t(){},
f_u:function f_u(){},
f_v:function f_v(){},
f_w:function f_w(){},
f_d:function f_d(){},
f_e:function f_e(){},
f_f:function f_f(){},
f_g:function f_g(){},
f_h:function f_h(){},
f_i:function f_i(){},
f_j:function f_j(){},
f_k:function f_k(){},
f_l:function f_l(){},
f_m:function f_m(){},
f_o:function f_o(){},
f_p:function f_p(){},
bmO:function bmO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eGQ:function eGQ(d){this.a=d},
eGP:function eGP(d,e){this.a=d
this.b=e},
eGN:function eGN(d){this.a=d},
eGR:function eGR(d){this.a=d},
eGO:function eGO(d,e){this.a=d
this.b=e},
acm:function acm(d,e,f){this.c=d
this.d=e
this.a=f},
abi:function abi(d,e,f){this.c=d
this.d=e
this.a=f},
O8:function O8(d,e,f,g,h,i,j,k,l,m){var _=this
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
bnM:function bnM(d,e){this.b=d
this.a=e},
bnh:function bnh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b5Q:function b5Q(d,e){this.b=d
this.a=e},
aE_:function aE_(d,e){this.c=d
this.a=e},
aE0:function aE0(d,e,f){var _=this
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
eGw:function eGw(d){this.a=d},
eGv:function eGv(d){this.a=d},
eGu:function eGu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGt:function eGt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGr:function eGr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGq:function eGq(d,e,f){this.a=d
this.b=e
this.c=f},
eGs:function eGs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGp:function eGp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGE:function eGE(d){this.a=d},
eGD:function eGD(d){this.a=d},
eGF:function eGF(d,e){this.a=d
this.b=e},
eGG:function eGG(d,e){this.a=d
this.b=e},
eGH:function eGH(d,e){this.a=d
this.b=e},
eGC:function eGC(d,e,f){this.a=d
this.b=e
this.c=f},
eGI:function eGI(d,e,f){this.a=d
this.b=e
this.c=f},
eGB:function eGB(d){this.a=d},
eGx:function eGx(d){this.a=d},
eGJ:function eGJ(d){this.a=d},
eGK:function eGK(d){this.a=d},
eGA:function eGA(d,e){this.a=d
this.b=e},
eGL:function eGL(d,e){this.a=d
this.b=e},
eGz:function eGz(d,e){this.a=d
this.b=e},
eGM:function eGM(d,e){this.a=d
this.b=e},
eGy:function eGy(d,e){this.a=d
this.b=e},
eGn:function eGn(){},
eGo:function eGo(){},
bms:function bms(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
blV:function blV(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b6w:function b6w(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
blX:function blX(d,e,f){this.b=d
this.c=e
this.a=f},
bpP:function bpP(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aJB:function aJB(){},
fZV(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ap(0,new C.v(w,0)),u=e.aD(0,new C.v(w,0)),t=1-f,s=3*t
return d.aP(0,t*t*t).ap(0,v.aP(0,s*t*f)).ap(0,u.aP(0,s*f*f)).ap(0,e.aP(0,f*f*f))},
bcW(d,e,f,g,h,i){return $.hqZ.cg(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new A.d8m(d,e,f,i,g,h))},
Z3:function Z3(d,e){this.a=d
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
B6:function B6(d,e){this.a=d
this.b=e},
X3:function X3(d,e){this.a=d
this.b=e},
acc:function acc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Zg:function Zg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Bg:function Bg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a9a:function a9a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a9r:function a9r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abm:function abm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcU:function bcU(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
d8q:function d8q(d){this.a=d},
d8r:function d8r(d){this.a=d},
d8n:function d8n(d,e){this.a=d
this.b=e},
d8o:function d8o(d){this.a=d},
d8p:function d8p(d){this.a=d},
d8s:function d8s(d){this.a=d},
d8t:function d8t(d){this.a=d},
d8u:function d8u(d){this.a=d},
d8v:function d8v(d){this.a=d},
d8w:function d8w(d){this.a=d},
d8x:function d8x(d){this.a=d},
d8y:function d8y(d){this.a=d},
d8z:function d8z(d){this.a=d},
d8A:function d8A(d){this.a=d},
Ek:function Ek(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
TL:function TL(d){this.a=d},
aB4:function aB4(d,e,f,g,h,i,j){var _=this
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
e8j:function e8j(d){this.a=d},
e88:function e88(d){this.a=d},
e8a:function e8a(){},
e8b:function e8b(){},
e8e:function e8e(){},
e8f:function e8f(d,e,f){this.a=d
this.b=e
this.c=f},
e8g:function e8g(d){this.a=d},
e8h:function e8h(d){this.a=d},
e8c:function e8c(){},
e8d:function e8d(d){this.a=d},
e8J:function e8J(d){this.a=d},
e8i:function e8i(){},
e84:function e84(d){this.a=d},
e8l:function e8l(d){this.a=d},
e8k:function e8k(d){this.a=d},
e8n:function e8n(){},
e8m:function e8m(d,e){this.a=d
this.b=e},
e87:function e87(){},
e85:function e85(d){this.a=d},
e86:function e86(d){this.a=d},
e8H:function e8H(d){this.a=d},
e8G:function e8G(d){this.a=d},
e8I:function e8I(d){this.a=d},
e8x:function e8x(d,e){this.a=d
this.b=e},
e8F:function e8F(d){this.a=d},
e8D:function e8D(d){this.a=d},
e8E:function e8E(d){this.a=d},
e8C:function e8C(d){this.a=d},
e8B:function e8B(d){this.a=d},
e8y:function e8y(d){this.a=d},
e8z:function e8z(d){this.a=d},
e8A:function e8A(d){this.a=d},
e89:function e89(){},
e8t:function e8t(d){this.a=d},
e8u:function e8u(d){this.a=d},
e8s:function e8s(d){this.a=d},
e8v:function e8v(d){this.a=d},
e8r:function e8r(d){this.a=d},
e8w:function e8w(d){this.a=d},
e8q:function e8q(d){this.a=d},
e8p:function e8p(d){this.a=d},
e8o:function e8o(d,e){this.a=d
this.b=e},
bcV:function bcV(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
d8m:function d8m(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aIM:function aIM(){},
bhp:function bhp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
O_:function O_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
U_:function U_(d){this.a=d},
bgu:function bgu(d,e,f,g,h,i,j,k){var _=this
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
eiu:function eiu(d){this.a=d},
eis:function eis(d){this.a=d},
eit:function eit(){},
ei5:function ei5(){},
ei4:function ei4(){},
eie:function eie(d,e){this.a=d
this.b=e},
eig:function eig(d){this.a=d},
eik:function eik(d){this.a=d},
eif:function eif(d){this.a=d},
eil:function eil(d){this.a=d},
eim:function eim(d){this.a=d},
ein:function ein(d,e){this.a=d
this.b=e},
eid:function eid(d,e){this.a=d
this.b=e},
eio:function eio(d){this.a=d},
eic:function eic(d){this.a=d},
eip:function eip(d,e){this.a=d
this.b=e},
eib:function eib(d,e){this.a=d
this.b=e},
eiq:function eiq(d){this.a=d},
eia:function eia(d,e){this.a=d
this.b=e},
eir:function eir(d){this.a=d},
ei9:function ei9(d){this.a=d},
eih:function eih(d){this.a=d},
ei8:function ei8(d){this.a=d},
eii:function eii(d){this.a=d},
ei7:function ei7(d){this.a=d},
eij:function eij(d,e){this.a=d
this.b=e},
ei6:function ei6(d,e){this.a=d
this.b=e},
bnH:function bnH(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
Ub:function Ub(d){this.a=d},
aBi:function aBi(d,e,f,g){var _=this
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
ep3:function ep3(d,e){this.a=d
this.b=e},
ep4:function ep4(d,e,f){this.a=d
this.b=e
this.c=f},
ep5:function ep5(d){this.a=d},
ep2:function ep2(){},
ep6:function ep6(d,e){this.a=d
this.b=e},
ep1:function ep1(d,e){this.a=d
this.b=e},
ep7:function ep7(d,e){this.a=d
this.b=e},
ep0:function ep0(d,e){this.a=d
this.b=e},
ep8:function ep8(d){this.a=d},
ep_:function ep_(d){this.a=d},
ep9:function ep9(d,e){this.a=d
this.b=e},
eoZ:function eoZ(d,e){this.a=d
this.b=e},
epa:function epa(d){this.a=d},
epb:function epb(d){this.a=d},
eoY:function eoY(d,e){this.a=d
this.b=e},
aIV:function aIV(){},
aJ0:function aJ0(){},
Yz:function Yz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
TJ:function TJ(d){this.a=d},
aAY:function aAY(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fC$=j
_.fc$=k
_.bq$=l
_.a6$=m
_.c=_.a=null},
e5j:function e5j(d){this.a=d},
e5k:function e5k(d,e){this.a=d
this.b=e},
e57:function e57(d,e){this.a=d
this.b=e},
e58:function e58(d){this.a=d},
e55:function e55(d){this.a=d},
e56:function e56(d){this.a=d},
e54:function e54(d){this.a=d},
e59:function e59(d){this.a=d},
e53:function e53(d,e){this.a=d
this.b=e},
e5b:function e5b(d){this.a=d},
e52:function e52(d,e){this.a=d
this.b=e},
e5c:function e5c(d){this.a=d},
e51:function e51(d,e){this.a=d
this.b=e},
e5d:function e5d(d){this.a=d},
e50:function e50(d){this.a=d},
e5e:function e5e(d){this.a=d},
e5_:function e5_(d){this.a=d},
e5f:function e5f(d){this.a=d},
e4Z:function e4Z(d){this.a=d},
e5g:function e5g(d){this.a=d},
e5h:function e5h(d){this.a=d},
e5i:function e5i(d){this.a=d},
e4Y:function e4Y(d){this.a=d},
e5a:function e5a(d){this.a=d},
bhc:function bhc(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
a9h:function a9h(d,e,f){this.a=d
this.b=e
this.c=f},
U6:function U6(d){this.a=d},
bgz:function bgz(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fC$=k
_.fc$=l
_.bq$=m
_.a6$=n
_.c=_.a=null},
eov:function eov(d){this.a=d},
eow:function eow(d){this.a=d},
eou:function eou(d){this.a=d},
eok:function eok(d,e){this.a=d
this.b=e},
eol:function eol(d){this.a=d},
eoi:function eoi(d){this.a=d},
eoj:function eoj(d){this.a=d},
eoh:function eoh(d){this.a=d},
eoa:function eoa(d){this.a=d},
eob:function eob(d){this.a=d},
eo9:function eo9(d){this.a=d},
eom:function eom(d,e){this.a=d
this.b=e},
eog:function eog(d,e){this.a=d
this.b=e},
eon:function eon(d,e){this.a=d
this.b=e},
eof:function eof(d,e){this.a=d
this.b=e},
eoo:function eoo(d){this.a=d},
eoe:function eoe(d){this.a=d},
eop:function eop(d){this.a=d},
eod:function eod(d,e){this.a=d
this.b=e},
eoq:function eoq(d){this.a=d},
eoc:function eoc(d,e){this.a=d
this.b=e},
eor:function eor(d){this.a=d},
eo8:function eo8(d,e){this.a=d
this.b=e},
eos:function eos(d){this.a=d},
eo7:function eo7(d,e){this.a=d
this.b=e},
eot:function eot(d){this.a=d},
eo6:function eo6(d,e){this.a=d
this.b=e},
box:function box(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
a9K:function a9K(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
Sh:function Sh(d){this.a=d},
azz:function azz(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fC$=j
_.fc$=k
_.bq$=l
_.a6$=m
_.c=_.a=null},
dxM:function dxM(d){this.a=d},
dxL:function dxL(d,e){this.a=d
this.b=e},
dxN:function dxN(){},
dxO:function dxO(d){this.a=d},
dxC:function dxC(d,e){this.a=d
this.b=e},
dxF:function dxF(d){this.a=d},
dxE:function dxE(d,e){this.a=d
this.b=e},
dxD:function dxD(d,e){this.a=d
this.b=e},
dxJ:function dxJ(d,e,f){this.a=d
this.b=e
this.c=f},
dxI:function dxI(d){this.a=d},
dxG:function dxG(d){this.a=d},
dxH:function dxH(d){this.a=d},
dxK:function dxK(d){this.a=d},
b6R:function b6R(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cEy:function cEy(d){this.a=d},
aHV:function aHV(){},
bsE:function bsE(){},
aIJ:function aIJ(){},
bsU:function bsU(){},
aIY:function aIY(){},
bt1:function bt1(){},
Eg:function Eg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
aay:function aay(d,e,f){this.a=d
this.b=e
this.c=f},
TD:function TD(d){this.a=d},
bg8:function bg8(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fC$=k
_.fc$=l
_.bq$=m
_.a6$=n
_.c=_.a=null},
e0N:function e0N(d,e){this.a=d
this.b=e},
e1b:function e1b(d){this.a=d},
e10:function e10(d){this.a=d},
e0S:function e0S(d){this.a=d},
e11:function e11(d,e){this.a=d
this.b=e},
e12:function e12(d){this.a=d},
e0R:function e0R(d){this.a=d},
e0Z:function e0Z(d){this.a=d},
e1_:function e1_(d){this.a=d},
e0Y:function e0Y(d){this.a=d},
e13:function e13(d,e){this.a=d
this.b=e},
e0X:function e0X(d,e){this.a=d
this.b=e},
e14:function e14(d,e){this.a=d
this.b=e},
e0W:function e0W(d,e){this.a=d
this.b=e},
e15:function e15(d,e){this.a=d
this.b=e},
e0V:function e0V(d,e){this.a=d
this.b=e},
e16:function e16(d){this.a=d},
e0U:function e0U(d,e){this.a=d
this.b=e},
e17:function e17(d){this.a=d},
e0T:function e0T(d){this.a=d},
e18:function e18(d){this.a=d},
e0Q:function e0Q(d){this.a=d},
e19:function e19(d){this.a=d},
e0P:function e0P(d){this.a=d},
e1a:function e1a(d){this.a=d},
e0O:function e0O(d){this.a=d},
bdP:function bdP(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
ab2:function ab2(d,e){this.a=d
this.b=e
this.c=-1000},
TI:function TI(d){this.a=d},
aAX:function aAX(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fC$=j
_.fc$=k
_.bq$=l
_.a6$=m
_.c=_.a=null},
e4H:function e4H(d,e){this.a=d
this.b=e},
e4I:function e4I(d,e,f){this.a=d
this.b=e
this.c=f},
e4P:function e4P(d){this.a=d},
e4O:function e4O(d){this.a=d},
e4Q:function e4Q(d,e){this.a=d
this.b=e},
e4R:function e4R(d){this.a=d},
e4N:function e4N(d){this.a=d},
e4S:function e4S(d){this.a=d},
e4M:function e4M(d,e){this.a=d
this.b=e},
e4T:function e4T(d,e){this.a=d
this.b=e},
e4L:function e4L(d,e){this.a=d
this.b=e},
e4U:function e4U(d,e){this.a=d
this.b=e},
e4K:function e4K(d,e){this.a=d
this.b=e},
e4V:function e4V(d){this.a=d},
e4W:function e4W(d){this.a=d},
e4J:function e4J(d){this.a=d},
e4X:function e4X(d){this.a=d},
bhd:function bhd(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aIH:function aIH(){},
bsS:function bsS(){},
aII:function aII(){},
bsT:function bsT(){},
eWd(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.G(e.j(0.4),B.r,1),s=x.p,r=C.a([C.C(C.d(d,w,w,w,w,w,w,D.a4t,w,w,w),1)],s)
if(f!=null)B.d.v(r,C.a([B.ab,f],s))
return C.p(w,C.A(r,B.m,w,B.e,B.j,0,w,w),B.h,w,w,new C.o(v,w,t,u,w,w,B.n),w,w,w,w,B.iD,w,w,1/0)},
hFJ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.R(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.J)(d),++u){t=d[u]
s=v.h(0,t)
v.m(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gG(j))return!1
for(j=j.gdH(j),j=j.gaf(j);j.C();){s=j.gT(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.bT(d.length,0,!1,w)
q=d.length
p=J.e_(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bD(0,new A.fcB(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.uQ.h(0,d[n]).a)return!1
m=C.eO([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.J)(j),++u){k=j[u]
if(m.H(0,k))l.push(k)}return m.a===d.length},
fFx(d){var w="TCAG",v=C.aI(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[B.a.cP(w,v[0])*16+B.a.cP(w,v[1])*4+B.a.cP(w,v[2])]},
rA:function rA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b5J:function b5J(d,e){this.a=d
this.b=e},
fcB:function fcB(d,e){this.a=d
this.b=e},
TG:function TG(d){this.a=d},
aAV:function aAV(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
e4b:function e4b(d){this.a=d},
e4a:function e4a(d,e){this.a=d
this.b=e},
e3Y:function e3Y(d,e){this.a=d
this.b=e},
e3S:function e3S(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3T:function e3T(d){this.a=d},
e3X:function e3X(d,e){this.a=d
this.b=e},
e3W:function e3W(d,e){this.a=d
this.b=e},
e3U:function e3U(d){this.a=d},
e3V:function e3V(d,e){this.a=d
this.b=e},
e45:function e45(){},
e46:function e46(d){this.a=d},
e44:function e44(d){this.a=d},
e47:function e47(d){this.a=d},
e43:function e43(d){this.a=d},
e41:function e41(d){this.a=d},
e42:function e42(d,e){this.a=d
this.b=e},
e3Z:function e3Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e40:function e40(d){this.a=d},
e48:function e48(d,e){this.a=d
this.b=e},
e4_:function e4_(d,e){this.a=d
this.b=e},
e49:function e49(d,e){this.a=d
this.b=e},
bev:function bev(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dgs:function dgs(d,e){this.a=d
this.b=e},
SE:function SE(d){this.a=d},
bfo:function bfo(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dFG:function dFG(d){this.a=d},
dFF:function dFF(d,e){this.a=d
this.b=e},
dFv:function dFv(d){this.a=d},
dFu:function dFu(){},
dFw:function dFw(d){this.a=d},
dFt:function dFt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dFE:function dFE(){},
dFz:function dFz(){},
dFA:function dFA(d,e){this.a=d
this.b=e},
dFy:function dFy(d,e){this.a=d
this.b=e},
dFB:function dFB(d){this.a=d},
dFx:function dFx(d){this.a=d},
dFC:function dFC(d,e){this.a=d
this.b=e},
dFD:function dFD(d,e){this.a=d
this.b=e},
SU:function SU(d){this.a=d},
aA2:function aA2(d,e,f,g,h){var _=this
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
dIv:function dIv(d){this.a=d},
dIu:function dIu(d,e){this.a=d
this.b=e},
dIi:function dIi(){},
dIh:function dIh(d,e){this.a=d
this.b=e},
dIj:function dIj(d){this.a=d},
dIn:function dIn(d){this.a=d},
dIm:function dIm(d,e){this.a=d
this.b=e},
dIo:function dIo(d){this.a=d},
dIl:function dIl(d,e){this.a=d
this.b=e},
dIp:function dIp(d){this.a=d},
dIk:function dIk(d,e){this.a=d
this.b=e},
dIq:function dIq(d){this.a=d},
dIr:function dIr(d){this.a=d},
dIs:function dIs(d){this.a=d},
dIt:function dIt(d){this.a=d},
b9T:function b9T(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
cY2:function cY2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cY4:function cY4(d,e,f){this.a=d
this.b=e
this.c=f},
cY3:function cY3(d,e){this.a=d
this.b=e},
aI7:function aI7(){},
bvN(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.G(e.j(0.4),B.r,1),s=x.p,r=C.a([C.C(C.d(d,w,w,w,w,w,w,D.a4t,w,w,w),1)],s)
if(f!=null)B.d.v(r,C.a([B.ab,f],s))
return C.p(w,C.A(r,B.m,w,B.e,B.j,0,w,w),B.h,w,w,new C.o(v,w,t,u,w,w,B.n),w,w,w,w,B.iD,w,w,1/0)},
f7z(d,e,f,g,h){var w,v,u=null,t=C.j0(u,u,u,u,C.dr(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),e),B.a5,B.cn,u,B.eL,B.cm)
t.fD()
w=t.b
v=w.c
w=w.a.c
w=f.aD(0,new C.v(v/2,w.gbd(w)/2))
t.a5(d,w)},
hCT(){var w,v,u,t,s,r,q,p,o=new C.f6()
o.dY(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+B.o.ak(t,4)
r=C.aZ(v)
q=C.a([],u)
while(q.length<s){p=1+o.aG(5)
if(r.H(0,p))q.push(new C.S(p,1+o.aG(2+B.o.ak(t,3))))}B.d.aY(q,new A.f8u())
w.push(new A.aOn(q))}return w},
a_s(d,e){var w,v,u,t
for(w=new C.Va(d),v="";w.C();){u=C.jv(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jv(65+B.o.J(B.o.J(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
hPa(d,e){var w,v,u,t,s,r,q,p=C.ad("[^A-Z]",!0,!1,!1,!1),o=C.aI(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.Va(d),v=0,u="";w.C();){t=C.jv(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=B.o.J(v,p)
u+=C.jv(65+B.o.J(B.o.J(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aOn:function aOn(d){this.a=d},
bBG:function bBG(){},
f8u:function f8u(){},
S9:function S9(d){this.a=d},
bf5:function bf5(d,e,f,g,h,i){var _=this
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
dtX:function dtX(){},
du9:function du9(d){this.a=d},
du8:function du8(d,e,f){this.a=d
this.b=e
this.c=f},
dua:function dua(d){this.a=d},
du7:function du7(d,e){this.a=d
this.b=e},
dtY:function dtY(d,e){this.a=d
this.b=e},
du2:function du2(){},
du3:function du3(d){this.a=d},
du1:function du1(d){this.a=d},
du4:function du4(d,e){this.a=d
this.b=e},
du0:function du0(d,e){this.a=d
this.b=e},
du5:function du5(d,e){this.a=d
this.b=e},
du_:function du_(d,e){this.a=d
this.b=e},
du6:function du6(d){this.a=d},
dtZ:function dtZ(d){this.a=d},
b5V:function b5V(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cx6:function cx6(d,e){this.a=d
this.b=e},
T7:function T7(d){this.a=d},
bfA:function bfA(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bq$=g
_.a6$=h
_.c=_.a=null},
dMi:function dMi(d){this.a=d},
dMh:function dMh(d,e){this.a=d
this.b=e},
dMj:function dMj(d){this.a=d},
dMg:function dMg(d,e){this.a=d
this.b=e},
dM8:function dM8(d,e,f){this.a=d
this.b=e
this.c=f},
dMc:function dMc(d){this.a=d},
dMb:function dMb(d){this.a=d},
dMd:function dMd(d,e){this.a=d
this.b=e},
dMa:function dMa(d,e){this.a=d
this.b=e},
dMe:function dMe(d){this.a=d},
dM9:function dM9(d,e){this.a=d
this.b=e},
dMf:function dMf(d,e){this.a=d
this.b=e},
bbk:function bbk(d,e,f){this.b=d
this.c=e
this.a=f},
d3V:function d3V(d,e){this.a=d
this.b=e},
d3W:function d3W(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Si:function Si(d){this.a=d},
bfi:function bfi(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dy8:function dy8(d){this.a=d},
dy7:function dy7(d,e){this.a=d
this.b=e},
dxR:function dxR(){},
dy_:function dy_(d){this.a=d},
dxZ:function dxZ(){},
dy0:function dy0(d){this.a=d},
dxY:function dxY(){},
dy1:function dy1(d){this.a=d},
dxX:function dxX(d){this.a=d},
dy2:function dy2(d){this.a=d},
dxW:function dxW(d){this.a=d},
dy3:function dy3(d){this.a=d},
dxV:function dxV(d){this.a=d},
dy4:function dy4(d,e){this.a=d
this.b=e},
dxU:function dxU(d,e){this.a=d
this.b=e},
dy5:function dy5(d){this.a=d},
dxT:function dxT(d,e){this.a=d
this.b=e},
dy6:function dy6(d){this.a=d},
dxS:function dxS(d,e){this.a=d
this.b=e},
aHN:function aHN(){},
aIf:function aIf(){},
h3M(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aD(0,e).gct()*0.1
return new C.v((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
fy3(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new A.a29(w,v,u,B.cA,C.R(x.N,x.y))},
hbg(d,e,f){var w=d.c,v=e===0?-42:42
return new C.v(w*f.a+v,d.d*f.b)},
mU:function mU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
vd:function vd(d,e,f,g){var _=this
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
a7T:function a7T(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
a8X:function a8X(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a29:function a29(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.w=0
_.x=h},
bH1:function bH1(){},
bHb:function bHb(d){this.a=d},
bH7:function bH7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bHd:function bHd(d){this.a=d},
bHe:function bHe(d){this.a=d},
bHc:function bHc(d){this.a=d},
bHf:function bHf(d,e,f){this.a=d
this.b=e
this.c=f},
bHg:function bHg(d){this.a=d},
bH3:function bH3(d){this.a=d},
bH4:function bH4(d){this.a=d},
bH2:function bH2(d){this.a=d},
bH5:function bH5(d,e,f){this.a=d
this.b=e
this.c=f},
bH6:function bH6(d){this.a=d},
bHa:function bHa(d){this.a=d},
bH9:function bH9(d){this.a=d},
bH8:function bH8(d){this.a=d},
aOx:function aOx(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bCt:function bCt(){},
bCu:function bCu(){},
q0:function q0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ceL:function ceL(d){this.a=d},
fKo(d,e,f,g,h){return new A.afZ(d,h,e,g,f)},
Wz(d,e,f){return new A.b6T(d,e,f)},
afZ:function afZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.f=f
_.w=g
_.a=h},
ag_:function ag_(d,e,f,g,h,i,j,k){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.fb$=f
_.ku$=g
_.fC$=h
_.fc$=i
_.bq$=j
_.a6$=k
_.c=_.a=null},
bCq:function bCq(){},
bCr:function bCr(){},
bC_:function bC_(){},
bCs:function bCs(d,e){this.a=d
this.b=e},
bCo:function bCo(d,e,f){this.a=d
this.b=e
this.c=f},
bCk:function bCk(d){this.a=d},
bCh:function bCh(d,e,f){this.a=d
this.b=e
this.c=f},
bCi:function bCi(d,e){this.a=d
this.b=e},
bCl:function bCl(d){this.a=d},
bCf:function bCf(d,e){this.a=d
this.b=e},
bCg:function bCg(d,e){this.a=d
this.b=e},
bCj:function bCj(d){this.a=d},
bCm:function bCm(d){this.a=d},
bCd:function bCd(d,e){this.a=d
this.b=e},
bCe:function bCe(d,e){this.a=d
this.b=e},
bCn:function bCn(d){this.a=d},
bCp:function bCp(d,e){this.a=d
this.b=e},
bCa:function bCa(d,e){this.a=d
this.b=e},
bCc:function bCc(d,e){this.a=d
this.b=e},
bCb:function bCb(d,e){this.a=d
this.b=e},
bC3:function bC3(d,e){this.a=d
this.b=e},
bC4:function bC4(d){this.a=d},
bC2:function bC2(d){this.a=d},
bC5:function bC5(d,e,f){this.a=d
this.b=e
this.c=f},
bC1:function bC1(d,e){this.a=d
this.b=e},
bC6:function bC6(d,e,f){this.a=d
this.b=e
this.c=f},
bC0:function bC0(d,e){this.a=d
this.b=e},
bC7:function bC7(d){this.a=d},
bC8:function bC8(d){this.a=d},
bC9:function bC9(d){this.a=d},
b6T:function b6T(d,e,f){this.a=d
this.b=e
this.c=f},
eZW:function eZW(){},
eZX:function eZX(){},
eZY:function eZY(){},
eZM:function eZM(){},
eZZ:function eZZ(){},
eZL:function eZL(){},
f__:function f__(){},
eZQ:function eZQ(){},
eZK:function eZK(){},
eZR:function eZR(){},
eZJ:function eZJ(){},
eZS:function eZS(){},
eZI:function eZI(){},
SV:function SV(d){this.a=d},
aA3:function aA3(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.w=0
_.c=_.a=null},
dIB:function dIB(){},
dIA:function dIA(d){this.a=d},
dIz:function dIz(d,e,f){this.a=d
this.b=e
this.c=f},
dIy:function dIy(d,e){this.a=d
this.b=e},
dID:function dID(d,e){this.a=d
this.b=e},
dIC:function dIC(d,e){this.a=d
this.b=e},
dIE:function dIE(d){this.a=d},
dIF:function dIF(d){this.a=d},
auz:function auz(){},
b67:function b67(){},
f38(d,e,f,g){var w=null,v=C.m(24),u=C.G(f.j(0.6),B.r,1)
return C.as(C.p(w,C.u(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.ar,C.d(e,w,w,w,w,w,w,B.Hg,B.L,w,w),B.ay,C.cb(B.fB,g,B.bw,0,8)],x.p),B.m,w,B.e,B.R,0,B.p),B.h,w,w,new C.o(D.Tb,w,u,v,w,w,B.n),w,w,w,B.em,B.a8,w,w,w),w,w,w)},
fG0(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.f6()
b4.dY(b5*977+13)
w=B.o.D(1+B.o.ak(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aG(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.R(u,t)
m=w
l=0
k=K.ps
j=!0
i=0
for(;;){if(!(j&&i<12))break
A:{++i
h=2+b4.aG(4)
for(g=k.a,f=k.b,e=0;e<h;r=a0,l=d){d=l+g
a0=r+f
if(d<0||a0<0||d>=7||a0>=7){e=99
break}a1=a0*7+d
if(B.d.q(p,a1)||a1===q){j=!1
break}p.push(a1);++e}if(!j||e>=99||m===0)break
a2=b4.hd()?new C.S(f,-g):new C.S(-f,g)
a3=new C.S(-f,-g).A(0,a2)
a4=l+a2.a
a5=r+a2.b
if(a4<0||a5<0||a4>=7||a5>=7)break A
o.push(r*7+l);--m
g=B.d.gai(o)
n.m(0,g,a3?"/":"\\")
k=a2}}if(!j||o.length<w||p.length<5)continue
g=C.a([],v)
for(f=p.length,a6=0;a6<p.length;p.length===f||(0,C.J)(p),++a6){a7=p[a6]
if(!B.d.q(o,a7))g.push(a7)}if(g.length<3)continue
a8=B.o.D(2+B.o.ak(b5,8),2,4)
a9=C.eO([B.d.gai(g)],u)
B.d.fN(g,b4)
for(v=g.length,a6=0;a6<g.length;g.length===v||(0,C.J)(g),++a6){a7=g[a6]
if(a9.a>=a8)break
a9.H(0,a7)}b0=C.aZ(u)
b1=3+B.o.ak(b5,3)
v=q+1
b2=0
for(;;){if(b0.a<b1){b3=b2+1
g=b2<200
b2=b3}else g=!1
if(!g)break
B:{a7=b4.aG(49)
if(B.d.q(p,a7)||a7===q||a9.q(0,a7)||B.d.q(o,a7))break B
if(a7===v)break B
b0.H(0,a7)}}v=b5>=10?1:0
return new A.aSO(b0,a9,C.R(u,t),q,K.ps,w+v)}return new A.aSO(C.aZ(u),C.eO([25],u),C.R(u,t),21,K.ps,1)},
h3H(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aZ(x.S),n=d.e,m=B.o.J(n,7),l=B.o.ak(n,7),k=d.f
p.push(n)
for(n=d.c,w=d.b,v=d.d,u=0;u<200;++u){t=k.a
m+=t
s=k.b
l+=s
if(m<0||l<0||m>=7||l>=7)break
r=l*7+m
if(w.q(0,r))break
p.push(r)
if(n.q(0,r))o.H(0,r)
q=e.h(0,r)
if(q==null)q=v.h(0,r)
if(q==="/")k=new C.S(-s,-t)
if(q==="\\")k=new C.S(k.b,k.a)}return new C.bkc(p,o)},
h_8(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aSO:function aSO(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
Tq:function Tq(d){this.a=d},
bfW:function bfW(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.fb$=g
_.ku$=h
_.fC$=i
_.fc$=j
_.bq$=k
_.a6$=l
_.c=_.a=null},
dXB:function dXB(d){this.a=d},
dXA:function dXA(d,e){this.a=d
this.b=e},
dXC:function dXC(){},
dXr:function dXr(d,e){this.a=d
this.b=e},
dXs:function dXs(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dXv:function dXv(d,e){this.a=d
this.b=e},
dXt:function dXt(d){this.a=d},
dXu:function dXu(d){this.a=d},
dXw:function dXw(d){this.a=d},
dXx:function dXx(d){this.a=d},
dXy:function dXy(d){this.a=d},
dXz:function dXz(d,e){this.a=d
this.b=e},
bd_:function bd_(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
d8J:function d8J(d,e,f){this.a=d
this.b=e
this.c=f},
d8M:function d8M(d,e,f){this.a=d
this.b=e
this.c=f},
d8K:function d8K(d){this.a=d},
d8L:function d8L(d){this.a=d},
Ts:function Ts(d){this.a=d},
aAH:function aAH(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.fb$=g
_.ku$=h
_.fC$=i
_.fc$=j
_.bq$=k
_.a6$=l
_.c=_.a=null},
dXU:function dXU(d){this.a=d},
dXT:function dXT(d,e){this.a=d
this.b=e},
dXV:function dXV(){},
dXF:function dXF(){},
dXO:function dXO(d,e){this.a=d
this.b=e},
dXL:function dXL(d){this.a=d},
dXH:function dXH(d){this.a=d},
dXM:function dXM(d){this.a=d},
dXN:function dXN(d){this.a=d},
dXG:function dXG(d){this.a=d},
dXP:function dXP(d){this.a=d},
dXK:function dXK(d,e){this.a=d
this.b=e},
dXQ:function dXQ(d){this.a=d},
dXJ:function dXJ(d,e){this.a=d
this.b=e},
dXR:function dXR(d){this.a=d},
dXI:function dXI(d,e){this.a=d
this.b=e},
dXS:function dXS(d){this.a=d},
bde:function bde(d,e){this.b=d
this.a=e},
aIw:function aIw(){},
bsL:function bsL(){},
aIx:function aIx(){},
bsM:function bsM(){},
Zy(d,e,f,g,h,i){return new A.bpF(d,e,f,g,h,i)},
bpF:function bpF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f_E:function f_E(){},
f_F:function f_F(){},
f_G:function f_G(){},
f_H:function f_H(){},
f_I:function f_I(){},
f_J:function f_J(){},
f_K:function f_K(){},
f_L:function f_L(){},
a5Y:function a5Y(d){this.a=d},
c9A:function c9A(d){this.a=d},
c9B:function c9B(){},
c9z:function c9z(d,e){this.a=d
this.b=e},
c9y:function c9y(d){this.a=d},
Ug:function Ug(d){this.a=d},
aBu:function aBu(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.fb$=f
_.ku$=g
_.fC$=h
_.fc$=i
_.bq$=j
_.a6$=k
_.c=_.a=null},
et9:function et9(d){this.a=d},
et5:function et5(d){this.a=d},
et4:function et4(d,e){this.a=d
this.b=e},
et7:function et7(d,e){this.a=d
this.b=e},
et6:function et6(d,e){this.a=d
this.b=e},
et8:function et8(d){this.a=d},
br_:function br_(d,e,f){this.b=d
this.c=e
this.a=f},
T1:function T1(d){this.a=d},
bfv:function bfv(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.fb$=d
_.ku$=e
_.fC$=f
_.fc$=g
_.bq$=h
_.a6$=i
_.c=_.a=null},
dKB:function dKB(){},
dKC:function dKC(){},
dKw:function dKw(d,e){this.a=d
this.b=e},
dKy:function dKy(d,e){this.a=d
this.b=e},
dKz:function dKz(d){this.a=d},
dKx:function dKx(d){this.a=d},
dKA:function dKA(d){this.a=d},
blW:function blW(d,e,f){this.b=d
this.c=e
this.a=f},
Sf:function Sf(d){this.a=d},
bfa:function bfa(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.fb$=d
_.ku$=e
_.fC$=f
_.fc$=g
_.bq$=h
_.a6$=i
_.c=_.a=null},
dwz:function dwz(){},
dwA:function dwA(){},
dwu:function dwu(){},
dwx:function dwx(d,e){this.a=d
this.b=e},
dww:function dww(d,e){this.a=d
this.b=e},
dwy:function dwy(d){this.a=d},
dwv:function dwv(d){this.a=d},
aEQ:function aEQ(d,e,f){this.a=d
this.b=e
this.c=f},
ST:function ST(d){this.a=d},
bfp:function bfp(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dI7:function dI7(d,e){this.a=d
this.b=e},
dI8:function dI8(d){this.a=d},
dI6:function dI6(d,e){this.a=d
this.b=e},
dI9:function dI9(d){this.a=d},
dI5:function dI5(d,e){this.a=d
this.b=e},
dIa:function dIa(d){this.a=d},
dI4:function dI4(d,e){this.a=d
this.b=e},
dIb:function dIb(d,e){this.a=d
this.b=e},
dI3:function dI3(d,e){this.a=d
this.b=e},
dIc:function dIc(d){this.a=d},
dI2:function dI2(d,e){this.a=d
this.b=e},
dId:function dId(d){this.a=d},
dI1:function dI1(d){this.a=d},
dIe:function dIe(d){this.a=d},
dI0:function dI0(d){this.a=d},
dIf:function dIf(d){this.a=d},
dIg:function dIg(d){this.a=d},
dI_:function dI_(d){this.a=d},
bhq:function bhq(d,e,f){this.b=d
this.c=e
this.a=f},
TE:function TE(d){this.a=d},
aAR:function aAR(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
e21:function e21(d,e){this.a=d
this.b=e},
e22:function e22(d,e,f){this.a=d
this.b=e
this.c=f},
e20:function e20(d,e,f){this.a=d
this.b=e
this.c=f},
e23:function e23(d){this.a=d},
e2_:function e2_(d){this.a=d},
e27:function e27(d){this.a=d},
e26:function e26(d,e){this.a=d
this.b=e},
e25:function e25(d,e){this.a=d
this.b=e},
e28:function e28(d,e){this.a=d
this.b=e},
e24:function e24(d,e){this.a=d
this.b=e},
e29:function e29(d){this.a=d},
TQ:function TQ(d){this.a=d},
aB9:function aB9(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eaw:function eaw(d){this.a=d},
eax:function eax(d){this.a=d},
eau:function eau(d,e){this.a=d
this.b=e},
eav:function eav(d){this.a=d},
eat:function eat(d){this.a=d},
eay:function eay(d){this.a=d},
eaz:function eaz(d){this.a=d},
eaA:function eaA(d){this.a=d},
eaB:function eaB(d,e){this.a=d
this.b=e},
Ua:function Ua(d){this.a=d},
bgD:function bgD(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eoO:function eoO(){},
eoX:function eoX(){},
eoT:function eoT(d){this.a=d},
eoS:function eoS(){},
eoU:function eoU(d,e){this.a=d
this.b=e},
eoR:function eoR(d,e){this.a=d
this.b=e},
eoV:function eoV(d){this.a=d},
eoQ:function eoQ(d,e){this.a=d
this.b=e},
eoW:function eoW(d){this.a=d},
eoP:function eoP(d){this.a=d},
TC:function TC(d){this.a=d},
bg6:function bg6(d,e,f,g,h,i,j,k){var _=this
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
_.fC$=h
_.fc$=i
_.bq$=j
_.a6$=k
_.c=_.a=null},
e0H:function e0H(){},
e0I:function e0I(){},
e0A:function e0A(d){this.a=d},
e0z:function e0z(d){this.a=d},
e0B:function e0B(d){this.a=d},
e0y:function e0y(d){this.a=d},
e0C:function e0C(d){this.a=d},
e0x:function e0x(d){this.a=d},
e0D:function e0D(d,e){this.a=d
this.b=e},
e0w:function e0w(d,e){this.a=d
this.b=e},
e0E:function e0E(d){this.a=d},
e0v:function e0v(d,e){this.a=d
this.b=e},
e0F:function e0F(d){this.a=d},
e0u:function e0u(d,e){this.a=d
this.b=e},
e0G:function e0G(d){this.a=d},
e0t:function e0t(d,e){this.a=d
this.b=e},
b9e:function b9e(d,e,f){this.c=d
this.d=e
this.a=f},
aHT:function aHT(){},
bsD:function bsD(){},
aIa:function aIa(){},
bsH:function bsH(){},
aIF:function aIF(){},
bsR:function bsR(){},
aJ7:function aJ7(){},
bt2:function bt2(){},
je(d,e,f,g,h,i){return new A.b2W(h,d,f,g,i,e,null)},
hOG(d,e,f,g){var w=null
return C.cg(w,w,!0,w,new A.fvU(g,e,f),d,w,!0,!0,x.H)},
hp(d,e,f,g,h,i,j){return new A.asI(f,j,i,h,g,d,e,null)},
qj(d,e,f){return A.hOO(d,e,f)},
hOO(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qj=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aS.ae$.x.h(0,e)
n=n==null?null:n.gb3()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.lP(2),$async$qj)
case 7:q=h
w=8
return C.b(q.he(B.fI),$async$qj)
case 8:p=h
if(p==null){w=1
break}o=J.f2(B.dz.gaL(p))
w=9
return C.b(A.cjL(C.a([A.fTM(o,"image/png",f+".png")],x.C),"Made in NGMY Core Protocol"),$async$qj)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.F(x.U).f.P(D.aI4)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qj,v)},
hl4(b4,b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=B.o.ak(22050*b5,1000),b1=b0*2,b2=new DataView(new ArrayBuffer(44+b1)),b3=new A.c9u(b2)
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
w=new C.f6()
w.dY(3)
v=3
u=0.006
t=!1
s=0
switch(b8){case"piano":r=D.cC8
q=D.cGO
v=3.4
break
case"organ":r=D.cFQ
q=D.cTp
u=0.02
t=!0
break
case"bell":r=D.cy8
q=D.cx8
v=2.4
break
case"pluck":r=D.cC7
q=D.cjh
v=7
break
case"synth":r=D.cUd
q=D.cVL
u=0.012
t=!0
break
case"flute":r=D.cZq
q=D.bV2
u=0.07
t=!0
s=0.035
break
default:r=D.ajN
q=D.ajN}b1=r.length
p=C.bT(b1,0,!1,x.i)
for(o="saw"===b6,n="tri"===b6,m="noise"===b6,l="square"===b6,k=b8.length!==0,j=-v,i=j*0.12,h=s>0,g=b8!=="bell",f=b8!=="piano",e=b8==="pluck",d=0,a0=0;a0<b0;++a0){a1=a0/22050
a2=1-a0/b0
a3=b4*(1+b7*a2)
if(k){for(a2=6.283185307179586*a3,a4=j*a1,a5=0,a6=0;a6<b1;++a6){a7=p[a6]+a2*q[a6]/22050
p[a6]=a7
a8=!g||!f||e?Math.exp(a4*(1+a6*0.35)):1
a5+=Math.sin(a7)*r[a6]*a8}a5/=1.9
if(h)a5+=(w.ag()*2-1)*s
a9=Math.min(1,a1/u)*Math.min(1,(b0-a0)/1984.5)
a5*=t?a9:a9*Math.exp(i*a1)}else{d+=6.283185307179586*a3/22050
A:{if(l){a4=Math.sin(d)>=0?0.6:-0.6
break A}if(m){a4=(w.ag()*2-1)*0.8
break A}if(n){a4=0.6366197723675814*Math.asin(Math.sin(d))
break A}if(o){a4=B.k.J(d/6.283185307179586,1)*1.2-0.6
break A}a4=Math.sin(d)
break A}a5=a4*(Math.min(1,a0/120)*Math.pow(a2,1.6))}b2.setInt16(44+a0*2,B.o.D(B.k.U(a5*0.8*32e3),-32768,32767),!0)}return J.f2(B.dz.gaL(b2))},
e1(d,e,f,g,h,i){return A.hl5(d,e,f,g,h,i)},
hl5(d,e,f,g,h,i){var w=0,v=C.j(x.H),u=1,t=[],s,r,q,p,o,n
var $async$e1=C.e(function(j,k){if(j===1){t.push(k)
w=u}for(;;)switch(w){case 0:u=3
s=""+B.k.U(d)+"|"+f+"|"+i+"|"+C.t(g)+"|"+e
r=$.hl3.cg(0,s,new A.c9w(d,f,i,g,e))
if($.c9t.length<12){p=C.afM()
p.Lk(B.aGb)
$.c9t.push(p)}p=$.fR4
$.fR4=p+1
q=$.c9t[B.o.J(p,$.c9t.length)]
w=6
return C.b(J.h8q(q,new C.a0Z(r,null),h),$async$e1)
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
l_(d,e,f,g){var w,v=$.c9x
if(v==="music")return A.e1(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return A.e1(261.63*v,w,f,0,g,"sine")}return A.v8(v,e,f,g)},
v8(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,B.o.D(e,-12,36)/12),s=Math.min(f,260)
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
As(d,e,f,g){var w,v,u,t,s,r,q,p=$.c9x
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.J)(e),++w)A.l_(d,e[w],f,g)
return}for(p=C.dc(e,0,C.dJ(4,"count",x.S),C.T(e).c),v=p.$ti,p=new C.bR(p,p.gG(0),v.k("bR<ai.E>")),u=x.H,v=v.k("ai.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)A.l_(d,s,f,g)
else C.bK(new C.b7(1000*q),new A.c9v(d,s,f,g),u)}},
a5X(d,e){var w="sine",v="noise"
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
yp(d){return A.hkm(d)},
hkm(d){var w=0,v=C.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l
var $async$yp=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.aw(),$async$yp)
case 7:r=f
q=C.aR(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=C.R(x.N,x.z)
w=1
break}p=B.Q.aC(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?C.Z(p,o,n):C.R(o,n)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=C.R(x.N,x.z)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$yp,v)},
v5(d,e){return A.hkn(d,e)},
hkn(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$v5=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aw(),$async$v5)
case 6:s=g
w=7
return C.b(s.an("String","ngmy_play_progress_v1_"+d,B.Q.aj(e,null)),$async$v5)
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
return C.i($async$v5,v)},
b2W:function b2W(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
clG:function clG(d){this.a=d},
clH:function clH(d,e){this.a=d
this.b=e},
fvU:function fvU(d,e,f){this.a=d
this.b=e
this.c=f},
fvT:function fvT(d){this.a=d},
dx:function dx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
clC:function clC(d){this.a=d},
eF:function eF(d,e,f){this.c=d
this.d=e
this.a=f},
asI:function asI(d,e,f,g,h,i,j,k){var _=this
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
clB:function clB(d){this.a=d},
DP:function DP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
clI:function clI(d){this.a=d},
m9:function m9(){},
clD:function clD(d,e,f){this.a=d
this.b=e
this.c=f},
clF:function clF(d){this.a=d},
clE:function clE(){},
c9u:function c9u(d){this.a=d},
c9w:function c9w(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c9v:function c9v(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
coc(){var w=0,v=C.j(x.cL),u,t
var $async$coc=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=A
w=3
return C.b($.tr().bag("assets/data/world110.json"),$async$coc)
case 3:u=t.hoQ(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$coc,v)},
hoQ(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.a,a0=d.a(B.Q.aC(0,a2,null)),a1=C.a([],x.B)
for(w=J.aW(a0),v=x.n,u=x.b,t=x.h,s=x.gO;w.C();){r=t.a(w.gT(w))
q=C.a([],s)
for(p=J.a6(r),o=J.aW(d.a(p.h(r,"r")));o.C();){n=o.gT(o)
m=C.a([],u)
for(l=J.aW(d.a(n));l.C();){k=l.gT(l)
j=J.a6(k)
m.push(C.a([C.fc(j.h(k,0)),C.fc(j.h(k,1))],v))}q.push(m)}o=C.cJ(p.h(r,"n"))
m=C.cJ(p.h(r,"a"))
l=C.cJ(p.h(r,"ct"))
j=C.cJ(p.h(r,"sr"))
i=C.fc(p.h(r,"pop"))
h=C.fc(p.h(r,"gdp"))
g=C.cJ(p.h(r,"inc"))
f=C.ad("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aMT(g,f,"",0)
f=C.fc(J.q(p.h(r,"c"),0))
p=C.fc(J.q(p.h(r,"c"),1))
e=new A.a8D(o,m,l,j,i,h,g,f,p,q)
e.bs0(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new A.a8E(a1)},
faj(d){if(d>=1e12)return B.k.ab(d/1e12,1)+" trillion"
if(d>=1e9)return B.k.ab(d/1e9,2)+" billion"
if(d>=1e6)return B.k.ab(d/1e6,1)+" million"
if(d>=1000)return B.k.ab(d/1000,1)+" thousand"
return B.k.ab(d,0)},
Fc(d){var w,v,u,t=B.o.u(B.k.U(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&B.o.J(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
a8D:function a8D(d,e,f,g,h,i,j,k,l,m){var _=this
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
a8E:function a8E(d){this.a=d},
uh:function uh(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
Ng:function Ng(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
x5:function x5(d,e,f){this.a=d
this.b=e
this.c=f},
Nf:function Nf(d){this.a=0
this.b=d
this.c=0},
hqJ(d,e,f){return $.hqK.cg(0,d+"|"+C.t(e)+"|"+f.l(),new A.d4J(d,e,f))},
T8:function T8(d){this.a=d},
aAe:function aAe(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fC$=l
_.fc$=m
_.bq$=n
_.a6$=o
_.c=_.a=null},
dNj:function dNj(d){this.a=d},
dNi:function dNi(d,e){this.a=d
this.b=e},
dMM:function dMM(d){this.a=d},
dMK:function dMK(d){this.a=d},
dML:function dML(d,e,f){this.a=d
this.b=e
this.c=f},
dMJ:function dMJ(d){this.a=d},
dMI:function dMI(){},
dMH:function dMH(d){this.a=d},
dN4:function dN4(d,e){this.a=d
this.b=e},
dN5:function dN5(d,e){this.a=d
this.b=e},
dMU:function dMU(d){this.a=d},
dMV:function dMV(d){this.a=d},
dMT:function dMT(d){this.a=d},
dMW:function dMW(d){this.a=d},
dMN:function dMN(d,e){this.a=d
this.b=e},
dMO:function dMO(d){this.a=d},
dN6:function dN6(d,e){this.a=d
this.b=e},
dMS:function dMS(d,e){this.a=d
this.b=e},
dNa:function dNa(d){this.a=d},
dN3:function dN3(d){this.a=d},
dNb:function dNb(d,e){this.a=d
this.b=e},
dN2:function dN2(d,e){this.a=d
this.b=e},
dNc:function dNc(d){this.a=d},
dN1:function dN1(d,e){this.a=d
this.b=e},
dNd:function dNd(d){this.a=d},
dN0:function dN0(d,e){this.a=d
this.b=e},
dNe:function dNe(d){this.a=d},
dN_:function dN_(d,e){this.a=d
this.b=e},
dNf:function dNf(d){this.a=d},
dMZ:function dMZ(d,e){this.a=d
this.b=e},
dNg:function dNg(d){this.a=d},
dMY:function dMY(d){this.a=d},
dNh:function dNh(d){this.a=d},
dMX:function dMX(d){this.a=d},
dN7:function dN7(d){this.a=d},
dMR:function dMR(d){this.a=d},
dN8:function dN8(d){this.a=d},
dMQ:function dMQ(d){this.a=d},
dN9:function dN9(d){this.a=d},
dMP:function dMP(d){this.a=d},
dMG:function dMG(){},
dMF:function dMF(d){this.a=d},
dME:function dME(d){this.a=d},
bbr:function bbr(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d4J:function d4J(d,e,f){this.a=d
this.b=e
this.c=f},
d4K:function d4K(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aIg:function aIg(){},
aIh:function aIh(){},
acD(d,e,f,g,h){return new A.bpA(d,e,f,g,h)},
bpA:function bpA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f_x:function f_x(){},
f_y:function f_y(){},
f_z:function f_z(){},
f_A:function f_A(){},
f_B:function f_B(){},
f_C:function f_C(){},
f_D:function f_D(){},
Uc:function Uc(d){this.a=d},
bgG:function bgG(){this.d=$
this.c=this.a=null},
epk:function epk(d){this.a=d},
epl:function epl(d){this.a=d},
epj:function epj(d){this.a=d},
epm:function epm(){},
epi:function epi(d,e){this.a=d
this.b=e},
eph:function eph(d){this.a=d},
hra(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.f6()
v.dY(w)
t.push(v.ag()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.f6()
v.dY(w+900)
u.push(2.2+v.ag())}return new A.bgt(new C.cn(null,x.A),new A.Nf(B.cA),B.J,B.as,t,u,$,B.bu,0,C.a([],x.X),null,null)},
hrc(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hrb(d){return 1.5+1.6*Math.log(d.d/1000+1)},
fUY(d,e,f){return $.hrM.cg(0,d+"|"+C.t(e)+"|"+f.l(),new A.eJ8(d,e,f))},
TZ:function TZ(d){this.a=d},
bgt:function bgt(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fC$=l
_.fc$=m
_.bq$=n
_.a6$=o
_.c=_.a=null},
ehK:function ehK(d,e){this.a=d
this.b=e},
ehV:function ehV(d,e){this.a=d
this.b=e},
ehW:function ehW(d,e){this.a=d
this.b=e},
ehS:function ehS(d){this.a=d},
ehT:function ehT(d){this.a=d},
ehU:function ehU(d){this.a=d},
ehX:function ehX(d){this.a=d},
ehR:function ehR(d){this.a=d},
ehY:function ehY(d,e){this.a=d
this.b=e},
ehZ:function ehZ(d){this.a=d},
ehQ:function ehQ(d,e){this.a=d
this.b=e},
ei_:function ei_(d){this.a=d},
ehP:function ehP(d,e){this.a=d
this.b=e},
ei0:function ei0(d){this.a=d},
ehO:function ehO(d){this.a=d},
ei1:function ei1(d){this.a=d},
ehN:function ehN(d){this.a=d},
ei2:function ei2(d){this.a=d},
ehM:function ehM(d){this.a=d},
ei3:function ei3(d){this.a=d},
ehL:function ehL(d){this.a=d},
ehJ:function ehJ(){},
ehI:function ehI(){},
ehH:function ehH(d){this.a=d},
ehG:function ehG(d){this.a=d},
bnF:function bnF(d,e){this.b=d
this.a=e},
eJ8:function eJ8(d,e,f){this.a=d
this.b=e
this.c=f},
eJ9:function eJ9(){},
eJa:function eJa(){},
T9:function T9(d){this.a=d},
aAf:function aAf(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fC$=m
_.fc$=n
_.bq$=o
_.a6$=p
_.c=_.a=null},
dNn:function dNn(){},
dNQ:function dNQ(){},
dNC:function dNC(d,e){this.a=d
this.b=e},
dNt:function dNt(d,e){this.a=d
this.b=e},
dND:function dND(d){this.a=d},
dNs:function dNs(d){this.a=d},
dNE:function dNE(d){this.a=d},
dNB:function dNB(d){this.a=d},
dNI:function dNI(d){this.a=d},
dNA:function dNA(d){this.a=d},
dNJ:function dNJ(d){this.a=d},
dNz:function dNz(d,e){this.a=d
this.b=e},
dNK:function dNK(d){this.a=d},
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
dNv:function dNv(d,e){this.a=d
this.b=e},
dNP:function dNP(d){this.a=d},
dNu:function dNu(d){this.a=d},
dNF:function dNF(d){this.a=d},
dNr:function dNr(d){this.a=d},
dNG:function dNG(d){this.a=d},
dNq:function dNq(d){this.a=d},
dNH:function dNH(d){this.a=d},
dNp:function dNp(d){this.a=d},
dNm:function dNm(d){this.a=d},
dNl:function dNl(){},
dNo:function dNo(d,e){this.a=d
this.b=e},
dNk:function dNk(d){this.a=d},
b6I:function b6I(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
TR:function TR(d){this.a=d},
bgq:function bgq(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.fb$=e
_.ku$=f
_.fC$=g
_.fc$=h
_.bq$=i
_.a6$=j
_.c=_.a=null},
eaE:function eaE(d,e){this.a=d
this.b=e},
eaF:function eaF(d,e){this.a=d
this.b=e},
eaD:function eaD(d,e){this.a=d
this.b=e},
eaG:function eaG(d,e){this.a=d
this.b=e},
eaC:function eaC(d,e){this.a=d
this.b=e},
bnd:function bnd(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eHi:function eHi(d){this.a=d},
aIi:function aIi(){},
bsJ:function bsJ(){},
aIR:function aIR(){},
bsX:function bsX(){},
aIU:function aIU(){},
bsZ:function bsZ(){},
hr8(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.f6()
v.dY(w)
v=v.ag()
u=new C.f6()
u.dY(w+500)
s.push(new C.v(v,u.ag()))}return new A.bf9(new C.cn(null,x.A),new A.Nf(B.cA),t,B.as,s,$,B.bu,0,C.a([],x.X),null,null)},
NI:function NI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Sd:function Sd(d){this.a=d},
bf9:function bf9(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fC$=k
_.fc$=l
_.bq$=m
_.a6$=n
_.c=_.a=null},
dw0:function dw0(){},
dvP:function dvP(){},
dvQ:function dvQ(d,e){this.a=d
this.b=e},
dvR:function dvR(d,e){this.a=d
this.b=e},
dvO:function dvO(d){this.a=d},
dvN:function dvN(d){this.a=d},
dvT:function dvT(d){this.a=d},
dvM:function dvM(d,e){this.a=d
this.b=e},
dvU:function dvU(d){this.a=d},
dvL:function dvL(d){this.a=d},
dvV:function dvV(d){this.a=d},
dvK:function dvK(d){this.a=d},
dvW:function dvW(d){this.a=d},
dvJ:function dvJ(d){this.a=d},
dvX:function dvX(d){this.a=d},
dvI:function dvI(d){this.a=d},
dvY:function dvY(d){this.a=d},
dvH:function dvH(d){this.a=d},
dvZ:function dvZ(d){this.a=d},
dvG:function dvG(d){this.a=d},
dw_:function dw_(d){this.a=d},
dvF:function dvF(d){this.a=d},
dvS:function dvS(d){this.a=d},
dvE:function dvE(d){this.a=d},
b65:function b65(d,e){this.b=d
this.a=e},
ach:function ach(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
T5:function T5(d){this.a=d},
bfy:function bfy(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.fC$=r
_.fc$=s
_.bq$=t
_.a6$=u
_.c=_.a=null},
dLV:function dLV(d){this.a=d},
dLL:function dLL(d,e){this.a=d
this.b=e},
dLM:function dLM(d,e){this.a=d
this.b=e},
dLK:function dLK(d,e){this.a=d
this.b=e},
dLN:function dLN(d){this.a=d},
dLJ:function dLJ(d){this.a=d},
dLO:function dLO(d){this.a=d},
dLI:function dLI(d,e){this.a=d
this.b=e},
dLP:function dLP(d){this.a=d},
dLH:function dLH(d,e){this.a=d
this.b=e},
dLQ:function dLQ(d){this.a=d},
dLG:function dLG(d,e){this.a=d
this.b=e},
dLR:function dLR(d){this.a=d},
dLF:function dLF(d,e){this.a=d
this.b=e},
dLS:function dLS(d){this.a=d},
dLE:function dLE(d){this.a=d},
dLT:function dLT(d){this.a=d},
dLD:function dLD(d){this.a=d},
dLU:function dLU(d){this.a=d},
dLC:function dLC(d){this.a=d},
bbh:function bbh(d,e){this.b=d
this.a=e},
d1S:function d1S(d){this.a=d},
TN:function TN(d){this.a=d},
bgp:function bgp(d,e,f,g,h,i,j,k){var _=this
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
_.fC$=h
_.fc$=i
_.bq$=j
_.a6$=k
_.c=_.a=null},
eak:function eak(d,e){this.a=d
this.b=e},
eal:function eal(d){this.a=d},
eaj:function eaj(d){this.a=d},
eam:function eam(d){this.a=d},
eai:function eai(d){this.a=d},
ean:function ean(d){this.a=d},
eah:function eah(d){this.a=d},
eao:function eao(d){this.a=d},
eag:function eag(d){this.a=d},
eap:function eap(d){this.a=d},
eaf:function eaf(d,e){this.a=d
this.b=e},
eaq:function eaq(d){this.a=d},
eae:function eae(d,e){this.a=d
this.b=e},
ear:function ear(d){this.a=d},
ead:function ead(d,e){this.a=d
this.b=e},
eas:function eas(d){this.a=d},
eac:function eac(d,e){this.a=d
this.b=e},
bmv:function bmv(d,e){this.b=d
this.a=e},
aHQ:function aHQ(){},
bsC:function bsC(){},
aId:function aId(){},
bsI:function bsI(){},
aIQ:function aIQ(){},
bsW:function bsW(){},
fTM(d,e,f){var w,v
C.fI(0,0,!1)
w=new C.l2(e,f,$,null)
v=w.bBP(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
cjL(d,e){var w=0,v=C.j(x.fA),u
var $async$cjL=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.fIB().wd(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cjL,v)}},D,M,G,Q,T,A9,X,Aa,Ab,Y,Ac,Ad
J=c[1]
C=c[0]
B=c[2]
U=c[101]
E=c[88]
N=c[96]
Z=c[103]
A_=c[109]
A0=c[108]
H=c[92]
K=c[113]
A1=c[86]
A2=c[102]
S=c[100]
A3=c[64]
A4=c[81]
V=c[73]
O=c[84]
A5=c[115]
A6=c[107]
W=c[87]
L=c[89]
R=c[110]
A7=c[68]
A8=c[106]
P=c[91]
I=c[104]
F=c[93]
A=a.updateHolder(c[17],A)
D=c[85]
M=c[99]
G=c[39]
Q=c[97]
T=c[95]
A9=c[114]
X=c[90]
Aa=c[98]
Ab=c[105]
Y=c[112]
Ac=c[94]
Ad=c[111]
A.ahb.prototype={}
A.Tl.prototype={
S(){var w=A.fy3()
return new A.bfU(w,C.R(x.N,x.i),new C.ao(B.aq,$.at()),C.a([],x.X),C.a([],x.L),C.m6(0,null,null))}}
A.bfU.prototype={
p(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
this.ch.p()
this.a2()},
LP(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$LP=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=B.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aS.ae$.d.c
if(s!=null)s.jb()
p.bG(0,B.c_)
t.n(new A.dUB(t))
t.a.toString
p=t.d
w=3
return C.b(A.buX(A.hsY(q,A.hDY(p),o,t.ay)),$async$LP)
case 3:s=e
r=s==null?null:J.iK(s)
if(r==null||r.length===0||B.a.a_(r,"{"))r=A.hFj(q,p,o)
if(t.c==null){w=1
break}t.n(new A.dUC(t,o,r))
$.aS.x1$.push(new A.dUD(t))
case 1:return C.h(u,v)}})
return C.i($async$LP,v)},
W1(d){return this.bSg(d)},
aR5(){return this.W1(null)},
bSg(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$W1=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=B.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aS.ae$.d.c
if(s!=null)s.jb()
t.f.saR(0,o)
t.n(new A.dUO(t))
A.e1(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=A
w=3
return C.b(A.buX(A.hzm(o)),$async$W1)
case 3:r=n.a=m.hMZ(f)
p.b=""
if(r!=null&&!A.hDZ(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=A.hFk(o)
q=C.ad(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new A.ahb(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.n(new A.dUP(p,t))
t.bXn(p.a)
case 1:return C.h(u,v)}})
return C.i($async$W1,v)},
bXn(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
B.d.a8(w)
w=++m.as
v=m.d
B.d.a8(v.a)
B.d.a8(v.b)
m.e.a8(0)
m.n(new A.dUK(m))
t=d.d
s=C.R(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new A.dUI(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new A.dUL(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.J)(r),++u){p.$2(o,new A.dUM(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new A.dUN(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=B.bE.j(0.1),g=C.m(16),f=C.G(B.bE.j(0.35),B.r,1)
if(m.x)j=C.A(C.a([D.efS,B.ba,C.C(C.d(m.Q,l,l,l,l,l,l,B.QD,l,l,l),1)],x.p),B.m,l,B.e,B.j,0,l,l)
else if(k==null)j=D.eEf
else{w=C.C(C.d(k.a,l,l,l,l,l,l,A1.QZ,l,l,l),1)
v=x.p
w=C.a([C.A(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.eq5,l,l,l)],v),B.m,l,B.e,B.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.B(B.ua,C.d(u,l,l,l,l,l,l,D.esE,l,l,l),l))
w.push(B.d5)
w.push(C.d(k.b,l,l,l,l,l,l,D.R5,l,l,l))
u=k.e
if(u.length!==0){t=B.aM.j(0.12)
s=C.m(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.euT,l,l,l),B.h,l,l,new C.o(t,l,l,s,l,l,B.n),l,l,l,B.iX,B.ch,l,l,l))}w.push(B.ar)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?B.c:B.aB
w.push(new C.B(B.JE,new C.cC(B.aY,B.e,B.j,B.F,l,B.p,l,0,C.a([new C.w(t,l,B.mW,l,l,l,l,l,l,l,l,l),B.bp,new C.bF(1,B.bn,new C.w(q,l,new C.E(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.J)(j),++p){o=j[p]
t=new C.b3(12,12)
s=new C.b3(12,12)
B.d.v(w,C.a([B.P,new C.bE(B.a7,l,l,C.p(l,new C.w(o.a,l,B.a3T,l,l,l,l,l,l,l,l,l),B.h,l,l,new C.o(B.bE.j(0.3),l,l,new C.bv(t,t,t,t),l,l,B.n),l,l,l,l,B.fF,l,l,l),l),B.au,C.p(l,new C.w(o.b,l,D.eA2,l,l,l,l,l,l,l,l,l),B.h,l,l,new C.o(B.c.j(0.07),l,l,new C.bv(s,s,s,s),l,l,B.n),l,l,l,l,B.bT,l,l,l)],v))}if(m.ax)w.push(D.dM_)
j=C.cf(C.u(w,B.F,l,B.e,B.j,0,B.p),B.q,m.ch,B.z,l,l,l,l,B.ah)}w=x.p
g=C.u(C.a([C.afs(C.p(l,j,B.h,l,new C.aV(0,1/0,0,i),new C.o(h,l,f,g,l,l,B.n),l,l,l,D.acb,B.ei,l,l,1/0),B.b9,B.ic),C.C(A.fKo(m.d,l,l,l,m.e),1)],w),B.m,l,B.e,B.j,0,B.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new A.dx("Ask about it",i,new A.dUS(m),l,B.bE,l),new A.dx("Invent something new",!i,new A.dUT(m),l,B.bE,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.cUK[p]
i.push(new A.dx(n,!1,new A.dUU(m,n),l,B.bE,l))}f.push(new A.eF(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.cG3[p]
i.push(new A.dx(r,!1,new A.dUV(m,r),l,B.bE,l))}f.push(new A.eF(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=B.c.j(0.07)
i=C.C(C.aK(l,B.U,!1,l,!0,B.q,l,C.aL(),m.f,l,l,l,l,l,2,C.bl(l,new C.b1(4,C.m(16),B.W),l,B.eE,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,B.kd,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.z,!0,l,!0,l,!1,l,B.ae,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new A.dUW(m,k),l,!1,l,l,!1,l,!0,l,B.a8,l,l,l,l,l,l,l,l,l,l,l,B.di,!0,B.a5,l,B.am,l,B.aIM,l,l),1)
h=m.at
v=h&&j?D.bqq:B.dO
j=h&&j?"Ask":"Invent"
f.push(C.A(C.a([i,B.ab,new A.ff(v,j,new A.dUX(m,k),B.bE,l)],w),B.m,l,B.e,B.j,0,l,l))
return A.je(B.bE,B.fS,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.u(f,B.m,l,B.e,B.R,0,B.p))}}
A.Ex.prototype={}
A.u4.prototype={}
A.TM.prototype={
S(){return new A.aB5(B.J,B.J,B.as,C.aZ(x.S),$,B.bu,0,C.a([],x.X),null,null)}}
A.aB5.prototype={
gaSd(){var w,v,u,t=this,s=D.Fe[t.cx],r=D.O4[t.cy],q=D.AC[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ef(w,w.r,C.a2(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aqE[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+B.d.cI(p,0,new A.e8Z())},
ga00(){return D.Fe[this.cx].d/this.gaSd()},
gaJU(){return 0.1*(D.Fe[this.cx].d/0.9)/D.O4[this.cy].d},
Z(){this.a0()
this.kH()
A.yp("rocket_lander").bw(new A.e9i(this),x.P)},
bXv(){var w=this
w.ay=B.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+B.cA.ag()*0.6
w.f=new C.v(0.15+B.cA.ag()*0.7,0.08)
w.r=new C.v((B.cA.ag()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
l_(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.n(new A.e9j())
return}w=D.qq[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=B.k.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.v(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga00()
v=v.ap(0,new C.v(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaJU())}if(m.dy){t=m.r
v=v.aD(0,t.aP(0,t.gct()*6*D.ase[m.d]))}t=m.r=m.r.ap(0,v.aP(0,d))
s=m.f=m.f.ap(0,t.aP(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new C.v(-t.a*0.4,t.b)
t=new C.v(B.k.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new C.v(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.AC[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
A.v5("rocket_lander",C.D(["unlocked",t],x.N,x.z))
A.As("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga00()/(D.qq[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+B.k.ab(m.ga00()/(D.qq[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
A.e1(80,"",500,0,0.6,"noise")
C.fV()}}if(m.Q&&m.x>0&&B.o.J(B.k.bK(m.CW*20),2)===0)A.e1(90,"",70,0,0.12,"noise")
m.n(new A.e9k())},
acI(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.esb,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new A.dx(e[w].a,f.$1(w),new A.e90(this,g,w),v,h,v))
return new C.B(B.fh,C.u(C.a([u,B.d5,C.cb(B.bH,s,B.bw,6,6)],t),B.F,v,B.e,B.j,0,B.p),v)},
bxb(d){var w,v,u,t,s=this,r=null,q=s.ga00()/(D.qq[s.d].b/9.81*0.28)>=1,p=B.k.U(1/s.gaJU()),o=D.ase[s.d],n=C.m(24),m=d.c,l=C.G(m.j(0.6),B.r,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),B.au,C.d(d.d+" Gravity here: "+C.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,D.aJS,r,r,r),B.T,s.acI("ENGINE: "+D.Fe[s.cx].b,D.Fe,new A.e8Q(s),new A.e8R(s),B.dh),s.acI("FUEL TANK: "+D.O4[s.cy].b,D.O4,new A.e8S(s),new A.e8T(s),B.bt),s.acI("LANDING GEAR: "+D.AC[s.db].b,D.AC,new A.e8U(s),new A.e8V(s),B.b3),s.acI("EXTRAS (tap to add)",D.aqE,new A.e8W(s),new A.e8X(s),B.bE)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.eUR)
o=(q?B.bt:B.cN).j(0.14)
w=C.m(12)
v=B.k.ab(s.gaSd(),2)
u=B.k.ab(s.ga00()/(D.qq[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+B.k.U(D.AC[s.db].d*100)+".",r,r,r,r,r,r,D.esK,r,r,r),B.h,r,r,new C.o(o,r,r,w,r,r,B.n),r,r,r,B.iX,B.bT,r,r,r))
m.push(B.T)
m.push(new C.bE(B.B,r,r,new A.ff(B.m0,"Launch",new A.e8Y(s),B.bt,r),r))
return C.as(C.p(r,C.cf(C.u(m,B.F,r,B.e,B.R,0,B.p),B.q,r,B.z,r,B.c1,r,r,B.ah),B.h,r,B.le,new C.o(D.b6M,r,l,n,r,r,B.n),r,r,r,B.bT,r,r,r,r),r,r,r)},
aTj(d,e,f,g){var w=null,v=f?B.dh:B.c.j(0.1),u=C.m(18),t=C.G(B.be,B.r,1)
return C.pg(B.jD,C.p(w,C.V(d,B.c,w,w,w,30),B.h,w,w,new C.o(v,w,t,u,w,w,B.n),w,62,w,w,w,w,w,g),w,new A.e8N(e),new A.e8O(e),w,w,w,w,new A.e8P(e))},
aTi(d,e,f){return this.aTj(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cj(new A.e9b(s,D.qq[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.qq[w].a:"\ud83d\udd12"
o.push(new A.dx(v,s.d===w,new A.e9c(s,w),r,D.qq[w].c,r))}v=C.a([s.aTi(D.bqx,new A.e9d(s),s.y),B.ba,s.aTj(B.uv,new A.e9e(s),s.Q,130),B.ba,s.aTi(B.XT,new A.e9f(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?B.b3:B.c.j(0.1)
t=C.m(18)
B.d.v(v,C.a([B.ba,C.aJ(r,C.p(r,D.buF,B.h,r,r,new C.o(u,r,C.G(B.be,B.r,1),t,r,r,B.n),r,62,r,r,r,r,r,62),B.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.e9g(s),r,r,r,r,r,r,!1,B.af)],p))}return A.je(B.dh,B.fS,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.u(C.a([new A.eF(o,"WORLD",r),C.A(v,B.m,r,B.b5,B.j,0,r,r)],p),B.m,r,B.e,B.R,0,B.p))}}
A.bcX.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.qq[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.a1(),d=C.U(),a0=j.c,a1=C.aq(D.b8Y,a0,0.25)
a1.toString
d.sav(new C.a8(B.b4,B.bb,B.x,C.a([D.b20,a1],x.O),l,l).aB(0,new C.af(0,0,g,f)))
a2.bp(new C.af(0,0,g,f),d)
w=new C.f6()
w.dY(5)
for(g=a2.a,v=0;v<70;++v){f=w.ag()
d=w.ag()
a1=w.ag()
u=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
u.r=B.c.j(0.2+w.ag()*0.5).gt(0)
t=u.L()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=C.a([],f)
r=new C.b0(e.r,B.aw,l,l,d)
r.N(new C.bj(0,s+14))
q=new C.f6()
q.dY(2)
for(p=0;p<=i;p+=18){e=new C.av(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.ag()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bH(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.N(new C.av(i,h))
r.N(new C.av(0,h))
r.N(new C.bW())
e=$.a1()
d=C.U()
d.r=C.aq(a0,B.w,0.6).gt(0)
a2.b4(r,d)
o=C.dy(new C.v(k.ax*i,s+10),8,k.ay*i)
d=C.c_(o,B.jL)
a0=C.U()
a0.r=B.bq.gt(0)
a2.bj(d,a0)
a0=C.c_(o.cD(2),B.uZ)
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
k.z=W.a0i
a2.aw(B.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new C.b0(i,B.aw,l,l,C.a([],f))
n.N(new C.bj(-8,18))
n.N(new C.av(0,44+Math.sin(k.CW*40)*8))
n.N(new C.av(8,18))
n.N(new C.bW())
k=C.U()
k.r=B.aM.gt(0)
a2.b4(n,k)
i=new C.b0(i,B.aw,l,l,C.a([],f))
i.N(new C.bj(-4,18))
i.N(new C.av(0,32))
i.N(new C.av(4,18))
i.N(new C.bW())
k=C.U()
k.r=B.c.gt(0)
a2.b4(i,k)}k=e.r
m=new C.b0(k,B.aw,l,l,C.a([],f))
m.N(new C.bj(0,-26))
m.N(new C.dl(14,-10,11,18))
m.N(new C.av(-11,18))
m.N(new C.dl(-14,-10,0,-26))
m.N(new C.bW())
i=C.U()
i.sav(D.bFQ.aB(0,D.e9Q))
a2.b4(m,i)
i=C.U()
i.r=B.b3.gt(0)
a2.aw(D.a1A,5,i)
i=new C.b0(k,B.aw,l,l,C.a([],f))
i.N(new C.bj(-11,6))
i.N(new C.av(-20,20))
i.N(new C.av(-11,18))
i.N(new C.bW())
h=C.U()
h.r=B.aH.gt(0)
a2.b4(i,h)
f=new C.b0(k,B.aw,l,l,C.a([],f))
f.N(new C.bj(11,6))
f.N(new C.av(20,20))
f.N(new C.av(11,18))
f.N(new C.bW())
k=C.U()
k.r=B.aH.gt(0)
a2.b4(f,k)
g.restore()},
ao(d){return!0}}
A.aIO.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bsV.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpF()}}
A.aOy.prototype={}
A.a0T.prototype={}
A.b69.prototype={}
A.Se.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.eO(["skin"],x.N),o=new Float32Array(0)
return new A.azx(w,v,u,t,s,r,q,new C.cn(null,x.A),p,D.I7,D.I7,B.as,B.cA,o,new Int32Array(0),$,B.bu,0,C.a([],x.X),null,null)}}
A.azx.prototype={
Z(){var w=this
w.a0()
w.kH()
w.as=new A.bVL(w.gc3V())
new A.dws(w).$0()
return},
p(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a9(0)
v.d=null}this.boH()},
c3W(d){var w,v=this
if(v.c==null)return
w=J.a6(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eK(0,C.D(["t","init","data",$.fU0],x.N,x.z))
v.at=!0
v.ax=""
v.auR()
break
case"pick":v.n(new A.dw4(v,d))
break
case"shot":v.aeA(C.t(w.h(d,"data")))
break
case"error":$.ak.$1("[body viewer] "+C.t(w.h(d,"text")))
break}},
auR(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aoI[q.CW]
v=new A.dw5()
u=q.ay
u=C.z(u,C.a2(u).k("ck.E"))
B.d.fv(u)
t=x.N
s=C.D(["layers",u,"skinMode",q.ch,"tone","#"+C.t(v.$1(w.b))+C.t(v.$1(w.c))+C.t(v.$1(w.d)),"sel",q.cx,"bpm",B.k.U(q.k3),"spin",q.fy],t,x.cK)
r=B.Q.aj(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.R(t,x.z)
u.m(0,"t","state")
u.v(0,s)
v.eK(0,u)}},
aeA(d){return this.ck5(d)},
ck5(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aeA=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=B.cw.aE(B.a.aU(d,B.a.cP(d,",")+1))
w=6
return C.b(A.cjL(C.a([A.fTM(r,"image/png","body.png")],x.C),"Made in NGMY Core Protocol"),$async$aeA)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.F(x.U).f.P(D.aI4)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$aeA,v)},
auk(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.q(0,w)},
l_(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.q(0,"organ")&&B.k.bK(w)!==B.k.bK(v.ok)){A.a5X("kick",0.4)
v.a2x(170,new A.dwt())}v.ok=w
return},
aep(d){var w,v,u,t,s=this
s.n(new A.dw6(s,d))
if(d==null){s.fx=D.I7
s.dy=1
w=s.as
if(w!=null)w.eK(0,C.D(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.T(w).k("a5<1>")
u=C.z(new C.a5(w,new A.dw7(d),v),v.k("F.E"))
t=B.d.gI(u).b
if(t!=="skin"&&!s.ay.q(0,t)){s.ay.H(0,t)
if(s.ch===2)s.ch=1}s.auR()
w=s.as
if(w!=null)w.eK(0,C.D(["t","focus","group",d],x.N,x.z))
s.go=0
s.cms(t,d)
return},
cms(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){A.a5X("kick",0.8)
this.a2x(260,new A.dw8())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")A.e1(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a2x(w*70,new A.dw9(this))
else if(B.a.q(e,"intestine")||e==="Stomach")A.e1(110,"",360,0.7,0.3,"saw")
else A.v8("organic",6+B.o.J(e.length,8),200,0.6)
break
case"bone":A.e1(210+e.length*4,"",80,0.6,0.55,"tri")
A.e1(2400,"",20,0,0.3,v)
break
case"muscle":A.e1(70,"",150,1,0.6,"sine")
break
case"vessel":A.e1(300,"",380,0.4,0.22,v)
A.a5X("kick",0.3)
break
default:A.v8("organic",2+B.o.J(e.length,6),200,0.4)}},
cqN(d){this.n(new A.dwb(this,d))},
aTA(){var w,v,u,t,s,r,q,p=this,o=C.aZ(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.J)(w),++t){s=w[t]
if(p.auk(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.H(0,s.a)}q=C.z(o,o.$ti.k("ck.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aG(w)]
p.p4=""},
bNW(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.n(new A.dw1(u,w,d))
v=x.t
A.As("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a2x(1100,new A.dw2(u))
return}if(d==null){if(u.cx!=null)u.aep(null)
return}u.aep(d)},
bRA(d,e){var w,v=this,u=null,t=C.m(18),s=C.G(B.cd.j(0.5),B.r,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.eoL,u,u,u)}else if(d==null||e==null)w=D.eBX
else{w=x.p
w=C.A(C.a([C.C(C.u(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,B.jr,u,u,u),B.d5,C.d(e.b,u,u,u,u,u,u,D.R5,u,u,u)],w),B.F,u,B.e,B.R,0,B.p),1),C.aF(u,u,u,u,D.bx1,u,u,u,new A.dw3(v),u,u,u,u,"Back to the whole body",B.c6)],w),B.F,u,B.e,B.j,0,u,u)}return C.p(u,w,B.h,u,u,new C.o(D.Ta,u,s,t,u,u,B.n),u,u,u,u,E.acy,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.d3w.h(0,g)
i.auR()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.cOF
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.J)(v),++s){r=v[s]
if(i.auk(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!B.d.q(w,q))w.push(q)}v=x.p
u=C.a([C.aF(h,h,h,h,D.m2,h,h,h,new A.dwi(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?B.bF:C.Cv(h,B.pq,q)}else q=B.k9
q=C.u(C.a([C.C(q,1),new C.B(D.bej,i.bRA(g,f),h)],v),B.m,h,B.e,B.j,0,B.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.cHm[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.q(0,n)
p.push(new A.dx(l,n,new A.dwj(i,o),o.c,B.cd,h))}p=C.a([new A.eF(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.J)(w),++s){k=w[s]
n.push(new A.dx(k,k===i.cx,new A.dwk(i,k),h,B.aM,h))}p.push(new A.eF(n,"FIND",h))}if(t.q(0,"organ")){n=i.k3
p.push(A.hp(B.cN,""+B.k.U(n)+" beats/min","Heart rate",180,40,new A.dwl(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new A.DP(D.aoI[j],i.CW===j,new A.dwm(i,j),!1,h))
p.push(new A.eF(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new A.dx("Spin",n,new A.dwn(i),D.afB,B.b3,h),new A.ff(B.jF,"Reset view",new A.dwo(i),B.c,h),new A.dx(l,m,new A.dwp(i),B.Er,B.aM,h)],v)
if(t.q(0,"organ"))v.push(new A.dx("Heartbeat sound",i.k4,new A.dwq(i),B.nr,B.cN,h))
p.push(new A.eF(v,h,h))
return A.je(B.cd,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.u(p,B.m,h,B.e,B.R,0,B.p))}}
A.aHR.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.aHS.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.boG()}}
A.bVL.prototype={
k5(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aI(e,"</script","<\\/script")
v=$.fZU
$.fZU=v+1
u="ngmy-body-viewer-"+v
$.xE()
$.pI().p6(u,new A.bVM(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fB(v,"message",new A.bVN(t),!1,x.gA)
t.b=u},
eK(d,e){var w,v
try{w=this.c
if(w!=null){w=C.buU(w.contentWindow)
if(w!=null)J.fxh(w,e,"*")}}catch(v){}}}
A.x7.prototype={}
A.B2.prototype={}
A.mW.prototype={}
A.b6S.prototype={}
A.Sj.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new A.azA(C.R(w,x.a2),C.a([],x.cB),C.R(w,v),C.R(w,v),C.R(w,u),B.as,B.J,B.J,C.aZ(u),$,B.bu,0,C.a([],x.X),null,null)}}
A.azA.prototype={
Z(){var w=this
w.a0()
w.kH()
w.a9D()
$.aS.x1$.push(new A.dyD(w))},
a9D(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$a9D=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.aw(),$async$a9D)
case 6:q=e.rm("ngmy_circuit_passed_v1")
r=q==null?B.U:q
if(s.c!=null)s.n(new A.dyh(s,r))
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
return C.i($async$a9D,v)},
a9Y(d){return this.bVb(d)},
bVb(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$a9Y=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.H(0,d)
u=3
w=6
return C.b(C.aw(),$async$a9Y)
case 6:r=f
q=s.cx
p=C.a2(q).k("jA<ck.E,n>")
q=C.z(new C.jA(q,new A.dyk(),p),p.k("F.E"))
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
return C.i($async$a9Y,v)},
at9(d,e,f,g){var w="c"+this.y++,v=new A.B2(w,e,f,g)
this.d.m(0,w,v)
return v},
m1(d,e,f){return this.at9(0,e,f,0)},
a9_(d,e){var w
if(D.xI.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ap(0,new C.v(-36,w))},
rM(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aNN(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fC$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.dw(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(B.o.eb(m,D.csD[B.o.J(q.d,4)])&1)===0
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
bGU(){return this.aNN(null)},
l_(d){var w,v,u,t,s,r,q,p,o,n=this
n.bGU()
if(!n.ax)return
for(w=n.d,w=new C.bf(w,C.a2(w).k("bf<2>")).gaf(0),v=new C.hX(w,new A.dyE()),u=n.f,t=n.w,s=0;v.C();){r=w.gT(0).a
if(u.h(0,r)===!0){q=n.fC$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.m(0,r,n.fC$)
o=s+1
A.e1(520+90*B.o.J(s,4),"",200,0,0.25,"square")
s=o}}},
ata(d){var w=this
w.d.a8(0)
B.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
lu(d,e){var w=this.x
return new C.v(d*w.a,e*w.b)},
apD(d){var w=this
if(w.x.A(0,B.as)){$.aS.x1$.push(new A.dyf(w,d))
return}w.n(new A.dyg(w,d))},
cmI(d){this.n(new A.dyl(this,d,$.bzB()[d]))},
bYY(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bzB()[a0]
v=d.d
u=C.a2(v).k("bf<2>")
t=u.k("a5<F.E>")
s=t.k("F.E")
r=C.z(new C.a5(new C.bf(v,u),new A.dya(),t),s)
B.d.aY(r,new A.dyb())
q=C.z(new C.a5(new C.bf(v,u),new A.dyc(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.n(new A.dyd(d,w))
return}u=d.r
p=C.dR(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=B.o.dq(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((B.o.fO(k,i)&1)===1)
for(i=0;i<v;++i)u.m(0,r[i].a,j[i])
d.aNN(0)
h=m.h(0,B.d.gI(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.jv(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=B.d.aF(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.v(0,p)
d.n(new A.dye(d,o,a0))},
atR(d){var w,v,u,t,s=this.d,r=C.a2(s).k("bf<2>")
s=C.z(new C.bf(s,r),r.k("F.E"))
r=C.T(s).k("dv<1>")
s=new C.dv(s,r)
s=new C.bR(s,s.gG(0),r.k("bR<ai.E>"))
w=d.a
r=r.k("ai.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
c6a(d){var w,v,u,t,s,r=this.d,q=C.a2(r).k("bf<2>")
r=C.z(new C.bf(r,q),q.k("F.E"))
q=C.T(r).k("dv<1>")
r=new C.dv(r,q)
r=new C.bR(r,r.gG(0),q.k("bR<ai.E>"))
w=d.a
v=d.b
q=q.k("ai.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bRt(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.dw(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.xI.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.a9_(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.S(p,o)
s=l}}}return t},
bFS(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.a9_(p,o)
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
bZ_(d){var w,v,u,t=this,s=t.atR(d)
if(s!=null){w=t.d.h(0,s)
w.toString
C.eN()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.m(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
A.e1(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.n(new A.dym())
return}u=t.bFS(d)
if(u!=null)t.n(new A.dyn(t,u))
else t.n(new A.dyo(t))},
as9(d){return this.bUg(d)},
bUg(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$as9=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.atR(d)
if(s==null){w=1
break}C.j6()
t.n(new A.dyj(t,s))
case 1:return C.h(u,v)}})
return C.i($async$as9,v)},
btd(d){if(this.x.A(0,B.as))return
this.n(new A.dy9(this,d,B.cA))
C.eN()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bzB()[g]
g=x.p
v=C.a([C.aF(h,h,h,h,C.V(i.ax?B.nr:L.ql,B.al,h,h,h,21),h,h,h,new A.dyx(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.m(16)
s=B.cK.j(0.14)
r=C.G(B.cK.j(0.5),B.r,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.eo_,h,h,h),C.d(w.b,h,h,h,h,h,h,D.evL,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.B(B.nk,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?B.bt:B.fO,h,h,h,h,h,h,h,h,12,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.A(C.a([C.C(C.u(q,B.F,h,B.e,B.j,0,B.p),1),C.bJ(D.eM4,i.gbYX(),C.bk(B.cK,h,h,h,h,h,h,h,h,h,h,B.c6))],g),B.m,h,B.e,B.j,0,h,h),B.h,h,h,new C.o(s,h,r,t,h,h,B.n),h,h,h,V.JM,D.beX,h,h,1/0))}u.push(C.C(C.cj(new A.dyy(i)),1))
if(f!=null){t=C.m(14)
s=B.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.xI.h(0,r).a+": "+D.xI.h(0,r).e,h,h,h,h,h,h,B.vd,h,h,h),B.h,h,h,new C.o(s,h,h,t,h,h,B.n),h,h,h,X.acg,B.bT,h,h,1/0))}u=C.u(u,B.m,h,B.e,B.j,0,B.p)
t=C.a([],g)
for(s=D.xI.gdH(D.xI),s=s.gaf(s);s.C();){r=s.gT(s)
q=new C.b3(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.ax(o.j(0.5),1,B.r,-1)
t.push(C.aJ(h,C.p(h,C.u(C.a([C.V(p.b,o,h,h,h,20),B.by,new C.w(p.a,h,D.a4d,h,h,h,h,h,h,h,h,h)],g),B.m,h,B.e,B.R,0,B.p),B.h,h,h,new C.o(n,h,new C.c2(m,m,m,m),new C.bv(q,q,q,q),h,h,B.n),h,h,h,B.hd,P.UX,h,h,58),B.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.dyz(i,r),h,h,h,h,h,h,!1,B.af))}s=C.a([],g)
for(l=0;l<4;++l){k=D.cSm[l]
s.push(new A.ff(B.Li,k.b,new A.dyA(i,k),B.cK,h))}s.push(new A.ff(D.wQ,"Clear",new A.dyB(i),B.cN,h))
r=C.a([],g)
for(j=0;q=$.bzB(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?B.ej:B.lq
o=i.ay
n=i.cx.q(0,j)?B.bt:B.cV
r.push(new A.dx(q.a,o===j,new A.dyC(i,j),p,n,h))}return A.je(B.cK,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.u(C.a([new A.eF(t,"PARTS",h),new A.eF(s,"TRY",h),new A.eF(r,"TASKS",h)],g),B.m,h,B.e,B.R,0,B.p))}}
A.b79.prototype={
a5(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.a1()
w=C.U()
w.r=D.a7T.gt(0)
a7.bp(new C.af(0,0,0+a5,0+a6),w)
v=C.U()
v.r=B.c.j(0.05).gt(0)
for(w=a7.a,u=20;u<a6;u+=28)for(t=14;t<a5;t+=28){s=v.L()
w.drawCircle(t,u,1,s)
s.delete()}for(a5=this.b,a6=a5.e,r=a6.length,q=a5.f,p=x.v,o=a5.d,n=0;n<a6.length;a6.length===r||(0,C.J)(a6),++n){m=a6[n]
l=m.a
k=o.h(0,l)
j=o.h(0,m.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=a5.a9_(j,m.c)
f=q.h(0,l)===!0
l=$.a1()
e=C.a([],p)
d=new C.b0(l.r,B.aw,a4,a4,e)
e.push(new C.bj(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.p5(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
l.b=B.ak
l.c=9
l.r=B.cV.j(0.28).gt(0)
l.z=H.pi
s=l.L()
l=d.gbM().a.snapshot()
w.drawPath((d.e=new C.cG(l)).a,s)
s.delete()}l=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
l.b=B.ak
l.c=3.2
l.d=B.bZ
l.r=(f?B.j6:B.bB).gt(0)
s=l.L()
l=d.e
w.drawPath((l==null?d.e=new C.cG(d.gbM().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ap(0,D.Ge)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new C.b0($.a1().r,B.aw,a4,a4,C.a([],p))
w=a3.b
p.N(new C.bj(a6,w))
r=g.b
p.N(new C.p5(a6+a0,w,a5-a0,r,a5,r))
r=C.U()
r.b=B.ak
r.c=3
r.r=B.al.gt(0)
a7.b4(p,r)}for(a5=new C.dw(o,o.r,o.e);a5.C();)this.bYZ(a7,a5.d)},
bYZ(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.xI.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.dy(a0.c,64,64)
s=C.c_(t,B.kJ)
r=w.cy===v
q=s.eF(B.cv)
$.a1()
p=C.U()
p.r=B.w.j(0.55).gt(0)
p.z=B.mO
d.bj(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.U()
p.sav(new C.bS(B.B,0.5,B.x,g,0,C.a([e.c.j(0.6),B.K],x.O),g,g).aB(0,C.c1(a0.c,52)))
d.aw(q,52,p)}q=s.eF(B.cG)
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
q.sav(new C.a8(B.b4,B.bb,B.x,C.a([p,m],x.O),g,g).aB(0,t))
d.bj(s,q)
q=C.U()
q.b=B.ak
q.c=r?2.6:1.2
q.r=(r?B.c:B.c.j(0.35)).gt(0)
d.bj(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?D.agY:D.bqZ}else l=e.b
k=A.fCA(C.jv(l.a),30,B.c,l.b,g,B.I)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a5(d,v.aD(0,new C.v(p/2,q.gbd(q)/2)))
j=A.fCA(e.a,10.5,B.c,g,g,B.I)
j.a5(d,a0.c.ap(0,new C.v(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=A.fCA(f,9,u?B.j6:B.c3,g,g,B.u)
i.a5(d,a0.c.ap(0,new C.v(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aTV(d,w.a9_(a0,h),o)
this.aTV(d,a0.c.ap(0,D.Ge),o)},
aTV(d,e,f){var w
$.a1()
w=C.U()
w.r=D.a7T.gt(0)
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
A.aHX.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bsF.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.boM()}}
A.Ls.prototype={
S(){return new A.azR(C.m6(0,null,null))}}
A.ID.prototype={
a3(){return"_UnfoldStyle."+this.b}}
A.zk.prototype={}
A.azR.prototype={
bZ3(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcm(0).at
v.toString
w.f=v}w.n(new A.dDQ(w,e))},
bTe(){var w=this
w.e.p()
w.e=C.m6(w.f,null,null)
w.n(new A.dDP(w))},
p(){this.e.p()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.nU(t,C.ce(v,B.bV,t?new A.bmO(w.e,w.gbZ2(w),new A.dDR(d),v):new A.aE_(u,new C.cv(u.b,x.gj)),v,!1,!1,v,!1),new A.dDS(w,u),x.K)}}
A.bol.prototype={}
A.bmO.prototype={
aTW(d,e){var w=null
return new C.B(E.Vq,C.u(C.a([C.d(d,w,w,w,w,w,w,D.eov,w,w,w),B.by,C.d(e,w,w,w,w,w,w,C.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.F,w,B.e,B.j,0,B.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.A(C.a([C.aF(v,v,v,v,F.qn,v,v,v,w.e,v,v,v,v,v,v),B.tz,D.bkA],u),B.m,v,B.e,B.j,0,v,v),s=w.aTW("STUDIOS","Play, make things, and keep what you make")
$.bzD()
return C.br(!0,C.u(C.a([new C.B(D.bjL,t,v),C.C(C.uI(0,v,B.q,w.c,B.z,v,v,v,v,v,!1,v,B.ah,!1,C.a([new C.lL(s,v),new C.nn(B.iY,C.N1(new C.nX(new A.eGQ(d),23,!0,!0,!0,0,C.rg(),v),D.aHU),v),new C.lL(w.aTW("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nn(D.bf2,C.N1(new C.nX(new A.eGR(w),6,!0,!0,!0,0,C.rg(),v),D.aHU),v)],u)),1)],u),B.m,v,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)}}
A.acm.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.m(20),n=C.m(20),m=C.aq(D.rq,p,0.3)
m.toString
w=x.O
m=C.a([m,D.aa1],w)
v=C.G(p.j(0.6),B.r,1.2)
u=x.V
t=C.a([new C.a9(-4,B.G,p.j(0.22),B.J,14)],u)
s=C.aq(p,B.w,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.a9(0,B.G,p.j(0.5),B.J,12)],u)
return C.aD(!1,B.X,!0,r,C.aH(!1,o,!0,C.er(C.u(C.a([C.p(r,C.V(q.c,B.c,r,r,r,24),B.h,r,r,new C.o(r,r,r,r,u,new C.a8(B.ax,B.aD,B.x,w,r,r),B.a6),r,44,r,r,r,r,r,44),B.P,C.d(q.a,r,2,B.Z,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,B.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),B.L,r,r),B.d5,C.d(q.b,r,2,B.Z,r,r,r,C.l(r,r,B.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),B.L,r,r)],x.p),B.m,r,B.b5,B.j,0,B.p),r,new C.o(r,r,v,n,t,new C.a8(B.ax,B.aD,B.x,m,r,r),B.n),r,B.DK,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac)}}
A.abi.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.m(20),g=C.m(20),f=C.aq(D.rq,B.d.gI(i),0.24)
f.toString
w=x.O
f=C.a([f,D.aa1],w)
v=C.G(B.d.gI(i).j(0.35),B.r,1)
u=x.V
t=C.a([new C.a9(0,B.G,B.w.j(0.4),B.cv,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.b3(6,6)
m=C.a([B.d.gI(i),B.d.gai(i)],w)
l=C.a([new C.a9(0,B.G,B.w.j(0.45),E.aB1,0)],u)
r.push(C.p(k,C.V(q[p],B.c,k,k,k,11),B.h,k,k,new C.o(k,k,k,new C.bv(n,n,n,n),l,new C.a8(B.a1,B.a7,B.x,m,k,k),B.n),k,17,k,new C.L(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.u(r,B.m,k,B.e,B.R,0,B.p)
u=C.aq(B.d.gI(i),B.d.gai(i),0.4)
u.toString
return C.aD(!1,B.X,!0,k,C.aH(!1,h,!0,C.er(C.u(C.a([new C.a3(58,k,w,k),B.T,C.d(j.b,k,2,B.Z,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,B.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),B.L,k,k),B.au,C.V(Ac.EA,B.d.gI(i),k,k,k,18)],s),B.m,k,B.b5,B.j,0,B.p),k,new C.o(k,k,v,g,t,new C.a8(B.ax,B.aD,B.x,f,k,k),B.n),k,B.DK,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),B.h,B.K,0,k,k,k,k,k,B.ac)}}
A.O8.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(B.d.gai(i),B.w,0.62)
h.toString
w=k.c
v=k.d
h=C.an(-8,C.bQ(j,new C.o(h,j,j,C.m(22),j,j,B.n),B.b7),j,j,2,2,8,j)
u=C.m(22)
t=k.y
s=x.V
r=C.a([new C.a9(0,B.G,B.w.j(0.55),B.Pl,26),new C.a9(-6,B.G,B.d.gI(i).j(0.1+0.4*t),B.J,30)],s)
q=C.m(22)
p=C.aq(B.d.gI(i),B.c,0.14)
p.toString
o=B.d.gI(i)
n=B.d.gai(i)
i=C.aq(B.d.gai(i),B.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bU(0,C.bQ(j,new C.o(j,j,j,j,j,new C.a8(B.ax,B.aD,B.x,C.a([p,o,n,i],m),D.cWS,j),B.n),B.b7),0,0,0),C.an(j,C.bQ(j,new C.o(j,j,j,j,j,new C.a8(B.b4,B.bb,B.x,C.a([B.c.j(0.28),B.c.j(0)],m),j,j),B.n),B.b7),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bU(0,C.b2(j,j,j,new A.bnM(i,j),B.as),0,0,0))
i=B.c.j(0.16)
p=C.G(B.c.j(0.5),B.r,1.4)
s=C.a([new C.a9(0,B.G,B.c.j(0.25*t),B.J,14)],s)
s=C.p(j,C.V(k.f,B.c,j,j,j,28),B.h,j,j,new C.o(i,j,p,j,s,j,B.a6),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.epY,j,j,j)],l)
i=k.w
if(i.length!==0)B.d.v(p,C.a([B.au,C.d(i,j,1,B.Z,j,j,j,C.l(j,j,B.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,B.a0,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(B.Qo)
p.push(C.p(j,j,B.h,j,j,new C.o(B.c.j(0.28),j,j,C.m(3),j,j,B.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.B(B.fu,C.A(C.a([s,B.en,C.C(C.u(p,B.F,j,B.e,B.R,0,B.p),1)],l),B.m,j,B.e,B.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bU(0,C.e8(C.ec(j,B.w.j(B.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.m(22)
m.push(C.bU(0,C.e8(C.bQ(j,new C.o(j,j,C.G(B.c.j(0.3),B.r,1.2),i,j,j,B.n),B.b7),!0,j),0,0,0))
return new C.a3(w,v,new C.am(B.V,j,B.a9,B.h,C.a([h,C.bU(0,C.bQ(C.bu(q,new C.am(B.V,j,B.a9,B.q,m,j),B.ap),new C.o(j,j,j,u,r,j,B.n),B.b7),0,0,0)],l),j),j)}}
A.bnM.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
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
s.sav(new C.a8(B.a1,B.a7,B.x,C.a([B.K,B.c.j(0.3),B.K],x.O),null,null).aB(0,t))
d.bp(t,s)
u.restore()},
ao(d){return d.b!==this.b}}
A.bnh.prototype={
B(d){var w=null,v=C.m(22),u=C.a([D.b5f,D.a9q],x.O),t=this.e,s=C.G(B.d.gI(t).j(0.4),B.r,1.2),r=C.a([new C.a9(0,B.G,B.w.j(0.5),B.kH,24)],x.V),q=C.m(22),p=B.d.gI(t)
return new C.a3(this.c,this.d,C.bQ(C.bu(q,C.b2(C.as(C.V(B.j_,B.d.gI(t).j(0.7),w,w,w,34),w,w,w),w,w,new A.b5Q(p,w),B.as),B.ap),new C.o(w,w,s,v,r,new C.a8(B.ax,B.aD,B.x,u,w,w),B.n),B.b7),w)}}
A.b5Q.prototype={
a5(d,e){var w,v,u,t,s,r,q,p
$.a1()
w=C.U()
v=this.b
w.r=v.j(0.09).gt(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.L()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.L()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.ej(B.J)
$.a1()
t=C.U()
t.b=B.ak
t.c=1.4
t.r=v.j(0.35).gt(0)
d.aw(u,30,t)},
ao(d){return!1}}
A.aE_.prototype={
S(){return new A.aE0(new C.cn(null,x.A),null,null)}}
A.aE0.prototype={
gt6(){var w,v=this,u=v.d
if(u===$){w=C.bh(null,D.bct,null,1,null,v)
w.cF(0)
v.d!==$&&C.bH()
v.d=w
u=w}return u},
gXe(){var w,v=this,u=v.e
if(u===$){w=C.bh(null,B.fE,null,1,null,v)
w.f2(0,!0)
v.e!==$&&C.bH()
v.e=w
u=w}return u},
gatb(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gbZ0(){var w=this.w
if(w===$){w=C.z(this.a.c.d,x.G)
this.w=w}return w},
gaQP(){var w=this.x
if(w===$){w=C.z(this.a.c.e,x.Z)
this.x=w}return w},
gaRt(){var w=this.y
if(w===$){w=C.z(this.a.c.f,x.N)
this.y=w}return w},
gb17(){var w=this.z
if(w===$){w=C.z(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a0()
var w=this.gt6()
w.d5()
w.dL$.H(0,this.gcmt())},
cmu(){var w,v,u,t,s,r,q,p=this,o=p.gt6().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gatb().a){case 0:w=D.mL
break
case 1:w=D.t8
break
case 2:w=D.ZH
break
case 3:w=D.mL
break
case 4:w=D.cLS
break
case 5:w=D.t8
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a5I)r=0.09
else r=s===D.a5J?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){A.e1(260+90*v,"",260,1.6,0.18,"tri")
u=D.bIb[v]
A.l_("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
A.As("bell",D.bQV,1400,0.35)}}p.ax=o},
p(){this.gt6().p()
this.gXe().p()
this.bqy()},
ad8(){var w=this
w.gt6().cKA(0,C.dB(0,0,0,B.k.U(11e3/w.Q),0,0))
w.n(new A.eGw(w))},
c89(){this.gt6().bT(0)
this.n(new A.eGv(this))},
aaR(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$aaR=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaRt(),s=t.length,r=0;r<t.length;t.length===s||(0,C.J)(t),++r){q=t[r]
l.push(new C.ao(new C.bb(q,B.aZ,B.aL),$.at()))}m=C.a([],m)
for(t=u.gb17(),s=t.length,r=0;r<t.length;t.length===s||(0,C.J)(t),++r){p=t[r]
m.push(new C.ao(new C.bb(p,B.aZ,B.aL),$.at()))}o=C.z(u.gaQP(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.c0(D.rq,null,new A.eGu(u,l,m,o),t,!0,!0,!0,B.l5,!1,!1,x.H),$async$aaR)
case 2:l=C.z(l,x.bO)
B.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.R$=$.at()
n.O$=0}return C.h(null,v)}})
return C.i($async$aaR,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gatb(),f=i.a.c,e=f.b,d=i.gbZ0(),a0=new A.zk(g,e,f.c,d,i.gaQP(),i.gaRt(),i.gb17())
f=C.aq(B.d.gI(d),B.d.gai(d),0.4)
f.toString
g=x.p
w=C.a([C.aF(h,h,h,h,C.V(i.at?B.nr:L.ql,B.al,h,h,h,21),h,h,h,new A.eGE(i),h,h,h,h,"Sound",h),C.aF(h,h,h,h,D.bAo,h,h,h,i.gbZ1(),h,h,h,h,"Edit words and pictures",h),C.aF(h,h,h,h,D.m2,h,h,h,new A.eGF(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c4(i.gXe(),new A.eGG(i,a0),h),C.cj(new A.eGH(i,a0))],g)
u=i.as
t=u?i.gc88():i.gcaq()
u=u?D.bqc:B.rY
s=C.aq(B.d.gI(d),B.d.gai(d),0.4)
s.toString
t=C.A(C.a([C.aF(h,h,h,h,C.V(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,B.c6),C.C(C.c4(i.gt6(),new A.eGI(i,a1,a0),h),1),C.aF(h,h,h,h,D.bwS,h,h,h,new A.eGJ(i),h,h,h,h,"Replay",B.c6)],g),B.m,h,B.e,B.j,0,h,h)
s=i.Q
u=B.k.ab(s,1)
r=C.aq(B.d.gI(d),B.d.gai(d),0.4)
r.toString
s=A.hp(r,u+"x","Speed",2.5,0.4,new A.eGK(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.cUo[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(B.d.gI(d),B.d.gai(d),0.4)
r.toString
u.push(new A.dx(p.b,o===p.a,new A.eGL(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bIw[q]
o=i.w
if(o===$){o=C.z(i.a.c.d,r)
i.w=o}m=B.d.gI(o).A(0,B.d.gI(n))?34:28
o=i.w
if(o===$){o=C.z(i.a.c.d,r)
i.w=o}l=B.d.gI(o).A(0,B.d.gI(n))?34:28
o=i.w
if(o===$){o=C.z(i.a.c.d,r)
i.w=o}k=B.d.gI(o).A(0,B.d.gI(n))?B.c:B.be
o=i.w
if(o===$){o=C.z(i.a.c.d,r)
i.w=o}j=new C.ax(k,B.d.gI(o).A(0,B.d.gI(n))?2.5:1,B.r,-1)
d.push(C.aJ(h,C.p(h,h,B.h,h,h,new C.o(h,h,new C.c2(j,j,j,j),h,h,new C.a8(B.ax,B.aD,B.x,n,h,h),B.a6),h,l,h,D.ac2,h,h,h,m),B.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.eGM(i,n),h,h,h,h,h,h,!1,B.af))}return A.je(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.eo(new C.am(B.V,h,B.aX,B.q,v,h),i.f),e,C.u(C.a([t,s,new A.eF(u,"STYLE",h),new A.eF(d,"THEME",h)],g),B.m,h,B.e,B.R,0,B.p))},
bsr(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.mL[r]
p=B.k.D((1-B.ev.ar(0,B.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=B.k.D(p/1.5707963267948966,0,1)
q=D.mL[r]
n=q+0.12
m=B.k.D((a0-n)/(q+0.2-n),0,1)
n=D.mL[r]
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
i=D.mL[r]
h=i+0.1
if(B.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.mL[r]
h=i+0.1
h=B.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.mL[r]
h=i+0.1
h=B.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cE(0,r*118,0,f,f,f,new C.kF(q,new C.iu(n,f,B.b4,!0,f,new A.O8(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.mL[r]
u=v-0.02
g=B.k.D((a0-u)/(v+0.1-u),0,1)
u=B.d.gI(w)
v=D.mL[r]
t=v+0.12
e.push(new C.cE(0,r*118-3-2,0,f,f,4,new C.lT(new A.bms(u,g,1-B.k.D((a0-t)/(v+0.22-t),0,1),f),f,B.as,f,f),f))}return new C.a3(a2,358,new C.am(B.V,f,B.a9,B.h,e,f),f)},
bIh(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.t8[r]
p=B.oR.ar(0,B.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.t8[r]
m=q+0.15
l=B.k.D((a0-m)/(q+0.25-m),0,1)
m=D.t8[r]
q=m-0.03
q=B.k.D((a0-q)/(m+0.01-q),0,1)
m=C.de()
k=m.a
k.$flags&2&&C.ah(k)
k[11]=0.0011
m.je(n,n,n,1)
m.fk(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new A.O8(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.de()
k.fk(3.141592653589793)
k=new C.iu(k,f,B.B,!0,f,new A.bnh(a2,108,w,f),f)}e.push(new C.cE(0,r*130,0,f,f,f,new C.kF(q,new C.iu(m,f,B.B,!0,f,k,f),f),f))}return new C.a3(a2,378,new C.am(B.V,f,B.a9,B.h,e,f),f)},
cre(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.ZH[w]
l.push(B.co.ar(0,B.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bU(0,C.b2(n,n,n,new A.bpP(d.d,l,D.aqh,m,A.bmN(e,0.4,0.62),f,A.bmN(e,0.45,0.7),n),B.as),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=A.fD5(g,w)
q=D.aqh[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cE(r,s-q*m*p+12,n,n,t,n,new C.kF(o,C.V(u[w],B.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=A.fD5(g,w)
r=D.ZH[w]
q=r+0.15
v.push(new C.cE(s,l,n,n,t,n,new C.kF(B.k.D((e-q)/(r+0.25-q),0,1),new C.w(u[w],n,B.a4l,n,B.L,n,n,n,n,n,n,n),n),n))}return new C.a3(g,m+90,new C.am(B.V,n,B.a9,B.h,v,n),n)},
byo(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-B.co.ar(0,A.bmN(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bU(0,C.as(C.dO(C.b2(f,f,f,new A.blV(B.d.gI(a1),A.bmN(a3,0,0.2),a4,f),new C.ap(a5*0.95,70)),D.dIO),f,f,f),0,0,0))
w=C.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=B.k.D((a3-l)/(0.12+m-l),0,1)
j=B.dF.ar(0,B.k.D((o-0.7)/0.3,0,1))
l=C.de()
m=l.a
m.$flags&2&&C.ah(m)
m[11]=0.001
l.fk(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.je(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?B.k.J(r,1):-1
w.push(new C.S(o,new C.cE(0,0,0,0,f,f,new C.cw(B.B,f,f,new C.kF(k*(0.45+0.55*o),C.dO(new C.iu(l,f,B.B,!0,f,new A.O8(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.v(n*a5*0.34,-o*18)),f),f),f)))}B.d.aY(w,new A.eGn())
B.d.v(a0,new C.I(w,new A.eGo(),x.fR))
return new C.a3(a5,330,new C.am(B.V,f,B.a9,B.h,a0,f),f)},
bxC(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.t8[q]
o=B.k.D((a2-p)/(p+0.22-p),0,1)
n=B.oD.ar(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.t8[q]
m=B.k.D((a2-m)/(m+0.02-m),0,1)
l=D.as3[q]
k=C.de()
k.me(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.je(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.t8[q]
g=h+0.1
g=B.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cE(0,0,0,0,e,e,new C.cw(B.B,e,e,new C.kF(m,C.dO(new C.iu(k,e,B.B,!0,e,new A.O8(d,92,w,p,j,i,0,g*s,h,e),e),new C.v(0,l)),e),e),e))
l=D.t8[q]
h=l+0.02
f=B.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cE(0,0,0,0,e,e,new C.cw(B.B,e,e,C.dO(new C.lT(new A.b6w(w,f,q,e),e,new C.ap(r,212),e,e),new C.v(0,D.as3[q])),e),e))}return new C.a3(a4,330,new C.am(B.V,e,B.a9,B.h,a0,e),e)},
bvh(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.v(-b0,-150),new C.v(b0,-40),D.dIU],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.mL[r]
p=B.k.D((a8-q)/(q+0.2-q),0,1)
o=B.co.ar(0,p)
q=D.as5[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.mL[r]
f=g+0.2
e=B.k.D((a8-f)/(g+0.3-f),0,1)
f=D.mL[r]
g=f-0.01
g=B.k.D((a8-g)/(f+0.03-g),0,1)
f=C.de()
d=f.a
d.$flags&2&&C.ah(d)
d[11]=0.001
f.me(l*h+D.cPs[r]*o)
f.fk(l*0.9)
h=0.55+0.45*o
f.je(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cE(0,0,0,0,a3,a3,new C.cw(B.B,a3,a3,new C.kF(g,C.dO(new C.iu(f,a3,B.B,!0,a3,new A.O8(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.v(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.mL[r]
i=q+0.17
a2=B.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.as5[r]
a6.push(new C.cE(0,0,0,0,a3,a3,new C.cw(B.B,a3,a3,C.dO(new C.lT(new A.blX(B.d.gI(w),a2,a3),a3,new C.ap(a4,30),a3,a3),new C.v(0,q+48-4)),a3),a3))}}return new C.a3(b0,330,new C.am(B.V,a3,B.a9,B.h,a6,a3),a3)}}
A.bms.prototype={
a5(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.af(w-v,0,w+v,e.b)
q=C.c_(u,B.hj)
$.a1()
t=C.U()
s=0.9*r.d
t.r=r.b.j(s).gt(0)
t.z=H.pi
d.bj(q,t)
t=C.c_(u,B.hj)
q=C.U()
q.r=B.c.j(s).gt(0)
d.bj(t,q)},
ao(d){return d.c!==this.c||d.d!==this.d}}
A.blV.prototype={
a5(d,e){var w,v,u=this.c,t=C.dy(e.ej(B.J),e.b*u,e.a*u)
$.a1()
u=C.U()
u.b=B.ak
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gt(0)
u.z=W.a0i
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
A.b6w.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ej(B.J),f=this.c,e=B.co.ar(0,f)
$.a1()
w=C.U()
w.b=B.ak
v=1-f
w.c=5*v
u=this.b
w.r=B.d.gI(u).j(0.6*v).gt(0)
d.aw(g,40+e*a0.a*0.42,w)
t=new C.f6()
t.dY(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.ag()*3.141592653589793*2
n=(40+t.ag()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.ag()
j=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
i=(p&1)===0?B.d.gI(u):B.c
j.r=i.j(B.k.D(v,0,1)).gt(0)
h=j.L()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
ao(d){return!0}}
A.blX.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ej(B.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=B.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.dy(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.a1()
o=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.b=B.ak
o.c=2
o.r=u.j((1-q)*0.7).gt(0)
n=o.L()
t.drawOval(C.cz(p),n)
n.delete()}},
ao(d){return d.c!==this.c}}
A.bpP.prototype={
a5(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.af(0,d0,0+c5,d0+60)
$.a1()
d0=C.U()
w=c1.b
v=x.O
d0.sav(new C.a8(B.b4,B.bb,B.x,C.a([B.d.gI(w).j(0.18),B.K],v),c2,c2).aB(0,d1))
d2.bp(d1,d0)
d0=C.U()
d0.r=B.c.j(0.18).gt(0)
d0.c=1
d2.bU(new C.v(0,c4),new C.v(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=A.fD5(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.a1()
a3=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a3.r=B.w.j(0.5).gt(0)
a3.z=B.mO
a4=a3.L()
t.drawOval(C.cz(new C.af(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.af(d,a1,a3,a1+a0)
a6=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a7=C.aq(B.d.gI(w),B.c,0.1)
a7.toString
a6.sav(new C.a8(B.b4,B.bb,B.x,C.a([a7,B.d.gai(w)],v),c2,c2).aB(0,a5))
a4=a6.L()
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
a6.push(new C.bW())
a6=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a6.r=C.aq(B.d.gai(w),B.w,0.5).gt(0)
a4=a6.L()
a6=a8.gbM().a.snapshot()
t.drawPath((a8.e=new C.cG(a6)).a,a4)
a4.delete()
a6=C.a([],n)
b0=new C.b0(a2,B.aw,c2,c2,a6)
a6.push(new C.bj(d,a1))
a6.push(new C.av(d+c8,a9))
a6.push(new C.av(a7,a9))
a6.push(new C.av(a3,a1))
a6.push(new C.bW())
a2=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a2.r=C.aq(B.d.gI(w),B.c,0.45).gt(0)
a4=a2.L()
a2=b0.gbM().a.snapshot()
t.drawPath((b0.e=new C.cG(a2)).a,a4)
a4.delete()
b1=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
b1.b=B.ak
b1.c=1
b1.r=B.c.j(0.28).gt(0)
a4=b1.L()
t.drawRect(C.cz(a5),a4)
a4.delete()
a4=b1.L()
a2=a8.e
t.drawPath((a2==null?a8.e=new C.cG(a8.gbM().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.L()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cG(b0.gbM().a.snapshot()):a2).a,a4)
a4.delete()
b2=B.k.bK(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=C.c_(new C.af(b7,a7,b7+r,b5),B.hj)
$.a1()
b9=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
b9.r=(b4?B.c.j(q):B.w.j(0.22)).gt(0)
a4=b9.L()
t.drawRRect(C.fM(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.af(d,a1,a3,a1+28)
J.bP(t.save())
t.clipRect(C.cz(a5),$.vW()[1],!0)
$.a1()
a1=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a1.sav(new C.a8(B.b4,B.bb,B.x,C.a([B.K,B.c.j(0.4),B.K],v),c2,c2).aB(0,c0))
a4=a1.L()
t.drawRect(C.cz(c0),a4)
a4.delete()
t.restore()}}},
ao(d){return!0}}
A.aJB.prototype={
aN(){this.aV()
this.aS()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdB())
w.aX$=null
w.a2()}}
A.Z3.prototype={
a3(){return"_Role."+this.b}}
A.px.prototype={}
A.qb.prototype={}
A.B6.prototype={}
A.X3.prototype={}
A.acc.prototype={}
A.Zg.prototype={
gX(d){return this.d}}
A.Bg.prototype={}
A.a9a.prototype={}
A.a9r.prototype={}
A.abm.prototype={}
A.bcU.prototype={
a09(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
A.e1(d,"",e,g,h,f)},
b28(d,e,f){return this.a09(d,e,f,0,0.55)},
axx(d,e,f,g){return this.a09(d,e,f,0,g)},
b29(d,e,f,g){return this.a09(d,e,f,g,0.55)},
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
agI(d,e,f,g){var w="n"+this.ay++,v=new A.qb(w,e,f,g)
this.a.m(0,w,v)
this.b_()
return v},
A0(d,e,f){return this.agI(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
B.d.bl(w.b,new A.d8q(e))
B.d.bl(w.c,new A.d8r(e))
w.b_()},
b5T(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.m6.h(0,v.b).c===D.vv)return!1
w=this.b
if(B.d.be(w,new A.d8n(d,e)))return!1
w.push(new A.B6(d,e))
this.b_()
return!0},
bSd(d){var w
if(d.b==="beat")return D.bR3[B.o.J(d.d,4)]
w=this.at
switch(B.o.J(d.d,3)){case 1:return 350+w.aG(500)
case 2:return 1400+w.aG(2200)
default:return 450+w.aG(2000)}},
aAT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.m(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.m(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=B.o.J(w,6)
t=D.asj[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new A.Bg(u,t,j.ax,90))
w.push(new A.Bg(u,B.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ag()*3.141592653589793*2
v.push(new A.Zg(u,new C.v(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b28(261.63*Math.pow(2,([0,4,7,12,16,19][B.o.J(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ag()*3.141592653589793*2
p=100+w.ag()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,B.c,w.ag()*0.5)
m.toString
v.push(new A.Zg(u,new C.v(o*p,n*p),m,3+w.ag()*4.5,1000+w.aG(700),j.ax))}j.f.push(new A.Bg(u,t,j.ax,120))
j.axx(120,200,"noise",0.5)
j.b28(261.63*Math.pow(2,([7,12,16,19][w.aG(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new A.Bg(u,t,j.ax,230))
w.push(new A.Bg(u,t,j.ax+160,160))
w.push(new A.Bg(u,t,j.ax+320,100))
j.b29(180+j.at.aG(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new A.a9a(u,new C.v((w.ag()-0.5)*220,-260-w.ag()*180),t,j.ax))
j.b29(300+w.aG(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ag()*3.141592653589793*2
j.w.push(new A.a9r(u,u.ap(0,new C.v(Math.cos(q),Math.sin(q)).aP(0,260+w.ag()*200)),t,j.ax))
j.a09(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fV()
j.a09(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new A.abm(u,D.arU[v],t,j.ax))
j.axx(261.63*Math.pow(2,([0,5,9,12][j.at.aG(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.axx(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.bNa[B.o.J(w,3)]
for(k=1;k<=3;++k)j.chM(d,j.ax+l*k,!0)
break
case"delay":for(w=B.d.gaf(j.b),v=new C.hX(w,new A.d8o(d));v.C();)j.aw5(w.gT(0),j.ax+D.bZm[B.o.J(g.d,4)])
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
case"chance":s=j.at.aG(100)<D.cf2[B.o.J(g.d,3)]
break
default:break}if(s)for(w=B.d.gaf(j.b),v=new C.hX(w,new A.d8p(d));v.C();)j.aw5(w.gT(0),j.ax)
w=j.e
v=w.length
if(v>700)B.d.ye(w,0,v-700)},
chM(d,e,f){var w=this.c
if(w.length>260)return
w.push(new A.X3(e,"~"+d))},
aw5(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new A.acc(d.a,v,e,w))
u.push(new A.X3(w,v))},
cLd(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=C.a2(w).k("bf<2>")
w=C.z(new C.bf(w,v),v.k("F.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,C.J)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.m(0,r,o.ax+300)
else if(o.ax>=q){o.aAT(r)
u.m(0,r,o.ax+o.bSd(s))}}w=o.c
v=C.T(w).k("a5<1>")
q=C.z(new C.a5(w,new A.d8s(o),v),v.k("F.E"))
if(q.length!==0){B.d.bl(w,new A.d8t(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.J)(q),++t){u=q[t].b
if(B.a.a_(u,"~")){p=B.a.aU(u,1)
for(u=B.d.gaf(v),r=new C.hX(u,new A.d8u(p));r.C();)o.aw5(u.gT(0),o.ax)}else o.aAT(u)}}B.d.bl(o.d,new A.d8v(o))
B.d.bl(o.e,new A.d8w(o))
B.d.bl(o.f,new A.d8x(o))
B.d.bl(o.w,new A.d8y(o))
B.d.bl(o.x,new A.d8z(o))
B.d.bl(o.r,new A.d8A(o))
o.b_()},
a56(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
m.push(C.D(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=C.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,C.J)(t),++o){n=t[o]
v.push(C.a([n.a,n.b],r))}return B.Q.aj(C.D(["nodes",m,"edges",v],u,x.ew),null)},
cCz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.h.a(B.Q.aC(0,d,null))
k.a8(0)
for(o=x.a,n=J.aW(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gT(n)
u=C.t(J.q(v,"k"))
if(!D.m6.am(0,u))continue
t=C.t(J.q(v,"id"))
m.m(0,t,new A.qb(t,u,new C.v(C.fc(J.q(v,"x"))*k.cy.a,C.fc(J.q(v,"y"))*k.cy.b),B.k.M(C.fc(J.q(v,"p")))))
s=C.c3(C.aI(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aW(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gT(o)
q=C.t(J.q(r,0))
p=C.t(J.q(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new A.B6(q,p))}k.b_()
return!0}catch(l){return!1}},
cFw(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
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
l.b5T(w[m.a],w[m.b])}},
gX(d){return this.cy}}
A.Ek.prototype={}
A.TL.prototype={
S(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new A.aB4(new A.bcU(C.R(w,x.f3),v,u,t,s,r,q,p,o,C.R(w,n),C.R(w,n),C.R(w,n),C.R(w,n),B.cA,B.K,B.as,$.at()),B.bu,B.J,B.J,B.U,null,null)}}
A.aB4.prototype={
a9w(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$a9w=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.aw(),$async$a9w)
case 6:q=n.kq(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.n(new A.e8j(s))
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
return C.i($async$a9w,v)},
a6A(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a6A=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.n(new A.e88(s))
u=3
w=6
return C.b(C.aw(),$async$a6A)
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
return C.i($async$a6A,v)},
bEd(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a2(n).k("bf<2>")
v=""+n.a+"|"+o.length+"|"+new C.bf(n,w).cI(0,0,new A.e8a())+"|"+B.d.cI(o,0,new A.e8b())
if(v===p.ch)return p.CW
u=new A.e8e()
t=x.s
s=C.a([],t)
r=new A.e8f(p,s,u)
for(n=new C.bf(n,w).gaf(0),w=new C.hX(n,new A.e8c());w.C();){q=n.gT(0)
if(!B.d.be(o,new A.e8d(q)))s.push(C.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.dc(s,0,C.dJ(5,"count",x.S),x.N).dz(0)},
Z(){var w,v=this
v.a0()
v.a9w()
v.d.db=v.ay
w=v.qQ(new A.e8J(v))
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
w.bpD()},
a93(d){return this.bRG(d)},
bRG(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$a93=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.aw(),$async$a93)
case 6:q=m.aR(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cCz(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aRT(B.d.gI(D.ars))
if(s.c!=null)s.n(new A.e8i())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$a93,v)},
aRT(d){this.d.cFw(0,d.c,d.d)
this.CT()},
CT(){var w=this.as
if(w!=null)w.a9(0)
this.as=C.cV(B.ll,new A.e84(this))},
atc(d){var w,v,u,t,s=this.d.a,r=C.a2(s).k("bf<2>")
s=C.z(new C.bf(s,r),r.k("F.E"))
r=C.T(s).k("dv<1>")
s=new C.dv(s,r)
s=new C.bR(s,s.gG(0),r.k("bR<ai.E>"))
w=d.a
r=r.k("ai.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
c6b(d){var w,v,u,t,s,r=this.d.a,q=C.a2(r).k("bf<2>")
r=C.z(new C.bf(r,q),q.k("F.E"))
q=C.T(r).k("dv<1>")
r=new C.dv(r,q)
r=new C.bR(r,r.gG(0),q.k("bR<ai.E>"))
w=d.a
v=d.b
q=q.k("ai.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bRu(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.dw(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.m6.h(0,r.b).c===D.vv)continue
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
bZ6(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=A.fZV(new C.v(n.a+36,n.b+0),new C.v(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cp7(d){var w,v,u,t,s,r,q=this,p=q.atc(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eN()
u=v.b
if(u==="button"){w.aAT(p)
return}if(q.r)return
t=D.m6.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.pJ)s=6
else s=1
v.d=B.o.J(v.d+1,s)
w.b_()
q.CT()
return}if(q.r)return
r=q.bZ6(d)
if(r!=null){w=q.d
B.d.cu(w.b,r)
w.b_()
q.CT()}},
c7r(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.c6b(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.atc(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aD(0,d)}},
c7s(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b_()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.v(B.k.D(d.a+s.y.a,46,t.a-46),B.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b_()}}},
aWs(){var w,v,u=this
if(u.z!=null){w=u.bRu(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.b5T(v,w)}else v=!1
if(v){C.jC()
u.CT()}u.z=null
u.d.b_()}else if(u.x!=null){if(u.at)u.CT()
u.x=null}},
a9K(d){return this.bUh(d)},
bUh(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$a9K=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.atc(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.j6()
p=t.c
p.toString
w=3
return C.b(C.c0(D.rq,null,new A.e8l(q),p,!0,!0,!1,B.l5,!1,!1,x.y),$async$a9K)
case 3:if(f===!0){r.W(0,s)
t.CT()}case 1:return C.h(u,v)}})
return C.i($async$a9K,v)},
bZ4(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.A0(0,d,new C.v(v.a*(0.25+u.ag()*0.5),v.b*(0.2+u.ag()*0.55)))
C.eN()
this.CT()},
adh(){var w=0,v=C.j(x.H),u=this,t,s
var $async$adh=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.c0(D.rq,null,new A.e8n(),s,!0,!0,!0,B.l5,!1,!1,x.es),$async$adh)
case 2:t=e
if(t!=null)u.aRT(t)
return C.h(null,v)}})
return C.i($async$adh,v)},
aaS(d){var w=0,v=C.j(x.H),u=this,t
var $async$aaS=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.cg(null,null,!0,null,new A.e87(),t,null,!0,!0,x.y),$async$aaS)
case 2:if(f===!0){u.d.a8(0)
u.CT()}return C.h(null,v)}})
return C.i($async$aaS,v)},
B(d){var w=this,v=null,u=C.a([C.afs(w.r?new C.bE(B.a1,v,v,new C.B(B.DM,C.hg(D.buV,D.eFC,new A.e8H(w),v),v),v):w.bZ7(),B.b9,B.ib),C.C(C.cj(new A.e8I(w)),1)],x.p)
if(!w.r)u.push(w.ck8())
return C.ce(v,B.bV,C.br(!0,C.u(u,B.m,v,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),v,!1,!1,v,v)},
bA_(){var w=null,v=new A.e89(),u=B.w.j(0.7),t=C.m(26),s=C.G(B.br.j(0.5),B.r,1)
return C.bU(0,C.ec(C.as(C.p(w,C.cf(C.u(C.a([D.ePO,B.au,D.eWC,B.ay,v.$4(B.o9,B.br,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(T.Ex,B.cK,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(B.kX,B.cd,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(D.boB,B.cV,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.eW_,new C.bE(B.a7,w,w,C.bG(!1,D.eN9,w,w,!0,w,w,this.gbzT(),w,w),w)],x.p),B.F,w,B.e,B.R,0,B.p),B.q,w,B.z,w,w,w,w,B.ah),B.h,w,B.Sx,new C.o(D.rq,w,s,t,w,w,B.n),w,w,w,B.fv,X.adg,w,w,w),w,w,w),u,!0),0,0,0)},
bZ7(){var w=this,v=null,u=C.aF(v,v,v,v,F.qn,v,v,v,new A.e8t(w),v,v,v,v,v,v),t=w.a64(B.Xw,"How it works",new A.e8u(w),!0),s=w.ay?B.nr:L.ql
return new C.B(D.bj2,C.A(C.a([u,D.bko,t,w.a64(s,"Sound",new A.e8v(w),!0),w.a64(B.dO,"Ideas",w.gcb4(),!0),w.a64(D.wQ,"Clear",w.gbZ5(w),!0),w.aJc(B.iF,"Show",new A.e8w(w),!0,!0)],x.p),B.m,v,B.e,B.j,0,v,v),v)},
aJc(d,e,f,g,h){var w=null,v=h?B.br:B.c.j(0.08),u=C.m(14),t=C.m(14),s=C.a([C.V(d,h?B.w:B.c,w,w,w,20)],x.p)
return new C.B(A3.ui,C.aD(!1,B.X,!0,u,C.aH(!1,t,!0,C.hJ(new C.B(new C.L(8,8,8,8),C.A(s,B.m,w,B.e,B.R,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ac),w)},
a64(d,e,f,g){return this.aJc(d,e,f,g,!1)},
ck8(){var w=null,v=new A.e8p(this),u=B.c.j(0.08)
return C.p(w,C.cf(C.A(C.a([v.$2("START",D.vv),v.$2("CHANGE",D.C8),v.$2("REACT",D.pJ)],x.p),B.F,w,B.e,B.j,0,w,w),B.q,w,B.z,w,w,w,w,B.aY),B.h,w,w,new C.o(D.TJ,w,new C.c2(new C.ax(u,1,B.r,-1),B.W,B.W,B.W),w,w,w,B.n),w,w,w,w,D.bel,w,w,w)},
ck9(d){var w,v,u,t,s=null,r=D.m6.h(0,d)
r.toString
w=C.m(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.G(v.j(0.5),B.r,1)
return new C.B(B.hd,C.aJ(s,C.p(s,C.u(C.a([C.V(r.b,v,s,s,s,22),B.d5,C.d(r.a,s,1,B.Z,s,s,s,D.a4d,s,s,s)],x.p),B.m,s,B.e,B.R,0,B.p),B.h,s,s,new C.o(s,s,t,w,s,new C.a8(B.b4,B.bb,B.x,u,s,s),B.n),s,s,s,s,B.hs,s,s,62),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.e8o(this,d),s,s,s,s,s,s,!1,B.af),s)}}
A.bcV.prototype={
a5(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bP(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.a1()
u=C.U()
u.r=B.c.j(0.05).gt(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.L()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.a1()
o=C.U()
o.r=b5.cx.j(0.4*((p-b6)/800)).gt(0)
b8.bp(new C.af(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.J)(w),++m){l=w[m]
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
d.push(new C.p5(h+a1,i,f-a1,g,f,g))
a2=D.m6.h(0,k.b).d
a3=D.m6.h(0,j.b).d
e=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
e.b=B.ak
e.c=3
e.d=B.bZ
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.qT(new C.v(h,i),new C.v(f,g))
e.sav(new C.a8(B.a1,B.a7,B.x,d,b4,b4).aB(0,new C.af(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.L()
i=a0.gbM().a.snapshot()
b7.drawPath((a0.e=new C.cG(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.J)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=B.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=A.fZV(new C.v(i.a+36,i.b+0),new C.v(h.a-36,h.b),a5)
$.a1()
h=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
h.r=B.c.j(0.35).gt(0)
h.z=H.pi
q=h.L()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
g.r=B.c.gt(0)
q=g.L()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ap(0,D.Ge)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new C.b0($.a1().r,B.aw,b4,b4,C.a([],o))
o=a8.b
a0.N(new C.bj(t,o))
i=a9.b
a0.N(new C.p5(t+a1,o,w-a1,i,w,i))
i=C.U()
i.b=B.ak
i.c=3
i.r=B.c.j(0.7).gt(0)
b8.b4(a0,i)
i=C.U()
i.r=B.c.gt(0)
b8.aw(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.J)(w),++m){b0=w[m]
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
q=h.L()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,C.J)(w),++m){b1=w[m]
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
o.sav(new C.a8(B.a1,B.a7,B.x,f,b4,b4).aB(0,new C.af(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.L()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
i.r=B.c.gt(0)
q=i.L()
b7.drawCircle(o,h,6,q)
q.delete()
i=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
i.r=g.j(0.5*(1-v)).gt(0)
i.z=B.ji
q=i.L()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,C.J)(w),++m){a4=w[m]
v=B.k.D((b6-a4.f)/a4.e,0,1)
o=a4.a
$.a1()
i=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
i.r=a4.c.j(1-v).gt(0)
q=i.L()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,C.J)(w),++m){j=w[m]
o=j.a
$.a1()
i=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
h=j.c
i.r=h.j(0.35).gt(0)
i.z=B.ji
q=i.L()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
i.sav(new C.bS(N.qY,0.5,B.x,b4,0,C.a([B.c,h],p),b4,b4).aB(0,C.c1(j.a,8)))
q=i.L()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.J)(b5),++m){a6=b5[m]
v=B.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=A.bcW(a6.b,26+8*t,a6.c.j(t),b4,b4,B.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a5(b8,new C.v(t.a-o/2,t.b-(40+60*v+p.gbd(p)/2)))}for(b5=new C.dw(n,n.r,n.e);b5.C();)b3.c70(b8,b5.d,b6)
b7.restore()},
c70(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.m6.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:B.k.D(1-(f-w)/520,0,1)
u=C.dy(e.c,64,64)
t=C.c_(u,B.jK)
s=t.eF(B.cv)
$.a1()
r=C.U()
r.r=B.w.j(0.55).gt(0)
r.z=B.mO
d.bj(s,r)
if(v>0){s=t.cD(6)
r=C.U()
r.r=h.d.j(0.6*v).gt(0)
r.z=B.FJ
d.bj(s,r)}s=t.eF(B.cG)
r=C.U()
q=h.d
r.r=C.aq(q,B.w,0.65).gt(0)
d.bj(s,r)
r=C.U()
s=C.aq(q,B.c,0.18+0.4*v)
s.toString
p=C.aq(q,B.w,0.35)
p.toString
r.sav(new C.a8(B.b4,B.bb,B.x,C.a([s,p],x.O),j,j).aB(0,u))
d.bj(t,r)
r=C.U()
r.b=B.ak
r.c=1.2
r.r=B.c.j(0.35).gt(0)
d.bj(t,r)
r=h.b
p=e.c
o=A.bcW(C.jv(r.a),30,B.c,r.b,j,B.I)
r=o.b
s=r.c
r=r.a.c
o.a5(d,p.aD(0,new C.v(s/2,r.gbd(r)/2)))
n=A.bcW(h.a,11,B.c,j,j,B.I)
n.a5(d,e.c.ap(0,new C.v(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[B.o.J(e.d,r)]
else m=i==="pop"?D.arU[B.o.J(e.d,6)]:j
h=h.c
if(h===D.pJ){s=e.c.ap(0,new C.v(0,62))
r=C.U()
r.r=D.asj[B.o.J(e.d,6)].gt(0)
d.aw(s,5,r)}else if(m!=null){l=A.bcW(m,9.5,B.aB,j,j,B.O)
l.a5(d,e.c.ap(0,new C.v(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=A.bcW(m,9.5,B.aB,j,j,B.O)
l.a5(d,e.c.ap(0,new C.v(-l.b.c/2,54)))}if(k.c)return
if(h!==D.vv)k.aXe(d,e.c.aD(0,D.Ge),q)
k.aXe(d,e.c.ap(0,D.Ge),q)},
aXe(d,e,f){var w
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
A.aIM.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bhp.prototype={}
A.O_.prototype={
gX(d){return this.d}}
A.U_.prototype={
S(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new A.bgu(new C.cn(null,x.A),w,v,B.cA,B.bu,D.CY,null,null)}}
A.bgu.prototype={
aV3(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=B.o.D(B.k.bK((1-d.b/(C.aG(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.aqV[B.o.J(v,5)]+12*B.o.ak(v,5)+12
switch(t.z){case"glow":A.l_("synth",u,420,0.3)
break
case"rainbow":A.l_("bell",u,700,0.35)
break
case"stars":A.l_("pluck",u+12,400,0.4)
break
case"sparks":A.e1(2400+t.r.aG(2000),"",60,0,0.18,"noise")
break
default:A.e1(110+t.r.aG(60),"",140,0,0.22,"noise")}},
c0Y(d){return this.aV3(d,!1)},
Z(){var w,v=this
v.a0()
w=v.qQ(new A.eiu(v))
w.kj(0)
v.w!==$&&C.aO()
v.w=w},
p(){var w=this.w
w===$&&C.c()
w.p()
this.bpM()},
gaWM(){var w=this.Q
return w<0?new G.mO(1,B.k.J(this.y*0.18,360),0.85,1).iD():D.O6[w]},
aNs(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gaWM(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.ag()*3.141592653589793*2
switch(l.z){case"fire":q=v.ag()
p=l.as
o=v.ag()
n=v.ag()
m=C.aq(B.cV,B.aH,v.ag())
m.toString
j.push(new A.O_(new C.v(u+(q-0.5)*p,t),new C.v((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.ag()*0.4),l.y,700+v.aG(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.ag()*200
n=C.aq(k,B.c,v.ag()*0.6)
n.toString
j.push(new A.O_(d,new C.v(q*o,p*o),n,1.5+v.ag()*3,l.y,600+v.aG(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.ag()*40
j.push(new A.O_(d,new C.v(q*o,p*o),k,1.2+v.ag()*1.8,l.y,500))}}},
aTY(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gaWM()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new A.bhp(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aNs(e)
r.aV3(e,!0)
r.n(new A.ei5())},
aTX(){this.ax=null
this.n(new A.ei4())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aF(n,n,n,n,D.m2,n,n,n,new A.eie(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b2(n,n,n,new A.bnH(k,o.f,o.y,o.at,n),B.as)],m)
if(!o.ay&&k.length===0)j.push(D.aWO)
k=C.aJ(B.c5,new C.am(B.V,n,B.aX,B.q,j,n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,new A.eif(o),new A.eig(o),new A.eik(o),n,n,n,n,n,n,n,n,n,new A.eil(o),new A.eim(o),n,n,n,!1,B.af)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cCk[w]
j.push(new A.dx(v.b,o.z===v.a,new A.ein(o,v),v.c,B.cd,n))}u=C.a([new A.DP(B.c,o.Q<0,new A.eio(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new A.DP(D.O6[t],o.Q===t,new A.eip(o,t),!1,n))
s=o.as
s=A.hp(B.cd,B.o.u(B.k.U(s)),"Size",36,4,new A.eiq(o),s)
r=o.ch
q=r?B.nr:L.ql
q=C.a([new A.dx("Sound",r,new A.eir(o),q,B.cd,n),new A.ff(B.uC,"Undo",new A.eih(o),B.c,n),new A.ff(D.wQ,"Clear",new A.eii(o),B.cN,n)],m)
for(w=0;w<4;++w){p=D.cQR[w]
q.push(new A.DP(p,o.at.A(0,p),new A.eij(o,p),!1,n))}return A.je(B.cd,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.eo(k,o.d),"SPARK PAINTER",C.u(C.a([new A.eF(j,"BRUSH",n),new A.eF(u,"COLOUR",n),s,new A.eF(q,n,n)],m),B.m,n,B.e,B.R,0,B.p))}}
A.bnH.prototype={
a5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.a1()
w=C.U()
v=a4.e
w.r=v.gt(v)
a6.bp(new C.af(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.J)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.a1()
o=C.a([],t)
n=new C.b0(p.r,B.aw,a5,a5,o)
o.push(new C.bj(B.d.gI(q).a,B.d.gI(q).b))
for(p=C.T(q),m=p.k("pt<1>"),l=new C.pt(q,1,a5,m),l.FS(q,1,a5,p.c),l=new C.bR(l,l.gG(0),m.k("bR<ai.E>")),m=m.k("ai.E");l.C();){p=l.d
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
j=p.L()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.a1()
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.b=B.ak
q.d=B.bZ
q.e=B.fk
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gt(0)
q.z=new C.hG(B.G,p)
j=q.L()
q=n.e
u.drawPath((q==null?n.e=new C.cG(n.gbM().a.snapshot()):q).a,j)
j.delete()
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.b=B.ak
q.d=B.bZ
q.e=B.fk
q.c=p
q.r=o.gt(0)
j=q.L()
q=n.e
u.drawPath((q==null?n.e=new C.cG(n.gbM().a.snapshot()):q).a,j)
j.delete()
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.b=B.ak
q.d=B.bZ
q.e=B.fk
q.c=p*0.35
q.r=B.c.j(0.85).gt(0)
j=q.L()
q=n.e
u.drawPath((q==null?n.e=new C.cG(n.gbM().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new G.mO(1,B.o.J(i*5,360),0.85,1).iD()
o=q[i-1]
m=q[i]
$.a1()
l=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
l.c=p
l.d=B.bZ
l.r=h.gt(0)
j=l.L()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,C.J)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=B.d.gI(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new G.mO(1,B.o.J(a3*23,360),0.7,1).iD():l
a4.bZ8(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.J)(w),++s){a0=w[s]
e=B.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.a1()
p=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=a0.c.j((1-e)*0.9).gt(0)
p.z=F.a0j
j=p.L()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
bZ8(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.a1(),o=C.a([],x.v),n=new C.b0(p.r,B.aw,null,null,o)
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
n.e=null}}n.N(new C.bW())
$.a1()
p=C.U()
p.r=h.j(0.4).gt(0)
p.z=B.ji
d.b4(n,p)
p=C.U()
p.r=h.gt(0)
d.b4(n,p)},
ao(d){return!0}}
A.Ub.prototype={
S(){return new A.aBi(new C.cn(null,x.A),new C.ao(new C.bb("NGMY",B.aZ,B.aL),$.at()),null,null)}}
A.aBi.prototype={
gHl(){var w,v=this,u=v.e
if(u===$){w=C.bh(null,B.rA,null,1,null,v)
w.cF(0)
v.e!==$&&C.bH()
v.e=w
u=w}return u},
Z(){this.a0()
var w=this.gHl()
w.d5()
w.dL$.H(0,this.gbQF())},
bQG(){var w,v,u,t,s,r,q,p=this,o=p.gHl().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?B.lz:new C.lM(w)).gG(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)A.e1(1500,"",35,0,0.18,"square")
else if(s==="glitch")A.e1(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
A.l_(s,D.apU[B.o.J(t,8)]+12,450,0.35)}}p.Q=o},
p(){this.gHl().p()
var w=this.f
w.R$=$.at()
w.O$=0
this.bpS()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.lM(h)
w=C.z(h,C.a2(h).k("F.E"))}v=D.O6[k.w]
h=x.p
u=C.a([C.aF(j,j,j,j,D.m2,j,j,j,new A.ep3(k,d),j,j,j,j,"Share",j)],h)
t=C.m(26)
s=D.arV[k.y]
s=C.bu(t,C.bQ(C.as(C.c4(k.gHl(),new A.ep4(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a8(B.ax,B.aD,B.x,s,j,j),B.n),B.b7),B.ap)
t=B.c.j(0.06)
t=C.aK(j,B.U,!1,j,!0,B.q,j,C.aL(),i,j,j,j,j,j,2,C.bl(j,new C.b1(4,C.m(14),B.W),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,H.BL,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),B.z,!0,j,!0,j,!1,j,B.ae,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new A.ep5(k),j,j,j,!1,j,j,!1,j,!0,j,B.a8,j,j,j,j,j,j,j,j,j,j,j,B.h7,!0,B.a5,j,B.am,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.ceR[r]
i.push(new A.dx(q.b,k.r===q.a,new A.ep6(k,q),j,B.cV,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new A.DP(D.O6[o],k.w===o,new A.ep7(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?B.nr:L.ql
l=C.a([new A.dx(m,n,new A.ep8(k),l,B.cV,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new A.DP(D.arV[o][0],k.y===o,new A.ep9(k,o),!1,j))
n.push(B.bp)
n.push(new A.ff(B.m_,"Replay",new A.epa(k),B.c,j))
m=k.x
return A.je(B.cV,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.B(B.bA,new C.eo(s,k.d),j),"TITLE ANIMATOR",C.u(C.a([t,B.P,new A.eF(i,"MOVE",j),new A.eF(p,"COLOUR",j),new A.eF(l,"SOUND",j),new A.eF(n,"BACK",j),A.hp(B.cV,B.o.u(B.k.U(m)),"Size",96,28,new A.epb(k),m)],h),B.m,j,B.e,B.R,0,B.p))},
bTn(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cI(h.j(0.7),B.J,18)],x.q),o=0,n=1,m=1,l=0
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
p.push(new C.cI(h,B.J,30*v))
p.push(new C.cI(h.j(0.8),B.J,60*v))
w=h
m=v
break
case"glitch":u=B.o.J(B.k.bK(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=B.bc
else w=u?B.cd:h
break
case"zoom":t=B.k.D(g*1.4-q*0.5,0,1)
n=B.oD.ar(0,t)
w=h
m=t
break
case"rainbow":w=new G.mO(1,B.k.J(g*360+e*40,360),0.75,1).iD()
B.d.a8(p)
p.push(new C.cI(w.j(0.7),B.J,18))
break
default:w=h}return C.d4(C.dO(C.e4(B.B,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,B.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.v(l,o)),m)}}
A.aIV.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.aJ0.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.Yz.prototype={}
A.TJ.prototype={
S(){var w=C.a([],x.aS)
return new A.aAY(new C.cn(null,x.A),w,B.cA,B.as,$,B.bu,0,C.a([],x.X),null,null)}}
A.aAY.prototype={
gaaT(){var w=this.r
return new C.v(w.a/2,w.b/2)},
aXU(){return new G.mO(1,this.f.ag()*360,0.6,1).iD()},
anY(d,e,f,g){var w=this,v=w.gaaT().ap(0,new C.v(Math.cos(e),Math.sin(e)).aP(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new A.Yz(v,new C.v(-t,s).aP(0,r).aP(0,u*f),w.Q*(0.6+w.f.ag()*0.9),w.aXU(),C.a([],x.g)))},
bzm(d,e,f){return this.anY(d,e,f,!1)},
bzl(d,e){return this.anY(d,e,1,!1)},
cmn(){var w,v,u,t=this
B.d.a8(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bzl(40+w*u/5,v.ag()*3.141592653589793*2)},
bAe(){var w=this.r
this.bzm(Math.min(w.a,w.b)*0.42,this.f.ag()*3.141592653589793*2,0.45)},
Z(){this.a0()
this.kH()},
l_(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,B.as))return
w=a2.e
v=w.length
if(v===0&&a2.fC$<300)return
u=a2.gaaT()
t=a3*a2.x/4
for(s=u.a,r=u.b,q=0;q<4;++q,v=o)for(p=0;o=w.length,p<o;w.length===v||(0,C.J)(w),++p){n=w[p]
o=n.a
m=s-o.a
o=r-o.b
l=Math.max(m*m+o*o,400)
k=Math.sqrt(l)
j=1e6*a2.w/l
i=new C.v(m/k*j,o/k*j)
if(a2.y)for(o=w.length,h=0;h<w.length;w.length===o||(0,C.J)(w),++h){g=w[h]
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
n.a=new C.v(j.a+m*t,j.b+o*t)}for(p=0;o=w.length,p<o;w.length===v||(0,C.J)(w),++p){n=w[p]
if(a2.z){o=n.e
if(o.length!==0){m=B.d.gai(o)
j=n.a
f=m.a-j.a
j=m.b-j.b
j=Math.sqrt(f*f+j*j)>3
m=j}else m=!0
if(m)o.push(n.a)
if(o.length>260)B.d.cu(o,0)}else B.d.a8(n.e)}for(p=0;p<w.length;w.length===o||(0,C.J)(w),++p){n=w[p]
v=n.a
a1=!1
if(v.b<r)if(J.lB(v.a-s)!==J.lB(n.f-s)){v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
m=v<Math.min(Math.abs(m.a),Math.abs(m.b))
a1=m}if(a1&&a2.ax&&a2.fC$-n.r>250){n.r=a2.fC$
v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
A.l_("bell",D.apU[B.k.U((1-B.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a5(w,new A.e5j(u),C.T(w).k("a5<1>")).gG(0)>0&&a2.ax)A.e1(70,"",300,0.6,0.8,"sine")
B.d.bl(w,new A.e5k(a2,u))},
caY(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gaaT()
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
gaRy(){var w,v=this.as
if(v==null||this.at==null)v=B.J
else{w=this.at
w.toString
w=v.aD(0,w).aP(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aF(r,r,r,r,D.m2,r,r,r,new A.e57(s,d),r,r,r,r,"Share",r)],q),o=C.cj(new A.e58(s)),n=s.w
n=A.hp(B.dh,B.k.ab(n,1)+"x","Sun mass",2.5,0.3,new A.e59(s),n)
w=s.x
w=A.hp(B.dh,B.k.ab(w,1)+"x","Time",3,0.2,new A.e5b(s),w)
v=s.Q
v=A.hp(B.dh,B.o.u(B.k.U(v)),"Planet size",16,3,new A.e5c(s),v)
u=s.ax
t=u?B.nr:L.ql
return A.je(B.dh,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.u(C.a([n,w,v,new A.eF(C.a([new A.dx("Sound",u,new A.e5d(s),t,B.dh,r),new A.dx("Trails",s.z,new A.e5e(s),B.Ez,B.dh,r),new A.dx("Planets pull each other",s.y,new A.e5f(s),B.xf,B.dh,r)],q),r,r),new A.eF(C.a([new A.ff(B.lZ,"Solar system",new A.e5g(s),B.dh,r),new A.ff(B.m0,"Comet",new A.e5h(s),B.c,r),new A.ff(B.lW,"Cluster",new A.e5i(s),B.c,r),new A.ff(D.wQ,"Clear",new A.e5a(s),B.cN,r)],q),r,r)],q),B.m,r,B.e,B.R,0,B.p))}}
A.bhc.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.a1()
w=C.U()
w.r=D.TC.gt(0)
d.bp(new C.af(0,0,0+g,0+f),w)
v=new C.f6()
v.dY(5)
for(w=d.a,u=0;u<70;++u){t=v.ag()
s=v.ag()
r=v.ag()
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=B.c.j(0.25+v.ag()*0.4).gt(0)
p=q.L()
w.drawCircle(t*g,s*f,r*1.2+0.3,p)
p.delete()}o=16+i.d*6
g=i.c
f=o*3.2
t=C.U()
s=x.O
t.sav(new C.bS(B.B,0.5,B.x,h,0,C.a([B.dh.j(0.45),B.K],s),h,h).aB(0,C.c1(g,f)))
d.aw(g,f,t)
t=C.U()
t.sav(D.dRS.aB(0,C.c1(g,o)))
d.aw(g,o,t)
for(g=i.b,f=g.length,n=0;n<g.length;g.length===f||(0,C.J)(g),++n){m=g[n]
t=m.e
if(t.length>1)for(r=m.d,u=1;q=t.length,u<q;++u){l=u/q
q=t[u-1]
k=t[u]
j=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
j.c=2.2*l+0.4
j.d=B.bZ
j.r=r.j(l*0.8).gt(0)
p=j.L()
w.drawLine.apply(w,[q.a,q.b,k.a,k.b,p])
p.delete()}t=m.a
r=m.c
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
k=m.d
q.r=k.j(0.3).gt(0)
q.z=H.pi
p=q.L()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
j=C.aq(k,B.w,0.5)
j.toString
q.sav(new C.bS(N.qY,0.5,B.x,h,0,C.a([B.c,k,j],s),h,h).aB(0,C.c1(m.a,r)))
p=q.L()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.U()
t.c=2
t.r=B.jb.gt(0)
d.bU(g,f,t)
t=C.U()
t.r=B.c.gt(0)
d.aw(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,C.J)(g),++n){m=g[n]
t=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
t.r=B.c.j(0.7).gt(0)
p=t.L()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
ao(d){return!0}}
A.a9h.prototype={}
A.U6.prototype={
S(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new A.bgz(new C.cn(null,x.A),w,v,B.cA,B.as,$,B.bu,0,C.a([],x.X),null,null)}}
A.bgz.prototype={
Z(){this.a0()
this.kH()},
bZ9(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.e,v=k.r;w.length<B.k.U(k.x);){u=v.ag()*3.141592653589793*2
t=k.w
s=v.ag()
r=k.w
q=v.ag()
p=Math.cos(u)
o=Math.sin(u)
n=k.as
m=v.ag()
l=k.ax
if(l==="fish")l=170
else l=l==="fly"?50:300
w.push(new A.a9h(new C.v(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.v(p*n,o*n),B.k.J(m*60+l,360)))}while(w.length>B.k.U(k.x))w.pop()},
l_(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,B.as))return
a2.bZ9()
w=a2.f
B.d.bl(w,new A.eov(a2))
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
f=new C.v(f.a-k/e*j*30,f.b-l/e*j*30)}}for(l=w.length,d=0;d<w.length;w.length===l||(0,C.J)(w),++d){k=w[d].a
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
B.d.bl(w,new A.eow(a2))
if(w.length<a1&&a2.ch)A.l_("bell",12+a2.r.aG(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fC$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fC$
A.l_("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aF(l,l,l,l,D.m2,l,l,l,new A.eok(m,d),l,l,l,l,"Share",l)],k),i=C.cj(new A.eol(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cDL[w]
h.push(new A.dx(v.b,m.at===v.a,new A.eom(m,v),v.c,B.bt,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.coz[w]
u.push(new A.dx(t.b,m.ax===t.a,new A.eon(m,t),l,B.bt,l))}s=m.ch
r=s?B.nr:L.ql
r=C.a([new A.dx("Sound",s,new A.eoo(m),r,B.bt,l)],k)
s=m.x
s=A.hp(B.bt,B.o.u(B.k.U(s)),"How many",150,15,new A.eop(m),s)
q=A.hp(B.bt,l,"Together",2.5,0,new A.eoq(m),m.y)
p=A.hp(B.bt,l,"Apart",2.5,0,new A.eor(m),m.z)
o=A.hp(B.bt,l,"Same way",2.5,0,new A.eos(m),m.Q)
n=m.as
return A.je(B.bt,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.u(C.a([new A.eF(h,"TOUCH",l),new A.eF(u,"LOOK",l),new A.eF(r,l,l),s,q,p,o,A.hp(B.bt,B.o.u(B.k.U(n)),"Speed",280,50,new A.eot(m),n)],k),B.m,l,B.e,B.R,0,B.p))}}
A.box.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.a9f,D.b9i],x.O)
else{v=x.O
w=a4==="fly"?C.a([B.dd,Q.aaF],v):C.a([D.b6P,D.b_m],v)}v=0+a6.a
u=0+a6.b
t=$.a1()
s=C.U()
s.sav(new C.a8(B.b4,B.bb,B.x,w,a3,a3).aB(0,new C.af(0,0,v,u)))
a5.bp(new C.af(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.J)(v),++r){q=v[r].a
p=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=B.cV.gt(0)
o=p.L()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
n.r=B.cV.j(0.25).gt(0)
n.z=H.pi
o=n.L()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.J)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new G.mO(1,j,0.7,1).iD()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
f.r=h.j(0.35*g).gt(0)
f.z=B.ji
o=f.L()
s.drawCircle(j.a,j.b,9,o)
o.delete()
j=k.a
f=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
f.r=B.c.j(g).gt(0)
o=f.L()
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
j.push(new C.bW())
j=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
j.r=h.gt(0)
o=j.L()
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
j.push(new C.dl(0,-6,-7,a0))
j.push(new C.av(-12,-4+a0))
j.push(new C.av(-12,4+a0))
j.push(new C.av(-7,a0))
j.push(new C.dl(0,6,9,0))
j=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
f=C.aq(h,B.cB,0.6)
f.toString
j.sav(new C.a8(B.a1,B.a7,B.x,C.a([h,f],q),a3,a3).aB(0,D.e9N))
o=j.L()
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
A.a9K.prototype={}
A.Sh.prototype={
S(){var w=C.a([],x.bi)
return new A.azz(w,B.cA,B.as,C.R(x.N,x.S),$,B.bu,0,C.a([],x.X),null,null)}}
A.azz.prototype={
gGO(){var w=this.r,v=18+B.k.U(w*0.85)
return B.o.D(B.k.U(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gaa0(){return 54-8*(this.r/100)},
Z(){this.a0()
this.kH()
A.yp("chain_burst").bw(new A.dxM(this),x.P)},
aU_(){return A.v5("chain_burst",C.D(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
aw8(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
B.d.a8(k)
l.z=l.y=!1
w=l.as=0
l.at=null
v=18+B.k.U(l.r*0.85)
for(u=l.e;w<v;++w){t=u.ag()*3.141592653589793*2
s=u.ag()
r=l.f
q=u.ag()
p=l.f
o=Math.cos(t)
n=Math.sin(t)
m=(30+l.r*0.45)*(0.6+u.ag()*0.8)
k.push(new A.a9K(new C.v(20+s*(r.a-40),20+q*(p.b-40)),new C.v(o*m,n*m),new G.mO(1,u.ag()*360,0.6,1).iD()))}},
Xf(d){var w,v=this
if(d==null)return 0
w=(v.fC$-d)/1000
if(w<0.4)return v.gaa0()*B.dU.ar(0,w/0.4)
if(w<1.1)return v.gaa0()
if(w<1.5)return v.gaa0()*(1-(w-1.1)/0.4)
return 0},
l_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,B.as)||!j.Q)return
w=j.d
if(w.length===0)j.aw8()
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
if(v!=null)n.push(new C.S(v,j.Xf(j.ax)))
for(v=B.d.gaf(w),s=new C.hX(v,new A.dxN());s.C();){r=v.gT(0)
n.push(new C.S(r.a,j.Xf(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.J)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fC$
A.e1(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eN()
break}}}if(!(j.at!=null&&j.Xf(j.ax)>0||B.d.be(w,new A.dxO(j)))&&j.fC$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gGO()){if(j.as>=j.gGO()*1.5)k=3
else k=j.as>=j.gGO()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.m(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
A.As("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aU_()}else A.e1(120,"",300,0,0.3,"saw")}}},
aTZ(d){this.n(new A.dxC(this,d))
this.aU_()},
aaU(){var w=0,v=C.j(x.H),u=this,t,s
var $async$aaU=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.cg(null,null,!0,null,new A.dxF(u),s,null,!0,!0,x.S),$async$aaU)
case 2:t=e
if(t!=null)u.aTZ(t)
return C.h(null,v)}})
return C.i($async$aaU,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gGO(),t=w.x.h(0,""+w.r)
return A.je(B.cd,B.fS,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cj(new A.dxJ(w,t==null?0:t,u)),"CHAIN BURST",C.A(C.a([new A.ff(B.qi,"Levels",w.gbZa(),B.cd,v),new A.ff(B.jF,"New board",new A.dxK(w),B.c,v)],x.p),B.m,v,B.e,B.j,0,v,v))},
arq(d,e,f){var w=null
return C.u(C.a([C.d(d,w,w,w,w,w,w,D.aJe,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p)},
bR7(d,e){return this.arq(d,e,B.c)}}
A.b6R.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.a1()
w=C.U()
w.r=D.CY.gt(0)
d.bp(new C.af(0,0,0+e.a,0+e.b),w)
v=new A.cEy(d)
w=l.c
if(w!=null)v.$3(w,l.r.$1(l.d),B.c)
for(w=l.b,u=w.length,t=d.a,s=l.r,r=0;r<w.length;w.length===u||(0,C.J)(w),++r){q=w[r]
p=q.d
o=q.a
n=q.c
if(p!=null)v.$3(o,s.$1(p),n)
else{$.a1()
p=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=n.j(0.25).gt(0)
p.z=H.pi
m=p.L()
t.drawCircle(o.a,o.b,12,m)
m.delete()
o=q.a
p=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=n.gt(0)
m=p.L()
t.drawCircle(o.a,o.b,8,m)
m.delete()}}},
ao(d){return!0}}
A.aHV.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bsE.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.boK()}}
A.aIJ.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bsU.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpA()}}
A.aIY.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bt1.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpP()}}
A.Eg.prototype={
gcEO(){return this.a.aD(0,this.b).gct()>4}}
A.aay.prototype={}
A.TD.prototype={
S(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new A.bg8(new C.cn(null,x.A),w,v,B.cA,B.as,$,B.bu,0,C.a([],x.X),null,null)}}
A.bg8.prototype={
aLc(d){return new G.mO(1,B.o.J(d*29,360),0.6,1).iD()},
XY(d){var w,v=D.AO.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=B.o.D(B.k.bK(d.a/s*t),0,t-1)
return v[B.o.J(w,u)]+12*B.o.eb(w,u)},
aNI(d){B.d.bl(this.e,new A.e0N(this,d))},
ciC(d,e,f){var w=f.aD(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aD(0,e).gct()
return d.aD(0,e.ap(0,w.aP(0,B.k.D((d.aD(0,e).a*v+d.aD(0,e).b*u)/t,0,1)))).gct()},
auH(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
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
k=g.XY(new C.v((q+n)/2,(p+m)/2))
p=r?o:new C.v(n,p)
r=r?l:new C.v(q,m)
f.push(new A.Eg(p,r,k,new G.mO(1,B.o.J(k*29,360),0.6,1).iD()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.v(v*(0.1+i*0.16+r),w)
k=g.XY(h)
f.push(new A.Eg(h,h,k,new G.mO(1,B.o.J(k*29,360),0.6,1).iD()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.v(v*(0.08+w.ag()*0.84),u*(0.2+w.ag()*0.65))
k=g.XY(h)
f.push(new A.Eg(h,h,k,new G.mO(1,B.o.J(k*29,360),0.6,1).iD()))}}},
Z(){this.a0()
this.kH()},
bZc(d,e){var w,v=this.fC$
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
w.push(new A.aay(new C.v(a2.w.a*(0.2+v.ag()*0.6),6),new C.v((v.ag()-0.5)*40,0),new G.mO(1,v.ag()*360,0.5,1).iD()))}if(u>3)a2.as=0
for(v=w.length,u=a2.e,t=a3/2,s=900*t,r=0;r<w.length;w.length===v||(0,C.J)(w),++r){q=w[r]
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
q.b=new C.v(-o.a*0.6,o.b)}for(o=u.length,i=0;i<u.length;u.length===o||(0,C.J)(u),++i){h=u[i]
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
if(a1<0){a2.bZc(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.v(m.a-l*k,m.b-n*k)}}}}}B.d.bl(w,new A.e1b(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aF(p,p,p,p,C.V(q.ay?B.nr:L.ql,B.al,p,p,p,21),p,p,p,new A.e10(q),p,p,p,p,"Sound",p),C.aF(p,p,p,p,D.m2,p,p,p,new A.e11(q,d),p,p,p,p,"Share",p)],o),m=C.cj(new A.e12(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.cGP[w]
l.push(new A.dx(v.b,q.x===v.a,new A.e13(q,v),v.c,B.bc,p))}u=C.a([],o)
for(t=J.aW(D.AO.ge9(D.AO));t.C();){s=t.gT(t)
u.push(new A.dx(s,q.y===s,new A.e14(q,s),p,B.bc,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.asD[w]
t.push(new A.dx(r.b,q.z===r.a,new A.e15(q,r),p,B.bc,p))}s=q.Q
return A.je(B.bc,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.u(C.a([new A.eF(l,"TOOL",p),new A.eF(u,"SCALE",p),new A.eF(t,"SOUND",p),A.hp(B.bc,B.k.ab(s,1)+"/s","Marbles",4,0.3,new A.e16(q),s),new A.eF(C.a([new A.ff(D.bqO,"Stairs",new A.e17(q),B.bc,p),new A.ff(Aa.L8,"Pinball",new A.e18(q),B.c,p),new A.ff(B.lW,"Random",new A.e19(q),B.c,p),new A.ff(D.wQ,"Clear",new A.e1a(q),B.cN,p)],o),p,p)],o),B.m,p,B.e,B.R,0,B.p))}}
A.bdP.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.a1()
w=C.U()
w.sav(D.bGm.aB(0,new C.af(0,0,a0,a1)))
a2.bp(new C.af(0,0,a0,a1),w)
for(a0=e.b,a1=a0.length,w=a2.a,v=x.O,u=e.f,t=0;t<a0.length;a0.length===a1||(0,C.J)(a0),++t){s=a0[t]
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
q.z=B.ji
g=q.L()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.b=B.ak
q.d=B.bZ
q.c=6
q.r=C.aq(i,B.c,r*0.7).gt(0)
g=q.L()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()}else{p=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=i.j(0.25+h).gt(0)
p.z=B.ji
g=p.L()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p=C.aq(i,B.w,0.4)
p.toString
j.sav(new C.bS(N.qY,0.5,B.x,d,0,C.a([B.c,i,p],v),d,d).aB(0,C.c1(q,9)))
g=j.L()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=C.U()
u.c=5
u.d=B.bZ
u.r=B.aB.gt(0)
a2.bU(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,C.J)(a0),++t){f=a0[t]
u=f.a
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p=f.c
q.r=p.j(0.3).gt(0)
q.z=B.qw
g=q.L()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.sav(new C.bS(N.qY,0.5,B.x,d,0,C.a([B.c,p],v),d,d).aB(0,C.c1(f.a,7)))
g=q.L()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
ao(d){return!0}}
A.ab2.prototype={}
A.TI.prototype={
S(){var w=C.a([],x.gB)
return new A.aAX(new C.cn(null,x.A),w,B.cA,B.as,$,B.bu,0,C.a([],x.X),null,null)}}
A.aAX.prototype={
gaU0(){var w=this.w
return new C.v(w.a/2,w.b/2)},
auS(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
aw4(d){var w=D.AO.h(0,this.y),v=5-d,u=w.length
return w[B.o.J(v,u)]+12*B.o.eb(v,u)},
Z(){this.a0()
this.kH()},
aMx(){var w,v,u,t,s=this.e
B.d.a8(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new A.ab2(w,B.k.J(t/v+u,1)))}},
l_(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,B.as))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fC$
if(p.Q){r=p.z
s=p.aw4(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
A.l_(r,s+12,q,0.55)}}}},
bZd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aD(0,h.gaU0()),e=f.gct()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.auS(v)-e)
if(u<w){g.a=v
w=u}}if(w>28)return
t=B.k.J((Math.atan2(f.b,f.a)+1.5707963267948966)/6.283185307179586+1,1)
s=h.e
s=C.a(s.slice(0),C.T(s))
r=s.length
q=d.a
p=d.b
o=0
for(;o<s.length;s.length===r||(0,C.J)(s),++o){n=s[o]
m=n.a
if(m!==g.a)continue
l=n.b*2*3.141592653589793-1.5707963267948966
k=h.w
j=Math.cos(l)
i=Math.sin(l)
m=h.auS(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new A.e4H(h,n).$0()
h.c.e2()
return}}h.n(new A.e4I(g,h,t))
if(h.Q)A.l_(h.z,h.aw4(g.a)+12,700,0.5)
C.eN()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aF(q,q,q,q,C.V(r.Q?B.nr:L.ql,B.al,q,q,q,21),q,q,q,new A.e4P(r),q,q,q,q,"Sound",q),C.aF(q,q,q,q,D.m2,q,q,q,new A.e4Q(r,d),q,q,q,q,"Share",q)],p),n=C.cj(new A.e4R(r)),m=r.x
m=A.hp(B.bE,""+B.k.U(m),"Tempo",180,40,new A.e4S(r),m)
w=C.a([],p)
for(v=J.aW(D.AO.ge9(D.AO));v.C();){u=v.gT(v)
w.push(new A.dx(u,r.y===u,new A.e4T(r,u),q,B.bE,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.asD[t]
v.push(new A.dx(s.b,r.z===s.a,new A.e4U(r,s),q,B.bE,q))}return A.je(B.bE,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.u(C.a([m,new A.eF(w,"SCALE",q),new A.eF(v,"SOUND",q),new A.eF(C.a([new A.ff(B.dO,"Demo",new A.e4V(r),B.bE,q),new A.ff(B.lW,"Random",new A.e4W(r),B.c,q),new A.ff(D.wQ,"Clear",new A.e4X(r),B.cN,q)],p),q,q)],p),B.m,q,B.e,B.R,0,B.p))}}
A.bhd.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.a1()
w=C.U()
w.r=D.TC.gt(0)
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
r.sav(new C.a8(B.bb,B.b4,B.x,C.a([B.c.j(0.05),B.c.j(0.5)],q),a4,a4).aB(0,new C.af(o,m,o+2,m+u)))
a5.bU(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new G.mO(1,B.k.J(s.$1(l)*23,360),0.55,1).iD()
o=v.$1(l)
m=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
m.b=B.ak
m.c=1.6
m.r=k.j(0.35).gt(0)
j=m.L()
r.drawCircle(p,n,o,j)
j.delete()
o=D.cWO[B.o.J(B.o.J(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.ma(new C.ez(o,a4,a4,B.cT,a4,a4,a4,a4,a4,a4,new C.E(!0,m,a4,a4,a4,a4,9.5,B.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),B.a5,B.cn,new C.kc(1),a4,a4,a4,a4,B.cm,a4)
i.fD()
o=i.b.c
m=J.fwY(v.$1(l))
h=i.b.a.c
i.a5(a5,new C.v(p+-o/2,n+(m-h.gbd(h)-2)))}w=C.U()
w.sav(D.dRz.aB(0,C.c1(t,16)))
a5.aw(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.J)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new G.mO(1,B.k.J(s.$1(a0)*23,360),0.55,1).iD()
a2=B.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fwY(v.$1(a0))
a0=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a0.b=B.ak
a0.c=3*a2
a0.r=k.j(a2).gt(0)
j=a0.L()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
d.r=k.j(0.35).gt(0)
d.z=B.ji
j=d.L()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
d.sav(new C.bS(N.qY,0.5,B.x,a4,0,C.a([B.c,k],q),a4,a4).aB(0,C.c1(new C.v(h,a1),8.5)))
j=d.L()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
ao(d){return!0}}
A.aIH.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bsS.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpy()}}
A.aII.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bsT.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpz()}}
A.rA.prototype={}
A.b5J.prototype={}
A.TG.prototype={
S(){var w=x.S
return new A.aAV(C.a([],x.aq),C.R(w,w),C.aZ(w),D.eex)}}
A.aAV.prototype={
Z(){this.a0()
A.yp("molecule_maker").bw(new A.e4b(this),x.P)},
agh(d){var w={}
w.a=0
this.f.bD(0,new A.e3Y(w,d))
return w.a},
gaU6(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)t.push(w[u].a)
return A.hFJ(t,this.f,D.a_b[this.d])},
bZu(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.f6()
w.dY(t*7+3)
t=v.y
v.n(new A.e3S(v,e,t.a,w,t.b))
A.v8("pop",u.length,90,0.35)},
atg(d){return this.n(new A.e3T(this))},
aU7(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
bZA(d){this.n(new A.e3X(this,this.aU7(d)))},
cfd(){var w=this.r
if(w==null)return
this.n(new A.e3W(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a_b[k.d],h=k.gaU6()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.uQ.h(0,w[u].a).a-k.agh(u)
w=i.c
w=w.gdH(w)
t=w.di(w,new A.e45(),x.N).aF(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?B.bt:B.hT
r=x.p
s=C.u(C.a([new C.B(B.fF,A.eWd(w,s,h&&k.d<12?new A.ff(B.jh,"Next",new A.e46(k),B.bt,j):j),j),C.C(C.cj(new A.e47(k)),1)],r),B.m,j,B.e,B.j,0,B.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.q(0,u)?"\u2713 ":""
w.push(new A.dx(p+D.a_b[u].b,k.d===u,new A.e48(k,u),j,B.hT,j))}q=C.a([],r)
for(p=D.uQ.gdH(D.uQ),p=p.gaf(p);p.C();){o=p.gT(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?B.fM:m.b
q.push(new A.dx(n+" \xb7 "+m.a,!1,new A.e49(k,o),j,l,j))}return A.je(B.hT,B.fS,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.u(C.a([new A.eF(w,"GOAL",j),new A.eF(q,"ADD",j),new A.eF(C.a([new A.dx("Remove selected atom",!1,k.gcfc(),B.e4,B.cN,j),new A.dx("Clear all",!1,k.gbZv(k),B.jF,B.aM,j)],r),j,j)],r),B.m,j,B.e,B.R,0,B.p))}}
A.bev.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=B.o.J(t*37,10)
r=B.o.J(t*53,10)
$.a1()
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=B.hT.j(0.03).gt(0)
p=q.L()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bD(0,new A.dgs(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.uQ.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.c1(j,26)
if(q===t){$.a1()
h=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
h.r=B.aM.j(0.4).gt(0)
h.z=B.ji
p=h.L()
u.drawCircle(j.a,j.b,34,p)
p.delete()}j=m.b
$.a1()
h=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
g=l.b
f=C.aq(g,B.c,0.5)
f.toString
e=C.aq(g,B.w,0.5)
e.toString
h.sav(new C.bS(B.HQ,0.5,B.x,a3,0,C.a([f,g,e],r),E.ar4,a3).aB(0,i))
p=h.L()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?B.aG:B.c
d=new C.ma(new C.ez(n,a3,a3,B.cT,a3,a3,a3,a3,a3,a3,new C.E(!0,j,a3,a3,a3,a3,19,B.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),B.a5,B.cn,new C.kc(1),a3,a3,a3,a3,B.cm,a3)
d.fD()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a5(a4,new C.v(n.a-h/2,n.b-j.gbd(j)/2))
n=k===0
a0=n?B.bq:B.b_
j=m.b
h=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
h.r=a0.gt(0)
p=h.L()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.t(k)
a1=new C.ma(new C.ez(n,a3,a3,B.cT,a3,a3,a3,a3,a3,a3,B.ot),B.a5,B.cn,new C.kc(1),a3,a3,a3,a3,B.cm,a3)
a1.fD()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a5(a4,new C.v(n.a+(20-h/2),n.b+(-20-j.gbd(j)/2)))}if(n===0){d=C.j0(a3,a3,a3,a3,D.emW,B.a5,B.cn,a3,B.eL,B.cm)
d.fD()
d.a5(a4,new C.v((w-d.b.c)/2,v/2))}},
ao(d){return!0}}
A.SE.prototype={
S(){var w=x.s
return new A.bfo(C.a([],w),C.a([],w))}}
A.bfo.prototype={
Z(){this.a0()
this.asI()
A.yp("dna_lab").bw(new A.dFG(this),x.P)},
gaZ6(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a07.h(0,w[u])
t.toString
s.push(t)}return B.d.fL(s)},
ga6B(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(B.a.al(this.gaZ6(),w,v))}return u},
asI(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.f6()
k.dY(l.e*31+l.d*7+C.Du(new C.N(Date.now(),0,!1)))
w=new A.dFv(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mf(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=B.a.al(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a07.h(0,p[n])
m.toString
r.push(m)}t.push(B.d.fL(r))}if(!B.d.be(t,new A.dFu()))break}l.f=v
B.d.a8(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.aWX()},
aWX(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=A.fFx(s.ga6B()[r])
v=J.dF(D.AP.ge9(D.AP),new A.dFw(w)).dz(0)
u=new C.f6()
u.dY(r+s.e)
B.d.fN(v,u)
u=C.a([w],x.s)
B.d.v(u,C.dc(v,0,C.dJ(3,"count",x.S),C.T(v).c))
t=new C.f6()
t.dY(s.e*3+r)
B.d.fN(u,t)
s.z=u},
aU5(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.d1j.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a07.h(0,w.f[v])
u.toString
break A}u=A.fFx(w.ga6B()[v])
break A}w.n(new A.dFt(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new A.dFE(),e=new A.dFz(),d=h.d===2?h.gaZ6():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,O.md,g,g,g),B.au],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?B.cd.j(0.18):B.K
q=new C.b3(10,10)
p=new C.ax(t.length===s?B.cd:B.bG,1,B.r,-1)
o=C.a([],a0)
for(n=h.ga6B()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.cC(B.aY,B.e,B.R,B.m,g,B.p,g,0,o,g),B.h,g,g,new C.o(r,g,new C.c2(p,p,p,p),new C.bv(q,q,q,q),g,g,B.n),g,g,g,D.bdv,B.ef,g,g,g))}v.push(C.cb(B.bH,u,B.bw,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.cb(B.bH,u,B.bw,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a3(34,g,new C.cw(B.B,g,g,C.V(A7.Le,j<t.length?B.aB:B.bG,g,g,g,14),g),g))
B.d.v(v,C.a([new C.B(B.JG,C.cb(B.bH,u,B.bw,0,0),g)],a0))}v.push(B.ar)
v.push(C.d(w,g,g,g,g,g,g,O.md,g,g,g))
v.push(B.au)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?B.bt.j(0.25):B.du
q=new C.b3(12,12)
o=j<t.length
p=new C.ax(o?B.bt:B.be,1,B.r,-1)
if(o){o=D.AP.h(0,t[j])
o.toString}else o="?"
n=j<t.length?B.c:B.c3
u.push(C.p(g,new C.w(o,g,new C.E(!0,n,g,g,g,g,g,B.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),B.h,g,g,new C.o(r,g,new C.c2(p,p,p,p),new C.bv(q,q,q,q),g,g,B.n),g,g,g,g,B.ei,g,g,g))}v.push(C.cb(B.bH,u,B.bw,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",B.c,!0)
u.push(r)}v.push(C.cb(B.bH,u,B.bw,0,0))}v.push(B.ay)
u=h.w
if(u.length!==0){t=h.r.length
v.push(A.eWd(u,t>=(h.d===2?3:9)?B.bt:B.cd,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(A.eWd(u,B.cd,g))}v.push(B.T)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,F.QW,g,g,g))
v=C.cf(C.u(v,B.F,g,B.e,B.j,0,B.p),B.q,g,B.z,g,B.bA,g,g,B.ah)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new A.dx(D.cM6[j],h.d===j,new A.dFA(h,j),g,B.cd,g))
u=C.a([new A.eF(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bE(B.a1,g,g,new A.ff(B.jF,"New strand",new A.dFB(h),B.bt,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.J)(t),++l){i=t[l]
q=D.AP.h(0,i)
q.toString
a0.push(new A.ff(D.X9,q,new A.dFC(h,i),B.cd,g))}u.push(C.cb(B.bH,a0,B.bw,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.aq_:D.cwB
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.b3(14,14)
a0.push(C.aJ(g,C.p(B.B,new C.w(k,g,D.enb,g,g,g,g,g,g,g,g,g),B.h,g,g,new C.o(e.$1(k),g,g,new C.bv(q,q,q,q),g,g,B.n),g,54,g,g,g,g,g,64),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.dFD(h,k),g,g,g,g,g,g,!1,B.af))}u.push(C.A(a0,B.m,g,B.qv,B.j,0,g,g))}return A.je(B.cd,B.fS,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.u(u,B.m,g,B.e,B.R,0,B.p))}}
A.SU.prototype={
S(){return new A.aA2(B.bu,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
A.aA2.prototype={
Z(){var w,v=this
v.a0()
w=v.qQ(v.gbZw())
w.kj(0)
v.d!==$&&C.aO()
v.d=w
A.yp("ecosystem").bw(new A.dIv(v),x.P)},
p(){var w=this.d
w===$&&C.c()
w.p()
this.boY()},
gaIx(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
bZx(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length>160)B.d.cu(v,0)}if(m.gaIx()){w=m.Q+=l
if(w>m.as){m.as=w
if(B.o.J(B.k.bK(w),5)===0)A.v5("ecosystem",C.D(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.n(new A.dIi())},
a7M(d){this.n(new A.dIh(this,d))
A.v8("pop",3,120,0.4)},
bZz(){return this.n(new A.dIj(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.u(C.a([new C.B(D.UZ,A.eWd(r,t.gaIx()?B.bt:B.cN,s),s),C.C(new C.B(D.be0,C.bu(C.m(18),C.b2(s,s,s,new A.b9T(t.f,t.r,t.w,s),B.fj),B.ap),s),1),new C.B(B.fh,C.d("Alive together: "+B.k.U(t.Q)+" s     Best: "+B.k.U(t.as)+" s",s,s,s,s,s,s,D.etQ,s,s,s),s)],q),B.m,s,B.e,B.j,0,B.p)
w=t.x
w=A.hp(B.bt,B.k.ab(w,1)+"\xd7","Grass growth",2,0.2,new A.dIn(t),w)
v=t.y
v=A.hp(B.cf,B.k.ab(v,1)+"\xd7","Rabbit breeding",2,0.3,new A.dIo(t),v)
u=t.z
return A.je(B.bt,B.fS,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.u(C.a([w,v,A.hp(B.dh,B.k.ab(u,1)+"\xd7","Fox hunting",2,0.3,new A.dIp(t),u),new A.eF(C.a([new A.dx("Drought",!1,new A.dIq(t),B.xd,B.aM,s),new A.dx("Disease",!1,new A.dIr(t),D.bqF,B.bE,s),new A.dx("+ Foxes",!1,new A.dIs(t),s,B.dh,s),new A.dx("+ Rabbits",!1,new A.dIt(t),s,B.cf,s),new A.dx("Reset",!1,t.gbZy(),B.jF,B.b3,s)],q),s,s)],q),B.m,s,B.e,B.R,0,B.p))}}
A.b9T.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.a1()
w=C.U()
w.sav(D.bEB.aB(0,new C.af(0,0,d,a0)))
a1.bp(new C.af(0,0,d,a0),w)
w=h.b
a0=C.aq(B.ra,B.bq,B.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.U()
t.r=a0.gt(0)
a1.bp(new C.af(0,v,d,v+u),t)
s=B.k.U(w[0]*0.9)
r=new C.f6()
r.dY(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.ag()*e
o=f*(0.6+0.4*r.ag())
t=Math.sin(a0+q)
n=r.ag()
m=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
m.r=B.hc.gt(0)
m.c=1.6
l=m.L()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new A.cY2(h,a2,f,a1)
k.$5(Math.min(B.k.U(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(B.k.U(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.af(10,a0,e,u)
t=C.U()
t.r=D.b3i.gt(0)
a1.bp(new C.af(0,f,d,f+g),t)
i=C.U()
i.r=B.du.gt(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.L()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new A.cY4(h,j,a1)
g.$3(0,100,B.bq)
g.$3(1,120,B.cf)
g.$3(2,24,B.dh)
g=new A.cY3(a1,j)
g.$3("Grass "+B.k.U(w[0]),B.bq,16)
g.$3("Rabbits "+B.k.U(w[1]),B.cf,102)
g.$3("Foxes "+B.k.U(w[2]),B.dh,200)},
ao(d){return!0}}
A.aI7.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.aOn.prototype={
gu7(){return B.d.cI(this.a,0,new A.bBG())}}
A.S9.prototype={
S(){var w=x.S
return new A.bf5(A.hCT(),C.bT(5,0,!1,w),C.aZ(w),B.bu,null,null)}}
A.bf5.prototype={
gv3(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return B.d.cI(t,0,new A.dtX())},
Z(){var w,v=this
v.a0()
w=v.qQ(new A.du9(v))
w.kj(0)
v.x!==$&&C.aO()
v.x=w
A.yp("balance_lab").bw(new A.dua(v),x.P)},
p(){var w=this.x
w===$&&C.c()
w.p()
this.boC()},
cpk(d){var w,v=this
v.n(new A.dtY(v,d))
A.v8("click",v.f[d],60,0.4)
if(v.gv3()===v.d[v.e].gu7()&&v.r.H(0,v.e)){A.v8("zap",10,260,0.5)
w=v.r
w=C.z(w,C.a2(w).k("ck.E"))
A.v5("balance_lab",C.D(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.I(k,new A.du2(),C.T(k).k("I<1,n>")).aF(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=B.d.aF(k," + ")
if(o.gv3()===m[o.e].gu7())s="\u2696\ufe0f Balanced! "+m[o.e].gu7()+" = "+o.gv3()+". The torques are equal, so the seesaw stays level."
else s=o.gv3()>m[o.e].gu7()?"The right side is too strong ("+o.gv3()+" vs "+m[o.e].gu7()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].gu7()+" vs "+o.gv3()+"). Add weight to the right, or place it further from the middle."
k=o.gv3()===m[o.e].gu7()?B.bt:B.aM
k=A.bvN(s,k,o.gv3()===m[o.e].gu7()&&o.e<m.length-1?new A.ff(B.jh,"Next",new A.du3(o),B.bt,n):n)
w=C.C(C.cj(new A.du4(o,l)),1)
u=j.length===0?"0":j
u=C.C(C.d("Left torque\n"+u+" = "+m[o.e].gu7(),n,n,n,n,n,n,D.aKn,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.u(C.a([new C.B(D.UZ,k,n),w,new C.B(D.act,C.A(C.a([u,C.C(C.d("Right torque\n"+r+" = "+o.gv3(),n,n,n,n,n,n,D.aKn,B.dK,n,n),1)],q),B.m,n,B.e,B.j,0,n,n),n)],q),B.m,n,B.e,B.j,0,B.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.q(0,v)?"\u2713 ":""
p=v+1
u.push(new A.dx(w+p,o.e===v,new A.du5(o,v),n,B.aM,n))}return A.je(B.aM,B.fS,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.u(C.a([new A.eF(u,"LEVEL",n),new A.eF(C.a([new A.dx("Clear right side",!1,new A.du6(o),B.jF,B.cN,n)],q),n,n)],q),B.m,n,B.e,B.R,0,B.p))}}
A.b5V.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.b0($.a1().r,B.aw,null,null,C.a([],x.v))
i.N(new C.bj(h,f))
w=f+70
i.N(new C.av(h-30,w))
i.N(new C.av(h+30,w))
i.N(new C.bW())
v=C.U()
v.r=B.aj.gt(0)
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
t=C.c_(new C.af(-u,-9,u,9),B.i_)
w=C.U()
w.sav(D.bH2.aB(0,new C.af(t.a,t.b,t.c,t.d)))
d.bj(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.a1()
v=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
v.r=B.hU.gt(0)
v.c=1.5
r=v.L()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
A.f7z(d,""+Math.abs(s),new C.v(w,22),B.c3,10)}q=new A.cx6(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.J)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,B.b3)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],B.cd)
if(w[s]===0){l=C.c_(C.dy(new C.v(m,-22),22,v),B.i_)
$.a1()
k=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
k.b=B.ak
k.c=1.4
k.r=B.be.gt(0)
r=k.L()
i.drawRRect(C.fM(l),r)
r.delete()
A.f7z(d,"+",new C.v(m,-22),B.c3,14)}}i.restore()
$.a1()
i=C.U()
i.r=(j.e?B.bt:B.aJ).gt(0)
d.aw(new C.v(h,f),7,i)},
ao(d){return!0},
gjt(){return this.e}}
A.T7.prototype={
S(){return new A.bfA(C.a([16,32,12,24],x.t),C.aZ(x.S),B.bu,null,null)}}
A.bfA.prototype={
gZm(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gab2(){var w=this.gZm(),v=this.r,u=D.aso[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.d8(this.d,x.S).a<4)
else w=!1
return w},
Z(){var w,v=this
v.a0()
w=v.qQ(new A.dMi(v))
w.kj(0)
v.x!==$&&C.aO()
v.x=w
A.yp("gear_lab").bw(new A.dMj(v),x.P)},
p(){var w=this.x
w===$&&C.c()
w.p()
this.bp5()},
bZB(d,e){var w,v=this
v.n(new A.dM8(v,d,e))
if(v.gab2()&&v.w.H(0,v.r)){A.v8("zap",8,240,0.45)
w=v.w
w=C.z(w,C.a2(w).k("ck.E"))
A.v5("gear_lab",C.D(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.gZm(),n=r.gZm(),m=D.aso[r.r].a
m=r.gab2()?"\u2705 Done! Ratio "+B.k.ab(r.gZm(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gab2()?B.bt:B.dh
v=r.d
u=x.p
n=C.u(C.a([new C.B(D.UZ,A.bvN(m,w,r.gab2()&&r.r<7?new A.ff(B.jh,"Next",new A.dMc(r),B.bt,q):q),q),C.C(C.b2(q,q,q,new A.bbk(v,r.f,q),B.fj),1),new C.B(D.act,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+B.k.ab(r.gZm(),2)+"   \xb7   Output "+B.k.ab(p*o,1)+" rpm   \xb7   Force \xd7"+B.k.ab(1/n,2),q,q,q,q,q,q,P.a3O,B.L,q,q),q)],u),B.m,q,B.e,B.j,0,B.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.q(0,t)?"\u2713 ":""
s=t+1
o.push(new A.dx(m+s,r.r===t,new A.dMd(r,t),q,B.dh,q))}p=r.e
u=C.a([new A.eF(o,"GOAL",q),A.hp(B.b3,""+B.k.U(p)+" rpm","Input speed",120,10,new A.dMe(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new A.asI("Gear "+s+" teeth",p,new A.dMf(r,t),8,40,D.cUz[t],""+p,q))}return A.je(B.dh,B.fS,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.u(u,B.m,q,B.e,B.R,0,B.p))}}
A.bbk.prototype={
bJb(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.a1(),j=C.a([],x.v),i=new C.b0(k.r,B.aw,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.dSv,D.dVx,D.e2X,D.dZf],s=v===0,r=0;r<4;++r){q=t[r]
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
i.e=null}}}i.N(new C.bW())
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
n=B.d.fs(g,B.pO)
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
h=new A.d3V(this,d)
h.$6$back(new C.v(t,0),g[2],r,i,B.dC,!0)
h.$5(new C.v(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,B.dk)
h.$5(new C.v(0,0),g[0],w[0],j,B.mn)
h.$5(new C.v(t,0),g[1],w[1],i,B.fZ)
s.restore()
s=new A.d3W(d,e,p,o,k)
s.$3("1 \xb7 input",0,B.b3)
s.$3("2+3 \xb7 shared axle",t,B.dh)
s.$3("4 \xb7 output",q,B.bt)},
ao(d){return!0}}
A.Si.prototype={
S(){var w=$.at()
return new A.bfi(new C.ao(new C.bb("Meet me at noon",B.aZ,B.aL),w),new C.ao(new C.bb("LEMON",B.aZ,B.aL),w),C.aZ(x.S))}}
A.bfi.prototype={
Z(){this.a0()
this.aT2()
A.yp("cipher_lab").bw(new A.dy8(this),x.P)},
p(){var w=this.d,v=$.at()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
aT2(){this.y=1+B.cA.aG(25)
this.z=0},
ga72(){var w=this
return A.a_s(A.a_s(D.Fd[w.x],w.y),-w.z)===D.Fd[w.x]},
gau7(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=A.a_s(u,v.w)
break A}if(1===t){w=new C.I(C.a(A.a_s(u,0).split(""),x.s),new A.dxR(),x.dv).fL(0)
break A}w=A.hPa(u,v.e.a.a)
break A}return w},
aOA(d){var w,v,u,t,s,r=null,q=C.bT(26,0,!1,x.S)
for(w=new C.cX(d.toUpperCase()),v=x.F,w=new C.bR(w,w.gG(0),v.k("bR<bO.E>")),v=v.k("bO.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,B.d.fs(q,B.yM))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.b3(2,2)
v.push(new C.bF(1,B.bn,C.u(C.a([C.p(r,r,B.h,r,r,new C.o(B.b3,r,r,new C.bv(u,u,u,u),r,r,B.n),r,46*q[s]/t,r,B.K_,r,r,r,r),new C.w(C.jv(65+s),r,D.evx,r,r,r,r,r,r,r,r,r)],w),B.m,r,B.m4,B.j,0,B.p),r))}return new C.a3(r,70,C.A(v,B.dD,r,B.e,B.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=B.c.j(0.07)
v=x.p
w=C.a([C.aK(o,B.U,!1,o,!0,B.q,o,C.aL(),p.d,o,o,o,o,o,2,C.bl(o,new C.b1(4,C.m(14),B.W),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.l8,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.ae,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new A.dy_(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eq3,!0,B.a5,o,B.am,o,o,o,o)],v)
if(p.r===2){u=B.c.j(0.07)
B.d.v(w,C.a([B.T,C.aK(o,B.U,!1,o,!0,B.q,o,C.aL(),p.e,o,o,o,o,o,2,C.bl(o,new C.b1(4,C.m(14),B.W),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.l8,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.ae,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new A.dy0(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,B.ir,!0,B.a5,o,B.am,o,o,o,o)],v))}w.push(B.ay)
w.push(D.eUm)
w.push(B.au)
v=B.b3.j(0.12)
u=C.m(14)
t=C.G(B.b3.j(0.4),B.r,1)
w.push(C.p(o,C.yH(p.gau7().length===0?"\u2026":p.gau7(),D.euA,o),B.h,o,o,new C.o(v,o,t,u,o,o,B.n),o,o,o,o,B.bA,o,o,o))
w.push(B.aa)
w.push(A.bvN(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],B.b3,o))
w.push(B.aa)
w.push(D.eCl)
w.push(B.au)
w.push(p.aOA(p.gau7()))
w.push(B.au)
w.push(D.eEB)
s=C.cL(w,o,B.bA,o,o,B.ah,!1)}else{w=A.bvN("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",B.aM,o)
v=C.d(A.a_s(D.Fd[p.x],p.y),o,o,o,o,o,o,D.ev5,o,o,o)
u=(p.ga72()?B.bt:B.b3).j(0.14)
t=C.m(14)
r=C.G((p.ga72()?B.bt:B.b3).j(0.5),B.r,1)
t=C.a([w,B.aa,D.eOv,v,B.T,D.eJl,C.p(o,C.d(A.a_s(A.a_s(D.Fd[p.x],p.y),-p.z),o,o,o,o,o,o,D.eww,o,o,o),B.h,o,o,new C.o(u,o,r,t,o,o,B.n),o,o,o,o,B.bA,o,o,o),B.aa,p.aOA(A.a_s(D.Fd[p.x],p.y)),B.P],x.p)
if(p.ga72())t.push(A.bvN("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",B.bt,new A.ff(B.jF,"Next",new A.dy1(p),B.bt,o)))
s=C.cL(t,o,B.bA,o,o,B.ah,!1)}w=p.f
v=x.p
w=C.a([new A.eF(C.a([new A.dx("Make a secret",w===0,new A.dy2(p),B.j_,B.b3,o),new A.dx("Crack a code",w===1,new A.dy3(p),B.p5,B.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new A.dx(n[q],p.r===q,new A.dy4(p,q),o,B.b3,o))
v=C.a([new A.eF(u,o,o)],v)
if(p.r===0){u=p.w
v.push(A.hp(B.b3,""+u,"Shift",25,1,new A.dy5(p),u))}B.d.v(w,v)}else{v=p.z
w.push(A.hp(B.aM,""+v,"Shift back",25,0,new A.dy6(p),v))}return A.je(B.b3,B.fS,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.u(w,B.m,o,B.e,B.R,0,B.p))}}
A.aHN.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.aIf.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.mU.prototype={}
A.vd.prototype={
aHN(d,e,f,g){var w=this
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
A.a7T.prototype={}
A.a8X.prototype={}
A.a29.prototype={
b7D(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hd()?-1:1
v=t.ag()*3.141592653589793*2
u=f*(0.3+t.ag())
s.push(new A.a7T(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ag()*0.45));++r}},
bWj(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}B.d.bl(w,new A.bH1())},
agI(d,e,f,g){var w="p"+this.c++,v=new A.vd(w,e,f,g)
v.aHN(w,e,f,g)
this.a.push(v)
return v},
W(d,e){B.d.W(this.a,e)
B.d.bl(this.b,new A.bHb(e))},
a8(d){B.d.a8(this.a)
B.d.a8(this.b)},
cwV(d,e,f,g,h){return B.d.be(this.b,new A.bH7(e,f,g,h))},
azs(d,e,f,g){var w
if(d===f||this.cwV(0,d,e,f,g))return null
w=new A.a8X(d,e,f,g)
this.b.push(w)
return w},
b0u(d){switch(d.b){case"battery":return d.e
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
b0t(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
ba0(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
bZC(d){switch(d.b){case"bulb":return 10
case"motor":return 6
case"buzzer":return 25
case"heater":return 4
case"radio":return 30
case"tv":return 50
case"resistor":return d.r
case"pot":return 1+99*d.f}return 100},
a56(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.d+=a1
d.bWj(a1)
d.w=Math.max(0,d.w-a1)
w=Math.min(a1*6,0.12)
for(v=d.a,u=v.length,t=a1*0.25,s=0;s<u;++s){r=v[s]
if(r.b==="crank")r.f=Math.max(0,r.f-t)}u=x.S
q=C.R(x.N,u)
p=new A.bHd(q)
o=C.a([],x.t)
n=new A.bHc(o)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.J)(v),++s){r=v[s]
p.$2(r,0)
p.$2(r,1)}for(m=0;m<q.a;++m)o.push(m)
for(t=d.b,l=t.length,s=0;s<t.length;t.length===l||(0,C.J)(t),++s){k=t[s]
j=n.$1(p.$2(k.a,k.b))
i=n.$1(p.$2(k.c,k.d))
if(j!==i)o[j]=i}h=C.R(u,u)
g=new A.bHf(h,n,p)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,C.J)(v),++s){r=v[s]
g.$2(r,0)
g.$2(r,1)}f=h.a
if(f===0)return
s=0
for(;;){if(!(s<t)){e=0
break}r=v[s]
u=r.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){e=g.$2(r,1)
break}++s}d.cmo(f,e,w,!0)
d.bGh(a1)},
cmo(b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=x.S,b3=C.R(x.N,b2),b4=new A.bH3(b3),b5=C.a([],x.t)
for(w=b1.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
b4.$2(t,0)
b4.$2(t,1)}for(s=0;s<b3.a;++s)b5.push(s)
r=new A.bH2(b5)
for(v=b1.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.J)(v),++u){p=v[u]
o=r.$1(b4.$2(p.a,p.b))
n=r.$1(b4.$2(p.c,p.d))
if(o!==n)b5[o]=n}m=new A.bH5(C.R(b2,b2),r,b4)
for(b2=w.length,u=0;u<w.length;w.length===b2||(0,C.J)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b2=x.i
l=C.bT(b6,0,!1,b2)
v=x.W
k=C.R(v,b2)
j=C.R(v,b2)
v=b1.x
i=0.3/b8
q=x.b
h=b6<0
g="Length must be a non-negative integer: "+b6
f=0
for(;;){if(!(f<(b9?10:1)))break
if(h)C.b8(C.dE(g,null))
e=C.a(new Array(b6),q)
for(d=0;d<b6;++d)e[d]=C.bT(b6,0,!1,b2)
a0=C.bT(b6,0,!1,b2)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,C.J)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/b1.b0t(t)
a4=b1.b0u(t)*a3}else{a5=t.x
a4=0
if(a5&&a2!=="capacitor")a3=1e-9
else if(a2==="switch")a3=t.w?100:1e-9
else if(a2==="fuse")a3=20
else if(a2==="led"){a2=v.h(0,t.a)
a6=a2===!0
a3=a6?0.06666666666666667:1e-9
a4=a6?a3*1.9:0}else if(a2==="capacitor"){a4=i*t.z
a3=a5?1e-9:i}else a3=1/b1.bZC(t)}k.m(0,t,a3)
j.m(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b6;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b1.bJa(e,a0,b7)
if(!b9)break
for(a1=w.length,a7=!1,u=0;u<w.length;w.length===a1||(0,C.J)(w),++u){t=w[u]
if(t.b!=="led")continue
a8=l[m.$2(t,0)]-l[m.$2(t,1)]
a2=t.a
a5=v.h(0,a2)
a9=a5===!0
b0=a9?a8>1.8:a8>1.95
if(b0!==a9){v.m(0,a2,b0)
a7=!0}}if(!a7)break;++f
b9=!0}for(b2=w.length,u=0;u<w.length;w.length===b2||(0,C.J)(w),++u){t=w[u]
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
bJa(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return C.bT(d,0,!1,x.i)
u=C.a([],x.b)
for(t=a0.length,s=x.n,r=0;r<a0.length;a0.length===t||(0,C.J)(a0),++r){q=a0[r]
p=C.a([],s)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,C.J)(a0),++n){m=a0[n]
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
t[m]=t[m]-g*u[l][m]}}}f=C.bT(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bGh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.a,v=w.length,u=d*0.8,t=d*0.9,s=0;s<w.length;w.length===v||(0,C.J)(w),++s){r=w[s]
q=r.b
if((q==="battery"||q==="solar"||q==="crank"||q==="turbine")&&!r.x){p=k.b0u(r)/k.b0t(r)
if(p>0.3){o=Math.abs(r.at)
o=o>0.4&&o>p*0.55}else o=!1
n=r.Q
if(o){r.Q=n+t
k.b7D(r,3,260)
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
this.b7D(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bc4(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.z=0}this.x.a8(0)},
cGu(d){var w=this.a
return new C.a5(w,new A.bHa(d),C.T(w).k("a5<1>"))},
aCb(d){return this.cGu(d).be(0,new A.bH9(0.35))},
aBl(d,e){return B.d.be(this.a,new A.bH8(e))}}
A.aOx.prototype={
a5(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2=b7.a,b3=b7.b,b4=0+b2,b5=0+b3
$.a1()
w=C.U()
w.r=D.a9H.gt(0)
b6.bp(new C.af(0,0,b4,b5),w)
v=C.U()
v.r=B.c.j(0.06).gt(0)
for(w=b6.a,u=12;u<b2;u+=24)for(t=12;t<b3;t+=24){s=v.L()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b0.b,q=r.b,p=q.length,o=b0.f,n=0;n<q.length;q.length===p||(0,C.J)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-42:42
l=l.d
i=m.c
h=i.c
g=m.d===0?-42:42
b0.cu4(b6,new C.v(k*b2+j,l*b3),new C.v(h*b2+g,i.d*b3),m,m===o)}q=b0.d
if(q!=null&&b0.e!=null){f=A.hbg(q.a,q.b,b7)
q=b0.e
q.toString
$.a1()
p=C.U()
p.r=B.al.gt(0)
p.c=3
p.d=B.bZ
b6.bU(f,q,p)}for(q=r.a,p=q.length,o=b0.c,l=b0.r,n=0;n<q.length;q.length===p||(0,C.J)(q),++n){e=q[n]
k=e.c*b2
j=e.d*b3
if(e.Q>0){i=Math.sin(r.d*30)
$.a1()
h=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
h.r=D.a8V.j(B.k.D(e.Q*0.45,0,0.6)).gt(0)
h.z=B.FJ
s=h.L()
w.drawCircle(k,j,46+14*i,s)
s.delete()}d=l.h(0,e.a)
if(d==null)d=1
J.bP(w.save())
w.translate(k,j)
k=B.k.D(B.oD.ar(0,B.k.D(d,0,1)),0.01,1.4)
w.scale(k,k)
b0.c7Y(b6,e,e===o)
w.restore()
for(k=e.b,j=k!=="battery",i=k!=="solar",h=k!=="crank",g=k==="turbine",k=k==="led",a0=0;a0<2;++a0){a1=e.c
a2=a0===0
a3=a2?-42:42
a3=a1*b2+a3
a1=e.d*b3
$.a1()
a4=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a4.r=D.a9H.gt(0)
s=a4.L()
w.drawCircle(a3,a1,7,s)
s.delete()
a4=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a4.b=B.ak
a4.c=2.4
if(a2)a5=!j||!i||!h||g||k
else a5=!1
a4.r=(a5?B.cN:B.al).gt(0)
s=a4.L()
w.drawCircle(a3,a1,6,s)
s.delete()
if(a2)a2=!j||!i||!h||g||k
else a2=!1
if(a2){a6=new C.ma(new C.ez("+",b1,b1,B.cT,b1,b1,b1,b1,b1,b1,new C.E(!0,B.cN,b1,b1,b1,b1,13,B.u,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1)),B.a5,B.cn,new C.kc(1),b1,b1,b1,b1,B.cm,b1)
a6.fD()
a6.a5(b6,new C.v(a3+-4,a1+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.J)(p),++n){a7=p[n]
l=a7.a*b2+a7.c
k=a7.b*b3+a7.d
a8=B.k.D(a7.r/0.8,0,1)
j=C.aq(D.b8r,D.b9e,a8)
j.toString
i=a7.f
$.a1()
h=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
h.r=j.gt(0)
h.c=2.4
h.d=B.bZ
s=h.L()
w.drawLine.apply(w,[l,k,l-a7.e*0.035,k-i*0.035,s])
s.delete()
i=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
i.r=j.j(0.35*a8).gt(0)
i.z=B.Oz
s=i.L()
w.drawCircle(l,k,4.5*a8+1,s)
s.delete()}if(B.d.be(q,new A.bCt())){a9=B.d.cI(q,0,new A.bCu())
$.a1()
b3=C.U()
b3.r=D.b_9.j(0.05+0.09*a9*(0.5+0.5*Math.sin(r.d*22))).gt(0)
b6.bp(new C.af(0,0,b4,b5),b3)
a6=C.j0(b1,b1,b1,b1,D.emR,B.a5,B.cn,b1,B.eL,B.cm)
a6.EL(b2-24)
a6.a5(b6,new C.v(12,10))}},
rS(d,e,f,g,h){var w=null,v=C.j0(w,w,w,w,C.dr(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),e),B.a5,B.cn,w,B.eL,B.cm)
v.fD()
v.a5(d,f)},
cu4(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.b0($.a1().r,B.aw,null,null,C.a([],x.v))
d.N(new C.bj(a1.a,a1.b))
w=A.h3M(a1,a2,a3)
d.N(new C.dl(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.at)
t=a3.c
s=Math.abs(t.at)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.aq(B.aM,D.a8V,B.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.aq(B.b3,B.aM,B.k.D(r*1.2,0,1))
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
if(q){n=new C.ahI(new C.xP(C.zY(d),!1,C.a([],x.f5))).gI(0)
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
i=t[u].a4j(f).a
h=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
h.r=B.c.gt(0)
e=h.L()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
Nj(d,e,f,g){var w,v,u,t
$.a1()
w=C.U()
v=g?B.b4:B.a1
u=g?B.bb:B.a7
t=C.aq(e,B.w,0.3)
t.toString
w.sav(new C.a8(v,u,B.x,C.a([e,f,e,t],x.O),B.Ff,null).aB(0,d))
return w},
asz(d,e,f){return this.Nj(d,e,f,!0)},
bVV(d,e){return this.Nj(d,B.bv,B.iQ,e)},
aem(d,e){var w,v,u
$.a1()
w=C.U()
w.sav(D.aFO.aB(0,C.c1(e,4.2)))
d.aw(e,4.2,w)
w=e.ap(0,D.dJZ)
v=e.ap(0,D.dK7)
u=C.U()
u.r=B.fs.gt(0)
u.c=1.2
d.bU(w,v,u)},
c7Y(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=4294626325,b4=4286331629,b5=4287322667,b6=4293870660,b7=$.a1(),b8=C.U()
b8.sav(D.bEk.aB(0,D.ea6))
b8.c=3.4
b8.d=B.bZ
w=C.U()
w.r=B.w.j(0.45).gt(0)
w.z=H.pi
b9.lf(D.ea0,w)
if(c1){w=C.c_(D.ea5,B.k6)
v=C.U()
v.r=B.c.j(0.14).gt(0)
b9.bj(w,v)}b9.bU(D.dL1,D.dKX,b8)
b9.bU(D.dJl,D.dJB,b8)
u=c0.x
switch(c0.b){case"battery":b1.bvI(b9,c0)
break
case"solar":t=C.c_(D.ea3,B.jL)
b9.bj(t,b1.Nj(new C.af(t.a,t.b,t.c,t.d),B.fM,B.cf,!1))
b7=C.U()
w=C.aq(D.b1W,B.dc,0.25+0.55*c0.f)
w.toString
v=C.aq(D.b8A,B.lP,0.3+0.4*c0.f)
v.toString
b7.sav(new C.a8(B.ax,B.aD,B.x,C.a([w,v],x.O),b2,b2).aB(0,D.a2v))
b9.bp(D.a2v,b7)
s=C.U()
s.r=B.c.j(0.35).gt(0)
s.c=0.8
for(b7=b9.a,r=1;r<6;++r){w=-34+r*68/6
q=s.L()
b7.drawLine.apply(b7,[w,-18,w,18,q])
q.delete()}for(r=1;r<4;++r){w=-18+r*9
q=s.L()
b7.drawLine.apply(b7,[-34,w,34,w,q])
q.delete()}for(r=0;r<6;++r){w=-34+(r+0.5)*68/6
$.a1()
v=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
v.r=B.ct.j(0.5).gt(0)
v.c=0.6
q=v.L()
b7.drawLine.apply(b7,[w,-18,w,18,q])
q.delete()}b7=new C.b0($.a1().r,B.aw,b2,b2,C.a([],x.v))
b7.N(new C.bj(-34,18))
b7.N(new C.av(-6+40*c0.f,-18))
b7.N(new C.av(4+40*c0.f,-18))
b7.N(new C.av(-24,18))
b7.N(new C.bW())
w=C.U()
w.r=B.c.j(0.1+0.22*c0.f).gt(0)
b9.b4(b7,w)
w=c0.f
b7=C.U()
b7.r=B.j6.j(0.9).gt(0)
b9.aw(D.dJp,4+4*w,b7)
break
case"crank":p=C.c_(D.e9V,B.fU)
b9.bj(p,b1.asz(new C.af(p.a,p.b,p.c,p.d),B.bB,B.bP))
b7=C.U()
b7.sav(D.aFP.aB(0,C.c1(B.J,12)))
b9.aw(B.J,12,b7)
o=new C.v(Math.cos(c0.y)*22,Math.sin(c0.y)*22)
b7=C.U()
b7.r=B.ct.gt(0)
b7.c=5
b7.d=B.bZ
b9.bU(B.J,o,b7)
b7=C.U()
b7.sav(D.dRO.aB(0,C.c1(o,7)))
b9.aw(o,7,b7)
b1.aem(b9,D.dKV)
b1.aem(b9,D.dJh)
break
case"turbine":b7=b7.r
w=x.v
v=new C.b0(b7,B.aw,b2,b2,C.a([],w))
v.N(new C.bj(-3,24))
v.N(new C.av(3,24))
v.N(new C.av(1.5,0))
v.N(new C.av(-1.5,0))
v.N(new C.bW())
n=C.U()
n.r=B.cf.gt(0)
b9.b4(v,n)
for(v=b9.a,m=0;m<3;++m){n=c0.y
J.bP(v.save())
v.rotate((n+m*2.094)*180/3.141592653589793,0,0)
n=C.a([],w)
l=new C.b0(b7,B.aw,b2,b2,n)
n.push(new C.bj(0,-2))
n.push(new C.dl(6,-14,2,-30))
n.push(new C.dl(-2,-14,0,-2))
n.push(new C.bW())
n=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
n.r=B.c.gt(0)
q=n.L()
n=l.gbM().a.snapshot()
v.drawPath((l.e=new C.cG(n)).a,q)
q.delete()
v.restore()}b7=C.U()
b7.sav(D.dRy.aB(0,C.c1(B.J,4.5)))
b9.aw(B.J,4.5,b7)
break
case"switch":p=C.c_(D.e9Y,B.uZ)
b7=C.U()
b7.sav(D.bFk.aB(0,new C.af(p.a,p.b,p.c,p.d)))
b9.bj(p,b7)
b1.aem(b9,D.Pp)
b1.aem(b9,D.aAP)
k=c0.w?D.aAP:D.dJ8
b7=C.U()
b7.r=B.aG.gt(0)
b7.c=6
b7.d=B.bZ
b9.bU(D.Pp,k,b7)
b7=C.U()
b7.r=(c0.w?B.bt:B.cf).gt(0)
b7.c=4
b7.d=B.bZ
b9.bU(D.Pp,k,b7)
b7=C.l0(D.Pp,k,0.85)
b7.toString
w=C.U()
w.r=B.aH.gt(0)
b9.aw(b7,5,w)
break
case"fuse":j=C.c_(D.aGa,D.aFU)
b7=C.U()
b7.r=B.hq.j(0.25).gt(0)
b9.bj(j,b7)
b7=C.U()
b7.b=B.ak
b7.c=1.4
b7.r=B.aB.gt(0)
b9.bj(j,b7)
if(!u){b7=C.U()
b7.c=1.6
b7.r=C.aq(B.cf,B.dh,c0.ax).gt(0)
b9.bU(D.aB3,D.aAO,b7)}else{b7=C.U()
b7.c=1.6
b7.r=B.c3.gt(0)
b9.bU(D.aB3,D.dL6,b7)
b7=C.U()
b7.c=1.6
b7.r=B.c3.gt(0)
b9.bU(D.dJL,D.aAO,b7)
b7=C.U()
b7.r=B.dx.gt(0)
b9.aw(B.J,6,b7)}for(b7=b9.a,i=0;i<2;++i){h=C.dy(new C.v(D.cSM[i]*22,0),20,9)
w=C.c_(h,B.k7)
q=b1.Nj(h,B.dC,B.nN,!0).L()
b7.drawRRect(C.fM(w),q)
q.delete()}break
case"pot":b7=C.U()
b7.sav(D.dRG.aB(0,C.c1(B.J,21)))
b9.aw(B.J,21,b7)
for(b7=b9.a,m=0;m<=10;++m){g=2.356194490192345+m*3.141592653589793*1.5/10
w=Math.cos(g)
v=Math.sin(g)
n=Math.cos(g)
l=Math.sin(g)
f=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
f.r=B.aB.gt(0)
f.c=1.2
q=f.L()
b7.drawLine.apply(b7,[w*18,v*18,n*22,l*22,q])
q.delete()}b7=C.U()
b7.sav(D.dRw.aB(0,C.c1(B.J,13)))
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
case"resistor":d=C.c_(D.aGa,D.aFU)
b7=C.U()
b7.sav(D.bHh.aB(0,new C.af(d.a,d.b,d.c,d.d)))
b9.bj(d,b7)
b7=x.O
a0=C.D([47,C.a([C.aX(b3),C.aX(b4),B.w],b7),100,C.a([C.aX(b5),B.w,C.aX(b5)],b7),220,C.a([C.aX(b6),C.aX(b6),C.aX(b5)],b7),470,C.a([C.aX(b3),C.aX(b4),C.aX(b5)],b7),1000,C.a([C.aX(b5),B.w,C.aX(b6)],b7)],x.i,x.bF)
a1=a0.h(0,c0.r)
if(a1==null){b7=a0.h(0,100)
b7.toString
a1=b7}for(b7=b9.a,r=0;r<3;++r){w=-14+r*9
v=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
v.r=a1[r].gt(0)
q=v.L()
b7.drawRect(C.cz(new C.af(w,-9,w+4.5,9)),q)
q.delete()}b7=C.U()
b7.r=B.aM.gt(0)
b9.bp(D.eaa,b7)
b7=c0.r
b1.rS(b9,b7>=1000?"1k\u03a9":""+B.k.U(b7)+"\u03a9",D.dKM,B.al,10)
break
case"bulb":w=c0.ax
if(w>0){v=C.U()
v.r=B.j6.j(0.55*w).gt(0)
v.z=B.FJ
b9.aw(D.a1A,34,v)}p=C.dy(D.dIQ,12,18)
b9.bj(C.c_(p,B.k7),b1.Nj(p,B.bv,B.er,!0))
for(w=b9.a,r=0;r<3;++r){v=13+r*3.5
n=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
n.r=B.dt.gt(0)
n.c=1
q=n.L()
w.drawLine.apply(w,[-9,v,9,v,q])
q.delete()}w=C.U()
if(u)v=B.Tf
else{v=C.aq(B.er,B.hD,c0.ax)
n=c0.ax
v=v.j(0.25+0.7*n)}if(u)n=B.CT
else{n=C.aq(B.fM,B.j6,c0.ax)
n.toString}w.sav(new C.bS(B.vy,0.5,B.x,b2,0,C.a([v,n.j(0.18+0.5*c0.ax)],x.O),b2,b2).aB(0,C.c1(B.tq,17)))
b9.aw(B.tq,17,w)
w=C.U()
w.b=B.ak
w.c=1.4
w.r=B.c.j(0.6).gt(0)
b9.aw(B.tq,17,w)
b7=b7.r
w=x.v
n=new C.b0(b7,B.aw,b2,b2,C.a([],w))
n.N(new C.bj(-9,-12))
n.N(new C.dl(-12,-4,-9,0))
v=C.U()
v.b=B.ak
v.c=2
v.r=B.c.j(0.45).gt(0)
b9.b4(n,v)
v=C.U()
v.r=B.cS.gt(0)
v.c=1.4
b9.bU(D.dL3,D.dL4,v)
v=C.U()
v.r=B.cS.gt(0)
v.c=1.4
b9.bU(D.dJF,D.dJI,v)
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
else{w=C.aq(B.fM,D.b2B,c0.ax)
w.toString}b7.r=w.gt(0)
b9.b4(a2,b7)
break
case"led":w=c0.ax
if(w>0){v=C.U()
v.r=B.aH.j(0.6*w).gt(0)
v.z=D.d3y
b9.aw(B.tq,30,v)}w=C.U()
w.r=B.er.gt(0)
w.c=2.4
b9.bU(D.dL8,D.dL7,w)
w=C.U()
w.r=B.er.gt(0)
w.c=2.4
b9.bU(D.dJN,D.dJM,w)
b7=b7.r
w=x.v
a4=new C.b0(b7,B.aw,b2,b2,C.a([],w))
a4.N(new C.bj(-12,8))
a4.N(new C.av(-12,-6))
a4.N(new C.dl(0,-26,12,-6))
a4.N(new C.av(12,8))
a4.N(new C.bW())
v=C.U()
if(u)n=B.Jd
else{n=C.aq(B.fq,D.a9v,c0.ax)
n.toString}if(u)l=B.jV
else{l=C.aq(B.kS,B.aH,c0.ax)
l.toString}v.sav(new C.a8(B.ax,B.aD,B.x,C.a([n,l],x.O),b2,b2).aB(0,D.e9M))
b9.b4(a4,v)
v=C.U()
v.b=B.ak
v.c=1.2
v.r=B.jb.gt(0)
b9.b4(a4,v)
v=C.U()
v.r=B.f4.gt(0)
b9.bp(D.e9P,v)
w=new C.b0(b7,B.aw,b2,b2,C.a([],w))
w.N(new C.bj(-7,-4))
w.N(new C.dl(-6,-12,0,-15))
b7=C.U()
b7.b=B.ak
b7.c=2
b7.r=B.c.j(0.5).gt(0)
b9.b4(w,b7)
break
case"motor":a5=new C.af(-28,-14,20,14)
b9.bj(C.c_(a5,B.i_),b1.asz(a5,B.aj,B.aJ))
b7=C.U()
b7.r=B.d3.gt(0)
b9.bp(D.e9C,b7)
b7=C.U()
b7.r=B.ct.gt(0)
b9.bp(D.e9D,b7)
b7=b9.a
J.bP(b7.save())
b7.translate(31,0)
for(m=0;m<3;++m){J.bP(b7.save())
b7.rotate((c0.y+m*2.094)*180/3.141592653589793,0,0)
w=C.dy(D.dJ3,15,7)
v=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
v.r=B.dh.j(0.9).gt(0)
q=v.L()
b7.drawOval(C.cz(w),q)
q.delete()
b7.restore()}w=C.U()
w.r=B.aG.gt(0)
b9.aw(B.J,3,w)
b7.restore()
b1.rS(b9,"M",D.dKU,B.aG,14)
break
case"buzzer":a6=C.dy(B.J,42,42)
b7=C.U()
b7.sav(D.dRK.aB(0,a6))
b9.lf(a6,b7)
b7=C.U()
b7.r=B.w.gt(0)
b9.aw(B.J,6,b7)
b7=C.U()
b7.b=B.ak
b7.c=1.4
b7.r=B.be.gt(0)
b9.aw(B.J,6,b7)
b1.rS(b9,"+",D.dKR,B.al,12)
for(b7=b9.a,w=b1.b,m=1;m<=3;++m){v=c0.ax
n=v>0?B.k.J(w.d*14,5):0
n=C.c1(B.J,24+m*5+n)
l=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
l.b=B.ak
l.c=2
l.r=B.cd.j(v*(1-m*0.22)).gt(0)
q=l.L()
b7.drawArc.apply(b7,[C.cz(n),-40.10704565915762,80.21409131831524,!1,q])
q.delete()}break
case"heater":p=C.c_(D.e9W,B.i_)
w=C.U()
w.sav(D.bFc.aB(0,new C.af(p.a,p.b,p.c,p.d)))
b9.bj(p,w)
w=C.a([],x.v)
a7=new C.b0(b7.r,B.aw,b2,b2,w)
a7.N(new C.bj(-24,0))
for(m=0;m<8;m=a3){b7=(m&1)===0?-10:10
a3=m+1
b7=new C.dl(-24+m*6+3,b7,-24+a3*6,0)
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
w.r=D.b3b.j(0.5*b7).gt(0)
w.z=B.ji
b9.b4(a7,w)}$.a1()
b7=C.U()
b7.b=B.ak
b7.c=3.2
b7.d=B.bZ
b7.r=C.aq(B.lj,E.aau,c0.ax).gt(0)
b9.b4(a7,b7)
break
case"capacitor":a5=new C.af(-16,-22,16,18)
b7=C.c_(a5,B.i_)
w=C.U()
w.sav(D.bEc.aB(0,a5))
b9.bj(b7,w)
w=C.U()
w.r=B.cf.gt(0)
b9.bp(D.e9R,w)
for(r=0;r<4;++r){a8=new C.ma(new C.ez("\u2212",b2,b2,B.cT,b2,b2,b2,b2,b2,b2,new C.E(!0,B.aG,b2,b2,b2,b2,11,B.u,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2)),B.a5,B.cn,new C.kc(1),b2,b2,b2,b2,B.cm,b2)
a8.fD()
a8.a5(b9,new C.v(-14,-18+r*9))}a9=new C.af(-16,-24,16,-17)
b9.bj(C.c_(a9,B.k7),b1.bVV(a9,!1))
b7=38*c0.ax
w=18-b7
$.a1()
v=C.U()
v.r=B.bt.j(0.5).gt(0)
b9.bp(new C.af(-3,w,11,w+b7),v)
b1.rS(b9,"1F",D.a1A,B.c,11)
break
case"radio":d=C.c_(D.a2v,B.fU)
b7=C.U()
b7.sav(D.bHw.aB(0,new C.af(d.a,d.b,d.c,d.d)))
b9.bj(d,b7)
b7=C.U()
b7.b=B.ak
b7.c=1.4
b7.r=B.nN.j(0.6).gt(0)
b9.bj(d,b7)
b7=C.c_(D.e9X,B.jL)
w=C.U()
w.r=B.dw.gt(0)
b9.bj(b7,w)
for(b7=b9.a,r=0;r<6;++r){w=-10+r*4.4
v=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
v.r=B.lj.gt(0)
v.c=1.4
q=v.L()
b7.drawLine.apply(b7,[-27,w,-3,w,q])
q.delete()}w=C.U()
w.r=(c0.ax>0?B.hC:B.n8).gt(0)
b9.bp(D.e9F,w)
if(c0.ax>0){w=8+B.k.J(b1.b.d*7,18)
v=C.U()
v.r=B.bS.gt(0)
v.c=1.6
b9.bU(new C.v(w,-13),new C.v(w,-3),v)}w=C.U()
w.sav(D.aFP.aB(0,C.c1(D.aAK,6)))
b9.aw(D.aAK,6,w)
w=C.U()
w.r=B.nN.gt(0)
b9.aw(D.dJk,4,w)
w=C.U()
w.r=B.er.gt(0)
w.c=1.8
b9.bU(D.dJj,D.aAT,w)
if(c0.ax>0)for(w=b1.b,m=1;m<=2;++m){v=C.c1(D.aAT,4+m*5+B.k.J(w.d*8,5))
n=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
n.b=B.ak
n.c=1.4
n.r=B.q1.j(0.7).gt(0)
q=n.L()
b7.drawArc.apply(b7,[C.cz(v),-137.50987083139756,91.67324722093173,!1,q])
q.delete()}break
case"tv":w=C.c_(D.ea2,B.i_)
v=C.U()
v.r=M.CZ.gt(0)
b9.bj(w,v)
b0=C.c_(D.ea_,B.k7)
if(c0.ax>0){b7=b9.a
J.bP(b7.save())
b7.clipRRect(C.fM(b0),$.BK(),!0)
for(w=b1.b,m=0;m<7;++m){v=-33+m*9.5
n=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
n.r=D.c7o[B.o.J(m+B.k.bK(w.d*2),7)].gt(0)
q=n.L()
b7.drawRect(C.cz(new C.af(v,-21,v+9.5,7)),q)
q.delete()}v=C.U()
v.r=B.aG.gt(0)
b9.bp(D.e9Z,v)
w=-21+B.k.J(w.d*30,38)
v=C.U()
v.r=B.c.j(0.25).gt(0)
b9.bp(new C.af(-33,w,33,w+2),v)
b7.restore()
b7=C.U()
b7.r=B.c.j(0.06).gt(0)
b9.bj(b0,b7)}else{w=C.U()
w.r=D.b7k.gt(0)
b9.bj(b0,w)
b7=new C.b0(b7.r,B.aw,b2,b2,C.a([],x.v))
b7.N(new C.bj(-33,-21))
b7.N(new C.av(-10,-21))
b7.N(new C.av(-33,0))
b7.N(new C.bW())
w=C.U()
w.r=B.c.j(0.05).gt(0)
b9.b4(b7,w)}b7=C.U()
b7.r=B.bB.gt(0)
b9.bp(D.e9O,b7)
b7=C.U()
b7.r=(c0.ax>0?B.bt:B.aH).gt(0)
b9.aw(D.dJu,1.6,b7)
break}if(u)b1.rS(b9,"\u2716",D.dL9,B.aH,14)},
bvI(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.af(-28,-13,28,13)
d.bj(C.c_(w,B.uZ),m.asz(w,B.fM,B.iz))
v=new C.af(-22,-13,22,13)
$.a1()
u=C.U()
u.sav(D.ajd.aB(0,v))
d.bp(v,u)
u=C.U()
u.r=B.e2.gt(0)
d.bp(D.e9T,u)
t=new C.af(28,-5,34,5)
d.bj(C.c_(t,B.hj),m.Nj(t,B.fM,B.iQ,!0))
m.rS(d,"+",D.dJ9,B.aM,11)
m.rS(d,"\u2212",D.dKW,B.al,11)
m.rS(d,C.t(l===B.k.lp(l)?B.k.U(l):l)+"V",D.dKQ,B.aM,13)
if(l>2){u=C.U()
u.r=B.be.gt(0)
u.c=1
d.bU(D.dIZ,D.dIP,u)
m.rS(d,l>3?"3 cells":"2 cells",D.dKP,B.aB,8)}}else if(l<=9){s=new C.af(-22,-17,22,17)
u=C.c_(s,B.uZ)
$.a1()
r=C.U()
r.sav(D.bH7.aB(0,s))
d.bj(u,r)
r=C.U()
r.r=B.dk.gt(0)
d.bp(D.e9U,r)
for(u=d.a,q=0;q<2;++q){p=D.cSR[q]
r=p<0?5:3.6
o=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.sav(D.aFO.aB(0,C.c1(new C.v(p,-18),5)))
n=o.L()
u.drawCircle(p,-18,r,n)
n.delete()}m.rS(d,"9V",D.dKN,B.c,16)}else{s=new C.af(-34,-16,34,16)
u=C.c_(s,B.jL)
$.a1()
r=C.U()
r.sav(D.ajd.aB(0,s))
d.bj(u,r)
r=C.U()
r.r=B.cV.gt(0)
d.bp(D.ea1,r)
for(u=d.a,q=0;q<2;++q){r=C.c_(C.dy(new C.v(D.cSO[q],-20),8,10),B.hj)
o=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.r=B.ct.gt(0)
n=o.L()
u.drawRRect(C.fM(r),n)
n.delete()}m.rS(d,"+",D.dJf,B.aH,10)
m.rS(d,"12V",D.dKO,B.aG,15)}},
ao(d){return!0}}
A.q0.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
B.d.a8(k)
B.d.a8(d.b)
w=C.R(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.J)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new A.vd(o,r,q,p)
n.aHN(o,r,q,p)
k.push(n)
J.ic(s[4],new A.ceL(n))
w.m(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.J)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.azs(m,u[1],l,u[3])}}}
A.afZ.prototype={
S(){return new A.ag_(B.J,B.as,$,B.bu,0,C.a([],x.X),null,null)}}
A.ag_.prototype={
Z(){this.a0()
this.a.c.e=new A.bCq()
this.kH()},
l_(d){var w,v,u,t,s,r=this,q="noise"
r.a.c.a56(0,d)
if((r.z+=d)>0.16){r.z=0
for(w=r.a.c.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
if(t.x)continue
switch(t.b){case"buzzer":s=t.ax
if(s>0.2)A.e1(520,"",110,0,0.16*s,"square")
break
case"motor":s=t.ax
if(s>0.08)A.e1(60+s*55,"",130,0,0.12,"tri")
break
case"heater":if(t.ax>0.2)s=B.cA.ag()<0.5
else s=!1
if(s)A.e1(2400,"",25,0,0.12*t.ax,q)
break
case"radio":if(t.ax>0){A.e1(900+B.cA.aG(800),"",90,0,0.1,q)
if(B.cA.ag()<0.35)A.e1(300+B.cA.aG(6)*70,"",150,0,0.12,"tri")}break
case"tv":if(t.ax>0)s=B.cA.ag()<0.4
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
r.n(new A.bCr())},
b1F(d){var w,v,u,t,s,r,q,p,o,n,m,l,k
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.J)(w),++q){p=w[q]
for(o=0;o<2;++o){n=this.y
m=p.c
l=o===0?-42:42
l=m*n.a+l-u
n=p.d*n.b-t
k=Math.sqrt(l*l+n*n)
if(k<r){s=new C.S(p,o)
r=k}}}return s},
aWC(d){var w,v,u,t,s,r,q,p
for(w=this.a.c.a,v=C.T(w).k("dv<1>"),w=new C.dv(w,v),w=new C.bR(w,w.gG(0),v.k("bR<ai.E>")),u=d.a,v=v.k("ai.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
if(Math.abs(u-r*q.a)<36&&Math.abs(t-p*q.b)<26)return s}return null},
cu5(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,C.J)(w),++q){p=w[q]
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
h=A.h3M(new C.v(k,o),new C.v(i,n),p)
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
ab3(){this.a.toString
this.n(new A.bC_())},
biG(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cGE[v]
if(!B.d.be(p.a.c.a,new A.bCs(u,w))){o=new C.v(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?F.Gg:o
s=s?F.Gg:o
q=t.agI(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.m(0,q.a,0)
p.d=q
p.e=null
A.e1(1200,"",50,0,0.3,"tri")
p.ab3()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d
j.a.toString
w=C.a([],x.s)
for(v=0;v<16;++v)w.push(D.Nj[v].a)
u=j.a.d
if(u!=null){t=C.a2(u).k("cu<1>")
t=C.z(new C.cu(u,t),t.k("F.E"))
s=t.length
v=0
for(;v<t.length;t.length===s||(0,C.J)(t),++v){r=t[v]
q=u.h(0,r)
u.m(0,r,Math.min(1,(q==null?1:q)+0.03))}}t=x.p
s=C.a([],t)
q=j.a.f
if(q!=null)s.push(q)
s.push(C.C(C.cj(new A.bCo(j,u,h)),1))
j.a.toString
q=B.c.j(0.08)
p=C.a([],t)
for(o=w.length,v=0;v<w.length;w.length===o||(0,C.J)(w),++v){r=w[v]
n=$.a0v()
m=n.h(0,r).d.j(0.14)
l=new C.b3(14,14)
k=new C.ax(n.h(0,r).d.j(0.5),1,B.r,-1)
p.push(C.aJ(i,C.p(i,C.u(C.a([new C.w(n.h(0,r).c,i,B.vb,i,i,i,i,i,i,i,i,i),B.by,new C.w(n.h(0,r).b,i,D.a4d,i,i,i,i,B.Z,i,1,i,i)],t),B.m,i,B.b5,B.j,0,B.p),B.h,i,i,new C.o(m,i,new C.c2(k,k,k,k),new C.bv(l,l,l,l),i,i,B.n),i,i,i,B.kt,i,i,i,68),B.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.bCp(j,r),i,i,i,i,i,i,!1,B.af))}s.push(C.p(i,C.cL(p,i,B.kW,i,i,B.aY,!1),B.h,i,i,new C.o(D.TJ,i,new C.c2(new C.ax(q,1,B.r,-1),B.W,B.W,B.W),i,i,i,B.n),i,78,i,i,i,i,i,i))
return C.u(s,B.m,i,B.e,B.j,0,B.p)},
aU8(d){var w=null,v=C.m(18)
return C.p(w,d,B.h,w,w,new C.o(D.aYO,w,C.G(B.bG,B.r,1),v,w,w,B.n),w,w,w,w,D.bf3,w,w,w)},
c7Z(d){var w,v,u,t=this,s=null,r=d.b,q=$.a0v().h(0,r),p=d.as,o=d.at,n=new A.bCa(t,q),m=C.d(q.c,s,s,s,s,s,s,B.QR,s,s,s),l=q.b,k=q.d,j=x.p
l=C.A(C.a([m,B.ab,C.C(C.d(l,s,s,s,s,s,s,C.l(s,s,k,s,s,s,s,s,s,s,s,16,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),C.aF(s,s,s,s,D.bwD,s,s,s,new A.bC3(t,d),s,s,s,s,"Remove part",B.c6),C.aF(s,s,s,s,B.Lx,s,s,s,new A.bC4(t),s,s,s,s,s,B.c6)],j),B.m,s,B.e,B.j,0,s,s)
m=C.d(q.e,s,s,s,s,s,s,D.R5,s,s,s)
w=C.d("How it is made: "+q.f,s,s,s,s,s,s,D.euX,s,s,s)
p=d.x?"Burnt out! Press Repair.":"Now: "+B.k.ab(Math.abs(d.as),2)+" volts  \xb7  "+B.k.ab(Math.abs(d.at)*1000,0)+" milliamps  \xb7  "+B.k.ab(Math.abs(p*o),2)+" watts"
p=C.a([l,m,B.au,w,B.ar,C.d(p,s,s,s,s,s,s,C.l(s,s,d.x?B.cN:B.aM,s,s,s,s,s,s,s,s,12.5,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],j)
if(r==="battery"){o=C.a([],j)
for(v=0;v<5;++v){u=D.cMI[v]
o.push(new A.dx(C.t(u)+" V",d.e===u,new A.bC5(t,d,u),s,k,s))}p.push(C.cb(B.bH,o,B.bw,0,6))}if(r==="resistor"){o=C.a([],j)
for(v=0;v<5;++v){u=D.cEl[v]
m=u>=1000?"1 k\u03a9":""+B.o.U(u)+" \u03a9"
o.push(new A.dx(m,d.r===u,new A.bC6(t,d,u),s,k,s))}p.push(C.cb(B.bH,o,B.bw,0,6))}if(r==="solar")p.push(n.$3("Sunlight",d.f,new A.bC7(d)))
if(r==="turbine")p.push(n.$3("Wind",d.f,new A.bC8(d)))
if(r==="pot")p.push(n.$3("Knob",d.f,new A.bC9(d)))
if(r==="crank")p.push(D.eNH)
if(r==="switch")p.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",s,s,s,s,s,s,B.i1,s,s,s))
return t.aU8(new C.d2(D.aR0,C.cf(C.u(p,B.F,s,B.e,B.R,0,B.p),B.q,s,B.z,s,s,s,s,B.ah),s))}}
A.b6T.prototype={}
A.SV.prototype={
S(){return new A.aA3(A.fy3(),new C.cn(null,x.gJ),C.aZ(x.S))}}
A.aA3.prototype={
bZE(){var w,v=this
if(++v.w%10===0){w=v.f
$.bzC()
w=w>=8}else w=!0
if(w)return
w=v.r
if(!w.q(0,v.f)&&$.bzC()[v.f].c.$1(v.d)){w.H(0,v.f)
A.As("bell",C.a([0,4,7,12],x.t),700,0.45)
v.n(new A.dIB())}},
adD(){var w=0,v=C.j(x.H),u=this,t
var $async$adD=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.cg(null,null,!0,null,new A.dIA(u),t,null,!0,!0,x.H),$async$adD)
case 2:return C.h(null,v)}})
return C.i($async$adD,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.f,o=$.bzC(),n=p<8?o[p]:q
o=n==null
w=!o
v=w&&r.r.q(0,p)
p=(v?B.bt:B.b3).j(0.12)
u=C.m(16)
t=C.G((v?B.bt:B.b3).j(0.4),B.r,1)
if(o)o=D.eNI
else{o=v?"\u2705":"\ud83c\udfaf"
o=C.d(o+" Challenge "+(r.f+1)+": "+n.a,q,q,q,q,q,q,S.H7,q,q,q)
o=C.u(C.a([o,C.d(v?"Well done!":n.b,q,2,B.Z,q,q,q,D.eq_,q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p)}s=x.p
o=C.a([C.C(o,1)],s)
if(w)o.push(C.bG(!1,C.d(v?"Next":"Skip",q,q,q,q,q,q,q,q,q,q),q,q,!0,q,q,new A.dID(r,v),q,q))
p=A.fKo(r.d,C.p(q,C.A(o,B.m,q,B.e,B.j,0,q,q),B.h,q,q,new C.o(p,q,t,u,q,q,B.n),q,q,q,D.acb,B.acs,q,q,q),r.e,r.gbZD(),q)
return A.je(B.b3,C.a([C.aF(q,q,q,q,D.btJ,q,q,q,r.gcdK(),q,q,q,q,"Ready-made circuits",q),C.aF(q,q,q,q,D.bAh,q,q,q,new A.dIE(r),q,q,q,q,"Repair burnt parts",q),C.aF(q,q,q,q,D.bsL,q,q,q,new A.dIF(r),q,q,q,q,"Clear the board",q)],s),"Build real circuits.\n\n1. Tap a part at the bottom to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nTry the challenges at the top, or open Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired.",p,"ELECTRONICS LAB",q)}}
A.auz.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.b67.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.blR()}}
A.aSO.prototype={}
A.Tq.prototype={
S(){return new A.bfW(C.R(x.S,x.N),B.as,C.a([],x.R),$,B.bu,0,C.a([],x.X),null,null)}}
A.bfW.prototype={
guE(){var w=this.f
return w===$?this.f=A.fG0(0):w},
Z(){this.a0()
this.kH()
A.yp("laser_maze").bw(new A.dXB(this),x.P)},
l_(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.S(u.a,t)
if(t>0.8)B.d.cu(w,v)}this.n(new A.dXC())},
ab5(d){var w=this
w.n(new A.dXr(w,d))
A.v5("laser_maze",C.D(["best",w.e,"level",w.d],x.N,x.z))},
bZR(d){var w,v,u,t,s,r,q,p,o=this
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
o.n(new A.dXs(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cj(new A.dXv(t,A.h3H(t.guE(),t.r))),q=x.p,p=C.a([new A.dx("Clear mirrors",!1,new A.dXw(t),B.jF,B.aM,s),new A.dx("Skip",!1,new A.dXx(t),D.bqG,B.b3,s)],q)
if(t.d>0)p.push(new A.dx("Back",!1,new A.dXy(t),D.bqH,B.b3,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new A.dx(""+u,v===t.d,new A.dXz(t,v),s,B.aH,s))}return A.je(B.aH,B.fS,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.u(C.a([new A.eF(p,s,s),new A.eF(w,"LEVEL",s)],q),B.m,s,B.e,B.R,0,B.p))}}
A.bd_.prototype={
a5(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.gef()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=B.k.D((b0.b-a4)/2,8,300),a7=new A.d8J(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.c_(new C.af(a5,a6,a8,a4),B.k6)
v=$.a1()
u=C.U()
u.r=M.CZ.gt(0)
a9.bj(w,u)
for(w=a9.a,t=0;t<=7;++t){u=t*a3
s=a5+u
r=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
r.r=B.du.gt(0)
q=r.L()
w.drawLine.apply(w,[s,a6,s,a4,q])
q.delete()
u=a6+u
s=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
s.r=B.du.gt(0)
q=s.L()
w.drawLine.apply(w,[a5,u,a8,u,q])
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.ef(a8,a8.r,C.a2(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.c_(C.dy(p,u,u),B.fU)
o=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.sav(D.bHC.aB(0,C.dy(p,a3,a3)))
q=o.L()
w.drawRRect(C.fM(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.b0(v.r,B.aw,a2,a2,u)
n.N(new C.bj(a7.$1(B.d.gI(a8)).a,a7.$1(B.d.gI(a8)).b))
for(a8=C.dc(a8,1,a2,C.T(a8).c),v=a8.$ti,a8=new C.bR(a8,a8.gG(0),v.k("bR<ai.E>")),v=v.k("ai.E");a8.C();){s=a8.d
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
a8.e=B.fk
a8.r=B.aH.j(0.28+0.08*Math.sin(a1.f*12)).gt(0)
a8.z=B.mO
a9.b4(n,a8)
a8=C.U()
a8.b=B.ak
a8.c=4
a8.e=B.fk
a8.r=D.a9v.gt(0)
a9.b4(n,a8)
a8=C.U()
a8.b=B.ak
a8.c=1.6
a8.e=B.fk
a8.r=B.c.gt(0)
a9.b4(n,a8)}for(a8=a4.c,a8=C.ef(a8,a8.r,C.a2(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.q(0,m)
if(l){m=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
m.r=B.aM.j(0.5).gt(0)
m.z=B.AR
q=m.L()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
m.r=(l?B.aM:B.bB).gt(0)
q=m.L()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?B.c:B.aB
i=new C.ma(new C.ez("\u2605",a2,a2,B.cT,a2,a2,a2,a2,a2,a2,new C.E(!0,j,a2,a2,a2,a2,v,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),B.a5,B.cn,new C.kc(1),a2,a2,a2,a2,B.cm,a2)
i.fD()
j=i.b
h=j.c
j=j.a.c
i.a5(a9,new C.v(m-h/2,k-j.gbd(j)/2))}g=new A.d8M(a7,a3,a9)
a1.c.bD(0,new A.d8K(g))
a4.d.bD(0,new A.d8L(g))
f=a7.$1(a4.e)
a4=C.c_(C.dy(f,o,a3*0.8),B.fU)
a8=C.U()
a8.r=B.aH.gt(0)
a9.bj(a4,a8)
v=f.ap(0,new C.v(v,0))
a8=C.U()
a8.r=B.c.gt(0)
a9.aw(v,5,a8)
for(a4=a1.r,a8=a4.length,e=0;e<a4.length;a4.length===a8||(0,C.J)(a4),++e){d=a4[e]
a0=d.b/0.8
v=d.a
u=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
u.b=B.ak
s=1-a0
u.c=4*s
u.r=B.aM.j(s).gt(0)
q=u.L()
w.drawCircle(v.a,v.b,a3*(0.3+a0),q)
q.delete()}},
ao(d){return!0}}
A.Ts.prototype={
S(){var w=x.n
return new A.aAH(B.cA,C.a([1,0.5,0],w),C.a([0,0,0],w),$,B.bu,0,C.a([],x.X),null,null)}}
A.aAH.prototype={
Z(){this.a0()
this.kH()
A.yp("light_mixer").bw(new A.dXU(this),x.P)},
l_(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aU9()
w.n(new A.dXV())},
ati(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aG(5)/4)
u.e=t
if(B.d.e7(t,new A.dXF()))u.e[w.aG(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aU9(){var w,v,u=this
if(u.z!=="play")return
w=B.k.U(B.k.D(1-A.h_8(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
A.v8(v,B.o.ak(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
A.v5("light_mixer",C.D(["best",v],x.N,x.z))}}else u.z="result"},
gcpn(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.D(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cym[B.o.J(B.k.U(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cj(new A.dXO(v,A.h_8(v.e,t))),r=t[0]
r=A.hp(B.aH,""+B.k.U(r*100)+"%","Red",1,0,new A.dXP(v),r)
w=t[1]
w=A.hp(B.bq,""+B.k.U(w*100)+"%","Green",1,0,new A.dXQ(v),w)
t=t[2]
return A.je(B.bc,B.fS,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.u(C.a([r,w,A.hp(B.dc,""+B.k.U(t*100)+"%","Blue",1,0,new A.dXR(v),t),new C.bE(B.a7,u,u,new A.ff(B.hh,"Lock it in",new A.dXS(v),B.bt,u),u)],x.p),B.m,u,B.e,B.R,0,B.p))}}
A.bde.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.c_(new C.af(0,0,n,m),B.pr)
$.a1()
w=C.U()
w.r=B.w.gt(0)
d.bj(l,w)
w=d.a
J.bP(w.save())
w.clipRRect(C.fM(C.c_(new C.af(0,0,n,m),B.pr)),$.BK(),!0)
v=e.gef()*0.3
u=e.ej(B.J)
l=-v*0.55
t=v*0.45
s=[u.ap(0,new C.v(0,l)),u.ap(0,new C.v(l,t)),u.ap(0,new C.v(v*0.55,t))]
r=[B.CF,E.a8J,E.a94]
d.kF(new C.af(0,0,n,m),C.U())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.a=B.n0
p.r=r[q].j(l[q]).gt(0)
o=p.L()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.c_(new C.af(0,0,n,m),B.pr)
m=C.U()
m.b=B.ak
m.c=2
m.r=B.be.gt(0)
d.bj(n,m)},
ao(d){return!0}}
A.aIw.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bsL.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpn()}}
A.aIx.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bsM.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpo()}}
A.bpF.prototype={}
A.a5Y.prototype={
B(d){var w=null
return C.ce(C.eA(w,w,w,!0,!0,D.a9D,w,1,!0,w,0,!1,w,!1,w,w,C.aF(w,w,w,w,D.aic,w,w,w,new A.c9A(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.eXP,w,w,w,1,w,!0),D.a9D,C.cL(C.a([D.dMh,C.cj(new A.c9B())],x.p),w,D.bg0,w,w,B.ah,!1),w,!1,!1,w,w)}}
A.Ug.prototype={
S(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new A.aBu(w,new C.ao(B.aq,$.at()),$,B.bu,0,C.a([],x.X),null,null)}}
A.aBu.prototype={
Z(){this.a0()
this.kH()},
aZX(d){var w=this.d.length
return B.o.J(B.k.bK(B.k.J(B.k.J(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
l_(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.aZX(v.f)
if(w!==v.x){v.x=w
A.l_("bell",24+B.o.J(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.n(new A.et9(v))
A.As("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c_L(){if(this.d.length<2)return
this.n(new A.et5(this))},
aUt(d){var w=this,v=B.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.n(new A.et4(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc_K(),p=s.d,o=C.C(C.aJ(r,C.b2(r,r,r,new A.br_(p,s.f,r),B.fj),B.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,B.af),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.u(C.a([o,new C.a3(r,40,C.as(C.d(n,r,r,r,r,r,r,D.ezI,r,r,r),r,r,r),r)],w),B.m,r,B.e,B.j,0,B.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.ary[B.o.J(v,8)].j(0.9)
t=new C.b3(20,20)
o.push(C.aJ(r,C.p(r,new C.w(p[v],r,D.eyZ,r,r,r,r,r,r,r,r,r),B.h,r,r,new C.o(u,r,r,new C.bv(t,t,t,t),r,r,B.n),r,r,r,B.hd,B.h1,r,r,r),B.z,!1,r,r,r,r,r,r,r,new A.et7(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,B.af))}p=B.c.j(0.07)
return A.je(B.aM,B.fS,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.u(C.a([new A.eF(o,r,r),C.A(C.a([C.C(C.aK(r,B.U,!1,r,!0,B.q,r,C.aL(),s.e,r,r,r,r,r,2,C.bl(r,new C.b1(4,C.m(14),B.W),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,B.kd,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),B.z,!0,r,!0,r,!1,r,B.ae,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new A.et8(s),r,!1,r,r,!1,r,!0,r,B.a8,r,r,r,r,r,r,r,r,r,r,r,B.di,!0,B.a5,r,B.am,r,r,r,r),1),B.ab,new A.ff(B.hH,"Add",s.gc_I(s),B.c,r),B.bp,new A.ff(B.lW,"Spin",q,B.bt,r)],w),B.m,r,B.e,B.j,0,r,r)],w),B.m,r,B.e,B.R,0,B.p))}}
A.br_.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.v(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.a1()
w=C.U()
w.r=D.b0n.gt(0)
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
o=C.c1(d,a0)
n=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
n.r=D.ary[B.o.J(q,8)].gt(0)
m=n.L()
n=p*57.29577951308232
f.drawArc.apply(f,[C.cz(o),n,s,!0,m])
m.delete()
o=C.c1(d,a0)
l=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
l.b=B.ak
l.c=2
l.r=B.c.j(0.6).gt(0)
m=l.L()
f.drawArc.apply(f,[C.cz(o),n,s,!0,m])
m.delete()
J.bP(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=B.a.al(o,0,11)+"\u2026"
k=new C.ma(new C.ez(o,i,i,B.cT,i,i,i,i,i,i,D.enI),B.a5,B.cn,new C.kc(1),i,i,i,i,B.cm,i)
k.fD()
o=k.b
n=o.c
o=o.a.c
k.a5(a1,new C.v(a0-n-16,-o.gbd(o)/2))
f.restore()}f=C.U()
f.r=D.a9q.gt(0)
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
j.N(new C.bW())
e=C.U()
e.r=B.c.gt(0)
a1.b4(j,e)
e=C.U()
e.b=B.ak
e.c=2
e.r=B.aV.gt(0)
a1.b4(j,e)},
ao(d){return!0}}
A.T1.prototype={
S(){return new A.bfv($,B.bu,0,C.a([],x.X),null,null)}}
A.bfv.prototype={
Z(){this.a0()
this.kH()},
l_(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
A.As("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a2x(900,new A.dKB())}w.n(new A.dKC())},
aUv(d){return this.n(new A.dKw(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=B.a.aT(B.o.u(B.k.ak(m,60)),2,"0")
v=B.a.aT(B.o.u(B.o.J(B.k.dF(m),60)),2,"0")
m=C.b2(n,n,n,new A.blW(l,B.cN,n),B.aHy)
u=C.d(w+":"+v,n,n,n,n,n,n,D.erJ,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.as(new C.a3(280,280,new C.am(B.B,n,B.a9,B.q,C.a([m,C.u(C.a([u,C.d(t,n,n,n,n,n,n,D.eqO,n,n,n),B.au,C.d("Sessions done: "+o.r,n,n,n,n,n,n,B.BG,n,n,n)],s),B.m,n,B.e,B.R,0,B.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.cPc[r]
u.push(new A.dx(""+q+" min",o.d===q,new A.dKy(o,q),n,B.cN,n))}m=o.f
p=m?U.x0:B.iF
m=m?"Pause":"Start"
return A.je(B.cN,B.fS,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.u(C.a([new A.eF(u,n,n),new A.eF(C.a([new A.ff(p,m,new A.dKz(o),B.bt,n),new A.ff(B.jF,"Reset",new A.dKA(o),B.c,n)],s),n,n)],s),B.m,n,B.e,B.R,0,B.p))}}
A.blW.prototype={
a5(d,e){var w,v,u,t,s=e.ej(B.J),r=e.a/2-14
$.a1()
w=C.U()
w.b=B.ak
w.c=16
w.r=B.c.j(0.08).gt(0)
d.aw(s,r,w)
w=C.c1(s,r)
v=C.U()
v.b=B.ak
v.c=16
v.d=B.bZ
u=this.c
t=C.aq(u,B.c,0.4)
t.toString
v.sav(new C.fR(B.B,-1.5707963267948966,4.71238898038469,B.x,C.a([u,t,u],x.O),null,null).aB(0,C.c1(s,r)))
d.fP(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
ao(d){return d.b!==this.b}}
A.Sf.prototype={
S(){return new A.bfa($,B.bu,0,C.a([],x.X),null,null)}}
A.bfa.prototype={
Z(){this.a0()
this.kH()},
l_(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Ov.h(0,p.d)
w.toString
v=B.d.fs(w,new A.dwz())
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
A.l_("flute",D.bIc[t]+5,1400,0.35)}p.n(new A.dwA())},
gc_O(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.Iq("Press Start",0.5)
w=D.Ov.h(0,this.d)
w.toString
v=B.d.fs(w,new A.dwu())
u=B.k.J(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.Iq("Breathe in",0.5+0.5*B.dF.ar(0,p))
case 1:return new C.Iq("Hold",1)
case 2:return new C.Iq("Breathe out",1-0.5*B.dF.ar(0,p))
default:return new C.Iq("Hold",0.5)}}}return new C.Iq("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc_O(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=B.hT.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,B.h,q,q,new C.o(s,q,q,q,u===0?C.a([new C.a9(0,B.G,B.hT.j(0.35),B.J,40)],v):q,q,B.a6),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,B.BO,q,q,q))
n.push(C.an(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,B.kd,q,q,q),q,q,q,q,q,q))
n=C.as(new C.a3(300,340,new C.am(B.B,q,B.a9,B.q,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aW(D.Ov.ge9(D.Ov));w.C();){v=w.gT(w)
o.push(new A.dx(v,r.d===v,new A.dwx(r,v),q,B.hT,q))}w=r.e
v=w?B.XX:B.iF
w=w?"Stop":"Start"
o.push(new A.ff(v,w,new A.dwy(r),B.bt,q))
return A.je(B.hT,B.fS,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new A.eF(o,q,q))}}
A.aEQ.prototype={}
A.ST.prototype={
S(){return new A.bfp(new C.cn(null,x.A),C.a([],x.au),B.aG,B.c)}}
A.bfp.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aF(s,s,s,s,D.m2,s,s,s,new A.dI7(t,d),s,s,s,s,"Share",s)],r),p=C.bu(C.m(18),new C.eo(C.aJ(s,C.b2(s,s,s,new A.bhq(t.e,t.x,s),B.fj),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.dI8(t),new A.dI9(t),s,s,s,s,s,s,s,s,s,new A.dIa(t),s,s,s,s,!1,B.af),t.d),B.ap),o=C.a([],r)
for(w=0;w<9;++w){v=D.cxO[w]
u=!t.w&&t.f.A(0,v)
o.push(new A.DP(v,u,new A.dIb(t,v),!1,s))}u=t.r
return A.je(B.bz,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.B(B.bT,p,s),"DRAW PAD",C.u(C.a([new A.eF(o,s,s),A.hp(B.bz,""+B.k.U(u),"Brush",30,2,new A.dIc(t),u),new A.eF(C.a([new A.dx("Eraser",t.w,new A.dId(t),B.KU,B.bz,s),new A.ff(B.uC,"Undo",new A.dIe(t),B.c,s),new A.ff(B.e4,"Clear",new A.dIf(t),B.c,s),new A.ff(B.L4,"Paper",new A.dIg(t),B.c,s)],r),s,s)],r),B.m,s,B.e,B.R,0,B.p))}}
A.bhq.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.a1()
w=C.U()
w.r=this.c.gt(0)
d.bp(new C.af(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.J)(w),++s){r=w[s]
q=$.a1()
p=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o=r.a
p.r=o.gt(o)
n=r.b
p.c=n
p.d=B.bZ
p.e=B.fk
p.b=B.ak
m=r.c
if(m.length===1){q=B.d.gI(m)
m=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
m.r=o.gt(o)
l=m.L()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=C.a([],t)
k=new C.b0(q.r,B.aw,null,null,o)
o.push(new C.bj(B.d.gI(m).a,B.d.gI(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new C.dl(n,q,(n+i.a)/2,(q+i.b)/2)
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
l=p.L()
q=k.e
u.drawPath((q==null?k.e=new C.cG(k.gbM().a.snapshot()):q).a,l)
l.delete()}}},
ao(d){return!0}}
A.TE.prototype={
S(){var w=x.S
return new A.aAR(C.aZ(w),C.aZ(w))}}
A.aAR.prototype={
Z(){this.a0()
this.aoP()},
aoP(){var w,v,u=this,t=x.N,s=C.bi(D.cT9,!0,t)
B.d.BD(s)
w=x.S
v=C.T(s).c
t=C.z(C.dc(s,0,C.dJ(u.d,"count",w),v),t)
B.d.v(t,C.dc(s,0,C.dJ(u.d,"count",w),v))
B.d.BD(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
c_J(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
A.l_("bell",12+B.o.J(d,9),150,0.35)
s.n(new A.e21(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gI(0)
u=w.gai(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bK(B.ni,new A.e22(s,v,u),t)
else{s.x=!0
C.bK(A2.Dr,new A.e23(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,B.aJM,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+B.o.ak(p,2)+" / "+o
o=x.p
p=C.u(C.a([new C.B(B.wq,C.A(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?B.aM:B.al,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),B.m,q,B.hu,B.j,0,q,q),q),C.C(C.ig(!0,q,q,B.z,new C.hI(v,8,8,1,q),new A.e27(r),r.e.length,B.bk,q,B.ah,!1),1)],o),B.m,q,B.e,B.j,0,B.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cza[t]
o.push(new A.dx(s.b,r.d===s.a,new A.e28(r,s),q,B.b3,q))}o.push(new A.ff(D.bqE,"New game",new A.e29(r),B.bt,q))
return A.je(B.b3,B.fS,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new A.eF(o,q,q))}}
A.TQ.prototype={
S(){return new A.aB9(C.a([],x.t))}}
A.aB9.prototype={
c_N(d){B.d.a8(this.d)
this.w=!0
this.aUu()},
aUu(){this.d.push(B.cA.aG(4))
this.e=0
this.XD()},
XD(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$XD=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.n(new A.eaw(t))
s=x.H
w=3
return C.b(C.bK(B.ll,null,s),$async$XD)
case 3:r=t.d,q=C.bi(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aOk(n)
w=7
return C.b(C.bK(new C.b7(1000*Math.max(280,600-r.length*18)),null,s),$async$XD)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.n(new A.eax(t))
case 1:return C.h(u,v)}})
return C.i($async$XD,v)},
aOk(d){this.n(new A.eau(this,d))
A.l_("marimba",D.ajK[d]+5,450,0.55)
C.bK(B.Dp,new A.eav(this),x.H)},
c_P(d){var w,v,u=this
if(!u.w||u.r)return
u.aOk(d)
w=u.d
v=u.e
if(w[v]!==d){A.e1(90,"",600,0,0.5,"saw")
u.n(new A.eay(u))
return}++v
u.e=v
if(v===w.length){u.n(new A.eaz(u))
C.bK(B.ie,new A.eaA(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,F.QW,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.eA5,B.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aqv[v]
u=u.j(q.f===v?1:0.35)
t=new C.b3(28,28)
s=q.f===v?C.a([new C.a9(0,B.G,D.aqv[v].j(0.8),B.J,30)],w):p
r=new C.ax(B.c.j(q.f===v?0.9:0.15),2,B.r,-1)
l.push(C.aJ(p,C.dg(p,p,p,p,B.b9,new C.o(u,p,new C.c2(r,r,r,r),new C.bv(t,t,t,t),s,p,B.n),B.jd,p,p,p,p,p,p,p),B.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.eaB(q,v),p,p,p,p,p,p,!1,B.af))}o=C.as(new C.B(B.a8,C.u(C.a([o,B.ar,n,B.d1,new C.fN(1,C.lX(1,l,2,12,12,p,B.dJ,!1),p)],m),B.m,p,B.b5,B.j,0,B.p),p),p,p,p)
n=q.w?"Restart":"Start"
return A.je(B.cV,B.fS,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new A.eF(C.a([new A.ff(B.iF,n,q.gc_M(q),B.bt,p)],m),p,p))}}
A.Ua.prototype={
S(){return new A.bgD(new C.ao(B.aq,$.at()))}}
A.bgD.prototype={
asg(d){return C.od(B.k.ab(d,2),C.ad("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new A.eoO(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d5(C.aI(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new A.eoX()
l=C.aK(m,B.U,!1,m,!0,B.q,m,C.aL(),l,m,m,m,m,m,2,C.bl(m,m,m,m,m,m,m,m,!0,new C.b1(4,C.m(16),Z.vC),m,m,m,m,m,m,m,m,m,m,m,new C.b1(4,C.m(16),D.aPq),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.l8,"Bill amount",!0,!0,!1,m,m,m,m,D.exF,"$ ",m,m,m,m,m,m,m,m),B.z,!0,m,!0,m,!1,m,B.ae,m,m,m,m,m,B.dX,m,m,m,1,m,m,!1,"\u2022",m,new A.eoT(n),m,m,m,!1,m,m,!1,m,!0,m,B.a8,m,m,m,m,m,m,m,m,m,m,m,B.aJ0,!0,B.a5,m,B.am,m,m,m,m)
k=B.bt.j(0.1)
s=C.m(20)
r=C.G(B.bt.j(0.35),B.r,1)
q=x.p
s=C.cL(C.a([l,B.bs,C.p(m,C.u(C.a([t.$2("Tip ("+B.k.U(n.e)+"%)","$"+n.asg(w)),t.$2("Total","$"+n.asg(v)),Q.Uz,t.$3$big("Each of "+n.f+" pays","$"+n.asg(u),!0)],q),B.m,m,B.e,B.j,0,B.p),B.h,m,m,new C.o(k,m,r,s,m,m,B.n),m,m,m,m,B.c1,m,m,m)],q),m,B.fv,m,m,B.ah,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.ckr[p]
r.push(new A.dx(""+o+"%",B.k.U(n.e)===o,new A.eoU(n,o),m,B.bt,m))}l=n.f
return A.je(B.bt,B.fS,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.u(C.a([new A.eF(r,"TIP",m),A.hp(B.b3,""+l,"People",20,1,new A.eoV(n),l),new A.eF(C.a([new A.dx("Round up",n.r,new A.eoW(n),m,B.aM,m)],q),m,m)],q),B.m,m,B.e,B.R,0,B.p))}}
A.TC.prototype={
S(){var w=C.a([3,5],x.t)
return new A.bg6(w,B.cA,$,B.bu,0,C.a([],x.X),null,null)}}
A.bg6.prototype={
Z(){this.a0()
this.kH()},
l_(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(B.o.J(B.k.bK(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aG(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aG(6)+1)
u.f=t
A.a5X("snare",0.5)}u.n(new A.e0H())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hd()
u.w=t
u.x=t?0:3.141592653589793
A.l_("bell",24,400,0.5)}u.n(new A.e0I())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new A.b9e(v,o.r>0,n))}u=C.aJ(n,C.as(C.cb(B.fB,m,B.bw,18,18),n,n,n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e0A(o),n,n,n,n,n,n,!1,B.af)}else if(m==="coin"){t=B.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.G(B.dC,B.r,6)
s=C.a([new C.a9(0,B.G,B.aM.j(0.4),B.J,30)],x.V)
u=C.aJ(n,C.as(C.e4(B.B,C.p(B.B,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.ewW,n,n,n),B.h,n,n,new C.o(n,n,v,n,s,D.dRJ,B.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e0B(o),n,n,n,n,n,n,!1,B.af)}else{m=o.as
u=C.aJ(n,C.as(C.u(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.end,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,B.kd,n,n,n)],x.p),B.m,n,B.e,B.R,0,B.p),n,n,n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e0C(o),n,n,n,n,n,n,!1,B.af)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.cMS[r]
v.push(new A.dx(q.b,o.d===q.a,new A.e0D(o,q),q.c,B.bE,n))}v=C.a([new A.eF(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(A.hp(B.bE,""+s,"Dice",4,1,new A.e0E(o),s))}if(o.d==="num"){s=o.z
s=A.hp(B.bE,""+s,"From",100,1,new A.e0F(o),s)
p=o.Q
B.d.v(v,C.a([s,A.hp(B.bE,""+p,"To",1000,2,new A.e0G(o),p)],m))}return A.je(B.bE,B.fS,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.u(v,B.m,n,B.e,B.R,0,B.p))}}
A.b9e.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(B.cA.ag()-0.5)*0.6
else w=0
v=C.m(22)
u=C.a([new C.a9(0,B.G,B.w.j(0.4),B.cv,14)],x.V)
t=C.a([],x.p)
for(s=D.d2t.h(0,B.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bE(s[q],p,p,C.p(p,p,B.h,p,p,I.a7_,p,18,p,p,p,p,p,18),p))
return C.et(B.B,w,C.p(p,new C.am(B.V,p,B.a9,B.q,t,p),B.h,p,p,new C.o(B.c,p,p,v,u,p,B.n),p,100,p,p,B.bA,p,p,100),p)}}
A.aHT.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bsD.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.boI()}}
A.aIa.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bsH.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bp0()}}
A.aIF.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bsR.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpw()}}
A.aJ7.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bt2.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpZ()}}
A.b2W.prototype={
B(d){var w,v=this,u=null,t=v.c,s=D.ayd.h(0,t)
$.c9x=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aF(u,u,u,u,F.qn,u,u,u,new A.clG(d),u,u,u,u,u,u),C.C(C.d(t,u,1,B.Z,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,B.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
B.d.v(t,v.w)
t.push(C.aF(u,u,u,u,C.V(B.Xw,s,u,u,u,22),u,u,u,new A.clH(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.B(D.bj0,C.A(t,B.m,u,B.e,B.j,0,u,u),u),C.C(v.f,1)],w)
t=v.r
if(t!=null)w.push(C.p(u,t,B.h,u,u,new C.o(D.TJ,u,new C.c2(new C.ax(B.c.j(0.08),1,B.r,-1),B.W,B.W,B.W),u,u,u,B.n),u,u,u,u,B.Dv,u,u,1/0))
return C.ce(u,B.bV,C.br(!0,C.u(w,B.m,u,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),u,!1,!1,u,u)}}
A.dx.prototype={
B(d){var w,v,u,t=this,s=null,r=C.m(999),q=t.d,p=q?t.r.j(0.22):B.c.j(0.06),o=q?t.r:B.c.j(0.12)
o=C.G(o,B.r,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)B.d.v(v,C.a([C.V(u,q?t.r:B.aQ,s,s,s,16),B.ez],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?B.c:B.al,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.B(D.ac0,C.aJ(s,C.dg(s,C.A(v,B.m,s,B.e,B.R,0,s,s),s,s,B.b9,new C.o(p,s,o,r,s,s,B.n),B.eD,s,s,s,B.h1,s,s,s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.clC(t),s,s,s,s,s,s,!1,B.af),s)}}
A.eF.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a3(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,B.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,B.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.C(C.cf(C.A(this.c,B.m,w,B.e,B.j,0,w,w),B.q,w,B.z,w,w,w,w,B.aY),1))
return new C.B(B.cH,C.A(v,B.m,w,B.e,B.j,0,w,w),w)}}
A.asI.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,B.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.ash(d).czs(q,B.bG,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.C(C.a7F(C.m8(s,s,s,u,v,t.e,B.k.D(w,v,u)),q),1)
u=t.x
return new C.a3(s,34,C.A(C.a([new C.a3(78,s,r,s),q,new C.a3(38,s,C.d(u==null?B.k.ab(w,1):u,s,s,s,s,s,s,Ab.QI,B.dK,s,s),s)],x.p),B.m,s,B.e,B.j,0,s,s),s)}}
A.ff.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.B(D.ac0,C.aD(!1,B.X,!0,C.m(12),C.aH(!1,C.m(12),!0,new C.B(A8.acf,C.A(C.a([C.V(w.c,u,v,v,v,17),B.ez,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.R,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new A.clB(w),v,v,v,v,v,v,v),B.h,t,0,v,v,v,v,v,B.ac),v)}}
A.DP.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.elJ:u
w=t?B.c:B.be
w=C.G(w,B.r,t?2.5:1)
return C.aJ(u,C.dg(u,u,u,u,B.b9,new C.o(p,u,w,u,t?C.a([new C.a9(0,B.G,v.c.j(0.6),B.J,10)],x.V):u,q,B.a6),B.hG,u,r,D.ac2,u,u,u,s),B.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.clI(v),u,u,u,u,u,u,!1,B.af)}}
A.m9.prototype={
a2x(d,e){var w=C.da()
w.sew(C.cV(C.dB(0,0,0,d,0,0),new A.clD(this,w,e)))
this.fc$.push(w.b7())},
kH(){var w=this,v=w.qQ(new A.clF(w))
v.kj(0)
w.fb$!==$&&C.aO()
w.fb$=v}}
A.a8D.prototype={
bs0(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,C.J)(w),++q)for(p=B.d.gaf(w[q]);p.C();){o=p.gT(0)
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
for(m=0,q=0;q<w.length;w.length===p||(0,C.J)(w),++q){for(v=B.d.gaf(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gT(0)
n=J.a6(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&C.aO()
g.ax=m
w=g.bv7()
g.ay!==$&&C.aO()
g.ay=w},
bv7(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.J)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
Eg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
for(k=l.y,w=k.length,v=0;v<k.length;k.length===w||(0,C.J)(k),++v){u=k[v]
for(t=u.length-1,s=!1,r=0;r<u.length;q=r+1,t=r,r=q){p=J.q(u[r],0)
o=J.q(u[r],1)
n=J.q(u[t],0)
m=J.q(u[t],1)
if(o>f!==m>f&&e<(n-p)*(f-o)/(m-o)+p)s=!s}if(s)return!0}return!1}}
A.a8E.prototype={
cvA(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.J)(v),++s){r=v[s]
if(r.Eg(0,w,e)){if(t!=null){q=r.ax
q===$&&C.c()
p=t.ax
p===$&&C.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
A.uh.prototype={}
A.Ng.prototype={}
A.x5.prototype={}
A.Nf.prototype={
f9(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.ajG[w.aG(7)]
w=w.hd()?0:12
u=B.o.J(t.c++,3)===0?"flute":"bell"
A.l_(u,v+w-12,2200,0.1)}}
A.T8.prototype={
S(){var w=$.at()
return new A.aAe(new C.cn(null,x.A),new C.ao(B.aq,w),new A.Nf(B.cA),D.cOG,B.as,D.a_l,$,B.bu,0,C.a([],x.X),null,null)}}
A.aAe.prototype={
Z(){var w,v=this
v.a0()
v.kH()
v.a.toString
w=$.fTm
if(w==null)w=$.fTm=A.coc()
w.bw(new A.dNj(v),x.P)},
p(){var w=this.e
w.R$=$.at()
w.O$=0
this.bp8()},
cjM(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.x)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.J)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.J)(p),++n)q.push(new A.dMM(p[n]).$0())
w.push(q)}this.w=w},
gU4(){var w=this.fy
return w.A(0,B.as)?100:Math.min(w.a,w.b)*0.43},
apY(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=B.k.D(f,1,16)
w.Q=w.as=0},
atJ(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.apY(d.x,d.w,105/Math.max(w,3))
C.eN()
A.l_("bell",(B.d.cP(D.ZW,d.c)+1)*3+12,900,0.45)
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
c0t(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
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
return m.cvA((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c0s(d){var w=this,v=w.r
if(v==null||B.a.i(d).length===0){w.n(new A.dMK(w))
return}w.n(new A.dML(w,v,B.a.i(d).toLowerCase()))},
bHt(){var w=null,v=this.c
v.toString
C.cg(w,w,!0,w,new A.dMI(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aF(n,n,n,n,D.btk,n,n,n,o.gbHs(),n,n,n,n,"Earth facts",n),C.aF(n,n,n,n,D.m2,n,n,n,new A.dN4(o,d),n,n,n,n,"Share",n)],l),j=C.cj(new A.dN5(o,m)),i=B.c.j(0.06)
i=C.a([C.aK(n,B.U,!1,n,!0,B.q,n,C.aL(),o.e,n,n,n,n,n,2,C.bl(n,new C.b1(4,C.m(14),B.W),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,H.BL,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bBd,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.ae,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc0r(),n,n,n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,B.ir,!0,B.a5,n,B.am,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.J)(v),++t){s=v[t]
w.push(new A.dx(s.a,!1,new A.dN6(o,s),B.mF,B.b3,n))}i.push(new C.B(B.iX,new C.a3(n,38,C.cL(w,n,n,n,n,B.aY,!1),n),n))}i.push(B.ar)
w=C.a([new A.dx("Whole Earth",!1,new A.dNa(o),B.h2,B.b3,n)],l)
for(v=D.ay3.gdH(D.ay3),v=v.gaf(v);v.C();){u=v.gT(v)
w.push(new A.dx(u.a,!1,new A.dNb(o,u),n,B.b3,n))}w.push(new A.dx("Random",!1,new A.dNc(o),B.lW,B.b3,n))
i.push(new A.eF(w,"GO TO",n))
w=o.z
i.push(A.hp(B.b3,B.k.ab(w,1)+"x","Zoom",16,0.8,new A.dNd(o),w))
w=o.dy
i.push(A.hp(B.cV,B.a.aT(B.o.u(B.k.bK(w)),2,"0")+":00","Time",24,0,new A.dNe(o),w))
w=o.fr
i.push(A.hp(B.bt,o.ciz(),"Season",365,0,new A.dNf(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?B.lr:D.Em
i.push(new A.eF(C.a([new A.dx("Spin",w,new A.dNg(o),D.bot,B.b3,n),new A.dx("Night",v,new A.dNh(o),B.un,B.b3,n),new A.dx("Borders",u,new A.dN7(o),D.box,B.b3,n),new A.dx("Names",r,new A.dN8(o),Q.agn,B.b3,n),new A.dx("Music",q,new A.dN9(o),p,B.b3,n)],l),n,n))
return A.je(B.b3,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.u(i,B.m,n,B.e,B.R,0,B.p))},
ciz(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.ar9[u])v=u
return B.hW[v]+" "+(B.k.bK(w-D.ar9[v])+1)},
c0q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new G.mO(1,B.o.J((B.d.cP(D.ZW,t)+1)*47,360),0.55,1).iD()
r=new A.dMG()
q=C.m(20)
p=C.G(s.j(0.6),B.r,1)
o=x.p
n=C.A(C.a([C.p(j,j,B.h,j,j,new C.o(s,j,j,j,j,j,B.a6),j,10,j,j,j,j,j,10),B.ab,C.C(C.d(d.a,j,1,B.Z,j,j,j,B.dP,j,j,j),1),C.aF(j,j,j,j,B.Lx,j,j,j,new A.dMF(this),j,j,j,j,j,B.c6)],o),B.m,j,B.e,B.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,B.i1,j,j,j)
m=D.d1b.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.A(C.a([m,B.ab,r.$2("PEOPLE",l?A.faj(v):"\u2014")],o),B.m,j,B.e,B.j,0,j,j)
i=r.$2("SIZE",A.Fc(i)+" km\xb2")
if(l)m=(w<10?B.k.ab(w,1):A.Fc(w))+" per km\xb2"
else m="\u2014"
m=C.A(C.a([i,B.ab,r.$2("CROWDING",m)],o),B.m,j,B.e,B.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?B.k.ab(u,3):B.k.ab(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.u(C.a([n,t,B.P,v,B.P,m,B.P,C.A(C.a([i,B.ab,r.$2("ECONOMY",l>0?"$"+A.faj(l*1e6)+" \xb7 "+k:k)],o),B.m,j,B.e,B.j,0,j,j)],o),B.F,j,B.e,B.R,0,B.p),B.h,j,j,new C.o(D.Ta,j,p,q,j,j,B.n),j,j,j,j,D.acz,j,j,j)}}
A.bbr.prototype={
a5(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.a1(),d7=C.U()
d7.r=D.z4.gt(0)
d8.bp(new C.af(0,0,0+d4,0+d5),d7)
w=new C.f6()
w.dY(4)
for(d7=d8.a,v=0;v<90;++v){u=w.ag()
t=w.ag()
s=w.ag()
r=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
r.r=B.c.j(0.25+w.ag()*0.5).gt(0)
q=r.L()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new C.v(d4,d5)
o=d2.f
u=C.U()
t=x.O
u.sav(new C.bS(B.B,0.5,B.x,d3,0,C.a([B.K,B.b3.j(0.35),B.K],t),D.cAD,d3).aB(0,C.c1(p,o*1.1)))
d8.aw(p,o*1.05,u)
n=C.c1(p,o)
u=C.U()
u.sav(D.dRN.aB(0,n))
d8.aw(p,o,u)
J.bP(d7.save())
u=x.v
d6=new C.b0(d6.r,B.aw,d3,d3,C.a([],u))
d6.N(new C.kv(n))
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
f=new A.d4K(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.L()
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
d.e=null}}}if(d!=null){q=g.L()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cG(d.gbM().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.L()
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
d.e=null}}}if(d!=null){q=g.L()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cG(d.gbM().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=B.o.J((B.d.cP(D.ZW,a7.c)+1)*47,360)
$.a1()
b0=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a3=a8?0.35:0.5
b0.r=new G.mO(1,a9,a3,a8?1:0.62).iD().gt(0)
b1=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
b1.b=B.ak
b1.c=a8?2.2:m
b1.e=B.fk
b1.r=(a8?B.c:B.w.j(0.55)).gt(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,C.J)(a3),++b3){b4=a3[b3]
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
b6=new C.bW()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bH(b7)
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
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.J)(a5),++b3){d=a5[b3]
$.a1()
s=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
s.b=B.ak
s.c=5
s.r=B.c.j(0.25).gt(0)
s.z=B.qw
q=s.L()
s=d.e
d7.drawPath((s==null?d.e=new C.cG(d.gbM().a.snapshot()):s).a,q)
q.delete()}if(d2.z)for(u=d6.length,s=d2.r,r=!(s<1.8),s=14/s,b3=0;b3<d6.length;d6.length===u||(0,C.J)(d6),++b3){a7=d6[b3]
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
c9=A.hqJ(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbd(b2)
c9.a5(d8,new C.v(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=B.k.D(k*c0+j*c1*c4,-1,1)
$.a1()
u=C.U()
u.sav(new C.bS(B.B,0.5,B.x,d3,0,C.a([B.K,B.K,D.aZq.j(0.78)],t),D.cP0,d3).aB(0,C.c1(new C.v(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.aw(p,o,u)}$.a1()
d4=C.U()
d4.sav(new C.bS(B.B,0.5,B.x,d3,0,C.a([B.K,B.w.j(0.4)],t),D.cZM,d3).aB(0,n))
d8.aw(p,o,d4)
d7.restore()
d7=C.U()
d7.b=B.ak
d7.c=1.4
d7.r=B.ja.j(0.5).gt(0)
d8.aw(p,o,d7)},
ao(d){return!0}}
A.aIg.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.aIh.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bp7()}}
A.bpA.prototype={}
A.Uc.prototype={
S(){return new A.bgG()}}
A.bgG.prototype={
gaNV(){var w=this.d
if(w===$)w=this.d=B.cA.aG(16)
return w},
B(d){var w=null,v=C.eA(w,w,w,!0,!0,D.z4,w,1,!0,w,0,!1,w,!1,w,w,C.aF(w,w,w,w,D.aic,w,w,w,new A.epk(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.eS4,w,w,w,1,w,!0),u=C.m(18),t=B.b3.j(0.1),s=C.G(B.b3.j(0.35),B.r,1),r=x.p
return C.ce(v,D.z4,C.cL(C.a([C.p(w,C.A(C.a([D.bs1,B.av,C.C(C.d(D.cE7[this.gaNV()],w,w,w,w,w,w,D.a4t,w,w,w),1),C.aF(w,w,w,w,D.bC9,w,w,w,new A.epl(this),w,w,w,w,"Another fact",w)],r),B.m,w,B.e,B.j,0,w,w),B.h,w,w,new C.o(t,w,s,u,w,w,B.n),w,w,w,w,B.bA,w,w,w),B.ay,C.cj(new A.epm())],r),w,B.Va,w,w,B.ah,!1),w,!1,!1,w,w)}}
A.TZ.prototype={
S(){return A.hra()}}
A.bgt.prototype={
caI(d){var w=d.c,v=A.hrc(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.v(Math.cos(t)*v,Math.sin(t)*v)},
Z(){this.a0()
this.kH()},
l_(d){var w,v,u,t=this
t.e.f9(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.caI(w)
u=new C.v(-v.a,-v.b).aP(0,t.w)
v=C.l0(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc0u(){var w=this.ch
return new C.v(w.a/2,w.b/2).ap(0,this.x)},
c0y(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
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
aUQ(d){this.n(new A.ehK(this,d))
C.eN()
A.l_("bell",D.cZW[B.o.J(B.d.cP(D.AH,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aF(m,m,m,m,D.m2,m,m,m,new A.ehV(n,d),m,m,m,m,"Share",m)],k),i=C.cj(new A.ehW(n,l)),h=C.a([new A.dx("All",!1,new A.ehX(n),B.Y4,B.aM,m)],k)
for(w=0;w<10;++w){v=D.AH[w]
h.push(new A.dx(v.a,n.z===v,new A.ehY(n,v),m,C.aX(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?B.k.ab(s,0)+" d/s":""+B.k.U(s)+" d/s"
t=A.hp(B.aM,s,"Time",1,0,new A.ehZ(n),u/t)
u=n.w
u=A.hp(B.aM,B.k.ab(u,1)+"x","Zoom",9,0.5,new A.ei_(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?B.lr:D.Em
return A.je(B.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.u(C.a([new A.eF(h,"GO TO",m),t,u,new A.eF(C.a([new A.dx("Orbits",s,new A.ei0(n),m,B.aM,m),new A.dx("Names",r,new A.ei1(n),m,B.aM,m),new A.dx("Asteroids",q,new A.ei2(n),m,B.aM,m),new A.dx("Music",p,new A.ei3(n),o,B.aM,m)],k),m,m)],k),B.m,m,B.e,B.R,0,B.p))},
c0v(d){var w,v,u,t,s,r=null,q=C.aX(d.z),p=d.c,o=p*8.317,n=new A.ehI(),m=C.m(20),l=C.G(q.j(0.6),B.r,1),k=C.p(r,r,B.h,r,r,new C.o(q,r,r,r,r,r,B.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.A(C.a([k,B.ab,C.C(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,B.l7,r,r,r),1),C.aF(r,r,r,r,B.Lx,r,r,r,new A.ehH(this),r,r,r,r,r,B.c6)],w),B.m,r,B.e,B.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,D.R5,r,r,r)
v=n.$2("WIDTH",A.Fc(d.d*2)+" km")
u=p===0
p=C.A(C.a([v,B.ab,n.$2("FROM THE SUN",u?"\u2014":C.t(p)+" AU ("+A.Fc(p*149.6)+" million km)")],w),B.m,r,B.e,B.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new A.ehJ().$1(v))
t=d.f
v=C.A(C.a([v,B.ab,n.$2("ONE DAY",t>=48?B.k.ab(t/24,0)+" Earth days":B.k.ab(t,1)+" hours")],w),B.m,r,B.e,B.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.A(C.a([n.$2("GRAVITY",C.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+B.k.ab(50*t/9.81,s)+" kg"),B.ab,n.$2("TEMPERATURE",""+B.o.U(d.x)+"\xb0C")],w),B.m,r,B.e,B.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?B.k.ab(o,1)+" minutes":B.k.ab(o/60,1)+" hours"
return C.p(r,C.u(C.a([j,B.au,k,B.P,p,B.P,v,B.P,s,B.P,C.A(C.a([t,B.ab,n.$2("SUNLIGHT TAKES",i)],w),B.m,r,B.e,B.j,0,r,r)],w),B.F,r,B.e,B.R,0,B.p),B.h,r,r,new C.o(D.Ta,r,l,m,r,r,B.n),r,r,r,r,D.acz,r,r,r)}}
A.bnF.prototype={
a5(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.a1()
w=C.U()
w.r=D.z4.gt(0)
a7.bp(new C.af(0,0,0+a5,0+a6),w)
v=new C.f6()
v.dY(8)
for(w=a7.a,u=0;u<110;++u){t=v.ag()
s=v.ag()
r=v.ag()
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=B.c.j(0.2+v.ag()*0.5).gt(0)
p=q.L()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc0u()
n=a5.w
if(a5.as)for(a6=B.d.gaf(D.AH),t=new C.hX(a6,new A.eJ9()),s=o.a,r=o.b;t.C();){q=a6.gT(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
m.b=B.ak
m.c=1
m.r=B.c.j(0.12).gt(0)
p=m.L()
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
p=l.L()
w.drawCircle(t+q*j,s+m*j,0.9,p)
p.delete()}i=A.hrb(B.d.gI(D.AH))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.U()
s=x.O
t.sav(new C.bS(B.B,0.5,B.x,a4,0,C.a([B.aM.j(0.5),B.K],s),a4,a4).aB(0,C.c1(o,a6)))
a7.aw(o,a6,t)
t=C.U()
t.sav(D.dRH.aB(0,C.c1(o,i)))
a7.aw(o,i,t)
if(a5.at){h=A.fUY("Sun",10.5,B.al)
h.a5(a7,o.ap(0,new C.v(-h.b.c/2,i+4)))}for(a6=B.d.gaf(D.AH),t=new C.hX(a6,new A.eJa()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gT(0)
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
p=a1.L()
w.drawOval(C.cz(a0),p)
p.delete()
w.restore()}a0=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a0.r=e.j(0.3).gt(0)
a0.z=B.qw
p=a0.L()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a1=C.aq(e,B.w,0.55)
a1.toString
a0.sav(new C.bS(N.qY,0.5,B.x,a4,0,C.a([B.c,e,a1],s),E.Zz,a4).aB(0,C.c1(new C.v(g,f),j)))
p=a0.L()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
l.b=B.ak
l.c=2
l.r=B.c.gt(0)
p=l.L()
w.drawCircle(g,f,j+7,p)
p.delete()}if(r&&d==="Earth"){k=a5.f/27.3*2*3.141592653589793
a2=j+11*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a3.r=B.c.gt(0)
p=a3.L()
w.drawCircle(g+l*a2,f+a0*a2,1.8*a1,p)
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.cIR[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a3.r=B.al.gt(0)
p=a3.L()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=A.fUY(d,10.5,B.al)
h.a5(a7,new C.v(g+-h.b.c/2,f+(j+4)))}}},
ao(d){return!0}}
A.T9.prototype={
S(){var w=x.i
return new A.aAf(new A.Nf(B.cA),C.bT(5,0,!1,w),C.bT(5,0,!1,w),C.bT(5,null,!1,x.cD),B.J,B.J,C.a([],x.g),$,B.bu,0,C.a([],x.X),null,null)}}
A.aAf.prototype={
cmU(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c0x(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.dJ2
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
s.n(new A.dNn())},
Z(){this.a0()
this.kH()},
l_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.f9(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.xw[r]
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
break}}}if(B.d.e7(s,new A.dNQ()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
if(v.length===0||B.d.gai(v).aD(0,i.cx).gct()>120)v.push(i.cx)
if(v.length>700)B.d.cu(v,0)
if(i.cx.gct()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bFN()
else n=n==="weight"?p.ctV():p.byc()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.cXq[u]
v.push(new A.dx(t.b,p.d===t.a,new A.dNC(p,t),t.c,B.dh,o))}v=C.a([new A.eF(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new A.dx("Hammer",!s,new A.dND(p),A6.Xv,B.dh,o),new A.dx("Feather",s,new A.dNE(p),Q.X4,B.dh,o),new A.dx(q,r,new A.dNI(p),B.E9,B.b3,o)],w)
q=p.w
B.d.v(v,C.a([new A.eF(r,o,o),A.hp(B.dh,""+B.k.U(q*100)+"%","Slow motion",1,0.05,new A.dNJ(p),q),new A.eF(C.a([new A.ff(B.uq,"Drop!",new A.dNK(p),B.bt,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=A.hp(B.dh,""+B.k.U(s)+" kg","Your weight",120,20,new A.dNL(p),s)
r=p.ax
B.d.v(v,C.a([s,A.hp(B.dh,""+B.k.U(r*100)+" cm","Your jump",1.2,0.1,new A.dNM(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=A.hp(B.dh,B.k.ab(s,1)+" km/s","Speed",13,0,new A.dNN(p),s)
r=p.ch
B.d.v(v,C.a([s,A.hp(B.dh,B.k.ab(r,1)+"x out","View",8,0.5,new A.dNO(p),r),new A.eF(C.a([new A.ff(B.m0,"Fire!",p.gc0w(),B.bt,o),new A.ff(B.uq,"Falls",new A.dNP(p),B.c,o),new A.ff(B.rO,"Orbit 7.7",new A.dNF(p),B.c,o),new A.ff(D.brt,"Oval 9",new A.dNG(p),B.c,o),new A.ff(B.Eo,"Escape",new A.dNH(p),B.c,o)],w),o,o)],w))}return A.je(B.dh,B.fS,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.u(v,B.m,o,B.e,B.R,0,B.p))},
bFN(){return new C.B(D.be4,C.cj(new A.dNm(this)),null)},
ctV(){var w,v,u,t=null,s=[D.e4z,D.e5R,D.e5Z,D.e6h,D.e5X,D.e6l,D.e54,D.e6E,D.e5D],r=x.p,q=C.a([D.eH_,B.T],r)
for(w=0;w<9;++w){v=s[w]
u=C.aX(v.c)
q.push(new C.B(B.cH,new C.cC(B.aY,B.e,B.j,B.m,t,B.p,t,0,C.a([new C.a3(62,t,new C.w(v.a,t,new C.E(!0,u,t,t,t,t,12.5,B.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bF(1,B.bn,new C.A9(new A.dNo(this,v),t),t)],r),t),t))}q.push(B.au)
q.push(D.eJ6)
return C.cL(q,t,B.iD,t,t,B.ah,!1)},
byc(){return C.cj(new A.dNk(this))}}
A.b6I.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.a1(),e=C.U()
e.r=D.z4.gt(0)
d.bp(new C.af(0,0,0+h,0+g),e)
w=new C.f6()
w.dY(2)
for(e=d.a,v=0;v<80;++v){u=w.ag()
t=w.ag()
s=w.ag()
r=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
r.r=B.c.j(0.2+w.ag()*0.5).gt(0)
q=r.L()
e.drawCircle(u*h,t*g,s*1.1+0.3,q)
q.delete()}h=j.c
p=6371*h
g=j.b
e=C.U()
e.sav(new C.bS(B.B,0.5,B.x,i,0,C.a([B.K,B.b3.j(0.35),B.K],x.O),D.cPP,i).aB(0,C.c1(g,p*1.1)))
d.aw(g,p*1.06,e)
e=C.U()
e.sav(D.dRE.aB(0,C.c1(g,p)))
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
n.N(new C.bW())
s=C.U()
s.r=B.aj.gt(0)
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
for(u=C.dc(u,1,i,C.T(u).c),s=u.$ti,u=new C.bR(u,u.gG(0),s.k("bR<ai.E>")),s=s.k("ai.E");u.C();){r=u.d
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
h.z=H.pi
d.aw(k,7,h)
h=C.U()
h.r=B.c.gt(0)
d.aw(k,4,h)}},
ao(d){return!0}}
A.TR.prototype={
S(){return new A.bgq(new C.cn(null,x.A),$,B.bu,0,C.a([],x.X),null,null)}}
A.bgq.prototype={
Z(){this.a0()
this.kH()},
l_(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.Nt[l.e],i=D.Nt[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aF(k,k,k,k,D.m2,k,k,k,new A.eaE(l,d),k,k,k,k,"Share",k)],u)
s=C.C(C.b2(k,k,k,new A.bnd(f,g,v,k),B.fj),1)
r=g.a
q=v<10?B.k.ab(v,1):A.Fc(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,B.jr,B.L,k,k)
o=A.Fc(v*v*v)
n=B.a.c5(p,"s")?"":"s"
h=C.u(C.a([s,C.p(k,C.u(C.a([q,B.au,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,E.aJf,B.L,k,k),B.by,C.d(p+": "+A.Fc(w*2)+" km wide. "+r+": "+A.Fc(h*2)+" km wide.",k,k,k,k,k,k,A0.a46,B.L,k,k)],u),B.m,k,B.e,B.j,0,B.p),B.h,k,k,k,k,k,k,k,D.bga,k,k,1/0)],u),B.m,k,B.e,B.j,0,B.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.Nt[m]
r.push(new A.dx(w.a,l.e===m,new A.eaF(l,m),k,C.aX(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.Nt[m]
w.push(new A.dx(s.a,l.f===m,new A.eaG(l,m),k,C.aX(s.c),k))}return A.je(B.cd,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.eo(h,l.d),"SIZE COMPARE",C.u(C.a([new A.eF(r,"FIRST",k),new A.eF(w,"SECOND",k)],u),B.m,k,B.e,B.R,0,B.p))}}
A.bnd.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.a1()
w=C.U()
w.r=D.TC.gt(0)
d.bp(new C.af(0,0,0+h,0+g),w)
v=new C.f6()
v.dY(6)
for(w=d.a,u=0;u<70;++u){t=v.ag()
s=v.ag()
r=v.ag()
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=B.c.j(0.2+v.ag()*0.4).gt(0)
p=q.L()
w.drawCircle(t*h,s*g,r+0.3,p)
p.delete()}o=Math.min(h/2-16,g/2-10)*0.98
n=Math.max(o/this.d,0.8)
h*=0.5
g*=0.5
m=new C.v(h,g)
w=new A.eHi(d)
t=this.c
w.$3(m,o,C.aX(t.c))
s=o-n
l=new C.v(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,C.aX(s.c))
w=C.U()
w.b=B.ak
w.c=1.4
w.r=B.al.gt(0)
d.aw(l,n+3,w)
k=C.j0(i,i,i,i,C.dr(i,i,i,i,i,i,i,i,i,D.etp,s.a),B.a5,B.cn,i,B.eL,B.cm)
k.fD()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbd(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbd(g)-6
h=g}k.a5(d,l.ap(0,new C.v(-w/2,h)))
j=C.j0(i,i,i,i,C.dr(i,i,i,i,i,i,i,i,i,D.ewx,t.a),B.a5,B.cn,i,B.eL,B.cm)
j.fD()
t=j.b
h=t.c
t=t.a.c
j.a5(d,m.ap(0,new C.v(-h/2,-t.gbd(t)/2)))},
ao(d){return!0}}
A.aIi.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bsJ.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bp9()}}
A.aIR.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bsX.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpI()}}
A.aIU.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bsZ.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpL()}}
A.NI.prototype={}
A.Sd.prototype={
S(){return A.hr8()}}
A.bf9.prototype={
Z(){this.a0()
this.kH()},
l_(d){var w,v,u,t,s,r=this
r.f+=d
r.e.f9(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
A.e1(70,"",500,0.3,0.5,"sine")}}B.d.bl(w,new A.dw0())},
aUR(d){var w,v,u,t=this.Q
if(t.A(0,B.as))return
w=this.gb2r()
v=d.aD(0,new C.v(t.a/2,t.b*0.42))
u=B.k.D(v.gct()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new A.NI(t,u,1.2,new C.wi(1,30+B.cA.ag()*40,0.9,0.7).iD()))
A.l_("bell",60+B.k.U(12-u)*2,400,0.35)},
gb2r(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/B.k.D(m.length===0?3:new C.I(m,new A.dvP(),C.T(m).k("I<1,P>")).fs(0,B.vJ),1.0001,99))
m=x.p
w=C.a([C.aF(n,n,n,n,D.m2,n,n,n,new A.dvQ(o,d),n,n,n,n,"Share",n)],m)
v=C.cj(new A.dvR(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?B.k.ab(s,0)+" Suns":A.faj(s)+" Suns"
t=A.hp(B.bE,s,"Mass",1,0,new A.dvT(o),u/t)
u=C.a([new A.dx("Star (10)",!1,new A.dvU(o),n,B.bE,n),new A.dx("Cygnus X-1 (21)",!1,new A.dvV(o),n,B.bE,n),new A.dx("Milky Way core (4 million)",!1,new A.dvW(o),n,B.bE,n),new A.dx("M87 (6.5 billion)",!1,new A.dvX(o),n,B.bE,n)],m)
s=o.w
r=o.x
q=o.y
p=q?B.lr:D.Em
return A.je(B.bE,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.u(C.a([t,new A.eF(u,"LIKE",n),new A.eF(C.a([new A.dx("Glowing ring",s,new A.dvY(o),n,B.bE,n),new A.dx("Bent light",r,new A.dvZ(o),n,B.bE,n),new A.dx("Music",q,new A.dw_(o),p,B.bE,n),new A.ff(B.jF,"Clear",new A.dvS(o),B.c,n)],m),n,n)],m),B.m,n,B.e,B.R,0,B.p))},
abK(d,e){var w=null
return C.C(C.u(C.a([C.d(d,w,w,w,w,w,w,D.epv,w,w,w),B.by,C.d(e,w,2,w,w,w,w,M.aJ3,B.L,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),1)}}
A.b65.prototype={
a5(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.a1()
w=C.U()
w.r=D.b5l.gt(0)
b2.bp(new C.af(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.v(w,v)
t=this.b
s=t.gb2r()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,C.J)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new C.v(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+B.k.D(o/h,0,n)
i=new C.v(w+k/h*g,v+j/h*g)}}k=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
k.r=B.c.j(0.6).gt(0)
f=k.L()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=C.U()
b0.b=B.ak
b0.c=2
b0.r=B.c.j(0.25).gt(0)
b0.z=F.a0j
b2.aw(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.aq(B.vY,B.fZ,d)
n.toString
k=Math.cos(a4)
$.a1()
j=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
g=a5?1:0.85
j.r=n.j(r*(0.4+(0.5+0.5*k)*0.6)*g).gt(0)
f=j.L()
p.drawCircle(w+a6,v+o*a0*0.28,1.3,f)
f.delete()
if(!a5&&t.x){o=Math.sin(-a4)
k=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
k.r=n.j(b1).gt(0)
f=k.L()
p.drawCircle(w+a6*0.5,v+(q*Math.abs(o)*0.6-b0),1,f)
f.delete()}}}b0=s*1.25
$.a1()
b1=C.U()
b1.sav(new C.bS(B.B,0.5,B.x,null,0,C.a([B.w,B.w.j(0)],x.O),D.cw5,null).aB(0,C.c1(u,b0)))
b2.aw(u,b0,b1)
b1=C.U()
b1.r=B.w.gt(0)
b2.aw(u,s,b1)
b1=C.U()
b1.b=B.ak
b1.c=1
b1.r=B.bE.j(0.55).gt(0)
b2.aw(u,s,b1)
for(b0=t.z,b1=b0.length,m=0;m<b0.length;b0.length===b1||(0,C.J)(b0),++m){a7=b0[m]
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
f=n.L()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.r=k.j(0.2).gt(0)
o.z=H.pi
f=o.L()
p.drawCircle(t,r,6,f)
f.delete()}},
ao(d){return!0}}
A.ach.prototype={}
A.T5.prototype={
S(){var w=x.r,v=x.g
return new A.bfy(new C.cn(null,x.A),new A.Nf(B.cA),C.a([],w),B.J,B.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),B.J,B.J,$,B.bu,0,C.a([],x.X),null,null)}}
A.bfy.prototype={
Z(){this.a0()
this.XQ()
this.kH()},
XQ(){var w,v,u,t,s,r,q,p,o=this,n=new C.f6()
n.dY(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.ag(),1.6)
w.push(new A.ach(t,n.ag()*3.141592653589793*2,(n.ag()-0.5)*0.5*t,25+n.ag()*20))}else{t=Math.pow(n.ag(),0.8)
s=n.aG(o.f)
r=n.ag()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.hd()?0:3.141592653589793
q=r+(n.ag()-0.5)*0.25}r=n.ag()
p=t<0.25?35+n.ag()*15:205+n.ag()*50
w.push(new A.ach(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cmL(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.dK_
k.cx=D.dK2
w=new C.f6()
w.dY(9)
v=k.cy
B.d.a8(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new A.ach(Math.pow(w.ag(),0.8)*0.7,w.ag()*3.141592653589793*2,0,320+w.ag()*30))
B.d.v(v,u)
u=x.g
s=C.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,C.J)(v),++q){p=v[q]
o=p.b
n=p.a
s.push(new C.v(Math.cos(o)*n,Math.sin(o)*n))}k.dx=s
s=C.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,C.J)(v),++q){p=v[q]
o=p.b
n=p.a+0.2
s.push(new C.v(-Math.sin(o)*0.55/Math.sqrt(n),Math.cos(o)*0.55/Math.sqrt(n)))}k.fr=s
v=C.a([],u)
for(s=k.ay,r=x.S,s=C.dc(s,0,C.dJ(900,"count",r),C.T(s).c),o=s.$ti,s=new C.bR(s,s.gG(0),o.k("bR<ai.E>")),o=o.k("ai.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new C.v(l*n,Math.sin(m)*n))}k.db=v
v=C.a([],u)
for(u=k.ay,u=C.dc(u,0,C.dJ(900,"count",r),C.T(u).c),r=u.$ti,u=new C.bR(u,u.gG(0),r.k("bR<ai.E>")),r=r.k("ai.E");u.C();){s=u.d
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
s=Math.max(0.25,t.gct())
r=t.eW(0,s).aP(0,0.9/(s*s))
w=p.fy.ap(0,r.aP(0,u))
p.fy=w
v=p.cx.aD(0,r.aP(0,u))
p.cx=v
w=p.fx.ap(0,w.aP(0,u))
p.fx=w
v=p.CW.ap(0,v.aP(0,u))
p.CW=v
q=new A.dLV(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aF(r,r,r,r,D.m2,r,r,r,new A.dLL(s,d),r,r,r,r,"Share",r)],q),o=C.b2(r,r,r,new A.bbh(s,r),B.as),n=B.w.j(0.5),m=C.m(14),l=C.G(B.bG,B.r,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.an(8,C.p(r,C.d(w,r,r,r,r,r,r,A4.a3J,r,r,r),B.h,r,r,new C.o(n,r,l,m,r,r,B.n),r,r,r,r,B.bT,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.cLK[v]
o=s.Q===u.a&&!s.ch
l.push(new A.dx(u.b,o,new A.dLM(s,u),r,B.fY,r))}l.push(new A.dx("Collide",s.ch,new A.dLN(s),B.wN,B.cd,r))
o=C.a([new A.eF(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=A.hp(B.fY,""+n,"Arms",6,2,new A.dLO(s),n)
l=s.r
B.d.v(o,C.a([n,A.hp(B.fY,B.k.ab(l,1),"Winding",6,0.8,new A.dLP(s),l)],q))}n=s.as
o.push(A.hp(B.fY,""+B.k.U(n*90)+"\xb0","Tilt",1,0.15,new A.dLQ(s),n))
n=s.ax
o.push(A.hp(B.fY,B.k.ab(n,1)+"x","Speed",4,0,new A.dLR(s),n))
n=s.x
l=s.z
w=s.y
t=w?B.lr:D.Em
o.push(new A.eF(C.a([new A.dx("Dark matter",n,new A.dLS(s),r,B.bE,r),new A.dx("You are here",l,new A.dLT(s),r,B.aM,r),new A.dx("Music",w,new A.dLU(s),t,B.fY,r)],q),r,r))
return A.je(B.fY,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.eo(new C.am(B.V,r,B.aX,B.q,m,r),s.d),"GALAXY",C.u(o,B.m,r,B.e,B.R,0,B.p))}}
A.bbh.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.a1()
w=C.U()
w.r=D.b70.gt(0)
a3.bp(new C.af(0,0,0+a1,0+a2),w)
v=new C.f6()
v.dY(3)
for(w=a3.a,u=0;u<90;++u){t=v.ag()
s=v.ag()
r=v.ag()
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=B.c.j(0.15+v.ag()*0.4).gt(0)
p=q.L()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new C.v(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=C.U()
t.sav(new C.bS(B.B,0.5,B.x,a0,0,C.a([B.aA.j(0.32),B.aA.j(0.12),B.K],x.O),D.bVe,a0).aB(0,C.c1(o,a2)))
a3.aw(o,a2,t)}m=new A.d1S(a1.as)
a2=n*0.3
t=C.U()
t.sav(new C.bS(B.B,0.5,B.x,a0,0,C.a([B.hC.j(0.85),B.b_.j(0.3),B.K],x.O),a0,a0).aB(0,C.c1(o,a2)))
a3.aw(o,a2,t)
if(!a1.ch){l=C.U()
for(a2=a1.ay,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.J)(a2),++k){j=a2[k]
s=j.a
i=a1.x?1/(0.25+s*0.9):1/Math.pow(s+0.18,1.5)*0.35
r=a1.at
q=Math.min(i,6)
h=j.b
g=m.$6(Math.cos(h)*s,Math.sin(h)*s,j.c,o,r*q*0.5,n)
q=j.d
r=B.k.J(q,360)
l.r=new G.mO(1,r,q>200?0.45:0.55,1).iD().j(0.35+(1-s)*0.5).gt(0)
s=s<0.3?1.3:1
p=l.L()
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
f=C.j0(a0,a0,a0,a0,D.emN,B.a5,B.cn,a0,B.eL,B.cm)
f.fD()
f.a5(a3,g.ap(0,new C.v(-f.b.c/2,12)))}}else{e=n*0.8
l=C.U()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.J)(a2),++k){d=a2[k]
l.r=D.b7Y.j(0.6).gt(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.L()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.J)(a2),++k){d=a2[k]
l.r=D.b3M.j(0.6).gt(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.L()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.a1()
w=C.U()
w.r=B.hC.gt(0)
a3.aw(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.U()
w.r=B.i6.gt(0)
a3.aw(a1,5,w)}},
ao(d){return!0}}
A.TN.prototype={
S(){return new A.bgp(new C.cn(null,x.A),new A.Nf(B.cA),$,B.bu,0,C.a([],x.X),null,null)}}
A.bgp.prototype={
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
gciy(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gc9m(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aF(q,q,q,q,D.m2,q,q,q,new A.eak(r,d),q,q,q,q,"Share",q)],p),n=C.C(new C.eo(C.b2(q,q,q,new A.bmv(r,q),B.fj),r.d),1)
if(r.f==="seasons")w=r.gciy()
else{w=r.gc9m()
v=B.k.ak(B.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.u(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,S.H7,B.L,q,q),B.h,q,q,q,q,q,q,q,F.acJ,q,q,1/0)],p),B.m,q,B.e,B.j,0,B.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?U.x0:B.iF
t=r.Q
s=t?B.lr:D.Em
s=C.a([new A.eF(C.a([new A.dx("Seasons",n==="seasons",new A.eal(r),B.xd,B.br,q),new A.dx("Moon phases",n==="moon",new A.eam(r),B.un,B.br,q),new A.dx(u,!1,new A.ean(r),v,B.br,q),new A.dx("Music",t,new A.eao(r),s,B.br,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=A.hp(B.br,D.cL5[B.o.J(B.k.bK(n*12),12)],"Month",1,0,new A.eap(r),n)
v=r.z
B.d.v(s,C.a([n,A.hp(B.br,B.k.ab(v,1)+"\xb0","Tilt",90,0,new A.eaq(r),v)],p))}else{p=r.w
s.push(A.hp(B.br,""+(B.k.bK(p*29.5)+1),"Day of month",1,0,new A.ear(r),p))}p=r.y
s.push(A.hp(B.br,B.k.ab(p,1)+"x","Speed",4,0.2,new A.eas(r),p))
return A.je(B.br,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.u(s,B.m,q,B.e,B.R,0,B.p))}}
A.bmv.prototype={
a5(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.a1(),b8=C.U()
b8.r=D.z4.gt(0)
b9.bp(new C.af(0,0,0+b5,0+b6),b8)
w=new C.f6()
w.dY(4)
for(b8=b9.a,v=0;v<70;++v){u=w.ag()
t=w.ag()
s=w.ag()
r=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
r.r=B.c.j(0.2+w.ag()*0.4).gt(0)
q=r.L()
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
t.sav(D.dRF.aB(0,C.c1(p,34)))
b9.aw(p,22,t)
m=s.r*2*3.141592653589793
l=p.ap(0,new C.v(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aD(0,l).eW(0,p.aD(0,l).gct())
J.bP(b8.save())
b8.translate(l.a,l.b)
s=C.U()
s.r=D.b5h.gt(0)
b9.aw(B.J,k,s)
J.bP(b8.save())
b7=new C.b0(b7.r,B.aw,b4,b4,C.a([],x.v))
b7.N(new C.kv(C.c1(B.J,k)))
b9.tj(0,b7)
b7=i.aP(0,k).aP(0,0.35)
s=k*1.1
b6=C.U()
b6.sav(D.dRM.aB(0,C.c1(B.J,s)))
b9.aw(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.v(s,b6)
b7=new C.v(-s,-b6).aP(0,k).aP(0,1.7)
b5=h.aP(0,k).aP(0,1.7)
t=C.U()
t.c=2
t.r=B.cN.gt(0)
b9.bU(b7,b5,t)
t=h.aP(0,k).aP(0,1.7)
b5=C.U()
b5.r=B.cN.gt(0)
b9.aw(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.j0(b4,b4,b4,b4,C.dr(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aKq,b5),B.a5,B.cn,b4,B.eL,B.cm)
f.fD()
f.a5(b9,l.ap(0,new C.v(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.U()
r.b=B.ak
r.c=1
r.r=B.be.gt(0)
b9.aw(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a0.r=B.aM.j(0.6).gt(0)
a0.c=2
q=a0.L()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=C.U()
r.sav(new C.bS(new C.d3(-0.5,0),1.1,B.x,b4,0,C.a([D.b1x,D.aaP],x.O),D.cDa,b4).aB(0,C.c1(p,k)))
b9.aw(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ap(0,new C.v(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.U()
r.r=D.b_i.gt(0)
b9.aw(a1,a2,r)
J.bP(b8.save())
b7=b7.r
r=x.v
d=new C.b0(b7,B.aw,b4,b4,C.a([],r))
d.N(new C.kv(C.c1(a1,a2)))
b9.tj(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.U()
a3.r=B.cf.gt(0)
b9.bp(new C.af(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aD(0,p).eW(0,a1.aD(0,p).gct())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=D.bVd[a5]
a7=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
a7.r=B.b3.j(0.45).gt(0)
a7.z=B.ji
q=a7.L()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.v(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.U()
b6.r=D.b_e.gt(0)
b9.aw(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bP(b8.save())
b6=new C.b0(b7,B.aw,b4,b4,C.a([],r))
b6.N(new C.kv(C.c1(a8,a9)))
b9.tj(0,b6)
s=s.w
b1=new C.b0(b7,B.aw,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.N(new C.bj(u,b5))
b6=b2>0
b1.ayL(new C.v(u,t+a9),b6,new C.b3(a9,a9))
if(b0<0.5)b6=b2<0
b1.ayL(new C.v(u,b5),b6,new C.b3(a9*Math.abs(1-2*b0),a9))
b6=C.U()
b6.r=B.cf.gt(0)
b9.b4(b1,b6)
b8.restore()
b8=C.U()
b8.b=B.ak
b8.c=1
b8.r=B.be.gt(0)
b9.aw(a8,a9,b8)
b3=C.j0(b4,b4,b4,b4,D.emO,B.a5,B.cn,b4,B.eL,B.cm)
b3.fD()
b3.a5(b9,a8.ap(0,new C.v(-b3.b.c/2,a9+6)))}},
ao(d){return!0}}
A.aHQ.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bsC.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.boF()}}
A.aId.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bsI.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bp3()}}
A.aIQ.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
A.bsW.prototype={
p(){var w,v,u
for(w=this.fc$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fb$
w===$&&C.c()
w.p()
this.bpH()}}
var z=a.updateTypes(["~()","Q(vd)","Q(a29)","Q(B6)","au<~>()","H(vd,H)","Q(B2)","Q(X3)","Q(uh)","P(P,vd)","Q(a0T)","Q(mW)","Q(Yz)","Q(a9K)","H(H)","Q(a8X)","Sh()","SE()","SU()","S9()","T7()","Tq()","Ts()","Si()","TL()","U_()","TM()","TJ()","U6()","Q(q0)","Ub()","Sj()","TD()","TI()","acm(Y,H)","abi(Y,H)","~(a0<@,@>)","H(B2,B2)","n(mU)","Q(acc)","Q(Zg)","Q(Bg)","Q(a9r)","Q(abm)","Q(a9a)","H(H,qb)","H(H,B6)","n(qb)","~(qb,al<n>,H)","qb?(B6)","Q(qb)","r(n,Z3)","Q(O_)","~(zk)","Q(a9h)","P(H?)","Uc()","P(NI)","Q(aay)","P(H)","SV()","~(b7)","Q(a7T)","Tl()","Se()","~(n,vd)","a5Y()","Ug()","T1()","Sf()","ST()","TE()","TQ()","Ua()","TC()","~(n)","cp(a8E)","Q(a8D)","T8()","TZ()","T9()","Sd()","T5()","TR()","TN()","TG()","Q(NI)","Q(Eg)"])
A.fck.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+29}
A.f4a.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+B.d.gI(d.e.split(". "))+"."},
$S:z+38}
A.f9K.prototype={
$1(d){var w
if(!this.a.ba0(d))w=Math.abs(d.at)>0.002||d.ax>0.05
else w=!1
return w},
$S:z+1}
A.f9L.prototype={
$1(d){return d.x},
$S:z+1}
A.fch.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
A.fci.prototype={
$1(d){var w
if(!this.a.ba0(d))w=d.ax>0.05||Math.abs(d.at)>0.002
else w=!1
return w},
$S:z+1}
A.fcj.prototype={
$2(d,e){var w=Math.abs(e.at)
return w>d?w:d},
$S:z+9}
A.dUB.prototype={
$0(){return this.a.ax=!0},
$S:0}
A.dUC.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.S(this.b,this.c))},
$S:0}
A.dUD.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=B.d.gcV(v).Q
v.toString
w.lD(v,B.dU,B.ic)}},
$S:8}
A.dUO.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
B.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
A.dUP.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
A.dUK.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
A.dUI.prototype={
$2(d,e){var w=this.a
w.r.push(C.cV(C.dB(0,0,0,d,0,0),new A.dUJ(w,this.b,e)))},
$S:1795}
A.dUJ.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
A.dUL.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.d.agI(0,u[1],u[2],u[3])
u[4].bD(0,new A.dUG(t))
v.e.m(0,t.a,0)
w.d.m(0,u[0],t)
A.e1(700+w.e*120,"",80,0,0.25,"square")
v.n(new A.dUH(w.a,v,w.f,w.r))},
$S:0}
A.dUG.prototype={
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
A.dUH.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=B.o.D(B.k.bK(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
A.dUM.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.d.azs(t,u[1],s,u[3])
A.e1(1500,"",45,0,0.25,"tri")
v=w.b
v.n(new A.dUF(w.a,v,w.e,w.f))},
$S:0}
A.dUF.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=B.o.D(B.k.bK(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
A.dUN.prototype={
$0(){A.e1(300,"",360,-1.2,0.3,"square")
var w=this.a
w.n(new A.dUE(w,this.b))},
$S:0}
A.dUE.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
A.dUS.prototype={
$0(){var w=this.a
return w.n(new A.dUR(w))},
$S:0}
A.dUR.prototype={
$0(){return this.a.at=!0},
$S:0}
A.dUT.prototype={
$0(){var w=this.a
return w.n(new A.dUQ(w))},
$S:0}
A.dUQ.prototype={
$0(){return this.a.at=!1},
$S:0}
A.dUU.prototype={
$0(){var w=this.a
w.f.saR(0,this.b)
w.LP()},
$S:0}
A.dUV.prototype={
$0(){return this.a.W1(this.b)},
$S:0}
A.dUW.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.LP():w.aR5()},
$S:2}
A.dUX.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.LP():w.aR5()},
$S:0}
A.e8Z.prototype={
$2(d,e){return d+e},
$S:1796}
A.e9i.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.e9h(w,d))},
$S:131}
A.e9h.prototype={
$0(){var w=C.aQ(J.q(this.b,"unlocked"))
w=w==null?null:B.k.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
A.e9j.prototype={
$0(){},
$S:0}
A.e9k.prototype={
$0(){},
$S:0}
A.e90.prototype={
$0(){return this.a.n(new A.e9_(this.b,this.c))},
$S:0}
A.e9_.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.e8Q.prototype={
$1(d){return this.a.cx===d},
$S:60}
A.e8R.prototype={
$1(d){return this.a.cx=d},
$S:27}
A.e8S.prototype={
$1(d){return this.a.cy===d},
$S:60}
A.e8T.prototype={
$1(d){return this.a.cy=d},
$S:27}
A.e8U.prototype={
$1(d){return this.a.db===d},
$S:60}
A.e8V.prototype={
$1(d){return this.a.db=d},
$S:27}
A.e8W.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:60}
A.e8X.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.H(0,d)},
$S:27}
A.e8Y.prototype={
$0(){var w=this.a
return w.n(w.gasR())},
$S:0}
A.e8O.prototype={
$1(d){return this.a.$1(!0)},
$S:82}
A.e8P.prototype={
$1(d){return this.a.$1(!1)},
$S:152}
A.e8N.prototype={
$1(d){return this.a.$1(!1)},
$S:207}
A.e9b.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ap(e.b,e.d)
o.ch=n
n=C.b2(p,p,p,new A.bcX(o,p),n)
w=this.b
v=A.bvh("WORLD",w.a,w.c)
u=A.bvh("GRAVITY",C.t(w.b)+" m/s\xb2",B.c)
t=o.x
s=B.k.U(t*100)
t=t<0.25?B.cN:B.bt
t=A.bvh("FUEL",""+s+"%",t)
s=o.r.b
r=B.k.U(s*100)
s=s>D.AC[o.db].d?B.cN:B.c
q=x.p
s=C.a([v,u,t,A.bvh("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(A.bvh("HEIGHT",""+B.k.U(B.k.D(0.86-o.f.b,0,1)*1000)+" m",B.c))
n=C.a([n,C.an(p,C.A(s,B.m,p,B.hu,B.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bxb(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.qq[w].a+".":"You landed on every world!"
v=C.a([new A.ff(B.m_,"Again",new A.e96(o),B.c,p),new A.ff(B.wO,"Rebuild",new A.e97(o),B.aM,p)],q)
if(o.d+1<7)v.push(new A.ff(B.jh,"Next world",new A.e98(o),B.bt,p))
n.push(A.fYy("Perfect landing!",w,B.bt,v))}if(o.as==="crashed")n.push(A.fYy("Crash!",o.at,B.cN,C.a([new A.ff(B.m_,"Try again",new A.e99(o),B.bt,p),new A.ff(B.wO,"Rebuild",new A.e9a(o),B.aM,p)],q)))
return new C.am(B.V,p,B.aX,B.q,n,p)},
$S:61}
A.e96.prototype={
$0(){var w=this.a
return w.n(w.gasR())},
$S:0}
A.e97.prototype={
$0(){var w=this.a
return w.n(new A.e93(w))},
$S:0}
A.e93.prototype={
$0(){return this.a.as="ready"},
$S:0}
A.e98.prototype={
$0(){var w=this.a
return w.n(new A.e92(w))},
$S:0}
A.e92.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
A.e99.prototype={
$0(){var w=this.a
return w.n(w.gasR())},
$S:0}
A.e9a.prototype={
$0(){var w=this.a
return w.n(new A.e91(w))},
$S:0}
A.e91.prototype={
$0(){return this.a.as="ready"},
$S:0}
A.e9c.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.n(new A.e95(v,w))},
$S:0}
A.e95.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
A.e9d.prototype={
$1(d){return this.a.y=d},
$S:9}
A.e9e.prototype={
$1(d){return this.a.Q=d},
$S:9}
A.e9f.prototype={
$1(d){return this.a.z=d},
$S:9}
A.e9g.prototype={
$0(){var w=this.a
return w.n(new A.e94(w))},
$S:0}
A.e94.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
A.dws.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.fU_
if(q==null)q=$.fU_=A.cye()
w=3
return C.b(C.iz(C.a([q,$.tr().bag("assets/data/three.min.js")],x.aJ),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.k5(0,C.cJ(J.q(s,1)))
q.n(new A.dwr(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:52}
A.dwr.prototype={
$0(){return this.a.d=x.E.a(J.q(this.b,0))},
$S:0}
A.dw4.prototype={
$0(){return this.a.bNW(C.aR(J.q(this.b,"group")))},
$S:0}
A.dw5.prototype={
$1(d){return B.a.aT(B.o.fE(B.o.D(B.k.U(d*255),0,255),16),2,"0")},
$S:362}
A.dwt.prototype={
$0(){return A.a5X("kick",0.25)},
$S:0}
A.dw6.prototype={
$0(){return this.a.cx=this.b},
$S:0}
A.dw7.prototype={
$1(d){return d.a===this.a},
$S:z+10}
A.dw8.prototype={
$0(){return A.a5X("kick",0.5)},
$S:0}
A.dw9.prototype={
$0(){return A.e1(1300+this.a.R8.aG(900),"",40,0,0.2,"square")},
$S:0}
A.dwb.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.ch
if(w===2)w=1
else w=w===1?0:2
u.ch=w}else{w=this.a
v=w.ay
if(v.q(0,u))v.W(0,u)
else{v.H(0,u)
if(w.ch===2)w.ch=1}if(v.a===0&&w.ch===0)w.ch=2
u=w}if(u.cx!=null&&!B.d.be(u.d.e,new A.dwa(u)))u.cx=null
u.go=0},
$S:0}
A.dwa.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.auk(d)},
$S:z+10}
A.dw1.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
A.dw2.prototype={
$0(){var w=this.a
return w.n(w.gbY0())},
$S:0}
A.dw3.prototype={
$0(){return this.a.aep(null)},
$S:0}
A.dwi.prototype={
$0(){var w=this.a.as
return w==null?null:w.eK(0,C.D(["t","shot"],x.N,x.z))},
$S:0}
A.dwj.prototype={
$0(){return this.a.cqN(this.b.a)},
$S:0}
A.dwk.prototype={
$0(){return this.a.aep(this.b)},
$S:0}
A.dwl.prototype={
$1(d){var w=this.a
return w.n(new A.dwh(w,d))},
$S:6}
A.dwh.prototype={
$0(){return this.a.k3=this.b},
$S:0}
A.dwm.prototype={
$0(){var w=this.a
return w.n(new A.dwg(w,this.b))},
$S:0}
A.dwg.prototype={
$0(){return this.a.CW=this.b},
$S:0}
A.dwn.prototype={
$0(){var w=this.a
return w.n(new A.dwf(w))},
$S:0}
A.dwf.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
A.dwo.prototype={
$0(){var w=this.a
return w.n(new A.dwe(w))},
$S:0}
A.dwe.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eK(0,C.D(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.I7},
$S:0}
A.dwp.prototype={
$0(){var w=this.a
return w.n(new A.dwd(w))},
$S:0}
A.dwd.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aTA()
else w.p2=null},
$S:0}
A.dwq.prototype={
$0(){var w=this.a
return w.n(new A.dwc(w))},
$S:0}
A.dwc.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
A.bVM.prototype={
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
$S:285}
A.bVN.prototype={
$1(d){var w=new C.r6([],[]).oP(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:478}
A.eZN.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)},
$S:218}
A.eZO.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)||w.h(d,1)},
$S:218}
A.eZP.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)!==w.h(d,1)},
$S:218}
A.eZT.prototype={
$1(d){return!J.q(d,0)},
$S:218}
A.eZU.prototype={
$1(d){var w=J.a6(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:218}
A.eZV.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:218}
A.dyD.prototype={
$1(d){return this.a.apD(0)},
$S:8}
A.dyh.prototype={
$0(){var w=this.b
return this.a.cx=new C.I(w,C.hDC(),C.T(w).k("I<1,H>")).fF(0)},
$S:0}
A.dyk.prototype={
$1(d){return""+d},
$S:83}
A.dyE.prototype={
$1(d){return d.b==="buzzer"},
$S:z+6}
A.dyf.prototype={
$1(d){return this.a.apD(this.b)},
$S:8}
A.dyg.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.ata(0)
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
p=a1.at9(0,a0,a1.lu(0.82,0.25),0)
o=a1.at9(0,a0,a1.lu(0.82,0.65),0)
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
A.dyl.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.ata(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.m(0,p,new A.B2(p,"switch",new C.v(0.14*q.a,r*q.b),0))}o.m1(0,w.e,o.lu(0.86,0.5))},
$S:0}
A.dya.prototype={
$1(d){return d.b==="switch"},
$S:z+6}
A.dyb.prototype={
$2(d,e){return B.k.aI(d.c.b,e.c.b)},
$S:z+37}
A.dyc.prototype={
$1(d){return d.b===this.a.e},
$S:z+6}
A.dyd.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
A.dye.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.a9Y(this.c)
if(v.ax)A.As("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+B.d.gI(w)
v.CW=!1
if(v.ax)A.e1(140,"",250,0,0.3,"square")}},
$S:0}
A.dym.prototype={
$0(){},
$S:0}
A.dyn.prototype={
$0(){return B.d.cu(this.a.e,this.b)},
$S:0}
A.dyo.prototype={
$0(){return this.a.cy=null},
$S:0}
A.dyj.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
B.d.bl(w.e,new A.dyi(v))
w.cy=null},
$S:0}
A.dyi.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
A.dy9.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.m1(0,this.b,new C.v(w.x.a*(0.3+v.ag()*0.4),w.x.b*(0.2+v.ag()*0.6))).a},
$S:0}
A.dyx.prototype={
$0(){var w=this.a
return w.n(new A.dyw(w))},
$S:0}
A.dyw.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
A.dyy.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ap(e.b,e.d)
v.x=u
return C.aJ(B.c5,C.jy(C.b2(w,w,w,new A.b79(v,w),u),B.q,w),B.z,!1,w,w,w,w,w,w,w,w,new A.dyr(v),w,w,w,new A.dys(v),new A.dyt(v),new A.dyu(v),w,w,w,w,w,w,w,w,w,w,new A.dyv(v),w,w,w,!1,B.af)},
$S:34}
A.dyv.prototype={
$1(d){return this.a.bZ_(d.b)},
$S:53}
A.dyt.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.c6a(u)
if(t!=null){v.as=t
v.at=u
return}w=v.atR(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aD(0,u)}},
$S:40}
A.dyu.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.v(B.k.D(w.a+u.Q.a,46,u.x.a-46),B.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
A.dys.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bRt(t.at)
if(w!=null&&w.a!==t.as){v=t.e
B.d.bl(v,new A.dyp(w))
u=t.as
u.toString
v.push(new A.mW(u,w.a,w.b))
C.jC()}}t.z=t.as=null},
$S:36}
A.dyp.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
A.dyr.prototype={
$1(d){return this.a.as9(d.b)},
$S:311}
A.dyz.prototype={
$0(){return this.a.btd(this.b.a)},
$S:0}
A.dyA.prototype={
$0(){return this.a.apD(this.b.a)},
$S:0}
A.dyB.prototype={
$0(){var w=this.a
return w.n(new A.dyq(w))},
$S:0}
A.dyq.prototype={
$0(){var w=this.a
w.ata(0)
w.ay=null},
$S:0}
A.dyC.prototype={
$0(){return this.a.cmI(this.b)},
$S:0}
A.cF0.prototype={
$0(){var w=this,v=null,u=C.j0(v,v,v,v,C.dr(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),B.a5,B.cn,v,B.eL,B.cm)
u.fD()
return u},
$S:328}
A.dDQ.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.dDP.prototype={
$0(){return this.a.d=null},
$S:0}
A.dDS.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.bTe()},
$S:118}
A.dDR.prototype={
$0(){return C.a7(this.a,!1).oZ()},
$S:0}
A.f_a.prototype={
$0(){return D.dFp},
$S:z+56}
A.f_b.prototype={
$0(){return D.ddI},
$S:z+60}
A.f_c.prototype={
$0(){return D.dgZ},
$S:z+63}
A.f_n.prototype={
$0(){return D.daC},
$S:z+64}
A.f_q.prototype={
$0(){return D.dEZ},
$S:z+66}
A.f_r.prototype={
$0(){return D.dk6},
$S:z+85}
A.f_s.prototype={
$0(){return D.ddE},
$S:z+17}
A.f_t.prototype={
$0(){return D.ddH},
$S:z+18}
A.f_u.prototype={
$0(){return D.d6N},
$S:z+19}
A.f_v.prototype={
$0(){return D.dgb},
$S:z+20}
A.f_w.prototype={
$0(){return D.dhP},
$S:z+21}
A.f_d.prototype={
$0(){return D.dhR},
$S:z+22}
A.f_e.prototype={
$0(){return D.dcR},
$S:z+23}
A.f_f.prototype={
$0(){return D.dmQ},
$S:z+24}
A.f_g.prototype={
$0(){return D.dEG},
$S:z+25}
A.f_h.prototype={
$0(){return D.dCJ},
$S:z+26}
A.f_i.prototype={
$0(){return D.dlv},
$S:z+27}
A.f_j.prototype={
$0(){return D.dEO},
$S:z+28}
A.f_k.prototype={
$0(){return D.dcQ},
$S:z+16}
A.f_l.prototype={
$0(){return D.dEY},
$S:z+30}
A.f_m.prototype={
$0(){return D.dcS},
$S:z+31}
A.f_o.prototype={
$0(){return D.di6},
$S:z+32}
A.f_p.prototype={
$0(){return D.dlu},
$S:z+33}
A.eGQ.prototype={
$2(d,e){return new A.acm($.bzD()[e],new A.eGP(e,this.a),null)},
$S:z+34}
A.eGP.prototype={
$0(){var w=this.a,v=D.ayd.h(0,$.bzD()[w].a)
$.c9x=v==null?"music":v
C.a7(this.b,!1).cr(C.eH(new A.eGN(w),!1,null,x.H))},
$S:0}
A.eGN.prototype={
$1(d){return $.bzD()[this.a].e.$0()},
$S:43}
A.eGR.prototype={
$2(d,e){return new A.abi(D.ara[e],new A.eGO(this.a,e),null)},
$S:z+35}
A.eGO.prototype={
$0(){return this.a.d.$1(D.ara[this.b])},
$S:0}
A.eGw.prototype={
$0(){return this.a.as=!0},
$S:0}
A.eGv.prototype={
$0(){return this.a.as=!1},
$S:0}
A.eGu.prototype={
$1(d){var w=this
return new C.ed(new A.eGt(w.a,w.b,w.c,w.d),null)},
$S:21}
A.eGt.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aG(a2,d,a0).w
a0=C.aG(a2,d,a0).w
w=x.p
v=C.a([D.eGL,B.au,D.eMH,B.aa],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.b3(12,12)
m=new C.b3(12,12)
m=C.a([new C.bF(1,B.bn,C.aK(d,B.U,!1,d,!0,B.q,d,C.aL(),r[p],d,d,d,d,d,2,new C.e0(d,d,d,d,d,d,d,d,d,d,"Title",d,H.BL,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,B.c.j(0.06),d,d,d,d,d,d,d,new C.b1(4,new C.bv(n,n,n,n),B.W),!0,d,d,d,d),B.z,!0,d,!0,d,!1,d,B.ae,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,B.ir,!0,B.a5,d,B.am,d,d,d,d),d),B.ab,new C.bF(2,B.bn,C.aK(d,B.U,!1,d,!0,B.q,d,C.aL(),q[p],d,d,d,d,d,2,new C.e0(d,d,d,d,d,d,d,d,d,d,"Small line",d,H.BL,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,B.c.j(0.06),d,d,d,d,d,d,d,new C.b1(4,new C.bv(m,m,m,m),B.W),!0,d,d,d,d),B.z,!0,d,!0,d,!1,d,B.ae,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,B.ir,!0,B.a5,d,B.am,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.cYU[l]
j=new C.b3(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.z(t.a.c.d,s)
t.w=i}h=B.d.gI(i).j(0.3)}else h=B.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.z(t.a.c.d,s)
t.w=i}g=B.d.gI(i)}else g=B.bG
f=new C.ax(g,u[p].A(0,k)?1.8:1,B.r,-1)
n.push(C.aJ(d,C.p(d,C.V(k,u[p].A(0,k)?B.c:B.aQ,d,d,d,22),B.h,d,d,new C.o(h,d,new C.c2(f,f,f,f),new C.bv(j,j,j,j),d,d,B.n),d,d,d,B.hd,d,d,d,42),B.z,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.eGr(a3,p,u,k),d,d,d,d,d,d,!1,B.af))}B.d.v(v,C.a([new C.w("SLAB "+o,d,D.exa,d,d,d,d,d,d,d,d,d),B.ar,new C.cC(B.aY,B.e,B.j,B.m,d,B.p,d,0,m,d),B.P,new C.a3(d,44,C.cL(n,d,d,d,d,B.aY,!1),d),B.ay],w))}v.push(C.bJ(B.BS,new A.eGs(t,r,q,u,a2),d))
return new C.B(new C.L(0,0,0,a1.f.d),C.br(!0,new C.d2(new C.aV(0,1/0,0,a0.a.b*0.86),C.cL(v,d,A_.DA,d,d,B.ah,!0),d),!0,!1,B.ag,!0,!0),d)},
$S:105}
A.eGr.prototype={
$0(){var w=this
return w.a.$1(new A.eGq(w.b,w.c,w.d))},
$S:0}
A.eGq.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
A.eGs.prototype={
$0(){var w=this,v=w.a
v.n(new A.eGp(v,w.b,w.c,w.d))
C.a7(w.e,!1).K(null)},
$S:0}
A.eGp.prototype={
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
A.eGE.prototype={
$0(){var w=this.a
return w.n(new A.eGD(w))},
$S:0}
A.eGD.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
A.eGF.prototype={
$0(){return A.qj(this.b,this.a.f,"scene")},
$S:0}
A.eGG.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(B.d.gI(u),B.d.gai(u),0.4)
u.toString
w=this.a.gXe().x
w===$&&C.c()
return C.bQ(v,new C.o(v,v,v,v,v,new C.bS(D.aNR,0.9,B.x,v,0,C.a([u.j(0.06+0.03*w),B.bV],x.O),v,v),B.n),B.b7)},
$S:282}
A.eGH.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.as(C.eY(B.B,C.c4(new C.h3(C.a([u.gt6(),u.gXe()],x.dS)),new A.eGC(u,this.b,v),w),B.h,B.e8),w,w,w)},
$S:246}
A.eGC.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gt6().x
r===$&&C.c()
w=r<0.9?1:1-A.bmN(r,0.9,0.98)
v=s.gXe().x
v===$&&C.c()
u=B.dF.ar(0,v)
switch(s.gatb().a){case 0:s=s.bsr(t.b,r,u,t.c)
break
case 1:s=s.bIh(t.b,r,u,t.c)
break
case 2:s=s.cre(t.b,r,u,t.c)
break
case 3:s=s.bvh(t.b,r,u,t.c)
break
case 4:s=s.byo(t.b,r,u,t.c)
break
case 5:s=s.bxC(t.b,r,u,t.c)
break
default:s=null}return C.d4(s,w)},
$S:211}
A.eGI.prototype={
$2(d,e){var w=C.ash(this.b),v=this.c.d,u=C.aq(B.d.gI(v),B.d.gai(v),0.4)
u.toString
v=C.aq(B.d.gI(v),B.d.gai(v),0.4)
v.toString
v=w.czm(u,B.bG,v,3.5)
u=this.a
w=u.gt6().x
w===$&&C.c()
return C.a7F(C.m8(null,null,null,1,0,new A.eGB(u),B.k.D(w,0,1)),v)},
$S:1800}
A.eGB.prototype={
$1(d){var w=this.a
w.gt6().st(0,d)
if(w.as)w.n(new A.eGx(w))},
$S:6}
A.eGx.prototype={
$0(){return this.a.as=!1},
$S:0}
A.eGJ.prototype={
$0(){var w=this.a
w.gt6().st(0,0)
w.ad8()},
$S:0}
A.eGK.prototype={
$1(d){var w=this.a
w.n(new A.eGA(w,d))
if(w.as)w.ad8()},
$S:6}
A.eGA.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.eGL.prototype={
$0(){var w=this.a
w.n(new A.eGz(w,this.b))
w.gt6().st(0,0)
if(w.as)w.ad8()},
$S:0}
A.eGz.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
A.eGM.prototype={
$0(){var w=this.a
return w.n(new A.eGy(w,this.b))},
$S:0}
A.eGy.prototype={
$0(){var w=C.z(this.b,x.G)
return this.a.w=w},
$S:0}
A.eGn.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:1801}
A.eGo.prototype={
$1(d){return d.b},
$S:1802}
A.d8q.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+3}
A.d8r.prototype={
$1(d){return d.b===this.a},
$S:z+7}
A.d8n.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+3}
A.d8o.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.d8p.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.d8s.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+7}
A.d8t.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+7}
A.d8u.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.d8v.prototype={
$1(d){return d.d<this.a.ax},
$S:z+39}
A.d8w.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+40}
A.d8x.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+41}
A.d8y.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+42}
A.d8z.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+43}
A.d8A.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+44}
A.e8j.prototype={
$0(){return this.a.ax=!0},
$S:0}
A.e88.prototype={
$0(){return this.a.ax=!1},
$S:0}
A.e8a.prototype={
$2(d,e){return d+e.d*7+B.o.J(B.a.gV(e.b),97)},
$S:z+45}
A.e8b.prototype={
$2(d,e){return d+B.o.J(B.a.gV(e.a),31)+B.o.J(B.a.gV(e.b),17)},
$S:z+46}
A.e8e.prototype={
$1(d){var w=D.m6.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[B.o.J(d.d,u)]+")":t},
$S:z+47}
A.e8f.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.T(q),o=x.dg,n=C.z(new C.e2(new C.cQ(new C.a5(q,new A.e8g(d),p.k("a5<1>")),new A.e8h(r),p.k("cQ<1,qb?>")),o),o.k("F.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(B.d.aF(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.J)(n),++v){u=n[v]
if(w.length>=6)return
t=C.z(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+48}
A.e8g.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
A.e8h.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+49}
A.e8c.prototype={
$1(d){return D.m6.h(0,d.b).c===D.vv},
$S:z+50}
A.e8d.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
A.e8J.prototype={
$1(d){var w=this.a,v=d.a,u=B.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.a56(0,u)
w.cLd(B.o.ak(v,1000))},
$S:8}
A.e8i.prototype={
$0(){},
$S:0}
A.e84.prototype={
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
A.e8l.prototype={
$1(d){var w=null,v=this.a.b
return C.br(!0,C.u(C.a([B.P,C.dK(!1,w,w,w,!0,w,w,w,!0,w,C.V(D.m6.h(0,v).b,D.m6.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.eWX,w,C.d(D.m6.h(0,v).a,w,w,w,w,w,w,B.h7,w,w,w),w,w,w),C.dK(!1,w,w,w,!0,w,w,w,!0,w,R.aig,w,w,w,w,new A.e8k(d),!1,w,w,w,w,w,w,w,D.ePi,w,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),!0,!1,B.ag,!0,!0)},
$S:33}
A.e8k.prototype={
$0(){C.a7(this.a,!1).K(!0)
return null},
$S:0}
A.e8n.prototype={
$1(d){var w,v,u=null,t=C.aG(d,u,x.m).w,s=C.a([D.dM9],x.p)
for(w=0;w<6;++w){v=D.ars[w]
s.push(C.dK(!1,u,u,u,!0,u,u,u,!0,u,D.bBQ,u,u,u,u,new A.e8m(d,v),!1,u,u,u,u,u,new C.w(v.b,u,B.l8,u,u,u,u,u,u,u,u,u),u,new C.w(v.a,u,B.h7,u,u,u,u,u,u,u,u,u),u,u,u))}return C.br(!0,new C.d2(new C.aV(0,1/0,0,t.a.b*0.7),C.cL(s,u,D.bjA,u,u,B.ah,!0),u),!0,!1,B.ag,!0,!0)},
$S:33}
A.e8m.prototype={
$0(){C.a7(this.a,!1).K(this.b)
return null},
$S:0}
A.e87.prototype={
$1(d){var w=null
return C.ep(C.a([C.bG(!1,B.de,w,w,!0,w,w,new A.e85(d),w,w),C.bG(!1,B.BR,w,w,!0,w,w,new A.e86(d),w,w)],x.p),w,w,D.rq,D.eMR,w,w,w,w,D.ePz,w)},
$S:20}
A.e85.prototype={
$0(){C.a7(this.a,!1).K(!1)
return null},
$S:0}
A.e86.prototype={
$0(){C.a7(this.a,!1).K(!0)
return null},
$S:0}
A.e8H.prototype={
$0(){var w=this.a
return w.n(new A.e8G(w))},
$S:0}
A.e8G.prototype={
$0(){return this.a.r=!1},
$S:0}
A.e8I.prototype={
$2(d,e){var w,v,u,t=null,s=new C.ap(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.lR(new A.e8x(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.aX5:t
v=C.a([C.b2(u,t,t,new A.bcV(w,v,new A.e8y(r),new A.e8z(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.an(t,C.e8(C.c4(w,new A.e8A(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bA_())
return C.aJ(B.c5,C.jy(new C.am(B.V,t,B.aX,B.q,v,t),B.q,t),B.z,!1,t,t,t,t,t,t,t,t,new A.e8B(r),t,r.gc7q(),t,new A.e8C(r),new A.e8D(r),new A.e8E(r),t,t,t,t,t,t,t,t,t,t,new A.e8F(r),t,t,t,!1,B.af)},
$S:34}
A.e8x.prototype={
$0(){return this.a.a93(this.b)},
$S:0}
A.e8F.prototype={
$1(d){return this.a.cp7(d.b)},
$S:53}
A.e8D.prototype={
$1(d){return this.a.c7r(d.b)},
$S:40}
A.e8E.prototype={
$1(d){return this.a.c7s(d.b)},
$S:18}
A.e8C.prototype={
$1(d){return this.a.aWs()},
$S:36}
A.e8B.prototype={
$1(d){return this.a.a9K(d.b)},
$S:311}
A.e8y.prototype={
$0(){return this.a.z},
$S:645}
A.e8z.prototype={
$0(){return this.a.Q},
$S:708}
A.e8A.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bEd()
if(p.length===0)return B.bF
w=B.w.j(0.55)
v=C.m(14)
u=C.G(B.bG,B.r,1)
t=C.a([D.eKy,B.d5],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.J)(p),++r)t.push(new C.w(p[r],q,D.ew_,q,q,q,q,B.Z,q,2,q,q))
return C.p(q,C.u(t,B.F,q,B.e,B.R,0,B.p),B.h,q,q,new C.o(w,q,u,v,q,q,B.n),q,q,q,q,B.h1,q,q,q)},
$S:59}
A.e89.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.m(12),t=C.G(e.j(0.6),B.r,1),s=x.p
return new C.B(B.dZ,C.A(C.a([C.p(w,C.V(d,e,w,w,w,21),B.h,w,w,new C.o(v,w,t,u,w,w,B.n),w,38,w,w,w,w,w,38),B.ba,C.C(C.u(C.a([C.d(f,w,w,w,w,w,w,S.H7,w,w,w),B.by,C.d(g,w,w,w,w,w,w,D.aJS,w,w,w)],s),B.F,w,B.e,B.j,0,B.p),1)],s),B.F,w,B.e,B.j,0,w,w),w)},
$S:1804}
A.e8t.prototype={
$0(){var w=this.a.c
w.toString
return C.a7(w,!1).oZ()},
$S:0}
A.e8u.prototype={
$0(){var w=this.a
return w.n(new A.e8s(w))},
$S:0}
A.e8s.prototype={
$0(){return this.a.ax=!0},
$S:0}
A.e8v.prototype={
$0(){var w=this.a
return w.n(new A.e8r(w))},
$S:0}
A.e8r.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
A.e8w.prototype={
$0(){var w=this.a
return w.n(new A.e8q(w))},
$S:0}
A.e8q.prototype={
$0(){return this.a.r=!0},
$S:0}
A.e8p.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.m6.gdH(D.m6),w=w.gaf(w);w.C();){v=w.gT(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,B.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,B.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.J)(p),++r)u.push(s.ck9(p[r]))
return new C.B(E.abY,C.u(C.a([new C.B(P.adC,w,q),C.A(u,B.m,q,B.e,B.j,0,q,q)],v),B.F,q,B.e,B.j,0,B.p),q)},
$S:z+51}
A.e8o.prototype={
$0(){return this.a.bZ4(this.b)},
$S:0}
A.d8m.prototype={
$0(){var w=this,v=null,u=C.j0(v,v,v,v,C.dr(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),B.a5,B.cn,v,B.eL,B.cm)
u.fD()
return u},
$S:328}
A.eiu.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=B.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=B.o.ak(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.v(s.a+q*n,s.b+r*n)
t.b=new C.v(q*v,r*v)}B.d.bl(o,new A.eis(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.n(new A.eit())},
$S:8}
A.eis.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+52}
A.eit.prototype={
$0(){},
$S:0}
A.ei5.prototype={
$0(){},
$S:0}
A.ei4.prototype={
$0(){},
$S:0}
A.eie.prototype={
$0(){return A.qj(this.b,this.a.d,"spark-painter")},
$S:0}
A.eig.prototype={
$1(d){return this.a.aTY(0,d.b)},
$S:40}
A.eik.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||B.d.gai(w).aD(0,u).gct()>2.5}else w=!1
if(w)t.a.push(u)
v.aNs(u)
v.c0Y(u)
return null},
$S:18}
A.eif.prototype={
$1(d){return this.a.aTX()},
$S:36}
A.eil.prototype={
$1(d){return this.a.aTY(0,d.b)},
$S:23}
A.eim.prototype={
$1(d){return this.a.aTX()},
$S:53}
A.ein.prototype={
$0(){var w=this.a
return w.n(new A.eid(w,this.b))},
$S:0}
A.eid.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
A.eio.prototype={
$0(){var w=this.a
return w.n(new A.eic(w))},
$S:0}
A.eic.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.eip.prototype={
$0(){var w=this.a
return w.n(new A.eib(w,this.b))},
$S:0}
A.eib.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.eiq.prototype={
$1(d){var w=this.a
return w.n(new A.eia(w,d))},
$S:6}
A.eia.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.eir.prototype={
$0(){var w=this.a
return w.n(new A.ei9(w))},
$S:0}
A.ei9.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
A.eih.prototype={
$0(){var w=this.a
return w.n(new A.ei8(w))},
$S:0}
A.ei8.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
A.eii.prototype={
$0(){var w=this.a
return w.n(new A.ei7(w))},
$S:0}
A.ei7.prototype={
$0(){var w=this.a
B.d.a8(w.e)
B.d.a8(w.f)},
$S:0}
A.eij.prototype={
$0(){var w=this.a
return w.n(new A.ei6(w,this.b))},
$S:0}
A.ei6.prototype={
$0(){return this.a.at=this.b},
$S:0}
A.ep3.prototype={
$0(){return A.qj(this.b,this.a.d,"title")},
$S:0}
A.ep4.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gHl().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.bTn(v[t],t,s,q,u))
return new C.B(B.fv,C.cb(B.fB,w,B.qV,0,0),null)},
$S:681}
A.ep5.prototype={
$1(d){return this.a.n(new A.ep2())},
$S:2}
A.ep2.prototype={
$0(){},
$S:0}
A.ep6.prototype={
$0(){var w=this.a
w.n(new A.ep1(w,this.b))
w=w.gHl()
w.ic(0,0)
w.cF(0)},
$S:0}
A.ep1.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
A.ep7.prototype={
$0(){var w=this.a
return w.n(new A.ep0(w,this.b))},
$S:0}
A.ep0.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.ep8.prototype={
$0(){var w=this.a
return w.n(new A.ep_(w))},
$S:0}
A.ep_.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
A.ep9.prototype={
$0(){var w=this.a
return w.n(new A.eoZ(w,this.b))},
$S:0}
A.eoZ.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.epa.prototype={
$0(){var w=this.a.gHl()
w.ic(0,0)
w.cF(0)},
$S:0}
A.epb.prototype={
$1(d){var w=this.a
return w.n(new A.eoY(w,d))},
$S:6}
A.eoY.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.e5j.prototype={
$1(d){return d.a.aD(0,this.a).gct()<16},
$S:z+12}
A.e5k.prototype={
$1(d){var w=this.b
return d.a.aD(0,w).gct()<16||d.a.aD(0,w).gct()>this.a.r.gajp()*2.2},
$S:z+12}
A.e57.prototype={
$0(){return A.qj(this.b,this.a.d,"orbits")},
$S:0}
A.e58.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.ap(e.b,e.d)
q.r=p
w=q.gaaT()
v=q.w
u=q.as
t=q.at
s=u==null?B.a_e:q.caY(u,q.gaRy())
return new C.eo(C.aJ(B.c5,C.b2(r,r,r,new A.bhc(q.e,w,v,u,t,s,r),p),B.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,new A.e54(q),new A.e55(q),new A.e56(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,B.af),q.d)},
$S:197}
A.e55.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:40}
A.e56.prototype={
$1(d){return this.a.at=d.b},
$S:18}
A.e54.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aD(0,w).gct()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new A.Yz(u,v.gaRy(),v.Q,v.aXU(),C.a([],x.g)))
C.jC()
if(v.ax)A.e1(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:36}
A.e59.prototype={
$1(d){var w=this.a
return w.n(new A.e53(w,d))},
$S:6}
A.e53.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.e5b.prototype={
$1(d){var w=this.a
return w.n(new A.e52(w,d))},
$S:6}
A.e52.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.e5c.prototype={
$1(d){var w=this.a
return w.n(new A.e51(w,d))},
$S:6}
A.e51.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.e5d.prototype={
$0(){var w=this.a
return w.n(new A.e50(w))},
$S:0}
A.e50.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
A.e5e.prototype={
$0(){var w=this.a
return w.n(new A.e5_(w))},
$S:0}
A.e5_.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
A.e5f.prototype={
$0(){var w=this.a
return w.n(new A.e4Z(w))},
$S:0}
A.e4Z.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e5g.prototype={
$0(){var w=this.a
return w.n(w.gcmm())},
$S:0}
A.e5h.prototype={
$0(){var w=this.a
return w.n(w.gbAd())},
$S:0}
A.e5i.prototype={
$0(){var w=this.a
return w.n(new A.e4Y(w))},
$S:0}
A.e4Y.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.ag()
s=w.r
w.anY(50+t*(Math.min(s.a,s.b)/2-70),v.ag()*3.141592653589793*2,0.7+v.ag()*0.5,v.hd())}},
$S:0}
A.e5a.prototype={
$0(){var w=this.a
return w.n(B.d.gqM(w.e))},
$S:0}
A.eov.prototype={
$1(d){return this.a.fC$-d.b>6000},
$S:710}
A.eow.prototype={
$1(d){var w=this.a.e
return new C.a5(w,new A.eou(d),C.T(w).k("a5<1>")).gG(0)>=3},
$S:710}
A.eou.prototype={
$1(d){return d.a.aD(0,this.a.a).gct()<14},
$S:z+54}
A.eok.prototype={
$0(){return A.qj(this.b,this.a.d,"swarm")},
$S:0}
A.eol.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ap(e.b,e.d)
v.w=u
return new C.eo(C.aJ(B.c5,C.b2(w,w,w,new A.box(v.e,v.f,v.ax,v.at,v.ay,v.fC$,w),u),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new A.eoh(v),new A.eoi(v),new A.eoj(v),w,w,w,w,w,w,w,w,new A.eo9(v),new A.eoa(v),new A.eob(v),w,w,w,!1,B.af),v.d)},
$S:197}
A.eoi.prototype={
$1(d){return this.a.ay=d.b},
$S:40}
A.eoj.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
A.eoh.prototype={
$1(d){return this.a.ay=null},
$S:36}
A.eoa.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.S(v,w.fC$))
if(w.ch)A.e1(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)A.l_("flute",7,500,0.3)},
$S:23}
A.eob.prototype={
$1(d){return this.a.ay=null},
$S:53}
A.eo9.prototype={
$0(){return this.a.ay=null},
$S:0}
A.eom.prototype={
$0(){var w=this.a
return w.n(new A.eog(w,this.b))},
$S:0}
A.eog.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
A.eon.prototype={
$0(){var w=this.a
return w.n(new A.eof(w,this.b))},
$S:0}
A.eof.prototype={
$0(){var w=this.a
w.ax=this.b.a
B.d.a8(w.e)},
$S:0}
A.eoo.prototype={
$0(){var w=this.a
return w.n(new A.eoe(w))},
$S:0}
A.eoe.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
A.eop.prototype={
$1(d){var w=this.a
return w.n(new A.eod(w,d))},
$S:6}
A.eod.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.eoq.prototype={
$1(d){var w=this.a
return w.n(new A.eoc(w,d))},
$S:6}
A.eoc.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.eor.prototype={
$1(d){var w=this.a
return w.n(new A.eo8(w,d))},
$S:6}
A.eo8.prototype={
$0(){return this.a.z=this.b},
$S:0}
A.eos.prototype={
$1(d){var w=this.a
return w.n(new A.eo7(w,d))},
$S:6}
A.eo7.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.eot.prototype={
$1(d){var w=this.a
return w.n(new A.eo6(w,d))},
$S:6}
A.eo6.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.dxM.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new A.dxL(w,d))},
$S:131}
A.dxL.prototype={
$0(){var w=this.a,v=this.b,u=J.a6(v),t=C.aQ(u.h(v,"unlocked"))
t=t==null?null:B.k.M(t)
w.w=B.o.D(t==null?1:t,1,100)
t=C.aQ(u.h(v,"level"))
t=t==null?null:B.k.M(t)
if(t==null)t=w.w
w.r=B.o.D(t,1,w.w)
t=C.R(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.jj(v==null?B.uR:v)
v=v.gaf(v)
while(v.C()){u=v.gT(v)
t.m(0,C.t(u.a),B.k.M(C.fc(u.b)))}w.x=t
w.Q=!0
B.d.a8(w.d)},
$S:0}
A.dxN.prototype={
$1(d){return d.d!=null},
$S:z+13}
A.dxO.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Xf(w)>0},
$S:z+13}
A.dxC.prototype={
$0(){var w=this.a
w.r=B.o.D(this.b,1,w.w)
w.aw8()},
$S:0}
A.dxF.prototype={
$1(d){var w=null,v=C.m(22),u=this.a
return C.eB(w,D.aac,new C.B(B.bA,new C.a3(340,480,C.u(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,B.jr,w,w,w),B.T,C.C(C.ig(!0,w,w,B.z,M.aHT,new A.dxE(u,d),100,w,w,B.ah,!1),1)],x.p),B.m,w,B.e,B.j,0,B.p),w),w),w,w,w,w,B.cZ,w,new C.b5(v,B.W),w)},
$S:46}
A.dxE.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new A.dxD(this.b,r):s
v=C.m(12)
if(p)q=r===q.r?B.cd:B.c.j(0.1)
else q=B.c.j(0.03)
u=C.G(p?B.be:B.du,B.r,1)
o=p?o:"\ud83d\udd12"
t=p?B.c:B.jb
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(B.a.aP("\u2605",n)+B.a.aP("\u2606",3-n),s,s,s,s,s,s,D.ezB,s,s,s))
return C.aJ(s,C.p(s,C.u(o,B.m,s,B.b5,B.j,0,B.p),B.h,s,s,new C.o(q,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,B.af)},
$S:76}
A.dxD.prototype={
$0(){C.a7(this.a,!1).K(this.b)
return null},
$S:0}
A.dxJ.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ap(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gaa0()
o=C.b2(q,q,q,new A.b6R(p.d,w,v,p.gbZb(),q),o)
v=p.bR7("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gGO()
t=p.as>=p.gGO()?B.bt:B.c
s=this.b
r=x.p
s=C.a([o,C.an(q,C.A(C.a([v,p.arq("GOAL",""+w+" / "+u,t),p.arq("STARS",B.a.aP("\u2605",s)+B.a.aP("\u2606",3-s),B.aM)],r),B.m,q,B.hu,B.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(B.lH)
if(p.Q&&!p.y)s.push(D.aNy)
if(p.z){o=C.m(24)
w=this.c
v=C.G((w?B.bt:B.cN).j(0.6),B.r,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?B.bt:B.cN,q,q,q,q,q,q,q,q,22,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.ar,C.d("You blasted "+p.as+" dots. The goal was "+p.gGO()+".",q,q,q,q,q,q,B.hk,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(B.a.aP("\u2605",t==null?1:t),q,q,q,q,q,q,D.eqt,q,q,q))}u.push(B.ay)
t=C.a([new A.ff(B.m_,"Try again",new A.dxG(p),B.c,q)],r)
if(w&&p.r<100)t.push(new A.ff(B.jh,"Next level",new A.dxH(p),B.bt,q))
u.push(C.A(t,B.m,q,B.e,B.R,0,q,q))
s.push(C.as(C.p(q,C.u(u,B.m,q,B.e,B.R,0,B.p),B.h,q,q,new C.o(D.Tb,q,v,o,q,q,B.n),q,q,q,q,B.a8,q,q,q),q,q,q))}return C.aJ(B.c5,new C.am(B.V,q,B.aX,B.q,s,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.dxI(p),q,q,q,q,!1,B.af)},
$S:34}
A.dxI.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fC$
A.e1(180,"",200,1,0.4,"sine")
C.j6()},
$S:23}
A.dxG.prototype={
$0(){var w=this.a
return w.n(w.gb_w())},
$S:0}
A.dxH.prototype={
$0(){var w=this.a
return w.aTZ(w.r+1)},
$S:0}
A.dxK.prototype={
$0(){var w=this.a
return w.n(w.gb_w())},
$S:0}
A.cEy.prototype={
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
v.z=B.mO
w.aw(d,e*0.5,v)},
$S:711}
A.e0N.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcEO()?this.a.ciC(w,v,d.b):w.aD(0,v).gct())<24},
$S:z+87}
A.e1b.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+58}
A.e10.prototype={
$0(){var w=this.a
return w.n(new A.e0S(w))},
$S:0}
A.e0S.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
A.e11.prototype={
$0(){return A.qj(this.b,this.a.d,"marble-music")},
$S:0}
A.e12.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ap(e.b,e.d)
v.w=u
return new C.eo(C.aJ(B.c5,C.b2(w,w,w,new A.bdP(v.e,v.f,v.at,v.ax,v.fC$,w),u),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new A.e0Y(v),new A.e0Z(v),new A.e1_(v),w,w,w,w,w,w,w,w,w,w,new A.e0R(v),w,w,w,!1,B.af),v.d)},
$S:197}
A.e0R.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.XY(w)
u.e.push(new A.Eg(w,w,v,u.aLc(v)))
if(u.ay)A.l_(u.z,v+12,700,0.5)}if(u.x==="erase")u.aNI(d.b)},
$S:53}
A.e0Z.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:40}
A.e1_.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aNI(d.b)},
$S:18}
A.e0Y.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aD(0,w).gct()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.XY(t.ap(0,w).eW(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new A.Eg(w,t,v,u.aLc(v)))
if(u.ay)A.l_(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:36}
A.e13.prototype={
$0(){var w=this.a
return w.n(new A.e0X(w,this.b))},
$S:0}
A.e0X.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
A.e14.prototype={
$0(){var w=this.a
return w.n(new A.e0W(w,this.b))},
$S:0}
A.e0W.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.e15.prototype={
$0(){var w=this.a
return w.n(new A.e0V(w,this.b))},
$S:0}
A.e0V.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
A.e16.prototype={
$1(d){var w=this.a
return w.n(new A.e0U(w,d))},
$S:6}
A.e0U.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.e17.prototype={
$0(){var w=this.a
return w.n(new A.e0T(w))},
$S:0}
A.e0T.prototype={
$0(){return this.a.auH("stairs")},
$S:0}
A.e18.prototype={
$0(){var w=this.a
return w.n(new A.e0Q(w))},
$S:0}
A.e0Q.prototype={
$0(){return this.a.auH("pinball")},
$S:0}
A.e19.prototype={
$0(){var w=this.a
return w.n(new A.e0P(w))},
$S:0}
A.e0P.prototype={
$0(){return this.a.auH("random")},
$S:0}
A.e1a.prototype={
$0(){var w=this.a
return w.n(new A.e0O(w))},
$S:0}
A.e0O.prototype={
$0(){var w=this.a
B.d.a8(w.e)
B.d.a8(w.f)},
$S:0}
A.e4H.prototype={
$0(){return B.d.W(this.a.e,this.b)},
$S:0}
A.e4I.prototype={
$0(){var w=this.b,v=new A.ab2(this.a.a,this.c)
v.c=w.fC$
return w.e.push(v)},
$S:0}
A.e4P.prototype={
$0(){var w=this.a
return w.n(new A.e4O(w))},
$S:0}
A.e4O.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
A.e4Q.prototype={
$0(){return A.qj(this.b,this.a.d,"orbit-sequencer")},
$S:0}
A.e4R.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.ap(e.b,e.d)
if(!u.f){u.f=!0
u.aMx()}w=u.w
return new C.eo(C.aJ(B.c5,C.b2(v,v,v,new A.bhd(u.e,u.gaU0(),6,u.gccZ(),u.gcj2(),u.fC$,v),w),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.e4N(u),v,v,v,!1,B.af),u.d)},
$S:197}
A.e4N.prototype={
$1(d){return this.a.bZd(d.b)},
$S:53}
A.e4S.prototype={
$1(d){var w=this.a
return w.n(new A.e4M(w,d))},
$S:6}
A.e4M.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.e4T.prototype={
$0(){var w=this.a
return w.n(new A.e4L(w,this.b))},
$S:0}
A.e4L.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.e4U.prototype={
$0(){var w=this.a
return w.n(new A.e4K(w,this.b))},
$S:0}
A.e4K.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
A.e4V.prototype={
$0(){var w=this.a
return w.n(w.gbE9())},
$S:0}
A.e4W.prototype={
$0(){var w=this.a
return w.n(new A.e4J(w))},
$S:0}
A.e4J.prototype={
$0(){var w,v=this.a,u=v.e
B.d.a8(u)
for(v=v.r,w=0;w<9;++w)u.push(new A.ab2(v.aG(6),v.ag()))},
$S:0}
A.e4X.prototype={
$0(){var w=this.a
return w.n(B.d.gqM(w.e))},
$S:0}
A.fcB.prototype={
$2(d,e){var w=B.o.ak(d,100),v=B.o.J(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:132}
A.e4b.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new A.e4a(w,d))},
$S:131}
A.e4a.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aW(v==null?B.cO:v)
while(v.C())w.push(B.k.M(C.fc(v.gT(v))))
return this.a.x.v(0,w)},
$S:0}
A.e3Y.prototype={
$2(d,e){var w=this.b
if(B.o.ak(d,100)===w||B.o.J(d,100)===w)this.a.a+=e},
$S:132}
A.e3S.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new A.b5J(w.b,new C.v(w.c*(0.2+0.6*v.ag()),w.e*(0.2+0.6*v.ag()))))},
$S:0}
A.e3T.prototype={
$0(){var w=this.a
B.d.a8(w.e)
w.f.a8(0)
w.r=null},
$S:0}
A.e3X.prototype={
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
p=D.uQ.h(0,v[u].a).a
o=w.agh(u)
v=D.uQ.h(0,v[t].a).a
n=w.agh(t)
if(q<=p-o+r&&q<=v-n+r){m.m(0,s,q)
A.v8("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaU6()&&w.x.H(0,w.d)){A.v8("zap",12,300,0.5)
m=w.x
m=C.z(m,C.a2(m).k("ck.E"))
A.v5("molecule_maker",C.D(["done",m],x.N,x.z))}}}},
$S:0}
A.e3W.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a2(t).k("cu<1>"),r=this.b,q=s.k("a5<F.E>"),p=C.z(new C.a5(new C.cu(t,s),new A.e3U(r),q),q.k("F.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.J)(p),++w)t.W(0,p[w])
s=x.S
v=C.R(s,s)
t.bD(0,new A.e3V(r,v))
t.a8(0)
t.v(0,v)
B.d.cu(u.e,r)
u.r=null},
$S:0}
A.e3U.prototype={
$1(d){var w=this.a
return B.o.ak(d,100)===w||B.o.J(d,100)===w},
$S:60}
A.e3V.prototype={
$2(d,e){var w=B.o.ak(d,100),v=B.o.J(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.m(0,w*100+v,e)},
$S:132}
A.e45.prototype={
$1(d){return""+d.b+" "+D.uQ.h(0,d.a).c.toLowerCase()},
$S:422}
A.e46.prototype={
$0(){var w=this.a
return w.n(new A.e44(w))},
$S:0}
A.e44.prototype={
$0(){var w=this.a;++w.d
w.atg(0)},
$S:0}
A.e47.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.ap(e.b,e.d)
return C.aJ(B.c5,C.b2(w,w,w,new A.bev(v.e,v.f,v.r,v.gcth(),w),B.fj),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new A.e40(v),new A.e41(v),new A.e42(v,e),w,w,w,w,w,w,w,w,w,w,new A.e43(v),w,w,w,!1,B.af)},
$S:34}
A.e43.prototype={
$1(d){return this.a.bZA(d.b)},
$S:53}
A.e41.prototype={
$1(d){var w=this.a
return w.w=w.aU7(d.b)},
$S:40}
A.e42.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.n(new A.e3Z(w,v,d,this.b))},
$S:18}
A.e3Z.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.v(B.k.D(t.b.a+s.a,26,r.b-26),B.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
A.e40.prototype={
$1(d){return this.a.w=null},
$S:36}
A.e48.prototype={
$0(){var w=this.a
return w.n(new A.e4_(w,this.b))},
$S:0}
A.e4_.prototype={
$0(){var w=this.a
w.d=this.b
w.atg(0)},
$S:0}
A.e49.prototype={
$0(){return this.a.bZu(0,this.b.a)},
$S:0}
A.dgs.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[B.o.ak(d,100)].b,i=k[B.o.J(d,100)].b,h=i.aD(0,j),g=new C.v(-h.b,h.a).eW(0,Math.max(h.gct(),1))
for(k=(e-1)/2,w=g.a,v=g.b,u=j.a,t=j.b,s=i.a,r=i.b,q=this.b.a,p=0;p<e;++p){o=(p-k)*8
n=w*o
o=v*o
$.a1()
m=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
m.r=B.al.gt(0)
m.c=4
m.d=B.bZ
l=m.L()
q.drawLine.apply(q,[u+n,t+o,s+n,r+o,l])
l.delete()}},
$S:132}
A.dFG.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dFF(w,d))},
$S:131}
A.dFF.prototype={
$0(){var w=C.aQ(J.q(this.b,"best"))
w=w==null?null:B.k.M(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
A.dFv.prototype={
$0(){var w,v,u=J.e_(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.aq_[w.aG(4)]
return B.d.fL(u)},
$S:22}
A.dFu.prototype={
$1(d){return A.fFx(d)==="*"},
$S:3}
A.dFw.prototype={
$1(d){return d!==this.a},
$S:3}
A.dFt.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
A.v5("dna_lab",C.D(["best",r],x.N,x.z))}r=s.d
A.v8("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga6B()[r]+" codes for "+C.t(D.AP.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.aWX()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.J)(w),++u)r.push(D.AP.h(0,w[u]))
r="Protein built: "+B.d.aF(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
A.v8("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
A.dFE.prototype={
$3$ghost(d,e,f){var w=null,v=f?B.du:e,u=C.m(8),t=f?C.G(B.be,B.r,1):w
return C.p(B.B,C.d(d,w,w,w,w,w,w,C.l(w,w,f?B.be:B.w,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.h,w,w,new C.o(v,w,t,u,w,w,B.n),w,40,w,B.mA,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1808}
A.dFz.prototype={
$1(d){var w=D.d1y.h(0,d)
return w==null?B.c:w},
$S:712}
A.dFA.prototype={
$0(){var w=this.a
return w.n(new A.dFy(w,this.b))},
$S:0}
A.dFy.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.asI()},
$S:0}
A.dFB.prototype={
$0(){var w=this.a
return w.n(new A.dFx(w))},
$S:0}
A.dFx.prototype={
$0(){var w=this.a;++w.e
w.asI()},
$S:0}
A.dFC.prototype={
$0(){return this.a.aU5(this.b)},
$S:0}
A.dFD.prototype={
$0(){return this.a.aU5(this.b)},
$S:0}
A.dIv.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dIu(w,d))},
$S:131}
A.dIu.prototype={
$0(){var w=C.aQ(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
A.dIi.prototype={
$0(){},
$S:0}
A.dIh.prototype={
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
A.dIj.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
B.d.a8(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
A.dIn.prototype={
$1(d){var w=this.a
return w.n(new A.dIm(w,d))},
$S:6}
A.dIm.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.dIo.prototype={
$1(d){var w=this.a
return w.n(new A.dIl(w,d))},
$S:6}
A.dIl.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.dIp.prototype={
$1(d){var w=this.a
return w.n(new A.dIk(w,d))},
$S:6}
A.dIk.prototype={
$0(){return this.a.z=this.b},
$S:0}
A.dIq.prototype={
$0(){return this.a.a7M("drought")},
$S:0}
A.dIr.prototype={
$0(){return this.a.a7M("disease")},
$S:0}
A.dIs.prototype={
$0(){return this.a.a7M("foxes")},
$S:0}
A.dIt.prototype={
$0(){return this.a.a7M("rabbits")},
$S:0}
A.cY2.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.f6()
k.dY(B.o.M(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.ag()
p=k.ag()
o=(r&1)===0?1:-1
o=B.k.J(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.ag()
p=Math.sin(s+r*2)
n=new C.ma(new C.ez(e,l,l,B.cT,l,l,l,l,l,l,new C.E(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),B.a5,B.cn,new C.kc(1),l,l,l,l,B.cm,l)
n.fD()
n.a5(w,new C.v(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1810}
A.cY4.prototype={
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
l.e=B.fk
this.c.b4(u,l)},
$S:1811}
A.cY3.prototype={
$3(d,e,f){var w=null,v=C.j0(w,w,w,w,C.dr(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),d),B.a5,B.cn,w,B.eL,B.cm)
v.fD()
v.a5(this.a,new C.v(f,this.b.b+2))},
$S:1812}
A.bBG.prototype={
$2(d,e){return d+e.a*e.b},
$S:1813}
A.f8u.prototype={
$2(d,e){return e.a-d.a},
$S:1814}
A.dtX.prototype={
$2(d,e){return d+e},
$S:74}
A.du9.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.n(new A.du8(v,B.k.D((v.gv3()-w[v.e].gu7())/Math.max(w[v.e].gu7(),8),-1,1)*0.32,u))},
$S:8}
A.du8.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
A.dua.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.du7(w,d))},
$S:131}
A.du7.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aW(v==null?B.cO:v)
while(v.C())w.push(B.k.M(C.fc(v.gT(v))))
return this.a.r.v(0,w)},
$S:0}
A.dtY.prototype={
$0(){var w=this.a.f,v=this.b,u=B.o.J(w[v]+1,6)
w[v]=u
return u},
$S:0}
A.du2.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1815}
A.du3.prototype={
$0(){var w=this.a
return w.n(new A.du1(w))},
$S:0}
A.du1.prototype={
$0(){var w=this.a;++w.e
B.d.hh(w.f,0,5,0)},
$S:0}
A.du4.prototype={
$2(d,e){var w=null,v=this.a
return C.aJ(B.c5,C.b2(w,w,w,new A.b5V(v.w,this.b.a,v.f,v.gv3()===v.d[v.e].gu7(),w),B.fj),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.du0(v,e),w,w,w,!1,B.af)},
$S:34}
A.du0.prototype={
$1(d){var w=this.b.b,v=B.k.U((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cpk(v-1)},
$S:53}
A.du5.prototype={
$0(){var w=this.a
return w.n(new A.du_(w,this.b))},
$S:0}
A.du_.prototype={
$0(){var w=this.a
w.e=this.b
B.d.hh(w.f,0,5,0)},
$S:0}
A.du6.prototype={
$0(){var w=this.a
return w.n(new A.dtZ(w))},
$S:0}
A.dtZ.prototype={
$0(){return B.d.hh(this.a.f,0,5,0)},
$S:0}
A.cx6.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.c_(C.dy(new C.v(d,s),20,w),B.uZ)
$.a1()
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=f.gt(0)
p=q.L()
u.drawRRect(C.fM(r),p)
p.delete()
q=new C.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.b=B.ak
q.c=1.2
q.r=B.dx.gt(0)
p=q.L()
u.drawRRect(C.fM(r),p)
p.delete()
A.f7z(v,"1",new C.v(d,s),B.bi,11)}},
$S:1816}
A.dMi.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.n(new A.dMh(w,v))},
$S:8}
A.dMh.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
A.dMj.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dMg(w,d))},
$S:131}
A.dMg.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aW(v==null?B.cO:v)
while(v.C())w.push(B.k.M(C.fc(v.gT(v))))
return this.a.w.v(0,w)},
$S:0}
A.dM8.prototype={
$0(){var w=B.k.U(this.c)
this.a.d[this.b]=w
return w},
$S:0}
A.dMc.prototype={
$0(){var w=this.a
return w.n(new A.dMb(w))},
$S:0}
A.dMb.prototype={
$0(){return this.a.r++},
$S:0}
A.dMd.prototype={
$0(){var w=this.a
return w.n(new A.dMa(w,this.b))},
$S:0}
A.dMa.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dMe.prototype={
$1(d){var w=this.a
return w.n(new A.dM9(w,d))},
$S:6}
A.dM9.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.dMf.prototype={
$1(d){return this.a.bZB(this.b,d)},
$S:6}
A.d3V.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bJb(d,e,f,g),m=this.b
$.a1()
w=C.U()
v=C.aq(h,B.c,i?0.1:0.35)
v.toString
u=C.aq(h,B.w,0.5)
u.toString
w.sav(new C.bS(B.B,0.5,B.x,null,0,C.a([v,h,u],x.O),null,null).aB(0,C.c1(d,e+6)))
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
p.r=B.hU.gt(0)
p.c=3
o=p.L()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.U()
w.r=B.aJ.gt(0)
m.aw(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1817}
A.d3W.prototype={
$3(d,e,f){var w=this,v=w.b
return A.f7z(w.a,d,new C.v(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1818}
A.dy8.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dy7(w,d))},
$S:131}
A.dy7.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aW(v==null?B.cO:v)
while(v.C())w.push(B.k.M(C.fc(v.gT(v))))
return this.a.Q.v(0,w)},
$S:0}
A.dxR.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jv(90-(w-65)):d},
$S:13}
A.dy_.prototype={
$1(d){return this.a.n(new A.dxZ())},
$S:2}
A.dxZ.prototype={
$0(){},
$S:0}
A.dy0.prototype={
$1(d){return this.a.n(new A.dxY())},
$S:2}
A.dxY.prototype={
$0(){},
$S:0}
A.dy1.prototype={
$0(){var w=this.a
return w.n(new A.dxX(w))},
$S:0}
A.dxX.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aT2()},
$S:0}
A.dy2.prototype={
$0(){var w=this.a
return w.n(new A.dxW(w))},
$S:0}
A.dxW.prototype={
$0(){return this.a.f=0},
$S:0}
A.dy3.prototype={
$0(){var w=this.a
return w.n(new A.dxV(w))},
$S:0}
A.dxV.prototype={
$0(){return this.a.f=1},
$S:0}
A.dy4.prototype={
$0(){var w=this.a
return w.n(new A.dxU(w,this.b))},
$S:0}
A.dxU.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dy5.prototype={
$1(d){var w=this.a
return w.n(new A.dxT(w,d))},
$S:6}
A.dxT.prototype={
$0(){return this.a.w=B.k.U(this.b)},
$S:0}
A.dy6.prototype={
$1(d){var w=this.a
w.n(new A.dxS(w,d))
if(w.ga72()&&w.Q.H(0,w.x)){A.v8("zap",9,220,0.45)
w=w.Q
w=C.z(w,C.a2(w).k("ck.E"))
A.v5("cipher_lab",C.D(["done",w],x.N,x.z))}},
$S:6}
A.dxS.prototype={
$0(){return this.a.z=B.k.U(this.b)},
$S:0}
A.bH1.prototype={
$1(d){return d.r<=0},
$S:z+62}
A.bHb.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+15}
A.bH7.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+15}
A.bHd.prototype={
$2(d,e){var w=this.a
return w.cg(0,d.a+"."+e,new A.bHe(w))},
$S:z+5}
A.bHe.prototype={
$0(){return this.a.a},
$S:113}
A.bHc.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:86}
A.bHf.prototype={
$2(d,e){var w=this.a
return w.cg(0,this.b.$1(this.c.$2(d,e)),new A.bHg(w))},
$S:z+5}
A.bHg.prototype={
$0(){return this.a.a},
$S:113}
A.bH3.prototype={
$2(d,e){var w=this.a
return w.cg(0,d.a+"."+e,new A.bH4(w))},
$S:z+5}
A.bH4.prototype={
$0(){return this.a.a},
$S:113}
A.bH2.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:86}
A.bH5.prototype={
$2(d,e){var w=this.a
return w.cg(0,this.b.$1(this.c.$2(d,e)),new A.bH6(w))},
$S:z+5}
A.bH6.prototype={
$0(){return this.a.a},
$S:113}
A.bHa.prototype={
$1(d){return d.b===this.a},
$S:z+1}
A.bH9.prototype={
$1(d){return d.ax>=this.a&&!d.x},
$S:z+1}
A.bH8.prototype={
$1(d){return d.b===this.a},
$S:z+1}
A.bCt.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
A.bCu.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+9}
A.ceL.prototype={
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
A.bCq.prototype={
$2(d,e){if(d==="short"){A.e1(1800,"",120,0,0.55,"noise")
A.e1(200,"",160,2.2,0.4,"saw")
C.fV()}if(d==="burn"){A.e1(140,"",320,0,0.6,"noise")
A.e1(900,"",160,1.5,0.35,"square")}},
$S:z+65}
A.bCr.prototype={
$0(){},
$S:0}
A.bC_.prototype={
$0(){},
$S:0}
A.bCs.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
A.bCo.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ap(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aJ(B.c5,C.b2(p,p,p,new A.aOx(w,v,u,t,s,r==null?B.m5:r,p),n),B.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,new A.bCj(o),new A.bCk(o),new A.bCl(o),p,p,p,p,p,p,p,p,p,p,new A.bCm(o),p,p,p,!1,B.af)],q)
if(o.a.c.a.length===0)n.push(D.aWt)
if(o.e!=null)n.push(C.an(8,o.aU8(C.A(C.a([D.blo,new A.ff(B.Xi,"Cut wire",new A.bCn(o),B.cN,p)],q),B.m,p,B.e,B.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.an(8,o.c7Z(w),p,p,10,10,p,p))}return C.jy(new C.am(B.V,p,B.aX,B.q,n,p),B.q,p)},
$S:442}
A.bCk.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b1F(s)
if(r!=null){t.n(new A.bCh(t,r,d))
return}w=t.aWC(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.v(v*u.a,w.d*u.b).aD(0,s)
t.n(new A.bCi(t,w))}},
$S:40}
A.bCh.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
A.bCi.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bCl.prototype={
$1(d){var w=this.a
if(w.f!=null)w.n(new A.bCf(w,d))
else if(w.w!=null)w.n(new A.bCg(w,d.b.ap(0,w.x)))},
$S:18}
A.bCf.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
A.bCg.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=B.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=B.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
A.bCj.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b1F(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.azs(u.a,u.b,v.a,v.b)!=null)A.e1(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.ab3()},
$S:36}
A.bCm.prototype={
$1(d){var w=this.a,v=d.b,u=w.aWC(v)
if(u!=null){w.n(new A.bCd(w,u))
w.a.toString
return}w.n(new A.bCe(w,w.cu5(v)))},
$S:53}
A.bCd.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
A.e1(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
A.e1(200,"",70,0,0.2,"saw")}},
$S:0}
A.bCe.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
A.bCn.prototype={
$0(){var w=this.a
B.d.W(w.a.c.b,w.e)
w.e=null
A.e1(300,"",50,0,0.35,"noise")
w.ab3()},
$S:0}
A.bCp.prototype={
$0(){return this.a.biG(this.b)},
$S:0}
A.bCa.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.A(C.a([C.d(d,w,w,w,w,w,w,D.ep9,w,w,w),C.C(C.m8(this.b.d,w,w,g,h,new A.bCc(this.a,f),B.k.D(e,h,g)),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1819}
A.bCc.prototype={
$1(d){var w=this.a
w.n(new A.bCb(this.b,d))
w.a.toString},
$S:6}
A.bCb.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.bC3.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
A.e1(260,"",70,0,0.35,"noise")
w.ab3()},
$S:0}
A.bC4.prototype={
$0(){var w=this.a
return w.n(new A.bC2(w))},
$S:0}
A.bC2.prototype={
$0(){return this.a.d=null},
$S:0}
A.bC5.prototype={
$0(){var w=this.a
w.n(new A.bC1(this.b,this.c))
w.a.toString},
$S:0}
A.bC1.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.bC6.prototype={
$0(){var w=this.a
w.n(new A.bC0(this.b,this.c))
w.a.toString},
$S:0}
A.bC0.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.bC7.prototype={
$1(d){return this.a.f=d},
$S:6}
A.bC8.prototype={
$1(d){return this.a.f=d},
$S:6}
A.bC9.prototype={
$1(d){return this.a.f=d},
$S:6}
A.eZW.prototype={
$1(d){return d.aCb("bulb")},
$S:z+2}
A.eZX.prototype={
$1(d){return d.aBl(0,"switch")&&d.aCb("bulb")},
$S:z+2}
A.eZY.prototype={
$1(d){return B.d.be(d.a,new A.eZM())},
$S:z+2}
A.eZM.prototype={
$1(d){return d.b==="motor"&&d.ax>0.3},
$S:z+1}
A.eZZ.prototype={
$1(d){return d.aBl(0,"resistor")&&B.d.be(d.a,new A.eZL())},
$S:z+2}
A.eZL.prototype={
$1(d){return d.b==="led"&&d.ax>0.3&&!d.x},
$S:z+1}
A.f__.prototype={
$1(d){return!d.aBl(0,"battery")&&d.aCb("bulb")},
$S:z+2}
A.eZQ.prototype={
$1(d){return B.d.be(d.a,new A.eZK())},
$S:z+2}
A.eZK.prototype={
$1(d){return d.b==="radio"&&d.ax>0},
$S:z+1}
A.eZR.prototype={
$1(d){return B.d.be(d.a,new A.eZJ())},
$S:z+2}
A.eZJ.prototype={
$1(d){return d.b==="tv"&&d.ax>0},
$S:z+1}
A.eZS.prototype={
$1(d){return B.d.be(d.a,new A.eZI())},
$S:z+2}
A.eZI.prototype={
$1(d){return d.b==="heater"&&d.ax>0.5},
$S:z+1}
A.dIB.prototype={
$0(){},
$S:0}
A.dIA.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.m(22),o=x.p,n=C.a([D.eRf,B.au,D.eDj,B.T],o)
for(w=this.a,v=0;v<12;++v){u=D.Nv[v]
t=B.c.j(0.06)
s=new C.b3(14,14)
r=new C.ax(B.bG,1,B.r,-1)
n.push(C.aJ(q,C.p(q,C.u(C.a([new C.w(u.a,q,B.kc,q,q,q,q,q,q,q,q,q),B.by,new C.w(u.b,q,D.ev_,q,q,q,q,B.Z,q,3,q,q)],o),B.F,q,B.e,B.j,0,B.p),B.h,q,q,new C.o(t,q,new C.c2(r,r,r,r),new C.bv(s,s,s,s),q,q,B.n),q,q,q,B.cH,B.bk,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.dIz(w,d,u),q,q,q,q,q,q,!1,B.af))}return C.eB(q,D.aac,new C.B(B.c1,new C.a3(340,q,C.cL(n,q,q,q,q,B.ah,!0),q),q),q,q,q,q,B.cZ,q,new C.b5(p,B.W),q)},
$S:46}
A.dIz.prototype={
$0(){C.a7(this.b,!1).K(null)
var w=this.a
w.n(new A.dIy(w,this.c))
A.e1(800,"",120,-0.5,0.3,"square")},
$S:0}
A.dIy.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bc4()},
$S:0}
A.dID.prototype={
$0(){var w=this.a
return w.n(new A.dIC(w,this.b))},
$S:0}
A.dIC.prototype={
$0(){var w,v=this.a
if(this.b)w=v.f+1
else{$.bzC()
w=Math.min(8,v.f+1)}return v.f=w},
$S:0}
A.dIE.prototype={
$0(){var w=this.a
return w.n(w.d.gcKz())},
$S:0}
A.dIF.prototype={
$0(){var w=this.a,v=w.d
return w.n(v.gqM(v))},
$S:0}
A.dXB.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new A.dXA(w,d))},
$S:131}
A.dXA.prototype={
$0(){var w=this.a,v=this.b,u=J.a6(v),t=C.aQ(u.h(v,"best"))
t=t==null?null:B.k.M(t)
w.e=t==null?0:t
v=C.aQ(u.h(v,"level"))
v=v==null?null:B.k.M(v)
if(v==null)v=0
w.d=v
w.f=A.fG0(v)},
$S:0}
A.dXC.prototype={
$0(){},
$S:0}
A.dXr.prototype={
$0(){var w=this.a,v=B.o.D(this.b,0,59)
w.d=v
w.f=A.fG0(v)
w.r.a8(0)
w.x=!1},
$S:0}
A.dXs.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.guE().r){C.jC()
return}q.m(0,p,"/")}else if(o==="/")q.m(0,p,"\\")
else q.W(0,p)
A.v8("click",s.c+s.d,60,0.4)
if(A.h3H(r.guE(),q).b.a===r.guE().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}A.v5("laser_maze",C.D(["best",p,"level",Math.min(q,59)],x.N,x.z))
A.As("bell",D.ajK,700,0.45)
for(q=r.guE().c,q=C.ef(q,q.r,C.a2(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.S(new C.v((B.o.J(t,7)+0.5)*p+w,(B.o.ak(t,7)+0.5)*p+v),0))}}},
$S:0}
A.dXv.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.ap(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aJ(B.c5,C.b2(s,s,s,new A.bd_(r.guE(),w,v.a,u,r.w,r.z,s),q),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.dXt(r),s,s,s,!1,B.af),C.an(s,C.e8(C.A(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,F.aJq,s,s,s),C.d(""+u.a+"/"+r.guE().c.a+" \u2605   mirrors "+w.a+"/"+r.guE().r,s,s,s,s,s,s,P.a3M,s,s,s)],t),B.m,s,B.hu,B.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(A.f38("Beam delivered! \u2605","Level "+(r.d+1)+" done.",B.bt,C.a([new A.ff(B.jh,"Next level",new A.dXu(r),B.bt,s)],t)))
return new C.am(B.V,s,B.aX,B.q,w,s)},
$S:61}
A.dXt.prototype={
$1(d){return this.a.bZR(d.b)},
$S:53}
A.dXu.prototype={
$0(){var w=this.a
return w.ab5(w.d+1)},
$S:0}
A.dXw.prototype={
$0(){var w=this.a,v=w.r
return w.n(v.gqM(v))},
$S:0}
A.dXx.prototype={
$0(){var w=this.a
return w.ab5(w.d+1)},
$S:0}
A.dXy.prototype={
$0(){var w=this.a
return w.ab5(w.d-1)},
$S:0}
A.dXz.prototype={
$0(){return this.a.ab5(this.b)},
$S:0}
A.d8J.prototype={
$1(d){var w=this.b
return new C.v(this.a+(B.o.J(d,7)+0.5)*w,this.c+(B.o.ak(d,7)+0.5)*w)},
$S:713}
A.d8M.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.v(r,s):new C.v(r,r),p=new C.v(-q.a,-q.b)
r=this.c
w=t.ap(0,q)
v=t.ap(0,p)
$.a1()
u=C.U()
u.r=(f?B.ja:B.aJ).gt(0)
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
$S:1821}
A.d8K.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:456}
A.d8L.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:456}
A.dXU.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dXT(w,d))},
$S:131}
A.dXT.prototype={
$0(){var w=C.aQ(J.q(this.b,"best"))
w=w==null?null:B.k.M(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
A.dXV.prototype={
$0(){},
$S:0}
A.dXF.prototype={
$1(d){return d===0},
$S:126}
A.dXO.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.x(1,q[0],q[1],q[2],B.t)
q=C.d("ROUND "+C.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,F.a3Y,s,s,s)
w=r.z==="play"?B.k.dF(r.y):20
v=x.p
w=C.A(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?B.cN:B.c,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,P.a3M,s,s,s)],v),B.m,s,B.hu,B.j,0,s,s)
q=r.z==="ready"
u=q?B.du:p
t=C.m(22)
t=C.C(C.p(s,s,B.h,s,s,new C.o(u,s,C.G(B.be,B.r,2),t,s,s,B.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.u(C.a([new C.B(D.bfy,w,s),C.C(C.A(C.a([C.C(new C.B(B.bT,C.u(C.a([t,B.ar,C.d(q?"TARGET":"TARGET: "+r.gcpn(),s,s,s,s,s,s,D.aKb,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),1),C.C(new C.B(B.bT,C.u(C.a([C.C(C.b2(s,s,s,new A.bde(r.f,s),B.fj),1),B.ar,C.d("YOURS \xb7 "+B.k.U(B.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aKb,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),1)],v),B.m,s,B.e,B.j,0,s,s),1)],v),B.m,s,B.e,B.j,0,B.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(A.f38("Light Mixer","Match each colour with red, green and blue light."+q,B.bc,C.a([new A.ff(B.iF,"Start",new A.dXL(r),B.bt,s)],v)))}if(r.z==="result")w.push(A.f38(r.Q,"Score so far: "+r.w,B.aM,C.a([new A.ff(B.jh,"Next colour",new A.dXM(r),B.bt,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(A.f38("Finished! "+q,u,B.bt,C.a([new A.ff(B.m_,"Play again",new A.dXN(r),B.bt,s)],v)))}return new C.am(B.V,s,B.a9,B.q,w,s)},
$S:61}
A.dXL.prototype={
$0(){var w=this.a
return w.n(new A.dXH(w))},
$S:0}
A.dXH.prototype={
$0(){var w=this.a
w.w=w.r=0
w.ati()},
$S:0}
A.dXM.prototype={
$0(){var w=this.a
return w.n(w.gbZP())},
$S:0}
A.dXN.prototype={
$0(){var w=this.a
return w.n(new A.dXG(w))},
$S:0}
A.dXG.prototype={
$0(){var w=this.a
w.w=w.r=0
w.ati()},
$S:0}
A.dXP.prototype={
$1(d){var w=this.a
return w.n(new A.dXK(w,d))},
$S:6}
A.dXK.prototype={
$0(){var w=B.k.U(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
A.dXQ.prototype={
$1(d){var w=this.a
return w.n(new A.dXJ(w,d))},
$S:6}
A.dXJ.prototype={
$0(){var w=B.k.U(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
A.dXR.prototype={
$1(d){var w=this.a
return w.n(new A.dXI(w,d))},
$S:6}
A.dXI.prototype={
$0(){var w=B.k.U(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
A.dXS.prototype={
$0(){var w=this.a
return w.n(w.gbZQ())},
$S:0}
A.f_E.prototype={
$0(){return D.dGS},
$S:z+67}
A.f_F.prototype={
$0(){return D.def},
$S:z+68}
A.f_G.prototype={
$0(){return D.daP},
$S:z+69}
A.f_H.prototype={
$0(){return D.ddG},
$S:z+70}
A.f_I.prototype={
$0(){return D.diC},
$S:z+71}
A.f_J.prototype={
$0(){return D.dCL},
$S:z+72}
A.f_K.prototype={
$0(){return D.dEX},
$S:z+73}
A.f_L.prototype={
$0(){return D.dhW},
$S:z+74}
A.c9A.prototype={
$0(){return C.a7(this.a,!1).oZ()},
$S:0}
A.c9B.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.h75(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.b3(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.a9(0,B.G,p.j(0.4),B.dm,16)],t)
n=B.c.j(0.85)
j.push(C.aJ(m,C.p(m,new C.am(B.V,m,B.a9,B.q,C.a([new C.cE(m,-6,-6,m,m,m,new C.w(r.c,m,I.QN,m,m,m,m,m,m,m,m,m),m),new C.bE(B.lc,m,m,C.u(C.a([new C.w(r.a,m,D.ezs,m,m,m,m,m,m,m,m,m),B.d5,new C.w(r.b,m,new C.E(!0,n,m,m,m,m,12,B.a0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),B.F,m,B.e,B.R,0,B.p),m)],k),m),B.h,m,m,new C.o(m,m,m,new C.bv(q,q,q,q),p,new C.a8(B.ax,B.aD,B.x,o,m,m),B.n),m,v,m,m,B.bA,m,m,l),B.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.c9z(d,r),m,m,m,m,m,m,!1,B.af))}return C.cb(B.bH,j,B.bw,14,14)},
$S:168}
A.c9z.prototype={
$0(){return C.a7(this.a,!1).cr(C.eH(new A.c9y(this.b),!1,null,x.H))},
$S:0}
A.c9y.prototype={
$1(d){return this.a.f.$0()},
$S:43}
A.et9.prototype={
$0(){var w=this.a
return w.w=w.d[w.aZX(w.f)]},
$S:0}
A.et5.prototype={
$0(){var w=this.a
w.w=""
w.r=9+B.cA.ag()*7},
$S:0}
A.et4.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bG(0,B.c_)
w.w=""},
$S:0}
A.et7.prototype={
$0(){var w=this.a
return w.n(new A.et6(w,this.b))},
$S:0}
A.et6.prototype={
$0(){var w=this.a.d
if(w.length>2)B.d.cu(w,this.b)},
$S:0}
A.et8.prototype={
$1(d){return this.a.aUt(0)},
$S:2}
A.dKB.prototype={
$0(){return A.As("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
A.dKC.prototype={
$0(){},
$S:0}
A.dKw.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
A.dKy.prototype={
$0(){return this.a.aUv(this.b)},
$S:0}
A.dKz.prototype={
$0(){var w=this.a
return w.n(new A.dKx(w))},
$S:0}
A.dKx.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
A.dKA.prototype={
$0(){var w=this.a
return w.aUv(w.d)},
$S:0}
A.dwz.prototype={
$2(d,e){return d+e},
$S:93}
A.dwA.prototype={
$0(){},
$S:0}
A.dwu.prototype={
$2(d,e){return d+e},
$S:93}
A.dwx.prototype={
$0(){var w=this.a
return w.n(new A.dww(w,this.b))},
$S:0}
A.dww.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
A.dwy.prototype={
$0(){var w=this.a
return w.n(new A.dwv(w))},
$S:0}
A.dwv.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
A.dI7.prototype={
$0(){return A.qj(this.b,this.a.d,"drawing")},
$S:0}
A.dI8.prototype={
$1(d){var w=this.a
return w.n(new A.dI6(w,d))},
$S:40}
A.dI6.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new A.aEQ(u,v,t))},
$S:0}
A.dI9.prototype={
$1(d){var w=this.a
return w.n(new A.dI5(w,d))},
$S:18}
A.dI5.prototype={
$0(){return B.d.gai(this.a.e).c.push(this.b.b)},
$S:0}
A.dIa.prototype={
$1(d){var w=this.a
return w.n(new A.dI4(w,d))},
$S:23}
A.dI4.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new A.aEQ(u,v,t))},
$S:0}
A.dIb.prototype={
$0(){var w=this.a
return w.n(new A.dI3(w,this.b))},
$S:0}
A.dI3.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
A.dIc.prototype={
$1(d){var w=this.a
return w.n(new A.dI2(w,d))},
$S:6}
A.dI2.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dId.prototype={
$0(){var w=this.a
return w.n(new A.dI1(w))},
$S:0}
A.dI1.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
A.dIe.prototype={
$0(){var w=this.a
return w.n(new A.dI0(w))},
$S:0}
A.dI0.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
A.dIf.prototype={
$0(){var w=this.a
return w.n(B.d.gqM(w.e))},
$S:0}
A.dIg.prototype={
$0(){var w=this.a
return w.n(new A.dI_(w))},
$S:0}
A.dI_.prototype={
$0(){var w=this.a
w.x=D.aqr[B.o.J(B.d.cP(D.aqr,w.x)+1,4)]},
$S:0}
A.e21.prototype={
$0(){return this.a.f.H(0,this.b)},
$S:0}
A.e22.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
A.As("bell",C.a([0,4,7],w),500,0.45)
u.n(new A.e20(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)A.As("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
A.e20.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
A.e23.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new A.e2_(w))},
$S:11}
A.e2_.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
A.e27.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return C.aJ(w,C.mx(new A.e25(v,e),w,B.b9,B.u7,w,new C.bm(0,u,x.e7),x.i),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e26(v,e),w,w,w,w,w,w,!1,B.af)},
$S:76}
A.e26.prototype={
$0(){return this.a.c_J(this.b)},
$S:0}
A.e25.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.de(),m=n.a
m.$flags&2&&C.ah(m)
m[11]=0.001
n.fk(3.141592653589793*e)
m=C.m(16)
w=o?p:D.bGX
if(o)v=q.a.r.q(0,q.b)?B.bt.j(0.25):B.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.G(u.r.q(0,t)?B.bt:B.be,B.r,1)
if(o){r=C.de()
r.fk(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fm(B.B,C.d(u[t],p,p,p,p,p,p,D.ewR,p,p,p),p,r,!0)
u=r}else u=D.eQ5
return C.fm(B.B,C.p(B.B,u,B.h,p,p,new C.o(v,p,s,m,p,w,B.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:134}
A.e28.prototype={
$0(){var w=this.a
return w.n(new A.e24(w,this.b))},
$S:0}
A.e24.prototype={
$0(){var w=this.a
w.d=this.b.a
w.aoP()},
$S:0}
A.e29.prototype={
$0(){var w=this.a
return w.n(w.gbCJ())},
$S:0}
A.eaw.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
A.eax.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
A.eau.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.eav.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new A.eat(w))},
$S:11}
A.eat.prototype={
$0(){return this.a.f=-1},
$S:0}
A.eay.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
A.eaz.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
A.eaA.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aUu()},
$S:11}
A.eaB.prototype={
$0(){return this.a.c_P(this.b)},
$S:0}
A.eoO.prototype={
$1(d){return C.t(d.h(0,1))+","},
$S:69}
A.eoX.prototype={
$3$big(d,e,f){var w=null,v=C.C(C.d(d,w,1,B.Z,w,w,w,C.l(w,w,B.aQ,w,w,w,w,w,w,w,w,f?16:14,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.B(B.lm,C.A(C.a([v,B.ab,new C.dk(1,B.cj,C.eY(B.B,C.d(e,w,w,w,w,w,w,C.l(w,w,B.c,w,w,w,w,w,w,w,w,f?30:18,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.h,B.e8),w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1823}
A.eoT.prototype={
$1(d){return this.a.n(new A.eoS())},
$S:2}
A.eoS.prototype={
$0(){},
$S:0}
A.eoU.prototype={
$0(){var w=this.a
return w.n(new A.eoR(w,this.b))},
$S:0}
A.eoR.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.eoV.prototype={
$1(d){var w=this.a
return w.n(new A.eoQ(w,d))},
$S:6}
A.eoQ.prototype={
$0(){return this.a.f=B.k.U(this.b)},
$S:0}
A.eoW.prototype={
$0(){var w=this.a
return w.n(new A.eoP(w))},
$S:0}
A.eoP.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
A.e0H.prototype={
$0(){},
$S:0}
A.e0I.prototype={
$0(){},
$S:0}
A.e0A.prototype={
$0(){var w=this.a
return w.n(new A.e0z(w))},
$S:0}
A.e0z.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.bT(u,1,!1,x.S)
w.r=0.9
A.a5X("hat",0.6)},
$S:0}
A.e0B.prototype={
$0(){var w=this.a
return w.n(new A.e0y(w))},
$S:0}
A.e0y.prototype={
$0(){this.a.y=1.1
A.l_("bell",36,200,0.4)},
$S:0}
A.e0C.prototype={
$0(){var w=this.a
return w.n(new A.e0x(w))},
$S:0}
A.e0x.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aG(Math.max(v,u)-t+1)
w.as=u
A.l_("bell",12+B.o.J(u,12),500,0.5)},
$S:0}
A.e0D.prototype={
$0(){var w=this.a
return w.n(new A.e0w(w,this.b))},
$S:0}
A.e0w.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
A.e0E.prototype={
$1(d){var w=this.a
return w.n(new A.e0v(w,d))},
$S:6}
A.e0v.prototype={
$0(){var w,v,u,t=this.a,s=t.e=B.k.U(this.b),r=J.e_(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
A.e0F.prototype={
$1(d){var w=this.a
return w.n(new A.e0u(w,d))},
$S:6}
A.e0u.prototype={
$0(){return this.a.z=B.k.U(this.b)},
$S:0}
A.e0G.prototype={
$1(d){var w=this.a
return w.n(new A.e0t(w,d))},
$S:6}
A.e0t.prototype={
$0(){return this.a.Q=B.k.U(this.b)},
$S:0}
A.clG.prototype={
$0(){return C.a7(this.a,!1).oZ()},
$S:0}
A.clH.prototype={
$0(){var w=this.a
return A.hOG(this.b,w.c,w.e,w.d)},
$S:0}
A.fvU.prototype={
$1(d){var w,v=null,u=C.m(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,B.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.epF,v,v,v)
return C.ep(C.a([C.bG(!1,D.eGd,v,v,!0,v,v,new A.fvT(d),v,v)],x.p),v,v,D.rq,w,v,v,v,new C.b5(u,new C.ax(s,1,B.r,-1)),t,v)},
$S:20}
A.fvT.prototype={
$0(){C.a7(this.a,!1).K(null)
return null},
$S:0}
A.clC.prototype={
$0(){C.eN()
this.a.e.$0()},
$S:0}
A.clB.prototype={
$0(){C.eN()
this.a.e.$0()},
$S:0}
A.clI.prototype={
$0(){C.eN()
this.a.e.$0()},
$S:0}
A.clD.prototype={
$0(){var w=this.a
B.d.W(w.fc$,this.b.b7())
if(w.c!=null)this.c.$0()},
$S:0}
A.clF.prototype={
$1(d){var w=this.a,v=d.a,u=B.k.D((v-w.ku$.a)/1e6,0,0.04)
w.ku$=d
w.fC$=B.o.ak(v,1000)
w.l_(u)
if(w.c!=null)w.n(new A.clE())},
$S:8}
A.clE.prototype={
$0(){},
$S:0}
A.c9u.prototype={
$2(d,e){var w,v,u,t
for(w=e.length,v=this.a,u=v.$flags|0,t=0;t<w;++t){u&2&&C.ah(v,9)
v.setUint8(d+t,e.charCodeAt(t))}},
$S:456}
A.c9w.prototype={
$0(){var w=this
return A.hl4(w.a,w.b,w.c,w.d,w.e)},
$S:323}
A.c9v.prototype={
$0(){var w=this
return A.l_(w.a,w.b,w.c,w.d)},
$S:1}
A.dNj.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dNi(w,d))},
$S:z+76}
A.dNi.prototype={
$0(){return this.a.cjM(this.b)},
$S:0}
A.dMM.prototype={
$0(){var w,v,u,t=this.a,s=J.a6(t),r=s.gG(t),q=new Float64Array(r*4)
for(w=0;w<s.gG(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:1824}
A.dMK.prototype={
$0(){return this.a.id=D.a_l},
$S:0}
A.dML.prototype={
$0(){var w=this.b.a,v=C.T(w).k("a5<1>")
v=C.oJ(new C.a5(w,new A.dMJ(this.c),v),6,v.k("F.E"))
w=C.z(v,C.a2(v).k("F.E"))
return this.a.id=w},
$S:0}
A.dMJ.prototype={
$1(d){return B.a.q(d.a.toLowerCase(),this.a)},
$S:z+77}
A.dMI.prototype={
$1(d){var w=null,v=C.cf(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,B.al,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),B.q,w,B.z,w,w,w,w,B.ah)
return C.ep(C.a([C.bG(!1,B.pB,w,w,!0,w,w,new A.dMH(d),w,w)],x.p),w,w,D.rq,v,w,w,w,w,D.eQ9,w)},
$S:20}
A.dMH.prototype={
$0(){C.a7(this.a,!1).K(null)
return null},
$S:0}
A.dN4.prototype={
$0(){return A.qj(this.b,this.a.d,"earth")},
$S:0}
A.dN5.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ap(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gU4()
r=p.z
o=C.a([C.aJ(B.c5,C.b2(q,q,q,new A.bbr(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.dMT(p),new A.dMU(p),new A.dMV(p),q,q,q,q,q,q,q,new A.dMW(p),q,q,q,!1,B.af)],x.p)
if(p.r==null)o.push(Ad.a7B)
w=this.b
if(w!=null)o.push(C.an(8,p.c0q(w),q,q,10,10,q,q))
return new C.eo(new C.am(B.V,q,B.aX,B.q,o,q),p.d)},
$S:197}
A.dMU.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:334}
A.dMV.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=B.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gU4()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=B.k.D(u.x+v.b*w,-85,85)}},
$S:242}
A.dMT.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gU4()*u.z)
v=d.a.a
u.Q=B.k.D(-v.a*w,-160,160)
u.as=B.k.D(v.b*w,-100,100)},
$S:529}
A.dMW.prototype={
$1(d){var w=this.a,v=w.c0t(d.b)
if(v!=null)w.n(new A.dMN(w,v))
else w.n(new A.dMO(w))},
$S:53}
A.dMN.prototype={
$0(){return this.a.atJ(this.b)},
$S:0}
A.dMO.prototype={
$0(){return this.a.fx=null},
$S:0}
A.dN6.prototype={
$0(){var w=this.a
w.e.bG(0,B.c_)
w.n(new A.dMS(w,this.b))},
$S:0}
A.dMS.prototype={
$0(){var w=this.a
w.id=D.a_l
w.atJ(this.b)},
$S:0}
A.dNa.prototype={
$0(){var w=this.a
return w.n(new A.dN3(w))},
$S:0}
A.dN3.prototype={
$0(){var w=this.a
w.fx=null
w.apY(15,w.y,1)},
$S:0}
A.dNb.prototype={
$0(){var w=this.a
return w.n(new A.dN2(w,this.b))},
$S:0}
A.dN2.prototype={
$0(){var w=this.b.b
return this.a.apY(w.a,w.b,w.c)},
$S:0}
A.dNc.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.n(new A.dN1(w,v))},
$S:0}
A.dN1.prototype={
$0(){var w=this.b.a
return this.a.atJ(w[B.cA.aG(w.length)])},
$S:0}
A.dNd.prototype={
$1(d){var w=this.a
return w.n(new A.dN0(w,d))},
$S:6}
A.dN0.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
A.dNe.prototype={
$1(d){var w=this.a
return w.n(new A.dN_(w,d))},
$S:6}
A.dN_.prototype={
$0(){return this.a.dy=this.b},
$S:0}
A.dNf.prototype={
$1(d){var w=this.a
return w.n(new A.dMZ(w,d))},
$S:6}
A.dMZ.prototype={
$0(){return this.a.fr=this.b},
$S:0}
A.dNg.prototype={
$0(){var w=this.a
return w.n(new A.dMY(w))},
$S:0}
A.dMY.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
A.dNh.prototype={
$0(){var w=this.a
return w.n(new A.dMX(w))},
$S:0}
A.dMX.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
A.dN7.prototype={
$0(){var w=this.a
return w.n(new A.dMR(w))},
$S:0}
A.dMR.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
A.dN8.prototype={
$0(){var w=this.a
return w.n(new A.dMQ(w))},
$S:0}
A.dMQ.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
A.dN9.prototype={
$0(){var w=this.a
return w.n(new A.dMP(w))},
$S:0}
A.dMP.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
A.dMG.prototype={
$2(d,e){var w=null
return C.C(C.u(C.a([C.d(d,w,w,w,w,w,w,D.aIS,w,w,w),B.v6,C.d(e,w,2,B.Z,w,w,w,B.R2,w,w,w)],x.p),B.F,w,B.e,B.j,0,B.p),1)},
$S:129}
A.dMF.prototype={
$0(){var w=this.a
return w.n(new A.dME(w))},
$S:0}
A.dME.prototype={
$0(){return this.a.fx=null},
$S:0}
A.d4J.prototype={
$0(){var w=null,v=C.j0(w,w,w,w,C.dr(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,B.I,w,w,!0,w,w,w,w,w,D.cGZ,w,w),this.a),B.a5,B.cn,w,B.eL,B.cm)
v.fD()
return v},
$S:328}
A.d4K.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.v(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1825}
A.f_x.prototype={
$0(){return D.dgc},
$S:z+78}
A.f_y.prototype={
$0(){return D.dEF},
$S:z+79}
A.f_z.prototype={
$0(){return D.dge},
$S:z+80}
A.f_A.prototype={
$0(){return D.daB},
$S:z+81}
A.f_B.prototype={
$0(){return D.dga},
$S:z+82}
A.f_C.prototype={
$0(){return D.dCM},
$S:z+83}
A.f_D.prototype={
$0(){return D.dCK},
$S:z+84}
A.epk.prototype={
$0(){return C.a7(this.a,!1).oZ()},
$S:0}
A.epl.prototype={
$0(){var w=this.a
return w.n(new A.epj(w))},
$S:0}
A.epj.prototype={
$0(){var w=this.a
return w.d=B.o.J(w.gaNV()+1,16)},
$S:0}
A.epm.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.h74(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.b3(18,18)
q=s.d
p=new C.ax(q.j(0.5),1,B.r,-1)
o=C.a([q.j(0.28),D.b6Y],u)
k.push(C.aJ(n,C.p(n,C.u(C.a([C.V(s.c,q,n,n,n,30),B.P,new C.w(s.a,n,D.etY,n,B.L,n,n,n,n,2,n,n),B.d5,new C.w(s.b,n,D.eyR,n,B.L,n,n,n,n,2,n,n)],l),B.m,n,B.b5,B.j,0,B.p),B.h,n,n,new C.o(n,n,new C.c2(p,p,p,p),new C.bv(r,r,r,r),n,new C.a8(B.ax,B.aD,B.x,o,n,n),B.n),n,v,n,n,B.ch,n,n,m),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.epi(d,s),n,n,n,n,n,n,!1,B.af))}return C.cb(B.fB,k,B.bw,10,10)},
$S:168}
A.epi.prototype={
$0(){return C.a7(this.a,!1).cr(C.eH(new A.eph(this.b),!1,null,x.H))},
$S:0}
A.eph.prototype={
$1(d){return this.a.e.$0()},
$S:43}
A.ehK.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
A.ehV.prototype={
$0(){return A.qj(this.b,this.a.d,"solar-system")},
$S:0}
A.ehW.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.ap(e.b,e.d)
u.ch=t
t=C.a([C.aJ(B.c5,C.b2(v,v,v,new A.bnF(u,v),t),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.ehS(u),new A.ehT(u),v,v,v,v,v,v,v,new A.ehU(u),v,v,v,!1,B.af)],x.p)
w=this.b
if(w!=null)t.push(C.an(8,u.c0v(w),v,v,10,10,v,v))
return new C.eo(new C.am(B.V,v,B.aX,B.q,t,v),u.d)},
$S:197}
A.ehS.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:334}
A.ehT.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=B.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ap(0,d.a)},
$S:242}
A.ehU.prototype={
$1(d){var w=this.a,v=w.c0y(d.b)
if(v!=null)w.aUQ(v)},
$S:53}
A.ehX.prototype={
$0(){var w=this.a
return w.n(new A.ehR(w))},
$S:0}
A.ehR.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=B.J
w.w=1},
$S:0}
A.ehY.prototype={
$0(){return this.a.aUQ(this.b)},
$S:0}
A.ehZ.prototype={
$1(d){var w=this.a
return w.n(new A.ehQ(w,d))},
$S:6}
A.ehQ.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
A.ei_.prototype={
$1(d){var w=this.a
return w.n(new A.ehP(w,d))},
$S:6}
A.ehP.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.ei0.prototype={
$0(){var w=this.a
return w.n(new A.ehO(w))},
$S:0}
A.ehO.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
A.ei1.prototype={
$0(){var w=this.a
return w.n(new A.ehN(w))},
$S:0}
A.ehN.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
A.ei2.prototype={
$0(){var w=this.a
return w.n(new A.ehM(w))},
$S:0}
A.ehM.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
A.ei3.prototype={
$0(){var w=this.a
return w.n(new A.ehL(w))},
$S:0}
A.ehL.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
A.ehJ.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=B.k.ab(d/365.25,w)+" Earth years"}else w=B.k.ab(d,0)+" Earth days"
return w},
$S:362}
A.ehI.prototype={
$2(d,e){var w=null
return C.C(C.u(C.a([C.d(d,w,w,w,w,w,w,D.aIS,w,w,w),B.v6,C.d(e,w,2,B.Z,w,w,w,B.R2,w,w,w)],x.p),B.F,w,B.e,B.j,0,B.p),1)},
$S:129}
A.ehH.prototype={
$0(){var w=this.a
return w.n(new A.ehG(w))},
$S:0}
A.ehG.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
A.eJ8.prototype={
$0(){var w=null,v=C.j0(w,w,w,w,C.dr(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,B.I,w,w,!0,w,w,w,w,w,F.ND,w,w),this.a),B.a5,B.cn,w,B.eL,B.cm)
v.fD()
return v},
$S:328}
A.eJ9.prototype={
$1(d){return d.c>0},
$S:z+8}
A.eJa.prototype={
$1(d){return d.c>0},
$S:z+8}
A.dNn.prototype={
$0(){},
$S:0}
A.dNQ.prototype={
$1(d){return d!=null},
$S:355}
A.dNC.prototype={
$0(){var w=this.a
return w.n(new A.dNt(w,this.b))},
$S:0}
A.dNt.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
A.dND.prototype={
$0(){var w=this.a
return w.n(new A.dNs(w))},
$S:0}
A.dNs.prototype={
$0(){return this.a.f=!1},
$S:0}
A.dNE.prototype={
$0(){var w=this.a
return w.n(new A.dNB(w))},
$S:0}
A.dNB.prototype={
$0(){return this.a.f=!0},
$S:0}
A.dNI.prototype={
$0(){var w=this.a
return w.n(new A.dNA(w))},
$S:0}
A.dNA.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
A.dNJ.prototype={
$1(d){var w=this.a
return w.n(new A.dNz(w,d))},
$S:6}
A.dNz.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dNK.prototype={
$0(){var w=this.a
return w.n(w.gcmT())},
$S:0}
A.dNL.prototype={
$1(d){var w=this.a
return w.n(new A.dNy(w,d))},
$S:6}
A.dNy.prototype={
$0(){return this.a.at=this.b},
$S:0}
A.dNM.prototype={
$1(d){var w=this.a
return w.n(new A.dNx(w,d))},
$S:6}
A.dNx.prototype={
$0(){return this.a.ax=this.b},
$S:0}
A.dNN.prototype={
$1(d){var w=this.a
return w.n(new A.dNw(w,d))},
$S:6}
A.dNw.prototype={
$0(){return this.a.ay=this.b},
$S:0}
A.dNO.prototype={
$1(d){var w=this.a
return w.n(new A.dNv(w,d))},
$S:6}
A.dNv.prototype={
$0(){return this.a.ch=this.b},
$S:0}
A.dNP.prototype={
$0(){var w=this.a
return w.n(new A.dNu(w))},
$S:0}
A.dNu.prototype={
$0(){return this.a.ay=4},
$S:0}
A.dNF.prototype={
$0(){var w=this.a
return w.n(new A.dNr(w))},
$S:0}
A.dNr.prototype={
$0(){return this.a.ay=7.67},
$S:0}
A.dNG.prototype={
$0(){var w=this.a
return w.n(new A.dNq(w))},
$S:0}
A.dNq.prototype={
$0(){return this.a.ay=9},
$S:0}
A.dNH.prototype={
$0(){var w=this.a
return w.n(new A.dNp(w))},
$S:0}
A.dNp.prototype={
$0(){return this.a.ay=11.3},
$S:0}
A.dNm.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bU(0,C.bQ(g,new C.o(D.b5K,g,g,C.m(20),g,g,B.n),B.b7),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.xw[q]
n=C.aX(o.d)
o=C.u(C.a([new C.w(o.a,g,new C.E(!0,n,g,g,g,g,12.5,B.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.w(C.t(D.xw[q].b)+" m/s\xb2",g,D.eyc,g,g,g,g,g,g,g,g,g)],a0),B.m,g,B.e,B.j,0,B.p)
n=p+t
m=C.p(g,g,B.h,B.du,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.V(Q.X4,C.aX(D.xw[q].d),g,g,g,22):C.p(g,g,B.h,g,g,new C.o(C.aX(D.xw[q].d),g,g,g,C.a([new C.a9(0,B.G,C.aX(D.xw[q].d).j(0.6),B.J,10)],u),g,B.a6),g,22,g,g,g,g,g,22)
j=C.p(g,g,B.h,C.aX(D.xw[q].d).j(0.6),g,g,g,3,g,B.fi,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=B.k.ab(i,2)+" s"
h=v[q]==null?"":"to land"
B.d.v(a1,C.a([new C.cE(p,8,g,g,f,g,o,g),new C.cE(n-0.5,54,g,e,g,g,m,g),new C.cE(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cE(p,g,g,8,f,g,C.u(C.a([j,B.au,new C.w(i,g,B.yj,g,g,g,g,g,g,g,g,g),new C.w(h,g,D.eqP,g,g,g,g,g,g,g,g,g)],a0),B.m,g,B.e,B.j,0,B.p),g)],a0))}if(!w.x&&B.d.e7(v,new A.dNl()))a1.push(D.aWK)
return new C.am(B.V,g,B.a9,B.q,a1,g)},
$S:61}
A.dNl.prototype={
$1(d){return d==null},
$S:355}
A.dNo.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=B.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.m(8)
p=C.p(v,v,B.h,v,v,new C.o(B.c.j(0.05),v,v,p,v,v,B.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.dg(v,v,v,v,B.b9,new C.o(v,v,v,C.m(8),v,new C.a8(B.a1,B.a7,B.x,C.a([C.aX(t).j(0.9),C.aX(t).j(0.4)],x.O),v,v),B.n),B.ic,v,26,v,v,v,v,e.b*q)
w=r<100?B.k.ab(r,1):A.Fc(r)
u=u.ax*9.81/s
u=u<10?B.k.ab(u,2):B.k.ab(u,0)
return new C.am(B.V,v,B.a9,B.q,C.a([p,t,C.an(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.ewC,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:61}
A.dNk.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b2(v,v,v,new A.b6I(new C.v(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),B.as)
o=B.w.j(0.55)
p=C.m(14)
q=C.G(B.bG,B.r,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(B.a.q(u,"forever")||B.a.q(u,"again"))u=B.bt
else u=B.a.q(u,"escapes")?B.b3:B.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=B.k.ab(Math.sqrt(58.86870477034412),1)
s=B.k.ab(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+A.Fc(B.k.D(r.cx.gct()-6371,0,9e9))+" km":""
w=x.p
return new C.am(B.V,v,B.aX,B.q,C.a([n,C.an(v,C.p(v,C.u(C.a([u,B.by,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,E.aKr,v,v,v)],w),B.F,v,B.e,B.R,0,B.p),B.h,v,v,new C.o(o,v,q,p,v,v,B.n),v,v,v,v,B.bT,v,v,v),v,v,12,12,8,v)],w),v)},
$S:61}
A.eaE.prototype={
$0(){return A.qj(this.b,this.a.d,"size-compare")},
$S:0}
A.eaF.prototype={
$0(){var w=this.a
return w.n(new A.eaD(w,this.b))},
$S:0}
A.eaD.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.eaG.prototype={
$0(){var w=this.a
return w.n(new A.eaC(w,this.b))},
$S:0}
A.eaC.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.eHi.prototype={
$3(d,e,f){var w,v,u=this.a
$.a1()
w=C.U()
w.r=f.j(0.2).gt(0)
w.z=new C.hG(B.G,Math.max(2,e*0.18))
u.aw(d,e*1.12,w)
w=C.U()
v=C.aq(f,B.w,0.6)
v.toString
w.sav(new C.bS(N.qY,0.5,B.x,null,0,C.a([B.c,f,v],x.O),E.Zz,null).aB(0,C.c1(d,e)))
u.aw(d,e,w)},
$S:711}
A.dw0.prototype={
$1(d){return d.e<=0},
$S:z+86}
A.dvP.prototype={
$1(d){return d.b},
$S:z+57}
A.dvQ.prototype={
$0(){return A.qj(this.b,this.a.d,"black-hole")},
$S:0}
A.dvR.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ap(e.b,e.d)
p.Q=o
o=C.aJ(B.c5,C.b2(q,q,q,new A.b65(p,q),o),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.dvN(p),q,q,q,q,q,q,q,q,q,new A.dvO(p),q,q,q,q,!1,B.af)
w=B.w.j(0.55)
v=C.m(14)
u=C.G(B.bG,B.r,1)
t=p.r
if(t<1000)t=B.k.ab(t,t<10?1:0)+" Suns"
else t=A.faj(t)+" Suns"
t=p.abK("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.an(q,C.p(q,C.A(C.a([t,p.abK("EDGE WIDTH",(s<100?B.k.ab(s,1):A.Fc(s))+" km"),p.abK("TIME",B.k.ab(this.b*100,0)+"%"),p.abK("EATEN",""+p.as)],r),B.m,q,B.e,B.j,0,q,q),B.h,q,q,new C.o(w,q,u,v,q,q,B.n),q,q,q,q,B.bT,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.dQP)
return new C.eo(new C.am(B.V,q,B.aX,B.q,r,q),p.d)},
$S:197}
A.dvO.prototype={
$1(d){return this.a.aUR(d.b)},
$S:23}
A.dvN.prototype={
$1(d){if(B.cA.ag()<0.12)this.a.aUR(d.b)},
$S:18}
A.dvT.prototype={
$1(d){var w=this.a
return w.n(new A.dvM(w,d))},
$S:6}
A.dvM.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
A.dvU.prototype={
$0(){var w=this.a
return w.n(new A.dvL(w))},
$S:0}
A.dvL.prototype={
$0(){return this.a.r=10},
$S:0}
A.dvV.prototype={
$0(){var w=this.a
return w.n(new A.dvK(w))},
$S:0}
A.dvK.prototype={
$0(){return this.a.r=21},
$S:0}
A.dvW.prototype={
$0(){var w=this.a
return w.n(new A.dvJ(w))},
$S:0}
A.dvJ.prototype={
$0(){return this.a.r=43e5},
$S:0}
A.dvX.prototype={
$0(){var w=this.a
return w.n(new A.dvI(w))},
$S:0}
A.dvI.prototype={
$0(){return this.a.r=65e8},
$S:0}
A.dvY.prototype={
$0(){var w=this.a
return w.n(new A.dvH(w))},
$S:0}
A.dvH.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
A.dvZ.prototype={
$0(){var w=this.a
return w.n(new A.dvG(w))},
$S:0}
A.dvG.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
A.dw_.prototype={
$0(){var w=this.a
return w.n(new A.dvF(w))},
$S:0}
A.dvF.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.dvS.prototype={
$0(){var w=this.a
return w.n(new A.dvE(w))},
$S:0}
A.dvE.prototype={
$0(){var w=this.a
B.d.a8(w.z)
w.as=0},
$S:0}
A.dLV.prototype={
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
$S:1826}
A.dLL.prototype={
$0(){return A.qj(this.b,this.a.d,"galaxy")},
$S:0}
A.dLM.prototype={
$0(){var w=this.a
return w.n(new A.dLK(w,this.b))},
$S:0}
A.dLK.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.XQ()},
$S:0}
A.dLN.prototype={
$0(){var w=this.a
return w.n(new A.dLJ(w))},
$S:0}
A.dLJ.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.XQ()}w.cmL()},
$S:0}
A.dLO.prototype={
$1(d){var w=this.a
return w.n(new A.dLI(w,d))},
$S:6}
A.dLI.prototype={
$0(){var w=this.a
w.f=B.k.U(this.b)
w.XQ()},
$S:0}
A.dLP.prototype={
$1(d){var w=this.a
return w.n(new A.dLH(w,d))},
$S:6}
A.dLH.prototype={
$0(){var w=this.a
w.r=this.b
w.XQ()},
$S:0}
A.dLQ.prototype={
$1(d){var w=this.a
return w.n(new A.dLG(w,d))},
$S:6}
A.dLG.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.dLR.prototype={
$1(d){var w=this.a
return w.n(new A.dLF(w,d))},
$S:6}
A.dLF.prototype={
$0(){return this.a.ax=this.b},
$S:0}
A.dLS.prototype={
$0(){var w=this.a
return w.n(new A.dLE(w))},
$S:0}
A.dLE.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
A.dLT.prototype={
$0(){var w=this.a
return w.n(new A.dLD(w))},
$S:0}
A.dLD.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
A.dLU.prototype={
$0(){var w=this.a
return w.n(new A.dLC(w))},
$S:0}
A.dLC.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.d1S.prototype={
$6(d,e,f,g,h,i){return g.ap(0,new C.v((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1827}
A.eak.prototype={
$0(){return A.qj(this.b,this.a.d,"seasons-moon")},
$S:0}
A.eal.prototype={
$0(){var w=this.a
return w.n(new A.eaj(w))},
$S:0}
A.eaj.prototype={
$0(){return this.a.f="seasons"},
$S:0}
A.eam.prototype={
$0(){var w=this.a
return w.n(new A.eai(w))},
$S:0}
A.eai.prototype={
$0(){return this.a.f="moon"},
$S:0}
A.ean.prototype={
$0(){var w=this.a
return w.n(new A.eah(w))},
$S:0}
A.eah.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
A.eao.prototype={
$0(){var w=this.a
return w.n(new A.eag(w))},
$S:0}
A.eag.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
A.eap.prototype={
$1(d){var w=this.a
return w.n(new A.eaf(w,d))},
$S:6}
A.eaf.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.eaq.prototype={
$1(d){var w=this.a
return w.n(new A.eae(w,d))},
$S:6}
A.eae.prototype={
$0(){return this.a.z=this.b},
$S:0}
A.ear.prototype={
$1(d){var w=this.a
return w.n(new A.ead(w,d))},
$S:6}
A.ead.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eas.prototype={
$1(d){var w=this.a
return w.n(new A.eac(w,d))},
$S:6}
A.eac.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=A.aIO.prototype
w.bpF=w.p
w=A.aHR.prototype
w.boG=w.p
w=A.aHS.prototype
w.boH=w.p
w=A.aHX.prototype
w.boM=w.p
w=A.aJB.prototype
w.bqy=w.p
w=A.aIM.prototype
w.bpD=w.p
w=A.aIV.prototype
w.bpM=w.p
w=A.aJ0.prototype
w.bpS=w.p
w=A.aHV.prototype
w.boK=w.p
w=A.aIJ.prototype
w.bpA=w.p
w=A.aIY.prototype
w.bpP=w.p
w=A.aIH.prototype
w.bpy=w.p
w=A.aII.prototype
w.bpz=w.p
w=A.aI7.prototype
w.boY=w.p
w=A.aHN.prototype
w.boC=w.p
w=A.aIf.prototype
w.bp5=w.p
w=A.auz.prototype
w.blR=w.p
w=A.aIw.prototype
w.bpn=w.p
w=A.aIx.prototype
w.bpo=w.p
w=A.aHT.prototype
w.boI=w.p
w=A.aIa.prototype
w.bp0=w.p
w=A.aIF.prototype
w.bpw=w.p
w=A.aJ7.prototype
w.bpZ=w.p
w=A.aIg.prototype
w.bp7=w.p
w=A.aIh.prototype
w.bp8=w.p
w=A.aIi.prototype
w.bp9=w.p
w=A.aIR.prototype
w.bpI=w.p
w=A.aIU.prototype
w.bpL=w.p
w=A.aHQ.prototype
w.boF=w.p
w=A.aId.prototype
w.bp3=w.p
w=A.aIQ.prototype
w.bpH=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i
w(A.aB5.prototype,"gasR","bXv",0)
var s
v(s=A.azx.prototype,"gc3V","c3W",36)
w(s,"gbY0","aTA",0)
w(A.azA.prototype,"gbYX","bYY",0)
u(A.azR.prototype,"gbZ2","bZ3",53)
w(s=A.aE0.prototype,"gcmt","cmu",0)
w(s,"gcaq","ad8",0)
w(s,"gc88","c89",0)
w(s,"gbZ1","aaR",4)
w(s=A.aB4.prototype,"gbzT","a6A",4)
w(s,"gc7q","aWs",0)
w(s,"gcb4","adh",4)
t(s,"gbZ5","aaS",4)
w(A.aBi.prototype,"gbQF","bQG",0)
w(s=A.aAY.prototype,"gcmm","cmn",0)
w(s,"gbAd","bAe",0)
w(s=A.azz.prototype,"gb_w","aw8",0)
v(s,"gbZb","Xf",55)
w(s,"gbZa","aaU",4)
v(s=A.aAX.prototype,"gccZ","auS",59)
v(s,"gcj2","aw4",14)
w(s,"gbE9","aMx",0)
v(s=A.aAV.prototype,"gcth","agh",14)
t(s,"gbZv","atg",0)
w(s,"gcfc","cfd",0)
v(s=A.aA2.prototype,"gbZw","bZx",61)
w(s,"gbZy","bZz",0)
t(s=A.a29.prototype,"gqM","a8",0)
w(s,"gcKz","bc4",0)
w(s=A.aA3.prototype,"gbZD","bZE",0)
w(s,"gcdK","adD",4)
w(s=A.aAH.prototype,"gbZP","ati",0)
w(s,"gbZQ","aU9",0)
w(s=A.aBu.prototype,"gc_K","c_L",0)
t(s,"gc_I","aUt",0)
w(A.aAR.prototype,"gbCJ","aoP",0)
t(A.aB9.prototype,"gc_M","c_N",0)
v(s=A.aAe.prototype,"gc0r","c0s",75)
w(s,"gbHs","bHt",0)
w(s=A.aAf.prototype,"gcmT","cmU",0)
w(s,"gc0w","c0x",0)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(C.aC,[A.ahb,A.Ex,A.u4,A.aOy,A.a0T,A.b69,A.bVL,A.x7,A.B2,A.mW,A.b6S,A.zk,A.bol,A.px,A.qb,A.B6,A.X3,A.acc,A.Zg,A.Bg,A.a9a,A.a9r,A.abm,A.Ek,A.bhp,A.O_,A.Yz,A.a9h,A.a9K,A.Eg,A.aay,A.ab2,A.rA,A.b5J,A.aOn,A.mU,A.vd,A.a7T,A.a8X,A.a29,A.q0,A.b6T,A.aSO,A.bpF,A.aEQ,A.m9,A.a8D,A.a8E,A.uh,A.Ng,A.x5,A.Nf,A.bpA,A.NI,A.ach])
v(C.i1,[A.fck,A.f4a,A.f9K,A.f9L,A.fch,A.fci,A.dUD,A.dUW,A.e9i,A.e8Q,A.e8R,A.e8S,A.e8T,A.e8U,A.e8V,A.e8W,A.e8X,A.e8O,A.e8P,A.e8N,A.e9d,A.e9e,A.e9f,A.dw5,A.dw7,A.dwa,A.dwl,A.bVM,A.bVN,A.eZN,A.eZO,A.eZP,A.eZT,A.eZU,A.eZV,A.dyD,A.dyk,A.dyE,A.dyf,A.dya,A.dyc,A.dyi,A.dyv,A.dyt,A.dyu,A.dys,A.dyp,A.dyr,A.eGN,A.eGu,A.eGB,A.eGK,A.eGo,A.d8q,A.d8r,A.d8n,A.d8o,A.d8p,A.d8s,A.d8t,A.d8u,A.d8v,A.d8w,A.d8x,A.d8y,A.d8z,A.d8A,A.e8e,A.e8f,A.e8g,A.e8h,A.e8c,A.e8d,A.e8J,A.e8l,A.e8n,A.e87,A.e8F,A.e8D,A.e8E,A.e8C,A.e8B,A.e89,A.eiu,A.eis,A.eig,A.eik,A.eif,A.eil,A.eim,A.eiq,A.ep5,A.epb,A.e5j,A.e5k,A.e55,A.e56,A.e54,A.e59,A.e5b,A.e5c,A.eov,A.eow,A.eou,A.eoi,A.eoj,A.eoh,A.eoa,A.eob,A.eop,A.eoq,A.eor,A.eos,A.eot,A.dxM,A.dxN,A.dxO,A.dxF,A.dxI,A.cEy,A.e0N,A.e1b,A.e0R,A.e0Z,A.e1_,A.e0Y,A.e16,A.e4N,A.e4S,A.e4b,A.e3U,A.e45,A.e43,A.e41,A.e42,A.e40,A.dFG,A.dFu,A.dFw,A.dFE,A.dFz,A.dIv,A.dIn,A.dIo,A.dIp,A.cY2,A.cY4,A.cY3,A.du9,A.dua,A.du2,A.du0,A.cx6,A.dMi,A.dMj,A.dMe,A.dMf,A.d3V,A.d3W,A.dy8,A.dxR,A.dy_,A.dy0,A.dy5,A.dy6,A.bH1,A.bHb,A.bH7,A.bHc,A.bH2,A.bHa,A.bH9,A.bH8,A.bCt,A.bCs,A.bCk,A.bCl,A.bCj,A.bCm,A.bCa,A.bCc,A.bC7,A.bC8,A.bC9,A.eZW,A.eZX,A.eZY,A.eZM,A.eZZ,A.eZL,A.f__,A.eZQ,A.eZK,A.eZR,A.eZJ,A.eZS,A.eZI,A.dIA,A.dXB,A.dXt,A.d8J,A.d8M,A.dXU,A.dXF,A.dXP,A.dXQ,A.dXR,A.c9y,A.et8,A.dI8,A.dI9,A.dIa,A.dIc,A.e25,A.eoO,A.eoX,A.eoT,A.eoV,A.e0E,A.e0F,A.e0G,A.fvU,A.clF,A.dNj,A.dMJ,A.dMI,A.dMU,A.dMV,A.dMT,A.dMW,A.dNd,A.dNe,A.dNf,A.eph,A.ehS,A.ehT,A.ehU,A.ehZ,A.ei_,A.ehJ,A.eJ9,A.eJa,A.dNQ,A.dNJ,A.dNL,A.dNM,A.dNN,A.dNO,A.dNl,A.eHi,A.dw0,A.dvP,A.dvO,A.dvN,A.dvT,A.dLV,A.dLO,A.dLP,A.dLQ,A.dLR,A.d1S,A.eap,A.eaq,A.ear,A.eas])
v(C.kw,[A.fcj,A.dUI,A.dUG,A.e8Z,A.e9b,A.dyb,A.dyy,A.dDS,A.eGQ,A.eGR,A.eGt,A.eGG,A.eGH,A.eGC,A.eGI,A.eGn,A.e8a,A.e8b,A.e8I,A.e8A,A.e8p,A.ep4,A.e58,A.eol,A.dxE,A.dxJ,A.e12,A.e4R,A.fcB,A.e3Y,A.e3V,A.e47,A.dgs,A.bBG,A.f8u,A.dtX,A.du4,A.bHd,A.bHf,A.bH3,A.bH5,A.bCu,A.ceL,A.bCq,A.bCo,A.dXv,A.d8K,A.d8L,A.dXO,A.c9B,A.dwz,A.dwu,A.e27,A.c9u,A.dN5,A.dMG,A.d4K,A.epm,A.ehW,A.ehI,A.dNm,A.dNo,A.dNk,A.dvR])
v(C.ae,[A.Tl,A.TM,A.Se,A.Sj,A.Ls,A.aE_,A.TL,A.U_,A.Ub,A.TJ,A.U6,A.Sh,A.TD,A.TI,A.TG,A.SE,A.SU,A.S9,A.T7,A.Si,A.afZ,A.SV,A.Tq,A.Ts,A.Ug,A.T1,A.Sf,A.ST,A.TE,A.TQ,A.Ua,A.TC,A.T8,A.Uc,A.TZ,A.T9,A.TR,A.Sd,A.T5,A.TN])
v(C.ag,[A.bfU,A.aIO,A.aHR,A.aHX,A.azR,A.aJB,A.aIM,A.aIV,A.aJ0,A.aIJ,A.aIY,A.aHV,A.aIH,A.aII,A.aAV,A.bfo,A.aI7,A.aHN,A.aIf,A.bfi,A.auz,A.aA3,A.aIw,A.aIx,A.aJ7,A.aIa,A.aHT,A.bfp,A.aAR,A.aB9,A.bgD,A.aIF,A.aIg,A.bgG,A.aIU,A.aIi,A.aIR,A.aHQ,A.aId,A.aIQ])
v(C.jk,[A.dUB,A.dUC,A.dUO,A.dUP,A.dUK,A.dUJ,A.dUL,A.dUH,A.dUM,A.dUF,A.dUN,A.dUE,A.dUS,A.dUR,A.dUT,A.dUQ,A.dUU,A.dUV,A.dUX,A.e9h,A.e9j,A.e9k,A.e90,A.e9_,A.e8Y,A.e96,A.e97,A.e93,A.e98,A.e92,A.e99,A.e9a,A.e91,A.e9c,A.e95,A.e9g,A.e94,A.dws,A.dwr,A.dw4,A.dwt,A.dw6,A.dw8,A.dw9,A.dwb,A.dw1,A.dw2,A.dw3,A.dwi,A.dwj,A.dwk,A.dwh,A.dwm,A.dwg,A.dwn,A.dwf,A.dwo,A.dwe,A.dwp,A.dwd,A.dwq,A.dwc,A.dyh,A.dyg,A.dyl,A.dyd,A.dye,A.dym,A.dyn,A.dyo,A.dyj,A.dy9,A.dyx,A.dyw,A.dyz,A.dyA,A.dyB,A.dyq,A.dyC,A.cF0,A.dDQ,A.dDP,A.dDR,A.f_a,A.f_b,A.f_c,A.f_n,A.f_q,A.f_r,A.f_s,A.f_t,A.f_u,A.f_v,A.f_w,A.f_d,A.f_e,A.f_f,A.f_g,A.f_h,A.f_i,A.f_j,A.f_k,A.f_l,A.f_m,A.f_o,A.f_p,A.eGP,A.eGO,A.eGw,A.eGv,A.eGr,A.eGq,A.eGs,A.eGp,A.eGE,A.eGD,A.eGF,A.eGx,A.eGJ,A.eGA,A.eGL,A.eGz,A.eGM,A.eGy,A.e8j,A.e88,A.e8i,A.e84,A.e8k,A.e8m,A.e85,A.e86,A.e8H,A.e8G,A.e8x,A.e8y,A.e8z,A.e8t,A.e8u,A.e8s,A.e8v,A.e8r,A.e8w,A.e8q,A.e8o,A.d8m,A.eit,A.ei5,A.ei4,A.eie,A.ein,A.eid,A.eio,A.eic,A.eip,A.eib,A.eia,A.eir,A.ei9,A.eih,A.ei8,A.eii,A.ei7,A.eij,A.ei6,A.ep3,A.ep2,A.ep6,A.ep1,A.ep7,A.ep0,A.ep8,A.ep_,A.ep9,A.eoZ,A.epa,A.eoY,A.e57,A.e53,A.e52,A.e51,A.e5d,A.e50,A.e5e,A.e5_,A.e5f,A.e4Z,A.e5g,A.e5h,A.e5i,A.e4Y,A.e5a,A.eok,A.eo9,A.eom,A.eog,A.eon,A.eof,A.eoo,A.eoe,A.eod,A.eoc,A.eo8,A.eo7,A.eo6,A.dxL,A.dxC,A.dxD,A.dxG,A.dxH,A.dxK,A.e10,A.e0S,A.e11,A.e13,A.e0X,A.e14,A.e0W,A.e15,A.e0V,A.e0U,A.e17,A.e0T,A.e18,A.e0Q,A.e19,A.e0P,A.e1a,A.e0O,A.e4H,A.e4I,A.e4P,A.e4O,A.e4Q,A.e4M,A.e4T,A.e4L,A.e4U,A.e4K,A.e4V,A.e4W,A.e4J,A.e4X,A.e4a,A.e3S,A.e3T,A.e3X,A.e3W,A.e46,A.e44,A.e3Z,A.e48,A.e4_,A.e49,A.dFF,A.dFv,A.dFt,A.dFA,A.dFy,A.dFB,A.dFx,A.dFC,A.dFD,A.dIu,A.dIi,A.dIh,A.dIj,A.dIm,A.dIl,A.dIk,A.dIq,A.dIr,A.dIs,A.dIt,A.du8,A.du7,A.dtY,A.du3,A.du1,A.du5,A.du_,A.du6,A.dtZ,A.dMh,A.dMg,A.dM8,A.dMc,A.dMb,A.dMd,A.dMa,A.dM9,A.dy7,A.dxZ,A.dxY,A.dy1,A.dxX,A.dy2,A.dxW,A.dy3,A.dxV,A.dy4,A.dxU,A.dxT,A.dxS,A.bHe,A.bHg,A.bH4,A.bH6,A.bCr,A.bC_,A.bCh,A.bCi,A.bCf,A.bCg,A.bCd,A.bCe,A.bCn,A.bCp,A.bCb,A.bC3,A.bC4,A.bC2,A.bC5,A.bC1,A.bC6,A.bC0,A.dIB,A.dIz,A.dIy,A.dID,A.dIC,A.dIE,A.dIF,A.dXA,A.dXC,A.dXr,A.dXs,A.dXu,A.dXw,A.dXx,A.dXy,A.dXz,A.dXT,A.dXV,A.dXL,A.dXH,A.dXM,A.dXN,A.dXG,A.dXK,A.dXJ,A.dXI,A.dXS,A.f_E,A.f_F,A.f_G,A.f_H,A.f_I,A.f_J,A.f_K,A.f_L,A.c9A,A.c9z,A.et9,A.et5,A.et4,A.et7,A.et6,A.dKB,A.dKC,A.dKw,A.dKy,A.dKz,A.dKx,A.dKA,A.dwA,A.dwx,A.dww,A.dwy,A.dwv,A.dI7,A.dI6,A.dI5,A.dI4,A.dIb,A.dI3,A.dI2,A.dId,A.dI1,A.dIe,A.dI0,A.dIf,A.dIg,A.dI_,A.e21,A.e22,A.e20,A.e23,A.e2_,A.e26,A.e28,A.e24,A.e29,A.eaw,A.eax,A.eau,A.eav,A.eat,A.eay,A.eaz,A.eaA,A.eaB,A.eoS,A.eoU,A.eoR,A.eoQ,A.eoW,A.eoP,A.e0H,A.e0I,A.e0A,A.e0z,A.e0B,A.e0y,A.e0C,A.e0x,A.e0D,A.e0w,A.e0v,A.e0u,A.e0t,A.clG,A.clH,A.fvT,A.clC,A.clB,A.clI,A.clD,A.clE,A.c9w,A.c9v,A.dNi,A.dMM,A.dMK,A.dML,A.dMH,A.dN4,A.dMN,A.dMO,A.dN6,A.dMS,A.dNa,A.dN3,A.dNb,A.dN2,A.dNc,A.dN1,A.dN0,A.dN_,A.dMZ,A.dNg,A.dMY,A.dNh,A.dMX,A.dN7,A.dMR,A.dN8,A.dMQ,A.dN9,A.dMP,A.dMF,A.dME,A.d4J,A.f_x,A.f_y,A.f_z,A.f_A,A.f_B,A.f_C,A.f_D,A.epk,A.epl,A.epj,A.epi,A.ehK,A.ehV,A.ehX,A.ehR,A.ehY,A.ehQ,A.ehP,A.ei0,A.ehO,A.ei1,A.ehN,A.ei2,A.ehM,A.ei3,A.ehL,A.ehH,A.ehG,A.eJ8,A.dNn,A.dNC,A.dNt,A.dND,A.dNs,A.dNE,A.dNB,A.dNI,A.dNA,A.dNz,A.dNK,A.dNy,A.dNx,A.dNw,A.dNv,A.dNP,A.dNu,A.dNF,A.dNr,A.dNG,A.dNq,A.dNH,A.dNp,A.eaE,A.eaF,A.eaD,A.eaG,A.eaC,A.dvQ,A.dvM,A.dvU,A.dvL,A.dvV,A.dvK,A.dvW,A.dvJ,A.dvX,A.dvI,A.dvY,A.dvH,A.dvZ,A.dvG,A.dw_,A.dvF,A.dvS,A.dvE,A.dLL,A.dLM,A.dLK,A.dLN,A.dLJ,A.dLI,A.dLH,A.dLG,A.dLF,A.dLS,A.dLE,A.dLT,A.dLD,A.dLU,A.dLC,A.eak,A.eal,A.eaj,A.eam,A.eai,A.ean,A.eah,A.eao,A.eag,A.eaf,A.eae,A.ead,A.eac])
u(A.bsV,A.aIO)
u(A.aB5,A.bsV)
v(C.n4,[A.bcX,A.b79,A.bnM,A.b5Q,A.bms,A.blV,A.b6w,A.blX,A.bpP,A.bcV,A.bnH,A.bhc,A.box,A.b6R,A.bdP,A.bhd,A.bev,A.b9T,A.b5V,A.bbk,A.aOx,A.bd_,A.bde,A.br_,A.blW,A.bhq,A.bbr,A.bnF,A.b6I,A.bnd,A.b65,A.bbh,A.bmv])
u(A.aHS,A.aHR)
u(A.azx,A.aHS)
u(A.bsF,A.aHX)
u(A.azA,A.bsF)
v(C.mb,[A.ID,A.Z3])
v(C.ar,[A.bmO,A.acm,A.abi,A.O8,A.bnh,A.a5Y,A.b9e,A.b2W,A.dx,A.eF,A.asI,A.ff,A.DP])
u(A.aE0,A.aJB)
u(A.bcU,C.p1)
u(A.aB4,A.aIM)
u(A.bgu,A.aIV)
u(A.aBi,A.aJ0)
u(A.bsU,A.aIJ)
u(A.aAY,A.bsU)
u(A.bt1,A.aIY)
u(A.bgz,A.bt1)
u(A.bsE,A.aHV)
u(A.azz,A.bsE)
u(A.bsS,A.aIH)
u(A.bg8,A.bsS)
u(A.bsT,A.aII)
u(A.aAX,A.bsT)
u(A.aA2,A.aI7)
u(A.bf5,A.aHN)
u(A.bfA,A.aIf)
u(A.b67,A.auz)
u(A.ag_,A.b67)
u(A.bsL,A.aIw)
u(A.bfW,A.bsL)
u(A.bsM,A.aIx)
u(A.aAH,A.bsM)
u(A.bt2,A.aJ7)
u(A.aBu,A.bt2)
u(A.bsH,A.aIa)
u(A.bfv,A.bsH)
u(A.bsD,A.aHT)
u(A.bfa,A.bsD)
u(A.bsR,A.aIF)
u(A.bg6,A.bsR)
u(A.aIh,A.aIg)
u(A.aAe,A.aIh)
u(A.bsZ,A.aIU)
u(A.bgt,A.bsZ)
u(A.bsJ,A.aIi)
u(A.aAf,A.bsJ)
u(A.bsX,A.aIR)
u(A.bgq,A.bsX)
u(A.bsC,A.aHQ)
u(A.bf9,A.bsC)
u(A.bsI,A.aId)
u(A.bfy,A.bsI)
u(A.bsW,A.aIQ)
u(A.bgp,A.bsW)
w(A.aIO,C.ca)
w(A.bsV,A.m9)
w(A.aHR,C.ca)
w(A.aHS,A.m9)
w(A.aHX,C.ca)
w(A.bsF,A.m9)
w(A.aJB,C.eJ)
w(A.aIM,C.ca)
w(A.aIV,C.ca)
w(A.aJ0,C.ca)
w(A.aHV,C.ca)
w(A.bsE,A.m9)
w(A.aIJ,C.ca)
w(A.bsU,A.m9)
w(A.aIY,C.ca)
w(A.bt1,A.m9)
w(A.aIH,C.ca)
w(A.bsS,A.m9)
w(A.aII,C.ca)
w(A.bsT,A.m9)
w(A.aI7,C.ca)
w(A.aHN,C.ca)
w(A.aIf,C.ca)
w(A.auz,C.ca)
w(A.b67,A.m9)
w(A.aIw,C.ca)
w(A.bsL,A.m9)
w(A.aIx,C.ca)
w(A.bsM,A.m9)
w(A.aHT,C.ca)
w(A.bsD,A.m9)
w(A.aIa,C.ca)
w(A.bsH,A.m9)
w(A.aIF,C.ca)
w(A.bsR,A.m9)
w(A.aJ7,C.ca)
w(A.bt2,A.m9)
w(A.aIg,C.ca)
w(A.aIh,A.m9)
w(A.aIi,C.ca)
w(A.bsJ,A.m9)
w(A.aIR,C.ca)
w(A.bsX,A.m9)
w(A.aIU,C.ca)
w(A.bsZ,A.m9)
w(A.aHQ,C.ca)
w(A.bsC,A.m9)
w(A.aId,C.ca)
w(A.bsI,A.m9)
w(A.aIQ,C.ca)
w(A.bsW,A.m9)})()
C.kd(b.typeUniverse,JSON.parse('{"Tl":{"ae":[],"r":[]},"bfU":{"ag":["Tl"]},"TM":{"ae":[],"r":[]},"aB5":{"ag":["TM"]},"bcX":{"az":[]},"Se":{"ae":[],"r":[]},"azx":{"ag":["Se"]},"Sj":{"ae":[],"r":[]},"azA":{"ag":["Sj"]},"b79":{"az":[]},"acm":{"ar":[],"r":[]},"abi":{"ar":[],"r":[]},"aE_":{"ae":[],"r":[]},"Ls":{"ae":[],"r":[]},"azR":{"ag":["Ls"]},"bmO":{"ar":[],"r":[]},"O8":{"ar":[],"r":[]},"bnM":{"az":[]},"bnh":{"ar":[],"r":[]},"b5Q":{"az":[]},"aE0":{"ag":["aE_"]},"bms":{"az":[]},"blV":{"az":[]},"b6w":{"az":[]},"blX":{"az":[]},"bpP":{"az":[]},"TL":{"ae":[],"r":[]},"bcU":{"az":[]},"aB4":{"ag":["TL"]},"bcV":{"az":[]},"U_":{"ae":[],"r":[]},"Ub":{"ae":[],"r":[]},"bgu":{"ag":["U_"]},"bnH":{"az":[]},"aBi":{"ag":["Ub"]},"TJ":{"ae":[],"r":[]},"U6":{"ae":[],"r":[]},"Sh":{"ae":[],"r":[]},"aAY":{"ag":["TJ"]},"bhc":{"az":[]},"bgz":{"ag":["U6"]},"box":{"az":[]},"azz":{"ag":["Sh"]},"b6R":{"az":[]},"TD":{"ae":[],"r":[]},"TI":{"ae":[],"r":[]},"bg8":{"ag":["TD"]},"bdP":{"az":[]},"aAX":{"ag":["TI"]},"bhd":{"az":[]},"TG":{"ae":[],"r":[]},"SE":{"ae":[],"r":[]},"SU":{"ae":[],"r":[]},"aAV":{"ag":["TG"]},"bev":{"az":[]},"bfo":{"ag":["SE"]},"aA2":{"ag":["SU"]},"b9T":{"az":[]},"S9":{"ae":[],"r":[]},"T7":{"ae":[],"r":[]},"Si":{"ae":[],"r":[]},"bf5":{"ag":["S9"]},"b5V":{"az":[]},"bfA":{"ag":["T7"]},"bbk":{"az":[]},"bfi":{"ag":["Si"]},"aOx":{"az":[]},"afZ":{"ae":[],"r":[]},"ag_":{"ag":["afZ"]},"SV":{"ae":[],"r":[]},"aA3":{"ag":["SV"]},"Tq":{"ae":[],"r":[]},"Ts":{"ae":[],"r":[]},"bfW":{"ag":["Tq"]},"bd_":{"az":[]},"aAH":{"ag":["Ts"]},"bde":{"az":[]},"a5Y":{"ar":[],"r":[]},"Ug":{"ae":[],"r":[]},"T1":{"ae":[],"r":[]},"Sf":{"ae":[],"r":[]},"ST":{"ae":[],"r":[]},"TE":{"ae":[],"r":[]},"TQ":{"ae":[],"r":[]},"Ua":{"ae":[],"r":[]},"TC":{"ae":[],"r":[]},"aBu":{"ag":["Ug"]},"br_":{"az":[]},"bfv":{"ag":["T1"]},"blW":{"az":[]},"bfa":{"ag":["Sf"]},"bfp":{"ag":["ST"]},"bhq":{"az":[]},"aAR":{"ag":["TE"]},"aB9":{"ag":["TQ"]},"bgD":{"ag":["Ua"]},"bg6":{"ag":["TC"]},"b9e":{"ar":[],"r":[]},"b2W":{"ar":[],"r":[]},"dx":{"ar":[],"r":[]},"eF":{"ar":[],"r":[]},"asI":{"ar":[],"r":[]},"ff":{"ar":[],"r":[]},"DP":{"ar":[],"r":[]},"T8":{"ae":[],"r":[]},"aAe":{"ag":["T8"]},"bbr":{"az":[]},"Uc":{"ae":[],"r":[]},"bgG":{"ag":["Uc"]},"TZ":{"ae":[],"r":[]},"T9":{"ae":[],"r":[]},"TR":{"ae":[],"r":[]},"bgt":{"ag":["TZ"]},"bnF":{"az":[]},"aAf":{"ag":["T9"]},"b6I":{"az":[]},"bgq":{"ag":["TR"]},"bnd":{"az":[]},"Sd":{"ae":[],"r":[]},"T5":{"ae":[],"r":[]},"TN":{"ae":[],"r":[]},"bf9":{"ag":["Sd"]},"b65":{"az":[]},"bfy":{"ag":["T5"]},"bbh":{"az":[]},"bgp":{"ag":["TN"]},"bmv":{"az":[]}}'))
C.Og(b.typeUniverse,JSON.parse('{"m9":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.aA
return{F:w("cX"),G:w("x"),l:w("bt<n,n>"),J:w("bt<n,P>"),I:w("bt<n,H>"),Z:w("a_"),M:w("M<d3>"),f5:w("M<afR>"),gh:w("M<aOn>"),Y:w("M<a0T>"),V:w("M<a9>"),O:w("M<x>"),dh:w("M<QN>"),aJ:w("M<au<aC>>"),w:w("M<a_>"),k:w("M<al<x>>"),x:w("M<al<QN>>"),gO:w("M<al<al<P>>>"),bj:w("M<al<n>>"),b:w("M<al<P>>"),ez:w("M<a0<n,aC>>"),g:w("M<v>"),bz:w("M<vd>"),ds:w("M<apQ>"),v:w("M<hx>"),R:w("M<+(v,P)>"),ev:w("M<+(v,H)>"),L:w("M<+(n,n)>"),fT:w("M<+(P,r)>"),T:w("M<+(H,n)>"),u:w("M<+(H,H)>"),c:w("M<+(n,n,a_)>"),e:w("M<+(n,P,P,H)>"),o:w("M<+(n,H,n,H)>"),d:w("M<+(n,n,P,P,a0<n,P>)>"),_:w("M<u4>"),q:w("M<cI>"),fQ:w("M<a7T>"),s:w("M<n>"),cF:w("M<ao>"),X:w("M<vn>"),B:w("M<a8D>"),p:w("M<r>"),bL:w("M<a8X>"),C:w("M<l2>"),aq:w("M<b5J>"),a_:w("M<a9a>"),cS:w("M<a9h>"),cB:w("M<mW>"),ba:w("M<a9r>"),d9:w("M<NI>"),bi:w("M<a9K>"),eW:w("M<B6>"),fY:w("M<X3>"),aX:w("M<Eg>"),ea:w("M<aay>"),gB:w("M<ab2>"),ed:w("M<O_>"),g4:w("M<bhp>"),aS:w("M<Yz>"),ac:w("M<abm>"),cd:w("M<Bg>"),fr:w("M<acc>"),e4:w("M<Zg>"),r:w("M<ach>"),au:w("M<aEQ>"),f7:w("M<Q>"),n:w("M<P>"),t:w("M<H>"),dS:w("M<az?>"),d4:w("M<n?>"),gJ:w("cn<ag_>"),A:w("cn<ag<ae>>"),bF:w("al<x>"),ew:w("al<aC>"),a:w("al<@>"),bW:w("al<H>"),h:w("a0<n,@>"),f:w("a0<@,@>"),bd:w("I<mU,n>"),dv:w("I<n,n>"),fR:w("I<+(P,r),r>"),m:w("iA"),gA:w("y5"),P:w("cp"),K:w("aC"),W:w("vd"),D:w("mU"),fA:w("AP"),N:w("n"),bO:w("ao"),j:w("ma"),e7:w("bm<P>"),cL:w("a8E"),gj:w("cv<n>"),dg:w("e2<qb>"),E:w("b69"),a2:w("B2"),f3:w("qb"),es:w("Ek"),U:w("mz"),y:w("Q"),i:w("P"),z:w("@"),S:w("H"),Q:w("al<@>?"),fF:w("a0<@,@>?"),cK:w("aC?"),az:w("q1?"),dk:w("n?"),cD:w("P?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aO_=new C.d3(0,0.85)
D.eVt=new C.w("Tap once to start the chain",null,F.QW,null,null,null,null,null,null,null,null,null)
D.aNy=new C.bE(D.aO_,null,null,D.eVt,null)
D.aNR=new C.d3(0,0.1)
D.aOT=new A.aOy(0,0,0)
D.I7=new A.aOy(0,0.5,0)
D.aPq=new C.ax(B.bt,1,B.r,-1)
D.aR0=new C.aV(0,1/0,0,250)
D.aJN=new C.E(!0,B.c3,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOn=new C.w("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aJN,null,B.L,null,null,null,null,null,null,null)
D.dLT=new C.B(B.nl,D.eOn,null)
D.aWt=new C.cw(B.B,null,null,D.dLT,null)
D.eRP=new C.w("Press Drop! and watch them fall from 20 metres.",null,B.kd,null,B.L,null,null,null,null,null,null,null)
D.dLX=new C.B(B.nl,D.eRP,null)
D.aWK=new C.cw(B.B,null,null,D.dLX,null)
D.ezb=new C.E(!0,B.jb,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWd=new C.w("Draw anywhere",null,D.ezb,null,null,null,null,null,null,null,null,null)
D.aWO=new C.cw(B.B,null,null,D.eWd,null)
D.eFm=new C.w("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aJN,null,B.L,null,null,null,null,null,null,null)
D.dMA=new C.B(B.DG,D.eFm,null)
D.aX5=new C.cw(B.B,null,null,D.dMA,null)
D.a7T=new C.x(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,B.t)
D.aYO=new C.x(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,B.t)
D.aZq=new C.x(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,B.t)
D.b_9=new C.x(1,1,0.16470588235294117,0.10196078431372549,B.t)
D.Ta=new C.x(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,B.t)
D.b_e=new C.x(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,B.t)
D.b_i=new C.x(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,B.t)
D.b_m=new C.x(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,B.t)
D.Tb=new C.x(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,B.t)
D.b0n=new C.x(1,0.16470588235294117,0.16470588235294117,0.2,B.t)
D.b1x=new C.x(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,B.t)
D.a8V=new C.x(1,1,0.23137254901960785,0.12156862745098039,B.t)
D.b1W=new C.x(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,B.t)
D.b20=new C.x(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,B.t)
D.z4=new C.x(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,B.t)
D.b2B=new C.x(1,1,0.9686274509803922,0.8,B.t)
D.a9f=new C.x(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,B.t)
D.b3b=new C.x(1,1,0.47843137254901963,0.09411764705882353,B.t)
D.b3i=new C.x(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,B.t)
D.a9q=new C.x(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,B.t)
D.TC=new C.x(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,B.t)
D.b3M=new C.x(1,0.984313725490196,0.6509803921568628,0.8509803921568627,B.t)
D.a9v=new C.x(1,1,0.5411764705882353,0.5411764705882353,B.t)
D.TJ=new C.x(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,B.t)
D.a9D=new C.x(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,B.t)
D.a9H=new C.x(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,B.t)
D.b5f=new C.x(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,B.t)
D.b5h=new C.x(1,0.043137254901960784,0.10588235294117647,0.2,B.t)
D.b5l=new C.x(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,B.t)
D.aa1=new C.x(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,B.t)
D.b5K=new C.x(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,B.t)
D.CY=new C.x(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,B.t)
D.aac=new C.x(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,B.t)
D.b6M=new C.x(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,B.t)
D.b6P=new C.x(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,B.t)
D.b6Y=new C.x(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,B.t)
D.b70=new C.x(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,B.t)
D.b7k=new C.x(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,B.t)
D.aaP=new C.x(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,B.t)
D.b7Y=new C.x(1,0.7490196078431373,0.8431372549019608,1,B.t)
D.b8r=new C.x(1,1,0.41568627450980394,0,B.t)
D.b8A=new C.x(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,B.t)
D.rq=new C.x(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,B.t)
D.b8Y=new C.x(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,B.t)
D.b9e=new C.x(1,1,0.9529411764705882,0.6274509803921569,B.t)
D.b9i=new C.x(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,B.t)
D.bct=new C.b7(11e6)
D.ac0=new C.L(0,0,7,0)
D.bdv=new C.L(0,0,8,6)
D.ac2=new C.L(0,0,9,0)
D.be0=new C.L(10,0,10,4)
D.be4=new C.L(10,10,10,6)
D.acb=new C.L(10,6,10,2)
D.UZ=new C.L(10,6,10,4)
D.bej=new C.L(10,6,10,8)
D.bel=new C.L(10,8,0,10)
D.beX=new C.L(12,8,8,8)
D.bf2=new C.L(14,0,14,30)
D.act=new C.L(14,0,14,6)
D.bf3=new C.L(14,10,10,10)
D.acz=new C.L(14,10,8,12)
D.bfy=new C.L(14,8,14,6)
D.bg0=new C.L(16,4,16,28)
D.bga=new C.L(16,8,16,12)
D.bj0=new C.L(4,4,6,2)
D.bj2=new C.L(4,4,8,2)
D.bjA=new C.L(8,14,8,12)
D.bjL=new C.L(8,6,16,0)
D.eEy=new C.w("REACTION LAB",null,V.aKm,null,null,null,null,B.Z,null,1,null,null)
D.bko=new C.bF(1,B.bn,D.eEy,null)
D.ew7=new C.E(!0,B.c,null,null,null,null,17,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHr=new C.w("CORE PROTOCOL",null,D.ew7,null,null,null,null,null,null,null,null,null)
D.bkA=new C.bF(1,B.bn,D.eHr,null)
D.eDk=new C.w("Wire selected",null,B.h7,null,null,null,null,null,null,null,null,null)
D.blo=new C.bF(1,B.bn,D.eDk,null)
D.afB=new C.a_(62712,"MaterialIcons",!1)
D.bot=new C.a_(62878,"MaterialIcons",!1)
D.X9=new C.a_(62908,"MaterialIcons",!1)
D.bow=new C.a_(62918,"MaterialIcons",!1)
D.box=new C.a_(62931,"MaterialIcons",!1)
D.boz=new C.a_(62951,"MaterialIcons",!1)
D.boB=new C.a_(62970,"MaterialIcons",!1)
D.boQ=new C.a_(63064,"MaterialIcons",!1)
D.boS=new C.a_(63070,"MaterialIcons",!1)
D.wQ=new C.a_(63128,"MaterialIcons",!1)
D.Em=new C.a_(63726,"MaterialIcons",!1)
D.bqc=new C.a_(983122,"MaterialIcons",!1)
D.bqq=new C.a_(983247,"MaterialIcons",!1)
D.bqx=new C.a_(983316,"MaterialIcons",!1)
D.bqE=new C.a_(983415,"MaterialIcons",!1)
D.bqF=new C.a_(983417,"MaterialIcons",!1)
D.bqG=new C.a_(983442,"MaterialIcons",!1)
D.bqH=new C.a_(983443,"MaterialIcons",!1)
D.bqO=new C.a_(983501,"MaterialIcons",!1)
D.bqZ=new C.a_(983616,"MaterialIcons",!1)
D.agY=new C.a_(983617,"MaterialIcons",!1)
D.br_=new C.a_(983624,"MaterialIcons",!1)
D.brt=new C.a_(984561,"MaterialIcons",!1)
D.bs1=new C.ac(B.wW,24,B.aM,null,null,null)
D.bsL=new C.ac(D.wQ,23,B.al,null,null,null)
D.btk=new C.ac(B.lZ,21,B.al,null,null,null)
D.btJ=new C.ac(B.p6,22,B.al,null,null,null)
D.bqb=new C.a_(983117,"MaterialIcons",!1)
D.buF=new C.ac(D.bqb,28,B.c,null,null,null)
D.buV=new C.ac(B.iZ,18,null,null,null,null)
D.bwD=new C.ac(B.e4,21,B.cN,null,null,null)
D.bwS=new C.ac(B.m_,null,B.al,null,null,null)
D.bx1=new C.ac(B.Y4,21,B.al,null,null,null)
D.aic=new C.ac(B.es,19,null,null,null,null)
D.m2=new C.ac(B.uu,21,B.al,null,null,null)
D.bAh=new C.ac(B.wO,21,B.al,null,null,null)
D.bAo=new C.ac(B.iZ,21,B.al,null,null,null)
D.bBd=new C.ac(B.fy,20,B.aB,null,null,null)
D.bBQ=new C.ac(B.dO,null,B.aM,null,null,null)
D.bC9=new C.ac(B.jF,null,B.aB,null,null,null)
D.cUe=w([B.dH,B.dc,B.dH],x.O)
D.bEc=new C.a8(B.a1,B.a7,B.x,D.cUe,null,null)
D.cAc=w([B.cf,B.bv],x.O)
D.bEk=new C.a8(B.b4,B.bb,B.x,D.cAc,null,null)
D.cAy=w([B.ja,B.hq],x.O)
D.bEB=new C.a8(B.b4,B.bb,B.x,D.cAy,null,null)
D.ajd=new C.a8(B.b4,B.bb,B.x,I.ZJ,null,null)
D.cy5=w([B.nM,B.hQ],x.O)
D.bFc=new C.a8(B.b4,B.bb,B.x,D.cy5,null,null)
D.czW=w([B.fs,B.aG],x.O)
D.bFk=new C.a8(B.b4,B.bb,B.x,D.czW,null,null)
D.c7q=w([B.cf,B.fM],x.O)
D.bFQ=new C.a8(B.a1,B.a7,B.x,D.c7q,null,null)
D.b3Q=new C.x(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,B.t)
D.aYU=new C.x(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,B.t)
D.cvM=w([D.b3Q,D.aYU],x.O)
D.bGm=new C.a8(B.b4,B.bb,B.x,D.cvM,null,null)
D.bGX=new C.a8(B.ax,B.aD,B.x,B.ZF,null,null)
D.b7y=new C.x(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,B.t)
D.cZ_=w([D.b7y,B.Iz],x.O)
D.bH2=new C.a8(B.b4,B.bb,B.x,D.cZ_,null,null)
D.cIe=w([B.aG,B.w],x.O)
D.bH7=new C.a8(B.b4,B.bb,B.x,D.cIe,null,null)
D.b73=new C.x(1,0.788235294117647,0.6509803921568628,0.4196078431372549,B.t)
D.b7E=new C.x(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,B.t)
D.cjW=w([B.J6,D.b73,D.b7E],x.O)
D.bHh=new C.a8(B.b4,B.bb,B.x,D.cjW,null,null)
D.c7M=w([B.dC,B.hS],x.O)
D.bHw=new C.a8(B.b4,B.bb,B.x,D.c7M,null,null)
D.bHC=new C.a8(B.ax,B.aD,B.x,B.O1,null,null)
D.ajG=w([0,2,4,6,7,9,11],x.t)
D.bIb=w([0,4,7],x.t)
D.ajK=w([0,4,7,12],x.t)
D.bIc=w([0,4,7,4],x.t)
D.arO=w([B.fY,B.q6],x.O)
D.aro=w([B.hT,B.cW],x.O)
D.apT=w([B.bE,B.dN],x.O)
D.csm=w([B.aM,B.dC],x.O)
D.cyq=w([B.cN,B.f4],x.O)
D.cQr=w([B.cd,B.lJ],x.O)
D.app=w([B.dh,B.kT],x.O)
D.cx9=w([B.bP,B.aI],x.O)
D.bIw=w([D.arO,D.aro,B.ZN,D.apT,D.csm,D.cyq,B.aqZ,D.cQr,D.app,D.cx9],x.k)
D.ajN=w([1],x.n)
D.bNa=w([120,220,380],x.t)
D.bQV=w([12,16,19,24],x.t)
D.bR3=w([1400,800,450,2400],x.t)
D.bV2=w([1,2,3],x.n)
D.bVd=w([1,-1],x.n)
D.bVe=w([0,0.6,1],x.n)
D.bZm=w([250,450,900,1500],x.t)
D.c7o=w([B.aH,B.cV,B.bq,B.b3,B.bE,B.c,B.aG],x.O)
D.aZB=new C.x(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,B.t)
D.b7m=new C.x(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,B.t)
D.b5M=new C.x(1,0.7450980392156863,0.5411764705882353,0.4,B.t)
D.b9S=new C.x(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,B.t)
D.b57=new C.x(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,B.t)
D.aoI=w([D.aZB,D.b7m,D.b5M,D.b9S,D.b57],x.O)
D.e3a=new C.S("type","Typewriter")
D.e_b=new C.S("bounce","Bounce")
D.e3x=new C.S("wave","Wave")
D.e47=new C.S("zoom","Zoom")
D.ceR=w([D.e3a,D.e_b,D.e3x,B.a2t,E.aG2,D.e47,E.aG4],x.L)
D.cf2=w([50,25,75],x.t)
D.cjh=w([1,2,3,4,5,6,7],x.n)
D.ckr=w([0,5,10,15,18,20,25],x.t)
D.e0d=new C.S("fish","Fish")
D.e0f=new C.S("fly","Fireflies")
D.e_9=new C.S("bird","Birds")
D.coz=w([D.e0d,D.e0f,D.e_9],x.L)
D.csD=w([900,500,250,1600],x.t)
D.cw5=w([0.78,1],x.n)
D.apU=w([0,2,4,7,9,12,14,16],x.t)
D.dMZ=new A.mU("battery","Battery","\ud83d\udd0b",B.bt,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.dN0=new A.mU("solar","Solar panel","\u2600\ufe0f",B.cV,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.dNb=new A.mU("crank","Hand crank","\ud83d\udd04",B.dh,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.dN5=new A.mU("turbine","Wind turbine","\ud83c\udf2c\ufe0f",B.b3,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.dN2=new A.mU("switch","Switch","\ud83c\udf9a\ufe0f",B.bE,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.dNc=new A.mU("fuse","Fuse","\ud83e\uddef",B.cN,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.dMY=new A.mU("pot","Dimmer knob","\ud83c\udf9b\ufe0f",B.hT,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.dN8=new A.mU("resistor","Resistor","\u3030\ufe0f",B.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.dN9=new A.mU("bulb","Light bulb","\ud83d\udca1",B.j6,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.dN1=new A.mU("led","LED","\ud83d\udd34",B.aH,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.dN3=new A.mU("motor","Motor","\u2699\ufe0f",B.bP,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.dN7=new A.mU("buzzer","Buzzer","\ud83d\udd14",B.cd,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.dN_=new A.mU("heater","Heater","\ud83d\udd25",B.dh,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.dN6=new A.mU("capacitor","Capacitor","\ud83e\udeab",B.cK,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.dN4=new A.mU("radio","Radio","\ud83d\udcfb",B.q1,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.dNa=new A.mU("tv","TV","\ud83d\udcfa",B.bc,"Needs about 6 volts or more. With power it shows a picture made of millions of tiny coloured dots.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.Nj=w([D.dMZ,D.dN0,D.dNb,D.dN5,D.dN2,D.dNc,D.dMY,D.dN8,D.dN9,D.dN1,D.dN3,D.dN7,D.dN_,D.dN6,D.dN4,D.dNa],C.aA("M<mU>"))
D.aq_=w(["A","T","C","G"],x.s)
D.cwB=w(["A","U","C","G"],x.s)
D.cx8=w([1,2.76,5.4,8.93,13.3],x.n)
D.cxO=w([B.aG,B.aH,B.dh,B.cV,B.bq,B.cB,B.c9,B.bz,B.Iz],x.O)
D.ZH=w([0.04,0.17,0.3],x.n)
D.cy8=w([1,0.6,0.38,0.22,0.12],x.n)
D.cym=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.Fd=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eaq=new A.u4("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eaw=new A.u4("Medium engine","A good all-rounder.",0.3,0.9)
D.eav=new A.u4("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Fe=w([D.eaq,D.eaw,D.eav],x._)
D.dV6=new C.S(6,"Easy")
D.dVm=new C.S(8,"Medium")
D.dSF=new C.S(10,"Hard")
D.cza=w([D.dV6,D.dVm,D.dSF],x.T)
D.aqh=w([0.55,0.78,1],x.n)
D.cAD=w([0.93,0.975,1],x.n)
D.aqr=w([B.c,B.hC,B.pU,B.aG],x.O)
D.cC7=w([1,0.7,0.45,0.28,0.16,0.1,0.06],x.n)
D.cC8=w([1,0.55,0.32,0.2,0.12,0.07],x.n)
D.f_z=new A.x5("Moon",1737,4291941851)
D.f_w=new A.x5("Earth",6371,4281908728)
D.f_A=new A.x5("Neptune",24622,4284524026)
D.f_B=new A.x5("Saturn",58232,4294829706)
D.f_x=new A.x5("Jupiter",69911,4294677052)
D.f_C=new A.x5("Sun",696340,4294688548)
D.f_D=new A.x5("Sirius A",119e4,4290763774)
D.f_u=new A.x5("Arcturus",179e5,4294818420)
D.f_v=new A.x5("Betelgeuse",531e6,4294472049)
D.f_y=new A.x5("UY Scuti",667e6,4293870660)
D.Nt=w([D.f_z,D.f_w,D.f_A,D.f_B,D.f_x,D.f_C,D.f_D,D.f_u,D.f_v,D.f_y],C.aA("M<x5>"))
D.e7c=new C.bz("glow","Glow",B.Xb)
D.e53=new C.bz("rainbow","Rainbow",B.nq)
D.e5o=new C.bz("stars","Stars",B.hL)
D.e4O=new C.bz("sparks","Sparks",B.dO)
D.e6y=new C.bz("fire","Fire",B.uv)
D.cCk=w([D.e7c,D.e53,D.e5o,D.e4O,D.e6y],x.c)
D.aqv=w([B.bq,B.aH,B.cV,B.dc],x.O)
D.cDa=w([0.2,1],x.n)
D.ean=new A.u4("Radar","Shows your height above the ground.",0.1,0)
D.eao=new A.u4("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eal=new A.u4("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aqE=w([D.ean,D.eao,D.eal],x._)
D.e5U=new C.bz("attract","Attract",B.x8)
D.e5I=new C.bz("scare","Scare",B.rU)
D.e4X=new C.bz("food","Food",B.t0)
D.bqh=new C.a_(983158,"MaterialIcons",!1)
D.e6c=new C.bz("hunt","Hunt",D.bqh)
D.cDL=w([D.e5U,D.e5I,D.e4X,D.e6c],x.c)
D.cE7=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cEl=w([47,100,220,470,1000],x.n)
D.aqV=w([0,2,4,7,9],x.t)
D.a1y={volts:0}
D.ayb=new C.bt(D.a1y,[3],x.J)
D.PP=new C.fA(["b","battery",0.2,0.3,D.ayb])
D.dIv={on:0}
D.d2C=new C.bt(D.dIv,[1],x.J)
D.GA=new C.fA(["s","switch",0.5,0.3,D.d2C])
D.e9h=new C.fA(["l","bulb",0.8,0.3,B.m5])
D.cAj=w([D.PP,D.GA,D.e9h],x.d)
D.Gz=new C.d7(["b",0,"s",0])
D.e8y=new C.d7(["s",1,"l",0])
D.e8h=new C.d7(["l",1,"b",1])
D.cPu=w([D.Gz,D.e8y,D.e8h],x.o)
D.czO=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.dSa=new A.q0("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cAj,D.cPu,D.czO)
D.aAA={ohms:0}
D.aye=new C.bt(D.aAA,[220],x.J)
D.e8T=new C.fA(["r","resistor",0.5,0.3,D.aye])
D.e9t=new C.fA(["d","led",0.8,0.3,B.m5])
D.cSa=w([D.PP,D.e8T,D.e9t],x.d)
D.e7X=new C.d7(["b",0,"r",0])
D.e8t=new C.d7(["r",1,"d",0])
D.e81=new C.d7(["d",1,"b",1])
D.cZu=w([D.e7X,D.e8t,D.e81],x.o)
D.cSA=w(["led","diode","indicator"],x.s)
D.dSf=new A.q0("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.cSa,D.cZu,D.cSA)
D.a1x={level:0}
D.d20=new C.bt(D.a1x,[0.2],x.J)
D.e8X=new C.fA(["p","pot",0.5,0.3,D.d20])
D.e9_=new C.fA(["m","motor",0.8,0.3,B.m5])
D.cAB=w([D.PP,D.e8X,D.e9_],x.d)
D.e7W=new C.d7(["b",0,"p",0])
D.e8o=new C.d7(["p",1,"m",0])
D.e8l=new C.d7(["m",1,"b",1])
D.cW0=w([D.e7W,D.e8o,D.e8l],x.o)
D.cPg=w(["fan","motor","spin","dimmer"],x.s)
D.dS9=new A.q0("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cAB,D.cW0,D.cPg)
D.a0c=new C.bt(D.a1x,[0.9],x.J)
D.e9A=new C.fA(["s","solar",0.25,0.3,D.a0c])
D.aG7=new C.fA(["l","bulb",0.75,0.3,B.m5])
D.cCU=w([D.e9A,D.aG7],x.d)
D.e8v=new C.d7(["s",0,"l",0])
D.e8j=new C.d7(["l",1,"s",1])
D.cBg=w([D.e8v,D.e8j],x.o)
D.cWw=w(["solar","sun","without battery","no battery","free"],x.s)
D.dSb=new A.q0("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cCU,D.cBg,D.cWw)
D.e9w=new C.fA(["c","crank",0.25,0.3,D.a0c])
D.cNL=w([D.e9w,D.aG7],x.d)
D.e7Y=new C.d7(["c",0,"l",0])
D.e8i=new C.d7(["l",1,"c",1])
D.cOg=w([D.e7Y,D.e8i],x.o)
D.cNT=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.dS8=new A.q0("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.cNL,D.cOg,D.cNT)
D.d2_=new C.bt(D.a1x,[0.7],x.J)
D.e91=new C.fA(["t","turbine",0.25,0.3,D.d2_])
D.e8S=new C.fA(["m","motor",0.75,0.3,B.m5])
D.cIO=w([D.e91,D.e8S],x.d)
D.e8F=new C.d7(["t",0,"m",0])
D.e8m=new C.d7(["m",1,"t",1])
D.cHX=w([D.e8F,D.e8m],x.o)
D.cMJ=w(["wind","turbine","windmill","water","hydro"],x.s)
D.dS6=new A.q0("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.cIO,D.cHX,D.cMJ)
D.d31=new C.bt(D.a1y,[9],x.J)
D.aG6=new C.fA(["b","battery",0.2,0.3,D.d31])
D.e9e=new C.fA(["r","radio",0.8,0.3,B.m5])
D.cX0=w([D.aG6,D.GA,D.e9e],x.d)
D.e8z=new C.d7(["s",1,"r",0])
D.e8r=new C.d7(["r",1,"b",1])
D.bHW=w([D.Gz,D.e8z,D.e8r],x.o)
D.cVN=w(["radio","music","listen"],x.s)
D.dSe=new A.q0("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.cX0,D.bHW,D.cVN)
D.d32=new C.bt(D.a1y,[12],x.J)
D.e8Z=new C.fA(["b","battery",0.2,0.3,D.d32])
D.e9i=new C.fA(["t","tv",0.8,0.3,B.m5])
D.cAk=w([D.e8Z,D.GA,D.e9i],x.d)
D.e8A=new C.d7(["s",1,"t",0])
D.e8G=new C.d7(["t",1,"b",1])
D.cQu=w([D.Gz,D.e8A,D.e8G],x.o)
D.cX_=w(["tv","television","screen","watch"],x.s)
D.dS4=new A.q0("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cAk,D.cQu,D.cX_)
D.e99=new C.fA(["z","buzzer",0.8,0.3,B.m5])
D.chk=w([D.PP,D.GA,D.e99],x.d)
D.e8B=new C.d7(["s",1,"z",0])
D.e8Q=new C.d7(["z",1,"b",1])
D.cvW=w([D.Gz,D.e8B,D.e8Q],x.o)
D.cUi=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.dSc=new A.q0("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.chk,D.cvW,D.cUi)
D.e8Y=new C.fA(["h","heater",0.8,0.3,B.m5])
D.cLt=w([D.aG6,D.GA,D.e8Y],x.d)
D.e8x=new C.d7(["s",1,"h",0])
D.e87=new C.d7(["h",1,"b",1])
D.cwx=w([D.Gz,D.e8x,D.e87],x.o)
D.c1y=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.dS5=new A.q0("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.cLt,D.cwx,D.c1y)
D.e9k=new C.fA(["s","solar",0.2,0.25,D.a0c])
D.d37=new C.bt(D.aAA,[100],x.J)
D.e9n=new C.fA(["r","resistor",0.55,0.25,D.d37])
D.e9s=new C.fA(["c","capacitor",0.85,0.25,B.m5])
D.e8U=new C.fA(["q","resistor",0.55,0.6,D.aye])
D.e9l=new C.fA(["d","led",0.85,0.6,B.m5])
D.cQ8=w([D.e9k,D.e9n,D.e9s,D.e8U,D.e9l],x.d)
D.e8w=new C.d7(["s",0,"r",0])
D.e8s=new C.d7(["r",1,"c",0])
D.e8_=new C.d7(["c",1,"s",1])
D.e7Z=new C.d7(["c",0,"q",0])
D.e8q=new C.d7(["q",1,"d",0])
D.e82=new C.d7(["d",1,"c",1])
D.cG4=w([D.e8w,D.e8s,D.e8_,D.e7Z,D.e8q,D.e82],x.o)
D.cNe=w(["capacitor","store","charge","flash"],x.s)
D.dSd=new A.q0("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.cQ8,D.cG4,D.cNe)
D.e93=new C.fA(["b","battery",0.15,0.3,D.ayb])
D.e9x=new C.fA(["l1","bulb",0.5,0.3,B.m5])
D.e97=new C.fA(["l2","bulb",0.85,0.3,B.m5])
D.cyE=w([D.e93,D.e9x,D.e97],x.d)
D.e7V=new C.d7(["b",0,"l1",0])
D.e8e=new C.d7(["l1",1,"l2",0])
D.e8f=new C.d7(["l2",1,"b",1])
D.cJq=w([D.e7V,D.e8e,D.e8f],x.o)
D.cWQ=w(["series","two bulbs","dim"],x.s)
D.dS7=new A.q0("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cyE,D.cJq,D.cWQ)
D.Nv=w([D.dSa,D.dSf,D.dS9,D.dSb,D.dS8,D.dS6,D.dSe,D.dS4,D.dSc,D.dS5,D.dSd,D.dS7],C.aA("M<q0>"))
D.cFQ=w([1,0.6,0.45,0.3,0.22,0.15],x.n)
D.f9s=new A.Ex("Moon",1.62,B.fM,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.f9q=new A.Ex("Mars",3.71,B.aH,"Mars has about 38 percent of Earth's gravity.")
D.f9t=new A.Ex("Mercury",3.7,B.jx,"Mercury is small, so its gravity is like Mars.")
D.f9n=new A.Ex("Venus",8.87,B.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.f9p=new A.Ex("Earth",9.81,B.b3,"On Earth gravity is strong, and the air also slows you down.")
D.f9r=new A.Ex("Neptune",11.15,B.dc,"Neptune pulls a little harder than Earth.")
D.f9o=new A.Ex("Jupiter",24.79,B.dh,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.qq=w([D.f9s,D.f9q,D.f9t,D.f9n,D.f9p,D.f9r,D.f9o],C.aA("M<Ex>"))
D.cG3=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.ZW=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cGE=w([0.2,0.5,0.8],x.n)
D.cGO=w([1,2,3,4,5,6],x.n)
D.boL=new C.a_(63040,"MaterialIcons",!1)
D.e5L=new C.bz("peg","Peg",D.boL)
D.e50=new C.bz("bar","Bar",P.Ae)
D.e5q=new C.bz("erase","Erase",B.KO)
D.cGP=w([D.e5L,D.e50,D.e5q],x.c)
D.ecQ=new C.cI(B.bi,B.J,4)
D.cGZ=w([D.ecQ],x.q)
D.ar9=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aNi=new A.ID(0,"accordion")
D.cxf=w([B.j0,B.Af,B.E7],x.w)
D.cDD=w(["Mail","SMS","Ad"],x.s)
D.cxH=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.f7F=new A.zk(D.aNi,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.arO,D.cxf,D.cDD,D.cxH)
D.a5I=new A.ID(1,"flip")
D.cN8=w([B.p5,Y.EE,B.t1],x.w)
D.cIn=w(["Unlock","Verify","Secure"],x.s)
D.cwm=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.f7E=new A.zk(D.a5I,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aro,D.cN8,D.cIn,D.cwm)
D.aNj=new A.ID(2,"towers")
D.cHh=w([B.x4,B.pa,B.hK],x.w)
D.cGV=w(["Save","Grow","Earn"],x.s)
D.ckA=w(["","",""],x.s)
D.f7G=new A.zk(D.aNj,"GROWTH SKYLINE","Solid towers rise from the floor and light up",B.ZN,D.cHh,D.cGV,D.ckA)
D.a5J=new A.ID(3,"assemble")
D.cNW=w([B.m0,B.hg,B.dO],x.w)
D.cD3=w(["Launch","Charge","Shine"],x.s)
D.cKI=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.f7I=new A.zk(D.a5J,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.apT,D.cNW,D.cD3,D.cKI)
D.aNk=new A.ID(4,"carousel")
D.cNM=w([B.bc,B.jc],x.O)
D.cDN=w([B.lZ,B.ag3,B.Lo],x.w)
D.cz_=w(["Explore","Discover","Learn"],x.s)
D.cIJ=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.f7D=new A.zk(D.aNk,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.cNM,D.cDN,D.cz_,D.cIJ)
D.aNl=new A.ID(5,"burst")
D.cGR=w([B.km,B.tX],x.O)
D.cxC=w([B.kX,B.lX,B.hJ],x.w)
D.cxV=w(["Cheer","Win","Love"],x.s)
D.czU=w(["Make some noise","First place","Share the joy"],x.s)
D.f7H=new A.zk(D.aNl,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cGR,D.cxC,D.cxV,D.czU)
D.ara=w([D.f7F,D.f7E,D.f7G,D.f7I,D.f7D,D.f7H],C.aA("M<zk>"))
D.e5N=new C.bz("skin","Skin",B.ag4)
D.e7_=new C.bz("muscle","Muscles",B.L_)
D.e6M=new C.bz("organ","Organs",B.hJ)
D.bob=new C.a_(62747,"MaterialIcons",!1)
D.e6P=new C.bz("bone","Skeleton",D.bob)
D.e75=new C.bz("vessel","Blood vessels",B.uD)
D.cHm=w([D.e5N,D.e7_,D.e6M,D.e6P,D.e75],x.c)
D.eap=new A.u4("Simple legs","Light. Land gently.",0.15,0.2)
D.ear=new A.u4("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eau=new A.u4("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.AC=w([D.eap,D.ear,D.eau],x._)
D.cIR=w([1.77,3.55,7.15,16.7],x.n)
D.cL5=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.e2J=new C.S("spiral","Spiral")
D.dV4=new C.S("barred","Barred spiral")
D.e_X=new C.S("elliptical","Elliptical")
D.cLK=w([D.e2J,D.dV4,D.e_X],x.L)
D.e7H=new C.d7(["beat",0.18,0.28,0])
D.e8C=new C.d7(["burst",0.7,0.2,0])
D.e8L=new C.d7(["delay",0.45,0.5,1])
D.e8n=new C.d7(["ripple",0.75,0.6,3])
D.cCP=w([D.e7H,D.e8C,D.e8L,D.e8n],x.e)
D.a2o=new C.S(2,3)
D.cMx=w([K.mQ,I.Gy,D.a2o],x.u)
D.f6V=new A.Ek("First spark","A clock lights a burst and a ripple",D.cCP,D.cMx)
D.e85=new C.d7(["beat",0.15,0.3,1])
D.e7n=new C.d7(["ripple",0.62,0.15,0])
D.e8I=new C.d7(["delay",0.4,0.45,0])
D.e7T=new C.d7(["ripple",0.7,0.45,0])
D.e7D=new C.d7(["delay",0.4,0.7,1])
D.e8p=new C.d7(["shake",0.75,0.75,0])
D.cXF=w([D.e85,D.e7n,D.e8I,D.e7T,D.e7D,D.e8p],x.e)
D.dT7=new C.S(2,4)
D.aFX=new C.S(4,5)
D.cFV=w([K.mQ,I.Gy,D.a2o,D.dT7,D.aFX],x.u)
D.f6X=new A.Ek("Heartbeat","Two thumps, then a shake",D.cXF,D.cFV)
D.e7M=new C.d7(["dice",0.15,0.7,1])
D.e8N=new C.d7(["echo",0.4,0.7,0])
D.e7S=new C.d7(["comet",0.7,0.5,4])
D.e8D=new C.d7(["burst",0.72,0.2,1])
D.e83=new C.d7(["burst",0.3,0.25,0])
D.e7N=new C.d7(["pop",0.55,0.85,0])
D.c19=w([D.e7M,D.e8N,D.e7S,D.e8D,D.e83,D.e7N],x.e)
D.dSR=new C.S(1,3)
D.dSS=new C.S(1,4)
D.aFW=new C.S(0,5)
D.cNH=w([K.mQ,I.v0,D.dSR,D.dSS,D.aFW],x.u)
D.f6W=new A.Ek("Fireworks","Dice launch comets that burst in colour",D.c19,D.cNH)
D.e7Q=new C.d7(["beat",0.15,0.2,2])
D.e8b=new C.d7(["chance",0.4,0.2,0])
D.e7J=new C.d7(["ball",0.7,0.12,3])
D.e7x=new C.d7(["chance",0.4,0.5,1])
D.e8M=new C.d7(["ball",0.3,0.08,1])
D.e7q=new C.d7(["ripple",0.7,0.55,3])
D.bVf=w([D.e7Q,D.e8b,D.e7J,D.e7x,D.e8M,D.e7q],x.e)
D.a2p=new C.S(3,4)
D.dT8=new C.S(2,5)
D.ch4=w([K.mQ,I.v0,I.a2n,D.a2p,D.dT8],x.u)
D.f6U=new A.Ek("Rain","Balls fall at random and splash",D.bVf,D.ch4)
D.e8c=new C.d7(["beat",0.12,0.45,2])
D.e8E=new C.d7(["toggle",0.38,0.2,0])
D.e8K=new C.d7(["wash",0.7,0.15,4])
D.e7L=new C.d7(["count3",0.38,0.45,0])
D.e8H=new C.d7(["burst",0.72,0.4,0])
D.e84=new C.d7(["light",0.55,0.7,1])
D.e7y=new C.d7(["pop",0.8,0.8,4])
D.cQ6=w([D.e8c,D.e8E,D.e8K,D.e7L,D.e8H,D.e84,D.e7y],x.e)
D.dTm=new C.S(3,6)
D.bYm=w([K.mQ,I.v0,I.a2n,D.a2p,D.aFW,D.dTm],x.u)
D.f6S=new A.Ek("Disco","A beat drives lights, washes and bursts",D.cQ6,D.bYm)
D.e8P=new C.d7(["button",0.12,0.2,0])
D.e7s=new C.d7(["delay",0.34,0.2,1])
D.e8O=new C.d7(["light",0.56,0.2,1])
D.e8J=new C.d7(["delay",0.56,0.45,1])
D.e8d=new C.d7(["ball",0.34,0.6,0])
D.e7w=new C.d7(["delay",0.34,0.8,1])
D.e7m=new C.d7(["burst",0.7,0.8,5])
D.bIz=w([D.e8P,D.e7s,D.e8O,D.e8J,D.e8d,D.e7w,D.e7m],x.e)
D.dUV=new C.S(5,6)
D.cUr=w([K.mQ,I.v0,D.a2o,D.a2p,D.aFX,D.dUV],x.u)
D.f6T=new A.Ek("Domino","Tap the button and watch it run down the line",D.bIz,D.cUr)
D.ars=w([D.f6V,D.f6X,D.f6W,D.f6U,D.f6S,D.f6T],C.aA("M<Ek>"))
D.cLS=w([0.05,0.15,0.25],x.n)
D.cM6=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.cMI=w([1.5,3,4.5,9,12],x.n)
D.e4B=new C.bz("dice","Dice",B.lW)
D.e5w=new C.bz("coin","Coin",F.wZ)
D.e70=new C.bz("num","Number",B.x7)
D.cMS=w([D.e4B,D.e5w,D.e70],x.c)
D.cMW=w(["skin","muscle","organ","bone","vessel"],x.s)
D.f_E=new A.Ng("Moon",1.62,0,4291941851)
D.f_F=new A.Ng("Mars",3.71,0.01,4294472049)
D.f_G=new A.Ng("Earth",9.81,1,4281908728)
D.f_I=new A.Ng("Jupiter",24.79,1.4,4294677052)
D.f_H=new A.Ng("Sun",274,2,4294688548)
D.xw=w([D.f_E,D.f_F,D.f_G,D.f_I,D.f_H],C.aA("M<Ng>"))
D.ary=w([B.cN,B.aM,B.bt,B.b3,B.bE,B.cd,B.dh,B.hT],x.O)
D.dHj={H:0}
D.d2D=new C.bt(D.dHj,[2],x.I)
D.d44=new A.rA("Hydrogen","H\u2082",D.d2D,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.dHk={H:0,Cl:1}
D.d2P=new C.bt(D.dHk,[1,1],x.I)
D.d46=new A.rA("Hydrogen chloride","HCl",D.d2P,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.dHl={H:0,O:1}
D.d2m=new C.bt(D.dHl,[2,1],x.I)
D.d47=new A.rA("Water","H\u2082O",D.d2m,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.dHw={N:0,H:1}
D.d3a=new C.bt(D.dHw,[1,3],x.I)
D.d4f=new A.rA("Ammonia","NH\u2083",D.d3a,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a1w={C:0,H:1}
D.d35=new C.bt(D.a1w,[1,4],x.I)
D.d48=new A.rA("Methane","CH\u2084",D.d35,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.dHm={H:0,S:1}
D.d1v=new C.bt(D.dHm,[2,1],x.I)
D.d4e=new A.rA("Hydrogen sulfide","H\u2082S",D.d1v,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.dHB={O:0}
D.d38=new C.bt(D.dHB,[2],x.I)
D.d4g=new A.rA("Oxygen","O\u2082",D.d38,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.dHv={N:0}
D.d2E=new C.bt(D.dHv,[2],x.I)
D.d45=new A.rA("Nitrogen","N\u2082",D.d2E,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.dH9={C:0,O:1}
D.d3f=new C.bt(D.dH9,[1,2],x.I)
D.d4c=new A.rA("Carbon dioxide","CO\u2082",D.d3f,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aAx={C:0,H:1,O:2}
D.d1h=new C.bt(D.aAx,[1,2,1],x.I)
D.d4d=new A.rA("Formaldehyde","CH\u2082O",D.d1h,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.d34=new C.bt(D.a1w,[2,4],x.I)
D.d4a=new A.rA("Ethene","C\u2082H\u2084",D.d34,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.d33=new C.bt(D.a1w,[2,6],x.I)
D.d49=new A.rA("Ethane","C\u2082H\u2086",D.d33,"Two carbons joined by a single bond, each holding three hydrogens.")
D.d1i=new C.bt(D.aAx,[1,4,1],x.I)
D.d4b=new A.rA("Methanol","CH\u2083OH",D.d1i,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a_b=w([D.d44,D.d46,D.d47,D.d4f,D.d48,D.d4e,D.d4g,D.d45,D.d4c,D.d4d,D.d4a,D.d49,D.d4b],C.aA("M<rA>"))
D.cOF=w([],x.Y)
D.cOG=w([],x.x)
D.a_l=w([],x.B)
D.cP0=w([0,0.46,0.82],x.n)
D.cPc=w([5,10,15,25,45,60],x.t)
D.cPs=w([-0.045,0.03,-0.015],x.n)
D.cPP=w([0.9,0.97,1],x.n)
D.arU=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.t8=w([0.05,0.2,0.35],x.n)
D.cxZ=w([D.CY,D.CY],x.O)
D.cCM=w([B.Da,B.M],x.O)
D.cBU=w([B.fZ,B.hR],x.O)
D.cwj=w([B.jc,B.mo],x.O)
D.bUP=w([B.lJ,B.dq],x.O)
D.arV=w([D.cxZ,D.cCM,D.cBU,D.cwj,D.bUP],x.k)
D.f_s=new A.uh("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.f_t=new A.uh("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.f_k=new A.uh("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.f_r=new A.uh("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.f_p=new A.uh("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.f_l=new A.uh("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.f_q=new A.uh("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.f_m=new A.uh("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.f_o=new A.uh("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.f_n=new A.uh("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.AH=w([D.f_s,D.f_t,D.f_k,D.f_r,D.f_p,D.f_l,D.f_q,D.f_m,D.f_o,D.f_n],C.aA("M<uh>"))
D.b4Q=new C.x(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,B.t)
D.cQR=w([D.CY,D.b4Q,D.a9f,B.a8S],x.O)
D.dSr=new C.S(0,"AND")
D.dST=new C.S(1,"Adder")
D.dT9=new C.S(2,"Blinker")
D.dTn=new C.S(3,"Memory")
D.cSm=w([D.dSr,D.dST,D.dT9,D.dTn],x.T)
D.as3=w([-104,0,104],x.n)
D.cSM=w([-1,1],x.n)
D.cSO=w([-24,24],x.n)
D.cSR=w([-8,8],x.n)
D.as5=w([-92,0,92],x.n)
D.cT9=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eam=new A.u4("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eat=new A.u4("Medium tank","Balanced.",0.35,1)
D.eas=new A.u4("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.O4=w([D.eam,D.eat,D.eas],x._)
D.cTp=w([1,2,3,4,6,8],x.n)
D.mL=w([0.04,0.2,0.36],x.n)
D.ase=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.cUd=w([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],x.n)
D.e6L=new C.bz(D.aNi,"Fold",B.XZ)
D.e60=new C.bz(D.a5I,"Flip",B.Ef)
D.bov=new C.a_(62889,"MaterialIcons",!1)
D.e6Z=new C.bz(D.aNj,"Rise",D.bov)
D.ahe=new C.a_(983870,"MaterialIcons",!1)
D.e4d=new C.bz(D.a5J,"Assemble",D.ahe)
D.e4m=new C.bz(D.aNk,"Spin",D.afB)
D.e4j=new C.bz(D.aNl,"Pop",B.kX)
D.cUo=w([D.e6L,D.e60,D.e6Z,D.e4d,D.e4m,D.e4j],C.aA("M<+(ID,n,a_)>"))
D.asj=w([B.cd,B.j6,B.br,B.b3,B.bE,B.cN],x.O)
D.cUz=w([B.b3,B.dh,B.dh,B.bt],x.O)
D.cUK=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.e3C=new C.S("Make the output turn HALF as fast as the input.",0.5)
D.dWA=new C.S("Make the output turn TWICE as fast.",2)
D.dSZ=new C.S("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.e2T=new C.S("Make the output turn 4 times faster.",4)
D.dZA=new C.S("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.e0i=new C.S("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.e_m=new C.S("Make the output turn 3 times faster.",3)
D.e_O=new C.S("Make the output spin at the same speed as the input, using four different gears.",1)
D.aso=w([D.e3C,D.dWA,D.dSZ,D.e2T,D.dZA,D.e0i,D.e_m,D.e_O],C.aA("M<+(n,P)>"))
D.cVL=w([1,2,3,4,5,6,7,8],x.n)
D.O6=w([B.cd,B.cV,B.bt,B.b3,B.bE,B.cN,B.c,B.dh],x.O)
D.cWt=w(["solar","turbine","crank","pot"],x.s)
D.cWO=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.cWS=w([0,0.35,0.75,1],x.n)
D.e4w=new C.bz("drop","Drop",B.XV)
D.e4y=new C.bz("weight","Weight",Q.ahh)
D.e6U=new C.bz("cannon","Newton's cannon",B.Xs)
D.cXq=w([D.e4w,D.e4y,D.e6U],x.c)
D.e25=new C.S("piano","Piano")
D.e1W=new C.S("organ","Organ")
D.e_7=new C.S("bell","Bell")
D.e27=new C.S("pluck","Pluck")
D.e2S=new C.S("synth","Synth")
D.e0e=new C.S("flute","Flute")
D.asD=w([D.e25,D.e1W,D.e_7,D.e27,D.e2S,D.e0e],x.L)
D.cXQ=w(["volts","level","ohms","on"],x.s)
D.cYU=w([B.j0,B.Af,B.E7,B.p5,Y.EE,B.t1,B.x4,B.pa,B.hK,B.m0,B.hg,B.dO,B.hJ,B.hL,B.lX,B.lY,B.x5,B.qm,B.lr,B.E6,B.t0,B.L1,B.wR,B.agM,B.KS,B.x1,B.L_,B.agq,M.aha,B.kX],x.w)
D.cZq=w([1,0.18,0.06],x.n)
D.cZM=w([0.72,1],x.n)
D.cZW=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.dIA={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.d1b=new C.bt(D.dIA,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aAz={A:0,T:1,C:2,G:3}
D.a07=new C.bt(D.aAz,["U","A","G","C"],x.l)
D.d1j=new C.bt(D.aAz,["T","A","G","C"],x.l)
D.dHs={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.cNQ=w([0,2,4,5,7,9,11],x.t)
D.cxk=w([0,2,3,5,7,8,10],x.t)
D.cSy=w([0,3,5,6,7,10],x.t)
D.AO=new C.bt(D.dHs,[D.aqV,D.cNQ,D.cxk,D.cSy,D.ajG],C.aA("bt<n,al<H>>"))
D.dIo={A:0,T:1,U:2,C:3,G:4}
D.d1y=new C.bt(D.dIo,[B.cN,B.cK,B.cK,B.aM,B.bt],C.aA("bt<n,x>"))
D.dGV={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.f16=new A.x7("Switch",D.agY,B.cV,0,"Tap it to turn it ON or OFF.")
D.f12=new A.x7("Blinker",B.o9,B.br,0,"Turns itself ON and OFF. Tap to change the speed.")
D.f13=new A.x7("AND",D.ahe,B.cK,2,"ON only when BOTH inputs are ON.")
D.bq_=new C.a_(63671,"MaterialIcons",!1)
D.f11=new A.x7("OR",D.bq_,B.bE,2,"ON when EITHER input is ON.")
D.f14=new A.x7("XOR",H.Xg,B.cd,2,"ON when the inputs are DIFFERENT.")
D.f0Z=new A.x7("NAND",B.rR,B.b3,2,"OFF only when BOTH inputs are ON.")
D.bp3=new C.a_(63176,"MaterialIcons",!1)
D.f1_=new A.x7("NOR",D.bp3,B.hT,2,"ON only when BOTH inputs are OFF.")
D.f10=new A.x7("NOT",T.Ex,B.dh,1,"Flips the signal: ON becomes OFF.")
D.f15=new A.x7("Light",B.wW,B.j6,1,"Glows when its input is ON.")
D.f17=new A.x7("Buzzer",B.nr,B.cN,1,"Beeps while its input is ON.")
D.xI=new C.bt(D.dGV,[D.f16,D.f12,D.f13,D.f11,D.f14,D.f0Z,D.f1_,D.f10,D.f15,D.f17],C.aA("bt<n,x7>"))
D.dIl={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.e4S=new C.bz(3,20,1.9)
D.e4s=new C.bz(33,90,1.6)
D.e7h=new C.bz(52,15,3.2)
D.e7f=new C.bz(45,-100,1.8)
D.e5V=new C.bz(-15,-60,1.9)
D.e5s=new C.bz(-25,140,2.4)
D.e5k=new C.bz(-82,0,2.2)
D.ay3=new C.bt(D.dIl,[D.e4S,D.e4s,D.e7h,D.e7f,D.e5V,D.e5s,D.e5k],C.aA("bt<n,+(P,P,P)>"))
D.cwN=w([B.B],x.M)
D.cx3=w([B.ax,B.aD],x.M)
D.cF5=w([B.ax,B.B,B.aD],x.M)
D.cGn=w([B.ax,B.kM,B.B,B.lc,B.aD],x.M)
D.cSi=w([B.ax,B.kM,B.a1,B.a7,B.lc,B.aD],x.M)
D.d2t=new C.dW([1,D.cwN,2,D.cx3,3,D.cF5,4,B.asJ,5,D.cGn,6,D.cSi],C.aA("dW<H,al<d3>>"))
D.dHt={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.e66=new C.bz(1,B.cf,"Hydrogen")
D.e56=new C.bz(4,B.bv,"Carbon")
D.e4e=new C.bz(3,B.dc,"Nitrogen")
D.e6n=new C.bz(2,B.aH,"Oxygen")
D.e5P=new C.bz(2,B.cV,"Sulfur")
D.e6S=new C.bz(1,B.bq,"Chlorine")
D.uQ=new C.bt(D.dHt,[D.e66,D.e56,D.e4e,D.e6n,D.e5P,D.e6S],C.aA("bt<n,+(H,x,n)>"))
D.dIF={Calm:0,Box:1,Sleep:2}
D.ceC=w([4,2,6,0],x.n)
D.ceJ=w([4,4,4,4],x.n)
D.ceK=w([4,7,8,0],x.n)
D.Ov=new C.bt(D.dIF,[D.ceC,D.ceJ,D.ceK],C.aA("bt<n,al<P>>"))
D.dH3={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.vv=new A.Z3(0,"source")
D.cFY=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.f5y=new A.px("Clock",B.o9,D.vv,B.br,D.cFY)
D.f5u=new A.px("Button",B.x8,D.vv,B.aM,B.U)
D.cVP=w(["random","quick","slow"],x.s)
D.f5F=new A.px("Dice",B.lW,D.vv,B.cd,D.cVP)
D.bpG=new C.a_(63484,"MaterialIcons",!1)
D.C8=new A.Z3(1,"logic")
D.cZH=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.f5B=new A.px("Delay",D.bpG,D.C8,B.cK,D.cZH)
D.cPi=w(["fast","mid","slow"],x.s)
D.f5G=new A.px("Echo",B.agF,D.C8,B.bE,D.cPi)
D.f5D=new A.px("Every 2nd",T.Ex,D.C8,B.hT,B.U)
D.bpi=new C.a_(63309,"MaterialIcons",!1)
D.f5A=new A.px("Every 3rd",D.bpi,D.C8,B.b3,B.U)
D.bri=new C.a_(983902,"MaterialIcons",!1)
D.bI_=w(["50%","25%","75%"],x.s)
D.f5I=new A.px("Chance",D.bri,D.C8,B.dh,D.bI_)
D.pJ=new A.Z3(2,"out")
D.f5w=new A.px("Light",B.wW,D.pJ,B.j6,B.U)
D.f5x=new A.px("Burst",B.kX,D.pJ,B.cd,B.U)
D.f5v=new A.px("Ripple",B.xc,D.pJ,B.bc,B.U)
D.f5E=new A.px("Ball",B.agR,D.pJ,B.dh,B.U)
D.f5C=new A.px("Comet",B.m0,D.pJ,B.bE,B.U)
D.br5=new C.a_(983669,"MaterialIcons",!1)
D.f5H=new A.px("Shake",D.br5,D.pJ,B.cN,B.U)
D.f5J=new A.px("Pop",B.E8,D.pJ,B.bt,B.U)
D.f5z=new A.px("Wash",B.L4,D.pJ,B.nQ,B.U)
D.m6=new C.bt(D.dH3,[D.f5y,D.f5u,D.f5F,D.f5B,D.f5G,D.f5D,D.f5A,D.f5I,D.f5w,D.f5x,D.f5v,D.f5E,D.f5C,D.f5H,D.f5J,D.f5z],C.aA("bt<n,px>"))
D.dIk={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"ORBIT STUDIO":5,"SWARM STUDIO":6,"FIREWORK DESIGNER":7,"CHAIN BURST":8,"CIRCUIT LAB":9,"PERIODIC TABLE":10,"BODY EXPLORER":11,"SPIN THE WHEEL":12,"FOCUS TIMER":13,"MEMORY MATCH":14,"LUCKY POCKET":15,"ELECTRONICS LAB":16,"AI INVENTOR":17,"MAGNET LAB":18,"RADIO LAB":19,"POWER PLANT":20,"POWER GRID":21,"INTERNET JOURNEY":22,"ROBOT CODER":23,"BUG SMASHER":24,"ROCKET LANDER":25,"DATA SNAKE":26,"BINARY 2048":27,"SIGNAL BREAKER":28,"PASSWORD LAB":29,"WAVE LAB":30,"BUG HUNT":31,"MOLECULE MAKER":32,"DNA LAB":33,"ECOSYSTEM LAB":34,"BALANCE LAB":35,"GEAR LAB":36,"OPTICS LAB":37,"LASER MAZE":38,"LIGHT MIXER":39,"ATOM BUILDER":40,"CIPHER LAB":41,"PIXEL TV":42}
D.ayd=new C.bt(D.dIk,["sparkle","sparkle","whoosh","click","bounce","space","bubble","pop","zap","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","lab","organic","organic","click","tech","sparkle","zap","sparkle","lab","tech","tech"],x.l)
D.dIp={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.AP=new C.bt(D.dIp,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.dH2={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.e3X=new C.S("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.dUT=new C.S("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.dUR=new C.S("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.e_N=new C.S("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.e0p=new C.S("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.e_K=new C.S("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.dTp=new C.S("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.dZJ=new C.S("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.e42=new C.S("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.e0A=new C.S("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.dWi=new C.S("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.dTh=new C.S("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.dVP=new C.S("Movement","They pull your legs together and help you balance.")
D.dWN=new C.S("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.dUZ=new C.S("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.e2y=new C.S("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.e3m=new C.S("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.dZB=new C.S("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.e3b=new C.S("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.dYU=new C.S("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.e0G=new C.S("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.dTi=new C.S("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.dWZ=new C.S("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.e0u=new C.S("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.dZ4=new C.S("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.e3h=new C.S("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.e_w=new C.S("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.dTo=new C.S("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.e0Z=new C.S("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.e2l=new C.S("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.e1r=new C.S("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.dSy=new C.S("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.e_i=new C.S("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.e_l=new C.S("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.dXj=new C.S("Movement","The chest muscles push your arms forward, like when you push a door.")
D.dV1=new C.S("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.dWH=new C.S("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.dZP=new C.S("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.e1R=new C.S("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.e40=new C.S("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.e0E=new C.S("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.dSo=new C.S("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.dZU=new C.S("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.dSO=new C.S("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.e2_=new C.S("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.e2v=new C.S("Movement","These lift your foot up so your toes do not drag on the ground.")
D.e_4=new C.S("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.e28=new C.S("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.dTk=new C.S("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.e2U=new C.S("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.dVz=new C.S("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.e1H=new C.S("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.dXb=new C.S("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.dZ0=new C.S("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.e0O=new C.S("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.e33=new C.S("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.e2W=new C.S("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.e3_=new C.S("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.dZl=new C.S("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.e1e=new C.S("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.e1o=new C.S("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.e2K=new C.S("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.e_3=new C.S("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.dYb=new C.S("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.dXx=new C.S("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.e_f=new C.S("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.e0K=new C.S("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.dYt=new C.S("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.dYN=new C.S("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.dVI=new C.S("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.e2u=new C.S("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.dW7=new C.S("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.dSM=new C.S("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.dXi=new C.S("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.dSJ=new C.S("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.dVe=new C.S("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.dXm=new C.S("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.dWd=new C.S("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.e0W=new C.S("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.dWQ=new C.S("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.e3Q=new C.S("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.dXB=new C.S("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.dZh=new C.S("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.e_A=new C.S("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.dWh=new C.S("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.dW9=new C.S("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.d3w=new C.bt(D.dH2,[D.e3X,D.dUT,D.dUR,D.e_N,D.e0p,D.e_K,D.dTp,D.dZJ,D.e42,D.e0A,D.dWi,D.dTh,D.dVP,D.dWN,D.dUZ,D.e2y,D.e3m,D.dZB,D.e3b,D.dYU,D.e0G,D.dTi,D.dWZ,D.e0u,D.dZ4,D.e3h,D.e_w,D.dTo,D.e0Z,D.e2l,D.e1r,D.dSy,D.e_i,D.e_l,D.dXj,D.dV1,D.dWH,D.dZP,D.e1R,D.e40,D.e0E,D.dSo,D.dZU,D.dSO,D.e2_,D.e2v,D.e_4,D.e28,D.dTk,D.e2U,D.dVz,D.e1H,D.dXb,D.dZ0,D.e0O,D.e33,D.e2W,D.e3_,D.dZl,D.e1e,D.e1o,D.e2K,D.e_3,D.dYb,D.dXx,D.e_f,D.e0K,D.dYt,D.dYN,D.dVI,D.e2u,D.dW7,D.dSM,D.dXi,D.dSJ,D.dVe,D.dXm,D.dWd,D.e0W,D.dWQ,D.e3Q,D.dXB,D.dZh,D.e_A,D.dWh,D.dW9],C.aA("bt<n,+(n,n)>"))
D.d3y=new C.hG(B.G,11)
D.d6N=new A.S9(null)
D.daB=new A.Sd(null)
D.daC=new A.Se(null)
D.daP=new A.Sf(null)
D.dcQ=new A.Sh(null)
D.dcR=new A.Si(null)
D.dcS=new A.Sj(null)
D.ddE=new A.SE(null)
D.ddG=new A.ST(null)
D.ddH=new A.SU(null)
D.ddI=new A.SV(null)
D.def=new A.T1(null)
D.dga=new A.T5(null)
D.dgb=new A.T7(null)
D.dgc=new A.T8(null)
D.dge=new A.T9(null)
D.dgZ=new A.Tl(null)
D.dhP=new A.Tq(null)
D.dhR=new A.Ts(null)
D.dhW=new A.TC(null)
D.di6=new A.TD(null)
D.diC=new A.TE(null)
D.dk6=new A.TG(null)
D.dlu=new A.TI(null)
D.dlv=new A.TJ(null)
D.dmQ=new A.TL(null)
D.dCJ=new A.TM(null)
D.dCK=new A.TN(null)
D.dCL=new A.TQ(null)
D.dCM=new A.TR(null)
D.dEF=new A.TZ(null)
D.dEG=new A.U_(null)
D.dEO=new A.U6(null)
D.dEX=new A.Ua(null)
D.dEY=new A.Ub(null)
D.dEZ=new A.a5Y(null)
D.dFp=new A.Uc(null)
D.dGS=new A.Ug(null)
D.dIO=new C.v(0,118)
D.dIP=new C.v(0,13)
D.dIQ=new C.v(0,17)
D.dIU=new C.v(0,330)
D.dIZ=new C.v(0,-13)
D.a1A=new C.v(0,-6)
D.dJ2=new C.v(0,-6771)
D.dJ3=new C.v(0,-9)
D.aAK=new C.v(11,8)
D.dJ8=new C.v(14,-18)
D.dJ9=new C.v(18,-12)
D.aAO=new C.v(20,0)
D.dJf=new C.v(20,-17)
D.dJh=new C.v(22,10)
D.aAP=new C.v(22,8)
D.dJj=new C.v(24,-18)
D.dJk=new C.v(25,8)
D.dJl=new C.v(26,0)
D.dJp=new C.v(28,-30)
D.dJu=new C.v(30,18)
D.aAT=new C.v(34,-32)
D.Ge=new C.v(36,0)
D.dJB=new C.v(42,0)
D.dJF=new C.v(4,11)
D.dJI=new C.v(4,-2)
D.dJL=new C.v(5,0)
D.dJM=new C.v(5,17)
D.dJN=new C.v(5,6)
D.dJZ=new C.v(-2.6,-1)
D.dK_=new C.v(1.9,-0.8)
D.dK2=new C.v(-0.22,0.09)
D.dK7=new C.v(2.6,1)
D.dKM=new C.v(-10,12)
D.dKN=new C.v(-11,-2)
D.dKO=new C.v(-13,-5)
D.dKP=new C.v(-14,2)
D.dKQ=new C.v(-14,-12)
D.dKR=new C.v(-17,-18)
D.aB3=new C.v(-20,0)
D.dKU=new C.v(-20,-9)
D.Pp=new C.v(-22,8)
D.dKV=new C.v(-22,-10)
D.dKW=new C.v(-22,-11)
D.dKX=new C.v(-26,0)
D.dL1=new C.v(-42,0)
D.dL3=new C.v(-4,11)
D.dL4=new C.v(-4,-2)
D.dL6=new C.v(-5,0)
D.dL7=new C.v(-5,20)
D.dL8=new C.v(-5,6)
D.dL9=new C.v(-6,-42)
D.eF7=new C.w("Thinking\u2026",null,B.i1,null,null,null,null,null,null,null,null,null)
D.dM_=new C.B(B.ku,D.eF7,null)
D.eTQ=new C.w("Start from a ready-made board",null,B.fL,null,null,null,null,null,null,null,null,null)
D.dM9=new C.B(A9.wp,D.eTQ,null)
D.biP=new C.L(4,0,4,14)
D.eAV=new C.E(!0,B.aB,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFZ=new C.w("Games and little helpers for a spare minute.",null,D.eAV,null,null,null,null,null,null,null,null,null)
D.dMh=new C.B(D.biP,D.eFZ,null)
D.eQX=new C.w("Tap to throw in a star",null,B.kd,null,null,null,null,null,null,null,null,null)
D.aWM=new C.cw(B.B,null,null,D.eQX,null)
D.dQP=new C.cE(0,null,0,14,null,null,D.aWM,null)
D.cPN=w([B.iQ,B.bv],x.O)
D.aFO=new C.bS(B.B,0.5,B.x,null,0,D.cPN,null,null)
D.cWn=w([B.fs,M.CZ],x.O)
D.dRw=new C.bS(B.B,0.5,B.x,null,0,D.cWn,null,null)
D.cI2=w([B.c,B.bP],x.O)
D.dRy=new C.bS(B.B,0.5,B.x,null,0,D.cI2,null,null)
D.dRz=new C.bS(B.B,0.5,B.x,null,0,I.arN,null,null)
D.cWF=w([B.cf,B.ms],x.O)
D.aFP=new C.bS(B.B,0.5,B.x,null,0,D.cWF,null,null)
D.b2a=new C.x(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,B.t)
D.b6J=new C.x(1,0.027450980392156862,0.10196078431372549,0.2,B.t)
D.cH5=w([D.b2a,D.aaP,D.b6J],x.O)
D.cO_=w([0,0.7,1],x.n)
D.dRE=new C.bS(B.vy,0.5,B.x,null,0,D.cH5,D.cO_,null)
D.ceQ=w([B.zi,B.b_,B.K],x.O)
D.cTK=w([0.3,0.7,1],x.n)
D.dRF=new C.bS(B.B,0.5,B.x,null,0,D.ceQ,D.cTK,null)
D.chz=w([B.fM,B.d3],x.O)
D.dRG=new C.bS(B.B,0.5,B.x,null,0,D.chz,null,null)
D.cCV=w([B.zi,B.b_,B.fZ],x.O)
D.dRH=new C.bS(B.B,0.5,B.x,null,0,D.cCV,null,null)
D.cvU=w([B.hC,B.aM,B.dC],x.O)
D.dRJ=new C.bS(B.vy,0.5,B.x,null,0,D.cvU,null,null)
D.cQj=w([B.ms,M.CZ],x.O)
D.dRK=new C.bS(B.vy,0.5,B.x,null,0,D.cQj,null,null)
D.b2l=new C.x(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,B.t)
D.b0H=new C.x(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,B.t)
D.cF_=w([D.b2l,D.b0H],x.O)
D.dRM=new C.bS(B.B,0.5,B.x,null,0,D.cF_,null,null)
D.b6f=new C.x(1,0.11372549019607843,0.3607843137254902,0.611764705882353,B.t)
D.b4z=new C.x(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,B.t)
D.b4D=new C.x(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,B.t)
D.cYy=w([D.b6f,D.b4z,D.b4D],x.O)
D.cBN=w([0,0.65,1],x.n)
D.dRN=new C.bS(I.a5R,0.5,B.x,null,0,D.cYy,D.cBN,null)
D.dRO=new C.bS(B.B,0.5,B.x,null,0,D.app,null,null)
D.cVX=w([B.nb,B.b_,B.fZ],x.O)
D.dRS=new C.bS(B.B,0.5,B.x,null,0,D.cVX,null,null)
D.aFU=new C.b3(9,9)
D.dSv=new C.S(0,-4)
D.dVx=new C.S(0.22,4)
D.dZf=new C.S(0.8,-4)
D.e2X=new C.S(0.58,4)
D.e4z=new C.bz("Moon",1.62,4291941851)
D.e54=new C.bz("Neptune",11.15,4284524026)
D.e5D=new C.bz("Sun",274,4294688548)
D.e5R=new C.bz("Mercury",3.7,4288455599)
D.e5X=new C.bz("Earth",9.81,4281908728)
D.e5Z=new C.bz("Mars",3.71,4294472049)
D.e6h=new C.bz("Venus",8.87,4294759245)
D.e6l=new C.bz("Saturn",10.44,4294829706)
D.e6E=new C.bz("Jupiter",24.79,4294677052)
D.e9C=new C.af(14,-14,20,14)
D.e9D=new C.af(20,-2,30,2)
D.e9F=new C.af(4,-13,30,-3)
D.e9M=new C.af(-12,-22,12,8)
D.e9N=new C.af(-12,-6,10,6)
D.e9O=new C.af(-14,20,14,24)
D.e9P=new C.af(-14,6,14,10)
D.e9Q=new C.af(-14,-26,14,18)
D.e9R=new C.af(-16,-22,-9,18)
D.e9T=new C.af(-22,-3,22,3)
D.e9U=new C.af(-22,-4,22,12)
D.aGa=new C.af(-24,-9,24,9)
D.e9V=new C.af(-28,-16,28,16)
D.e9W=new C.af(-30,-12,30,14)
D.e9X=new C.af(-30,-14,0,14)
D.e9Y=new C.af(-30,-2,30,18)
D.e9Z=new C.af(-33,7,33,17)
D.ea_=new C.af(-33,-21,33,17)
D.ea0=new C.af(-34,14,34,26)
D.a2v=new C.af(-34,-18,34,18)
D.ea1=new C.af(-34,-4,34,7)
D.ea2=new C.af(-36,-24,36,20)
D.ea3=new C.af(-38,-22,38,22)
D.ea5=new C.af(-46,-34,46,28)
D.ea6=new C.af(-48,-3,48,3)
D.eaa=new C.af(14,-9,17.5,9)
D.eex=new C.ap(300,300)
D.aXZ=new C.f9(2,null,null,null,null,B.bE,null,null,null,null)
D.efS=new C.a3(16,16,D.aXZ,null)
D.aHU=new C.hI(3,12,12,0.82,null)
D.eVp=new C.w("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aI4=new C.aY(D.eVp,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.cQl=w([B.cN,B.cV,B.bt,B.b3,B.nQ,B.cN],x.O)
D.elJ=new C.fR(B.B,0,6.283185307179586,B.x,D.cQl,null,null)
D.eu9=new C.E(!0,B.aM,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,F.ND,null,null,null)
D.emN=new C.ez("You are here (Sun)",null,null,B.cT,null,null,null,null,null,null,D.eu9)
D.aKq=new C.E(!0,B.aB,null,null,null,null,10.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.emO=new C.ez("What we see",null,null,B.cT,null,null,null,null,null,null,D.aKq)
D.erG=new C.E(!0,E.a8j,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.emR=new C.ez("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,B.cT,null,null,null,null,null,null,D.erG)
D.err=new C.E(!0,B.c3,null,null,null,null,15,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.emW=new C.ez("Add atoms with the buttons below",null,null,B.cT,null,null,null,null,null,null,D.err)
D.aIS=new C.E(!0,B.c3,null,null,null,null,9.5,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.enb=new C.E(!0,B.w,null,null,null,null,24,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.end=new C.E(!0,B.c,null,null,null,null,110,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.enI=new C.E(!0,B.bi,null,null,null,null,15,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eo_=new C.E(!0,B.cK,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eov=new C.E(!0,B.c,null,null,null,null,12.5,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eoL=new C.E(!0,B.c,null,null,null,null,13.5,B.I,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ep9=new C.E(!0,B.aQ,null,null,null,null,12,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.epv=new C.E(!0,B.c3,null,null,null,null,9,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.epF=new C.E(!0,B.al,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ed2=new C.cI(B.hU,B.dG,6)
D.cKu=w([D.ed2],x.q)
D.epY=new C.E(!0,B.c,null,null,null,null,19,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cKu,null,null,null)
D.eq_=new C.E(!0,B.aQ,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eq3=new C.E(!0,B.c,null,null,null,null,17,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eq5=new C.E(!0,B.c3,null,null,null,null,10.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eqt=new C.E(!0,B.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJe=new C.E(!0,B.c3,null,null,null,null,9.5,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eqO=new C.E(!0,B.aB,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eqP=new C.E(!0,B.c3,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.erJ=new C.E(!0,B.c,null,null,null,null,60,B.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esb=new C.E(!0,B.aB,null,null,null,null,10.5,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esE=new C.E(!0,B.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esK=new C.E(!0,B.c,null,null,null,null,12.5,B.a0,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etp=new C.E(!0,B.c,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,F.ND,null,null,null)
D.etQ=new C.E(!0,B.aB,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etY=new C.E(!0,B.c,null,null,null,null,11.5,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euA=new C.E(!0,B.c,null,null,null,null,20,B.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euT=new C.E(!0,B.bK,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euX=new C.E(!0,B.c3,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ev_=new C.E(!0,B.aB,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ev5=new C.E(!0,B.aB,null,null,null,null,18,B.I,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evx=new C.E(!0,B.c3,null,null,null,null,8.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evL=new C.E(!0,B.al,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJS=new C.E(!0,B.al,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ew_=new C.E(!0,B.al,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4d=new C.E(!0,B.c,null,null,null,null,9.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eww=new C.E(!0,B.c,null,null,null,null,20,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ecU=new C.cI(B.w,B.J,5)
D.czD=w([D.ecU],x.q)
D.ewx=new C.E(!0,B.c,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.czD,null,null,null)
D.ed5=new C.cI(B.aV,B.J,3)
D.cZ0=w([D.ed5],x.q)
D.ewC=new C.E(!0,B.c,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cZ0,null,null,null)
D.ewR=new C.E(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewW=new C.E(!0,B.hS,null,null,null,null,30,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exa=new C.E(!0,B.c3,null,null,null,null,10.5,B.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exF=new C.E(!0,B.bt,null,null,null,null,30,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyc=new C.E(!0,B.c3,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyR=new C.E(!0,B.aB,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyZ=new C.E(!0,B.w,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKb=new C.E(!0,B.aB,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezs=new C.E(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezB=new C.E(!0,B.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezI=new C.E(!0,B.aM,null,null,null,null,26,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.R5=new C.E(!0,B.al,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eA2=new C.E(!0,B.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKn=new C.E(!0,B.al,null,null,null,null,12,B.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eA5=new C.E(!0,B.aM,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4t=new C.E(!0,B.c,null,null,null,null,13,B.a0,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBX=new C.w("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,B.R3,null,null,null,null,null,null,null,null,null)
D.eCl=new C.w("LETTER COUNT OF THE SECRET VERSION",null,O.md,null,null,null,null,null,null,null,null,null)
D.eDj=new C.w("Pick one, then change it and see what happens.",null,B.R3,null,null,null,null,null,null,null,null,null)
D.erd=new C.E(!0,B.al,null,null,null,null,null,B.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEf=new C.w("What do you want to invent? Type it below, or tap an idea.",null,D.erd,null,null,null,null,null,null,null,null,null)
D.eEB=new C.w("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,R.a3K,null,null,null,null,null,null,null,null,null)
D.eFC=new C.w("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.eGd=new C.w("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.eGL=new C.w("Make it yours",null,B.l7,null,null,null,null,null,null,null,null,null)
D.eqv=new C.E(!0,B.aB,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eH_=new C.w("Your mass never changes. What changes is how hard each world pulls on it.",null,D.eqv,null,null,null,null,null,null,null,null,null)
D.eva=new C.E(!0,B.jb,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJ6=new C.w("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.eva,null,null,null,null,null,null,null,null,null)
D.eJl=new C.w("YOUR DECODING",null,O.md,null,null,null,null,null,null,null,null,null)
D.exq=new C.E(!0,B.c3,null,null,null,null,9,B.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKy=new C.w("WHAT HAPPENS",null,D.exq,null,null,null,null,null,null,null,null,null)
D.eM4=new C.w("Check",null,null,null,null,null,null,null,null,null,null,null)
D.eMH=new C.w("Change the words and pictures on the three slabs.",null,B.R3,null,null,null,null,null,null,null,null,null)
D.eMR=new C.w("All the parts and wires will be removed.",null,B.hk,null,null,null,null,null,null,null,null,null)
D.eN9=new C.w("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.eNI=new C.w("All challenges done! Keep inventing.",null,B.h7,null,null,null,null,null,null,null,null,null)
D.eNH=new C.w("Tap the crank on the board again and again to spin it faster.",null,B.i1,null,null,null,null,null,null,null,null,null)
D.eOv=new C.w("INTERCEPTED",null,O.md,null,null,null,null,null,null,null,null,null)
D.ePi=new C.w("Remove this part",null,R.aIV,null,null,null,null,null,null,null,null,null)
D.ePz=new C.w("Clear the board?",null,B.di,null,null,null,null,null,null,null,null,null)
D.ewX=new C.E(!0,B.br,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePO=new C.w("How the Lab works",null,D.ewX,null,null,null,null,null,null,null,null,null)
D.eQ5=new C.w("?",null,I.aKk,null,null,null,null,null,null,null,null,null)
D.ev4=new C.E(!0,B.b3,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQ9=new C.w("Planet Earth",null,D.ev4,null,null,null,null,null,null,null,null,null)
D.eRf=new C.w("Ready-made circuits",null,B.dP,null,null,null,null,null,null,null,null,null)
D.eS4=new C.w("UNIVERSE EXPLORER",null,E.a3R,null,null,null,null,null,null,null,null,null)
D.eUm=new C.w("SECRET VERSION",null,O.md,null,null,null,null,null,null,null,null,null)
D.ezM=new C.E(!0,B.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUR=new C.w("\u26a0 There is no air here, so a parachute will not work.",null,D.ezM,null,null,null,null,null,null,null,null,null)
D.eW_=new C.w("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,R.a3K,null,null,null,null,null,null,null,null,null)
D.eWC=new C.w("You build a machine. A little light runs along the wires, and every part it touches does something.",null,B.a4c,null,null,null,null,null,null,null,null,null)
D.eWX=new C.w("Tap it to change its setting. Drag from the right dot to connect.",null,B.l8,null,null,null,null,null,null,null,null,null)
D.eXP=new C.w("TOOLBOX",null,E.a3R,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.fU0=null
$.fU_=null
$.fZU=0
$.hqo=C.R(x.N,x.j)
$.hqZ=C.R(x.N,x.j)
$.hl3=C.R(x.N,C.aA("dz"))
$.c9t=C.a([],C.aA("M<afL>"))
$.fR4=0
$.c9x="music"
$.fTm=null
$.hqK=C.R(x.N,x.j)
$.hrM=C.R(x.N,x.j)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hW7","bzB",()=>{var v="led"
return C.a([A.av6("Both together","Make the light glow only when BOTH switches are ON.",2,new A.eZN(),v),A.av6("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new A.eZO(),v),A.av6("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new A.eZP(),v),A.av6("Flip it","One switch only: make the light glow when the switch is OFF.",1,new A.eZT(),v),A.av6("Not both","Make the light go OFF only when both switches are ON.",2,new A.eZU(),v),A.av6("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new A.eZV(),"buzzer")],C.aA("M<b6S>"))})
w($,"hWy","bzD",()=>C.a([A.ns("UNIVERSE","Earth, space and gravity",B.Lo,B.b3,new A.f_a()),A.ns("ELECTRONICS LAB","Batteries, wires, real circuits",A5.Xj,B.b3,new A.f_b()),A.ns("AI INVENTOR","Say it, watch it get built",B.dO,B.bE,new A.f_c()),A.ns("DISCOVERY LAB","Body Explorer: a real 3D human",D.X9,B.bt,new A.f_n()),A.ns("TOOLBOX","Converter, clock, games",M.afN,B.dh,new A.f_q()),A.ns("MOLECULE MAKER","Join atoms into real molecules",B.KR,B.hT,new A.f_r()),A.ns("DNA LAB","Copy DNA, build a protein",D.X9,B.cd,new A.f_s()),A.ns("ECOSYSTEM LAB","Grass, rabbits and foxes",B.x1,B.bt,new A.f_t()),A.ns("BALANCE LAB","Levers, weight and torque",B.ah9,B.aM,new A.f_u()),A.ns("GEAR LAB","Teeth, speed and force",B.Eu,B.dh,new A.f_v()),A.ns("LASER MAZE","Bend the beam with mirrors",E.ag7,B.aH,new A.f_w()),A.ns("LIGHT MIXER","Match colours with light",D.boQ,B.bc,new A.f_d()),A.ns("CIPHER LAB","Make and crack secret codes",B.xb,B.b3,new A.f_e()),A.ns("REACTION LAB","Wire parts together",B.xf,B.br,new A.f_f()),A.ns("SPARK PAINTER","Paint with light",B.Xb,B.cd,new A.f_g()),A.ns("ROCKET LANDER","Land softly on the pad",B.m0,B.b3,new A.f_h()),A.ns("ORBIT STUDIO","Slingshot planets",B.lZ,B.dh,new A.f_i()),A.ns("SWARM STUDIO","A living school of fish",B.KR,B.bt,new A.f_j()),A.ns("CHAIN BURST","One tap, a whole chain",B.hg,B.cd,new A.f_k()),A.ns("TITLE ANIMATOR","Make a moving title",B.Ai,B.cV,new A.f_l()),A.ns("CIRCUIT LAB","Connect logic, learn it",B.XF,B.cK,new A.f_m()),A.ns("MARBLE MUSIC","Marbles ring the notes",D.bow,B.bc,new A.f_o()),A.ns("ORBIT SEQUENCER","Planets play the tune",D.br_,B.bE,new A.f_p())],C.aA("M<bol>")))
w($,"hY1","a0v",()=>{var v,u,t=C.R(x.N,x.D)
for(v=0;v<16;++v){u=D.Nj[v]
t.m(0,u.a,u)}return t})
w($,"hW8","bzC",()=>C.a([A.Wz("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new A.eZW()),A.Wz("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new A.eZX()),A.Wz("Spin the motor","A battery and a motor in a loop will make it spin.",new A.eZY()),A.Wz("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new A.eZZ()),A.Wz("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new A.f__()),A.Wz("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new A.eZQ()),A.Wz("Watch TV","A TV needs more power. Set a battery to 12 volts.",new A.eZR()),A.Wz("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new A.eZS())],C.aA("M<b6T>")))
w($,"hWA","h75",()=>C.a([A.Zy("Spin the Wheel","Let luck decide","\ud83c\udfa1",B.aM,B.cl,new A.f_E()),A.Zy("Focus Timer","Work, then rest","\u23f1\ufe0f",B.cN,B.bS,new A.f_F()),A.Zy("Breathe","Calm down in a minute","\ud83e\udee7",B.hT,B.cB,new A.f_G()),A.Zy("Draw Pad","Sketch and share","\ud83c\udfa8",B.bz,B.b0,new A.f_H()),A.Zy("Memory Match","Find the pairs","\ud83c\udccf",B.b3,B.c9,new A.f_I()),A.Zy("Simon Sounds","Copy the tune","\ud83c\udfb5",B.cV,B.bq,new A.f_J()),A.Zy("Tip & Split","Share the bill","\ud83e\uddfe",B.bt,B.aW,new A.f_K()),A.Zy("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",B.bE,B.aA,new A.f_L())],C.aA("M<bpF>")))
w($,"hWz","h74",()=>C.a([A.acD("EARTH GLOBE","Turn it, tap a country",B.lZ,B.b3,new A.f_x()),A.acD("SOLAR SYSTEM","The Sun and its worlds",D.boz,B.aM,new A.f_y()),A.acD("GRAVITY LAB","Drop, weigh, orbit",B.XV,B.dh,new A.f_z()),A.acD("BLACK HOLE","Throw in a star",B.DW,B.bE,new A.f_A()),A.acD("GALAXY","Build, tilt, collide",B.wN,B.fY,new A.f_B()),A.acD("SIZE COMPARE","Earth next to a star",D.boS,B.cd,new A.f_C()),A.acD("SEASONS & MOON","Why it is summer",B.un,B.br,new A.f_D())],C.aA("M<bpA>")))})()};
(a=>{a["jkQZAl3SktoNDeGuSJPOnkHeKvY="]=a.current})($__dart_deferred_initializers__);