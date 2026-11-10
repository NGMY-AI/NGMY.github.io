((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A0,A6,A1,A2,H,V,A7,W,P,A3,I,A8,A4,A9,X,Aa,O,Ab,Ac,Y,Q,Z,Ad,N,Ae,Af,R,Ag,Ah,M,S,Ai,E,F,K,C={
htb(b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null
if(b5===D.ajd)return b6.aKn(b4)
w=D.cZ4[b5.a]
v=b4.gbb(0)
u=b4.gcn(0)
t=b6.geE()
s=B.hq(b3,b3,A.c8,0,A.e0,v,b3,0,1,t,A.c8,u,!1)
r=B.Ij(b4,!1,!1)
for(q=w.length,p=t.b,o=2<p,n=1<p,m=0<p,l=t.c,k=0;k<v;++k)for(j=0;j!==u;++j){i=r.a
h=i==null?b3:i.dQ(j,k,b3)
if(h==null)h=new B.iq()
g=A.k.N(h.h(0,0))
f=A.k.N(h.h(0,1))
e=A.k.N(h.h(0,2))
d=b6.bn6(g,f,e)
i=s.a
if(i!=null)i.mU(j,k,d)
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
b2.sb3(0,b2.gb3(b2)+a3*b1)
b2.sbc(b2.gbc()+a4*b1)
b2.sb9(0,b2.gb9(b2)+a5*b1)}}}return s},
aUZ:function aUZ(d,e){this.a=d
this.b=e},
bTt:function bTt(d,e,f,g){var _=this
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
bTu:function bTu(d,e){this.a=d
this.b=e},
coZ:function coZ(d,e){this.a=d
this.b=e},
bAL(d){return C.hYZ(d)},
hYZ(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bAL=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.r4(B.nd(""),d,A.hO,null,null).d7(0,A.ZL),$async$bAL)
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
return B.i($async$bAL,v)},
i9V(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.R6[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cT(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fP(D.R6,new C.fDi())
if(w==null)w=A.d.gI(D.R6)
s=B.U(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.M)(r),++u){l=r[u].a
k=l[0]
l=$.qs().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.M)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gI(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.akq(w.a,w.b,m,w,s,!1)},
i3t(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.Rw,new C.fsS(),x.bd).aH(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
ihS(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cv(b2,"{")
v=A.a.oO(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.X.aM(0,A.a.ar(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aX(a5)
r=0
for(a6=x.j,a7=J.aW(a6.a(J.r(u,"parts"))),a8=x.i;a7.C();){q=a7.gT(a7)
p=B.w(J.r(q,"kind"))
o=B.w(J.r(q,"id"))
if(!$.qs().aj(0,p)||J.f0(s,o)||J.ad(t)>=8)continue
J.cc(s,o)
n=B.U(a5,a8)
for(a9=0;a9<4;++a9){m=D.dsa[a9]
l=J.r(q,m)
if(typeof l=="number")J.aI(n,m,l)}k=A.k.E(typeof J.r(q,"x")=="number"?B.e0(J.r(q,"x")):0.2+A.k.F(r,3)*0.3,0.16,0.84)
j=A.k.E(typeof J.r(q,"y")=="number"?B.e0(J.r(q,"y")):0.25+A.k.ao(r,3)*0.3,0.1,0.9)
J.cc(t,new B.ea([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aW(a6.a(J.r(u,"wires")));a5.C();){h=a5.gT(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.r(g,0))
e=B.w(J.r(g,2))
d=A.o.E(A.k.N(B.e0(J.r(g,1))),0,1)
a0=A.o.E(A.k.N(B.e0(J.r(g,3))),0,1)
if(J.f0(s,f)&&J.f0(s,e)&&!J.A(f,e))J.cc(i,new B.cw([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.bM.a(J.r(u,"steps"))
a0=J.aW(a0==null?A.co:a0)
while(a0.C()){a2=a0.gT(a0)
J.cc(a1,B.w(a2))}a3=a1
a0=J.r(u,"title")
a0=B.w(a0==null?"My invention":a0)
a1=J.r(u,"explain")
a4=new C.mK(a0,B.w(a1==null?"":a1),t,i,A.Y)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.r(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.akq(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
i8v(d){var w,v,u=C.hdF()
d.B(u)
for(w=0;w<60;++w)u.vm(0,0.03333333333333333)
v=u.a
return A.d.b2(v,new C.fA1(u))&&!A.d.d_(v,new C.fA2())},
i8u(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.U(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.M)(l),++u){t=l[u];++v
k.n(0,t.a,$.qs().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.M)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.dqo,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aH(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.k.ac(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.M)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aH(s,"\n")+"\nWires: "+A.d.aH(l,"; ")},
hXu(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.M)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aH(v,"\n")+"\n\n"}v=A.d.aH(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
i9U(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qs().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Rw[u]
if(A.d.b2(w,new C.fDf(s)))if(!B.cT(r,s.b.toLowerCase(),0))v=B.cT(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Z(w,new C.fDg(e),B.T(w).k("Z<1>")).gan(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.ac(A.d.cH(w,0,new C.fDh())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gI(w)
w=$.qs().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
akq:function akq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fDi:function fDi(){},
fsS:function fsS(){},
fA1:function fA1(d){this.a=d},
fA2:function fA2(){},
fDf:function fDf(d){this.a=d},
fDg:function fDg(d){this.a=d},
fDh:function fDh(){},
W3:function W3(d,e){this.c=d
this.a=e},
blm:function blm(d,e,f,g,h){var _=this
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
edX:function edX(d){this.a=d},
edY:function edY(d,e,f){this.a=d
this.b=e
this.c=f},
edZ:function edZ(d){this.a=d},
ee9:function ee9(d){this.a=d},
eea:function eea(d,e){this.a=d
this.b=e},
ee5:function ee5(d){this.a=d},
ee3:function ee3(d,e){this.a=d
this.b=e},
ee4:function ee4(d,e,f){this.a=d
this.b=e
this.c=f},
ee6:function ee6(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ee1:function ee1(d){this.a=d},
ee2:function ee2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ee7:function ee7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ee0:function ee0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ee8:function ee8(d,e){this.a=d
this.b=e},
ee_:function ee_(d,e){this.a=d
this.b=e},
eed:function eed(d){this.a=d},
eec:function eec(d){this.a=d},
eee:function eee(d){this.a=d},
eeb:function eeb(d){this.a=d},
eef:function eef(d,e){this.a=d
this.b=e},
eeg:function eeg(d,e){this.a=d
this.b=e},
eeh:function eeh(d,e){this.a=d
this.b=e},
eei:function eei(d,e){this.a=d
this.b=e},
bB5(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fiX,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.P,0,A.p)},
hre(d,e,f,g){var w=null,v=B.m(24),u=B.J(f.j(0.6),A.r,1)
return B.at(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.an,B.d(e,w,w,w,w,w,w,A.x_,A.K,w,w),A.aA,B.bX(A.fI,g,A.bq,w,0,8)],x.p),A.m,w,A.e,A.P,0,A.p),A.f,w,w,new B.o(D.bdT,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
Gu:function Gu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
v4:function v4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wr:function Wr(d){this.a=d},
aFi:function aFi(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.iL$=h
_.oH$=i
_.nj$=j
_.iM$=k
_.bz$=l
_.aa$=m
_.c=_.a=null},
esc:function esc(){},
esw:function esw(d){this.a=d},
esv:function esv(d,e){this.a=d
this.b=e},
esx:function esx(){},
esy:function esy(){},
ese:function ese(d,e,f){this.a=d
this.b=e
this.c=f},
esd:function esd(d,e){this.a=d
this.b=e},
es3:function es3(d){this.a=d},
es4:function es4(d){this.a=d},
es5:function es5(d){this.a=d},
es6:function es6(d){this.a=d},
es7:function es7(d){this.a=d},
es8:function es8(d){this.a=d},
es9:function es9(d){this.a=d},
esa:function esa(d){this.a=d},
esb:function esb(d){this.a=d},
es1:function es1(d){this.a=d},
es2:function es2(d){this.a=d},
es0:function es0(d){this.a=d},
esp:function esp(d,e){this.a=d
this.b=e},
esk:function esk(d){this.a=d},
esl:function esl(d){this.a=d},
esh:function esh(d){this.a=d},
esm:function esm(d){this.a=d},
esg:function esg(d){this.a=d},
esn:function esn(d){this.a=d},
eso:function eso(d){this.a=d},
esf:function esf(d){this.a=d},
esq:function esq(d,e){this.a=d
this.b=e},
esj:function esj(d,e){this.a=d
this.b=e},
esr:function esr(d){this.a=d},
ess:function ess(d){this.a=d},
est:function est(d){this.a=d},
esu:function esu(d){this.a=d},
esi:function esi(d){this.a=d},
bir:function bir(d,e){this.b=d
this.a=e},
aNd:function aNd(){},
byM:function byM(){},
cLz(){var w=0,v=B.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cLz=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.r6().jg(0,"assets/data/body3d.bin"),$async$cLz)
case 3:d=a1
$.hmw=J.eH(A.dJ.gaR(d),d.byteOffset,d.byteLength)
t=B.aTp(d)
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
e=D.deP[i]
g=B.b1((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a3E(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b13))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bbq(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cLz,v)},
aTc:function aTc(d,e,f){this.a=d
this.b=e
this.c=f},
a3E:function a3E(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bbq:function bbq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
UX:function UX(d){this.a=d},
aDO:function aDO(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.iL$=s
_.oH$=t
_.nj$=u
_.iM$=v
_.bz$=w
_.aa$=a0
_.c=_.a=null},
dLv:function dLv(d){this.a=d},
dLu:function dLu(d,e){this.a=d
this.b=e},
dL7:function dL7(d,e){this.a=d
this.b=e},
dL8:function dL8(){},
dLw:function dLw(){},
dL9:function dL9(d,e){this.a=d
this.b=e},
dLa:function dLa(d){this.a=d},
dLb:function dLb(){},
dLc:function dLc(d){this.a=d},
dLe:function dLe(d,e){this.a=d
this.b=e},
dLd:function dLd(d){this.a=d},
dL4:function dL4(d,e,f){this.a=d
this.b=e
this.c=f},
dL5:function dL5(d){this.a=d},
dL6:function dL6(d){this.a=d},
dLl:function dLl(d){this.a=d},
dLm:function dLm(d,e){this.a=d
this.b=e},
dLn:function dLn(d,e){this.a=d
this.b=e},
dLo:function dLo(d){this.a=d},
dLk:function dLk(d,e){this.a=d
this.b=e},
dLp:function dLp(d,e){this.a=d
this.b=e},
dLj:function dLj(d,e){this.a=d
this.b=e},
dLq:function dLq(d){this.a=d},
dLi:function dLi(d){this.a=d},
dLr:function dLr(d){this.a=d},
dLh:function dLh(d){this.a=d},
dLs:function dLs(d){this.a=d},
dLg:function dLg(d){this.a=d},
dLt:function dLt(d){this.a=d},
dLf:function dLf(d){this.a=d},
aMn:function aMn(){},
aMo:function aMo(){},
c4U:function c4U(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c4V:function c4V(d,e){this.a=d
this.b=e},
c4W:function c4W(d){this.a=d},
azb(d,e,f,g,h){return new C.bca(d,e,f,g,h)},
h4e(d,e,f,g,h,i){return $.hUS.c4(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cSv(d,e,f,i,g,h))},
yo:function yo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
CH:function CH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nt:function nt(d,e,f){this.a=d
this.b=e
this.c=f},
bca:function bca(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fmo:function fmo(){},
fmp:function fmp(){},
fmq:function fmq(){},
fmx:function fmx(){},
fmy:function fmy(){},
fmz:function fmz(){},
V1:function V1(d){this.a=d},
aDQ:function aDQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.iL$=m
_.oH$=n
_.nj$=o
_.iM$=p
_.bz$=q
_.aa$=r
_.c=_.a=null},
dNa:function dNa(d){this.a=d},
dMP:function dMP(d,e){this.a=d
this.b=e},
dMS:function dMS(){},
dNb:function dNb(){},
dMN:function dMN(d,e){this.a=d
this.b=e},
dMO:function dMO(d,e){this.a=d
this.b=e},
dMT:function dMT(d,e,f){this.a=d
this.b=e
this.c=f},
dMI:function dMI(){},
dMJ:function dMJ(){},
dMK:function dMK(d){this.a=d},
dML:function dML(d,e){this.a=d
this.b=e},
dMM:function dMM(d,e,f){this.a=d
this.b=e
this.c=f},
dMU:function dMU(){},
dMV:function dMV(d,e){this.a=d
this.b=e},
dMW:function dMW(d){this.a=d},
dMR:function dMR(d,e){this.a=d
this.b=e},
dMQ:function dMQ(d){this.a=d},
dMH:function dMH(d,e,f){this.a=d
this.b=e
this.c=f},
dN4:function dN4(d){this.a=d},
dN3:function dN3(d){this.a=d},
dN5:function dN5(d){this.a=d},
dN2:function dN2(d){this.a=d},
dN0:function dN0(d){this.a=d},
dN1:function dN1(d){this.a=d},
dN_:function dN_(d){this.a=d},
dMX:function dMX(d){this.a=d},
dMZ:function dMZ(d){this.a=d},
dN6:function dN6(d,e){this.a=d
this.b=e},
dN7:function dN7(d,e){this.a=d
this.b=e},
dN8:function dN8(d){this.a=d},
dMY:function dMY(d){this.a=d},
dN9:function dN9(d,e){this.a=d
this.b=e},
bct:function bct(d,e){this.b=d
this.a=e},
cSv:function cSv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aMs:function aMs(){},
byA:function byA(){},
hLI(){return new C.NM(null)},
QL(d,e,f,g,h){return new C.bu9(d,e,f,g,h)},
bsy(d,e,f){return A.k.E((d-e)/(f-e),0,1)},
h4L(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
NM:function NM(d){this.a=d},
KQ:function KQ(d,e){this.a=d
this.b=e},
AO:function AO(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aE6:function aE6(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dT0:function dT0(d,e){this.a=d
this.b=e},
dT_:function dT_(d){this.a=d},
dT2:function dT2(d,e){this.a=d
this.b=e},
dT1:function dT1(d){this.a=d},
bu9:function bu9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fmP:function fmP(){},
fmQ:function fmQ(){},
fmR:function fmR(){},
fmS:function fmS(){},
fmT:function fmT(){},
fmU:function fmU(){},
fmV:function fmV(){},
fmW:function fmW(){},
fmX:function fmX(){},
bsz:function bsz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f2r:function f2r(d){this.a=d},
f2q:function f2q(d,e){this.a=d
this.b=e},
f2o:function f2o(d){this.a=d},
f2s:function f2s(d){this.a=d},
f2p:function f2p(d,e){this.a=d
this.b=e},
afk:function afk(d,e,f){this.c=d
this.d=e
this.a=f},
aec:function aec(d,e,f){this.c=d
this.d=e
this.a=f},
QE:function QE(d,e,f,g,h,i,j,k,l,m){var _=this
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
bty:function bty(d,e){this.b=d
this.a=e},
bt3:function bt3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bb8:function bb8(d,e){this.b=d
this.a=e},
aIo:function aIo(d,e){this.c=d
this.a=e},
aIp:function aIp(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cO$=e
_.b5$=f
_.c=_.a=null},
f27:function f27(d){this.a=d},
f26:function f26(d){this.a=d},
f25:function f25(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f24:function f24(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f22:function f22(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f21:function f21(d,e,f){this.a=d
this.b=e
this.c=f},
f23:function f23(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f20:function f20(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2f:function f2f(d){this.a=d},
f2e:function f2e(d){this.a=d},
f2g:function f2g(d,e){this.a=d
this.b=e},
f2h:function f2h(d,e){this.a=d
this.b=e},
f2i:function f2i(d,e){this.a=d
this.b=e},
f2d:function f2d(d,e,f){this.a=d
this.b=e
this.c=f},
f2j:function f2j(d,e,f){this.a=d
this.b=e
this.c=f},
f2c:function f2c(d){this.a=d},
f28:function f28(d){this.a=d},
f2k:function f2k(d){this.a=d},
f2l:function f2l(d){this.a=d},
f2b:function f2b(d,e){this.a=d
this.b=e},
f2m:function f2m(d,e){this.a=d
this.b=e},
f2a:function f2a(d,e){this.a=d
this.b=e},
f2n:function f2n(d,e){this.a=d
this.b=e},
f29:function f29(d,e){this.a=d
this.b=e},
f1Z:function f1Z(){},
f2_:function f2_(){},
bsb:function bsb(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
brC:function brC(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbO:function bbO(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
brE:function brE(d,e,f){this.b=d
this.c=e
this.a=f},
bvD:function bvD(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aO2:function aO2(){},
hsH(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a9(0,new B.t(w,0)),u=e.aF(0,new B.t(w,0)),t=1-f,s=3*t
return d.aI(0,t*t*t).a9(0,v.aI(0,s*t*f)).a9(0,u.aI(0,s*f*f)).a9(0,e.aI(0,f*f*f))},
biq(d,e,f,g,h,i){return $.hVs.c4(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.dnD(d,e,f,i,g,h))},
a0T:function a0T(d,e){this.a=d
this.b=e},
qg:function qg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qZ:function qZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
CL:function CL(d,e){this.a=d
this.b=e},
ZR:function ZR(d,e){this.a=d
this.b=e},
af8:function af8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a15:function a15(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
CV:function CV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ac6:function ac6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acm:function acm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aef:function aef(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bio:function bio(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bv$=_.bJ$=0},
dnH:function dnH(d){this.a=d},
dnI:function dnI(d){this.a=d},
dnE:function dnE(d,e){this.a=d
this.b=e},
dnF:function dnF(d){this.a=d},
dnG:function dnG(d){this.a=d},
dnJ:function dnJ(d){this.a=d},
dnK:function dnK(d){this.a=d},
dnL:function dnL(d){this.a=d},
dnM:function dnM(d){this.a=d},
dnN:function dnN(d){this.a=d},
dnO:function dnO(d){this.a=d},
dnP:function dnP(d){this.a=d},
dnQ:function dnQ(d){this.a=d},
dnR:function dnR(d){this.a=d},
Gf:function Gf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wq:function Wq(d){this.a=d},
aFh:function aFh(d,e,f,g,h,i,j){var _=this
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
_.aa$=j
_.c=_.a=null},
erx:function erx(d){this.a=d},
erm:function erm(d){this.a=d},
ero:function ero(){},
erp:function erp(){},
ers:function ers(){},
ert:function ert(d,e,f){this.a=d
this.b=e
this.c=f},
eru:function eru(d){this.a=d},
erv:function erv(d){this.a=d},
erq:function erq(){},
err:function err(d){this.a=d},
erX:function erX(d){this.a=d},
erw:function erw(){},
eri:function eri(d){this.a=d},
erz:function erz(d){this.a=d},
ery:function ery(d){this.a=d},
erB:function erB(){},
erA:function erA(d,e){this.a=d
this.b=e},
erl:function erl(){},
erj:function erj(d){this.a=d},
erk:function erk(d){this.a=d},
erV:function erV(d){this.a=d},
erU:function erU(d){this.a=d},
erW:function erW(d){this.a=d},
erL:function erL(d,e){this.a=d
this.b=e},
erT:function erT(d){this.a=d},
erR:function erR(d){this.a=d},
erS:function erS(d){this.a=d},
erQ:function erQ(d){this.a=d},
erP:function erP(d){this.a=d},
erM:function erM(d){this.a=d},
erN:function erN(d){this.a=d},
erO:function erO(d){this.a=d},
ern:function ern(){},
erH:function erH(d){this.a=d},
erI:function erI(d){this.a=d},
erG:function erG(d){this.a=d},
erJ:function erJ(d){this.a=d},
erF:function erF(d){this.a=d},
erK:function erK(d){this.a=d},
erE:function erE(d){this.a=d},
erD:function erD(d){this.a=d},
erC:function erC(d,e){this.a=d
this.b=e},
bip:function bip(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dnD:function dnD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNb:function aNb(){},
bmO:function bmO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Qs:function Qs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
WF:function WF(d){this.a=d},
blV:function blV(d,e,f,g,h,i,j,k){var _=this
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
_.aa$=k
_.c=_.a=null},
eDD:function eDD(d){this.a=d},
eDB:function eDB(d){this.a=d},
eDC:function eDC(){},
eDe:function eDe(){},
eDd:function eDd(){},
eDn:function eDn(d,e){this.a=d
this.b=e},
eDp:function eDp(d){this.a=d},
eDt:function eDt(d){this.a=d},
eDo:function eDo(d){this.a=d},
eDu:function eDu(d){this.a=d},
eDv:function eDv(d){this.a=d},
eDw:function eDw(d,e){this.a=d
this.b=e},
eDm:function eDm(d,e){this.a=d
this.b=e},
eDx:function eDx(d){this.a=d},
eDl:function eDl(d){this.a=d},
eDy:function eDy(d,e){this.a=d
this.b=e},
eDk:function eDk(d,e){this.a=d
this.b=e},
eDz:function eDz(d){this.a=d},
eDj:function eDj(d,e){this.a=d
this.b=e},
eDA:function eDA(d){this.a=d},
eDi:function eDi(d){this.a=d},
eDq:function eDq(d){this.a=d},
eDh:function eDh(d){this.a=d},
eDr:function eDr(d){this.a=d},
eDg:function eDg(d){this.a=d},
eDs:function eDs(d,e){this.a=d
this.b=e},
eDf:function eDf(d,e){this.a=d
this.b=e},
btt:function btt(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aNk:function aNk(){},
hxU(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aF(0,e).gcI()*0.1
return new B.t((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hdF(){var w=B.a([],x.bz),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a4X(w,v,u,A.cR,B.U(x.N,x.y))},
hFw(d,e,f){var w=d.c,v=e===0?-1:1
return new B.t(w*f.a+v*C.hdG(d),d.d*f.b)},
hdG(d){return 42+(D.mh.aj(0,d.b)?(d.ch-1)*38:0)},
eg:function eg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tH:function tH(d,e,f,g){var _=this
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
aaN:function aaN(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
abT:function abT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4X:function a4X(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bOg:function bOg(){},
bOr:function bOr(d){this.a=d},
bOm:function bOm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bOs:function bOs(d){this.a=d},
bOt:function bOt(d){this.a=d},
bOv:function bOv(d){this.a=d},
bOw:function bOw(d){this.a=d},
bOu:function bOu(d){this.a=d},
bOx:function bOx(d,e,f){this.a=d
this.b=e
this.c=f},
bOy:function bOy(d){this.a=d},
bOi:function bOi(d){this.a=d},
bOj:function bOj(d){this.a=d},
bOh:function bOh(d){this.a=d},
bOk:function bOk(d,e,f){this.a=d
this.b=e
this.c=f},
bOl:function bOl(d){this.a=d},
bOf:function bOf(d){this.a=d},
bOz:function bOz(d,e){this.a=d
this.b=e},
bOn:function bOn(d,e){this.a=d
this.b=e},
bOq:function bOq(d){this.a=d},
bOp:function bOp(d){this.a=d},
bOo:function bOo(d){this.a=d},
aja:function aja(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bIT:function bIT(){},
bIU:function bIU(){},
mK:function mK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cqO:function cqO(d){this.a=d},
ihN(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.fP5(),c9=new C.fP7(),d0=new C.fP8(),d1=new C.fP6(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.az(w,d1.$3(new B.a3(w.a,w.b,w.c,w.d),A.bN,A.bM))
d3.bo(D.eje,D.eg7,c9.$2(A.dD,1.4))
d3.bo(D.efP,D.efO,c9.$2(A.br,2.4))
d3.bo(D.efQ,X.aJt,c9.$2(A.br,2.4))
if(c7){d2=c8.$1(A.fi.j(0.5))
d2.z=A.Iu
d3.ad(D.efy,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.t(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.az(d0.$4(-22,-26,44,50),d1.$3(D.aPw,A.aP,A.cs))
d3.ad(A.cH,16,c8.$1(A.br))
d3.ad(A.cH,13,c8.$1(c7?A.aQ.j(0.85):A.M))
if(c7){d2=d3.a
J.bm(d2.save())
d2.translate(0,4)
d3.ig(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.ad,3).G()
d2.drawLine.apply(d2,[0,0,s*11,t*11,r])
r.delete()}d2.restore()
for(t=d5*0.8,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=Math.sin(v*2+d5)
r=c8.$1(A.c.j(0.8*(1-u))).G()
d2.drawCircle(s*9,4-u*12,1.6+u*2,r)
r.delete()}}d3.ad(D.ej6,2.4,c8.$1(c7?A.be:A.al))
d3.ad(D.ejY,2.4,c8.$1(A.al))
return!0
case"blender":d3.az(d0.$5(-14,14,28,12,4),c8.$1(A.e8))
d2=$.S().r
t=x.v
q=new B.aG(d2,A.ah,c6,c6,B.a([],t))
q.D(new B.aY(-16,-26))
q.D(new B.aq(16,-26))
q.D(new B.aq(12,14))
q.D(new B.aq(-12,14))
q.D(new B.bt())
d3.aG(q,c8.$1(A.fi.j(0.35)))
if(c7){d2=new B.aG(d2,A.ah,c6,c6,B.a([],t))
d2.D(new B.aY(-14,-10))
d2.D(new B.aq(14,-10))
d2.D(new B.aq(12,14))
d2.D(new B.aq(-12,14))
d2.D(new B.bt())
d3.aG(d2,c8.$1(A.aw.j(0.7)))}d3.aG(q,c9.$2(A.ad,1.6))
d2=d3.a
J.bm(d2.save())
d2.translate(0,10)
d3.ig(0,d4.y)
d3.bo(D.a7s,D.aJP,c9.$2(A.bO,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.F(s+v*0.33,1)
r=c8.$1(A.eP).G()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.az(d0.$5(-10,-4,20,10,4),c8.$1(A.aJ))
d3.ad(A.i7,3,c8.$1(c7?A.be:A.al))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a56[m]
r=c9.$2(A.br,3).G()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.bm(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).G()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=B.bL(A.I,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).G()
d2.drawOval(B.bH(p),r)
r.delete()}d2.restore()}return!0
case"drill":w=new B.aG($.S().r,A.ah,c6,c6,B.a([],x.v))
w.D(new B.aY(-24,-12))
w.D(new B.aq(10,-12))
w.D(new B.aq(10,2))
w.D(new B.aq(-2,2))
w.D(new B.aq(-6,22))
w.D(new B.aq(-16,22))
w.D(new B.aq(-14,2))
w.D(new B.aq(-24,2))
w.D(new B.bt())
d3.aG(w,d1.$3(D.f_F,A.aU,A.d1))
d3.aP(D.eZM,c8.$1(A.dv))
d2=d3.a
J.bm(d2.save())
d2.translate(18,-5)
d3.ig(0,d4.y*2)
d3.bo(A.I,D.efZ,c9.$2(A.bO,2.4))
d3.bo(A.a7p,D.efY,c9.$2(A.hK,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dP.j(1-u)).G()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.E(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new B.aG($.S().r,A.ah,c6,c6,B.a([],x.v))
d2.D(new B.aY(16,-6))
d2.D(new B.aq(52,-26))
d2.D(new B.aq(52,18))
d2.D(new B.aq(16,4))
d2.D(new B.bt())
d3.aG(d2,c8.$1(A.bL.j(0.35*v)))}d3.az(d0.$5(-26,-6,30,12,3),d1.$3(D.f_L,A.bn,A.cq))
k=new B.aG($.S().r,A.ah,c6,c6,B.a([],x.v))
k.D(new B.aY(4,-6))
k.D(new B.aq(18,-12))
k.D(new B.aq(18,12))
k.D(new B.aq(4,6))
k.D(new B.bt())
d3.aG(k,c8.$1(A.e8))
d3.ad(D.eg3,7,c8.$1(c7?A.c:A.dv))
return!0
case"neon":d3.az(d0.$5(-30,-14,60,28,6),c8.$1(K.nf))
if(c7)j=d4.ax>0.5||A.o.F(A.k.bh(d5*17),3)!==0
else j=!1
i=j?A.c2:D.bnR
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c2.j(0.35))
t.z=A.mS
d3.az(d2,t)}d3.az(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.ejk,i,17)
return!0
case"microwave":d3.az(d0.$4(-30,-18,60,38),d1.$3(D.f_R,A.bO,A.bn))
d2=d0.$5(-26,-14,38,30,3)
d3.az(d2,c8.$1(c7?A.bL.j(0.75):A.av))
if(c7){d2=d3.a
J.bm(d2.save())
d2.translate(-7,8)
d3.ig(0,d4.y*0.5)
d3.dO(B.bL(A.I,7,22),c8.$1(A.d1))
d2.restore()}d3.az(d0.$5(15,-14,12,12,2),c8.$1(K.nf))
if(c7)d6.$5(d3,"0:"+A.a.aS(A.o.u(59-A.o.F(A.k.bh(d5),60)),2,"0"),D.eg4,A.bj,6.5)
d3.ad(D.egk,4,c8.$1(A.dv))
return!0
case"doorbell":d3.az(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.ad(A.J2,10,c8.$1(c7?A.bG:A.br))
d2=d3.a
J.bm(d2.save())
d2.translate(0,-8)
d3.ig(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.ek1,A.c,16)
d2.restore()
d3.ad(A.kp,6,c8.$1(A.d3))
d3.ad(A.kp,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=B.bY(A.J2,14+v*6+A.k.F(t,6))
r=c9.$2(A.bG.j(0.9-v*0.3),1.8).G()
d2.drawArc.apply(d2,[B.bH(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bo(D.ejj,D.ejW,c9.$2(A.br,4))
d2=d3.a
J.bm(d2.save())
d3.ig(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.az(d0.$5(-24,-14,46,22,5),d1.$3(D.f_G,A.bO,A.al))
d3.ad(D.aJx,8,c8.$1(A.av))
d3.ad(D.aJx,4.5,c8.$1(c7?A.aQ:A.cq))
d3.ad(D.ejh,2.2,c8.$1(c7&&A.o.F(A.k.bh(d5*1.6),2)===0?A.aw:A.jM))
d2.restore()
if(c7)d6.$5(d3,"REC",D.ejs,A.aw,9)
return!0
case"console":d3.az(d0.$5(-28,-22,56,44,8),d1.$3(D.f_O,A.iR,A.fc))
d3.az(d0.$5(-20,-17,40,22,3),c8.$1(A.dK))
if(c7){d2=d5*2.3
d3.ad(new B.t(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aP(new B.a3(-18,t,-15.6,t+8),c8.$1(A.bj))
d2=-9+Math.sin(d2-0.4)*6
d3.aP(new B.a3(15.6,d2,18,d2+8),c8.$1(A.c2))}d3.ad(D.ejc,4,c8.$1(A.aS))
d3.ad(D.eg_,2.4,c8.$1(A.aw))
d3.ad(D.egh,2.4,c8.$1(A.be))
return!0
case"heartmon":d3.az(d0.$5(-30,-22,60,44,6),c8.$1(A.av))
d3.az(d0.$5(-26,-18,52,28,3),c8.$1(A.dK))
if(c7){d2=$.S()
t=B.a([],x.v)
h=new B.aG(d2.r,A.ah,c6,c6,t)
for(d2=d5*0.5,l=-25;l<=25;++l){u=A.k.F((l+25)/50-d2,1)
if(u<0.1)g=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)g=0.6
else{s=u<0.2?-0.4:0
g=s}f=-4+g*11
if(l===-25){s=new B.aY(l,f)
t.push(s)
p=h.f
if(p!=null)s.by(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new B.aq(l,f)
t.push(s)
p=h.f
if(p!=null)s.by(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aG(h,c9.$2(A.bj,1.8))
d6.$5(d3,"72",D.eg0,A.hb,11)
d2=d5*9
d6.$5(d3,"\u2665",D.ejx,A.hb.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ad(D.ejm,3,c8.$1(c7?A.be:A.br))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.az(d2,c8.$1(A.cw.j(c7?0.5:0.3)))
d3.az(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.aP(D.f_I,c8.$1(F.tB))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.bm(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.p7(0,-1,1)
d3.dO(B.bL(A.I,8,14),c8.$1(A.cS))
d2=new B.aG($.S().r,A.ah,c6,c6,B.a([],x.v))
d2.D(new B.aY(-6,0))
d2.D(new B.aq(-12,-4))
d2.D(new B.aq(-12,4))
d2.D(new B.bt())
d3.aG(d2,c8.$1(A.cf))
d3.ad(D.eh3,1.2,c8.$1(A.w))
s.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.k.F(d2+v*0.2,1)
t=Math.sin(u*8+v)
p=A.o.F(v,2)
r=c9.$2(A.ad,1).G()
s.drawCircle(-18+t*2,13-u*30,1.4+p,r)
r.delete()}}return!0
case"lighthouse":d2=$.S().r
t=x.v
e=new B.aG(d2,A.ah,c6,c6,B.a([],t))
e.D(new B.aY(-9,22))
e.D(new B.aq(-5,-16))
e.D(new B.aq(5,-16))
e.D(new B.aq(9,22))
e.D(new B.bt())
d3.aG(e,d1.$3(D.f0i,A.c,A.bx))
d3.aP(D.f0e,c8.$1(c7?A.dP:A.br))
s=new B.aG(d2,A.ah,c6,c6,B.a([],t))
s.D(new B.aY(-7,-22))
s.D(new B.aq(0,-29))
s.D(new B.aq(7,-22))
s.D(new B.bt())
d3.aG(s,c8.$1(A.ek))
if(c7){d=Math.sin(d4.y*0.3)
d2=new B.aG(d2,A.ah,c6,c6,B.a([],t))
d2.D(new B.aY(0,-19))
t=d*34
d2.D(new B.aq(t,-26))
d2.D(new B.aq(t,-12))
d2.D(new B.bt())
d3.aG(d2,c8.$1(A.dP.j(0.45)))
d2=c8.$1(A.dP.j(0.35))
d2.z=A.Iu
d3.ad(D.efz,14,d2)}return!0
case"discoball":d3.bo(D.efC,M.aJp,c9.$2(A.dv,1.4))
d3.ad(A.I,16,d1.$3(D.f_p,A.aP,A.al))
for(d2=d3.a,v=0;v<8;++v){t=-12+v*3.4
r=c9.$2(A.dm,0.7).G()
d2.drawLine.apply(d2,[-16,t,16,t,r])
r.delete()}for(v=0;v<5;++v){d=d4.y*0.5+v*1.26
t=Math.cos(d)
s=Math.sin(d)
p=Math.cos(d)
r=c9.$2(A.dm,0.7).G()
d2.drawLine.apply(d2,[t*16*0.3,s*16*0.3,p*16,0,r])
r.delete()}if(c7)for(t=d5*2,s=d5*9,v=0;v<10;++v){d=t+v*0.63
a0=22+A.o.F(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.dfP[A.o.F(v,4)].j(0.5+0.5*Math.sin(s+v))).G()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.az(d0.$5(-14,-4,28,24,5),d1.$3(D.f_m,A.cs,A.al))
d3.az(d0.$5(-12,-26,24,20,5),d1.$3(D.f_f,A.aL,A.bM))
d3.bo(G.aJq,D.efD,c9.$2(A.br,1.6))
d3.ad(D.efE,2.2,c8.$1(c7?A.aw:A.br))
a1=c7&&A.k.F(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a58[m]
if(c7)t=a1?A.b9:A.eR
else t=A.cq
r=c8.$1(t).G()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.bm(d2.save())
d2.translate(14,0)
d3.ig(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bo(A.I,D.a7k,c9.$2(A.bM,4))
d2.restore()
d3.bo(D.ej2,D.ejq,c9.$2(A.bM,4))
d3.aP(D.f0d,c8.$1(c7?A.b9.j(0.7):A.aJ))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.aAl[m]+1,d2,10,14,2)
p=B.ar(A.bL,A.d1,a2)
p.toString
r=c8.$1(p).G()
t.drawRRect(B.el(s),r)
r.delete()}d3.az(d0.$5(-24,-6,48,26,8),d1.$3(D.f_H,A.bO,A.bn))
for(m=0;m<2;++m){l=D.aAl[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fr:A.av).G()
t.drawRRect(B.el(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cS.j(0.5))
s.z=I.pm
r=s.G()
t.drawRRect(B.el(d2),r)
r.delete()}}d3.bo(D.egq,D.egM,c9.$2(A.av,3))
return!0
case"ledstrip":d3.az(d0.$5(-34,-4,68,10,4),c8.$1(A.cq))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.F(t+v*40,360)
i=c7?new L.uG(1,a3,0.8,1).lI():A.e8
if(c7){s=c8.$1(i.j(0.45))
s.z=I.pm
r=s.G()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).G()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.az(d0.$5(-40,-2,6,6,1),c8.$1(A.dv))
return!0
case"pump":d3.az(d0.$5(-16,-2,32,22,6),d1.$3(D.f_v,A.cw,A.Fm))
d3.ad(D.ejy,8,c8.$1(A.pT))
d2=d3.a
J.bm(d2.save())
d2.translate(-2,9)
d3.ig(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.fi,2.4).G()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new B.aG($.S().r,A.ah,c6,c6,B.a([],x.v))
t.D(new B.aY(16,6))
t.D(new B.aq(26,6))
t.D(new B.aq(26,-20))
t.D(new B.aq(10,-20))
d3.aG(t,c9.$2(A.bM,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.F(t+v*0.2,1)
r=c8.$1(A.hf).G()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.ad(D.ehH,3.2,c8.$1(A.hf.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.bm(d2.save())
d3.ig(0,-0.15)
d3.az(d0.$5(-26,-14,40,22,10),d1.$3(D.f_J,A.ih,A.tF))
d3.az(d0.$5(14,-10,12,14,3),c8.$1(A.cq))
d3.az(d0.$5(-10,6,12,22,4),c8.$1(A.e8))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).G()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cS.j(0.4))
d2.z=I.pm
d3.ad(D.egj,8,d2)}return!0
case"headphones":d3.e3(B.bL(A.dB,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.br,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=F.RJ[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new B.a3(s,0,s+14,20),A.bw,A.nb).G()
d2.drawRRect(B.el(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=B.bY(new B.t(l,10),10+v*5+A.k.F(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eH.j(0.9-v*0.3),1.6).G()
d2.drawArc.apply(d2,[B.bH(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new B.t(-4,-8-A.k.F(d5*14,8)),A.kx,12)
return!0
case"smartwatch":d3.az(d0.$5(-8,-30,16,14,3),c8.$1(A.cq))
d3.az(d0.$5(-8,14,16,14,3),c8.$1(A.cq))
d3.az(d0.$5(-14,-17,28,32,8),d1.$3(D.f_k,A.dv,A.e8))
d3.az(d0.$5(-11,-14,22,26,6),c8.$1(A.dK))
if(c7){a4=new B.V(Date.now(),0,!1)
d6.$5(d3,A.a.aS(A.o.u(B.de(a4)),2,"0")+":"+A.a.aS(A.o.u(B.fP(a4)),2,"0"),D.efI,A.bj,9.5)
g=(Math.sin(d5*9)+1)/2
d2=B.ar(A.F0,A.hb,g)
d2.toString
d6.$5(d3,"\u2665",new B.t(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.F(A.k.bh(d5*2),6)),A.dB,A.c,7)}return!0
case"tablet":d3.az(d0.$5(-30,-22,60,44,6),c8.$1(K.nf))
d3.az(d0.$5(-30,-22,60,44,6),c9.$2(A.bM,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.bm(d2.save())
d2.clipRRect(B.el(a5),$.nz(),!0)
d2.translate(-27,-19)
E.LF(d3,D.f64,d5,c6)
d2.restore()}else d3.az(a5,c8.$1(D.vO))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.az(a6,d1.$3(new B.a3(a6.a,a6.b,a6.c,a6.d),A.dF,A.d7))
d3.az(a6,c9.$2(A.aZ,1.2))
d3.ad(D.aJX,9,c8.$1(A.av))
d3.ad(D.aJX,6,c9.$2(A.d1,2))
d3.az(d0.$5(4,-2,14,10,2),c8.$1(A.av))
d3.az(d0.$5(-22,-19,44,12,2),c8.$1(A.dK))
d2=A.k.ac(d4.db,1)
t=A.k.ac(c7?d4.dx:d4.e,1)
s=c7?A.bj:A.al
d6.$5(d3,d2+"\u2192"+t+"V",D.ehR,s,8.2)
d3.ad(D.eg8,2.4,c8.$1(c7?A.be:A.aJ))
d6.$5(d3,"IN",D.ejr,A.ad,6)
d6.$5(d3,"OUT",D.ehz,A.ad,6)
return!0
case"regulator":a7=c7?A.k.E(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.ar(A.bM,A.aw,a7)
t.toString
d3.az(d2,c8.$1(t))
d3.ad(G.a7i,3,c8.$1(A.aJ))
d3.az(d0.$5(-12,-4,24,18,3),d1.$3(D.f_g,A.e8,A.hS))
d6.$5(d3,"7805",D.a7s,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.dm6[m]-1
r=c8.$1(A.e4).G()
d2.drawRect(B.bH(new B.a3(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.F(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).G()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.ejZ,A.bl,9)
return!0
case"diode":d3.bo(D.aK0,D.aJJ,c9.$2(A.e4,2.4))
d3.az(d0.$5(-14,-7,28,14,6),c8.$1(A.aC.j(0.85)))
d3.aP(D.f__,c8.$1(A.bl))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dP.j(0.4))
t.z=A.lL
d3.az(d2,t)}d2=new B.aG($.S().r,A.ah,c6,c6,B.a([],x.v))
d2.D(new B.aY(-8,-4))
d2.D(new B.aq(-8,4))
d2.D(new B.aq(-1,0))
d2.D(new B.bt())
d3.aG(d2,c8.$1(A.aS))
d6.$5(d3,"one way",D.ejf,A.aB,8)
return!0
case"ldr":d3.bo(D.aK0,D.a7s,c9.$2(A.e4,2.4))
d3.bo(D.aJP,D.aJJ,c9.$2(A.e4,2.4))
d3.ad(A.I,12,c8.$1(A.d1))
d3.ad(A.I,12,c9.$2(A.rf,1.6))
d2=$.S()
t=B.a([],x.v)
a8=new B.aG(d2.r,A.ah,c6,c6,t)
a8.D(new B.aY(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new B.aq(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.by(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aG(a8,c9.$2(A.bL,1.4))
d2=B.ar(A.br,A.dP,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.t(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.ej3,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.ej
break A}if("sonytv"===d2){t=A.r7
break A}if("appletv"===d2){t=A.e4
break A}t=F.F2
break A}a9=d2==="lgtv"||d2==="appletv"
d3.az(d0.$5(-36,-24,72,a9?42:44,6),c8.$1(t))
t=a9?-35:-33
s=a9?-23:-21
p=a9?70:66
a5=d0.$5(t,s,p,a9?40:38,3)
t=a5.a
s=a5.b
if(c7){p=d3.a
J.bm(p.save())
p.clipRRect(B.el(a5),$.nz(),!0)
p.translate(t,s)
E.h9M(d3,new B.av(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ad(D.egP,1.6,c8.$1(A.bj))}else{d3.az(a5,c8.$1(D.vO))
p=new B.aG($.S().r,A.ah,c6,c6,B.a([],x.v))
p.D(new B.aY(t,s))
p.D(new B.aq(t+24,s))
p.D(new B.aq(t,s+22))
p.D(new B.bt())
d3.aG(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.az(d0.$5(-22,19,44,3,1.5),c8.$1(A.dv))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=K.hy[m]
s=$.S()
p=B.a([],t)
s=new B.aG(s.r,A.ah,c6,c6,p)
p.push(new B.aY(l*30,20))
p.push(new B.aq(l*22,20))
p.push(new B.aq(l*26,26))
p.push(new B.bt())
r=c8.$1(A.dv).G()
p=s.gbw().a.snapshot()
d2.drawPath((s.e=new B.cm(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.eiv,A.bO,5.5)
break
case"appletv":d2=new B.aG($.S().r,A.ah,c6,c6,B.a([],x.v))
d2.D(new B.aY(-8,18))
d2.D(new B.aq(8,18))
d2.D(new B.aq(12,25))
d2.D(new B.aq(-12,25))
d2.D(new B.bt())
d3.aG(d2,c8.$1(D.Ym))
d6.$5(d3,"Apple TV",D.ehS,A.br,4.8)
break
default:d3.az(d0.$5(-34,19,68,7,3),c8.$1(D.bma))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dm,0.6).G()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.ejV,F.tB,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.mh.h(0,d2)
b1=b0.b===D.wO
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
J.bm(t.save())
t.clipRRect(B.el(a5),$.nz(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.LF(d3,new B.av(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.az(a5,c8.$1(D.vO))
if(b1){t=a5.b
s=a5.d
d3.bo(new B.t(0,t),new B.t(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.az(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.ad(new B.t(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.az(d0.$5(-17,-28,34,52,4),c8.$1(A.e8))
d3.az(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bO))
if(c7){d6.$5(d3,"NGMY",D.ek4,A.av,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.F(v,4)===3?14:22
r=c8.$1(A.bn).G()
d2.drawRect(B.bH(new B.a3(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ad(A.a7g,1.6,c8.$1(A.av))}return!0
case"laptop":d3.az(d0.$5(-30,-28,60,42,4),d1.$3(D.f_S,A.cs,A.bn))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.bm(d2.save())
d2.clipRRect(B.el(b8),$.nz(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.LF(d3,new B.av(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.az(b8,c8.$1(D.vO))
d2=new B.aG($.S().r,A.ah,c6,c6,B.a([],x.v))
d2.D(new B.aY(-38,16))
d2.D(new B.aq(38,16))
d2.D(new B.aq(34,21))
d2.D(new B.aq(-34,21))
d2.D(new B.bt())
d3.aG(d2,c8.$1(D.Ym))
d3.az(d0.$5(-7,16,14,2,1),c8.$1(A.bn))
return!0
case"imac":d3.az(d0.$5(-32,-28,64,46,5),d1.$3(D.f_W,A.bN,A.cs))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.bm(d2.save())
d2.clipRRect(B.el(b9),$.nz(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.LF(d3,new B.av(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.az(b9,c8.$1(D.vO))
d3.ad(D.aJk,2,c8.$1(A.bM))
d2=new B.aG($.S().r,A.ah,c6,c6,B.a([],x.v))
d2.D(new B.aY(-6,18))
d2.D(new B.aq(6,18))
d2.D(new B.aq(10,26))
d2.D(new B.aq(-10,26))
d2.D(new B.bt())
d3.aG(d2,c8.$1(D.Ym))
return!0
case"monitor":d3.az(d0.$5(-34,-28,68,40,3),c8.$1(A.ej))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.bm(d2.save())
d2.clipRRect(B.el(c0),$.nz(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.LF(d3,new B.av(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.az(c0,c8.$1(D.vO))
d3.aP(D.f02,c8.$1(A.bn))
d3.az(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dv))
return!0
case"projector":if(c7){d2=new B.aG($.S().r,A.ah,c6,c6,B.a([],x.v))
d2.D(new B.aY(14,4))
d2.D(new B.aq(-32,-42))
d2.D(new B.aq(34,-42))
d2.D(new B.bt())
d3.aG(d2,c8.$1(A.dP.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.bm(d2.save())
d2.clipRRect(B.el(c1),$.nz(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.LF(d3,new B.av(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.az(d0.$5(-26,-4,52,24,6),d1.$3(D.f_K,A.iv,A.dv))
d3.ad(D.aJv,7,c8.$1(A.av))
d3.ad(D.aJv,4,c8.$1(c7?A.dP:A.cq))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dm,1).G()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.az(d0.$5(-34,-10,68,32,12),c8.$1(A.av))
c2=d0.$5(-30,-20,60,28,8)
d3.az(c2,c8.$1(K.nf))
d3.az(c2,c9.$2(A.br,1.2))
if(c7){c3=new B.aG($.S().r,A.ah,c6,c6,B.a([],x.v))
c3.D(new B.aY(-26,4))
c3.D(new B.c5(-10,-14+Math.sin(d5)*3,6,-6))
c3.D(new B.aq(22,-16))
d3.aG(c3,c9.$2(A.aQ,2.2))
d2=A.k.F(d5*6,48)
d3.ad(new B.t(-26+d2,4-d2*0.1),2.4,c8.$1(A.bj))
d6.$5(d3,""+(88+A.o.F(A.k.bh(d5*2),5)),G.aJO,A.c,10)
d6.$5(d3,"km/h",D.ehF,A.aB,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.az(c4,d1.$3(new B.a3(c4.a,c4.b,c4.c,c4.d),A.dv,A.e8))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.bm(d2.save())
d2.clipRRect(B.el(c5),$.nz(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.LF(d3,new B.av(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.bw.j(0.2))
d2.z=A.mS
d3.ad(A.I,26,d2)}else d3.az(c5,c8.$1(A.M))
d3.bo(D.ejF,D.ejK,c9.$2(A.bn,4))
d3.bo(D.egR,D.eh6,c9.$2(A.bn,4))
return!0}return!1},
fP5:function fP5(){},
fP7:function fP7(){},
fP8:function fP8(){},
fP6:function fP6(){},
hcv(d,e,f,g){return new C.aj8(d,g,f,e)},
G_(d,e,f){return new C.bcb(d,e,f)},
aj8:function aj8(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aj9:function aj9(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.iL$=h
_.oH$=i
_.nj$=j
_.iM$=k
_.bz$=l
_.aa$=m
_.c=_.a=null},
bIx:function bIx(d,e){this.a=d
this.b=e},
bIy:function bIy(d){this.a=d},
bIw:function bIw(d){this.a=d},
bIz:function bIz(){},
bIA:function bIA(d){this.a=d},
bIB:function bIB(d,e,f){this.a=d
this.b=e
this.c=f},
bIv:function bIv(d,e){this.a=d
this.b=e},
bIt:function bIt(d,e){this.a=d
this.b=e},
bIu:function bIu(d,e,f){this.a=d
this.b=e
this.c=f},
bIn:function bIn(d,e){this.a=d
this.b=e},
bIo:function bIo(){},
bIp:function bIp(d,e){this.a=d
this.b=e},
bIq:function bIq(d,e){this.a=d
this.b=e},
bIr:function bIr(d){this.a=d},
bIs:function bIs(d){this.a=d},
bIQ:function bIQ(d){this.a=d},
bIR:function bIR(){},
bI0:function bI0(){},
bIS:function bIS(d,e){this.a=d
this.b=e},
bIP:function bIP(d,e,f){this.a=d
this.b=e
this.c=f},
bIK:function bIK(d){this.a=d},
bIH:function bIH(d,e,f){this.a=d
this.b=e
this.c=f},
bII:function bII(d,e){this.a=d
this.b=e},
bIL:function bIL(d){this.a=d},
bIF:function bIF(d,e){this.a=d
this.b=e},
bIG:function bIG(d,e){this.a=d
this.b=e},
bIJ:function bIJ(d){this.a=d},
bIM:function bIM(d){this.a=d},
bID:function bID(d,e){this.a=d
this.b=e},
bIE:function bIE(d,e){this.a=d
this.b=e},
bIN:function bIN(d){this.a=d},
bIC:function bIC(d){this.a=d},
bIO:function bIO(d){this.a=d},
bI1:function bI1(d,e){this.a=d
this.b=e},
bIk:function bIk(d,e){this.a=d
this.b=e},
bIm:function bIm(d,e){this.a=d
this.b=e},
bIl:function bIl(d,e){this.a=d
this.b=e},
bI7:function bI7(d,e){this.a=d
this.b=e},
bI8:function bI8(d){this.a=d},
bI6:function bI6(d){this.a=d},
bI9:function bI9(d,e,f){this.a=d
this.b=e
this.c=f},
bI5:function bI5(d,e){this.a=d
this.b=e},
bIc:function bIc(d,e){this.a=d
this.b=e},
bId:function bId(d,e){this.a=d
this.b=e},
bIe:function bIe(d,e){this.a=d
this.b=e},
bIf:function bIf(d,e,f){this.a=d
this.b=e
this.c=f},
bI4:function bI4(d,e){this.a=d
this.b=e},
bIg:function bIg(d,e,f){this.a=d
this.b=e
this.c=f},
bI3:function bI3(d,e){this.a=d
this.b=e},
bIh:function bIh(d,e,f){this.a=d
this.b=e
this.c=f},
bI2:function bI2(d,e){this.a=d
this.b=e},
bIi:function bIi(d){this.a=d},
bIj:function bIj(d){this.a=d},
bIa:function bIa(d){this.a=d},
bIb:function bIb(d){this.a=d},
bcb:function bcb(d,e,f){this.a=d
this.b=e
this.c=f},
fmA:function fmA(){},
fmB:function fmB(){},
fmC:function fmC(){},
fmn:function fmn(){},
fmD:function fmD(){},
fmm:function fmm(){},
fmE:function fmE(){},
fmr:function fmr(){},
fml:function fml(){},
fms:function fms(){},
fmk:function fmk(){},
fmt:function fmt(){},
fmj:function fmj(){},
fmu:function fmu(){},
fmh:function fmh(){},
fmi:function fmi(){},
fmv:function fmv(){},
fmf:function fmf(){},
fmg:function fmg(){},
fmw:function fmw(){},
fme:function fme(){},
VD:function VD(d){this.a=d},
aEi:function aEi(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dXz:function dXz(d,e){this.a=d
this.b=e},
dXI:function dXI(d){this.a=d},
dXJ:function dXJ(){},
dXK:function dXK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dXL:function dXL(){},
dXy:function dXy(d){this.a=d},
dXx:function dXx(d,e,f){this.a=d
this.b=e
this.c=f},
dXw:function dXw(d,e){this.a=d
this.b=e},
dXu:function dXu(d){this.a=d},
dXv:function dXv(){},
dXH:function dXH(d){this.a=d},
dXG:function dXG(d){this.a=d},
dXE:function dXE(d,e){this.a=d
this.b=e},
dXC:function dXC(d){this.a=d},
dXD:function dXD(){},
dXF:function dXF(d,e,f){this.a=d
this.b=e
this.c=f},
dXA:function dXA(d,e){this.a=d
this.b=e},
dXB:function dXB(){},
dXN:function dXN(d){this.a=d},
dXO:function dXO(d,e){this.a=d
this.b=e},
dXM:function dXM(){},
dXP:function dXP(d,e){this.a=d
this.b=e},
dXQ:function dXQ(d){this.a=d},
dXR:function dXR(d){this.a=d},
ayg:function ayg(d,e){this.c=d
this.a=e},
bal:function bal(d,e){var _=this
_.d=$
_.bz$=d
_.aa$=e
_.c=_.a=null},
cHY:function cHY(d){this.a=d},
bak:function bak(d,e){this.b=d
this.a=e},
cHX:function cHX(d){this.a=d},
ayA:function ayA(){},
ayB:function ayB(){},
aKR:function aKR(){},
byC:function byC(){},
ihP(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bY(A.uZ,23)
$.S()
b8=B.I()
b8.r=A.av.gp(0)
b9.ad(A.uZ,25,b8)
b8=B.I()
b8.sam(D.esS.aB(0,v))
b9.ad(A.uZ,23,b8)
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
r.r=A.bx.gp(0)
r.c=2
r.d=A.bE
b9.bo(A.uZ,new B.t(b8*18,s*18-2),r)
r=B.I()
r.r=A.bl.gp(0)
b9.ad(A.uZ,3,r)
c2.$5(b9,w?"V":"A",D.ejN,A.bl,12)
c2.$5(b9,w?A.k.ac(m,1)+" V":""+A.k.V(m*1000)+" mA",D.ej9,A.av,9.5)
return!0
case"fan":b8=B.bu(D.f_c,A.hA)
$.S()
s=B.I()
s.r=A.br.gp(0)
b9.az(b8,s)
s=B.I()
s.r=A.al.gp(0)
b9.aP(D.f03,s)
s=B.I()
s.r=A.M.j(0.6).gp(0)
b9.ad(G.v_,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bm(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bL(A.aJo,18,10)
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.hf.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.G()
b8.drawOval(B.bH(s),n)
n.delete()
b8.restore()}b8=B.I()
b8.r=A.bo.gp(0)
b9.ad(G.v_,4,b8)
b8=B.I()
b8.b=A.ab
b8.c=2
b8.r=A.cs.gp(0)
b9.ad(G.v_,22,b8)
b8=B.I()
b8.b=A.ab
b8.c=0.8
b8.r=A.jN.gp(0)
b9.ad(G.v_,14,b8)
return!0
case"speaker":l=B.bu(D.aPw,A.v4)
$.S()
b8=B.I()
b8.sam(D.ar7.aB(0,new B.a3(l.a,l.b,l.c,l.d)))
b9.az(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=B.I()
b8.sam(D.etd.aB(0,B.bY(A.cx,15)))
b9.ad(A.cx,14+k,b8)
b8=B.I()
b8.r=A.dv.gp(0)
b9.ad(A.cx,5,b8)
b8=B.I()
b8.r=A.bn.gp(0)
b9.ad(G.a7h,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=B.bY(D.egp,6+u*6+A.k.F(b8,6))
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.b=A.ab
q.c=1.8
q.r=A.c2.j(0.9-u*0.2).gp(0)
n=q.G()
s.drawArc.apply(s,[B.bH(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=B.bu(D.f_V,A.v4)
$.S()
b8=B.I()
b8.sam(D.c3I.aB(0,new B.a3(j.a,j.b,j.c,j.d)))
b9.az(j,b8)
b8=B.bu(D.aPy,A.i9)
s=B.I()
s.r=A.hS.gp(0)
b9.az(b8,s)
if(b7){i=new B.V(Date.now(),0,!1)
h=B.Fl(i)<500?":":" "
g=A.a.aS(A.o.u(B.de(i)),2,"0")
f=A.a.aS(A.o.u(B.fP(i)),2,"0")
b8=B.I()
b8.r=A.bj.j(0.12).gp(0)
b9.aP(D.aPy,b8)
c2.$5(b9,g+h+f,D.ejv,A.bj,21)}b8=B.I()
b8.r=A.cs.gp(0)
b9.ad(D.ejt,2.4,b8)
b8=B.I()
b8.r=A.cs.gp(0)
b9.ad(D.egu,2.4,b8)
return!0
case"calculator":j=B.bu(D.f_A,A.hB)
$.S()
b8=B.I()
b8.sam(D.c3s.aB(0,new B.a3(j.a,j.b,j.c,j.d)))
b9.az(j,b8)
b8=B.bu(D.f_t,A.hl)
s=B.I()
s.r=(b7?A.Yy:D.boq).gp(0)
b9.az(b8,s)
if(b7)c2.$5(b9,"3.14159",D.ej8,A.Xm,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=B.bu(new B.a3(q,s,q+6,r),A.TC)
$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=(d===3?A.cf:A.bO).gp(0)
n=p.G()
b8.drawRRect(B.el(q),n)
n.delete()}return!0
case"phone":j=B.bu(D.f_o,A.hB)
$.S()
b8=B.I()
b8.r=K.nf.gp(0)
b9.az(j,b8)
b8=B.I()
b8.b=A.ab
b8.c=1.9
b8.r=D.aiE.gp(0)
b9.az(j,b8)
a0=B.bu(D.f_e,A.hA)
if(b7){b8=B.I()
b8.sam(D.c50.aB(0,new B.a3(a0.a,a0.b,a0.c,a0.d)))
b9.az(a0,b8)
b8=b9.a
J.bm(b8.save())
b8.clipRRect(B.el(a0),$.nz(),!0)
b8.translate(-12,-25)
E.LF(b9,D.f5H,c1,b6)
b8.restore()
a1=A.k.F(c1*0.12,1)
b8=B.bu(D.f_b,A.hl)
s=B.I()
s.r=A.aS.gp(0)
b9.az(b8,s)
s=B.I()
s.r=A.bj.gp(0)
b9.aP(new B.a3(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.eib,A.c,6)}else{b8=B.I()
b8.r=D.vO.gp(0)
b9.az(a0,b8)}b8=B.bu(D.f0j,D.etm)
s=B.I()
s.r=A.w.gp(0)
b9.az(b8,s)
return!0
case"router":j=B.bu(D.f_U,A.mV)
$.S()
b8=B.I()
b8.sam(D.c3Z.aB(0,new B.a3(j.a,j.b,j.c,j.d)))
b9.az(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=F.RJ[a2]
s=a3<0?-4:4
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.cq.gp(0)
r.c=4
r.d=A.bE
n=r.G()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.F(A.k.bh(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.r=(a4?A.be:A.aJ).gp(0)
n=s.G()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=B.bY(G.v_,8+u*6+A.k.F(s,6))
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.b=A.ab
q.c=1.8
q.r=A.iQ.j(0.9-u*0.2).gp(0)
n=q.G()
b8.drawArc.apply(b8,[B.bH(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bu(D.f_z,A.hA)
s=$.S()
r=B.I()
r.r=A.e8.gp(0)
b9.az(b8,r)
if(b7){b8=B.I()
b8.r=A.aw.j(0.5*a5).gp(0)
b8.z=A.zC
b9.ad(A.uZ,34,b8)}a6=new B.aG(s.r,A.ah,b6,b6,B.a([],x.v))
a6.D(new B.aY(-16,12))
a6.D(new B.aq(-16,-2))
a6.D(new B.c5(0,-30,16,-2))
a6.D(new B.aq(16,12))
a6.D(new B.bt())
b8=B.I()
b8.r=B.ar(A.ek,D.bfC,a5).gp(0)
b9.aG(a6,b8)
b8=B.I()
b8.b=A.ab
b8.c=1.4
b8.r=A.bY.gp(0)
b9.aG(a6,b8)
if(b7){b8=b9.a
J.bm(b8.save())
b8.translate(0,-2)
b9.ig(0,c1*7)
s=B.I()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bo(A.I,G.a7h,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.bm(b8.save())
b8.translate(0,a7)
s=$.S().r
r=x.v
j=new B.aG(s,A.ah,b6,b6,B.a([],r))
j.D(new B.aY(-28,8))
j.D(new B.aq(-28,-2))
j.D(new B.aq(-16,-4))
j.D(new B.aq(-10,-16))
j.D(new B.aq(10,-16))
j.D(new B.aq(18,-4))
j.D(new B.aq(28,-2))
j.D(new B.aq(28,8))
j.D(new B.bt())
q=B.I()
q.sam(D.c22.aB(0,D.f_N))
b9.aG(j,q)
q=new B.aG(s,A.ah,b6,b6,B.a([],r))
q.D(new B.aY(-8,-4))
q.D(new B.aq(-4,-13))
q.D(new B.aq(4,-13))
q.D(new B.aq(4,-4))
q.D(new B.bt())
p=B.I()
p.r=A.fi.gp(0)
b9.aG(q,p)
r=new B.aG(s,A.ah,b6,b6,B.a([],r))
r.D(new B.aY(8,-4))
r.D(new B.aq(8,-13))
r.D(new B.aq(11,-13))
r.D(new B.aq(15,-4))
r.D(new B.bt())
s=B.I()
s.r=A.fi.gp(0)
b9.aG(r,s)
for(a2=0;a2<2;++a2){a3=F.aAm[a2]
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.r=A.av.gp(0)
n=s.G()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.bm(b8.save())
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
j=new B.aG(b8,A.ah,b6,b6,B.a([],s))
j.D(new B.aY(-18,20))
j.D(new B.aq(-14,-12))
j.D(new B.c5(0,-20,14,-12))
j.D(new B.aq(18,20))
j.D(new B.bt())
r=B.I()
r.sam(D.c37.aB(0,D.f_y))
b9.aG(j,r)
r=new B.aG(b8,A.ah,b6,b6,B.a([],s))
r.D(new B.aY(14,-10))
r.D(new B.aq(30,-22))
r.D(new B.aq(32,-18))
r.D(new B.aq(16,-4))
r.D(new B.bt())
q=B.I()
q.r=A.e4.gp(0)
b9.aG(r,q)
s=new B.aG(b8,A.ah,b6,b6,B.a([],s))
s.D(new B.aY(-14,-8))
s.D(new B.c5(-34,-6,-18,12))
b8=B.I()
b8.b=A.ab
b8.c=5
b8.r=A.av.gp(0)
b9.aG(s,b8)
b8=B.I()
if(b7){s=B.ar(A.cS,A.tN,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.e8
b8.r=s.gp(0)
b9.aP(D.f_x,b8)
if(b7){b8=B.I()
b8.r=A.cS.j(0.3).gp(0)
b8.z=A.mS
b9.ad(A.aJm,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.F(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.G()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=B.I()
b8.r=A.av.gp(0)
b9.ad(D.efx,3,b8)
return!0
case"lamp":if(b7){u=A.k.E(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aG($.S().r,A.ah,b6,b6,B.a([],x.v))
b8.D(new B.aY(-10,-14))
b8.D(new B.aq(-30,24))
b8.D(new B.aq(10,24))
b8.D(new B.aq(8,-14))
b8.D(new B.bt())
s=B.I()
s.r=A.dP.j(0.28*u).gp(0)
b9.aG(b8,s)
s=B.I()
s.r=A.dP.j(0.5*u).gp(0)
s.z=Y.It
b9.ad(D.ejz,24,s)}b8=B.bu(D.f0c,A.hA)
s=$.S()
r=B.I()
r.r=A.e8.gp(0)
b9.az(b8,r)
r=B.I()
r.r=A.dv.gp(0)
r.c=3
r.d=A.bE
b9.bo(D.efL,D.aJy,r)
r=B.I()
r.r=A.dv.gp(0)
r.c=3
r.d=A.bE
b9.bo(D.aJy,D.ejA,r)
a9=new B.aG(s.r,A.ah,b6,b6,B.a([],x.v))
a9.D(new B.aY(-14,-16))
a9.D(new B.aq(6,-26))
a9.D(new B.aq(10,-12))
a9.D(new B.aq(-10,-6))
a9.D(new B.bt())
s=B.I()
s.r=(b7?A.aU:A.ke).gp(0)
b9.aG(a9,s)
b8=B.I()
b8.r=(b7?A.c:A.bn).gp(0)
b9.ad(D.ejD,4,b8)
return!0
case"lights":b8=$.S().r
s=x.v
b0=new B.aG(b8,A.ah,b6,b6,B.a([],s))
b0.D(new B.aY(-34,-6))
b0.D(new B.c5(0,22,34,-6))
r=B.I()
r.b=A.ab
r.c=2
r.r=A.hd.gp(0)
b9.aG(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.F(q+u*0.7,1.8)<1.1
if(b2){b3=new B.ap(A.R,A.N,A.U,A.V,A.S)
b3.r=D.a48[u].j(0.6).gp(0)
b3.z=A.Iu
n=b3.G()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=B.a([],s)
b4=new B.aG(b8,A.ah,b6,b6,b3)
b3.push(new B.aY(p-3,o))
b3.push(new B.aq(p+3,o))
b5=o+11
b3.push(new B.aq(p+5,b5))
b3.push(new B.c5(p,o+17,p-5,b5))
b3.push(new B.bt())
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
if(b2)o=D.a48[u]
else{o=B.ar(D.a48[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.G()
p=b4.gbw().a.snapshot()
r.drawPath((b4.e=new B.cm(p)).a,n)
n.delete()}return!0}return C.ihN(b9,c0,c1,c2)},
fR:function fR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h7Q(d){var w=D.mh.h(0,d)
return(w==null?null:w.b)===D.A1},
ij_(d,e,f){return B.a4(d,!1).cc(B.uY(null,!1,!0,!0,new C.fTX(e,f),A.eS,null,A.q8,new C.fTY(),x.H))},
JM:function JM(d,e){this.a=d
this.b=e},
mh:function mh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fTX:function fTX(d,e){this.a=d
this.b=e},
fTY:function fTY(){},
Vm:function Vm(d,e,f){this.c=d
this.d=e
this.a=f},
bkQ:function bkQ(d,e){var _=this
_.d=$
_.e=null
_.bz$=d
_.aa$=e
_.c=_.a=null},
dTY:function dTY(d){this.a=d},
dTX:function dTX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTV:function dTV(){},
dTW:function dTW(d){this.a=d},
dTU:function dTU(d){this.a=d},
dTT:function dTT(d,e){this.a=d
this.b=e},
dTS:function dTS(d,e){this.a=d
this.b=e},
dTR:function dTR(d){this.a=d},
dTQ:function dTQ(d){this.a=d},
dTM:function dTM(d){this.a=d},
dTL:function dTL(d){this.a=d},
dTP:function dTP(d,e,f){this.a=d
this.b=e
this.c=f},
dTO:function dTO(d){this.a=d},
dTN:function dTN(d){this.a=d},
bwG:function bwG(d,e,f){this.b=d
this.c=e
this.a=f},
af1:function af1(d,e,f){this.b=d
this.c=e
this.a=f},
aMB:function aMB(){},
a1p(d,e,f,g,h,i){return new C.bvt(d,e,f,g,h,i)},
bvt:function bvt(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fn4:function fn4(){},
fn5:function fn5(){},
fn6:function fn6(){},
fn7:function fn7(){},
fn8:function fn8(){},
fn9:function fn9(){},
fna:function fna(){},
fnb:function fnb(){},
a8O:function a8O(d){this.a=d},
ckw:function ckw(d){this.a=d},
ckx:function ckx(){},
ckv:function ckv(d,e){this.a=d
this.b=e},
cku:function cku(d){this.a=d},
WX:function WX(d){this.a=d},
aFK:function aFK(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.iL$=f
_.oH$=g
_.nj$=h
_.iM$=i
_.bz$=j
_.aa$=k
_.c=_.a=null},
eO1:function eO1(d){this.a=d},
eNY:function eNY(d){this.a=d},
eNX:function eNX(d,e){this.a=d
this.b=e},
eO_:function eO_(d,e){this.a=d
this.b=e},
eNZ:function eNZ(d,e){this.a=d
this.b=e},
eO0:function eO0(d){this.a=d},
bwS:function bwS(d,e,f){this.b=d
this.c=e
this.a=f},
VL:function VL(d){this.a=d},
bkZ:function bkZ(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.iL$=d
_.oH$=e
_.nj$=f
_.iM$=g
_.bz$=h
_.aa$=i
_.c=_.a=null},
e_g:function e_g(){},
e_h:function e_h(){},
e_b:function e_b(d,e){this.a=d
this.b=e},
e_d:function e_d(d,e){this.a=d
this.b=e},
e_e:function e_e(d){this.a=d},
e_c:function e_c(d){this.a=d},
e_f:function e_f(d){this.a=d},
brD:function brD(d,e,f){this.b=d
this.c=e
this.a=f},
UY:function UY(d){this.a=d},
bkC:function bkC(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.iL$=d
_.oH$=e
_.nj$=f
_.iM$=g
_.bz$=h
_.aa$=i
_.c=_.a=null},
dLC:function dLC(){},
dLD:function dLD(){},
dLx:function dLx(){},
dLA:function dLA(d,e){this.a=d
this.b=e},
dLz:function dLz(d,e){this.a=d
this.b=e},
dLB:function dLB(d){this.a=d},
dLy:function dLy(d){this.a=d},
aJg:function aJg(d,e,f){this.a=d
this.b=e
this.c=f},
VC:function VC(d){this.a=d},
bkS:function bkS(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dXi:function dXi(d,e){this.a=d
this.b=e},
dXj:function dXj(d){this.a=d},
dXh:function dXh(d,e){this.a=d
this.b=e},
dXk:function dXk(d){this.a=d},
dXg:function dXg(d,e){this.a=d
this.b=e},
dXl:function dXl(d){this.a=d},
dXf:function dXf(d,e){this.a=d
this.b=e},
dXm:function dXm(d,e){this.a=d
this.b=e},
dXe:function dXe(d,e){this.a=d
this.b=e},
dXn:function dXn(d){this.a=d},
dXd:function dXd(d,e){this.a=d
this.b=e},
dXo:function dXo(d){this.a=d},
dXc:function dXc(d){this.a=d},
dXp:function dXp(d){this.a=d},
dXb:function dXb(d){this.a=d},
dXq:function dXq(d){this.a=d},
dXr:function dXr(d){this.a=d},
dXa:function dXa(d){this.a=d},
bmP:function bmP(d,e,f){this.b=d
this.c=e
this.a=f},
Wk:function Wk(d){this.a=d},
aF5:function aF5(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
elK:function elK(d,e){this.a=d
this.b=e},
elL:function elL(d,e,f){this.a=d
this.b=e
this.c=f},
elJ:function elJ(d,e,f){this.a=d
this.b=e
this.c=f},
elM:function elM(d){this.a=d},
elI:function elI(d){this.a=d},
elQ:function elQ(d){this.a=d},
elP:function elP(d,e){this.a=d
this.b=e},
elO:function elO(d,e){this.a=d
this.b=e},
elR:function elR(d,e){this.a=d
this.b=e},
elN:function elN(d,e){this.a=d
this.b=e},
elS:function elS(d){this.a=d},
Wv:function Wv(d){this.a=d},
aFo:function aFo(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
evF:function evF(d){this.a=d},
evG:function evG(d){this.a=d},
evD:function evD(d,e){this.a=d
this.b=e},
evE:function evE(d){this.a=d},
evC:function evC(d){this.a=d},
evH:function evH(d){this.a=d},
evI:function evI(d){this.a=d},
evJ:function evJ(d){this.a=d},
evK:function evK(d,e){this.a=d
this.b=e},
WP:function WP(d){this.a=d},
bm2:function bm2(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eJw:function eJw(){},
eJF:function eJF(){},
eJB:function eJB(d){this.a=d},
eJA:function eJA(){},
eJC:function eJC(d,e){this.a=d
this.b=e},
eJz:function eJz(d,e){this.a=d
this.b=e},
eJD:function eJD(d){this.a=d},
eJy:function eJy(d,e){this.a=d
this.b=e},
eJE:function eJE(d){this.a=d},
eJx:function eJx(d){this.a=d},
Wj:function Wj(d){this.a=d},
bly:function bly(d,e,f,g,h,i,j,k){var _=this
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
_.iL$=f
_.oH$=g
_.nj$=h
_.iM$=i
_.bz$=j
_.aa$=k
_.c=_.a=null},
ekP:function ekP(){},
ekQ:function ekQ(){},
ekI:function ekI(d){this.a=d},
ekH:function ekH(d){this.a=d},
ekJ:function ekJ(d){this.a=d},
ekG:function ekG(d){this.a=d},
ekK:function ekK(d){this.a=d},
ekF:function ekF(d){this.a=d},
ekL:function ekL(d,e){this.a=d
this.b=e},
ekE:function ekE(d,e){this.a=d
this.b=e},
ekM:function ekM(d){this.a=d},
ekD:function ekD(d,e){this.a=d
this.b=e},
ekN:function ekN(d){this.a=d},
ekC:function ekC(d,e){this.a=d
this.b=e},
ekO:function ekO(d){this.a=d},
ekB:function ekB(d,e){this.a=d
this.b=e},
beB:function beB(d,e,f){this.c=d
this.d=e
this.a=f},
aMp:function aMp(){},
byz:function byz(){},
aMG:function aMG(){},
byD:function byD(){},
aN7:function aN7(){},
byL:function byL(){},
aNw:function aNw(){},
byT:function byT(){},
oD(d,e,f,g,h,i){return new C.b81(h,d,f,g,i,e,null)},
hxC(d,e,f,g){var w=null
return B.cj(w,w,!0,w,new C.fXO(g,e,f),d,w,!0,!0,x.H)},
lU(d,e,f,g,h,i,j){return new C.b82(f,j,i,h,g,d,e,null)},
yY(d,e,f){return C.ijR(d,e,f)},
ijR(d,e,f){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$yY=B.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aV.al$.x.h(0,e)
n=n==null?null:n.gbd()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return B.b(r.m5(2),$async$yY)
case 7:q=h
w=8
return B.b(q.ht(A.h9),$async$yY)
case 8:p=h
if(p==null){w=1
break}o=J.eR(A.dJ.gaR(p))
w=9
return B.b(B.aw2(B.a([B.cDd(o,"image/png",f+".png")],x.r),null,"Made in NGMY Core Protocol"),$async$yY)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.K(x.gV).f.U(D.aRC)
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$yY,v)},
q4(d,e,f,g){var w,v=$.asx
if(v==="music")return E.dZ(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dZ(261.63*v,w,f,0,g,"sine")}return C.h2o(v,e,f,g)},
h2o(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.E(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return E.dZ(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return E.dZ(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return E.dZ(140+A.o.F(e,12)*9,"",150,0.9,g,v)
case"bubble":return E.dZ(260+A.o.F(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":E.dZ(t,"",160,-0.7,g*0.4,w)
return E.dZ(900,"",90,0,g*0.45,u)
case"zap":return E.dZ(t*3,"",150,1.6,g*0.4,"square")
case"click":return E.dZ(2600+A.o.F(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":E.dZ(320,"",220,-0.7,g*0.35,v)
return E.dZ(1500,"",200,0,g*0.22,u)
case"organic":return E.dZ(85+A.o.F(e,12)*5,"",190,1.1,g,v)
case"lab":return E.dZ(t*1.6,"",140,-0.3,g*0.55,w)
default:return E.dZ(t,"",s,0,g*0.5,w)}},
Ji(d,e,f,g){var w,v,u,t,s,r,q,p=$.asx
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.M)(e),++w)C.q4(d,e[w],f,g)
return}for(p=B.d1(e,0,B.dB(4,"count",x.S),B.T(e).c),v=p.$ti,p=new B.bS(p,p.gL(0),v.k("bS<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)C.q4(d,s,f,g)
else B.bQ(new B.b9(1000*q),new C.cks(d,s,f,g),u)}},
a8N(d,e){var w="sine",v="noise"
switch(d){case"kick":E.dZ(95,"",200,1.8,e,w)
break
case"snare":E.dZ(220,"",140,0,e*0.65,v)
break
case"hat":E.dZ(5000,"",50,0,e*0.35,v)
break
case"open":E.dZ(5200,"",220,0,e*0.35,v)
break
case"clap":E.dZ(1100,"",100,0,e*0.5,v)
break
case"tom":E.dZ(150,"",230,1,e,w)
break
case"low":E.dZ(100,"",260,0.9,e,w)
break
case"rim":E.dZ(1700,"",60,0,e*0.4,"square")
break
case"cow":E.dZ(820,"",240,0,e*0.3,"square")
break
case"crash":E.dZ(3200,"",650,0,e*0.4,v)
break
case"shake":E.dZ(7000,"",90,0,e*0.3,v)
break
default:E.dZ(60,"",300,0,e,w)}},
ci0(d){return C.hOK(d)},
hOK(d){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ci0=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$ci0)
case 7:r=f
q=B.aS(J.r(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.U(x.N,x.A)
w=1
break}p=A.X.aM(0,q,null)
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
return B.i($async$ci0,v)},
b2a(d,e){return C.hOL(d,e)},
hOL(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b2a=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b2a)
case 6:s=g
w=7
return B.b(s.au("String","ngmy_play_progress_v1_"+d,A.X.ap(e,null)),$async$b2a)
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
return B.i($async$b2a,v)},
b81:function b81(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cyj:function cyj(d){this.a=d},
cyk:function cyk(d,e){this.a=d
this.b=e},
fXO:function fXO(d,e,f){this.a=d
this.b=e
this.c=f},
fXN:function fXN(d){this.a=d},
eX:function eX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cyf:function cyf(d){this.a=d},
hj:function hj(d,e,f){this.c=d
this.d=e
this.a=f},
b82:function b82(d,e,f,g,h,i,j,k){var _=this
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
cye:function cye(d){this.a=d},
JY:function JY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cyl:function cyl(d){this.a=d},
qQ:function qQ(){},
cyg:function cyg(d,e,f){this.a=d
this.b=e
this.c=f},
cyi:function cyi(d){this.a=d},
cyh:function cyh(){},
cks:function cks(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hqi(d,e){var w
$.S()
w=B.I()
w.r=d.gp(0)
w.c=e
w.b=A.ab
w.d=A.bE
return w},
ub(d,e,f){var w,v,u,t
if(f==null){w=e.length
if(w===2)w=null
else{v=B.a([],x.n)
for(u=w-1,t=0;t<w;++t)v.push(t/u)
w=v}}else w=f
return B.jp(A.I,new B.t(0,d.b),e,w,A.x,null)},
i_w(d,e,f){return $.i_x.c4(0,d+"|"+A.k.V(e)+"|"+f.l(),new C.flu(d,f,e))},
ihR(e5,e6,e7,e8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9=null,e0=e6.a,e1=e6.b,e2=0+e1,e3=new B.a3(0,0,0+e0,e2),e4=new B.e9()
e4.d4(e8*97+5)
w=new C.fPg(e4)
switch(A.o.F(e8,20)){case 0:$.S()
e2=B.I()
e2.sam(C.ub(e6,D.d9Q,d9))
e5.aP(e3,e2)
v=new B.t(e0*(0.5+0.2*Math.sin(6.283185307179586*e7)),e1*0.5)
e2=e0*0.5
u=B.I()
u.sam(B.tp(v,e2,B.a([D.bsd,A.L],x.O),d9,A.x,d9,d9,0))
e5.ad(v,e2,u)
break
case 1:$.S()
e2=B.I()
e2.sam(C.ub(e6,D.d_5,d9))
e5.aP(e3,e2)
for(e2=6.283185307179586*e7,u=e5.a,t=0;t<70;++t){s=w.$0()
r=w.$0()
q=e4.aq(3)
p=w.$0()
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=A.c.j(0.35+0.65*(0.5+0.5*Math.sin(e2*(1+q)+t))).gp(0)
n=o.G()
u.drawCircle(s*e0,r*e1,0.6+p*1.4,n)
n.delete()}m=A.k.F(e7*2,1)
e2=e0*(0.1+m*0.7)
u=e1*(0.1+m*0.3)
e5.bo(new B.t(e2,u),new B.t(e2-e0*0.12,u-e1*0.05),C.hqi(A.c.j(1-m),2))
u=e0*0.85
e2=e1*0.2
s=B.I()
s.r=G.MK.gp(0)
e5.ad(new B.t(u,e2),e1*0.09,s)
s=B.I()
s.r=D.Z2.gp(0)
e5.ad(new B.t(u+e1*0.03,e2-e1*0.01),e1*0.08,s)
break
case 2:e2=$.S()
u=B.I()
u.sam(C.ub(e6,D.d12,d9))
e5.aP(e3,u)
for(u=e5.a,t=0;t<40;++t){s=w.$0()
r=w.$0()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=A.c.j(0.5).gp(0)
n=q.G()
u.drawCircle(s*e0,r*e1*0.6,0.7,n)
n.delete()}for(s=e1*0.12,r=e0/24,q=x.v,l=0;l<4;++l){p=B.a([],q)
k=new B.aG(e2.r,A.ah,d9,d9,p)
for(e2=e1*(0.3+0.07*l),o=l*1.3,j=0;j<=e0;j+=r){i=e2+Math.sin(6.283185307179586*(j/e0*1.4+e7)+o)*e1*0.09
if(j===0){h=new B.aY(j,i)
p.push(h)
g=k.f
if(g!=null)h.by(g)
h=k.e
if(h!=null)h.a.delete()
k.e=null}else{h=new B.aq(j,i)
p.push(h)
g=k.f
if(g!=null)h.by(g)
h=k.e
if(h!=null)h.a.delete()
k.e=null}}e2=$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=D.d_2[l].j(0.5).gp(0)
p.b=A.ab
p.c=s
p.z=A.aGY
n=p.G()
p=k.e
u.drawPath((p==null?k.e=new B.cm(k.gbw().a.snapshot()):p).a,n)
n.delete()}break
case 3:e2=$.S()
u=B.I()
u.sam(C.ub(e6,D.dqr,D.dgg))
e5.aP(e3,u)
u=6.283185307179586*e7
f=new B.t(e0*0.5,e1*(0.64+0.01*Math.sin(u)))
s=e1*0.36
r=B.I()
r.sam(B.tp(f,s,B.a([D.bmN,A.L],x.O),d9,A.x,d9,d9,0))
e5.ad(f,s,r)
r=B.I()
r.r=D.bfI.gp(0)
e5.ad(f,e1*0.13,r)
for(s=e5.a,r=x.v,e=0;e<3;++e,e2=q){q=B.a([],r)
k=new B.aG(e2.r,A.ah,d9,d9,q)
q.push(new B.aY(0,e1))
for(e2=e1*(0.7+0.07*e),p=3+e,o=e*2,j=0;j<=e0;j+=8){h=new B.aq(j,e2+Math.sin(j/e0*p+o)*e1*0.04)
q.push(h)
g=k.f
if(g!=null)h.by(g)
h=k.e
if(h!=null)h.a.delete()
k.e=null}e2=new B.aq(e0,e1)
q.push(e2)
q=k.f
if(q!=null)e2.by(q)
e2=k.e
if(e2!=null)e2.a.delete()
k.e=null
e2=[D.bf3,D.be8,A.Fd][e]
q=$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=e2.gp(0)
n=p.G()
e2=k.e
s.drawPath((e2==null?k.e=new B.cm(k.gbw().a.snapshot()):e2).a,n)
n.delete()}for(q=[0.18,0.78],p=e1*0.78,o=-e0,h=o*0.005,g=-e1,d=p+g*0.2,g=p+g*0.21,a0=e0*0.2,a1=e1*0.06,a2=0;a2<2;++a2){a3=e0*q[a2]
a4=a3+h
a5=new B.ap(A.R,A.N,A.U,A.V,A.S)
a5.r=D.ahK.gp(0)
a5.c=3
a5.b=A.ab
a5.d=A.bE
n=a5.G()
s.drawLine.apply(s,[a3,p,a4,d,n])
n.delete()
a4=B.bL(new B.t(a4,g),a1,a0)
a3=new B.ap(A.R,A.N,A.U,A.V,A.S)
a3.r=D.ahK.gp(0)
n=a3.G()
s.drawOval(B.bH(a4),n)
n.delete()}for(q=o*0.05,u*=6,e2=e2.r,t=0;t<4;++t){v=A.k.F(e7+t*0.22,1)
p=q+v*e0*1.1
o=e1*(0.25+0.05*t)+Math.sin(6.283185307179586*v*3)*e1*0.02
h=Math.sin(u+t)
g=B.a([],r)
d=new B.aG(e2,A.ah,d9,d9,g)
h=o+h*e1*0.012
g.push(new B.aY(p-8,h))
a0=o-4
g.push(new B.c5(p-3,a0,p,o))
g.push(new B.c5(p+3,a0,p+8,h))
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=A.Fd.gp(0)
p.c=2
p.b=A.ab
p.d=A.bE
n=p.G()
p=d.gbw().a.snapshot()
s.drawPath((d.e=new B.cm(p)).a,n)
n.delete()}break
case 4:e2=$.S()
u=B.I()
u.sam(C.ub(e6,D.dla,D.d57))
e5.aP(e3,u)
u=B.I()
u.r=D.boN.gp(0)
e5.ad(new B.t(e0*0.75,e1*0.2),e1*0.1,u)
for(u=e5.a,s=x.v,e=0;e<5;++e,e2=r){r=B.a([],s)
k=new B.aG(e2.r,A.ah,d9,d9,r)
r.push(new B.aY(0,e1))
for(e2=(e&1)===0,q=e1*(0.46+0.1*e),p=1.5+e*0.4,j=0;j<=e0;j+=6){o=e2?1:-1
o=new B.aq(j,q+Math.sin(6.283185307179586*(j/e0*p+e7*o))*e1*0.025)
r.push(o)
h=k.f
if(h!=null)o.by(h)
o=k.e
if(o!=null)o.a.delete()
k.e=null}e2=new B.aq(e0,e1)
r.push(e2)
r=k.f
if(r!=null)e2.by(r)
e2=k.e
if(e2!=null)e2.a.delete()
k.e=null
e2=B.ar(A.cw,A.pT,e/5).j(0.85)
r=$.S()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=e2.gp(0)
n=q.G()
e2=k.e
u.drawPath((e2==null?k.e=new B.cm(k.gbw().a.snapshot()):e2).a,n)
n.delete()}break
case 5:$.S()
e2=B.I()
e2.sam(C.ub(e6,D.dcb,D.d0S))
e5.aP(e3,e2)
a6=e1*0.6
e2=e0/2
u=e1*0.26
s=B.I()
s.sam(B.jp(new B.t(0,a6-u),new B.t(0,a6),D.doS,d9,A.x,d9))
e5.ad(new B.t(e2,a6),u,s)
for(u=e0*0.2,s=a6-e1*0.2,r=e1*0.012,q=u+e0*0.6,p=e5.a,t=0;t<5;){o=s+t*e1*0.045;++t
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=D.Z5.gp(0)
n=h.G()
p.drawRect(B.bH(new B.a3(u,o,q,o+r*t*0.6)),n)
n.delete()}u=B.I()
u.r=D.Z5.gp(0)
e5.aP(new B.a3(0,a6,e0,e1),u)
a7=C.hqi(A.M9.j(0.85),1.4)
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
e2.r=D.boB.gp(0)
e5.aP(e3,e2)
a9=Math.max(12,e0/20)
for(e2=e0/a9,u=e7*12,s=a9*0.9,r=-a9,q=e1+a9*9,p=a9*2,b0=0;b0<e2;++b0){b1=1+A.o.F(b0,3)
b2=A.k.F(e7*b1+w.$0(),1)*q-p
for(o=b0*a9,h=b0*7,g=u*b1,l=0;l<10;++l){i=b2-l*a9
if(i<r||i>e1)continue
b3="01ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[A.o.F(h+l*3+A.k.bh(g),34)]
C.i_w(b3,s,l===0?D.bcb:A.be.j(1-l/9)).a3(e5,new B.t(o,i))}}break
case 7:$.S()
e2=B.I()
e2.sam(C.ub(e6,D.dbo,d9))
e5.aP(e3,e2)
for(e2=e1+30,u=e5.a,s=6.283185307179586*e7,t=0;t<60;++t){r=w.$0()
q=A.k.F(e7*(1+e4.aq(2))+w.$0(),1)
J.bm(u.save())
u.translate(r*e0+Math.sin(s+t)*8,q*e2-15)
u.rotate((s*(1+A.o.F(t,3))+t)*180/3.141592653589793,0,0)
q=B.bL(A.I,4,8)
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=D.d27[A.o.F(t,6)].gp(0)
n=r.G()
u.drawRect(B.bH(q),n)
n.delete()
u.restore()}break
case 8:$.S()
e2=B.I()
e2.sam(C.ub(e6,R.a3K,d9))
e5.aP(e3,e2)
for(e2=e5.a,u=e1*0.08,b4=0;b4<3;++b4){v=A.k.F(e7+b4/3,1)
b5=e0*(0.22+0.28*b4)
b6=e1*(0.3+0.1*A.o.F(b4,2))
if(v<0.22){s=e1*(1-v/0.22*(1-b6/e1))
$.S()
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.ad.gp(0)
r.c=2
r.b=A.ab
r.d=A.bE
n=r.G()
e2.drawLine.apply(e2,[b5,s,b5,s+u,n])
n.delete()}else{b7=(v-0.22)/0.78
s=1-b7
b8=1-Math.pow(s,3)
for(r=b7*b7*e1*0.1,q=2.6*s+0.4,t=0;t<28;++t){b9=6.283185307179586*t/28
p=Math.cos(b9)
o=Math.sin(b9)
h=D.d02[b4].j(s)
$.S()
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=h.gp(0)
n=g.G()
e2.drawCircle(b5+p*b8*e1*0.34,b6+o*b8*e1*0.34+r,q,n)
n.delete()}}}break
case 9:$.S()
e2=B.I()
e2.sam(C.ub(e6,D.cWn,d9))
e5.aP(e3,e2)
for(e2=6.283185307179586*e7,u=e5.a,t=0;t<30;++t){l=1+e4.aq(2)
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
r.b=A.ab
r.d=A.bE
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
e2.sam(C.ub(e6,D.cwT,d9))
e5.aP(e3,e2)
e2=B.I()
e2.r=G.MK.gp(0)
e5.ad(new B.t(e0*0.2,e1*0.2),e1*0.08,e2)
for(e2=e1+10,u=6.283185307179586*e7,s=e5.a,t=0;t<90;++t){l=1+e4.aq(3)
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
u.r=A.hX.gp(0)
e5.aP(e3,u)
c2=e0/12
c3=A.k.F(e7*c2*6,c2*6)
for(u=e5.a,t=-6;t<24;++t){j=t*c2+c3
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.r=D.cEp[A.o.F(A.o.F(t,6)+6,6)].gp(0)
n=s.G()
u.drawRect(B.bH(new B.a3(j,0,j+c2,e2)),n)
n.delete()}for(e2=c2*0.3,s=c2/2,r=x.v,i=0;i<e1;i+=c2)for(q=i/c2,b6=i+s,p=b6-e2,o=b6+e2,t=-6;t<24;++t)if(A.o.F(t+A.k.bh(q),3)===0){b5=t*c2+c3+s
h=$.S()
g=B.a([],r)
h=new B.aG(h.r,A.ah,d9,d9,g)
g.push(new B.aY(b5,p))
g.push(new B.aq(b5+e2,b6))
g.push(new B.aq(b5,o))
g.push(new B.aq(b5-e2,b6))
g.push(new B.bt())
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=A.c.j(0.75).gp(0)
n=g.G()
g=h.gbw().a.snapshot()
u.drawPath((h.e=new B.cm(g)).a,n)
n.delete()}$.S()
e2=B.I()
e2.sam(B.tp(e3.gbL(),e0*0.7,B.a([A.L,A.w.j(0.55)],x.O),B.a([0.4,1],x.n),A.x,d9,d9,0))
e5.aP(e3,e2)
break
case 12:$.S()
e2=B.I()
e2.sam(C.ub(e6,D.cWA,d9))
e5.aP(e3,e2)
for(e2=6.283185307179586*e7,u=e2*2,s=e5.a,t=0;t<18;++t){r=w.$0()*e0+Math.sin(e2+t)*18
q=w.$0()*e1+Math.cos(e2+t*1.7)*14
c1=e1*(0.05+w.$0()*0.1)*(1+0.15*Math.sin(u+t))
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
o=A.o.F(t,5)
p.r=D.axX[o].j(0.28).gp(0)
p.z=A.Iu
n=p.G()
s.drawCircle(r,q,c1,n)
n.delete()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=D.axX[o].j(0.35).gp(0)
p.c=1.2
p.b=A.ab
p.d=A.bE
n=p.G()
s.drawCircle(r,q,c1*0.9,n)
n.delete()}break
case 13:$.S()
e2=B.I()
e2.sam(C.ub(e6,D.d6Y,d9))
e5.aP(e3,e2)
c4=Math.max(0,1-Math.abs(e7-0.3)*14)
if(c4>0){e2=A.c.j(0.35*c4)
u=B.I()
u.r=e2.gp(0)
e5.aP(e3,u)}for(e2=e1+40,u=e5.a,t=0;t<70;++t){j=w.$0()*e0
i=A.k.F(e7*(2+e4.aq(2))+w.$0(),1)*e2-20
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.r=A.dt.j(0.6).gp(0)
s.c=1.3
s.b=A.ab
s.d=A.bE
n=s.G()
u.drawLine.apply(u,[j,i,j-6,i+18,n])
n.delete()}for(t=0;t<10;++t){e2=B.bL(new B.t(w.$0()*e0,A.k.F(e7+w.$0(),1)*e1),11,7)
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.r=A.c.j(0.18).gp(0)
n=s.G()
u.drawOval(B.bH(e2),n)
n.delete()}break
case 14:e2=$.S()
u=B.I()
u.sam(C.ub(e6,D.d11,d9))
e5.aP(e3,u)
for(u=e5.a,s=e0*0.035,r=x.v,q=e0*0.02,p=e0*0.08,o=e0*0.07,h=6.283185307179586*e7,g=h*3,d=h*2,e2=e2.r,t=0;t<7;++t){c5=e0*(t+0.5)/7
c6=e1*(0.28+0.1*Math.sin(d+t*2.1)+0.06*A.o.F(t,3))
a0=B.a([],r)
v=new B.aG(e2,A.ah,d9,d9,a0)
a0.push(new B.aY(c5-o,e1))
a0.push(new B.kZ(c5-p,e1-c6*0.5,c5+Math.sin(g+t)*6,e1-c6*0.8,c5,e1-c6))
a0.push(new B.kZ(c5+q,e1-c6*0.6,c5+p,e1-c6*0.4,c5+o,e1))
a0.push(new B.bt())
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a0.r=A.fr.j(0.85).gp(0)
n=a0.G()
a0=v.gbw().a.snapshot()
u.drawPath((v.e=new B.cm(a0)).a,n)
n.delete()
a0=B.a([],r)
a1=new B.aG(e2,A.ah,d9,d9,a0)
a0.push(new B.aY(c5-s,e1))
a0.push(new B.c5(c5,e1-c6*0.9,c5+s,e1))
a0.push(new B.bt())
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a0.r=A.dP.j(0.9).gp(0)
n=a0.G()
a0=a1.gbw().a.snapshot()
u.drawPath((a1.e=new B.cm(a0)).a,n)
n.delete()}for(t=0;t<40;++t){l=1+e4.aq(2)
c0=w.$0()
e2=w.$0()
s=A.k.F(e7*l+c0,1)
r=Math.sin(h*l+t)
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=G.ai1.j(0.9).gp(0)
n=q.G()
u.drawCircle(e2*e0+r*10,e1-s*e1*0.9,1.5,n)
n.delete()}break
case 15:e2=$.S()
u=B.I()
u.sam(C.ub(e6,D.cqX,d9))
e5.aP(e3,u)
u=B.I()
u.r=A.ig.gp(0)
e5.ad(new B.t(e0*0.7,e1*0.28),e1*0.12,u)
for(u=e5.a,s=e0+20,r=e0/12,q=6.283185307179586*e7,p=x.v,e=0;e<5;e2=o,e=c7){o=B.a([],p)
k=new B.aG(e2.r,A.ah,d9,d9,o)
o.push(new B.aY(0,e1))
c7=e+1
c0=Math.sin(q+e)*e0*0.02*c7
for(e2=e1*(0.45+0.1*e),h=4+e,g=e*1.7,j=-20;j<=s;j+=r){d=new B.aq(j,e2-Math.abs(Math.sin((j+c0)/e0*h+g))*e1*0.18)
o.push(d)
a0=k.f
if(a0!=null)d.by(a0)
d=k.e
if(d!=null)d.a.delete()
k.e=null}e2=new B.aq(s,e1)
o.push(e2)
o=k.f
if(o!=null)e2.by(o)
e2=k.e
if(e2!=null)e2.a.delete()
k.e=null
e2=D.d1l[e]
o=$.S()
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=e2.gp(0)
n=h.G()
e2=k.e
u.drawPath((e2==null?k.e=new B.cm(k.gbw().a.snapshot()):e2).a,n)
n.delete()}break
case 16:u=$.S()
s=B.I()
s.sam(C.ub(e6,D.dc5,d9))
e5.aP(e3,s)
c8=Math.sin(6.283185307179586*e7)*0.18
s=e5.a
J.bm(s.save())
r=e0/2
s.translate(r,0)
e5.ig(0,c8)
u=new B.aG(u.r,A.ah,d9,d9,B.a([],x.v))
q=-e0
u.D(new B.aY(q*0.03,0))
p=e0*0.03
u.D(new B.aq(p,0))
u.D(new B.aq(e0*0.34,e1))
u.D(new B.aq(q*0.34,e1))
u.D(new B.bt())
q=B.I()
o=x.O
q.sam(B.jp(A.I,new B.t(0,e1),B.a([A.c.j(0.5),A.c.j(0.04)],o),d9,A.x,d9))
e5.aG(u,q)
s.restore()
r=B.bL(new B.t(r+Math.sin(c8)*e1,e1*0.95),e1*0.14,e0*0.6)
q=A.c.j(0.22)
u=B.I()
u.r=q.gp(0)
e5.dO(r,u)
for(u=[-1,1],r=e0*0.18,q=0+e1*0.06,c9=e0*0.82,h=x.eH,a2=0;a2<2;++a2){g=u[a2]<0
d0=g?0:c9
for(t=0;t<6;++t){d=d0+t*e0*0.03
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1=B.a([A.ek,A.e7,A.ek],o)
a1=new B.SI(new B.t(0,0),new B.t(p,0),a1,W.zj,A.x,d9)
a3=B.SJ(a1,a1.L4(),a1.gL9(),h)
a1.a!==$&&B.aQ()
a1.a=a3
a0.sam(a1)
n=a0.G()
s.drawRect(B.bH(new B.a3(d,0,d+p,e2)),n)
n.delete()}g=g?0:c9
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.r=A.jM.gp(0)
n=d.G()
s.drawRect(B.bH(new B.a3(g,0,g+r,q)),n)
n.delete()}break
case 17:e2=$.S()
u=B.I()
u.sam(B.tp(e3.gbL(),e0*0.7,D.d2z,W.zj,A.x,d9,d9,0))
e5.aP(e3,u)
u=e5.a
J.bm(u.save())
u.translate(e0/2,e1/2)
e5.ig(0,e7*6.283185307179586/8)
for(s=x.v,e2=e2.r,t=0;t<16;t+=2){d1=6.283185307179586*t/16
d2=6.283185307179586*(t+1)/16
r=B.a([],s)
q=new B.aG(e2,A.ah,d9,d9,r)
r.push(new B.aY(0,0))
r.push(new B.aq(Math.cos(d1)*e0,Math.sin(d1)*e0))
r.push(new B.aq(Math.cos(d2)*e0,Math.sin(d2)*e0))
r.push(new B.bt())
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.c.j(0.22).gp(0)
n=r.G()
r=q.gbw().a.snapshot()
u.drawPath((q.e=new B.cm(r)).a,n)
n.delete()}u.restore()
break
case 18:$.S()
e2=B.I()
e2.sam(C.ub(e6,D.dj2,d9))
e5.aP(e3,e2)
for(e2=6.283185307179586*e7,u=e2*2,s=e5.a,t=0;t<7;++t){r=w.$0()
q=Math.sin(e2+t*1.1)
p=w.$0()
o=Math.sin(u+t)
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=D.dio[A.o.F(t,4)].j(0.7).gp(0)
h.z=A.Db
n=h.G()
s.drawCircle(e0*(0.1+0.8*r)+o*10,e1*(0.5+0.38*q),e1*(0.1+0.08*p),n)
n.delete()}break
case 19:$.S()
e2=B.I()
e2.sam(C.ub(e6,D.d8h,D.azH))
e5.aP(e3,e2)
for(e2=e5.a,t=0;t<40;++t){u=w.$0()
s=w.$0()
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.c.j(0.6).gp(0)
n=r.G()
e2.drawCircle(u*e0,s*e1*0.45,0.7,n)
n.delete()}u=B.I()
u.r=G.MK.gp(0)
e5.ad(new B.t(e0*0.8,e1*0.2),e1*0.07,u)
j=-e0*0.02
for(u=e1-8,s=e7*6,d3=0;j<e0;){d4=e0*(0.07+w.$0()*0.07)
d5=e1*(0.25+w.$0()*0.4)
r=e1-d5
q=j+d4
$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=D.bgJ.gp(0)
n=p.G()
e2.drawRect(B.bH(new B.a3(j,r,q,r+d5)),n)
n.delete()
for(d6=r+6,d7=j+4,r=q-6,q=d3*31;d6<u;d6+=11)for(p=d6*7,o=d6+6,d8=d7;d8<r;d8+=9)if(A.o.F(q+A.k.V(p)+A.k.V(d8*3)+A.k.bh(s),5)!==0){h=D.bjO.j(0.85)
$.S()
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=h.gp(0)
n=g.G()
e2.drawRect(B.bH(new B.a3(d8,d6,d8+4,o)),n)
n.delete()}j+=d4+2;++d3}break}},
hXM(d){if(d<0.36363636363636365)return 7.5625*d*d
if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
i6R(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o=new C.fgx(),n=f<=1,m=n?0:e/(f-1),l=n?0:e/(f-1)
n=g/0.5
w=A.k.E((n-l*0.45)/0.55,0,1)
v=g<0.86?1:A.k.E((1-g)/0.14,0,1)
u=new B.e9()
u.d4(e*53+11)
switch(d){case"type":o.f=A.k.bh(g/0.55*f)>e?v:0
break
case"bounce":o.b=-Math.abs(Math.sin(A.k.F(g*2-m*0.5,1)*3.141592653589793))*h*0.5
break
case"wave":o.b=Math.sin(6.283185307179586*g-m*3)*h*0.28
break
case"neon":o.x=o.f=Math.sin(6.283185307179586*g*13+e*7)>0.92?0.25:1
break
case"glitch":t=A.o.F(A.k.bh(g*12),6)===0
o.a=t?Math.sin(e*12.9898+g*100)*h*0.14:0
if(t)o.w=(e&1)===0?A.b9:A.c2
break
case"zoom":o.c=o.d=A.lt.av(0,w)
o.f=w*v
break
case"rainbow":o.w=new L.uG(1,A.k.F(g*360+e*40,360),0.75,1).lI()
break
case"drop":o.b=-(1-C.hXM(w))*h*4
o.f=A.k.E(w*6,0,1)*v
break
case"fly":o.a=-(1-A.eu.av(0,w))*i*0.8
o.f=A.k.E(w*4,0,1)*v
break
case"spin":o.e=(1-w)*6.283185307179586
o.c=o.d=w
o.f=v
break
case"flip":o.c=Math.cos(3.141592653589793*(1-A.dV.av(0,w)))
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
case"blur":o.c=o.d=2.4-1.4*A.dV.av(0,w)
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
case"rise":o.b=(1-A.cu.av(0,w))*h*2
o.f=w*v
break
case"scatter":n=1-A.dx.av(0,w)
o.a=n*(u.ah()-0.5)*i
o.b=n*(u.ah()-0.5)*h*6
o.e=n*(u.ah()-0.5)*6
o.f=v
break}return o},
Db(d,e,f,g){var w=null,v=B.fv(w,w,w,w,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,g==null?f:w,w,w,w,w,w,w,w,w,e,w,w,A.u,g,1,!0,w,w,w,w,w,w,w,w),d),A.a3,A.bZ,w,A.dA,A.bW)
v.el()
return v},
i2w(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=A.k.E(a0,0,1)
if(i<=0.01)return
w=C.Db(e,f,j,j)
v=w.b
u=-v.c/2
v=v.a.c
v=-v.gbb(v)/2
t=new B.t(u,v)
s=w.b
r=s.c
s=s.a.c
q=new B.a3(u,v,u+r,v+s.gbb(s))
p=new C.fri(i)
o=new C.frj(e,f,d,t)
switch(g){case"outline":o.$2(p.$1(h),f*0.07)
break
case"three":s=B.ar(h,A.w,0.55)
s.toString
for(n=9;n>=1;--n){r=B.ar(h,s,n/9)
r.toString
m=n*f
C.Db(e,f,p.$1(r),j).a3(d,new B.t(u+m*0.012,v+m*0.014))}C.Db(e,f,p.$1(h),j).a3(d,t)
break
case"neon":o.$3$blur(p.$2(h,0.9*(0.6+0.4*a1)),f*0.16,new B.hg(A.G,f*0.2))
o.$2(p.$2(h,0.9),f*0.07)
o.$2(p.$2(A.c,0.95),f*0.025)
break
case"gradient":$.S()
l=B.I()
v=q.gaJh()
u=q.gaDI()
s=B.ar(h,A.c,0.45)
s.toString
s=p.$1(s)
r=p.$1(h)
m=B.ar(h,A.aD,0.6)
m.toString
l.sam(B.jp(v,u,B.a([s,r,p.$1(m)],x.O),W.zj,A.x,j))
C.Db(e,f,j,l).a3(d,t)
break
case"sticker":C.Db(e,f,p.$2(A.w,0.3),j).a3(d,t.a9(0,new B.t(f*0.04,f*0.06)))
o.$2(p.$1(A.c),f*0.2)
o.$4$blur$shift(p.$1(A.av),f*0.24,j,A.I)
o.$2(p.$1(A.c),f*0.17)
C.Db(e,f,p.$1(h),j).a3(d,t)
break
case"retro":s=L.aWo(h)
k=new L.uG(s.a,A.k.F(L.aWo(h).b+150,360),s.c,s.d).lI()
for(n=5;n>=1;--n){s=n*f*0.014
C.Db(e,f,p.$1(k),j).a3(d,new B.t(u+s,v+s))}o.$2(p.$1(A.av),f*0.05)
C.Db(e,f,p.$1(h),j).a3(d,t)
break
case"gold":$.S()
l=B.I()
l.sam(B.jp(q.gaJh(),q.gaDI(),B.a([p.$1(Ah.FE),p.$1(A.cJ),p.$1(A.d1),p.$1(P.xD),p.$1(A.ik)],x.O),D.dto,A.x,j))
o.$2(p.$1(A.rf),f*0.06)
C.Db(e,f,j,l).a3(d,t)
break
default:C.Db(e,f,p.$1(h),j).a3(d,t)}},
hwU(a6,a7,a8,a9,b0,b1,b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a6.a
J.bm(a5.save())
w=a7.a
v=a7.b
a5.clipRect(B.bH(new B.a3(0,0,0+w,0+v)),$.ms()[1],!0)
C.ihR(a6,a7,a8,a9)
u=w<v?0.9:1
t=b1*w/360*u
u=A.a.i(b4)
if(u.length===0)s=B.a(["\u2026"],x.s)
else{u=new B.mk(u)
s=B.C(u,B.a7(u).k("L.E"))}u=B.a([],x.n)
for(r=s.length,q=0;q<s.length;s.length===r||(0,B.M)(s),++q){p=s[q]
o=p===" "
n=C.Db(o?"n":p,t,a4,a4).b.c
u.push(n*(o?0.7:1))}m=w*0.86
r=x.t
l=B.a([B.a([],r)],x.E)
for(o=x.S,k=0,j=0,i=0;i<s.length;++i){if(s[i]===" "){A.d.gak(l).push(i)
k+=u[i]
j=A.d.gak(l).length
continue}if(k+u[i]>m&&A.d.gak(l).length!==0){h=j>0&&j<A.d.gak(l).length?A.d.fK(A.d.gak(l),j):B.a([],r)
if(h.length!==0){n=A.d.gak(l)
g=A.d.gak(l).length
n.$flags&1&&B.aj(n,18)
B.kD(j,g,n.length,a4,a4)
n.splice(j,g-j)}n=B.C(h,o)
l.push(n)
k=A.d.cH(h,0,new C.fPh(u))
j=0}A.d.gak(l).push(i)
k+=u[i]}f=t*1.15
e=v/2-l.length*f/2+f/2
for(v=w/2,d=0;d<l.length;++d){a0=l[d]
a1=v-A.d.cH(a0,0,new C.fPi(u))/2
for(r=a0.length,o=e+d*f,q=0;q<a0.length;a0.length===r||(0,B.M)(a0),++q,a1=a2){i=a0[q]
n=u[i]
a2=a1+n
if(s[i]===" ")continue
a3=C.i6R(b2,i,s.length,a8,t,w,b0)
J.bm(a5.save())
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
C.i2w(a6,n,t,b3,g,a3.f,a3.x)
a5.restore()}}a5.restore()},
aRd(d,e,f,g,h,i,j,a0){var w=0,v=B.j(x.gc),u,t,s,r,q,p,o,n,m,l,k
var $async$aRd=B.e(function(a1,a2){if(a1===1)return B.f(a2,v)
for(;;)switch(w){case 0:n=d>=1
m=A.k.V(n?480:480*d)
l=A.k.V(n?480/d:480)
k=new C.bTt(0,0,12,D.ajd)
n=x.H,t=0
case 3:if(!(t<48)){w=5
break}$.S()
s=new B.p0()
C.hwU(s.a3O(A.v6),new B.av(m,l),t/48,e,f,g,h,j,a0)
r=s.nf()
w=6
return B.b(r.x9(m,l),$async$aRd)
case 6:q=a2
w=7
return B.b(q.ht(A.a2P),$async$aRd)
case 7:p=a2
q.q()
r.q()
if(p==null){w=4
break}o=new B.Ej(null,null,null,null,0,A.e0,0,0)
o.bzy(null,A.dJ.gaR(p),0,null,A.c8,0,0,A.e0,l,null,0,4,A.Lw,null,A.c8,null,null,m,!1)
k.cH8(o,7)
i.$1((t+1)/48)
w=8
return B.b(B.bQ(A.bF,null,n),$async$aRd)
case 8:case 4:++t
w=3
break
case 5:n=k.aFM(0)
if(n==null)n=new Uint8Array(0)
u=n
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aRd,v)},
flu:function flu(d,e,f){this.a=d
this.b=e
this.c=f},
fPg:function fPg(d){this.a=d},
fgx:function fgx(){var _=this
_.b=_.a=0
_.d=_.c=1
_.e=0
_.f=1
_.r=0
_.w=null
_.x=0},
fri:function fri(d){this.a=d},
frj:function frj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b8W:function b8W(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
fPh:function fPh(d){this.a=d},
fPi:function fPi(d){this.a=d},
WQ:function WQ(d){this.a=d},
asw:function asw(d,e,f){var _=this
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
_.aa$=f
_.c=_.a=null},
ckp:function ckp(d,e){this.a=d
this.b=e},
ckk:function ckk(d){this.a=d},
ckl:function ckl(d){this.a=d},
ckj:function ckj(d,e){this.a=d
this.b=e},
ckm:function ckm(d,e){this.a=d
this.b=e},
ckn:function ckn(d){this.a=d},
cko:function cko(d){this.a=d},
ck9:function ck9(d){this.a=d},
cka:function cka(d){this.a=d},
ck8:function ck8(){},
ckb:function ckb(d,e){this.a=d
this.b=e},
ckc:function ckc(d,e){this.a=d
this.b=e},
ck7:function ck7(d,e){this.a=d
this.b=e},
ckd:function ckd(d,e){this.a=d
this.b=e},
ck6:function ck6(d,e){this.a=d
this.b=e},
cke:function cke(d,e){this.a=d
this.b=e},
ck5:function ck5(d,e){this.a=d
this.b=e},
ckf:function ckf(d,e){this.a=d
this.b=e},
ck4:function ck4(d,e){this.a=d
this.b=e},
ckg:function ckg(d){this.a=d},
ck3:function ck3(d){this.a=d},
ckh:function ckh(d){this.a=d},
cki:function cki(d){this.a=d},
ck2:function ck2(d,e){this.a=d
this.b=e},
aFx:function aFx(){},
b95(){var w=0,v=B.j(x.D),u,t=2,s=[],r,q,p
var $async$b95=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
r=$.h3U
w=7
return B.b(r==null?$.h3U=C.cB_():r,$async$b95)
case 7:r=e
u=r
w=1
break
t=2
w=6
break
case 4:t=3
p=s.pop()
$.h3U=null
throw p
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$b95,v)},
cB_(){var w=0,v=B.j(x.D),u,t
var $async$cB_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=C
w=3
return B.b($.r6().C9("assets/data/world110.json",!1),$async$cB_)
case 3:u=t.hTj(e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cB_,v)},
hTj(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.X.aM(0,a2,null)),a1=B.a([],x.R)
for(w=J.aW(a0),v=x.n,u=x.b,t=x.h,s=x.gO;w.C();){r=t.a(w.gT(w))
q=B.a([],s)
for(p=J.a5(r),o=J.aW(d.a(p.h(r,"r")));o.C();){n=o.gT(o)
m=B.a([],u)
for(l=J.aW(d.a(n));l.C();){k=l.gT(l)
j=J.a5(k)
m.push(B.a([B.e0(j.h(k,0)),B.e0(j.h(k,1))],v))}q.push(m)}o=B.cP(p.h(r,"n"))
m=B.cP(p.h(r,"a"))
l=B.cP(p.h(r,"ct"))
j=B.cP(p.h(r,"sr"))
i=B.e0(p.h(r,"pop"))
h=B.e0(p.h(r,"gdp"))
g=B.cP(p.h(r,"inc"))
f=B.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=B.aRx(g,f,"",0)
f=B.e0(J.r(p.h(r,"c"),0))
p=B.e0(J.r(p.h(r,"c"),1))
e=new C.aby(o,m,l,j,i,h,g,f,p,q)
e.bA5(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new C.abz(a1)},
fAW(d){if(d>=1e12)return A.k.ac(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.ac(d/1e9,2)+" billion"
if(d>=1e6)return A.k.ac(d/1e6,1)+" million"
if(d>=1000)return A.k.ac(d/1000,1)+" thousand"
return A.k.ac(d,0)},
Hf(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.F(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
aby:function aby(d,e,f,g,h,i,j,k,l,m){var _=this
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
abz:function abz(d){this.a=d},
vi:function vi(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
PE:function PE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yl:function yl(d,e,f){this.a=d
this.b=e
this.c=f},
PD:function PD(d){this.a=0
this.b=d
this.c=0},
hVc(d,e,f){return $.hVd.c4(0,d+"|"+B.w(e)+"|"+f.l(),new C.djJ(d,e,f))},
VR:function VR(d){this.a=d},
aEt:function aEt(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.iL$=j
_.oH$=k
_.nj$=l
_.iM$=m
_.bz$=n
_.aa$=o
_.c=_.a=null},
e1h:function e1h(d){this.a=d},
e1i:function e1i(d){this.a=d},
e1g:function e1g(d,e){this.a=d
this.b=e},
e1j:function e1j(d){this.a=d},
e1f:function e1f(d){this.a=d},
e1k:function e1k(d){this.a=d},
e1d:function e1d(d){this.a=d},
e1e:function e1e(d,e,f){this.a=d
this.b=e
this.c=f},
e1c:function e1c(d){this.a=d},
e1b:function e1b(){},
e1a:function e1a(d){this.a=d},
e1D:function e1D(d,e){this.a=d
this.b=e},
e1E:function e1E(d,e){this.a=d
this.b=e},
e1s:function e1s(d){this.a=d},
e1t:function e1t(d){this.a=d},
e1r:function e1r(d){this.a=d},
e1u:function e1u(d){this.a=d},
e1l:function e1l(d,e){this.a=d
this.b=e},
e1m:function e1m(d){this.a=d},
e1F:function e1F(d,e){this.a=d
this.b=e},
e1q:function e1q(d,e){this.a=d
this.b=e},
e1J:function e1J(d){this.a=d},
e1C:function e1C(d){this.a=d},
e1K:function e1K(d,e){this.a=d
this.b=e},
e1B:function e1B(d,e){this.a=d
this.b=e},
e1L:function e1L(d){this.a=d},
e1A:function e1A(d,e){this.a=d
this.b=e},
e1M:function e1M(d){this.a=d},
e1z:function e1z(d,e){this.a=d
this.b=e},
e1N:function e1N(d){this.a=d},
e1y:function e1y(d,e){this.a=d
this.b=e},
e1O:function e1O(d){this.a=d},
e1x:function e1x(d,e){this.a=d
this.b=e},
e1P:function e1P(d){this.a=d},
e1w:function e1w(d){this.a=d},
e1Q:function e1Q(d){this.a=d},
e1v:function e1v(d){this.a=d},
e1G:function e1G(d){this.a=d},
e1p:function e1p(d){this.a=d},
e1H:function e1H(d){this.a=d},
e1o:function e1o(d){this.a=d},
e1I:function e1I(d){this.a=d},
e1n:function e1n(d){this.a=d},
e19:function e19(){},
e18:function e18(d){this.a=d},
e17:function e17(d){this.a=d},
bgR:function bgR(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
djJ:function djJ(d,e,f){this.a=d
this.b=e
this.c=f},
djK:function djK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aML:function aML(){},
aMM:function aMM(){},
afB(d,e,f,g,h){return new C.bvo(d,e,f,g,h)},
bvo:function bvo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fmY:function fmY(){},
fmZ:function fmZ(){},
fn_:function fn_(){},
fn0:function fn0(){},
fn1:function fn1(){},
fn2:function fn2(){},
fn3:function fn3(){},
WS:function WS(d){this.a=d},
bm6:function bm6(){this.d=$
this.c=this.a=null},
eKd:function eKd(){},
eKe:function eKe(){},
eKa:function eKa(d){this.a=d},
eKb:function eKb(d){this.a=d},
eK9:function eK9(d){this.a=d},
eKc:function eKc(){},
eK8:function eK8(d,e){this.a=d
this.b=e},
eK7:function eK7(d){this.a=d},
hVE(){var w,v,u=x.n,t=B.a([],u)
for(w=0;w<260;++w){v=new B.e9()
v.d4(w)
t.push(v.ah()*3.141592653589793*2)}u=B.a([],u)
for(w=0;w<260;++w){v=new B.e9()
v.d4(w+900)
u.push(2.2+v.ah())}return new C.blU(new B.cB(null,x.z),new C.PD(A.cR),A.I,A.ax,t,u,$,A.bF,0,B.a([],x.X),null,null)},
hVG(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hVF(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hns(d,e,f){return $.hWg.c4(0,d+"|"+B.w(e)+"|"+f.l(),new C.f4O(d,e,f))},
WE:function WE(d){this.a=d},
blU:function blU(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.iL$=j
_.oH$=k
_.nj$=l
_.iM$=m
_.bz$=n
_.aa$=o
_.c=_.a=null},
eCT:function eCT(d,e){this.a=d
this.b=e},
eD3:function eD3(d,e){this.a=d
this.b=e},
eD4:function eD4(d,e){this.a=d
this.b=e},
eD0:function eD0(d){this.a=d},
eD1:function eD1(d){this.a=d},
eD2:function eD2(d){this.a=d},
eD5:function eD5(d){this.a=d},
eD_:function eD_(d){this.a=d},
eD6:function eD6(d,e){this.a=d
this.b=e},
eD7:function eD7(d){this.a=d},
eCZ:function eCZ(d,e){this.a=d
this.b=e},
eD8:function eD8(d){this.a=d},
eCY:function eCY(d,e){this.a=d
this.b=e},
eD9:function eD9(d){this.a=d},
eCX:function eCX(d){this.a=d},
eDa:function eDa(d){this.a=d},
eCW:function eCW(d){this.a=d},
eDb:function eDb(d){this.a=d},
eCV:function eCV(d){this.a=d},
eDc:function eDc(d){this.a=d},
eCU:function eCU(d){this.a=d},
eCS:function eCS(){},
eCR:function eCR(){},
eCQ:function eCQ(d){this.a=d},
eCP:function eCP(d){this.a=d},
btr:function btr(d,e){this.b=d
this.a=e},
f4O:function f4O(d,e,f){this.a=d
this.b=e
this.c=f},
f4P:function f4P(){},
f4Q:function f4Q(){},
VS:function VS(d){this.a=d},
aEu:function aEu(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.iL$=k
_.oH$=l
_.nj$=m
_.iM$=n
_.bz$=o
_.aa$=p
_.c=_.a=null},
e1U:function e1U(){},
e2m:function e2m(){},
e28:function e28(d,e){this.a=d
this.b=e},
e2_:function e2_(d,e){this.a=d
this.b=e},
e29:function e29(d){this.a=d},
e1Z:function e1Z(d){this.a=d},
e2a:function e2a(d){this.a=d},
e27:function e27(d){this.a=d},
e2e:function e2e(d){this.a=d},
e26:function e26(d){this.a=d},
e2f:function e2f(d){this.a=d},
e25:function e25(d,e){this.a=d
this.b=e},
e2g:function e2g(d){this.a=d},
e2h:function e2h(d){this.a=d},
e24:function e24(d,e){this.a=d
this.b=e},
e2i:function e2i(d){this.a=d},
e23:function e23(d,e){this.a=d
this.b=e},
e2j:function e2j(d){this.a=d},
e22:function e22(d,e){this.a=d
this.b=e},
e2k:function e2k(d){this.a=d},
e21:function e21(d,e){this.a=d
this.b=e},
e2l:function e2l(d){this.a=d},
e20:function e20(d){this.a=d},
e2b:function e2b(d){this.a=d},
e1Y:function e1Y(d){this.a=d},
e2c:function e2c(d){this.a=d},
e1X:function e1X(d){this.a=d},
e2d:function e2d(d){this.a=d},
e1W:function e1W(d){this.a=d},
e1T:function e1T(d){this.a=d},
e1S:function e1S(){},
e1V:function e1V(d,e){this.a=d
this.b=e},
e1R:function e1R(d){this.a=d},
bc0:function bc0(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
Ww:function Ww(d){this.a=d},
blR:function blR(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.iL$=e
_.oH$=f
_.nj$=g
_.iM$=h
_.bz$=i
_.aa$=j
_.c=_.a=null},
evN:function evN(d,e){this.a=d
this.b=e},
evO:function evO(d,e){this.a=d
this.b=e},
evM:function evM(d,e){this.a=d
this.b=e},
evP:function evP(d,e){this.a=d
this.b=e},
evL:function evL(d,e){this.a=d
this.b=e},
bt_:function bt_(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f2Y:function f2Y(d){this.a=d},
aMN:function aMN(){},
byF:function byF(){},
aNg:function aNg(){},
byO:function byO(){},
aNj:function aNj(){},
byQ:function byQ(){},
hVC(){var w,v,u,t=B.a([],x.d9),s=B.a([],x.g)
for(w=0;w<150;++w){v=new B.e9()
v.d4(w)
v=v.ah()
u=new B.e9()
u.d4(w+500)
s.push(new B.t(v,u.ah()))}return new C.bkB(new B.cB(null,x.z),new C.PD(A.cR),t,A.ax,s,$,A.bF,0,B.a([],x.X),null,null)},
Q9:function Q9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
UW:function UW(d){this.a=d},
bkB:function bkB(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.iL$=i
_.oH$=j
_.nj$=k
_.iM$=l
_.bz$=m
_.aa$=n
_.c=_.a=null},
dL3:function dL3(){},
dKS:function dKS(){},
dKT:function dKT(d,e){this.a=d
this.b=e},
dKU:function dKU(d,e){this.a=d
this.b=e},
dKR:function dKR(d){this.a=d},
dKQ:function dKQ(d){this.a=d},
dKW:function dKW(d){this.a=d},
dKP:function dKP(d,e){this.a=d
this.b=e},
dKX:function dKX(d){this.a=d},
dKO:function dKO(d){this.a=d},
dKY:function dKY(d){this.a=d},
dKN:function dKN(d){this.a=d},
dKZ:function dKZ(d){this.a=d},
dKM:function dKM(d){this.a=d},
dL_:function dL_(d){this.a=d},
dKL:function dKL(d){this.a=d},
dL0:function dL0(d){this.a=d},
dKK:function dKK(d){this.a=d},
dL1:function dL1(d){this.a=d},
dKJ:function dKJ(d){this.a=d},
dL2:function dL2(d){this.a=d},
dKI:function dKI(d){this.a=d},
dKV:function dKV(d){this.a=d},
dKH:function dKH(d){this.a=d},
bbn:function bbn(d,e){this.b=d
this.a=e},
aff:function aff(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VP:function VP(d){this.a=d},
bl1:function bl1(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.iL$=p
_.oH$=q
_.nj$=r
_.iM$=s
_.bz$=t
_.aa$=u
_.c=_.a=null},
e0A:function e0A(d){this.a=d},
e0q:function e0q(d,e){this.a=d
this.b=e},
e0r:function e0r(d,e){this.a=d
this.b=e},
e0p:function e0p(d,e){this.a=d
this.b=e},
e0s:function e0s(d){this.a=d},
e0o:function e0o(d){this.a=d},
e0t:function e0t(d){this.a=d},
e0n:function e0n(d,e){this.a=d
this.b=e},
e0u:function e0u(d){this.a=d},
e0m:function e0m(d,e){this.a=d
this.b=e},
e0v:function e0v(d){this.a=d},
e0l:function e0l(d,e){this.a=d
this.b=e},
e0w:function e0w(d){this.a=d},
e0k:function e0k(d,e){this.a=d
this.b=e},
e0x:function e0x(d){this.a=d},
e0j:function e0j(d){this.a=d},
e0y:function e0y(d){this.a=d},
e0i:function e0i(d){this.a=d},
e0z:function e0z(d){this.a=d},
e0h:function e0h(d){this.a=d},
bgI:function bgI(d,e){this.b=d
this.a=e},
dgT:function dgT(d){this.a=d},
Ws:function Ws(d){this.a=d},
blQ:function blQ(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.iL$=f
_.oH$=g
_.nj$=h
_.iM$=i
_.bz$=j
_.aa$=k
_.c=_.a=null},
ev1:function ev1(d,e){this.a=d
this.b=e},
ev2:function ev2(d){this.a=d},
ev0:function ev0(d){this.a=d},
ev3:function ev3(d){this.a=d},
ev_:function ev_(d){this.a=d},
ev4:function ev4(d){this.a=d},
euZ:function euZ(d){this.a=d},
ev5:function ev5(d){this.a=d},
euY:function euY(d){this.a=d},
ev6:function ev6(d){this.a=d},
euX:function euX(d,e){this.a=d
this.b=e},
ev7:function ev7(d){this.a=d},
euW:function euW(d,e){this.a=d
this.b=e},
ev8:function ev8(d){this.a=d},
euV:function euV(d,e){this.a=d
this.b=e},
ev9:function ev9(d){this.a=d},
euU:function euU(d,e){this.a=d
this.b=e},
bse:function bse(d,e){this.b=d
this.a=e},
aMm:function aMm(){},
byy:function byy(){},
aMJ:function aMJ(){},
byE:function byE(){},
aNf:function aNf(){},
byN:function byN(){},
fMB(d,e,f){return C.if1(d,e,f)},
if1(d,e,f){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$fMB=B.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
r=B.hL([d],f)
o=(self.URL||self.webkitURL).createObjectURL(r)
o.toString
q=o
n=B.mS(q)
n.download=e
o=n.style
o.display="none"
p=n
o=document.body
if(o!=null)o.appendChild(p).toString
J.Hj(p)
w=7
return B.b(B.bQ(A.iU,null,x.H),$async$fMB)
case 7:J.lB(p);(self.URL||self.webkitURL).revokeObjectURL(q)
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
return B.i($async$fMB,v)},
i8C(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.U(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.F)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.M)(w),++q){p=w[q]
u.push(B.G(["k",p.b,"x",B.o9(A.k.ac(p.c,4)),"y",B.o9(A.k.ac(p.d,4)),"v",p.e,"l",B.o9(A.k.ac(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.o9(A.k.ac(p.as,3)),"ch",p.at,"vc",B.o9(A.k.ac(p.z,3)),"s",B.o9(A.k.ac(p.ch,2))],s,r))}w=B.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.M)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a7(f).k("cs.E"))
A.d.fd(l)
return A.X.ap(B.G(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
iic(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.X.aM(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a7(h)
A.d.a7(a6.b)
v=B.a([],x.fs)
g=x.bM
f=g.a(J.r(w,"parts"))
f=J.aW(f==null?A.co:f)
while(f.C()){u=f.gT(f)
t=i.a(u)
e=B.aS(J.r(t,"k"))
s=e==null?"":e
if(!$.qs().aj(0,s)){J.cc(v,null)
continue}d=s
a0=B.aK(J.r(t,"x"))
if(a0==null)a0=0.5
a1=B.aK(J.r(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.tH(a2,d,a0,a1)
a3.aqU(a2,d,a0,a1)
h.push(a3)
r=a3
a1=B.aK(J.r(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=B.aK(J.r(t,"l"))
if(d==null)d=r.f
r.f=d
d=B.aK(J.r(t,"o"))
if(d==null)d=r.r
r.r=d
d=B.jT(J.r(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.jT(J.r(t,"b"))
r.x=d===!0
d=B.aS(J.r(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aK(J.r(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aK(J.r(t,"ch"))
r.at=A.k.N(d==null?0:d)
d=B.aK(J.r(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aK(J.r(t,"s"))
r.ch=A.k.E(d==null?1:d,1,2.6)
J.cc(v,r)}i=g.a(J.r(w,"wires"))
i=J.aW(i==null?A.co:i)
h=x.j
while(i.C()){q=i.gT(i)
p=h.a(q)
f=B.aK(J.r(p,0))
o=f==null?a5:A.k.N(f)
f=B.aK(J.r(p,2))
n=f==null?a5:A.k.N(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.r(v,o)
l=J.r(v,n)
if(m!=null&&l!=null)a6.alb(m,A.k.N(B.e0(J.r(p,1))),l,A.k.N(B.e0(J.r(p,3))))}i=B.aK(J.r(w,"challenge"))
i=A.k.N(i==null?0:i)
k=B.aX(x.S)
h=g.a(J.r(w,"done"))
h=J.aW(h==null?A.co:h)
while(h.C()){j=h.gT(h)
J.cc(k,A.k.N(B.e0(j)))}return new B.bpQ(i,k)}catch(a4){return a5}},
fCV(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fCV=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.az(),$async$fCV)
case 7:r=o.aS(n.r(e.a,"ngmy_electronics_lab_v1"))
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
return B.i($async$fCV,v)},
bFd(d){return C.ijN(d)},
ijN(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bFd=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.az(),$async$bFd)
case 7:w=6
return B.b(f.au("String","ngmy_electronics_lab_v1",d),$async$bFd)
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
return B.i($async$bFd,v)}},D,G,L,T,Aj,A_,A5,Ak,U
J=c[1]
B=c[0]
A=c[2]
A0=c[150]
A6=c[148]
A1=c[139]
A2=c[137]
H=c[131]
V=c[127]
A7=c[141]
W=c[151]
P=c[104]
A3=c[113]
I=c[133]
A8=c[140]
A4=c[144]
A9=c[72]
X=c[81]
Aa=c[84]
O=c[121]
Ab=c[125]
Ac=c[123]
Y=c[129]
Q=c[132]
Z=c[145]
Ad=c[143]
N=c[142]
Ae=c[99]
Af=c[146]
R=c[122]
Ag=c[147]
Ah=c[128]
M=c[135]
S=c[100]
Ai=c[25]
E=c[27]
F=c[97]
K=c[95]
C=a.updateHolder(c[18],C)
D=c[3]
G=c[130]
L=c[44]
T=c[136]
Aj=c[149]
A_=c[107]
A5=c[138]
Ak=c[134]
U=c[101]
C.aUZ.prototype={
a5(){return"DitherKernel."+this.b}}
C.bTt.prototype={
cH8(d,e){var w,v,u,t=this
if(t.fx==null){t.fx=B.wh(!1,8192)
if(!d.gq_()){w=B.h0q(d,256,t.e)
t.y=w
t.w=C.htb(d,t.f,w,!1)}else t.w=d
t.x=e
t.z=d.gcn(0)
t.Q=d.gbb(0)
return}if(t.as===0){w=t.z
w===$&&B.c()
v=t.Q
v===$&&B.c()
t.baX(w,v)
t.baQ()}w=t.w
w.toString
t.baW(w)
w=t.w
w.toString
v=t.z
v===$&&B.c()
u=t.Q
u===$&&B.c()
t.aV4(w,v,u);++t.as
if(!d.gq_()){w=B.h0q(d,256,t.e)
t.y=w
t.w=C.htb(d,t.f,w,!1)}else t.w=d
t.x=e},
aFM(d){var w,v,u,t,s=this
if(s.fx==null)return null
if(s.as===0){w=s.z
w===$&&B.c()
v=s.Q
v===$&&B.c()
s.baX(w,v)
s.baQ()}w=s.w
w.toString
s.baW(w)
w=s.w
w.toString
v=s.z
v===$&&B.c()
u=s.Q
u===$&&B.c()
s.aV4(w,v,u)
s.fx.bt(59)
s.y=s.w=null
s.as=0
u=s.fx
t=J.eH(A.aG.gaR(u.c),0,u.a)
s.fx=null
return t},
aV4(d,e,f){var w,v,u,t,s,r,q,p,o
if(!d.gq_())throw B.W(B.dQ("GIF can only encode palette images."))
w=d.a
v=w==null?null:w.geE()
u=v.a
t=this.fx
t.bt(44)
t.iR(0)
t.iR(0)
t.iR(e)
t.iR(f)
s=J.eH(v.gaR(v),0,null)
t.bt(135)
r=v.b
if(r===3)t.kO(s)
else if(r===4)for(q=0,p=0;q<u;++q,p+=4){t.bt(s[p])
t.bt(s[p+1])
t.bt(s[p+2])}else if(r===1||r===2)for(q=0,p=0;q<u;++q,p+=r){o=s[p]
t.bt(o)
t.bt(o)
t.bt(o)}for(q=u;q<256;++q){t.bt(0)
t.bt(0)
t.bt(0)}this.bPd(d,e,f)},
bPd(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h={}
i.fr=i.ax=i.at=0
i.dy=new Uint8Array(256)
i.fx.bt(8)
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
s=new C.bTu(h,t)
r=s.$0()
for(q=0,p=5003;p<65536;p*=2)++q
q=8-q
for(o=0;o<5003;++o)w[o]=-1
i.Yo(i.cy)
for(n=!0;n;){m=s.$0()
for(n=!1;m!==-1;){l=(m<<12>>>0)+r
o=(A.o.dV(m,q)^r)>>>0
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
if(n)break}i.Yo(r)
u=i.db
if(u<4096){i.db=u+1
v[o]=u
w[o]=l}else{for(o=0;o<5003;++o)w[o]=-1
u=i.cy
i.db=u+2
i.dx=!0
i.Yo(u)}j=s.$0()
r=m
m=j}}i.Yo(r)
i.Yo(i.CW)
i.fx.bt(0)},
Yo(d){var w,v=this,u=v.at,t=v.ax
u&=D.dcO[t]
v.at=u
if(t>0){u=(u|A.o.dV(d,t))>>>0
v.at=u}else{v.at=d
u=d}t+=v.ay
v.ax=t
while(t>=8){v.aNy(u&255)
u=A.o.aD(v.at,8)
v.at=u
t=v.ax-=8}if(v.db>v.cx||v.dx)if(v.dx){w=v.ch
v.ay=w
v.cx=A.o.dt(1,w)-1
v.dx=!1}else{w=++v.ay
if(w===12)v.cx=4096
else v.cx=A.o.dt(1,w)-1}if(d===v.CW){while(t>0){v.aNy(u&255)
u=A.o.aD(v.at,8)
v.at=u
t=v.ax-=8}v.aV5()}},
aV5(){var w,v=this,u=v.fr
if(u>0){v.fx.bt(u)
u=v.fx
u.toString
w=v.dy
w===$&&B.c()
u.bkz(w,v.fr)
v.fr=0}},
aNy(d){var w,v,u=this,t=u.dy
t===$&&B.c()
w=u.fr
v=w+1
u.fr=v
t.$flags&2&&B.aj(t)
t[w]=d
if(v>=254)u.aV5()},
baQ(){var w,v=this
v.fx.bt(33)
v.fx.bt(255)
v.fx.bt(11)
v.fx.kO(new B.d7("NETSCAPE2.0"))
w=v.fx
w.toString
w.kO(B.a([3,1],x.t))
v.fx.iR(v.b)
v.fx.bt(0)},
baW(d){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.fx.bt(33)
l.fx.bt(249)
l.fx.bt(4)
w=d.a
v=w==null?null:w.geE()
u=v.b
t=u-1
s=0
r=0
if(u===4||u===2){q=J.eH(v.gaR(v),0,null)
p=v.a
for(o=t,n=s;n<p;++n,o+=u)if(q[o]===0){s=n
r=1
break}}l.fx.bt(r|8)
w=l.fx
w.toString
m=l.x
w.iR(m==null?l.a:m)
l.fx.bt(s)
l.fx.bt(0)},
baX(d,e){var w=this
w.fx.kO(new B.d7("GIF89a"))
w.fx.iR(d)
w.fx.iR(e)
w.fx.bt(0)
w.fx.bt(0)
w.fx.bt(0)}}
C.coZ.prototype={
a5(){return"QuantizerType."+this.b}}
C.akq.prototype={}
C.W3.prototype={
R(){return new C.blm(B.U(x.N,x.i),new B.as(A.ar,$.au()),B.a([],x.X),B.a([],x.L),B.mL(0,null,null))}}
C.blm.prototype={
gWC(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
this.ch.q()
this.a1()},
Pw(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Pw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aV.al$.d.c
if(s!=null)s.j5()
p.bK(0,A.c5)
t.m(new C.edX(t))
t.a.toString
p=t.gWC()
w=3
return B.b(C.bAL(C.hXu(q,C.i8u(p),o,t.ay)),$async$Pw)
case 3:s=e
r=s==null?null:J.j_(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=C.i9U(q,p,o)
if(t.c==null){w=1
break}t.m(new C.edY(t,o,r))
$.aV.x1$.push(new C.edZ(t))
case 1:return B.h(u,v)}})
return B.i($async$Pw,v)},
YF(d){return this.c0A(d)},
aWN(){return this.YF(null)},
c0A(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$YF=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aV.al$.d.c
if(s!=null)s.j5()
t.f.saV(0,o)
t.m(new C.ee9(t))
E.dZ(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bAL(C.i3t(o)),$async$YF)
case 3:r=n.a=m.ihS(f)
p.b=""
if(r!=null&&!C.i8v(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.i9V(o)
q=B.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.akq(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.eea(p,t))
t.c63(p.a)
case 1:return B.h(u,v)}})
return B.i($async$YF,v)},
c63(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
A.d.a7(w)
w=++m.as
v=m.gWC()
A.d.a7(v.a)
A.d.a7(v.b)
m.e.a7(0)
m.m(new C.ee5(m))
t=d.d
s=B.U(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.ee3(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.ee6(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.M)(r),++u){p.$2(o,new C.ee7(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.ee8(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bw.j(0.1),g=B.m(16),f=B.J(A.bw.j(0.35),A.r,1)
if(m.x)j=B.B(B.a([D.f7c,A.bd,B.E(B.d(m.Q,l,l,l,l,l,l,A.Ab,l,l,l),1)],x.p),A.m,l,A.e,A.i,0,l,l)
else if(k==null)j=D.fy4
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.V2,l,l,l),1)
v=x.p
w=B.a([B.B(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fik,l,l,l)],v),A.m,l,A.e,A.i,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.u3,B.d(u,l,l,l,l,l,l,D.fl7,l,l,l),l))
w.push(A.cL)
w.push(B.d(k.b,l,l,l,l,l,l,F.Ec,l,l,l))
u=k.e
if(u.length!==0){t=A.aU.j(0.12)
s=B.m(10)
w.push(B.p(l,B.d(u,l,l,l,l,l,l,D.fnD,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.hZ,A.cj,l,l,l))}w.push(A.an)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aB
w.push(new B.D(A.Ne,new B.ce(A.aM,A.e,A.i,A.E,l,A.p,l,0,B.a([new B.y(t,l,A.lQ,l,l,l,l,l,l,l,l,l),A.bm,new B.bz(1,A.bb,new B.y(q,l,new B.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.M)(j),++p){o=j[p]
t=new B.aP(12,12)
s=new B.aP(12,12)
A.d.v(w,B.a([A.O,new B.bO(A.a8,l,l,B.p(l,new B.y(o.a,l,A.UJ,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.bw.j(0.3),l,l,new B.bg(t,t,t,t),l,l,A.n),l,l,l,l,A.h5,l,l,l),l),A.au,B.p(l,new B.y(o.b,l,D.fte,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.c.j(0.07),l,l,new B.bg(s,s,s,s),l,l,A.n),l,l,l,l,A.bS,l,l,l)],v))}if(m.ax)w.push(D.el7)
j=B.cg(B.x(w,A.E,l,A.e,A.i,0,A.p),A.t,m.ch,A.y,l,l,l,l,A.ag)}w=x.p
g=B.x(B.a([B.aiD(B.p(l,j,A.f,l,new B.aZ(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.by3,A.eB,l,l,1/0),A.b5,A.iz),B.E(C.hcv(m.gWC(),l,l,m.e),1)],w),A.m,l,A.e,A.i,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new C.eX("Ask about it",i,new C.eed(m),l,A.bw,l),new C.eX("Invent something new",!i,new C.eee(m),l,A.bw,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dom[p]
i.push(new C.eX(n,!1,new C.eef(m,n),l,A.bw,l))}f.push(new C.hj(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.d6P[p]
i.push(new C.eX(r,!1,new C.eeg(m,r),l,A.bw,l))}f.push(new C.hj(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aL(l,A.Y,!1,l,!0,A.t,l,B.aM(),m.f,l,l,l,l,l,2,B.br(l,new B.b5(4,B.m(16),A.a0),l,A.eT,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.jq,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.eeh(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.d9,!0,A.a3,l,A.am,l,A.JY,l,l),1)
h=m.at
v=h&&j?D.bNo:A.e5
j=h&&j?"Ask":"Invent"
f.push(B.B(B.a([i,A.ac,new C.j7(v,j,new C.eei(m,k),A.bw,l)],w),A.m,l,A.e,A.i,0,l,l))
return C.oD(A.bw,A.fv,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.m,l,A.e,A.P,0,A.p))}}
C.Gu.prototype={}
C.v4.prototype={}
C.Wr.prototype={
R(){return new C.aFi(A.I,A.I,A.ax,B.aX(x.S),$,A.bF,0,B.a([],x.X),null,null)}}
C.aFi.prototype={
gaY2(){var w,v,u,t=this,s=D.HU[t.cx],r=D.RK[t.cy],q=D.CW[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.eo(w,w.r,B.a7(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.ayF[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cH(p,0,new C.esc())},
ga30(){return D.HU[this.cx].d/this.gaY2()},
gaPd(){return 0.1*(D.HU[this.cx].d/0.9)/D.RK[this.cy].d},
Z(){this.a2()
this.pd()
C.ci0("rocket_lander").bN(new C.esw(this),x.P)},
c6c(){var w=this
w.ay=A.k.E(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cR.ah()*0.6
w.f=new B.t(0.15+A.cR.ah()*0.7,0.08)
w.r=new B.t((A.cR.ah()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
q9(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.esx())
return}w=D.rH[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.E(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.t(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga30()
v=v.a9(0,new B.t(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaPd())}if(m.dy){t=m.r
v=v.aF(0,t.aI(0,t.gcI()*6*D.aAF[m.d]))}t=m.r=m.r.a9(0,v.aI(0,d))
s=m.f=m.f.a9(0,t.aI(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.t(-t.a*0.4,t.b)
t=new B.t(A.k.E(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.t(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.CW[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b2a("rocket_lander",B.G(["unlocked",t],x.N,x.A))
C.Ji("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga30()/(D.rH[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.ac(m.ga30()/(D.rH[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dZ(80,"",500,0,0.6,"noise")
B.fL()}}if(m.Q&&m.x>0&&A.o.F(A.k.bh(m.CW*20),2)===0)E.dZ(90,"",70,0,0.12,"noise")
m.m(new C.esy())},
agq(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.fkB,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new C.eX(e[w].a,f.$1(w),new C.ese(this,g,w),v,h,v))
return new B.D(A.eI,B.x(B.a([u,A.cL,B.bX(A.bC,s,A.bq,v,6,6)],t),A.E,v,A.e,A.i,0,A.p),v)},
bFy(d){var w,v,u,t,s=this,r=null,q=s.ga30()/(D.rH[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaPd()),o=D.aAF[s.d],n=B.m(24),m=d.c,l=B.J(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.au,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.UY,r,r,r),A.W,s.agq("ENGINE: "+D.HU[s.cx].b,D.HU,new C.es3(s),new C.es4(s),A.cS),s.agq("FUEL TANK: "+D.RK[s.cy].b,D.RK,new C.es5(s),new C.es6(s),A.bj),s.agq("LANDING GEAR: "+D.CW[s.db].b,D.CW,new C.es7(s),new C.es8(s),A.aQ),s.agq("EXTRAS (tap to add)",D.ayF,new C.es9(s),new C.esa(s),A.bw)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fQZ)
o=(q?A.bj:A.ct).j(0.14)
w=B.m(12)
v=A.k.ac(s.gaY2(),2)
u=A.k.ac(s.ga30()/(D.rH[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.CW[s.db].d*100)+".",r,r,r,r,r,r,D.flf,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.hZ,A.bS,r,r,r))
m.push(A.W)
m.push(new B.bO(A.A,r,r,new C.j7(A.oo,"Launch",new C.esb(s),A.bj,r),r))
return B.at(B.p(r,B.cg(B.x(m,A.E,r,A.e,A.P,0,A.p),A.t,r,A.y,r,A.bQ,r,r,A.ag),A.f,r,A.lW,new B.o(D.bnZ,r,l,n,r,r,A.n),r,r,r,A.bS,r,r,r,r),r,r,r)},
aZa(d,e,f,g){var w=null,v=f?A.cS:A.c.j(0.1),u=B.m(18),t=B.J(A.aZ,A.r,1)
return B.nK(A.jC,B.p(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.es0(e),new C.es1(e),w,w,w,w,new C.es2(e))},
aZ9(d,e,f){return this.aZa(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cz(new C.esp(s,D.rH[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.rH[w].a:"\ud83d\udd12"
o.push(new C.eX(v,s.d===w,new C.esq(s,w),r,D.rH[w].c,r))}v=B.a([s.aZ9(F.aou,new C.esr(s),s.y),A.bd,s.aZa(A.wg,new C.ess(s),s.Q,130),A.bd,s.aZ9(A.OT,new C.est(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aQ:A.c.j(0.1)
t=B.m(18)
A.d.v(v,B.a([A.bd,B.aB(r,B.p(r,D.bRE,A.f,r,r,new B.o(u,r,B.J(A.aZ,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.esu(s),r,r,r,r,r,r,!1,A.a4)],p))}return C.oD(A.cS,A.fv,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new C.hj(o,"WORLD",r),B.B(v,A.m,r,A.b8,A.i,0,r,r)],p),A.m,r,A.e,A.P,0,A.p))}}
C.bir.prototype={
a3(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.rH[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.S(),d=B.I(),a0=j.c,a1=B.ar(D.Z2,a0,0.25)
a1.toString
d.sam(new B.a9(A.b4,A.b7,A.x,B.a([F.afO,a1],x.O),l,l).aB(0,new B.a3(0,0,g,f)))
a2.aP(new B.a3(0,0,g,f),d)
w=new B.e9()
w.d4(5)
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
r=new B.aG(e.r,A.ah,l,l,d)
r.D(new B.aY(0,s+14))
q=new B.e9()
q.d4(2)
for(p=0;p<=i;p+=18){e=new B.aq(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.ah()*18))
d.push(e)
a1=r.f
if(a1!=null)e.by(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.D(new B.aq(i,h))
r.D(new B.aq(0,h))
r.D(new B.bt())
e=$.S()
d=B.I()
d.r=B.ar(a0,A.w,0.6).gp(0)
a2.aG(r,d)
o=B.bL(new B.t(k.ax*i,s+10),8,k.ay*i)
d=B.bu(o,A.i9)
a0=B.I()
a0.r=A.be.gp(0)
a2.az(d,a0)
a0=B.bu(o.cr(2),A.mV)
d=B.I()
d.b=A.ab
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.az(a0,d)
if(k.as==="ready")return
d=k.f
J.bm(g.save())
g.translate(d.a*i,d.b*h)
a2.ig(0,k.w)
i=k.as
if(i==="crashed"){k=B.I()
k.r=A.cS.j(0.6).gp(0)
k.z=Y.It
a2.ad(A.I,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new B.aG(i,A.ah,l,l,B.a([],f))
n.D(new B.aY(-8,18))
n.D(new B.aq(0,44+Math.sin(k.CW*40)*8))
n.D(new B.aq(8,18))
n.D(new B.bt())
k=B.I()
k.r=A.aU.gp(0)
a2.aG(n,k)
i=new B.aG(i,A.ah,l,l,B.a([],f))
i.D(new B.aY(-4,18))
i.D(new B.aq(0,32))
i.D(new B.aq(4,18))
i.D(new B.bt())
k=B.I()
k.r=A.c.gp(0)
a2.aG(i,k)}k=e.r
m=new B.aG(k,A.ah,l,l,B.a([],f))
m.D(new B.aY(0,-26))
m.D(new B.c5(14,-10,11,18))
m.D(new B.aq(-11,18))
m.D(new B.c5(-14,-10,0,-26))
m.D(new B.bt())
i=B.I()
i.sam(D.c3B.aB(0,D.f_l))
a2.aG(m,i)
i=B.I()
i.r=A.aQ.gp(0)
a2.ad(G.v_,5,i)
i=new B.aG(k,A.ah,l,l,B.a([],f))
i.D(new B.aY(-11,6))
i.D(new B.aq(-20,20))
i.D(new B.aq(-11,18))
i.D(new B.bt())
h=B.I()
h.r=A.aw.gp(0)
a2.aG(i,h)
f=new B.aG(k,A.ah,l,l,B.a([],f))
f.D(new B.aY(11,6))
f.D(new B.aq(20,20))
f.D(new B.aq(11,18))
f.D(new B.bt())
k=B.I()
k.r=A.aw.gp(0)
a2.aG(f,k)
g.restore()},
aw(d){return!0}}
C.aNd.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.byM.prototype={
q(){var w,v,u
for(w=this.iM$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iL$
w===$&&B.c()
w.q()
this.bxA()}}
C.aTc.prototype={}
C.a3E.prototype={}
C.bbq.prototype={}
C.UX.prototype={
R(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eD(["skin"],x.N),o=new Float32Array(0)
return new C.aDO(w,v,u,t,s,r,q,new B.cB(null,x.z),p,D.Lh,D.Lh,A.ax,A.cR,o,new Int32Array(0),$,A.bF,0,B.a([],x.X),null,null)}}
C.aDO.prototype={
Z(){var w=this
w.a2()
w.pd()
w.as=new C.c4U(w.gceM())
new C.dLv(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a4(0)
v.d=null}this.bwJ()},
ceN(d){var w,v=this
if(v.c==null)return
w=J.a5(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f4(0,B.G(["t","init","data",$.hmw],x.N,x.A))
v.at=!0
v.ax=""
v.azv()
break
case"pick":v.m(new C.dL7(v,d))
break
case"shot":v.aig(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
break}},
azv(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.awx[q.CW]
v=new C.dL8()
u=q.ay
u=B.C(u,B.a7(u).k("cs.E"))
A.d.fd(u)
t=x.N
s=B.G(["layers",u,"skinMode",q.ch,"tone","#"+B.w(v.$1(w.b))+B.w(v.$1(w.c))+B.w(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.X.ap(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=B.U(t,x.A)
u.n(0,"t","state")
u.v(0,s)
v.f4(0,u)}},
aig(d){return this.cvJ(d)},
cvJ(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aig=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cD.aL(A.a.b7(d,A.a.cv(d,",")+1))
w=6
return B.b(B.aw2(B.a([B.cDd(r,"image/png","body.png")],x.r),null,"Made in NGMY Core Protocol"),$async$aig)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.K(x.gV).f.U(D.aRC)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aig,v)},
ayY(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
q9(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bh(w)!==A.k.bh(v.ok)){C.a8N("kick",0.4)
v.a5G(170,new C.dLw())}v.ok=w
return},
ai5(d){var w,v,u,t,s=this
s.m(new C.dL9(s,d))
if(d==null){s.fx=D.Lh
s.dy=1
w=s.as
if(w!=null)w.f4(0,B.G(["t","focus","group",null],x.N,x.A))
return}w=s.d.e
v=B.T(w).k("Z<1>")
u=B.C(new B.Z(w,new C.dLa(d),v),v.k("L.E"))
t=A.d.gI(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.M(0,t)
if(s.ch===2)s.ch=1}s.azv()
w=s.as
if(w!=null)w.f4(0,B.G(["t","focus","group",d],x.N,x.A))
s.go=0
s.cyc(t,d)
return},
cyc(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){C.a8N("kick",0.8)
this.a5G(260,new C.dLb())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dZ(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a5G(w*70,new C.dLc(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dZ(110,"",360,0.7,0.3,"saw")
else C.h2o("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":E.dZ(210+e.length*4,"",80,0.6,0.55,"tri")
E.dZ(2400,"",20,0,0.3,v)
break
case"muscle":E.dZ(70,"",150,1,0.6,"sine")
break
case"vessel":E.dZ(300,"",380,0.4,0.22,v)
C.a8N("kick",0.3)
break
default:C.h2o("organic",2+A.o.F(e.length,6),200,0.4)}},
cCK(d){this.m(new C.dLe(this,d))},
aZs(){var w,v,u,t,s,r,q,p=this,o=B.aX(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
if(p.ayY(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.M(0,s.a)}q=B.C(o,o.$ti.k("cs.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aq(w)]
p.p4=""},
bXa(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new C.dL4(u,w,d))
v=x.t
C.Ji("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.a5G(1100,new C.dL5(u))
return}if(d==null){if(u.cx!=null)u.ai5(null)
return}u.ai5(d)},
c_T(d,e){var w,v=this,u=null,t=B.m(18),s=B.J(A.c2.j(0.5),A.r,1)
if(v.p1){w=v.p2
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.fgH,u,u,u)}else if(d==null||e==null)w=D.fvq
else{w=x.p
w=B.B(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hE,u,u,u),A.cL,B.d(e.b,u,u,u,u,u,u,F.Ec,u,u,u)],w),A.E,u,A.e,A.P,0,A.p),1),B.aF(u,u,u,u,D.bUb,u,u,u,new C.dL6(v),u,u,u,u,"Back to the whole body",A.cb)],w),A.E,u,A.e,A.i,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(D.Xs,u,s,t,u,u,A.n),u,u,u,u,H.aka,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dzs.h(0,g)
i.azv()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dgM
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,B.M)(v),++s){r=v[s]
if(i.ayY(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=B.a([B.aF(h,h,h,h,D.rE,h,h,h,new C.dLl(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bJ:B.BC(h,A.pq,q)}else q=A.kS
q=B.x(B.a([B.E(q,1),new B.D(F.a_4,i.c_T(g,f),h)],v),A.m,h,A.e,A.i,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){o=D.d8o[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new C.eX(l,n,new C.dLm(i,o),o.c,A.c2,h))}p=B.a([new C.hj(p,h,h)],v)
if(!i.p1&&w.length!==0){n=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.M)(w),++s){k=w[s]
n.push(new C.eX(k,k===i.cx,new C.dLn(i,k),h,A.aU,h))}p.push(new C.hj(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(C.lU(A.ct,""+A.k.V(n)+" beats/min","Heart rate",180,40,new C.dLo(i),n))}if(i.ch>0&&t.a===0){n=B.a([],v)
for(j=0;j<5;++j)n.push(new C.JY(D.awx[j],i.CW===j,new C.dLp(i,j),!1,h))
p.push(new C.hj(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=B.a([new C.eX("Spin",n,new C.dLq(i),D.ano,A.aQ,h),new C.j7(A.ol,"Reset view",new C.dLr(i),A.c,h),new C.eX(l,m,new C.dLs(i),A.H9,A.aU,h)],v)
if(t.t(0,"organ"))v.push(new C.eX("Heartbeat sound",i.k4,new C.dLt(i),A.uz,A.ct,h))
p.push(new C.hj(v,h,h))
return C.oD(A.c2,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.m,h,A.e,A.P,0,A.p))}}
C.aMn.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.aMo.prototype={
q(){var w,v,u
for(w=this.iM$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iL$
w===$&&B.c()
w.q()
this.bwI()}}
C.c4U.prototype={
kQ(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aN(e,"</script","<\\/script")
v=$.hsG
$.hsG=v+1
u="ngmy-body-viewer-"+v
$.x7()
$.pH().oW(u,new C.c4V(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fy(v,"message",new C.c4W(t),!1,x.gA)
t.b=u},
f4(d,e){var w,v
try{w=this.c
if(w!=null){w=B.QY(w.contentWindow)
if(w!=null)J.ait(w,e,"*")}}catch(v){}}}
C.yo.prototype={}
C.CH.prototype={}
C.nt.prototype={}
C.bca.prototype={}
C.V1.prototype={
R(){var w=x.N,v=x.y,u=x.S
return new C.aDQ(B.U(w,x.a2),B.a([],x.cB),B.U(w,v),B.U(w,v),B.U(w,u),A.ax,A.I,A.I,B.aX(u),$,A.bF,0,B.a([],x.X),null,null)}}
C.aDQ.prototype={
Z(){var w=this
w.a2()
w.pd()
w.ad_()
$.aV.x1$.push(new C.dNa(w))},
ad_(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ad_=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$ad_)
case 6:q=e.ty("ngmy_circuit_passed_v1")
r=q==null?A.Y:q
if(s.c!=null)s.m(new C.dMP(s,r))
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
return B.i($async$ad_,v)},
adl(d){return this.c3K(d)},
c3K(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$adl=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.M(0,d)
u=3
w=6
return B.b(B.az(),$async$adl)
case 6:r=f
q=s.cx
p=B.a7(q).k("k1<cs.E,n>")
q=B.C(new B.k1(q,new C.dMS(),p),p.k("L.E"))
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
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$adl,v)},
axG(d,e,f,g){var w="c"+this.y++,v=new C.CH(w,e,f,g)
this.d.n(0,w,v)
return v},
mB(d,e,f){return this.axG(0,e,f,0)},
acl(d,e){var w
if(D.zA.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a9(0,new B.t(-36,w))},
tV(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aTg(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.nj$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dq(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.eb(m,D.cSD[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tV(p,0)&&n.tV(p,1)
break
case"or":p=q.a
o=n.tV(p,0)||n.tV(p,1)
break
case"xor":p=q.a
o=n.tV(p,0)!==n.tV(p,1)
break
case"nand":p=q.a
o=!(n.tV(p,0)&&n.tV(p,1))
break
case"nor":p=q.a
o=!(n.tV(p,0)||n.tV(p,1))
break
case"not":o=!n.tV(q.a,0)
break
default:o=n.tV(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bPM(){return this.aTg(null)},
q9(d){var w,v,u,t,s,r,q,p,o,n=this
n.bPM()
if(!n.ax)return
for(w=n.d,w=new B.bc(w,B.a7(w).k("bc<2>")).gaf(0),v=new B.f5(w,new C.dNb()),u=n.f,t=n.w,s=0;v.C();){r=w.gT(0).a
if(u.h(0,r)===!0){q=n.nj$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.nj$)
o=s+1
E.dZ(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
axH(d){var w=this
w.d.a7(0)
A.d.a7(w.e)
w.f.a7(0)
w.r.a7(0)
w.cy=null},
m6(d,e){var w=this.x
return new B.t(d*w.a,e*w.b)},
atU(d){var w=this
if(w.x.A(0,A.ax)){$.aV.x1$.push(new C.dMN(w,d))
return}w.m(new C.dMO(w,d))},
cyu(d){this.m(new C.dMT(this,d,$.bFz()[d]))},
c8x(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bFz()[a0]
v=d.d
u=B.a7(v).k("bc<2>")
t=u.k("Z<L.E>")
s=t.k("L.E")
r=B.C(new B.Z(new B.bc(v,u),new C.dMI(),t),s)
A.d.aX(r,new C.dMJ())
q=B.C(new B.Z(new B.bc(v,u),new C.dMK(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dML(d,w))
return}u=d.r
p=B.dR(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dt(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.h3(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aTg(0)
h=m.h(0,A.d.gI(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lr(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aH(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a7(0)
u.v(0,p)
d.m(new C.dMM(d,o,a0))},
ayv(d){var w,v,u,t,s=this.d,r=B.a7(s).k("bc<2>")
s=B.C(new B.bc(s,r),r.k("L.E"))
r=B.T(s).k("dw<1>")
s=new B.dw(s,r)
s=new B.bS(s,s.gL(0),r.k("bS<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
chb(d){var w,v,u,t,s,r=this.d,q=B.a7(r).k("bc<2>")
r=B.C(new B.bc(r,q),q.k("L.E"))
q=B.T(r).k("dw<1>")
r=new B.dw(r,q)
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
c_M(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.zA.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.acl(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.z(p,o)
s=l}}}return t},
bOy(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.acl(p,o)
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
c8z(d){var w,v,u,t=this,s=t.ayv(d)
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
E.dZ(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new C.dMU())
return}u=t.bOy(d)
if(u!=null)t.m(new C.dMV(t,u))
else t.m(new C.dMW(t))},
awv(d){return this.c2J(d)},
c2J(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$awv=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.ayv(d)
if(s==null){w=1
break}B.jJ()
t.m(new C.dMR(t,s))
case 1:return B.h(u,v)}})
return B.i($async$awv,v)},
bBn(d){if(this.x.A(0,A.ax))return
this.m(new C.dMH(this,d,A.cR))
B.f1()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bFz()[g]
g=x.p
v=B.a([B.aF(h,h,h,h,B.X(i.ax?A.uz:Q.Cx,A.ad,h,h,h,21),h,h,h,new C.dN4(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.m(16)
s=A.cp.j(0.14)
r=B.J(A.cp.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.ffQ,h,h,h),B.d(w.b,h,h,h,h,h,h,G.aa_,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.l6,B.d(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.bj:A.eP,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.B(B.a([B.E(B.x(q,A.E,h,A.e,A.i,0,A.p),1),B.bF(D.fH5,h,i.gc8w(),B.bo(A.cp,h,h,h,h,h,h,h,h,h,h,A.cb))],g),A.m,h,A.e,A.i,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,X.Nn,D.byH,h,h,1/0))}u.push(B.E(B.cz(new C.dN5(i)),1))
if(f!=null){t=B.m(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.d(D.zA.h(0,r).a+": "+D.zA.h(0,r).e,h,h,h,h,h,h,A.tb,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,A.a_8,A.bS,h,h,1/0))}u=B.x(u,A.m,h,A.e,A.i,0,A.p)
t=B.a([],g)
for(s=D.zA.gdS(D.zA),s=s.gaf(s);s.C();){r=s.gT(s)
q=new B.aP(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.aB(h,B.p(h,B.x(B.a([B.X(p.b,o,h,h,h,20),A.bD,new B.y(p.a,h,D.aTz,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.P,0,A.p),A.f,h,h,new B.o(n,h,new B.bK(m,m,m,m),new B.bg(q,q,q,q),h,h,A.n),h,h,h,A.fB,Ae.Nk,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dN6(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dlf[l]
s.push(new C.j7(A.OU,k.b,new C.dN7(i,k),A.cp,h))}s.push(new C.j7(D.Oz,"Clear",new C.dN8(i),A.ct,h))
r=B.a([],g)
for(j=0;q=$.bFz(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.ef:A.lF
o=i.ay
n=i.cx.t(0,j)?A.bj:A.bG
r.push(new C.eX(q.a,o===j,new C.dN9(i,j),p,n,h))}return C.oD(A.cp,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new C.hj(t,"PARTS",h),new C.hj(s,"TRY",h),new C.hj(r,"TASKS",h)],g),A.m,h,A.e,A.P,0,A.p))}}
C.bct.prototype={
a3(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.S()
w=B.I()
w.r=D.aef.gp(0)
a7.aP(new B.a3(0,0,0+a5,0+a6),w)
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
g=a5.acl(j,m.c)
f=q.h(0,l)===!0
l=$.S()
e=B.a([],p)
d=new B.aG(l.r,A.ah,a4,a4,e)
e.push(new B.aY(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new B.kZ(h+a0,i,l-a0,a1,l,a1))
if(f){l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.b=A.ab
l.c=9
l.r=A.bG.j(0.28).gp(0)
l.z=I.pm
s=l.G()
l=d.gbw().a.snapshot()
w.drawPath((d.e=new B.cm(l)).a,s)
s.delete()}l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.b=A.ab
l.c=3.2
l.d=A.bE
l.r=(f?A.dP:A.br).gp(0)
s=l.G()
l=d.e
w.drawPath((l==null?d.e=new B.cm(d.gbw().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.a9(0,D.J4)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new B.aG($.S().r,A.ah,a4,a4,B.a([],p))
w=a3.b
p.D(new B.aY(a6,w))
r=g.b
p.D(new B.kZ(a6+a0,w,a5-a0,r,a5,r))
r=B.I()
r.b=A.ab
r.c=3
r.r=A.ad.gp(0)
a7.aG(p,r)}for(a5=new B.dq(o,o.r,o.e);a5.C();)this.c8y(a7,a5.d)},
c8y(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.zA.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bL(a0.c,64,64)
s=B.bu(t,A.ln)
r=w.cy===v
q=s.eW(A.cx)
$.S()
p=B.I()
p.r=A.w.j(0.55).gp(0)
p.z=A.mS
d.az(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.I()
p.sam(new B.c2(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).aB(0,B.bY(a0.c,52)))
d.ad(q,52,p)}q=s.eW(A.cH)
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
q.sam(new B.a9(A.b4,A.b7,A.x,B.a([p,m],x.O),g,g).aB(0,t))
d.az(s,q)
q=B.I()
q.b=A.ab
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.az(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.ux:D.bNU}else l=e.b
k=C.h4e(B.lr(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a3(d,v.aF(0,new B.t(p/2,q.gbb(q)/2)))
j=C.h4e(e.a,10.5,A.c,g,g,A.H)
j.a3(d,a0.c.a9(0,new B.t(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.h4e(f,9,u?A.dP:A.bY,g,g,A.u)
i.a3(d,a0.c.a9(0,new B.t(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b_5(d,w.acl(a0,h),o)
this.b_5(d,a0.c.a9(0,D.J4),o)},
b_5(d,e,f){var w
$.S()
w=B.I()
w.r=D.aef.gp(0)
d.ad(e,8.5,w)
w=B.I()
w.b=A.ab
w.c=2.2
w.r=f.gp(0)
d.ad(e,8.5,w)
w=B.I()
w.r=A.c.gp(0)
d.ad(e,3.2,w)},
aw(d){return!0}}
C.aMs.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.byA.prototype={
q(){var w,v,u
for(w=this.iM$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iL$
w===$&&B.c()
w.q()
this.bwN()}}
C.NM.prototype={
R(){return new C.aE6(B.mL(0,null,null))}}
C.KQ.prototype={
a5(){return"_UnfoldStyle."+this.b}}
C.AO.prototype={}
C.aE6.prototype={
c8E(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gco(0).at
v.toString
w.f=v}w.m(new C.dT0(w,e))},
c1A(){var w=this
w.e.q()
w.e=B.mL(w.f,null,null)
w.m(new C.dT_(w))},
q(){this.e.q()
this.a1()},
B(d){var w=this,v=null,u=w.d,t=u==null
return B.oz(t,B.c6(v,A.c0,t?new C.bsz(w.e,w.gc8D(w),new C.dT1(d),v):new C.aIo(u,new B.bE(u.b,x.gj)),v,!1,!1,v,!1),new C.dT2(w,u),x.K)}}
C.bu9.prototype={}
C.bsz.prototype={
b_6(d,e){var w=null
return new B.D(H.a_y,B.x(B.a([B.d(d,w,w,w,w,w,w,D.fgq,w,w,w),A.bD,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.i,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=B.B(B.a([B.aF(v,v,v,v,S.ny,v,v,v,w.e,v,v,v,v,v,v),A.t5,D.bEK],u),A.m,v,A.e,A.i,0,v,v),s=w.b_6("STUDIOS","Play, make things, and keep what you make")
$.bFA()
return B.bl(!0,B.x(B.a([new B.D(D.bDM,t,v),B.E(B.vM(0,v,A.t,w.c,A.y,v,v,v,v,v,!1,v,A.ag,!1,B.a([new B.mj(s,v),new B.o_(A.hL,B.Pq(new B.oC(new C.f2r(d),9,!0,!0,!0,0,B.t7(),v),D.aRr),v),new B.mj(w.b_6("SCENES","Each one is a studio too: change the style, colours and words"),v),new B.o_(D.byP,B.Pq(new B.oC(new C.f2s(w),6,!0,!0,!0,0,B.t7(),v),D.aRr),v)],u)),1)],u),A.m,v,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0)}}
C.afk.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=B.m(20),n=B.m(20),m=B.ar(F.ni,p,0.3)
m.toString
w=x.O
m=B.a([m,D.ahf],w)
v=B.J(p.j(0.6),A.r,1.2)
u=x.V
t=B.a([new B.ac(-4,A.G,p.j(0.22),A.I,14)],u)
s=B.ar(p,A.w,0.45)
s.toString
w=B.a([p,s],w)
u=B.a([new B.ac(0,A.G,p.j(0.5),A.I,12)],u)
return B.aH(!1,A.a2,!0,r,B.aO(!1,o,!0,B.eJ(B.x(B.a([B.p(r,B.X(q.c,A.c,r,r,r,24),A.f,r,r,new B.o(r,r,r,r,u,new B.a9(A.ay,A.aE,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.O,B.d(q.a,r,2,A.a1,r,r,r,B.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.K,r,r),A.cL,B.d(q.b,r,2,A.a1,r,r,r,B.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.K,r,r)],x.p),A.m,r,A.b8,A.i,0,A.p),r,new B.o(r,r,v,n,t,new B.a9(A.ay,A.aE,A.x,m,r,r),A.n),r,A.Go,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)}}
C.aec.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=B.m(20),g=B.m(20),f=B.ar(F.ni,A.d.gI(i),0.24)
f.toString
w=x.O
f=B.a([f,D.ahf],w)
v=B.J(A.d.gI(i).j(0.35),A.r,1)
u=x.V
t=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cx,12)],u)
s=x.p
r=B.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new B.aP(6,6)
m=B.a([A.d.gI(i),A.d.gak(i)],w)
l=B.a([new B.ac(0,A.G,A.w.j(0.45),H.aJW,0)],u)
r.push(B.p(k,B.X(q[p],A.c,k,k,k,11),A.f,k,k,new B.o(k,k,k,new B.bg(n,n,n,n),l,new B.a9(A.a5,A.a8,A.x,m,k,k),A.n),k,17,k,new B.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=B.x(r,A.m,k,A.e,A.P,0,A.p)
u=B.ar(A.d.gI(i),A.d.gak(i),0.4)
u.toString
return B.aH(!1,A.a2,!0,k,B.aO(!1,h,!0,B.eJ(B.x(B.a([new B.a6(58,k,w,k),A.W,B.d(j.b,k,2,A.a1,k,k,k,B.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.K,k,k),A.au,B.X(A.Cv,A.d.gI(i),k,k,k,18)],s),A.m,k,A.b8,A.i,0,A.p),k,new B.o(k,k,v,g,t,new B.a9(A.ay,A.aE,A.x,f,k,k),A.n),k,A.Go,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.aj)}}
C.QE.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ar(A.d.gak(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,B.c4(j,new B.o(h,j,j,B.m(22),j,j,A.n),A.bg),j,j,2,2,8,j)
u=B.m(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.w.j(0.55),A.J1,26),new B.ac(-6,A.G,A.d.gI(i).j(0.1+0.4*t),A.I,30)],s)
q=B.m(22)
p=B.ar(A.d.gI(i),A.c,0.14)
p.toString
o=A.d.gI(i)
n=A.d.gak(i)
i=B.ar(A.d.gak(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bU(0,B.c4(j,new B.o(j,j,j,j,j,new B.a9(A.ay,A.aE,A.x,B.a([p,o,n,i],m),D.dqQ,j),A.n),A.bg),0,0,0),B.ao(j,B.c4(j,new B.o(j,j,j,j,j,new B.a9(A.b4,A.b7,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bg),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bU(0,B.b4(j,j,j,new C.bty(i,j),A.ax),0,0,0))
i=A.c.j(0.16)
p=B.J(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.I,14)],s)
s=B.p(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.fia,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,B.a([A.au,B.d(i,j,1,A.a1,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a7,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Uk)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.fZ,B.B(B.a([s,A.es,B.E(B.x(p,A.E,j,A.e,A.P,0,A.p),1)],l),A.m,j,A.e,A.i,0,j,j),j))
i=k.x
if(i>0)m.push(B.bU(0,B.e2(B.ec(j,A.w.j(A.k.E(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=B.m(22)
m.push(B.bU(0,B.e2(B.c4(j,new B.o(j,j,B.J(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bg),!0,j),0,0,0))
return new B.a6(w,v,new B.an(A.a_,j,A.aa,A.f,B.a([h,B.bU(0,B.c4(B.bx(q,new B.an(A.a_,j,A.aa,A.t,m,j),A.ap),new B.o(j,j,j,u,r,j,A.n),A.bg),0,0,0)],l),j),j)}}
C.bty.prototype={
a3(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a3(r,-10,s,w)
u=d.a
J.bm(u.save())
u.translate(v.gbL().a,v.gbL().b)
d.ig(0,0.35)
t=B.bL(A.I,(w- -10)*1.6,s-r)
$.S()
s=B.I()
s.sam(new B.a9(A.a5,A.a8,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).aB(0,t))
d.aP(t,s)
u.restore()},
aw(d){return d.b!==this.b}}
C.bt3.prototype={
B(d){var w=null,v=B.m(22),u=B.a([D.blU,D.agn],x.O),t=this.e,s=B.J(A.d.gI(t).j(0.4),A.r,1.2),r=B.a([new B.ac(0,A.G,A.w.j(0.5),A.kp,24)],x.V),q=B.m(22),p=A.d.gI(t)
return new B.a6(this.c,this.d,B.c4(B.bx(q,B.b4(B.at(B.X(A.jU,A.d.gI(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bb8(p,w),A.ax),A.ap),new B.o(w,w,s,v,r,new B.a9(A.ay,A.aE,A.x,u,w,w),A.n),A.bg),w)}}
C.bb8.prototype={
a3(d,e){var w,v,u,t,s,r,q,p
$.S()
w=B.I()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.G()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.G()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.ei(A.I)
$.S()
t=B.I()
t.b=A.ab
t.c=1.4
t.r=v.j(0.35).gp(0)
d.ad(u,30,t)},
aw(d){return!1}}
C.aIo.prototype={
R(){return new C.aIp(new B.cB(null,x.z),null,null)}}
C.aIp.prototype={
gui(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,D.bw9,null,1,null,v)
w.cM(0)
v.d!==$&&B.bI()
v.d=w
u=w}return u},
ga_1(){var w,v=this,u=v.e
if(u===$){w=B.bn(null,A.fY,null,1,null,v)
w.fm(0,!0)
v.e!==$&&B.bI()
v.e=w
u=w}return u},
gaxI(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc8B(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.k)
this.w=w}return w},
gaWu(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaXf(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb7N(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a2()
var w=this.gui()
w.dg()
w.dT$.M(0,this.gcyd())},
cye(){var w,v,u,t,s,r,q,p=this,o=p.gui().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gaxI().a){case 0:w=D.nB
break
case 1:w=D.uH
break
case 2:w=D.a4c
break
case 3:w=D.nB
break
case 4:w=D.ddD
break
case 5:w=D.uH
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.abW)r=0.09
else r=s===D.abX?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dZ(260+90*v,"",260,1.6,0.18,"tri")
u=D.c68[v]
C.q4("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.Ji("bell",D.ceX,1400,0.35)}}p.ax=o},
q(){this.gui().q()
this.ga_1().q()
this.byw()},
aep(){var w=this
w.gui().cXS(0,B.dF(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new C.f27(w))},
cje(){this.gui().bR(0)
this.m(new C.f26(this))},
aeo(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$aeo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaXf(),s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){q=t[r]
l.push(new B.as(new B.bb(q,A.b3,A.aO),$.au()))}m=B.a([],m)
for(t=u.gb7N(),s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){p=t[r]
m.push(new B.as(new B.bb(p,A.b3,A.aO),$.au()))}o=B.C(u.gaWu(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bV(F.ni,null,new C.f25(u,l,m,o),t,!0,!0,!0,A.lN,!1,!1,x.H),$async$aeo)
case 2:l=B.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.S$=$.au()
n.P$=0}return B.h(null,v)}})
return B.i($async$aeo,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gaxI(),f=i.a.c,e=f.b,d=i.gc8B(),a0=new C.AO(g,e,f.c,d,i.gaWu(),i.gaXf(),i.gb7N())
f=B.ar(A.d.gI(d),A.d.gak(d),0.4)
f.toString
g=x.p
w=B.a([B.aF(h,h,h,h,B.X(i.at?A.uz:Q.Cx,A.ad,h,h,h,21),h,h,h,new C.f2f(i),h,h,h,h,"Sound",h),B.aF(h,h,h,h,D.bXO,h,h,h,i.gc8C(),h,h,h,h,"Edit words and pictures",h),B.aF(h,h,h,h,D.rE,h,h,h,new C.f2g(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.cd(i.ga_1(),new C.f2h(i,a0),h),B.cz(new C.f2i(i,a0))],g)
u=i.as
t=u?i.gcjd():i.gc8F()
u=u?D.bNa:A.qp
s=B.ar(A.d.gI(d),A.d.gak(d),0.4)
s.toString
t=B.B(B.a([B.aF(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cb),B.E(B.cd(i.gui(),new C.f2j(i,a1,a0),h),1),B.aF(h,h,h,h,D.bU1,h,h,h,new C.f2k(i),h,h,h,h,"Replay",A.cb)],g),A.m,h,A.e,A.i,0,h,h)
s=i.Q
u=A.k.ac(s,1)
r=B.ar(A.d.gI(d),A.d.gak(d),0.4)
r.toString
s=C.lU(r,u+"x","Speed",2.5,0.4,new C.f2l(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.dnX[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ar(A.d.gI(d),A.d.gak(d),0.4)
r.toString
u.push(new C.eX(p.b,o===p.a,new C.f2m(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.k,q=0;q<10;++q){n=D.c6w[q]
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
d.push(B.aB(h,B.p(h,h,A.f,h,h,new B.o(h,h,new B.bK(j,j,j,j),h,h,new B.a9(A.ay,A.aE,A.x,n,h,h),A.a6),h,l,h,D.ajD,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f2n(i,n),h,h,h,h,h,h,!1,A.a4))}return C.oD(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.ey(new B.an(A.a_,h,A.b1,A.t,v,h),i.f),e,B.x(B.a([t,s,new C.hj(u,"STYLE",h),new C.hj(d,"THEME",h)],g),A.m,h,A.e,A.P,0,A.p))},
bAz(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nB[r]
p=A.k.E((1-A.eu.av(0,A.k.E((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.E(p/1.5707963267948966,0,1)
q=D.nB[r]
n=q+0.12
m=A.k.E((a0-n)/(q+0.2-n),0,1)
n=D.nB[r]
q=n-0.01
q=A.k.E((a0-q)/(n+0.03-q),0,1)
n=B.dr()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.kh(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nB[r]
h=i+0.1
if(A.k.E((a0-h)/(i+0.3-h),0,1)>0){i=D.nB[r]
h=i+0.1
h=A.k.E((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nB[r]
h=i+0.1
h=A.k.E((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cN(0,r*118,0,f,f,f,new B.kB(q,new B.iJ(n,f,A.b4,!0,f,new C.QE(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nB[r]
u=v-0.02
g=A.k.E((a0-u)/(v+0.1-u),0,1)
u=A.d.gI(w)
v=D.nB[r]
t=v+0.12
e.push(new B.cN(0,r*118-3-2,0,f,f,4,new B.mu(new C.bsb(u,g,1-A.k.E((a0-t)/(v+0.22-t),0,1),f),f,A.ax,f,f),f))}return new B.a6(a2,358,new B.an(A.a_,f,A.aa,A.f,e,f),f)},
bRi(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.uH[r]
p=A.q5.av(0,A.k.E((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.uH[r]
m=q+0.15
l=A.k.E((a0-m)/(q+0.25-m),0,1)
m=D.uH[r]
q=m-0.03
q=A.k.E((a0-q)/(m+0.01-q),0,1)
m=B.dr()
k=m.a
k.$flags&2&&B.aj(k)
k[11]=0.0011
m.jV(n,n,n,1)
m.fG(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.QE(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dr()
k.fG(3.141592653589793)
k=new B.iJ(k,f,A.A,!0,f,new C.bt3(a2,108,w,f),f)}e.push(new B.cN(0,r*130,0,f,f,f,new B.kB(q,new B.iJ(m,f,A.A,!0,f,k,f),f),f))}return new B.a6(a2,378,new B.an(A.a_,f,A.aa,A.f,e,f),f)},
cDc(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a4c[w]
l.push(A.cu.av(0,A.k.E((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bU(0,B.b4(n,n,n,new C.bvD(d.d,l,D.ayf,m,C.bsy(e,0.4,0.62),f,C.bsy(e,0.45,0.7),n),A.ax),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.h4L(g,w)
q=D.ayf[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cN(r,s-q*m*p+12,n,n,t,n,new B.kB(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.h4L(g,w)
r=D.a4c[w]
q=r+0.15
v.push(new B.cN(s,l,n,n,t,n,new B.kB(A.k.E((e-q)/(r+0.25-q),0,1),new B.y(u[w],n,A.V8,n,A.K,n,n,n,n,n,n,n),n),n))}return new B.a6(g,m+90,new B.an(A.a_,n,A.aa,A.f,v,n),n)},
bGO(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cu.av(0,C.bsy(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bU(0,B.at(B.dP(B.b4(f,f,f,new C.brC(A.d.gI(a1),C.bsy(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.efm),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.E((a3-l)/(0.12+m-l),0,1)
j=A.dx.av(0,A.k.E((o-0.7)/0.3,0,1))
l=B.dr()
m=l.a
m.$flags&2&&B.aj(m)
m[11]=0.001
l.fG(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jV(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.F(r,1):-1
w.push(new B.z(o,new B.cN(0,0,0,0,f,f,new B.ca(A.A,f,f,new B.kB(k*(0.45+0.55*o),B.dP(new B.iJ(l,f,A.A,!0,f,new C.QE(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.t(n*a5*0.34,-o*18)),f),f),f)))}A.d.aX(w,new C.f1Z())
A.d.v(a0,new B.N(w,new C.f2_(),x.fR))
return new B.a6(a5,330,new B.an(A.a_,f,A.aa,A.f,a0,f),f)},
c8A(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.uH[q]
o=A.k.E((a2-p)/(p+0.22-p),0,1)
n=A.lt.av(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.uH[q]
m=A.k.E((a2-m)/(m+0.02-m),0,1)
l=D.aAk[q]
k=B.dr()
k.mP(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jV(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.uH[q]
g=h+0.1
g=A.k.E((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cN(0,0,0,0,e,e,new B.ca(A.A,e,e,new B.kB(m,B.dP(new B.iJ(k,e,A.A,!0,e,new C.QE(d,92,w,p,j,i,0,g*s,h,e),e),new B.t(0,l)),e),e),e))
l=D.uH[q]
h=l+0.02
f=A.k.E((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cN(0,0,0,0,e,e,new B.ca(A.A,e,e,B.dP(new B.mu(new C.bbO(w,f,q,e),e,new B.av(r,212),e,e),new B.t(0,D.aAk[q])),e),e))}return new B.a6(a4,330,new B.an(A.a_,e,A.aa,A.f,a0,e),e)},
bDu(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.t(-b0,-150),new B.t(b0,-40),D.efq],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nB[r]
p=A.k.E((a8-q)/(q+0.2-q),0,1)
o=A.cu.av(0,p)
q=D.aAt[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nB[r]
f=g+0.2
e=A.k.E((a8-f)/(g+0.3-f),0,1)
f=D.nB[r]
g=f-0.01
g=A.k.E((a8-g)/(f+0.03-g),0,1)
f=B.dr()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.mP(l*h+D.dhK[r]*o)
f.fG(l*0.9)
h=0.55+0.45*o
f.jV(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cN(0,0,0,0,a3,a3,new B.ca(A.A,a3,a3,new B.kB(g,B.dP(new B.iJ(f,a3,A.A,!0,a3,new C.QE(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.t(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nB[r]
i=q+0.17
a2=A.k.E((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aAt[r]
a6.push(new B.cN(0,0,0,0,a3,a3,new B.ca(A.A,a3,a3,B.dP(new B.mu(new C.brE(A.d.gI(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.t(0,q+48-4)),a3),a3))}}return new B.a6(b0,330,new B.an(A.a_,a3,A.aa,A.f,a6,a3),a3)}}
C.bsb.prototype={
a3(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a3(w-v,0,w+v,e.b)
q=B.bu(u,A.hl)
$.S()
t=B.I()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=I.pm
d.az(q,t)
t=B.bu(u,A.hl)
q=B.I()
q.r=A.c.j(s).gp(0)
d.az(t,q)},
aw(d){return d.c!==this.c||d.d!==this.d}}
C.brC.prototype={
a3(d,e){var w,v,u=this.c,t=B.bL(e.ei(A.I),e.b*u,e.a*u)
$.S()
u=B.I()
u.b=A.ab
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=Y.It
d.dO(t,u)
u=B.I()
u.b=A.ab
u.c=2.5
u.r=w.j(0.7).gp(0)
d.dO(t,u)
u=t.cr(-14)
v=B.I()
v.b=A.ab
v.c=1
v.r=w.j(0.3).gp(0)
d.dO(u,v)},
aw(d){return!0}}
C.bbO.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ei(A.I),f=this.c,e=A.cu.av(0,f)
$.S()
w=B.I()
w.b=A.ab
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gI(u).j(0.6*v).gp(0)
d.ad(g,40+e*a0.a*0.42,w)
t=new B.e9()
t.d4(this.d*17+3)
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
C.brE.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ei(A.I)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.E(s-r*0.18,0,1)
if(q<=0)continue
p=B.bL(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.S()
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.b=A.ab
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.G()
t.drawOval(B.bH(p),n)
n.delete()}},
aw(d){return d.c!==this.c}}
C.bvD.prototype={
a3(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new B.a3(0,d0,0+c5,d0+60)
$.S()
d0=B.I()
w=c1.b
v=x.O
d0.sam(new B.a9(A.b4,A.b7,A.x,B.a([A.d.gI(w).j(0.18),A.L],v),c2,c2).aB(0,d1))
d2.aP(d1,d0)
d0=B.I()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bo(new B.t(0,c4),new B.t(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=C.h4L(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.S()
a3=new B.ap(A.R,A.N,A.U,A.V,A.S)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.mS
a4=a3.G()
t.drawOval(B.bH(new B.a3(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new B.a3(d,a1,a3,a1+a0)
a6=new B.ap(A.R,A.N,A.U,A.V,A.S)
a7=B.ar(A.d.gI(w),A.c,0.1)
a7.toString
a6.sam(new B.a9(A.b4,A.b7,A.x,B.a([a7,A.d.gak(w)],v),c2,c2).aB(0,a5))
a4=a6.G()
t.drawRect(B.bH(a5),a4)
a4.delete()
a2=a2.r
a6=B.a([],n)
a8=new B.aG(a2,A.ah,c2,c2,a6)
a6.push(new B.aY(a3,a1))
a7=a3+c8
a9=a1+c9
a6.push(new B.aq(a7,a9))
a6.push(new B.aq(a7,m))
a6.push(new B.aq(a3,c4))
a6.push(new B.bt())
a6=new B.ap(A.R,A.N,A.U,A.V,A.S)
a6.r=B.ar(A.d.gak(w),A.w,0.5).gp(0)
a4=a6.G()
a6=a8.gbw().a.snapshot()
t.drawPath((a8.e=new B.cm(a6)).a,a4)
a4.delete()
a6=B.a([],n)
b0=new B.aG(a2,A.ah,c2,c2,a6)
a6.push(new B.aY(d,a1))
a6.push(new B.aq(d+c8,a9))
a6.push(new B.aq(a7,a9))
a6.push(new B.aq(a3,a1))
a6.push(new B.bt())
a2=new B.ap(A.R,A.N,A.U,A.V,A.S)
a2.r=B.ar(A.d.gI(w),A.c,0.45).gp(0)
a4=a2.G()
a2=b0.gbw().a.snapshot()
t.drawPath((b0.e=new B.cm(a2)).a,a4)
a4.delete()
b1=new B.ap(A.R,A.N,A.U,A.V,A.S)
b1.b=A.ab
b1.c=1
b1.r=A.c.j(0.28).gp(0)
a4=b1.G()
t.drawRect(B.bH(a5),a4)
a4.delete()
a4=b1.G()
a2=a8.e
t.drawPath((a2==null?a8.e=new B.cm(a8.gbw().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.G()
a2=b0.e
t.drawPath((a2==null?b0.e=new B.cm(b0.gbw().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bh(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=B.bu(new B.a3(b7,a7,b7+r,b5),A.hl)
$.S()
b9=new B.ap(A.R,A.N,A.U,A.V,A.S)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.G()
t.drawRRect(B.el(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new B.a3(d,a1,a3,a1+28)
J.bm(t.save())
t.clipRect(B.bH(a5),$.ms()[1],!0)
$.S()
a1=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1.sam(new B.a9(A.b4,A.b7,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c2,c2).aB(0,c0))
a4=a1.G()
t.drawRect(B.bH(c0),a4)
a4.delete()
t.restore()}}},
aw(d){return!0}}
C.aO2.prototype={
aY(){this.b6()
this.b4()
this.dH()},
q(){var w=this,v=w.b5$
if(v!=null)v.a6(0,w.gdD())
w.b5$=null
w.a1()}}
C.a0T.prototype={
a5(){return"_Role."+this.b}}
C.qg.prototype={}
C.qZ.prototype={}
C.CL.prototype={}
C.ZR.prototype={}
C.af8.prototype={}
C.a15.prototype={
gY(d){return this.d}}
C.CV.prototype={}
C.ac6.prototype={}
C.acm.prototype={}
C.aef.prototype={}
C.bio.prototype={
a39(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dZ(d,"",e,g,h,f)},
b8T(d,e,f){return this.a39(d,e,f,0,0.55)},
aCe(d,e,f,g){return this.a39(d,e,f,0,g)},
b8U(d,e,f,g){return this.a39(d,e,f,g,0.55)},
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
w.aW()},
akt(d,e,f,g){var w="n"+this.ay++,v=new C.qZ(w,e,f,g)
this.a.n(0,w,v)
this.aW()
return v},
rX(d,e,f){return this.akt(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bs(w.b,new C.dnH(e))
A.d.bs(w.c,new C.dnI(e))
w.aW()},
bcI(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mR.h(0,v.b).c===D.xi)return!1
w=this.b
if(A.d.b2(w,new C.dnE(d,e)))return!1
w.push(new C.CL(d,e))
this.aW()
return!0},
c0x(d){var w
if(d.b==="beat")return D.cf6[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.aq(500)
case 2:return 1400+w.aq(2200)
default:return 450+w.aq(2000)}},
aFN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aAK[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.CV(u,t,j.ax,90))
w.push(new C.CV(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ah()*3.141592653589793*2
v.push(new C.a15(u,new B.t(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b8T(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ah()*3.141592653589793*2
p=100+w.ah()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ar(t,A.c,w.ah()*0.5)
m.toString
v.push(new C.a15(u,new B.t(o*p,n*p),m,3+w.ah()*4.5,1000+w.aq(700),j.ax))}j.f.push(new C.CV(u,t,j.ax,120))
j.aCe(120,200,"noise",0.5)
j.b8T(261.63*Math.pow(2,([7,12,16,19][w.aq(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.CV(u,t,j.ax,230))
w.push(new C.CV(u,t,j.ax+160,160))
w.push(new C.CV(u,t,j.ax+320,100))
j.b8U(180+j.at.aq(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.ac6(u,new B.t((w.ah()-0.5)*220,-260-w.ah()*180),t,j.ax))
j.b8U(300+w.aq(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ah()*3.141592653589793*2
j.w.push(new C.acm(u,u.a9(0,new B.t(Math.cos(q),Math.sin(q)).aI(0,260+w.ah()*200)),t,j.ax))
j.a39(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fL()
j.a39(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.aef(u,D.aA7[v],t,j.ax))
j.aCe(261.63*Math.pow(2,([0,5,9,12][j.at.aq(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aCe(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.cbc[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cti(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gaf(j.b),v=new B.f5(w,new C.dnF(d));v.C();)j.aAK(w.gT(0),j.ax+D.cnw[A.o.F(g.d,4)])
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
case"chance":s=j.at.aq(100)<D.cEF[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gaf(j.b),v=new B.f5(w,new C.dnG(d));v.C();)j.aAK(w.gT(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.zr(w,0,v-700)},
cti(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.ZR(e,"~"+d))},
aAK(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.af8(d.a,v,e,w))
u.push(new C.ZR(w,v))},
a6R(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a7(w).k("bc<2>")
w=B.C(new B.bc(w,v),v.k("L.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aFN(r)
u.n(0,r,o.ax+o.c0x(s))}}w=o.c
v=B.T(w).k("Z<1>")
q=B.C(new B.Z(w,new C.dnJ(o),v),v.k("L.E"))
if(q.length!==0){A.d.bs(w,new C.dnK(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.M)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b7(u,1)
for(u=A.d.gaf(v),r=new B.f5(u,new C.dnL(p));r.C();)o.aAK(u.gT(0),o.ax)}else o.aFN(u)}}A.d.bs(o.d,new C.dnM(o))
A.d.bs(o.e,new C.dnN(o))
A.d.bs(o.f,new C.dnO(o))
A.d.bs(o.w,new C.dnP(o))
A.d.bs(o.x,new C.dnQ(o))
A.d.bs(o.r,new C.dnR(o))
o.aW()},
vm(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
TU(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.h.a(A.X.aM(0,d,null))
k.a7(0)
for(o=x.j,n=J.aW(o.a(J.r(w,"nodes"))),m=k.a;n.C();){v=n.gT(n)
u=B.w(J.r(v,"k"))
if(!D.mR.aj(0,u))continue
t=B.w(J.r(v,"id"))
m.n(0,t,new C.qZ(t,u,new B.t(B.e0(J.r(v,"x"))*k.cy.a,B.e0(J.r(v,"y"))*k.cy.b),A.k.N(B.e0(J.r(v,"p")))))
s=B.cb(B.aN(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aW(o.a(J.r(w,"edges"))),n=k.b;o.C();){r=o.gT(o)
q=B.w(J.r(r,0))
p=B.w(J.r(r,1))
if(m.aj(0,q)&&m.aj(0,p))n.push(new C.CL(q,p))}k.aW()
return!0}catch(l){return!1}},
cSq(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a7(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.qZ(n,r,new B.t(q*p.a,o*p.b),s))
l.aW()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bcI(w[m.a],w[m.b])}},
gY(d){return this.cy}}
C.Gf.prototype={}
C.Wq.prototype={
R(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aFh(new C.bio(B.U(w,x.f3),v,u,t,s,r,q,p,o,B.U(w,n),B.U(w,n),B.U(w,n),B.U(w,n),A.cR,A.L,A.ax,$.au()),A.bF,A.I,A.I,A.Y,null,null)}}
C.aFh.prototype={
acT(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$acT=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.az(),$async$acT)
case 6:q=n.jT(m.r(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.erx(s))
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
return B.i($async$acT,v)},
a9R(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$a9R=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.erm(s))
u=3
w=6
return B.b(B.az(),$async$a9R)
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
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a9R,v)},
bMJ(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a7(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new B.bc(n,w).cH(0,0,new C.ero())+"|"+A.d.cH(o,0,new C.erp())
if(v===p.ch)return p.CW
u=new C.ers()
t=x.s
s=B.a([],t)
r=new C.ert(p,s,u)
for(n=new B.bc(n,w).gaf(0),w=new B.f5(n,new C.erq());w.C();){q=n.gT(0)
if(!A.d.b2(o,new C.err(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.d1(s,0,B.dB(5,"count",x.S),x.N).dm(0)},
Z(){var w,v=this
v.a2()
v.acT()
v.d.db=v.ay
w=v.qR(new C.erX(v))
w.h2(0)
v.e!==$&&B.aQ()
v.e=w},
q(){var w=this,v=w.as
if(v!=null)v.a4(0)
v=w.e
v===$&&B.c()
v.q()
v=w.d
v.S$=$.au()
v.P$=0
w.bxy()},
acp(d){return this.c_Z(d)},
c_Z(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$acp=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.az(),$async$acp)
case 6:q=m.aS(l.r(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.TU(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aXF(A.d.gI(D.azy))
if(s.c!=null)s.m(new C.erw())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$acp,v)},
aXF(d){this.d.cSq(0,d.c,d.d)
this.Eo()},
Eo(){var w=this.as
if(w!=null)w.a4(0)
this.as=B.cK(A.l5,new C.eri(this))},
axJ(d){var w,v,u,t,s=this.d.a,r=B.a7(s).k("bc<2>")
s=B.C(new B.bc(s,r),r.k("L.E"))
r=B.T(s).k("dw<1>")
s=new B.dw(s,r)
s=new B.bS(s,s.gL(0),r.k("bS<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
chc(d){var w,v,u,t,s,r=this.d.a,q=B.a7(r).k("bc<2>")
r=B.C(new B.bc(r,q),q.k("L.E"))
q=B.T(r).k("dw<1>")
r=new B.dw(r,q)
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
c_N(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mR.h(0,r.b).c===D.xi)continue
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
c8I(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hsH(new B.t(n.a+36,n.b+0),new B.t(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cB0(d){var w,v,u,t,s,r,q=this,p=q.axJ(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.f1()
u=v.b
if(u==="button"){w.aFN(p)
return}if(q.r)return
t=D.mR.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qY)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.aW()
q.Eo()
return}if(q.r)return
r=q.c8I(d)
if(r!=null){w=q.d
A.d.cA(w.b,r)
w.aW()
q.Eo()}},
civ(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.chc(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.axJ(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aF(0,d)}},
ciw(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aW()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.t(A.k.E(d.a+s.y.a,46,t.a-46),A.k.E(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aW()}}},
b1R(){var w,v,u=this
if(u.z!=null){w=u.c_N(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bcI(v,w)}else v=!1
if(v){B.kv()
u.Eo()}u.z=null
u.d.aW()}else if(u.x!=null){if(u.at)u.Eo()
u.x=null}},
ad5(d){return this.c2K(d)},
c2K(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ad5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.axJ(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jJ()
p=t.c
p.toString
w=3
return B.b(B.bV(F.ni,null,new C.erz(q),p,!0,!0,!1,A.lN,!1,!1,x.y),$async$ad5)
case 3:if(f===!0){r.W(0,s)
t.Eo()}case 1:return B.h(u,v)}})
return B.i($async$ad5,v)},
c8G(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.rX(0,d,new B.t(v.a*(0.25+u.ah()*0.5),v.b*(0.2+u.ah()*0.55)))
B.f1()
this.Eo()},
agY(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bV(F.ni,null,new C.erB(),s,!0,!0,!0,A.lN,!1,!1,x.es),$async$agY)
case 2:t=e
if(t!=null)u.aXF(t)
return B.h(null,v)}})
return B.i($async$agY,v)},
aeq(d){var w=0,v=B.j(x.H),u=this,t
var $async$aeq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cj(null,null,!0,null,new C.erl(),t,null,!0,!0,x.y),$async$aeq)
case 2:if(f===!0){u.d.a7(0)
u.Eo()}return B.h(null,v)}})
return B.i($async$aeq,v)},
B(d){var w=this,v=null,u=B.a([B.aiD(w.r?new B.bO(A.a5,v,v,new B.D(A.Gp,B.hr(D.bRU,D.fzG,new C.erV(w),v),v),v):w.c8J(),A.b5,A.iy),B.E(B.cz(new C.erW(w)),1)],x.p)
if(!w.r)u.push(w.cvM())
return B.c6(v,A.c0,B.bl(!0,B.x(u,A.m,v,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bIt(){var w=null,v=new C.ern(),u=A.w.j(0.7),t=B.m(26),s=B.J(A.bt.j(0.5),A.r,1)
return B.bU(0,B.ec(B.at(B.p(w,B.cg(B.x(B.a([D.fL8,A.au,D.fSU,A.aA,v.$4(A.pc,A.bt,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(A_.Cr,A.cp,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.la,A.c2,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.anA,A.bG,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fSb,new B.bO(A.a8,w,w,B.bN(!1,D.fIg,w,w,!0,w,w,w,this.gbIm(),w,w),w)],x.p),A.E,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,A.ag),A.f,w,A.WO,new B.o(F.ni,w,s,t,w,w,A.n),w,w,w,A.ft,Ak.akU,w,w,w),w,w,w),u,!0),0,0,0)},
c8J(){var w=this,v=null,u=B.aF(v,v,v,v,S.ny,v,v,v,new C.erH(w),v,v,v,v,v,v),t=w.a9i(A.OK,"How it works",new C.erI(w),!0),s=w.ay?A.uz:Q.Cx
return new B.D(D.bCZ,B.B(B.a([u,D.bEw,t,w.a9i(s,"Sound",new C.erJ(w),!0),w.a9i(A.e5,"Ideas",w.gcmf(),!0),w.a9i(D.Oz,"Clear",w.gc8H(w),!0),w.aOw(A.i2,"Show",new C.erK(w),!0,!0)],x.p),A.m,v,A.e,A.i,0,v,v),v)},
aOw(d,e,f,g,h){var w=null,v=h?A.bt:A.c.j(0.08),u=B.m(14),t=B.m(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(A9.w2,B.aH(!1,A.a2,!0,u,B.aO(!1,t,!0,B.hc(new B.D(new B.Q(8,8,8,8),B.B(s,A.m,w,A.e,A.P,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.aj),w)},
a9i(d,e,f,g){return this.aOw(d,e,f,g,!1)},
cvM(){var w=null,v=new C.erD(this),u=A.c.j(0.08)
return B.p(w,B.cg(B.B(B.a([v.$2("START",D.xi),v.$2("CHANGE",D.Ey),v.$2("REACT",D.qY)],x.p),A.E,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aM),A.f,w,w,new B.o(F.Bg,w,new B.bK(new B.ay(u,1,A.r,-1),A.a0,A.a0,A.a0),w,w,w,A.n),w,w,w,w,D.by5,w,w,w)},
cvN(d){var w,v,u,t,s=null,r=D.mR.h(0,d)
r.toString
w=B.m(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.J(v.j(0.5),A.r,1)
return new B.D(A.fB,B.aB(s,B.p(s,B.x(B.a([B.X(r.b,v,s,s,s,22),A.cL,B.d(r.a,s,1,A.a1,s,s,s,D.aTz,s,s,s)],x.p),A.m,s,A.e,A.P,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a9(A.b4,A.b7,A.x,u,s,s),A.n),s,s,s,s,A.ht,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.erC(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bip.prototype={
a3(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bm(b7.save())
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
b8.aP(new B.a3(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){l=w[m]
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
a0=new B.aG(e.r,A.ah,b4,b4,d)
d.push(new B.aY(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new B.kZ(h+a1,i,f-a1,g,f,g))
a2=D.mR.h(0,k.b).d
a3=D.mR.h(0,j.b).d
e=new B.ap(A.R,A.N,A.U,A.V,A.S)
e.b=A.ab
e.c=3
e.d=A.bE
d=B.a([a2.j(0.55),a3.j(0.55)],p)
g=B.rJ(new B.t(h,i),new B.t(f,g))
e.sam(new B.a9(A.a5,A.a8,A.x,d,b4,b4).aB(0,new B.a3(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.G()
i=a0.gbw().a.snapshot()
b7.drawPath((a0.e=new B.cm(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.E((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=C.hsH(new B.t(i.a+36,i.b+0),new B.t(h.a-36,h.b),a5)
$.S()
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=A.c.j(0.35).gp(0)
h.z=I.pm
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
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.a9(0,D.J4)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new B.aG($.S().r,A.ah,b4,b4,B.a([],o))
o=a8.b
a0.D(new B.aY(t,o))
i=a9.b
a0.D(new B.kZ(t+a1,o,w-a1,i,w,i))
i=B.I()
i.b=A.ab
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
i=A.dV.av(0,v)
$.S()
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.b=A.ab
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gp(0)
q=h.G()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){b1=w[m]
v=A.k.E((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=B.kA(o,i,A.dV.av(0,v))
h.toString
i=B.kA(o,i,A.dV.av(0,A.k.E(v-0.35,0,1)))
i.toString
$.S()
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.c=5
o.d=A.bE
g=b1.c
f=B.a([g.j(0),g],p)
e=B.rJ(i,h)
o.sam(new B.a9(A.a5,A.a8,A.x,f,b4,b4).aB(0,new B.a3(e.a-4,e.b-4,e.c+4,e.d+4)))
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
i.z=A.lL
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
i.z=A.lL
q=i.G()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.sam(new B.c2(V.xl,0.5,A.x,b4,0,B.a([A.c,h],p),b4,b4).aB(0,B.bY(j.a,8)))
q=i.G()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,B.M)(b5),++m){a6=b5[m]
v=A.k.E((b6-a6.d)/1000,0,1)
t=1-v
b2=C.biq(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a3(b8,new B.t(t.a-o/2,t.b-(40+60*v+p.gbb(p)/2)))}for(b5=new B.dq(n,n.r,n.e);b5.C();)b3.ci3(b8,b5.d,b6)
b7.restore()},
ci3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mR.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.E(1-(f-w)/520,0,1)
u=B.bL(e.c,64,64)
t=B.bu(u,A.iq)
s=t.eW(A.cx)
$.S()
r=B.I()
r.r=A.w.j(0.55).gp(0)
r.z=A.mS
d.az(s,r)
if(v>0){s=t.cr(6)
r=B.I()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.zC
d.az(s,r)}s=t.eW(A.cH)
r=B.I()
q=h.d
r.r=B.ar(q,A.w,0.65).gp(0)
d.az(s,r)
r=B.I()
s=B.ar(q,A.c,0.18+0.4*v)
s.toString
p=B.ar(q,A.w,0.35)
p.toString
r.sam(new B.a9(A.b4,A.b7,A.x,B.a([s,p],x.O),j,j).aB(0,u))
d.az(t,r)
r=B.I()
r.b=A.ab
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.az(t,r)
r=h.b
p=e.c
o=C.biq(B.lr(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a3(d,p.aF(0,new B.t(s/2,r.gbb(r)/2)))
n=C.biq(h.a,11,A.c,j,j,A.H)
n.a3(d,e.c.a9(0,new B.t(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aA7[A.o.F(e.d,6)]:j
h=h.c
if(h===D.qY){s=e.c.a9(0,new B.t(0,62))
r=B.I()
r.r=D.aAK[A.o.F(e.d,6)].gp(0)
d.ad(s,5,r)}else if(m!=null){l=C.biq(m,9.5,A.aB,j,j,A.Q)
l.a3(d,e.c.a9(0,new B.t(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.biq(m,9.5,A.aB,j,j,A.Q)
l.a3(d,e.c.a9(0,new B.t(-l.b.c/2,54)))}if(k.c)return
if(h!==D.xi)k.b2E(d,e.c.aF(0,D.J4),q)
k.b2E(d,e.c.a9(0,D.J4),q)},
b2E(d,e,f){var w
$.S()
w=B.I()
w.r=A.c0.gp(0)
d.ad(e,9,w)
w=B.I()
w.b=A.ab
w.c=2.2
w.r=f.gp(0)
d.ad(e,9,w)
w=B.I()
w.r=A.c.gp(0)
d.ad(e,3.5,w)},
aw(d){return!0}}
C.aNb.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.bmO.prototype={}
C.Qs.prototype={
gY(d){return this.d}}
C.WF.prototype={
R(){var w=B.a([],x.g4),v=B.a([],x.ed)
return new C.blV(new B.cB(null,x.z),w,v,A.cR,A.bF,D.Yz,null,null)}}
C.blV.prototype={
b0n(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.E(A.k.bh((1-d.b/(B.aJ(w,null,x.l).w.a.b*0.7))*10),0,9)
u=D.d5l[A.o.F(v,5)]+12*A.o.ao(v,5)+12
switch(t.z){case"glow":C.q4("synth",u,420,0.3)
break
case"rainbow":C.q4("bell",u,700,0.35)
break
case"stars":C.q4("pluck",u+12,400,0.4)
break
case"sparks":E.dZ(2400+t.r.aq(2000),"",60,0,0.18,"noise")
break
default:E.dZ(110+t.r.aq(60),"",140,0,0.22,"noise")}},
cbN(d){return this.b0n(d,!1)},
Z(){var w,v=this
v.a2()
w=v.qR(new C.eDD(v))
w.h2(0)
v.w!==$&&B.aQ()
v.w=w},
q(){var w=this.w
w===$&&B.c()
w.q()
this.bxH()},
gb29(){var w=this.Q
return w<0?new L.uG(1,A.k.F(this.y*0.18,360),0.85,1).lI():D.RN[w]},
aSW(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb29(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.ah()*3.141592653589793*2
switch(l.z){case"fire":q=v.ah()
p=l.as
o=v.ah()
n=v.ah()
m=B.ar(A.bG,A.aw,v.ah())
m.toString
j.push(new C.Qs(new B.t(u+(q-0.5)*p,t),new B.t((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.ah()*0.4),l.y,700+v.aq(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.ah()*200
n=B.ar(k,A.c,v.ah()*0.6)
n.toString
j.push(new C.Qs(d,new B.t(q*o,p*o),n,1.5+v.ah()*3,l.y,600+v.aq(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.ah()*40
j.push(new C.Qs(d,new B.t(q*o,p*o),k,1.2+v.ah()*1.8,l.y,500))}}},
b_8(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb29()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=B.a([],x.g)
r.ax=new C.bmO(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aSW(e)
r.b0n(e,!0)
r.m(new C.eDe())},
b_7(){this.ax=null
this.m(new C.eDd())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([B.aF(n,n,n,n,D.rE,n,n,n,new C.eDn(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=B.a([B.b4(n,n,n,new C.btt(k,o.f,o.y,o.at,n),A.ax)],m)
if(!o.ay&&k.length===0)j.push(D.b9z)
k=B.aB(A.c9,new B.an(A.a_,n,A.b1,A.t,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eDo(o),new C.eDp(o),new C.eDt(o),n,n,n,n,n,n,n,n,n,new C.eDu(o),new C.eDv(o),n,n,n,!1,A.a4)
j=B.a([],m)
for(w=0;w<5;++w){v=D.d2p[w]
j.push(new C.eX(v.b,o.z===v.a,new C.eDw(o,v),v.c,A.c2,n))}u=B.a([new C.JY(A.c,o.Q<0,new C.eDx(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new C.JY(D.RN[t],o.Q===t,new C.eDy(o,t),!1,n))
s=o.as
s=C.lU(A.c2,A.o.u(A.k.V(s)),"Size",36,4,new C.eDz(o),s)
r=o.ch
q=r?A.uz:Q.Cx
q=B.a([new C.eX("Sound",r,new C.eDA(o),q,A.c2,n),new C.j7(A.rC,"Undo",new C.eDq(o),A.c,n),new C.j7(D.Oz,"Clear",new C.eDr(o),A.ct,n)],m)
for(w=0;w<4;++w){p=D.dju[w]
q.push(new C.JY(p,o.at.A(0,p),new C.eDs(o,p),!1,n))}return C.oD(A.c2,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new B.ey(k,o.d),"SPARK PAINTER",B.x(B.a([new C.hj(j,"BRUSH",n),new C.hj(u,"COLOUR",n),s,new C.hj(q,n,n)],m),A.m,n,A.e,A.P,0,A.p))}}
C.btt.prototype={
a3(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.S()
w=B.I()
v=a4.e
w.r=v.gp(v)
a6.aP(new B.a3(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,B.M)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.S()
o=B.a([],t)
n=new B.aG(p.r,A.ah,a5,a5,o)
o.push(new B.aY(A.d.gI(q).a,A.d.gI(q).b))
for(p=B.T(q),m=p.k("jx<1>"),l=new B.jx(q,1,a5,m),l.ph(q,1,a5,p.c),l=new B.bS(l,l.gL(0),m.k("bS<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new B.aq(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.by(k)
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
q.b=A.ab
q.d=A.bE
q.e=A.dT
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new B.hg(A.G,p)
j=q.G()
q=n.e
u.drawPath((q==null?n.e=new B.cm(n.gbw().a.snapshot()):q).a,j)
j.delete()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.b=A.ab
q.d=A.bE
q.e=A.dT
q.c=p
q.r=o.gp(0)
j=q.G()
q=n.e
u.drawPath((q==null?n.e=new B.cm(n.gbw().a.snapshot()):q).a,j)
j.delete()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.b=A.ab
q.d=A.bE
q.e=A.dT
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.G()
q=n.e
u.drawPath((q==null?n.e=new B.cm(n.gbw().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new L.uG(1,A.o.F(i*5,360),0.85,1).lI()
o=q[i-1]
m=q[i]
$.S()
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.c=p
l.d=A.bE
l.r=h.gp(0)
j=l.G()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,B.M)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gI(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new L.uG(1,A.o.F(a3*23,360),0.7,1).lI():l
a4.c8K(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,B.M)(w),++s){a0=w[s]
e=A.k.E((t-a0.e)/a0.f,0,1)
q=a0.a
$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=S.Sh
j=p.G()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c8K(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.S(),o=B.a([],x.v),n=new B.aG(p.r,A.ah,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new B.aY(r,q)
o.push(r)
q=n.f
if(q!=null)r.by(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new B.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.by(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.D(new B.bt())
$.S()
p=B.I()
p.r=h.j(0.4).gp(0)
p.z=A.lL
d.aG(n,p)
p=B.I()
p.r=h.gp(0)
d.aG(n,p)},
aw(d){return!0}}
C.aNk.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.eg.prototype={}
C.tH.prototype={
aqU(d,e,f,g){var w=this
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
C.aaN.prototype={}
C.abT.prototype={}
C.a4X.prototype={
bey(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hj()?-1:1
v=t.ah()*3.141592653589793*2
u=f*(0.3+t.ah())
s.push(new C.aaN(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ah()*0.45));++r}},
c4U(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bs(w,new C.bOg())},
akt(d,e,f,g){var w="p"+this.c++,v=new C.tH(w,e,f,g)
v.aqU(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bs(this.b,new C.bOr(e))},
a7(d){A.d.a7(this.a)
A.d.a7(this.b)},
cJr(d,e,f,g,h){return A.d.b2(this.b,new C.bOm(e,f,g,h))},
alb(d,e,f,g){var w
if(d===f||this.cJr(0,d,e,f,g))return null
w=new C.abT(d,e,f,g)
this.b.push(w)
return w},
aBg(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zS(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
anT(d){return this.M1(d)&&!d.x&&d.cx>this.zS(d)},
b6Z(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
M1(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c90(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.zB.h(0,v)
if(w!=null)return w.a
return 100},
vm(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c4U(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.T(v).k("Z<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.M)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Z(v,new C.bOs(a2),t).cH(0,0,new C.bOt(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.U(x.N,u)
n=new C.bOv(o)
m=B.a([],x.t)
l=new C.bOu(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.M)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.M)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.U(u,u)
f=new C.bOx(g,l,n)
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
a2.b6V(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zS(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b6V(e,d,w,!0)
a2.bP1(a4)},
b6V(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.U(x.N,b3),b5=new C.bOi(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bOh(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.M)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bOk(B.U(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.M)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.c1(b7,0,!1,b3)
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
if(h)B.b8(B.dL(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.c1(b7,0,!1,b3)
a0=B.c1(b7,0,!1,b3)
k.a7(0)
j.a7(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.M)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b6Z(t)*(1+t.CW))
a4=b2.aBg(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c90(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bSg(e,a0,b8)
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
bSg(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.c1(d,0,!1,x.i)
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
t[m]=t[m]-g*u[l][m]}}}f=B.c1(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bP1(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.M)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aBg(o)/a1.b6Z(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zS(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bH6(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bey(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.u0(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.u0(o,"The "+$.qs().h(0,n).b+" got "+A.k.ac(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.u0(o,"More than 1.5 amps went through the "+$.qs().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.u0(o,"The regulator had to turn "+A.k.ac(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.ac(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.u0(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.zB.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qs().h(0,n).b
l=f.b
l=l===A.k.j3(l)?""+A.k.V(l):B.w(l)
g=f.c
g=g===A.k.j3(g)?""+A.k.V(g):B.w(g)
a1.u0(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.ac(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.f3t.t(0,n)){m=o.fx>0?A.k.E((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.E(j/0.9,0,1)
if(!o.x&&j>2.4)a1.u0(o,"The bulb got "+A.k.ac(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.E((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.u0(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.E(j/14,0,1)
break
case"motor":n=A.k.E(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.E(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.u0(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.E(i/1,0,1)
if(!o.x&&i>1)a1.u0(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.u0(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.E(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.u0(o,"The capacitor was charged to "+A.k.ac(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bH6(d){return A.d.b2(this.a,new C.bOf(d))},
u0(d,e){var w
d.x=!0
d.ay=e
this.bey(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bje(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a7(0)},
aHu(d){var w=d.b
return D.aQt.t(0,w)||D.zB.aj(0,w)||w==="buck"||w==="regulator"},
bfZ(d){var w,v=!0
if(!this.M1(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.zB.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
V9(d,e){var w=this.b
return new B.Z(w,new C.bOz(d,e),B.T(w).k("Z<1>")).gL(0)},
CH(d){var w,v
if(d.x)return!1
w=d.b
if(D.zB.aj(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
be4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qs().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aHu(d)||i.CH(d))return null
w=i.V9(d,0)
v=i.V9(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.T(u).k("Z<1>")
s=B.C(new B.Z(u,i.gcS_(),t),t.k("L.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.j3(r)?""+A.k.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.ac(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.zB.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.Me("battery"),o=J.aW(t.a),t=new B.f5(o,t.b);t.C();){n=o.gT(o)
if(n.e===1.5&&n.as<=0.02&&i.V9(n,0)+i.V9(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.Me("switch"),o=J.aW(t.a),t=new B.f5(o,t.b);t.C();)if(!o.gT(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qs().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zS(k))return"The "+$.qs().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.ac(k.cx,2)+" amps, but it can only give about "+A.k.ac(i.zS(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b2(u,new C.bOn(i,d))
h=q.b
h=h===A.k.j3(h)?""+A.k.V(h):B.w(h)
u=A.k.ac(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.ac(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.ac(Math.abs(d.dy),1)+" V). Try a bigger battery."},
Me(d){var w=this.a
return new B.Z(w,new C.bOq(d),B.T(w).k("Z<1>"))},
aH8(d){return this.Me(d).b2(0,new C.bOp(0.35))},
pZ(d,e){return A.d.b2(this.a,new C.bOo(e))}}
C.aja.prototype={
a3(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.S()
w=B.I()
w.r=F.Bi.gp(0)
c0.aP(new B.a3(0,0,b8,b9),w)
v=B.I()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.G()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,B.M)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.mh.aj(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.mh.aj(0,h.b)?(h.ch-1)*38:0
b4.cGf(c0,new B.t(k*b6+j*(42+i),l*b7),new B.t(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=C.hFw(q.a,q.b,c1)
q=b4.e
q.toString
$.S()
p=B.I()
p.r=A.ad.gp(0)
p.c=3
p.d=A.bE
c0.bo(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,B.M)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.S()
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=D.afJ.j(A.k.E(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.zC
s=g.G()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.bm(w.save())
w.translate(j,i)
h=A.k.E(A.lt.av(0,A.k.E(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.cj2(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zS(a0)){g=j+0
f=i+-40
e=Math.sin(r.d*10)
a2=$.S().r
a3=B.a([],k)
a4=new B.aG(a2,A.ah,b5,b5,a3)
a5=f-13
a3.push(new B.aY(g,a5))
a6=g+13
a7=f+10
a3.push(new B.aq(a6,a7))
a8=g-13
a3.push(new B.aq(a8,a7))
a3.push(new B.bt())
a3=new B.ap(A.R,A.N,A.U,A.V,A.S)
a3.r=A.aw.j(0.65+0.35*e).gp(0)
s=a3.G()
e=a4.gbw().a.snapshot()
w.drawPath((a4.e=new B.cm(e)).a,s)
s.delete()
e=B.a([],k)
a2=new B.aG(a2,A.ah,b5,b5,e)
e.push(new B.aY(g,a5))
e.push(new B.aq(a6,a7))
e.push(new B.aq(a8,a7))
e.push(new B.bt())
e=new B.ap(A.R,A.N,A.U,A.V,A.S)
e.b=A.ab
e.c=1.6
e.r=A.c.gp(0)
s=e.G()
e=a2.gbw().a.snapshot()
w.drawPath((a2.e=new B.cm(e)).a,s)
s.delete()
a9=new B.jR(new B.eu("!",b5,b5,A.cQ,b5,b5,b5,b5,b5,b5,new B.F(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a3,A.bZ,new B.jA(1),b5,b5,b5,b5,A.bW,b5)
a9.el()
a9.a3(c0,new B.t(g+-3,f+-8))}if(!a0.x)g=(D.aQt.t(0,h)||D.zB.aj(0,h)||h==="buck"||h==="regulator")&&!r.CH(a0)&&r.V9(a0,0)+r.V9(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.S()
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=A.aC.gp(0)
s=g.G()
w.drawCircle(j,i,10,s)
s.delete()
a9=new B.jR(new B.eu("!",b5,b5,A.cQ,b5,b5,b5,b5,b5,b5,new B.F(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a3,A.bZ,new B.jA(1),b5,b5,b5,b5,A.bW,b5)
a9.el()
a9.a3(c0,new B.t(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.mh.aj(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.S()
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.r=F.Bi.gp(0)
s=j.G()
w.drawCircle(f,g,7,s)
s.delete()
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.b=A.ab
j.c=2.4
j.r=(i&&r.bfZ(a0)?A.ct:A.ad).gp(0)
s=j.G()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bfZ(a0)){a9=new B.jR(new B.eu("+",b5,b5,A.cQ,b5,b5,b5,b5,b5,b5,new B.F(!0,A.ct,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a3,A.bZ,new B.jA(1),b5,b5,b5,b5,A.bW,b5)
a9.el()
a9.a3(c0,new B.t(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,B.M)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.E(b1.r/0.8,0,1)
j=B.ar(K.MH,F.Z3,b2)
j.toString
i=b1.f
$.S()
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=j.gp(0)
h.c=2.4
h.d=A.bE
s=h.G()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.r=j.j(0.35*b2).gp(0)
i.z=A.Si
s=i.G()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b2(q,new C.bIT())){b3=A.d.cH(q,0,new C.bIU())
$.S()
b7=B.I()
b7.r=D.bdC.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aP(new B.a3(0,0,b8,b9),b7)
a9=B.fv(b5,b5,b5,b5,D.feB,A.a3,A.bZ,b5,A.dA,A.bW)
a9.nZ(b6-24)
a9.a3(c0,new B.t(12,10))}},
qE(d,e,f,g,h){var w=null,v=B.fv(w,w,w,w,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a3,A.bZ,w,A.dA,A.bW)
v.el()
v.a3(d,f)},
cGf(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new B.aG($.S().r,A.ah,null,null,B.a([],x.v))
d.D(new B.aY(a1.a,a1.b))
w=C.hxU(a1,a2,a3)
d.D(new B.c5(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ar(A.aU,D.afJ,A.k.E(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ar(A.aQ,A.aU,A.k.E(r*1.2,0,1))
u.toString
o=u}else o=A.bn
u=B.I()
u.b=A.ab
u.c=a4?7:5
u.d=A.bE
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aG(d,u)
u=B.I()
u.b=A.ab
u.c=2.4
u.d=A.bE
u.r=(a4?A.c:o).gp(0)
a0.aG(d,u)
if(q){n=new B.Td(new B.tm(B.xs(d),!1,B.a([],x.f5))).gI(0)
m=40+A.k.E(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.il()
i=t[u].b
i===$&&B.c()
if(!(j<i.a.length()/22))break
i=k.d
v.il()
h=t[u].b
h===$&&B.c()
h=A.k.F(j*22+i*m*l,h.a.length())
v.il()
i=t[u].b
i===$&&B.c()
i=i.a.length()
v.il()
g=t[u].b
g===$&&B.c()
f=A.k.F(h+i,g.a.length())
v.il()
i=t[u].Hb(f).a
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=A.c.gp(0)
e=h.G()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
Po(d,e,f,g){var w,v,u,t
$.S()
w=B.I()
v=g?A.b4:A.a5
u=g?A.b7:A.a8
t=B.ar(e,A.w,0.3)
t.toString
w.sam(new B.a9(v,u,A.x,B.a([e,f,e,t],x.O),A.HV,null).aB(0,d))
return w},
awV(d,e,f){return this.Po(d,e,f,!0)},
c4t(d,e){return this.Po(d,A.bn,A.iv,e)},
ai2(d,e){var w,v,u
$.S()
w=B.I()
w.sam(D.aOS.aB(0,B.bY(e,4.2)))
d.ad(e,4.2,w)
w=e.a9(0,D.ehV)
v=e.a9(0,D.ei4)
u=B.I()
u.r=A.e8.gp(0)
u.c=1.2
d.bo(w,v,u)},
cj2(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.S(),c0=B.I()
c0.sam(D.c1R.aB(0,D.f09))
c0.c=3.4
c0.d=A.bE
w=B.I()
w.r=A.w.j(0.45).gp(0)
w.z=I.pm
c1.dO(D.f_Y,w)
if(c3){w=B.bu(D.f07,A.kQ)
v=B.I()
v.r=A.c.j(0.14).gp(0)
c1.az(w,v)}u=C.hdG(c2)
c1.bo(new B.t(-u,0),D.ejw,c0)
c1.bo(D.egz,new B.t(u,0),c0)
t=c2.x
w=c2.b
s=D.mh.aj(0,w)&&c2.ch!==1
if(s){J.bm(c1.a.save())
c1.bW(0,c2.ch)}switch(w){case"battery":b3.bDU(c1,c2)
break
case"solar":r=B.bu(D.f00,A.i9)
c1.az(r,b3.Po(new B.a3(r.a,r.b,r.c,r.d),A.dv,A.bO,!1))
b9=B.I()
w=B.ar(D.bhu,A.d3,0.25+0.55*c2.f)
w.toString
v=B.ar(D.bqr,A.mA,0.3+0.4*c2.f)
v.toString
b9.sam(new B.a9(A.ay,A.aE,A.x,B.a([w,v],x.O),b4,b4).aB(0,D.a8l))
c1.aP(D.a8l,b9)
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
v.r=A.cs.j(0.5).gp(0)
v.c=0.6
o=v.G()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}b9=new B.aG($.S().r,A.ah,b4,b4,B.a([],x.v))
b9.D(new B.aY(-34,18))
b9.D(new B.aq(-6+40*c2.f,-18))
b9.D(new B.aq(4+40*c2.f,-18))
b9.D(new B.aq(-24,18))
b9.D(new B.bt())
w=B.I()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aG(b9,w)
w=c2.f
b9=B.I()
b9.r=A.dP.j(0.9).gp(0)
c1.ad(D.egF,4+4*w,b9)
break
case"crank":n=B.bu(D.f_M,A.fE)
c1.az(n,b3.awV(new B.a3(n.a,n.b,n.c,n.d),A.br,A.bM))
b9=B.I()
b9.sam(D.aOT.aB(0,B.bY(A.I,12)))
c1.ad(A.I,12,b9)
m=new B.t(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.I()
b9.r=A.cs.gp(0)
b9.c=5
b9.d=A.bE
c1.bo(A.I,m,b9)
b9=B.I()
b9.sam(D.et6.aB(0,B.bY(m,7)))
c1.ad(m,7,b9)
b3.ai2(c1,D.ejo)
b3.ai2(c1,D.ego)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aG(b9,A.ah,b4,b4,B.a([],w))
v.D(new B.aY(-3,24))
v.D(new B.aq(3,24))
v.D(new B.aq(1.5,0))
v.D(new B.aq(-1.5,0))
v.D(new B.bt())
l=B.I()
l.r=A.bO.gp(0)
c1.aG(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.bm(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=B.a([],w)
j=new B.aG(b9,A.ah,b4,b4,l)
l.push(new B.aY(0,-2))
l.push(new B.c5(6,-14,2,-30))
l.push(new B.c5(-2,-14,0,-2))
l.push(new B.bt())
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.r=A.c.gp(0)
o=l.G()
l=j.gbw().a.snapshot()
v.drawPath((j.e=new B.cm(l)).a,o)
o.delete()
v.restore()}b9=B.I()
b9.sam(D.esO.aB(0,B.bY(A.I,4.5)))
c1.ad(A.I,4.5,b9)
break
case"switch":n=B.bu(D.f_T,A.mV)
b9=B.I()
b9.sam(D.ar7.aB(0,new B.a3(n.a,n.b,n.c,n.d)))
c1.az(n,b9)
b3.ai2(c1,D.T8)
b3.ai2(c1,D.aJF)
i=c2.w?D.aJF:G.aJw
b9=B.I()
b9.r=A.av.gp(0)
b9.c=6
b9.d=A.bE
c1.bo(D.T8,i,b9)
b9=B.I()
b9.r=(c2.w?A.bj:A.bO).gp(0)
b9.c=4
b9.d=A.bE
c1.bo(D.T8,i,b9)
b9=B.kA(D.T8,i,0.85)
b9.toString
w=B.I()
w.r=A.aw.gp(0)
c1.ad(b9,5,w)
break
case"fuse":h=B.bu(D.aPx,D.aOX)
b9=B.I()
b9.r=A.fi.j(0.25).gp(0)
c1.az(h,b9)
b9=B.I()
b9.b=A.ab
b9.c=1.4
b9.r=A.aB.gp(0)
c1.az(h,b9)
if(!t){b9=B.I()
b9.c=1.6
b9.r=B.ar(A.bO,A.cS,c2.fx).gp(0)
c1.bo(D.aJZ,D.aJD,b9)}else{b9=B.I()
b9.c=1.6
b9.r=A.bY.gp(0)
c1.bo(D.aJZ,D.ejS,b9)
b9=B.I()
b9.c=1.6
b9.r=A.bY.gp(0)
c1.bo(D.ehs,D.aJD,b9)
b9=B.I()
b9.r=A.dD.gp(0)
c1.ad(A.I,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=B.bL(new B.t(K.hy[g]*22,0),20,9)
w=B.bu(f,A.hA)
o=b3.Po(f,A.d1,A.oV,!0).G()
b9.drawRRect(B.el(w),o)
o.delete()}break
case"pot":b9=B.I()
b9.sam(D.esZ.aB(0,B.bY(A.I,21)))
c1.ad(A.I,21,b9)
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
b9.sam(D.esM.aB(0,B.bY(A.I,13)))
c1.ad(A.I,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=B.I()
j.r=A.aU.gp(0)
j.c=3
j.d=A.bE
c1.bo(new B.t(b9*3,w*3),new B.t(v*12,l*12),j)
break
case"resistor":a1=B.bu(D.aPx,D.aOX)
b9=B.I()
b9.sam(D.c5a.aB(0,new B.a3(a1.a,a1.b,a1.c,a1.d)))
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
b9.drawRect(B.bH(new B.a3(w,-9,w+4.5,9)),o)
o.delete()}b9=B.I()
b9.r=A.aU.gp(0)
c1.aP(D.f0l,b9)
b9=c2.r
b3.qE(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.eiS,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.I()
v.r=A.dP.j(0.55*w).gp(0)
v.z=A.zC
c1.ad(G.v_,34,v)}n=B.bL(D.efn,12,18)
c1.az(B.bu(n,A.hA),b3.Po(n,A.bn,A.e4,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.r=A.dm.gp(0)
l.c=1
o=l.G()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=B.I()
if(t)v=A.XE
else{v=B.ar(A.e4,A.hU,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.Bj
else{l=B.ar(A.dv,A.dP,c2.fx)
l.toString}w.sam(new B.c2(A.tl,0.5,A.x,b4,0,B.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).aB(0,B.bY(A.rW,17)))
c1.ad(A.rW,17,w)
w=B.I()
w.b=A.ab
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.ad(A.rW,17,w)
b9=b9.r
w=x.v
l=new B.aG(b9,A.ah,b4,b4,B.a([],w))
l.D(new B.aY(-9,-12))
l.D(new B.c5(-12,-4,-9,0))
v=B.I()
v.b=A.ab
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aG(l,v)
v=B.I()
v.r=A.cY.gp(0)
v.c=1.4
c1.bo(D.ejM,D.ejO,v)
v=B.I()
v.r=A.cY.gp(0)
v.c=1.4
c1.bo(D.ehk,D.ehn,v)
w=B.a([],w)
a4=new B.aG(b9,A.ah,b4,b4,w)
a4.D(new B.aY(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new B.aq(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.by(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.S()
b9=B.I()
b9.b=A.ab
b9.c=1.8
if(t)w=A.aS
else{w=B.ar(A.dv,D.biv,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aG(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.I()
v.r=A.aw.j(0.6*w).gp(0)
v.z=D.dzu
c1.ad(A.rW,30,v)}w=B.I()
w.r=A.e4.gp(0)
w.c=2.4
c1.bo(D.ejU,D.ejT,w)
w=B.I()
w.r=A.e4.gp(0)
w.c=2.4
c1.bo(D.ehu,D.eht,w)
b9=b9.r
w=x.v
a6=new B.aG(b9,A.ah,b4,b4,B.a([],w))
a6.D(new B.aY(-12,8))
a6.D(new B.aq(-12,-6))
a6.D(new B.c5(0,-26,12,-6))
a6.D(new B.aq(12,8))
a6.D(new B.bt())
v=B.I()
if(t)l=A.je
else{l=B.ar(A.ek,D.bka,c2.fx)
l.toString}if(t)j=A.kC
else{j=B.ar(A.jM,A.aw,c2.fx)
j.toString}v.sam(new B.a9(A.ay,A.aE,A.x,B.a([l,j],x.O),b4,b4).aB(0,D.f_d))
c1.aG(a6,v)
v=B.I()
v.b=A.ab
v.c=1.2
v.r=A.jN.gp(0)
c1.aG(a6,v)
v=B.I()
v.r=A.e7.gp(0)
c1.aP(D.f_j,v)
w=new B.aG(b9,A.ah,b4,b4,B.a([],w))
w.D(new B.aY(-7,-4))
w.D(new B.c5(-6,-12,0,-15))
b9=B.I()
b9.b=A.ab
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aG(w,b9)
break
case"motor":a7=new B.a3(-28,-14,20,14)
c1.az(B.bu(a7,A.hB),b3.awV(a7,A.al,A.aL))
b9=B.I()
b9.r=A.cq.gp(0)
c1.aP(D.eZN,b9)
b9=B.I()
b9.r=A.cs.gp(0)
c1.aP(D.eZP,b9)
b9=c1.a
J.bm(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.bm(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=B.bL(G.aJr,15,7)
v=new B.ap(A.R,A.N,A.U,A.V,A.S)
v.r=A.cS.j(0.9).gp(0)
o=v.G()
b9.drawOval(B.bH(w),o)
o.delete()
b9.restore()}w=B.I()
w.r=A.av.gp(0)
c1.ad(A.I,3,w)
b9.restore()
b3.qE(c1,"M",D.ejn,A.av,14)
break
case"buzzer":a8=B.bL(A.I,42,42)
b9=B.I()
b9.sam(D.et2.aB(0,a8))
c1.dO(a8,b9)
b9=B.I()
b9.r=A.w.gp(0)
c1.ad(A.I,6,b9)
b9=B.I()
b9.b=A.ab
b9.c=1.4
b9.r=A.aZ.gp(0)
c1.ad(A.I,6,b9)
b3.qE(c1,"+",D.ejg,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.F(w.d*14,5):0
l=B.bY(A.I,24+k*5+l)
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.b=A.ab
j.c=2
j.r=A.c2.j(v*(1-k*0.22)).gp(0)
o=j.G()
b9.drawArc.apply(b9,[B.bH(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=B.bu(D.f_P,A.hB)
w=B.I()
w.sam(D.c2P.aB(0,new B.a3(n.a,n.b,n.c,n.d)))
c1.az(n,w)
w=B.a([],x.v)
a9=new B.aG(b9.r,A.ah,b4,b4,w)
a9.D(new B.aY(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new B.c5(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.by(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.S()
w=B.I()
w.b=A.ab
w.c=10
w.r=D.bjb.j(0.5*b9).gp(0)
w.z=A.lL
c1.aG(a9,w)}$.S()
b9=B.I()
b9.b=A.ab
b9.c=3.2
b9.d=A.bE
b9.r=B.ar(A.m0,P.MA,c2.fx).gp(0)
c1.aG(a9,b9)
break
case"capacitor":a7=new B.a3(-16,-22,16,18)
b9=B.bu(a7,A.hB)
w=B.I()
w.sam(D.c1J.aB(0,a7))
c1.az(b9,w)
w=B.I()
w.r=A.bO.gp(0)
c1.aP(D.f_s,w)
for(p=0;p<4;++p){b0=new B.jR(new B.eu("\u2212",b4,b4,A.cQ,b4,b4,b4,b4,b4,b4,new B.F(!0,A.av,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a3,A.bZ,new B.jA(1),b4,b4,b4,b4,A.bW,b4)
b0.el()
b0.a3(c1,new B.t(-14,-18+p*9))}b1=new B.a3(-16,-24,16,-17)
c1.az(B.bu(b1,A.hA),b3.c4t(b1,!1))
b9=38*c2.fx
w=18-b9
$.S()
v=B.I()
v.r=A.bj.j(0.5).gp(0)
c1.aP(new B.a3(-3,w,11,w+b9),v)
b3.qE(c1,"1F",G.v_,A.c,11)
break
case"radio":a1=B.bu(D.a8l,A.fE)
b9=B.I()
b9.sam(D.c5q.aB(0,new B.a3(a1.a,a1.b,a1.c,a1.d)))
c1.az(a1,b9)
b9=B.I()
b9.b=A.ab
b9.c=1.4
b9.r=A.oV.j(0.6).gp(0)
c1.az(a1,b9)
b9=B.bu(D.f_Q,A.i9)
w=B.I()
w.r=A.dO.gp(0)
c1.az(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new B.ap(A.R,A.N,A.U,A.V,A.S)
v.r=A.m0.gp(0)
v.c=1.4
o=v.G()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=B.I()
w.r=(c2.fx>0?A.fO:A.o_).gp(0)
c1.aP(D.eZU,w)
if(c2.fx>0){w=8+A.k.F(b3.b.d*7,18)
v=B.I()
v.r=A.bx.gp(0)
v.c=1.6
c1.bo(new B.t(w,-13),new B.t(w,-3),v)}w=B.I()
w.sam(D.aOT.aB(0,B.bY(D.a7k,6)))
c1.ad(D.a7k,6,w)
w=B.I()
w.r=A.oV.gp(0)
c1.ad(D.egy,4,w)
w=B.I()
w.r=A.e4.gp(0)
w.c=1.8
c1.bo(D.egt,D.aJK,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=B.bY(D.aJK,4+k*5+A.k.F(w.d*8,5))
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.b=A.ab
l.c=1.4
l.r=A.o5.j(0.7).gp(0)
o=l.G()
b9.drawArc.apply(b9,[B.bH(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=B.bu(D.f0_,A.hB)
v=B.I()
v.r=K.nf.gp(0)
c1.az(w,v)
b2=B.bu(D.f_X,A.hA)
if(c2.fx>0&&!c2.x){b9=c1.a
J.bm(b9.save())
b9.clipRRect(B.el(b2),$.nz(),!0)
b9.translate(-33,-21)
E.h9M(c1,D.f6b,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.I()
b9.r=A.bj.gp(0)
c1.ad(D.egL,1.6,b9)}else{w=B.I()
w.r=D.vO.gp(0)
c1.az(b2,w)
b9=new B.aG(b9.r,A.ah,b4,b4,B.a([],x.v))
b9.D(new B.aY(-33,-21))
b9.D(new B.aq(-10,-21))
b9.D(new B.aq(-33,0))
b9.D(new B.bt())
w=B.I()
w.r=A.c.j(0.05).gp(0)
c1.aG(b9,w)}b9=B.I()
b9.r=A.br.gp(0)
c1.aP(D.f_i,b9)
break}C.ihP(c1,c2,b3.b.d,b3.gc91())
if(t)b3.qE(c1,"\u2716",D.ejX,A.aw,14)
if(s)c1.a.restore()},
bDU(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new B.a3(-28,-13,28,13)
d.az(B.bu(w,A.mV),m.awV(w,A.dv,A.jb))
v=new B.a3(-22,-13,22,13)
$.S()
u=B.I()
u.sam(D.ar0.aB(0,v))
d.aP(v,u)
u=B.I()
u.r=A.dY.gp(0)
d.aP(D.f_C,u)
t=new B.a3(28,-5,34,5)
d.az(B.bu(t,A.hl),m.Po(t,A.dv,A.iv,!0))
m.qE(d,"+",D.eg9,A.aU,11)
m.qE(d,"\u2212",D.ejp,A.ad,11)
m.qE(d,B.w(l===A.k.j3(l)?A.k.V(l):l)+"V",D.ej5,A.aU,13)
if(l===1.5){u=B.I()
u.r=A.bA.gp(0)
d.aP(D.f_B,u)
u=e.as
s=B.I()
s.r=B.ar(A.aw,A.bj,u).gp(0)
d.aP(new B.a3(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qE(d,"FLAT",D.eiR,A.ct,9)}if(l>2){u=B.I()
u.r=A.aZ.gp(0)
u.c=1
d.bo(D.efw,D.aJk,u)
m.qE(d,l>3?"3 cells":"2 cells",D.ej4,A.aB,8)}}else if(l<=9){r=new B.a3(-22,-17,22,17)
u=B.bu(r,A.mV)
$.S()
s=B.I()
s.sam(D.c4Y.aB(0,r))
d.az(u,s)
s=B.I()
s.r=A.cV.gp(0)
d.aP(D.f_D,s)
for(u=d.a,q=0;q<2;++q){p=F.aAs[q]
s=p<0?5:3.6
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.sam(D.aOS.aB(0,B.bY(new B.t(p,-18),5)))
n=o.G()
u.drawCircle(p,-18,s,n)
n.delete()}m.qE(d,"9V",D.eiY,A.c,16)}else{r=new B.a3(-34,-16,34,16)
u=B.bu(r,A.i9)
$.S()
s=B.I()
s.sam(D.ar0.aB(0,r))
d.az(u,s)
s=B.I()
s.r=A.bG.gp(0)
d.aP(D.f_Z,s)
for(u=d.a,q=0;q<2;++q){s=B.bu(B.bL(new B.t(F.a56[q],-20),8,10),A.hl)
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=A.cs.gp(0)
n=o.G()
u.drawRRect(B.el(s),n)
n.delete()}m.qE(d,"+",D.egi,A.aw,10)
m.qE(d,"12V",D.ej1,A.av,15)}},
aw(d){return!0}}
C.mK.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a7(k)
A.d.a7(d.b)
w=B.U(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.M)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.tH(o,r,q,p)
n.aqU(o,r,q,p)
k.push(n)
J.iw(s[4],new C.cqO(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.M)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.alb(m,u[1],l,u[3])}}}
C.aj8.prototype={
R(){var w=x.N
return new C.aj9(A.I,A.ax,B.U(w,x.gl),B.aX(w),$,A.bF,0,B.a([],x.X),null,null)}}
C.aj9.prototype={
aeB(d){var w=this,v=w.as
if(v!=null)v.a4(0)
w.m(new C.bIx(w,d))
w.as=B.cK(A.lC,new C.bIy(w))},
q(){var w=this.as
if(w!=null)w.a4(0)
w=this.ch
if(w!=null)w.a4(0)
this.btL()},
a0m(d,e){return this.cgY(d,e)},
b1k(d){return this.a0m(d,!1)},
cgY(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a0m=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.rp:A.y6
p=d.b
w=3
return B.b(E.ha4(s,r,p,d.ax<3.2,q,$.qs().h(0,p).b),$async$a0m)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a0m,v)},
ctG(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.at.c4(0,d.a,new C.bIz()),t=J.cE(u)
t.M(u,v)
t.bs(u,new C.bIA(v))
if(t.gL(u)>=4){t.a7(u)
t=w.ch
if(t!=null)t.a4(0)
w.a1G(d)
return}if(t.gL(u)===3){t=w.ch
if(t!=null)t.a4(0)
w.ch=B.cK(A.iU,new C.bIB(w,u,d))}},
a02(d){return this.cfk(d)},
cfk(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a02=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.ij_(s,d.b,A.k.V(A.k.F(t.a.c.d*0.12,1)*100)),$async$a02)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$a02,v)},
a1G(d){return this.crd(d)},
crd(d){var w=0,v=B.j(x.H),u=this,t
var $async$a1G=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bV(F.lA,null,new C.bIv(u,d),t,!0,!0,!1,A.k2,!1,!1,x.H),$async$a1G)
case 2:return B.h(null,v)}})
return B.i($async$a1G,v)},
Z(){this.a2()
this.bg8()
this.pd()},
bg8(){this.a.c.e=new C.bIQ(this)},
q9(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vm(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
r=D.mh.h(0,s.b)
if((r==null?null:r.b)!==D.A1)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.M(0,s.a)
q.a0m(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)E.dZ(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)E.dZ(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cR.ah()<0.5
else u=!1
if(u)E.dZ(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){E.dZ(900+A.cR.aq(800),"",90,0,0.1,o)
if(A.cR.ah()<0.35)E.dZ(300+A.cR.aq(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cR.ah()<0.4
else u=!1
if(u)E.dZ(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)E.dZ(330+A.o.F(110*A.k.bh(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)E.dZ((A.k.bh(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)E.dZ(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)E.dZ(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cR.ah()<0.5
else u=!1
if(u)E.dZ(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)E.dZ(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)E.dZ(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new C.bIR())},
b8l(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.M)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.mh.aj(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.z(p,n)
r=i}}}return s},
b2_(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.T(w).k("dw<1>"),w=new B.dw(w,v),w=new B.bS(w,w.gL(0),v.k("bS<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.mh.aj(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cGg(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.M)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.mh.aj(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.mh.aj(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hxU(new B.t(k,n),new B.t(i,l),p)
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
aez(){this.a.toString
this.m(new C.bI0())},
bqt(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.d7y[v]
if(!A.d.b2(p.a.c.a,new C.bIS(u,w))){o=new B.t(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?M.J6:o
s=s?M.J6:o
q=t.akt(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dZ(1200,"",50,0,0.3,"tri")
p.aez()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.Rw[v].a)
u=w.length
t=u>8
s=t?A.d.ds(w,0,A.o.ao(u+1,2)):w
r=t?A.d.fK(w,A.o.ao(w.length+1,2)):A.Y
q=n.a.d
if(q!=null){w=B.a7(q).k("cv<1>")
w=B.C(new B.cv(q,w),w.k("L.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.M)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b1Q(s,!0))
n.a.toString
if(t)w.push(n.b1Q(r,!0))
w.push(B.E(B.cz(new C.bIP(n,q,m)),1))
return B.x(w,A.m,null,A.e,A.i,0,A.p)},
b1Q(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.M)(d),++v){u=d[v]
t=$.qs()
s=t.h(0,u).d.j(0.14)
r=new B.aP(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aB(p,B.p(p,B.x(B.a([new B.y(t.h(0,u).c,p,A.Aj,p,p,p,p,p,p,p,p,p),new B.y(t.h(0,u).b,p,A.nH,p,p,p,p,A.a1,p,1,p,p)],n),A.m,p,A.b8,A.i,0,A.p),A.f,p,p,new B.o(s,p,new B.bK(q,q,q,q),new B.bg(r,r,r,r),p,p,A.n),p,p,p,F.u0,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bI1(this,u),p,p,p,p,p,p,!1,A.a4))}return B.p(p,B.cf(m,p,A.h4,p,p,A.aM,!1),A.f,p,p,new B.o(F.Bg,p,new B.bK(A.a0,A.a0,new B.ay(o,1,A.r,-1),A.a0),p,p,p,A.n),p,58,p,p,p,p,p,p)},
b_f(d){var w=null,v=B.m(18)
return B.p(w,d,A.f,w,w,new B.o(F.ael,w,B.J(A.bA,A.r,1),v,w,w,A.n),w,w,w,w,F.ak5,w,w,w)},
cj3(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qs().h(0,o),m=d.dy,l=d.fr,k=new C.bIk(q,n),j=B.d(n.c,p,p,p,p,p,p,A.K9,p,p,p),i=n.b,h=n.d,g=x.p
i=B.B(B.a([j,A.ac,B.E(B.d(i,p,p,p,p,p,p,B.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aF(p,p,p,p,D.bTN,p,p,p,new C.bI7(q,d),p,p,p,p,"Remove part",A.cb),B.aF(p,p,p,p,A.Hq,p,p,p,new C.bI8(q),p,p,p,p,p,A.cb)],g),A.m,p,A.e,A.i,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,F.Ec,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.fnI,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.ac(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.ac(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.ac(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.au,w,A.an,B.d(m,p,p,p,p,p,p,B.l(p,p,d.x?A.ct:A.aU,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.be4(d)
if(v!=null){l=(d.x?A.aw:A.aC).j(0.14)
j=B.m(10)
i=B.J((d.x?A.aw:A.aC).j(0.5),A.r,1)
m.push(new B.D(A.hZ,B.p(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fus,p,p,p),A.f,p,p,new B.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cj,p,p,p),p))}if(C.h7Q(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new C.eX("CH "+t,d.at===u,new C.bI9(q,d,u),p,h,p))}l=B.bX(A.bC,l,A.bq,p,4,6)
l=B.a([A.an,l,A.au,B.d(q.a.c.CH(d)?"Showing: "+F.R7[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hn,p,p,p)],g)
if(q.a.c.CH(d))l.push(new C.j7(A.GW,"Open big screen",new C.bIc(q,d),h,p))
A.d.v(m,l)}if(D.mh.aj(0,o)&&!C.h7Q(o)){l=B.a([A.an,B.d(q.a.c.CH(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hn,p,p,p)],g)
if(q.a.c.CH(d))l.push(new C.j7(A.OP,"Open the "+$.qs().h(0,o).b,new C.bId(q,d),h,p))
A.d.v(m,l)}if(D.mh.aj(0,o))A.d.v(m,B.a([A.an,new C.j7(A.Cm,"Make it bigger (or tap it 4 times)",new C.bIe(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.ac(d.db,1)
if(q.a.c.CH(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.an,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.ac(i,1)+" V",p,p,p,p,p,p,D.foz,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dpp[s]
j=r===A.k.j3(r)?A.k.V(r):r
l.push(new C.eX(B.w(j)+" V out",d.e===r,new C.bIf(q,d,r),p,h,p))}i.push(new B.D(A.l6,B.bX(A.bC,l,A.bq,p,0,6),p))}if(o==="regulator")i.push(D.fNv)
A.d.v(m,i)}if(q.a.c.M1(d)&&!d.x){l=A.k.ac(d.cx,2)
j=A.k.ac(q.a.c.zS(d),2)
i=q.a.c
w=i.anT(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.l(p,p,i.anT(d)?A.ct:A.et,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.m(4)
w=A.k.E(d.cx/q.a.c.zS(d),0,1)
i=q.a.c.anT(d)?A.aw:A.bj
m.push(new B.D(A.hZ,B.x(B.a([l,A.cL,B.bx(j,B.kx(A.bA,p,p,5,p,w,new B.m6(i,x.B)),A.ap)],g),A.E,p,A.e,A.i,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.hZ,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.fif,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dex[s]
j=r===1.5?"1.5 V (rechargeable)":B.w(r)+" V"
l.push(new C.eX(j,d.e===r,new C.bIg(q,d,r),p,h,p))}m.push(B.bX(A.bC,l,A.bq,p,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.d4L[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new C.eX(j,d.r===r,new C.bIh(q,d,r),p,h,p))}m.push(B.bX(A.bC,l,A.bq,p,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bIi(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bIj(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bIa(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bIb(d)))
if(o==="crank")m.push(D.fIQ)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hn,p,p,p))
return q.b_f(new B.cU(D.b34,B.cg(B.x(m,A.E,p,A.e,A.P,0,A.p),A.t,p,A.y,p,p,p,p,A.ag),p))}}
C.bcb.prototype={}
C.VD.prototype={
R(){return new C.aEi(C.hdF(),new B.cB(null,x.gJ),B.aX(x.S))}}
C.aEi.prototype={
Z(){this.a2()
$.aV.bZ$.push(this)
this.aeA()},
aeA(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fCV(),$async$aeA)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.iic(t.d,r)
if(s!=null){t.m(new C.dXz(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$aeA,v)},
F9(){var w,v=this
if(!v.as)return
w=C.i8C(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bFd(w)},
je(d){if(d!==A.fK)this.F9()},
q(){$.aV.hP(this)
this.F9()
this.a1()},
c93(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.T(v).k("Z<1>")
t=new B.Z(v,new C.dXI(q),u).gL(0)
s=new B.Z(v,new C.dXJ(),u).gL(0)
r=new B.Z(v,w.gcVB(),u).gL(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.dXK(q,t,s,r))}if(A.o.F(q.w,45)===0)q.F9()
if(A.o.F(q.w,10)===0){w=q.f
$.ail()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.ail()[q.f].c.$1(q.d)){w.M(0,q.f)
C.Ji("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.dXL())
q.F9()
w=q.c
w.toString
w=B.XV(w)
if(w!=null)w.U(B.b3(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.ail()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.m4,p,p,p,p,p,p,p,p,p,p))}},
ahj(){var w=0,v=B.j(x.H),u=this,t
var $async$ahj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cj(null,null,!0,null,new C.dXy(u),t,null,!0,!0,x.H),$async$ahj)
case 2:return B.h(null,v)}})
return B.i($async$ahj,v)},
b_e(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.m(12),t=B.J(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.p(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.aB(w,B.hc(new B.a6(40,38,new B.an(A.a_,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b_d(d,e,f,g){return this.b_e(d,e,f,g,null)},
arA(d,e,f,g){var w=null,v=f.j(0.1),u=B.m(10),t=B.J(f.j(0.4),A.r,1)
return B.E(B.aB(w,B.p(w,B.B(B.a([B.X(d,f,w,w,w,15),A.en,new B.ds(1,A.cn,B.d(e,w,1,A.a1,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b8,A.i,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
afE(){var w=0,v=B.j(x.H),u=this,t
var $async$afE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a4(t,!1).cc(B.dW(new C.dXu(u),!1,null,x.H)),$async$afE)
case 2:t=u.e.gbl()
if(t!=null)t.bg8()
if(u.c!=null)u.m(new C.dXv())
u.F9()
return B.h(null,v)}})
return B.i($async$afE,v)},
bH_(){var w,v,u,t,s=null,r=this.f
$.ail()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.be:A.aw
u=B.m(9)
t=B.J(F.Bg,A.r,1.5)
return B.p(s,B.at(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.wZ,s,s,s),s,s,s),A.f,s,D.b3b,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.f_,s,s,s)},
aiq(){var w=0,v=B.j(x.H),u=this,t
var $async$aiq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bV(F.lA,null,new C.dXH(u),t,!0,!0,!0,A.k2,!1,!1,x.H),$async$aiq)
case 2:return B.h(null,v)}})
return B.i($async$aiq,v)},
c94(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aB(r,B.p(r,D.bV3,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dXN(d),r,r,r,r,r,r,!1,A.a4),o=B.m(11)
o=B.p(r,D.b8Z,A.f,r,r,new B.o(A.bo,r,B.J(A.aQ.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.x(B.a([B.B(B.a([p,A.ac,o,A.ac,B.E(B.x(B.a([D.fLu,B.d(w,r,1,A.a1,r,r,r,B.l(r,r,s.y>0||s.z>0?A.eP:A.hf,r,r,r,r,r,r,r,r,11.5,r,r,A.Q,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.i,0,A.p),1),new C.ayg(s.gcf1(),r),A.t5,s.b_d(A.yL,"Construction Lab: real 3D wiring, plumbing and a house",A.cS,new C.dXO(s,d)),s.b_e(A.lF,"Challenges",A.aU,s.gcwe(),s.bH_()),s.b_d(A.OK,"How to play",A.aQ,new C.dXP(d,e))],v),A.m,r,A.e,A.i,0,r,r),A.an,B.B(B.a([s.arA(A.oj,"Circuits",A.bw,s.gcp4()),A.bm,s.arA(A.p9,"Repair",A.aU,new C.dXQ(s)),A.bm,s.arA(D.Oz,"Clear",A.ct,new C.dXR(s))],v),A.m,r,A.e,A.i,0,r,r)],v),A.m,r,A.e,A.P,0,A.p),A.f,r,r,new B.o(F.Bg,r,new B.bK(A.a0,A.a0,new B.ay(q,1,A.r,-1),A.a0),r,r,r,A.n),r,r,r,r,D.bDN,r,r,r)},
B(d){var w=this,v=null
$.asx="tech"
return B.c6(v,A.c0,B.bl(!0,B.x(B.a([w.c94(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hcv(w.d,w.e,w.gc92(),v),1)],x.p),A.m,v,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
C.ayg.prototype={
R(){return new C.bal(null,null)}}
C.bal.prototype={
gaxN(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.Z,null,1,null,v)
w.cM(0)
v.d!==$&&B.bI()
v.d=w
u=w}return u},
q(){this.gaxN().q()
this.bv7()},
B(d){var w=null,v=this.a.c
return B.aB(w,B.hc(new B.a6(42,42,B.cd(this.gaxN(),new C.cHY(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bak.prototype={
a3(d,e){var w,v,u,t=null,s=e.ei(A.I),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.S()
w=B.I()
w.r=A.b6.j(0.25+0.15*o).gp(0)
w.z=I.pm
d.ad(s,r+2+o*2,w)
w=B.I()
w.sam(D.esY.aB(0,B.bY(s,r)))
d.ad(s,r,w)
v=B.I()
v.b=A.ab
v.c=2.2
v.sam(new B.fY(A.A,0,6.283185307179586,A.x,D.cWL,t,new B.my(p)).aB(0,B.bY(s,r)))
d.ad(s,r,v)
p=new C.cHX(d)
p.$3(s.a9(0,A.rW),8+o*1.5,1)
q*=4
p.$3(s.a9(0,D.ehG),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a9(0,D.ek2),2.6,0.5+0.5*Math.cos(q))
u=B.fv(t,t,t,t,D.feH,A.a3,A.bZ,t,A.dA,A.bW)
u.el()
u.a3(d,s.a9(0,new B.t(-u.b.c/2,5)))},
aw(d){return d.b!==this.b}}
C.ayA.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.ayB.prototype={
q(){var w,v,u
for(w=this.iM$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iL$
w===$&&B.c()
w.q()
this.btK()}}
C.aKR.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.byC.prototype={}
C.fR.prototype={}
C.JM.prototype={
a5(){return"ScreenStyle."+this.b}}
C.mh.prototype={}
C.Vm.prototype={
R(){return new C.bkQ(null,null)}}
C.bkQ.prototype={
ga9P(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.oe,null,1,null,v)
w.cq(0)
v.d!==$&&B.bI()
v.d=w
u=w}return u},
q(){this.ga9P().q()
this.bwW()},
gSe(){var w=this.ga9P().y
w=w==null?null:A.o.ao(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.mh.h(0,this.a.c)
if(v==null)v=D.aPP
return B.c6(w,T.YL,B.bl(!0,new B.an(A.a_,w,A.aa,A.t,B.a([B.at(v.b===D.A2?this.bJ7(v):this.clQ(v),w,w,w),B.ao(w,B.aF(w,w,w,w,A.mO,w,w,w,new C.dTY(d),w,w,w,B.nI(w,A.aS,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ao(6,B.at(B.d(v.a,w,w,w,w,w,w,D.fgl,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c95(d){var w
A:{if(D.Ju===d){w=0.46153846153846156
break A}if(D.v9===d){w=0.45
break A}if(D.wO===d){w=0.9259259259259258
break A}if(D.TO===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
clQ(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.Ju
A:{if(D.Ju===p){w=44
break A}if(D.v9===p){w=30
break A}if(D.wO===p){w=22
break A}if(D.TO===p){w=26
break A}w=14
break A}v=B.cd(this.ga9P(),new C.dTX(this,w,d,o),q)
if(p===D.a8u)v=new B.Bn(D.bEp,v,q)
p=this.c95(p)
u=o?4:5
t=d.c
s=B.ar(t,A.c,o?0.25:0.08)
s.toString
r=B.ar(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.m(w)
s=B.a([new B.ac(0,A.G,d.d.j(0.28),A.I,36)],x.V)
return new B.fE(p,B.p(q,B.p(q,v,A.f,q,q,new B.o(A.w,q,q,B.m(w-3),q,q,A.n),q,q,q,q,A2.Gr,q,q,q),A.f,q,q,new B.o(q,q,q,t,s,new B.a9(A.ay,A.aE,A.x,r,q,q),A.n),q,q,q,D.bxW,new B.Q(u,u,u,u),q,q,q),q)},
b7u(d){var w,v,u,t=null,s=new B.V(Date.now(),0,!1),r=A.o.E(this.a.d+A.k.bh(this.gSe()*0.4),0,100),q=d.b===D.Ju,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.aS(A.o.u(B.de(s)),2,"0")+":"+A.a.aS(A.o.u(B.fP(s)),2,"0"),t,t,t,t,t,t,A.tc,t,t,t),A.b0],x.p)
for(w=0;w<4;++w){v=new B.aP(1,1)
n.push(B.p(t,t,A.f,t,t,new B.o(A.c,t,t,new B.bg(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bE7,t,t,t,3))}n.push(A.dc)
n.push(D.fE6)
n.push(A.bm)
v=B.J(A.ad,A.r,1)
u=B.m(4)
n.push(B.p(t,new B.bO(A.a5,t,t,B.BA(A.A,B.p(t,t,A.f,t,t,new B.o(A.bj,t,t,B.m(2),t,t,A.n),t,t,t,A2.Gr,t,t,t,t),t,r/100),t),A.f,t,t,new B.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qK)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fuP,t,t,t))
return new B.D(new B.Q(p,12,o,2),B.B(n,A.m,t,A.e,A.i,0,t,t),t)},
avL(d,e,f){var w,v=null,u=d.d,t=B.ar(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.m(e*0.26)
w=x.p
t=B.a([B.p(v,B.at(B.d(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.dkr,new B.a9(A.ay,A.aE,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,B.a([A.au,B.d(d.a,v,1,A.a1,v,v,v,D.fl9,v,v,v)],w))
return B.aB(v,B.x(t,A.m,v,A.e,A.P,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dTT(this,d),v,v,v,v,v,v,!1,A.a4)},
c_v(d,e){return this.avL(d,e,!0)},
c_c(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.TO||n===D.wO,l=d.d,k=B.ar(l,A.w,0.55)
k.toString
l=B.ar(l,A.ka,0.5)
l.toString
l=B.a([k,A.du,l],x.O)
k=p.b7u(d)
w=m?190:138
v=B.m(24)
u=B.J(A.aZ,A.r,1)
w=B.aB(o,B.p(o,B.bx(B.m(23),B.b4(o,o,o,new C.af1(0,p.gSe(),o),A.fF),A.ap),A.f,o,o,new B.o(o,o,u,v,o,o,A.n),o,w,o,A.hL,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dTR(p),o,o,o,o,o,o,!1,A.a4)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.kl[s]
t.push(new B.ca(A.A,o,o,p.c_v(r,m?58:54),o))}k=B.a([k,A.an,w,A.ae,B.E(B.ki(0.92,t,v,8,12,A5.vY,o,!1),1)],u)
if(n!==D.a8u){n=A.c.j(0.16)
w=B.m(28)
u=B.a([],u)
for(v=B.d1(F.kl,0,B.dB(4,"count",x.S),x.gD),t=v.$ti,v=new B.bS(v,v.gL(0),t.k("bS<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.avL(q==null?t.a(q):q,50,!1))}k.push(B.p(o,B.B(u,A.m,o,A.qy,A.i,0,o,o),A.f,o,o,new B.o(n,o,o,w,o,o,A.n),o,o,o,D.byN,G.alA,o,o,o))}return B.p(o,B.x(k,A.m,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(o,o,o,o,o,new B.a9(A.ay,A.aE,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bCx(d,e){var w=null
return B.p(w,B.x(B.a([this.b7u(d),B.E(B.b4(w,w,w,new C.af1(e,this.gSe(),w),A.fF),1),B.aB(w,B.p(w,B.at(B.d(F.kl[e].a,w,w,w,w,w,w,A.K0,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dTM(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.m,w,A.e,A.i,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bJ7(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.ar(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.m(r?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.I,36)],x.V)
return new B.fE(1.5384615384615383,B.p(t,B.cd(this.ga9P(),new C.dTP(this,r,d),t),A.f,t,t,new B.o(t,t,t,v,u,new B.a9(A.ay,A.aE,A.x,w,t,t),A.n),t,t,t,D.bDI,new B.Q(8,8,8,s),t,t,t),t)}}
C.bwG.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.S()
w=B.I()
v=this.c
u=B.ar(v,A.w,0.6)
u.toString
t=B.ar(v,A.ka,0.4)
t.toString
w.sam(new B.a9(A.ay,A.aE,A.x,B.a([u,A.du,t],x.O),null,null).aB(0,new B.a3(0,0,n,m)))
d.aP(new B.a3(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=v.j(0.1).gp(0)
r.z=D.dzy
q=r.G()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
aw(d){return!0}}
C.af1.prototype={
a3(d,e){return E.S5(d,e,this.b,this.c)},
aw(d){return!0}}
C.aMB.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.bvt.prototype={}
C.a8O.prototype={
B(d){var w=null
return B.c6(B.eI(w,w,w,!0,!0,D.agL,w,1,!0,w,0,!1,w,!1,w,w,B.aF(w,w,w,w,D.apY,w,w,w,new C.ckw(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fUq,w,w,w,1,w,!0),D.agL,B.cf(B.a([D.elv,B.cz(new C.ckx())],x.p),w,D.bzR,w,w,A.ag,!1),w,!1,!1,w,w)}}
C.WX.prototype={
R(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aFK(w,new B.as(A.ar,$.au()),$,A.bF,0,B.a([],x.X),null,null)}}
C.aFK.prototype={
Z(){this.a2()
this.pd()},
b5q(d){var w=this.d.length
return A.o.F(A.k.bh(A.k.F(A.k.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
q9(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b5q(v.f)
if(w!==v.x){v.x=w
C.q4("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eO1(v))
C.Ji("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cap(){if(this.d.length<2)return
this.m(new C.eNY(this))},
b_I(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eNX(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcao(),p=s.d,o=B.E(B.aB(r,B.b4(r,r,r,new C.bwS(p,s.f,r),A.fF),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a6(r,40,B.at(B.d(n,r,r,r,r,r,r,D.fsT,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.i,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.azE[A.o.F(v,8)].j(0.9)
t=new B.aP(20,20)
o.push(B.aB(r,B.p(r,new B.y(p[v],r,D.fs7,r,r,r,r,r,r,r,r,r),A.f,r,r,new B.o(u,r,r,new B.bg(t,t,t,t),r,r,A.n),r,r,r,A.fB,A.h6,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eO_(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return C.oD(A.aU,A.fv,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new C.hj(o,r,r),B.B(B.a([B.E(B.aL(r,A.Y,!1,r,!0,A.t,r,B.aM(),s.e,r,r,r,r,r,2,B.br(r,new B.b5(4,B.m(14),A.a0),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.jq,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ai,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eO0(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.d9,!0,A.a3,r,A.am,r,r,r,r),1),A.ac,new C.j7(A.hM,"Add",s.gcam(s),A.c,r),A.bm,new C.j7(A.oi,"Spin",q,A.bj,r)],w),A.m,r,A.e,A.i,0,r,r)],w),A.m,r,A.e,A.P,0,A.p))}}
C.bwS.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new B.t(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.S()
w=B.I()
w.r=D.bff.gp(0)
a1.ad(d,f,w)
w=B.I()
w.b=A.ab
w.c=3
w.r=A.aU.gp(0)
a1.ad(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=B.bY(d,a0)
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
n.r=D.azE[A.o.F(q,8)].gp(0)
m=n.G()
n=p*57.29577951308232
f.drawArc.apply(f,[B.bH(o),n,s,!0,m])
m.delete()
o=B.bY(d,a0)
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.b=A.ab
l.c=2
l.r=A.c.j(0.6).gp(0)
m=l.G()
f.drawArc.apply(f,[B.bH(o),n,s,!0,m])
m.delete()
J.bm(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.ar(o,0,11)+"\u2026"
k=new B.jR(new B.eu(o,i,i,A.cQ,i,i,i,i,i,i,D.ffu),A.a3,A.bZ,new B.jA(1),i,i,i,i,A.bW,i)
k.el()
o=k.b
n=o.c
o=o.a.c
k.a3(a1,new B.t(a0-n-16,-o.gbb(o)/2))
f.restore()}f=B.I()
f.r=D.agn.gp(0)
a1.ad(d,20,f)
f=B.I()
f.b=A.ab
f.c=3
f.r=A.aU.gp(0)
a1.ad(d,20,f)
j=new B.aG(h.r,A.ah,i,i,B.a([],x.v))
e-=a0
j.D(new B.aY(g,e+26))
e-=10
j.D(new B.aq(g-14,e))
j.D(new B.aq(g+14,e))
j.D(new B.bt())
e=B.I()
e.r=A.c.gp(0)
a1.aG(j,e)
e=B.I()
e.b=A.ab
e.c=2
e.r=A.aS.gp(0)
a1.aG(j,e)},
aw(d){return!0}}
C.VL.prototype={
R(){return new C.bkZ($,A.bF,0,B.a([],x.X),null,null)}}
C.bkZ.prototype={
Z(){this.a2()
this.pd()},
q9(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.Ji("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.a5G(900,new C.e_g())}w.m(new C.e_h())},
b_K(d){return this.m(new C.e_b(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aS(A.o.u(A.k.ao(m,60)),2,"0")
v=A.a.aS(A.o.u(A.o.F(A.k.dd(m),60)),2,"0")
m=B.b4(n,n,n,new C.brD(l,A.ct,n),A.aR7)
u=B.d(w+":"+v,n,n,n,n,n,n,D.fk5,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a6(280,280,new B.an(A.A,n,A.aa,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.fj4,n,n,n),A.au,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.vf,n,n,n)],s),A.m,n,A.e,A.P,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dho[r]
u.push(new C.eX(""+q+" min",o.d===q,new C.e_d(o,q),n,A.ct,n))}m=o.f
p=m?A1.yT:A.i2
m=m?"Pause":"Start"
return C.oD(A.ct,A.fv,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new C.hj(u,n,n),new C.hj(B.a([new C.j7(p,m,new C.e_e(o),A.bj,n),new C.j7(A.ol,"Reset",new C.e_f(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.P,0,A.p))}}
C.brD.prototype={
a3(d,e){var w,v,u,t,s=e.ei(A.I),r=e.a/2-14
$.S()
w=B.I()
w.b=A.ab
w.c=16
w.r=A.c.j(0.08).gp(0)
d.ad(s,r,w)
w=B.bY(s,r)
v=B.I()
v.b=A.ab
v.c=16
v.d=A.bE
u=this.c
t=B.ar(u,A.c,0.4)
t.toString
v.sam(new B.fY(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aB(0,B.bY(s,r)))
d.e3(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aw(d){return d.b!==this.b}}
C.UY.prototype={
R(){return new C.bkC($,A.bF,0,B.a([],x.X),null,null)}}
C.bkC.prototype={
Z(){this.a2()
this.pd()},
q9(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Sb.h(0,p.d)
w.toString
v=A.d.fb(w,new C.dLC())
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
C.q4("flute",D.c6a[t]+5,1400,0.35)}p.m(new C.dLD())},
gcas(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.KD("Press Start",0.5)
w=D.Sb.h(0,this.d)
w.toString
v=A.d.fb(w,new C.dLx())
u=A.k.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.KD("Breathe in",0.5+0.5*A.dx.av(0,p))
case 1:return new B.KD("Hold",1)
case 2:return new B.KD("Breathe out",1-0.5*A.dx.av(0,p))
default:return new B.KD("Hold",0.5)}}}return new B.KD("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcas(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.iQ.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.iQ.j(0.35),A.I,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.pB,q,q,q))
n.push(B.ao(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.jq,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a6(300,340,new B.an(A.A,q,A.aa,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aW(D.Sb.gev(D.Sb));w.C();){v=w.gT(w)
o.push(new C.eX(v,r.d===v,new C.dLA(r,v),q,A.iQ,q))}w=r.e
v=w?A.Hf:A.i2
w=w?"Stop":"Start"
o.push(new C.j7(v,w,new C.dLB(r),A.bj,q))
return C.oD(A.iQ,A.fv,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new C.hj(o,q,q))}}
C.aJg.prototype={}
C.VC.prototype={
R(){return new C.bkS(new B.cB(null,x.z),B.a([],x.au),A.av,A.c)}}
C.bkS.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aF(s,s,s,s,D.rE,s,s,s,new C.dXi(t,d),s,s,s,s,"Share",s)],r),p=B.bx(B.m(18),new B.ey(B.aB(s,B.b4(s,s,s,new C.bmP(t.e,t.x,s),A.fF),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dXj(t),new C.dXk(t),s,s,s,s,s,s,s,s,s,new C.dXl(t),s,s,s,s,!1,A.a4),t.d),A.ap),o=B.a([],r)
for(w=0;w<9;++w){v=D.cYg[w]
u=!t.w&&t.f.A(0,v)
o.push(new C.JY(v,u,new C.dXm(t,v),!1,s))}u=t.r
return C.oD(A.bB,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bS,p,s),"DRAW PAD",B.x(B.a([new C.hj(o,s,s),C.lU(A.bB,""+A.k.V(u),"Brush",30,2,new C.dXn(t),u),new C.hj(B.a([new C.eX("Eraser",t.w,new C.dXo(t),A.GO,A.bB,s),new C.j7(A.rC,"Undo",new C.dXp(t),A.c,s),new C.j7(A.ea,"Clear",new C.dXq(t),A.c,s),new C.j7(A.OH,"Paper",new C.dXr(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.P,0,A.p))}}
C.bmP.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.S()
w=B.I()
w.r=this.c.gp(0)
d.aP(new B.a3(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,B.M)(w),++s){r=w[s]
q=$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bE
p.e=A.dT
p.b=A.ab
m=r.c
if(m.length===1){q=A.d.gI(m)
m=new B.ap(A.R,A.N,A.U,A.V,A.S)
m.r=o.gp(o)
l=m.G()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=B.a([],t)
k=new B.aG(q.r,A.ah,null,null,o)
o.push(new B.aY(A.d.gI(m).a,A.d.gI(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new B.c5(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.by(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new B.aq(A.d.gak(m).a,A.d.gak(m).b)
o.push(q)
o=k.f
if(o!=null)q.by(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.G()
q=k.e
u.drawPath((q==null?k.e=new B.cm(k.gbw().a.snapshot()):q).a,l)
l.delete()}}},
aw(d){return!0}}
C.Wk.prototype={
R(){var w=x.S
return new C.aF5(B.aX(w),B.aX(w))}}
C.aF5.prototype={
Z(){this.a2()
this.at4()},
at4(){var w,v,u=this,t=x.N,s=B.bq(D.dmv,!0,t)
A.d.D1(s)
w=x.S
v=B.T(s).c
t=B.C(B.d1(s,0,B.dB(u.d,"count",w),v),t)
A.d.v(t,B.d1(s,0,B.dB(u.d,"count",w),v))
A.d.D1(t)
u.e=t
u.f.a7(0)
u.r.a7(0)
u.w=0
u.x=!1},
can(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
C.q4("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.elK(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gI(0)
u=w.gak(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bQ(A.mD,new C.elL(s,v,u),t)
else{s.x=!0
B.bQ(A8.G3,new C.elM(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.UU,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.ao(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.yh,B.B(B.a([u,B.d(p,q,q,q,q,q,q,B.l(q,q,w?A.aU:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.iG,A.i,0,q,q),q),B.E(B.iy(!0,q,q,A.y,new B.hR(v,8,8,1,q),new C.elQ(r),r.e.length,A.bf,q,A.ag,!1),1)],o),A.m,q,A.e,A.i,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.cZK[t]
o.push(new C.eX(s.b,r.d===s.a,new C.elR(r,s),q,A.aQ,q))}o.push(new C.j7(D.bNA,"New game",new C.elS(r),A.bj,q))
return C.oD(A.aQ,A.fv,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new C.hj(o,q,q))}}
C.Wv.prototype={
R(){return new C.aFo(B.a([],x.t))}}
C.aFo.prototype={
car(d){A.d.a7(this.d)
this.w=!0
this.b_J()},
b_J(){this.d.push(A.cR.aq(4))
this.e=0
this.a_r()},
a_r(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_r=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.evF(t))
s=x.H
w=3
return B.b(B.bQ(A.l5,null,s),$async$a_r)
case 3:r=t.d,q=B.bq(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aTP(n)
w=7
return B.b(B.bQ(new B.b9(1000*Math.max(280,600-r.length*18)),null,s),$async$a_r)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.evG(t))
case 1:return B.h(u,v)}})
return B.i($async$a_r,v)},
aTP(d){this.m(new C.evD(this,d))
C.q4("marimba",D.c69[d]+5,450,0.55)
B.bQ(A.G1,new C.evE(this),x.H)},
cat(d){var w,v,u=this
if(!u.w||u.r)return
u.aTP(d)
w=u.d
v=u.e
if(w[v]!==d){E.dZ(90,"",600,0,0.5,"saw")
u.m(new C.evH(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.evI(u))
B.bQ(A.hs,new C.evJ(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,M.aTC,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fth,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.ayx[v]
u=u.j(q.f===v?1:0.35)
t=new B.aP(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.ayx[v].j(0.8),A.I,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aB(p,B.dd(p,p,p,p,A.b5,new B.o(u,p,new B.bK(r,r,r,r),new B.bg(t,t,t,t),s,p,A.n),A.jf,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.evK(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.at(new B.D(A.a9,B.x(B.a([o,A.an,n,A.d4,new B.fE(1,B.ki(1,l,2,12,12,p,A.dR,!1),p)],m),A.m,p,A.b8,A.i,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return C.oD(A.bG,A.fv,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new C.hj(B.a([new C.j7(A.i2,n,q.gcaq(q),A.bj,p)],m),p,p))}}
C.WP.prototype={
R(){return new C.bm2(new B.as(A.ar,$.au()))}}
C.bm2.prototype={
awC(d){return B.oT(A.k.ac(d,2),B.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eJw(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cY(B.aN(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eJF()
l=B.aL(m,A.Y,!1,m,!0,A.t,m,B.aM(),l,m,m,m,m,m,2,B.br(m,m,m,m,m,m,m,m,!0,new B.b5(4,B.m(16),A7.xp),m,m,m,m,m,m,m,m,m,m,m,new B.b5(4,B.m(16),D.b1C),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lP,"Bill amount",!0,!0,!1,m,m,m,m,D.fqH,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,A.e1,m,m,m,1,m,m,!1,"\u2022",m,new C.eJB(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aSA,!0,A.a3,m,A.am,m,m,m,m)
k=A.bj.j(0.1)
s=B.m(20)
r=B.J(A.bj.j(0.35),A.r,1)
q=x.p
s=B.cf(B.a([l,A.bu,B.p(m,B.x(B.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.awC(w)),t.$2("Total","$"+n.awC(v)),U.N4,t.$3$big("Each of "+n.f+" pays","$"+n.awC(u),!0)],q),A.m,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bQ,m,m,m)],q),m,A.ft,m,m,A.ag,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cKg[p]
r.push(new C.eX(""+o+"%",A.k.V(n.e)===o,new C.eJC(n,o),m,A.bj,m))}l=n.f
return C.oD(A.bj,A.fv,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new C.hj(r,"TIP",m),C.lU(A.aQ,""+l,"People",20,1,new C.eJD(n),l),new C.hj(B.a([new C.eX("Round up",n.r,new C.eJE(n),m,A.aU,m)],q),m,m)],q),A.m,m,A.e,A.P,0,A.p))}}
C.Wj.prototype={
R(){var w=B.a([3,5],x.t)
return new C.bly(w,A.cR,$,A.bF,0,B.a([],x.X),null,null)}}
C.bly.prototype={
Z(){this.a2()
this.pd()},
q9(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.k.bh(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aq(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aq(6)+1)
u.f=t
C.a8N("snare",0.5)}u.m(new C.ekP())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hj()
u.w=t
u.x=t?0:3.141592653589793
C.q4("bell",24,400,0.5)}u.m(new C.ekQ())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.beB(v,o.r>0,n))}u=B.aB(n,B.at(B.bX(A.fI,m,A.bq,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ekI(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.k.E(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.J(A.d1,A.r,6)
s=B.a([new B.ac(0,A.G,A.aU.j(0.4),A.I,30)],x.V)
u=B.aB(n,B.at(B.ed(A.A,B.p(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fpS,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.et1,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ekJ(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.aB(n,B.at(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.feY,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.jq,n,n,n)],x.p),A.m,n,A.e,A.P,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ekK(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.deL[r]
v.push(new C.eX(q.b,o.d===q.a,new C.ekL(o,q),q.c,A.bw,n))}v=B.a([new C.hj(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(C.lU(A.bw,""+s,"Dice",4,1,new C.ekM(o),s))}if(o.d==="num"){s=o.z
s=C.lU(A.bw,""+s,"From",100,1,new C.ekN(o),s)
p=o.Q
A.d.v(v,B.a([s,C.lU(A.bw,""+p,"To",1000,2,new C.ekO(o),p)],m))}return C.oD(A.bw,A.fv,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.m,n,A.e,A.P,0,A.p))}}
C.beB.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cR.ah()-0.5)*0.6
else w=0
v=B.m(22)
u=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cx,14)],x.V)
t=B.a([],x.p)
for(s=D.dym.h(0,A.o.E(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bO(s[q],p,p,B.p(p,p,A.f,p,p,N.adk,p,18,p,p,p,p,p,18),p))
return B.eL(A.A,w,B.p(p,new B.an(A.a_,p,A.aa,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bz,p,p,100),p)}}
C.aMp.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.byz.prototype={
q(){var w,v,u
for(w=this.iM$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iL$
w===$&&B.c()
w.q()
this.bwK()}}
C.aMG.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.byD.prototype={
q(){var w,v,u
for(w=this.iM$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iL$
w===$&&B.c()
w.q()
this.bx1()}}
C.aN7.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.byL.prototype={
q(){var w,v,u
for(w=this.iM$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iL$
w===$&&B.c()
w.q()
this.bxu()}}
C.aNw.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.byT.prototype={
q(){var w,v,u
for(w=this.iM$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iL$
w===$&&B.c()
w.q()
this.bxT()}}
C.b81.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aGD.h(0,t)
$.asx=s==null?"music":s
s=v.d
w=x.p
t=B.a([B.aF(u,u,u,u,S.ny,u,u,u,new C.cyj(d),u,u,u,u,u,u),B.E(B.d(t,u,1,A.a1,u,u,u,B.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(B.aF(u,u,u,u,B.X(A.OK,s,u,u,u,22),u,u,u,new C.cyk(v,d),u,u,u,u,"How to play",u))
w=B.a([new B.D(D.bCX,B.B(t,A.m,u,A.e,A.i,0,u,u),u),B.E(v.f,1)],w)
w.push(B.p(u,v.r,A.f,u,u,new B.o(F.Bg,u,new B.bK(new B.ay(A.c.j(0.08),1,A.r,-1),A.a0,A.a0,A.a0),u,u,u,A.n),u,u,u,u,A.G6,u,u,1/0))
return B.c6(u,A.c0,B.bl(!0,B.x(w,A.m,u,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),u,!1,!1,u,u)}}
C.eX.prototype={
B(d){var w,v,u,t=this,s=null,r=B.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=B.J(o,A.r,q?1.6:1)
w=x.p
v=B.a([],w)
u=t.f
if(u!=null)A.d.v(v,B.a([B.X(u,q?t.r:A.aR,s,s,s,16),A.en],w))
v.push(B.d(t.c,s,s,s,s,s,s,B.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new B.D(F.u0,B.aB(s,B.dd(s,B.B(v,A.m,s,A.e,A.P,0,s,s),s,s,A.b5,new B.o(p,s,o,r,s,s,A.n),A.eO,s,s,s,A.h6,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cyf(t),s,s,s,s,s,s,!1,A.a4),s)}}
C.hj.prototype={
B(d){var w=null,v=B.a([],x.p),u=this.d
if(u!=null)v.push(new B.a6(54,w,B.d(u,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(B.E(B.cg(B.B(this.c,A.m,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aM),1))
return new B.D(A.cv,B.B(v,A.m,w,A.e,A.i,0,w,w),w)}}
C.b82.prototype={
B(d){var w,v,u=this,t=null,s=B.d(u.c,t,t,t,t,t,t,B.l(t,t,A.c.j(0.7),t,t,t,t,t,t,t,t,11.5,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),r=u.w
r=B.awe(d).cM4(r,A.bA,r.j(0.2),r,3.5)
w=u.f
v=u.r
r=B.E(B.aaz(B.kP(t,t,t,v,w,u.e,A.k.E(u.d,w,v)),r),1)
return new B.a6(t,34,B.B(B.a([new B.a6(78,t,s,t),r,new B.a6(38,t,B.d(u.x,t,t,t,t,t,t,A.K0,A.dW,t,t),t)],x.p),A.m,t,A.e,A.i,0,t,t),t)}}
C.j7.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new B.D(F.u0,B.aH(!1,A.a2,!0,B.m(12),B.aO(!1,B.m(12),!0,new B.D(Ad.ajS,B.B(B.a([B.X(w.c,u,v,v,v,17),A.en,B.d(w.d,v,v,v,v,v,v,B.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.P,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.cye(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.aj),v)}}
C.JY.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.fdi:u
w=t?A.c:A.aZ
w=B.J(w,A.r,t?2.5:1)
return B.aB(u,B.dd(u,u,u,u,A.b5,new B.o(p,u,w,u,t?B.a([new B.ac(0,A.G,v.c.j(0.6),A.I,10)],x.V):u,q,A.a6),A.hr,u,r,D.ajD,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cyl(v),u,u,u,u,u,u,!1,A.a4)}}
C.qQ.prototype={
a5G(d,e){var w=B.dm()
w.seS(B.cK(B.dF(0,0,0,d,0,0),new C.cyg(this,w,e)))
this.iM$.push(w.bk())},
pd(){var w=this,v=w.qR(new C.cyi(w))
v.h2(0)
w.iL$!==$&&B.aQ()
w.iL$=v}}
C.fgx.prototype={}
C.b8W.prototype={
a3(d,e){var w=this
C.hwU(d,e,w.b,w.f,w.r,w.w,w.d,w.e,w.c)},
aw(d){var w=this
return d.b!==w.b||d.c!==w.c||d.d!==w.d||d.e!==w.e||d.f!==w.f||!d.r.A(0,w.r)||d.w!==w.w}}
C.WQ.prototype={
R(){return new C.asw(new B.as(new B.bb("NGMY",A.b3,A.aO),$.au()),null,null)}}
C.asw.prototype={
gJk(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,B.dF(0,0,0,3200,0,0),null,1,null,v)
w.cM(0)
v.d!==$&&B.bI()
v.d=w
u=w}return u},
gtp(){var w=D.RN[this.w]
return w},
Z(){this.a2()
var w=this.gJk()
w.dg()
w.dT$.M(0,this.gbZU())},
bZV(){var w,v,u,t,s,r,q,p=this,o=p.gJk().x
o===$&&B.c()
w=p.e.a.a
v=Math.max(1,(w.length===0?A.ml:new B.mk(w)).gL(0))
if(p.Q&&o>=p.as)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.f
r=s==="type"
if(r)q=t/v/1.8
else q=u?0:t/w*0.45
if(p.as<q&&o>=q)if(r)E.dZ(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dZ(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
C.q4(s,D.cWb[A.o.F(t,8)]+12,450,0.35)}}p.as=o},
q(){this.gJk().q()
var w=this.e
w.S$=$.au()
w.P$=0
this.bue()},
bp5(d){var w
this.m(new C.ckp(this,d))
w=this.gJk()
w.iO(0,0)
w.cM(0)},
Tu(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Tu=B.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:if(r.at>=0){w=1
break}r.m(new C.ckk(r))
t=4
n={}
m=r.e
l=m.a.a
k=r.f
j=r.r
i=r.y
h=r.gtp()
g=r.x
w=7
return B.b(C.aRd(D.a59[r.z].b,i,h,g,k,new C.ckl(r),j,l),$async$Tu)
case 7:q=a2
if(J.ad(q)===0){n=B.bd("empty")
throw B.W(n)}m=A.a.i(m.a.a)
if(m.length===0)m="title"
l=B.af("[^A-Za-z0-9_-]+",!0,!1,!1,!1)
p=B.aN(m,l,"_")
n.a=!1
t=9
w=12
return B.b(B.aw2(B.a([B.cDd(q,"image/gif",B.w(p)+".gif")],x.r),null,"Made in NGMY Core Protocol"),$async$Tu)
case 12:o=a2
n.a=o.b!==A.U5
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
return B.b(C.fMB(q,B.w(p)+".gif","image/gif"),$async$Tu)
case 15:a0.a=a2
case 14:if(r.c!=null)r.m(new C.ckm(n,r))
t=2
w=6
break
case 4:t=3
d=s.pop()
if(r.c!=null)r.m(new C.ckn(r))
w=6
break
case 3:w=2
break
case 6:if(r.c!=null)r.m(new C.cko(r))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Tu,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.at(new B.fE(D.a59[k.z].b,B.bx(B.m(22),new B.ey(B.cd(k.gJk(),new C.ck9(k),j),j),A.ap),j),j,j,j),h=A.c.j(0.06)
h=B.aL(j,A.Y,!1,j,!0,A.t,j,B.aM(),k.e,j,j,j,j,j,2,B.br(j,new B.b5(4,B.m(14),A.a0),j,j,j,j,"",j,!0,j,j,j,j,j,j,h,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,I.Eb,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,28,j,1,j,j,!1,"\u2022",j,new C.cka(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.fT,!0,A.a3,j,A.am,j,j,j,j)
w=x.p
v=B.a([],w)
for(u=0;u<24;++u){t=D.doG[u]
v.push(new C.eX(t.b,k.f===t.a,new C.ckb(k,t),j,A.bG,j))}s=B.a([],w)
for(u=0;u<8;++u){t=D.d26[u]
s.push(new C.eX(t.b,k.r===t.a,new C.ckc(k,t),j,A.c2,j))}r=B.a([],w)
for(q=0;q<20;++q){p=D.dt6[q]
r.push(new C.eX(p.a+" "+p.b,k.y===q,new C.ckd(k,q),j,A.aQ,j))}p=B.a([],w)
for(q=0;q<8;++q)p.push(new C.JY(D.RN[q],k.w===q,new C.cke(k,q),!1,j))
o=B.a([],w)
for(q=0;q<3;++q)o.push(new C.eX(D.a59[q].a,k.z===q,new C.ckf(k,q),j,A.bG,j))
o.push(A.bm)
n=k.Q
m=n?"Sound on":"Sound off"
l=n?A.uz:Q.Cx
o.push(new C.eX(m,n,new C.ckg(k),l,A.bG,j))
o.push(A.bm)
o.push(new C.j7(A.om,"Replay",new C.ckh(k),A.c,j))
l=k.x
l=B.a([h,A.O,new C.hj(v,"MOVE",j),new C.hj(s,"LOOK",j),new C.hj(r,"SCENE",j),new C.hj(p,"COLOUR",j),new C.hj(o,"SHAPE",j),C.lU(A.bG,A.o.u(A.k.V(l)),"Size",96,28,new C.cki(k),l),A.au],w)
h=k.at
if(h>=0)l.push(new B.D(A.kF,B.x(B.a([B.bx(B.m(6),B.kx(A.bA,j,A.bG,8,j,h,j),A.ap),A.au,B.d("Making your animation\u2026 "+A.k.V(h*100)+"%",j,j,j,j,j,j,A.oJ,j,j,j)],w),A.m,j,A.e,A.i,0,A.p),j))
else l.push(new B.a6(1/0,j,B.dl(A.nx,D.fKy,k.gcNL(),B.bo(A.bG,j,j,j,A.w,j,A.m5,j,j,j,j,j)),j))
h=k.ax
if(h.length!==0)l.push(new B.D(A.hZ,B.d(h,j,j,j,j,j,j,D.ffz,A.K,j,j),j))
return C.oD(A.bG,A.fv,"Type a word or a name. Pick how the letters move (24 ways), how they look (8 designs), and a moving background scene (20 designs). The title plays on a loop. Download saves the WHOLE animation as a moving GIF to post or send.",new B.D(A.bz,i,j),"TITLE ANIMATOR",B.x(l,A.m,j,A.e,A.P,0,A.p))},
gY(d){return this.x}}
C.aFx.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.aby.prototype={
bA5(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,B.M)(w),++q)for(p=A.d.gaf(w[q]);p.C();){o=p.gT(0)
n=J.a5(o)
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
for(m=0,q=0;q<w.length;w.length===p||(0,B.M)(w),++q){for(v=A.d.gaf(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gT(0)
n=J.a5(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&B.aQ()
g.ax=m
w=g.bDk()
g.ay!==$&&B.aQ()
g.ay=w},
bDk(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.r(s[q],1)+J.r(s[p],1))/2*3.141592653589793/180
n=J.r(s[q],0)
m=Math.cos(o)
l=J.r(s[q],1)
k=J.r(s[p],0)
j=Math.cos(o)
r+=n*m*J.r(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
FS(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
for(t=u.length-1,s=!1,r=0;r<u.length;q=r+1,t=r,r=q){p=J.r(u[r],0)
o=J.r(u[r],1)
n=J.r(u[t],0)
m=J.r(u[t],1)
if(o>f!==m>f&&e<(n-p)*(f-o)/(m-o)+p)s=!s}if(s)return!0}return!1}}
C.abz.prototype={
cHV(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,B.M)(v),++s){r=v[s]
if(r.FS(0,w,e)){if(t!=null){q=r.ax
q===$&&B.c()
p=t.ax
p===$&&B.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
C.vi.prototype={}
C.PE.prototype={}
C.yl.prototype={}
C.PD.prototype={
fu(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.c5V[w.aq(7)]
w=w.hj()?0:12
u=A.o.F(t.c++,3)===0?"flute":"bell"
C.q4(u,v+w-12,2200,0.1)}}
C.VR.prototype={
R(){var w=$.au()
return new C.aEt(new B.cB(null,x.z),new B.as(A.ar,w),new C.PD(A.cR),D.dgQ,A.ax,D.a4R,$,A.bF,0,B.a([],x.X),null,null)}}
C.aEt.prototype={
Z(){var w=this
w.a2()
w.pd()
w.a.toString
w.aXH()},
aXH(){var w=this
w.m(new C.e1h(w))
C.b95().bN(new C.e1i(w),x.P).eQ(new C.e1j(w))},
q(){var w=this.e
w.S$=$.au()
w.P$=0
this.bx8()},
cvp(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=B.a([],x.C)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,B.M)(v),++s){r=v[s]
q=B.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,B.M)(p),++n)q.push(new C.e1k(p[n]).$0())
w.push(q)}this.w=w},
gWz(){var w=this.fy
return w.A(0,A.ax)?100:Math.min(w.a,w.b)*0.43},
aug(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.E(f,1,16)
w.Q=w.as=0},
ayk(d){var w
this.fx=d
w=d.ax
w===$&&B.c()
this.aug(d.x,d.w,105/Math.max(w,3))
B.f1()
C.q4("bell",(A.d.cv(D.a4s,d.c)+1)*3+12,900,0.45)
E.dZ(300,"",280,1.4,0.15,"tri")},
q9(d){var w,v,u,t,s,r,q,p=this
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
cb7(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.ax))return null
w=n.fy
v=n.gWz()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gWz()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.E(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cHV((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
cb6(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new C.e1d(w))
return}w.m(new C.e1e(w,v,A.a.i(d).toLowerCase()))},
bQp(){var w=null,v=this.c
v.toString
B.cj(w,w,!0,w,new C.e1b(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=B.a([B.aF(n,n,n,n,D.bQi,n,n,n,o.gbQo(),n,n,n,n,"Earth facts",n),B.aF(n,n,n,n,D.rE,n,n,n,new C.e1D(o,d),n,n,n,n,"Share",n)],l),j=B.cz(new C.e1E(o,m)),i=A.c.j(0.06)
i=B.a([B.aL(n,A.Y,!1,n,!0,A.t,n,B.aM(),o.e,n,n,n,n,n,2,B.br(n,new B.b5(4,B.m(14),A.a0),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,I.Eb,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bYG,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gcb5(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.j2,!0,A.a3,n,A.am,n,n,n,n)],l)
if(o.id.length!==0){w=B.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,B.M)(v),++t){s=v[t]
w.push(new C.eX(s.a,!1,new C.e1F(o,s),A.ma,A.aQ,n))}i.push(new B.D(A.hZ,new B.a6(n,38,B.cf(w,n,n,n,n,A.aM,!1),n),n))}i.push(A.an)
w=B.a([new C.eX("Whole Earth",!1,new C.e1J(o),A.hx,A.aQ,n)],l)
for(v=D.aGC.gdS(D.aGC),v=v.gaf(v);v.C();){u=v.gT(v)
w.push(new C.eX(u.a,!1,new C.e1K(o,u),n,A.aQ,n))}w.push(new C.eX("Random",!1,new C.e1L(o),A.oi,A.aQ,n))
i.push(new C.hj(w,"GO TO",n))
w=o.z
i.push(C.lU(A.aQ,A.k.ac(w,1)+"x","Zoom",16,0.8,new C.e1M(o),w))
w=o.dy
i.push(C.lU(A.bG,A.a.aS(A.o.u(A.k.bh(w)),2,"0")+":00","Time",24,0,new C.e1N(o),w))
w=o.fr
i.push(C.lU(A.bj,o.cua(),"Season",365,0,new C.e1O(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lb:D.H5
i.push(new C.hj(B.a([new C.eX("Spin",w,new C.e1P(o),D.bLr,A.aQ,n),new C.eX("Night",v,new C.e1Q(o),A.wa,A.aQ,n),new C.eX("Borders",u,new C.e1G(o),D.bLv,A.aQ,n),new C.eX("Names",r,new C.e1H(o),U.Cj,A.aQ,n),new C.eX("Music",q,new C.e1I(o),p,A.aQ,n)],l),n,n))
return C.oD(A.aQ,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",B.x(i,A.m,n,A.e,A.P,0,A.p))},
cua(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.aza[u])v=u
return A.iE[v]+" "+(A.k.bh(w-D.aza[v])+1)},
cb4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&B.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new L.uG(1,A.o.F((A.d.cv(D.a4s,t)+1)*47,360),0.55,1).lI()
r=new C.e19()
q=B.m(20)
p=B.J(s.j(0.6),A.r,1)
o=x.p
n=B.B(B.a([B.p(j,j,A.f,j,j,new B.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.ac,B.E(B.d(d.a,j,1,A.a1,j,j,j,A.dd,j,j,j),1),B.aF(j,j,j,j,A.Hq,j,j,j,new C.e18(this),j,j,j,j,j,A.cb)],o),A.m,j,A.e,A.i,0,j,j)
m=d.d
t=B.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hn,j,j,j)
m=D.dx_.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=B.B(B.a([m,A.ac,r.$2("PEOPLE",l?C.fAW(v):"\u2014")],o),A.m,j,A.e,A.i,0,j,j)
i=r.$2("SIZE",C.Hf(i)+" km\xb2")
if(l)m=(w<10?A.k.ac(w,1):C.Hf(w))+" per km\xb2"
else m="\u2014"
m=B.B(B.a([i,A.ac,r.$2("CROWDING",m)],o),A.m,j,A.e,A.i,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.ac(u,3):A.k.ac(u,1))+"% of people")
l=d.f
k=d.r
return B.p(j,B.x(B.a([n,t,A.O,v,A.O,m,A.O,B.B(B.a([i,A.ac,r.$2("ECONOMY",l>0?"$"+C.fAW(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.i,0,j,j)],o),A.E,j,A.e,A.P,0,A.p),A.f,j,j,new B.o(D.Xs,j,p,q,j,j,A.n),j,j,j,j,D.akb,j,j,j)}}
C.bgR.prototype={
a3(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.S(),d7=B.I()
d7.r=D.Bc.gp(0)
d8.aP(new B.a3(0,0,0+d4,0+d5),d7)
w=new B.e9()
w.d4(4)
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
u.sam(new B.c2(A.A,0.5,A.x,d3,0,B.a([A.L,A.aQ.j(0.35),A.L],t),D.d0r,d3).aB(0,B.bY(p,o*1.1)))
d8.ad(p,o*1.05,u)
n=B.bY(p,o)
u=B.I()
u.sam(D.et5.aB(0,n))
d8.ad(p,o,u)
J.bm(d7.save())
u=x.v
d6=new B.aG(d6.r,A.ah,d3,d3,B.a([],u))
d6.D(new B.jE(n))
d8.mF(0,d6)
m=d2.d*3.141592653589793/180
l=d2.e*3.141592653589793/180
k=Math.sin(m)
j=Math.cos(m)
i=Math.sin(l)
h=Math.cos(l)
g=B.I()
g.b=A.ab
m=g.c=0.7
g.r=A.c.j(0.1).gp(0)
f=new C.djK(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.G()
s=d.e
d7.drawPath((s==null?d.e=new B.cm(d.gbw().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.S()
a3=B.a([],u)
d=new B.aG(a2.r,A.ah,d3,d3,a3)
a3.push(new B.aY(s,r))}else{s=new B.aq(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.by(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.G()
d6=d.e
d7.drawPath((d6==null?d.e=new B.cm(d.gbw().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.G()
s=d.e
d7.drawPath((s==null?d.e=new B.cm(d.gbw().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.S()
a3=B.a([],u)
d=new B.aG(a2.r,A.ah,d3,d3,a3)
a3.push(new B.aY(s,r))}else{s=new B.aq(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.by(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.G()
d6=d.e
d7.drawPath((d6==null?d.e=new B.cm(d.gbw().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=B.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.F((A.d.cv(D.a4s,a7.c)+1)*47,360)
$.S()
b0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a3=a8?0.35:0.5
b0.r=new L.uG(1,a9,a3,a8?1:0.62).lI().gp(0)
b1=new B.ap(A.R,A.N,A.U,A.V,A.S)
b1.b=A.ab
b1.c=a8?2.2:m
b1.e=A.dT
b1.r=(a8?A.c:A.w.j(0.55)).gp(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,B.M)(a3),++b3){b4=a3[b3]
b5=b4.length/4|0
b6=$.S()
b7=B.a([],u)
b8=new B.aG(b6.r,A.ah,d3,d3,b7)
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
if(v===0){b6=new B.aY(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.by(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new B.aq(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.by(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}}if(!b9)continue
b6=new B.bt()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.by(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.G()
b6=b8.e
d7.drawPath((b6==null?b8.e=new B.cm(b8.gbw().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.G()
b6=b8.e
d7.drawPath((b6==null?b8.e=new B.cm(b8.gbw().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,B.M)(a5),++b3){d=a5[b3]
$.S()
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.b=A.ab
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.uL
q=s.G()
s=d.e
d7.drawPath((s==null?d.e=new B.cm(d.gbw().a.snapshot()):s).a,q)
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
c9=C.hVc(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbb(b2)
c9.a3(d8,new B.t(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.E(k*c0+j*c1*c4,-1,1)
$.S()
u=B.I()
u.sam(new B.c2(A.A,0.5,A.x,d3,0,B.a([A.L,A.L,D.bcJ.j(0.78)],t),D.dhd,d3).aB(0,B.bY(new B.t(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.ad(p,o,u)}$.S()
d4=B.I()
d4.sam(new B.c2(A.A,0.5,A.x,d3,0,B.a([A.L,A.w.j(0.4)],t),D.dux,d3).aB(0,n))
d8.ad(p,o,d4)
d7.restore()
d7=B.I()
d7.b=A.ab
d7.c=1.4
d7.r=A.hf.j(0.5).gp(0)
d8.ad(p,o,d7)},
aw(d){return!0}}
C.aML.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.aMM.prototype={
q(){var w,v,u
for(w=this.iM$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iL$
w===$&&B.c()
w.q()
this.bx7()}}
C.bvo.prototype={}
C.WS.prototype={
R(){return new C.bm6()}}
C.bm6.prototype={
gaTo(){var w=this.d
if(w===$)w=this.d=A.cR.aq(16)
return w},
Z(){this.a2()
C.b95().f8(new C.eKd(),new C.eKe(),x.P)},
B(d){var w=null,v=B.eI(w,w,w,!0,!0,D.Bc,w,1,!0,w,0,!1,w,!1,w,w,B.aF(w,w,w,w,D.apY,w,w,w,new C.eKa(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fNP,w,w,w,1,w,!0),u=B.m(18),t=A.aQ.j(0.1),s=B.J(A.aQ.j(0.35),A.r,1),r=x.p
return B.c6(v,D.Bc,B.cf(B.a([B.p(w,B.B(B.a([D.bOX,A.at,B.E(B.d(D.d4w[this.gaTo()],w,w,w,w,w,w,D.fuf,w,w,w),1),B.aF(w,w,w,w,D.bZH,w,w,w,new C.eKb(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bz,w,w,w),A.aA,B.cz(new C.eKc())],r),w,A.a_i,w,w,A.ag,!1),w,!1,!1,w,w)}}
C.WE.prototype={
R(){return C.hVE()}}
C.blU.prototype={
clR(d){var w=d.c,v=C.hVG(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new B.t(Math.cos(t)*v,Math.sin(t)*v)},
Z(){this.a2()
this.pd()},
q9(d){var w,v,u,t=this
t.e.fu(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.clR(w)
u=new B.t(-v.a,-v.b).aI(0,t.w)
v=B.kA(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gcb8(){var w=this.ch
return new B.t(w.a/2,w.b/2).a9(0,this.x)},
cbc(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.D3[s]
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
b04(d){this.m(new C.eCT(this,d))
B.f1()
C.q4("bell",D.duJ[A.o.F(A.d.cv(D.D3,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=B.a([B.aF(m,m,m,m,D.rE,m,m,m,new C.eD3(n,d),m,m,m,m,"Share",m)],k),i=B.cz(new C.eD4(n,l)),h=B.a([new C.eX("All",!1,new C.eD5(n),A.a2n,A.aU,m)],k)
for(w=0;w<10;++w){v=D.D3[w]
h.push(new C.eX(v.a,n.z===v,new C.eD6(n,v),m,B.b1(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.ac(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=C.lU(A.aU,s,"Time",1,0,new C.eD7(n),u/t)
u=n.w
u=C.lU(A.aU,A.k.ac(u,1)+"x","Zoom",9,0.5,new C.eD8(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lb:D.H5
return C.oD(A.aU,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",B.x(B.a([new C.hj(h,"GO TO",m),t,u,new C.hj(B.a([new C.eX("Orbits",s,new C.eD9(n),m,A.aU,m),new C.eX("Names",r,new C.eDa(n),m,A.aU,m),new C.eX("Asteroids",q,new C.eDb(n),m,A.aU,m),new C.eX("Music",p,new C.eDc(n),o,A.aU,m)],k),m,m)],k),A.m,m,A.e,A.P,0,A.p))},
cb9(d){var w,v,u,t,s,r=null,q=B.b1(d.z),p=d.c,o=p*8.317,n=new C.eCR(),m=B.m(20),l=B.J(q.j(0.6),A.r,1),k=B.p(r,r,A.f,r,r,new B.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=B.B(B.a([k,A.ac,B.E(B.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.k5,r,r,r),1),B.aF(r,r,r,r,A.Hq,r,r,r,new C.eCQ(this),r,r,r,r,r,A.cb)],w),A.m,r,A.e,A.i,0,r,r)
k=B.d(d.y,r,r,r,r,r,r,F.Ec,r,r,r)
v=n.$2("WIDTH",C.Hf(d.d*2)+" km")
u=p===0
p=B.B(B.a([v,A.ac,n.$2("FROM THE SUN",u?"\u2014":B.w(p)+" AU ("+C.Hf(p*149.6)+" million km)")],w),A.m,r,A.e,A.i,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new C.eCS().$1(v))
t=d.f
v=B.B(B.a([v,A.ac,n.$2("ONE DAY",t>=48?A.k.ac(t/24,0)+" Earth days":A.k.ac(t,1)+" hours")],w),A.m,r,A.e,A.i,0,r,r)
t=d.r
s=t>50?0:1
s=B.B(B.a([n.$2("GRAVITY",B.w(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.ac(50*t/9.81,s)+" kg"),A.ac,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.i,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.ac(o,1)+" minutes":A.k.ac(o/60,1)+" hours"
return B.p(r,B.x(B.a([j,A.au,k,A.O,p,A.O,v,A.O,s,A.O,B.B(B.a([t,A.ac,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.i,0,r,r)],w),A.E,r,A.e,A.P,0,A.p),A.f,r,r,new B.o(D.Xs,r,l,m,r,r,A.n),r,r,r,r,D.akb,r,r,r)}}
C.btr.prototype={
a3(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.S()
w=B.I()
w.r=D.Bc.gp(0)
a7.aP(new B.a3(0,0,0+a5,0+a6),w)
v=new B.e9()
v.d4(8)
for(w=a7.a,u=0;u<110;++u){t=v.ah()
s=v.ah()
r=v.ah()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=A.c.j(0.2+v.ah()*0.5).gp(0)
p=q.G()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gcb8()
n=a5.w
if(a5.as)for(a6=A.d.gaf(D.D3),t=new B.f5(a6,new C.f4P()),s=o.a,r=o.b;t.C();){q=a6.gT(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new B.ap(A.R,A.N,A.U,A.V,A.S)
m.b=A.ab
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
p.delete()}i=C.hVF(A.d.gI(D.D3))*Math.sqrt(n)*1.4
a6=i*3.2
t=B.I()
s=x.O
t.sam(new B.c2(A.A,0.5,A.x,a4,0,B.a([A.aU.j(0.5),A.L],s),a4,a4).aB(0,B.bY(o,a6)))
a7.ad(o,a6,t)
t=B.I()
t.sam(D.et_.aB(0,B.bY(o,i)))
a7.ad(o,i,t)
if(a5.at){h=C.hns("Sun",10.5,A.ad)
h.a3(a7,o.a9(0,new B.t(-h.b.c/2,i+4)))}for(a6=A.d.gaf(D.D3),t=new B.f5(a6,new C.f4Q()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gT(0)
g=l.c
j=g===0?0:30+150*Math.sqrt(g/30.1)
f=l.e
k=f<=0?0:6.283185307179586*(a5.f/f)+g*1.7
g=q+Math.cos(k)*j*n
f=m+Math.sin(k)*j*n
j=(1.5+1.6*Math.log(l.d/1000+1))*Math.sqrt(n)
e=B.b1(l.z)
d=l.a
if(d==="Saturn"){J.bm(w.save())
w.translate(g,f)
w.rotate(-22.91831180523293,0,0)
a0=B.bL(A.I,j*1.3,j*4.2)
a1=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1.b=A.ab
a1.c=j*0.45
a1.r=A.bL.j(0.55).gp(0)
p=a1.G()
w.drawOval(B.bH(a0),p)
p.delete()
w.restore()}a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a0.r=e.j(0.3).gp(0)
a0.z=A.uL
p=a0.G()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1=B.ar(e,A.w,0.55)
a1.toString
a0.sam(new B.c2(V.xl,0.5,A.x,a4,0,B.a([A.c,e,a1],s),H.a44,a4).aB(0,B.bY(new B.t(g,f),j)))
p=a0.G()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.b=A.ab
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
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.da4[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new B.ap(A.R,A.N,A.U,A.V,A.S)
a3.r=A.ad.gp(0)
p=a3.G()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=C.hns(d,10.5,A.ad)
h.a3(a7,new B.t(g+-h.b.c/2,f+(j+4)))}}},
aw(d){return!0}}
C.VS.prototype={
R(){var w=x.i
return new C.aEu(new C.PD(A.cR),B.c1(5,0,!1,w),B.c1(5,0,!1,w),B.c1(5,null,!1,x.cD),A.I,A.I,B.a([],x.g),$,A.bF,0,B.a([],x.X),null,null)}}
C.aEu.prototype={
cyH(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
cbb(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.efF
s.cy=new B.t(s.ay,0)
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
E.dZ(150,"",400,0,0.5,"noise")
E.dZ(90,"",300,1.5,0.6,"sine")
s.m(new C.e1U())},
Z(){this.a2()
this.pd()},
q9(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fu(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.zm[r]
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
if(q.a!=="Sun")E.dZ(60+p*5,"",220,0.6,0.55,"sine")
break}}}if(A.d.d_(s,new C.e2m()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
E.dZ(70,"",350,0,0.7,"noise")
break}}v=i.db
if(v.length===0||A.d.gak(v).aF(0,i.cx).gcI()>120)v.push(i.cx)
if(v.length>700)A.d.cA(v,0)
if(i.cx.gcI()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bOt()
else n=n==="weight"?p.cG3():p.bGC()
w=x.p
v=B.a([],w)
for(u=0;u<3;++u){t=D.drz[u]
v.push(new C.eX(t.b,p.d===t.a,new C.e28(p,t),t.c,A.cS,o))}v=B.a([new C.hj(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=B.a([new C.eX("Hammer",!s,new C.e29(p),Ac.H_,A.cS,o),new C.eX("Feather",s,new C.e2a(p),U.Ou,A.cS,o),new C.eX(q,r,new C.e2e(p),A.GP,A.aQ,o)],w)
q=p.w
A.d.v(v,B.a([new C.hj(r,o,o),C.lU(A.cS,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new C.e2f(p),q),new C.hj(B.a([new C.j7(A.uh,"Drop!",new C.e2g(p),A.bj,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=C.lU(A.cS,""+A.k.V(s)+" kg","Your weight",120,20,new C.e2h(p),s)
r=p.ax
A.d.v(v,B.a([s,C.lU(A.cS,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new C.e2i(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=C.lU(A.cS,A.k.ac(s,1)+" km/s","Speed",13,0,new C.e2j(p),s)
r=p.ch
A.d.v(v,B.a([s,C.lU(A.cS,A.k.ac(r,1)+"x out","View",8,0.5,new C.e2k(p),r),new C.hj(B.a([new C.j7(A.oo,"Fire!",p.gcba(),A.bj,o),new C.j7(A.uh,"Falls",new C.e2l(p),A.c,o),new C.j7(A.rv,"Orbit 7.7",new C.e2b(p),A.c,o),new C.j7(D.bOm,"Oval 9",new C.e2c(p),A.c,o),new C.j7(A.Cm,"Escape",new C.e2d(p),A.c,o)],w),o,o)],w))}return C.oD(A.cS,A.fv,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",B.x(v,A.m,o,A.e,A.P,0,A.p))},
bOt(){return new B.D(D.bxN,B.cz(new C.e1T(this)),null)},
cG3(){var w,v,u,t=null,s=[D.eTN,D.eVf,D.eVm,D.eVF,D.eVk,D.eVM,D.eUm,D.eW7,D.eV0],r=x.p,q=B.a([D.fBd,A.W],r)
for(w=0;w<9;++w){v=s[w]
u=B.b1(v.c)
q.push(new B.D(A.cv,new B.ce(A.aM,A.e,A.i,A.m,t,A.p,t,0,B.a([new B.a6(62,t,new B.y(v.a,t,new B.F(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new B.bz(1,A.bb,new B.BM(new C.e1V(this,v),t),t)],r),t),t))}q.push(A.au)
q.push(D.fDH)
return B.cf(q,t,A.iB,t,t,A.ag,!1)},
bGC(){return B.cz(new C.e1R(this))}}
C.bc0.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.S(),e=B.I()
e.r=D.Bc.gp(0)
d.aP(new B.a3(0,0,0+h,0+g),e)
w=new B.e9()
w.d4(2)
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
e.sam(new B.c2(A.A,0.5,A.x,i,0,B.a([A.L,A.aQ.j(0.35),A.L],x.O),D.di8,i).aB(0,B.bY(g,p*1.1)))
d.ad(g,p*1.06,e)
e=B.I()
e.sam(D.esU.aB(0,B.bY(g,p)))
d.ad(g,p,e)
o=g.a9(0,new B.t(0,-p))
f=f.r
e=x.v
n=new B.aG(f,A.ah,i,i,B.a([],e))
u=o.a
t=o.b
s=t+3
n.D(new B.aY(u-16,s))
n.D(new B.aq(u,t-400*h-4))
n.D(new B.aq(u+16,s))
n.D(new B.bt())
s=B.I()
s.r=A.al.gp(0)
d.aG(n,s)
s=o.a9(0,new B.t(0,-400*h-6))
u=B.I()
u.r=A.c.gp(0)
d.ad(s,4,u)
u=j.e
if(u.length>1){e=B.a([],e)
m=new B.aG(f,A.ah,i,i,e)
f=g.a
t=g.b
m.D(new B.aY(f+A.d.gI(u).a*h,t+A.d.gI(u).b*h))
for(u=B.d1(u,1,i,B.T(u).c),s=u.$ti,u=new B.bS(u,u.gL(0),s.k("bS<ak.E>")),s=s.k("ak.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new B.aq(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.by(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.S()
f=B.I()
f.b=A.ab
f.c=2.4
f.d=A.bE
f.r=A.cS.j(0.9).gp(0)
d.aG(m,f)}if(j.f){f=j.d
k=g.a9(0,new B.t(f.a*h,f.b*h))
h=B.I()
h.r=A.cS.j(0.4).gp(0)
h.z=I.pm
d.ad(k,7,h)
h=B.I()
h.r=A.c.gp(0)
d.ad(k,4,h)}},
aw(d){return!0}}
C.Ww.prototype={
R(){return new C.blR(new B.cB(null,x.z),$,A.bF,0,B.a([],x.X),null,null)}}
C.blR.prototype={
Z(){this.a2()
this.pd()},
q9(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.R3[l.e],i=D.R3[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=B.a([B.aF(k,k,k,k,D.rE,k,k,k,new C.evN(l,d),k,k,k,k,"Share",k)],u)
s=B.E(B.b4(k,k,k,new C.bt_(f,g,v,k),A.fF),1)
r=g.a
q=v<10?A.k.ac(v,1):C.Hf(v)
p=f.a
q=B.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.hE,A.K,k,k)
o=C.Hf(v*v*v)
n=A.a.c8(p,"s")?"":"s"
h=B.x(B.a([s,B.p(k,B.x(B.a([q,A.au,B.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,P.vg,A.K,k,k),A.bD,B.d(p+": "+C.Hf(w*2)+" km wide. "+r+": "+C.Hf(h*2)+" km wide.",k,k,k,k,k,k,P.E7,A.K,k,k)],u),A.m,k,A.e,A.i,0,A.p),A.f,k,k,k,k,k,k,k,D.bA0,k,k,1/0)],u),A.m,k,A.e,A.i,0,A.p)
r=B.a([],u)
for(m=0;m<10;++m){w=D.R3[m]
r.push(new C.eX(w.a,l.e===m,new C.evO(l,m),k,B.b1(w.c),k))}w=B.a([],u)
for(m=0;m<10;++m){s=D.R3[m]
w.push(new C.eX(s.a,l.f===m,new C.evP(l,m),k,B.b1(s.c),k))}return C.oD(A.c2,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new B.ey(h,l.d),"SIZE COMPARE",B.x(B.a([new C.hj(r,"FIRST",k),new C.hj(w,"SECOND",k)],u),A.m,k,A.e,A.P,0,A.p))}}
C.bt_.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.S()
w=B.I()
w.r=D.bjz.gp(0)
d.aP(new B.a3(0,0,0+h,0+g),w)
v=new B.e9()
v.d4(6)
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
w=new C.f2Y(d)
t=this.c
w.$3(m,o,B.b1(t.c))
s=o-n
l=new B.t(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,B.b1(s.c))
w=B.I()
w.b=A.ab
w.c=1.4
w.r=A.ad.gp(0)
d.ad(l,n+3,w)
k=B.fv(i,i,i,i,B.cS(i,i,i,i,i,i,i,i,i,D.flY,s.a),A.a3,A.bZ,i,A.dA,A.bW)
k.el()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbb(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbb(g)-6
h=g}k.a3(d,l.a9(0,new B.t(-w/2,h)))
j=B.fv(i,i,i,i,B.cS(i,i,i,i,i,i,i,i,i,D.fpo,t.a),A.a3,A.bZ,i,A.dA,A.bW)
j.el()
t=j.b
h=t.c
t=t.a.c
j.a3(d,m.a9(0,new B.t(-h/2,-t.gbb(t)/2)))},
aw(d){return!0}}
C.aMN.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.byF.prototype={
q(){var w,v,u
for(w=this.iM$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iL$
w===$&&B.c()
w.q()
this.bx9()}}
C.aNg.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.byO.prototype={
q(){var w,v,u
for(w=this.iM$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iL$
w===$&&B.c()
w.q()
this.bxD()}}
C.aNj.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.byQ.prototype={
q(){var w,v,u
for(w=this.iM$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iL$
w===$&&B.c()
w.q()
this.bxG()}}
C.Q9.prototype={}
C.UW.prototype={
R(){return C.hVC()}}
C.bkB.prototype={
Z(){this.a2()
this.pd()},
q9(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fu(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dZ(70,"",500,0.3,0.5,"sine")}}A.d.bs(w,new C.dL3())},
b05(d){var w,v,u,t=this.Q
if(t.A(0,A.ax))return
w=this.gb9b()
v=d.aF(0,new B.t(t.a/2,t.b*0.42))
u=A.k.E(v.gcI()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new C.Q9(t,u,1.2,new B.vT(1,30+A.cR.ah()*40,0.9,0.7).lI()))
C.q4("bell",60+A.k.V(12-u)*2,400,0.35)},
gb9b(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.E(m.length===0?3:new B.N(m,new C.dKS(),B.T(m).k("N<1,K>")).fb(0,A.vB),1.0001,99))
m=x.p
w=B.a([B.aF(n,n,n,n,D.rE,n,n,n,new C.dKT(o,d),n,n,n,n,"Share",n)],m)
v=B.cz(new C.dKU(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.ac(s,0)+" Suns":C.fAW(s)+" Suns"
t=C.lU(A.bw,s,"Mass",1,0,new C.dKW(o),u/t)
u=B.a([new C.eX("Star (10)",!1,new C.dKX(o),n,A.bw,n),new C.eX("Cygnus X-1 (21)",!1,new C.dKY(o),n,A.bw,n),new C.eX("Milky Way core (4 million)",!1,new C.dKZ(o),n,A.bw,n),new C.eX("M87 (6.5 billion)",!1,new C.dL_(o),n,A.bw,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lb:D.H5
return C.oD(A.bw,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",B.x(B.a([t,new C.hj(u,"LIKE",n),new C.hj(B.a([new C.eX("Glowing ring",s,new C.dL0(o),n,A.bw,n),new C.eX("Bent light",r,new C.dL1(o),n,A.bw,n),new C.eX("Music",q,new C.dL2(o),p,A.bw,n),new C.j7(A.ol,"Clear",new C.dKV(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.P,0,A.p))},
afr(d,e){var w=null
return B.E(B.x(B.a([B.d(d,w,w,w,w,w,w,D.fhD,w,w,w),A.bD,B.d(e,w,2,w,w,w,w,K.Ac,A.K,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),1)}}
C.bbn.prototype={
a3(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.S()
w=B.I()
w.r=D.bm0.gp(0)
b2.aP(new B.a3(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new B.t(w,v)
t=this.b
s=t.gb9b()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
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
b0.b=A.ab
b0.c=2
b0.r=A.c.j(0.25).gp(0)
b0.z=S.Sh
b2.ad(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=B.ar(A.tD,A.fr,d)
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
b1.sam(new B.c2(A.A,0.5,A.x,null,0,B.a([A.w,A.w.j(0)],x.O),D.cW8,null).aB(0,B.bY(u,b0)))
b2.ad(u,b0,b1)
b1=B.I()
b1.r=A.w.gp(0)
b2.ad(u,s,b1)
b1=B.I()
b1.b=A.ab
b1.c=1
b1.r=A.bw.j(0.55).gp(0)
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
n.d=A.bE
k=a7.d
n.r=k.j(A.k.E(a7.b/2,0.2,1)).gp(0)
f=n.G()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=k.j(0.2).gp(0)
o.z=I.pm
f=o.G()
p.drawCircle(t,r,6,f)
f.delete()}},
aw(d){return!0}}
C.aff.prototype={}
C.VP.prototype={
R(){var w=x.x,v=x.g
return new C.bl1(new B.cB(null,x.z),new C.PD(A.cR),B.a([],w),A.I,A.I,B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.a([],v),A.I,A.I,$,A.bF,0,B.a([],x.X),null,null)}}
C.bl1.prototype={
Z(){this.a2()
this.a_E()
this.pd()},
a_E(){var w,v,u,t,s,r,q,p,o=this,n=new B.e9()
n.d4(5)
w=B.a([],x.x)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.ah(),1.6)
w.push(new C.aff(t,n.ah()*3.141592653589793*2,(n.ah()-0.5)*0.5*t,25+n.ah()*20))}else{t=Math.pow(n.ah(),0.8)
s=n.aq(o.f)
r=n.ah()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.hj()?0:3.141592653589793
q=r+(n.ah()-0.5)*0.25}r=n.ah()
p=t<0.25?35+n.ah()*15:205+n.ah()*50
w.push(new C.aff(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cyx(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.ehW
k.cx=D.ei_
w=new B.e9()
w.d4(9)
v=k.cy
A.d.a7(v)
u=B.a([],x.x)
for(t=0;t<900;++t)u.push(new C.aff(Math.pow(w.ah(),0.8)*0.7,w.ah()*3.141592653589793*2,0,320+w.ah()*30))
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
k.fy=k.fx=A.I
E.dZ(110,"",900,0.5,0.45,"sine")},
q9(d){var w,v,u,t,s,r,q,p=this
p.e.fu(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aF(0,p.fx)
s=Math.max(0.25,t.gcI())
r=t.eU(0,s).aI(0,0.9/(s*s))
w=p.fy.a9(0,r.aI(0,u))
p.fy=w
v=p.cx.aF(0,r.aI(0,u))
p.cx=v
w=p.fx.a9(0,w.aI(0,u))
p.fx=w
v=p.CW.a9(0,v.aI(0,u))
p.CW=v
q=new C.e0A(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=B.a([B.aF(r,r,r,r,D.rE,r,r,r,new C.e0q(s,d),r,r,r,r,"Share",r)],q),o=B.b4(r,r,r,new C.bgI(s,r),A.ax),n=A.w.j(0.5),m=B.m(14),l=B.J(A.bA,A.r,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=B.a([o,B.ao(8,B.p(r,B.d(w,r,r,r,r,r,r,A.UA,r,r,r),A.f,r,r,new B.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bS,r,r,r),r,r,10,10,r,r)],q)
l=B.a([],q)
for(v=0;v<3;++v){u=D.ddv[v]
o=s.Q===u.a&&!s.ch
l.push(new C.eX(u.b,o,new C.e0r(s,u),r,A.hc,r))}l.push(new C.eX("Collide",s.ch,new C.e0s(s),A.yJ,A.c2,r))
o=B.a([new C.hj(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=C.lU(A.hc,""+n,"Arms",6,2,new C.e0t(s),n)
l=s.r
A.d.v(o,B.a([n,C.lU(A.hc,A.k.ac(l,1),"Winding",6,0.8,new C.e0u(s),l)],q))}n=s.as
o.push(C.lU(A.hc,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new C.e0v(s),n))
n=s.ax
o.push(C.lU(A.hc,A.k.ac(n,1)+"x","Speed",4,0,new C.e0w(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lb:D.H5
o.push(new C.hj(B.a([new C.eX("Dark matter",n,new C.e0x(s),r,A.bw,r),new C.eX("You are here",l,new C.e0y(s),r,A.aU,r),new C.eX("Music",w,new C.e0z(s),t,A.hc,r)],q),r,r))
return C.oD(A.hc,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new B.ey(new B.an(A.a_,r,A.b1,A.t,m,r),s.d),"GALAXY",B.x(o,A.m,r,A.e,A.P,0,A.p))}}
C.bgI.prototype={
a3(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.S()
w=B.I()
w.r=D.boh.gp(0)
a3.aP(new B.a3(0,0,0+a1,0+a2),w)
v=new B.e9()
v.d4(3)
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
t.sam(new B.c2(A.A,0.5,A.x,a0,0,B.a([A.aD.j(0.32),A.aD.j(0.12),A.L],x.O),G.a3o,a0).aB(0,B.bY(o,a2)))
a3.ad(o,a2,t)}m=new C.dgT(a1.as)
a2=n*0.3
t=B.I()
t.sam(new B.c2(A.A,0.5,A.x,a0,0,B.a([A.fO.j(0.85),A.aC.j(0.3),A.L],x.O),a0,a0).aB(0,B.bY(o,a2)))
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
l.r=new L.uG(1,r,q>200?0.45:0.55,1).lI().j(0.35+(1-s)*0.5).gp(0)
s=s<0.3?1.3:1
p=l.G()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.S()
a2=B.I()
a2.b=A.ab
a2.c=1.6
a2.r=A.aU.gp(0)
a3.ad(g,9,a2)
f=B.fv(a0,a0,a0,a0,D.few,A.a3,A.bZ,a0,A.dA,A.bW)
f.el()
f.a3(a3,g.a9(0,new B.t(-f.b.c/2,12)))}}else{e=n*0.8
l=B.I()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.M)(a2),++k){d=a2[k]
l.r=D.bpE.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.G()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.M)(a2),++k){d=a2[k]
l.r=D.bjU.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.G()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.S()
w=B.I()
w.r=A.fO.gp(0)
a3.ad(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=B.I()
w.r=A.ie.gp(0)
a3.ad(a1,5,w)}},
aw(d){return!0}}
C.Ws.prototype={
R(){return new C.blQ(new B.cB(null,x.z),new C.PD(A.cR),$,A.bF,0,B.a([],x.X),null,null)}}
C.blQ.prototype={
Z(){this.a2()
this.pd()},
q9(d){var w,v,u,t=this
t.e.fu(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.F(t.r+d*0.04*v,1)
else{w=A.k.F(t.w+d*0.05*v,1)
t.w=w
u=A.k.bh(w*4)
if(u!==A.k.bh(t.as))C.q4("bell",60+u*4,500,0.35)
t.as=u}},
gcu9(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gckr(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=B.a([B.aF(q,q,q,q,D.rE,q,q,q,new C.ev1(r,d),q,q,q,q,"Share",q)],p),n=B.E(new B.ey(B.b4(q,q,q,new C.bse(r,q),A.fF),r.d),1)
if(r.f==="seasons")w=r.gcu9()
else{w=r.gckr()
v=A.k.ao(A.k.E(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=B.x(B.a([n,B.p(q,B.d(w,q,q,q,q,q,q,A4.UP,A.K,q,q),A.f,q,q,q,q,q,q,q,M.akk,q,q,1/0)],p),A.m,q,A.e,A.i,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A1.yT:A.i2
t=r.Q
s=t?A.lb:D.H5
s=B.a([new C.hj(B.a([new C.eX("Seasons",n==="seasons",new C.ev2(r),A.Cz,A.bt,q),new C.eX("Moon phases",n==="moon",new C.ev3(r),A.wa,A.bt,q),new C.eX(u,!1,new C.ev4(r),v,A.bt,q),new C.eX("Music",t,new C.ev5(r),s,A.bt,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=C.lU(A.bt,D.dcN[A.o.F(A.k.bh(n*12),12)],"Month",1,0,new C.ev6(r),n)
v=r.z
A.d.v(s,B.a([n,C.lU(A.bt,A.k.ac(v,1)+"\xb0","Tilt",90,0,new C.ev7(r),v)],p))}else{p=r.w
s.push(C.lU(A.bt,""+(A.k.bh(p*29.5)+1),"Day of month",1,0,new C.ev8(r),p))}p=r.y
s.push(C.lU(A.bt,A.k.ac(p,1)+"x","Speed",4,0.2,new C.ev9(r),p))
return C.oD(A.bt,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",B.x(s,A.m,q,A.e,A.P,0,A.p))}}
C.bse.prototype={
a3(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.S(),b8=B.I()
b8.r=D.Bc.gp(0)
b9.aP(new B.a3(0,0,0+b5,0+b6),b8)
w=new B.e9()
w.d4(4)
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
u=B.bL(p,n*2,o*2)
t=B.I()
t.b=A.ab
t.c=1
t.r=A.aZ.gp(0)
b9.dO(u,t)
t=B.I()
t.sam(D.esW.aB(0,B.bY(p,34)))
b9.ad(p,22,t)
m=s.r*2*3.141592653589793
l=p.a9(0,new B.t(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aF(0,l).eU(0,p.aF(0,l).gcI())
J.bm(b8.save())
b8.translate(l.a,l.b)
s=B.I()
s.r=D.blX.gp(0)
b9.ad(A.I,k,s)
J.bm(b8.save())
b7=new B.aG(b7.r,A.ah,b4,b4,B.a([],x.v))
b7.D(new B.jE(B.bY(A.I,k)))
b9.mF(0,b7)
b7=i.aI(0,k).aI(0,0.35)
s=k*1.1
b6=B.I()
b6.sam(D.et4.aB(0,B.bY(A.I,s)))
b9.ad(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new B.t(s,b6)
b7=new B.t(-s,-b6).aI(0,k).aI(0,1.7)
b5=h.aI(0,k).aI(0,1.7)
t=B.I()
t.c=2
t.r=A.ct.gp(0)
b9.bo(b7,b5,t)
t=h.aI(0,k).aI(0,1.7)
b5=B.I()
b5.r=A.ct.gp(0)
b9.ad(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=B.fv(b4,b4,b4,b4,B.cS(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aUa,b5),A.a3,A.bZ,b4,A.dA,A.bW)
f.el()
f.a3(b9,l.a9(0,new B.t(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=B.I()
r.b=A.ab
r.c=1
r.r=A.aZ.gp(0)
b9.ad(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a0.r=A.aU.j(0.6).gp(0)
a0.c=2
q=a0.G()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=B.I()
r.sam(new B.c2(new B.dh(-0.5,0),1.1,A.x,b4,0,B.a([D.bgZ,D.aia],x.O),D.d3u,b4).aB(0,B.bY(p,k)))
b9.ad(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.a9(0,new B.t(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=B.I()
r.r=D.bdN.gp(0)
b9.ad(a1,a2,r)
J.bm(b8.save())
b7=b7.r
r=x.v
d=new B.aG(b7,A.ah,b4,b4,B.a([],r))
d.D(new B.jE(B.bY(a1,a2)))
b9.mF(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=B.I()
a3.r=A.bO.gp(0)
b9.aP(new B.a3(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aF(0,p).eU(0,a1.aF(0,p).gcI())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.avf[a5]
a7=new B.ap(A.R,A.N,A.U,A.V,A.S)
a7.r=A.aQ.j(0.45).gp(0)
a7.z=A.lL
q=a7.G()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new B.t(u,t)
a9=Math.min(b5,b6)*0.1
b6=B.I()
b6.r=D.bdI.gp(0)
b9.ad(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bm(b8.save())
b6=new B.aG(b7,A.ah,b4,b4,B.a([],r))
b6.D(new B.jE(B.bY(a8,a9)))
b9.mF(0,b6)
s=s.w
b1=new B.aG(b7,A.ah,b4,b4,B.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.D(new B.aY(u,b5))
b6=b2>0
b1.aDx(new B.t(u,t+a9),b6,new B.aP(a9,a9))
if(b0<0.5)b6=b2<0
b1.aDx(new B.t(u,b5),b6,new B.aP(a9*Math.abs(1-2*b0),a9))
b6=B.I()
b6.r=A.bO.gp(0)
b9.aG(b1,b6)
b8.restore()
b8=B.I()
b8.b=A.ab
b8.c=1
b8.r=A.aZ.gp(0)
b9.ad(a8,a9,b8)
b3=B.fv(b4,b4,b4,b4,D.fex,A.a3,A.bZ,b4,A.dA,A.bW)
b3.el()
b3.a3(b9,a8.a9(0,new B.t(-b3.b.c/2,a9+6)))}},
aw(d){return!0}}
C.aMm.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.byy.prototype={
q(){var w,v,u
for(w=this.iM$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iL$
w===$&&B.c()
w.q()
this.bwH()}}
C.aMJ.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.byE.prototype={
q(){var w,v,u
for(w=this.iM$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iL$
w===$&&B.c()
w.q()
this.bx4()}}
C.aNf.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.byN.prototype={
q(){var w,v,u
for(w=this.iM$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iL$
w===$&&B.c()
w.q()
this.bxC()}}
var z=a.updateTypes(["R(tH)","~()","R(a4X)","aA<~>()","R(CL)","H(tH,H)","K(K,tH)","R(CH)","R(ZR)","R(abT)","cu(abz)","R(vi)","R(a3E)","R(nt)","R(ac6)","Wq()","WF()","Wr()","WQ()","V1()","afk(Y,H)","aec(Y,H)","VD()","R(mK)","n(eg)","R(af8)","R(a15)","R(CV)","R(acm)","R(aef)","~(a8<@,@>)","H(H,qZ)","H(H,CL)","n(qZ)","WS()","qZ?(CL)","R(qZ)","v(n,a0T)","R(Qs)","R(aaN)","H(CH,CH)","UX()","~(xi,n,t,u,K)","~(n,tH)","~(AO)","K(Q9)","NL(Y)","Vm(Y,bs<K>,bs<K>)","R(Q9)","VL()","UY()","VC()","Wk()","Wv()","WP()","Wj()","~(n)","W3(Y)","R(aby)","VR()","WE()","VS()","UW()","VP()","Ww()","Ws()","a8O()","WX()","~(qZ,ai<n>,H)"])
C.bTu.prototype={
$0(){var w,v,u,t=this.a
if(t.a)return-1
w=this.b
v=w.gT(w)
u=B.ef(v.gdM(v))
if(!w.C())t.a=!0
return u},
$S:97}
C.fDi.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+23}
C.fsS.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gI(d.e.split(". "))+"."},
$S:z+24}
C.fA1.prototype={
$1(d){var w
if(!this.a.M1(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fA2.prototype={
$1(d){return d.x},
$S:z+0}
C.fDf.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fDg.prototype={
$1(d){var w
if(!this.a.M1(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fDh.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.edX.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.edY.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.z(this.b,this.c))},
$S:0}
C.edZ.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd2(v).Q
v.toString
w.mf(v,A.dV,A.iz)}},
$S:9}
C.ee9.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a7(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.eea.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.ee5.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.ee3.prototype={
$2(d,e){var w=this.a
w.r.push(B.cK(B.dF(0,0,0,d,0,0),new C.ee4(w,this.b,e)))},
$S:1860}
C.ee4.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.ee6.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gWC().akt(0,u[1],u[2],u[3])
u[4].bQ(0,new C.ee1(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dZ(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.ee2(w.a,v,w.f,w.r))},
$S:0}
C.ee1.prototype={
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
C.ee2.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.k.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ee7.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gWC().alb(t,u[1],s,u[3])
E.dZ(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.ee0(w.a,v,w.e,w.f))},
$S:0}
C.ee0.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.k.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ee8.prototype={
$0(){E.dZ(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.ee_(w,this.b))},
$S:0}
C.ee_.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.eed.prototype={
$0(){var w=this.a
return w.m(new C.eec(w))},
$S:0}
C.eec.prototype={
$0(){return this.a.at=!0},
$S:0}
C.eee.prototype={
$0(){var w=this.a
return w.m(new C.eeb(w))},
$S:0}
C.eeb.prototype={
$0(){return this.a.at=!1},
$S:0}
C.eef.prototype={
$0(){var w=this.a
w.f.saV(0,this.b)
w.Pw()},
$S:0}
C.eeg.prototype={
$0(){return this.a.YF(this.b)},
$S:0}
C.eeh.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Pw():w.aWN()},
$S:2}
C.eei.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Pw():w.aWN()},
$S:0}
C.esc.prototype={
$2(d,e){return d+e},
$S:1861}
C.esw.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.esv(w,d))},
$S:1862}
C.esv.prototype={
$0(){var w=B.aK(J.r(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.esx.prototype={
$0(){},
$S:0}
C.esy.prototype={
$0(){},
$S:0}
C.ese.prototype={
$0(){return this.a.m(new C.esd(this.b,this.c))},
$S:0}
C.esd.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.es3.prototype={
$1(d){return this.a.cx===d},
$S:32}
C.es4.prototype={
$1(d){return this.a.cx=d},
$S:30}
C.es5.prototype={
$1(d){return this.a.cy===d},
$S:32}
C.es6.prototype={
$1(d){return this.a.cy=d},
$S:30}
C.es7.prototype={
$1(d){return this.a.db===d},
$S:32}
C.es8.prototype={
$1(d){return this.a.db=d},
$S:30}
C.es9.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:32}
C.esa.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.M(0,d)},
$S:30}
C.esb.prototype={
$0(){var w=this.a
return w.m(w.gaxc())},
$S:0}
C.es1.prototype={
$1(d){return this.a.$1(!0)},
$S:81}
C.es2.prototype={
$1(d){return this.a.$1(!1)},
$S:121}
C.es0.prototype={
$1(d){return this.a.$1(!1)},
$S:168}
C.esp.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.bir(o,p),n)
w=this.b
v=C.bB5("WORLD",w.a,w.c)
u=C.bB5("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.ct:A.bj
t=C.bB5("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.CW[o.db].d?A.ct:A.c
q=x.p
s=B.a([v,u,t,C.bB5("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(C.bB5("HEIGHT",""+A.k.V(A.k.E(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.B(s,A.m,p,A.iG,A.i,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bFy(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.rH[w].a+".":"You landed on every world!"
v=B.a([new C.j7(A.om,"Again",new C.esk(o),A.c,p),new C.j7(A.p9,"Rebuild",new C.esl(o),A.aU,p)],q)
if(o.d+1<7)v.push(new C.j7(A.jT,"Next world",new C.esm(o),A.bj,p))
n.push(C.hre("Perfect landing!",w,A.bj,v))}if(o.as==="crashed")n.push(C.hre("Crash!",o.at,A.ct,B.a([new C.j7(A.om,"Try again",new C.esn(o),A.bj,p),new C.j7(A.p9,"Rebuild",new C.eso(o),A.aU,p)],q)))
return new B.an(A.a_,p,A.b1,A.t,n,p)},
$S:67}
C.esk.prototype={
$0(){var w=this.a
return w.m(w.gaxc())},
$S:0}
C.esl.prototype={
$0(){var w=this.a
return w.m(new C.esh(w))},
$S:0}
C.esh.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.esm.prototype={
$0(){var w=this.a
return w.m(new C.esg(w))},
$S:0}
C.esg.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.esn.prototype={
$0(){var w=this.a
return w.m(w.gaxc())},
$S:0}
C.eso.prototype={
$0(){var w=this.a
return w.m(new C.esf(w))},
$S:0}
C.esf.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.esq.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.esj(v,w))},
$S:0}
C.esj.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.esr.prototype={
$1(d){return this.a.y=d},
$S:8}
C.ess.prototype={
$1(d){return this.a.Q=d},
$S:8}
C.est.prototype={
$1(d){return this.a.z=d},
$S:8}
C.esu.prototype={
$0(){var w=this.a
return w.m(new C.esi(w))},
$S:0}
C.esi.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dLv.prototype={
$0(){var w=0,v=B.j(x.P),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=$.hmv
if(q==null)q=$.hmv=C.cLz()
w=3
return B.b(B.iQ(B.a([q,$.r6().cSC("assets/data/three.min.js")],x.aJ),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kQ(0,B.cP(J.r(s,1)))
q.m(new C.dLu(q,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:50}
C.dLu.prototype={
$0(){return this.a.d=x.e3.a(J.r(this.b,0))},
$S:0}
C.dL7.prototype={
$0(){return this.a.bXa(B.aS(J.r(this.b,"group")))},
$S:0}
C.dL8.prototype={
$1(d){return A.a.aS(A.o.fH(A.o.E(A.k.V(d*255),0,255),16),2,"0")},
$S:325}
C.dLw.prototype={
$0(){return C.a8N("kick",0.25)},
$S:0}
C.dL9.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dLa.prototype={
$1(d){return d.a===this.a},
$S:z+12}
C.dLb.prototype={
$0(){return C.a8N("kick",0.5)},
$S:0}
C.dLc.prototype={
$0(){return E.dZ(1300+this.a.R8.aq(900),"",40,0,0.2,"square")},
$S:0}
C.dLe.prototype={
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
u=w}if(u.cx!=null&&!A.d.b2(u.d.e,new C.dLd(u)))u.cx=null
u.go=0},
$S:0}
C.dLd.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.ayY(d)},
$S:z+12}
C.dL4.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
C.dL5.prototype={
$0(){var w=this.a
return w.m(w.gc6M())},
$S:0}
C.dL6.prototype={
$0(){return this.a.ai5(null)},
$S:0}
C.dLl.prototype={
$0(){var w=this.a.as
return w==null?null:w.f4(0,B.G(["t","shot"],x.N,x.A))},
$S:0}
C.dLm.prototype={
$0(){return this.a.cCK(this.b.a)},
$S:0}
C.dLn.prototype={
$0(){return this.a.ai5(this.b)},
$S:0}
C.dLo.prototype={
$1(d){var w=this.a
return w.m(new C.dLk(w,d))},
$S:6}
C.dLk.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.dLp.prototype={
$0(){var w=this.a
return w.m(new C.dLj(w,this.b))},
$S:0}
C.dLj.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.dLq.prototype={
$0(){var w=this.a
return w.m(new C.dLi(w))},
$S:0}
C.dLi.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.dLr.prototype={
$0(){var w=this.a
return w.m(new C.dLh(w))},
$S:0}
C.dLh.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f4(0,B.G(["t","reset"],x.N,x.A))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.Lh},
$S:0}
C.dLs.prototype={
$0(){var w=this.a
return w.m(new C.dLg(w))},
$S:0}
C.dLg.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aZs()
else w.p2=null},
$S:0}
C.dLt.prototype={
$0(){var w=this.a
return w.m(new C.dLf(w))},
$S:0}
C.dLf.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
C.c4V.prototype={
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
$S:324}
C.c4W.prototype={
$1(d){var w=new B.qW([],[]).ow(d.data,!0)
if(x.f.b(w)&&J.r(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:450}
C.fmo.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)&&w.h(d,1)},
$S:219}
C.fmp.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)||w.h(d,1)},
$S:219}
C.fmq.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)!==w.h(d,1)},
$S:219}
C.fmx.prototype={
$1(d){return!J.r(d,0)},
$S:219}
C.fmy.prototype={
$1(d){var w=J.a5(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:219}
C.fmz.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:219}
C.dNa.prototype={
$1(d){return this.a.atU(0)},
$S:9}
C.dMP.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.i87(),B.T(w).k("N<1,H>")).fI(0)},
$S:0}
C.dMS.prototype={
$1(d){return""+d},
$S:72}
C.dNb.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dMN.prototype={
$1(d){return this.a.atU(this.b)},
$S:9}
C.dMO.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.axH(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mB(0,d,a1.m6(0.15,0.3))
u=a1.mB(0,d,a1.m6(0.15,0.62))
t=a1.mB(0,"and",a1.m6(0.48,0.46))
s=a1.mB(0,a0,a1.m6(0.82,0.46))
a1=t.a
w.push(new C.nt(v.a,a1,0))
w.push(new C.nt(u.a,a1,1))
w.push(new C.nt(a1,s.a,0))
break
case 1:v=a1.mB(0,d,a1.m6(0.12,0.25))
u=a1.mB(0,d,a1.m6(0.12,0.65))
r=a1.mB(0,"xor",a1.m6(0.46,0.25))
q=a1.mB(0,"and",a1.m6(0.46,0.65))
p=a1.axG(0,a0,a1.m6(0.82,0.25),0)
o=a1.axG(0,a0,a1.m6(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.nt(a1,n,0))
m=u.a
w.push(new C.nt(m,n,1))
l=q.a
w.push(new C.nt(a1,l,0))
w.push(new C.nt(m,l,1))
w.push(new C.nt(n,p.a,0))
w.push(new C.nt(l,o.a,0))
break
case 2:k=a1.mB(0,"clock",a1.m6(0.15,0.4))
j=a1.mB(0,"not",a1.m6(0.45,0.65))
s=a1.mB(0,a0,a1.m6(0.82,0.3))
i=a1.mB(0,"buzzer",a1.m6(0.82,0.65))
a1=k.a
w.push(new C.nt(a1,s.a,0))
n=j.a
w.push(new C.nt(a1,n,0))
w.push(new C.nt(n,i.a,0))
break
default:h=a1.mB(0,d,a1.m6(0.12,0.25))
g=a1.mB(0,d,a1.m6(0.12,0.7))
f=a1.mB(0,"nor",a1.m6(0.5,0.25))
e=a1.mB(0,"nor",a1.m6(0.5,0.7))
s=a1.mB(0,a0,a1.m6(0.86,0.25))
a1=f.a
w.push(new C.nt(g.a,a1,0))
n=e.a
w.push(new C.nt(n,a1,1))
w.push(new C.nt(h.a,n,0))
w.push(new C.nt(a1,n,1))
w.push(new C.nt(a1,s.a,0))}},
$S:0}
C.dMT.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.axH(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.CH(p,"switch",new B.t(0.14*q.a,r*q.b),0))}o.mB(0,w.e,o.m6(0.86,0.5))},
$S:0}
C.dMI.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dMJ.prototype={
$2(d,e){return A.k.aK(d.c.b,e.c.b)},
$S:z+40}
C.dMK.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dML.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dMM.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.adl(this.c)
if(v.ax)C.Ji("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gI(w)
v.CW=!1
if(v.ax)E.dZ(140,"",250,0,0.3,"square")}},
$S:0}
C.dMU.prototype={
$0(){},
$S:0}
C.dMV.prototype={
$0(){return A.d.cA(this.a.e,this.b)},
$S:0}
C.dMW.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dMR.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bs(w.e,new C.dMQ(v))
w.cy=null},
$S:0}
C.dMQ.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+13}
C.dMH.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mB(0,this.b,new B.t(w.x.a*(0.3+v.ah()*0.4),w.x.b*(0.2+v.ah()*0.6))).a},
$S:0}
C.dN4.prototype={
$0(){var w=this.a
return w.m(new C.dN3(w))},
$S:0}
C.dN3.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dN5.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.aB(A.c9,B.jF(B.b4(w,w,w,new C.bct(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dMZ(v),w,w,w,new C.dN_(v),new C.dN0(v),new C.dN1(v),w,w,w,w,w,w,w,w,w,w,new C.dN2(v),w,w,w,!1,A.a4)},
$S:36}
C.dN2.prototype={
$1(d){return this.a.c8z(d.b)},
$S:69}
C.dN0.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.chb(u)
if(t!=null){v.as=t
v.at=u
return}w=v.ayv(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aF(0,u)}},
$S:49}
C.dN1.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.t(A.k.E(w.a+u.Q.a,46,u.x.a-46),A.k.E(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:21}
C.dN_.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c_M(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bs(v,new C.dMX(w))
u=t.as
u.toString
v.push(new C.nt(u,w.a,w.b))
B.kv()}}t.z=t.as=null},
$S:38}
C.dMX.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+13}
C.dMZ.prototype={
$1(d){return this.a.awv(d.b)},
$S:331}
C.dN6.prototype={
$0(){return this.a.bBn(this.b.a)},
$S:0}
C.dN7.prototype={
$0(){return this.a.atU(this.b.a)},
$S:0}
C.dN8.prototype={
$0(){var w=this.a
return w.m(new C.dMY(w))},
$S:0}
C.dMY.prototype={
$0(){var w=this.a
w.axH(0)
w.ay=null},
$S:0}
C.dN9.prototype={
$0(){return this.a.cyu(this.b)},
$S:0}
C.cSv.prototype={
$0(){var w=this,v=null,u=B.fv(v,v,v,v,B.cS(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a3,A.bZ,v,A.dA,A.bW)
u.el()
return u},
$S:269}
C.dT0.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dT_.prototype={
$0(){return this.a.d=null},
$S:0}
C.dT2.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c1A()},
$S:124}
C.dT1.prototype={
$0(){return B.a4(this.a,!1).ie()},
$S:0}
C.fmP.prototype={
$0(){return D.eah},
$S:z+34}
C.fmQ.prototype={
$0(){return D.dJw},
$S:z+22}
C.fmR.prototype={
$0(){return D.dGs},
$S:z+41}
C.fmS.prototype={
$0(){return D.e9H},
$S:z+66}
C.fmT.prototype={
$0(){return D.dSy},
$S:z+15}
C.fmU.prototype={
$0(){return D.e9p},
$S:z+16}
C.fmV.prototype={
$0(){return D.e7r},
$S:z+17}
C.fmW.prototype={
$0(){return D.e9G},
$S:z+18}
C.fmX.prototype={
$0(){return D.dIG},
$S:z+19}
C.f2r.prototype={
$2(d,e){return new C.afk($.bFA()[e],new C.f2q(e,this.a),null)},
$S:z+20}
C.f2q.prototype={
$0(){var w=this.a,v=F.aGD.h(0,$.bFA()[w].a)
$.asx=v==null?"music":v
B.a4(this.b,!1).cc(B.dW(new C.f2o(w),!1,null,x.H))},
$S:0}
C.f2o.prototype={
$1(d){return $.bFA()[this.a].e.$0()},
$S:40}
C.f2s.prototype={
$2(d,e){return new C.aec(D.azb[e],new C.f2p(this.a,e),null)},
$S:z+21}
C.f2p.prototype={
$0(){return this.a.d.$1(D.azb[this.b])},
$S:0}
C.f27.prototype={
$0(){return this.a.as=!0},
$S:0}
C.f26.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f25.prototype={
$1(d){var w=this
return new B.e_(new C.f24(w.a,w.b,w.c,w.d),null)},
$S:19}
C.f24.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.l,a1=B.aJ(a2,d,a0).w
a0=B.aJ(a2,d,a0).w
w=x.p
v=B.a([D.fAV,A.au,D.fHM,A.ae],w)
for(u=e.d,t=e.a,s=x.k,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new B.aP(12,12)
m=new B.aP(12,12)
m=B.a([new B.bz(1,A.bb,B.aL(d,A.Y,!1,d,!0,A.t,d,B.aM(),r[p],d,d,d,d,d,2,new B.e5(d,d,d,d,d,d,d,d,d,d,"Title",d,I.Eb,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b5(4,new B.bg(n,n,n,n),A.a0),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.j2,!0,A.a3,d,A.am,d,d,d,d),d),A.ac,new B.bz(2,A.bb,B.aL(d,A.Y,!1,d,!0,A.t,d,B.aM(),q[p],d,d,d,d,d,2,new B.e5(d,d,d,d,d,d,d,d,d,d,"Small line",d,I.Eb,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b5(4,new B.bg(m,m,m,m),A.a0),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.j2,!0,A.a3,d,A.am,d,d,d,d),d)],w)
n=B.a([],w)
for(l=0;l<30;++l){k=D.dtC[l]
j=new B.aP(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}h=A.d.gI(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}g=A.d.gI(i)}else g=A.bA
f=new B.ay(g,u[p].A(0,k)?1.8:1,A.r,-1)
n.push(B.aB(d,B.p(d,B.X(k,u[p].A(0,k)?A.c:A.aR,d,d,d,22),A.f,d,d,new B.o(h,d,new B.bK(f,f,f,f),new B.bg(j,j,j,j),d,d,A.n),d,d,d,A.fB,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.f22(a3,p,u,k),d,d,d,d,d,d,!1,A.a4))}A.d.v(v,B.a([new B.y("SLAB "+o,d,D.fqa,d,d,d,d,d,d,d,d,d),A.an,new B.ce(A.aM,A.e,A.i,A.m,d,A.p,d,0,m,d),A.O,new B.a6(d,44,B.cf(n,d,d,d,d,A.aM,!1),d),A.aA],w))}v.push(B.bF(A.x0,d,new C.f23(t,r,q,u,a2),d))
return new B.D(new B.Q(0,0,0,a1.f.d),B.bl(!0,new B.cU(new B.aZ(0,1/0,0,a0.a.b*0.86),B.cf(v,d,A3.yi,d,d,A.ag,!0),d),!0,!1,A.af,!0,!0),d)},
$S:108}
C.f22.prototype={
$0(){var w=this
return w.a.$1(new C.f21(w.b,w.c,w.d))},
$S:0}
C.f21.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.f23.prototype={
$0(){var w=this,v=w.a
v.m(new C.f20(v,w.b,w.c,w.d))
B.a4(w.e,!1).O(null)},
$S:0}
C.f20.prototype={
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
C.f2f.prototype={
$0(){var w=this.a
return w.m(new C.f2e(w))},
$S:0}
C.f2e.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.f2g.prototype={
$0(){return C.yY(this.b,this.a.f,"scene")},
$S:0}
C.f2h.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ar(A.d.gI(u),A.d.gak(u),0.4)
u.toString
w=this.a.ga_1().x
w===$&&B.c()
return B.c4(v,new B.o(v,v,v,v,v,new B.c2(D.b_o,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c0],x.O),v,v),A.n),A.bg)},
$S:318}
C.f2i.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(B.eN(A.A,B.cd(new B.h5(B.a([u.gui(),u.ga_1()],x.dS)),new C.f2d(u,this.b,v),w),A.f,A.e2),w,w,w)},
$S:188}
C.f2d.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gui().x
r===$&&B.c()
w=r<0.9?1:1-C.bsy(r,0.9,0.98)
v=s.ga_1().x
v===$&&B.c()
u=A.dx.av(0,v)
switch(s.gaxI().a){case 0:s=s.bAz(t.b,r,u,t.c)
break
case 1:s=s.bRi(t.b,r,u,t.c)
break
case 2:s=s.cDc(t.b,r,u,t.c)
break
case 3:s=s.bDu(t.b,r,u,t.c)
break
case 4:s=s.bGO(t.b,r,u,t.c)
break
case 5:s=s.c8A(t.b,r,u,t.c)
break
default:s=null}return B.d9(s,w)},
$S:230}
C.f2j.prototype={
$2(d,e){var w=B.awe(this.b),v=this.c.d,u=B.ar(A.d.gI(v),A.d.gak(v),0.4)
u.toString
v=B.ar(A.d.gI(v),A.d.gak(v),0.4)
v.toString
v=w.cLZ(u,A.bA,v,3.5)
u=this.a
w=u.gui().x
w===$&&B.c()
return B.aaz(B.kP(null,null,null,1,0,new C.f2c(u),A.k.E(w,0,1)),v)},
$S:1865}
C.f2c.prototype={
$1(d){var w=this.a
w.gui().sp(0,d)
if(w.as)w.m(new C.f28(w))},
$S:6}
C.f28.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f2k.prototype={
$0(){var w=this.a
w.gui().sp(0,0)
w.aep()},
$S:0}
C.f2l.prototype={
$1(d){var w=this.a
w.m(new C.f2b(w,d))
if(w.as)w.aep()},
$S:6}
C.f2b.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f2m.prototype={
$0(){var w=this.a
w.m(new C.f2a(w,this.b))
w.gui().sp(0,0)
if(w.as)w.aep()},
$S:0}
C.f2a.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.f2n.prototype={
$0(){var w=this.a
return w.m(new C.f29(w,this.b))},
$S:0}
C.f29.prototype={
$0(){var w=B.C(this.b,x.k)
return this.a.w=w},
$S:0}
C.f1Z.prototype={
$2(d,e){return A.k.aK(d.a,e.a)},
$S:1866}
C.f2_.prototype={
$1(d){return d.b},
$S:1867}
C.dnH.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dnI.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dnE.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dnF.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dnG.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dnJ.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dnK.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dnL.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dnM.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dnN.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dnO.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dnP.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dnQ.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dnR.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+14}
C.erx.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.erm.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.ero.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.erp.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.ers.prototype={
$1(d){var w=D.mR.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.ert.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.T(q),o=x.dg,n=B.C(new B.ee(new B.cQ(new B.Z(q,new C.eru(d),p.k("Z<1>")),new C.erv(r),p.k("cQ<1,qZ?>")),o),o.k("L.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aH(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.M)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+68}
C.eru.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.erv.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.erq.prototype={
$1(d){return D.mR.h(0,d.b).c===D.xi},
$S:z+36}
C.err.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.erX.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.E((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vm(0,u)
w.a6R(A.o.ao(v,1000))},
$S:9}
C.erw.prototype={
$0(){},
$S:0}
C.eri.prototype={
$0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$$0)
case 6:e.au("String","ngmy_core_reaction_lab_v1",s.a.d.ag())
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
C.erz.prototype={
$1(d){var w=null,v=this.a.b
return B.bl(!0,B.x(B.a([A.O,B.dy(!1,w,w,w,!0,w,w,w,!0,w,w,B.X(D.mR.h(0,v).b,D.mR.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fTi,w,B.d(D.mR.h(0,v).a,w,w,w,w,w,w,A.fT,w,w,w),w,w,w),B.dy(!1,w,w,w,!0,w,w,w,!0,w,w,Z.aq1,w,w,w,w,new C.ery(d),!1,w,w,w,w,w,w,w,D.fKB,w,w,w)],x.p),A.m,w,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:27}
C.ery.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.erB.prototype={
$1(d){var w,v,u=null,t=B.aJ(d,u,x.l).w,s=B.a([D.elj],x.p)
for(w=0;w<6;++w){v=D.azy[w]
s.push(B.dy(!1,u,u,u,!0,u,u,u,!0,u,u,D.bZm,u,u,u,u,new C.erA(d,v),!1,u,u,u,u,u,new B.y(v.b,u,A.lP,u,u,u,u,u,u,u,u,u),u,new B.y(v.a,u,A.fT,u,u,u,u,u,u,u,u,u),u,u,u))}return B.bl(!0,new B.cU(new B.aZ(0,1/0,0,t.a.b*0.7),B.cf(s,u,D.bDB,u,u,A.ag,!0),u),!0,!1,A.af,!0,!0)},
$S:27}
C.erA.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.erl.prototype={
$1(d){var w=null
return B.en(B.a([B.bN(!1,A.di,w,w,!0,w,w,w,new C.erj(d),w,w),B.bN(!1,A.Ak,w,w,!0,w,w,w,new C.erk(d),w,w)],x.p),w,w,F.ni,D.fHX,w,w,w,w,D.fKT,w)},
$S:18}
C.erj.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.erk.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.erV.prototype={
$0(){var w=this.a
return w.m(new C.erU(w))},
$S:0}
C.erU.prototype={
$0(){return this.a.r=!1},
$S:0}
C.erW.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.mr(new C.erL(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b9V:t
v=B.a([B.b4(u,t,t,new C.bip(w,v,new C.erM(r),new C.erN(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,B.e2(B.cd(w,new C.erO(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bIt())
return B.aB(A.c9,B.jF(new B.an(A.a_,t,A.b1,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.erP(r),t,r.gciu(),t,new C.erQ(r),new C.erR(r),new C.erS(r),t,t,t,t,t,t,t,t,t,t,new C.erT(r),t,t,t,!1,A.a4)},
$S:36}
C.erL.prototype={
$0(){return this.a.acp(this.b)},
$S:0}
C.erT.prototype={
$1(d){return this.a.cB0(d.b)},
$S:69}
C.erR.prototype={
$1(d){return this.a.civ(d.b)},
$S:49}
C.erS.prototype={
$1(d){return this.a.ciw(d.b)},
$S:21}
C.erQ.prototype={
$1(d){return this.a.b1R()},
$S:38}
C.erP.prototype={
$1(d){return this.a.ad5(d.b)},
$S:331}
C.erM.prototype={
$0(){return this.a.z},
$S:491}
C.erN.prototype={
$0(){return this.a.Q},
$S:503}
C.erO.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bMJ()
if(p.length===0)return A.bJ
w=A.w.j(0.55)
v=B.m(14)
u=B.J(A.bA,A.r,1)
t=B.a([D.fFj,A.cL],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.M)(p),++r)t.push(new B.y(p[r],q,D.foO,q,q,q,q,A.a1,q,2,q,q))
return B.p(q,B.x(t,A.E,q,A.e,A.P,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h6,q,q,q)},
$S:59}
C.ern.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.m(12),t=B.J(e.j(0.6),A.r,1),s=x.p
return new B.D(A.ee,B.B(B.a([B.p(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bd,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,A4.UP,w,w,w),A.bD,B.d(g,w,w,w,w,w,w,F.UY,w,w,w)],s),A.E,w,A.e,A.i,0,A.p),1)],s),A.E,w,A.e,A.i,0,w,w),w)},
$S:1869}
C.erH.prototype={
$0(){var w=this.a.c
w.toString
return B.a4(w,!1).ie()},
$S:0}
C.erI.prototype={
$0(){var w=this.a
return w.m(new C.erG(w))},
$S:0}
C.erG.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.erJ.prototype={
$0(){var w=this.a
return w.m(new C.erF(w))},
$S:0}
C.erF.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.erK.prototype={
$0(){var w=this.a
return w.m(new C.erE(w))},
$S:0}
C.erE.prototype={
$0(){return this.a.r=!0},
$S:0}
C.erD.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.mR.gdS(D.mR),w=w.gaf(w);w.C();){v=w.gT(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.M)(p),++r)u.push(s.cvN(p[r]))
return new B.D(H.ajA,B.x(B.a([new B.D(Af.ali,w,q),B.B(u,A.m,q,A.e,A.i,0,q,q)],v),A.E,q,A.e,A.i,0,A.p),q)},
$S:z+37}
C.erC.prototype={
$0(){return this.a.c8G(this.b)},
$S:0}
C.dnD.prototype={
$0(){var w=this,v=null,u=B.fv(v,v,v,v,B.cS(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a3,A.bZ,v,A.dA,A.bW)
u.el()
return u},
$S:269}
C.eDD.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.E((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.ao(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new B.t(s.a+q*n,s.b+r*n)
t.b=new B.t(q*v,r*v)}A.d.bs(o,new C.eDB(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new C.eDC())},
$S:9}
C.eDB.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+38}
C.eDC.prototype={
$0(){},
$S:0}
C.eDe.prototype={
$0(){},
$S:0}
C.eDd.prototype={
$0(){},
$S:0}
C.eDn.prototype={
$0(){return C.yY(this.b,this.a.d,"spark-painter")},
$S:0}
C.eDp.prototype={
$1(d){return this.a.b_8(0,d.b)},
$S:49}
C.eDt.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gak(w).aF(0,u).gcI()>2.5}else w=!1
if(w)t.a.push(u)
v.aSW(u)
v.cbN(u)
return null},
$S:21}
C.eDo.prototype={
$1(d){return this.a.b_7()},
$S:38}
C.eDu.prototype={
$1(d){return this.a.b_8(0,d.b)},
$S:23}
C.eDv.prototype={
$1(d){return this.a.b_7()},
$S:69}
C.eDw.prototype={
$0(){var w=this.a
return w.m(new C.eDm(w,this.b))},
$S:0}
C.eDm.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
C.eDx.prototype={
$0(){var w=this.a
return w.m(new C.eDl(w))},
$S:0}
C.eDl.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.eDy.prototype={
$0(){var w=this.a
return w.m(new C.eDk(w,this.b))},
$S:0}
C.eDk.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eDz.prototype={
$1(d){var w=this.a
return w.m(new C.eDj(w,d))},
$S:6}
C.eDj.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eDA.prototype={
$0(){var w=this.a
return w.m(new C.eDi(w))},
$S:0}
C.eDi.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eDq.prototype={
$0(){var w=this.a
return w.m(new C.eDh(w))},
$S:0}
C.eDh.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.eDr.prototype={
$0(){var w=this.a
return w.m(new C.eDg(w))},
$S:0}
C.eDg.prototype={
$0(){var w=this.a
A.d.a7(w.e)
A.d.a7(w.f)},
$S:0}
C.eDs.prototype={
$0(){var w=this.a
return w.m(new C.eDf(w,this.b))},
$S:0}
C.eDf.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bOg.prototype={
$1(d){return d.r<=0},
$S:z+39}
C.bOr.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bOm.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bOs.prototype={
$1(d){return this.a.M1(d)&&!d.x},
$S:z+0}
C.bOt.prototype={
$2(d,e){return Math.max(d,this.a.aBg(e))},
$S:z+6}
C.bOv.prototype={
$2(d,e){var w=this.a
return w.c4(0,d.a+"."+e,new C.bOw(w))},
$S:z+5}
C.bOw.prototype={
$0(){return this.a.a},
$S:97}
C.bOu.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:75}
C.bOx.prototype={
$2(d,e){var w=this.a
return w.c4(0,this.b.$1(this.c.$2(d,e)),new C.bOy(w))},
$S:z+5}
C.bOy.prototype={
$0(){return this.a.a},
$S:97}
C.bOi.prototype={
$2(d,e){var w=this.a
return w.c4(0,d.a+"."+e,new C.bOj(w))},
$S:z+5}
C.bOj.prototype={
$0(){return this.a.a},
$S:97}
C.bOh.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:75}
C.bOk.prototype={
$2(d,e){var w=this.a
return w.c4(0,this.b.$1(this.c.$2(d,e)),new C.bOl(w))},
$S:z+5}
C.bOl.prototype={
$0(){return this.a.a},
$S:97}
C.bOf.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bOz.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bOn.prototype={
$1(d){return d!==this.b&&this.a.aHu(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bOq.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bOp.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bOo.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bIT.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bIU.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.cqO.prototype={
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
C.fP5.prototype={
$1(d){var w
$.S()
w=B.I()
w.r=d.gp(0)
return w},
$S:1870}
C.fP7.prototype={
$2(d,e){var w
$.S()
w=B.I()
w.b=A.ab
w.c=e
w.r=d.gp(0)
w.d=A.bE
return w},
$S:1871}
C.fP8.prototype={
$5(d,e,f,g,h){return B.bu(new B.a3(d,e,d+f,e+g),new B.aP(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1872}
C.fP6.prototype={
$3(d,e,f){var w
$.S()
w=B.I()
w.sam(new B.a9(A.b4,A.b7,A.x,B.a([e,f],x.O),null,null).aB(0,d))
return w},
$S:1873}
C.bIx.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bIy.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bIw(w))},
$S:0}
C.bIw.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bIz.prototype={
$0(){return B.a([],x.ey)},
$S:1874}
C.bIA.prototype={
$1(d){return this.a.bD(d).a>15e5},
$S:463}
C.bIB.prototype={
$0(){var w,v,u
J.bFJ(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.CH(v))if(C.h7Q(v.b))w.b1k(v)
else w.a02(v)
else{u=w.a.c.be4(v)
w.aeB(u==null?"The "+$.qs().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bIv.prototype={
$1(d){return new B.e_(new C.bIt(this.a,this.b),null)},
$S:19}
C.bIt.prototype={
$2(d,e){var w=null,v=this.b,u=new C.bIu(this.a,v,e),t=$.qs(),s=v.b,r=B.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.k5,w,w,w),q=B.aF(w,w,w,w,D.bPL,w,w,w,new C.bIp(u,v),w,w,w,w,w,w),p=A.k.E(v.ch,1,2.6),o=x.p
return B.bl(!0,new B.D(A.vZ,B.x(B.a([r,A.au,D.fUo,A.W,B.B(B.a([q,B.E(B.kP(t.h(0,s).d,w,w,2.6,1,u,p),1),B.aF(w,w,w,w,D.bWF,w,w,w,new C.bIq(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.i,0,w,w),B.B(B.a([B.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,B.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b0,B.bN(!1,D.fx7,w,w,!0,w,w,w,new C.bIr(u),w,w),B.bN(!1,A.x0,w,w,!0,w,w,w,new C.bIs(d),w,w)],o),A.m,w,A.e,A.i,0,w,w)],o),A.E,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:85}
C.bIu.prototype={
$1(d){var w=this.a
w.m(new C.bIn(this.b,d))
this.c.$1(new C.bIo())
w.a.toString},
$S:6}
C.bIn.prototype={
$0(){return this.a.ch=A.k.E(this.b,1,2.6)},
$S:0}
C.bIo.prototype={
$0(){},
$S:0}
C.bIp.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
C.bIq.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
C.bIr.prototype={
$0(){return this.a.$1(1)},
$S:0}
C.bIs.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.bIQ.prototype={
$2(d,e){var w
if(d==="short"){E.dZ(1800,"",120,0,0.55,"noise")
E.dZ(200,"",160,2.2,0.4,"saw")
B.fL()
w=this.a
if(w.c!=null)w.aeB("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dZ(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.aeB("\u26a0 Overloaded! The "+$.qs().h(0,e.b).b+" can only give about "+A.k.ac(w.a.c.zS(e),2)+" amps but your gadgets are asking for "+A.k.ac(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.aeB("Burnt out! "+e.ay)
E.dZ(140,"",320,0,0.6,"noise")
E.dZ(900,"",160,1.5,0.35,"square")}},
$S:z+43}
C.bIR.prototype={
$0(){},
$S:0}
C.bI0.prototype={
$0(){},
$S:0}
C.bIS.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bIP.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.aB(A.c9,B.b4(p,p,p,new C.aja(w,v,u,t,s,r==null?A.jl:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bIJ(o),new C.bIK(o),new C.bIL(o),p,p,p,p,p,p,p,p,p,p,new C.bIM(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.b97)
w=o.Q
if(w!=null){v=B.m(14)
u=B.J(A.cS,A.r,1)
n.push(B.ao(p,B.aB(p,B.p(p,B.B(B.a([D.fvd,B.E(B.d(w,p,p,p,p,p,p,D.fn1,p,p,p),1)],q),A.E,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(D.bf9,p,u,v,p,p,A.n),p,p,p,p,A.nq,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bIN(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.e!=null)n.push(B.ao(8,o.b_f(B.B(B.a([D.bFJ,new C.j7(A.GQ,"Cut wire",new C.bIO(o),A.ct,p)],q),A.m,p,A.e,A.i,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.ao(8,o.cj3(w),p,p,10,10,p,p))}return B.jF(new B.an(A.a_,p,A.b1,A.t,n,p),A.t,p)},
$S:419}
C.bIK.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b8l(s)
if(r!=null){t.m(new C.bIH(t,r,d))
return}w=t.b2_(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.t(v*u.a,w.d*u.b).aF(0,s)
t.m(new C.bII(t,w))}},
$S:49}
C.bIH.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bII.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bIL.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new C.bIF(w,d))
else if(w.w!=null)w.m(new C.bIG(w,d.b.a9(0,w.x)))},
$S:21}
C.bIF.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bIG.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.E(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.E(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bIJ.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b8l(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.alb(u.a,u.b,v.a,v.b)!=null)E.dZ(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.aez()},
$S:38}
C.bIM.prototype={
$1(d){var w=this.a,v=d.b,u=w.b2_(v)
if(u!=null){w.m(new C.bID(w,u))
if(D.mh.aj(0,u.b))w.ctG(u)
w.a.toString
return}w.m(new C.bIE(w,w.cGg(v)))},
$S:69}
C.bID.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dZ(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dZ(200,"",70,0,0.2,"saw")}},
$S:0}
C.bIE.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bIN.prototype={
$0(){var w=this.a
return w.m(new C.bIC(w))},
$S:0}
C.bIC.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bIO.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dZ(300,"",50,0,0.35,"noise")
w.aez()},
$S:0}
C.bI1.prototype={
$0(){return this.a.bqt(this.b)},
$S:0}
C.bIk.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.B(B.a([B.d(d,w,w,w,w,w,w,D.fhc,w,w,w),B.E(B.kP(this.b.d,w,w,g,h,new C.bIm(this.a,f),A.k.E(e,h,g)),1)],x.p),A.m,w,A.e,A.i,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1875}
C.bIm.prototype={
$1(d){var w=this.a
w.m(new C.bIl(this.b,d))
w.a.toString},
$S:6}
C.bIl.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bI7.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dZ(260,"",70,0,0.35,"noise")
w.aez()},
$S:0}
C.bI8.prototype={
$0(){var w=this.a
return w.m(new C.bI6(w))},
$S:0}
C.bI6.prototype={
$0(){return this.a.d=null},
$S:0}
C.bI9.prototype={
$0(){this.a.m(new C.bI5(this.b,this.c))
E.dZ(900,"",40,0,0.3,"noise")},
$S:0}
C.bI5.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bIc.prototype={
$0(){return this.a.b1k(this.b)},
$S:0}
C.bId.prototype={
$0(){return this.a.a02(this.b)},
$S:0}
C.bIe.prototype={
$0(){return this.a.a1G(this.b)},
$S:0}
C.bIf.prototype={
$0(){var w=this.a
w.m(new C.bI4(this.b,this.c))
w.a.toString},
$S:0}
C.bI4.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bIg.prototype={
$0(){var w=this.a
w.m(new C.bI3(this.b,this.c))
w.a.toString},
$S:0}
C.bI3.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bIh.prototype={
$0(){var w=this.a
w.m(new C.bI2(this.b,this.c))
w.a.toString},
$S:0}
C.bI2.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bIi.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bIj.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bIa.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bIb.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fmA.prototype={
$1(d){return d.aH8("bulb")},
$S:z+2}
C.fmB.prototype={
$1(d){return d.pZ(0,"switch")&&d.aH8("bulb")},
$S:z+2}
C.fmC.prototype={
$1(d){return A.d.b2(d.a,new C.fmn())},
$S:z+2}
C.fmn.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fmD.prototype={
$1(d){return d.pZ(0,"resistor")&&A.d.b2(d.a,new C.fmm())},
$S:z+2}
C.fmm.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fmE.prototype={
$1(d){return!d.pZ(0,"battery")&&d.aH8("bulb")},
$S:z+2}
C.fmr.prototype={
$1(d){return A.d.b2(d.a,new C.fml())},
$S:z+2}
C.fml.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fms.prototype={
$1(d){return A.d.b2(d.a,new C.fmk())},
$S:z+2}
C.fmk.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fmt.prototype={
$1(d){return A.d.b2(d.a,new C.fmj())},
$S:z+2}
C.fmj.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fmu.prototype={
$1(d){var w=d.a
return A.d.b2(w,new C.fmh())&&A.d.b2(w,new C.fmi())&&d.pZ(0,"buck")},
$S:z+2}
C.fmh.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fmi.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fmv.prototype={
$1(d){var w=d.a
return A.d.b2(w,new C.fmf())&&A.d.b2(w,new C.fmg())},
$S:z+2}
C.fmf.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fmg.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fmw.prototype={
$1(d){return A.d.b2(d.a,new C.fme())},
$S:z+2}
C.fme.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.dXz.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a7(0)
w.v(0,v.b)},
$S:0}
C.dXI.prototype={
$1(d){var w=this.a.d
return w.aHu(d)&&w.CH(d)},
$S:z+0}
C.dXJ.prototype={
$1(d){return d.x},
$S:z+0}
C.dXK.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.dXL.prototype={
$0(){},
$S:0}
C.dXy.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.m(22),o=x.p,n=B.a([D.fMR,A.au,D.fx2,A.W],o)
for(w=this.a,v=0;v<19;++v){u=D.R6[v]
t=A.c.j(0.06)
s=new B.aP(14,14)
r=new B.ay(A.bA,1,A.r,-1)
n.push(B.aB(q,B.p(q,B.x(B.a([new B.y(u.a,q,A.iK,q,q,q,q,q,q,q,q,q),A.bD,new B.y(u.b,q,D.fnN,q,q,q,q,A.a1,q,3,q,q)],o),A.E,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(t,q,new B.bK(r,r,r,r),new B.bg(s,s,s,s),q,q,A.n),q,q,q,A.cv,A.bf,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dXx(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eS(q,F.lA,new B.D(A.bQ,new B.a6(340,q,B.cf(n,q,q,q,q,A.ag,!0),q),q),q,q,q,q,A.d8,q,new B.b7(p,A.a0),q)},
$S:48}
C.dXx.prototype={
$0(){B.a4(this.b,!1).O(null)
var w=this.a
w.m(new C.dXw(w,this.c))
E.dZ(800,"",120,-0.5,0.3,"square")},
$S:0}
C.dXw.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bje()},
$S:0}
C.dXu.prototype={
$1(d){return new C.W3(this.a.d,null)},
$S:z+57}
C.dXv.prototype={
$0(){},
$S:0}
C.dXH.prototype={
$1(d){return new B.e_(new C.dXG(this.a),null)},
$S:19}
C.dXG.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ail(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.bj:A.aQ
k=B.aJ(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.B(B.a([D.fK2,A.b0,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.i,0,m,m),A.O,B.bx(B.m(4),B.kx(A.bA,m,m,5,m,w.a/11,new B.m6(f,x.B)),A.ap),A.ae],v)
if(h)u.push(D.fAi)
else{h=f.j(0.1)
t=B.m(14)
s=B.J(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Aa.K6,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.Ec,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.x(B.a([r,A.au,q,new B.bO(A.a8,m,m,B.bN(!1,B.d(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.dXE(l,e),m,m),m)],v),A.E,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bf,m,m,m))}u.push(A.W)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aP(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dn,1,A.r,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.aB:A.c
u.push(B.aB(m,B.p(m,new B.ce(A.aM,A.e,A.i,A.m,m,A.p,m,0,B.a([new B.y(s,m,A.a9Z,m,m,m,m,m,m,m,m,m),A.at,new B.bz(1,A.bb,new B.y(r.a,m,new B.F(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bK(n,n,n,n),new B.bg(t,t,t,t),m,m,A.n),m,m,m,A.eI,A.nq,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.dXF(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bl(!0,new B.cU(new B.aZ(0,1/0,0,k.a.b*0.75),B.cf(u,m,A3.yi,m,m,A.ag,!0),m),!0,!1,A.af,!0,!0)},
$S:85}
C.dXE.prototype={
$0(){var w=this.a
w.m(new C.dXC(w))
this.b.$1(new C.dXD())
w.F9()},
$S:0}
C.dXC.prototype={
$0(){var w=this.a
$.ail()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.dXD.prototype={
$0(){},
$S:0}
C.dXF.prototype={
$0(){var w=this.a
w.m(new C.dXA(w,this.b))
this.c.$1(new C.dXB())
w.F9()},
$S:0}
C.dXA.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dXB.prototype={
$0(){},
$S:0}
C.dXN.prototype={
$0(){return B.a4(this.a,!1).ie()},
$S:0}
C.dXO.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.mo("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a4(t.b,!1).cc(B.dW(new C.dXM(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dXM.prototype={
$1(d){B.lx("construction")
return Ai.hLH()},
$S:z+46}
C.dXP.prototype={
$0(){return C.hxC(this.a,"ELECTRONICS LAB",this.b,A.aQ)},
$S:0}
C.dXQ.prototype={
$0(){var w=this.a
return w.m(w.d.gcXR())},
$S:0}
C.dXR.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gBy(v))
w.F9()},
$S:0}
C.cHY.prototype={
$2(d,e){var w=null,v=this.a.gaxN().x
v===$&&B.c()
return B.b4(w,w,w,new C.bak(v,w),A.ax)},
$S:64}
C.cHX.prototype={
$3(d,e,f){var w=new B.aG($.S().r,A.ah,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.D(new B.aY(v,t))
w.D(new B.c5(v,u,v+e,u))
w.D(new B.c5(v,u,v,u+e))
w.D(new B.c5(v,u,v-e,u))
w.D(new B.c5(v,u,v,t))
w.D(new B.bt())
t=B.I()
t.r=A.c.j(f).gp(0)
this.a.aG(w,t)},
$S:398}
C.fTX.prototype={
$3(d,e,f){return new C.Vm(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+47}
C.fTY.prototype={
$4(d,e,f,g){var w=x.Y
return new B.d0(e,!1,B.ir(A.A,g,null,new B.be(B.cI(A.cu,e,null),new B.bp(0.85,1,w),w.k("be<bP.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.dTY.prototype={
$0(){return B.a4(this.a,!1).ie()},
$S:0}
C.dTX.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c_c(o):q.bCx(o,p),m=x.p
p=B.a([B.oh(new B.mA(n,new B.bE(p,x.aC)),A.q8,B.pD(),A.b5,A.b5,new C.dTV())],m)
n=t.d
if(n){w=A.k.F(q.gSe(),12)<4
v=w?150:96
u=B.m(16)
m=B.a([A.at],m)
if(w)m.push(D.bFu)
else m.push(A.b0)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.bj:A.av,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.at)
p.push(B.ao(s,B.at(B.dd(s,B.B(m,A.m,s,A.e,A.i,0,s,s),s,s,A.eu,new B.o(A.w,s,s,u,s,s,A.n),A.mD,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.v9)p.push(B.ao(s,B.at(B.p(s,s,A.f,s,s,A.Lm,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.wO)p.push(B.ao(s,B.p(s,s,A.f,s,s,A.Lm,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.aB(s,B.at(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dTW(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bx(r,new B.an(A.a_,s,A.b1,A.t,p,s),A.ap)},
$S:298}
C.dTV.prototype={
$2(d,e){var w=x.Y
return new B.d0(e,!1,B.ir(A.A,d,null,new B.be(e,new B.bp(0.92,1,w),w.k("be<bP.T>"))),null)},
$S:456}
C.dTW.prototype={
$0(){var w=this.a
return w.m(new C.dTU(w))},
$S:0}
C.dTU.prototype={
$0(){return this.a.e=null},
$S:0}
C.dTT.prototype={
$0(){var w=this.a
return w.m(new C.dTS(w,this.b))},
$S:0}
C.dTS.prototype={
$0(){return this.a.e=A.d.cv(F.kl,this.b)},
$S:0}
C.dTR.prototype={
$0(){var w=this.a
return w.m(new C.dTQ(w))},
$S:0}
C.dTQ.prototype={
$0(){return this.a.e=0},
$S:0}
C.dTM.prototype={
$0(){var w=this.a
return w.m(new C.dTL(w))},
$S:0}
C.dTL.prototype={
$0(){return this.a.e=null},
$S:0}
C.dTP.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.m(o?20:8),m=A.w.j(0.55),l=x.p
m=B.p(p,B.B(B.a([D.fSG,A.at,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eM,p,p,p,D.fu2,p,p,p),1),B.d(A.a.aS(A.o.u(B.de(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.aS(A.o.u(B.fP(new B.V(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qO,p,p,p)],l),A.m,p,A.e,A.i,0,p,p),A.f,m,p,p,p,24,p,p,A.kG,p,p,p)
w=this.a
v=B.a([B.b4(p,p,p,new C.bwG(w.gSe(),this.c.d,p),A.ax)],l)
o=w.e
if(o!=null){u=B.m(10)
t=B.J(A.aZ,A.r,1)
s=B.m(10)
o=B.p(p,B.B(B.a([B.aB(p,B.p(p,p,A.f,p,p,A.add,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dTO(w),p,p,p,p,p,p,!1,A.a4),A.en,B.p(p,p,A.f,p,p,A.adj,p,12,p,p,p,p,p,12),A.en,B.p(p,p,A.f,p,p,D.b4p,p,12,p,p,p,p,p,12),A.at,B.E(B.d(F.kl[o].a,p,1,A.a1,p,p,p,A.a9T,p,p,p),1)],l),A.m,p,A.e,A.i,0,p,p),A.f,A.cq,p,p,p,24,p,p,A.fC,p,p,p)
r=w.e
r.toString
v.push(B.bU(0,new B.D(D.bC8,B.p(p,B.bx(s,B.x(B.a([o,B.E(B.b4(p,p,p,new C.af1(r,w.gSe(),p),A.fF),1)],l),A.m,p,A.e,A.i,0,A.p),A.ap),A.f,p,p,new B.o(A.w,p,t,u,D.dpR,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.m(18)
t=B.J(A.aZ,A.r,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jB,w.avL(F.kl[q],34,!1),p))
v.push(B.ao(8,B.at(B.p(p,B.B(s,A.m,p,A.e,A.P,0,p,p),A.f,p,p,new B.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lE,p,p,p),p,p,p),p,p,0,0,p,p))
return B.bx(n,B.p(p,B.x(B.a([m,B.E(new B.an(A.a_,p,A.b1,A.t,v,p),1)],l),A.m,p,A.e,A.i,0,A.p),A.f,T.YL,p,p,p,p,p,p,p,p,p,p),A.ap)},
$S:298}
C.dTO.prototype={
$0(){var w=this.a
return w.m(new C.dTN(w))},
$S:0}
C.dTN.prototype={
$0(){return this.a.e=null},
$S:0}
C.fn4.prototype={
$0(){return D.ebL},
$S:z+67}
C.fn5.prototype={
$0(){return D.dK3},
$S:z+49}
C.fn6.prototype={
$0(){return D.dGF},
$S:z+50}
C.fn7.prototype={
$0(){return D.dJu},
$S:z+51}
C.fn8.prototype={
$0(){return D.dOm},
$S:z+52}
C.fn9.prototype={
$0(){return D.e7u},
$S:z+53}
C.fna.prototype={
$0(){return D.e9F},
$S:z+54}
C.fnb.prototype={
$0(){return D.dNH},
$S:z+55}
C.ckw.prototype={
$0(){return B.a4(this.a,!1).ie()},
$S:0}
C.ckx.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=B.a([],k)
for(w=$.hBf(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aP(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.dr,16)],t)
n=A.c.j(0.85)
j.push(B.aB(m,B.p(m,new B.an(A.a_,m,A.aa,A.t,B.a([new B.cN(m,-6,-6,m,m,m,new B.y(r.c,m,Ag.K4,m,m,m,m,m,m,m,m,m),m),new B.bO(A.lU,m,m,B.x(B.a([new B.y(r.a,m,D.fsC,m,m,m,m,m,m,m,m,m),A.cL,new B.y(r.b,m,new B.F(!0,n,m,m,m,m,12,A.a7,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.E,m,A.e,A.P,0,A.p),m)],k),m),A.f,m,m,new B.o(m,m,m,new B.bg(q,q,q,q),p,new B.a9(A.ay,A.aE,A.x,o,m,m),A.n),m,v,m,m,A.bz,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.ckv(d,r),m,m,m,m,m,m,!1,A.a4))}return B.bX(A.bC,j,A.bq,m,14,14)},
$S:159}
C.ckv.prototype={
$0(){return B.a4(this.a,!1).cc(B.dW(new C.cku(this.b),!1,null,x.H))},
$S:0}
C.cku.prototype={
$1(d){return this.a.f.$0()},
$S:40}
C.eO1.prototype={
$0(){var w=this.a
return w.w=w.d[w.b5q(w.f)]},
$S:0}
C.eNY.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cR.ah()*7},
$S:0}
C.eNX.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bK(0,A.c5)
w.w=""},
$S:0}
C.eO_.prototype={
$0(){var w=this.a
return w.m(new C.eNZ(w,this.b))},
$S:0}
C.eNZ.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cA(w,this.b)},
$S:0}
C.eO0.prototype={
$1(d){return this.a.b_I(0)},
$S:2}
C.e_g.prototype={
$0(){return C.Ji("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e_h.prototype={
$0(){},
$S:0}
C.e_b.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e_d.prototype={
$0(){return this.a.b_K(this.b)},
$S:0}
C.e_e.prototype={
$0(){var w=this.a
return w.m(new C.e_c(w))},
$S:0}
C.e_c.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e_f.prototype={
$0(){var w=this.a
return w.b_K(w.d)},
$S:0}
C.dLC.prototype={
$2(d,e){return d+e},
$S:80}
C.dLD.prototype={
$0(){},
$S:0}
C.dLx.prototype={
$2(d,e){return d+e},
$S:80}
C.dLA.prototype={
$0(){var w=this.a
return w.m(new C.dLz(w,this.b))},
$S:0}
C.dLz.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dLB.prototype={
$0(){var w=this.a
return w.m(new C.dLy(w))},
$S:0}
C.dLy.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.dXi.prototype={
$0(){return C.yY(this.b,this.a.d,"drawing")},
$S:0}
C.dXj.prototype={
$1(d){var w=this.a
return w.m(new C.dXh(w,d))},
$S:49}
C.dXh.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aJg(u,v,t))},
$S:0}
C.dXk.prototype={
$1(d){var w=this.a
return w.m(new C.dXg(w,d))},
$S:21}
C.dXg.prototype={
$0(){return A.d.gak(this.a.e).c.push(this.b.b)},
$S:0}
C.dXl.prototype={
$1(d){var w=this.a
return w.m(new C.dXf(w,d))},
$S:23}
C.dXf.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aJg(u,v,t))},
$S:0}
C.dXm.prototype={
$0(){var w=this.a
return w.m(new C.dXe(w,this.b))},
$S:0}
C.dXe.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.dXn.prototype={
$1(d){var w=this.a
return w.m(new C.dXd(w,d))},
$S:6}
C.dXd.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dXo.prototype={
$0(){var w=this.a
return w.m(new C.dXc(w))},
$S:0}
C.dXc.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dXp.prototype={
$0(){var w=this.a
return w.m(new C.dXb(w))},
$S:0}
C.dXb.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.dXq.prototype={
$0(){var w=this.a
return w.m(A.d.gBy(w.e))},
$S:0}
C.dXr.prototype={
$0(){var w=this.a
return w.m(new C.dXa(w))},
$S:0}
C.dXa.prototype={
$0(){var w=this.a
w.x=D.ayq[A.o.F(A.d.cv(D.ayq,w.x)+1,4)]},
$S:0}
C.elK.prototype={
$0(){return this.a.f.M(0,this.b)},
$S:0}
C.elL.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.Ji("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.elJ(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.Ji("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.elJ.prototype={
$0(){var w=this.a
w.r.v(0,B.a([this.b,this.c],x.t))
w.f.a7(0)},
$S:0}
C.elM.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.elI(w))},
$S:12}
C.elI.prototype={
$0(){var w=this.a
w.f.a7(0)
w.x=!1},
$S:0}
C.elQ.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return B.aB(w,B.ls(new C.elO(v,e),w,A.b5,A.q8,w,w,new B.bp(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.elP(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:83}
C.elP.prototype={
$0(){return this.a.can(this.b)},
$S:0}
C.elO.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dr(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fG(3.141592653589793*e)
m=B.m(16)
w=o?p:D.c4N
if(o)v=q.a.r.t(0,q.b)?A.bj.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.J(u.r.t(0,t)?A.bj:A.aZ,A.r,1)
if(o){r=B.dr()
r.fG(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fw(A.A,B.d(u[t],p,p,p,p,p,p,G.aa2,p,p,p),p,r,!0)
u=r}else u=D.fLy
return B.fw(A.A,B.p(A.A,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:111}
C.elR.prototype={
$0(){var w=this.a
return w.m(new C.elN(w,this.b))},
$S:0}
C.elN.prototype={
$0(){var w=this.a
w.d=this.b.a
w.at4()},
$S:0}
C.elS.prototype={
$0(){var w=this.a
return w.m(w.gbLc())},
$S:0}
C.evF.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.evG.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.evD.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.evE.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.evC(w))},
$S:12}
C.evC.prototype={
$0(){return this.a.f=-1},
$S:0}
C.evH.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.evI.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.evJ.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b_J()},
$S:12}
C.evK.prototype={
$0(){return this.a.cat(this.b)},
$S:0}
C.eJw.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:73}
C.eJF.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a1,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.Q,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kF,B.B(B.a([v,A.ac,new B.ds(1,A.cn,B.eN(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e2),w)],x.p),A.m,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1876}
C.eJB.prototype={
$1(d){return this.a.m(new C.eJA())},
$S:2}
C.eJA.prototype={
$0(){},
$S:0}
C.eJC.prototype={
$0(){var w=this.a
return w.m(new C.eJz(w,this.b))},
$S:0}
C.eJz.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eJD.prototype={
$1(d){var w=this.a
return w.m(new C.eJy(w,d))},
$S:6}
C.eJy.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
C.eJE.prototype={
$0(){var w=this.a
return w.m(new C.eJx(w))},
$S:0}
C.eJx.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ekP.prototype={
$0(){},
$S:0}
C.ekQ.prototype={
$0(){},
$S:0}
C.ekI.prototype={
$0(){var w=this.a
return w.m(new C.ekH(w))},
$S:0}
C.ekH.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c1(u,1,!1,x.S)
w.r=0.9
C.a8N("hat",0.6)},
$S:0}
C.ekJ.prototype={
$0(){var w=this.a
return w.m(new C.ekG(w))},
$S:0}
C.ekG.prototype={
$0(){this.a.y=1.1
C.q4("bell",36,200,0.4)},
$S:0}
C.ekK.prototype={
$0(){var w=this.a
return w.m(new C.ekF(w))},
$S:0}
C.ekF.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aq(Math.max(v,u)-t+1)
w.as=u
C.q4("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.ekL.prototype={
$0(){var w=this.a
return w.m(new C.ekE(w,this.b))},
$S:0}
C.ekE.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.ekM.prototype={
$1(d){var w=this.a
return w.m(new C.ekD(w,d))},
$S:6}
C.ekD.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.dY(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.ekN.prototype={
$1(d){var w=this.a
return w.m(new C.ekC(w,d))},
$S:6}
C.ekC.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
C.ekO.prototype={
$1(d){var w=this.a
return w.m(new C.ekB(w,d))},
$S:6}
C.ekB.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
C.cyj.prototype={
$0(){return B.a4(this.a,!1).ie()},
$S:0}
C.cyk.prototype={
$0(){var w=this.a
return C.hxC(this.b,w.c,w.e,w.d)},
$S:0}
C.fXO.prototype={
$1(d){var w,v=null,u=B.m(24),t=this.a,s=t.j(0.4)
t=B.d(this.b,v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=B.d(this.c,v,v,v,v,v,v,D.fhQ,v,v,v)
return B.en(B.a([B.bN(!1,D.fAn,v,v,!0,v,v,v,new C.fXN(d),v,v)],x.p),v,v,F.ni,w,v,v,v,new B.b7(u,new B.ay(s,1,A.r,-1)),t,v)},
$S:18}
C.fXN.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.cyf.prototype={
$0(){B.f1()
this.a.e.$0()},
$S:0}
C.cye.prototype={
$0(){B.f1()
this.a.e.$0()},
$S:0}
C.cyl.prototype={
$0(){B.f1()
this.a.e.$0()},
$S:0}
C.cyg.prototype={
$0(){var w=this.a
A.d.W(w.iM$,this.b.bk())
if(w.c!=null)this.c.$0()},
$S:0}
C.cyi.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.E((v-w.oH$.a)/1e6,0,0.04)
w.oH$=d
w.nj$=A.o.ao(v,1000)
w.q9(u)
if(w.c!=null)w.m(new C.cyh())},
$S:9}
C.cyh.prototype={
$0(){},
$S:0}
C.cks.prototype={
$0(){var w=this
return C.q4(w.a,w.b,w.c,w.d)},
$S:1}
C.flu.prototype={
$0(){var w=null,v=B.fv(w,w,w,w,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,this.b,w,w,w,w,w,"monospace",w,w,this.c,w,w,A.Q,w,w,!0,w,w,w,w,w,w,w,w),this.a),A.a3,A.bZ,w,A.dA,A.bW)
v.el()
return v},
$S:269}
C.fPg.prototype={
$0(){return this.a.ah()},
$S:79}
C.fri.prototype={
$2(d,e){return d.j(A.k.E(d.a*this.a*e,0,1))},
$1(d){return this.$2(d,1)},
$S:1877}
C.frj.prototype={
$4$blur$shift(d,e,f,g){var w,v=this
$.S()
w=B.I()
w.b=A.ab
w.c=e
w.e=A.dT
w.r=d.gp(0)
if(f!=null)w.z=f
C.Db(v.a,v.b,null,w).a3(v.c,v.d.a9(0,g))},
$2(d,e){return this.$4$blur$shift(d,e,null,A.I)},
$3$blur(d,e,f){return this.$4$blur$shift(d,e,f,A.I)},
$S:1878}
C.fPh.prototype={
$2(d,e){return d+this.a[e]},
$S:495}
C.fPi.prototype={
$2(d,e){return d+this.a[e]},
$S:495}
C.ckp.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ckk.prototype={
$0(){var w=this.a
w.at=0
w.ax=""},
$S:0}
C.ckl.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ckj(w,d))},
$S:6}
C.ckj.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.ckm.prototype={
$0(){var w=this.a.a?"Your animated title is saved (a moving GIF).":"Could not save here. Try another browser."
return this.b.ax=w},
$S:0}
C.ckn.prototype={
$0(){return this.a.ax="Could not make the animation. Try a shorter title."},
$S:0}
C.cko.prototype={
$0(){return this.a.at=-1},
$S:0}
C.ck9.prototype={
$2(d,e){var w=null,v=this.a,u=v.gJk().x
u===$&&B.c()
return B.b4(w,w,w,new C.b8W(u,v.e.a.a,v.f,v.r,v.y,v.gtp(),v.x,w),A.fF)},
$S:64}
C.cka.prototype={
$1(d){return this.a.m(new C.ck8())},
$S:2}
C.ck8.prototype={
$0(){},
$S:0}
C.ckb.prototype={
$0(){return this.a.bp5(this.b.a)},
$S:0}
C.ckc.prototype={
$0(){var w=this.a
return w.m(new C.ck7(w,this.b))},
$S:0}
C.ck7.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.ckd.prototype={
$0(){var w=this.a
return w.m(new C.ck6(w,this.b))},
$S:0}
C.ck6.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cke.prototype={
$0(){var w=this.a
return w.m(new C.ck5(w,this.b))},
$S:0}
C.ck5.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ckf.prototype={
$0(){var w=this.a
return w.m(new C.ck4(w,this.b))},
$S:0}
C.ck4.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.ckg.prototype={
$0(){var w=this.a
return w.m(new C.ck3(w))},
$S:0}
C.ck3.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
C.ckh.prototype={
$0(){var w=this.a.gJk()
w.iO(0,0)
w.cM(0)},
$S:0}
C.cki.prototype={
$1(d){var w=this.a
return w.m(new C.ck2(w,d))},
$S:6}
C.ck2.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.e1h.prototype={
$0(){return this.a.k1=!1},
$S:0}
C.e1i.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.e1g(w,d))},
$S:z+10}
C.e1g.prototype={
$0(){return this.a.cvp(this.b)},
$S:0}
C.e1j.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.e1f(w))},
$S:71}
C.e1f.prototype={
$0(){return this.a.k1=!0},
$S:0}
C.e1k.prototype={
$0(){var w,v,u,t=this.a,s=J.a5(t),r=s.gL(t),q=new Float64Array(r*4)
for(w=0;w<s.gL(t);++w){v=J.r(s.h(t,w),0)*3.141592653589793/180
u=J.r(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:580}
C.e1d.prototype={
$0(){return this.a.id=D.a4R},
$S:0}
C.e1e.prototype={
$0(){var w=this.b.a,v=B.T(w).k("Z<1>")
v=B.pr(new B.Z(w,new C.e1c(this.c),v),6,v.k("L.E"))
w=B.C(v,B.a7(v).k("L.E"))
return this.a.id=w},
$S:0}
C.e1c.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+58}
C.e1b.prototype={
$1(d){var w=null,v=B.cg(B.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,B.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.t,w,A.y,w,w,w,w,A.ag)
return B.en(B.a([B.bN(!1,A.pC,w,w,!0,w,w,w,new C.e1a(d),w,w)],x.p),w,w,F.ni,v,w,w,w,w,D.fLD,w)},
$S:18}
C.e1a.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.e1D.prototype={
$0(){return C.yY(this.b,this.a.d,"earth")},
$S:0}
C.e1E.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.fy=n
w=o.r
v=o.w
u=o.x
t=o.y
s=o.gWz()
r=o.z
q=x.p
n=B.a([B.aB(A.c9,B.b4(p,p,p,new C.bgR(w,v,u,t,s*r,r,o.fx,o.CW,o.cx,o.cy,o.dy,o.fr,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.e1r(o),new C.e1s(o),new C.e1t(o),p,p,p,p,p,p,p,new C.e1u(o),p,p,p,!1,A.a4)],q)
if(o.r==null&&!o.k1)n.push(A6.adX)
if(o.r==null&&o.k1)n.push(B.at(new B.D(A.qe,B.x(B.a([D.bYn,A.W,D.fKo,A.an,D.fC9,A.aA,B.dl(A.uA,A.Ee,o.gc2u(),p)],q),A.m,p,A.e,A.P,0,A.p),p),p,p,p))
w=this.b
if(w!=null)n.push(B.ao(8,o.cb4(w),p,p,10,10,p,p))
return new B.ey(new B.an(A.a_,p,A.b1,A.t,n,p),o.d)},
$S:386}
C.e1s.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:256}
C.e1t.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.E(u.go*d.d,0.8,16)
else{w=57.2958/(u.gWz()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.E(u.x+v.b*w,-85,85)}},
$S:236}
C.e1r.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gWz()*u.z)
v=d.a.a
u.Q=A.k.E(-v.a*w,-160,160)
u.as=A.k.E(v.b*w,-100,100)},
$S:616}
C.e1u.prototype={
$1(d){var w=this.a,v=w.cb7(d.b)
if(v!=null)w.m(new C.e1l(w,v))
else w.m(new C.e1m(w))},
$S:69}
C.e1l.prototype={
$0(){return this.a.ayk(this.b)},
$S:0}
C.e1m.prototype={
$0(){return this.a.fx=null},
$S:0}
C.e1F.prototype={
$0(){var w=this.a
w.e.bK(0,A.c5)
w.m(new C.e1q(w,this.b))},
$S:0}
C.e1q.prototype={
$0(){var w=this.a
w.id=D.a4R
w.ayk(this.b)},
$S:0}
C.e1J.prototype={
$0(){var w=this.a
return w.m(new C.e1C(w))},
$S:0}
C.e1C.prototype={
$0(){var w=this.a
w.fx=null
w.aug(15,w.y,1)},
$S:0}
C.e1K.prototype={
$0(){var w=this.a
return w.m(new C.e1B(w,this.b))},
$S:0}
C.e1B.prototype={
$0(){var w=this.b.b
return this.a.aug(w.a,w.b,w.c)},
$S:0}
C.e1L.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new C.e1A(w,v))},
$S:0}
C.e1A.prototype={
$0(){var w=this.b.a
return this.a.ayk(w[A.cR.aq(w.length)])},
$S:0}
C.e1M.prototype={
$1(d){var w=this.a
return w.m(new C.e1z(w,d))},
$S:6}
C.e1z.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
C.e1N.prototype={
$1(d){var w=this.a
return w.m(new C.e1y(w,d))},
$S:6}
C.e1y.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.e1O.prototype={
$1(d){var w=this.a
return w.m(new C.e1x(w,d))},
$S:6}
C.e1x.prototype={
$0(){return this.a.fr=this.b},
$S:0}
C.e1P.prototype={
$0(){var w=this.a
return w.m(new C.e1w(w))},
$S:0}
C.e1w.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.e1Q.prototype={
$0(){var w=this.a
return w.m(new C.e1v(w))},
$S:0}
C.e1v.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
C.e1G.prototype={
$0(){var w=this.a
return w.m(new C.e1p(w))},
$S:0}
C.e1p.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.e1H.prototype={
$0(){var w=this.a
return w.m(new C.e1o(w))},
$S:0}
C.e1o.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.e1I.prototype={
$0(){var w=this.a
return w.m(new C.e1n(w))},
$S:0}
C.e1n.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
C.e19.prototype={
$2(d,e){var w=null
return B.E(B.x(B.a([B.d(d,w,w,w,w,w,w,D.aSp,w,w,w),A.vd,B.d(e,w,2,A.a1,w,w,w,A.V7,w,w,w)],x.p),A.E,w,A.e,A.i,0,A.p),1)},
$S:126}
C.e18.prototype={
$0(){var w=this.a
return w.m(new C.e17(w))},
$S:0}
C.e17.prototype={
$0(){return this.a.fx=null},
$S:0}
C.djJ.prototype={
$0(){var w=null,v=B.fv(w,w,w,w,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.d7X,w,w),this.a),A.a3,A.bZ,w,A.dA,A.bW)
v.el()
return v},
$S:269}
C.djK.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new B.t(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1881}
C.fmY.prototype={
$0(){return D.dM_},
$S:z+59}
C.fmZ.prototype={
$0(){return D.e9o},
$S:z+60}
C.fn_.prototype={
$0(){return D.dM1},
$S:z+61}
C.fn0.prototype={
$0(){return D.dGr},
$S:z+62}
C.fn1.prototype={
$0(){return D.dLZ},
$S:z+63}
C.fn2.prototype={
$0(){return D.e7v},
$S:z+64}
C.fn3.prototype={
$0(){return D.e7t},
$S:z+65}
C.eKd.prototype={
$1(d){},
$S:z+10}
C.eKe.prototype={
$1(d){},
$S:71}
C.eKa.prototype={
$0(){return B.a4(this.a,!1).ie()},
$S:0}
C.eKb.prototype={
$0(){var w=this.a
return w.m(new C.eK9(w))},
$S:0}
C.eK9.prototype={
$0(){var w=this.a
return w.d=A.o.F(w.gaTo()+1,16)},
$S:0}
C.eKc.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=B.a([],l)
for(w=$.hBe(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new B.aP(18,18)
q=s.d
p=new B.ay(q.j(0.5),1,A.r,-1)
o=B.a([q.j(0.28),D.bod],u)
k.push(B.aB(n,B.p(n,B.x(B.a([B.X(s.c,q,n,n,n,30),A.O,new B.y(s.a,n,D.fmy,n,A.K,n,n,n,n,2,n,n),A.cL,new B.y(s.b,n,D.frZ,n,A.K,n,n,n,n,2,n,n)],l),A.m,n,A.b8,A.i,0,A.p),A.f,n,n,new B.o(n,n,new B.bK(p,p,p,p),new B.bg(r,r,r,r),n,new B.a9(A.ay,A.aE,A.x,o,n,n),A.n),n,v,n,n,A.cj,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eK8(d,s),n,n,n,n,n,n,!1,A.a4))}return B.bX(A.fI,k,A.bq,n,10,10)},
$S:159}
C.eK8.prototype={
$0(){return B.a4(this.a,!1).cc(B.dW(new C.eK7(this.b),!1,null,x.H))},
$S:0}
C.eK7.prototype={
$1(d){return this.a.e.$0()},
$S:40}
C.eCT.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
C.eD3.prototype={
$0(){return C.yY(this.b,this.a.d,"solar-system")},
$S:0}
C.eD4.prototype={
$2(d,e){var w,v=null,u=this.a,t=new B.av(e.b,e.d)
u.ch=t
t=B.a([B.aB(A.c9,B.b4(v,v,v,new C.btr(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eD0(u),new C.eD1(u),v,v,v,v,v,v,v,new C.eD2(u),v,v,v,!1,A.a4)],x.p)
w=this.b
if(w!=null)t.push(B.ao(8,u.cb9(w),v,v,10,10,v,v))
return new B.ey(new B.an(A.a_,v,A.b1,A.t,t,v),u.d)},
$S:386}
C.eD0.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:256}
C.eD1.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.E(w.y*d.d,0.5,9)
else w.x=w.x.a9(0,d.a)},
$S:236}
C.eD2.prototype={
$1(d){var w=this.a,v=w.cbc(d.b)
if(v!=null)w.b04(v)},
$S:69}
C.eD5.prototype={
$0(){var w=this.a
return w.m(new C.eD_(w))},
$S:0}
C.eD_.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.I
w.w=1},
$S:0}
C.eD6.prototype={
$0(){return this.a.b04(this.b)},
$S:0}
C.eD7.prototype={
$1(d){var w=this.a
return w.m(new C.eCZ(w,d))},
$S:6}
C.eCZ.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
C.eD8.prototype={
$1(d){var w=this.a
return w.m(new C.eCY(w,d))},
$S:6}
C.eCY.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eD9.prototype={
$0(){var w=this.a
return w.m(new C.eCX(w))},
$S:0}
C.eCX.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
C.eDa.prototype={
$0(){var w=this.a
return w.m(new C.eCW(w))},
$S:0}
C.eCW.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.eDb.prototype={
$0(){var w=this.a
return w.m(new C.eCV(w))},
$S:0}
C.eCV.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.eDc.prototype={
$0(){var w=this.a
return w.m(new C.eCU(w))},
$S:0}
C.eCU.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eCS.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.ac(d/365.25,w)+" Earth years"}else w=A.k.ac(d,0)+" Earth days"
return w},
$S:325}
C.eCR.prototype={
$2(d,e){var w=null
return B.E(B.x(B.a([B.d(d,w,w,w,w,w,w,D.aSp,w,w,w),A.vd,B.d(e,w,2,A.a1,w,w,w,A.V7,w,w,w)],x.p),A.E,w,A.e,A.i,0,A.p),1)},
$S:126}
C.eCQ.prototype={
$0(){var w=this.a
return w.m(new C.eCP(w))},
$S:0}
C.eCP.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
C.f4O.prototype={
$0(){var w=null,v=B.fv(w,w,w,w,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,M.Rf,w,w),this.a),A.a3,A.bZ,w,A.dA,A.bW)
v.el()
return v},
$S:269}
C.f4P.prototype={
$1(d){return d.c>0},
$S:z+11}
C.f4Q.prototype={
$1(d){return d.c>0},
$S:z+11}
C.e1U.prototype={
$0(){},
$S:0}
C.e2m.prototype={
$1(d){return d!=null},
$S:468}
C.e28.prototype={
$0(){var w=this.a
return w.m(new C.e2_(w,this.b))},
$S:0}
C.e2_.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.e29.prototype={
$0(){var w=this.a
return w.m(new C.e1Z(w))},
$S:0}
C.e1Z.prototype={
$0(){return this.a.f=!1},
$S:0}
C.e2a.prototype={
$0(){var w=this.a
return w.m(new C.e27(w))},
$S:0}
C.e27.prototype={
$0(){return this.a.f=!0},
$S:0}
C.e2e.prototype={
$0(){var w=this.a
return w.m(new C.e26(w))},
$S:0}
C.e26.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.e2f.prototype={
$1(d){var w=this.a
return w.m(new C.e25(w,d))},
$S:6}
C.e25.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e2g.prototype={
$0(){var w=this.a
return w.m(w.gcyG())},
$S:0}
C.e2h.prototype={
$1(d){var w=this.a
return w.m(new C.e24(w,d))},
$S:6}
C.e24.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.e2i.prototype={
$1(d){var w=this.a
return w.m(new C.e23(w,d))},
$S:6}
C.e23.prototype={
$0(){return this.a.ax=this.b},
$S:0}
C.e2j.prototype={
$1(d){var w=this.a
return w.m(new C.e22(w,d))},
$S:6}
C.e22.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.e2k.prototype={
$1(d){var w=this.a
return w.m(new C.e21(w,d))},
$S:6}
C.e21.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.e2l.prototype={
$0(){var w=this.a
return w.m(new C.e20(w))},
$S:0}
C.e20.prototype={
$0(){return this.a.ay=4},
$S:0}
C.e2b.prototype={
$0(){var w=this.a
return w.m(new C.e1Y(w))},
$S:0}
C.e1Y.prototype={
$0(){return this.a.ay=7.67},
$S:0}
C.e2c.prototype={
$0(){var w=this.a
return w.m(new C.e1X(w))},
$S:0}
C.e1X.prototype={
$0(){return this.a.ay=9},
$S:0}
C.e2d.prototype={
$0(){var w=this.a
return w.m(new C.e1W(w))},
$S:0}
C.e1W.prototype={
$0(){return this.a.ay=11.3},
$S:0}
C.e1T.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=B.a([B.bU(0,B.c4(g,new B.o(D.bmz,g,g,B.m(20),g,g,A.n),A.bg),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.zm[q]
n=B.b1(o.d)
o=B.x(B.a([new B.y(o.a,g,new B.F(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new B.y(B.w(D.zm[q].b)+" m/s\xb2",g,D.fri,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.i,0,A.p)
n=p+t
m=B.p(g,g,A.f,A.dn,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?B.X(U.Ou,B.b1(D.zm[q].d),g,g,g,22):B.p(g,g,A.f,g,g,new B.o(B.b1(D.zm[q].d),g,g,g,B.a([new B.ac(0,A.G,B.b1(D.zm[q].d).j(0.6),A.I,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=B.p(g,g,A.f,B.b1(D.zm[q].d).j(0.6),g,g,g,3,g,A.fC,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.ac(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,B.a([new B.cN(p,8,g,g,f,g,o,g),new B.cN(n-0.5,54,g,e,g,g,m,g),new B.cN(n-11,54+s*(l/20),g,g,g,g,k,g),new B.cN(p,g,g,8,f,g,B.x(B.a([j,A.au,new B.y(i,g,A.tc,g,g,g,g,g,g,g,g,g),new B.y(h,g,D.fj5,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.i,0,A.p),g)],a0))}if(!w.x&&A.d.d_(v,new C.e1S()))a1.push(D.b9v)
return new B.an(A.a_,g,A.aa,A.t,a1,g)},
$S:67}
C.e1S.prototype={
$1(d){return d==null},
$S:468}
C.e1V.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.E(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=B.m(8)
p=B.p(v,v,A.f,v,v,new B.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=B.dd(v,v,v,v,A.b5,new B.o(v,v,v,B.m(8),v,new B.a9(A.a5,A.a8,A.x,B.a([B.b1(t).j(0.9),B.b1(t).j(0.4)],x.O),v,v),A.n),A.iz,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.ac(r,1):C.Hf(r)
u=u.ax*9.81/s
u=u<10?A.k.ac(u,2):A.k.ac(u,0)
return new B.an(A.a_,v,A.aa,A.t,B.a([p,t,B.ao(v,B.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.fpu,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:67}
C.e1R.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=B.b4(v,v,v,new C.bc0(new B.t(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.ax)
o=A.w.j(0.55)
p=B.m(14)
q=B.J(A.bA,A.r,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.bj
else u=A.a.t(u,"escapes")?A.aQ:A.c
u=B.d(t,v,v,v,v,v,v,B.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.ac(Math.sqrt(58.86870477034412),1)
s=A.k.ac(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+C.Hf(A.k.E(r.cx.gcI()-6371,0,9e9))+" km":""
w=x.p
return new B.an(A.a_,v,A.b1,A.t,B.a([n,B.ao(v,B.p(v,B.x(B.a([u,A.bD,B.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,H.aUc,v,v,v)],w),A.E,v,A.e,A.P,0,A.p),A.f,v,v,new B.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bS,v,v,v),v,v,12,12,8,v)],w),v)},
$S:67}
C.evN.prototype={
$0(){return C.yY(this.b,this.a.d,"size-compare")},
$S:0}
C.evO.prototype={
$0(){var w=this.a
return w.m(new C.evM(w,this.b))},
$S:0}
C.evM.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.evP.prototype={
$0(){var w=this.a
return w.m(new C.evL(w,this.b))},
$S:0}
C.evL.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f2Y.prototype={
$3(d,e,f){var w,v,u=this.a
$.S()
w=B.I()
w.r=f.j(0.2).gp(0)
w.z=new B.hg(A.G,Math.max(2,e*0.18))
u.ad(d,e*1.12,w)
w=B.I()
v=B.ar(f,A.w,0.6)
v.toString
w.sam(new B.c2(V.xl,0.5,A.x,null,0,B.a([A.c,f,v],x.O),H.a44,null).aB(0,B.bY(d,e)))
u.ad(d,e,w)},
$S:1882}
C.dL3.prototype={
$1(d){return d.e<=0},
$S:z+48}
C.dKS.prototype={
$1(d){return d.b},
$S:z+45}
C.dKT.prototype={
$0(){return C.yY(this.b,this.a.d,"black-hole")},
$S:0}
C.dKU.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new B.av(e.b,e.d)
p.Q=o
o=B.aB(A.c9,B.b4(q,q,q,new C.bbn(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dKQ(p),q,q,q,q,q,q,q,q,q,new C.dKR(p),q,q,q,q,!1,A.a4)
w=A.w.j(0.55)
v=B.m(14)
u=B.J(A.bA,A.r,1)
t=p.r
if(t<1000)t=A.k.ac(t,t<10?1:0)+" Suns"
else t=C.fAW(t)+" Suns"
t=p.afr("MASS",t)
s=2.953*p.r
r=x.p
r=B.a([o,B.ao(q,B.p(q,B.B(B.a([t,p.afr("EDGE WIDTH",(s<100?A.k.ac(s,1):C.Hf(s))+" km"),p.afr("TIME",A.k.ac(this.b*100,0)+"%"),p.afr("EATEN",""+p.as)],r),A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bS,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.es2)
return new B.ey(new B.an(A.a_,q,A.b1,A.t,r,q),p.d)},
$S:386}
C.dKR.prototype={
$1(d){return this.a.b05(d.b)},
$S:23}
C.dKQ.prototype={
$1(d){if(A.cR.ah()<0.12)this.a.b05(d.b)},
$S:21}
C.dKW.prototype={
$1(d){var w=this.a
return w.m(new C.dKP(w,d))},
$S:6}
C.dKP.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
C.dKX.prototype={
$0(){var w=this.a
return w.m(new C.dKO(w))},
$S:0}
C.dKO.prototype={
$0(){return this.a.r=10},
$S:0}
C.dKY.prototype={
$0(){var w=this.a
return w.m(new C.dKN(w))},
$S:0}
C.dKN.prototype={
$0(){return this.a.r=21},
$S:0}
C.dKZ.prototype={
$0(){var w=this.a
return w.m(new C.dKM(w))},
$S:0}
C.dKM.prototype={
$0(){return this.a.r=43e5},
$S:0}
C.dL_.prototype={
$0(){var w=this.a
return w.m(new C.dKL(w))},
$S:0}
C.dKL.prototype={
$0(){return this.a.r=65e8},
$S:0}
C.dL0.prototype={
$0(){var w=this.a
return w.m(new C.dKK(w))},
$S:0}
C.dKK.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dL1.prototype={
$0(){var w=this.a
return w.m(new C.dKJ(w))},
$S:0}
C.dKJ.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.dL2.prototype={
$0(){var w=this.a
return w.m(new C.dKI(w))},
$S:0}
C.dKI.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.dKV.prototype={
$0(){var w=this.a
return w.m(new C.dKH(w))},
$S:0}
C.dKH.prototype={
$0(){var w=this.a
A.d.a7(w.z)
w.as=0},
$S:0}
C.e0A.prototype={
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
$S:1883}
C.e0q.prototype={
$0(){return C.yY(this.b,this.a.d,"galaxy")},
$S:0}
C.e0r.prototype={
$0(){var w=this.a
return w.m(new C.e0p(w,this.b))},
$S:0}
C.e0p.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.a_E()},
$S:0}
C.e0s.prototype={
$0(){var w=this.a
return w.m(new C.e0o(w))},
$S:0}
C.e0o.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.a_E()}w.cyx()},
$S:0}
C.e0t.prototype={
$1(d){var w=this.a
return w.m(new C.e0n(w,d))},
$S:6}
C.e0n.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.a_E()},
$S:0}
C.e0u.prototype={
$1(d){var w=this.a
return w.m(new C.e0m(w,d))},
$S:6}
C.e0m.prototype={
$0(){var w=this.a
w.r=this.b
w.a_E()},
$S:0}
C.e0v.prototype={
$1(d){var w=this.a
return w.m(new C.e0l(w,d))},
$S:6}
C.e0l.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.e0w.prototype={
$1(d){var w=this.a
return w.m(new C.e0k(w,d))},
$S:6}
C.e0k.prototype={
$0(){return this.a.ax=this.b},
$S:0}
C.e0x.prototype={
$0(){var w=this.a
return w.m(new C.e0j(w))},
$S:0}
C.e0j.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.e0y.prototype={
$0(){var w=this.a
return w.m(new C.e0i(w))},
$S:0}
C.e0i.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
C.e0z.prototype={
$0(){var w=this.a
return w.m(new C.e0h(w))},
$S:0}
C.e0h.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.dgT.prototype={
$6(d,e,f,g,h,i){return g.a9(0,new B.t((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1884}
C.ev1.prototype={
$0(){return C.yY(this.b,this.a.d,"seasons-moon")},
$S:0}
C.ev2.prototype={
$0(){var w=this.a
return w.m(new C.ev0(w))},
$S:0}
C.ev0.prototype={
$0(){return this.a.f="seasons"},
$S:0}
C.ev3.prototype={
$0(){var w=this.a
return w.m(new C.ev_(w))},
$S:0}
C.ev_.prototype={
$0(){return this.a.f="moon"},
$S:0}
C.ev4.prototype={
$0(){var w=this.a
return w.m(new C.euZ(w))},
$S:0}
C.euZ.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.ev5.prototype={
$0(){var w=this.a
return w.m(new C.euY(w))},
$S:0}
C.euY.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
C.ev6.prototype={
$1(d){var w=this.a
return w.m(new C.euX(w,d))},
$S:6}
C.euX.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.ev7.prototype={
$1(d){var w=this.a
return w.m(new C.euW(w,d))},
$S:6}
C.euW.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.ev8.prototype={
$1(d){var w=this.a
return w.m(new C.euV(w,d))},
$S:6}
C.euV.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ev9.prototype={
$1(d){var w=this.a
return w.m(new C.euU(w,d))},
$S:6}
C.euU.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=C.aNd.prototype
w.bxA=w.q
w=C.aMn.prototype
w.bwI=w.q
w=C.aMo.prototype
w.bwJ=w.q
w=C.aMs.prototype
w.bwN=w.q
w=C.aO2.prototype
w.byw=w.q
w=C.aNb.prototype
w.bxy=w.q
w=C.aNk.prototype
w.bxH=w.q
w=C.ayA.prototype
w.btK=w.q
w=C.ayB.prototype
w.btL=w.q
w=C.aKR.prototype
w.bv7=w.q
w=C.aMB.prototype
w.bwW=w.q
w=C.aMp.prototype
w.bwK=w.q
w=C.aMG.prototype
w.bx1=w.q
w=C.aN7.prototype
w.bxu=w.q
w=C.aNw.prototype
w.bxT=w.q
w=C.aFx.prototype
w.bue=w.q
w=C.aML.prototype
w.bx7=w.q
w=C.aMM.prototype
w.bx8=w.q
w=C.aMN.prototype
w.bx9=w.q
w=C.aNg.prototype
w.bxD=w.q
w=C.aNj.prototype
w.bxG=w.q
w=C.aMm.prototype
w.bwH=w.q
w=C.aMJ.prototype
w.bx4=w.q
w=C.aNf.prototype
w.bxC=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(C.aFi.prototype,"gaxc","c6c",1)
var r
v(r=C.aDO.prototype,"gceM","ceN",30)
w(r,"gc6M","aZs",1)
w(C.aDQ.prototype,"gc8w","c8x",1)
u(C.aE6.prototype,"gc8D","c8E",44)
w(r=C.aIp.prototype,"gcyd","cye",1)
w(r,"gc8F","aep",1)
w(r,"gcjd","cje",1)
w(r,"gc8C","aeo",3)
w(r=C.aFh.prototype,"gbIm","a9R",3)
w(r,"gciu","b1R",1)
w(r,"gcmf","agY",3)
t(r,"gc8H","aeq",3)
t(r=C.a4X.prototype,"gBy","a7",1)
v(r,"gcVB","anT",0)
v(r,"gcS_","M1",0)
w(r,"gcXR","bje",1)
s(C.aja.prototype,"gc91",0,5,null,["$5"],["qE"],42,0,0)
w(r=C.aEi.prototype,"gc92","c93",1)
w(r,"gcp4","ahj",3)
w(r,"gcf1","afE",3)
w(r,"gcwe","aiq",3)
w(r=C.aFK.prototype,"gcao","cap",1)
t(r,"gcam","b_I",1)
w(C.aF5.prototype,"gbLc","at4",1)
t(C.aFo.prototype,"gcaq","car",1)
w(r=C.asw.prototype,"gbZU","bZV",1)
w(r,"gcNL","Tu",3)
w(r=C.aEt.prototype,"gc2u","aXH",1)
v(r,"gcb5","cb6",56)
w(r,"gbQo","bQp",1)
w(r=C.aEu.prototype,"gcyG","cyH",1)
w(r,"gcba","cbb",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.lZ,[C.aUZ,C.coZ,C.KQ,C.a0T,C.JM])
t(C.bTt,B.aVe)
u(B.jc,[C.bTu,C.edX,C.edY,C.ee9,C.eea,C.ee5,C.ee4,C.ee6,C.ee2,C.ee7,C.ee0,C.ee8,C.ee_,C.eed,C.eec,C.eee,C.eeb,C.eef,C.eeg,C.eei,C.esv,C.esx,C.esy,C.ese,C.esd,C.esb,C.esk,C.esl,C.esh,C.esm,C.esg,C.esn,C.eso,C.esf,C.esq,C.esj,C.esu,C.esi,C.dLv,C.dLu,C.dL7,C.dLw,C.dL9,C.dLb,C.dLc,C.dLe,C.dL4,C.dL5,C.dL6,C.dLl,C.dLm,C.dLn,C.dLk,C.dLp,C.dLj,C.dLq,C.dLi,C.dLr,C.dLh,C.dLs,C.dLg,C.dLt,C.dLf,C.dMP,C.dMO,C.dMT,C.dML,C.dMM,C.dMU,C.dMV,C.dMW,C.dMR,C.dMH,C.dN4,C.dN3,C.dN6,C.dN7,C.dN8,C.dMY,C.dN9,C.cSv,C.dT0,C.dT_,C.dT1,C.fmP,C.fmQ,C.fmR,C.fmS,C.fmT,C.fmU,C.fmV,C.fmW,C.fmX,C.f2q,C.f2p,C.f27,C.f26,C.f22,C.f21,C.f23,C.f20,C.f2f,C.f2e,C.f2g,C.f28,C.f2k,C.f2b,C.f2m,C.f2a,C.f2n,C.f29,C.erx,C.erm,C.erw,C.eri,C.ery,C.erA,C.erj,C.erk,C.erV,C.erU,C.erL,C.erM,C.erN,C.erH,C.erI,C.erG,C.erJ,C.erF,C.erK,C.erE,C.erC,C.dnD,C.eDC,C.eDe,C.eDd,C.eDn,C.eDw,C.eDm,C.eDx,C.eDl,C.eDy,C.eDk,C.eDj,C.eDA,C.eDi,C.eDq,C.eDh,C.eDr,C.eDg,C.eDs,C.eDf,C.bOw,C.bOy,C.bOj,C.bOl,C.bIx,C.bIy,C.bIw,C.bIz,C.bIB,C.bIn,C.bIo,C.bIp,C.bIq,C.bIr,C.bIs,C.bIR,C.bI0,C.bIH,C.bII,C.bIF,C.bIG,C.bID,C.bIE,C.bIN,C.bIC,C.bIO,C.bI1,C.bIl,C.bI7,C.bI8,C.bI6,C.bI9,C.bI5,C.bIc,C.bId,C.bIe,C.bIf,C.bI4,C.bIg,C.bI3,C.bIh,C.bI2,C.dXz,C.dXK,C.dXL,C.dXx,C.dXw,C.dXv,C.dXE,C.dXC,C.dXD,C.dXF,C.dXA,C.dXB,C.dXN,C.dXO,C.dXP,C.dXQ,C.dXR,C.dTY,C.dTW,C.dTU,C.dTT,C.dTS,C.dTR,C.dTQ,C.dTM,C.dTL,C.dTO,C.dTN,C.fn4,C.fn5,C.fn6,C.fn7,C.fn8,C.fn9,C.fna,C.fnb,C.ckw,C.ckv,C.eO1,C.eNY,C.eNX,C.eO_,C.eNZ,C.e_g,C.e_h,C.e_b,C.e_d,C.e_e,C.e_c,C.e_f,C.dLD,C.dLA,C.dLz,C.dLB,C.dLy,C.dXi,C.dXh,C.dXg,C.dXf,C.dXm,C.dXe,C.dXd,C.dXo,C.dXc,C.dXp,C.dXb,C.dXq,C.dXr,C.dXa,C.elK,C.elL,C.elJ,C.elM,C.elI,C.elP,C.elR,C.elN,C.elS,C.evF,C.evG,C.evD,C.evE,C.evC,C.evH,C.evI,C.evJ,C.evK,C.eJA,C.eJC,C.eJz,C.eJy,C.eJE,C.eJx,C.ekP,C.ekQ,C.ekI,C.ekH,C.ekJ,C.ekG,C.ekK,C.ekF,C.ekL,C.ekE,C.ekD,C.ekC,C.ekB,C.cyj,C.cyk,C.fXN,C.cyf,C.cye,C.cyl,C.cyg,C.cyh,C.cks,C.flu,C.fPg,C.ckp,C.ckk,C.ckj,C.ckm,C.ckn,C.cko,C.ck8,C.ckb,C.ckc,C.ck7,C.ckd,C.ck6,C.cke,C.ck5,C.ckf,C.ck4,C.ckg,C.ck3,C.ckh,C.ck2,C.e1h,C.e1g,C.e1f,C.e1k,C.e1d,C.e1e,C.e1a,C.e1D,C.e1l,C.e1m,C.e1F,C.e1q,C.e1J,C.e1C,C.e1K,C.e1B,C.e1L,C.e1A,C.e1z,C.e1y,C.e1x,C.e1P,C.e1w,C.e1Q,C.e1v,C.e1G,C.e1p,C.e1H,C.e1o,C.e1I,C.e1n,C.e18,C.e17,C.djJ,C.fmY,C.fmZ,C.fn_,C.fn0,C.fn1,C.fn2,C.fn3,C.eKa,C.eKb,C.eK9,C.eK8,C.eCT,C.eD3,C.eD5,C.eD_,C.eD6,C.eCZ,C.eCY,C.eD9,C.eCX,C.eDa,C.eCW,C.eDb,C.eCV,C.eDc,C.eCU,C.eCQ,C.eCP,C.f4O,C.e1U,C.e28,C.e2_,C.e29,C.e1Z,C.e2a,C.e27,C.e2e,C.e26,C.e25,C.e2g,C.e24,C.e23,C.e22,C.e21,C.e2l,C.e20,C.e2b,C.e1Y,C.e2c,C.e1X,C.e2d,C.e1W,C.evN,C.evO,C.evM,C.evP,C.evL,C.dKT,C.dKP,C.dKX,C.dKO,C.dKY,C.dKN,C.dKZ,C.dKM,C.dL_,C.dKL,C.dL0,C.dKK,C.dL1,C.dKJ,C.dL2,C.dKI,C.dKV,C.dKH,C.e0q,C.e0r,C.e0p,C.e0s,C.e0o,C.e0n,C.e0m,C.e0l,C.e0k,C.e0x,C.e0j,C.e0y,C.e0i,C.e0z,C.e0h,C.ev1,C.ev2,C.ev0,C.ev3,C.ev_,C.ev4,C.euZ,C.ev5,C.euY,C.euX,C.euW,C.euV,C.euU])
u(B.aD,[C.akq,C.Gu,C.v4,C.aTc,C.a3E,C.bbq,C.c4U,C.yo,C.CH,C.nt,C.bca,C.AO,C.bu9,C.qg,C.qZ,C.CL,C.ZR,C.af8,C.a15,C.CV,C.ac6,C.acm,C.aef,C.Gf,C.bmO,C.Qs,C.eg,C.tH,C.aaN,C.abT,C.a4X,C.mK,C.bcb,C.fR,C.mh,C.bvt,C.aJg,C.qQ,C.fgx,C.aby,C.abz,C.vi,C.PE,C.yl,C.PD,C.bvo,C.Q9,C.aff])
u(B.hM,[C.fDi,C.fsS,C.fA1,C.fA2,C.fDf,C.fDg,C.edZ,C.eeh,C.esw,C.es3,C.es4,C.es5,C.es6,C.es7,C.es8,C.es9,C.esa,C.es1,C.es2,C.es0,C.esr,C.ess,C.est,C.dL8,C.dLa,C.dLd,C.dLo,C.c4V,C.c4W,C.fmo,C.fmp,C.fmq,C.fmx,C.fmy,C.fmz,C.dNa,C.dMS,C.dNb,C.dMN,C.dMI,C.dMK,C.dMQ,C.dN2,C.dN0,C.dN1,C.dN_,C.dMX,C.dMZ,C.f2o,C.f25,C.f2c,C.f2l,C.f2_,C.dnH,C.dnI,C.dnE,C.dnF,C.dnG,C.dnJ,C.dnK,C.dnL,C.dnM,C.dnN,C.dnO,C.dnP,C.dnQ,C.dnR,C.ers,C.ert,C.eru,C.erv,C.erq,C.err,C.erX,C.erz,C.erB,C.erl,C.erT,C.erR,C.erS,C.erQ,C.erP,C.ern,C.eDD,C.eDB,C.eDp,C.eDt,C.eDo,C.eDu,C.eDv,C.eDz,C.bOg,C.bOr,C.bOm,C.bOs,C.bOu,C.bOh,C.bOf,C.bOz,C.bOn,C.bOq,C.bOp,C.bOo,C.bIT,C.fP5,C.fP8,C.fP6,C.bIA,C.bIv,C.bIu,C.bIS,C.bIK,C.bIL,C.bIJ,C.bIM,C.bIk,C.bIm,C.bIi,C.bIj,C.bIa,C.bIb,C.fmA,C.fmB,C.fmC,C.fmn,C.fmD,C.fmm,C.fmE,C.fmr,C.fml,C.fms,C.fmk,C.fmt,C.fmj,C.fmu,C.fmh,C.fmi,C.fmv,C.fmf,C.fmg,C.fmw,C.fme,C.dXI,C.dXJ,C.dXy,C.dXu,C.dXH,C.dXM,C.cHX,C.fTX,C.fTY,C.cku,C.eO0,C.dXj,C.dXk,C.dXl,C.dXn,C.elO,C.eJw,C.eJF,C.eJB,C.eJD,C.ekM,C.ekN,C.ekO,C.fXO,C.cyi,C.fri,C.frj,C.ckl,C.cka,C.cki,C.e1i,C.e1j,C.e1c,C.e1b,C.e1s,C.e1t,C.e1r,C.e1u,C.e1M,C.e1N,C.e1O,C.eKd,C.eKe,C.eK7,C.eD0,C.eD1,C.eD2,C.eD7,C.eD8,C.eCS,C.f4P,C.f4Q,C.e2m,C.e2f,C.e2h,C.e2i,C.e2j,C.e2k,C.e1S,C.f2Y,C.dL3,C.dKS,C.dKR,C.dKQ,C.dKW,C.e0A,C.e0t,C.e0u,C.e0v,C.e0w,C.dgT,C.ev6,C.ev7,C.ev8,C.ev9])
u(B.ke,[C.fDh,C.ee3,C.ee1,C.esc,C.esp,C.dMJ,C.dN5,C.dT2,C.f2r,C.f2s,C.f24,C.f2h,C.f2i,C.f2d,C.f2j,C.f1Z,C.ero,C.erp,C.erW,C.erO,C.erD,C.bOt,C.bOv,C.bOx,C.bOi,C.bOk,C.bIU,C.cqO,C.fP7,C.bIt,C.bIQ,C.bIP,C.dXG,C.cHY,C.dTX,C.dTV,C.dTP,C.ckx,C.dLC,C.dLx,C.elQ,C.fPh,C.fPi,C.ck9,C.e1E,C.e19,C.djK,C.eKc,C.eD4,C.eCR,C.e1T,C.e1V,C.e1R,C.dKU])
u(B.ag,[C.W3,C.Wr,C.UX,C.V1,C.NM,C.aIo,C.Wq,C.WF,C.aj8,C.VD,C.ayg,C.Vm,C.WX,C.VL,C.UY,C.VC,C.Wk,C.Wv,C.WP,C.Wj,C.WQ,C.VR,C.WS,C.WE,C.VS,C.Ww,C.UW,C.VP,C.Ws])
u(B.ah,[C.blm,C.aNd,C.aMn,C.aMs,C.aE6,C.aO2,C.aNb,C.aNk,C.ayA,C.byC,C.aKR,C.aMB,C.aNw,C.aMG,C.aMp,C.bkS,C.aF5,C.aFo,C.bm2,C.aN7,C.aFx,C.aML,C.bm6,C.aNj,C.aMN,C.aNg,C.aMm,C.aMJ,C.aNf])
t(C.byM,C.aNd)
t(C.aFi,C.byM)
u(B.mX,[C.bir,C.bct,C.bty,C.bb8,C.bsb,C.brC,C.bbO,C.brE,C.bvD,C.bip,C.btt,C.aja,C.bak,C.bwG,C.af1,C.bwS,C.brD,C.bmP,C.b8W,C.bgR,C.btr,C.bc0,C.bt_,C.bbn,C.bgI,C.bse])
t(C.aMo,C.aMn)
t(C.aDO,C.aMo)
t(C.byA,C.aMs)
t(C.aDQ,C.byA)
u(B.ax,[C.bsz,C.afk,C.aec,C.QE,C.bt3,C.a8O,C.beB,C.b81,C.eX,C.hj,C.b82,C.j7,C.JY])
t(C.aIp,C.aO2)
t(C.bio,B.oZ)
t(C.aFh,C.aNb)
t(C.blV,C.aNk)
t(C.ayB,C.ayA)
t(C.aj9,C.ayB)
t(C.aEi,C.byC)
t(C.bal,C.aKR)
t(C.bkQ,C.aMB)
t(C.byT,C.aNw)
t(C.aFK,C.byT)
t(C.byD,C.aMG)
t(C.bkZ,C.byD)
t(C.byz,C.aMp)
t(C.bkC,C.byz)
t(C.byL,C.aN7)
t(C.bly,C.byL)
t(C.asw,C.aFx)
t(C.aMM,C.aML)
t(C.aEt,C.aMM)
t(C.byQ,C.aNj)
t(C.blU,C.byQ)
t(C.byF,C.aMN)
t(C.aEu,C.byF)
t(C.byO,C.aNg)
t(C.blR,C.byO)
t(C.byy,C.aMm)
t(C.bkB,C.byy)
t(C.byE,C.aMJ)
t(C.bl1,C.byE)
t(C.byN,C.aNf)
t(C.blQ,C.byN)
w(C.aNd,B.cq)
w(C.byM,C.qQ)
w(C.aMn,B.cq)
w(C.aMo,C.qQ)
w(C.aMs,B.cq)
w(C.byA,C.qQ)
w(C.aO2,B.eP)
w(C.aNb,B.cq)
w(C.aNk,B.cq)
w(C.ayA,B.cq)
w(C.ayB,C.qQ)
w(C.aKR,B.cq)
v(C.byC,B.eE)
w(C.aMB,B.cq)
w(C.aMp,B.cq)
w(C.byz,C.qQ)
w(C.aMG,B.cq)
w(C.byD,C.qQ)
w(C.aN7,B.cq)
w(C.byL,C.qQ)
w(C.aNw,B.cq)
w(C.byT,C.qQ)
w(C.aFx,B.cq)
w(C.aML,B.cq)
w(C.aMM,C.qQ)
w(C.aMN,B.cq)
w(C.byF,C.qQ)
w(C.aNg,B.cq)
w(C.byO,C.qQ)
w(C.aNj,B.cq)
w(C.byQ,C.qQ)
w(C.aMm,B.cq)
w(C.byy,C.qQ)
w(C.aMJ,B.cq)
w(C.byE,C.qQ)
w(C.aNf,B.cq)
w(C.byN,C.qQ)})()
B.jl(b.typeUniverse,JSON.parse('{"W3":{"ag":[],"v":[]},"blm":{"ah":["W3"]},"Wr":{"ag":[],"v":[]},"aFi":{"ah":["Wr"]},"bir":{"aC":[]},"UX":{"ag":[],"v":[]},"aDO":{"ah":["UX"]},"V1":{"ag":[],"v":[]},"aDQ":{"ah":["V1"]},"bct":{"aC":[]},"afk":{"ax":[],"v":[]},"aec":{"ax":[],"v":[]},"aIo":{"ag":[],"v":[]},"NM":{"ag":[],"v":[]},"aE6":{"ah":["NM"]},"bsz":{"ax":[],"v":[]},"QE":{"ax":[],"v":[]},"bty":{"aC":[]},"bt3":{"ax":[],"v":[]},"bb8":{"aC":[]},"aIp":{"ah":["aIo"]},"bsb":{"aC":[]},"brC":{"aC":[]},"bbO":{"aC":[]},"brE":{"aC":[]},"bvD":{"aC":[]},"Wq":{"ag":[],"v":[]},"bio":{"aC":[]},"aFh":{"ah":["Wq"]},"bip":{"aC":[]},"WF":{"ag":[],"v":[]},"blV":{"ah":["WF"]},"btt":{"aC":[]},"aja":{"aC":[]},"aj8":{"ag":[],"v":[]},"aj9":{"ah":["aj8"]},"VD":{"ag":[],"v":[]},"ayg":{"ag":[],"v":[]},"aEi":{"ah":["VD"],"eE":[]},"bal":{"ah":["ayg"]},"bak":{"aC":[]},"Vm":{"ag":[],"v":[]},"bkQ":{"ah":["Vm"]},"bwG":{"aC":[]},"af1":{"aC":[]},"a8O":{"ax":[],"v":[]},"WX":{"ag":[],"v":[]},"VL":{"ag":[],"v":[]},"UY":{"ag":[],"v":[]},"VC":{"ag":[],"v":[]},"Wk":{"ag":[],"v":[]},"Wv":{"ag":[],"v":[]},"WP":{"ag":[],"v":[]},"Wj":{"ag":[],"v":[]},"aFK":{"ah":["WX"]},"bwS":{"aC":[]},"bkZ":{"ah":["VL"]},"brD":{"aC":[]},"bkC":{"ah":["UY"]},"bkS":{"ah":["VC"]},"bmP":{"aC":[]},"aF5":{"ah":["Wk"]},"aFo":{"ah":["Wv"]},"bm2":{"ah":["WP"]},"bly":{"ah":["Wj"]},"beB":{"ax":[],"v":[]},"b81":{"ax":[],"v":[]},"eX":{"ax":[],"v":[]},"hj":{"ax":[],"v":[]},"b82":{"ax":[],"v":[]},"j7":{"ax":[],"v":[]},"JY":{"ax":[],"v":[]},"WQ":{"ag":[],"v":[]},"b8W":{"aC":[]},"asw":{"ah":["WQ"]},"VR":{"ag":[],"v":[]},"aEt":{"ah":["VR"]},"bgR":{"aC":[]},"WS":{"ag":[],"v":[]},"bm6":{"ah":["WS"]},"WE":{"ag":[],"v":[]},"VS":{"ag":[],"v":[]},"Ww":{"ag":[],"v":[]},"blU":{"ah":["WE"]},"btr":{"aC":[]},"aEu":{"ah":["VS"]},"bc0":{"aC":[]},"blR":{"ah":["Ww"]},"bt_":{"aC":[]},"UW":{"ag":[],"v":[]},"VP":{"ag":[],"v":[]},"Ws":{"ag":[],"v":[]},"bkB":{"ah":["UW"]},"bbn":{"aC":[]},"bl1":{"ah":["VP"]},"bgI":{"aC":[]},"blQ":{"ah":["Ws"]},"bse":{"aC":[]}}'))
B.CY(b.typeUniverse,JSON.parse('{"qQ":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.aw
return{B:w("m6<u?>"),k:w("u"),J:w("bw<n,K>"),Q:w("dE<n>"),Z:w("a0"),M:w("O<dh>"),f5:w("O<a3A>"),m:w("O<a3E>"),V:w("O<ac>"),O:w("O<u>"),ey:w("O<V>"),dh:w("O<I5>"),aJ:w("O<aA<aD>>"),w:w("O<a0>"),C:w("O<ai<I5>>"),gO:w("O<ai<ai<K>>>"),bj:w("O<ai<n>>"),b:w("O<ai<K>>"),E:w("O<ai<H>>"),fA:w("O<ai<H?>>"),U:w("O<ai<ch>>"),F:w("O<a8<n,aD>>"),g:w("O<t>"),bz:w("O<tH>"),ds:w("O<a9a>"),v:w("O<h9>"),L:w("O<+(n,n)>"),fT:w("O<+(K,v)>"),I:w("O<+(H,n)>"),u:w("O<+(H,H)>"),c:w("O<+(n,n,a0)>"),e:w("O<+(n,K,K,H)>"),o:w("O<+(n,H,n,H)>"),d:w("O<+(n,n,K,K,a8<n,K>)>"),_:w("O<v4>"),q:w("O<cX>"),fQ:w("O<aaN>"),s:w("O<n>"),cF:w("O<as>"),X:w("O<wv>"),R:w("O<aby>"),p:w("O<v>"),bL:w("O<abT>"),r:w("O<lu>"),a_:w("O<ac6>"),cB:w("O<nt>"),ba:w("O<acm>"),d9:w("O<Q9>"),eW:w("O<CL>"),fY:w("O<ZR>"),ed:w("O<Qs>"),g4:w("O<bmO>"),ac:w("O<aef>"),cd:w("O<CV>"),fr:w("O<af8>"),e4:w("O<a15>"),x:w("O<aff>"),au:w("O<aJg>"),f7:w("O<R>"),n:w("O<K>"),t:w("O<H>"),dS:w("O<aC?>"),fs:w("O<tH?>"),bN:w("O<H?>"),a:w("O<ch>"),eH:w("bh"),gJ:w("cB<aj9>"),z:w("cB<ah<ag>>"),bF:w("ai<u>"),gl:w("ai<V>"),ew:w("ai<aD>"),j:w("ai<@>"),h:w("a8<n,@>"),f:w("a8<@,@>"),bd:w("N<eg,n>"),fR:w("N<+(K,v),v>"),l:w("iF"),gA:w("zx"),gD:w("w3"),P:w("cu"),K:w("aD"),W:w("tH"),dV:w("eg"),N:w("n"),bO:w("as"),G:w("jR"),Y:w("bp<K>"),D:w("abz"),gc:w("dK"),gj:w("bE<n>"),aC:w("bE<H?>"),dg:w("ee<qZ>"),e3:w("bbq"),a2:w("CH"),f3:w("qZ"),es:w("Gf"),gV:w("n8"),y:w("R"),i:w("K"),A:w("@"),S:w("H"),bM:w("ai<@>?"),cK:w("aD?"),az:w("q8?"),T:w("n?"),cD:w("K?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b_o=new B.dh(0,0.1)
D.b13=new C.aTc(0,0,0)
D.Lh=new C.aTc(0,0.5,0)
D.b1C=new B.ay(A.bj,1,A.r,-1)
D.b34=new B.aZ(0,1/0,0,290)
D.b3b=new B.aZ(16,1/0,16,1/0)
D.b4p=new B.o(A.be,null,null,null,null,null,A.a6)
D.fgL=new B.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fU7=new B.y("\u26a1",null,D.fgL,null,null,null,null,null,null,null,null,null)
D.b8Z=new B.ca(A.A,null,null,D.fU7,null)
D.aTu=new B.F(!0,A.bY,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJz=new B.y("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aTu,null,A.K,null,null,null,null,null,null,null)
D.el_=new B.D(A.mI,D.fJz,null)
D.b97=new B.ca(A.A,null,null,D.el_,null)
D.fNw=new B.y("Press Drop! and watch them fall from 20 metres.",null,A.jq,null,A.K,null,null,null,null,null,null,null)
D.el4=new B.D(A.mI,D.fNw,null)
D.b9v=new B.ca(A.A,null,null,D.el4,null)
D.fsk=new B.F(!0,A.jN,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSr=new B.y("Draw anywhere",null,D.fsk,null,null,null,null,null,null,null,null,null)
D.b9z=new B.ca(A.A,null,null,D.fSr,null)
D.fzn=new B.y("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aTu,null,A.K,null,null,null,null,null,null,null)
D.elT=new B.D(A.Gj,D.fzn,null)
D.b9V=new B.ca(A.A,null,null,D.elT,null)
D.aef=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bcb=new B.u(1,0.8509803921568627,1,0.8941176470588236,A.q)
D.bcJ=new B.u(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.q)
D.bdC=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.Xs=new B.u(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
D.bdI=new B.u(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.q)
D.bdN=new B.u(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.q)
D.bdT=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.be8=new B.u(1,0.24705882352941178,0.11372549019607843,0.2901960784313726,A.q)
D.bf3=new B.u(1,0.4196078431372549,0.17647058823529413,0.3607843137254902,A.q)
D.bf9=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bff=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bfC=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bfI=new B.u(1,1,0.9450980392156862,0.7215686274509804,A.q)
D.bgJ=new B.u(1,0.043137254901960784,0.03137254901960784,0.12549019607843137,A.q)
D.bgZ=new B.u(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.q)
D.afJ=new B.u(1,1,0.23137254901960785,0.12156862745098039,A.q)
D.bhu=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.Bc=new B.u(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.q)
D.biv=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bjb=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.agn=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bjz=new B.u(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.q)
D.bjO=new B.u(1,1,0.8235294117647058,0.47843137254901963,A.q)
D.bjU=new B.u(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.q)
D.bka=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.agL=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.Ym=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.blU=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.blX=new B.u(1,0.043137254901960784,0.10588235294117647,0.2,A.q)
D.bm0=new B.u(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.q)
D.bma=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.ahf=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bmz=new B.u(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.q)
D.bmN=new B.u(0.4,1,0.8901960784313725,0.6392156862745098,A.q)
D.Yz=new B.u(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.q)
D.bnR=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bnZ=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.ahK=new B.u(1,0.0784313725490196,0.0392156862745098,0.13333333333333333,A.q)
D.bod=new B.u(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.q)
D.boh=new B.u(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.q)
D.boq=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.boB=new B.u(1,0.00784313725490196,0.043137254901960784,0.0196078431372549,A.q)
D.vO=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.boN=new B.u(1,1,0.9686274509803922,0.6980392156862745,A.q)
D.aia=new B.u(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.q)
D.bpE=new B.u(1,0.7490196078431373,0.8431372549019608,1,A.q)
D.bqr=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.Z2=new B.u(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.q)
D.aiE=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.Z5=new B.u(1,0.0784313725490196,0,0.1803921568627451,A.q)
D.bsd=new B.u(0.2,0.5058823529411764,0.5490196078431373,0.9725490196078431,A.q)
D.ajd=new C.aUZ(0,"none")
D.hsG=new C.aUZ(2,"floydSteinberg")
D.bw9=new B.b9(11e6)
D.ajD=new B.Q(0,0,9,0)
D.bxN=new B.Q(10,10,10,6)
D.bxW=new B.Q(10,34,10,26)
D.by3=new B.Q(10,6,10,2)
D.by5=new B.Q(10,8,0,10)
D.byH=new B.Q(12,8,8,8)
D.byN=new B.Q(14,0,14,22)
D.byP=new B.Q(14,0,14,30)
D.akb=new B.Q(14,10,8,12)
D.bzR=new B.Q(16,4,16,28)
D.bA0=new B.Q(16,8,16,12)
D.bC8=new B.Q(26,12,26,58)
D.bCX=new B.Q(4,4,6,2)
D.bCZ=new B.Q(4,4,8,2)
D.bDB=new B.Q(8,14,8,12)
D.bDI=new B.Q(8,40,8,30)
D.bDM=new B.Q(8,6,16,0)
D.bDN=new B.Q(8,6,8,8)
D.bE7=new B.Q(0,0,1.5,0)
D.b0Q=new B.Hu(26,"saturation")
D.bEp=new B.xr(A.cY,D.b0Q,null,A.Xk)
D.fyp=new B.y("REACTION LAB",null,X.aU6,null,null,null,null,A.a1,null,1,null,null)
D.bEw=new B.bz(1,A.bb,D.fyp,null)
D.foX=new B.F(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBI=new B.y("CORE PROTOCOL",null,D.foX,null,null,null,null,null,null,null,null,null)
D.bEK=new B.bz(1,A.bb,D.fBI,null)
D.fCw=new B.y("\ud83d\udce2 NGMY Ads",null,A.qO,null,null,null,null,A.eM,null,1,null,null)
D.bFu=new B.bz(1,A.bb,D.fCw,null)
D.fx4=new B.y("Wire selected",null,A.fT,null,null,null,null,null,null,null,null,null)
D.bFJ=new B.bz(1,A.bb,D.fx4,null)
D.ano=new B.a0(62712,"MaterialIcons",!1)
D.bLr=new B.a0(62878,"MaterialIcons",!1)
D.bLu=new B.a0(62908,"MaterialIcons",!1)
D.bLv=new B.a0(62931,"MaterialIcons",!1)
D.bLy=new B.a0(62951,"MaterialIcons",!1)
D.bLP=new B.a0(63070,"MaterialIcons",!1)
D.Oz=new B.a0(63128,"MaterialIcons",!1)
D.H5=new B.a0(63726,"MaterialIcons",!1)
D.bNa=new B.a0(983122,"MaterialIcons",!1)
D.bNo=new B.a0(983247,"MaterialIcons",!1)
D.bNA=new B.a0(983415,"MaterialIcons",!1)
D.aoB=new B.a0(983467,"MaterialIcons",!1)
D.bNU=new B.a0(983616,"MaterialIcons",!1)
D.bOm=new B.a0(984561,"MaterialIcons",!1)
D.bOX=new B.ae(A.ry,24,A.aU,null,null,null)
D.bPL=new B.ae(A.OS,null,A.ad,null,null,null)
D.bQi=new B.ae(A.nw,21,A.ad,null,null,null)
D.bN9=new B.a0(983117,"MaterialIcons",!1)
D.bRE=new B.ae(D.bN9,28,A.c,null,null,null)
D.bRU=new B.ae(A.iW,18,null,null,null,null)
D.bTN=new B.ae(A.ea,21,A.ct,null,null,null)
D.bU1=new B.ae(A.om,null,A.ad,null,null,null)
D.bUb=new B.ae(A.a2n,21,A.ad,null,null,null)
D.bV3=new B.ae(A.eK,17,A.ad,null,null,null)
D.apY=new B.ae(A.eK,19,null,null,null,null)
D.rE=new B.ae(A.uq,21,A.ad,null,null,null)
D.bWF=new B.ae(A.Oq,null,A.ad,null,null,null)
D.bXO=new B.ae(A.iW,21,A.ad,null,null,null)
D.bYn=new B.ae(A.a1w,46,A.aQ,null,null,null)
D.bYG=new B.ae(A.fk,20,A.aB,null,null,null)
D.bZm=new B.ae(A.e5,null,A.aU,null,null,null)
D.bZH=new B.ae(A.ol,null,A.aB,null,null,null)
D.dnL=w([A.d7,A.d3,A.d7],x.O)
D.c1J=new B.a9(A.a5,A.a8,A.x,D.dnL,null,null)
D.d_X=w([A.bO,A.bn],x.O)
D.c1R=new B.a9(A.b4,A.b7,A.x,D.d_X,null,null)
D.c22=new B.a9(A.b4,A.b7,A.x,A.a50,null,null)
D.ar0=new B.a9(A.b4,A.b7,A.x,N.a4e,null,null)
D.cYB=w([A.oU,A.it],x.O)
D.c2P=new B.a9(A.b4,A.b7,A.x,D.cYB,null,null)
D.d_F=w([A.e8,A.av],x.O)
D.ar7=new B.a9(A.b4,A.b7,A.x,D.d_F,null,null)
D.dhA=w([A.dv,A.jb,A.bn],x.O)
D.c37=new B.a9(A.a5,A.a8,A.x,D.dhA,null,null)
D.dhG=w([A.hg,A.cq],x.O)
D.c3s=new B.a9(A.b4,A.b7,A.x,D.dhG,null,null)
D.cwU=w([A.bO,A.dv],x.O)
D.c3B=new B.a9(A.a5,A.a8,A.x,D.cwU,null,null)
D.aAZ=w([A.e8,K.nf],x.O)
D.c3I=new B.a9(A.b4,A.b7,A.x,D.aAZ,null,null)
D.c3Z=new B.a9(A.b4,A.b7,A.x,H.art,null,null)
D.c4N=new B.a9(A.ay,A.aE,A.x,A.a4b,null,null)
D.d9j=w([A.av,A.w],x.O)
D.c4Y=new B.a9(A.b4,A.b7,A.x,D.d9j,null,null)
D.c50=new B.a9(A.b4,A.b7,A.x,G.aAi,null,null)
D.bol=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bpb=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cJK=w([A.MF,D.bol,D.bpb],x.O)
D.c5a=new B.a9(A.b4,A.b7,A.x,D.cJK,null,null)
D.cxd=w([A.d1,A.fV],x.O)
D.c5q=new B.a9(A.b4,A.b7,A.x,D.cxd,null,null)
D.c5V=w([0,2,4,6,7,9,11],x.t)
D.c68=w([0,4,7],x.t)
D.c69=w([0,4,7,12],x.t)
D.c6a=w([0,4,7,4],x.t)
D.aA_=w([A.hc,A.q1],x.O)
D.azu=w([A.iQ,A.cO],x.O)
D.axP=w([A.bw,A.dG],x.O)
D.cSl=w([A.aU,A.d1],x.O)
D.diW=w([A.c2,A.l0],x.O)
D.axg=w([A.cS,A.ke],x.O)
D.cXq=w([A.bM,A.aJ],x.O)
D.c6w=w([D.aA_,D.azu,A.a4j,D.axP,D.cSl,A.ay5,A.az_,D.diW,D.axg,D.cXq],B.aw("O<ai<u>>"))
D.cbc=w([120,220,380],x.t)
D.ceX=w([12,16,19,24],x.t)
D.cf6=w([1400,800,450,2400],x.t)
D.cnw=w([250,450,900,1500],x.t)
D.cqX=w([A.bL,A.eP],x.O)
D.bgz=new B.u(1,0.043137254901960784,0.10588235294117647,0.24705882352941178,A.q)
D.cwT=w([D.bgz,A.d7],x.O)
D.bcZ=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.boL=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bmB=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bsj=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.blJ=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.awx=w([D.bcZ,D.boL,D.bmB,D.bsj,D.blJ],x.O)
D.cEp=w([A.cJ,G.n7,A.hX,G.aeB,A.cJ,A.hX],x.O)
D.cEF=w([50,25,75],x.t)
D.cKg=w([0,5,10,15,18,20,25],x.t)
D.cSD=w([900,500,250,1600],x.t)
D.cW8=w([0.78,1],x.n)
D.cWb=w([0,2,4,7,9,12,14,16],x.t)
D.cWn=w([A.eR,A.o4],x.O)
D.cWA=w([A.M,A.fc],x.O)
D.cWL=w([A.bw,A.bB,A.b9,A.bw],x.O)
D.axX=w([A.c2,A.aQ,A.bG,A.bw,A.bj],x.O)
D.a48=w([A.aw,A.bG,A.be,A.aQ,A.o5],x.O)
D.cYg=w([A.av,A.aw,A.cS,A.bG,A.be,A.cw,A.ce,A.bB,A.Xy],x.O)
D.a4c=w([0.04,0.17,0.3],x.n)
D.a34=w([0,0,0],x.t)
D.daA=w([D.a34,D.a34,D.a34],x.E)
D.d1C=w([0.375,1,0],x.a)
D.du0=w([0.375,0,1],x.a)
D.dqf=w([0.25,1,1],x.a)
D.cSx=w([D.d1C,D.du0,D.dqf],x.U)
D.dbp=w([0.4375,1,0],x.a)
D.dbm=w([0.1875,-1,1],x.a)
D.cEs=w([0.3125,0,1],x.a)
D.di6=w([0.0625,1,1],x.a)
D.deI=w([D.dbp,D.dbm,D.cEs,D.di6],x.U)
D.dlo=w([0.19047619047619047,1,0],x.a)
D.dtM=w([0.09523809523809523,2,0],x.a)
D.cEy=w([0.047619047619047616,-2,1],x.a)
D.d_Z=w([0.09523809523809523,-1,1],x.a)
D.dpW=w([0.19047619047619047,0,1],x.a)
D.d5u=w([0.09523809523809523,1,1],x.a)
D.cXC=w([0.047619047619047616,2,1],x.a)
D.drO=w([0.023809523809523808,-2,2],x.a)
D.dpa=w([0.047619047619047616,-1,2],x.a)
D.duK=w([0.09523809523809523,0,2],x.a)
D.d_q=w([0.047619047619047616,1,2],x.a)
D.dmY=w([0.023809523809523808,2,2],x.a)
D.cZT=w([D.dlo,D.dtM,D.cEy,D.d_Z,D.dpW,D.d5u,D.cXC,D.drO,D.dpa,D.duK,D.d_q,D.dmY],x.U)
D.d7I=w([0.125,1,0],x.a)
D.d2M=w([0.125,2,0],x.a)
D.cqq=w([0.125,-1,1],x.a)
D.d3_=w([0.125,0,1],x.a)
D.dak=w([0.125,1,1],x.a)
D.dfv=w([0.125,0,2],x.a)
D.cSw=w([D.d7I,D.d2M,D.cqq,D.d3_,D.dak,D.dfv],x.U)
D.cZ4=w([D.daA,D.cSx,D.deI,D.cZT,D.cSw],B.aw("O<ai<ai<ch>>>"))
D.f0I=new C.v4("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.f0O=new C.v4("Medium engine","A good all-rounder.",0.3,0.9)
D.f0N=new C.v4("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.HU=w([D.f0I,D.f0O,D.f0N],x._)
D.eyB=new B.z(6,"Easy")
D.ezm=new B.z(8,"Medium")
D.euo=new B.z(10,"Hard")
D.cZK=w([D.eyB,D.ezm,D.euo],x.I)
D.d_2=w([A.bt,A.b9,A.bw,A.bj],x.O)
D.d_5=w([F.agF,G.ahs],x.O)
D.ayf=w([0.55,0.78,1],x.n)
D.d02=w([A.bG,A.c2,A.aQ],x.O)
D.d0r=w([0.93,0.975,1],x.n)
D.d0S=w([0,0.55,0.6],x.n)
D.beO=new B.u(1,0.23137254901960785,0.0392156862745098,0.0392156862745098,A.q)
D.d11=w([A.tK,D.beO,A.ek],x.O)
D.bnn=new B.u(1,0.01568627450980392,0.06666666666666667,0.16862745098039217,A.q)
D.bhy=new B.u(1,0.043137254901960784,0.16470588235294117,0.24705882352941178,A.q)
D.blQ=new B.u(1,0.0196078431372549,0.06274509803921569,0.11372549019607843,A.q)
D.d12=w([D.bnn,D.bhy,D.blQ],x.O)
D.ayq=w([A.c,A.fO,A.nX,A.av],x.O)
D.d1l=w([A.aC,A.fr,A.l0,A.iR,A.du],x.O)
D.eQC=new B.z("solid","Solid")
D.eGv=new B.z("three","3D block")
D.eIy=new B.z("neon","Neon tube")
D.eLA=new B.z("gradient","Gradient")
D.eQK=new B.z("sticker","Sticker")
D.d26=w([D.eQC,H.aPg,D.eGv,D.eIy,D.eLA,D.eQK,H.aPi,A.TF],x.L)
D.d27=w([A.bG,A.aQ,A.bj,A.c2,A.c,A.cS],x.O)
D.fXc=new C.yl("Moon",1737,4291941851)
D.fX9=new C.yl("Earth",6371,4281908728)
D.fXd=new C.yl("Neptune",24622,4284524026)
D.fXe=new C.yl("Saturn",58232,4294829706)
D.fXa=new C.yl("Jupiter",69911,4294677052)
D.fXf=new C.yl("Sun",696340,4294688548)
D.fXg=new C.yl("Sirius A",119e4,4290763774)
D.fX7=new C.yl("Arcturus",179e5,4294818420)
D.fX8=new C.yl("Betelgeuse",531e6,4294472049)
D.fXb=new C.yl("UY Scuti",667e6,4293870660)
D.R3=w([D.fXc,D.fX9,D.fXd,D.fXe,D.fXa,D.fXf,D.fXg,D.fX7,D.fX8,D.fXb],B.aw("O<yl>"))
D.eWL=new B.bk("glow","Glow",A.a1r)
D.eUl=new B.bk("rainbow","Rainbow",A.nu)
D.eUI=new B.bk("stars","Stars",A.im)
D.eU5=new B.bk("sparks","Sparks",A.e5)
D.eW1=new B.bk("fire","Fire",A.wg)
D.d2p=w([D.eWL,D.eUl,D.eUI,D.eU5,D.eW1],x.c)
D.ayx=w([A.be,A.aw,A.bG,A.d3],x.O)
D.d2z=w([Aj.ai8,A.cS,A.d1],x.O)
D.d3u=w([0.2,1],x.n)
D.f0F=new C.v4("Radar","Shows your height above the ground.",0.1,0)
D.f0G=new C.v4("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.f0D=new C.v4("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.ayF=w([D.f0F,D.f0G,D.f0D],x._)
D.d4w=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.d4L=w([47,100,220,470,1000],x.n)
D.d57=w([0,0.42,0.43,1],x.n)
D.d5l=w([0,2,4,7,9],x.t)
D.J0={volts:0}
D.a5Z=new B.bw(D.J0,[3],x.J)
D.Jq=new B.ea(["b","battery",0.2,0.3,D.a5Z])
D.eeU={on:0}
D.dyx=new B.bw(D.eeU,[1],x.J)
D.DT=new B.ea(["s","switch",0.5,0.3,D.dyx])
D.eZm=new B.ea(["l","bulb",0.8,0.3,A.jl])
D.d05=w([D.Jq,D.DT,D.eZm],x.d)
D.DS=new B.cw(["b",0,"s",0])
D.eYn=new B.cw(["s",1,"l",0])
D.aPm=new B.cw(["l",1,"b",1])
D.dhM=w([D.DS,D.eYn,D.aPm],x.o)
D.d_w=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.etA=new C.mK("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.d05,D.dhM,D.d_w)
D.aJe={ohms:0}
D.aGP=new B.bw(D.aJe,[220],x.J)
D.eYQ=new B.ea(["r","resistor",0.5,0.3,D.aGP])
D.eZB=new B.ea(["d","led",0.8,0.3,A.jl])
D.dl2=w([D.Jq,D.eYQ,D.eZB],x.d)
D.eXJ=new B.cw(["b",0,"r",0])
D.eYh=new B.cw(["r",1,"d",0])
D.eXP=new B.cw(["d",1,"b",1])
D.due=w([D.eXJ,D.eYh,D.eXP],x.o)
D.dlt=w(["led","diode","indicator"],x.s)
D.etH=new C.mK("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dl2,D.due,D.dlt)
D.a7e={level:0}
D.dxU=new B.bw(D.a7e,[0.2],x.J)
D.eYW=new B.ea(["p","pot",0.5,0.3,D.dxU])
D.eYY=new B.ea(["m","motor",0.8,0.3,A.jl])
D.d0o=w([D.Jq,D.eYW,D.eYY],x.d)
D.eXI=new B.cw(["b",0,"p",0])
D.eYd=new B.cw(["p",1,"m",0])
D.eY9=new B.cw(["m",1,"b",1])
D.dpN=w([D.eXI,D.eYd,D.eY9],x.o)
D.dht=w(["fan","motor","spin","dimmer"],x.s)
D.ety=new C.mK("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.d0o,D.dpN,D.dht)
D.a5W=new B.bw(D.a7e,[0.9],x.J)
D.aPt=new B.ea(["s","solar",0.25,0.3,D.a5W])
D.aPs=new B.ea(["l","bulb",0.75,0.3,A.jl])
D.d3a=w([D.aPt,D.aPs],x.d)
D.eYk=new B.cw(["s",0,"l",0])
D.eY8=new B.cw(["l",1,"s",1])
D.d1c=w([D.eYk,D.eY8],x.o)
D.dqs=w(["solar","sun","without battery","no battery","free"],x.s)
D.etB=new C.mK("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.d3a,D.d1c,D.dqs)
D.eZE=new B.ea(["c","crank",0.25,0.3,D.a5W])
D.dfN=w([D.eZE,D.aPs],x.d)
D.eXM=new B.cw(["c",0,"l",0])
D.eY7=new B.cw(["l",1,"c",1])
D.dgm=w([D.eXM,D.eY7],x.o)
D.dfX=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.etx=new C.mK("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dfN,D.dgm,D.dfX)
D.dxT=new B.bw(D.a7e,[0.7],x.J)
D.eZ0=new B.ea(["t","turbine",0.25,0.3,D.dxT])
D.eYO=new B.ea(["m","motor",0.75,0.3,A.jl])
D.da_=w([D.eZ0,D.eYO],x.d)
D.eYv=new B.cw(["t",0,"m",0])
D.eYa=new B.cw(["m",1,"t",1])
D.d8Y=w([D.eYv,D.eYa],x.o)
D.dey=w(["wind","turbine","windmill","water","hydro"],x.s)
D.etu=new C.mK("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.da_,D.d8Y,D.dey)
D.aGM=new B.bw(D.J0,[9],x.J)
D.a8j=new B.ea(["b","battery",0.2,0.3,D.aGM])
D.aPr=new B.ea(["r","radio",0.8,0.3,A.jl])
D.dr3=w([D.a8j,D.DT,D.aPr],x.d)
D.eYp=new B.cw(["s",1,"r",0])
D.aPn=new B.cw(["r",1,"b",1])
D.c5R=w([D.DS,D.eYp,D.aPn],x.o)
D.dpz=w(["radio","music","listen"],x.s)
D.etG=new C.mK("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dr3,D.c5R,D.dpz)
D.dyY=new B.bw(D.J0,[12],x.J)
D.aPq=new B.ea(["b","battery",0.2,0.3,D.dyY])
D.eZn=new B.ea(["t","tv",0.8,0.3,A.jl])
D.d07=w([D.aPq,D.DT,D.eZn],x.d)
D.eYq=new B.cw(["s",1,"t",0])
D.aPo=new B.cw(["t",1,"b",1])
D.diZ=w([D.DS,D.eYq,D.aPo],x.o)
D.dr0=w(["tv","television","screen","watch"],x.s)
D.etr=new C.mK("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.d07,D.diZ,D.dr0)
D.eZd=new B.ea(["z","buzzer",0.8,0.3,A.jl])
D.cH0=w([D.Jq,D.DT,D.eZd],x.d)
D.eYr=new B.cw(["s",1,"z",0])
D.eYJ=new B.cw(["z",1,"b",1])
D.cVX=w([D.DS,D.eYr,D.eYJ],x.o)
D.dnR=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.etD=new C.mK("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cH0,D.cVX,D.dnR)
D.eYX=new B.ea(["h","heater",0.8,0.3,A.jl])
D.ddf=w([D.a8j,D.DT,D.eYX],x.d)
D.eYm=new B.cw(["s",1,"h",0])
D.eXX=new B.cw(["h",1,"b",1])
D.cWG=w([D.DS,D.eYm,D.eXX],x.o)
D.cqP=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.ets=new C.mK("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.ddf,D.cWG,D.cqP)
D.eZp=new B.ea(["s","solar",0.2,0.25,D.a5W])
D.dz1=new B.bw(D.aJe,[100],x.J)
D.eZs=new B.ea(["r","resistor",0.55,0.25,D.dz1])
D.eZz=new B.ea(["c","capacitor",0.85,0.25,A.jl])
D.eYT=new B.ea(["q","resistor",0.55,0.6,D.aGP])
D.eZq=new B.ea(["d","led",0.85,0.6,A.jl])
D.div=w([D.eZp,D.eZs,D.eZz,D.eYT,D.eZq],x.d)
D.eYl=new B.cw(["s",0,"r",0])
D.eYg=new B.cw(["r",1,"c",0])
D.eXO=new B.cw(["c",1,"s",1])
D.eXN=new B.cw(["c",0,"q",0])
D.eYf=new B.cw(["q",1,"d",0])
D.eXQ=new B.cw(["d",1,"c",1])
D.d6R=w([D.eYl,D.eYg,D.eXO,D.eXN,D.eYf,D.eXQ],x.o)
D.df7=w(["capacitor","store","charge","flash"],x.s)
D.etF=new C.mK("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.div,D.d6R,D.df7)
D.eZ3=new B.ea(["b","battery",0.15,0.3,D.a5Z])
D.eZF=new B.ea(["l1","bulb",0.5,0.3,A.jl])
D.eZa=new B.ea(["l2","bulb",0.85,0.3,A.jl])
D.cZb=w([D.eZ3,D.eZF,D.eZa],x.d)
D.eXH=new B.cw(["b",0,"l1",0])
D.eY4=new B.cw(["l1",1,"l2",0])
D.eY5=new B.cw(["l2",1,"b",1])
D.daL=w([D.eXH,D.eY4,D.eY5],x.o)
D.dqM=w(["series","two bulbs","dim"],x.s)
D.etv=new C.mK("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cZb,D.daL,D.dqM)
D.efc={volts:0,charge:1}
D.dz4=new B.bw(D.efc,[1.5,0],x.J)
D.eZx=new B.ea(["b","battery",0.75,0.3,D.dz4])
D.cYC=w([D.aPt,D.eZx],x.d)
D.eYj=new B.cw(["s",0,"b",0])
D.eXL=new B.cw(["b",1,"s",1])
D.d79=w([D.eYj,D.eXL],x.o)
D.dfg=w(["charge","rechargeable","flat","recharge"],x.s)
D.ett=new C.mK("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cYC,D.d79,D.dfg)
D.dyX=new B.bw(D.J0,[4.5],x.J)
D.eYZ=new B.ea(["b","battery",0.2,0.3,D.dyX])
D.aPp=new B.ea(["p","phone",0.8,0.3,A.jl])
D.d9P=w([D.eYZ,D.DT,D.aPp],x.d)
D.eYo=new B.cw(["s",1,"p",0])
D.a8i=new B.cw(["p",1,"b",1])
D.dmN=w([D.DS,D.eYo,D.a8i],x.o)
D.dog=w(["phone","charger","usb","mobile"],x.s)
D.etz=new C.mK("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.d9P,D.dmN,D.dog)
D.eYL=new B.ea(["f","fan",0.8,0.3,A.jl])
D.ciV=w([D.Jq,D.eYL],x.d)
D.eXG=new B.cw(["b",0,"f",0])
D.eXV=new B.cw(["f",1,"b",1])
D.cXd=w([D.eXG,D.eXV],x.o)
D.dhs=w(["fan","cool","air","wind"],x.s)
D.etI=new C.mK("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.ciV,D.cXd,D.dhs)
D.eZh=new B.ea(["b","battery",0.15,0.2,D.a5Z])
D.eYM=new B.ea(["a","ammeter",0.5,0.2,A.jl])
D.eYK=new B.ea(["l","bulb",0.85,0.2,A.jl])
D.eZj=new B.ea(["v","voltmeter",0.5,0.6,A.jl])
D.dfB=w([D.eZh,D.eYM,D.eYK,D.eZj],x.d)
D.eXE=new B.cw(["b",0,"a",0])
D.eXD=new B.cw(["a",1,"l",0])
D.eYx=new B.cw(["v",0,"l",0])
D.eYy=new B.cw(["v",1,"l",1])
D.d70=w([D.eXE,D.eXD,D.aPm,D.eYx,D.eYy],x.o)
D.dud=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.etE=new C.mK("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dfB,D.d70,D.dud)
D.eZI=new B.ea(["b","battery",0.15,0.2,D.aGM])
D.eZ2=new B.ea(["t","tv",0.55,0.2,A.jl])
D.aGN=new B.bw(D.J0,[5],x.J)
D.eYR=new B.ea(["c","buck",0.4,0.5,D.aGN])
D.eZ4=new B.ea(["p","phone",0.8,0.5,A.jl])
D.d4y=w([D.eZI,D.eZ2,D.eYR,D.eZ4],x.d)
D.eXK=new B.cw(["b",0,"t",0])
D.aPk=new B.cw(["b",0,"c",0])
D.aPl=new B.cw(["c",1,"p",0])
D.d9M=w([D.eXK,D.aPo,D.aPk,D.aPl,D.a8i],x.o)
D.d2I=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.etw=new C.mK("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.d4y,D.d9M,D.d2I)
D.eYS=new B.ea(["c","buck",0.5,0.3,D.aGN])
D.cWv=w([D.aPq,D.eYS,D.aPp],x.d)
D.d0y=w([D.aPk,D.aPl,D.a8i],x.o)
D.cui=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.etq=new C.mK("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cWv,D.d0y,D.cui)
D.eZ8=new B.ea(["d","diode",0.5,0.3,A.jl])
D.daZ=w([D.a8j,D.eZ8,D.aPr],x.d)
D.eXF=new B.cw(["b",0,"d",0])
D.eXR=new B.cw(["d",1,"r",0])
D.cJy=w([D.eXF,D.eXR,D.aPn],x.o)
D.d2m=w(["diode","protect","backwards","one way"],x.s)
D.etC=new C.mK("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.daZ,D.cJy,D.d2m)
D.R6=w([D.etA,D.etH,D.ety,D.etB,D.etx,D.etu,D.etG,D.etr,D.etD,D.ets,D.etF,D.etv,D.ett,D.etz,D.etI,D.etE,D.etw,D.etq,D.etC],B.aw("O<mK>"))
D.hrM=new C.Gu("Moon",1.62,A.dv,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hrK=new C.Gu("Mars",3.71,A.aw,"Mars has about 38 percent of Earth's gravity.")
D.hrN=new C.Gu("Mercury",3.7,A.kd,"Mercury is small, so its gravity is like Mars.")
D.hrH=new C.Gu("Venus",8.87,A.aU,"Venus is almost as heavy as Earth, with strong gravity.")
D.hrJ=new C.Gu("Earth",9.81,A.aQ,"On Earth gravity is strong, and the air also slows you down.")
D.hrL=new C.Gu("Neptune",11.15,A.d3,"Neptune pulls a little harder than Earth.")
D.hrI=new C.Gu("Jupiter",24.79,A.cS,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.rH=w([D.hrM,D.hrK,D.hrN,D.hrH,D.hrJ,D.hrL,D.hrI],B.aw("O<Gu>"))
D.d6P=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.d6Y=w([A.cq,A.M],x.O)
D.a4s=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.d7y=w([0.2,0.5,0.8],x.n)
D.f3S=new B.cX(A.bl,A.I,4)
D.d7X=w([D.f3S],x.q)
D.aza=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aZe=new C.KQ(0,"accordion")
D.cXy=w([A.jD,A.Cq,A.Ca],x.w)
D.d3Z=w(["Mail","SMS","Ad"],x.s)
D.cY7=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hpZ=new C.AO(D.aZe,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aA_,D.cXy,D.d3Z,D.cY7)
D.abW=new C.KQ(1,"flip")
D.df1=w([A.rz,A0.Hk,A.uv],x.w)
D.d9w=w(["Unlock","Verify","Secure"],x.s)
D.cWr=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hpY=new C.AO(D.abW,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.azu,D.df1,D.d9w,D.cWr)
D.aZf=new C.KQ(2,"towers")
D.d8i=w([A.yW,A.qs,A.i1],x.w)
D.d7S=w(["Save","Grow","Earn"],x.s)
D.cKr=w(["","",""],x.s)
D.hq_=new C.AO(D.aZf,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a4j,D.d8i,D.d7S,D.cKr)
D.abX=new C.KQ(3,"assemble")
D.dg_=w([A.oo,A.hv,A.e5],x.w)
D.d3m=w(["Launch","Charge","Shine"],x.s)
D.dcl=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hq1=new C.AO(D.abX,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.axP,D.dg_,D.d3m,D.dcl)
D.aZg=new C.KQ(4,"carousel")
D.dfO=w([A.b9,A.eR],x.O)
D.d47=w([A.nw,A.anR,A.OY],x.w)
D.cZA=w(["Explore","Discover","Learn"],x.s)
D.d9V=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hpX=new C.AO(D.aZg,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dfO,D.d47,D.cZA,D.d9V)
D.aZh=new C.KQ(5,"burst")
D.d7N=w([A.ih,A.tF],x.O)
D.cY2=w([A.la,A.mM,A.i0],x.w)
D.cYo=w(["Cheer","Win","Love"],x.s)
D.d_D=w(["Make some noise","First place","Share the joy"],x.s)
D.hq0=new C.AO(D.aZh,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.d7N,D.cY2,D.cYo,D.d_D)
D.azb=w([D.hpZ,D.hpY,D.hq_,D.hq1,D.hpX,D.hq0],B.aw("O<AO>"))
D.bpx=new B.u(1,0.23137254901960785,0.16470588235294117,0.3686274509803922,A.q)
D.br5=new B.u(1,0.7058823529411765,0.37254901960784315,0.5411764705882353,A.q)
D.d8h=w([D.Z2,D.bpx,D.br5],x.O)
D.eVb=new B.bk("skin","Skin",A.anS)
D.eWx=new B.bk("muscle","Muscles",A.OD)
D.eWf=new B.bk("organ","Organs",A.i0)
D.bLb=new B.a0(62747,"MaterialIcons",!1)
D.eWl=new B.bk("bone","Skeleton",D.bLb)
D.eWD=new B.bk("vessel","Blood vessels",A.qu)
D.d8o=w([D.eVb,D.eWx,D.eWf,D.eWl,D.eWD],x.c)
D.f0H=new C.v4("Simple legs","Light. Land gently.",0.15,0.2)
D.f0J=new C.v4("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.f0M=new C.v4("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.CW=w([D.f0H,D.f0J,D.f0M],x._)
D.bd7=new B.u(1,0.10588235294117647,0.10588235294117647,0.2,A.q)
D.d9Q=w([D.Yz,D.bd7],x.O)
D.da4=w([1.77,3.55,7.15,16.7],x.n)
D.dbo=w([A.Bs,A.l0],x.O)
D.bql=new B.u(1,0.10588235294117647,0.0392156862745098,0.0392156862745098,A.q)
D.bkP=new B.u(1,0.16470588235294117,0.058823529411764705,0.058823529411764705,A.q)
D.dc5=w([D.bql,D.bkP],x.O)
D.bl2=new B.u(1,0.2980392156862745,0.0392156862745098,0.3686274509803922,A.q)
D.bjl=new B.u(1,0.7058823529411765,0.09019607843137255,0.49019607843137253,A.q)
D.dcb=w([D.Z5,D.bl2,D.bjl],x.O)
D.dcN=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.dcO=w([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],x.t)
D.eQE=new B.z("spiral","Spiral")
D.eyy=new B.z("barred","Barred spiral")
D.eKz=new B.z("elliptical","Elliptical")
D.ddv=w([D.eQE,D.eyy,D.eKz],x.L)
D.eXl=new B.cw(["beat",0.18,0.28,0])
D.eYs=new B.cw(["burst",0.7,0.2,0])
D.eYD=new B.cw(["delay",0.45,0.5,1])
D.eYc=new B.cw(["ripple",0.75,0.6,3])
D.d35=w([D.eXl,D.eYs,D.eYD,D.eYc],x.e)
D.dem=w([O.lo,N.Jp,F.TD],x.u)
D.hpc=new C.Gf("First spark","A clock lights a burst and a ripple",D.d35,D.dem)
D.eXU=new B.cw(["beat",0.15,0.3,1])
D.eX_=new B.cw(["ripple",0.62,0.15,0])
D.eYz=new B.cw(["delay",0.4,0.45,0])
D.eXA=new B.cw(["ripple",0.7,0.45,0])
D.eXh=new B.cw(["delay",0.4,0.7,1])
D.eYe=new B.cw(["shake",0.75,0.75,0])
D.drV=w([D.eXU,D.eX_,D.eYz,D.eXA,D.eXh,D.eYe],x.e)
D.evs=new B.z(2,4)
D.aP2=new B.z(4,5)
D.d6F=w([O.lo,N.Jp,F.TD,D.evs,D.aP2],x.u)
D.hpe=new C.Gf("Heartbeat","Two thumps, then a shake",D.drV,D.d6F)
D.eXq=new B.cw(["dice",0.15,0.7,1])
D.eYF=new B.cw(["echo",0.4,0.7,0])
D.eXy=new B.cw(["comet",0.7,0.5,4])
D.eYt=new B.cw(["burst",0.72,0.2,1])
D.eXS=new B.cw(["burst",0.3,0.25,0])
D.eXr=new B.cw(["pop",0.55,0.85,0])
D.cqm=w([D.eXq,D.eYF,D.eXy,D.eYt,D.eXS,D.eXr],x.e)
D.euQ=new B.z(1,3)
D.euR=new B.z(1,4)
D.aOZ=new B.z(0,5)
D.dfJ=w([O.lo,R.v5,D.euQ,D.euR,D.aOZ],x.u)
D.hpd=new C.Gf("Fireworks","Dice launch comets that burst in colour",D.cqm,D.dfJ)
D.eXv=new B.cw(["beat",0.15,0.2,2])
D.eY1=new B.cw(["chance",0.4,0.2,0])
D.eXn=new B.cw(["ball",0.7,0.12,3])
D.eXa=new B.cw(["chance",0.4,0.5,1])
D.eYE=new B.cw(["ball",0.3,0.08,1])
D.eX3=new B.cw(["ripple",0.7,0.55,3])
D.cjn=w([D.eXv,D.eY1,D.eXn,D.eXa,D.eYE,D.eX3],x.e)
D.evt=new B.z(2,5)
D.cGJ=w([O.lo,R.v5,N.a8a,F.TE,D.evt],x.u)
D.hpb=new C.Gf("Rain","Balls fall at random and splash",D.cjn,D.cGJ)
D.eY2=new B.cw(["beat",0.12,0.45,2])
D.eYu=new B.cw(["toggle",0.38,0.2,0])
D.eYB=new B.cw(["wash",0.7,0.15,4])
D.eXp=new B.cw(["count3",0.38,0.45,0])
D.eYw=new B.cw(["burst",0.72,0.4,0])
D.eXT=new B.cw(["light",0.55,0.7,1])
D.eXb=new B.cw(["pop",0.8,0.8,4])
D.dit=w([D.eY2,D.eYu,D.eYB,D.eXp,D.eYw,D.eXT,D.eXb],x.e)
D.evZ=new B.z(3,6)
D.cmw=w([O.lo,R.v5,N.a8a,F.TE,D.aOZ,D.evZ],x.u)
D.hp9=new C.Gf("Disco","A beat drives lights, washes and bursts",D.dit,D.cmw)
D.eYI=new B.cw(["button",0.12,0.2,0])
D.eX5=new B.cw(["delay",0.34,0.2,1])
D.eYH=new B.cw(["light",0.56,0.2,1])
D.eYA=new B.cw(["delay",0.56,0.45,1])
D.eY3=new B.cw(["ball",0.34,0.6,0])
D.eX9=new B.cw(["delay",0.34,0.8,1])
D.eWZ=new B.cw(["burst",0.7,0.8,5])
D.c6z=w([D.eYI,D.eX5,D.eYH,D.eYA,D.eY3,D.eX9,D.eWZ],x.e)
D.eya=new B.z(5,6)
D.do_=w([O.lo,R.v5,F.TD,F.TE,D.aP2,D.eya],x.u)
D.hpa=new C.Gf("Domino","Tap the button and watch it run down the line",D.c6z,D.do_)
D.azy=w([D.hpc,D.hpe,D.hpd,D.hpb,D.hp9,D.hpa],B.aw("O<Gf>"))
D.ddD=w([0.05,0.15,0.25],x.n)
D.dex=w([1.5,3,4.5,9,12],x.n)
D.eTQ=new B.bk("dice","Dice",A.oi)
D.eUS=new B.bk("coin","Coin",M.yR)
D.eWy=new B.bk("num","Number",A.yY)
D.deL=w([D.eTQ,D.eUS,D.eWy],x.c)
D.deP=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fXh=new C.PE("Moon",1.62,0,4291941851)
D.fXi=new C.PE("Mars",3.71,0.01,4294472049)
D.fXj=new C.PE("Earth",9.81,1,4281908728)
D.fXl=new C.PE("Jupiter",24.79,1.4,4294677052)
D.fXk=new C.PE("Sun",274,2,4294688548)
D.zm=w([D.fXh,D.fXi,D.fXj,D.fXl,D.fXk],B.aw("O<PE>"))
D.azE=w([A.ct,A.aU,A.bj,A.aQ,A.bw,A.c2,A.cS,A.iQ],x.O)
D.dfP=w([A.c2,A.aQ,A.dP,A.bj],x.O)
D.azH=w([0,0.7,1],x.n)
D.dgg=w([0,0.62,1],x.n)
D.dgM=w([],x.m)
D.dgQ=w([],x.C)
D.a4R=w([],x.R)
D.emG=new C.eg("battery","Battery","\ud83d\udd0b",A.bj,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.emM=new C.eg("solar","Solar panel","\u2600\ufe0f",A.bG,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.enq=new C.eg("crank","Hand crank","\ud83d\udd04",A.cS,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.en2=new C.eg("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aQ,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.emy=new C.eg("buck","Step-down converter","\ud83d\udd3d",A.iQ,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.en0=new C.eg("regulator","5 V regulator","\ud83e\uddca",A.bM,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.env=new C.eg("diode","Diode","\u27a1\ufe0f",A.aU,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.enc=new C.eg("ldr","Light sensor","\ud83c\udf1e",A.dP,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.emR=new C.eg("switch","Switch","\ud83c\udf9a\ufe0f",A.bw,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.ens=new C.eg("fuse","Fuse","\ud83e\uddef",A.ct,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.emq=new C.eg("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.iQ,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.end=new C.eg("resistor","Resistor","\u3030\ufe0f",A.aU,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.enf=new C.eg("bulb","Light bulb","\ud83d\udca1",A.dP,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.emO=new C.eg("led","LED","\ud83d\udd34",A.aw,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.emS=new C.eg("motor","Motor","\u2699\ufe0f",A.bM,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.en9=new C.eg("buzzer","Buzzer","\ud83d\udd14",A.c2,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.emH=new C.eg("heater","Heater","\ud83d\udd25",A.cS,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.en4=new C.eg("capacitor","Capacitor","\ud83e\udeab",A.cp,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.emX=new C.eg("radio","Radio","\ud83d\udcfb",A.o5,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.emU=new C.eg("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b9,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.emx=new C.eg("voltmeter","Voltmeter","\ud83e\udded",A.bt,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.emE=new C.eg("ammeter","Ammeter","\ud83d\udcdf",A.aU,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.emK=new C.eg("fan","Fan","\ud83c\udf00",A.aQ,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.enx=new C.eg("speaker","Speaker","\ud83d\udd0a",A.c2,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.enm=new C.eg("clock","Digital clock","\u23f0",A.bj,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.en_=new C.eg("calculator","Calculator","\ud83e\uddee",A.LL,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.emD=new C.eg("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cp,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.enw=new C.eg("router","WiFi router","\ud83d\udcf6",A.iQ,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.enz=new C.eg("siren","Siren","\ud83d\udea8",A.aw,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.emt=new C.eg("toycar","Toy car","\ud83d\ude97",A.cS,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.enA=new C.eg("kettle","Kettle","\ud83e\uded6",A.mz,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.emB=new C.eg("lamp","Desk lamp","\ud83e\ude94",A.dP,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.emN=new C.eg("lights","Party lights","\ud83c\udf84",A.o5,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.emY=new C.eg("fridge","Fridge","\ud83e\uddca",A.hf,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.emv=new C.eg("washer","Washing machine","\ud83e\udee7",A.cp,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.enn=new C.eg("blender","Blender","\ud83e\udd64",A.ct,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.emV=new C.eg("drone","Drone","\ud83d\ude81",A.bM,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.emA=new C.eg("drill","Power drill","\ud83d\udd29",A.aU,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.emZ=new C.eg("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.enk=new C.eg("neon","Neon sign","\ud83e\udea7",A.c2,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.emw=new C.eg("microwave","Microwave","\ud83c\udf72",A.cS,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.ene=new C.eg("doorbell","Doorbell","\ud83d\udd14",A.bG,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.emJ=new C.eg("camera","Security camera","\ud83d\udcf7",A.al,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.en8=new C.eg("console","Game console","\ud83c\udfae",A.bw,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.enp=new C.eg("heartmon","Heart monitor","\ud83e\ude7a",A.hb,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.emu=new C.eg("aquarium","Aquarium","\ud83d\udc20",A.b9,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.en3=new C.eg("lighthouse","Lighthouse","\ud83d\uddfc",A.dP,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.enb=new C.eg("discoball","Disco ball","\ud83e\udea9",A.o5,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.enu=new C.eg("robot","Robot","\ud83e\udd16",A.aQ,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.ems=new C.eg("toaster","Toaster","\ud83c\udf5e",A.dY,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eny=new C.eg("ledstrip","LED strip","\ud83c\udf08",A.c2,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.enj=new C.eg("pump","Water pump","\ud83d\udeb0",A.aQ,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.en5=new C.eg("hairdryer","Hair dryer","\ud83d\udca8",A.ih,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.enh=new C.eg("headphones","Headphones","\ud83c\udfa7",A.bw,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.emC=new C.eg("smartwatch","Apple Watch Ultra","\u231a",A.bt,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.ent=new C.eg("tablet","iPad Pro M5","\ud83d\udcf2",A.cp,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.emp=new C.eg("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hb,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.emW=new C.eg("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bs,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.emP=new C.eg("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.ena=new C.eg("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.tB,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.emr=new C.eg("iphonefold","iPhone Fold","\ud83d\udcf1",A.b6,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.emF=new C.eg("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d3,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.enr=new C.eg("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cw,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.en6=new C.eg("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.be,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.en1=new C.eg("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cf,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eni=new C.eg("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aw,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.emQ=new C.eg("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bj,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.en7=new C.eg("honor","Honor Magic V5","\ud83d\udcf1",A.cp,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eng=new C.eg("vivo","vivo X300 Pro","\ud83d\udcf1",A.cS,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.enl=new C.eg("ereader","Kindle Scribe","\ud83d\udcd6",A.bs,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.emo=new C.eg("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.ce,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.emT=new C.eg("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cw,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.emL=new C.eg("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b9,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.emz=new C.eg("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dP,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.emI=new C.eg("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aw,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eno=new C.eg("vision","Apple Vision Pro","\ud83e\udd7d",A.bw,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Rw=w([D.emG,D.emM,D.enq,D.en2,D.emy,D.en0,D.env,D.enc,D.emR,D.ens,D.emq,D.end,D.enf,D.emO,D.emS,D.en9,D.emH,D.en4,D.emX,D.emU,D.emx,D.emE,D.emK,D.enx,D.enm,D.en_,D.emD,D.enw,D.enz,D.emt,D.enA,D.emB,D.emN,D.emY,D.emv,D.enn,D.emV,D.emA,D.emZ,D.enk,D.emw,D.ene,D.emJ,D.en8,D.enp,D.emu,D.en3,D.enb,D.enu,D.ems,D.eny,D.enj,D.en5,D.enh,D.emC,D.ent,D.emp,D.emW,D.emP,D.ena,D.emr,D.emF,D.enr,D.en6,D.en1,D.eni,D.emQ,D.en7,D.eng,D.enl,D.emo,D.emT,D.emL,D.emz,D.emI,D.eno],B.aw("O<eg>"))
D.dhd=w([0,0.46,0.82],x.n)
D.dho=w([5,10,15,25,45,60],x.t)
D.dhK=w([-0.045,0.03,-0.015],x.n)
D.di8=w([0.9,0.97,1],x.n)
D.dio=w([A.c2,A.cS,A.bG,A.bw],x.O)
D.aA7=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.uH=w([0.05,0.2,0.35],x.n)
D.dj2=w([A.Bs,A.hJ],x.O)
D.fX5=new C.vi("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fX6=new C.vi("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fWY=new C.vi("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fX4=new C.vi("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fX2=new C.vi("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fWZ=new C.vi("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fX3=new C.vi("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fX_=new C.vi("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fX1=new C.vi("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fX0=new C.vi("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.D3=w([D.fX5,D.fX6,D.fWY,D.fX4,D.fX2,D.fWZ,D.fX3,D.fX_,D.fX1,D.fX0],B.aw("O<vi>"))
D.blo=new B.u(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.q)
D.biO=new B.u(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.q)
D.dju=w([D.Yz,D.blo,D.biO,A.afF],x.O)
D.b5G=new B.ac(0,A.G,A.hK,A.dB,6)
D.dkr=w([D.b5G],x.V)
D.dla=w([A.hf,A.eA,A.aQ,A.Fm],x.O)
D.eu1=new B.z(0,"AND")
D.euS=new B.z(1,"Adder")
D.evu=new B.z(2,"Blinker")
D.ew_=new B.z(3,"Memory")
D.dlf=w([D.eu1,D.euS,D.evu,D.ew_],x.I)
D.aAk=w([-104,0,104],x.n)
D.aAl=w([-14,3],x.n)
D.dm6=w([-8,0,8],x.n)
D.aAt=w([-92,0,92],x.n)
D.eB2=new B.z("Wide",1.7777777777777777)
D.eRH=new B.z("Tall",0.5625)
D.a59=w([D.eB2,H.aP5,D.eRH],B.aw("O<+(n,K)>"))
D.dmv=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.f0E=new C.v4("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.f0L=new C.v4("Medium tank","Balanced.",0.35,1)
D.f0K=new C.v4("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.RK=w([D.f0E,D.f0L,D.f0K],x._)
D.nB=w([0.04,0.2,0.36],x.n)
D.aAF=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eWe=new B.bk(D.aZe,"Fold",M.aoK)
D.eVp=new B.bk(D.abW,"Flip",A.GV)
D.bLt=new B.a0(62889,"MaterialIcons",!1)
D.eWw=new B.bk(D.aZf,"Rise",D.bLt)
D.aoY=new B.a0(983870,"MaterialIcons",!1)
D.eTl=new B.bk(D.abX,"Assemble",D.aoY)
D.eTu=new B.bk(D.aZg,"Spin",D.ano)
D.eTr=new B.bk(D.aZh,"Pop",A.la)
D.dnX=w([D.eWe,D.eVp,D.eWw,D.eTl,D.eTu,D.eTr],B.aw("O<+(KQ,n,a0)>"))
D.aAK=w([A.c2,A.dP,A.bt,A.aQ,A.bw,A.ct],x.O)
D.dom=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.eRc=new B.z("type","Typewriter")
D.eJr=new B.z("bounce","Bounce")
D.eS5=new B.z("wave","Wave")
D.ePv=new B.z("neon","Neon flicker")
D.eTb=new B.z("zoom","Pop")
D.ezi=new B.z("drop","Drop in")
D.ev2=new B.z("fly","Fly in")
D.eQH=new B.z("spin","Spin in")
D.eL5=new B.z("flip","Flip")
D.eMj=new B.z("jelly","Jelly")
D.eQv=new B.z("shake","Shake")
D.eL6=new B.z("float","Float")
D.ePt=new B.z("pulse","Heartbeat")
D.eQO=new B.z("swing","Swing")
D.eQ5=new B.z("reveal","Reveal")
D.eB3=new B.z("blur","Zoom out")
D.eKd=new B.z("domino","Domino")
D.eAd=new B.z("spiral","Spiral in")
D.eMx=new B.z("cascade","Shine sweep")
D.eSb=new B.z("wobble","Wobble")
D.eFT=new B.z("rise","Rise up")
D.eFa=new B.z("scatter","Scatter & gather")
D.doG=w([D.eRc,D.eJr,D.eS5,D.ePv,H.aPa,D.eTb,H.aPh,D.ezi,D.ev2,D.eQH,D.eL5,D.eMj,D.eQv,D.eL6,D.ePt,D.eQO,D.eQ5,D.eB3,D.eKd,D.eAd,D.eMx,D.eSb,D.eFT,D.eFa],x.L)
D.brD=new B.u(1,1,0.8784313725490196,0.4,A.q)
D.doS=w([D.brD,A.M9],x.O)
D.dpp=w([3,4.5,5,6,9],x.n)
D.b6e=new B.ac(0,A.G,A.aS,A.I,16)
D.dpR=w([D.b6e],x.V)
D.RN=w([A.c2,A.bG,A.bj,A.aQ,A.bw,A.ct,A.c,A.cS],x.O)
D.dqo=w(["solar","turbine","crank","pot"],x.s)
D.bc6=new B.u(1,0.16862745098039217,0.06274509803921569,0.3333333333333333,A.q)
D.bgi=new B.u(1,0.984313725490196,0.8431372549019608,0.5254901960784314,A.q)
D.dqr=w([D.bc6,G.ag8,D.bgi],x.O)
D.dqQ=w([0,0.35,0.75,1],x.n)
D.eTJ=new B.bk("drop","Drop",D.aoB)
D.eTL=new B.bk("weight","Weight",T.ap1)
D.eWq=new B.bk("cannon","Newton's cannon",A.ao2)
D.drz=w([D.eTJ,D.eTL,D.eWq],x.c)
D.dsa=w(["volts","level","ohms","on"],x.s)
D.eOK=new B.z("\ud83c\udf19","Midnight")
D.eOb=new B.z("\u2728","Starfield")
D.ew5=new B.z("\ud83c\udf0c","Aurora")
D.eBG=new B.z("\ud83c\udf05","Savanna sunset")
D.eOi=new B.z("\ud83c\udf0a","Ocean waves")
D.eCp=new B.z("\ud83d\udd79\ufe0f","Neon grid")
D.eI3=new B.z("\ud83d\udcbb","Code rain")
D.eEp=new B.z("\ud83c\udf89","Confetti")
D.eGX=new B.z("\ud83c\udf86","Fireworks")
D.exs=new B.z("\ud83e\udee7","Bubbles")
D.eRF=new B.z("\u2744\ufe0f","Snowfall")
D.eD5=new B.z("\ud83e\uddf6","Kente weave")
D.eyN=new B.z("\ud83d\udd2e","Bokeh lights")
D.eHU=new B.z("\ud83c\udf27\ufe0f","Rain")
D.ezp=new B.z("\ud83d\udd25","Fire")
D.eHk=new B.z("\ud83c\udfd4\ufe0f","Paper hills")
D.eDq=new B.z("\ud83c\udfad","Stage")
D.eFd=new B.z("\u2600\ufe0f","Sunburst")
D.eHI=new B.z("\ud83e\udee0","Lava lamp")
D.eA2=new B.z("\ud83c\udf03","City night")
D.dt6=w([D.eOK,D.eOb,D.ew5,D.eBG,D.eOi,D.eCp,D.eI3,D.eEp,D.eGX,D.exs,D.eRF,D.eD5,D.eyN,D.eHU,D.ezp,D.eHk,D.eDq,D.eFd,D.eHI,D.eA2],x.L)
D.dto=w([0,0.35,0.55,0.75,1],x.n)
D.dtC=w([A.jD,A.Cq,A.Ca,A.rz,A0.Hk,A.uv,A.yW,A.qs,A.i1,A.oo,A.hv,A.e5,A.i0,A.im,A.mM,A.m9,A.wo,A.rD,A.lb,A.GN,A.wn,A.Cg,A.Cd,A.a2a,A.Ov,A.Cn,A.OD,A.aod,G.aoU,A.la],x.w)
D.dux=w([0.72,1],x.n)
D.duJ=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.ef_={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dx_=new B.bw(D.ef_,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],B.aw("bw<n,n>"))
D.ecT={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hhJ=new C.yo("Switch",F.ux,A.bG,0,"Tap it to turn it ON or OFF.")
D.hhF=new C.yo("Blinker",A.pc,A.bt,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hhG=new C.yo("AND",D.aoY,A.cp,2,"ON only when BOTH inputs are ON.")
D.bMX=new B.a0(63671,"MaterialIcons",!1)
D.hhE=new C.yo("OR",D.bMX,A.bw,2,"ON when EITHER input is ON.")
D.hhH=new C.yo("XOR",I.a1y,A.c2,2,"ON when the inputs are DIFFERENT.")
D.hhB=new C.yo("NAND",A.ui,A.aQ,2,"OFF only when BOTH inputs are ON.")
D.bM2=new B.a0(63176,"MaterialIcons",!1)
D.hhC=new C.yo("NOR",D.bM2,A.iQ,2,"ON only when BOTH inputs are OFF.")
D.hhD=new C.yo("NOT",A_.Cr,A.cS,1,"Flips the signal: ON becomes OFF.")
D.hhI=new C.yo("Light",A.ry,A.dP,1,"Glows when its input is ON.")
D.hhK=new C.yo("Buzzer",A.uz,A.ct,1,"Beeps while its input is ON.")
D.zA=new B.bw(D.ecT,[D.hhJ,D.hhF,D.hhG,D.hhE,D.hhH,D.hhB,D.hhC,D.hhD,D.hhI,D.hhK],B.aw("bw<n,yo>"))
D.eeK={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eUa=new B.bk(3,20,1.9)
D.eTE=new B.bk(33,90,1.6)
D.eWR=new B.bk(52,15,3.2)
D.eWP=new B.bk(45,-100,1.8)
D.eVi=new B.bk(-15,-60,1.9)
D.eUM=new B.bk(-25,140,2.4)
D.eUD=new B.bk(-82,0,2.2)
D.aGC=new B.bw(D.eeK,[D.eUa,D.eTE,D.eWR,D.eWP,D.eVi,D.eUM,D.eUD],B.aw("bw<n,+(K,K,K)>"))
D.cWZ=w([A.A],x.M)
D.cXj=w([A.ay,A.aE],x.M)
D.d5G=w([A.ay,A.A,A.aE],x.M)
D.d7f=w([A.ay,A.ls,A.A,A.lU,A.aE],x.M)
D.dlb=w([A.ay,A.ls,A.a5,A.a8,A.lU,A.aE],x.M)
D.dym=new B.du([1,D.cWZ,2,D.cXj,3,D.d5G,4,A.aBd,5,D.d7f,6,D.dlb],B.aw("du<H,ai<dh>>"))
D.efa={Calm:0,Box:1,Sleep:2}
D.cE9=w([4,2,6,0],x.n)
D.cEg=w([4,4,4,4],x.n)
D.cEh=w([4,7,8,0],x.n)
D.Sb=new B.bw(D.efa,[D.cE9,D.cEg,D.cEh],B.aw("bw<n,ai<K>>"))
D.ed3={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.xi=new C.a0T(0,"source")
D.d6I=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hnQ=new C.qg("Clock",A.pc,D.xi,A.bt,D.d6I)
D.hnM=new C.qg("Button",A.Cu,D.xi,A.aU,A.Y)
D.dpB=w(["random","quick","slow"],x.s)
D.hnX=new C.qg("Dice",A.oi,D.xi,A.c2,D.dpB)
D.bMC=new B.a0(63484,"MaterialIcons",!1)
D.Ey=new C.a0T(1,"logic")
D.dus=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hnT=new C.qg("Delay",D.bMC,D.Ey,A.cp,D.dus)
D.dhv=w(["fast","mid","slow"],x.s)
D.hnY=new C.qg("Echo",A.aos,D.Ey,A.bw,D.dhv)
D.hnV=new C.qg("Every 2nd",A_.Cr,D.Ey,A.iQ,A.Y)
D.bMg=new B.a0(63309,"MaterialIcons",!1)
D.hnS=new C.qg("Every 3rd",D.bMg,D.Ey,A.aQ,A.Y)
D.bOd=new B.a0(983902,"MaterialIcons",!1)
D.c5X=w(["50%","25%","75%"],x.s)
D.ho_=new C.qg("Chance",D.bOd,D.Ey,A.cS,D.c5X)
D.qY=new C.a0T(2,"out")
D.hnO=new C.qg("Light",A.ry,D.qY,A.dP,A.Y)
D.hnP=new C.qg("Burst",A.la,D.qY,A.c2,A.Y)
D.hnN=new C.qg("Ripple",A.z0,D.qY,A.b9,A.Y)
D.hnW=new C.qg("Ball",A.aoD,D.qY,A.cS,A.Y)
D.hnU=new C.qg("Comet",A.oo,D.qY,A.bw,A.Y)
D.bNZ=new B.a0(983669,"MaterialIcons",!1)
D.hnZ=new C.qg("Shake",D.bNZ,D.qY,A.ct,A.Y)
D.ho0=new C.qg("Pop",A.Cc,D.qY,A.bj,A.Y)
D.hnR=new C.qg("Wash",A.OH,D.qY,A.pR,A.Y)
D.mR=new B.bw(D.ed3,[D.hnQ,D.hnM,D.hnX,D.hnT,D.hnY,D.hnV,D.hnS,D.ho_,D.hnO,D.hnP,D.hnN,D.hnW,D.hnU,D.hnZ,D.ho0,D.hnR],B.aw("bw<n,qg>"))
D.edf={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.A1=new C.JM(0,"tv")
D.f2b=new C.mh("Samsung Neo QLED 8K",D.A1,F.Fp,A.aQ)
D.f22=new C.mh("LG OLED evo G5",D.A1,A.ej,A.hb)
D.f1U=new C.mh("Sony Bravia 9",D.A1,A.r7,A.bs)
D.f1Y=new C.mh("Apple TV 4K",D.A1,A.e4,A.bO)
D.f1V=new C.mh("Bang and Olufsen Beovision",D.A1,F.F2,F.tB)
D.Ju=new C.JM(1,"iphone")
D.aPP=new C.mh("iPhone 18 Pro Max",D.Ju,D.aiE,A.ce)
D.wO=new C.JM(3,"fold")
D.bs0=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.f27=new C.mh("iPhone Fold",D.wO,D.bs0,A.b6)
D.v9=new C.JM(2,"android")
D.f28=new C.mh("Samsung Galaxy S26 Ultra",D.v9,F.aet,A.d3)
D.bkT=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.f20=new C.mh("Samsung Galaxy Z Fold7",D.wO,D.bkT,A.cw)
D.f1X=new C.mh("Google Pixel 10 Pro XL",D.v9,A.dv,A.be)
D.f24=new C.mh("Xiaomi 16 Ultra",D.v9,A.hX,A.cf)
D.f2_=new C.mh("Huawei Mate 80 Pro Max",D.v9,A.e7,A.aw)
D.f1W=new C.mh("OPPO Find X9 Ultra",D.v9,A.e_,A.bj)
D.f2d=new C.mh("Honor Magic V5",D.wO,A.d7,A.cp)
D.f21=new C.mh("vivo X300 Pro",D.v9,A.hJ,A.cS)
D.TO=new C.JM(4,"tablet")
D.f26=new C.mh("iPad Pro M5",D.TO,A.dv,A.aQ)
D.a8u=new C.JM(5,"reader")
D.f2e=new C.mh("Kindle Scribe",D.a8u,A.e8,A.bs)
D.A2=new C.JM(6,"computer")
D.f25=new C.mh("MacBook Pro M5 Max",D.A2,A.dv,A.ce)
D.f2a=new C.mh("iMac 32 inch",D.A2,A.bO,A.cw)
D.f23=new C.mh("Pro Display XDR 8K",D.A2,A.hX,A.b9)
D.f1Z=new C.mh("Sony Laser Projector",D.A2,A.cq,A.dP)
D.f29=new C.mh("Luxury car touchscreen",D.A2,K.nf,A.aw)
D.f2c=new C.mh("Apple Vision Pro",D.A2,A.hg,A.bw)
D.mh=new B.bw(D.edf,[D.f2b,D.f22,D.f1U,D.f1Y,D.f1V,D.aPP,D.f27,D.f28,D.f20,D.f1X,D.f24,D.f2_,D.f1W,D.f2d,D.f21,D.f26,D.f2e,D.f25,D.f2a,D.f23,D.f1Z,D.f29,D.f2c],B.aw("bw<n,mh>"))
D.edn={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.buO=new C.fR(20,4,13,!1)
D.bve=new C.fR(14,5,13.5,!1)
D.bv5=new C.fR(9,2.4,10,!1)
D.bvj=new C.fR(7,5,12.5,!1)
D.bv8=new C.fR(8,3.5,12,!1)
D.buK=new C.fR(15,2,6,!1)
D.bvh=new C.fR(45,6,13.5,!0)
D.bv_=new C.fR(10,8,13.5,!1)
D.buS=new C.fR(25,3,12,!0)
D.buY=new C.fR(35,4,12,!0)
D.buZ=new C.fR(40,4.5,9.5,!0)
D.bv0=new C.fR(55,3,9,!0)
D.buL=new C.fR(18,3,9,!1)
D.bvg=new C.fR(22,4,13.5,!1)
D.bv9=new C.fR(16,5,13.5,!1)
D.buW=new C.fR(30,4,9,!0)
D.bvs=new C.fR(5,3.5,13,!1)
D.bv3=new C.fR(25,3,13.5,!0)
D.bvc=new C.fR(14,2.5,9,!1)
D.bv2=new C.fR(6,6,13,!1)
D.bvk=new C.fR(30,1.2,5,!0)
D.bvr=new C.fR(35,3,4.5,!0)
D.bvn=new C.fR(20,4.5,7.5,!0)
D.bv1=new C.fR(55,5.5,13.5,!0)
D.buJ=new C.fR(45,5.5,13.5,!0)
D.bvd=new C.fR(40,5.5,13.5,!0)
D.bvq=new C.fR(60,6,13.5,!0)
D.aj6=new C.fR(28,4,7,!0)
D.FZ=new C.fR(25,4,7,!0)
D.buV=new C.fR(30,4,7,!0)
D.buQ=new C.fR(22,4,7,!0)
D.buR=new C.fR(24,4,7,!0)
D.bv4=new C.fR(60,3,5.5,!0)
D.buM=new C.fR(18,9,14,!0)
D.buT=new C.fR(25,9,14,!0)
D.aj7=new C.fR(30,8,14,!0)
D.buP=new C.fR(20,8,14,!0)
D.buX=new C.fR(30,9,14,!0)
D.bvl=new C.fR(22,5,9.5,!0)
D.buN=new C.fR(30,2.5,10.5,!0)
D.bva=new C.fR(50,5.5,13.5,!0)
D.bvp=new C.fR(12,2,9.5,!1)
D.bv7=new C.fR(16,1.3,9.5,!0)
D.bvi=new C.fR(40,2.5,7,!0)
D.bvo=new C.fR(60,1.2,4.8,!0)
D.bvm=new C.fR(18,5,13.5,!0)
D.bvf=new C.fR(8,2,9.5,!1)
D.bv6=new C.fR(12,2.5,8,!1)
D.buU=new C.fR(20,3.5,13.5,!0)
D.bvb=new C.fR(3.5,3,13,!1)
D.zB=new B.bw(D.edn,[D.buO,D.bve,D.bv5,D.bvj,D.bv8,D.buK,D.bvh,D.bv_,D.buS,D.buY,D.buZ,D.bv0,D.buL,D.bvg,D.bv9,D.buW,D.bvs,D.bv3,D.bvc,D.bv2,D.bvk,D.bvr,D.bvn,D.bv1,D.buJ,D.bvd,D.bvq,D.aj6,D.FZ,D.buV,D.FZ,D.buQ,D.FZ,D.buR,D.aj6,D.FZ,D.bv4,D.buM,D.buT,D.aj7,D.buP,D.buX,D.bvl,D.buN,D.bva,D.bvp,D.bv7,D.bvi,D.bvo,D.FZ,D.aj7,D.bvm,D.bvf,D.bv6,D.buU,D.bvb],B.aw("bw<n,fR>"))
D.dzl=new B.du([A.p5,1,A.qf,1,A.qg,1,A.c8,1,A.jR,2,A.w6,4,A.yz,1,A.yA,2,A.yB,4,A.ue,2,A.w5,4,A.yy,8],B.aw("du<to,H>"))
D.ed2={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eSS=new B.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.ey7=new B.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.ey2=new B.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eKq=new B.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eLm=new B.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eKm=new B.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.ew8=new B.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eIm=new B.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eT_=new B.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eLI=new B.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eBv=new B.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.evN=new B.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eAu=new B.z("Movement","They pull your legs together and help you balance.")
D.eCr=new B.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eyg=new B.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eQl=new B.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eRu=new B.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eI4=new B.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eRd=new B.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eGF=new B.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eLR=new B.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.evU=new B.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eCO=new B.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eLv=new B.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eH0=new B.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eRl=new B.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eJR=new B.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.ew6=new B.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eMq=new B.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.ePZ=new B.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eO9=new B.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.euc=new B.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eJA=new B.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eJE=new B.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eDy=new B.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eyu=new B.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eCf=new B.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eIw=new B.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eOZ=new B.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eSX=new B.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eLO=new B.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.etW=new B.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eII=new B.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.euL=new B.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.ePc=new B.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eQh=new B.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eJ7=new B.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.ePp=new B.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.evW=new B.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eQT=new B.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.ezR=new B.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eOC=new B.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eDc=new B.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eGV=new B.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eM7=new B.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eR2=new B.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eQV=new B.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eQZ=new B.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eHs=new B.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eMY=new B.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eO6=new B.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eQF=new B.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eJ6=new B.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eFg=new B.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eDZ=new B.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eJv=new B.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eM0=new B.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eFM=new B.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eGs=new B.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eAe=new B.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eQd=new B.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eB4=new B.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.euI=new B.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eDx=new B.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.euD=new B.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eyW=new B.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eDC=new B.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eBe=new B.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eMm=new B.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eCu=new B.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eSF=new B.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eE8=new B.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eHl=new B.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eJZ=new B.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eBn=new B.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eB6=new B.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dzs=new B.bw(D.ed2,[D.eSS,D.ey7,D.ey2,D.eKq,D.eLm,D.eKm,D.ew8,D.eIm,D.eT_,D.eLI,D.eBv,D.evN,D.eAu,D.eCr,D.eyg,D.eQl,D.eRu,D.eI4,D.eRd,D.eGF,D.eLR,D.evU,D.eCO,D.eLv,D.eH0,D.eRl,D.eJR,D.ew6,D.eMq,D.ePZ,D.eO9,D.euc,D.eJA,D.eJE,D.eDy,D.eyu,D.eCf,D.eIw,D.eOZ,D.eSX,D.eLO,D.etW,D.eII,D.euL,D.ePc,D.eQh,D.eJ7,D.ePp,D.evW,D.eQT,D.ezR,D.eOC,D.eDc,D.eGV,D.eM7,D.eR2,D.eQV,D.eQZ,D.eHs,D.eMY,D.eO6,D.eQF,D.eJ6,D.eFg,D.eDZ,D.eJv,D.eM0,D.eFM,D.eGs,D.eAe,D.eQd,D.eB4,D.euI,D.eDx,D.euD,D.eyW,D.eDC,D.eBe,D.eMm,D.eCu,D.eSF,D.eE8,D.eHl,D.eJZ,D.eBn,D.eB6],B.aw("bw<n,+(n,n)>"))
D.dzu=new B.hg(A.G,11)
D.dzy=new B.hg(A.G,30)
D.dGr=new C.UW(null)
D.dGs=new C.UX(null)
D.dGF=new C.UY(null)
D.dIG=new C.V1(null)
D.dJu=new C.VC(null)
D.dJw=new C.VD(null)
D.dK3=new C.VL(null)
D.dLZ=new C.VP(null)
D.dM_=new C.VR(null)
D.dM1=new C.VS(null)
D.dNH=new C.Wj(null)
D.dOm=new C.Wk(null)
D.dSy=new C.Wq(null)
D.e7r=new C.Wr(null)
D.e7t=new C.Ws(null)
D.e7u=new C.Wv(null)
D.e7v=new C.Ww(null)
D.e9o=new C.WE(null)
D.e9p=new C.WF(null)
D.e9F=new C.WP(null)
D.e9G=new C.WQ(null)
D.e9H=new C.a8O(null)
D.eah=new C.WS(null)
D.ebL=new C.WX(null)
D.efm=new B.t(0,118)
D.aJk=new B.t(0,13)
D.efn=new B.t(0,17)
D.efq=new B.t(0,330)
D.efw=new B.t(0,-13)
D.efx=new B.t(0,-17)
D.efy=new B.t(0,-18)
D.efz=new B.t(0,-19)
D.efC=new B.t(0,-28)
D.efD=new B.t(0,-31)
D.efE=new B.t(0,-32)
D.efF=new B.t(0,-6771)
D.efI=new B.t(-9.5,-11)
D.efL=new B.t(10,20)
D.efO=new B.t(10,-13)
D.efP=new B.t(10,-22)
D.efQ=new B.t(10,-4)
D.a7k=new B.t(11,8)
D.efY=new B.t(12,2)
D.efZ=new B.t(14,0)
D.eg_=new B.t(14,12)
D.aJv=new B.t(14,8)
D.eg0=new B.t(14,-17)
D.aJx=new B.t(14,-3)
D.aJy=new B.t(14,-4)
D.eg3=new B.t(15,0)
D.eg4=new B.t(15,-12)
D.eg7=new B.t(16,-8)
D.eg8=new B.t(18,14)
D.eg9=new B.t(18,-12)
D.aJD=new B.t(20,0)
D.egh=new B.t(20,15)
D.egi=new B.t(20,-17)
D.egj=new B.t(20,-3)
D.egk=new B.t(21,8)
D.ego=new B.t(22,10)
D.aJF=new B.t(22,8)
D.egp=new B.t(24,0)
D.egq=new B.t(24,2)
D.egt=new B.t(24,-18)
D.egu=new B.t(24,-22)
D.egy=new B.t(25,8)
D.egz=new B.t(26,0)
D.egF=new B.t(28,-30)
D.egL=new B.t(30,18)
D.egM=new B.t(30,2)
D.egP=new B.t(31,19)
D.egR=new B.t(32,0)
D.aJJ=new B.t(34,0)
D.aJK=new B.t(34,-32)
D.J4=new B.t(36,0)
D.eh3=new B.t(3,-1)
D.eh6=new B.t(40,3)
D.ehk=new B.t(4,11)
D.ehn=new B.t(4,-2)
D.ehs=new B.t(5,0)
D.eht=new B.t(5,17)
D.ehu=new B.t(5,6)
D.ehz=new B.t(6,11)
D.ehF=new B.t(8,7)
D.ehG=new B.t(8,-10)
D.ehH=new B.t(8,-14)
D.aJP=new B.t(9,0)
D.ehR=new B.t(-20.5,-17.6)
D.ehS=new B.t(-9,18.5)
D.ehV=new B.t(-2.6,-1)
D.ehW=new B.t(1.9,-0.8)
D.ei_=new B.t(-0.22,0.09)
D.ei4=new B.t(2.6,1)
D.eib=new B.t(-9,12.2)
D.eiv=new B.t(-9,20.5)
D.eiR=new B.t(-10,0)
D.eiS=new B.t(-10,12)
D.aJX=new B.t(-10,4)
D.eiY=new B.t(-11,-2)
D.ej1=new B.t(-13,-5)
D.ej2=new B.t(-14,0)
D.ej3=new B.t(-14,13)
D.ej4=new B.t(-14,2)
D.ej5=new B.t(-14,-12)
D.ej6=new B.t(-14,-19)
D.ej8=new B.t(-14,-23)
D.ej9=new B.t(-15,6)
D.ejc=new B.t(-16,14)
D.eje=new B.t(-16,-8)
D.ejf=new B.t(-17,10)
D.ejg=new B.t(-17,-18)
D.ejh=new B.t(-17,-8)
D.ejj=new B.t(-18,20)
D.ejk=new B.t(-18,-9)
D.aJZ=new B.t(-20,0)
D.ejm=new B.t(-20,16)
D.ejn=new B.t(-20,-9)
D.T8=new B.t(-22,8)
D.ejo=new B.t(-22,-10)
D.ejp=new B.t(-22,-11)
D.ejq=new B.t(-24,10)
D.ejr=new B.t(-24,11)
D.ejs=new B.t(-24,14)
D.ejt=new B.t(-24,-22)
D.ejv=new B.t(-25,-11)
D.ejw=new B.t(-26,0)
D.ejx=new B.t(-26,-18)
D.ejy=new B.t(-2,9)
D.ejz=new B.t(-2,-10)
D.ejA=new B.t(-2,-20)
D.ejD=new B.t(-2,-9)
D.ejF=new B.t(-32,0)
D.aK0=new B.t(-34,0)
D.ejK=new B.t(-40,3)
D.ejM=new B.t(-4,11)
D.ejN=new B.t(-4,-17)
D.ejO=new B.t(-4,-2)
D.ejS=new B.t(-5,0)
D.ejT=new B.t(-5,20)
D.ejU=new B.t(-5,6)
D.ejV=new B.t(-6,26)
D.ejW=new B.t(-6,6)
D.ejX=new B.t(-6,-42)
D.ejY=new B.t(-7,-19)
D.ejZ=new B.t(-7,-24)
D.ek1=new B.t(-8,-9)
D.a7s=new B.t(-9,0)
D.ek2=new B.t(-9,1)
D.ek4=new B.t(-9,-23)
D.fz5=new B.y("Thinking\u2026",null,A.hn,null,null,null,null,null,null,null,null,null)
D.el7=new B.D(A.jg,D.fz5,null)
D.fPR=new B.y("Start from a ready-made board",null,A.fp,null,null,null,null,null,null,null,null,null)
D.elj=new B.D(A5.vY,D.fPR,null)
D.bCL=new B.Q(4,0,4,14)
D.fuc=new B.F(!0,A.aB,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA4=new B.y("Games and little helpers for a spare minute.",null,D.fuc,null,null,null,null,null,null,null,null,null)
D.elv=new B.D(D.bCL,D.fA4,null)
D.fMv=new B.y("Tap to throw in a star",null,A.jq,null,null,null,null,null,null,null,null,null)
D.b9x=new B.ca(A.A,null,null,D.fMv,null)
D.es2=new B.cN(0,null,0,14,null,null,D.b9x,null)
D.htO=new C.coZ(1,"neural")
D.di5=w([A.iv,A.bn],x.O)
D.aOS=new B.c2(A.A,0.5,A.x,null,0,D.di5,null,null)
D.esM=new B.c2(A.A,0.5,A.x,null,0,D.aAZ,null,null)
D.d93=w([A.c,A.bM],x.O)
D.esO=new B.c2(A.A,0.5,A.x,null,0,D.d93,null,null)
D.dqD=w([A.bO,A.hg],x.O)
D.aOT=new B.c2(A.A,0.5,A.x,null,0,D.dqD,null,null)
D.cO5=w([A.c,A.bO],x.O)
D.esS=new B.c2(A.tl,0.5,A.x,null,0,D.cO5,null,null)
D.bhS=new B.u(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.q)
D.bnW=new B.u(1,0.027450980392156862,0.10196078431372549,0.2,A.q)
D.d84=w([D.bhS,D.aia,D.bnW],x.O)
D.esU=new B.c2(A.tl,0.5,A.x,null,0,D.d84,D.azH,null)
D.cEo=w([A.ob,A.aC,A.L],x.O)
D.dne=w([0.3,0.7,1],x.n)
D.esW=new B.c2(A.A,0.5,A.x,null,0,D.cEo,D.dne,null)
D.bs4=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.doE=w([A.fc,D.bs4],x.O)
D.esY=new B.c2(A.tl,0.5,A.x,null,0,D.doE,null,null)
D.cHg=w([A.dv,A.cq],x.O)
D.esZ=new B.c2(A.A,0.5,A.x,null,0,D.cHg,null,null)
D.d3b=w([A.ob,A.aC,A.fr],x.O)
D.et_=new B.c2(A.A,0.5,A.x,null,0,D.d3b,null,null)
D.cVV=w([A.fO,A.aU,A.d1],x.O)
D.et1=new B.c2(A.tl,0.5,A.x,null,0,D.cVV,null,null)
D.diK=w([A.hg,K.nf],x.O)
D.et2=new B.c2(A.tl,0.5,A.x,null,0,D.diK,null,null)
D.bi7=new B.u(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.q)
D.bfK=new B.u(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.q)
D.d5y=w([D.bi7,D.bfK],x.O)
D.et4=new B.c2(A.A,0.5,A.x,null,0,D.d5y,null,null)
D.bnh=new B.u(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.q)
D.bl_=new B.u(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.q)
D.bl5=new B.u(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.q)
D.dt8=w([D.bnh,D.bl_,D.bl5],x.O)
D.et5=new B.c2(N.ac6,0.5,A.x,null,0,D.dt8,G.ayv,null)
D.et6=new B.c2(A.A,0.5,A.x,null,0,D.axg,null,null)
D.dru=w([A.hg,A.hS],x.O)
D.etd=new B.c2(A.A,0.5,A.x,null,0,D.dru,null,null)
D.aOX=new B.aP(9,9)
D.etm=new B.aP(1.4,1.4)
D.eTN=new B.bk("Moon",1.62,4291941851)
D.eUm=new B.bk("Neptune",11.15,4284524026)
D.eV0=new B.bk("Sun",274,4294688548)
D.eVf=new B.bk("Mercury",3.7,4288455599)
D.eVk=new B.bk("Earth",9.81,4281908728)
D.eVm=new B.bk("Mars",3.71,4294472049)
D.eVF=new B.bk("Venus",8.87,4294759245)
D.eVM=new B.bk("Saturn",10.44,4294829706)
D.eW7=new B.bk("Jupiter",24.79,4294677052)
D.eZM=new B.a3(10,-8,18,-2)
D.eZN=new B.a3(14,-14,20,14)
D.eZP=new B.a3(20,-2,30,2)
D.eZU=new B.a3(4,-13,30,-3)
D.f__=new B.a3(8,-7,12,7)
D.f_b=new B.a3(-12,12,12,19)
D.f_c=new B.a3(-12,14,12,22)
D.f_d=new B.a3(-12,-22,12,8)
D.f_e=new B.a3(-12,-25,12,19)
D.f_f=new B.a3(-12,-26,12,-6)
D.f_g=new B.a3(-12,-4,12,14)
D.f_i=new B.a3(-14,20,14,24)
D.f_j=new B.a3(-14,6,14,10)
D.f_k=new B.a3(-14,-17,14,15)
D.f_l=new B.a3(-14,-26,14,18)
D.f_m=new B.a3(-14,-4,14,20)
D.f_o=new B.a3(-15,-29,15,25)
D.f_p=new B.a3(-16,-16,16,16)
D.f_s=new B.a3(-16,-22,-9,18)
D.f_t=new B.a3(-16,-24,16,-10)
D.f_v=new B.a3(-16,-2,16,20)
D.f_x=new B.a3(-18,20,18,24)
D.f_y=new B.a3(-18,-18,18,20)
D.f_z=new B.a3(-20,12,20,22)
D.f_A=new B.a3(-20,-28,20,26)
D.f_B=new B.a3(-22,14,22,18)
D.aPw=new B.a3(-22,-26,22,24)
D.f_C=new B.a3(-22,-3,22,3)
D.f_D=new B.a3(-22,-4,22,12)
D.f_F=new B.a3(-24,-12,10,22)
D.f_G=new B.a3(-24,-14,22,8)
D.f_H=new B.a3(-24,-6,24,20)
D.aPx=new B.a3(-24,-9,24,9)
D.f_I=new B.a3(-25,14,25,19)
D.f_J=new B.a3(-26,-14,14,8)
D.f_K=new B.a3(-26,-4,26,20)
D.f_L=new B.a3(-26,-6,4,6)
D.aPy=new B.a3(-28,-13,28,13)
D.f_M=new B.a3(-28,-16,28,16)
D.f_N=new B.a3(-28,-16,28,8)
D.f_O=new B.a3(-28,-22,28,22)
D.f_P=new B.a3(-30,-12,30,14)
D.f_Q=new B.a3(-30,-14,0,14)
D.f_R=new B.a3(-30,-18,30,20)
D.f_S=new B.a3(-30,-28,30,14)
D.f_T=new B.a3(-30,-2,30,18)
D.f_U=new B.a3(-30,-4,30,18)
D.f_V=new B.a3(-32,-17,32,17)
D.f_W=new B.a3(-32,-28,32,18)
D.f_X=new B.a3(-33,-21,33,17)
D.f_Y=new B.a3(-34,14,34,26)
D.a8l=new B.a3(-34,-18,34,18)
D.f_Z=new B.a3(-34,-4,34,7)
D.f0_=new B.a3(-36,-24,36,20)
D.f00=new B.a3(-38,-22,38,22)
D.f02=new B.a3(-3,12,3,22)
D.f03=new B.a3(-3,5,3,15)
D.f07=new B.a3(-46,-34,46,28)
D.f09=new B.a3(-48,-3,48,3)
D.f0c=new B.a3(-6,18,24,24)
D.f0d=new B.a3(-6,5,6,12)
D.f0e=new B.a3(-6,-22,6,-15)
D.f0i=new B.a3(-9,-16,9,22)
D.f0j=new B.a3(-4.5,-24,4.5,-21.2)
D.f0l=new B.a3(14,-9,17.5,9)
D.eeA={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aQt=new B.dE(D.eeA,5,x.Q)
D.ee7={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.f3t=new B.dE(D.ee7,10,x.Q)
D.f5H=new B.av(24,44)
D.f64=new B.av(54,38)
D.f6b=new B.av(66,38)
D.baX=new B.fj(2,null,null,null,null,A.bw,null,null,null,null)
D.f7c=new B.a6(16,16,D.baX,null)
D.aRr=new B.hR(3,12,12,0.82,null)
D.fRz=new B.y("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aRC=new B.b2(D.fRz,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.diN=w([A.ct,A.bG,A.bj,A.aQ,A.pR,A.ct],x.O)
D.fdi=new B.fY(A.A,0,6.283185307179586,A.x,D.diN,null,null)
D.fmL=new B.F(!0,A.aU,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,M.Rf,null,null,null)
D.few=new B.eu("You are here (Sun)",null,null,A.cQ,null,null,null,null,null,null,D.fmL)
D.aUa=new B.F(!0,A.aB,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fex=new B.eu("What we see",null,null,A.cQ,null,null,null,null,null,null,D.aUa)
D.fk1=new B.F(!0,P.xD,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feB=new B.eu("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cQ,null,null,null,null,null,null,D.fk1)
D.fp2=new B.F(!0,A.kx,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feH=new B.eu("AI",null,null,A.cQ,null,null,null,null,null,null,D.fp2)
D.aSp=new B.F(!0,A.bY,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feY=new B.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffu=new B.F(!0,A.bl,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffz=new B.F(!0,A.bj,null,null,null,null,12.5,A.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffQ=new B.F(!0,A.cp,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgl=new B.F(!0,A.bY,null,null,null,null,11,A.Q,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgq=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgH=new B.F(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhc=new B.F(!0,A.aR,null,null,null,null,12,A.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhD=new B.F(!0,A.bY,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhQ=new B.F(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f45=new B.cX(A.hK,A.dB,6)
D.dc2=w([D.f45],x.q)
D.fia=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dc2,null,null,null)
D.fif=new B.F(!0,A.et,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fik=new B.F(!0,A.bY,null,null,null,null,10.5,A.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiX=new B.F(!0,A.bY,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj4=new B.F(!0,A.aB,null,null,null,null,null,A.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj5=new B.F(!0,A.bY,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk5=new B.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkB=new B.F(!0,A.aB,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl7=new B.F(!0,A.aU,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f48=new B.cX(A.aS,A.I,3)
D.aBg=w([D.f48],x.q)
D.fl9=new B.F(!0,A.c,null,null,null,null,10.5,A.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.aBg,null,null,null)
D.flf=new B.F(!0,A.c,null,null,null,null,12.5,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flY=new B.F(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,M.Rf,null,null,null)
D.fmy=new B.F(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn1=new B.F(!0,A.tN,null,null,null,null,12.5,A.Q,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnD=new B.F(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnI=new B.F(!0,A.bY,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnN=new B.F(!0,A.aB,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foz=new B.F(!0,A.mB,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foO=new B.F(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTz=new B.F(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3W=new B.cX(A.w,A.I,5)
D.d_i=w([D.f3W],x.q)
D.fpo=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d_i,null,null,null)
D.fpu=new B.F(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.aBg,null,null,null)
D.fpS=new B.F(!0,A.fV,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqa=new B.F(!0,A.bY,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqH=new B.F(!0,A.bj,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fri=new B.F(!0,A.bY,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frZ=new B.F(!0,A.aB,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs7=new B.F(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsC=new B.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsT=new B.F(!0,A.aU,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fte=new B.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fth=new B.F(!0,A.aU,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu2=new B.F(!0,A.aR,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuf=new B.F(!0,A.c,null,null,null,null,13,A.a7,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fus=new B.F(!0,A.tN,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuP=new B.F(!0,A.bj,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fin=new B.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvd=new B.y("\u26a0\ufe0f ",null,D.fin,null,null,null,null,null,null,null,null,null)
D.fvq=new B.y("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.vl,null,null,null,null,null,null,null,null,null)
D.fx2=new B.y("Pick one, then change it and see what happens.",null,A.vl,null,null,null,null,null,null,null,null,null)
D.fx7=new B.y("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.fjw=new B.F(!0,A.ad,null,null,null,null,null,A.Q,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy4=new B.y("What do you want to invent? Type it below, or tap an idea.",null,D.fjw,null,null,null,null,null,null,null,null,null)
D.fzG=new B.y("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fAi=new B.y("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.fT,null,null,null,null,null,null,null,null,null)
D.fAn=new B.y("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.fAV=new B.y("Make it yours",null,A.k5,null,null,null,null,null,null,null,null,null)
D.fBd=new B.y("Your mass never changes. What changes is how hard each world pulls on it.",null,A.UI,null,null,null,null,null,null,null,null,null)
D.fC9=new B.y("Connect to the internet once and open the globe. After that it works with no internet at all.",null,A.V5,null,A.K,null,null,null,null,null,null,null)
D.fnY=new B.F(!0,A.jN,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDH=new B.y("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.fnY,null,null,null,null,null,null,null,null,null)
D.fE6=new B.y("5G",null,T.aST,null,null,null,null,null,null,null,null,null)
D.fqr=new B.F(!0,A.bY,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFj=new B.y("WHAT HAPPENS",null,D.fqr,null,null,null,null,null,null,null,null,null)
D.fH5=new B.y("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fHM=new B.y("Change the words and pictures on the three slabs.",null,A.vl,null,null,null,null,null,null,null,null,null)
D.fHX=new B.y("All the parts and wires will be removed.",null,A.hm,null,null,null,null,null,null,null,null,null)
D.fIg=new B.y("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fIQ=new B.y("Tap the crank on the board again and again to spin it faster.",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fK2=new B.y("\ud83c\udfaf Challenges",null,A.dd,null,null,null,null,null,null,null,null,null)
D.fKo=new B.y("The map of the world is not saved on this phone yet",null,A.fp,null,A.K,null,null,null,null,null,null,null)
D.fKy=new B.y("Download the animation (GIF)",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fKB=new B.y("Remove this part",null,Z.aSu,null,null,null,null,null,null,null,null,null)
D.fKT=new B.y("Clear the board?",null,A.d9,null,null,null,null,null,null,null,null,null)
D.fpT=new B.F(!0,A.bt,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL8=new B.y("How the Lab works",null,D.fpT,null,null,null,null,null,null,null,null,null)
D.fgU=new B.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLu=new B.y("Electronics Lab",null,D.fgU,null,null,null,null,A.a1,null,1,null,null)
D.fLy=new B.y("?",null,N.aU5,null,null,null,null,null,null,null,null,null)
D.fnT=new B.F(!0,A.aQ,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLD=new B.y("Planet Earth",null,D.fnT,null,null,null,null,null,null,null,null,null)
D.fMR=new B.y("Ready-made circuits",null,A.dd,null,null,null,null,null,null,null,null,null)
D.fNv=new B.y("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fNP=new B.y("UNIVERSE EXPLORER",null,H.a9E,null,null,null,null,null,null,null,null,null)
D.fsX=new B.F(!0,A.aU,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQZ=new B.y("\u26a0 There is no air here, so a parachute will not work.",null,D.fsX,null,null,null,null,null,null,null,null,null)
D.fSb=new B.y("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,Z.aSt,null,null,null,null,null,null,null,null,null)
D.fSG=new B.y("NGMY",null,A.vj,null,null,null,null,null,null,null,null,null)
D.fSU=new B.y("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.V_,null,null,null,null,null,null,null,null,null)
D.fTi=new B.y("Tap it to change its setting. Drag from the right dot to connect.",null,A.lP,null,null,null,null,null,null,null,null,null)
D.fUo=new B.y("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.vl,null,null,null,null,null,null,null,null,null)
D.fUq=new B.y("TOOLBOX",null,H.a9E,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hmw=null
$.hmv=null
$.hsG=0
$.hUS=B.U(x.N,x.G)
$.hVs=B.U(x.N,x.G)
$.i_x=B.U(x.N,x.G)
$.h3U=null
$.hVd=B.U(x.N,x.G)
$.hWg=B.U(x.N,x.G)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"irk","bFz",()=>{var v="led"
return B.a([C.azb("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fmo(),v),C.azb("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fmp(),v),C.azb("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fmq(),v),C.azb("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fmx(),v),C.azb("Not both","Make the light go OFF only when both switches are ON.",2,new C.fmy(),v),C.azb("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fmz(),"buzzer")],B.aw("O<bca>"))})
w($,"irM","bFA",()=>B.a([C.QL("UNIVERSE","Earth, space and gravity",A.OY,A.aQ,new C.fmP()),C.QL("ELECTRONICS LAB","Batteries, wires, real circuits",Ab.Ce,A.aQ,new C.fmQ()),C.QL("DISCOVERY LAB","Body Explorer: a real 3D human",D.bLu,A.bj,new C.fmR()),C.QL("TOOLBOX","Converter, clock, games",G.anz,A.cS,new C.fmS()),C.QL("REACTION LAB","Wire parts together",A.CA,A.bt,new C.fmT()),C.QL("SPARK PAINTER","Paint with light",A.a1r,A.c2,new C.fmU()),C.QL("ROCKET LANDER","Land softly on the pad",A.oo,A.aQ,new C.fmV()),C.QL("TITLE ANIMATOR","Make a moving title",A.yZ,A.bG,new C.fmW()),C.QL("CIRCUIT LAB","Connect logic, learn it",A.a1V,A.cp,new C.fmX())],B.aw("O<bu9>")))
w($,"itj","qs",()=>{var v,u,t=B.U(x.N,x.dV)
for(v=0;v<76;++v){u=D.Rw[v]
t.n(0,u.a,u)}return t})
w($,"irl","ail",()=>B.a([C.G_("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fmA()),C.G_("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fmB()),C.G_("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fmC()),C.G_("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fmD()),C.G_("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fmE()),C.G_("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fmr()),C.G_("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fms()),C.G_("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fmt()),C.G_("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fmu()),C.G_("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fmv()),C.G_("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fmw())],B.aw("O<bcb>")))
w($,"irO","hBf",()=>B.a([C.a1p("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aU,A.cf,new C.fn4()),C.a1p("Focus Timer","Work, then rest","\u23f1\ufe0f",A.ct,A.bx,new C.fn5()),C.a1p("Breathe","Calm down in a minute","\ud83e\udee7",A.iQ,A.cw,new C.fn6()),C.a1p("Draw Pad","Sketch and share","\ud83c\udfa8",A.bB,A.b6,new C.fn7()),C.a1p("Memory Match","Find the pairs","\ud83c\udccf",A.aQ,A.ce,new C.fn8()),C.a1p("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bG,A.be,new C.fn9()),C.a1p("Tip & Split","Share the bill","\ud83e\uddfe",A.bj,A.b_,new C.fna()),C.a1p("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bw,A.aD,new C.fnb())],B.aw("O<bvt>")))
w($,"irN","hBe",()=>B.a([C.afB("EARTH GLOBE","Turn it, tap a country",A.nw,A.aQ,new C.fmY()),C.afB("SOLAR SYSTEM","The Sun and its worlds",D.bLy,A.aU,new C.fmZ()),C.afB("GRAVITY LAB","Drop, weigh, orbit",D.aoB,A.cS,new C.fn_()),C.afB("BLACK HOLE","Throw in a star",A.GA,A.bw,new C.fn0()),C.afB("GALAXY","Build, tilt, collide",A.yJ,A.hc,new C.fn1()),C.afB("SIZE COMPARE","Earth next to a star",D.bLP,A.c2,new C.fn2()),C.afB("SEASONS & MOON","Why it is summer",A.wa,A.bt,new C.fn3())],B.aw("O<bvo>")))})()};
(a=>{a["4koeVIRBbM5Z3UEOSmVYx9tOANA="]=a.current})($__dart_deferred_initializers__);