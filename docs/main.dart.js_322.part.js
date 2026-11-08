((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A0,A7,A1,A2,H,V,A8,W,P,A3,I,A9,A4,Aa,X,Ab,O,Ac,Ad,Ae,Y,Q,Z,Af,N,Ag,Ah,R,Ai,Aj,M,S,Ak,E,F,K,C={
hp8(b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null
if(b5===D.aiB)return b6.aK3(b4)
w=D.cXA[b5.a]
v=b4.gbb(0)
u=b4.gcn(0)
t=b6.geC()
s=B.hq(b3,b3,A.c7,0,A.e_,v,b3,0,1,t,A.c7,u,!1)
r=B.I9(b4,!1,!1)
for(q=w.length,p=t.b,o=2<p,n=1<p,m=0<p,l=t.c,k=0;k<v;++k)for(j=0;j!==u;++j){i=r.a
h=i==null?b3:i.dQ(j,k,b3)
if(h==null)h=new B.iq()
g=A.k.N(h.h(0,0))
f=A.k.N(h.h(0,1))
e=A.k.N(h.h(0,2))
d=b6.bmB(g,f,e)
i=s.a
if(i!=null)i.mS(j,k,d)
a0=m?l[d*p]:0
a1=n?l[d*p+1]:0
a2=o?l[d*p+2]:0
a3=g-a0
a4=f-a1
a5=e-a2
if(a3===0&&a4===0&&a5===0)continue
for(a6=0;a6!==q;++a6){i=w[a6]
a7=A.k.N(i[1])
a8=A.k.N(i[2])
a9=a7+j
b0=!1
if(a9>=0)if(a9<u){a9=a8+k
a9=a9>=0&&a9<v}else a9=b0
else a9=b0
if(a9){b1=i[0]
i=r.a
b2=i==null?b3:i.dQ(j+a7,k+a8,b3)
if(b2==null)b2=new B.iq()
b2.sb2(0,b2.gb2(b2)+a3*b1)
b2.sbc(b2.gbc()+a4*b1)
b2.sb9(0,b2.gb9(b2)+a5*b1)}}}return s},
aUh:function aUh(d,e){this.a=d
this.b=e},
bSt:function bSt(d,e,f,g){var _=this
_.a=d
_.b=e
_.e=f
_.f=g
_.y=_.x=_.w=null
_.Q=_.z=$
_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=0
_.dx=!1
_.dy=$
_.fr=0
_.fx=null},
bSu:function bSu(d,e){this.a=d
this.b=e},
cn2:function cn2(d,e){this.a=d
this.b=e},
bzO(d){return C.hUU(d)},
hUU(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bzO=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.r1(B.nb(""),d,A.hM,null,null).da(0,A.Zr),$async$bzO)
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
return B.i($async$bzO,v)},
i5P(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.QP[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cU(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.h_(D.QP,new C.fzm())
if(w==null)w=A.d.gI(D.QP)
s=B.U(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.M)(r),++u){l=r[u].a
k=l[0]
l=$.qo().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.M)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gI(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.ak7(w.a,w.b,m,w,s,!1)},
i_o(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.Re,new C.foW(),x.bd).aH(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
idL(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cu(b2,"{")
v=A.a.oL(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.X.aN(0,A.a.aq(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aY(a5)
r=0
for(a6=x.j,a7=J.aV(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gR(a7)
p=B.w(J.q(q,"kind"))
o=B.w(J.q(q,"id"))
if(!$.qo().aj(0,p)||J.f0(s,o)||J.ad(t)>=8)continue
J.cb(s,o)
n=B.U(a5,a8)
for(a9=0;a9<4;++a9){m=D.dqt[a9]
l=J.q(q,m)
if(typeof l=="number")J.aH(n,m,l)}k=A.k.E(typeof J.q(q,"x")=="number"?B.e5(J.q(q,"x")):0.2+A.k.F(r,3)*0.3,0.16,0.84)
j=A.k.E(typeof J.q(q,"y")=="number"?B.e5(J.q(q,"y")):0.25+A.k.ao(r,3)*0.3,0.1,0.9)
J.cb(t,new B.ea([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aV(a6.a(J.q(u,"wires")));a5.C();){h=a5.gR(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.q(g,0))
e=B.w(J.q(g,2))
d=A.o.E(A.k.N(B.e5(J.q(g,1))),0,1)
a0=A.o.E(A.k.N(B.e5(J.q(g,3))),0,1)
if(J.f0(s,f)&&J.f0(s,e)&&!J.A(f,e))J.cb(i,new B.cw([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.bM.a(J.q(u,"steps"))
a0=J.aV(a0==null?A.cy:a0)
while(a0.C()){a2=a0.gR(a0)
J.cb(a1,B.w(a2))}a3=a1
a0=J.q(u,"title")
a0=B.w(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new C.mJ(a0,B.w(a1==null?"":a1),t,i,A.Z)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.ak7(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
i4p(d){var w,v,u=C.h9C()
d.B(u)
for(w=0;w<60;++w)u.vi(0,0.03333333333333333)
v=u.a
return A.d.b5(v,new C.fw6(u))&&!A.d.d5(v,new C.fw7())},
i4o(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.U(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.M)(l),++u){t=l[u];++v
k.n(0,t.a,$.qo().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.M)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.doJ,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aH(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.k.ac(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.M)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aH(s,"\n")+"\nWires: "+A.d.aH(l,"; ")},
hTr(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.M)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aH(v,"\n")+"\n\n"}v=A.d.aH(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
i5O(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qo().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Re[u]
if(A.d.b5(w,new C.fzj(s)))if(!B.cU(r,s.b.toLowerCase(),0))v=B.cU(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Z(w,new C.fzk(e),B.T(w).k("Z<1>")).gan(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.ac(A.d.cI(w,0,new C.fzl())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gI(w)
w=$.qo().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ak7:function ak7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fzm:function fzm(){},
foW:function foW(){},
fw6:function fw6(d){this.a=d},
fw7:function fw7(){},
fzj:function fzj(d){this.a=d},
fzk:function fzk(d){this.a=d},
fzl:function fzl(){},
VN:function VN(d,e){this.c=d
this.a=e},
bkx:function bkx(d,e,f,g,h){var _=this
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
ebF:function ebF(d){this.a=d},
ebG:function ebG(d,e,f){this.a=d
this.b=e
this.c=f},
ebH:function ebH(d){this.a=d},
ebS:function ebS(d){this.a=d},
ebT:function ebT(d,e){this.a=d
this.b=e},
ebO:function ebO(d){this.a=d},
ebM:function ebM(d,e){this.a=d
this.b=e},
ebN:function ebN(d,e,f){this.a=d
this.b=e
this.c=f},
ebP:function ebP(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ebK:function ebK(d){this.a=d},
ebL:function ebL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebQ:function ebQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ebJ:function ebJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebR:function ebR(d,e){this.a=d
this.b=e},
ebI:function ebI(d,e){this.a=d
this.b=e},
ebW:function ebW(d){this.a=d},
ebV:function ebV(d){this.a=d},
ebX:function ebX(d){this.a=d},
ebU:function ebU(d){this.a=d},
ebY:function ebY(d,e){this.a=d
this.b=e},
ebZ:function ebZ(d,e){this.a=d
this.b=e},
ec_:function ec_(d,e){this.a=d
this.b=e},
ec0:function ec0(d,e){this.a=d
this.b=e},
bA8(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fgo,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p)},
hnb(d,e,f,g){var w=null,v=B.m(24),u=B.J(f.j(0.6),A.r,1)
return B.at(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,B.d(e,w,w,w,w,w,w,A.wV,A.L,w,w),A.aA,B.bW(A.fE,g,A.bq,w,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new B.o(D.bcY,w,u,v,w,w,A.n),w,w,w,w,A.ab,w,w,w),w,w,w)},
Gj:function Gj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
v1:function v1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
W9:function W9(d){this.a=d},
aEL:function aEL(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.iK$=h
_.oE$=i
_.nh$=j
_.iL$=k
_.bz$=l
_.a9$=m
_.c=_.a=null},
epV:function epV(){},
eqe:function eqe(d){this.a=d},
eqd:function eqd(d,e){this.a=d
this.b=e},
eqf:function eqf(){},
eqg:function eqg(){},
epX:function epX(d,e,f){this.a=d
this.b=e
this.c=f},
epW:function epW(d,e){this.a=d
this.b=e},
epM:function epM(d){this.a=d},
epN:function epN(d){this.a=d},
epO:function epO(d){this.a=d},
epP:function epP(d){this.a=d},
epQ:function epQ(d){this.a=d},
epR:function epR(d){this.a=d},
epS:function epS(d){this.a=d},
epT:function epT(d){this.a=d},
epU:function epU(d){this.a=d},
epK:function epK(d){this.a=d},
epL:function epL(d){this.a=d},
epJ:function epJ(d){this.a=d},
eq7:function eq7(d,e){this.a=d
this.b=e},
eq2:function eq2(d){this.a=d},
eq3:function eq3(d){this.a=d},
eq_:function eq_(d){this.a=d},
eq4:function eq4(d){this.a=d},
epZ:function epZ(d){this.a=d},
eq5:function eq5(d){this.a=d},
eq6:function eq6(d){this.a=d},
epY:function epY(d){this.a=d},
eq8:function eq8(d,e){this.a=d
this.b=e},
eq1:function eq1(d,e){this.a=d
this.b=e},
eq9:function eq9(d){this.a=d},
eqa:function eqa(d){this.a=d},
eqb:function eqb(d){this.a=d},
eqc:function eqc(d){this.a=d},
eq0:function eq0(d){this.a=d},
bhC:function bhC(d,e){this.b=d
this.a=e},
aMw:function aMw(){},
bxO:function bxO(){},
cJx(){var w=0,v=B.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cJx=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.r3().jK(0,"assets/data/body3d.bin"),$async$cJx)
case 3:d=a1
$.hit=J.eG(A.dG.gaR(d),d.byteOffset,d.byteLength)
t=B.aSI(d)
s=t.getUint32(4,!0)
r=B.a([],x.m)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jw(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.ddc[i]
g=B.b1((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a3j(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b0j))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.baD(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cJx,v)},
aSv:function aSv(d,e,f){this.a=d
this.b=e
this.c=f},
a3j:function a3j(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
baD:function baD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
UG:function UG(d){this.a=d},
aDg:function aDg(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.iK$=s
_.oE$=t
_.nh$=u
_.iL$=v
_.bz$=w
_.a9$=a0
_.c=_.a=null},
dJd:function dJd(d){this.a=d},
dJc:function dJc(d,e){this.a=d
this.b=e},
dIQ:function dIQ(d,e){this.a=d
this.b=e},
dIR:function dIR(){},
dJe:function dJe(){},
dIS:function dIS(d,e){this.a=d
this.b=e},
dIT:function dIT(d){this.a=d},
dIU:function dIU(){},
dIV:function dIV(d){this.a=d},
dIX:function dIX(d,e){this.a=d
this.b=e},
dIW:function dIW(d){this.a=d},
dIN:function dIN(d,e,f){this.a=d
this.b=e
this.c=f},
dIO:function dIO(d){this.a=d},
dIP:function dIP(d){this.a=d},
dJ3:function dJ3(d){this.a=d},
dJ4:function dJ4(d,e){this.a=d
this.b=e},
dJ5:function dJ5(d,e){this.a=d
this.b=e},
dJ6:function dJ6(d){this.a=d},
dJ2:function dJ2(d,e){this.a=d
this.b=e},
dJ7:function dJ7(d,e){this.a=d
this.b=e},
dJ1:function dJ1(d,e){this.a=d
this.b=e},
dJ8:function dJ8(d){this.a=d},
dJ0:function dJ0(d){this.a=d},
dJ9:function dJ9(d){this.a=d},
dJ_:function dJ_(d){this.a=d},
dJa:function dJa(d){this.a=d},
dIZ:function dIZ(d){this.a=d},
dJb:function dJb(d){this.a=d},
dIY:function dIY(d){this.a=d},
aLG:function aLG(){},
aLH:function aLH(){},
c3Q:function c3Q(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c3R:function c3R(d,e){this.a=d
this.b=e},
c3S:function c3S(d){this.a=d},
ayF(d,e,f,g,h){return new C.bbm(d,e,f,g,h)},
h0c(d,e,f,g,h,i){return $.hQP.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cQr(d,e,f,i,g,h))},
yh:function yh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Cy:function Cy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ns:function ns(d,e,f){this.a=d
this.b=e
this.c=f},
bbm:function bbm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fiI:function fiI(){},
fiJ:function fiJ(){},
fiK:function fiK(){},
fiR:function fiR(){},
fiS:function fiS(){},
fiT:function fiT(){},
UL:function UL(d){this.a=d},
aDi:function aDi(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.iK$=m
_.oE$=n
_.nh$=o
_.iL$=p
_.bz$=q
_.a9$=r
_.c=_.a=null},
dKT:function dKT(d){this.a=d},
dKx:function dKx(d,e){this.a=d
this.b=e},
dKA:function dKA(){},
dKU:function dKU(){},
dKv:function dKv(d,e){this.a=d
this.b=e},
dKw:function dKw(d,e){this.a=d
this.b=e},
dKB:function dKB(d,e,f){this.a=d
this.b=e
this.c=f},
dKq:function dKq(){},
dKr:function dKr(){},
dKs:function dKs(d){this.a=d},
dKt:function dKt(d,e){this.a=d
this.b=e},
dKu:function dKu(d,e,f){this.a=d
this.b=e
this.c=f},
dKC:function dKC(){},
dKD:function dKD(d,e){this.a=d
this.b=e},
dKE:function dKE(d){this.a=d},
dKz:function dKz(d,e){this.a=d
this.b=e},
dKy:function dKy(d){this.a=d},
dKp:function dKp(d,e,f){this.a=d
this.b=e
this.c=f},
dKN:function dKN(d){this.a=d},
dKM:function dKM(d){this.a=d},
dKO:function dKO(d){this.a=d},
dKL:function dKL(d){this.a=d},
dKJ:function dKJ(d){this.a=d},
dKK:function dKK(d){this.a=d},
dKI:function dKI(d){this.a=d},
dKF:function dKF(d){this.a=d},
dKH:function dKH(d){this.a=d},
dKP:function dKP(d,e){this.a=d
this.b=e},
dKQ:function dKQ(d,e){this.a=d
this.b=e},
dKR:function dKR(d){this.a=d},
dKG:function dKG(d){this.a=d},
dKS:function dKS(d,e){this.a=d
this.b=e},
bbF:function bbF(d,e){this.b=d
this.a=e},
cQr:function cQr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aLL:function aLL(){},
bxC:function bxC(){},
hHF(){return new C.NA(null)},
Qu(d,e,f,g,h){return new C.btc(d,e,f,g,h)},
brC(d,e,f){return A.k.E((d-e)/(f-e),0,1)},
h0I(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
NA:function NA(d){this.a=d},
KF:function KF(d,e){this.a=d
this.b=e},
AJ:function AJ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aDz:function aDz(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dQJ:function dQJ(d,e){this.a=d
this.b=e},
dQI:function dQI(d){this.a=d},
dQL:function dQL(d,e){this.a=d
this.b=e},
dQK:function dQK(d){this.a=d},
btc:function btc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fj8:function fj8(){},
fj9:function fj9(){},
fja:function fja(){},
fjb:function fjb(){},
fjc:function fjc(){},
fjd:function fjd(){},
fje:function fje(){},
fjf:function fjf(){},
fjg:function fjg(){},
brD:function brD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f_6:function f_6(d){this.a=d},
f_5:function f_5(d,e){this.a=d
this.b=e},
f_3:function f_3(d){this.a=d},
f_7:function f_7(d){this.a=d},
f_4:function f_4(d,e){this.a=d
this.b=e},
af2:function af2(d,e,f){this.c=d
this.d=e
this.a=f},
adU:function adU(d,e,f){this.c=d
this.d=e
this.a=f},
Qn:function Qn(d,e,f,g,h,i,j,k,l,m){var _=this
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
bsB:function bsB(d,e){this.b=d
this.a=e},
bs6:function bs6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bal:function bal(d,e){this.b=d
this.a=e},
aHM:function aHM(d,e){this.c=d
this.a=e},
aHN:function aHN(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cO$=e
_.b4$=f
_.c=_.a=null},
eZN:function eZN(d){this.a=d},
eZM:function eZM(d){this.a=d},
eZL:function eZL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZK:function eZK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZI:function eZI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZH:function eZH(d,e,f){this.a=d
this.b=e
this.c=f},
eZJ:function eZJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eZG:function eZG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZV:function eZV(d){this.a=d},
eZU:function eZU(d){this.a=d},
eZW:function eZW(d,e){this.a=d
this.b=e},
eZX:function eZX(d,e){this.a=d
this.b=e},
eZY:function eZY(d,e){this.a=d
this.b=e},
eZT:function eZT(d,e,f){this.a=d
this.b=e
this.c=f},
eZZ:function eZZ(d,e,f){this.a=d
this.b=e
this.c=f},
eZS:function eZS(d){this.a=d},
eZO:function eZO(d){this.a=d},
f__:function f__(d){this.a=d},
f_0:function f_0(d){this.a=d},
eZR:function eZR(d,e){this.a=d
this.b=e},
f_1:function f_1(d,e){this.a=d
this.b=e},
eZQ:function eZQ(d,e){this.a=d
this.b=e},
f_2:function f_2(d,e){this.a=d
this.b=e},
eZP:function eZP(d,e){this.a=d
this.b=e},
eZE:function eZE(){},
eZF:function eZF(){},
brf:function brf(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqG:function bqG(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bb0:function bb0(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqI:function bqI(d,e,f){this.b=d
this.c=e
this.a=f},
buG:function buG(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aNl:function aNl(){},
hoE(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.aa(0,new B.t(w,0)),u=e.aF(0,new B.t(w,0)),t=1-f,s=3*t
return d.aJ(0,t*t*t).aa(0,v.aJ(0,s*t*f)).aa(0,u.aJ(0,s*f*f)).aa(0,e.aJ(0,f*f*f))},
bhB(d,e,f,g,h,i){return $.hRp.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.dll(d,e,f,i,g,h))},
a0y:function a0y(d,e){this.a=d
this.b=e},
qc:function qc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qU:function qU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
CC:function CC(d,e){this.a=d
this.b=e},
Zw:function Zw(d,e){this.a=d
this.b=e},
aeR:function aeR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0L:function a0L(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
CM:function CM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abO:function abO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ac3:function ac3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adX:function adX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bhz:function bhz(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bw$=_.bJ$=0},
dlp:function dlp(d){this.a=d},
dlq:function dlq(d){this.a=d},
dlm:function dlm(d,e){this.a=d
this.b=e},
dln:function dln(d){this.a=d},
dlo:function dlo(d){this.a=d},
dlr:function dlr(d){this.a=d},
dls:function dls(d){this.a=d},
dlt:function dlt(d){this.a=d},
dlu:function dlu(d){this.a=d},
dlv:function dlv(d){this.a=d},
dlw:function dlw(d){this.a=d},
dlx:function dlx(d){this.a=d},
dly:function dly(d){this.a=d},
dlz:function dlz(d){this.a=d},
G4:function G4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
W8:function W8(d){this.a=d},
aEK:function aEK(d,e,f,g,h,i,j){var _=this
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
_.bz$=i
_.a9$=j
_.c=_.a=null},
epf:function epf(d){this.a=d},
ep4:function ep4(d){this.a=d},
ep6:function ep6(){},
ep7:function ep7(){},
epa:function epa(){},
epb:function epb(d,e,f){this.a=d
this.b=e
this.c=f},
epc:function epc(d){this.a=d},
epd:function epd(d){this.a=d},
ep8:function ep8(){},
ep9:function ep9(d){this.a=d},
epF:function epF(d){this.a=d},
epe:function epe(){},
ep0:function ep0(d){this.a=d},
eph:function eph(d){this.a=d},
epg:function epg(d){this.a=d},
epj:function epj(){},
epi:function epi(d,e){this.a=d
this.b=e},
ep3:function ep3(){},
ep1:function ep1(d){this.a=d},
ep2:function ep2(d){this.a=d},
epD:function epD(d){this.a=d},
epC:function epC(d){this.a=d},
epE:function epE(d){this.a=d},
ept:function ept(d,e){this.a=d
this.b=e},
epB:function epB(d){this.a=d},
epz:function epz(d){this.a=d},
epA:function epA(d){this.a=d},
epy:function epy(d){this.a=d},
epx:function epx(d){this.a=d},
epu:function epu(d){this.a=d},
epv:function epv(d){this.a=d},
epw:function epw(d){this.a=d},
ep5:function ep5(){},
epp:function epp(d){this.a=d},
epq:function epq(d){this.a=d},
epo:function epo(d){this.a=d},
epr:function epr(d){this.a=d},
epn:function epn(d){this.a=d},
eps:function eps(d){this.a=d},
epm:function epm(d){this.a=d},
epl:function epl(d){this.a=d},
epk:function epk(d,e){this.a=d
this.b=e},
bhA:function bhA(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dll:function dll(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aMu:function aMu(){},
blZ:function blZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Qc:function Qc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Wn:function Wn(d){this.a=d},
bl5:function bl5(d,e,f,g,h,i,j,k){var _=this
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
_.bz$=j
_.a9$=k
_.c=_.a=null},
eBl:function eBl(d){this.a=d},
eBj:function eBj(d){this.a=d},
eBk:function eBk(){},
eAX:function eAX(){},
eAW:function eAW(){},
eB5:function eB5(d,e){this.a=d
this.b=e},
eB7:function eB7(d){this.a=d},
eBb:function eBb(d){this.a=d},
eB6:function eB6(d){this.a=d},
eBc:function eBc(d){this.a=d},
eBd:function eBd(d){this.a=d},
eBe:function eBe(d,e){this.a=d
this.b=e},
eB4:function eB4(d,e){this.a=d
this.b=e},
eBf:function eBf(d){this.a=d},
eB3:function eB3(d){this.a=d},
eBg:function eBg(d,e){this.a=d
this.b=e},
eB2:function eB2(d,e){this.a=d
this.b=e},
eBh:function eBh(d){this.a=d},
eB1:function eB1(d,e){this.a=d
this.b=e},
eBi:function eBi(d){this.a=d},
eB0:function eB0(d){this.a=d},
eB8:function eB8(d){this.a=d},
eB_:function eB_(d){this.a=d},
eB9:function eB9(d){this.a=d},
eAZ:function eAZ(d){this.a=d},
eBa:function eBa(d,e){this.a=d
this.b=e},
eAY:function eAY(d,e){this.a=d
this.b=e},
bsw:function bsw(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aMD:function aMD(){},
htR(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aF(0,e).gcH()*0.1
return new B.t((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
h9C(){var w=B.a([],x.bz),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a4C(w,v,u,A.cZ,B.U(x.N,x.y))},
hBt(d,e,f){var w=d.c,v=e===0?-1:1
return new B.t(w*f.a+v*C.h9D(d),d.d*f.b)},
h9D(d){return 42+(D.mc.aj(0,d.b)?(d.ch-1)*38:0)},
ee:function ee(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tF:function tF(d,e,f,g){var _=this
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
aau:function aau(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
abA:function abA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4C:function a4C(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bNh:function bNh(){},
bNs:function bNs(d){this.a=d},
bNn:function bNn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bNt:function bNt(d){this.a=d},
bNu:function bNu(d){this.a=d},
bNw:function bNw(d){this.a=d},
bNx:function bNx(d){this.a=d},
bNv:function bNv(d){this.a=d},
bNy:function bNy(d,e,f){this.a=d
this.b=e
this.c=f},
bNz:function bNz(d){this.a=d},
bNj:function bNj(d){this.a=d},
bNk:function bNk(d){this.a=d},
bNi:function bNi(d){this.a=d},
bNl:function bNl(d,e,f){this.a=d
this.b=e
this.c=f},
bNm:function bNm(d){this.a=d},
bNg:function bNg(d){this.a=d},
bNA:function bNA(d,e){this.a=d
this.b=e},
bNo:function bNo(d,e){this.a=d
this.b=e},
bNr:function bNr(d){this.a=d},
bNq:function bNq(d){this.a=d},
bNp:function bNp(d){this.a=d},
aiS:function aiS(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bHU:function bHU(){},
bHV:function bHV(){},
mJ:function mJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
coS:function coS(d){this.a=d},
idG(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.fL7(),c9=new C.fL9(),d0=new C.fLa(),d1=new C.fL8(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.az(w,d1.$3(new B.a3(w.a,w.b,w.c,w.d),A.bN,A.bL))
d3.bo(D.ehu,D.eeo,c9.$2(A.dN,1.4))
d3.bo(D.ee5,D.ee4,c9.$2(A.bs,2.4))
d3.bo(D.ee6,X.aIJ,c9.$2(A.bs,2.4))
if(c7){d2=c8.$1(A.fh.j(0.5))
d2.z=A.If
d3.ad(D.edP,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.t(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.az(d0.$4(-22,-26,44,50),d1.$3(D.aOM,A.aP,A.cr))
d3.ad(A.cH,16,c8.$1(A.bs))
d3.ad(A.cH,13,c8.$1(c7?A.aQ.j(0.85):A.M))
if(c7){d2=d3.a
J.bl(d2.save())
d2.translate(0,4)
d3.ic(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.ae,3).G()
d2.drawLine.apply(d2,[0,0,s*11,t*11,r])
r.delete()}d2.restore()
for(t=d5*0.8,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=Math.sin(v*2+d5)
r=c8.$1(A.c.j(0.8*(1-u))).G()
d2.drawCircle(s*9,4-u*12,1.6+u*2,r)
r.delete()}}d3.ad(D.ehm,2.4,c8.$1(c7?A.be:A.al))
d3.ad(D.eid,2.4,c8.$1(A.al))
return!0
case"blender":d3.az(d0.$5(-14,14,28,12,4),c8.$1(A.e6))
d2=$.S().r
t=x.v
q=new B.aF(d2,A.ag,c6,c6,B.a([],t))
q.D(new B.aX(-16,-26))
q.D(new B.aq(16,-26))
q.D(new B.aq(12,14))
q.D(new B.aq(-12,14))
q.D(new B.br())
d3.aG(q,c8.$1(A.fh.j(0.35)))
if(c7){d2=new B.aF(d2,A.ag,c6,c6,B.a([],t))
d2.D(new B.aX(-14,-10))
d2.D(new B.aq(14,-10))
d2.D(new B.aq(12,14))
d2.D(new B.aq(-12,14))
d2.D(new B.br())
d3.aG(d2,c8.$1(A.aw.j(0.7)))}d3.aG(q,c9.$2(A.ae,1.6))
d2=d3.a
J.bl(d2.save())
d2.translate(0,10)
d3.ic(0,d4.y)
d3.bo(D.a6X,D.aJ4,c9.$2(A.bO,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.F(s+v*0.33,1)
r=c8.$1(A.eU).G()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.az(d0.$5(-10,-4,20,10,4),c8.$1(A.aJ))
d3.ad(A.i4,3,c8.$1(c7?A.be:A.al))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a4B[m]
r=c9.$2(A.bs,3).G()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.bl(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).G()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=B.bJ(A.J,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).G()
d2.drawOval(B.bF(p),r)
r.delete()}d2.restore()}return!0
case"drill":w=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
w.D(new B.aX(-24,-12))
w.D(new B.aq(10,-12))
w.D(new B.aq(10,2))
w.D(new B.aq(-2,2))
w.D(new B.aq(-6,22))
w.D(new B.aq(-16,22))
w.D(new B.aq(-14,2))
w.D(new B.aq(-24,2))
w.D(new B.br())
d3.aG(w,d1.$3(D.eYg,A.aT,A.d1))
d3.aO(D.eXn,c8.$1(A.dv))
d2=d3.a
J.bl(d2.save())
d2.translate(18,-5)
d3.ic(0,d4.y*2)
d3.bo(A.J,D.eef,c9.$2(A.bO,2.4))
d3.bo(A.a6U,D.eee,c9.$2(A.ig,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dQ.j(1-u)).G()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.E(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aX(16,-6))
d2.D(new B.aq(52,-26))
d2.D(new B.aq(52,18))
d2.D(new B.aq(16,4))
d2.D(new B.br())
d3.aG(d2,c8.$1(A.bM.j(0.35*v)))}d3.az(d0.$5(-26,-6,30,12,3),d1.$3(D.eYm,A.bm,A.cm))
k=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
k.D(new B.aX(4,-6))
k.D(new B.aq(18,-12))
k.D(new B.aq(18,12))
k.D(new B.aq(4,6))
k.D(new B.br())
d3.aG(k,c8.$1(A.e6))
d3.ad(D.eek,7,c8.$1(c7?A.c:A.dv))
return!0
case"neon":d3.az(d0.$5(-30,-14,60,28,6),c8.$1(K.nb))
if(c7)j=d4.ax>0.5||A.o.F(A.k.bj(d5*17),3)!==0
else j=!1
i=j?A.c4:D.bmR
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c4.j(0.35))
t.z=A.mQ
d3.az(d2,t)}d3.az(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.ehA,i,17)
return!0
case"microwave":d3.az(d0.$4(-30,-18,60,38),d1.$3(D.eYs,A.bO,A.bm))
d2=d0.$5(-26,-14,38,30,3)
d3.az(d2,c8.$1(c7?A.bM.j(0.75):A.au))
if(c7){d2=d3.a
J.bl(d2.save())
d2.translate(-7,8)
d3.ic(0,d4.y*0.5)
d3.dO(B.bJ(A.J,7,22),c8.$1(A.d1))
d2.restore()}d3.az(d0.$5(15,-14,12,12,2),c8.$1(K.nb))
if(c7)d6.$5(d3,"0:"+A.a.aZ(A.o.u(59-A.o.F(A.k.bj(d5),60)),2,"0"),D.eel,A.bj,6.5)
d3.ad(D.eeB,4,c8.$1(A.dv))
return!0
case"doorbell":d3.az(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.ad(A.IO,10,c8.$1(c7?A.bG:A.bs))
d2=d3.a
J.bl(d2.save())
d2.translate(0,-8)
d3.ic(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.eih,A.c,16)
d2.restore()
d3.ad(A.kn,6,c8.$1(A.d2))
d3.ad(A.kn,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=B.bX(A.IO,14+v*6+A.k.F(t,6))
r=c9.$2(A.bG.j(0.9-v*0.3),1.8).G()
d2.drawArc.apply(d2,[B.bF(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bo(D.ehz,D.eib,c9.$2(A.bs,4))
d2=d3.a
J.bl(d2.save())
d3.ic(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.az(d0.$5(-24,-14,46,22,5),d1.$3(D.eYh,A.bO,A.al))
d3.ad(D.aIN,8,c8.$1(A.au))
d3.ad(D.aIN,4.5,c8.$1(c7?A.aQ:A.cm))
d3.ad(D.ehx,2.2,c8.$1(c7&&A.o.F(A.k.bj(d5*1.6),2)===0?A.aw:A.ka))
d2.restore()
if(c7)d6.$5(d3,"REC",D.ehI,A.aw,9)
return!0
case"console":d3.az(d0.$5(-28,-22,56,44,8),d1.$3(D.eYp,A.iO,A.fa))
d3.az(d0.$5(-20,-17,40,22,3),c8.$1(A.dM))
if(c7){d2=d5*2.3
d3.ad(new B.t(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aO(new B.a3(-18,t,-15.6,t+8),c8.$1(A.bj))
d2=-9+Math.sin(d2-0.4)*6
d3.aO(new B.a3(15.6,d2,18,d2+8),c8.$1(A.c4))}d3.ad(D.ehs,4,c8.$1(A.aW))
d3.ad(D.eeg,2.4,c8.$1(A.aw))
d3.ad(D.eey,2.4,c8.$1(A.be))
return!0
case"heartmon":d3.az(d0.$5(-30,-22,60,44,6),c8.$1(A.au))
d3.az(d0.$5(-26,-18,52,28,3),c8.$1(A.dM))
if(c7){d2=$.S()
t=B.a([],x.v)
h=new B.aF(d2.r,A.ag,c6,c6,t)
for(d2=d5*0.5,l=-25;l<=25;++l){u=A.k.F((l+25)/50-d2,1)
if(u<0.1)g=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)g=0.6
else{s=u<0.2?-0.4:0
g=s}f=-4+g*11
if(l===-25){s=new B.aX(l,f)
t.push(s)
p=h.f
if(p!=null)s.bv(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new B.aq(l,f)
t.push(s)
p=h.f
if(p!=null)s.bv(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aG(h,c9.$2(A.bj,1.8))
d6.$5(d3,"72",D.eeh,A.ha,11)
d2=d5*9
d6.$5(d3,"\u2665",D.ehN,A.ha.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ad(D.ehC,3,c8.$1(c7?A.be:A.bs))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.az(d2,c8.$1(A.cC.j(c7?0.5:0.3)))
d3.az(d0.$5(-26,-20,52,40,4),c9.$2(A.ae,1.6))
d3.aO(D.eYj,c8.$1(F.tx))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.bl(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.p_(0,-1,1)
d3.dO(B.bJ(A.J,8,14),c8.$1(A.cT))
d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aX(-6,0))
d2.D(new B.aq(-12,-4))
d2.D(new B.aq(-12,4))
d2.D(new B.br())
d3.aG(d2,c8.$1(A.cc))
d3.ad(D.efk,1.2,c8.$1(A.w))
s.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.k.F(d2+v*0.2,1)
t=Math.sin(u*8+v)
p=A.o.F(v,2)
r=c9.$2(A.ae,1).G()
s.drawCircle(-18+t*2,13-u*30,1.4+p,r)
r.delete()}}return!0
case"lighthouse":d2=$.S().r
t=x.v
e=new B.aF(d2,A.ag,c6,c6,B.a([],t))
e.D(new B.aX(-9,22))
e.D(new B.aq(-5,-16))
e.D(new B.aq(5,-16))
e.D(new B.aq(9,22))
e.D(new B.br())
d3.aG(e,d1.$3(D.eYU,A.c,A.by))
d3.aO(D.eYQ,c8.$1(c7?A.dQ:A.bs))
s=new B.aF(d2,A.ag,c6,c6,B.a([],t))
s.D(new B.aX(-7,-22))
s.D(new B.aq(0,-29))
s.D(new B.aq(7,-22))
s.D(new B.br())
d3.aG(s,c8.$1(A.ei))
if(c7){d=Math.sin(d4.y*0.3)
d2=new B.aF(d2,A.ag,c6,c6,B.a([],t))
d2.D(new B.aX(0,-19))
t=d*34
d2.D(new B.aq(t,-26))
d2.D(new B.aq(t,-12))
d2.D(new B.br())
d3.aG(d2,c8.$1(A.dQ.j(0.45)))
d2=c8.$1(A.dQ.j(0.35))
d2.z=A.If
d3.ad(D.edQ,14,d2)}return!0
case"discoball":d3.bo(D.edT,M.aIF,c9.$2(A.dv,1.4))
d3.ad(A.J,16,d1.$3(D.eY0,A.aP,A.al))
for(d2=d3.a,v=0;v<8;++v){t=-12+v*3.4
r=c9.$2(A.dp,0.7).G()
d2.drawLine.apply(d2,[-16,t,16,t,r])
r.delete()}for(v=0;v<5;++v){d=d4.y*0.5+v*1.26
t=Math.cos(d)
s=Math.sin(d)
p=Math.cos(d)
r=c9.$2(A.dp,0.7).G()
d2.drawLine.apply(d2,[t*16*0.3,s*16*0.3,p*16,0,r])
r.delete()}if(c7)for(t=d5*2,s=d5*9,v=0;v<10;++v){d=t+v*0.63
a0=22+A.o.F(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.ded[A.o.F(v,4)].j(0.5+0.5*Math.sin(s+v))).G()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.az(d0.$5(-14,-4,28,24,5),d1.$3(D.eXY,A.cr,A.al))
d3.az(d0.$5(-12,-26,24,20,5),d1.$3(D.eXR,A.aL,A.bL))
d3.bo(G.aIG,D.edU,c9.$2(A.bs,1.6))
d3.ad(D.edV,2.2,c8.$1(c7?A.aw:A.bs))
a1=c7&&A.k.F(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a4D[m]
if(c7)t=a1?A.b9:A.eV
else t=A.cm
r=c8.$1(t).G()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.bl(d2.save())
d2.translate(14,0)
d3.ic(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bo(A.J,D.a6P,c9.$2(A.bL,4))
d2.restore()
d3.bo(D.ehi,D.ehG,c9.$2(A.bL,4))
d3.aO(D.eYP,c8.$1(c7?A.b9.j(0.7):A.aJ))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.azH[m]+1,d2,10,14,2)
p=B.ar(A.bM,A.d1,a2)
p.toString
r=c8.$1(p).G()
t.drawRRect(B.ek(s),r)
r.delete()}d3.az(d0.$5(-24,-6,48,26,8),d1.$3(D.eYi,A.bO,A.bm))
for(m=0;m<2;++m){l=D.azH[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fo:A.au).G()
t.drawRRect(B.ek(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cT.j(0.5))
s.z=I.pk
r=s.G()
t.drawRRect(B.ek(d2),r)
r.delete()}}d3.bo(D.eeH,D.ef2,c9.$2(A.au,3))
return!0
case"ledstrip":d3.az(d0.$5(-34,-4,68,10,4),c8.$1(A.cm))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.F(t+v*40,360)
i=c7?new L.uC(1,a3,0.8,1).lH():A.e6
if(c7){s=c8.$1(i.j(0.45))
s.z=I.pk
r=s.G()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).G()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.az(d0.$5(-40,-2,6,6,1),c8.$1(A.dv))
return!0
case"pump":d3.az(d0.$5(-16,-2,32,22,6),d1.$3(D.eY6,A.cC,A.Fb))
d3.ad(D.ehO,8,c8.$1(A.pP))
d2=d3.a
J.bl(d2.save())
d2.translate(-2,9)
d3.ic(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.fh,2.4).G()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
t.D(new B.aX(16,6))
t.D(new B.aq(26,6))
t.D(new B.aq(26,-20))
t.D(new B.aq(10,-20))
d3.aG(t,c9.$2(A.bL,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.F(t+v*0.2,1)
r=c8.$1(A.he).G()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.ad(D.efY,3.2,c8.$1(A.he.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.bl(d2.save())
d3.ic(0,-0.15)
d3.az(d0.$5(-26,-14,40,22,10),d1.$3(D.eYk,A.id,A.tB))
d3.az(d0.$5(14,-10,12,14,3),c8.$1(A.cm))
d3.az(d0.$5(-10,6,12,22,4),c8.$1(A.e6))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).G()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cT.j(0.4))
d2.z=I.pk
d3.ad(D.eeA,8,d2)}return!0
case"headphones":d3.e2(B.bJ(A.dB,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bs,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=F.Rr[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new B.a3(s,0,s+14,20),A.bv,A.oT).G()
d2.drawRRect(B.ek(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=B.bX(new B.t(l,10),10+v*5+A.k.F(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eF.j(0.9-v*0.3),1.6).G()
d2.drawArc.apply(d2,[B.bF(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new B.t(-4,-8-A.k.F(d5*14,8)),A.kv,12)
return!0
case"smartwatch":d3.az(d0.$5(-8,-30,16,14,3),c8.$1(A.cm))
d3.az(d0.$5(-8,14,16,14,3),c8.$1(A.cm))
d3.az(d0.$5(-14,-17,28,32,8),d1.$3(D.eXW,A.dv,A.e6))
d3.az(d0.$5(-11,-14,22,26,6),c8.$1(A.dM))
if(c7){a4=new B.V(Date.now(),0,!1)
d6.$5(d3,A.a.aZ(A.o.u(B.dm(a4)),2,"0")+":"+A.a.aZ(A.o.u(B.h3(a4)),2,"0"),D.edZ,A.bj,9.5)
g=(Math.sin(d5*9)+1)/2
d2=B.ar(A.EQ,A.ha,g)
d2.toString
d6.$5(d3,"\u2665",new B.t(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.F(A.k.bj(d5*2),6)),A.dB,A.c,7)}return!0
case"tablet":d3.az(d0.$5(-30,-22,60,44,6),c8.$1(K.nb))
d3.az(d0.$5(-30,-22,60,44,6),c9.$2(A.bL,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.ek(a5),$.nx(),!0)
d2.translate(-27,-19)
E.Lt(d3,D.f3G,d5,c6)
d2.restore()}else d3.az(a5,c8.$1(D.vJ))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.az(a6,d1.$3(new B.a3(a6.a,a6.b,a6.c,a6.d),A.dH,A.d6))
d3.az(a6,c9.$2(A.aZ,1.2))
d3.ad(D.aJc,9,c8.$1(A.au))
d3.ad(D.aJc,6,c9.$2(A.d1,2))
d3.az(d0.$5(4,-2,14,10,2),c8.$1(A.au))
d3.az(d0.$5(-22,-19,44,12,2),c8.$1(A.dM))
d2=A.k.ac(d4.db,1)
t=A.k.ac(c7?d4.dx:d4.e,1)
s=c7?A.bj:A.al
d6.$5(d3,d2+"\u2192"+t+"V",D.eg7,s,8.2)
d3.ad(D.eep,2.4,c8.$1(c7?A.be:A.aJ))
d6.$5(d3,"IN",D.ehH,A.ae,6)
d6.$5(d3,"OUT",D.efQ,A.ae,6)
return!0
case"regulator":a7=c7?A.k.E(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.ar(A.bL,A.aw,a7)
t.toString
d3.az(d2,c8.$1(t))
d3.ad(G.a6N,3,c8.$1(A.aJ))
d3.az(d0.$5(-12,-4,24,18,3),d1.$3(D.eXS,A.e6,A.hQ))
d6.$5(d3,"7805",D.a6X,A.ae,8)
for(d2=d3.a,m=0;m<3;++m){t=D.dks[m]-1
r=c8.$1(A.e3).G()
d2.drawRect(B.bF(new B.a3(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.F(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).G()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.eie,A.bl,9)
return!0
case"diode":d3.bo(D.aJg,D.aIZ,c9.$2(A.e3,2.4))
d3.az(d0.$5(-14,-7,28,14,6),c8.$1(A.aD.j(0.85)))
d3.aO(D.eXB,c8.$1(A.bl))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dQ.j(0.4))
t.z=A.lJ
d3.az(d2,t)}d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aX(-8,-4))
d2.D(new B.aq(-8,4))
d2.D(new B.aq(-1,0))
d2.D(new B.br())
d3.aG(d2,c8.$1(A.aW))
d6.$5(d3,"one way",D.ehv,A.aB,8)
return!0
case"ldr":d3.bo(D.aJg,D.a6X,c9.$2(A.e3,2.4))
d3.bo(D.aJ4,D.aIZ,c9.$2(A.e3,2.4))
d3.ad(A.J,12,c8.$1(A.d1))
d3.ad(A.J,12,c9.$2(A.r9,1.6))
d2=$.S()
t=B.a([],x.v)
a8=new B.aF(d2.r,A.ag,c6,c6,t)
a8.D(new B.aX(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new B.aq(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.bv(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aG(a8,c9.$2(A.bM,1.4))
d2=B.ar(A.bs,A.dQ,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.t(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.ehj,A.ae,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.eg
break A}if("sonytv"===d2){t=A.r1
break A}if("appletv"===d2){t=A.e3
break A}t=F.ES
break A}a9=d2==="lgtv"||d2==="appletv"
d3.az(d0.$5(-36,-24,72,a9?42:44,6),c8.$1(t))
t=a9?-35:-33
s=a9?-23:-21
p=a9?70:66
a5=d0.$5(t,s,p,a9?40:38,3)
t=a5.a
s=a5.b
if(c7){p=d3.a
J.bl(p.save())
p.clipRRect(B.ek(a5),$.nx(),!0)
p.translate(t,s)
E.h5J(d3,new B.au(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ad(D.ef5,1.6,c8.$1(A.bj))}else{d3.az(a5,c8.$1(D.vJ))
p=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
p.D(new B.aX(t,s))
p.D(new B.aq(t+24,s))
p.D(new B.aq(t,s+22))
p.D(new B.br())
d3.aG(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.az(d0.$5(-22,19,44,3,1.5),c8.$1(A.dv))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=K.je[m]
s=$.S()
p=B.a([],t)
s=new B.aF(s.r,A.ag,c6,c6,p)
p.push(new B.aX(l*30,20))
p.push(new B.aq(l*22,20))
p.push(new B.aq(l*26,26))
p.push(new B.br())
r=c8.$1(A.dv).G()
p=s.gbx().a.snapshot()
d2.drawPath((s.e=new B.cj(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.egL,A.bO,5.5)
break
case"appletv":d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aX(-8,18))
d2.D(new B.aq(8,18))
d2.D(new B.aq(12,25))
d2.D(new B.aq(-12,25))
d2.D(new B.br())
d3.aG(d2,c8.$1(D.Y2))
d6.$5(d3,"Apple TV",D.eg8,A.bs,4.8)
break
default:d3.az(d0.$5(-34,19,68,7,3),c8.$1(D.blb))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dp,0.6).G()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.eia,F.tx,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.mc.h(0,d2)
b1=b0.b===D.wJ
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
d3.az(w,d1.$3(new B.a3(p,o,b4,b5),b7,b6))
a5=d0.$5(t+2,s,b2-4,b3-4,3.5)
if(c7){t=d3.a
J.bl(t.save())
t.clipRRect(B.ek(a5),$.nx(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.Lt(d3,new B.au(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.az(a5,c8.$1(D.vJ))
if(b1){t=a5.b
s=a5.d
d3.bo(new B.t(0,t),new B.t(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.az(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.ad(new B.t(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.az(d0.$5(-17,-28,34,52,4),c8.$1(A.e6))
d3.az(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bO))
if(c7){d6.$5(d3,"NGMY",D.eik,A.au,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.F(v,4)===3?14:22
r=c8.$1(A.bm).G()
d2.drawRect(B.bF(new B.a3(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ad(A.a6L,1.6,c8.$1(A.au))}return!0
case"laptop":d3.az(d0.$5(-30,-28,60,42,4),d1.$3(D.eYt,A.cr,A.bm))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.ek(b8),$.nx(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.Lt(d3,new B.au(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.az(b8,c8.$1(D.vJ))
d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aX(-38,16))
d2.D(new B.aq(38,16))
d2.D(new B.aq(34,21))
d2.D(new B.aq(-34,21))
d2.D(new B.br())
d3.aG(d2,c8.$1(D.Y2))
d3.az(d0.$5(-7,16,14,2,1),c8.$1(A.bm))
return!0
case"imac":d3.az(d0.$5(-32,-28,64,46,5),d1.$3(D.eYx,A.bN,A.cr))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.ek(b9),$.nx(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.Lt(d3,new B.au(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.az(b9,c8.$1(D.vJ))
d3.ad(D.aIA,2,c8.$1(A.bL))
d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aX(-6,18))
d2.D(new B.aq(6,18))
d2.D(new B.aq(10,26))
d2.D(new B.aq(-10,26))
d2.D(new B.br())
d3.aG(d2,c8.$1(D.Y2))
return!0
case"monitor":d3.az(d0.$5(-34,-28,68,40,3),c8.$1(A.eg))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.ek(c0),$.nx(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.Lt(d3,new B.au(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.az(c0,c8.$1(D.vJ))
d3.aO(D.eYE,c8.$1(A.bm))
d3.az(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dv))
return!0
case"projector":if(c7){d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aX(14,4))
d2.D(new B.aq(-32,-42))
d2.D(new B.aq(34,-42))
d2.D(new B.br())
d3.aG(d2,c8.$1(A.dQ.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.ek(c1),$.nx(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.Lt(d3,new B.au(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.az(d0.$5(-26,-4,52,24,6),d1.$3(D.eYl,A.it,A.dv))
d3.ad(D.aIL,7,c8.$1(A.au))
d3.ad(D.aIL,4,c8.$1(c7?A.dQ:A.cm))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dp,1).G()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.az(d0.$5(-34,-10,68,32,12),c8.$1(A.au))
c2=d0.$5(-30,-20,60,28,8)
d3.az(c2,c8.$1(K.nb))
d3.az(c2,c9.$2(A.bs,1.2))
if(c7){c3=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
c3.D(new B.aX(-26,4))
c3.D(new B.c3(-10,-14+Math.sin(d5)*3,6,-6))
c3.D(new B.aq(22,-16))
d3.aG(c3,c9.$2(A.aQ,2.2))
d2=A.k.F(d5*6,48)
d3.ad(new B.t(-26+d2,4-d2*0.1),2.4,c8.$1(A.bj))
d6.$5(d3,""+(88+A.o.F(A.k.bj(d5*2),5)),G.aJ3,A.c,10)
d6.$5(d3,"km/h",D.efW,A.aB,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.az(c4,d1.$3(new B.a3(c4.a,c4.b,c4.c,c4.d),A.dv,A.e6))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.ek(c5),$.nx(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.Lt(d3,new B.au(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.bv.j(0.2))
d2.z=A.mQ
d3.ad(A.J,26,d2)}else d3.az(c5,c8.$1(A.M))
d3.bo(D.ehV,D.ei_,c9.$2(A.bm,4))
d3.bo(D.ef7,D.efn,c9.$2(A.bm,4))
return!0}return!1},
fL7:function fL7(){},
fL9:function fL9(){},
fLa:function fLa(){},
fL8:function fL8(){},
h8r(d,e,f,g){return new C.aiQ(d,g,f,e)},
FQ(d,e,f){return new C.bbn(d,e,f)},
aiQ:function aiQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aiR:function aiR(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.iK$=h
_.oE$=i
_.nh$=j
_.iL$=k
_.bz$=l
_.a9$=m
_.c=_.a=null},
bHy:function bHy(d,e){this.a=d
this.b=e},
bHz:function bHz(d){this.a=d},
bHx:function bHx(d){this.a=d},
bHA:function bHA(){},
bHB:function bHB(d){this.a=d},
bHC:function bHC(d,e,f){this.a=d
this.b=e
this.c=f},
bHw:function bHw(d,e){this.a=d
this.b=e},
bHu:function bHu(d,e){this.a=d
this.b=e},
bHv:function bHv(d,e,f){this.a=d
this.b=e
this.c=f},
bHo:function bHo(d,e){this.a=d
this.b=e},
bHp:function bHp(){},
bHq:function bHq(d,e){this.a=d
this.b=e},
bHr:function bHr(d,e){this.a=d
this.b=e},
bHs:function bHs(d){this.a=d},
bHt:function bHt(d){this.a=d},
bHR:function bHR(d){this.a=d},
bHS:function bHS(){},
bH1:function bH1(){},
bHT:function bHT(d,e){this.a=d
this.b=e},
bHQ:function bHQ(d,e,f){this.a=d
this.b=e
this.c=f},
bHL:function bHL(d){this.a=d},
bHI:function bHI(d,e,f){this.a=d
this.b=e
this.c=f},
bHJ:function bHJ(d,e){this.a=d
this.b=e},
bHM:function bHM(d){this.a=d},
bHG:function bHG(d,e){this.a=d
this.b=e},
bHH:function bHH(d,e){this.a=d
this.b=e},
bHK:function bHK(d){this.a=d},
bHN:function bHN(d){this.a=d},
bHE:function bHE(d,e){this.a=d
this.b=e},
bHF:function bHF(d,e){this.a=d
this.b=e},
bHO:function bHO(d){this.a=d},
bHD:function bHD(d){this.a=d},
bHP:function bHP(d){this.a=d},
bH2:function bH2(d,e){this.a=d
this.b=e},
bHl:function bHl(d,e){this.a=d
this.b=e},
bHn:function bHn(d,e){this.a=d
this.b=e},
bHm:function bHm(d,e){this.a=d
this.b=e},
bH8:function bH8(d,e){this.a=d
this.b=e},
bH9:function bH9(d){this.a=d},
bH7:function bH7(d){this.a=d},
bHa:function bHa(d,e,f){this.a=d
this.b=e
this.c=f},
bH6:function bH6(d,e){this.a=d
this.b=e},
bHd:function bHd(d,e){this.a=d
this.b=e},
bHe:function bHe(d,e){this.a=d
this.b=e},
bHf:function bHf(d,e){this.a=d
this.b=e},
bHg:function bHg(d,e,f){this.a=d
this.b=e
this.c=f},
bH5:function bH5(d,e){this.a=d
this.b=e},
bHh:function bHh(d,e,f){this.a=d
this.b=e
this.c=f},
bH4:function bH4(d,e){this.a=d
this.b=e},
bHi:function bHi(d,e,f){this.a=d
this.b=e
this.c=f},
bH3:function bH3(d,e){this.a=d
this.b=e},
bHj:function bHj(d){this.a=d},
bHk:function bHk(d){this.a=d},
bHb:function bHb(d){this.a=d},
bHc:function bHc(d){this.a=d},
bbn:function bbn(d,e,f){this.a=d
this.b=e
this.c=f},
fiU:function fiU(){},
fiV:function fiV(){},
fiW:function fiW(){},
fiH:function fiH(){},
fiX:function fiX(){},
fiG:function fiG(){},
fiY:function fiY(){},
fiL:function fiL(){},
fiF:function fiF(){},
fiM:function fiM(){},
fiE:function fiE(){},
fiN:function fiN(){},
fiD:function fiD(){},
fiO:function fiO(){},
fiB:function fiB(){},
fiC:function fiC(){},
fiP:function fiP(){},
fiz:function fiz(){},
fiA:function fiA(){},
fiQ:function fiQ(){},
fiy:function fiy(){},
Vm:function Vm(d){this.a=d},
aDL:function aDL(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dVh:function dVh(d,e){this.a=d
this.b=e},
dVq:function dVq(d){this.a=d},
dVr:function dVr(){},
dVs:function dVs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dVt:function dVt(){},
dVg:function dVg(d){this.a=d},
dVf:function dVf(d,e,f){this.a=d
this.b=e
this.c=f},
dVe:function dVe(d,e){this.a=d
this.b=e},
dVc:function dVc(d){this.a=d},
dVd:function dVd(){},
dVp:function dVp(d){this.a=d},
dVo:function dVo(d){this.a=d},
dVm:function dVm(d,e){this.a=d
this.b=e},
dVk:function dVk(d){this.a=d},
dVl:function dVl(){},
dVn:function dVn(d,e,f){this.a=d
this.b=e
this.c=f},
dVi:function dVi(d,e){this.a=d
this.b=e},
dVj:function dVj(){},
dVv:function dVv(d){this.a=d},
dVw:function dVw(d,e){this.a=d
this.b=e},
dVu:function dVu(){},
dVx:function dVx(d,e){this.a=d
this.b=e},
dVy:function dVy(d){this.a=d},
dVz:function dVz(d){this.a=d},
axM:function axM(d,e){this.c=d
this.a=e},
b9A:function b9A(d,e){var _=this
_.d=$
_.bz$=d
_.a9$=e
_.c=_.a=null},
cFX:function cFX(d){this.a=d},
b9z:function b9z(d,e){this.b=d
this.a=e},
cFW:function cFW(d){this.a=d},
ay4:function ay4(){},
ay5:function ay5(){},
aK9:function aK9(){},
bxE:function bxE(){},
idI(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bX(A.uU,23)
$.S()
b8=B.I()
b8.r=A.au.gp(0)
b9.ad(A.uU,25,b8)
b8=B.I()
b8.sam(D.eqt.aB(0,v))
b9.ad(A.uU,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=A.bl.gp(0)
o.c=A.o.F(u,5)===0?1.8:1
n=o.G()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.k.E(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.I()
r.r=A.by.gp(0)
r.c=2
r.d=A.bB
b9.bo(A.uU,new B.t(b8*18,s*18-2),r)
r=B.I()
r.r=A.bl.gp(0)
b9.ad(A.uU,3,r)
c2.$5(b9,w?"V":"A",D.ei2,A.bl,12)
c2.$5(b9,w?A.k.ac(m,1)+" V":""+A.k.V(m*1000)+" mA",D.ehp,A.au,9.5)
return!0
case"fan":b8=B.bs(D.eXO,A.hx)
$.S()
s=B.I()
s.r=A.bs.gp(0)
b9.az(b8,s)
s=B.I()
s.r=A.al.gp(0)
b9.aO(D.eYF,s)
s=B.I()
s.r=A.M.j(0.6).gp(0)
b9.ad(G.uV,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bl(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bJ(A.aIE,18,10)
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.he.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.G()
b8.drawOval(B.bF(s),n)
n.delete()
b8.restore()}b8=B.I()
b8.r=A.bo.gp(0)
b9.ad(G.uV,4,b8)
b8=B.I()
b8.b=A.a9
b8.c=2
b8.r=A.cr.gp(0)
b9.ad(G.uV,22,b8)
b8=B.I()
b8.b=A.a9
b8.c=0.8
b8.r=A.jJ.gp(0)
b9.ad(G.uV,14,b8)
return!0
case"speaker":l=B.bs(D.aOM,A.v_)
$.S()
b8=B.I()
b8.sam(D.aqu.aB(0,new B.a3(l.a,l.b,l.c,l.d)))
b9.az(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=B.I()
b8.sam(D.eqP.aB(0,B.bX(A.cv,15)))
b9.ad(A.cv,14+k,b8)
b8=B.I()
b8.r=A.dv.gp(0)
b9.ad(A.cv,5,b8)
b8=B.I()
b8.r=A.bm.gp(0)
b9.ad(G.a6M,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=B.bX(D.eeG,6+u*6+A.k.F(b8,6))
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.b=A.a9
q.c=1.8
q.r=A.c4.j(0.9-u*0.2).gp(0)
n=q.G()
s.drawArc.apply(s,[B.bF(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=B.bs(D.eYw,A.v_)
$.S()
b8=B.I()
b8.sam(D.c2j.aB(0,new B.a3(j.a,j.b,j.c,j.d)))
b9.az(j,b8)
b8=B.bs(D.aOO,A.i6)
s=B.I()
s.r=A.hQ.gp(0)
b9.az(b8,s)
if(b7){i=new B.V(Date.now(),0,!1)
h=B.Fa(i)<500?":":" "
g=A.a.aZ(A.o.u(B.dm(i)),2,"0")
f=A.a.aZ(A.o.u(B.h3(i)),2,"0")
b8=B.I()
b8.r=A.bj.j(0.12).gp(0)
b9.aO(D.aOO,b8)
c2.$5(b9,g+h+f,D.ehL,A.bj,21)}b8=B.I()
b8.r=A.cr.gp(0)
b9.ad(D.ehJ,2.4,b8)
b8=B.I()
b8.r=A.cr.gp(0)
b9.ad(D.eeL,2.4,b8)
return!0
case"calculator":j=B.bs(D.eYb,A.hy)
$.S()
b8=B.I()
b8.sam(D.c23.aB(0,new B.a3(j.a,j.b,j.c,j.d)))
b9.az(j,b8)
b8=B.bs(D.eY4,A.hj)
s=B.I()
s.r=(b7?A.Ye:D.bnq).gp(0)
b9.az(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eho,A.X1,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=B.bs(new B.a3(q,s,q+6,r),A.Tl)
$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=(d===3?A.cc:A.bO).gp(0)
n=p.G()
b8.drawRRect(B.ek(q),n)
n.delete()}return!0
case"phone":j=B.bs(D.eY_,A.hy)
$.S()
b8=B.I()
b8.r=K.nb.gp(0)
b9.az(j,b8)
b8=B.I()
b8.b=A.a9
b8.c=1.9
b8.r=D.ai1.gp(0)
b9.az(j,b8)
a0=B.bs(D.eXQ,A.hx)
if(b7){b8=B.I()
b8.sam(D.c3C.aB(0,new B.a3(a0.a,a0.b,a0.c,a0.d)))
b9.az(a0,b8)
b8=b9.a
J.bl(b8.save())
b8.clipRRect(B.ek(a0),$.nx(),!0)
b8.translate(-12,-25)
E.Lt(b9,D.f3i,c1,b6)
b8.restore()
a1=A.k.F(c1*0.12,1)
b8=B.bs(D.eXN,A.hj)
s=B.I()
s.r=A.aW.gp(0)
b9.az(b8,s)
s=B.I()
s.r=A.bj.gp(0)
b9.aO(new B.a3(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.egr,A.c,6)}else{b8=B.I()
b8.r=D.vJ.gp(0)
b9.az(a0,b8)}b8=B.bs(D.eYV,D.eqY)
s=B.I()
s.r=A.w.gp(0)
b9.az(b8,s)
return!0
case"router":j=B.bs(D.eYv,A.mT)
$.S()
b8=B.I()
b8.sam(D.c2A.aB(0,new B.a3(j.a,j.b,j.c,j.d)))
b9.az(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=F.Rr[a2]
s=a3<0?-4:4
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.cm.gp(0)
r.c=4
r.d=A.bB
n=r.G()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.F(A.k.bj(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.r=(a4?A.be:A.aJ).gp(0)
n=s.G()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=B.bX(G.uV,8+u*6+A.k.F(s,6))
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.b=A.a9
q.c=1.8
q.r=A.iM.j(0.9-u*0.2).gp(0)
n=q.G()
b8.drawArc.apply(b8,[B.bF(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bs(D.eYa,A.hx)
s=$.S()
r=B.I()
r.r=A.e6.gp(0)
b9.az(b8,r)
if(b7){b8=B.I()
b8.r=A.aw.j(0.5*a5).gp(0)
b8.z=A.zy
b9.ad(A.uU,34,b8)}a6=new B.aF(s.r,A.ag,b6,b6,B.a([],x.v))
a6.D(new B.aX(-16,12))
a6.D(new B.aq(-16,-2))
a6.D(new B.c3(0,-30,16,-2))
a6.D(new B.aq(16,12))
a6.D(new B.br())
b8=B.I()
b8.r=B.ar(A.ei,D.beH,a5).gp(0)
b9.aG(a6,b8)
b8=B.I()
b8.b=A.a9
b8.c=1.4
b8.r=A.bY.gp(0)
b9.aG(a6,b8)
if(b7){b8=b9.a
J.bl(b8.save())
b8.translate(0,-2)
b9.ic(0,c1*7)
s=B.I()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bo(A.J,G.a6M,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.bl(b8.save())
b8.translate(0,a7)
s=$.S().r
r=x.v
j=new B.aF(s,A.ag,b6,b6,B.a([],r))
j.D(new B.aX(-28,8))
j.D(new B.aq(-28,-2))
j.D(new B.aq(-16,-4))
j.D(new B.aq(-10,-16))
j.D(new B.aq(10,-16))
j.D(new B.aq(18,-4))
j.D(new B.aq(28,-2))
j.D(new B.aq(28,8))
j.D(new B.br())
q=B.I()
q.sam(D.c0E.aB(0,D.eYo))
b9.aG(j,q)
q=new B.aF(s,A.ag,b6,b6,B.a([],r))
q.D(new B.aX(-8,-4))
q.D(new B.aq(-4,-13))
q.D(new B.aq(4,-13))
q.D(new B.aq(4,-4))
q.D(new B.br())
p=B.I()
p.r=A.fh.gp(0)
b9.aG(q,p)
r=new B.aF(s,A.ag,b6,b6,B.a([],r))
r.D(new B.aX(8,-4))
r.D(new B.aq(8,-13))
r.D(new B.aq(11,-13))
r.D(new B.aq(15,-4))
r.D(new B.br())
s=B.I()
s.r=A.fh.gp(0)
b9.aG(r,s)
for(a2=0;a2<2;++a2){a3=F.azI[a2]
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.r=A.au.gp(0)
n=s.G()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.bl(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=A.bO.gp(0)
q.c=1.6
n=q.G()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.F(s+u*8,14)
q=-4+u*5
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=A.aB.gp(0)
p.c=1.6
n=p.G()
b8.drawLine.apply(b8,[-34-r,q,-42-r,q,n])
n.delete()}return!0
case"kettle":b8=$.S().r
s=x.v
j=new B.aF(b8,A.ag,b6,b6,B.a([],s))
j.D(new B.aX(-18,20))
j.D(new B.aq(-14,-12))
j.D(new B.c3(0,-20,14,-12))
j.D(new B.aq(18,20))
j.D(new B.br())
r=B.I()
r.sam(D.c1J.aB(0,D.eY9))
b9.aG(j,r)
r=new B.aF(b8,A.ag,b6,b6,B.a([],s))
r.D(new B.aX(14,-10))
r.D(new B.aq(30,-22))
r.D(new B.aq(32,-18))
r.D(new B.aq(16,-4))
r.D(new B.br())
q=B.I()
q.r=A.e3.gp(0)
b9.aG(r,q)
s=new B.aF(b8,A.ag,b6,b6,B.a([],s))
s.D(new B.aX(-14,-8))
s.D(new B.c3(-34,-6,-18,12))
b8=B.I()
b8.b=A.a9
b8.c=5
b8.r=A.au.gp(0)
b9.aG(s,b8)
b8=B.I()
if(b7){s=B.ar(A.cT,A.tJ,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.e6
b8.r=s.gp(0)
b9.aO(D.eY8,b8)
if(b7){b8=B.I()
b8.r=A.cT.j(0.3).gp(0)
b8.z=A.mQ
b9.ad(A.aIC,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.F(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.G()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=B.I()
b8.r=A.au.gp(0)
b9.ad(D.edO,3,b8)
return!0
case"lamp":if(b7){u=A.k.E(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aF($.S().r,A.ag,b6,b6,B.a([],x.v))
b8.D(new B.aX(-10,-14))
b8.D(new B.aq(-30,24))
b8.D(new B.aq(10,24))
b8.D(new B.aq(8,-14))
b8.D(new B.br())
s=B.I()
s.r=A.dQ.j(0.28*u).gp(0)
b9.aG(b8,s)
s=B.I()
s.r=A.dQ.j(0.5*u).gp(0)
s.z=Y.Ie
b9.ad(D.ehP,24,s)}b8=B.bs(D.eYO,A.hx)
s=$.S()
r=B.I()
r.r=A.e6.gp(0)
b9.az(b8,r)
r=B.I()
r.r=A.dv.gp(0)
r.c=3
r.d=A.bB
b9.bo(D.ee1,D.aIO,r)
r=B.I()
r.r=A.dv.gp(0)
r.c=3
r.d=A.bB
b9.bo(D.aIO,D.ehQ,r)
a9=new B.aF(s.r,A.ag,b6,b6,B.a([],x.v))
a9.D(new B.aX(-14,-16))
a9.D(new B.aq(6,-26))
a9.D(new B.aq(10,-12))
a9.D(new B.aq(-10,-6))
a9.D(new B.br())
s=B.I()
s.r=(b7?A.aT:A.kb).gp(0)
b9.aG(a9,s)
b8=B.I()
b8.r=(b7?A.c:A.bm).gp(0)
b9.ad(D.ehT,4,b8)
return!0
case"lights":b8=$.S().r
s=x.v
b0=new B.aF(b8,A.ag,b6,b6,B.a([],s))
b0.D(new B.aX(-34,-6))
b0.D(new B.c3(0,22,34,-6))
r=B.I()
r.b=A.a9
r.c=2
r.r=A.hc.gp(0)
b9.aG(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.F(q+u*0.7,1.8)<1.1
if(b2){b3=new B.ap(A.R,A.N,A.U,A.V,A.S)
b3.r=D.a3H[u].j(0.6).gp(0)
b3.z=A.If
n=b3.G()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=B.a([],s)
b4=new B.aF(b8,A.ag,b6,b6,b3)
b3.push(new B.aX(p-3,o))
b3.push(new B.aq(p+3,o))
b5=o+11
b3.push(new B.aq(p+5,b5))
b3.push(new B.c3(p,o+17,p-5,b5))
b3.push(new B.br())
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
if(b2)o=D.a3H[u]
else{o=B.ar(D.a3H[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.G()
p=b4.gbx().a.snapshot()
r.drawPath((b4.e=new B.cj(p)).a,n)
n.delete()}return!0}return C.idG(b9,c0,c1,c2)},
fO:function fO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h3N(d){var w=D.mc.h(0,d)
return(w==null?null:w.b)===D.zY},
ieT(d,e,f){return B.a4(d,!1).cg(B.uV(null,!1,!0,!0,new C.fPW(e,f),A.eO,null,A.q5,new C.fPX(),x.H))},
JC:function JC(d,e){this.a=d
this.b=e},
mg:function mg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fPW:function fPW(d,e){this.a=d
this.b=e},
fPX:function fPX(){},
V5:function V5(d,e,f){this.c=d
this.d=e
this.a=f},
bk0:function bk0(d,e){var _=this
_.d=$
_.e=null
_.bz$=d
_.a9$=e
_.c=_.a=null},
dRG:function dRG(d){this.a=d},
dRF:function dRF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRD:function dRD(){},
dRE:function dRE(d){this.a=d},
dRC:function dRC(d){this.a=d},
dRB:function dRB(d,e){this.a=d
this.b=e},
dRA:function dRA(d,e){this.a=d
this.b=e},
dRz:function dRz(d){this.a=d},
dRy:function dRy(d){this.a=d},
dRu:function dRu(d){this.a=d},
dRt:function dRt(d){this.a=d},
dRx:function dRx(d,e,f){this.a=d
this.b=e
this.c=f},
dRw:function dRw(d){this.a=d},
dRv:function dRv(d){this.a=d},
bvI:function bvI(d,e,f){this.b=d
this.c=e
this.a=f},
aeK:function aeK(d,e,f){this.b=d
this.c=e
this.a=f},
aLU:function aLU(){},
a14(d,e,f,g,h,i){return new C.buw(d,e,f,g,h,i)},
buw:function buw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fjo:function fjo(){},
fjp:function fjp(){},
fjq:function fjq(){},
fjr:function fjr(){},
fjs:function fjs(){},
fjt:function fjt(){},
fju:function fju(){},
fjv:function fjv(){},
a8t:function a8t(d){this.a=d},
cjd:function cjd(d){this.a=d},
cje:function cje(){},
cjc:function cjc(d,e){this.a=d
this.b=e},
cjb:function cjb(d){this.a=d},
WE:function WE(d){this.a=d},
aFc:function aFc(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.iK$=f
_.oE$=g
_.nh$=h
_.iL$=i
_.bz$=j
_.a9$=k
_.c=_.a=null},
eLK:function eLK(d){this.a=d},
eLG:function eLG(d){this.a=d},
eLF:function eLF(d,e){this.a=d
this.b=e},
eLI:function eLI(d,e){this.a=d
this.b=e},
eLH:function eLH(d,e){this.a=d
this.b=e},
eLJ:function eLJ(d){this.a=d},
bvU:function bvU(d,e,f){this.b=d
this.c=e
this.a=f},
Vu:function Vu(d){this.a=d},
bk9:function bk9(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.iK$=d
_.oE$=e
_.nh$=f
_.iL$=g
_.bz$=h
_.a9$=i
_.c=_.a=null},
dXZ:function dXZ(){},
dY_:function dY_(){},
dXU:function dXU(d,e){this.a=d
this.b=e},
dXW:function dXW(d,e){this.a=d
this.b=e},
dXX:function dXX(d){this.a=d},
dXV:function dXV(d){this.a=d},
dXY:function dXY(d){this.a=d},
bqH:function bqH(d,e,f){this.b=d
this.c=e
this.a=f},
UH:function UH(d){this.a=d},
bjN:function bjN(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.iK$=d
_.oE$=e
_.nh$=f
_.iL$=g
_.bz$=h
_.a9$=i
_.c=_.a=null},
dJk:function dJk(){},
dJl:function dJl(){},
dJf:function dJf(){},
dJi:function dJi(d,e){this.a=d
this.b=e},
dJh:function dJh(d,e){this.a=d
this.b=e},
dJj:function dJj(d){this.a=d},
dJg:function dJg(d){this.a=d},
aID:function aID(d,e,f){this.a=d
this.b=e
this.c=f},
Vl:function Vl(d){this.a=d},
bk2:function bk2(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dV0:function dV0(d,e){this.a=d
this.b=e},
dV1:function dV1(d){this.a=d},
dV_:function dV_(d,e){this.a=d
this.b=e},
dV2:function dV2(d){this.a=d},
dUZ:function dUZ(d,e){this.a=d
this.b=e},
dV3:function dV3(d){this.a=d},
dUY:function dUY(d,e){this.a=d
this.b=e},
dV4:function dV4(d,e){this.a=d
this.b=e},
dUX:function dUX(d,e){this.a=d
this.b=e},
dV5:function dV5(d){this.a=d},
dUW:function dUW(d,e){this.a=d
this.b=e},
dV6:function dV6(d){this.a=d},
dUV:function dUV(d){this.a=d},
dV7:function dV7(d){this.a=d},
dUU:function dUU(d){this.a=d},
dV8:function dV8(d){this.a=d},
dV9:function dV9(d){this.a=d},
dUT:function dUT(d){this.a=d},
bm_:function bm_(d,e,f){this.b=d
this.c=e
this.a=f},
W3:function W3(d){this.a=d},
aEy:function aEy(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
ejs:function ejs(d,e){this.a=d
this.b=e},
ejt:function ejt(d,e,f){this.a=d
this.b=e
this.c=f},
ejr:function ejr(d,e,f){this.a=d
this.b=e
this.c=f},
eju:function eju(d){this.a=d},
ejq:function ejq(d){this.a=d},
ejy:function ejy(d){this.a=d},
ejx:function ejx(d,e){this.a=d
this.b=e},
ejw:function ejw(d,e){this.a=d
this.b=e},
ejz:function ejz(d,e){this.a=d
this.b=e},
ejv:function ejv(d,e){this.a=d
this.b=e},
ejA:function ejA(d){this.a=d},
Wd:function Wd(d){this.a=d},
aER:function aER(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
etn:function etn(d){this.a=d},
eto:function eto(d){this.a=d},
etl:function etl(d,e){this.a=d
this.b=e},
etm:function etm(d){this.a=d},
etk:function etk(d){this.a=d},
etp:function etp(d){this.a=d},
etq:function etq(d){this.a=d},
etr:function etr(d){this.a=d},
ets:function ets(d,e){this.a=d
this.b=e},
Wx:function Wx(d){this.a=d},
bld:function bld(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eHe:function eHe(){},
eHn:function eHn(){},
eHj:function eHj(d){this.a=d},
eHi:function eHi(){},
eHk:function eHk(d,e){this.a=d
this.b=e},
eHh:function eHh(d,e){this.a=d
this.b=e},
eHl:function eHl(d){this.a=d},
eHg:function eHg(d,e){this.a=d
this.b=e},
eHm:function eHm(d){this.a=d},
eHf:function eHf(d){this.a=d},
W2:function W2(d){this.a=d},
bkJ:function bkJ(d,e,f,g,h,i,j,k){var _=this
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
_.iK$=f
_.oE$=g
_.nh$=h
_.iL$=i
_.bz$=j
_.a9$=k
_.c=_.a=null},
eix:function eix(){},
eiy:function eiy(){},
eiq:function eiq(d){this.a=d},
eip:function eip(d){this.a=d},
eir:function eir(d){this.a=d},
eio:function eio(d){this.a=d},
eis:function eis(d){this.a=d},
ein:function ein(d){this.a=d},
eit:function eit(d,e){this.a=d
this.b=e},
eim:function eim(d,e){this.a=d
this.b=e},
eiu:function eiu(d){this.a=d},
eil:function eil(d,e){this.a=d
this.b=e},
eiv:function eiv(d){this.a=d},
eik:function eik(d,e){this.a=d
this.b=e},
eiw:function eiw(d){this.a=d},
eij:function eij(d,e){this.a=d
this.b=e},
bdM:function bdM(d,e,f){this.c=d
this.d=e
this.a=f},
aLI:function aLI(){},
bxB:function bxB(){},
aLZ:function aLZ(){},
bxF:function bxF(){},
aMq:function aMq(){},
bxN:function bxN(){},
aMP:function aMP(){},
bxV:function bxV(){},
oz(d,e,f,g,h,i){return new C.b7h(h,d,f,g,i,e,null)},
htz(d,e,f,g){var w=null
return B.cg(w,w,!0,w,new C.fTL(g,e,f),d,w,!0,!0,x.H)},
lU(d,e,f,g,h,i,j){return new C.b7i(f,j,i,h,g,d,e,null)},
yR(d,e,f){return C.ifI(d,e,f)},
ifI(d,e,f){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$yR=B.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aW.al$.x.h(0,e)
n=n==null?null:n.gbd()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return B.b(r.m4(2),$async$yR)
case 7:q=h
w=8
return B.b(q.hr(A.h8),$async$yR)
case 8:p=h
if(p==null){w=1
break}o=J.eQ(A.dG.gaR(p))
w=9
return B.b(B.avy(B.a([B.cBc(o,"image/png",f+".png")],x.r),null,"Made in NGMY Core Protocol"),$async$yR)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.K(x.gV).f.T(D.aQT)
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$yR,v)},
q0(d,e,f,g){var w,v=$.asd
if(v==="music")return E.dX(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dX(261.63*v,w,f,0,g,"sine")}return C.fZn(v,e,f,g)},
fZn(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.E(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return E.dX(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return E.dX(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return E.dX(140+A.o.F(e,12)*9,"",150,0.9,g,v)
case"bubble":return E.dX(260+A.o.F(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":E.dX(t,"",160,-0.7,g*0.4,w)
return E.dX(900,"",90,0,g*0.45,u)
case"zap":return E.dX(t*3,"",150,1.6,g*0.4,"square")
case"click":return E.dX(2600+A.o.F(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":E.dX(320,"",220,-0.7,g*0.35,v)
return E.dX(1500,"",200,0,g*0.22,u)
case"organic":return E.dX(85+A.o.F(e,12)*5,"",190,1.1,g,v)
case"lab":return E.dX(t*1.6,"",140,-0.3,g*0.55,w)
default:return E.dX(t,"",s,0,g*0.5,w)}},
J8(d,e,f,g){var w,v,u,t,s,r,q,p=$.asd
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.M)(e),++w)C.q0(d,e[w],f,g)
return}for(p=B.d1(e,0,B.dB(4,"count",x.S),B.T(e).c),v=p.$ti,p=new B.bS(p,p.gL(0),v.k("bS<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)C.q0(d,s,f,g)
else B.bP(new B.b9(1000*q),new C.cj9(d,s,f,g),u)}},
a8s(d,e){var w="sine",v="noise"
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
cgI(d){return C.hKH(d)},
hKH(d){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cgI=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$cgI)
case 7:r=f
q=B.aU(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.U(x.N,x.A)
w=1
break}p=A.X.aN(0,q,null)
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
return B.i($async$cgI,v)},
b1s(d,e){return C.hKI(d,e)},
hKI(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b1s=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b1s)
case 6:s=g
w=7
return B.b(s.ar("String","ngmy_play_progress_v1_"+d,A.X.ap(e,null)),$async$b1s)
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
return B.i($async$b1s,v)},
b7h:function b7h(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cwn:function cwn(d){this.a=d},
cwo:function cwo(d,e){this.a=d
this.b=e},
fTL:function fTL(d,e,f){this.a=d
this.b=e
this.c=f},
fTK:function fTK(d){this.a=d},
eX:function eX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cwj:function cwj(d){this.a=d},
hj:function hj(d,e,f){this.c=d
this.d=e
this.a=f},
b7i:function b7i(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
j7:function j7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cwi:function cwi(d){this.a=d},
JO:function JO(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cwp:function cwp(d){this.a=d},
qM:function qM(){},
cwk:function cwk(d,e,f){this.a=d
this.b=e
this.c=f},
cwm:function cwm(d){this.a=d},
cwl:function cwl(){},
cj9:function cj9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hmf(d,e){var w
$.S()
w=B.I()
w.r=d.gp(0)
w.c=e
w.b=A.a9
w.d=A.bB
return w},
u8(d,e,f){var w,v,u,t
if(f==null){w=e.length
if(w===2)w=null
else{v=B.a([],x.n)
for(u=w-1,t=0;t<w;++t)v.push(t/u)
w=v}}else w=f
return B.jo(A.J,new B.t(0,d.b),e,w,A.x,null)},
hWr(d,e,f){return $.hWs.c3(0,d+"|"+A.k.V(e)+"|"+f.l(),new C.fhO(d,f,e))},
idK(e5,e6,e7,e8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9=null,e0=e6.a,e1=e6.b,e2=0+e1,e3=new B.a3(0,0,0+e0,e2),e4=new B.e9()
e4.d3(e8*97+5)
w=new C.fLi(e4)
switch(A.o.F(e8,20)){case 0:$.S()
e2=B.I()
e2.sam(C.u8(e6,D.d8e,d9))
e5.aO(e3,e2)
v=new B.t(e0*(0.5+0.2*Math.sin(6.283185307179586*e7)),e1*0.5)
e2=e0*0.5
u=B.I()
u.sam(B.to(v,e2,B.a([D.brd,A.K],x.O),d9,A.x,d9,d9,0))
e5.ad(v,e2,u)
break
case 1:$.S()
e2=B.I()
e2.sam(C.u8(e6,D.cYB,d9))
e5.aO(e3,e2)
for(e2=6.283185307179586*e7,u=e5.a,t=0;t<70;++t){s=w.$0()
r=w.$0()
q=e4.au(3)
p=w.$0()
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=A.c.j(0.35+0.65*(0.5+0.5*Math.sin(e2*(1+q)+t))).gp(0)
n=o.G()
u.drawCircle(s*e0,r*e1,0.6+p*1.4,n)
n.delete()}m=A.k.F(e7*2,1)
e2=e0*(0.1+m*0.7)
u=e1*(0.1+m*0.3)
e5.bo(new B.t(e2,u),new B.t(e2-e0*0.12,u-e1*0.05),C.hmf(A.c.j(1-m),2))
u=e0*0.85
e2=e1*0.2
s=B.I()
s.r=G.Mr.gp(0)
e5.ad(new B.t(u,e2),e1*0.09,s)
s=B.I()
s.r=D.YJ.gp(0)
e5.ad(new B.t(u+e1*0.03,e2-e1*0.01),e1*0.08,s)
break
case 2:e2=$.S()
u=B.I()
u.sam(C.u8(e6,D.d_v,d9))
e5.aO(e3,u)
for(u=e5.a,t=0;t<40;++t){s=w.$0()
r=w.$0()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=A.c.j(0.5).gp(0)
n=q.G()
u.drawCircle(s*e0,r*e1*0.6,0.7,n)
n.delete()}for(s=e1*0.12,r=e0/24,q=x.v,l=0;l<4;++l){p=B.a([],q)
k=new B.aF(e2.r,A.ag,d9,d9,p)
for(e2=e1*(0.3+0.07*l),o=l*1.3,j=0;j<=e0;j+=r){i=e2+Math.sin(6.283185307179586*(j/e0*1.4+e7)+o)*e1*0.09
if(j===0){h=new B.aX(j,i)
p.push(h)
g=k.f
if(g!=null)h.bv(g)
h=k.e
if(h!=null)h.a.delete()
k.e=null}else{h=new B.aq(j,i)
p.push(h)
g=k.f
if(g!=null)h.bv(g)
h=k.e
if(h!=null)h.a.delete()
k.e=null}}e2=$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=D.cYy[l].j(0.5).gp(0)
p.b=A.a9
p.c=s
p.z=A.aGd
n=p.G()
p=k.e
u.drawPath((p==null?k.e=new B.cj(k.gbx().a.snapshot()):p).a,n)
n.delete()}break
case 3:e2=$.S()
u=B.I()
u.sam(C.u8(e6,D.doM,D.deE))
e5.aO(e3,u)
u=6.283185307179586*e7
f=new B.t(e0*0.5,e1*(0.64+0.01*Math.sin(u)))
s=e1*0.36
r=B.I()
r.sam(B.to(f,s,B.a([D.blO,A.K],x.O),d9,A.x,d9,d9,0))
e5.ad(f,s,r)
r=B.I()
r.r=D.beN.gp(0)
e5.ad(f,e1*0.13,r)
for(s=e5.a,r=x.v,e=0;e<3;++e,e2=q){q=B.a([],r)
k=new B.aF(e2.r,A.ag,d9,d9,q)
q.push(new B.aX(0,e1))
for(e2=e1*(0.7+0.07*e),p=3+e,o=e*2,j=0;j<=e0;j+=8){h=new B.aq(j,e2+Math.sin(j/e0*p+o)*e1*0.04)
q.push(h)
g=k.f
if(g!=null)h.bv(g)
h=k.e
if(h!=null)h.a.delete()
k.e=null}e2=new B.aq(e0,e1)
q.push(e2)
q=k.f
if(q!=null)e2.bv(q)
e2=k.e
if(e2!=null)e2.a.delete()
k.e=null
e2=[D.be8,D.bdd,A.F2][e]
q=$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=e2.gp(0)
n=p.G()
e2=k.e
s.drawPath((e2==null?k.e=new B.cj(k.gbx().a.snapshot()):e2).a,n)
n.delete()}for(q=[0.18,0.78],p=e1*0.78,o=-e0,h=o*0.005,g=-e1,d=p+g*0.2,g=p+g*0.21,a0=e0*0.2,a1=e1*0.06,a2=0;a2<2;++a2){a3=e0*q[a2]
a4=a3+h
a5=new B.ap(A.R,A.N,A.U,A.V,A.S)
a5.r=D.ah7.gp(0)
a5.c=3
a5.b=A.a9
a5.d=A.bB
n=a5.G()
s.drawLine.apply(s,[a3,p,a4,d,n])
n.delete()
a4=B.bJ(new B.t(a4,g),a1,a0)
a3=new B.ap(A.R,A.N,A.U,A.V,A.S)
a3.r=D.ah7.gp(0)
n=a3.G()
s.drawOval(B.bF(a4),n)
n.delete()}for(q=o*0.05,u*=6,e2=e2.r,t=0;t<4;++t){v=A.k.F(e7+t*0.22,1)
p=q+v*e0*1.1
o=e1*(0.25+0.05*t)+Math.sin(6.283185307179586*v*3)*e1*0.02
h=Math.sin(u+t)
g=B.a([],r)
d=new B.aF(e2,A.ag,d9,d9,g)
h=o+h*e1*0.012
g.push(new B.aX(p-8,h))
a0=o-4
g.push(new B.c3(p-3,a0,p,o))
g.push(new B.c3(p+3,a0,p+8,h))
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=A.F2.gp(0)
p.c=2
p.b=A.a9
p.d=A.bB
n=p.G()
p=d.gbx().a.snapshot()
s.drawPath((d.e=new B.cj(p)).a,n)
n.delete()}break
case 4:e2=$.S()
u=B.I()
u.sam(C.u8(e6,D.djv,D.d3y))
e5.aO(e3,u)
u=B.I()
u.r=D.bnN.gp(0)
e5.ad(new B.t(e0*0.75,e1*0.2),e1*0.1,u)
for(u=e5.a,s=x.v,e=0;e<5;++e,e2=r){r=B.a([],s)
k=new B.aF(e2.r,A.ag,d9,d9,r)
r.push(new B.aX(0,e1))
for(e2=(e&1)===0,q=e1*(0.46+0.1*e),p=1.5+e*0.4,j=0;j<=e0;j+=6){o=e2?1:-1
o=new B.aq(j,q+Math.sin(6.283185307179586*(j/e0*p+e7*o))*e1*0.025)
r.push(o)
h=k.f
if(h!=null)o.bv(h)
o=k.e
if(o!=null)o.a.delete()
k.e=null}e2=new B.aq(e0,e1)
r.push(e2)
r=k.f
if(r!=null)e2.bv(r)
e2=k.e
if(e2!=null)e2.a.delete()
k.e=null
e2=B.ar(A.cC,A.pP,e/5).j(0.85)
r=$.S()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=e2.gp(0)
n=q.G()
e2=k.e
u.drawPath((e2==null?k.e=new B.cj(k.gbx().a.snapshot()):e2).a,n)
n.delete()}break
case 5:$.S()
e2=B.I()
e2.sam(C.u8(e6,D.daz,D.d_l))
e5.aO(e3,e2)
a6=e1*0.6
e2=e0/2
u=e1*0.26
s=B.I()
s.sam(B.jo(new B.t(0,a6-u),new B.t(0,a6),D.dnc,d9,A.x,d9))
e5.ad(new B.t(e2,a6),u,s)
for(u=e0*0.2,s=a6-e1*0.2,r=e1*0.012,q=u+e0*0.6,p=e5.a,t=0;t<5;){o=s+t*e1*0.045;++t
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=D.YM.gp(0)
n=h.G()
p.drawRect(B.bF(new B.a3(u,o,q,o+r*t*0.6)),n)
n.delete()}u=B.I()
u.r=D.YM.gp(0)
e5.aO(new B.a3(0,a6,e0,e1),u)
a7=C.hmf(A.LR.j(0.85),1.4)
for(u=e1-a6,l=0;l<10;++l){a8=(l+e7)/9
if(a8<0.02)continue
i=a6+a8*a8*u
n=a7.G()
p.drawLine.apply(p,[0,i,e0,i,n])
n.delete()}for(l=-8;l<=8;++l){u=l*e0
n=a7.G()
p.drawLine.apply(p,[e2+u*0.02,a6,e2+u*0.2,e1,n])
n.delete()}break
case 6:$.S()
e2=B.I()
e2.r=D.bnB.gp(0)
e5.aO(e3,e2)
a9=Math.max(12,e0/20)
for(e2=e0/a9,u=e7*12,s=a9*0.9,r=-a9,q=e1+a9*9,p=a9*2,b0=0;b0<e2;++b0){b1=1+A.o.F(b0,3)
b2=A.k.F(e7*b1+w.$0(),1)*q-p
for(o=b0*a9,h=b0*7,g=u*b1,l=0;l<10;++l){i=b2-l*a9
if(i<r||i>e1)continue
b3="01ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[A.o.F(h+l*3+A.k.bj(g),34)]
C.hWr(b3,s,l===0?D.bbh:A.be.j(1-l/9)).a1(e5,new B.t(o,i))}}break
case 7:$.S()
e2=B.I()
e2.sam(C.u8(e6,D.d9M,d9))
e5.aO(e3,e2)
for(e2=e1+30,u=e5.a,s=6.283185307179586*e7,t=0;t<60;++t){r=w.$0()
q=A.k.F(e7*(1+e4.au(2))+w.$0(),1)
J.bl(u.save())
u.translate(r*e0+Math.sin(s+t)*8,q*e2-15)
u.rotate((s*(1+A.o.F(t,3))+t)*180/3.141592653589793,0,0)
q=B.bJ(A.J,4,8)
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=D.d0B[A.o.F(t,6)].gp(0)
n=r.G()
u.drawRect(B.bF(q),n)
n.delete()
u.restore()}break
case 8:$.S()
e2=B.I()
e2.sam(C.u8(e6,R.a3i,d9))
e5.aO(e3,e2)
for(e2=e5.a,u=e1*0.08,b4=0;b4<3;++b4){v=A.k.F(e7+b4/3,1)
b5=e0*(0.22+0.28*b4)
b6=e1*(0.3+0.1*A.o.F(b4,2))
if(v<0.22){s=e1*(1-v/0.22*(1-b6/e1))
$.S()
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.ae.gp(0)
r.c=2
r.b=A.a9
r.d=A.bB
n=r.G()
e2.drawLine.apply(e2,[b5,s,b5,s+u,n])
n.delete()}else{b7=(v-0.22)/0.78
s=1-b7
b8=1-Math.pow(s,3)
for(r=b7*b7*e1*0.1,q=2.6*s+0.4,t=0;t<28;++t){b9=6.283185307179586*t/28
p=Math.cos(b9)
o=Math.sin(b9)
h=D.cZx[b4].j(s)
$.S()
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=h.gp(0)
n=g.G()
e2.drawCircle(b5+p*b8*e1*0.34,b6+o*b8*e1*0.34+r,q,n)
n.delete()}}}break
case 9:$.S()
e2=B.I()
e2.sam(C.u8(e6,D.cUV,d9))
e5.aO(e3,e2)
for(e2=6.283185307179586*e7,u=e5.a,t=0;t<30;++t){l=1+e4.au(2)
c0=w.$0()
s=w.$0()
c1=4+w.$0()*e1*0.05
i=e1-A.k.F(e7*l+c0,1)*(e1+c1*3)+c1
s=s*e0+Math.sin(e2*l+t)*10
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.c.j(0.12).gp(0)
n=r.G()
u.drawCircle(s,i,c1,n)
n.delete()
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.c.j(0.5).gp(0)
r.c=1.2
r.b=A.a9
r.d=A.bB
n=r.G()
u.drawCircle(s,i,c1,n)
n.delete()
r=-c1*0.3
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=A.c.j(0.7).gp(0)
n=q.G()
u.drawCircle(s+r,i+r,c1*0.2,n)
n.delete()}break
case 10:$.S()
e2=B.I()
e2.sam(C.u8(e6,D.cvt,d9))
e5.aO(e3,e2)
e2=B.I()
e2.r=G.Mr.gp(0)
e5.ad(new B.t(e0*0.2,e1*0.2),e1*0.08,e2)
for(e2=e1+10,u=6.283185307179586*e7,s=e5.a,t=0;t<90;++t){l=1+e4.au(3)
c0=w.$0()
r=w.$0()
q=A.k.F(e7*l+c0,1)
p=Math.sin(u*l+t)
o=w.$0()
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=A.c.j(0.9).gp(0)
n=h.G()
s.drawCircle(r*e0+p*12,q*e2-5,1.2+o*2.4,n)
n.delete()}e2=-e0*0.1
u=e1*0.9
s=B.I()
s.r=A.c.gp(0)
e5.dO(new B.a3(e2,u,e2+e0*1.2,u+e1*0.3),s)
break
case 11:$.S()
u=B.I()
u.r=A.hV.gp(0)
e5.aO(e3,u)
c2=e0/12
c3=A.k.F(e7*c2*6,c2*6)
for(u=e5.a,t=-6;t<24;++t){j=t*c2+c3
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.r=D.cCZ[A.o.F(A.o.F(t,6)+6,6)].gp(0)
n=s.G()
u.drawRect(B.bF(new B.a3(j,0,j+c2,e2)),n)
n.delete()}for(e2=c2*0.3,s=c2/2,r=x.v,i=0;i<e1;i+=c2)for(q=i/c2,b6=i+s,p=b6-e2,o=b6+e2,t=-6;t<24;++t)if(A.o.F(t+A.k.bj(q),3)===0){b5=t*c2+c3+s
h=$.S()
g=B.a([],r)
h=new B.aF(h.r,A.ag,d9,d9,g)
g.push(new B.aX(b5,p))
g.push(new B.aq(b5+e2,b6))
g.push(new B.aq(b5,o))
g.push(new B.aq(b5-e2,b6))
g.push(new B.br())
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=A.c.j(0.75).gp(0)
n=g.G()
g=h.gbx().a.snapshot()
u.drawPath((h.e=new B.cj(g)).a,n)
n.delete()}$.S()
e2=B.I()
e2.sam(B.to(e3.gbK(),e0*0.7,B.a([A.K,A.w.j(0.55)],x.O),B.a([0.4,1],x.n),A.x,d9,d9,0))
e5.aO(e3,e2)
break
case 12:$.S()
e2=B.I()
e2.sam(C.u8(e6,D.cV7,d9))
e5.aO(e3,e2)
for(e2=6.283185307179586*e7,u=e2*2,s=e5.a,t=0;t<18;++t){r=w.$0()*e0+Math.sin(e2+t)*18
q=w.$0()*e1+Math.cos(e2+t*1.7)*14
c1=e1*(0.05+w.$0()*0.1)*(1+0.15*Math.sin(u+t))
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
o=A.o.F(t,5)
p.r=D.axk[o].j(0.28).gp(0)
p.z=A.If
n=p.G()
s.drawCircle(r,q,c1,n)
n.delete()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=D.axk[o].j(0.35).gp(0)
p.c=1.2
p.b=A.a9
p.d=A.bB
n=p.G()
s.drawCircle(r,q,c1*0.9,n)
n.delete()}break
case 13:$.S()
e2=B.I()
e2.sam(C.u8(e6,D.d5m,d9))
e5.aO(e3,e2)
c4=Math.max(0,1-Math.abs(e7-0.3)*14)
if(c4>0){e2=A.c.j(0.35*c4)
u=B.I()
u.r=e2.gp(0)
e5.aO(e3,u)}for(e2=e1+40,u=e5.a,t=0;t<70;++t){j=w.$0()*e0
i=A.k.F(e7*(2+e4.au(2))+w.$0(),1)*e2-20
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.r=A.ds.j(0.6).gp(0)
s.c=1.3
s.b=A.a9
s.d=A.bB
n=s.G()
u.drawLine.apply(u,[j,i,j-6,i+18,n])
n.delete()}for(t=0;t<10;++t){e2=B.bJ(new B.t(w.$0()*e0,A.k.F(e7+w.$0(),1)*e1),11,7)
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.r=A.c.j(0.18).gp(0)
n=s.G()
u.drawOval(B.bF(e2),n)
n.delete()}break
case 14:e2=$.S()
u=B.I()
u.sam(C.u8(e6,D.d_u,d9))
e5.aO(e3,u)
for(u=e5.a,s=e0*0.035,r=x.v,q=e0*0.02,p=e0*0.08,o=e0*0.07,h=6.283185307179586*e7,g=h*3,d=h*2,e2=e2.r,t=0;t<7;++t){c5=e0*(t+0.5)/7
c6=e1*(0.28+0.1*Math.sin(d+t*2.1)+0.06*A.o.F(t,3))
a0=B.a([],r)
v=new B.aF(e2,A.ag,d9,d9,a0)
a0.push(new B.aX(c5-o,e1))
a0.push(new B.kU(c5-p,e1-c6*0.5,c5+Math.sin(g+t)*6,e1-c6*0.8,c5,e1-c6))
a0.push(new B.kU(c5+q,e1-c6*0.6,c5+p,e1-c6*0.4,c5+o,e1))
a0.push(new B.br())
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a0.r=A.fo.j(0.85).gp(0)
n=a0.G()
a0=v.gbx().a.snapshot()
u.drawPath((v.e=new B.cj(a0)).a,n)
n.delete()
a0=B.a([],r)
a1=new B.aF(e2,A.ag,d9,d9,a0)
a0.push(new B.aX(c5-s,e1))
a0.push(new B.c3(c5,e1-c6*0.9,c5+s,e1))
a0.push(new B.br())
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a0.r=A.dQ.j(0.9).gp(0)
n=a0.G()
a0=a1.gbx().a.snapshot()
u.drawPath((a1.e=new B.cj(a0)).a,n)
n.delete()}for(t=0;t<40;++t){l=1+e4.au(2)
c0=w.$0()
e2=w.$0()
s=A.k.F(e7*l+c0,1)
r=Math.sin(h*l+t)
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=G.ahp.j(0.9).gp(0)
n=q.G()
u.drawCircle(e2*e0+r*10,e1-s*e1*0.9,1.5,n)
n.delete()}break
case 15:e2=$.S()
u=B.I()
u.sam(C.u8(e6,D.cpy,d9))
e5.aO(e3,u)
u=B.I()
u.r=A.ic.gp(0)
e5.ad(new B.t(e0*0.7,e1*0.28),e1*0.12,u)
for(u=e5.a,s=e0+20,r=e0/12,q=6.283185307179586*e7,p=x.v,e=0;e<5;e2=o,e=c7){o=B.a([],p)
k=new B.aF(e2.r,A.ag,d9,d9,o)
o.push(new B.aX(0,e1))
c7=e+1
c0=Math.sin(q+e)*e0*0.02*c7
for(e2=e1*(0.45+0.1*e),h=4+e,g=e*1.7,j=-20;j<=s;j+=r){d=new B.aq(j,e2-Math.abs(Math.sin((j+c0)/e0*h+g))*e1*0.18)
o.push(d)
a0=k.f
if(a0!=null)d.bv(a0)
d=k.e
if(d!=null)d.a.delete()
k.e=null}e2=new B.aq(s,e1)
o.push(e2)
o=k.f
if(o!=null)e2.bv(o)
e2=k.e
if(e2!=null)e2.a.delete()
k.e=null
e2=D.d_O[e]
o=$.S()
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=e2.gp(0)
n=h.G()
e2=k.e
u.drawPath((e2==null?k.e=new B.cj(k.gbx().a.snapshot()):e2).a,n)
n.delete()}break
case 16:u=$.S()
s=B.I()
s.sam(C.u8(e6,D.dat,d9))
e5.aO(e3,s)
c8=Math.sin(6.283185307179586*e7)*0.18
s=e5.a
J.bl(s.save())
r=e0/2
s.translate(r,0)
e5.ic(0,c8)
u=new B.aF(u.r,A.ag,d9,d9,B.a([],x.v))
q=-e0
u.D(new B.aX(q*0.03,0))
p=e0*0.03
u.D(new B.aq(p,0))
u.D(new B.aq(e0*0.34,e1))
u.D(new B.aq(q*0.34,e1))
u.D(new B.br())
q=B.I()
o=x.O
q.sam(B.jo(A.J,new B.t(0,e1),B.a([A.c.j(0.5),A.c.j(0.04)],o),d9,A.x,d9))
e5.aG(u,q)
s.restore()
r=B.bJ(new B.t(r+Math.sin(c8)*e1,e1*0.95),e1*0.14,e0*0.6)
q=A.c.j(0.22)
u=B.I()
u.r=q.gp(0)
e5.dO(r,u)
for(u=[-1,1],r=e0*0.18,q=0+e1*0.06,c9=e0*0.82,h=x.eH,a2=0;a2<2;++a2){g=u[a2]<0
d0=g?0:c9
for(t=0;t<6;++t){d=d0+t*e0*0.03
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1=B.a([A.ei,A.ej,A.ei],o)
a1=new B.Sq(new B.t(0,0),new B.t(p,0),a1,W.zf,A.x,d9)
a3=B.Sr(a1,a1.L1(),a1.gL5(),h)
a1.a!==$&&B.aP()
a1.a=a3
a0.sam(a1)
n=a0.G()
s.drawRect(B.bF(new B.a3(d,0,d+p,e2)),n)
n.delete()}g=g?0:c9
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.r=A.ka.gp(0)
n=d.G()
s.drawRect(B.bF(new B.a3(g,0,g+r,q)),n)
n.delete()}break
case 17:e2=$.S()
u=B.I()
u.sam(B.to(e3.gbK(),e0*0.7,D.d11,W.zf,A.x,d9,d9,0))
e5.aO(e3,u)
u=e5.a
J.bl(u.save())
u.translate(e0/2,e1/2)
e5.ic(0,e7*6.283185307179586/8)
for(s=x.v,e2=e2.r,t=0;t<16;t+=2){d1=6.283185307179586*t/16
d2=6.283185307179586*(t+1)/16
r=B.a([],s)
q=new B.aF(e2,A.ag,d9,d9,r)
r.push(new B.aX(0,0))
r.push(new B.aq(Math.cos(d1)*e0,Math.sin(d1)*e0))
r.push(new B.aq(Math.cos(d2)*e0,Math.sin(d2)*e0))
r.push(new B.br())
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.c.j(0.22).gp(0)
n=r.G()
r=q.gbx().a.snapshot()
u.drawPath((q.e=new B.cj(r)).a,n)
n.delete()}u.restore()
break
case 18:$.S()
e2=B.I()
e2.sam(C.u8(e6,D.dhp,d9))
e5.aO(e3,e2)
for(e2=6.283185307179586*e7,u=e2*2,s=e5.a,t=0;t<7;++t){r=w.$0()
q=Math.sin(e2+t*1.1)
p=w.$0()
o=Math.sin(u+t)
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=D.dgL[A.o.F(t,4)].j(0.7).gp(0)
h.z=A.D0
n=h.G()
s.drawCircle(e0*(0.1+0.8*r)+o*10,e1*(0.5+0.38*q),e1*(0.1+0.08*p),n)
n.delete()}break
case 19:$.S()
e2=B.I()
e2.sam(C.u8(e6,D.d6G,D.az1))
e5.aO(e3,e2)
for(e2=e5.a,t=0;t<40;++t){u=w.$0()
s=w.$0()
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.c.j(0.6).gp(0)
n=r.G()
e2.drawCircle(u*e0,s*e1*0.45,0.7,n)
n.delete()}u=B.I()
u.r=G.Mr.gp(0)
e5.ad(new B.t(e0*0.8,e1*0.2),e1*0.07,u)
j=-e0*0.02
for(u=e1-8,s=e7*6,d3=0;j<e0;){d4=e0*(0.07+w.$0()*0.07)
d5=e1*(0.25+w.$0()*0.4)
r=e1-d5
q=j+d4
$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=D.bfO.gp(0)
n=p.G()
e2.drawRect(B.bF(new B.a3(j,r,q,r+d5)),n)
n.delete()
for(d6=r+6,d7=j+4,r=q-6,q=d3*31;d6<u;d6+=11)for(p=d6*7,o=d6+6,d8=d7;d8<r;d8+=9)if(A.o.F(q+A.k.V(p)+A.k.V(d8*3)+A.k.bj(s),5)!==0){h=D.biQ.j(0.85)
$.S()
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=h.gp(0)
n=g.G()
e2.drawRect(B.bF(new B.a3(d8,d6,d8+4,o)),n)
n.delete()}j+=d4+2;++d3}break}},
hTI(d){if(d<0.36363636363636365)return 7.5625*d*d
if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
i2M(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o=new C.fcS(),n=f<=1,m=n?0:e/(f-1),l=n?0:e/(f-1)
n=g/0.5
w=A.k.E((n-l*0.45)/0.55,0,1)
v=g<0.86?1:A.k.E((1-g)/0.14,0,1)
u=new B.e9()
u.d3(e*53+11)
switch(d){case"type":o.f=A.k.bj(g/0.55*f)>e?v:0
break
case"bounce":o.b=-Math.abs(Math.sin(A.k.F(g*2-m*0.5,1)*3.141592653589793))*h*0.5
break
case"wave":o.b=Math.sin(6.283185307179586*g-m*3)*h*0.28
break
case"neon":o.x=o.f=Math.sin(6.283185307179586*g*13+e*7)>0.92?0.25:1
break
case"glitch":t=A.o.F(A.k.bj(g*12),6)===0
o.a=t?Math.sin(e*12.9898+g*100)*h*0.14:0
if(t)o.w=(e&1)===0?A.b9:A.c4
break
case"zoom":o.c=o.d=A.lo.av(0,w)
o.f=w*v
break
case"rainbow":o.w=new L.uC(1,A.k.F(g*360+e*40,360),0.75,1).lH()
break
case"drop":o.b=-(1-C.hTI(w))*h*4
o.f=A.k.E(w*6,0,1)*v
break
case"fly":o.a=-(1-A.eq.av(0,w))*i*0.8
o.f=A.k.E(w*4,0,1)*v
break
case"spin":o.e=(1-w)*6.283185307179586
o.c=o.d=w
o.f=v
break
case"flip":o.c=Math.cos(3.141592653589793*(1-A.dT.av(0,w)))
o.f=A.k.E(w*5,0,1)*v
break
case"jelly":s=Math.sin(6.283185307179586*g*2+e)*0.25
o.c=1+s
o.d=1-s
break
case"shake":n=6.283185307179586*g
o.a=Math.sin(n*30+e*3)*h*0.05
o.b=Math.cos(n*27+e*5)*h*0.05
break
case"float":n=6.283185307179586*g
o.b=Math.sin(n+e*0.8)*h*0.15
o.e=Math.sin(n+e)*0.05
break
case"pulse":o.c=o.d=1+0.18*Math.pow(Math.max(0,Math.sin(6.283185307179586*g*2)),3)
break
case"swing":o.r=-h*0.5
o.e=Math.sin(6.283185307179586*g+m*2)*0.35
break
case"reveal":o.f=A.k.E((A.k.E(n,0,1)-m)*6,0,1)*v
break
case"blur":o.c=o.d=2.4-1.4*A.dT.av(0,w)
o.f=w*v
break
case"domino":o.e=Math.sin(A.k.E(g*1.6-m*0.6,0,1)*3.141592653589793)*0.9
o.r=h*0.5
break
case"spiral":n=1-w
r=n*3.141592653589793*3
q=n*h*3
o.a=Math.cos(r)*q
o.b=Math.sin(r)*q
o.f=w*v
break
case"cascade":p=Math.pow(Math.sin(3.141592653589793*A.k.F(g*2-m,1)),4)
o.w=B.ar(j,A.c,p)
o.x=p
break
case"wobble":n=6.283185307179586*g*2
o.e=Math.sin(n+e)*0.15
o.c=1+0.05*Math.sin(n+e*2)
break
case"rise":o.b=(1-A.ct.av(0,w))*h*2
o.f=w*v
break
case"scatter":n=1-A.dw.av(0,w)
o.a=n*(u.ah()-0.5)*i
o.b=n*(u.ah()-0.5)*h*6
o.e=n*(u.ah()-0.5)*6
o.f=v
break}return o},
D2(d,e,f,g){var w=null,v=B.fu(w,w,w,w,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,g==null?f:w,w,w,w,w,w,w,w,w,e,w,w,A.u,g,1,!0,w,w,w,w,w,w,w,w),d),A.a3,A.bZ,w,A.dA,A.bW)
v.ej()
return v},
hZr(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=A.k.E(a0,0,1)
if(i<=0.01)return
w=C.D2(e,f,j,j)
v=w.b
u=-v.c/2
v=v.a.c
v=-v.gbb(v)/2
t=new B.t(u,v)
s=w.b
r=s.c
s=s.a.c
q=new B.a3(u,v,u+r,v+s.gbb(s))
p=new C.fnB(i)
o=new C.fnC(e,f,d,t)
switch(g){case"outline":o.$2(p.$1(h),f*0.07)
break
case"three":s=B.ar(h,A.w,0.55)
s.toString
for(n=9;n>=1;--n){r=B.ar(h,s,n/9)
r.toString
m=n*f
C.D2(e,f,p.$1(r),j).a1(d,new B.t(u+m*0.012,v+m*0.014))}C.D2(e,f,p.$1(h),j).a1(d,t)
break
case"neon":o.$3$blur(p.$2(h,0.9*(0.6+0.4*a1)),f*0.16,new B.hg(A.G,f*0.2))
o.$2(p.$2(h,0.9),f*0.07)
o.$2(p.$2(A.c,0.95),f*0.025)
break
case"gradient":$.S()
l=B.I()
v=q.gaIZ()
u=q.gaDr()
s=B.ar(h,A.c,0.45)
s.toString
s=p.$1(s)
r=p.$1(h)
m=B.ar(h,A.aC,0.6)
m.toString
l.sam(B.jo(v,u,B.a([s,r,p.$1(m)],x.O),W.zf,A.x,j))
C.D2(e,f,j,l).a1(d,t)
break
case"sticker":C.D2(e,f,p.$2(A.w,0.3),j).a1(d,t.aa(0,new B.t(f*0.04,f*0.06)))
o.$2(p.$1(A.c),f*0.2)
o.$4$blur$shift(p.$1(A.au),f*0.24,j,A.J)
o.$2(p.$1(A.c),f*0.17)
C.D2(e,f,p.$1(h),j).a1(d,t)
break
case"retro":s=L.aVH(h)
k=new L.uC(s.a,A.k.F(L.aVH(h).b+150,360),s.c,s.d).lH()
for(n=5;n>=1;--n){s=n*f*0.014
C.D2(e,f,p.$1(k),j).a1(d,new B.t(u+s,v+s))}o.$2(p.$1(A.au),f*0.05)
C.D2(e,f,p.$1(h),j).a1(d,t)
break
case"gold":$.S()
l=B.I()
l.sam(B.jo(q.gaIZ(),q.gaDr(),B.a([p.$1(Aj.Fu),p.$1(A.cI),p.$1(A.d1),p.$1(P.xy),p.$1(A.ih)],x.O),D.drH,A.x,j))
o.$2(p.$1(A.r9),f*0.06)
C.D2(e,f,j,l).a1(d,t)
break
default:C.D2(e,f,p.$1(h),j).a1(d,t)}},
hsR(a6,a7,a8,a9,b0,b1,b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a6.a
J.bl(a5.save())
w=a7.a
v=a7.b
a5.clipRect(B.bF(new B.a3(0,0,0+w,0+v)),$.mr()[1],!0)
C.idK(a6,a7,a8,a9)
u=w<v?0.9:1
t=b1*w/360*u
u=A.a.i(b4)
if(u.length===0)s=B.a(["\u2026"],x.s)
else{u=new B.mj(u)
s=B.C(u,B.a6(u).k("K.E"))}u=B.a([],x.n)
for(r=s.length,q=0;q<s.length;s.length===r||(0,B.M)(s),++q){p=s[q]
o=p===" "
n=C.D2(o?"n":p,t,a4,a4).b.c
u.push(n*(o?0.7:1))}m=w*0.86
r=x.t
l=B.a([B.a([],r)],x.E)
for(o=x.S,k=0,j=0,i=0;i<s.length;++i){if(s[i]===" "){A.d.gak(l).push(i)
k+=u[i]
j=A.d.gak(l).length
continue}if(k+u[i]>m&&A.d.gak(l).length!==0){h=j>0&&j<A.d.gak(l).length?A.d.fJ(A.d.gak(l),j):B.a([],r)
if(h.length!==0){n=A.d.gak(l)
g=A.d.gak(l).length
n.$flags&1&&B.aj(n,18)
B.kA(j,g,n.length,a4,a4)
n.splice(j,g-j)}n=B.C(h,o)
l.push(n)
k=A.d.cI(h,0,new C.fLj(u))
j=0}A.d.gak(l).push(i)
k+=u[i]}f=t*1.15
e=v/2-l.length*f/2+f/2
for(v=w/2,d=0;d<l.length;++d){a0=l[d]
a1=v-A.d.cI(a0,0,new C.fLk(u))/2
for(r=a0.length,o=e+d*f,q=0;q<a0.length;a0.length===r||(0,B.M)(a0),++q,a1=a2){i=a0[q]
n=u[i]
a2=a1+n
if(s[i]===" ")continue
a3=C.i2M(b2,i,s.length,a8,t,w,b0)
J.bl(a5.save())
a5.translate(a1+n/2+a3.a,o+a3.b)
n=a3.r
if(n!==0)a5.translate(0,n)
a5.rotate(a3.e*180/3.141592653589793,0,0)
n=a3.r
if(n!==0)a5.translate(0,-n)
n=a3.c
if(n===0)n=0.001
g=a3.d
if(g===0)g=0.001
a5.scale(n,g)
n=s[i]
g=a3.w
if(g==null)g=b0
C.hZr(a6,n,t,b3,g,a3.f,a3.x)
a5.restore()}}a5.restore()},
aQw(d,e,f,g,h,i,j,a0){var w=0,v=B.j(x.gc),u,t,s,r,q,p,o,n,m,l,k
var $async$aQw=B.e(function(a1,a2){if(a1===1)return B.f(a2,v)
for(;;)switch(w){case 0:n=d>=1
m=A.k.V(n?480:480*d)
l=A.k.V(n?480/d:480)
k=new C.bSt(0,0,12,D.aiB)
n=x.H,t=0
case 3:if(!(t<48)){w=5
break}$.S()
s=new B.oW()
C.hsR(s.a3F(A.v1),new B.au(m,l),t/48,e,f,g,h,j,a0)
r=s.nd()
w=6
return B.b(r.x6(m,l),$async$aQw)
case 6:q=a2
w=7
return B.b(q.hr(A.a2o),$async$aQw)
case 7:p=a2
q.q()
r.q()
if(p==null){w=4
break}o=new B.E9(null,null,null,null,0,A.e_,0,0)
o.byW(null,A.dG.gaR(p),0,null,A.c7,0,0,A.e_,l,null,0,4,A.Ld,null,A.c7,null,null,m,!1)
k.cGa(o,7)
i.$1((t+1)/48)
w=8
return B.b(B.bP(A.bD,null,n),$async$aQw)
case 8:case 4:++t
w=3
break
case 5:n=k.aFv(0)
if(n==null)n=new Uint8Array(0)
u=n
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aQw,v)},
fhO:function fhO(d,e,f){this.a=d
this.b=e
this.c=f},
fLi:function fLi(d){this.a=d},
fcS:function fcS(){var _=this
_.b=_.a=0
_.d=_.c=1
_.e=0
_.f=1
_.r=0
_.w=null
_.x=0},
fnB:function fnB(d){this.a=d},
fnC:function fnC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b8a:function b8a(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
fLj:function fLj(d){this.a=d},
fLk:function fLk(d){this.a=d},
Wy:function Wy(d){this.a=d},
asc:function asc(d,e,f){var _=this
_.d=$
_.e=d
_.f="bounce"
_.r="solid"
_.w=3
_.x=56
_.z=_.y=0
_.Q=!0
_.as=0
_.at=-1
_.ax=""
_.bz$=e
_.a9$=f
_.c=_.a=null},
cj6:function cj6(d,e){this.a=d
this.b=e},
cj1:function cj1(d){this.a=d},
cj2:function cj2(d){this.a=d},
cj0:function cj0(d,e){this.a=d
this.b=e},
cj3:function cj3(d,e){this.a=d
this.b=e},
cj4:function cj4(d){this.a=d},
cj5:function cj5(d){this.a=d},
ciR:function ciR(d){this.a=d},
ciS:function ciS(d){this.a=d},
ciQ:function ciQ(){},
ciT:function ciT(d,e){this.a=d
this.b=e},
ciU:function ciU(d,e){this.a=d
this.b=e},
ciP:function ciP(d,e){this.a=d
this.b=e},
ciV:function ciV(d,e){this.a=d
this.b=e},
ciO:function ciO(d,e){this.a=d
this.b=e},
ciW:function ciW(d,e){this.a=d
this.b=e},
ciN:function ciN(d,e){this.a=d
this.b=e},
ciX:function ciX(d,e){this.a=d
this.b=e},
ciM:function ciM(d,e){this.a=d
this.b=e},
ciY:function ciY(d){this.a=d},
ciL:function ciL(d){this.a=d},
ciZ:function ciZ(d){this.a=d},
cj_:function cj_(d){this.a=d},
ciK:function ciK(d,e){this.a=d
this.b=e},
aF_:function aF_(){},
b8k(){var w=0,v=B.j(x.D),u,t=2,s=[],r,q,p
var $async$b8k=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
r=$.h_S
w=7
return B.b(r==null?$.h_S=C.cyZ():r,$async$b8k)
case 7:r=e
u=r
w=1
break
t=2
w=6
break
case 4:t=3
p=s.pop()
$.h_S=null
throw p
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$b8k,v)},
cyZ(){var w=0,v=B.j(x.D),u,t
var $async$cyZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=C
w=3
return B.b($.r3().C6("assets/data/world110.json",!1),$async$cyZ)
case 3:u=t.hPg(e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cyZ,v)},
hPg(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.X.aN(0,a2,null)),a1=B.a([],x.R)
for(w=J.aV(a0),v=x.n,u=x.b,t=x.h,s=x.gO;w.C();){r=t.a(w.gR(w))
q=B.a([],s)
for(p=J.a5(r),o=J.aV(d.a(p.h(r,"r")));o.C();){n=o.gR(o)
m=B.a([],u)
for(l=J.aV(d.a(n));l.C();){k=l.gR(l)
j=J.a5(k)
m.push(B.a([B.e5(j.h(k,0)),B.e5(j.h(k,1))],v))}q.push(m)}o=B.cP(p.h(r,"n"))
m=B.cP(p.h(r,"a"))
l=B.cP(p.h(r,"ct"))
j=B.cP(p.h(r,"sr"))
i=B.e5(p.h(r,"pop"))
h=B.e5(p.h(r,"gdp"))
g=B.cP(p.h(r,"inc"))
f=B.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=B.aQQ(g,f,"",0)
f=B.e5(J.q(p.h(r,"c"),0))
p=B.e5(J.q(p.h(r,"c"),1))
e=new C.abf(o,m,l,j,i,h,g,f,p,q)
e.bzt(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new C.abg(a1)},
fx0(d){if(d>=1e12)return A.k.ac(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.ac(d/1e9,2)+" billion"
if(d>=1e6)return A.k.ac(d/1e6,1)+" million"
if(d>=1000)return A.k.ac(d/1000,1)+" thousand"
return A.k.ac(d,0)},
H4(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.F(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
abf:function abf(d,e,f,g,h,i,j,k,l,m){var _=this
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
abg:function abg(d){this.a=d},
vf:function vf(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
Pq:function Pq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ye:function ye(d,e,f){this.a=d
this.b=e
this.c=f},
Pp:function Pp(d){this.a=0
this.b=d
this.c=0},
hR9(d,e,f){return $.hRa.c3(0,d+"|"+B.w(e)+"|"+f.l(),new C.dhr(d,e,f))},
VA:function VA(d){this.a=d},
aDW:function aDW(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.k1=!1
_.iK$=j
_.oE$=k
_.nh$=l
_.iL$=m
_.bz$=n
_.a9$=o
_.c=_.a=null},
e__:function e__(d){this.a=d},
e_0:function e_0(d){this.a=d},
dZZ:function dZZ(d,e){this.a=d
this.b=e},
e_1:function e_1(d){this.a=d},
dZY:function dZY(d){this.a=d},
e_2:function e_2(d){this.a=d},
dZW:function dZW(d){this.a=d},
dZX:function dZX(d,e,f){this.a=d
this.b=e
this.c=f},
dZV:function dZV(d){this.a=d},
dZU:function dZU(){},
dZT:function dZT(d){this.a=d},
e_l:function e_l(d,e){this.a=d
this.b=e},
e_m:function e_m(d,e){this.a=d
this.b=e},
e_a:function e_a(d){this.a=d},
e_b:function e_b(d){this.a=d},
e_9:function e_9(d){this.a=d},
e_c:function e_c(d){this.a=d},
e_3:function e_3(d,e){this.a=d
this.b=e},
e_4:function e_4(d){this.a=d},
e_n:function e_n(d,e){this.a=d
this.b=e},
e_8:function e_8(d,e){this.a=d
this.b=e},
e_r:function e_r(d){this.a=d},
e_k:function e_k(d){this.a=d},
e_s:function e_s(d,e){this.a=d
this.b=e},
e_j:function e_j(d,e){this.a=d
this.b=e},
e_t:function e_t(d){this.a=d},
e_i:function e_i(d,e){this.a=d
this.b=e},
e_u:function e_u(d){this.a=d},
e_h:function e_h(d,e){this.a=d
this.b=e},
e_v:function e_v(d){this.a=d},
e_g:function e_g(d,e){this.a=d
this.b=e},
e_w:function e_w(d){this.a=d},
e_f:function e_f(d,e){this.a=d
this.b=e},
e_x:function e_x(d){this.a=d},
e_e:function e_e(d){this.a=d},
e_y:function e_y(d){this.a=d},
e_d:function e_d(d){this.a=d},
e_o:function e_o(d){this.a=d},
e_7:function e_7(d){this.a=d},
e_p:function e_p(d){this.a=d},
e_6:function e_6(d){this.a=d},
e_q:function e_q(d){this.a=d},
e_5:function e_5(d){this.a=d},
dZS:function dZS(){},
dZR:function dZR(d){this.a=d},
dZQ:function dZQ(d){this.a=d},
bg1:function bg1(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dhr:function dhr(d,e,f){this.a=d
this.b=e
this.c=f},
dhs:function dhs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aM3:function aM3(){},
aM4:function aM4(){},
afj(d,e,f,g,h){return new C.bur(d,e,f,g,h)},
bur:function bur(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fjh:function fjh(){},
fji:function fji(){},
fjj:function fjj(){},
fjk:function fjk(){},
fjl:function fjl(){},
fjm:function fjm(){},
fjn:function fjn(){},
WA:function WA(d){this.a=d},
blh:function blh(){this.d=$
this.c=this.a=null},
eHW:function eHW(){},
eHX:function eHX(){},
eHT:function eHT(d){this.a=d},
eHU:function eHU(d){this.a=d},
eHS:function eHS(d){this.a=d},
eHV:function eHV(){},
eHR:function eHR(d,e){this.a=d
this.b=e},
eHQ:function eHQ(d){this.a=d},
hRB(){var w,v,u=x.n,t=B.a([],u)
for(w=0;w<260;++w){v=new B.e9()
v.d3(w)
t.push(v.ah()*3.141592653589793*2)}u=B.a([],u)
for(w=0;w<260;++w){v=new B.e9()
v.d3(w+900)
u.push(2.2+v.ah())}return new C.bl4(new B.cA(null,x.z),new C.Pp(A.cZ),A.J,A.ax,t,u,$,A.bD,0,B.a([],x.X),null,null)},
hRD(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hRC(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hjq(d,e,f){return $.hSd.c3(0,d+"|"+B.w(e)+"|"+f.l(),new C.f1p(d,e,f))},
Wm:function Wm(d){this.a=d},
bl4:function bl4(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.iK$=j
_.oE$=k
_.nh$=l
_.iL$=m
_.bz$=n
_.a9$=o
_.c=_.a=null},
eAB:function eAB(d,e){this.a=d
this.b=e},
eAM:function eAM(d,e){this.a=d
this.b=e},
eAN:function eAN(d,e){this.a=d
this.b=e},
eAJ:function eAJ(d){this.a=d},
eAK:function eAK(d){this.a=d},
eAL:function eAL(d){this.a=d},
eAO:function eAO(d){this.a=d},
eAI:function eAI(d){this.a=d},
eAP:function eAP(d,e){this.a=d
this.b=e},
eAQ:function eAQ(d){this.a=d},
eAH:function eAH(d,e){this.a=d
this.b=e},
eAR:function eAR(d){this.a=d},
eAG:function eAG(d,e){this.a=d
this.b=e},
eAS:function eAS(d){this.a=d},
eAF:function eAF(d){this.a=d},
eAT:function eAT(d){this.a=d},
eAE:function eAE(d){this.a=d},
eAU:function eAU(d){this.a=d},
eAD:function eAD(d){this.a=d},
eAV:function eAV(d){this.a=d},
eAC:function eAC(d){this.a=d},
eAA:function eAA(){},
eAz:function eAz(){},
eAy:function eAy(d){this.a=d},
eAx:function eAx(d){this.a=d},
bsu:function bsu(d,e){this.b=d
this.a=e},
f1p:function f1p(d,e,f){this.a=d
this.b=e
this.c=f},
f1q:function f1q(){},
f1r:function f1r(){},
VB:function VB(d){this.a=d},
aDX:function aDX(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.iK$=k
_.oE$=l
_.nh$=m
_.iL$=n
_.bz$=o
_.a9$=p
_.c=_.a=null},
e_C:function e_C(){},
e04:function e04(){},
e_R:function e_R(d,e){this.a=d
this.b=e},
e_I:function e_I(d,e){this.a=d
this.b=e},
e_S:function e_S(d){this.a=d},
e_H:function e_H(d){this.a=d},
e_T:function e_T(d){this.a=d},
e_Q:function e_Q(d){this.a=d},
e_X:function e_X(d){this.a=d},
e_P:function e_P(d){this.a=d},
e_Y:function e_Y(d){this.a=d},
e_O:function e_O(d,e){this.a=d
this.b=e},
e_Z:function e_Z(d){this.a=d},
e0_:function e0_(d){this.a=d},
e_N:function e_N(d,e){this.a=d
this.b=e},
e00:function e00(d){this.a=d},
e_M:function e_M(d,e){this.a=d
this.b=e},
e01:function e01(d){this.a=d},
e_L:function e_L(d,e){this.a=d
this.b=e},
e02:function e02(d){this.a=d},
e_K:function e_K(d,e){this.a=d
this.b=e},
e03:function e03(d){this.a=d},
e_J:function e_J(d){this.a=d},
e_U:function e_U(d){this.a=d},
e_G:function e_G(d){this.a=d},
e_V:function e_V(d){this.a=d},
e_F:function e_F(d){this.a=d},
e_W:function e_W(d){this.a=d},
e_E:function e_E(d){this.a=d},
e_B:function e_B(d){this.a=d},
e_A:function e_A(){},
e_D:function e_D(d,e){this.a=d
this.b=e},
e_z:function e_z(d){this.a=d},
bbc:function bbc(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
We:function We(d){this.a=d},
bl1:function bl1(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.iK$=e
_.oE$=f
_.nh$=g
_.iL$=h
_.bz$=i
_.a9$=j
_.c=_.a=null},
etv:function etv(d,e){this.a=d
this.b=e},
etw:function etw(d,e){this.a=d
this.b=e},
etu:function etu(d,e){this.a=d
this.b=e},
etx:function etx(d,e){this.a=d
this.b=e},
ett:function ett(d,e){this.a=d
this.b=e},
bs2:function bs2(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f_z:function f_z(d){this.a=d},
aM5:function aM5(){},
bxH:function bxH(){},
aMz:function aMz(){},
bxQ:function bxQ(){},
aMC:function aMC(){},
bxS:function bxS(){},
hRz(){var w,v,u,t=B.a([],x.d9),s=B.a([],x.g)
for(w=0;w<150;++w){v=new B.e9()
v.d3(w)
v=v.ah()
u=new B.e9()
u.d3(w+500)
s.push(new B.t(v,u.ah()))}return new C.bjM(new B.cA(null,x.z),new C.Pp(A.cZ),t,A.ax,s,$,A.bD,0,B.a([],x.X),null,null)},
PU:function PU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
UF:function UF(d){this.a=d},
bjM:function bjM(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.iK$=i
_.oE$=j
_.nh$=k
_.iL$=l
_.bz$=m
_.a9$=n
_.c=_.a=null},
dIM:function dIM(){},
dIA:function dIA(){},
dIB:function dIB(d,e){this.a=d
this.b=e},
dIC:function dIC(d,e){this.a=d
this.b=e},
dIz:function dIz(d){this.a=d},
dIy:function dIy(d){this.a=d},
dIE:function dIE(d){this.a=d},
dIx:function dIx(d,e){this.a=d
this.b=e},
dIF:function dIF(d){this.a=d},
dIw:function dIw(d){this.a=d},
dIG:function dIG(d){this.a=d},
dIv:function dIv(d){this.a=d},
dIH:function dIH(d){this.a=d},
dIu:function dIu(d){this.a=d},
dII:function dII(d){this.a=d},
dIt:function dIt(d){this.a=d},
dIJ:function dIJ(d){this.a=d},
dIs:function dIs(d){this.a=d},
dIK:function dIK(d){this.a=d},
dIr:function dIr(d){this.a=d},
dIL:function dIL(d){this.a=d},
dIq:function dIq(d){this.a=d},
dID:function dID(d){this.a=d},
dIp:function dIp(d){this.a=d},
baA:function baA(d,e){this.b=d
this.a=e},
aeY:function aeY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vy:function Vy(d){this.a=d},
bkc:function bkc(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.iK$=p
_.oE$=q
_.nh$=r
_.iL$=s
_.bz$=t
_.a9$=u
_.c=_.a=null},
dZi:function dZi(d){this.a=d},
dZ8:function dZ8(d,e){this.a=d
this.b=e},
dZ9:function dZ9(d,e){this.a=d
this.b=e},
dZ7:function dZ7(d,e){this.a=d
this.b=e},
dZa:function dZa(d){this.a=d},
dZ6:function dZ6(d){this.a=d},
dZb:function dZb(d){this.a=d},
dZ5:function dZ5(d,e){this.a=d
this.b=e},
dZc:function dZc(d){this.a=d},
dZ4:function dZ4(d,e){this.a=d
this.b=e},
dZd:function dZd(d){this.a=d},
dZ3:function dZ3(d,e){this.a=d
this.b=e},
dZe:function dZe(d){this.a=d},
dZ2:function dZ2(d,e){this.a=d
this.b=e},
dZf:function dZf(d){this.a=d},
dZ1:function dZ1(d){this.a=d},
dZg:function dZg(d){this.a=d},
dZ0:function dZ0(d){this.a=d},
dZh:function dZh(d){this.a=d},
dZ_:function dZ_(d){this.a=d},
bfT:function bfT(d,e){this.b=d
this.a=e},
deB:function deB(d){this.a=d},
Wa:function Wa(d){this.a=d},
bl0:function bl0(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.iK$=f
_.oE$=g
_.nh$=h
_.iL$=i
_.bz$=j
_.a9$=k
_.c=_.a=null},
esK:function esK(d,e){this.a=d
this.b=e},
esL:function esL(d){this.a=d},
esJ:function esJ(d){this.a=d},
esM:function esM(d){this.a=d},
esI:function esI(d){this.a=d},
esN:function esN(d){this.a=d},
esH:function esH(d){this.a=d},
esO:function esO(d){this.a=d},
esG:function esG(d){this.a=d},
esP:function esP(d){this.a=d},
esF:function esF(d,e){this.a=d
this.b=e},
esQ:function esQ(d){this.a=d},
esE:function esE(d,e){this.a=d
this.b=e},
esR:function esR(d){this.a=d},
esD:function esD(d,e){this.a=d
this.b=e},
esS:function esS(d){this.a=d},
esC:function esC(d,e){this.a=d
this.b=e},
bri:function bri(d,e){this.b=d
this.a=e},
aLF:function aLF(){},
bxA:function bxA(){},
aM1:function aM1(){},
bxG:function bxG(){},
aMy:function aMy(){},
bxP:function bxP(){},
fID(d,e,f){return C.iaV(d,e,f)},
iaV(d,e,f){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$fID=B.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
r=B.hK([d],f)
o=(self.URL||self.webkitURL).createObjectURL(r)
o.toString
q=o
n=B.mR(q)
n.download=e
o=n.style
o.display="none"
p=n
o=document.body
if(o!=null)o.appendChild(p).toString
J.H9(p)
w=7
return B.b(B.bP(A.iS,null,x.H),$async$fID)
case 7:J.lA(p);(self.URL||self.webkitURL).revokeObjectURL(q)
u=!0
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$fID,v)},
i4w(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.U(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.F)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.M)(w),++q){p=w[q]
u.push(B.G(["k",p.b,"x",B.o6(A.k.ac(p.c,4)),"y",B.o6(A.k.ac(p.d,4)),"v",p.e,"l",B.o6(A.k.ac(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.o6(A.k.ac(p.as,3)),"ch",p.at,"vc",B.o6(A.k.ac(p.z,3)),"s",B.o6(A.k.ac(p.ch,2))],s,r))}w=B.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.M)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a6(f).k("cr.E"))
A.d.fc(l)
return A.X.ap(B.G(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
ie5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.X.aN(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=B.a([],x.fs)
g=x.bM
f=g.a(J.q(w,"parts"))
f=J.aV(f==null?A.cy:f)
while(f.C()){u=f.gR(f)
t=i.a(u)
e=B.aU(J.q(t,"k"))
s=e==null?"":e
if(!$.qo().aj(0,s)){J.cb(v,null)
continue}d=s
a0=B.aK(J.q(t,"x"))
if(a0==null)a0=0.5
a1=B.aK(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.tF(a2,d,a0,a1)
a3.aqF(a2,d,a0,a1)
h.push(a3)
r=a3
a1=B.aK(J.q(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=B.aK(J.q(t,"l"))
if(d==null)d=r.f
r.f=d
d=B.aK(J.q(t,"o"))
if(d==null)d=r.r
r.r=d
d=B.jS(J.q(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.jS(J.q(t,"b"))
r.x=d===!0
d=B.aU(J.q(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aK(J.q(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aK(J.q(t,"ch"))
r.at=A.k.N(d==null?0:d)
d=B.aK(J.q(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aK(J.q(t,"s"))
r.ch=A.k.E(d==null?1:d,1,2.6)
J.cb(v,r)}i=g.a(J.q(w,"wires"))
i=J.aV(i==null?A.cy:i)
h=x.j
while(i.C()){q=i.gR(i)
p=h.a(q)
f=B.aK(J.q(p,0))
o=f==null?a5:A.k.N(f)
f=B.aK(J.q(p,2))
n=f==null?a5:A.k.N(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.q(v,o)
l=J.q(v,n)
if(m!=null&&l!=null)a6.akZ(m,A.k.N(B.e5(J.q(p,1))),l,A.k.N(B.e5(J.q(p,3))))}i=B.aK(J.q(w,"challenge"))
i=A.k.N(i==null?0:i)
k=B.aY(x.S)
h=g.a(J.q(w,"done"))
h=J.aV(h==null?A.cy:h)
while(h.C()){j=h.gR(h)
J.cb(k,A.k.N(B.e5(j)))}return new B.boU(i,k)}catch(a4){return a5}},
fyZ(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fyZ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.az(),$async$fyZ)
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
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$fyZ,v)},
bEe(d){return C.ifE(d)},
ifE(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bEe=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.az(),$async$bEe)
case 7:w=6
return B.b(f.ar("String","ngmy_electronics_lab_v1",d),$async$bEe)
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
return B.i($async$bEe,v)}},D,G,L,T,Al,A_,A5,A6,U
J=c[1]
B=c[0]
A=c[2]
A0=c[152]
A7=c[150]
A1=c[141]
A2=c[139]
H=c[133]
V=c[129]
A8=c[143]
W=c[153]
P=c[106]
A3=c[115]
I=c[136]
A9=c[142]
A4=c[146]
Aa=c[72]
X=c[81]
Ab=c[89]
O=c[123]
Ac=c[85]
Ad=c[127]
Ae=c[125]
Y=c[131]
Q=c[134]
Z=c[147]
Af=c[145]
N=c[144]
Ag=c[101]
Ah=c[148]
R=c[124]
Ai=c[149]
Aj=c[130]
M=c[137]
S=c[102]
Ak=c[25]
E=c[27]
F=c[98]
K=c[99]
C=a.updateHolder(c[18],C)
D=c[3]
G=c[132]
L=c[44]
T=c[138]
Al=c[151]
A_=c[109]
A5=c[140]
A6=c[135]
U=c[103]
C.aUh.prototype={
a5(){return"DitherKernel."+this.b}}
C.bSt.prototype={
cGa(d,e){var w,v,u,t=this
if(t.fx==null){t.fx=B.wd(!1,8192)
if(!d.gpX()){w=B.fXp(d,256,t.e)
t.y=w
t.w=C.hp8(d,t.f,w,!1)}else t.w=d
t.x=e
t.z=d.gcn(0)
t.Q=d.gbb(0)
return}if(t.as===0){w=t.z
w===$&&B.c()
v=t.Q
v===$&&B.c()
t.bas(w,v)
t.bal()}w=t.w
w.toString
t.bar(w)
w=t.w
w.toString
v=t.z
v===$&&B.c()
u=t.Q
u===$&&B.c()
t.aUI(w,v,u);++t.as
if(!d.gpX()){w=B.fXp(d,256,t.e)
t.y=w
t.w=C.hp8(d,t.f,w,!1)}else t.w=d
t.x=e},
aFv(d){var w,v,u,t,s=this
if(s.fx==null)return null
if(s.as===0){w=s.z
w===$&&B.c()
v=s.Q
v===$&&B.c()
s.bas(w,v)
s.bal()}w=s.w
w.toString
s.bar(w)
w=s.w
w.toString
v=s.z
v===$&&B.c()
u=s.Q
u===$&&B.c()
s.aUI(w,v,u)
s.fx.bs(59)
s.y=s.w=null
s.as=0
u=s.fx
t=J.eG(A.aG.gaR(u.c),0,u.a)
s.fx=null
return t},
aUI(d,e,f){var w,v,u,t,s,r,q,p,o
if(!d.gpX())throw B.W(B.dP("GIF can only encode palette images."))
w=d.a
v=w==null?null:w.geC()
u=v.a
t=this.fx
t.bs(44)
t.iQ(0)
t.iQ(0)
t.iQ(e)
t.iQ(f)
s=J.eG(v.gaR(v),0,null)
t.bs(135)
r=v.b
if(r===3)t.kK(s)
else if(r===4)for(q=0,p=0;q<u;++q,p+=4){t.bs(s[p])
t.bs(s[p+1])
t.bs(s[p+2])}else if(r===1||r===2)for(q=0,p=0;q<u;++q,p+=r){o=s[p]
t.bs(o)
t.bs(o)
t.bs(o)}for(q=u;q<256;++q){t.bs(0)
t.bs(0)
t.bs(0)}this.bOB(d,e,f)},
bOB(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h={}
i.fr=i.ax=i.at=0
i.dy=new Uint8Array(256)
i.fx.bs(8)
w=new Int32Array(5003)
v=new Int32Array(5003)
u=d.a
t=u.gaf(u)
t.C()
i.ay=i.ch=9
i.cx=511
i.cy=256
i.CW=257
i.dx=!1
i.db=258
h.a=!1
s=new C.bSu(h,t)
r=s.$0()
for(q=0,p=5003;p<65536;p*=2)++q
q=8-q
for(o=0;o<5003;++o)w[o]=-1
i.Yg(i.cy)
for(n=!0;n;){m=s.$0()
for(n=!1;m!==-1;){l=(m<<12>>>0)+r
o=(A.o.dU(m,q)^r)>>>0
u=w[o]
if(u===l){r=v[o]
m=s.$0()
continue}else if(u>=0){k=5003-o
if(o===0)k=1
do{o-=k
if(o<0)o+=5003
u=w[o]
if(u===l){r=v[o]
n=!0
break}}while(u>=0)
if(n)break}i.Yg(r)
u=i.db
if(u<4096){i.db=u+1
v[o]=u
w[o]=l}else{for(o=0;o<5003;++o)w[o]=-1
u=i.cy
i.db=u+2
i.dx=!0
i.Yg(u)}j=s.$0()
r=m
m=j}}i.Yg(r)
i.Yg(i.CW)
i.fx.bs(0)},
Yg(d){var w,v=this,u=v.at,t=v.ax
u&=D.dbb[t]
v.at=u
if(t>0){u=(u|A.o.dU(d,t))>>>0
v.at=u}else{v.at=d
u=d}t+=v.ay
v.ax=t
while(t>=8){v.aNb(u&255)
u=A.o.aD(v.at,8)
v.at=u
t=v.ax-=8}if(v.db>v.cx||v.dx)if(v.dx){w=v.ch
v.ay=w
v.cx=A.o.dt(1,w)-1
v.dx=!1}else{w=++v.ay
if(w===12)v.cx=4096
else v.cx=A.o.dt(1,w)-1}if(d===v.CW){while(t>0){v.aNb(u&255)
u=A.o.aD(v.at,8)
v.at=u
t=v.ax-=8}v.aUJ()}},
aUJ(){var w,v=this,u=v.fr
if(u>0){v.fx.bs(u)
u=v.fx
u.toString
w=v.dy
w===$&&B.c()
u.bk3(w,v.fr)
v.fr=0}},
aNb(d){var w,v,u=this,t=u.dy
t===$&&B.c()
w=u.fr
v=w+1
u.fr=v
t.$flags&2&&B.aj(t)
t[w]=d
if(v>=254)u.aUJ()},
bal(){var w,v=this
v.fx.bs(33)
v.fx.bs(255)
v.fx.bs(11)
v.fx.kK(new B.d6("NETSCAPE2.0"))
w=v.fx
w.toString
w.kK(B.a([3,1],x.t))
v.fx.iQ(v.b)
v.fx.bs(0)},
bar(d){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.fx.bs(33)
l.fx.bs(249)
l.fx.bs(4)
w=d.a
v=w==null?null:w.geC()
u=v.b
t=u-1
s=0
r=0
if(u===4||u===2){q=J.eG(v.gaR(v),0,null)
p=v.a
for(o=t,n=s;n<p;++n,o+=u)if(q[o]===0){s=n
r=1
break}}l.fx.bs(r|8)
w=l.fx
w.toString
m=l.x
w.iQ(m==null?l.a:m)
l.fx.bs(s)
l.fx.bs(0)},
bas(d,e){var w=this
w.fx.kK(new B.d6("GIF89a"))
w.fx.iQ(d)
w.fx.iQ(e)
w.fx.bs(0)
w.fx.bs(0)
w.fx.bs(0)}}
C.cn2.prototype={
a5(){return"QuantizerType."+this.b}}
C.ak7.prototype={}
C.VN.prototype={
U(){return new C.bkx(B.U(x.N,x.i),new B.as(A.at,$.ax()),B.a([],x.X),B.a([],x.L),B.mK(0,null,null))}}
C.bkx.prototype={
gWu(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
this.ch.q()
this.a3()},
Pr(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Pr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aW.al$.d.c
if(s!=null)s.jR()
p.bP(0,A.c9)
t.m(new C.ebF(t))
t.a.toString
p=t.gWu()
w=3
return B.b(C.bzO(C.hTr(q,C.i4o(p),o,t.ay)),$async$Pr)
case 3:s=e
r=s==null?null:J.iZ(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=C.i5O(q,p,o)
if(t.c==null){w=1
break}t.m(new C.ebG(t,o,r))
$.aW.x1$.push(new C.ebH(t))
case 1:return B.h(u,v)}})
return B.i($async$Pr,v)},
Yx(d){return this.c_T(d)},
aWo(){return this.Yx(null)},
c_T(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Yx=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.al$.d.c
if(s!=null)s.jR()
t.f.saX(0,o)
t.m(new C.ebS(t))
E.dX(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bzO(C.i_o(o)),$async$Yx)
case 3:r=n.a=m.idL(f)
p.b=""
if(r!=null&&!C.i4p(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.i5P(o)
q=B.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.ak7(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.ebT(p,t))
t.c5j(p.a)
case 1:return B.h(u,v)}})
return B.i($async$Yx,v)},
c5j(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
A.d.a8(w)
w=++m.as
v=m.gWu()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new C.ebO(m))
t=d.d
s=B.U(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.ebM(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.ebP(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.M)(r),++u){p.$2(o,new C.ebQ(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.ebR(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bv.j(0.1),g=B.m(16),f=B.J(A.bv.j(0.35),A.r,1)
if(m.x)j=B.B(B.a([D.f4O,A.bc,B.E(B.d(m.Q,l,l,l,l,l,l,A.A7,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.fvd
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.UJ,l,l,l),1)
v=x.p
w=B.a([B.B(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.ffM,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.tZ,B.d(u,l,l,l,l,l,l,D.fiv,l,l,l),l))
w.push(A.cL)
w.push(B.d(k.b,l,l,l,l,l,l,F.E2,l,l,l))
u=k.e
if(u.length!==0){t=A.aT.j(0.12)
s=B.m(10)
w.push(B.p(l,B.d(u,l,l,l,l,l,l,D.fl_,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.hX,A.cn,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aB
w.push(new B.D(A.MW,new B.cc(A.aN,A.e,A.j,A.E,l,A.p,l,0,B.a([new B.y(t,l,A.mj,l,l,l,l,l,l,l,l,l),A.bn,new B.bA(1,A.bd,new B.y(q,l,new B.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.M)(j),++p){o=j[p]
t=new B.aQ(12,12)
s=new B.aQ(12,12)
A.d.v(w,B.a([A.O,new B.bM(A.a8,l,l,B.p(l,new B.y(o.a,l,A.Uq,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.bv.j(0.3),l,l,new B.bk(t,t,t,t),l,l,A.n),l,l,l,l,A.h5,l,l,l),l),A.av,B.p(l,new B.y(o.b,l,D.fqu,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.c.j(0.07),l,l,new B.bk(s,s,s,s),l,l,A.n),l,l,l,l,A.bT,l,l,l)],v))}if(m.ax)w.push(D.ejl)
j=B.cd(B.x(w,A.E,l,A.e,A.j,0,A.p),A.t,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.aik(B.p(l,j,A.f,l,new B.aZ(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.bx0,A.ey,l,l,1/0),A.b7,A.iw),B.E(C.h8r(m.gWu(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new C.eX("Ask about it",i,new C.ebW(m),l,A.bv,l),new C.eX("Invent something new",!i,new C.ebX(m),l,A.bv,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dmH[p]
i.push(new C.eX(n,!1,new C.ebY(m,n),l,A.bv,l))}f.push(new C.hj(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.d5d[p]
i.push(new C.eX(r,!1,new C.ebZ(m,r),l,A.bv,l))}f.push(new C.hj(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),m.f,l,l,l,l,l,2,B.bu(l,new B.b5(4,B.m(16),A.a0),l,A.eP,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kQ,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.ec_(m,k),l,!1,l,l,!1,l,!0,l,A.ab,l,l,l,l,l,l,l,l,l,l,l,A.df,!0,A.a3,l,A.ao,l,A.aRB,l,l),1)
h=m.at
v=h&&j?D.bMg:A.e4
j=h&&j?"Ask":"Invent"
f.push(B.B(B.a([i,A.ac,new C.j7(v,j,new C.ec0(m,k),A.bv,l)],w),A.m,l,A.e,A.j,0,l,l))
return C.oz(A.bv,A.fz,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.m,l,A.e,A.Q,0,A.p))}}
C.Gj.prototype={}
C.v1.prototype={}
C.W9.prototype={
U(){return new C.aEL(A.J,A.J,A.ax,B.aY(x.S),$,A.bD,0,B.a([],x.X),null,null)}}
C.aEL.prototype={
gaXF(){var w,v,u,t=this,s=D.HH[t.cx],r=D.Rs[t.cy],q=D.CL[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.eo(w,w.r,B.a6(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.ay_[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cI(p,0,new C.epV())},
ga2S(){return D.HH[this.cx].d/this.gaXF()},
gaOR(){return 0.1*(D.HH[this.cx].d/0.9)/D.Rs[this.cy].d},
a_(){this.a2()
this.p9()
C.cgI("rocket_lander").bM(new C.eqe(this),x.P)},
c5s(){var w=this
w.ay=A.k.E(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cZ.ah()*0.6
w.f=new B.t(0.15+A.cZ.ah()*0.7,0.08)
w.r=new B.t((A.cZ.ah()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
q6(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.eqf())
return}w=D.rB[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.E(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.t(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga2S()
v=v.aa(0,new B.t(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaOR())}if(m.dy){t=m.r
v=v.aF(0,t.aJ(0,t.gcH()*6*D.aA_[m.d]))}t=m.r=m.r.aa(0,v.aJ(0,d))
s=m.f=m.f.aa(0,t.aJ(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.t(-t.a*0.4,t.b)
t=new B.t(A.k.E(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.t(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.CL[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b1s("rocket_lander",B.G(["unlocked",t],x.N,x.A))
C.J8("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga2S()/(D.rB[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.ac(m.ga2S()/(D.rB[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dX(80,"",500,0,0.6,"noise")
B.fI()}}if(m.Q&&m.x>0&&A.o.F(A.k.bj(m.CW*20),2)===0)E.dX(90,"",70,0,0.12,"noise")
m.m(new C.eqg())},
agd(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.fhZ,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new C.eX(e[w].a,f.$1(w),new C.epX(this,g,w),v,h,v))
return new B.D(A.eG,B.x(B.a([u,A.cL,B.bW(A.bE,s,A.bq,v,6,6)],t),A.E,v,A.e,A.j,0,A.p),v)},
bEW(d){var w,v,u,t,s=this,r=null,q=s.ga2S()/(D.rB[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaOR()),o=D.aA_[s.d],n=B.m(24),m=d.c,l=B.J(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.av,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.UE,r,r,r),A.W,s.agd("ENGINE: "+D.HH[s.cx].b,D.HH,new C.epM(s),new C.epN(s),A.cT),s.agd("FUEL TANK: "+D.Rs[s.cy].b,D.Rs,new C.epO(s),new C.epP(s),A.bj),s.agd("LANDING GEAR: "+D.CL[s.db].b,D.CL,new C.epQ(s),new C.epR(s),A.aQ),s.agd("EXTRAS (tap to add)",D.ay_,new C.epS(s),new C.epT(s),A.bv)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fNK)
o=(q?A.bj:A.cs).j(0.14)
w=B.m(12)
v=A.k.ac(s.gaXF(),2)
u=A.k.ac(s.ga2S()/(D.rB[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.CL[s.db].d*100)+".",r,r,r,r,r,r,D.fiE,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.hX,A.bT,r,r,r))
m.push(A.W)
m.push(new B.bM(A.A,r,r,new C.j7(A.oi,"Launch",new C.epU(s),A.bj,r),r))
return B.at(B.p(r,B.cd(B.x(m,A.E,r,A.e,A.Q,0,A.p),A.t,r,A.y,r,A.bR,r,r,A.ah),A.f,r,A.lU,new B.o(D.bmZ,r,l,n,r,r,A.n),r,r,r,A.bT,r,r,r,r),r,r,r)},
aYN(d,e,f,g){var w=null,v=f?A.cT:A.c.j(0.1),u=B.m(18),t=B.J(A.aZ,A.r,1)
return B.nJ(A.jy,B.p(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.epJ(e),new C.epK(e),w,w,w,w,new C.epL(e))},
aYM(d,e,f){return this.aYN(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cB(new C.eq7(s,D.rB[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.rB[w].a:"\ud83d\udd12"
o.push(new C.eX(v,s.d===w,new C.eq8(s,w),r,D.rB[w].c,r))}v=B.a([s.aYM(F.anT,new C.eq9(s),s.y),A.bc,s.aYN(A.wd,new C.eqa(s),s.Q,130),A.bc,s.aYM(A.OC,new C.eqb(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aQ:A.c.j(0.1)
t=B.m(18)
A.d.v(v,B.a([A.bc,B.aB(r,B.p(r,D.bQr,A.f,r,r,new B.o(u,r,B.J(A.aZ,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eqc(s),r,r,r,r,r,r,!1,A.a5)],p))}return C.oz(A.cT,A.fz,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new C.hj(o,"WORLD",r),B.B(v,A.m,r,A.b8,A.j,0,r,r)],p),A.m,r,A.e,A.Q,0,A.p))}}
C.bhC.prototype={
a1(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.rB[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.S(),d=B.I(),a0=j.c,a1=B.ar(D.YJ,a0,0.25)
a1.toString
d.sam(new B.a9(A.b3,A.b6,A.x,B.a([F.afc,a1],x.O),l,l).aB(0,new B.a3(0,0,g,f)))
a2.aO(new B.a3(0,0,g,f),d)
w=new B.e9()
w.d3(5)
for(g=a2.a,v=0;v<70;++v){f=w.ah()
d=w.ah()
a1=w.ah()
u=new B.ap(A.R,A.N,A.U,A.V,A.S)
u.r=A.c.j(0.2+w.ah()*0.5).gp(0)
t=u.G()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=B.a([],f)
r=new B.aF(e.r,A.ag,l,l,d)
r.D(new B.aX(0,s+14))
q=new B.e9()
q.d3(2)
for(p=0;p<=i;p+=18){e=new B.aq(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.ah()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bv(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.D(new B.aq(i,h))
r.D(new B.aq(0,h))
r.D(new B.br())
e=$.S()
d=B.I()
d.r=B.ar(a0,A.w,0.6).gp(0)
a2.aG(r,d)
o=B.bJ(new B.t(k.ax*i,s+10),8,k.ay*i)
d=B.bs(o,A.i6)
a0=B.I()
a0.r=A.be.gp(0)
a2.az(d,a0)
a0=B.bs(o.cq(2),A.mT)
d=B.I()
d.b=A.a9
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.az(a0,d)
if(k.as==="ready")return
d=k.f
J.bl(g.save())
g.translate(d.a*i,d.b*h)
a2.ic(0,k.w)
i=k.as
if(i==="crashed"){k=B.I()
k.r=A.cT.j(0.6).gp(0)
k.z=Y.Ie
a2.ad(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new B.aF(i,A.ag,l,l,B.a([],f))
n.D(new B.aX(-8,18))
n.D(new B.aq(0,44+Math.sin(k.CW*40)*8))
n.D(new B.aq(8,18))
n.D(new B.br())
k=B.I()
k.r=A.aT.gp(0)
a2.aG(n,k)
i=new B.aF(i,A.ag,l,l,B.a([],f))
i.D(new B.aX(-4,18))
i.D(new B.aq(0,32))
i.D(new B.aq(4,18))
i.D(new B.br())
k=B.I()
k.r=A.c.gp(0)
a2.aG(i,k)}k=e.r
m=new B.aF(k,A.ag,l,l,B.a([],f))
m.D(new B.aX(0,-26))
m.D(new B.c3(14,-10,11,18))
m.D(new B.aq(-11,18))
m.D(new B.c3(-14,-10,0,-26))
m.D(new B.br())
i=B.I()
i.sam(D.c2c.aB(0,D.eXX))
a2.aG(m,i)
i=B.I()
i.r=A.aQ.gp(0)
a2.ad(G.uV,5,i)
i=new B.aF(k,A.ag,l,l,B.a([],f))
i.D(new B.aX(-11,6))
i.D(new B.aq(-20,20))
i.D(new B.aq(-11,18))
i.D(new B.br())
h=B.I()
h.r=A.aw.gp(0)
a2.aG(i,h)
f=new B.aF(k,A.ag,l,l,B.a([],f))
f.D(new B.aX(11,6))
f.D(new B.aq(20,20))
f.D(new B.aq(11,18))
f.D(new B.br())
k=B.I()
k.r=A.aw.gp(0)
a2.aG(f,k)
g.restore()},
aw(d){return!0}}
C.aMw.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.bxO.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bwY()}}
C.aSv.prototype={}
C.a3j.prototype={}
C.baD.prototype={}
C.UG.prototype={
U(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eC(["skin"],x.N),o=new Float32Array(0)
return new C.aDg(w,v,u,t,s,r,q,new B.cA(null,x.z),p,D.L_,D.L_,A.ax,A.cZ,o,new Int32Array(0),$,A.bD,0,B.a([],x.X),null,null)}}
C.aDg.prototype={
a_(){var w=this
w.a2()
w.p9()
w.as=new C.c3Q(w.gcdR())
new C.dJd(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a4(0)
v.d=null}this.bw6()},
cdS(d){var w,v=this
if(v.c==null)return
w=J.a5(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f3(0,B.G(["t","init","data",$.hit],x.N,x.A))
v.at=!0
v.ax=""
v.aze()
break
case"pick":v.m(new C.dIQ(v,d))
break
case"shot":v.ai3(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
break}},
aze(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.avV[q.CW]
v=new C.dIR()
u=q.ay
u=B.C(u,B.a6(u).k("cr.E"))
A.d.fc(u)
t=x.N
s=B.G(["layers",u,"skinMode",q.ch,"tone","#"+B.w(v.$1(w.b))+B.w(v.$1(w.c))+B.w(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.X.ap(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=B.U(t,x.A)
u.n(0,"t","state")
u.v(0,s)
v.f3(0,u)}},
ai3(d){return this.cuN(d)},
cuN(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ai3=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cF.aM(A.a.b7(d,A.a.cu(d,",")+1))
w=6
return B.b(B.avy(B.a([B.cBc(r,"image/png","body.png")],x.r),null,"Made in NGMY Core Protocol"),$async$ai3)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.K(x.gV).f.T(D.aQT)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ai3,v)},
ayH(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
q6(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bj(w)!==A.k.bj(v.ok)){C.a8s("kick",0.4)
v.a5x(170,new C.dJe())}v.ok=w
return},
ahT(d){var w,v,u,t,s=this
s.m(new C.dIS(s,d))
if(d==null){s.fx=D.L_
s.dy=1
w=s.as
if(w!=null)w.f3(0,B.G(["t","focus","group",null],x.N,x.A))
return}w=s.d.e
v=B.T(w).k("Z<1>")
u=B.C(new B.Z(w,new C.dIT(d),v),v.k("K.E"))
t=A.d.gI(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.M(0,t)
if(s.ch===2)s.ch=1}s.aze()
w=s.as
if(w!=null)w.f3(0,B.G(["t","focus","group",d],x.N,x.A))
s.go=0
s.cxg(t,d)
return},
cxg(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){C.a8s("kick",0.8)
this.a5x(260,new C.dIU())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dX(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a5x(w*70,new C.dIV(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dX(110,"",360,0.7,0.3,"saw")
else C.fZn("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":E.dX(210+e.length*4,"",80,0.6,0.55,"tri")
E.dX(2400,"",20,0,0.3,v)
break
case"muscle":E.dX(70,"",150,1,0.6,"sine")
break
case"vessel":E.dX(300,"",380,0.4,0.22,v)
C.a8s("kick",0.3)
break
default:C.fZn("organic",2+A.o.F(e.length,6),200,0.4)}},
cBO(d){this.m(new C.dIX(this,d))},
aZ4(){var w,v,u,t,s,r,q,p=this,o=B.aY(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
if(p.ayH(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.M(0,s.a)}q=B.C(o,o.$ti.k("cr.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.au(w)]
p.p4=""},
bWw(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new C.dIN(u,w,d))
v=x.t
C.J8("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.a5x(1100,new C.dIO(u))
return}if(d==null){if(u.cx!=null)u.ahT(null)
return}u.ahT(d)},
c_c(d,e){var w,v=this,u=null,t=B.m(18),s=B.J(A.c4.j(0.5),A.r,1)
if(v.p1){w=v.p2
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.fea,u,u,u)}else if(d==null||e==null)w=D.fsE
else{w=x.p
w=B.B(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hB,u,u,u),A.cL,B.d(e.b,u,u,u,u,u,u,F.E2,u,u,u)],w),A.E,u,A.e,A.Q,0,A.p),1),B.aJ(u,u,u,u,D.bSU,u,u,u,new C.dIP(v),u,u,u,u,"Back to the whole body",A.cd)],w),A.E,u,A.e,A.j,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(D.X8,u,s,t,u,u,A.n),u,u,u,u,H.ajx,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dxM.h(0,g)
i.aze()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.df8
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,B.M)(v),++s){r=v[s]
if(i.ayH(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=B.a([B.aJ(h,h,h,h,D.ry,h,h,h,new C.dJ3(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bJ:B.E4(h,A.qA,q)}else q=A.kN
q=B.x(B.a([B.E(q,1),new B.D(F.ZL,i.c_c(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){o=D.d6N[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new C.eX(l,n,new C.dJ4(i,o),o.c,A.c4,h))}p=B.a([new C.hj(p,h,h)],v)
if(!i.p1&&w.length!==0){n=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.M)(w),++s){k=w[s]
n.push(new C.eX(k,k===i.cx,new C.dJ5(i,k),h,A.aT,h))}p.push(new C.hj(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(C.lU(A.cs,""+A.k.V(n)+" beats/min","Heart rate",180,40,new C.dJ6(i),n))}if(i.ch>0&&t.a===0){n=B.a([],v)
for(j=0;j<5;++j)n.push(new C.JO(D.avV[j],i.CW===j,new C.dJ7(i,j),!1,h))
p.push(new C.hj(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=B.a([new C.eX("Spin",n,new C.dJ8(i),D.amK,A.aQ,h),new C.j7(A.of,"Reset view",new C.dJ9(i),A.c,h),new C.eX(l,m,new C.dJa(i),A.GX,A.aT,h)],v)
if(t.t(0,"organ"))v.push(new C.eX("Heartbeat sound",i.k4,new C.dJb(i),A.uu,A.cs,h))
p.push(new C.hj(v,h,h))
return C.oz(A.c4,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.m,h,A.e,A.Q,0,A.p))}}
C.aLG.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.aLH.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bw5()}}
C.c3Q.prototype={
kN(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hoD
$.hoD=v+1
u="ngmy-body-viewer-"+v
$.yU()
$.qn().q8(u,new C.c3R(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fN(v,"message",new C.c3S(t),!1,x.gA)
t.b=u},
f3(d,e){var w,v
try{w=this.c
if(w!=null){w=B.bzL(w.contentWindow)
if(w!=null)J.fVE(w,e,"*")}}catch(v){}}}
C.yh.prototype={}
C.Cy.prototype={}
C.ns.prototype={}
C.bbm.prototype={}
C.UL.prototype={
U(){var w=x.N,v=x.y,u=x.S
return new C.aDi(B.U(w,x.a2),B.a([],x.cB),B.U(w,v),B.U(w,v),B.U(w,u),A.ax,A.J,A.J,B.aY(u),$,A.bD,0,B.a([],x.X),null,null)}}
C.aDi.prototype={
a_(){var w=this
w.a2()
w.p9()
w.acS()
$.aW.x1$.push(new C.dKT(w))},
acS(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$acS=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$acS)
case 6:q=e.tv("ngmy_circuit_passed_v1")
r=q==null?A.Z:q
if(s.c!=null)s.m(new C.dKx(s,r))
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
return B.i($async$acS,v)},
adc(d){return this.c30(d)},
c30(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$adc=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.M(0,d)
u=3
w=6
return B.b(B.az(),$async$adc)
case 6:r=f
q=s.cx
p=B.a6(q).k("k0<cr.E,n>")
q=B.C(new B.k0(q,new C.dKA(),p),p.k("K.E"))
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
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$adc,v)},
axr(d,e,f,g){var w="c"+this.y++,v=new C.Cy(w,e,f,g)
this.d.n(0,w,v)
return v},
mA(d,e,f){return this.axr(0,e,f,0)},
acd(d,e){var w
if(D.zw.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.aa(0,new B.t(-36,w))},
tS(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aSU(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.nh$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dq(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.e9(m,D.cRa[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tS(p,0)&&n.tS(p,1)
break
case"or":p=q.a
o=n.tS(p,0)||n.tS(p,1)
break
case"xor":p=q.a
o=n.tS(p,0)!==n.tS(p,1)
break
case"nand":p=q.a
o=!(n.tS(p,0)&&n.tS(p,1))
break
case"nor":p=q.a
o=!(n.tS(p,0)||n.tS(p,1))
break
case"not":o=!n.tS(q.a,0)
break
default:o=n.tS(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bP8(){return this.aSU(null)},
q6(d){var w,v,u,t,s,r,q,p,o,n=this
n.bP8()
if(!n.ax)return
for(w=n.d,w=new B.bc(w,B.a6(w).k("bc<2>")).gaf(0),v=new B.f5(w,new C.dKU()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.nh$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.nh$)
o=s+1
E.dX(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
axs(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
m5(d,e){var w=this.x
return new B.t(d*w.a,e*w.b)},
atF(d){var w=this
if(w.x.A(0,A.ax)){$.aW.x1$.push(new C.dKv(w,d))
return}w.m(new C.dKw(w,d))},
cxy(d){this.m(new C.dKB(this,d,$.bEA()[d]))},
c7N(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bEA()[a0]
v=d.d
u=B.a6(v).k("bc<2>")
t=u.k("Z<K.E>")
s=t.k("K.E")
r=B.C(new B.Z(new B.bc(v,u),new C.dKq(),t),s)
A.d.aW(r,new C.dKr())
q=B.C(new B.Z(new B.bc(v,u),new C.dKs(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dKt(d,w))
return}u=d.r
p=B.dQ(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dt(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.h2(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aSU(0)
h=m.h(0,A.d.gI(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lq(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aH(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.v(0,p)
d.m(new C.dKu(d,o,a0))},
aye(d){var w,v,u,t,s=this.d,r=B.a6(s).k("bc<2>")
s=B.C(new B.bc(s,r),r.k("K.E"))
r=B.T(s).k("dx<1>")
s=new B.dx(s,r)
s=new B.bS(s,s.gL(0),r.k("bS<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cgg(d){var w,v,u,t,s,r=this.d,q=B.a6(r).k("bc<2>")
r=B.C(new B.bc(r,q),q.k("K.E"))
q=B.T(r).k("dx<1>")
r=new B.dx(r,q)
r=new B.bS(r,r.gL(0),q.k("bS<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c_5(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.zw.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.acd(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.z(p,o)
s=l}}}return t},
bNW(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.acd(p,o)
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
c7P(d){var w,v,u,t=this,s=t.aye(d)
if(s!=null){w=t.d.h(0,s)
w.toString
B.f1()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
E.dX(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new C.dKC())
return}u=t.bNW(d)
if(u!=null)t.m(new C.dKD(t,u))
else t.m(new C.dKE(t))},
awg(d){return this.c2_(d)},
c2_(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$awg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.aye(d)
if(s==null){w=1
break}B.jJ()
t.m(new C.dKz(t,s))
case 1:return B.h(u,v)}})
return B.i($async$awg,v)},
bAL(d){if(this.x.A(0,A.ax))return
this.m(new C.dKp(this,d,A.cZ))
B.f1()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bEA()[g]
g=x.p
v=B.a([B.aJ(h,h,h,h,B.X(i.ax?A.uu:Q.Cm,A.ae,h,h,h,21),h,h,h,new C.dKN(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.m(16)
s=A.cp.j(0.14)
r=B.J(A.cp.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.fdj,h,h,h),B.d(w.b,h,h,h,h,h,h,G.a9s,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.l0,B.d(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.bj:A.eU,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.B(B.a([B.E(B.x(q,A.E,h,A.e,A.j,0,A.p),1),B.bI(D.fDX,i.gc7M(),B.bp(A.cp,h,h,h,h,h,h,h,h,h,h,A.cd))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,X.N5,D.bxE,h,h,1/0))}u.push(B.E(B.cB(new C.dKO(i)),1))
if(f!=null){t=B.m(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.d(D.zw.h(0,r).a+": "+D.zw.h(0,r).e,h,h,h,h,h,h,A.t7,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,A6.ajh,A.bT,h,h,1/0))}u=B.x(u,A.m,h,A.e,A.j,0,A.p)
t=B.a([],g)
for(s=D.zw.gdV(D.zw),s=s.gaf(s);s.C();){r=s.gR(s)
q=new B.aQ(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.aB(h,B.p(h,B.x(B.a([B.X(p.b,o,h,h,h,20),A.bA,new B.y(p.a,h,D.aSR,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.Q,0,A.p),A.f,h,h,new B.o(n,h,new B.bK(m,m,m,m),new B.bk(q,q,q,q),h,h,A.n),h,h,h,A.fx,Ag.N1,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dKP(i,r),h,h,h,h,h,h,!1,A.a5))}s=B.a([],g)
for(l=0;l<4;++l){k=D.djA[l]
s.push(new C.j7(A.OD,k.b,new C.dKQ(i,k),A.cp,h))}s.push(new C.j7(D.Oh,"Clear",new C.dKR(i),A.cs,h))
r=B.a([],g)
for(j=0;q=$.bEA(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.eb:A.lC
o=i.ay
n=i.cx.t(0,j)?A.bj:A.bG
r.push(new C.eX(q.a,o===j,new C.dKS(i,j),p,n,h))}return C.oz(A.cp,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new C.hj(t,"PARTS",h),new C.hj(s,"TRY",h),new C.hj(r,"TASKS",h)],g),A.m,h,A.e,A.Q,0,A.p))}}
C.bbF.prototype={
a1(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.S()
w=B.I()
w.r=D.adG.gp(0)
a7.aO(new B.a3(0,0,0+a5,0+a6),w)
v=B.I()
v.r=A.c.j(0.05).gp(0)
for(w=a7.a,u=20;u<a6;u+=28)for(t=14;t<a5;t+=28){s=v.G()
w.drawCircle(t,u,1,s)
s.delete()}for(a5=this.b,a6=a5.e,r=a6.length,q=a5.f,p=x.v,o=a5.d,n=0;n<a6.length;a6.length===r||(0,B.M)(a6),++n){m=a6[n]
l=m.a
k=o.h(0,l)
j=o.h(0,m.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=a5.acd(j,m.c)
f=q.h(0,l)===!0
l=$.S()
e=B.a([],p)
d=new B.aF(l.r,A.ag,a4,a4,e)
e.push(new B.aX(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new B.kU(h+a0,i,l-a0,a1,l,a1))
if(f){l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.b=A.a9
l.c=9
l.r=A.bG.j(0.28).gp(0)
l.z=I.pk
s=l.G()
l=d.gbx().a.snapshot()
w.drawPath((d.e=new B.cj(l)).a,s)
s.delete()}l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.b=A.a9
l.c=3.2
l.d=A.bB
l.r=(f?A.dQ:A.bs).gp(0)
s=l.G()
l=d.e
w.drawPath((l==null?d.e=new B.cj(d.gbx().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.aa(0,D.IQ)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new B.aF($.S().r,A.ag,a4,a4,B.a([],p))
w=a3.b
p.D(new B.aX(a6,w))
r=g.b
p.D(new B.kU(a6+a0,w,a5-a0,r,a5,r))
r=B.I()
r.b=A.a9
r.c=3
r.r=A.ae.gp(0)
a7.aG(p,r)}for(a5=new B.dq(o,o.r,o.e);a5.C();)this.c7O(a7,a5.d)},
c7O(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.zw.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bJ(a0.c,64,64)
s=B.bs(t,A.lj)
r=w.cy===v
q=s.eT(A.cv)
$.S()
p=B.I()
p.r=A.w.j(0.55).gp(0)
p.z=A.mQ
d.az(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.I()
p.sam(new B.c0(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.K],x.O),g,g).aB(0,B.bX(a0.c,52)))
d.ad(q,52,p)}q=s.eT(A.cH)
p=B.I()
o=e.c
p.r=B.ar(o,A.w,0.65).gp(0)
d.az(q,p)
n=u?0.35:0
q=B.I()
p=B.ar(o,A.c,0.1+n)
p.toString
m=B.ar(o,A.w,u?0.2:0.45)
m.toString
q.sam(new B.a9(A.b3,A.b6,A.x,B.a([p,m],x.O),g,g).aB(0,t))
d.az(s,q)
q=B.I()
q.b=A.a9
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.az(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.us:D.bMI}else l=e.b
k=C.h0c(B.lq(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a1(d,v.aF(0,new B.t(p/2,q.gbb(q)/2)))
j=C.h0c(e.a,10.5,A.c,g,g,A.H)
j.a1(d,a0.c.aa(0,new B.t(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.h0c(f,9,u?A.dQ:A.bY,g,g,A.u)
i.a1(d,a0.c.aa(0,new B.t(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aZI(d,w.acd(a0,h),o)
this.aZI(d,a0.c.aa(0,D.IQ),o)},
aZI(d,e,f){var w
$.S()
w=B.I()
w.r=D.adG.gp(0)
d.ad(e,8.5,w)
w=B.I()
w.b=A.a9
w.c=2.2
w.r=f.gp(0)
d.ad(e,8.5,w)
w=B.I()
w.r=A.c.gp(0)
d.ad(e,3.2,w)},
aw(d){return!0}}
C.aLL.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.bxC.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bwa()}}
C.NA.prototype={
U(){return new C.aDz(B.mK(0,null,null))}}
C.KF.prototype={
a5(){return"_UnfoldStyle."+this.b}}
C.AJ.prototype={}
C.aDz.prototype={
c7U(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gco(0).at
v.toString
w.f=v}w.m(new C.dQJ(w,e))},
c0T(){var w=this
w.e.q()
w.e=B.mK(w.f,null,null)
w.m(new C.dQI(w))},
q(){this.e.q()
this.a3()},
B(d){var w=this,v=null,u=w.d,t=u==null
return B.ov(t,B.c6(v,A.c0,t?new C.brD(w.e,w.gc7T(w),new C.dQK(d),v):new C.aHM(u,new B.cs(u.b,x.gj)),v,!1,!1,v,!1),new C.dQL(w,u),x.K)}}
C.btc.prototype={}
C.brD.prototype={
aZJ(d,e){var w=null
return new B.D(H.a_d,B.x(B.a([B.d(d,w,w,w,w,w,w,D.fdU,w,w,w),A.bA,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=B.B(B.a([B.aJ(v,v,v,v,S.nt,v,v,v,w.e,v,v,v,v,v,v),A.t0,D.bDD],u),A.m,v,A.e,A.j,0,v,v),s=w.aZJ("STUDIOS","Play, make things, and keep what you make")
$.bEB()
return B.bn(!0,B.x(B.a([new B.D(D.bCF,t,v),B.E(B.vJ(0,v,A.t,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,B.a([new B.mi(s,v),new B.nY(A.hI,B.Pc(new B.oy(new C.f_6(d),9,!0,!0,!0,0,B.t6(),v),D.aQI),v),new B.mi(w.aZJ("SCENES","Each one is a studio too: change the style, colours and words"),v),new B.nY(D.bxL,B.Pc(new B.oy(new C.f_7(w),6,!0,!0,!0,0,B.t6(),v),D.aQI),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)}}
C.af2.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=B.m(20),n=B.m(20),m=B.ar(F.nf,p,0.3)
m.toString
w=x.O
m=B.a([m,D.agD],w)
v=B.J(p.j(0.6),A.r,1.2)
u=x.V
t=B.a([new B.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=B.ar(p,A.w,0.45)
s.toString
w=B.a([p,s],w)
u=B.a([new B.ac(0,A.G,p.j(0.5),A.J,12)],u)
return B.aG(!1,A.a1,!0,r,B.aM(!1,o,!0,B.eJ(B.x(B.a([B.p(r,B.X(q.c,A.c,r,r,r,24),A.f,r,r,new B.o(r,r,r,r,u,new B.a9(A.az,A.aE,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.O,B.d(q.a,r,2,A.a2,r,r,r,B.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cL,B.d(q.b,r,2,A.a2,r,r,r,B.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.b8,A.j,0,A.p),r,new B.o(r,r,v,n,t,new B.a9(A.az,A.aE,A.x,m,r,r),A.n),r,A.Gd,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ai)}}
C.adU.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=B.m(20),g=B.m(20),f=B.ar(F.nf,A.d.gI(i),0.24)
f.toString
w=x.O
f=B.a([f,D.agD],w)
v=B.J(A.d.gI(i).j(0.35),A.r,1)
u=x.V
t=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cv,12)],u)
s=x.p
r=B.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new B.aQ(6,6)
m=B.a([A.d.gI(i),A.d.gak(i)],w)
l=B.a([new B.ac(0,A.G,A.w.j(0.45),H.aJb,0)],u)
r.push(B.p(k,B.X(q[p],A.c,k,k,k,11),A.f,k,k,new B.o(k,k,k,new B.bk(n,n,n,n),l,new B.a9(A.a4,A.a8,A.x,m,k,k),A.n),k,17,k,new B.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=B.x(r,A.m,k,A.e,A.Q,0,A.p)
u=B.ar(A.d.gI(i),A.d.gak(i),0.4)
u.toString
return B.aG(!1,A.a1,!0,k,B.aM(!1,h,!0,B.eJ(B.x(B.a([new B.a7(58,k,w,k),A.W,B.d(j.b,k,2,A.a2,k,k,k,B.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.av,B.X(A.Ck,A.d.gI(i),k,k,k,18)],s),A.m,k,A.b8,A.j,0,A.p),k,new B.o(k,k,v,g,t,new B.a9(A.az,A.aE,A.x,f,k,k),A.n),k,A.Gd,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ai)}}
C.Qn.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ar(A.d.gak(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,B.c1(j,new B.o(h,j,j,B.m(22),j,j,A.n),A.bg),j,j,2,2,8,j)
u=B.m(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.w.j(0.55),A.IN,26),new B.ac(-6,A.G,A.d.gI(i).j(0.1+0.4*t),A.J,30)],s)
q=B.m(22)
p=B.ar(A.d.gI(i),A.c,0.14)
p.toString
o=A.d.gI(i)
n=A.d.gak(i)
i=B.ar(A.d.gak(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bT(0,B.c1(j,new B.o(j,j,j,j,j,new B.a9(A.az,A.aE,A.x,B.a([p,o,n,i],m),D.dpa,j),A.n),A.bg),0,0,0),B.ao(j,B.c1(j,new B.o(j,j,j,j,j,new B.a9(A.b3,A.b6,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bg),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bT(0,B.b4(j,j,j,new C.bsB(i,j),A.ax),0,0,0))
i=A.c.j(0.16)
p=B.J(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=B.p(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.ffC,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,B.a([A.av,B.d(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a7,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.U3)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.fX,B.B(B.a([s,A.eu,B.E(B.x(p,A.E,j,A.e,A.Q,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(B.bT(0,B.e2(B.en(j,A.w.j(A.k.E(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=B.m(22)
m.push(B.bT(0,B.e2(B.c1(j,new B.o(j,j,B.J(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bg),!0,j),0,0,0))
return new B.a7(w,v,new B.an(A.a_,j,A.aa,A.f,B.a([h,B.bT(0,B.c1(B.by(q,new B.an(A.a_,j,A.aa,A.t,m,j),A.aq),new B.o(j,j,j,u,r,j,A.n),A.bg),0,0,0)],l),j),j)}}
C.bsB.prototype={
a1(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a3(r,-10,s,w)
u=d.a
J.bl(u.save())
u.translate(v.gbK().a,v.gbK().b)
d.ic(0,0.35)
t=B.bJ(A.J,(w- -10)*1.6,s-r)
$.S()
s=B.I()
s.sam(new B.a9(A.a4,A.a8,A.x,B.a([A.K,A.c.j(0.3),A.K],x.O),null,null).aB(0,t))
d.aO(t,s)
u.restore()},
aw(d){return d.b!==this.b}}
C.bs6.prototype={
B(d){var w=null,v=B.m(22),u=B.a([D.bkV,D.afM],x.O),t=this.e,s=B.J(A.d.gI(t).j(0.4),A.r,1.2),r=B.a([new B.ac(0,A.G,A.w.j(0.5),A.kn,24)],x.V),q=B.m(22),p=A.d.gI(t)
return new B.a7(this.c,this.d,B.c1(B.by(q,B.b4(B.at(B.X(A.jR,A.d.gI(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bal(p,w),A.ax),A.aq),new B.o(w,w,s,v,r,new B.a9(A.az,A.aE,A.x,u,w,w),A.n),A.bg),w)}}
C.bal.prototype={
a1(d,e){var w,v,u,t,s,r,q,p
$.S()
w=B.I()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.G()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.G()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.eg(A.J)
$.S()
t=B.I()
t.b=A.a9
t.c=1.4
t.r=v.j(0.35).gp(0)
d.ad(u,30,t)},
aw(d){return!1}}
C.aHM.prototype={
U(){return new C.aHN(new B.cA(null,x.z),null,null)}}
C.aHN.prototype={
guf(){var w,v=this,u=v.d
if(u===$){w=B.bm(null,D.bv7,null,1,null,v)
w.cM(0)
v.d!==$&&B.bG()
v.d=w
u=w}return u},
gZU(){var w,v=this,u=v.e
if(u===$){w=B.bm(null,A.fW,null,1,null,v)
w.fl(0,!0)
v.e!==$&&B.bG()
v.e=w
u=w}return u},
gaxt(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc7R(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.k)
this.w=w}return w},
gaW6(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaWR(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb7j(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a2()
var w=this.guf()
w.df()
w.dS$.M(0,this.gcxh())},
cxi(){var w,v,u,t,s,r,q,p=this,o=p.guf().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gaxt().a){case 0:w=D.nw
break
case 1:w=D.uC
break
case 2:w=D.a3L
break
case 3:w=D.nw
break
case 4:w=D.dc0
break
case 5:w=D.uC
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.abm)r=0.09
else r=s===D.abn?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dX(260+90*v,"",260,1.6,0.18,"tri")
u=D.c4K[v]
C.q0("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.J8("bell",D.cdy,1400,0.35)}}p.ax=o},
q(){this.guf().q()
this.gZU().q()
this.bxU()},
aeh(){var w=this
w.guf().cWI(0,B.dE(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new C.eZN(w))},
cij(){this.guf().bR(0)
this.m(new C.eZM(this))},
aeg(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$aeg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaWR(),s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){q=t[r]
l.push(new B.as(new B.bb(q,A.b4,A.aO),$.ax()))}m=B.a([],m)
for(t=u.gb7j(),s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){p=t[r]
m.push(new B.as(new B.bb(p,A.b4,A.aO),$.ax()))}o=B.C(u.gaW6(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bU(F.nf,null,new C.eZL(u,l,m,o),t,!0,!0,!0,A.lL,!1,!1,x.H),$async$aeg)
case 2:l=B.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.S$=$.ax()
n.P$=0}return B.h(null,v)}})
return B.i($async$aeg,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gaxt(),f=i.a.c,e=f.b,d=i.gc7R(),a0=new C.AJ(g,e,f.c,d,i.gaW6(),i.gaWR(),i.gb7j())
f=B.ar(A.d.gI(d),A.d.gak(d),0.4)
f.toString
g=x.p
w=B.a([B.aJ(h,h,h,h,B.X(i.at?A.uu:Q.Cm,A.ae,h,h,h,21),h,h,h,new C.eZV(i),h,h,h,h,"Sound",h),B.aJ(h,h,h,h,D.bWq,h,h,h,i.gc7S(),h,h,h,h,"Edit words and pictures",h),B.aJ(h,h,h,h,D.ry,h,h,h,new C.eZW(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c9(i.gZU(),new C.eZX(i,a0),h),B.cB(new C.eZY(i,a0))],g)
u=i.as
t=u?i.gcii():i.gc7V()
u=u?D.bM2:A.un
s=B.ar(A.d.gI(d),A.d.gak(d),0.4)
s.toString
t=B.B(B.a([B.aJ(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cd),B.E(B.c9(i.guf(),new C.eZZ(i,a1,a0),h),1),B.aJ(h,h,h,h,D.bSK,h,h,h,new C.f__(i),h,h,h,h,"Replay",A.cd)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.ac(s,1)
r=B.ar(A.d.gI(d),A.d.gak(d),0.4)
r.toString
s=C.lU(r,u+"x","Speed",2.5,0.4,new C.f_0(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.dmh[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ar(A.d.gI(d),A.d.gak(d),0.4)
r.toString
u.push(new C.eX(p.b,o===p.a,new C.f_1(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.k,q=0;q<10;++q){n=D.c57[q]
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}m=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}l=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}k=A.d.gI(o).A(0,A.d.gI(n))?A.c:A.aZ
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}j=new B.ay(k,A.d.gI(o).A(0,A.d.gI(n))?2.5:1,A.r,-1)
d.push(B.aB(h,B.p(h,h,A.f,h,h,new B.o(h,h,new B.bK(j,j,j,j),h,h,new B.a9(A.az,A.aE,A.x,n,h,h),A.a6),h,l,h,D.aj0,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f_2(i,n),h,h,h,h,h,h,!1,A.a5))}return C.oz(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.ex(new B.an(A.a_,h,A.b0,A.t,v,h),i.f),e,B.x(B.a([t,s,new C.hj(u,"STYLE",h),new C.hj(d,"THEME",h)],g),A.m,h,A.e,A.Q,0,A.p))},
bzX(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nw[r]
p=A.k.E((1-A.eq.av(0,A.k.E((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.E(p/1.5707963267948966,0,1)
q=D.nw[r]
n=q+0.12
m=A.k.E((a0-n)/(q+0.2-n),0,1)
n=D.nw[r]
q=n-0.01
q=A.k.E((a0-q)/(n+0.03-q),0,1)
n=B.dr()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.kd(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nw[r]
h=i+0.1
if(A.k.E((a0-h)/(i+0.3-h),0,1)>0){i=D.nw[r]
h=i+0.1
h=A.k.E((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nw[r]
h=i+0.1
h=A.k.E((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cN(0,r*118,0,f,f,f,new B.ky(q,new B.iJ(n,f,A.b3,!0,f,new C.Qn(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nw[r]
u=v-0.02
g=A.k.E((a0-u)/(v+0.1-u),0,1)
u=A.d.gI(w)
v=D.nw[r]
t=v+0.12
e.push(new B.cN(0,r*118-3-2,0,f,f,4,new B.mt(new C.brf(u,g,1-A.k.E((a0-t)/(v+0.22-t),0,1),f),f,A.ax,f,f),f))}return new B.a7(a2,358,new B.an(A.a_,f,A.aa,A.f,e,f),f)},
bQE(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.uC[r]
p=A.q1.av(0,A.k.E((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.uC[r]
m=q+0.15
l=A.k.E((a0-m)/(q+0.25-m),0,1)
m=D.uC[r]
q=m-0.03
q=A.k.E((a0-q)/(m+0.01-q),0,1)
m=B.dr()
k=m.a
k.$flags&2&&B.aj(k)
k[11]=0.0011
m.jU(n,n,n,1)
m.fG(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.Qn(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dr()
k.fG(3.141592653589793)
k=new B.iJ(k,f,A.A,!0,f,new C.bs6(a2,108,w,f),f)}e.push(new B.cN(0,r*130,0,f,f,f,new B.ky(q,new B.iJ(m,f,A.A,!0,f,k,f),f),f))}return new B.a7(a2,378,new B.an(A.a_,f,A.aa,A.f,e,f),f)},
cCg(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a3L[w]
l.push(A.ct.av(0,A.k.E((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bT(0,B.b4(n,n,n,new C.buG(d.d,l,D.axC,m,C.brC(e,0.4,0.62),f,C.brC(e,0.45,0.7),n),A.ax),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.h0I(g,w)
q=D.axC[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cN(r,s-q*m*p+12,n,n,t,n,new B.ky(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.h0I(g,w)
r=D.a3L[w]
q=r+0.15
v.push(new B.cN(s,l,n,n,t,n,new B.ky(A.k.E((e-q)/(r+0.25-q),0,1),new B.y(u[w],n,A.UP,n,A.L,n,n,n,n,n,n,n),n),n))}return new B.a7(g,m+90,new B.an(A.a_,n,A.aa,A.f,v,n),n)},
bGb(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.ct.av(0,C.brC(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bT(0,B.at(B.dO(B.b4(f,f,f,new C.bqG(A.d.gI(a1),C.brC(a3,0,0.2),a4,f),new B.au(a5*0.95,70)),D.edD),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.E((a3-l)/(0.12+m-l),0,1)
j=A.dw.av(0,A.k.E((o-0.7)/0.3,0,1))
l=B.dr()
m=l.a
m.$flags&2&&B.aj(m)
m[11]=0.001
l.fG(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jU(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.F(r,1):-1
w.push(new B.z(o,new B.cN(0,0,0,0,f,f,new B.ck(A.A,f,f,new B.ky(k*(0.45+0.55*o),B.dO(new B.iJ(l,f,A.A,!0,f,new C.Qn(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.t(n*a5*0.34,-o*18)),f),f),f)))}A.d.aW(w,new C.eZE())
A.d.v(a0,new B.N(w,new C.eZF(),x.fR))
return new B.a7(a5,330,new B.an(A.a_,f,A.aa,A.f,a0,f),f)},
c7Q(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.uC[q]
o=A.k.E((a2-p)/(p+0.22-p),0,1)
n=A.lo.av(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.uC[q]
m=A.k.E((a2-m)/(m+0.02-m),0,1)
l=D.azG[q]
k=B.dr()
k.mO(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jU(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.uC[q]
g=h+0.1
g=A.k.E((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cN(0,0,0,0,e,e,new B.ck(A.A,e,e,new B.ky(m,B.dO(new B.iJ(k,e,A.A,!0,e,new C.Qn(d,92,w,p,j,i,0,g*s,h,e),e),new B.t(0,l)),e),e),e))
l=D.uC[q]
h=l+0.02
f=A.k.E((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cN(0,0,0,0,e,e,new B.ck(A.A,e,e,B.dO(new B.mt(new C.bb0(w,f,q,e),e,new B.au(r,212),e,e),new B.t(0,D.azG[q])),e),e))}return new B.a7(a4,330,new B.an(A.a_,e,A.aa,A.f,a0,e),e)},
bCS(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.t(-b0,-150),new B.t(b0,-40),D.edH],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nw[r]
p=A.k.E((a8-q)/(q+0.2-q),0,1)
o=A.ct.av(0,p)
q=D.azP[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nw[r]
f=g+0.2
e=A.k.E((a8-f)/(g+0.3-f),0,1)
f=D.nw[r]
g=f-0.01
g=A.k.E((a8-g)/(f+0.03-g),0,1)
f=B.dr()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.mO(l*h+D.dg6[r]*o)
f.fG(l*0.9)
h=0.55+0.45*o
f.jU(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cN(0,0,0,0,a3,a3,new B.ck(A.A,a3,a3,new B.ky(g,B.dO(new B.iJ(f,a3,A.A,!0,a3,new C.Qn(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.t(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nw[r]
i=q+0.17
a2=A.k.E((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.azP[r]
a6.push(new B.cN(0,0,0,0,a3,a3,new B.ck(A.A,a3,a3,B.dO(new B.mt(new C.bqI(A.d.gI(w),a2,a3),a3,new B.au(a4,30),a3,a3),new B.t(0,q+48-4)),a3),a3))}}return new B.a7(b0,330,new B.an(A.a_,a3,A.aa,A.f,a6,a3),a3)}}
C.brf.prototype={
a1(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a3(w-v,0,w+v,e.b)
q=B.bs(u,A.hj)
$.S()
t=B.I()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=I.pk
d.az(q,t)
t=B.bs(u,A.hj)
q=B.I()
q.r=A.c.j(s).gp(0)
d.az(t,q)},
aw(d){return d.c!==this.c||d.d!==this.d}}
C.bqG.prototype={
a1(d,e){var w,v,u=this.c,t=B.bJ(e.eg(A.J),e.b*u,e.a*u)
$.S()
u=B.I()
u.b=A.a9
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=Y.Ie
d.dO(t,u)
u=B.I()
u.b=A.a9
u.c=2.5
u.r=w.j(0.7).gp(0)
d.dO(t,u)
u=t.cq(-14)
v=B.I()
v.b=A.a9
v.c=1
v.r=w.j(0.3).gp(0)
d.dO(u,v)},
aw(d){return!0}}
C.bb0.prototype={
a1(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.eg(A.J),f=this.c,e=A.ct.av(0,f)
$.S()
w=B.I()
w.b=A.a9
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gI(u).j(0.6*v).gp(0)
d.ad(g,40+e*a0.a*0.42,w)
t=new B.e9()
t.d3(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.ah()*3.141592653589793*2
n=(40+t.ah()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.ah()
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
i=(p&1)===0?A.d.gI(u):A.c
j.r=i.j(A.k.E(v,0,1)).gp(0)
h=j.G()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
aw(d){return!0}}
C.bqI.prototype={
a1(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.eg(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.E(s-r*0.18,0,1)
if(q<=0)continue
p=B.bJ(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.S()
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.b=A.a9
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.G()
t.drawOval(B.bF(p),n)
n.delete()}},
aw(d){return d.c!==this.c}}
C.buG.prototype={
a1(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new B.a3(0,d0,0+c5,d0+60)
$.S()
d0=B.I()
w=c1.b
v=x.O
d0.sam(new B.a9(A.b3,A.b6,A.x,B.a([A.d.gI(w).j(0.18),A.K],v),c2,c2).aB(0,d1))
d2.aO(d1,d0)
d0=B.I()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bo(new B.t(0,c4),new B.t(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=C.h0I(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.S()
a3=new B.ap(A.R,A.N,A.U,A.V,A.S)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.mQ
a4=a3.G()
t.drawOval(B.bF(new B.a3(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new B.a3(d,a1,a3,a1+a0)
a6=new B.ap(A.R,A.N,A.U,A.V,A.S)
a7=B.ar(A.d.gI(w),A.c,0.1)
a7.toString
a6.sam(new B.a9(A.b3,A.b6,A.x,B.a([a7,A.d.gak(w)],v),c2,c2).aB(0,a5))
a4=a6.G()
t.drawRect(B.bF(a5),a4)
a4.delete()
a2=a2.r
a6=B.a([],n)
a8=new B.aF(a2,A.ag,c2,c2,a6)
a6.push(new B.aX(a3,a1))
a7=a3+c8
a9=a1+c9
a6.push(new B.aq(a7,a9))
a6.push(new B.aq(a7,m))
a6.push(new B.aq(a3,c4))
a6.push(new B.br())
a6=new B.ap(A.R,A.N,A.U,A.V,A.S)
a6.r=B.ar(A.d.gak(w),A.w,0.5).gp(0)
a4=a6.G()
a6=a8.gbx().a.snapshot()
t.drawPath((a8.e=new B.cj(a6)).a,a4)
a4.delete()
a6=B.a([],n)
b0=new B.aF(a2,A.ag,c2,c2,a6)
a6.push(new B.aX(d,a1))
a6.push(new B.aq(d+c8,a9))
a6.push(new B.aq(a7,a9))
a6.push(new B.aq(a3,a1))
a6.push(new B.br())
a2=new B.ap(A.R,A.N,A.U,A.V,A.S)
a2.r=B.ar(A.d.gI(w),A.c,0.45).gp(0)
a4=a2.G()
a2=b0.gbx().a.snapshot()
t.drawPath((b0.e=new B.cj(a2)).a,a4)
a4.delete()
b1=new B.ap(A.R,A.N,A.U,A.V,A.S)
b1.b=A.a9
b1.c=1
b1.r=A.c.j(0.28).gp(0)
a4=b1.G()
t.drawRect(B.bF(a5),a4)
a4.delete()
a4=b1.G()
a2=a8.e
t.drawPath((a2==null?a8.e=new B.cj(a8.gbx().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.G()
a2=b0.e
t.drawPath((a2==null?b0.e=new B.cj(b0.gbx().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bj(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=B.bs(new B.a3(b7,a7,b7+r,b5),A.hj)
$.S()
b9=new B.ap(A.R,A.N,A.U,A.V,A.S)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.G()
t.drawRRect(B.ek(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new B.a3(d,a1,a3,a1+28)
J.bl(t.save())
t.clipRect(B.bF(a5),$.mr()[1],!0)
$.S()
a1=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1.sam(new B.a9(A.b3,A.b6,A.x,B.a([A.K,A.c.j(0.4),A.K],v),c2,c2).aB(0,c0))
a4=a1.G()
t.drawRect(B.bF(c0),a4)
a4.delete()
t.restore()}}},
aw(d){return!0}}
C.aNl.prototype={
aV(){this.b6()
this.b3()
this.dH()},
q(){var w=this,v=w.b4$
if(v!=null)v.a6(0,w.gdD())
w.b4$=null
w.a3()}}
C.a0y.prototype={
a5(){return"_Role."+this.b}}
C.qc.prototype={}
C.qU.prototype={}
C.CC.prototype={}
C.Zw.prototype={}
C.aeR.prototype={}
C.a0L.prototype={
gY(d){return this.d}}
C.CM.prototype={}
C.abO.prototype={}
C.ac3.prototype={}
C.adX.prototype={}
C.bhz.prototype={
a30(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dX(d,"",e,g,h,f)},
b8o(d,e,f){return this.a30(d,e,f,0,0.55)},
aBY(d,e,f,g){return this.a30(d,e,f,0,g)},
b8p(d,e,f,g){return this.a30(d,e,f,g,0.55)},
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
w.aU()},
akg(d,e,f,g){var w="n"+this.ay++,v=new C.qU(w,e,f,g)
this.a.n(0,w,v)
this.aU()
return v},
Ba(d,e,f){return this.akg(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bu(w.b,new C.dlp(e))
A.d.bu(w.c,new C.dlq(e))
w.aU()},
bcd(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mP.h(0,v.b).c===D.xd)return!1
w=this.b
if(A.d.b5(w,new C.dlm(d,e)))return!1
w.push(new C.CC(d,e))
this.aU()
return!0},
c_Q(d){var w
if(d.b==="beat")return D.cdI[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.au(500)
case 2:return 1400+w.au(2200)
default:return 450+w.au(2000)}},
aFw(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aA4[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.CM(u,t,j.ax,90))
w.push(new C.CM(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ah()*3.141592653589793*2
v.push(new C.a0L(u,new B.t(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b8o(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ah()*3.141592653589793*2
p=100+w.ah()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ar(t,A.c,w.ah()*0.5)
m.toString
v.push(new C.a0L(u,new B.t(o*p,n*p),m,3+w.ah()*4.5,1000+w.au(700),j.ax))}j.f.push(new C.CM(u,t,j.ax,120))
j.aBY(120,200,"noise",0.5)
j.b8o(261.63*Math.pow(2,([7,12,16,19][w.au(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.CM(u,t,j.ax,230))
w.push(new C.CM(u,t,j.ax+160,160))
w.push(new C.CM(u,t,j.ax+320,100))
j.b8p(180+j.at.au(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.abO(u,new B.t((w.ah()-0.5)*220,-260-w.ah()*180),t,j.ax))
j.b8p(300+w.au(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ah()*3.141592653589793*2
j.w.push(new C.ac3(u,u.aa(0,new B.t(Math.cos(q),Math.sin(q)).aJ(0,260+w.ah()*200)),t,j.ax))
j.a30(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fI()
j.a30(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.adX(u,D.azt[v],t,j.ax))
j.aBY(261.63*Math.pow(2,([0,5,9,12][j.at.au(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aBY(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.c9O[A.o.F(w,3)]
for(k=1;k<=3;++k)j.csm(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gaf(j.b),v=new B.f5(w,new C.dln(d));v.C();)j.aAt(w.gR(0),j.ax+D.cm7[A.o.F(g.d,4)])
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
case"chance":s=j.at.au(100)<D.cDe[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gaf(j.b),v=new B.f5(w,new C.dlo(d));v.C();)j.aAt(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.zn(w,0,v-700)},
csm(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.Zw(e,"~"+d))},
aAt(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.aeR(d.a,v,e,w))
u.push(new C.Zw(w,v))},
a6J(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a6(w).k("bc<2>")
w=B.C(new B.bc(w,v),v.k("K.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aFw(r)
u.n(0,r,o.ax+o.c_Q(s))}}w=o.c
v=B.T(w).k("Z<1>")
q=B.C(new B.Z(w,new C.dlr(o),v),v.k("K.E"))
if(q.length!==0){A.d.bu(w,new C.dls(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.M)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b7(u,1)
for(u=A.d.gaf(v),r=new B.f5(u,new C.dlt(p));r.C();)o.aAt(u.gR(0),o.ax)}else o.aFw(u)}}A.d.bu(o.d,new C.dlu(o))
A.d.bu(o.e,new C.dlv(o))
A.d.bu(o.f,new C.dlw(o))
A.d.bu(o.w,new C.dlx(o))
A.d.bu(o.x,new C.dly(o))
A.d.bu(o.r,new C.dlz(o))
o.aU()},
vi(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new B.t(q.a+o*e,q.b+p*e)
r.b=new B.t(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new B.t(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new B.t(l,o)
if(o>n){p=m.a=new B.t(l,n)
t=m.b=new B.t(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new B.t(-t.a*0.8,t.b)}},
ag(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=B.a([],x.F)
for(v=this.a,v=new B.dq(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.G(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.M)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.X.ap(B.G(["nodes",m,"edges",v],u,x.ew),null)},
TN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.h.a(A.X.aN(0,d,null))
k.a8(0)
for(o=x.j,n=J.aV(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=B.w(J.q(v,"k"))
if(!D.mP.aj(0,u))continue
t=B.w(J.q(v,"id"))
m.n(0,t,new C.qU(t,u,new B.t(B.e5(J.q(v,"x"))*k.cy.a,B.e5(J.q(v,"y"))*k.cy.b),A.k.N(B.e5(J.q(v,"p")))))
s=B.ca(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aV(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=B.w(J.q(r,0))
p=B.w(J.q(r,1))
if(m.aj(0,q)&&m.aj(0,p))n.push(new C.CC(q,p))}k.aU()
return!0}catch(l){return!1}},
cRo(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.qU(n,r,new B.t(q*p.a,o*p.b),s))
l.aU()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bcd(w[m.a],w[m.b])}},
gY(d){return this.cy}}
C.G4.prototype={}
C.W8.prototype={
U(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aEK(new C.bhz(B.U(w,x.f3),v,u,t,s,r,q,p,o,B.U(w,n),B.U(w,n),B.U(w,n),B.U(w,n),A.cZ,A.K,A.ax,$.ax()),A.bD,A.J,A.J,A.Z,null,null)}}
C.aEK.prototype={
acL(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$acL=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.az(),$async$acL)
case 6:q=n.jS(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.epf(s))
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
return B.i($async$acL,v)},
a9J(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$a9J=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.ep4(s))
u=3
w=6
return B.b(B.az(),$async$a9J)
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
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a9J,v)},
bM6(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a6(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new B.bc(n,w).cI(0,0,new C.ep6())+"|"+A.d.cI(o,0,new C.ep7())
if(v===p.ch)return p.CW
u=new C.epa()
t=x.s
s=B.a([],t)
r=new C.epb(p,s,u)
for(n=new B.bc(n,w).gaf(0),w=new B.f5(n,new C.ep8());w.C();){q=n.gR(0)
if(!A.d.b5(o,new C.ep9(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.d1(s,0,B.dB(5,"count",x.S),x.N).dm(0)},
a_(){var w,v=this
v.a2()
v.acL()
v.d.db=v.ay
w=v.qO(new C.epF(v))
w.h9(0)
v.e!==$&&B.aP()
v.e=w},
q(){var w=this,v=w.as
if(v!=null)v.a4(0)
v=w.e
v===$&&B.c()
v.q()
v=w.d
v.S$=$.ax()
v.P$=0
w.bwW()},
ach(d){return this.c_i(d)},
c_i(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$ach=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.az(),$async$ach)
case 6:q=m.aU(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.TN(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aXh(A.d.gI(D.ayT))
if(s.c!=null)s.m(new C.epe())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ach,v)},
aXh(d){this.d.cRo(0,d.c,d.d)
this.El()},
El(){var w=this.as
if(w!=null)w.a4(0)
this.as=B.cL(A.ly,new C.ep0(this))},
axu(d){var w,v,u,t,s=this.d.a,r=B.a6(s).k("bc<2>")
s=B.C(new B.bc(s,r),r.k("K.E"))
r=B.T(s).k("dx<1>")
s=new B.dx(s,r)
s=new B.bS(s,s.gL(0),r.k("bS<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cgh(d){var w,v,u,t,s,r=this.d.a,q=B.a6(r).k("bc<2>")
r=B.C(new B.bc(r,q),q.k("K.E"))
q=B.T(r).k("dx<1>")
r=new B.dx(r,q)
r=new B.bS(r,r.gL(0),q.k("bS<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c_6(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mP.h(0,r.b).c===D.xd)continue
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
c7Y(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hoE(new B.t(n.a+36,n.b+0),new B.t(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cA4(d){var w,v,u,t,s,r,q=this,p=q.axu(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.f1()
u=v.b
if(u==="button"){w.aFw(p)
return}if(q.r)return
t=D.mP.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qR)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.aU()
q.El()
return}if(q.r)return
r=q.c7Y(d)
if(r!=null){w=q.d
A.d.cG(w.b,r)
w.aU()
q.El()}},
chA(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cgh(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.axu(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aF(0,d)}},
chB(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aU()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.t(A.k.E(d.a+s.y.a,46,t.a-46),A.k.E(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aU()}}},
b1o(){var w,v,u=this
if(u.z!=null){w=u.c_6(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bcd(v,w)}else v=!1
if(v){B.kt()
u.El()}u.z=null
u.d.aU()}else if(u.x!=null){if(u.at)u.El()
u.x=null}},
acY(d){return this.c20(d)},
c20(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$acY=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.axu(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jJ()
p=t.c
p.toString
w=3
return B.b(B.bU(F.nf,null,new C.eph(q),p,!0,!0,!1,A.lL,!1,!1,x.y),$async$acY)
case 3:if(f===!0){r.W(0,s)
t.El()}case 1:return B.h(u,v)}})
return B.i($async$acY,v)},
c7W(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.Ba(0,d,new B.t(v.a*(0.25+u.ah()*0.5),v.b*(0.2+u.ah()*0.55)))
B.f1()
this.El()},
agL(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(F.nf,null,new C.epj(),s,!0,!0,!0,A.lL,!1,!1,x.es),$async$agL)
case 2:t=e
if(t!=null)u.aXh(t)
return B.h(null,v)}})
return B.i($async$agL,v)},
aei(d){var w=0,v=B.j(x.H),u=this,t
var $async$aei=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.ep3(),t,null,!0,!0,x.y),$async$aei)
case 2:if(f===!0){u.d.a8(0)
u.El()}return B.h(null,v)}})
return B.i($async$aei,v)},
B(d){var w=this,v=null,u=B.a([B.aik(w.r?new B.bM(A.a4,v,v,new B.D(A.Ge,B.hr(D.bQH,D.fwH,new C.epD(w),v),v),v):w.c7Z(),A.b7,A.iQ),B.E(B.cB(new C.epE(w)),1)],x.p)
if(!w.r)u.push(w.cuQ())
return B.c6(v,A.c0,B.bn(!0,B.x(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bHR(){var w=null,v=new C.ep5(),u=A.w.j(0.7),t=B.m(26),s=B.J(A.bt.j(0.5),A.r,1)
return B.bT(0,B.en(B.at(B.p(w,B.cd(B.x(B.a([D.fHZ,A.av,D.fPE,A.aA,v.$4(A.p9,A.bt,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(A_.Cg,A.cp,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.l5,A.c4,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.amX,A.bG,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fOW,new B.bM(A.a8,w,w,B.bN(!1,D.fF6,w,w,!0,w,w,this.gbHK(),w,w),w)],x.p),A.E,w,A.e,A.Q,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),A.f,w,A.Ws,new B.o(F.nf,w,s,t,w,w,A.n),w,w,w,A.fr,A6.akf,w,w,w),w,w,w),u,!0),0,0,0)},
c7Z(){var w=this,v=null,u=B.aJ(v,v,v,v,S.nt,v,v,v,new C.epp(w),v,v,v,v,v,v),t=w.a9a(A.Os,"How it works",new C.epq(w),!0),s=w.ay?A.uu:Q.Cm
return new B.D(D.bBT,B.B(B.a([u,D.bDp,t,w.a9a(s,"Sound",new C.epr(w),!0),w.a9a(A.e4,"Ideas",w.gclk(),!0),w.a9a(D.Oh,"Clear",w.gc7X(w),!0),w.aO9(A.ij,"Show",new C.eps(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aO9(d,e,f,g,h){var w=null,v=h?A.bt:A.c.j(0.08),u=B.m(14),t=B.m(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Aa.w_,B.aG(!1,A.a1,!0,u,B.aM(!1,t,!0,B.hc(new B.D(new B.Q(8,8,8,8),B.B(s,A.m,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
a9a(d,e,f,g){return this.aO9(d,e,f,g,!1)},
cuQ(){var w=null,v=new C.epl(this),u=A.c.j(0.08)
return B.p(w,B.cd(B.B(B.a([v.$2("START",D.xd),v.$2("CHANGE",D.En),v.$2("REACT",D.qR)],x.p),A.E,w,A.e,A.j,0,w,w),A.t,w,A.y,w,w,w,w,A.aN),A.f,w,w,new B.o(F.B7,w,new B.bK(new B.ay(u,1,A.r,-1),A.a0,A.a0,A.a0),w,w,w,A.n),w,w,w,w,D.bx2,w,w,w)},
cuR(d){var w,v,u,t,s=null,r=D.mP.h(0,d)
r.toString
w=B.m(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.J(v.j(0.5),A.r,1)
return new B.D(A.fx,B.aB(s,B.p(s,B.x(B.a([B.X(r.b,v,s,s,s,22),A.cL,B.d(r.a,s,1,A.a2,s,s,s,D.aSR,s,s,s)],x.p),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a9(A.b3,A.b6,A.x,u,s,s),A.n),s,s,s,s,A.hH,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.epk(this,d),s,s,s,s,s,s,!1,A.a5),s)}}
C.bhA.prototype={
a1(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bl(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.S()
u=B.I()
u.r=A.c.j(0.05).gp(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.G()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.S()
o=B.I()
o.r=b5.cx.j(0.4*((p-b6)/800)).gp(0)
b8.aO(new B.a3(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){l=w[m]
k=n.h(0,l.a)
j=n.h(0,l.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=j.c
f=g.a-36
g=g.b
e=$.S()
d=B.a([],o)
a0=new B.aF(e.r,A.ag,b4,b4,d)
d.push(new B.aX(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new B.kU(h+a1,i,f-a1,g,f,g))
a2=D.mP.h(0,k.b).d
a3=D.mP.h(0,j.b).d
e=new B.ap(A.R,A.N,A.U,A.V,A.S)
e.b=A.a9
e.c=3
e.d=A.bB
d=B.a([a2.j(0.55),a3.j(0.55)],p)
g=B.rH(new B.t(h,i),new B.t(f,g))
e.sam(new B.a9(A.a4,A.a8,A.x,d,b4,b4).aB(0,new B.a3(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.G()
i=a0.gbx().a.snapshot()
b7.drawPath((a0.e=new B.cj(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.E((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=C.hoE(new B.t(i.a+36,i.b+0),new B.t(h.a-36,h.b),a5)
$.S()
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=A.c.j(0.35).gp(0)
h.z=I.pk
q=h.G()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=A.c.gp(0)
q=g.G()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.aa(0,D.IQ)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new B.aF($.S().r,A.ag,b4,b4,B.a([],o))
o=a8.b
a0.D(new B.aX(t,o))
i=a9.b
a0.D(new B.kU(t+a1,o,w-a1,i,w,i))
i=B.I()
i.b=A.a9
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aG(a0,i)
i=B.I()
i.r=A.c.gp(0)
b8.ad(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){b0=w[m]
o=b0.c
v=A.k.E((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dT.av(0,v)
$.S()
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.b=A.a9
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gp(0)
q=h.G()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){b1=w[m]
v=A.k.E((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=B.kx(o,i,A.dT.av(0,v))
h.toString
i=B.kx(o,i,A.dT.av(0,A.k.E(v-0.35,0,1)))
i.toString
$.S()
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.c=5
o.d=A.bB
g=b1.c
f=B.a([g.j(0),g],p)
e=B.rH(i,h)
o.sam(new B.a9(A.a4,A.a8,A.x,f,b4,b4).aB(0,new B.a3(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.G()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.r=A.c.gp(0)
q=i.G()
b7.drawCircle(o,h,6,q)
q.delete()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.r=g.j(0.5*(1-v)).gp(0)
i.z=A.lJ
q=i.G()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){a4=w[m]
v=A.k.E((b6-a4.f)/a4.e,0,1)
o=a4.a
$.S()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.r=a4.c.j(1-v).gp(0)
q=i.G()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){j=w[m]
o=j.a
$.S()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
h=j.c
i.r=h.j(0.35).gp(0)
i.z=A.lJ
q=i.G()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.sam(new B.c0(V.xg,0.5,A.x,b4,0,B.a([A.c,h],p),b4,b4).aB(0,B.bX(j.a,8)))
q=i.G()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,B.M)(b5),++m){a6=b5[m]
v=A.k.E((b6-a6.d)/1000,0,1)
t=1-v
b2=C.bhB(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a1(b8,new B.t(t.a-o/2,t.b-(40+60*v+p.gbb(p)/2)))}for(b5=new B.dq(n,n.r,n.e);b5.C();)b3.ch8(b8,b5.d,b6)
b7.restore()},
ch8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mP.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.E(1-(f-w)/520,0,1)
u=B.bJ(e.c,64,64)
t=B.bs(u,A.io)
s=t.eT(A.cv)
$.S()
r=B.I()
r.r=A.w.j(0.55).gp(0)
r.z=A.mQ
d.az(s,r)
if(v>0){s=t.cq(6)
r=B.I()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.zy
d.az(s,r)}s=t.eT(A.cH)
r=B.I()
q=h.d
r.r=B.ar(q,A.w,0.65).gp(0)
d.az(s,r)
r=B.I()
s=B.ar(q,A.c,0.18+0.4*v)
s.toString
p=B.ar(q,A.w,0.35)
p.toString
r.sam(new B.a9(A.b3,A.b6,A.x,B.a([s,p],x.O),j,j).aB(0,u))
d.az(t,r)
r=B.I()
r.b=A.a9
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.az(t,r)
r=h.b
p=e.c
o=C.bhB(B.lq(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a1(d,p.aF(0,new B.t(s/2,r.gbb(r)/2)))
n=C.bhB(h.a,11,A.c,j,j,A.H)
n.a1(d,e.c.aa(0,new B.t(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.azt[A.o.F(e.d,6)]:j
h=h.c
if(h===D.qR){s=e.c.aa(0,new B.t(0,62))
r=B.I()
r.r=D.aA4[A.o.F(e.d,6)].gp(0)
d.ad(s,5,r)}else if(m!=null){l=C.bhB(m,9.5,A.aB,j,j,A.P)
l.a1(d,e.c.aa(0,new B.t(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bhB(m,9.5,A.aB,j,j,A.P)
l.a1(d,e.c.aa(0,new B.t(-l.b.c/2,54)))}if(k.c)return
if(h!==D.xd)k.b2b(d,e.c.aF(0,D.IQ),q)
k.b2b(d,e.c.aa(0,D.IQ),q)},
b2b(d,e,f){var w
$.S()
w=B.I()
w.r=A.c0.gp(0)
d.ad(e,9,w)
w=B.I()
w.b=A.a9
w.c=2.2
w.r=f.gp(0)
d.ad(e,9,w)
w=B.I()
w.r=A.c.gp(0)
d.ad(e,3.5,w)},
aw(d){return!0}}
C.aMu.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.blZ.prototype={}
C.Qc.prototype={
gY(d){return this.d}}
C.Wn.prototype={
U(){var w=B.a([],x.g4),v=B.a([],x.ed)
return new C.bl5(new B.cA(null,x.z),w,v,A.cZ,A.bD,D.Yf,null,null)}}
C.bl5.prototype={
b_V(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.E(A.k.bj((1-d.b/(B.aI(w,null,x.l).w.a.b*0.7))*10),0,9)
u=D.d3L[A.o.F(v,5)]+12*A.o.ao(v,5)+12
switch(t.z){case"glow":C.q0("synth",u,420,0.3)
break
case"rainbow":C.q0("bell",u,700,0.35)
break
case"stars":C.q0("pluck",u+12,400,0.4)
break
case"sparks":E.dX(2400+t.r.au(2000),"",60,0,0.18,"noise")
break
default:E.dX(110+t.r.au(60),"",140,0,0.22,"noise")}},
caS(d){return this.b_V(d,!1)},
a_(){var w,v=this
v.a2()
w=v.qO(new C.eBl(v))
w.h9(0)
v.w!==$&&B.aP()
v.w=w},
q(){var w=this.w
w===$&&B.c()
w.q()
this.bx4()},
gb1H(){var w=this.Q
return w<0?new L.uC(1,A.k.F(this.y*0.18,360),0.85,1).lH():D.Rv[w]},
aSz(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb1H(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.ah()*3.141592653589793*2
switch(l.z){case"fire":q=v.ah()
p=l.as
o=v.ah()
n=v.ah()
m=B.ar(A.bG,A.aw,v.ah())
m.toString
j.push(new C.Qc(new B.t(u+(q-0.5)*p,t),new B.t((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.ah()*0.4),l.y,700+v.au(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.ah()*200
n=B.ar(k,A.c,v.ah()*0.6)
n.toString
j.push(new C.Qc(d,new B.t(q*o,p*o),n,1.5+v.ah()*3,l.y,600+v.au(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.ah()*40
j.push(new C.Qc(d,new B.t(q*o,p*o),k,1.2+v.ah()*1.8,l.y,500))}}},
aZL(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb1H()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=B.a([],x.g)
r.ax=new C.blZ(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aSz(e)
r.b_V(e,!0)
r.m(new C.eAX())},
aZK(){this.ax=null
this.m(new C.eAW())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([B.aJ(n,n,n,n,D.ry,n,n,n,new C.eB5(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=B.a([B.b4(n,n,n,new C.bsw(k,o.f,o.y,o.at,n),A.ax)],m)
if(!o.ay&&k.length===0)j.push(D.b8I)
k=B.aB(A.ca,new B.an(A.a_,n,A.b0,A.t,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eB6(o),new C.eB7(o),new C.eBb(o),n,n,n,n,n,n,n,n,n,new C.eBc(o),new C.eBd(o),n,n,n,!1,A.a5)
j=B.a([],m)
for(w=0;w<5;++w){v=D.d0S[w]
j.push(new C.eX(v.b,o.z===v.a,new C.eBe(o,v),v.c,A.c4,n))}u=B.a([new C.JO(A.c,o.Q<0,new C.eBf(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new C.JO(D.Rv[t],o.Q===t,new C.eBg(o,t),!1,n))
s=o.as
s=C.lU(A.c4,A.o.u(A.k.V(s)),"Size",36,4,new C.eBh(o),s)
r=o.ch
q=r?A.uu:Q.Cm
q=B.a([new C.eX("Sound",r,new C.eBi(o),q,A.c4,n),new C.j7(A.rv,"Undo",new C.eB8(o),A.c,n),new C.j7(D.Oh,"Clear",new C.eB9(o),A.cs,n)],m)
for(w=0;w<4;++w){p=D.dhQ[w]
q.push(new C.JO(p,o.at.A(0,p),new C.eBa(o,p),!1,n))}return C.oz(A.c4,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new B.ex(k,o.d),"SPARK PAINTER",B.x(B.a([new C.hj(j,"BRUSH",n),new C.hj(u,"COLOUR",n),s,new C.hj(q,n,n)],m),A.m,n,A.e,A.Q,0,A.p))}}
C.bsw.prototype={
a1(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.S()
w=B.I()
v=a4.e
w.r=v.gp(v)
a6.aO(new B.a3(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,B.M)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.S()
o=B.a([],t)
n=new B.aF(p.r,A.ag,a5,a5,o)
o.push(new B.aX(A.d.gI(q).a,A.d.gI(q).b))
for(p=B.T(q),m=p.k("jx<1>"),l=new B.jx(q,1,a5,m),l.pd(q,1,a5,p.c),l=new B.bS(l,l.gL(0),m.k("bS<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new B.aq(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bv(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gI(q)
$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=r.c.gp(0)
j=p.G()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.S()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.b=A.a9
q.d=A.bB
q.e=A.dS
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new B.hg(A.G,p)
j=q.G()
q=n.e
u.drawPath((q==null?n.e=new B.cj(n.gbx().a.snapshot()):q).a,j)
j.delete()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.b=A.a9
q.d=A.bB
q.e=A.dS
q.c=p
q.r=o.gp(0)
j=q.G()
q=n.e
u.drawPath((q==null?n.e=new B.cj(n.gbx().a.snapshot()):q).a,j)
j.delete()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.b=A.a9
q.d=A.bB
q.e=A.dS
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.G()
q=n.e
u.drawPath((q==null?n.e=new B.cj(n.gbx().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new L.uC(1,A.o.F(i*5,360),0.85,1).lH()
o=q[i-1]
m=q[i]
$.S()
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.c=p
l.d=A.bB
l.r=h.gp(0)
j=l.G()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,B.M)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gI(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new L.uC(1,A.o.F(a3*23,360),0.7,1).lH():l
a4.c8_(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,B.M)(w),++s){a0=w[s]
e=A.k.E((t-a0.e)/a0.f,0,1)
q=a0.a
$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=S.S_
j=p.G()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c8_(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.S(),o=B.a([],x.v),n=new B.aF(p.r,A.ag,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new B.aX(r,q)
o.push(r)
q=n.f
if(q!=null)r.bv(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new B.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.bv(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.D(new B.br())
$.S()
p=B.I()
p.r=h.j(0.4).gp(0)
p.z=A.lJ
d.aG(n,p)
p=B.I()
p.r=h.gp(0)
d.aG(n,p)},
aw(d){return!0}}
C.aMD.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.ee.prototype={}
C.tF.prototype={
aqF(d,e,f,g){var w=this
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
C.aau.prototype={}
C.abA.prototype={}
C.a4C.prototype={
be5(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hh()?-1:1
v=t.ah()*3.141592653589793*2
u=f*(0.3+t.ah())
s.push(new C.aau(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ah()*0.45));++r}},
c49(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bu(w,new C.bNh())},
akg(d,e,f,g){var w="p"+this.c++,v=new C.tF(w,e,f,g)
v.aqF(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bu(this.b,new C.bNs(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cIs(d,e,f,g,h){return A.d.b5(this.b,new C.bNn(e,f,g,h))},
akZ(d,e,f,g){var w
if(d===f||this.cIs(0,d,e,f,g))return null
w=new C.abA(d,e,f,g)
this.b.push(w)
return w},
aB_(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zO(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
anG(d){return this.LY(d)&&!d.x&&d.cx>this.zO(d)},
b6w(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
LY(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c8g(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.zx.h(0,v)
if(w!=null)return w.a
return 100},
vi(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c49(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.T(v).k("Z<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.M)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Z(v,new C.bNt(a2),t).cI(0,0,new C.bNu(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.U(x.N,u)
n=new C.bNw(o)
m=B.a([],x.t)
l=new C.bNv(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.M)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.M)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.U(u,u)
f=new C.bNy(g,l,n)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,B.M)(v),++s){q=v[s]
f.$2(q,0)
f.$2(q,1)}e=g.a
if(e===0)return
s=0
for(;;){if(!(s<t)){d=0
break}q=v[s]
u=q.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){d=f.$2(q,1)
break}++s}for(u=v.length,s=0;s<u;++s)v[s].CW=0
a2.b6s(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zO(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b6s(e,d,w,!0)
a2.bOp(a4)},
b6s(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.U(x.N,b3),b5=new C.bNj(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bNi(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.M)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bNl(B.U(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.M)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.c2(b7,0,!1,b3)
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
if(h)B.b8(B.dJ(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.c2(b7,0,!1,b3)
a0=B.c2(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.M)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b6w(t)*(1+t.CW))
a4=b2.aB_(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c8g(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bRC(e,a0,b8)
if(!c0)break
for(a1=w.length,a8=!1,u=0;u<w.length;w.length===a1||(0,B.M)(w),++u){t=w[u]
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
c0=!0}for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.M)(w),++u){t=w[u]
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
bRC(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.c2(d,0,!1,x.i)
u=B.a([],x.b)
for(t=a0.length,s=x.n,r=0;r<a0.length;a0.length===t||(0,B.M)(a0),++r){q=a0[r]
p=B.a([],s)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,B.M)(a0),++n){m=a0[n]
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
t[m]=t[m]-g*u[l][m]}}}f=B.c2(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bOp(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.M)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aB_(o)/a1.b6w(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zO(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bGu(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.be5(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.tY(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.tY(o,"The "+$.qo().h(0,n).b+" got "+A.k.ac(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tY(o,"More than 1.5 amps went through the "+$.qo().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tY(o,"The regulator had to turn "+A.k.ac(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.ac(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tY(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.zx.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qo().h(0,n).b
l=f.b
l=l===A.k.jf(l)?""+A.k.V(l):B.w(l)
g=f.c
g=g===A.k.jf(g)?""+A.k.V(g):B.w(g)
a1.tY(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.ac(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.f14.t(0,n)){m=o.fx>0?A.k.E((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.E(j/0.9,0,1)
if(!o.x&&j>2.4)a1.tY(o,"The bulb got "+A.k.ac(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.E((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.tY(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.E(j/14,0,1)
break
case"motor":n=A.k.E(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.E(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.tY(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.E(i/1,0,1)
if(!o.x&&i>1)a1.tY(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.tY(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.E(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.tY(o,"The capacitor was charged to "+A.k.ac(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bGu(d){return A.d.b5(this.a,new C.bNg(d))},
tY(d,e){var w
d.x=!0
d.ay=e
this.be5(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
biK(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aHc(d){var w=d.b
return D.aPJ.t(0,w)||D.zx.aj(0,w)||w==="buck"||w==="regulator"},
bfw(d){var w,v=!0
if(!this.LY(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.zx.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
V1(d,e){var w=this.b
return new B.Z(w,new C.bNA(d,e),B.T(w).k("Z<1>")).gL(0)},
CE(d){var w,v
if(d.x)return!1
w=d.b
if(D.zx.aj(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bdC(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qo().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aHc(d)||i.CE(d))return null
w=i.V1(d,0)
v=i.V1(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.T(u).k("Z<1>")
s=B.C(new B.Z(u,i.gcQY(),t),t.k("K.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jf(r)?""+A.k.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.ac(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.zx.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.Ma("battery"),o=J.aV(t.a),t=new B.f5(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.V1(n,0)+i.V1(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.Ma("switch"),o=J.aV(t.a),t=new B.f5(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qo().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zO(k))return"The "+$.qo().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.ac(k.cx,2)+" amps, but it can only give about "+A.k.ac(i.zO(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b5(u,new C.bNo(i,d))
h=q.b
h=h===A.k.jf(h)?""+A.k.V(h):B.w(h)
u=A.k.ac(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.ac(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.ac(Math.abs(d.dy),1)+" V). Try a bigger battery."},
Ma(d){var w=this.a
return new B.Z(w,new C.bNr(d),B.T(w).k("Z<1>"))},
aGR(d){return this.Ma(d).b5(0,new C.bNq(0.35))},
pW(d,e){return A.d.b5(this.a,new C.bNp(e))}}
C.aiS.prototype={
a1(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.S()
w=B.I()
w.r=F.B9.gp(0)
c0.aO(new B.a3(0,0,b8,b9),w)
v=B.I()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.G()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,B.M)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.mc.aj(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.mc.aj(0,h.b)?(h.ch-1)*38:0
b4.cFh(c0,new B.t(k*b6+j*(42+i),l*b7),new B.t(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=C.hBt(q.a,q.b,c1)
q=b4.e
q.toString
$.S()
p=B.I()
p.r=A.ae.gp(0)
p.c=3
p.d=A.bB
c0.bo(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,B.M)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.S()
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=D.af7.j(A.k.E(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.zy
s=g.G()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.bl(w.save())
w.translate(j,i)
h=A.k.E(A.lo.av(0,A.k.E(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.ci7(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zO(a0)){g=j+0
f=i+-40
e=Math.sin(r.d*10)
a2=$.S().r
a3=B.a([],k)
a4=new B.aF(a2,A.ag,b5,b5,a3)
a5=f-13
a3.push(new B.aX(g,a5))
a6=g+13
a7=f+10
a3.push(new B.aq(a6,a7))
a8=g-13
a3.push(new B.aq(a8,a7))
a3.push(new B.br())
a3=new B.ap(A.R,A.N,A.U,A.V,A.S)
a3.r=A.aw.j(0.65+0.35*e).gp(0)
s=a3.G()
e=a4.gbx().a.snapshot()
w.drawPath((a4.e=new B.cj(e)).a,s)
s.delete()
e=B.a([],k)
a2=new B.aF(a2,A.ag,b5,b5,e)
e.push(new B.aX(g,a5))
e.push(new B.aq(a6,a7))
e.push(new B.aq(a8,a7))
e.push(new B.br())
e=new B.ap(A.R,A.N,A.U,A.V,A.S)
e.b=A.a9
e.c=1.6
e.r=A.c.gp(0)
s=e.G()
e=a2.gbx().a.snapshot()
w.drawPath((a2.e=new B.cj(e)).a,s)
s.delete()
a9=new B.jQ(new B.eu("!",b5,b5,A.cQ,b5,b5,b5,b5,b5,b5,new B.F(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a3,A.bZ,new B.jA(1),b5,b5,b5,b5,A.bW,b5)
a9.ej()
a9.a1(c0,new B.t(g+-3,f+-8))}if(!a0.x)g=(D.aPJ.t(0,h)||D.zx.aj(0,h)||h==="buck"||h==="regulator")&&!r.CE(a0)&&r.V1(a0,0)+r.V1(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.S()
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=A.aD.gp(0)
s=g.G()
w.drawCircle(j,i,10,s)
s.delete()
a9=new B.jQ(new B.eu("!",b5,b5,A.cQ,b5,b5,b5,b5,b5,b5,new B.F(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a3,A.bZ,new B.jA(1),b5,b5,b5,b5,A.bW,b5)
a9.ej()
a9.a1(c0,new B.t(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.mc.aj(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.S()
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.r=F.B9.gp(0)
s=j.G()
w.drawCircle(f,g,7,s)
s.delete()
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.b=A.a9
j.c=2.4
j.r=(i&&r.bfw(a0)?A.cs:A.ae).gp(0)
s=j.G()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bfw(a0)){a9=new B.jQ(new B.eu("+",b5,b5,A.cQ,b5,b5,b5,b5,b5,b5,new B.F(!0,A.cs,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a3,A.bZ,new B.jA(1),b5,b5,b5,b5,A.bW,b5)
a9.ej()
a9.a1(c0,new B.t(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,B.M)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.E(b1.r/0.8,0,1)
j=B.ar(K.Mo,F.YK,b2)
j.toString
i=b1.f
$.S()
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=j.gp(0)
h.c=2.4
h.d=A.bB
s=h.G()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.r=j.j(0.35*b2).gp(0)
i.z=A.S0
s=i.G()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b5(q,new C.bHU())){b3=A.d.cI(q,0,new C.bHV())
$.S()
b7=B.I()
b7.r=D.bcH.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aO(new B.a3(0,0,b8,b9),b7)
a9=B.fu(b5,b5,b5,b5,D.fc5,A.a3,A.bZ,b5,A.dA,A.bW)
a9.nX(b6-24)
a9.a1(c0,new B.t(12,10))}},
qC(d,e,f,g,h){var w=null,v=B.fu(w,w,w,w,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a3,A.bZ,w,A.dA,A.bW)
v.ej()
v.a1(d,f)},
cFh(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new B.aF($.S().r,A.ag,null,null,B.a([],x.v))
d.D(new B.aX(a1.a,a1.b))
w=C.htR(a1,a2,a3)
d.D(new B.c3(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ar(A.aT,D.af7,A.k.E(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ar(A.aQ,A.aT,A.k.E(r*1.2,0,1))
u.toString
o=u}else o=A.bm
u=B.I()
u.b=A.a9
u.c=a4?7:5
u.d=A.bB
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aG(d,u)
u=B.I()
u.b=A.a9
u.c=2.4
u.d=A.bB
u.r=(a4?A.c:o).gp(0)
a0.aG(d,u)
if(q){n=new B.SX(new B.tl(B.xl(d),!1,B.a([],x.f5))).gI(0)
m=40+A.k.E(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.ij()
i=t[u].b
i===$&&B.c()
if(!(j<i.a.length()/22))break
i=k.d
v.ij()
h=t[u].b
h===$&&B.c()
h=A.k.F(j*22+i*m*l,h.a.length())
v.ij()
i=t[u].b
i===$&&B.c()
i=i.a.length()
v.ij()
g=t[u].b
g===$&&B.c()
f=A.k.F(h+i,g.a.length())
v.ij()
i=t[u].H8(f).a
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=A.c.gp(0)
e=h.G()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
Pj(d,e,f,g){var w,v,u,t
$.S()
w=B.I()
v=g?A.b3:A.a4
u=g?A.b6:A.a8
t=B.ar(e,A.w,0.3)
t.toString
w.sam(new B.a9(v,u,A.x,B.a([e,f,e,t],x.O),A.HI,null).aB(0,d))
return w},
awG(d,e,f){return this.Pj(d,e,f,!0)},
c3K(d,e){return this.Pj(d,A.bm,A.it,e)},
ahQ(d,e){var w,v,u
$.S()
w=B.I()
w.sam(D.aO7.aB(0,B.bX(e,4.2)))
d.ad(e,4.2,w)
w=e.aa(0,D.egb)
v=e.aa(0,D.egk)
u=B.I()
u.r=A.e6.gp(0)
u.c=1.2
d.bo(w,v,u)},
ci7(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.S(),c0=B.I()
c0.sam(D.c0s.aB(0,D.eYL))
c0.c=3.4
c0.d=A.bB
w=B.I()
w.r=A.w.j(0.45).gp(0)
w.z=I.pk
c1.dO(D.eYz,w)
if(c3){w=B.bs(D.eYJ,A.kL)
v=B.I()
v.r=A.c.j(0.14).gp(0)
c1.az(w,v)}u=C.h9D(c2)
c1.bo(new B.t(-u,0),D.ehM,c0)
c1.bo(D.eeQ,new B.t(u,0),c0)
t=c2.x
w=c2.b
s=D.mc.aj(0,w)&&c2.ch!==1
if(s){J.bl(c1.a.save())
c1.bW(0,c2.ch)}switch(w){case"battery":b3.bDh(c1,c2)
break
case"solar":r=B.bs(D.eYC,A.i6)
c1.az(r,b3.Pj(new B.a3(r.a,r.b,r.c,r.d),A.dv,A.bO,!1))
b9=B.I()
w=B.ar(D.bgy,A.d2,0.25+0.55*c2.f)
w.toString
v=B.ar(D.bpr,A.mx,0.3+0.4*c2.f)
v.toString
b9.sam(new B.a9(A.az,A.aE,A.x,B.a([w,v],x.O),b4,b4).aB(0,D.a7P))
c1.aO(D.a7P,b9)
q=B.I()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(b9=c1.a,p=1;p<6;++p){w=-34+p*68/6
o=q.G()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}for(p=1;p<4;++p){w=-18+p*9
o=q.G()
b9.drawLine.apply(b9,[-34,w,34,w,o])
o.delete()}for(p=0;p<6;++p){w=-34+(p+0.5)*68/6
$.S()
v=new B.ap(A.R,A.N,A.U,A.V,A.S)
v.r=A.cr.j(0.5).gp(0)
v.c=0.6
o=v.G()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}b9=new B.aF($.S().r,A.ag,b4,b4,B.a([],x.v))
b9.D(new B.aX(-34,18))
b9.D(new B.aq(-6+40*c2.f,-18))
b9.D(new B.aq(4+40*c2.f,-18))
b9.D(new B.aq(-24,18))
b9.D(new B.br())
w=B.I()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aG(b9,w)
w=c2.f
b9=B.I()
b9.r=A.dQ.j(0.9).gp(0)
c1.ad(D.eeW,4+4*w,b9)
break
case"crank":n=B.bs(D.eYn,A.fB)
c1.az(n,b3.awG(new B.a3(n.a,n.b,n.c,n.d),A.bs,A.bL))
b9=B.I()
b9.sam(D.aO8.aB(0,B.bX(A.J,12)))
c1.ad(A.J,12,b9)
m=new B.t(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.I()
b9.r=A.cr.gp(0)
b9.c=5
b9.d=A.bB
c1.bo(A.J,m,b9)
b9=B.I()
b9.sam(D.eqI.aB(0,B.bX(m,7)))
c1.ad(m,7,b9)
b3.ahQ(c1,D.ehE)
b3.ahQ(c1,D.eeF)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aF(b9,A.ag,b4,b4,B.a([],w))
v.D(new B.aX(-3,24))
v.D(new B.aq(3,24))
v.D(new B.aq(1.5,0))
v.D(new B.aq(-1.5,0))
v.D(new B.br())
l=B.I()
l.r=A.bO.gp(0)
c1.aG(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.bl(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=B.a([],w)
j=new B.aF(b9,A.ag,b4,b4,l)
l.push(new B.aX(0,-2))
l.push(new B.c3(6,-14,2,-30))
l.push(new B.c3(-2,-14,0,-2))
l.push(new B.br())
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.r=A.c.gp(0)
o=l.G()
l=j.gbx().a.snapshot()
v.drawPath((j.e=new B.cj(l)).a,o)
o.delete()
v.restore()}b9=B.I()
b9.sam(D.eqp.aB(0,B.bX(A.J,4.5)))
c1.ad(A.J,4.5,b9)
break
case"switch":n=B.bs(D.eYu,A.mT)
b9=B.I()
b9.sam(D.aqu.aB(0,new B.a3(n.a,n.b,n.c,n.d)))
c1.az(n,b9)
b3.ahQ(c1,D.SR)
b3.ahQ(c1,D.aIV)
i=c2.w?D.aIV:G.aIM
b9=B.I()
b9.r=A.au.gp(0)
b9.c=6
b9.d=A.bB
c1.bo(D.SR,i,b9)
b9=B.I()
b9.r=(c2.w?A.bj:A.bO).gp(0)
b9.c=4
b9.d=A.bB
c1.bo(D.SR,i,b9)
b9=B.kx(D.SR,i,0.85)
b9.toString
w=B.I()
w.r=A.aw.gp(0)
c1.ad(b9,5,w)
break
case"fuse":h=B.bs(D.aON,D.aOc)
b9=B.I()
b9.r=A.fh.j(0.25).gp(0)
c1.az(h,b9)
b9=B.I()
b9.b=A.a9
b9.c=1.4
b9.r=A.aB.gp(0)
c1.az(h,b9)
if(!t){b9=B.I()
b9.c=1.6
b9.r=B.ar(A.bO,A.cT,c2.fx).gp(0)
c1.bo(D.aJe,D.aIT,b9)}else{b9=B.I()
b9.c=1.6
b9.r=A.bY.gp(0)
c1.bo(D.aJe,D.ei7,b9)
b9=B.I()
b9.c=1.6
b9.r=A.bY.gp(0)
c1.bo(D.efJ,D.aIT,b9)
b9=B.I()
b9.r=A.dN.gp(0)
c1.ad(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=B.bJ(new B.t(K.je[g]*22,0),20,9)
w=B.bs(f,A.hx)
o=b3.Pj(f,A.d1,A.oQ,!0).G()
b9.drawRRect(B.ek(w),o)
o.delete()}break
case"pot":b9=B.I()
b9.sam(D.eqA.aB(0,B.bX(A.J,21)))
c1.ad(A.J,21,b9)
for(b9=c1.a,k=0;k<=10;++k){e=2.356194490192345+k*3.141592653589793*1.5/10
w=Math.cos(e)
v=Math.sin(e)
l=Math.cos(e)
j=Math.sin(e)
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.r=A.aB.gp(0)
d.c=1.2
o=d.G()
b9.drawLine.apply(b9,[w*18,v*18,l*22,j*22,o])
o.delete()}b9=B.I()
b9.sam(D.eqn.aB(0,B.bX(A.J,13)))
c1.ad(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=B.I()
j.r=A.aT.gp(0)
j.c=3
j.d=A.bB
c1.bo(new B.t(b9*3,w*3),new B.t(v*12,l*12),j)
break
case"resistor":a1=B.bs(D.aON,D.aOc)
b9=B.I()
b9.sam(D.c3M.aB(0,new B.a3(a1.a,a1.b,a1.c,a1.d)))
c1.az(a1,b9)
b9=x.O
a2=B.G([47,B.a([B.b1(b5),B.b1(b6),A.w],b9),100,B.a([B.b1(b7),A.w,B.b1(b7)],b9),220,B.a([B.b1(b8),B.b1(b8),B.b1(b7)],b9),470,B.a([B.b1(b5),B.b1(b6),B.b1(b7)],b9),1000,B.a([B.b1(b7),A.w,B.b1(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(b9=c1.a,p=0;p<3;++p){w=-14+p*9
v=new B.ap(A.R,A.N,A.U,A.V,A.S)
v.r=a3[p].gp(0)
o=v.G()
b9.drawRect(B.bF(new B.a3(w,-9,w+4.5,9)),o)
o.delete()}b9=B.I()
b9.r=A.aT.gp(0)
c1.aO(D.eYX,b9)
b9=c2.r
b3.qC(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.eh7,A.ae,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.I()
v.r=A.dQ.j(0.55*w).gp(0)
v.z=A.zy
c1.ad(G.uV,34,v)}n=B.bJ(D.edE,12,18)
c1.az(B.bs(n,A.hx),b3.Pj(n,A.bm,A.e3,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.r=A.dp.gp(0)
l.c=1
o=l.G()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=B.I()
if(t)v=A.Xk
else{v=B.ar(A.e3,A.hS,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.Fm
else{l=B.ar(A.dv,A.dQ,c2.fx)
l.toString}w.sam(new B.c0(A.th,0.5,A.x,b4,0,B.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).aB(0,B.bX(A.rR,17)))
c1.ad(A.rR,17,w)
w=B.I()
w.b=A.a9
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.ad(A.rR,17,w)
b9=b9.r
w=x.v
l=new B.aF(b9,A.ag,b4,b4,B.a([],w))
l.D(new B.aX(-9,-12))
l.D(new B.c3(-12,-4,-9,0))
v=B.I()
v.b=A.a9
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aG(l,v)
v=B.I()
v.r=A.cX.gp(0)
v.c=1.4
c1.bo(D.ei1,D.ei3,v)
v=B.I()
v.r=A.cX.gp(0)
v.c=1.4
c1.bo(D.efB,D.efE,v)
w=B.a([],w)
a4=new B.aF(b9,A.ag,b4,b4,w)
a4.D(new B.aX(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new B.aq(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.bv(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.S()
b9=B.I()
b9.b=A.a9
b9.c=1.8
if(t)w=A.aW
else{w=B.ar(A.dv,D.bhy,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aG(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.I()
v.r=A.aw.j(0.6*w).gp(0)
v.z=D.dxO
c1.ad(A.rR,30,v)}w=B.I()
w.r=A.e3.gp(0)
w.c=2.4
c1.bo(D.ei9,D.ei8,w)
w=B.I()
w.r=A.e3.gp(0)
w.c=2.4
c1.bo(D.efL,D.efK,w)
b9=b9.r
w=x.v
a6=new B.aF(b9,A.ag,b4,b4,B.a([],w))
a6.D(new B.aX(-12,8))
a6.D(new B.aq(-12,-6))
a6.D(new B.c3(0,-26,12,-6))
a6.D(new B.aq(12,8))
a6.D(new B.br())
v=B.I()
if(t)l=A.ja
else{l=B.ar(A.ei,D.bjc,c2.fx)
l.toString}if(t)j=A.kB
else{j=B.ar(A.ka,A.aw,c2.fx)
j.toString}v.sam(new B.a9(A.az,A.aE,A.x,B.a([l,j],x.O),b4,b4).aB(0,D.eXP))
c1.aG(a6,v)
v=B.I()
v.b=A.a9
v.c=1.2
v.r=A.jJ.gp(0)
c1.aG(a6,v)
v=B.I()
v.r=A.ej.gp(0)
c1.aO(D.eXV,v)
w=new B.aF(b9,A.ag,b4,b4,B.a([],w))
w.D(new B.aX(-7,-4))
w.D(new B.c3(-6,-12,0,-15))
b9=B.I()
b9.b=A.a9
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aG(w,b9)
break
case"motor":a7=new B.a3(-28,-14,20,14)
c1.az(B.bs(a7,A.hy),b3.awG(a7,A.al,A.aL))
b9=B.I()
b9.r=A.cm.gp(0)
c1.aO(D.eXo,b9)
b9=B.I()
b9.r=A.cr.gp(0)
c1.aO(D.eXq,b9)
b9=c1.a
J.bl(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.bl(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=B.bJ(G.aIH,15,7)
v=new B.ap(A.R,A.N,A.U,A.V,A.S)
v.r=A.cT.j(0.9).gp(0)
o=v.G()
b9.drawOval(B.bF(w),o)
o.delete()
b9.restore()}w=B.I()
w.r=A.au.gp(0)
c1.ad(A.J,3,w)
b9.restore()
b3.qC(c1,"M",D.ehD,A.au,14)
break
case"buzzer":a8=B.bJ(A.J,42,42)
b9=B.I()
b9.sam(D.eqE.aB(0,a8))
c1.dO(a8,b9)
b9=B.I()
b9.r=A.w.gp(0)
c1.ad(A.J,6,b9)
b9=B.I()
b9.b=A.a9
b9.c=1.4
b9.r=A.aZ.gp(0)
c1.ad(A.J,6,b9)
b3.qC(c1,"+",D.ehw,A.ae,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.F(w.d*14,5):0
l=B.bX(A.J,24+k*5+l)
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.b=A.a9
j.c=2
j.r=A.c4.j(v*(1-k*0.22)).gp(0)
o=j.G()
b9.drawArc.apply(b9,[B.bF(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=B.bs(D.eYq,A.hy)
w=B.I()
w.sam(D.c1q.aB(0,new B.a3(n.a,n.b,n.c,n.d)))
c1.az(n,w)
w=B.a([],x.v)
a9=new B.aF(b9.r,A.ag,b4,b4,w)
a9.D(new B.aX(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new B.c3(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.bv(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.S()
w=B.I()
w.b=A.a9
w.c=10
w.r=D.bie.j(0.5*b9).gp(0)
w.z=A.lJ
c1.aG(a9,w)}$.S()
b9=B.I()
b9.b=A.a9
b9.c=3.2
b9.d=A.bB
b9.r=B.ar(A.lY,P.Mh,c2.fx).gp(0)
c1.aG(a9,b9)
break
case"capacitor":a7=new B.a3(-16,-22,16,18)
b9=B.bs(a7,A.hy)
w=B.I()
w.sam(D.c0k.aB(0,a7))
c1.az(b9,w)
w=B.I()
w.r=A.bO.gp(0)
c1.aO(D.eY3,w)
for(p=0;p<4;++p){b0=new B.jQ(new B.eu("\u2212",b4,b4,A.cQ,b4,b4,b4,b4,b4,b4,new B.F(!0,A.au,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a3,A.bZ,new B.jA(1),b4,b4,b4,b4,A.bW,b4)
b0.ej()
b0.a1(c1,new B.t(-14,-18+p*9))}b1=new B.a3(-16,-24,16,-17)
c1.az(B.bs(b1,A.hx),b3.c3K(b1,!1))
b9=38*c2.fx
w=18-b9
$.S()
v=B.I()
v.r=A.bj.j(0.5).gp(0)
c1.aO(new B.a3(-3,w,11,w+b9),v)
b3.qC(c1,"1F",G.uV,A.c,11)
break
case"radio":a1=B.bs(D.a7P,A.fB)
b9=B.I()
b9.sam(D.c41.aB(0,new B.a3(a1.a,a1.b,a1.c,a1.d)))
c1.az(a1,b9)
b9=B.I()
b9.b=A.a9
b9.c=1.4
b9.r=A.oQ.j(0.6).gp(0)
c1.az(a1,b9)
b9=B.bs(D.eYr,A.i6)
w=B.I()
w.r=A.dL.gp(0)
c1.az(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new B.ap(A.R,A.N,A.U,A.V,A.S)
v.r=A.lY.gp(0)
v.c=1.4
o=v.G()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=B.I()
w.r=(c2.fx>0?A.h1:A.nV).gp(0)
c1.aO(D.eXv,w)
if(c2.fx>0){w=8+A.k.F(b3.b.d*7,18)
v=B.I()
v.r=A.by.gp(0)
v.c=1.6
c1.bo(new B.t(w,-13),new B.t(w,-3),v)}w=B.I()
w.sam(D.aO8.aB(0,B.bX(D.a6P,6)))
c1.ad(D.a6P,6,w)
w=B.I()
w.r=A.oQ.gp(0)
c1.ad(D.eeP,4,w)
w=B.I()
w.r=A.e3.gp(0)
w.c=1.8
c1.bo(D.eeK,D.aJ_,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=B.bX(D.aJ_,4+k*5+A.k.F(w.d*8,5))
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.b=A.a9
l.c=1.4
l.r=A.o0.j(0.7).gp(0)
o=l.G()
b9.drawArc.apply(b9,[B.bF(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=B.bs(D.eYB,A.hy)
v=B.I()
v.r=K.nb.gp(0)
c1.az(w,v)
b2=B.bs(D.eYy,A.hx)
if(c2.fx>0&&!c2.x){b9=c1.a
J.bl(b9.save())
b9.clipRRect(B.ek(b2),$.nx(),!0)
b9.translate(-33,-21)
E.h5J(c1,D.f3N,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.I()
b9.r=A.bj.gp(0)
c1.ad(D.ef1,1.6,b9)}else{w=B.I()
w.r=D.vJ.gp(0)
c1.az(b2,w)
b9=new B.aF(b9.r,A.ag,b4,b4,B.a([],x.v))
b9.D(new B.aX(-33,-21))
b9.D(new B.aq(-10,-21))
b9.D(new B.aq(-33,0))
b9.D(new B.br())
w=B.I()
w.r=A.c.j(0.05).gp(0)
c1.aG(b9,w)}b9=B.I()
b9.r=A.bs.gp(0)
c1.aO(D.eXU,b9)
break}C.idI(c1,c2,b3.b.d,b3.gc8h())
if(t)b3.qC(c1,"\u2716",D.eic,A.aw,14)
if(s)c1.a.restore()},
bDh(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new B.a3(-28,-13,28,13)
d.az(B.bs(w,A.mT),m.awG(w,A.dv,A.j8))
v=new B.a3(-22,-13,22,13)
$.S()
u=B.I()
u.sam(D.aqn.aB(0,v))
d.aO(v,u)
u=B.I()
u.r=A.dW.gp(0)
d.aO(D.eYd,u)
t=new B.a3(28,-5,34,5)
d.az(B.bs(t,A.hj),m.Pj(t,A.dv,A.it,!0))
m.qC(d,"+",D.eeq,A.aT,11)
m.qC(d,"\u2212",D.ehF,A.ae,11)
m.qC(d,B.w(l===A.k.jf(l)?A.k.V(l):l)+"V",D.ehl,A.aT,13)
if(l===1.5){u=B.I()
u.r=A.bz.gp(0)
d.aO(D.eYc,u)
u=e.as
s=B.I()
s.r=B.ar(A.aw,A.bj,u).gp(0)
d.aO(new B.a3(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qC(d,"FLAT",D.eh6,A.cs,9)}if(l>2){u=B.I()
u.r=A.aZ.gp(0)
u.c=1
d.bo(D.edN,D.aIA,u)
m.qC(d,l>3?"3 cells":"2 cells",D.ehk,A.aB,8)}}else if(l<=9){r=new B.a3(-22,-17,22,17)
u=B.bs(r,A.mT)
$.S()
s=B.I()
s.sam(D.c3z.aB(0,r))
d.az(u,s)
s=B.I()
s.r=A.cV.gp(0)
d.aO(D.eYe,s)
for(u=d.a,q=0;q<2;++q){p=F.azO[q]
s=p<0?5:3.6
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.sam(D.aO7.aB(0,B.bX(new B.t(p,-18),5)))
n=o.G()
u.drawCircle(p,-18,s,n)
n.delete()}m.qC(d,"9V",D.ehd,A.c,16)}else{r=new B.a3(-34,-16,34,16)
u=B.bs(r,A.i6)
$.S()
s=B.I()
s.sam(D.aqn.aB(0,r))
d.az(u,s)
s=B.I()
s.r=A.bG.gp(0)
d.aO(D.eYA,s)
for(u=d.a,q=0;q<2;++q){s=B.bs(B.bJ(new B.t(F.a4B[q],-20),8,10),A.hj)
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=A.cr.gp(0)
n=o.G()
u.drawRRect(B.ek(s),n)
n.delete()}m.qC(d,"+",D.eez,A.aw,10)
m.qC(d,"12V",D.ehh,A.au,15)}},
aw(d){return!0}}
C.mJ.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=B.U(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.M)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.tF(o,r,q,p)
n.aqF(o,r,q,p)
k.push(n)
J.iw(s[4],new C.coS(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.M)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.akZ(m,u[1],l,u[3])}}}
C.aiQ.prototype={
U(){var w=x.N
return new C.aiR(A.J,A.ax,B.U(w,x.gl),B.aY(w),$,A.bD,0,B.a([],x.X),null,null)}}
C.aiR.prototype={
aet(d){var w=this,v=w.as
if(v!=null)v.a4(0)
w.m(new C.bHy(w,d))
w.as=B.cL(A.lz,new C.bHz(w))},
q(){var w=this.as
if(w!=null)w.a4(0)
w=this.ch
if(w!=null)w.a4(0)
this.bt8()},
a0d(d,e){return this.cg2(d,e)},
b0S(d){return this.a0d(d,!1)},
cg2(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a0d=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.rj:A.y1
p=d.b
w=3
return B.b(E.h61(s,r,p,d.ax<3.2,q,$.qo().h(0,p).b),$async$a0d)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a0d,v)},
csJ(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.at.c3(0,d.a,new C.bHA()),t=J.cD(u)
t.M(u,v)
t.bu(u,new C.bHB(v))
if(t.gL(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a4(0)
w.a1x(d)
return}if(t.gL(u)===3){t=w.ch
if(t!=null)t.a4(0)
w.ch=B.cL(A.iS,new C.bHC(w,u,d))}},
a_U(d){return this.cep(d)},
cep(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a_U=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.ieT(s,d.b,A.k.V(A.k.F(t.a.c.d*0.12,1)*100)),$async$a_U)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$a_U,v)},
a1x(d){return this.cqi(d)},
cqi(d){var w=0,v=B.j(x.H),u=this,t
var $async$a1x=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(F.lw,null,new C.bHw(u,d),t,!0,!0,!1,A.k_,!1,!1,x.H),$async$a1x)
case 2:return B.h(null,v)}})
return B.i($async$a1x,v)},
a_(){this.a2()
this.bfG()
this.p9()},
bfG(){this.a.c.e=new C.bHR(this)},
q6(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vi(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
r=D.mc.h(0,s.b)
if((r==null?null:r.b)!==D.zY)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.M(0,s.a)
q.a0d(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)E.dX(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)E.dX(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cZ.ah()<0.5
else u=!1
if(u)E.dX(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){E.dX(900+A.cZ.au(800),"",90,0,0.1,o)
if(A.cZ.ah()<0.35)E.dX(300+A.cZ.au(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cZ.ah()<0.4
else u=!1
if(u)E.dX(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)E.dX(330+A.o.F(110*A.k.bj(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)E.dX((A.k.bj(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)E.dX(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)E.dX(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cZ.ah()<0.5
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
q.m(new C.bHS())},
b7S(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.M)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.mc.aj(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.z(p,n)
r=i}}}return s},
b1x(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.T(w).k("dx<1>"),w=new B.dx(w,v),w=new B.bS(w,w.gL(0),v.k("bS<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.mc.aj(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cFi(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.M)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.mc.aj(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.mc.aj(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.htR(new B.t(k,n),new B.t(i,l),p)
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
aer(){this.a.toString
this.m(new C.bH1())},
bpS(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.d5X[v]
if(!A.d.b5(p.a.c.a,new C.bHT(u,w))){o=new B.t(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?M.IS:o
s=s?M.IS:o
q=t.akg(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dX(1200,"",50,0,0.3,"tri")
p.aer()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.Re[v].a)
u=w.length
t=u>8
s=t?A.d.ds(w,0,A.o.ao(u+1,2)):w
r=t?A.d.fJ(w,A.o.ao(w.length+1,2)):A.Z
q=n.a.d
if(q!=null){w=B.a6(q).k("cv<1>")
w=B.C(new B.cv(q,w),w.k("K.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.M)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b1n(s,!0))
n.a.toString
if(t)w.push(n.b1n(r,!0))
w.push(B.E(B.cB(new C.bHQ(n,q,m)),1))
return B.x(w,A.m,null,A.e,A.j,0,A.p)},
b1n(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.M)(d),++v){u=d[v]
t=$.qo()
s=t.h(0,u).d.j(0.14)
r=new B.aQ(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aB(p,B.p(p,B.x(B.a([new B.y(t.h(0,u).c,p,A.Ac,p,p,p,p,p,p,p,p,p),new B.y(t.h(0,u).b,p,A.nC,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.b8,A.j,0,A.p),A.f,p,p,new B.o(s,p,new B.bK(q,q,q,q),new B.bk(r,r,r,r),p,p,A.n),p,p,p,F.tW,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bH2(this,u),p,p,p,p,p,p,!1,A.a5))}return B.p(p,B.ct(m,p,A.h4,p,p,A.aN,!1),A.f,p,p,new B.o(F.B7,p,new B.bK(A.a0,A.a0,new B.ay(o,1,A.r,-1),A.a0),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aZS(d){var w=null,v=B.m(18)
return B.p(w,d,A.f,w,w,new B.o(F.adL,w,B.J(A.bz,A.r,1),v,w,w,A.n),w,w,w,w,F.ajs,w,w,w)},
ci8(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qo().h(0,o),m=d.dy,l=d.fr,k=new C.bHl(q,n),j=B.d(n.c,p,p,p,p,p,p,A.JU,p,p,p),i=n.b,h=n.d,g=x.p
i=B.B(B.a([j,A.ac,B.E(B.d(i,p,p,p,p,p,p,B.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aJ(p,p,p,p,D.bSv,p,p,p,new C.bH8(q,d),p,p,p,p,"Remove part",A.cd),B.aJ(p,p,p,p,A.Hc,p,p,p,new C.bH9(q),p,p,p,p,p,A.cd)],g),A.m,p,A.e,A.j,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,F.E2,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.fl4,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.ac(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.ac(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.ac(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.av,w,A.am,B.d(m,p,p,p,p,p,p,B.l(p,p,d.x?A.cs:A.aT,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bdC(d)
if(v!=null){l=(d.x?A.aw:A.aD).j(0.14)
j=B.m(10)
i=B.J((d.x?A.aw:A.aD).j(0.5),A.r,1)
m.push(new B.D(A.hX,B.p(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.frH,p,p,p),A.f,p,p,new B.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cn,p,p,p),p))}if(C.h3N(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new C.eX("CH "+t,d.at===u,new C.bHa(q,d,u),p,h,p))}l=B.bW(A.bE,l,A.bq,p,4,6)
l=B.a([A.am,l,A.av,B.d(q.a.c.CE(d)?"Showing: "+F.QQ[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hl,p,p,p)],g)
if(q.a.c.CE(d))l.push(new C.j7(A.GK,"Open big screen",new C.bHd(q,d),h,p))
A.d.v(m,l)}if(D.mc.aj(0,o)&&!C.h3N(o)){l=B.a([A.am,B.d(q.a.c.CE(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hl,p,p,p)],g)
if(q.a.c.CE(d))l.push(new C.j7(A.Oy,"Open the "+$.qo().h(0,o).b,new C.bHe(q,d),h,p))
A.d.v(m,l)}if(D.mc.aj(0,o))A.d.v(m,B.a([A.am,new C.j7(A.Cc,"Make it bigger (or tap it 4 times)",new C.bHf(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.ac(d.db,1)
if(q.a.c.CE(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.am,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.ac(i,1)+" V",p,p,p,p,p,p,D.flV,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dnK[s]
j=r===A.k.jf(r)?A.k.V(r):r
l.push(new C.eX(B.w(j)+" V out",d.e===r,new C.bHg(q,d,r),p,h,p))}i.push(new B.D(A.l0,B.bW(A.bE,l,A.bq,p,0,6),p))}if(o==="regulator")i.push(D.fKj)
A.d.v(m,i)}if(q.a.c.LY(d)&&!d.x){l=A.k.ac(d.cx,2)
j=A.k.ac(q.a.c.zO(d),2)
i=q.a.c
w=i.anG(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.l(p,p,i.anG(d)?A.cs:A.ep,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.m(4)
w=A.k.E(d.cx/q.a.c.zO(d),0,1)
i=q.a.c.anG(d)?A.aw:A.bj
m.push(new B.D(A.hX,B.x(B.a([l,A.cL,B.by(j,B.lk(A.bz,p,p,5,p,w,new B.m6(i,x.B)),A.aq)],g),A.E,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.hX,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.ffH,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dcV[s]
j=r===1.5?"1.5 V (rechargeable)":B.w(r)+" V"
l.push(new C.eX(j,d.e===r,new C.bHh(q,d,r),p,h,p))}m.push(B.bW(A.bE,l,A.bq,p,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.d3c[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new C.eX(j,d.r===r,new C.bHi(q,d,r),p,h,p))}m.push(B.bW(A.bE,l,A.bq,p,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bHj(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bHk(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bHb(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bHc(d)))
if(o==="crank")m.push(D.fFG)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hl,p,p,p))
return q.aZS(new B.cT(D.b2k,B.cd(B.x(m,A.E,p,A.e,A.Q,0,A.p),A.t,p,A.y,p,p,p,p,A.ah),p))}}
C.bbn.prototype={}
C.Vm.prototype={
U(){return new C.aDL(C.h9C(),new B.cA(null,x.gJ),B.aY(x.S))}}
C.aDL.prototype={
a_(){this.a2()
$.aW.bZ$.push(this)
this.aes()},
aes(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aes=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fyZ(),$async$aes)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.ie5(t.d,r)
if(s!=null){t.m(new C.dVh(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$aes,v)},
F6(){var w,v=this
if(!v.as)return
w=C.i4w(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bEe(w)},
jb(d){if(d!==A.fG)this.F6()},
q(){$.aW.hO(this)
this.F6()
this.a3()},
c8j(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.T(v).k("Z<1>")
t=new B.Z(v,new C.dVq(q),u).gL(0)
s=new B.Z(v,new C.dVr(),u).gL(0)
r=new B.Z(v,w.gcUw(),u).gL(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.dVs(q,t,s,r))}if(A.o.F(q.w,45)===0)q.F6()
if(A.o.F(q.w,10)===0){w=q.f
$.ai3()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.ai3()[q.f].c.$1(q.d)){w.M(0,q.f)
C.J8("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.dVt())
q.F6()
w=q.c
w.toString
w=B.XC(w)
if(w!=null)w.T(B.b3(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.ai3()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mz,p,p,p,p,p,p,p,p,p,p))}},
ah6(){var w=0,v=B.j(x.H),u=this,t
var $async$ah6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.dVg(u),t,null,!0,!0,x.H),$async$ah6)
case 2:return B.h(null,v)}})
return B.i($async$ah6,v)},
aZR(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.m(12),t=B.J(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.p(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.aB(w,B.hc(new B.a7(40,38,new B.an(A.a_,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a5)},
aZQ(d,e,f,g){return this.aZR(d,e,f,g,null)},
arl(d,e,f,g){var w=null,v=f.j(0.1),u=B.m(10),t=B.J(f.j(0.4),A.r,1)
return B.E(B.aB(w,B.p(w,B.B(B.a([B.X(d,f,w,w,w,15),A.el,new B.ds(1,A.co,B.d(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b8,A.j,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a5),1)},
afr(){var w=0,v=B.j(x.H),u=this,t
var $async$afr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a4(t,!1).cg(B.e_(new C.dVc(u),!1,null,x.H)),$async$afr)
case 2:t=u.e.gbl()
if(t!=null)t.bfG()
if(u.c!=null)u.m(new C.dVd())
u.F6()
return B.h(null,v)}})
return B.i($async$afr,v)},
bGn(){var w,v,u,t,s=null,r=this.f
$.ai3()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.be:A.aw
u=B.m(9)
t=B.J(F.B7,A.r,1.5)
return B.p(s,B.at(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.wU,s,s,s),s,s,s),A.f,s,D.b2r,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eW,s,s,s)},
aic(){var w=0,v=B.j(x.H),u=this,t
var $async$aic=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(F.lw,null,new C.dVp(u),t,!0,!0,!0,A.k_,!1,!1,x.H),$async$aic)
case 2:return B.h(null,v)}})
return B.i($async$aic,v)},
c8k(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aB(r,B.p(r,D.bTK,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dVv(d),r,r,r,r,r,r,!1,A.a5),o=B.m(11)
o=B.p(r,D.b8a,A.f,r,r,new B.o(A.bo,r,B.J(A.aQ.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.x(B.a([B.B(B.a([p,A.ac,o,A.ac,B.E(B.x(B.a([D.fIj,B.d(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.eU:A.he,r,r,r,r,r,r,r,r,11.5,r,r,A.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.j,0,A.p),1),new C.axM(s.gce6(),r),A.t0,s.aZQ(A.yG,"Construction Lab: real 3D wiring, plumbing and a house",A.cT,new C.dVw(s,d)),s.aZR(A.lC,"Challenges",A.aT,s.gcvi(),s.bGn()),s.aZQ(A.Os,"How to play",A.aQ,new C.dVx(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.am,B.B(B.a([s.arl(A.oc,"Circuits",A.bv,s.gco9()),A.bn,s.arl(A.p5,"Repair",A.aT,new C.dVy(s)),A.bn,s.arl(D.Oh,"Clear",A.cs,new C.dVz(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new B.o(F.B7,r,new B.bK(A.a0,A.a0,new B.ay(q,1,A.r,-1),A.a0),r,r,r,A.n),r,r,r,r,D.bCG,r,r,r)},
B(d){var w=this,v=null
$.asd="tech"
return B.c6(v,A.c0,B.bn(!0,B.x(B.a([w.c8k(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.h8r(w.d,w.e,w.gc8i(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
C.axM.prototype={
U(){return new C.b9A(null,null)}}
C.b9A.prototype={
gaxy(){var w,v=this,u=v.d
if(u===$){w=B.bm(null,A.Y,null,1,null,v)
w.cM(0)
v.d!==$&&B.bG()
v.d=w
u=w}return u},
q(){this.gaxy().q()
this.buv()},
B(d){var w=null,v=this.a.c
return B.aB(w,B.hc(new B.a7(42,42,B.c9(this.gaxy(),new C.cFX(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a5)}}
C.b9z.prototype={
a1(d,e){var w,v,u,t=null,s=e.eg(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.S()
w=B.I()
w.r=A.b5.j(0.25+0.15*o).gp(0)
w.z=I.pk
d.ad(s,r+2+o*2,w)
w=B.I()
w.sam(D.eqz.aB(0,B.bX(s,r)))
d.ad(s,r,w)
v=B.I()
v.b=A.a9
v.c=2.2
v.sam(new B.fX(A.A,0,6.283185307179586,A.x,D.cVh,t,new B.mx(p)).aB(0,B.bX(s,r)))
d.ad(s,r,v)
p=new C.cFW(d)
p.$3(s.aa(0,A.rR),8+o*1.5,1)
q*=4
p.$3(s.aa(0,D.efX),3.2,0.5+0.5*Math.sin(q))
p.$3(s.aa(0,D.eii),2.6,0.5+0.5*Math.cos(q))
u=B.fu(t,t,t,t,D.fcb,A.a3,A.bZ,t,A.dA,A.bW)
u.ej()
u.a1(d,s.aa(0,new B.t(-u.b.c/2,5)))},
aw(d){return d.b!==this.b}}
C.ay4.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.ay5.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bt7()}}
C.aK9.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.bxE.prototype={}
C.fO.prototype={}
C.JC.prototype={
a5(){return"ScreenStyle."+this.b}}
C.mg.prototype={}
C.V5.prototype={
U(){return new C.bk0(null,null)}}
C.bk0.prototype={
ga9H(){var w,v=this,u=v.d
if(u===$){w=B.bm(null,A.o7,null,1,null,v)
w.cp(0)
v.d!==$&&B.bG()
v.d=w
u=w}return u},
q(){this.ga9H().q()
this.bwj()},
gS8(){var w=this.ga9H().y
w=w==null?null:A.o.ao(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.mc.h(0,this.a.c)
if(v==null)v=D.aP4
return B.c6(w,T.Yr,B.bn(!0,new B.an(A.a_,w,A.aa,A.t,B.a([B.at(v.b===D.zZ?this.bIv(v):this.ckV(v),w,w,w),B.ao(w,B.aJ(w,w,w,w,A.mM,w,w,w,new C.dRG(d),w,w,w,B.nH(w,A.aW,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ao(6,B.at(B.d(v.a,w,w,w,w,w,w,D.fdP,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c8l(d){var w
A:{if(D.Jf===d){w=0.46153846153846156
break A}if(D.v4===d){w=0.45
break A}if(D.wJ===d){w=0.9259259259259258
break A}if(D.Tx===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
ckV(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.Jf
A:{if(D.Jf===p){w=44
break A}if(D.v4===p){w=30
break A}if(D.wJ===p){w=22
break A}if(D.Tx===p){w=26
break A}w=14
break A}v=B.c9(this.ga9H(),new C.dRF(this,w,d,o),q)
if(p===D.a7Y)v=new B.Bi(D.bDi,v,q)
p=this.c8l(p)
u=o?4:5
t=d.c
s=B.ar(t,A.c,o?0.25:0.08)
s.toString
r=B.ar(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.m(w)
s=B.a([new B.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new B.fF(p,B.p(q,B.p(q,v,A.f,q,q,new B.o(A.w,q,q,B.m(w-3),q,q,A.n),q,q,q,q,A2.Gg,q,q,q),A.f,q,q,new B.o(q,q,q,t,s,new B.a9(A.az,A.aE,A.x,r,q,q),A.n),q,q,q,D.bwT,new B.Q(u,u,u,u),q,q,q),q)},
b70(d){var w,v,u,t=null,s=new B.V(Date.now(),0,!1),r=A.o.E(this.a.d+A.k.bj(this.gS8()*0.4),0,100),q=d.b===D.Jf,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.aZ(A.o.u(B.dm(s)),2,"0")+":"+A.a.aZ(A.o.u(B.h3(s)),2,"0"),t,t,t,t,t,t,A.t8,t,t,t),A.b2],x.p)
for(w=0;w<4;++w){v=new B.aQ(1,1)
n.push(B.p(t,t,A.f,t,t,new B.o(A.c,t,t,new B.bk(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bD0,t,t,t,3))}n.push(A.dc)
n.push(D.fB3)
n.push(A.bn)
v=B.J(A.ae,A.r,1)
u=B.m(4)
n.push(B.p(t,new B.bM(A.a4,t,t,B.Bv(A.A,B.p(t,t,A.f,t,t,new B.o(A.bj,t,t,B.m(2),t,t,A.n),t,t,t,A2.Gg,t,t,t,t),t,r/100),t),A.f,t,t,new B.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qE)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fs2,t,t,t))
return new B.D(new B.Q(p,12,o,2),B.B(n,A.m,t,A.e,A.j,0,t,t),t)},
avw(d,e,f){var w,v=null,u=d.d,t=B.ar(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.m(e*0.26)
w=x.p
t=B.a([B.p(v,B.at(B.d(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.diN,new B.a9(A.az,A.aE,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,B.a([A.av,B.d(d.a,v,1,A.a2,v,v,v,D.fiy,v,v,v)],w))
return B.aB(v,B.x(t,A.m,v,A.e,A.Q,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dRB(this,d),v,v,v,v,v,v,!1,A.a5)},
bZP(d,e){return this.avw(d,e,!0)},
bZy(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.Tx||n===D.wJ,l=d.d,k=B.ar(l,A.w,0.55)
k.toString
l=B.ar(l,A.ky,0.5)
l.toString
l=B.a([k,A.du,l],x.O)
k=p.b70(d)
w=m?190:138
v=B.m(24)
u=B.J(A.aZ,A.r,1)
w=B.aB(o,B.p(o,B.by(B.m(23),B.b4(o,o,o,new C.aeK(0,p.gS8(),o),A.fC),A.aq),A.f,o,o,new B.o(o,o,u,v,o,o,A.n),o,w,o,A.hI,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dRz(p),o,o,o,o,o,o,!1,A.a5)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.kj[s]
t.push(new B.ck(A.A,o,o,p.bZP(r,m?58:54),o))}k=B.a([k,A.am,w,A.ad,B.E(B.kX(0.92,t,v,8,12,A5.vV,o,!1),1)],u)
if(n!==D.a7Y){n=A.c.j(0.16)
w=B.m(28)
u=B.a([],u)
for(v=B.d1(F.kj,0,B.dB(4,"count",x.S),x.gD),t=v.$ti,v=new B.bS(v,v.gL(0),t.k("bS<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.avw(q==null?t.a(q):q,50,!1))}k.push(B.p(o,B.B(u,A.m,o,A.rH,A.j,0,o,o),A.f,o,o,new B.o(n,o,o,w,o,o,A.n),o,o,o,D.bxJ,G.akV,o,o,o))}return B.p(o,B.x(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new B.o(o,o,o,o,o,new B.a9(A.az,A.aE,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bBV(d,e){var w=null
return B.p(w,B.x(B.a([this.b70(d),B.E(B.b4(w,w,w,new C.aeK(e,this.gS8(),w),A.fC),1),B.aB(w,B.p(w,B.at(B.d(F.kj[e].a,w,w,w,w,w,w,A.JK,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dRu(this),w,w,w,w,w,w,!1,A.a5)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bIv(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.ar(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.m(r?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new B.fF(1.5384615384615383,B.p(t,B.c9(this.ga9H(),new C.dRx(this,r,d),t),A.f,t,t,new B.o(t,t,t,v,u,new B.a9(A.az,A.aE,A.x,w,t,t),A.n),t,t,t,D.bCB,new B.Q(8,8,8,s),t,t,t),t)}}
C.bvI.prototype={
a1(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.S()
w=B.I()
v=this.c
u=B.ar(v,A.w,0.6)
u.toString
t=B.ar(v,A.ky,0.4)
t.toString
w.sam(new B.a9(A.az,A.aE,A.x,B.a([u,A.du,t],x.O),null,null).aB(0,new B.a3(0,0,n,m)))
d.aO(new B.a3(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=v.j(0.1).gp(0)
r.z=D.dxS
q=r.G()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
aw(d){return!0}}
C.aeK.prototype={
a1(d,e){return E.RO(d,e,this.b,this.c)},
aw(d){return!0}}
C.aLU.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.buw.prototype={}
C.a8t.prototype={
B(d){var w=null
return B.c6(B.eH(w,w,w,!0,!0,D.ag9,w,1,!0,w,0,!1,w,!1,w,w,B.aJ(w,w,w,w,D.apn,w,w,w,new C.cjd(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fR5,w,w,w,1,w,!0),D.ag9,B.ct(B.a([D.ejI,B.cB(new C.cje())],x.p),w,D.byL,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.WE.prototype={
U(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aFc(w,new B.as(A.at,$.ax()),$,A.bD,0,B.a([],x.X),null,null)}}
C.aFc.prototype={
a_(){this.a2()
this.p9()},
b4Y(d){var w=this.d.length
return A.o.F(A.k.bj(A.k.F(A.k.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
q6(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b4Y(v.f)
if(w!==v.x){v.x=w
C.q0("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eLK(v))
C.J8("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
c9F(){if(this.d.length<2)return
this.m(new C.eLG(this))},
b_k(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eLF(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc9E(),p=s.d,o=B.E(B.aB(r,B.b4(r,r,r,new C.bvU(p,s.f,r),A.fC),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a5),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a7(r,40,B.at(B.d(n,r,r,r,r,r,r,D.fqa,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.ayZ[A.o.F(v,8)].j(0.9)
t=new B.aQ(20,20)
o.push(B.aB(r,B.p(r,new B.y(p[v],r,D.fpq,r,r,r,r,r,r,r,r,r),A.f,r,r,new B.o(u,r,r,new B.bk(t,t,t,t),r,r,A.n),r,r,r,A.fx,A.hg,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eLI(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a5))}p=A.c.j(0.07)
return C.oz(A.aT,A.fz,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new C.hj(o,r,r),B.B(B.a([B.E(B.aN(r,A.Z,!1,r,!0,A.t,r,B.aO(),s.e,r,r,r,r,r,2,B.bu(r,new B.b5(4,B.m(14),A.a0),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kQ,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eLJ(s),r,!1,r,r,!1,r,!0,r,A.ab,r,r,r,r,r,r,r,r,r,r,r,A.df,!0,A.a3,r,A.ao,r,r,r,r),1),A.ac,new C.j7(A.hK,"Add",s.gc9C(s),A.c,r),A.bn,new C.j7(A.p6,"Spin",q,A.bj,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.Q,0,A.p))}}
C.bvU.prototype={
a1(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new B.t(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.S()
w=B.I()
w.r=D.bek.gp(0)
a1.ad(d,f,w)
w=B.I()
w.b=A.a9
w.c=3
w.r=A.aT.gp(0)
a1.ad(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=B.bX(d,a0)
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
n.r=D.ayZ[A.o.F(q,8)].gp(0)
m=n.G()
n=p*57.29577951308232
f.drawArc.apply(f,[B.bF(o),n,s,!0,m])
m.delete()
o=B.bX(d,a0)
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.b=A.a9
l.c=2
l.r=A.c.j(0.6).gp(0)
m=l.G()
f.drawArc.apply(f,[B.bF(o),n,s,!0,m])
m.delete()
J.bl(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.aq(o,0,11)+"\u2026"
k=new B.jQ(new B.eu(o,i,i,A.cQ,i,i,i,i,i,i,D.fcZ),A.a3,A.bZ,new B.jA(1),i,i,i,i,A.bW,i)
k.ej()
o=k.b
n=o.c
o=o.a.c
k.a1(a1,new B.t(a0-n-16,-o.gbb(o)/2))
f.restore()}f=B.I()
f.r=D.afM.gp(0)
a1.ad(d,20,f)
f=B.I()
f.b=A.a9
f.c=3
f.r=A.aT.gp(0)
a1.ad(d,20,f)
j=new B.aF(h.r,A.ag,i,i,B.a([],x.v))
e-=a0
j.D(new B.aX(g,e+26))
e-=10
j.D(new B.aq(g-14,e))
j.D(new B.aq(g+14,e))
j.D(new B.br())
e=B.I()
e.r=A.c.gp(0)
a1.aG(j,e)
e=B.I()
e.b=A.a9
e.c=2
e.r=A.aW.gp(0)
a1.aG(j,e)},
aw(d){return!0}}
C.Vu.prototype={
U(){return new C.bk9($,A.bD,0,B.a([],x.X),null,null)}}
C.bk9.prototype={
a_(){this.a2()
this.p9()},
q6(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.J8("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.a5x(900,new C.dXZ())}w.m(new C.dY_())},
b_m(d){return this.m(new C.dXU(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aZ(A.o.u(A.k.ao(m,60)),2,"0")
v=A.a.aZ(A.o.u(A.o.F(A.k.dg(m),60)),2,"0")
m=B.b4(n,n,n,new C.bqH(l,A.cs,n),A.aQn)
u=B.d(w+":"+v,n,n,n,n,n,n,D.fhu,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a7(280,280,new B.an(A.A,n,A.aa,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.fgw,n,n,n),A.av,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.va,n,n,n)],s),A.m,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dfL[r]
u.push(new C.eX(""+q+" min",o.d===q,new C.dXW(o,q),n,A.cs,n))}m=o.f
p=m?A1.yO:A.ij
m=m?"Pause":"Start"
return C.oz(A.cs,A.fz,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new C.hj(u,n,n),new C.hj(B.a([new C.j7(p,m,new C.dXX(o),A.bj,n),new C.j7(A.of,"Reset",new C.dXY(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.Q,0,A.p))}}
C.bqH.prototype={
a1(d,e){var w,v,u,t,s=e.eg(A.J),r=e.a/2-14
$.S()
w=B.I()
w.b=A.a9
w.c=16
w.r=A.c.j(0.08).gp(0)
d.ad(s,r,w)
w=B.bX(s,r)
v=B.I()
v.b=A.a9
v.c=16
v.d=A.bB
u=this.c
t=B.ar(u,A.c,0.4)
t.toString
v.sam(new B.fX(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aB(0,B.bX(s,r)))
d.e2(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aw(d){return d.b!==this.b}}
C.UH.prototype={
U(){return new C.bjN($,A.bD,0,B.a([],x.X),null,null)}}
C.bjN.prototype={
a_(){this.a2()
this.p9()},
q6(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.RU.h(0,p.d)
w.toString
v=A.d.fa(w,new C.dJk())
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
C.q0("flute",D.c4M[t]+5,1400,0.35)}p.m(new C.dJl())},
gc9I(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.Ks("Press Start",0.5)
w=D.RU.h(0,this.d)
w.toString
v=A.d.fa(w,new C.dJf())
u=A.k.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.Ks("Breathe in",0.5+0.5*A.dw.av(0,p))
case 1:return new B.Ks("Hold",1)
case 2:return new B.Ks("Breathe out",1-0.5*A.dw.av(0,p))
default:return new B.Ks("Hold",0.5)}}}return new B.Ks("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc9I(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.iM.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.iM.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.px,q,q,q))
n.push(B.ao(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kQ,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a7(300,340,new B.an(A.A,q,A.aa,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aV(D.RU.geu(D.RU));w.C();){v=w.gR(w)
o.push(new C.eX(v,r.d===v,new C.dJi(r,v),q,A.iM,q))}w=r.e
v=w?A.H1:A.ij
w=w?"Stop":"Start"
o.push(new C.j7(v,w,new C.dJj(r),A.bj,q))
return C.oz(A.iM,A.fz,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new C.hj(o,q,q))}}
C.aID.prototype={}
C.Vl.prototype={
U(){return new C.bk2(new B.cA(null,x.z),B.a([],x.au),A.au,A.c)}}
C.bk2.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aJ(s,s,s,s,D.ry,s,s,s,new C.dV0(t,d),s,s,s,s,"Share",s)],r),p=B.by(B.m(18),new B.ex(B.aB(s,B.b4(s,s,s,new C.bm_(t.e,t.x,s),A.fC),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dV1(t),new C.dV2(t),s,s,s,s,s,s,s,s,s,new C.dV3(t),s,s,s,s,!1,A.a5),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.cWL[w]
u=!t.w&&t.f.A(0,v)
o.push(new C.JO(v,u,new C.dV4(t,v),!1,s))}u=t.r
return C.oz(A.bC,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bT,p,s),"DRAW PAD",B.x(B.a([new C.hj(o,s,s),C.lU(A.bC,""+A.k.V(u),"Brush",30,2,new C.dV5(t),u),new C.hj(B.a([new C.eX("Eraser",t.w,new C.dV6(t),A.GB,A.bC,s),new C.j7(A.rv,"Undo",new C.dV7(t),A.c,s),new C.j7(A.ec,"Clear",new C.dV8(t),A.c,s),new C.j7(A.Op,"Paper",new C.dV9(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.Q,0,A.p))}}
C.bm_.prototype={
a1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.S()
w=B.I()
w.r=this.c.gp(0)
d.aO(new B.a3(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,B.M)(w),++s){r=w[s]
q=$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bB
p.e=A.dS
p.b=A.a9
m=r.c
if(m.length===1){q=A.d.gI(m)
m=new B.ap(A.R,A.N,A.U,A.V,A.S)
m.r=o.gp(o)
l=m.G()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=B.a([],t)
k=new B.aF(q.r,A.ag,null,null,o)
o.push(new B.aX(A.d.gI(m).a,A.d.gI(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new B.c3(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.bv(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new B.aq(A.d.gak(m).a,A.d.gak(m).b)
o.push(q)
o=k.f
if(o!=null)q.bv(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.G()
q=k.e
u.drawPath((q==null?k.e=new B.cj(k.gbx().a.snapshot()):q).a,l)
l.delete()}}},
aw(d){return!0}}
C.W3.prototype={
U(){var w=x.S
return new C.aEy(B.aY(w),B.aY(w))}}
C.aEy.prototype={
a_(){this.a2()
this.asQ()},
asQ(){var w,v,u=this,t=x.N,s=B.bq(D.dkR,!0,t)
A.d.CZ(s)
w=x.S
v=B.T(s).c
t=B.C(B.d1(s,0,B.dB(u.d,"count",w),v),t)
A.d.v(t,B.d1(s,0,B.dB(u.d,"count",w),v))
A.d.CZ(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
c9D(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
C.q0("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.ejs(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gI(0)
u=w.gak(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bP(A.mA,new C.ejt(s,v,u),t)
else{s.x=!0
B.bP(A9.FU,new C.eju(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.UA,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.ao(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.yc,B.B(B.a([u,B.d(p,q,q,q,q,q,q,B.l(q,q,w?A.aT:A.ae,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.iC,A.j,0,q,q),q),B.E(B.iy(!0,q,q,A.y,new B.hR(v,8,8,1,q),new C.ejy(r),r.e.length,A.bf,q,A.ah,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.cYf[t]
o.push(new C.eX(s.b,r.d===s.a,new C.ejz(r,s),q,A.aQ,q))}o.push(new C.j7(D.bMs,"New game",new C.ejA(r),A.bj,q))
return C.oz(A.aQ,A.fz,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new C.hj(o,q,q))}}
C.Wd.prototype={
U(){return new C.aER(B.a([],x.t))}}
C.aER.prototype={
c9H(d){A.d.a8(this.d)
this.w=!0
this.b_l()},
b_l(){this.d.push(A.cZ.au(4))
this.e=0
this.a_j()},
a_j(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_j=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.etn(t))
s=x.H
w=3
return B.b(B.bP(A.ly,null,s),$async$a_j)
case 3:r=t.d,q=B.bq(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aTs(n)
w=7
return B.b(B.bP(new B.b9(1000*Math.max(280,600-r.length*18)),null,s),$async$a_j)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.eto(t))
case 1:return B.h(u,v)}})
return B.i($async$a_j,v)},
aTs(d){this.m(new C.etl(this,d))
C.q0("marimba",D.c4L[d]+5,450,0.55)
B.bP(A.FS,new C.etm(this),x.H)},
c9J(d){var w,v,u=this
if(!u.w||u.r)return
u.aTs(d)
w=u.d
v=u.e
if(w[v]!==d){E.dX(90,"",600,0,0.5,"saw")
u.m(new C.etp(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.etq(u))
B.bP(A.hq,new C.etr(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,M.aSU,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fqx,A.L,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.axS[v]
u=u.j(q.f===v?1:0.35)
t=new B.aQ(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.axS[v].j(0.8),A.J,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aB(p,B.dd(p,p,p,p,A.b7,new B.o(u,p,new B.bK(r,r,r,r),new B.bk(t,t,t,t),s,p,A.n),A.jv,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.ets(q,v),p,p,p,p,p,p,!1,A.a5))}o=B.at(new B.D(A.ab,B.x(B.a([o,A.am,n,A.d8,new B.fF(1,B.kX(1,l,2,12,12,p,A.dR,!1),p)],m),A.m,p,A.b8,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return C.oz(A.bG,A.fz,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new C.hj(B.a([new C.j7(A.ij,n,q.gc9G(q),A.bj,p)],m),p,p))}}
C.Wx.prototype={
U(){return new C.bld(new B.as(A.at,$.ax()))}}
C.bld.prototype={
awn(d){return B.oP(A.k.ac(d,2),B.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eHe(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.d7(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eHn()
l=B.aN(m,A.Z,!1,m,!0,A.t,m,B.aO(),l,m,m,m,m,m,2,B.bu(m,m,m,m,m,m,m,m,!0,new B.b5(4,B.m(16),A8.xk),m,m,m,m,m,m,m,m,m,m,m,new B.b5(4,B.m(16),D.b0S),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lN,"Bill amount",!0,!0,!1,m,m,m,m,D.fo_,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,A.e0,m,m,m,1,m,m,!1,"\u2022",m,new C.eHj(n),m,m,m,!1,m,m,!1,m,!0,m,A.ab,m,m,m,m,m,m,m,m,m,m,m,A.aRS,!0,A.a3,m,A.ao,m,m,m,m)
k=A.bj.j(0.1)
s=B.m(20)
r=B.J(A.bj.j(0.35),A.r,1)
q=x.p
s=B.ct(B.a([l,A.bx,B.p(m,B.x(B.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.awn(w)),t.$2("Total","$"+n.awn(v)),U.MM,t.$3$big("Each of "+n.f+" pays","$"+n.awn(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bR,m,m,m)],q),m,A.fr,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cIP[p]
r.push(new C.eX(""+o+"%",A.k.V(n.e)===o,new C.eHk(n,o),m,A.bj,m))}l=n.f
return C.oz(A.bj,A.fz,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new C.hj(r,"TIP",m),C.lU(A.aQ,""+l,"People",20,1,new C.eHl(n),l),new C.hj(B.a([new C.eX("Round up",n.r,new C.eHm(n),m,A.aT,m)],q),m,m)],q),A.m,m,A.e,A.Q,0,A.p))}}
C.W2.prototype={
U(){var w=B.a([3,5],x.t)
return new C.bkJ(w,A.cZ,$,A.bD,0,B.a([],x.X),null,null)}}
C.bkJ.prototype={
a_(){this.a2()
this.p9()},
q6(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.k.bj(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.au(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.au(6)+1)
u.f=t
C.a8s("snare",0.5)}u.m(new C.eix())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hh()
u.w=t
u.x=t?0:3.141592653589793
C.q0("bell",24,400,0.5)}u.m(new C.eiy())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bdM(v,o.r>0,n))}u=B.aB(n,B.at(B.bW(A.fE,m,A.bq,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eiq(o),n,n,n,n,n,n,!1,A.a5)}else if(m==="coin"){t=A.k.E(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.J(A.d1,A.r,6)
s=B.a([new B.ac(0,A.G,A.aT.j(0.4),A.J,30)],x.V)
u=B.aB(n,B.at(B.eb(A.A,B.p(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fnb,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.eqD,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eir(o),n,n,n,n,n,n,!1,A.a5)}else{m=o.as
u=B.aB(n,B.at(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.fcs,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kQ,n,n,n)],x.p),A.m,n,A.e,A.Q,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eis(o),n,n,n,n,n,n,!1,A.a5)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.dd8[r]
v.push(new C.eX(q.b,o.d===q.a,new C.eit(o,q),q.c,A.bv,n))}v=B.a([new C.hj(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(C.lU(A.bv,""+s,"Dice",4,1,new C.eiu(o),s))}if(o.d==="num"){s=o.z
s=C.lU(A.bv,""+s,"From",100,1,new C.eiv(o),s)
p=o.Q
A.d.v(v,B.a([s,C.lU(A.bv,""+p,"To",1000,2,new C.eiw(o),p)],m))}return C.oz(A.bv,A.fz,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.m,n,A.e,A.Q,0,A.p))}}
C.bdM.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cZ.ah()-0.5)*0.6
else w=0
v=B.m(22)
u=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cv,14)],x.V)
t=B.a([],x.p)
for(s=D.dwG.h(0,A.o.E(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bM(s[q],p,p,B.p(p,p,A.f,p,p,N.acL,p,18,p,p,p,p,p,18),p))
return B.eL(A.A,w,B.p(p,new B.an(A.a_,p,A.aa,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bF,p,p,100),p)}}
C.aLI.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.bxB.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bw7()}}
C.aLZ.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.bxF.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bwp()}}
C.aMq.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.bxN.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bwS()}}
C.aMP.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.bxV.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bxg()}}
C.b7h.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aFT.h(0,t)
$.asd=s==null?"music":s
s=v.d
w=x.p
t=B.a([B.aJ(u,u,u,u,S.nt,u,u,u,new C.cwn(d),u,u,u,u,u,u),B.E(B.d(t,u,1,A.a2,u,u,u,B.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(B.aJ(u,u,u,u,B.X(A.Os,s,u,u,u,22),u,u,u,new C.cwo(v,d),u,u,u,u,"How to play",u))
w=B.a([new B.D(D.bBR,B.B(t,A.m,u,A.e,A.j,0,u,u),u),B.E(v.f,1)],w)
w.push(B.p(u,v.r,A.f,u,u,new B.o(F.B7,u,new B.bK(new B.ay(A.c.j(0.08),1,A.r,-1),A.a0,A.a0,A.a0),u,u,u,A.n),u,u,u,u,A.FW,u,u,1/0))
return B.c6(u,A.c0,B.bn(!0,B.x(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),u,!1,!1,u,u)}}
C.eX.prototype={
B(d){var w,v,u,t=this,s=null,r=B.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=B.J(o,A.r,q?1.6:1)
w=x.p
v=B.a([],w)
u=t.f
if(u!=null)A.d.v(v,B.a([B.X(u,q?t.r:A.aR,s,s,s,16),A.el],w))
v.push(B.d(t.c,s,s,s,s,s,s,B.l(s,s,q?A.c:A.ae,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new B.D(F.tW,B.aB(s,B.dd(s,B.B(v,A.m,s,A.e,A.Q,0,s,s),s,s,A.b7,new B.o(p,s,o,r,s,s,A.n),A.eM,s,s,s,A.hg,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cwj(t),s,s,s,s,s,s,!1,A.a5),s)}}
C.hj.prototype={
B(d){var w=null,v=B.a([],x.p),u=this.d
if(u!=null)v.push(new B.a7(54,w,B.d(u,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(B.E(B.cd(B.B(this.c,A.m,w,A.e,A.j,0,w,w),A.t,w,A.y,w,w,w,w,A.aN),1))
return new B.D(A.cu,B.B(v,A.m,w,A.e,A.j,0,w,w),w)}}
C.b7i.prototype={
B(d){var w,v,u=this,t=null,s=B.d(u.c,t,t,t,t,t,t,B.l(t,t,A.c.j(0.7),t,t,t,t,t,t,t,t,11.5,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),r=u.w
r=B.avK(d).cL4(r,A.bz,r.j(0.2),r,3.5)
w=u.f
v=u.r
r=B.E(B.aag(B.l5(t,t,t,v,w,u.e,A.k.E(u.d,w,v)),r),1)
return new B.a7(t,34,B.B(B.a([new B.a7(78,t,s,t),r,new B.a7(38,t,B.d(u.x,t,t,t,t,t,t,A.JK,A.dU,t,t),t)],x.p),A.m,t,A.e,A.j,0,t,t),t)}}
C.j7.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new B.D(F.tW,B.aG(!1,A.a1,!0,B.m(12),B.aM(!1,B.m(12),!0,new B.D(Af.ajf,B.B(B.a([B.X(w.c,u,v,v,v,17),A.el,B.d(w.d,v,v,v,v,v,v,B.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.cwi(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ai),v)}}
C.JO.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.faM:u
w=t?A.c:A.aZ
w=B.J(w,A.r,t?2.5:1)
return B.aB(u,B.dd(u,u,u,u,A.b7,new B.o(p,u,w,u,t?B.a([new B.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a6),A.hp,u,r,D.aj0,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cwp(v),u,u,u,u,u,u,!1,A.a5)}}
C.qM.prototype={
a5x(d,e){var w=B.dl()
w.seP(B.cL(B.dE(0,0,0,d,0,0),new C.cwk(this,w,e)))
this.iL$.push(w.bk())},
p9(){var w=this,v=w.qO(new C.cwm(w))
v.h9(0)
w.iK$!==$&&B.aP()
w.iK$=v}}
C.fcS.prototype={}
C.b8a.prototype={
a1(d,e){var w=this
C.hsR(d,e,w.b,w.f,w.r,w.w,w.d,w.e,w.c)},
aw(d){var w=this
return d.b!==w.b||d.c!==w.c||d.d!==w.d||d.e!==w.e||d.f!==w.f||!d.r.A(0,w.r)||d.w!==w.w}}
C.Wy.prototype={
U(){return new C.asc(new B.as(new B.bb("NGMY",A.b4,A.aO),$.ax()),null,null)}}
C.asc.prototype={
gJh(){var w,v=this,u=v.d
if(u===$){w=B.bm(null,B.dE(0,0,0,3200,0,0),null,1,null,v)
w.cM(0)
v.d!==$&&B.bG()
v.d=w
u=w}return u},
gtl(){var w=D.Rv[this.w]
return w},
a_(){this.a2()
var w=this.gJh()
w.df()
w.dS$.M(0,this.gbZf())},
bZg(){var w,v,u,t,s,r,q,p=this,o=p.gJh().x
o===$&&B.c()
w=p.e.a.a
v=Math.max(1,(w.length===0?A.mg:new B.mj(w)).gL(0))
if(p.Q&&o>=p.as)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.f
r=s==="type"
if(r)q=t/v/1.8
else q=u?0:t/w*0.45
if(p.as<q&&o>=q)if(r)E.dX(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dX(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
C.q0(s,D.cUJ[A.o.F(t,8)]+12,450,0.35)}}p.as=o},
q(){this.gJh().q()
var w=this.e
w.S$=$.ax()
w.P$=0
this.btC()},
box(d){var w
this.m(new C.cj6(this,d))
w=this.gJh()
w.iN(0,0)
w.cM(0)},
Tn(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Tn=B.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:if(r.at>=0){w=1
break}r.m(new C.cj1(r))
t=4
n={}
m=r.e
l=m.a.a
k=r.f
j=r.r
i=r.y
h=r.gtl()
g=r.x
w=7
return B.b(C.aQw(D.a4E[r.z].b,i,h,g,k,new C.cj2(r),j,l),$async$Tn)
case 7:q=a2
if(J.ad(q)===0){n=B.bd("empty")
throw B.W(n)}m=A.a.i(m.a.a)
if(m.length===0)m="title"
l=B.af("[^A-Za-z0-9_-]+",!0,!1,!1,!1)
p=B.aL(m,l,"_")
n.a=!1
t=9
w=12
return B.b(B.avy(B.a([B.cBc(q,"image/gif",B.w(p)+".gif")],x.r),null,"Made in NGMY Core Protocol"),$async$Tn)
case 12:o=a2
n.a=o.b!==A.TP
t=4
w=11
break
case 9:t=8
e=s.pop()
w=11
break
case 8:w=4
break
case 11:w=!n.a?13:14
break
case 13:a0=n
w=15
return B.b(C.fID(q,B.w(p)+".gif","image/gif"),$async$Tn)
case 15:a0.a=a2
case 14:if(r.c!=null)r.m(new C.cj3(n,r))
t=2
w=6
break
case 4:t=3
d=s.pop()
if(r.c!=null)r.m(new C.cj4(r))
w=6
break
case 3:w=2
break
case 6:if(r.c!=null)r.m(new C.cj5(r))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Tn,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.at(new B.fF(D.a4E[k.z].b,B.by(B.m(22),new B.ex(B.c9(k.gJh(),new C.ciR(k),j),j),A.aq),j),j,j,j),h=A.c.j(0.06)
h=B.aN(j,A.Z,!1,j,!0,A.t,j,B.aO(),k.e,j,j,j,j,j,2,B.bu(j,new B.b5(4,B.m(14),A.a0),j,j,j,j,"",j,!0,j,j,j,j,j,j,h,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,I.E1,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ak,j,j,j,j,j,j,j,28,j,1,j,j,!1,"\u2022",j,new C.ciS(k),j,j,j,!1,j,j,!1,j,!0,j,A.ab,j,j,j,j,j,j,j,j,j,j,j,A.fQ,!0,A.a3,j,A.ao,j,j,j,j)
w=x.p
v=B.a([],w)
for(u=0;u<24;++u){t=D.dn0[u]
v.push(new C.eX(t.b,k.f===t.a,new C.ciT(k,t),j,A.bG,j))}s=B.a([],w)
for(u=0;u<8;++u){t=D.d0A[u]
s.push(new C.eX(t.b,k.r===t.a,new C.ciU(k,t),j,A.c4,j))}r=B.a([],w)
for(q=0;q<20;++q){p=D.dro[q]
r.push(new C.eX(p.a+" "+p.b,k.y===q,new C.ciV(k,q),j,A.aQ,j))}p=B.a([],w)
for(q=0;q<8;++q)p.push(new C.JO(D.Rv[q],k.w===q,new C.ciW(k,q),!1,j))
o=B.a([],w)
for(q=0;q<3;++q)o.push(new C.eX(D.a4E[q].a,k.z===q,new C.ciX(k,q),j,A.bG,j))
o.push(A.bn)
n=k.Q
m=n?"Sound on":"Sound off"
l=n?A.uu:Q.Cm
o.push(new C.eX(m,n,new C.ciY(k),l,A.bG,j))
o.push(A.bn)
o.push(new C.j7(A.og,"Replay",new C.ciZ(k),A.c,j))
l=k.x
l=B.a([h,A.O,new C.hj(v,"MOVE",j),new C.hj(s,"LOOK",j),new C.hj(r,"SCENE",j),new C.hj(p,"COLOUR",j),new C.hj(o,"SHAPE",j),C.lU(A.bG,A.o.u(A.k.V(l)),"Size",96,28,new C.cj_(k),l),A.av],w)
h=k.at
if(h>=0)l.push(new B.D(A.kE,B.x(B.a([B.by(B.m(6),B.lk(A.bz,j,A.bG,8,j,h,j),A.aq),A.av,B.d("Making your animation\u2026 "+A.k.V(h*100)+"%",j,j,j,j,j,j,A.oE,j,j,j)],w),A.m,j,A.e,A.j,0,A.p),j))
else l.push(new B.a7(1/0,j,B.dj(A.oj,D.fHo,k.gcML(),B.bp(A.bG,j,j,j,A.w,j,A.m1,j,j,j,j,j)),j))
h=k.ax
if(h.length!==0)l.push(new B.D(A.hX,B.d(h,j,j,j,j,j,j,D.fd2,A.L,j,j),j))
return C.oz(A.bG,A.fz,"Type a word or a name. Pick how the letters move (24 ways), how they look (8 designs), and a moving background scene (20 designs). The title plays on a loop. Download saves the WHOLE animation as a moving GIF to post or send.",new B.D(A.bF,i,j),"TITLE ANIMATOR",B.x(l,A.m,j,A.e,A.Q,0,A.p))},
gY(d){return this.x}}
C.aF_.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.abf.prototype={
bzt(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,B.M)(w),++q)for(p=A.d.gaf(w[q]);p.C();){o=p.gR(0)
n=J.a5(o)
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
for(m=0,q=0;q<w.length;w.length===p||(0,B.M)(w),++q){for(v=A.d.gaf(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gR(0)
n=J.a5(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&B.aP()
g.ax=m
w=g.bCI()
g.ay!==$&&B.aP()
g.ay=w},
bCI(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
FP(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
for(k=l.y,w=k.length,v=0;v<k.length;k.length===w||(0,B.M)(k),++v){u=k[v]
for(t=u.length-1,s=!1,r=0;r<u.length;q=r+1,t=r,r=q){p=J.q(u[r],0)
o=J.q(u[r],1)
n=J.q(u[t],0)
m=J.q(u[t],1)
if(o>f!==m>f&&e<(n-p)*(f-o)/(m-o)+p)s=!s}if(s)return!0}return!1}}
C.abg.prototype={
cGW(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,B.M)(v),++s){r=v[s]
if(r.FP(0,w,e)){if(t!=null){q=r.ax
q===$&&B.c()
p=t.ax
p===$&&B.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
C.vf.prototype={}
C.Pq.prototype={}
C.ye.prototype={}
C.Pp.prototype={
fu(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.c4w[w.au(7)]
w=w.hh()?0:12
u=A.o.F(t.c++,3)===0?"flute":"bell"
C.q0(u,v+w-12,2200,0.1)}}
C.VA.prototype={
U(){var w=$.ax()
return new C.aDW(new B.cA(null,x.z),new B.as(A.at,w),new C.Pp(A.cZ),D.dfc,A.ax,D.a4n,$,A.bD,0,B.a([],x.X),null,null)}}
C.aDW.prototype={
a_(){var w=this
w.a2()
w.p9()
w.a.toString
w.aXj()},
aXj(){var w=this
w.m(new C.e__(w))
C.b8k().bM(new C.e_0(w),x.P).eW(new C.e_1(w))},
q(){var w=this.e
w.S$=$.ax()
w.P$=0
this.bww()},
cut(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=B.a([],x.C)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,B.M)(v),++s){r=v[s]
q=B.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,B.M)(p),++n)q.push(new C.e_2(p[n]).$0())
w.push(q)}this.w=w},
gWr(){var w=this.fy
return w.A(0,A.ax)?100:Math.min(w.a,w.b)*0.43},
au1(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.E(f,1,16)
w.Q=w.as=0},
ay5(d){var w
this.fx=d
w=d.ax
w===$&&B.c()
this.au1(d.x,d.w,105/Math.max(w,3))
B.f1()
C.q0("bell",(A.d.cu(D.a40,d.c)+1)*3+12,900,0.45)
E.dX(300,"",280,1.4,0.15,"tri")},
q6(d){var w,v,u,t,s,r,q,p=this
p.f.fu(0,d,p.db)
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
can(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.ax))return null
w=n.fy
v=n.gWr()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gWr()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.E(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cGW((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
cam(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new C.dZW(w))
return}w.m(new C.dZX(w,v,A.a.i(d).toLowerCase()))},
bPL(){var w=null,v=this.c
v.toString
B.cg(w,w,!0,w,new C.dZU(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=B.a([B.aJ(n,n,n,n,D.bP4,n,n,n,o.gbPK(),n,n,n,n,"Earth facts",n),B.aJ(n,n,n,n,D.ry,n,n,n,new C.e_l(o,d),n,n,n,n,"Share",n)],l),j=B.cB(new C.e_m(o,m)),i=A.c.j(0.06)
i=B.a([B.aN(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.e,n,n,n,n,n,2,B.bu(n,new B.b5(4,B.m(14),A.a0),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,I.E1,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bXi,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gcal(),n,n,n,!1,n,n,!1,n,!0,n,A.ab,n,n,n,n,n,n,n,n,n,n,n,A.jj,!0,A.a3,n,A.ao,n,n,n,n)],l)
if(o.id.length!==0){w=B.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,B.M)(v),++t){s=v[t]
w.push(new C.eX(s.a,!1,new C.e_n(o,s),A.mJ,A.aQ,n))}i.push(new B.D(A.hX,new B.a7(n,38,B.ct(w,n,n,n,n,A.aN,!1),n),n))}i.push(A.am)
w=B.a([new C.eX("Whole Earth",!1,new C.e_r(o),A.hu,A.aQ,n)],l)
for(v=D.aFS.gdV(D.aFS),v=v.gaf(v);v.C();){u=v.gR(v)
w.push(new C.eX(u.a,!1,new C.e_s(o,u),n,A.aQ,n))}w.push(new C.eX("Random",!1,new C.e_t(o),A.p6,A.aQ,n))
i.push(new C.hj(w,"GO TO",n))
w=o.z
i.push(C.lU(A.aQ,A.k.ac(w,1)+"x","Zoom",16,0.8,new C.e_u(o),w))
w=o.dy
i.push(C.lU(A.bG,A.a.aZ(A.o.u(A.k.bj(w)),2,"0")+":00","Time",24,0,new C.e_v(o),w))
w=o.fr
i.push(C.lU(A.bj,o.ctd(),"Season",365,0,new C.e_w(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.m6:D.GT
i.push(new C.hj(B.a([new C.eX("Spin",w,new C.e_x(o),D.bKl,A.aQ,n),new C.eX("Night",v,new C.e_y(o),A.w7,A.aQ,n),new C.eX("Borders",u,new C.e_o(o),D.bKp,A.aQ,n),new C.eX("Names",r,new C.e_p(o),U.C9,A.aQ,n),new C.eX("Music",q,new C.e_q(o),p,A.aQ,n)],l),n,n))
return C.oz(A.aQ,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",B.x(i,A.m,n,A.e,A.Q,0,A.p))},
ctd(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.ayv[u])v=u
return A.iA[v]+" "+(A.k.bj(w-D.ayv[v])+1)},
cak(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&B.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new L.uC(1,A.o.F((A.d.cu(D.a40,t)+1)*47,360),0.55,1).lH()
r=new C.dZS()
q=B.m(20)
p=B.J(s.j(0.6),A.r,1)
o=x.p
n=B.B(B.a([B.p(j,j,A.f,j,j,new B.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.ac,B.E(B.d(d.a,j,1,A.a2,j,j,j,A.de,j,j,j),1),B.aJ(j,j,j,j,A.Hc,j,j,j,new C.dZR(this),j,j,j,j,j,A.cd)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=B.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hl,j,j,j)
m=D.dvj.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=B.B(B.a([m,A.ac,r.$2("PEOPLE",l?C.fx0(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",C.H4(i)+" km\xb2")
if(l)m=(w<10?A.k.ac(w,1):C.H4(w))+" per km\xb2"
else m="\u2014"
m=B.B(B.a([i,A.ac,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.ac(u,3):A.k.ac(u,1))+"% of people")
l=d.f
k=d.r
return B.p(j,B.x(B.a([n,t,A.O,v,A.O,m,A.O,B.B(B.a([i,A.ac,r.$2("ECONOMY",l>0?"$"+C.fx0(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.E,j,A.e,A.Q,0,A.p),A.f,j,j,new B.o(D.X8,j,p,q,j,j,A.n),j,j,j,j,D.ajy,j,j,j)}}
C.bg1.prototype={
a1(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.S(),d7=B.I()
d7.r=D.B3.gp(0)
d8.aO(new B.a3(0,0,0+d4,0+d5),d7)
w=new B.e9()
w.d3(4)
for(d7=d8.a,v=0;v<90;++v){u=w.ah()
t=w.ah()
s=w.ah()
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.c.j(0.25+w.ah()*0.5).gp(0)
q=r.G()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new B.t(d4,d5)
o=d2.f
u=B.I()
t=x.O
u.sam(new B.c0(A.A,0.5,A.x,d3,0,B.a([A.K,A.aQ.j(0.35),A.K],t),D.cZV,d3).aB(0,B.bX(p,o*1.1)))
d8.ad(p,o*1.05,u)
n=B.bX(p,o)
u=B.I()
u.sam(D.eqH.aB(0,n))
d8.ad(p,o,u)
J.bl(d7.save())
u=x.v
d6=new B.aF(d6.r,A.ag,d3,d3,B.a([],u))
d6.D(new B.jE(n))
d8.mE(0,d6)
m=d2.d*3.141592653589793/180
l=d2.e*3.141592653589793/180
k=Math.sin(m)
j=Math.cos(m)
i=Math.sin(l)
h=Math.cos(l)
g=B.I()
g.b=A.a9
m=g.c=0.7
g.r=A.c.j(0.1).gp(0)
f=new C.dhs(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.G()
s=d.e
d7.drawPath((s==null?d.e=new B.cj(d.gbx().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.S()
a3=B.a([],u)
d=new B.aF(a2.r,A.ag,d3,d3,a3)
a3.push(new B.aX(s,r))}else{s=new B.aq(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bv(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.G()
d6=d.e
d7.drawPath((d6==null?d.e=new B.cj(d.gbx().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.G()
s=d.e
d7.drawPath((s==null?d.e=new B.cj(d.gbx().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.S()
a3=B.a([],u)
d=new B.aF(a2.r,A.ag,d3,d3,a3)
a3.push(new B.aX(s,r))}else{s=new B.aq(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bv(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.G()
d6=d.e
d7.drawPath((d6==null?d.e=new B.cj(d.gbx().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=B.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.F((A.d.cu(D.a40,a7.c)+1)*47,360)
$.S()
b0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a3=a8?0.35:0.5
b0.r=new L.uC(1,a9,a3,a8?1:0.62).lH().gp(0)
b1=new B.ap(A.R,A.N,A.U,A.V,A.S)
b1.b=A.a9
b1.c=a8?2.2:m
b1.e=A.dS
b1.r=(a8?A.c:A.w.j(0.55)).gp(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,B.M)(a3),++b3){b4=a3[b3]
b5=b4.length/4|0
b6=$.S()
b7=B.a([],u)
b8=new B.aF(b6.r,A.ag,d3,d3,b7)
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
if(v===0){b6=new B.aX(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bv(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new B.aq(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bv(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}}if(!b9)continue
b6=new B.br()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bv(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.G()
b6=b8.e
d7.drawPath((b6==null?b8.e=new B.cj(b8.gbx().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.G()
b6=b8.e
d7.drawPath((b6==null?b8.e=new B.cj(b8.gbx().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,B.M)(a5),++b3){d=a5[b3]
$.S()
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.b=A.a9
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.uG
q=s.G()
s=d.e
d7.drawPath((s==null?d.e=new B.cj(d.gbx().a.snapshot()):s).a,q)
q.delete()}if(d2.z)for(u=d6.length,s=d2.r,r=!(s<1.8),s=14/s,b3=0;b3<d6.length;d6.length===u||(0,B.M)(d6),++b3){a7=d6[b3]
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
c9=C.hR9(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbb(b2)
c9.a1(d8,new B.t(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.E(k*c0+j*c1*c4,-1,1)
$.S()
u=B.I()
u.sam(new B.c0(A.A,0.5,A.x,d3,0,B.a([A.K,A.K,D.bbP.j(0.78)],t),D.dfA,d3).aB(0,B.bX(new B.t(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.ad(p,o,u)}$.S()
d4=B.I()
d4.sam(new B.c0(A.A,0.5,A.x,d3,0,B.a([A.K,A.w.j(0.4)],t),D.dsQ,d3).aB(0,n))
d8.ad(p,o,d4)
d7.restore()
d7=B.I()
d7.b=A.a9
d7.c=1.4
d7.r=A.he.j(0.5).gp(0)
d8.ad(p,o,d7)},
aw(d){return!0}}
C.aM3.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.aM4.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bwv()}}
C.bur.prototype={}
C.WA.prototype={
U(){return new C.blh()}}
C.blh.prototype={
gaT1(){var w=this.d
if(w===$)w=this.d=A.cZ.au(16)
return w},
a_(){this.a2()
C.b8k().f6(new C.eHW(),new C.eHX(),x.P)},
B(d){var w=null,v=B.eH(w,w,w,!0,!0,D.B3,w,1,!0,w,0,!1,w,!1,w,w,B.aJ(w,w,w,w,D.apn,w,w,w,new C.eHT(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fKC,w,w,w,1,w,!0),u=B.m(18),t=A.aQ.j(0.1),s=B.J(A.aQ.j(0.35),A.r,1),r=x.p
return B.c6(v,D.B3,B.ct(B.a([B.p(w,B.B(B.a([D.bNL,A.as,B.E(B.d(D.d2Y[this.gaT1()],w,w,w,w,w,w,D.fru,w,w,w),1),B.aJ(w,w,w,w,D.bYi,w,w,w,new C.eHU(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bF,w,w,w),A.aA,B.cB(new C.eHV())],r),w,A.ZY,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.Wm.prototype={
U(){return C.hRB()}}
C.bl4.prototype={
ckW(d){var w=d.c,v=C.hRD(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new B.t(Math.cos(t)*v,Math.sin(t)*v)},
a_(){this.a2()
this.p9()},
q6(d){var w,v,u,t=this
t.e.fu(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.ckW(w)
u=new B.t(-v.a,-v.b).aJ(0,t.w)
v=B.kx(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gcao(){var w=this.ch
return new B.t(w.a/2,w.b/2).aa(0,this.x)},
cas(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.CT[s]
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
b_H(d){this.m(new C.eAB(this,d))
B.f1()
C.q0("bell",D.dt2[A.o.F(A.d.cu(D.CT,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=B.a([B.aJ(m,m,m,m,D.ry,m,m,m,new C.eAM(n,d),m,m,m,m,"Share",m)],k),i=B.cB(new C.eAN(n,l)),h=B.a([new C.eX("All",!1,new C.eAO(n),A.a1Z,A.aT,m)],k)
for(w=0;w<10;++w){v=D.CT[w]
h.push(new C.eX(v.a,n.z===v,new C.eAP(n,v),m,B.b1(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.ac(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=C.lU(A.aT,s,"Time",1,0,new C.eAQ(n),u/t)
u=n.w
u=C.lU(A.aT,A.k.ac(u,1)+"x","Zoom",9,0.5,new C.eAR(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.m6:D.GT
return C.oz(A.aT,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",B.x(B.a([new C.hj(h,"GO TO",m),t,u,new C.hj(B.a([new C.eX("Orbits",s,new C.eAS(n),m,A.aT,m),new C.eX("Names",r,new C.eAT(n),m,A.aT,m),new C.eX("Asteroids",q,new C.eAU(n),m,A.aT,m),new C.eX("Music",p,new C.eAV(n),o,A.aT,m)],k),m,m)],k),A.m,m,A.e,A.Q,0,A.p))},
cap(d){var w,v,u,t,s,r=null,q=B.b1(d.z),p=d.c,o=p*8.317,n=new C.eAz(),m=B.m(20),l=B.J(q.j(0.6),A.r,1),k=B.p(r,r,A.f,r,r,new B.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=B.B(B.a([k,A.ac,B.E(B.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.k2,r,r,r),1),B.aJ(r,r,r,r,A.Hc,r,r,r,new C.eAy(this),r,r,r,r,r,A.cd)],w),A.m,r,A.e,A.j,0,r,r)
k=B.d(d.y,r,r,r,r,r,r,F.E2,r,r,r)
v=n.$2("WIDTH",C.H4(d.d*2)+" km")
u=p===0
p=B.B(B.a([v,A.ac,n.$2("FROM THE SUN",u?"\u2014":B.w(p)+" AU ("+C.H4(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new C.eAA().$1(v))
t=d.f
v=B.B(B.a([v,A.ac,n.$2("ONE DAY",t>=48?A.k.ac(t/24,0)+" Earth days":A.k.ac(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=B.B(B.a([n.$2("GRAVITY",B.w(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.ac(50*t/9.81,s)+" kg"),A.ac,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.ac(o,1)+" minutes":A.k.ac(o/60,1)+" hours"
return B.p(r,B.x(B.a([j,A.av,k,A.O,p,A.O,v,A.O,s,A.O,B.B(B.a([t,A.ac,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.E,r,A.e,A.Q,0,A.p),A.f,r,r,new B.o(D.X8,r,l,m,r,r,A.n),r,r,r,r,D.ajy,r,r,r)}}
C.bsu.prototype={
a1(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.S()
w=B.I()
w.r=D.B3.gp(0)
a7.aO(new B.a3(0,0,0+a5,0+a6),w)
v=new B.e9()
v.d3(8)
for(w=a7.a,u=0;u<110;++u){t=v.ah()
s=v.ah()
r=v.ah()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=A.c.j(0.2+v.ah()*0.5).gp(0)
p=q.G()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gcao()
n=a5.w
if(a5.as)for(a6=A.d.gaf(D.CT),t=new B.f5(a6,new C.f1q()),s=o.a,r=o.b;t.C();){q=a6.gR(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new B.ap(A.R,A.N,A.U,A.V,A.S)
m.b=A.a9
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
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.r=A.c.j(0.5).gp(0)
p=l.G()
w.drawCircle(t+q*j,s+m*j,0.9,p)
p.delete()}i=C.hRC(A.d.gI(D.CT))*Math.sqrt(n)*1.4
a6=i*3.2
t=B.I()
s=x.O
t.sam(new B.c0(A.A,0.5,A.x,a4,0,B.a([A.aT.j(0.5),A.K],s),a4,a4).aB(0,B.bX(o,a6)))
a7.ad(o,a6,t)
t=B.I()
t.sam(D.eqB.aB(0,B.bX(o,i)))
a7.ad(o,i,t)
if(a5.at){h=C.hjq("Sun",10.5,A.ae)
h.a1(a7,o.aa(0,new B.t(-h.b.c/2,i+4)))}for(a6=A.d.gaf(D.CT),t=new B.f5(a6,new C.f1r()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gR(0)
g=l.c
j=g===0?0:30+150*Math.sqrt(g/30.1)
f=l.e
k=f<=0?0:6.283185307179586*(a5.f/f)+g*1.7
g=q+Math.cos(k)*j*n
f=m+Math.sin(k)*j*n
j=(1.5+1.6*Math.log(l.d/1000+1))*Math.sqrt(n)
e=B.b1(l.z)
d=l.a
if(d==="Saturn"){J.bl(w.save())
w.translate(g,f)
w.rotate(-22.91831180523293,0,0)
a0=B.bJ(A.J,j*1.3,j*4.2)
a1=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1.b=A.a9
a1.c=j*0.45
a1.r=A.bM.j(0.55).gp(0)
p=a1.G()
w.drawOval(B.bF(a0),p)
p.delete()
w.restore()}a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a0.r=e.j(0.3).gp(0)
a0.z=A.uG
p=a0.G()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1=B.ar(e,A.w,0.55)
a1.toString
a0.sam(new B.c0(V.xg,0.5,A.x,a4,0,B.a([A.c,e,a1],s),H.a3D,a4).aB(0,B.bX(new B.t(g,f),j)))
p=a0.G()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.b=A.a9
l.c=2
l.r=A.c.gp(0)
p=l.G()
w.drawCircle(g,f,j+7,p)
p.delete()}if(r&&d==="Earth"){k=a5.f/27.3*2*3.141592653589793
a2=j+11*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new B.ap(A.R,A.N,A.U,A.V,A.S)
a3.r=A.c.gp(0)
p=a3.G()
w.drawCircle(g+l*a2,f+a0*a2,1.8*a1,p)
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.d8t[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new B.ap(A.R,A.N,A.U,A.V,A.S)
a3.r=A.ae.gp(0)
p=a3.G()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=C.hjq(d,10.5,A.ae)
h.a1(a7,new B.t(g+-h.b.c/2,f+(j+4)))}}},
aw(d){return!0}}
C.VB.prototype={
U(){var w=x.i
return new C.aDX(new C.Pp(A.cZ),B.c2(5,0,!1,w),B.c2(5,0,!1,w),B.c2(5,null,!1,x.cD),A.J,A.J,B.a([],x.g),$,A.bD,0,B.a([],x.X),null,null)}}
C.aDX.prototype={
cxL(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
car(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.edW
s.cy=new B.t(s.ay,0)
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
s.m(new C.e_C())},
a_(){this.a2()
this.p9()},
q6(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fu(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.zi[r]
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
break}}}if(A.d.d5(s,new C.e04()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
i.cy=new B.t(k,s)
k=p+k*w
s=t+s*w
i.cx=new B.t(k,s)
j=Math.sqrt(k*k+s*s)
s=i.cy
k=i.cx
t=-398600/(j*j*j)
p=k.a
k=k.b
i.cy=new B.t(s.a+p*t*v,s.b+k*t*v)
i.dy+=w
if(Math.sqrt(p*p+k*k)<6371){i.CW=!1
E.dX(70,"",350,0,0.7,"noise")
break}}v=i.db
if(v.length===0||A.d.gak(v).aF(0,i.cx).gcH()>120)v.push(i.cx)
if(v.length>700)A.d.cG(v,0)
if(i.cx.gcH()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bNR()
else n=n==="weight"?p.cF5():p.bG_()
w=x.p
v=B.a([],w)
for(u=0;u<3;++u){t=D.dpU[u]
v.push(new C.eX(t.b,p.d===t.a,new C.e_R(p,t),t.c,A.cT,o))}v=B.a([new C.hj(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=B.a([new C.eX("Hammer",!s,new C.e_S(p),Ae.GO,A.cT,o),new C.eX("Feather",s,new C.e_T(p),U.Oa,A.cT,o),new C.eX(q,r,new C.e_X(p),A.GC,A.aQ,o)],w)
q=p.w
A.d.v(v,B.a([new C.hj(r,o,o),C.lU(A.cT,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new C.e_Y(p),q),new C.hj(B.a([new C.j7(A.ub,"Drop!",new C.e_Z(p),A.bj,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=C.lU(A.cT,""+A.k.V(s)+" kg","Your weight",120,20,new C.e0_(p),s)
r=p.ax
A.d.v(v,B.a([s,C.lU(A.cT,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new C.e00(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=C.lU(A.cT,A.k.ac(s,1)+" km/s","Speed",13,0,new C.e01(p),s)
r=p.ch
A.d.v(v,B.a([s,C.lU(A.cT,A.k.ac(r,1)+"x out","View",8,0.5,new C.e02(p),r),new C.hj(B.a([new C.j7(A.oi,"Fire!",p.gcaq(),A.bj,o),new C.j7(A.ub,"Falls",new C.e03(p),A.c,o),new C.j7(A.ro,"Orbit 7.7",new C.e_U(p),A.c,o),new C.j7(D.bNa,"Oval 9",new C.e_V(p),A.c,o),new C.j7(A.Cc,"Escape",new C.e_W(p),A.c,o)],w),o,o)],w))}return C.oz(A.cT,A.fz,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",B.x(v,A.m,o,A.e,A.Q,0,A.p))},
bNR(){return new B.D(D.bwK,B.cB(new C.e_B(this)),null)},
cF5(){var w,v,u,t=null,s=[D.eRo,D.eSR,D.eSY,D.eTg,D.eSW,D.eTn,D.eRY,D.eTJ,D.eSC],r=x.p,q=B.a([D.fyd,A.W],r)
for(w=0;w<9;++w){v=s[w]
u=B.b1(v.c)
q.push(new B.D(A.cu,new B.cc(A.aN,A.e,A.j,A.m,t,A.p,t,0,B.a([new B.a7(62,t,new B.y(v.a,t,new B.F(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new B.bA(1,A.bd,new B.BF(new C.e_D(this,v),t),t)],r),t),t))}q.push(A.av)
q.push(D.fAF)
return B.ct(q,t,A.iT,t,t,A.ah,!1)},
bG_(){return B.cB(new C.e_z(this))}}
C.bbc.prototype={
a1(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.S(),e=B.I()
e.r=D.B3.gp(0)
d.aO(new B.a3(0,0,0+h,0+g),e)
w=new B.e9()
w.d3(2)
for(e=d.a,v=0;v<80;++v){u=w.ah()
t=w.ah()
s=w.ah()
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.c.j(0.2+w.ah()*0.5).gp(0)
q=r.G()
e.drawCircle(u*h,t*g,s*1.1+0.3,q)
q.delete()}h=j.c
p=6371*h
g=j.b
e=B.I()
e.sam(new B.c0(A.A,0.5,A.x,i,0,B.a([A.K,A.aQ.j(0.35),A.K],x.O),D.dgv,i).aB(0,B.bX(g,p*1.1)))
d.ad(g,p*1.06,e)
e=B.I()
e.sam(D.eqv.aB(0,B.bX(g,p)))
d.ad(g,p,e)
o=g.aa(0,new B.t(0,-p))
f=f.r
e=x.v
n=new B.aF(f,A.ag,i,i,B.a([],e))
u=o.a
t=o.b
s=t+3
n.D(new B.aX(u-16,s))
n.D(new B.aq(u,t-400*h-4))
n.D(new B.aq(u+16,s))
n.D(new B.br())
s=B.I()
s.r=A.al.gp(0)
d.aG(n,s)
s=o.aa(0,new B.t(0,-400*h-6))
u=B.I()
u.r=A.c.gp(0)
d.ad(s,4,u)
u=j.e
if(u.length>1){e=B.a([],e)
m=new B.aF(f,A.ag,i,i,e)
f=g.a
t=g.b
m.D(new B.aX(f+A.d.gI(u).a*h,t+A.d.gI(u).b*h))
for(u=B.d1(u,1,i,B.T(u).c),s=u.$ti,u=new B.bS(u,u.gL(0),s.k("bS<ak.E>")),s=s.k("ak.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new B.aq(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bv(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.S()
f=B.I()
f.b=A.a9
f.c=2.4
f.d=A.bB
f.r=A.cT.j(0.9).gp(0)
d.aG(m,f)}if(j.f){f=j.d
k=g.aa(0,new B.t(f.a*h,f.b*h))
h=B.I()
h.r=A.cT.j(0.4).gp(0)
h.z=I.pk
d.ad(k,7,h)
h=B.I()
h.r=A.c.gp(0)
d.ad(k,4,h)}},
aw(d){return!0}}
C.We.prototype={
U(){return new C.bl1(new B.cA(null,x.z),$,A.bD,0,B.a([],x.X),null,null)}}
C.bl1.prototype={
a_(){this.a2()
this.p9()},
q6(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.QM[l.e],i=D.QM[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=B.a([B.aJ(k,k,k,k,D.ry,k,k,k,new C.etv(l,d),k,k,k,k,"Share",k)],u)
s=B.E(B.b4(k,k,k,new C.bs2(f,g,v,k),A.fC),1)
r=g.a
q=v<10?A.k.ac(v,1):C.H4(v)
p=f.a
q=B.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.hB,A.L,k,k)
o=C.H4(v*v*v)
n=A.a.cc(p,"s")?"":"s"
h=B.x(B.a([s,B.p(k,B.x(B.a([q,A.av,B.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,P.vb,A.L,k,k),A.bA,B.d(p+": "+C.H4(w*2)+" km wide. "+r+": "+C.H4(h*2)+" km wide.",k,k,k,k,k,k,P.DY,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.byV,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=B.a([],u)
for(m=0;m<10;++m){w=D.QM[m]
r.push(new C.eX(w.a,l.e===m,new C.etw(l,m),k,B.b1(w.c),k))}w=B.a([],u)
for(m=0;m<10;++m){s=D.QM[m]
w.push(new C.eX(s.a,l.f===m,new C.etx(l,m),k,B.b1(s.c),k))}return C.oz(A.c4,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new B.ex(h,l.d),"SIZE COMPARE",B.x(B.a([new C.hj(r,"FIRST",k),new C.hj(w,"SECOND",k)],u),A.m,k,A.e,A.Q,0,A.p))}}
C.bs2.prototype={
a1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.S()
w=B.I()
w.r=D.biB.gp(0)
d.aO(new B.a3(0,0,0+h,0+g),w)
v=new B.e9()
v.d3(6)
for(w=d.a,u=0;u<70;++u){t=v.ah()
s=v.ah()
r=v.ah()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=A.c.j(0.2+v.ah()*0.4).gp(0)
p=q.G()
w.drawCircle(t*h,s*g,r+0.3,p)
p.delete()}o=Math.min(h/2-16,g/2-10)*0.98
n=Math.max(o/this.d,0.8)
h*=0.5
g*=0.5
m=new B.t(h,g)
w=new C.f_z(d)
t=this.c
w.$3(m,o,B.b1(t.c))
s=o-n
l=new B.t(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,B.b1(s.c))
w=B.I()
w.b=A.a9
w.c=1.4
w.r=A.ae.gp(0)
d.ad(l,n+3,w)
k=B.fu(i,i,i,i,B.cS(i,i,i,i,i,i,i,i,i,D.fjm,s.a),A.a3,A.bZ,i,A.dA,A.bW)
k.ej()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbb(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbb(g)-6
h=g}k.a1(d,l.aa(0,new B.t(-w/2,h)))
j=B.fu(i,i,i,i,B.cS(i,i,i,i,i,i,i,i,i,D.fmK,t.a),A.a3,A.bZ,i,A.dA,A.bW)
j.ej()
t=j.b
h=t.c
t=t.a.c
j.a1(d,m.aa(0,new B.t(-h/2,-t.gbb(t)/2)))},
aw(d){return!0}}
C.aM5.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.bxH.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bwx()}}
C.aMz.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.bxQ.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bx0()}}
C.aMC.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.bxS.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bx3()}}
C.PU.prototype={}
C.UF.prototype={
U(){return C.hRz()}}
C.bjM.prototype={
a_(){this.a2()
this.p9()},
q6(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fu(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dX(70,"",500,0.3,0.5,"sine")}}A.d.bu(w,new C.dIM())},
b_I(d){var w,v,u,t=this.Q
if(t.A(0,A.ax))return
w=this.gb8H()
v=d.aF(0,new B.t(t.a/2,t.b*0.42))
u=A.k.E(v.gcH()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new C.PU(t,u,1.2,new B.vQ(1,30+A.cZ.ah()*40,0.9,0.7).lH()))
C.q0("bell",60+A.k.V(12-u)*2,400,0.35)},
gb8H(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.E(m.length===0?3:new B.N(m,new C.dIA(),B.T(m).k("N<1,L>")).fa(0,A.vw),1.0001,99))
m=x.p
w=B.a([B.aJ(n,n,n,n,D.ry,n,n,n,new C.dIB(o,d),n,n,n,n,"Share",n)],m)
v=B.cB(new C.dIC(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.ac(s,0)+" Suns":C.fx0(s)+" Suns"
t=C.lU(A.bv,s,"Mass",1,0,new C.dIE(o),u/t)
u=B.a([new C.eX("Star (10)",!1,new C.dIF(o),n,A.bv,n),new C.eX("Cygnus X-1 (21)",!1,new C.dIG(o),n,A.bv,n),new C.eX("Milky Way core (4 million)",!1,new C.dIH(o),n,A.bv,n),new C.eX("M87 (6.5 billion)",!1,new C.dII(o),n,A.bv,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.m6:D.GT
return C.oz(A.bv,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",B.x(B.a([t,new C.hj(u,"LIKE",n),new C.hj(B.a([new C.eX("Glowing ring",s,new C.dIJ(o),n,A.bv,n),new C.eX("Bent light",r,new C.dIK(o),n,A.bv,n),new C.eX("Music",q,new C.dIL(o),p,A.bv,n),new C.j7(A.of,"Clear",new C.dID(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.Q,0,A.p))},
afe(d,e){var w=null
return B.E(B.x(B.a([B.d(d,w,w,w,w,w,w,D.ff6,w,w,w),A.bA,B.d(e,w,2,w,w,w,w,K.A8,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
C.baA.prototype={
a1(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.S()
w=B.I()
w.r=D.bl1.gp(0)
b2.aO(new B.a3(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new B.t(w,v)
t=this.b
s=t.gb8H()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,B.M)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new B.t(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+A.k.E(o/h,0,n)
i=new B.t(w+k/h*g,v+j/h*g)}}k=new B.ap(A.R,A.N,A.U,A.V,A.S)
k.r=A.c.j(0.6).gp(0)
f=k.G()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=B.I()
b0.b=A.a9
b0.c=2
b0.r=A.c.j(0.25).gp(0)
b0.z=S.S_
b2.ad(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=B.ar(A.tz,A.fo,d)
n.toString
k=Math.cos(a4)
$.S()
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
g=a5?1:0.85
j.r=n.j(r*(0.4+(0.5+0.5*k)*0.6)*g).gp(0)
f=j.G()
p.drawCircle(w+a6,v+o*a0*0.28,1.3,f)
f.delete()
if(!a5&&t.x){o=Math.sin(-a4)
k=new B.ap(A.R,A.N,A.U,A.V,A.S)
k.r=n.j(b1).gp(0)
f=k.G()
p.drawCircle(w+a6*0.5,v+(q*Math.abs(o)*0.6-b0),1,f)
f.delete()}}}b0=s*1.25
$.S()
b1=B.I()
b1.sam(new B.c0(A.A,0.5,A.x,null,0,B.a([A.w,A.w.j(0)],x.O),D.cUG,null).aB(0,B.bX(u,b0)))
b2.ad(u,b0,b1)
b1=B.I()
b1.r=A.w.gp(0)
b2.ad(u,s,b1)
b1=B.I()
b1.b=A.a9
b1.c=1
b1.r=A.bv.j(0.55).gp(0)
b2.ad(u,s,b1)
for(b0=t.z,b1=b0.length,m=0;m<b0.length;b0.length===b1||(0,B.M)(b0),++m){a7=b0[m]
a0=s*a7.b
t=w+Math.cos(a7.a)*a0
r=v+Math.sin(a7.a)*a0*0.9
a8=1+A.k.E(3.5/a7.b,0,5)
a9=3*a8
q=-Math.sin(a7.a)*a9
o=Math.cos(a7.a)*a9
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
n.c=4.2/Math.sqrt(a8)
n.d=A.bB
k=a7.d
n.r=k.j(A.k.E(a7.b/2,0.2,1)).gp(0)
f=n.G()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=k.j(0.2).gp(0)
o.z=I.pk
f=o.G()
p.drawCircle(t,r,6,f)
f.delete()}},
aw(d){return!0}}
C.aeY.prototype={}
C.Vy.prototype={
U(){var w=x.x,v=x.g
return new C.bkc(new B.cA(null,x.z),new C.Pp(A.cZ),B.a([],w),A.J,A.J,B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.a([],v),A.J,A.J,$,A.bD,0,B.a([],x.X),null,null)}}
C.bkc.prototype={
a_(){this.a2()
this.a_w()
this.p9()},
a_w(){var w,v,u,t,s,r,q,p,o=this,n=new B.e9()
n.d3(5)
w=B.a([],x.x)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.ah(),1.6)
w.push(new C.aeY(t,n.ah()*3.141592653589793*2,(n.ah()-0.5)*0.5*t,25+n.ah()*20))}else{t=Math.pow(n.ah(),0.8)
s=n.au(o.f)
r=n.ah()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.hh()?0:3.141592653589793
q=r+(n.ah()-0.5)*0.25}r=n.ah()
p=t<0.25?35+n.ah()*15:205+n.ah()*50
w.push(new C.aeY(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cxB(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.egc
k.cx=D.egf
w=new B.e9()
w.d3(9)
v=k.cy
A.d.a8(v)
u=B.a([],x.x)
for(t=0;t<900;++t)u.push(new C.aeY(Math.pow(w.ah(),0.8)*0.7,w.ah()*3.141592653589793*2,0,320+w.ah()*30))
A.d.v(v,u)
u=x.g
s=B.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,B.M)(v),++q){p=v[q]
o=p.b
n=p.a
s.push(new B.t(Math.cos(o)*n,Math.sin(o)*n))}k.dx=s
s=B.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,B.M)(v),++q){p=v[q]
o=p.b
n=p.a+0.2
s.push(new B.t(-Math.sin(o)*0.55/Math.sqrt(n),Math.cos(o)*0.55/Math.sqrt(n)))}k.fr=s
v=B.a([],u)
for(s=k.ay,r=x.S,s=B.d1(s,0,B.dB(900,"count",r),B.T(s).c),o=s.$ti,s=new B.bS(s,s.gL(0),o.k("bS<ak.E>")),o=o.k("ak.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new B.t(l*n,Math.sin(m)*n))}k.db=v
v=B.a([],u)
for(u=k.ay,u=B.d1(u,0,B.dB(900,"count",r),B.T(u).c),r=u.$ti,u=new B.bS(u,u.gL(0),r.k("bS<ak.E>")),r=r.k("ak.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new B.t(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
E.dX(110,"",900,0.5,0.45,"sine")},
q6(d){var w,v,u,t,s,r,q,p=this
p.e.fu(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aF(0,p.fx)
s=Math.max(0.25,t.gcH())
r=t.eR(0,s).aJ(0,0.9/(s*s))
w=p.fy.aa(0,r.aJ(0,u))
p.fy=w
v=p.cx.aF(0,r.aJ(0,u))
p.cx=v
w=p.fx.aa(0,w.aJ(0,u))
p.fx=w
v=p.CW.aa(0,v.aJ(0,u))
p.CW=v
q=new C.dZi(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=B.a([B.aJ(r,r,r,r,D.ry,r,r,r,new C.dZ8(s,d),r,r,r,r,"Share",r)],q),o=B.b4(r,r,r,new C.bfT(s,r),A.ax),n=A.w.j(0.5),m=B.m(14),l=B.J(A.bz,A.r,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=B.a([o,B.ao(8,B.p(r,B.d(w,r,r,r,r,r,r,Ab.a93,r,r,r),A.f,r,r,new B.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bT,r,r,r),r,r,10,10,r,r)],q)
l=B.a([],q)
for(v=0;v<3;++v){u=D.dbT[v]
o=s.Q===u.a&&!s.ch
l.push(new C.eX(u.b,o,new C.dZ9(s,u),r,A.hb,r))}l.push(new C.eX("Collide",s.ch,new C.dZa(s),A.yE,A.c4,r))
o=B.a([new C.hj(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=C.lU(A.hb,""+n,"Arms",6,2,new C.dZb(s),n)
l=s.r
A.d.v(o,B.a([n,C.lU(A.hb,A.k.ac(l,1),"Winding",6,0.8,new C.dZc(s),l)],q))}n=s.as
o.push(C.lU(A.hb,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new C.dZd(s),n))
n=s.ax
o.push(C.lU(A.hb,A.k.ac(n,1)+"x","Speed",4,0,new C.dZe(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.m6:D.GT
o.push(new C.hj(B.a([new C.eX("Dark matter",n,new C.dZf(s),r,A.bv,r),new C.eX("You are here",l,new C.dZg(s),r,A.aT,r),new C.eX("Music",w,new C.dZh(s),t,A.hb,r)],q),r,r))
return C.oz(A.hb,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new B.ex(new B.an(A.a_,r,A.b0,A.t,m,r),s.d),"GALAXY",B.x(o,A.m,r,A.e,A.Q,0,A.p))}}
C.bfT.prototype={
a1(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.S()
w=B.I()
w.r=D.bnh.gp(0)
a3.aO(new B.a3(0,0,0+a1,0+a2),w)
v=new B.e9()
v.d3(3)
for(w=a3.a,u=0;u<90;++u){t=v.ah()
s=v.ah()
r=v.ah()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=A.c.j(0.15+v.ah()*0.4).gp(0)
p=q.G()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new B.t(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=B.I()
t.sam(new B.c0(A.A,0.5,A.x,a0,0,B.a([A.aC.j(0.32),A.aC.j(0.12),A.K],x.O),G.a2Y,a0).aB(0,B.bX(o,a2)))
a3.ad(o,a2,t)}m=new C.deB(a1.as)
a2=n*0.3
t=B.I()
t.sam(new B.c0(A.A,0.5,A.x,a0,0,B.a([A.h1.j(0.85),A.aD.j(0.3),A.K],x.O),a0,a0).aB(0,B.bX(o,a2)))
a3.ad(o,a2,t)
if(!a1.ch){l=B.I()
for(a2=a1.ay,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.M)(a2),++k){j=a2[k]
s=j.a
i=a1.x?1/(0.25+s*0.9):1/Math.pow(s+0.18,1.5)*0.35
r=a1.at
q=Math.min(i,6)
h=j.b
g=m.$6(Math.cos(h)*s,Math.sin(h)*s,j.c,o,r*q*0.5,n)
q=j.d
r=A.k.F(q,360)
l.r=new L.uC(1,r,q>200?0.45:0.55,1).lH().j(0.35+(1-s)*0.5).gp(0)
s=s<0.3?1.3:1
p=l.G()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.S()
a2=B.I()
a2.b=A.a9
a2.c=1.6
a2.r=A.aT.gp(0)
a3.ad(g,9,a2)
f=B.fu(a0,a0,a0,a0,D.fc0,A.a3,A.bZ,a0,A.dA,A.bW)
f.ej()
f.a1(a3,g.aa(0,new B.t(-f.b.c/2,12)))}}else{e=n*0.8
l=B.I()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.M)(a2),++k){d=a2[k]
l.r=D.boE.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.G()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.M)(a2),++k){d=a2[k]
l.r=D.biW.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.G()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.S()
w=B.I()
w.r=A.h1.gp(0)
a3.ad(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=B.I()
w.r=A.ib.gp(0)
a3.ad(a1,5,w)}},
aw(d){return!0}}
C.Wa.prototype={
U(){return new C.bl0(new B.cA(null,x.z),new C.Pp(A.cZ),$,A.bD,0,B.a([],x.X),null,null)}}
C.bl0.prototype={
a_(){this.a2()
this.p9()},
q6(d){var w,v,u,t=this
t.e.fu(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.F(t.r+d*0.04*v,1)
else{w=A.k.F(t.w+d*0.05*v,1)
t.w=w
u=A.k.bj(w*4)
if(u!==A.k.bj(t.as))C.q0("bell",60+u*4,500,0.35)
t.as=u}},
gctc(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcjw(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=B.a([B.aJ(q,q,q,q,D.ry,q,q,q,new C.esK(r,d),q,q,q,q,"Share",q)],p),n=B.E(new B.ex(B.b4(q,q,q,new C.bri(r,q),A.fC),r.d),1)
if(r.f==="seasons")w=r.gctc()
else{w=r.gcjw()
v=A.k.ao(A.k.E(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=B.x(B.a([n,B.p(q,B.d(w,q,q,q,q,q,q,A4.Uw,A.L,q,q),A.f,q,q,q,q,q,q,q,M.ajH,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A1.yO:A.ij
t=r.Q
s=t?A.m6:D.GT
s=B.a([new C.hj(B.a([new C.eX("Seasons",n==="seasons",new C.esL(r),A.Co,A.bt,q),new C.eX("Moon phases",n==="moon",new C.esM(r),A.w7,A.bt,q),new C.eX(u,!1,new C.esN(r),v,A.bt,q),new C.eX("Music",t,new C.esO(r),s,A.bt,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=C.lU(A.bt,D.dba[A.o.F(A.k.bj(n*12),12)],"Month",1,0,new C.esP(r),n)
v=r.z
A.d.v(s,B.a([n,C.lU(A.bt,A.k.ac(v,1)+"\xb0","Tilt",90,0,new C.esQ(r),v)],p))}else{p=r.w
s.push(C.lU(A.bt,""+(A.k.bj(p*29.5)+1),"Day of month",1,0,new C.esR(r),p))}p=r.y
s.push(C.lU(A.bt,A.k.ac(p,1)+"x","Speed",4,0.2,new C.esS(r),p))
return C.oz(A.bt,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",B.x(s,A.m,q,A.e,A.Q,0,A.p))}}
C.bri.prototype={
a1(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.S(),b8=B.I()
b8.r=D.B3.gp(0)
b9.aO(new B.a3(0,0,0+b5,0+b6),b8)
w=new B.e9()
w.d3(4)
for(b8=b9.a,v=0;v<70;++v){u=w.ah()
t=w.ah()
s=w.ah()
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.c.j(0.2+w.ah()*0.4).gp(0)
q=r.G()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new B.t(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=B.bJ(p,n*2,o*2)
t=B.I()
t.b=A.a9
t.c=1
t.r=A.aZ.gp(0)
b9.dO(u,t)
t=B.I()
t.sam(D.eqx.aB(0,B.bX(p,34)))
b9.ad(p,22,t)
m=s.r*2*3.141592653589793
l=p.aa(0,new B.t(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aF(0,l).eR(0,p.aF(0,l).gcH())
J.bl(b8.save())
b8.translate(l.a,l.b)
s=B.I()
s.r=D.bkY.gp(0)
b9.ad(A.J,k,s)
J.bl(b8.save())
b7=new B.aF(b7.r,A.ag,b4,b4,B.a([],x.v))
b7.D(new B.jE(B.bX(A.J,k)))
b9.mE(0,b7)
b7=i.aJ(0,k).aJ(0,0.35)
s=k*1.1
b6=B.I()
b6.sam(D.eqG.aB(0,B.bX(A.J,s)))
b9.ad(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new B.t(s,b6)
b7=new B.t(-s,-b6).aJ(0,k).aJ(0,1.7)
b5=h.aJ(0,k).aJ(0,1.7)
t=B.I()
t.c=2
t.r=A.cs.gp(0)
b9.bo(b7,b5,t)
t=h.aJ(0,k).aJ(0,1.7)
b5=B.I()
b5.r=A.cs.gp(0)
b9.ad(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=B.fu(b4,b4,b4,b4,B.cS(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aTr,b5),A.a3,A.bZ,b4,A.dA,A.bW)
f.ej()
f.a1(b9,l.aa(0,new B.t(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=B.I()
r.b=A.a9
r.c=1
r.r=A.aZ.gp(0)
b9.ad(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a0.r=A.aT.j(0.6).gp(0)
a0.c=2
q=a0.G()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=B.I()
r.sam(new B.c0(new B.df(-0.5,0),1.1,A.x,b4,0,B.a([D.bg3,D.ahy],x.O),D.d1W,b4).aB(0,B.bX(p,k)))
b9.ad(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.aa(0,new B.t(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=B.I()
r.r=D.bcS.gp(0)
b9.ad(a1,a2,r)
J.bl(b8.save())
b7=b7.r
r=x.v
d=new B.aF(b7,A.ag,b4,b4,B.a([],r))
d.D(new B.jE(B.bX(a1,a2)))
b9.mE(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=B.I()
a3.r=A.bO.gp(0)
b9.aO(new B.a3(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aF(0,p).eR(0,a1.aF(0,p).gcH())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.auC[a5]
a7=new B.ap(A.R,A.N,A.U,A.V,A.S)
a7.r=A.aQ.j(0.45).gp(0)
a7.z=A.lJ
q=a7.G()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new B.t(u,t)
a9=Math.min(b5,b6)*0.1
b6=B.I()
b6.r=D.bcN.gp(0)
b9.ad(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bl(b8.save())
b6=new B.aF(b7,A.ag,b4,b4,B.a([],r))
b6.D(new B.jE(B.bX(a8,a9)))
b9.mE(0,b6)
s=s.w
b1=new B.aF(b7,A.ag,b4,b4,B.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.D(new B.aX(u,b5))
b6=b2>0
b1.aDg(new B.t(u,t+a9),b6,new B.aQ(a9,a9))
if(b0<0.5)b6=b2<0
b1.aDg(new B.t(u,b5),b6,new B.aQ(a9*Math.abs(1-2*b0),a9))
b6=B.I()
b6.r=A.bO.gp(0)
b9.aG(b1,b6)
b8.restore()
b8=B.I()
b8.b=A.a9
b8.c=1
b8.r=A.aZ.gp(0)
b9.ad(a8,a9,b8)
b3=B.fu(b4,b4,b4,b4,D.fc1,A.a3,A.bZ,b4,A.dA,A.bW)
b3.ej()
b3.a1(b9,a8.aa(0,new B.t(-b3.b.c/2,a9+6)))}},
aw(d){return!0}}
C.aLF.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.bxA.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bw4()}}
C.aM1.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.bxG.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bws()}}
C.aMy.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.bxP.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bx_()}}
var z=a.updateTypes(["R(tF)","~()","R(a4C)","aA<~>()","R(CC)","H(tF,H)","L(L,tF)","R(Cy)","R(Zw)","R(abA)","cu(abg)","R(vf)","R(a3j)","R(ns)","R(abO)","W8()","Wn()","W9()","Wy()","UL()","af2(Y,H)","adU(Y,H)","Vm()","R(mJ)","n(ee)","R(aeR)","R(a0L)","R(CM)","R(ac3)","R(adX)","~(a8<@,@>)","H(H,qU)","H(H,CC)","n(qU)","WA()","qU?(CC)","R(qU)","v(n,a0y)","R(Qc)","R(aau)","H(Cy,Cy)","UG()","~(xb,n,t,u,L)","~(n,tF)","~(AJ)","L(PU)","Nz(Y)","V5(Y,bt<L>,bt<L>)","R(PU)","Vu()","UH()","Vl()","W3()","Wd()","Wx()","W2()","~(n)","VN(Y)","R(abf)","VA()","Wm()","VB()","UF()","Vy()","We()","Wa()","a8t()","WE()","~(qU,ai<n>,H)"])
C.bSu.prototype={
$0(){var w,v,u,t=this.a
if(t.a)return-1
w=this.b
v=w.gR(w)
u=B.ed(v.gdL(v))
if(!w.C())t.a=!0
return u},
$S:92}
C.fzm.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+23}
C.foW.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gI(d.e.split(". "))+"."},
$S:z+24}
C.fw6.prototype={
$1(d){var w
if(!this.a.LY(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fw7.prototype={
$1(d){return d.x},
$S:z+0}
C.fzj.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fzk.prototype={
$1(d){var w
if(!this.a.LY(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fzl.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.ebF.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ebG.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.z(this.b,this.c))},
$S:0}
C.ebH.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd1(v).Q
v.toString
w.me(v,A.dT,A.iw)}},
$S:9}
C.ebS.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.ebT.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.ebO.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.ebM.prototype={
$2(d,e){var w=this.a
w.r.push(B.cL(B.dE(0,0,0,d,0,0),new C.ebN(w,this.b,e)))},
$S:1840}
C.ebN.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.ebP.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gWu().akg(0,u[1],u[2],u[3])
u[4].bQ(0,new C.ebK(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dX(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.ebL(w.a,v,w.f,w.r))},
$S:0}
C.ebK.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:193}
C.ebL.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.k.bj(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ebQ.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gWu().akZ(t,u[1],s,u[3])
E.dX(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.ebJ(w.a,v,w.e,w.f))},
$S:0}
C.ebJ.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.k.bj(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ebR.prototype={
$0(){E.dX(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.ebI(w,this.b))},
$S:0}
C.ebI.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.ebW.prototype={
$0(){var w=this.a
return w.m(new C.ebV(w))},
$S:0}
C.ebV.prototype={
$0(){return this.a.at=!0},
$S:0}
C.ebX.prototype={
$0(){var w=this.a
return w.m(new C.ebU(w))},
$S:0}
C.ebU.prototype={
$0(){return this.a.at=!1},
$S:0}
C.ebY.prototype={
$0(){var w=this.a
w.f.saX(0,this.b)
w.Pr()},
$S:0}
C.ebZ.prototype={
$0(){return this.a.Yx(this.b)},
$S:0}
C.ec_.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Pr():w.aWo()},
$S:2}
C.ec0.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Pr():w.aWo()},
$S:0}
C.epV.prototype={
$2(d,e){return d+e},
$S:1841}
C.eqe.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eqd(w,d))},
$S:1842}
C.eqd.prototype={
$0(){var w=B.aK(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eqf.prototype={
$0(){},
$S:0}
C.eqg.prototype={
$0(){},
$S:0}
C.epX.prototype={
$0(){return this.a.m(new C.epW(this.b,this.c))},
$S:0}
C.epW.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.epM.prototype={
$1(d){return this.a.cx===d},
$S:33}
C.epN.prototype={
$1(d){return this.a.cx=d},
$S:29}
C.epO.prototype={
$1(d){return this.a.cy===d},
$S:33}
C.epP.prototype={
$1(d){return this.a.cy=d},
$S:29}
C.epQ.prototype={
$1(d){return this.a.db===d},
$S:33}
C.epR.prototype={
$1(d){return this.a.db=d},
$S:29}
C.epS.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:33}
C.epT.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.M(0,d)},
$S:29}
C.epU.prototype={
$0(){var w=this.a
return w.m(w.gawY())},
$S:0}
C.epK.prototype={
$1(d){return this.a.$1(!0)},
$S:80}
C.epL.prototype={
$1(d){return this.a.$1(!1)},
$S:124}
C.epJ.prototype={
$1(d){return this.a.$1(!1)},
$S:172}
C.eq7.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.au(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.bhC(o,p),n)
w=this.b
v=C.bA8("WORLD",w.a,w.c)
u=C.bA8("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.cs:A.bj
t=C.bA8("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.CL[o.db].d?A.cs:A.c
q=x.p
s=B.a([v,u,t,C.bA8("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(C.bA8("HEIGHT",""+A.k.V(A.k.E(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.B(s,A.m,p,A.iC,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bEW(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.rB[w].a+".":"You landed on every world!"
v=B.a([new C.j7(A.og,"Again",new C.eq2(o),A.c,p),new C.j7(A.p5,"Rebuild",new C.eq3(o),A.aT,p)],q)
if(o.d+1<7)v.push(new C.j7(A.jQ,"Next world",new C.eq4(o),A.bj,p))
n.push(C.hnb("Perfect landing!",w,A.bj,v))}if(o.as==="crashed")n.push(C.hnb("Crash!",o.at,A.cs,B.a([new C.j7(A.og,"Try again",new C.eq5(o),A.bj,p),new C.j7(A.p5,"Rebuild",new C.eq6(o),A.aT,p)],q)))
return new B.an(A.a_,p,A.b0,A.t,n,p)},
$S:70}
C.eq2.prototype={
$0(){var w=this.a
return w.m(w.gawY())},
$S:0}
C.eq3.prototype={
$0(){var w=this.a
return w.m(new C.eq_(w))},
$S:0}
C.eq_.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eq4.prototype={
$0(){var w=this.a
return w.m(new C.epZ(w))},
$S:0}
C.epZ.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.eq5.prototype={
$0(){var w=this.a
return w.m(w.gawY())},
$S:0}
C.eq6.prototype={
$0(){var w=this.a
return w.m(new C.epY(w))},
$S:0}
C.epY.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eq8.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.eq1(v,w))},
$S:0}
C.eq1.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.eq9.prototype={
$1(d){return this.a.y=d},
$S:8}
C.eqa.prototype={
$1(d){return this.a.Q=d},
$S:8}
C.eqb.prototype={
$1(d){return this.a.z=d},
$S:8}
C.eqc.prototype={
$0(){var w=this.a
return w.m(new C.eq0(w))},
$S:0}
C.eq0.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dJd.prototype={
$0(){var w=0,v=B.j(x.P),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=$.his
if(q==null)q=$.his=C.cJx()
w=3
return B.b(B.iP(B.a([q,$.r3().cRA("assets/data/three.min.js")],x.aJ),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kN(0,B.cP(J.q(s,1)))
q.m(new C.dJc(q,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:50}
C.dJc.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
C.dIQ.prototype={
$0(){return this.a.bWw(B.aU(J.q(this.b,"group")))},
$S:0}
C.dIR.prototype={
$1(d){return A.a.aZ(A.o.fW(A.o.E(A.k.V(d*255),0,255),16),2,"0")},
$S:337}
C.dJe.prototype={
$0(){return C.a8s("kick",0.25)},
$S:0}
C.dIS.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dIT.prototype={
$1(d){return d.a===this.a},
$S:z+12}
C.dIU.prototype={
$0(){return C.a8s("kick",0.5)},
$S:0}
C.dIV.prototype={
$0(){return E.dX(1300+this.a.R8.au(900),"",40,0,0.2,"square")},
$S:0}
C.dIX.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.ch
if(w===2)w=1
else w=w===1?0:2
u.ch=w}else{w=this.a
v=w.ay
if(v.t(0,u))v.W(0,u)
else{v.M(0,u)
if(w.ch===2)w.ch=1}if(v.a===0&&w.ch===0)w.ch=2
u=w}if(u.cx!=null&&!A.d.b5(u.d.e,new C.dIW(u)))u.cx=null
u.go=0},
$S:0}
C.dIW.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.ayH(d)},
$S:z+12}
C.dIN.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
C.dIO.prototype={
$0(){var w=this.a
return w.m(w.gc61())},
$S:0}
C.dIP.prototype={
$0(){return this.a.ahT(null)},
$S:0}
C.dJ3.prototype={
$0(){var w=this.a.as
return w==null?null:w.f3(0,B.G(["t","shot"],x.N,x.A))},
$S:0}
C.dJ4.prototype={
$0(){return this.a.cBO(this.b.a)},
$S:0}
C.dJ5.prototype={
$0(){return this.a.ahT(this.b)},
$S:0}
C.dJ6.prototype={
$1(d){var w=this.a
return w.m(new C.dJ2(w,d))},
$S:7}
C.dJ2.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.dJ7.prototype={
$0(){var w=this.a
return w.m(new C.dJ1(w,this.b))},
$S:0}
C.dJ1.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.dJ8.prototype={
$0(){var w=this.a
return w.m(new C.dJ0(w))},
$S:0}
C.dJ0.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.dJ9.prototype={
$0(){var w=this.a
return w.m(new C.dJ_(w))},
$S:0}
C.dJ_.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f3(0,B.G(["t","reset"],x.N,x.A))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.L_},
$S:0}
C.dJa.prototype={
$0(){var w=this.a
return w.m(new C.dIZ(w))},
$S:0}
C.dIZ.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aZ4()
else w.p2=null},
$S:0}
C.dJb.prototype={
$0(){var w=this.a
return w.m(new C.dIY(w))},
$S:0}
C.dIY.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
C.c3R.prototype={
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
$S:335}
C.c3S.prototype={
$1(d){var w=new B.rW([],[]).pM(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:481}
C.fiI.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)&&w.h(d,1)},
$S:205}
C.fiJ.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)||w.h(d,1)},
$S:205}
C.fiK.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)!==w.h(d,1)},
$S:205}
C.fiR.prototype={
$1(d){return!J.q(d,0)},
$S:205}
C.fiS.prototype={
$1(d){var w=J.a5(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:205}
C.fiT.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:205}
C.dKT.prototype={
$1(d){return this.a.atF(0)},
$S:9}
C.dKx.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.i41(),B.T(w).k("N<1,H>")).fH(0)},
$S:0}
C.dKA.prototype={
$1(d){return""+d},
$S:81}
C.dKU.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dKv.prototype={
$1(d){return this.a.atF(this.b)},
$S:9}
C.dKw.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.axs(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mA(0,d,a1.m5(0.15,0.3))
u=a1.mA(0,d,a1.m5(0.15,0.62))
t=a1.mA(0,"and",a1.m5(0.48,0.46))
s=a1.mA(0,a0,a1.m5(0.82,0.46))
a1=t.a
w.push(new C.ns(v.a,a1,0))
w.push(new C.ns(u.a,a1,1))
w.push(new C.ns(a1,s.a,0))
break
case 1:v=a1.mA(0,d,a1.m5(0.12,0.25))
u=a1.mA(0,d,a1.m5(0.12,0.65))
r=a1.mA(0,"xor",a1.m5(0.46,0.25))
q=a1.mA(0,"and",a1.m5(0.46,0.65))
p=a1.axr(0,a0,a1.m5(0.82,0.25),0)
o=a1.axr(0,a0,a1.m5(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.ns(a1,n,0))
m=u.a
w.push(new C.ns(m,n,1))
l=q.a
w.push(new C.ns(a1,l,0))
w.push(new C.ns(m,l,1))
w.push(new C.ns(n,p.a,0))
w.push(new C.ns(l,o.a,0))
break
case 2:k=a1.mA(0,"clock",a1.m5(0.15,0.4))
j=a1.mA(0,"not",a1.m5(0.45,0.65))
s=a1.mA(0,a0,a1.m5(0.82,0.3))
i=a1.mA(0,"buzzer",a1.m5(0.82,0.65))
a1=k.a
w.push(new C.ns(a1,s.a,0))
n=j.a
w.push(new C.ns(a1,n,0))
w.push(new C.ns(n,i.a,0))
break
default:h=a1.mA(0,d,a1.m5(0.12,0.25))
g=a1.mA(0,d,a1.m5(0.12,0.7))
f=a1.mA(0,"nor",a1.m5(0.5,0.25))
e=a1.mA(0,"nor",a1.m5(0.5,0.7))
s=a1.mA(0,a0,a1.m5(0.86,0.25))
a1=f.a
w.push(new C.ns(g.a,a1,0))
n=e.a
w.push(new C.ns(n,a1,1))
w.push(new C.ns(h.a,n,0))
w.push(new C.ns(a1,n,1))
w.push(new C.ns(a1,s.a,0))}},
$S:0}
C.dKB.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.axs(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.Cy(p,"switch",new B.t(0.14*q.a,r*q.b),0))}o.mA(0,w.e,o.m5(0.86,0.5))},
$S:0}
C.dKq.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dKr.prototype={
$2(d,e){return A.k.aK(d.c.b,e.c.b)},
$S:z+40}
C.dKs.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dKt.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dKu.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.adc(this.c)
if(v.ax)C.J8("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gI(w)
v.CW=!1
if(v.ax)E.dX(140,"",250,0,0.3,"square")}},
$S:0}
C.dKC.prototype={
$0(){},
$S:0}
C.dKD.prototype={
$0(){return A.d.cG(this.a.e,this.b)},
$S:0}
C.dKE.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dKz.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bu(w.e,new C.dKy(v))
w.cy=null},
$S:0}
C.dKy.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+13}
C.dKp.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mA(0,this.b,new B.t(w.x.a*(0.3+v.ah()*0.4),w.x.b*(0.2+v.ah()*0.6))).a},
$S:0}
C.dKN.prototype={
$0(){var w=this.a
return w.m(new C.dKM(w))},
$S:0}
C.dKM.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dKO.prototype={
$2(d,e){var w=null,v=this.a,u=new B.au(e.b,e.d)
v.x=u
return B.aB(A.ca,B.jF(B.b4(w,w,w,new C.bbF(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dKH(v),w,w,w,new C.dKI(v),new C.dKJ(v),new C.dKK(v),w,w,w,w,w,w,w,w,w,w,new C.dKL(v),w,w,w,!1,A.a5)},
$S:36}
C.dKL.prototype={
$1(d){return this.a.c7P(d.b)},
$S:68}
C.dKJ.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cgg(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aye(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aF(0,u)}},
$S:49}
C.dKK.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.t(A.k.E(w.a+u.Q.a,46,u.x.a-46),A.k.E(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:21}
C.dKI.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c_5(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bu(v,new C.dKF(w))
u=t.as
u.toString
v.push(new C.ns(u,w.a,w.b))
B.kt()}}t.z=t.as=null},
$S:40}
C.dKF.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+13}
C.dKH.prototype={
$1(d){return this.a.awg(d.b)},
$S:284}
C.dKP.prototype={
$0(){return this.a.bAL(this.b.a)},
$S:0}
C.dKQ.prototype={
$0(){return this.a.atF(this.b.a)},
$S:0}
C.dKR.prototype={
$0(){var w=this.a
return w.m(new C.dKG(w))},
$S:0}
C.dKG.prototype={
$0(){var w=this.a
w.axs(0)
w.ay=null},
$S:0}
C.dKS.prototype={
$0(){return this.a.cxy(this.b)},
$S:0}
C.cQr.prototype={
$0(){var w=this,v=null,u=B.fu(v,v,v,v,B.cS(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a3,A.bZ,v,A.dA,A.bW)
u.ej()
return u},
$S:264}
C.dQJ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dQI.prototype={
$0(){return this.a.d=null},
$S:0}
C.dQL.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c0T()},
$S:126}
C.dQK.prototype={
$0(){return B.a4(this.a,!1).ib()},
$S:0}
C.fj8.prototype={
$0(){return D.e8A},
$S:z+34}
C.fj9.prototype={
$0(){return D.dHQ},
$S:z+22}
C.fja.prototype={
$0(){return D.dEM},
$S:z+41}
C.fjb.prototype={
$0(){return D.e8_},
$S:z+66}
C.fjc.prototype={
$0(){return D.dQR},
$S:z+15}
C.fjd.prototype={
$0(){return D.e7I},
$S:z+16}
C.fje.prototype={
$0(){return D.e5K},
$S:z+17}
C.fjf.prototype={
$0(){return D.e7Z},
$S:z+18}
C.fjg.prototype={
$0(){return D.dH_},
$S:z+19}
C.f_6.prototype={
$2(d,e){return new C.af2($.bEB()[e],new C.f_5(e,this.a),null)},
$S:z+20}
C.f_5.prototype={
$0(){var w=this.a,v=F.aFT.h(0,$.bEB()[w].a)
$.asd=v==null?"music":v
B.a4(this.b,!1).cg(B.e_(new C.f_3(w),!1,null,x.H))},
$S:0}
C.f_3.prototype={
$1(d){return $.bEB()[this.a].e.$0()},
$S:39}
C.f_7.prototype={
$2(d,e){return new C.adU(D.ayw[e],new C.f_4(this.a,e),null)},
$S:z+21}
C.f_4.prototype={
$0(){return this.a.d.$1(D.ayw[this.b])},
$S:0}
C.eZN.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eZM.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eZL.prototype={
$1(d){var w=this
return new B.dY(new C.eZK(w.a,w.b,w.c,w.d),null)},
$S:20}
C.eZK.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.l,a1=B.aI(a2,d,a0).w
a0=B.aI(a2,d,a0).w
w=x.p
v=B.a([D.fxV,A.av,D.fEC,A.ad],w)
for(u=e.d,t=e.a,s=x.k,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new B.aQ(12,12)
m=new B.aQ(12,12)
m=B.a([new B.bA(1,A.bd,B.aN(d,A.Z,!1,d,!0,A.t,d,B.aO(),r[p],d,d,d,d,d,2,new B.e3(d,d,d,d,d,d,d,d,d,d,"Title",d,I.E1,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b5(4,new B.bk(n,n,n,n),A.a0),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ak,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.ab,d,d,d,d,d,d,d,d,d,d,d,A.jj,!0,A.a3,d,A.ao,d,d,d,d),d),A.ac,new B.bA(2,A.bd,B.aN(d,A.Z,!1,d,!0,A.t,d,B.aO(),q[p],d,d,d,d,d,2,new B.e3(d,d,d,d,d,d,d,d,d,d,"Small line",d,I.E1,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b5(4,new B.bk(m,m,m,m),A.a0),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ak,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.ab,d,d,d,d,d,d,d,d,d,d,d,A.jj,!0,A.a3,d,A.ao,d,d,d,d),d)],w)
n=B.a([],w)
for(l=0;l<30;++l){k=D.drV[l]
j=new B.aQ(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}h=A.d.gI(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}g=A.d.gI(i)}else g=A.bz
f=new B.ay(g,u[p].A(0,k)?1.8:1,A.r,-1)
n.push(B.aB(d,B.p(d,B.X(k,u[p].A(0,k)?A.c:A.aR,d,d,d,22),A.f,d,d,new B.o(h,d,new B.bK(f,f,f,f),new B.bk(j,j,j,j),d,d,A.n),d,d,d,A.fx,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eZI(a3,p,u,k),d,d,d,d,d,d,!1,A.a5))}A.d.v(v,B.a([new B.y("SLAB "+o,d,D.fnu,d,d,d,d,d,d,d,d,d),A.am,new B.cc(A.aN,A.e,A.j,A.m,d,A.p,d,0,m,d),A.O,new B.a7(d,44,B.ct(n,d,d,d,d,A.aN,!1),d),A.aA],w))}v.push(B.bI(A.wW,new C.eZJ(t,r,q,u,a2),d))
return new B.D(new B.Q(0,0,0,a1.f.d),B.bn(!0,new B.cT(new B.aZ(0,1/0,0,a0.a.b*0.86),B.ct(v,d,A3.yd,d,d,A.ah,!0),d),!0,!1,A.af,!0,!0),d)},
$S:108}
C.eZI.prototype={
$0(){var w=this
return w.a.$1(new C.eZH(w.b,w.c,w.d))},
$S:0}
C.eZH.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.eZJ.prototype={
$0(){var w=this,v=w.a
v.m(new C.eZG(v,w.b,w.c,w.d))
B.a4(w.e,!1).O(null)},
$S:0}
C.eZG.prototype={
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
C.eZV.prototype={
$0(){var w=this.a
return w.m(new C.eZU(w))},
$S:0}
C.eZU.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.eZW.prototype={
$0(){return C.yR(this.b,this.a.f,"scene")},
$S:0}
C.eZX.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ar(A.d.gI(u),A.d.gak(u),0.4)
u.toString
w=this.a.gZU().x
w===$&&B.c()
return B.c1(v,new B.o(v,v,v,v,v,new B.c0(D.aZE,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c0],x.O),v,v),A.n),A.bg)},
$S:329}
C.eZY.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(B.eS(A.A,B.c9(new B.h5(B.a([u.guf(),u.gZU()],x.dS)),new C.eZT(u,this.b,v),w),A.f,A.e1),w,w,w)},
$S:238}
C.eZT.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.guf().x
r===$&&B.c()
w=r<0.9?1:1-C.brC(r,0.9,0.98)
v=s.gZU().x
v===$&&B.c()
u=A.dw.av(0,v)
switch(s.gaxt().a){case 0:s=s.bzX(t.b,r,u,t.c)
break
case 1:s=s.bQE(t.b,r,u,t.c)
break
case 2:s=s.cCg(t.b,r,u,t.c)
break
case 3:s=s.bCS(t.b,r,u,t.c)
break
case 4:s=s.bGb(t.b,r,u,t.c)
break
case 5:s=s.c7Q(t.b,r,u,t.c)
break
default:s=null}return B.d9(s,w)},
$S:202}
C.eZZ.prototype={
$2(d,e){var w=B.avK(this.b),v=this.c.d,u=B.ar(A.d.gI(v),A.d.gak(v),0.4)
u.toString
v=B.ar(A.d.gI(v),A.d.gak(v),0.4)
v.toString
v=w.cKZ(u,A.bz,v,3.5)
u=this.a
w=u.guf().x
w===$&&B.c()
return B.aag(B.l5(null,null,null,1,0,new C.eZS(u),A.k.E(w,0,1)),v)},
$S:1845}
C.eZS.prototype={
$1(d){var w=this.a
w.guf().sp(0,d)
if(w.as)w.m(new C.eZO(w))},
$S:7}
C.eZO.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f__.prototype={
$0(){var w=this.a
w.guf().sp(0,0)
w.aeh()},
$S:0}
C.f_0.prototype={
$1(d){var w=this.a
w.m(new C.eZR(w,d))
if(w.as)w.aeh()},
$S:7}
C.eZR.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f_1.prototype={
$0(){var w=this.a
w.m(new C.eZQ(w,this.b))
w.guf().sp(0,0)
if(w.as)w.aeh()},
$S:0}
C.eZQ.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.f_2.prototype={
$0(){var w=this.a
return w.m(new C.eZP(w,this.b))},
$S:0}
C.eZP.prototype={
$0(){var w=B.C(this.b,x.k)
return this.a.w=w},
$S:0}
C.eZE.prototype={
$2(d,e){return A.k.aK(d.a,e.a)},
$S:1846}
C.eZF.prototype={
$1(d){return d.b},
$S:1847}
C.dlp.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dlq.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dlm.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dln.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dlo.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dlr.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dls.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dlt.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dlu.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dlv.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dlw.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dlx.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dly.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dlz.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+14}
C.epf.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ep4.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.ep6.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.ep7.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.epa.prototype={
$1(d){var w=D.mP.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.epb.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.T(q),o=x.dg,n=B.C(new B.ec(new B.cQ(new B.Z(q,new C.epc(d),p.k("Z<1>")),new C.epd(r),p.k("cQ<1,qU?>")),o),o.k("K.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aH(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.M)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+68}
C.epc.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.epd.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.ep8.prototype={
$1(d){return D.mP.h(0,d.b).c===D.xd},
$S:z+36}
C.ep9.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.epF.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.E((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vi(0,u)
w.a6J(A.o.ao(v,1000))},
$S:9}
C.epe.prototype={
$0(){},
$S:0}
C.ep0.prototype={
$0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$$0)
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
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$$0,v)},
$S:1}
C.eph.prototype={
$1(d){var w=null,v=this.a.b
return B.bn(!0,B.x(B.a([A.O,B.dL(!1,w,w,w,!0,w,w,w,!0,w,B.X(D.mP.h(0,v).b,D.mP.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fQ0,w,B.d(D.mP.h(0,v).a,w,w,w,w,w,w,A.fQ,w,w,w),w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,Z.apr,w,w,w,w,new C.epg(d),!1,w,w,w,w,w,w,w,D.fHr,w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.epg.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.epj.prototype={
$1(d){var w,v,u=null,t=B.aI(d,u,x.l).w,s=B.a([D.ejx],x.p)
for(w=0;w<6;++w){v=D.ayT[w]
s.push(B.dL(!1,u,u,u,!0,u,u,u,!0,u,D.bXY,u,u,u,u,new C.epi(d,v),!1,u,u,u,u,u,new B.y(v.b,u,A.lN,u,u,u,u,u,u,u,u,u),u,new B.y(v.a,u,A.fQ,u,u,u,u,u,u,u,u,u),u,u,u))}return B.bn(!0,new B.cT(new B.aZ(0,1/0,0,t.a.b*0.7),B.ct(s,u,D.bCu,u,u,A.ah,!0),u),!0,!1,A.af,!0,!0)},
$S:26}
C.epi.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.ep3.prototype={
$1(d){var w=null
return B.em(B.a([B.bN(!1,A.di,w,w,!0,w,w,new C.ep1(d),w,w),B.bN(!1,A.E6,w,w,!0,w,w,new C.ep2(d),w,w)],x.p),w,w,F.nf,D.fEN,w,w,w,w,D.fHJ,w)},
$S:18}
C.ep1.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.ep2.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.epD.prototype={
$0(){var w=this.a
return w.m(new C.epC(w))},
$S:0}
C.epC.prototype={
$0(){return this.a.r=!1},
$S:0}
C.epE.prototype={
$2(d,e){var w,v,u,t=null,s=new B.au(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.mq(new C.ept(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b92:t
v=B.a([B.b4(u,t,t,new C.bhA(w,v,new C.epu(r),new C.epv(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,B.e2(B.c9(w,new C.epw(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bHR())
return B.aB(A.ca,B.jF(new B.an(A.a_,t,A.b0,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.epx(r),t,r.gchz(),t,new C.epy(r),new C.epz(r),new C.epA(r),t,t,t,t,t,t,t,t,t,t,new C.epB(r),t,t,t,!1,A.a5)},
$S:36}
C.ept.prototype={
$0(){return this.a.ach(this.b)},
$S:0}
C.epB.prototype={
$1(d){return this.a.cA4(d.b)},
$S:68}
C.epz.prototype={
$1(d){return this.a.chA(d.b)},
$S:49}
C.epA.prototype={
$1(d){return this.a.chB(d.b)},
$S:21}
C.epy.prototype={
$1(d){return this.a.b1o()},
$S:40}
C.epx.prototype={
$1(d){return this.a.acY(d.b)},
$S:284}
C.epu.prototype={
$0(){return this.a.z},
$S:649}
C.epv.prototype={
$0(){return this.a.Q},
$S:715}
C.epw.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bM6()
if(p.length===0)return A.bJ
w=A.w.j(0.55)
v=B.m(14)
u=B.J(A.bz,A.r,1)
t=B.a([D.fCe,A.cL],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.M)(p),++r)t.push(new B.y(p[r],q,D.fm9,q,q,q,q,A.a2,q,2,q,q))
return B.p(q,B.x(t,A.E,q,A.e,A.Q,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.hg,q,q,q)},
$S:58}
C.ep5.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.m(12),t=B.J(e.j(0.6),A.r,1),s=x.p
return new B.D(A.ea,B.B(B.a([B.p(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bc,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,A4.Uw,w,w,w),A.bA,B.d(g,w,w,w,w,w,w,F.UE,w,w,w)],s),A.E,w,A.e,A.j,0,A.p),1)],s),A.E,w,A.e,A.j,0,w,w),w)},
$S:1849}
C.epp.prototype={
$0(){var w=this.a.c
w.toString
return B.a4(w,!1).ib()},
$S:0}
C.epq.prototype={
$0(){var w=this.a
return w.m(new C.epo(w))},
$S:0}
C.epo.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.epr.prototype={
$0(){var w=this.a
return w.m(new C.epn(w))},
$S:0}
C.epn.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.eps.prototype={
$0(){var w=this.a
return w.m(new C.epm(w))},
$S:0}
C.epm.prototype={
$0(){return this.a.r=!0},
$S:0}
C.epl.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.mP.gdV(D.mP),w=w.gaf(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.M)(p),++r)u.push(s.cuR(p[r]))
return new B.D(H.aiY,B.x(B.a([new B.D(Ah.akE,w,q),B.B(u,A.m,q,A.e,A.j,0,q,q)],v),A.E,q,A.e,A.j,0,A.p),q)},
$S:z+37}
C.epk.prototype={
$0(){return this.a.c7W(this.b)},
$S:0}
C.dll.prototype={
$0(){var w=this,v=null,u=B.fu(v,v,v,v,B.cS(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a3,A.bZ,v,A.dA,A.bW)
u.ej()
return u},
$S:264}
C.eBl.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.E((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.ao(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new B.t(s.a+q*n,s.b+r*n)
t.b=new B.t(q*v,r*v)}A.d.bu(o,new C.eBj(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new C.eBk())},
$S:9}
C.eBj.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+38}
C.eBk.prototype={
$0(){},
$S:0}
C.eAX.prototype={
$0(){},
$S:0}
C.eAW.prototype={
$0(){},
$S:0}
C.eB5.prototype={
$0(){return C.yR(this.b,this.a.d,"spark-painter")},
$S:0}
C.eB7.prototype={
$1(d){return this.a.aZL(0,d.b)},
$S:49}
C.eBb.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gak(w).aF(0,u).gcH()>2.5}else w=!1
if(w)t.a.push(u)
v.aSz(u)
v.caS(u)
return null},
$S:21}
C.eB6.prototype={
$1(d){return this.a.aZK()},
$S:40}
C.eBc.prototype={
$1(d){return this.a.aZL(0,d.b)},
$S:22}
C.eBd.prototype={
$1(d){return this.a.aZK()},
$S:68}
C.eBe.prototype={
$0(){var w=this.a
return w.m(new C.eB4(w,this.b))},
$S:0}
C.eB4.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
C.eBf.prototype={
$0(){var w=this.a
return w.m(new C.eB3(w))},
$S:0}
C.eB3.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.eBg.prototype={
$0(){var w=this.a
return w.m(new C.eB2(w,this.b))},
$S:0}
C.eB2.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eBh.prototype={
$1(d){var w=this.a
return w.m(new C.eB1(w,d))},
$S:7}
C.eB1.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eBi.prototype={
$0(){var w=this.a
return w.m(new C.eB0(w))},
$S:0}
C.eB0.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eB8.prototype={
$0(){var w=this.a
return w.m(new C.eB_(w))},
$S:0}
C.eB_.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.eB9.prototype={
$0(){var w=this.a
return w.m(new C.eAZ(w))},
$S:0}
C.eAZ.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
C.eBa.prototype={
$0(){var w=this.a
return w.m(new C.eAY(w,this.b))},
$S:0}
C.eAY.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bNh.prototype={
$1(d){return d.r<=0},
$S:z+39}
C.bNs.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bNn.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bNt.prototype={
$1(d){return this.a.LY(d)&&!d.x},
$S:z+0}
C.bNu.prototype={
$2(d,e){return Math.max(d,this.a.aB_(e))},
$S:z+6}
C.bNw.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bNx(w))},
$S:z+5}
C.bNx.prototype={
$0(){return this.a.a},
$S:92}
C.bNv.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:74}
C.bNy.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bNz(w))},
$S:z+5}
C.bNz.prototype={
$0(){return this.a.a},
$S:92}
C.bNj.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bNk(w))},
$S:z+5}
C.bNk.prototype={
$0(){return this.a.a},
$S:92}
C.bNi.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:74}
C.bNl.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bNm(w))},
$S:z+5}
C.bNm.prototype={
$0(){return this.a.a},
$S:92}
C.bNg.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bNA.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bNo.prototype={
$1(d){return d!==this.b&&this.a.aHc(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bNr.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bNq.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bNp.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bHU.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bHV.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.coS.prototype={
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
$S:193}
C.fL7.prototype={
$1(d){var w
$.S()
w=B.I()
w.r=d.gp(0)
return w},
$S:1850}
C.fL9.prototype={
$2(d,e){var w
$.S()
w=B.I()
w.b=A.a9
w.c=e
w.r=d.gp(0)
w.d=A.bB
return w},
$S:1851}
C.fLa.prototype={
$5(d,e,f,g,h){return B.bs(new B.a3(d,e,d+f,e+g),new B.aQ(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1852}
C.fL8.prototype={
$3(d,e,f){var w
$.S()
w=B.I()
w.sam(new B.a9(A.b3,A.b6,A.x,B.a([e,f],x.O),null,null).aB(0,d))
return w},
$S:1853}
C.bHy.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bHz.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bHx(w))},
$S:0}
C.bHx.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bHA.prototype={
$0(){return B.a([],x.ey)},
$S:1854}
C.bHB.prototype={
$1(d){return this.a.bD(d).a>15e5},
$S:358}
C.bHC.prototype={
$0(){var w,v,u
J.bEK(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.CE(v))if(C.h3N(v.b))w.b0S(v)
else w.a_U(v)
else{u=w.a.c.bdC(v)
w.aet(u==null?"The "+$.qo().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bHw.prototype={
$1(d){return new B.dY(new C.bHu(this.a,this.b),null)},
$S:20}
C.bHu.prototype={
$2(d,e){var w=null,v=this.b,u=new C.bHv(this.a,v,e),t=$.qo(),s=v.b,r=B.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.k2,w,w,w),q=B.aJ(w,w,w,w,D.bOx,w,w,w,new C.bHq(u,v),w,w,w,w,w,w),p=A.k.E(v.ch,1,2.6),o=x.p
return B.bn(!0,new B.D(A.vW,B.x(B.a([r,A.av,D.fR3,A.W,B.B(B.a([q,B.E(B.l5(t.h(0,s).d,w,w,2.6,1,u,p),1),B.aJ(w,w,w,w,D.bVh,w,w,w,new C.bHr(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),B.B(B.a([B.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,B.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b2,B.bN(!1,D.fui,w,w,!0,w,w,new C.bHs(u),w,w),B.bN(!1,A.wW,w,w,!0,w,w,new C.bHt(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.E,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:87}
C.bHv.prototype={
$1(d){var w=this.a
w.m(new C.bHo(this.b,d))
this.c.$1(new C.bHp())
w.a.toString},
$S:7}
C.bHo.prototype={
$0(){return this.a.ch=A.k.E(this.b,1,2.6)},
$S:0}
C.bHp.prototype={
$0(){},
$S:0}
C.bHq.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
C.bHr.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
C.bHs.prototype={
$0(){return this.a.$1(1)},
$S:0}
C.bHt.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.bHR.prototype={
$2(d,e){var w
if(d==="short"){E.dX(1800,"",120,0,0.55,"noise")
E.dX(200,"",160,2.2,0.4,"saw")
B.fI()
w=this.a
if(w.c!=null)w.aet("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dX(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.aet("\u26a0 Overloaded! The "+$.qo().h(0,e.b).b+" can only give about "+A.k.ac(w.a.c.zO(e),2)+" amps but your gadgets are asking for "+A.k.ac(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.aet("Burnt out! "+e.ay)
E.dX(140,"",320,0,0.6,"noise")
E.dX(900,"",160,1.5,0.35,"square")}},
$S:z+43}
C.bHS.prototype={
$0(){},
$S:0}
C.bH1.prototype={
$0(){},
$S:0}
C.bHT.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bHQ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.au(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.aB(A.ca,B.b4(p,p,p,new C.aiS(w,v,u,t,s,r==null?A.jf:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bHK(o),new C.bHL(o),new C.bHM(o),p,p,p,p,p,p,p,p,p,p,new C.bHN(o),p,p,p,!1,A.a5)],q)
if(o.a.c.a.length===0)n.push(D.b8j)
w=o.Q
if(w!=null){v=B.m(14)
u=B.J(A.cT,A.r,1)
n.push(B.ao(p,B.aB(p,B.p(p,B.B(B.a([D.fsr,B.E(B.d(w,p,p,p,p,p,p,D.fkp,p,p,p),1)],q),A.E,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(D.bee,p,u,v,p,p,A.n),p,p,p,p,A.nn,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bHO(o),p,p,p,p,p,p,!1,A.a5),p,p,10,10,8,p))}if(o.e!=null)n.push(B.ao(8,o.aZS(B.B(B.a([D.bEC,new C.j7(A.GD,"Cut wire",new C.bHP(o),A.cs,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.ao(8,o.ci8(w),p,p,10,10,p,p))}return B.jF(new B.an(A.a_,p,A.b0,A.t,n,p),A.t,p)},
$S:350}
C.bHL.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b7S(s)
if(r!=null){t.m(new C.bHI(t,r,d))
return}w=t.b1x(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.t(v*u.a,w.d*u.b).aF(0,s)
t.m(new C.bHJ(t,w))}},
$S:49}
C.bHI.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bHJ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bHM.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new C.bHG(w,d))
else if(w.w!=null)w.m(new C.bHH(w,d.b.aa(0,w.x)))},
$S:21}
C.bHG.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bHH.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.E(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.E(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bHK.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b7S(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.akZ(u.a,u.b,v.a,v.b)!=null)E.dX(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.aer()},
$S:40}
C.bHN.prototype={
$1(d){var w=this.a,v=d.b,u=w.b1x(v)
if(u!=null){w.m(new C.bHE(w,u))
if(D.mc.aj(0,u.b))w.csJ(u)
w.a.toString
return}w.m(new C.bHF(w,w.cFi(v)))},
$S:68}
C.bHE.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dX(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dX(200,"",70,0,0.2,"saw")}},
$S:0}
C.bHF.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bHO.prototype={
$0(){var w=this.a
return w.m(new C.bHD(w))},
$S:0}
C.bHD.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bHP.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dX(300,"",50,0,0.35,"noise")
w.aer()},
$S:0}
C.bH2.prototype={
$0(){return this.a.bpS(this.b)},
$S:0}
C.bHl.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.B(B.a([B.d(d,w,w,w,w,w,w,D.feG,w,w,w),B.E(B.l5(this.b.d,w,w,g,h,new C.bHn(this.a,f),A.k.E(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1855}
C.bHn.prototype={
$1(d){var w=this.a
w.m(new C.bHm(this.b,d))
w.a.toString},
$S:7}
C.bHm.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bH8.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dX(260,"",70,0,0.35,"noise")
w.aer()},
$S:0}
C.bH9.prototype={
$0(){var w=this.a
return w.m(new C.bH7(w))},
$S:0}
C.bH7.prototype={
$0(){return this.a.d=null},
$S:0}
C.bHa.prototype={
$0(){this.a.m(new C.bH6(this.b,this.c))
E.dX(900,"",40,0,0.3,"noise")},
$S:0}
C.bH6.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bHd.prototype={
$0(){return this.a.b0S(this.b)},
$S:0}
C.bHe.prototype={
$0(){return this.a.a_U(this.b)},
$S:0}
C.bHf.prototype={
$0(){return this.a.a1x(this.b)},
$S:0}
C.bHg.prototype={
$0(){var w=this.a
w.m(new C.bH5(this.b,this.c))
w.a.toString},
$S:0}
C.bH5.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bHh.prototype={
$0(){var w=this.a
w.m(new C.bH4(this.b,this.c))
w.a.toString},
$S:0}
C.bH4.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bHi.prototype={
$0(){var w=this.a
w.m(new C.bH3(this.b,this.c))
w.a.toString},
$S:0}
C.bH3.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bHj.prototype={
$1(d){return this.a.f=d},
$S:7}
C.bHk.prototype={
$1(d){return this.a.f=d},
$S:7}
C.bHb.prototype={
$1(d){return this.a.f=d},
$S:7}
C.bHc.prototype={
$1(d){return this.a.f=d},
$S:7}
C.fiU.prototype={
$1(d){return d.aGR("bulb")},
$S:z+2}
C.fiV.prototype={
$1(d){return d.pW(0,"switch")&&d.aGR("bulb")},
$S:z+2}
C.fiW.prototype={
$1(d){return A.d.b5(d.a,new C.fiH())},
$S:z+2}
C.fiH.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fiX.prototype={
$1(d){return d.pW(0,"resistor")&&A.d.b5(d.a,new C.fiG())},
$S:z+2}
C.fiG.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fiY.prototype={
$1(d){return!d.pW(0,"battery")&&d.aGR("bulb")},
$S:z+2}
C.fiL.prototype={
$1(d){return A.d.b5(d.a,new C.fiF())},
$S:z+2}
C.fiF.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fiM.prototype={
$1(d){return A.d.b5(d.a,new C.fiE())},
$S:z+2}
C.fiE.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fiN.prototype={
$1(d){return A.d.b5(d.a,new C.fiD())},
$S:z+2}
C.fiD.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fiO.prototype={
$1(d){var w=d.a
return A.d.b5(w,new C.fiB())&&A.d.b5(w,new C.fiC())&&d.pW(0,"buck")},
$S:z+2}
C.fiB.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fiC.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fiP.prototype={
$1(d){var w=d.a
return A.d.b5(w,new C.fiz())&&A.d.b5(w,new C.fiA())},
$S:z+2}
C.fiz.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fiA.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fiQ.prototype={
$1(d){return A.d.b5(d.a,new C.fiy())},
$S:z+2}
C.fiy.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.dVh.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
C.dVq.prototype={
$1(d){var w=this.a.d
return w.aHc(d)&&w.CE(d)},
$S:z+0}
C.dVr.prototype={
$1(d){return d.x},
$S:z+0}
C.dVs.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.dVt.prototype={
$0(){},
$S:0}
C.dVg.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.m(22),o=x.p,n=B.a([D.fJG,A.av,D.fue,A.W],o)
for(w=this.a,v=0;v<19;++v){u=D.QP[v]
t=A.c.j(0.06)
s=new B.aQ(14,14)
r=new B.ay(A.bz,1,A.r,-1)
n.push(B.aB(q,B.p(q,B.x(B.a([new B.y(u.a,q,A.iG,q,q,q,q,q,q,q,q,q),A.bA,new B.y(u.b,q,D.fl9,q,q,q,q,A.a2,q,3,q,q)],o),A.E,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(t,q,new B.bK(r,r,r,r),new B.bk(s,s,s,s),q,q,A.n),q,q,q,A.cu,A.bf,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dVf(w,d,u),q,q,q,q,q,q,!1,A.a5))}return B.eR(q,F.lw,new B.D(A.bR,new B.a7(340,q,B.ct(n,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d7,q,new B.b7(p,A.a0),q)},
$S:48}
C.dVf.prototype={
$0(){B.a4(this.b,!1).O(null)
var w=this.a
w.m(new C.dVe(w,this.c))
E.dX(800,"",120,-0.5,0.3,"square")},
$S:0}
C.dVe.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.biK()},
$S:0}
C.dVc.prototype={
$1(d){return new C.VN(this.a.d,null)},
$S:z+57}
C.dVd.prototype={
$0(){},
$S:0}
C.dVp.prototype={
$1(d){return new B.dY(new C.dVo(this.a),null)},
$S:20}
C.dVo.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ai3(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.bj:A.aQ
k=B.aI(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.B(B.a([D.fGT,A.b2,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.O,B.by(B.m(4),B.lk(A.bz,m,m,5,m,w.a/11,new B.m6(f,x.B)),A.aq),A.ad],v)
if(h)u.push(D.fxi)
else{h=f.j(0.1)
t=B.m(14)
s=B.J(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Ac.JR,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.E2,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.x(B.a([r,A.av,q,new B.bM(A.a8,m,m,B.bN(!1,B.d(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new C.dVm(l,e),m,m),m)],v),A.E,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bf,m,m,m))}u.push(A.W)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aQ(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dt,1,A.r,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.aB:A.c
u.push(B.aB(m,B.p(m,new B.cc(A.aN,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.y(s,m,A.a9r,m,m,m,m,m,m,m,m,m),A.as,new B.bA(1,A.bd,new B.y(r.a,m,new B.F(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bK(n,n,n,n),new B.bk(t,t,t,t),m,m,A.n),m,m,m,A.eG,A.nn,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.dVn(l,o,e),m,m,m,m,m,m,!1,A.a5))}return B.bn(!0,new B.cT(new B.aZ(0,1/0,0,k.a.b*0.75),B.ct(u,m,A3.yd,m,m,A.ah,!0),m),!0,!1,A.af,!0,!0)},
$S:87}
C.dVm.prototype={
$0(){var w=this.a
w.m(new C.dVk(w))
this.b.$1(new C.dVl())
w.F6()},
$S:0}
C.dVk.prototype={
$0(){var w=this.a
$.ai3()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.dVl.prototype={
$0(){},
$S:0}
C.dVn.prototype={
$0(){var w=this.a
w.m(new C.dVi(w,this.b))
this.c.$1(new C.dVj())
w.F6()},
$S:0}
C.dVi.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dVj.prototype={
$0(){},
$S:0}
C.dVv.prototype={
$0(){return B.a4(this.a,!1).ib()},
$S:0}
C.dVw.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.mn("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a4(t.b,!1).cg(B.e_(new C.dVu(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dVu.prototype={
$1(d){B.lw("construction")
return Ak.hHE()},
$S:z+46}
C.dVx.prototype={
$0(){return C.htz(this.a,"ELECTRONICS LAB",this.b,A.aQ)},
$S:0}
C.dVy.prototype={
$0(){var w=this.a
return w.m(w.d.gcWH())},
$S:0}
C.dVz.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gBv(v))
w.F6()},
$S:0}
C.cFX.prototype={
$2(d,e){var w=null,v=this.a.gaxy().x
v===$&&B.c()
return B.b4(w,w,w,new C.b9z(v,w),A.ax)},
$S:63}
C.cFW.prototype={
$3(d,e,f){var w=new B.aF($.S().r,A.ag,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.D(new B.aX(v,t))
w.D(new B.c3(v,u,v+e,u))
w.D(new B.c3(v,u,v,u+e))
w.D(new B.c3(v,u,v-e,u))
w.D(new B.c3(v,u,v,t))
w.D(new B.br())
t=B.I()
t.r=A.c.j(f).gp(0)
this.a.aG(w,t)},
$S:441}
C.fPW.prototype={
$3(d,e,f){return new C.V5(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+47}
C.fPX.prototype={
$4(d,e,f,g){var w=x.Y
return new B.d0(e,!1,B.ir(A.A,g,null,new B.bf(B.cJ(A.ct,e,null),new B.bo(0.85,1,w),w.k("bf<bO.T>"))),null)},
$C:"$4",
$R:4,
$S:32}
C.dRG.prototype={
$0(){return B.a4(this.a,!1).ib()},
$S:0}
C.dRF.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bZy(o):q.bBV(o,p),m=x.p
p=B.a([B.pG(new B.nm(n,new B.cs(p,x.aC)),A.q5,B.r0(),A.b7,A.b7,new C.dRD())],m)
n=t.d
if(n){w=A.k.F(q.gS8(),12)<4
v=w?150:96
u=B.m(16)
m=B.a([A.as],m)
if(w)m.push(D.bEn)
else m.push(A.b2)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.bj:A.au,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.as)
p.push(B.ao(s,B.at(B.dd(s,B.B(m,A.m,s,A.e,A.j,0,s,s),s,s,A.eq,new B.o(A.w,s,s,u,s,s,A.n),A.mA,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.v4)p.push(B.ao(s,B.at(B.p(s,s,A.f,s,s,A.L4,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.wJ)p.push(B.ao(s,B.p(s,s,A.f,s,s,A.L4,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.aB(s,B.at(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dRE(q),s,s,s,s,s,s,!1,A.a5),s,s,0,0,s,s))
return B.by(r,new B.an(A.a_,s,A.b0,A.t,p,s),A.aq)},
$S:278}
C.dRD.prototype={
$2(d,e){var w=x.Y
return new B.d0(e,!1,B.ir(A.A,d,null,new B.bf(e,new B.bo(0.92,1,w),w.k("bf<bO.T>"))),null)},
$S:388}
C.dRE.prototype={
$0(){var w=this.a
return w.m(new C.dRC(w))},
$S:0}
C.dRC.prototype={
$0(){return this.a.e=null},
$S:0}
C.dRB.prototype={
$0(){var w=this.a
return w.m(new C.dRA(w,this.b))},
$S:0}
C.dRA.prototype={
$0(){return this.a.e=A.d.cu(F.kj,this.b)},
$S:0}
C.dRz.prototype={
$0(){var w=this.a
return w.m(new C.dRy(w))},
$S:0}
C.dRy.prototype={
$0(){return this.a.e=0},
$S:0}
C.dRu.prototype={
$0(){var w=this.a
return w.m(new C.dRt(w))},
$S:0}
C.dRt.prototype={
$0(){return this.a.e=null},
$S:0}
C.dRx.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.m(o?20:8),m=A.w.j(0.55),l=x.p
m=B.p(p,B.B(B.a([D.fPq,A.as,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eK,p,p,p,D.frh,p,p,p),1),B.d(A.a.aZ(A.o.u(B.dm(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.aZ(A.o.u(B.h3(new B.V(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qI,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.l1,p,p,p)
w=this.a
v=B.a([B.b4(p,p,p,new C.bvI(w.gS8(),this.c.d,p),A.ax)],l)
o=w.e
if(o!=null){u=B.m(10)
t=B.J(A.aZ,A.r,1)
s=B.m(10)
o=B.p(p,B.B(B.a([B.aB(p,B.p(p,p,A.f,p,p,A.acE,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dRw(w),p,p,p,p,p,p,!1,A.a5),A.el,B.p(p,p,A.f,p,p,A.acK,p,12,p,p,p,p,p,12),A.el,B.p(p,p,A.f,p,p,D.b3F,p,12,p,p,p,p,p,12),A.as,B.E(B.d(F.kj[o].a,p,1,A.a2,p,p,p,A.a9k,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.cm,p,p,p,24,p,p,A.fy,p,p,p)
r=w.e
r.toString
v.push(B.bT(0,new B.D(D.bB2,B.p(p,B.by(s,B.x(B.a([o,B.E(B.b4(p,p,p,new C.aeK(r,w.gS8(),p),A.fC),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new B.o(A.w,p,t,u,D.dob,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.m(18)
t=B.J(A.aZ,A.r,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jx,w.avw(F.kj[q],34,!1),p))
v.push(B.ao(8,B.at(B.p(p,B.B(s,A.m,p,A.e,A.Q,0,p,p),A.f,p,p,new B.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lB,p,p,p),p,p,p),p,p,0,0,p,p))
return B.by(n,B.p(p,B.x(B.a([m,B.E(new B.an(A.a_,p,A.b0,A.t,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,T.Yr,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:278}
C.dRw.prototype={
$0(){var w=this.a
return w.m(new C.dRv(w))},
$S:0}
C.dRv.prototype={
$0(){return this.a.e=null},
$S:0}
C.fjo.prototype={
$0(){return D.ea2},
$S:z+67}
C.fjp.prototype={
$0(){return D.dIn},
$S:z+49}
C.fjq.prototype={
$0(){return D.dEZ},
$S:z+50}
C.fjr.prototype={
$0(){return D.dHO},
$S:z+51}
C.fjs.prototype={
$0(){return D.dMG},
$S:z+52}
C.fjt.prototype={
$0(){return D.e5N},
$S:z+53}
C.fju.prototype={
$0(){return D.e7Y},
$S:z+54}
C.fjv.prototype={
$0(){return D.dM0},
$S:z+55}
C.cjd.prototype={
$0(){return B.a4(this.a,!1).ib()},
$S:0}
C.cje.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=B.a([],k)
for(w=$.hxc(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aQ(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.dq,16)],t)
n=A.c.j(0.85)
j.push(B.aB(m,B.p(m,new B.an(A.a_,m,A.aa,A.t,B.a([new B.cN(m,-6,-6,m,m,m,new B.y(r.c,m,Ai.JP,m,m,m,m,m,m,m,m,m),m),new B.bM(A.lS,m,m,B.x(B.a([new B.y(r.a,m,D.fpU,m,m,m,m,m,m,m,m,m),A.cL,new B.y(r.b,m,new B.F(!0,n,m,m,m,m,12,A.a7,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.E,m,A.e,A.Q,0,A.p),m)],k),m),A.f,m,m,new B.o(m,m,m,new B.bk(q,q,q,q),p,new B.a9(A.az,A.aE,A.x,o,m,m),A.n),m,v,m,m,A.bF,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.cjc(d,r),m,m,m,m,m,m,!1,A.a5))}return B.bW(A.bE,j,A.bq,m,14,14)},
$S:174}
C.cjc.prototype={
$0(){return B.a4(this.a,!1).cg(B.e_(new C.cjb(this.b),!1,null,x.H))},
$S:0}
C.cjb.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eLK.prototype={
$0(){var w=this.a
return w.w=w.d[w.b4Y(w.f)]},
$S:0}
C.eLG.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cZ.ah()*7},
$S:0}
C.eLF.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.c9)
w.w=""},
$S:0}
C.eLI.prototype={
$0(){var w=this.a
return w.m(new C.eLH(w,this.b))},
$S:0}
C.eLH.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cG(w,this.b)},
$S:0}
C.eLJ.prototype={
$1(d){return this.a.b_k(0)},
$S:2}
C.dXZ.prototype={
$0(){return C.J8("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.dY_.prototype={
$0(){},
$S:0}
C.dXU.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.dXW.prototype={
$0(){return this.a.b_m(this.b)},
$S:0}
C.dXX.prototype={
$0(){var w=this.a
return w.m(new C.dXV(w))},
$S:0}
C.dXV.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.dXY.prototype={
$0(){var w=this.a
return w.b_m(w.d)},
$S:0}
C.dJk.prototype={
$2(d,e){return d+e},
$S:77}
C.dJl.prototype={
$0(){},
$S:0}
C.dJf.prototype={
$2(d,e){return d+e},
$S:77}
C.dJi.prototype={
$0(){var w=this.a
return w.m(new C.dJh(w,this.b))},
$S:0}
C.dJh.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dJj.prototype={
$0(){var w=this.a
return w.m(new C.dJg(w))},
$S:0}
C.dJg.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.dV0.prototype={
$0(){return C.yR(this.b,this.a.d,"drawing")},
$S:0}
C.dV1.prototype={
$1(d){var w=this.a
return w.m(new C.dV_(w,d))},
$S:49}
C.dV_.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aID(u,v,t))},
$S:0}
C.dV2.prototype={
$1(d){var w=this.a
return w.m(new C.dUZ(w,d))},
$S:21}
C.dUZ.prototype={
$0(){return A.d.gak(this.a.e).c.push(this.b.b)},
$S:0}
C.dV3.prototype={
$1(d){var w=this.a
return w.m(new C.dUY(w,d))},
$S:22}
C.dUY.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aID(u,v,t))},
$S:0}
C.dV4.prototype={
$0(){var w=this.a
return w.m(new C.dUX(w,this.b))},
$S:0}
C.dUX.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.dV5.prototype={
$1(d){var w=this.a
return w.m(new C.dUW(w,d))},
$S:7}
C.dUW.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dV6.prototype={
$0(){var w=this.a
return w.m(new C.dUV(w))},
$S:0}
C.dUV.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dV7.prototype={
$0(){var w=this.a
return w.m(new C.dUU(w))},
$S:0}
C.dUU.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.dV8.prototype={
$0(){var w=this.a
return w.m(A.d.gBv(w.e))},
$S:0}
C.dV9.prototype={
$0(){var w=this.a
return w.m(new C.dUT(w))},
$S:0}
C.dUT.prototype={
$0(){var w=this.a
w.x=D.axN[A.o.F(A.d.cu(D.axN,w.x)+1,4)]},
$S:0}
C.ejs.prototype={
$0(){return this.a.f.M(0,this.b)},
$S:0}
C.ejt.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.J8("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.ejr(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.J8("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.ejr.prototype={
$0(){var w=this.a
w.r.v(0,B.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
C.eju.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.ejq(w))},
$S:12}
C.ejq.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
C.ejy.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return B.aB(w,B.lr(new C.ejw(v,e),w,A.b7,A.q5,w,w,new B.bo(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ejx(v,e),w,w,w,w,w,w,!1,A.a5)},
$S:83}
C.ejx.prototype={
$0(){return this.a.c9D(this.b)},
$S:0}
C.ejw.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dr(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fG(3.141592653589793*e)
m=B.m(16)
w=o?p:D.c3o
if(o)v=q.a.r.t(0,q.b)?A.bj.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.J(u.r.t(0,t)?A.bj:A.aZ,A.r,1)
if(o){r=B.dr()
r.fG(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fv(A.A,B.d(u[t],p,p,p,p,p,p,G.a9v,p,p,p),p,r,!0)
u=r}else u=D.fIn
return B.fv(A.A,B.p(A.A,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:109}
C.ejz.prototype={
$0(){var w=this.a
return w.m(new C.ejv(w,this.b))},
$S:0}
C.ejv.prototype={
$0(){var w=this.a
w.d=this.b.a
w.asQ()},
$S:0}
C.ejA.prototype={
$0(){var w=this.a
return w.m(w.gbKA())},
$S:0}
C.etn.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eto.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.etl.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.etm.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.etk(w))},
$S:12}
C.etk.prototype={
$0(){return this.a.f=-1},
$S:0}
C.etp.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.etq.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.etr.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b_l()},
$S:12}
C.ets.prototype={
$0(){return this.a.c9J(this.b)},
$S:0}
C.eHe.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:71}
C.eHn.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a2,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kE,B.B(B.a([v,A.ac,new B.ds(1,A.co,B.eS(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e1),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1856}
C.eHj.prototype={
$1(d){return this.a.m(new C.eHi())},
$S:2}
C.eHi.prototype={
$0(){},
$S:0}
C.eHk.prototype={
$0(){var w=this.a
return w.m(new C.eHh(w,this.b))},
$S:0}
C.eHh.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eHl.prototype={
$1(d){var w=this.a
return w.m(new C.eHg(w,d))},
$S:7}
C.eHg.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
C.eHm.prototype={
$0(){var w=this.a
return w.m(new C.eHf(w))},
$S:0}
C.eHf.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eix.prototype={
$0(){},
$S:0}
C.eiy.prototype={
$0(){},
$S:0}
C.eiq.prototype={
$0(){var w=this.a
return w.m(new C.eip(w))},
$S:0}
C.eip.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c2(u,1,!1,x.S)
w.r=0.9
C.a8s("hat",0.6)},
$S:0}
C.eir.prototype={
$0(){var w=this.a
return w.m(new C.eio(w))},
$S:0}
C.eio.prototype={
$0(){this.a.y=1.1
C.q0("bell",36,200,0.4)},
$S:0}
C.eis.prototype={
$0(){var w=this.a
return w.m(new C.ein(w))},
$S:0}
C.ein.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.au(Math.max(v,u)-t+1)
w.as=u
C.q0("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.eit.prototype={
$0(){var w=this.a
return w.m(new C.eim(w,this.b))},
$S:0}
C.eim.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.eiu.prototype={
$1(d){var w=this.a
return w.m(new C.eil(w,d))},
$S:7}
C.eil.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e4(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.eiv.prototype={
$1(d){var w=this.a
return w.m(new C.eik(w,d))},
$S:7}
C.eik.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
C.eiw.prototype={
$1(d){var w=this.a
return w.m(new C.eij(w,d))},
$S:7}
C.eij.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
C.cwn.prototype={
$0(){return B.a4(this.a,!1).ib()},
$S:0}
C.cwo.prototype={
$0(){var w=this.a
return C.htz(this.b,w.c,w.e,w.d)},
$S:0}
C.fTL.prototype={
$1(d){var w,v=null,u=B.m(24),t=this.a,s=t.j(0.4)
t=B.d(this.b,v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=B.d(this.c,v,v,v,v,v,v,D.ffi,v,v,v)
return B.em(B.a([B.bN(!1,D.fxn,v,v,!0,v,v,new C.fTK(d),v,v)],x.p),v,v,F.nf,w,v,v,v,new B.b7(u,new B.ay(s,1,A.r,-1)),t,v)},
$S:18}
C.fTK.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.cwj.prototype={
$0(){B.f1()
this.a.e.$0()},
$S:0}
C.cwi.prototype={
$0(){B.f1()
this.a.e.$0()},
$S:0}
C.cwp.prototype={
$0(){B.f1()
this.a.e.$0()},
$S:0}
C.cwk.prototype={
$0(){var w=this.a
A.d.W(w.iL$,this.b.bk())
if(w.c!=null)this.c.$0()},
$S:0}
C.cwm.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.E((v-w.oE$.a)/1e6,0,0.04)
w.oE$=d
w.nh$=A.o.ao(v,1000)
w.q6(u)
if(w.c!=null)w.m(new C.cwl())},
$S:9}
C.cwl.prototype={
$0(){},
$S:0}
C.cj9.prototype={
$0(){var w=this
return C.q0(w.a,w.b,w.c,w.d)},
$S:1}
C.fhO.prototype={
$0(){var w=null,v=B.fu(w,w,w,w,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,this.b,w,w,w,w,w,"monospace",w,w,this.c,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),this.a),A.a3,A.bZ,w,A.dA,A.bW)
v.ej()
return v},
$S:264}
C.fLi.prototype={
$0(){return this.a.ah()},
$S:78}
C.fnB.prototype={
$2(d,e){return d.j(A.k.E(d.a*this.a*e,0,1))},
$1(d){return this.$2(d,1)},
$S:1857}
C.fnC.prototype={
$4$blur$shift(d,e,f,g){var w,v=this
$.S()
w=B.I()
w.b=A.a9
w.c=e
w.e=A.dS
w.r=d.gp(0)
if(f!=null)w.z=f
C.D2(v.a,v.b,null,w).a1(v.c,v.d.aa(0,g))},
$2(d,e){return this.$4$blur$shift(d,e,null,A.J)},
$3$blur(d,e,f){return this.$4$blur$shift(d,e,f,A.J)},
$S:1858}
C.fLj.prototype={
$2(d,e){return d+this.a[e]},
$S:716}
C.fLk.prototype={
$2(d,e){return d+this.a[e]},
$S:716}
C.cj6.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cj1.prototype={
$0(){var w=this.a
w.at=0
w.ax=""},
$S:0}
C.cj2.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cj0(w,d))},
$S:7}
C.cj0.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.cj3.prototype={
$0(){var w=this.a.a?"Your animated title is saved (a moving GIF).":"Could not save here. Try another browser."
return this.b.ax=w},
$S:0}
C.cj4.prototype={
$0(){return this.a.ax="Could not make the animation. Try a shorter title."},
$S:0}
C.cj5.prototype={
$0(){return this.a.at=-1},
$S:0}
C.ciR.prototype={
$2(d,e){var w=null,v=this.a,u=v.gJh().x
u===$&&B.c()
return B.b4(w,w,w,new C.b8a(u,v.e.a.a,v.f,v.r,v.y,v.gtl(),v.x,w),A.fC)},
$S:63}
C.ciS.prototype={
$1(d){return this.a.m(new C.ciQ())},
$S:2}
C.ciQ.prototype={
$0(){},
$S:0}
C.ciT.prototype={
$0(){return this.a.box(this.b.a)},
$S:0}
C.ciU.prototype={
$0(){var w=this.a
return w.m(new C.ciP(w,this.b))},
$S:0}
C.ciP.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.ciV.prototype={
$0(){var w=this.a
return w.m(new C.ciO(w,this.b))},
$S:0}
C.ciO.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.ciW.prototype={
$0(){var w=this.a
return w.m(new C.ciN(w,this.b))},
$S:0}
C.ciN.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ciX.prototype={
$0(){var w=this.a
return w.m(new C.ciM(w,this.b))},
$S:0}
C.ciM.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.ciY.prototype={
$0(){var w=this.a
return w.m(new C.ciL(w))},
$S:0}
C.ciL.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
C.ciZ.prototype={
$0(){var w=this.a.gJh()
w.iN(0,0)
w.cM(0)},
$S:0}
C.cj_.prototype={
$1(d){var w=this.a
return w.m(new C.ciK(w,d))},
$S:7}
C.ciK.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.e__.prototype={
$0(){return this.a.k1=!1},
$S:0}
C.e_0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dZZ(w,d))},
$S:z+10}
C.dZZ.prototype={
$0(){return this.a.cut(this.b)},
$S:0}
C.e_1.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dZY(w))},
$S:73}
C.dZY.prototype={
$0(){return this.a.k1=!0},
$S:0}
C.e_2.prototype={
$0(){var w,v,u,t=this.a,s=J.a5(t),r=s.gL(t),q=new Float64Array(r*4)
for(w=0;w<s.gL(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:699}
C.dZW.prototype={
$0(){return this.a.id=D.a4n},
$S:0}
C.dZX.prototype={
$0(){var w=this.b.a,v=B.T(w).k("Z<1>")
v=B.pm(new B.Z(w,new C.dZV(this.c),v),6,v.k("K.E"))
w=B.C(v,B.a6(v).k("K.E"))
return this.a.id=w},
$S:0}
C.dZV.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+58}
C.dZU.prototype={
$1(d){var w=null,v=B.cd(B.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,B.l(w,w,A.ae,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.t,w,A.y,w,w,w,w,A.ah)
return B.em(B.a([B.bN(!1,A.py,w,w,!0,w,w,new C.dZT(d),w,w)],x.p),w,w,F.nf,v,w,w,w,w,D.fIs,w)},
$S:18}
C.dZT.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.e_l.prototype={
$0(){return C.yR(this.b,this.a.d,"earth")},
$S:0}
C.e_m.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.au(e.b,e.d)
o.fy=n
w=o.r
v=o.w
u=o.x
t=o.y
s=o.gWr()
r=o.z
q=x.p
n=B.a([B.aB(A.ca,B.b4(p,p,p,new C.bg1(w,v,u,t,s*r,r,o.fx,o.CW,o.cx,o.cy,o.dy,o.fr,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.e_9(o),new C.e_a(o),new C.e_b(o),p,p,p,p,p,p,p,new C.e_c(o),p,p,p,!1,A.a5)],q)
if(o.r==null&&!o.k1)n.push(A7.adn)
if(o.r==null&&o.k1)n.push(B.at(new B.D(A.qb,B.x(B.a([D.bX0,A.W,D.fHe,A.am,D.fz8,A.aA,B.dj(A.uv,A.E4,o.gc1M(),p)],q),A.m,p,A.e,A.Q,0,A.p),p),p,p,p))
w=this.b
if(w!=null)n.push(B.ao(8,o.cak(w),p,p,10,10,p,p))
return new B.ex(new B.an(A.a_,p,A.b0,A.t,n,p),o.d)},
$S:462}
C.e_a.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:248}
C.e_b.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.E(u.go*d.d,0.8,16)
else{w=57.2958/(u.gWr()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.E(u.x+v.b*w,-85,85)}},
$S:208}
C.e_9.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gWr()*u.z)
v=d.a.a
u.Q=A.k.E(-v.a*w,-160,160)
u.as=A.k.E(v.b*w,-100,100)},
$S:729}
C.e_c.prototype={
$1(d){var w=this.a,v=w.can(d.b)
if(v!=null)w.m(new C.e_3(w,v))
else w.m(new C.e_4(w))},
$S:68}
C.e_3.prototype={
$0(){return this.a.ay5(this.b)},
$S:0}
C.e_4.prototype={
$0(){return this.a.fx=null},
$S:0}
C.e_n.prototype={
$0(){var w=this.a
w.e.bP(0,A.c9)
w.m(new C.e_8(w,this.b))},
$S:0}
C.e_8.prototype={
$0(){var w=this.a
w.id=D.a4n
w.ay5(this.b)},
$S:0}
C.e_r.prototype={
$0(){var w=this.a
return w.m(new C.e_k(w))},
$S:0}
C.e_k.prototype={
$0(){var w=this.a
w.fx=null
w.au1(15,w.y,1)},
$S:0}
C.e_s.prototype={
$0(){var w=this.a
return w.m(new C.e_j(w,this.b))},
$S:0}
C.e_j.prototype={
$0(){var w=this.b.b
return this.a.au1(w.a,w.b,w.c)},
$S:0}
C.e_t.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new C.e_i(w,v))},
$S:0}
C.e_i.prototype={
$0(){var w=this.b.a
return this.a.ay5(w[A.cZ.au(w.length)])},
$S:0}
C.e_u.prototype={
$1(d){var w=this.a
return w.m(new C.e_h(w,d))},
$S:7}
C.e_h.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
C.e_v.prototype={
$1(d){var w=this.a
return w.m(new C.e_g(w,d))},
$S:7}
C.e_g.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.e_w.prototype={
$1(d){var w=this.a
return w.m(new C.e_f(w,d))},
$S:7}
C.e_f.prototype={
$0(){return this.a.fr=this.b},
$S:0}
C.e_x.prototype={
$0(){var w=this.a
return w.m(new C.e_e(w))},
$S:0}
C.e_e.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.e_y.prototype={
$0(){var w=this.a
return w.m(new C.e_d(w))},
$S:0}
C.e_d.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
C.e_o.prototype={
$0(){var w=this.a
return w.m(new C.e_7(w))},
$S:0}
C.e_7.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.e_p.prototype={
$0(){var w=this.a
return w.m(new C.e_6(w))},
$S:0}
C.e_6.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.e_q.prototype={
$0(){var w=this.a
return w.m(new C.e_5(w))},
$S:0}
C.e_5.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
C.dZS.prototype={
$2(d,e){var w=null
return B.E(B.x(B.a([B.d(d,w,w,w,w,w,w,D.aRH,w,w,w),A.v8,B.d(e,w,2,A.a2,w,w,w,A.UO,w,w,w)],x.p),A.E,w,A.e,A.j,0,A.p),1)},
$S:133}
C.dZR.prototype={
$0(){var w=this.a
return w.m(new C.dZQ(w))},
$S:0}
C.dZQ.prototype={
$0(){return this.a.fx=null},
$S:0}
C.dhr.prototype={
$0(){var w=null,v=B.fu(w,w,w,w,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.d6l,w,w),this.a),A.a3,A.bZ,w,A.dA,A.bW)
v.ej()
return v},
$S:264}
C.dhs.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new B.t(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1861}
C.fjh.prototype={
$0(){return D.dKj},
$S:z+59}
C.fji.prototype={
$0(){return D.e7H},
$S:z+60}
C.fjj.prototype={
$0(){return D.dKl},
$S:z+61}
C.fjk.prototype={
$0(){return D.dEL},
$S:z+62}
C.fjl.prototype={
$0(){return D.dKi},
$S:z+63}
C.fjm.prototype={
$0(){return D.e5O},
$S:z+64}
C.fjn.prototype={
$0(){return D.e5M},
$S:z+65}
C.eHW.prototype={
$1(d){},
$S:z+10}
C.eHX.prototype={
$1(d){},
$S:73}
C.eHT.prototype={
$0(){return B.a4(this.a,!1).ib()},
$S:0}
C.eHU.prototype={
$0(){var w=this.a
return w.m(new C.eHS(w))},
$S:0}
C.eHS.prototype={
$0(){var w=this.a
return w.d=A.o.F(w.gaT1()+1,16)},
$S:0}
C.eHV.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=B.a([],l)
for(w=$.hxb(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new B.aQ(18,18)
q=s.d
p=new B.ay(q.j(0.5),1,A.r,-1)
o=B.a([q.j(0.28),D.bnd],u)
k.push(B.aB(n,B.p(n,B.x(B.a([B.X(s.c,q,n,n,n,30),A.O,new B.y(s.a,n,D.fjX,n,A.L,n,n,n,n,2,n,n),A.cL,new B.y(s.b,n,D.fph,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.b8,A.j,0,A.p),A.f,n,n,new B.o(n,n,new B.bK(p,p,p,p),new B.bk(r,r,r,r),n,new B.a9(A.az,A.aE,A.x,o,n,n),A.n),n,v,n,n,A.cn,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eHR(d,s),n,n,n,n,n,n,!1,A.a5))}return B.bW(A.fE,k,A.bq,n,10,10)},
$S:174}
C.eHR.prototype={
$0(){return B.a4(this.a,!1).cg(B.e_(new C.eHQ(this.b),!1,null,x.H))},
$S:0}
C.eHQ.prototype={
$1(d){return this.a.e.$0()},
$S:39}
C.eAB.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
C.eAM.prototype={
$0(){return C.yR(this.b,this.a.d,"solar-system")},
$S:0}
C.eAN.prototype={
$2(d,e){var w,v=null,u=this.a,t=new B.au(e.b,e.d)
u.ch=t
t=B.a([B.aB(A.ca,B.b4(v,v,v,new C.bsu(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eAJ(u),new C.eAK(u),v,v,v,v,v,v,v,new C.eAL(u),v,v,v,!1,A.a5)],x.p)
w=this.b
if(w!=null)t.push(B.ao(8,u.cap(w),v,v,10,10,v,v))
return new B.ex(new B.an(A.a_,v,A.b0,A.t,t,v),u.d)},
$S:462}
C.eAJ.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:248}
C.eAK.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.E(w.y*d.d,0.5,9)
else w.x=w.x.aa(0,d.a)},
$S:208}
C.eAL.prototype={
$1(d){var w=this.a,v=w.cas(d.b)
if(v!=null)w.b_H(v)},
$S:68}
C.eAO.prototype={
$0(){var w=this.a
return w.m(new C.eAI(w))},
$S:0}
C.eAI.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
C.eAP.prototype={
$0(){return this.a.b_H(this.b)},
$S:0}
C.eAQ.prototype={
$1(d){var w=this.a
return w.m(new C.eAH(w,d))},
$S:7}
C.eAH.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
C.eAR.prototype={
$1(d){var w=this.a
return w.m(new C.eAG(w,d))},
$S:7}
C.eAG.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eAS.prototype={
$0(){var w=this.a
return w.m(new C.eAF(w))},
$S:0}
C.eAF.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
C.eAT.prototype={
$0(){var w=this.a
return w.m(new C.eAE(w))},
$S:0}
C.eAE.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.eAU.prototype={
$0(){var w=this.a
return w.m(new C.eAD(w))},
$S:0}
C.eAD.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.eAV.prototype={
$0(){var w=this.a
return w.m(new C.eAC(w))},
$S:0}
C.eAC.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eAA.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.ac(d/365.25,w)+" Earth years"}else w=A.k.ac(d,0)+" Earth days"
return w},
$S:337}
C.eAz.prototype={
$2(d,e){var w=null
return B.E(B.x(B.a([B.d(d,w,w,w,w,w,w,D.aRH,w,w,w),A.v8,B.d(e,w,2,A.a2,w,w,w,A.UO,w,w,w)],x.p),A.E,w,A.e,A.j,0,A.p),1)},
$S:133}
C.eAy.prototype={
$0(){var w=this.a
return w.m(new C.eAx(w))},
$S:0}
C.eAx.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
C.f1p.prototype={
$0(){var w=null,v=B.fu(w,w,w,w,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,M.QY,w,w),this.a),A.a3,A.bZ,w,A.dA,A.bW)
v.ej()
return v},
$S:264}
C.f1q.prototype={
$1(d){return d.c>0},
$S:z+11}
C.f1r.prototype={
$1(d){return d.c>0},
$S:z+11}
C.e_C.prototype={
$0(){},
$S:0}
C.e04.prototype={
$1(d){return d!=null},
$S:381}
C.e_R.prototype={
$0(){var w=this.a
return w.m(new C.e_I(w,this.b))},
$S:0}
C.e_I.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.e_S.prototype={
$0(){var w=this.a
return w.m(new C.e_H(w))},
$S:0}
C.e_H.prototype={
$0(){return this.a.f=!1},
$S:0}
C.e_T.prototype={
$0(){var w=this.a
return w.m(new C.e_Q(w))},
$S:0}
C.e_Q.prototype={
$0(){return this.a.f=!0},
$S:0}
C.e_X.prototype={
$0(){var w=this.a
return w.m(new C.e_P(w))},
$S:0}
C.e_P.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.e_Y.prototype={
$1(d){var w=this.a
return w.m(new C.e_O(w,d))},
$S:7}
C.e_O.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e_Z.prototype={
$0(){var w=this.a
return w.m(w.gcxK())},
$S:0}
C.e0_.prototype={
$1(d){var w=this.a
return w.m(new C.e_N(w,d))},
$S:7}
C.e_N.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.e00.prototype={
$1(d){var w=this.a
return w.m(new C.e_M(w,d))},
$S:7}
C.e_M.prototype={
$0(){return this.a.ax=this.b},
$S:0}
C.e01.prototype={
$1(d){var w=this.a
return w.m(new C.e_L(w,d))},
$S:7}
C.e_L.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.e02.prototype={
$1(d){var w=this.a
return w.m(new C.e_K(w,d))},
$S:7}
C.e_K.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.e03.prototype={
$0(){var w=this.a
return w.m(new C.e_J(w))},
$S:0}
C.e_J.prototype={
$0(){return this.a.ay=4},
$S:0}
C.e_U.prototype={
$0(){var w=this.a
return w.m(new C.e_G(w))},
$S:0}
C.e_G.prototype={
$0(){return this.a.ay=7.67},
$S:0}
C.e_V.prototype={
$0(){var w=this.a
return w.m(new C.e_F(w))},
$S:0}
C.e_F.prototype={
$0(){return this.a.ay=9},
$S:0}
C.e_W.prototype={
$0(){var w=this.a
return w.m(new C.e_E(w))},
$S:0}
C.e_E.prototype={
$0(){return this.a.ay=11.3},
$S:0}
C.e_B.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=B.a([B.bT(0,B.c1(g,new B.o(D.blA,g,g,B.m(20),g,g,A.n),A.bg),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.zi[q]
n=B.b1(o.d)
o=B.x(B.a([new B.y(o.a,g,new B.F(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new B.y(B.w(D.zi[q].b)+" m/s\xb2",g,D.foC,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=B.p(g,g,A.f,A.dt,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?B.X(U.Oa,B.b1(D.zi[q].d),g,g,g,22):B.p(g,g,A.f,g,g,new B.o(B.b1(D.zi[q].d),g,g,g,B.a([new B.ac(0,A.G,B.b1(D.zi[q].d).j(0.6),A.J,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=B.p(g,g,A.f,B.b1(D.zi[q].d).j(0.6),g,g,g,3,g,A.fy,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.ac(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,B.a([new B.cN(p,8,g,g,f,g,o,g),new B.cN(n-0.5,54,g,e,g,g,m,g),new B.cN(n-11,54+s*(l/20),g,g,g,g,k,g),new B.cN(p,g,g,8,f,g,B.x(B.a([j,A.av,new B.y(i,g,A.t8,g,g,g,g,g,g,g,g,g),new B.y(h,g,D.fgx,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.d5(v,new C.e_A()))a1.push(D.b8E)
return new B.an(A.a_,g,A.aa,A.t,a1,g)},
$S:70}
C.e_A.prototype={
$1(d){return d==null},
$S:381}
C.e_D.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.E(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=B.m(8)
p=B.p(v,v,A.f,v,v,new B.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=B.dd(v,v,v,v,A.b7,new B.o(v,v,v,B.m(8),v,new B.a9(A.a4,A.a8,A.x,B.a([B.b1(t).j(0.9),B.b1(t).j(0.4)],x.O),v,v),A.n),A.iw,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.ac(r,1):C.H4(r)
u=u.ax*9.81/s
u=u<10?A.k.ac(u,2):A.k.ac(u,0)
return new B.an(A.a_,v,A.aa,A.t,B.a([p,t,B.ao(v,B.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.fmP,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:70}
C.e_z.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=B.b4(v,v,v,new C.bbc(new B.t(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.ax)
o=A.w.j(0.55)
p=B.m(14)
q=B.J(A.bz,A.r,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.bj
else u=A.a.t(u,"escapes")?A.aQ:A.c
u=B.d(t,v,v,v,v,v,v,B.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.ac(Math.sqrt(58.86870477034412),1)
s=A.k.ac(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+C.H4(A.k.E(r.cx.gcH()-6371,0,9e9))+" km":""
w=x.p
return new B.an(A.a_,v,A.b0,A.t,B.a([n,B.ao(v,B.p(v,B.x(B.a([u,A.bA,B.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,H.aTt,v,v,v)],w),A.E,v,A.e,A.Q,0,A.p),A.f,v,v,new B.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bT,v,v,v),v,v,12,12,8,v)],w),v)},
$S:70}
C.etv.prototype={
$0(){return C.yR(this.b,this.a.d,"size-compare")},
$S:0}
C.etw.prototype={
$0(){var w=this.a
return w.m(new C.etu(w,this.b))},
$S:0}
C.etu.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.etx.prototype={
$0(){var w=this.a
return w.m(new C.ett(w,this.b))},
$S:0}
C.ett.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f_z.prototype={
$3(d,e,f){var w,v,u=this.a
$.S()
w=B.I()
w.r=f.j(0.2).gp(0)
w.z=new B.hg(A.G,Math.max(2,e*0.18))
u.ad(d,e*1.12,w)
w=B.I()
v=B.ar(f,A.w,0.6)
v.toString
w.sam(new B.c0(V.xg,0.5,A.x,null,0,B.a([A.c,f,v],x.O),H.a3D,null).aB(0,B.bX(d,e)))
u.ad(d,e,w)},
$S:1862}
C.dIM.prototype={
$1(d){return d.e<=0},
$S:z+48}
C.dIA.prototype={
$1(d){return d.b},
$S:z+45}
C.dIB.prototype={
$0(){return C.yR(this.b,this.a.d,"black-hole")},
$S:0}
C.dIC.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new B.au(e.b,e.d)
p.Q=o
o=B.aB(A.ca,B.b4(q,q,q,new C.baA(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dIy(p),q,q,q,q,q,q,q,q,q,new C.dIz(p),q,q,q,q,!1,A.a5)
w=A.w.j(0.55)
v=B.m(14)
u=B.J(A.bz,A.r,1)
t=p.r
if(t<1000)t=A.k.ac(t,t<10?1:0)+" Suns"
else t=C.fx0(t)+" Suns"
t=p.afe("MASS",t)
s=2.953*p.r
r=x.p
r=B.a([o,B.ao(q,B.p(q,B.B(B.a([t,p.afe("EDGE WIDTH",(s<100?A.k.ac(s,1):C.H4(s))+" km"),p.afe("TIME",A.k.ac(this.b*100,0)+"%"),p.afe("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bT,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.epE)
return new B.ex(new B.an(A.a_,q,A.b0,A.t,r,q),p.d)},
$S:462}
C.dIz.prototype={
$1(d){return this.a.b_I(d.b)},
$S:22}
C.dIy.prototype={
$1(d){if(A.cZ.ah()<0.12)this.a.b_I(d.b)},
$S:21}
C.dIE.prototype={
$1(d){var w=this.a
return w.m(new C.dIx(w,d))},
$S:7}
C.dIx.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
C.dIF.prototype={
$0(){var w=this.a
return w.m(new C.dIw(w))},
$S:0}
C.dIw.prototype={
$0(){return this.a.r=10},
$S:0}
C.dIG.prototype={
$0(){var w=this.a
return w.m(new C.dIv(w))},
$S:0}
C.dIv.prototype={
$0(){return this.a.r=21},
$S:0}
C.dIH.prototype={
$0(){var w=this.a
return w.m(new C.dIu(w))},
$S:0}
C.dIu.prototype={
$0(){return this.a.r=43e5},
$S:0}
C.dII.prototype={
$0(){var w=this.a
return w.m(new C.dIt(w))},
$S:0}
C.dIt.prototype={
$0(){return this.a.r=65e8},
$S:0}
C.dIJ.prototype={
$0(){var w=this.a
return w.m(new C.dIs(w))},
$S:0}
C.dIs.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dIK.prototype={
$0(){var w=this.a
return w.m(new C.dIr(w))},
$S:0}
C.dIr.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.dIL.prototype={
$0(){var w=this.a
return w.m(new C.dIq(w))},
$S:0}
C.dIq.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.dID.prototype={
$0(){var w=this.a
return w.m(new C.dIp(w))},
$S:0}
C.dIp.prototype={
$0(){var w=this.a
A.d.a8(w.z)
w.as=0},
$S:0}
C.dZi.prototype={
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
e[r]=new B.t(p,i)
q=d[r]
d[r]=new B.t(q.a+p*s,q.b+i*s)}},
$S:1863}
C.dZ8.prototype={
$0(){return C.yR(this.b,this.a.d,"galaxy")},
$S:0}
C.dZ9.prototype={
$0(){var w=this.a
return w.m(new C.dZ7(w,this.b))},
$S:0}
C.dZ7.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.a_w()},
$S:0}
C.dZa.prototype={
$0(){var w=this.a
return w.m(new C.dZ6(w))},
$S:0}
C.dZ6.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.a_w()}w.cxB()},
$S:0}
C.dZb.prototype={
$1(d){var w=this.a
return w.m(new C.dZ5(w,d))},
$S:7}
C.dZ5.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.a_w()},
$S:0}
C.dZc.prototype={
$1(d){var w=this.a
return w.m(new C.dZ4(w,d))},
$S:7}
C.dZ4.prototype={
$0(){var w=this.a
w.r=this.b
w.a_w()},
$S:0}
C.dZd.prototype={
$1(d){var w=this.a
return w.m(new C.dZ3(w,d))},
$S:7}
C.dZ3.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dZe.prototype={
$1(d){var w=this.a
return w.m(new C.dZ2(w,d))},
$S:7}
C.dZ2.prototype={
$0(){return this.a.ax=this.b},
$S:0}
C.dZf.prototype={
$0(){var w=this.a
return w.m(new C.dZ1(w))},
$S:0}
C.dZ1.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.dZg.prototype={
$0(){var w=this.a
return w.m(new C.dZ0(w))},
$S:0}
C.dZ0.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
C.dZh.prototype={
$0(){var w=this.a
return w.m(new C.dZ_(w))},
$S:0}
C.dZ_.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.deB.prototype={
$6(d,e,f,g,h,i){return g.aa(0,new B.t((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1864}
C.esK.prototype={
$0(){return C.yR(this.b,this.a.d,"seasons-moon")},
$S:0}
C.esL.prototype={
$0(){var w=this.a
return w.m(new C.esJ(w))},
$S:0}
C.esJ.prototype={
$0(){return this.a.f="seasons"},
$S:0}
C.esM.prototype={
$0(){var w=this.a
return w.m(new C.esI(w))},
$S:0}
C.esI.prototype={
$0(){return this.a.f="moon"},
$S:0}
C.esN.prototype={
$0(){var w=this.a
return w.m(new C.esH(w))},
$S:0}
C.esH.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.esO.prototype={
$0(){var w=this.a
return w.m(new C.esG(w))},
$S:0}
C.esG.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
C.esP.prototype={
$1(d){var w=this.a
return w.m(new C.esF(w,d))},
$S:7}
C.esF.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.esQ.prototype={
$1(d){var w=this.a
return w.m(new C.esE(w,d))},
$S:7}
C.esE.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.esR.prototype={
$1(d){var w=this.a
return w.m(new C.esD(w,d))},
$S:7}
C.esD.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.esS.prototype={
$1(d){var w=this.a
return w.m(new C.esC(w,d))},
$S:7}
C.esC.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=C.aMw.prototype
w.bwY=w.q
w=C.aLG.prototype
w.bw5=w.q
w=C.aLH.prototype
w.bw6=w.q
w=C.aLL.prototype
w.bwa=w.q
w=C.aNl.prototype
w.bxU=w.q
w=C.aMu.prototype
w.bwW=w.q
w=C.aMD.prototype
w.bx4=w.q
w=C.ay4.prototype
w.bt7=w.q
w=C.ay5.prototype
w.bt8=w.q
w=C.aK9.prototype
w.buv=w.q
w=C.aLU.prototype
w.bwj=w.q
w=C.aLI.prototype
w.bw7=w.q
w=C.aLZ.prototype
w.bwp=w.q
w=C.aMq.prototype
w.bwS=w.q
w=C.aMP.prototype
w.bxg=w.q
w=C.aF_.prototype
w.btC=w.q
w=C.aM3.prototype
w.bwv=w.q
w=C.aM4.prototype
w.bww=w.q
w=C.aM5.prototype
w.bwx=w.q
w=C.aMz.prototype
w.bx0=w.q
w=C.aMC.prototype
w.bx3=w.q
w=C.aLF.prototype
w.bw4=w.q
w=C.aM1.prototype
w.bws=w.q
w=C.aMy.prototype
w.bx_=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(C.aEL.prototype,"gawY","c5s",1)
var r
v(r=C.aDg.prototype,"gcdR","cdS",30)
w(r,"gc61","aZ4",1)
w(C.aDi.prototype,"gc7M","c7N",1)
u(C.aDz.prototype,"gc7T","c7U",44)
w(r=C.aHN.prototype,"gcxh","cxi",1)
w(r,"gc7V","aeh",1)
w(r,"gcii","cij",1)
w(r,"gc7S","aeg",3)
w(r=C.aEK.prototype,"gbHK","a9J",3)
w(r,"gchz","b1o",1)
w(r,"gclk","agL",3)
t(r,"gc7X","aei",3)
t(r=C.a4C.prototype,"gBv","a8",1)
v(r,"gcUw","anG",0)
v(r,"gcQY","LY",0)
w(r,"gcWH","biK",1)
s(C.aiS.prototype,"gc8h",0,5,null,["$5"],["qC"],42,0,0)
w(r=C.aDL.prototype,"gc8i","c8j",1)
w(r,"gco9","ah6",3)
w(r,"gce6","afr",3)
w(r,"gcvi","aic",3)
w(r=C.aFc.prototype,"gc9E","c9F",1)
t(r,"gc9C","b_k",1)
w(C.aEy.prototype,"gbKA","asQ",1)
t(C.aER.prototype,"gc9G","c9H",1)
w(r=C.asc.prototype,"gbZf","bZg",1)
w(r,"gcML","Tn",3)
w(r=C.aDW.prototype,"gc1M","aXj",1)
v(r,"gcal","cam",56)
w(r,"gbPK","bPL",1)
w(r=C.aDX.prototype,"gcxK","cxL",1)
w(r,"gcaq","car",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.lZ,[C.aUh,C.cn2,C.KF,C.a0y,C.JC])
t(C.bSt,B.aUx)
u(B.jc,[C.bSu,C.ebF,C.ebG,C.ebS,C.ebT,C.ebO,C.ebN,C.ebP,C.ebL,C.ebQ,C.ebJ,C.ebR,C.ebI,C.ebW,C.ebV,C.ebX,C.ebU,C.ebY,C.ebZ,C.ec0,C.eqd,C.eqf,C.eqg,C.epX,C.epW,C.epU,C.eq2,C.eq3,C.eq_,C.eq4,C.epZ,C.eq5,C.eq6,C.epY,C.eq8,C.eq1,C.eqc,C.eq0,C.dJd,C.dJc,C.dIQ,C.dJe,C.dIS,C.dIU,C.dIV,C.dIX,C.dIN,C.dIO,C.dIP,C.dJ3,C.dJ4,C.dJ5,C.dJ2,C.dJ7,C.dJ1,C.dJ8,C.dJ0,C.dJ9,C.dJ_,C.dJa,C.dIZ,C.dJb,C.dIY,C.dKx,C.dKw,C.dKB,C.dKt,C.dKu,C.dKC,C.dKD,C.dKE,C.dKz,C.dKp,C.dKN,C.dKM,C.dKP,C.dKQ,C.dKR,C.dKG,C.dKS,C.cQr,C.dQJ,C.dQI,C.dQK,C.fj8,C.fj9,C.fja,C.fjb,C.fjc,C.fjd,C.fje,C.fjf,C.fjg,C.f_5,C.f_4,C.eZN,C.eZM,C.eZI,C.eZH,C.eZJ,C.eZG,C.eZV,C.eZU,C.eZW,C.eZO,C.f__,C.eZR,C.f_1,C.eZQ,C.f_2,C.eZP,C.epf,C.ep4,C.epe,C.ep0,C.epg,C.epi,C.ep1,C.ep2,C.epD,C.epC,C.ept,C.epu,C.epv,C.epp,C.epq,C.epo,C.epr,C.epn,C.eps,C.epm,C.epk,C.dll,C.eBk,C.eAX,C.eAW,C.eB5,C.eBe,C.eB4,C.eBf,C.eB3,C.eBg,C.eB2,C.eB1,C.eBi,C.eB0,C.eB8,C.eB_,C.eB9,C.eAZ,C.eBa,C.eAY,C.bNx,C.bNz,C.bNk,C.bNm,C.bHy,C.bHz,C.bHx,C.bHA,C.bHC,C.bHo,C.bHp,C.bHq,C.bHr,C.bHs,C.bHt,C.bHS,C.bH1,C.bHI,C.bHJ,C.bHG,C.bHH,C.bHE,C.bHF,C.bHO,C.bHD,C.bHP,C.bH2,C.bHm,C.bH8,C.bH9,C.bH7,C.bHa,C.bH6,C.bHd,C.bHe,C.bHf,C.bHg,C.bH5,C.bHh,C.bH4,C.bHi,C.bH3,C.dVh,C.dVs,C.dVt,C.dVf,C.dVe,C.dVd,C.dVm,C.dVk,C.dVl,C.dVn,C.dVi,C.dVj,C.dVv,C.dVw,C.dVx,C.dVy,C.dVz,C.dRG,C.dRE,C.dRC,C.dRB,C.dRA,C.dRz,C.dRy,C.dRu,C.dRt,C.dRw,C.dRv,C.fjo,C.fjp,C.fjq,C.fjr,C.fjs,C.fjt,C.fju,C.fjv,C.cjd,C.cjc,C.eLK,C.eLG,C.eLF,C.eLI,C.eLH,C.dXZ,C.dY_,C.dXU,C.dXW,C.dXX,C.dXV,C.dXY,C.dJl,C.dJi,C.dJh,C.dJj,C.dJg,C.dV0,C.dV_,C.dUZ,C.dUY,C.dV4,C.dUX,C.dUW,C.dV6,C.dUV,C.dV7,C.dUU,C.dV8,C.dV9,C.dUT,C.ejs,C.ejt,C.ejr,C.eju,C.ejq,C.ejx,C.ejz,C.ejv,C.ejA,C.etn,C.eto,C.etl,C.etm,C.etk,C.etp,C.etq,C.etr,C.ets,C.eHi,C.eHk,C.eHh,C.eHg,C.eHm,C.eHf,C.eix,C.eiy,C.eiq,C.eip,C.eir,C.eio,C.eis,C.ein,C.eit,C.eim,C.eil,C.eik,C.eij,C.cwn,C.cwo,C.fTK,C.cwj,C.cwi,C.cwp,C.cwk,C.cwl,C.cj9,C.fhO,C.fLi,C.cj6,C.cj1,C.cj0,C.cj3,C.cj4,C.cj5,C.ciQ,C.ciT,C.ciU,C.ciP,C.ciV,C.ciO,C.ciW,C.ciN,C.ciX,C.ciM,C.ciY,C.ciL,C.ciZ,C.ciK,C.e__,C.dZZ,C.dZY,C.e_2,C.dZW,C.dZX,C.dZT,C.e_l,C.e_3,C.e_4,C.e_n,C.e_8,C.e_r,C.e_k,C.e_s,C.e_j,C.e_t,C.e_i,C.e_h,C.e_g,C.e_f,C.e_x,C.e_e,C.e_y,C.e_d,C.e_o,C.e_7,C.e_p,C.e_6,C.e_q,C.e_5,C.dZR,C.dZQ,C.dhr,C.fjh,C.fji,C.fjj,C.fjk,C.fjl,C.fjm,C.fjn,C.eHT,C.eHU,C.eHS,C.eHR,C.eAB,C.eAM,C.eAO,C.eAI,C.eAP,C.eAH,C.eAG,C.eAS,C.eAF,C.eAT,C.eAE,C.eAU,C.eAD,C.eAV,C.eAC,C.eAy,C.eAx,C.f1p,C.e_C,C.e_R,C.e_I,C.e_S,C.e_H,C.e_T,C.e_Q,C.e_X,C.e_P,C.e_O,C.e_Z,C.e_N,C.e_M,C.e_L,C.e_K,C.e03,C.e_J,C.e_U,C.e_G,C.e_V,C.e_F,C.e_W,C.e_E,C.etv,C.etw,C.etu,C.etx,C.ett,C.dIB,C.dIx,C.dIF,C.dIw,C.dIG,C.dIv,C.dIH,C.dIu,C.dII,C.dIt,C.dIJ,C.dIs,C.dIK,C.dIr,C.dIL,C.dIq,C.dID,C.dIp,C.dZ8,C.dZ9,C.dZ7,C.dZa,C.dZ6,C.dZ5,C.dZ4,C.dZ3,C.dZ2,C.dZf,C.dZ1,C.dZg,C.dZ0,C.dZh,C.dZ_,C.esK,C.esL,C.esJ,C.esM,C.esI,C.esN,C.esH,C.esO,C.esG,C.esF,C.esE,C.esD,C.esC])
u(B.aD,[C.ak7,C.Gj,C.v1,C.aSv,C.a3j,C.baD,C.c3Q,C.yh,C.Cy,C.ns,C.bbm,C.AJ,C.btc,C.qc,C.qU,C.CC,C.Zw,C.aeR,C.a0L,C.CM,C.abO,C.ac3,C.adX,C.G4,C.blZ,C.Qc,C.ee,C.tF,C.aau,C.abA,C.a4C,C.mJ,C.bbn,C.fO,C.mg,C.buw,C.aID,C.qM,C.fcS,C.abf,C.abg,C.vf,C.Pq,C.ye,C.Pp,C.bur,C.PU,C.aeY])
u(B.hL,[C.fzm,C.foW,C.fw6,C.fw7,C.fzj,C.fzk,C.ebH,C.ec_,C.eqe,C.epM,C.epN,C.epO,C.epP,C.epQ,C.epR,C.epS,C.epT,C.epK,C.epL,C.epJ,C.eq9,C.eqa,C.eqb,C.dIR,C.dIT,C.dIW,C.dJ6,C.c3R,C.c3S,C.fiI,C.fiJ,C.fiK,C.fiR,C.fiS,C.fiT,C.dKT,C.dKA,C.dKU,C.dKv,C.dKq,C.dKs,C.dKy,C.dKL,C.dKJ,C.dKK,C.dKI,C.dKF,C.dKH,C.f_3,C.eZL,C.eZS,C.f_0,C.eZF,C.dlp,C.dlq,C.dlm,C.dln,C.dlo,C.dlr,C.dls,C.dlt,C.dlu,C.dlv,C.dlw,C.dlx,C.dly,C.dlz,C.epa,C.epb,C.epc,C.epd,C.ep8,C.ep9,C.epF,C.eph,C.epj,C.ep3,C.epB,C.epz,C.epA,C.epy,C.epx,C.ep5,C.eBl,C.eBj,C.eB7,C.eBb,C.eB6,C.eBc,C.eBd,C.eBh,C.bNh,C.bNs,C.bNn,C.bNt,C.bNv,C.bNi,C.bNg,C.bNA,C.bNo,C.bNr,C.bNq,C.bNp,C.bHU,C.fL7,C.fLa,C.fL8,C.bHB,C.bHw,C.bHv,C.bHT,C.bHL,C.bHM,C.bHK,C.bHN,C.bHl,C.bHn,C.bHj,C.bHk,C.bHb,C.bHc,C.fiU,C.fiV,C.fiW,C.fiH,C.fiX,C.fiG,C.fiY,C.fiL,C.fiF,C.fiM,C.fiE,C.fiN,C.fiD,C.fiO,C.fiB,C.fiC,C.fiP,C.fiz,C.fiA,C.fiQ,C.fiy,C.dVq,C.dVr,C.dVg,C.dVc,C.dVp,C.dVu,C.cFW,C.fPW,C.fPX,C.cjb,C.eLJ,C.dV1,C.dV2,C.dV3,C.dV5,C.ejw,C.eHe,C.eHn,C.eHj,C.eHl,C.eiu,C.eiv,C.eiw,C.fTL,C.cwm,C.fnB,C.fnC,C.cj2,C.ciS,C.cj_,C.e_0,C.e_1,C.dZV,C.dZU,C.e_a,C.e_b,C.e_9,C.e_c,C.e_u,C.e_v,C.e_w,C.eHW,C.eHX,C.eHQ,C.eAJ,C.eAK,C.eAL,C.eAQ,C.eAR,C.eAA,C.f1q,C.f1r,C.e04,C.e_Y,C.e0_,C.e00,C.e01,C.e02,C.e_A,C.f_z,C.dIM,C.dIA,C.dIz,C.dIy,C.dIE,C.dZi,C.dZb,C.dZc,C.dZd,C.dZe,C.deB,C.esP,C.esQ,C.esR,C.esS])
u(B.kd,[C.fzl,C.ebM,C.ebK,C.epV,C.eq7,C.dKr,C.dKO,C.dQL,C.f_6,C.f_7,C.eZK,C.eZX,C.eZY,C.eZT,C.eZZ,C.eZE,C.ep6,C.ep7,C.epE,C.epw,C.epl,C.bNu,C.bNw,C.bNy,C.bNj,C.bNl,C.bHV,C.coS,C.fL9,C.bHu,C.bHR,C.bHQ,C.dVo,C.cFX,C.dRF,C.dRD,C.dRx,C.cje,C.dJk,C.dJf,C.ejy,C.fLj,C.fLk,C.ciR,C.e_m,C.dZS,C.dhs,C.eHV,C.eAN,C.eAz,C.e_B,C.e_D,C.e_z,C.dIC])
u(B.ag,[C.VN,C.W9,C.UG,C.UL,C.NA,C.aHM,C.W8,C.Wn,C.aiQ,C.Vm,C.axM,C.V5,C.WE,C.Vu,C.UH,C.Vl,C.W3,C.Wd,C.Wx,C.W2,C.Wy,C.VA,C.WA,C.Wm,C.VB,C.We,C.UF,C.Vy,C.Wa])
u(B.ah,[C.bkx,C.aMw,C.aLG,C.aLL,C.aDz,C.aNl,C.aMu,C.aMD,C.ay4,C.bxE,C.aK9,C.aLU,C.aMP,C.aLZ,C.aLI,C.bk2,C.aEy,C.aER,C.bld,C.aMq,C.aF_,C.aM3,C.blh,C.aMC,C.aM5,C.aMz,C.aLF,C.aM1,C.aMy])
t(C.bxO,C.aMw)
t(C.aEL,C.bxO)
u(B.mV,[C.bhC,C.bbF,C.bsB,C.bal,C.brf,C.bqG,C.bb0,C.bqI,C.buG,C.bhA,C.bsw,C.aiS,C.b9z,C.bvI,C.aeK,C.bvU,C.bqH,C.bm_,C.b8a,C.bg1,C.bsu,C.bbc,C.bs2,C.baA,C.bfT,C.bri])
t(C.aLH,C.aLG)
t(C.aDg,C.aLH)
t(C.bxC,C.aLL)
t(C.aDi,C.bxC)
u(B.aw,[C.brD,C.af2,C.adU,C.Qn,C.bs6,C.a8t,C.bdM,C.b7h,C.eX,C.hj,C.b7i,C.j7,C.JO])
t(C.aHN,C.aNl)
t(C.bhz,B.oV)
t(C.aEK,C.aMu)
t(C.bl5,C.aMD)
t(C.ay5,C.ay4)
t(C.aiR,C.ay5)
t(C.aDL,C.bxE)
t(C.b9A,C.aK9)
t(C.bk0,C.aLU)
t(C.bxV,C.aMP)
t(C.aFc,C.bxV)
t(C.bxF,C.aLZ)
t(C.bk9,C.bxF)
t(C.bxB,C.aLI)
t(C.bjN,C.bxB)
t(C.bxN,C.aMq)
t(C.bkJ,C.bxN)
t(C.asc,C.aF_)
t(C.aM4,C.aM3)
t(C.aDW,C.aM4)
t(C.bxS,C.aMC)
t(C.bl4,C.bxS)
t(C.bxH,C.aM5)
t(C.aDX,C.bxH)
t(C.bxQ,C.aMz)
t(C.bl1,C.bxQ)
t(C.bxA,C.aLF)
t(C.bjM,C.bxA)
t(C.bxG,C.aM1)
t(C.bkc,C.bxG)
t(C.bxP,C.aMy)
t(C.bl0,C.bxP)
w(C.aMw,B.co)
w(C.bxO,C.qM)
w(C.aLG,B.co)
w(C.aLH,C.qM)
w(C.aLL,B.co)
w(C.bxC,C.qM)
w(C.aNl,B.eO)
w(C.aMu,B.co)
w(C.aMD,B.co)
w(C.ay4,B.co)
w(C.ay5,C.qM)
w(C.aK9,B.co)
v(C.bxE,B.eD)
w(C.aLU,B.co)
w(C.aLI,B.co)
w(C.bxB,C.qM)
w(C.aLZ,B.co)
w(C.bxF,C.qM)
w(C.aMq,B.co)
w(C.bxN,C.qM)
w(C.aMP,B.co)
w(C.bxV,C.qM)
w(C.aF_,B.co)
w(C.aM3,B.co)
w(C.aM4,C.qM)
w(C.aM5,B.co)
w(C.bxH,C.qM)
w(C.aMz,B.co)
w(C.bxQ,C.qM)
w(C.aMC,B.co)
w(C.bxS,C.qM)
w(C.aLF,B.co)
w(C.bxA,C.qM)
w(C.aM1,B.co)
w(C.bxG,C.qM)
w(C.aMy,B.co)
w(C.bxP,C.qM)})()
B.jk(b.typeUniverse,JSON.parse('{"VN":{"ag":[],"v":[]},"bkx":{"ah":["VN"]},"W9":{"ag":[],"v":[]},"aEL":{"ah":["W9"]},"bhC":{"aC":[]},"UG":{"ag":[],"v":[]},"aDg":{"ah":["UG"]},"UL":{"ag":[],"v":[]},"aDi":{"ah":["UL"]},"bbF":{"aC":[]},"af2":{"aw":[],"v":[]},"adU":{"aw":[],"v":[]},"aHM":{"ag":[],"v":[]},"NA":{"ag":[],"v":[]},"aDz":{"ah":["NA"]},"brD":{"aw":[],"v":[]},"Qn":{"aw":[],"v":[]},"bsB":{"aC":[]},"bs6":{"aw":[],"v":[]},"bal":{"aC":[]},"aHN":{"ah":["aHM"]},"brf":{"aC":[]},"bqG":{"aC":[]},"bb0":{"aC":[]},"bqI":{"aC":[]},"buG":{"aC":[]},"W8":{"ag":[],"v":[]},"bhz":{"aC":[]},"aEK":{"ah":["W8"]},"bhA":{"aC":[]},"Wn":{"ag":[],"v":[]},"bl5":{"ah":["Wn"]},"bsw":{"aC":[]},"aiS":{"aC":[]},"aiQ":{"ag":[],"v":[]},"aiR":{"ah":["aiQ"]},"Vm":{"ag":[],"v":[]},"axM":{"ag":[],"v":[]},"aDL":{"ah":["Vm"],"eD":[]},"b9A":{"ah":["axM"]},"b9z":{"aC":[]},"V5":{"ag":[],"v":[]},"bk0":{"ah":["V5"]},"bvI":{"aC":[]},"aeK":{"aC":[]},"a8t":{"aw":[],"v":[]},"WE":{"ag":[],"v":[]},"Vu":{"ag":[],"v":[]},"UH":{"ag":[],"v":[]},"Vl":{"ag":[],"v":[]},"W3":{"ag":[],"v":[]},"Wd":{"ag":[],"v":[]},"Wx":{"ag":[],"v":[]},"W2":{"ag":[],"v":[]},"aFc":{"ah":["WE"]},"bvU":{"aC":[]},"bk9":{"ah":["Vu"]},"bqH":{"aC":[]},"bjN":{"ah":["UH"]},"bk2":{"ah":["Vl"]},"bm_":{"aC":[]},"aEy":{"ah":["W3"]},"aER":{"ah":["Wd"]},"bld":{"ah":["Wx"]},"bkJ":{"ah":["W2"]},"bdM":{"aw":[],"v":[]},"b7h":{"aw":[],"v":[]},"eX":{"aw":[],"v":[]},"hj":{"aw":[],"v":[]},"b7i":{"aw":[],"v":[]},"j7":{"aw":[],"v":[]},"JO":{"aw":[],"v":[]},"Wy":{"ag":[],"v":[]},"b8a":{"aC":[]},"asc":{"ah":["Wy"]},"VA":{"ag":[],"v":[]},"aDW":{"ah":["VA"]},"bg1":{"aC":[]},"WA":{"ag":[],"v":[]},"blh":{"ah":["WA"]},"Wm":{"ag":[],"v":[]},"VB":{"ag":[],"v":[]},"We":{"ag":[],"v":[]},"bl4":{"ah":["Wm"]},"bsu":{"aC":[]},"aDX":{"ah":["VB"]},"bbc":{"aC":[]},"bl1":{"ah":["We"]},"bs2":{"aC":[]},"UF":{"ag":[],"v":[]},"Vy":{"ag":[],"v":[]},"Wa":{"ag":[],"v":[]},"bjM":{"ah":["UF"]},"baA":{"aC":[]},"bkc":{"ah":["Vy"]},"bfT":{"aC":[]},"bl0":{"ah":["Wa"]},"bri":{"aC":[]}}'))
B.CP(b.typeUniverse,JSON.parse('{"qM":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.av
return{B:w("m6<u?>"),k:w("u"),J:w("bw<n,L>"),Q:w("dD<n>"),Z:w("a0"),M:w("O<df>"),f5:w("O<a3f>"),m:w("O<a3j>"),V:w("O<ac>"),O:w("O<u>"),ey:w("O<V>"),dh:w("O<HW>"),aJ:w("O<aA<aD>>"),w:w("O<a0>"),C:w("O<ai<HW>>"),gO:w("O<ai<ai<L>>>"),bj:w("O<ai<n>>"),b:w("O<ai<L>>"),E:w("O<ai<H>>"),fA:w("O<ai<H?>>"),U:w("O<ai<ce>>"),F:w("O<a8<n,aD>>"),g:w("O<t>"),bz:w("O<tF>"),ds:w("O<a8Q>"),v:w("O<h9>"),L:w("O<+(n,n)>"),fT:w("O<+(L,v)>"),I:w("O<+(H,n)>"),u:w("O<+(H,H)>"),c:w("O<+(n,n,a0)>"),e:w("O<+(n,L,L,H)>"),o:w("O<+(n,H,n,H)>"),d:w("O<+(n,n,L,L,a8<n,L>)>"),_:w("O<v1>"),q:w("O<cX>"),fQ:w("O<aau>"),s:w("O<n>"),cF:w("O<as>"),X:w("O<wp>"),R:w("O<abf>"),p:w("O<v>"),bL:w("O<abA>"),r:w("O<lt>"),a_:w("O<abO>"),cB:w("O<ns>"),ba:w("O<ac3>"),d9:w("O<PU>"),eW:w("O<CC>"),fY:w("O<Zw>"),ed:w("O<Qc>"),g4:w("O<blZ>"),ac:w("O<adX>"),cd:w("O<CM>"),fr:w("O<aeR>"),e4:w("O<a0L>"),x:w("O<aeY>"),au:w("O<aID>"),f7:w("O<R>"),n:w("O<L>"),t:w("O<H>"),dS:w("O<aC?>"),fs:w("O<tF?>"),bN:w("O<H?>"),a:w("O<ce>"),eH:w("bg"),gJ:w("cA<aiR>"),z:w("cA<ah<ag>>"),bF:w("ai<u>"),gl:w("ai<V>"),ew:w("ai<aD>"),j:w("ai<@>"),h:w("a8<n,@>"),f:w("a8<@,@>"),bd:w("N<ee,n>"),fR:w("N<+(L,v),v>"),l:w("iF"),gA:w("zt"),gD:w("w_"),P:w("cu"),K:w("aD"),W:w("tF"),dV:w("ee"),N:w("n"),bO:w("as"),G:w("jQ"),Y:w("bo<L>"),D:w("abg"),gc:w("dI"),gj:w("cs<n>"),aC:w("cs<H?>"),dg:w("ec<qU>"),e3:w("baD"),a2:w("Cy"),f3:w("qU"),es:w("G4"),gV:w("n6"),y:w("R"),i:w("L"),A:w("@"),S:w("H"),bM:w("ai<@>?"),cK:w("aD?"),az:w("q4?"),T:w("n?"),cD:w("L?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aZE=new B.df(0,0.1)
D.b0j=new C.aSv(0,0,0)
D.L_=new C.aSv(0,0.5,0)
D.b0S=new B.ay(A.bj,1,A.r,-1)
D.b2k=new B.aZ(0,1/0,0,290)
D.b2r=new B.aZ(16,1/0,16,1/0)
D.b3F=new B.o(A.be,null,null,null,null,null,A.a6)
D.fee=new B.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQP=new B.y("\u26a1",null,D.fee,null,null,null,null,null,null,null,null,null)
D.b8a=new B.ck(A.A,null,null,D.fQP,null)
D.aSM=new B.F(!0,A.bY,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGp=new B.y("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aSM,null,A.L,null,null,null,null,null,null,null)
D.eje=new B.D(A.o8,D.fGp,null)
D.b8j=new B.ck(A.A,null,null,D.eje,null)
D.fKk=new B.y("Press Drop! and watch them fall from 20 metres.",null,A.kQ,null,A.L,null,null,null,null,null,null,null)
D.eji=new B.D(A.o8,D.fKk,null)
D.b8E=new B.ck(A.A,null,null,D.eji,null)
D.fpD=new B.F(!0,A.jJ,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPb=new B.y("Draw anywhere",null,D.fpD,null,null,null,null,null,null,null,null,null)
D.b8I=new B.ck(A.A,null,null,D.fPb,null)
D.fwq=new B.y("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aSM,null,A.L,null,null,null,null,null,null,null)
D.ek2=new B.D(A.G8,D.fwq,null)
D.b92=new B.ck(A.A,null,null,D.ek2,null)
D.adG=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bbh=new B.u(1,0.8509803921568627,1,0.8941176470588236,A.q)
D.bbP=new B.u(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.q)
D.bcH=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.X8=new B.u(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
D.bcN=new B.u(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.q)
D.bcS=new B.u(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.q)
D.bcY=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bdd=new B.u(1,0.24705882352941178,0.11372549019607843,0.2901960784313726,A.q)
D.be8=new B.u(1,0.4196078431372549,0.17647058823529413,0.3607843137254902,A.q)
D.bee=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bek=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.beH=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.beN=new B.u(1,1,0.9450980392156862,0.7215686274509804,A.q)
D.bfO=new B.u(1,0.043137254901960784,0.03137254901960784,0.12549019607843137,A.q)
D.bg3=new B.u(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.q)
D.af7=new B.u(1,1,0.23137254901960785,0.12156862745098039,A.q)
D.bgy=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.B3=new B.u(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.q)
D.bhy=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bie=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.afM=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.biB=new B.u(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.q)
D.biQ=new B.u(1,1,0.8235294117647058,0.47843137254901963,A.q)
D.biW=new B.u(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.q)
D.bjc=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.ag9=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.Y2=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.bkV=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.bkY=new B.u(1,0.043137254901960784,0.10588235294117647,0.2,A.q)
D.bl1=new B.u(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.q)
D.blb=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.agD=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.blA=new B.u(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.q)
D.blO=new B.u(0.4,1,0.8901960784313725,0.6392156862745098,A.q)
D.Yf=new B.u(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.q)
D.bmR=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bmZ=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.ah7=new B.u(1,0.0784313725490196,0.0392156862745098,0.13333333333333333,A.q)
D.bnd=new B.u(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.q)
D.bnh=new B.u(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.q)
D.bnq=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.bnB=new B.u(1,0.00784313725490196,0.043137254901960784,0.0196078431372549,A.q)
D.vJ=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.bnN=new B.u(1,1,0.9686274509803922,0.6980392156862745,A.q)
D.ahy=new B.u(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.q)
D.boE=new B.u(1,0.7490196078431373,0.8431372549019608,1,A.q)
D.bpr=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.YJ=new B.u(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.q)
D.ai1=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.YM=new B.u(1,0.0784313725490196,0,0.1803921568627451,A.q)
D.brd=new B.u(0.2,0.5058823529411764,0.5490196078431373,0.9725490196078431,A.q)
D.aiB=new C.aUh(0,"none")
D.hoe=new C.aUh(2,"floydSteinberg")
D.bv7=new B.b9(11e6)
D.aj0=new B.Q(0,0,9,0)
D.bwK=new B.Q(10,10,10,6)
D.bwT=new B.Q(10,34,10,26)
D.bx0=new B.Q(10,6,10,2)
D.bx2=new B.Q(10,8,0,10)
D.bxE=new B.Q(12,8,8,8)
D.bxJ=new B.Q(14,0,14,22)
D.bxL=new B.Q(14,0,14,30)
D.ajy=new B.Q(14,10,8,12)
D.byL=new B.Q(16,4,16,28)
D.byV=new B.Q(16,8,16,12)
D.bB2=new B.Q(26,12,26,58)
D.bBR=new B.Q(4,4,6,2)
D.bBT=new B.Q(4,4,8,2)
D.bCu=new B.Q(8,14,8,12)
D.bCB=new B.Q(8,40,8,30)
D.bCF=new B.Q(8,6,16,0)
D.bCG=new B.Q(8,6,8,8)
D.bD0=new B.Q(0,0,1.5,0)
D.b05=new B.Hk(26,"saturation")
D.bDi=new B.xk(A.cX,D.b05,null,A.X_)
D.fvx=new B.y("REACTION LAB",null,X.aTn,null,null,null,null,A.a2,null,1,null,null)
D.bDp=new B.bA(1,A.bd,D.fvx,null)
D.fmi=new B.F(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyI=new B.y("CORE PROTOCOL",null,D.fmi,null,null,null,null,null,null,null,null,null)
D.bDD=new B.bA(1,A.bd,D.fyI,null)
D.fzu=new B.y("\ud83d\udce2 NGMY Ads",null,A.qI,null,null,null,null,A.eK,null,1,null,null)
D.bEn=new B.bA(1,A.bd,D.fzu,null)
D.fuf=new B.y("Wire selected",null,A.fQ,null,null,null,null,null,null,null,null,null)
D.bEC=new B.bA(1,A.bd,D.fuf,null)
D.amK=new B.a0(62712,"MaterialIcons",!1)
D.bKl=new B.a0(62878,"MaterialIcons",!1)
D.bKo=new B.a0(62908,"MaterialIcons",!1)
D.bKp=new B.a0(62931,"MaterialIcons",!1)
D.bKs=new B.a0(62951,"MaterialIcons",!1)
D.bKJ=new B.a0(63070,"MaterialIcons",!1)
D.Oh=new B.a0(63128,"MaterialIcons",!1)
D.GT=new B.a0(63726,"MaterialIcons",!1)
D.bM2=new B.a0(983122,"MaterialIcons",!1)
D.bMg=new B.a0(983247,"MaterialIcons",!1)
D.bMs=new B.a0(983415,"MaterialIcons",!1)
D.ao1=new B.a0(983467,"MaterialIcons",!1)
D.bMI=new B.a0(983616,"MaterialIcons",!1)
D.bNa=new B.a0(984561,"MaterialIcons",!1)
D.bNL=new B.ae(A.rr,24,A.aT,null,null,null)
D.bOx=new B.ae(A.OB,null,A.ae,null,null,null)
D.bP4=new B.ae(A.oe,21,A.ae,null,null,null)
D.bM1=new B.a0(983117,"MaterialIcons",!1)
D.bQr=new B.ae(D.bM1,28,A.c,null,null,null)
D.bQH=new B.ae(A.iV,18,null,null,null,null)
D.bSv=new B.ae(A.ec,21,A.cs,null,null,null)
D.bSK=new B.ae(A.og,null,A.ae,null,null,null)
D.bSU=new B.ae(A.a1Z,21,A.ae,null,null,null)
D.bTK=new B.ae(A.eI,17,A.ae,null,null,null)
D.apn=new B.ae(A.eI,19,null,null,null,null)
D.ry=new B.ae(A.ul,21,A.ae,null,null,null)
D.bVh=new B.ae(A.O7,null,A.ae,null,null,null)
D.bWq=new B.ae(A.iV,21,A.ae,null,null,null)
D.bX0=new B.ae(A.a1a,46,A.aQ,null,null,null)
D.bXi=new B.ae(A.fi,20,A.aB,null,null,null)
D.bXY=new B.ae(A.e4,null,A.aT,null,null,null)
D.bYi=new B.ae(A.of,null,A.aB,null,null,null)
D.dm5=w([A.d6,A.d2,A.d6],x.O)
D.c0k=new B.a9(A.a4,A.a8,A.x,D.dm5,null,null)
D.cZr=w([A.bO,A.bm],x.O)
D.c0s=new B.a9(A.b3,A.b6,A.x,D.cZr,null,null)
D.c0E=new B.a9(A.b3,A.b6,A.x,A.azA,null,null)
D.aqn=new B.a9(A.b3,A.b6,A.x,N.a3N,null,null)
D.cX5=w([A.oP,A.ir],x.O)
D.c1q=new B.a9(A.b3,A.b6,A.x,D.cX5,null,null)
D.cZ9=w([A.e6,A.au],x.O)
D.aqu=new B.a9(A.b3,A.b6,A.x,D.cZ9,null,null)
D.dfX=w([A.dv,A.j8,A.bm],x.O)
D.c1J=new B.a9(A.a4,A.a8,A.x,D.dfX,null,null)
D.dg2=w([A.hf,A.cm],x.O)
D.c23=new B.a9(A.b3,A.b6,A.x,D.dg2,null,null)
D.cvu=w([A.bO,A.dv],x.O)
D.c2c=new B.a9(A.a4,A.a8,A.x,D.cvu,null,null)
D.aAi=w([A.e6,K.nb],x.O)
D.c2j=new B.a9(A.b3,A.b6,A.x,D.aAi,null,null)
D.c2A=new B.a9(A.b3,A.b6,A.x,H.aqQ,null,null)
D.c3o=new B.a9(A.az,A.aE,A.x,A.a3K,null,null)
D.d7I=w([A.au,A.w],x.O)
D.c3z=new B.a9(A.b3,A.b6,A.x,D.d7I,null,null)
D.c3C=new B.a9(A.b3,A.b6,A.x,G.azF,null,null)
D.bnl=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bob=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cIi=w([A.Mm,D.bnl,D.bob],x.O)
D.c3M=new B.a9(A.b3,A.b6,A.x,D.cIi,null,null)
D.cvO=w([A.d1,A.h2],x.O)
D.c41=new B.a9(A.b3,A.b6,A.x,D.cvO,null,null)
D.c4w=w([0,2,4,6,7,9,11],x.t)
D.c4K=w([0,4,7],x.t)
D.c4L=w([0,4,7,12],x.t)
D.c4M=w([0,4,7,4],x.t)
D.azl=w([A.hb,A.pY],x.O)
D.ayP=w([A.iM,A.cO],x.O)
D.axc=w([A.bv,A.dE],x.O)
D.cQT=w([A.aT,A.d1],x.O)
D.cXr=w([A.cs,A.ej],x.O)
D.dhi=w([A.c4,A.kX],x.O)
D.awE=w([A.cT,A.kb],x.O)
D.cVW=w([A.bL,A.aJ],x.O)
D.c57=w([D.azl,D.ayP,A.a3S,D.axc,D.cQT,D.cXr,A.ayk,D.dhi,D.awE,D.cVW],B.av("O<ai<u>>"))
D.c9O=w([120,220,380],x.t)
D.cdy=w([12,16,19,24],x.t)
D.cdI=w([1400,800,450,2400],x.t)
D.cm7=w([250,450,900,1500],x.t)
D.cpy=w([A.bM,A.eU],x.O)
D.bfE=new B.u(1,0.043137254901960784,0.10588235294117647,0.24705882352941178,A.q)
D.cvt=w([D.bfE,A.d6],x.O)
D.bc4=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bnL=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.blC=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.brj=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bkK=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.avV=w([D.bc4,D.bnL,D.blC,D.brj,D.bkK],x.O)
D.cCZ=w([A.cI,G.n4,A.hV,G.ae0,A.cI,A.hV],x.O)
D.cDe=w([50,25,75],x.t)
D.cIP=w([0,5,10,15,18,20,25],x.t)
D.cRa=w([900,500,250,1600],x.t)
D.cUG=w([0.78,1],x.n)
D.cUJ=w([0,2,4,7,9,12,14,16],x.t)
D.cUV=w([A.eV,A.o_],x.O)
D.cV7=w([A.M,A.fa],x.O)
D.cVh=w([A.bv,A.bC,A.b9,A.bv],x.O)
D.axk=w([A.c4,A.aQ,A.bG,A.bv,A.bj],x.O)
D.a3H=w([A.aw,A.bG,A.be,A.aQ,A.o0],x.O)
D.cWL=w([A.au,A.aw,A.cT,A.bG,A.be,A.cC,A.cb,A.bC,A.Xe],x.O)
D.a3L=w([0.04,0.17,0.3],x.n)
D.a2E=w([0,0,0],x.t)
D.d8Y=w([D.a2E,D.a2E,D.a2E],x.E)
D.d04=w([0.375,1,0],x.a)
D.dsk=w([0.375,0,1],x.a)
D.doA=w([0.25,1,1],x.a)
D.cR4=w([D.d04,D.dsk,D.doA],x.U)
D.d9N=w([0.4375,1,0],x.a)
D.d9K=w([0.1875,-1,1],x.a)
D.cD1=w([0.3125,0,1],x.a)
D.dgt=w([0.0625,1,1],x.a)
D.dd5=w([D.d9N,D.d9K,D.cD1,D.dgt],x.U)
D.djK=w([0.19047619047619047,1,0],x.a)
D.ds4=w([0.09523809523809523,2,0],x.a)
D.cD7=w([0.047619047619047616,-2,1],x.a)
D.cZt=w([0.09523809523809523,-1,1],x.a)
D.dog=w([0.19047619047619047,0,1],x.a)
D.d3U=w([0.09523809523809523,1,1],x.a)
D.cW7=w([0.047619047619047616,2,1],x.a)
D.dq8=w([0.023809523809523808,-2,2],x.a)
D.dnv=w([0.047619047619047616,-1,2],x.a)
D.dt3=w([0.09523809523809523,0,2],x.a)
D.cYW=w([0.047619047619047616,1,2],x.a)
D.dlj=w([0.023809523809523808,2,2],x.a)
D.cYo=w([D.djK,D.ds4,D.cD7,D.cZt,D.dog,D.d3U,D.cW7,D.dq8,D.dnv,D.dt3,D.cYW,D.dlj],x.U)
D.d66=w([0.125,1,0],x.a)
D.d1e=w([0.125,2,0],x.a)
D.cp1=w([0.125,-1,1],x.a)
D.d1r=w([0.125,0,1],x.a)
D.d8J=w([0.125,1,1],x.a)
D.ddU=w([0.125,0,2],x.a)
D.cR3=w([D.d66,D.d1e,D.cp1,D.d1r,D.d8J,D.ddU],x.U)
D.cXA=w([D.d8Y,D.cR4,D.dd5,D.cYo,D.cR3],B.av("O<ai<ai<ce>>>"))
D.eZj=new C.v1("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eZp=new C.v1("Medium engine","A good all-rounder.",0.3,0.9)
D.eZo=new C.v1("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.HH=w([D.eZj,D.eZp,D.eZo],x._)
D.ewc=new B.z(6,"Easy")
D.ewY=new B.z(8,"Medium")
D.es_=new B.z(10,"Hard")
D.cYf=w([D.ewc,D.ewY,D.es_],x.I)
D.cYy=w([A.bt,A.b9,A.bv,A.bj],x.O)
D.cYB=w([F.ag3,G.agQ],x.O)
D.axC=w([0.55,0.78,1],x.n)
D.cZx=w([A.bG,A.c4,A.aQ],x.O)
D.cZV=w([0.93,0.975,1],x.n)
D.d_l=w([0,0.55,0.6],x.n)
D.bdT=new B.u(1,0.23137254901960785,0.0392156862745098,0.0392156862745098,A.q)
D.d_u=w([A.tG,D.bdT,A.ei],x.O)
D.bmo=new B.u(1,0.01568627450980392,0.06666666666666667,0.16862745098039217,A.q)
D.bgC=new B.u(1,0.043137254901960784,0.16470588235294117,0.24705882352941178,A.q)
D.bkR=new B.u(1,0.0196078431372549,0.06274509803921569,0.11372549019607843,A.q)
D.d_v=w([D.bmo,D.bgC,D.bkR],x.O)
D.axN=w([A.c,A.h1,A.nS,A.au],x.O)
D.d_O=w([A.aD,A.fo,A.kX,A.iO,A.du],x.O)
D.eOd=new B.z("solid","Solid")
D.eE6=new B.z("three","3D block")
D.eG9=new B.z("neon","Neon tube")
D.eJb=new B.z("gradient","Gradient")
D.eOl=new B.z("sticker","Sticker")
D.d0A=w([D.eOd,H.aOw,D.eE6,D.eG9,D.eJb,D.eOl,H.aOy,A.To],x.L)
D.d0B=w([A.bG,A.aQ,A.bj,A.c4,A.c,A.cT],x.O)
D.fTS=new C.ye("Moon",1737,4291941851)
D.fTP=new C.ye("Earth",6371,4281908728)
D.fTT=new C.ye("Neptune",24622,4284524026)
D.fTU=new C.ye("Saturn",58232,4294829706)
D.fTQ=new C.ye("Jupiter",69911,4294677052)
D.fTV=new C.ye("Sun",696340,4294688548)
D.fTW=new C.ye("Sirius A",119e4,4290763774)
D.fTN=new C.ye("Arcturus",179e5,4294818420)
D.fTO=new C.ye("Betelgeuse",531e6,4294472049)
D.fTR=new C.ye("UY Scuti",667e6,4293870660)
D.QM=w([D.fTS,D.fTP,D.fTT,D.fTU,D.fTQ,D.fTV,D.fTW,D.fTN,D.fTO,D.fTR],B.av("O<ye>"))
D.eUm=new B.bj("glow","Glow",A.a15)
D.eRX=new B.bj("rainbow","Rainbow",A.nr)
D.eSj=new B.bj("stars","Stars",A.ik)
D.eRH=new B.bj("sparks","Sparks",A.e4)
D.eTD=new B.bj("fire","Fire",A.wd)
D.d0S=w([D.eUm,D.eRX,D.eSj,D.eRH,D.eTD],x.c)
D.axS=w([A.be,A.aw,A.bG,A.d2],x.O)
D.d11=w([Al.ahw,A.cT,A.d1],x.O)
D.d1W=w([0.2,1],x.n)
D.eZg=new C.v1("Radar","Shows your height above the ground.",0.1,0)
D.eZh=new C.v1("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eZe=new C.v1("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.ay_=w([D.eZg,D.eZh,D.eZe],x._)
D.d2Y=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.d3c=w([47,100,220,470,1000],x.n)
D.d3y=w([0,0.42,0.43,1],x.n)
D.d3L=w([0,2,4,7,9],x.t)
D.IM={volts:0}
D.a5t=new B.bw(D.IM,[3],x.J)
D.Jb=new B.ea(["b","battery",0.2,0.3,D.a5t])
D.eda={on:0}
D.dwR=new B.bw(D.eda,[1],x.J)
D.DI=new B.ea(["s","switch",0.5,0.3,D.dwR])
D.eWY=new B.ea(["l","bulb",0.8,0.3,A.jf])
D.cZA=w([D.Jb,D.DI,D.eWY],x.d)
D.DH=new B.cw(["b",0,"s",0])
D.eVZ=new B.cw(["s",1,"l",0])
D.aOC=new B.cw(["l",1,"b",1])
D.dg8=w([D.DH,D.eVZ,D.aOC],x.o)
D.cZ1=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.erb=new C.mJ("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cZA,D.dg8,D.cZ1)
D.aIu={ohms:0}
D.aG4=new B.bw(D.aIu,[220],x.J)
D.eWr=new B.ea(["r","resistor",0.5,0.3,D.aG4])
D.eXc=new B.ea(["d","led",0.8,0.3,A.jf])
D.djn=w([D.Jb,D.eWr,D.eXc],x.d)
D.eVk=new B.cw(["b",0,"r",0])
D.eVT=new B.cw(["r",1,"d",0])
D.eVq=new B.cw(["d",1,"b",1])
D.dsx=w([D.eVk,D.eVT,D.eVq],x.o)
D.djP=w(["led","diode","indicator"],x.s)
D.eri=new C.mJ("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.djn,D.dsx,D.djP)
D.a6J={level:0}
D.dwd=new B.bw(D.a6J,[0.2],x.J)
D.eWx=new B.ea(["p","pot",0.5,0.3,D.dwd])
D.eWz=new B.ea(["m","motor",0.8,0.3,A.jf])
D.cZS=w([D.Jb,D.eWx,D.eWz],x.d)
D.eVj=new B.cw(["b",0,"p",0])
D.eVP=new B.cw(["p",1,"m",0])
D.eVL=new B.cw(["m",1,"b",1])
D.do7=w([D.eVj,D.eVP,D.eVL],x.o)
D.dfQ=w(["fan","motor","spin","dimmer"],x.s)
D.er9=new C.mJ("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cZS,D.do7,D.dfQ)
D.a5q=new B.bw(D.a6J,[0.9],x.J)
D.aOJ=new B.ea(["s","solar",0.25,0.3,D.a5q])
D.aOI=new B.ea(["l","bulb",0.75,0.3,A.jf])
D.d1C=w([D.aOJ,D.aOI],x.d)
D.eVW=new B.cw(["s",0,"l",0])
D.eVK=new B.cw(["l",1,"s",1])
D.d_F=w([D.eVW,D.eVK],x.o)
D.doN=w(["solar","sun","without battery","no battery","free"],x.s)
D.erc=new C.mJ("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.d1C,D.d_F,D.doN)
D.eXf=new B.ea(["c","crank",0.25,0.3,D.a5q])
D.deb=w([D.eXf,D.aOI],x.d)
D.eVn=new B.cw(["c",0,"l",0])
D.eVJ=new B.cw(["l",1,"c",1])
D.deK=w([D.eVn,D.eVJ],x.o)
D.dej=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.er8=new C.mJ("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.deb,D.deK,D.dej)
D.dwc=new B.bw(D.a6J,[0.7],x.J)
D.eWC=new B.ea(["t","turbine",0.25,0.3,D.dwc])
D.eWp=new B.ea(["m","motor",0.75,0.3,A.jf])
D.d8o=w([D.eWC,D.eWp],x.d)
D.eW6=new B.cw(["t",0,"m",0])
D.eVM=new B.cw(["m",1,"t",1])
D.d7m=w([D.eW6,D.eVM],x.o)
D.dcW=w(["wind","turbine","windmill","water","hydro"],x.s)
D.er5=new C.mJ("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.d8o,D.d7m,D.dcW)
D.aG1=new B.bw(D.IM,[9],x.J)
D.a7N=new B.ea(["b","battery",0.2,0.3,D.aG1])
D.aOH=new B.ea(["r","radio",0.8,0.3,A.jf])
D.dpo=w([D.a7N,D.DI,D.aOH],x.d)
D.eW0=new B.cw(["s",1,"r",0])
D.aOD=new B.cw(["r",1,"b",1])
D.c4s=w([D.DH,D.eW0,D.aOD],x.o)
D.dnU=w(["radio","music","listen"],x.s)
D.erh=new C.mJ("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dpo,D.c4s,D.dnU)
D.dxh=new B.bw(D.IM,[12],x.J)
D.aOG=new B.ea(["b","battery",0.2,0.3,D.dxh])
D.eWZ=new B.ea(["t","tv",0.8,0.3,A.jf])
D.cZC=w([D.aOG,D.DI,D.eWZ],x.d)
D.eW1=new B.cw(["s",1,"t",0])
D.aOE=new B.cw(["t",1,"b",1])
D.dhl=w([D.DH,D.eW1,D.aOE],x.o)
D.dpl=w(["tv","television","screen","watch"],x.s)
D.er2=new C.mJ("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cZC,D.dhl,D.dpl)
D.eWP=new B.ea(["z","buzzer",0.8,0.3,A.jf])
D.cFz=w([D.Jb,D.DI,D.eWP],x.d)
D.eW2=new B.cw(["s",1,"z",0])
D.eWk=new B.cw(["z",1,"b",1])
D.cUu=w([D.DH,D.eW2,D.eWk],x.o)
D.dmb=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.ere=new C.mJ("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cFz,D.cUu,D.dmb)
D.eWy=new B.ea(["h","heater",0.8,0.3,A.jf])
D.dbD=w([D.a7N,D.DI,D.eWy],x.d)
D.eVY=new B.cw(["s",1,"h",0])
D.eVy=new B.cw(["h",1,"b",1])
D.cVc=w([D.DH,D.eVY,D.eVy],x.o)
D.cpq=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.er3=new C.mJ("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dbD,D.cVc,D.cpq)
D.eX0=new B.ea(["s","solar",0.2,0.25,D.a5q])
D.dxl=new B.bw(D.aIu,[100],x.J)
D.eX3=new B.ea(["r","resistor",0.55,0.25,D.dxl])
D.eXa=new B.ea(["c","capacitor",0.85,0.25,A.jf])
D.eWu=new B.ea(["q","resistor",0.55,0.6,D.aG4])
D.eX1=new B.ea(["d","led",0.85,0.6,A.jf])
D.dgS=w([D.eX0,D.eX3,D.eXa,D.eWu,D.eX1],x.d)
D.eVX=new B.cw(["s",0,"r",0])
D.eVS=new B.cw(["r",1,"c",0])
D.eVp=new B.cw(["c",1,"s",1])
D.eVo=new B.cw(["c",0,"q",0])
D.eVR=new B.cw(["q",1,"d",0])
D.eVr=new B.cw(["d",1,"c",1])
D.d5f=w([D.eVX,D.eVS,D.eVp,D.eVo,D.eVR,D.eVr],x.o)
D.ddv=w(["capacitor","store","charge","flash"],x.s)
D.erg=new C.mJ("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dgS,D.d5f,D.ddv)
D.eWF=new B.ea(["b","battery",0.15,0.3,D.a5t])
D.eXg=new B.ea(["l1","bulb",0.5,0.3,A.jf])
D.eWM=new B.ea(["l2","bulb",0.85,0.3,A.jf])
D.cXH=w([D.eWF,D.eXg,D.eWM],x.d)
D.eVi=new B.cw(["b",0,"l1",0])
D.eVG=new B.cw(["l1",1,"l2",0])
D.eVH=new B.cw(["l2",1,"b",1])
D.d98=w([D.eVi,D.eVG,D.eVH],x.o)
D.dp6=w(["series","two bulbs","dim"],x.s)
D.er6=new C.mJ("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cXH,D.d98,D.dp6)
D.edt={volts:0,charge:1}
D.dxo=new B.bw(D.edt,[1.5,0],x.J)
D.eX8=new B.ea(["b","battery",0.75,0.3,D.dxo])
D.cX6=w([D.aOJ,D.eX8],x.d)
D.eVV=new B.cw(["s",0,"b",0])
D.eVm=new B.cw(["b",1,"s",1])
D.d5y=w([D.eVV,D.eVm],x.o)
D.ddE=w(["charge","rechargeable","flat","recharge"],x.s)
D.er4=new C.mJ("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cX6,D.d5y,D.ddE)
D.dxg=new B.bw(D.IM,[4.5],x.J)
D.eWA=new B.ea(["b","battery",0.2,0.3,D.dxg])
D.aOF=new B.ea(["p","phone",0.8,0.3,A.jf])
D.d8d=w([D.eWA,D.DI,D.aOF],x.d)
D.eW_=new B.cw(["s",1,"p",0])
D.a7M=new B.cw(["p",1,"b",1])
D.dl8=w([D.DH,D.eW_,D.a7M],x.o)
D.dmB=w(["phone","charger","usb","mobile"],x.s)
D.era=new C.mJ("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.d8d,D.dl8,D.dmB)
D.eWm=new B.ea(["f","fan",0.8,0.3,A.jf])
D.chw=w([D.Jb,D.eWm],x.d)
D.eVh=new B.cw(["b",0,"f",0])
D.eVw=new B.cw(["f",1,"b",1])
D.cVJ=w([D.eVh,D.eVw],x.o)
D.dfP=w(["fan","cool","air","wind"],x.s)
D.erj=new C.mJ("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.chw,D.cVJ,D.dfP)
D.eWT=new B.ea(["b","battery",0.15,0.2,D.a5t])
D.eWn=new B.ea(["a","ammeter",0.5,0.2,A.jf])
D.eWl=new B.ea(["l","bulb",0.85,0.2,A.jf])
D.eWV=new B.ea(["v","voltmeter",0.5,0.6,A.jf])
D.de_=w([D.eWT,D.eWn,D.eWl,D.eWV],x.d)
D.eVf=new B.cw(["b",0,"a",0])
D.eVe=new B.cw(["a",1,"l",0])
D.eW8=new B.cw(["v",0,"l",0])
D.eW9=new B.cw(["v",1,"l",1])
D.d5p=w([D.eVf,D.eVe,D.aOC,D.eW8,D.eW9],x.o)
D.dsw=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.erf=new C.mJ("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.de_,D.d5p,D.dsw)
D.eXj=new B.ea(["b","battery",0.15,0.2,D.aG1])
D.eWE=new B.ea(["t","tv",0.55,0.2,A.jf])
D.aG2=new B.bw(D.IM,[5],x.J)
D.eWs=new B.ea(["c","buck",0.4,0.5,D.aG2])
D.eWG=new B.ea(["p","phone",0.8,0.5,A.jf])
D.d3_=w([D.eXj,D.eWE,D.eWs,D.eWG],x.d)
D.eVl=new B.cw(["b",0,"t",0])
D.aOA=new B.cw(["b",0,"c",0])
D.aOB=new B.cw(["c",1,"p",0])
D.d8a=w([D.eVl,D.aOE,D.aOA,D.aOB,D.a7M],x.o)
D.d1a=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.er7=new C.mJ("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.d3_,D.d8a,D.d1a)
D.eWt=new B.ea(["c","buck",0.5,0.3,D.aG2])
D.cV2=w([D.aOG,D.eWt,D.aOF],x.d)
D.d_1=w([D.aOA,D.aOB,D.a7M],x.o)
D.csT=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.er1=new C.mJ("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cV2,D.d_1,D.csT)
D.eWK=new B.ea(["d","diode",0.5,0.3,A.jf])
D.d9m=w([D.a7N,D.eWK,D.aOH],x.d)
D.eVg=new B.cw(["b",0,"d",0])
D.eVs=new B.cw(["d",1,"r",0])
D.cI6=w([D.eVg,D.eVs,D.aOD],x.o)
D.d0P=w(["diode","protect","backwards","one way"],x.s)
D.erd=new C.mJ("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.d9m,D.cI6,D.d0P)
D.QP=w([D.erb,D.eri,D.er9,D.erc,D.er8,D.er5,D.erh,D.er2,D.ere,D.er3,D.erg,D.er6,D.er4,D.era,D.erj,D.erf,D.er7,D.er1,D.erd],B.av("O<mJ>"))
D.hnk=new C.Gj("Moon",1.62,A.dv,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hni=new C.Gj("Mars",3.71,A.aw,"Mars has about 38 percent of Earth's gravity.")
D.hnl=new C.Gj("Mercury",3.7,A.k9,"Mercury is small, so its gravity is like Mars.")
D.hnf=new C.Gj("Venus",8.87,A.aT,"Venus is almost as heavy as Earth, with strong gravity.")
D.hnh=new C.Gj("Earth",9.81,A.aQ,"On Earth gravity is strong, and the air also slows you down.")
D.hnj=new C.Gj("Neptune",11.15,A.d2,"Neptune pulls a little harder than Earth.")
D.hng=new C.Gj("Jupiter",24.79,A.cT,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.rB=w([D.hnk,D.hni,D.hnl,D.hnf,D.hnh,D.hnj,D.hng],B.av("O<Gj>"))
D.d5d=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.d5m=w([A.cm,A.M],x.O)
D.a40=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.d5X=w([0.2,0.5,0.8],x.n)
D.f1t=new B.cX(A.bl,A.J,4)
D.d6l=w([D.f1t],x.q)
D.ayv=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aYu=new C.KF(0,"accordion")
D.cW3=w([A.jz,A.Cf,A.C1],x.w)
D.d2q=w(["Mail","SMS","Ad"],x.s)
D.cWC=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hlx=new C.AJ(D.aYu,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.azl,D.cW3,D.d2q,D.cWC)
D.abm=new C.KF(1,"flip")
D.ddp=w([A.rs,A0.H6,A.uq],x.w)
D.d7V=w(["Unlock","Verify","Secure"],x.s)
D.cUZ=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hlw=new C.AJ(D.abm,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.ayP,D.ddp,D.d7V,D.cUZ)
D.aYv=new C.KF(2,"towers")
D.d6H=w([A.yS,A.qn,A.i_],x.w)
D.d6g=w(["Save","Grow","Earn"],x.s)
D.cJ_=w(["","",""],x.s)
D.hly=new C.AJ(D.aYv,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a3S,D.d6H,D.d6g,D.cJ_)
D.abn=new C.KF(3,"assemble")
D.den=w([A.oi,A.hs,A.e4],x.w)
D.d1O=w(["Launch","Charge","Shine"],x.s)
D.daJ=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hlA=new C.AJ(D.abn,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.axc,D.den,D.d1O,D.daJ)
D.aYw=new C.KF(4,"carousel")
D.dec=w([A.b9,A.eV],x.O)
D.d2z=w([A.oe,A.ane,A.OI],x.w)
D.cY5=w(["Explore","Discover","Learn"],x.s)
D.d8j=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hlv=new C.AJ(D.aYw,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dec,D.d2z,D.cY5,D.d8j)
D.aYx=new C.KF(5,"burst")
D.d6b=w([A.id,A.tB],x.O)
D.cWx=w([A.l5,A.mI,A.hZ],x.w)
D.cWT=w(["Cheer","Win","Love"],x.s)
D.cZ7=w(["Make some noise","First place","Share the joy"],x.s)
D.hlz=new C.AJ(D.aYx,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.d6b,D.cWx,D.cWT,D.cZ7)
D.ayw=w([D.hlx,D.hlw,D.hly,D.hlA,D.hlv,D.hlz],B.av("O<AJ>"))
D.box=new B.u(1,0.23137254901960785,0.16470588235294117,0.3686274509803922,A.q)
D.bq5=new B.u(1,0.7058823529411765,0.37254901960784315,0.5411764705882353,A.q)
D.d6G=w([D.YJ,D.box,D.bq5],x.O)
D.eSN=new B.bj("skin","Skin",A.anf)
D.eU8=new B.bj("muscle","Muscles",A.Ol)
D.eTR=new B.bj("organ","Organs",A.hZ)
D.bK4=new B.a0(62747,"MaterialIcons",!1)
D.eTX=new B.bj("bone","Skeleton",D.bK4)
D.eUe=new B.bj("vessel","Blood vessels",A.qp)
D.d6N=w([D.eSN,D.eU8,D.eTR,D.eTX,D.eUe],x.c)
D.eZi=new C.v1("Simple legs","Light. Land gently.",0.15,0.2)
D.eZk=new C.v1("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eZn=new C.v1("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.CL=w([D.eZi,D.eZk,D.eZn],x._)
D.bcd=new B.u(1,0.10588235294117647,0.10588235294117647,0.2,A.q)
D.d8e=w([D.Yf,D.bcd],x.O)
D.d8t=w([1.77,3.55,7.15,16.7],x.n)
D.d9M=w([A.Bi,A.kX],x.O)
D.bpl=new B.u(1,0.10588235294117647,0.0392156862745098,0.0392156862745098,A.q)
D.bjQ=new B.u(1,0.16470588235294117,0.058823529411764705,0.058823529411764705,A.q)
D.dat=w([D.bpl,D.bjQ],x.O)
D.bk3=new B.u(1,0.2980392156862745,0.0392156862745098,0.3686274509803922,A.q)
D.bio=new B.u(1,0.7058823529411765,0.09019607843137255,0.49019607843137253,A.q)
D.daz=w([D.YM,D.bk3,D.bio],x.O)
D.dba=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.dbb=w([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],x.t)
D.eOf=new B.z("spiral","Spiral")
D.ew9=new B.z("barred","Barred spiral")
D.eIa=new B.z("elliptical","Elliptical")
D.dbT=w([D.eOf,D.ew9,D.eIa],x.L)
D.eUX=new B.cw(["beat",0.18,0.28,0])
D.eW3=new B.cw(["burst",0.7,0.2,0])
D.eWe=new B.cw(["delay",0.45,0.5,1])
D.eVO=new B.cw(["ripple",0.75,0.6,3])
D.d1x=w([D.eUX,D.eW3,D.eWe,D.eVO],x.e)
D.dcK=w([O.lk,N.Ja,F.Tm],x.u)
D.hkL=new C.G4("First spark","A clock lights a burst and a ripple",D.d1x,D.dcK)
D.eVv=new B.cw(["beat",0.15,0.3,1])
D.eUB=new B.cw(["ripple",0.62,0.15,0])
D.eWa=new B.cw(["delay",0.4,0.45,0])
D.eVb=new B.cw(["ripple",0.7,0.45,0])
D.eUT=new B.cw(["delay",0.4,0.7,1])
D.eVQ=new B.cw(["shake",0.75,0.75,0])
D.dqf=w([D.eVv,D.eUB,D.eWa,D.eVb,D.eUT,D.eVQ],x.e)
D.et3=new B.z(2,4)
D.aOi=new B.z(4,5)
D.d53=w([O.lk,N.Ja,F.Tm,D.et3,D.aOi],x.u)
D.hkN=new C.G4("Heartbeat","Two thumps, then a shake",D.dqf,D.d53)
D.eV1=new B.cw(["dice",0.15,0.7,1])
D.eWg=new B.cw(["echo",0.4,0.7,0])
D.eV9=new B.cw(["comet",0.7,0.5,4])
D.eW4=new B.cw(["burst",0.72,0.2,1])
D.eVt=new B.cw(["burst",0.3,0.25,0])
D.eV2=new B.cw(["pop",0.55,0.85,0])
D.coY=w([D.eV1,D.eWg,D.eV9,D.eW4,D.eVt,D.eV2],x.e)
D.esr=new B.z(1,3)
D.ess=new B.z(1,4)
D.aOe=new B.z(0,5)
D.de7=w([O.lk,R.v0,D.esr,D.ess,D.aOe],x.u)
D.hkM=new C.G4("Fireworks","Dice launch comets that burst in colour",D.coY,D.de7)
D.eV6=new B.cw(["beat",0.15,0.2,2])
D.eVD=new B.cw(["chance",0.4,0.2,0])
D.eUZ=new B.cw(["ball",0.7,0.12,3])
D.eUM=new B.cw(["chance",0.4,0.5,1])
D.eWf=new B.cw(["ball",0.3,0.08,1])
D.eUF=new B.cw(["ripple",0.7,0.55,3])
D.chZ=w([D.eV6,D.eVD,D.eUZ,D.eUM,D.eWf,D.eUF],x.e)
D.et4=new B.z(2,5)
D.cFi=w([O.lk,R.v0,N.a7E,F.Tn,D.et4],x.u)
D.hkK=new C.G4("Rain","Balls fall at random and splash",D.chZ,D.cFi)
D.eVE=new B.cw(["beat",0.12,0.45,2])
D.eW5=new B.cw(["toggle",0.38,0.2,0])
D.eWc=new B.cw(["wash",0.7,0.15,4])
D.eV0=new B.cw(["count3",0.38,0.45,0])
D.eW7=new B.cw(["burst",0.72,0.4,0])
D.eVu=new B.cw(["light",0.55,0.7,1])
D.eUN=new B.cw(["pop",0.8,0.8,4])
D.dgQ=w([D.eVE,D.eW5,D.eWc,D.eV0,D.eW7,D.eVu,D.eUN],x.e)
D.etA=new B.z(3,6)
D.cl7=w([O.lk,R.v0,N.a7E,F.Tn,D.aOe,D.etA],x.u)
D.hkI=new C.G4("Disco","A beat drives lights, washes and bursts",D.dgQ,D.cl7)
D.eWj=new B.cw(["button",0.12,0.2,0])
D.eUH=new B.cw(["delay",0.34,0.2,1])
D.eWi=new B.cw(["light",0.56,0.2,1])
D.eWb=new B.cw(["delay",0.56,0.45,1])
D.eVF=new B.cw(["ball",0.34,0.6,0])
D.eUL=new B.cw(["delay",0.34,0.8,1])
D.eUA=new B.cw(["burst",0.7,0.8,5])
D.c5a=w([D.eWj,D.eUH,D.eWi,D.eWb,D.eVF,D.eUL,D.eUA],x.e)
D.evM=new B.z(5,6)
D.dmk=w([O.lk,R.v0,F.Tm,F.Tn,D.aOi,D.evM],x.u)
D.hkJ=new C.G4("Domino","Tap the button and watch it run down the line",D.c5a,D.dmk)
D.ayT=w([D.hkL,D.hkN,D.hkM,D.hkK,D.hkI,D.hkJ],B.av("O<G4>"))
D.dc0=w([0.05,0.15,0.25],x.n)
D.dcV=w([1.5,3,4.5,9,12],x.n)
D.eRr=new B.bj("dice","Dice",A.p6)
D.eSt=new B.bj("coin","Coin",M.yM)
D.eU9=new B.bj("num","Number",A.yU)
D.dd8=w([D.eRr,D.eSt,D.eU9],x.c)
D.ddc=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fTX=new C.Pq("Moon",1.62,0,4291941851)
D.fTY=new C.Pq("Mars",3.71,0.01,4294472049)
D.fTZ=new C.Pq("Earth",9.81,1,4281908728)
D.fU0=new C.Pq("Jupiter",24.79,1.4,4294677052)
D.fU_=new C.Pq("Sun",274,2,4294688548)
D.zi=w([D.fTX,D.fTY,D.fTZ,D.fU0,D.fU_],B.av("O<Pq>"))
D.ayZ=w([A.cs,A.aT,A.bj,A.aQ,A.bv,A.c4,A.cT,A.iM],x.O)
D.ded=w([A.c4,A.aQ,A.dQ,A.bj],x.O)
D.az1=w([0,0.7,1],x.n)
D.deE=w([0,0.62,1],x.n)
D.df8=w([],x.m)
D.dfc=w([],x.C)
D.a4n=w([],x.R)
D.ekO=new C.ee("battery","Battery","\ud83d\udd0b",A.bj,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.ekU=new C.ee("solar","Solar panel","\u2600\ufe0f",A.bG,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.ely=new C.ee("crank","Hand crank","\ud83d\udd04",A.cT,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.ela=new C.ee("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aQ,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.ekG=new C.ee("buck","Step-down converter","\ud83d\udd3d",A.iM,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.el8=new C.ee("regulator","5 V regulator","\ud83e\uddca",A.bL,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.elD=new C.ee("diode","Diode","\u27a1\ufe0f",A.aT,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.elk=new C.ee("ldr","Light sensor","\ud83c\udf1e",A.dQ,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.ekZ=new C.ee("switch","Switch","\ud83c\udf9a\ufe0f",A.bv,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.elA=new C.ee("fuse","Fuse","\ud83e\uddef",A.cs,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.eky=new C.ee("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.iM,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.ell=new C.ee("resistor","Resistor","\u3030\ufe0f",A.aT,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eln=new C.ee("bulb","Light bulb","\ud83d\udca1",A.dQ,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.ekW=new C.ee("led","LED","\ud83d\udd34",A.aw,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.el_=new C.ee("motor","Motor","\u2699\ufe0f",A.bL,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.elh=new C.ee("buzzer","Buzzer","\ud83d\udd14",A.c4,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.ekP=new C.ee("heater","Heater","\ud83d\udd25",A.cT,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.elc=new C.ee("capacitor","Capacitor","\ud83e\udeab",A.cp,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.el4=new C.ee("radio","Radio","\ud83d\udcfb",A.o0,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.el1=new C.ee("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b9,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.ekF=new C.ee("voltmeter","Voltmeter","\ud83e\udded",A.bt,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.ekM=new C.ee("ammeter","Ammeter","\ud83d\udcdf",A.aT,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.ekS=new C.ee("fan","Fan","\ud83c\udf00",A.aQ,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.elF=new C.ee("speaker","Speaker","\ud83d\udd0a",A.c4,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.elu=new C.ee("clock","Digital clock","\u23f0",A.bj,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.el7=new C.ee("calculator","Calculator","\ud83e\uddee",A.Ls,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.ekL=new C.ee("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cp,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.elE=new C.ee("router","WiFi router","\ud83d\udcf6",A.iM,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.elH=new C.ee("siren","Siren","\ud83d\udea8",A.aw,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.ekB=new C.ee("toycar","Toy car","\ud83d\ude97",A.cT,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.elI=new C.ee("kettle","Kettle","\ud83e\uded6",A.mw,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.ekJ=new C.ee("lamp","Desk lamp","\ud83e\ude94",A.dQ,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.ekV=new C.ee("lights","Party lights","\ud83c\udf84",A.o0,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.el5=new C.ee("fridge","Fridge","\ud83e\uddca",A.he,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.ekD=new C.ee("washer","Washing machine","\ud83e\udee7",A.cp,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.elv=new C.ee("blender","Blender","\ud83e\udd64",A.cs,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.el2=new C.ee("drone","Drone","\ud83d\ude81",A.bL,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.ekI=new C.ee("drill","Power drill","\ud83d\udd29",A.aT,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.el6=new C.ee("torch","Torch","\ud83d\udd26",A.bM,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.els=new C.ee("neon","Neon sign","\ud83e\udea7",A.c4,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.ekE=new C.ee("microwave","Microwave","\ud83c\udf72",A.cT,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.elm=new C.ee("doorbell","Doorbell","\ud83d\udd14",A.bG,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.ekR=new C.ee("camera","Security camera","\ud83d\udcf7",A.al,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.elg=new C.ee("console","Game console","\ud83c\udfae",A.bv,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.elx=new C.ee("heartmon","Heart monitor","\ud83e\ude7a",A.ha,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.ekC=new C.ee("aquarium","Aquarium","\ud83d\udc20",A.b9,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.elb=new C.ee("lighthouse","Lighthouse","\ud83d\uddfc",A.dQ,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.elj=new C.ee("discoball","Disco ball","\ud83e\udea9",A.o0,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.elC=new C.ee("robot","Robot","\ud83e\udd16",A.aQ,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.ekA=new C.ee("toaster","Toaster","\ud83c\udf5e",A.dW,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.elG=new C.ee("ledstrip","LED strip","\ud83c\udf08",A.c4,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.elr=new C.ee("pump","Water pump","\ud83d\udeb0",A.aQ,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eld=new C.ee("hairdryer","Hair dryer","\ud83d\udca8",A.id,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.elp=new C.ee("headphones","Headphones","\ud83c\udfa7",A.bv,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.ekK=new C.ee("smartwatch","Apple Watch Ultra","\u231a",A.bt,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.elB=new C.ee("tablet","iPad Pro M5","\ud83d\udcf2",A.cp,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.ekx=new C.ee("lgtv","LG OLED evo G5","\ud83d\udcfa",A.ha,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.el3=new C.ee("sonytv","Sony Bravia 9","\ud83d\udcfa",A.br,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.ekX=new C.ee("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eli=new C.ee("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.tx,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.ekz=new C.ee("iphonefold","iPhone Fold","\ud83d\udcf1",A.b5,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.ekN=new C.ee("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d2,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.elz=new C.ee("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cC,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.ele=new C.ee("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.be,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.el9=new C.ee("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cc,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.elq=new C.ee("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aw,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.ekY=new C.ee("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bj,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.elf=new C.ee("honor","Honor Magic V5","\ud83d\udcf1",A.cp,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.elo=new C.ee("vivo","vivo X300 Pro","\ud83d\udcf1",A.cT,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.elt=new C.ee("ereader","Kindle Scribe","\ud83d\udcd6",A.br,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.ekw=new C.ee("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cb,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.el0=new C.ee("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cC,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.ekT=new C.ee("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b9,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.ekH=new C.ee("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dQ,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.ekQ=new C.ee("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aw,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.elw=new C.ee("vision","Apple Vision Pro","\ud83e\udd7d",A.bv,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Re=w([D.ekO,D.ekU,D.ely,D.ela,D.ekG,D.el8,D.elD,D.elk,D.ekZ,D.elA,D.eky,D.ell,D.eln,D.ekW,D.el_,D.elh,D.ekP,D.elc,D.el4,D.el1,D.ekF,D.ekM,D.ekS,D.elF,D.elu,D.el7,D.ekL,D.elE,D.elH,D.ekB,D.elI,D.ekJ,D.ekV,D.el5,D.ekD,D.elv,D.el2,D.ekI,D.el6,D.els,D.ekE,D.elm,D.ekR,D.elg,D.elx,D.ekC,D.elb,D.elj,D.elC,D.ekA,D.elG,D.elr,D.eld,D.elp,D.ekK,D.elB,D.ekx,D.el3,D.ekX,D.eli,D.ekz,D.ekN,D.elz,D.ele,D.el9,D.elq,D.ekY,D.elf,D.elo,D.elt,D.ekw,D.el0,D.ekT,D.ekH,D.ekQ,D.elw],B.av("O<ee>"))
D.dfA=w([0,0.46,0.82],x.n)
D.dfL=w([5,10,15,25,45,60],x.t)
D.dg6=w([-0.045,0.03,-0.015],x.n)
D.dgv=w([0.9,0.97,1],x.n)
D.dgL=w([A.c4,A.cT,A.bG,A.bv],x.O)
D.azt=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.uC=w([0.05,0.2,0.35],x.n)
D.dhp=w([A.Bi,A.hG],x.O)
D.fTL=new C.vf("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fTM=new C.vf("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fTD=new C.vf("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fTK=new C.vf("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fTI=new C.vf("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fTE=new C.vf("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fTJ=new C.vf("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fTF=new C.vf("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fTH=new C.vf("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fTG=new C.vf("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.CT=w([D.fTL,D.fTM,D.fTD,D.fTK,D.fTI,D.fTE,D.fTJ,D.fTF,D.fTH,D.fTG],B.av("O<vf>"))
D.bkp=new B.u(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.q)
D.bhR=new B.u(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.q)
D.dhQ=w([D.Yf,D.bkp,D.bhR,A.af4],x.O)
D.b4W=new B.ac(0,A.G,A.ig,A.dB,6)
D.diN=w([D.b4W],x.V)
D.djv=w([A.he,A.ex,A.aQ,A.Fb],x.O)
D.erD=new B.z(0,"AND")
D.est=new B.z(1,"Adder")
D.et5=new B.z(2,"Blinker")
D.etB=new B.z(3,"Memory")
D.djA=w([D.erD,D.est,D.et5,D.etB],x.I)
D.azG=w([-104,0,104],x.n)
D.azH=w([-14,3],x.n)
D.dks=w([-8,0,8],x.n)
D.azP=w([-92,0,92],x.n)
D.eyE=new B.z("Wide",1.7777777777777777)
D.ePi=new B.z("Tall",0.5625)
D.a4E=w([D.eyE,H.aOl,D.ePi],B.av("O<+(n,L)>"))
D.dkR=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eZf=new C.v1("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eZm=new C.v1("Medium tank","Balanced.",0.35,1)
D.eZl=new C.v1("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Rs=w([D.eZf,D.eZm,D.eZl],x._)
D.nw=w([0.04,0.2,0.36],x.n)
D.aA_=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eTQ=new B.bj(D.aYu,"Fold",M.aob)
D.eT0=new B.bj(D.abm,"Flip",A.GI)
D.bKn=new B.a0(62889,"MaterialIcons",!1)
D.eU7=new B.bj(D.aYv,"Rise",D.bKn)
D.aop=new B.a0(983870,"MaterialIcons",!1)
D.eQX=new B.bj(D.abn,"Assemble",D.aop)
D.eR5=new B.bj(D.aYw,"Spin",D.amK)
D.eR2=new B.bj(D.aYx,"Pop",A.l5)
D.dmh=w([D.eTQ,D.eT0,D.eU7,D.eQX,D.eR5,D.eR2],B.av("O<+(KF,n,a0)>"))
D.aA4=w([A.c4,A.dQ,A.bt,A.aQ,A.bv,A.cs],x.O)
D.dmH=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.eOO=new B.z("type","Typewriter")
D.eH2=new B.z("bounce","Bounce")
D.ePH=new B.z("wave","Wave")
D.eN6=new B.z("neon","Neon flicker")
D.eQN=new B.z("zoom","Pop")
D.ewU=new B.z("drop","Drop in")
D.esE=new B.z("fly","Fly in")
D.eOi=new B.z("spin","Spin in")
D.eIH=new B.z("flip","Flip")
D.eJV=new B.z("jelly","Jelly")
D.eO6=new B.z("shake","Shake")
D.eII=new B.z("float","Float")
D.eN4=new B.z("pulse","Heartbeat")
D.eOp=new B.z("swing","Swing")
D.eNH=new B.z("reveal","Reveal")
D.eyF=new B.z("blur","Zoom out")
D.eHP=new B.z("domino","Domino")
D.exP=new B.z("spiral","Spiral in")
D.eK8=new B.z("cascade","Shine sweep")
D.ePN=new B.z("wobble","Wobble")
D.eDu=new B.z("rise","Rise up")
D.eCM=new B.z("scatter","Scatter & gather")
D.dn0=w([D.eOO,D.eH2,D.ePH,D.eN6,H.aOq,D.eQN,H.aOx,D.ewU,D.esE,D.eOi,D.eIH,D.eJV,D.eO6,D.eII,D.eN4,D.eOp,D.eNH,D.eyF,D.eHP,D.exP,D.eK8,D.ePN,D.eDu,D.eCM],x.L)
D.bqD=new B.u(1,1,0.8784313725490196,0.4,A.q)
D.dnc=w([D.bqD,A.LR],x.O)
D.dnK=w([3,4.5,5,6,9],x.n)
D.b5u=new B.ac(0,A.G,A.aW,A.J,16)
D.dob=w([D.b5u],x.V)
D.Rv=w([A.c4,A.bG,A.bj,A.aQ,A.bv,A.cs,A.c,A.cT],x.O)
D.doJ=w(["solar","turbine","crank","pot"],x.s)
D.bbc=new B.u(1,0.16862745098039217,0.06274509803921569,0.3333333333333333,A.q)
D.bfn=new B.u(1,0.984313725490196,0.8431372549019608,0.5254901960784314,A.q)
D.doM=w([D.bbc,G.afx,D.bfn],x.O)
D.dpa=w([0,0.35,0.75,1],x.n)
D.eRk=new B.bj("drop","Drop",D.ao1)
D.eRm=new B.bj("weight","Weight",T.aot)
D.eU1=new B.bj("cannon","Newton's cannon",A.anq)
D.dpU=w([D.eRk,D.eRm,D.eU1],x.c)
D.dqt=w(["volts","level","ohms","on"],x.s)
D.eMl=new B.z("\ud83c\udf19","Midnight")
D.eLN=new B.z("\u2728","Starfield")
D.etH=new B.z("\ud83c\udf0c","Aurora")
D.ezh=new B.z("\ud83c\udf05","Savanna sunset")
D.eLU=new B.z("\ud83c\udf0a","Ocean waves")
D.eA0=new B.z("\ud83d\udd79\ufe0f","Neon grid")
D.eFF=new B.z("\ud83d\udcbb","Code rain")
D.eC0=new B.z("\ud83c\udf89","Confetti")
D.eEy=new B.z("\ud83c\udf86","Fireworks")
D.ev3=new B.z("\ud83e\udee7","Bubbles")
D.ePg=new B.z("\u2744\ufe0f","Snowfall")
D.eAH=new B.z("\ud83e\uddf6","Kente weave")
D.ewo=new B.z("\ud83d\udd2e","Bokeh lights")
D.eFv=new B.z("\ud83c\udf27\ufe0f","Rain")
D.ex0=new B.z("\ud83d\udd25","Fire")
D.eEW=new B.z("\ud83c\udfd4\ufe0f","Paper hills")
D.eB1=new B.z("\ud83c\udfad","Stage")
D.eCP=new B.z("\u2600\ufe0f","Sunburst")
D.eFj=new B.z("\ud83e\udee0","Lava lamp")
D.exE=new B.z("\ud83c\udf03","City night")
D.dro=w([D.eMl,D.eLN,D.etH,D.ezh,D.eLU,D.eA0,D.eFF,D.eC0,D.eEy,D.ev3,D.ePg,D.eAH,D.ewo,D.eFv,D.ex0,D.eEW,D.eB1,D.eCP,D.eFj,D.exE],x.L)
D.drH=w([0,0.35,0.55,0.75,1],x.n)
D.drV=w([A.jz,A.Cf,A.C1,A.rs,A0.H6,A.uq,A.yS,A.qn,A.i_,A.oi,A.hs,A.e4,A.hZ,A.ik,A.mI,A.m5,A.wk,A.rw,A.m6,A.Gz,A.wj,A.C7,A.C3,A.anX,A.Od,A.Cd,A.Ol,A.anC,G.aol,A.l5],x.w)
D.dsQ=w([0.72,1],x.n)
D.dt2=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.edg={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dvj=new B.bw(D.edg,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],B.av("bw<n,n>"))
D.eba={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hdi=new C.yh("Switch",F.us,A.bG,0,"Tap it to turn it ON or OFF.")
D.hde=new C.yh("Blinker",A.p9,A.bt,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hdf=new C.yh("AND",D.aop,A.cp,2,"ON only when BOTH inputs are ON.")
D.bLQ=new B.a0(63671,"MaterialIcons",!1)
D.hdd=new C.yh("OR",D.bLQ,A.bv,2,"ON when EITHER input is ON.")
D.hdg=new C.yh("XOR",I.a1c,A.c4,2,"ON when the inputs are DIFFERENT.")
D.hda=new C.yh("NAND",A.uc,A.aQ,2,"OFF only when BOTH inputs are ON.")
D.bKX=new B.a0(63176,"MaterialIcons",!1)
D.hdb=new C.yh("NOR",D.bKX,A.iM,2,"ON only when BOTH inputs are OFF.")
D.hdc=new C.yh("NOT",A_.Cg,A.cT,1,"Flips the signal: ON becomes OFF.")
D.hdh=new C.yh("Light",A.rr,A.dQ,1,"Glows when its input is ON.")
D.hdj=new C.yh("Buzzer",A.uu,A.cs,1,"Beeps while its input is ON.")
D.zw=new B.bw(D.eba,[D.hdi,D.hde,D.hdf,D.hdd,D.hdg,D.hda,D.hdb,D.hdc,D.hdh,D.hdj],B.av("bw<n,yh>"))
D.ed1={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eRM=new B.bj(3,20,1.9)
D.eRf=new B.bj(33,90,1.6)
D.eUs=new B.bj(52,15,3.2)
D.eUq=new B.bj(45,-100,1.8)
D.eSU=new B.bj(-15,-60,1.9)
D.eSn=new B.bj(-25,140,2.4)
D.eSe=new B.bj(-82,0,2.2)
D.aFS=new B.bw(D.ed1,[D.eRM,D.eRf,D.eUs,D.eUq,D.eSU,D.eSn,D.eSe],B.av("bw<n,+(L,L,L)>"))
D.cVu=w([A.A],x.M)
D.cVP=w([A.az,A.aE],x.M)
D.d45=w([A.az,A.A,A.aE],x.M)
D.d5E=w([A.az,A.ln,A.A,A.lS,A.aE],x.M)
D.djw=w([A.az,A.ln,A.a4,A.a8,A.lS,A.aE],x.M)
D.dwG=new B.du([1,D.cVu,2,D.cVP,3,D.d45,4,A.aAw,5,D.d5E,6,D.djw],B.av("du<H,ai<df>>"))
D.edr={Calm:0,Box:1,Sleep:2}
D.cCJ=w([4,2,6,0],x.n)
D.cCQ=w([4,4,4,4],x.n)
D.cCR=w([4,7,8,0],x.n)
D.RU=new B.bw(D.edr,[D.cCJ,D.cCQ,D.cCR],B.av("bw<n,ai<L>>"))
D.ebl={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.xd=new C.a0y(0,"source")
D.d56=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hjo=new C.qc("Clock",A.p9,D.xd,A.bt,D.d56)
D.hjk=new C.qc("Button",A.Cj,D.xd,A.aT,A.Z)
D.dnW=w(["random","quick","slow"],x.s)
D.hjv=new C.qc("Dice",A.p6,D.xd,A.c4,D.dnW)
D.bLv=new B.a0(63484,"MaterialIcons",!1)
D.En=new C.a0y(1,"logic")
D.dsL=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hjr=new C.qc("Delay",D.bLv,D.En,A.cp,D.dsL)
D.dfS=w(["fast","mid","slow"],x.s)
D.hjw=new C.qc("Echo",A.anR,D.En,A.bv,D.dfS)
D.hjt=new C.qc("Every 2nd",A_.Cg,D.En,A.iM,A.Z)
D.bLa=new B.a0(63309,"MaterialIcons",!1)
D.hjq=new C.qc("Every 3rd",D.bLa,D.En,A.aQ,A.Z)
D.bN1=new B.a0(983902,"MaterialIcons",!1)
D.c4y=w(["50%","25%","75%"],x.s)
D.hjy=new C.qc("Chance",D.bN1,D.En,A.cT,D.c4y)
D.qR=new C.a0y(2,"out")
D.hjm=new C.qc("Light",A.rr,D.qR,A.dQ,A.Z)
D.hjn=new C.qc("Burst",A.l5,D.qR,A.c4,A.Z)
D.hjl=new C.qc("Ripple",A.yX,D.qR,A.b9,A.Z)
D.hju=new C.qc("Ball",A.ao3,D.qR,A.cT,A.Z)
D.hjs=new C.qc("Comet",A.oi,D.qR,A.bv,A.Z)
D.bMN=new B.a0(983669,"MaterialIcons",!1)
D.hjx=new C.qc("Shake",D.bMN,D.qR,A.cs,A.Z)
D.hjz=new C.qc("Pop",A.GA,D.qR,A.bj,A.Z)
D.hjp=new C.qc("Wash",A.Op,D.qR,A.pM,A.Z)
D.mP=new B.bw(D.ebl,[D.hjo,D.hjk,D.hjv,D.hjr,D.hjw,D.hjt,D.hjq,D.hjy,D.hjm,D.hjn,D.hjl,D.hju,D.hjs,D.hjx,D.hjz,D.hjp],B.av("bw<n,qc>"))
D.ebx={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.zY=new C.JC(0,"tv")
D.f_N=new C.mg("Samsung Neo QLED 8K",D.zY,F.Fe,A.aQ)
D.f_E=new C.mg("LG OLED evo G5",D.zY,A.eg,A.ha)
D.f_v=new C.mg("Sony Bravia 9",D.zY,A.r1,A.br)
D.f_z=new C.mg("Apple TV 4K",D.zY,A.e3,A.bO)
D.f_w=new C.mg("Bang and Olufsen Beovision",D.zY,F.ES,F.tx)
D.Jf=new C.JC(1,"iphone")
D.aP4=new C.mg("iPhone 18 Pro Max",D.Jf,D.ai1,A.cb)
D.wJ=new C.JC(3,"fold")
D.br0=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.f_J=new C.mg("iPhone Fold",D.wJ,D.br0,A.b5)
D.v4=new C.JC(2,"android")
D.f_K=new C.mg("Samsung Galaxy S26 Ultra",D.v4,F.adT,A.d2)
D.bjU=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.f_C=new C.mg("Samsung Galaxy Z Fold7",D.wJ,D.bjU,A.cC)
D.f_y=new C.mg("Google Pixel 10 Pro XL",D.v4,A.dv,A.be)
D.f_G=new C.mg("Xiaomi 16 Ultra",D.v4,A.hV,A.cc)
D.f_B=new C.mg("Huawei Mate 80 Pro Max",D.v4,A.ej,A.aw)
D.f_x=new C.mg("OPPO Find X9 Ultra",D.v4,A.dZ,A.bj)
D.f_P=new C.mg("Honor Magic V5",D.wJ,A.d6,A.cp)
D.f_D=new C.mg("vivo X300 Pro",D.v4,A.hG,A.cT)
D.Tx=new C.JC(4,"tablet")
D.f_I=new C.mg("iPad Pro M5",D.Tx,A.dv,A.aQ)
D.a7Y=new C.JC(5,"reader")
D.f_Q=new C.mg("Kindle Scribe",D.a7Y,A.e6,A.br)
D.zZ=new C.JC(6,"computer")
D.f_H=new C.mg("MacBook Pro M5 Max",D.zZ,A.dv,A.cb)
D.f_M=new C.mg("iMac 32 inch",D.zZ,A.bO,A.cC)
D.f_F=new C.mg("Pro Display XDR 8K",D.zZ,A.hV,A.b9)
D.f_A=new C.mg("Sony Laser Projector",D.zZ,A.cm,A.dQ)
D.f_L=new C.mg("Luxury car touchscreen",D.zZ,K.nb,A.aw)
D.f_O=new C.mg("Apple Vision Pro",D.zZ,A.hf,A.bv)
D.mc=new B.bw(D.ebx,[D.f_N,D.f_E,D.f_v,D.f_z,D.f_w,D.aP4,D.f_J,D.f_K,D.f_C,D.f_y,D.f_G,D.f_B,D.f_x,D.f_P,D.f_D,D.f_I,D.f_Q,D.f_H,D.f_M,D.f_F,D.f_A,D.f_L,D.f_O],B.av("bw<n,mg>"))
D.ebF={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.btM=new C.fO(20,4,13,!1)
D.buc=new C.fO(14,5,13.5,!1)
D.bu3=new C.fO(9,2.4,10,!1)
D.buh=new C.fO(7,5,12.5,!1)
D.bu6=new C.fO(8,3.5,12,!1)
D.btI=new C.fO(15,2,6,!1)
D.buf=new C.fO(45,6,13.5,!0)
D.btY=new C.fO(10,8,13.5,!1)
D.btQ=new C.fO(25,3,12,!0)
D.btW=new C.fO(35,4,12,!0)
D.btX=new C.fO(40,4.5,9.5,!0)
D.btZ=new C.fO(55,3,9,!0)
D.btJ=new C.fO(18,3,9,!1)
D.bue=new C.fO(22,4,13.5,!1)
D.bu7=new C.fO(16,5,13.5,!1)
D.btU=new C.fO(30,4,9,!0)
D.buq=new C.fO(5,3.5,13,!1)
D.bu1=new C.fO(25,3,13.5,!0)
D.bua=new C.fO(14,2.5,9,!1)
D.bu0=new C.fO(6,6,13,!1)
D.bui=new C.fO(30,1.2,5,!0)
D.bup=new C.fO(35,3,4.5,!0)
D.bul=new C.fO(20,4.5,7.5,!0)
D.bu_=new C.fO(55,5.5,13.5,!0)
D.btH=new C.fO(45,5.5,13.5,!0)
D.bub=new C.fO(40,5.5,13.5,!0)
D.buo=new C.fO(60,6,13.5,!0)
D.aiu=new C.fO(28,4,7,!0)
D.FP=new C.fO(25,4,7,!0)
D.btT=new C.fO(30,4,7,!0)
D.btO=new C.fO(22,4,7,!0)
D.btP=new C.fO(24,4,7,!0)
D.bu2=new C.fO(60,3,5.5,!0)
D.btK=new C.fO(18,9,14,!0)
D.btR=new C.fO(25,9,14,!0)
D.aiv=new C.fO(30,8,14,!0)
D.btN=new C.fO(20,8,14,!0)
D.btV=new C.fO(30,9,14,!0)
D.buj=new C.fO(22,5,9.5,!0)
D.btL=new C.fO(30,2.5,10.5,!0)
D.bu8=new C.fO(50,5.5,13.5,!0)
D.bun=new C.fO(12,2,9.5,!1)
D.bu5=new C.fO(16,1.3,9.5,!0)
D.bug=new C.fO(40,2.5,7,!0)
D.bum=new C.fO(60,1.2,4.8,!0)
D.buk=new C.fO(18,5,13.5,!0)
D.bud=new C.fO(8,2,9.5,!1)
D.bu4=new C.fO(12,2.5,8,!1)
D.btS=new C.fO(20,3.5,13.5,!0)
D.bu9=new C.fO(3.5,3,13,!1)
D.zx=new B.bw(D.ebF,[D.btM,D.buc,D.bu3,D.buh,D.bu6,D.btI,D.buf,D.btY,D.btQ,D.btW,D.btX,D.btZ,D.btJ,D.bue,D.bu7,D.btU,D.buq,D.bu1,D.bua,D.bu0,D.bui,D.bup,D.bul,D.bu_,D.btH,D.bub,D.buo,D.aiu,D.FP,D.btT,D.FP,D.btO,D.FP,D.btP,D.aiu,D.FP,D.bu2,D.btK,D.btR,D.aiv,D.btN,D.btV,D.buj,D.btL,D.bu8,D.bun,D.bu5,D.bug,D.bum,D.FP,D.aiv,D.buk,D.bud,D.bu4,D.btS,D.bu9],B.av("bw<n,fO>"))
D.dxF=new B.du([A.p1,1,A.qc,1,A.qd,1,A.c7,1,A.jO,2,A.w3,4,A.yu,1,A.yv,2,A.yw,4,A.u8,2,A.w2,4,A.yt,8],B.av("du<tn,H>"))
D.ebk={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eQt=new B.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.evJ=new B.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.evE=new B.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eI1=new B.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eIY=new B.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eHY=new B.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.etK=new B.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eFY=new B.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eQB=new B.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eJj=new B.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.ez6=new B.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eto=new B.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.ey5=new B.z("Movement","They pull your legs together and help you balance.")
D.eA2=new B.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.evS=new B.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eNX=new B.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eP5=new B.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eFG=new B.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eOP=new B.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eEg=new B.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eJs=new B.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.etv=new B.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eAp=new B.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eJ6=new B.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eEC=new B.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eOX=new B.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eHs=new B.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.etI=new B.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eK1=new B.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eNA=new B.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eLL=new B.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.erO=new B.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eHb=new B.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eHf=new B.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eB9=new B.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.ew5=new B.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.ezR=new B.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eG7=new B.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eMA=new B.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eQy=new B.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eJp=new B.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.erx=new B.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eGj=new B.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.esm=new B.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eMO=new B.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eNT=new B.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eGJ=new B.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eN0=new B.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.etx=new B.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eOu=new B.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.exs=new B.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eMd=new B.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eAO=new B.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eEw=new B.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eJJ=new B.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eOE=new B.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eOw=new B.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eOA=new B.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eF3=new B.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eKz=new B.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eLI=new B.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eOg=new B.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eGI=new B.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eCS=new B.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eBA=new B.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eH6=new B.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eJC=new B.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eDn=new B.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eE3=new B.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.exQ=new B.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eNP=new B.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eyG=new B.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.esj=new B.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eB8=new B.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.ese=new B.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.ewx=new B.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eBd=new B.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eyQ=new B.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eJY=new B.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eA5=new B.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eQg=new B.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eBK=new B.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eEX=new B.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eHA=new B.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eyZ=new B.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eyI=new B.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dxM=new B.bw(D.ebk,[D.eQt,D.evJ,D.evE,D.eI1,D.eIY,D.eHY,D.etK,D.eFY,D.eQB,D.eJj,D.ez6,D.eto,D.ey5,D.eA2,D.evS,D.eNX,D.eP5,D.eFG,D.eOP,D.eEg,D.eJs,D.etv,D.eAp,D.eJ6,D.eEC,D.eOX,D.eHs,D.etI,D.eK1,D.eNA,D.eLL,D.erO,D.eHb,D.eHf,D.eB9,D.ew5,D.ezR,D.eG7,D.eMA,D.eQy,D.eJp,D.erx,D.eGj,D.esm,D.eMO,D.eNT,D.eGJ,D.eN0,D.etx,D.eOu,D.exs,D.eMd,D.eAO,D.eEw,D.eJJ,D.eOE,D.eOw,D.eOA,D.eF3,D.eKz,D.eLI,D.eOg,D.eGI,D.eCS,D.eBA,D.eH6,D.eJC,D.eDn,D.eE3,D.exQ,D.eNP,D.eyG,D.esj,D.eB8,D.ese,D.ewx,D.eBd,D.eyQ,D.eJY,D.eA5,D.eQg,D.eBK,D.eEX,D.eHA,D.eyZ,D.eyI],B.av("bw<n,+(n,n)>"))
D.dxO=new B.hg(A.G,11)
D.dxS=new B.hg(A.G,30)
D.dEL=new C.UF(null)
D.dEM=new C.UG(null)
D.dEZ=new C.UH(null)
D.dH_=new C.UL(null)
D.dHO=new C.Vl(null)
D.dHQ=new C.Vm(null)
D.dIn=new C.Vu(null)
D.dKi=new C.Vy(null)
D.dKj=new C.VA(null)
D.dKl=new C.VB(null)
D.dM0=new C.W2(null)
D.dMG=new C.W3(null)
D.dQR=new C.W8(null)
D.e5K=new C.W9(null)
D.e5M=new C.Wa(null)
D.e5N=new C.Wd(null)
D.e5O=new C.We(null)
D.e7H=new C.Wm(null)
D.e7I=new C.Wn(null)
D.e7Y=new C.Wx(null)
D.e7Z=new C.Wy(null)
D.e8_=new C.a8t(null)
D.e8A=new C.WA(null)
D.ea2=new C.WE(null)
D.edD=new B.t(0,118)
D.aIA=new B.t(0,13)
D.edE=new B.t(0,17)
D.edH=new B.t(0,330)
D.edN=new B.t(0,-13)
D.edO=new B.t(0,-17)
D.edP=new B.t(0,-18)
D.edQ=new B.t(0,-19)
D.edT=new B.t(0,-28)
D.edU=new B.t(0,-31)
D.edV=new B.t(0,-32)
D.edW=new B.t(0,-6771)
D.edZ=new B.t(-9.5,-11)
D.ee1=new B.t(10,20)
D.ee4=new B.t(10,-13)
D.ee5=new B.t(10,-22)
D.ee6=new B.t(10,-4)
D.a6P=new B.t(11,8)
D.eee=new B.t(12,2)
D.eef=new B.t(14,0)
D.eeg=new B.t(14,12)
D.aIL=new B.t(14,8)
D.eeh=new B.t(14,-17)
D.aIN=new B.t(14,-3)
D.aIO=new B.t(14,-4)
D.eek=new B.t(15,0)
D.eel=new B.t(15,-12)
D.eeo=new B.t(16,-8)
D.eep=new B.t(18,14)
D.eeq=new B.t(18,-12)
D.aIT=new B.t(20,0)
D.eey=new B.t(20,15)
D.eez=new B.t(20,-17)
D.eeA=new B.t(20,-3)
D.eeB=new B.t(21,8)
D.eeF=new B.t(22,10)
D.aIV=new B.t(22,8)
D.eeG=new B.t(24,0)
D.eeH=new B.t(24,2)
D.eeK=new B.t(24,-18)
D.eeL=new B.t(24,-22)
D.eeP=new B.t(25,8)
D.eeQ=new B.t(26,0)
D.eeW=new B.t(28,-30)
D.ef1=new B.t(30,18)
D.ef2=new B.t(30,2)
D.ef5=new B.t(31,19)
D.ef7=new B.t(32,0)
D.aIZ=new B.t(34,0)
D.aJ_=new B.t(34,-32)
D.IQ=new B.t(36,0)
D.efk=new B.t(3,-1)
D.efn=new B.t(40,3)
D.efB=new B.t(4,11)
D.efE=new B.t(4,-2)
D.efJ=new B.t(5,0)
D.efK=new B.t(5,17)
D.efL=new B.t(5,6)
D.efQ=new B.t(6,11)
D.efW=new B.t(8,7)
D.efX=new B.t(8,-10)
D.efY=new B.t(8,-14)
D.aJ4=new B.t(9,0)
D.eg7=new B.t(-20.5,-17.6)
D.eg8=new B.t(-9,18.5)
D.egb=new B.t(-2.6,-1)
D.egc=new B.t(1.9,-0.8)
D.egf=new B.t(-0.22,0.09)
D.egk=new B.t(2.6,1)
D.egr=new B.t(-9,12.2)
D.egL=new B.t(-9,20.5)
D.eh6=new B.t(-10,0)
D.eh7=new B.t(-10,12)
D.aJc=new B.t(-10,4)
D.ehd=new B.t(-11,-2)
D.ehh=new B.t(-13,-5)
D.ehi=new B.t(-14,0)
D.ehj=new B.t(-14,13)
D.ehk=new B.t(-14,2)
D.ehl=new B.t(-14,-12)
D.ehm=new B.t(-14,-19)
D.eho=new B.t(-14,-23)
D.ehp=new B.t(-15,6)
D.ehs=new B.t(-16,14)
D.ehu=new B.t(-16,-8)
D.ehv=new B.t(-17,10)
D.ehw=new B.t(-17,-18)
D.ehx=new B.t(-17,-8)
D.ehz=new B.t(-18,20)
D.ehA=new B.t(-18,-9)
D.aJe=new B.t(-20,0)
D.ehC=new B.t(-20,16)
D.ehD=new B.t(-20,-9)
D.SR=new B.t(-22,8)
D.ehE=new B.t(-22,-10)
D.ehF=new B.t(-22,-11)
D.ehG=new B.t(-24,10)
D.ehH=new B.t(-24,11)
D.ehI=new B.t(-24,14)
D.ehJ=new B.t(-24,-22)
D.ehL=new B.t(-25,-11)
D.ehM=new B.t(-26,0)
D.ehN=new B.t(-26,-18)
D.ehO=new B.t(-2,9)
D.ehP=new B.t(-2,-10)
D.ehQ=new B.t(-2,-20)
D.ehT=new B.t(-2,-9)
D.ehV=new B.t(-32,0)
D.aJg=new B.t(-34,0)
D.ei_=new B.t(-40,3)
D.ei1=new B.t(-4,11)
D.ei2=new B.t(-4,-17)
D.ei3=new B.t(-4,-2)
D.ei7=new B.t(-5,0)
D.ei8=new B.t(-5,20)
D.ei9=new B.t(-5,6)
D.eia=new B.t(-6,26)
D.eib=new B.t(-6,6)
D.eic=new B.t(-6,-42)
D.eid=new B.t(-7,-19)
D.eie=new B.t(-7,-24)
D.eih=new B.t(-8,-9)
D.a6X=new B.t(-9,0)
D.eii=new B.t(-9,1)
D.eik=new B.t(-9,-23)
D.fw9=new B.y("Thinking\u2026",null,A.hl,null,null,null,null,null,null,null,null,null)
D.ejl=new B.D(A.jN,D.fw9,null)
D.fMC=new B.y("Start from a ready-made board",null,A.fR,null,null,null,null,null,null,null,null,null)
D.ejx=new B.D(A5.vV,D.fMC,null)
D.bBF=new B.Q(4,0,4,14)
D.frr=new B.F(!0,A.aB,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx5=new B.y("Games and little helpers for a spare minute.",null,D.frr,null,null,null,null,null,null,null,null,null)
D.ejI=new B.D(D.bBF,D.fx5,null)
D.fJk=new B.y("Tap to throw in a star",null,A.kQ,null,null,null,null,null,null,null,null,null)
D.b8G=new B.ck(A.A,null,null,D.fJk,null)
D.epE=new B.cN(0,null,0,14,null,null,D.b8G,null)
D.hpm=new C.cn2(1,"neural")
D.dgs=w([A.it,A.bm],x.O)
D.aO7=new B.c0(A.A,0.5,A.x,null,0,D.dgs,null,null)
D.eqn=new B.c0(A.A,0.5,A.x,null,0,D.aAi,null,null)
D.d7s=w([A.c,A.bL],x.O)
D.eqp=new B.c0(A.A,0.5,A.x,null,0,D.d7s,null,null)
D.doY=w([A.bO,A.hf],x.O)
D.aO8=new B.c0(A.A,0.5,A.x,null,0,D.doY,null,null)
D.cME=w([A.c,A.bO],x.O)
D.eqt=new B.c0(A.th,0.5,A.x,null,0,D.cME,null,null)
D.bgW=new B.u(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.q)
D.bmW=new B.u(1,0.027450980392156862,0.10196078431372549,0.2,A.q)
D.d6t=w([D.bgW,D.ahy,D.bmW],x.O)
D.eqv=new B.c0(A.th,0.5,A.x,null,0,D.d6t,D.az1,null)
D.cCY=w([A.oX,A.aD,A.K],x.O)
D.dlz=w([0.3,0.7,1],x.n)
D.eqx=new B.c0(A.A,0.5,A.x,null,0,D.cCY,D.dlz,null)
D.br4=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dmZ=w([A.fa,D.br4],x.O)
D.eqz=new B.c0(A.th,0.5,A.x,null,0,D.dmZ,null,null)
D.cFP=w([A.dv,A.cm],x.O)
D.eqA=new B.c0(A.A,0.5,A.x,null,0,D.cFP,null,null)
D.d1D=w([A.oX,A.aD,A.fo],x.O)
D.eqB=new B.c0(A.A,0.5,A.x,null,0,D.d1D,null,null)
D.cUs=w([A.h1,A.aT,A.d1],x.O)
D.eqD=new B.c0(A.th,0.5,A.x,null,0,D.cUs,null,null)
D.dh6=w([A.hf,K.nb],x.O)
D.eqE=new B.c0(A.th,0.5,A.x,null,0,D.dh6,null,null)
D.bhb=new B.u(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.q)
D.beP=new B.u(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.q)
D.d3Y=w([D.bhb,D.beP],x.O)
D.eqG=new B.c0(A.A,0.5,A.x,null,0,D.d3Y,null,null)
D.bmi=new B.u(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.q)
D.bk0=new B.u(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.q)
D.bk6=new B.u(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.q)
D.drq=w([D.bmi,D.bk0,D.bk6],x.O)
D.eqH=new B.c0(N.abx,0.5,A.x,null,0,D.drq,G.axQ,null)
D.eqI=new B.c0(A.A,0.5,A.x,null,0,D.awE,null,null)
D.dpP=w([A.hf,A.hQ],x.O)
D.eqP=new B.c0(A.A,0.5,A.x,null,0,D.dpP,null,null)
D.aOc=new B.aQ(9,9)
D.eqY=new B.aQ(1.4,1.4)
D.eRo=new B.bj("Moon",1.62,4291941851)
D.eRY=new B.bj("Neptune",11.15,4284524026)
D.eSC=new B.bj("Sun",274,4294688548)
D.eSR=new B.bj("Mercury",3.7,4288455599)
D.eSW=new B.bj("Earth",9.81,4281908728)
D.eSY=new B.bj("Mars",3.71,4294472049)
D.eTg=new B.bj("Venus",8.87,4294759245)
D.eTn=new B.bj("Saturn",10.44,4294829706)
D.eTJ=new B.bj("Jupiter",24.79,4294677052)
D.eXn=new B.a3(10,-8,18,-2)
D.eXo=new B.a3(14,-14,20,14)
D.eXq=new B.a3(20,-2,30,2)
D.eXv=new B.a3(4,-13,30,-3)
D.eXB=new B.a3(8,-7,12,7)
D.eXN=new B.a3(-12,12,12,19)
D.eXO=new B.a3(-12,14,12,22)
D.eXP=new B.a3(-12,-22,12,8)
D.eXQ=new B.a3(-12,-25,12,19)
D.eXR=new B.a3(-12,-26,12,-6)
D.eXS=new B.a3(-12,-4,12,14)
D.eXU=new B.a3(-14,20,14,24)
D.eXV=new B.a3(-14,6,14,10)
D.eXW=new B.a3(-14,-17,14,15)
D.eXX=new B.a3(-14,-26,14,18)
D.eXY=new B.a3(-14,-4,14,20)
D.eY_=new B.a3(-15,-29,15,25)
D.eY0=new B.a3(-16,-16,16,16)
D.eY3=new B.a3(-16,-22,-9,18)
D.eY4=new B.a3(-16,-24,16,-10)
D.eY6=new B.a3(-16,-2,16,20)
D.eY8=new B.a3(-18,20,18,24)
D.eY9=new B.a3(-18,-18,18,20)
D.eYa=new B.a3(-20,12,20,22)
D.eYb=new B.a3(-20,-28,20,26)
D.eYc=new B.a3(-22,14,22,18)
D.aOM=new B.a3(-22,-26,22,24)
D.eYd=new B.a3(-22,-3,22,3)
D.eYe=new B.a3(-22,-4,22,12)
D.eYg=new B.a3(-24,-12,10,22)
D.eYh=new B.a3(-24,-14,22,8)
D.eYi=new B.a3(-24,-6,24,20)
D.aON=new B.a3(-24,-9,24,9)
D.eYj=new B.a3(-25,14,25,19)
D.eYk=new B.a3(-26,-14,14,8)
D.eYl=new B.a3(-26,-4,26,20)
D.eYm=new B.a3(-26,-6,4,6)
D.aOO=new B.a3(-28,-13,28,13)
D.eYn=new B.a3(-28,-16,28,16)
D.eYo=new B.a3(-28,-16,28,8)
D.eYp=new B.a3(-28,-22,28,22)
D.eYq=new B.a3(-30,-12,30,14)
D.eYr=new B.a3(-30,-14,0,14)
D.eYs=new B.a3(-30,-18,30,20)
D.eYt=new B.a3(-30,-28,30,14)
D.eYu=new B.a3(-30,-2,30,18)
D.eYv=new B.a3(-30,-4,30,18)
D.eYw=new B.a3(-32,-17,32,17)
D.eYx=new B.a3(-32,-28,32,18)
D.eYy=new B.a3(-33,-21,33,17)
D.eYz=new B.a3(-34,14,34,26)
D.a7P=new B.a3(-34,-18,34,18)
D.eYA=new B.a3(-34,-4,34,7)
D.eYB=new B.a3(-36,-24,36,20)
D.eYC=new B.a3(-38,-22,38,22)
D.eYE=new B.a3(-3,12,3,22)
D.eYF=new B.a3(-3,5,3,15)
D.eYJ=new B.a3(-46,-34,46,28)
D.eYL=new B.a3(-48,-3,48,3)
D.eYO=new B.a3(-6,18,24,24)
D.eYP=new B.a3(-6,5,6,12)
D.eYQ=new B.a3(-6,-22,6,-15)
D.eYU=new B.a3(-9,-16,9,22)
D.eYV=new B.a3(-4.5,-24,4.5,-21.2)
D.eYX=new B.a3(14,-9,17.5,9)
D.ecS={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aPJ=new B.dD(D.ecS,5,x.Q)
D.ecp={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.f14=new B.dD(D.ecp,10,x.Q)
D.f3i=new B.au(24,44)
D.f3G=new B.au(54,38)
D.f3N=new B.au(66,38)
D.ba2=new B.fi(2,null,null,null,null,A.bv,null,null,null,null)
D.f4O=new B.a7(16,16,D.ba2,null)
D.aQI=new B.hR(3,12,12,0.82,null)
D.fOk=new B.y("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aQT=new B.b2(D.fOk,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.dh9=w([A.cs,A.bG,A.bj,A.aQ,A.pM,A.cs],x.O)
D.faM=new B.fX(A.A,0,6.283185307179586,A.x,D.dh9,null,null)
D.fk9=new B.F(!0,A.aT,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,M.QY,null,null,null)
D.fc0=new B.eu("You are here (Sun)",null,null,A.cQ,null,null,null,null,null,null,D.fk9)
D.aTr=new B.F(!0,A.aB,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc1=new B.eu("What we see",null,null,A.cQ,null,null,null,null,null,null,D.aTr)
D.fhq=new B.F(!0,P.xy,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc5=new B.eu("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cQ,null,null,null,null,null,null,D.fhq)
D.fmo=new B.F(!0,A.kv,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcb=new B.eu("AI",null,null,A.cQ,null,null,null,null,null,null,D.fmo)
D.aRH=new B.F(!0,A.bY,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcs=new B.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcZ=new B.F(!0,A.bl,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd2=new B.F(!0,A.bj,null,null,null,null,12.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdj=new B.F(!0,A.cp,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdP=new B.F(!0,A.bY,null,null,null,null,11,A.P,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdU=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fea=new B.F(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feG=new B.F(!0,A.aR,null,null,null,null,12,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ff6=new B.F(!0,A.bY,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffi=new B.F(!0,A.ae,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1H=new B.cX(A.ig,A.dB,6)
D.daq=w([D.f1H],x.q)
D.ffC=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.daq,null,null,null)
D.ffH=new B.F(!0,A.ep,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffM=new B.F(!0,A.bY,null,null,null,null,10.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgo=new B.F(!0,A.bY,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgw=new B.F(!0,A.aB,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgx=new B.F(!0,A.bY,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhu=new B.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhZ=new B.F(!0,A.aB,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiv=new B.F(!0,A.aT,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1K=new B.cX(A.aW,A.J,3)
D.aAy=w([D.f1K],x.q)
D.fiy=new B.F(!0,A.c,null,null,null,null,10.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.aAy,null,null,null)
D.fiE=new B.F(!0,A.c,null,null,null,null,12.5,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjm=new B.F(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,M.QY,null,null,null)
D.fjX=new B.F(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkp=new B.F(!0,A.tJ,null,null,null,null,12.5,A.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl_=new B.F(!0,A.bM,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl4=new B.F(!0,A.bY,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl9=new B.F(!0,A.aB,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flV=new B.F(!0,A.ne,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm9=new B.F(!0,A.ae,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSR=new B.F(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1x=new B.cX(A.w,A.J,5)
D.cYO=w([D.f1x],x.q)
D.fmK=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cYO,null,null,null)
D.fmP=new B.F(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.aAy,null,null,null)
D.fnb=new B.F(!0,A.h2,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnu=new B.F(!0,A.bY,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo_=new B.F(!0,A.bj,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foC=new B.F(!0,A.bY,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fph=new B.F(!0,A.aB,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpq=new B.F(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpU=new B.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqa=new B.F(!0,A.aT,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqu=new B.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqx=new B.F(!0,A.aT,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frh=new B.F(!0,A.aR,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fru=new B.F(!0,A.c,null,null,null,null,13,A.a7,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frH=new B.F(!0,A.tJ,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs2=new B.F(!0,A.bj,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffP=new B.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsr=new B.y("\u26a0\ufe0f ",null,D.ffP,null,null,null,null,null,null,null,null,null)
D.fsE=new B.y("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.vg,null,null,null,null,null,null,null,null,null)
D.fue=new B.y("Pick one, then change it and see what happens.",null,A.vg,null,null,null,null,null,null,null,null,null)
D.fui=new B.y("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.fgX=new B.F(!0,A.ae,null,null,null,null,null,A.P,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvd=new B.y("What do you want to invent? Type it below, or tap an idea.",null,D.fgX,null,null,null,null,null,null,null,null,null)
D.fwH=new B.y("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fxi=new B.y("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.fQ,null,null,null,null,null,null,null,null,null)
D.fxn=new B.y("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.fxV=new B.y("Make it yours",null,A.k2,null,null,null,null,null,null,null,null,null)
D.fyd=new B.y("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a98,null,null,null,null,null,null,null,null,null)
D.fz8=new B.y("Connect to the internet once and open the globe. After that it works with no internet at all.",null,A.UM,null,A.L,null,null,null,null,null,null,null)
D.flk=new B.F(!0,A.jJ,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAF=new B.y("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.flk,null,null,null,null,null,null,null,null,null)
D.fB3=new B.y("5G",null,T.aSb,null,null,null,null,null,null,null,null,null)
D.fnL=new B.F(!0,A.bY,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCe=new B.y("WHAT HAPPENS",null,D.fnL,null,null,null,null,null,null,null,null,null)
D.fDX=new B.y("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fEC=new B.y("Change the words and pictures on the three slabs.",null,A.vg,null,null,null,null,null,null,null,null,null)
D.fEN=new B.y("All the parts and wires will be removed.",null,A.hk,null,null,null,null,null,null,null,null,null)
D.fF6=new B.y("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fFG=new B.y("Tap the crank on the board again and again to spin it faster.",null,A.hl,null,null,null,null,null,null,null,null,null)
D.fGT=new B.y("\ud83c\udfaf Challenges",null,A.de,null,null,null,null,null,null,null,null,null)
D.fHe=new B.y("The map of the world is not saved on this phone yet",null,A.fR,null,A.L,null,null,null,null,null,null,null)
D.fHo=new B.y("Download the animation (GIF)",null,A.cA,null,null,null,null,null,null,null,null,null)
D.fHr=new B.y("Remove this part",null,Z.aRM,null,null,null,null,null,null,null,null,null)
D.fHJ=new B.y("Clear the board?",null,A.df,null,null,null,null,null,null,null,null,null)
D.fnc=new B.F(!0,A.bt,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHZ=new B.y("How the Lab works",null,D.fnc,null,null,null,null,null,null,null,null,null)
D.fen=new B.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIj=new B.y("Electronics Lab",null,D.fen,null,null,null,null,A.a2,null,1,null,null)
D.fIn=new B.y("?",null,N.aTm,null,null,null,null,null,null,null,null,null)
D.flf=new B.F(!0,A.aQ,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIs=new B.y("Planet Earth",null,D.flf,null,null,null,null,null,null,null,null,null)
D.fJG=new B.y("Ready-made circuits",null,A.de,null,null,null,null,null,null,null,null,null)
D.fKj=new B.y("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hl,null,null,null,null,null,null,null,null,null)
D.fKC=new B.y("UNIVERSE EXPLORER",null,H.a96,null,null,null,null,null,null,null,null,null)
D.fqd=new B.F(!0,A.aT,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNK=new B.y("\u26a0 There is no air here, so a parachute will not work.",null,D.fqd,null,null,null,null,null,null,null,null,null)
D.fOW=new B.y("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,Z.aRL,null,null,null,null,null,null,null,null,null)
D.fPq=new B.y("NGMY",null,A.ve,null,null,null,null,null,null,null,null,null)
D.fPE=new B.y("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.UG,null,null,null,null,null,null,null,null,null)
D.fQ0=new B.y("Tap it to change its setting. Drag from the right dot to connect.",null,A.lN,null,null,null,null,null,null,null,null,null)
D.fR3=new B.y("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.vg,null,null,null,null,null,null,null,null,null)
D.fR5=new B.y("TOOLBOX",null,H.a96,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hit=null
$.his=null
$.hoD=0
$.hQP=B.U(x.N,x.G)
$.hRp=B.U(x.N,x.G)
$.hWs=B.U(x.N,x.G)
$.h_S=null
$.hRa=B.U(x.N,x.G)
$.hSd=B.U(x.N,x.G)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ina","bEA",()=>{var v="led"
return B.a([C.ayF("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fiI(),v),C.ayF("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fiJ(),v),C.ayF("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fiK(),v),C.ayF("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fiR(),v),C.ayF("Not both","Make the light go OFF only when both switches are ON.",2,new C.fiS(),v),C.ayF("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fiT(),"buzzer")],B.av("O<bbm>"))})
w($,"inC","bEB",()=>B.a([C.Qu("UNIVERSE","Earth, space and gravity",A.OI,A.aQ,new C.fj8()),C.Qu("ELECTRONICS LAB","Batteries, wires, real circuits",Ad.C4,A.aQ,new C.fj9()),C.Qu("DISCOVERY LAB","Body Explorer: a real 3D human",D.bKo,A.bj,new C.fja()),C.Qu("TOOLBOX","Converter, clock, games",G.amW,A.cT,new C.fjb()),C.Qu("REACTION LAB","Wire parts together",A.Cq,A.bt,new C.fjc()),C.Qu("SPARK PAINTER","Paint with light",A.a15,A.c4,new C.fjd()),C.Qu("ROCKET LANDER","Land softly on the pad",A.oi,A.aQ,new C.fje()),C.Qu("TITLE ANIMATOR","Make a moving title",A.yV,A.bG,new C.fjf()),C.Qu("CIRCUIT LAB","Connect logic, learn it",A.a1y,A.cp,new C.fjg())],B.av("O<btc>")))
w($,"ip9","qo",()=>{var v,u,t=B.U(x.N,x.dV)
for(v=0;v<76;++v){u=D.Re[v]
t.n(0,u.a,u)}return t})
w($,"inb","ai3",()=>B.a([C.FQ("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fiU()),C.FQ("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fiV()),C.FQ("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fiW()),C.FQ("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fiX()),C.FQ("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fiY()),C.FQ("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fiL()),C.FQ("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fiM()),C.FQ("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fiN()),C.FQ("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fiO()),C.FQ("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fiP()),C.FQ("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fiQ())],B.av("O<bbn>")))
w($,"inE","hxc",()=>B.a([C.a14("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aT,A.cc,new C.fjo()),C.a14("Focus Timer","Work, then rest","\u23f1\ufe0f",A.cs,A.by,new C.fjp()),C.a14("Breathe","Calm down in a minute","\ud83e\udee7",A.iM,A.cC,new C.fjq()),C.a14("Draw Pad","Sketch and share","\ud83c\udfa8",A.bC,A.b5,new C.fjr()),C.a14("Memory Match","Find the pairs","\ud83c\udccf",A.aQ,A.cb,new C.fjs()),C.a14("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bG,A.be,new C.fjt()),C.a14("Tip & Split","Share the bill","\ud83e\uddfe",A.bj,A.b_,new C.fju()),C.a14("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bv,A.aC,new C.fjv())],B.av("O<buw>")))
w($,"inD","hxb",()=>B.a([C.afj("EARTH GLOBE","Turn it, tap a country",A.oe,A.aQ,new C.fjh()),C.afj("SOLAR SYSTEM","The Sun and its worlds",D.bKs,A.aT,new C.fji()),C.afj("GRAVITY LAB","Drop, weigh, orbit",D.ao1,A.cT,new C.fjj()),C.afj("BLACK HOLE","Throw in a star",A.Gp,A.bv,new C.fjk()),C.afj("GALAXY","Build, tilt, collide",A.yE,A.hb,new C.fjl()),C.afj("SIZE COMPARE","Earth next to a star",D.bKJ,A.c4,new C.fjm()),C.afj("SEASONS & MOON","Why it is summer",A.w7,A.bt,new C.fjn())],B.av("O<bur>")))})()};
(a=>{a["U459bicXxj9kCS5c5F7hDPZbOG4="]=a.current})($__dart_deferred_initializers__);