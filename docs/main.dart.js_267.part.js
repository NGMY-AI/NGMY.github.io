((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,A4,W,X,A5,E,P,A6,Y,Z,N,A7,G,A8,A9,A_,Aa,T,Ab,Ac,Q,U,Ad,R,M,Ae,S,Af,Ag,O,K,F,B={
zh(d,e,f){var w=d.a,v=d.b,u=d.c
return new B.aw(w+(e.a-w)*f,v+(e.b-v)*f,u+(e.c-u)*f)},
h9u(d,e){var w=Math.cos(e),v=Math.sin(e),u=d.a,t=d.c
return new B.aw(u*w+t*v,d.b,-u*v+t*w)},
a0X(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=d.length
if(e<3)return d
w=C.a([A.d.gK(d)],x.o)
for(v=1;u=v+1,u<e;v=u){t=d[v-1]
s=d[v]
r=d[u]
q=s.a
p=s.b
o=s.c
n=new B.aw(q-t.a,p-t.b,o-t.c)
m=new B.aw(r.a-q,r.b-p,r.c-o)
l=Math.min(a0,n.gSp()*0.5)
k=Math.min(a0,m.gSp()*0.5)
j=n.gqf(0)
i=new B.aw(q-j.a*l,p-j.b*l,o-j.c*l)
j=m.gqf(0)
h=new B.aw(q+j.a*k,p+j.b*k,o+j.c*k)
for(g=0;g<=a1;++g){f=g/a1
w.push(B.zh(B.zh(i,s,f),B.zh(s,h,f),f))}}w.push(A.d.gak(d))
return w},
fC6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if(a3.length<3)return a3
w=C.a([],x.o)
for(v=0;u=v+1,t=a3.length,u<t;v=u){s=v===0?a3[v]:a3[v-1]
r=a3[v]
q=a3[u]
p=v+2
o=p<t?a3[p]:q
for(t=s.a,p=r.a,n=q.a,m=o.a,l=s.b,k=r.b,j=q.b,i=o.b,h=s.c,g=r.c,f=q.c,e=o.c,d=0;d<a4;++d){a0=d/a4
a1=a0*a0
a2=new B.fC7(a0,a1,a1*a0)
w.push(new B.aw(a2.$4(t,p,n,m),a2.$4(l,k,j,i),a2.$4(h,g,f,e)))}}w.push(A.d.gak(a3))
return w},
hAu(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=!0,u=!0,t=0;t<w;++t)if(d[t].c>=0.5)u=!1
else v=!1
if(v)return d
if(u)return D.cUT
s=C.a([],x.o)
for(r=0;w=d.length,r<w;){q=d[r];++r
p=d[r%w]
w=q.c
o=w>=0.5
n=p.c
if(o)s.push(q)
if(o!==n>=0.5)s.push(B.zh(q,p,(0.5-w)/(n-w)))}return s},
aw:function aw(d,e,f){this.a=d
this.b=e
this.c=f},
vu:function vu(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
fe:function fe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GO:function GO(d,e,f){this.a=d
this.b=e
this.c=f},
a80:function a80(d,e,f){this.a=d
this.b=e
this.c=f},
GU:function GU(d){var _=this
_.a=d
_.c=_.b=0
_.d=1
_.e=0},
bTx:function bTx(d,e){this.a=d
this.b=e},
bTy:function bTy(d){this.a=d},
bTw:function bTw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bTz:function bTz(d,e,f){this.a=d
this.b=e
this.c=f},
bTv:function bTv(d,e){this.a=d
this.b=e},
bTA:function bTA(d,e,f){this.a=d
this.b=e
this.c=f},
fC7:function fC7(d,e,f){this.a=d
this.b=e
this.c=f},
Ae:function Ae(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=160
_.y=_.x=_.w=_.r=null
_.O$=0
_.R$=h
_.bs$=_.bK$=0},
aSQ:function aSQ(d){this.a=d},
asx:function asx(d,e,f,g,h,i,j,k,l){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.a=l},
cjy:function cjy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cjz:function cjz(d,e){this.a=d
this.b=e},
cjx:function cjx(){},
Om:function Om(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
asy:function asy(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bnI:function bnI(d,e,f,g,h){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=40
_.bp$=g
_.a6$=h
_.c=_.a=null},
eKO:function eKO(d){this.a=d},
eKN:function eKN(d){this.a=d},
eKK:function eKK(d){this.a=d},
eKL:function eKL(d){this.a=d},
eKM:function eKM(d){this.a=d},
aKE:function aKE(){},
bwr(d){return B.hAX(d)},
hAX(d){var w=0,v=C.j(x.dk),u,t=2,s=[],r,q,p,o
var $async$bwr=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qr(C.mP(""),d,A.hg,null).cK(0,A.VI),$async$bwr)
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
return C.i($async$bwr,v)},
hMn(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Ol[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.dr(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.ae(y.v,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.kF(D.Ol,new B.fi2())
if(w==null)w=A.d.gK(D.Ol)
s=C.T(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.K)(r),++u){l=r[u].a
k=l[0]
l=$.pQ().h(0,l[1])
l.toString
s.n(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.K)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gK(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.B:""
return new B.ai_(w.a,w.b,m,w,s,!1)},
hG8(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.J(D.OJ,new B.f9s(),x.bd).aH(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
hU8(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cJ(b2,"{")
v=A.a.o6(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.R.aF(0,A.a.ao(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.b0(a5)
r=0
for(a6=x.j,a7=J.aV(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gT(a7)
p=C.t(J.q(q,"kind"))
o=C.t(J.q(q,"id"))
if(!$.pQ().al(0,p)||J.eV(s,o)||J.ab(t)>=8)continue
J.cd(s,o)
n=C.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.d3j[a9]
l=J.q(q,m)
if(typeof l=="number")J.aF(n,m,l)}k=A.k.D(typeof J.q(q,"x")=="number"?C.f6(J.q(q,"x")):0.2+A.k.G(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.q(q,"y")=="number"?C.f6(J.q(q,"y")):0.25+A.k.am(r,3)*0.3,0.1,0.9)
J.cd(t,new C.eT([o,p,k,j,n]));++r}if(J.ab(t)<2)return b1
i=C.a([],x.y)
for(a5=J.aV(a6.a(J.q(u,"wires")));a5.C();){h=a5.gT(a5)
g=a6.a(h)
if(J.ab(g)<4)continue
f=C.t(J.q(g,0))
e=C.t(J.q(g,2))
d=A.o.D(A.k.N(C.f6(J.q(g,1))),0,1)
a0=A.o.D(A.k.N(C.f6(J.q(g,3))),0,1)
if(J.eV(s,f)&&J.eV(s,e)&&!J.y(f,e))J.cd(i,new C.cJ([f,d,e,a0]))}if(J.ab(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.Q.a(J.q(u,"steps"))
a0=J.aV(a0==null?A.cF:a0)
while(a0.C()){a2=a0.gT(a0)
J.cd(a1,C.t(a2))}a3=a1
a0=J.q(u,"title")
a0=C.t(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new B.mh(a0,C.t(a1==null?"":a1),t,i,A.U)
a0=a4.a
a1=a4.b
d=J.ab(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.t(a5==null?"":a5)
return new B.ai_(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hKY(d){var w,v,u=B.fRH()
d.B(u)
for(w=0;w<60;++w)u.a5M(0,0.03333333333333333)
v=u.a
return A.d.ba(v,new B.ffj(u))&&!A.d.e2(v,new B.ffk())},
hKX(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.K)(l),++u){t=l[u];++v
k.n(0,t.a,$.pQ().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.K)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.t(t.e)+" V")
if(p==="resistor")q.push(""+A.k.U(t.r)+" ohms")
if(A.d.t(D.d1U,p))q.push("level "+A.k.U(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.U(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aH(q,", ")+")"
s.push(C.t(p)+n+": "+o+", current "+A.k.a9(Math.abs(t.fr)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.K)(w),++u){m=w[u]
l.push(C.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aH(s,"\n")+"\nWires: "+A.d.aH(l,"; ")},
hzu(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.K)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aH(v,"\n")+"\n\n"}v=A.d.aH(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
hMm(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.pQ().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.OJ[u]
if(A.d.ba(w,new B.fi_(s)))if(!C.dr(r,s.b.toLowerCase(),0))v=C.dr(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.ae("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a3(w,new B.fi0(e),C.U(w).k("a3<1>")).gaj(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.ae("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.a9(A.d.cG(w,0,new B.fi1())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.ae("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gK(w)
w=$.pQ().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ai_:function ai_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fi2:function fi2(){},
f9s:function f9s(){},
ffj:function ffj(d){this.a=d},
ffk:function ffk(){},
fi_:function fi_(d){this.a=d},
fi0:function fi0(d){this.a=d},
fi1:function fi1(){},
TY:function TY(d,e){this.c=d
this.a=e},
bhe:function bhe(d,e,f,g,h){var _=this
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
dYK:function dYK(d){this.a=d},
dYL:function dYL(d,e,f){this.a=d
this.b=e
this.c=f},
dYM:function dYM(d){this.a=d},
dYX:function dYX(d){this.a=d},
dYY:function dYY(d,e){this.a=d
this.b=e},
dYT:function dYT(d){this.a=d},
dYR:function dYR(d,e){this.a=d
this.b=e},
dYS:function dYS(d,e,f){this.a=d
this.b=e
this.c=f},
dYU:function dYU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dYP:function dYP(d){this.a=d},
dYQ:function dYQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dYV:function dYV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dYO:function dYO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dYW:function dYW(d,e){this.a=d
this.b=e},
dYN:function dYN(d,e){this.a=d
this.b=e},
dZ0:function dZ0(d){this.a=d},
dZ_:function dZ_(d){this.a=d},
dZ1:function dZ1(d){this.a=d},
dYZ:function dYZ(d){this.a=d},
dZ2:function dZ2(d,e){this.a=d
this.b=e},
dZ3:function dZ3(d,e){this.a=d
this.b=e},
dZ4:function dZ4(d,e){this.a=d
this.b=e},
dZ5:function dZ5(d,e){this.a=d
this.b=e},
bwM(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aLA,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p)},
h3X(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.r,1)
return C.au(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.aq,C.d(e,w,w,w,w,w,w,A.I1,A.L,w,w),A.ay,C.c6(A.fI,g,A.bx,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.U1,w,u,v,w,w,A.n),w,w,w,w,A.a8,w,w,w),w,w,w)},
F0:function F0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ul:function ul(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Uo:function Uo(d){this.a=d},
aC5:function aC5(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.kE$=i
_.fH$=j
_.fd$=k
_.bp$=l
_.a6$=m
_.c=_.a=null},
edm:function edm(){},
edG:function edG(d){this.a=d},
edF:function edF(d,e){this.a=d
this.b=e},
edH:function edH(){},
edI:function edI(){},
edo:function edo(d,e,f){this.a=d
this.b=e
this.c=f},
edn:function edn(d,e){this.a=d
this.b=e},
edd:function edd(d){this.a=d},
ede:function ede(d){this.a=d},
edf:function edf(d){this.a=d},
edg:function edg(d){this.a=d},
edh:function edh(d){this.a=d},
edi:function edi(d){this.a=d},
edj:function edj(d){this.a=d},
edk:function edk(d){this.a=d},
edl:function edl(d){this.a=d},
edb:function edb(d){this.a=d},
edc:function edc(d){this.a=d},
eda:function eda(d){this.a=d},
edz:function edz(d,e){this.a=d
this.b=e},
edu:function edu(d){this.a=d},
edv:function edv(d){this.a=d},
edr:function edr(d){this.a=d},
edw:function edw(d){this.a=d},
edq:function edq(d){this.a=d},
edx:function edx(d){this.a=d},
edy:function edy(d){this.a=d},
edp:function edp(d){this.a=d},
edA:function edA(d,e){this.a=d
this.b=e},
edt:function edt(d,e){this.a=d
this.b=e},
edB:function edB(d){this.a=d},
edC:function edC(d){this.a=d},
edD:function edD(d){this.a=d},
edE:function edE(d){this.a=d},
eds:function eds(d){this.a=d},
beh:function beh(d,e){this.b=d
this.a=e},
aJU:function aJU(){},
bup:function bup(){},
cAJ(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cAJ=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.tD().jW(0,"assets/data/body3d.bin"),$async$cAJ)
case 3:d=a1
$.h_o=J.eR(A.dD.gaO(d),d.byteOffset,d.byteLength)
t=C.bEM(d)
s=t.getUint32(4,!0)
r=C.a([],x.fq)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=C.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=C.ji(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.cSY[i]
g=C.b_((l<<16|h<<8|g|4278190080)>>>0)
r.push(new B.a1v(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aRO))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new B.b7t(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cAJ,v)},
aPM:function aPM(d,e,f){this.a=d
this.b=e
this.c=f},
a1v:function a1v(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b7t:function b7t(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
SQ:function SQ(d){this.a=d},
aAx:function aAx(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.kE$=t
_.fH$=u
_.fd$=v
_.bp$=w
_.a6$=a0
_.c=_.a=null},
dA7:function dA7(d){this.a=d},
dA6:function dA6(d,e){this.a=d
this.b=e},
dzK:function dzK(d,e){this.a=d
this.b=e},
dzL:function dzL(){},
dA8:function dA8(){},
dzM:function dzM(d,e){this.a=d
this.b=e},
dzN:function dzN(d){this.a=d},
dzO:function dzO(){},
dzP:function dzP(d){this.a=d},
dzR:function dzR(d,e){this.a=d
this.b=e},
dzQ:function dzQ(d){this.a=d},
dzH:function dzH(d,e,f){this.a=d
this.b=e
this.c=f},
dzI:function dzI(d){this.a=d},
dzJ:function dzJ(d){this.a=d},
dzY:function dzY(d){this.a=d},
dzZ:function dzZ(d,e){this.a=d
this.b=e},
dA_:function dA_(d,e){this.a=d
this.b=e},
dA0:function dA0(d){this.a=d},
dzX:function dzX(d,e){this.a=d
this.b=e},
dA1:function dA1(d,e){this.a=d
this.b=e},
dzW:function dzW(d,e){this.a=d
this.b=e},
dA2:function dA2(d){this.a=d},
dzV:function dzV(d){this.a=d},
dA3:function dA3(d){this.a=d},
dzU:function dzU(d){this.a=d},
dA4:function dA4(d){this.a=d},
dzT:function dzT(d){this.a=d},
dA5:function dA5(d){this.a=d},
dzS:function dzS(d){this.a=d},
aIW:function aIW(){},
aIX:function aIX(){},
bXT:function bXT(d){var _=this
_.a=d
_.d=_.c=_.b=null},
bXU:function bXU(d,e){this.a=d
this.b=e},
bXV:function bXV(d){this.a=d},
fEb(d,e,f,g,h,i,j){return new B.a2M(g,i,h,e,f,j)},
h5O(d){return A.d.kF($.heg(),new B.ffr(d))},
hag(d,e){var w,v,u=d.e,t=new C.J(u,new B.fCr(),C.U(u).k("J<1,n>")).fA(0)
u=e.b
w=C.a2(u).k("bc<2>")
v=C.d8(new C.bc(u,w),w.k("G.E"))
return t.e2(0,v.gkC(v))},
hWk(d,e,f,g){var w,v
if(e.a&&e.c===0)return"STOP! The breaker is still ON, so these wires are live (120 volts). Turn the breaker OFF first. This can shock you badly."
if(e.c!==0)return"The device is already in the box. Pull it out again to change the wires."
if(!g.c.t(0,f))return d.r.$2(f,g)
w=e.b
v=g.a
if(w.h(0,v)!=null)return"That screw already has a wire. Tap the wire to take it off first."
if(new C.bc(w,C.a2(w).k("bc<2>")).t(0,f))return"That wire is already fastened. Tap it to take it off if you want to move it."
w.n(0,v,f)
return null},
fM0(d,e,f){var w=f.c===0?4.7:-0.25
switch(e){case 21:return new B.aw(0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 22:return new B.aw(0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
case 23:return new B.aw(-0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 24:return new B.aw(-0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
default:return new B.aw(0,-1.98,w+0.52)}},
fLA(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="ground",d=C.a([],x.B),a0=new B.GU(d),a1=a2.a
a0.b=1
a0.qX(D.fnt,D.aOi,D.wl,3)
a0.qX(D.fo0,D.aOi,D.wl,3)
a0.qX(D.foE,D.aOw,D.wl,2)
a0.qX(D.fog,D.aOw,D.wl,2)
a0.b=2
a0.Av(D.fnd,D.aOg,D.uj,0.05,3)
a0.Av(D.fmZ,D.aOg,D.uj,0.05,3)
a0.Av(D.fmV,D.foS,D.uj,0.05,2)
a0.b=3
a0.h5(D.foY,D.fni,D.DK,0.3)
a0.h5(D.fmf,D.aOa,D.DK,0.3)
a0.h5(D.fls,D.aOa,D.DK,0.3)
a0.h5(D.fmX,D.aOn,D.DK,0.3)
a0.h5(D.fmK,D.aOn,D.DK,0.3)
w=x.o
v=C.a([],w)
u=new B.fdY(a0,v)
t=a1==="switch"
if(t){u.$3(4,-0.6,D.cIy)
u.$3(5,0.6,D.cGS)}else u.$3(4,-0.35,D.cTB)
s=new B.fe_(a0,a3,a1)
r=A.d.gK(v)
if(t){q=A.d.gak(v)
s.$5(10,r.af(0,D.fle),D.foF,"blackLine",D.Ud)
s.$5(13,q.af(0,D.foI),D.fmk,"blackLoad",D.Ud)
s.$5(12,r.af(0,D.fnR),D.fm5,e,D.zL)
a0.b=6
a0.nr(C.a([r.af(0,D.aOe),D.flk,D.Sj],w),0.075,D.zp,!1,0.3,8)
a0.nr(C.a([q.af(0,D.aOe),D.fny,D.Sj],w),0.075,D.zp,!1,0.3,8)
a0.b8d(D.Sj,D.foB,0.28,D.b2F,0.18,0.3,10)}else{s.$5(10,r.af(0,D.fmn),D.flh,"black",D.Ud)
s.$5(11,r.af(0,D.fmS),D.fnC,"white",D.zp)
s.$5(12,r.af(0,D.fn4),D.fn_,e,D.zL)}B.hBa(a0,a1,a3.c===0?4.7:-0.25)
if(a3.e&&a3.c===0){a0.b=0
a0.d=0.5
for(w=a2.f,p=w.length,o=0;o<p;++o){n=w[o]
m=B.fM0(a1,n.a,a3)
if(n.e)l=A.cr
else{k=n.c
if(k.t(0,e))l=A.bl
else{k=k.ba(0,new B.fdZ())?A.dX:A.c
l=k}}k=m.a
if(k>0.4)j=0.12
else j=k<-0.4?-0.12:0
i=Math.abs(k)<0.4?0.2:0
a0.pS(new B.aw(k+j,m.b+0,m.c+i),0.36,l,4,8,0.1)}a0.d=1}if(a3.c>=2){a0.e=0.4
a0.b=30
a0.h5(D.fnH,D.aOo,D.D7,0.3)
a0.h5(D.fnc,D.aOo,D.D7,0.3)
a0.h5(D.flr,D.aOs,D.D7,0.3)
a0.h5(D.flC,D.flW,D.D7,0.3)
a0.h5(D.foW,D.aOs,D.D7,0.3)
a0.lm(D.fmE,D.fna,0.1,D.wq,0.8,10)
a0.e=0}if(a3.c>=2&&a3.d&&!t)B.hIG(a0,a3.a)
w=t?"Cable from the breaker panel (LINE)":"NM-B cable (Romex)"
p=a1==="gfci"
if(p)k="GFCI outlet"
else k=t?"Light switch":"Receptacle (outlet)"
if(p)t="It checks that the current going out equals the current coming back. If some leaks (through water or a person) it shuts off in a fraction of a second."
else t=t?"A rocker that opens and closes the black wire to the light.":"The outlet. Each side has two slots and a ground hole."
j=a3.c===0?4.7:-0.25
h=C.E([1,D.dNH,2,D.dNR,3,D.dNW,4,new B.fe(w,"The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.",new B.aw(-0.4,1.5,-1.8),8),5,D.dO6,10,new B.fe("Black wire: hot","The hot wire brings the power from the breaker. It is the dangerous one. It goes on a brass screw.",new B.aw(-0.8,-0.8,1.2),7),13,D.dNw,11,D.dNT,12,D.dNp,6,D.dNQ,20,new B.fe(k,t,new B.aw(0,-0.2,j),9),21,D.dNx,22,D.dNI,23,D.dNt,24,D.dNo,25,D.dNB,26,D.dNU,27,D.dO3,28,D.dNF,30,D.dNr,31,D.dNq],x.S,x.T)
g=C.a([],x.E)
if(a3.f&&a3.c===0){f=a3.c===0?4.7:-0.25
w=f-0.45
g.push(new B.GO(new B.aw(2.7,0.55,w),"BRASS: hot",O.acN))
g.push(new B.GO(new B.aw(-2.9,0.55,w),"SILVER: neutral",D.b8B))
g.push(new B.GO(new B.aw(0,-3.3,f+0.6),"GREEN: ground",D.b5F))
if(p){g.push(new B.GO(new B.aw(2.8,1.9,w),"LOAD (taped)",A.dn))
g.push(new B.GO(new B.aw(2.6,-1.7,w),"LINE",A.dW))}}if(a3.a&&a3.c===0)g.push(D.bJc)
return new B.a80(d,h,g)},
hBa(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=new B.aw(0,-0.2,f),l=e==="switch",k=e==="gfci",j=l?D.b73:D.UV,i=k?3.1:2.95
d.b=20
d.h5(m.af(0,D.flN),new B.aw(1.5,i,1.3),j,0.25)
d.e=0.15
d.b=26
d.h5(m.af(0,D.flK),D.foC,D.wq,0.8)
d.xM(m.af(0,D.fnQ),D.fph,D.U7)
d.e=0.3
d.b=27
w=m.af(0,D.fmy)
d.h5(w,new B.aw(1.3,k?2.85:2.7,0.16),j,0.3)
if(l){d.e=0.7
d.b=28
d.h5(m.af(0,D.fnw),D.fmm,E.V2,0.35)
d.h5(m.af(0,D.foq),D.fof,D.aar,0.35)}else{d.e=0.6
w=k?D.ap3:D.d43
v=w.length
u=f+0.47
t=f+0.46
s=f+0.5
r=0
for(;r<v;++r){q=w[r]
d.b=27
p=-0.2+(q+0.04)
d.xM(new B.aw(-0.28,p,u),D.fnh,D.Ds)
d.xM(new B.aw(0.28,p,u),D.fmC,D.Ds)
p=-0.2+(q-0.32)
d.b8b(new B.aw(0,p,t),new B.aw(0,p,s),0.11,D.Ds,10)}if(k){d.e=0.7
d.b=28
d.h5(m.af(0,D.fnK),D.aOb,D.ba4,0.3)
d.h5(m.af(0,D.foJ),D.aOb,D.acH,0.3)}}o=k?0.95:0.85
n=k?-0.75:-0.55
w=new B.f1L(d,m)
if(!l){w.$5$taped(23,-1,o,D.wq,k)
w.$4(24,-1,n,D.wq)}w.$5$taped(21,1,o,D.K_,k)
w.$4(22,1,n,D.K_)
d.e=0.9
d.b=25
d.lm(m.af(0,D.fmW),m.af(0,D.fnz),0.15,D.bau,0.7,12)
d.xM(m.af(0,D.fnj),D.fms,A.ee)
d.h5(m.af(0,D.flQ),D.fnI,D.wq,0.8)
d.e=0},
hIG(d,e){var w,v
d.b=31
for(w=0;w<2;++w){v=D.cKZ[w]
d.lm(new B.aw(v,0.52,0.2),new B.aw(v,0.52,1.9),0.04,D.wq,0.8,6)}d.h5(D.fl4,D.fow,D.b4S,0.35)
d.b6g(D.aOk,0.2,e?A.Un:D.b89,0.9)
if(e){d.d=0.35
d.pS(D.aOk,0.5,A.Un,4,8,0)
d.d=1}},
hX7(d,e){var w
A:{if(10===e){w=d==="switch"?"blackLine":"black"
break A}if(13===e){w="blackLoad"
break A}if(11===e){w="white"
break A}if(12===e){w="ground"
break A}w=null
break A}return w},
pj:function pj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.e=g},
b5S:function b5S(d){var _=this
_.a=!0
_.b=d
_.c=0
_.f=_.e=_.d=!1},
Eu:function Eu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2M:function a2M(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=h
_.r=i},
fgp:function fgp(){},
fgq:function fgq(){},
fgr:function fgr(){},
ffr:function ffr(d){this.a=d},
fCr:function fCr(){},
fdY:function fdY(d,e){this.a=d
this.b=e},
fe_:function fe_(d,e,f){this.a=d
this.b=e
this.c=f},
fe0:function fe0(d){this.a=d},
fdZ:function fdZ(){},
f1L:function f1L(d,e){this.a=d
this.b=e},
hLK(d){var w
A:{if(81===d){w="outlet"
break A}if(82===d){w="switch"
break A}if(84===d){w="gfci"
break A}if(86===d||87===d){w="ptrap"
break A}if(85===d){w="faucet"
break A}w=null
break A}return w},
byi(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([],x.B),h=new B.GU(i)
h.b=70
h.qX(D.fo_,D.foD,D.b7i,4)
h.c=1
h.b=91
w=new B.fe6(h)
w.$3(D.fm9,D.flU,15)
w.$4$alongX(D.fos,D.fnp,11,!1)
w.$4$alongX(D.flu,D.fm_,11,!1)
w.$4$alongX(D.fop,D.fmi,6,!1)
w.$4$alongX(D.flG,D.fnq,6,!1)
for(v=0;v<=12;++v)h.b6n(new B.aw(-12+v*2,8.4,0),D.fnM,D.UF,!1,0.05)
h.c=2
h.b=92
u=new B.fe3(h)
u.$2(D.c6y,D.zE)
u.$2(D.cWu,D.wj)
u.$2(D.d_D,D.wj)
t=new B.fe2(h)
t.$1(D.cFr)
t.$1(D.cKN)
h.c=3
h.b=93
s=new B.fe5(h)
s.$1(D.cEt)
s.$2$col(D.cD_,D.zp)
s.$2$col(D.cCf,D.zp)
s.$1(D.cTH)
h.c=4
h.b=0
h.d=0.22
h.qX(D.flZ,D.fn2,D.Dh,4)
h.qX(D.fn0,D.aOl,D.Dh,4)
h.qX(D.fma,D.aOl,D.Dh,4)
h.qX(D.fmv,D.aOp,D.Dh,3)
h.qX(D.fp7,D.aOp,D.Dh,3)
h.d=1
h.c=5
h.e=0.3
h.b=0
h.Av(D.foo,D.flX,D.b5g,0.1,4)
h.b=71
h.h5(D.fo2,D.fnN,D.b2R,0.5)
h.xM(D.fp_,D.fmp,D.U7)
r=[72,73,74,75,76]
for(v=0;v<5;++v){q=A.o.G(v,2)
p=A.o.am(v,2)
o=v===0&&d.b
h.b=r[v]
n=9.55+q*0.5
m=5.7-p*0.5
h.h5(new B.aw(n,m,-7.5),D.flM,D.bdB,0.3)
l=o?0:0.07
k=o?A.cd:A.bX
h.h5(new B.aw(n+0,m+l,-7.42),D.fmj,k,0.4)}h.b=90
h.h5(D.fnr,D.flx,D.bdq,0.1)
h.h5(D.fot,D.fm3,D.V7,0.1)
h.h5(D.fpi,D.aOy,D.V7,0.1)
h.h5(D.fm1,D.aOy,D.V7,0.1)
n=new B.fe4(h)
n.$3(81,D.flI,D.UV)
h.b=81
h.xM(D.fns,D.aOu,D.Ds)
h.xM(D.fmL,D.aOu,D.Ds)
n.$5$h$w(82,D.fp1,E.V2,0.65,0.4)
h.b=82
h.h5(D.foe,D.flw,D.aar,0.4)
j=!d.b
h.b=83
h.lm(D.foa,D.aOc,0.5,D.bbw,0.4,14)
h.b6g(D.foM,0.3,j?O.UX:D.b71,0.7)
if(j){h.b=0
h.d=0.22
h.pS(D.flJ,1.5,D.b4O,4,10,0)
h.d=1}h.b=94
h.h5(D.foG,D.aOA,D.uj,0.1)
h.h5(D.fnA,D.aOA,D.uj,0.1)
h.h5(D.fp0,D.fmc,D.uj,0.1)
h.Av(D.fn8,D.foO,D.UH,0.5,2)
h.h5(D.fo1,D.fpf,D.aav,0.7)
h.b=85
h.nr(B.a0X(D.cO5,0.2,6),0.055,D.wd,!1,0.9,8)
h.b=84
h.h5(D.foT,D.fol,D.UV,0.3)
h.xM(D.fmA,D.foZ,D.acH)
h.b=86
h.nr(B.a0X(D.cFT,0.35,6),0.11,D.wo,!0,0.3,10)
h.b=87
h.lm(D.fmR,D.fo4,0.19,d.d?D.aa3:D.b9J,0.3,8)
h.b=88
h.h5(D.flq,D.flO,D.aaI,0.7)
h.b8d(D.fnZ,D.aOv,0.72,D.aaI,0.55,0.7,16)
h.lm(D.aOv,D.fnf,0.78,D.bbb,0.7,16)
h.b=89
h.lm(D.fov,D.aO9,0.85,D.b1k,0.6,18)
h.lm(D.aO9,D.fn1,0.5,D.b1l,0.5,12)
h.xM(D.fnF,D.fpb,D.b9D)
h.e=0
h.c=6
h.b=0
h.d=0.4
h.bd4(D.aO7,D.aOt,D.a6e,D.a6d,D.a9T,D.fnm,!0)
h.bd4(D.aOr,D.aOx,D.a6d,D.a6e,D.a9T,D.fod,!0)
h.be8(D.aO7,D.aOx,D.a6d,D.aa7)
h.be8(D.aOt,D.aOr,D.a6e,D.aa7)
h.d=1
n=d.b
m=n?"This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.":"This breaker is ON. The living room has power."
n=n?"The light is off because the living room breaker has tripped.":"The ceiling light is on."
l=d.c
k=l&&!d.d?"Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.":"The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one."
l=l&&!d.d?"This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.":"The slip nut is tight."
return new B.a80(i,C.E([70,D.dO4,91,D.dNE,92,D.dNS,93,D.dNZ,71,D.dO7,72,new B.fe("Living room breaker",m,D.fp9,3.5),73,D.dNN,74,D.dO0,75,D.dNy,76,D.dNV,81,D.dNX,82,D.dNn,83,new B.fe("Ceiling light",n,D.aOc,7),84,D.dO1,85,D.dNz,86,new B.fe("P-trap under the sink",k,D.fnY,4.5),87,new B.fe("Slip nut (leaking?)",l,D.aOd,3.5),88,D.dNl,89,D.dO_,90,D.dO2,94,D.dNM],x.S,x.T),D.a0n)},
hLL(d,e){var w,v,u,t=C.a([],x.B),s=new B.GU(t)
s.c=5
s.e=0.8
if(d.c&&!d.d){for(w=e*1.3,v=0;v<5;++v){u=A.k.G(w+v*0.2,1)
s.pS(new B.aw(3.05,1.45-u*u*1.4,-6.95),0.05,D.V9,3,6,0.9)}s.d=0.5
s.h5(D.flT,new B.aw(0.7+0.3*Math.sin(e),0.02,0.5),D.V9,0.9)
s.d=1}return t},
aSS:function aSS(){var _=this
_.a=5
_.c=_.b=!0
_.d=!1},
fe6:function fe6(d){this.a=d},
fe3:function fe3(d){this.a=d},
fe2:function fe2(d){this.a=d},
fe5:function fe5(d){this.a=d},
fe4:function fe4(d){this.a=d},
zI(d,e,f,g){var w
try{B.dD(d,"",e,0,f,g)}catch(w){}},
F6(){B.zI(880,80,0.25,"tri")
C.bO(M.adv,new B.f37(),x.H)},
eOy(d,e,f,g,h,i,j,k,l,m,n,o,p){return new B.bph(n,d,m,l,g,e,j,k,f,h,o,p,i,null)},
aM1(d,e,f,g,h){var w=null,v=g?e.j(0.25):A.w.j(0.5),u=C.m(18),t=C.I(g?e:A.b9,A.r,1),s=x.p,r=C.a([],s)
A.d.v(r,C.a([C.W(f,g?e:A.af,w,w,w,16),A.e9],s))
r.push(C.d(d,w,w,w,w,w,w,C.l(w,w,g?e:A.af,w,w,w,w,w,w,w,w,12,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w))
return C.aH(w,C.p(w,C.A(r,A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.h2,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.ac)},
OZ(d,e,f,g){var w=null,v=f==null,u=v?A.du:g.j(0.9),t=C.m(14),s=C.W(e,v?A.bZ:A.w,w,w,w,18)
return C.D(C.aH(w,C.p(w,C.A(C.a([s,A.bp,new C.dl(1,A.ch,C.d(d,w,w,w,w,w,w,C.l(w,w,v?A.bZ:A.w,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),w)],x.p),A.m,w,A.b7,A.j,0,w,w),A.f,w,w,new C.o(u,w,w,t,w,w,A.n),w,w,w,w,A.uw,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.ac),1)},
fc5(d,e,f,g){return C.c2(D.DI,null,new B.fc7(e,g,f),d,!0,!0,!0,A.vr,!1,!1,x.H)},
f37:function f37(){},
By:function By(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
M2:function M2(d){this.a=d},
c3y:function c3y(d){this.a=d},
c3z:function c3z(d){this.a=d},
c3A:function c3A(d){this.a=d},
c3x:function c3x(d,e,f){this.a=d
this.b=e
this.c=f},
bqX:function bqX(d,e){this.c=d
this.a=e},
eTs:function eTs(){},
eTt:function eTt(){},
bph:function bph(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.as=n
_.at=o
_.ax=p
_.a=q},
eOz:function eOz(d){this.a=d},
eOA:function eOA(d){this.a=d},
fc7:function fc7(d,e,f){this.a=d
this.b=e
this.c=f},
fc6:function fc6(){},
Yb:function Yb(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dcu:function dcu(d){this.a=d},
aaA:function aaA(d,e){this.c=d
this.a=e},
axn:function axn(d){var _=this
_.d=$
_.e=d
_.r=_.f=$
_.w=""
_.x=0
_.y=null
_.z=!1
_.Q=0
_.c=_.a=_.as=null},
d_I:function d_I(d,e,f){this.a=d
this.b=e
this.c=f},
d_J:function d_J(d){this.a=d},
d_H:function d_H(d){this.a=d},
d_B:function d_B(d){this.a=d},
d_A:function d_A(d){this.a=d},
d_C:function d_C(d){this.a=d},
d_D:function d_D(d){this.a=d},
d_E:function d_E(d,e){this.a=d
this.b=e},
d_F:function d_F(d,e){this.a=d
this.b=e},
d_G:function d_G(d){this.a=d},
d_K:function d_K(d){this.a=d},
d_S:function d_S(){},
d01:function d01(d,e,f){this.a=d
this.b=e
this.c=f},
d_T:function d_T(d){this.a=d},
d_R:function d_R(d){this.a=d},
d_U:function d_U(d){this.a=d},
d_Q:function d_Q(d){this.a=d},
d_V:function d_V(d){this.a=d},
d_W:function d_W(d){this.a=d},
d_X:function d_X(d,e){this.a=d
this.b=e},
d_P:function d_P(d,e){this.a=d
this.b=e},
d_Y:function d_Y(d){this.a=d},
d_O:function d_O(d){this.a=d},
d_Z:function d_Z(d){this.a=d},
d_N:function d_N(d){this.a=d},
d0_:function d0_(d){this.a=d},
d_M:function d_M(d){this.a=d},
d00:function d00(d){this.a=d},
d_L:function d_L(d){this.a=d},
aDf:function aDf(d){this.a=d},
aDg:function aDg(d){var _=this
_.d=d
_.f=_.e=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
eEu:function eEu(d,e,f){this.a=d
this.b=e
this.c=f},
eEv:function eEv(d){this.a=d},
eEt:function eEt(d){this.a=d},
eEn:function eEn(d){this.a=d},
eEo:function eEo(d,e){this.a=d
this.b=e},
eEp:function eEp(d,e){this.a=d
this.b=e},
eEq:function eEq(d,e){this.a=d
this.b=e},
eEr:function eEr(d){this.a=d},
eEs:function eEs(d,e){this.a=d
this.b=e},
eEz:function eEz(){},
eED:function eED(d,e){this.a=d
this.b=e},
eEA:function eEA(d){this.a=d},
eEB:function eEB(d,e){this.a=d
this.b=e},
eEy:function eEy(d,e){this.a=d
this.b=e},
eEC:function eEC(d){this.a=d},
eEx:function eEx(d){this.a=d},
eEw:function eEw(){},
axC:function axC(d){this.a=d},
axD:function axD(d){var _=this
_.d=d
_.f=_.e=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
d2C:function d2C(d,e,f){this.a=d
this.b=e
this.c=f},
d2D:function d2D(d){this.a=d},
d2B:function d2B(d){this.a=d},
d2u:function d2u(d){this.a=d},
d2x:function d2x(d){this.a=d},
d2y:function d2y(d,e){this.a=d
this.b=e},
d2z:function d2z(d,e){this.a=d
this.b=e},
d2w:function d2w(d){this.a=d},
d2A:function d2A(d,e){this.a=d
this.b=e},
d2v:function d2v(d){this.a=d},
d2H:function d2H(){},
d2N:function d2N(d,e){this.a=d
this.b=e},
d2I:function d2I(d){this.a=d},
d2J:function d2J(d){this.a=d},
d2G:function d2G(d){this.a=d},
d2L:function d2L(d,e){this.a=d
this.b=e},
d2F:function d2F(d,e){this.a=d
this.b=e},
d2K:function d2K(d){this.a=d},
d2M:function d2M(d){this.a=d},
d2E:function d2E(d){this.a=d},
ayv:function ayv(d){this.a=d},
ayw:function ayw(d){var _=this
_.d=d
_.f=_.e=$
_.r=0
_.w=""
_.x=null
_.y=!1
_.c=_.a=_.z=null},
d9G:function d9G(d,e,f){this.a=d
this.b=e
this.c=f},
d9H:function d9H(d){this.a=d},
d9F:function d9F(d){this.a=d},
d9A:function d9A(d){this.a=d},
d9C:function d9C(d,e){this.a=d
this.b=e},
d9D:function d9D(d,e){this.a=d
this.b=e},
d9E:function d9E(d,e){this.a=d
this.b=e},
d9B:function d9B(d){this.a=d},
d9P:function d9P(d,e){this.a=d
this.b=e},
d9K:function d9K(d,e){this.a=d
this.b=e},
d9M:function d9M(d){this.a=d},
d9L:function d9L(d){this.a=d},
d9N:function d9N(d){this.a=d},
d9J:function d9J(d){this.a=d},
d9O:function d9O(d){this.a=d},
d9I:function d9I(d,e){this.a=d
this.b=e},
cee(){var w=x.N
return new B.ced(C.b0(w),C.E(["n1",!1,"n2",!1],w,x.C),C.T(x.S,w))},
hWl(d,e,f){var w,v
if(!f.c.t(0,e)){w=f.d
return e==="hot"?"The red (hot) hose goes on the LEFT side only. "+w:"The blue (cold) hose goes on the RIGHT side only. "+w}w=d.e
v=f.a
if(w.h(0,v)!=null)return"That connection already has a hose."
w.n(0,v,e)
return null},
fLr(){var w,v,u=C.a([D.aO6,D.fmP],x.o)
for(w=1;w<=12;++w){v=3.141592653589793+3.141592653589793*w/12
u.push(new B.aw(3+3*Math.cos(v),0.2+3*Math.sin(v),0))}A.d.v(u,B.a0X(D.cPi,1,6))
return u},
aMw(d){var w,v,u,t,s="trap",r=C.a([],x.B),q=new B.GU(r)
q.b=49
q.Av(D.fl8,D.fln,D.uj,0.1,2)
q.Av(D.fp6,D.fl9,D.uj,0.1,2)
q.b=47
q.qX(D.fnl,D.flo,D.wl,3)
q.qX(D.flg,D.fla,D.wl,3)
q.b=46
q.Av(D.fly,D.fnO,D.UH,0.5,3)
q.b8c(D.fon,D.fkX,6.5,D.aav,!0,0.7,20)
q.lm(D.fnW,D.fmG,1.5,D.wd,0.85,14)
q.b=48
q.b8e(D.a6f,D.fm8,0.92,D.wo,!1,!0,0.3,14)
q.cN1(D.a6f,D.foQ,1,0.72,D.wo,0.3)
w=new B.fev(d,q)
w.$5(41,D.ase,D.wd,0.85,"tail")
w.$5(42,B.fLr(),D.wo,0.3,s)
w.$5(43,D.aup,D.wo,0.3,"arm")
w=new B.feu(d,q)
v=d.a
w.$6(44,"n1",D.aOf,D.a6a,D.fmg,v.t(0,"tail")&&v.t(0,s))
w.$6(45,"n2",D.aOj,D.a6c,D.fok,v.t(0,s)&&v.t(0,"arm"))
if(v.t(0,s)){q.b=0
q.d=0.55
q.e=0.4
u=B.fLr()
w=C.U(u).k("a3<1>")
t=C.B(new C.a3(u,new B.fet(),w),w.k("G.E"))
if(t.length>1)q.bea(t,0.4092,D.bdr,!1,!0,0.6,8)
q.d=1
q.e=0}return new B.a80(r,C.E([41,D.dNA,42,D.dNC,43,D.dNY,44,D.dNP,45,D.dO5,46,D.dNG,47,D.dNK,48,D.dNj,49,D.dND],x.S,x.T),D.a0n)},
hUj(d,e){var w,v,u,t,s,r,q,p=C.a([],x.B),o=new B.GU(p),n=d.d
if(n.length!==0){w=n==="n1"?D.fpc:D.foA
for(n=e*1.4,v=w.a+0,u=w.b,t=w.c+0,s=0;s<5;++s){r=A.k.G(n+s*0.2,1)
o.pS(new B.aw(v,u+(-r*6*r-r*1.5),t),0.22*(1-r*0.3),D.V9,3,6,0.9)}}else if(d.c){n=x.cv
v=C.B(D.ase,n)
u=B.fLr()
A.d.v(v,C.d9(u,1,null,C.U(u).c))
A.d.v(v,C.d9(D.aup,1,null,n))
for(n=e*0.45,s=0;s<18;++s){r=A.k.G(n+s/18,1)
q=A.o.D(A.k.bv(r*(v.length-1)),0,v.length-2)
u=v.length
o.pS(B.zh(v[q],v[q+1],r*(u-1)-q),0.38,D.bcW,3,6,0.9)}for(n=e*2.2,s=0;s<6;++s)o.pS(new B.aw(0,14-A.k.G(n+s/6,1)*5.4,0),0.3,D.b4E,3,6,0.9)}return p},
aeC(d){switch(d){case 61:return D.fl7
case 62:return D.foy
case 63:return D.fmY
default:return D.fmT}},
fM1(d){var w=d==="hot",v=B.aeC(w?61:62),u=B.aeC(w?63:64),t=w?-1:1
return B.fC6(C.a([v,v.af(0,new B.aw(t*0.6,2.2,1.2)),B.zh(v,u,0.5).af(0,new B.aw(t*1.4,0,2.6)),u.af(0,new B.aw(-t*0.2,-2,1)),u],x.o),6)},
aeq(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.B),e=new B.GU(f)
e.b=67
e.qX(D.fl6,D.flj,D.wl,3)
e.b=66
e.Av(D.fmO,D.foP,D.UH,0.5,3)
e.b8b(D.fob,D.fnv,5.5,D.aaQ,16)
e.b=65
e.lm(D.foH,D.aOq,3.4,D.wd,0.9,20)
e.nr(B.a0X(D.cUe,1.4,6),0.5,D.wd,!0,0.9,12)
for(w=0;w<2;++w){v=D.cPZ[w]
u=v*1.2
e.lm(new B.aw(u,15.5,-3.6),new B.aw(u,17.7,-3.6),0.38,D.wd,0.9,10)
t=v<0?D.zE:D.wj
e.lm(new B.aw(u,17.7,-3.6),new B.aw(u,18.6,-3.6),0.6,t,0.6,12)}for(u=[D.e6I,D.e2F],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.lm(new B.aw(v,15.3,-3.6),new B.aw(v,11.4,-3.6),0.45,D.wd,0.9,10)
e.lm(new B.aw(v,11.4,-3.6),new B.aw(v,10.7,-3.6),0.3,D.b9n,0.6,8)
e.Lb(new B.aw(v,11.3,-3.6),new B.aw(v,11.9,-3.6),0.78,0.48,D.bb9,0.7,8)}for(u=[D.eno,D.ep6],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.lm(new B.aw(v,-1.5,-6),new B.aw(v,-1.5,-3.6),0.4,D.b25,0.7,12)
e.lm(new B.aw(v,-1.5,-4.4),new B.aw(v,0.7,-4.4),0.78,D.Dg,0.8,12)
e.lm(new B.aw(v,0.7,-4.4),new B.aw(v,1.5,-3.6),0.38,D.Dg,0.8,10)
e.lm(new B.aw(v,-0.2,-4.4),new B.aw(v,-0.2,-3.1),0.2,D.b1J,0.7,8)
e.lm(new B.aw(v,-0.2,-3.1),new B.aw(v,-0.2,-2.8),0.95,t.c,0.5,12)
e.Lb(new B.aw(v,1.2,-3.6),new B.aw(v,1.9,-3.6),0.78,0.4,D.Dg,0.8,8)}for(u=x.o,w=0;w<2;++w){s=D.cWy[w]
t=s==="hot"
r=t?D.cnq:D.cnD
q=C.U(r).k("a3<1>")
p=C.B(new C.a3(r,new B.fe1(d,s),q),q.k("G.E"))
e.b=t?68:69
o=t?D.zE:D.wj
t=p.length
if(t===2){n=B.fM1(s)
e.nr(n,0.34,D.abZ,!1,0.7,8)
m=n.length/2|0
e.nr(C.a([n[m-1],n[m],n[m+1]],u),0.4,o,!1,0.4,8)
for(t=r.length,l=0;l<t;++l){k=B.aeC(r[l])
q=k.a+0
j=k.b
i=k.c+0
e.Lb(new B.aw(q,j+-0.2,i),new B.aw(q,j+0.6,i),0.62,0.3,D.Dg,0.8,8)}}else if(t===1){k=B.aeC(A.d.gK(p))
h=A.d.gK(p)===A.d.gK(r)?1:-1
t=k.a+0
q=k.b
j=k.c
e.nr(C.a([k,new B.aw(t,q+h*1.4,j+1),new B.aw(t,q+h*3,j+2.4)],u),0.34,D.abZ,!1,0.7,8)
j+=0
e.Lb(new B.aw(t,q+-0.2,j),new B.aw(t,q+0.6,j),0.62,0.3,D.Dg,0.8,8)}}if(d.r){e.b=0
e.d=0.5
for(u=d.e,w=0;w<4;++w){g=D.a0H[w]
t=g.a
if(u.h(0,t)!=null)continue
t=B.aeC(t)
q=g.c.t(0,"hot")?D.zE:D.wj
e.pS(new B.aw(t.a+0,t.b+0,t.c+0.9),0.65,q,4,8,0.1)}e.d=1}return new B.a80(f,C.E([61,D.dNs,62,D.dNu,63,D.dNm,64,D.dNv,65,D.dNL,66,D.dNJ,67,D.dNk,68,D.dO8,69,D.dNO],x.S,x.T),D.a0n)},
hLi(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.B),m=new B.GU(n)
if(!d.f)return n
w=d.e
v=w.h(0,61)==="hot"&&w.h(0,63)==="hot"
u=w.h(0,62)==="cold"&&w.h(0,64)==="cold"
t=new B.ffJ(e,m)
if(v){s=B.fM1("hot")
for(r=e*0.5,q=0;q<10;++q){p=A.k.G(r+q/10,1)
o=A.o.D(A.k.bv(p*(s.length-1)),0,s.length-2)
m.pS(B.zh(s[o],s[o+1],p*(s.length-1)-o),0.2,A.U9,3,6,0.9)}}else if(w.h(0,61)==null)t.$2(61,A.U9)
if(u){s=B.fM1("cold")
for(w=e*0.5,q=0;q<10;++q){p=A.k.G(w+q/10,1)
o=A.o.D(A.k.bv(p*(s.length-1)),0,s.length-2)
m.pS(B.zh(s[o],s[o+1],p*(s.length-1)-o),0.2,D.UL,3,6,0.9)}}else if(w.h(0,62)==null)t.$2(62,D.UL)
if(v&&u)for(w=e*2,q=0;q<8;++q){p=A.k.G(w+q/8,1)
r=C.ar(D.bd_,D.UL,0.5)
r.toString
m.pS(new B.aw(0,21-p*6.5,1.6),0.26,r,3,6,0.9)}return n},
fLU(d){return A.d.e2(D.a0H,new B.ffI(d))},
ced:function ced(d,e,f){var _=this
_.a=d
_.b=e
_.c=!1
_.d=""
_.e=f
_.r=_.f=!1},
DV:function DV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fev:function fev(d,e){this.a=d
this.b=e},
feu:function feu(d,e){this.a=d
this.b=e},
fet:function fet(){},
fe1:function fe1(d,e){this.a=d
this.b=e},
ffJ:function ffJ(d,e){this.a=d
this.b=e},
ffI:function ffI(d){this.a=d},
aw0(d,e,f,g,h){return new B.b8b(d,e,f,g,h)},
fII(d,e,f,g,h,i){return $.hwV.ce(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.cHv(d,e,f,i,g,h))},
xr:function xr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Bq:function Bq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
n2:function n2(d,e,f){this.a=d
this.b=e
this.c=f},
b8b:function b8b(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f40:function f40(){},
f41:function f41(){},
f42:function f42(){},
f49:function f49(){},
f4a:function f4a(){},
f4b:function f4b(){},
SV:function SV(d){this.a=d},
aAA:function aAA(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.kE$=n
_.fH$=o
_.fd$=p
_.bp$=q
_.a6$=r
_.c=_.a=null},
dCi:function dCi(d){this.a=d},
dBX:function dBX(d,e){this.a=d
this.b=e},
dC_:function dC_(){},
dCj:function dCj(){},
dBV:function dBV(d,e){this.a=d
this.b=e},
dBW:function dBW(d,e){this.a=d
this.b=e},
dC0:function dC0(d,e,f){this.a=d
this.b=e
this.c=f},
dBQ:function dBQ(){},
dBR:function dBR(){},
dBS:function dBS(d){this.a=d},
dBT:function dBT(d,e){this.a=d
this.b=e},
dBU:function dBU(d,e,f){this.a=d
this.b=e
this.c=f},
dC1:function dC1(){},
dC2:function dC2(d,e){this.a=d
this.b=e},
dC3:function dC3(d){this.a=d},
dBZ:function dBZ(d,e){this.a=d
this.b=e},
dBY:function dBY(d){this.a=d},
dBP:function dBP(d,e,f){this.a=d
this.b=e
this.c=f},
dCc:function dCc(d){this.a=d},
dCb:function dCb(d){this.a=d},
dCd:function dCd(d){this.a=d},
dCa:function dCa(d){this.a=d},
dC8:function dC8(d){this.a=d},
dC9:function dC9(d){this.a=d},
dC7:function dC7(d){this.a=d},
dC4:function dC4(d){this.a=d},
dC6:function dC6(d){this.a=d},
dCe:function dCe(d,e){this.a=d
this.b=e},
dCf:function dCf(d,e){this.a=d
this.b=e},
dCg:function dCg(d){this.a=d},
dC5:function dC5(d){this.a=d},
dCh:function dCh(d,e){this.a=d
this.b=e},
b8t:function b8t(d,e){this.b=d
this.a=e},
cHv:function cHv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aJ1:function aJ1(){},
bu8:function bu8(){},
hnO(){return new B.M3(null)},
nB(d,e,f,g,h){return new B.bpK(d,e,f,g,h)},
boa(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
fJd(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
M3:function M3(d){this.a=d},
Jd:function Jd(d,e){this.a=d
this.b=e},
zG:function zG(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aAR:function aAR(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dHv:function dHv(d,e){this.a=d
this.b=e},
dHu:function dHu(d){this.a=d},
dHx:function dHx(d,e){this.a=d
this.b=e},
dHw:function dHw(d){this.a=d},
bpK:function bpK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f4r:function f4r(){},
f4s:function f4s(){},
f4t:function f4t(){},
f4E:function f4E(){},
f4H:function f4H(){},
f4I:function f4I(){},
f4J:function f4J(){},
f4K:function f4K(){},
f4L:function f4L(){},
f4M:function f4M(){},
f4N:function f4N(){},
f4u:function f4u(){},
f4v:function f4v(){},
f4w:function f4w(){},
f4x:function f4x(){},
f4y:function f4y(){},
f4z:function f4z(){},
f4A:function f4A(){},
f4B:function f4B(){},
f4C:function f4C(){},
f4D:function f4D(){},
f4F:function f4F(){},
f4G:function f4G(){},
bob:function bob(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eLQ:function eLQ(d){this.a=d},
eLP:function eLP(d,e){this.a=d
this.b=e},
eLN:function eLN(d){this.a=d},
eLR:function eLR(d){this.a=d},
eLO:function eLO(d,e){this.a=d
this.b=e},
ad5:function ad5(d,e,f){this.c=d
this.d=e
this.a=f},
ac_:function ac_(d,e,f){this.c=d
this.d=e
this.a=f},
OI:function OI(d,e,f,g,h,i,j,k,l,m){var _=this
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
bp9:function bp9(d,e){this.b=d
this.a=e},
boF:function boF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b7a:function b7a(d,e){this.b=d
this.a=e},
aF2:function aF2(d,e){this.c=d
this.a=e},
aF3:function aF3(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cP$=e
_.b1$=f
_.c=_.a=null},
eLw:function eLw(d){this.a=d},
eLv:function eLv(d){this.a=d},
eLu:function eLu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eLt:function eLt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eLr:function eLr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eLq:function eLq(d,e,f){this.a=d
this.b=e
this.c=f},
eLs:function eLs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eLp:function eLp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eLE:function eLE(d){this.a=d},
eLD:function eLD(d){this.a=d},
eLF:function eLF(d,e){this.a=d
this.b=e},
eLG:function eLG(d,e){this.a=d
this.b=e},
eLH:function eLH(d,e){this.a=d
this.b=e},
eLC:function eLC(d,e,f){this.a=d
this.b=e
this.c=f},
eLI:function eLI(d,e,f){this.a=d
this.b=e
this.c=f},
eLB:function eLB(d){this.a=d},
eLx:function eLx(d){this.a=d},
eLJ:function eLJ(d){this.a=d},
eLK:function eLK(d){this.a=d},
eLA:function eLA(d,e){this.a=d
this.b=e},
eLL:function eLL(d,e){this.a=d
this.b=e},
eLz:function eLz(d,e){this.a=d
this.b=e},
eLM:function eLM(d,e){this.a=d
this.b=e},
eLy:function eLy(d,e){this.a=d
this.b=e},
eLn:function eLn(){},
eLo:function eLo(){},
bnQ:function bnQ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bnh:function bnh(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b7Q:function b7Q(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bnj:function bnj(d,e,f){this.b=d
this.c=e
this.a=f},
bre:function bre(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aKJ:function aKJ(){},
h5j(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.af(0,new C.u(w,0)),u=e.aB(0,new C.u(w,0)),t=1-f,s=3*t
return d.aJ(0,t*t*t).af(0,v.aJ(0,s*t*f)).af(0,u.aJ(0,s*f*f)).af(0,e.aJ(0,f*f*f))},
beg(d,e,f,g,h,i){return $.hxv.ce(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.dbZ(d,e,f,i,g,h))},
ZI:function ZI(d,e){this.a=d
this.b=e},
pE:function pE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ql:function ql(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Bu:function Bu(d,e){this.a=d
this.b=e},
XH:function XH(d,e){this.a=d
this.b=e},
acW:function acW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ZV:function ZV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
BF:function BF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a9S:function a9S(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aa8:function aa8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ac3:function ac3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bee:function bee(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
dc2:function dc2(d){this.a=d},
dc3:function dc3(d){this.a=d},
dc_:function dc_(d,e){this.a=d
this.b=e},
dc0:function dc0(d){this.a=d},
dc1:function dc1(d){this.a=d},
dc4:function dc4(d){this.a=d},
dc5:function dc5(d){this.a=d},
dc6:function dc6(d){this.a=d},
dc7:function dc7(d){this.a=d},
dc8:function dc8(d){this.a=d},
dc9:function dc9(d){this.a=d},
dca:function dca(d){this.a=d},
dcb:function dcb(d){this.a=d},
dcc:function dcc(d){this.a=d},
EO:function EO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Un:function Un(d){this.a=d},
aC4:function aC4(d,e,f,g,h,i,j){var _=this
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
ecH:function ecH(d){this.a=d},
ecw:function ecw(d){this.a=d},
ecy:function ecy(){},
ecz:function ecz(){},
ecC:function ecC(){},
ecD:function ecD(d,e,f){this.a=d
this.b=e
this.c=f},
ecE:function ecE(d){this.a=d},
ecF:function ecF(d){this.a=d},
ecA:function ecA(){},
ecB:function ecB(d){this.a=d},
ed6:function ed6(d){this.a=d},
ecG:function ecG(){},
ecs:function ecs(d){this.a=d},
ecJ:function ecJ(d){this.a=d},
ecI:function ecI(d){this.a=d},
ecL:function ecL(){},
ecK:function ecK(d,e){this.a=d
this.b=e},
ecv:function ecv(){},
ect:function ect(d){this.a=d},
ecu:function ecu(d){this.a=d},
ed4:function ed4(d){this.a=d},
ed3:function ed3(d){this.a=d},
ed5:function ed5(d){this.a=d},
ecV:function ecV(d,e){this.a=d
this.b=e},
ed2:function ed2(d){this.a=d},
ed0:function ed0(d){this.a=d},
ed1:function ed1(d){this.a=d},
ed_:function ed_(d){this.a=d},
ecZ:function ecZ(d){this.a=d},
ecW:function ecW(d){this.a=d},
ecX:function ecX(d){this.a=d},
ecY:function ecY(d){this.a=d},
ecx:function ecx(){},
ecR:function ecR(d){this.a=d},
ecS:function ecS(d){this.a=d},
ecQ:function ecQ(d){this.a=d},
ecT:function ecT(d){this.a=d},
ecP:function ecP(d){this.a=d},
ecU:function ecU(d){this.a=d},
ecO:function ecO(d){this.a=d},
ecN:function ecN(d){this.a=d},
ecM:function ecM(d,e){this.a=d
this.b=e},
bef:function bef(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dbZ:function dbZ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aJS:function aJS(){},
biK:function biK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Oz:function Oz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
UC:function UC(d){this.a=d},
bhP:function bhP(d,e,f,g,h,i,j,k){var _=this
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
emS:function emS(d){this.a=d},
emQ:function emQ(d){this.a=d},
emR:function emR(){},
emt:function emt(){},
ems:function ems(){},
emC:function emC(d,e){this.a=d
this.b=e},
emE:function emE(d){this.a=d},
emI:function emI(d){this.a=d},
emD:function emD(d){this.a=d},
emJ:function emJ(d){this.a=d},
emK:function emK(d){this.a=d},
emL:function emL(d,e){this.a=d
this.b=e},
emB:function emB(d,e){this.a=d
this.b=e},
emM:function emM(d){this.a=d},
emA:function emA(d){this.a=d},
emN:function emN(d,e){this.a=d
this.b=e},
emz:function emz(d,e){this.a=d
this.b=e},
emO:function emO(d){this.a=d},
emy:function emy(d,e){this.a=d
this.b=e},
emP:function emP(d){this.a=d},
emx:function emx(d){this.a=d},
emF:function emF(d){this.a=d},
emw:function emw(d){this.a=d},
emG:function emG(d){this.a=d},
emv:function emv(d){this.a=d},
emH:function emH(d,e){this.a=d
this.b=e},
emu:function emu(d,e){this.a=d
this.b=e},
bp4:function bp4(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
UO:function UO(d){this.a=d},
aCi:function aCi(d,e,f,g){var _=this
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
etr:function etr(d,e){this.a=d
this.b=e},
ets:function ets(d,e,f){this.a=d
this.b=e
this.c=f},
ett:function ett(d){this.a=d},
etq:function etq(){},
etu:function etu(d,e){this.a=d
this.b=e},
etp:function etp(d,e){this.a=d
this.b=e},
etv:function etv(d,e){this.a=d
this.b=e},
eto:function eto(d,e){this.a=d
this.b=e},
etw:function etw(d){this.a=d},
etn:function etn(d){this.a=d},
etx:function etx(d,e){this.a=d
this.b=e},
etm:function etm(d,e){this.a=d
this.b=e},
ety:function ety(d){this.a=d},
etz:function etz(d){this.a=d},
etl:function etl(d,e){this.a=d
this.b=e},
aK0:function aK0(){},
aK6:function aK6(){},
Ze:function Ze(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
Ul:function Ul(d){this.a=d},
aBY:function aBY(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.kE$=i
_.fH$=j
_.fd$=k
_.bp$=l
_.a6$=m
_.c=_.a=null},
e9H:function e9H(d){this.a=d},
e9I:function e9I(d,e){this.a=d
this.b=e},
e9v:function e9v(d,e){this.a=d
this.b=e},
e9w:function e9w(d){this.a=d},
e9t:function e9t(d){this.a=d},
e9u:function e9u(d){this.a=d},
e9s:function e9s(d){this.a=d},
e9x:function e9x(d){this.a=d},
e9r:function e9r(d,e){this.a=d
this.b=e},
e9z:function e9z(d){this.a=d},
e9q:function e9q(d,e){this.a=d
this.b=e},
e9A:function e9A(d){this.a=d},
e9p:function e9p(d,e){this.a=d
this.b=e},
e9B:function e9B(d){this.a=d},
e9o:function e9o(d){this.a=d},
e9C:function e9C(d){this.a=d},
e9n:function e9n(d){this.a=d},
e9D:function e9D(d){this.a=d},
e9m:function e9m(d){this.a=d},
e9E:function e9E(d){this.a=d},
e9F:function e9F(d){this.a=d},
e9G:function e9G(d){this.a=d},
e9l:function e9l(d){this.a=d},
e9y:function e9y(d){this.a=d},
bix:function bix(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
a9Z:function a9Z(d,e,f){this.a=d
this.b=e
this.c=f},
UJ:function UJ(d){this.a=d},
bhU:function bhU(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.kE$=j
_.fH$=k
_.fd$=l
_.bp$=m
_.a6$=n
_.c=_.a=null},
esT:function esT(d){this.a=d},
esU:function esU(d){this.a=d},
esS:function esS(d){this.a=d},
esI:function esI(d,e){this.a=d
this.b=e},
esJ:function esJ(d){this.a=d},
esG:function esG(d){this.a=d},
esH:function esH(d){this.a=d},
esF:function esF(d){this.a=d},
esy:function esy(d){this.a=d},
esz:function esz(d){this.a=d},
esx:function esx(d){this.a=d},
esK:function esK(d,e){this.a=d
this.b=e},
esE:function esE(d,e){this.a=d
this.b=e},
esL:function esL(d,e){this.a=d
this.b=e},
esD:function esD(d,e){this.a=d
this.b=e},
esM:function esM(d){this.a=d},
esC:function esC(d){this.a=d},
esN:function esN(d){this.a=d},
esB:function esB(d,e){this.a=d
this.b=e},
esO:function esO(d){this.a=d},
esA:function esA(d,e){this.a=d
this.b=e},
esP:function esP(d){this.a=d},
esw:function esw(d,e){this.a=d
this.b=e},
esQ:function esQ(d){this.a=d},
esv:function esv(d,e){this.a=d
this.b=e},
esR:function esR(d){this.a=d},
esu:function esu(d,e){this.a=d
this.b=e},
bpW:function bpW(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aar:function aar(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
ST:function ST(d){this.a=d},
aAz:function aAz(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.kE$=i
_.fH$=j
_.fd$=k
_.bp$=l
_.a6$=m
_.c=_.a=null},
dBr:function dBr(d){this.a=d},
dBq:function dBq(d,e){this.a=d
this.b=e},
dBs:function dBs(){},
dBt:function dBt(d){this.a=d},
dBh:function dBh(d,e){this.a=d
this.b=e},
dBk:function dBk(d){this.a=d},
dBj:function dBj(d,e){this.a=d
this.b=e},
dBi:function dBi(d,e){this.a=d
this.b=e},
dBo:function dBo(d,e,f){this.a=d
this.b=e
this.c=f},
dBn:function dBn(d){this.a=d},
dBl:function dBl(d){this.a=d},
dBm:function dBm(d){this.a=d},
dBp:function dBp(d){this.a=d},
b8a:function b8a(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cH2:function cH2(d){this.a=d},
aJ_:function aJ_(){},
bu7:function bu7(){},
aJP:function aJP(){},
buo:function buo(){},
aK3:function aK3(){},
buw:function buw(){},
EK:function EK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
abg:function abg(d,e,f){this.a=d
this.b=e
this.c=f},
Uf:function Uf(d){this.a=d},
bht:function bht(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.kE$=j
_.fH$=k
_.fd$=l
_.bp$=m
_.a6$=n
_.c=_.a=null},
e5a:function e5a(d,e){this.a=d
this.b=e},
e5z:function e5z(d){this.a=d},
e5o:function e5o(d){this.a=d},
e5f:function e5f(d){this.a=d},
e5p:function e5p(d,e){this.a=d
this.b=e},
e5q:function e5q(d){this.a=d},
e5e:function e5e(d){this.a=d},
e5m:function e5m(d){this.a=d},
e5n:function e5n(d){this.a=d},
e5l:function e5l(d){this.a=d},
e5r:function e5r(d,e){this.a=d
this.b=e},
e5k:function e5k(d,e){this.a=d
this.b=e},
e5s:function e5s(d,e){this.a=d
this.b=e},
e5j:function e5j(d,e){this.a=d
this.b=e},
e5t:function e5t(d,e){this.a=d
this.b=e},
e5i:function e5i(d,e){this.a=d
this.b=e},
e5u:function e5u(d){this.a=d},
e5h:function e5h(d,e){this.a=d
this.b=e},
e5v:function e5v(d){this.a=d},
e5g:function e5g(d){this.a=d},
e5w:function e5w(d){this.a=d},
e5d:function e5d(d){this.a=d},
e5x:function e5x(d){this.a=d},
e5c:function e5c(d){this.a=d},
e5y:function e5y(d){this.a=d},
e5b:function e5b(d){this.a=d},
bf8:function bf8(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
abL:function abL(d,e){this.a=d
this.b=e
this.c=-1000},
Uk:function Uk(d){this.a=d},
aBX:function aBX(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.kE$=i
_.fH$=j
_.fd$=k
_.bp$=l
_.a6$=m
_.c=_.a=null},
e94:function e94(d,e){this.a=d
this.b=e},
e95:function e95(d,e,f){this.a=d
this.b=e
this.c=f},
e9c:function e9c(d){this.a=d},
e9b:function e9b(d){this.a=d},
e9d:function e9d(d,e){this.a=d
this.b=e},
e9e:function e9e(d){this.a=d},
e9a:function e9a(d){this.a=d},
e9f:function e9f(d){this.a=d},
e99:function e99(d,e){this.a=d
this.b=e},
e9g:function e9g(d,e){this.a=d
this.b=e},
e98:function e98(d,e){this.a=d
this.b=e},
e9h:function e9h(d,e){this.a=d
this.b=e},
e97:function e97(d,e){this.a=d
this.b=e},
e9i:function e9i(d){this.a=d},
e9j:function e9j(d){this.a=d},
e96:function e96(d){this.a=d},
e9k:function e9k(d){this.a=d},
biy:function biy(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aJN:function aJN(){},
bum:function bum(){},
aJO:function aJO(){},
bun:function bun(){},
f0i(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.r,1),s=x.p,r=C.a([C.D(C.d(d,w,w,w,w,w,w,D.a5G,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.A(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.j4,w,w,1/0)},
hMM(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.T(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.K)(d),++u){t=d[u]
s=v.h(0,t)
v.n(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gJ(j))return!1
for(j=j.gdL(j),j=j.gai(j);j.C();){s=j.gT(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.c0(d.length,0,!1,w)
q=d.length
p=J.e1(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bG(0,new B.fij(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.vd.h(0,d[n]).a)return!1
m=C.eM([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.K)(j),++u){k=j[u]
if(m.L(0,k))l.push(k)}return m.a===d.length},
fLG(d){var w="TCAG",v=C.aJ(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cJ(w,v[0])*16+A.a.cJ(w,v[1])*4+A.a.cJ(w,v[2])]},
rL:function rL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b73:function b73(d,e){this.a=d
this.b=e},
fij:function fij(d,e){this.a=d
this.b=e},
Ui:function Ui(d){this.a=d},
aBV:function aBV(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
e8z:function e8z(d){this.a=d},
e8y:function e8y(d,e){this.a=d
this.b=e},
e8l:function e8l(d,e){this.a=d
this.b=e},
e8f:function e8f(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e8g:function e8g(d){this.a=d},
e8k:function e8k(d,e){this.a=d
this.b=e},
e8j:function e8j(d,e){this.a=d
this.b=e},
e8h:function e8h(d){this.a=d},
e8i:function e8i(d,e){this.a=d
this.b=e},
e8t:function e8t(){},
e8u:function e8u(d){this.a=d},
e8s:function e8s(d){this.a=d},
e8v:function e8v(d){this.a=d},
e8r:function e8r(d){this.a=d},
e8p:function e8p(d){this.a=d},
e8q:function e8q(d,e){this.a=d
this.b=e},
e8m:function e8m(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e8o:function e8o(d){this.a=d},
e8w:function e8w(d,e){this.a=d
this.b=e},
e8n:function e8n(d,e){this.a=d
this.b=e},
e8x:function e8x(d,e){this.a=d
this.b=e},
bfP:function bfP(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dk6:function dk6(d,e){this.a=d
this.b=e},
Tg:function Tg(d){this.a=d},
bgJ:function bgJ(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dJz:function dJz(d){this.a=d},
dJy:function dJy(d,e){this.a=d
this.b=e},
dJo:function dJo(d){this.a=d},
dJn:function dJn(){},
dJp:function dJp(d){this.a=d},
dJm:function dJm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJx:function dJx(){},
dJs:function dJs(){},
dJt:function dJt(d,e){this.a=d
this.b=e},
dJr:function dJr(d,e){this.a=d
this.b=e},
dJu:function dJu(d){this.a=d},
dJq:function dJq(d){this.a=d},
dJv:function dJv(d,e){this.a=d
this.b=e},
dJw:function dJw(d,e){this.a=d
this.b=e},
Tw:function Tw(d){this.a=d},
aB2:function aB2(d,e,f,g,h){var _=this
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
dMo:function dMo(d){this.a=d},
dMn:function dMn(d,e){this.a=d
this.b=e},
dMb:function dMb(){},
dMa:function dMa(d,e){this.a=d
this.b=e},
dMc:function dMc(d){this.a=d},
dMg:function dMg(d){this.a=d},
dMf:function dMf(d,e){this.a=d
this.b=e},
dMh:function dMh(d){this.a=d},
dMe:function dMe(d,e){this.a=d
this.b=e},
dMi:function dMi(d){this.a=d},
dMd:function dMd(d,e){this.a=d
this.b=e},
dMj:function dMj(d){this.a=d},
dMk:function dMk(d){this.a=d},
dMl:function dMl(d){this.a=d},
dMm:function dMm(d){this.a=d},
bbc:function bbc(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
d_x:function d_x(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d_z:function d_z(d,e,f){this.a=d
this.b=e
this.c=f},
d_y:function d_y(d,e){this.a=d
this.b=e},
aJd:function aJd(){},
bxh(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.r,1),s=x.p,r=C.a([C.D(C.d(d,w,w,w,w,w,w,D.a5G,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.A(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.j4,w,w,1/0)},
fcV(d,e,f,g,h){var w,v,u=null,t=C.ig(u,u,u,u,C.dn(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),e),A.a5,A.ci,u,A.eq,A.cg)
t.eP()
w=t.b
v=w.c
w=w.a.c
w=f.aB(0,new C.u(v/2,w.gbb(w)/2))
t.a5(d,w)},
hJR(){var w,v,u,t,s,r,q,p,o=new C.f5()
o.dU(42)
w=C.a([],x.gh)
for(v=x.S,u=x.x,t=0;t<12;++t){s=1+A.o.am(t,4)
r=C.b0(v)
q=C.a([],u)
while(q.length<s){p=1+o.aD(5)
if(r.L(0,p))q.push(new C.z(p,1+o.aD(2+A.o.am(t,3))))}A.d.b0(q,new B.fdR())
w.push(new B.aPC(q))}return w},
a06(d,e){var w,v,u,t
for(w=new C.VO(d),v="";w.C();){u=C.jz(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jz(65+A.o.G(A.o.G(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
hWq(d,e){var w,v,u,t,s,r,q,p=C.ae("[^A-Z]",!0,!1,!1,!1),o=C.aJ(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.VO(d),v=0,u="";w.C();){t=C.jz(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.G(v,p)
u+=C.jz(65+A.o.G(A.o.G(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aPC:function aPC(d){this.a=d},
bDf:function bDf(){},
fdR:function fdR(){},
SL:function SL(d){this.a=d},
bgp:function bgp(d,e,f,g,h,i){var _=this
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
dxC:function dxC(){},
dxP:function dxP(d){this.a=d},
dxO:function dxO(d,e,f){this.a=d
this.b=e
this.c=f},
dxQ:function dxQ(d){this.a=d},
dxN:function dxN(d,e){this.a=d
this.b=e},
dxD:function dxD(d,e){this.a=d
this.b=e},
dxI:function dxI(){},
dxJ:function dxJ(d){this.a=d},
dxH:function dxH(d){this.a=d},
dxK:function dxK(d,e){this.a=d
this.b=e},
dxG:function dxG(d,e){this.a=d
this.b=e},
dxL:function dxL(d,e){this.a=d
this.b=e},
dxF:function dxF(d,e){this.a=d
this.b=e},
dxM:function dxM(d){this.a=d},
dxE:function dxE(d){this.a=d},
b7f:function b7f(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
czA:function czA(d,e){this.a=d
this.b=e},
TK:function TK(d){this.a=d},
bgV:function bgV(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bp$=g
_.a6$=h
_.c=_.a=null},
dQr:function dQr(d){this.a=d},
dQq:function dQq(d,e){this.a=d
this.b=e},
dQs:function dQs(d){this.a=d},
dQp:function dQp(d,e){this.a=d
this.b=e},
dQh:function dQh(d,e,f){this.a=d
this.b=e
this.c=f},
dQl:function dQl(d){this.a=d},
dQk:function dQk(d){this.a=d},
dQm:function dQm(d,e){this.a=d
this.b=e},
dQj:function dQj(d,e){this.a=d
this.b=e},
dQn:function dQn(d){this.a=d},
dQi:function dQi(d,e){this.a=d
this.b=e},
dQo:function dQo(d,e){this.a=d
this.b=e},
bcF:function bcF(d,e,f){this.b=d
this.c=e
this.a=f},
d7h:function d7h(d,e){this.a=d
this.b=e},
d7i:function d7i(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
SU:function SU(d){this.a=d},
bgC:function bgC(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dBO:function dBO(d){this.a=d},
dBN:function dBN(d,e){this.a=d
this.b=e},
dBw:function dBw(){},
dBF:function dBF(d){this.a=d},
dBE:function dBE(){},
dBG:function dBG(d){this.a=d},
dBD:function dBD(){},
dBH:function dBH(d){this.a=d},
dBC:function dBC(d){this.a=d},
dBI:function dBI(d){this.a=d},
dBB:function dBB(d){this.a=d},
dBJ:function dBJ(d){this.a=d},
dBA:function dBA(d){this.a=d},
dBK:function dBK(d,e){this.a=d
this.b=e},
dBz:function dBz(d,e){this.a=d
this.b=e},
dBL:function dBL(d){this.a=d},
dBy:function dBy(d,e){this.a=d
this.b=e},
dBM:function dBM(d){this.a=d},
dBx:function dBx(d,e){this.a=d
this.b=e},
aIS:function aIS(){},
aJl:function aJl(){},
haf(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aB(0,e).gcj()*0.1
return new C.u((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
fRH(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new B.a2N(w,v,u,A.cG,C.T(x.N,x.C))},
hhL(d,e,f){var w=d.c,v=e===0?-1:1
return new C.u(w*f.a+v*B.fRI(d),d.d*f.b)},
fRI(d){return 42+(D.lE.al(0,d.b)?(d.ch-1)*38:0)},
e5:function e5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
rY:function rY(d,e,f,g){var _=this
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
a8A:function a8A(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
a9E:function a9E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2N:function a2N(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bJ_:function bJ_(){},
bJa:function bJa(d){this.a=d},
bJ5:function bJ5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJb:function bJb(d){this.a=d},
bJc:function bJc(d){this.a=d},
bJe:function bJe(d){this.a=d},
bJf:function bJf(d){this.a=d},
bJd:function bJd(d){this.a=d},
bJg:function bJg(d,e,f){this.a=d
this.b=e
this.c=f},
bJh:function bJh(d){this.a=d},
bJ1:function bJ1(d){this.a=d},
bJ2:function bJ2(d){this.a=d},
bJ0:function bJ0(d){this.a=d},
bJ3:function bJ3(d,e,f){this.a=d
this.b=e
this.c=f},
bJ4:function bJ4(d){this.a=d},
bIZ:function bIZ(d){this.a=d},
bJi:function bJi(d,e){this.a=d
this.b=e},
bJ6:function bJ6(d,e){this.a=d
this.b=e},
bJ9:function bJ9(d){this.a=d},
bJ8:function bJ8(d){this.a=d},
bJ7:function bJ7(d){this.a=d},
agN:function agN(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bEr:function bEr(){},
bEs:function bEs(){},
mh:function mh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ch3:function ch3(d){this.a=d},
zQ(d,e){var w
$.V()
w=C.L()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bO
return w},
qq(d,e,f,g,h,i){var w=new B.fcP(e,h,!0),v=w.$1(g),u=v.b.c
if(u>i&&u>0)v=w.$1(Math.max(2,g*i/u))
w=v.b
u=w.c
w=w.a.c
v.a5(d,f.aB(0,new C.u(u/2,w.gbb(w)/2)))},
zS(a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=a7.a
J.bA(a6.save())
a6.translate(a8.a,a8.b-b2)
w=C.cr(new C.u(0,b2+a9*0.005),a9*0.06,a9*0.45)
v=A.w.j(0.22)
$.V()
u=C.L()
u.r=v.gp(0)
a7.hV(w,u)
for(w=a9*0.05,v=-a9,u=v*0.24,t=a9*0.1,s=u+a9*0.2,r=a9*0.04,q=a9*0.065,p=v*0.05,o=a9*0.14,n=p+w,m=a9*0.025,l=0;l<2;++l){k=D.vb[l]*a9*0.075
j=k-w
j=C.by(new C.a9(j,u,j+t,s),new C.aZ(r,r))
i=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
i.r=A.dm.gp(0)
h=i.H()
a6.drawRRect(C.et(j),h)
h.delete()
k-=q
k=C.by(new C.a9(k,p,k+o,n),new C.aZ(m,m))
j=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.r=A.c.gp(0)
h=j.H()
a6.drawRRect(C.et(k),h)
h.delete()}w=v*0.16
u=v*0.52
t=a9*0.32
s=w+t
q=a9*0.09
g=C.by(new C.a9(w,u,s,u+t),new C.aZ(q,q))
q=C.L()
q.r=b4.gp(0)
a7.aA(g,q)
q=v*0.27
t=a9*0.02
t=C.by(new C.a9(w,q,s,q+a9*0.045),new C.aZ(t,t))
q=A.c.j(0.35)
s=C.L()
s.r=q.gp(0)
a7.aA(t,s)
s=v*0.47
f=new C.u(v*0.15,s)
e=new C.u(a9*0.15,s)
s=v*0.06
t=a9*0.07
a7.bz(f,f.af(0,new C.u(s,a9*0.17)),B.zQ(b5,t))
s=f.af(0,new C.u(s,a9*0.18))
q=C.L()
q.r=b5.gp(0)
a7.ae(s,r,q)
d=b1?-2.5+b7*0.5:0.5-b7*2.2
a0=e.af(0,new C.u(Math.sin(d)*a9*0.2,Math.cos(d)*a9*0.2))
a7.bz(e,a0,B.zQ(b5,t))
w=C.L()
w.r=b5.gp(0)
a7.ae(a0,r,w)
v*=0.7
a1=new C.u(0,v)
a2=a9*0.22
if(b3===1){w=a1.af(0,new C.u(0,-a2*0.12))
u=C.L()
u.r=D.Db.gp(0)
a7.ae(w,a2*1.18,u)}w=C.L()
w.r=b5.gp(0)
a7.ae(a1,a2,w)
if(b3===0){w=C.bT(a1,a2)
u=C.L()
u.r=D.Db.gp(0)
a7.fa(w,3.141592653589793,3.141592653589793,!0,u)}else if(b3===2){w=C.bT(a1,a2)
u=C.L()
u.r=D.Db.gp(0)
a7.fa(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a2*0.3,u=a2*0.2,l=0;l<2;++l){a3=D.vb[l]
t=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
t.r=D.Db.gp(0)
h=t.H()
a6.drawCircle(0+a3*a2*1.05,w,u,h)
h.delete()}}a4=A.k.G(b0*0.8,3)>2.85
for(w=v+a2*0.42,u=a2*0.12,t=a2*0.25,s=b0*0.7,r=a2*0.13,v+=a2*0.05,q=-a2*0.15,p=v+0,o=a2*0.15,l=0;l<2;++l){n=D.vb[l]*a2
m=0+n*0.4
if(a4){k=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
k.b=A.ae
k.c=1.6
k.r=A.bh.gp(0)
k.d=A.bO
h=k.H()
a6.drawLine.apply(a6,[m+q,p,m+o,p,h])
h.delete()}else{k=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
k.r=A.c.gp(0)
h=k.H()
a6.drawCircle(m,v,t,h)
h.delete()
k=Math.sin(s)
j=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.r=A.w.gp(0)
h=j.H()
a6.drawCircle(m+k*a2*0.06,p,r,h)
h.delete()}m=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
m.r=A.ji.j(0.5).gp(0)
h=m.H()
a6.drawCircle(0+n*0.62,w,u,h)
h.delete()}w=a2*0.5
a5=a1.af(0,new C.u(0,w))
v=a2*0.4
if(b6){w=C.cr(a5,v*(0.35+0.65*((Math.sin(b0*12)+1)/2)),w)
v=C.L()
v.r=A.eK.gp(0)
a7.hV(w,v)}else a7.fa(C.cr(a5.aB(0,new C.u(0,a2*0.1)),v,a2*0.65),0.2,2.741592653589793,!1,B.zQ(A.bh,1.8))
a6.restore()},
aMf(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null
if(h<=0)return
w=d.a
J.bA(w.save())
w.translate(e.a,e.b)
d.bU(0,A.k.D(A.lP.au(0,A.k.D(h,0,1)),0.01,1.3))
v=C.ig(p,p,p,p,C.dn(p,p,p,p,p,p,p,p,p,C.l(p,p,A.az,p,p,p,p,p,p,p,p,g,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),f),A.a5,A.ci,p,A.eq,A.cg)
v.eP()
u=v.b
t=u.c
u=u.a.c
s=g*0.8
r=C.by(C.cr(A.J,u.gbb(u)+g*0.7,t+g*1.1),new C.aZ(s,s))
s=$.V()
t=C.L()
t.r=i.gp(0)
d.aA(r,t)
s=new C.aP(s.r,A.ap,p,p,C.a([],x.v))
t=-g
u=r.d
q=u-1
s.E(new C.b5(t*0.3,q))
s.E(new C.ao(t*0.7,u+g*0.6))
s.E(new C.ao(g*0.2,q))
s.E(new C.bE())
q=C.L()
q.r=i.gp(0)
d.aM(s,q)
q=v.b
s=q.c
q=q.a.c
v.a5(d,new C.u(-s/2,-q.gbb(q)/2))
w.restore()},
f19(d,e,f,g){var w,v=A.k.D(Math.abs(Math.cos(g)),0.15,1),u=f*2,t=u*v,s=C.cr(e,u,t)
$.V()
w=C.L()
w.r=A.cr.gp(0)
d.hV(s,w)
d.hV(C.cr(e,u,t),B.zQ(A.p0,f*0.18))
if(v>0.5)B.qq(d,"$",e,f*1.2,A.p0,9999)},
hAJ(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=new C.f5()
j.dU(4)
for(w=e.a,v=f-g,u=e.b,t=d.a,s=f*3,r=u*0.025,q=u*0.012,p=0;p<18;++p){o=j.ag()
n=A.k.G(v*(40+j.ag()*60)+j.ag()*u,u)
J.bA(t.save())
t.translate(o*w,n)
t.rotate((s+p)*180/3.141592653589793,0,0)
o=C.cr(A.J,q,r)
m=D.aqT[A.o.G(p,5)]
$.V()
l=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
l.r=m.gp(0)
k=l.H()
t.drawRect(C.c4(o),k)
k.delete()
t.restore()}},
hKb(d,e,f,g){switch(A.o.G(f,12)){case 0:B.hAl(d,e,g)
break
case 1:B.hDc(d,e,g)
break
case 2:B.hCr(d,e,g)
break
case 3:B.hIk(d,e,g)
break
case 4:B.hIz(d,e,g)
break
case 5:B.hHu(d,e,g)
break
case 6:B.hCT(d,e,g)
break
case 7:B.hzI(d,e,g)
break
case 8:B.hJg(d,e,g)
break
case 9:B.hBW(d,e,g)
break
case 10:B.hDg(d,e,g)
break
default:B.hCv(d,e,g)}},
hAl(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=a1*0.94
for(w=a3.a,v=a0*0.12,u=a0*0.06,t=a1*0.06,s=x.v,r=0;r<6;++r){q=a0*(0.04+r*0.17)
p=a1*(0.18+0.08*A.o.G(r,3))
o=a2-p
n=q+v
m=A.c.j(0.2)
l=$.V()
k=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
k.r=m.gp(0)
j=k.H()
w.drawRect(C.c4(new C.a9(q,o,n,o+p)),j)
j.delete()
k=C.a([],s)
l=new C.aP(l.r,A.ap,d,d,k)
k.push(new C.b5(q-3,o))
k.push(new C.ao(q+u,o-t))
k.push(new C.ao(n+3,o))
k.push(new C.bE())
o=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.r=A.c.j(0.3).gp(0)
j=o.H()
o=l.gbH().a.snapshot()
w.drawPath((l.e=new C.cE(o)).a,j)
j.delete()}v=A.w.j(0.18)
$.V()
u=C.L()
u.r=v.gp(0)
a3.aW(new C.a9(0,a2,0+a0,a2+(a1-a2)),u)
i=Math.cos(a5*1.6)
h=Math.min(a0*0.46,a1*0.95)
g=h*0.62
J.bA(w.save())
u=a0*0.58
w.translate(u,a1*0.45)
a3.rC(0,Math.max(0.08,Math.abs(i)),1)
v=g*0.1
f=C.by(C.cr(A.J,g,h),new C.aZ(v,v))
t=C.L()
s=i>=0
t.sar(new C.a5(A.a3,A.a7,A.x,s?D.d4h:D.cWN,d,d).av(0,new C.a9(f.a,f.b,f.c,f.d)))
a3.aA(f,t)
a3.aA(f,B.zQ(A.dm,2))
if(s){t=-h
s=t*0.28
o=-g
n=o*0.05
m=g*0.22
l=C.L()
l.r=D.qk.gp(0)
a3.ae(new C.u(s,n),m,l)
m=C.bT(new C.u(s,n),m)
n=C.L()
n.r=D.Db.gp(0)
a3.fa(m,3.141592653589793,3.141592653589793,!0,n)
for(t*=0.05,s=o*0.25,n=g*0.07,r=0;r<3;++r){m=s+r*g*0.16
m=C.by(new C.a9(t,m,t+h*(0.42-r*0.06),m+n),A.i0)
l=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
l.r=A.dy.gp(0)
j=l.H()
w.drawRRect(C.et(m),j)
j.delete()}B.qq(a3,"COMMUNITY ID",new C.u(0,o*0.4),v,A.dm,h*0.8)}else B.qq(a3,"\u2605 NGMY \u2605",A.J,g*0.16,A.c,h*0.8)
w.restore()
v=a5>2.6
if(v){r=A.k.D((a5-2.6)/0.35,0,1)
J.bA(w.save())
w.translate(u,a1*0.52)
a3.iV(0,-0.25)
a3.bU(0,2.2-1.2*A.et.au(0,r))
e=C.cr(A.J,g*0.3,h*0.7)
a3.aA(C.by(e,A.h8),B.zQ(A.d1.j(r),3))
B.qq(a3,"\u2713 REGISTERED",A.J,g*0.13,A.d1.j(r),(e.c-e.a)*0.9)
w.restore()}w=a5*5
u=Math.sin(w)
w=Math.sin(w)
v=v&&a5<4
B.zS(a3,new C.u(a0*0.2,a2),a1*0.7,a5,!1,Math.abs(w)*a1*0.015,0,A.d1,D.qk,v,(u+1)/2)
if(a5>3)B.hAJ(a3,new C.as(a0,a1*0.9),a5,3)},
hDc(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a8.a,a4=a8.b,a5=a4*0.94,a6=A.w.j(0.2)
$.V()
w=C.L()
w.r=a6.gp(0)
a7.aW(new C.a9(0,a5,0+a3,a5+(a4-a5)),w)
v=a3*0.62
u=a3*0.3
t=a4*0.62
w=a5-t
a6=v+u
s=C.L()
s.r=A.bj.gp(0)
a7.aW(new C.a9(v,w,a6,w+t),s)
for(s=a7.a,r=a9*1.5,q=u*0.2,p=t*0.1,o=0;o<4;++o)for(n=w+t*(0.1+o*0.17),m=n+p,l=0;l<3;++l){k=v+u*(0.12+l*0.3)
j=A.o.G(o+l+A.k.bv(r),3)===0?A.dL:A.aY.j(0.6)
$.V()
i=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
i.r=j.gp(0)
h=i.H()
s.drawRect(C.c4(new C.a9(k,n,k+q,m)),h)
h.delete()}r=v+u*0.38
q=t*0.16
p=a5-q
$.V()
n=C.L()
n.r=A.fj.gp(0)
a7.aW(new C.a9(r,p,r+u*0.24,p+q),n)
n=w-a4*0.09
q=a4*0.02
n=C.by(new C.a9(v,n,a6,n+a4*0.08),new C.aZ(q,q))
a6=C.L()
a6.r=A.aR.gp(0)
a7.aA(n,a6)
a6=a4*0.05
n=a4*0.06
B.qq(a7,"JOBS",new C.u(v+u/2,w-a6),n,A.c,9999)
g=A.k.D(a9/2.8,0,1)
w=a3*0.12
f=w+(v+u*0.3-w)*A.dH.au(0,g)
w=g<1
e=w?Math.abs(Math.sin(a9*12))*a4*0.02:0
r=g>=1
p=r?(Math.sin(a9*6)+1)/2:0
B.zS(a7,new C.u(f,a5),a4*0.6,a9,!1,e,2,A.b2,A.JW,r,p)
if(w){w=C.by(C.cr(new C.u(f-a4*0.12,a5-a4*0.17-e),a4*0.075,a4*0.1),A.i0)
p=C.L()
p.r=A.fj.gp(0)
a7.aA(w,p)}if(r){w=a9-2.8
B.aMf(a7,new C.u(f+a6,a5-a4*0.78),"Hired! \ud83c\udf89",a4*0.07,w/0.4,A.c)
for(a6=w*0.8,w=a5-a4*0.5,r=a4*0.03,p=a9*8,d=0;d<6;++d){a0=A.k.G(a6+d*0.17,1)
B.f19(a7,new C.u(f+Math.sin(d*2.1)*a4*0.2,w-a0*a4*0.25),r,p+d)}}a6=a3*0.04
w=a6+u
r=n+a4*0.3
q=C.by(new C.a9(a6,n,w,r),new C.aZ(q,q))
$.V()
p=C.L()
p.r=A.il.gp(0)
a7.aA(q,p)
for(w-=a6,q=a6+w*0.08,r-=n,p=w*0.84,m=r*0.24,a6+=w*0.14,w*=0.5,k=r*0.05,d=0;d<3;++d){j=(1-A.k.D((a9-d*0.5)/0.5,0,1))*a3*0.3
i=q+j
a1=d*0.3
a2=n+r*(0.08+a1)
a2=C.by(new C.a9(i,a2,i+p,a2+m),A.i0)
i=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
i.r=A.c.gp(0)
h=i.H()
s.drawRRect(C.et(a2),h)
h.delete()
j=a6+j
a1=n+r*(0.14+a1)
a2=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
a2.r=A.bI.gp(0)
h=a2.H()
s.drawRect(C.c4(new C.a9(j,a1,j+w,a1+k)),h)
h.delete()}},
hCr(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=b0.a,a7=b0.b,a8=a7*0.94
$.V()
w=C.L()
w.r=A.ee.gp(0)
a9.aW(new C.a9(0,a8,0+a6,a8+(a7-a8)),w)
v=a6*0.62
u=A.k.D(b1/2.5,0,1)
w=v-a7*0.03
t=a7*0.4*u
s=a8-t
r=a7*0.06
t=C.by(new C.a9(w,s,w+r,s+t),A.hL)
s=C.L()
s.r=A.fj.gp(0)
a9.aA(t,s)
s=a8-a7*0.45*u
q=new C.u(v,s)
t=a7*0.3
w=C.L()
w.r=A.d1.gp(0)
a9.ae(q,t*u,w)
w=-a7
p=a7*0.07*u
o=q.af(0,new C.u(w*0.16*u,p))
n=a7*0.2
m=n*u
l=C.L()
l.r=A.bl.gp(0)
a9.ae(o,m,l)
p=q.af(0,new C.u(a7*0.16*u,p))
l=C.L()
l.r=A.ft.gp(0)
a9.ae(p,m,l)
if(u>=1)for(p=b1-2.5,o=a7*0.035,m=b1*4,k=0;k<7;++k){j=k*0.9+0.3
i=A.k.D((p-k*0.2)/0.4,0,1)
if(i>0)B.f19(a9,new C.u(v+Math.cos(j)*a7*0.2,s+Math.sin(j)*a7*0.17),o*A.lP.au(0,i),m+k)}s=a6*0.06
p=a7*0.08
o=a6*0.3
m=s+o
l=p+t
h=a7*0.02
h=C.by(new C.a9(s,p,m,l),new C.aZ(h,h))
g=A.w.j(0.3)
f=$.V()
e=C.L()
e.r=g.gp(0)
a9.aA(h,e)
e=C.a([],x.v)
d=new C.aP(f.r,A.ap,null,null,e)
f=s+6
h=l-8
d.E(new C.b5(f,h))
a0=[0.1,0.25,0.2,0.45,0.5,0.75,0.9]
a1=A.k.bv(A.k.D(b1/3,0,1)*6)
for(s=m-s-12,l=l-p-16,k=0;k<=a1;++k){g=new C.ao(f+s*k/6,h-l*a0[k])
e.push(g)
a2=d.f
if(a2!=null)g.bw(a2)
g=d.e
if(g!=null)g.a.delete()
d.e=null}a9.aM(d,B.zQ(A.bf,3))
s=a7*0.05
B.qq(a9,"+$",new C.u(m-s,p+s),r,A.bf,9999)
r=b1*3
s=Math.sin(r)
B.zS(a9,new C.u(o,a8),a7*0.62,b1,!1,Math.abs(Math.sin(r))*a7*0.01,0,A.aR,D.qk,!1,(s+1)/2)
n=o+n
t=a8-t
a3=new C.u(n,t)
p=C.by(C.cr(a3,p,a7*0.1),A.hL)
$.V()
o=C.L()
o.r=A.d6.gp(0)
a9.aA(p,o)
o=w*0.05
a9.bz(a3.af(0,new C.u(a7*0.04,w*0.01)),a3.af(0,new C.u(a7*0.12,o)),B.zQ(A.d6,4))
for(w=b1*1.4,s=a7*0.13,r=a7*0.008,p=a9.a,k=0;k<8;++k){a4=A.k.G(w+k*0.125,1)
m=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
m.r=A.fZ.gp(0)
a5=m.H()
p.drawCircle(n+(s+a4*a7*0.12),t+(o+a4*a4*a7*0.3),r,a5)
a5.delete()}},
hIk(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=d*0.94,a1=A.fj.j(0.6)
$.V()
w=C.L()
w.r=a1.gp(0)
a2.aW(new C.a9(0,a0,0+e,a0+(d-a0)),w)
v=e*0.3
u=e*0.66
for(a1=u/12,w=d*0.14,t=a1+1,s=w+d*0.12,r=a2.a,q=0;q<12;++q){p=v+a1*q
o=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.r=D.atQ[A.o.G(q,4)].gp(0)
n=o.H()
r.drawRect(C.c4(new C.a9(p,w,p+t,s)),n)
n.delete()}for(t=d*0.2,s=d*0.1,p=t+s,q=0;q<12;++q){o=v+a1*q
m=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
m.r=D.atQ[A.o.G(q,4)].gp(0)
n=m.H()
r.drawArc.apply(r,[C.c4(new C.a9(o,t,o+a1,p)),0,180,!0,n])
n.delete()}a1=v+4
t=d*0.3
p=t+(a0-t)
o=C.L()
o.r=A.fj.gp(0)
a2.aW(new C.a9(a1,t,a1+4,p),o)
o=v+u
a1=o-8
m=C.L()
m.r=A.fj.gp(0)
a2.aW(new C.a9(a1,t,a1+4,p),m)
m=d*0.68
p=m+d*0.26
a1=C.by(new C.a9(v,m,o,p),A.hL)
t=C.L()
t.r=A.il.gp(0)
a2.aA(a1,t)
for(a1=o-v,t=a1/6,o=m+2,a1/=12,p=o+(p-m-4),q=0;q<6;++q){l=v+t*q
k=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
k.r=((q&1)===0?A.bM:A.cr).j(0.9).gp(0)
n=k.H()
r.drawRect(C.c4(new C.a9(l,o,l+a1,p)),n)
n.delete()}a1=v+u*0.2
t=d*0.62
j=new C.u(a1,t)
p=d*0.17
o=d*0.03
l=C.by(C.cr(j,d*0.11,p),new C.aZ(o,o))
k=C.L()
k.r=A.cB.gp(0)
a2.aA(l,k)
k=-d
p=C.cr(j.af(0,new C.u(0,k*0.05)),d*0.04,p)
l=C.L()
l.r=A.fz.gp(0)
a2.hV(p,l)
for(p=a4*0.8,k*=0.08,l=d*0.015,q=0;q<3;++q){i=A.k.G(p+q*0.33,1)
h=Math.sin(i*6+q)
g=i*d
f=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
f.r=A.c.j(0.6*(1-i)).gp(0)
n=f.H()
r.drawCircle(a1+h*5,t+(k-g*0.14),l+g*0.02,n)
n.delete()}for(a1=v+u*0.5,p=d*0.018,q=0;q<5;++q){l=C.cr(new C.u(a1,t),w,d*(0.1+q*0.01))
k=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
k.b=A.ae
k.c=p
k.r=A.cr.gp(0)
k.d=A.bO
n=k.H()
r.drawArc.apply(r,[C.c4(l),(0.4+q*0.1)*57.29577951308232,108.8619810748564,!1,n])
n.delete()}for(a1=d*0.63,w=d*0.032,q=0;q<4;++q){t=A.o.G(q,2)
p=A.o.am(q,2)
l=(q&1)===0?A.cd:A.zD
k=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
k.r=l.gp(0)
n=k.H()
r.drawCircle(v+u*(0.72+0.06*t)+q*d*0.02,a1+p*d*0.035,w,n)
n.delete()}B.zS(a2,new C.u(e*0.14,a0),m,a4,!1,0,1,A.cr,E.ab0,!0,(Math.sin(a4*5)+1)/2)
for(a1=a4*0.45,w=e*0.16,t=d*0.45,r=d*0.06,q=0;q<5;++q){i=A.k.G(a1+q*0.2,1)
B.qq(a2,"\u2665",new C.u(w+Math.sin(i*5+q)*d*0.08+q*d*0.03,t-i*d*0.4),r,A.aE.j(1-i),9999)}a1=v+u/2
w=d*0.08
o=C.by(C.cr(new C.u(a1,w),s,u*0.7),new C.aZ(o,o))
$.V()
s=C.L()
s.r=A.az.gp(0)
a2.aA(o,s)
B.qq(a2,"NGMY STORE \xb7 African food",new C.u(a1,w),d*0.05,A.dL,u*0.64)},
hIz(d,e,f){var w,v,u,t,s,r,q=e.a,p=e.b,o=p*0.94,n=A.w.j(0.2)
$.V()
w=C.L()
w.r=n.gp(0)
d.aW(new C.a9(0,o,0+q,o+(p-o)),w)
v=A.o.G(A.k.bv(f/1.5),4)
u=A.k.G(f,1.5)
t=u<0.75
w=p*0.68
n=t?(Math.sin(f*8)+1)/2:0
s=t?Math.abs(Math.sin(f*8))*p*0.01:0
B.zS(d,new C.u(q*0.25,o),w,f,!1,s,2,A.d1,D.qk,t,n)
n=t?0:(Math.sin(f*8)+1)/2
s=t?0:Math.abs(Math.sin(f*8))*p*0.01
B.zS(d,new C.u(q*0.75,o),w,f,!1,s,0,A.bk,D.b4g,!t,n)
n=p*0.15
w=p*0.085
if(t)B.aMf(d,new C.u(q*0.26,n),D.aqO[v].a,w,u/0.25,A.o6)
else B.aMf(d,new C.u(q*0.74,n),D.aqO[v].b,w,(u-0.75)/0.25,A.er)
for(n=q*0.5,w=p*0.07,s=f*2,r=0;r<3;++r)B.qq(d,"\u2192",new C.u(n,p*(0.35+r*0.1)),w,A.c.j(0.3+0.5*A.k.G(s+r,1)),9999)},
hHu(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=d*0.94,a1=A.w.j(0.2)
$.V()
w=C.L()
w.r=a1.gp(0)
a2.aW(new C.a9(0,a0,0+e,a0+(d-a0)),w)
w=e*0.3
v=C.cr(new C.u(e*0.6,d*0.45),d*0.7,Math.min(w,d*0.55))
a1=C.by(v,A.hL)
u=C.L()
u.r=A.c.gp(0)
a2.aA(a1,u)
for(a1=v.d,u=v.b,t=a1-u,s=t*0.03,r=a2.a,q=v.a,p=v.c,o=p-q,n=q+o*0.1,m=0;m<9;++m){l=u+t*(0.1+m*0.095)
k=A.o.G(m,3)===2?0.5:0.8
j=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.r=A.cl.gp(0)
i=j.H()
r.drawRect(C.c4(new C.a9(n,l,n+o*k,l+s)),i)
i.delete()}h=A.k.D(a4/3,0,1)
g=u+t*h
if(h<1){a1=q-8
t=g-2
o=a1+(o+16)
s=C.L()
s.r=A.bf.gp(0)
a2.aW(new C.a9(a1,t,o,t+4),s)
s=A.bf.j(0.18)
t=C.L()
t.r=s.gp(0)
a2.aW(new C.a9(a1,u,o,u+(g-u)),t)}else{m=A.k.D((a4-3)/0.4,0,1)
t=A.lP.au(0,m)
s=C.L()
s.r=A.bM.gp(0)
a2.ae(new C.u(p,u),d*0.08*t,s)
B.qq(a2,"PDF",new C.u(p,u),d*0.045*m,A.c,9999)
u=d*0.06
B.qq(a2,"\u2713 Saved",new C.u(v.gbO().a,a1+u),u,A.c.j(m),9999)}a1=a4*4
u=Math.sin(a1)
B.zS(a2,new C.u(e*0.2,a0),d*0.66,a4,!0,Math.abs(Math.sin(a1))*d*0.01,0,A.ct,D.qk,!1,(u+1)/2)
f=C.cr(new C.u(w,d*0.3),d*0.18,d*0.1)
w=d*0.02
w=C.by(f,new C.aZ(w,w))
u=C.L()
u.r=A.az.gp(0)
a2.aA(w,u)
u=d*0.015
u=C.by(f.cD(-3),new C.aZ(u,u))
w=A.bf.j(0.35+0.3*Math.sin(a4*6))
a1=C.L()
a1.r=w.gp(0)
a2.aA(u,a1)},
hCT(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a8.a,a4=a8.b,a5=a4*0.94,a6=A.w.j(0.2)
$.V()
w=C.L()
w.r=a6.gp(0)
a7.aW(new C.a9(0,a5,0+a3,a5+(a4-a5)),w)
v=C.cr(new C.u(a3*0.62,a4*0.47),a4*0.8,Math.min(a3*0.4,a4*0.75))
w=C.by(v,A.qU)
a6=C.L()
a6.r=A.c.gp(0)
a7.aA(w,a6)
a6=v.a
w=v.c
u=w-a6
t=v.b
s=v.d-t
B.qq(a7,"INVOICE",new C.u(a6+u*0.3,t+s*0.09),s*0.07,A.dm,9999)
for(r=a7.a,q=u*0.08,p=a6+q,o=s*0.045,n=p+u*0.5,m=w-u*0.17,l=s*0.02,k=s*0.06,j=a9-0.5,i=0,h=0;h<3;++h){g=A.k.D((j-h*0.6)/0.4,0,1)
if(g<=0)continue
i+=D.as8[h].b
f=t+s*(0.24+h*0.14)
J.bA(r.save())
r.translate((1-g)*30,0)
e=A.cl.j(g)
$.V()
d=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
d.r=e.gp(0)
a0=d.H()
r.drawRect(C.c4(new C.a9(p,f,n,f+o)),a0)
a0.delete()
B.qq(a7,"$"+D.as8[h].b,new C.u(m,f+l),k,A.az.j(g),9999)
r.restore()}o=t+s*0.7
a7.bz(new C.u(p,o),new C.u(w-q,o),B.zQ(A.dl,1.4))
B.qq(a7,"TOTAL  $"+i,new C.u(v.gbO().a,t+s*0.78),s*0.075,A.az,u*0.8)
w=a9>2.8
if(w){q=a9-2.8
h=A.k.D(q/0.3,0,1)
J.bA(r.save())
r.translate(v.gbO().a,t+s*0.55)
a7.iV(0,-0.3)
a7.bU(0,2-A.et.au(0,h))
a7.aA(C.by(C.cr(A.J,s*0.17,u*0.6),A.h8),B.zQ(A.d1.j(h),3.5))
B.qq(a7,"PAID",A.J,s*0.11,A.d1.j(h),9999)
r.restore()
for(u=q*0.7,a6-=a4*0.05,t=a4*0.7,s=a4*0.03,r=a9*8,a1=0;a1<6;++a1){a2=A.k.G(u+a1*0.17,1)
B.f19(a7,new C.u(a6+Math.sin(a1*2)*a4*0.1,t-a2*a4*0.5),s,r+a1)}}a6=w?(Math.sin(a9*6)+1)/2:0
B.zS(a7,new C.u(a3*0.2,a5),a4*0.66,a9,!0,0,1,A.by,A.JW,w,a6)},
hzI(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.ee.j(0.7)
$.V()
w=C.L()
w.r=e.gp(0)
d.aW(new C.a9(0,f,0+h,f+(g-f)),w)
w=h*0.6
e=g*0.62
v=new C.u(w,e)
u=Math.min(h*0.3,g*0.6)
t=C.by(C.cr(v,u*1.3,u*2.1),A.h8)
s=C.L()
s.r=A.hp.gp(0)
d.aA(t,s)
s=u*0.5
t=u*1.2
r=C.cr(v.aB(0,new C.u(s,0)),t,u)
q=C.L()
q.r=A.fW.gp(0)
d.aW(r,q)
s=C.cr(v.af(0,new C.u(s,0)),t,u)
q=C.L()
q.r=A.fW.gp(0)
d.aW(s,q)
q=A.k.G(a1,2)
s=d.a
J.bA(s.save())
s.translate(w,e)
d.rC(0,Math.cos(q/2*3.141592653589793),1)
q=-u*0.6
r=C.L()
r.r=A.bJ.gp(0)
d.aW(new C.a9(0,q,0+u,q+t),r)
s.restore()
p=A.k.D(a1/3,0,1)
e-=u*0.6
r=e-g*0.28*p
d.bz(new C.u(w,e),new C.u(w,r),B.zQ(A.fj,g*0.025))
for(e=p-0.4,t=g*0.05,q=g*0.04,o=0;o<5;++o){n=A.k.D(e-o*0.1,0,1)
m=o*1.3
l=Math.cos(m)
k=Math.sin(m)
j=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.r=A.bl.gp(0)
i=j.H()
s.drawCircle(w+l*g*0.14*n,r+k*g*0.08*n,t*n,i)
i.delete()
if(n>0.6)B.qq(d,"\u2665",new C.u(w+Math.cos(m)*g*0.14,r+Math.sin(m)*g*0.08),q,A.by,9999)}e=a1*4
w=Math.sin(e)
B.zS(d,new C.u(h*0.2,f),g*0.66,a1,!1,Math.abs(Math.sin(e))*g*0.01,2,A.aD,D.qk,!1,(w+1)/2)},
hJg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=l*0.94,j=A.w.j(0.2)
$.V()
w=C.L()
w.r=j.gp(0)
d.aW(new C.a9(0,k,0+m,k+(l-k)),w)
v=A.k.bv(A.k.D(f/5.5,0,1)*9)+1
for(u=m*0.62,j=k-l*0.03,w=l*0.26,t=l*0.07,s=d.a,r=0;r<v;++r){q=j-r*l*0.055
p=C.cr(new C.u(u,q),t,w)
o=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.r=A.cr.gp(0)
n=o.H()
s.drawOval(C.c4(p),n)
n.delete()
q=C.cr(new C.u(u,q),t,w)
p=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
p.b=A.ae
p.c=2
p.r=A.p0.gp(0)
p.d=A.bO
n=p.H()
s.drawOval(C.c4(q),n)
n.delete()}j=l*0.1
B.f19(d,new C.u(u,j+A.k.G(f*1.6,1)*(k-t-v*l*0.055-j)),l*0.05,f*8)
j=l*0.08
B.qq(d,"$"+v*25,new C.u(u,j),j,A.dL,9999)
j=f*5
t=Math.sin(j)
B.zS(d,new C.u(m*0.25,k),l*0.66,f,!1,Math.abs(Math.sin(j))*l*0.012,1,A.ct,D.qk,!0,(t+1)/2)},
hBW(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a1.a,f=a1.b,e=f*0.94,d=A.w.j(0.2)
$.V()
w=C.L()
w.r=d.gp(0)
a0.aW(new C.a9(0,e,0+g,e+(f-e)),w)
for(d=a0.a,w=f*0.012,v=f*0.55,u=a2*4,t=a2*2,s=f*0.15,r=f*0.03,q=0;q<3;q=m){p=Math.sin(u+q*1.7)
J.bA(d.save())
d.translate(g*(0.5+0.14*q),v-Math.abs(p)*f*0.3)
d.rotate((t+q)*180/3.141592653589793,0,0)
p=C.by(C.cr(A.J,s,s),new C.aZ(r,r))
o=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.r=A.c.gp(0)
n=o.H()
d.drawRRect(C.et(p),n)
n.delete()
m=q+1
p=m*2
o=q===0
l=0
for(;;){if(!(l<p-(o?1:0)))break
k=l*2.1
j=Math.cos(k)
k=Math.sin(k)
i=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
i.r=A.bh.gp(0)
n=i.H()
d.drawCircle(j*f*0.04,k*f*0.04,w,n)
n.delete();++l}d.restore()}for(d=a2*0.6,v=f*0.25,u=f*0.06,q=0;q<5;++q){h=A.k.G(d+q*0.2,1)
B.qq(a0,"\u2605",new C.u(g*(0.45+q*0.1),v-h*f*0.2),u,A.dL.j(1-h),9999)}d=g*0.22
v=a2*6
u=Math.sin(v)
B.zS(a0,new C.u(d,e),f*0.66,a2,!0,Math.abs(Math.sin(v))*f*0.015,0,A.cd,D.qk,!0,(u+1)/2)
u=e-f*0.28
r=C.by(C.cr(new C.u(d,u),f*0.07,f*0.16),new C.aZ(r,r))
$.V()
v=C.L()
v.r=A.cB.gp(0)
a0.aA(r,v)
v=C.L()
v.r=A.aE.gp(0)
a0.ae(new C.u(d+f*0.05,u),w,v)},
hDg(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a0.a,i=a0.b,h=i*0.94,g=A.w.j(0.2),f=$.V(),e=C.L()
e.r=g.gp(0)
d.aW(new C.a9(0,h,0+j,h+(i-h)),e)
e=j*0.42
g=i*0.18
w=i*0.08
v=C.by(new C.a9(e,g,e+j*0.5,g+i*0.5),new C.aZ(w,w))
u=new C.aP(f.r,A.ap,null,null,C.a([],x.v))
u.E(new C.iR(v))
d.aM(u,B.zQ(A.c.j(0.5),4))
t=new C.Ra(new C.v2(C.wv(u),!1,C.a([],x.U))).gK(0)
for(g=a1*0.18,f=t.a,w=t.b,s=f.e,r=i*0.016,q=d.a,p=0;p<10;++p){o=A.k.G(g+p/10,1)
f.j3()
n=s[w].b
n===$&&C.c()
n=n.a.length()
f.j3()
n=s[w].LD(o*n).a
o=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.r=A.dL.gp(0)
m=o.H()
q.drawCircle(n.a,n.b,r,m)
m.delete()}l=a1>1.5
g=i*0.43
k=new C.u(j*0.92,g)
if(l){f=A.dL.j(0.4+0.2*Math.sin(a1*8))
w=C.L()
w.r=f.gp(0)
w.z=A.y7
d.ae(k,i*0.2,w)}f=i*0.07
w=l?A.o6:A.bI
s=C.L()
s.r=w.gp(0)
d.ae(k,f,s)
g=C.by(C.cr(new C.u(e,g),i*0.2,i*0.1),A.hL)
s=C.L()
s.r=A.d1.gp(0)
d.aA(g,s)
B.qq(d,"+",new C.u(e,i*0.36),f,A.c,9999)
g=l?(Math.sin(a1*6)+1)/2:0
e=l?Math.abs(Math.sin(a1*6))*i*0.012:0
B.zS(d,new C.u(j*0.2,h),i*0.68,a1,!1,e,0,A.bS,D.qk,l,g)
if(l)B.aMf(d,new C.u(j*0.24,i*0.16),"It works!",f,(a1-1.5)/0.4,A.c)},
hCv(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a1.a,f=a1.b,e=f*0.94,d=A.w.j(0.2)
$.V()
w=C.L()
w.r=d.gp(0)
a0.aW(new C.a9(0,e,0+g,e+(f-e)),w)
v=A.k.D((a2-0.3)/0.4,0,1)
u=A.k.D((a2-1.8)/0.4,0,1)
w=f*0.2
d=f*0.065
B.aMf(a0,new C.u(g*0.3,w),"How do I enroll?",d,v,A.o6)
if(a2>1&&a2<1.8)for(t=g*0.72,s=f*0.38,r=a2*9,q=f*0.015,p=a0.a,o=0;o<3;++o){n=Math.sin(r+o)
m=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
m.r=A.c.gp(0)
l=m.H()
p.drawCircle(t+o*f*0.05,s-Math.abs(n)*f*0.02,q,l)
l.delete()}B.aMf(a0,new C.u(g*0.7,f*0.38),"Tap Civic Registry!",d,u,A.er)
B.zS(a0,new C.u(g*0.2,e),f*0.62,a2,!1,0,2,A.aE,D.qk,a2<1,0)
k=g*0.78
j=e-f*0.28
d=f*0.04
w=C.by(C.cr(new C.u(k,j),f*0.22,w),new C.aZ(d,d))
t=C.L()
t.r=A.aK.gp(0)
a0.aA(w,t)
t=f*0.18
w=j-t
d=C.by(C.cr(new C.u(k,w),f*0.14,t),new C.aZ(d,d))
t=C.L()
t.r=A.cl.gp(0)
a0.aA(d,t)
for(d=a0.a,t=a2*1.1,s=f*0.02,i=0;i<2;++i){h=D.vb[i]
r=A.k.G(t,1)>0.08?A.b8:A.hS
q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.r=r.gp(0)
l=q.H()
d.drawCircle(k+h*f*0.04,w,s,l)
l.delete()}a0.bz(new C.u(k,j-f*0.25),new C.u(k,j-f*0.3),B.zQ(A.af,3))
d=C.L()
d.r=A.aE.gp(0)
a0.ae(new C.u(k,j-f*0.31),f*0.015,d)},
fcP:function fcP(d,e,f){this.a=d
this.b=e
this.c=f},
hU6(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new B.ftJ(),c9=new B.ftL(),d0=new B.ftM(),d1=new B.ftK(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aA(w,d1.$3(new C.a9(w.a,w.b,w.c,w.d),A.bN,A.bI))
d3.bz(D.dT0,D.dQP,c9.$2(A.dx,1.4))
d3.bz(D.dQF,D.dQE,c9.$2(A.bv,2.4))
d3.bz(D.dQG,T.aCK,c9.$2(A.bv,2.4))
if(c7){d2=c8.$1(A.fk.j(0.5))
d2.z=A.Pr
d3.ae(D.dQp,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.G(d2+v/3,1)
d6.$5(d3,"\u2744",new C.u(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aA(d0.$4(-22,-26,44,50),d1.$3(D.aIo,A.aO,A.cl))
d3.ae(A.cH,16,c8.$1(A.bv))
d3.ae(A.cH,13,c8.$1(c7?A.aY.j(0.85):A.M))
if(c7){d2=d3.a
J.bA(d2.save())
d2.translate(0,4)
d3.iV(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.af,3).H()
d2.drawLine.apply(d2,[0,0,s*11,t*11,r])
r.delete()}d2.restore()
for(t=d5*0.8,v=0;v<4;++v){u=A.k.G(t+v*0.25,1)
s=Math.sin(v*2+d5)
r=c8.$1(A.c.j(0.8*(1-u))).H()
d2.drawCircle(s*9,4-u*12,1.6+u*2,r)
r.delete()}}d3.ae(D.dSX,2.4,c8.$1(c7?A.bl:A.ak))
d3.ae(D.dTE,2.4,c8.$1(A.ak))
return!0
case"blender":d3.aA(d0.$5(-14,14,28,12,4),c8.$1(A.es))
d2=$.V().r
t=x.v
q=new C.aP(d2,A.ap,c6,c6,C.a([],t))
q.E(new C.b5(-16,-26))
q.E(new C.ao(16,-26))
q.E(new C.ao(12,14))
q.E(new C.ao(-12,14))
q.E(new C.bE())
d3.aM(q,c8.$1(A.fk.j(0.35)))
if(c7){d2=new C.aP(d2,A.ap,c6,c6,C.a([],t))
d2.E(new C.b5(-14,-10))
d2.E(new C.ao(14,-10))
d2.E(new C.ao(12,14))
d2.E(new C.ao(-12,14))
d2.E(new C.bE())
d3.aM(d2,c8.$1(A.aE.j(0.7)))}d3.aM(q,c9.$2(A.af,1.6))
d2=d3.a
J.bA(d2.save())
d2.translate(0,10)
d3.iV(0,d4.y)
d3.bz(D.a2J,D.aD_,c9.$2(A.bX,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.G(s+v*0.33,1)
r=c8.$1(A.f8).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aA(d0.$5(-10,-4,20,10,4),c8.$1(A.aJ))
d3.ae(A.i9,3,c8.$1(c7?A.bl:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=D.atV[m]
r=c9.$2(A.bv,3).H()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.bA(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).H()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=C.cr(A.J,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).H()
d2.drawOval(C.c4(p),r)
r.delete()}d2.restore()}return!0
case"drill":w=new C.aP($.V().r,A.ap,c6,c6,C.a([],x.v))
w.E(new C.b5(-24,-12))
w.E(new C.ao(10,-12))
w.E(new C.ao(10,2))
w.E(new C.ao(-2,2))
w.E(new C.ao(-6,22))
w.E(new C.ao(-16,22))
w.E(new C.ao(-14,2))
w.E(new C.ao(-24,2))
w.E(new C.bE())
d3.aM(w,d1.$3(D.etm,A.aL,A.dn))
d3.aW(D.esM,c8.$1(A.dX))
d2=d3.a
J.bA(d2.save())
d2.translate(18,-5)
d3.iV(0,d4.y*2)
d3.bz(A.J,D.dQJ,c9.$2(A.bX,2.4))
d3.bz(A.a2I,D.dQI,c9.$2(A.hB,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.G(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dL.j(1-u)).H()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new C.aP($.V().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(16,-6))
d2.E(new C.ao(52,-26))
d2.E(new C.ao(52,18))
d2.E(new C.ao(16,4))
d2.E(new C.bE())
d3.aM(d2,c8.$1(A.bJ.j(0.35*v)))}d3.aA(d0.$5(-26,-6,30,12,3),d1.$3(D.ets,A.bn,A.cB))
k=new C.aP($.V().r,A.ap,c6,c6,C.a([],x.v))
k.E(new C.b5(4,-6))
k.E(new C.ao(18,-12))
k.E(new C.ao(18,12))
k.E(new C.ao(4,6))
k.E(new C.bE())
d3.aM(k,c8.$1(A.es))
d3.ae(D.dQN,7,c8.$1(c7?A.c:A.dX))
return!0
case"neon":d3.aA(d0.$5(-30,-14,60,28,6),c8.$1(I.o4))
if(c7)j=d4.ax>0.5||A.o.G(A.k.bv(d5*17),3)!==0
else j=!1
i=j?A.bY:D.baa
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.bY.j(0.35))
t.z=A.lc
d3.aA(d2,t)}d3.aA(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.dT6,i,17)
return!0
case"microwave":d3.aA(d0.$4(-30,-18,60,38),d1.$3(D.ety,A.bX,A.bn))
d2=d0.$5(-26,-14,38,30,3)
d3.aA(d2,c8.$1(c7?A.bJ.j(0.75):A.az))
if(c7){d2=d3.a
J.bA(d2.save())
d2.translate(-7,8)
d3.iV(0,d4.y*0.5)
d3.hV(C.cr(A.J,7,22),c8.$1(A.dn))
d2.restore()}d3.aA(d0.$5(15,-14,12,12,2),c8.$1(I.o4))
if(c7)d6.$5(d3,"0:"+A.a.aU(A.o.u(59-A.o.G(A.k.bv(d5),60)),2,"0"),D.dQO,A.bf,6.5)
d3.ae(D.dR_,4,c8.$1(A.dX))
return!0
case"doorbell":d3.aA(d0.$5(-16,-26,32,52,8),c8.$1(A.aK))
d3.ae(A.Qf,10,c8.$1(c7?A.cr:A.bv))
d2=d3.a
J.bA(d2.save())
d2.translate(0,-8)
d3.iV(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.dTG,A.c,16)
d2.restore()
d3.ae(A.jR,6,c8.$1(A.d6))
d3.ae(A.jR,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=C.bT(A.Qf,14+v*6+A.k.G(t,6))
r=c9.$2(A.cr.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[C.c4(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bz(D.dT5,D.dTC,c9.$2(A.bv,4))
d2=d3.a
J.bA(d2.save())
d3.iV(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aA(d0.$5(-24,-14,46,22,5),d1.$3(D.etn,A.bX,A.ak))
d3.ae(D.aCM,8,c8.$1(A.az))
d3.ae(D.aCM,4.5,c8.$1(c7?A.aY:A.cB))
d3.ae(D.dT3,2.2,c8.$1(c7&&A.o.G(A.k.bv(d5*1.6),2)===0?A.aE:A.k3))
d2.restore()
if(c7)d6.$5(d3,"REC",D.dTe,A.aE,9)
return!0
case"console":d3.aA(d0.$5(-28,-22,56,44,8),d1.$3(D.etv,A.j1,A.f4))
d3.aA(d0.$5(-20,-17,40,22,3),c8.$1(A.dI))
if(c7){d2=d5*2.3
d3.ae(new C.u(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aW(new C.a9(-18,t,-15.6,t+8),c8.$1(A.bf))
d2=-9+Math.sin(d2-0.4)*6
d3.aW(new C.a9(15.6,d2,18,d2+8),c8.$1(A.bY))}d3.ae(D.dT_,4,c8.$1(A.aV))
d3.ae(D.dQK,2.4,c8.$1(A.aE))
d3.ae(D.dQX,2.4,c8.$1(A.bl))
return!0
case"heartmon":d3.aA(d0.$5(-30,-22,60,44,6),c8.$1(A.az))
d3.aA(d0.$5(-26,-18,52,28,3),c8.$1(A.dI))
if(c7){d2=$.V()
t=C.a([],x.v)
h=new C.aP(d2.r,A.ap,c6,c6,t)
for(d2=d5*0.5,l=-25;l<=25;++l){u=A.k.G((l+25)/50-d2,1)
if(u<0.1)g=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)g=0.6
else{s=u<0.2?-0.4:0
g=s}f=-4+g*11
if(l===-25){s=new C.b5(l,f)
t.push(s)
p=h.f
if(p!=null)s.bw(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new C.ao(l,f)
t.push(s)
p=h.f
if(p!=null)s.bw(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aM(h,c9.$2(A.bf,1.8))
d6.$5(d3,"72",D.dQL,A.fU,11)
d2=d5*9
d6.$5(d3,"\u2665",D.dTi,A.fU.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ae(D.dT8,3,c8.$1(c7?A.bl:A.bv))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aA(d2,c8.$1(A.ct.j(c7?0.5:0.3)))
d3.aA(d0.$5(-26,-20,52,40,4),c9.$2(A.af,1.6))
d3.aW(D.etp,c8.$1(D.Jy))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.bA(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.rC(0,-1,1)
d3.hV(C.cr(A.J,8,14),c8.$1(A.cL))
d2=new C.aP($.V().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-6,0))
d2.E(new C.ao(-12,-4))
d2.E(new C.ao(-12,4))
d2.E(new C.bE())
d3.aM(d2,c8.$1(A.cd))
d3.ae(D.dRr,1.2,c8.$1(A.w))
s.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.k.G(d2+v*0.2,1)
t=Math.sin(u*8+v)
p=A.o.G(v,2)
r=c9.$2(A.af,1).H()
s.drawCircle(-18+t*2,13-u*30,1.4+p,r)
r.delete()}}return!0
case"lighthouse":d2=$.V().r
t=x.v
e=new C.aP(d2,A.ap,c6,c6,C.a([],t))
e.E(new C.b5(-9,22))
e.E(new C.ao(-5,-16))
e.E(new C.ao(5,-16))
e.E(new C.ao(9,22))
e.E(new C.bE())
d3.aM(e,d1.$3(D.etT,A.c,A.bM))
d3.aW(D.etS,c8.$1(c7?A.dL:A.bv))
s=new C.aP(d2,A.ap,c6,c6,C.a([],t))
s.E(new C.b5(-7,-22))
s.E(new C.ao(0,-29))
s.E(new C.ao(7,-22))
s.E(new C.bE())
d3.aM(s,c8.$1(A.eK))
if(c7){d=Math.sin(d4.y*0.3)
d2=new C.aP(d2,A.ap,c6,c6,C.a([],t))
d2.E(new C.b5(0,-19))
t=d*34
d2.E(new C.ao(t,-26))
d2.E(new C.ao(t,-12))
d2.E(new C.bE())
d3.aM(d2,c8.$1(A.dL.j(0.45)))
d2=c8.$1(A.dL.j(0.35))
d2.z=A.Pr
d3.ae(D.dQq,14,d2)}return!0
case"discoball":d3.bz(D.dQv,F.aCI,c9.$2(A.dX,1.4))
d3.ae(A.J,16,d1.$3(D.eta,A.aO,A.ak))
for(d2=d3.a,v=0;v<8;++v){t=-12+v*3.4
r=c9.$2(A.dl,0.7).H()
d2.drawLine.apply(d2,[-16,t,16,t,r])
r.delete()}for(v=0;v<5;++v){d=d4.y*0.5+v*1.26
t=Math.cos(d)
s=Math.sin(d)
p=Math.cos(d)
r=c9.$2(A.dl,0.7).H()
d2.drawLine.apply(d2,[t*16*0.3,s*16*0.3,p*16,0,r])
r.delete()}if(c7)for(t=d5*2,s=d5*9,v=0;v<10;++v){d=t+v*0.63
a0=22+A.o.G(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.cTT[A.o.G(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aA(d0.$5(-14,-4,28,24,5),d1.$3(D.et8,A.cl,A.ak))
d3.aA(d0.$5(-12,-26,24,20,5),d1.$3(D.et1,A.aK,A.bI))
d3.bz(D.dQu,D.dQw,c9.$2(A.bv,1.6))
d3.ae(D.dQx,2.2,c8.$1(c7?A.aE:A.bv))
a1=c7&&A.k.G(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=D.cZ5[m]
if(c7)t=a1?A.b8:A.hS
else t=A.cB
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.bA(d2.save())
d2.translate(14,0)
d3.iV(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bz(A.J,D.a2F,c9.$2(A.bI,4))
d2.restore()
d3.bz(D.dST,D.dTc,c9.$2(A.bI,4))
d3.aW(D.etR,c8.$1(c7?A.b8.j(0.7):A.aJ))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.atT[m]+1,d2,10,14,2)
p=C.ar(A.bJ,A.dn,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(C.et(s),r)
r.delete()}d3.aA(d0.$5(-24,-6,48,26,8),d1.$3(D.eto,A.bX,A.bn))
for(m=0;m<2;++m){l=D.atT[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fz:A.az).H()
t.drawRRect(C.et(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cL.j(0.5))
s.z=G.mi
r=s.H()
t.drawRRect(C.et(d2),r)
r.delete()}}d3.bz(D.dR3,D.dRk,c9.$2(A.az,3))
return!0
case"ledstrip":d3.aA(d0.$5(-34,-4,68,10,4),c8.$1(A.cB))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.G(t+v*40,360)
i=c7?new H.mz(1,a3,0.8,1).iv():A.es
if(c7){s=c8.$1(i.j(0.45))
s.z=G.mi
r=s.H()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).H()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aA(d0.$5(-40,-2,6,6,1),c8.$1(A.dX))
return!0
case"pump":d3.aA(d0.$5(-16,-2,32,22,6),d1.$3(D.etd,A.ct,A.JE))
d3.ae(D.dTj,8,c8.$1(A.qg))
d2=d3.a
J.bA(d2.save())
d2.translate(-2,9)
d3.iV(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.fk,2.4).H()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new C.aP($.V().r,A.ap,c6,c6,C.a([],x.v))
t.E(new C.b5(16,6))
t.E(new C.ao(26,6))
t.E(new C.ao(26,-20))
t.E(new C.ao(10,-20))
d3.aM(t,c9.$2(A.bI,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.G(t+v*0.2,1)
r=c8.$1(A.fZ).H()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.ae(D.dRS,3.2,c8.$1(A.fZ.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.bA(d2.save())
d3.iV(0,-0.15)
d3.aA(d0.$5(-26,-14,40,22,10),d1.$3(D.etq,A.ji,A.rw))
d3.aA(d0.$5(14,-10,12,14,3),c8.$1(A.cB))
d3.aA(d0.$5(-10,6,12,22,4),c8.$1(A.es))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.G(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).H()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cL.j(0.4))
d2.z=G.mi
d3.ae(D.dQZ,8,d2)}return!0
case"headphones":d3.fa(C.cr(A.dz,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bv,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=D.atU[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new C.a9(s,0,s+14,20),A.bz,A.p_).H()
d2.drawRRect(C.et(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=C.bT(new C.u(l,10),10+v*5+A.k.G(t,5))
o=s?2.2:-0.9
r=c9.$2(A.ex.j(0.9-v*0.3),1.6).H()
d2.drawArc.apply(d2,[C.c4(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new C.u(-4,-8-A.k.G(d5*14,8)),A.k0,12)
return!0
case"smartwatch":d3.aA(d0.$5(-8,-30,16,14,3),c8.$1(A.cB))
d3.aA(d0.$5(-8,14,16,14,3),c8.$1(A.cB))
d3.aA(d0.$5(-14,-17,28,32,8),d1.$3(D.et6,A.dX,A.es))
d3.aA(d0.$5(-11,-14,22,26,6),c8.$1(A.dI))
if(c7){a4=new C.Q(Date.now(),0,!1)
d6.$5(d3,A.a.aU(A.o.u(C.dk(a4)),2,"0")+":"+A.a.aU(A.o.u(C.h_(a4)),2,"0"),D.dQB,A.bf,9.5)
g=(Math.sin(d5*9)+1)/2
d2=C.ar(A.Dc,A.fU,g)
d2.toString
d6.$5(d3,"\u2665",new C.u(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.G(A.k.bv(d5*2),6)),A.dz,A.c,7)}return!0
case"tablet":d3.aA(d0.$5(-30,-22,60,44,6),c8.$1(I.o4))
d3.aA(d0.$5(-30,-22,60,44,6),c9.$2(A.bI,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.et(a5),$.p6(),!0)
d2.translate(-27,-19)
B.K1(d3,D.ez_,d5,c6)
d2.restore()}else d3.aA(a5,c8.$1(D.up))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aA(a6,d1.$3(new C.a9(a6.a,a6.b,a6.c,a6.d),A.dW,A.dm))
d3.aA(a6,c9.$2(A.b9,1.2))
d3.ae(D.aD6,9,c8.$1(A.az))
d3.ae(D.aD6,6,c9.$2(A.dn,2))
d3.aA(d0.$5(4,-2,14,10,2),c8.$1(A.az))
d3.aA(d0.$5(-22,-19,44,12,2),c8.$1(A.dI))
d2=A.k.a9(d4.db,1)
t=A.k.a9(c7?d4.dx:d4.e,1)
s=c7?A.bf:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.dRW,s,8.2)
d3.ae(D.dQQ,2.4,c8.$1(c7?A.bl:A.aJ))
d6.$5(d3,"IN",D.dTd,A.af,6)
d6.$5(d3,"OUT",D.dRK,A.af,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=C.ar(A.bI,A.aE,a7)
t.toString
d3.aA(d2,c8.$1(t))
d3.ae(D.dQr,3,c8.$1(A.aJ))
d3.aA(d0.$5(-12,-4,24,18,3),d1.$3(D.et2,A.es,A.hx))
d6.$5(d3,"7805",D.a2J,A.af,8)
for(d2=d3.a,m=0;m<3;++m){t=D.cZ6[m]-1
r=c8.$1(A.e2).H()
d2.drawRect(C.c4(new C.a9(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.G(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.dTF,A.bh,9)
return!0
case"diode":d3.bz(D.aDa,D.aCV,c9.$2(A.e2,2.4))
d3.aA(d0.$5(-14,-7,28,14,6),c8.$1(A.aR.j(0.85)))
d3.aW(D.esS,c8.$1(A.bh))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dL.j(0.4))
t.z=A.ja
d3.aA(d2,t)}d2=new C.aP($.V().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-8,-4))
d2.E(new C.ao(-8,4))
d2.E(new C.ao(-1,0))
d2.E(new C.bE())
d3.aM(d2,c8.$1(A.aV))
d6.$5(d3,"one way",D.dT1,A.aA,8)
return!0
case"ldr":d3.bz(D.aDa,D.a2J,c9.$2(A.e2,2.4))
d3.bz(D.aD_,D.aCV,c9.$2(A.e2,2.4))
d3.ae(A.J,12,c8.$1(A.dn))
d3.ae(A.J,12,c9.$2(A.rF,1.6))
d2=$.V()
t=C.a([],x.v)
a8=new C.aP(d2.r,A.ap,c6,c6,t)
a8.E(new C.b5(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new C.ao(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.bw(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aM(a8,c9.$2(A.bJ,1.4))
d2=C.ar(A.bv,A.dL,d4.f)
d2.toString
d6.$5(d3,"\u2600",new C.u(-6,-26),d2,14)
d6.$5(d3,""+A.k.U(20+980*(1-d4.f))+"\u03a9",D.dSU,A.af,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.ed
break A}if("sonytv"===d2){t=A.q9
break A}if("appletv"===d2){t=A.e2
break A}t=D.a9H
break A}a9=d2==="lgtv"||d2==="appletv"
d3.aA(d0.$5(-36,-24,72,a9?42:44,6),c8.$1(t))
t=a9?-35:-33
s=a9?-23:-21
p=a9?70:66
a5=d0.$5(t,s,p,a9?40:38,3)
t=a5.a
s=a5.b
if(c7){p=d3.a
J.bA(p.save())
p.clipRRect(C.et(a5),$.p6(),!0)
p.translate(t,s)
B.fO_(d3,new C.as(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ae(D.dRl,1.6,c8.$1(A.bf))}else{d3.aA(a5,c8.$1(D.up))
p=new C.aP($.V().r,A.ap,c6,c6,C.a([],x.v))
p.E(new C.b5(t,s))
p.E(new C.ao(t+24,s))
p.E(new C.ao(t,s+22))
p.E(new C.bE())
d3.aM(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aA(d0.$5(-22,19,44,3,1.5),c8.$1(A.dX))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=D.vb[m]
s=$.V()
p=C.a([],t)
s=new C.aP(s.r,A.ap,c6,c6,p)
p.push(new C.b5(l*30,20))
p.push(new C.ao(l*22,20))
p.push(new C.ao(l*26,26))
p.push(new C.bE())
r=c8.$1(A.dX).H()
p=s.gbH().a.snapshot()
d2.drawPath((s.e=new C.cE(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.dSx,A.bX,5.5)
break
case"appletv":d2=new C.aP($.V().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-8,18))
d2.E(new C.ao(8,18))
d2.E(new C.ao(12,25))
d2.E(new C.ao(-12,25))
d2.E(new C.bE())
d3.aM(d2,c8.$1(D.UJ))
d6.$5(d3,"Apple TV",D.dRX,A.bv,4.8)
break
default:d3.aA(d0.$5(-34,19,68,7,3),c8.$1(D.b8R))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dl,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.dTB,D.Jy,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.lE.h(0,d2)
b1=b0.b===D.vt
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
b7=C.ar(b6,A.c,0.35)
b7.toString
d3.aA(w,d1.$3(new C.a9(p,o,b4,b5),b7,b6))
a5=d0.$5(t+2,s,b2-4,b3-4,3.5)
if(c7){t=d3.a
J.bA(t.save())
t.clipRRect(C.et(a5),$.p6(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
B.K1(d3,new C.as(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aA(a5,c8.$1(D.up))
if(b1){t=a5.b
s=a5.d
d3.bz(new C.u(0,t),new C.u(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aA(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.ae(new C.u(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aA(d0.$5(-17,-28,34,52,4),c8.$1(A.es))
d3.aA(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bX))
if(c7){d6.$5(d3,"NGMY",D.dTI,A.az,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.G(v,4)===3?14:22
r=c8.$1(A.bn).H()
d2.drawRect(C.c4(new C.a9(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ae(A.aCG,1.6,c8.$1(A.az))}return!0
case"laptop":d3.aA(d0.$5(-30,-28,60,42,4),d1.$3(D.etz,A.cl,A.bn))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.et(b8),$.p6(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
B.K1(d3,new C.as(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aA(b8,c8.$1(D.up))
d2=new C.aP($.V().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-38,16))
d2.E(new C.ao(38,16))
d2.E(new C.ao(34,21))
d2.E(new C.ao(-34,21))
d2.E(new C.bE())
d3.aM(d2,c8.$1(D.UJ))
d3.aA(d0.$5(-7,16,14,2,1),c8.$1(A.bn))
return!0
case"imac":d3.aA(d0.$5(-32,-28,64,46,5),d1.$3(D.etD,A.bN,A.cl))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.et(b9),$.p6(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
B.K1(d3,new C.as(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aA(b9,c8.$1(D.up))
d3.ae(D.aCB,2,c8.$1(A.bI))
d2=new C.aP($.V().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-6,18))
d2.E(new C.ao(6,18))
d2.E(new C.ao(10,26))
d2.E(new C.ao(-10,26))
d2.E(new C.bE())
d3.aM(d2,c8.$1(D.UJ))
return!0
case"monitor":d3.aA(d0.$5(-34,-28,68,40,3),c8.$1(A.ed))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.et(c0),$.p6(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
B.K1(d3,new C.as(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aA(c0,c8.$1(D.up))
d3.aW(D.etJ,c8.$1(A.bn))
d3.aA(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dX))
return!0
case"projector":if(c7){d2=new C.aP($.V().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(14,4))
d2.E(new C.ao(-32,-42))
d2.E(new C.ao(34,-42))
d2.E(new C.bE())
d3.aM(d2,c8.$1(A.dL.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.et(c1),$.p6(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
B.K1(d3,new C.as(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aA(d0.$5(-26,-4,52,24,6),d1.$3(D.etr,A.iH,A.dX))
d3.ae(D.aCL,7,c8.$1(A.az))
d3.ae(D.aCL,4,c8.$1(c7?A.dL:A.cB))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dl,1).H()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aA(d0.$5(-34,-10,68,32,12),c8.$1(A.az))
c2=d0.$5(-30,-20,60,28,8)
d3.aA(c2,c8.$1(I.o4))
d3.aA(c2,c9.$2(A.bv,1.2))
if(c7){c3=new C.aP($.V().r,A.ap,c6,c6,C.a([],x.v))
c3.E(new C.b5(-26,4))
c3.E(new C.cR(-10,-14+Math.sin(d5)*3,6,-6))
c3.E(new C.ao(22,-16))
d3.aM(c3,c9.$2(A.aY,2.2))
d2=A.k.G(d5*6,48)
d3.ae(new C.u(-26+d2,4-d2*0.1),2.4,c8.$1(A.bf))
d6.$5(d3,""+(88+A.o.G(A.k.bv(d5*2),5)),D.dRT,A.c,10)
d6.$5(d3,"km/h",D.dRQ,A.aA,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aA(c4,d1.$3(new C.a9(c4.a,c4.b,c4.c,c4.d),A.dX,A.es))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.et(c5),$.p6(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
B.K1(d3,new C.as(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.bz.j(0.2))
d2.z=A.lc
d3.ae(A.J,26,d2)}else d3.aA(c5,c8.$1(A.M))
d3.bz(D.dTn,D.dTs,c9.$2(A.bn,4))
d3.bz(D.dRm,D.dRu,c9.$2(A.bn,4))
return!0}return!1},
ftJ:function ftJ(){},
ftL:function ftL(){},
ftM:function ftM(){},
ftK:function ftK(){},
fQC(d,e,f,g){return new B.agL(d,g,f,e)},
Ez(d,e,f){return new B.b8c(d,e,f)},
agL:function agL(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
agM:function agM(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.kE$=i
_.fH$=j
_.fd$=k
_.bp$=l
_.a6$=m
_.c=_.a=null},
bE5:function bE5(d,e){this.a=d
this.b=e},
bE6:function bE6(d){this.a=d},
bE4:function bE4(d){this.a=d},
bE7:function bE7(){},
bE8:function bE8(d){this.a=d},
bE9:function bE9(d,e,f){this.a=d
this.b=e
this.c=f},
bE3:function bE3(d,e){this.a=d
this.b=e},
bE1:function bE1(d,e){this.a=d
this.b=e},
bE2:function bE2(d,e,f){this.a=d
this.b=e
this.c=f},
bDW:function bDW(d,e){this.a=d
this.b=e},
bDX:function bDX(){},
bDY:function bDY(d,e){this.a=d
this.b=e},
bDZ:function bDZ(d,e){this.a=d
this.b=e},
bE_:function bE_(d){this.a=d},
bE0:function bE0(d){this.a=d},
bEo:function bEo(d){this.a=d},
bEp:function bEp(){},
bDz:function bDz(){},
bEq:function bEq(d,e){this.a=d
this.b=e},
bEn:function bEn(d,e,f){this.a=d
this.b=e
this.c=f},
bEi:function bEi(d){this.a=d},
bEf:function bEf(d,e,f){this.a=d
this.b=e
this.c=f},
bEg:function bEg(d,e){this.a=d
this.b=e},
bEj:function bEj(d){this.a=d},
bEd:function bEd(d,e){this.a=d
this.b=e},
bEe:function bEe(d,e){this.a=d
this.b=e},
bEh:function bEh(d){this.a=d},
bEk:function bEk(d){this.a=d},
bEb:function bEb(d,e){this.a=d
this.b=e},
bEc:function bEc(d,e){this.a=d
this.b=e},
bEl:function bEl(d){this.a=d},
bEa:function bEa(d){this.a=d},
bEm:function bEm(d){this.a=d},
bDA:function bDA(d,e){this.a=d
this.b=e},
bDT:function bDT(d,e){this.a=d
this.b=e},
bDV:function bDV(d,e){this.a=d
this.b=e},
bDU:function bDU(d,e){this.a=d
this.b=e},
bDG:function bDG(d,e){this.a=d
this.b=e},
bDH:function bDH(d){this.a=d},
bDF:function bDF(d){this.a=d},
bDI:function bDI(d,e,f){this.a=d
this.b=e
this.c=f},
bDE:function bDE(d,e){this.a=d
this.b=e},
bDL:function bDL(d,e){this.a=d
this.b=e},
bDM:function bDM(d,e){this.a=d
this.b=e},
bDN:function bDN(d,e){this.a=d
this.b=e},
bDO:function bDO(d,e,f){this.a=d
this.b=e
this.c=f},
bDD:function bDD(d,e){this.a=d
this.b=e},
bDP:function bDP(d,e,f){this.a=d
this.b=e
this.c=f},
bDC:function bDC(d,e){this.a=d
this.b=e},
bDQ:function bDQ(d,e,f){this.a=d
this.b=e
this.c=f},
bDB:function bDB(d,e){this.a=d
this.b=e},
bDR:function bDR(d){this.a=d},
bDS:function bDS(d){this.a=d},
bDJ:function bDJ(d){this.a=d},
bDK:function bDK(d){this.a=d},
b8c:function b8c(d,e,f){this.a=d
this.b=e
this.c=f},
f4c:function f4c(){},
f4d:function f4d(){},
f4e:function f4e(){},
f4_:function f4_(){},
f4f:function f4f(){},
f3Z:function f3Z(){},
f4g:function f4g(){},
f43:function f43(){},
f3Y:function f3Y(){},
f44:function f44(){},
f3X:function f3X(){},
f45:function f45(){},
f3W:function f3W(){},
f46:function f46(){},
f3U:function f3U(){},
f3V:function f3V(){},
f47:function f47(){},
f3S:function f3S(){},
f3T:function f3T(){},
f48:function f48(){},
f3R:function f3R(){},
Tx:function Tx(d){this.a=d},
aB3:function aB3(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dMw:function dMw(d,e){this.a=d
this.b=e},
dMF:function dMF(d){this.a=d},
dMG:function dMG(){},
dMH:function dMH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dMI:function dMI(){},
dMv:function dMv(d){this.a=d},
dMu:function dMu(d,e,f){this.a=d
this.b=e
this.c=f},
dMt:function dMt(d,e){this.a=d
this.b=e},
dMr:function dMr(d){this.a=d},
dMs:function dMs(){},
dME:function dME(d){this.a=d},
dMD:function dMD(d){this.a=d},
dMB:function dMB(d,e){this.a=d
this.b=e},
dMz:function dMz(d){this.a=d},
dMA:function dMA(){},
dMC:function dMC(d,e,f){this.a=d
this.b=e
this.c=f},
dMx:function dMx(d,e){this.a=d
this.b=e},
dMy:function dMy(){},
dMK:function dMK(d){this.a=d},
dML:function dML(d){this.a=d},
dMJ:function dMJ(){},
dMM:function dMM(d,e){this.a=d
this.b=e},
dMN:function dMN(d){this.a=d},
dMO:function dMO(d){this.a=d},
av9:function av9(d,e){this.c=d
this.a=e},
b6o:function b6o(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
cx7:function cx7(d){this.a=d},
b6n:function b6n(d,e){this.b=d
this.a=e},
cx6:function cx6(d){this.a=d},
avs:function avs(){},
avt:function avt(){},
aHo:function aHo(){},
bua:function bua(){},
hU7(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bT(A.vk,23)
$.V()
b8=C.L()
b8.r=A.az.gp(0)
b9.ae(A.vk,25,b8)
b8=C.L()
b8.sar(D.e0h.av(0,v))
b9.ae(A.vk,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.r=A.bh.gp(0)
o.c=A.o.G(u,5)===0?1.8:1
n=o.H()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.k.D(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=C.L()
r.r=A.bM.gp(0)
r.c=2
r.d=A.bO
b9.bz(A.vk,new C.u(b8*18,s*18-2),r)
r=C.L()
r.r=A.bh.gp(0)
b9.ae(A.vk,3,r)
c2.$5(b9,w?"V":"A",D.dTv,A.bh,12)
c2.$5(b9,w?A.k.a9(m,1)+" V":""+A.k.U(m*1000)+" mA",D.dSZ,A.az,9.5)
return!0
case"fan":b8=C.by(D.esZ,A.i0)
$.V()
s=C.L()
s.r=A.bv.gp(0)
b9.aA(b8,s)
s=C.L()
s.r=A.ak.gp(0)
b9.aW(D.etK,s)
s=C.L()
s.r=A.M.j(0.6).gp(0)
b9.ae(D.vl,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bA(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.cr(A.aCF,18,10)
r=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
r.r=A.fZ.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(C.c4(s),n)
n.delete()
b8.restore()}b8=C.L()
b8.r=A.bj.gp(0)
b9.ae(D.vl,4,b8)
b8=C.L()
b8.b=A.ae
b8.c=2
b8.r=A.cl.gp(0)
b9.ae(D.vl,22,b8)
b8=C.L()
b8.b=A.ae
b8.c=0.8
b8.r=A.j2.gp(0)
b9.ae(D.vl,14,b8)
return!0
case"speaker":l=C.by(D.aIo,A.tO)
$.V()
b8=C.L()
b8.sar(D.akW.av(0,new C.a9(l.a,l.b,l.c,l.d)))
b9.aA(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.L()
b8.sar(D.e0D.av(0,C.bT(A.cv,15)))
b9.ae(A.cv,14+k,b8)
b8=C.L()
b8.r=A.dX.gp(0)
b9.ae(A.cv,5,b8)
b8=C.L()
b8.r=A.bn.gp(0)
b9.ae(D.aCH,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bT(D.dR2,6+u*6+A.k.G(b8,6))
q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.b=A.ae
q.c=1.8
q.r=A.bY.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[C.c4(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.by(D.etC,A.tO)
$.V()
b8=C.L()
b8.sar(D.bLg.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aA(j,b8)
b8=C.by(D.aIq,A.hL)
s=C.L()
s.r=A.hx.gp(0)
b9.aA(b8,s)
if(b7){i=new C.Q(Date.now(),0,!1)
h=C.B2(i)<500?":":" "
g=A.a.aU(A.o.u(C.dk(i)),2,"0")
f=A.a.aU(A.o.u(C.h_(i)),2,"0")
b8=C.L()
b8.r=A.bf.j(0.12).gp(0)
b9.aW(D.aIq,b8)
c2.$5(b9,g+h+f,D.dTg,A.bf,21)}b8=C.L()
b8.r=A.cl.gp(0)
b9.ae(D.dTf,2.4,b8)
b8=C.L()
b8.r=A.cl.gp(0)
b9.ae(D.dR6,2.4,b8)
return!0
case"calculator":j=C.by(D.eti,A.h8)
$.V()
b8=C.L()
b8.sar(D.bL0.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aA(j,b8)
b8=C.by(D.etc,A.h7)
s=C.L()
s.r=(b7?A.UT:D.baG).gp(0)
b9.aA(b8,s)
if(b7)c2.$5(b9,"3.14159",D.dSY,A.TV,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.by(new C.a9(q,s,q+6,r),A.QI)
$.V()
p=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
p.r=(d===3?A.cd:A.bX).gp(0)
n=p.H()
b8.drawRRect(C.et(q),n)
n.delete()}return!0
case"phone":j=C.by(D.et9,A.h8)
$.V()
b8=C.L()
b8.r=I.o4.gp(0)
b9.aA(j,b8)
b8=C.L()
b8.b=A.ae
b8.c=1.9
b8.r=D.acI.gp(0)
b9.aA(j,b8)
a0=C.by(D.et0,A.i0)
if(b7){b8=C.L()
b8.sar(D.bMx.av(0,new C.a9(a0.a,a0.b,a0.c,a0.d)))
b9.aA(a0,b8)
b8=b9.a
J.bA(b8.save())
b8.clipRRect(C.et(a0),$.p6(),!0)
b8.translate(-12,-25)
B.K1(b9,D.eyB,c1,b6)
b8.restore()
a1=A.k.G(c1*0.12,1)
b8=C.by(D.esY,A.h7)
s=C.L()
s.r=A.aV.gp(0)
b9.aA(b8,s)
s=C.L()
s.r=A.bf.gp(0)
b9.aW(new C.a9(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.U(a1*100)+"%",D.dSf,A.c,6)}else{b8=C.L()
b8.r=D.up.gp(0)
b9.aA(a0,b8)}b8=C.by(D.etU,D.e0L)
s=C.L()
s.r=A.w.gp(0)
b9.aA(b8,s)
return!0
case"router":j=C.by(D.etB,A.qU)
$.V()
b8=C.L()
b8.sar(D.bLw.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aA(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=D.atU[a2]
s=a3<0?-4:4
r=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
r.r=A.cB.gp(0)
r.c=4
r.d=A.bO
n=r.H()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.G(A.k.bv(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
s.r=(a4?A.bl:A.aJ).gp(0)
n=s.H()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bT(D.vl,8+u*6+A.k.G(s,6))
q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.b=A.ae
q.c=1.8
q.r=A.hq.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[C.c4(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.by(D.eth,A.i0)
s=$.V()
r=C.L()
r.r=A.es.gp(0)
b9.aA(b8,r)
if(b7){b8=C.L()
b8.r=A.aE.j(0.5*a5).gp(0)
b8.z=A.y7
b9.ae(A.vk,34,b8)}a6=new C.aP(s.r,A.ap,b6,b6,C.a([],x.v))
a6.E(new C.b5(-16,12))
a6.E(new C.ao(-16,-2))
a6.E(new C.cR(0,-30,16,-2))
a6.E(new C.ao(16,12))
a6.E(new C.bE())
b8=C.L()
b8.r=C.ar(A.eK,D.b3I,a5).gp(0)
b9.aM(a6,b8)
b8=C.L()
b8.b=A.ae
b8.c=1.4
b8.r=A.bZ.gp(0)
b9.aM(a6,b8)
if(b7){b8=b9.a
J.bA(b8.save())
b8.translate(0,-2)
b9.iV(0,c1*7)
s=C.L()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bz(A.J,D.aCH,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.bA(b8.save())
b8.translate(0,a7)
s=$.V().r
r=x.v
j=new C.aP(s,A.ap,b6,b6,C.a([],r))
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
q.sar(D.bJG.av(0,D.etu))
b9.aM(j,q)
q=new C.aP(s,A.ap,b6,b6,C.a([],r))
q.E(new C.b5(-8,-4))
q.E(new C.ao(-4,-13))
q.E(new C.ao(4,-13))
q.E(new C.ao(4,-4))
q.E(new C.bE())
p=C.L()
p.r=A.fk.gp(0)
b9.aM(q,p)
r=new C.aP(s,A.ap,b6,b6,C.a([],r))
r.E(new C.b5(8,-4))
r.E(new C.ao(8,-13))
r.E(new C.ao(11,-13))
r.E(new C.ao(15,-4))
r.E(new C.bE())
s=C.L()
s.r=A.fk.gp(0)
b9.aM(r,s)
for(a2=0;a2<2;++a2){a3=D.cZ1[a2]
s=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
s.r=A.az.gp(0)
n=s.H()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.bA(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.r=A.bX.gp(0)
q.c=1.6
n=q.H()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.G(s+u*8,14)
q=-4+u*5
p=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
p.r=A.aA.gp(0)
p.c=1.6
n=p.H()
b8.drawLine.apply(b8,[-34-r,q,-42-r,q,n])
n.delete()}return!0
case"kettle":b8=$.V().r
s=x.v
j=new C.aP(b8,A.ap,b6,b6,C.a([],s))
j.E(new C.b5(-18,20))
j.E(new C.ao(-14,-12))
j.E(new C.cR(0,-20,14,-12))
j.E(new C.ao(18,20))
j.E(new C.bE())
r=C.L()
r.sar(D.bKI.av(0,D.etg))
b9.aM(j,r)
r=new C.aP(b8,A.ap,b6,b6,C.a([],s))
r.E(new C.b5(14,-10))
r.E(new C.ao(30,-22))
r.E(new C.ao(32,-18))
r.E(new C.ao(16,-4))
r.E(new C.bE())
q=C.L()
q.r=A.e2.gp(0)
b9.aM(r,q)
s=new C.aP(b8,A.ap,b6,b6,C.a([],s))
s.E(new C.b5(-14,-8))
s.E(new C.cR(-34,-6,-18,12))
b8=C.L()
b8.b=A.ae
b8.c=5
b8.r=A.az.gp(0)
b9.aM(s,b8)
b8=C.L()
if(b7){s=C.ar(A.cL,A.uo,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.es
b8.r=s.gp(0)
b9.aW(D.etf,b8)
if(b7){b8=C.L()
b8.r=A.cL.j(0.3).gp(0)
b8.z=A.lc
b9.ae(A.aCD,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.G(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.L()
b8.r=A.az.gp(0)
b9.ae(D.dQo,3,b8)
return!0
case"lamp":if(b7){u=A.k.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new C.aP($.V().r,A.ap,b6,b6,C.a([],x.v))
b8.E(new C.b5(-10,-14))
b8.E(new C.ao(-30,24))
b8.E(new C.ao(10,24))
b8.E(new C.ao(8,-14))
b8.E(new C.bE())
s=C.L()
s.r=A.dL.j(0.28*u).gp(0)
b9.aM(b8,s)
s=C.L()
s.r=A.dL.j(0.5*u).gp(0)
s.z=R.Gr
b9.ae(D.dTk,24,s)}b8=C.by(D.etQ,A.i0)
s=$.V()
r=C.L()
r.r=A.es.gp(0)
b9.aA(b8,r)
r=C.L()
r.r=A.dX.gp(0)
r.c=3
r.d=A.bO
b9.bz(D.dQC,D.aCN,r)
r=C.L()
r.r=A.dX.gp(0)
r.c=3
r.d=A.bO
b9.bz(D.aCN,D.dTl,r)
a9=new C.aP(s.r,A.ap,b6,b6,C.a([],x.v))
a9.E(new C.b5(-14,-16))
a9.E(new C.ao(6,-26))
a9.E(new C.ao(10,-12))
a9.E(new C.ao(-10,-6))
a9.E(new C.bE())
s=C.L()
s.r=(b7?A.aL:A.k5).gp(0)
b9.aM(a9,s)
b8=C.L()
b8.r=(b7?A.c:A.bn).gp(0)
b9.ae(D.dTm,4,b8)
return!0
case"lights":b8=$.V().r
s=x.v
b0=new C.aP(b8,A.ap,b6,b6,C.a([],s))
b0.E(new C.b5(-34,-6))
b0.E(new C.cR(0,22,34,-6))
r=C.L()
r.b=A.ae
r.c=2
r.r=A.fX.gp(0)
b9.aM(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.G(q+u*0.7,1.8)<1.1
if(b2){b3=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
b3.r=D.a_G[u].j(0.6).gp(0)
b3.z=A.Pr
n=b3.H()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=C.a([],s)
b4=new C.aP(b8,A.ap,b6,b6,b3)
b3.push(new C.b5(p-3,o))
b3.push(new C.ao(p+3,o))
b5=o+11
b3.push(new C.ao(p+5,b5))
b3.push(new C.cR(p,o+17,p-5,b5))
b3.push(new C.bE())
p=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
if(b2)o=D.a_G[u]
else{o=C.ar(D.a_G[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.H()
p=b4.gbH().a.snapshot()
r.drawPath((b4.e=new C.cE(p)).a,n)
n.delete()}return!0}return B.hU6(b9,c0,c1,c2)},
fH:function fH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aLD(d,e,f,g,h,i,j,k){var w=new B.f53(e,h,i,k),v=w.$1(g),u=v.b.c
if(u>j&&u>0)v=w.$1(Math.max(2,g*j/u))
w=v.b
u=w.c
w=w.a.c
v.a5(d,f.aB(0,new C.u(u/2,w.gbb(w)/2)))},
K1(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l=A.o.G(a1==null?A.k.bv(a0/6):a1,12),k=A.k.G(a0,6),j=D.d_6[l],i=e.a,h=e.b,g=0+i,f=0+h
$.V()
w=C.L()
w.sar(new C.a5(A.ax,A.aC,A.x,C.a([j.c,j.d],x.O),null,null).av(0,new C.a9(0,0,g,f)))
d.aW(new C.a9(0,0,g,f),w)
v=h*(i>=h?0.7:0.6)
f=d.a
J.bA(f.save())
f.clipRect(C.c4(new C.a9(0,0,g,0+v)),$.rt()[1],!0)
B.hKb(d,new C.as(i,v),l,k)
f.restore()
u=h-v
w=A.w.j(0.3)
t=C.L()
t.r=w.gp(0)
d.aW(new C.a9(0,v,g,v+u),t)
s=A.cp.au(0,A.k.D((k-0.2)/0.5,0,1))
J.bA(f.save())
f.translate((1-s)*i*0.25,0)
t=i/2
g=i*0.94
B.aLD(d,j.a,new C.u(t,v+u*0.3),u*0.36,A.c.j(s),!0,g,0)
B.aLD(d,j.b,new C.u(t,v+u*0.64),u*0.2,A.c.j(0.92*s),!1,g,0)
f.restore()
for(g=h*0.965,w=h*0.009,r=h*0.004,q=0;q<12;++q){p=q===l
o=p?r:0
n=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
n.r=A.c.j(p?0.95:0.35).gp(0)
m=n.H()
f.drawCircle(t+(q-5.5)*h*0.035,g,w+o,m)
m.delete()}g=i-h*0.07
f=h*0.06
B.aLD(d,"AD",new C.u(g,f),h*0.045,A.c.j(0.85),!0,9999,1)
w=h*0.02
w=C.by(C.cr(new C.u(g,f),h*0.065,h*0.1),new C.aZ(w,w))
f=C.L()
f.b=A.ae
f.c=1
f.r=A.af.gp(0)
f.d=A.bO
d.aA(w,f)},
h9k(d,e,f,g){var w,v=d.a
J.bA(v.save())
v.clipRect(C.c4(new C.a9(0,0,0+e.a,0+e.b)),$.rt()[1],!0)
w=D.nG[A.o.G(f,9)].e
if(w===-2)B.hzQ(d,e,g)
else if(w===-1)B.K1(d,e,g,null)
else B.K1(d,e,g,w)
v.restore()},
hzQ(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a1.a,g=a1.b,f=new C.Q(Date.now(),0,!1),e=0+h,d=0+g
$.V()
w=C.L()
w.sar(D.bJH.av(0,new C.a9(0,0,e,d)))
a0.aW(new C.a9(0,0,e,d),w)
w=C.L()
w.r=A.bM.gp(0)
a0.aW(new C.a9(0,0,e,0+g*0.15),w)
B.aLD(a0,A.os[C.bF(f)-1]+" "+C.bx(f),new C.u(h/2,g*0.075),g*0.08,A.c,!0,h*0.9,0)
v=h/7
for(e=g*0.21,d=g*0.05,u=0;u<7;++u)B.aLD(a0,D.d3g[u],new C.u(v*(u+0.5),e),d,A.aA,!0,9999,0)
t=C.bX(C.bx(f),C.bF(f),1,0,0,0,0,0)
s=C.bP(C.bX(C.bx(f),C.bF(f)+1,0,0,0,0,0,0))
r=C.mg(t)-1
q=g*0.74/A.k.dE((r+s)/7)
for(e=g*0.26,d=a2*3,w=a0.a,p=1;p<=s;++p){o=r+p-1
n=v*(A.o.G(o,7)+0.5)
m=e+q*(A.o.am(o,7)+0.5)
if(p===C.bP(f)){l=Math.min(v,q)
k=A.aY.j(0.5+0.2*Math.sin(d))
$.V()
j=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.r=k.gp(0)
i=j.H()
w.drawCircle(n,m,l*0.42,i)
i.delete()}l=Math.min(v,q)
k=p===C.bP(f)?A.c:A.af
B.aLD(a0,""+p,new C.u(n,m),l*0.42,k,!0,9999,0)}},
fM7(d){var w=D.lE.h(0,d)
return(w==null?null:w.b)===D.yw},
hVb(d,e,f){return C.a6(d,!1).ck(C.ue(null,!1,!0,!0,new B.fya(e,f),A.eM,null,A.pb,new B.fyb(),x.H))},
f53:function f53(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uA:function uA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wP:function wP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
I9:function I9(d,e){this.a=d
this.b=e},
lS:function lS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fya:function fya(d,e){this.a=d
this.b=e},
fyb:function fyb(){},
Te:function Te(d,e,f){this.c=d
this.d=e
this.a=f},
bgH:function bgH(d,e){var _=this
_.d=$
_.e=null
_.bp$=d
_.a6$=e
_.c=_.a=null},
dIs:function dIs(d){this.a=d},
dIr:function dIr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dIp:function dIp(){},
dIq:function dIq(d){this.a=d},
dIo:function dIo(d){this.a=d},
dIn:function dIn(d,e){this.a=d
this.b=e},
dIm:function dIm(d,e){this.a=d
this.b=e},
dIl:function dIl(d){this.a=d},
dIk:function dIk(d){this.a=d},
dIg:function dIg(d){this.a=d},
dIf:function dIf(d){this.a=d},
dIj:function dIj(d,e,f){this.a=d
this.b=e
this.c=f},
dIi:function dIi(d){this.a=d},
dIh:function dIh(d){this.a=d},
bsf:function bsf(d,e,f){this.b=d
this.c=e
this.a=f},
acP:function acP(d,e,f){this.b=d
this.c=e
this.a=f},
aJa:function aJa(){},
fO_(d,e,f,g,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.a
J.bA(h.save())
w=e.a
v=e.b
u=0+w
t=0+v
h.clipRect(C.c4(new C.a9(0,0,u,t)),$.rt()[1],!0)
if(a0<3){$.V()
s=C.L()
s.r=D.b16.gp(0)
d.aW(new C.a9(0,0,u,t),s)
if(a0<0.5)t=a0/0.5
else t=a0>2.4?(3-a0)/0.6:1
r=A.k.D(t,0,1)
t=e.ea(A.J)
s=e.ge9()
q=C.L()
q.sar(new C.bS(A.A,0.5,A.x,i,0,C.a([A.aY.j(0.35*r),A.K],x.O),i,i).av(0,C.bT(e.ea(A.J),e.ge9()*0.5)))
d.ae(t,s*0.5,q)
B.Fh(d,"NGMY",new C.u(0,v*0.36),v*0.2,A.c.j(r),A.L,v*0.03,w)
B.Fh(d,"T V",new C.u(0,v*0.6),v*0.08,A.aY.j(r),A.L,v*0.05,w)
q=w*0.3
s=v*0.78
t=C.L()
t.r=A.aY.j(r).gp(0)
d.aW(new C.a9(q,s,q+w*0.4*(a0/3),s+3),t)}else if(a1>=0)B.h9k(d,e,a1,g)
else{p=A.k.D((a0-3)/0.5,0,1)
o=A.o.G(f,10)
switch(o){case 0:B.hIR(d,e,g)
break
case 1:B.hAx(d,e,g)
break
case 2:B.hIa(d,e,g)
break
case 3:B.hF7(d,e,g)
break
case 4:B.hGj(d,e,g)
break
case 5:B.hIb(d,e,g)
break
case 6:B.hBM(d,e,g)
break
case 7:B.hIQ(d,e,g)
break
case 8:B.hH4(d,e,g)
break
default:B.hBX(d,e,g)}s=w-v*0.34
q=v*0.04
n=v*0.03
m=C.by(new C.a9(s,q,s+v*0.3,q+v*0.1),new C.aZ(n,n))
$.V()
n=C.L()
n.r=A.w.j(0.55).gp(0)
d.aA(m,n)
B.Fh(d,"NGMY",new C.u(m.a+v*0.025,m.b+v*0.012),v*0.07,A.c,A.bg,1,i)
n=v*0.86
s=C.L()
s.r=A.w.j(0.6).gp(0)
d.aW(new C.a9(0,n,u,n+v*0.14),s)
B.Fh(d,"CH "+(f+1)+"  \xb7  "+D.Om[o].a,new C.u(q,v*0.885),v*0.075,A.c,A.bg,0,w-v*0.08)
if(p<1){s=C.L()
s.r=A.c.j(0.6*(1-p)).gp(0)
d.aW(new C.a9(0,0,u,t),s)}}$.V()
l=C.L()
l.r=A.w.j(0.07).gp(0)
for(k=0;k<v;k+=3){j=l.H()
h.drawRect(C.c4(new C.a9(0,k,u,k+1)),j)
j.delete()}u=new C.aP($.V().r,A.ap,i,i,C.a([],x.v))
u.E(new C.b5(0,0))
u.E(new C.ao(w*0.45,0))
u.E(new C.ao(0,v*0.5))
u.E(new C.bE())
v=C.L()
v.r=A.c.j(0.04).gp(0)
d.aM(u,v)
h.restore()},
Fh(d,e,f,g,h,i,j,k){var w=null,v=C.ig(w,w,1,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,h,w,w,w,w,w,w,w,w,g,w,w,A.u,w,w,!0,w,j,w,w,w,w,w,w),e),i,A.ci,w,A.eq,A.cg),u=k==null
v.B5(u?9999:k)
v.a5(d,f.af(0,new C.u(i===A.L&&!u?(k-v.b.c)/2:0,0)))},
hIR(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=A.k.G(f,14),i=0+l,h=0+k
$.V()
w=C.L()
w.sar(D.al1.av(0,new C.a9(0,0,i,h)))
d.aW(new C.a9(0,0,i,h),w)
w=C.L()
w.r=A.dL.gp(0)
d.ae(new C.u(l*0.85,k*0.18),k*0.08,w)
w=k*0.78
h=C.L()
h.r=A.zu.gp(0)
d.aW(new C.a9(0,w,i,w+k*0.22),h)
new B.fd0(d,f,k).$5(new C.u(l*0.5,k*0.8),1.5707963267948966,k*0.24,5,A.k.D(j/5,0,1)*1.4)
for(i=k*0.26,h=k*0.11,w=k*0.05,v=d.a,u=-k,t=u*0.1,u*=0.04,s=k*0.065,r=0;r<6;++r){q=A.k.D((j-(5+r*1.3))/0.5,0,1)
if(q<=0)continue
p=(r&1)===1?0.04:0
o=A.o.G(r,3)
n=A.lP.au(0,q)
J.bA(v.save())
v.translate(l*(0.2+0.12*r+p),k*(0.16+0.14*o))
v.scale(n,n)
p=C.by(C.cr(A.J,h,i),new C.aZ(w,w))
$.V()
o=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.r=A.c.gp(0)
m=o.H()
v.drawRRect(C.et(p),m)
m.delete()
p=C.by(C.cr(A.J,h,i),new C.aZ(w,w))
o=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.b=A.ae
o.c=2
o.r=A.by.gp(0)
m=o.H()
v.drawRRect(C.et(p),m)
m.delete()
B.Fh(d,"\u2665 "+D.cGD[r],new C.u(t,u),s,A.rp,A.bg,0,null)
v.restore()}if(j>11.5)B.Fh(d,"Family is everything",new C.u(0,k*0.62),k*0.09,A.hp,A.L,0,l)},
hAx(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a0.a,i=a0.b,h=0+j,g=0+i,f=$.V(),e=C.L()
e.sar(D.bJU.av(0,new C.a9(0,0,h,g)))
d.aW(new C.a9(0,0,h,g),e)
w=a1*40
for(h=d.a,g=x.v,v=0;v<2;++v,f=e){e=C.a([],g)
u=new C.aP(f.r,A.ap,k,k,e)
e.push(new C.b5(0,i))
for(f=v===0,t=0;t<=j;t+=6){s=f?0.4:1
r=f?0.62:0.78
q=f?40:28
q=new C.ao(t,i*r+Math.sin((t+w*s)/q)*i*0.05)
e.push(q)
s=u.f
if(s!=null)q.bw(s)
s=u.e
if(s!=null)s.a.delete()
u.e=null}s=new C.ao(j,i)
e.push(s)
e=u.f
if(e!=null)s.bw(e)
e=u.e
if(e!=null)e.a.delete()
u.e=null
e=$.V()
s=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
s.r=(f?A.jg:A.ee).gp(0)
p=s.H()
f=u.e
h.drawPath((f==null?u.e=new C.cE(u.gbH().a.snapshot()):f).a,p)
p.delete()}for(h=i*0.04,g=w*1.3,f=j+60,e=j*0.3,o=0,n=0;n<6;++n){t=A.k.G(n*90-g,f)-30
s=Math.sin(n*1.7+a1)
if(Math.abs(t-e)<12)++o
B.hIf(d,new C.u(t,i*(0.35+0.08*s)),h,A.dL)}m=Math.abs(Math.sin(a1*5))
l=new C.u(e,i*0.72-m*i*0.22)
h=C.cr(new C.u(e,i*0.82),i*0.025,i*0.14*(1-m*0.4))
$.V()
g=C.L()
g.r=A.dl.gp(0)
d.hV(h,g)
g=i*0.085
h=C.L()
h.sar(D.e0m.av(0,C.bT(l,g)))
d.ae(l,g,h)
h=C.L()
h.b=A.ae
h.c=2
h.r=A.p0.gp(0)
d.ae(l,g,h)
h=-i
B.Fh(d,"$",l.af(0,new C.u(h*0.03,h*0.045)),i*0.09,A.p0,A.bg,0,k)
g=h*0.01
h=l.af(0,new C.u(h*0.028,g))
f=C.L()
f.r=A.w.gp(0)
d.ae(h,2.4,f)
g=l.af(0,new C.u(i*0.028,g))
f=C.L()
f.r=A.w.gp(0)
d.ae(g,2.4,f)
B.Fh(d,"Saved: $"+(A.o.G(A.k.bv(a1*3),1000)+o),new C.u(i*0.05,i*0.06),i*0.08,A.c,A.bg,0,k)},
hIf(d,e,f,g){var w,v,u,t,s,r,q,p=$.V(),o=C.a([],x.v),n=new C.aP(p.r,A.ap,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?f:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new C.b5(r,q)
o.push(r)
q=n.f
if(q!=null)r.bw(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new C.ao(r,q)
o.push(r)
q=n.f
if(q!=null)r.bw(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.E(new C.bE())
$.V()
p=C.L()
p.r=g.gp(0)
d.aM(n,p)},
hIa(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a3.a,d=a3.b,a0=$.V(),a1=C.L()
a1.r=D.b7o.gp(0)
a2.aW(new C.a9(0,0,0+e,0+d),a1)
w=new C.f5()
w.dU(7)
for(a1=a4*3,v=a2.a,u=0;u<60;++u){t=A.k.G(A.k.G(w.ag()*e-a4*(10+w.ag()*60),e)+e,e)
s=w.ag()
r=w.ag()
q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.r=A.c.j(0.5+0.5*Math.sin(a1+u)).gp(0)
p=q.H()
v.drawCircle(t,s*d*0.85,0.6+r*1.4,p)
p.delete()}o=e*1.2-A.k.G(a4*22,e*1.6)
a1=d*0.3
s=d*0.2
r=C.L()
r.sar(D.e0k.av(0,C.bT(new C.u(o,a1),s)))
a2.ae(new C.u(o,a1),s,r)
a1=C.cr(new C.u(o,a1),d*0.07,d*0.6)
r=C.L()
r.b=A.ae
r.c=3
r.r=A.bJ.j(0.7).gp(0)
a2.hV(a1,r)
r=Math.sin(a4*2)
J.bA(v.save())
v.translate(e*0.42,d*0.52+r*d*0.04)
a2.iV(0,-0.25)
a0=a0.r
r=x.v
n=new C.aP(a0,A.ap,f,f,C.a([],r))
a1=-d
s=a1*0.04
q=d*0.1
n.E(new C.b5(s,q))
m=d*0.04
n.E(new C.cR(0,d*(0.2+0.05*Math.sin(a4*30)),m,q))
n.E(new C.bE())
l=C.L()
k=d*0.12
l.sar(D.bKz.av(0,new C.a9(s,q,s+d*0.08,q+k)))
a2.aM(n,l)
j=new C.aP(a0,A.ap,f,f,C.a([],r))
l=a1*0.17
j.E(new C.b5(0,l))
s=a1*0.05
i=d*0.05
j.E(new C.cR(d*0.09,s,i,q))
j.E(new C.ao(s,q))
j.E(new C.cR(a1*0.09,s,0,l))
j.E(new C.bE())
h=C.L()
g=a1*0.08
h.sar(D.bKM.av(0,new C.a9(g,l,g+d*0.16,l+d*0.27)))
a2.aM(j,h)
h=C.L()
h.r=A.aY.gp(0)
a2.ae(new C.u(0,s),d*0.035,h)
h=new C.aP(a0,A.ap,f,f,C.a([],r))
h.E(new C.b5(s,m))
h.E(new C.ao(a1*0.1,k))
h.E(new C.ao(s,q))
h.E(new C.bE())
s=C.L()
s.r=A.aE.gp(0)
a2.aM(h,s)
r=new C.aP(a0,A.ap,f,f,C.a([],r))
r.E(new C.b5(i,m))
r.E(new C.ao(q,k))
r.E(new C.ao(i,q))
r.E(new C.bE())
q=C.L()
q.r=A.aE.gp(0)
a2.aM(r,q)
v.restore()},
hF7(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=0+g,d=0+f,a0=$.V(),a1=C.L()
a1.sar(D.bJB.av(0,new C.a9(0,0,e,d)))
a2.aW(new C.a9(0,0,e,d),a1)
for(e=a2.a,d=f*0.85,a1=f*0.7,w=x.v,a0=a0.r,v=0;v<4;++v){u=g*(0.1+0.25*v)
t=C.a([],w)
s=new C.aP(a0,A.ap,h,h,t)
t.push(new C.b5(u,f))
t.push(new C.cR(u+Math.sin(a4+v)*10,d,u+4,a1+v*6))
t=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
t.b=A.ae
t.c=5
t.r=A.d1.gp(0)
r=t.H()
t=s.gbH().a.snapshot()
e.drawPath((s.e=new C.cE(t)).a,r)
r.delete()}d=A.k.G(a4*18,g*1.5)
J.bA(e.save())
e.translate(d-g*0.25,f*0.35+Math.sin(a4)*6)
d=C.cr(A.J,f*0.22,f*0.5)
a1=C.L()
a1.r=A.bv.gp(0)
a2.hV(d,a1)
a1=new C.aP(a0,A.ap,h,h,C.a([],w))
d=-f
t=d*0.22
a1.E(new C.b5(t,0))
a1.E(new C.cR(d*0.36,d*0.12+Math.sin(a4*3)*5,d*0.34,d*0.16))
s=d*0.02
a1.E(new C.cR(d*0.28,s,t,0))
t=C.L()
t.r=A.bv.gp(0)
a2.aM(a1,t)
t=f*0.03
a1=f*0.1
q=C.cr(new C.u(0,t),a1,f*0.34)
p=C.L()
p.r=A.aK.gp(0)
a2.hV(q,p)
p=C.L()
p.r=A.c.gp(0)
a2.ae(new C.u(f*0.15,s),3,p)
p=C.L()
p.r=A.w.gp(0)
a2.ae(new C.u(f*0.155,s),1.5,p)
e.restore()
for(s=d*0.005,q=d*0.08,p=d*0.03,o=f*0.06,d*=0.04,n=g+40,m=a4*2,v=0;v<6;++v){l=(v&1)===0?1:-1
k=A.k.G(A.k.G(a4*(24+v*7)*l+v*80,n)+g+40,n)
j=Math.sin(m+v)
J.bA(e.save())
e.translate(k-20,f*(0.52+0.06*v)+j*6)
e.scale(l,1)
k=C.cr(A.J,o,a1)
j=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
i=A.o.G(v,4)
j.r=D.arO[i].gp(0)
r=j.H()
e.drawOval(C.c4(k),r)
r.delete()
k=C.a([],w)
j=new C.aP(a0,A.ap,h,h,k)
k.push(new C.b5(d,0))
k.push(new C.ao(q,p))
k.push(new C.ao(q,t))
k.push(new C.bE())
k=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
k.r=D.arO[i].gp(0)
r=k.H()
k=j.gbH().a.snapshot()
e.drawPath((j.e=new C.cE(k)).a,r)
r.delete()
k=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
k.r=A.w.gp(0)
r=k.H()
e.drawCircle(t,s,1.8,r)
r.delete()
e.restore()}for(v=0;v<14;++v){d=A.k.G(v*0.071+0.05,1)
a0=A.k.G(a4*(14+v*3)+v*40,f)
a1=Math.sin(m+v)
w=A.o.G(v,3)
t=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
t.b=A.ae
t.c=1.2
t.r=A.c.j(0.7).gp(0)
r=t.H()
e.drawCircle(g*d+a1*4,f-a0,2+w,r)
r.delete()}},
hGj(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a9.a,a1=a9.b,a2=A.k.G(b0,12),a3=a2<7,a4=0+a0,a5=0+a1,a6=$.V(),a7=C.L()
a7.sar(new C.a5(A.b1,A.b3,A.x,a3?D.cZG:D.cO9,d,d).av(0,new C.a9(0,0,a4,a5)))
a8.aW(new C.a9(0,0,a4,a5),a7)
a7=a1*0.74
w=C.L()
w.r=(a3?D.bb8:A.zu).gp(0)
a8.aW(new C.a9(0,a7,a4,a7+a1*0.26),w)
for(w=a8.a,v=a1*0.07,u=a1*0.06,t=a1*0.2,s=a1*0.1,r=a1*0.09,q=x.v,p=b0*2,a6=a6.r,o=0;o<4;++o){n=a0*(0.08+0.24*o)
m=a1*(0.14+0.03*A.o.G(o,2))
l=a7-m
k=n+t
j=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.r=D.cBE[o].gp(0)
i=j.H()
w.drawRect(C.c4(new C.a9(n,l,k,l+m)),i)
i.delete()
j=C.a([],q)
h=new C.aP(a6,A.ap,d,d,j)
j.push(new C.b5(n-4,l))
j.push(new C.ao(n+s,l-r))
j.push(new C.ao(k+4,l))
j.push(new C.bE())
l=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
l.r=A.eK.gp(0)
i=l.H()
l=h.gbH().a.snapshot()
w.drawPath((h.e=new C.cE(l)).a,i)
i.delete()
l=n+v
k=m*0.55
j=a7-k
h=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
h.r=(a3&&A.o.G(A.k.bv(p),2)===0?A.lq:A.fj).gp(0)
i=h.H()
w.drawRect(C.c4(new C.a9(l,j,l+u,j+k)),i)
i.delete()}if(a3){for(a7=b0*20,u=b0*260,t=a1*0.8,o=0;o<70;++o){n=A.k.G(o*37+a7,a0)
g=A.k.G(o*53+u,t)
r=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
r.r=A.fk.gp(0)
r.c=1.4
i=r.H()
w.drawLine.apply(w,[n,g,n-3,g+9,i])
i.delete()}a7=b0*3
if(A.o.G(A.k.bv(a7),7)===0&&A.k.G(a7,1)<0.3){a7=C.L()
a7.r=A.c.j(0.5).gp(0)
a8.aW(new C.a9(0,0,a4,a5),a7)
q=new C.aP(a6,A.ap,d,d,C.a([],q))
q.E(new C.b5(a0*0.6,s))
s=a0*0.55
a6=a1*0.3
q.E(new C.ao(s,a6))
q.E(new C.ao(a0*0.62,a6))
q.E(new C.ao(s,a1*0.55))
s=C.L()
s.b=A.ae
s.c=4
s.r=A.lq.gp(0)
a8.aM(q,s)}}else{for(a4=a0*0.5,a5=a1*0.035,a6=3.141592653589793*A.k.D((a2-7)/2,0,1)*57.29577951308232,o=0;o<6;++o){u=a0*(0.9-o*0.07)
u=C.cr(new C.u(a4,a7),u,u)
t=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
t.b=A.ae
t.c=a5
t.r=D.d2t[o].j(0.9).gp(0)
i=t.H()
w.drawArc.apply(w,[C.c4(u),180,a6,!1,i])
i.delete()}a4=C.L()
a4.r=A.dL.gp(0)
a8.ae(new C.u(a0*0.86,a1*0.16),a1*0.08,a4)}for(a4=a0+120,o=0;o<3;++o){n=A.k.G(b0*(8+o*4)+o*120,a4)-60
for(a5=a1*(0.12+0.1*o),f=0;f<4;++f){e=D.c71[f]
$.V()
a6=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
a6.r=(a3?A.bj:A.c.j(0.95)).gp(0)
i=a6.H()
w.drawCircle(n+e.a,a5+e.b,v,i)
i.delete()}}},
hIb(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a3.a,a1=a3.b
$.V()
w=C.L()
w.r=A.da.gp(0)
a2.aW(new C.a9(0,0,0+a0,0+a1),w)
v=C.L()
v.r=A.c.j(0.05).gp(0)
for(w=a2.a,u=0;u<a0;u+=16){t=v.H()
w.drawLine.apply(w,[u,0,u,a1,t])
t.delete()}for(s=0;s<a1;s+=16){t=v.H()
w.drawLine.apply(w,[0,s,a0,s,t])
t.delete()}r=a0*0.14
q=a1*0.2
p=a1*0.08
o=C.by(new C.a9(r,q,r+a0*0.72,q+a1*0.5),new C.aZ(p,p))
n=new C.aP($.V().r,A.ap,null,null,C.a([],x.v))
n.E(new C.iR(o))
q=C.L()
q.b=A.ae
q.c=5
q.r=A.bv.gp(0)
a2.aM(n,q)
m=new C.Ra(new C.v2(C.wv(n),!1,C.a([],x.U))).gK(0)
q=m.a
l=m.b
q.j3()
k=q.e
j=k[l].b
j===$&&C.c()
j=j.a.length()
q.j3()
i=k[l].b
i===$&&C.c()
h=A.k.G(a4*j/5,i.a.length())
for(g=0;g<10;++g){q.j3()
j=k[l].b
j===$&&C.c()
j=A.k.G(h-g*9,j.a.length())
q.j3()
f=k[l].LD(j).a
j=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.r=A.dL.j(1-g*0.09).gp(0)
j.z=F.Pp
t=j.H()
w.drawCircle(f.a,f.b,6-g*0.5,t)
t.delete()}w=a1*0.45
q=C.by(C.cr(new C.u(r,w),a1*0.22,a1*0.12),A.hL)
l=C.L()
l.r=A.d1.gp(0)
a2.aA(q,l)
B.Fh(a2,"+",new C.u(r-5,a1*0.33),a1*0.07,A.c,A.bg,0,null)
e=(Math.sin(a4*2)+1)/2
d=new C.u(a0*0.86,w)
w=C.L()
w.r=A.dL.j(0.25+0.5*e).gp(0)
w.z=R.Gr
a2.ae(d,a1*0.16,w)
w=C.L()
w.r=C.ar(A.bI,A.o6,e).gp(0)
a2.ae(d,p,w)
B.Fh(a2,"Electricity needs a full loop!",new C.u(0,a1*0.74),a1*0.075,A.fZ,A.L,0,a0)},
hBM(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.V()
w=C.L()
w.sar(D.bMF.av(0,new C.a9(0,0,a3,a4)))
a5.aW(new C.a9(0,0,a3,a4),w)
w=a2*0.82
a4=C.L()
a4.r=A.da.gp(0)
a5.aW(new C.a9(0,w,a3,w+a2*0.18),a4)
for(a3=a1*0.1,a4=a5.a,v=0;v<7;++v){u=a1*(0.05+v*0.15)
t=a2*(0.1+0.07*A.o.G(v*5,4))
s=w-t
r=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
r.r=A.az.gp(0)
q=r.H()
a4.drawRect(C.c4(new C.a9(u,s,u+a3,s+t)),q)
q.delete()}for(a3=a2*0.2,s=a7*0.55,p=0;p<4;++p){r=s+p*0.27
o=A.k.G(r,1)
n=A.k.bv(r)*7+p*3
m=a1*(0.15+0.7*A.k.G(n*0.37,1))
l=a2*(0.2+0.25*A.k.G(n*0.53,1))
k=D.aqT[A.o.G(Math.abs(n),5)]
if(o<0.3){$.V()
r=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
r.r=A.c.gp(0)
q=r.H()
a4.drawCircle(m,w-(w-l)*(o/0.3),2.5,q)
q.delete()}else{v=(o-0.3)/0.7
for(r=v*v*a2*0.08,j=1-v,i=2.4*j+0.4,h=0;h<28;++h){g=h*3.141592653589793*2/28
f=a3*A.dU.au(0,v)
e=Math.cos(g)
d=Math.sin(g)
$.V()
a0=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
a0.r=k.j(A.k.D(j,0,1)).gp(0)
a0.z=D.daj
q=a0.H()
a4.drawCircle(m+e*f,l+d*f+r,i,q)
q.delete()}}}},
hIQ(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,a0=a6.b,a1=0+d,a2=0+a0,a3=$.V(),a4=C.L()
a4.sar(D.al1.av(0,new C.a9(0,0,a1,a2)))
a5.aW(new C.a9(0,0,a1,a2),a4)
for(a2=a5.a,a4=x.v,w=0;w<2;++w,a3=v){v=C.a([],a4)
u=new C.aP(a3.r,A.ap,null,null,v)
v.push(new C.b5(0,a0))
for(a3=w===0,t=0;t<=d;t+=6){s=a3?8:20
r=a3?0.55:0.68
q=a3?50:34
q=new C.ao(t,a0*r+Math.sin((t+a7*s)/q)*a0*0.06)
v.push(q)
s=u.f
if(s!=null)q.bw(s)
s=u.e
if(s!=null)s.a.delete()
u.e=null}s=new C.ao(d,a0)
v.push(s)
v=u.f
if(v!=null)s.bw(v)
v=u.e
if(v!=null)v.a.delete()
u.e=null
v=$.V()
s=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
s.r=(a3?A.Do:A.zu).gp(0)
p=s.H()
a3=u.e
a2.drawPath((a3==null?u.e=new C.cE(u.gbH().a.snapshot()):a3).a,p)
p.delete()}a3=a0*0.8
a4=C.L()
a4.r=A.bv.gp(0)
a5.aW(new C.a9(0,a3,a1,a3+a0*0.04),a4)
for(t=-A.k.G(a7*80,24),a1=a0*0.84,a4=a0*0.03,v=a1+a4;t<d;t+=24){s=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
s.r=A.fj.gp(0)
p=s.H()
a2.drawRect(C.c4(new C.a9(t,a1,t+8,v)),p)
p.delete()}o=Math.sin(a7*14)*1.2
n=d*0.12
for(a1=a3+o,a3=a0*0.025,v=d*0.012,s=a0*0.02,r=a0*0.62+o,a4=r+a4,q=a4+a0*0.06,m=r+a0*0.18,l=0;l<4;++l){k=l===0
j=n+d*(k?0.16:0.15)
i=C.by(new C.a9(n,r,j,m),new C.aZ(s,s))
h=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
h.r=(k?A.bM:D.cOb[l-1]).gp(0)
p=h.H()
a2.drawRRect(C.et(i),p)
p.delete()
for(j-=n,i=j*0.18,g=0;g<3;++g){h=n+j*(0.12+g*0.28)
f=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
f.r=A.fk.gp(0)
p=f.H()
a2.drawRect(C.c4(new C.a9(h,a4,h+i,q)),p)
p.delete()}i=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
i.r=A.bh.gp(0)
p=i.H()
a2.drawCircle(n+j*0.25,a1,a3,p)
p.delete()
i=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
i.r=A.bh.gp(0)
p=i.H()
a2.drawCircle(n+j*0.75,a1,a3,p)
p.delete()
n+=j+v}for(a1=a7*0.8,a3=d*0.2,a4=a0*0.6,l=0;l<5;++l){e=A.k.G(a1+l*0.2,1)
v=e*a0
r=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
r.r=A.c.j(0.7*(1-e)).gp(0)
p=r.H()
a2.drawCircle(a3-e*d*0.12,a4-v*0.25,s+v*0.04,p)
p.delete()}},
hH4(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a4.a,a0=a4.b,a1=0+d,a2=0+a0
$.V()
w=C.L()
v=a5*2
u=C.ar(A.jg,A.hS,(Math.sin(v)+1)/2)
u.toString
w.sar(new C.a5(A.ax,A.aC,A.x,C.a([u,A.az],x.O),null,null).av(0,new C.a9(0,0,a1,a2)))
a3.aW(new C.a9(0,0,a1,a2),w)
for(a1=a3.a,a2=a0*0.86,w=d/8-2,u=a0*0.14,t=a2+u,s=0;s<8;++s){r=d*s/8
q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.r=(A.k.G(v+s,2)<1?A.bY:A.aY).j(0.5).gp(0)
p=q.H()
a1.drawRect(C.c4(new C.a9(r,a2,r+w,t)),p)
p.delete()}a2=a5*6
o=Math.sin(a2)
J.bA(a1.save())
w=-a0
a1.translate(d*0.5,a0*0.55+Math.abs(o)*w*0.03)
a3.iV(0,o*0.06)
t=a0*0.26
r=a0*0.3
q=a0*0.04
n=C.by(C.cr(A.J,r,t),new C.aZ(q,q))
m=C.L()
m.sar(D.bN2.av(0,C.cr(A.J,r,t)))
a3.aA(n,m)
m=a0*0.08
u=C.cr(new C.u(0,a0*0.02),m,u)
n=C.L()
n.r=A.b8.j(0.7).gp(0)
a3.aW(u,n)
n=C.by(C.cr(new C.u(0,w*0.25),a0*0.17,a0*0.22),new C.aZ(q,q))
u=C.L()
u.r=A.cl.gp(0)
a3.aA(n,u)
l=A.k.G(a5*1.3,1)>0.08
for(u=w*0.26,t=a0*0.025,k=0;k<2;++k){j=D.c6F[k]
r=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
r.r=(l?A.b8:A.hS).gp(0)
p=r.H()
a1.drawCircle(j*a0,u,t,p)
p.delete()}u=C.L()
u.r=A.af.gp(0)
u.c=3
a3.bz(new C.u(0,w*0.335),new C.u(0,w*0.38),u)
u=C.L()
u.r=A.aE.gp(0)
a3.ae(new C.u(0,w*0.39),a0*0.015,u)
for(u=-o,t=a0*0.035,r=a0*0.15,n=a0*0.28,w*=0.08,k=0;k<2;++k){i=D.vb[k]
J.bA(a1.save())
h=i*a0
a1.translate(h*0.14,w)
g=i>0
a1.rotate(i*(0.7+Math.sin(a2+(g?0:3.141592653589793))*0.8)*180/3.141592653589793,0,0)
f=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
f.r=A.bI.gp(0)
f.c=t
f.d=A.bO
p=f.H()
a1.drawLine.apply(a1,[0,0,h*0.16,0,p])
p.delete()
a1.restore()
g=g?o:u
f=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
f.r=A.bI.gp(0)
f.c=q
f.d=A.bO
p=f.H()
a1.drawLine.apply(a1,[h*0.06,r,h*0.08,n+g*a0*0.02,p])
p.delete()}a1.restore()
for(a1=a5*0.7,a2=a0*0.7,s=0;s<4;++s){e=A.k.G(a1+s*0.25,1)
B.Fh(a3,"\u266a",new C.u(d*(0.2+0.18*s)+Math.sin(v+s)*8,a2-e*a0*0.5),m,A.c.j(1-e),A.bg,0,null)}},
hBX(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=0+e,a1=0+d
$.V()
w=C.L()
w.sar(D.bLG.av(0,new C.a9(0,0,a0,a1)))
a2.aW(new C.a9(0,0,a0,a1),w)
w=C.L()
w.r=A.dL.gp(0)
a2.ae(new C.u(e*0.12,d*0.16),d*0.07,w)
w=d*0.72
a1=C.L()
a1.r=A.Do.gp(0)
a2.aW(new C.a9(0,w,a0,w+d*0.28),a1)
for(a0=a4*0.25,a1=d*0.78,w=a2.a,v=d*0.016,u=a4*0.3,t=d*0.022,s=0;s<9;++s){r=e*(0.07+s*0.105)
q=A.k.D(A.k.G(a0-s*0.12,3),0,1)
p=A.o.G(s,3)
o=r+Math.sin(a4+s)*3
p=a1-d*(0.12+0.05*p)*q
n=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
n.r=A.fX.gp(0)
n.c=3
m=n.H()
w.drawLine.apply(w,[r,a1,o,p,m])
m.delete()
if(q>0.7){for(l=0;l<6;++l){k=l*3.141592653589793/3+u
n=Math.cos(k)
j=Math.sin(k)
i=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
i.r=D.asP[A.o.G(s,5)].gp(0)
m=i.H()
w.drawCircle(o+n*d*0.028,p+j*d*0.028,t,m)
m.delete()}n=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
n.r=A.dL.gp(0)
m=n.H()
w.drawCircle(o,p,v,m)
m.delete()}}for(a0=d*0.03,a1=d*0.05,v=d*0.06,u=a4*0.9,t=a4*1.3,p=a4*18,s=0;s<3;++s){r=e*(0.2+0.28*s)+Math.sin(u+s*2)*e*0.12
h=d*(0.3+0.1*s)+Math.cos(t+s)*d*0.06
g=Math.abs(Math.sin(p+s))
for(o=a1*g+2,n=(s+2)%5,f=0;f<2;++f){j=C.cr(new C.u(r+D.vb[f]*d*0.025*g,h),v,o)
i=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
i.r=D.asP[n].gp(0)
m=i.H()
w.drawOval(C.c4(j),m)
m.delete()}o=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.r=A.bh.gp(0)
o.c=2
m=o.H()
w.drawLine.apply(w,[r,h-a0,r,h+a0,m])
m.delete()}},
hVP(d,e,f,g,h){return C.a6(d,!1).ck(C.ue(null,!1,!0,!0,new B.fBz(e,g,f,h),A.eM,null,A.pb,new B.fBA(),x.S))},
x3:function x3(d,e){this.a=d
this.b=e},
fd0:function fd0(d,e,f){this.a=d
this.b=e
this.c=f},
fBz:function fBz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBA:function fBA(){},
UP:function UP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCj:function aCj(d,e){var _=this
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
etG:function etG(d){this.a=d},
etF:function etF(d){this.a=d},
etE:function etE(d,e){this.a=d
this.b=e},
etH:function etH(d,e){this.a=d
this.b=e},
etQ:function etQ(d){this.a=d},
etP:function etP(d){this.a=d},
etO:function etO(){},
etJ:function etJ(d){this.a=d},
etK:function etK(d){this.a=d},
etL:function etL(d){this.a=d},
etM:function etM(d){this.a=d},
etI:function etI(d){this.a=d},
etN:function etN(d){this.a=d},
etD:function etD(d){this.a=d},
etA:function etA(d){this.a=d},
etC:function etC(d){this.a=d},
etB:function etB(d,e){this.a=d
this.b=e},
brG:function brG(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aK7:function aK7(){},
f8q(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.r,1)
return C.au(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.aq,C.d(e,w,w,w,w,w,w,A.I1,A.L,w,w),A.ay,C.c6(A.fI,g,A.bx,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.U1,w,u,v,w,w,A.n),w,w,w,A.ey,A.a8,w,w,w),w,w,w)},
fMd(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.f5()
b4.dU(b5*977+13)
w=A.o.D(1+A.o.am(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aD(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.T(u,t)
m=w
l=0
k=N.pJ
j=!0
i=0
for(;;){if(!(j&&i<12))break
A:{++i
h=2+b4.aD(4)
for(g=k.a,f=k.b,e=0;e<h;r=a0,l=d){d=l+g
a0=r+f
if(d<0||a0<0||d>=7||a0>=7){e=99
break}a1=a0*7+d
if(A.d.t(p,a1)||a1===q){j=!1
break}p.push(a1);++e}if(!j||e>=99||m===0)break
a2=b4.hf()?new C.z(f,-g):new C.z(-f,g)
a3=new C.z(-f,-g).A(0,a2)
a4=l+a2.a
a5=r+a2.b
if(a4<0||a5<0||a4>=7||a5>=7)break A
o.push(r*7+l);--m
g=A.d.gak(o)
n.n(0,g,a3?"/":"\\")
k=a2}}if(!j||o.length<w||p.length<5)continue
g=C.a([],v)
for(f=p.length,a6=0;a6<p.length;p.length===f||(0,C.K)(p),++a6){a7=p[a6]
if(!A.d.t(o,a7))g.push(a7)}if(g.length<3)continue
a8=A.o.D(2+A.o.am(b5,8),2,4)
a9=C.eM([A.d.gak(g)],u)
A.d.fB(g,b4)
for(v=g.length,a6=0;a6<g.length;g.length===v||(0,C.K)(g),++a6){a7=g[a6]
if(a9.a>=a8)break
a9.L(0,a7)}b0=C.b0(u)
b1=3+A.o.am(b5,3)
v=q+1
b2=0
for(;;){if(b0.a<b1){b3=b2+1
g=b2<200
b2=b3}else g=!1
if(!g)break
B:{a7=b4.aD(49)
if(A.d.t(p,a7)||a7===q||a9.t(0,a7)||A.d.t(o,a7))break B
if(a7===v)break B
b0.L(0,a7)}}v=b5>=10?1:0
return new B.aU4(b0,a9,C.T(u,t),q,N.pJ,w+v)}return new B.aU4(C.b0(u),C.eM([25],u),C.T(u,t),21,N.pJ,1)},
haa(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.b0(x.S),n=d.e,m=A.o.G(n,7),l=A.o.am(n,7),k=d.f
p.push(n)
for(n=d.c,w=d.b,v=d.d,u=0;u<200;++u){t=k.a
m+=t
s=k.b
l+=s
if(m<0||l<0||m>=7||l>=7)break
r=l*7+m
if(w.t(0,r))break
p.push(r)
if(n.t(0,r))o.L(0,r)
q=e.h(0,r)
if(q==null)q=v.h(0,r)
if(q==="/")k=new C.z(-s,-t)
if(q==="\\")k=new C.z(k.b,k.a)}return new C.blx(p,o)},
h5x(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aU4:function aU4(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
U2:function U2(d){this.a=d},
bhg:function bhg(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.fc$=g
_.kE$=h
_.fH$=i
_.fd$=j
_.bp$=k
_.a6$=l
_.c=_.a=null},
e0K:function e0K(d){this.a=d},
e0J:function e0J(d,e){this.a=d
this.b=e},
e0L:function e0L(){},
e0A:function e0A(d,e){this.a=d
this.b=e},
e0B:function e0B(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e0E:function e0E(d,e){this.a=d
this.b=e},
e0C:function e0C(d){this.a=d},
e0D:function e0D(d){this.a=d},
e0F:function e0F(d){this.a=d},
e0G:function e0G(d){this.a=d},
e0H:function e0H(d){this.a=d},
e0I:function e0I(d,e){this.a=d
this.b=e},
bek:function bek(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
dcl:function dcl(d,e,f){this.a=d
this.b=e
this.c=f},
dco:function dco(d,e,f){this.a=d
this.b=e
this.c=f},
dcm:function dcm(d){this.a=d},
dcn:function dcn(d){this.a=d},
U4:function U4(d){this.a=d},
aBH:function aBH(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.fc$=g
_.kE$=h
_.fH$=i
_.fd$=j
_.bp$=k
_.a6$=l
_.c=_.a=null},
e12:function e12(d){this.a=d},
e11:function e11(d,e){this.a=d
this.b=e},
e13:function e13(){},
e0O:function e0O(){},
e0X:function e0X(d,e){this.a=d
this.b=e},
e0U:function e0U(d){this.a=d},
e0Q:function e0Q(d){this.a=d},
e0V:function e0V(d){this.a=d},
e0W:function e0W(d){this.a=d},
e0P:function e0P(d){this.a=d},
e0Y:function e0Y(d){this.a=d},
e0T:function e0T(d,e){this.a=d
this.b=e},
e0Z:function e0Z(d){this.a=d},
e0S:function e0S(d,e){this.a=d
this.b=e},
e1_:function e1_(d){this.a=d},
e0R:function e0R(d,e){this.a=d
this.b=e},
e10:function e10(d){this.a=d},
bez:function bez(d,e){this.b=d
this.a=e},
aJC:function aJC(){},
buf:function buf(){},
aJD:function aJD(){},
bug:function bug(){},
a_c(d,e,f,g,h,i){return new B.br4(d,e,f,g,h,i)},
br4:function br4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f4V:function f4V(){},
f4W:function f4W(){},
f4X:function f4X(){},
f4Y:function f4Y(){},
f4Z:function f4Z(){},
f5_:function f5_(){},
f50:function f50(){},
f51:function f51(){},
a6E:function a6E(d){this.a=d},
cbR:function cbR(d){this.a=d},
cbS:function cbS(){},
cbQ:function cbQ(d,e){this.a=d
this.b=e},
cbP:function cbP(d){this.a=d},
UU:function UU(d){this.a=d},
aCv:function aCv(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.fc$=f
_.kE$=g
_.fH$=h
_.fd$=i
_.bp$=j
_.a6$=k
_.c=_.a=null},
exO:function exO(d){this.a=d},
exK:function exK(d){this.a=d},
exJ:function exJ(d,e){this.a=d
this.b=e},
exM:function exM(d,e){this.a=d
this.b=e},
exL:function exL(d,e){this.a=d
this.b=e},
exN:function exN(d){this.a=d},
bsr:function bsr(d,e,f){this.b=d
this.c=e
this.a=f},
TE:function TE(d){this.a=d},
bgQ:function bgQ(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.fc$=d
_.kE$=e
_.fH$=f
_.fd$=g
_.bp$=h
_.a6$=i
_.c=_.a=null},
dOK:function dOK(){},
dOL:function dOL(){},
dOF:function dOF(d,e){this.a=d
this.b=e},
dOH:function dOH(d,e){this.a=d
this.b=e},
dOI:function dOI(d){this.a=d},
dOG:function dOG(d){this.a=d},
dOJ:function dOJ(d){this.a=d},
bni:function bni(d,e,f){this.b=d
this.c=e
this.a=f},
SR:function SR(d){this.a=d},
bgu:function bgu(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.fc$=d
_.kE$=e
_.fH$=f
_.fd$=g
_.bp$=h
_.a6$=i
_.c=_.a=null},
dAe:function dAe(){},
dAf:function dAf(){},
dA9:function dA9(){},
dAc:function dAc(d,e){this.a=d
this.b=e},
dAb:function dAb(d,e){this.a=d
this.b=e},
dAd:function dAd(d){this.a=d},
dAa:function dAa(d){this.a=d},
aFT:function aFT(d,e,f){this.a=d
this.b=e
this.c=f},
Tv:function Tv(d){this.a=d},
bgK:function bgK(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dM0:function dM0(d,e){this.a=d
this.b=e},
dM1:function dM1(d){this.a=d},
dM_:function dM_(d,e){this.a=d
this.b=e},
dM2:function dM2(d){this.a=d},
dLZ:function dLZ(d,e){this.a=d
this.b=e},
dM3:function dM3(d){this.a=d},
dLY:function dLY(d,e){this.a=d
this.b=e},
dM4:function dM4(d,e){this.a=d
this.b=e},
dLX:function dLX(d,e){this.a=d
this.b=e},
dM5:function dM5(d){this.a=d},
dLW:function dLW(d,e){this.a=d
this.b=e},
dM6:function dM6(d){this.a=d},
dLV:function dLV(d){this.a=d},
dM7:function dM7(d){this.a=d},
dLU:function dLU(d){this.a=d},
dM8:function dM8(d){this.a=d},
dM9:function dM9(d){this.a=d},
dLT:function dLT(d){this.a=d},
biL:function biL(d,e,f){this.b=d
this.c=e
this.a=f},
Ug:function Ug(d){this.a=d},
aBR:function aBR(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
e6p:function e6p(d,e){this.a=d
this.b=e},
e6q:function e6q(d,e,f){this.a=d
this.b=e
this.c=f},
e6o:function e6o(d,e,f){this.a=d
this.b=e
this.c=f},
e6r:function e6r(d){this.a=d},
e6n:function e6n(d){this.a=d},
e6v:function e6v(d){this.a=d},
e6u:function e6u(d,e){this.a=d
this.b=e},
e6t:function e6t(d,e){this.a=d
this.b=e},
e6w:function e6w(d,e){this.a=d
this.b=e},
e6s:function e6s(d,e){this.a=d
this.b=e},
e6x:function e6x(d){this.a=d},
Us:function Us(d){this.a=d},
aC9:function aC9(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eeU:function eeU(d){this.a=d},
eeV:function eeV(d){this.a=d},
eeS:function eeS(d,e){this.a=d
this.b=e},
eeT:function eeT(d){this.a=d},
eeR:function eeR(d){this.a=d},
eeW:function eeW(d){this.a=d},
eeX:function eeX(d){this.a=d},
eeY:function eeY(d){this.a=d},
eeZ:function eeZ(d,e){this.a=d
this.b=e},
UN:function UN(d){this.a=d},
bhY:function bhY(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
etb:function etb(){},
etk:function etk(){},
etg:function etg(d){this.a=d},
etf:function etf(){},
eth:function eth(d,e){this.a=d
this.b=e},
ete:function ete(d,e){this.a=d
this.b=e},
eti:function eti(d){this.a=d},
etd:function etd(d,e){this.a=d
this.b=e},
etj:function etj(d){this.a=d},
etc:function etc(d){this.a=d},
Ue:function Ue(d){this.a=d},
bhr:function bhr(d,e,f,g,h,i,j,k){var _=this
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
_.kE$=g
_.fH$=h
_.fd$=i
_.bp$=j
_.a6$=k
_.c=_.a=null},
e54:function e54(){},
e55:function e55(){},
e4Y:function e4Y(d){this.a=d},
e4X:function e4X(d){this.a=d},
e4Z:function e4Z(d){this.a=d},
e4W:function e4W(d){this.a=d},
e5_:function e5_(d){this.a=d},
e4V:function e4V(d){this.a=d},
e50:function e50(d,e){this.a=d
this.b=e},
e4U:function e4U(d,e){this.a=d
this.b=e},
e51:function e51(d){this.a=d},
e4T:function e4T(d,e){this.a=d
this.b=e},
e52:function e52(d){this.a=d},
e4S:function e4S(d,e){this.a=d
this.b=e},
e53:function e53(d){this.a=d},
e4R:function e4R(d,e){this.a=d
this.b=e},
bay:function bay(d,e,f){this.c=d
this.d=e
this.a=f},
aIY:function aIY(){},
bu6:function bu6(){},
aJg:function aJg(){},
bub:function bub(){},
aJL:function aJL(){},
bul:function bul(){},
aKe:function aKe(){},
bux:function bux(){},
jA(d,e,f,g,h,i){return new B.b4c(h,d,f,g,i,e,null)},
ha1(d,e,f,g){var w=null
return C.cg(w,w,!0,w,new B.fC_(g,e,f),d,w,!0,!0,x.H)},
hu(d,e,f,g,h,i,j){return new B.atA(f,j,i,h,g,d,e,null)},
qt(d,e,f){return B.hW1(d,e,f)},
hW1(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qt=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aU.ah$.x.h(0,e)
n=n==null?null:n.gb6()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.lU(2),$async$qt)
case 7:q=h
w=8
return C.b(q.hg(A.fQ),$async$qt)
case 8:p=h
if(p==null){w=1
break}o=J.f8(A.dD.gaO(p))
w=9
return C.b(B.cm6(C.a([B.h_9(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qt)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.I(x.gV).f.P(D.aKr)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qt,v)},
hrB(b4,b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=A.o.am(22050*b5,1000),b1=b0*2,b2=new DataView(new ArrayBuffer(44+b1)),b3=new B.cbM(b2)
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
w.dU(3)
v=3
u=0.006
t=!1
s=0
switch(b8){case"piano":r=D.cHR
q=D.cML
v=3.4
break
case"organ":r=D.cLK
q=D.cZK
u=0.02
t=!0
break
case"bell":r=D.cDO
q=D.cCL
v=2.4
break
case"pluck":r=D.cHQ
q=D.coN
v=7
break
case"synth":r=D.d_z
q=D.d1b
u=0.012
t=!0
break
case"flute":r=D.d4Y
q=D.c_s
u=0.07
t=!0
s=0.035
break
default:r=D.alq
q=D.alq}b1=r.length
p=C.c0(b1,0,!1,x.i)
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
break A}if(o){a4=A.k.G(d/6.283185307179586,1)*1.2-0.6
break A}a4=Math.sin(d)
break A}a5=a4*(Math.min(1,a0/120)*Math.pow(a2,1.6))}b2.setInt16(44+a0*2,A.o.D(A.k.U(a5*0.8*32e3),-32768,32767),!0)}return J.f8(A.dD.gaO(b2))},
dD(d,e,f,g,h,i){return B.hrC(d,e,f,g,h,i)},
hrC(d,e,f,g,h,i){var w=0,v=C.j(x.H),u=1,t=[],s,r,q,p,o,n
var $async$dD=C.e(function(j,k){if(j===1){t.push(k)
w=u}for(;;)switch(w){case 0:u=3
s=""+A.k.U(d)+"|"+f+"|"+i+"|"+C.t(g)+"|"+e
r=$.hrA.ce(0,s,new B.cbO(d,f,i,g,e))
if($.cbL.length<12){p=C.agy()
p.LN(A.aIr)
$.cbL.push(p)}p=$.fXs
$.fXs=p+1
q=$.cbL[A.o.G(p,$.cbL.length)]
w=6
return C.b(J.heW(q,new C.a1B(r,null),h),$async$dD)
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
return C.i($async$dD,v)},
l5(d,e,f,g){var w,v=$.apL
if(v==="music")return B.dD(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return B.dD(261.63*v,w,f,0,g,"sine")}return B.vp(v,e,f,g)},
vp(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return B.dD(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return B.dD(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return B.dD(140+A.o.G(e,12)*9,"",150,0.9,g,v)
case"bubble":return B.dD(260+A.o.G(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":B.dD(t,"",160,-0.7,g*0.4,w)
return B.dD(900,"",90,0,g*0.45,u)
case"zap":return B.dD(t*3,"",150,1.6,g*0.4,"square")
case"click":return B.dD(2600+A.o.G(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":B.dD(320,"",220,-0.7,g*0.35,v)
return B.dD(1500,"",200,0,g*0.22,u)
case"organic":return B.dD(85+A.o.G(e,12)*5,"",190,1.1,g,v)
case"lab":return B.dD(t*1.6,"",140,-0.3,g*0.55,w)
default:return B.dD(t,"",s,0,g*0.5,w)}},
AQ(d,e,f,g){var w,v,u,t,s,r,q,p=$.apL
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.K)(e),++w)B.l5(d,e[w],f,g)
return}for(p=C.d9(e,0,C.dI(4,"count",x.S),C.U(e).c),v=p.$ti,p=new C.bV(p,p.gJ(0),v.k("bV<ai.E>")),u=x.H,v=v.k("ai.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)B.l5(d,s,f,g)
else C.bO(new C.b9(1000*q),new B.cbN(d,s,f,g),u)}},
a6D(d,e){var w="sine",v="noise"
switch(d){case"kick":B.dD(95,"",200,1.8,e,w)
break
case"snare":B.dD(220,"",140,0,e*0.65,v)
break
case"hat":B.dD(5000,"",50,0,e*0.35,v)
break
case"open":B.dD(5200,"",220,0,e*0.35,v)
break
case"clap":B.dD(1100,"",100,0,e*0.5,v)
break
case"tom":B.dD(150,"",230,1,e,w)
break
case"low":B.dD(100,"",260,0.9,e,w)
break
case"rim":B.dD(1700,"",60,0,e*0.4,"square")
break
case"cow":B.dD(820,"",240,0,e*0.3,"square")
break
case"crash":B.dD(3200,"",650,0,e*0.4,v)
break
case"shake":B.dD(7000,"",90,0,e*0.3,v)
break
default:B.dD(60,"",300,0,e,w)}},
yK(d){return B.hqQ(d)},
hqQ(d){var w=0,v=C.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
var $async$yK=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.ay(),$async$yK)
case 7:r=f
q=C.aT(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=C.T(x.N,x.z)
w=1
break}p=A.R.aF(0,q,null)
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
return C.i($async$yK,v)},
vm(d,e){return B.hqR(d,e)},
hqR(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$vm=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ay(),$async$vm)
case 6:s=g
w=7
return C.b(s.ap("String","ngmy_play_progress_v1_"+d,A.R.an(e,null)),$async$vm)
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
return C.i($async$vm,v)},
b4c:function b4c(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
co0:function co0(d){this.a=d},
co1:function co1(d,e){this.a=d
this.b=e},
fC_:function fC_(d,e,f){this.a=d
this.b=e
this.c=f},
fBZ:function fBZ(d){this.a=d},
dx:function dx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cnX:function cnX(d){this.a=d},
eH:function eH(d,e,f){this.c=d
this.d=e
this.a=f},
atA:function atA(d,e,f,g,h,i,j,k){var _=this
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
cnW:function cnW(d){this.a=d},
Eg:function Eg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
co2:function co2(d){this.a=d},
mk:function mk(){},
cnY:function cnY(d,e,f){this.a=d
this.b=e
this.c=f},
co_:function co_(d){this.a=d},
cnZ:function cnZ(){},
cbM:function cbM(d){this.a=d},
cbO:function cbO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cbN:function cbN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqx(){var w=0,v=C.j(x.cL),u,t
var $async$cqx=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=B
w=3
return C.b($.tD().bbD("assets/data/world110.json"),$async$cqx)
case 3:u=t.hvm(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cqx,v)},
hvm(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.R.aF(0,a2,null)),a1=C.a([],x.dO)
for(w=J.aV(a0),v=x.n,u=x.b,t=x.a,s=x.gO;w.C();){r=t.a(w.gT(w))
q=C.a([],s)
for(p=J.a8(r),o=J.aV(d.a(p.h(r,"r")));o.C();){n=o.gT(o)
m=C.a([],u)
for(l=J.aV(d.a(n));l.C();){k=l.gT(l)
j=J.a8(k)
m.push(C.a([C.f6(j.h(k,0)),C.f6(j.h(k,1))],v))}q.push(m)}o=C.cN(p.h(r,"n"))
m=C.cN(p.h(r,"a"))
l=C.cN(p.h(r,"ct"))
j=C.cN(p.h(r,"sr"))
i=C.f6(p.h(r,"pop"))
h=C.f6(p.h(r,"gdp"))
g=C.cN(p.h(r,"inc"))
f=C.ae("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aO6(g,f,"",0)
f=C.f6(J.q(p.h(r,"c"),0))
p=C.f6(J.q(p.h(r,"c"),1))
e=new B.a9k(o,m,l,j,i,h,g,f,p,q)
e.btw(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new B.a9l(a1)},
ffY(d){if(d>=1e12)return A.k.a9(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.a9(d/1e9,2)+" billion"
if(d>=1e6)return A.k.a9(d/1e6,1)+" million"
if(d>=1000)return A.k.a9(d/1000,1)+" thousand"
return A.k.a9(d,0)},
FJ(d){var w,v,u,t=A.o.u(A.k.U(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.G(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
a9k:function a9k(d,e,f,g,h,i,j,k,l,m){var _=this
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
a9l:function a9l(d){this.a=d},
uy:function uy(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
NQ:function NQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
xp:function xp(d,e,f){this.a=d
this.b=e
this.c=f},
NP:function NP(d){this.a=0
this.b=d
this.c=0},
hxf(d,e,f){return $.hxg.ce(0,d+"|"+C.t(e)+"|"+f.l(),new B.d85(d,e,f))},
TL:function TL(d){this.a=d},
aBe:function aBe(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.kE$=k
_.fH$=l
_.fd$=m
_.bp$=n
_.a6$=o
_.c=_.a=null},
dRs:function dRs(d){this.a=d},
dRr:function dRr(d,e){this.a=d
this.b=e},
dQV:function dQV(d){this.a=d},
dQT:function dQT(d){this.a=d},
dQU:function dQU(d,e,f){this.a=d
this.b=e
this.c=f},
dQS:function dQS(d){this.a=d},
dQR:function dQR(){},
dQQ:function dQQ(d){this.a=d},
dRd:function dRd(d,e){this.a=d
this.b=e},
dRe:function dRe(d,e){this.a=d
this.b=e},
dR2:function dR2(d){this.a=d},
dR3:function dR3(d){this.a=d},
dR1:function dR1(d){this.a=d},
dR4:function dR4(d){this.a=d},
dQW:function dQW(d,e){this.a=d
this.b=e},
dQX:function dQX(d){this.a=d},
dRf:function dRf(d,e){this.a=d
this.b=e},
dR0:function dR0(d,e){this.a=d
this.b=e},
dRj:function dRj(d){this.a=d},
dRc:function dRc(d){this.a=d},
dRk:function dRk(d,e){this.a=d
this.b=e},
dRb:function dRb(d,e){this.a=d
this.b=e},
dRl:function dRl(d){this.a=d},
dRa:function dRa(d,e){this.a=d
this.b=e},
dRm:function dRm(d){this.a=d},
dR9:function dR9(d,e){this.a=d
this.b=e},
dRn:function dRn(d){this.a=d},
dR8:function dR8(d,e){this.a=d
this.b=e},
dRo:function dRo(d){this.a=d},
dR7:function dR7(d,e){this.a=d
this.b=e},
dRp:function dRp(d){this.a=d},
dR6:function dR6(d){this.a=d},
dRq:function dRq(d){this.a=d},
dR5:function dR5(d){this.a=d},
dRg:function dRg(d){this.a=d},
dR_:function dR_(d){this.a=d},
dRh:function dRh(d){this.a=d},
dQZ:function dQZ(d){this.a=d},
dRi:function dRi(d){this.a=d},
dQY:function dQY(d){this.a=d},
dQP:function dQP(){},
dQO:function dQO(d){this.a=d},
dQN:function dQN(d){this.a=d},
bcM:function bcM(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d85:function d85(d,e,f){this.a=d
this.b=e
this.c=f},
d86:function d86(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aJm:function aJm(){},
aJn:function aJn(){},
adm(d,e,f,g,h){return new B.br_(d,e,f,g,h)},
br_:function br_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f4O:function f4O(){},
f4P:function f4P(){},
f4Q:function f4Q(){},
f4R:function f4R(){},
f4S:function f4S(){},
f4T:function f4T(){},
f4U:function f4U(){},
UQ:function UQ(d){this.a=d},
bi0:function bi0(){this.d=$
this.c=this.a=null},
etZ:function etZ(d){this.a=d},
eu_:function eu_(d){this.a=d},
etY:function etY(d){this.a=d},
eu0:function eu0(){},
etX:function etX(d,e){this.a=d
this.b=e},
etW:function etW(d){this.a=d},
hxH(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.f5()
v.dU(w)
t.push(v.ag()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.f5()
v.dU(w+900)
u.push(2.2+v.ag())}return new B.bhO(new C.cq(null,x.A),new B.NP(A.cG),A.J,A.at,t,u,$,A.bw,0,C.a([],x.X),null,null)},
hxJ(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hxI(d){return 1.5+1.6*Math.log(d.d/1000+1)},
h0l(d,e,f){return $.hyi.ce(0,d+"|"+C.t(e)+"|"+f.l(),new B.eO8(d,e,f))},
UB:function UB(d){this.a=d},
bhO:function bhO(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.kE$=k
_.fH$=l
_.fd$=m
_.bp$=n
_.a6$=o
_.c=_.a=null},
em7:function em7(d,e){this.a=d
this.b=e},
emi:function emi(d,e){this.a=d
this.b=e},
emj:function emj(d,e){this.a=d
this.b=e},
emf:function emf(d){this.a=d},
emg:function emg(d){this.a=d},
emh:function emh(d){this.a=d},
emk:function emk(d){this.a=d},
eme:function eme(d){this.a=d},
eml:function eml(d,e){this.a=d
this.b=e},
emm:function emm(d){this.a=d},
emd:function emd(d,e){this.a=d
this.b=e},
emn:function emn(d){this.a=d},
emc:function emc(d,e){this.a=d
this.b=e},
emo:function emo(d){this.a=d},
emb:function emb(d){this.a=d},
emp:function emp(d){this.a=d},
ema:function ema(d){this.a=d},
emq:function emq(d){this.a=d},
em9:function em9(d){this.a=d},
emr:function emr(d){this.a=d},
em8:function em8(d){this.a=d},
em6:function em6(){},
em5:function em5(){},
em4:function em4(d){this.a=d},
em3:function em3(d){this.a=d},
bp2:function bp2(d,e){this.b=d
this.a=e},
eO8:function eO8(d,e,f){this.a=d
this.b=e
this.c=f},
eO9:function eO9(){},
eOa:function eOa(){},
TM:function TM(d){this.a=d},
aBf:function aBf(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.kE$=l
_.fH$=m
_.fd$=n
_.bp$=o
_.a6$=p
_.c=_.a=null},
dRw:function dRw(){},
dRZ:function dRZ(){},
dRL:function dRL(d,e){this.a=d
this.b=e},
dRC:function dRC(d,e){this.a=d
this.b=e},
dRM:function dRM(d){this.a=d},
dRB:function dRB(d){this.a=d},
dRN:function dRN(d){this.a=d},
dRK:function dRK(d){this.a=d},
dRR:function dRR(d){this.a=d},
dRJ:function dRJ(d){this.a=d},
dRS:function dRS(d){this.a=d},
dRI:function dRI(d,e){this.a=d
this.b=e},
dRT:function dRT(d){this.a=d},
dRU:function dRU(d){this.a=d},
dRH:function dRH(d,e){this.a=d
this.b=e},
dRV:function dRV(d){this.a=d},
dRG:function dRG(d,e){this.a=d
this.b=e},
dRW:function dRW(d){this.a=d},
dRF:function dRF(d,e){this.a=d
this.b=e},
dRX:function dRX(d){this.a=d},
dRE:function dRE(d,e){this.a=d
this.b=e},
dRY:function dRY(d){this.a=d},
dRD:function dRD(d){this.a=d},
dRO:function dRO(d){this.a=d},
dRA:function dRA(d){this.a=d},
dRP:function dRP(d){this.a=d},
dRz:function dRz(d){this.a=d},
dRQ:function dRQ(d){this.a=d},
dRy:function dRy(d){this.a=d},
dRv:function dRv(d){this.a=d},
dRu:function dRu(){},
dRx:function dRx(d,e){this.a=d
this.b=e},
dRt:function dRt(d){this.a=d},
b81:function b81(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
Ut:function Ut(d){this.a=d},
bhL:function bhL(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.fc$=e
_.kE$=f
_.fH$=g
_.fd$=h
_.bp$=i
_.a6$=j
_.c=_.a=null},
ef1:function ef1(d,e){this.a=d
this.b=e},
ef2:function ef2(d,e){this.a=d
this.b=e},
ef0:function ef0(d,e){this.a=d
this.b=e},
ef3:function ef3(d,e){this.a=d
this.b=e},
ef_:function ef_(d,e){this.a=d
this.b=e},
boB:function boB(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eMi:function eMi(d){this.a=d},
aJo:function aJo(){},
bud:function bud(){},
aJX:function aJX(){},
bur:function bur(){},
aK_:function aK_(){},
but:function but(){},
hxF(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.f5()
v.dU(w)
v=v.ag()
u=new C.f5()
u.dU(w+500)
s.push(new C.u(v,u.ag()))}return new B.bgt(new C.cq(null,x.A),new B.NP(A.cG),t,A.at,s,$,A.bw,0,C.a([],x.X),null,null)},
Oh:function Oh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
SP:function SP(d){this.a=d},
bgt:function bgt(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.kE$=j
_.fH$=k
_.fd$=l
_.bp$=m
_.a6$=n
_.c=_.a=null},
dzG:function dzG(){},
dzu:function dzu(){},
dzv:function dzv(d,e){this.a=d
this.b=e},
dzw:function dzw(d,e){this.a=d
this.b=e},
dzt:function dzt(d){this.a=d},
dzs:function dzs(d){this.a=d},
dzy:function dzy(d){this.a=d},
dzr:function dzr(d,e){this.a=d
this.b=e},
dzz:function dzz(d){this.a=d},
dzq:function dzq(d){this.a=d},
dzA:function dzA(d){this.a=d},
dzp:function dzp(d){this.a=d},
dzB:function dzB(d){this.a=d},
dzo:function dzo(d){this.a=d},
dzC:function dzC(d){this.a=d},
dzn:function dzn(d){this.a=d},
dzD:function dzD(d){this.a=d},
dzm:function dzm(d){this.a=d},
dzE:function dzE(d){this.a=d},
dzl:function dzl(d){this.a=d},
dzF:function dzF(d){this.a=d},
dzk:function dzk(d){this.a=d},
dzx:function dzx(d){this.a=d},
dzj:function dzj(d){this.a=d},
b7q:function b7q(d,e){this.b=d
this.a=e},
ad0:function ad0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
TI:function TI(d){this.a=d},
bgT:function bgT(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.kE$=q
_.fH$=r
_.fd$=s
_.bp$=t
_.a6$=u
_.c=_.a=null},
dQ3:function dQ3(d){this.a=d},
dPU:function dPU(d,e){this.a=d
this.b=e},
dPV:function dPV(d,e){this.a=d
this.b=e},
dPT:function dPT(d,e){this.a=d
this.b=e},
dPW:function dPW(d){this.a=d},
dPS:function dPS(d){this.a=d},
dPX:function dPX(d){this.a=d},
dPR:function dPR(d,e){this.a=d
this.b=e},
dPY:function dPY(d){this.a=d},
dPQ:function dPQ(d,e){this.a=d
this.b=e},
dPZ:function dPZ(d){this.a=d},
dPP:function dPP(d,e){this.a=d
this.b=e},
dQ_:function dQ_(d){this.a=d},
dPO:function dPO(d,e){this.a=d
this.b=e},
dQ0:function dQ0(d){this.a=d},
dPN:function dPN(d){this.a=d},
dQ1:function dQ1(d){this.a=d},
dPM:function dPM(d){this.a=d},
dQ2:function dQ2(d){this.a=d},
dPL:function dPL(d){this.a=d},
bcC:function bcC(d,e){this.b=d
this.a=e},
d5e:function d5e(d){this.a=d},
Up:function Up(d){this.a=d},
bhK:function bhK(d,e,f,g,h,i,j,k){var _=this
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
_.kE$=g
_.fH$=h
_.fd$=i
_.bp$=j
_.a6$=k
_.c=_.a=null},
eeI:function eeI(d,e){this.a=d
this.b=e},
eeJ:function eeJ(d){this.a=d},
eeH:function eeH(d){this.a=d},
eeK:function eeK(d){this.a=d},
eeG:function eeG(d){this.a=d},
eeL:function eeL(d){this.a=d},
eeF:function eeF(d){this.a=d},
eeM:function eeM(d){this.a=d},
eeE:function eeE(d){this.a=d},
eeN:function eeN(d){this.a=d},
eeD:function eeD(d,e){this.a=d
this.b=e},
eeO:function eeO(d){this.a=d},
eeC:function eeC(d,e){this.a=d
this.b=e},
eeP:function eeP(d){this.a=d},
eeB:function eeB(d,e){this.a=d
this.b=e},
eeQ:function eeQ(d){this.a=d},
eeA:function eeA(d,e){this.a=d
this.b=e},
bnT:function bnT(d,e){this.b=d
this.a=e},
aIV:function aIV(){},
bu5:function bu5(){},
aJj:function aJj(){},
buc:function buc(){},
aJW:function aJW(){},
buq:function buq(){},
h_9(d,e,f){var w,v
C.fN(0,0,!1)
w=new C.l8(e,f,$,null)
v=w.bDq(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
hL5(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=C.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=C.a([],x.ez)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,C.K)(w),++q){p=w[q]
u.push(C.E(["k",p.b,"x",C.nF(A.k.a9(p.c,4)),"y",C.nF(A.k.a9(p.d,4)),"v",p.e,"l",C.nF(A.k.a9(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",C.nF(A.k.a9(p.as,3)),"ch",p.at,"vc",C.nF(A.k.a9(p.z,3)),"s",C.nF(A.k.a9(p.ch,2))],s,r))}w=C.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,C.K)(t),++q){m=t[q]
w.push(C.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=C.B(f,C.a2(f).k("cn.E"))
A.d.fn(l)
return A.R.an(C.E(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
hUp(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.R.aF(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a7(h)
A.d.a7(a6.b)
v=C.a([],x.fs)
g=x.Q
f=g.a(J.q(w,"parts"))
f=J.aV(f==null?A.cF:f)
while(f.C()){u=f.gT(f)
t=i.a(u)
e=C.aT(J.q(t,"k"))
s=e==null?"":e
if(!$.pQ().al(0,s)){J.cd(v,null)
continue}d=s
a0=C.aN(J.q(t,"x"))
if(a0==null)a0=0.5
a1=C.aN(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new B.rY(a2,d,a0,a1)
a3.anE(a2,d,a0,a1)
h.push(a3)
r=a3
a1=C.aN(J.q(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=C.aN(J.q(t,"l"))
if(d==null)d=r.f
r.f=d
d=C.aN(J.q(t,"o"))
if(d==null)d=r.r
r.r=d
d=C.k7(J.q(t,"on"))
if(d==null)d=r.w
r.w=d
d=C.k7(J.q(t,"b"))
r.x=d===!0
d=C.aT(J.q(t,"bw"))
if(d==null)d=""
r.ay=d
d=C.aN(J.q(t,"c"))
if(d==null)d=r.as
r.as=d
d=C.aN(J.q(t,"ch"))
r.at=A.k.N(d==null?0:d)
d=C.aN(J.q(t,"vc"))
if(d==null)d=0
r.z=d
d=C.aN(J.q(t,"s"))
r.ch=A.k.D(d==null?1:d,1,2.6)
J.cd(v,r)}i=g.a(J.q(w,"wires"))
i=J.aV(i==null?A.cF:i)
h=x.j
while(i.C()){q=i.gT(i)
p=h.a(q)
f=C.aN(J.q(p,0))
o=f==null?a5:A.k.N(f)
f=C.aN(J.q(p,2))
n=f==null?a5:A.k.N(f)
if(o==null||n==null||o<0||n<0||o>=J.ab(v)||n>=J.ab(v))continue
m=J.q(v,o)
l=J.q(v,n)
if(m!=null&&l!=null)a6.aig(m,A.k.N(C.f6(J.q(p,1))),l,A.k.N(C.f6(J.q(p,3))))}i=C.aN(J.q(w,"challenge"))
i=A.k.N(i==null?0:i)
k=C.b0(x.S)
h=g.a(J.q(w,"done"))
h=J.aV(h==null?A.cF:h)
while(h.C()){j=h.gT(h)
J.cd(k,A.k.N(C.f6(j)))}return new C.bly(i,k)}catch(a4){return a5}},
fhF(){var w=0,v=C.j(x.dk),u,t=2,s=[],r,q,p,o,n
var $async$fhF=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=C
n=J
w=7
return C.b(C.ay(),$async$fhF)
case 7:r=o.aT(n.q(e.a,"ngmy_electronics_lab_v1"))
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
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$fhF,v)},
bAQ(d){return B.hVY(d)},
hVY(d){var w=0,v=C.j(x.H),u=1,t=[],s,r
var $async$bAQ=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return C.b(C.ay(),$async$bAQ)
case 7:w=6
return C.b(f.ap("String","ngmy_electronics_lab_v1",d),$async$bAQ)
case 6:u=1
w=5
break
case 3:u=2
r=t.pop()
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$bAQ,v)},
cm6(d,e){var w=0,v=C.j(x.g7),u
var $async$cm6=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.fOP().wu(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cm6,v)}},D,I,H,L,V,A0,A1,Ah,Ai,A2,A3
J=c[1]
C=c[0]
A=c[2]
A4=c[113]
W=c[103]
X=c[100]
A5=c[27]
E=c[88]
P=c[97]
A6=c[105]
Y=c[109]
Z=c[111]
N=c[118]
A7=c[114]
G=c[95]
A8=c[86]
A9=c[104]
A_=c[110]
Aa=c[65]
T=c[74]
Ab=c[81]
Ac=c[78]
Q=c[84]
U=c[117]
Ad=c[108]
R=c[87]
M=c[92]
Ae=c[115]
S=c[112]
Af=c[69]
Ag=c[107]
O=c[94]
K=c[106]
F=c[89]
B=a.updateHolder(c[17],B)
D=c[85]
I=c[99]
H=c[40]
L=c[90]
V=c[96]
A0=c[101]
A1=c[93]
Ah=c[91]
Ai=c[98]
A2=c[102]
A3=c[116]
B.aw.prototype={
af(d,e){return new B.aw(this.a+e.a,this.b+e.b,this.c+e.c)},
aB(d,e){return new B.aw(this.a-e.a,this.b-e.b,this.c-e.c)},
aJ(d,e){return new B.aw(this.a*e,this.b*e,this.c*e)},
a1X(d){var w=this.b,v=d.c,u=this.c,t=d.b,s=d.a,r=this.a
return new B.aw(w*v-u*t,u*s-r*v,r*t-w*s)},
gSp(){var w=this.a,v=this.b,u=this.c
return Math.sqrt(w*w+v*v+u*u)},
gqf(d){var w=this,v=w.gSp()
return v<1e-9?w:new B.aw(w.a/v,w.b/v,w.c/v)}}
B.vu.prototype={}
B.fe.prototype={}
B.GO.prototype={}
B.a80.prototype={}
B.GU.prototype={
bd4(d,e,f,g,h,i,j){var w=this,v=i.gqf(0)
w.a.push(new B.vu(C.a([d,e,f,g],x.o),v,h,w.b,0,w.d,!0,w.c,w.e))},
be8(d,e,f,g){var w=this,v=e.aB(0,d).a1X(f.aB(0,d)),u=v.gqf(0)
w.a.push(new B.vu(C.a([d,e,f],x.o),u,g,w.b,0,w.d,!0,w.c,w.e))},
a1y(d,e,f,g,h,i){var w,v,u,t=e.a/2,s=e.b/2,r=e.c/2,q=new B.bTw(this,i,new B.bTx(0,d),new B.bTy(0),f,h),p=-t,o=-s,n=2*t,m=2*s
q.$4(new B.aw(0,0,1),new B.aw(p,o,r),new B.aw(n,0,0),new B.aw(0,m,0))
w=-r
q.$4(new B.aw(0,0,-1),new B.aw(t,o,w),new B.aw(-2*t,0,0),new B.aw(0,m,0))
v=-2*r
q.$4(new B.aw(1,0,0),new B.aw(t,o,r),new B.aw(0,0,v),new B.aw(0,m,0))
u=2*r
q.$4(new B.aw(-1,0,0),new B.aw(p,o,w),new B.aw(0,0,u),new B.aw(0,m,0))
if(g){q.$4(new B.aw(0,1,0),new B.aw(p,s,r),new B.aw(n,0,0),new B.aw(0,0,v))
q.$4(new B.aw(0,-1,0),new B.aw(p,o,w),new B.aw(n,0,0),new B.aw(0,0,u))}},
qX(d,e,f,g){return this.a1y(d,e,f,!0,0,g)},
Av(d,e,f,g,h){return this.a1y(d,e,f,!0,g,h)},
h5(d,e,f,g){return this.a1y(d,e,f,!0,g,1)},
xM(d,e,f){return this.a1y(d,e,f,!0,0,1)},
b6n(d,e,f,g,h){return this.a1y(d,e,f,g,h,1)},
a2_(b3,b4,b5,b6,b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=b4.aB(0,b3).gqf(0),a8=a7.b,a9=a7.a1X(Math.abs(a8)<0.9?D.a6a:D.a6c).gqf(0),b0=a7.a1X(a9).gqf(0),b1=b9<0?b5:b9,b2=new B.bTz(a9,c1,b0)
for(w=a6.a,v=b3.a,u=b3.b,t=b3.c,s=b4.a,r=b4.b,q=b4.c,p=x.o,o=a7.a*-1,a8*=-1,n=a7.c*-1,m=0;m<c1;){l=b2.$1(m);++m
k=b2.$1(m)
j=l.a
i=k.a
h=l.b
g=k.b
f=l.c
e=k.c
d=new B.aw(j+i,h+g,f+e).gqf(0)
a0=v+j*b5
a1=u+h*b5
a2=t+f*b5
a3=v+i*b5
a4=u+g*b5
a5=t+e*b5
i=s+i*b1
g=r+g*b1
e=q+e*b1
j=s+j*b1
h=r+h*b1
f=q+f*b1
w.push(new B.vu(C.a([new B.aw(a0,a1,a2),new B.aw(a3,a4,a5),new B.aw(i,g,e),new B.aw(j,h,f)],p),d,b6,a6.b,c0,a6.d,b8,a6.c,a6.e))
if(b7){w.push(new B.vu(C.a([b3,new B.aw(a3,a4,a5),new B.aw(a0,a1,a2)],p),new B.aw(o,a8,n),b6,a6.b,c0,a6.d,!1,a6.c,a6.e))
w.push(new B.vu(C.a([b4,new B.aw(j,h,f),new B.aw(i,g,e)],p),a7,b6,a6.b,c0,a6.d,!1,a6.c,a6.e))}}},
b8d(d,e,f,g,h,i,j){return this.a2_(d,e,f,g,!0,!1,h,i,j)},
lm(d,e,f,g,h,i){return this.a2_(d,e,f,g,!0,!1,-1,h,i)},
b8e(d,e,f,g,h,i,j,k){return this.a2_(d,e,f,g,h,i,-1,j,k)},
b8b(d,e,f,g,h){return this.a2_(d,e,f,g,!0,!1,-1,0,h)},
b8c(d,e,f,g,h,i,j){return this.a2_(d,e,f,g,h,!1,-1,i,j)},
pS(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=new B.bTv(b0,b1)
for(w=a5.a,v=a7.a,u=a7.b,t=a7.c,s=x.o,r=0;r<b0;r=q)for(q=r+1,p=0;p<b1;p=n){o=a6.$2(r,p)
n=p+1
m=a6.$2(r,n)
l=a6.$2(q,n)
k=a6.$2(q,p)
j=o.a
i=o.b
h=o.c
g=m.a
f=m.b
e=m.c
d=l.a
a0=l.b
a1=l.c
a2=k.a
a3=k.b
a4=k.c
w.push(new B.vu(C.a([new B.aw(v+j*a8,u+i*a8,t+h*a8),new B.aw(v+g*a8,u+f*a8,t+e*a8),new B.aw(v+d*a8,u+a0*a8,t+a1*a8),new B.aw(v+a2*a8,u+a3*a8,t+a4*a8)],s),new B.aw(j+g+d+a2,i+f+a0+a3,h+e+a1+a4).gqf(0),a9,a5.b,b2,a5.d,!1,a5.c,a5.e))}},
b6g(d,e,f,g){return this.pS(d,e,f,6,10,g)},
aFm(d,e,f,g,h,i,j,k){var w,v,u,t,s
for(w=0;v=w+1,v<d.length;w=v){u=d[v]
t=d[w]
if(new B.aw(u.a-t.a,u.b-t.b,u.c-t.c).gSp()<0.000001)continue
u=d[w]
t=d[v]
if(g)s=w===0||w===d.length-2
else s=!1
this.b8e(u,t,e,f,s,h,j,k)}if(i)for(u=e*0.98,w=1;v=w+1,v<d.length;w=v)this.pS(d[w],u,f,4,k,j)},
nr(d,e,f,g,h,i){return this.aFm(d,e,f,!0,!1,g,h,i)},
bea(d,e,f,g,h,i,j){return this.aFm(d,e,f,g,!1,h,i,j)},
Lb(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
a3.b8c(a4,a5,a6,a8,!1,a9,b0)
w=a5.aB(0,a4).gqf(0)
v=w.a1X(Math.abs(w.b)<0.9?D.a6a:D.a6c).gqf(0)
u=new B.bTA(v,b0,w.a1X(v).gqf(0))
for(t=[new C.z(a4,w.aJ(0,-1)),new C.z(a5,w)],s=a3.a,r=x.o,q=0;q<2;++q){p=t[q]
o=p.a
n=p.b
for(p=o.a,m=o.b,l=o.c,k=0;k<b0;){j=u.$1(k)
i=j.a
h=j.b
j=j.c
g=u.$1(k)
f=g.a
e=g.b
g=g.c;++k
d=u.$1(k)
a0=d.a
a1=d.b
d=d.c
a2=u.$1(k)
s.push(new B.vu(C.a([new B.aw(p+i*a7,m+h*a7,l+j*a7),new B.aw(p+f*a6,m+e*a6,l+g*a6),new B.aw(p+a0*a6,m+a1*a6,l+d*a6),new B.aw(p+a2.a*a7,m+a2.b*a7,l+a2.c*a7)],r),n,a8,a3.b,a9,a3.d,!1,a3.c,a3.e))}}},
cN1(d,e,f,g,h,i){return this.Lb(d,e,f,g,h,i,16)}}
B.Ae.prototype={
wn(d,e,f,g){var w=this
w.r=f
w.w=d
w.x=g
w.y=e
w.b_()},
FW(d,e){return this.wn(d,null,e,null)},
aFb(d){var w,v,u,t=this
if(!(t.r!=null||t.w!=null||t.x!=null||t.y!=null))return
w=1-Math.exp(-d*7)
v=t.r
if(v!=null){u=B.zh(t.d,v,w)
t.d=u
if(u.aB(0,v).gSp()<0.02){v=t.r
v.toString
t.d=v
t.r=null}}v=t.w
if(v!=null){u=t.c
u+=(v-u)*w
t.c=u
if(Math.abs(u-v)<0.05){t.c=v
t.w=null}}v=t.x
if(v!=null){u=t.a
u+=(v-u)*w
t.a=u
if(Math.abs(u-v)<0.003){t.a=v
t.x=null}}v=t.y
if(v!=null){u=t.b
u+=(v-u)*w
t.b=u
if(Math.abs(u-v)<0.003){t.b=v
t.y=null}}t.b_()},
amf(d){var w=this
w.w=null
w.c=A.k.D(w.c*d,6,w.f)
w.b_()}}
B.aSQ.prototype={
cKZ(d){var w,v,u,t
for(w=this.a,v=w.length-1,u=d.a,t=d.b;v>=0;--v)if(w[v].a.gbH().a.contains(u,t))return w[v].b
return 0}}
B.asx.prototype={
gbdW(d){var w=this.r
w=w==null?null:w.a
return w==null?0:w},
a5(d6,d7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0=this,d1=null,d2=d7.a,d3=d7.b,d4=0+d2,d5=0+d3
$.V()
w=C.L()
v=d0.x
u=C.ar(v,A.c,0.06)
u.toString
w.sar(new C.a5(A.b1,A.b3,A.x,C.a([u,v],x.O),d1,d1).av(0,new C.a9(0,0,d4,d5)))
d6.aW(new C.a9(0,0,d4,d5),w)
t=Math.min(d2,d3)*1.15
s=d2/2
r=d3/2
d3=d0.c
q=new B.cjy(Math.cos(d3.a),Math.sin(d3.a),Math.cos(d3.b),Math.sin(d3.b))
p=new B.cjz(d0,q)
o=D.fn9.gqf(0)
n=o.af(0,D.fkU).gqf(0)
m=C.a([],x.bl)
d2=d0.w
d3=d0.b
l=d3.a
if(!(d2==null)){d4=C.B(l,x.fX)
A.d.v(d4,d2.$1(d0.gbdW(0)))
l=d4}for(d2=l.length,d4=d0.e,d5=x.v,w=d4!==0,v=o.a,u=o.b,k=o.c,j=x.o,i=d0.f,h=i!=null,g=n.a,f=n.b,e=n.c,d=d0.r,a0=d==null,a1=0;a1<l.length;l.length===d2||(0,C.K)(l),++a1){a2=l[a1]
if(h&&!i.$1(a2.w))continue
a3=C.a([],j)
for(a4=a2.a,a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,C.K)(a4),++a6)a3.push(p.$1(a4[a6]))
a7=B.hAu(a3)
a3=a7.length
if(a3<3)continue
for(a8=0,a9=D.a69,a6=0;a6<a3;++a6){b0=a7[a6]
a4=b0.c
a8+=a4
a9=new B.aw(a9.a+b0.a,a9.b+b0.b,a9.c+a4)}a3=1/a3
b1=q.$1(a2.b)
a4=b1.a
a5=b1.b
b2=b1.c
if(a4*(a9.a*a3)+a5*(a9.b*a3)+b2*(a9.c*a3)>0){if(!a2.r)continue
b1=new B.aw(a4*-1,a5*-1,b2*-1)}a3=b1.a
a4=b1.b
a5=b1.c
b3=0.56+0.58*Math.max(0,a3*v+a4*u+a5*k)
b2=a2.e
b4=b2>0?Math.pow(Math.max(0,a3*g+a4*f+a5*e),28)*b2:0
b5=a2.c
if(w&&a2.d===d4){a3=a0?d1:d.a
a3=C.ar(b5,A.ba,0.28+0.14*Math.sin((a3==null?0:a3)*6))
a3.toString
b3+=0.12
b5=a3}a3=255*b4*0.55
b6=A.k.U(A.k.D(b5.gb5(b5)*255*b3+a3,0,255))
b7=A.k.U(A.k.D(b5.gbd()*255*b3+a3,0,255))
b8=A.k.U(A.k.D(b5.gbe(b5)*255*b3+a3,0,255))
a3=$.V()
a4=C.a([],d5)
b9=new C.aP(a3.r,A.ap,d1,d1,a4)
for(c0=0;c0<a7.length;++c0){b0=a7[c0]
a3=b0.c
c1=s+b0.a*t/a3
c2=r-b0.b*t/a3
if(c0===0){a3=new C.b5(c1,c2)
a4.push(a3)
a5=b9.f
if(a5!=null)a3.bw(a5)
a3=b9.e
if(a3!=null)a3.a.delete()
b9.e=null}else{a3=new C.ao(c1,c2)
a4.push(a3)
a5=b9.f
if(a5!=null)a3.bw(a5)
a3=b9.e
if(a3!=null)a3.a.delete()
b9.e=null}}a3=new C.bE()
a4.push(a3)
a4=b9.f
if(a4!=null)a3.bw(a4)
a3=b9.e
if(a3!=null)a3.a.delete()
b9.e=null
a3=a2.f
a4=a7.length
a5=a2.d
b2=a5===d4&&w
m.push(new B.Om(b9,new C.w(a3,(b6&255)/255,(b7&255)/255,(b8&255)/255,A.t),a8/a4-a2.x,a5,a3<0.99,b2))}A.d.b0(m,new B.cjx())
d2=d0.d.a
A.d.a7(d2)
$.V()
c3=C.L()
c3.b=A.V
c4=C.L()
c4.b=A.ae
c4.c=0.8
for(d4=m.length,d5=d6.a,a1=0;a1<m.length;m.length===d4||(0,C.K)(m),++a1){c5=m[a1]
v=c5.b
c3.r=v.gp(0)
u=c5.a
c6=c3.H()
k=u.e
d5.drawPath((k==null?u.e=new C.cE(u.gbH().a.snapshot()):k).a,c6)
c6.delete()
k=!c5.e
if(k){c4.r=v.gp(0)
c6=c4.H()
v=u.e
d5.drawPath((v==null?u.e=new C.cE(u.gbH().a.snapshot()):v).a,c6)
c6.delete()}v=c5.d
if(v!==0&&k)d2.push(new C.z(u,v))}if(w){$.V()
c7=C.L()
c7.b=A.ae
c7.c=1.4
c7.r=A.c.j(0.35+0.25*Math.sin(d0.gbdW(0)*6)).gp(0)
for(d2=m.length,a1=0;a1<m.length;m.length===d2||(0,C.K)(m),++a1){c5=m[a1]
if(c5.f){d4=c5.a
c6=c7.H()
w=d4.e
d5.drawPath((w==null?d4.e=new C.cE(d4.gbH().a.snapshot()):w).a,c6)
c6.delete()}}}for(d2=d3.c,d3=d2.length,a1=0;a1<d2.length;d2.length===d3||(0,C.K)(d2),++a1){c8=d2[a1]
b0=p.$1(c8.a)
d4=b0.c
if(d4<1)continue
w=s+b0.a*t/d4
d4=r-b0.b*t/d4
c9=new C.kt(new C.ep(c8.b,d1,d1,A.cQ,d1,d1,d1,d1,d1,d1,new C.F(!0,A.c,d1,d1,d1,d1,11,A.u,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1)),A.a5,A.ci,new C.jB(1),d1,d1,d1,d1,A.cg,d1)
c9.eP()
v=c9.b
u=v.c
v=v.a.c
b6=C.by(C.cr(new C.u(w,d4),v.gbb(v)+8,u+14),A.iA)
$.V()
u=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
u.r=c8.c.j(0.92).gp(0)
c6=u.H()
d5.drawRRect(C.et(b6),c6)
c6.delete()
u=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
u.b=A.ae
u.c=1
u.r=A.af.gp(0)
c6=u.H()
d5.drawRRect(C.et(b6),c6)
c6.delete()
u=c9.b
v=u.c
u=u.a.c
c9.a5(d6,new C.u(w-v/2,d4-u.gbb(u)/2))}},
aq(d){return!0}}
B.Om.prototype={}
B.asy.prototype={
S(){return new B.bnI(new B.aSQ(C.a([],x.a6)),new C.eI(0,$.av()),A.bw,null,null)}}
B.bnI.prototype={
Z(){var w,v=this
v.a0()
w=v.pW(new B.eKO(v))
w.ka(0)
v.d!==$&&C.aR()
v.d=w},
q(){var w=this.d
w===$&&C.c()
w.q()
w=this.f
w.R$=$.av()
w.O$=0
this.brZ()},
B(d){var w,v=this,u=null,t=v.a,s=t.c,r=t.d,q=t.e,p=t.r,o=v.f
t=t.w
w=C.a([r,o],x.dS)
w=C.a([C.jo(new C.en(C.b3(u,u,u,new B.asx(s,r,v.e,q,p,o,t,v.a.x,new C.h1(w)),A.eS),u),A.q,u)],x.p)
v.a.toString
return C.oz(A.jo,C.aH(A.c5,new C.am(A.X,u,A.b_,A.q,w,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.eKK(v),new B.eKL(v),u,u,u,u,u,u,u,new B.eKM(v),u,u,u,!1,A.ac),u,u,u,u,u,u,new B.eKN(v),u)}}
B.aKE.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.ai_.prototype={}
B.TY.prototype={
S(){return new B.bhe(C.T(x.N,x.i),new C.ap(A.as,$.av()),C.a([],x.X),C.a([],x.L),C.mi(0,null,null))}}
B.bhe.prototype={
gUC(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
this.ch.q()
this.a1()},
Mh(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$Mh=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aU.ah$.d.c
if(s!=null)s.jg()
p.bL(0,A.c3)
t.m(new B.dYK(t))
t.a.toString
p=t.gUC()
w=3
return C.b(B.bwr(B.hzu(q,B.hKX(p),o,t.ay)),$async$Mh)
case 3:s=e
r=s==null?null:J.iQ(s)
if(r==null||r.length===0||A.a.a_(r,"{"))r=B.hMm(q,p,o)
if(t.c==null){w=1
break}t.m(new B.dYL(t,o,r))
$.aU.x1$.push(new B.dYM(t))
case 1:return C.h(u,v)}})
return C.i($async$Mh,v)},
WB(d){return this.bTU(d)},
aSc(){return this.WB(null)},
bTU(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$WB=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aU.ah$.d.c
if(s!=null)s.jg()
t.f.saT(0,o)
t.m(new B.dYX(t))
B.dD(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=B
w=3
return C.b(B.bwr(B.hG8(o)),$async$WB)
case 3:r=n.a=m.hU8(f)
p.b=""
if(r!=null&&!B.hKY(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=B.hMn(o)
q=C.ae(y.v,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new B.ai_(s.a,s.b,s.c,s.d,y.B,s.f)
if(t.c==null){w=1
break}t.m(new B.dYY(p,t))
t.bZ0(p.a)
case 1:return C.h(u,v)}})
return C.i($async$WB,v)},
bZ0(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
A.d.a7(w)
w=++m.as
v=m.gUC()
A.d.a7(v.a)
A.d.a7(v.b)
m.e.a7(0)
m.m(new B.dYT(m))
t=d.d
s=C.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new B.dYR(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new B.dYU(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.K)(r),++u){p.$2(o,new B.dYV(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new B.dYW(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bz.j(0.1),g=C.m(16),f=C.I(A.bz.j(0.35),A.r,1)
if(m.x)j=C.A(C.a([D.eA2,A.be,C.D(C.d(m.Q,l,l,l,l,l,l,A.Rx,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.eYS
else{w=C.D(C.d(k.a,l,l,l,l,l,l,A8.RT,l,l,l),1)
v=x.p
w=C.a([C.A(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.eKq,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.C(A.ux,C.d(u,l,l,l,l,l,l,D.eMZ,l,l,l),l))
w.push(A.d5)
w.push(C.d(k.b,l,l,l,l,l,l,D.I0,l,l,l))
u=k.e
if(u.length!==0){t=A.aL.j(0.12)
s=C.m(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.ePi,l,l,l),A.f,l,l,new C.o(t,l,l,s,l,l,A.n),l,l,l,A.ir,A.cm,l,l,l))}w.push(A.aq)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aA
w.push(new C.C(A.Kx,new C.cx(A.aX,A.e,A.j,A.F,l,A.p,l,0,C.a([new C.x(t,l,A.mq,l,l,l,l,l,l,l,l,l),A.bp,new C.bH(1,A.bo,new C.x(q,l,new C.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.K)(j),++p){o=j[p]
t=new C.aZ(12,12)
s=new C.aZ(12,12)
A.d.v(w,C.a([A.P,new C.bI(A.a7,l,l,C.p(l,new C.x(o.a,l,A.a52,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.bz.j(0.3),l,l,new C.bv(t,t,t,t),l,l,A.n),l,l,l,l,A.fN,l,l,l),l),A.av,C.p(l,new C.x(o.b,l,D.eUv,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.c.j(0.07),l,l,new C.bv(s,s,s,s),l,l,A.n),l,l,l,l,A.bT,l,l,l)],v))}if(m.ax)w.push(D.dUy)
j=C.ci(C.v(w,A.F,l,A.e,A.j,0,A.p),A.q,m.ch,A.z,l,l,l,l,A.aj)}w=x.p
g=C.v(C.a([C.age(C.p(l,j,A.f,l,new C.aX(0,1/0,0,i),new C.o(h,l,f,g,l,l,A.n),l,l,l,D.biT,A.eu,l,l,1/0),A.bb,A.i5),C.D(B.fQC(m.gUC(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new B.dx("Ask about it",i,new B.dZ0(m),l,A.bz,l),new B.dx("Invent something new",!i,new B.dZ1(m),l,A.bz,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.d07[p]
i.push(new B.dx(n,!1,new B.dZ2(m,n),l,A.bz,l))}f.push(new B.eH(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.cLY[p]
i.push(new B.dx(r,!1,new B.dZ3(m,r),l,A.bz,l))}f.push(new B.eH(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=C.D(C.aL(l,A.U,!1,l,!0,A.q,l,C.aM(),m.f,l,l,l,l,l,2,C.bo(l,new C.b4(4,C.m(16),A.Z),l,A.eN,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.km,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.ag,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new B.dZ4(m,k),l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,A.dj,!0,A.a5,l,A.am,l,A.aL8,l,l),1)
h=m.at
v=h&&j?D.bvt:A.dS
j=h&&j?"Ask":"Invent"
f.push(C.A(C.a([i,A.ab,new B.ff(v,j,new B.dZ5(m,k),A.bz,l)],w),A.m,l,A.e,A.j,0,l,l))
return B.jA(A.bz,A.h5,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.v(f,A.m,l,A.e,A.Q,0,A.p))}}
B.F0.prototype={}
B.ul.prototype={}
B.Uo.prototype={
S(){return new B.aC5(A.J,A.J,A.at,C.b0(x.S),$,A.bw,0,C.a([],x.X),null,null)}}
B.aC5.prototype={
gaTk(){var w,v,u,t=this,s=D.FX[t.cx],r=D.OV[t.cy],q=D.Bc[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.eh(w,w.r,C.a2(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.asn[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cG(p,0,new B.edm())},
ga0E(){return D.FX[this.cx].d/this.gaTk()},
gaKY(){return 0.1*(D.FX[this.cx].d/0.9)/D.OV[this.cy].d},
Z(){this.a0()
this.kS()
B.yK("rocket_lander").by(new B.edG(this),x.P)},
bZ9(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cG.ag()*0.6
w.f=new C.u(0.15+A.cG.ag()*0.7,0.08)
w.r=new C.u((A.cG.ag()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
l8(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new B.edH())
return}w=D.qD[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.u(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga0E()
v=v.af(0,new C.u(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaKY())}if(m.dy){t=m.r
v=v.aB(0,t.aJ(0,t.gcj()*6*D.au5[m.d]))}t=m.r=m.r.af(0,v.aJ(0,d))
s=m.f=m.f.af(0,t.aJ(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new C.u(-t.a*0.4,t.b)
t=new C.u(A.k.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new C.u(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.Bc[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
B.vm("rocket_lander",C.E(["unlocked",t],x.N,x.z))
B.AQ("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga0E()/(D.qD[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.a9(m.ga0E()/(D.qD[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
B.dD(80,"",500,0,0.6,"noise")
C.fY()}}if(m.Q&&m.x>0&&A.o.G(A.k.bv(m.CW*20),2)===0)B.dD(90,"",70,0,0.12,"noise")
m.m(new B.edI())},
ady(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.eMw,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new B.dx(e[w].a,f.$1(w),new B.edo(this,g,w),v,h,v))
return new C.C(A.ff,C.v(C.a([u,A.d5,C.c6(A.bF,s,A.bx,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
byJ(d){var w,v,u,t,s=this,r=null,q=s.ga0E()/(D.qD[s.d].b/9.81*0.28)>=1,p=A.k.U(1/s.gaKY()),o=D.au5[s.d],n=C.m(24),m=d.c,l=C.I(m.j(0.6),A.r,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.av,C.d(d.d+" Gravity here: "+C.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,D.a5n,r,r,r),A.S,s.ady("ENGINE: "+D.FX[s.cx].b,D.FX,new B.edd(s),new B.ede(s),A.cL),s.ady("FUEL TANK: "+D.OV[s.cy].b,D.OV,new B.edf(s),new B.edg(s),A.bf),s.ady("LANDING GEAR: "+D.Bc[s.db].b,D.Bc,new B.edh(s),new B.edi(s),A.aY),s.ady("EXTRAS (tap to add)",D.asn,new B.edj(s),new B.edk(s),A.bz)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.feK)
o=(q?A.bf:A.cx).j(0.14)
w=C.m(12)
v=A.k.a9(s.gaTk(),2)
u=A.k.a9(s.ga0E()/(D.qD[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.U(D.Bc[s.db].d*100)+".",r,r,r,r,r,r,D.eN6,r,r,r),A.f,r,r,new C.o(o,r,r,w,r,r,A.n),r,r,r,A.ir,A.bT,r,r,r))
m.push(A.S)
m.push(new C.bI(A.A,r,r,new B.ff(A.mS,"Launch",new B.edl(s),A.bf,r),r))
return C.au(C.p(r,C.ci(C.v(m,A.F,r,A.e,A.Q,0,A.p),A.q,r,A.z,r,A.c2,r,r,A.aj),A.f,r,A.lm,new C.o(D.bai,r,l,n,r,r,A.n),r,r,r,A.bT,r,r,r,r),r,r,r)},
aUq(d,e,f,g){var w=null,v=f?A.cL:A.c.j(0.1),u=C.m(18),t=C.I(A.b9,A.r,1)
return C.oz(A.jo,C.p(w,C.W(d,A.c,w,w,w,30),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new B.eda(e),new B.edb(e),w,w,w,w,new B.edc(e))},
aUp(d,e,f){return this.aUq(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cl(new B.edz(s,D.qD[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.qD[w].a:"\ud83d\udd12"
o.push(new B.dx(v,s.d===w,new B.edA(s,w),r,D.qD[w].c,r))}v=C.a([s.aUp(D.aij,new B.edB(s),s.y),A.be,s.aUq(A.uU,new B.edC(s),s.Q,130),A.be,s.aUp(A.Ma,new B.edD(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aY:A.c.j(0.1)
t=C.m(18)
A.d.v(v,C.a([A.be,C.aH(r,C.p(r,D.bzF,A.f,r,r,new C.o(u,r,C.I(A.b9,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.edE(s),r,r,r,r,r,r,!1,A.ac)],p))}return B.jA(A.cL,A.h5,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.v(C.a([new B.eH(o,"WORLD",r),C.A(v,A.m,r,A.b7,A.j,0,r,r)],p),A.m,r,A.e,A.Q,0,A.p))}}
B.beh.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.qD[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.V(),d=C.L(),a0=j.c,a1=C.ar(D.bcE,a0,0.25)
a1.toString
d.sar(new C.a5(A.b1,A.b3,A.x,C.a([D.b5b,a1],x.O),l,l).av(0,new C.a9(0,0,g,f)))
a2.aW(new C.a9(0,0,g,f),d)
w=new C.f5()
w.dU(5)
for(g=a2.a,v=0;v<70;++v){f=w.ag()
d=w.ag()
a1=w.ag()
u=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
u.r=A.c.j(0.2+w.ag()*0.5).gp(0)
t=u.H()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=C.a([],f)
r=new C.aP(e.r,A.ap,l,l,d)
r.E(new C.b5(0,s+14))
q=new C.f5()
q.dU(2)
for(p=0;p<=i;p+=18){e=new C.ao(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.ag()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bw(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.E(new C.ao(i,h))
r.E(new C.ao(0,h))
r.E(new C.bE())
e=$.V()
d=C.L()
d.r=C.ar(a0,A.w,0.6).gp(0)
a2.aM(r,d)
o=C.cr(new C.u(k.ax*i,s+10),8,k.ay*i)
d=C.by(o,A.hL)
a0=C.L()
a0.r=A.bl.gp(0)
a2.aA(d,a0)
a0=C.by(o.cD(2),A.qU)
d=C.L()
d.b=A.ae
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aA(a0,d)
if(k.as==="ready")return
d=k.f
J.bA(g.save())
g.translate(d.a*i,d.b*h)
a2.iV(0,k.w)
i=k.as
if(i==="crashed"){k=C.L()
k.r=A.cL.j(0.6).gp(0)
k.z=R.Gr
a2.ae(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new C.aP(i,A.ap,l,l,C.a([],f))
n.E(new C.b5(-8,18))
n.E(new C.ao(0,44+Math.sin(k.CW*40)*8))
n.E(new C.ao(8,18))
n.E(new C.bE())
k=C.L()
k.r=A.aL.gp(0)
a2.aM(n,k)
i=new C.aP(i,A.ap,l,l,C.a([],f))
i.E(new C.b5(-4,18))
i.E(new C.ao(0,32))
i.E(new C.ao(4,18))
i.E(new C.bE())
k=C.L()
k.r=A.c.gp(0)
a2.aM(i,k)}k=e.r
m=new C.aP(k,A.ap,l,l,C.a([],f))
m.E(new C.b5(0,-26))
m.E(new C.cR(14,-10,11,18))
m.E(new C.ao(-11,18))
m.E(new C.cR(-14,-10,0,-26))
m.E(new C.bE())
i=C.L()
i.sar(D.bL9.av(0,D.et7))
a2.aM(m,i)
i=C.L()
i.r=A.aY.gp(0)
a2.ae(D.vl,5,i)
i=new C.aP(k,A.ap,l,l,C.a([],f))
i.E(new C.b5(-11,6))
i.E(new C.ao(-20,20))
i.E(new C.ao(-11,18))
i.E(new C.bE())
h=C.L()
h.r=A.aE.gp(0)
a2.aM(i,h)
f=new C.aP(k,A.ap,l,l,C.a([],f))
f.E(new C.b5(11,6))
f.E(new C.ao(20,20))
f.E(new C.ao(11,18))
f.E(new C.bE())
k=C.L()
k.r=A.aE.gp(0)
a2.aM(f,k)
g.restore()},
aq(d){return!0}}
B.aJU.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.bup.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
w=this.fc$
w===$&&C.c()
w.q()
this.br8()}}
B.aPM.prototype={}
B.a1v.prototype={}
B.b7t.prototype={}
B.SQ.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.eM(["skin"],x.N),o=new Float32Array(0)
return new B.aAx(w,v,u,t,s,r,q,new C.cq(null,x.A),p,D.IV,D.IV,A.at,A.cG,o,new Int32Array(0),$,A.bw,0,C.a([],x.X),null,null)}}
B.aAx.prototype={
Z(){var w=this
w.a0()
w.kS()
w.as=new B.bXT(w.gc5O())
new B.dA7(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a8(0)
v.d=null}this.bq9()},
c5P(d){var w,v=this
if(v.c==null)return
w=J.a8(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eM(0,C.E(["t","init","data",$.h_o],x.N,x.z))
v.at=!0
v.ax=""
v.avX()
break
case"pick":v.m(new B.dzK(v,d))
break
case"shot":v.afp(C.t(w.h(d,"data")))
break
case"error":$.al.$1("[body viewer] "+C.t(w.h(d,"text")))
break}},
avX(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aqm[q.CW]
v=new B.dzL()
u=q.ay
u=C.B(u,C.a2(u).k("cn.E"))
A.d.fn(u)
t=x.N
s=C.E(["layers",u,"skinMode",q.ch,"tone","#"+C.t(v.$1(w.b))+C.t(v.$1(w.c))+C.t(v.$1(w.d)),"sel",q.cx,"bpm",A.k.U(q.k3),"spin",q.fy],t,x.cK)
r=A.R.an(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.T(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.eM(0,u)}},
afp(d){return this.cm8(d)},
cm8(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$afp=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cA.aG(A.a.aY(d,A.a.cJ(d,",")+1))
w=6
return C.b(B.cm6(C.a([B.h_9(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$afp)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.I(x.gV).f.P(D.aKr)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$afp,v)},
avq(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
l8(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bv(w)!==A.k.bv(v.ok)){B.a6D("kick",0.4)
v.a3d(170,new B.dA8())}v.ok=w
return},
afe(d){var w,v,u,t,s=this
s.m(new B.dzM(s,d))
if(d==null){s.fx=D.IV
s.dy=1
w=s.as
if(w!=null)w.eM(0,C.E(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.U(w).k("a3<1>")
u=C.B(new C.a3(w,new B.dzN(d),v),v.k("G.E"))
t=A.d.gK(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.L(0,t)
if(s.ch===2)s.ch=1}s.avX()
w=s.as
if(w!=null)w.eM(0,C.E(["t","focus","group",d],x.N,x.z))
s.go=0
s.cov(t,d)
return},
cov(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){B.a6D("kick",0.8)
this.a3d(260,new B.dzO())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")B.dD(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a3d(w*70,new B.dzP(this))
else if(A.a.t(e,"intestine")||e==="Stomach")B.dD(110,"",360,0.7,0.3,"saw")
else B.vp("organic",6+A.o.G(e.length,8),200,0.6)
break
case"bone":B.dD(210+e.length*4,"",80,0.6,0.55,"tri")
B.dD(2400,"",20,0,0.3,v)
break
case"muscle":B.dD(70,"",150,1,0.6,"sine")
break
case"vessel":B.dD(300,"",380,0.4,0.22,v)
B.a6D("kick",0.3)
break
default:B.vp("organic",2+A.o.G(e.length,6),200,0.4)}},
csQ(d){this.m(new B.dzR(this,d))},
aUI(){var w,v,u,t,s,r,q,p=this,o=C.b0(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(p.avq(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.L(0,s.a)}q=C.B(o,o.$ti.k("cn.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aD(w)]
p.p4=""},
bPz(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new B.dzH(u,w,d))
v=x.t
B.AQ("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a3d(1100,new B.dzI(u))
return}if(d==null){if(u.cx!=null)u.afe(null)
return}u.afe(d)},
bTd(d,e){var w,v=this,u=null,t=C.m(18),s=C.I(A.bY.j(0.5),A.r,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.eJ3,u,u,u)}else if(d==null||e==null)w=D.eWv
else{w=x.p
w=C.A(C.a([C.D(C.v(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.iU,u,u,u),A.d5,C.d(e.b,u,u,u,u,u,u,D.I0,u,u,u)],w),A.F,u,A.e,A.Q,0,A.p),1),C.aG(u,u,u,u,D.bC2,u,u,u,new B.dzJ(v),u,u,u,u,"Back to the whole body",A.c7)],w),A.F,u,A.e,A.j,0,u,u)}return C.p(u,w,A.f,u,u,new C.o(D.U0,u,s,t,u,u,A.n),u,u,u,u,E.ae9,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.daa.h(0,g)
i.avX()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.cUM
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(i.avq(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aG(h,h,h,h,D.me,h,h,h,new B.dzY(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bG:C.CW(h,A.pH,q)}else q=A.ki
q=C.v(C.a([C.D(q,1),new C.C(D.biU,i.bTd(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.cNi[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new B.dx(l,n,new B.dzZ(i,o),o.c,A.bY,h))}p=C.a([new B.eH(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.K)(w),++s){k=w[s]
n.push(new B.dx(k,k===i.cx,new B.dA_(i,k),h,A.aL,h))}p.push(new B.eH(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(B.hu(A.cx,""+A.k.U(n)+" beats/min","Heart rate",180,40,new B.dA0(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new B.Eg(D.aqm[j],i.CW===j,new B.dA1(i,j),!1,h))
p.push(new B.eH(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new B.dx("Spin",n,new B.dA2(i),D.ahc,A.aY,h),new B.ff(A.jN,"Reset view",new B.dA3(i),A.c,h),new B.dx(l,m,new B.dA4(i),A.Fa,A.aL,h)],v)
if(t.t(0,"organ"))v.push(new B.dx("Heartbeat sound",i.k4,new B.dA5(i),A.nA,A.cx,h))
p.push(new B.eH(v,h,h))
return B.jA(A.bY,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.v(p,A.m,h,A.e,A.Q,0,A.p))}}
B.aIW.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.aIX.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
w=this.fc$
w===$&&C.c()
w.q()
this.bq8()}}
B.bXT.prototype={
kb(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aJ(e,"</script","<\\/script")
v=$.h5i
$.h5i=v+1
u="ngmy-body-viewer-"+v
$.xY()
$.pP().ph(u,new B.bXU(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fF(v,"message",new B.bXV(t),!1,x.gA)
t.b=u},
eM(d,e){var w,v
try{w=this.c
if(w!=null){w=C.bwo(w.contentWindow)
if(w!=null)J.fDp(w,e,"*")}}catch(v){}}}
B.pj.prototype={}
B.b5S.prototype={}
B.Eu.prototype={}
B.a2M.prototype={}
B.aSS.prototype={}
B.By.prototype={}
B.M2.prototype={
c_F(d,e,f){var w
A:{if("ptrap"===f){w=D.aPO
break A}if("faucet"===f){w=D.aPh
break A}if("house"===f){w=D.fsw
break A}w=new B.aaA(f,null)
break A}C.a6(e,!1).ck(C.eu(new B.c3y(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o,n=null
$.apL="tech"
w=C.a([],x.s)
for(v=0;v<6;++v){u=D.asW[v].b
if(!A.d.t(w,u))w.push(u)}u=C.aG(n,n,n,n,F.op,n,n,n,new B.c3z(d),n,n,n,n,n,n)
t=A.aR.j(0.16)
s=C.m(13)
r=x.p
s=C.A(C.a([u,C.p(n,D.aZU,A.f,n,n,new C.o(t,n,C.I(A.aR.j(0.6),A.r,1),s,n,n,A.n),n,40,n,n,n,n,n,40),A.aw,D.bpY],r),A.m,n,A.e,A.j,0,n,n)
t=C.m(18)
t=C.a([s,A.aa,C.p(n,D.f2P,A.f,n,n,new C.o(D.UG,n,C.I(A.bH,A.r,1),t,n,n,A.n),n,n,n,n,A.bA,n,n,n)],r)
for(u=w.length,v=0;v<w.length;w.length===u||(0,C.K)(w),++v){q=w[v]
s=C.a([new C.C(D.bnw,new C.x(q.toUpperCase(),n,D.eJ_,n,n,n,n,n,n,n,n,n),n)],r)
for(p=A.d.gai(D.asW),o=new C.hE(p,new B.c3A(q));o.C();)s.push(this.c_B(d,p.gT(0)))
A.d.v(t,s)}return C.cb(n,A.bW,C.bq(!0,C.cL(t,n,D.bkb,n,n,A.aj,!1),!0,!1,A.ah,!0,!0),n,!1,!1,n,n)},
c_B(d,e){var w=null,v=C.m(18),u=e.f,t=C.I(u.j(0.45),A.r,1),s=x.p
return C.aH(w,C.p(w,C.A(C.a([C.bu(C.m(14),new C.a4(116,92,new B.bqX(e.a,w),w),A.ao),A.be,C.D(C.v(C.a([C.A(C.a([C.W(e.e,u,w,w,w,18),A.bp,C.D(C.d(e.c,w,w,w,w,w,w,A.iU,w,w,w),1)],s),A.m,w,A.e,A.j,0,w,w),A.av,C.d(e.d,w,3,A.a2,w,w,w,D.aMd,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1),C.W(A.en,u,w,w,w,w)],s),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(D.UG,w,t,v,w,w,A.n),w,w,w,A.db,A.bT,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.c3x(this,d,e),w,w,w,w,w,w,!1,A.ac)}}
B.bqX.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c
switch(q){case"ptrap":w=B.cee()
w.a.v(0,C.eM(["tail","trap","arm"],x.N))
v=w.b
v.am3(v,new B.eTs())
u=B.aMw(w)
t=new B.Ae(-0.4,0.2,40,D.flL,$.av())
break
case"faucet":w=B.cee()
w.e.v(0,C.E([61,"hot",63,"hot",62,"cold",64,"cold"],x.S,x.N))
u=B.aeq(w)
t=new B.Ae(-0.3,0.22,42,D.a6b,$.av())
break
case"house":w=new B.aSS()
w.a=6
u=B.byi(w)
t=new B.Ae(-0.3,0.5,50,D.fmq,$.av())
break
default:w=B.h5O(q)
v=C.T(x.S,x.N)
s=new B.b5S(v)
s.a=!1
v.v(0,q==="gfci"?D.da8:D.d9L)
u=B.fLA(w,s)
t=new B.Ae(0.45,0.25,12.5,D.fmw,$.av())}w=C.a([],x.a6)
q=q==="house"?new B.eTt():r
return new C.en(C.b3(r,r,r,new B.asx(u,t,new B.aSQ(w),0,q,r,r,D.JJ,r),A.eS),r)}}
B.bph.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.bZ(0,new B.asy(r.c,r.d,r.r,r.e,r.x,r.w,D.JJ,q),0,0,0)],p),n=r.as,m=n!=null
if(m)o.push(C.an(q,C.v(n,A.F,q,A.e,A.j,0,A.p),q,q,8,q,8,q))
n=C.a([],p)
w=r.at
if(w!=null)A.d.v(n,w)
n.push(r.au8(A.hs,"Zoom in",new B.eOz(r)))
n.push(r.au8(A.xq,"Zoom out",new B.eOA(r)))
w=r.f
n.push(r.au8(D.btL,"Back to the whole view",w))
o.push(C.an(q,C.v(n,A.m,q,A.e,A.j,0,A.p),q,q,q,8,8,q))
n=r.y
if(n!=null){m=m?60:10
v=r.z
u=(v?A.ee:A.eK).j(0.95)
t=C.m(14)
s=C.I(v?A.bf:A.cx,A.r,1)
o.push(C.an(q,C.p(q,C.d(n,q,q,q,q,q,q,D.eKL,q,q,q),A.f,q,q,new C.o(u,q,s,t,q,q,A.n),q,q,q,q,A.oc,q,q,q),q,q,10,62,m,q))}n=r.Q
if(n!=null){m=C.m(16)
v=C.I(A.b9,A.r,1)
n=C.a([C.d(n.a,q,q,q,q,q,q,D.eVy,q,q,q),A.d5,C.d(n.b,q,q,q,q,q,q,D.a5n,q,q,q)],p)
u=r.ax
if(u!=null)A.d.v(n,C.a([A.aq,u],p))
o.push(C.an(8,C.p(q,C.A(C.a([C.D(C.v(n,A.F,q,A.e,A.j,0,A.p),1),C.aG(q,q,q,q,A.Fr,q,q,q,w,q,q,q,q,q,A.c7)],p),A.F,q,A.e,A.j,0,q,q),A.f,q,q,new C.o(D.a9j,q,v,m,q,q,A.n),q,q,q,q,D.ae4,q,q,q),q,q,10,10,q,q))}return new C.am(A.X,q,A.a9,A.q,o,q)},
au8(d,e,f){var w=null,v=A.w.j(0.55),u=C.I(A.b9,A.r,1)
return new C.C(A.ff,C.hl(C.aH(w,C.p(w,C.W(d,A.c,w,w,w,20),A.f,w,w,new C.o(v,w,u,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.ac),w,e,w,w),w)}}
B.Yb.prototype={
B(d){var w=this,v=null,u=C.aG(v,v,v,v,F.op,v,v,v,new B.dcu(d),v,v,v,v,v,v),t=w.d,s=C.D(C.d(w.c,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1),r=t.j(0.15),q=C.m(16),p=C.I(t.j(0.6),A.r,1),o=x.p
return C.cb(v,A.bW,C.bq(!0,C.v(C.a([new C.C(D.bnK,C.A(C.a([u,s,C.aH(v,C.p(v,C.A(C.a([C.W(L.ahq,t,v,v,v,17),A.e9,C.d(w.w,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),A.m,v,A.e,A.Q,0,v,v),A.f,v,v,new C.o(r,v,p,q,v,v,A.n),v,v,v,v,A.rV,v,v,v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,!1,A.ac)],o),A.m,v,A.e,A.j,0,v,v),v),C.D(C.bu(A.IY,w.e,A.ao),1),C.p(v,w.f,A.f,v,v,D.aUR,v,v,v,v,A.A5,v,v,1/0)],o),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0),v,!1,!1,v,v)}}
B.aaA.prototype={
S(){return new B.axn(new B.b5S(C.T(x.S,x.N)))}}
B.axn.prototype={
gF8(){var w,v=this,u=v.d
if(u===$){w=B.h5O(v.a.c)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
gkA(){var w=this.f
return w===$?this.f=new B.Ae(0.42,0.26,12,D.fm6,$.av()):w},
gol(){var w=this,v=w.r
return v===$?w.r=B.fLA(w.gF8(),w.e):v},
q(){var w=this.as
if(w!=null)w.a8(0)
this.a1()},
kd(d,e){var w=this,v=w.as
if(v!=null)v.a8(0)
w.m(new B.d_I(w,d,e))
w.as=C.cM(A.l1,new B.d_J(w))},
oF(d){return this.kd(d,!1)},
x3(){var w=this.e
w.d=w.d&&w.a&&w.c>=2
this.r=B.fLA(this.gF8(),w)},
nD(){var w=this,v=w.gkA(),u=w.e.c===0,t=u?2.8:0.4
u=u?12:10
v.wn(u,0.26,new B.aw(0,0.1,t),0.42)
w.m(new B.d_B(w))},
c_C(){var w,v,u,t="ground",s=this.e,r=!s.a||s.c>0,q=new B.d_A(this)
switch(this.gF8().a){case"switch":w=q.$1(t)
v=q.$1("blackLine")
q=q.$1("blackLoad")
return C.a([r,r,r,w,v,q,s.c>=2&&s.d],x.u)
case"gfci":w=q.$1(t)
v=q.$1("white")
q=q.$1("black")
u=s.c>=2
return C.a([r,r,w,v,q,u,u&&s.d],x.u)
default:w=q.$1(t)
v=q.$1("white")
q=q.$1("black")
u=s.c
s=u>=2&&s.d
return C.a([r,r,w,v,q,u>=1,s],x.u)}},
HM(d){var w,v,u,t,s,r,q,p=this
if(d===0){p.nD()
return}w=p.gF8()
v=w.f
u=C.U(v).k("a3<1>")
t=C.B(new C.a3(v,new B.d_C(d),u),u.k("G.E"))
v=w.a
s=B.hX7(v,d)
if(s!=null){u=p.e
u=u.c===0&&u.b.ke(0,s)}else u=!1
if(u){w=p.e
if(w.a){B.zI(180,220,0.25,"square")
p.oF("STOP! The power is still on. Turn the breaker OFF before you touch any wire.")
return}w=w.b
w.bm(w,new B.d_D(s))
p.m(p.gc_G())
p.kd("Wire taken off the screw.",!0)
return}if(t.length!==0&&p.w.length!==0&&p.e.c===0){u=p.e
r=B.hWk(w,u,p.w,A.d.gK(t))
if(r!=null){++p.Q
B.zI(180,220,0.25,"square")
p.oF(r)}else{B.F6()
p.m(new B.d_E(p,d))
if(B.hag(w,u))p.kd("Every wire is on the right screw. Now push the device into the box.",!0)
else p.kd(A.d.gK(t).b+": fastened correctly.",!0)
p.gkA().FW(7,B.fM0(v,d,u))
p.w=""}return}q=p.gol().b.h(0,d)
if(q!=null){p.m(new B.d_F(p,d))
w=p.gkA()
v=q.c
w.FW(q.d,v)}},
ccU(){var w,v=this
v.m(new B.d_G(v))
w=v.e
if(w.a){B.zI(120,200,0.25,"saw")
if(w.c===0)v.oF("The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.")}else{B.zI(600,100,0.25,"tri")
v.kd("Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)",!0)}},
crx(){var w,v,u=this
u.m(new B.d_K(u))
B.F6()
w=u.gF8().a
A:{if("switch"===w){v="Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("gfci"===w){v="Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: "+u.Q+"."
break A}v="The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: "+u.Q+"."
break A}u.kd(v,!0)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c_C(),a2=A.d.bi(a1,new B.d_S())
if(a2<0)w="All done"
else{d.gF8()
w="Step "+(a2+1)+"/7"}v=d.gF8()
u=d.e
t=B.hag(v,u)&&!u.a
s=d.gol()
r=d.gkA()
q=d.x
p=d.y
o=d.z
n=q!==0?d.gol().b.h(0,d.x):a0
m=(u.a?A.eK:A.ee).j(0.95)
l=C.m(18)
k=u.a
j=C.I(k?A.cx:A.bf,A.r,1.5)
i=C.W(k?A.h3:D.bvq,A.c,a0,a0,a0,18)
h=x.p
l=B.eOy(r,a0,o,q,n,a0,a0,p,d.gHi(),d.gHL(),s,C.a([C.aH(a0,C.p(a0,C.A(C.a([i,A.e9,C.d(k?"Breaker ON (live)":"Breaker OFF (safe)",a0,a0,a0,a0,a0,a0,A.nP,a0,a0,a0)],h),A.m,a0,A.e,A.Q,0,a0,a0),A.f,a0,a0,new C.o(m,a0,j,l,a0,a0,A.n),a0,a0,a0,a0,A.h2,a0,a0,a0),A.z,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.gccT(),a0,a0,a0,a0,a0,a0,!1,A.ac)],h),C.a([B.aM1("Hints",A.aR,A.uT,u.e,new B.d_T(d)),A.aq,B.aM1("Labels",A.aY,L.YC,u.f,new B.d_U(d)),A.aq,B.aM1("Brass side",D.K_,D.aij,!1,new B.d_V(d)),A.aq,B.aM1("Silver side",D.wq,A.Ma,!1,new B.d_W(d)),A.P],h))
j=C.a([],h)
s=u.c
if(s===0){s=C.a([],h)
for(r=v.e,q=u.b,g=0;g<3;++g){f=r[g]
p=new C.aZ(14,14)
o=f.a
n=d.w===o
m=n?A.ba:A.b9
e=new C.az(m,n?3:1,A.r,-1)
m=C.a([],h)
if(q.ke(0,o))m.push(new C.C(A.fM,C.W(A.eh,f.d,a0,a0,a0,18),a0))
m.push(new C.x(f.b,a0,new C.F(!0,f.d,a0,a0,a0,a0,13,A.u,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0,a0,a0,a0,a0,a0,a0))
s.push(new C.C(A.jm,C.aH(a0,C.p(a0,new C.cx(A.aX,A.e,A.j,A.m,a0,A.p,a0,0,m,a0),A.f,a0,a0,new C.o(f.c,a0,new C.bY(e,e,e,e),new C.bv(p,p,p,p),a0,a0,A.n),a0,a0,a0,a0,A.hE,a0,a0,a0),A.z,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new B.d_X(d,f),a0,a0,a0,a0,a0,a0,!1,A.ac),a0))}s=C.c6(A.bF,s,A.bx,6,8)
if(t)u="Push it into the box"
else u=u.a?"Turn the breaker OFF first":"Fasten every wire first"
A.d.v(j,C.a([s,A.P,C.A(C.a([B.OZ(u,D.bwi,t?new B.d_Y(d):a0,A.aR)],h),A.m,a0,A.e,A.j,0,a0,a0)],h))}else if(s===1)A.d.v(j,C.a([C.A(C.a([B.OZ("Pull it back out",A.tl,new B.d_Z(d),A.af),A.ab,B.OZ("Put the cover plate on",Ah.AH,new B.d0_(d),A.aR)],h),A.m,a0,A.e,A.j,0,a0,a0)],h))
else{s=B.OZ("Start over",A.l6,new B.d00(d),A.af)
u=u.d
r=u?"Tested \u2713":"Power on and test"
A.d.v(j,C.a([C.A(C.a([s,A.ab,B.OZ(r,A.h3,u?a0:d.gcrw(),A.aR)],h),A.m,a0,A.e,A.j,0,a0,a0)],h))}return new B.Yb(v.b,A.aR,l,C.v(j,A.m,a0,A.e,A.Q,0,A.p),new B.d01(d,a3,a1),w,a0)}}
B.aDf.prototype={
S(){return new B.aDg(B.cee())}}
B.aDg.prototype={
gkA(){var w=this.e
return w===$?this.e=new B.Ae(-0.3,0.18,40,D.aO8,$.av()):w},
gol(){var w=this.f
return w===$?this.f=B.aMw(this.d):w},
q(){var w=this.z
if(w!=null)w.a8(0)
this.a1()},
kd(d,e){var w=this,v=w.z
if(v!=null)v.a8(0)
w.m(new B.eEu(w,d,e))
w.z=C.cM(A.l1,new B.eEv(w))},
oF(d){return this.kd(d,!1)},
nD(){this.gkA().wn(40,0.18,D.aO8,-0.3)
this.m(new B.eEn(this))},
HM(d){var w,v,u,t,s,r,q=this,p="square"
if(d===0){q.nD()
return}w=C.E([41,"tail",42,"trap",43,"arm"],x.S,x.N).h(0,d)
if(w!=null&&!q.d.a.t(0,w)){v=q.r
if(v.length===0){if(w==="tail")v="tailpiece"
else v=w==="trap"?"P-trap":"trap arm"
q.oF("Pick the "+v+" from the buttons below first, then tap its glowing outline.")
return}if(v!==w){B.zI(180,220,0.25,p)
u=q.r
A:{if("tail"===u){v="The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain."
break A}if("trap"===u){v="The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle."
break A}v="The trap arm is the long straight pipe that goes into the wall. It goes last, on the right."
break A}q.oF(v)
return}if(w==="trap"&&!q.d.a.t(0,"tail")){B.zI(180,220,0.25,p)
q.oF("Start from the top: put the tailpiece on first, then the trap under it.")
return}if(w==="arm"&&!q.d.a.t(0,"trap")){B.zI(180,220,0.25,p)
q.oF("The trap arm joins the trap. Put the P-trap on first.")
return}q.m(new B.eEo(q,w))
B.F6()
q.kd("Piece in place. "+(q.d.a.a===3?"Now tighten the two slip nuts: tap each nut.":"Pick the next piece."),!0)
return}v=d===44
if(v||d===45){t=v?"n1":"n2"
if(q.d.b.h(0,t)!==!0){q.m(new B.eEp(q,t))
B.F6()
q.kd("Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.",!0)
return}}s=q.gol().b.h(0,d)
if(s!=null){q.m(new B.eEq(q,d))
v=q.gkA()
r=s.c
v.FW(s.d,r)}},
c_I(){var w=this,v=x.cc,u=C.B(new C.a3(C.a(["n1","n2"],x.s),new B.eEr(w),v),v.k("G.E"))
w.m(new B.eEs(w,u))
if(u.length!==0){B.zI(180,220,0.25,"square")
w.oF("It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.")}else{B.F6()
w.kd("No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!",!0)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d,i=j.a,h=i.t(0,"tail"),g=i.t(0,"trap"),f=i.t(0,"arm"),e=j.b
e=e.h(0,"n1")===!0&&e.h(0,"n2")===!0
w=C.a([h,g,f,e,j.c&&j.d.length===0],x.u)
v=A.d.bi(w,new B.eEz())
u=i.a===3
j=v<0?"All done":"Step "+(v+1)+"/5"
h=l.gol()
g=l.gkA()
f=l.w
e=l.x
t=l.y
s=f!==0?l.gol().b.h(0,l.w):k
h=B.eOy(g,new B.eEA(l),t,f,s,k,k,e,l.gHi(),l.gHL(),h,k,k)
e=x.p
s=C.a([],e)
for(r=0;r<3;++r){q=D.d2h[r]
g=i.t(0,q)?k:new B.eEB(l,q)
f=i.t(0,q)?A.du:A.fs
t=new C.aZ(14,14)
p=l.r===q
o=p?A.ba:A.b9
n=new C.az(o,p?3:1,A.r,-1)
o=C.a([],e)
if(i.t(0,q))o.push(D.dV1)
p=D.d9J.h(0,q)
p.toString
m=i.t(0,q)?A.bZ:A.c
o.push(new C.x(p,k,new C.F(!0,m,k,k,k,k,13,A.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k))
s.push(new C.C(A.jm,C.aH(k,C.p(k,new C.cx(A.aX,A.e,A.j,A.m,k,A.p,k,0,o,k),A.f,k,k,new C.o(f,k,new C.bY(n,n,n,n),new C.bv(t,t,t,t),k,k,A.n),k,k,k,k,A.hE,k,k,k),A.z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,g,k,k,k,k,k,k,!1,A.ac),k))}i=C.c6(A.bF,s,A.bx,6,8)
g=B.OZ("Start over",A.l6,new B.eEC(l),A.af)
f=u?"Run the water":"Build the drain first"
return new B.Yb("Sink drain (P-trap)",A.cw,h,C.v(C.a([i,A.P,C.A(C.a([g,A.ab,B.OZ(f,A.pu,u?l.gc_H():k,A.cw)],e),A.m,k,A.e,A.j,0,k,k)],e),A.m,k,A.e,A.Q,0,A.p),new B.eED(d,w),j,k)}}
B.axC.prototype={
S(){return new B.axD(B.cee())}}
B.axD.prototype={
gkA(){var w=this.e
return w===$?this.e=new B.Ae(-0.25,0.2,36,D.a6b,$.av()):w},
gol(){var w=this.f
return w===$?this.f=B.aeq(this.d):w},
q(){var w=this.z
if(w!=null)w.a8(0)
this.a1()},
kd(d,e){var w=this,v=w.z
if(v!=null)v.a8(0)
w.m(new B.d2C(w,d,e))
w.z=C.cM(A.l1,new B.d2D(w))},
oF(d){return this.kd(d,!1)},
nD(){this.gkA().wn(36,0.2,D.a6b,-0.25)
this.m(new B.d2u(this))},
HM(d){var w,v,u,t,s,r,q=this
if(d===0){q.nD()
return}w=x.fZ
v=C.B(new C.a3(D.a0H,new B.d2x(d),w),w.k("G.E"))
if(v.length!==0&&q.r.length!==0){w=q.d
u=B.hWl(w,q.r,A.d.gK(v))
if(u!=null){B.zI(180,220,0.25,"square")
q.oF(u)}else{B.F6()
q.m(new B.d2y(q,d))
q.gkA().FW(12,B.aeC(d))
q.kd(B.fLU(w)?"All four ends are connected. Now open the valves.":A.d.gK(v).b+": connected.",!0)}return}w=d===68
if(w||d===69){t=w?"hot":"cold"
if(q.d.e.ke(0,t)){q.m(new B.d2z(q,t))
q.kd("Hose taken off.",!0)
return}}s=q.gol().b.h(0,d)
if(s!=null){q.m(new B.d2A(q,d))
w=q.gkA()
r=s.c
w.FW(s.d,r)}},
c_E(d){var w,v=this
v.m(new B.d2v(v))
w=v.d
if(!w.f){v.kd("Valves closed.",!0)
return}if(B.fLU(w)){B.F6()
v.kd("Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!",!0)}else{B.zI(180,220,0.25,"square")
v.oF("Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.")}},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d,i=j.r||j.e.a!==0,h=j.e,g=h.h(0,61)==="hot"&&h.h(0,63)==="hot",f=h.h(0,62)==="cold"&&h.h(0,64)==="cold",e=C.a([i,g,f,j.f&&B.fLU(j)],x.u),d=A.d.bi(e,new B.d2H())
i=d<0?"All done":"Step "+(d+1)+"/4"
g=l.gol()
f=l.gkA()
w=l.w
v=l.x
u=l.y
t=w!==0?l.gol().b.h(0,l.w):k
s=x.p
g=B.eOy(f,new B.d2I(l),u,w,t,k,k,v,l.gHi(),l.gHL(),g,k,C.a([B.aM1("Hints",A.aR,A.uT,j.r,new B.d2J(l)),A.P],s))
v=C.a([],s)
for(f=C.a2(h).k("bc<2>"),w=f.k("a3<G.E>"),r=0;r<2;++r){u={}
t=D.d1O[r]
u.a=null
q=t.a
u.a=q
p=new C.aZ(14,14)
o=l.r===q
n=o?A.ba:A.b9
m=new C.az(n,o?3:1,A.r,-1)
n=C.a([],s)
if(new C.a3(new C.bc(h,f),new B.d2K(u),w).gJ(0)===2)n.push(D.dV3)
n.push(new C.x(t.b,k,A.u_,k,k,k,k,k,k,k,k,k))
v.push(new C.C(A.jm,C.aH(k,C.p(k,new C.cx(A.aX,A.e,A.j,A.m,k,A.p,k,0,n,k),A.f,k,k,new C.o(t.c,k,new C.bY(m,m,m,m),new C.bv(p,p,p,p),k,k,A.n),k,k,k,k,A.hE,k,k,k),A.z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.d2L(u,l),k,k,k,k,k,k,!1,A.ac),k))}h=C.c6(A.bF,v,A.bx,6,8)
f=B.OZ("Start over",A.l6,new B.d2M(l),A.af)
j=j.f?"Close the valves":"Open the valves"
return new B.Yb("Faucet supply lines",A.cx,g,C.v(C.a([h,A.P,C.A(C.a([f,A.ab,B.OZ(j,A.pu,l.gc_D(l),A.cx)],s),A.m,k,A.e,A.j,0,k,k)],s),A.m,k,A.e,A.Q,0,A.p),new B.d2N(a0,e),i,k)}}
B.ayv.prototype={
S(){return new B.ayw(new B.aSS())}}
B.ayw.prototype={
gkA(){var w,v=this.e
if(v===$){w=new B.Ae(-0.3,0.48,46,D.aO5,$.av())
w.f=80
this.e=w
v=w}return v},
gol(){var w=this.f
return w===$?this.f=B.byi(this.d):w},
q(){var w=this.z
if(w!=null)w.a8(0)
this.a1()},
kd(d,e){var w=this,v=w.z
if(v!=null)v.a8(0)
w.m(new B.d9G(w,d,e))
w.z=C.cM(A.l1,new B.d9H(w))},
oF(d){return this.kd(d,!1)},
nD(){this.gkA().wn(46,0.48,D.aO5,-0.3)
this.m(new B.d9A(this))},
HM(d){var w,v,u,t=this
if(d===0){t.nD()
return}if(d===72){w=t.d
w=w.b&&w.a>=5}else w=!1
if(w){t.m(new B.d9C(t,d))
B.F6()
t.kd("You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.",!0)
t.gkA().FW(22,D.foc)
return}w=d===87
if(w||d===86){v=t.d
v=v.c&&!v.d&&v.a>=5}else v=!1
if(v){if(t.w==="wrench"&&w){t.m(new B.d9D(t,d))
B.F6()
t.kd("You tightened the slip nut with the wrench. The drip has stopped.",!0)
return}B.zI(180,220,0.25,"square")
t.oF(w?"Hand tightening is not enough here. Pick the wrench first, then tap the nut.":"The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.")}u=t.gol().b.h(0,d)
if(u!=null){t.m(new B.d9E(t,d))
w=t.gkA()
v=u.c
w.FW(u.d,v)}},
c76(d){var w,v
A:{if("ptrap"===d){w=D.aPO
break A}if("faucet"===d){w=D.aPh
break A}w=new B.aaA(d,null)
break A}v=this.c
v.toString
C.a6(v,!1).ck(C.eu(new B.d9B(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=D.cYn[m.a],k=o.r,j=k===0?n:B.hLK(k)
k=m.b
w=!m.c||m.d
v=C.a([!k,w],x.u)
w=m.a
k=o.gol()
u=o.gkA()
t=o.r
s=o.x
r=o.y
q=t!==0?o.gol().b.h(0,o.r):n
p=j==null?n:C.aH(n,C.p(n,D.eWJ,A.f,n,n,new C.o(A.aR,n,n,C.m(12),n,n,A.n),n,n,n,n,A.rV,n,n,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.d9K(o,j),n,n,n,n,n,n,!1,A.ac)
k=B.eOy(u,new B.d9L(o),r,t,q,p,new B.d9M(o),s,o.gHi(),o.gHL(),k,n,n)
s=l.a
p=x.p
q=C.A(C.a([C.D(C.d(""+(m.a+1)+". "+s,n,n,n,n,n,n,D.ePp,n,n,n),1),B.aM1("Wrench",A.aY,A.uP,o.w==="wrench",new B.d9N(o))],p),A.m,n,A.e,A.j,0,n,n)
t=C.d(l.b,n,3,A.a2,n,n,n,D.aMd,n,n,n)
m=C.kP(A.bz,6,s,6,0,new B.d9O(o),m.a)
u=v[0]
s=u?"\u2705 Living room power fixed":"\u26a0 Living room has no power"
s=C.D(C.d(s,n,n,n,n,n,n,C.l(n,n,u?A.ew:A.f8,n,n,n,n,n,n,n,n,11.5,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
u=v[1]
r=u?"\u2705 Sink leak fixed":"\u26a0 Kitchen sink drips"
return new B.Yb("Build and fix a house",A.bz,k,C.v(C.a([q,A.bB,t,m,C.A(C.a([s,C.D(C.d(r,n,n,n,n,n,n,C.l(n,n,u?A.ew:A.f8,n,n,n,n,n,n,n,n,11.5,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),A.dJ,n,n),1)],p),A.m,n,A.e,A.j,0,n,n)],p),A.m,n,A.e,A.Q,0,A.p),new B.d9P(d,v),"Stage "+(w+1)+"/7",n)}}
B.ced.prototype={}
B.DV.prototype={}
B.xr.prototype={}
B.Bq.prototype={}
B.n2.prototype={}
B.b8b.prototype={}
B.SV.prototype={
S(){var w=x.N,v=x.C,u=x.S
return new B.aAA(C.T(w,x.a2),C.a([],x.cB),C.T(w,v),C.T(w,v),C.T(w,u),A.at,A.J,A.J,C.b0(u),$,A.bw,0,C.a([],x.X),null,null)}}
B.aAA.prototype={
Z(){var w=this
w.a0()
w.kS()
w.aam()
$.aU.x1$.push(new B.dCi(w))},
aam(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aam=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ay(),$async$aam)
case 6:q=e.rA("ngmy_circuit_passed_v1")
r=q==null?A.U:q
if(s.c!=null)s.m(new B.dBX(s,r))
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
return C.i($async$aam,v)},
aaG(d){return this.bWP(d)},
bWP(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$aaG=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.L(0,d)
u=3
w=6
return C.b(C.ay(),$async$aaG)
case 6:r=f
q=s.cx
p=C.a2(q).k("jG<cn.E,n>")
q=C.B(new C.jG(q,new B.dC_(),p),p.k("G.E"))
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
return C.i($async$aaG,v)},
au9(d,e,f,g){var w="c"+this.y++,v=new B.Bq(w,e,f,g)
this.d.n(0,w,v)
return v},
m6(d,e,f){return this.au9(0,e,f,0)},
a9J(d,e){var w
if(D.y5.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.af(0,new C.u(-36,w))},
t_(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aOS(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fH$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.dw(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ee(m,D.cy9[A.o.G(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.t_(p,0)&&n.t_(p,1)
break
case"or":p=q.a
o=n.t_(p,0)||n.t_(p,1)
break
case"xor":p=q.a
o=n.t_(p,0)!==n.t_(p,1)
break
case"nand":p=q.a
o=!(n.t_(p,0)&&n.t_(p,1))
break
case"nor":p=q.a
o=!(n.t_(p,0)||n.t_(p,1))
break
case"not":o=!n.t_(q.a,0)
break
default:o=n.t_(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bIw(){return this.aOS(null)},
l8(d){var w,v,u,t,s,r,q,p,o,n=this
n.bIw()
if(!n.ax)return
for(w=n.d,w=new C.bc(w,C.a2(w).k("bc<2>")).gai(0),v=new C.hE(w,new B.dCj()),u=n.f,t=n.w,s=0;v.C();){r=w.gT(0).a
if(u.h(0,r)===!0){q=n.fH$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fH$)
o=s+1
B.dD(520+90*A.o.G(s,4),"",200,0,0.25,"square")
s=o}}},
aua(d){var w=this
w.d.a7(0)
A.d.a7(w.e)
w.f.a7(0)
w.r.a7(0)
w.cy=null},
lA(d,e){var w=this.x
return new C.u(d*w.a,e*w.b)},
aqA(d){var w=this
if(w.x.A(0,A.at)){$.aU.x1$.push(new B.dBV(w,d))
return}w.m(new B.dBW(w,d))},
coL(d){this.m(new B.dC0(this,d,$.bBa()[d]))},
c_K(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bBa()[a0]
v=d.d
u=C.a2(v).k("bc<2>")
t=u.k("a3<G.E>")
s=t.k("G.E")
r=C.B(new C.a3(new C.bc(v,u),new B.dBQ(),t),s)
A.d.b0(r,new B.dBR())
q=C.B(new C.a3(new C.bc(v,u),new B.dBS(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new B.dBT(d,w))
return}u=d.r
p=C.dU(u,x.N,x.C)
t=x.s
o=C.a([],t)
for(s=A.o.dr(1,v),n=w.d,m=d.f,l=x.u,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((A.o.fQ(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aOS(0)
h=m.h(0,A.d.gK(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.jz(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aH(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a7(0)
u.v(0,p)
d.m(new B.dBU(d,o,a0))},
auW(d){var w,v,u,t,s=this.d,r=C.a2(s).k("bc<2>")
s=C.B(new C.bc(s,r),r.k("G.E"))
r=C.U(s).k("dz<1>")
s=new C.dz(s,r)
s=new C.bV(s,s.gJ(0),r.k("bV<ai.E>"))
w=d.a
r=r.k("ai.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
c87(d){var w,v,u,t,s,r=this.d,q=C.a2(r).k("bc<2>")
r=C.B(new C.bc(r,q),q.k("G.E"))
q=C.U(r).k("dz<1>")
r=new C.dz(r,q)
r=new C.bV(r,r.gJ(0),q.k("bV<ai.E>"))
w=d.a
v=d.b
q=q.k("ai.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bT6(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.dw(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.y5.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.a9J(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.z(p,o)
s=l}}}return t},
bHt(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.a9J(p,o)
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
c_M(d){var w,v,u,t=this,s=t.auW(d)
if(s!=null){w=t.d.h(0,s)
w.toString
C.eL()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
B.dD(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new B.dC1())
return}u=t.bHt(d)
if(u!=null)t.m(new B.dC2(t,u))
else t.m(new B.dC3(t))},
at7(d){return this.bVU(d)},
bVU(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$at7=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.auW(d)
if(s==null){w=1
break}C.jb()
t.m(new B.dBZ(t,s))
case 1:return C.h(u,v)}})
return C.i($async$at7,v)},
buJ(d){if(this.x.A(0,A.at))return
this.m(new B.dBP(this,d,A.cG))
C.eL()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bBa()[g]
g=x.p
v=C.a([C.aG(h,h,h,h,C.W(i.ax?A.nA:M.qz,A.af,h,h,h,21),h,h,h,new B.dCc(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.m(16)
s=A.cw.j(0.14)
r=C.I(A.cw.j(0.5),A.r,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.eId,h,h,h),C.d(w.b,h,h,h,h,h,h,D.eQd,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.C(A.m1,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?A.bf:A.f8,h,h,h,h,h,h,h,h,12,h,h,A.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.A(C.a([C.D(C.v(q,A.F,h,A.e,A.j,0,A.p),1),C.bM(D.f5R,i.gc_J(),C.bk(A.cw,h,h,h,h,h,h,h,h,h,h,A.c7))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new C.o(s,h,r,t,h,h,A.n),h,h,h,T.KD,D.bjy,h,h,1/0))}u.push(C.D(C.cl(new B.dCd(i)),1))
if(f!=null){t=C.m(14)
s=A.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.y5.h(0,r).a+": "+D.y5.h(0,r).e,h,h,h,h,h,h,A.vB,h,h,h),A.f,h,h,new C.o(s,h,h,t,h,h,A.n),h,h,h,A1.adS,A.bT,h,h,1/0))}u=C.v(u,A.m,h,A.e,A.j,0,A.p)
t=C.a([],g)
for(s=D.y5.gdL(D.y5),s=s.gai(s);s.C();){r=s.gT(s)
q=new C.aZ(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.az(o.j(0.5),1,A.r,-1)
t.push(C.aH(h,C.p(h,C.v(C.a([C.W(p.b,o,h,h,h,20),A.bB,new C.x(p.a,h,D.a5r,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.Q,0,A.p),A.f,h,h,new C.o(n,h,new C.bY(m,m,m,m),new C.bv(q,q,q,q),h,h,A.n),h,h,h,A.fM,O.W1,h,h,58),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.dCe(i,r),h,h,h,h,h,h,!1,A.ac))}s=C.a([],g)
for(l=0;l<4;++l){k=D.cYB[l]
s.push(new B.ff(A.Mb,k.b,new B.dCf(i,k),A.cw,h))}s.push(new B.ff(D.xd,"Clear",new B.dCg(i),A.cx,h))
r=C.a([],g)
for(j=0;q=$.bBa(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.eh:A.l4
o=i.ay
n=i.cx.t(0,j)?A.bf:A.cr
r.push(new B.dx(q.a,o===j,new B.dCh(i,j),p,n,h))}return B.jA(A.cw,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.v(C.a([new B.eH(t,"PARTS",h),new B.eH(s,"TRY",h),new B.eH(r,"TASKS",h)],g),A.m,h,A.e,A.Q,0,A.p))}}
B.b8t.prototype={
a5(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.V()
w=C.L()
w.r=D.a9g.gp(0)
a7.aW(new C.a9(0,0,0+a5,0+a6),w)
v=C.L()
v.r=A.c.j(0.05).gp(0)
for(w=a7.a,u=20;u<a6;u+=28)for(t=14;t<a5;t+=28){s=v.H()
w.drawCircle(t,u,1,s)
s.delete()}for(a5=this.b,a6=a5.e,r=a6.length,q=a5.f,p=x.v,o=a5.d,n=0;n<a6.length;a6.length===r||(0,C.K)(a6),++n){m=a6[n]
l=m.a
k=o.h(0,l)
j=o.h(0,m.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=a5.a9J(j,m.c)
f=q.h(0,l)===!0
l=$.V()
e=C.a([],p)
d=new C.aP(l.r,A.ap,a4,a4,e)
e.push(new C.b5(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.pf(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
l.b=A.ae
l.c=9
l.r=A.cr.j(0.28).gp(0)
l.z=G.mi
s=l.H()
l=d.gbH().a.snapshot()
w.drawPath((d.e=new C.cE(l)).a,s)
s.delete()}l=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
l.b=A.ae
l.c=3.2
l.d=A.bO
l.r=(f?A.dL:A.bv).gp(0)
s=l.H()
l=d.e
w.drawPath((l==null?d.e=new C.cE(d.gbH().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.af(0,D.GY)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new C.aP($.V().r,A.ap,a4,a4,C.a([],p))
w=a3.b
p.E(new C.b5(a6,w))
r=g.b
p.E(new C.pf(a6+a0,w,a5-a0,r,a5,r))
r=C.L()
r.b=A.ae
r.c=3
r.r=A.af.gp(0)
a7.aM(p,r)}for(a5=new C.dw(o,o.r,o.e);a5.C();)this.c_L(a7,a5.d)},
c_L(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.y5.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.cr(a0.c,64,64)
s=C.by(t,A.kR)
r=w.cy===v
q=s.eH(A.cv)
$.V()
p=C.L()
p.r=A.w.j(0.55).gp(0)
p.z=A.lc
d.aA(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.L()
p.sar(new C.bS(A.A,0.5,A.x,g,0,C.a([e.c.j(0.6),A.K],x.O),g,g).av(0,C.bT(a0.c,52)))
d.ae(q,52,p)}q=s.eH(A.cH)
p=C.L()
o=e.c
p.r=C.ar(o,A.w,0.65).gp(0)
d.aA(q,p)
n=u?0.35:0
q=C.L()
p=C.ar(o,A.c,0.1+n)
p.toString
m=C.ar(o,A.w,u?0.2:0.45)
m.toString
q.sar(new C.a5(A.b1,A.b3,A.x,C.a([p,m],x.O),g,g).av(0,t))
d.aA(s,q)
q=C.L()
q.b=A.ae
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aA(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?D.Z_:D.bvZ}else l=e.b
k=B.fII(C.jz(l.a),30,A.c,l.b,g,A.I)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a5(d,v.aB(0,new C.u(p/2,q.gbb(q)/2)))
j=B.fII(e.a,10.5,A.c,g,g,A.I)
j.a5(d,a0.c.af(0,new C.u(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=B.fII(f,9,u?A.dL:A.bZ,g,g,A.u)
i.a5(d,a0.c.af(0,new C.u(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aV2(d,w.a9J(a0,h),o)
this.aV2(d,a0.c.af(0,D.GY),o)},
aV2(d,e,f){var w
$.V()
w=C.L()
w.r=D.a9g.gp(0)
d.ae(e,8.5,w)
w=C.L()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.ae(e,8.5,w)
w=C.L()
w.r=A.c.gp(0)
d.ae(e,3.2,w)},
aq(d){return!0}}
B.aJ1.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.bu8.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
w=this.fc$
w===$&&C.c()
w.q()
this.bqe()}}
B.M3.prototype={
S(){return new B.aAR(C.mi(0,null,null))}}
B.Jd.prototype={
a3(){return"_UnfoldStyle."+this.b}}
B.zG.prototype={}
B.aAR.prototype={
c_Q(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new B.dHv(w,e))},
bUS(){var w=this
w.e.q()
w.e=C.mi(w.f,null,null)
w.m(new B.dHu(w))},
q(){this.e.q()
this.a1()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.o2(t,C.cb(v,A.bW,t?new B.bob(w.e,w.gc_P(w),new B.dHw(d),v):new B.aF2(u,new C.cz(u.b,x.gj)),v,!1,!1,v,!1),new B.dHx(w,u),x.K)}}
B.bpK.prototype={}
B.bob.prototype={
aV3(d,e){var w=null
return new C.C(E.Wv,C.v(C.a([C.d(d,w,w,w,w,w,w,D.eIN,w,w,w),A.bB,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.A(C.a([C.aG(v,v,v,v,F.op,v,v,v,w.e,v,v,v,v,v,v),A.r_,D.bpl],u),A.m,v,A.e,A.j,0,v,v),s=w.aV3("STUDIOS","Play, make things, and keep what you make")
$.bBb()
return C.bq(!0,C.v(C.a([new C.C(D.bou,t,v),C.D(C.v_(0,v,A.q,w.c,A.z,v,v,v,v,v,!1,v,A.aj,!1,C.a([new C.lU(s,v),new C.nw(A.hE,C.NB(new C.o5(new B.eLQ(d),23,!0,!0,!0,0,C.rr(),v),D.aKg),v),new C.lU(w.aV3("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nw(D.bjF,C.NB(new C.o5(new B.eLR(w),6,!0,!0,!0,0,C.rr(),v),D.aKg),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0)}}
B.ad5.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.m(20),n=C.m(20),m=C.ar(D.rH,p,0.3)
m.toString
w=x.O
m=C.a([m,D.abC],w)
v=C.I(p.j(0.6),A.r,1.2)
u=x.V
t=C.a([new C.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=C.ar(p,A.w,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.ac(0,A.G,p.j(0.5),A.J,12)],u)
return C.aE(!1,A.a1,!0,r,C.aK(!1,o,!0,C.ev(C.v(C.a([C.p(r,C.W(q.c,A.c,r,r,r,24),A.f,r,r,new C.o(r,r,r,r,u,new C.a5(A.ax,A.aC,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.P,C.d(q.a,r,2,A.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.d5,C.d(q.b,r,2,A.a2,r,r,r,C.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.b7,A.j,0,A.p),r,new C.o(r,r,v,n,t,new C.a5(A.ax,A.aC,A.x,m,r,r),A.n),r,A.Ev,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ad)}}
B.ac_.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.m(20),g=C.m(20),f=C.ar(D.rH,A.d.gK(i),0.24)
f.toString
w=x.O
f=C.a([f,D.abC],w)
v=C.I(A.d.gK(i).j(0.35),A.r,1)
u=x.V
t=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cv,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.aZ(6,6)
m=C.a([A.d.gK(i),A.d.gak(i)],w)
l=C.a([new C.ac(0,A.G,A.w.j(0.45),E.aD5,0)],u)
r.push(C.p(k,C.W(q[p],A.c,k,k,k,11),A.f,k,k,new C.o(k,k,k,new C.bv(n,n,n,n),l,new C.a5(A.a3,A.a7,A.x,m,k,k),A.n),k,17,k,new C.N(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.v(r,A.m,k,A.e,A.Q,0,A.p)
u=C.ar(A.d.gK(i),A.d.gak(i),0.4)
u.toString
return C.aE(!1,A.a1,!0,k,C.aK(!1,h,!0,C.ev(C.v(C.a([new C.a4(58,k,w,k),A.S,C.d(j.b,k,2,A.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.av,C.W(A.AT,A.d.gK(i),k,k,k,18)],s),A.m,k,A.b7,A.j,0,A.p),k,new C.o(k,k,v,g,t,new C.a5(A.ax,A.aC,A.x,f,k,k),A.n),k,A.Ev,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ad)}}
B.OI.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.ar(A.d.gak(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=C.an(-8,C.bW(j,new C.o(h,j,j,C.m(22),j,j,A.n),A.bc),j,j,2,2,8,j)
u=C.m(22)
t=k.y
s=x.V
r=C.a([new C.ac(0,A.G,A.w.j(0.55),A.Qd,26),new C.ac(-6,A.G,A.d.gK(i).j(0.1+0.4*t),A.J,30)],s)
q=C.m(22)
p=C.ar(A.d.gK(i),A.c,0.14)
p.toString
o=A.d.gK(i)
n=A.d.gak(i)
i=C.ar(A.d.gak(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bZ(0,C.bW(j,new C.o(j,j,j,j,j,new C.a5(A.ax,A.aC,A.x,C.a([p,o,n,i],m),D.d2i,j),A.n),A.bc),0,0,0),C.an(j,C.bW(j,new C.o(j,j,j,j,j,new C.a5(A.b1,A.b3,A.x,C.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bc),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bZ(0,C.b3(j,j,j,new B.bp9(i,j),A.at),0,0,0))
i=A.c.j(0.16)
p=C.I(A.c.j(0.5),A.r,1.4)
s=C.a([new C.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=C.p(j,C.W(k.f,A.c,j,j,j,28),A.f,j,j,new C.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.eKi,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,C.a([A.av,C.d(i,j,1,A.a2,j,j,j,C.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a4,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Ri)
p.push(C.p(j,j,A.f,j,j,new C.o(A.c.j(0.28),j,j,C.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.C(A.fC,C.A(C.a([s,A.eA,C.D(C.v(p,A.F,j,A.e,A.Q,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bZ(0,C.e3(C.ef(j,A.w.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.m(22)
m.push(C.bZ(0,C.e3(C.bW(j,new C.o(j,j,C.I(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bc),!0,j),0,0,0))
return new C.a4(w,v,new C.am(A.X,j,A.a9,A.f,C.a([h,C.bZ(0,C.bW(C.bu(q,new C.am(A.X,j,A.a9,A.q,m,j),A.ao),new C.o(j,j,j,u,r,j,A.n),A.bc),0,0,0)],l),j),j)}}
B.bp9.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.a9(r,-10,s,w)
u=d.a
J.bA(u.save())
u.translate(v.gbO().a,v.gbO().b)
d.iV(0,0.35)
t=C.cr(A.J,(w- -10)*1.6,s-r)
$.V()
s=C.L()
s.sar(new C.a5(A.a3,A.a7,A.x,C.a([A.K,A.c.j(0.3),A.K],x.O),null,null).av(0,t))
d.aW(t,s)
u.restore()},
aq(d){return d.b!==this.b}}
B.boF.prototype={
B(d){var w=null,v=C.m(22),u=C.a([D.b8E,D.aaZ],x.O),t=this.e,s=C.I(A.d.gK(t).j(0.4),A.r,1.2),r=C.a([new C.ac(0,A.G,A.w.j(0.5),A.jR,24)],x.V),q=C.m(22),p=A.d.gK(t)
return new C.a4(this.c,this.d,C.bW(C.bu(q,C.b3(C.au(C.W(A.j7,A.d.gK(t).j(0.7),w,w,w,34),w,w,w),w,w,new B.b7a(p,w),A.at),A.ao),new C.o(w,w,s,v,r,new C.a5(A.ax,A.aC,A.x,u,w,w),A.n),A.bc),w)}}
B.b7a.prototype={
a5(d,e){var w,v,u,t,s,r,q,p
$.V()
w=C.L()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.H()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.H()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.ea(A.J)
$.V()
t=C.L()
t.b=A.ae
t.c=1.4
t.r=v.j(0.35).gp(0)
d.ae(u,30,t)},
aq(d){return!1}}
B.aF2.prototype={
S(){return new B.aF3(new C.cq(null,x.A),null,null)}}
B.aF3.prototype={
gtk(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,D.bh_,null,1,null,v)
w.cE(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
gXP(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.fL,null,1,null,v)
w.f2(0,!0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
gaub(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc_N(){var w=this.w
if(w===$){w=C.B(this.a.c.d,x.G)
this.w=w}return w},
gaRW(){var w=this.x
if(w===$){w=C.B(this.a.c.e,x.Z)
this.x=w}return w},
gaSA(){var w=this.y
if(w===$){w=C.B(this.a.c.f,x.N)
this.y=w}return w},
gb2o(){var w=this.z
if(w===$){w=C.B(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a0()
var w=this.gtk()
w.d5()
w.dM$.L(0,this.gcow())},
cox(){var w,v,u,t,s,r,q,p=this,o=p.gtk().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gaub().a){case 0:w=D.mV
break
case 1:w=D.tr
break
case 2:w=D.a_K
break
case 3:w=D.mV
break
case 4:w=D.cRV
break
case 5:w=D.tr
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a71)r=0.09
else r=s===D.a72?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){B.dD(260+90*v,"",260,1.6,0.18,"tri")
u=D.bNA[v]
B.l5("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
B.AQ("bell",D.bWj,1400,0.35)}}p.ax=o},
q(){this.gtk().q()
this.gXP().q()
this.bs3()},
adZ(){var w=this
w.gtk().cMF(0,C.dA(0,0,0,A.k.U(11e3/w.Q),0,0))
w.m(new B.eLw(w))},
ca6(){this.gtk().bV(0)
this.m(new B.eLv(this))},
abA(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$abA=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaSA(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){q=t[r]
l.push(new C.ap(new C.bb(q,A.b0,A.aM),$.av()))}m=C.a([],m)
for(t=u.gb2o(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){p=t[r]
m.push(new C.ap(new C.bb(p,A.b0,A.aM),$.av()))}o=C.B(u.gaRW(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.c2(D.rH,null,new B.eLu(u,l,m,o),t,!0,!0,!0,A.le,!1,!1,x.H),$async$abA)
case 2:l=C.B(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.R$=$.av()
n.O$=0}return C.h(null,v)}})
return C.i($async$abA,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gaub(),f=i.a.c,e=f.b,d=i.gc_N(),a0=new B.zG(g,e,f.c,d,i.gaRW(),i.gaSA(),i.gb2o())
f=C.ar(A.d.gK(d),A.d.gak(d),0.4)
f.toString
g=x.p
w=C.a([C.aG(h,h,h,h,C.W(i.at?A.nA:M.qz,A.af,h,h,h,21),h,h,h,new B.eLE(i),h,h,h,h,"Sound",h),C.aG(h,h,h,h,D.bFr,h,h,h,i.gc_O(),h,h,h,h,"Edit words and pictures",h),C.aG(h,h,h,h,D.me,h,h,h,new B.eLF(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c5(i.gXP(),new B.eLG(i,a0),h),C.cl(new B.eLH(i,a0))],g)
u=i.as
t=u?i.gca5():i.gccn()
u=u?D.bve:A.tf
s=C.ar(A.d.gK(d),A.d.gak(d),0.4)
s.toString
t=C.A(C.a([C.aG(h,h,h,h,C.W(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.c7),C.D(C.c5(i.gtk(),new B.eLI(i,a1,a0),h),1),C.aG(h,h,h,h,D.bBT,h,h,h,new B.eLJ(i),h,h,h,h,"Replay",A.c7)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.a9(s,1)
r=C.ar(A.d.gK(d),A.d.gak(d),0.4)
r.toString
s=B.hu(r,u+"x","Speed",2.5,0.4,new B.eLK(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.d_L[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.ar(A.d.gK(d),A.d.gak(d),0.4)
r.toString
u.push(new B.dx(p.b,o===p.a,new B.eLL(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bNV[q]
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}m=A.d.gK(o).A(0,A.d.gK(n))?34:28
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}l=A.d.gK(o).A(0,A.d.gK(n))?34:28
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}k=A.d.gK(o).A(0,A.d.gK(n))?A.c:A.b9
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}j=new C.az(k,A.d.gK(o).A(0,A.d.gK(n))?2.5:1,A.r,-1)
d.push(C.aH(h,C.p(h,h,A.f,h,h,new C.o(h,h,new C.bY(j,j,j,j),h,h,new C.a5(A.ax,A.aC,A.x,n,h,h),A.a6),h,l,h,D.adF,h,h,h,m),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.eLM(i,n),h,h,h,h,h,h,!1,A.ac))}return B.jA(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.en(new C.am(A.X,h,A.b_,A.q,v,h),i.f),e,C.v(C.a([t,s,new B.eH(u,"STYLE",h),new B.eH(d,"THEME",h)],g),A.m,h,A.e,A.Q,0,A.p))},
btX(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.mV[r]
p=A.k.D((1-A.et.au(0,A.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.D(p/1.5707963267948966,0,1)
q=D.mV[r]
n=q+0.12
m=A.k.D((a0-n)/(q+0.2-n),0,1)
n=D.mV[r]
q=n-0.01
q=A.k.D((a0-q)/(n+0.03-q),0,1)
n=C.dj()
l=n.a
l.$flags&2&&C.ah(l)
l[11]=0.0013
n.jA(p)
l=v[r]
k=u[r]
j=t[r]
i=D.mV[r]
h=i+0.1
if(A.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.mV[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.mV[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cI(0,r*118,0,f,f,f,new C.kL(q,new C.iB(n,f,A.b1,!0,f,new B.OI(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.mV[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gK(w)
v=D.mV[r]
t=v+0.12
e.push(new C.cI(0,r*118-3-2,0,f,f,4,new C.m1(new B.bnQ(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.at,f,f),f))}return new C.a4(a2,358,new C.am(A.X,f,A.a9,A.f,e,f),f)},
bJU(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.tr[r]
p=A.p8.au(0,A.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.tr[r]
m=q+0.15
l=A.k.D((a0-m)/(q+0.25-m),0,1)
m=D.tr[r]
q=m-0.03
q=A.k.D((a0-q)/(m+0.01-q),0,1)
m=C.dj()
k=m.a
k.$flags&2&&C.ah(k)
k[11]=0.0011
m.jj(n,n,n,1)
m.fm(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new B.OI(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dj()
k.fm(3.141592653589793)
k=new C.iB(k,f,A.A,!0,f,new B.boF(a2,108,w,f),f)}e.push(new C.cI(0,r*130,0,f,f,f,new C.kL(q,new C.iB(m,f,A.A,!0,f,k,f),f),f))}return new C.a4(a2,378,new C.am(A.X,f,A.a9,A.f,e,f),f)},
cti(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.a_K[w]
l.push(A.cp.au(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bZ(0,C.b3(n,n,n,new B.bre(d.d,l,D.as_,m,B.boa(e,0.4,0.62),f,B.boa(e,0.45,0.7),n),A.at),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=B.fJd(g,w)
q=D.as_[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cI(r,s-q*m*p+12,n,n,t,n,new C.kL(o,C.W(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=B.fJd(g,w)
r=D.a_K[w]
q=r+0.15
v.push(new C.cI(s,l,n,n,t,n,new C.kL(A.k.D((e-q)/(r+0.25-q),0,1),new C.x(u[w],n,A.a5z,n,A.L,n,n,n,n,n,n,n),n),n))}return new C.a4(g,m+90,new C.am(A.X,n,A.a9,A.f,v,n),n)},
bzW(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cp.au(0,B.boa(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bZ(0,C.au(C.dS(C.b3(f,f,f,new B.bnh(A.d.gK(a1),B.boa(a3,0,0.2),a4,f),new C.as(a5*0.95,70)),D.dQg),f,f,f),0,0,0))
w=C.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.D((a3-l)/(0.12+m-l),0,1)
j=A.dH.au(0,A.k.D((o-0.7)/0.3,0,1))
l=C.dj()
m=l.a
m.$flags&2&&C.ah(m)
m[11]=0.001
l.fm(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jj(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.G(r,1):-1
w.push(new C.z(o,new C.cI(0,0,0,0,f,f,new C.cv(A.A,f,f,new C.kL(k*(0.45+0.55*o),C.dS(new C.iB(l,f,A.A,!0,f,new B.OI(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.u(n*a5*0.34,-o*18)),f),f),f)))}A.d.b0(w,new B.eLn())
A.d.v(a0,new C.J(w,new B.eLo(),x.fR))
return new C.a4(a5,330,new C.am(A.X,f,A.a9,A.f,a0,f),f)},
bz9(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.tr[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.lP.au(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.tr[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.atS[q]
k=C.dj()
k.mk(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jj(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.tr[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cI(0,0,0,0,e,e,new C.cv(A.A,e,e,new C.kL(m,C.dS(new C.iB(k,e,A.A,!0,e,new B.OI(d,92,w,p,j,i,0,g*s,h,e),e),new C.u(0,l)),e),e),e))
l=D.tr[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cI(0,0,0,0,e,e,new C.cv(A.A,e,e,C.dS(new C.m1(new B.b7Q(w,f,q,e),e,new C.as(r,212),e,e),new C.u(0,D.atS[q])),e),e))}return new C.a4(a4,330,new C.am(A.X,e,A.a9,A.f,a0,e),e)},
bwP(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.u(-b0,-150),new C.u(b0,-40),D.dQk],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.mV[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.cp.au(0,p)
q=D.atX[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.mV[r]
f=g+0.2
e=A.k.D((a8-f)/(g+0.3-f),0,1)
f=D.mV[r]
g=f-0.01
g=A.k.D((a8-g)/(f+0.03-g),0,1)
f=C.dj()
d=f.a
d.$flags&2&&C.ah(d)
d[11]=0.001
f.mk(l*h+D.cVC[r]*o)
f.fm(l*0.9)
h=0.55+0.45*o
f.jj(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cI(0,0,0,0,a3,a3,new C.cv(A.A,a3,a3,new C.kL(g,C.dS(new C.iB(f,a3,A.A,!0,a3,new B.OI(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.u(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.mV[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.atX[r]
a6.push(new C.cI(0,0,0,0,a3,a3,new C.cv(A.A,a3,a3,C.dS(new C.m1(new B.bnj(A.d.gK(w),a2,a3),a3,new C.as(a4,30),a3,a3),new C.u(0,q+48-4)),a3),a3))}}return new C.a4(b0,330,new C.am(A.X,a3,A.a9,A.f,a6,a3),a3)}}
B.bnQ.prototype={
a5(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.a9(w-v,0,w+v,e.b)
q=C.by(u,A.h7)
$.V()
t=C.L()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=G.mi
d.aA(q,t)
t=C.by(u,A.h7)
q=C.L()
q.r=A.c.j(s).gp(0)
d.aA(t,q)},
aq(d){return d.c!==this.c||d.d!==this.d}}
B.bnh.prototype={
a5(d,e){var w,v,u=this.c,t=C.cr(e.ea(A.J),e.b*u,e.a*u)
$.V()
u=C.L()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=R.Gr
d.hV(t,u)
u=C.L()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.hV(t,u)
u=t.cD(-14)
v=C.L()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.hV(u,v)},
aq(d){return!0}}
B.b7Q.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ea(A.J),f=this.c,e=A.cp.au(0,f)
$.V()
w=C.L()
w.b=A.ae
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gK(u).j(0.6*v).gp(0)
d.ae(g,40+e*a0.a*0.42,w)
t=new C.f5()
t.dU(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.ag()*3.141592653589793*2
n=(40+t.ag()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.ag()
j=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
i=(p&1)===0?A.d.gK(u):A.c
j.r=i.j(A.k.D(v,0,1)).gp(0)
h=j.H()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
aq(d){return!0}}
B.bnj.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ea(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.cr(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.V()
o=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.b=A.ae
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.H()
t.drawOval(C.c4(p),n)
n.delete()}},
aq(d){return d.c!==this.c}}
B.bre.prototype={
a5(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.a9(0,d0,0+c5,d0+60)
$.V()
d0=C.L()
w=c1.b
v=x.O
d0.sar(new C.a5(A.b1,A.b3,A.x,C.a([A.d.gK(w).j(0.18),A.K],v),c2,c2).av(0,d1))
d2.aW(d1,d0)
d0=C.L()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bz(new C.u(0,c4),new C.u(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=B.fJd(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.V()
a3=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.lc
a4=a3.H()
t.drawOval(C.c4(new C.a9(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.a9(d,a1,a3,a1+a0)
a6=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
a7=C.ar(A.d.gK(w),A.c,0.1)
a7.toString
a6.sar(new C.a5(A.b1,A.b3,A.x,C.a([a7,A.d.gak(w)],v),c2,c2).av(0,a5))
a4=a6.H()
t.drawRect(C.c4(a5),a4)
a4.delete()
a2=a2.r
a6=C.a([],n)
a8=new C.aP(a2,A.ap,c2,c2,a6)
a6.push(new C.b5(a3,a1))
a7=a3+c8
a9=a1+c9
a6.push(new C.ao(a7,a9))
a6.push(new C.ao(a7,m))
a6.push(new C.ao(a3,c4))
a6.push(new C.bE())
a6=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
a6.r=C.ar(A.d.gak(w),A.w,0.5).gp(0)
a4=a6.H()
a6=a8.gbH().a.snapshot()
t.drawPath((a8.e=new C.cE(a6)).a,a4)
a4.delete()
a6=C.a([],n)
b0=new C.aP(a2,A.ap,c2,c2,a6)
a6.push(new C.b5(d,a1))
a6.push(new C.ao(d+c8,a9))
a6.push(new C.ao(a7,a9))
a6.push(new C.ao(a3,a1))
a6.push(new C.bE())
a2=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
a2.r=C.ar(A.d.gK(w),A.c,0.45).gp(0)
a4=a2.H()
a2=b0.gbH().a.snapshot()
t.drawPath((b0.e=new C.cE(a2)).a,a4)
a4.delete()
b1=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
b1.b=A.ae
b1.c=1
b1.r=A.c.j(0.28).gp(0)
a4=b1.H()
t.drawRect(C.c4(a5),a4)
a4.delete()
a4=b1.H()
a2=a8.e
t.drawPath((a2==null?a8.e=new C.cE(a8.gbH().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.H()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cE(b0.gbH().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bv(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=C.by(new C.a9(b7,a7,b7+r,b5),A.h7)
$.V()
b9=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.H()
t.drawRRect(C.et(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.a9(d,a1,a3,a1+28)
J.bA(t.save())
t.clipRect(C.c4(a5),$.rt()[1],!0)
$.V()
a1=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
a1.sar(new C.a5(A.b1,A.b3,A.x,C.a([A.K,A.c.j(0.4),A.K],v),c2,c2).av(0,c0))
a4=a1.H()
t.drawRect(C.c4(c0),a4)
a4.delete()
t.restore()}}},
aq(d){return!0}}
B.aKJ.prototype={
aP(){this.aX()
this.aV()
this.dD()},
q(){var w=this,v=w.b1$
if(v!=null)v.a2(0,w.gdB())
w.b1$=null
w.a1()}}
B.ZI.prototype={
a3(){return"_Role."+this.b}}
B.pE.prototype={}
B.ql.prototype={}
B.Bu.prototype={}
B.XH.prototype={}
B.acW.prototype={}
B.ZV.prototype={
gX(d){return this.d}}
B.BF.prototype={}
B.a9S.prototype={}
B.aa8.prototype={}
B.ac3.prototype={}
B.bee.prototype={
a0N(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
B.dD(d,"",e,g,h,f)},
b3m(d,e,f){return this.a0N(d,e,f,0,0.55)},
ayA(d,e,f,g){return this.a0N(d,e,f,0,g)},
b3n(d,e,f,g){return this.a0N(d,e,f,g,0.55)},
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
w.b_()},
ahx(d,e,f,g){var w="n"+this.ay++,v=new B.ql(w,e,f,g)
this.a.n(0,w,v)
this.b_()
return v},
Ai(d,e,f){return this.ahx(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bm(w.b,new B.dc2(e))
A.d.bm(w.c,new B.dc3(e))
w.b_()},
b78(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mh.h(0,v.b).c===D.vS)return!1
w=this.b
if(A.d.ba(w,new B.dc_(d,e)))return!1
w.push(new B.Bu(d,e))
this.b_()
return!0},
bTR(d){var w
if(d.b==="beat")return D.bWs[A.o.G(d.d,4)]
w=this.at
switch(A.o.G(d.d,3)){case 1:return 350+w.aD(500)
case 2:return 1400+w.aD(2200)
default:return 450+w.aD(2000)}},
aBV(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.G(w,6)
t=D.aua[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new B.BF(u,t,j.ax,90))
w.push(new B.BF(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ag()*3.141592653589793*2
v.push(new B.ZV(u,new C.u(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b3m(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.G(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ag()*3.141592653589793*2
p=100+w.ag()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.ar(t,A.c,w.ag()*0.5)
m.toString
v.push(new B.ZV(u,new C.u(o*p,n*p),m,3+w.ag()*4.5,1000+w.aD(700),j.ax))}j.f.push(new B.BF(u,t,j.ax,120))
j.ayA(120,200,"noise",0.5)
j.b3m(261.63*Math.pow(2,([7,12,16,19][w.aD(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new B.BF(u,t,j.ax,230))
w.push(new B.BF(u,t,j.ax+160,160))
w.push(new B.BF(u,t,j.ax+320,100))
j.b3n(180+j.at.aD(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new B.a9S(u,new C.u((w.ag()-0.5)*220,-260-w.ag()*180),t,j.ax))
j.b3n(300+w.aD(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ag()*3.141592653589793*2
j.w.push(new B.aa8(u,u.af(0,new C.u(Math.cos(q),Math.sin(q)).aJ(0,260+w.ag()*200)),t,j.ax))
j.a0N(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fY()
j.a0N(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new B.ac3(u,D.atF[v],t,j.ax))
j.ayA(261.63*Math.pow(2,([0,5,9,12][j.at.aD(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.ayA(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.bSz[A.o.G(w,3)]
for(k=1;k<=3;++k)j.cjO(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gai(j.b),v=new C.hE(w,new B.dc0(d));v.C();)j.axa(w.gT(0),j.ax+D.c3L[A.o.G(g.d,4)])
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
case"chance":s=j.at.aD(100)<D.ckv[A.o.G(g.d,3)]
break
default:break}if(s)for(w=A.d.gai(j.b),v=new C.hE(w,new B.dc1(d));v.C();)j.axa(w.gT(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.yx(w,0,v-700)},
cjO(d,e,f){var w=this.c
if(w.length>260)return
w.push(new B.XH(e,"~"+d))},
axa(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new B.acW(d.a,v,e,w))
u.push(new B.XH(w,v))},
aFb(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=C.a2(w).k("bc<2>")
w=C.B(new C.bc(w,v),v.k("G.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aBV(r)
u.n(0,r,o.ax+o.bTR(s))}}w=o.c
v=C.U(w).k("a3<1>")
q=C.B(new C.a3(w,new B.dc4(o),v),v.k("G.E"))
if(q.length!==0){A.d.bm(w,new B.dc5(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.K)(q),++t){u=q[t].b
if(A.a.a_(u,"~")){p=A.a.aY(u,1)
for(u=A.d.gai(v),r=new C.hE(u,new B.dc6(p));r.C();)o.axa(u.gT(0),o.ax)}else o.aBV(u)}}A.d.bm(o.d,new B.dc7(o))
A.d.bm(o.e,new B.dc8(o))
A.d.bm(o.f,new B.dc9(o))
A.d.bm(o.w,new B.dca(o))
A.d.bm(o.x,new B.dcb(o))
A.d.bm(o.r,new B.dcc(o))
o.b_()},
a5M(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
for(v=this.a,v=new C.dw(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(C.E(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=C.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,C.K)(t),++o){n=t[o]
v.push(C.a([n.a,n.b],r))}return A.R.an(C.E(["nodes",m,"edges",v],u,x.ew),null)},
cED(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.a.a(A.R.aF(0,d,null))
k.a7(0)
for(o=x.j,n=J.aV(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gT(n)
u=C.t(J.q(v,"k"))
if(!D.mh.al(0,u))continue
t=C.t(J.q(v,"id"))
m.n(0,t,new B.ql(t,u,new C.u(C.f6(J.q(v,"x"))*k.cy.a,C.f6(J.q(v,"y"))*k.cy.b),A.k.N(C.f6(J.q(v,"p")))))
s=C.c7(C.aJ(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aV(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gT(o)
q=C.t(J.q(r,0))
p=C.t(J.q(r,1))
if(m.al(0,q)&&m.al(0,p))n.push(new B.Bu(q,p))}k.b_()
return!0}catch(l){return!1}},
cHA(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a7(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new B.ql(n,r,new C.u(q*p.a,o*p.b),s))
l.b_()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.b78(w[m.a],w[m.b])}},
gX(d){return this.cy}}
B.EO.prototype={}
B.Un.prototype={
S(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new B.aC4(new B.bee(C.T(w,x.f3),v,u,t,s,r,q,p,o,C.T(w,n),C.T(w,n),C.T(w,n),C.T(w,n),A.cG,A.K,A.at,$.av()),A.bw,A.J,A.J,A.U,null,null)}}
B.aC4.prototype={
aaf(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$aaf=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.ay(),$async$aaf)
case 6:q=n.k7(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new B.ecH(s))
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
return C.i($async$aaf,v)},
a7h(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a7h=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new B.ecw(s))
u=3
w=6
return C.b(C.ay(),$async$a7h)
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
return C.i($async$a7h,v)},
bFP(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a2(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new C.bc(n,w).cG(0,0,new B.ecy())+"|"+A.d.cG(o,0,new B.ecz())
if(v===p.ch)return p.CW
u=new B.ecC()
t=x.s
s=C.a([],t)
r=new B.ecD(p,s,u)
for(n=new C.bc(n,w).gai(0),w=new C.hE(n,new B.ecA());w.C();){q=n.gT(0)
if(!A.d.ba(o,new B.ecB(q)))s.push(C.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.d9(s,0,C.dI(5,"count",x.S),x.N).dA(0)},
Z(){var w,v=this
v.a0()
v.aaf()
v.d.db=v.ay
w=v.pW(new B.ed6(v))
w.ka(0)
v.e!==$&&C.aR()
v.e=w},
q(){var w=this,v=w.as
if(v!=null)v.a8(0)
v=w.e
v===$&&C.c()
v.q()
v=w.d
v.R$=$.av()
v.O$=0
w.br6()},
a9N(d){return this.bTj(d)},
bTj(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$a9N=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.ay(),$async$a9N)
case 6:q=m.aT(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cED(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aT_(A.d.gK(D.atc))
if(s.c!=null)s.m(new B.ecG())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$a9N,v)},
aT_(d){this.d.cHA(0,d.c,d.d)
this.Df()},
Df(){var w=this.as
if(w!=null)w.a8(0)
this.as=C.cM(A.lu,new B.ecs(this))},
auc(d){var w,v,u,t,s=this.d.a,r=C.a2(s).k("bc<2>")
s=C.B(new C.bc(s,r),r.k("G.E"))
r=C.U(s).k("dz<1>")
s=new C.dz(s,r)
s=new C.bV(s,s.gJ(0),r.k("bV<ai.E>"))
w=d.a
r=r.k("ai.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
c88(d){var w,v,u,t,s,r=this.d.a,q=C.a2(r).k("bc<2>")
r=C.B(new C.bc(r,q),q.k("G.E"))
q=C.U(r).k("dz<1>")
r=new C.dz(r,q)
r=new C.bV(r,r.gJ(0),q.k("bV<ai.E>"))
w=d.a
v=d.b
q=q.k("ai.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bT7(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.dw(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mh.h(0,r.b).c===D.vS)continue
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
c_T(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=B.h5j(new C.u(n.a+36,n.b+0),new C.u(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cr7(d){var w,v,u,t,s,r,q=this,p=q.auc(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eL()
u=v.b
if(u==="button"){w.aBV(p)
return}if(q.r)return
t=D.mh.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.pY)s=6
else s=1
v.d=A.o.G(v.d+1,s)
w.b_()
q.Df()
return}if(q.r)return
r=q.c_T(d)
if(r!=null){w=q.d
A.d.cv(w.b,r)
w.b_()
q.Df()}},
c9o(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.c88(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.auc(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aB(0,d)}},
c9p(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b_()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.u(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b_()}}},
aXI(){var w,v,u=this
if(u.z!=null){w=u.bT7(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.b78(v,w)}else v=!1
if(v){C.jI()
u.Df()}u.z=null
u.d.b_()}else if(u.x!=null){if(u.at)u.Df()
u.x=null}},
aas(d){return this.bVV(d)},
bVV(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$aas=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.auc(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.jb()
p=t.c
p.toString
w=3
return C.b(C.c2(D.rH,null,new B.ecJ(q),p,!0,!0,!1,A.le,!1,!1,x.C),$async$aas)
case 3:if(f===!0){r.W(0,s)
t.Df()}case 1:return C.h(u,v)}})
return C.i($async$aas,v)},
c_R(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.Ai(0,d,new C.u(v.a*(0.25+u.ag()*0.5),v.b*(0.2+u.ag()*0.55)))
C.eL()
this.Df()},
ae6(){var w=0,v=C.j(x.H),u=this,t,s
var $async$ae6=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.c2(D.rH,null,new B.ecL(),s,!0,!0,!0,A.le,!1,!1,x.es),$async$ae6)
case 2:t=e
if(t!=null)u.aT_(t)
return C.h(null,v)}})
return C.i($async$ae6,v)},
abB(d){var w=0,v=C.j(x.H),u=this,t
var $async$abB=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.cg(null,null,!0,null,new B.ecv(),t,null,!0,!0,x.C),$async$abB)
case 2:if(f===!0){u.d.a7(0)
u.Df()}return C.h(null,v)}})
return C.i($async$abB,v)},
B(d){var w=this,v=null,u=C.a([C.age(w.r?new C.bI(A.a3,v,v,new C.C(A.Ex,C.ha(D.bzV,D.f_g,new B.ed4(w),v),v),v):w.c_U(),A.bb,A.io),C.D(C.cl(new B.ed5(w)),1)],x.p)
if(!w.r)u.push(w.cmb())
return C.cb(v,A.bW,C.bq(!0,C.v(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0),v,!1,!1,v,v)},
bBA(){var w=null,v=new B.ecx(),u=A.w.j(0.7),t=C.m(26),s=C.I(A.bs.j(0.5),A.r,1)
return C.bZ(0,C.ef(C.au(C.p(w,C.ci(C.v(C.a([D.f9E,A.av,D.fgy,A.ay,v.$4(A.ok,A.bs,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(V.Fg,A.cw,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.l3,A.bY,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(D.btG,A.cr,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.ffU,new C.bI(A.a7,w,w,C.bJ(!1,D.f6Z,w,w,!0,w,w,this.gbBt(),w,w),w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.q,w,A.z,w,w,w,w,A.aj),A.f,w,A.To,new C.o(D.rH,w,s,t,w,w,A.n),w,w,w,A.fv,A1.aeS,w,w,w),w,w,w),u,!0),0,0,0)},
c_U(){var w=this,v=null,u=C.aG(v,v,v,v,F.op,v,v,v,new B.ecR(w),v,v,v,v,v,v),t=w.a6K(A.M1,"How it works",new B.ecS(w),!0),s=w.ay?A.nA:M.qz
return new C.C(D.bnJ,C.A(C.a([u,D.bp9,t,w.a6K(s,"Sound",new B.ecT(w),!0),w.a6K(A.dS,"Ideas",w.gcd4(),!0),w.a6K(D.xd,"Clear",w.gc_S(w),!0),w.aKg(A.iN,"Show",new B.ecU(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aKg(d,e,f,g,h){var w=null,v=h?A.bs:A.c.j(0.08),u=C.m(14),t=C.m(14),s=C.a([C.W(d,h?A.w:A.c,w,w,w,20)],x.p)
return new C.C(Aa.uG,C.aE(!1,A.a1,!0,u,C.aK(!1,t,!0,C.hl(new C.C(new C.N(8,8,8,8),C.A(s,A.m,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ad),w)},
a6K(d,e,f,g){return this.aKg(d,e,f,g,!1)},
cmb(){var w=null,v=new B.ecN(this),u=A.c.j(0.08)
return C.p(w,C.ci(C.A(C.a([v.$2("START",D.vS),v.$2("CHANGE",D.CJ),v.$2("REACT",D.pY)],x.p),A.F,w,A.e,A.j,0,w,w),A.q,w,A.z,w,w,w,w,A.aX),A.f,w,w,new C.o(D.Dz,w,new C.bY(new C.az(u,1,A.r,-1),A.Z,A.Z,A.Z),w,w,w,A.n),w,w,w,w,D.biW,w,w,w)},
cmc(d){var w,v,u,t,s=null,r=D.mh.h(0,d)
r.toString
w=C.m(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.I(v.j(0.5),A.r,1)
return new C.C(A.fM,C.aH(s,C.p(s,C.v(C.a([C.W(r.b,v,s,s,s,22),A.d5,C.d(r.a,s,1,A.a2,s,s,s,D.a5r,s,s,s)],x.p),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new C.o(s,s,t,w,s,new C.a5(A.b1,A.b3,A.x,u,s,s),A.n),s,s,s,s,A.hD,s,s,62),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.ecM(this,d),s,s,s,s,s,s,!1,A.ac),s)}}
B.bef.prototype={
a5(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bA(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.V()
u=C.L()
u.r=A.c.j(0.05).gp(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.H()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.V()
o=C.L()
o.r=b5.cx.j(0.4*((p-b6)/800)).gp(0)
b8.aW(new C.a9(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){l=w[m]
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
d=C.a([],o)
a0=new C.aP(e.r,A.ap,b4,b4,d)
d.push(new C.b5(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new C.pf(h+a1,i,f-a1,g,f,g))
a2=D.mh.h(0,k.b).d
a3=D.mh.h(0,j.b).d
e=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
e.b=A.ae
e.c=3
e.d=A.bO
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.r3(new C.u(h,i),new C.u(f,g))
e.sar(new C.a5(A.a3,A.a7,A.x,d,b4,b4).av(0,new C.a9(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.H()
i=a0.gbH().a.snapshot()
b7.drawPath((a0.e=new C.cE(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=B.h5j(new C.u(i.a+36,i.b+0),new C.u(h.a-36,h.b),a5)
$.V()
h=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
h.r=A.c.j(0.35).gp(0)
h.z=G.mi
q=h.H()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
g.r=A.c.gp(0)
q=g.H()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.af(0,D.GY)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new C.aP($.V().r,A.ap,b4,b4,C.a([],o))
o=a8.b
a0.E(new C.b5(t,o))
i=a9.b
a0.E(new C.pf(t+a1,o,w-a1,i,w,i))
i=C.L()
i.b=A.ae
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aM(a0,i)
i=C.L()
i.r=A.c.gp(0)
b8.ae(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b0=w[m]
o=b0.c
v=A.k.D((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dU.au(0,v)
$.V()
h=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
h.b=A.ae
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gp(0)
q=h.H()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b1=w[m]
v=A.k.D((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=C.l6(o,i,A.dU.au(0,v))
h.toString
i=C.l6(o,i,A.dU.au(0,A.k.D(v-0.35,0,1)))
i.toString
$.V()
o=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.c=5
o.d=A.bO
g=b1.c
f=C.a([g.j(0),g],p)
e=C.r3(i,h)
o.sar(new C.a5(A.a3,A.a7,A.x,f,b4,b4).av(0,new C.a9(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.H()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
i.r=A.c.gp(0)
q=i.H()
b7.drawCircle(o,h,6,q)
q.delete()
i=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
i.r=g.j(0.5*(1-v)).gp(0)
i.z=A.ja
q=i.H()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){a4=w[m]
v=A.k.D((b6-a4.f)/a4.e,0,1)
o=a4.a
$.V()
i=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
i.r=a4.c.j(1-v).gp(0)
q=i.H()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){j=w[m]
o=j.a
$.V()
i=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
h=j.c
i.r=h.j(0.35).gp(0)
i.z=A.ja
q=i.H()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
i.sar(new C.bS(P.pZ,0.5,A.x,b4,0,C.a([A.c,h],p),b4,b4).av(0,C.bT(j.a,8)))
q=i.H()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.K)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=B.beg(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a5(b8,new C.u(t.a-o/2,t.b-(40+60*v+p.gbb(p)/2)))}for(b5=new C.dw(n,n.r,n.e);b5.C();)b3.c8Y(b8,b5.d,b6)
b7.restore()},
c8Y(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mh.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=C.cr(e.c,64,64)
t=C.by(u,A.jT)
s=t.eH(A.cv)
$.V()
r=C.L()
r.r=A.w.j(0.55).gp(0)
r.z=A.lc
d.aA(s,r)
if(v>0){s=t.cD(6)
r=C.L()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.y7
d.aA(s,r)}s=t.eH(A.cH)
r=C.L()
q=h.d
r.r=C.ar(q,A.w,0.65).gp(0)
d.aA(s,r)
r=C.L()
s=C.ar(q,A.c,0.18+0.4*v)
s.toString
p=C.ar(q,A.w,0.35)
p.toString
r.sar(new C.a5(A.b1,A.b3,A.x,C.a([s,p],x.O),j,j).av(0,u))
d.aA(t,r)
r=C.L()
r.b=A.ae
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aA(t,r)
r=h.b
p=e.c
o=B.beg(C.jz(r.a),30,A.c,r.b,j,A.I)
r=o.b
s=r.c
r=r.a.c
o.a5(d,p.aB(0,new C.u(s/2,r.gbb(r)/2)))
n=B.beg(h.a,11,A.c,j,j,A.I)
n.a5(d,e.c.af(0,new C.u(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.G(e.d,r)]
else m=i==="pop"?D.atF[A.o.G(e.d,6)]:j
h=h.c
if(h===D.pY){s=e.c.af(0,new C.u(0,62))
r=C.L()
r.r=D.aua[A.o.G(e.d,6)].gp(0)
d.ae(s,5,r)}else if(m!=null){l=B.beg(m,9.5,A.aA,j,j,A.O)
l.a5(d,e.c.af(0,new C.u(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=B.beg(m,9.5,A.aA,j,j,A.O)
l.a5(d,e.c.af(0,new C.u(-l.b.c/2,54)))}if(k.c)return
if(h!==D.vS)k.aYu(d,e.c.aB(0,D.GY),q)
k.aYu(d,e.c.af(0,D.GY),q)},
aYu(d,e,f){var w
$.V()
w=C.L()
w.r=A.bW.gp(0)
d.ae(e,9,w)
w=C.L()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.ae(e,9,w)
w=C.L()
w.r=A.c.gp(0)
d.ae(e,3.5,w)},
aq(d){return!0}}
B.aJS.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.biK.prototype={}
B.Oz.prototype={
gX(d){return this.d}}
B.UC.prototype={
S(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new B.bhP(new C.cq(null,x.A),w,v,A.cG,A.bw,D.DH,null,null)}}
B.bhP.prototype={
aWg(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bv((1-d.b/(C.aI(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.asE[A.o.G(v,5)]+12*A.o.am(v,5)+12
switch(t.z){case"glow":B.l5("synth",u,420,0.3)
break
case"rainbow":B.l5("bell",u,700,0.35)
break
case"stars":B.l5("pluck",u+12,400,0.4)
break
case"sparks":B.dD(2400+t.r.aD(2000),"",60,0,0.18,"noise")
break
default:B.dD(110+t.r.aD(60),"",140,0,0.22,"noise")}},
c2R(d){return this.aWg(d,!1)},
Z(){var w,v=this
v.a0()
w=v.pW(new B.emS(v))
w.ka(0)
v.w!==$&&C.aR()
v.w=w},
q(){var w=this.w
w===$&&C.c()
w.q()
this.brf()},
gaY1(){var w=this.Q
return w<0?new H.mz(1,A.k.G(this.y*0.18,360),0.85,1).iv():D.OX[w]},
aOx(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gaY1(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.ag()*3.141592653589793*2
switch(l.z){case"fire":q=v.ag()
p=l.as
o=v.ag()
n=v.ag()
m=C.ar(A.cr,A.aE,v.ag())
m.toString
j.push(new B.Oz(new C.u(u+(q-0.5)*p,t),new C.u((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.ag()*0.4),l.y,700+v.aD(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.ag()*200
n=C.ar(k,A.c,v.ag()*0.6)
n.toString
j.push(new B.Oz(d,new C.u(q*o,p*o),n,1.5+v.ag()*3,l.y,600+v.aD(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.ag()*40
j.push(new B.Oz(d,new C.u(q*o,p*o),k,1.2+v.ag()*1.8,l.y,500))}}},
aV5(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gaY1()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new B.biK(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aOx(e)
r.aWg(e,!0)
r.m(new B.emt())},
aV4(){this.ax=null
this.m(new B.ems())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aG(n,n,n,n,D.me,n,n,n,new B.emC(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b3(n,n,n,new B.bp4(k,o.f,o.y,o.at,n),A.at)],m)
if(!o.ay&&k.length===0)j.push(D.aZM)
k=C.aH(A.c5,new C.am(A.X,n,A.b_,A.q,j,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,new B.emD(o),new B.emE(o),new B.emI(o),n,n,n,n,n,n,n,n,n,new B.emJ(o),new B.emK(o),n,n,n,!1,A.ac)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cI2[w]
j.push(new B.dx(v.b,o.z===v.a,new B.emL(o,v),v.c,A.bY,n))}u=C.a([new B.Eg(A.c,o.Q<0,new B.emM(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new B.Eg(D.OX[t],o.Q===t,new B.emN(o,t),!1,n))
s=o.as
s=B.hu(A.bY,A.o.u(A.k.U(s)),"Size",36,4,new B.emO(o),s)
r=o.ch
q=r?A.nA:M.qz
q=C.a([new B.dx("Sound",r,new B.emP(o),q,A.bY,n),new B.ff(A.tl,"Undo",new B.emF(o),A.c,n),new B.ff(D.xd,"Clear",new B.emG(o),A.cx,n)],m)
for(w=0;w<4;++w){p=D.cX4[w]
q.push(new B.Eg(p,o.at.A(0,p),new B.emH(o,p),!1,n))}return B.jA(A.bY,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.en(k,o.d),"SPARK PAINTER",C.v(C.a([new B.eH(j,"BRUSH",n),new B.eH(u,"COLOUR",n),s,new B.eH(q,n,n)],m),A.m,n,A.e,A.Q,0,A.p))}}
B.bp4.prototype={
a5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.V()
w=C.L()
v=a4.e
w.r=v.gp(v)
a6.aW(new C.a9(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.V()
o=C.a([],t)
n=new C.aP(p.r,A.ap,a5,a5,o)
o.push(new C.b5(A.d.gK(q).a,A.d.gK(q).b))
for(p=C.U(q),m=p.k("pA<1>"),l=new C.pA(q,1,a5,m),l.Gg(q,1,a5,p.c),l=new C.bV(l,l.gJ(0),m.k("bV<ai.E>")),m=m.k("ai.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.ao(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bw(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gK(q)
$.V()
p=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
p.r=r.c.gp(0)
j=p.H()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.V()
q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.b=A.ae
q.d=A.bO
q.e=A.fw
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new C.hp(A.G,p)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cE(n.gbH().a.snapshot()):q).a,j)
j.delete()
q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.b=A.ae
q.d=A.bO
q.e=A.fw
q.c=p
q.r=o.gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cE(n.gbH().a.snapshot()):q).a,j)
j.delete()
q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.b=A.ae
q.d=A.bO
q.e=A.fw
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cE(n.gbH().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new H.mz(1,A.o.G(i*5,360),0.85,1).iv()
o=q[i-1]
m=q[i]
$.V()
l=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
l.c=p
l.d=A.bO
l.r=h.gp(0)
j=l.H()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,C.K)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gK(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new H.mz(1,A.o.G(a3*23,360),0.7,1).iv():l
a4.c_V(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.V()
p=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=F.Pp
j=p.H()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c_V(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.V(),o=C.a([],x.v),n=new C.aP(p.r,A.ap,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new C.b5(r,q)
o.push(r)
q=n.f
if(q!=null)r.bw(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new C.ao(r,q)
o.push(r)
q=n.f
if(q!=null)r.bw(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.E(new C.bE())
$.V()
p=C.L()
p.r=h.j(0.4).gp(0)
p.z=A.ja
d.aM(n,p)
p=C.L()
p.r=h.gp(0)
d.aM(n,p)},
aq(d){return!0}}
B.UO.prototype={
S(){return new B.aCi(new C.cq(null,x.A),new C.ap(new C.bb("NGMY",A.b0,A.aM),$.av()),null,null)}}
B.aCi.prototype={
gHN(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.rR,null,1,null,v)
w.cE(0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
Z(){this.a0()
var w=this.gHN()
w.d5()
w.dM$.L(0,this.gbSi())},
bSj(){var w,v,u,t,s,r,q,p=this,o=p.gHN().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.lI:new C.lV(w)).gJ(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)B.dD(1500,"",35,0,0.18,"square")
else if(s==="glitch")B.dD(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
B.l5(s,D.arC[A.o.G(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gHN().q()
var w=this.f
w.R$=$.av()
w.O$=0
this.brl()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.lV(h)
w=C.B(h,C.a2(h).k("G.E"))}v=D.OX[k.w]
h=x.p
u=C.a([C.aG(j,j,j,j,D.me,j,j,j,new B.etr(k,d),j,j,j,j,"Share",j)],h)
t=C.m(26)
s=D.atG[k.y]
s=C.bu(t,C.bW(C.au(C.c5(k.gHN(),new B.ets(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a5(A.ax,A.aC,A.x,s,j,j),A.n),A.bc),A.ao)
t=A.c.j(0.06)
t=C.aL(j,A.U,!1,j,!0,A.q,j,C.aM(),i,j,j,j,j,j,2,C.bo(j,new C.b4(4,C.m(14),A.Z),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.Co,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.z,!0,j,!0,j,!1,j,A.ag,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new B.ett(k),j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,A.hj,!0,A.a5,j,A.am,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.ckj[r]
i.push(new B.dx(q.b,k.r===q.a,new B.etu(k,q),j,A.cr,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new B.Eg(D.OX[o],k.w===o,new B.etv(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.nA:M.qz
l=C.a([new B.dx(m,n,new B.etw(k),l,A.cr,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new B.Eg(D.atG[o][0],k.y===o,new B.etx(k,o),!1,j))
n.push(A.bp)
n.push(new B.ff(A.ma,"Replay",new B.ety(k),A.c,j))
m=k.x
return B.jA(A.cr,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.C(A.bA,new C.en(s,k.d),j),"TITLE ANIMATOR",C.v(C.a([t,A.P,new B.eH(i,"MOVE",j),new B.eH(p,"COLOUR",j),new B.eH(l,"SOUND",j),new B.eH(n,"BACK",j),B.hu(A.cr,A.o.u(A.k.U(m)),"Size",96,28,new B.etz(k),m)],h),A.m,j,A.e,A.Q,0,A.p))},
bV0(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cO(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<A.k.bv(g*1.6*f)?1:0
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
p.push(new C.cO(h,A.J,30*v))
p.push(new C.cO(h.j(0.8),A.J,60*v))
w=h
m=v
break
case"glitch":u=A.o.G(A.k.bv(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.b8
else w=u?A.bY:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.lP.au(0,t)
w=h
m=t
break
case"rainbow":w=new H.mz(1,A.k.G(g*360+e*40,360),0.75,1).iv()
A.d.a7(p)
p.push(new C.cO(w.j(0.7),A.J,18))
break
default:w=h}return C.db(C.dS(C.e8(A.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.u(l,o)),m)}}
B.aK0.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.aK6.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.Ze.prototype={}
B.Ul.prototype={
S(){var w=C.a([],x.aS)
return new B.aBY(new C.cq(null,x.A),w,A.cG,A.at,$,A.bw,0,C.a([],x.X),null,null)}}
B.aBY.prototype={
gabC(){var w=this.r
return new C.u(w.a/2,w.b/2)},
aZ9(){return new H.mz(1,this.f.ag()*360,0.6,1).iv()},
aoU(d,e,f,g){var w=this,v=w.gabC().af(0,new C.u(Math.cos(e),Math.sin(e)).aJ(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new B.Ze(v,new C.u(-t,s).aJ(0,r).aJ(0,u*f),w.Q*(0.6+w.f.ag()*0.9),w.aZ9(),C.a([],x.g)))},
bAX(d,e,f){return this.aoU(d,e,f,!1)},
bAW(d,e){return this.aoU(d,e,1,!1)},
cos(){var w,v,u,t=this
A.d.a7(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bAW(40+w*u/5,v.ag()*3.141592653589793*2)},
bBP(){var w=this.r
this.bAX(Math.min(w.a,w.b)*0.42,this.f.ag()*3.141592653589793*2,0.45)},
Z(){this.a0()
this.kS()},
l8(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.at))return
w=a2.e
v=w.length
if(v===0&&a2.fH$<300)return
u=a2.gabC()
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
if(o.length!==0){m=A.d.gak(o)
j=n.a
f=m.a-j.a
j=m.b-j.b
j=Math.sqrt(f*f+j*j)>3
m=j}else m=!0
if(m)o.push(n.a)
if(o.length>260)A.d.cv(o,0)}else A.d.a7(n.e)}for(p=0;p<w.length;w.length===o||(0,C.K)(w),++p){n=w[p]
v=n.a
a1=!1
if(v.b<r)if(J.lI(v.a-s)!==J.lI(n.f-s)){v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
m=v<Math.min(Math.abs(m.a),Math.abs(m.b))
a1=m}if(a1&&a2.ax&&a2.fH$-n.r>250){n.r=a2.fH$
v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
B.l5("bell",D.arC[A.k.U((1-A.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a3(w,new B.e9H(u),C.U(w).k("a3<1>")).gJ(0)>0&&a2.ax)B.dD(70,"",300,0.6,0.8,"sine")
A.d.bm(w,new B.e9I(a2,u))},
ccY(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gabC()
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
gaSF(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aB(0,w).aJ(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aG(r,r,r,r,D.me,r,r,r,new B.e9v(s,d),r,r,r,r,"Share",r)],q),o=C.cl(new B.e9w(s)),n=s.w
n=B.hu(A.cL,A.k.a9(n,1)+"x","Sun mass",2.5,0.3,new B.e9x(s),n)
w=s.x
w=B.hu(A.cL,A.k.a9(w,1)+"x","Time",3,0.2,new B.e9z(s),w)
v=s.Q
v=B.hu(A.cL,A.o.u(A.k.U(v)),"Planet size",16,3,new B.e9A(s),v)
u=s.ax
t=u?A.nA:M.qz
return B.jA(A.cL,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.v(C.a([n,w,v,new B.eH(C.a([new B.dx("Sound",u,new B.e9B(s),t,A.cL,r),new B.dx("Trails",s.z,new B.e9C(s),A.Mf,A.cL,r),new B.dx("Planets pull each other",s.y,new B.e9D(s),A.xD,A.cL,r)],q),r,r),new B.eH(C.a([new B.ff(A.m9,"Solar system",new B.e9E(s),A.cL,r),new B.ff(A.mS,"Comet",new B.e9F(s),A.c,r),new B.ff(A.m6,"Cluster",new B.e9G(s),A.c,r),new B.ff(D.xd,"Clear",new B.e9y(s),A.cx,r)],q),r,r)],q),A.m,r,A.e,A.Q,0,A.p))}}
B.bix.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.V()
w=C.L()
w.r=D.Ux.gp(0)
d.aW(new C.a9(0,0,0+g,0+f),w)
v=new C.f5()
v.dU(5)
for(w=d.a,u=0;u<70;++u){t=v.ag()
s=v.ag()
r=v.ag()
q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.r=A.c.j(0.25+v.ag()*0.4).gp(0)
p=q.H()
w.drawCircle(t*g,s*f,r*1.2+0.3,p)
p.delete()}o=16+i.d*6
g=i.c
f=o*3.2
t=C.L()
s=x.O
t.sar(new C.bS(A.A,0.5,A.x,h,0,C.a([A.cL.j(0.45),A.K],s),h,h).av(0,C.bT(g,f)))
d.ae(g,f,t)
t=C.L()
t.sar(D.e0A.av(0,C.bT(g,o)))
d.ae(g,o,t)
for(g=i.b,f=g.length,n=0;n<g.length;g.length===f||(0,C.K)(g),++n){m=g[n]
t=m.e
if(t.length>1)for(r=m.d,u=1;q=t.length,u<q;++u){l=u/q
q=t[u-1]
k=t[u]
j=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.c=2.2*l+0.4
j.d=A.bO
j.r=r.j(l*0.8).gp(0)
p=j.H()
w.drawLine.apply(w,[q.a,q.b,k.a,k.b,p])
p.delete()}t=m.a
r=m.c
q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
k=m.d
q.r=k.j(0.3).gp(0)
q.z=G.mi
p=q.H()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
j=C.ar(k,A.w,0.5)
j.toString
q.sar(new C.bS(P.pZ,0.5,A.x,h,0,C.a([A.c,k,j],s),h,h).av(0,C.bT(m.a,r)))
p=q.H()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.L()
t.c=2
t.r=A.j2.gp(0)
d.bz(g,f,t)
t=C.L()
t.r=A.c.gp(0)
d.ae(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,C.K)(g),++n){m=g[n]
t=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
t.r=A.c.j(0.7).gp(0)
p=t.H()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
aq(d){return!0}}
B.a9Z.prototype={}
B.UJ.prototype={
S(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new B.bhU(new C.cq(null,x.A),w,v,A.cG,A.at,$,A.bw,0,C.a([],x.X),null,null)}}
B.bhU.prototype={
Z(){this.a0()
this.kS()},
c_W(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.e,v=k.r;w.length<A.k.U(k.x);){u=v.ag()*3.141592653589793*2
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
w.push(new B.a9Z(new C.u(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.u(p*n,o*n),A.k.G(m*60+l,360)))}while(w.length>A.k.U(k.x))w.pop()},
l8(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.at))return
a2.c_W()
w=a2.f
A.d.bm(w,new B.esT(a2))
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
A.d.bm(w,new B.esU(a2))
if(w.length<a1&&a2.ch)B.l5("bell",12+a2.r.aD(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fH$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fH$
B.l5("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aG(l,l,l,l,D.me,l,l,l,new B.esI(m,d),l,l,l,l,"Share",l)],k),i=C.cl(new B.esJ(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cJz[w]
h.push(new B.dx(v.b,m.at===v.a,new B.esK(m,v),v.c,A.bf,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cu5[w]
u.push(new B.dx(t.b,m.ax===t.a,new B.esL(m,t),l,A.bf,l))}s=m.ch
r=s?A.nA:M.qz
r=C.a([new B.dx("Sound",s,new B.esM(m),r,A.bf,l)],k)
s=m.x
s=B.hu(A.bf,A.o.u(A.k.U(s)),"How many",150,15,new B.esN(m),s)
q=B.hu(A.bf,l,"Together",2.5,0,new B.esO(m),m.y)
p=B.hu(A.bf,l,"Apart",2.5,0,new B.esP(m),m.z)
o=B.hu(A.bf,l,"Same way",2.5,0,new B.esQ(m),m.Q)
n=m.as
return B.jA(A.bf,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.v(C.a([new B.eH(h,"TOUCH",l),new B.eH(u,"LOOK",l),new B.eH(r,l,l),s,q,p,o,B.hu(A.bf,A.o.u(A.k.U(n)),"Speed",280,50,new B.esR(m),n)],k),A.m,l,A.e,A.Q,0,A.p))}}
B.bpW.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.aaN,D.bd0],x.O)
else{v=x.O
w=a4==="fly"?C.a([A.da,L.JY],v):C.a([D.bal,D.b2p],v)}v=0+a6.a
u=0+a6.b
t=$.V()
s=C.L()
s.sar(new C.a5(A.b1,A.b3,A.x,w,a3,a3).av(0,new C.a9(0,0,v,u)))
a5.aW(new C.a9(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){q=v[r].a
p=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
p.r=A.cr.gp(0)
o=p.H()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
n.r=A.cr.j(0.25).gp(0)
n.z=G.mi
o=n.H()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new H.mz(1,j,0.7,1).iv()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
f.r=h.j(0.35*g).gp(0)
f.z=A.ja
o=f.H()
s.drawCircle(j.a,j.b,9,o)
o.delete()
j=k.a
f=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
f.r=A.c.j(g).gp(0)
o=f.H()
s.drawCircle(j.a,j.b,2.6,o)
o.delete()
break
case"bird":J.bA(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
e=Math.sin(l+j)*5
j=C.a([],m)
d=new C.aP(t,A.ap,a3,a3,j)
j.push(new C.b5(8,0))
j.push(new C.ao(-6,-7-e))
j.push(new C.ao(-2,0))
j.push(new C.ao(-6,7+e))
j.push(new C.bE())
j=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.r=h.gp(0)
o=j.H()
j=d.gbH().a.snapshot()
s.drawPath((d.e=new C.cE(j)).a,o)
o.delete()
s.restore()
break
default:J.bA(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
a0=Math.sin(n+j)*3
j=C.a([],m)
d=new C.aP(t,A.ap,a3,a3,j)
j.push(new C.b5(9,0))
j.push(new C.cR(0,-6,-7,a0))
j.push(new C.ao(-12,-4+a0))
j.push(new C.ao(-12,4+a0))
j.push(new C.ao(-7,a0))
j.push(new C.cR(0,6,9,0))
j=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
f=C.ar(h,A.ct,0.6)
f.toString
j.sar(new C.a5(A.a3,A.a7,A.x,C.a([h,f],q),a3,a3).av(0,D.et3))
o=j.H()
j=d.gbH().a.snapshot()
s.drawPath((d.e=new C.cE(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=A.cx
else a1=v==="scare"?A.cr:A.bf
v=u?12:22
u=C.L()
u.b=A.ae
u.c=2.5
u.r=a1.j(0.8).gp(0)
a5.ae(a4,v,u)}},
aq(d){return!0}}
B.aar.prototype={}
B.ST.prototype={
S(){var w=C.a([],x.bi)
return new B.aAz(w,A.cG,A.at,C.T(x.N,x.S),$,A.bw,0,C.a([],x.X),null,null)}}
B.aAz.prototype={
gHc(){var w=this.r,v=18+A.k.U(w*0.85)
return A.o.D(A.k.U(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gaaJ(){return 54-8*(this.r/100)},
Z(){this.a0()
this.kS()
B.yK("chain_burst").by(new B.dBr(this),x.P)},
aV7(){return B.vm("chain_burst",C.E(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
axd(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
A.d.a7(k)
l.z=l.y=!1
w=l.as=0
l.at=null
v=18+A.k.U(l.r*0.85)
for(u=l.e;w<v;++w){t=u.ag()*3.141592653589793*2
s=u.ag()
r=l.f
q=u.ag()
p=l.f
o=Math.cos(t)
n=Math.sin(t)
m=(30+l.r*0.45)*(0.6+u.ag()*0.8)
k.push(new B.aar(new C.u(20+s*(r.a-40),20+q*(p.b-40)),new C.u(o*m,n*m),new H.mz(1,u.ag()*360,0.6,1).iv()))}},
XQ(d){var w,v=this
if(d==null)return 0
w=(v.fH$-d)/1000
if(w<0.4)return v.gaaJ()*A.dU.au(0,w/0.4)
if(w<1.1)return v.gaaJ()
if(w<1.5)return v.gaaJ()*(1-(w-1.1)/0.4)
return 0},
l8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.at)||!j.Q)return
w=j.d
if(w.length===0)j.axd()
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
if(s<8||s>j.f.b-8)t.b=new C.u(r.a,-r.b)}if(j.y){n=C.a([],x.gu)
v=j.at
if(v!=null)n.push(new C.z(v,j.XQ(j.ax)))
for(v=A.d.gai(w),s=new C.hE(v,new B.dBs());s.C();){r=v.gT(0)
n.push(new C.z(r.a,j.XQ(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.K)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fH$
B.dD(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eL()
break}}}if(!(j.at!=null&&j.XQ(j.ax)>0||A.d.ba(w,new B.dBt(j)))&&j.fH$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gHc()){if(j.as>=j.gHc()*1.5)k=3
else k=j.as>=j.gHc()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.n(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
B.AQ("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aV7()}else B.dD(120,"",300,0,0.3,"saw")}}},
aV6(d){this.m(new B.dBh(this,d))
this.aV7()},
abD(){var w=0,v=C.j(x.H),u=this,t,s
var $async$abD=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.cg(null,null,!0,null,new B.dBk(u),s,null,!0,!0,x.S),$async$abD)
case 2:t=e
if(t!=null)u.aV6(t)
return C.h(null,v)}})
return C.i($async$abD,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gHc(),t=w.x.h(0,""+w.r)
return B.jA(A.bY,A.h5,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cl(new B.dBo(w,t==null?0:t,u)),"CHAIN BURST",C.A(C.a([new B.ff(A.qw,"Levels",w.gc_X(),A.bY,v),new B.ff(A.jN,"New board",new B.dBp(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
asn(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aLA,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bSK(d,e){return this.asn(d,e,A.c)}}
B.b8a.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.V()
w=C.L()
w.r=D.DH.gp(0)
d.aW(new C.a9(0,0,0+e.a,0+e.b),w)
v=new B.cH2(d)
w=l.c
if(w!=null)v.$3(w,l.r.$1(l.d),A.c)
for(w=l.b,u=w.length,t=d.a,s=l.r,r=0;r<w.length;w.length===u||(0,C.K)(w),++r){q=w[r]
p=q.d
o=q.a
n=q.c
if(p!=null)v.$3(o,s.$1(p),n)
else{$.V()
p=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
p.r=n.j(0.25).gp(0)
p.z=G.mi
m=p.H()
t.drawCircle(o.a,o.b,12,m)
m.delete()
o=q.a
p=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
p.r=n.gp(0)
m=p.H()
t.drawCircle(o.a,o.b,8,m)
m.delete()}}},
aq(d){return!0}}
B.aJ_.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.bu7.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
w=this.fc$
w===$&&C.c()
w.q()
this.bqc()}}
B.aJP.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.buo.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
w=this.fc$
w===$&&C.c()
w.q()
this.br3()}}
B.aK3.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.buw.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
w=this.fc$
w===$&&C.c()
w.q()
this.bri()}}
B.EK.prototype={
gcGS(){return this.a.aB(0,this.b).gcj()>4}}
B.abg.prototype={}
B.Uf.prototype={
S(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new B.bht(new C.cq(null,x.A),w,v,A.cG,A.at,$,A.bw,0,C.a([],x.X),null,null)}}
B.bht.prototype={
aMg(d){return new H.mz(1,A.o.G(d*29,360),0.6,1).iv()},
Yz(d){var w,v=D.Bo.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.D(A.k.bv(d.a/s*t),0,t-1)
return v[A.o.G(w,u)]+12*A.o.ee(w,u)},
aON(d){A.d.bm(this.e,new B.e5a(this,d))},
ckF(d,e,f){var w=f.aB(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aB(0,e).gcj()
return d.aB(0,e.af(0,w.aJ(0,A.k.D((d.aB(0,e).a*v+d.aB(0,e).b*u)/t,0,1)))).gcj()},
avN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
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
k=g.Yz(new C.u((q+n)/2,(p+m)/2))
p=r?o:new C.u(n,p)
r=r?l:new C.u(q,m)
f.push(new B.EK(p,r,k,new H.mz(1,A.o.G(k*29,360),0.6,1).iv()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.u(v*(0.1+i*0.16+r),w)
k=g.Yz(h)
f.push(new B.EK(h,h,k,new H.mz(1,A.o.G(k*29,360),0.6,1).iv()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.u(v*(0.08+w.ag()*0.84),u*(0.2+w.ag()*0.65))
k=g.Yz(h)
f.push(new B.EK(h,h,k,new H.mz(1,A.o.G(k*29,360),0.6,1).iv()))}}},
Z(){this.a0()
this.kS()},
c_Z(d,e){var w,v=this.fH$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
B.l5(v,d.c+12,w,A.k.D(0.25+e/900,0.25,0.8))}},
l8(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.at))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new B.abg(new C.u(a2.w.a*(0.2+v.ag()*0.6),6),new C.u((v.ag()-0.5)*40,0),new H.mz(1,v.ag()*360,0.5,1).iv()))}if(u>3)a2.as=0
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
if(a1<0){a2.c_Z(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.u(m.a-l*k,m.b-n*k)}}}}}A.d.bm(w,new B.e5z(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aG(p,p,p,p,C.W(q.ay?A.nA:M.qz,A.af,p,p,p,21),p,p,p,new B.e5o(q),p,p,p,p,"Sound",p),C.aG(p,p,p,p,D.me,p,p,p,new B.e5p(q,d),p,p,p,p,"Share",p)],o),m=C.cl(new B.e5q(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.cMM[w]
l.push(new B.dx(v.b,q.x===v.a,new B.e5r(q,v),v.c,A.b8,p))}u=C.a([],o)
for(t=J.aV(D.Bo.gec(D.Bo));t.C();){s=t.gT(t)
u.push(new B.dx(s,q.y===s,new B.e5s(q,s),p,A.b8,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.aux[w]
t.push(new B.dx(r.b,q.z===r.a,new B.e5t(q,r),p,A.b8,p))}s=q.Q
return B.jA(A.b8,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.v(C.a([new B.eH(l,"TOOL",p),new B.eH(u,"SCALE",p),new B.eH(t,"SOUND",p),B.hu(A.b8,A.k.a9(s,1)+"/s","Marbles",4,0.3,new B.e5u(q),s),new B.eH(C.a([new B.ff(D.bvO,"Stairs",new B.e5v(q),A.b8,p),new B.ff(Ai.M0,"Pinball",new B.e5w(q),A.c,p),new B.ff(A.m6,"Random",new B.e5x(q),A.c,p),new B.ff(D.xd,"Clear",new B.e5y(q),A.cx,p)],o),p,p)],o),A.m,p,A.e,A.Q,0,A.p))}}
B.bf8.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.V()
w=C.L()
w.sar(D.bLJ.av(0,new C.a9(0,0,a0,a1)))
a2.aW(new C.a9(0,0,a0,a1),w)
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
if(Math.sqrt(m*m+k*k)>4){q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.b=A.ae
q.d=A.bO
q.c=12+j
q.r=i.j(0.2+h).gp(0)
q.z=A.ja
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()
q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.b=A.ae
q.d=A.bO
q.c=6
q.r=C.ar(i,A.c,r*0.7).gp(0)
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()}else{p=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
p.r=i.j(0.25+h).gp(0)
p.z=A.ja
g=p.H()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
p=C.ar(i,A.w,0.4)
p.toString
j.sar(new C.bS(P.pZ,0.5,A.x,d,0,C.a([A.c,i,p],v),d,d).av(0,C.bT(q,9)))
g=j.H()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=C.L()
u.c=5
u.d=A.bO
u.r=A.aA.gp(0)
a2.bz(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,C.K)(a0),++t){f=a0[t]
u=f.a
q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
p=f.c
q.r=p.j(0.3).gp(0)
q.z=A.qI
g=q.H()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.sar(new C.bS(P.pZ,0.5,A.x,d,0,C.a([A.c,p],v),d,d).av(0,C.bT(f.a,7)))
g=q.H()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
aq(d){return!0}}
B.abL.prototype={}
B.Uk.prototype={
S(){var w=C.a([],x.gB)
return new B.aBX(new C.cq(null,x.A),w,A.cG,A.at,$,A.bw,0,C.a([],x.X),null,null)}}
B.aBX.prototype={
gaV8(){var w=this.w
return new C.u(w.a/2,w.b/2)},
avY(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
ax9(d){var w=D.Bo.h(0,this.y),v=5-d,u=w.length
return w[A.o.G(v,u)]+12*A.o.ee(v,u)},
Z(){this.a0()
this.kS()},
aNC(){var w,v,u,t,s=this.e
A.d.a7(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new B.abL(w,A.k.G(t/v+u,1)))}},
l8(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.at))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fH$
if(p.Q){r=p.z
s=p.ax9(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
B.l5(r,s+12,q,0.55)}}}},
c0_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aB(0,h.gaV8()),e=f.gcj()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.avY(v)-e)
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
m=h.avY(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new B.e94(h,n).$0()
h.c.e3()
return}}h.m(new B.e95(g,h,t))
if(h.Q)B.l5(h.z,h.ax9(g.a)+12,700,0.5)
C.eL()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aG(q,q,q,q,C.W(r.Q?A.nA:M.qz,A.af,q,q,q,21),q,q,q,new B.e9c(r),q,q,q,q,"Sound",q),C.aG(q,q,q,q,D.me,q,q,q,new B.e9d(r,d),q,q,q,q,"Share",q)],p),n=C.cl(new B.e9e(r)),m=r.x
m=B.hu(A.bz,""+A.k.U(m),"Tempo",180,40,new B.e9f(r),m)
w=C.a([],p)
for(v=J.aV(D.Bo.gec(D.Bo));v.C();){u=v.gT(v)
w.push(new B.dx(u,r.y===u,new B.e9g(r,u),q,A.bz,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.aux[t]
v.push(new B.dx(s.b,r.z===s.a,new B.e9h(r,s),q,A.bz,q))}return B.jA(A.bz,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.v(C.a([m,new B.eH(w,"SCALE",q),new B.eH(v,"SOUND",q),new B.eH(C.a([new B.ff(A.dS,"Demo",new B.e9i(r),A.bz,q),new B.ff(A.m6,"Random",new B.e9j(r),A.c,q),new B.ff(D.xd,"Clear",new B.e9k(r),A.cx,q)],p),q,q)],p),A.m,q,A.e,A.Q,0,A.p))}}
B.biy.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.V()
w=C.L()
w.r=D.Ux.gp(0)
a5.aW(new C.a9(0,0,0+a6.a,0+a6.b),w)
w=a3.d
v=a3.e
u=v.$1(w-1)+14
t=a3.c
s=t.aB(0,new C.u(0,u))
r=C.L()
r.c=2
q=x.O
p=t.a
o=p-1
n=t.b
m=n-u
r.sar(new C.a5(A.b3,A.b1,A.x,C.a([A.c.j(0.05),A.c.j(0.5)],q),a4,a4).av(0,new C.a9(o,m,o+2,m+u)))
a5.bz(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new H.mz(1,A.k.G(s.$1(l)*23,360),0.55,1).iv()
o=v.$1(l)
m=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
m.b=A.ae
m.c=1.6
m.r=k.j(0.35).gp(0)
j=m.H()
r.drawCircle(p,n,o,j)
j.delete()
o=D.d2d[A.o.G(A.o.G(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.kt(new C.ep(o,a4,a4,A.cQ,a4,a4,a4,a4,a4,a4,new C.F(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a5,A.ci,new C.jB(1),a4,a4,a4,a4,A.cg,a4)
i.eP()
o=i.b.c
m=J.fD6(v.$1(l))
h=i.b.a.c
i.a5(a5,new C.u(p+-o/2,n+(m-h.gbb(h)-2)))}w=C.L()
w.sar(D.e0d.av(0,C.bT(t,16)))
a5.ae(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.K)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new H.mz(1,A.k.G(s.$1(a0)*23,360),0.55,1).iv()
a2=A.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fD6(v.$1(a0))
a0=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
a0.b=A.ae
a0.c=3*a2
a0.r=k.j(a2).gp(0)
j=a0.H()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
d.r=k.j(0.35).gp(0)
d.z=A.ja
j=d.H()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
d.sar(new C.bS(P.pZ,0.5,A.x,a4,0,C.a([A.c,k],q),a4,a4).av(0,C.bT(new C.u(h,a1),8.5)))
j=d.H()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
aq(d){return!0}}
B.aJN.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.bum.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
w=this.fc$
w===$&&C.c()
w.q()
this.br1()}}
B.aJO.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.bun.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
w=this.fc$
w===$&&C.c()
w.q()
this.br2()}}
B.rL.prototype={}
B.b73.prototype={}
B.Ui.prototype={
S(){var w=x.S
return new B.aBV(C.a([],x.aq),C.T(w,w),C.b0(w),D.eyG)}}
B.aBV.prototype={
Z(){this.a0()
B.yK("molecule_maker").by(new B.e8z(this),x.P)},
ah6(d){var w={}
w.a=0
this.f.bG(0,new B.e8l(w,d))
return w.a},
gaVe(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)t.push(w[u].a)
return B.hMM(t,this.f,D.a0d[this.d])},
c0g(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.f5()
w.dU(t*7+3)
t=v.y
v.m(new B.e8f(v,e,t.a,w,t.b))
B.vp("pop",u.length,90,0.35)},
aug(d){return this.m(new B.e8g(this))},
aVf(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c0m(d){this.m(new B.e8k(this,this.aVf(d)))},
che(){var w=this.r
if(w==null)return
this.m(new B.e8j(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a0d[k.d],h=k.gaVe()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.vd.h(0,w[u].a).a-k.ah6(u)
w=i.c
w=w.gdL(w)
t=w.dn(w,new B.e8t(),x.N).aH(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.bf:A.hq
r=x.p
s=C.v(C.a([new C.C(A.fN,B.f0i(w,s,h&&k.d<12?new B.ff(A.jr,"Next",new B.e8u(k),A.bf,j):j),j),C.D(C.cl(new B.e8v(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new B.dx(p+D.a0d[u].b,k.d===u,new B.e8w(k,u),j,A.hq,j))}q=C.a([],r)
for(p=D.vd.gdL(D.vd),p=p.gai(p);p.C();){o=p.gT(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.dX:m.b
q.push(new B.dx(n+" \xb7 "+m.a,!1,new B.e8x(k,o),j,l,j))}return B.jA(A.hq,A.h5,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.v(C.a([new B.eH(w,"GOAL",j),new B.eH(q,"ADD",j),new B.eH(C.a([new B.dx("Remove selected atom",!1,k.gchd(),A.e8,A.cx,j),new B.dx("Clear all",!1,k.gc0h(k),A.jN,A.aL,j)],r),j,j)],r),A.m,j,A.e,A.Q,0,A.p))}}
B.bfP.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.G(t*37,10)
r=A.o.G(t*53,10)
$.V()
q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.r=A.hq.j(0.03).gp(0)
p=q.H()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bG(0,new B.dk6(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.vd.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.bT(j,26)
if(q===t){$.V()
h=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
h.r=A.aL.j(0.4).gp(0)
h.z=A.ja
p=h.H()
u.drawCircle(j.a,j.b,34,p)
p.delete()}j=m.b
$.V()
h=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
g=l.b
f=C.ar(g,A.c,0.5)
f.toString
e=C.ar(g,A.w,0.5)
e.toString
h.sar(new C.bS(A.ID,0.5,A.x,a3,0,C.a([f,g,e],r),E.asM,a3).av(0,i))
p=h.H()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?A.az:A.c
d=new C.kt(new C.ep(n,a3,a3,A.cQ,a3,a3,a3,a3,a3,a3,new C.F(!0,j,a3,a3,a3,a3,19,A.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),A.a5,A.ci,new C.jB(1),a3,a3,a3,a3,A.cg,a3)
d.eP()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a5(a4,new C.u(n.a-h/2,n.b-j.gbb(j)/2))
n=k===0
a0=n?A.bl:A.aR
j=m.b
h=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
h.r=a0.gp(0)
p=h.H()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.t(k)
a1=new C.kt(new C.ep(n,a3,a3,A.cQ,a3,a3,a3,a3,a3,a3,A.nP),A.a5,A.ci,new C.jB(1),a3,a3,a3,a3,A.cg,a3)
a1.eP()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a5(a4,new C.u(n.a+(20-h/2),n.b+(-20-j.gbb(j)/2)))}if(n===0){d=C.ig(a3,a3,a3,a3,D.eHa,A.a5,A.ci,a3,A.eq,A.cg)
d.eP()
d.a5(a4,new C.u((w-d.b.c)/2,v/2))}},
aq(d){return!0}}
B.Tg.prototype={
S(){var w=x.s
return new B.bgJ(C.a([],w),C.a([],w))}}
B.bgJ.prototype={
Z(){this.a0()
this.atG()
B.yK("dna_lab").by(new B.dJz(this),x.P)},
gb_m(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a1d.h(0,w[u])
t.toString
s.push(t)}return A.d.fO(s)},
ga7i(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.ao(this.gb_m(),w,v))}return u},
atG(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.f5()
k.dU(l.e*31+l.d*7+C.B2(new C.Q(Date.now(),0,!1)))
w=new B.dJo(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mp(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=A.a.ao(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a1d.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.fO(r))}if(!A.d.ba(t,new B.dJn()))break}l.f=v
A.d.a7(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.aYc()},
aYc(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=B.fLG(s.ga7i()[r])
v=J.dG(D.Bp.gec(D.Bp),new B.dJp(w)).dA(0)
u=new C.f5()
u.dU(r+s.e)
A.d.fB(v,u)
u=C.a([w],x.s)
A.d.v(u,C.d9(v,0,C.dI(3,"count",x.S),C.U(v).c))
t=new C.f5()
t.dU(s.e*3+r)
A.d.fB(u,t)
s.z=u},
aVd(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.d7U.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a1d.h(0,w.f[v])
u.toString
break A}u=B.fLG(w.ga7i()[v])
break A}w.m(new B.dJm(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new B.dJx(),e=new B.dJs(),d=h.d===2?h.gb_m():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,Q.mp,g,g,g),A.av],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.bY.j(0.18):A.K
q=new C.aZ(10,10)
p=new C.az(t.length===s?A.bY:A.bH,1,A.r,-1)
o=C.a([],a0)
for(n=h.ga7i()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.cx(A.aX,A.e,A.Q,A.m,g,A.p,g,0,o,g),A.f,g,g,new C.o(r,g,new C.bY(p,p,p,p),new C.bv(q,q,q,q),g,g,A.n),g,g,g,D.bi0,A.em,g,g,g))}v.push(C.c6(A.bF,u,A.bx,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.c6(A.bF,u,A.bx,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a4(34,g,new C.cv(A.A,g,g,C.W(Af.M6,j<t.length?A.aA:A.bH,g,g,g,14),g),g))
A.d.v(v,C.a([new C.C(A.Kz,C.c6(A.bF,u,A.bx,0,0),g)],a0))}v.push(A.aq)
v.push(C.d(w,g,g,g,g,g,g,Q.mp,g,g,g))
v.push(A.av)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.bf.j(0.25):A.du
q=new C.aZ(12,12)
o=j<t.length
p=new C.az(o?A.bf:A.b9,1,A.r,-1)
if(o){o=D.Bp.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.bZ
u.push(C.p(g,new C.x(o,g,new C.F(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(r,g,new C.bY(p,p,p,p),new C.bv(q,q,q,q),g,g,A.n),g,g,g,g,A.eu,g,g,g))}v.push(C.c6(A.bF,u,A.bx,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(C.c6(A.bF,u,A.bx,0,0))}v.push(A.ay)
u=h.w
if(u.length!==0){t=h.r.length
v.push(B.f0i(u,t>=(h.d===2?3:9)?A.bf:A.bY,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(B.f0i(u,A.bY,g))}v.push(A.S)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,F.RR,g,g,g))
v=C.ci(C.v(v,A.F,g,A.e,A.j,0,A.p),A.q,g,A.z,g,A.bA,g,g,A.aj)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new B.dx(D.cS8[j],h.d===j,new B.dJt(h,j),g,A.bY,g))
u=C.a([new B.eH(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bI(A.a3,g,g,new B.ff(A.jN,"New strand",new B.dJu(h),A.bf,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.K)(t),++l){i=t[l]
q=D.Bp.h(0,i)
q.toString
a0.push(new B.ff(D.Yd,q,new B.dJv(h,i),A.bY,g))}u.push(C.c6(A.bF,a0,A.bx,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.arH:D.cCc
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.aZ(14,14)
a0.push(C.aH(g,C.p(A.A,new C.x(k,g,D.eHp,g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(e.$1(k),g,g,new C.bv(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new B.dJw(h,k),g,g,g,g,g,g,!1,A.ac))}u.push(C.A(a0,A.m,g,A.py,A.j,0,g,g))}return B.jA(A.bY,A.h5,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.v(u,A.m,g,A.e,A.Q,0,A.p))}}
B.Tw.prototype={
S(){return new B.aB2(A.bw,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
B.aB2.prototype={
Z(){var w,v=this
v.a0()
w=v.pW(v.gc0i())
w.ka(0)
v.d!==$&&C.aR()
v.d=w
B.yK("ecosystem").by(new B.dMo(v),x.P)},
q(){var w=this.d
w===$&&C.c()
w.q()
this.bqr()},
gaJB(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c0j(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length===0||w-A.d.gak(v)[3]>0.25){w=C.B(m.f,x.i)
w.push(m.w)
v.push(w)
if(v.length>160)A.d.cv(v,0)}if(m.gaJB()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.G(A.k.bv(w),5)===0)B.vm("ecosystem",C.E(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.m(new B.dMb())},
a8u(d){this.m(new B.dMa(this,d))
B.vp("pop",3,120,0.4)},
c0l(){return this.m(new B.dMc(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.v(C.a([new C.C(D.W3,B.f0i(r,t.gaJB()?A.bf:A.cx,s),s),C.D(new C.C(D.biy,C.bu(C.m(18),C.b3(s,s,s,new B.bbc(t.f,t.r,t.w,s),A.eS),A.ao),s),1),new C.C(A.ff,C.d("Alive together: "+A.k.U(t.Q)+" s     Best: "+A.k.U(t.as)+" s",s,s,s,s,s,s,D.eOe,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=B.hu(A.bf,A.k.a9(w,1)+"\xd7","Grass growth",2,0.2,new B.dMg(t),w)
v=t.y
v=B.hu(A.bX,A.k.a9(v,1)+"\xd7","Rabbit breeding",2,0.3,new B.dMh(t),v)
u=t.z
return B.jA(A.bf,A.h5,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.v(C.a([w,v,B.hu(A.cL,A.k.a9(u,1)+"\xd7","Fox hunting",2,0.3,new B.dMi(t),u),new B.eH(C.a([new B.dx("Drought",!1,new B.dMj(t),A.xB,A.aL,s),new B.dx("Disease",!1,new B.dMk(t),D.bvG,A.bz,s),new B.dx("+ Foxes",!1,new B.dMl(t),s,A.cL,s),new B.dx("+ Rabbits",!1,new B.dMm(t),s,A.bX,s),new B.dx("Reset",!1,t.gc0k(),A.jN,A.aY,s)],q),s,s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bbc.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.V()
w=C.L()
w.sar(D.bJP.av(0,new C.a9(0,0,d,a0)))
a1.aW(new C.a9(0,0,d,a0),w)
w=h.b
a0=C.ar(A.uf,A.bl,A.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.L()
t.r=a0.gp(0)
a1.aW(new C.a9(0,v,d,v+u),t)
s=A.k.U(w[0]*0.9)
r=new C.f5()
r.dU(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.ag()*e
o=f*(0.6+0.4*r.ag())
t=Math.sin(a0+q)
n=r.ag()
m=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
m.r=A.fX.gp(0)
m.c=1.6
l=m.H()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new B.d_x(h,a2,f,a1)
k.$5(Math.min(A.k.U(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.U(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.a9(10,a0,e,u)
t=C.L()
t.r=D.b6u.gp(0)
a1.aW(new C.a9(0,f,d,f+g),t)
i=C.L()
i.r=A.du.gp(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.H()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new B.d_z(h,j,a1)
g.$3(0,100,A.bl)
g.$3(1,120,A.bX)
g.$3(2,24,A.cL)
g=new B.d_y(a1,j)
g.$3("Grass "+A.k.U(w[0]),A.bl,16)
g.$3("Rabbits "+A.k.U(w[1]),A.bX,102)
g.$3("Foxes "+A.k.U(w[2]),A.cL,200)},
aq(d){return!0}}
B.aJd.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.aPC.prototype={
gum(){return A.d.cG(this.a,0,new B.bDf())}}
B.SL.prototype={
S(){var w=x.S
return new B.bgp(B.hJR(),C.c0(5,0,!1,w),C.b0(w),A.bw,null,null)}}
B.bgp.prototype={
gvi(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cG(t,0,new B.dxC())},
Z(){var w,v=this
v.a0()
w=v.pW(new B.dxP(v))
w.ka(0)
v.x!==$&&C.aR()
v.x=w
B.yK("balance_lab").by(new B.dxQ(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bq4()},
crk(d){var w,v=this
v.m(new B.dxD(v,d))
B.vp("click",v.f[d],60,0.4)
if(v.gvi()===v.d[v.e].gum()&&v.r.L(0,v.e)){B.vp("zap",10,260,0.5)
w=v.r
w=C.B(w,C.a2(w).k("cn.E"))
B.vm("balance_lab",C.E(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.J(k,new B.dxI(),C.U(k).k("J<1,n>")).aH(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aH(k," + ")
if(o.gvi()===m[o.e].gum())s="\u2696\ufe0f Balanced! "+m[o.e].gum()+" = "+o.gvi()+". The torques are equal, so the seesaw stays level."
else s=o.gvi()>m[o.e].gum()?"The right side is too strong ("+o.gvi()+" vs "+m[o.e].gum()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].gum()+" vs "+o.gvi()+"). Add weight to the right, or place it further from the middle."
k=o.gvi()===m[o.e].gum()?A.bf:A.aL
k=B.bxh(s,k,o.gvi()===m[o.e].gum()&&o.e<m.length-1?new B.ff(A.jr,"Next",new B.dxJ(o),A.bf,n):n)
w=C.D(C.cl(new B.dxK(o,l)),1)
u=j.length===0?"0":j
u=C.D(C.d("Left torque\n"+u+" = "+m[o.e].gum(),n,n,n,n,n,n,D.aMJ,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.v(C.a([new C.C(D.W3,k,n),w,new C.C(D.ae3,C.A(C.a([u,C.D(C.d("Right torque\n"+r+" = "+o.gvi(),n,n,n,n,n,n,D.aMJ,A.dJ,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new B.dx(w+p,o.e===v,new B.dxL(o,v),n,A.aL,n))}return B.jA(A.aL,A.h5,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.v(C.a([new B.eH(u,"LEVEL",n),new B.eH(C.a([new B.dx("Clear right side",!1,new B.dxM(o),A.jN,A.cx,n)],q),n,n)],q),A.m,n,A.e,A.Q,0,A.p))}}
B.b7f.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.aP($.V().r,A.ap,null,null,C.a([],x.v))
i.E(new C.b5(h,f))
w=f+70
i.E(new C.ao(h-30,w))
i.E(new C.ao(h+30,w))
i.E(new C.bE())
v=C.L()
v.r=A.ak.gp(0)
d.aM(i,v)
v=h-120
i=C.L()
i.r=A.aJ.gp(0)
d.aW(new C.a9(v,w,v+240,w+8),i)
i=d.a
J.bA(i.save())
i.translate(h,f)
d.iV(0,j.b)
u=g*5.8
t=C.by(new C.a9(-u,-9,u,9),A.h8)
w=C.L()
w.sar(D.bMp.av(0,new C.a9(t.a,t.b,t.c,t.d)))
d.aA(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.V()
v=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
v.r=A.hB.gp(0)
v.c=1.5
r=v.H()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
B.fcV(d,""+Math.abs(s),new C.u(w,22),A.bZ,10)}q=new B.czA(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,A.aY)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],A.bY)
if(w[s]===0){l=C.by(C.cr(new C.u(m,-22),22,v),A.h8)
$.V()
k=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
k.b=A.ae
k.c=1.4
k.r=A.b9.gp(0)
r=k.H()
i.drawRRect(C.et(l),r)
r.delete()
B.fcV(d,"+",new C.u(m,-22),A.bZ,14)}}i.restore()
$.V()
i=C.L()
i.r=(j.e?A.bf:A.aK).gp(0)
d.ae(new C.u(h,f),7,i)},
aq(d){return!0},
gjx(){return this.e}}
B.TK.prototype={
S(){return new B.bgV(C.a([16,32,12,24],x.t),C.b0(x.S),A.bw,null,null)}}
B.bgV.prototype={
ga__(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gabM(){var w=this.ga__(),v=this.r,u=D.auf[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.d8(this.d,x.S).a<4)
else w=!1
return w},
Z(){var w,v=this
v.a0()
w=v.pW(new B.dQr(v))
w.ka(0)
v.x!==$&&C.aR()
v.x=w
B.yK("gear_lab").by(new B.dQs(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bqz()},
c0n(d,e){var w,v=this
v.m(new B.dQh(v,d,e))
if(v.gabM()&&v.w.L(0,v.r)){B.vp("zap",8,240,0.45)
w=v.w
w=C.B(w,C.a2(w).k("cn.E"))
B.vm("gear_lab",C.E(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga__(),n=r.ga__(),m=D.auf[r.r].a
m=r.gabM()?"\u2705 Done! Ratio "+A.k.a9(r.ga__(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gabM()?A.bf:A.cL
v=r.d
u=x.p
n=C.v(C.a([new C.C(D.W3,B.bxh(m,w,r.gabM()&&r.r<7?new B.ff(A.jr,"Next",new B.dQl(r),A.bf,q):q),q),C.D(C.b3(q,q,q,new B.bcF(v,r.f,q),A.eS),1),new C.C(D.ae3,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.a9(r.ga__(),2)+"   \xb7   Output "+A.k.a9(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.a9(1/n,2),q,q,q,q,q,q,O.a4X,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new B.dx(m+s,r.r===t,new B.dQm(r,t),q,A.cL,q))}p=r.e
u=C.a([new B.eH(o,"GOAL",q),B.hu(A.aY,""+A.k.U(p)+" rpm","Input speed",120,10,new B.dQn(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new B.atA("Gear "+s+" teeth",p,new B.dQo(r,t),8,40,D.d_W[t],""+p,q))}return B.jA(A.cL,A.h5,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.v(u,A.m,q,A.e,A.Q,0,A.p))}}
B.bcF.prototype={
bKP(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.V(),j=C.a([],x.v),i=new C.aP(k.r,A.ap,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.e1o,D.e5V,D.ekN,D.ecG],s=v===0,r=0;r<4;++r){q=t[r]
p=q.a
o=u+p*h
n=e+q.b
m=k+Math.cos(o)*n
l=w+Math.sin(o)*n
if(s&&p===0){p=new C.b5(m,l)
j.push(p)
m=i.f
if(m!=null)p.bw(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}else{p=new C.ao(m,l)
j.push(p)
m=i.f
if(m!=null)p.bw(m)
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
n=A.d.fv(g,A.q2)
m=-n-6
l=n+6
r=e.a
u=e.b
k=Math.min(r/(o-p),u/(l-m))*0.96
s=d.a
J.bA(s.save())
s.translate(r/2-(p+o)/2*k,u/2-(m+l)/2*k)
d.bU(0,k)
j=this.c
u=w[0]
r=w[1]
i=-j*u/r+3.141592653589793/r
r=w[2]
u=w[3]
h=new B.d7h(this,d)
h.$6$back(new C.u(t,0),g[2],r,i,A.dn,!0)
h.$5(new C.u(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.d1)
h.$5(new C.u(0,0),g[0],w[0],j,A.mz)
h.$5(new C.u(t,0),g[1],w[1],i,A.fz)
s.restore()
s=new B.d7i(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aY)
s.$3("2+3 \xb7 shared axle",t,A.cL)
s.$3("4 \xb7 output",q,A.bf)},
aq(d){return!0}}
B.SU.prototype={
S(){var w=$.av()
return new B.bgC(new C.ap(new C.bb("Meet me at noon",A.b0,A.aM),w),new C.ap(new C.bb("LEMON",A.b0,A.aM),w),C.b0(x.S))}}
B.bgC.prototype={
Z(){this.a0()
this.aU9()
B.yK("cipher_lab").by(new B.dBO(this),x.P)},
q(){var w=this.d,v=$.av()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a1()},
aU9(){this.y=1+A.cG.aD(25)
this.z=0},
ga7M(){var w=this
return B.a06(B.a06(D.FW[w.x],w.y),-w.z)===D.FW[w.x]},
gavc(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=B.a06(u,v.w)
break A}if(1===t){w=new C.J(C.a(B.a06(u,0).split(""),x.s),new B.dBw(),x.dv).fO(0)
break A}w=B.hWq(u,v.e.a.a)
break A}return w},
aPF(d){var w,v,u,t,s,r=null,q=C.c0(26,0,!1,x.S)
for(w=new C.d2(d.toUpperCase()),v=x.e8,w=new C.bV(w,w.gJ(0),v.k("bV<bU.E>")),v=v.k("bU.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.fv(q,A.ze))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.aZ(2,2)
v.push(new C.bH(1,A.bo,C.v(C.a([C.p(r,r,A.f,r,r,new C.o(A.aY,r,r,new C.bv(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.KR,r,r,r,r),new C.x(C.jz(65+s),r,D.ePZ,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.mg,A.j,0,A.p),r))}return new C.a4(r,70,C.A(v,A.dG,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=C.a([C.aL(o,A.U,!1,o,!0,A.q,o,C.aM(),p.d,o,o,o,o,o,2,C.bo(o,new C.b4(4,C.m(14),A.Z),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.lg,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dBF(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,D.eKo,!0,A.a5,o,A.am,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,C.a([A.S,C.aL(o,A.U,!1,o,!0,A.q,o,C.aM(),p.e,o,o,o,o,o,2,C.bo(o,new C.b4(4,C.m(14),A.Z),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.lg,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dBG(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.iC,!0,A.a5,o,A.am,o,o,o,o)],v))}w.push(A.ay)
w.push(D.fee)
w.push(A.av)
v=A.aY.j(0.12)
u=C.m(14)
t=C.I(A.aY.j(0.4),A.r,1)
w.push(C.p(o,C.z1(p.gavc().length===0?"\u2026":p.gavc(),D.eP_,o),A.f,o,o,new C.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bA,o,o,o))
w.push(A.aa)
w.push(B.bxh(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aY,o))
w.push(A.aa)
w.push(D.eWV)
w.push(A.av)
w.push(p.aPF(p.gavc()))
w.push(A.av)
w.push(D.eZd)
s=C.cL(w,o,A.bA,o,o,A.aj,!1)}else{w=B.bxh("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aL,o)
v=C.d(B.a06(D.FW[p.x],p.y),o,o,o,o,o,o,D.ePw,o,o,o)
u=(p.ga7M()?A.bf:A.aY).j(0.14)
t=C.m(14)
r=C.I((p.ga7M()?A.bf:A.aY).j(0.5),A.r,1)
t=C.a([w,A.aa,D.f8k,v,A.S,D.f34,C.p(o,C.d(B.a06(B.a06(D.FW[p.x],p.y),-p.z),o,o,o,o,o,o,D.eR_,o,o,o),A.f,o,o,new C.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bA,o,o,o),A.aa,p.aPF(B.a06(D.FW[p.x],p.y)),A.P],x.p)
if(p.ga7M())t.push(B.bxh("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.bf,new B.ff(A.jN,"Next",new B.dBH(p),A.bf,o)))
s=C.cL(t,o,A.bA,o,o,A.aj,!1)}w=p.f
v=x.p
w=C.a([new B.eH(C.a([new B.dx("Make a secret",w===0,new B.dBI(p),A.j7,A.aY,o),new B.dx("Crack a code",w===1,new B.dBJ(p),A.pn,A.aL,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new B.dx(n[q],p.r===q,new B.dBK(p,q),o,A.aY,o))
v=C.a([new B.eH(u,o,o)],v)
if(p.r===0){u=p.w
v.push(B.hu(A.aY,""+u,"Shift",25,1,new B.dBL(p),u))}A.d.v(w,v)}else{v=p.z
w.push(B.hu(A.aL,""+v,"Shift back",25,0,new B.dBM(p),v))}return B.jA(A.aY,A.h5,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.v(w,A.m,o,A.e,A.Q,0,A.p))}}
B.aIS.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.aJl.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.e5.prototype={}
B.rY.prototype={
anE(d,e,f,g){var w=this
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
B.a8A.prototype={}
B.a9E.prototype={}
B.a2N.prototype={
b8Y(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hf()?-1:1
v=t.ag()*3.141592653589793*2
u=f*(0.3+t.ag())
s.push(new B.a8A(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ag()*0.45));++r}},
bXX(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bm(w,new B.bJ_())},
ahx(d,e,f,g){var w="p"+this.c++,v=new B.rY(w,e,f,g)
v.anE(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bm(this.b,new B.bJa(e))},
a7(d){A.d.a7(this.a)
A.d.a7(this.b)},
cyX(d,e,f,g,h){return A.d.ba(this.b,new B.bJ5(e,f,g,h))},
aig(d,e,f,g){var w
if(d===f||this.cyX(0,d,e,f,g))return null
w=new B.a9E(d,e,f,g)
this.b.push(w)
return w},
axH(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
yZ(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
akQ(d){return this.Kx(d)&&!d.x&&d.cx>this.yZ(d)},
b1K(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Kx(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c0o(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.y6.h(0,v)
if(w!=null)return w.a
return 100},
a5M(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.bXX(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=C.U(v).k("a3<1>"),s=0;r=v.length,s<r;v.length===u||(0,C.K)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new C.a3(v,new B.bJb(a2),t).cG(0,0,new B.bJc(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=C.T(x.N,u)
n=new B.bJe(o)
m=C.a([],x.t)
l=new B.bJd(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.K)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,C.K)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=C.T(u,u)
f=new B.bJg(g,l,n)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,C.K)(v),++s){q=v[s]
f.$2(q,0)
f.$2(q,1)}e=g.a
if(e===0)return
s=0
for(;;){if(!(s<t)){d=0
break}q=v[s]
u=q.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){d=f.$2(q,1)
break}++s}for(u=v.length,s=0;s<u;++s)v[s].CW=0
a2.b1G(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.yZ(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b1G(e,d,w,!0)
a2.bHU(a4)},
b1G(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=C.T(x.N,b3),b5=new B.bJ1(b4),b6=C.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new B.bJ0(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.K)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new B.bJ3(C.T(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,C.K)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=C.c0(b7,0,!1,b3)
v=x.W
k=C.T(v,b3)
j=C.T(v,b3)
v=b2.y
i=0.3/b9
q=x.b
h=b7<0
g="Length must be a non-negative integer: "+b7
f=0
for(;;){if(!(f<(c0?10:1)))break
if(h)C.ba(C.dH(g,null))
e=C.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=C.c0(b7,0,!1,b3)
a0=C.c0(b7,0,!1,b3)
k.a7(0)
j.a7(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,C.K)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b1K(t)*(1+t.CW))
a4=b2.axH(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c0o(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bKO(e,a0,b8)
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
if(b1!==b0){v.n(0,a2,b1)
a8=!0}}if(!a8)break;++f
c0=!0}for(b3=w.length,u=0;u<w.length;w.length===b3||(0,C.K)(w),++u){t=w[u]
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
bKO(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return C.c0(d,0,!1,x.i)
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
t[m]=t[m]-g*u[l][m]}}}f=C.c0(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bHU(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.axH(o)/a1.b1K(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.yZ(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bAe(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.b8Y(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.t5(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.t5(o,"The "+$.pQ().h(0,n).b+" got "+A.k.a9(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.t5(o,"More than 1.5 amps went through the "+$.pQ().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.t5(o,"The regulator had to turn "+A.k.a9(o.cy,1)+" V into heat while "+A.k.U(i*1000)+" mA flowed. That is "+A.k.a9(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.t5(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.y6.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.pQ().h(0,n).b
l=f.b
l=l===A.k.jB(l)?""+A.k.U(l):C.t(l)
g=f.c
g=g===A.k.jB(g)?""+A.k.U(g):C.t(g)
a1.t5(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.a9(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.ewF.t(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.t5(o,"The bulb got "+A.k.a9(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.t5(o,"The LED had "+A.k.U(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.D(j/14,0,1)
break
case"motor":n=A.k.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.t5(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.D(i/1,0,1)
if(!o.x&&i>1)a1.t5(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.t5(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.t5(o,"The capacitor was charged to "+A.k.a9(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bAe(d){return A.d.ba(this.a,new B.bIZ(d))},
t5(d,e){var w
d.x=!0
d.ay=e
this.b8Y(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bds(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a7(0)},
aDy(d){var w=d.b
return D.aJg.t(0,w)||D.y6.al(0,w)||w==="buck"||w==="regulator"},
bak(d){var w,v=!0
if(!this.Kx(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.y6.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Td(d,e){var w=this.b
return new C.a3(w,new B.bJi(d,e),C.U(w).k("a3<1>")).gJ(0)},
BH(d){var w,v
if(d.x)return!1
w=d.b
if(D.y6.al(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
b8u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.pQ().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aDy(d)||i.BH(d))return null
w=i.Td(d,0)
v=i.Td(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=C.U(u).k("a3<1>")
s=C.B(new C.a3(u,i.gcH9(),t),t.k("G.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jB(r)?""+A.k.U(r):C.t(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.a9(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.y6.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aDD("battery"),o=J.aV(t.a),t=new C.hE(o,t.b);t.C();){n=o.gT(o)
if(n.e===1.5&&n.as<=0.02&&i.Td(n,0)+i.Td(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aDD("switch"),o=J.aV(t.a),t=new C.hE(o,t.b);t.C();)if(!o.gT(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.pQ().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.yZ(k))return"The "+$.pQ().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.a9(k.cx,2)+" amps, but it can only give about "+A.k.a9(i.yZ(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.ba(u,new B.bJ6(i,d))
h=q.b
h=h===A.k.jB(h)?""+A.k.U(h):C.t(h)
u=A.k.a9(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.a9(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.a9(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aDD(d){var w=this.a
return new C.a3(w,new B.bJ9(d),C.U(w).k("a3<1>"))},
aDc(d){return this.aDD(d).ba(0,new B.bJ8(0.35))},
ajM(d,e){return A.d.ba(this.a,new B.bJ7(e))}}
B.agN.prototype={
a5(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.V()
w=C.L()
w.r=D.JJ.gp(0)
c0.aW(new C.a9(0,0,b8,b9),w)
v=C.L()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.H()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.lE.al(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.lE.al(0,h.b)?(h.ch-1)*38:0
b4.cw7(c0,new C.u(k*b6+j*(42+i),l*b7),new C.u(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=B.hhL(q.a,q.b,c1)
q=b4.e
q.toString
$.V()
p=C.L()
p.r=A.af.gp(0)
p.c=3
p.d=A.bO
c0.bz(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.V()
g=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
g.r=D.aap.j(A.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.y7
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.bA(w.save())
w.translate(j,i)
h=A.k.D(A.lP.au(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.c9V(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.yZ(a0)){g=j+0
f=i+-40
e=Math.sin(r.d*10)
a2=$.V().r
a3=C.a([],k)
a4=new C.aP(a2,A.ap,b5,b5,a3)
a5=f-13
a3.push(new C.b5(g,a5))
a6=g+13
a7=f+10
a3.push(new C.ao(a6,a7))
a8=g-13
a3.push(new C.ao(a8,a7))
a3.push(new C.bE())
a3=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
a3.r=A.aE.j(0.65+0.35*e).gp(0)
s=a3.H()
e=a4.gbH().a.snapshot()
w.drawPath((a4.e=new C.cE(e)).a,s)
s.delete()
e=C.a([],k)
a2=new C.aP(a2,A.ap,b5,b5,e)
e.push(new C.b5(g,a5))
e.push(new C.ao(a6,a7))
e.push(new C.ao(a8,a7))
e.push(new C.bE())
e=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
e.b=A.ae
e.c=1.6
e.r=A.c.gp(0)
s=e.H()
e=a2.gbH().a.snapshot()
w.drawPath((a2.e=new C.cE(e)).a,s)
s.delete()
a9=new C.kt(new C.ep("!",b5,b5,A.cQ,b5,b5,b5,b5,b5,b5,new C.F(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a5,A.ci,new C.jB(1),b5,b5,b5,b5,A.cg,b5)
a9.eP()
a9.a5(c0,new C.u(g+-3,f+-8))}if(!a0.x)g=(D.aJg.t(0,h)||D.y6.al(0,h)||h==="buck"||h==="regulator")&&!r.BH(a0)&&r.Td(a0,0)+r.Td(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.V()
g=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
g.r=A.aR.gp(0)
s=g.H()
w.drawCircle(j,i,10,s)
s.delete()
a9=new C.kt(new C.ep("!",b5,b5,A.cQ,b5,b5,b5,b5,b5,b5,new C.F(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a5,A.ci,new C.jB(1),b5,b5,b5,b5,A.cg,b5)
a9.eP()
a9.a5(c0,new C.u(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.lE.al(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.V()
j=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.r=D.JJ.gp(0)
s=j.H()
w.drawCircle(f,g,7,s)
s.delete()
j=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.b=A.ae
j.c=2.4
j.r=(i&&r.bak(a0)?A.cx:A.af).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bak(a0)){a9=new C.kt(new C.ep("+",b5,b5,A.cQ,b5,b5,b5,b5,b5,b5,new C.F(!0,A.cx,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a5,A.ci,new C.jB(1),b5,b5,b5,b5,A.cg,b5)
a9.eP()
a9.a5(c0,new C.u(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.D(b1.r/0.8,0,1)
j=C.ar(D.bc6,D.bcV,b2)
j.toString
i=b1.f
$.V()
h=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
h.r=j.gp(0)
h.c=2.4
h.d=A.bO
s=h.H()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
i.r=j.j(0.35*b2).gp(0)
i.z=A.Pq
s=i.H()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.ba(q,new B.bEr())){b3=A.d.cG(q,0,new B.bEs())
$.V()
b7=C.L()
b7.r=D.b2c.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aW(new C.a9(0,0,b8,b9),b7)
a9=C.ig(b5,b5,b5,b5,D.eH3,A.a5,A.ci,b5,A.eq,A.cg)
a9.B5(b6-24)
a9.a5(c0,new C.u(12,10))}},
pI(d,e,f,g,h){var w=null,v=C.ig(w,w,w,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a5,A.ci,w,A.eq,A.cg)
v.eP()
v.a5(d,f)},
cw7(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aP($.V().r,A.ap,null,null,C.a([],x.v))
d.E(new C.b5(a1.a,a1.b))
w=B.haf(a1,a2,a3)
d.E(new C.cR(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.ar(A.aL,D.aap,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.ar(A.aY,A.aL,A.k.D(r*1.2,0,1))
u.toString
o=u}else o=A.bn
u=C.L()
u.b=A.ae
u.c=a4?7:5
u.d=A.bO
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aM(d,u)
u=C.L()
u.b=A.ae
u.c=2.4
u.d=A.bO
u.r=(a4?A.c:o).gp(0)
a0.aM(d,u)
if(q){n=new C.Ra(new C.v2(C.wv(d),!1,C.a([],x.U))).gK(0)
m=40+A.k.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.j3()
i=t[u].b
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.j3()
h=t[u].b
h===$&&C.c()
h=A.k.G(j*22+i*m*l,h.a.length())
v.j3()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.j3()
g=t[u].b
g===$&&C.c()
f=A.k.G(h+i,g.a.length())
v.j3()
i=t[u].LD(f).a
h=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
h.r=A.c.gp(0)
e=h.H()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
NN(d,e,f,g){var w,v,u,t
$.V()
w=C.L()
v=g?A.b1:A.a3
u=g?A.b3:A.a7
t=C.ar(e,A.w,0.3)
t.toString
w.sar(new C.a5(v,u,A.x,C.a([e,f,e,t],x.O),A.FY,null).av(0,d))
return w},
atx(d,e,f){return this.NN(d,e,f,!0)},
bXy(d,e){return this.NN(d,A.bn,A.iH,e)},
afb(d,e){var w,v,u
$.V()
w=C.L()
w.sar(D.aHU.av(0,C.bT(e,4.2)))
d.ae(e,4.2,w)
w=e.af(0,D.dS_)
v=e.af(0,D.dS8)
u=C.L()
u.r=A.es.gp(0)
u.c=1.2
d.bz(w,v,u)},
c9V(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.V(),c0=C.L()
c0.sar(D.bJv.av(0,D.etN))
c0.c=3.4
c0.d=A.bO
w=C.L()
w.r=A.w.j(0.45).gp(0)
w.z=G.mi
c1.hV(D.etF,w)
if(c3){w=C.by(D.etM,A.kg)
v=C.L()
v.r=A.c.j(0.14).gp(0)
c1.aA(w,v)}u=B.fRI(c2)
c1.bz(new C.u(-u,0),D.dTh,c0)
c1.bz(D.dR8,new C.u(u,0),c0)
t=c2.x
w=c2.b
s=D.lE.al(0,w)&&c2.ch!==1
if(s){J.bA(c1.a.save())
c1.bU(0,c2.ch)}switch(w){case"battery":b3.bxf(c1,c2)
break
case"solar":r=C.by(D.etI,A.hL)
c1.aA(r,b3.NN(new C.a9(r.a,r.b,r.c,r.d),A.dX,A.bX,!1))
b9=C.L()
w=C.ar(D.b56,A.d6,0.25+0.55*c2.f)
w.toString
v=C.ar(D.bcf,A.lX,0.3+0.4*c2.f)
v.toString
b9.sar(new C.a5(A.ax,A.aC,A.x,C.a([w,v],x.O),b4,b4).av(0,D.a3C))
c1.aW(D.a3C,b9)
q=C.L()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(b9=c1.a,p=1;p<6;++p){w=-34+p*68/6
o=q.H()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}for(p=1;p<4;++p){w=-18+p*9
o=q.H()
b9.drawLine.apply(b9,[-34,w,34,w,o])
o.delete()}for(p=0;p<6;++p){w=-34+(p+0.5)*68/6
$.V()
v=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
v.r=A.cl.j(0.5).gp(0)
v.c=0.6
o=v.H()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}b9=new C.aP($.V().r,A.ap,b4,b4,C.a([],x.v))
b9.E(new C.b5(-34,18))
b9.E(new C.ao(-6+40*c2.f,-18))
b9.E(new C.ao(4+40*c2.f,-18))
b9.E(new C.ao(-24,18))
b9.E(new C.bE())
w=C.L()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aM(b9,w)
w=c2.f
b9=C.L()
b9.r=A.dL.j(0.9).gp(0)
c1.ae(D.dRe,4+4*w,b9)
break
case"crank":n=C.by(D.ett,A.h9)
c1.aA(n,b3.atx(new C.a9(n.a,n.b,n.c,n.d),A.bv,A.bI))
b9=C.L()
b9.sar(D.aHV.av(0,C.bT(A.J,12)))
c1.ae(A.J,12,b9)
m=new C.u(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=C.L()
b9.r=A.cl.gp(0)
b9.c=5
b9.d=A.bO
c1.bz(A.J,m,b9)
b9=C.L()
b9.sar(D.e0w.av(0,C.bT(m,7)))
c1.ae(m,7,b9)
b3.afb(c1,D.dTa)
b3.afb(c1,D.dR1)
break
case"turbine":b9=b9.r
w=x.v
v=new C.aP(b9,A.ap,b4,b4,C.a([],w))
v.E(new C.b5(-3,24))
v.E(new C.ao(3,24))
v.E(new C.ao(1.5,0))
v.E(new C.ao(-1.5,0))
v.E(new C.bE())
l=C.L()
l.r=A.bX.gp(0)
c1.aM(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.bA(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=C.a([],w)
j=new C.aP(b9,A.ap,b4,b4,l)
l.push(new C.b5(0,-2))
l.push(new C.cR(6,-14,2,-30))
l.push(new C.cR(-2,-14,0,-2))
l.push(new C.bE())
l=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
l.r=A.c.gp(0)
o=l.H()
l=j.gbH().a.snapshot()
v.drawPath((j.e=new C.cE(l)).a,o)
o.delete()
v.restore()}b9=C.L()
b9.sar(D.e0c.av(0,C.bT(A.J,4.5)))
c1.ae(A.J,4.5,b9)
break
case"switch":n=C.by(D.etA,A.qU)
b9=C.L()
b9.sar(D.akW.av(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aA(n,b9)
b3.afb(c1,D.Qi)
b3.afb(c1,D.aCS)
i=c2.w?D.aCS:D.dQM
b9=C.L()
b9.r=A.az.gp(0)
b9.c=6
b9.d=A.bO
c1.bz(D.Qi,i,b9)
b9=C.L()
b9.r=(c2.w?A.bf:A.bX).gp(0)
b9.c=4
b9.d=A.bO
c1.bz(D.Qi,i,b9)
b9=C.l6(D.Qi,i,0.85)
b9.toString
w=C.L()
w.r=A.aE.gp(0)
c1.ae(b9,5,w)
break
case"fuse":h=C.by(D.aIp,D.aI_)
b9=C.L()
b9.r=A.fk.j(0.25).gp(0)
c1.aA(h,b9)
b9=C.L()
b9.b=A.ae
b9.c=1.4
b9.r=A.aA.gp(0)
c1.aA(h,b9)
if(!t){b9=C.L()
b9.c=1.6
b9.r=C.ar(A.bX,A.cL,c2.fx).gp(0)
c1.bz(D.aD8,D.aCR,b9)}else{b9=C.L()
b9.c=1.6
b9.r=A.bZ.gp(0)
c1.bz(D.aD8,D.dTy,b9)
b9=C.L()
b9.c=1.6
b9.r=A.bZ.gp(0)
c1.bz(D.dRF,D.aCR,b9)
b9=C.L()
b9.r=A.dx.gp(0)
c1.ae(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=C.cr(new C.u(D.vb[g]*22,0),20,9)
w=C.by(f,A.i0)
o=b3.NN(f,A.dn,A.nY,!0).H()
b9.drawRRect(C.et(w),o)
o.delete()}break
case"pot":b9=C.L()
b9.sar(D.e0o.av(0,C.bT(A.J,21)))
c1.ae(A.J,21,b9)
for(b9=c1.a,k=0;k<=10;++k){e=2.356194490192345+k*3.141592653589793*1.5/10
w=Math.cos(e)
v=Math.sin(e)
l=Math.cos(e)
j=Math.sin(e)
d=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
d.r=A.aA.gp(0)
d.c=1.2
o=d.H()
b9.drawLine.apply(b9,[w*18,v*18,l*22,j*22,o])
o.delete()}b9=C.L()
b9.sar(D.e0a.av(0,C.bT(A.J,13)))
c1.ae(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=C.L()
j.r=A.aL.gp(0)
j.c=3
j.d=A.bO
c1.bz(new C.u(b9*3,w*3),new C.u(v*12,l*12),j)
break
case"resistor":a1=C.by(D.aIp,D.aI_)
b9=C.L()
b9.sar(D.bMG.av(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aA(a1,b9)
b9=x.O
a2=C.E([47,C.a([C.b_(b5),C.b_(b6),A.w],b9),100,C.a([C.b_(b7),A.w,C.b_(b7)],b9),220,C.a([C.b_(b8),C.b_(b8),C.b_(b7)],b9),470,C.a([C.b_(b5),C.b_(b6),C.b_(b7)],b9),1000,C.a([C.b_(b7),A.w,C.b_(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(b9=c1.a,p=0;p<3;++p){w=-14+p*9
v=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
v.r=a3[p].gp(0)
o=v.H()
b9.drawRect(C.c4(new C.a9(w,-9,w+4.5,9)),o)
o.delete()}b9=C.L()
b9.r=A.aL.gp(0)
c1.aW(D.etW,b9)
b9=c2.r
b3.pI(c1,b9>=1000?"1k\u03a9":""+A.k.U(b9)+"\u03a9",D.dSQ,A.af,10)
break
case"bulb":w=c2.fx
if(w>0){v=C.L()
v.r=A.dL.j(0.55*w).gp(0)
v.z=A.y7
c1.ae(D.vl,34,v)}n=C.cr(D.dQh,12,18)
c1.aA(C.by(n,A.i0),b3.NN(n,A.bn,A.e2,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
l.r=A.dl.gp(0)
l.c=1
o=l.H()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=C.L()
if(t)v=A.U5
else{v=C.ar(A.e2,A.hQ,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.DB
else{l=C.ar(A.dX,A.dL,c2.fx)
l.toString}w.sar(new C.bS(A.rd,0.5,A.x,b4,0,C.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).av(0,C.bT(A.qR,17)))
c1.ae(A.qR,17,w)
w=C.L()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.ae(A.qR,17,w)
b9=b9.r
w=x.v
l=new C.aP(b9,A.ap,b4,b4,C.a([],w))
l.E(new C.b5(-9,-12))
l.E(new C.cR(-12,-4,-9,0))
v=C.L()
v.b=A.ae
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aM(l,v)
v=C.L()
v.r=A.cU.gp(0)
v.c=1.4
c1.bz(D.dTu,D.dTw,v)
v=C.L()
v.r=A.cU.gp(0)
v.c=1.4
c1.bz(D.dRy,D.dRB,v)
w=C.a([],w)
a4=new C.aP(b9,A.ap,b4,b4,w)
a4.E(new C.b5(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new C.ao(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.bw(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.V()
b9=C.L()
b9.b=A.ae
b9.c=1.8
if(t)w=A.aV
else{w=C.ar(A.dX,D.b5N,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aM(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=C.L()
v.r=A.aE.j(0.6*w).gp(0)
v.z=D.dac
c1.ae(A.qR,30,v)}w=C.L()
w.r=A.e2.gp(0)
w.c=2.4
c1.bz(D.dTA,D.dTz,w)
w=C.L()
w.r=A.e2.gp(0)
w.c=2.4
c1.bz(D.dRH,D.dRG,w)
b9=b9.r
w=x.v
a6=new C.aP(b9,A.ap,b4,b4,C.a([],w))
a6.E(new C.b5(-12,8))
a6.E(new C.ao(-12,-6))
a6.E(new C.cR(0,-26,12,-6))
a6.E(new C.ao(12,8))
a6.E(new C.bE())
v=C.L()
if(t)l=A.K7
else{l=C.ar(A.eK,D.ab4,c2.fx)
l.toString}if(t)j=A.k7
else{j=C.ar(A.k3,A.aE,c2.fx)
j.toString}v.sar(new C.a5(A.ax,A.aC,A.x,C.a([l,j],x.O),b4,b4).av(0,D.et_))
c1.aM(a6,v)
v=C.L()
v.b=A.ae
v.c=1.2
v.r=A.j2.gp(0)
c1.aM(a6,v)
v=C.L()
v.r=A.f0.gp(0)
c1.aW(D.et5,v)
w=new C.aP(b9,A.ap,b4,b4,C.a([],w))
w.E(new C.b5(-7,-4))
w.E(new C.cR(-6,-12,0,-15))
b9=C.L()
b9.b=A.ae
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aM(w,b9)
break
case"motor":a7=new C.a9(-28,-14,20,14)
c1.aA(C.by(a7,A.h8),b3.atx(a7,A.ak,A.aK))
b9=C.L()
b9.r=A.cB.gp(0)
c1.aW(D.esN,b9)
b9=C.L()
b9.r=A.cl.gp(0)
c1.aW(D.esO,b9)
b9=c1.a
J.bA(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.bA(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=C.cr(D.dQz,15,7)
v=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
v.r=A.cL.j(0.9).gp(0)
o=v.H()
b9.drawOval(C.c4(w),o)
o.delete()
b9.restore()}w=C.L()
w.r=A.az.gp(0)
c1.ae(A.J,3,w)
b9.restore()
b3.pI(c1,"M",D.dT9,A.az,14)
break
case"buzzer":a8=C.cr(A.J,42,42)
b9=C.L()
b9.sar(D.e0s.av(0,a8))
c1.hV(a8,b9)
b9=C.L()
b9.r=A.w.gp(0)
c1.ae(A.J,6,b9)
b9=C.L()
b9.b=A.ae
b9.c=1.4
b9.r=A.b9.gp(0)
c1.ae(A.J,6,b9)
b3.pI(c1,"+",D.dT2,A.af,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.G(w.d*14,5):0
l=C.bT(A.J,24+k*5+l)
j=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
j.b=A.ae
j.c=2
j.r=A.bY.j(v*(1-k*0.22)).gp(0)
o=j.H()
b9.drawArc.apply(b9,[C.c4(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=C.by(D.etw,A.h8)
w=C.L()
w.sar(D.bKs.av(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aA(n,w)
w=C.a([],x.v)
a9=new C.aP(b9.r,A.ap,b4,b4,w)
a9.E(new C.b5(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new C.cR(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.bw(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.V()
w=C.L()
w.b=A.ae
w.c=10
w.r=D.b6n.j(0.5*b9).gp(0)
w.z=A.ja
c1.aM(a9,w)}$.V()
b9=C.L()
b9.b=A.ae
b9.c=3.2
b9.d=A.bO
b9.r=C.ar(A.lr,E.ac2,c2.fx).gp(0)
c1.aM(a9,b9)
break
case"capacitor":a7=new C.a9(-16,-22,16,18)
b9=C.by(a7,A.h8)
w=C.L()
w.sar(D.bJn.av(0,a7))
c1.aA(b9,w)
w=C.L()
w.r=A.bX.gp(0)
c1.aW(D.etb,w)
for(p=0;p<4;++p){b0=new C.kt(new C.ep("\u2212",b4,b4,A.cQ,b4,b4,b4,b4,b4,b4,new C.F(!0,A.az,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a5,A.ci,new C.jB(1),b4,b4,b4,b4,A.cg,b4)
b0.eP()
b0.a5(c1,new C.u(-14,-18+p*9))}b1=new C.a9(-16,-24,16,-17)
c1.aA(C.by(b1,A.i0),b3.bXy(b1,!1))
b9=38*c2.fx
w=18-b9
$.V()
v=C.L()
v.r=A.bf.j(0.5).gp(0)
c1.aW(new C.a9(-3,w,11,w+b9),v)
b3.pI(c1,"1F",D.vl,A.c,11)
break
case"radio":a1=C.by(D.a3C,A.h9)
b9=C.L()
b9.sar(D.bMV.av(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aA(a1,b9)
b9=C.L()
b9.b=A.ae
b9.c=1.4
b9.r=A.nY.j(0.6).gp(0)
c1.aA(a1,b9)
b9=C.by(D.etx,A.hL)
w=C.L()
w.r=A.dB.gp(0)
c1.aA(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
v.r=A.lr.gp(0)
v.c=1.4
o=v.H()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=C.L()
w.r=(c2.fx>0?A.fW:A.nh).gp(0)
c1.aW(D.esQ,w)
if(c2.fx>0){w=8+A.k.G(b3.b.d*7,18)
v=C.L()
v.r=A.bM.gp(0)
v.c=1.6
c1.bz(new C.u(w,-13),new C.u(w,-3),v)}w=C.L()
w.sar(D.aHV.av(0,C.bT(D.a2F,6)))
c1.ae(D.a2F,6,w)
w=C.L()
w.r=A.nY.gp(0)
c1.ae(D.dR7,4,w)
w=C.L()
w.r=A.e2.gp(0)
w.c=1.8
c1.bz(D.dR5,D.aCW,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=C.bT(D.aCW,4+k*5+A.k.G(w.d*8,5))
l=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
l.b=A.ae
l.c=1.4
l.r=A.nl.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[C.c4(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=C.by(D.etH,A.h8)
v=C.L()
v.r=I.o4.gp(0)
c1.aA(w,v)
b2=C.by(D.etE,A.i0)
if(c2.fx>0&&!c2.x){b9=c1.a
J.bA(b9.save())
b9.clipRRect(C.et(b2),$.p6(),!0)
b9.translate(-33,-21)
B.fO_(c1,D.ez6,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=C.L()
b9.r=A.bf.gp(0)
c1.ae(D.dRj,1.6,b9)}else{w=C.L()
w.r=D.up.gp(0)
c1.aA(b2,w)
b9=new C.aP(b9.r,A.ap,b4,b4,C.a([],x.v))
b9.E(new C.b5(-33,-21))
b9.E(new C.ao(-10,-21))
b9.E(new C.ao(-33,0))
b9.E(new C.bE())
w=C.L()
w.r=A.c.j(0.05).gp(0)
c1.aM(b9,w)}b9=C.L()
b9.r=A.bv.gp(0)
c1.aW(D.et4,b9)
break}B.hU7(c1,c2,b3.b.d,b3.gc0p())
if(t)b3.pI(c1,"\u2716",D.dTD,A.aE,14)
if(s)c1.a.restore()},
bxf(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.a9(-28,-13,28,13)
d.aA(C.by(w,A.qU),m.atx(w,A.dX,A.iK))
v=new C.a9(-22,-13,22,13)
$.V()
u=C.L()
u.sar(D.akP.av(0,v))
d.aW(v,u)
u=C.L()
u.r=A.e1.gp(0)
d.aW(D.etk,u)
t=new C.a9(28,-5,34,5)
d.aA(C.by(t,A.h7),m.NN(t,A.dX,A.iH,!0))
m.pI(d,"+",D.dQR,A.aL,11)
m.pI(d,"\u2212",D.dTb,A.af,11)
m.pI(d,C.t(l===A.k.jB(l)?A.k.U(l):l)+"V",D.dSW,A.aL,13)
if(l===1.5){u=C.L()
u.r=A.bH.gp(0)
d.aW(D.etj,u)
u=e.as
s=C.L()
s.r=C.ar(A.aE,A.bf,u).gp(0)
d.aW(new C.a9(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.pI(d,"FLAT",D.dSP,A.cx,9)}if(l>2){u=C.L()
u.r=A.b9.gp(0)
u.c=1
d.bz(D.dQn,D.aCB,u)
m.pI(d,l>3?"3 cells":"2 cells",D.dSV,A.aA,8)}}else if(l<=9){r=new C.a9(-22,-17,22,17)
u=C.by(r,A.qU)
$.V()
s=C.L()
s.sar(D.bMu.av(0,r))
d.aA(u,s)
s=C.L()
s.r=A.d1.gp(0)
d.aW(D.etl,s)
for(u=d.a,q=0;q<2;++q){p=D.cZ7[q]
s=p<0?5:3.6
o=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.sar(D.aHU.av(0,C.bT(new C.u(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.pI(d,"9V",D.dSR,A.c,16)}else{r=new C.a9(-34,-16,34,16)
u=C.by(r,A.hL)
$.V()
s=C.L()
s.sar(D.akP.av(0,r))
d.aA(u,s)
s=C.L()
s.r=A.cr.gp(0)
d.aW(D.etG,s)
for(u=d.a,q=0;q<2;++q){s=C.by(C.cr(new C.u(D.atV[q],-20),8,10),A.h7)
o=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.r=A.cl.gp(0)
n=o.H()
u.drawRRect(C.et(s),n)
n.delete()}m.pI(d,"+",D.dQY,A.aE,10)
m.pI(d,"12V",D.dSS,A.az,15)}},
aq(d){return!0}}
B.mh.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a7(k)
A.d.a7(d.b)
w=C.T(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new B.rY(o,r,q,p)
n.anE(o,r,q,p)
k.push(n)
J.ik(s[4],new B.ch3(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.K)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.aig(m,u[1],l,u[3])}}}
B.agL.prototype={
S(){var w=x.N
return new B.agM(A.J,A.at,C.T(w,x.gl),C.b0(w),$,A.bw,0,C.a([],x.X),null,null)}}
B.agM.prototype={
abP(d){var w=this,v=w.as
if(v!=null)v.a8(0)
w.m(new B.bE5(w,d))
w.as=C.cM(A.l1,new B.bE6(w))},
q(){var w=this.as
if(w!=null)w.a8(0)
w=this.ch
if(w!=null)w.a8(0)
this.bnh()},
Z7(d,e){return this.c7X(d,e)},
aXb(d){return this.Z7(d,!1)},
c7X(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$Z7=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.qp:A.Ea
w=3
return C.b(B.hVP(s,r,d.ax<3.2,q,$.pQ().h(0,d.b).b),$async$Z7)
case 3:p=g
t.ay=!1
if(p!=null)d.at=p
case 1:return C.h(u,v)}})
return C.i($async$Z7,v)},
ck8(d){var w=this,v=new C.Q(Date.now(),0,!1),u=w.at.ce(0,d.a,new B.bE7()),t=J.cD(u)
t.L(u,v)
t.bm(u,new B.bE8(v))
if(t.gJ(u)>=4){t.a7(u)
t=w.ch
if(t!=null)t.a8(0)
w.a_r(d)
return}if(t.gJ(u)===3){t=w.ch
if(t!=null)t.a8(0)
w.ch=C.cM(A.ky,new B.bE9(w,u,d))}},
YP(d){return this.c6l(d)},
c6l(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$YP=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return C.b(B.hVb(s,d.b,A.k.U(A.k.G(t.a.c.d*0.12,1)*100)),$async$YP)
case 3:t.ay=!1
case 1:return C.h(u,v)}})
return C.i($async$YP,v)},
a_r(d){return this.chR(d)},
chR(d){var w=0,v=C.j(x.H),u=this,t
var $async$a_r=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.c2(D.DI,null,new B.bE3(u,d),t,!0,!0,!1,A.vr,!1,!1,x.H),$async$a_r)
case 2:return C.h(null,v)}})
return C.i($async$a_r,v)},
Z(){this.a0()
this.bau()
this.kS()},
bau(){this.a.c.e=new B.bEo(this)},
l8(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.a5M(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
r=D.lE.h(0,s.b)
if((r==null?null:r.b)!==D.yw)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.L(0,s.a)
q.Z7(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)B.dD(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)B.dD(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cG.ag()<0.5
else u=!1
if(u)B.dD(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){B.dD(900+A.cG.aD(800),"",90,0,0.1,o)
if(A.cG.ag()<0.35)B.dD(300+A.cG.aD(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cG.ag()<0.4
else u=!1
if(u)B.dD(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)B.dD(330+A.o.G(110*A.k.bv(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)B.dD((A.k.bv(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)B.dD(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)B.dD(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cG.ag()<0.5
else u=!1
if(u)B.dD(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)B.dD(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)B.dD(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new B.bEp())},
b2T(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.lE.al(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new C.z(p,n)
r=i}}}return s},
aXS(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=C.U(w).k("dz<1>"),w=new C.dz(w,v),w=new C.bV(w,w.gJ(0),v.k("bV<ai.E>")),u=d.a,v=v.k("ai.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.lE.al(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cw8(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.lE.al(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.lE.al(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=B.haf(new C.u(k,n),new C.u(i,l),p)
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
abN(){this.a.toString
this.m(new B.bDz())},
bk5(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cMB[v]
if(!A.d.ba(p.a.c.a,new B.bEq(u,w))){o=new C.u(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?F.H_:o
s=s?F.H_:o
q=t.ahx(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
B.dD(1200,"",50,0,0.3,"tri")
p.abN()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<76;++v)w.push(D.OJ[v].a)
u=w.length
t=u>8
s=t?A.d.dj(w,0,A.o.am(u+1,2)):w
r=t?A.d.fC(w,A.o.am(w.length+1,2)):A.U
q=n.a.d
if(q!=null){w=C.a2(q).k("cy<1>")
w=C.B(new C.cy(q,w),w.k("G.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,C.K)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=C.a([],x.p)
n.a.toString
w.push(n.aXH(s,!0))
n.a.toString
if(t)w.push(n.aXH(r,!0))
w.push(C.D(C.cl(new B.bEn(n,q,m)),1))
return C.v(w,A.m,null,A.e,A.j,0,A.p)},
aXH(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.K)(d),++v){u=d[v]
t=$.pQ()
s=t.h(0,u).d.j(0.14)
r=new C.aZ(14,14)
q=new C.az(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(C.aH(p,C.p(p,C.v(C.a([new C.x(t.h(0,u).c,p,A.HX,p,p,p,p,p,p,p,p,p),new C.x(t.h(0,u).b,p,A.n1,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.b7,A.j,0,A.p),A.f,p,p,new C.o(s,p,new C.bY(q,q,q,q),new C.bv(r,r,r,r),p,p,A.n),p,p,p,D.VV,p,p,p,62),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bDA(this,u),p,p,p,p,p,p,!1,A.ac))}return C.p(p,C.cL(m,p,A.h1,p,p,A.aX,!1),A.f,p,p,new C.o(D.Dz,p,new C.bY(A.Z,A.Z,new C.az(o,1,A.r,-1),A.Z),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aVi(d){var w=null,v=C.m(18)
return C.p(w,d,A.f,w,w,new C.o(D.a9j,w,C.I(A.bH,A.r,1),v,w,w,A.n),w,w,w,w,D.ae4,w,w,w)},
c9W(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.pQ().h(0,o),m=d.dy,l=d.fr,k=new B.bDT(q,n),j=C.d(n.c,p,p,p,p,p,p,A.RM,p,p,p),i=n.b,h=n.d,g=x.p
i=C.A(C.a([j,A.ab,C.D(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aG(p,p,p,p,D.bBE,p,p,p,new B.bDG(q,d),p,p,p,p,"Remove part",A.c7),C.aG(p,p,p,p,A.Fr,p,p,p,new B.bDH(q),p,p,p,p,p,A.c7)],g),A.m,p,A.e,A.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,D.I0,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.ePm,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.a9(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.a9(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.a9(Math.abs(m*l),2)+" watts"
m=C.a([i,j,A.av,w,A.aq,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?A.cx:A.aL,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.b8u(d)
if(v!=null){l=(d.x?A.aE:A.aR).j(0.14)
j=C.m(10)
i=C.I((d.x?A.aE:A.aR).j(0.5),A.r,1)
m.push(new C.C(A.ir,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.eVE,p,p,p),A.f,p,p,new C.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cm,p,p,p),p))}if(B.fM7(o)){l=C.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new B.dx("CH "+t,d.at===u,new B.bDI(q,d,u),p,h,p))}l=C.c6(A.bF,l,A.bx,4,6)
l=C.a([A.aq,l,A.av,C.d(q.a.c.BH(d)?"Showing: "+D.Om[A.o.G(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hk,p,p,p)],g)
if(q.a.c.BH(d))l.push(new B.ff(A.F_,"Open big screen",new B.bDL(q,d),h,p))
A.d.v(m,l)}if(D.lE.al(0,o)&&!B.fM7(o)){l=C.a([A.aq,C.d(q.a.c.BH(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hk,p,p,p)],g)
if(q.a.c.BH(d))l.push(new B.ff(A.M7,"Open the "+$.pQ().h(0,o).b,new B.bDM(q,d),h,p))
A.d.v(m,l)}if(D.lE.al(0,o))A.d.v(m,C.a([A.aq,new B.ff(A.AO,"Make it bigger (or tap it 4 times)",new B.bDN(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.a9(d.db,1)
if(q.a.c.BH(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=C.a([A.aq,C.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.a9(i,1)+" V",p,p,p,p,p,p,D.eQc,p,p,p)],g)
if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.d13[s]
j=r===A.k.jB(r)?A.k.U(r):r
l.push(new B.dx(C.t(j)+" V out",d.e===r,new B.bDO(q,d,r),p,h,p))}i.push(new C.C(A.m1,C.c6(A.bF,l,A.bx,0,6),p))}if(o==="regulator")i.push(D.fbG)
A.d.v(m,i)}if(q.a.c.Kx(d)&&!d.x){l=A.k.a9(d.cx,2)
j=A.k.a9(q.a.c.yZ(d),2)
i=q.a.c
w=i.akQ(d)?"   \u26a0 OVERLOADED":""
l=C.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,C.l(p,p,i.akQ(d)?A.cx:A.ew,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=C.m(4)
w=A.k.D(d.cx/q.a.c.yZ(d),0,1)
i=q.a.c.akQ(d)?A.aE:A.bf
m.push(new C.C(A.ir,C.v(C.a([l,A.d5,C.bu(j,C.m7(A.bH,p,p,5,p,w,new C.ms(i,x.F)),A.ao)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.U(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.C(A.ir,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.eKl,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.cSL[s]
j=r===1.5?"1.5 V (rechargeable)":C.t(r)+" V"
l.push(new B.dx(j,d.e===r,new B.bDP(q,d,r),p,h,p))}m.push(C.c6(A.bF,l,A.bx,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cKc[s]
j=r>=1000?"1 k\u03a9":""+A.o.U(r)+" \u03a9"
l.push(new B.dx(j,d.r===r,new B.bDQ(q,d,r),p,h,p))}m.push(C.c6(A.bF,l,A.bx,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new B.bDR(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new B.bDS(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new B.bDJ(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new B.bDK(d)))
if(o==="crank")m.push(D.f7x)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hk,p,p,p))
return q.aVi(new C.cZ(D.aTL,C.ci(C.v(m,A.F,p,A.e,A.Q,0,A.p),A.q,p,A.z,p,p,p,p,A.aj),p))}}
B.b8c.prototype={}
B.Tx.prototype={
S(){return new B.aB3(B.fRH(),new C.cq(null,x.gJ),C.b0(x.S))}}
B.aB3.prototype={
Z(){this.a0()
$.aU.c_$.push(this)
this.abO()},
abO(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$abO=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(B.fhF(),$async$abO)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=B.hUp(t.d,r)
if(s!=null){t.m(new B.dMw(t,s))
t.Q=r}}t.as=!0
case 1:return C.h(u,v)}})
return C.i($async$abO,v)},
E0(){var w,v=this
if(!v.as)return
w=B.hL5(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
B.bAQ(w)},
iF(d){if(d!==A.fp)this.E0()},
q(){$.aU.hw(this)
this.E0()
this.a1()},
c0r(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=C.U(v).k("a3<1>")
t=new C.a3(v,new B.dMF(q),u).gJ(0)
s=new C.a3(v,new B.dMG(),u).gJ(0)
r=new C.a3(v,w.gcKB(),u).gJ(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new B.dMH(q,t,s,r))}if(A.o.G(q.w,45)===0)q.E0()
if(A.o.G(q.w,10)===0){w=q.f
$.afY()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.afY()[q.f].c.$1(q.d)){w.L(0,q.f)
B.AQ("bell",C.a([0,4,7,12],x.t),700,0.45)
q.m(new B.dMI())
q.E0()
w=q.c
w.toString
w=C.VQ(w)
if(w!=null)w.P(C.b2(p,p,p,p,p,A.q,p,C.d("\u2705 Challenge done: "+$.afY()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.lZ,p,p,p,p,p,p,p,p,p,p))}},
aes(){var w=0,v=C.j(x.H),u=this,t
var $async$aes=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.cg(null,null,!0,null,new B.dMv(u),t,null,!0,!0,x.H),$async$aes)
case 2:return C.h(null,v)}})
return C.i($async$aes,v)},
aVh(d,e,f,g,h){var w=null,v=f.j(0.12),u=C.m(12),t=C.I(f.j(0.45),A.r,1)
u=C.a([C.an(w,C.p(w,C.W(d,f,w,w,w,18),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(C.an(w,h,w,w,w,-1,-3,w))
return C.aH(w,C.hl(new C.a4(40,38,new C.am(A.X,w,A.a9,A.f,u,w),w),w,e,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.ac)},
aVg(d,e,f,g){return this.aVh(d,e,f,g,null)},
aoi(d,e,f,g){var w=null,v=f.j(0.1),u=C.m(10),t=C.I(f.j(0.4),A.r,1)
return C.D(C.aH(w,C.p(w,C.A(C.a([C.W(d,f,w,w,w,15),A.e9,new C.dl(1,A.ch,C.d(e,w,1,A.a2,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b7,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.ac),1)},
acL(){var w=0,v=C.j(x.H),u=this,t
var $async$acL=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.a6(t,!1).ck(C.eu(new B.dMr(u),!1,null,x.H)),$async$acL)
case 2:t=u.e.gbc()
if(t!=null)t.bau()
if(u.c!=null)u.m(new B.dMs())
u.E0()
return C.h(null,v)}})
return C.i($async$acL,v)},
bA7(){var w,v,u,t,s=null,r=this.f
$.afY()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bl:A.aE
u=C.m(9)
t=C.I(D.Dz,A.r,1.5)
return C.p(s,C.au(C.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.yL,s,s,s),s,s,s),A.f,s,D.aTS,new C.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eX,s,s,s)},
afy(){var w=0,v=C.j(x.H),u=this,t
var $async$afy=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.c2(D.DI,null,new B.dME(u),t,!0,!0,!0,A.vr,!1,!1,x.H),$async$afy)
case 2:return C.h(null,v)}})
return C.i($async$afy,v)},
c0s(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=C.aH(r,C.p(r,D.bCS,A.f,r,r,new C.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dMK(d),r,r,r,r,r,r,!1,A.ac),o=C.m(11)
o=C.p(r,D.aZh,A.f,r,r,new C.o(A.bj,r,C.I(A.aY.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return C.p(r,C.v(C.a([C.A(C.a([p,A.ab,o,A.ab,C.D(C.v(C.a([D.f9V,C.d(w,r,1,A.a2,r,r,r,C.l(r,r,s.y>0||s.z>0?A.f8:A.fZ,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new B.av9(s.gc63(),r),A.r_,s.aVg(A.xc,"Construction Lab: real 3D wiring, plumbing and a house",A.cL,new B.dML(d)),s.aVh(A.l4,"Challenges",A.aL,s.gcmE(),s.bA7()),s.aVg(A.M1,"How to play",A.aY,new B.dMM(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.aq,C.A(C.a([s.aoi(A.po,"Circuits",A.bz,s.gcfK()),A.bp,s.aoi(A.uP,"Repair",A.aL,new B.dMN(s)),A.bp,s.aoi(D.xd,"Clear",A.cx,new B.dMO(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(D.Dz,r,new C.bY(A.Z,A.Z,new C.az(q,1,A.r,-1),A.Z),r,r,r,A.n),r,r,r,r,D.bov,r,r,r)},
B(d){var w=this,v=null
$.apL="tech"
return C.cb(v,A.bW,C.bq(!0,C.v(C.a([w.c0s(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.D(B.fQC(w.d,w.e,w.gc0q(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0),v,!1,!1,v,v)}}
B.av9.prototype={
S(){return new B.b6o(null,null)}}
B.b6o.prototype={
gauh(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.T,null,1,null,v)
w.cE(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.gauh().q()
this.box()},
B(d){var w=null,v=this.a.c
return C.aH(w,C.hl(new C.a4(42,42,C.c5(this.gauh(),new B.cx7(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.ac)}}
B.b6n.prototype={
a5(d,e){var w,v,u,t=null,s=e.ea(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.V()
w=C.L()
w.r=A.b2.j(0.25+0.15*o).gp(0)
w.z=G.mi
d.ae(s,r+2+o*2,w)
w=C.L()
w.sar(D.e0n.av(0,C.bT(s,r)))
d.ae(s,r,w)
v=C.L()
v.b=A.ae
v.c=2.2
v.sar(new C.fP(A.A,0,6.283185307179586,A.x,D.cCb,t,new C.m5(p)).av(0,C.bT(s,r)))
d.ae(s,r,v)
p=new B.cx6(d)
p.$3(s.af(0,A.qR),8+o*1.5,1)
q*=4
p.$3(s.af(0,D.dRR),3.2,0.5+0.5*Math.sin(q))
p.$3(s.af(0,D.dTH),2.6,0.5+0.5*Math.cos(q))
u=C.ig(t,t,t,t,D.eH9,A.a5,A.ci,t,A.eq,A.cg)
u.eP()
u.a5(d,s.af(0,new C.u(-u.b.c/2,5)))},
aq(d){return d.b!==this.b}}
B.avs.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.avt.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
w=this.fc$
w===$&&C.c()
w.q()
this.bng()}}
B.aHo.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.bua.prototype={}
B.fH.prototype={}
B.uA.prototype={}
B.wP.prototype={}
B.I9.prototype={
a3(){return"ScreenStyle."+this.b}}
B.lS.prototype={}
B.Te.prototype={
S(){return new B.bgH(null,null)}}
B.bgH.prototype={
ga7f(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.nt,null,1,null,v)
w.cn(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.ga7f().q()
this.bqn()},
gQq(){var w=this.ga7f().y
w=w==null?null:A.o.am(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.lE.h(0,this.a.c)
if(v==null)v=D.aIG
return C.cb(w,L.JY,C.bq(!0,new C.am(A.X,w,A.a9,A.q,C.a([C.au(v.b===D.yx?this.bCg(v):this.ccF(v),w,w,w),C.an(w,C.aG(w,w,w,w,A.md,w,w,w,new B.dIs(d),w,w,w,C.ng(w,A.aV,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),C.an(6,C.au(C.d(v.a,w,w,w,w,w,w,D.eII,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.ah,!0,!0),w,!1,!1,w,w)},
c0t(d){var w
A:{if(D.Hm===d){w=0.46153846153846156
break A}if(D.tQ===d){w=0.45
break A}if(D.vt===d){w=0.9259259259259258
break A}if(D.QO===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
ccF(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.Hm
A:{if(D.Hm===p){w=44
break A}if(D.tQ===p){w=30
break A}if(D.vt===p){w=22
break A}if(D.QO===p){w=26
break A}w=14
break A}v=C.c5(this.ga7f(),new B.dIr(this,w,d,o),q)
if(p===D.a3K)v=new C.Cu(D.bp5,v,q)
p=this.c0t(p)
u=o?4:5
t=d.c
s=C.ar(t,A.c,o?0.25:0.08)
s.toString
r=C.ar(t,A.w,0.5)
r.toString
r=C.a([s,t,r],x.O)
t=C.m(w)
s=C.a([new C.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new C.fE(p,C.p(q,C.p(q,v,A.f,q,q,new C.o(A.w,q,q,C.m(w-3),q,q,A.n),q,q,q,q,X.Ez,q,q,q),A.f,q,q,new C.o(q,q,q,t,s,new C.a5(A.ax,A.aC,A.x,r,q,q),A.n),q,q,q,D.biK,new C.N(u,u,u,u),q,q,q),q)},
b27(d){var w,v,u,t=null,s=new C.Q(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bv(this.gQq()*0.4),0,100),q=d.b===D.Hm,p=q?34:20,o=q?28:18,n=C.a([C.d(A.a.aU(A.o.u(C.dk(s)),2,"0")+":"+A.a.aU(A.o.u(C.h_(s)),2,"0"),t,t,t,t,t,t,A.u_,t,t,t),A.b6],x.p)
for(w=0;w<4;++w){v=new C.aZ(1,1)
n.push(C.p(t,t,A.f,t,t,new C.o(A.c,t,t,new C.bv(v,v,v,v),t,t,A.n),t,4+w*2,t,D.boO,t,t,t,3))}n.push(A.d8)
n.push(D.f3g)
n.push(A.bp)
v=C.I(A.af,A.r,1)
u=C.m(4)
n.push(C.p(t,new C.bI(A.a3,t,t,C.CV(A.A,C.p(t,t,A.f,t,t,new C.o(A.bf,t,t,C.m(2),t,t,A.n),t,t,t,X.Ez,t,t,t,t),t,r/100),t),A.f,t,t,new C.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.tS)
n.push(C.d(""+r+"%",t,t,t,t,t,t,D.eVX,t,t,t))
return new C.C(new C.N(p,12,o,2),C.A(n,A.m,t,A.e,A.j,0,t,t),t)},
asp(d,e,f){var w,v=null,u=d.d,t=C.ar(u,A.w,0.5)
t.toString
t=C.a([u,t],x.O)
u=C.m(e*0.26)
w=x.p
t=C.a([C.p(v,C.au(C.d(d.b,v,v,v,v,v,v,C.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new C.o(v,v,v,u,D.cXU,new C.a5(A.ax,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,C.a([A.av,C.d(d.a,v,1,A.a2,v,v,v,D.eN1,v,v,v)],w))
return C.aH(v,C.v(t,A.m,v,A.e,A.Q,0,A.p),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.dIn(this,d),v,v,v,v,v,v,!1,A.ac)},
bSQ(d,e){return this.asp(d,e,!0)},
c0u(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.QO||n===D.vt,l=d.d,k=C.ar(l,A.w,0.55)
k.toString
l=C.ar(l,A.ku,0.5)
l.toString
l=C.a([k,A.dt,l],x.O)
k=p.b27(d)
w=m?190:138
v=C.m(24)
u=C.I(A.b9,A.r,1)
w=C.aH(o,C.p(o,C.bu(C.m(23),C.b3(o,o,o,new B.acP(0,p.gQq(),o),A.eS),A.ao),A.f,o,o,new C.o(o,o,u,v,o,o,A.n),o,w,o,A.hE,o,o,o,o),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.dIl(p),o,o,o,o,o,o,!1,A.ac)
v=m?5:4
u=x.p
t=C.a([],u)
for(s=0;s<9;++s){r=D.nG[s]
t.push(new C.cv(A.A,o,o,p.bSQ(r,m?58:54),o))}k=C.a([k,A.aq,w,A.aa,C.D(C.lN(0.92,t,v,8,12,A0.uD,o,!1),1)],u)
if(n!==D.a3K){n=A.c.j(0.16)
w=C.m(28)
u=C.a([],u)
for(v=C.d9(D.nG,0,C.dI(4,"count",x.S),x.gD),t=v.$ti,v=new C.bV(v,v.gJ(0),t.k("bV<ai.E>")),t=t.k("ai.E");v.C();){q=v.d
u.push(p.asp(q==null?t.a(q):q,50,!1))}k.push(C.p(o,C.A(u,A.m,o,A.py,A.j,0,o,o),A.f,o,o,new C.o(n,o,o,w,o,o,A.n),o,o,o,D.bjD,I.afs,o,o,o))}return C.p(o,C.v(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new C.o(o,o,o,o,o,new C.a5(A.ax,A.aC,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bvS(d,e){var w=null
return C.p(w,C.v(C.a([this.b27(d),C.D(C.b3(w,w,w,new B.acP(e,this.gQq(),w),A.eS),1),C.aH(w,C.p(w,C.au(C.d(D.nG[e].a,w,w,w,w,w,w,A2.HL,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dIg(this),w,w,w,w,w,w,!1,A.ac)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bCg(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=C.ar(w,A.c,0.18)
v.toString
w=C.a([v,w],x.O)
v=C.m(r?26:14)
u=C.a([new C.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new C.fE(1.5384615384615383,C.p(t,C.c5(this.ga7f(),new B.dIj(this,r,d),t),A.f,t,t,new C.o(t,t,t,v,u,new C.a5(A.ax,A.aC,A.x,w,t,t),A.n),t,t,t,D.bop,new C.N(8,8,8,s),t,t,t),t)}}
B.bsf.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.V()
w=C.L()
v=this.c
u=C.ar(v,A.w,0.6)
u.toString
t=C.ar(v,A.ku,0.4)
t.toString
w.sar(new C.a5(A.ax,A.aC,A.x,C.a([u,A.dt,t],x.O),null,null).av(0,new C.a9(0,0,n,m)))
d.aW(new C.a9(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
r.r=v.j(0.1).gp(0)
r.z=D.dah
q=r.H()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
aq(d){return!0}}
B.acP.prototype={
a5(d,e){return B.h9k(d,e,this.b,this.c)},
aq(d){return!0}}
B.aJa.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.x3.prototype={}
B.UP.prototype={
S(){return new B.aCj(null,null)}}
B.aCj.prototype={
gabQ(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.nt,null,1,null,v)
w.cn(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
gCq(){var w=this.e
return w===$?this.e=this.a.d:w},
Z(){var w=this
w.a0()
w.w=C.cM(w.a.f,w.gaVj())
w.aRM()
B.dD(520,"",80,0,0.25,"tri")},
aRM(){var w=this.z
if(w!=null)w.a8(0)
this.z=C.cM(A.jJ,new B.etG(this))},
c0v(){var w=this.c
if(w!=null&&C.a6(w,!1).oY()){w=this.c
w.toString
C.a6(w,!1).M(this.gCq())}},
agJ(){var w=this,v=w.w
if(v!=null)v.a8(0)
w.w=null
w.y=!0
w.aRM()},
aui(d){this.m(new B.etE(this,d))
B.dD(900,"",40,0,0.3,"noise")},
aX1(d){this.m(new B.etH(this,d))
B.dD(700,"",60,0,0.3,"tri")},
q(){var w=this,v=w.w
if(v!=null)v.a8(0)
v=w.z
if(v!=null)v.a8(0)
w.gabQ().q()
w.brm()},
B(d){var w,v,u,t,s=this,r=null,q=C.m(10),p=C.I(A.cB,A.r,6),o=C.a([new C.ac(0,A.G,A.aY.j(0.25),A.J,40)],x.V),n=C.m(4),m=x.p,l=C.a([C.c5(s.gabQ(),new B.etP(s),r)],m)
if(s.r)l.push(s.bwD())
q=C.au(new C.fE(1.7777777777777777,C.p(r,C.bu(n,new C.am(A.X,r,A.b_,A.q,l,r),A.ao),A.f,r,r,new C.o(r,r,p,q,o,r,A.n),r,r,r,r,r,r,r,r),r),r,r,r)
p=s.y
o=p?1:0
n=C.ng(r,A.aV,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
n=C.aG(r,r,r,r,C.W(A.cu,A.c,r,r,r,r),r,r,r,s.gaVj(),r,r,r,n,"Back to the board",r)
l=C.m(20)
w=s.f
v=s.a
n=C.A(C.a([n,A.b6,C.p(r,C.d(w>=0?v.c+" \xb7 "+D.nG[w].a:v.c+" \xb7 CH "+(s.gCq()+1),r,r,r,r,r,r,I.a5_,r,r,r),A.f,r,r,new C.o(A.aV,r,r,l,r,r,A.n),r,r,r,r,A.m2,r,r,r)],m),A.m,r,A.e,A.j,0,r,r)
l=s.cgZ()
w=A.w.j(0.65)
v=C.m(18)
u=s.f
u=C.d(u>=0?D.nG[u].a:D.Om[s.gCq()].a,r,r,r,r,r,r,A.iU,A.L,r,r)
t=s.f
return C.cb(r,A.w,C.bq(!0,C.aH(A.c5,new C.am(A.X,r,A.b_,A.q,C.a([q,C.Cf(C.e3(C.v(C.a([new C.C(D.biB,n,r),A.aq,l,A.b6,C.p(r,C.v(C.a([u,C.d(t>=0?D.nG[t].c:D.Om[s.gCq()].b,r,r,r,r,r,r,O.aLV,A.L,r,r)],m),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(w,r,r,v,r,r,A.n),r,r,r,A.bm,A.bT,r,r,r)],m),A.m,r,A.e,A.j,0,A.p),!p,r),A.bb,A.i5,o)],m),r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.etQ(s),r,r,r,r,r,r,!1,A.ac),!0,!1,A.ah,!0,!0),r,!1,!1,r,r)},
cgZ(){var w=this,v=null,u=new B.etO(),t=A.w.j(0.72),s=C.m(22),r=C.I(A.aY.j(0.5),A.r,1)
return C.p(v,C.A(C.a([u.$3(A.xq,"CH \u2212",new B.etJ(w)),u.$3(A.hs,"CH +",new B.etK(w)),u.$5$color$on(A.F3,"TV",new B.etL(w),A.aY,w.f<0),u.$5$color$on(A.AC,"APPS",new B.etM(w),A.bz,w.r),u.$5$color$on(A.AF,"ADS",new B.etN(w),A.bY,w.f===0)],x.p),A.m,v,A.e,A.Q,0,v,v),A.f,v,v,new C.o(t,v,r,s,v,v,A.n),v,v,v,v,A.WN,v,v,v)},
bwD(){var w=null,v=A.w.j(0.9)
return C.aH(w,C.p(w,C.v(C.a([D.f5M,A.av,C.D(C.ia(!0,w,w,A.z,D.eAO,new B.etC(this),9,A.ah,w,A.aj,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,v,w,w,w,w,w,w,A.kD,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.etD(this),w,w,w,w,w,w,!1,A.ac)}}
B.brG.prototype={
a5(d,e){var w=this
return B.fO_(d,e,w.b,w.d,w.e,w.c)},
aq(d){return!0}}
B.aK7.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.aU4.prototype={}
B.U2.prototype={
S(){return new B.bhg(C.T(x.S,x.N),A.at,C.a([],x.gu),$,A.bw,0,C.a([],x.X),null,null)}}
B.bhg.prototype={
guS(){var w=this.f
return w===$?this.f=B.fMd(0):w},
Z(){this.a0()
this.kS()
B.yK("laser_maze").by(new B.e0K(this),x.P)},
l8(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.z(u.a,t)
if(t>0.8)A.d.cv(w,v)}this.m(new B.e0L())},
abS(d){var w=this
w.m(new B.e0A(w,d))
B.vm("laser_maze",C.E(["best",w.e,"level",w.d],x.N,x.z))},
c0I(d){var w,v,u,t,s,r,q,p,o=this
if(o.x)return
w=o.y
v=w.ge9()/7
u=v*7
t=(w.a-u)/2
s=A.k.D((w.b-u)/2,8,300)
r=A.k.bv((d.a-t)/v)
q=A.k.bv((d.b-s)/v)
if(r<0||q<0||r>=7||q>=7)return
p=q*7+r
if(o.guS().b.t(0,p)||p===o.guS().e||o.guS().d.al(0,p))return
o.m(new B.e0B(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cl(new B.e0E(t,B.haa(t.guS(),t.r))),q=x.p,p=C.a([new B.dx("Clear mirrors",!1,new B.e0F(t),A.jN,A.aL,s),new B.dx("Skip",!1,new B.e0G(t),D.bvH,A.aY,s)],q)
if(t.d>0)p.push(new B.dx("Back",!1,new B.e0H(t),D.bvI,A.aY,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new B.dx(""+u,v===t.d,new B.e0I(t,v),s,A.aE,s))}return B.jA(A.aE,A.h5,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.v(C.a([new B.eH(p,s,s),new B.eH(w,"LEVEL",s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bek.prototype={
a5(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.ge9()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.D((b0.b-a4)/2,8,300),a7=new B.dcl(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.by(new C.a9(a5,a6,a8,a4),A.kg)
v=$.V()
u=C.L()
u.r=I.o4.gp(0)
a9.aA(w,u)
for(w=a9.a,t=0;t<=7;++t){u=t*a3
s=a5+u
r=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
r.r=A.du.gp(0)
q=r.H()
w.drawLine.apply(w,[s,a6,s,a4,q])
q.delete()
u=a6+u
s=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
s.r=A.du.gp(0)
q=s.H()
w.drawLine.apply(w,[a5,u,a8,u,q])
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.eh(a8,a8.r,C.a2(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.by(C.cr(p,u,u),A.h9)
o=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.sar(D.bN0.av(0,C.cr(p,a3,a3)))
q=o.H()
w.drawRRect(C.et(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.aP(v.r,A.ap,a2,a2,u)
n.E(new C.b5(a7.$1(A.d.gK(a8)).a,a7.$1(A.d.gK(a8)).b))
for(a8=C.d9(a8,1,a2,C.U(a8).c),v=a8.$ti,a8=new C.bV(a8,a8.gJ(0),v.k("bV<ai.E>")),v=v.k("ai.E");a8.C();){s=a8.d
if(s==null)s=v.a(s)
s=new C.ao(a7.$1(s).a,a7.$1(s).b)
u.push(s)
r=n.f
if(r!=null)s.bw(r)
s=n.e
if(s!=null)s.a.delete()
n.e=null}$.V()
a8=C.L()
a8.b=A.ae
a8.c=14
a8.e=A.fw
a8.r=A.aE.j(0.28+0.08*Math.sin(a1.f*12)).gp(0)
a8.z=A.lc
a9.aM(n,a8)
a8=C.L()
a8.b=A.ae
a8.c=4
a8.e=A.fw
a8.r=D.ab4.gp(0)
a9.aM(n,a8)
a8=C.L()
a8.b=A.ae
a8.c=1.6
a8.e=A.fw
a8.r=A.c.gp(0)
a9.aM(n,a8)}for(a8=a4.c,a8=C.eh(a8,a8.r,C.a2(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.t(0,m)
if(l){m=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
m.r=A.aL.j(0.5).gp(0)
m.z=A.Br
q=m.H()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
m.r=(l?A.aL:A.bv).gp(0)
q=m.H()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?A.c:A.aA
i=new C.kt(new C.ep("\u2605",a2,a2,A.cQ,a2,a2,a2,a2,a2,a2,new C.F(!0,j,a2,a2,a2,a2,v,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a5,A.ci,new C.jB(1),a2,a2,a2,a2,A.cg,a2)
i.eP()
j=i.b
h=j.c
j=j.a.c
i.a5(a9,new C.u(m-h/2,k-j.gbb(j)/2))}g=new B.dco(a7,a3,a9)
a1.c.bG(0,new B.dcm(g))
a4.d.bG(0,new B.dcn(g))
f=a7.$1(a4.e)
a4=C.by(C.cr(f,o,a3*0.8),A.h9)
a8=C.L()
a8.r=A.aE.gp(0)
a9.aA(a4,a8)
v=f.af(0,new C.u(v,0))
a8=C.L()
a8.r=A.c.gp(0)
a9.ae(v,5,a8)
for(a4=a1.r,a8=a4.length,e=0;e<a4.length;a4.length===a8||(0,C.K)(a4),++e){d=a4[e]
a0=d.b/0.8
v=d.a
u=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
u.b=A.ae
s=1-a0
u.c=4*s
u.r=A.aL.j(s).gp(0)
q=u.H()
w.drawCircle(v.a,v.b,a3*(0.3+a0),q)
q.delete()}},
aq(d){return!0}}
B.U4.prototype={
S(){var w=x.n
return new B.aBH(A.cG,C.a([1,0.5,0],w),C.a([0,0,0],w),$,A.bw,0,C.a([],x.X),null,null)}}
B.aBH.prototype={
Z(){this.a0()
this.kS()
B.yK("light_mixer").by(new B.e12(this),x.P)},
l8(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aVk()
w.m(new B.e13())},
auk(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aD(5)/4)
u.e=t
if(A.d.e2(t,new B.e0O()))u.e[w.aD(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aVk(){var w,v,u=this
if(u.z!=="play")return
w=A.k.U(A.k.D(1-B.h5x(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
B.vp(v,A.o.am(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
B.vm("light_mixer",C.E(["best",v],x.N,x.z))}}else u.z="result"},
gcrn(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.E(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cE1[A.o.G(A.k.U(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cl(new B.e0X(v,B.h5x(v.e,t))),r=t[0]
r=B.hu(A.aE,""+A.k.U(r*100)+"%","Red",1,0,new B.e0Y(v),r)
w=t[1]
w=B.hu(A.bl,""+A.k.U(w*100)+"%","Green",1,0,new B.e0Z(v),w)
t=t[2]
return B.jA(A.b8,A.h5,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.v(C.a([r,w,B.hu(A.d6,""+A.k.U(t*100)+"%","Blue",1,0,new B.e1_(v),t),new C.bI(A.a7,u,u,new B.ff(A.ht,"Lock it in",new B.e10(v),A.bf,u),u)],x.p),A.m,u,A.e,A.Q,0,A.p))}}
B.bez.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.by(new C.a9(0,0,n,m),A.pI)
$.V()
w=C.L()
w.r=A.w.gp(0)
d.aA(l,w)
w=d.a
J.bA(w.save())
w.clipRRect(C.et(C.by(new C.a9(0,0,n,m),A.pI)),$.p6(),!0)
v=e.ge9()*0.3
u=e.ea(A.J)
l=-v*0.55
t=v*0.45
s=[u.af(0,new C.u(0,l)),u.af(0,new C.u(l,t)),u.af(0,new C.u(v*0.55,t))]
r=[A.Dk,E.aae,E.aaB]
d.kQ(new C.a9(0,0,n,m),C.L())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
p.a=A.n9
p.r=r[q].j(l[q]).gp(0)
o=p.H()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.by(new C.a9(0,0,n,m),A.pI)
m=C.L()
m.b=A.ae
m.c=2
m.r=A.b9.gp(0)
d.aA(n,m)},
aq(d){return!0}}
B.aJC.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.buf.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
w=this.fc$
w===$&&C.c()
w.q()
this.bqR()}}
B.aJD.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.bug.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
w=this.fc$
w===$&&C.c()
w.q()
this.bqS()}}
B.br4.prototype={}
B.a6E.prototype={
B(d){var w=null
return C.cb(C.eA(w,w,w,!0,!0,D.abc,w,1,!0,w,0,!1,w,!1,w,w,C.aG(w,w,w,w,D.ajO,w,w,w,new B.cbR(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fhO,w,w,w,1,w,!0),D.abc,C.cL(C.a([D.dUQ,C.cl(new B.cbS())],x.p),w,D.bkE,w,w,A.aj,!1),w,!1,!1,w,w)}}
B.UU.prototype={
S(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new B.aCv(w,new C.ap(A.as,$.av()),$,A.bw,0,C.a([],x.X),null,null)}}
B.aCv.prototype={
Z(){this.a0()
this.kS()},
b0c(d){var w=this.d.length
return A.o.G(A.k.bv(A.k.G(A.k.G(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
l8(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b0c(v.f)
if(w!==v.x){v.x=w
B.l5("bell",24+A.o.G(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new B.exO(v))
B.AQ("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c1E(){if(this.d.length<2)return
this.m(new B.exK(this))},
aVG(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new B.exJ(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc1D(),p=s.d,o=C.D(C.aH(r,C.b3(r,r,r,new B.bsr(p,s.f,r),A.eS),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.ac),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.v(C.a([o,new C.a4(r,40,C.au(C.d(n,r,r,r,r,r,r,D.eUa,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.ati[A.o.G(v,8)].j(0.9)
t=new C.aZ(20,20)
o.push(C.aH(r,C.p(r,new C.x(p[v],r,D.eTs,r,r,r,r,r,r,r,r,r),A.f,r,r,new C.o(u,r,r,new C.bv(t,t,t,t),r,r,A.n),r,r,r,A.fM,A.h2,r,r,r),A.z,!1,r,r,r,r,r,r,r,new B.exM(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.ac))}p=A.c.j(0.07)
return B.jA(A.aL,A.h5,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.v(C.a([new B.eH(o,r,r),C.A(C.a([C.D(C.aL(r,A.U,!1,r,!0,A.q,r,C.aM(),s.e,r,r,r,r,r,2,C.bo(r,new C.b4(4,C.m(14),A.Z),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.km,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.z,!0,r,!0,r,!1,r,A.ag,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new B.exN(s),r,!1,r,r,!1,r,!0,r,A.a8,r,r,r,r,r,r,r,r,r,r,r,A.dj,!0,A.a5,r,A.am,r,r,r,r),1),A.ab,new B.ff(A.hs,"Add",s.gc1B(s),A.c,r),A.bp,new B.ff(A.m6,"Spin",q,A.bf,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.Q,0,A.p))}}
B.bsr.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.u(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.V()
w=C.L()
w.r=D.b3s.gp(0)
a1.ae(d,f,w)
w=C.L()
w.b=A.ae
w.c=3
w.r=A.aL.gp(0)
a1.ae(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=C.bT(d,a0)
n=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
n.r=D.ati[A.o.G(q,8)].gp(0)
m=n.H()
n=p*57.29577951308232
f.drawArc.apply(f,[C.c4(o),n,s,!0,m])
m.delete()
o=C.bT(d,a0)
l=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
l.b=A.ae
l.c=2
l.r=A.c.j(0.6).gp(0)
m=l.H()
f.drawArc.apply(f,[C.c4(o),n,s,!0,m])
m.delete()
J.bA(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.ao(o,0,11)+"\u2026"
k=new C.kt(new C.ep(o,i,i,A.cQ,i,i,i,i,i,i,D.eHW),A.a5,A.ci,new C.jB(1),i,i,i,i,A.cg,i)
k.eP()
o=k.b
n=o.c
o=o.a.c
k.a5(a1,new C.u(a0-n-16,-o.gbb(o)/2))
f.restore()}f=C.L()
f.r=D.aaZ.gp(0)
a1.ae(d,20,f)
f=C.L()
f.b=A.ae
f.c=3
f.r=A.aL.gp(0)
a1.ae(d,20,f)
j=new C.aP(h.r,A.ap,i,i,C.a([],x.v))
e-=a0
j.E(new C.b5(g,e+26))
e-=10
j.E(new C.ao(g-14,e))
j.E(new C.ao(g+14,e))
j.E(new C.bE())
e=C.L()
e.r=A.c.gp(0)
a1.aM(j,e)
e=C.L()
e.b=A.ae
e.c=2
e.r=A.aV.gp(0)
a1.aM(j,e)},
aq(d){return!0}}
B.TE.prototype={
S(){return new B.bgQ($,A.bw,0,C.a([],x.X),null,null)}}
B.bgQ.prototype={
Z(){this.a0()
this.kS()},
l8(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
B.AQ("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a3d(900,new B.dOK())}w.m(new B.dOL())},
aVI(d){return this.m(new B.dOF(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aU(A.o.u(A.k.am(m,60)),2,"0")
v=A.a.aU(A.o.u(A.o.G(A.k.dE(m),60)),2,"0")
m=C.b3(n,n,n,new B.bni(l,A.cx,n),A.aJV)
u=C.d(w+":"+v,n,n,n,n,n,n,D.eM3,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.au(new C.a4(280,280,new C.am(A.A,n,A.a9,A.q,C.a([m,C.v(C.a([u,C.d(t,n,n,n,n,n,n,D.eL9,n,n,n),A.av,C.d("Sessions done: "+o.r,n,n,n,n,n,n,A.Ci,n,n,n)],s),A.m,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.cVj[r]
u.push(new B.dx(""+q+" min",o.d===q,new B.dOH(o,q),n,A.cx,n))}m=o.f
p=m?W.xm:A.iN
m=m?"Pause":"Start"
return B.jA(A.cx,A.h5,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.v(C.a([new B.eH(u,n,n),new B.eH(C.a([new B.ff(p,m,new B.dOI(o),A.bf,n),new B.ff(A.jN,"Reset",new B.dOJ(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.Q,0,A.p))}}
B.bni.prototype={
a5(d,e){var w,v,u,t,s=e.ea(A.J),r=e.a/2-14
$.V()
w=C.L()
w.b=A.ae
w.c=16
w.r=A.c.j(0.08).gp(0)
d.ae(s,r,w)
w=C.bT(s,r)
v=C.L()
v.b=A.ae
v.c=16
v.d=A.bO
u=this.c
t=C.ar(u,A.c,0.4)
t.toString
v.sar(new C.fP(A.A,-1.5707963267948966,4.71238898038469,A.x,C.a([u,t,u],x.O),null,null).av(0,C.bT(s,r)))
d.fa(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aq(d){return d.b!==this.b}}
B.SR.prototype={
S(){return new B.bgu($,A.bw,0,C.a([],x.X),null,null)}}
B.bgu.prototype={
Z(){this.a0()
this.kS()},
l8(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Pl.h(0,p.d)
w.toString
v=A.d.fv(w,new B.dAe())
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
B.l5("flute",D.bNB[t]+5,1400,0.35)}p.m(new B.dAf())},
gc1H(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.J0("Press Start",0.5)
w=D.Pl.h(0,this.d)
w.toString
v=A.d.fv(w,new B.dA9())
u=A.k.G(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.J0("Breathe in",0.5+0.5*A.dH.au(0,p))
case 1:return new C.J0("Hold",1)
case 2:return new C.J0("Breathe out",1-0.5*A.dH.au(0,p))
default:return new C.J0("Hold",0.5)}}}return new C.J0("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc1H(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hq.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,A.f,q,q,new C.o(s,q,q,q,u===0?C.a([new C.ac(0,A.G,A.hq.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,A.Cq,q,q,q))
n.push(C.an(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,A.km,q,q,q),q,q,q,q,q,q))
n=C.au(new C.a4(300,340,new C.am(A.A,q,A.a9,A.q,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aV(D.Pl.gec(D.Pl));w.C();){v=w.gT(w)
o.push(new B.dx(v,r.d===v,new B.dAc(r,v),q,A.hq,q))}w=r.e
v=w?A.YY:A.iN
w=w?"Stop":"Start"
o.push(new B.ff(v,w,new B.dAd(r),A.bf,q))
return B.jA(A.hq,A.h5,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new B.eH(o,q,q))}}
B.aFT.prototype={}
B.Tv.prototype={
S(){return new B.bgK(new C.cq(null,x.A),C.a([],x.au),A.az,A.c)}}
B.bgK.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aG(s,s,s,s,D.me,s,s,s,new B.dM0(t,d),s,s,s,s,"Share",s)],r),p=C.bu(C.m(18),new C.en(C.aH(s,C.b3(s,s,s,new B.biL(t.e,t.x,s),A.eS),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dM1(t),new B.dM2(t),s,s,s,s,s,s,s,s,s,new B.dM3(t),s,s,s,s,!1,A.ac),t.d),A.ao),o=C.a([],r)
for(w=0;w<9;++w){v=D.cDs[w]
u=!t.w&&t.f.A(0,v)
o.push(new B.Eg(v,u,new B.dM4(t,v),!1,s))}u=t.r
return B.jA(A.by,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.C(A.bT,p,s),"DRAW PAD",C.v(C.a([new B.eH(o,s,s),B.hu(A.by,""+A.k.U(u),"Brush",30,2,new B.dM5(t),u),new B.eH(C.a([new B.dx("Eraser",t.w,new B.dM6(t),A.LM,A.by,s),new B.ff(A.tl,"Undo",new B.dM7(t),A.c,s),new B.ff(A.e8,"Clear",new B.dM8(t),A.c,s),new B.ff(A.LY,"Paper",new B.dM9(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.Q,0,A.p))}}
B.biL.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.V()
w=C.L()
w.r=this.c.gp(0)
d.aW(new C.a9(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=$.V()
p=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bO
p.e=A.fw
p.b=A.ae
m=r.c
if(m.length===1){q=A.d.gK(m)
m=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
m.r=o.gp(o)
l=m.H()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=C.a([],t)
k=new C.aP(q.r,A.ap,null,null,o)
o.push(new C.b5(A.d.gK(m).a,A.d.gK(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new C.cR(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.bw(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new C.ao(A.d.gak(m).a,A.d.gak(m).b)
o.push(q)
o=k.f
if(o!=null)q.bw(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.H()
q=k.e
u.drawPath((q==null?k.e=new C.cE(k.gbH().a.snapshot()):q).a,l)
l.delete()}}},
aq(d){return!0}}
B.Ug.prototype={
S(){var w=x.S
return new B.aBR(C.b0(w),C.b0(w))}}
B.aBR.prototype={
Z(){this.a0()
this.apL()},
apL(){var w,v,u=this,t=x.N,s=C.bl(D.cZr,!0,t)
A.d.BY(s)
w=x.S
v=C.U(s).c
t=C.B(C.d9(s,0,C.dI(u.d,"count",w),v),t)
A.d.v(t,C.d9(s,0,C.dI(u.d,"count",w),v))
A.d.BY(t)
u.e=t
u.f.a7(0)
u.r.a7(0)
u.w=0
u.x=!1},
c1C(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
B.l5("bell",12+A.o.G(d,9),150,0.35)
s.m(new B.e6p(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gK(0)
u=w.gak(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bO(A.mK,new B.e6q(s,v,u),t)
else{s.x=!0
C.bO(A9.Ec,new B.e6r(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,A.aM7,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.am(p,2)+" / "+o
o=x.p
p=C.v(C.a([new C.C(A.wN,C.A(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?A.aL:A.af,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hH,A.j,0,q,q),q),C.D(C.ia(!0,q,q,A.z,new C.hM(v,8,8,1,q),new B.e6v(r),r.e.length,A.bm,q,A.aj,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cEQ[t]
o.push(new B.dx(s.b,r.d===s.a,new B.e6w(r,s),q,A.aY,q))}o.push(new B.ff(D.bvF,"New game",new B.e6x(r),A.bf,q))
return B.jA(A.aY,A.h5,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new B.eH(o,q,q))}}
B.Us.prototype={
S(){return new B.aC9(C.a([],x.t))}}
B.aC9.prototype={
c1G(d){A.d.a7(this.d)
this.w=!0
this.aVH()},
aVH(){this.d.push(A.cG.aD(4))
this.e=0
this.Ye()},
Ye(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ye=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.m(new B.eeU(t))
s=x.H
w=3
return C.b(C.bO(A.lu,null,s),$async$Ye)
case 3:r=t.d,q=C.bl(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aPp(n)
w=7
return C.b(C.bO(new C.b9(1000*Math.max(280,600-r.length*18)),null,s),$async$Ye)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new B.eeV(t))
case 1:return C.h(u,v)}})
return C.i($async$Ye,v)},
aPp(d){this.m(new B.eeS(this,d))
B.l5("marimba",D.aln[d]+5,450,0.55)
C.bO(A.E9,new B.eeT(this),x.H)},
c1I(d){var w,v,u=this
if(!u.w||u.r)return
u.aPp(d)
w=u.d
v=u.e
if(w[v]!==d){B.dD(90,"",600,0,0.5,"saw")
u.m(new B.eeW(u))
return}++v
u.e=v
if(v===w.length){u.m(new B.eeX(u))
C.bO(A.iq,new B.eeY(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,F.RR,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.eUy,A.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.asf[v]
u=u.j(q.f===v?1:0.35)
t=new C.aZ(28,28)
s=q.f===v?C.a([new C.ac(0,A.G,D.asf[v].j(0.8),A.J,30)],w):p
r=new C.az(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(C.aH(p,C.dh(p,p,p,p,A.bb,new C.o(u,p,new C.bY(r,r,r,r),new C.bv(t,t,t,t),s,p,A.n),A.jk,p,p,p,p,p,p,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.eeZ(q,v),p,p,p,p,p,p,!1,A.ac))}o=C.au(new C.C(A.a8,C.v(C.a([o,A.aq,n,A.d4,new C.fE(1,C.lN(1,l,2,12,12,p,A.dO,!1),p)],m),A.m,p,A.b7,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return B.jA(A.cr,A.h5,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new B.eH(C.a([new B.ff(A.iN,n,q.gc1F(q),A.bf,p)],m),p,p))}}
B.UN.prototype={
S(){return new B.bhY(new C.ap(A.as,$.av()))}}
B.bhY.prototype={
ate(d){return C.ol(A.k.a9(d,2),C.ae("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new B.etb(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d3(C.aJ(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new B.etk()
l=C.aL(m,A.U,!1,m,!0,A.q,m,C.aM(),l,m,m,m,m,m,2,C.bo(m,m,m,m,m,m,m,m,!0,new C.b4(4,C.m(16),A6.vY),m,m,m,m,m,m,m,m,m,m,m,new C.b4(4,C.m(16),D.aSl),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lg,"Bill amount",!0,!0,!1,m,m,m,m,D.eS9,"$ ",m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ag,m,m,m,m,m,A.dR,m,m,m,1,m,m,!1,"\u2022",m,new B.etg(n),m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.aLm,!0,A.a5,m,A.am,m,m,m,m)
k=A.bf.j(0.1)
s=C.m(20)
r=C.I(A.bf.j(0.35),A.r,1)
q=x.p
s=C.cL(C.a([l,A.bu,C.p(m,C.v(C.a([t.$2("Tip ("+A.k.U(n.e)+"%)","$"+n.ate(w)),t.$2("Total","$"+n.ate(v)),L.VD,t.$3$big("Each of "+n.f+" pays","$"+n.ate(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(k,m,r,s,m,m,A.n),m,m,m,m,A.c2,m,m,m)],q),m,A.fv,m,m,A.aj,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.cpY[p]
r.push(new B.dx(""+o+"%",A.k.U(n.e)===o,new B.eth(n,o),m,A.bf,m))}l=n.f
return B.jA(A.bf,A.h5,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.v(C.a([new B.eH(r,"TIP",m),B.hu(A.aY,""+l,"People",20,1,new B.eti(n),l),new B.eH(C.a([new B.dx("Round up",n.r,new B.etj(n),m,A.aL,m)],q),m,m)],q),A.m,m,A.e,A.Q,0,A.p))}}
B.Ue.prototype={
S(){var w=C.a([3,5],x.t)
return new B.bhr(w,A.cG,$,A.bw,0,C.a([],x.X),null,null)}}
B.bhr.prototype={
Z(){this.a0()
this.kS()},
l8(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.G(A.k.bv(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aD(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aD(6)+1)
u.f=t
B.a6D("snare",0.5)}u.m(new B.e54())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hf()
u.w=t
u.x=t?0:3.141592653589793
B.l5("bell",24,400,0.5)}u.m(new B.e55())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new B.bay(v,o.r>0,n))}u=C.aH(n,C.au(C.c6(A.fI,m,A.bx,18,18),n,n,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.e4Y(o),n,n,n,n,n,n,!1,A.ac)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.I(A.dn,A.r,6)
s=C.a([new C.ac(0,A.G,A.aL.j(0.4),A.J,30)],x.V)
u=C.aH(n,C.au(C.e8(A.A,C.p(A.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.eRp,n,n,n),A.f,n,n,new C.o(n,n,v,n,s,D.e0r,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.e4Z(o),n,n,n,n,n,n,!1,A.ac)}else{m=o.as
u=C.aH(n,C.au(C.v(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.eHr,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.km,n,n,n)],x.p),A.m,n,A.e,A.Q,0,A.p),n,n,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.e5_(o),n,n,n,n,n,n,!1,A.ac)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.cSV[r]
v.push(new B.dx(q.b,o.d===q.a,new B.e50(o,q),q.c,A.bz,n))}v=C.a([new B.eH(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(B.hu(A.bz,""+s,"Dice",4,1,new B.e51(o),s))}if(o.d==="num"){s=o.z
s=B.hu(A.bz,""+s,"From",100,1,new B.e52(o),s)
p=o.Q
A.d.v(v,C.a([s,B.hu(A.bz,""+p,"To",1000,2,new B.e53(o),p)],m))}return B.jA(A.bz,A.h5,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.v(v,A.m,n,A.e,A.Q,0,A.p))}}
B.bay.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cG.ag()-0.5)*0.6
else w=0
v=C.m(22)
u=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cv,14)],x.V)
t=C.a([],x.p)
for(s=D.d93.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bI(s[q],p,p,C.p(p,p,A.f,p,p,K.a8m,p,18,p,p,p,p,p,18),p))
return C.ey(A.A,w,C.p(p,new C.am(A.X,p,A.a9,A.q,t,p),A.f,p,p,new C.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bA,p,p,100),p)}}
B.aIY.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.bu6.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
w=this.fc$
w===$&&C.c()
w.q()
this.bqa()}}
B.aJg.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.bub.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
w=this.fc$
w===$&&C.c()
w.q()
this.bqu()}}
B.aJL.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.bul.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
w=this.fc$
w===$&&C.c()
w.q()
this.br_()}}
B.aKe.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.bux.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
w=this.fc$
w===$&&C.c()
w.q()
this.brt()}}
B.b4c.prototype={
B(d){var w,v=this,u=null,t=v.c,s=D.azZ.h(0,t)
$.apL=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aG(u,u,u,u,F.op,u,u,u,new B.co0(d),u,u,u,u,u,u),C.D(C.d(t,u,1,A.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(C.aG(u,u,u,u,C.W(A.M1,s,u,u,u,22),u,u,u,new B.co1(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.C(D.bnH,C.A(t,A.m,u,A.e,A.j,0,u,u),u),C.D(v.f,1)],w)
w.push(C.p(u,v.r,A.f,u,u,new C.o(D.Dz,u,new C.bY(new C.az(A.c.j(0.08),1,A.r,-1),A.Z,A.Z,A.Z),u,u,u,A.n),u,u,u,u,A.A5,u,u,1/0))
return C.cb(u,A.bW,C.bq(!0,C.v(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0),u,!1,!1,u,u)}}
B.dx.prototype={
B(d){var w,v,u,t=this,s=null,r=C.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=C.I(o,A.r,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)A.d.v(v,C.a([C.W(u,q?t.r:A.aP,s,s,s,16),A.e9],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?A.c:A.af,s,s,s,s,s,s,s,s,12,s,s,A.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.C(D.VV,C.aH(s,C.dh(s,C.A(v,A.m,s,A.e,A.Q,0,s,s),s,s,A.bb,new C.o(p,s,o,r,s,s,A.n),A.eL,s,s,s,A.h2,s,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.cnX(t),s,s,s,s,s,s,!1,A.ac),s)}}
B.eH.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a4(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.D(C.ci(C.A(this.c,A.m,w,A.e,A.j,0,w,w),A.q,w,A.z,w,w,w,w,A.aX),1))
return new C.C(A.cM,C.A(v,A.m,w,A.e,A.j,0,w,w),w)}}
B.atA.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.at9(d).cBw(q,A.bH,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.D(C.a8m(C.kP(s,s,s,u,v,t.e,A.k.D(w,v,u)),q),1)
u=t.x
return new C.a4(s,34,C.A(C.a([new C.a4(78,s,r,s),q,new C.a4(38,s,C.d(u==null?A.k.a9(w,1):u,s,s,s,s,s,s,A2.HL,A.dJ,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
B.ff.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.C(D.VV,C.aE(!1,A.a1,!0,C.m(12),C.aK(!1,C.m(12),!0,new C.C(Ag.adR,C.A(C.a([C.W(w.c,u,v,v,v,17),A.e9,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new B.cnW(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ad),v)}}
B.Eg.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.eFW:u
w=t?A.c:A.b9
w=C.I(w,A.r,t?2.5:1)
return C.aH(u,C.dh(u,u,u,u,A.bb,new C.o(p,u,w,u,t?C.a([new C.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a6),A.hU,u,r,D.adF,u,u,u,s),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.co2(v),u,u,u,u,u,u,!1,A.ac)}}
B.mk.prototype={
a3d(d,e){var w=C.de()
w.sex(C.cM(C.dA(0,0,0,d,0,0),new B.cnY(this,w,e)))
this.fd$.push(w.b9())},
kS(){var w=this,v=w.pW(new B.co_(w))
v.ka(0)
w.fc$!==$&&C.aR()
w.fc$=v}}
B.a9k.prototype={
btw(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,C.K)(w),++q)for(p=A.d.gai(w[q]);p.C();){o=p.gT(0)
n=J.a8(o)
if(n.h(o,0)<s)s=n.h(o,0)
if(n.h(o,0)>t)t=n.h(o,0)
if(n.h(o,1)<r)r=n.h(o,1)
if(n.h(o,1)>u)u=n.h(o,1)}g.z!==$&&C.aR()
g.z=s
g.Q!==$&&C.aR()
g.Q=t
g.as!==$&&C.aR()
g.as=r
g.at!==$&&C.aR()
g.at=u
for(m=0,q=0;q<w.length;w.length===p||(0,C.K)(w),++q){for(v=A.d.gai(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gT(0)
n=J.a8(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&C.aR()
g.ax=m
w=g.bwF()
g.ay!==$&&C.aR()
g.ay=w},
bwF(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
EE(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
B.a9l.prototype={
cxC(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(r.EE(0,w,e)){if(t!=null){q=r.ax
q===$&&C.c()
p=t.ax
p===$&&C.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
B.uy.prototype={}
B.NQ.prototype={}
B.xp.prototype={}
B.NP.prototype={
f9(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.alj[w.aD(7)]
w=w.hf()?0:12
u=A.o.G(t.c++,3)===0?"flute":"bell"
B.l5(u,v+w-12,2200,0.1)}}
B.TL.prototype={
S(){var w=$.av()
return new B.aBe(new C.cq(null,x.A),new C.ap(A.as,w),new B.NP(A.cG),D.cUN,A.at,D.a0o,$,A.bw,0,C.a([],x.X),null,null)}}
B.aBe.prototype={
Z(){var w,v=this
v.a0()
v.kS()
v.a.toString
w=$.fZK
if(w==null)w=$.fZK=B.cqx()
w.by(new B.dRs(v),x.P)},
q(){var w=this.e
w.R$=$.av()
w.O$=0
this.bqC()},
clP(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.gm)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n)q.push(new B.dQV(p[n]).$0())
w.push(q)}this.w=w},
gUA(){var w=this.fy
return w.A(0,A.at)?100:Math.min(w.a,w.b)*0.43},
aqV(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
auO(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.aqV(d.x,d.w,105/Math.max(w,3))
C.eL()
B.l5("bell",(A.d.cJ(D.a_Y,d.c)+1)*3+12,900,0.45)
B.dD(300,"",280,1.4,0.15,"tri")},
l8(d){var w,v,u,t,s,r,q,p=this
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
p.x=A.k.D(p.x+p.as*d,-85,85)
q=Math.exp(-d*2.2)
v=p.Q*=q
p.as*=q
if(p.ch&&Math.abs(v)<3)p.y=p.y+7*d/Math.sqrt(p.z)}while(v=p.y,v>180)p.y=v-360
while(v<-180){v+=360
p.y=v}},
c2m(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.at))return null
w=n.fy
v=n.gUA()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gUA()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cxC((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c2l(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new B.dQT(w))
return}w.m(new B.dQU(w,v,A.a.i(d).toLowerCase()))},
bJ5(){var w=null,v=this.c
v.toString
C.cg(w,w,!0,w,new B.dQR(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aG(n,n,n,n,D.byk,n,n,n,o.gbJ4(),n,n,n,n,"Earth facts",n),C.aG(n,n,n,n,D.me,n,n,n,new B.dRd(o,d),n,n,n,n,"Share",n)],l),j=C.cl(new B.dRe(o,m)),i=A.c.j(0.06)
i=C.a([C.aL(n,A.U,!1,n,!0,A.q,n,C.aM(),o.e,n,n,n,n,n,2,C.bo(n,new C.b4(4,C.m(14),A.Z),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.Co,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bGg,n,n,n,n,n,n,n,n,n,n,n,n),A.z,!0,n,!0,n,!1,n,A.ag,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc2k(),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.iC,!0,A.a5,n,A.am,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
w.push(new B.dx(s.a,!1,new B.dRf(o,s),A.mR,A.aY,n))}i.push(new C.C(A.ir,new C.a4(n,38,C.cL(w,n,n,n,n,A.aX,!1),n),n))}i.push(A.aq)
w=C.a([new B.dx("Whole Earth",!1,new B.dRj(o),A.he,A.aY,n)],l)
for(v=D.azY.gdL(D.azY),v=v.gai(v);v.C();){u=v.gT(v)
w.push(new B.dx(u.a,!1,new B.dRk(o,u),n,A.aY,n))}w.push(new B.dx("Random",!1,new B.dRl(o),A.m6,A.aY,n))
i.push(new B.eH(w,"GO TO",n))
w=o.z
i.push(B.hu(A.aY,A.k.a9(w,1)+"x","Zoom",16,0.8,new B.dRm(o),w))
w=o.dy
i.push(B.hu(A.cr,A.a.aU(A.o.u(A.k.bv(w)),2,"0")+":00","Time",24,0,new B.dRn(o),w))
w=o.fr
i.push(B.hu(A.bf,o.ckC(),"Season",365,0,new B.dRo(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.ly:D.F7
i.push(new B.eH(C.a([new B.dx("Spin",w,new B.dRp(o),D.bty,A.aY,n),new B.dx("Night",v,new B.dRq(o),A.uL,A.aY,n),new B.dx("Borders",u,new B.dRg(o),D.btC,A.aY,n),new B.dx("Names",r,new B.dRh(o),L.YC,A.aY,n),new B.dx("Music",q,new B.dRi(o),p,A.aY,n)],l),n,n))
return B.jA(A.aY,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.v(i,A.m,n,A.e,A.Q,0,A.p))},
ckC(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.asS[u])v=u
return A.i6[v]+" "+(A.k.bv(w-D.asS[v])+1)},
c2j(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.mz(1,A.o.G((A.d.cJ(D.a_Y,t)+1)*47,360),0.55,1).iv()
r=new B.dQP()
q=C.m(20)
p=C.I(s.j(0.6),A.r,1)
o=x.p
n=C.A(C.a([C.p(j,j,A.f,j,j,new C.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.ab,C.D(C.d(d.a,j,1,A.a2,j,j,j,A.dP,j,j,j),1),C.aG(j,j,j,j,A.Fr,j,j,j,new B.dQO(this),j,j,j,j,j,A.c7)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hk,j,j,j)
m=D.d7M.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.A(C.a([m,A.ab,r.$2("PEOPLE",l?B.ffY(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",B.FJ(i)+" km\xb2")
if(l)m=(w<10?A.k.a9(w,1):B.FJ(w))+" per km\xb2"
else m="\u2014"
m=C.A(C.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.a9(u,3):A.k.a9(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.v(C.a([n,t,A.P,v,A.P,m,A.P,C.A(C.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+B.ffY(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.Q,0,A.p),A.f,j,j,new C.o(D.U0,j,p,q,j,j,A.n),j,j,j,j,D.aea,j,j,j)}}
B.bcM.prototype={
a5(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.V(),d7=C.L()
d7.r=D.zz.gp(0)
d8.aW(new C.a9(0,0,0+d4,0+d5),d7)
w=new C.f5()
w.dU(4)
for(d7=d8.a,v=0;v<90;++v){u=w.ag()
t=w.ag()
s=w.ag()
r=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
r.r=A.c.j(0.25+w.ag()*0.5).gp(0)
q=r.H()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new C.u(d4,d5)
o=d2.f
u=C.L()
t=x.O
u.sar(new C.bS(A.A,0.5,A.x,d3,0,C.a([A.K,A.aY.j(0.35),A.K],t),D.cGk,d3).av(0,C.bT(p,o*1.1)))
d8.ae(p,o*1.05,u)
n=C.bT(p,o)
u=C.L()
u.sar(D.e0v.av(0,n))
d8.ae(p,o,u)
J.bA(d7.save())
u=x.v
d6=new C.aP(d6.r,A.ap,d3,d3,C.a([],u))
d6.E(new C.kB(n))
d8.ty(0,d6)
m=d2.d*3.141592653589793/180
l=d2.e*3.141592653589793/180
k=Math.sin(m)
j=Math.cos(m)
i=Math.sin(l)
h=Math.cos(l)
g=C.L()
g.b=A.ae
m=g.c=0.7
g.r=A.c.j(0.1).gp(0)
f=new B.d86(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cE(d.gbH().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.V()
a3=C.a([],u)
d=new C.aP(a2.r,A.ap,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ao(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bw(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cE(d.gbH().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cE(d.gbH().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.V()
a3=C.a([],u)
d=new C.aP(a2.r,A.ap,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ao(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bw(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cE(d.gbH().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.G((A.d.cJ(D.a_Y,a7.c)+1)*47,360)
$.V()
b0=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
a3=a8?0.35:0.5
b0.r=new H.mz(1,a9,a3,a8?1:0.62).iv().gp(0)
b1=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
b1.b=A.ae
b1.c=a8?2.2:m
b1.e=A.fw
b1.r=(a8?A.c:A.w.j(0.55)).gp(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,C.K)(a3),++b3){b4=a3[b3]
b5=b4.length/4|0
b6=$.V()
b7=C.a([],u)
b8=new C.aP(b6.r,A.ap,d3,d3,b7)
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
if(c8!=null)b6.bw(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new C.ao(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bw(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}}if(!b9)continue
b6=new C.bE()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bw(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cE(b8.gbH().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cE(b8.gbH().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.K)(a5),++b3){d=a5[b3]
$.V()
s=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
s.b=A.ae
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.qI
q=s.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cE(d.gbH().a.snapshot()):s).a,q)
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
c9=B.hxf(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbb(b2)
c9.a5(d8,new C.u(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.D(k*c0+j*c1*c4,-1,1)
$.V()
u=C.L()
u.sar(new C.bS(A.A,0.5,A.x,d3,0,C.a([A.K,A.K,D.b1q.j(0.78)],t),D.cV8,d3).av(0,C.bT(new C.u(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.ae(p,o,u)}$.V()
d4=C.L()
d4.sar(new C.bS(A.A,0.5,A.x,d3,0,C.a([A.K,A.w.j(0.4)],t),D.d5l,d3).av(0,n))
d8.ae(p,o,d4)
d7.restore()
d7=C.L()
d7.b=A.ae
d7.c=1.4
d7.r=A.fZ.j(0.5).gp(0)
d8.ae(p,o,d7)},
aq(d){return!0}}
B.aJm.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.aJn.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
w=this.fc$
w===$&&C.c()
w.q()
this.bqB()}}
B.br_.prototype={}
B.UQ.prototype={
S(){return new B.bi0()}}
B.bi0.prototype={
gaP_(){var w=this.d
if(w===$)w=this.d=A.cG.aD(16)
return w},
B(d){var w=null,v=C.eA(w,w,w,!0,!0,D.zz,w,1,!0,w,0,!1,w,!1,w,w,C.aG(w,w,w,w,D.ajO,w,w,w,new B.etZ(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fbX,w,w,w,1,w,!0),u=C.m(18),t=A.aY.j(0.1),s=C.I(A.aY.j(0.35),A.r,1),r=x.p
return C.cb(v,D.zz,C.cL(C.a([C.p(w,C.A(C.a([D.bx2,A.aw,C.D(C.d(D.cJY[this.gaP_()],w,w,w,w,w,w,D.a5G,w,w,w),1),C.aG(w,w,w,w,D.bHg,w,w,w,new B.eu_(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bA,w,w,w),A.ay,C.cl(new B.eu0())],r),w,A.Wg,w,w,A.aj,!1),w,!1,!1,w,w)}}
B.UB.prototype={
S(){return B.hxH()}}
B.bhO.prototype={
ccG(d){var w=d.c,v=B.hxJ(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.u(Math.cos(t)*v,Math.sin(t)*v)},
Z(){this.a0()
this.kS()},
l8(d){var w,v,u,t=this
t.e.f9(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.ccG(w)
u=new C.u(-v.a,-v.b).aJ(0,t.w)
v=C.l6(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc2n(){var w=this.ch
return new C.u(w.a/2,w.b/2).af(0,this.x)},
c2r(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.Bi[s]
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
aW2(d){this.m(new B.em7(this,d))
C.eL()
B.l5("bell",D.d5w[A.o.G(A.d.cJ(D.Bi,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aG(m,m,m,m,D.me,m,m,m,new B.emi(n,d),m,m,m,m,"Share",m)],k),i=C.cl(new B.emj(n,l)),h=C.a([new B.dx("All",!1,new B.emk(n),A.Z6,A.aL,m)],k)
for(w=0;w<10;++w){v=D.Bi[w]
h.push(new B.dx(v.a,n.z===v,new B.eml(n,v),m,C.b_(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.a9(s,0)+" d/s":""+A.k.U(s)+" d/s"
t=B.hu(A.aL,s,"Time",1,0,new B.emm(n),u/t)
u=n.w
u=B.hu(A.aL,A.k.a9(u,1)+"x","Zoom",9,0.5,new B.emn(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.ly:D.F7
return B.jA(A.aL,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.v(C.a([new B.eH(h,"GO TO",m),t,u,new B.eH(C.a([new B.dx("Orbits",s,new B.emo(n),m,A.aL,m),new B.dx("Names",r,new B.emp(n),m,A.aL,m),new B.dx("Asteroids",q,new B.emq(n),m,A.aL,m),new B.dx("Music",p,new B.emr(n),o,A.aL,m)],k),m,m)],k),A.m,m,A.e,A.Q,0,A.p))},
c2o(d){var w,v,u,t,s,r=null,q=C.b_(d.z),p=d.c,o=p*8.317,n=new B.em5(),m=C.m(20),l=C.I(q.j(0.6),A.r,1),k=C.p(r,r,A.f,r,r,new C.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.A(C.a([k,A.ab,C.D(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.kS,r,r,r),1),C.aG(r,r,r,r,A.Fr,r,r,r,new B.em4(this),r,r,r,r,r,A.c7)],w),A.m,r,A.e,A.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,D.I0,r,r,r)
v=n.$2("WIDTH",B.FJ(d.d*2)+" km")
u=p===0
p=C.A(C.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":C.t(p)+" AU ("+B.FJ(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new B.em6().$1(v))
t=d.f
v=C.A(C.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.a9(t/24,0)+" Earth days":A.k.a9(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.A(C.a([n.$2("GRAVITY",C.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.a9(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.U(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.a9(o,1)+" minutes":A.k.a9(o/60,1)+" hours"
return C.p(r,C.v(C.a([j,A.av,k,A.P,p,A.P,v,A.P,s,A.P,C.A(C.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(D.U0,r,l,m,r,r,A.n),r,r,r,r,D.aea,r,r,r)}}
B.bp2.prototype={
a5(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.V()
w=C.L()
w.r=D.zz.gp(0)
a7.aW(new C.a9(0,0,0+a5,0+a6),w)
v=new C.f5()
v.dU(8)
for(w=a7.a,u=0;u<110;++u){t=v.ag()
s=v.ag()
r=v.ag()
q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.r=A.c.j(0.2+v.ag()*0.5).gp(0)
p=q.H()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc2n()
n=a5.w
if(a5.as)for(a6=A.d.gai(D.Bi),t=new C.hE(a6,new B.eO9()),s=o.a,r=o.b;t.C();){q=a6.gT(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
m.b=A.ae
m.c=1
m.r=A.c.j(0.12).gp(0)
p=m.H()
w.drawCircle(s,r,q*n,p)
p.delete()}if(a5.ax)for(a6=a5.CW,t=o.a,s=o.b,r=a5.cx,u=0;u<a6.length;++u){q=a6[u]
m=a5.f
l=r[u]
k=q+m*0.0016/l
j=(l===0?0:30+150*Math.sqrt(l/30.1))*n
q=Math.cos(k)
m=Math.sin(k)
l=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
l.r=A.c.j(0.5).gp(0)
p=l.H()
w.drawCircle(t+q*j,s+m*j,0.9,p)
p.delete()}i=B.hxI(A.d.gK(D.Bi))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.L()
s=x.O
t.sar(new C.bS(A.A,0.5,A.x,a4,0,C.a([A.aL.j(0.5),A.K],s),a4,a4).av(0,C.bT(o,a6)))
a7.ae(o,a6,t)
t=C.L()
t.sar(D.e0p.av(0,C.bT(o,i)))
a7.ae(o,i,t)
if(a5.at){h=B.h0l("Sun",10.5,A.af)
h.a5(a7,o.af(0,new C.u(-h.b.c/2,i+4)))}for(a6=A.d.gai(D.Bi),t=new C.hE(a6,new B.eOa()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gT(0)
g=l.c
j=g===0?0:30+150*Math.sqrt(g/30.1)
f=l.e
k=f<=0?0:6.283185307179586*(a5.f/f)+g*1.7
g=q+Math.cos(k)*j*n
f=m+Math.sin(k)*j*n
j=(1.5+1.6*Math.log(l.d/1000+1))*Math.sqrt(n)
e=C.b_(l.z)
d=l.a
if(d==="Saturn"){J.bA(w.save())
w.translate(g,f)
w.rotate(-22.91831180523293,0,0)
a0=C.cr(A.J,j*1.3,j*4.2)
a1=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
a1.b=A.ae
a1.c=j*0.45
a1.r=A.bJ.j(0.55).gp(0)
p=a1.H()
w.drawOval(C.c4(a0),p)
p.delete()
w.restore()}a0=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
a0.r=e.j(0.3).gp(0)
a0.z=A.qI
p=a0.H()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
a1=C.ar(e,A.w,0.55)
a1.toString
a0.sar(new C.bS(P.pZ,0.5,A.x,a4,0,C.a([A.c,e,a1],s),E.a_C,a4).av(0,C.bT(new C.u(g,f),j)))
p=a0.H()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
l.b=A.ae
l.c=2
l.r=A.c.gp(0)
p=l.H()
w.drawCircle(g,f,j+7,p)
p.delete()}if(r&&d==="Earth"){k=a5.f/27.3*2*3.141592653589793
a2=j+11*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
a3.r=A.c.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.8*a1,p)
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.cOS[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
a3.r=A.af.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=B.h0l(d,10.5,A.af)
h.a5(a7,new C.u(g+-h.b.c/2,f+(j+4)))}}},
aq(d){return!0}}
B.TM.prototype={
S(){var w=x.i
return new B.aBf(new B.NP(A.cG),C.c0(5,0,!1,w),C.c0(5,0,!1,w),C.c0(5,null,!1,x.cD),A.J,A.J,C.a([],x.g),$,A.bw,0,C.a([],x.X),null,null)}}
B.aBf.prototype={
coX(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c2q(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.dQy
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
B.dD(150,"",400,0,0.5,"noise")
B.dD(90,"",300,1.5,0.6,"sine")
s.m(new B.dRw())},
Z(){this.a0()
this.kS()},
l8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.f9(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.xU[r]
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
if(q.a!=="Sun")B.dD(60+p*5,"",220,0.6,0.55,"sine")
break}}}if(A.d.e2(s,new B.dRZ()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
B.dD(70,"",350,0,0.7,"noise")
break}}v=i.db
if(v.length===0||A.d.gak(v).aB(0,i.cx).gcj()>120)v.push(i.cx)
if(v.length>700)A.d.cv(v,0)
if(i.cx.gcj()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bHo()
else n=n==="weight"?p.cvY():p.bzK()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.d2S[u]
v.push(new B.dx(t.b,p.d===t.a,new B.dRL(p,t),t.c,A.cL,o))}v=C.a([new B.eH(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new B.dx("Hammer",!s,new B.dRM(p),Ad.Yx,A.cL,o),new B.dx("Feather",s,new B.dRN(p),L.Y8,A.cL,o),new B.dx(q,r,new B.dRR(p),A.EU,A.aY,o)],w)
q=p.w
A.d.v(v,C.a([new B.eH(r,o,o),B.hu(A.cL,""+A.k.U(q*100)+"%","Slow motion",1,0.05,new B.dRS(p),q),new B.eH(C.a([new B.ff(A.uO,"Drop!",new B.dRT(p),A.bf,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=B.hu(A.cL,""+A.k.U(s)+" kg","Your weight",120,20,new B.dRU(p),s)
r=p.ax
A.d.v(v,C.a([s,B.hu(A.cL,""+A.k.U(r*100)+" cm","Your jump",1.2,0.1,new B.dRV(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=B.hu(A.cL,A.k.a9(s,1)+" km/s","Speed",13,0,new B.dRW(p),s)
r=p.ch
A.d.v(v,C.a([s,B.hu(A.cL,A.k.a9(r,1)+"x out","View",8,0.5,new B.dRX(p),r),new B.eH(C.a([new B.ff(A.mS,"Fire!",p.gc2p(),A.bf,o),new B.ff(A.uO,"Falls",new B.dRY(p),A.c,o),new B.ff(A.t4,"Orbit 7.7",new B.dRO(p),A.c,o),new B.ff(D.bwu,"Oval 9",new B.dRP(p),A.c,o),new B.ff(A.AO,"Escape",new B.dRQ(p),A.c,o)],w),o,o)],w))}return B.jA(A.cL,A.h5,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.v(v,A.m,o,A.e,A.Q,0,A.p))},
bHo(){return new C.C(D.biD,C.cl(new B.dRv(this)),null)},
cvY(){var w,v,u,t=null,s=[D.enj,D.eoF,D.eoN,D.ep5,D.eoL,D.epa,D.enR,D.epu,D.eoq],r=x.p,q=C.a([D.f0G,A.S],r)
for(w=0;w<9;++w){v=s[w]
u=C.b_(v.c)
q.push(new C.C(A.cM,new C.cx(A.aX,A.e,A.j,A.m,t,A.p,t,0,C.a([new C.a4(62,t,new C.x(v.a,t,new C.F(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bH(1,A.bo,new C.Aw(new B.dRx(this,v),t),t)],r),t),t))}q.push(A.av)
q.push(D.f2Q)
return C.cL(q,t,A.j4,t,t,A.aj,!1)},
bzK(){return C.cl(new B.dRt(this))}}
B.b81.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.V(),e=C.L()
e.r=D.zz.gp(0)
d.aW(new C.a9(0,0,0+h,0+g),e)
w=new C.f5()
w.dU(2)
for(e=d.a,v=0;v<80;++v){u=w.ag()
t=w.ag()
s=w.ag()
r=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
r.r=A.c.j(0.2+w.ag()*0.5).gp(0)
q=r.H()
e.drawCircle(u*h,t*g,s*1.1+0.3,q)
q.delete()}h=j.c
p=6371*h
g=j.b
e=C.L()
e.sar(new C.bS(A.A,0.5,A.x,i,0,C.a([A.K,A.aY.j(0.35),A.K],x.O),D.cVZ,i).av(0,C.bT(g,p*1.1)))
d.ae(g,p*1.06,e)
e=C.L()
e.sar(D.e0j.av(0,C.bT(g,p)))
d.ae(g,p,e)
o=g.af(0,new C.u(0,-p))
f=f.r
e=x.v
n=new C.aP(f,A.ap,i,i,C.a([],e))
u=o.a
t=o.b
s=t+3
n.E(new C.b5(u-16,s))
n.E(new C.ao(u,t-400*h-4))
n.E(new C.ao(u+16,s))
n.E(new C.bE())
s=C.L()
s.r=A.ak.gp(0)
d.aM(n,s)
s=o.af(0,new C.u(0,-400*h-6))
u=C.L()
u.r=A.c.gp(0)
d.ae(s,4,u)
u=j.e
if(u.length>1){e=C.a([],e)
m=new C.aP(f,A.ap,i,i,e)
f=g.a
t=g.b
m.E(new C.b5(f+A.d.gK(u).a*h,t+A.d.gK(u).b*h))
for(u=C.d9(u,1,i,C.U(u).c),s=u.$ti,u=new C.bV(u,u.gJ(0),s.k("bV<ai.E>")),s=s.k("ai.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new C.ao(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bw(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.V()
f=C.L()
f.b=A.ae
f.c=2.4
f.d=A.bO
f.r=A.cL.j(0.9).gp(0)
d.aM(m,f)}if(j.f){f=j.d
k=g.af(0,new C.u(f.a*h,f.b*h))
h=C.L()
h.r=A.cL.j(0.4).gp(0)
h.z=G.mi
d.ae(k,7,h)
h=C.L()
h.r=A.c.gp(0)
d.ae(k,4,h)}},
aq(d){return!0}}
B.Ut.prototype={
S(){return new B.bhL(new C.cq(null,x.A),$,A.bw,0,C.a([],x.X),null,null)}}
B.bhL.prototype={
Z(){this.a0()
this.kS()},
l8(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.Oi[l.e],i=D.Oi[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aG(k,k,k,k,D.me,k,k,k,new B.ef1(l,d),k,k,k,k,"Share",k)],u)
s=C.D(C.b3(k,k,k,new B.boB(f,g,v,k),A.eS),1)
r=g.a
q=v<10?A.k.a9(v,1):B.FJ(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.iU,A.L,k,k)
o=B.FJ(v*v*v)
n=A.a.c7(p,"s")?"":"s"
h=C.v(C.a([s,C.p(k,C.v(C.a([q,A.av,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,Y.a54,A.L,k,k),A.bB,C.d(p+": "+B.FJ(w*2)+" km wide. "+r+": "+B.FJ(h*2)+" km wide.",k,k,k,k,k,k,Y.a5i,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.bkO,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.Oi[m]
r.push(new B.dx(w.a,l.e===m,new B.ef2(l,m),k,C.b_(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.Oi[m]
w.push(new B.dx(s.a,l.f===m,new B.ef3(l,m),k,C.b_(s.c),k))}return B.jA(A.bY,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.en(h,l.d),"SIZE COMPARE",C.v(C.a([new B.eH(r,"FIRST",k),new B.eH(w,"SECOND",k)],u),A.m,k,A.e,A.Q,0,A.p))}}
B.boB.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.V()
w=C.L()
w.r=D.Ux.gp(0)
d.aW(new C.a9(0,0,0+h,0+g),w)
v=new C.f5()
v.dU(6)
for(w=d.a,u=0;u<70;++u){t=v.ag()
s=v.ag()
r=v.ag()
q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.r=A.c.j(0.2+v.ag()*0.4).gp(0)
p=q.H()
w.drawCircle(t*h,s*g,r+0.3,p)
p.delete()}o=Math.min(h/2-16,g/2-10)*0.98
n=Math.max(o/this.d,0.8)
h*=0.5
g*=0.5
m=new C.u(h,g)
w=new B.eMi(d)
t=this.c
w.$3(m,o,C.b_(t.c))
s=o-n
l=new C.u(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,C.b_(s.c))
w=C.L()
w.b=A.ae
w.c=1.4
w.r=A.af.gp(0)
d.ae(l,n+3,w)
k=C.ig(i,i,i,i,C.dn(i,i,i,i,i,i,i,i,i,D.eNN,s.a),A.a5,A.ci,i,A.eq,A.cg)
k.eP()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbb(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbb(g)-6
h=g}k.a5(d,l.af(0,new C.u(-w/2,h)))
j=C.ig(i,i,i,i,C.dn(i,i,i,i,i,i,i,i,i,D.eR0,t.a),A.a5,A.ci,i,A.eq,A.cg)
j.eP()
t=j.b
h=t.c
t=t.a.c
j.a5(d,m.af(0,new C.u(-h/2,-t.gbb(t)/2)))},
aq(d){return!0}}
B.aJo.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.bud.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
w=this.fc$
w===$&&C.c()
w.q()
this.bqD()}}
B.aJX.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.bur.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
w=this.fc$
w===$&&C.c()
w.q()
this.brb()}}
B.aK_.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.but.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
w=this.fc$
w===$&&C.c()
w.q()
this.bre()}}
B.Oh.prototype={}
B.SP.prototype={
S(){return B.hxF()}}
B.bgt.prototype={
Z(){this.a0()
this.kS()},
l8(d){var w,v,u,t,s,r=this
r.f+=d
r.e.f9(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
B.dD(70,"",500,0.3,0.5,"sine")}}A.d.bm(w,new B.dzG())},
aW3(d){var w,v,u,t=this.Q
if(t.A(0,A.at))return
w=this.gb3F()
v=d.aB(0,new C.u(t.a/2,t.b*0.42))
u=A.k.D(v.gcj()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new B.Oh(t,u,1.2,new C.wA(1,30+A.cG.ag()*40,0.9,0.7).iv()))
B.l5("bell",60+A.k.U(12-u)*2,400,0.35)},
gb3F(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new C.J(m,new B.dzu(),C.U(m).k("J<1,O>")).fv(0,A.w3),1.0001,99))
m=x.p
w=C.a([C.aG(n,n,n,n,D.me,n,n,n,new B.dzv(o,d),n,n,n,n,"Share",n)],m)
v=C.cl(new B.dzw(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.a9(s,0)+" Suns":B.ffY(s)+" Suns"
t=B.hu(A.bz,s,"Mass",1,0,new B.dzy(o),u/t)
u=C.a([new B.dx("Star (10)",!1,new B.dzz(o),n,A.bz,n),new B.dx("Cygnus X-1 (21)",!1,new B.dzA(o),n,A.bz,n),new B.dx("Milky Way core (4 million)",!1,new B.dzB(o),n,A.bz,n),new B.dx("M87 (6.5 billion)",!1,new B.dzC(o),n,A.bz,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.ly:D.F7
return B.jA(A.bz,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.v(C.a([t,new B.eH(u,"LIKE",n),new B.eH(C.a([new B.dx("Glowing ring",s,new B.dzD(o),n,A.bz,n),new B.dx("Bent light",r,new B.dzE(o),n,A.bz,n),new B.dx("Music",q,new B.dzF(o),p,A.bz,n),new B.ff(A.jN,"Clear",new B.dzx(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.Q,0,A.p))},
acy(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.eJQ,w,w,w),A.bB,C.d(e,w,2,w,w,w,w,I.a5_,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
B.b7q.prototype={
a5(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.V()
w=C.L()
w.r=D.b8K.gp(0)
b2.aW(new C.a9(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.u(w,v)
t=this.b
s=t.gb3F()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,C.K)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new C.u(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+A.k.D(o/h,0,n)
i=new C.u(w+k/h*g,v+j/h*g)}}k=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
k.r=A.c.j(0.6).gp(0)
f=k.H()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=C.L()
b0.b=A.ae
b0.c=2
b0.r=A.c.j(0.25).gp(0)
b0.z=F.Pp
b2.ae(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.ar(A.wm,A.fz,d)
n.toString
k=Math.cos(a4)
$.V()
j=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
g=a5?1:0.85
j.r=n.j(r*(0.4+(0.5+0.5*k)*0.6)*g).gp(0)
f=j.H()
p.drawCircle(w+a6,v+o*a0*0.28,1.3,f)
f.delete()
if(!a5&&t.x){o=Math.sin(-a4)
k=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
k.r=n.j(b1).gp(0)
f=k.H()
p.drawCircle(w+a6*0.5,v+(q*Math.abs(o)*0.6-b0),1,f)
f.delete()}}}b0=s*1.25
$.V()
b1=C.L()
b1.sar(new C.bS(A.A,0.5,A.x,null,0,C.a([A.w,A.w.j(0)],x.O),D.cBF,null).av(0,C.bT(u,b0)))
b2.ae(u,b0,b1)
b1=C.L()
b1.r=A.w.gp(0)
b2.ae(u,s,b1)
b1=C.L()
b1.b=A.ae
b1.c=1
b1.r=A.bz.j(0.55).gp(0)
b2.ae(u,s,b1)
for(b0=t.z,b1=b0.length,m=0;m<b0.length;b0.length===b1||(0,C.K)(b0),++m){a7=b0[m]
a0=s*a7.b
t=w+Math.cos(a7.a)*a0
r=v+Math.sin(a7.a)*a0*0.9
a8=1+A.k.D(3.5/a7.b,0,5)
a9=3*a8
q=-Math.sin(a7.a)*a9
o=Math.cos(a7.a)*a9
n=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
n.c=4.2/Math.sqrt(a8)
n.d=A.bO
k=a7.d
n.r=k.j(A.k.D(a7.b/2,0.2,1)).gp(0)
f=n.H()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
o.r=k.j(0.2).gp(0)
o.z=G.mi
f=o.H()
p.drawCircle(t,r,6,f)
f.delete()}},
aq(d){return!0}}
B.ad0.prototype={}
B.TI.prototype={
S(){var w=x.D,v=x.g
return new B.bgT(new C.cq(null,x.A),new B.NP(A.cG),C.a([],w),A.J,A.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),A.J,A.J,$,A.bw,0,C.a([],x.X),null,null)}}
B.bgT.prototype={
Z(){this.a0()
this.Yr()
this.kS()},
Yr(){var w,v,u,t,s,r,q,p,o=this,n=new C.f5()
n.dU(5)
w=C.a([],x.D)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.ag(),1.6)
w.push(new B.ad0(t,n.ag()*3.141592653589793*2,(n.ag()-0.5)*0.5*t,25+n.ag()*20))}else{t=Math.pow(n.ag(),0.8)
s=n.aD(o.f)
r=n.ag()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.hf()?0:3.141592653589793
q=r+(n.ag()-0.5)*0.25}r=n.ag()
p=t<0.25?35+n.ag()*15:205+n.ag()*50
w.push(new B.ad0(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
coO(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.dS0
k.cx=D.dS3
w=new C.f5()
w.dU(9)
v=k.cy
A.d.a7(v)
u=C.a([],x.D)
for(t=0;t<900;++t)u.push(new B.ad0(Math.pow(w.ag(),0.8)*0.7,w.ag()*3.141592653589793*2,0,320+w.ag()*30))
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
for(s=k.ay,r=x.S,s=C.d9(s,0,C.dI(900,"count",r),C.U(s).c),o=s.$ti,s=new C.bV(s,s.gJ(0),o.k("bV<ai.E>")),o=o.k("ai.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new C.u(l*n,Math.sin(m)*n))}k.db=v
v=C.a([],u)
for(u=k.ay,u=C.d9(u,0,C.dI(900,"count",r),C.U(u).c),r=u.$ti,u=new C.bV(u,u.gJ(0),r.k("bV<ai.E>")),r=r.k("ai.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new C.u(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
B.dD(110,"",900,0.5,0.45,"sine")},
l8(d){var w,v,u,t,s,r,q,p=this
p.e.f9(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aB(0,p.fx)
s=Math.max(0.25,t.gcj())
r=t.ez(0,s).aJ(0,0.9/(s*s))
w=p.fy.af(0,r.aJ(0,u))
p.fy=w
v=p.cx.aB(0,r.aJ(0,u))
p.cx=v
w=p.fx.af(0,w.aJ(0,u))
p.fx=w
v=p.CW.af(0,v.aJ(0,u))
p.CW=v
q=new B.dQ3(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aG(r,r,r,r,D.me,r,r,r,new B.dPU(s,d),r,r,r,r,"Share",r)],q),o=C.b3(r,r,r,new B.bcC(s,r),A.at),n=A.w.j(0.5),m=C.m(14),l=C.I(A.bH,A.r,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.an(8,C.p(r,C.d(w,r,r,r,r,r,r,Ab.a4S,r,r,r),A.f,r,r,new C.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bT,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.cRN[v]
o=s.Q===u.a&&!s.ch
l.push(new B.dx(u.b,o,new B.dPV(s,u),r,A.fV,r))}l.push(new B.dx("Collide",s.ch,new B.dPW(s),A.xa,A.bY,r))
o=C.a([new B.eH(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=B.hu(A.fV,""+n,"Arms",6,2,new B.dPX(s),n)
l=s.r
A.d.v(o,C.a([n,B.hu(A.fV,A.k.a9(l,1),"Winding",6,0.8,new B.dPY(s),l)],q))}n=s.as
o.push(B.hu(A.fV,""+A.k.U(n*90)+"\xb0","Tilt",1,0.15,new B.dPZ(s),n))
n=s.ax
o.push(B.hu(A.fV,A.k.a9(n,1)+"x","Speed",4,0,new B.dQ_(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.ly:D.F7
o.push(new B.eH(C.a([new B.dx("Dark matter",n,new B.dQ0(s),r,A.bz,r),new B.dx("You are here",l,new B.dQ1(s),r,A.aL,r),new B.dx("Music",w,new B.dQ2(s),t,A.fV,r)],q),r,r))
return B.jA(A.fV,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.en(new C.am(A.X,r,A.b_,A.q,m,r),s.d),"GALAXY",C.v(o,A.m,r,A.e,A.Q,0,A.p))}}
B.bcC.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.V()
w=C.L()
w.r=D.baz.gp(0)
a3.aW(new C.a9(0,0,0+a1,0+a2),w)
v=new C.f5()
v.dU(3)
for(w=a3.a,u=0;u<90;++u){t=v.ag()
s=v.ag()
r=v.ag()
q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.r=A.c.j(0.15+v.ag()*0.4).gp(0)
p=q.H()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new C.u(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=C.L()
t.sar(new C.bS(A.A,0.5,A.x,a0,0,C.a([A.aD.j(0.32),A.aD.j(0.12),A.K],x.O),D.c_D,a0).av(0,C.bT(o,a2)))
a3.ae(o,a2,t)}m=new B.d5e(a1.as)
a2=n*0.3
t=C.L()
t.sar(new C.bS(A.A,0.5,A.x,a0,0,C.a([A.fW.j(0.85),A.aR.j(0.3),A.K],x.O),a0,a0).av(0,C.bT(o,a2)))
a3.ae(o,a2,t)
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
l.r=new H.mz(1,r,q>200?0.45:0.55,1).iv().j(0.35+(1-s)*0.5).gp(0)
s=s<0.3?1.3:1
p=l.H()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.V()
a2=C.L()
a2.b=A.ae
a2.c=1.6
a2.r=A.aL.gp(0)
a3.ae(g,9,a2)
f=C.ig(a0,a0,a0,a0,D.eH_,A.a5,A.ci,a0,A.eq,A.cg)
f.eP()
f.a5(a3,g.af(0,new C.u(-f.b.c/2,12)))}}else{e=n*0.8
l=C.L()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.bbD.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.b6Z.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.V()
w=C.L()
w.r=A.fW.gp(0)
a3.ae(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.L()
w.r=A.ig.gp(0)
a3.ae(a1,5,w)}},
aq(d){return!0}}
B.Up.prototype={
S(){return new B.bhK(new C.cq(null,x.A),new B.NP(A.cG),$,A.bw,0,C.a([],x.X),null,null)}}
B.bhK.prototype={
Z(){this.a0()
this.kS()},
l8(d){var w,v,u,t=this
t.e.f9(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.G(t.r+d*0.04*v,1)
else{w=A.k.G(t.w+d*0.05*v,1)
t.w=w
u=A.k.bv(w*4)
if(u!==A.k.bv(t.as))B.l5("bell",60+u*4,500,0.35)
t.as=u}},
gckB(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcbj(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aG(q,q,q,q,D.me,q,q,q,new B.eeI(r,d),q,q,q,q,"Share",q)],p),n=C.D(new C.en(C.b3(q,q,q,new B.bnT(r,q),A.eS),r.d),1)
if(r.f==="seasons")w=r.gckB()
else{w=r.gcbj()
v=A.k.am(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.v(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,A_.RK,A.L,q,q),A.f,q,q,q,q,q,q,q,F.aek,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?W.xm:A.iN
t=r.Q
s=t?A.ly:D.F7
s=C.a([new B.eH(C.a([new B.dx("Seasons",n==="seasons",new B.eeJ(r),A.xB,A.bs,q),new B.dx("Moon phases",n==="moon",new B.eeK(r),A.uL,A.bs,q),new B.dx(u,!1,new B.eeL(r),v,A.bs,q),new B.dx("Music",t,new B.eeM(r),s,A.bs,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=B.hu(A.bs,D.cR9[A.o.G(A.k.bv(n*12),12)],"Month",1,0,new B.eeN(r),n)
v=r.z
A.d.v(s,C.a([n,B.hu(A.bs,A.k.a9(v,1)+"\xb0","Tilt",90,0,new B.eeO(r),v)],p))}else{p=r.w
s.push(B.hu(A.bs,""+(A.k.bv(p*29.5)+1),"Day of month",1,0,new B.eeP(r),p))}p=r.y
s.push(B.hu(A.bs,A.k.a9(p,1)+"x","Speed",4,0.2,new B.eeQ(r),p))
return B.jA(A.bs,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.v(s,A.m,q,A.e,A.Q,0,A.p))}}
B.bnT.prototype={
a5(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.V(),b8=C.L()
b8.r=D.zz.gp(0)
b9.aW(new C.a9(0,0,0+b5,0+b6),b8)
w=new C.f5()
w.dU(4)
for(b8=b9.a,v=0;v<70;++v){u=w.ag()
t=w.ag()
s=w.ag()
r=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
r.r=A.c.j(0.2+w.ag()*0.4).gp(0)
q=r.H()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new C.u(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=C.cr(p,n*2,o*2)
t=C.L()
t.b=A.ae
t.c=1
t.r=A.b9.gp(0)
b9.hV(u,t)
t=C.L()
t.sar(D.e0l.av(0,C.bT(p,34)))
b9.ae(p,22,t)
m=s.r*2*3.141592653589793
l=p.af(0,new C.u(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aB(0,l).ez(0,p.aB(0,l).gcj())
J.bA(b8.save())
b8.translate(l.a,l.b)
s=C.L()
s.r=D.b8G.gp(0)
b9.ae(A.J,k,s)
J.bA(b8.save())
b7=new C.aP(b7.r,A.ap,b4,b4,C.a([],x.v))
b7.E(new C.kB(C.bT(A.J,k)))
b9.ty(0,b7)
b7=i.aJ(0,k).aJ(0,0.35)
s=k*1.1
b6=C.L()
b6.sar(D.e0u.av(0,C.bT(A.J,s)))
b9.ae(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.u(s,b6)
b7=new C.u(-s,-b6).aJ(0,k).aJ(0,1.7)
b5=h.aJ(0,k).aJ(0,1.7)
t=C.L()
t.c=2
t.r=A.cx.gp(0)
b9.bz(b7,b5,t)
t=h.aJ(0,k).aJ(0,1.7)
b5=C.L()
b5.r=A.cx.gp(0)
b9.ae(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.ig(b4,b4,b4,b4,C.dn(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aMM,b5),A.a5,A.ci,b4,A.eq,A.cg)
f.eP()
f.a5(b9,l.af(0,new C.u(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.L()
r.b=A.ae
r.c=1
r.r=A.b9.gp(0)
b9.ae(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
a0.r=A.aL.j(0.6).gp(0)
a0.c=2
q=a0.H()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=C.L()
r.sar(new C.bS(new C.da(-0.5,0),1.1,A.x,b4,0,C.a([D.b4G,D.acm],x.O),D.cIY,b4).av(0,C.bT(p,k)))
b9.ae(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.af(0,new C.u(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.L()
r.r=D.b2l.gp(0)
b9.ae(a1,a2,r)
J.bA(b8.save())
b7=b7.r
r=x.v
d=new C.aP(b7,A.ap,b4,b4,C.a([],r))
d.E(new C.kB(C.bT(a1,a2)))
b9.ty(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.L()
a3.r=A.bX.gp(0)
b9.aW(new C.a9(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aB(0,p).ez(0,a1.aB(0,p).gcj())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=D.ap3[a5]
a7=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
a7.r=A.aY.j(0.45).gp(0)
a7.z=A.ja
q=a7.H()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.u(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.L()
b6.r=D.b2h.gp(0)
b9.ae(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bA(b8.save())
b6=new C.aP(b7,A.ap,b4,b4,C.a([],r))
b6.E(new C.kB(C.bT(a8,a9)))
b9.ty(0,b6)
s=s.w
b1=new C.aP(b7,A.ap,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.E(new C.b5(u,b5))
b6=b2>0
b1.azO(new C.u(u,t+a9),b6,new C.aZ(a9,a9))
if(b0<0.5)b6=b2<0
b1.azO(new C.u(u,b5),b6,new C.aZ(a9*Math.abs(1-2*b0),a9))
b6=C.L()
b6.r=A.bX.gp(0)
b9.aM(b1,b6)
b8.restore()
b8=C.L()
b8.b=A.ae
b8.c=1
b8.r=A.b9.gp(0)
b9.ae(a8,a9,b8)
b3=C.ig(b4,b4,b4,b4,D.eH0,A.a5,A.ci,b4,A.eq,A.cg)
b3.eP()
b3.a5(b9,a8.af(0,new C.u(-b3.b.c/2,a9+6)))}},
aq(d){return!0}}
B.aIV.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.bu5.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
w=this.fc$
w===$&&C.c()
w.q()
this.bq7()}}
B.aJj.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.buc.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
w=this.fc$
w===$&&C.c()
w.q()
this.bqx()}}
B.aJW.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
B.buq.prototype={
q(){var w,v,u
for(w=this.fd$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a8(0)
w=this.fc$
w===$&&C.c()
w.q()
this.bra()}}
var z=a.updateTypes(["~()","R(rY)","R(a2N)","ax<~>()","R(Bu)","~(H)","aw(aw)","H(rY,H)","O(O,rY)","n(n,pj)","ak<vu>(O)","R(Bq)","R(XH)","R(a9E)","R(uy)","aw(H)","R(a1v)","R(Ze)","R(DV)","R(n2)","R(aar)","H(H)","a6E()","aw(H,H)","R(pj)","H(Om,Om)","~(a1<@,@>)","~(H,ak<aw>,w,O,n)","~(H,n,aw,aw,aw,R)","R(aw)","R(mh)","H(Bq,Bq)","n(e5)","~(zG)","UQ()","Tx()","M2()","SQ()","R(a2M)","Ui()","Tg()","Tw()","SL()","TK()","U2()","U4()","SU()","Un()","UC()","Uo()","Ul()","UJ()","ST()","UO()","SV()","Uf()","Uk()","ad5(Y,H)","ac_(Y,H)","n(Eu)","~(H,O,ak<aw>)","~(H,aw,aw,n,w)","R(acW)","R(ZV)","R(BF)","R(aa8)","R(ac3)","R(a9S)","H(H,ql)","H(H,Bu)","n(ql)","~(ql,ak<n>,H)","ql?(Bu)","R(ql)","r(n,ZI)","R(Oz)","O(Oh)","R(a9Z)","O(H?)","~(aw,aw,H{alongX:R})","R(EK)","R(abg)","O(H)","~(ak<aw>,w)","~(b9)","R(a8A)","~(aw,aw,aw,aw)","~(ak<aw>{col:w})","~(ah_,n,u,w,O)","~(n,rY)","~(H,aw,w{h:O,w:O})","TY(Y)","M2(Y)","Te(Y,bn<O>,bn<O>)","UP(Y,bn<O>,bn<O>)","UU()","TE()","SR()","Tv()","Ug()","Us()","UN()","Ue()","~(n)","cm(a9l)","R(a9k)","TL()","UB()","TM()","SP()","TI()","Ut()","Up()","R(By)","R(Oh)","~(ak<aw>)"])
B.bTx.prototype={
$1(d){var w=this.a
w=w===0?d:B.h9u(d,w)
return w.af(0,this.b)},
$S:z+6}
B.bTy.prototype={
$1(d){var w=this.a
return w===0?d:B.h9u(d,w)},
$S:z+6}
B.bTw.prototype={
$4(b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
for(w=b4.b,v=b7.a,u=b7.b,t=b7.c,s=b6.a,r=b6.b,q=b6.c,p=b8.a,o=b8.b,n=b8.c,m=1/w,l=v*m,k=u*m,j=t*m,i=p*m,h=o*m,m=n*m,g=b4.a,f=g.a,e=b4.c,d=x.o,a0=b4.d,a1=b4.e,a2=b4.f,a3=0;a3<w;++a3)for(a4=a3/w,a5=s+v*a4,a6=r+u*a4,a4=q+t*a4,a7=0;a7<w;++a7){a8=a7/w
a9=a5+p*a8
b0=a6+o*a8
a8=a4+n*a8
b1=a9+l
b2=b0+k
b3=a8+j
f.push(new B.vu(C.a([e.$1(new B.aw(a9,b0,a8)),e.$1(new B.aw(b1,b2,b3)),e.$1(new B.aw(b1+i,b2+h,b3+m)),e.$1(new B.aw(a9+i,b0+h,a8+m))],d),a0.$1(b5),a1,g.b,a2,g.d,!1,g.c,g.e))}},
$S:z+86}
B.bTz.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aJ(0,Math.cos(w)).af(0,this.c.aJ(0,Math.sin(w)))},
$S:z+15}
B.bTv.prototype={
$2(d,e){var w=3.141592653589793*d/this.a,v=6.283185307179586*e/this.b
return new B.aw(Math.sin(w)*Math.cos(v),Math.cos(w),Math.sin(w)*Math.sin(v))},
$S:z+23}
B.bTA.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aJ(0,Math.cos(w)).af(0,this.c.aJ(0,Math.sin(w)))},
$S:z+15}
B.fC7.prototype={
$4(d,e,f,g){var w=-d
return 0.5*(2*e+(w+f)*this.a+(2*d-5*e+4*f-g)*this.b+(w+3*e-3*f+g)*this.c)},
$S:1783}
B.cjy.prototype={
$1(d){var w=this,v=d.a,u=w.a,t=d.c,s=w.b,r=-v*s+t*u,q=d.b,p=w.c,o=w.d
return new B.aw(v*u+t*s,q*p-r*o,-(q*o+r*p))},
$S:z+6}
B.cjz.prototype={
$1(d){var w=this.a.c,v=this.b.$1(d.aB(0,w.d))
return new B.aw(v.a,v.b,v.c+w.c)},
$S:z+6}
B.cjx.prototype={
$2(d,e){return A.k.aK(e.c,d.c)},
$S:z+25}
B.eKO.prototype={
$1(d){var w=this.a,v=w.r,u=d.a
w.r=d
w.a.d.aFb(A.k.D((u-v.a)/1e6,0,0.1))
w.f.sp(0,u/1e6)},
$S:8}
B.eKN.prototype={
$1(d){if(x.ej.b(d))this.a.a.d.amf(1+d.grD().b*0.0012)},
$S:244}
B.eKK.prototype={
$1(d){var w=this.a
return w.w=w.a.d.c},
$S:242}
B.eKL.prototype={
$1(d){var w=this.a,v=w.a
if(d.w>=2){v=v.d
v.amf(w.w/d.d/v.c)}else{w=v.d
v=d.a
w.y=w.x=null
w.a+=-v.a*0.009
w.b=A.k.D(w.b+v.b*0.009,-1.25,1.35)
w.b_()}},
$S:220}
B.eKM.prototype={
$1(d){var w=this.a
w=w.a.f.$1(w.e.cKZ(d.b))
return w},
$S:48}
B.fi2.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
B.f9s.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gK(d.e.split(". "))+"."},
$S:z+32}
B.ffj.prototype={
$1(d){var w
if(!this.a.Kx(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+1}
B.ffk.prototype={
$1(d){return d.x},
$S:z+1}
B.fi_.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
B.fi0.prototype={
$1(d){var w
if(!this.a.Kx(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+1}
B.fi1.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+8}
B.dYK.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.dYL.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.z(this.b,this.c))},
$S:0}
B.dYM.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gcW(v).Q
v.toString
w.lJ(v,A.dU,A.i5)}},
$S:8}
B.dYX.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a7(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
B.dYY.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
B.dYT.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
B.dYR.prototype={
$2(d,e){var w=this.a
w.r.push(C.cM(C.dA(0,0,0,d,0,0),new B.dYS(w,this.b,e)))},
$S:1784}
B.dYS.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
B.dYU.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gUC().ahx(0,u[1],u[2],u[3])
u[4].bG(0,new B.dYP(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
B.dD(700+w.e*120,"",80,0,0.25,"square")
v.m(new B.dYQ(w.a,v,w.f,w.r))},
$S:0}
B.dYP.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:182}
B.dYQ.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bv(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.dYV.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gUC().aig(t,u[1],s,u[3])
B.dD(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new B.dYO(w.a,v,w.e,w.f))},
$S:0}
B.dYO.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bv(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.dYW.prototype={
$0(){B.dD(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new B.dYN(w,this.b))},
$S:0}
B.dYN.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
B.dZ0.prototype={
$0(){var w=this.a
return w.m(new B.dZ_(w))},
$S:0}
B.dZ_.prototype={
$0(){return this.a.at=!0},
$S:0}
B.dZ1.prototype={
$0(){var w=this.a
return w.m(new B.dYZ(w))},
$S:0}
B.dYZ.prototype={
$0(){return this.a.at=!1},
$S:0}
B.dZ2.prototype={
$0(){var w=this.a
w.f.saT(0,this.b)
w.Mh()},
$S:0}
B.dZ3.prototype={
$0(){return this.a.WB(this.b)},
$S:0}
B.dZ4.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Mh():w.aSc()},
$S:2}
B.dZ5.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Mh():w.aSc()},
$S:0}
B.edm.prototype={
$2(d,e){return d+e},
$S:1785}
B.edG.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.edF(w,d))},
$S:134}
B.edF.prototype={
$0(){var w=C.aN(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
B.edH.prototype={
$0(){},
$S:0}
B.edI.prototype={
$0(){},
$S:0}
B.edo.prototype={
$0(){return this.a.m(new B.edn(this.b,this.c))},
$S:0}
B.edn.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.edd.prototype={
$1(d){return this.a.cx===d},
$S:54}
B.ede.prototype={
$1(d){return this.a.cx=d},
$S:27}
B.edf.prototype={
$1(d){return this.a.cy===d},
$S:54}
B.edg.prototype={
$1(d){return this.a.cy=d},
$S:27}
B.edh.prototype={
$1(d){return this.a.db===d},
$S:54}
B.edi.prototype={
$1(d){return this.a.db=d},
$S:27}
B.edj.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:54}
B.edk.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.L(0,d)},
$S:27}
B.edl.prototype={
$0(){var w=this.a
return w.m(w.gatP())},
$S:0}
B.edb.prototype={
$1(d){return this.a.$1(!0)},
$S:82}
B.edc.prototype={
$1(d){return this.a.$1(!1)},
$S:148}
B.eda.prototype={
$1(d){return this.a.$1(!1)},
$S:206}
B.edz.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.as(e.b,e.d)
o.ch=n
n=C.b3(p,p,p,new B.beh(o,p),n)
w=this.b
v=B.bwM("WORLD",w.a,w.c)
u=B.bwM("GRAVITY",C.t(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.U(t*100)
t=t<0.25?A.cx:A.bf
t=B.bwM("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.U(s*100)
s=s>D.Bc[o.db].d?A.cx:A.c
q=x.p
s=C.a([v,u,t,B.bwM("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(B.bwM("HEIGHT",""+A.k.U(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=C.a([n,C.an(p,C.A(s,A.m,p,A.hH,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.byJ(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.qD[w].a+".":"You landed on every world!"
v=C.a([new B.ff(A.ma,"Again",new B.edu(o),A.c,p),new B.ff(A.uP,"Rebuild",new B.edv(o),A.aL,p)],q)
if(o.d+1<7)v.push(new B.ff(A.jr,"Next world",new B.edw(o),A.bf,p))
n.push(B.h3X("Perfect landing!",w,A.bf,v))}if(o.as==="crashed")n.push(B.h3X("Crash!",o.at,A.cx,C.a([new B.ff(A.ma,"Try again",new B.edx(o),A.bf,p),new B.ff(A.uP,"Rebuild",new B.edy(o),A.aL,p)],q)))
return new C.am(A.X,p,A.b_,A.q,n,p)},
$S:63}
B.edu.prototype={
$0(){var w=this.a
return w.m(w.gatP())},
$S:0}
B.edv.prototype={
$0(){var w=this.a
return w.m(new B.edr(w))},
$S:0}
B.edr.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.edw.prototype={
$0(){var w=this.a
return w.m(new B.edq(w))},
$S:0}
B.edq.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
B.edx.prototype={
$0(){var w=this.a
return w.m(w.gatP())},
$S:0}
B.edy.prototype={
$0(){var w=this.a
return w.m(new B.edp(w))},
$S:0}
B.edp.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.edA.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new B.edt(v,w))},
$S:0}
B.edt.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
B.edB.prototype={
$1(d){return this.a.y=d},
$S:9}
B.edC.prototype={
$1(d){return this.a.Q=d},
$S:9}
B.edD.prototype={
$1(d){return this.a.z=d},
$S:9}
B.edE.prototype={
$0(){var w=this.a
return w.m(new B.eds(w))},
$S:0}
B.eds.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
B.dA7.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.h_n
if(q==null)q=$.h_n=B.cAJ()
w=3
return C.b(C.iG(C.a([q,$.tD().bbD("assets/data/three.min.js")],x.aJ),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kb(0,C.cN(J.q(s,1)))
q.m(new B.dA6(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:53}
B.dA6.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
B.dzK.prototype={
$0(){return this.a.bPz(C.aT(J.q(this.b,"group")))},
$S:0}
B.dzL.prototype={
$1(d){return A.a.aU(A.o.fI(A.o.D(A.k.U(d*255),0,255),16),2,"0")},
$S:281}
B.dA8.prototype={
$0(){return B.a6D("kick",0.25)},
$S:0}
B.dzM.prototype={
$0(){return this.a.cx=this.b},
$S:0}
B.dzN.prototype={
$1(d){return d.a===this.a},
$S:z+16}
B.dzO.prototype={
$0(){return B.a6D("kick",0.5)},
$S:0}
B.dzP.prototype={
$0(){return B.dD(1300+this.a.R8.aD(900),"",40,0,0.2,"square")},
$S:0}
B.dzR.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.ch
if(w===2)w=1
else w=w===1?0:2
u.ch=w}else{w=this.a
v=w.ay
if(v.t(0,u))v.W(0,u)
else{v.L(0,u)
if(w.ch===2)w.ch=1}if(v.a===0&&w.ch===0)w.ch=2
u=w}if(u.cx!=null&&!A.d.ba(u.d.e,new B.dzQ(u)))u.cx=null
u.go=0},
$S:0}
B.dzQ.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.avq(d)},
$S:z+16}
B.dzH.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
B.dzI.prototype={
$0(){var w=this.a
return w.m(w.gbZF())},
$S:0}
B.dzJ.prototype={
$0(){return this.a.afe(null)},
$S:0}
B.dzY.prototype={
$0(){var w=this.a.as
return w==null?null:w.eM(0,C.E(["t","shot"],x.N,x.z))},
$S:0}
B.dzZ.prototype={
$0(){return this.a.csQ(this.b.a)},
$S:0}
B.dA_.prototype={
$0(){return this.a.afe(this.b)},
$S:0}
B.dA0.prototype={
$1(d){var w=this.a
return w.m(new B.dzX(w,d))},
$S:6}
B.dzX.prototype={
$0(){return this.a.k3=this.b},
$S:0}
B.dA1.prototype={
$0(){var w=this.a
return w.m(new B.dzW(w,this.b))},
$S:0}
B.dzW.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dA2.prototype={
$0(){var w=this.a
return w.m(new B.dzV(w))},
$S:0}
B.dzV.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
B.dA3.prototype={
$0(){var w=this.a
return w.m(new B.dzU(w))},
$S:0}
B.dzU.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eM(0,C.E(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.IV},
$S:0}
B.dA4.prototype={
$0(){var w=this.a
return w.m(new B.dzT(w))},
$S:0}
B.dzT.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aUI()
else w.p2=null},
$S:0}
B.dA5.prototype={
$0(){var w=this.a
return w.m(new B.dzS(w))},
$S:0}
B.dzS.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
B.bXU.prototype={
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
$S:316}
B.bXV.prototype={
$1(d){var w=new C.rh([],[]).p0(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:575}
B.fgp.prototype={
$2(d,e){var w
A:{if("black"===d){w=e.a===25?"The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.":"The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral)."
break A}if("white"===d){w=e.a===25?"The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.":"The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire."
break A}w="The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong."
break A}return w},
$S:z+9}
B.fgq.prototype={
$2(d,e){return d==="ground"?y.j:"A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws."},
$S:z+9}
B.fgr.prototype={
$2(d,e){var w
if(e.e)w="Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you."
else A:{if("black"===d){w="The black (hot) wire goes on the BRASS LINE screw."
break A}if("white"===d){w="The white (neutral) wire goes on the SILVER LINE screw."
break A}w=y.j
break A}return w},
$S:z+9}
B.ffr.prototype={
$1(d){return d.a===this.a},
$S:z+38}
B.fCr.prototype={
$1(d){return d.a},
$S:z+59}
B.fdY.prototype={
$3(d,e,f){var w,v=this.a
v.b=d
w=B.a0X(f,0.9,6)
v.nr(w,0.2,D.abr,!1,0.35,10)
this.b.push(A.d.gak(w))},
$S:z+60}
B.fe_.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a
j.b=d
w=this.b
v=w.b
u=C.a2(v).k("cP<1,2>")
t=u.k("a3<G.E>")
s=C.B(new C.a3(new C.cP(v,u),new B.fe0(g),t),t.k("G.E"))
r=g==="ground"
q=r?D.zL:h
p=r?0.6:0.3
if(w.c>0){o=e.af(0,D.fne)
j.nr(B.fC6(C.a([e,e.af(0,D.fmr),o],x.o),4),0.085,q,!1,p,8)
return}if(s.length!==0){n=B.fM0(this.c,A.d.gK(s).a,w)
w=B.zh(e,n,0.5)
v=n.a>0
m=w.af(0,new B.aw(v?0.5:-0.5,0.2,0.9))
w=e.af(0,D.foz)
l=B.fC6(C.a([e,w,m,n.af(0,new B.aw(v?0.06:-0.06,0,0.08)),n],x.o),5)
k=A.d.dj(l,0,A.k.bv(l.length*0.8))
j.nr(k,0.085,q,!1,p,8)
if(!r)j.nr(A.d.fC(l,k.length-1),0.061200000000000004,D.zL,!1,0.6,8)}else{l=B.fC6(C.a([e,e.af(0,D.flt),B.zh(e,f,0.6),f],x.o),5)
k=r?l:A.d.dj(l,0,A.k.bv(l.length*0.86))
j.nr(k,0.085,q,!1,p,8)
if(!r)j.nr(A.d.fC(l,k.length-1),0.061200000000000004,D.zL,!1,0.6,8)}},
$S:z+61}
B.fe0.prototype={
$1(d){return d.b===this.a},
$S:1787}
B.fdZ.prototype={
$1(d){return A.a.a_(d,"black")},
$S:3}
B.f1L.prototype={
$5$taped(d,e,f,g,h){var w,v,u,t,s=this.a
s.e=0.9
s.b=d
w=this.b
v=w.a+e*0.75
u=w.b+f
w=w.c-0.45
t=g.A(0,D.K_)?D.b6S:D.b8p
s.h5(new B.aw(v,u,w),D.fkR,t,0.7)
s.lm(new B.aw(v,u,w),new B.aw(v+e*0.2,u,w),0.16,g,0.85,12)
s.xM(new B.aw(v+e*0.21,u,w),D.fmJ,D.U7)
if(h)s.h5(new B.aw(v+e*0.05,u,w),D.fo3,A.cr,0.2)},
$4(d,e,f,g){return this.$5$taped(d,e,f,g,!1)},
$S:1788}
B.fe6.prototype={
$4$alongX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=0;v<=f;++v){u=B.zh(d,e,v/f)
w.b6n(new B.aw(u.a,4,u.c),D.fpe,D.UF,!1,0.05)}t=B.zh(d,e,0.5)
for(s=e.aB(0,d).gSp()+0.15,r=t.a,q=t.c,p=0;p<2;++p){o=D.cTn[p]
n=g?new B.aw(s,0.16,0.3):new B.aw(0.3,0.16,s)
w.h5(new B.aw(r,o,q),n,D.UF,0.05)}},
$3(d,e,f){return this.$4$alongX(d,e,f,!0)},
$S:z+79}
B.fe3.prototype={
$2(d,e){return this.a.nr(B.a0X(d,0.35,3),0.06,e,!1,0.4,6)},
$S:z+83}
B.fe2.prototype={
$1(d){return this.a.nr(B.a0X(d,0.5,3),0.14,D.wo,!1,0.3,8)},
$S:z+115}
B.fe5.prototype={
$2$col(d,e){return this.a.nr(B.a0X(d,0.4,3),0.055,e,!1,0.35,6)},
$1(d){return this.$2$col(d,D.abr)},
$S:z+87}
B.fe4.prototype={
$5$h$w(d,e,f,g,h){var w=this.a
w.b=d
w.h5(e,new B.aw(h,g,0.06),f,0.3)},
$3(d,e,f){return this.$5$h$w(d,e,f,0.7,0.45)},
$S:z+90}
B.f37.prototype={
$0(){return B.zI(1320,120,0.25,"tri")},
$S:0}
B.c3y.prototype={
$1(d){return this.a},
$S:38}
B.c3z.prototype={
$0(){return C.a6(this.a,!1).mg()},
$S:0}
B.c3A.prototype={
$1(d){return d.b===this.a},
$S:z+113}
B.c3x.prototype={
$0(){return this.a.c_F(0,this.b,this.c.a)},
$S:0}
B.eTs.prototype={
$2(d,e){return!0},
$S:729}
B.eTt.prototype={
$1(d){return!0},
$S:54}
B.eOz.prototype={
$0(){return this.a.d.amf(0.8)},
$S:0}
B.eOA.prototype={
$0(){return this.a.d.amf(1.25)},
$S:0}
B.fc7.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=C.aI(d,o,x.m).w,m=this.b,l=this.c,k=l.length,j=x.p,i=C.a([C.d(this.a,o,o,o,o,o,o,A.dP,o,o,o),A.av,C.d(""+new C.a3(m,new B.fc6(),C.U(m).k("a3<1>")).gJ(0)+" of "+k+" steps done",o,o,o,o,o,o,D.eNx,o,o,o),A.S],j)
for(w=0;w<k;++w){v=A.c.j(0.05)
u=new C.aZ(14,14)
t=new C.az(m[w]?A.bf.j(0.6):A.bH,1,A.r,-1)
s=m[w]
r=s?"\u2705":""+(w+1)+"."
q=s?A.c:A.aR
p=l[w]
s=s?A.aA:A.c
i.push(C.p(o,new C.cx(A.aX,A.e,A.j,A.F,o,A.p,o,0,C.a([new C.x(r,o,new C.F(!0,q,o,o,o,o,14,A.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),A.aw,new C.bH(1,A.bo,new C.x(p,o,new C.F(!0,s,o,o,o,o,13,o,o,o,o,o,1.4,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o)],j),o),A.f,o,o,new C.o(v,o,new C.bY(t,t,t,t),new C.bv(u,u,u,u),o,o,A.n),o,o,o,A.cM,A.bm,o,o,o))}return C.bq(!0,new C.cZ(new C.aX(0,1/0,0,n.a.b*0.75),C.cL(i,o,A.c2,o,o,A.aj,!0),o),!0,!1,A.ah,!0,!0)},
$S:33}
B.fc6.prototype={
$1(d){return d},
$S:169}
B.dcu.prototype={
$0(){return C.a6(this.a,!1).mg()},
$S:0}
B.d_I.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c},
$S:0}
B.d_J.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.d_H(w))},
$S:0}
B.d_H.prototype={
$0(){return this.a.y=null},
$S:0}
B.d_B.prototype={
$0(){return this.a.x=0},
$S:0}
B.d_A.prototype={
$1(d){var w=this.a.e.b
return new C.bc(w,C.a2(w).k("bc<2>")).t(0,d)},
$S:3}
B.d_C.prototype={
$1(d){return d.a===this.a},
$S:z+24}
B.d_D.prototype={
$2(d,e){return e===this.a},
$S:727}
B.d_E.prototype={
$0(){var w=this.a
w.x3()
w.x=this.b},
$S:0}
B.d_F.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d_G.prototype={
$0(){var w=this.a,v=w.e,u=v.a
v.a=!u
if(u)v.d=!1
w.x3()},
$S:0}
B.d_K.prototype={
$0(){var w=this.a,v=w.e
v.d=v.a=!0
w.x3()},
$S:0}
B.d_S.prototype={
$1(d){return!d},
$S:169}
B.d01.prototype={
$0(){var w=this.a.gF8()
return B.fc5(this.b,w.b,w.d,this.c)},
$S:0}
B.d_T.prototype={
$0(){var w=this.a
return w.m(new B.d_R(w))},
$S:0}
B.d_R.prototype={
$0(){var w=this.a,v=w.e
v.e=!v.e
w.x3()},
$S:0}
B.d_U.prototype={
$0(){var w=this.a
return w.m(new B.d_Q(w))},
$S:0}
B.d_Q.prototype={
$0(){var w=this.a,v=w.e
v.f=!v.f
w.x3()},
$S:0}
B.d_V.prototype={
$0(){var w=this.a,v=w.gkA()
return v.wn(10,0.2,new B.aw(0.6,0,w.e.c===0?4.2:0.4),-0.95)},
$S:0}
B.d_W.prototype={
$0(){var w=this.a,v=w.gkA()
return v.wn(10,0.2,new B.aw(-0.6,0,w.e.c===0?4.2:0.4),0.95)},
$S:0}
B.d_X.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.e.b.ke(0,u)){w.oF("That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.")
return}w.m(new B.d_P(w,v))
if(w.w.length!==0){if(u==="ground")w.gkA().wn(8,0.55,D.fnB,0.15)
else if(u==="white")w.gkA().wn(8.5,0.2,D.foL,0.95)
else w.gkA().wn(8.5,0.2,D.flp,-0.95)
w.kd(v.b+": now tap the screw it belongs on.",!0)}},
$S:0}
B.d_P.prototype={
$0(){var w=this.a,v=this.b.a
return w.w=w.w===v?"":v},
$S:0}
B.d_Y.prototype={
$0(){var w=this.a
w.m(new B.d_O(w))
B.F6()
w.kd("The wires are folded back and the device is pushed into the box. Now put the cover plate on.",!0)
w.nD()},
$S:0}
B.d_O.prototype={
$0(){var w=this.a
w.e.c=1
w.x3()},
$S:0}
B.d_Z.prototype={
$0(){var w=this.a
w.m(new B.d_N(w))
w.nD()},
$S:0}
B.d_N.prototype={
$0(){var w=this.a
w.e.c=0
w.x3()},
$S:0}
B.d0_.prototype={
$0(){var w=this.a
w.m(new B.d_M(w))
B.F6()
w.kd("Cover plate on. Now turn the power on and test.",!0)},
$S:0}
B.d_M.prototype={
$0(){var w=this.a
w.e.c=2
w.x3()},
$S:0}
B.d00.prototype={
$0(){var w=this.a
w.m(new B.d_L(w))
w.nD()},
$S:0}
B.d_L.prototype={
$0(){var w=this.a,v=w.e
v.c=0
v.b.a7(0)
v.a=!0
v.d=!1
w.Q=0
w.w=""
w.x=0
w.x3()},
$S:0}
B.eEu.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
B.eEv.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.eEt(w))},
$S:0}
B.eEt.prototype={
$0(){return this.a.x=null},
$S:0}
B.eEn.prototype={
$0(){return this.a.w=0},
$S:0}
B.eEo.prototype={
$0(){var w=this.a,v=w.d
v.a.L(0,this.b)
v.c=!1
v.d=""
w.f=B.aMw(v)
w.r=""},
$S:0}
B.eEp.prototype={
$0(){var w=this.a,v=w.d
v.b.n(0,this.b,!0)
v.d=""
w.f=B.aMw(v)},
$S:0}
B.eEq.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eEr.prototype={
$1(d){return this.a.d.b.h(0,d)!==!0},
$S:3}
B.eEs.prototype={
$0(){var w,v=this.a,u=v.d
u.c=!0
w=this.b
u.d=w.length===0?"":A.d.gK(w)
v.f=B.aMw(u)},
$S:0}
B.eEz.prototype={
$1(d){return!d},
$S:169}
B.eED.prototype={
$0(){return B.fc5(this.a,"Sink drain (P-trap)",D.cVL,this.b)},
$S:0}
B.eEA.prototype={
$1(d){return B.hUj(this.a.d,d)},
$S:z+10}
B.eEB.prototype={
$0(){var w=this.a
return w.m(new B.eEy(w,this.b))},
$S:0}
B.eEy.prototype={
$0(){var w=this.a,v=this.b
return w.r=w.r===v?"":v},
$S:0}
B.eEC.prototype={
$0(){var w=this.a
w.m(new B.eEx(w))
w.nD()},
$S:0}
B.eEx.prototype={
$0(){var w,v=this.a,u=v.d
u.a.a7(0)
w=u.b
w.am3(w,new B.eEw())
u.c=!1
v.r=u.d=""
v.w=0
v.f=B.aMw(u)},
$S:0}
B.eEw.prototype={
$2(d,e){return!1},
$S:729}
B.d2C.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
B.d2D.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.d2B(w))},
$S:0}
B.d2B.prototype={
$0(){return this.a.x=null},
$S:0}
B.d2u.prototype={
$0(){return this.a.w=0},
$S:0}
B.d2x.prototype={
$1(d){return d.a===this.a},
$S:z+18}
B.d2y.prototype={
$0(){var w=this.a,v=w.d
v.f=!1
w.f=B.aeq(v)
w.w=this.b},
$S:0}
B.d2z.prototype={
$0(){var w=this.a,v=w.d,u=v.e
u.bm(u,new B.d2w(this.b))
v.f=!1
w.f=B.aeq(v)},
$S:0}
B.d2w.prototype={
$2(d,e){return e===this.a},
$S:727}
B.d2A.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d2v.prototype={
$0(){var w=this.a,v=w.d
v.f=!v.f
w.f=B.aeq(v)},
$S:0}
B.d2H.prototype={
$1(d){return!d},
$S:169}
B.d2N.prototype={
$0(){return B.fc5(this.a,"Faucet supply lines",D.d5t,this.b)},
$S:0}
B.d2I.prototype={
$1(d){return B.hLi(this.a.d,d)},
$S:z+10}
B.d2J.prototype={
$0(){var w=this.a
return w.m(new B.d2G(w))},
$S:0}
B.d2G.prototype={
$0(){var w=this.a,v=w.d
v.r=!v.r
w.f=B.aeq(v)},
$S:0}
B.d2L.prototype={
$0(){var w=this.b
return w.m(new B.d2F(this.a,w))},
$S:0}
B.d2F.prototype={
$0(){var w=this.b,v=w.r,u=this.a.a
return w.r=v===u?"":u},
$S:0}
B.d2K.prototype={
$1(d){return d===this.a.a},
$S:3}
B.d2M.prototype={
$0(){var w=this.a
w.m(new B.d2E(w))
w.nD()},
$S:0}
B.d2E.prototype={
$0(){var w=this.a,v=w.d
v.e.a7(0)
v.f=!1
w.r=""
w.w=0
w.f=B.aeq(v)},
$S:0}
B.d9G.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
B.d9H.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.d9F(w))},
$S:0}
B.d9F.prototype={
$0(){return this.a.x=null},
$S:0}
B.d9A.prototype={
$0(){return this.a.r=0},
$S:0}
B.d9C.prototype={
$0(){var w=this.a,v=w.d
v.b=!1
w.f=B.byi(v)
w.r=this.b},
$S:0}
B.d9D.prototype={
$0(){var w=this.a,v=w.d
v.d=!0
v.c=!1
w.f=B.byi(v)
w.r=this.b},
$S:0}
B.d9E.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.d9B.prototype={
$1(d){return this.a},
$S:38}
B.d9P.prototype={
$0(){return B.fc5(this.a,"Fix the house",D.c6w,this.b)},
$S:0}
B.d9K.prototype={
$0(){return this.a.c76(this.b)},
$S:0}
B.d9M.prototype={
$1(d){return d<=this.a.d.a},
$S:54}
B.d9L.prototype={
$1(d){return B.hLL(this.a.d,d)},
$S:z+10}
B.d9N.prototype={
$0(){var w=this.a
return w.m(new B.d9J(w))},
$S:0}
B.d9J.prototype={
$0(){var w=this.a
return w.w=w.w==="wrench"?"":"wrench"},
$S:0}
B.d9O.prototype={
$1(d){var w=this.a
return w.m(new B.d9I(w,d))},
$S:6}
B.d9I.prototype={
$0(){var w=this.a,v=w.d,u=A.k.U(this.b)
v.a=u
if(u<5)w.r=0
w.f=B.byi(v)},
$S:0}
B.fev.prototype={
$5(d,e,f,g,h){var w=this.a.a.t(0,h),v=this.b
v.b=d
if(w)v.aFm(e,0.66,f,!1,!0,!0,g,14)
else{v.d=0.3
v.bea(e,0.74,A.ba,!1,!0,0,8)
v.d=1}},
$S:z+27}
B.feu.prototype={
$6(d,e,f,g,h,i){var w,v
if(!i)return
w=this.a.b.h(0,e)
v=w===!0?f:f.af(0,h)
w=this.b
w.e=0.5
w.b=d
w.lm(v.aB(0,g.aJ(0,0.6)),v.af(0,g.aJ(0,0.6)),1.12,D.wo,0.35,8)
w.Lb(v.aB(0,g.aJ(0,0.62)),v.aB(0,g.aJ(0,0.5)),1.2,0.5,D.aa3,0.2,8)
w.b=0
w.Lb(f.aB(0,g.aJ(0,0.05)),f.af(0,g.aJ(0,0.08)),0.82,0.55,D.bb4,0.1,12)
w.e=0},
$S:z+28}
B.fet.prototype={
$1(d){return d.b<-0.6},
$S:z+29}
B.fe1.prototype={
$1(d){return this.a.e.h(0,d)===this.b},
$S:54}
B.ffJ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=B.aeC(d)
for(w=this.a*1.6,v=this.b,u=p.a,t=p.b,s=p.c,r=0;r<7;++r){q=A.k.G(w+r/7,1)
v.pS(new B.aw(u+Math.sin(r*2.1)*q*1.4,t+(q*2.4-q*q*6.5),s+(1+q*2.5)),0.2,e,3,6,0.9)}},
$S:1791}
B.ffI.prototype={
$1(d){return this.a.e.h(0,d.a)!=null},
$S:z+18}
B.f40.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)&&w.h(d,1)},
$S:210}
B.f41.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)||w.h(d,1)},
$S:210}
B.f42.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)!==w.h(d,1)},
$S:210}
B.f49.prototype={
$1(d){return!J.q(d,0)},
$S:210}
B.f4a.prototype={
$1(d){var w=J.a8(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:210}
B.f4b.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:210}
B.dCi.prototype={
$1(d){return this.a.aqA(0)},
$S:8}
B.dBX.prototype={
$0(){var w=this.b
return this.a.cx=new C.J(w,C.hKB(),C.U(w).k("J<1,H>")).fA(0)},
$S:0}
B.dC_.prototype={
$1(d){return""+d},
$S:81}
B.dCj.prototype={
$1(d){return d.b==="buzzer"},
$S:z+11}
B.dBV.prototype={
$1(d){return this.a.aqA(this.b)},
$S:8}
B.dBW.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.aua(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.m6(0,d,a1.lA(0.15,0.3))
u=a1.m6(0,d,a1.lA(0.15,0.62))
t=a1.m6(0,"and",a1.lA(0.48,0.46))
s=a1.m6(0,a0,a1.lA(0.82,0.46))
a1=t.a
w.push(new B.n2(v.a,a1,0))
w.push(new B.n2(u.a,a1,1))
w.push(new B.n2(a1,s.a,0))
break
case 1:v=a1.m6(0,d,a1.lA(0.12,0.25))
u=a1.m6(0,d,a1.lA(0.12,0.65))
r=a1.m6(0,"xor",a1.lA(0.46,0.25))
q=a1.m6(0,"and",a1.lA(0.46,0.65))
p=a1.au9(0,a0,a1.lA(0.82,0.25),0)
o=a1.au9(0,a0,a1.lA(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new B.n2(a1,n,0))
m=u.a
w.push(new B.n2(m,n,1))
l=q.a
w.push(new B.n2(a1,l,0))
w.push(new B.n2(m,l,1))
w.push(new B.n2(n,p.a,0))
w.push(new B.n2(l,o.a,0))
break
case 2:k=a1.m6(0,"clock",a1.lA(0.15,0.4))
j=a1.m6(0,"not",a1.lA(0.45,0.65))
s=a1.m6(0,a0,a1.lA(0.82,0.3))
i=a1.m6(0,"buzzer",a1.lA(0.82,0.65))
a1=k.a
w.push(new B.n2(a1,s.a,0))
n=j.a
w.push(new B.n2(a1,n,0))
w.push(new B.n2(n,i.a,0))
break
default:h=a1.m6(0,d,a1.lA(0.12,0.25))
g=a1.m6(0,d,a1.lA(0.12,0.7))
f=a1.m6(0,"nor",a1.lA(0.5,0.25))
e=a1.m6(0,"nor",a1.lA(0.5,0.7))
s=a1.m6(0,a0,a1.lA(0.86,0.25))
a1=f.a
w.push(new B.n2(g.a,a1,0))
n=e.a
w.push(new B.n2(n,a1,1))
w.push(new B.n2(h.a,n,0))
w.push(new B.n2(a1,n,1))
w.push(new B.n2(a1,s.a,0))}},
$S:0}
B.dC0.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.aua(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new B.Bq(p,"switch",new C.u(0.14*q.a,r*q.b),0))}o.m6(0,w.e,o.lA(0.86,0.5))},
$S:0}
B.dBQ.prototype={
$1(d){return d.b==="switch"},
$S:z+11}
B.dBR.prototype={
$2(d,e){return A.k.aK(d.c.b,e.c.b)},
$S:z+31}
B.dBS.prototype={
$1(d){return d.b===this.a.e},
$S:z+11}
B.dBT.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
B.dBU.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.aaG(this.c)
if(v.ax)B.AQ("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gK(w)
v.CW=!1
if(v.ax)B.dD(140,"",250,0,0.3,"square")}},
$S:0}
B.dC1.prototype={
$0(){},
$S:0}
B.dC2.prototype={
$0(){return A.d.cv(this.a.e,this.b)},
$S:0}
B.dC3.prototype={
$0(){return this.a.cy=null},
$S:0}
B.dBZ.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bm(w.e,new B.dBY(v))
w.cy=null},
$S:0}
B.dBY.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+19}
B.dBP.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.m6(0,this.b,new C.u(w.x.a*(0.3+v.ag()*0.4),w.x.b*(0.2+v.ag()*0.6))).a},
$S:0}
B.dCc.prototype={
$0(){var w=this.a
return w.m(new B.dCb(w))},
$S:0}
B.dCb.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.dCd.prototype={
$2(d,e){var w=null,v=this.a,u=new C.as(e.b,e.d)
v.x=u
return C.aH(A.c5,C.jo(C.b3(w,w,w,new B.b8t(v,w),u),A.q,w),A.z,!1,w,w,w,w,w,w,w,w,new B.dC6(v),w,w,w,new B.dC7(v),new B.dC8(v),new B.dC9(v),w,w,w,w,w,w,w,w,w,w,new B.dCa(v),w,w,w,!1,A.ac)},
$S:34}
B.dCa.prototype={
$1(d){return this.a.c_M(d.b)},
$S:48}
B.dC8.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.c87(u)
if(t!=null){v.as=t
v.at=u
return}w=v.auW(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aB(0,u)}},
$S:40}
B.dC9.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.u(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
B.dC7.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bT6(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bm(v,new B.dC4(w))
u=t.as
u.toString
v.push(new B.n2(u,w.a,w.b))
C.jI()}}t.z=t.as=null},
$S:35}
B.dC4.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+19}
B.dC6.prototype={
$1(d){return this.a.at7(d.b)},
$S:298}
B.dCe.prototype={
$0(){return this.a.buJ(this.b.a)},
$S:0}
B.dCf.prototype={
$0(){return this.a.aqA(this.b.a)},
$S:0}
B.dCg.prototype={
$0(){var w=this.a
return w.m(new B.dC5(w))},
$S:0}
B.dC5.prototype={
$0(){var w=this.a
w.aua(0)
w.ay=null},
$S:0}
B.dCh.prototype={
$0(){return this.a.coL(this.b)},
$S:0}
B.cHv.prototype={
$0(){var w=this,v=null,u=C.ig(v,v,v,v,C.dn(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.ci,v,A.eq,A.cg)
u.eP()
return u},
$S:293}
B.dHv.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dHu.prototype={
$0(){return this.a.d=null},
$S:0}
B.dHx.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.bUS()},
$S:121}
B.dHw.prototype={
$0(){return C.a6(this.a,!1).mg()},
$S:0}
B.f4r.prototype={
$0(){return D.dLQ},
$S:z+34}
B.f4s.prototype={
$0(){return D.dk_},
$S:z+35}
B.f4t.prototype={
$0(){return D.aBa},
$S:z+36}
B.f4E.prototype={
$0(){return D.dgT},
$S:z+37}
B.f4H.prototype={
$0(){return D.dLf},
$S:z+22}
B.f4I.prototype={
$0(){return D.dqn},
$S:z+39}
B.f4J.prototype={
$0(){return D.djW},
$S:z+40}
B.f4K.prototype={
$0(){return D.djZ},
$S:z+41}
B.f4L.prototype={
$0(){return D.dd3},
$S:z+42}
B.f4M.prototype={
$0(){return D.dmt},
$S:z+43}
B.f4N.prototype={
$0(){return D.do5},
$S:z+44}
B.f4u.prototype={
$0(){return D.do7},
$S:z+45}
B.f4v.prototype={
$0(){return D.dj7},
$S:z+46}
B.f4w.prototype={
$0(){return D.dt6},
$S:z+47}
B.f4x.prototype={
$0(){return D.dKX},
$S:z+48}
B.f4y.prototype={
$0(){return D.dJ_},
$S:z+49}
B.f4z.prototype={
$0(){return D.drM},
$S:z+50}
B.f4A.prototype={
$0(){return D.dL4},
$S:z+51}
B.f4B.prototype={
$0(){return D.dj6},
$S:z+52}
B.f4C.prototype={
$0(){return D.dLe},
$S:z+53}
B.f4D.prototype={
$0(){return D.dj8},
$S:z+54}
B.f4F.prototype={
$0(){return D.don},
$S:z+55}
B.f4G.prototype={
$0(){return D.drL},
$S:z+56}
B.eLQ.prototype={
$2(d,e){return new B.ad5($.bBb()[e],new B.eLP(e,this.a),null)},
$S:z+57}
B.eLP.prototype={
$0(){var w=this.a,v=D.azZ.h(0,$.bBb()[w].a)
$.apL=v==null?"music":v
C.a6(this.b,!1).ck(C.eu(new B.eLN(w),!1,null,x.H))},
$S:0}
B.eLN.prototype={
$1(d){return $.bBb()[this.a].e.$0()},
$S:38}
B.eLR.prototype={
$2(d,e){return new B.ac_(D.asT[e],new B.eLO(this.a,e),null)},
$S:z+58}
B.eLO.prototype={
$0(){return this.a.d.$1(D.asT[this.b])},
$S:0}
B.eLw.prototype={
$0(){return this.a.as=!0},
$S:0}
B.eLv.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eLu.prototype={
$1(d){var w=this
return new C.e7(new B.eLt(w.a,w.b,w.c,w.d),null)},
$S:21}
B.eLt.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aI(a2,d,a0).w
a0=C.aI(a2,d,a0).w
w=x.p
v=C.a([D.f0r,A.av,D.f6v,A.aa],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.aZ(12,12)
m=new C.aZ(12,12)
m=C.a([new C.bH(1,A.bo,C.aL(d,A.U,!1,d,!0,A.q,d,C.aM(),r[p],d,d,d,d,d,2,new C.dZ(d,d,d,d,d,d,d,d,d,d,"Title",d,G.Co,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bv(n,n,n,n),A.Z),!0,d,d,d,d),A.z,!0,d,!0,d,!1,d,A.ag,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,A.iC,!0,A.a5,d,A.am,d,d,d,d),d),A.ab,new C.bH(2,A.bo,C.aL(d,A.U,!1,d,!0,A.q,d,C.aM(),q[p],d,d,d,d,d,2,new C.dZ(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.Co,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bv(m,m,m,m),A.Z),!0,d,d,d,d),A.z,!0,d,!0,d,!1,d,A.ag,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,A.iC,!0,A.a5,d,A.am,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.d4s[l]
j=new C.aZ(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.B(t.a.c.d,s)
t.w=i}h=A.d.gK(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.B(t.a.c.d,s)
t.w=i}g=A.d.gK(i)}else g=A.bH
f=new C.az(g,u[p].A(0,k)?1.8:1,A.r,-1)
n.push(C.aH(d,C.p(d,C.W(k,u[p].A(0,k)?A.c:A.aP,d,d,d,22),A.f,d,d,new C.o(h,d,new C.bY(f,f,f,f),new C.bv(j,j,j,j),d,d,A.n),d,d,d,A.fM,d,d,d,42),A.z,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new B.eLr(a3,p,u,k),d,d,d,d,d,d,!1,A.ac))}A.d.v(v,C.a([new C.x("SLAB "+o,d,D.eRF,d,d,d,d,d,d,d,d,d),A.aq,new C.cx(A.aX,A.e,A.j,A.m,d,A.p,d,0,m,d),A.P,new C.a4(d,44,C.cL(n,d,d,d,d,A.aX,!1),d),A.ay],w))}v.push(C.bM(A.yN,new B.eLs(t,r,q,u,a2),d))
return new C.C(new C.N(0,0,0,a1.f.d),C.bq(!0,new C.cZ(new C.aX(0,1/0,0,a0.a.b*0.86),C.cL(v,d,Z.Ac,d,d,A.aj,!0),d),!0,!1,A.ah,!0,!0),d)},
$S:106}
B.eLr.prototype={
$0(){var w=this
return w.a.$1(new B.eLq(w.b,w.c,w.d))},
$S:0}
B.eLq.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
B.eLs.prototype={
$0(){var w=this,v=w.a
v.m(new B.eLp(v,w.b,w.c,w.d))
C.a6(w.e,!1).M(null)},
$S:0}
B.eLp.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this
for(w=m.d,v=m.c,u=m.a,t=m.b,s=x.N,r=x.Z,q=0;q<3;++q){p=u.y
if(p===$){p=C.B(u.a.c.f,s)
u.y=p
o=p}else o=p
n=A.a.i(t[q].a.a)
if(n.length===0)n=o[q]
p[q]=n
p=u.z
if(p===$){p=C.B(u.a.c.r,s)
u.z=p}p[q]=A.a.i(v[q].a.a)
p=u.x
if(p===$){p=C.B(u.a.c.e,r)
u.x=p}p[q]=w[q]}},
$S:0}
B.eLE.prototype={
$0(){var w=this.a
return w.m(new B.eLD(w))},
$S:0}
B.eLD.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eLF.prototype={
$0(){return B.qt(this.b,this.a.f,"scene")},
$S:0}
B.eLG.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.ar(A.d.gK(u),A.d.gak(u),0.4)
u.toString
w=this.a.gXP().x
w===$&&C.c()
return C.bW(v,new C.o(v,v,v,v,v,new C.bS(D.aQL,0.9,A.x,v,0,C.a([u.j(0.06+0.03*w),A.bW],x.O),v,v),A.n),A.bc)},
$S:318}
B.eLH.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.au(C.f1(A.A,C.c5(new C.h1(C.a([u.gtk(),u.gXP()],x.dS)),new B.eLC(u,this.b,v),w),A.f,A.ec),w,w,w)},
$S:261}
B.eLC.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gtk().x
r===$&&C.c()
w=r<0.9?1:1-B.boa(r,0.9,0.98)
v=s.gXP().x
v===$&&C.c()
u=A.dH.au(0,v)
switch(s.gaub().a){case 0:s=s.btX(t.b,r,u,t.c)
break
case 1:s=s.bJU(t.b,r,u,t.c)
break
case 2:s=s.cti(t.b,r,u,t.c)
break
case 3:s=s.bwP(t.b,r,u,t.c)
break
case 4:s=s.bzW(t.b,r,u,t.c)
break
case 5:s=s.bz9(t.b,r,u,t.c)
break
default:s=null}return C.db(s,w)},
$S:207}
B.eLI.prototype={
$2(d,e){var w=C.at9(this.b),v=this.c.d,u=C.ar(A.d.gK(v),A.d.gak(v),0.4)
u.toString
v=C.ar(A.d.gK(v),A.d.gak(v),0.4)
v.toString
v=w.cBq(u,A.bH,v,3.5)
u=this.a
w=u.gtk().x
w===$&&C.c()
return C.a8m(C.kP(null,null,null,1,0,new B.eLB(u),A.k.D(w,0,1)),v)},
$S:1794}
B.eLB.prototype={
$1(d){var w=this.a
w.gtk().sp(0,d)
if(w.as)w.m(new B.eLx(w))},
$S:6}
B.eLx.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eLJ.prototype={
$0(){var w=this.a
w.gtk().sp(0,0)
w.adZ()},
$S:0}
B.eLK.prototype={
$1(d){var w=this.a
w.m(new B.eLA(w,d))
if(w.as)w.adZ()},
$S:6}
B.eLA.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eLL.prototype={
$0(){var w=this.a
w.m(new B.eLz(w,this.b))
w.gtk().sp(0,0)
if(w.as)w.adZ()},
$S:0}
B.eLz.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eLM.prototype={
$0(){var w=this.a
return w.m(new B.eLy(w,this.b))},
$S:0}
B.eLy.prototype={
$0(){var w=C.B(this.b,x.G)
return this.a.w=w},
$S:0}
B.eLn.prototype={
$2(d,e){return A.k.aK(d.a,e.a)},
$S:1795}
B.eLo.prototype={
$1(d){return d.b},
$S:1796}
B.dc2.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
B.dc3.prototype={
$1(d){return d.b===this.a},
$S:z+12}
B.dc_.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
B.dc0.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dc1.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dc4.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+12}
B.dc5.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+12}
B.dc6.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dc7.prototype={
$1(d){return d.d<this.a.ax},
$S:z+62}
B.dc8.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+63}
B.dc9.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+64}
B.dca.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+65}
B.dcb.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+66}
B.dcc.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+67}
B.ecH.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.ecw.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.ecy.prototype={
$2(d,e){return d+e.d*7+A.o.G(A.a.gV(e.b),97)},
$S:z+68}
B.ecz.prototype={
$2(d,e){return d+A.o.G(A.a.gV(e.a),31)+A.o.G(A.a.gV(e.b),17)},
$S:z+69}
B.ecC.prototype={
$1(d){var w=D.mh.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.G(d.d,u)]+")":t},
$S:z+70}
B.ecD.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.U(q),o=x.dg,n=C.B(new C.e4(new C.cW(new C.a3(q,new B.ecE(d),p.k("a3<1>")),new B.ecF(r),p.k("cW<1,ql?>")),o),o.k("G.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aH(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.K)(n),++v){u=n[v]
if(w.length>=6)return
t=C.B(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+71}
B.ecE.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.ecF.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+72}
B.ecA.prototype={
$1(d){return D.mh.h(0,d.b).c===D.vS},
$S:z+73}
B.ecB.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.ed6.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.a5M(0,u)
w.aFb(A.o.am(v,1000))},
$S:8}
B.ecG.prototype={
$0(){},
$S:0}
B.ecs.prototype={
$0(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ay(),$async$$0)
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
B.ecJ.prototype={
$1(d){var w=null,v=this.a.b
return C.bq(!0,C.v(C.a([A.P,C.dM(!1,w,w,w,!0,w,w,w,!0,w,C.W(D.mh.h(0,v).b,D.mh.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fgT,w,C.d(D.mh.h(0,v).a,w,w,w,w,w,w,A.hj,w,w,w),w,w,w),C.dM(!1,w,w,w,!0,w,w,w,!0,w,S.ajS,w,w,w,w,new B.ecI(d),!1,w,w,w,w,w,w,w,D.f98,w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ah,!0,!0)},
$S:33}
B.ecI.prototype={
$0(){C.a6(this.a,!1).M(!0)
return null},
$S:0}
B.ecL.prototype={
$1(d){var w,v,u=null,t=C.aI(d,u,x.m).w,s=C.a([D.dUI],x.p)
for(w=0;w<6;++w){v=D.atc[w]
s.push(C.dM(!1,u,u,u,!0,u,u,u,!0,u,D.bGW,u,u,u,u,new B.ecK(d,v),!1,u,u,u,u,u,new C.x(v.b,u,A.lg,u,u,u,u,u,u,u,u,u),u,new C.x(v.a,u,A.hj,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bq(!0,new C.cZ(new C.aX(0,1/0,0,t.a.b*0.7),C.cL(s,u,D.boi,u,u,A.aj,!0),u),!0,!1,A.ah,!0,!0)},
$S:33}
B.ecK.prototype={
$0(){C.a6(this.a,!1).M(this.b)
return null},
$S:0}
B.ecv.prototype={
$1(d){var w=null
return C.eq(C.a([C.bJ(!1,A.dd,w,w,!0,w,w,new B.ect(d),w,w),C.bJ(!1,A.Cs,w,w,!0,w,w,new B.ecu(d),w,w)],x.p),w,w,D.rH,D.f6G,w,w,w,w,D.f9p,w)},
$S:19}
B.ect.prototype={
$0(){C.a6(this.a,!1).M(!1)
return null},
$S:0}
B.ecu.prototype={
$0(){C.a6(this.a,!1).M(!0)
return null},
$S:0}
B.ed4.prototype={
$0(){var w=this.a
return w.m(new B.ed3(w))},
$S:0}
B.ed3.prototype={
$0(){return this.a.r=!1},
$S:0}
B.ed5.prototype={
$2(d,e){var w,v,u,t=null,s=new C.as(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.m_(new B.ecV(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b_4:t
v=C.a([C.b3(u,t,t,new B.bef(w,v,new B.ecW(r),new B.ecX(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.an(t,C.e3(C.c5(w,new B.ecY(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bBA())
return C.aH(A.c5,C.jo(new C.am(A.X,t,A.b_,A.q,v,t),A.q,t),A.z,!1,t,t,t,t,t,t,t,t,new B.ecZ(r),t,r.gc9n(),t,new B.ed_(r),new B.ed0(r),new B.ed1(r),t,t,t,t,t,t,t,t,t,t,new B.ed2(r),t,t,t,!1,A.ac)},
$S:34}
B.ecV.prototype={
$0(){return this.a.a9N(this.b)},
$S:0}
B.ed2.prototype={
$1(d){return this.a.cr7(d.b)},
$S:48}
B.ed0.prototype={
$1(d){return this.a.c9o(d.b)},
$S:40}
B.ed1.prototype={
$1(d){return this.a.c9p(d.b)},
$S:18}
B.ed_.prototype={
$1(d){return this.a.aXI()},
$S:35}
B.ecZ.prototype={
$1(d){return this.a.aas(d.b)},
$S:298}
B.ecW.prototype={
$0(){return this.a.z},
$S:632}
B.ecX.prototype={
$0(){return this.a.Q},
$S:715}
B.ecY.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bFP()
if(p.length===0)return A.bG
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bH,A.r,1)
t=C.a([D.f4j,A.d5],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.K)(p),++r)t.push(new C.x(p[r],q,D.eQs,q,q,q,q,A.a2,q,2,q,q))
return C.p(q,C.v(t,A.F,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h2,q,q,q)},
$S:59}
B.ecx.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.m(12),t=C.I(e.j(0.6),A.r,1),s=x.p
return new C.C(A.e3,C.A(C.a([C.p(w,C.W(d,e,w,w,w,21),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.be,C.D(C.v(C.a([C.d(f,w,w,w,w,w,w,A_.RK,w,w,w),A.bB,C.d(g,w,w,w,w,w,w,D.a5n,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1798}
B.ecR.prototype={
$0(){var w=this.a.c
w.toString
return C.a6(w,!1).mg()},
$S:0}
B.ecS.prototype={
$0(){var w=this.a
return w.m(new B.ecQ(w))},
$S:0}
B.ecQ.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.ecT.prototype={
$0(){var w=this.a
return w.m(new B.ecP(w))},
$S:0}
B.ecP.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
B.ecU.prototype={
$0(){var w=this.a
return w.m(new B.ecO(w))},
$S:0}
B.ecO.prototype={
$0(){return this.a.r=!0},
$S:0}
B.ecN.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.mh.gdL(D.mh),w=w.gai(w);w.C();){v=w.gT(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.K)(p),++r)u.push(s.cmc(p[r]))
return new C.C(E.adB,C.v(C.a([new C.C(O.afd,w,q),C.A(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+74}
B.ecM.prototype={
$0(){return this.a.c_R(this.b)},
$S:0}
B.dbZ.prototype={
$0(){var w=this,v=null,u=C.ig(v,v,v,v,C.dn(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.ci,v,A.eq,A.cg)
u.eP()
return u},
$S:293}
B.emS.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.am(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.u(s.a+q*n,s.b+r*n)
t.b=new C.u(q*v,r*v)}A.d.bm(o,new B.emQ(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new B.emR())},
$S:8}
B.emQ.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+75}
B.emR.prototype={
$0(){},
$S:0}
B.emt.prototype={
$0(){},
$S:0}
B.ems.prototype={
$0(){},
$S:0}
B.emC.prototype={
$0(){return B.qt(this.b,this.a.d,"spark-painter")},
$S:0}
B.emE.prototype={
$1(d){return this.a.aV5(0,d.b)},
$S:40}
B.emI.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gak(w).aB(0,u).gcj()>2.5}else w=!1
if(w)t.a.push(u)
v.aOx(u)
v.c2R(u)
return null},
$S:18}
B.emD.prototype={
$1(d){return this.a.aV4()},
$S:35}
B.emJ.prototype={
$1(d){return this.a.aV5(0,d.b)},
$S:23}
B.emK.prototype={
$1(d){return this.a.aV4()},
$S:48}
B.emL.prototype={
$0(){var w=this.a
return w.m(new B.emB(w,this.b))},
$S:0}
B.emB.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.emM.prototype={
$0(){var w=this.a
return w.m(new B.emA(w))},
$S:0}
B.emA.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.emN.prototype={
$0(){var w=this.a
return w.m(new B.emz(w,this.b))},
$S:0}
B.emz.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.emO.prototype={
$1(d){var w=this.a
return w.m(new B.emy(w,d))},
$S:6}
B.emy.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.emP.prototype={
$0(){var w=this.a
return w.m(new B.emx(w))},
$S:0}
B.emx.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.emF.prototype={
$0(){var w=this.a
return w.m(new B.emw(w))},
$S:0}
B.emw.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.emG.prototype={
$0(){var w=this.a
return w.m(new B.emv(w))},
$S:0}
B.emv.prototype={
$0(){var w=this.a
A.d.a7(w.e)
A.d.a7(w.f)},
$S:0}
B.emH.prototype={
$0(){var w=this.a
return w.m(new B.emu(w,this.b))},
$S:0}
B.emu.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.etr.prototype={
$0(){return B.qt(this.b,this.a.d,"title")},
$S:0}
B.ets.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gHN().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.bV0(v[t],t,s,q,u))
return new C.C(A.fv,C.c6(A.fI,w,A.ra,0,0),null)},
$S:728}
B.ett.prototype={
$1(d){return this.a.m(new B.etq())},
$S:2}
B.etq.prototype={
$0(){},
$S:0}
B.etu.prototype={
$0(){var w=this.a
w.m(new B.etp(w,this.b))
w=w.gHN()
w.ih(0,0)
w.cE(0)},
$S:0}
B.etp.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.etv.prototype={
$0(){var w=this.a
return w.m(new B.eto(w,this.b))},
$S:0}
B.eto.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.etw.prototype={
$0(){var w=this.a
return w.m(new B.etn(w))},
$S:0}
B.etn.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.etx.prototype={
$0(){var w=this.a
return w.m(new B.etm(w,this.b))},
$S:0}
B.etm.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ety.prototype={
$0(){var w=this.a.gHN()
w.ih(0,0)
w.cE(0)},
$S:0}
B.etz.prototype={
$1(d){var w=this.a
return w.m(new B.etl(w,d))},
$S:6}
B.etl.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.e9H.prototype={
$1(d){return d.a.aB(0,this.a).gcj()<16},
$S:z+17}
B.e9I.prototype={
$1(d){var w=this.b
return d.a.aB(0,w).gcj()<16||d.a.aB(0,w).gcj()>this.a.r.gakg()*2.2},
$S:z+17}
B.e9v.prototype={
$0(){return B.qt(this.b,this.a.d,"orbits")},
$S:0}
B.e9w.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.as(e.b,e.d)
q.r=p
w=q.gabC()
v=q.w
u=q.as
t=q.at
s=u==null?A.a0g:q.ccY(u,q.gaSF())
return new C.en(C.aH(A.c5,C.b3(r,r,r,new B.bix(q.e,w,v,u,t,s,r),p),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,new B.e9s(q),new B.e9t(q),new B.e9u(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.ac),q.d)},
$S:181}
B.e9t.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:40}
B.e9u.prototype={
$1(d){return this.a.at=d.b},
$S:18}
B.e9s.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aB(0,w).gcj()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new B.Ze(u,v.gaSF(),v.Q,v.aZ9(),C.a([],x.g)))
C.jI()
if(v.ax)B.dD(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:35}
B.e9x.prototype={
$1(d){var w=this.a
return w.m(new B.e9r(w,d))},
$S:6}
B.e9r.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.e9z.prototype={
$1(d){var w=this.a
return w.m(new B.e9q(w,d))},
$S:6}
B.e9q.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.e9A.prototype={
$1(d){var w=this.a
return w.m(new B.e9p(w,d))},
$S:6}
B.e9p.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.e9B.prototype={
$0(){var w=this.a
return w.m(new B.e9o(w))},
$S:0}
B.e9o.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.e9C.prototype={
$0(){var w=this.a
return w.m(new B.e9n(w))},
$S:0}
B.e9n.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.e9D.prototype={
$0(){var w=this.a
return w.m(new B.e9m(w))},
$S:0}
B.e9m.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.e9E.prototype={
$0(){var w=this.a
return w.m(w.gcor())},
$S:0}
B.e9F.prototype={
$0(){var w=this.a
return w.m(w.gbBO())},
$S:0}
B.e9G.prototype={
$0(){var w=this.a
return w.m(new B.e9l(w))},
$S:0}
B.e9l.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.ag()
s=w.r
w.aoU(50+t*(Math.min(s.a,s.b)/2-70),v.ag()*3.141592653589793*2,0.7+v.ag()*0.5,v.hf())}},
$S:0}
B.e9y.prototype={
$0(){var w=this.a
return w.m(A.d.gqZ(w.e))},
$S:0}
B.esT.prototype={
$1(d){return this.a.fH$-d.b>6000},
$S:688}
B.esU.prototype={
$1(d){var w=this.a.e
return new C.a3(w,new B.esS(d),C.U(w).k("a3<1>")).gJ(0)>=3},
$S:688}
B.esS.prototype={
$1(d){return d.a.aB(0,this.a.a).gcj()<14},
$S:z+77}
B.esI.prototype={
$0(){return B.qt(this.b,this.a.d,"swarm")},
$S:0}
B.esJ.prototype={
$2(d,e){var w=null,v=this.a,u=new C.as(e.b,e.d)
v.w=u
return new C.en(C.aH(A.c5,C.b3(w,w,w,new B.bpW(v.e,v.f,v.ax,v.at,v.ay,v.fH$,w),u),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new B.esF(v),new B.esG(v),new B.esH(v),w,w,w,w,w,w,w,w,new B.esx(v),new B.esy(v),new B.esz(v),w,w,w,!1,A.ac),v.d)},
$S:181}
B.esG.prototype={
$1(d){return this.a.ay=d.b},
$S:40}
B.esH.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
B.esF.prototype={
$1(d){return this.a.ay=null},
$S:35}
B.esy.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.z(v,w.fH$))
if(w.ch)B.dD(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)B.l5("flute",7,500,0.3)},
$S:23}
B.esz.prototype={
$1(d){return this.a.ay=null},
$S:48}
B.esx.prototype={
$0(){return this.a.ay=null},
$S:0}
B.esK.prototype={
$0(){var w=this.a
return w.m(new B.esE(w,this.b))},
$S:0}
B.esE.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
B.esL.prototype={
$0(){var w=this.a
return w.m(new B.esD(w,this.b))},
$S:0}
B.esD.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a7(w.e)},
$S:0}
B.esM.prototype={
$0(){var w=this.a
return w.m(new B.esC(w))},
$S:0}
B.esC.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.esN.prototype={
$1(d){var w=this.a
return w.m(new B.esB(w,d))},
$S:6}
B.esB.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.esO.prototype={
$1(d){var w=this.a
return w.m(new B.esA(w,d))},
$S:6}
B.esA.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.esP.prototype={
$1(d){var w=this.a
return w.m(new B.esw(w,d))},
$S:6}
B.esw.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.esQ.prototype={
$1(d){var w=this.a
return w.m(new B.esv(w,d))},
$S:6}
B.esv.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.esR.prototype={
$1(d){var w=this.a
return w.m(new B.esu(w,d))},
$S:6}
B.esu.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dBr.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.dBq(w,d))},
$S:134}
B.dBq.prototype={
$0(){var w=this.a,v=this.b,u=J.a8(v),t=C.aN(u.h(v,"unlocked"))
t=t==null?null:A.k.N(t)
w.w=A.o.D(t==null?1:t,1,100)
t=C.aN(u.h(v,"level"))
t=t==null?null:A.k.N(t)
if(t==null)t=w.w
w.r=A.o.D(t,1,w.w)
t=C.T(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.jn(v==null?A.ve:v)
v=v.gai(v)
while(v.C()){u=v.gT(v)
t.n(0,C.t(u.a),A.k.N(C.f6(u.b)))}w.x=t
w.Q=!0
A.d.a7(w.d)},
$S:0}
B.dBs.prototype={
$1(d){return d.d!=null},
$S:z+20}
B.dBt.prototype={
$1(d){var w=d.d
return w!=null&&this.a.XQ(w)>0},
$S:z+20}
B.dBh.prototype={
$0(){var w=this.a
w.r=A.o.D(this.b,1,w.w)
w.axd()},
$S:0}
B.dBk.prototype={
$1(d){var w=null,v=C.m(22),u=this.a
return C.eB(w,D.DI,new C.C(A.bA,new C.a4(340,480,C.v(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.iU,w,w,w),A.S,C.D(C.ia(!0,w,w,A.z,I.aKf,new B.dBj(u,d),100,w,w,A.aj,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.cZ,w,new C.b7(v,A.Z),w)},
$S:46}
B.dBj.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new B.dBi(this.b,r):s
v=C.m(12)
if(p)q=r===q.r?A.bY:A.c.j(0.1)
else q=A.c.j(0.03)
u=C.I(p?A.b9:A.du,A.r,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.j2
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(A.a.aJ("\u2605",n)+A.a.aJ("\u2606",3-n),s,s,s,s,s,s,D.eU3,s,s,s))
return C.aH(s,C.p(s,C.v(o,A.m,s,A.b7,A.j,0,A.p),A.f,s,s,new C.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.ac)},
$S:73}
B.dBi.prototype={
$0(){C.a6(this.a,!1).M(this.b)
return null},
$S:0}
B.dBo.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.as(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gaaJ()
o=C.b3(q,q,q,new B.b8a(p.d,w,v,p.gc_Y(),q),o)
v=p.bSK("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gHc()
t=p.as>=p.gHc()?A.bf:A.c
s=this.b
r=x.p
s=C.a([o,C.an(q,C.A(C.a([v,p.asn("GOAL",""+w+" / "+u,t),p.asn("STARS",A.a.aJ("\u2605",s)+A.a.aJ("\u2606",3-s),A.aL)],r),A.m,q,A.hH,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lS)
if(p.Q&&!p.y)s.push(D.aQt)
if(p.z){o=C.m(24)
w=this.c
v=C.I((w?A.bf:A.cx).j(0.6),A.r,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?A.bf:A.cx,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.aq,C.d("You blasted "+p.as+" dots. The goal was "+p.gHc()+".",q,q,q,q,q,q,A.hv,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(A.a.aJ("\u2605",t==null?1:t),q,q,q,q,q,q,D.eKP,q,q,q))}u.push(A.ay)
t=C.a([new B.ff(A.ma,"Try again",new B.dBl(p),A.c,q)],r)
if(w&&p.r<100)t.push(new B.ff(A.jr,"Next level",new B.dBm(p),A.bf,q))
u.push(C.A(t,A.m,q,A.e,A.Q,0,q,q))
s.push(C.au(C.p(q,C.v(u,A.m,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(D.U1,q,v,o,q,q,A.n),q,q,q,q,A.a8,q,q,q),q,q,q))}return C.aH(A.c5,new C.am(A.X,q,A.b_,A.q,s,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dBn(p),q,q,q,q,!1,A.ac)},
$S:34}
B.dBn.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fH$
B.dD(180,"",200,1,0.4,"sine")
C.jb()},
$S:23}
B.dBl.prototype={
$0(){var w=this.a
return w.m(w.gb0M())},
$S:0}
B.dBm.prototype={
$0(){var w=this.a
return w.aV6(w.r+1)},
$S:0}
B.dBp.prototype={
$0(){var w=this.a
return w.m(w.gb0M())},
$S:0}
B.cH2.prototype={
$3(d,e,f){var w,v
if(e<=0)return
w=this.a
$.V()
v=C.L()
v.r=f.j(0.18).gp(0)
w.ae(d,e,v)
v=C.L()
v.b=A.ae
v.c=3
v.r=f.j(0.9).gp(0)
w.ae(d,e,v)
v=C.L()
v.r=f.j(0.25).gp(0)
v.z=A.lc
w.ae(d,e*0.5,v)},
$S:625}
B.e5a.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcGS()?this.a.ckF(w,v,d.b):w.aB(0,v).gcj())<24},
$S:z+80}
B.e5z.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+81}
B.e5o.prototype={
$0(){var w=this.a
return w.m(new B.e5f(w))},
$S:0}
B.e5f.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.e5p.prototype={
$0(){return B.qt(this.b,this.a.d,"marble-music")},
$S:0}
B.e5q.prototype={
$2(d,e){var w=null,v=this.a,u=new C.as(e.b,e.d)
v.w=u
return new C.en(C.aH(A.c5,C.b3(w,w,w,new B.bf8(v.e,v.f,v.at,v.ax,v.fH$,w),u),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new B.e5l(v),new B.e5m(v),new B.e5n(v),w,w,w,w,w,w,w,w,w,w,new B.e5e(v),w,w,w,!1,A.ac),v.d)},
$S:181}
B.e5e.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.Yz(w)
u.e.push(new B.EK(w,w,v,u.aMg(v)))
if(u.ay)B.l5(u.z,v+12,700,0.5)}if(u.x==="erase")u.aON(d.b)},
$S:48}
B.e5m.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:40}
B.e5n.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aON(d.b)},
$S:18}
B.e5l.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aB(0,w).gcj()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.Yz(t.af(0,w).ez(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new B.EK(w,t,v,u.aMg(v)))
if(u.ay)B.l5(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:35}
B.e5r.prototype={
$0(){var w=this.a
return w.m(new B.e5k(w,this.b))},
$S:0}
B.e5k.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.e5s.prototype={
$0(){var w=this.a
return w.m(new B.e5j(w,this.b))},
$S:0}
B.e5j.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.e5t.prototype={
$0(){var w=this.a
return w.m(new B.e5i(w,this.b))},
$S:0}
B.e5i.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.e5u.prototype={
$1(d){var w=this.a
return w.m(new B.e5h(w,d))},
$S:6}
B.e5h.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.e5v.prototype={
$0(){var w=this.a
return w.m(new B.e5g(w))},
$S:0}
B.e5g.prototype={
$0(){return this.a.avN("stairs")},
$S:0}
B.e5w.prototype={
$0(){var w=this.a
return w.m(new B.e5d(w))},
$S:0}
B.e5d.prototype={
$0(){return this.a.avN("pinball")},
$S:0}
B.e5x.prototype={
$0(){var w=this.a
return w.m(new B.e5c(w))},
$S:0}
B.e5c.prototype={
$0(){return this.a.avN("random")},
$S:0}
B.e5y.prototype={
$0(){var w=this.a
return w.m(new B.e5b(w))},
$S:0}
B.e5b.prototype={
$0(){var w=this.a
A.d.a7(w.e)
A.d.a7(w.f)},
$S:0}
B.e94.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
B.e95.prototype={
$0(){var w=this.b,v=new B.abL(this.a.a,this.c)
v.c=w.fH$
return w.e.push(v)},
$S:0}
B.e9c.prototype={
$0(){var w=this.a
return w.m(new B.e9b(w))},
$S:0}
B.e9b.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.e9d.prototype={
$0(){return B.qt(this.b,this.a.d,"orbit-sequencer")},
$S:0}
B.e9e.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.as(e.b,e.d)
if(!u.f){u.f=!0
u.aNC()}w=u.w
return new C.en(C.aH(A.c5,C.b3(v,v,v,new B.biy(u.e,u.gaV8(),6,u.gceZ(),u.gcl5(),u.fH$,v),w),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.e9a(u),v,v,v,!1,A.ac),u.d)},
$S:181}
B.e9a.prototype={
$1(d){return this.a.c0_(d.b)},
$S:48}
B.e9f.prototype={
$1(d){var w=this.a
return w.m(new B.e99(w,d))},
$S:6}
B.e99.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.e9g.prototype={
$0(){var w=this.a
return w.m(new B.e98(w,this.b))},
$S:0}
B.e98.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.e9h.prototype={
$0(){var w=this.a
return w.m(new B.e97(w,this.b))},
$S:0}
B.e97.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.e9i.prototype={
$0(){var w=this.a
return w.m(w.gbFL())},
$S:0}
B.e9j.prototype={
$0(){var w=this.a
return w.m(new B.e96(w))},
$S:0}
B.e96.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a7(u)
for(v=v.r,w=0;w<9;++w)u.push(new B.abL(v.aD(6),v.ag()))},
$S:0}
B.e9k.prototype={
$0(){var w=this.a
return w.m(A.d.gqZ(w.e))},
$S:0}
B.fij.prototype={
$2(d,e){var w=A.o.am(d,100),v=A.o.G(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:139}
B.e8z.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.e8y(w,d))},
$S:134}
B.e8y.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cF:v)
while(v.C())w.push(A.k.N(C.f6(v.gT(v))))
return this.a.x.v(0,w)},
$S:0}
B.e8l.prototype={
$2(d,e){var w=this.b
if(A.o.am(d,100)===w||A.o.G(d,100)===w)this.a.a+=e},
$S:139}
B.e8f.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new B.b73(w.b,new C.u(w.c*(0.2+0.6*v.ag()),w.e*(0.2+0.6*v.ag()))))},
$S:0}
B.e8g.prototype={
$0(){var w=this.a
A.d.a7(w.e)
w.f.a7(0)
w.r=null},
$S:0}
B.e8k.prototype={
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
p=D.vd.h(0,v[u].a).a
o=w.ah6(u)
v=D.vd.h(0,v[t].a).a
n=w.ah6(t)
if(q<=p-o+r&&q<=v-n+r){m.n(0,s,q)
B.vp("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaVe()&&w.x.L(0,w.d)){B.vp("zap",12,300,0.5)
m=w.x
m=C.B(m,C.a2(m).k("cn.E"))
B.vm("molecule_maker",C.E(["done",m],x.N,x.z))}}}},
$S:0}
B.e8j.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a2(t).k("cy<1>"),r=this.b,q=s.k("a3<G.E>"),p=C.B(new C.a3(new C.cy(t,s),new B.e8h(r),q),q.k("G.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.K)(p),++w)t.W(0,p[w])
s=x.S
v=C.T(s,s)
t.bG(0,new B.e8i(r,v))
t.a7(0)
t.v(0,v)
A.d.cv(u.e,r)
u.r=null},
$S:0}
B.e8h.prototype={
$1(d){var w=this.a
return A.o.am(d,100)===w||A.o.G(d,100)===w},
$S:54}
B.e8i.prototype={
$2(d,e){var w=A.o.am(d,100),v=A.o.G(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.n(0,w*100+v,e)},
$S:139}
B.e8t.prototype={
$1(d){return""+d.b+" "+D.vd.h(0,d.a).c.toLowerCase()},
$S:395}
B.e8u.prototype={
$0(){var w=this.a
return w.m(new B.e8s(w))},
$S:0}
B.e8s.prototype={
$0(){var w=this.a;++w.d
w.aug(0)},
$S:0}
B.e8v.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.as(e.b,e.d)
return C.aH(A.c5,C.b3(w,w,w,new B.bfP(v.e,v.f,v.r,v.gcvl(),w),A.eS),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new B.e8o(v),new B.e8p(v),new B.e8q(v,e),w,w,w,w,w,w,w,w,w,w,new B.e8r(v),w,w,w,!1,A.ac)},
$S:34}
B.e8r.prototype={
$1(d){return this.a.c0m(d.b)},
$S:48}
B.e8p.prototype={
$1(d){var w=this.a
return w.w=w.aVf(d.b)},
$S:40}
B.e8q.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.m(new B.e8m(w,v,d,this.b))},
$S:18}
B.e8m.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.u(A.k.D(t.b.a+s.a,26,r.b-26),A.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
B.e8o.prototype={
$1(d){return this.a.w=null},
$S:35}
B.e8w.prototype={
$0(){var w=this.a
return w.m(new B.e8n(w,this.b))},
$S:0}
B.e8n.prototype={
$0(){var w=this.a
w.d=this.b
w.aug(0)},
$S:0}
B.e8x.prototype={
$0(){return this.a.c0g(0,this.b.a)},
$S:0}
B.dk6.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.am(d,100)].b,i=k[A.o.G(d,100)].b,h=i.aB(0,j),g=new C.u(-h.b,h.a).ez(0,Math.max(h.gcj(),1))
for(k=(e-1)/2,w=g.a,v=g.b,u=j.a,t=j.b,s=i.a,r=i.b,q=this.b.a,p=0;p<e;++p){o=(p-k)*8
n=w*o
o=v*o
$.V()
m=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
m.r=A.af.gp(0)
m.c=4
m.d=A.bO
l=m.H()
q.drawLine.apply(q,[u+n,t+o,s+n,r+o,l])
l.delete()}},
$S:139}
B.dJz.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dJy(w,d))},
$S:134}
B.dJy.prototype={
$0(){var w=C.aN(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
B.dJo.prototype={
$0(){var w,v,u=J.e1(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.arH[w.aD(4)]
return A.d.fO(u)},
$S:22}
B.dJn.prototype={
$1(d){return B.fLG(d)==="*"},
$S:3}
B.dJp.prototype={
$1(d){return d!==this.a},
$S:3}
B.dJm.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
B.vm("dna_lab",C.E(["best",r],x.N,x.z))}r=s.d
B.vp("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga7i()[r]+" codes for "+C.t(D.Bp.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.aYc()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.K)(w),++u)r.push(D.Bp.h(0,w[u]))
r="Protein built: "+A.d.aH(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
B.vp("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
B.dJx.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.du:e,u=C.m(8),t=f?C.I(A.b9,A.r,1):w
return C.p(A.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?A.b9:A.w,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,40,w,A.mN,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1802}
B.dJs.prototype={
$1(d){var w=D.d88.h(0,d)
return w==null?A.c:w},
$S:580}
B.dJt.prototype={
$0(){var w=this.a
return w.m(new B.dJr(w,this.b))},
$S:0}
B.dJr.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.atG()},
$S:0}
B.dJu.prototype={
$0(){var w=this.a
return w.m(new B.dJq(w))},
$S:0}
B.dJq.prototype={
$0(){var w=this.a;++w.e
w.atG()},
$S:0}
B.dJv.prototype={
$0(){return this.a.aVd(this.b)},
$S:0}
B.dJw.prototype={
$0(){return this.a.aVd(this.b)},
$S:0}
B.dMo.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dMn(w,d))},
$S:134}
B.dMn.prototype={
$0(){var w=C.aN(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
B.dMb.prototype={
$0(){},
$S:0}
B.dMa.prototype={
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
B.dMc.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
A.d.a7(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
B.dMg.prototype={
$1(d){var w=this.a
return w.m(new B.dMf(w,d))},
$S:6}
B.dMf.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dMh.prototype={
$1(d){var w=this.a
return w.m(new B.dMe(w,d))},
$S:6}
B.dMe.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dMi.prototype={
$1(d){var w=this.a
return w.m(new B.dMd(w,d))},
$S:6}
B.dMd.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.dMj.prototype={
$0(){return this.a.a8u("drought")},
$S:0}
B.dMk.prototype={
$0(){return this.a.a8u("disease")},
$S:0}
B.dMl.prototype={
$0(){return this.a.a8u("foxes")},
$S:0}
B.dMm.prototype={
$0(){return this.a.a8u("rabbits")},
$S:0}
B.d_x.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.f5()
k.dU(A.o.N(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.ag()
p=k.ag()
o=(r&1)===0?1:-1
o=A.k.G(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.ag()
p=Math.sin(s+r*2)
n=new C.kt(new C.ep(e,l,l,A.cQ,l,l,l,l,l,l,new C.F(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a5,A.ci,new C.jB(1),l,l,l,l,A.cg,l)
n.eP()
n.a5(w,new C.u(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1804}
B.d_z.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this.a.c
if(l.length<2)return
w=$.V()
v=C.a([],x.v)
u=new C.aP(w.r,A.ap,null,null,v)
for(w=this.b,t=w.a,s=w.c-t,r=w.d,w=r-w.b,q=0;q<l.length;++q){p=t+s*q/159
o=r-w*A.k.D(l[q][d]/e,0,1)
if(q===0){n=new C.b5(p,o)
v.push(n)
m=u.f
if(m!=null)n.bw(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}else{n=new C.ao(p,o)
v.push(n)
m=u.f
if(m!=null)n.bw(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}}$.V()
l=C.L()
l.b=A.ae
l.c=2.6
l.r=f.gp(0)
l.e=A.fw
this.c.aM(u,l)},
$S:1805}
B.d_y.prototype={
$3(d,e,f){var w=null,v=C.ig(w,w,w,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a5,A.ci,w,A.eq,A.cg)
v.eP()
v.a5(this.a,new C.u(f,this.b.b+2))},
$S:1806}
B.bDf.prototype={
$2(d,e){return d+e.a*e.b},
$S:1807}
B.fdR.prototype={
$2(d,e){return e.a-d.a},
$S:1808}
B.dxC.prototype={
$2(d,e){return d+e},
$S:75}
B.dxP.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.m(new B.dxO(v,A.k.D((v.gvi()-w[v.e].gum())/Math.max(w[v.e].gum(),8),-1,1)*0.32,u))},
$S:8}
B.dxO.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
B.dxQ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dxN(w,d))},
$S:134}
B.dxN.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cF:v)
while(v.C())w.push(A.k.N(C.f6(v.gT(v))))
return this.a.r.v(0,w)},
$S:0}
B.dxD.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.G(w[v]+1,6)
w[v]=u
return u},
$S:0}
B.dxI.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1809}
B.dxJ.prototype={
$0(){var w=this.a
return w.m(new B.dxH(w))},
$S:0}
B.dxH.prototype={
$0(){var w=this.a;++w.e
A.d.hj(w.f,0,5,0)},
$S:0}
B.dxK.prototype={
$2(d,e){var w=null,v=this.a
return C.aH(A.c5,C.b3(w,w,w,new B.b7f(v.w,this.b.a,v.f,v.gvi()===v.d[v.e].gum(),w),A.eS),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dxG(v,e),w,w,w,!1,A.ac)},
$S:34}
B.dxG.prototype={
$1(d){var w=this.b.b,v=A.k.U((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.crk(v-1)},
$S:48}
B.dxL.prototype={
$0(){var w=this.a
return w.m(new B.dxF(w,this.b))},
$S:0}
B.dxF.prototype={
$0(){var w=this.a
w.e=this.b
A.d.hj(w.f,0,5,0)},
$S:0}
B.dxM.prototype={
$0(){var w=this.a
return w.m(new B.dxE(w))},
$S:0}
B.dxE.prototype={
$0(){return A.d.hj(this.a.f,0,5,0)},
$S:0}
B.czA.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.by(C.cr(new C.u(d,s),20,w),A.qU)
$.V()
q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.r=f.gp(0)
p=q.H()
u.drawRRect(C.et(r),p)
p.delete()
q=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
q.b=A.ae
q.c=1.2
q.r=A.dx.gp(0)
p=q.H()
u.drawRRect(C.et(r),p)
p.delete()
B.fcV(v,"1",new C.u(d,s),A.bh,11)}},
$S:1810}
B.dQr.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.m(new B.dQq(w,v))},
$S:8}
B.dQq.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
B.dQs.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dQp(w,d))},
$S:134}
B.dQp.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cF:v)
while(v.C())w.push(A.k.N(C.f6(v.gT(v))))
return this.a.w.v(0,w)},
$S:0}
B.dQh.prototype={
$0(){var w=A.k.U(this.c)
this.a.d[this.b]=w
return w},
$S:0}
B.dQl.prototype={
$0(){var w=this.a
return w.m(new B.dQk(w))},
$S:0}
B.dQk.prototype={
$0(){return this.a.r++},
$S:0}
B.dQm.prototype={
$0(){var w=this.a
return w.m(new B.dQj(w,this.b))},
$S:0}
B.dQj.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dQn.prototype={
$1(d){var w=this.a
return w.m(new B.dQi(w,d))},
$S:6}
B.dQi.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.dQo.prototype={
$1(d){return this.a.c0n(this.b,d)},
$S:6}
B.d7h.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bKP(d,e,f,g),m=this.b
$.V()
w=C.L()
v=C.ar(h,A.c,i?0.1:0.35)
v.toString
u=C.ar(h,A.w,0.5)
u.toString
w.sar(new C.bS(A.A,0.5,A.x,null,0,C.a([v,h,u],x.O),null,null).av(0,C.bT(d,e+6)))
m.aM(n,w)
w=C.L()
w.b=A.ae
w.c=1.5
w.r=A.aV.gp(0)
m.aM(n,w)
w=C.L()
w.r=A.w.j(0.28).gp(0)
m.ae(d,e*0.55,w)
for(w=d.a,v=d.b,u=m.a,t=0;t<4;++t){s=g+t*3.141592653589793/2
r=Math.cos(s)
q=Math.sin(s)
p=new C.aq(A.W,A.V,A.a_,A.a0,A.Y)
p.r=A.hB.gp(0)
p.c=3
o=p.H()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.L()
w.r=A.aK.gp(0)
m.ae(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1811}
B.d7i.prototype={
$3(d,e,f){var w=this,v=w.b
return B.fcV(w.a,d,new C.u(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1812}
B.dBO.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dBN(w,d))},
$S:134}
B.dBN.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cF:v)
while(v.C())w.push(A.k.N(C.f6(v.gT(v))))
return this.a.Q.v(0,w)},
$S:0}
B.dBw.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jz(90-(w-65)):d},
$S:13}
B.dBF.prototype={
$1(d){return this.a.m(new B.dBE())},
$S:2}
B.dBE.prototype={
$0(){},
$S:0}
B.dBG.prototype={
$1(d){return this.a.m(new B.dBD())},
$S:2}
B.dBD.prototype={
$0(){},
$S:0}
B.dBH.prototype={
$0(){var w=this.a
return w.m(new B.dBC(w))},
$S:0}
B.dBC.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aU9()},
$S:0}
B.dBI.prototype={
$0(){var w=this.a
return w.m(new B.dBB(w))},
$S:0}
B.dBB.prototype={
$0(){return this.a.f=0},
$S:0}
B.dBJ.prototype={
$0(){var w=this.a
return w.m(new B.dBA(w))},
$S:0}
B.dBA.prototype={
$0(){return this.a.f=1},
$S:0}
B.dBK.prototype={
$0(){var w=this.a
return w.m(new B.dBz(w,this.b))},
$S:0}
B.dBz.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dBL.prototype={
$1(d){var w=this.a
return w.m(new B.dBy(w,d))},
$S:6}
B.dBy.prototype={
$0(){return this.a.w=A.k.U(this.b)},
$S:0}
B.dBM.prototype={
$1(d){var w=this.a
w.m(new B.dBx(w,d))
if(w.ga7M()&&w.Q.L(0,w.x)){B.vp("zap",9,220,0.45)
w=w.Q
w=C.B(w,C.a2(w).k("cn.E"))
B.vm("cipher_lab",C.E(["done",w],x.N,x.z))}},
$S:6}
B.dBx.prototype={
$0(){return this.a.z=A.k.U(this.b)},
$S:0}
B.bJ_.prototype={
$1(d){return d.r<=0},
$S:z+85}
B.bJa.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+13}
B.bJ5.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+13}
B.bJb.prototype={
$1(d){return this.a.Kx(d)&&!d.x},
$S:z+1}
B.bJc.prototype={
$2(d,e){return Math.max(d,this.a.axH(e))},
$S:z+8}
B.bJe.prototype={
$2(d,e){var w=this.a
return w.ce(0,d.a+"."+e,new B.bJf(w))},
$S:z+7}
B.bJf.prototype={
$0(){return this.a.a},
$S:112}
B.bJd.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:85}
B.bJg.prototype={
$2(d,e){var w=this.a
return w.ce(0,this.b.$1(this.c.$2(d,e)),new B.bJh(w))},
$S:z+7}
B.bJh.prototype={
$0(){return this.a.a},
$S:112}
B.bJ1.prototype={
$2(d,e){var w=this.a
return w.ce(0,d.a+"."+e,new B.bJ2(w))},
$S:z+7}
B.bJ2.prototype={
$0(){return this.a.a},
$S:112}
B.bJ0.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:85}
B.bJ3.prototype={
$2(d,e){var w=this.a
return w.ce(0,this.b.$1(this.c.$2(d,e)),new B.bJ4(w))},
$S:z+7}
B.bJ4.prototype={
$0(){return this.a.a},
$S:112}
B.bIZ.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+1}
B.bJi.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+13}
B.bJ6.prototype={
$1(d){return d!==this.b&&this.a.aDy(d)&&Math.abs(d.fr)>0.0005},
$S:z+1}
B.bJ9.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bJ8.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+1}
B.bJ7.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bEr.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
B.bEs.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+8}
B.ch3.prototype={
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
$S:182}
B.fcP.prototype={
$1(d){var w=null,v=C.ig(w,w,1,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,this.b,w,w,w,w,w,w,w,w,d,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),this.a),A.a5,A.ci,w,A.eq,A.cg)
v.eP()
return v},
$S:572}
B.ftJ.prototype={
$1(d){var w
$.V()
w=C.L()
w.r=d.gp(0)
return w},
$S:1814}
B.ftL.prototype={
$2(d,e){var w
$.V()
w=C.L()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bO
return w},
$S:1815}
B.ftM.prototype={
$5(d,e,f,g,h){return C.by(new C.a9(d,e,d+f,e+g),new C.aZ(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1816}
B.ftK.prototype={
$3(d,e,f){var w
$.V()
w=C.L()
w.sar(new C.a5(A.b1,A.b3,A.x,C.a([e,f],x.O),null,null).av(0,d))
return w},
$S:1817}
B.bE5.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bE6.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.bE4(w))},
$S:0}
B.bE4.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bE7.prototype={
$0(){return C.a([],x.ey)},
$S:1818}
B.bE8.prototype={
$1(d){return this.a.bx(d).a>15e5},
$S:344}
B.bE9.prototype={
$0(){var w,v,u
J.bBj(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.BH(v))if(B.fM7(v.b))w.aXb(v)
else w.YP(v)
else{u=w.a.c.b8u(v)
w.abP(u==null?"The "+$.pQ().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
B.bE3.prototype={
$1(d){return new C.e7(new B.bE1(this.a,this.b),null)},
$S:21}
B.bE1.prototype={
$2(d,e){var w=null,v=this.b,u=new B.bE2(this.a,v,e),t=$.pQ(),s=v.b,r=C.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.kS,w,w,w),q=C.aG(w,w,w,w,D.bxN,w,w,w,new B.bDY(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return C.bq(!0,new C.C(A.wP,C.v(C.a([r,A.av,D.fhM,A.S,C.A(C.a([q,C.D(C.kP(t.h(0,s).d,w,w,2.6,1,u,p),1),C.aG(w,w,w,w,D.bEk,w,w,w,new B.bDZ(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),C.A(C.a([C.d(""+A.k.U(v.ch*100)+"%",w,w,w,w,w,w,C.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b6,C.bJ(!1,D.eXY,w,w,!0,w,w,new B.bE_(u),w,w),C.bJ(!1,A.yN,w,w,!0,w,w,new B.bE0(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.Q,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:108}
B.bE2.prototype={
$1(d){var w=this.a
w.m(new B.bDW(this.b,d))
this.c.$1(new B.bDX())
w.a.toString},
$S:6}
B.bDW.prototype={
$0(){return this.a.ch=A.k.D(this.b,1,2.6)},
$S:0}
B.bDX.prototype={
$0(){},
$S:0}
B.bDY.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
B.bDZ.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
B.bE_.prototype={
$0(){return this.a.$1(1)},
$S:0}
B.bE0.prototype={
$0(){C.a6(this.a,!1).M(null)
return null},
$S:0}
B.bEo.prototype={
$2(d,e){var w
if(d==="short"){B.dD(1800,"",120,0,0.55,"noise")
B.dD(200,"",160,2.2,0.4,"saw")
C.fY()
w=this.a
if(w.c!=null)w.abP("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){B.dD(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.abP("\u26a0 Overloaded! The "+$.pQ().h(0,e.b).b+" can only give about "+A.k.a9(w.a.c.yZ(e),2)+" amps but your gadgets are asking for "+A.k.a9(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.abP("Burnt out! "+e.ay)
B.dD(140,"",320,0,0.6,"noise")
B.dD(900,"",160,1.5,0.35,"square")}},
$S:z+89}
B.bEp.prototype={
$0(){},
$S:0}
B.bDz.prototype={
$0(){},
$S:0}
B.bEq.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
B.bEn.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.as(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aH(A.c5,C.b3(p,p,p,new B.agN(w,v,u,t,s,r==null?A.iQ:r,p),n),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,new B.bEh(o),new B.bEi(o),new B.bEj(o),p,p,p,p,p,p,p,p,p,p,new B.bEk(o),p,p,p,!1,A.ac)],q)
if(o.a.c.a.length===0)n.push(D.aZq)
w=o.Q
if(w!=null){v=C.m(14)
u=C.I(A.cL,A.r,1)
n.push(C.an(p,C.aH(p,C.p(p,C.A(C.a([D.eWk,C.D(C.d(w,p,p,p,p,p,p,D.eOL,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new C.o(D.b3n,p,u,v,p,p,A.n),p,p,p,p,A.oc,p,p,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bEl(o),p,p,p,p,p,p,!1,A.ac),p,p,10,10,8,p))}if(o.e!=null)n.push(C.an(8,o.aVi(C.A(C.a([D.bqb,new B.ff(A.Ym,"Cut wire",new B.bEm(o),A.cx,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.an(8,o.c9W(w),p,p,10,10,p,p))}return C.jo(new C.am(A.X,p,A.b_,A.q,n,p),A.q,p)},
$S:346}
B.bEi.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b2T(s)
if(r!=null){t.m(new B.bEf(t,r,d))
return}w=t.aXS(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.u(v*u.a,w.d*u.b).aB(0,s)
t.m(new B.bEg(t,w))}},
$S:40}
B.bEf.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
B.bEg.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bEj.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new B.bEd(w,d))
else if(w.w!=null)w.m(new B.bEe(w,d.b.af(0,w.x)))},
$S:18}
B.bEd.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
B.bEe.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
B.bEh.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b2T(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.aig(u.a,u.b,v.a,v.b)!=null)B.dD(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.abN()},
$S:35}
B.bEk.prototype={
$1(d){var w=this.a,v=d.b,u=w.aXS(v)
if(u!=null){w.m(new B.bEb(w,u))
if(D.lE.al(0,u.b))w.ck8(u)
w.a.toString
return}w.m(new B.bEc(w,w.cw8(v)))},
$S:48}
B.bEb.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
B.dD(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
B.dD(200,"",70,0,0.2,"saw")}},
$S:0}
B.bEc.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
B.bEl.prototype={
$0(){var w=this.a
return w.m(new B.bEa(w))},
$S:0}
B.bEa.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bEm.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
B.dD(300,"",50,0,0.35,"noise")
w.abN()},
$S:0}
B.bDA.prototype={
$0(){return this.a.bk5(this.b)},
$S:0}
B.bDT.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.A(C.a([C.d(d,w,w,w,w,w,w,D.eJu,w,w,w),C.D(C.kP(this.b.d,w,w,g,h,new B.bDV(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1819}
B.bDV.prototype={
$1(d){var w=this.a
w.m(new B.bDU(this.b,d))
w.a.toString},
$S:6}
B.bDU.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bDG.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
B.dD(260,"",70,0,0.35,"noise")
w.abN()},
$S:0}
B.bDH.prototype={
$0(){var w=this.a
return w.m(new B.bDF(w))},
$S:0}
B.bDF.prototype={
$0(){return this.a.d=null},
$S:0}
B.bDI.prototype={
$0(){this.a.m(new B.bDE(this.b,this.c))
B.dD(900,"",40,0,0.3,"noise")},
$S:0}
B.bDE.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bDL.prototype={
$0(){return this.a.aXb(this.b)},
$S:0}
B.bDM.prototype={
$0(){return this.a.YP(this.b)},
$S:0}
B.bDN.prototype={
$0(){return this.a.a_r(this.b)},
$S:0}
B.bDO.prototype={
$0(){var w=this.a
w.m(new B.bDD(this.b,this.c))
w.a.toString},
$S:0}
B.bDD.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.bDP.prototype={
$0(){var w=this.a
w.m(new B.bDC(this.b,this.c))
w.a.toString},
$S:0}
B.bDC.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
B.bDQ.prototype={
$0(){var w=this.a
w.m(new B.bDB(this.b,this.c))
w.a.toString},
$S:0}
B.bDB.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bDR.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bDS.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bDJ.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bDK.prototype={
$1(d){return this.a.f=d},
$S:6}
B.f4c.prototype={
$1(d){return d.aDc("bulb")},
$S:z+2}
B.f4d.prototype={
$1(d){return d.ajM(0,"switch")&&d.aDc("bulb")},
$S:z+2}
B.f4e.prototype={
$1(d){return A.d.ba(d.a,new B.f4_())},
$S:z+2}
B.f4_.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+1}
B.f4f.prototype={
$1(d){return d.ajM(0,"resistor")&&A.d.ba(d.a,new B.f3Z())},
$S:z+2}
B.f3Z.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+1}
B.f4g.prototype={
$1(d){return!d.ajM(0,"battery")&&d.aDc("bulb")},
$S:z+2}
B.f43.prototype={
$1(d){return A.d.ba(d.a,new B.f3Y())},
$S:z+2}
B.f3Y.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.f44.prototype={
$1(d){return A.d.ba(d.a,new B.f3X())},
$S:z+2}
B.f3X.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.f45.prototype={
$1(d){return A.d.ba(d.a,new B.f3W())},
$S:z+2}
B.f3W.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
B.f46.prototype={
$1(d){var w=d.a
return A.d.ba(w,new B.f3U())&&A.d.ba(w,new B.f3V())&&d.ajM(0,"buck")},
$S:z+2}
B.f3U.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.f3V.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+1}
B.f47.prototype={
$1(d){var w=d.a
return A.d.ba(w,new B.f3S())&&A.d.ba(w,new B.f3T())},
$S:z+2}
B.f3S.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+1}
B.f3T.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.f48.prototype={
$1(d){return A.d.ba(d.a,new B.f3R())},
$S:z+2}
B.f3R.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+1}
B.dMw.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a7(0)
w.v(0,v.b)},
$S:0}
B.dMF.prototype={
$1(d){var w=this.a.d
return w.aDy(d)&&w.BH(d)},
$S:z+1}
B.dMG.prototype={
$1(d){return d.x},
$S:z+1}
B.dMH.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
B.dMI.prototype={
$0(){},
$S:0}
B.dMv.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.m(22),o=x.p,n=C.a([D.fb6,A.av,D.eXU,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.Ol[v]
t=A.c.j(0.06)
s=new C.aZ(14,14)
r=new C.az(A.bH,1,A.r,-1)
n.push(C.aH(q,C.p(q,C.v(C.a([new C.x(u.a,q,A.kl,q,q,q,q,q,q,q,q,q),A.bB,new C.x(u.b,q,D.ePq,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new C.o(t,q,new C.bY(r,r,r,r),new C.bv(s,s,s,s),q,q,A.n),q,q,q,A.cM,A.bm,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dMu(w,d,u),q,q,q,q,q,q,!1,A.ac))}return C.eB(q,D.DI,new C.C(A.c2,new C.a4(340,q,C.cL(n,q,q,q,q,A.aj,!0),q),q),q,q,q,q,A.cZ,q,new C.b7(p,A.Z),q)},
$S:46}
B.dMu.prototype={
$0(){C.a6(this.b,!1).M(null)
var w=this.a
w.m(new B.dMt(w,this.c))
B.dD(800,"",120,-0.5,0.3,"square")},
$S:0}
B.dMt.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bds()},
$S:0}
B.dMr.prototype={
$1(d){return new B.TY(this.a.d,null)},
$S:z+91}
B.dMs.prototype={
$0(){},
$S:0}
B.dME.prototype={
$1(d){return new C.e7(new B.dMD(this.a),null)},
$S:21}
B.dMD.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.afY(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.bf:A.aY
k=C.aI(d,m,x.m).w
w=l.r
v=x.p
u=C.a([C.A(C.a([D.f8E,A.b6,C.d(""+w.a+" of 11 done",m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.P,C.bu(C.m(4),C.m7(A.bH,m,m,5,m,w.a/11,new C.ms(f,x.F)),A.ao),A.aa],v)
if(h)u.push(D.f_P)
else{h=f.j(0.1)
t=C.m(14)
s=C.I(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=C.d(r+" Now: "+i.a,m,m,m,m,m,m,Ac.RH,m,m,m)
q=C.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,D.I0,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(C.p(m,C.v(C.a([r,A.av,q,new C.bI(A.a7,m,m,C.bJ(!1,C.d(p,m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new B.dMB(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bm,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new C.aZ(12,12)
n=new C.az(o===l.f?f.j(0.6):A.du,1,A.r,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.aA:A.c
u.push(C.aH(m,C.p(m,new C.cx(A.aX,A.e,A.j,A.m,m,A.p,m,0,C.a([new C.x(s,m,A.a5m,m,m,m,m,m,m,m,m,m),A.aw,new C.bH(1,A.bo,new C.x(r.a,m,new C.F(!0,q,m,m,m,m,13,A.I,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new C.o(h,m,new C.bY(n,n,n,n),new C.bv(t,t,t,t),m,m,A.n),m,m,m,A.ff,A.oc,m,m,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.dMC(l,o,e),m,m,m,m,m,m,!1,A.ac))}return C.bq(!0,new C.cZ(new C.aX(0,1/0,0,k.a.b*0.75),C.cL(u,m,Z.Ac,m,m,A.aj,!0),m),!0,!1,A.ah,!0,!0)},
$S:108}
B.dMB.prototype={
$0(){var w=this.a
w.m(new B.dMz(w))
this.b.$1(new B.dMA())
w.E0()},
$S:0}
B.dMz.prototype={
$0(){var w=this.a
$.afY()
return w.f=Math.min(11,w.f+1)},
$S:0}
B.dMA.prototype={
$0(){},
$S:0}
B.dMC.prototype={
$0(){var w=this.a
w.m(new B.dMx(w,this.b))
this.c.$1(new B.dMy())
w.E0()},
$S:0}
B.dMx.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.dMy.prototype={
$0(){},
$S:0}
B.dMK.prototype={
$0(){return C.a6(this.a,!1).mg()},
$S:0}
B.dML.prototype={
$0(){return C.a6(this.a,!1).ck(C.eu(new B.dMJ(),!1,null,x.H))},
$S:0}
B.dMJ.prototype={
$1(d){return D.aBa},
$S:z+92}
B.dMM.prototype={
$0(){return B.ha1(this.a,"ELECTRONICS LAB",this.b,A.aY)},
$S:0}
B.dMN.prototype={
$0(){var w=this.a
return w.m(w.d.gcME())},
$S:0}
B.dMO.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gqZ(v))
w.E0()},
$S:0}
B.cx7.prototype={
$2(d,e){var w=null,v=this.a.gauh().x
v===$&&C.c()
return C.b3(w,w,w,new B.b6n(v,w),A.at)},
$S:68}
B.cx6.prototype={
$3(d,e,f){var w=new C.aP($.V().r,A.ap,null,null,C.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new C.b5(v,t))
w.E(new C.cR(v,u,v+e,u))
w.E(new C.cR(v,u,v,u+e))
w.E(new C.cR(v,u,v-e,u))
w.E(new C.cR(v,u,v,t))
w.E(new C.bE())
t=C.L()
t.r=A.c.j(f).gp(0)
this.a.aM(w,t)},
$S:709}
B.f53.prototype={
$1(d){var w=this,v=null,u=w.c?A.u:A.a4
u=C.ig(v,v,1,v,C.dn(v,v,v,v,v,v,v,v,v,C.l(v,v,w.b,v,v,v,v,v,v,v,v,d,v,v,u,v,v,!0,v,w.d,v,v,v,v,v,v),w.a),A.a5,A.ci,v,A.eq,A.cg)
u.eP()
return u},
$S:572}
B.fya.prototype={
$3(d,e,f){return new B.Te(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+93}
B.fyb.prototype={
$4(d,e,f,g){var w=x.Y
return new C.cV(e,!1,C.ie(A.A,g,null,new C.bf(C.cH(A.cp,e,null),new C.bm(0.85,1,w),w.k("bf<bG.T>"))),null)},
$C:"$4",
$R:4,
$S:30}
B.dIs.prototype={
$0(){return C.a6(this.a,!1).mg()},
$S:0}
B.dIr.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=C.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c0u(o):q.bvS(o,p),m=x.p
p=C.a([C.pT(new C.mY(n,new C.cz(p,x.aC)),A.pb,C.rm(),A.bb,A.bb,new B.dIp())],m)
n=t.d
if(n){w=A.k.G(q.gQq(),12)<4
v=w?150:96
u=C.m(16)
m=C.a([A.aw],m)
if(w)m.push(D.bpZ)
else m.push(A.b6)
m.push(C.p(s,s,A.f,s,s,new C.o(w?A.bf:A.az,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.aw)
p.push(C.an(s,C.au(C.dh(s,C.A(m,A.m,s,A.e,A.j,0,s,s),s,s,A.et,new C.o(A.w,s,s,u,s,s,A.n),A.mK,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.tQ)p.push(C.an(s,C.au(C.p(s,s,A.f,s,s,A.J0,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.vt)p.push(C.an(s,C.p(s,s,A.f,s,s,A.J0,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(C.an(6,C.aH(s,C.au(C.p(s,s,A.f,s,s,new C.o(A.c.j(0.75),s,s,C.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dIq(q),s,s,s,s,s,s,!1,A.ac),s,s,0,0,s,s))
return C.bu(r,new C.am(A.X,s,A.b_,A.q,p,s),A.ao)},
$S:280}
B.dIp.prototype={
$2(d,e){var w=x.Y
return new C.cV(e,!1,C.ie(A.A,d,null,new C.bf(e,new C.bm(0.92,1,w),w.k("bf<bG.T>"))),null)},
$S:376}
B.dIq.prototype={
$0(){var w=this.a
return w.m(new B.dIo(w))},
$S:0}
B.dIo.prototype={
$0(){return this.a.e=null},
$S:0}
B.dIn.prototype={
$0(){var w=this.a
return w.m(new B.dIm(w,this.b))},
$S:0}
B.dIm.prototype={
$0(){return this.a.e=A.d.cJ(D.nG,this.b)},
$S:0}
B.dIl.prototype={
$0(){var w=this.a
return w.m(new B.dIk(w))},
$S:0}
B.dIk.prototype={
$0(){return this.a.e=0},
$S:0}
B.dIg.prototype={
$0(){var w=this.a
return w.m(new B.dIf(w))},
$S:0}
B.dIf.prototype={
$0(){return this.a.e=null},
$S:0}
B.dIj.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=C.m(o?20:8),m=A.w.j(0.55),l=x.p
m=C.p(p,C.A(C.a([D.fgm,A.aw,C.D(C.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eB,p,p,p,D.eVf,p,p,p),1),C.d(A.a.aU(A.o.u(C.dk(new C.Q(Date.now(),0,!1))),2,"0")+":"+A.a.aU(A.o.u(C.h_(new C.Q(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.r5,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.lv,p,p,p)
w=this.a
v=C.a([C.b3(p,p,p,new B.bsf(w.gQq(),this.c.d,p),A.at)],l)
o=w.e
if(o!=null){u=C.m(10)
t=C.I(A.b9,A.r,1)
s=C.m(10)
o=C.p(p,C.A(C.a([C.aH(p,C.p(p,p,A.f,p,p,A.a8f,p,12,p,p,p,p,p,12),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.dIi(w),p,p,p,p,p,p,!1,A.ac),A.e9,C.p(p,p,A.f,p,p,A.a8l,p,12,p,p,p,p,p,12),A.e9,C.p(p,p,A.f,p,p,D.aV2,p,12,p,p,p,p,p,12),A.aw,C.D(C.d(D.nG[o].a,p,1,A.a2,p,p,p,A.a5d,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.cB,p,p,p,24,p,p,A.fl,p,p,p)
r=w.e
r.toString
v.push(C.bZ(0,new C.C(D.bmT,C.p(p,C.bu(s,C.v(C.a([o,C.D(C.b3(p,p,p,new B.acP(r,w.gQq(),p),A.eS),1)],l),A.m,p,A.e,A.j,0,A.p),A.ao),A.f,p,p,new C.o(A.w,p,t,u,D.d1u,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=C.m(18)
t=C.I(A.b9,A.r,1)
s=C.a([],l)
for(q=0;q<9;++q)s.push(new C.C(A.jn,w.asp(D.nG[q],34,!1),p))
v.push(C.an(8,C.au(C.p(p,C.A(s,A.m,p,A.e,A.Q,0,p,p),A.f,p,p,new C.o(o,p,t,u,p,p,A.n),p,p,p,p,A.kD,p,p,p),p,p,p),p,p,0,0,p,p))
return C.bu(n,C.p(p,C.v(C.a([m,C.D(new C.am(A.X,p,A.b_,A.q,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,L.JY,p,p,p,p,p,p,p,p,p,p),A.ao)},
$S:280}
B.dIi.prototype={
$0(){var w=this.a
return w.m(new B.dIh(w))},
$S:0}
B.dIh.prototype={
$0(){return this.a.e=null},
$S:0}
B.fd0.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p=this
if(g===0||h<=0)return
w=f*A.k.D(h,0,1)
v=d.af(0,new C.u(Math.cos(e)*w,-Math.sin(e)*w))
u=p.a
$.V()
t=C.L()
t.r=A.fj.gp(0)
t.c=g*2.2
t.d=A.bO
u.bz(d,v,t)
if(h>0.95){s=Math.sin(p.b*1.6+g)*0.04
t=f*0.72
r=g-1
q=h*1.6-0.9
p.$5(v,e+0.5+s,t,r,q-(5-g)*0)
p.$5(v,e-0.5+s,t,r,q)}if(g===1&&h>0.5){t=C.L()
t.r=C.ar(A.d1,A.bf,(Math.sin(p.b*2+v.a)+1)/2).gp(0)
u.ae(v,p.c*0.035,t)}},
$S:1820}
B.fBz.prototype={
$3(d,e,f){var w=this
return new B.UP(w.d,w.a,w.c,w.b,null)},
$C:"$3",
$R:3,
$S:z+94}
B.fBA.prototype={
$4(d,e,f,g){var w=x.Y
return new C.cV(e,!1,C.ie(A.A,g,null,new C.bf(C.cH(A.cp,e,null),new C.bm(0.85,1,w),w.k("bf<bG.T>"))),null)},
$C:"$4",
$R:4,
$S:30}
B.etG.prototype={
$0(){var w=this.a
if(w.c!=null&&!w.r)w.m(new B.etF(w))},
$S:0}
B.etF.prototype={
$0(){return this.a.y=!1},
$S:0}
B.etE.prototype={
$0(){var w,v=this.a
v.f=-1
v.e=A.o.G(v.gCq()+this.b,10)
if(v.gCq()<0)v.e=v.gCq()+10
w=v.gabQ().y
w=w==null?null:A.o.am(w.a,1000)
v.x=w==null?0:w
v.agJ()},
$S:0}
B.etH.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1
w.agJ()},
$S:0}
B.etQ.prototype={
$0(){var w=this.a
return w.m(w.gcth())},
$S:0}
B.etP.prototype={
$2(d,e){var w=null,v=this.a,u=v.gabQ().y,t=u==null?w:A.o.am(u.a,1000),s=(t==null?0:t)/1000,r=v.x===0&&v.a.e?s:99
return C.b3(w,w,w,new B.brG(v.gCq(),v.f,s,r,w),A.eS)},
$S:68}
B.etO.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=C.m(14),t=C.I(h?g:A.b9,A.r,1)
return C.aH(w,C.p(w,C.v(C.a([C.W(d,g,w,w,w,20),A.tU,C.d(e,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,A.jn,A.kA,w,w,56),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.ac)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$S:1821}
B.etJ.prototype={
$0(){return this.a.aui(-1)},
$S:0}
B.etK.prototype={
$0(){return this.a.aui(1)},
$S:0}
B.etL.prototype={
$0(){return this.a.aui(0)},
$S:0}
B.etM.prototype={
$0(){var w=this.a
return w.m(new B.etI(w))},
$S:0}
B.etI.prototype={
$0(){var w=this.a
w.r=!w.r
w.agJ()},
$S:0}
B.etN.prototype={
$0(){return this.a.aX1(0)},
$S:0}
B.etD.prototype={
$0(){var w=this.a
return w.m(new B.etA(w))},
$S:0}
B.etA.prototype={
$0(){return this.a.r=!1},
$S:0}
B.etC.prototype={
$2(d,e){var w=null,v=D.nG[e].d.j(0.18),u=C.m(12),t=C.I(D.nG[e].d.j(0.6),A.r,1),s=D.nG[e]
return C.aH(w,C.p(w,C.v(C.a([C.d(s.b,w,w,w,w,w,w,A.RZ,w,w,w),C.d(s.a,w,1,A.a2,w,w,w,D.a5r,w,w,w)],x.p),A.m,w,A.b7,A.j,0,A.p),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.etB(this.a,e),w,w,w,w,w,w,!1,A.ac)},
$S:73}
B.etB.prototype={
$0(){return this.a.aX1(this.b)},
$S:0}
B.e0K.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.e0J(w,d))},
$S:134}
B.e0J.prototype={
$0(){var w=this.a,v=this.b,u=J.a8(v),t=C.aN(u.h(v,"best"))
t=t==null?null:A.k.N(t)
w.e=t==null?0:t
v=C.aN(u.h(v,"level"))
v=v==null?null:A.k.N(v)
if(v==null)v=0
w.d=v
w.f=B.fMd(v)},
$S:0}
B.e0L.prototype={
$0(){},
$S:0}
B.e0A.prototype={
$0(){var w=this.a,v=A.o.D(this.b,0,59)
w.d=v
w.f=B.fMd(v)
w.r.a7(0)
w.x=!1},
$S:0}
B.e0B.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.guS().r){C.jI()
return}q.n(0,p,"/")}else if(o==="/")q.n(0,p,"\\")
else q.W(0,p)
B.vp("click",s.c+s.d,60,0.4)
if(B.haa(r.guS(),q).b.a===r.guS().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}B.vm("laser_maze",C.E(["best",p,"level",Math.min(q,59)],x.N,x.z))
B.AQ("bell",D.aln,700,0.45)
for(q=r.guS().c,q=C.eh(q,q.r,C.a2(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.z(new C.u((A.o.G(t,7)+0.5)*p+w,(A.o.am(t,7)+0.5)*p+v),0))}}},
$S:0}
B.e0E.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.as(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aH(A.c5,C.b3(s,s,s,new B.bek(r.guS(),w,v.a,u,r.w,r.z,s),q),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.e0C(r),s,s,s,!1,A.ac),C.an(s,C.e3(C.A(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,F.aLM,s,s,s),C.d(""+u.a+"/"+r.guS().c.a+" \u2605   mirrors "+w.a+"/"+r.guS().r,s,s,s,s,s,s,O.a4V,s,s,s)],t),A.m,s,A.hH,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(B.f8q("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.bf,C.a([new B.ff(A.jr,"Next level",new B.e0D(r),A.bf,s)],t)))
return new C.am(A.X,s,A.b_,A.q,w,s)},
$S:63}
B.e0C.prototype={
$1(d){return this.a.c0I(d.b)},
$S:48}
B.e0D.prototype={
$0(){var w=this.a
return w.abS(w.d+1)},
$S:0}
B.e0F.prototype={
$0(){var w=this.a,v=w.r
return w.m(v.gqZ(v))},
$S:0}
B.e0G.prototype={
$0(){var w=this.a
return w.abS(w.d+1)},
$S:0}
B.e0H.prototype={
$0(){var w=this.a
return w.abS(w.d-1)},
$S:0}
B.e0I.prototype={
$0(){return this.a.abS(this.b)},
$S:0}
B.dcl.prototype={
$1(d){var w=this.b
return new C.u(this.a+(A.o.G(d,7)+0.5)*w,this.c+(A.o.am(d,7)+0.5)*w)},
$S:554}
B.dco.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.u(r,s):new C.u(r,r),p=new C.u(-q.a,-q.b)
r=this.c
w=t.af(0,q)
v=t.af(0,p)
$.V()
u=C.L()
u.r=(f?A.fZ:A.aK).gp(0)
u.c=7
u.d=A.bO
r.bz(w,v,u)
w=t.af(0,q)
v=t.af(0,p)
u=C.L()
u.r=A.c.gp(0)
u.c=2.4
u.d=A.bO
r.bz(w,v,u)},
$S:1823}
B.dcm.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:408}
B.dcn.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:408}
B.e12.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.e11(w,d))},
$S:134}
B.e11.prototype={
$0(){var w=C.aN(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
B.e13.prototype={
$0(){},
$S:0}
B.e0O.prototype={
$1(d){return d===0},
$S:140}
B.e0X.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.w(1,q[0],q[1],q[2],A.t)
q=C.d("ROUND "+C.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,F.a58,s,s,s)
w=r.z==="play"?A.k.dE(r.y):20
v=x.p
w=C.A(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?A.cx:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,O.a4V,s,s,s)],v),A.m,s,A.hH,A.j,0,s,s)
q=r.z==="ready"
u=q?A.du:p
t=C.m(22)
t=C.D(C.p(s,s,A.f,s,s,new C.o(u,s,C.I(A.b9,A.r,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.v(C.a([new C.C(D.bkc,w,s),C.D(C.A(C.a([C.D(new C.C(A.bT,C.v(C.a([t,A.aq,C.d(q?"TARGET":"TARGET: "+r.gcrn(),s,s,s,s,s,s,D.aMx,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),C.D(new C.C(A.bT,C.v(C.a([C.D(C.b3(s,s,s,new B.bez(r.f,s),A.eS),1),A.aq,C.d("YOURS \xb7 "+A.k.U(A.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aMx,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(B.f8q("Light Mixer","Match each colour with red, green and blue light."+q,A.b8,C.a([new B.ff(A.iN,"Start",new B.e0U(r),A.bf,s)],v)))}if(r.z==="result")w.push(B.f8q(r.Q,"Score so far: "+r.w,A.aL,C.a([new B.ff(A.jr,"Next colour",new B.e0V(r),A.bf,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(B.f8q("Finished! "+q,u,A.bf,C.a([new B.ff(A.ma,"Play again",new B.e0W(r),A.bf,s)],v)))}return new C.am(A.X,s,A.a9,A.q,w,s)},
$S:63}
B.e0U.prototype={
$0(){var w=this.a
return w.m(new B.e0Q(w))},
$S:0}
B.e0Q.prototype={
$0(){var w=this.a
w.w=w.r=0
w.auk()},
$S:0}
B.e0V.prototype={
$0(){var w=this.a
return w.m(w.gc0G())},
$S:0}
B.e0W.prototype={
$0(){var w=this.a
return w.m(new B.e0P(w))},
$S:0}
B.e0P.prototype={
$0(){var w=this.a
w.w=w.r=0
w.auk()},
$S:0}
B.e0Y.prototype={
$1(d){var w=this.a
return w.m(new B.e0T(w,d))},
$S:6}
B.e0T.prototype={
$0(){var w=A.k.U(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
B.e0Z.prototype={
$1(d){var w=this.a
return w.m(new B.e0S(w,d))},
$S:6}
B.e0S.prototype={
$0(){var w=A.k.U(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
B.e1_.prototype={
$1(d){var w=this.a
return w.m(new B.e0R(w,d))},
$S:6}
B.e0R.prototype={
$0(){var w=A.k.U(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
B.e10.prototype={
$0(){var w=this.a
return w.m(w.gc0H())},
$S:0}
B.f4V.prototype={
$0(){return D.dNi},
$S:z+95}
B.f4W.prototype={
$0(){return D.dkx},
$S:z+96}
B.f4X.prototype={
$0(){return D.dh5},
$S:z+97}
B.f4Y.prototype={
$0(){return D.djY},
$S:z+98}
B.f4Z.prototype={
$0(){return D.doT},
$S:z+99}
B.f5_.prototype={
$0(){return D.dJ1},
$S:z+100}
B.f50.prototype={
$0(){return D.dLd},
$S:z+101}
B.f51.prototype={
$0(){return D.doc},
$S:z+102}
B.cbR.prototype={
$0(){return C.a6(this.a,!1).mg()},
$S:0}
B.cbS.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.hdA(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.aZ(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.ac(0,A.G,p.j(0.4),A.dp,16)],t)
n=A.c.j(0.85)
j.push(C.aH(m,C.p(m,new C.am(A.X,m,A.a9,A.q,C.a([new C.cI(m,-6,-6,m,m,m,new C.x(r.c,m,K.RG,m,m,m,m,m,m,m,m,m),m),new C.bI(A.lk,m,m,C.v(C.a([new C.x(r.a,m,D.eTV,m,m,m,m,m,m,m,m,m),A.d5,new C.x(r.b,m,new C.F(!0,n,m,m,m,m,12,A.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.Q,0,A.p),m)],k),m),A.f,m,m,new C.o(m,m,m,new C.bv(q,q,q,q),p,new C.a5(A.ax,A.aC,A.x,o,m,m),A.n),m,v,m,m,A.bA,m,m,l),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.cbQ(d,r),m,m,m,m,m,m,!1,A.ac))}return C.c6(A.bF,j,A.bx,14,14)},
$S:155}
B.cbQ.prototype={
$0(){return C.a6(this.a,!1).ck(C.eu(new B.cbP(this.b),!1,null,x.H))},
$S:0}
B.cbP.prototype={
$1(d){return this.a.f.$0()},
$S:38}
B.exO.prototype={
$0(){var w=this.a
return w.w=w.d[w.b0c(w.f)]},
$S:0}
B.exK.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cG.ag()*7},
$S:0}
B.exJ.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bL(0,A.c3)
w.w=""},
$S:0}
B.exM.prototype={
$0(){var w=this.a
return w.m(new B.exL(w,this.b))},
$S:0}
B.exL.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cv(w,this.b)},
$S:0}
B.exN.prototype={
$1(d){return this.a.aVG(0)},
$S:2}
B.dOK.prototype={
$0(){return B.AQ("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
B.dOL.prototype={
$0(){},
$S:0}
B.dOF.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
B.dOH.prototype={
$0(){return this.a.aVI(this.b)},
$S:0}
B.dOI.prototype={
$0(){var w=this.a
return w.m(new B.dOG(w))},
$S:0}
B.dOG.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
B.dOJ.prototype={
$0(){var w=this.a
return w.aVI(w.d)},
$S:0}
B.dAe.prototype={
$2(d,e){return d+e},
$S:91}
B.dAf.prototype={
$0(){},
$S:0}
B.dA9.prototype={
$2(d,e){return d+e},
$S:91}
B.dAc.prototype={
$0(){var w=this.a
return w.m(new B.dAb(w,this.b))},
$S:0}
B.dAb.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
B.dAd.prototype={
$0(){var w=this.a
return w.m(new B.dAa(w))},
$S:0}
B.dAa.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
B.dM0.prototype={
$0(){return B.qt(this.b,this.a.d,"drawing")},
$S:0}
B.dM1.prototype={
$1(d){var w=this.a
return w.m(new B.dM_(w,d))},
$S:40}
B.dM_.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aFT(u,v,t))},
$S:0}
B.dM2.prototype={
$1(d){var w=this.a
return w.m(new B.dLZ(w,d))},
$S:18}
B.dLZ.prototype={
$0(){return A.d.gak(this.a.e).c.push(this.b.b)},
$S:0}
B.dM3.prototype={
$1(d){var w=this.a
return w.m(new B.dLY(w,d))},
$S:23}
B.dLY.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aFT(u,v,t))},
$S:0}
B.dM4.prototype={
$0(){var w=this.a
return w.m(new B.dLX(w,this.b))},
$S:0}
B.dLX.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
B.dM5.prototype={
$1(d){var w=this.a
return w.m(new B.dLW(w,d))},
$S:6}
B.dLW.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dM6.prototype={
$0(){var w=this.a
return w.m(new B.dLV(w))},
$S:0}
B.dLV.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dM7.prototype={
$0(){var w=this.a
return w.m(new B.dLU(w))},
$S:0}
B.dLU.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.dM8.prototype={
$0(){var w=this.a
return w.m(A.d.gqZ(w.e))},
$S:0}
B.dM9.prototype={
$0(){var w=this.a
return w.m(new B.dLT(w))},
$S:0}
B.dLT.prototype={
$0(){var w=this.a
w.x=D.asa[A.o.G(A.d.cJ(D.asa,w.x)+1,4)]},
$S:0}
B.e6p.prototype={
$0(){return this.a.f.L(0,this.b)},
$S:0}
B.e6q.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
B.AQ("bell",C.a([0,4,7],w),500,0.45)
u.m(new B.e6o(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)B.AQ("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
B.e6o.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a7(0)},
$S:0}
B.e6r.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new B.e6n(w))},
$S:11}
B.e6n.prototype={
$0(){var w=this.a
w.f.a7(0)
w.x=!1},
$S:0}
B.e6v.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aH(w,C.mI(new B.e6t(v,e),w,A.bb,A.pb,w,new C.bm(0,u,x.Y),x.i),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.e6u(v,e),w,w,w,w,w,w,!1,A.ac)},
$S:73}
B.e6u.prototype={
$0(){return this.a.c1C(this.b)},
$S:0}
B.e6t.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dj(),m=n.a
m.$flags&2&&C.ah(m)
m[11]=0.001
n.fm(3.141592653589793*e)
m=C.m(16)
w=o?p:D.bMj
if(o)v=q.a.r.t(0,q.b)?A.bf.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.I(u.r.t(0,t)?A.bf:A.b9,A.r,1)
if(o){r=C.dj()
r.fm(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fq(A.A,C.d(u[t],p,p,p,p,p,p,D.eRk,p,p,p),p,r,!0)
u=r}else u=D.f9X
return C.fq(A.A,C.p(A.A,u,A.f,p,p,new C.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:128}
B.e6w.prototype={
$0(){var w=this.a
return w.m(new B.e6s(w,this.b))},
$S:0}
B.e6s.prototype={
$0(){var w=this.a
w.d=this.b.a
w.apL()},
$S:0}
B.e6x.prototype={
$0(){var w=this.a
return w.m(w.gbEk())},
$S:0}
B.eeU.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
B.eeV.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
B.eeS.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eeT.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.eeR(w))},
$S:11}
B.eeR.prototype={
$0(){return this.a.f=-1},
$S:0}
B.eeW.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
B.eeX.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
B.eeY.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aVH()},
$S:11}
B.eeZ.prototype={
$0(){return this.a.c1I(this.b)},
$S:0}
B.etb.prototype={
$1(d){return C.t(d.h(0,1))+","},
$S:70}
B.etk.prototype={
$3$big(d,e,f){var w=null,v=C.D(C.d(d,w,1,A.a2,w,w,w,C.l(w,w,A.aP,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.C(A.kA,C.A(C.a([v,A.ab,new C.dl(1,A.ch,C.f1(A.A,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.ec),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1825}
B.etg.prototype={
$1(d){return this.a.m(new B.etf())},
$S:2}
B.etf.prototype={
$0(){},
$S:0}
B.eth.prototype={
$0(){var w=this.a
return w.m(new B.ete(w,this.b))},
$S:0}
B.ete.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eti.prototype={
$1(d){var w=this.a
return w.m(new B.etd(w,d))},
$S:6}
B.etd.prototype={
$0(){return this.a.f=A.k.U(this.b)},
$S:0}
B.etj.prototype={
$0(){var w=this.a
return w.m(new B.etc(w))},
$S:0}
B.etc.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.e54.prototype={
$0(){},
$S:0}
B.e55.prototype={
$0(){},
$S:0}
B.e4Y.prototype={
$0(){var w=this.a
return w.m(new B.e4X(w))},
$S:0}
B.e4X.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.c0(u,1,!1,x.S)
w.r=0.9
B.a6D("hat",0.6)},
$S:0}
B.e4Z.prototype={
$0(){var w=this.a
return w.m(new B.e4W(w))},
$S:0}
B.e4W.prototype={
$0(){this.a.y=1.1
B.l5("bell",36,200,0.4)},
$S:0}
B.e5_.prototype={
$0(){var w=this.a
return w.m(new B.e4V(w))},
$S:0}
B.e4V.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aD(Math.max(v,u)-t+1)
w.as=u
B.l5("bell",12+A.o.G(u,12),500,0.5)},
$S:0}
B.e50.prototype={
$0(){var w=this.a
return w.m(new B.e4U(w,this.b))},
$S:0}
B.e4U.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.e51.prototype={
$1(d){var w=this.a
return w.m(new B.e4T(w,d))},
$S:6}
B.e4T.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.U(this.b),r=J.e1(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
B.e52.prototype={
$1(d){var w=this.a
return w.m(new B.e4S(w,d))},
$S:6}
B.e4S.prototype={
$0(){return this.a.z=A.k.U(this.b)},
$S:0}
B.e53.prototype={
$1(d){var w=this.a
return w.m(new B.e4R(w,d))},
$S:6}
B.e4R.prototype={
$0(){return this.a.Q=A.k.U(this.b)},
$S:0}
B.co0.prototype={
$0(){return C.a6(this.a,!1).mg()},
$S:0}
B.co1.prototype={
$0(){var w=this.a
return B.ha1(this.b,w.c,w.e,w.d)},
$S:0}
B.fC_.prototype={
$1(d){var w,v=null,u=C.m(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.eK_,v,v,v)
return C.eq(C.a([C.bJ(!1,D.f_U,v,v,!0,v,v,new B.fBZ(d),v,v)],x.p),v,v,D.rH,w,v,v,v,new C.b7(u,new C.az(s,1,A.r,-1)),t,v)},
$S:19}
B.fBZ.prototype={
$0(){C.a6(this.a,!1).M(null)
return null},
$S:0}
B.cnX.prototype={
$0(){C.eL()
this.a.e.$0()},
$S:0}
B.cnW.prototype={
$0(){C.eL()
this.a.e.$0()},
$S:0}
B.co2.prototype={
$0(){C.eL()
this.a.e.$0()},
$S:0}
B.cnY.prototype={
$0(){var w=this.a
A.d.W(w.fd$,this.b.b9())
if(w.c!=null)this.c.$0()},
$S:0}
B.co_.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.kE$.a)/1e6,0,0.04)
w.kE$=d
w.fH$=A.o.am(v,1000)
w.l8(u)
if(w.c!=null)w.m(new B.cnZ())},
$S:8}
B.cnZ.prototype={
$0(){},
$S:0}
B.cbM.prototype={
$2(d,e){var w,v,u,t
for(w=e.length,v=this.a,u=v.$flags|0,t=0;t<w;++t){u&2&&C.ah(v,9)
v.setUint8(d+t,e.charCodeAt(t))}},
$S:408}
B.cbO.prototype={
$0(){var w=this
return B.hrB(w.a,w.b,w.c,w.d,w.e)},
$S:335}
B.cbN.prototype={
$0(){var w=this
return B.l5(w.a,w.b,w.c,w.d)},
$S:1}
B.dRs.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dRr(w,d))},
$S:z+104}
B.dRr.prototype={
$0(){return this.a.clP(this.b)},
$S:0}
B.dQV.prototype={
$0(){var w,v,u,t=this.a,s=J.a8(t),r=s.gJ(t),q=new Float64Array(r*4)
for(w=0;w<s.gJ(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:1826}
B.dQT.prototype={
$0(){return this.a.id=D.a0o},
$S:0}
B.dQU.prototype={
$0(){var w=this.b.a,v=C.U(w).k("a3<1>")
v=C.oS(new C.a3(w,new B.dQS(this.c),v),6,v.k("G.E"))
w=C.B(v,C.a2(v).k("G.E"))
return this.a.id=w},
$S:0}
B.dQS.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+105}
B.dQR.prototype={
$1(d){var w=null,v=C.ci(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,A.af,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.q,w,A.z,w,w,w,w,A.aj)
return C.eq(C.a([C.bJ(!1,A.pR,w,w,!0,w,w,new B.dQQ(d),w,w)],x.p),w,w,D.rH,v,w,w,w,w,D.fa0,w)},
$S:19}
B.dQQ.prototype={
$0(){C.a6(this.a,!1).M(null)
return null},
$S:0}
B.dRd.prototype={
$0(){return B.qt(this.b,this.a.d,"earth")},
$S:0}
B.dRe.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.as(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gUA()
r=p.z
o=C.a([C.aH(A.c5,C.b3(q,q,q,new B.bcM(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dR1(p),new B.dR2(p),new B.dR3(p),q,q,q,q,q,q,q,new B.dR4(p),q,q,q,!1,A.ac)],x.p)
if(p.r==null)o.push(A4.a8Y)
w=this.b
if(w!=null)o.push(C.an(8,p.c2j(w),q,q,10,10,q,q))
return new C.en(new C.am(A.X,q,A.b_,A.q,o,q),p.d)},
$S:181}
B.dR2.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:242}
B.dR3.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gUA()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:220}
B.dR1.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gUA()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:616}
B.dR4.prototype={
$1(d){var w=this.a,v=w.c2m(d.b)
if(v!=null)w.m(new B.dQW(w,v))
else w.m(new B.dQX(w))},
$S:48}
B.dQW.prototype={
$0(){return this.a.auO(this.b)},
$S:0}
B.dQX.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dRf.prototype={
$0(){var w=this.a
w.e.bL(0,A.c3)
w.m(new B.dR0(w,this.b))},
$S:0}
B.dR0.prototype={
$0(){var w=this.a
w.id=D.a0o
w.auO(this.b)},
$S:0}
B.dRj.prototype={
$0(){var w=this.a
return w.m(new B.dRc(w))},
$S:0}
B.dRc.prototype={
$0(){var w=this.a
w.fx=null
w.aqV(15,w.y,1)},
$S:0}
B.dRk.prototype={
$0(){var w=this.a
return w.m(new B.dRb(w,this.b))},
$S:0}
B.dRb.prototype={
$0(){var w=this.b.b
return this.a.aqV(w.a,w.b,w.c)},
$S:0}
B.dRl.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new B.dRa(w,v))},
$S:0}
B.dRa.prototype={
$0(){var w=this.b.a
return this.a.auO(w[A.cG.aD(w.length)])},
$S:0}
B.dRm.prototype={
$1(d){var w=this.a
return w.m(new B.dR9(w,d))},
$S:6}
B.dR9.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
B.dRn.prototype={
$1(d){var w=this.a
return w.m(new B.dR8(w,d))},
$S:6}
B.dR8.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.dRo.prototype={
$1(d){var w=this.a
return w.m(new B.dR7(w,d))},
$S:6}
B.dR7.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.dRp.prototype={
$0(){var w=this.a
return w.m(new B.dR6(w))},
$S:0}
B.dR6.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.dRq.prototype={
$0(){var w=this.a
return w.m(new B.dR5(w))},
$S:0}
B.dR5.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
B.dRg.prototype={
$0(){var w=this.a
return w.m(new B.dR_(w))},
$S:0}
B.dR_.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
B.dRh.prototype={
$0(){var w=this.a
return w.m(new B.dQZ(w))},
$S:0}
B.dQZ.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
B.dRi.prototype={
$0(){var w=this.a
return w.m(new B.dQY(w))},
$S:0}
B.dQY.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
B.dQP.prototype={
$2(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aLe,w,w,w),A.tU,C.d(e,w,2,A.a2,w,w,w,A.RW,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:137}
B.dQO.prototype={
$0(){var w=this.a
return w.m(new B.dQN(w))},
$S:0}
B.dQN.prototype={
$0(){return this.a.fx=null},
$S:0}
B.d85.prototype={
$0(){var w=null,v=C.ig(w,w,w,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.I,w,w,!0,w,w,w,w,w,D.cMW,w,w),this.a),A.a5,A.ci,w,A.eq,A.cg)
v.eP()
return v},
$S:293}
B.d86.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.u(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1827}
B.f4O.prototype={
$0(){return D.dmu},
$S:z+106}
B.f4P.prototype={
$0(){return D.dKW},
$S:z+107}
B.f4Q.prototype={
$0(){return D.dmw},
$S:z+108}
B.f4R.prototype={
$0(){return D.dgS},
$S:z+109}
B.f4S.prototype={
$0(){return D.dms},
$S:z+110}
B.f4T.prototype={
$0(){return D.dJ2},
$S:z+111}
B.f4U.prototype={
$0(){return D.dJ0},
$S:z+112}
B.etZ.prototype={
$0(){return C.a6(this.a,!1).mg()},
$S:0}
B.eu_.prototype={
$0(){var w=this.a
return w.m(new B.etY(w))},
$S:0}
B.etY.prototype={
$0(){var w=this.a
return w.d=A.o.G(w.gaP_()+1,16)},
$S:0}
B.eu0.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.hdz(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.aZ(18,18)
q=s.d
p=new C.az(q.j(0.5),1,A.r,-1)
o=C.a([q.j(0.28),D.baw],u)
k.push(C.aH(n,C.p(n,C.v(C.a([C.W(s.c,q,n,n,n,30),A.P,new C.x(s.a,n,D.eOm,n,A.L,n,n,n,n,2,n,n),A.d5,new C.x(s.b,n,D.eTk,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.b7,A.j,0,A.p),A.f,n,n,new C.o(n,n,new C.bY(p,p,p,p),new C.bv(r,r,r,r),n,new C.a5(A.ax,A.aC,A.x,o,n,n),A.n),n,v,n,n,A.cm,n,n,m),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.etX(d,s),n,n,n,n,n,n,!1,A.ac))}return C.c6(A.fI,k,A.bx,10,10)},
$S:155}
B.etX.prototype={
$0(){return C.a6(this.a,!1).ck(C.eu(new B.etW(this.b),!1,null,x.H))},
$S:0}
B.etW.prototype={
$1(d){return this.a.e.$0()},
$S:38}
B.em7.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
B.emi.prototype={
$0(){return B.qt(this.b,this.a.d,"solar-system")},
$S:0}
B.emj.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.as(e.b,e.d)
u.ch=t
t=C.a([C.aH(A.c5,C.b3(v,v,v,new B.bp2(u,v),t),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.emf(u),new B.emg(u),v,v,v,v,v,v,v,new B.emh(u),v,v,v,!1,A.ac)],x.p)
w=this.b
if(w!=null)t.push(C.an(8,u.c2o(w),v,v,10,10,v,v))
return new C.en(new C.am(A.X,v,A.b_,A.q,t,v),u.d)},
$S:181}
B.emf.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:242}
B.emg.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.af(0,d.a)},
$S:220}
B.emh.prototype={
$1(d){var w=this.a,v=w.c2r(d.b)
if(v!=null)w.aW2(v)},
$S:48}
B.emk.prototype={
$0(){var w=this.a
return w.m(new B.eme(w))},
$S:0}
B.eme.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
B.eml.prototype={
$0(){return this.a.aW2(this.b)},
$S:0}
B.emm.prototype={
$1(d){var w=this.a
return w.m(new B.emd(w,d))},
$S:6}
B.emd.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.emn.prototype={
$1(d){var w=this.a
return w.m(new B.emc(w,d))},
$S:6}
B.emc.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.emo.prototype={
$0(){var w=this.a
return w.m(new B.emb(w))},
$S:0}
B.emb.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
B.emp.prototype={
$0(){var w=this.a
return w.m(new B.ema(w))},
$S:0}
B.ema.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.emq.prototype={
$0(){var w=this.a
return w.m(new B.em9(w))},
$S:0}
B.em9.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.emr.prototype={
$0(){var w=this.a
return w.m(new B.em8(w))},
$S:0}
B.em8.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.em6.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.a9(d/365.25,w)+" Earth years"}else w=A.k.a9(d,0)+" Earth days"
return w},
$S:281}
B.em5.prototype={
$2(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aLe,w,w,w),A.tU,C.d(e,w,2,A.a2,w,w,w,A.RW,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:137}
B.em4.prototype={
$0(){var w=this.a
return w.m(new B.em3(w))},
$S:0}
B.em3.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
B.eO8.prototype={
$0(){var w=null,v=C.ig(w,w,w,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.I,w,w,!0,w,w,w,w,w,F.Ot,w,w),this.a),A.a5,A.ci,w,A.eq,A.cg)
v.eP()
return v},
$S:293}
B.eO9.prototype={
$1(d){return d.c>0},
$S:z+14}
B.eOa.prototype={
$1(d){return d.c>0},
$S:z+14}
B.dRw.prototype={
$0(){},
$S:0}
B.dRZ.prototype={
$1(d){return d!=null},
$S:425}
B.dRL.prototype={
$0(){var w=this.a
return w.m(new B.dRC(w,this.b))},
$S:0}
B.dRC.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.dRM.prototype={
$0(){var w=this.a
return w.m(new B.dRB(w))},
$S:0}
B.dRB.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dRN.prototype={
$0(){var w=this.a
return w.m(new B.dRK(w))},
$S:0}
B.dRK.prototype={
$0(){return this.a.f=!0},
$S:0}
B.dRR.prototype={
$0(){var w=this.a
return w.m(new B.dRJ(w))},
$S:0}
B.dRJ.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.dRS.prototype={
$1(d){var w=this.a
return w.m(new B.dRI(w,d))},
$S:6}
B.dRI.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dRT.prototype={
$0(){var w=this.a
return w.m(w.gcoW())},
$S:0}
B.dRU.prototype={
$1(d){var w=this.a
return w.m(new B.dRH(w,d))},
$S:6}
B.dRH.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.dRV.prototype={
$1(d){var w=this.a
return w.m(new B.dRG(w,d))},
$S:6}
B.dRG.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dRW.prototype={
$1(d){var w=this.a
return w.m(new B.dRF(w,d))},
$S:6}
B.dRF.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.dRX.prototype={
$1(d){var w=this.a
return w.m(new B.dRE(w,d))},
$S:6}
B.dRE.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.dRY.prototype={
$0(){var w=this.a
return w.m(new B.dRD(w))},
$S:0}
B.dRD.prototype={
$0(){return this.a.ay=4},
$S:0}
B.dRO.prototype={
$0(){var w=this.a
return w.m(new B.dRA(w))},
$S:0}
B.dRA.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.dRP.prototype={
$0(){var w=this.a
return w.m(new B.dRz(w))},
$S:0}
B.dRz.prototype={
$0(){return this.a.ay=9},
$S:0}
B.dRQ.prototype={
$0(){var w=this.a
return w.m(new B.dRy(w))},
$S:0}
B.dRy.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.dRv.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bZ(0,C.bW(g,new C.o(D.b9a,g,g,C.m(20),g,g,A.n),A.bc),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.xU[q]
n=C.b_(o.d)
o=C.v(C.a([new C.x(o.a,g,new C.F(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.x(C.t(D.xU[q].b)+" m/s\xb2",g,D.eSG,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=C.p(g,g,A.f,A.du,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.W(L.Y8,C.b_(D.xU[q].d),g,g,g,22):C.p(g,g,A.f,g,g,new C.o(C.b_(D.xU[q].d),g,g,g,C.a([new C.ac(0,A.G,C.b_(D.xU[q].d).j(0.6),A.J,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=C.p(g,g,A.f,C.b_(D.xU[q].d).j(0.6),g,g,g,3,g,A.fl,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.a9(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,C.a([new C.cI(p,8,g,g,f,g,o,g),new C.cI(n-0.5,54,g,e,g,g,m,g),new C.cI(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cI(p,g,g,8,f,g,C.v(C.a([j,A.av,new C.x(i,g,A.u_,g,g,g,g,g,g,g,g,g),new C.x(h,g,D.eLa,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.e2(v,new B.dRu()))a1.push(D.aZI)
return new C.am(A.X,g,A.a9,A.q,a1,g)},
$S:63}
B.dRu.prototype={
$1(d){return d==null},
$S:425}
B.dRx.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.m(8)
p=C.p(v,v,A.f,v,v,new C.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.dh(v,v,v,v,A.bb,new C.o(v,v,v,C.m(8),v,new C.a5(A.a3,A.a7,A.x,C.a([C.b_(t).j(0.9),C.b_(t).j(0.4)],x.O),v,v),A.n),A.i5,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.a9(r,1):B.FJ(r)
u=u.ax*9.81/s
u=u<10?A.k.a9(u,2):A.k.a9(u,0)
return new C.am(A.X,v,A.a9,A.q,C.a([p,t,C.an(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.eR5,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:63}
B.dRt.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b3(v,v,v,new B.b81(new C.u(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.at)
o=A.w.j(0.55)
p=C.m(14)
q=C.I(A.bH,A.r,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.bf
else u=A.a.t(u,"escapes")?A.aY:A.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.a9(Math.sqrt(58.86870477034412),1)
s=A.k.a9(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+B.FJ(A.k.D(r.cx.gcj()-6371,0,9e9))+" km":""
w=x.p
return new C.am(A.X,v,A.b_,A.q,C.a([n,C.an(v,C.p(v,C.v(C.a([u,A.bB,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,E.aMN,v,v,v)],w),A.F,v,A.e,A.Q,0,A.p),A.f,v,v,new C.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bT,v,v,v),v,v,12,12,8,v)],w),v)},
$S:63}
B.ef1.prototype={
$0(){return B.qt(this.b,this.a.d,"size-compare")},
$S:0}
B.ef2.prototype={
$0(){var w=this.a
return w.m(new B.ef0(w,this.b))},
$S:0}
B.ef0.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.ef3.prototype={
$0(){var w=this.a
return w.m(new B.ef_(w,this.b))},
$S:0}
B.ef_.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eMi.prototype={
$3(d,e,f){var w,v,u=this.a
$.V()
w=C.L()
w.r=f.j(0.2).gp(0)
w.z=new C.hp(A.G,Math.max(2,e*0.18))
u.ae(d,e*1.12,w)
w=C.L()
v=C.ar(f,A.w,0.6)
v.toString
w.sar(new C.bS(P.pZ,0.5,A.x,null,0,C.a([A.c,f,v],x.O),E.a_C,null).av(0,C.bT(d,e)))
u.ae(d,e,w)},
$S:625}
B.dzG.prototype={
$1(d){return d.e<=0},
$S:z+114}
B.dzu.prototype={
$1(d){return d.b},
$S:z+76}
B.dzv.prototype={
$0(){return B.qt(this.b,this.a.d,"black-hole")},
$S:0}
B.dzw.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.as(e.b,e.d)
p.Q=o
o=C.aH(A.c5,C.b3(q,q,q,new B.b7q(p,q),o),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dzs(p),q,q,q,q,q,q,q,q,q,new B.dzt(p),q,q,q,q,!1,A.ac)
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bH,A.r,1)
t=p.r
if(t<1000)t=A.k.a9(t,t<10?1:0)+" Suns"
else t=B.ffY(t)+" Suns"
t=p.acy("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.an(q,C.p(q,C.A(C.a([t,p.acy("EDGE WIDTH",(s<100?A.k.a9(s,1):B.FJ(s))+" km"),p.acy("TIME",A.k.a9(this.b*100,0)+"%"),p.acy("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bT,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.e_t)
return new C.en(new C.am(A.X,q,A.b_,A.q,r,q),p.d)},
$S:181}
B.dzt.prototype={
$1(d){return this.a.aW3(d.b)},
$S:23}
B.dzs.prototype={
$1(d){if(A.cG.ag()<0.12)this.a.aW3(d.b)},
$S:18}
B.dzy.prototype={
$1(d){var w=this.a
return w.m(new B.dzr(w,d))},
$S:6}
B.dzr.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dzz.prototype={
$0(){var w=this.a
return w.m(new B.dzq(w))},
$S:0}
B.dzq.prototype={
$0(){return this.a.r=10},
$S:0}
B.dzA.prototype={
$0(){var w=this.a
return w.m(new B.dzp(w))},
$S:0}
B.dzp.prototype={
$0(){return this.a.r=21},
$S:0}
B.dzB.prototype={
$0(){var w=this.a
return w.m(new B.dzo(w))},
$S:0}
B.dzo.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dzC.prototype={
$0(){var w=this.a
return w.m(new B.dzn(w))},
$S:0}
B.dzn.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dzD.prototype={
$0(){var w=this.a
return w.m(new B.dzm(w))},
$S:0}
B.dzm.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dzE.prototype={
$0(){var w=this.a
return w.m(new B.dzl(w))},
$S:0}
B.dzl.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dzF.prototype={
$0(){var w=this.a
return w.m(new B.dzk(w))},
$S:0}
B.dzk.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dzx.prototype={
$0(){var w=this.a
return w.m(new B.dzj(w))},
$S:0}
B.dzj.prototype={
$0(){var w=this.a
A.d.a7(w.z)
w.as=0},
$S:0}
B.dQ3.prototype={
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
$S:1828}
B.dPU.prototype={
$0(){return B.qt(this.b,this.a.d,"galaxy")},
$S:0}
B.dPV.prototype={
$0(){var w=this.a
return w.m(new B.dPT(w,this.b))},
$S:0}
B.dPT.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.Yr()},
$S:0}
B.dPW.prototype={
$0(){var w=this.a
return w.m(new B.dPS(w))},
$S:0}
B.dPS.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.Yr()}w.coO()},
$S:0}
B.dPX.prototype={
$1(d){var w=this.a
return w.m(new B.dPR(w,d))},
$S:6}
B.dPR.prototype={
$0(){var w=this.a
w.f=A.k.U(this.b)
w.Yr()},
$S:0}
B.dPY.prototype={
$1(d){var w=this.a
return w.m(new B.dPQ(w,d))},
$S:6}
B.dPQ.prototype={
$0(){var w=this.a
w.r=this.b
w.Yr()},
$S:0}
B.dPZ.prototype={
$1(d){var w=this.a
return w.m(new B.dPP(w,d))},
$S:6}
B.dPP.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dQ_.prototype={
$1(d){var w=this.a
return w.m(new B.dPO(w,d))},
$S:6}
B.dPO.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dQ0.prototype={
$0(){var w=this.a
return w.m(new B.dPN(w))},
$S:0}
B.dPN.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dQ1.prototype={
$0(){var w=this.a
return w.m(new B.dPM(w))},
$S:0}
B.dPM.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.dQ2.prototype={
$0(){var w=this.a
return w.m(new B.dPL(w))},
$S:0}
B.dPL.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.d5e.prototype={
$6(d,e,f,g,h,i){return g.af(0,new C.u((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1829}
B.eeI.prototype={
$0(){return B.qt(this.b,this.a.d,"seasons-moon")},
$S:0}
B.eeJ.prototype={
$0(){var w=this.a
return w.m(new B.eeH(w))},
$S:0}
B.eeH.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.eeK.prototype={
$0(){var w=this.a
return w.m(new B.eeG(w))},
$S:0}
B.eeG.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.eeL.prototype={
$0(){var w=this.a
return w.m(new B.eeF(w))},
$S:0}
B.eeF.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.eeM.prototype={
$0(){var w=this.a
return w.m(new B.eeE(w))},
$S:0}
B.eeE.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.eeN.prototype={
$1(d){var w=this.a
return w.m(new B.eeD(w,d))},
$S:6}
B.eeD.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.eeO.prototype={
$1(d){var w=this.a
return w.m(new B.eeC(w,d))},
$S:6}
B.eeC.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eeP.prototype={
$1(d){var w=this.a
return w.m(new B.eeB(w,d))},
$S:6}
B.eeB.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eeQ.prototype={
$1(d){var w=this.a
return w.m(new B.eeA(w,d))},
$S:6}
B.eeA.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=B.aKE.prototype
w.brZ=w.q
w=B.aJU.prototype
w.br8=w.q
w=B.aIW.prototype
w.bq8=w.q
w=B.aIX.prototype
w.bq9=w.q
w=B.aJ1.prototype
w.bqe=w.q
w=B.aKJ.prototype
w.bs3=w.q
w=B.aJS.prototype
w.br6=w.q
w=B.aK0.prototype
w.brf=w.q
w=B.aK6.prototype
w.brl=w.q
w=B.aJ_.prototype
w.bqc=w.q
w=B.aJP.prototype
w.br3=w.q
w=B.aK3.prototype
w.bri=w.q
w=B.aJN.prototype
w.br1=w.q
w=B.aJO.prototype
w.br2=w.q
w=B.aJd.prototype
w.bqr=w.q
w=B.aIS.prototype
w.bq4=w.q
w=B.aJl.prototype
w.bqz=w.q
w=B.avs.prototype
w.bng=w.q
w=B.avt.prototype
w.bnh=w.q
w=B.aHo.prototype
w.box=w.q
w=B.aJa.prototype
w.bqn=w.q
w=B.aK7.prototype
w.brm=w.q
w=B.aJC.prototype
w.bqR=w.q
w=B.aJD.prototype
w.bqS=w.q
w=B.aIY.prototype
w.bqa=w.q
w=B.aJg.prototype
w.bqu=w.q
w=B.aJL.prototype
w.br_=w.q
w=B.aKe.prototype
w.brt=w.q
w=B.aJm.prototype
w.bqB=w.q
w=B.aJn.prototype
w.bqC=w.q
w=B.aJo.prototype
w.bqD=w.q
w=B.aJX.prototype
w.brb=w.q
w=B.aK_.prototype
w.bre=w.q
w=B.aIV.prototype
w.bq7=w.q
w=B.aJj.prototype
w.bqx=w.q
w=B.aJW.prototype
w.bra=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_0i,t=a._instance_1i,s=a.installInstanceTearOff
w(B.aC5.prototype,"gatP","bZ9",0)
var r
v(r=B.aAx.prototype,"gc5O","c5P",26)
w(r,"gbZF","aUI",0)
w(r=B.axn.prototype,"gc_G","x3",0)
w(r,"gHi","nD",0)
v(r,"gHL","HM",5)
w(r,"gccT","ccU",0)
w(r,"gcrw","crx",0)
w(r=B.aDg.prototype,"gHi","nD",0)
v(r,"gHL","HM",5)
w(r,"gc_H","c_I",0)
w(r=B.axD.prototype,"gHi","nD",0)
v(r,"gHL","HM",5)
u(r,"gc_D","c_E",0)
w(r=B.ayw.prototype,"gHi","nD",0)
v(r,"gHL","HM",5)
w(B.aAA.prototype,"gc_J","c_K",0)
t(B.aAR.prototype,"gc_P","c_Q",33)
w(r=B.aF3.prototype,"gcow","cox",0)
w(r,"gccn","adZ",0)
w(r,"gca5","ca6",0)
w(r,"gc_O","abA",3)
w(r=B.aC4.prototype,"gbBt","a7h",3)
w(r,"gc9n","aXI",0)
w(r,"gcd4","ae6",3)
u(r,"gc_S","abB",3)
w(B.aCi.prototype,"gbSi","bSj",0)
w(r=B.aBY.prototype,"gcor","cos",0)
w(r,"gbBO","bBP",0)
w(r=B.aAz.prototype,"gb0M","axd",0)
v(r,"gc_Y","XQ",78)
w(r,"gc_X","abD",3)
v(r=B.aBX.prototype,"gceZ","avY",82)
v(r,"gcl5","ax9",21)
w(r,"gbFL","aNC",0)
v(r=B.aBV.prototype,"gcvl","ah6",21)
u(r,"gc0h","aug",0)
w(r,"gchd","che",0)
v(r=B.aB2.prototype,"gc0i","c0j",84)
w(r,"gc0k","c0l",0)
u(r=B.a2N.prototype,"gqZ","a7",0)
v(r,"gcKB","akQ",1)
v(r,"gcH9","Kx",1)
w(r,"gcME","bds",0)
s(B.agN.prototype,"gc0p",0,5,null,["$5"],["pI"],88,0,0)
w(r=B.aB3.prototype,"gc0q","c0r",0)
w(r,"gcfK","aes",3)
w(r,"gc63","acL",3)
w(r,"gcmE","afy",3)
w(r=B.aCj.prototype,"gaVj","c0v",0)
w(r,"gcth","agJ",0)
w(r=B.aBH.prototype,"gc0G","auk",0)
w(r,"gc0H","aVk",0)
w(r=B.aCv.prototype,"gc1D","c1E",0)
u(r,"gc1B","aVG",0)
w(B.aBR.prototype,"gbEk","apL",0)
u(B.aC9.prototype,"gc1F","c1G",0)
v(r=B.aBe.prototype,"gc2k","c2l",103)
w(r,"gbJ4","bJ5",0)
w(r=B.aBf.prototype,"gcoW","coX",0)
w(r,"gc2p","c2q",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(C.aC,[B.aw,B.vu,B.fe,B.GO,B.a80,B.GU,B.aSQ,B.Om,B.ai_,B.F0,B.ul,B.aPM,B.a1v,B.b7t,B.bXT,B.pj,B.b5S,B.Eu,B.a2M,B.aSS,B.By,B.ced,B.DV,B.xr,B.Bq,B.n2,B.b8b,B.zG,B.bpK,B.pE,B.ql,B.Bu,B.XH,B.acW,B.ZV,B.BF,B.a9S,B.aa8,B.ac3,B.EO,B.biK,B.Oz,B.Ze,B.a9Z,B.aar,B.EK,B.abg,B.abL,B.rL,B.b73,B.aPC,B.e5,B.rY,B.a8A,B.a9E,B.a2N,B.mh,B.b8c,B.fH,B.uA,B.wP,B.lS,B.x3,B.aU4,B.br4,B.aFT,B.mk,B.a9k,B.a9l,B.uy,B.NQ,B.xp,B.NP,B.br_,B.Oh,B.ad0])
u(C.i6,[B.bTx,B.bTy,B.bTw,B.bTz,B.bTA,B.fC7,B.cjy,B.cjz,B.eKO,B.eKN,B.eKK,B.eKL,B.eKM,B.fi2,B.f9s,B.ffj,B.ffk,B.fi_,B.fi0,B.dYM,B.dZ4,B.edG,B.edd,B.ede,B.edf,B.edg,B.edh,B.edi,B.edj,B.edk,B.edb,B.edc,B.eda,B.edB,B.edC,B.edD,B.dzL,B.dzN,B.dzQ,B.dA0,B.bXU,B.bXV,B.ffr,B.fCr,B.fdY,B.fe_,B.fe0,B.fdZ,B.f1L,B.fe6,B.fe2,B.fe5,B.fe4,B.c3y,B.c3A,B.eTt,B.fc7,B.fc6,B.d_A,B.d_C,B.d_S,B.eEr,B.eEz,B.eEA,B.d2x,B.d2H,B.d2I,B.d2K,B.d9B,B.d9M,B.d9L,B.d9O,B.fev,B.feu,B.fet,B.fe1,B.ffI,B.f40,B.f41,B.f42,B.f49,B.f4a,B.f4b,B.dCi,B.dC_,B.dCj,B.dBV,B.dBQ,B.dBS,B.dBY,B.dCa,B.dC8,B.dC9,B.dC7,B.dC4,B.dC6,B.eLN,B.eLu,B.eLB,B.eLK,B.eLo,B.dc2,B.dc3,B.dc_,B.dc0,B.dc1,B.dc4,B.dc5,B.dc6,B.dc7,B.dc8,B.dc9,B.dca,B.dcb,B.dcc,B.ecC,B.ecD,B.ecE,B.ecF,B.ecA,B.ecB,B.ed6,B.ecJ,B.ecL,B.ecv,B.ed2,B.ed0,B.ed1,B.ed_,B.ecZ,B.ecx,B.emS,B.emQ,B.emE,B.emI,B.emD,B.emJ,B.emK,B.emO,B.ett,B.etz,B.e9H,B.e9I,B.e9t,B.e9u,B.e9s,B.e9x,B.e9z,B.e9A,B.esT,B.esU,B.esS,B.esG,B.esH,B.esF,B.esy,B.esz,B.esN,B.esO,B.esP,B.esQ,B.esR,B.dBr,B.dBs,B.dBt,B.dBk,B.dBn,B.cH2,B.e5a,B.e5z,B.e5e,B.e5m,B.e5n,B.e5l,B.e5u,B.e9a,B.e9f,B.e8z,B.e8h,B.e8t,B.e8r,B.e8p,B.e8q,B.e8o,B.dJz,B.dJn,B.dJp,B.dJx,B.dJs,B.dMo,B.dMg,B.dMh,B.dMi,B.d_x,B.d_z,B.d_y,B.dxP,B.dxQ,B.dxI,B.dxG,B.czA,B.dQr,B.dQs,B.dQn,B.dQo,B.d7h,B.d7i,B.dBO,B.dBw,B.dBF,B.dBG,B.dBL,B.dBM,B.bJ_,B.bJa,B.bJ5,B.bJb,B.bJd,B.bJ0,B.bIZ,B.bJi,B.bJ6,B.bJ9,B.bJ8,B.bJ7,B.bEr,B.fcP,B.ftJ,B.ftM,B.ftK,B.bE8,B.bE3,B.bE2,B.bEq,B.bEi,B.bEj,B.bEh,B.bEk,B.bDT,B.bDV,B.bDR,B.bDS,B.bDJ,B.bDK,B.f4c,B.f4d,B.f4e,B.f4_,B.f4f,B.f3Z,B.f4g,B.f43,B.f3Y,B.f44,B.f3X,B.f45,B.f3W,B.f46,B.f3U,B.f3V,B.f47,B.f3S,B.f3T,B.f48,B.f3R,B.dMF,B.dMG,B.dMv,B.dMr,B.dME,B.dMJ,B.cx6,B.f53,B.fya,B.fyb,B.fd0,B.fBz,B.fBA,B.etO,B.e0K,B.e0C,B.dcl,B.dco,B.e12,B.e0O,B.e0Y,B.e0Z,B.e1_,B.cbP,B.exN,B.dM1,B.dM2,B.dM3,B.dM5,B.e6t,B.etb,B.etk,B.etg,B.eti,B.e51,B.e52,B.e53,B.fC_,B.co_,B.dRs,B.dQS,B.dQR,B.dR2,B.dR3,B.dR1,B.dR4,B.dRm,B.dRn,B.dRo,B.etW,B.emf,B.emg,B.emh,B.emm,B.emn,B.em6,B.eO9,B.eOa,B.dRZ,B.dRS,B.dRU,B.dRV,B.dRW,B.dRX,B.dRu,B.eMi,B.dzG,B.dzu,B.dzt,B.dzs,B.dzy,B.dQ3,B.dPX,B.dPY,B.dPZ,B.dQ_,B.d5e,B.eeN,B.eeO,B.eeP,B.eeQ])
u(C.kC,[B.bTv,B.cjx,B.fi1,B.dYR,B.dYP,B.edm,B.edz,B.fgp,B.fgq,B.fgr,B.fe3,B.eTs,B.d_D,B.eEw,B.d2w,B.ffJ,B.dBR,B.dCd,B.dHx,B.eLQ,B.eLR,B.eLt,B.eLG,B.eLH,B.eLC,B.eLI,B.eLn,B.ecy,B.ecz,B.ed5,B.ecY,B.ecN,B.ets,B.e9w,B.esJ,B.dBj,B.dBo,B.e5q,B.e9e,B.fij,B.e8l,B.e8i,B.e8v,B.dk6,B.bDf,B.fdR,B.dxC,B.dxK,B.bJc,B.bJe,B.bJg,B.bJ1,B.bJ3,B.bEs,B.ch3,B.ftL,B.bE1,B.bEo,B.bEn,B.dMD,B.cx7,B.dIr,B.dIp,B.dIj,B.etP,B.etC,B.e0E,B.dcm,B.dcn,B.e0X,B.cbS,B.dAe,B.dA9,B.e6v,B.cbM,B.dRe,B.dQP,B.d86,B.eu0,B.emj,B.em5,B.dRv,B.dRx,B.dRt,B.dzw])
u(C.pb,[B.Ae,B.bee])
u(C.nc,[B.asx,B.beh,B.b8t,B.bp9,B.b7a,B.bnQ,B.bnh,B.b7Q,B.bnj,B.bre,B.bef,B.bp4,B.bix,B.bpW,B.b8a,B.bf8,B.biy,B.bfP,B.bbc,B.b7f,B.bcF,B.agN,B.b6n,B.bsf,B.acP,B.brG,B.bek,B.bez,B.bsr,B.bni,B.biL,B.bcM,B.bp2,B.b81,B.boB,B.b7q,B.bcC,B.bnT])
u(C.af,[B.asy,B.TY,B.Uo,B.SQ,B.aaA,B.aDf,B.axC,B.ayv,B.SV,B.M3,B.aF2,B.Un,B.UC,B.UO,B.Ul,B.UJ,B.ST,B.Uf,B.Uk,B.Ui,B.Tg,B.Tw,B.SL,B.TK,B.SU,B.agL,B.Tx,B.av9,B.Te,B.UP,B.U2,B.U4,B.UU,B.TE,B.SR,B.Tv,B.Ug,B.Us,B.UN,B.Ue,B.TL,B.UQ,B.UB,B.TM,B.Ut,B.SP,B.TI,B.Up])
u(C.ag,[B.aKE,B.bhe,B.aJU,B.aIW,B.axn,B.aDg,B.axD,B.ayw,B.aJ1,B.aAR,B.aKJ,B.aJS,B.aK0,B.aK6,B.aJP,B.aK3,B.aJ_,B.aJN,B.aJO,B.aBV,B.bgJ,B.aJd,B.aIS,B.aJl,B.bgC,B.avs,B.bua,B.aHo,B.aJa,B.aK7,B.aJC,B.aJD,B.aKe,B.aJg,B.aIY,B.bgK,B.aBR,B.aC9,B.bhY,B.aJL,B.aJm,B.bi0,B.aK_,B.aJo,B.aJX,B.aIV,B.aJj,B.aJW])
t(B.bnI,B.aKE)
u(C.jp,[B.dYK,B.dYL,B.dYX,B.dYY,B.dYT,B.dYS,B.dYU,B.dYQ,B.dYV,B.dYO,B.dYW,B.dYN,B.dZ0,B.dZ_,B.dZ1,B.dYZ,B.dZ2,B.dZ3,B.dZ5,B.edF,B.edH,B.edI,B.edo,B.edn,B.edl,B.edu,B.edv,B.edr,B.edw,B.edq,B.edx,B.edy,B.edp,B.edA,B.edt,B.edE,B.eds,B.dA7,B.dA6,B.dzK,B.dA8,B.dzM,B.dzO,B.dzP,B.dzR,B.dzH,B.dzI,B.dzJ,B.dzY,B.dzZ,B.dA_,B.dzX,B.dA1,B.dzW,B.dA2,B.dzV,B.dA3,B.dzU,B.dA4,B.dzT,B.dA5,B.dzS,B.f37,B.c3z,B.c3x,B.eOz,B.eOA,B.dcu,B.d_I,B.d_J,B.d_H,B.d_B,B.d_E,B.d_F,B.d_G,B.d_K,B.d01,B.d_T,B.d_R,B.d_U,B.d_Q,B.d_V,B.d_W,B.d_X,B.d_P,B.d_Y,B.d_O,B.d_Z,B.d_N,B.d0_,B.d_M,B.d00,B.d_L,B.eEu,B.eEv,B.eEt,B.eEn,B.eEo,B.eEp,B.eEq,B.eEs,B.eED,B.eEB,B.eEy,B.eEC,B.eEx,B.d2C,B.d2D,B.d2B,B.d2u,B.d2y,B.d2z,B.d2A,B.d2v,B.d2N,B.d2J,B.d2G,B.d2L,B.d2F,B.d2M,B.d2E,B.d9G,B.d9H,B.d9F,B.d9A,B.d9C,B.d9D,B.d9E,B.d9P,B.d9K,B.d9N,B.d9J,B.d9I,B.dBX,B.dBW,B.dC0,B.dBT,B.dBU,B.dC1,B.dC2,B.dC3,B.dBZ,B.dBP,B.dCc,B.dCb,B.dCe,B.dCf,B.dCg,B.dC5,B.dCh,B.cHv,B.dHv,B.dHu,B.dHw,B.f4r,B.f4s,B.f4t,B.f4E,B.f4H,B.f4I,B.f4J,B.f4K,B.f4L,B.f4M,B.f4N,B.f4u,B.f4v,B.f4w,B.f4x,B.f4y,B.f4z,B.f4A,B.f4B,B.f4C,B.f4D,B.f4F,B.f4G,B.eLP,B.eLO,B.eLw,B.eLv,B.eLr,B.eLq,B.eLs,B.eLp,B.eLE,B.eLD,B.eLF,B.eLx,B.eLJ,B.eLA,B.eLL,B.eLz,B.eLM,B.eLy,B.ecH,B.ecw,B.ecG,B.ecs,B.ecI,B.ecK,B.ect,B.ecu,B.ed4,B.ed3,B.ecV,B.ecW,B.ecX,B.ecR,B.ecS,B.ecQ,B.ecT,B.ecP,B.ecU,B.ecO,B.ecM,B.dbZ,B.emR,B.emt,B.ems,B.emC,B.emL,B.emB,B.emM,B.emA,B.emN,B.emz,B.emy,B.emP,B.emx,B.emF,B.emw,B.emG,B.emv,B.emH,B.emu,B.etr,B.etq,B.etu,B.etp,B.etv,B.eto,B.etw,B.etn,B.etx,B.etm,B.ety,B.etl,B.e9v,B.e9r,B.e9q,B.e9p,B.e9B,B.e9o,B.e9C,B.e9n,B.e9D,B.e9m,B.e9E,B.e9F,B.e9G,B.e9l,B.e9y,B.esI,B.esx,B.esK,B.esE,B.esL,B.esD,B.esM,B.esC,B.esB,B.esA,B.esw,B.esv,B.esu,B.dBq,B.dBh,B.dBi,B.dBl,B.dBm,B.dBp,B.e5o,B.e5f,B.e5p,B.e5r,B.e5k,B.e5s,B.e5j,B.e5t,B.e5i,B.e5h,B.e5v,B.e5g,B.e5w,B.e5d,B.e5x,B.e5c,B.e5y,B.e5b,B.e94,B.e95,B.e9c,B.e9b,B.e9d,B.e99,B.e9g,B.e98,B.e9h,B.e97,B.e9i,B.e9j,B.e96,B.e9k,B.e8y,B.e8f,B.e8g,B.e8k,B.e8j,B.e8u,B.e8s,B.e8m,B.e8w,B.e8n,B.e8x,B.dJy,B.dJo,B.dJm,B.dJt,B.dJr,B.dJu,B.dJq,B.dJv,B.dJw,B.dMn,B.dMb,B.dMa,B.dMc,B.dMf,B.dMe,B.dMd,B.dMj,B.dMk,B.dMl,B.dMm,B.dxO,B.dxN,B.dxD,B.dxJ,B.dxH,B.dxL,B.dxF,B.dxM,B.dxE,B.dQq,B.dQp,B.dQh,B.dQl,B.dQk,B.dQm,B.dQj,B.dQi,B.dBN,B.dBE,B.dBD,B.dBH,B.dBC,B.dBI,B.dBB,B.dBJ,B.dBA,B.dBK,B.dBz,B.dBy,B.dBx,B.bJf,B.bJh,B.bJ2,B.bJ4,B.bE5,B.bE6,B.bE4,B.bE7,B.bE9,B.bDW,B.bDX,B.bDY,B.bDZ,B.bE_,B.bE0,B.bEp,B.bDz,B.bEf,B.bEg,B.bEd,B.bEe,B.bEb,B.bEc,B.bEl,B.bEa,B.bEm,B.bDA,B.bDU,B.bDG,B.bDH,B.bDF,B.bDI,B.bDE,B.bDL,B.bDM,B.bDN,B.bDO,B.bDD,B.bDP,B.bDC,B.bDQ,B.bDB,B.dMw,B.dMH,B.dMI,B.dMu,B.dMt,B.dMs,B.dMB,B.dMz,B.dMA,B.dMC,B.dMx,B.dMy,B.dMK,B.dML,B.dMM,B.dMN,B.dMO,B.dIs,B.dIq,B.dIo,B.dIn,B.dIm,B.dIl,B.dIk,B.dIg,B.dIf,B.dIi,B.dIh,B.etG,B.etF,B.etE,B.etH,B.etQ,B.etJ,B.etK,B.etL,B.etM,B.etI,B.etN,B.etD,B.etA,B.etB,B.e0J,B.e0L,B.e0A,B.e0B,B.e0D,B.e0F,B.e0G,B.e0H,B.e0I,B.e11,B.e13,B.e0U,B.e0Q,B.e0V,B.e0W,B.e0P,B.e0T,B.e0S,B.e0R,B.e10,B.f4V,B.f4W,B.f4X,B.f4Y,B.f4Z,B.f5_,B.f50,B.f51,B.cbR,B.cbQ,B.exO,B.exK,B.exJ,B.exM,B.exL,B.dOK,B.dOL,B.dOF,B.dOH,B.dOI,B.dOG,B.dOJ,B.dAf,B.dAc,B.dAb,B.dAd,B.dAa,B.dM0,B.dM_,B.dLZ,B.dLY,B.dM4,B.dLX,B.dLW,B.dM6,B.dLV,B.dM7,B.dLU,B.dM8,B.dM9,B.dLT,B.e6p,B.e6q,B.e6o,B.e6r,B.e6n,B.e6u,B.e6w,B.e6s,B.e6x,B.eeU,B.eeV,B.eeS,B.eeT,B.eeR,B.eeW,B.eeX,B.eeY,B.eeZ,B.etf,B.eth,B.ete,B.etd,B.etj,B.etc,B.e54,B.e55,B.e4Y,B.e4X,B.e4Z,B.e4W,B.e5_,B.e4V,B.e50,B.e4U,B.e4T,B.e4S,B.e4R,B.co0,B.co1,B.fBZ,B.cnX,B.cnW,B.co2,B.cnY,B.cnZ,B.cbO,B.cbN,B.dRr,B.dQV,B.dQT,B.dQU,B.dQQ,B.dRd,B.dQW,B.dQX,B.dRf,B.dR0,B.dRj,B.dRc,B.dRk,B.dRb,B.dRl,B.dRa,B.dR9,B.dR8,B.dR7,B.dRp,B.dR6,B.dRq,B.dR5,B.dRg,B.dR_,B.dRh,B.dQZ,B.dRi,B.dQY,B.dQO,B.dQN,B.d85,B.f4O,B.f4P,B.f4Q,B.f4R,B.f4S,B.f4T,B.f4U,B.etZ,B.eu_,B.etY,B.etX,B.em7,B.emi,B.emk,B.eme,B.eml,B.emd,B.emc,B.emo,B.emb,B.emp,B.ema,B.emq,B.em9,B.emr,B.em8,B.em4,B.em3,B.eO8,B.dRw,B.dRL,B.dRC,B.dRM,B.dRB,B.dRN,B.dRK,B.dRR,B.dRJ,B.dRI,B.dRT,B.dRH,B.dRG,B.dRF,B.dRE,B.dRY,B.dRD,B.dRO,B.dRA,B.dRP,B.dRz,B.dRQ,B.dRy,B.ef1,B.ef2,B.ef0,B.ef3,B.ef_,B.dzv,B.dzr,B.dzz,B.dzq,B.dzA,B.dzp,B.dzB,B.dzo,B.dzC,B.dzn,B.dzD,B.dzm,B.dzE,B.dzl,B.dzF,B.dzk,B.dzx,B.dzj,B.dPU,B.dPV,B.dPT,B.dPW,B.dPS,B.dPR,B.dPQ,B.dPP,B.dPO,B.dQ0,B.dPN,B.dQ1,B.dPM,B.dQ2,B.dPL,B.eeI,B.eeJ,B.eeH,B.eeK,B.eeG,B.eeL,B.eeF,B.eeM,B.eeE,B.eeD,B.eeC,B.eeB,B.eeA])
t(B.bup,B.aJU)
t(B.aC5,B.bup)
t(B.aIX,B.aIW)
t(B.aAx,B.aIX)
u(C.at,[B.M2,B.bqX,B.bph,B.Yb,B.bob,B.ad5,B.ac_,B.OI,B.boF,B.a6E,B.bay,B.b4c,B.dx,B.eH,B.atA,B.ff,B.Eg])
t(B.bu8,B.aJ1)
t(B.aAA,B.bu8)
u(C.ml,[B.Jd,B.ZI,B.I9])
t(B.aF3,B.aKJ)
t(B.aC4,B.aJS)
t(B.bhP,B.aK0)
t(B.aCi,B.aK6)
t(B.buo,B.aJP)
t(B.aBY,B.buo)
t(B.buw,B.aK3)
t(B.bhU,B.buw)
t(B.bu7,B.aJ_)
t(B.aAz,B.bu7)
t(B.bum,B.aJN)
t(B.bht,B.bum)
t(B.bun,B.aJO)
t(B.aBX,B.bun)
t(B.aB2,B.aJd)
t(B.bgp,B.aIS)
t(B.bgV,B.aJl)
t(B.avt,B.avs)
t(B.agM,B.avt)
t(B.aB3,B.bua)
t(B.b6o,B.aHo)
t(B.bgH,B.aJa)
t(B.aCj,B.aK7)
t(B.buf,B.aJC)
t(B.bhg,B.buf)
t(B.bug,B.aJD)
t(B.aBH,B.bug)
t(B.bux,B.aKe)
t(B.aCv,B.bux)
t(B.bub,B.aJg)
t(B.bgQ,B.bub)
t(B.bu6,B.aIY)
t(B.bgu,B.bu6)
t(B.bul,B.aJL)
t(B.bhr,B.bul)
t(B.aJn,B.aJm)
t(B.aBe,B.aJn)
t(B.but,B.aK_)
t(B.bhO,B.but)
t(B.bud,B.aJo)
t(B.aBf,B.bud)
t(B.bur,B.aJX)
t(B.bhL,B.bur)
t(B.bu5,B.aIV)
t(B.bgt,B.bu5)
t(B.buc,B.aJj)
t(B.bgT,B.buc)
t(B.buq,B.aJW)
t(B.bhK,B.buq)
w(B.aKE,C.c8)
w(B.aJU,C.c8)
w(B.bup,B.mk)
w(B.aIW,C.c8)
w(B.aIX,B.mk)
w(B.aJ1,C.c8)
w(B.bu8,B.mk)
w(B.aKJ,C.eO)
w(B.aJS,C.c8)
w(B.aK0,C.c8)
w(B.aK6,C.c8)
w(B.aJ_,C.c8)
w(B.bu7,B.mk)
w(B.aJP,C.c8)
w(B.buo,B.mk)
w(B.aK3,C.c8)
w(B.buw,B.mk)
w(B.aJN,C.c8)
w(B.bum,B.mk)
w(B.aJO,C.c8)
w(B.bun,B.mk)
w(B.aJd,C.c8)
w(B.aIS,C.c8)
w(B.aJl,C.c8)
w(B.avs,C.c8)
w(B.avt,B.mk)
w(B.aHo,C.c8)
v(B.bua,C.er)
w(B.aJa,C.c8)
w(B.aK7,C.c8)
w(B.aJC,C.c8)
w(B.buf,B.mk)
w(B.aJD,C.c8)
w(B.bug,B.mk)
w(B.aIY,C.c8)
w(B.bu6,B.mk)
w(B.aJg,C.c8)
w(B.bub,B.mk)
w(B.aJL,C.c8)
w(B.bul,B.mk)
w(B.aKe,C.c8)
w(B.bux,B.mk)
w(B.aJm,C.c8)
w(B.aJn,B.mk)
w(B.aJo,C.c8)
w(B.bud,B.mk)
w(B.aJX,C.c8)
w(B.bur,B.mk)
w(B.aK_,C.c8)
w(B.but,B.mk)
w(B.aIV,C.c8)
w(B.bu5,B.mk)
w(B.aJj,C.c8)
w(B.buc,B.mk)
w(B.aJW,C.c8)
w(B.buq,B.mk)})()
C.ki(b.typeUniverse,JSON.parse('{"asy":{"af":[],"r":[]},"Ae":{"aB":[]},"asx":{"aB":[]},"bnI":{"ag":["asy"]},"TY":{"af":[],"r":[]},"bhe":{"ag":["TY"]},"Uo":{"af":[],"r":[]},"aC5":{"ag":["Uo"]},"beh":{"aB":[]},"SQ":{"af":[],"r":[]},"aAx":{"ag":["SQ"]},"M2":{"at":[],"r":[]},"aaA":{"af":[],"r":[]},"aDf":{"af":[],"r":[]},"axC":{"af":[],"r":[]},"ayv":{"af":[],"r":[]},"bqX":{"at":[],"r":[]},"bph":{"at":[],"r":[]},"Yb":{"at":[],"r":[]},"axn":{"ag":["aaA"]},"aDg":{"ag":["aDf"]},"axD":{"ag":["axC"]},"ayw":{"ag":["ayv"]},"SV":{"af":[],"r":[]},"aAA":{"ag":["SV"]},"b8t":{"aB":[]},"ad5":{"at":[],"r":[]},"ac_":{"at":[],"r":[]},"aF2":{"af":[],"r":[]},"M3":{"af":[],"r":[]},"aAR":{"ag":["M3"]},"bob":{"at":[],"r":[]},"OI":{"at":[],"r":[]},"bp9":{"aB":[]},"boF":{"at":[],"r":[]},"b7a":{"aB":[]},"aF3":{"ag":["aF2"]},"bnQ":{"aB":[]},"bnh":{"aB":[]},"b7Q":{"aB":[]},"bnj":{"aB":[]},"bre":{"aB":[]},"Un":{"af":[],"r":[]},"bee":{"aB":[]},"aC4":{"ag":["Un"]},"bef":{"aB":[]},"UC":{"af":[],"r":[]},"UO":{"af":[],"r":[]},"bhP":{"ag":["UC"]},"bp4":{"aB":[]},"aCi":{"ag":["UO"]},"Ul":{"af":[],"r":[]},"UJ":{"af":[],"r":[]},"ST":{"af":[],"r":[]},"aBY":{"ag":["Ul"]},"bix":{"aB":[]},"bhU":{"ag":["UJ"]},"bpW":{"aB":[]},"aAz":{"ag":["ST"]},"b8a":{"aB":[]},"Uf":{"af":[],"r":[]},"Uk":{"af":[],"r":[]},"bht":{"ag":["Uf"]},"bf8":{"aB":[]},"aBX":{"ag":["Uk"]},"biy":{"aB":[]},"Ui":{"af":[],"r":[]},"Tg":{"af":[],"r":[]},"Tw":{"af":[],"r":[]},"aBV":{"ag":["Ui"]},"bfP":{"aB":[]},"bgJ":{"ag":["Tg"]},"aB2":{"ag":["Tw"]},"bbc":{"aB":[]},"SL":{"af":[],"r":[]},"TK":{"af":[],"r":[]},"SU":{"af":[],"r":[]},"bgp":{"ag":["SL"]},"b7f":{"aB":[]},"bgV":{"ag":["TK"]},"bcF":{"aB":[]},"bgC":{"ag":["SU"]},"agN":{"aB":[]},"agL":{"af":[],"r":[]},"agM":{"ag":["agL"]},"Tx":{"af":[],"r":[]},"av9":{"af":[],"r":[]},"aB3":{"ag":["Tx"],"er":[]},"b6o":{"ag":["av9"]},"b6n":{"aB":[]},"Te":{"af":[],"r":[]},"bgH":{"ag":["Te"]},"bsf":{"aB":[]},"acP":{"aB":[]},"UP":{"af":[],"r":[]},"aCj":{"ag":["UP"]},"brG":{"aB":[]},"U2":{"af":[],"r":[]},"U4":{"af":[],"r":[]},"bhg":{"ag":["U2"]},"bek":{"aB":[]},"aBH":{"ag":["U4"]},"bez":{"aB":[]},"a6E":{"at":[],"r":[]},"UU":{"af":[],"r":[]},"TE":{"af":[],"r":[]},"SR":{"af":[],"r":[]},"Tv":{"af":[],"r":[]},"Ug":{"af":[],"r":[]},"Us":{"af":[],"r":[]},"UN":{"af":[],"r":[]},"Ue":{"af":[],"r":[]},"aCv":{"ag":["UU"]},"bsr":{"aB":[]},"bgQ":{"ag":["TE"]},"bni":{"aB":[]},"bgu":{"ag":["SR"]},"bgK":{"ag":["Tv"]},"biL":{"aB":[]},"aBR":{"ag":["Ug"]},"aC9":{"ag":["Us"]},"bhY":{"ag":["UN"]},"bhr":{"ag":["Ue"]},"bay":{"at":[],"r":[]},"b4c":{"at":[],"r":[]},"dx":{"at":[],"r":[]},"eH":{"at":[],"r":[]},"atA":{"at":[],"r":[]},"ff":{"at":[],"r":[]},"Eg":{"at":[],"r":[]},"TL":{"af":[],"r":[]},"aBe":{"ag":["TL"]},"bcM":{"aB":[]},"UQ":{"af":[],"r":[]},"bi0":{"ag":["UQ"]},"UB":{"af":[],"r":[]},"TM":{"af":[],"r":[]},"Ut":{"af":[],"r":[]},"bhO":{"ag":["UB"]},"bp2":{"aB":[]},"aBf":{"ag":["TM"]},"b81":{"aB":[]},"bhL":{"ag":["Ut"]},"boB":{"aB":[]},"SP":{"af":[],"r":[]},"TI":{"af":[],"r":[]},"Up":{"af":[],"r":[]},"bgt":{"ag":["SP"]},"b7q":{"aB":[]},"bgT":{"ag":["TI"]},"bcC":{"aB":[]},"bhK":{"ag":["Up"]},"bnT":{"aB":[]}}'))
C.OQ(b.typeUniverse,JSON.parse('{"mk":1}'))
var y={o:"Brass screws are for the HOT (black) wire.",x:"Fasten the bare copper ground to the GREEN screw.",B:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',F:"Silver screws are for the NEUTRAL (white) wire.",j:"The bare copper ground wire only goes on the GREEN screw.",r:"Turn the breaker OFF and test that the wires are dead.",v:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.aA
return{F:w("ms<w?>"),e8:w("d2"),G:w("w"),l:w("bs<n,n>"),J:w("bs<n,O>"),I:w("bs<n,H>"),M:w("eS<n>"),h:w("dQ<H,n>"),Z:w("a0"),R:w("P<da>"),U:w("P<agD>"),gh:w("P<aPC>"),fq:w("P<a1v>"),V:w("P<ac>"),O:w("P<w>"),ey:w("P<Q>"),dh:w("P<Ro>"),aJ:w("P<ax<aC>>"),r:w("P<pj>"),w:w("P<a0>"),E:w("P<GO>"),gG:w("P<ak<w>>"),gm:w("P<ak<Ro>>"),gO:w("P<ak<ak<O>>>"),bj:w("P<ak<n>>"),b:w("P<ak<O>>"),fA:w("P<ak<H?>>"),ez:w("P<a1<n,aC>>"),g:w("P<u>"),bz:w("P<rY>"),ds:w("P<a70>"),v:w("P<hB>"),B:w("P<vu>"),gu:w("P<+(u,O)>"),ev:w("P<+(u,H)>"),a6:w("P<+(a70,H)>"),L:w("P<+(n,n)>"),fT:w("P<+(O,r)>"),ek:w("P<+(H,n)>"),x:w("P<+(H,H)>"),c:w("P<+(n,n,a0)>"),e:w("P<+(n,O,O,H)>"),y:w("P<+(n,H,n,H)>"),d:w("P<+(n,n,O,O,a1<n,O>)>"),_:w("P<ul>"),q:w("P<cO>"),fQ:w("P<a8A>"),s:w("P<n>"),cF:w("P<ap>"),X:w("P<vE>"),dO:w("P<a9k>"),o:w("P<aw>"),p:w("P<r>"),bL:w("P<a9E>"),ak:w("P<Eu>"),fH:w("P<l8>"),aq:w("P<b73>"),a_:w("P<a9S>"),cS:w("P<a9Z>"),cB:w("P<n2>"),ba:w("P<aa8>"),d9:w("P<Oh>"),bi:w("P<aar>"),eW:w("P<Bu>"),fY:w("P<XH>"),bl:w("P<Om>"),aX:w("P<EK>"),ea:w("P<abg>"),gB:w("P<abL>"),ed:w("P<Oz>"),g4:w("P<biK>"),aS:w("P<Ze>"),ac:w("P<ac3>"),cd:w("P<BF>"),fr:w("P<acW>"),e4:w("P<ZV>"),D:w("P<ad0>"),au:w("P<aFT>"),u:w("P<R>"),n:w("P<O>"),t:w("P<H>"),dS:w("P<aB?>"),fs:w("P<rY?>"),d4:w("P<n?>"),bN:w("P<H?>"),gJ:w("cq<agM>"),A:w("cq<ag<af>>"),bF:w("ak<w>"),gl:w("ak<Q>"),ew:w("ak<aC>"),j:w("ak<@>"),bW:w("ak<H>"),a:w("a1<n,@>"),f:w("a1<@,@>"),bd:w("J<e5,n>"),dv:w("J<n,n>"),fR:w("J<+(O,r),r>"),m:w("iH"),gA:w("yq"),gD:w("wP"),P:w("cm"),T:w("fe"),K:w("aC"),W:w("rY"),dV:w("e5"),ej:w("HU"),fX:w("vu"),g7:w("Bc"),N:w("n"),bO:w("ap"),k:w("kt"),Y:w("bm<O>"),cL:w("a9l"),cv:w("aw"),gj:w("cz<n>"),aC:w("cz<H?>"),fZ:w("a3<DV>"),cc:w("a3<n>"),dg:w("e4<ql>"),e3:w("b7t"),a2:w("Bq"),f3:w("ql"),es:w("EO"),gV:w("mK"),C:w("R"),i:w("O"),z:w("@"),S:w("H"),Q:w("ak<@>?"),fF:w("a1<@,@>?"),cK:w("aC?"),az:w("qa?"),dk:w("n?"),cD:w("O?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aQU=new C.da(0,0.85)
D.ffn=new C.x("Tap once to start the chain",null,F.RR,null,null,null,null,null,null,null,null,null)
D.aQt=new C.bI(D.aQU,null,null,D.ffn,null)
D.aQL=new C.da(0,0.1)
D.aRO=new B.aPM(0,0,0)
D.IV=new B.aPM(0,0.5,0)
D.aSl=new C.az(A.bf,1,A.r,-1)
D.aTL=new C.aX(0,1/0,0,290)
D.aTS=new C.aX(16,1/0,16,1/0)
D.UG=new C.w(1,0.08627450980392157,0.10588235294117647,0.1411764705882353,A.t)
D.aUR=new C.o(D.UG,null,E.a7W,null,null,null,A.n)
D.aV2=new C.o(A.bl,null,null,null,null,null,A.a6)
D.eJ7=new C.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhC=new C.x("\u26a1",null,D.eJ7,null,null,null,null,null,null,null,null,null)
D.aZh=new C.cv(A.A,null,null,D.fhC,null)
D.aM8=new C.F(!0,A.bZ,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8c=new C.x("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aM8,null,A.L,null,null,null,null,null,null,null)
D.dUr=new C.C(A.nu,D.f8c,null)
D.aZq=new C.cv(A.A,null,null,D.dUr,null)
D.fbH=new C.x("Press Drop! and watch them fall from 20 metres.",null,A.km,null,A.L,null,null,null,null,null,null,null)
D.dUv=new C.C(A.nu,D.fbH,null)
D.aZI=new C.cv(A.A,null,null,D.dUv,null)
D.eTE=new C.F(!0,A.j2,null,null,null,null,18,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg7=new C.x("Draw anywhere",null,D.eTE,null,null,null,null,null,null,null,null,null)
D.aZM=new C.cv(A.A,null,null,D.fg7,null)
D.f2a=new C.x("\ud83c\udfd7\ufe0f",null,A.vA,null,null,null,null,null,null,null,null,null)
D.aZU=new C.cv(A.A,null,null,D.f2a,null)
D.f_0=new C.x("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aM8,null,A.L,null,null,null,null,null,null,null)
D.dVa=new C.C(A.Eq,D.f_0,null)
D.b_4=new C.cv(A.A,null,null,D.dVa,null)
D.a9g=new C.w(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.D7=new C.w(1,0.9725490196078431,0.9647058823529412,0.9333333333333333,A.t)
D.a9j=new C.w(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b16=new C.w(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.t)
D.zp=new C.w(1,0.9450980392156862,0.9450980392156862,0.9176470588235294,A.t)
D.b1k=new C.w(1,0.9098039215686274,0.9254901960784314,0.9372549019607843,A.t)
D.b1l=new C.w(1,0.4823529411764706,0.5098039215686274,0.5450980392156862,A.t)
D.b1q=new C.w(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.b1J=new C.w(1,0.6549019607843137,0.6784313725490196,0.7098039215686275,A.t)
D.Db=new C.w(1,0.12156862745098039,0.07058823529411765,0.03529411764705882,A.t)
D.b25=new C.w(1,0.8156862745098039,0.5098039215686274,0.27450980392156865,A.t)
D.b2c=new C.w(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.U0=new C.w(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b2h=new C.w(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.b2l=new C.w(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.a9H=new C.w(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.t)
D.b2p=new C.w(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.U1=new C.w(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.Dg=new C.w(1,0.788235294117647,0.6274509803921569,0.22745098039215686,A.t)
D.b2F=new C.w(1,0.9411764705882353,0.5411764705882353,0.1411764705882353,A.t)
D.b2R=new C.w(1,0.5568627450980392,0.5843137254901961,0.6196078431372549,A.t)
D.wd=new C.w(1,0.788235294117647,0.807843137254902,0.8392156862745098,A.t)
D.a9T=new C.w(1,0.5568627450980392,0.35294117647058826,0.2901960784313726,A.t)
D.Dh=new C.w(1,0.9294117647058824,0.9176470588235294,0.8784313725490196,A.t)
D.b3n=new C.w(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.b3s=new C.w(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.b3I=new C.w(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.U7=new C.w(1,0.22745098039215686,0.24705882352941178,0.2784313725490196,A.t)
D.aa3=new C.w(1,0.8980392156862745,0.8980392156862745,0.8666666666666667,A.t)
D.aa7=new C.w(1,0.8509803921568627,0.803921568627451,0.7215686274509804,A.t)
D.Ud=new C.w(1,0.11764705882352941,0.11764705882352941,0.12549019607843137,A.t)
D.b4g=new C.w(1,0.8784313725490196,0.6745098039215687,0.4117647058823529,A.t)
D.b4E=new C.w(1,0.5529411764705883,0.7843137254901961,1,A.t)
D.b4G=new C.w(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.b4O=new C.w(1,1,0.9019607843137255,0.5019607843137255,A.t)
D.b4S=new C.w(1,0.9490196078431372,0.7607843137254902,0.10588235294117647,A.t)
D.aap=new C.w(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.Jy=new C.w(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.t)
D.aar=new C.w(1,0.9490196078431372,0.9411764705882353,0.9019607843137255,A.t)
D.b56=new C.w(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.b5b=new C.w(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.t)
D.wj=new C.w(1,0.1843137254901961,0.49019607843137253,0.8823529411764706,A.t)
D.b5g=new C.w(1,0.788235294117647,0.7176470588235294,0.6078431372549019,A.t)
D.aav=new C.w(1,0.7137254901960784,0.7372549019607844,0.7686274509803922,A.t)
D.wl=new C.w(1,0.9019607843137255,0.8823529411764706,0.8352941176470589,A.t)
D.Ds=new C.w(1,0.09019607843137255,0.09411764705882353,0.10588235294117647,A.t)
D.aaI=new C.w(1,0.9725490196078431,0.9725490196078431,0.9568627450980393,A.t)
D.b5F=new C.w(1,0.12156862745098039,0.47843137254901963,0.22745098039215686,A.t)
D.zz=new C.w(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.b5N=new C.w(1,1,0.9686274509803922,0.8,A.t)
D.aaN=new C.w(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.aaQ=new C.w(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.t)
D.uj=new C.w(1,0.7686274509803922,0.6039215686274509,0.3843137254901961,A.t)
D.b6n=new C.w(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.b6u=new C.w(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.aaZ=new C.w(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.Ux=new C.w(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.b6S=new C.w(1,0.7215686274509804,0.5411764705882353,0.1803921568627451,A.t)
D.b6Z=new C.w(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.b71=new C.w(1,0.5411764705882353,0.5411764705882353,0.5176470588235295,A.t)
D.b73=new C.w(1,0.9647058823529412,0.9568627450980393,0.9254901960784314,A.t)
D.ab4=new C.w(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.b7i=new C.w(1,0.6078431372549019,0.6078431372549019,0.592156862745098,A.t)
D.b7o=new C.w(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,A.t)
D.zE=new C.w(1,0.8862745098039215,0.23137254901960785,0.23137254901960785,A.t)
D.wo=new C.w(1,0.9490196078431372,0.9490196078431372,0.9254901960784314,A.t)
D.Dz=new C.w(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.UF=new C.w(1,0.8392156862745098,0.6823529411764706,0.4470588235294118,A.t)
D.abc=new C.w(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.UH=new C.w(1,0.2901960784313726,0.2980392156862745,0.32941176470588235,A.t)
D.JJ=new C.w(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.t)
D.UJ=new C.w(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.b89=new C.w(1,0.3568627450980392,0.10196078431372549,0.09019607843137255,A.t)
D.UL=new C.w(1,0.4980392156862745,0.7215686274509804,1,A.t)
D.b8p=new C.w(1,0.7058823529411765,0.7294117647058823,0.7607843137254902,A.t)
D.wq=new C.w(1,0.796078431372549,0.8156862745098039,0.8392156862745098,A.t)
D.abr=new C.w(1,0.8980392156862745,0.7254901960784313,0.11764705882352941,A.t)
D.b8B=new C.w(1,0.3568627450980392,0.39215686274509803,0.4392156862745098,A.t)
D.b8E=new C.w(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.b8G=new C.w(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.b8K=new C.w(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.b8R=new C.w(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.abC=new C.w(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.b9a=new C.w(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.b9n=new C.w(1,0.6274509803921569,0.6509803921568628,0.6823529411764706,A.t)
D.b9D=new C.w(1,0.8156862745098039,0.35294117647058826,0.22745098039215686,A.t)
D.b9J=new C.w(1,0.8509803921568627,0.788235294117647,0.6274509803921569,A.t)
D.DH=new C.w(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.DI=new C.w(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.t)
D.UV=new C.w(1,0.9490196078431372,0.9176470588235294,0.8274509803921568,A.t)
D.ba4=new C.w(1,0.12549019607843137,0.13333333333333333,0.14901960784313725,A.t)
D.baa=new C.w(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.bai=new C.w(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bal=new C.w(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.DK=new C.w(1,0.17254901960784313,0.4196078431372549,0.8392156862745098,A.t)
D.zL=new C.w(1,0.7607843137254902,0.4627450980392157,0.22745098039215686,A.t)
D.abZ=new C.w(1,0.7254901960784313,0.7450980392156863,0.7764705882352941,A.t)
D.bau=new C.w(1,0.1843137254901961,0.6352941176470588,0.30980392156862746,A.t)
D.baw=new C.w(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.baz=new C.w(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.baG=new C.w(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.up=new C.w(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.bb4=new C.w(1,0.2,0.21176470588235294,0.23137254901960785,A.t)
D.bb8=new C.w(1,0.24705882352941178,0.3843137254901961,0.07058823529411765,A.t)
D.bb9=new C.w(1,0.7098039215686275,0.7333333333333333,0.7647058823529411,A.t)
D.bbb=new C.w(1,0.9294117647058824,0.9294117647058824,0.9098039215686274,A.t)
D.bbw=new C.w(1,0.9137254901960784,0.8980392156862745,0.8549019607843137,A.t)
D.acm=new C.w(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.bbD=new C.w(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.V7=new C.w(1,0.4196078431372549,0.24705882352941178,0.19215686274509805,A.t)
D.K_=new C.w(1,0.803921568627451,0.6274509803921569,0.2,A.t)
D.bc6=new C.w(1,1,0.41568627450980394,0,A.t)
D.V9=new C.w(1,0.3607843137254902,0.7019607843137254,1,A.t)
D.bcf=new C.w(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.rH=new C.w(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,A.t)
D.bcE=new C.w(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.qk=new C.w(1,0.5529411764705883,0.3333333333333333,0.1411764705882353,A.t)
D.bcV=new C.w(1,1,0.9529411764705882,0.6274509803921569,A.t)
D.bcW=new C.w(1,0.30980392156862746,0.6588235294117647,1,A.t)
D.bd_=new C.w(1,1,0.6196078431372549,0.6196078431372549,A.t)
D.bd0=new C.w(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.acH=new C.w(1,0.8431372549019608,0.16470588235294117,0.16470588235294117,A.t)
D.acI=new C.w(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.bdq=new C.w(1,0.48627450980392156,0.2901960784313726,0.22745098039215686,A.t)
D.bdr=new C.w(1,0.23137254901960785,0.6078431372549019,1,A.t)
D.bdB=new C.w(1,0.13333333333333333,0.14901960784313725,0.17254901960784313,A.t)
D.bh_=new C.b9(11e6)
D.VV=new C.N(0,0,7,0)
D.bi0=new C.N(0,0,8,6)
D.adF=new C.N(0,0,9,0)
D.biy=new C.N(10,0,10,4)
D.biB=new C.N(10,10,10,0)
D.biD=new C.N(10,10,10,6)
D.biK=new C.N(10,34,10,26)
D.biT=new C.N(10,6,10,2)
D.W3=new C.N(10,6,10,4)
D.biU=new C.N(10,6,10,8)
D.biW=new C.N(10,8,0,10)
D.bjy=new C.N(12,8,8,8)
D.bjD=new C.N(14,0,14,22)
D.bjF=new C.N(14,0,14,30)
D.ae3=new C.N(14,0,14,6)
D.ae4=new C.N(14,10,10,10)
D.aea=new C.N(14,10,8,12)
D.bkb=new C.N(14,8,14,24)
D.bkc=new C.N(14,8,14,6)
D.bkE=new C.N(16,4,16,28)
D.bkO=new C.N(16,8,16,12)
D.bmT=new C.N(26,12,26,58)
D.bnw=new C.N(4,18,4,8)
D.bnH=new C.N(4,4,6,2)
D.bnJ=new C.N(4,4,8,2)
D.bnK=new C.N(4,4,8,4)
D.boi=new C.N(8,14,8,12)
D.bop=new C.N(8,40,8,30)
D.bou=new C.N(8,6,16,0)
D.bov=new C.N(8,6,8,8)
D.boO=new C.N(0,0,1.5,0)
D.aRA=new C.FV(26,"saturation")
D.bp5=new C.y9(A.cU,D.aRA,null,A.a9e)
D.eZa=new C.x("REACTION LAB",null,T.aMI,null,null,null,null,A.a2,null,1,null,null)
D.bp9=new C.bH(1,A.bo,D.eZa,null)
D.eQA=new C.F(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f17=new C.x("CORE PROTOCOL",null,D.eQA,null,null,null,null,null,null,null,null,null)
D.bpl=new C.bH(1,A.bo,D.f17,null)
D.f65=new C.x("Construction Lab",null,A7.yI,null,null,null,null,null,null,null,null,null)
D.eYu=new C.x("Learn the trades on real looking 3D models",null,A.hk,null,null,null,null,null,null,null,null,null)
D.cmw=w([D.f65,D.eYu],x.p)
D.beo=new C.fo(A.aj,A.e,A.j,A.F,null,A.p,null,0,D.cmw,null)
D.bpY=new C.bH(1,A.bo,D.beo,null)
D.f1O=new C.x("\ud83d\udce2 NGMY Ads",null,A.r5,null,null,null,null,A.eB,null,1,null,null)
D.bpZ=new C.bH(1,A.bo,D.f1O,null)
D.eXV=new C.x("Wire selected",null,A.hj,null,null,null,null,null,null,null,null,null)
D.bqb=new C.bH(1,A.bo,D.eXV,null)
D.ahc=new C.a0(62712,"MaterialIcons",!1)
D.bty=new C.a0(62878,"MaterialIcons",!1)
D.Yd=new C.a0(62908,"MaterialIcons",!1)
D.btB=new C.a0(62918,"MaterialIcons",!1)
D.btC=new C.a0(62931,"MaterialIcons",!1)
D.btE=new C.a0(62951,"MaterialIcons",!1)
D.btG=new C.a0(62970,"MaterialIcons",!1)
D.btL=new C.a0(63015,"MaterialIcons",!1)
D.btV=new C.a0(63064,"MaterialIcons",!1)
D.btX=new C.a0(63070,"MaterialIcons",!1)
D.xd=new C.a0(63128,"MaterialIcons",!1)
D.F7=new C.a0(63726,"MaterialIcons",!1)
D.bve=new C.a0(983122,"MaterialIcons",!1)
D.bvq=new C.a0(983222,"MaterialIcons",!1)
D.bvt=new C.a0(983247,"MaterialIcons",!1)
D.aij=new C.a0(983316,"MaterialIcons",!1)
D.bvF=new C.a0(983415,"MaterialIcons",!1)
D.bvG=new C.a0(983417,"MaterialIcons",!1)
D.bvH=new C.a0(983442,"MaterialIcons",!1)
D.bvI=new C.a0(983443,"MaterialIcons",!1)
D.ait=new C.a0(983467,"MaterialIcons",!1)
D.bvO=new C.a0(983501,"MaterialIcons",!1)
D.bvZ=new C.a0(983616,"MaterialIcons",!1)
D.Z_=new C.a0(983617,"MaterialIcons",!1)
D.bw_=new C.a0(983624,"MaterialIcons",!1)
D.bwb=new C.a0(983776,"MaterialIcons",!1)
D.bwi=new C.a0(983894,"MaterialIcons",!1)
D.bwu=new C.a0(984561,"MaterialIcons",!1)
D.bx2=new C.ad(A.uT,24,A.aL,null,null,null)
D.bxN=new C.ad(A.M9,null,A.af,null,null,null)
D.byk=new C.ad(A.m9,21,A.af,null,null,null)
D.bvd=new C.a0(983117,"MaterialIcons",!1)
D.bzF=new C.ad(D.bvd,28,A.c,null,null,null)
D.bzV=new C.ad(A.j6,18,null,null,null,null)
D.bBE=new C.ad(A.e8,21,A.cx,null,null,null)
D.bBT=new C.ad(A.ma,null,A.af,null,null,null)
D.bC2=new C.ad(A.Z6,21,A.af,null,null,null)
D.bCS=new C.ad(A.ez,17,A.af,null,null,null)
D.ajO=new C.ad(A.ez,19,null,null,null,null)
D.me=new C.ad(A.uS,21,A.af,null,null,null)
D.bEk=new C.ad(A.LC,null,A.af,null,null,null)
D.bFr=new C.ad(A.j6,21,A.af,null,null,null)
D.bGg=new C.ad(A.fF,20,A.aA,null,null,null)
D.bGW=new C.ad(A.dS,null,A.aL,null,null,null)
D.bHg=new C.ad(A.jN,null,A.aA,null,null,null)
D.fom=new B.aw(-0.4,4.2,-2.4)
D.bJc=new B.GO(D.fom,"LIVE 120 V",A.bM)
D.d_A=w([A.dm,A.d6,A.dm],x.O)
D.bJn=new C.a5(A.a3,A.a7,A.x,D.d_A,null,null)
D.cFU=w([A.bX,A.bn],x.O)
D.bJv=new C.a5(A.b1,A.b3,A.x,D.cFU,null,null)
D.cpT=w([A.aY,A.k4,A.qg],x.O)
D.bJB=new C.a5(A.b1,A.b3,A.x,D.cpT,null,null)
D.bJG=new C.a5(A.b1,A.b3,A.x,A.atN,null,null)
D.bJH=new C.a5(A.b1,A.b3,A.x,Ae.Og,null,null)
D.cGf=w([A.fZ,A.fk],x.O)
D.bJP=new C.a5(A.b1,A.b3,A.x,D.cGf,null,null)
D.akP=new C.a5(A.b1,A.b3,A.x,K.a_M,null,null)
D.cJU=w([A.f4,A.dM,A.cL],x.O)
D.bJU=new C.a5(A.b1,A.b3,A.x,D.cJU,null,null)
D.cDK=w([A.nW,A.i2],x.O)
D.bKs=new C.a5(A.b1,A.b3,A.x,D.cDK,null,null)
D.cIg=w([A.dL,A.aE],x.O)
D.bKz=new C.a5(A.b1,A.b3,A.x,D.cIg,null,null)
D.cFC=w([A.es,A.az],x.O)
D.akW=new C.a5(A.b1,A.b3,A.x,D.cFC,null,null)
D.cVt=w([A.dX,A.iK,A.bn],x.O)
D.bKI=new C.a5(A.a3,A.a7,A.x,D.cVt,null,null)
D.d2T=w([A.bX,A.c,A.bI],x.O)
D.bKM=new C.a5(A.a3,A.a7,A.x,D.d2T,null,null)
D.cVz=w([A.kv,A.cB],x.O)
D.bL0=new C.a5(A.b1,A.b3,A.x,D.cVz,null,null)
D.ccV=w([A.bX,A.dX],x.O)
D.bL9=new C.a5(A.a3,A.a7,A.x,D.ccV,null,null)
D.auo=w([A.es,I.o4],x.O)
D.bLg=new C.a5(A.b1,A.b3,A.x,D.auo,null,null)
D.bLw=new C.a5(A.b1,A.b3,A.x,E.alh,null,null)
D.d3n=w([A.fZ,A.fW],x.O)
D.al1=new C.a5(A.b1,A.b3,A.x,D.d3n,null,null)
D.cWM=w([A.dy,A.o6],x.O)
D.bLG=new C.a5(A.b1,A.b3,A.x,D.cWM,null,null)
D.b74=new C.w(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.b0R=new C.w(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cBi=w([D.b74,D.b0R],x.O)
D.bLJ=new C.a5(A.b1,A.b3,A.x,D.cBi,null,null)
D.bMj=new C.a5(A.ax,A.aC,A.x,A.a_J,null,null)
D.bba=new C.w(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.d4y=w([D.bba,A.Jp],x.O)
D.bMp=new C.a5(A.b1,A.b3,A.x,D.d4y,null,null)
D.cOc=w([A.az,A.w],x.O)
D.bMu=new C.a5(A.b1,A.b3,A.x,D.cOc,null,null)
D.bMx=new C.a5(A.b1,A.b3,A.x,I.atR,null,null)
D.bMF=new C.a5(A.b1,A.b3,A.x,K.ar5,null,null)
D.baD=new C.w(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.bbi=new C.w(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cps=w([A.K0,D.baD,D.bbi],x.O)
D.bMG=new C.a5(A.b1,A.b3,A.x,D.cps,null,null)
D.cde=w([A.dn,A.fj],x.O)
D.bMV=new C.a5(A.b1,A.b3,A.x,D.cde,null,null)
D.bN0=new C.a5(A.ax,A.aC,A.x,A.a0w,null,null)
D.cSt=w([A.aK,A.ak],x.O)
D.bN2=new C.a5(A.b1,A.b3,A.x,D.cSt,null,null)
D.alj=w([0,2,4,6,7,9,11],x.t)
D.bNA=w([0,4,7],x.t)
D.aln=w([0,4,7,12],x.t)
D.bNB=w([0,4,7,4],x.t)
D.aty=w([A.fV,A.p5],x.O)
D.at8=w([A.hq,A.cY],x.O)
D.arB=w([A.bz,A.dM],x.O)
D.cxU=w([A.aL,A.dn],x.O)
D.cE5=w([A.cx,A.f0],x.O)
D.cWD=w([A.bY,A.lp],x.O)
D.ar6=w([A.cL,A.k5],x.O)
D.cCM=w([A.bI,A.aJ],x.O)
D.bNV=w([D.aty,D.at8,A.a_Q,D.arB,D.cxU,D.cE5,A.asH,D.cWD,D.ar6,D.cCM],x.gG)
D.alq=w([1],x.n)
D.bSz=w([120,220,380],x.t)
D.bWj=w([12,16,19,24],x.t)
D.bWs=w([1400,800,450,2400],x.t)
D.c_s=w([1,2,3],x.n)
D.ap3=w([1,-1],x.n)
D.c_D=w([0,0.6,1],x.n)
D.c3L=w([250,450,900,1500],x.t)
D.c6w=w(["The living room has no power: find the tripped breaker in the panel and reset it.","The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)"],x.s)
D.fnV=new B.aw(11,4.6,-6)
D.flS=new B.aw(11,5.4,-7.85)
D.fnG=new B.aw(3.4,5.4,-7.85)
D.fmN=new B.aw(3.4,3.4,-7.85)
D.c6y=w([D.fnV,D.flS,D.fnG,D.fmN],x.o)
D.c6F=w([-0.05,0.05],x.n)
D.dRb=new C.u(26,-8)
D.dRE=new C.u(52,0)
D.dRa=new C.u(26,8)
D.c71=w([A.J,D.dRb,D.dRE,D.dRa],x.g)
D.b1B=new C.w(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.baW=new C.w(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.b9c=new C.w(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bdE=new C.w(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.b8u=new C.w(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.aqm=w([D.b1B,D.baW,D.b9c,D.bdE,D.b8u],x.O)
D.emy=new C.z("Jambo!","Hello!")
D.ehI=new C.z("Asante","Thank you")
D.e9n=new C.z("Karibu","Welcome")
D.ebn=new C.z("Rafiki","Friend")
D.aqO=w([D.emy,D.ehI,D.e9n,D.ebn],x.L)
D.el3=new C.z("type","Typewriter")
D.eeB=new C.z("bounce","Bounce")
D.elN=new C.z("wave","Wave")
D.emO=new C.z("zoom","Zoom")
D.ckj=w([D.el3,D.eeB,D.elN,A.a3y,E.aI8,D.emO,E.aIa],x.L)
D.ckv=w([50,25,75],x.t)
D.aqT=w([A.bY,A.aY,A.dL,A.bf,A.cL],x.O)
D.cnq=w([61,63],x.t)
D.cnD=w([62,64],x.t)
D.coN=w([1,2,3,4,5,6,7],x.n)
D.cpY=w([0,5,10,15,18,20,25],x.t)
D.dPo={black:0}
D.a43=new C.eS(D.dPo,1,x.M)
D.brt=new B.pj(21,"Brass screw (top)",D.a43,!1)
D.brn=new B.pj(22,"Brass screw (bottom)",D.a43,!1)
D.dQ8={white:0}
D.a42=new C.eS(D.dQ8,1,x.M)
D.bru=new B.pj(23,"Silver screw (top)",D.a42,!1)
D.brs=new B.pj(24,"Silver screw (bottom)",D.a42,!1)
D.dPD={ground:0}
D.aJi=new C.eS(D.dPD,1,x.M)
D.brp=new B.pj(25,"Green ground screw",D.aJi,!1)
D.ctM=w([D.brt,D.brn,D.bru,D.brs,D.brp],x.r)
D.egb=new C.z("fish","Fish")
D.egd=new C.z("fly","Fireflies")
D.eez=new C.z("bird","Birds")
D.cu5=w([D.egb,D.egd,D.eez],x.L)
D.cy9=w([900,500,250,1600],x.t)
D.cBw=w([y.r,"Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).","Twist the two white wires together with a wire nut. A switch does not cut the neutral.",y.x,"Fasten the black wire from the panel to one BRASS screw.","Fasten the black wire that goes to the light to the other BRASS screw.","Push the switch into the box, put the plate on and test with the power on."],x.s)
D.cBE=w([A.f8,A.bJ,A.JV,A.ew],x.O)
D.cBF=w([0.78,1],x.n)
D.arC=w([0,2,4,7,9,12,14,16],x.t)
D.cCb=w([A.bz,A.by,A.b8,A.bz],x.O)
D.arH=w(["A","T","C","G"],x.s)
D.cCc=w(["A","U","C","G"],x.s)
D.fml=new B.aw(-6.5,7.5,-7.85)
D.fmo=new B.aw(-6.5,7.8,-3)
D.cCf=w([D.fml,D.fmo],x.o)
D.a_G=w([A.aE,A.cr,A.bl,A.aY,A.nl],x.O)
D.cCL=w([1,2.76,5.4,8.93,13.3],x.n)
D.cCT=w([y.r,"The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.","Fasten the bare copper ground wire to the GREEN screw.","Fasten the white (neutral) wire to a SILVER screw.","Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.","Fold the wires back and push the outlet into the box.","Put the cover plate on, then turn the power on and test."],x.s)
D.foU=new B.aw(-3.6,7.5,-7.85)
D.fmb=new B.aw(-3.6,4.2,-7.85)
D.cD_=w([D.foU,D.fmb],x.o)
D.arO=w([A.cL,A.cr,A.bY,A.bf],x.O)
D.cDs=w([A.az,A.aE,A.cL,A.cr,A.bl,A.ct,A.c8,A.by,A.Jp],x.O)
D.a_K=w([0.04,0.17,0.3],x.n)
D.cDO=w([1,0.6,0.38,0.22,0.12],x.n)
D.cE1=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.fo7=new B.aw(9.8,6,-7.85)
D.flV=new B.aw(9.8,7.5,-7.85)
D.fp2=new B.aw(-8,7.5,-7.85)
D.fmQ=new B.aw(-8,1.5,-7.85)
D.cEt=w([D.fo7,D.flV,D.fp2,D.fmQ],x.o)
D.FW=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eub=new B.ul("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.euh=new B.ul("Medium engine","A good all-rounder.",0.3,0.9)
D.eug=new B.ul("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.FX=w([D.eub,D.euh,D.eug],x._)
D.e50=new C.z(6,"Easy")
D.e5y=new C.z(8,"Medium")
D.e1C=new C.z(10,"Hard")
D.cEQ=w([D.e50,D.e5y,D.e1C],x.ek)
D.as_=w([0.55,0.78,1],x.n)
D.aOh=new B.aw(5,1.8,-7.85)
D.fnb=new B.aw(5,-0.1,-7.85)
D.fnL=new B.aw(12.5,-0.1,-7.85)
D.cFr=w([D.aOh,D.fnb,D.fnL],x.o)
D.fkT=new B.aw(3,3.1,-7.1)
D.aOd=new B.aw(3,1.7,-7.1)
D.fnJ=new B.aw(3,1,-7.1)
D.fld=new B.aw(3.65,0.5,-7.1)
D.flv=new B.aw(4.3,1,-7.1)
D.fn7=new B.aw(4.3,1.8,-7.1)
D.fp3=new B.aw(5,1.8,-7.1)
D.cFT=w([D.fkT,D.aOd,D.fnJ,D.fld,D.flv,D.fn7,D.fp3,D.aOh],x.o)
D.cGk=w([0.93,0.975,1],x.n)
D.cGD=w(["Mama","Baba","Bibi","Babu","Dada","Kaka"],x.s)
D.aca=new C.w(1,0.14901960784313725,0.14901960784313725,0.16470588235294117,A.t)
D.fqa=new B.Eu("blackLine","Black \xb7 from the breaker",D.aca,A.c)
D.b7S=new C.w(1,0.22745098039215686,0.1803921568627451,0.1803921568627451,A.t)
D.fqb=new B.Eu("blackLoad","Black \xb7 to the light",D.b7S,A.c)
D.aOO=new B.Eu("ground","Bare copper \xb7 ground",D.zL,A.c)
D.cGJ=w([D.fqa,D.fqb,D.aOO],x.ak)
D.e6R=new C.z("Chairs",120)
D.e6U=new C.z("Cloth",80)
D.e7a=new C.z("Delivery",25)
D.as8=w([D.e6R,D.e6U,D.e7a],C.aA("P<+(n,H)>"))
D.foK=new B.aw(0.6,11,-3.4)
D.flF=new B.aw(0.6,3.2,-3.2)
D.fox=new B.aw(0.6,2.2,-1.9)
D.flB=new B.aw(0.6,0.7,-1.5)
D.cGS=w([D.foK,D.flF,D.fox,D.flB],x.o)
D.asa=w([A.c,A.fW,A.oV,A.az],x.O)
D.cHQ=w([1,0.7,0.45,0.28,0.16,0.1,0.06],x.n)
D.cHR=w([1,0.55,0.32,0.2,0.12,0.07],x.n)
D.fky=new B.xp("Moon",1737,4291941851)
D.fkv=new B.xp("Earth",6371,4281908728)
D.fkz=new B.xp("Neptune",24622,4284524026)
D.fkA=new B.xp("Saturn",58232,4294829706)
D.fkw=new B.xp("Jupiter",69911,4294677052)
D.fkB=new B.xp("Sun",696340,4294688548)
D.fkC=new B.xp("Sirius A",119e4,4290763774)
D.fkt=new B.xp("Arcturus",179e5,4294818420)
D.fku=new B.xp("Betelgeuse",531e6,4294472049)
D.fkx=new B.xp("UY Scuti",667e6,4293870660)
D.Oi=w([D.fky,D.fkv,D.fkz,D.fkA,D.fkw,D.fkB,D.fkC,D.fkt,D.fku,D.fkx],C.aA("P<xp>"))
D.eq3=new C.bz("glow","Glow",A.Yf)
D.enQ=new C.bz("rainbow","Rainbow",A.nz)
D.eoa=new C.bz("stars","Stars",A.hX)
D.enA=new C.bz("sparks","Sparks",A.dS)
D.epo=new C.bz("fire","Fire",A.uU)
D.cI2=w([D.eq3,D.enQ,D.eoa,D.enA,D.epo],x.c)
D.flm=new B.aw(0,8.3,0)
D.aO6=new B.aw(0,3.9,0)
D.ase=w([D.flm,D.aO6],x.o)
D.asf=w([A.bl,A.aE,A.cr,A.d6],x.O)
D.foh=new B.aw(-0.6,11,-3.4)
D.flY=new B.aw(-0.6,3.2,-3.2)
D.fnT=new B.aw(-0.6,2.2,-1.9)
D.fp8=new B.aw(-0.6,0.7,-1.5)
D.cIy=w([D.foh,D.flY,D.fnT,D.fp8],x.o)
D.cIY=w([0.2,1],x.n)
D.eu8=new B.ul("Radar","Shows your height above the ground.",0.1,0)
D.eu9=new B.ul("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eu6=new B.ul("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.asn=w([D.eu8,D.eu9,D.eu6],x._)
D.eoI=new C.bz("attract","Attract",A.xw)
D.eov=new C.bz("scare","Scare",A.ta)
D.enJ=new C.bz("food","Food",A.ti)
D.bvj=new C.a0(983158,"MaterialIcons",!1)
D.ep0=new C.bz("hunt","Hunt",D.bvj)
D.cJz=w([D.eoI,D.eov,D.enJ,D.ep0],x.c)
D.cJY=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cKc=w([47,100,220,470,1000],x.n)
D.asE=w([0,2,4,7,9],x.t)
D.fkS=new B.aw(8.2,0.9,-6.3)
D.fnX=new B.aw(8.2,-0.1,-6.3)
D.flc=new B.aw(8.2,-0.1,-7.85)
D.cKN=w([D.fkS,D.fnX,D.flc],x.o)
D.cKZ=w([-0.28,0.28],x.n)
D.GX={volts:0}
D.a1l=new C.bs(D.GX,[3],x.J)
D.Hi=new C.eT(["b","battery",0.2,0.3,D.a1l])
D.dPW={on:0}
D.d9c=new C.bs(D.dPW,[1],x.J)
D.C8=new C.eT(["s","switch",0.5,0.3,D.d9c])
D.esq=new C.eT(["l","bulb",0.8,0.3,A.iQ])
D.cG0=w([D.Hi,D.C8,D.esq],x.d)
D.C7=new C.cJ(["b",0,"s",0])
D.erw=new C.cJ(["s",1,"l",0])
D.aIe=new C.cJ(["l",1,"b",1])
D.cVE=w([D.C7,D.erw,D.aIe],x.y)
D.cFu=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.e0Z=new B.mh("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cG0,D.cVE,D.cFu)
D.aCw={ohms:0}
D.aA9=new C.bs(D.aCw,[220],x.J)
D.erW=new C.eT(["r","resistor",0.5,0.3,D.aA9])
D.esD=new C.eT(["d","led",0.8,0.3,A.iQ])
D.cYq=w([D.Hi,D.erW,D.esD],x.d)
D.eqU=new C.cJ(["b",0,"r",0])
D.erq=new C.cJ(["r",1,"d",0])
D.er_=new C.cJ(["d",1,"b",1])
D.d52=w([D.eqU,D.erq,D.er_],x.y)
D.cYP=w(["led","diode","indicator"],x.s)
D.e15=new B.mh("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.cYq,D.d52,D.cYP)
D.a2C={level:0}
D.d8B=new C.bs(D.a2C,[0.2],x.J)
D.es1=new C.eT(["p","pot",0.5,0.3,D.d8B])
D.es3=new C.eT(["m","motor",0.8,0.3,A.iQ])
D.cGi=w([D.Hi,D.es1,D.es3],x.d)
D.eqT=new C.cJ(["b",0,"p",0])
D.erm=new C.cJ(["p",1,"m",0])
D.erj=new C.cJ(["m",1,"b",1])
D.d1q=w([D.eqT,D.erm,D.erj],x.y)
D.cVo=w(["fan","motor","spin","dimmer"],x.s)
D.e0X=new B.mh("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cGi,D.d1q,D.cVo)
D.a1i=new C.bs(D.a2C,[0.9],x.J)
D.aIl=new C.eT(["s","solar",0.25,0.3,D.a1i])
D.aIk=new C.eT(["l","bulb",0.75,0.3,A.iQ])
D.cIG=w([D.aIl,D.aIk],x.d)
D.ert=new C.cJ(["s",0,"l",0])
D.eri=new C.cJ(["l",1,"s",1])
D.cH0=w([D.ert,D.eri],x.y)
D.d1X=w(["solar","sun","without battery","no battery","free"],x.s)
D.e1_=new B.mh("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cIG,D.cH0,D.d1X)
D.esG=new C.eT(["c","crank",0.25,0.3,D.a1i])
D.cTR=w([D.esG,D.aIk],x.d)
D.eqX=new C.cJ(["c",0,"l",0])
D.erh=new C.cJ(["l",1,"c",1])
D.cUn=w([D.eqX,D.erh],x.y)
D.cU_=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.e0W=new B.mh("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.cTR,D.cUn,D.cU_)
D.d8A=new C.bs(D.a2C,[0.7],x.J)
D.es6=new C.eT(["t","turbine",0.25,0.3,D.d8A])
D.erV=new C.eT(["m","motor",0.75,0.3,A.iQ])
D.cOP=w([D.es6,D.erV],x.d)
D.erE=new C.cJ(["t",0,"m",0])
D.erk=new C.cJ(["m",1,"t",1])
D.cNS=w([D.erE,D.erk],x.y)
D.cSM=w(["wind","turbine","windmill","water","hydro"],x.s)
D.e0T=new B.mh("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.cOP,D.cNS,D.cSM)
D.aA6=new C.bs(D.GX,[9],x.J)
D.a3B=new C.eT(["b","battery",0.2,0.3,D.aA6])
D.aIj=new C.eT(["r","radio",0.8,0.3,A.iQ])
D.d2r=w([D.a3B,D.C8,D.aIj],x.d)
D.ery=new C.cJ(["s",1,"r",0])
D.aIf=new C.cJ(["r",1,"b",1])
D.bNk=w([D.C7,D.ery,D.aIf],x.y)
D.d1d=w(["radio","music","listen"],x.s)
D.e14=new B.mh("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.d2r,D.bNk,D.d1d)
D.d9D=new C.bs(D.GX,[12],x.J)
D.aIi=new C.eT(["b","battery",0.2,0.3,D.d9D])
D.esr=new C.eT(["t","tv",0.8,0.3,A.iQ])
D.cG1=w([D.aIi,D.C8,D.esr],x.d)
D.erz=new C.cJ(["s",1,"t",0])
D.aIg=new C.cJ(["t",1,"b",1])
D.cWG=w([D.C7,D.erz,D.aIg],x.y)
D.d2q=w(["tv","television","screen","watch"],x.s)
D.e0Q=new B.mh("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cG1,D.cWG,D.d2q)
D.esh=new C.eT(["z","buzzer",0.8,0.3,A.iQ])
D.cmO=w([D.Hi,D.C8,D.esh],x.d)
D.erA=new C.cJ(["s",1,"z",0])
D.erQ=new C.cJ(["z",1,"b",1])
D.cBt=w([D.C7,D.erA,D.erQ],x.y)
D.d_F=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.e11=new B.mh("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cmO,D.cBt,D.d_F)
D.es2=new C.eT(["h","heater",0.8,0.3,A.iQ])
D.cRx=w([D.a3B,D.C8,D.es2],x.d)
D.erv=new C.cJ(["s",1,"h",0])
D.er7=new C.cJ(["h",1,"b",1])
D.cC7=w([D.C7,D.erv,D.er7],x.y)
D.c70=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.e0R=new B.mh("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.cRx,D.cC7,D.c70)
D.est=new C.eT(["s","solar",0.2,0.25,D.a1i])
D.d9I=new C.bs(D.aCw,[100],x.J)
D.esw=new C.eT(["r","resistor",0.55,0.25,D.d9I])
D.esC=new C.eT(["c","capacitor",0.85,0.25,A.iQ])
D.erZ=new C.eT(["q","resistor",0.55,0.6,D.aA9])
D.esu=new C.eT(["d","led",0.85,0.6,A.iQ])
D.cWi=w([D.est,D.esw,D.esC,D.erZ,D.esu],x.d)
D.eru=new C.cJ(["s",0,"r",0])
D.erp=new C.cJ(["r",1,"c",0])
D.eqZ=new C.cJ(["c",1,"s",1])
D.eqY=new C.cJ(["c",0,"q",0])
D.ero=new C.cJ(["q",1,"d",0])
D.er0=new C.cJ(["d",1,"c",1])
D.cLZ=w([D.eru,D.erp,D.eqZ,D.eqY,D.ero,D.er0],x.y)
D.cTf=w(["capacitor","store","charge","flash"],x.s)
D.e13=new B.mh("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.cWi,D.cLZ,D.cTf)
D.es9=new C.eT(["b","battery",0.15,0.3,D.a1l])
D.esH=new C.eT(["l1","bulb",0.5,0.3,A.iQ])
D.esf=new C.eT(["l2","bulb",0.85,0.3,A.iQ])
D.cEj=w([D.es9,D.esH,D.esf],x.d)
D.eqS=new C.cJ(["b",0,"l1",0])
D.ere=new C.cJ(["l1",1,"l2",0])
D.erf=new C.cJ(["l2",1,"b",1])
D.cPs=w([D.eqS,D.ere,D.erf],x.y)
D.d2f=w(["series","two bulbs","dim"],x.s)
D.e0U=new B.mh("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cEj,D.cPs,D.d2f)
D.dQ7={volts:0,charge:1}
D.d9O=new C.bs(D.dQ7,[1.5,0],x.J)
D.esA=new C.eT(["b","battery",0.75,0.3,D.d9O])
D.cDL=w([D.aIl,D.esA],x.d)
D.ers=new C.cJ(["s",0,"b",0])
D.eqW=new C.cJ(["b",1,"s",1])
D.cMe=w([D.ers,D.eqW],x.y)
D.cTm=w(["charge","rechargeable","flat","recharge"],x.s)
D.e0S=new B.mh("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cDL,D.cMe,D.cTm)
D.d9C=new C.bs(D.GX,[4.5],x.J)
D.es4=new C.eT(["b","battery",0.2,0.3,D.d9C])
D.aIh=new C.eT(["p","phone",0.8,0.3,A.iQ])
D.cOF=w([D.es4,D.C8,D.aIh],x.d)
D.erx=new C.cJ(["s",1,"p",0])
D.a3A=new C.cJ(["p",1,"b",1])
D.cZH=w([D.C7,D.erx,D.a3A],x.y)
D.d02=w(["phone","charger","usb","mobile"],x.s)
D.e0Y=new B.mh("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.cOF,D.cZH,D.d02)
D.erS=new C.eT(["f","fan",0.8,0.3,A.iQ])
D.c_f=w([D.Hi,D.erS],x.d)
D.eqR=new C.cJ(["b",0,"f",0])
D.er5=new C.cJ(["f",1,"b",1])
D.cCA=w([D.eqR,D.er5],x.y)
D.cVn=w(["fan","cool","air","wind"],x.s)
D.e16=new B.mh("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.c_f,D.cCA,D.cVn)
D.esl=new C.eT(["b","battery",0.15,0.2,D.a1l])
D.erT=new C.eT(["a","ammeter",0.5,0.2,A.iQ])
D.erR=new C.eT(["l","bulb",0.85,0.2,A.iQ])
D.esn=new C.eT(["v","voltmeter",0.5,0.6,A.iQ])
D.cTF=w([D.esl,D.erT,D.erR,D.esn],x.d)
D.eqP=new C.cJ(["b",0,"a",0])
D.eqO=new C.cJ(["a",1,"l",0])
D.erG=new C.cJ(["v",0,"l",0])
D.erH=new C.cJ(["v",1,"l",1])
D.cM5=w([D.eqP,D.eqO,D.aIe,D.erG,D.erH],x.y)
D.d51=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.e12=new B.mh("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.cTF,D.cM5,D.d51)
D.esK=new C.eT(["b","battery",0.15,0.2,D.aA6])
D.es8=new C.eT(["t","tv",0.55,0.2,A.iQ])
D.aA7=new C.bs(D.GX,[5],x.J)
D.erX=new C.eT(["c","buck",0.4,0.5,D.aA7])
D.esa=new C.eT(["p","phone",0.8,0.5,A.iQ])
D.cK_=w([D.esK,D.es8,D.erX,D.esa],x.d)
D.eqV=new C.cJ(["b",0,"t",0])
D.aIc=new C.cJ(["b",0,"c",0])
D.aId=new C.cJ(["c",1,"p",0])
D.cOC=w([D.eqV,D.aIg,D.aIc,D.aId,D.a3A],x.y)
D.cIh=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.e0V=new B.mh("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cK_,D.cOC,D.cIh)
D.erY=new C.eT(["c","buck",0.5,0.3,D.aA7])
D.cBZ=w([D.aIi,D.erY,D.aIh],x.d)
D.cGq=w([D.aIc,D.aId,D.a3A],x.y)
D.cao=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.e0P=new B.mh("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cBZ,D.cGq,D.cao)
D.esd=new C.eT(["d","diode",0.5,0.3,A.iQ])
D.cPF=w([D.a3B,D.esd,D.aIj],x.d)
D.eqQ=new C.cJ(["b",0,"d",0])
D.er1=new C.cJ(["d",1,"r",0])
D.cpi=w([D.eqQ,D.er1,D.aIf],x.y)
D.cI_=w(["diode","protect","backwards","one way"],x.s)
D.e10=new B.mh("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.cPF,D.cpi,D.cI_)
D.Ol=w([D.e0Z,D.e15,D.e0X,D.e1_,D.e0W,D.e0T,D.e14,D.e0Q,D.e11,D.e0R,D.e13,D.e0U,D.e0S,D.e0Y,D.e16,D.e12,D.e0V,D.e0P,D.e10],C.aA("P<mh>"))
D.dLM=new B.x3("NGMY Tree Story","A family grows, one branch at a time")
D.dLH=new B.x3("Coin Hero","A little coin saves up and wins the day")
D.dLP=new B.x3("Space Voyage","The NGMY rocket explores the stars")
D.dLG=new B.x3("Ocean Friends","Fish, bubbles and a friendly whale")
D.dLI=new B.x3("Rainy Village","Storm clouds, then a rainbow")
D.dLK=new B.x3("Spark Adventure","Follow a spark round a circuit")
D.dLJ=new B.x3("Fireworks Night","Colour bursts over the city")
D.dLO=new B.x3("Little Train","A train rolls past the hills")
D.dLL=new B.x3("Robot Disco","A robot dances to the beat")
D.dLN=new B.x3("Garden Time","Flowers grow and butterflies fly")
D.Om=w([D.dLM,D.dLH,D.dLP,D.dLG,D.dLI,D.dLK,D.dLJ,D.dLO,D.dLL,D.dLN],C.aA("P<x3>"))
D.cLK=w([1,0.6,0.45,0.3,0.22,0.15],x.n)
D.fzd=new B.F0("Moon",1.62,A.dX,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.fzb=new B.F0("Mars",3.71,A.aE,"Mars has about 38 percent of Earth's gravity.")
D.fze=new B.F0("Mercury",3.7,A.jF,"Mercury is small, so its gravity is like Mars.")
D.fz8=new B.F0("Venus",8.87,A.aL,"Venus is almost as heavy as Earth, with strong gravity.")
D.fza=new B.F0("Earth",9.81,A.aY,"On Earth gravity is strong, and the air also slows you down.")
D.fzc=new B.F0("Neptune",11.15,A.d6,"Neptune pulls a little harder than Earth.")
D.fz9=new B.F0("Jupiter",24.79,A.cL,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.qD=w([D.fzd,D.fzb,D.fze,D.fz8,D.fza,D.fzc,D.fz9],C.aA("P<F0>"))
D.asP=w([A.bY,A.cr,A.aE,A.bz,A.cL],x.O)
D.cLY=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a_Y=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cMB=w([0.2,0.5,0.8],x.n)
D.cML=w([1,2,3,4,5,6],x.n)
D.btQ=new C.a0(63040,"MaterialIcons",!1)
D.eoz=new C.bz("peg","Peg",D.btQ)
D.enN=new C.bz("bar","Bar",O.AQ)
D.eod=new C.bz("erase","Erase",A.LF)
D.cMM=w([D.eoz,D.enN,D.eod],x.c)
D.ewY=new C.cO(A.bh,A.J,4)
D.cMW=w([D.ewY],x.q)
D.asS=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aQd=new B.Jd(0,"accordion")
D.cCS=w([A.j8,A.AR,A.AF],x.w)
D.cJr=w(["Mail","SMS","Ad"],x.s)
D.cDl=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.fxq=new B.zG(D.aQd,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aty,D.cCS,D.cJr,D.cDl)
D.a71=new B.Jd(1,"flip")
D.cT9=w([A.pn,A3.Fl,A.tj],x.w)
D.cOl=w(["Unlock","Verify","Secure"],x.s)
D.cBW=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.fxp=new B.zG(D.a71,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.at8,D.cT9,D.cOl,D.cBW)
D.aQe=new B.Jd(2,"towers")
D.cNd=w([A.xr,A.ps,A.hF],x.w)
D.cMS=w(["Save","Grow","Earn"],x.s)
D.cq6=w(["","",""],x.s)
D.fxr=new B.zG(D.aQe,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a_Q,D.cNd,D.cMS,D.cq6)
D.a72=new B.Jd(3,"assemble")
D.cU2=w([A.mS,A.h3,A.dS],x.w)
D.cIR=w(["Launch","Charge","Shine"],x.s)
D.cQM=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.fxt=new B.zG(D.a72,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.arB,D.cU2,D.cIR,D.cQM)
D.aQf=new B.Jd(4,"carousel")
D.cTS=w([A.b8,A.hS],x.O)
D.cJB=w([A.m9,A.ahG,A.Z0],x.w)
D.cEG=w(["Explore","Discover","Learn"],x.s)
D.cOK=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.fxo=new B.zG(D.aQf,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.cTS,D.cJB,D.cEG,D.cOK)
D.aQg=new B.Jd(5,"burst")
D.cMO=w([A.ji,A.rw],x.O)
D.cDg=w([A.l3,A.m7,A.hW],x.w)
D.cDz=w(["Cheer","Win","Love"],x.s)
D.cFA=w(["Make some noise","First place","Share the joy"],x.s)
D.fxs=new B.zG(D.aQg,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cMO,D.cDg,D.cDz,D.cFA)
D.asT=w([D.fxq,D.fxp,D.fxr,D.fxt,D.fxo,D.fxs],C.aA("P<zG>"))
D.eoB=new C.bz("skin","Skin",A.ahH)
D.epR=new C.bz("muscle","Muscles",A.LT)
D.epC=new C.bz("organ","Organs",A.hW)
D.bth=new C.a0(62747,"MaterialIcons",!1)
D.epF=new C.bz("bone","Skeleton",D.bth)
D.epX=new C.bz("vessel","Blood vessels",A.pu)
D.cNi=w([D.eoB,D.epR,D.epC,D.epF,D.epX],x.c)
D.fta=new B.By("outlet","Electrical wiring","Wall outlet","Wire a 120 volt receptacle. Black to brass, white to silver, bare copper to green.",U.LO,A.aR)
D.ft9=new B.By("switch","Electrical wiring","Light switch","Two cables, two black wires and a wire nut. Learn what a switch really cuts.",D.Z_,A.aY)
D.ft8=new B.By("gfci","Electrical wiring","GFCI outlet","LINE and LOAD: the outlet that protects you near water.",A.tj,A.bs)
D.ftc=new B.By("ptrap","Plumbing","Sink drain (P-trap)","Build the drain under a sink and stop sewer gas with a water seal.",U.aid,A.cw)
D.ftd=new B.By("faucet","Plumbing","Faucet supply lines","Hot on the left, cold on the right: connect the hoses and open the valves.",A.pu,A.cx)
D.ftb=new B.By("house","The whole house","Build and fix a house","Build it stage by stage, look inside the walls and fix a tripped breaker and a leak.",A.tc,A.bz)
D.asW=w([D.fta,D.ft9,D.ft8,D.ftc,D.ftd,D.ftb],C.aA("P<By>"))
D.fnU=new B.aw(3,3.2,-7.85)
D.fpa=new B.aw(3,4,-7.85)
D.foV=new B.aw(3,4.2,-7.4)
D.fl3=new B.aw(3,3.95,-7)
D.cO5=w([D.fnU,D.fpa,D.foV,D.fl3],x.o)
D.cO9=w([A.fZ,A.o6],x.O)
D.cOb=w([A.bk,A.aR,A.d1],x.O)
D.eua=new B.ul("Simple legs","Light. Land gently.",0.15,0.2)
D.euc=new B.ul("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.euf=new B.ul("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Bc=w([D.eua,D.euc,D.euf],x._)
D.cOS=w([1.77,3.55,7.15,16.7],x.n)
D.fo9=new B.aw(6,0.2,0)
D.fno=new B.aw(6,2.6,0)
D.aOz=new B.aw(8.6,2.6,0)
D.cPi=w([D.fo9,D.fno,D.aOz],x.o)
D.fqc=new B.Eu("black","Black \xb7 hot",D.aca,A.c)
D.fqd=new B.Eu("white","White \xb7 neutral",D.zp,A.az)
D.at_=w([D.fqc,D.fqd,D.aOO],x.ak)
D.cPZ=w([-2.4,2.4],x.n)
D.cR9=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.eky=new C.z("spiral","Spiral")
D.e4Z=new C.z("barred","Barred spiral")
D.efH=new C.z("elliptical","Elliptical")
D.cRN=w([D.eky,D.e4Z,D.efH],x.L)
D.eqz=new C.cJ(["beat",0.18,0.28,0])
D.erB=new C.cJ(["burst",0.7,0.2,0])
D.erL=new C.cJ(["delay",0.45,0.5,1])
D.erl=new C.cJ(["ripple",0.75,0.6,3])
D.cIB=w([D.eqz,D.erB,D.erL,D.erl],x.e)
D.a3t=new C.z(2,3)
D.cSA=w([N.mZ,K.Hh,D.a3t],x.x)
D.fwG=new B.EO("First spark","A clock lights a burst and a ripple",D.cIB,D.cSA)
D.er4=new C.cJ(["beat",0.15,0.3,1])
D.eqe=new C.cJ(["ripple",0.62,0.15,0])
D.erI=new C.cJ(["delay",0.4,0.45,0])
D.eqL=new C.cJ(["ripple",0.7,0.45,0])
D.eqv=new C.cJ(["delay",0.4,0.7,1])
D.ern=new C.cJ(["shake",0.75,0.75,0])
D.d37=w([D.er4,D.eqe,D.erI,D.eqL,D.eqv,D.ern],x.e)
D.e2r=new C.z(2,4)
D.aI2=new C.z(4,5)
D.cLP=w([N.mZ,K.Hh,D.a3t,D.e2r,D.aI2],x.x)
D.fwI=new B.EO("Heartbeat","Two thumps, then a shake",D.d37,D.cLP)
D.eqE=new C.cJ(["dice",0.15,0.7,1])
D.erN=new C.cJ(["echo",0.4,0.7,0])
D.eqK=new C.cJ(["comet",0.7,0.5,4])
D.erC=new C.cJ(["burst",0.72,0.2,1])
D.er2=new C.cJ(["burst",0.3,0.25,0])
D.eqF=new C.cJ(["pop",0.55,0.85,0])
D.c6A=w([D.eqE,D.erN,D.eqK,D.erC,D.er2,D.eqF],x.e)
D.e1U=new C.z(1,3)
D.e1V=new C.z(1,4)
D.aI1=new C.z(0,5)
D.cTN=w([N.mZ,K.vp,D.e1U,D.e1V,D.aI1],x.x)
D.fwH=new B.EO("Fireworks","Dice launch comets that burst in colour",D.c6A,D.cTN)
D.eqI=new C.cJ(["beat",0.15,0.2,2])
D.erb=new C.cJ(["chance",0.4,0.2,0])
D.eqB=new C.cJ(["ball",0.7,0.12,3])
D.eqo=new C.cJ(["chance",0.4,0.5,1])
D.erM=new C.cJ(["ball",0.3,0.08,1])
D.eqh=new C.cJ(["ripple",0.7,0.55,3])
D.c_E=w([D.eqI,D.erb,D.eqB,D.eqo,D.erM,D.eqh],x.e)
D.a3u=new C.z(3,4)
D.e2s=new C.z(2,5)
D.cmy=w([N.mZ,K.vp,K.a3s,D.a3u,D.e2s],x.x)
D.fwF=new B.EO("Rain","Balls fall at random and splash",D.c_E,D.cmy)
D.erc=new C.cJ(["beat",0.12,0.45,2])
D.erD=new C.cJ(["toggle",0.38,0.2,0])
D.erK=new C.cJ(["wash",0.7,0.15,4])
D.eqD=new C.cJ(["count3",0.38,0.45,0])
D.erF=new C.cJ(["burst",0.72,0.4,0])
D.er3=new C.cJ(["light",0.55,0.7,1])
D.eqp=new C.cJ(["pop",0.8,0.8,4])
D.cWg=w([D.erc,D.erD,D.erK,D.eqD,D.erF,D.er3,D.eqp],x.e)
D.e2O=new C.z(3,6)
D.c2L=w([N.mZ,K.vp,K.a3s,D.a3u,D.aI1,D.e2O],x.x)
D.fwD=new B.EO("Disco","A beat drives lights, washes and bursts",D.cWg,D.c2L)
D.erP=new C.cJ(["button",0.12,0.2,0])
D.eqj=new C.cJ(["delay",0.34,0.2,1])
D.erO=new C.cJ(["light",0.56,0.2,1])
D.erJ=new C.cJ(["delay",0.56,0.45,1])
D.erd=new C.cJ(["ball",0.34,0.6,0])
D.eqn=new C.cJ(["delay",0.34,0.8,1])
D.eqd=new C.cJ(["burst",0.7,0.8,5])
D.bNY=w([D.erP,D.eqj,D.erO,D.erJ,D.erd,D.eqn,D.eqd],x.e)
D.e4K=new C.z(5,6)
D.d_O=w([N.mZ,K.vp,D.a3t,D.a3u,D.aI2,D.e4K],x.x)
D.fwE=new B.EO("Domino","Tap the button and watch it run down the line",D.bNY,D.d_O)
D.atc=w([D.fwG,D.fwI,D.fwH,D.fwF,D.fwD,D.fwE],C.aA("P<EO>"))
D.cRV=w([0.05,0.15,0.25],x.n)
D.cS8=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.cSL=w([1.5,3,4.5,9,12],x.n)
D.cSP=w([y.r,"Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.",y.x,"Fasten the white wire to the silver LINE screw.","Fasten the black wire to the brass LINE screw.","Push the GFCI into the box and put the plate on.","Turn the power on, press RESET, then press TEST. It must click off."],x.s)
D.enl=new C.bz("dice","Dice",A.m6)
D.eoj=new C.bz("coin","Coin",F.xk)
D.epS=new C.bz("num","Number",A.xu)
D.cSV=w([D.enl,D.eoj,D.epS],x.c)
D.cSY=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fkD=new B.NQ("Moon",1.62,0,4291941851)
D.fkE=new B.NQ("Mars",3.71,0.01,4294472049)
D.fkF=new B.NQ("Earth",9.81,1,4281908728)
D.fkH=new B.NQ("Jupiter",24.79,1.4,4294677052)
D.fkG=new B.NQ("Sun",274,2,4294688548)
D.xU=w([D.fkD,D.fkE,D.fkF,D.fkH,D.fkG],C.aA("P<NQ>"))
D.ati=w([A.cx,A.aL,A.bf,A.aY,A.bz,A.bY,A.cL,A.hq],x.O)
D.cTn=w([0.1,8.05],x.n)
D.fmz=new B.aw(-0.35,11,-3.4)
D.fm0=new B.aw(-0.35,3.2,-3.2)
D.fnu=new B.aw(-0.35,2.2,-1.9)
D.flz=new B.aw(-0.35,0.7,-1.5)
D.cTB=w([D.fmz,D.fm0,D.fnu,D.flz],x.o)
D.foR=new B.aw(5.2,7.5,-7.85)
D.fnk=new B.aw(5.2,4,-7.85)
D.cTH=w([D.foR,D.fnk],x.o)
D.dOC={H:0}
D.d9d=new C.bs(D.dOC,[2],x.I)
D.daK=new B.rL("Hydrogen","H\u2082",D.d9d,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.dOD={H:0,Cl:1}
D.d9p=new C.bs(D.dOD,[1,1],x.I)
D.daM=new B.rL("Hydrogen chloride","HCl",D.d9p,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.dOE={H:0,O:1}
D.d8X=new C.bs(D.dOE,[2,1],x.I)
D.daN=new B.rL("Water","H\u2082O",D.d8X,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.dOR={N:0,H:1}
D.d9N=new C.bs(D.dOR,[1,3],x.I)
D.daV=new B.rL("Ammonia","NH\u2083",D.d9N,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a2B={C:0,H:1}
D.d9G=new C.bs(D.a2B,[1,4],x.I)
D.daO=new B.rL("Methane","CH\u2084",D.d9G,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.dOF={H:0,S:1}
D.d85=new C.bs(D.dOF,[2,1],x.I)
D.daU=new B.rL("Hydrogen sulfide","H\u2082S",D.d85,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.dOW={O:0}
D.d9K=new C.bs(D.dOW,[2],x.I)
D.daW=new B.rL("Oxygen","O\u2082",D.d9K,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.dOQ={N:0}
D.d9e=new C.bs(D.dOQ,[2],x.I)
D.daL=new B.rL("Nitrogen","N\u2082",D.d9e,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.dOq={C:0,O:1}
D.d9T=new C.bs(D.dOq,[1,2],x.I)
D.daS=new B.rL("Carbon dioxide","CO\u2082",D.d9T,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aCt={C:0,H:1,O:2}
D.d7S=new C.bs(D.aCt,[1,2,1],x.I)
D.daT=new B.rL("Formaldehyde","CH\u2082O",D.d7S,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.d9F=new C.bs(D.a2B,[2,4],x.I)
D.daQ=new B.rL("Ethene","C\u2082H\u2084",D.d9F,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.d9E=new C.bs(D.a2B,[2,6],x.I)
D.daP=new B.rL("Ethane","C\u2082H\u2086",D.d9E,"Two carbons joined by a single bond, each holding three hydrogens.")
D.d7T=new C.bs(D.aCt,[1,4,1],x.I)
D.daR=new B.rL("Methanol","CH\u2083OH",D.d7T,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a0d=w([D.daK,D.daM,D.daN,D.daV,D.daO,D.daU,D.daW,D.daL,D.daS,D.daT,D.daQ,D.daP,D.daR],C.aA("P<rL>"))
D.cTT=w([A.bY,A.aY,A.dL,A.bf],x.O)
D.dcp=new B.wP("NGMY Ads","\ud83d\udce2","Every NGMY promotion, as cartoons",A.bY,-1)
D.dcm=new B.wP("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.d6,0)
D.dcq=new B.wP("Jobs","\ud83d\udcbc","Find work and get hired",A.aR,1)
D.dcn=new B.wP("Growth Income","\ud83d\udcc8","Make your money grow",A.bl,2)
D.dcs=new B.wP("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fz,3)
D.dco=new B.wP("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bS,4)
D.dcr=new B.wP("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.c8,5)
D.dct=new B.wP("Invoices","\ud83e\uddfe","Professional invoices",A.by,6)
D.dcl=new B.wP("Calendar","\ud83d\udcc5","This month, today lit up",A.aE,-2)
D.nG=w([D.dcp,D.dcm,D.dcq,D.dcn,D.dcs,D.dco,D.dcr,D.dct,D.dcl],C.aA("P<wP>"))
D.aOq=new B.aw(0,15.5,-3.6)
D.fmF=new B.aw(0,20,-3.6)
D.fp5=new B.aw(0,22.5,-2)
D.flP=new B.aw(0,22.5,1.1999999999999997)
D.fmI=new B.aw(0,21.1,1.6)
D.cUe=w([D.aOq,D.fmF,D.fp5,D.flP,D.fmI],x.o)
D.cUM=w([],x.fq)
D.a0n=w([],x.E)
D.cUN=w([],x.gm)
D.a0o=w([],x.dO)
D.cUT=w([],x.o)
D.dVT=new B.e5("battery","Battery","\ud83d\udd0b",A.bf,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.dVZ=new B.e5("solar","Solar panel","\u2600\ufe0f",A.cr,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.dWD=new B.e5("crank","Hand crank","\ud83d\udd04",A.cL,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.dWf=new B.e5("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aY,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.dVL=new B.e5("buck","Step-down converter","\ud83d\udd3d",A.hq,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.dWd=new B.e5("regulator","5 V regulator","\ud83e\uddca",A.bI,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.dWI=new B.e5("diode","Diode","\u27a1\ufe0f",A.aL,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.dWp=new B.e5("ldr","Light sensor","\ud83c\udf1e",A.dL,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.dW3=new B.e5("switch","Switch","\ud83c\udf9a\ufe0f",A.bz,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.dWF=new B.e5("fuse","Fuse","\ud83e\uddef",A.cx,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.dVD=new B.e5("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hq,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.dWq=new B.e5("resistor","Resistor","\u3030\ufe0f",A.aL,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.dWs=new B.e5("bulb","Light bulb","\ud83d\udca1",A.dL,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.dW0=new B.e5("led","LED","\ud83d\udd34",A.aE,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.dW4=new B.e5("motor","Motor","\u2699\ufe0f",A.bI,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.dWm=new B.e5("buzzer","Buzzer","\ud83d\udd14",A.bY,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.dVU=new B.e5("heater","Heater","\ud83d\udd25",A.cL,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.dWh=new B.e5("capacitor","Capacitor","\ud83e\udeab",A.cw,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.dW9=new B.e5("radio","Radio","\ud83d\udcfb",A.nl,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.dW6=new B.e5("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b8,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.dVK=new B.e5("voltmeter","Voltmeter","\ud83e\udded",A.bs,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.dVR=new B.e5("ammeter","Ammeter","\ud83d\udcdf",A.aL,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.dVX=new B.e5("fan","Fan","\ud83c\udf00",A.aY,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.dWK=new B.e5("speaker","Speaker","\ud83d\udd0a",A.bY,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.dWz=new B.e5("clock","Digital clock","\u23f0",A.bf,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.dWc=new B.e5("calculator","Calculator","\ud83e\uddee",A.Jk,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.dVQ=new B.e5("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cw,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.dWJ=new B.e5("router","WiFi router","\ud83d\udcf6",A.hq,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.dWM=new B.e5("siren","Siren","\ud83d\udea8",A.aE,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.dVG=new B.e5("toycar","Toy car","\ud83d\ude97",A.cL,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.dWN=new B.e5("kettle","Kettle","\ud83e\uded6",A.o3,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.dVO=new B.e5("lamp","Desk lamp","\ud83e\ude94",A.dL,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.dW_=new B.e5("lights","Party lights","\ud83c\udf84",A.nl,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.dWa=new B.e5("fridge","Fridge","\ud83e\uddca",A.fZ,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.dVI=new B.e5("washer","Washing machine","\ud83e\udee7",A.cw,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.dWA=new B.e5("blender","Blender","\ud83e\udd64",A.cx,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.dW7=new B.e5("drone","Drone","\ud83d\ude81",A.bI,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.dVN=new B.e5("drill","Power drill","\ud83d\udd29",A.aL,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.dWb=new B.e5("torch","Torch","\ud83d\udd26",A.bJ,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.dWx=new B.e5("neon","Neon sign","\ud83e\udea7",A.bY,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.dVJ=new B.e5("microwave","Microwave","\ud83c\udf72",A.cL,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.dWr=new B.e5("doorbell","Doorbell","\ud83d\udd14",A.cr,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.dVW=new B.e5("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.dWl=new B.e5("console","Game console","\ud83c\udfae",A.bz,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.dWC=new B.e5("heartmon","Heart monitor","\ud83e\ude7a",A.fU,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.dVH=new B.e5("aquarium","Aquarium","\ud83d\udc20",A.b8,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.dWg=new B.e5("lighthouse","Lighthouse","\ud83d\uddfc",A.dL,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.dWo=new B.e5("discoball","Disco ball","\ud83e\udea9",A.nl,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.dWH=new B.e5("robot","Robot","\ud83e\udd16",A.aY,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.dVF=new B.e5("toaster","Toaster","\ud83c\udf5e",A.e1,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.dWL=new B.e5("ledstrip","LED strip","\ud83c\udf08",A.bY,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.dWw=new B.e5("pump","Water pump","\ud83d\udeb0",A.aY,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.dWi=new B.e5("hairdryer","Hair dryer","\ud83d\udca8",A.ji,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.dWu=new B.e5("headphones","Headphones","\ud83c\udfa7",A.bz,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.dVP=new B.e5("smartwatch","Apple Watch Ultra","\u231a",A.bs,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.dWG=new B.e5("tablet","iPad Pro M5","\ud83d\udcf2",A.cw,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.dVC=new B.e5("lgtv","LG OLED evo G5","\ud83d\udcfa",A.fU,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.dW8=new B.e5("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bq,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.dW1=new B.e5("appletv","Apple TV 4K","\ud83d\udcfa",A.bX,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.dWn=new B.e5("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",D.Jy,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.dVE=new B.e5("iphonefold","iPhone Fold","\ud83d\udcf1",A.b2,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.dVS=new B.e5("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d6,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.dWE=new B.e5("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.ct,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.dWj=new B.e5("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bl,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.dWe=new B.e5("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cd,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.dWv=new B.e5("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aE,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.dW2=new B.e5("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bf,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.dWk=new B.e5("honor","Honor Magic V5","\ud83d\udcf1",A.cw,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.dWt=new B.e5("vivo","vivo X300 Pro","\ud83d\udcf1",A.cL,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.dWy=new B.e5("ereader","Kindle Scribe","\ud83d\udcd6",A.bq,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.dVB=new B.e5("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.c8,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.dW5=new B.e5("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.ct,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.dVY=new B.e5("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b8,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.dVM=new B.e5("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dL,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.dVV=new B.e5("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aE,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.dWB=new B.e5("vision","Apple Vision Pro","\ud83e\udd7d",A.bz,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.OJ=w([D.dVT,D.dVZ,D.dWD,D.dWf,D.dVL,D.dWd,D.dWI,D.dWp,D.dW3,D.dWF,D.dVD,D.dWq,D.dWs,D.dW0,D.dW4,D.dWm,D.dVU,D.dWh,D.dW9,D.dW6,D.dVK,D.dVR,D.dVX,D.dWK,D.dWz,D.dWc,D.dVQ,D.dWJ,D.dWM,D.dVG,D.dWN,D.dVO,D.dW_,D.dWa,D.dVI,D.dWA,D.dW7,D.dVN,D.dWb,D.dWx,D.dVJ,D.dWr,D.dVW,D.dWl,D.dWC,D.dVH,D.dWg,D.dWo,D.dWH,D.dVF,D.dWL,D.dWw,D.dWi,D.dWu,D.dVP,D.dWG,D.dVC,D.dW8,D.dW1,D.dWn,D.dVE,D.dVS,D.dWE,D.dWj,D.dWe,D.dWv,D.dW2,D.dWk,D.dWt,D.dWy,D.dVB,D.dW5,D.dVY,D.dVM,D.dVV,D.dWB],C.aA("P<e5>"))
D.cV8=w([0,0.46,0.82],x.n)
D.cVj=w([5,10,15,25,45,60],x.t)
D.cVC=w([-0.045,0.03,-0.015],x.n)
D.cVL=w(["Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.","Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.","Pick the trap arm and tap its outline. It joins the trap to the wall drain.","Slide each slip nut up to its joint and hand tighten it: tap the nuts.","Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas."],x.s)
D.cVZ=w([0.9,0.97,1],x.n)
D.atF=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.tr=w([0.05,0.2,0.35],x.n)
D.brr=new B.pj(21,"LOAD hot (brass, taped)",A.Hr,!0)
D.brl=new B.pj(22,"LINE hot (brass)",D.a43,!1)
D.brm=new B.pj(23,"LOAD neutral (silver, taped)",A.Hr,!0)
D.brq=new B.pj(24,"LINE neutral (silver)",D.a42,!1)
D.agj=new B.pj(25,"Green ground screw",D.aJi,!1)
D.cWo=w([D.brr,D.brl,D.brm,D.brq,D.agj],x.r)
D.cDD=w([D.DH,D.DH],x.O)
D.cIx=w([A.DU,A.M],x.O)
D.cHE=w([A.fz,A.hp],x.O)
D.cBT=w([A.hS,A.nk],x.O)
D.c_d=w([A.lp,A.dt],x.O)
D.atG=w([D.cDD,D.cIx,D.cHE,D.cBT,D.c_d],x.gG)
D.fl5=new B.aw(11.4,4.6,-6)
D.fmM=new B.aw(11.4,5,-7.85)
D.flA=new B.aw(2.6,5,-7.85)
D.flH=new B.aw(2.6,3.4,-7.85)
D.cWu=w([D.fl5,D.fmM,D.flA,D.flH],x.o)
D.cWy=w(["hot","cold"],x.s)
D.cWN=w([A.dW,A.f4],x.O)
D.fkr=new B.uy("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fks=new B.uy("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fkj=new B.uy("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fkq=new B.uy("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fko=new B.uy("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fkk=new B.uy("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fkp=new B.uy("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fkl=new B.uy("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fkn=new B.uy("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fkm=new B.uy("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.Bi=w([D.fkr,D.fks,D.fkj,D.fkq,D.fko,D.fkk,D.fkp,D.fkl,D.fkn,D.fkm],C.aA("P<uy>"))
D.b8b=new C.w(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.cX4=w([D.DH,D.b8b,D.aaN,A.aam],x.O)
D.aWe=new C.ac(0,A.G,A.hB,A.dz,6)
D.cXU=w([D.aWe],x.V)
D.ehG=new C.z("Slab","First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.")
D.ejD=new C.z("Framing","The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.")
D.e9J=new C.z("Plumbing rough-in","The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.")
D.eg0=new C.z("Electrical rough-in","The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.")
D.eh0=new C.z("Drywall","Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.")
D.ea7=new C.z("Fixtures","Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.")
D.ebj=new C.z("Roof","The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.")
D.cYn=w([D.ehG,D.ejD,D.e9J,D.eg0,D.eh0,D.ea7,D.ebj],x.L)
D.atQ=w([A.bM,A.cr,A.d1,A.az],x.O)
D.e1k=new C.z(0,"AND")
D.e1W=new C.z(1,"Adder")
D.e2t=new C.z(2,"Blinker")
D.e2P=new C.z(3,"Memory")
D.cYB=w([D.e1k,D.e1W,D.e2t,D.e2P],x.ek)
D.atS=w([-104,0,104],x.n)
D.atT=w([-14,3],x.n)
D.cZ1=w([-16,16],x.n)
D.vb=w([-1,1],x.n)
D.atU=w([-22,22],x.n)
D.atV=w([-24,24],x.n)
D.cZ5=w([-5,5],x.n)
D.cZ6=w([-8,0,8],x.n)
D.cZ7=w([-8,8],x.n)
D.atX=w([-92,0,92],x.n)
D.cZr=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eu7=new B.ul("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eue=new B.ul("Medium tank","Balanced.",0.35,1)
D.eud=new B.ul("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.OV=w([D.eu7,D.eue,D.eud],x._)
D.cZG=w([A.aJ,A.ak],x.O)
D.cZK=w([1,2,3,4,6,8],x.n)
D.mV=w([0.04,0.2,0.36],x.n)
D.fqr=new B.uA("NGMY Civic Registry","Enroll your family. Stay counted and helped together.",A.dm,A.aY)
D.fqA=new B.uA("NGMY Jobs","Find work. Get hired. Get paid.",A.dn,A.aL)
D.fqx=new B.uA("Growth Income","Make your money grow every work day.",A.fX,A.ew)
D.fqy=new B.uA("NGMY Store","African food and traditions. Support our Congolese and African community.",A.k5,A.cr)
D.fqv=new B.uA("Kiswahili School","Learn Swahili and English, step by step.",A.cY,A.mF)
D.fqu=new B.uA("Document Scanner","Scan, save and share your papers.",A.p5,A.fV)
D.fqs=new B.uA("Invoice Creator","Make professional invoices in minutes.",A.rp,A.nX)
D.fqp=new B.uA("Family Book and Tree","Write your family story. Grow your tree.",A.j1,A.Jh)
D.fqq=new B.uA("NGMY Wallet","Save, send and earn coins.",A.p0,A.dL)
D.fqt=new B.uA("Vault Games","Play, win and learn.",A.dW,A.b8)
D.fqz=new B.uA("Electronics Lab","Build real circuits and learn.",A.hS,A.ba)
D.fqw=new B.uA("NGMY Helper and Advisors","Friendly help, any time.",A.lp,A.cL)
D.d_6=w([D.fqr,D.fqA,D.fqx,D.fqy,D.fqv,D.fqu,D.fqs,D.fqp,D.fqq,D.fqt,D.fqz,D.fqw],C.aA("P<uA>"))
D.au5=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.d_z=w([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],x.n)
D.flD=new B.aw(8.2,5,-7.85)
D.fnn=new B.aw(8.2,1.2,-7.85)
D.foi=new B.aw(8.2,1,-7.4)
D.d_D=w([D.flD,D.fnn,D.foi],x.o)
D.epB=new C.bz(D.aQd,"Fold",F.aiD)
D.eoP=new C.bz(D.a71,"Flip",A.EY)
D.btA=new C.a0(62889,"MaterialIcons",!1)
D.epQ=new C.bz(D.aQe,"Rise",D.btA)
D.aiR=new C.a0(983870,"MaterialIcons",!1)
D.emW=new C.bz(D.a72,"Assemble",D.aiR)
D.en4=new C.bz(D.aQf,"Spin",D.ahc)
D.en1=new C.bz(D.aQg,"Pop",A.l3)
D.d_L=w([D.epB,D.eoP,D.epQ,D.emW,D.en4,D.en1],C.aA("P<+(Jd,n,a0)>"))
D.aua=w([A.bY,A.dL,A.bs,A.aY,A.bz,A.cx],x.O)
D.dPE={hot:0}
D.aJd=new C.eS(D.dPE,1,x.M)
D.dZH=new B.DV(61,"Hot shut-off valve (left)",D.aJd,"Hot is always on the LEFT. The red hose goes on the left valve.")
D.dPt={cold:0}
D.aJm=new C.eS(D.dPt,1,x.M)
D.dZI=new B.DV(62,"Cold shut-off valve (right)",D.aJm,"Cold is always on the RIGHT. The blue hose goes on the right valve.")
D.dZF=new B.DV(63,"Hot faucet inlet (left)",D.aJd,"The left faucet inlet takes the hot (red) hose.")
D.dZG=new B.DV(64,"Cold faucet inlet (right)",D.aJm,"The right faucet inlet takes the cold (blue) hose.")
D.a0H=w([D.dZH,D.dZI,D.dZF,D.dZG],C.aA("P<DV>"))
D.d_W=w([A.aY,A.cL,A.cL,A.bf],x.O)
D.d07=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.elW=new C.z("Make the output turn HALF as fast as the input.",0.5)
D.e7Y=new C.z("Make the output turn TWICE as fast.",2)
D.e25=new C.z("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.ekI=new C.z("Make the output turn 4 times faster.",4)
D.edl=new C.z("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.egh=new C.z("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.eeQ=new C.z("Make the output turn 3 times faster.",3)
D.efy=new C.z("Make the output spin at the same speed as the input, using four different gears.",1)
D.auf=w([D.elW,D.e7Y,D.e25,D.ekI,D.edl,D.egh,D.eeQ,D.efy],C.aA("P<+(n,O)>"))
D.d13=w([3,4.5,5,6,9],x.n)
D.d1b=w([1,2,3,4,5,6,7,8],x.n)
D.aWM=new C.ac(0,A.G,A.aV,A.J,16)
D.d1u=w([D.aWM],x.V)
D.OX=w([A.bY,A.cr,A.bf,A.aY,A.bz,A.cx,A.c,A.cL],x.O)
D.eny=new C.bz("hot","Hot hose (red)",D.zE)
D.eoc=new C.bz("cold","Cold hose (blue)",D.wj)
D.d1O=w([D.eny,D.eoc],C.aA("P<+(n,n,w)>"))
D.d1U=w(["solar","turbine","crank","pot"],x.s)
D.a6f=new B.aw(15,2.6,0)
D.aup=w([D.aOz,D.a6f],x.o)
D.d2d=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.d2h=w(["tail","trap","arm"],x.s)
D.d2i=w([0,0.35,0.75,1],x.n)
D.d2t=w([A.aE,A.cd,A.cr,A.bl,A.d6,A.b2],x.O)
D.eng=new C.bz("drop","Drop",D.ait)
D.eni=new C.bz("weight","Weight",L.aiT)
D.epL=new C.bz("cannon","Newton's cannon",A.ahT)
D.d2S=w([D.eng,D.eni,D.epL],x.c)
D.ejn=new C.z("piano","Piano")
D.ej3=new C.z("organ","Organ")
D.eex=new C.z("bell","Bell")
D.ejp=new C.z("pluck","Pluck")
D.ekH=new C.z("synth","Synth")
D.egc=new C.z("flute","Flute")
D.aux=w([D.ejn,D.ej3,D.eex,D.ejp,D.ekH,D.egc],x.L)
D.d3g=w(["M","T","W","T","F","S","S"],x.s)
D.d3j=w(["volts","level","ohms","on"],x.s)
D.d43=w([0.72,-0.72],x.n)
D.d4h=w([A.c,A.oV],x.O)
D.d4s=w([A.j8,A.AR,A.AF,A.pn,A3.Fl,A.tj,A.xr,A.ps,A.hF,A.mS,A.h3,A.dS,A.hW,A.hX,A.m7,A.m8,A.xs,A.qA,A.ly,A.ES,A.ti,A.LV,A.AI,A.aio,A.LJ,A.xn,A.LT,A.ai2,I.aiN,A.l3],x.w)
D.dPn={blackLine:0,blackLoad:1}
D.aJ9=new C.eS(D.dPn,2,x.M)
D.brk=new B.pj(21,"Brass screw (top)",D.aJ9,!1)
D.bro=new B.pj(22,"Brass screw (bottom)",D.aJ9,!1)
D.d4P=w([D.brk,D.bro,D.agj],x.r)
D.d4Y=w([1,0.18,0.06],x.n)
D.d5l=w([0.72,1],x.n)
D.d5t=w(["Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).","Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.","Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.","Open the valves slowly and turn on the faucet. Check every connection for drips."],x.s)
D.d5w=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.dQ0={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.d7M=new C.bs(D.dQ0,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aCv={A:0,T:1,C:2,G:3}
D.a1d=new C.bs(D.aCv,["U","A","G","C"],x.l)
D.d7U=new C.bs(D.aCv,["T","A","G","C"],x.l)
D.dON={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.cTX=w([0,2,4,5,7,9,11],x.t)
D.cCY=w([0,2,3,5,7,8,10],x.t)
D.cYN=w([0,3,5,6,7,10],x.t)
D.Bo=new C.bs(D.dON,[D.asE,D.cTX,D.cCY,D.cYN,D.alj],C.aA("bs<n,ak<H>>"))
D.dPP={A:0,T:1,U:2,C:3,G:4}
D.d88=new C.bs(D.dPP,[A.cx,A.cw,A.cw,A.aL,A.bf],C.aA("bs<n,w>"))
D.dOb={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.fqO=new B.xr("Switch",D.Z_,A.cr,0,"Tap it to turn it ON or OFF.")
D.fqK=new B.xr("Blinker",A.ok,A.bs,0,"Turns itself ON and OFF. Tap to change the speed.")
D.fqL=new B.xr("AND",D.aiR,A.cw,2,"ON only when BOTH inputs are ON.")
D.bv1=new C.a0(63671,"MaterialIcons",!1)
D.fqJ=new B.xr("OR",D.bv1,A.bz,2,"ON when EITHER input is ON.")
D.fqM=new B.xr("XOR",G.Yk,A.bY,2,"ON when the inputs are DIFFERENT.")
D.fqG=new B.xr("NAND",A.t7,A.aY,2,"OFF only when BOTH inputs are ON.")
D.bu8=new C.a0(63176,"MaterialIcons",!1)
D.fqH=new B.xr("NOR",D.bu8,A.hq,2,"ON only when BOTH inputs are OFF.")
D.fqI=new B.xr("NOT",V.Fg,A.cL,1,"Flips the signal: ON becomes OFF.")
D.fqN=new B.xr("Light",A.uT,A.dL,1,"Glows when its input is ON.")
D.fqP=new B.xr("Buzzer",A.nA,A.cx,1,"Beeps while its input is ON.")
D.y5=new C.bs(D.dOb,[D.fqO,D.fqK,D.fqL,D.fqJ,D.fqM,D.fqG,D.fqH,D.fqI,D.fqN,D.fqP],C.aA("bs<n,xr>"))
D.dPN={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.enE=new C.bz(3,20,1.9)
D.enc=new C.bz(33,90,1.6)
D.eq8=new C.bz(52,15,3.2)
D.eq6=new C.bz(45,-100,1.8)
D.eoJ=new C.bz(-15,-60,1.9)
D.eof=new C.bz(-25,140,2.4)
D.eo6=new C.bz(-82,0,2.2)
D.azY=new C.bs(D.dPN,[D.enE,D.enc,D.eq8,D.eq6,D.eoJ,D.eof,D.eo6],C.aA("bs<n,+(O,O,O)>"))
D.dOB={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"ORBIT STUDIO":5,"SWARM STUDIO":6,"FIREWORK DESIGNER":7,"CHAIN BURST":8,"CIRCUIT LAB":9,"PERIODIC TABLE":10,"BODY EXPLORER":11,"SPIN THE WHEEL":12,"FOCUS TIMER":13,"MEMORY MATCH":14,"LUCKY POCKET":15,"ELECTRONICS LAB":16,"CONSTRUCTION LAB":17,"AI INVENTOR":18,"MAGNET LAB":19,"RADIO LAB":20,"POWER PLANT":21,"POWER GRID":22,"INTERNET JOURNEY":23,"ROBOT CODER":24,"BUG SMASHER":25,"ROCKET LANDER":26,"DATA SNAKE":27,"BINARY 2048":28,"SIGNAL BREAKER":29,"PASSWORD LAB":30,"WAVE LAB":31,"BUG HUNT":32,"MOLECULE MAKER":33,"DNA LAB":34,"ECOSYSTEM LAB":35,"BALANCE LAB":36,"GEAR LAB":37,"OPTICS LAB":38,"LASER MAZE":39,"LIGHT MIXER":40,"ATOM BUILDER":41,"CIPHER LAB":42,"PIXEL TV":43}
D.azZ=new C.bs(D.dOB,["sparkle","sparkle","whoosh","click","bounce","space","bubble","pop","zap","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","lab","organic","organic","click","tech","sparkle","zap","sparkle","lab","tech","tech"],x.l)
D.cCo=w([A.A],x.R)
D.cCG=w([A.ax,A.aC],x.R)
D.cL_=w([A.ax,A.A,A.aC],x.R)
D.cMk=w([A.ax,A.kV,A.A,A.lk,A.aC],x.R)
D.cYx=w([A.ax,A.kV,A.a3,A.a7,A.lk,A.aC],x.R)
D.d93=new C.dQ([1,D.cCo,2,D.cCG,3,D.cL_,4,A.auC,5,D.cMk,6,D.cYx],C.aA("dQ<H,ak<da>>"))
D.dOO={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.eoV=new C.bz(1,A.bX,"Hydrogen")
D.enT=new C.bz(4,A.bn,"Carbon")
D.emX=new C.bz(3,A.d6,"Nitrogen")
D.epc=new C.bz(2,A.aE,"Oxygen")
D.eoD=new C.bz(2,A.cr,"Sulfur")
D.epI=new C.bz(1,A.bl,"Chlorine")
D.vd=new C.bs(D.dOO,[D.eoV,D.enT,D.emX,D.epc,D.eoD,D.epI],C.aA("bs<n,+(H,w,n)>"))
D.dQ5={Calm:0,Box:1,Sleep:2}
D.ck4=w([4,2,6,0],x.n)
D.ckb=w([4,4,4,4],x.n)
D.ckc=w([4,7,8,0],x.n)
D.Pl=new C.bs(D.dQ5,[D.ck4,D.ckb,D.ckc],C.aA("bs<n,ak<O>>"))
D.dOk={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.vS=new B.ZI(0,"source")
D.cLS=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.fvj=new B.pE("Clock",A.ok,D.vS,A.bs,D.cLS)
D.fvf=new B.pE("Button",A.xw,D.vS,A.aL,A.U)
D.d1f=w(["random","quick","slow"],x.s)
D.fvq=new B.pE("Dice",A.m6,D.vS,A.bY,D.d1f)
D.buI=new C.a0(63484,"MaterialIcons",!1)
D.CJ=new B.ZI(1,"logic")
D.d5g=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.fvm=new B.pE("Delay",D.buI,D.CJ,A.cw,D.d5g)
D.cVq=w(["fast","mid","slow"],x.s)
D.fvr=new B.pE("Echo",A.aih,D.CJ,A.bz,D.cVq)
D.fvo=new B.pE("Every 2nd",V.Fg,D.CJ,A.hq,A.U)
D.bul=new C.a0(63309,"MaterialIcons",!1)
D.fvl=new B.pE("Every 3rd",D.bul,D.CJ,A.aY,A.U)
D.bwk=new C.a0(983902,"MaterialIcons",!1)
D.bNo=w(["50%","25%","75%"],x.s)
D.fvt=new B.pE("Chance",D.bwk,D.CJ,A.cL,D.bNo)
D.pY=new B.ZI(2,"out")
D.fvh=new B.pE("Light",A.uT,D.pY,A.dL,A.U)
D.fvi=new B.pE("Burst",A.l3,D.pY,A.bY,A.U)
D.fvg=new B.pE("Ripple",A.xA,D.pY,A.b8,A.U)
D.fvp=new B.pE("Ball",A.aiv,D.pY,A.cL,A.U)
D.fvn=new B.pE("Comet",A.mS,D.pY,A.bz,A.U)
D.bw4=new C.a0(983669,"MaterialIcons",!1)
D.fvs=new B.pE("Shake",D.bw4,D.pY,A.cx,A.U)
D.fvu=new B.pE("Pop",A.ET,D.pY,A.bf,A.U)
D.fvk=new B.pE("Wash",A.LY,D.pY,A.oY,A.U)
D.mh=new C.bs(D.dOk,[D.fvj,D.fvf,D.fvq,D.fvm,D.fvr,D.fvo,D.fvl,D.fvt,D.fvh,D.fvi,D.fvg,D.fvp,D.fvn,D.fvs,D.fvu,D.fvk],C.aA("bs<n,pE>"))
D.dPB={tail:0,trap:1,arm:2}
D.d9J=new C.bs(D.dPB,["Tailpiece","P-trap","Trap arm"],x.l)
D.d9L=new C.dQ([25,"ground",23,"white"],x.h)
D.dPQ={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.Bp=new C.bs(D.dPQ,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.dOw={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.yw=new B.I9(0,"tv")
D.evA=new B.lS("Samsung Neo QLED 8K",D.yw,D.aaQ,A.aY)
D.evr=new B.lS("LG OLED evo G5",D.yw,A.ed,A.fU)
D.evi=new B.lS("Sony Bravia 9",D.yw,A.q9,A.bq)
D.evm=new B.lS("Apple TV 4K",D.yw,A.e2,A.bX)
D.evj=new B.lS("Bang and Olufsen Beovision",D.yw,D.a9H,D.Jy)
D.Hm=new B.I9(1,"iphone")
D.aIG=new B.lS("iPhone 18 Pro Max",D.Hm,D.acI,A.c8)
D.vt=new B.I9(3,"fold")
D.bdu=new C.w(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.evw=new B.lS("iPhone Fold",D.vt,D.bdu,A.b2)
D.tQ=new B.I9(2,"android")
D.b14=new C.w(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.t)
D.evx=new B.lS("Samsung Galaxy S26 Ultra",D.tQ,D.b14,A.d6)
D.b7M=new C.w(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.evp=new B.lS("Samsung Galaxy Z Fold7",D.vt,D.b7M,A.ct)
D.evl=new B.lS("Google Pixel 10 Pro XL",D.tQ,A.dX,A.bl)
D.evt=new B.lS("Xiaomi 16 Ultra",D.tQ,A.mH,A.cd)
D.evo=new B.lS("Huawei Mate 80 Pro Max",D.tQ,A.f0,A.aE)
D.evk=new B.lS("OPPO Find X9 Ultra",D.tQ,A.ee,A.bf)
D.evC=new B.lS("Honor Magic V5",D.vt,A.dm,A.cw)
D.evq=new B.lS("vivo X300 Pro",D.tQ,A.hp,A.cL)
D.QO=new B.I9(4,"tablet")
D.evv=new B.lS("iPad Pro M5",D.QO,A.dX,A.aY)
D.a3K=new B.I9(5,"reader")
D.evD=new B.lS("Kindle Scribe",D.a3K,A.es,A.bq)
D.yx=new B.I9(6,"computer")
D.evu=new B.lS("MacBook Pro M5 Max",D.yx,A.dX,A.c8)
D.evz=new B.lS("iMac 32 inch",D.yx,A.bX,A.ct)
D.evs=new B.lS("Pro Display XDR 8K",D.yx,A.mH,A.b8)
D.evn=new B.lS("Sony Laser Projector",D.yx,A.cB,A.dL)
D.evy=new B.lS("Luxury car touchscreen",D.yx,I.o4,A.aE)
D.evB=new B.lS("Apple Vision Pro",D.yx,A.kv,A.bz)
D.lE=new C.bs(D.dOw,[D.evA,D.evr,D.evi,D.evm,D.evj,D.aIG,D.evw,D.evx,D.evp,D.evl,D.evt,D.evo,D.evk,D.evC,D.evq,D.evv,D.evD,D.evu,D.evz,D.evs,D.evn,D.evy,D.evB],C.aA("bs<n,lS>"))
D.dOI={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bfG=new B.fH(20,4,13,!1)
D.bg6=new B.fH(14,5,13.5,!1)
D.bfY=new B.fH(9,2.4,10,!1)
D.bgb=new B.fH(7,5,12.5,!1)
D.bg0=new B.fH(8,3.5,12,!1)
D.bfC=new B.fH(15,2,6,!1)
D.bg9=new B.fH(45,6,13.5,!0)
D.bfS=new B.fH(10,8,13.5,!1)
D.bfK=new B.fH(25,3,12,!0)
D.bfQ=new B.fH(35,4,12,!0)
D.bfR=new B.fH(40,4.5,9.5,!0)
D.bfT=new B.fH(55,3,9,!0)
D.bfD=new B.fH(18,3,9,!1)
D.bg8=new B.fH(22,4,13.5,!1)
D.bg1=new B.fH(16,5,13.5,!1)
D.bfO=new B.fH(30,4,9,!0)
D.bgk=new B.fH(5,3.5,13,!1)
D.bfW=new B.fH(25,3,13.5,!0)
D.bg4=new B.fH(14,2.5,9,!1)
D.bfV=new B.fH(6,6,13,!1)
D.bgc=new B.fH(30,1.2,5,!0)
D.bgj=new B.fH(35,3,4.5,!0)
D.bgf=new B.fH(20,4.5,7.5,!0)
D.bfU=new B.fH(55,5.5,13.5,!0)
D.bfB=new B.fH(45,5.5,13.5,!0)
D.bg5=new B.fH(40,5.5,13.5,!0)
D.bgi=new B.fH(60,6,13.5,!0)
D.ad6=new B.fH(28,4,7,!0)
D.E6=new B.fH(25,4,7,!0)
D.bfN=new B.fH(30,4,7,!0)
D.bfI=new B.fH(22,4,7,!0)
D.bfJ=new B.fH(24,4,7,!0)
D.bfX=new B.fH(60,3,5.5,!0)
D.bfE=new B.fH(18,9,14,!0)
D.bfL=new B.fH(25,9,14,!0)
D.ad7=new B.fH(30,8,14,!0)
D.bfH=new B.fH(20,8,14,!0)
D.bfP=new B.fH(30,9,14,!0)
D.bgd=new B.fH(22,5,9.5,!0)
D.bfF=new B.fH(30,2.5,10.5,!0)
D.bg2=new B.fH(50,5.5,13.5,!0)
D.bgh=new B.fH(12,2,9.5,!1)
D.bg_=new B.fH(16,1.3,9.5,!0)
D.bga=new B.fH(40,2.5,7,!0)
D.bgg=new B.fH(60,1.2,4.8,!0)
D.bge=new B.fH(18,5,13.5,!0)
D.bg7=new B.fH(8,2,9.5,!1)
D.bfZ=new B.fH(12,2.5,8,!1)
D.bfM=new B.fH(20,3.5,13.5,!0)
D.bg3=new B.fH(3.5,3,13,!1)
D.y6=new C.bs(D.dOI,[D.bfG,D.bg6,D.bfY,D.bgb,D.bg0,D.bfC,D.bg9,D.bfS,D.bfK,D.bfQ,D.bfR,D.bfT,D.bfD,D.bg8,D.bg1,D.bfO,D.bgk,D.bfW,D.bg4,D.bfV,D.bgc,D.bgj,D.bgf,D.bfU,D.bfB,D.bg5,D.bgi,D.ad6,D.E6,D.bfN,D.E6,D.bfI,D.E6,D.bfJ,D.ad6,D.E6,D.bfX,D.bfE,D.bfL,D.ad7,D.bfH,D.bfP,D.bgd,D.bfF,D.bg2,D.bgh,D.bg_,D.bga,D.bgg,D.E6,D.ad7,D.bge,D.bg7,D.bfZ,D.bfM,D.bg3],C.aA("bs<n,fH>"))
D.da8=new C.dQ([25,"ground"],x.h)
D.dOj={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.emu=new C.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.e4H=new C.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.e4C=new C.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.efx=new C.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.egs=new C.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eft=new C.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.e2U=new C.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.edB=new C.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.emD=new C.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.egN=new C.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.e7q=new C.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.e2E=new C.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.e6v=new C.z("Movement","They pull your legs together and help you balance.")
D.e8g=new C.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.e4P=new C.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eki=new C.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.elk=new C.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.edm=new C.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.el4=new C.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.ec7=new C.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.egV=new C.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.e2J=new C.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.e8D=new C.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.egC=new C.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.ecp=new C.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.elc=new C.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.ef1=new C.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.e2S=new C.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.ehp=new C.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.ejX=new C.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eig=new C.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.e1u=new C.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eeK=new C.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eeO=new C.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.e9f=new C.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.e4V=new C.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.e85=new C.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.edK=new C.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eiX=new C.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.emA=new C.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.egS=new C.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.e1h=new C.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.edU=new C.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.e1P=new C.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.ejc=new C.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eke=new C.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eei=new C.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.ejr=new C.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.e2L=new C.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.ekK=new C.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.e5Y=new C.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eiF=new C.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.e8Z=new C.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.ecl=new C.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eh9=new C.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.ekU=new C.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.ekM=new C.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.ekQ=new C.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.ecO=new C.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.ehW=new C.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eid=new C.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.ekz=new C.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eeh=new C.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eaO=new C.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.e9G=new C.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eeF=new C.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eh2=new C.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.ebi=new C.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.ebW=new C.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.e6h=new C.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.ekb=new C.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.e72=new C.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.e1M=new C.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.e9e=new C.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.e1H=new C.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.e5e=new C.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.e9j=new C.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.e7b=new C.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.ehl=new C.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.e8j=new C.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.emi=new C.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.e9P=new C.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.ecI=new C.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.ef8=new C.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.e7i=new C.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.e74=new C.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.daa=new C.bs(D.dOj,[D.emu,D.e4H,D.e4C,D.efx,D.egs,D.eft,D.e2U,D.edB,D.emD,D.egN,D.e7q,D.e2E,D.e6v,D.e8g,D.e4P,D.eki,D.elk,D.edm,D.el4,D.ec7,D.egV,D.e2J,D.e8D,D.egC,D.ecp,D.elc,D.ef1,D.e2S,D.ehp,D.ejX,D.eig,D.e1u,D.eeK,D.eeO,D.e9f,D.e4V,D.e85,D.edK,D.eiX,D.emA,D.egS,D.e1h,D.edU,D.e1P,D.ejc,D.eke,D.eei,D.ejr,D.e2L,D.ekK,D.e5Y,D.eiF,D.e8Z,D.ecl,D.eh9,D.ekU,D.ekM,D.ekQ,D.ecO,D.ehW,D.eid,D.ekz,D.eeh,D.eaO,D.e9G,D.eeF,D.eh2,D.ebi,D.ebW,D.e6h,D.ekb,D.e72,D.e1M,D.e9e,D.e1H,D.e5e,D.e9j,D.e7b,D.ehl,D.e8j,D.emi,D.e9P,D.ecI,D.ef8,D.e7i,D.e74],C.aA("bs<n,+(n,n)>"))
D.dac=new C.hp(A.G,11)
D.dah=new C.hp(A.G,30)
D.daj=new C.hp(A.G,1.2)
D.dd3=new B.SL(null)
D.dgS=new B.SP(null)
D.dgT=new B.SQ(null)
D.dh5=new B.SR(null)
D.dj6=new B.ST(null)
D.dj7=new B.SU(null)
D.dj8=new B.SV(null)
D.aBa=new B.M2(null)
D.djW=new B.Tg(null)
D.djY=new B.Tv(null)
D.djZ=new B.Tw(null)
D.dk_=new B.Tx(null)
D.dkx=new B.TE(null)
D.dms=new B.TI(null)
D.dmt=new B.TK(null)
D.dmu=new B.TL(null)
D.dmw=new B.TM(null)
D.do5=new B.U2(null)
D.do7=new B.U4(null)
D.doc=new B.Ue(null)
D.don=new B.Uf(null)
D.doT=new B.Ug(null)
D.dqn=new B.Ui(null)
D.drL=new B.Uk(null)
D.drM=new B.Ul(null)
D.dt6=new B.Un(null)
D.dJ_=new B.Uo(null)
D.dJ0=new B.Up(null)
D.dJ1=new B.Us(null)
D.dJ2=new B.Ut(null)
D.dKW=new B.UB(null)
D.dKX=new B.UC(null)
D.dL4=new B.UJ(null)
D.dLd=new B.UN(null)
D.dLe=new B.UO(null)
D.dLf=new B.a6E(null)
D.dLQ=new B.UQ(null)
D.dNi=new B.UU(null)
D.foX=new B.aw(16,2.6,0)
D.dNj=new B.fe("Wall drain","The pipe stub that comes out of the wall. The trap arm slides into it.",D.foX,8)
D.fl_=new B.aw(0,3,-6)
D.dNk=new B.fe("Wall","The copper supply pipes come out of the wall here.",D.fl_,24)
D.fnS=new B.aw(8.2,1,-7)
D.dNl=new B.fe("Toilet","The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.",D.fnS,7)
D.fmx=new B.aw(-2.4,11.5,-3.6)
D.dNm=new B.fe("Hot faucet inlet","The threaded tail under the faucet where the hot supply hose screws on.",D.fmx,7)
D.flf=new B.aw(-3.6,4,-7.8)
D.dNn=new B.fe("Light switch","Controls the ceiling light. Tap Open lesson to wire one.",D.flf,4.5)
D.fo5=new B.aw(-1,-0.8,4.3)
D.dNo=new B.fe("Silver screw",y.F,D.fo5,5)
D.fli=new B.aw(0.5,-0.8,1.2)
D.dNp=new B.fe("Bare copper wire: ground","The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. It goes on the green screw.",D.fli,7)
D.fn6=new B.aw(0,0.5,2)
D.dNq=new B.fe("Voltage tester","A tester that glows when it touches live power.",D.fn6,6)
D.fmH=new B.aw(0,-0.2,0.2)
D.dNr=new B.fe("Cover plate","The plate covers the box and the edges of the drywall so nobody touches the wires.",D.fmH,8)
D.fou=new B.aw(-4.6,0.5,-3.4)
D.dNs=new B.fe("Hot shut-off valve","The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.",D.fou,8)
D.fn5=new B.aw(-1,0.6,4.3)
D.dNt=new B.fe("Silver screw",y.F,D.fn5,5)
D.fn3=new B.aw(4.6,0.5,-3.4)
D.dNu=new B.fe("Cold shut-off valve","The angle stop valve on the cold pipe. Cold is always on the right.",D.fn3,8)
D.flb=new B.aw(2.4,11.5,-3.6)
D.dNv=new B.fe("Cold faucet inlet","The threaded tail under the faucet where the cold supply hose screws on.",D.flb,7)
D.fpg=new B.aw(0.8,-0.8,1.2)
D.dNw=new B.fe("Black wire to the light","This black wire carries power to the light once the switch is on. It goes on the other brass screw.",D.fpg,7)
D.fo8=new B.aw(1,0.6,4.3)
D.dNx=new B.fe("Brass screw",y.o,D.fo8,5)
D.fmu=new B.aw(10.05,5.2,-7.5)
D.dNy=new B.fe("Water heater breaker","A big circuit for the water heater. It is ON.",D.fmu,3.5)
D.fnP=new B.aw(3,3.8,-7.4)
D.dNz=new B.fe("Kitchen faucet","Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.",D.fnP,4.5)
D.fl1=new B.aw(0,6,0)
D.dNA=new B.fe("Tailpiece","The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.",D.fl1,10)
D.fm4=new B.aw(0,-1.9,5)
D.dNB=new B.fe("Green ground screw","The green screw is for the bare copper ground wire.",D.fm4,5)
D.fll=new B.aw(3,1,0)
D.dNC=new B.fe("P-trap","The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.",D.fll,11)
D.fl2=new B.aw(0,-8,0)
D.dND=new B.fe("Cabinet","The cabinet under the sink where the drain is built.",D.fl2,22)
D.fl0=new B.aw(0,4,-8)
D.dNE=new B.fe("Wall framing","2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.",D.fl0,18)
D.aOm=new B.aw(0,-0.2,5.1)
D.dNF=new B.fe("TEST and RESET buttons","Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.",D.aOm,5)
D.fkW=new B.aw(0,11,0)
D.dNG=new B.fe("Sink","The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.",D.fkW,16)
D.a69=new B.aw(0,0,0)
D.dNH=new B.fe("Drywall","The wall surface. A hole is cut in it for the electrical box.",D.a69,22)
D.fnD=new B.aw(1,-0.8,4.3)
D.dNI=new B.fe("Brass screw",y.o,D.fnD,5)
D.fkY=new B.aw(0,14,-3)
D.dNJ=new B.fe("Counter and sink","The faucet is mounted through a hole in the counter.",D.fkY,20)
D.fkV=new B.aw(0,0,-8)
D.dNK=new B.fe("Wall","Behind the wall the drain pipe goes down to the sewer line.",D.fkV,22)
D.fkZ=new B.aw(0,19,-3)
D.dNL=new B.fe("Faucet","The faucet with hot on the left (red) and cold on the right (blue).",D.fkZ,14)
D.flE=new B.aw(3.5,2,-7.2)
D.dNM=new B.fe("Kitchen counter and cabinet","The cabinet under the sink is where the drain and the shut-off valves live.",D.flE,9)
D.fme=new B.aw(10.05,5.7,-7.5)
D.dNN=new B.fe("Kitchen breaker","Protects the kitchen outlets. It is ON.",D.fme,3.5)
D.fmB=new B.aw(4,6,-2.5)
D.dNO=new B.fe("Cold supply hose","A braided steel hose with a rubber liner and a blue band.",D.fmB,9)
D.aOf=new B.aw(0,3.7,0)
D.dNP=new B.fe("Slip nut","A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.",D.aOf,7)
D.Sj=new B.aw(0,-1,-0.6)
D.dNQ=new B.fe("Wire nut","A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.",D.Sj,5)
D.fmd=new B.aw(-1.9,0,-2)
D.dNR=new B.fe("Wood stud","The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.",D.fmd,16)
D.fp4=new B.aw(6,3,-7.8)
D.dNS=new B.fe("Water and drain pipes","Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.",D.fp4,14)
D.fnx=new B.aw(0,-0.8,1.2)
D.dNT=new B.fe("White wire: neutral","The neutral wire carries the power back to the panel. It goes on a silver screw.",D.fnx,7)
D.foj=new B.aw(0,-0.2,4.9)
D.dNU=new B.fe("Mounting strap (yoke)","The metal strap with two screw slots. Long screws through the ears hold the device in the box.",D.foj,7)
D.fpd=new B.aw(9.55,4.7,-7.5)
D.dNV=new B.fe("Spare breaker","A spare circuit.",D.fpd,3.5)
D.fo6=new B.aw(0,0,-1.2)
D.dNW=new B.fe("Electrical box","A plastic box that holds the wire connections. Every connection must be inside a box, never loose in the wall.",D.fo6,9)
D.foN=new B.aw(-3.2,1.3,-7.8)
D.dNX=new B.fe("Living room outlet","A standard outlet. Tap Open lesson to wire one in 3D.",D.foN,4.5)
D.fm7=new B.aw(12,2.6,0)
D.dNY=new B.fe("Trap arm","The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.",D.fm7,9)
D.fmU=new B.aw(0,6.5,-7.8)
D.dNZ=new B.fe("Electrical cables","Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.",D.fmU,16)
D.fng=new B.aw(11.2,2.3,-6)
D.dO_=new B.fe("Water heater","Heats the water. The cold line goes in at the top and the hot line comes out at the top.",D.fng,9)
D.fnE=new B.aw(9.55,5.2,-7.5)
D.dO0=new B.fe("Bathroom breaker","Protects the bathroom. It is ON.",D.fnE,3.5)
D.fmh=new B.aw(5.2,3.9,-7.8)
D.dO1=new B.fe("Kitchen GFCI outlet","Outlets near water must be GFCI. Tap Open lesson to wire one.",D.fmh,4.5)
D.fmt=new B.aw(-8.4,1.2,-6.4)
D.dO2=new B.fe("Sofa","Just furniture, to show the size of the room.",D.fmt,10)
D.dO3=new B.fe("Outlet face","Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.",D.aOm,6)
D.dO4=new B.fe("Concrete slab","The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.",D.a69,30)
D.aOj=new B.aw(8.9,2.6,0)
D.dO5=new B.fe("Slip nut","Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.",D.aOj,7)
D.flR=new B.aw(0.6,1.5,-1.8)
D.dO6=new B.fe("Cable to the light (LOAD)","This cable carries the switched power on to the light. The black wire here only has power when the switch is on.",D.flR,8)
D.fm2=new B.aw(9.8,5,-7.5)
D.dO7=new B.fe("Breaker panel","The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.",D.fm2,6)
D.fmD=new B.aw(-4,6,-2.5)
D.dO8=new B.fe("Hot supply hose","A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.",D.fmD,9)
D.dQg=new C.u(0,118)
D.aCB=new C.u(0,13)
D.dQh=new C.u(0,17)
D.dQk=new C.u(0,330)
D.dQn=new C.u(0,-13)
D.aCH=new C.u(0,-14)
D.dQo=new C.u(0,-17)
D.dQp=new C.u(0,-18)
D.dQq=new C.u(0,-19)
D.dQr=new C.u(0,-20)
D.dQu=new C.u(0,-26)
D.dQv=new C.u(0,-28)
D.dQw=new C.u(0,-31)
D.dQx=new C.u(0,-32)
D.vl=new C.u(0,-6)
D.dQy=new C.u(0,-6771)
D.dQz=new C.u(0,-9)
D.dQB=new C.u(-9.5,-11)
D.dQC=new C.u(10,20)
D.dQE=new C.u(10,-13)
D.dQF=new C.u(10,-22)
D.dQG=new C.u(10,-4)
D.a2F=new C.u(11,8)
D.dQI=new C.u(12,2)
D.dQJ=new C.u(14,0)
D.dQK=new C.u(14,12)
D.aCL=new C.u(14,8)
D.dQL=new C.u(14,-17)
D.dQM=new C.u(14,-18)
D.aCM=new C.u(14,-3)
D.aCN=new C.u(14,-4)
D.dQN=new C.u(15,0)
D.dQO=new C.u(15,-12)
D.dQP=new C.u(16,-8)
D.dQQ=new C.u(18,14)
D.dQR=new C.u(18,-12)
D.aCR=new C.u(20,0)
D.dQX=new C.u(20,15)
D.dQY=new C.u(20,-17)
D.dQZ=new C.u(20,-3)
D.dR_=new C.u(21,8)
D.dR1=new C.u(22,10)
D.aCS=new C.u(22,8)
D.dR2=new C.u(24,0)
D.dR3=new C.u(24,2)
D.dR5=new C.u(24,-18)
D.dR6=new C.u(24,-22)
D.dR7=new C.u(25,8)
D.dR8=new C.u(26,0)
D.dRe=new C.u(28,-30)
D.dRj=new C.u(30,18)
D.dRk=new C.u(30,2)
D.dRl=new C.u(31,19)
D.dRm=new C.u(32,0)
D.aCV=new C.u(34,0)
D.aCW=new C.u(34,-32)
D.GY=new C.u(36,0)
D.dRr=new C.u(3,-1)
D.dRu=new C.u(40,3)
D.dRy=new C.u(4,11)
D.dRB=new C.u(4,-2)
D.dRF=new C.u(5,0)
D.dRG=new C.u(5,17)
D.dRH=new C.u(5,6)
D.dRK=new C.u(6,11)
D.dRQ=new C.u(8,7)
D.dRR=new C.u(8,-10)
D.dRS=new C.u(8,-14)
D.dRT=new C.u(8,-3)
D.aD_=new C.u(9,0)
D.dRW=new C.u(-20.5,-17.6)
D.dRX=new C.u(-9,18.5)
D.dS_=new C.u(-2.6,-1)
D.dS0=new C.u(1.9,-0.8)
D.dS3=new C.u(-0.22,0.09)
D.dS8=new C.u(2.6,1)
D.dSf=new C.u(-9,12.2)
D.dSx=new C.u(-9,20.5)
D.dSP=new C.u(-10,0)
D.dSQ=new C.u(-10,12)
D.aD6=new C.u(-10,4)
D.dSR=new C.u(-11,-2)
D.dSS=new C.u(-13,-5)
D.dST=new C.u(-14,0)
D.dSU=new C.u(-14,13)
D.dSV=new C.u(-14,2)
D.dSW=new C.u(-14,-12)
D.dSX=new C.u(-14,-19)
D.dSY=new C.u(-14,-23)
D.dSZ=new C.u(-15,6)
D.dT_=new C.u(-16,14)
D.dT0=new C.u(-16,-8)
D.dT1=new C.u(-17,10)
D.dT2=new C.u(-17,-18)
D.dT3=new C.u(-17,-8)
D.dT5=new C.u(-18,20)
D.dT6=new C.u(-18,-9)
D.aD8=new C.u(-20,0)
D.dT8=new C.u(-20,16)
D.dT9=new C.u(-20,-9)
D.Qi=new C.u(-22,8)
D.dTa=new C.u(-22,-10)
D.dTb=new C.u(-22,-11)
D.dTc=new C.u(-24,10)
D.dTd=new C.u(-24,11)
D.dTe=new C.u(-24,14)
D.dTf=new C.u(-24,-22)
D.dTg=new C.u(-25,-11)
D.dTh=new C.u(-26,0)
D.dTi=new C.u(-26,-18)
D.dTj=new C.u(-2,9)
D.dTk=new C.u(-2,-10)
D.dTl=new C.u(-2,-20)
D.dTm=new C.u(-2,-9)
D.dTn=new C.u(-32,0)
D.aDa=new C.u(-34,0)
D.dTs=new C.u(-40,3)
D.dTu=new C.u(-4,11)
D.dTv=new C.u(-4,-17)
D.dTw=new C.u(-4,-2)
D.dTy=new C.u(-5,0)
D.dTz=new C.u(-5,20)
D.dTA=new C.u(-5,6)
D.dTB=new C.u(-6,26)
D.dTC=new C.u(-6,6)
D.dTD=new C.u(-6,-42)
D.dTE=new C.u(-7,-19)
D.dTF=new C.u(-7,-24)
D.dTG=new C.u(-8,-9)
D.a2J=new C.u(-9,0)
D.dTH=new C.u(-9,1)
D.dTI=new C.u(-9,-23)
D.eZL=new C.x("Thinking\u2026",null,A.hk,null,null,null,null,null,null,null,null,null)
D.dUy=new C.C(A.kB,D.eZL,null)
D.fdH=new C.x("Start from a ready-made board",null,A.fT,null,null,null,null,null,null,null,null,null)
D.dUI=new C.C(A0.uD,D.fdH,null)
D.bnu=new C.N(4,0,4,14)
D.eVp=new C.F(!0,A.aA,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_E=new C.x("Games and little helpers for a spare minute.",null,D.eVp,null,null,null,null,null,null,null,null,null)
D.dUQ=new C.C(D.bnu,D.f_E,null)
D.bA0=new C.ad(A.eh,18,A.bf,null,null,null)
D.dV1=new C.C(A.fM,D.bA0,null)
D.dV3=new C.C(A.fM,E.akf,null)
D.faO=new C.x("Tap to throw in a star",null,A.km,null,null,null,null,null,null,null,null,null)
D.aZK=new C.cv(A.A,null,null,D.faO,null)
D.e_t=new C.cI(0,null,0,14,null,null,D.aZK,null)
D.cVX=w([A.iH,A.bn],x.O)
D.aHU=new C.bS(A.A,0.5,A.x,null,0,D.cVX,null,null)
D.e0a=new C.bS(A.A,0.5,A.x,null,0,D.auo,null,null)
D.cNY=w([A.c,A.bI],x.O)
D.e0c=new C.bS(A.A,0.5,A.x,null,0,D.cNY,null,null)
D.e0d=new C.bS(A.A,0.5,A.x,null,0,K.atx,null,null)
D.d25=w([A.bX,A.kv],x.O)
D.aHV=new C.bS(A.A,0.5,A.x,null,0,D.d25,null,null)
D.ctI=w([A.c,A.bX],x.O)
D.e0h=new C.bS(A.rd,0.5,A.x,null,0,D.ctI,null,null)
D.b5l=new C.w(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.baf=new C.w(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.cN2=w([D.b5l,D.acm,D.baf],x.O)
D.cU6=w([0,0.7,1],x.n)
D.e0j=new C.bS(A.rd,0.5,A.x,null,0,D.cN2,D.cU6,null)
D.c75=w([A.f8,A.f0,A.k3],x.O)
D.e0k=new C.bS(P.pZ,0.5,A.x,null,0,D.c75,null,null)
D.cki=w([A.o6,A.aR,A.K],x.O)
D.d_4=w([0.3,0.7,1],x.n)
D.e0l=new C.bS(A.A,0.5,A.x,null,0,D.cki,D.d_4,null)
D.cmN=w([A.lq,A.o0],x.O)
D.e0m=new C.bS(K.a79,0.5,A.x,null,0,D.cmN,null,null)
D.bdw=new C.w(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.d0p=w([A.f4,D.bdw],x.O)
D.e0n=new C.bS(A.rd,0.5,A.x,null,0,D.d0p,null,null)
D.cn2=w([A.dX,A.cB],x.O)
D.e0o=new C.bS(A.A,0.5,A.x,null,0,D.cn2,null,null)
D.cIH=w([A.o6,A.aR,A.fz],x.O)
D.e0p=new C.bS(A.A,0.5,A.x,null,0,D.cIH,null,null)
D.cBr=w([A.fW,A.aL,A.dn],x.O)
D.e0r=new C.bS(A.rd,0.5,A.x,null,0,D.cBr,null,null)
D.cWt=w([A.kv,I.o4],x.O)
D.e0s=new C.bS(A.rd,0.5,A.x,null,0,D.cWt,null,null)
D.b5w=new C.w(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.b3N=new C.w(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cKT=w([D.b5w,D.b3N],x.O)
D.e0u=new C.bS(A.A,0.5,A.x,null,0,D.cKT,null,null)
D.b9K=new C.w(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.b7T=new C.w(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.b7X=new C.w(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.d44=w([D.b9K,D.b7T,D.b7X],x.O)
D.cHy=w([0,0.65,1],x.n)
D.e0v=new C.bS(K.a7b,0.5,A.x,null,0,D.d44,D.cHy,null)
D.e0w=new C.bS(A.A,0.5,A.x,null,0,D.ar6,null,null)
D.d1m=w([A.lq,A.aR,A.fz],x.O)
D.e0A=new C.bS(A.A,0.5,A.x,null,0,D.d1m,null,null)
D.d2N=w([A.kv,A.hx],x.O)
D.e0D=new C.bS(A.A,0.5,A.x,null,0,D.d2N,null,null)
D.aI_=new C.aZ(9,9)
D.e0L=new C.aZ(1.4,1.4)
D.e1o=new C.z(0,-4)
D.e2F=new C.z(64,2.4)
D.e5V=new C.z(0.22,4)
D.e6I=new C.z(63,-2.4)
D.ecG=new C.z(0.8,-4)
D.ekN=new C.z(0.58,4)
D.enj=new C.bz("Moon",1.62,4291941851)
D.eno=new C.bz(61,-4.6,D.zE)
D.enR=new C.bz("Neptune",11.15,4284524026)
D.eoq=new C.bz("Sun",274,4294688548)
D.eoF=new C.bz("Mercury",3.7,4288455599)
D.eoL=new C.bz("Earth",9.81,4281908728)
D.eoN=new C.bz("Mars",3.71,4294472049)
D.ep5=new C.bz("Venus",8.87,4294759245)
D.ep6=new C.bz(62,4.6,D.wj)
D.epa=new C.bz("Saturn",10.44,4294829706)
D.epu=new C.bz("Jupiter",24.79,4294677052)
D.esM=new C.a9(10,-8,18,-2)
D.esN=new C.a9(14,-14,20,14)
D.esO=new C.a9(20,-2,30,2)
D.esQ=new C.a9(4,-13,30,-3)
D.esS=new C.a9(8,-7,12,7)
D.esY=new C.a9(-12,12,12,19)
D.esZ=new C.a9(-12,14,12,22)
D.et_=new C.a9(-12,-22,12,8)
D.et0=new C.a9(-12,-25,12,19)
D.et1=new C.a9(-12,-26,12,-6)
D.et2=new C.a9(-12,-4,12,14)
D.et3=new C.a9(-12,-6,10,6)
D.et4=new C.a9(-14,20,14,24)
D.et5=new C.a9(-14,6,14,10)
D.et6=new C.a9(-14,-17,14,15)
D.et7=new C.a9(-14,-26,14,18)
D.et8=new C.a9(-14,-4,14,20)
D.et9=new C.a9(-15,-29,15,25)
D.eta=new C.a9(-16,-16,16,16)
D.etb=new C.a9(-16,-22,-9,18)
D.etc=new C.a9(-16,-24,16,-10)
D.etd=new C.a9(-16,-2,16,20)
D.etf=new C.a9(-18,20,18,24)
D.etg=new C.a9(-18,-18,18,20)
D.eth=new C.a9(-20,12,20,22)
D.eti=new C.a9(-20,-28,20,26)
D.etj=new C.a9(-22,14,22,18)
D.aIo=new C.a9(-22,-26,22,24)
D.etk=new C.a9(-22,-3,22,3)
D.etl=new C.a9(-22,-4,22,12)
D.etm=new C.a9(-24,-12,10,22)
D.etn=new C.a9(-24,-14,22,8)
D.eto=new C.a9(-24,-6,24,20)
D.aIp=new C.a9(-24,-9,24,9)
D.etp=new C.a9(-25,14,25,19)
D.etq=new C.a9(-26,-14,14,8)
D.etr=new C.a9(-26,-4,26,20)
D.ets=new C.a9(-26,-6,4,6)
D.aIq=new C.a9(-28,-13,28,13)
D.ett=new C.a9(-28,-16,28,16)
D.etu=new C.a9(-28,-16,28,8)
D.etv=new C.a9(-28,-22,28,22)
D.etw=new C.a9(-30,-12,30,14)
D.etx=new C.a9(-30,-14,0,14)
D.ety=new C.a9(-30,-18,30,20)
D.etz=new C.a9(-30,-28,30,14)
D.etA=new C.a9(-30,-2,30,18)
D.etB=new C.a9(-30,-4,30,18)
D.etC=new C.a9(-32,-17,32,17)
D.etD=new C.a9(-32,-28,32,18)
D.etE=new C.a9(-33,-21,33,17)
D.etF=new C.a9(-34,14,34,26)
D.a3C=new C.a9(-34,-18,34,18)
D.etG=new C.a9(-34,-4,34,7)
D.etH=new C.a9(-36,-24,36,20)
D.etI=new C.a9(-38,-22,38,22)
D.etJ=new C.a9(-3,12,3,22)
D.etK=new C.a9(-3,5,3,15)
D.etM=new C.a9(-46,-34,46,28)
D.etN=new C.a9(-48,-3,48,3)
D.etQ=new C.a9(-6,18,24,24)
D.etR=new C.a9(-6,5,6,12)
D.etS=new C.a9(-6,-22,6,-15)
D.etT=new C.a9(-9,-16,9,22)
D.etU=new C.a9(-4.5,-24,4.5,-21.2)
D.etW=new C.a9(14,-9,17.5,9)
D.dPK={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aJg=new C.eS(D.dPK,5,x.M)
D.dPq={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.ewF=new C.eS(D.dPq,10,x.M)
D.eyB=new C.as(24,44)
D.eyG=new C.as(300,300)
D.ez_=new C.as(54,38)
D.ez6=new C.as(66,38)
D.b_Y=new C.fg(2,null,null,null,null,A.bz,null,null,null,null)
D.eA2=new C.a4(16,16,D.b_Y,null)
D.aKg=new C.hM(3,12,12,0.82,null)
D.eAO=new A5.b3D(78,6,6,1,56)
D.ffj=new C.x("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aKr=new C.b1(D.ffj,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.q,null)
D.cWw=w([A.cx,A.cr,A.bf,A.aY,A.oY,A.cx],x.O)
D.eFW=new C.fP(A.A,0,6.283185307179586,A.x,D.cWw,null,null)
D.eOx=new C.F(!0,A.aL,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,F.Ot,null,null,null)
D.eH_=new C.ep("You are here (Sun)",null,null,A.cQ,null,null,null,null,null,null,D.eOx)
D.aMM=new C.F(!0,A.aA,null,null,null,null,10.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eH0=new C.ep("What we see",null,null,A.cQ,null,null,null,null,null,null,D.aMM)
D.eM0=new C.F(!0,E.a9L,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eH3=new C.ep("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cQ,null,null,null,null,null,null,D.eM0)
D.eQG=new C.F(!0,A.k0,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eH9=new C.ep("AI",null,null,A.cQ,null,null,null,null,null,null,D.eQG)
D.eLM=new C.F(!0,A.bZ,null,null,null,null,15,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHa=new C.ep("Add atoms with the buttons below",null,null,A.cQ,null,null,null,null,null,null,D.eLM)
D.aLe=new C.F(!0,A.bZ,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHp=new C.F(!0,A.w,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHr=new C.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHW=new C.F(!0,A.bh,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eId=new C.F(!0,A.cw,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eII=new C.F(!0,A.bZ,null,null,null,null,11,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIN=new C.F(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJ_=new C.F(!0,A.aR,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJ3=new C.F(!0,A.c,null,null,null,null,13.5,A.I,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJu=new C.F(!0,A.aP,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJQ=new C.F(!0,A.bZ,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eK_=new C.F(!0,A.af,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exa=new C.cO(A.hB,A.dz,6)
D.cQx=w([D.exa],x.q)
D.eKi=new C.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cQx,null,null,null)
D.eKl=new C.F(!0,A.ew,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKo=new C.F(!0,A.c,null,null,null,null,17,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKq=new C.F(!0,A.bZ,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKL=new C.F(!0,A.c,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKP=new C.F(!0,A.aL,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLA=new C.F(!0,A.bZ,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eL9=new C.F(!0,A.aA,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLa=new C.F(!0,A.bZ,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eM3=new C.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMw=new C.F(!0,A.aA,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMZ=new C.F(!0,A.aL,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exd=new C.cO(A.aV,A.J,3)
D.auF=w([D.exd],x.q)
D.eN1=new C.F(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.auF,null,null,null)
D.eN6=new C.F(!0,A.c,null,null,null,null,12.5,A.a4,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNx=new C.F(!0,A.aR,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNN=new C.F(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,F.Ot,null,null,null)
D.eOe=new C.F(!0,A.aA,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOm=new C.F(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOL=new C.F(!0,A.uo,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eP_=new C.F(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePi=new C.F(!0,A.bJ,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePm=new C.F(!0,A.bZ,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePp=new C.F(!0,A.ex,null,null,null,null,14,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePq=new C.F(!0,A.aA,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePw=new C.F(!0,A.aA,null,null,null,null,18,A.I,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePZ=new C.F(!0,A.bZ,null,null,null,null,8.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQc=new C.F(!0,A.mF,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQd=new C.F(!0,A.af,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a5n=new C.F(!0,A.af,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQs=new C.F(!0,A.af,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aMd=new C.F(!0,A.aP,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a5r=new C.F(!0,A.c,null,null,null,null,9.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eR_=new C.F(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ex1=new C.cO(A.w,A.J,5)
D.cFi=w([D.ex1],x.q)
D.eR0=new C.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cFi,null,null,null)
D.eR5=new C.F(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.auF,null,null,null)
D.eRk=new C.F(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRp=new C.F(!0,A.fj,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRF=new C.F(!0,A.bZ,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eS9=new C.F(!0,A.bf,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSG=new C.F(!0,A.bZ,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTk=new C.F(!0,A.aA,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTs=new C.F(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aMx=new C.F(!0,A.aA,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTV=new C.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eU3=new C.F(!0,A.aL,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUa=new C.F(!0,A.aL,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.I0=new C.F(!0,A.af,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUv=new C.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aMJ=new C.F(!0,A.af,null,null,null,null,12,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUy=new C.F(!0,A.aL,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVf=new C.F(!0,A.aP,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a5G=new C.F(!0,A.c,null,null,null,null,13,A.a4,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVy=new C.F(!0,A.ba,null,null,null,null,14.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVE=new C.F(!0,A.uo,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVX=new C.F(!0,A.bf,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKt=new C.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWk=new C.x("\u26a0\ufe0f ",null,D.eKt,null,null,null,null,null,null,null,null,null)
D.eWv=new C.x("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.I_,null,null,null,null,null,null,null,null,null)
D.eIf=new C.F(!0,A.w,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWJ=new C.x("Open the 3D lesson",null,D.eIf,null,null,null,null,null,null,null,null,null)
D.eWV=new C.x("LETTER COUNT OF THE SECRET VERSION",null,Q.mp,null,null,null,null,null,null,null,null,null)
D.eXU=new C.x("Pick one, then change it and see what happens.",null,A.I_,null,null,null,null,null,null,null,null,null)
D.eXY=new C.x("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.eLy=new C.F(!0,A.af,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYS=new C.x("What do you want to invent? Type it below, or tap an idea.",null,D.eLy,null,null,null,null,null,null,null,null,null)
D.eZd=new C.x("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,S.a4T,null,null,null,null,null,null,null,null,null)
D.f_g=new C.x("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.f_P=new C.x("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hj,null,null,null,null,null,null,null,null,null)
D.f_U=new C.x("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.f0r=new C.x("Make it yours",null,A.kS,null,null,null,null,null,null,null,null,null)
D.eKR=new C.F(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0G=new C.x("Your mass never changes. What changes is how hard each world pulls on it.",null,D.eKR,null,null,null,null,null,null,null,null,null)
D.eNY=new C.F(!0,A.af,null,null,null,null,13,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2P=new C.x("Turn every model with your finger, pinch to zoom, and tap any part to zoom in and learn what it is. Pick a wire, then tap the screw it belongs on. Wires have their real colours, and every mistake is explained.",null,D.eNY,null,null,null,null,null,null,null,null,null)
D.ePB=new C.F(!0,A.j2,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2Q=new C.x("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.ePB,null,null,null,null,null,null,null,null,null)
D.f34=new C.x("YOUR DECODING",null,Q.mp,null,null,null,null,null,null,null,null,null)
D.f3g=new C.x("5G",null,L.aLC,null,null,null,null,null,null,null,null,null)
D.eRV=new C.F(!0,A.bZ,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4j=new C.x("WHAT HAPPENS",null,D.eRV,null,null,null,null,null,null,null,null,null)
D.eUX=new C.F(!0,A.c,null,null,null,null,13,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5M=new C.x("NGMY Apps",null,D.eUX,null,null,null,null,null,null,null,null,null)
D.f5R=new C.x("Check",null,null,null,null,null,null,null,null,null,null,null)
D.f6v=new C.x("Change the words and pictures on the three slabs.",null,A.I_,null,null,null,null,null,null,null,null,null)
D.f6G=new C.x("All the parts and wires will be removed.",null,A.hv,null,null,null,null,null,null,null,null,null)
D.f6Z=new C.x("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.f7x=new C.x("Tap the crank on the board again and again to spin it faster.",null,A.hk,null,null,null,null,null,null,null,null,null)
D.f8k=new C.x("INTERCEPTED",null,Q.mp,null,null,null,null,null,null,null,null,null)
D.f8E=new C.x("\ud83c\udfaf Challenges",null,A.dP,null,null,null,null,null,null,null,null,null)
D.f98=new C.x("Remove this part",null,S.aLh,null,null,null,null,null,null,null,null,null)
D.f9p=new C.x("Clear the board?",null,A.dj,null,null,null,null,null,null,null,null,null)
D.eRq=new C.F(!0,A.bs,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9E=new C.x("How the Lab works",null,D.eRq,null,null,null,null,null,null,null,null,null)
D.eJe=new C.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9V=new C.x("Electronics Lab",null,D.eJe,null,null,null,null,A.a2,null,1,null,null)
D.f9X=new C.x("?",null,K.aMG,null,null,null,null,null,null,null,null,null)
D.ePv=new C.F(!0,A.aY,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa0=new C.x("Planet Earth",null,D.ePv,null,null,null,null,null,null,null,null,null)
D.fb6=new C.x("Ready-made circuits",null,A.dP,null,null,null,null,null,null,null,null,null)
D.fbG=new C.x("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hk,null,null,null,null,null,null,null,null,null)
D.fbX=new C.x("UNIVERSE EXPLORER",null,E.a50,null,null,null,null,null,null,null,null,null)
D.fee=new C.x("SECRET VERSION",null,Q.mp,null,null,null,null,null,null,null,null,null)
D.eUe=new C.F(!0,A.aL,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feK=new C.x("\u26a0 There is no air here, so a parachute will not work.",null,D.eUe,null,null,null,null,null,null,null,null,null)
D.ffU=new C.x("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,S.a4T,null,null,null,null,null,null,null,null,null)
D.fgm=new C.x("NGMY",null,A.tZ,null,null,null,null,null,null,null,null,null)
D.fgy=new C.x("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.a5q,null,null,null,null,null,null,null,null,null)
D.fgT=new C.x("Tap it to change its setting. Drag from the right dot to connect.",null,A.lg,null,null,null,null,null,null,null,null,null)
D.fhM=new C.x("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.I_,null,null,null,null,null,null,null,null,null)
D.fhO=new C.x("TOOLBOX",null,E.a50,null,null,null,null,null,null,null,null,null)
D.fkR=new B.aw(0.05,0.55,0.75)
D.fkU=new B.aw(0,0,-1)
D.fkX=new B.aw(0,14,0)
D.a6a=new B.aw(0,1,0)
D.aO5=new B.aw(0,4,-2)
D.a6b=new B.aw(0,9,-3)
D.fl4=new B.aw(0,0.52,2.35)
D.fl6=new B.aw(0,3,-6.5)
D.fl7=new B.aw(-4.6,1.5,-3.6)
D.fl8=new B.aw(0,-13.5,-1.5)
D.a6c=new B.aw(1,0,0)
D.fl9=new B.aw(1,26,14)
D.fla=new B.aw(1,28,14)
D.fle=new B.aw(-0.1,0,0)
D.flg=new B.aw(19.6,0,-1.5)
D.flh=new B.aw(-1,-1.7,2.3)
D.flj=new B.aw(36,30,1)
D.flk=new B.aw(-0.2,-0.3,-0.4)
D.fln=new B.aw(40,1,14)
D.flo=new B.aw(40,28,1)
D.flp=new B.aw(0.9,0,4.4)
D.flq=new B.aw(8.2,1.9,-7.55)
D.flr=new B.aw(0,1.59,0.14)
D.fls=new B.aw(1,0,-1.2)
D.flt=new B.aw(0,-0.8,0.9)
D.flu=new B.aw(11.9,0,-8)
D.flw=new B.aw(0.16,0.32,0.07)
D.flx=new B.aw(5,1,2)
D.fly=new B.aw(0,14.3,-1.5)
D.aO7=new B.aw(-13,8.6,-9.5)
D.flC=new B.aw(0,-0.2,0.14)
D.flG=new B.aw(7,0,-8)
D.aO8=new B.aw(7,3,0)
D.flI=new B.aw(-3.2,1.3,-7.82)
D.flJ=new B.aw(-6.5,6.9,-3)
D.flK=new B.aw(0,0,0.26)
D.flL=new B.aw(8,3,0)
D.flM=new B.aw(0.4,0.38,0.12)
D.flN=new B.aw(0,0,-0.43)
D.aO9=new B.aw(11.2,4.5,-6)
D.aOa=new B.aw(0.08,3.8,2.4)
D.flO=new B.aw(1.5,1.3,0.6)
D.flQ=new B.aw(0,-1.78,0.27)
D.flT=new B.aw(3.2,0.12,-6.7)
D.flU=new B.aw(12,0,-8.1)
D.flW=new B.aw(1.25,0.28,0.1)
D.flX=new B.aw(24,0.08,16)
D.flZ=new B.aw(0,4,-7.9)
D.fm_=new B.aw(11.9,0,8)
D.fm1=new B.aw(-6.1,1.2,-6.4)
D.fm3=new B.aw(5,1.6,0.5)
D.fm5=new B.aw(0.1,-2,2.4)
D.fm6=new B.aw(0,0.2,2.8)
D.fm8=new B.aw(18.9,2.6,0)
D.fm9=new B.aw(-12,0,-8.1)
D.fma=new B.aw(11.8,4,0)
D.fmc=new B.aw(5.6,0.3,1.9)
D.fmf=new B.aw(-1,0,-1.2)
D.fmg=new B.aw(0,1.7,0)
D.fmi=new B.aw(-1,0,1.5)
D.fmj=new B.aw(0.18,0.12,0.08)
D.fmk=new B.aw(1.2,-1.7,2.3)
D.fmm=new B.aw(0.82,1.7,0.3)
D.fmn=new B.aw(-0.12,0,0)
D.fmp=new B.aw(1.1,2.05,0.04)
D.fmq=new B.aw(0,4.5,-2)
D.fmr=new B.aw(0,-0.5,0.6)
D.fms=new B.aw(0.22,0.04,0.02)
D.fmv=new B.aw(-0.85,4,-3.2)
D.fmw=new B.aw(0,-0.2,3.2)
D.aOb=new B.aw(0.42,0.34,0.12)
D.fmy=new B.aw(0,0,0.38)
D.fmA=new B.aw(5.2,3.9,-7.76)
D.fmC=new B.aw(0.07,0.3,0.03)
D.fmE=new B.aw(0,-0.2,0.19)
D.fmG=new B.aw(0,9.3,0)
D.fmJ=new B.aw(0.02,0.26,0.05)
D.fmK=new B.aw(0,-1.9,-1.2)
D.fmL=new B.aw(-3.2,1.15,-7.78)
D.aOc=new B.aw(-6.5,7.4,-3)
D.fmO=new B.aw(0,14.5,-1.5)
D.fmP=new B.aw(0,0.2,0)
D.fmR=new B.aw(3,1.55,-7.1)
D.aOe=new B.aw(0,-0.1,0.1)
D.fmS=new B.aw(0,0,0.04)
D.fmT=new B.aw(2.4,11.6,-3.6)
D.fmV=new B.aw(5,8.6,-2.25)
D.fmW=new B.aw(0,-1.78,0.3)
D.fmX=new B.aw(0,1.9,-1.2)
D.fmY=new B.aw(-2.4,11.6,-3.6)
D.fmZ=new B.aw(11.25,0,-2.25)
D.fn_=new B.aw(1,-1.8,2.4)
D.fn0=new B.aw(-11.8,4,0)
D.fn1=new B.aw(11.2,4.7,-6)
D.fn2=new B.aw(24,8,0.05)
D.fn4=new B.aw(0.12,0,0)
D.aOg=new B.aw(1.5,18,3.5)
D.fn8=new B.aw(3.5,3.1,-7.15)
D.fn9=new B.aw(-0.28,0.55,-0.8)
D.fna=new B.aw(0,-0.2,0.24000000000000002)
D.fnc=new B.aw(1,-0.2,0.14)
D.fnd=new B.aw(-1.9,0,-2.25)
D.fne=new B.aw(0,-0.9,1.1)
D.fnf=new B.aw(8.2,1.05,-6.7)
D.fnh=new B.aw(0.07,0.4,0.03)
D.fni=new B.aw(2,3.8,0.08)
D.fnj=new B.aw(0,-1.78,0.51)
D.fnl=new B.aw(0,0,-8.8)
D.fnm=new B.aw(0,0.7,-1)
D.fnp=new B.aw(-11.9,0,8)
D.fnq=new B.aw(7,0,1.5)
D.fnr=new B.aw(-8.4,0.7,-6.4)
D.fns=new B.aw(-3.2,1.45,-7.78)
D.fnt=new B.aw(-6.575,0,-0.25)
D.fnv=new B.aw(0,14.6,-1.5)
D.a6d=new B.aw(-13,12.5,0)
D.fnw=new B.aw(0,0,0.62)
D.fny=new B.aw(0.2,-0.3,-0.4)
D.aOi=new B.aw(10.85,18,0.5)
D.fnz=new B.aw(0,-1.78,0.5)
D.fnA=new B.aw(6.3,1.5,-7.2)
D.aOk=new B.aw(0,0.62,2.85)
D.aOl=new B.aw(0.05,8,16)
D.fnB=new B.aw(0,-1.2,5)
D.fnC=new B.aw(0.2,-2,2.6)
D.fnF=new B.aw(11.2,2.4,-5.18)
D.fnH=new B.aw(-1,-0.2,0.14)
D.fnI=new B.aw(0.7,0.5,0.05)
D.aOn=new B.aw(2,0.08,2.4)
D.fnK=new B.aw(-0.32,0,0.5)
D.fnM=new B.aw(0.14,0.35,17)
D.fnN=new B.aw(1.4,2.4,0.3)
D.fnO=new B.aw(40,1.6,14)
D.fnQ=new B.aw(0,1.95,0.31)
D.aOo=new B.aw(0.75,4.5,0.1)
D.fnR=new B.aw(0.12,0,0.05)
D.aOp=new B.aw(0.05,8,9.6)
D.fnW=new B.aw(0,8.2,0)
D.fnY=new B.aw(3.7,1.2,-7.1)
D.fnZ=new B.aw(8.2,0.05,-6.7)
D.fo_=new B.aw(0,-0.3,0)
D.fo0=new B.aw(6.575,0,-0.25)
D.fo1=new B.aw(3,3.21,-7.2)
D.fo2=new B.aw(9.8,5,-7.75)
D.fo3=new B.aw(0.34,0.62,0.86)
D.fo4=new B.aw(3,1.85,-7.1)
D.a6e=new B.aw(13,12.5,0)
D.foa=new B.aw(-6.5,7.9,-3)
D.fob=new B.aw(0,13.6,-1.5)
D.foc=new B.aw(-6.5,5,-3)
D.fod=new B.aw(0,0.7,1)
D.aOr=new B.aw(13,8.6,9.5)
D.foe=new B.aw(-3.6,4,-7.76)
D.fof=new B.aw(0.82,0.9,0.05)
D.fog=new B.aw(0,-5.5,-0.25)
D.fok=new B.aw(1.9,0,0)
D.fol=new B.aw(0.45,0.72,0.06)
D.fon=new B.aw(0,9.2,0)
D.foo=new B.aw(0,0.03,0)
D.fop=new B.aw(-1,0,-8)
D.foq=new B.aw(0,0.35,0.78)
D.fos=new B.aw(-11.9,0,-8)
D.fot=new B.aw(-8.4,1.9,-7.2)
D.aOs=new B.aw(1.25,1,0.1)
D.fov=new B.aw(11.2,0,-6)
D.fow=new B.aw(1.2,1.1,0.8)
D.foy=new B.aw(4.6,1.5,-3.6)
D.foz=new B.aw(0,-0.7,0.8)
D.foA=new B.aw(8.9,1.9,0.9)
D.foB=new B.aw(0,-1.55,-0.6)
D.foC=new B.aw(1.78,4.25,0.08)
D.foD=new B.aw(27,0.6,19)
D.foE=new B.aw(0,5.5,-0.25)
D.foF=new B.aw(-1.2,-1.6,2.2)
D.aOt=new B.aw(13,8.6,-9.5)
D.aOu=new B.aw(0.05,0.12,0.03)
D.aOv=new B.aw(8.2,0.95,-6.7)
D.foG=new B.aw(0.7,1.5,-7.2)
D.foH=new B.aw(0,15.3,-3.6)
D.foI=new B.aw(0.1,0,0)
D.foJ=new B.aw(0.32,0,0.5)
D.foL=new B.aw(-0.9,0,4.4)
D.foM=new B.aw(-6.5,7.2,-3)
D.foO=new B.aw(6.2,0.18,2.1)
D.foP=new B.aw(36,1.6,12)
D.foQ=new B.aw(15.5,2.6,0)
D.foS=new B.aw(14,1.5,3.5)
D.foT=new B.aw(5.2,3.9,-7.82)
D.aOw=new B.aw(2.3,7,0.5)
D.aOx=new B.aw(-13,8.6,9.5)
D.foW=new B.aw(0,-1.99,0.14)
D.foY=new B.aw(0,0,-2.4)
D.foZ=new B.aw(0.12,0.1,0.03)
D.fp_=new B.aw(9.8,5,-7.58)
D.aOy=new B.aw(0.5,1.4,2)
D.fp0=new B.aw(3.5,0.15,-7.2)
D.fp1=new B.aw(-3.6,4,-7.82)
D.fp6=new B.aw(-19.5,-1,-1.5)
D.fp7=new B.aw(6.85,4,-3.2)
D.aOA=new B.aw(0.12,3,1.9)
D.fp9=new B.aw(9.55,5.7,-7.5)
D.fpb=new B.aw(0.5,0.5,0.04)
D.fpc=new B.aw(0,3,0.9)
D.fpe=new B.aw(0.14,8,0.3)
D.fpf=new B.aw(1.9,0.05,1.35)
D.fph=new B.aw(0.6,0.12,0.03)
D.fpi=new B.aw(-10.7,1.2,-6.4)
D.aPh=new B.axC(null)
D.fsw=new B.ayv(null)
D.aPO=new B.aDf(null)})();(function staticFields(){$.h_o=null
$.h_n=null
$.h5i=0
$.hwV=C.T(x.N,x.k)
$.hxv=C.T(x.N,x.k)
$.hrA=C.T(x.N,C.aA("dB"))
$.cbL=C.a([],C.aA("P<agx>"))
$.fXs=0
$.apL="music"
$.fZK=null
$.hxg=C.T(x.N,x.k)
$.hyi=C.T(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"i4c","heg",()=>C.a([B.fEb("Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.",D.at_,D.ctM,"outlet",D.cCT,"Wall outlet",new B.fgp()),B.fEb("A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.",D.cGJ,D.d4P,"switch",D.cBw,"Light switch",new B.fgq()),B.fEb("A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.",D.at_,D.cWo,"gfci",D.cSP,"GFCI outlet",new B.fgr())],C.aA("P<a2M>")))
w($,"i2p","bBa",()=>{var v="led"
return C.a([B.aw0("Both together","Make the light glow only when BOTH switches are ON.",2,new B.f40(),v),B.aw0("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new B.f41(),v),B.aw0("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new B.f42(),v),B.aw0("Flip it","One switch only: make the light glow when the switch is OFF.",1,new B.f49(),v),B.aw0("Not both","Make the light go OFF only when both switches are ON.",2,new B.f4a(),v),B.aw0("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new B.f4b(),"buzzer")],C.aA("P<b8b>"))})
w($,"i2Q","bBb",()=>C.a([B.nB("UNIVERSE","Earth, space and gravity",A.Z0,A.aY,new B.f4r()),B.nB("ELECTRONICS LAB","Batteries, wires, real circuits",U.LO,A.aY,new B.f4s()),B.nB("CONSTRUCTION LAB","Wiring, plumbing and a real 3D house",A.xc,A.aR,new B.f4t()),B.nB("DISCOVERY LAB","Body Explorer: a real 3D human",D.Yd,A.bf,new B.f4E()),B.nB("TOOLBOX","Converter, clock, games",I.aho,A.cL,new B.f4H()),B.nB("MOLECULE MAKER","Join atoms into real molecules",A.LI,A.hq,new B.f4I()),B.nB("DNA LAB","Copy DNA, build a protein",D.Yd,A.bY,new B.f4J()),B.nB("ECOSYSTEM LAB","Grass, rabbits and foxes",A.xn,A.bf,new B.f4K()),B.nB("BALANCE LAB","Levers, weight and torque",D.bwb,A.aL,new B.f4L()),B.nB("GEAR LAB","Teeth, speed and force",A.Fc,A.cL,new B.f4M()),B.nB("LASER MAZE","Bend the beam with mirrors",E.ahK,A.aE,new B.f4N()),B.nB("LIGHT MIXER","Match colours with light",D.btV,A.b8,new B.f4u()),B.nB("CIPHER LAB","Make and crack secret codes",A.xz,A.aY,new B.f4v()),B.nB("REACTION LAB","Wire parts together",A.xD,A.bs,new B.f4w()),B.nB("SPARK PAINTER","Paint with light",A.Yf,A.bY,new B.f4x()),B.nB("ROCKET LANDER","Land softly on the pad",A.mS,A.aY,new B.f4y()),B.nB("ORBIT STUDIO","Slingshot planets",A.m9,A.cL,new B.f4z()),B.nB("SWARM STUDIO","A living school of fish",A.LI,A.bf,new B.f4A()),B.nB("CHAIN BURST","One tap, a whole chain",A.h3,A.bY,new B.f4B()),B.nB("TITLE ANIMATOR","Make a moving title",A.xv,A.cr,new B.f4C()),B.nB("CIRCUIT LAB","Connect logic, learn it",A.YH,A.cw,new B.f4D()),B.nB("MARBLE MUSIC","Marbles ring the notes",D.btB,A.b8,new B.f4F()),B.nB("ORBIT SEQUENCER","Planets play the tune",D.bw_,A.bz,new B.f4G())],C.aA("P<bpK>")))
w($,"i4k","pQ",()=>{var v,u,t=C.T(x.N,x.dV)
for(v=0;v<76;++v){u=D.OJ[v]
t.n(0,u.a,u)}return t})
w($,"i2q","afY",()=>C.a([B.Ez("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new B.f4c()),B.Ez("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new B.f4d()),B.Ez("Spin the motor","A battery and a motor in a loop will make it spin.",new B.f4e()),B.Ez("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new B.f4f()),B.Ez("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new B.f4g()),B.Ez("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new B.f43()),B.Ez("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new B.f44()),B.Ez("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new B.f45()),B.Ez("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new B.f46()),B.Ez("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new B.f47()),B.Ez("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new B.f48())],C.aA("P<b8c>")))
w($,"i2S","hdA",()=>C.a([B.a_c("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aL,A.cd,new B.f4V()),B.a_c("Focus Timer","Work, then rest","\u23f1\ufe0f",A.cx,A.bM,new B.f4W()),B.a_c("Breathe","Calm down in a minute","\ud83e\udee7",A.hq,A.ct,new B.f4X()),B.a_c("Draw Pad","Sketch and share","\ud83c\udfa8",A.by,A.b2,new B.f4Y()),B.a_c("Memory Match","Find the pairs","\ud83c\udccf",A.aY,A.c8,new B.f4Z()),B.a_c("Simon Sounds","Copy the tune","\ud83c\udfb5",A.cr,A.bl,new B.f5_()),B.a_c("Tip & Split","Share the bill","\ud83e\uddfe",A.bf,A.aZ,new B.f50()),B.a_c("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bz,A.aD,new B.f51())],C.aA("P<br4>")))
w($,"i2R","hdz",()=>C.a([B.adm("EARTH GLOBE","Turn it, tap a country",A.m9,A.aY,new B.f4O()),B.adm("SOLAR SYSTEM","The Sun and its worlds",D.btE,A.aL,new B.f4P()),B.adm("GRAVITY LAB","Drop, weigh, orbit",D.ait,A.cL,new B.f4Q()),B.adm("BLACK HOLE","Throw in a star",A.EI,A.bz,new B.f4R()),B.adm("GALAXY","Build, tilt, collide",A.xa,A.fV,new B.f4S()),B.adm("SIZE COMPARE","Earth next to a star",D.btX,A.bY,new B.f4T()),B.adm("SEASONS & MOON","Why it is summer",A.uL,A.bs,new B.f4U())],C.aA("P<br_>")))})()};
(a=>{a["d9wlz04F5Mz9QOKserCCc3xGWUg="]=a.current})($__dart_deferred_initializers__);